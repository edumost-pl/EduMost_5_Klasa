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
    visited: [0],
    mode: "learn",
    moduleId: ""
  };

  function lessonContent() {
    return g.EduMostLessonContent || {};
  }

  function hasModules() {
    const mods = lessonContent().modules;
    return !!(mods && mods.length);
  }

  function viewKey() {
    return (state.mode || "learn") + "/" + (state.moduleId || "");
  }

  function blocks() {
    const all = lessonContent().blocks || [];
    if (!hasModules()) return all;
    return all.filter(function (block) {
      const track = block.track || "learn";
      if (state.mode === "review") return track === "review" || track === "both";
      if (track === "review") return false;
      return !block.module || block.module === state.moduleId;
    });
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
    const chRu = ctx.chapter && lang === "ru" ? (ctx.chapter.title.ru || "") : "";
    const titlePl = ctx.topic.title.pl;
    const titleUa = lang === "ua" ? ctx.topic.title.ua : "";
    const titleRu = lang === "ru" ? (ctx.topic.title.ru || "") : "";
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
        (chUa ? '<span class="name-ua">' + chUa + "</span>" : "") +
        (chRu ? '<span class="name-ru">' + chRu + "</span>" : "") + "</p>" +
      "<h1>" + titlePl +
        (titleUa ? '<span class="name-ua">' + titleUa + "</span>" : "") +
        (titleRu ? '<span class="name-ru">' + titleRu + "</span>" : "") + "</h1>" +
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
    if (hasModules()) {
      EduMostProgress.update(state.subjectId, state.topicId, function (bag) {
        bag.views = bag.views || {};
        const cur = bag.views[viewKey()] || { index: 0, visited: [0] };
        if (!Array.isArray(cur.visited)) cur.visited = [0];
        if (cur.visited.indexOf(state.index) < 0) cur.visited.push(state.index);
        cur.index = state.index;
        bag.views[viewKey()] = cur;
        bag.mode = state.mode;
        bag.moduleId = state.moduleId;
        state.visited = cur.visited.slice();
      });
      if (document.body) document.body.setAttribute("data-lesson-mode", state.mode);
    } else {
      EduMostProgress.visit(state.subjectId, state.topicId, state.index);
      const saved = EduMostProgress.get(state.subjectId, state.topicId);
      state.visited = saved.visited;
      if (document.body) document.body.removeAttribute("data-lesson-mode");
    }
    header();
    if (introPending()) {
      renderIntro(mount);
      EduMostLessonNav.render(progress, pager, {
        total: list.length,
        current: state.index,
        visited: state.visited,
        modules: hasModules() ? lessonContent().modules : null,
        mode: state.mode,
        moduleId: state.moduleId
      });
      if (pager) pager.querySelectorAll(".prev, .next").forEach(function (btn) { btn.disabled = true; });
      if (progress) progress.querySelectorAll("[data-go]").forEach(function (btn) { btn.disabled = true; });
      return;
    }
    EduMostLessonRenderer.render(mount, list[state.index], {
      onTask: function (task, result) {
        EduMostProgress.recordTask(state.subjectId, state.topicId, task.id || ("b" + state.index), result);
      }
    });
    const content = lessonContent();
    const lessonNo = lessonNumber();
    const block = list[state.index] || {};
    EduMostLessonNav.render(progress, pager, {
      total: list.length,
      current: state.index,
      visited: state.visited,
      timeline: (block.type === "summary" || block.type === "review") ? null : resolveTimeline(content, lessonNo),
      timelineYear: block.timelineYear,
      timelineId: block.timelineId,
      timelineLesson: lessonNo,
      modules: hasModules() ? content.modules : null,
      mode: state.mode,
      moduleId: state.moduleId
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

  function pickText(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    const lang = EduMostI18n.getLang();
    if (lang === "ua") return obj.ua || obj.pl || "";
    if (lang === "ru") return obj.ru || obj.pl || "";
    return obj.pl || "";
  }

  function introPending() {
    const intro = lessonContent().intro;
    if (!intro || state.introSeen) return false;
    if (state.index !== 0) return false;
    if (state.mode === "review") return true;
    const mods = lessonContent().modules;
    if (mods && mods.length) return state.moduleId === mods[0].id;
    return true;
  }

  function renderIntro(mount) {
    const intro = lessonContent().intro;
    const review = state.mode === "review";
    const paras = review ? [pickText(intro.short)] : (intro.text[EduMostI18n.getLang()] || intro.text.pl || []);
    const lines = Array.isArray(paras) ? paras : [paras];
    const alt = pickText(intro.alt);
    const wrap = document.createElement("article");
    wrap.className = "lesson-intro-screen" + (review ? " is-short" : "");
    wrap.innerHTML =
      (intro.image ? '<img src="' + intro.image + '" alt="' + alt.replace(/"/g, "&quot;") + '">' : "") +
      '<div class="lesson-intro-body">' +
        "<h2>" + pickText(intro.title).replace(/</g, "&lt;") + "</h2>" +
        lines.map(function (line) {
          return "<p>" + String(line).replace(/</g, "&lt;") + "</p>";
        }).join("") +
        (review ? "" : '<div class="lesson-intro-mission"><strong>' +
          pickText(intro.missionLabel).replace(/</g, "&lt;") + "</strong><p>" +
          pickText(intro.mission).replace(/</g, "&lt;") + "</p></div>") +
        "<p>" + pickText(intro.ready).replace(/</g, "&lt;") + "</p>" +
        '<button type="button" class="lesson-intro-go">' +
          pickText(intro.button).replace(/</g, "&lt;") + "</button>" +
      "</div>";
    const btn = wrap.querySelector("button");
    btn.addEventListener("click", function () {
      EduMostProgress.update(state.subjectId, state.topicId, function (bag) {
        bag.introSeen = true;
      });
      state.introSeen = true;
      show();
    });
    mount.innerHTML = "";
    mount.appendChild(wrap);
  }

  function go(i) {
    const list = blocks();
    if (i < 0 || i >= list.length) return;
    if (introPending()) return;
    if (state.visited.indexOf(i) < 0 && i !== state.index + 1) return;
    state.index = i;
    show();
  }

  function next() { go(state.index + 1); }
  function prev() { go(state.index - 1); }

  function openView(mode, moduleId) {
    if (mode) state.mode = mode;
    if (moduleId) state.moduleId = moduleId;
    const saved = EduMostProgress.get(state.subjectId, state.topicId);
    const slot = (saved.views && saved.views[viewKey()]) || { index: 0, visited: [0] };
    state.index = slot.index || 0;
    state.visited = (slot.visited && slot.visited.slice()) || [0];
    show();
  }

  function start() {
    const meta = g.EduMostLessonMeta || {};
    const body = document.body;
    state.subjectId = meta.subject || body.getAttribute("data-subject") || "";
    state.topicId = meta.topicId || body.getAttribute("data-topic") || "";
    const saved = EduMostProgress.get(state.subjectId, state.topicId);
    if (hasModules()) {
      const mods = lessonContent().modules;
      state.mode = saved.mode === "review" ? "review" : "learn";
      state.moduleId = saved.moduleId || mods[0].id;
      if (!mods.some(function (m) { return m.id === state.moduleId; })) state.moduleId = mods[0].id;
      const slot = (saved.views && saved.views[viewKey()]) || { index: 0, visited: [0] };
      state.index = slot.index || 0;
      state.visited = slot.visited || [0];
      state.introSeen = !!saved.introSeen;
    } else {
      state.introSeen = !!saved.introSeen;
      state.mode = "learn";
      state.moduleId = "";
      state.index = saved.index || 0;
      state.visited = saved.visited || [0];
    }
    if (state.visited.indexOf(0) < 0) state.visited.push(0);

    const progress = document.getElementById("lesson-progress");
    const pager = document.getElementById("lesson-nav");
    EduMostLessonNav.bind(progress, pager, {
      go: go,
      prev: prev,
      next: next,
      setMode: function (mode) { openView(mode, state.moduleId); },
      setModule: function (id) { openView("learn", id); }
    });
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
