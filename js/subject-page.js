(function () {
  const PROGRESS_KEY = "edumost-progress";

  function countTopics(subject) {
    let n = 0;
    (subject.parts || []).forEach(function (part) {
      (part.chapters || []).forEach(function (ch) {
        n += (ch.topics || []).length;
      });
    });
    return n;
  }

  function doneCount(subjectId, totalIds) {
    let data = {};
    try { data = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); } catch (e) {}
    const done = data[subjectId] || {};
    return totalIds.filter(function (id) { return done[id] === "done"; }).length;
  }

  function allTopicIds(subject) {
    const ids = [];
    (subject.parts || []).forEach(function (part) {
      (part.chapters || []).forEach(function (ch) {
        (ch.topics || []).forEach(function (t) { ids.push(t.id); });
      });
    });
    return ids;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function plName(item) {
    if (!item || !item.title) return "";
    return item.title.pl || "";
  }

  function dualTitle(item, lang) {
    const pl = escapeHtml(plName(item));
    if (lang !== "ua" || !item.title || !item.title.ua) return pl;
    return pl + '<span class="name-ua">' + escapeHtml(item.title.ua) + "</span>";
  }

  function folderLessonNum(topic) {
    const s = topic && typeof topic.lesson === "string" ? topic.lesson : "";
    const m = s.match(/^(\d+)/);
    return m ? String(Number(m[1])) : "";
  }

  function render(subjectId) {
    const subject = window.EduMostCurriculum[subjectId];
    const root = document.getElementById("subject-root");
    if (!subject || !root) return;

    const lang = EduMostI18n.getLang();
    const name = subject.name[lang];
    const book = subject.book;
    const total = countTopics(subject);
    const ids = allTopicIds(subject);
    const done = doneCount(subjectId, ids);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const t = EduMostI18n.t;

    document.title = subject.icon + " " + name + " — EduMost";

    let tocHtml = "";
    if (subject.tocStatus === "pending" || !subject.parts.length) {
      tocHtml = '<div class="empty-toc">' + t("tocPending") + "</div>";
    } else {
      subject.parts.forEach(function (part) {
        tocHtml += '<h3 class="part-title">' + dualTitle(part, lang) + "</h3>";
        part.chapters.forEach(function (ch) {
          const roman = ch.roman ? ch.roman + ". " : "";
          tocHtml += '<details class="chapter" open><summary>' + roman + dualTitle(ch, lang) + "</summary><ul class=\"topic-list\">";
          ch.topics.forEach(function (topic) {
            const page = topic.page ? '<span class="topic-page">s. ' + topic.page + "</span>" : "";
            const num = topic.num != null && topic.num !== ""
              ? String(topic.num)
              : folderLessonNum(topic);
            const numSep = num && /^\d/.test(num) ? ". " : (num ? " · " : "");
            const numHtml = num ? '<span class="topic-num">' + escapeHtml(num) + numSep + "</span>" : "";
            const titles = '<span class="topic-main"><i class="dot"></i>' +
              '<span class="topic-titles"><span class="topic-pl">' + numHtml +
              escapeHtml(plName(topic)) + "</span>" +
              (lang === "ua" && topic.title && topic.title.ua
                ? '<span class="name-ua">' + escapeHtml(topic.title.ua) + "</span>"
                : "") +
              "</span></span>";
            const meta = '<span class="topic-meta">' + page +
              '<span class="topic-soon' + (topic.lesson ? " topic-open" : "") + '">' +
              t("statusLabel") + (topic.lesson ? t("openLesson") : t("openSoon")) +
              "</span></span>";
            if (topic.lesson) {
              const href = typeof window.EduMostLessonHref === "function"
                ? window.EduMostLessonHref(subjectId, topic)
                : "../lessons/" + escapeHtml(subjectId) + "/" +
                  escapeHtml(typeof topic.lesson === "string" ? topic.lesson : topic.id) +
                  "/index.html";
              tocHtml += '<li class="has-lesson"><a class="topic-link" href="' + href + '">' +
                titles + meta + "</a></li>";
            } else {
              tocHtml += "<li>" + titles + meta + "</li>";
            }
          });
          tocHtml += "</ul></details>";
        });
      });
    }

    const pathHtml = subject.hidePath ? "" :
      '<div class="path">' +
        "<span class=\"now\">" + t("pathBook") + "</span>" +
        "<span>" + t("pathCh") + "</span>" +
        "<span>" + t("pathTopic") + "</span>" +
        "<span>" + t("pathLearn") + "</span>" +
        "<span>" + t("pathPractice") + "</span>" +
        "<span>" + t("pathCheck") + "</span>" +
        "<span>" + t("pathReview") + "</span>" +
      "</div>";

    root.innerHTML =
      '<header class="subject-header">' +
        "<h1>" + subject.icon + " " + name + "</h1>" +
        '<p class="book-line">«' + escapeHtml(book.title) + "» · " + escapeHtml(book.parts) + "</p>" +
      "</header>" +
      '<dl class="book-meta">' +
        "<dt>" + t("textbook") + "</dt><dd>«" + escapeHtml(book.title) + "»</dd>" +
        "<dt>" + t("author") + "</dt><dd>" + escapeHtml(book.author) + "</dd>" +
        "<dt>" + t("publisher") + "</dt><dd>" + escapeHtml(book.publisher) + "</dd>" +
        "<dt>" + t("approval") + "</dt><dd>" + escapeHtml(book.nr) + "</dd>" +
      "</dl>" +
      pathHtml +
      '<div class="progress-box">' +
        "<div><strong>" + t("myProgress") + "</strong> — " + done + " / " + total + " " + t("topicsDone") + "</div>" +
        '<div class="progress-bar"><i style="width:' + pct + '%"></i></div>' +
      "</div>" +
      '<h2 class="section-label" style="margin-top:0">' + t("byTextbook") + "</h2>" +
      tocHtml;
  }

  window.EduMostSubjectPage = { render: render };
})();
