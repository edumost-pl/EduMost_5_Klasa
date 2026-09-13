#!/usr/bin/env python3
"""Generate draft Polish lessons for EduMost klasa 5 (Między nami)."""
from __future__ import annotations

import json
import re
from pathlib import Path

from _catalog import CHAPTERS, LESSONS

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
SKIP = {"sytuacja-komunikacyjna", "apostrofa", "Jakie_tajemnice_kosmosu", "Doskonalimy_czytanie", "pisownia-wymienna", "podmiot-liryczny"}  # hand-authored; do not overwrite


def j(s):
    return json.dumps(s, ensure_ascii=False)


def rich(s):
    if s is None:
        return j("")
    parts = re.split(r"\*\*(.+?)\*\*", s)
    if len(parts) == 1:
        return j(s)
    bits = []
    for i, p in enumerate(parts):
        if p == "":
            continue
        bits.append(f"em({j(p)})" if i % 2 else j(p))
    if len(bits) == 1:
        return bits[0]
    return "[" + ", ".join(bits) + "]"


def text_block(pl_lines, ua_lines):
    pl_js = ",\n          ".join(rich(x) for x in pl_lines)
    ua_js = ",\n          ".join(rich(x) for x in ua_lines)
    return (
        "      text: {\n"
        f"        pl: [\n          {pl_js}\n        ],\n"
        f"        ua: [\n          {ua_js}\n        ]\n"
        "      }"
    )


def dual(obj):
    return "{ pl: %s, ua: %s }" % (j(obj["pl"]), j(obj["ua"]))


def opt_js(opt):
    return "{ id: %s, label: %s }" % (j(opt["id"]), dual(opt["label"]))


def task_js(task, indent="        "):
    lines = [
        indent + "task: {",
        indent + "  id: %s," % j(task["id"]),
        indent + "  type: %s," % j(task["type"]),
        indent + "  level: %s," % j(task.get("level", "A")),
        indent + "  question: %s," % dual(task["question"]),
    ]
    if task["type"] == "single-choice":
        opts = ",\n".join(indent + "    " + opt_js(o) for o in task["options"])
        lines.append(indent + "  options: [")
        lines.append(opts)
        lines.append(indent + "  ],")
        lines.append(indent + "  answer: %s," % j(task["answer"]))
    elif task["type"] == "true-false":
        lines.append(indent + "  answer: %s," % ("true" if task["answer"] else "false"))
    elif task["type"] == "input-text":
        ans = task["answer"]
        if isinstance(ans, list):
            lines.append(indent + "  answer: [%s]," % ", ".join(j(a) for a in ans))
        else:
            lines.append(indent + "  answer: %s," % j(ans))
    if task.get("hint"):
        lines.append(indent + "  hint: %s," % dual(task["hint"]))
    if task.get("explanation"):
        lines.append(indent + "  explanation: %s" % dual(task["explanation"]))
    else:
        lines[-1] = lines[-1].rstrip(",")
    lines.append(indent + "}")
    return "\n".join(lines)


def mark_js(item):
    pl, plm, ua, uam = item
    return "        mark(\n          %s,\n          %s,\n          %s,\n          %s\n        )" % (
        j(pl),
        j(plm),
        j(ua),
        j(uam),
    )


def folder_name(lesson):
    return "%02d-%s" % (lesson["n"], lesson["id"])


def pad(n):
    return "%02d" % n


