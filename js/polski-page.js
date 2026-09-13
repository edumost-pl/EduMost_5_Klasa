(function () {
  const PROGRESS_KEY = "edumost-progress";
  const TAB_KEY = "edumost-polski-tab";
  const SUBJECT = "polski";
  const CAT_ORDER = [
    "LITERATURA", "LEKTURY", "GRAMATYKA", "ORTOGRAFIA",
    "PISANIE", "CZYTANIE", "KULTURA_MEDIA", "NEUTRAL"
  ];
  const LESSON_HREF = {
    T1: "../lessons/polski/01-sytuacja-komunikacyjna/index.html",
    T2: "../lessons/polski/02-apostrofa/index.html",
    T3: "../lessons/polski/03-Jakie_tajemnice_kosmosu/index.html",
    T4: "../lessons/polski/04-Doskonalimy_czytanie/index.html",
    T5: "../lessons/polski/05-pisownia-wymienna/index.html",
    T6: "../lessons/polski/06-podmiot-liryczny/index.html",
    T7: "../lessons/polski/07-rz-niewymienne/index.html",
    T8: "../lessons/polski/08-rz-niewymienne-cwiczenia/index.html",
    T9: "../lessons/polski/09-jerzy-tajny-klucz/index.html",
    T10: "../lessons/polski/10-przypowiesc-o-maku/index.html",
    T11: "../lessons/polski/11-przypowiesc-cwiczenia/index.html",
    T12: "../lessons/polski/12-komiks-tytul/index.html",
    T13: "../lessons/polski/13-komiks-cwiczenia/index.html",
    T14: "../lessons/polski/14-poczatek-swiata/index.html",
    T15: "../lessons/polski/15-swiat-stworzony/index.html",
    T16: "../lessons/polski/16-biblia-ilustracja/index.html",
    T17: "../lessons/polski/17-twardowski-jagody/index.html",
    T18: "../lessons/polski/18-twardowski-cwiczenia/index.html",
    T19: "../lessons/polski/19-demeter-kora/index.html",
    T20: "../lessons/polski/20-demeter-teatr/index.html",
    T21: "../lessons/polski/21-prometeusz/index.html",
    T22: "../lessons/polski/22-rzeczownik-podzial/index.html",
    T23: "../lessons/polski/23-rzeczownik-konkretne/index.html",
    T24: "../lessons/polski/24-krolestwo-morza/index.html",
    T25: "../lessons/polski/25-list-amfitryty/index.html",
    T26: "../lessons/polski/26-slownik-synonimow/index.html",
    T27: "../lessons/polski/27-helios-faeton/index.html",
    T28: "../lessons/polski/28-komiks-faeton/index.html",
    T29: "../lessons/polski/29-przypadki-rzeczownika/index.html",
    T30: "../lessons/polski/30-odmiana-cwiczenia/index.html",
    T31: "../lessons/polski/31-temat-nie-rzeczownik/index.html",
    T32: "../lessons/polski/32-dwa-wiatry/index.html",
    T33: "../lessons/polski/33-dwa-wiatry-recytacja/index.html",
    T34: "../lessons/polski/34-studio-pogoda/index.html",
    T35: "../lessons/polski/35-prognoza-planeta/index.html"
  };
  let pageQueryRaw = "";
  let topScrollBound = false;
  let topObserver = null;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function course() {
    return window.EduMostPolskiCourse;
  }

  function progressMap() {
    try {
      const data = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      return data[SUBJECT] || {};
    } catch (e) {
      return {};
    }
  }

  function doneCount(topics) {
    const done = progressMap();
    return topics.filter(function (t) { return done[t.id] === "done"; }).length;
  }

  function isDone(id) {
    return progressMap()[id] === "done";
  }

  function getTab() {
    try {
      return sessionStorage.getItem(TAB_KEY) === "assess" ? "assess" : "lessons";
    } catch (e) {
      return "lessons";
    }
  }

  function setTab(tab) {
    try { sessionStorage.setItem(TAB_KEY, tab); } catch (e) {}
  }

  function locTitle(map, lang) {
    if (!map) return "";
    return lang === "ua" ? (map.ua || map.pl || "") : (map.pl || "");
  }

  function parsePageRange(raw) {
    const s = String(raw == null ? "" : raw).trim().replace(/\s/g, "").replace(/[–—−]/g, "-");
    if (!s) return null;
    const m = s.match(/^(\d+)(?:-(\d+))?$/);
    if (!m) return { invalid: true };
    let from = parseInt(m[1], 10);
    let to = m[2] ? parseInt(m[2], 10) : from;
    if (from > to) {
      const swap = from;
      from = to;
      to = swap;
    }
    return { from: from, to: to };
  }

  function topicMatchesPage(topic, query) {
    if (!query) return true;
    if (query.invalid) return false;
    const page = parsePageRange(topic.page);
    if (!page || page.invalid) return false;
    return page.from <= query.to && query.from <= page.to;
  }

  function filteredTopics(topics, raw) {
    const query = parsePageRange(raw);
    if (!query) return { list: topics, active: false, empty: false };
    const list = topics.filter(function (topic) { return topicMatchesPage(topic, query); });
    return { list: list, active: true, empty: list.length === 0 };
  }

  function groupTopics(topics) {
    const groups = [];
    let part = null;
    let chapter = null;
    topics.forEach(function (topic) {
      if (!part || part.id !== topic.part) {
        part = { id: topic.part, chapters: [] };
        groups.push(part);
        chapter = null;
      }
      if (!chapter || chapter.id !== topic.chapter) {
        chapter = { id: topic.chapter, topics: [] };
        part.chapters.push(chapter);
      }
      chapter.topics.push(topic);
    });
    return groups;
  }

  function renderLegend(data, lang) {
    const t = EduMostI18n.t;
    return '<div class="polski-legend" aria-label="' + escapeHtml(t("polskiLegend")) + '">' +
      CAT_ORDER.map(function (id) {
        return '<span class="polski-chip cat-' + id + '">' +
          escapeHtml(locTitle(data.categories[id], lang)) + "</span>";
      }).join("") +
      "</div>";
  }

  function renderTopicCard(topic, lang) {
    const t = EduMostI18n.t;
    const catLabel = locTitle(course().categories[topic.category], lang);
    const skills = (topic.skills || []).join(" · ") || "—";
    const outcome = topic.outcome && topic.outcome !== "—" ? topic.outcome : "—";
    const done = isDone(topic.id);
    const href = LESSON_HREF[topic.id];
    const status = done ? t("polskiDone") : (href ? t("openLesson") : t("openSoon"));
    const card = '<article class="polski-t cat-' + escapeHtml(topic.category) +
      (done ? " is-done" : "") +
      (href ? " is-open" : "") + '">' +
      '<div class="polski-t-top">' +
        '<span class="polski-t-id">' + escapeHtml(topic.id) + "</span>" +
        '<span class="polski-t-meta">' + escapeHtml(String(topic.hours)) + " " +
          escapeHtml(t("polskiHour")) + " · " + escapeHtml(topic.part) + " / " +
          escapeHtml(topic.chapter) + "</span>" +
        '<span class="polski-chip cat-' + escapeHtml(topic.category) + '">' +
          escapeHtml(catLabel) + "</span>" +
      "</div>" +
      '<h4 class="polski-t-title">' + escapeHtml(topic.title) + "</h4>" +
      '<dl class="polski-t-fields">' +
        "<div><dt>" + escapeHtml(t("polskiBook")) + "</dt><dd>" +
          escapeHtml(topic.page ? "s. " + topic.page : "—") + "</dd></div>" +
        "<div><dt>" + escapeHtml(t("polskiSkills")) + "</dt><dd>" +
          escapeHtml(skills) + "</dd></div>" +
        "<div><dt>" + escapeHtml(t("polskiAfter")) + "</dt><dd>" +
          escapeHtml(outcome) + "</dd></div>" +
      "</dl>" +
      '<div class="polski-t-status">' + escapeHtml(t("statusLabel")) +
        escapeHtml(status) + "</div>" +
      "</article>";
    if (href) {
      return '<a class="polski-t-link" href="' + escapeHtml(href) + '">' + card + "</a>";
    }
    return card;
  }

  function renderSearch(raw) {
    const t = EduMostI18n.t;
    const hasQuery = String(raw || "").trim() !== "";
    return '<form class="polski-search" role="search">' +
      '<label for="polski-page-q">' + escapeHtml(t("polskiFindPage")) + "</label>" +
      '<div class="polski-search-row">' +
        '<input id="polski-page-q" type="search" name="page" autocomplete="off" spellcheck="false"' +
          ' placeholder="' + escapeHtml(t("polskiFindPagePh")) + '"' +
          ' value="' + escapeHtml(raw || "") + '"' +
          ' aria-label="' + escapeHtml(t("polskiFindPage")) + '">' +
        '<button type="button" class="polski-search-clear" data-polski-clear' +
          (hasQuery ? "" : " disabled") + ">" +
          escapeHtml(t("polskiClear")) + "</button>" +
      "</div>" +
      "</form>";
  }

  function renderCatalog(data, lang, raw) {
    const filtered = filteredTopics(data.topics, raw);
    if (filtered.empty) {
      return '<p class="polski-empty" role="status">' +
        escapeHtml(EduMostI18n.t("polskiFindNone")) + "</p>";
    }
    const groups = groupTopics(filtered.list);
    let html = "";
    groups.forEach(function (part) {
      html += '<h3 class="part-title">' + escapeHtml(locTitle(data.parts[part.id], lang)) + "</h3>";
      part.chapters.forEach(function (ch) {
        html += '<details class="chapter" open><summary>' +
          escapeHtml(locTitle(data.chapters[ch.id], lang)) +
          "</summary>" +
          '<div class="polski-t-list">';
        ch.topics.forEach(function (topic) {
          html += renderTopicCard(topic, lang);
        });
        html += "</div></details>";
      });
    });
    return html;
  }

  function renderLessons(data, lang) {
    return renderSearch(pageQueryRaw) +
      renderLegend(data, lang) +
      '<div data-polski-catalog>' + renderCatalog(data, lang, pageQueryRaw) + "</div>";
  }

  function renderKartkowki(items, lang) {
    const t = EduMostI18n.t;
    if (!items || !items.length) {
      return '<p class="polski-empty">' + escapeHtml(t("polskiKartkowkiEmpty")) + "</p>";
    }
    return '<div class="polski-assess-list">' + items.map(function (item) {
      const title = lang === "ua" ? (item.titleUa || item.titlePl) : item.titlePl;
      const prepTitle = lang === "ua"
        ? (item.prepTitleUa || item.prepTitlePl)
        : (item.prepTitlePl || "");
      const req = (item.teacherRequirements || []).filter(Boolean);
      const linked = (item.linkedT || []).filter(Boolean);
      let html = "";
      if (item.prepHref) {
        html += '<article class="polski-assess-item is-prep">' +
          '<span class="polski-assess-kicker">📚 ' + escapeHtml(t("polskiPrepLabel")) + "</span>" +
          '<h4 class="polski-assess-title">' + escapeHtml(prepTitle || t("polskiPrepLabel")) + "</h4>" +
          '<p class="polski-assess-note">' +
            escapeHtml(lang === "ua"
              ? "Новий вірш. Навчишся шукати в тексті те, що буде на картатці."
              : "Nowy wiersz. Nauczysz się, jak znaleźć w tekście to, o co zapyta nauczyciel.") +
          "</p>" +
          '<a class="polski-assess-open" href="' + escapeHtml(item.prepHref) + '">' +
            escapeHtml(t("polskiPrepOpen")) + "</a>" +
          "</article>";
      }
      html += '<article class="polski-assess-item is-kart">' +
        '<span class="polski-assess-kicker">📝 ' + escapeHtml(t("polskiKartkowkaOne")) + "</span>" +
        '<span class="polski-t-id">' + escapeHtml(item.id) + "</span>" +
        '<h4 class="polski-assess-title">' + escapeHtml(title || "Kartkówka") + "</h4>";
      if (item.date) {
        html += '<p class="polski-assess-note">' + escapeHtml(t("polskiKartkowkaDate")) +
          ": " + escapeHtml(item.date) +
          (item.teacher ? " · " + escapeHtml(item.teacher) : "") + "</p>";
      }
      if (req.length) {
        html += '<ul class="polski-req">' + req.map(function (line) {
          return "<li>" + escapeHtml(line) + "</li>";
        }).join("") + "</ul>";
      }
      if (linked.length) {
        html += '<p class="polski-prep">' + escapeHtml(t("polskiPrepFrom")) + "</p>" +
          '<div class="polski-linked">' + linked.map(function (tid) {
            return '<span class="polski-t-id">' + escapeHtml(tid) + "</span>";
          }).join(" ") + "</div>";
      }
      html += "</article>";
      return html;
    }).join("") + "</div>";
  }

  function renderAssess(data, lang) {
    const t = EduMostI18n.t;
    let html = '<section class="polski-assess-block">' +
      "<h3>" + escapeHtml(t("polskiKartkowki")) + "</h3>" +
      renderKartkowki(data.kartkowki, lang) +
      "</section>";

    html += '<section class="polski-assess-block">' +
      "<h3>" + escapeHtml(t("polskiSprawdziany")) + "</h3>" +
      '<ul class="polski-assess-list">';
    (data.sprawdziany || []).forEach(function (item) {
      const title = lang === "ua" ? item.titleUa : item.titlePl;
      html += '<li class="polski-assess-item">' +
        '<span class="polski-t-id">' + escapeHtml(item.id) + "</span>" +
        '<span class="polski-assess-title">' + escapeHtml(title) + "</span>" +
        '<span class="polski-assess-note">' + escapeHtml(item.note || "—") + "</span>" +
        '<span class="topic-soon">' + escapeHtml(t("statusLabel")) +
          escapeHtml(t("openSoon")) + "</span>" +
        "</li>";
    });
    html += "</ul></section>";
    return html;
  }

  function bindTabs(root) {
    root.querySelectorAll("[data-polski-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTab(btn.getAttribute("data-polski-tab"));
        render();
      });
    });
  }

  function updateCatalog(root) {
    const wrap = root.querySelector("[data-polski-catalog]");
    const clear = root.querySelector("[data-polski-clear]");
    const data = course();
    if (!wrap || !data) return;
    wrap.innerHTML = renderCatalog(data, EduMostI18n.getLang(), pageQueryRaw);
    if (clear) clear.disabled = String(pageQueryRaw || "").trim() === "";
  }

  function bindSearch(root) {
    const form = root.querySelector(".polski-search");
    const input = root.querySelector("#polski-page-q");
    const clear = root.querySelector("[data-polski-clear]");
    if (!input) return;
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    }
    input.addEventListener("input", function () {
      pageQueryRaw = input.value;
      updateCatalog(root);
    });
    if (clear) {
      clear.addEventListener("click", function () {
        pageQueryRaw = "";
        input.value = "";
        updateCatalog(root);
        input.focus();
      });
    }
  }

  function syncTopButton() {
    const btn = document.querySelector("[data-polski-top]");
    if (!btn) return;
    const show = window.scrollY > 240;
    btn.classList.toggle("is-visible", show);
    btn.setAttribute("aria-hidden", show ? "false" : "true");
    btn.tabIndex = show ? 0 : -1;
  }

  function bindTopButton(root) {
    const btn = root.querySelector("[data-polski-top]");
    const marker = root.querySelector(".subject-header");
    if (!btn) return;
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    if (topObserver) {
      topObserver.disconnect();
      topObserver = null;
    }
    if (marker && "IntersectionObserver" in window) {
      topObserver = new IntersectionObserver(function (entries) {
        const show = !(entries[0] && entries[0].isIntersecting);
        btn.classList.toggle("is-visible", show);
        btn.setAttribute("aria-hidden", show ? "false" : "true");
        btn.tabIndex = show ? 0 : -1;
      }, { threshold: 0.05 });
      topObserver.observe(marker);
    }
    if (!topScrollBound) {
      window.addEventListener("scroll", syncTopButton, { passive: true, capture: true });
      window.addEventListener("resize", syncTopButton, { passive: true });
      topScrollBound = true;
    }
    syncTopButton();
  }

  function render() {
    const data = course();
    const root = document.getElementById("subject-root");
    const subject = window.EduMostCurriculum && window.EduMostCurriculum[SUBJECT];
    if (!data || !root || !subject) return;

    const lang = EduMostI18n.getLang();
    const t = EduMostI18n.t;
    const book = subject.book;
    const name = subject.name[lang];
    const total = data.topics.length;
    const done = doneCount(data.topics);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const tab = getTab();

    document.title = subject.icon + " " + name + " — EduMost";

    root.innerHTML =
      '<div class="polski-page">' +
        '<header class="subject-header">' +
          "<h1>" + subject.icon + " " + escapeHtml(name) + "</h1>" +
          '<p class="book-line">«' + escapeHtml(book.title) + "» · " +
            escapeHtml(book.parts) + "</p>" +
        "</header>" +
        '<dl class="book-meta">' +
          "<dt>" + t("textbook") + "</dt><dd>«" + escapeHtml(book.title) + "»</dd>" +
          "<dt>" + t("author") + "</dt><dd>" + escapeHtml(book.author) + "</dd>" +
          "<dt>" + t("publisher") + "</dt><dd>" + escapeHtml(book.publisher) + "</dd>" +
          "<dt>" + t("approval") + "</dt><dd>" + escapeHtml(book.nr) + "</dd>" +
        "</dl>" +
        '<div class="progress-box">' +
          "<div><strong>" + t("myProgress") + "</strong> — " + done + " / " + total +
            " " + t("topicsDone") + "</div>" +
          '<div class="progress-bar"><i style="width:' + pct + '%"></i></div>' +
        "</div>" +
        '<div class="polski-tabs" role="tablist">' +
          '<button type="button" role="tab" data-polski-tab="lessons"' +
            (tab === "lessons" ? ' class="is-active" aria-selected="true"' : ' aria-selected="false"') +
            ">" + escapeHtml(t("polskiTabLessons")) + "</button>" +
          '<button type="button" role="tab" data-polski-tab="assess"' +
            (tab === "assess" ? ' class="is-active" aria-selected="true"' : ' aria-selected="false"') +
            ">" + escapeHtml(t("polskiTabAssess")) + "</button>" +
        "</div>" +
        '<div class="polski-tab-panel">' +
          (tab === "assess" ? renderAssess(data, lang) : renderLessons(data, lang)) +
        "</div>" +
        '<button type="button" class="polski-top" data-polski-top aria-hidden="true" tabindex="-1">' +
          escapeHtml(t("polskiToTop")) + "</button>" +
      "</div>";

    bindTabs(root);
    bindSearch(root);
    bindTopButton(root);
  }

  document.addEventListener("DOMContentLoaded", function () {
    EduMostI18n.bindToggle();
    EduMostI18n.setLang(EduMostI18n.getLang());
    render();
    document.addEventListener("edumost:lang", render);
  });
})();
