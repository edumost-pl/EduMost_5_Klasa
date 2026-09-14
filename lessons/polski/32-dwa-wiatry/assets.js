(function () {
  var SRC = "./str64.mp3";
  var KEY = "nagranie";

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
    var old = stage.querySelector(".em-audio");
    if (old) old.remove();
    if (!formulaHasKey()) return;
    var body = stage.querySelector(".block-body");
    if (!body) return;
    var box = document.createElement("div");
    box.className = "em-audio";
    box.innerHTML =
      "<p class=\"em-audio-label\">Posłuchaj wiersza · Послухай вірш</p>" +
      "<audio controls preload=\"metadata\">" +
      "<source src=\"" + SRC + "\" type=\"audio/mpeg\">" +
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
