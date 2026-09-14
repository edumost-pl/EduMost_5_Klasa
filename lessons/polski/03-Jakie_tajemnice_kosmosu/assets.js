(function () {
  var KEY = "trzy zdjęcia";
  var PHOTOS = [
    {
      src: "./t3-mglawica.jpg",
      alt: "Mgławica: jasny pierścień świateł na czarnym niebie, przypomina oko.",
      capPl: "A. Mgławica — przypomina oko",
      capUa: "A. Туманність — нагадує око"
    },
    {
      src: "./t3-galaktyka.jpg",
      alt: "Galaktyka spiralna: jasny środek i ramiona w kształcie spirali.",
      capPl: "B. Galaktyka — ma kształt spirali",
      capUa: "B. Галактика — має форму спіралі"
    },
    {
      src: "./t3-ziemia.png",
      alt: "Kula ziemska i mniejsze ciała niebieskie, w tym księżyc.",
      capPl: "C. Kula ziemska i ciała niebieskie",
      capUa: "C. Земна куля і небесні тіла"
    }
  ];

  function mount() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return;
    var old = stage.querySelector(".em-foto-grid");
    if (old) old.remove();
    var line = stage.querySelector(".math-line");
    var t = ((line && line.textContent) || "").toLowerCase();
    if (t.indexOf(KEY) === -1) return;
    var body = stage.querySelector(".block-body");
    if (!body) return;
    var grid = document.createElement("div");
    grid.className = "em-foto-grid";
    PHOTOS.forEach(function (p) {
      var fig = document.createElement("figure");
      fig.className = "em-foto";
      fig.innerHTML =
        "<img class=\"viz-img\" src=\"" + p.src + "\" alt=\"" + p.alt.replace(/"/g, "&quot;") + "\" role=\"button\" tabindex=\"0\">" +
        "<figcaption><span class=\"tx-pl\">" + p.capPl + "</span><span class=\"tx-ua\">" + p.capUa + "</span></figcaption>";
      grid.appendChild(fig);
    });
    if (line) line.insertAdjacentElement("afterend", grid);
    else body.insertBefore(grid, body.firstChild);
  }

  window.EduMostLessonAssets = {};
  var stage = document.getElementById("lesson-stage");
  if (!stage) return;
  new MutationObserver(mount).observe(stage, { childList: true });
  mount();
})();