def content_js(lesson, nxt):
    blocks = []

    blocks.append(
        """    {
      type: "intro",
      heading: %s,
      formula: %s,
      %s
    }"""
        % (
            dual(lesson["intro_h"]),
            j(lesson.get("formula", "")),
            text_block(lesson["intro_pl"], lesson["intro_ua"]),
        )
    )

    goals = ",\n        ".join("{ pl: %s, ua: %s }" % (j(g["pl"]), j(g["ua"])) for g in lesson["goals"])
    blocks.append(
        """    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        %s
      ]
    }"""
        % goals
    )

    for c in lesson["teach"]:
        blocks.append(
            """    {
      type: "concept",
      heading: %s,
      %s
    }"""
            % (dual(c["h"]), text_block(c["pl"], c["ua"]))
        )

    if lesson.get("choice"):
        blocks.append(
            """    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      %s
    }"""
            % task_js(lesson["choice"])
        )

    if lesson.get("fill"):
        blocks.append(
            """    {
      type: "practice",
      heading: { pl: "Napisz", ua: "Напиши" },
      %s
    }"""
            % task_js(lesson["fill"])
        )

    if lesson.get("wrong"):
        w = lesson["wrong"]
        blocks.append(
            """    {
      type: "mistake",
      heading: { pl: "Znajdź błąd", ua: "Знайди помилку" },
      claim: %s,
      %s
    }"""
            % (dual(w["claim"]), text_block(w["pl"], w["ua"]))
        )

    if lesson.get("oral"):
        o = lesson["oral"]
        blocks.append(
            """    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: %s,
      %s,
      %s
    }"""
            % (
                dual(o["prompt"]),
                text_block(
                    o.get("pl", ["Powiedz na głos, potem wybierz podsumowanie."]),
                    o.get("ua", ["Скажи вголос, потім вибери підсумок."]),
                ),
                task_js(o["task"]),
            )
        )

    marks = ",\n".join(mark_js(m) for m in lesson["remember"])
    blocks.append(
        """    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
%s
      ]
    }"""
        % marks
    )

    if nxt:
        next_pl = "Następna lekcja: %s." % nxt["title"]["pl"]
        next_ua = "Наступний урок: %s." % nxt["title"]["ua"]
    else:
        next_pl = "To ostatnia lekcja języka polskiego w tym roku — wróć do Zapamiętaj, gdy trzeba powtórzyć."
        next_ua = "Це останній урок польської цього року — повернись до «Запам’ятай», коли треба повторити."
    blocks.append(
        """    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          %s,
          %s
        ],
        ua: [
          %s,
          %s
        ]
      }
    }"""
        % (
            j(next_pl),
            j("W klasie przeczytaj odpowiedni tekst i zrób ćwiczenia z «Między nami»."),
            j(next_ua),
            j("У класі прочитай відповідний текст і зроби вправи з «Między nami»."),
        )
    )

    return """function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
%s
  ]
};
""" % (",\n".join(blocks))


INDEX = """<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>EduMost</title>
  <link rel="stylesheet" href="../../../css/edumost.css">
  <link rel="stylesheet" href="../../../css/lesson.css">
  <link rel="stylesheet" href="../../../css/lesson-blocks.css">
  <link rel="stylesheet" href="../../../css/tasks.css">
</head>
<body data-subject="polski" data-topic="{topic}">
  <div class="page lesson-shell">
    <div class="topbar">
      <a href="../../../subjects/polski.html" class="back-link" id="back-subject">← Język polski</a>
      <div class="lang-toggle">
        <button data-lang="pl">🇵🇱 Polski</button>
        <button data-lang="ua">🇺🇦 Українська</button>
      </div>
    </div>
    <header class="lesson-identity" id="lesson-identity"></header>
    <div id="lesson-progress"></div>
    <div id="lesson-stage"></div>
    <div id="lesson-nav"></div>
  </div>
  <script src="../../../js/i18n.js?v=pol1"></script>
  <script src="../../../js/curriculum.js?v=pol1"></script>
  <script src="../../../data/lessons.js?v=pol1"></script>
  <script src="../../../data/assets.js"></script>
  <script src="../../../data/tasks.js"></script>
  <script src="../../../js/progress.js"></script>
  <script src="../../../js/feedback.js"></script>
  <script src="../../../js/svg-renderer.js"></script>
  <script src="../../../js/task-types.js"></script>
  <script src="../../../js/task-engine.js"></script>
  <script src="../../../js/lesson-renderer.js"></script>
  <script src="../../../js/lesson-navigation.js"></script>
  <script src="./lesson.js"></script>
  <script src="./content.js"></script>
  <script src="./assets.js"></script>
  <script src="../../../js/lesson-engine.js?v=pol1"></script>
</body>
</html>
"""


