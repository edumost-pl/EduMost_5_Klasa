(function (g) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function levelLabel(level) {
    if (!level) return "";
    const map = {
      A: "levelA", B: "levelB", C: "levelC", D: "levelD",
      challenge: "levelChallenge"
    };
    const key = map[level] || map[String(level).toUpperCase()];
    return key ? EduMostI18n.t(key) : "";
  }

  function mount(el, task, ctx) {
    if (!el || !task) return;
    const view = EduMostTaskTypes.render(task);
    const subject = (document.body && document.body.getAttribute("data-subject")) || "";
    const lvl = subject === "polski" ? "" : levelLabel(task.level);
    el.innerHTML =
      '<div class="task-card" data-task-type="' + esc(task.type) + '">' +
        (lvl ? '<p class="task-level">' + esc(lvl) + "</p>" : "") +
        '<div class="task-body">' + view.html + "</div>" +
        '<div class="task-actions">' +
          '<button type="button" class="task-check">' + esc(EduMostI18n.t("checkAnswer")) + "</button>" +
          (task.hint ? '<button type="button" class="task-hint">' + esc(EduMostI18n.t("showHint")) + "</button>" : "") +
        "</div>" +
        '<div class="task-feedback" hidden></div>' +
      "</div>";

    const feedbackBox = el.querySelector(".task-feedback");
    const checkBtn = el.querySelector(".task-check");
    const hintBtn = el.querySelector(".task-hint");

    if (hintBtn) {
      hintBtn.addEventListener("click", function () {
        feedbackBox.hidden = false;
        feedbackBox.className = "task-feedback is-hint";
        feedbackBox.textContent = EduMostFeedback.bilingual(task.hint);
      });
    }

    if (checkBtn) {
      checkBtn.addEventListener("click", function () {
        const answer = view.getAnswer(el);
        const result = EduMostFeedback.evaluate(task, answer);
        feedbackBox.hidden = false;
        feedbackBox.className = "task-feedback " +
          (result.ok === true ? "is-ok" : result.ok === false ? "is-bad" : "is-hint");
        feedbackBox.innerHTML = "<strong>" + esc(result.headline) + "</strong>" +
          (result.detail ? "<p>" + esc(result.detail) + "</p>" : "");
        if (ctx && ctx.onResult && result.ok !== null) {
          ctx.onResult(result, answer);
        }
      });
    }
  }

  function resolve(block) {
    if (block.taskId) return window.EduMostGetTask(block.taskId);
    return block.task || null;
  }

  g.EduMostTaskEngine = { mount: mount, resolve: resolve };
})(window);
