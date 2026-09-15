(function () {
  var KEY = "fragment";
  var SCANS = [
    { src: "./t67-tekst-1.jpg", label: "s. 134 · 1", alt: "Razem na bieguny — wstęp, 8 kwietnia 2004" },
    { src: "./t67-tekst-2.png", label: "s. 135 · 2", alt: "Razem na bieguny — 11–18 kwietnia" },
    { src: "./t67-tekst-3.png", label: "s. 136 · 3", alt: "Razem na bieguny — szczeliny, dryf, biegun" }
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
    gal.setAttribute("aria-label", "Fragment dziennika — trzy strony");
    SCANS.forEach(function (scan, i) {
      var fig = document.createElement("figure");
      fig.className = "em-scan-card";
      fig.innerHTML =
        "<figcaption class=\"em-scan-cap\">" + scan.label + " · kliknij, by powiększyć</figcaption>" +
        "<img class=\"viz-img\" src=\"" + scan.src + "?v=t67a\" alt=\"" + scan.alt +
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
