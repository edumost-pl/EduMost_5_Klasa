/**
 * Lesson-local English TTS · 1b Present Simple (03-present-simple).
 * Does not change the shared lesson engine.
 *
 * Block contracts (this lesson):
 *   block.speakItems      — vocabulary table with 🔊 per phrase
 *   block.enPrompt        — EN instruction + PL/UA via lang toggle
 *   block.mustKnow        — single MUST KNOW card (EN + PL; UA via 🇺🇦)
 *   block.habitDiscovery  — Screen 2: sentences → EVERY DAY → again and again → HABIT
 *   block.habitToPs       — Screen 3: HABIT → PRESENT SIMPLE meaning bridge
 *   block.psTeach         — Screens 4–9: baseVerb / heSheIt / whyS / spelling / frequency / wordOrder
 *   block.taskSequence    — progressive quiz (single-choice, order-build)
 */
(function () {
  function pickEnVoice() {
    if (!window.speechSynthesis || typeof speechSynthesis.getVoices !== "function") return null;
    var voices = speechSynthesis.getVoices() || [];
    var i;
    for (i = 0; i < voices.length; i++) {
      if (voices[i].lang === "en-GB") return voices[i];
    }
    for (i = 0; i < voices.length; i++) {
      if (/^en-GB/i.test(voices[i].lang || "") || /British|UK/i.test(voices[i].name || "")) return voices[i];
    }
    for (i = 0; i < voices.length; i++) {
      if (voices[i].lang === "en-US") return voices[i];
    }
    for (i = 0; i < voices.length; i++) {
      if (/^en(-|$)/i.test(voices[i].lang || "")) return voices[i];
    }
    return null;
  }

  function speakEn(text) {
    if (!text || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = "en-GB";
    u.rate = 0.9;
    var voice = pickEnVoice();
    if (voice) {
      u.voice = voice;
      if (voice.lang) u.lang = voice.lang;
    }
    speechSynthesis.speak(u);
  }

  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    if (typeof speechSynthesis.onvoiceschanged !== "undefined") {
      speechSynthesis.onvoiceschanged = function () {
        pickEnVoice();
      };
    }
  }

  window.EduMostSpeak = { en: speakEn };

  function showUa() {
    return window.EduMostI18n && EduMostI18n.getLang() === "ua";
  }

  function miniButton(phrase) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "edumost-speak-mini";
    btn.setAttribute("aria-label", "Listen: " + phrase);
    btn.textContent = "🔊";
    btn.style.cssText =
      "display:inline-flex;align-items:center;justify-content:center;" +
      "flex:0 0 auto;width:1.7rem;height:1.7rem;padding:0;margin:0;" +
      "border:1px solid #c5d4e8;border-radius:999px;background:#f3f7fc;" +
      "font-size:.85rem;line-height:1;cursor:pointer;vertical-align:middle;";
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      speakEn(phrase);
    });
    return btn;
  }

  function renderSpeakTable(mount, block) {
    var items = block.speakItems;
    if (!items || !items.length) return null;

    var old = mount.querySelector(".edumost-speak-table-wrap");
    if (old) old.remove();

    var ua = showUa();
    var wrap = document.createElement("div");
    wrap.className = "edumost-speak-table-wrap";
    wrap.style.cssText = "margin:1rem 0;";

    var table = document.createElement("table");
    table.className = "vocab-table edumost-speak-table";

    var thead = document.createElement("thead");
    var hr = document.createElement("tr");
    var thEn = document.createElement("th");
    thEn.textContent = "English";
    var thTr = document.createElement("th");
    thTr.textContent = ua ? "Українська" : "Polski";
    hr.appendChild(thEn);
    hr.appendChild(thTr);
    thead.appendChild(hr);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    items.forEach(function (item) {
      var phrase = item.speak || item.en || "";
      if (!phrase) return;
      var tr = document.createElement("tr");

      var tdEn = document.createElement("td");
      var enWrap = document.createElement("div");
      enWrap.style.cssText = "display:flex;align-items:center;gap:.35rem;flex-wrap:wrap;";
      var strong = document.createElement("strong");
      strong.textContent = phrase;
      strong.style.cssText = "font-size:1.05rem;";
      enWrap.appendChild(strong);
      enWrap.appendChild(miniButton(phrase));
      tdEn.appendChild(enWrap);

      var tdTr = document.createElement("td");
      if (ua && item.ua) {
        var uaEl = document.createElement("span");
        uaEl.className = "tx-ua";
        uaEl.style.marginTop = "0";
        uaEl.textContent = item.ua;
        tdTr.appendChild(uaEl);
      } else {
        tdTr.textContent = item.pl || "";
      }

      tr.appendChild(tdEn);
      tr.appendChild(tdTr);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
  }

  /** Screen 1 · one clear MUST KNOW card. */
  function renderMustKnow(block) {
    var data = block && block.mustKnow;
    if (!data || !data.en) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-must-know";
    root.style.cssText =
      "margin:0 0 1rem;padding:.85rem 1rem;border-radius:14px;" +
      "border:2px solid #0f766e;background:#ecfdf5;";

    var title = document.createElement("p");
    title.style.cssText =
      "margin:0 0 .55rem;font-size:.82rem;font-weight:800;letter-spacing:.08em;color:#0f766e;";
    title.textContent = "MUST KNOW";
    root.appendChild(title);

    var en = document.createElement("p");
    en.style.cssText = "margin:0;font-size:1.05rem;font-weight:700;color:#0f172a;line-height:1.45;";
    en.textContent = data.en;
    root.appendChild(en);

    var trText = ua ? data.ua : data.pl;
    if (trText) {
      var tr = document.createElement("p");
      tr.className = ua ? "tx-ua" : "tx-pl";
      tr.style.cssText = "margin:.4rem 0 0;font-size:.92rem;font-weight:600;color:#334155;line-height:1.4;";
      tr.textContent = trText;
      root.appendChild(tr);
    }

    return root;
  }

  /** Screen 2 · discovery board (no Present Simple label). */
  function renderHabitDiscovery(block) {
    var data = block && block.habitDiscovery;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-habit-discovery";
    root.style.cssText =
      "margin:0 0 1.1rem;padding:1rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    if (data.introEn) {
      var intro = document.createElement("p");
      intro.style.cssText = "margin:0 0 .85rem;font-weight:700;color:#0f172a;line-height:1.4;";
      intro.textContent = data.introEn;
      root.appendChild(intro);
      var introTr = ua ? data.introUa : data.introPl;
      if (introTr) {
        var introP = document.createElement("p");
        introP.className = ua ? "tx-ua" : "tx-pl";
        introP.style.cssText = "margin:0 0 .85rem;font-size:.92rem;color:#475569;line-height:1.4;";
        introP.textContent = introTr;
        root.appendChild(introP);
      }
    }

    var list = document.createElement("div");
    list.className = "edumost-habit-sentences";
    list.style.cssText = "display:flex;flex-direction:column;gap:.45rem;margin:0 0 1rem;";
    (data.sentences || []).forEach(function (row, idx) {
      var phrase = row.speak || "";
      if (!phrase) return;
      var card = document.createElement("div");
      card.style.cssText =
        "display:flex;align-items:center;gap:.55rem;padding:.55rem .7rem;" +
        "border-radius:12px;background:#fff;border:1px solid #e2e8f0;";

      var num = document.createElement("span");
      num.style.cssText =
        "flex:0 0 1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center;" +
        "border-radius:999px;background:#ecfdf5;color:#0f766e;font-weight:800;font-size:.85rem;";
      num.textContent = String(idx + 1);
      card.appendChild(num);

      if (row.icon) {
        var ic = document.createElement("span");
        ic.style.cssText = "font-size:1.2rem;line-height:1;";
        ic.textContent = row.icon;
        card.appendChild(ic);
      }

      var en = document.createElement("strong");
      en.style.cssText = "flex:1;min-width:8rem;font-size:1.05rem;color:#0f172a;line-height:1.35;";
      en.textContent = phrase;
      card.appendChild(en);
      card.appendChild(miniButton(phrase));

      var tr = document.createElement("span");
      tr.className = ua ? "tx-ua" : "tx-pl";
      tr.style.cssText = "font-size:.88rem;color:#64748b;font-weight:500;max-width:9rem;";
      tr.textContent = ua ? (row.ua || row.pl || "") : (row.pl || "");
      card.appendChild(tr);

      list.appendChild(card);
    });
    root.appendChild(list);

    var chainWrap = document.createElement("div");
    chainWrap.className = "edumost-habit-chain";
    chainWrap.style.cssText =
      "margin:0 0 1rem;padding:.85rem .9rem;border-radius:14px;" +
      "background:#eff6ff;border:1px solid #bfdbfe;";

    var chainRow = document.createElement("div");
    chainRow.style.cssText =
      "display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.45rem .55rem;";

    (data.chain || []).forEach(function (step, i) {
      if (i > 0) {
        var arrow = document.createElement("span");
        arrow.textContent = "→";
        arrow.style.cssText = "font-size:1.35rem;font-weight:800;color:#1d4ed8;line-height:1;";
        arrow.setAttribute("aria-hidden", "true");
        chainRow.appendChild(arrow);
      }

      var pill = document.createElement("div");
      pill.style.cssText =
        "display:flex;flex-direction:column;align-items:center;gap:.25rem;" +
        "padding:.55rem .85rem;border-radius:12px;background:#fff;" +
        "border:2px solid #1d4ed8;min-width:6.5rem;max-width:11rem;";

      var lab = document.createElement("span");
      lab.style.cssText = "font-size:1.05rem;font-weight:800;color:#1e3a8a;letter-spacing:.04em;";
      lab.textContent = step.label || "";
      pill.appendChild(lab);

      var hint = ua ? step.hintUa : step.hintPl;
      if (hint) {
        var hintP = document.createElement("span");
        hintP.className = ua ? "tx-ua" : "tx-pl";
        hintP.style.cssText =
          "font-size:.78rem;font-weight:600;color:#475569;text-align:center;line-height:1.3;max-width:10rem;";
        hintP.textContent = hint;
        pill.appendChild(hintP);
      }

      chainRow.appendChild(pill);
    });
    chainWrap.appendChild(chainRow);
    root.appendChild(chainWrap);

    if (data.insightEn) {
      var insight = document.createElement("div");
      insight.style.cssText =
        "padding:.75rem .85rem;border-radius:12px;background:#ecfdf5;border:1px solid #bbf7d0;";
      var insEn = document.createElement("p");
      insEn.style.cssText = "margin:0;font-weight:800;color:#166534;line-height:1.4;";
      insEn.textContent = "💡 " + data.insightEn;
      insight.appendChild(insEn);
      var insTr = ua ? data.insightUa : data.insightPl;
      if (insTr) {
        var insP = document.createElement("p");
        insP.className = ua ? "tx-ua" : "tx-pl";
        insP.style.cssText = "margin:.35rem 0 0;font-size:.92rem;color:#166534;line-height:1.4;";
        insP.textContent = insTr;
        insight.appendChild(insP);
      }
      root.appendChild(insight);
    }

    return root;
  }

  /** Screen 3 · HABIT → PRESENT SIMPLE meaning bridge (no forms). */
  function renderHabitToPs(block) {
    var data = block && block.habitToPs;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-habit-to-ps";
    root.style.cssText =
      "margin:0 0 1.1rem;display:flex;flex-direction:column;gap:.85rem;";

    if (data.recallEn) {
      var recall = document.createElement("div");
      recall.className = "edumost-habit-to-ps-recall";
      recall.style.cssText =
        "padding:.65rem .85rem;border-radius:12px;background:#eff6ff;border:1px solid #bfdbfe;";
      var rEn = document.createElement("p");
      rEn.style.cssText = "margin:0;font-weight:800;color:#1e3a8a;line-height:1.4;";
      rEn.textContent = data.recallEn;
      recall.appendChild(rEn);
      var rTr = ua ? data.recallUa : data.recallPl;
      if (rTr && rTr !== data.recallEn) {
        var rP = document.createElement("p");
        rP.className = ua ? "tx-ua" : "tx-pl";
        rP.style.cssText = "margin:.3rem 0 0;font-size:.9rem;color:#475569;line-height:1.35;";
        rP.textContent = rTr;
        recall.appendChild(rP);
      }
      root.appendChild(recall);
    }

    var vizSlot = document.createElement("div");
    vizSlot.className = "edumost-habit-to-ps-viz-slot";
    root.appendChild(vizSlot);

    if (data.meaningEn) {
      var meaning = document.createElement("div");
      meaning.className = "edumost-habit-to-ps-meaning";
      meaning.style.cssText =
        "padding:.85rem 1rem;border-radius:14px;border:2px solid #0f766e;background:#ecfdf5;";
      var mEn = document.createElement("p");
      mEn.style.cssText = "margin:0;font-size:1.05rem;font-weight:800;color:#0f172a;line-height:1.45;";
      mEn.textContent = data.meaningEn;
      meaning.appendChild(mEn);
      var mTr = ua ? data.meaningUa : data.meaningPl;
      if (mTr) {
        var mP = document.createElement("p");
        mP.className = ua ? "tx-ua" : "tx-pl";
        mP.style.cssText = "margin:.4rem 0 0;font-size:.95rem;font-weight:600;color:#334155;line-height:1.4;";
        mP.textContent = mTr;
        meaning.appendChild(mP);
      }
      root.appendChild(meaning);
    }

    if (data.examplesLabelEn) {
      var exLab = document.createElement("div");
      exLab.className = "edumost-habit-to-ps-examples-label";
      var eEn = document.createElement("p");
      eEn.style.cssText = "margin:0;font-weight:700;color:#0f172a;line-height:1.4;";
      eEn.textContent = data.examplesLabelEn;
      exLab.appendChild(eEn);
      var eTr = ua ? data.examplesLabelUa : data.examplesLabelPl;
      if (eTr) {
        var eP = document.createElement("p");
        eP.className = ua ? "tx-ua" : "tx-pl";
        eP.style.cssText = "margin:.3rem 0 0;font-size:.92rem;color:#475569;line-height:1.35;";
        eP.textContent = eTr;
        exLab.appendChild(eP);
      }
      root.appendChild(exLab);
    }

    function exampleRow(item) {
      var phrase = item.speak || "";
      if (!phrase) return null;
      var row = document.createElement("div");
      row.style.cssText =
        "display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;" +
        "padding:.5rem .65rem;border-radius:10px;background:#fff;border:1px solid #e2e8f0;";
      var en = document.createElement("strong");
      en.style.cssText = "flex:1;min-width:10rem;font-size:1.02rem;color:#0f172a;line-height:1.35;";
      en.textContent = phrase;
      row.appendChild(en);
      row.appendChild(miniButton(phrase));
      var tr = document.createElement("span");
      tr.className = ua ? "tx-ua" : "tx-pl";
      tr.style.cssText = "font-size:.88rem;color:#64748b;font-weight:500;";
      tr.textContent = ua ? (item.ua || item.pl || "") : (item.pl || "");
      row.appendChild(tr);
      return row;
    }

    var exWrap = document.createElement("div");
    exWrap.className = "edumost-habit-to-ps-examples";
    exWrap.style.cssText = "display:flex;flex-direction:column;gap:.4rem;";

    (data.recycleExamples || []).forEach(function (item) {
      var row = exampleRow(item);
      if (row) exWrap.appendChild(row);
    });

    if (data.moreExamples && data.moreExamples.length) {
      var divider = document.createElement("div");
      divider.className = "edumost-habit-to-ps-more-label";
      divider.style.cssText =
        "display:flex;align-items:center;gap:.55rem;margin:.35rem 0 .15rem;";
      var lineL = document.createElement("span");
      lineL.style.cssText = "flex:1;height:1px;background:#cbd5e1;";
      divider.appendChild(lineL);
      var moreLab = document.createElement("span");
      moreLab.style.cssText =
        "flex:0 0 auto;font-size:.82rem;font-weight:800;letter-spacing:.04em;" +
        "color:#64748b;text-transform:uppercase;";
      moreLab.textContent = data.moreLabelEn || "More examples";
      divider.appendChild(moreLab);
      var moreTr = ua ? data.moreLabelUa : data.moreLabelPl;
      if (moreTr && moreTr !== moreLab.textContent) {
        var moreTrSpan = document.createElement("span");
        moreTrSpan.className = ua ? "tx-ua" : "tx-pl";
        moreTrSpan.style.cssText = "flex:0 0 auto;font-size:.8rem;font-weight:600;color:#94a3b8;";
        moreTrSpan.textContent = "· " + moreTr;
        divider.appendChild(moreTrSpan);
      }
      var lineR = document.createElement("span");
      lineR.style.cssText = "flex:1;height:1px;background:#cbd5e1;";
      divider.appendChild(lineR);
      exWrap.appendChild(divider);

      (data.moreExamples || []).forEach(function (item) {
        var row = exampleRow(item);
        if (row) exWrap.appendChild(row);
      });
    }

    root.appendChild(exWrap);

    if (data.insightEn) {
      var insight = document.createElement("div");
      insight.className = "edumost-habit-to-ps-insight";
      insight.style.cssText =
        "padding:.75rem .85rem;border-radius:12px;background:#fff7ed;border:1px solid #fed7aa;";
      var iEn = document.createElement("p");
      iEn.style.cssText = "margin:0;font-weight:800;color:#9a3412;line-height:1.4;";
      iEn.textContent = "💡 " + data.insightEn;
      insight.appendChild(iEn);
      var iTr = ua ? data.insightUa : data.insightPl;
      if (iTr) {
        var iP = document.createElement("p");
        iP.className = ua ? "tx-ua" : "tx-pl";
        iP.style.cssText = "margin:.35rem 0 0;font-size:.92rem;color:#9a3412;line-height:1.4;";
        iP.textContent = iTr;
        insight.appendChild(iP);
      }
      root.appendChild(insight);
    }

    return root;
  }

  /** Place Screen 3 visual into habitToPs board slot. */
  function placeHabitToPsParts(mount, block) {
    if (!block || !block.habitToPs) return;
    var body = mount.querySelector(".block-body");
    if (!body) return;
    var board = body.querySelector(".edumost-habit-to-ps");
    if (!board) return;

    var vizSlot = board.querySelector(".edumost-habit-to-ps-viz-slot");
    var viz = body.querySelector(":scope > .viz");
    if (vizSlot && viz) vizSlot.appendChild(viz);
  }

  function exampleLine(item, ua) {
    var phrase = item.speak || "";
    if (!phrase) return null;
    var row = document.createElement("div");
    row.style.cssText =
      "display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;" +
      "padding:.5rem .65rem;border-radius:10px;background:#fff;border:1px solid #e2e8f0;";
    var en = document.createElement("strong");
    en.style.cssText = "flex:1;min-width:10rem;font-size:1.02rem;color:#0f172a;line-height:1.35;";
    en.textContent = phrase;
    row.appendChild(en);
    row.appendChild(miniButton(phrase));
    var tr = document.createElement("span");
    tr.className = ua ? "tx-ua" : "tx-pl";
    tr.style.cssText = "font-size:.88rem;color:#64748b;font-weight:500;";
    tr.textContent = ua ? (item.ua || item.pl || "") : (item.pl || "");
    row.appendChild(tr);
    return row;
  }

  function ruleCard(en, pl, ua) {
    if (!en) return null;
    var show = showUa();
    var box = document.createElement("div");
    box.style.cssText =
      "padding:.85rem 1rem;border-radius:14px;border:2px solid #0f766e;background:#ecfdf5;";
    var e = document.createElement("p");
    e.style.cssText = "margin:0;font-size:1.05rem;font-weight:800;color:#0f172a;line-height:1.45;";
    e.textContent = en;
    box.appendChild(e);
    var tr = show ? ua : pl;
    if (tr) {
      var p = document.createElement("p");
      p.className = show ? "tx-ua" : "tx-pl";
      p.style.cssText = "margin:.4rem 0 0;font-size:.95rem;font-weight:600;color:#334155;line-height:1.4;";
      p.textContent = tr;
      box.appendChild(p);
    }
    return box;
  }

  function moreDivider(labelEn, labelPl, labelUa) {
    var ua = showUa();
    var divider = document.createElement("div");
    divider.style.cssText =
      "display:flex;align-items:center;gap:.55rem;margin:.35rem 0 .15rem;";
    var lineL = document.createElement("span");
    lineL.style.cssText = "flex:1;height:1px;background:#cbd5e1;";
    divider.appendChild(lineL);
    var lab = document.createElement("span");
    lab.style.cssText =
      "flex:0 0 auto;font-size:.82rem;font-weight:800;letter-spacing:.04em;" +
      "color:#64748b;text-transform:uppercase;";
    lab.textContent = labelEn || "More examples";
    divider.appendChild(lab);
    var tr = ua ? labelUa : labelPl;
    if (tr && tr !== lab.textContent) {
      var trSpan = document.createElement("span");
      trSpan.className = ua ? "tx-ua" : "tx-pl";
      trSpan.style.cssText = "flex:0 0 auto;font-size:.8rem;font-weight:600;color:#94a3b8;";
      trSpan.textContent = "· " + tr;
      divider.appendChild(trSpan);
    }
    var lineR = document.createElement("span");
    lineR.style.cssText = "flex:1;height:1px;background:#cbd5e1;";
    divider.appendChild(lineR);
    return divider;
  }

  /** Screens 4–9 · form / frequency teaching boards. */
  function renderPsTeach(block) {
    var data = block && block.psTeach;
    if (!data || !data.kind) return null;
    var ua = showUa();
    var root = document.createElement("div");
    root.className = "edumost-ps-teach";
    root.setAttribute("data-kind", data.kind);
    root.style.cssText = "margin:0 0 1.1rem;display:flex;flex-direction:column;gap:.85rem;";

    var vizSlot = document.createElement("div");
    vizSlot.className = "edumost-ps-teach-viz-slot";
    root.appendChild(vizSlot);

    if (data.kind === "baseVerb") {
      var rule = ruleCard(data.ruleEn, data.rulePl, data.ruleUa);
      if (rule) root.appendChild(rule);

      var pat = document.createElement("div");
      pat.style.cssText =
        "padding:.75rem .85rem;border-radius:14px;background:#eff6ff;border:1px solid #bfdbfe;" +
        "text-align:center;";
      var patLab = document.createElement("p");
      patLab.style.cssText = "margin:0 0 .55rem;font-weight:800;color:#1e3a8a;letter-spacing:.03em;";
      patLab.textContent = data.patternLabel || "I / YOU / WE / THEY → BASE VERB";
      pat.appendChild(patLab);
      var subjRow = document.createElement("div");
      subjRow.style.cssText =
        "display:flex;flex-wrap:wrap;justify-content:center;gap:.4rem;margin:0 0 .45rem;";
      (data.subjects || []).forEach(function (s) {
        var chip = document.createElement("span");
        chip.style.cssText =
          "padding:.35rem .65rem;border-radius:10px;background:#fff;border:2px solid #1d4ed8;" +
          "font-weight:800;color:#1e3a8a;";
        chip.textContent = s;
        subjRow.appendChild(chip);
      });
      pat.appendChild(subjRow);
      var arrow = document.createElement("p");
      arrow.style.cssText = "margin:0;font-size:1.4rem;font-weight:800;color:#1d4ed8;";
      arrow.textContent = "↓";
      pat.appendChild(arrow);
      var verb = document.createElement("p");
      verb.style.cssText =
        "margin:.35rem 0 0;display:inline-block;padding:.45rem 1rem;border-radius:12px;" +
        "background:#0f766e;color:#fff;font-weight:800;font-size:1.15rem;";
      verb.textContent = data.baseVerb || "PLAY";
      pat.appendChild(verb);
      root.appendChild(pat);

      var list = document.createElement("div");
      list.style.cssText = "display:flex;flex-direction:column;gap:.4rem;";
      (data.examples || []).forEach(function (item) {
        var row = exampleLine(item, ua);
        if (row) list.appendChild(row);
      });
      if (data.moreExamples && data.moreExamples.length) {
        list.appendChild(moreDivider(data.moreLabelEn, data.moreLabelPl, data.moreLabelUa));
        data.moreExamples.forEach(function (item) {
          var row = exampleLine(item, ua);
          if (row) list.appendChild(row);
        });
      }
      root.appendChild(list);
    }

    if (data.kind === "heSheIt") {
      if (data.recallSpeak) {
        var recall = document.createElement("div");
        recall.style.cssText =
          "padding:.7rem .85rem;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;";
        var rLab = document.createElement("p");
        rLab.style.cssText = "margin:0 0 .4rem;font-size:.85rem;font-weight:700;color:#64748b;";
        rLab.textContent = data.recallEn || "You already know:";
        recall.appendChild(rLab);
        var rRow = exampleLine(
          { speak: data.recallSpeak, pl: data.recallPlLine, ua: data.recallUaLine },
          ua
        );
        if (rRow) recall.appendChild(rRow);
        root.appendChild(recall);
      }
      var rule5 = ruleCard(data.ruleEn, data.rulePl, data.ruleUa);
      if (rule5) root.appendChild(rule5);
      if (data.patternLabel) {
        var plab = document.createElement("p");
        plab.style.cssText =
          "margin:0;text-align:center;font-weight:800;color:#1e3a8a;letter-spacing:.04em;";
        plab.textContent = data.patternLabel;
        root.appendChild(plab);
      }
      var contrasts = document.createElement("div");
      contrasts.style.cssText = "display:flex;flex-direction:column;gap:.65rem;";
      (data.contrasts || []).forEach(function (c) {
        var card = document.createElement("div");
        card.style.cssText =
          "display:grid;grid-template-columns:1fr auto 1fr;gap:.45rem;align-items:stretch;" +
          "padding:.55rem;border-radius:14px;background:#f8fafc;border:1px solid #e2e8f0;";
        var left = document.createElement("div");
        left.style.cssText =
          "padding:.55rem .65rem;border-radius:10px;background:#fff;border:1px solid #cbd5e1;";
        var lEn = document.createElement("p");
        lEn.style.cssText = "margin:0;font-weight:700;color:#334155;";
        lEn.textContent = c.left;
        left.appendChild(lEn);
        left.appendChild(miniButton(c.left));
        var mid = document.createElement("div");
        mid.style.cssText =
          "display:flex;align-items:center;justify-content:center;font-size:1.4rem;" +
          "font-weight:800;color:#1d4ed8;";
        mid.textContent = "→";
        var right = document.createElement("div");
        right.style.cssText =
          "padding:.55rem .65rem;border-radius:10px;background:#ecfdf5;border:2px solid #0f766e;";
        var rEn = document.createElement("p");
        rEn.style.cssText = "margin:0;font-weight:800;color:#166534;";
        rEn.textContent = c.right;
        right.appendChild(rEn);
        right.appendChild(miniButton(c.right));
        var rTr = document.createElement("p");
        rTr.className = ua ? "tx-ua" : "tx-pl";
        rTr.style.cssText = "margin:.25rem 0 0;font-size:.85rem;color:#64748b;";
        rTr.textContent = ua ? (c.rightUa || c.rightPl || "") : (c.rightPl || "");
        right.appendChild(rTr);
        card.appendChild(left);
        card.appendChild(mid);
        card.appendChild(right);
        contrasts.appendChild(card);
      });
      root.appendChild(contrasts);
    }

    if (data.kind === "whyS") {
      var rule6 = ruleCard(data.ruleEn, data.rulePl, data.ruleUa);
      if (rule6) root.appendChild(rule6);
      var steps = document.createElement("div");
      steps.style.cssText = "display:flex;flex-direction:column;gap:.75rem;";
      (data.steps || []).forEach(function (s) {
        var card = document.createElement("div");
        card.style.cssText =
          "padding:.75rem .85rem;border-radius:14px;background:#fff7ed;border:1px solid #fed7aa;";
        var row = document.createElement("div");
        row.style.cssText =
          "display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.35rem .5rem;";
        function stepPill(text, strong) {
          var p = document.createElement("span");
          p.style.cssText =
            "padding:.4rem .7rem;border-radius:10px;font-weight:800;font-size:.98rem;" +
            (strong
              ? "background:#0f766e;color:#fff;"
              : "background:#fff;border:1px solid #fdba74;color:#9a3412;");
          p.textContent = text;
          return p;
        }
        row.appendChild(stepPill(s.from, false));
        var a1 = document.createElement("span");
        a1.style.cssText = "font-weight:800;color:#ea580c;";
        a1.textContent = "→";
        row.appendChild(a1);
        row.appendChild(stepPill(s.mid, false));
        var a2 = document.createElement("span");
        a2.style.cssText = "font-weight:800;color:#ea580c;";
        a2.textContent = "→";
        row.appendChild(a2);
        row.appendChild(stepPill(s.to, true));
        card.appendChild(row);
        if (s.speak) {
          var speakRow = exampleLine({ speak: s.speak, pl: s.pl, ua: s.ua }, ua);
          if (speakRow) {
            speakRow.style.marginTop = ".55rem";
            card.appendChild(speakRow);
          }
        }
        steps.appendChild(card);
      });
      root.appendChild(steps);
      if (data.insightEn) {
        var ins = document.createElement("div");
        ins.style.cssText =
          "padding:.75rem .85rem;border-radius:12px;background:#ecfdf5;border:1px solid #bbf7d0;";
        var iEn = document.createElement("p");
        iEn.style.cssText = "margin:0;font-weight:800;color:#166534;";
        iEn.textContent = "💡 " + data.insightEn;
        ins.appendChild(iEn);
        var iTr = ua ? data.insightUa : data.insightPl;
        if (iTr) {
          var iP = document.createElement("p");
          iP.className = ua ? "tx-ua" : "tx-pl";
          iP.style.cssText = "margin:.3rem 0 0;font-size:.92rem;color:#166534;";
          iP.textContent = iTr;
          ins.appendChild(iP);
        }
        root.appendChild(ins);
      }
    }

    if (data.kind === "spelling") {
      (data.cards || []).forEach(function (cardData) {
        var card = document.createElement("section");
        card.style.cssText =
          "padding:.85rem 1rem;border-radius:14px;border:1px solid #c5d4e8;background:#f8fafc;";
        var title = document.createElement("p");
        title.style.cssText = "margin:0 0 .35rem;font-size:1.05rem;font-weight:800;color:#0f766e;";
        title.textContent = cardData.title || "";
        card.appendChild(title);
        var sub = document.createElement("p");
        sub.style.cssText = "margin:0 0 .55rem;font-weight:700;color:#334155;";
        sub.textContent = cardData.subtitleEn || "";
        card.appendChild(sub);
        var subTr = ua ? cardData.subtitleUa : cardData.subtitlePl;
        if (subTr && subTr !== cardData.subtitleEn) {
          var sP = document.createElement("p");
          sP.className = ua ? "tx-ua" : "tx-pl";
          sP.style.cssText = "margin:0 0 .55rem;font-size:.9rem;color:#64748b;";
          sP.textContent = subTr;
          card.appendChild(sP);
        }
        (cardData.pairs || []).forEach(function (pair) {
          var pr = document.createElement("div");
          pr.style.cssText =
            "display:flex;align-items:center;gap:.45rem;margin:0 0 .35rem;" +
            "padding:.4rem .55rem;border-radius:10px;background:#fff;border:1px solid #e2e8f0;";
          var from = document.createElement("span");
          from.style.cssText = "font-weight:700;color:#64748b;";
          from.textContent = pair.from;
          pr.appendChild(from);
          var ar = document.createElement("span");
          ar.style.cssText = "font-weight:800;color:#1d4ed8;";
          ar.textContent = "→";
          pr.appendChild(ar);
          var to = document.createElement("strong");
          to.style.cssText = "flex:1;color:#0f172a;";
          to.textContent = pair.to;
          pr.appendChild(to);
          pr.appendChild(miniButton(pair.to));
          card.appendChild(pr);
        });
        root.appendChild(card);
      });
      if (data.but) {
        var but = document.createElement("section");
        but.style.cssText =
          "padding:.85rem 1rem;border-radius:14px;border:2px solid #ea580c;background:#fff7ed;";
        var bt = document.createElement("p");
        bt.style.cssText = "margin:0 0 .35rem;font-size:1.05rem;font-weight:800;color:#9a3412;";
        bt.textContent = data.but.title || "BUT";
        but.appendChild(bt);
        var bs = document.createElement("p");
        bs.style.cssText = "margin:0 0 .55rem;font-weight:700;color:#9a3412;";
        bs.textContent = data.but.subtitleEn || "";
        but.appendChild(bs);
        var bsTr = ua ? data.but.subtitleUa : data.but.subtitlePl;
        if (bsTr && bsTr !== data.but.subtitleEn) {
          var bp = document.createElement("p");
          bp.className = ua ? "tx-ua" : "tx-pl";
          bp.style.cssText = "margin:0 0 .55rem;font-size:.9rem;color:#c2410c;";
          bp.textContent = bsTr;
          but.appendChild(bp);
        }
        (data.but.pairs || []).forEach(function (pair) {
          var pr = document.createElement("div");
          pr.style.cssText =
            "display:flex;align-items:center;gap:.45rem;margin:0 0 .35rem;" +
            "padding:.4rem .55rem;border-radius:10px;background:#fff;border:1px solid #fed7aa;";
          var from = document.createElement("span");
          from.style.cssText = "font-weight:700;color:#64748b;";
          from.textContent = pair.from;
          pr.appendChild(from);
          var ar = document.createElement("span");
          ar.style.cssText = "font-weight:800;color:#ea580c;";
          ar.textContent = "→";
          pr.appendChild(ar);
          var to = document.createElement("strong");
          to.style.cssText = "flex:1;color:#0f172a;";
          to.textContent = pair.to;
          pr.appendChild(to);
          pr.appendChild(miniButton(pair.to));
          but.appendChild(pr);
        });
        root.appendChild(but);
      }
    }

    if (data.kind === "frequency") {
      if (data.introEn) {
        var intro = document.createElement("p");
        intro.style.cssText = "margin:0;font-weight:700;color:#0f172a;";
        intro.textContent = data.introEn;
        root.appendChild(intro);
        var introTr = ua ? data.introUa : data.introPl;
        if (introTr) {
          var ip = document.createElement("p");
          ip.className = ua ? "tx-ua" : "tx-pl";
          ip.style.cssText = "margin:0;font-size:.92rem;color:#475569;";
          ip.textContent = introTr;
          root.appendChild(ip);
        }
      }
      var scale = document.createElement("div");
      scale.style.cssText = "display:flex;flex-direction:column;gap:.4rem;";
      (data.scale || []).forEach(function (item) {
        var row = document.createElement("div");
        row.style.cssText =
          "display:grid;grid-template-columns:7rem 3.5rem 1fr auto;gap:.45rem;align-items:center;" +
          "padding:.45rem .6rem;border-radius:10px;background:#fff;border:1px solid #e2e8f0;";
        var w = document.createElement("strong");
        w.style.cssText = "color:#0f172a;font-size:1rem;";
        w.textContent = item.word;
        row.appendChild(w);
        var pct = document.createElement("span");
        pct.style.cssText = "font-weight:800;color:#1d4ed8;font-size:.9rem;";
        pct.textContent = item.pct || "";
        row.appendChild(pct);
        var mean = document.createElement("span");
        mean.style.cssText = "font-size:.92rem;color:#475569;";
        mean.textContent = item.meaningEn || "";
        row.appendChild(mean);
        row.appendChild(miniButton(item.word));
        var mTr = document.createElement("span");
        mTr.className = ua ? "tx-ua" : "tx-pl";
        mTr.style.cssText =
          "grid-column:1 / -1;font-size:.85rem;color:#64748b;margin-top:-.15rem;";
        mTr.textContent = ua ? (item.meaningUa || item.meaningPl || "") : (item.meaningPl || "");
        row.appendChild(mTr);
        scale.appendChild(row);
      });
      root.appendChild(scale);
      var exList = document.createElement("div");
      exList.style.cssText = "display:flex;flex-direction:column;gap:.4rem;";
      (data.examples || []).forEach(function (item) {
        var row = exampleLine(item, ua);
        if (row) exList.appendChild(row);
      });
      root.appendChild(exList);
    }

    if (data.kind === "wordOrder") {
      var formula = document.createElement("div");
      formula.style.cssText =
        "padding:.85rem 1rem;border-radius:14px;border:2px solid #1d4ed8;background:#eff6ff;" +
        "text-align:center;";
      var fEn = document.createElement("p");
      fEn.style.cssText = "margin:0;font-size:1.1rem;font-weight:800;color:#1e3a8a;letter-spacing:.02em;";
      fEn.textContent = data.formulaEn || "SUBJECT + FREQUENCY WORD + VERB";
      formula.appendChild(fEn);
      var fTr = ua ? data.formulaUa : data.formulaPl;
      if (fTr) {
        var fP = document.createElement("p");
        fP.className = ua ? "tx-ua" : "tx-pl";
        fP.style.cssText = "margin:.35rem 0 0;font-size:.92rem;color:#475569;";
        fP.textContent = fTr;
        formula.appendChild(fP);
      }
      root.appendChild(formula);

      if (data.demo && data.demo.length) {
        var demo = document.createElement("div");
        demo.style.cssText =
          "display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:center;gap:.5rem;";
        data.demo.forEach(function (word, i) {
          if (i > 0) {
            var ar = document.createElement("span");
            ar.style.cssText = "font-size:1.3rem;font-weight:800;color:#1d4ed8;padding-bottom:.9rem;";
            ar.textContent = "→";
            demo.appendChild(ar);
          }
          var cell = document.createElement("div");
          cell.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:.25rem;";
          var pill = document.createElement("span");
          pill.style.cssText =
            "padding:.5rem .9rem;border-radius:12px;background:#0f766e;color:#fff;" +
            "font-weight:800;font-size:1.05rem;";
          pill.textContent = word;
          cell.appendChild(pill);
          if (data.demoLabels && data.demoLabels[i]) {
            var lab = document.createElement("span");
            lab.style.cssText = "font-size:.72rem;font-weight:800;letter-spacing:.04em;color:#64748b;";
            lab.textContent = data.demoLabels[i];
            cell.appendChild(lab);
          }
          demo.appendChild(cell);
        });
        root.appendChild(demo);
      }

      var woEx = document.createElement("div");
      woEx.style.cssText = "display:flex;flex-direction:column;gap:.4rem;";
      (data.examples || []).forEach(function (item) {
        var row = exampleLine(item, ua);
        if (row) woEx.appendChild(row);
      });
      root.appendChild(woEx);

      if (data.laterNoteEn) {
        var note = document.createElement("div");
        note.style.cssText =
          "padding:.55rem .75rem;border-radius:10px;background:#f8fafc;border:1px dashed #94a3b8;";
        var nEn = document.createElement("p");
        nEn.style.cssText = "margin:0;font-size:.88rem;font-weight:600;color:#64748b;line-height:1.4;";
        nEn.textContent = data.laterNoteEn;
        note.appendChild(nEn);
        var nTr = ua ? data.laterNoteUa : data.laterNotePl;
        if (nTr) {
          var nP = document.createElement("p");
          nP.className = ua ? "tx-ua" : "tx-pl";
          nP.style.cssText = "margin:.25rem 0 0;font-size:.85rem;color:#94a3b8;";
          nP.textContent = nTr;
          note.appendChild(nP);
        }
        root.appendChild(note);
      }
    }

    return root;
  }

  function placePsTeachParts(mount, block) {
    if (!block || !block.psTeach) return;
    var body = mount.querySelector(".block-body");
    if (!body) return;
    var board = body.querySelector(".edumost-ps-teach");
    if (!board) return;
    var vizSlot = board.querySelector(".edumost-ps-teach-viz-slot");
    var viz = body.querySelector(":scope > .viz");
    if (vizSlot && viz) vizSlot.appendChild(viz);
  }

  function insertAfterPrompt(mount, nodes) {
    var body = mount.querySelector(".block-body");
    if (!body) return;
    var prompt = body.querySelector(".prompt, .edumost-en-prompt");
    var viz = body.querySelector(".viz");
    var last = prompt || viz || null;
    nodes.forEach(function (node) {
      if (!node) return;
      if (last && last.parentNode === body) {
        if (last.nextSibling) body.insertBefore(node, last.nextSibling);
        else body.appendChild(node);
      } else {
        body.insertBefore(node, body.firstChild);
      }
      last = node;
    });
  }

  function setLessonNextEnabled() {
    var btn = document.querySelector("#lesson-nav .pager-btn.next");
    if (!btn) return;
    btn.disabled = false;
  }

  function injectEnPrompt(mount, block) {
    if (!block || !block.enPrompt) return;
    var body = mount.querySelector(".block-body");
    if (!body) return;

    var old = body.querySelector(".edumost-en-prompt");
    if (old) old.remove();
    var prompt = body.querySelector(".prompt");
    if (prompt) prompt.remove();
    if (!block.keepProse) {
      Array.prototype.slice.call(body.querySelectorAll(":scope > p.tx-pl, :scope > p.tx-ua")).forEach(function (p) {
        if (!p.closest(".edumost-task-sequence") && !p.closest(".edumost-speak-table-wrap")) {
          var prev = p.previousElementSibling;
          if (!prev || prev.classList.contains("viz") || prev.classList.contains("edumost-en-prompt")) {
            p.remove();
          }
        }
      });
    }

    var box = document.createElement("div");
    box.className = "edumost-en-prompt prompt";
    var en = document.createElement("p");
    en.className = "tx-pl";
    en.style.margin = "0";
    en.textContent = block.enPrompt;
    box.appendChild(en);

    var lang = showUa() ? "ua" : "pl";
    var trText = lang === "ua" ? block.promptUa : block.promptPl;
    if (trText) {
      var tr = document.createElement("p");
      tr.className = lang === "ua" ? "tx-ua" : "tx-pl";
      tr.style.margin = ".35rem 0 0";
      if (lang === "pl") {
        tr.style.fontWeight = "500";
        tr.style.opacity = ".92";
      }
      tr.textContent = trText;
      box.appendChild(tr);
    }

    if (block.enPromptPlace === "before") {
      body.insertBefore(box, body.firstChild);
    } else {
      var anchor = body.querySelector(".edumost-speak-table-wrap, .viz");
      if (anchor && anchor.nextSibling) body.insertBefore(box, anchor.nextSibling);
      else if (anchor) body.appendChild(box);
      else body.insertBefore(box, body.firstChild);
    }
  }

  function enhanceEnQuestion(hold, task) {
    var body = hold.querySelector(".task-body");
    if (!body) return;

    var phrase = task.questionEn || (typeof task.question === "string" ? task.question : "") || "";
    if (!phrase) return;

    var old = body.querySelector(".edumost-en-q");
    if (old) old.remove();

    var opts = body.querySelector(".task-options");
    if (opts) {
      while (body.firstChild && body.firstChild !== opts) {
        body.removeChild(body.firstChild);
      }
    }

    var wrap = document.createElement("div");
    wrap.className = "edumost-en-q";
    wrap.style.cssText = "margin:0 0 .65rem;";

    var row = document.createElement("div");
    row.style.cssText = "display:flex;align-items:flex-start;gap:.4rem;";

    var btn = miniButton(phrase);
    btn.style.marginTop = ".1rem";

    var en = document.createElement("p");
    en.className = "tx-pl edumost-q-en";
    en.style.cssText = "margin:0;font-weight:700;font-size:1.05rem;color:#0f172a;line-height:1.35;";
    en.textContent = phrase;

    row.appendChild(btn);
    row.appendChild(en);
    wrap.appendChild(row);

    if (task.stem && task.stem !== phrase) {
      var stem = document.createElement("p");
      stem.className = "edumost-q-stem";
      stem.style.cssText =
        "margin:.55rem 0 0;font-size:1.25rem;font-weight:800;color:#1a3a5c;letter-spacing:.02em;";
      stem.textContent = task.stem;
      wrap.appendChild(stem);
    }

    var lang = showUa() ? "ua" : "pl";
    var trText = lang === "ua" ? task.questionUa : task.questionPl;
    if (trText) {
      var tr = document.createElement("p");
      tr.className = lang === "ua" ? "tx-ua" : "tx-pl";
      tr.style.cssText = "margin:.3rem 0 0 2.1rem;font-weight:500;line-height:1.35;";
      if (lang === "pl") tr.style.opacity = ".92";
      tr.textContent = trText;
      wrap.appendChild(tr);
    }

    if (opts) body.insertBefore(wrap, opts);
    else body.insertBefore(wrap, body.firstChild);
  }

  function shuffle(arr) {
    var a = arr.slice();
    var i;
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    if (a.length > 1) {
      var same = true;
      for (i = 0; i < a.length; i++) {
        if (a[i] !== arr[i]) { same = false; break; }
      }
      if (same) {
        tmp = a[0];
        a[0] = a[a.length - 1];
        a[a.length - 1] = tmp;
      }
    }
    return a;
  }

  /** Order-sensitive word order (lesson-local; does not use sorted feedback). */
  function mountOrderBuild(hold, task, onResult) {
    var picked = [];
    var pool = shuffle(task.items || []);

    hold.innerHTML =
      '<div class="task-card" data-task-type="order-build">' +
        '<div class="task-body"></div>' +
        '<div class="task-actions">' +
          '<button type="button" class="task-check"></button>' +
          (task.hint ? '<button type="button" class="task-hint"></button>' : "") +
          '<button type="button" class="task-hint edumost-order-reset">Reset</button>' +
        "</div>" +
        '<div class="task-feedback" hidden></div>' +
      "</div>";

    hold.querySelector(".task-check").textContent =
      window.EduMostI18n ? EduMostI18n.t("checkAnswer") : "Sprawdź";
    var hintBtn = hold.querySelector(".task-hint:not(.edumost-order-reset)");
    if (hintBtn) {
      hintBtn.textContent = window.EduMostI18n ? EduMostI18n.t("showHint") : "Podpowiedź";
    }

    var bodyEl = hold.querySelector(".task-body");
    var feedbackBox = hold.querySelector(".task-feedback");
    var checkBtn = hold.querySelector(".task-check");
    var resetBtn = hold.querySelector(".edumost-order-reset");

    enhanceEnQuestion(hold, task);

    var poolHost = document.createElement("div");
    poolHost.className = "edumost-order-area";
    bodyEl.appendChild(poolHost);

    function paintOrder() {
      poolHost.innerHTML = "";
      var poolLab = document.createElement("p");
      poolLab.style.cssText = "margin:.5rem 0 .25rem;font-size:.8rem;font-weight:700;color:#64748b;";
      poolLab.textContent = "Choose:";
      poolHost.appendChild(poolLab);

      var avail = document.createElement("div");
      avail.className = "edumost-order-pool";
      avail.style.cssText = "display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 .65rem;";
      pool.forEach(function (item) {
        if (picked.indexOf(item) >= 0) return;
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = item;
        b.style.cssText =
          "padding:.4rem .7rem;border-radius:999px;border:1px solid #c5d4e8;" +
          "background:#fff;font:inherit;font-weight:600;cursor:pointer;";
        b.addEventListener("click", function () {
          picked.push(item);
          paintOrder();
        });
        avail.appendChild(b);
      });
      poolHost.appendChild(avail);

      var seqLab = document.createElement("p");
      seqLab.style.cssText = "margin:.35rem 0 .25rem;font-size:.8rem;font-weight:700;color:#64748b;";
      seqLab.textContent = "Your order:";
      poolHost.appendChild(seqLab);

      var seq = document.createElement("div");
      seq.className = "edumost-order-seq";
      seq.style.cssText =
        "min-height:2.5rem;padding:.55rem;border-radius:10px;border:1.5px dashed #94a3b8;" +
        "background:#fff;display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;";
      if (!picked.length) {
        var ph = document.createElement("span");
        ph.style.cssText = "color:#94a3b8;font-size:.9rem;";
        ph.textContent = "Tap words in order →";
        seq.appendChild(ph);
      } else {
        picked.forEach(function (item, i) {
          var chip = document.createElement("span");
          chip.style.cssText =
            "display:inline-flex;align-items:center;gap:.25rem;padding:.35rem .55rem;" +
            "border-radius:999px;background:#ecfdf5;color:#166534;font-weight:700;font-size:.92rem;";
          chip.textContent = (i + 1) + ". " + item;
          seq.appendChild(chip);
          if (i < picked.length - 1) {
            var arrow = document.createElement("span");
            arrow.textContent = "→";
            arrow.style.cssText = "color:#94a3b8;font-weight:700;";
            seq.appendChild(arrow);
          }
        });
      }
      poolHost.appendChild(seq);
    }

    paintOrder();

    if (hintBtn) {
      hintBtn.addEventListener("click", function () {
        feedbackBox.hidden = false;
        feedbackBox.className = "task-feedback is-hint";
        feedbackBox.textContent = EduMostFeedback.bilingual(task.hint);
      });
    }

    resetBtn.addEventListener("click", function () {
      picked = [];
      paintOrder();
      feedbackBox.hidden = true;
    });

    checkBtn.addEventListener("click", function () {
      var expected = task.answer || [];
      var ok =
        picked.length === expected.length &&
        picked.every(function (w, i) { return w === expected[i]; });
      var result = {
        ok: ok,
        headline: ok
          ? (window.EduMostI18n ? EduMostI18n.t("correct") : "Dobrze!")
          : (window.EduMostI18n ? EduMostI18n.t("tryAgain") : "Spróbuj jeszcze raz"),
        detail: ok ? EduMostFeedback.bilingual(task.explanation) : ""
      };
      feedbackBox.hidden = false;
      feedbackBox.className = "task-feedback " + (ok ? "is-ok" : "is-bad");
      feedbackBox.innerHTML =
        "<strong>" + String(result.headline).replace(/</g, "&lt;") + "</strong>" +
        (result.detail ? "<p>" + String(result.detail).replace(/</g, "&lt;") + "</p>" : "");
      if (onResult) onResult(result);
    });
  }

  function renderTaskSequence(mount, block, ctx) {
    var tasks = block.taskSequence;
    if (!tasks || !tasks.length) return;

    var old = mount.querySelector(".edumost-task-sequence");
    if (old) old.remove();

    var root = document.createElement("div");
    root.className = "edumost-task-sequence";
    root.style.cssText = "margin:1rem 0 .5rem;";

    var body = mount.querySelector(".block-body");
    if (!body) return;
    body.appendChild(root);

    var seqBody = document.createElement("div");
    seqBody.className = "edumost-seq-body";
    root.appendChild(seqBody);

    var index = 0;
    var doneLabels = [];

    setLessonNextEnabled();

    function onTaskResult(hold, task, result) {
      if (ctx && ctx.onTask) ctx.onTask(task, result);
      var feedbackBox = hold.querySelector(".task-feedback");
      var isLast = index >= tasks.length - 1;

      if (result && result.ok === true && feedbackBox) {
        var detail = (result.detail || "").trim();
        feedbackBox.className = "task-feedback is-ok";
        feedbackBox.innerHTML =
          "<strong>✓ Correct!</strong>" +
          (detail ? "<p>" + detail.replace(/</g, "&lt;") + "</p>" : "");
      }

      if (!result || result.ok !== true) return;

      var actions = hold.querySelector(".task-actions");
      if (actions) {
        var checkBtn = actions.querySelector(".task-check");
        if (checkBtn) checkBtn.disabled = true;
        var inputs = hold.querySelectorAll("input[type=radio], input[type=checkbox]");
        Array.prototype.forEach.call(inputs, function (inp) { inp.disabled = true; });
        var poolBtns = hold.querySelectorAll(".edumost-order-pool button");
        Array.prototype.forEach.call(poolBtns, function (b) { b.disabled = true; });
        var resetBtn = hold.querySelector(".edumost-order-reset");
        if (resetBtn) resetBtn.disabled = true;
      }

      doneLabels.push(task.doneLabel || ("Question " + (index + 1)));

      if (isLast) {
        root.setAttribute("data-done", "1");
        setLessonNextEnabled(true);
        return;
      }

      var existing = seqBody.querySelector(".edumost-q-next");
      if (existing) existing.remove();

      var nextWrap = document.createElement("div");
      nextWrap.className = "edumost-q-next";
      nextWrap.style.cssText = "margin:.75rem 0 0;";

      var nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "step-next edumost-q-next-btn";
      nextBtn.textContent = "Dalej →";
      nextBtn.style.cssText =
        "padding:.55rem 1rem;border-radius:10px;border:1px solid #0f766e;" +
        "background:#0f766e;color:#fff;font:inherit;font-weight:700;cursor:pointer;";
      nextBtn.addEventListener("click", function () {
        index += 1;
        paint();
        try {
          seqBody.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (e) {}
      });
      nextWrap.appendChild(nextBtn);
      seqBody.appendChild(nextWrap);
    }

    function paint() {
      seqBody.innerHTML = "";

      var meta = document.createElement("div");
      meta.style.cssText =
        "display:flex;align-items:center;justify-content:space-between;" +
        "gap:.75rem;flex-wrap:wrap;margin:0 0 .65rem;";

      var label = document.createElement("p");
      label.style.cssText = "margin:0;font-weight:700;color:#0f172a;";
      label.textContent = "Question " + (index + 1) + " of " + tasks.length;
      meta.appendChild(label);
      seqBody.appendChild(meta);

      if (doneLabels.length) {
        var doneBox = document.createElement("div");
        doneBox.style.cssText = "display:flex;flex-direction:column;gap:.25rem;margin:0 0 .75rem;";
        doneLabels.forEach(function (line) {
          var p = document.createElement("p");
          p.style.cssText =
            "margin:0;padding:.35rem .55rem;border-radius:8px;" +
            "background:#ecfdf5;color:#166534;font-size:.9rem;font-weight:600;";
          p.textContent = "✓ " + line;
          doneBox.appendChild(p);
        });
        seqBody.appendChild(doneBox);
      }

      var hold = document.createElement("div");
      hold.className = "task-slot";
      seqBody.appendChild(hold);

      var task = tasks[index];
      if (task.type === "order-build") {
        mountOrderBuild(hold, task, function (result) {
          onTaskResult(hold, task, result);
        });
      } else if (window.EduMostTaskEngine) {
        EduMostTaskEngine.mount(hold, task, {
          onResult: function (result) {
            onTaskResult(hold, task, result);
          }
        });
        enhanceEnQuestion(hold, task);
      }
    }

    paint();
  }

  function stripEmptyPlaceholder(mount) {
    if (!mount) return;
    Array.prototype.slice.call(mount.querySelectorAll(".block-empty")).forEach(function (el) {
      el.remove();
    });
  }

  var R = window.EduMostLessonRenderer;
  if (!R || typeof R.render !== "function") return;
  var orig = R.render;
  R.render = function (mount, block, ctx) {
    orig(mount, block, ctx);
    injectEnPrompt(mount, block);
    insertAfterPrompt(mount, [
      renderMustKnow(block),
      renderHabitDiscovery(block),
      renderHabitToPs(block),
      renderPsTeach(block),
      renderSpeakTable(mount, block)
    ]);
    placeHabitToPsParts(mount, block);
    placePsTeachParts(mount, block);
    if (block && block.taskSequence) {
      renderTaskSequence(mount, block, ctx);
    } else {
      setLessonNextEnabled(true);
    }
    stripEmptyPlaceholder(mount);
  };
})();
