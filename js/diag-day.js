(function () {
  var FORM_KEY = "edumost-diag-2026-10-06";

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function get(iso) {
    var all = window.EduMostDiags || {};
    return all[iso] || null;
  }

  function listHtml(items) {
    return "<ul>" + items.map(function (item) {
      return "<li>" + esc(item) + "</li>";
    }).join("") + "</ul>";
  }

  function schoolHtml() {
    var schedule = window.EduMostSchedule;
    if (!schedule) return "";
    var slots = schedule.SCHEDULE[1] || [];
    var rows = slots.map(function (slot, index) {
      if (!slot) return "";
      var subject = schedule.SUBJ[slot.s];
      var name = subject ? subject.pl : slot.s;
      var room = slot.r === 0 || slot.r ? " " + slot.r : "";
      return "<li>" + (index + 1) + ". " + esc(schedule.TIMES[index] || "") + " — " + esc(name) + esc(room) + "</li>";
    }).join("");
    return "<ul class=\"school-day\">" + rows + "</ul>";
  }

  function topicHtml(topic, diag) {
    var html = '<article class="probe"><h3>' + esc(topic.title) + "</h3>";
    html += "<p><strong>Sprawdzić.</strong> " + esc(topic.check) + "</p>";
    html += '<p class="task">' + esc(topic.task) + "</p>";
    html += '<p class="say">«' + esc(topic.say) + "»</p>";
    html += "<p><strong>Nie podpowiadać.</strong> " + esc(topic.quiet) + "</p>";
    html += "<p><strong>Zapisać błąd.</strong> " + esc(topic.error) + "</p>";
    html += "<p><strong>Do powtórzenia, gdy.</strong> " + esc(topic.repeatWhen) + "</p>";
    html += '<p class="answer"><strong>Dla ciebie.</strong> ' + esc(topic.answer) + "</p>";
    html += '<p class="hint">Przy 🟡 albo 🔴: jeden fragment, nie cała lekcja. <a href="' + esc(topic.lesson) + '">' + esc(topic.lessonLabel) + "</a></p>";
    html += statusHtml(topic.id, diag);
    html += "</article>";
    return html;
  }

  function statusHtml(id, diag) {
    var radios = diag.form.statuses.map(function (status) {
      return '<label><input type="radio" name="status-' + esc(id) + '" value="' + esc(status.id) + '"> ' + esc(status.label) + "</label>";
    }).join("");
    return '<div class="status">' + radios + "</div>" +
      '<label class="note">' + esc(diag.form.note) +
      '<textarea name="note-' + esc(id) + '" rows="2"></textarea></label>';
  }

  function parentHtml(diag) {
    var html = '<header class="brief-top"><a href="plan-kirilla.html">← Październik</a>';
    html += '<a href="plan-kirilla.html?view=child#2026-10-06">Widok Kirilla</a></header>';
    html += '<p class="brief-kicker">' + esc(diag.kicker) + "</p>";
    html += '<p class="brief-date">' + esc(diag.dateLabel) + "</p>";
    html += "<h1>" + esc(diag.title) + "</h1>";
    html += '<p class="brief-banner">' + esc(diag.banner) + "</p>";
    html += '<p class="brief-lead">' + esc(diag.lead) + "</p>";

    html += '<section class="brief-section"><h2>' + esc(diag.startTitle) + "</h2>";
    html += "<p>" + esc(diag.startRu) + "</p>";
    html += '<p class="say">«' + esc(diag.startPl) + "»</p>";
    html += "<p>" + esc(diag.startGloss) + "</p></section>";

    html += '<section class="brief-section"><h2>' + esc(diag.rhythmTitle) + "</h2>";
    html += listHtml(diag.rhythm) + "</section>";

    html += '<section class="brief-section"><h2>' + esc(diag.subjectsTitle) + "</h2>";
    html += "<p>" + esc(diag.subjectsRu) + "</p>";
    html += schoolHtml();
    html += "<p>" + esc(diag.subjectsNote) + "</p>";
    html += "<p>" + esc(diag.homework) + "</p></section>";

    html += '<form id="diag-form" autocomplete="off">';
    html += '<section class="brief-section"><h2>' + esc(diag.topicsTitle) + "</h2>";
    html += "<p>" + esc(diag.topicsRu) + "</p>";
    diag.topics.forEach(function (topic) {
      html += topicHtml(topic, diag);
    });
    html += "</section>";

    html += '<section class="brief-section"><h2>' + esc(diag.readingTitle) + "</h2>";
    html += "<p>" + esc(diag.readingRu) + "</p>";
    html += listHtml(diag.reading);
    html += statusHtml("czytanie", diag);
    html += "</section>";

    html += '<section class="brief-section"><h2>' + esc(diag.form.title) + "</h2>";
    html += "<p>" + esc(diag.form.ru) + "</p>";
    diag.form.day.forEach(function (field) {
      html += '<label class="note">' + esc(field.label) +
        '<textarea name="day-' + esc(field.id) + '" rows="2"></textarea></label>';
    });
    html += '<p class="hint" id="diag-save">Zapis w tym przeglądarce, klucz edumost-diag-2026-10-06.</p>';
    html += "</section></form>";
    return html;
  }

  function childHtml(diag) {
    var html = '<header class="plan-top"><a href="index.html">← EduMost</a><a href="plan-kirilla.html?view=child">Жовтень</a></header>';
    html += "<h1>" + esc(diag.child.title) + "</h1>";
    html += '<section class="block">';
    diag.child.lines.forEach(function (line) {
      html += "<p>" + esc(line) + "</p>";
    });
    html += "</section>";
    return html;
  }

  function emptyForm(diag) {
    var data = { status: {}, note: {}, day: {} };
    diag.topics.forEach(function (topic) {
      data.status[topic.id] = "";
      data.note[topic.id] = "";
    });
    data.status.czytanie = "";
    data.note.czytanie = "";
    diag.form.day.forEach(function (field) {
      data.day[field.id] = "";
    });
    return data;
  }

  function readForm(form, diag) {
    var data = emptyForm(diag);
    Object.keys(data.status).forEach(function (id) {
      var picked = form.querySelector('input[name="status-' + id + '"]:checked');
      data.status[id] = picked ? picked.value : "";
      var note = form.querySelector('[name="note-' + id + '"]');
      data.note[id] = note ? note.value : "";
    });
    diag.form.day.forEach(function (field) {
      var area = form.querySelector('[name="day-' + field.id + '"]');
      data.day[field.id] = area ? area.value : "";
    });
    return data;
  }

  function fillForm(form, diag) {
    var raw = {};
    try {
      raw = JSON.parse(localStorage.getItem(FORM_KEY) || "{}") || {};
    } catch (error) {
      raw = {};
    }
    Object.keys(emptyForm(diag).status).forEach(function (id) {
      var value = raw.status && raw.status[id];
      if (value) {
        var input = form.querySelector('input[name="status-' + id + '"][value="' + value + '"]');
        if (input) input.checked = true;
      }
      var note = form.querySelector('[name="note-' + id + '"]');
      if (note && raw.note && typeof raw.note[id] === "string") note.value = raw.note[id];
    });
    diag.form.day.forEach(function (field) {
      var area = form.querySelector('[name="day-' + field.id + '"]');
      if (area && raw.day && typeof raw.day[field.id] === "string") area.value = raw.day[field.id];
    });
  }

  function bindForm(diag) {
    var form = document.getElementById("diag-form");
    if (!form) return;
    fillForm(form, diag);
    function save() {
      try {
        localStorage.setItem(FORM_KEY, JSON.stringify(readForm(form, diag)));
        var state = document.getElementById("diag-save");
        if (state) state.textContent = "Zapisane w tym przeglądarce.";
      } catch (error) { /* note stays on screen */ }
    }
    form.addEventListener("change", save);
    form.addEventListener("input", save);
  }

  function render(app, opts) {
    var diag = get(opts.iso);
    if (!diag || !app) return;
    document.body.classList.remove("is-mission-day");
    if (opts.child) {
      document.body.classList.remove("is-parent-brief");
      document.documentElement.lang = "uk";
      app.innerHTML = childHtml(diag);
      document.title = "6 жовтня";
      return;
    }
    document.body.classList.add("is-parent-brief");
    document.documentElement.lang = "pl";
    app.innerHTML = parentHtml(diag);
    document.title = "Plan dla mamy — 6 października";
    bindForm(diag);
  }

  window.EduMostDiagDay = { get: get, render: render };
})();
