(function (g) {
  const META = {
    intro: { icon: "👋", titleKey: "blkIntro" },
    "lesson-intro": { icon: "👋", titleKey: "blkIntro" },
    goal: { icon: "🎯", titleKey: "blkGoal" },
    observe: { icon: "👀", titleKey: "blkObserve" },
    concept: { icon: "🧠", titleKey: "blkConcept" },
    visual: { iconKind: "visual", titleKey: "blkVisual" },
    example: { icon: "✏️", titleKey: "blkExample" },
    algorithm: { icon: "🪜", titleKey: "blkAlgorithm" },
    "guided-practice": { icon: "🤝", titleKey: "blkGuided" },
    practice: { icon: "🧩", titleKey: "blkPractice" },
    task: { icon: "🎮", titleKey: "blkTry" },
    mistake: { icon: "🔎", titleKey: "blkMistake" },
    comparison: { icon: "⚖️", titleKey: "blkCompare" },
    classification: { icon: "🗂️", titleKey: "blkClass" },
    problem: { icon: "🧩", titleKey: "blkProblem" },
    challenge: { icon: "⭐", titleKey: "blkChallenge" },
    check: { icon: "🏆", titleKey: "blkCheck" },
    summary: { icon: "🧠", titleKey: "blkSummary" },
    reflection: { icon: "💭", titleKey: "blkReflect" },
    review: { icon: "🔁", titleKey: "blkReview" },
    vocabulary: { icon: "🇵🇱", titleKey: "blkVocab" }
  };

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
      if (t === "") return "";
      return '<strong class="tx-mark">' + esc(t) + "</strong>";
    }
    if (part.bold) {
      const t = part.text != null ? part.text : (part.t != null ? part.t : "");
      if (t === "") return "";
      return '<strong class="tx-bold">' + esc(t) + "</strong>";
    }
    if (Array.isArray(part.parts)) return part.parts.map(partHtml).join("");
    if (part.mark != null && part.t == null && part.text == null) {
      return "<strong>" + esc(part.mark) + "</strong>";
    }

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

  function inlineHtml(line) {
    if (line == null || line === "") return "";
    return partHtml(line);
  }

  function paraHtml(value, cls) {
    if (value == null || value === "") return "";
    const lines = Array.isArray(value) ? value : [value];
    return lines.map(function (line) {
      if (line == null || line === "") return "";
      const inner = inlineHtml(line);
      if (!inner) return "";
      return '<p class="' + cls + '">' + inner + "</p>";
    }).join("");
  }

  function onePara(line, cls) {
    if (line == null || line === "") return "";
    const inner = inlineHtml(line);
    if (!inner) return "";
    return '<p class="' + cls + '">' + inner + "</p>";
  }

  function prose(obj) {
    if (!obj) return "";
    if (typeof obj === "string" || Array.isArray(obj)) return paraHtml(obj, "tx-pl");
    const plLines = Array.isArray(obj.pl) ? obj.pl : (obj.pl != null && obj.pl !== "" ? [obj.pl] : []);
    const uaLines = Array.isArray(obj.ua) ? obj.ua : (obj.ua != null && obj.ua !== "" ? [obj.ua] : []);
    if (EduMostI18n.getLang() !== "ua" || !uaLines.length) return paraHtml(obj.pl, "tx-pl");
    let html = "";
    const n = Math.max(plLines.length, uaLines.length);
    for (let i = 0; i < n; i++) {
      if (i < plLines.length) html += onePara(plLines[i], "tx-pl");
      if (i < uaLines.length) html += onePara(uaLines[i], "tx-ua");
    }
    return html;
  }

  function mathLine(s) {
    if (!s) return "";
    return '<p class="math-line">' + esc(s) + "</p>";
  }

  function visualBox(spec) {
    const html = window.EduMostSvg ? EduMostSvg.render(spec) : "";
    if (html) return '<div class="viz">' + html + "</div>";
    return "";
  }

  const ICONS = {
    visual:
      '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false">' +
        '<rect x="2.75" y="3.75" width="26.5" height="24.5" rx="6.5" stroke="currentColor" stroke-width="1.75" fill="currentColor" fill-opacity=".08"/>' +
        '<rect x="8" y="16.75" width="4.3" height="7.25" rx="1.15" fill="currentColor" fill-opacity=".38"/>' +
        '<rect x="13.85" y="12.6" width="4.3" height="11.4" rx="1.15" fill="currentColor" fill-opacity=".68"/>' +
        '<rect x="19.7" y="9.35" width="4.3" height="14.65" rx="1.15" fill="currentColor"/>' +
      "</svg>"
  };

  function headingIcon(meta) {
    if (meta.iconKind && ICONS[meta.iconKind]) {
      return '<span class="block-icon" aria-hidden="true">' + ICONS[meta.iconKind] + "</span>";
    }
    const icon = meta.icon || "";
    if (!icon) return "";
    return '<span class="emoji">' + icon + "</span> ";
  }

  function heading(block) {
    const meta = META[block.type] || { icon: "📦", titleKey: "" };
    const custom = block.heading;
    let titleHtml;
    if (custom && typeof custom === "object") {
      const pl = esc(custom.pl || "");
      const ua = EduMostI18n.getLang() === "ua" && custom.ua
        ? '<span class="name-ua">' + esc(custom.ua) + "</span>" : "";
      titleHtml = pl + ua;
    } else {
      const title = custom
        ? String(custom)
        : (meta.titleKey ? EduMostI18n.t(meta.titleKey) : block.type);
      titleHtml = esc(title);
    }
    const iconHtml = headingIcon(meta);
    if (meta.iconKind && ICONS[meta.iconKind]) {
      return '<h2 class="block-title">' + iconHtml +
        '<span class="block-title-text">' + titleHtml + "</span></h2>";
    }
    return '<h2 class="block-title">' + iconHtml + titleHtml + "</h2>";
  }

  function stepHtml(step) {
    return (step.formula ? mathLine(step.formula) : "") +
      (step.visual ? visualBox(step.visual) : "") +
      (step.text ? prose(step.text) : "");
  }

  function revealNode(steps) {
    const wrap = document.createElement("div");
    wrap.className = "step-reveal";
    let shown = 1;
    function paint() {
      wrap.innerHTML = steps.slice(0, shown).map(function (step, i) {
        return '<div class="reveal-step">' + stepHtml(step) + "</div>";
      }).join("");
      if (shown < steps.length) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "step-next";
        btn.textContent = EduMostI18n.t("nextStep");
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
    const task = EduMostTaskEngine.resolve(block);
    if (!task) return null;
    const hold = document.createElement("div");
    hold.className = "task-slot";
    EduMostTaskEngine.mount(hold, task, {
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
    let html = '<table class="vocab-table"><thead><tr><th>' + esc(EduMostI18n.t("langTerm")) +
      "</th><th>" + esc(EduMostI18n.t("langTranslation")) + "</th></tr></thead><tbody>" + body + "</tbody></table>";
    if (block.phrases && block.phrases.length) {
      html += '<p class="phrases-label">' + esc(EduMostI18n.t("teacherAsk")) + "</p><ul class=\"phrase-list\">";
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
    const no = EduMostI18n.t("verdictNo");
    return '<div class="claim">' + (block.claim ? prose(block.claim) : "") + "</div>" +
      '<p class="verdict">❌ ' + esc(no) + "</p>" +
      (block.visual ? visualBox(block.visual) : "") +
      (block.text ? prose(block.text) : "");
  }

  function appendHtml(slot, html) {
    if (!html) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    while (tmp.firstChild) slot.appendChild(tmp.firstChild);
  }

  function render(mount, block, ctx) {
    if (!mount || !block) return;
    const wrap = document.createElement("article");
    wrap.className = "lesson-block";
    wrap.setAttribute("data-type", block.type);
    wrap.innerHTML = heading(block);
    const slot = document.createElement("div");
    slot.className = "block-body";

    const special = { goal: 1, vocabulary: 1, mistake: 1 };
    const visualAfter = block.visual && block.visual.place === "after";
    const promptHtml = block.prompt
      ? '<div class="prompt">' + prose(block.prompt) + "</div>"
      : "";
    const promptBefore = block.promptPlace === "before";
    if (!special[block.type]) {
      if (block.visual && !block.steps && !visualAfter) appendHtml(slot, visualBox(block.visual));
      if (block.formula) appendHtml(slot, mathLine(block.formula));
      if (promptBefore) appendHtml(slot, promptHtml);
      if (block.text) appendHtml(slot, prose(block.text));
      if (!promptBefore) appendHtml(slot, promptHtml);
      if (visualAfter && !block.steps) appendHtml(slot, visualBox(block.visual));
    }

    if (block.type === "goal") {
      if (promptBefore) appendHtml(slot, promptHtml);
      appendHtml(slot, goalHtml(block));
      if (!promptBefore) appendHtml(slot, promptHtml);
    } else if (block.type === "vocabulary") {
      if (promptBefore) appendHtml(slot, promptHtml);
      appendHtml(slot, vocabHtml(block));
      if (!promptBefore) appendHtml(slot, promptHtml);
    }
    else if (block.type === "mistake") appendHtml(slot, mistakeHtml(block));
    else if (block.items) {
      appendHtml(slot, "<ul class=\"block-list\">" + block.items.map(function (item) {
        return "<li>" + prose(item) + "</li>";
      }).join("") + "</ul>");
    }

    if (block.steps && block.steps.length) {
      if (block.reveal) slot.appendChild(revealNode(block.steps));
      else appendHtml(slot, block.steps.map(stepHtml).join(""));
    }

    const task = taskNode(block, ctx);
    if (task) slot.appendChild(task);

    if (!slot.childNodes.length) {
      appendHtml(slot, '<div class="block-empty">' + esc(EduMostI18n.t("placeholder")) + "</div>");
    }

    wrap.appendChild(slot);
    mount.innerHTML = "";
    mount.appendChild(wrap);
  }

  g.EduMostLessonRenderer = { render: render, META: META };
  g.b = function (text) {
    return { text: text, bold: true };
  };
})(window);
