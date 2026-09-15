(function () {
  var KEY = "wiersz";
  var SCANS = [
    { src: "./t69-wiersz.png", label: "s. 140 · wiersz", alt: "Ludmiła Marjańska — Słońce – gorąca gwiazda" }
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
    gal.setAttribute("aria-label", "Wiersz Marjańskiej");
    SCANS.forEach(function (scan, i) {
      var fig = document.createElement("figure");
      fig.className = "em-scan-card";
      fig.innerHTML =
        "<figcaption class=\"em-scan-cap\">" + scan.label + " · kliknij, by powiększyć</figcaption>" +
        "<img class=\"viz-img\" src=\"" + scan.src + "?v=t69a\" alt=\"" + scan.alt +
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
