/**
 * Math lesson body extension (matematyka only).
 *
 * Load AFTER js/lesson-renderer.js. Does not change the shared player file.
 * Blocks without `parts` → same as before.
 *
 *   parts: [
 *     { formula: "12 : 3 = 4" },
 *     { text: { pl: ["…"], ua: ["…"] } },
 *     { items: [ { pl: "…", ua: "…" } ] },
 *     { rule: { label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
 *              lines: { pl: "…", ua: "…" } } },
 *     { visual: { kind: "…", … } },
 *     { prompt: { pl: "…", ua: "…" } }
 *   ]
 *
 * `type` of the screen stays intro/concept/… — never type: "parts".
 */
(function (g) {
  const base = g.EduMostLessonRenderer;
  if (!base || typeof base.render !== "function") {
    console.warn("[math-lesson-renderer] load lesson-renderer.js first");
    return;
  }

  const baseRender = base.render.bind(base);
  const META = base.META || {};

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function markedHtml(s) {
    s = String(s);
    const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let html = "";
    let last = 0;
    let m;
    while ((m = re.exec(s))) {
      html += esc(s.slice(last, m.index));
      if (m[1] != null) {
        html += '<strong class="tx-mark">' + esc(m[1]) + "</strong>";
      } else {
        html += '<strong class="tx-bold">' + esc(m[2]) + "</strong>";
      }
      last = re.lastIndex;
    }
    return html + esc(s.slice(last));
  }

  function partHtml(part) {
    if (part == null || part === "") return "";
    if (typeof part === "string") return markedHtml(part);
    if (typeof part === "number") return esc(part);
    if (Array.isArray(part)) return part.map(partHtml).join("");
    if (typeof part !== "object") return esc(part);
    if (part.emphasis) {
      const t = part.text != null ? part.text : (part.t != null ? part.t : "");
      return t === "" ? "" : '<strong class="tx-mark">' + esc(t) + "</strong>";
    }
    if (part.bold) {
      const t = part.text != null ? part.text : (part.t != null ? part.t : "");
      return t === "" ? "" : '<strong class="tx-bold">' + esc(t) + "</strong>";
    }
    if (Array.isArray(part.parts)) return part.parts.map(partHtml).join("");
    const text = part.t != null ? String(part.t) : (part.text != null ? String(part.text) : "");
    if (!text) return "";
    let html = esc(text);
    const marks = part.mark == null ? [] : (Array.isArray(part.mark) ? part.mark : [part.mark]);
    marks.forEach(function (m) {
      if (m == null || String(m) === "") return;
      const needle = esc(m);
      html = html.split(needle).join('<strong class="tx-mark">' + needle + "</strong>");
    });
    return html;
  }

  function onePara(line, cls) {
    if (line == null || line === "") return "";
    const inner = partHtml(line);
    return inner ? '<p class="' + cls + '">' + inner + "</p>" : "";
  }

  function paraHtml(value, cls) {
    if (value == null || value === "") return "";
    const lines = Array.isArray(value) ? value : [value];
    return lines.map(function (line) { return onePara(line, cls); }).join("");
  }

  function prose(obj) {
    if (!obj) return "";
    if (typeof obj === "string" || Array.isArray(obj)) return paraHtml(obj, "tx-pl");
    const plLines = Array.isArray(obj.pl) ? obj.pl : (obj.pl != null && obj.pl !== "" ? [obj.pl] : []);
    const uaLines = Array.isArray(obj.ua) ? obj.ua : (obj.ua != null && obj.ua !== "" ? [obj.ua] : []);
    if (g.EduMostI18n.getLang() !== "ua" || !uaLines.length) return paraHtml(obj.pl, "tx-pl");
    let html = "";
    const n = Math.max(plLines.length, uaLines.length);
    for (let i = 0; i < n; i++) {
      if (i < plLines.length) html += onePara(plLines[i], "tx-pl");
      if (i < uaLines.length) html += onePara(uaLines[i], "tx-ua");
    }
    return html;
  }

  function mathLine(s) {
    return s ? '<p class="math-line">' + esc(s) + "</p>" : "";
  }

  function visualBox(spec) {
    const html = g.EduMostSvg ? g.EduMostSvg.render(spec) : "";
    return html ? '<div class="viz">' + html + "</div>" : "";
  }

  function appendHtml(slot, html) {
    if (!html) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    while (tmp.firstChild) slot.appendChild(tmp.firstChild);
  }

  function hasParts(block) {
    return !!(block && Array.isArray(block.parts) && block.parts.length);
  }

  function stepHtml(step) {
    return (step.formula ? mathLine(step.formula) : "") +
      (step.visual ? visualBox(step.visual) : "") +
      (step.text ? prose(step.text) : "") +
      (step.html != null ? String(step.html) : "");
  }

  function revealNode(steps) {
    const wrap = document.createElement("div");
    wrap.className = "step-reveal";
    let shown = 1;
    function paint() {
      wrap.innerHTML = steps.slice(0, shown).map(function (step) {
        return '<div class="reveal-step">' + stepHtml(step) + "</div>";
      }).join("");
      if (shown < steps.length) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "step-next";
        btn.textContent = g.EduMostI18n.t("nextStep");
        btn.addEventListener("click", function () {
          shown += 1;
          paint();
        });
        wrap.appendChild(btn);
      }
    }
    paint();
    return wrap;
  }

  function taskNode(block, ctx) {
    const task = g.EduMostTaskEngine.resolve(block);
    if (!task) return null;
    const hold = document.createElement("div");
    hold.className = "task-slot";
    g.EduMostTaskEngine.mount(hold, task, {
      onResult: function (result) {
        if (ctx && ctx.onTask) ctx.onTask(task, result);
      }
    });
    return hold;
  }

  function vocabHtml(block) {
    const rows = block.rows || [];
    let body = "";
    rows.forEach(function (row) {
      body += "<tr><td><strong>" + esc(row.pl || "") + "</strong></td><td>" + esc(row.ua || "") + "</td></tr>";
    });
    let html = '<table class="vocab-table"><thead><tr><th>' + esc(g.EduMostI18n.t("langTerm")) +
      "</th><th>" + esc(g.EduMostI18n.t("langTranslation")) + "</th></tr></thead><tbody>" + body + "</tbody></table>";
    if (block.phrases && block.phrases.length) {
      html += '<p class="phrases-label">' + esc(g.EduMostI18n.t("teacherAsk")) + "</p><ul class=\"phrase-list\">";
      block.phrases.forEach(function (p) {
        html += "<li>" + prose(p) + "</li>";
      });
      html += "</ul>";
    }
    return html;
  }

  function goalHtml(block) {
    const items = block.items || [];
    if (!items.length) return prose(block.text);
    return '<ul class="goal-list">' + items.map(function (item) {
      return '<li><span class="goal-box" aria-hidden="true"></span>' + prose(item) + "</li>";
    }).join("") + "</ul>";
  }

  function mistakeHtml(block) {
    const no = g.EduMostI18n.t("verdictNo");
    return '<div class="claim">' + (block.claim ? prose(block.claim) : "") + "</div>" +
      '<p class="verdict">❌ ' + esc(no) + "</p>" +
      (block.visual ? visualBox(block.visual) : "") +
      (block.text ? prose(block.text) : "");
  }

  function headingHtml(block) {
    // Reuse base heading by rendering a tiny stub into a throwaway node
    const tmp = document.createElement("div");
    const stub = {
      type: block.type,
      heading: block.heading
    };
    baseRender(tmp, stub, null);
    const h = tmp.querySelector(".block-title");
    return h ? h.outerHTML : "";
  }

  function itemsHtml(items) {
    if (!items || !items.length) return "";
    return "<ul class=\"block-list\">" + items.map(function (item) {
      return "<li>" + prose(item) + "</li>";
    }).join("") + "</ul>";
  }

  /** Callout / правило: { rule: { label, formula?, text?, lines? } } */
  function ruleHtml(rule) {
    if (!rule || typeof rule !== "object") return "";
    let html = '<div class="math-rule">';
    if (rule.label != null) {
      html += '<div class="math-rule-label">' + prose(rule.label) + "</div>";
    }
    if (rule.formula != null && rule.formula !== "") {
      html += mathLine(rule.formula);
    }
    if (rule.lines != null) {
      if (typeof rule.lines === "string") {
        html += '<p class="math-rule-formula tx-pl">' + esc(rule.lines) + "</p>";
      } else {
        const pl = rule.lines.pl != null ? String(rule.lines.pl) : "";
        const ua = rule.lines.ua != null ? String(rule.lines.ua) : "";
        if (pl) html += '<p class="math-rule-formula tx-pl">' + esc(pl) + "</p>";
        if (ua && g.EduMostI18n.getLang() === "ua") {
          html += '<p class="math-rule-formula tx-ua">' + esc(ua) + "</p>";
        }
      }
    }
    if (rule.text != null) html += prose(rule.text);
    html += "</div>";
    return html;
  }

  function appendParts(slot, parts) {
    parts.forEach(function (part) {
      if (!part || typeof part !== "object") return;
      if (part.formula != null && part.formula !== "") appendHtml(slot, mathLine(part.formula));
      if (part.text != null) appendHtml(slot, prose(part.text));
      if (part.items != null) appendHtml(slot, itemsHtml(part.items));
      if (part.rule != null) appendHtml(slot, ruleHtml(part.rule));
      if (part.visual != null) appendHtml(slot, visualBox(part.visual));
      if (part.prompt != null) {
        appendHtml(slot, '<div class="prompt">' + prose(part.prompt) + "</div>");
      }
      if (part.html != null) appendHtml(slot, String(part.html));
    });
  }

  function renderWithParts(mount, block, ctx) {
    const wrap = document.createElement("article");
    wrap.className = "lesson-block";
    wrap.setAttribute("data-type", block.type);
    wrap.innerHTML = headingHtml(block);
    const slot = document.createElement("div");
    slot.className = "block-body";

    const special = { goal: 1, vocabulary: 1, mistake: 1 };

    if (block.type === "goal") appendHtml(slot, goalHtml(block));
    else if (block.type === "vocabulary") appendHtml(slot, vocabHtml(block));
    else if (block.type === "mistake") appendHtml(slot, mistakeHtml(block));
    else if (block.items && !special[block.type]) {
      appendHtml(slot, "<ul class=\"block-list\">" + block.items.map(function (item) {
        return "<li>" + prose(item) + "</li>";
      }).join("") + "</ul>");
    }

    appendParts(slot, block.parts);

    // Same-screen worked example after parts
    if (block.steps && block.steps.length) {
      if (block.reveal) slot.appendChild(revealNode(block.steps));
      else appendHtml(slot, block.steps.map(stepHtml).join(""));
    }

    // Top-level prompt only if none inside parts
    const partsHavePrompt = block.parts.some(function (p) { return p && p.prompt != null; });
    if (!partsHavePrompt && block.prompt) {
      const promptHtml = '<div class="prompt">' + prose(block.prompt) + "</div>";
      if (block.promptPlace === "before") {
        slot.insertAdjacentHTML("afterbegin", promptHtml);
      } else {
        appendHtml(slot, promptHtml);
      }
    }

    const task = taskNode(block, ctx);
    if (task) slot.appendChild(task);

    if (!slot.childNodes.length) {
      appendHtml(slot, '<div class="block-empty">' + esc(g.EduMostI18n.t("placeholder")) + "</div>");
    }

    wrap.appendChild(slot);
    mount.innerHTML = "";
    mount.appendChild(wrap);
  }

  function render(mount, block, ctx) {
    if (!hasParts(block)) return baseRender(mount, block, ctx);
    return renderWithParts(mount, block, ctx);
  }

  g.EduMostLessonRenderer = {
    render: render,
    META: META,
    mathParts: true
  };

  g.EduMostMathLessonRenderer = {
    render: render,
    version: 2
  };
})(window);
