/**
 * Lesson-local English TTS (EduMost pronunciation support).
 * Not Flash CD audio. Does not change the shared lesson engine.
 *
 * Reusable API for future English lessons:
 *   EduMostSpeak.en("get up")
 *
 * Block contracts:
 *   block.speak      — Listen button under the heading
 *   block.speakBoard — visual zones { story?, zones:[{ title, image, alt, items }] }
 *   block.speakItems — vocabulary table { speak, pl, ua } with 🔊 per English phrase
 *   block.atTimeTeach — at + time teaching board (clock → model → examples → compare)
 *   block.thenTeach — Then / After that sequence board + speaking mini-step
 *   block.phraseDive — Learn the whole phrase (have/get/catch/go groups)
 *   block.speakingPrep — Speaking scaffold (question, example, day parts, CORE chips)
 *   block.lessonClose — Final Check & Remember closing board
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

  function labelChip(phrase) {
    var chip = document.createElement("span");
    chip.className = "edumost-speak-chip";
    chip.style.cssText =
      "display:inline-flex;align-items:center;gap:.3rem;" +
      "padding:.28rem .55rem;border-radius:999px;" +
      "background:rgba(255,255,255,.94);border:1px solid #c5d4e8;" +
      "box-shadow:0 1px 2px rgba(15,23,42,.06);font-weight:700;" +
      "font-size:.92rem;color:#0f172a;line-height:1.2;";
    var en = document.createElement("span");
    en.textContent = phrase;
    chip.appendChild(en);
    chip.appendChild(miniButton(phrase));
    return chip;
  }

  function injectHeadingSpeak(mount, block) {
    if (!block.speak) return;
    var old = mount.querySelector(".edumost-speak");
    if (old) old.remove();

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "edumost-speak";
    btn.setAttribute("aria-label", "Listen: " + block.speak);
    btn.textContent = "🔊 Listen";
    btn.style.cssText =
      "display:inline-flex;align-items:center;gap:.35rem;" +
      "margin:.35rem 0 1rem;padding:.45rem .9rem;" +
      "border:1px solid #c5d4e8;border-radius:999px;" +
      "background:#f3f7fc;color:#1a3a5c;font:inherit;font-weight:600;" +
      "cursor:pointer;box-shadow:0 1px 0 rgba(26,58,92,.06);";
    btn.addEventListener("click", function () {
      speakEn(block.speak);
    });

    var title = mount.querySelector(".block-title");
    var body = mount.querySelector(".block-body");
    if (title && title.parentNode) {
      if (title.nextSibling) title.parentNode.insertBefore(btn, title.nextSibling);
      else title.parentNode.appendChild(btn);
    } else if (body) {
      body.insertBefore(btn, body.firstChild);
    }
  }

  function zoneBlock(zone) {
    var wrap = document.createElement("section");
    wrap.className = "edumost-speak-zone";
    wrap.style.cssText = "margin:0 0 1rem;";

    var head = document.createElement("h3");
    head.className = "edumost-speak-zone-title";
    head.textContent = zone.title || "";
    head.style.cssText =
      "margin:0 0 .45rem;font-size:1.05rem;font-weight:800;" +
      "letter-spacing:.02em;color:#0f766e;";
    wrap.appendChild(head);

    if (zone.image) {
      var frame = document.createElement("div");
      frame.className = "edumost-speak-zone-frame viz";
      frame.style.cssText =
        "position:relative;border-radius:12px;overflow:hidden;" +
        "border:1px solid var(--line,#dbe3ee);background:#f8fafc;";

      var img = document.createElement("img");
      img.className = "viz-img";
      img.src = zone.image;
      img.alt = zone.alt || zone.title || "";
      img.referrerPolicy = "no-referrer";
      img.style.cssText = "display:block;width:100%;height:auto;vertical-align:middle;";
      frame.appendChild(img);
      wrap.appendChild(frame);
    }

    var labels = document.createElement("div");
    labels.className = "edumost-speak-zone-labels";
    labels.style.cssText =
      "display:flex;flex-wrap:wrap;gap:.45rem;" +
      "margin:.55rem 0 0;";
    (zone.items || []).forEach(function (item) {
      var phrase = item.speak || item.en || "";
      if (phrase) labels.appendChild(labelChip(phrase));
    });
    wrap.appendChild(labels);
    return wrap;
  }

  function renderSpeakBoard(mount, block) {
    var board = block.speakBoard;
    if (!board) return null;

    var old = mount.querySelector(".edumost-speak-board");
    if (old) old.remove();

    var root = document.createElement("div");
    root.className = "edumost-speak-board";
    root.style.cssText = "margin:.85rem 0 1.1rem;";

    if (board.story && board.story.image) {
      var story = document.createElement("div");
      story.className = "edumost-speak-story viz";
      story.style.cssText =
        "margin:0 0 1rem;border-radius:12px;overflow:hidden;" +
        "border:1px solid var(--line,#dbe3ee);";
      var img = document.createElement("img");
      img.className = "viz-img";
      img.src = board.story.image;
      img.alt = board.story.alt || "My daily routine";
      img.referrerPolicy = "no-referrer";
      img.style.cssText = "display:block;width:100%;height:auto;";
      story.appendChild(img);
      root.appendChild(story);
    }

    (board.zones || []).forEach(function (zone) {
      root.appendChild(zoneBlock(zone));
    });

    return root;
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

  function clockSvg(hour, minute) {
    var h = ((hour % 12) + minute / 60) * 30;
    var m = minute * 6;
    return (
      '<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="54" fill="#fff" stroke="#1a3a5c" stroke-width="4"/>' +
      '<circle cx="60" cy="60" r="48" fill="#f8fafc" stroke="#c5d4e8" stroke-width="1"/>' +
      [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(function (deg) {
        var rad = (deg - 90) * Math.PI / 180;
        var x1 = 60 + Math.cos(rad) * 40;
        var y1 = 60 + Math.sin(rad) * 40;
        var x2 = 60 + Math.cos(rad) * 46;
        var y2 = 60 + Math.sin(rad) * 46;
        return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) +
          '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) +
          '" stroke="#1a3a5c" stroke-width="2.5" stroke-linecap="round"/>';
      }).join("") +
      '<line x1="60" y1="60" x2="60" y2="28" stroke="#1a3a5c" stroke-width="4" stroke-linecap="round" transform="rotate(' + h + ' 60 60)"/>' +
      '<line x1="60" y1="60" x2="60" y2="18" stroke="#2563eb" stroke-width="3" stroke-linecap="round" transform="rotate(' + m + ' 60 60)"/>' +
      '<circle cx="60" cy="60" r="4" fill="#1a3a5c"/>' +
      "</svg>"
    );
  }

  function renderAtTimeTeach(mount, block) {
    var data = block && block.atTimeTeach;
    if (!data) return null;
    var ua = showUa();
    var hour = (data.clock && data.clock.hour) || 7;
    var minute = (data.clock && data.clock.minute) || 15;
    var timeLabel =
      String(hour) + ":" + (minute < 10 ? "0" : "") + String(minute);

    var root = document.createElement("div");
    root.className = "edumost-at-time";
    root.style.cssText =
      "margin:0 0 1.1rem;padding:1rem 1.05rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    // CLOCK → TIME → SENTENCE
    var visual = document.createElement("div");
    visual.style.cssText =
      "display:flex;flex-wrap:wrap;align-items:center;justify-content:center;" +
      "gap:.55rem 0.75rem;margin:0 0 1rem;padding:.75rem;" +
      "border-radius:12px;background:#fff;border:1px solid #e2e8f0;";

    var clockWrap = document.createElement("div");
    clockWrap.innerHTML = clockSvg(hour, minute);
    clockWrap.setAttribute("aria-label", "Clock " + timeLabel);

    function arrow() {
      var a = document.createElement("span");
      a.textContent = "→";
      a.style.cssText = "font-size:1.35rem;font-weight:700;color:#64748b;";
      a.setAttribute("aria-hidden", "true");
      return a;
    }

    var timeEl = document.createElement("span");
    timeEl.textContent = timeLabel;
    timeEl.style.cssText =
      "font-size:1.55rem;font-weight:800;color:#0f172a;letter-spacing:.02em;";

    var sentRow = document.createElement("span");
    sentRow.style.cssText = "display:inline-flex;align-items:center;gap:.35rem;";
    var sent = document.createElement("span");
    sent.textContent = data.modelSpeak || ("I get up at " + timeLabel + ".");
    sent.style.cssText = "font-size:1.05rem;font-weight:700;color:#1a3a5c;";
    sentRow.appendChild(sent);
    sentRow.appendChild(miniButton(data.modelSpeak || sent.textContent));

    visual.appendChild(clockWrap);
    visual.appendChild(arrow());
    visual.appendChild(timeEl);
    visual.appendChild(arrow());
    visual.appendChild(sentRow);
    root.appendChild(visual);

    // Model: I get up + at + 7:15
    var model = document.createElement("div");
    model.style.cssText =
      "display:flex;flex-wrap:wrap;align-items:center;gap:.4rem;" +
      "margin:0 0 .75rem;font-size:1.12rem;font-weight:700;color:#0f172a;";
    (data.modelParts || []).forEach(function (part, i) {
      if (i) {
        var plus = document.createElement("span");
        plus.textContent = "+";
        plus.style.cssText = "color:#64748b;font-weight:600;";
        model.appendChild(plus);
      }
      var chip = document.createElement("span");
      chip.textContent = part;
      chip.style.cssText =
        "padding:.28rem .55rem;border-radius:10px;background:#fff;" +
        "border:1px solid #c5d4e8;";
      if (String(part).toLowerCase() === "at") {
        chip.style.background = "#dbeafe";
        chip.style.borderColor = "#93c5fd";
        chip.style.color = "#1e40af";
      }
      model.appendChild(chip);
    });
    model.appendChild(miniButton(data.modelSpeak || "I get up at 7:15."));
    root.appendChild(model);

    var tip = document.createElement("p");
    tip.className = ua ? "tx-ua" : "tx-pl";
    tip.style.cssText = "margin:0 0 1rem;font-size:1rem;line-height:1.45;color:#334155;";
    tip.textContent = ua ? (data.tipUa || "") : (data.tipPl || "");
    root.appendChild(tip);

    // Examples
    var exTitle = document.createElement("p");
    exTitle.style.cssText =
      "margin:0 0 .4rem;font-size:.82rem;font-weight:700;letter-spacing:.04em;" +
      "text-transform:uppercase;color:#64748b;";
    exTitle.textContent = "Examples";
    root.appendChild(exTitle);

    var list = document.createElement("ul");
    list.style.cssText = "list-style:none;margin:0 0 1rem;padding:0;display:grid;gap:.4rem;";
    (data.examples || []).forEach(function (phrase) {
      var li = document.createElement("li");
      li.style.cssText =
        "display:flex;align-items:center;gap:.4rem;padding:.45rem .65rem;" +
        "border-radius:10px;background:#fff;border:1px solid #e2e8f0;" +
        "font-weight:700;color:#0f172a;";
      var t = document.createElement("span");
      t.textContent = phrase;
      li.appendChild(t);
      li.appendChild(miniButton(phrase));
      list.appendChild(li);
    });
    root.appendChild(list);

    // Compare at vs in
    var compare = document.createElement("div");
    compare.style.cssText =
      "display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin:0 0 .75rem;";
    function compareCard(item) {
      var card = document.createElement("div");
      card.style.cssText =
        "padding:.65rem .7rem;border-radius:12px;background:#fff;border:1px solid #c5d4e8;";
      var en = document.createElement("div");
      en.style.cssText = "font-weight:800;font-size:1.05rem;color:#1a3a5c;";
      en.textContent = item.en;
      var q = document.createElement("div");
      q.className = ua ? "tx-ua" : "tx-pl";
      q.style.cssText =
        "margin-top:.25rem;font-size:.88rem;font-weight:700;color:#64748b;" +
        "letter-spacing:.02em;";
      q.textContent = ua ? item.ua : item.pl;
      card.appendChild(en);
      card.appendChild(q);
      return card;
    }
    if (data.compareAt) compare.appendChild(compareCard(data.compareAt));
    if (data.compareIn) compare.appendChild(compareCard(data.compareIn));
    root.appendChild(compare);

    if (data.fullPhrase) {
      var full = document.createElement("div");
      full.style.cssText =
        "display:flex;align-items:center;gap:.4rem;margin:0 0 .55rem;" +
        "padding:.55rem .7rem;border-radius:12px;background:#eff6ff;" +
        "border:1px solid #bfdbfe;font-weight:700;color:#1e3a8a;";
      var ft = document.createElement("span");
      ft.textContent = data.fullPhrase;
      full.appendChild(ft);
      full.appendChild(miniButton(data.fullPhrase));
      root.appendChild(full);
    }

    var note = document.createElement("p");
    note.className = ua ? "tx-ua" : "tx-pl";
    note.style.cssText = "margin:0;font-size:.95rem;line-height:1.45;color:#475569;";
    note.textContent = ua ? (data.noteUa || "") : (data.notePl || "");
    root.appendChild(note);

    return root;
  }

  function renderThenTeach(mount, block) {
    var data = block && block.thenTeach;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-then-teach";
    root.style.cssText =
      "margin:0 0 1.1rem;padding:1rem 1.05rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    // Compact existing morning visual + SEQUENCE chips
    var visual = document.createElement("div");
    visual.style.cssText =
      "display:grid;gap:.65rem;margin:0 0 1rem;padding:.7rem;" +
      "border-radius:12px;background:#fff;border:1px solid #e2e8f0;";

    if (data.image) {
      var fig = document.createElement("div");
      fig.style.cssText =
        "overflow:hidden;border-radius:10px;max-height:150px;line-height:0;";
      var img = document.createElement("img");
      img.src = data.image;
      img.alt = data.imageAlt || "Daily routine sequence";
      img.style.cssText =
        "width:100%;height:150px;object-fit:cover;object-position:center top;display:block;";
      fig.appendChild(img);
      visual.appendChild(fig);
    }

    var seq = document.createElement("div");
    seq.style.cssText =
      "display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.35rem .45rem;";
    (data.sequence || []).forEach(function (item, i) {
      if (i) {
        var arrow = document.createElement("span");
        arrow.textContent = "→";
        arrow.setAttribute("aria-hidden", "true");
        arrow.style.cssText = "font-weight:700;color:#64748b;";
        seq.appendChild(arrow);
      }
      var chip = document.createElement("span");
      chip.textContent = item;
      chip.style.cssText =
        "padding:.28rem .55rem;border-radius:999px;background:#eff6ff;" +
        "border:1px solid #bfdbfe;font-weight:700;font-size:.92rem;color:#1e3a8a;";
      seq.appendChild(chip);
    });
    visual.appendChild(seq);
    root.appendChild(visual);

    (data.models || []).forEach(function (model) {
      var card = document.createElement("div");
      card.style.cssText =
        "margin:0 0 .7rem;padding:.65rem .75rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";
      var row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:flex-start;gap:.4rem;";
      var en = document.createElement("p");
      en.style.cssText =
        "margin:0;font-weight:700;font-size:1.05rem;color:#0f172a;line-height:1.4;";
      en.textContent = model.en;
      row.appendChild(miniButton(model.en));
      row.appendChild(en);
      card.appendChild(row);
      var gloss = ua ? model.glossUa : model.glossPl;
      if (gloss) {
        var g = document.createElement("p");
        g.className = ua ? "tx-ua" : "tx-pl";
        g.style.cssText = "margin:.4rem 0 0;font-size:.95rem;color:#475569;";
        g.textContent = gloss;
        card.appendChild(g);
      }
      root.appendChild(card);
    });

    return root;
  }

  function appendThenSpeaking(mount, block) {
    var data = block && block.thenTeach;
    if (!data || !data.speakingLines || !data.speakingLines.length) return;
    var body = mount.querySelector(".block-body");
    if (!body) return;
    var old = body.querySelector(".edumost-then-speak");
    if (old) old.remove();

    var ua = showUa();
    var box = document.createElement("div");
    box.className = "edumost-then-speak";
    box.style.cssText =
      "margin:1rem 0 0;padding:.85rem .95rem;border-radius:14px;" +
      "background:#fff7ed;border:1px solid #fed7aa;";

    var title = document.createElement("p");
    title.style.cssText =
      "margin:0 0 .55rem;font-weight:800;font-size:1.05rem;color:#9a3412;";
    title.textContent = data.speakingTitle || "Your turn!";
    box.appendChild(title);

    (data.speakingLines || []).forEach(function (line) {
      var p = document.createElement("p");
      p.style.cssText =
        "margin:.2rem 0;font-size:1.08rem;font-weight:700;color:#0f172a;line-height:1.45;";
      p.textContent = line;
      box.appendChild(p);
    });

    var hint = ua ? data.speakingHintUa : data.speakingHintPl;
    if (hint) {
      var h = document.createElement("p");
      h.className = ua ? "tx-ua" : "tx-pl";
      h.style.cssText = "margin:.55rem 0 0;font-size:.92rem;color:#9a3412;";
      h.textContent = hint;
      box.appendChild(h);
    }

    body.appendChild(box);
  }

  function renderPhraseDive(mount, block) {
    var data = block && block.phraseDive;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-phrase-dive";
    root.style.cssText =
      "margin:0 0 1.1rem;padding:1rem 1.05rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    if (data.keys && data.keys.length) {
      var keys = document.createElement("div");
      keys.style.cssText =
        "display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 .9rem;justify-content:center;";
      data.keys.forEach(function (k) {
        var chip = document.createElement("span");
        chip.textContent = k;
        chip.style.cssText =
          "padding:.28rem .7rem;border-radius:999px;background:#fff;" +
          "border:1px solid #c5d4e8;font-weight:800;font-size:.95rem;" +
          "color:#1a3a5c;letter-spacing:.02em;text-transform:lowercase;";
        keys.appendChild(chip);
      });
      root.appendChild(keys);
    }

    (data.groups || []).forEach(function (group) {
      var card = document.createElement("div");
      card.style.cssText =
        "margin:0 0 .7rem;padding:.65rem .75rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";

      var title = document.createElement("p");
      title.style.cssText =
        "margin:0 0 .45rem;font-size:.82rem;font-weight:800;letter-spacing:.06em;" +
        "color:#64748b;";
      title.textContent = group.title || "";
      card.appendChild(title);

      var list = document.createElement("div");
      list.style.cssText = "display:grid;gap:.35rem;";
      (group.items || []).forEach(function (item) {
        var row = document.createElement("div");
        row.style.cssText =
          "display:flex;align-items:center;justify-content:space-between;" +
          "gap:.55rem;flex-wrap:wrap;padding:.3rem .4rem;border-radius:8px;" +
          "background:#f8fafc;";

        var left = document.createElement("div");
        left.style.cssText = "display:flex;align-items:center;gap:.35rem;min-width:0;";
        var en = document.createElement("strong");
        en.style.cssText = "font-size:1.02rem;color:#0f172a;";
        en.textContent = item.speak || "";
        left.appendChild(en);
        left.appendChild(miniButton(item.speak || ""));

        var tr = document.createElement("span");
        tr.className = ua ? "tx-ua" : "tx-pl";
        tr.style.cssText = "font-size:.9rem;color:#64748b;font-weight:500;";
        tr.textContent = ua ? (item.ua || item.pl || "") : (item.pl || "");

        row.appendChild(left);
        row.appendChild(tr);
        list.appendChild(row);
      });
      card.appendChild(list);
      root.appendChild(card);
    });

    var tip = document.createElement("div");
    tip.style.cssText =
      "margin:.85rem 0 0;padding:.8rem .85rem;border-radius:12px;" +
      "background:#fff7ed;border:1px solid #fed7aa;";

    if (data.tipTitle) {
      var tipH = document.createElement("p");
      tipH.style.cssText =
        "margin:0 0 .45rem;font-weight:800;font-size:1.05rem;color:#9a3412;";
      tipH.textContent = data.tipTitle;
      tip.appendChild(tipH);
    }

    (data.tipLinesEn || []).forEach(function (line) {
      var p = document.createElement("p");
      p.style.cssText = "margin:.15rem 0;font-weight:700;color:#0f172a;line-height:1.4;";
      p.textContent = line;
      tip.appendChild(p);
    });

    if (data.tipWrong || data.tipRight) {
      var compare = document.createElement("div");
      compare.style.cssText = "margin:.55rem 0 0;display:grid;gap:.35rem;";
      if (data.tipWrong) {
        var wrong = document.createElement("p");
        wrong.style.cssText =
          "margin:0;padding:.4rem .55rem;border-radius:8px;background:#fef2f2;" +
          "color:#991b1b;font-weight:700;";
        wrong.textContent = "❌ " + data.tipWrong;
        compare.appendChild(wrong);
      }
      if (data.tipRight) {
        var right = document.createElement("div");
        right.style.cssText =
          "display:flex;align-items:center;gap:.35rem;padding:.4rem .55rem;" +
          "border-radius:8px;background:#ecfdf5;color:#166534;font-weight:700;";
        var rt = document.createElement("span");
        rt.textContent = "✅ " + data.tipRight;
        right.appendChild(rt);
        right.appendChild(miniButton(data.tipRight));
        compare.appendChild(right);
      }
      tip.appendChild(compare);
    }

    var tipNote = ua ? data.tipNoteUa : data.tipNotePl;
    if (tipNote) {
      var note = document.createElement("p");
      note.className = ua ? "tx-ua" : "tx-pl";
      note.style.cssText = "margin:.55rem 0 0;font-size:.92rem;color:#9a3412;";
      note.textContent = tipNote;
      tip.appendChild(note);
    }

    root.appendChild(tip);
    return root;
  }

  function renderSpeakingPrep(mount, block) {
    var data = block && block.speakingPrep;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-speaking-prep";
    root.style.cssText =
      "margin:0 0 1rem;padding:1rem 1.05rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    // Key question + TTS
    if (data.question) {
      var qRow = document.createElement("div");
      qRow.style.cssText =
        "display:flex;align-items:flex-start;gap:.45rem;margin:0 0 .75rem;" +
        "padding:.7rem .8rem;border-radius:12px;background:#eff6ff;border:1px solid #bfdbfe;";
      qRow.appendChild(miniButton(data.question));
      var qText = document.createElement("p");
      qText.style.cssText =
        "margin:0;font-size:1.2rem;font-weight:800;color:#1e3a8a;line-height:1.35;";
      qText.textContent = data.question;
      qRow.appendChild(qText);
      root.appendChild(qRow);
    }

    // Instruction EN + PL/UA
    if (data.promptEn) {
      var promptBox = document.createElement("div");
      promptBox.style.cssText = "margin:0 0 1rem;";
      var pe = document.createElement("p");
      pe.style.cssText = "margin:0;font-size:1.08rem;font-weight:700;color:#0f172a;";
      pe.textContent = data.promptEn;
      promptBox.appendChild(pe);
      var tr = ua ? data.promptUa : data.promptPl;
      if (tr) {
        var pt = document.createElement("p");
        pt.className = ua ? "tx-ua" : "tx-pl";
        pt.style.cssText = "margin:.3rem 0 0;font-size:.98rem;color:#475569;";
        pt.textContent = tr;
        promptBox.appendChild(pt);
      }
      root.appendChild(promptBox);
    }

    // Listen to example
    if (data.exampleLines && data.exampleLines.length) {
      var exBox = document.createElement("div");
      exBox.style.cssText =
        "margin:0 0 1rem;padding:.75rem .85rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";

      var exampleSpeak = data.exampleLines.join(" ");
      var listenBtn = document.createElement("button");
      listenBtn.type = "button";
      listenBtn.className = "edumost-speak edumost-example-listen";
      listenBtn.setAttribute("aria-label", "Listen to an example");
      listenBtn.textContent = "🔊 " + (data.exampleLabel || "Listen to an example");
      listenBtn.style.cssText =
        "display:inline-flex;align-items:center;gap:.35rem;" +
        "margin:0 0 .65rem;padding:.5rem .95rem;border:1px solid #c5d4e8;" +
        "border-radius:999px;background:#f3f7fc;color:#1a3a5c;" +
        "font:inherit;font-weight:700;cursor:pointer;";
      listenBtn.addEventListener("click", function (e) {
        e.preventDefault();
        speakEn(exampleSpeak);
      });
      exBox.appendChild(listenBtn);

      data.exampleLines.forEach(function (line) {
        var lp = document.createElement("p");
        lp.style.cssText =
          "margin:.2rem 0;font-size:1.05rem;font-weight:700;color:#0f172a;line-height:1.4;";
        lp.textContent = line;
        exBox.appendChild(lp);
      });
      root.appendChild(exBox);
    }

    // Day-part scaffolds
    (data.scaffolds || []).forEach(function (part) {
      var card = document.createElement("div");
      card.style.cssText =
        "margin:0 0 .65rem;padding:.7rem .8rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";
      var ht = document.createElement("p");
      ht.style.cssText =
        "margin:0 0 .4rem;font-weight:800;font-size:1rem;color:#1a3a5c;";
      ht.textContent = part.title || "";
      card.appendChild(ht);
      (part.lines || []).forEach(function (line) {
        var p = document.createElement("p");
        p.style.cssText =
          "margin:.18rem 0;font-size:1.05rem;font-weight:700;color:#334155;line-height:1.45;";
        p.textContent = line;
        card.appendChild(p);
      });
      root.appendChild(card);
    });

    // CORE vocab chips
    if (data.vocab && data.vocab.length) {
      var vocabBox = document.createElement("div");
      vocabBox.style.cssText =
        "margin:.85rem 0 0;padding:.75rem .8rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";
      var vh = document.createElement("p");
      vh.style.cssText =
        "margin:0 0 .5rem;font-size:.82rem;font-weight:800;letter-spacing:.04em;" +
        "text-transform:uppercase;color:#64748b;";
      vh.textContent = "Useful phrases";
      vocabBox.appendChild(vh);

      var chips = document.createElement("div");
      chips.style.cssText = "display:flex;flex-wrap:wrap;gap:.4rem;";
      data.vocab.forEach(function (phrase) {
        chips.appendChild(labelChip(phrase));
      });
      vocabBox.appendChild(chips);
      root.appendChild(vocabBox);
    }

    // Friendly no-score note
    var noteBox = document.createElement("div");
    noteBox.style.cssText =
      "margin:.9rem 0 0;padding:.7rem .8rem;border-radius:12px;" +
      "background:#ecfdf5;border:1px solid #a7f3d0;";
    if (data.noteEn) {
      var ne = document.createElement("p");
      ne.style.cssText = "margin:0;font-weight:700;color:#166534;line-height:1.4;";
      ne.textContent = data.noteEn;
      noteBox.appendChild(ne);
    }
    var noteTr = ua ? data.noteUa : data.notePl;
    if (noteTr) {
      var nt = document.createElement("p");
      nt.className = ua ? "tx-ua" : "tx-pl";
      nt.style.cssText = "margin:.35rem 0 0;font-size:.95rem;color:#166534;line-height:1.4;";
      nt.textContent = noteTr;
      noteBox.appendChild(nt);
    }
    root.appendChild(noteBox);

    return root;
  }

  function renderLessonClose(mount, block) {
    var data = block && block.lessonClose;
    if (!data) return null;
    var ua = showUa();

    var root = document.createElement("div");
    root.className = "edumost-lesson-close";
    root.style.cssText =
      "margin:0 0 1rem;padding:1rem 1.05rem 1.05rem;" +
      "border:1px solid #c5d4e8;border-radius:14px;background:#f8fafc;";

    if (data.leadEn) {
      var lead = document.createElement("div");
      lead.style.cssText = "margin:0 0 1rem;";
      var le = document.createElement("p");
      le.style.cssText =
        "margin:0;font-size:1.15rem;font-weight:800;color:#0f172a;line-height:1.4;";
      le.textContent = data.leadEn;
      lead.appendChild(le);
      var lt = ua ? data.leadUa : data.leadPl;
      if (lt) {
        var lp = document.createElement("p");
        lp.className = ua ? "tx-ua" : "tx-pl";
        lp.style.cssText = "margin:.35rem 0 0;font-size:1rem;color:#475569;";
        lp.textContent = lt;
        lead.appendChild(lp);
      }
      root.appendChild(lead);
    }

    (data.points || []).forEach(function (point) {
      var card = document.createElement("div");
      card.style.cssText =
        "margin:0 0 .65rem;padding:.7rem .8rem;border-radius:12px;" +
        "background:#fff;border:1px solid #e2e8f0;";
      var ht = document.createElement("p");
      ht.style.cssText =
        "margin:0 0 .4rem;font-weight:800;font-size:.95rem;color:#1a3a5c;";
      ht.textContent = point.title || "";
      card.appendChild(ht);
      if (point.body) {
        var body = document.createElement("p");
        body.style.cssText =
          "margin:0;font-size:1.02rem;font-weight:700;color:#0f172a;line-height:1.45;";
        body.textContent = point.body;
        card.appendChild(body);
      }
      (point.lines || []).forEach(function (line, i) {
        var row = document.createElement("div");
        row.style.cssText =
          "display:flex;align-items:center;gap:.35rem;margin:" + (i ? ".25rem" : "0") + " 0 0;";
        var p = document.createElement("p");
        p.style.cssText =
          "margin:0;font-size:1.05rem;font-weight:700;color:#0f172a;line-height:1.4;";
        p.textContent = line;
        row.appendChild(p);
        if (point.speak && i === 0) row.appendChild(miniButton(point.speak));
        card.appendChild(row);
      });
      root.appendChild(card);
    });

    if (data.modelLines && data.modelLines.length) {
      var model = document.createElement("div");
      model.style.cssText =
        "margin:.85rem 0 0;padding:.75rem .85rem;border-radius:12px;" +
        "background:#eff6ff;border:1px solid #bfdbfe;";

      var modelSpeak = data.modelLines.join(" ");
      var listenBtn = document.createElement("button");
      listenBtn.type = "button";
      listenBtn.className = "edumost-speak edumost-close-listen";
      listenBtn.setAttribute("aria-label", data.modelLabel || "Listen & say it aloud");
      listenBtn.textContent = "🔊 " + (data.modelLabel || "Listen & say it aloud");
      listenBtn.style.cssText =
        "display:inline-flex;align-items:center;gap:.35rem;" +
        "margin:0 0 .65rem;padding:.5rem .95rem;border:1px solid #93c5fd;" +
        "border-radius:999px;background:#fff;color:#1e3a8a;" +
        "font:inherit;font-weight:700;cursor:pointer;";
      listenBtn.addEventListener("click", function (e) {
        e.preventDefault();
        speakEn(modelSpeak);
      });
      model.appendChild(listenBtn);

      data.modelLines.forEach(function (line) {
        var lp = document.createElement("p");
        lp.style.cssText =
          "margin:.2rem 0;font-size:1.05rem;font-weight:700;color:#1e3a8a;line-height:1.4;";
        lp.textContent = line;
        model.appendChild(lp);
      });
      root.appendChild(model);
    }

    return root;
  }

  function insertAfterPrompt(mount, nodes) {
    var body = mount.querySelector(".block-body");
    if (!body) return;
    var prompt = body.querySelector(".prompt");
    var last = prompt || null;
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

  function setLessonNextEnabled(on) {
    var btn = document.querySelector("#lesson-nav .pager-btn.next");
    if (!btn) return;
    btn.disabled = !on;
  }

  function armPagerGate() {
    setLessonNextEnabled(false);
    setTimeout(function () { setLessonNextEnabled(false); }, 0);
    var nav = document.getElementById("lesson-nav");
    if (!nav || nav._edumostSeqGate) return;
    nav._edumostSeqGate = new MutationObserver(function () {
      var seq = document.querySelector(".edumost-task-sequence");
      if (seq && seq.getAttribute("data-done") !== "1") {
        setLessonNextEnabled(false);
      }
    });
    nav._edumostSeqGate.observe(nav, { childList: true, subtree: true });
  }

  function injectEnPrompt(mount, block) {
    if (!block || !block.enPrompt) return;
    var body = mount.querySelector(".block-body");
    if (!body) return;

    var old = body.querySelector(".edumost-en-prompt");
    if (old) old.remove();
    // Remove default prompt/text if present (we replace with EN + one translation)
    var prompt = body.querySelector(".prompt");
    if (prompt) prompt.remove();
    Array.prototype.slice.call(body.querySelectorAll(":scope > p.tx-pl, :scope > p.tx-ua")).forEach(function (p) {
      // keep only if after task sequence — remove leading intro paras before sequence/board
      if (!p.closest(".edumost-task-sequence") && !p.closest(".edumost-speak-board") && !p.closest(".edumost-speak-table-wrap")) {
        var prev = p.previousElementSibling;
        if (!prev || prev.classList.contains("viz") || prev.classList.contains("edumost-en-prompt")) {
          p.remove();
        }
      }
    });

    var box = document.createElement("div");
    box.className = "edumost-en-prompt prompt";
    var en = document.createElement("p");
    en.className = "tx-pl";
    en.style.margin = "0";
    en.textContent = block.enPrompt;
    box.appendChild(en);

    var lang = window.EduMostI18n && EduMostI18n.getLang() === "ua" ? "ua" : "pl";
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

    var viz = body.querySelector(".viz");
    if (viz && viz.nextSibling) body.insertBefore(box, viz.nextSibling);
    else if (viz) body.appendChild(box);
    else body.insertBefore(box, body.firstChild);
  }

  function enhanceEnQuestion(hold, task) {
    var body = hold.querySelector(".task-body");
    if (!body) return;

    var phrase = task.questionEn || (typeof task.question === "string" ? task.question : "") || "";
    if (!phrase) return;

    var old = body.querySelector(".edumost-en-q");
    if (old) old.remove();

    // Remove default dual() question paragraphs rendered by TaskEngine
    var opts = body.querySelector(".task-options");
    if (opts) {
      while (body.firstChild && body.firstChild !== opts) {
        body.removeChild(body.firstChild);
      }
    } else {
      Array.prototype.slice.call(body.querySelectorAll(":scope > p.tx-pl, :scope > p.tx-ua")).forEach(function (p) {
        p.remove();
      });
    }

    var wrap = document.createElement("div");
    wrap.className = "edumost-en-q";
    wrap.style.cssText = "margin:0 0 .65rem;";

    var row = document.createElement("div");
    row.style.cssText = "display:flex;align-items:flex-start;gap:.4rem;";

    var btn = miniButton(phrase);
    btn.className = "edumost-speak-mini edumost-q-speak";
    btn.style.marginTop = ".1rem";

    var en = document.createElement("p");
    en.className = "tx-pl edumost-q-en";
    en.style.cssText = "margin:0;font-weight:700;font-size:1.05rem;color:#0f172a;line-height:1.35;";
    en.textContent = phrase;

    row.appendChild(btn);
    row.appendChild(en);
    wrap.appendChild(row);

    if (task.stem) {
      var stem = document.createElement("p");
      stem.className = "edumost-q-stem";
      stem.style.cssText =
        "margin:.55rem 0 0;font-size:1.35rem;font-weight:800;color:#1a3a5c;letter-spacing:.02em;";
      stem.textContent = task.stem;
      wrap.appendChild(stem);
    }

    var lang = window.EduMostI18n && EduMostI18n.getLang() === "ua" ? "ua" : "pl";
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

  function buildFlashPlayer(src, label) {
    var box = document.createElement("div");
    box.className = "edumost-flash-player em-audio";
    box.style.cssText =
      "margin:0 0 1rem;padding:.75rem .85rem;border:1px solid var(--line,#dbe3ee);" +
      "border-radius:12px;background:#f8fafc;";

    var lab = document.createElement("p");
    lab.className = "em-audio-label";
    lab.style.cssText = "margin:0 0 .45rem;font-size:.85rem;font-weight:700;color:#0f766e;";
    lab.textContent = label || "Flash audio";
    box.appendChild(lab);

    var audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "metadata";
    audio.style.cssText = "width:100%;display:block;";
    var source = document.createElement("source");
    source.src = src;
    source.type = "audio/mpeg";
    audio.appendChild(source);
    box.appendChild(audio);

    var hint = document.createElement("p");
    hint.style.cssText = "margin:.4rem 0 0;font-size:.82rem;color:#64748b;";
    hint.textContent = "You can play the recording more than once.";
    box.appendChild(hint);
    return box;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    // avoid accidental identical order
    if (a.length > 1) {
      var same = true;
      for (var k = 0; k < a.length; k++) {
        if (a[k] !== arr[k]) { same = false; break; }
      }
      if (same) {
        tmp = a[0];
        a[0] = a[a.length - 1];
        a[a.length - 1] = tmp;
      }
    }
    return a;
  }

  function mountOrderBuild(hold, task, ctx) {
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
        ph.textContent = "Tap phrases in order →";
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
      var result = EduMostFeedback.evaluate(task, picked.slice());
      feedbackBox.hidden = false;
      feedbackBox.className = "task-feedback " +
        (result.ok === true ? "is-ok" : result.ok === false ? "is-bad" : "is-hint");
      feedbackBox.innerHTML = "<strong>" + String(result.headline).replace(/</g, "&lt;") + "</strong>" +
        (result.detail ? "<p>" + String(result.detail).replace(/</g, "&lt;") + "</p>" : "");
      if (ctx && ctx.onResult && result.ok !== null) ctx.onResult(result, picked.slice());
    });
  }

  /**
   * Progressive quiz (Before / After listening).
   * Reuses EduMostTaskEngine for single-choice; order-build is lesson-local.
   * Optional block.flashAudio → HTML5 player (Flash CD track only).
   */
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

    if (block.flashAudio) {
      root.appendChild(buildFlashPlayer(block.flashAudio, block.flashAudioLabel));
    }

    var seqBody = document.createElement("div");
    seqBody.className = "edumost-seq-body";
    root.appendChild(seqBody);

    var index = 0;
    var doneLabels = [];
    var finished = false;
    var afterMode = block.sequenceMode === "after-listening" || !!block.flashAudio;
    var partsMode = block.sequenceMode === "parts-of-day";
    var phraseMode = !!block.phraseDive;
    var closeMode = block.sequenceMode === "lesson-close" || !!block.lessonClose;
    var closeData = block.lessonClose || {};

    setLessonNextEnabled(false);
    armPagerGate();

    function goNextScreen() {
      var seq = document.querySelector(".edumost-task-sequence");
      if (seq) seq.setAttribute("data-done", "1");
      setLessonNextEnabled(true);
      if (closeMode) return;
      var btn = document.querySelector("#lesson-nav .pager-btn.next");
      if (btn && !btn.disabled) btn.click();
    }

    function onTaskResult(hold, task, result) {
      if (ctx && ctx.onTask) ctx.onTask(task, result);
      var feedbackBox = hold.querySelector(".task-feedback");
      var isLast = index >= tasks.length - 1;
      var showUaLang = window.EduMostI18n && EduMostI18n.getLang() === "ua";

      if (result && result.ok === true && feedbackBox) {
        var detail = (result.detail || "").trim();
        if (isLast && closeMode) {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML = "";

          var success = document.createElement("div");
          success.style.cssText = "margin:0 0 .75rem;";
          var sEn = document.createElement("p");
          sEn.style.cssText = "margin:0;font-weight:800;font-size:1.05rem;line-height:1.4;color:#166534;";
          sEn.textContent = "🎉 " + (closeData.successEn || "Great! You can talk about your typical day.");
          success.appendChild(sEn);
          var sTr = showUaLang ? closeData.successUa : closeData.successPl;
          if (sTr) {
            var sP = document.createElement("p");
            sP.className = showUaLang ? "tx-ua" : "tx-pl";
            sP.style.cssText = "margin:.3rem 0 0;line-height:1.4;";
            sP.textContent = sTr;
            success.appendChild(sP);
          }
          feedbackBox.appendChild(success);

          var say = document.createElement("div");
          say.style.cssText =
            "margin:0 0 .65rem;padding:.7rem .8rem;border-radius:12px;" +
            "background:#fff7ed;border:1px solid #fed7aa;";
          var sayTitle = document.createElement("p");
          sayTitle.style.cssText = "margin:0;font-weight:800;color:#9a3412;";
          sayTitle.textContent = "🎤 " + (closeData.sayEn || "Now say one sentence about your day.");
          say.appendChild(sayTitle);
          var sayTr = showUaLang ? closeData.sayUa : closeData.sayPl;
          if (sayTr) {
            var sayP = document.createElement("p");
            sayP.className = showUaLang ? "tx-ua" : "tx-pl";
            sayP.style.cssText = "margin:.3rem 0 0;color:#9a3412;";
            sayP.textContent = sayTr;
            say.appendChild(sayP);
          }
          if (closeData.sayPrompt) {
            var promptLine = document.createElement("p");
            promptLine.style.cssText =
              "margin:.5rem 0 0;font-size:1.15rem;font-weight:800;color:#0f172a;";
            promptLine.textContent = closeData.sayPrompt;
            say.appendChild(promptLine);
          }
          feedbackBox.appendChild(say);

          if (closeData.nextLesson) {
            var nextLine = document.createElement("p");
            nextLine.style.cssText =
              "margin:0;font-size:.92rem;font-weight:600;color:#64748b;";
            nextLine.textContent = closeData.nextLesson;
            feedbackBox.appendChild(nextLine);
          }
        } else if (isLast && partsMode) {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML = "";
          var enRow = document.createElement("div");
          enRow.style.cssText = "display:flex;align-items:flex-start;gap:.4rem;";
          var enMsg = "Great! You can sort your daily activities by time of day.";
          enRow.appendChild(miniButton(enMsg));
          var enP = document.createElement("p");
          enP.style.cssText = "margin:0;font-weight:700;line-height:1.4;";
          enP.innerHTML = "<strong>✓ Great!</strong> You can sort your daily activities by time of day.";
          enRow.appendChild(enP);
          feedbackBox.appendChild(enRow);
          var plP = document.createElement("p");
          plP.className = showUaLang ? "tx-ua" : "tx-pl";
          plP.style.cssText = "margin:.4rem 0 0;line-height:1.4;";
          plP.textContent = showUaLang
            ? "Чудово! Ти вмієш упорядковувати дії за частиною дня."
            : "Świetnie! Potrafisz uporządkować czynności według pory dnia.";
          feedbackBox.appendChild(plP);
        } else if (isLast && phraseMode) {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML =
            "<strong>✓ Great!</strong>" +
            "<p>Learn the whole phrase — not just one word.</p>" +
            (detail ? "<p>" + detail.replace(/</g, "&lt;") + "</p>" : "") +
            (showUaLang
              ? '<p class="tx-ua" style="margin-top:.35rem">Чудово! Запам’ятай цілий вираз.</p>'
              : '<p class="tx-pl" style="margin-top:.35rem">Świetnie! Zapamiętaj całe wyrażenie.</p>');
        } else if (isLast && afterMode) {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML =
            "<strong>✓ Great job!</strong>" +
            "<p>You checked the morning routine.</p>" +
            (showUaLang
              ? '<p class="tx-ua" style="margin-top:.35rem">Чудово!<br>Ти перевірив / перевірила ранкову рутину.</p>'
              : "");
        } else if (isLast) {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML =
            "<strong>✓ Great job!</strong>" +
            "<p>You are ready to listen.</p>" +
            (showUaLang
              ? '<p class="tx-ua" style="margin-top:.35rem">Чудово!<br>Ти готовий / готова слухати.</p>'
              : "");
        } else {
          feedbackBox.className = "task-feedback is-ok";
          feedbackBox.innerHTML =
            "<strong>✓ Correct!</strong>" +
            (detail ? "<p>" + detail.replace(/</g, "&lt;") + "</p>" : "");
        }
      }

      if (!result || result.ok !== true) return;

      var actions = hold.querySelector(".task-actions");
      if (actions) {
        var checkBtn = actions.querySelector(".task-check");
        if (checkBtn) checkBtn.disabled = true;
        var poolBtns = hold.querySelectorAll(".edumost-order-pool button");
        Array.prototype.forEach.call(poolBtns, function (b) { b.disabled = true; });
        var inputs = hold.querySelectorAll("input[type=radio], input[type=checkbox]");
        Array.prototype.forEach.call(inputs, function (inp) { inp.disabled = true; });
      }

      var existing = seqBody.querySelector(".edumost-q-next");
      if (existing) existing.remove();

      var nextWrap = document.createElement("div");
      nextWrap.className = "edumost-q-next";
      nextWrap.style.cssText = "margin:.75rem 0 0;display:flex;flex-direction:column;gap:.55rem;";

      var nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "step-next edumost-q-next-btn";
      if (isLast) {
        nextBtn.textContent = closeMode
          ? "✓ Gotowe"
          : afterMode || partsMode || phraseMode
            ? "Dalej →"
            : "🎧 Listen →";
      } else {
        nextBtn.textContent = "Dalej →";
      }
      nextBtn.style.cssText =
        "align-self:flex-start;padding:.55rem 1rem;border-radius:10px;" +
        "border:1px solid #0f766e;background:#0f766e;color:#fff;" +
        "font:inherit;font-weight:700;cursor:pointer;";
      nextBtn.addEventListener("click", function () {
        doneLabels.push(task.doneLabel || ("Question " + (index + 1)));
        if (isLast) {
          finished = true;
          goNextScreen();
          return;
        }
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
      meta.className = "edumost-q-progress";
      meta.style.cssText =
        "display:flex;align-items:center;justify-content:space-between;" +
        "gap:.75rem;flex-wrap:wrap;margin:0 0 .65rem;";

      var label = document.createElement("p");
      label.style.cssText = "margin:0;font-weight:700;color:#0f172a;";
      label.textContent = "Question " + (index + 1) + " of " + tasks.length;
      meta.appendChild(label);

      var dots = document.createElement("div");
      dots.setAttribute("aria-hidden", "true");
      dots.style.cssText = "display:flex;gap:.35rem;align-items:center;";
      for (var d = 0; d < tasks.length; d++) {
        var dot = document.createElement("span");
        var done = d < index;
        var now = d === index;
        dot.textContent = done || now ? "●" : "○";
        dot.style.cssText =
          "font-size:.95rem;line-height:1;color:" +
          (done ? "#0f766e" : now ? "#1d4ed8" : "#94a3b8") + ";";
        dots.appendChild(dot);
      }
      meta.appendChild(dots);
      seqBody.appendChild(meta);

      if (doneLabels.length) {
        var doneBox = document.createElement("div");
        doneBox.className = "edumost-q-done";
        doneBox.style.cssText =
          "display:flex;flex-direction:column;gap:.25rem;margin:0 0 .75rem;";
        doneLabels.forEach(function (line) {
          var p = document.createElement("p");
          p.className = "edumost-q-done-item";
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
        mountOrderBuild(hold, task, {
          onResult: function (result) {
            onTaskResult(hold, task, result);
          }
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
    if (!finished) setLessonNextEnabled(false);
  }

  function enhanceVocabSpeakRows(mount, block) {
    var rows = block && block.rows;
    if (!rows || !rows.length || !rows[0] || !rows[0].speak) return;
    var table = mount.querySelector(".vocab-table");
    if (!table) return;

    var ua = showUa();
    var thead = table.querySelector("thead tr");
    if (thead && thead.children.length >= 2) {
      thead.children[0].textContent = "English";
      thead.children[1].textContent = ua ? "Українська" : "Polski";
    }

    var tbody = table.querySelector("tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    rows.forEach(function (row) {
      var phrase = row.speak || "";
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
      if (ua && row.ua) {
        var uaEl = document.createElement("span");
        uaEl.className = "tx-ua";
        uaEl.style.marginTop = "0";
        uaEl.textContent = row.ua;
        tdTr.appendChild(uaEl);
      } else {
        tdTr.textContent = row.pl || "";
      }

      tr.appendChild(tdEn);
      tr.appendChild(tdTr);
      tbody.appendChild(tr);
    });
  }

  function enhanceStandaloneTask(mount, block) {
    if (!block || !block.task || block.taskSequence) return;
    var task = block.task;
    if (!task.questionEn && typeof task.question !== "string") return;
    var hold = mount.querySelector(".task-slot");
    if (!hold) return;
    enhanceEnQuestion(hold, task);
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
    injectHeadingSpeak(mount, block);
    insertAfterPrompt(mount, [
      renderSpeakBoard(mount, block),
      renderSpeakTable(mount, block),
      renderAtTimeTeach(mount, block),
      renderThenTeach(mount, block),
      renderPhraseDive(mount, block),
      renderSpeakingPrep(mount, block),
      renderLessonClose(mount, block)
    ]);
    injectEnPrompt(mount, block);
    enhanceVocabSpeakRows(mount, block);
    if (block && block.taskSequence) {
      renderTaskSequence(mount, block, ctx);
    } else {
      enhanceStandaloneTask(mount, block);
      setLessonNextEnabled(true);
    }
    appendThenSpeaking(mount, block);
    stripEmptyPlaceholder(mount);
  };
})();
