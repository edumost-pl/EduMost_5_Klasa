(function () {
  var FORM_KEY = "edumost-parent-plan-2026-10-05";

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function get(iso) {
    var all = window.EduMostMissions || {};
    return all[iso] || null;
  }

  function missionHref(mission) {
    if (!window.EduMostDopZadania || !mission.openPath) return "";
    return window.EduMostDopZadania.taskUrl(mission.openPath, "pl");
  }

  function buttonHtml(mission, label) {
    var href = missionHref(mission);
    if (!href) return "";
    return '<p class="brief-open"><a class="brief-go" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(label) + "</a></p>";
  }

  function listHtml(items) {
    return "<ul>" + items.map(function (item) {
      return "<li>" + esc(item) + "</li>";
    }).join("") + "</ul>";
  }

  function parentHtml(mission) {
    var html = '<header class="brief-top"><a href="plan-kirilla.html">← Październik</a></header>';
    html += '<p class="brief-kicker">👩‍👦 ' + esc(mission.kicker) + "</p>";
    html += '<p class="brief-date">📅 ' + esc(mission.dateLabel) + "</p>";
    html += "<h1>🔐 " + esc(mission.title) + "</h1>";
    html += '<p class="brief-banner">' + esc(mission.banner) + "</p>";
    html += '<p class="brief-lead">' + esc(mission.leadPl) + "</p>";
    html += "<p>" + esc(mission.leadRu) + "</p>";

    html += '<section class="brief-section"><h2>' + esc(mission.solution.title) + "</h2>";
    html += "<p>" + esc(mission.solution.ru) + "</p>" + listHtml(mission.solution.lines) + "</section>";

    html += '<section class="brief-section"><h2>' + esc(mission.goal.title) + "</h2>";
    html += "<p>" + esc(mission.goal.ru) + "</p>";
    mission.goal.groups.forEach(function (group) {
      html += "<h3>" + esc(group.name) + "</h3>" + listHtml(group.items);
    });
    html += "</section>";

    html += '<section class="brief-section"><h2>' + esc(mission.start.title) + "</h2>";
    html += "<p>" + esc(mission.start.ru) + "</p>";
    mission.start.items.forEach(function (item) {
      html += '<article class="script"><h3>' + esc(item.mood) + "</h3>";
      if (item.skip) html += '<p class="skip">Ten start odłóż: «' + esc(item.skip) + "»</p>";
      html += '<p class="say">«' + esc(item.pl) + "»</p>";
      if (item.gloss) html += "<p>" + esc(item.gloss) + "</p>";
      html += "</article>";
    });
    html += "</section>";

    html += '<section class="brief-section"><h2>' + esc(mission.coach.title) + "</h2>";
    html += "<p>" + esc(mission.coach.ru) + "</p>";
    mission.coach.items.forEach(function (item) {
      html += "<h3>" + esc(item.name) + "</h3>";
      html += '<p class="say">«' + esc(item.say) + "»</p>";
      html += "<p><strong>Pytania.</strong> " + esc(item.ask) + "</p>";
      html += "<p><strong>Pokaż.</strong> " + esc(item.show) + "</p>";
      html += "<p><strong>Pochwal.</strong> " + esc(item.praise) + "</p>";
      html += "<p><strong>Zostaw jemu.</strong> " + esc(item.quiet) + "</p>";
    });
    html += "</section>";

    mission.subjects.forEach(function (subject) {
      html += '<section class="brief-section"><h2>' + esc(subject.title) + "</h2>";
      html += "<p>" + esc(subject.ru) + "</p>" + listHtml(subject.checks);
      subject.phrases.forEach(function (phrase) {
        html += '<p class="say">«' + esc(phrase) + "»</p>";
      });
      if (subject.links) {
        html += "<ul>" + subject.links.map(function (link) {
          return '<li><a href="' + esc(link.href) + '" target="_blank" rel="noopener">' + esc(link.label) + "</a></li>";
        }).join("") + "</ul>";
      }
      if (subject.note) html += "<p>" + esc(subject.note) + "</p>";
      if (subject.button) html += buttonHtml(mission, subject.button);
      html += "</section>";
    });

    mission.asides.forEach(function (aside) {
      html += '<section class="brief-section"><h2>' + esc(aside.title) + "</h2><p>" + esc(aside.ru) + "</p>";
      if (aside.say) html += '<p class="say">«' + esc(aside.say) + "»</p>";
      html += "</section>";
    });

    html += '<section class="brief-section"><h2>' + esc(mission.flow.title) + "</h2>";
    html += "<p>" + esc(mission.flow.ru) + "</p><ol class=\"flow\">";
    mission.flow.items.forEach(function (item) {
      html += "<li><strong>" + esc(item.time) + ".</strong> " + esc(item.text) + "</li>";
    });
    html += "</ol></section>";

    html += '<section class="brief-section"><h2>' + esc(mission.after.title) + "</h2>";
    html += "<p>" + esc(mission.after.ru) + "</p><form id=\"parent-form\">";
    mission.after.subjects.forEach(function (subject) {
      html += '<fieldset><legend>' + esc(subject.name) + "</legend><div class=\"status\">";
      mission.after.status.forEach(function (status) {
        html += '<label><input type="radio" name="status-' + subject.id + '" value="' + status.id + '"> ' + esc(status.label) + "</label>";
      });
      html += "</div>";
      mission.after.questions.forEach(function (question) {
        html += '<label class="note">' + esc(question.label) + '<textarea name="' + question.id + "-" + subject.id + '" rows="2"></textarea></label>';
      });
      html += "</fieldset>";
    });
    html += "</form></section>";
    html += '<section class="brief-section"><h2>Dop_zadania</h2>';
    html += "<p>Кнопка открывает миссию Кирилла. Порядок внутри неё: математика и Znajdź błąd, потом польский, английский, история, сборка сообщения.</p>";
    html += buttonHtml(mission, "🎮 Otwórz misję dla Kirilla");
    html += "</section>";
    return html;
  }

  function childHtml(mission) {
    return (
      '<header class="brief-top"><a href="plan-kirilla.html?view=child">← Жовтень</a></header>' +
      "<h1>5 жовтня</h1><p>" + esc(mission.childNote) + "</p>"
    );
  }

  function emptyForm(mission) {
    var data = { status: {}, text: {} };
    mission.after.subjects.forEach(function (subject) {
      data.status[subject.id] = "";
      data.text[subject.id] = {};
      mission.after.questions.forEach(function (question) {
        data.text[subject.id][question.id] = "";
      });
    });
    return data;
  }

  function loadForm(mission) {
    var data = emptyForm(mission);
    try {
      var raw = JSON.parse(localStorage.getItem(FORM_KEY) || "null");
      if (!raw || typeof raw !== "object") return data;
      mission.after.subjects.forEach(function (subject) {
        if (raw.status && raw.status[subject.id]) data.status[subject.id] = raw.status[subject.id];
        mission.after.questions.forEach(function (question) {
          var value = raw.text && raw.text[subject.id] && raw.text[subject.id][question.id];
          if (typeof value === "string") data.text[subject.id][question.id] = value;
        });
      });
    } catch (error) {
      return emptyForm(mission);
    }
    return data;
  }

  function readForm(form, mission) {
    var data = emptyForm(mission);
    mission.after.subjects.forEach(function (subject) {
      var picked = form.querySelector('input[name="status-' + subject.id + '"]:checked');
      data.status[subject.id] = picked ? picked.value : "";
      mission.after.questions.forEach(function (question) {
        var field = form.querySelector('[name="' + question.id + "-" + subject.id + '"]');
        data.text[subject.id][question.id] = field ? field.value : "";
      });
    });
    return data;
  }

  function fillForm(form, mission) {
    var data = loadForm(mission);
    mission.after.subjects.forEach(function (subject) {
      if (data.status[subject.id]) {
        var input = form.querySelector('input[name="status-' + subject.id + '"][value="' + data.status[subject.id] + '"]');
        if (input) input.checked = true;
      }
      mission.after.questions.forEach(function (question) {
        var field = form.querySelector('[name="' + question.id + "-" + subject.id + '"]');
        if (field) field.value = data.text[subject.id][question.id];
      });
    });
  }

  function bindForm(mission) {
    var form = document.getElementById("parent-form");
    if (!form) return;
    fillForm(form, mission);
    function save() {
      try {
        localStorage.setItem(FORM_KEY, JSON.stringify(readForm(form, mission)));
      } catch (error) { /* note stays on screen */ }
    }
    form.addEventListener("change", save);
    form.addEventListener("input", save);
  }

  function render(app, opts) {
    var mission = get(opts.iso);
    if (!mission || !app) return;
    document.body.classList.remove("is-mission-day");
    if (opts.child) {
      document.body.classList.remove("is-parent-brief");
      document.documentElement.lang = "uk";
      app.innerHTML = childHtml(mission);
      document.title = "5 жовтня";
      return;
    }
    document.body.classList.add("is-parent-brief");
    document.documentElement.lang = "pl";
    app.innerHTML = parentHtml(mission);
    document.title = "Plan dla mamy — 5 października";
    bindForm(mission);
  }

  window.EduMostMissionDay = { get: get, render: render };
})();