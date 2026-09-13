(function (g) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function render(progressEl, pagerEl, state) {
    const t = EduMostI18n.t;
    const total = state.total;
    const current = state.current;
    const visited = state.visited || [];

    let dots = "";
    for (let i = 0; i < total; i++) {
      const done = visited.indexOf(i) >= 0;
      const now = i === current;
      const cls = "dot" + (now ? " is-now" : done ? " is-seen" : "");
      const can = done || i === current;
      dots += '<button type="button" class="' + cls + '" data-go="' + i + '"' +
        (can ? "" : " disabled") + ' aria-label="' + (i + 1) + '"></button>';
    }

    if (progressEl) {
      progressEl.innerHTML =
        '<p class="lesson-count">' + (current + 1) + " / " + total + "</p>" +
        '<div class="lesson-dots">' + dots + "</div>" +
        timelineHtml(state.timeline, state.timelineYear, state.timelineId, state.timelineLesson);
    }

    if (pagerEl) {
      pagerEl.innerHTML =
        '<div class="lesson-pager">' +
          '<button type="button" class="pager-btn prev"' + (current === 0 ? " disabled" : "") + ">" +
            "← " + esc(t("lessonPrev")) + "</button>" +
          '<button type="button" class="pager-btn next"' + (current >= total - 1 ? " disabled" : "") + ">" +
            esc(t("lessonNext")) + " →</button>" +
        "</div>";
    }
  }

  function dual(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    const lang = EduMostI18n.getLang();
    return obj[lang] || obj.pl || "";
  }

  function yearShow(it) {
    if (!it) return "";
    if (it.show == null) return it.year != null ? String(it.year) : "";
    if (typeof it.show === "string") return it.show;
    return dual(it.show);
  }

  function yearsOf(currentYear) {
    if (currentYear == null || currentYear === "") return [];
    if (Array.isArray(currentYear)) return currentYear;
    return [currentYear];
  }

  function tickMatches(it, currentYear, currentId) {
    if (!it) return false;
    if (currentId && it.id && String(it.id) === String(currentId)) return true;
    const years = yearsOf(currentYear);
    for (let i = 0; i < years.length; i++) {
      const y = years[i];
      if (it.year === y) return true;
      const a = Number(y);
      const b = Number(it.year);
      if (!isNaN(a) && !isNaN(b) && a === b) return true;
    }
    return false;
  }

  function itemHtml(it, currentYear, currentId, lessonNo) {
    const now = tickMatches(it, currentYear, currentId);
    const from = it && it.from;
    const known = it && (it.known || (from != null && lessonNo > from));
    const isNew = from != null && lessonNo === from && !now;
    const era = it && it.kind === "era";
    const isCE = it && it.era === "ce";
    const cls = "tl-item" +
      (now ? " is-now" : "") +
      (known && !now ? " is-known" : "") +
      (isNew ? " is-new" : "") +
      (era ? " is-era" : "") +
      (isCE && !now && !isNew ? " is-ce" : "");
    return '<li class="' + cls + '">' +
      '<span class="tl-year">' + esc(yearShow(it)) + "</span>" +
      '<span class="tl-mark" aria-hidden="true"></span>' +
      '<span class="tl-label">' + esc(dual(it && it.label)) + "</span>" +
      "</li>";
  }

  function timelineHtml(spec, currentYear, currentId, lessonNo) {
    if (!spec) return "";
    const hasBCE = spec.items && spec.items.length;
    const hasCE = spec.itemsCE && spec.itemsCE.length;
    if (!hasBCE && !spec.eraTick && !hasCE) return "";
    const title = EduMostI18n.t("timelineTitle");
    const era = dual(spec.era);
    const earlier = (spec.croppedLeft ? "… " : "") + EduMostI18n.t("timelineEarlier");
    const later = EduMostI18n.t("timelineLater");
    const hint = hasCE && !hasBCE && !spec.eraTick
      ? EduMostI18n.t("timelineCeOnlyHint")
      : hasCE
        ? EduMostI18n.t("timelineCeHint")
        : EduMostI18n.t("timelineBceHint");
    let items = "";
    (spec.items || []).forEach(function (it) {
      items += itemHtml(it, currentYear, currentId, lessonNo);
    });
    if (spec.eraTick) {
      items += '<li class="tl-spacer" aria-hidden="true"></li>';
      items += itemHtml(spec.eraTick, currentYear, currentId, lessonNo);
    }
    if (hasCE) {
      spec.itemsCE.forEach(function (it) {
        items += itemHtml(it, currentYear, currentId, lessonNo);
      });
    }
    return '<div class="lesson-timeline" role="group" aria-label="' +
      esc(title) + (era ? " (" + esc(era) + ")" : "") + '">' +
      '<p class="tl-era">' + esc(hint || era) + "</p>" +
      '<div class="tl-row">' +
        '<span class="tl-end is-start">' + esc(earlier) + "</span>" +
        '<ol class="tl-track">' + items + "</ol>" +
        '<span class="tl-end is-finish">' + esc(later) + " →</span>" +
      "</div></div>";
  }

  function bind(progressEl, pagerEl, handlers) {
    function onClick(ev) {
      const btn = ev.target.closest ? ev.target.closest("[data-go], .prev, .next") : null;
      if (!btn) return;
      const go = btn.getAttribute("data-go");
      if (go != null) handlers.go(Number(go));
      else if (btn.classList.contains("prev")) handlers.prev();
      else if (btn.classList.contains("next")) handlers.next();
    }
    if (progressEl && !progressEl._bound) {
      progressEl._bound = true;
      progressEl.addEventListener("click", onClick);
    }
    if (pagerEl && !pagerEl._bound) {
      pagerEl._bound = true;
      pagerEl.addEventListener("click", onClick);
    }
  }

  g.EduMostLessonNav = { render: render, bind: bind };
})(window);
