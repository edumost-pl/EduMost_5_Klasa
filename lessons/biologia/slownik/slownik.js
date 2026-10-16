(function () {
  var LETTERS = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("");
  var terms = window.EduMostGlossary || [];

  function fold(s) {
    return String(s || "")
      .toLocaleLowerCase("pl")
      .replace(/['’ʼ]/g, "")
      .replace(/ą/g, "a")
      .replace(/ć/g, "c")
      .replace(/ę/g, "e")
      .replace(/ł/g, "l")
      .replace(/ń/g, "n")
      .replace(/ó/g, "o")
      .replace(/ś/g, "s")
      .replace(/[żź]/g, "z")
      .replace(/і/g, "и")
      .replace(/ї/g, "і")
      .replace(/є/g, "е")
      .replace(/ґ/g, "г");
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function letterOf(term) {
    return term.pl.charAt(0).toLocaleUpperCase("pl");
  }

  function slug(term) {
    return "t-" + fold(term.pl).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function copy(lang) {
    if (lang === "ua") {
      return {
        title: "Słownik <span class=\"name-ua\">Словник</span>",
        lead: [
          "Powtórz ważne terminy z podręcznika, strony 165–167. To cały rok biologii, nie jeden dział. Wpisz słowo albo skocz do litery.",
          "Повтори важливі терміни з підручника, сторінки 165–167. Це весь рік біології, не один розділ. Впиши слово або стрибни до літери."
        ],
        empty: "Такого слова на сторінках 165–167 немає.",
        count: function (n, all) { return n + " із " + all; }
      };
    }
    return {
      title: "Słownik",
      lead: [
        "Powtórz ważne terminy z podręcznika, strony 165–167. To cały rok biologii, nie jeden dział. Wpisz słowo po polsku albo po ukraińsku albo skocz do litery."
      ],
      empty: "Nie ma takiego słowa na stronach 165–167.",
      count: function (n, all) { return n + " z " + all; }
    };
  }

  function paintChrome() {
    var lang = EduMostI18n.getLang();
    var c = copy(lang);
    document.title = "Słownik — EduMost";
    document.getElementById("sl-title").innerHTML = c.title;
    var lead = document.getElementById("sl-lead");
    lead.innerHTML = c.lead.map(function (line) {
      return "<p class=\"sl-lead\">" + esc(line) + "</p>";
    }).join("");
  }

  function matching(query) {
    var q = fold(query.trim());
    if (!q) return terms.slice();
    return terms.filter(function (term) {
      var blob = fold(term.pl + " " + term.ua + " " + term.say.pl + " " + term.say.ua);
      return blob.indexOf(q) !== -1;
    });
  }

  function render(query) {
    var found = matching(query);
    var byLetter = {};
    found.forEach(function (term) {
      var L = letterOf(term);
      if (!byLetter[L]) byLetter[L] = [];
      byLetter[L].push(term);
    });
    Object.keys(byLetter).forEach(function (L) {
      byLetter[L].sort(function (a, b) {
        return a.pl.localeCompare(b.pl, "pl");
      });
    });

    var list = document.getElementById("sl-list");
    var html = "";
    LETTERS.forEach(function (L) {
      var group = byLetter[L];
      if (!group || !group.length) return;
      html += "<section class=\"sl-block\" id=\"lit-" + esc(L) + "\"><h2>" + esc(L) + "</h2>";
      group.forEach(function (term) {
        html += "<article class=\"sl-card\" id=\"" + esc(slug(term)) + "\">" +
          "<h3>" + esc(term.pl) + " <span class=\"sl-ua\">" + esc(term.ua) + "</span></h3>" +
          "<p>" + esc(term.say.pl) + "</p>" +
          "<p class=\"sl-ua-text\">" + esc(term.say.ua) + "</p>" +
          "</article>";
      });
      html += "</section>";
    });
    list.innerHTML = html;

    var empty = document.getElementById("sl-empty");
    var lang = EduMostI18n.getLang();
    empty.hidden = found.length > 0;
    empty.textContent = copy(lang).empty;
    document.getElementById("sl-count").textContent = copy(lang).count(found.length, terms.length);

    var nav = document.getElementById("sl-letters");
    nav.innerHTML = "";
    LETTERS.forEach(function (L) {
      if (!terms.some(function (term) { return letterOf(term) === L; })) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = L;
      var has = !!(byLetter[L] && byLetter[L].length);
      btn.disabled = !has;
      btn.addEventListener("click", function () {
        var el = document.getElementById("lit-" + L);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.appendChild(btn);
    });
  }

  function start() {
    EduMostI18n.bindToggle();
    EduMostI18n.setLang(EduMostI18n.getLang());
    paintChrome();
    var input = document.getElementById("sl-q");
    input.addEventListener("input", function () { render(input.value); });
    document.addEventListener("edumost:lang", function () {
      paintChrome();
      render(input.value);
    });
    render("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