def write_lesson(lesson, nxt):
    slug = lesson["id"]
    if slug in SKIP:
        return
    folder = OUT / folder_name(lesson)
    folder.mkdir(parents=True, exist_ok=True)
    (folder / "index.html").write_text(INDEX.format(topic=slug), encoding="utf-8")
    (folder / "lesson.js").write_text(
        "window.EduMostLessonMeta = {\n"
        '  id: %s,\n'
        '  subject: "polski",\n'
        "  topicId: %s\n"
        "};\n" % (j("pol-%s-%s" % (pad(lesson["n"]), slug)), j(slug)),
        encoding="utf-8",
    )
    (folder / "assets.js").write_text("window.EduMostLessonAssets = {};\n", encoding="utf-8")
    (folder / "content.js").write_text(content_js(lesson, nxt), encoding="utf-8")


def curriculum_js():
    by_ch = {c[0]: [] for c in CHAPTERS}
    for L in LESSONS:
        by_ch[L["ch"]].append(L)
    ch_parts = []
    for cid, roman, pl, ua in CHAPTERS:
        topics = []
        for L in by_ch[cid]:
            topics.append(
                '              { id: %s, page: %s, lesson: %s, title: { pl: %s, ua: %s } }'
                % (j(L["id"]), L["page"], j(folder_name(L)), j(L["title"]["pl"]), j(L["title"]["ua"]))
            )
        ch_parts.append(
            """          {
            id: %s,
            roman: %s,
            title: { pl: %s, ua: %s },
            topics: [
%s
            ]
          }"""
            % (j(cid), j(roman), j(pl), j(ua), ",\n".join(topics))
        )
    return """  polski: {
    id: "polski",
    icon: "📖",
    name: { pl: "Język polski", ua: "Польська мова" },
    book: {
      title: "Między nami",
      parts: "podręcznik do klasy 5",
      author: "Anna Murdzek, Agnieszka Łuczak",
      publisher: "Gdańskie Wydawnictwo Oświatowe",
      nr: "867/2/2018"
    },
    tocStatus: "confirmed",
    hidePath: true,
    parts: [
      {
        id: "podrecznik",
        title: { pl: "Podręcznik", ua: "Підручник" },
        chapters: [
%s
        ]
      }
    ]
  },""" % (",\n".join(ch_parts))


def lessons_map_js():
    lines = []
    for L in LESSONS:
        key = "polski/" + L["id"]
        lines.append(
            '  %s: {\n    id: %s,\n    subject: "polski",\n    topicId: %s,\n    folder: %s\n  }'
            % (j(key), j("pol-%s-%s" % (pad(L["n"]), L["id"])), j(L["id"]), j(folder_name(L)))
        )
    return ",\n".join(lines)


def patch_curriculum(js):
    path = ROOT / "js" / "curriculum.js"
    text = path.read_text(encoding="utf-8")
    start = text.find("  polski:")
    if start < 0:
        raise SystemExit("polski block not found")
    end = text.find("  angielski:", start)
    if end < 0:
        raise SystemExit("angielski block not found")
    path.write_text(text[:start] + js + "\n\n" + text[end:], encoding="utf-8")


def patch_lessons_js(fragment):
    path = ROOT / "data" / "lessons.js"
    text = path.read_text(encoding="utf-8")
    marker = '  "historia/zycie-pierwszych-ludzi"'
    if '"polski/' in text:
        # replace existing polski keys: from first polski to historia
        start = text.find('  "polski/')
        end = text.find(marker)
        if start < 0 or end < 0:
            raise SystemExit("cannot replace polski keys")
        text = text[:start] + fragment + ",\n  " + text[end:].lstrip()
    else:
        text = text.replace(marker, fragment + ",\n" + marker, 1)
    path.write_text(text, encoding="utf-8")


def main():
    nums = [L["n"] for L in LESSONS]
    if nums != list(range(1, len(LESSONS) + 1)):
        raise SystemExit("lesson numbers must be 1..N without gaps, got %s" % nums)
    ids = [L["id"] for L in LESSONS]
    if len(ids) != len(set(ids)):
        raise SystemExit("duplicate ids")
    for i, L in enumerate(LESSONS):
        nxt = LESSONS[i + 1] if i + 1 < len(LESSONS) else None
        write_lesson(L, nxt)
    patch_curriculum(curriculum_js())
    patch_lessons_js(lessons_map_js())
    print("wrote %d lessons" % len(LESSONS))


if __name__ == "__main__":
    main()
