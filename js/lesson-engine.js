(function (g) {
  function flatten(subject) {
    const list = [];
    (subject.parts || []).forEach(function (part) {
      (part.chapters || []).forEach(function (ch) {
        (ch.topics || []).forEach(function (topic) {
          list.push({ part: part, chapter: ch, topic: topic });
        });
      });
    });
    return list;
  }

  function contextFromCurriculum(subjectId, topicId) {
    const subject = g.EduMostCurriculum && g.EduMostCurriculum[subjectId];
    if (!subject) return null;
    const list = flatten(subject);
    const hit = list.find(function (item) { return item.topic.id === topicId; });
    if (!hit) return { subject: subject, part: null, chapter: null, topic: { id: topicId, title: { pl: topicId } } };
    return { subject: subject, part: hit.part, chapter: hit.chapter, topic: hit.topic };
  }

  const state = {
    subjectId: "",
    topicId: "",
    blocks: [],
    index: 0,
    visited: [0]
  };

  function blocks() {
    const content = g.EduMostLessonContent || {};
    return content.blocks || [];
  }

  function header() {
    const ctx = contextFromCurriculum(state.subjectId, state.topicId);
    if (!ctx) return;
    const lang = EduMostI18n.getLang();
    const back = document.getElementById("back-subject");
    if (back) {
      back.textContent = "← " + (ctx.subject.name[lang] || ctx.subject.name.pl);
      back.setAttribute("href", "../../../subjects/" + state.subjectId + ".html");
    }
    const roman = ctx.chapter && ctx.chapter.roman ? ctx.chapter.roman + ". " : "";
    const chPl = ctx.chapter ? ctx.chapter.title.pl : "";
    const chUa = ctx.chapter && lang === "ua" ? ctx.chapter.title.ua : "";
    const titlePl = ctx.topic.title.pl;
    const titleUa = lang === "ua" ? ctx.topic.title.ua : "";
    const page = ctx.topic.page ? " · s. " + ctx.topic.page : "";
    const topicNum = ctx.topic.num != null && ctx.topic.num !== "" ? String(ctx.topic.num) : "";
    const folder = ctx.topic.lesson ? String(ctx.topic.lesson) : "";
    const nMatch = folder.match(/^(\d+)/);
    let lessonBit = "";
    let titlePrefix = "";
    if (topicNum) {
      titlePrefix = /^\d/.test(topicNum) ? topicNum + ". " : topicNum + " · ";
      lessonBit = /^\d/.test(topicNum)
        ? EduMostI18n.t("lessonLabel") + " " + topicNum + " · "
        : topicNum + " · ";
    } else if (nMatch) {
      const lessonNo = String(Number(nMatch[1]));
      titlePrefix = lessonNo + ". ";
      lessonBit = EduMostI18n.t("lessonLabel") + " " + lessonNo + " · ";
    }
    document.title = titlePrefix + titlePl + " — EduMost";

    const el = document.getElementById("lesson-identity");
    if (!el) return;
    el.innerHTML =
      '<p class="lesson-kicker">' + roman + chPl +
        (chUa ? '<span class="name-ua">' + chUa + "</span>" : "") + "</p>" +
      "<h1>" + titlePl + (titleUa ? '<span class="name-ua">' + titleUa + "</span>" : "") + "</h1>" +
      '<p class="lesson-book">' + lessonBit + "«" + ctx.subject.book.title + "»" + page + "</p>";
  }

  function show() {
    const list = blocks();
    const mount = document.getElementById("lesson-stage");
    const progress = document.getElementById("lesson-progress");
    const pager = document.getElementById("lesson-nav");
    if (!list.length || !mount) {
      if (mount) mount.innerHTML = '<p class="block-empty">' + EduMostI18n.t("placeholder") + "</p>";
      return;
    }
    if (state.index < 0) state.index = 0;
    if (state.index > list.length - 1) state.index = list.length - 1;
    EduMostProgress.visit(state.subjectId, state.topicId, state.index);
    const saved = EduMostProgress.get(state.subjectId, state.topicId);
    state.visited = saved.visited;
    header();
    EduMostLessonRenderer.render(mount, list[state.index], {
      onTask: function (task, result) {
        EduMostProgress.recordTask(state.subjectId, state.topicId, task.id || ("b" + state.index), result);
      }
    });
    const content = g.EduMostLessonContent || {};
    const lessonNo = lessonNumber();
    const block = list[state.index] || {};
    EduMostLessonNav.render(progress, pager, {
      total: list.length,
      current: state.index,
      visited: state.visited,
      timeline: (block.type === "summary" || block.type === "review") ? null : resolveTimeline(content, lessonNo),
      timelineYear: block.timelineYear,
      timelineId: block.timelineId,
      timelineLesson: lessonNo
    });
  }

  function lessonNumber() {
    const ctx = contextFromCurriculum(state.subjectId, state.topicId);
    if (ctx && ctx.topic && ctx.topic.num != null && ctx.topic.num !== "") {
      const n = parseInt(String(ctx.topic.num), 10);
      return Number.isFinite(n) ? n : 0;
    }
    const folder = ctx && ctx.topic && ctx.topic.lesson ? String(ctx.topic.lesson) : "";
    const m = folder.match(/^(\d+)/);
    return m ? Number(m[1]) : 0;
  }

  function resolveTimeline(content, n) {
    if (content && content.timeline) return content.timeline;
    if (state.subjectId === "historia" && g.EduMostHistoriaAxis && n) {
      return g.EduMostHistoriaAxis.forLesson(n);
    }
    return null;
  }

  function go(i) {
    const list = blocks();
    if (i < 0 || i >= list.length) return;
    if (state.visited.indexOf(i) < 0 && i !== state.index + 1) return;
    state.index = i;
    show();
  }

  function next() { go(state.index + 1); }
  function prev() { go(state.index - 1); }

  function start() {
    const meta = g.EduMostLessonMeta || {};
    const body = document.body;
    state.subjectId = meta.subject || body.getAttribute("data-subject") || "";
    state.topicId = meta.topicId || body.getAttribute("data-topic") || "";
    state.blocks = blocks();
    const saved = EduMostProgress.get(state.subjectId, state.topicId);
    state.index = saved.index || 0;
    state.visited = saved.visited || [0];
    if (state.visited.indexOf(0) < 0) state.visited.push(0);

    const progress = document.getElementById("lesson-progress");
    const pager = document.getElementById("lesson-nav");
    EduMostLessonNav.bind(progress, pager, { go: go, prev: prev, next: next });
    show();
  }

  function init() {
    EduMostI18n.bindToggle();
    EduMostI18n.setLang(EduMostI18n.getLang());
    start();
    document.addEventListener("edumost:lang", show);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  g.EduMostLessonEngine = { start: start, show: show, go: go, next: next, prev: prev };
})(window);
