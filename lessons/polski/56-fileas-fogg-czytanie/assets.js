(function () {
  var SRC = "./str101-103.mp3?v=t56a";
  var KEY = "nagranie";
  var SCANS = [
    { src: "./t56-tekst-101.png", label: "s. 101", alt: "Juliusz Verne — początek wielkiej przygody (1)" },
    { src: "./t56-tekst-102.jpg", label: "s. 102", alt: "Juliusz Verne — początek wielkiej przygody (2)" },
    { src: "./t56-tekst-103.jpg", label: "s. 103", alt: "Juliusz Verne — początek wielkiej przygody (3)" }
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
      var dropA = stage.querySelector(".em-audio");
      var dropG = stage.querySelector(".em-scan-gallery");
      if (dropA) dropA.remove();
      if (dropG) dropG.remove();
      return;
    }
    if (!body) return;

    /* Keep existing player so lightbox / task UI do not restart audio. */
    if (!stage.querySelector(".em-audio")) {
      var box = document.createElement("div");
      box.className = "em-audio";
      box.innerHTML =
        "<p class=\"em-audio-label\">Posłuchaj fragmentu · Послухай уривок (s. 101–103)</p>" +
        "<audio controls preload=\"metadata\">" +
        "<source src=\"" + SRC + "\" type=\"audio/mpeg\">" +
        "</audio>";
      var formula = body.querySelector(".math-line");
      if (formula) formula.insertAdjacentElement("afterend", box);
      else body.insertBefore(box, body.firstChild);
    }

    if (!stage.querySelector(".em-scan-gallery")) {
      var gal = document.createElement("div");
      gal.className = "em-scan-gallery";
      gal.setAttribute("aria-label", "Trzy strony tekstu");
      SCANS.forEach(function (scan, i) {
        var fig = document.createElement("figure");
        fig.className = "em-scan-card";
        fig.innerHTML =
          "<figcaption class=\"em-scan-cap\">" + scan.label + " · kliknij, by powiększyć</figcaption>" +
          "<img class=\"viz-img\" src=\"" + scan.src + "?v=t56a\" alt=\"" + scan.alt +
          "\" tabindex=\"0\" role=\"button\" data-scan=\"" + (i + 1) + "\">";
        gal.appendChild(fig);
      });
      var audio = stage.querySelector(".em-audio");
      if (audio) audio.insertAdjacentElement("afterend", gal);
      else {
        var f2 = body.querySelector(".math-line");
        if (f2) f2.insertAdjacentElement("afterend", gal);
        else body.insertBefore(gal, body.firstChild);
      }
    }
  }

  window.EduMostLessonAssets = {};
  var stage = document.getElementById("lesson-stage");
  if (!stage) return;
  new MutationObserver(mount).observe(stage, { childList: true });
  mount();
})();
