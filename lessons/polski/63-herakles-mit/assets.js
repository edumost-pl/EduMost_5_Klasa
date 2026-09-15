(function () {
  var KEY = "fragment";
  var SCANS = [
    { src: "./t63-tekst-1.jpg", label: "s. 122 · 1", alt: "Mit o Heraklesie — narodziny, Hera, węże" },
    { src: "./t63-tekst-2.jpg", label: "s. 123 · 2", alt: "Mit o Heraklesie — Tejrezjasz, Linos, Kitajron" },
    { src: "./t63-tekst-3.png", label: "s. 124 · 3", alt: "Mit o Heraklesie — lew, rozdroże Szczęście i Cnota" },
    { src: "./t63-tekst-4.jpg", label: "s. 125 · 4", alt: "Mit o Heraklesie — Teby, Eurysteusz, Nemea" },
    { src: "./t63-tekst-5.jpg", label: "s. 126 · 5", alt: "Mit o Heraklesie — lew nemejski" },
    { src: "./t63-tekst-6.jpg", label: "s. 127 · 6", alt: "Mit o Heraklesie — 12 prac, Dejanira, Nessos" },
    { src: "./t63-tekst-7.jpg", label: "s. 128 · 7", alt: "Mit o Heraklesie — śmierć, Olimp" }
  ];

  function formulaHasKey() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return false;
    var line = stage.querySelector(".math-line");
    var t = ((line && line.textContent) || "").toLowerCase();
    return t.indexOf(KEY) !== -1;
  }

  function mount() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return;
    var body = stage.querySelector(".block-body");
    if (!formulaHasKey()) {
      var dropG = stage.querySelector(".em-scan-gallery");
      if (dropG) dropG.remove();
      return;
    }
    if (!body) return;
    if (stage.querySelector(".em-scan-gallery")) return;
    var gal = document.createElement("div");
    gal.className = "em-scan-gallery";
    gal.setAttribute("aria-label", "Fragment mitu — siedem stron");
    SCANS.forEach(function (scan, i) {
      var fig = document.createElement("figure");
      fig.className = "em-scan-card";
      fig.innerHTML =
        "<figcaption class=\"em-scan-cap\">" + scan.label + " · kliknij, by powiększyć</figcaption>" +
        "<img class=\"viz-img\" src=\"" + scan.src + "?v=t63a\" alt=\"" + scan.alt +
        "\" tabindex=\"0\" role=\"button\" data-scan=\"" + (i + 1) + "\">";
      gal.appendChild(fig);
    });
    var formula = body.querySelector(".math-line");
    if (formula) formula.insertAdjacentElement("afterend", gal);
    else body.insertBefore(gal, body.firstChild);
  }

  window.EduMostLessonAssets = {};
  var stage = document.getElementById("lesson-stage");
  if (!stage) return;
  new MutationObserver(mount).observe(stage, { childList: true });
  mount();
})();
