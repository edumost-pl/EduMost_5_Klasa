(function () {
  var KEY = "fragment";
  var SCANS = [
    { src: "./t71-tekst-148.jpg", label: "s. 148", alt: "Parandowski — Tułaczka Odyseusza (s. 148)" },
    { src: "./t71-tekst-149.jpg", label: "s. 149", alt: "Parandowski — Tułaczka Odyseusza (s. 149)" },
    { src: "./t71-tekst-150.jpg", label: "s. 150", alt: "Parandowski — Tułaczka Odyseusza (s. 150)" },
    { src: "./t71-tekst-151.jpg", label: "s. 151", alt: "Parandowski — Tułaczka Odyseusza (s. 151)" },
    { src: "./t71-tekst-152.jpg", label: "s. 152", alt: "Parandowski — Tułaczka Odyseusza (s. 152)" },
    { src: "./t71-tekst-153.jpg", label: "s. 153", alt: "Parandowski — Tułaczka Odyseusza (s. 153)" },
    { src: "./t71-tekst-154.jpg", label: "s. 154", alt: "Parandowski — Tułaczka Odyseusza (s. 154)" },
    { src: "./t71-tekst-155.jpg", label: "s. 155", alt: "Parandowski — Tułaczka Odyseusza (s. 155)" },
    { src: "./t71-tekst-156.jpg", label: "s. 156", alt: "Parandowski — Tułaczka Odyseusza (s. 156)" }
  ];
  var VER = "t71a";

  function formulaHasKey() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return false;
    var line = stage.querySelector(".math-line");
    var t = ((line && line.textContent) || "").toLowerCase();
    return t.indexOf(KEY) !== -1;
  }

  function ensureLightbox() {
    var box = document.getElementById("em-read-lightbox");
    if (box) return box;
    box = document.createElement("div");
    box.id = "em-read-lightbox";
    box.className = "em-read-lightbox";
    box.hidden = true;
    box.innerHTML =
      '<div class="em-read-lb-bar">' +
      "<span>Powiększenie · przewiń strony w dół · ✕ lub Esc zamyka</span>" +
      '<button type="button" class="em-read-lb-close" aria-label="Zamknij">✕</button>' +
      "</div>" +
      '<div class="em-read-lb-scroll" role="document"></div>';
    document.body.appendChild(box);
    box.querySelector(".em-read-lb-close").addEventListener("click", closeLightbox);
    box.addEventListener("click", function (e) {
      if (e.target === box) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
    return box;
  }

  function openLightbox(startIndex) {
    var box = ensureLightbox();
    var scroll = box.querySelector(".em-read-lb-scroll");
    scroll.innerHTML = "";
    var targets = [];
    SCANS.forEach(function (scan, i) {
      var wrap = document.createElement("figure");
      wrap.className = "em-read-lb-page";
      wrap.setAttribute("data-page", String(i));
      var cap = document.createElement("figcaption");
      cap.textContent = scan.label;
      var img = document.createElement("img");
      img.src = scan.src + "?v=" + VER;
      img.alt = scan.alt;
      wrap.appendChild(cap);
      wrap.appendChild(img);
      scroll.appendChild(wrap);
      targets.push(wrap);
    });
    box.hidden = false;
    document.body.classList.add("em-read-open");
    var idx = typeof startIndex === "number" ? startIndex : 0;
    requestAnimationFrame(function () {
      var el = targets[idx] || targets[0];
      if (el) el.scrollIntoView({ block: "start" });
      else scroll.scrollTop = 0;
    });
  }

  function closeLightbox() {
    var box = document.getElementById("em-read-lightbox");
    if (!box) return;
    box.hidden = true;
    document.body.classList.remove("em-read-open");
  }

  function mount() {
    var stage = document.getElementById("lesson-stage");
    if (!stage) return;
    var body = stage.querySelector(".block-body");
    if (!formulaHasKey()) {
      var drop = stage.querySelector(".em-read-pane");
      if (drop) drop.remove();
      var hint = stage.querySelector(".em-read-hint");
      if (hint) hint.remove();
      return;
    }
    if (!body) return;
    if (stage.querySelector(".em-read-pane")) return;

    var hint = document.createElement("p");
    hint.className = "em-read-hint";
    hint.textContent =
      "Każda strona osobno · kliknij stronę lub ↗ = powiększenie, potem przewijaj";

    var pane = document.createElement("div");
    pane.className = "em-read-pane";
    pane.setAttribute("aria-label", "Tułaczka Odyseusza — strony podręcznika");

    var expand = document.createElement("button");
    expand.type = "button";
    expand.className = "em-read-expand";
    expand.setAttribute("aria-label", "Powiększ i czytaj");
    expand.title = "Powiększ cały tekst";
    expand.textContent = "↗";
    expand.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(0);
    });

    var grid = document.createElement("div");
    grid.className = "em-read-pages";

    SCANS.forEach(function (scan, i) {
      var fig = document.createElement("figure");
      fig.className = "em-read-page";
      fig.tabIndex = 0;
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", "Powiększ " + scan.label);
      var cap = document.createElement("figcaption");
      cap.className = "em-read-cap";
      cap.textContent = scan.label + " · kliknij, by powiększyć";
      var img = document.createElement("img");
      img.className = "em-read-img";
      img.src = scan.src + "?v=" + VER;
      img.alt = scan.alt;
      img.draggable = false;
      function openThis(e) {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(i);
      }
      fig.addEventListener("click", openThis);
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openThis(e);
      });
      fig.appendChild(cap);
      fig.appendChild(img);
      grid.appendChild(fig);
    });

    pane.appendChild(expand);
    pane.appendChild(grid);

    var formula = body.querySelector(".math-line");
    if (formula) {
      formula.insertAdjacentElement("afterend", pane);
      formula.insertAdjacentElement("afterend", hint);
    } else {
      body.insertBefore(pane, body.firstChild);
      body.insertBefore(hint, pane);
    }
  }

  window.EduMostLessonAssets = {};
  var stage = document.getElementById("lesson-stage");
  if (!stage) return;
  new MutationObserver(mount).observe(stage, { childList: true });
  mount();
})();
