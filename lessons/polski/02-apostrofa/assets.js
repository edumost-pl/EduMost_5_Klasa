(function () {
  var KEY = "nagranie";

  function pickSrc() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return null;
    var line = stage.querySelector(".math-line");
    var t = ((line && line.textContent) || "").toLowerCase();
    if (t.indexOf(KEY) === -1) return null;
    if (t.indexOf("s. 11") !== -1 || t.indexOf("s.11") !== -1) {
      return { src: "./str11.mp3?v=t2g", label: "Posłuchaj s. 11 · Послухай с. 11" };
    }
    return { src: "./str10.mp3?v=t2g", label: "Posłuchaj wiersza · Послухай вірш" };
  }

  function mount() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return;
    var old = stage.querySelector(".em-audio");
    if (old) old.remove();
    var pick = pickSrc();
    if (!pick) return;
    var body = stage.querySelector(".block-body");
    if (!body) return;
    var box = document.createElement("div");
    box.className = "em-audio";
    box.innerHTML =
      "<p class=\"em-audio-label\">" + pick.label + "</p>" +
      "<audio controls preload=\"metadata\">" +
      "<source src=\"" + pick.src + "\" type=\"audio/mpeg\">" +
      "</audio>";
    var formula = body.querySelector(".math-line");
    if (formula) formula.insertAdjacentElement("afterend", box);
    else body.insertBefore(box, body.firstChild);
  }

  window.EduMostLessonAssets = {};
  var stage = document.getElementById("lesson-stage");
  if (!stage) return;
  new MutationObserver(mount).observe(stage, { childList: true });
  mount();
})();
