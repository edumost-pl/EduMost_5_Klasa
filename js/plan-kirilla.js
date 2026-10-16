(function () {
  var REPORT_KEY = "edumost-plan-kirilla-reports";
  var MISSING = "DO UZUPEŁNIENIA";
  var MONTH = "2026-10";
  var LESSON_ROOT = {
    matematyka: "lessons/matematyka/",
    "j.polski": "lessons/polski/",
    "j.ang": "lessons/angielski/"
  };
  var LESSON_LABEL = {
    "01-dzialania-pamieciowe": "Działania pamięciowe",
    "02-potegowanie": "Potęgowanie",
    "03-kolejnosc-wykonywania-dzialan": "Kolejność wykonywania działań",
    "04-cyfry-rzymskie": "Cyfry rzymskie",
    "06-dodawanie-i-odejmowanie-pisemne": "Dodawanie i odejmowanie pisemne",
    "07-mnozenie-pisemne": "Mnożenie pisemne",
    "08-dzielenie-i-podzielnosc": "Dzielenie i podzielność",
    "09-liczby-pierwsze-i-zlozone": "Liczby pierwsze i liczby złożone",
    "10-dzielenie-pisemne": "Dzielenie pisemne"
  };
  var STATUS_LABEL = {
    normal: "звичайний",
    weekend: "вихідний",
    sprawdzian: "sprawdzian",
    kartkowka: "kartkówka",
    "sprawdzian-kartkowka": "sprawdzian · kartkówka",
    prep: "підготовка",
    heavy: "багато домашки",
    light: "легкий день",
    projekt: "проєкт"
  };
  var WEEKDAYS = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"];
  var REPORT_FIELDS = [
    { name: "homeworkDone", label: "Домашка", options: [["", "не позначено"], ["yes", "так"], ["partly", "частково"], ["no", "ні"]] },
    { name: "missionDone", label: "Місія", options: [["", "не позначено"], ["yes", "так"], ["partly", "частково"], ["no", "ні"], ["skipped", "пропущено"]] },
    { name: "neededHelp", label: "Потрібна була допомога", options: [["", "не позначено"], ["yes", "так"], ["no", "ні"]] },
    { name: "workedIndependently", label: "Працював самостійно", options: [["", "не позначено"], ["yes", "так"], ["partly", "частково"], ["no", "ні"]] },
    { name: "mood", label: "Настрій", options: [["", "не позначено"], ["calm", "спокійно"], ["hard-start", "важко було почати"], ["engaged", "був у справі"], ["refused", "відмовився"]] },
    { name: "difficulty", label: "Складність", options: [["", "не позначено"], ["easy", "легко"], ["ok", "нормально"], ["hard", "важко"]] },
    { name: "interest", label: "Інтерес", options: [["", "не позначено"], ["low", "низький"], ["some", "був"], ["high", "високий"]] }
  ];

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseISO(iso) {
    var parts = iso.split("-");
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  }

  function isoOf(date) {
    var m = String(date.getMonth() + 1);
    var d = String(date.getDate());
    if (m.length < 2) m = "0" + m;
    if (d.length < 2) d = "0" + d;
    return date.getFullYear() + "-" + m + "-" + d;
  }

  function todayIso() {
    return isoOf(new Date());
  }

  function daysBetween(fromIso, toIso) {
    var ms = parseISO(toIso).getTime() - parseISO(fromIso).getTime();
    return Math.round(ms / 86400000);
  }

  function phaseFor(diff) {
    if (diff === 7) return "scope";
    if (diff === 5) return "recall";
    if (diff === 3) return "mixed";
    if (diff === 2) return "hard";
    if (diff === 1) return "calm";
    if (diff === 0) return "exam";
    if (diff === -1) return "after";
    return "";
  }

  function phaseText(phase) {
    if (phase === "scope") return "За 7 днів: знайомство з обсягом, мала порція.";
    if (phase === "recall") return "За 5 днів: коротке нагадування.";
    if (phase === "mixed") return "За 3 дні: змішані завдання.";
    if (phase === "hard") return "За 2 дні: важкі місця.";
    if (phase === "calm") return "За 1 день: спокійне повторення.";
    if (phase === "exam") return "День роботи: без додаткового навчання.";
    if (phase === "after") return "День після. Три питання дитині: «Что было легко?», «Что было трудно?», «Что стоит запомнить?»";
    return "Сьогодні без автоматичної підготовки.";
  }

  function filled(value) {
    if (typeof value !== "string") return false;
    var text = value.trim();
    return text !== "" && text !== MISSING;
  }

  function missingHtml() {
    return '<p class="missing">' + MISSING + "</p>";
  }

  function textHtml(value) {
    if (!filled(value)) return missingHtml();
    return "<p>" + esc(value.trim()) + "</p>";
  }

  function isChildView() {
    return new URLSearchParams(location.search).get("view") === "child";
  }

  function selectedIso() {
    var raw = (location.hash || "").replace(/^#/, "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return "";
    var date = parseISO(raw);
    if (isNaN(date.getTime())) return "";
    if (isoOf(date) !== raw) return "";
    return raw;
  }

  function dayRecord(iso) {
    var month = window.EduMostKirillMonth;
    var days = month && month.days ? month.days : [];
    var i;
    for (i = 0; i < days.length; i += 1) {
      if (days[i].date === iso) return days[i];
    }
    return null;
  }

  function modeFor(iso) {
    var profile = window.EduMostKirillProfile || {};
    var schedule = profile.parentSchedule || {};
    var day = dayRecord(iso);
    if (day && (day.support === "parentWorking" || day.support === "parentPresent")) return day.support;
    if (schedule.enabled === false) return "parentPresent";
    var month = iso.slice(0, 7);
    var list = schedule.workDays && schedule.workDays[month];
    if (Object.prototype.toString.call(list) === "[object Array]" && list.indexOf(iso) !== -1) {
      return "parentWorking";
    }
    return "parentPresent";
  }

  function testsOn(iso) {
    var all = window.EduMostKirillTests || [];
    return all.filter(function (test) { return test.date === iso; });
  }

  function phasesOn(iso) {
    var all = window.EduMostKirillTests || [];
    var out = [];
    all.forEach(function (test) {
      var phase = phaseFor(daysBetween(iso, test.date));
      if (phase) out.push({ test: test, phase: phase });
    });
    return out;
  }

  function statusOf(iso) {
    var day = dayRecord(iso);
    if (day && day.status) return day.status;
    var today = testsOn(iso);
    var hasExam = today.some(function (test) { return test.kind === "sprawdzian"; });
    var hasQuiz = today.some(function (test) { return test.kind === "kartkowka"; });
    if (hasExam && hasQuiz) return "sprawdzian-kartkowka";
    if (hasExam) return "sprawdzian";
    if (hasQuiz) return "kartkowka";
    var prep = phasesOn(iso).some(function (item) {
      return item.phase === "scope" || item.phase === "recall" || item.phase === "mixed" || item.phase === "hard" || item.phase === "calm";
    });
    if (prep) return "prep";
    var dow = parseISO(iso).getDay();
    if (dow === 0 || dow === 6) return "weekend";
    if (day && day.load === "heavy") return "heavy";
    if (day && day.load === "light") return "light";
    return "normal";
  }

  function budgetInfo(iso) {
    var day = dayRecord(iso);
    return {
      mode: modeFor(iso),
      load: day && day.load,
      onTest: testsOn(iso).length > 0
    };
  }

  function parentTimeText(iso) {
    var info = budgetInfo(iso);
    if (info.onTest) return "День sprawdzianu або kartkówki: без додаткового навантаження.";
    if (info.mode === "parentWorking" && info.load === "heavy") return "parentWorking і багато домашки: лише шкільна домашка.";
    if (info.mode === "parentWorking") return "parentWorking: максимум 10–15 хвилин, одна місія.";
    if (info.load === "heavy") return "Багато шкільної домашки: 5–15 хвилин додатково.";
    return "Звичайний день, parentPresent: 20–40 хвилин додаткової активності.";
  }

  function childTimeText(iso) {
    var info = budgetInfo(iso);
    if (info.onTest) return "Сьогодні шкільна перевірка. Додаткової місії немає.";
    if (info.mode === "parentWorking" && info.load === "heavy") return "Сьогодні лише шкільна домашка.";
    if (info.mode === "parentWorking") return "Одна коротка місія, близько 10–15 хвилин. Потім вільний час.";
    if (info.load === "heavy") return "Після домашки — коротко, 5–15 хвилин.";
    return "Після школи близько 20–40 хвилин.";
  }

  function lessonsFor(iso) {
    var schedule = window.EduMostSchedule;
    if (!schedule) return null;
    var dow = parseISO(iso).getDay();
    if (dow === 0 || dow === 6) return [];
    var slots = schedule.SCHEDULE[dow - 1] || [];
    var out = [];
    slots.forEach(function (slot, index) {
      if (!slot) return;
      var subject = schedule.SUBJ[slot.s];
      var room = slot.r === 0 || slot.r ? String(slot.r) : "";
      out.push({
        nr: index + 1,
        time: schedule.TIMES[index] || "",
        id: slot.s,
        name: subject ? subject.pl : slot.s,
        room: room
      });
    });
    return out;
  }

  function topicText(day, subjectId) {
    if (!day || !day.schoolTopics || typeof day.schoolTopics !== "object" || day.schoolTopics instanceof Array) {
      return MISSING;
    }
    var value = day.schoolTopics[subjectId];
    if (filled(value)) return value.trim();
    return MISSING;
  }

  function stepsHtml(steps) {
    if (!steps || !steps.length) return missingHtml();
    return "<ol>" + steps.map(function (step) {
      return "<li>" + esc(step) + "</li>";
    }).join("") + "</ol>";
  }

  function homeworkHtml(day) {
    var list = day && day.homework;
    if (!list || !list.length) return missingHtml();
    return "<ul>" + list.map(function (item) {
      var text = typeof item === "string" ? item : (item && item.text) || MISSING;
      return "<li>" + esc(text) + "</li>";
    }).join("") + "</ul>";
  }

  function block(title, body, extraClass) {
    return '<section class="block' + (extraClass ? " " + extraClass : "") + '"><h2>' + esc(title) + "</h2>" + body + "</section>";
  }

  function formatHeading(iso) {
    var date = parseISO(iso);
    var dd = String(date.getDate());
    var mm = String(date.getMonth() + 1);
    if (dd.length < 2) dd = "0" + dd;
    if (mm.length < 2) mm = "0" + mm;
    return dd + "." + mm + "." + date.getFullYear();
  }

  function formatLong(iso) {
    return WEEKDAYS[parseISO(iso).getDay()] + ", " + formatHeading(iso);
  }

  function monthHref() {
    return "plan-kirilla.html" + (isChildView() ? "?view=child" : "");
  }

  function fileHints() {
    return '<footer class="files"><p>Робочі дати: <code>data/plan-kirilla/profile.js</code> → <code>parentSchedule.workDays["2026-10"]</code></p><p>Теми з Librus і домашка: <code>data/plan-kirilla/2026-10.js</code></p><p>Нова kartkówka або sprawdzian: <code>data/plan-kirilla/tests.js</code></p></footer>';
  }

  function octoberCells() {
    var first = parseISO(MONTH + "-01");
    var pad = (first.getDay() + 6) % 7;
    var count = new Date(2026, 10, 0).getDate();
    var cells = [];
    var i;
    for (i = 0; i < pad; i += 1) cells.push("");
    for (i = 1; i <= count; i += 1) {
      var day = String(i);
      if (day.length < 2) day = "0" + day;
      cells.push(MONTH + "-" + day);
    }
    while (cells.length % 7) cells.push("");
    return cells;
  }

  function renderMonth(child) {
    var today = todayIso();
    var names = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    var html = '<header class="plan-top"><a href="index.html">← EduMost</a></header>';
    html += "<h1>" + (child ? "Жовтень 2026" : "Plan Kirilla") + "</h1>";
    html += '<p class="plan-lead">' + (child
      ? "Обери день."
      : "Жовтень 2026 · для батьків. Усі дні зараз parentPresent: список робочих дат порожній.") + "</p>";
    html += '<div class="cal-head">' + names.map(function (name) {
      return "<span>" + name + "</span>";
    }).join("") + "</div><div class=\"cal\">";
    octoberCells().forEach(function (iso) {
      if (!iso) {
        html += '<span class="day-pad"></span>';
        return;
      }
      var status = statusOf(iso);
      var mode = modeFor(iso);
      var missionDay = window.EduMostMissionDay && window.EduMostMissionDay.get(iso);
      var cls = "day";
      if (iso === today) cls += " is-today";
      if (status === "weekend") cls += " is-weekend";
      if (!child && status === "prep") cls += " is-prep";
      if (status === "sprawdzian" || status === "kartkowka" || status === "sprawdzian-kartkowka") cls += " is-exam";
      if (!child && mode === "parentWorking") cls += " is-work";
      if (missionDay) cls += " is-mission";
      html += '<a class="' + cls + '" href="#' + iso + '" data-date="' + iso + '"';
      if (!child) html += ' data-status="' + esc(status) + '" data-mode="' + mode + '"';
      html += ">";
      html += '<span class="num">' + parseISO(iso).getDate() + "</span>";
      if (missionDay) html += '<span class="mark">' + esc(missionDay.calendarMark || "misja") + "</span>";
      if (!child) {
        testsOn(iso).forEach(function (test) {
          html += '<span class="mark">' + esc(test.subjectPl) + "</span>";
        });
        html += '<span class="meta">' + esc(STATUS_LABEL[status] || status) + "</span>";
        html += '<span class="meta">' + mode + "</span>";
      } else {
        testsOn(iso).forEach(function (test) {
          var kind = test.kind === "kartkowka" ? "kartkówka" : "sprawdzian";
          html += '<span class="mark">' + esc(kind) + "</span>";
        });
      }
      html += "</a>";
    });
    html += "</div>";
    if (!child) html += parentReference() + fileHints();
    return html;
  }

  function parentReference() {
    var grades = window.EduMostKirillGrades;
    var profile = window.EduMostKirillProfile || {};
    var html = block("Оцінки Librus", gradesHtml(grades), "grades");
    var rules = profile.rules || [];
    html += block("Правила супроводу", rules.length
      ? "<ul class=\"rules\">" + rules.map(function (rule) { return "<li>" + esc(rule) + "</li>"; }).join("") + "</ul>"
      : missingHtml());
    return html;
  }

  function gradesHtml(grades) {
    if (!grades || !grades.subjects) return missingHtml();
    var html = '<p class="hint">Знімок ' + esc(grades.recorded || "") + " · " + esc(grades.source || "Librus") + ". Оцінки не додають навантаження і не показуються дитині.</p>";
    html += "<ul>";
    grades.subjects.forEach(function (row) {
      html += "<li><strong>" + esc(row.subject) + ":</strong> " + esc((row.grades || []).join(", "));
      if (row.note) html += '<div class="hint">' + esc(row.note) + "</div>";
      if (row.signal) html += '<div class="signal">' + esc(row.signal) + "</div>";
      html += "</li>";
    });
    html += "</ul>";
    return html;
  }

  function schoolHtml(iso) {
    var lessons = lessonsFor(iso);
    if (lessons === null) return "<p>Немає спільного розкладу.</p>";
    if (!lessons.length) return "<p>У розкладі цього дня уроків немає.</p>";
    return '<ul class="lessons">' + lessons.map(function (lesson) {
      return "<li><span class=\"when\">" + lesson.nr + " · " + esc(lesson.time) + "</span><strong>" + esc(lesson.name) + "</strong><span class=\"room\">" + esc(lesson.room || "—") + "</span></li>";
    }).join("") + "</ul>";
  }

  function topicsHtml(iso) {
    var lessons = lessonsFor(iso) || [];
    var day = dayRecord(iso);
    if (!lessons.length) return missingHtml();
    return "<ul>" + lessons.map(function (lesson) {
      var topic = topicText(day, lesson.id);
      var cls = topic === MISSING ? "missing" : "";
      return "<li><strong>" + esc(lesson.name) + ":</strong> <span class=\"" + cls + "\">" + esc(topic) + "</span></li>";
    }).join("") + "</ul>";
  }

  function testsHtml(iso) {
    var all = (window.EduMostKirillTests || []).slice().sort(function (a, b) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    if (!all.length) return missingHtml();
    return '<div class="tests">' + all.map(function (test) {
      var phase = phaseFor(daysBetween(iso, test.date));
      var kind = test.kind === "kartkowka" ? "kartkówka" : "sprawdzian";
      var html = "<article data-test=\"" + esc(test.id) + "\"><h3>" + esc(formatHeading(test.date)) + " · " + esc(test.subjectPl) + "</h3>";
      html += "<p>" + esc(test.title || kind) + "</p>";
      html += "<ul>" + (test.scope || []).map(function (item) {
        return "<li>" + esc(item) + "</li>";
      }).join("") + "</ul>";
      html += '<p class="phase">' + esc(phaseText(phase)) + "</p>";
      html += lessonLinksHtml(test);
      html += "</article>";
      return html;
    }).join("") + "</div>";
  }

  function lessonLinksHtml(test) {
    var links = test.lessonLinks || [];
    var root = LESSON_ROOT[test.subject];
    if (!links.length || !root) return "";
    var html = '<p class="hint">Уроки EduMost за цим обсягом. Це не завдання на сьогодні.</p><ul>';
    links.forEach(function (folder) {
      if (!/^[a-z0-9-]+$/.test(folder)) return;
      var label = LESSON_LABEL[folder] || folder;
      html += '<li><a href="' + esc(root + folder + "/index.html") + '">' + esc(label) + "</a></li>";
    });
    html += "</ul>";
    return html;
  }

  function parentScriptHtml(day) {
    var phrases = (window.EduMostKirillProfile || {}).phrases || {};
    var plan = (day && day.parentPlan) || {};
    var rows = [
      ["Що сказати", plan.say, phrases.start],
      ["Як почати", plan.start, phrases.start],
      ["Як допомогти", plan.help, phrases.help],
      ["Чого не говорити", plan.avoid, phrases.avoid],
      ["Як реагувати на помилку", plan.onError, phrases.mistake],
      ["Як реагувати на відмову", plan.onRefusal, phrases.refusal],
      ["Як оцінити", plan.assess, phrases.praise],
      ["Коли зупинитись", plan.stop, phrases.stop]
    ];
    var html = '<p class="hint">Якщо в дні поле порожнє, показана базова фраза з profile.js. Це не сценарій конкретного дня.</p>';
    rows.forEach(function (row) {
      var own = filled(row[1]);
      var text = own ? row[1].trim() : (filled(row[2]) ? row[2].trim() : "");
      html += "<p><strong>" + esc(row[0]) + ".</strong> ";
      if (!text) html += '<span class="missing">' + MISSING + "</span>";
      else html += esc(text) + (own ? "" : ' <span class="src">(профіль)</span>');
      html += "</p>";
    });
    return html;
  }

  function missionHtml(day, child) {
    var mission = (day && day.mission) || {};
    var html = "";
    if (filled(mission.title)) html += "<p><strong>" + esc(mission.title.trim()) + "</strong></p>";
    if (child) {
      if (!mission.childSteps || !mission.childSteps.length) return html + missingHtml();
      return html + stepsHtml(mission.childSteps);
    }
    html += "<p><strong>Для дитини</strong></p>" + stepsHtml(mission.childSteps);
    html += "<p><strong>Якщо ви вдома</strong></p>" + textHtml(mission.together);
    return html;
  }

  function modeHtml(iso) {
    var profile = window.EduMostKirillProfile || {};
    var schedule = profile.parentSchedule || {};
    var start = schedule.workStart || "05:00";
    var end = schedule.workEnd || "17:00";
    if (modeFor(iso) === "parentWorking") {
      return "<p>parentWorking. Після школи вас немає (" + esc(start) + "–" + esc(end) + "). Дитина виконує короткий план сама. Після " + esc(end) + " — вечірній звіт на 1–3 хвилини.</p>";
    }
    return "<p>parentPresent. Ви вдома: можна діалог, спільна місія і глибше питання, якщо навантаження дня це дозволяє.</p>";
  }

  function loadReports() {
    try {
      var parsed = JSON.parse(localStorage.getItem(REPORT_KEY) || "{}");
      if (parsed && typeof parsed === "object") return parsed;
    } catch (error) {
      return {};
    }
    return {};
  }

  function reportHtml() {
    var fields = REPORT_FIELDS.map(function (field) {
      var options = field.options.map(function (option) {
        return '<option value="' + esc(option[0]) + '">' + esc(option[1]) + "</option>";
      }).join("");
      return "<label>" + esc(field.label) + '<select name="' + esc(field.name) + '">' + options + "</select></label>";
    }).join("");
    return '<form id="reportForm" autocomplete="off"><div class="report-grid">' + fields + "</div>" +
      '<label class="note-label">Нотатка<textarea name="parentNote"></textarea></label>' +
      '<p class="hint">Зберігається лише в цьому браузері (localStorage, ключ edumost-plan-kirilla-reports). Файл місяця не змінюється.</p>' +
      '<p class="save-state" id="saveState"></p></form>';
  }

  function bindReport(iso) {
    var form = document.getElementById("reportForm");
    if (!form) return;
    var saved = loadReports()[iso] || {};
    REPORT_FIELDS.forEach(function (field) {
      if (form.elements[field.name]) form.elements[field.name].value = saved[field.name] || "";
    });
    if (form.elements.parentNote) form.elements.parentNote.value = saved.parentNote || "";
    if (saved.savedAt) {
      var state = document.getElementById("saveState");
      if (state) state.textContent = "У цьому браузері вже є звіт за цей день.";
    }
    function save() {
      var all = loadReports();
      var entry = { savedAt: new Date().toISOString() };
      REPORT_FIELDS.forEach(function (field) {
        entry[field.name] = form.elements[field.name] ? form.elements[field.name].value : "";
      });
      entry.parentNote = form.elements.parentNote ? form.elements.parentNote.value : "";
      all[iso] = entry;
      localStorage.setItem(REPORT_KEY, JSON.stringify(all));
      var state = document.getElementById("saveState");
      if (state) state.textContent = "Збережено в цьому браузері. Файл місяця не змінено.";
    }
    form.addEventListener("change", save);
    form.addEventListener("input", save);
    form.addEventListener("submit", function (event) { event.preventDefault(); save(); });
  }

  function renderParentDay(iso) {
    var day = dayRecord(iso);
    var html = '<header class="plan-top"><a href="index.html">← EduMost</a><a href="' + monthHref() + '">Календар</a></header>';
    html += "<h1>План дня — " + esc(formatHeading(iso)) + "</h1>";
    html += '<p class="plan-lead">' + esc(formatLong(iso)) + '</p>';
    html += '<p class="hint"><a href="?view=child#' + iso + '">Відкрити вигляд для Кирила</a></p>';
    html += block("1. Режим дня", modeHtml(iso));
    html += block("2. Сьогодні в школі", schoolHtml(iso) + '<p class="hint">Години й предмети з data/schedule.js.</p>');
    html += block("3. Теми з Librus", topicsHtml(iso));
    html += block("4. Домашнє завдання", homeworkHtml(day));
    html += block("5. Найближчі контрольні", testsHtml(iso));
    html += block("6. Сьогоднішній фокус", textHtml(day && day.focus));
    html += block("7. Мета", textHtml(day && day.goal));
    html += block("8. Час", "<p>" + esc(parentTimeText(iso)) + "</p>");
    html += block("9. План дитини", stepsHtml(day && day.childPlan && day.childPlan.steps));
    html += block("10. План батьків", parentScriptHtml(day), "parent-layer");
    html += block("11. Місія", missionHtml(day, false));
    html += block("12. Вечірній звіт", '<p class="hint">1–3 хвилини. У робочий день це крок після повернення.</p>' + reportHtml(), "report");
    html += fileHints();
    return html;
  }

  function renderChildDay(iso) {
    var day = dayRecord(iso);
    var tests = testsOn(iso);
    var html = '<header class="plan-top"><a href="index.html">← EduMost</a><a href="' + monthHref() + '">Жовтень</a></header>';
    html += "<h1>" + esc(formatHeading(iso)) + "</h1>";
    html += '<p class="plan-lead">' + esc(formatLong(iso)) + "</p>";
    if (tests.length) {
      html += block("Сьогодні в школі", "<ul>" + tests.map(function (test) {
        var kind = test.kind === "kartkowka" ? "kartkówka" : "sprawdzian";
        return "<li>" + esc(test.subjectPl) + " — " + kind + "</li>";
      }).join("") + "</ul>" + "<p>" + esc(childTimeText(iso)) + "</p>");
    }
    html += block("Домашка", homeworkHtml(day));
    html += block("Що зробити", stepsHtml(day && day.childPlan && day.childPlan.steps));
    html += block("Місія", missionHtml(day, true));
    if (!tests.length) html += block("Час", "<p>" + esc(childTimeText(iso)) + "</p>");
    return html;
  }

  function render() {
    var app = document.getElementById("app");
    if (!app) return;
    var child = isChildView();
    var iso = selectedIso();
    document.body.classList.remove("is-mission-day");
    document.documentElement.lang = "uk";
    if (iso && window.EduMostMissionDay && window.EduMostMissionDay.get(iso)) {
      window.EduMostMissionDay.render(app, { iso: iso, child: child });
      return;
    }
    if (iso && window.EduMostDiagDay && window.EduMostDiagDay.get(iso)) {
      window.EduMostDiagDay.render(app, { iso: iso, child: child });
      return;
    }
    if (iso && iso.slice(0, 7) === MONTH) {
      app.innerHTML = child ? renderChildDay(iso) : renderParentDay(iso);
      if (!child) bindReport(iso);
      document.title = (child ? "" : "Plan Kirilla — ") + formatHeading(iso);
      return;
    }
    var note = "";
    if (iso && iso.slice(0, 7) !== MONTH) {
      note = '<p class="hint">Зараз відкритий каркас жовтня 2026.</p>';
    }
    app.innerHTML = renderMonth(child) + note;
    document.title = child ? "Жовтень 2026" : "Plan Kirilla";
  }

  document.addEventListener("DOMContentLoaded", render);
  window.addEventListener("hashchange", render);

  window.EduMostPlanKirilla = {
    modeFor: modeFor,
    phaseFor: phaseFor,
    statusOf: statusOf,
    parentTimeText: parentTimeText,
    testsOn: testsOn
  };
})();
