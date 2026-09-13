(function () {
  var btn = document.getElementById("to-top");
  var threshold = 400;

  function updateToTop() {
    if (!btn) return;
    btn.hidden = !(window.scrollY > threshold);
  }

  if (btn) {
    window.addEventListener("scroll", updateToTop, { passive: true });
    updateToTop();
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var top = document.getElementById("top");
      if (top && typeof top.scrollIntoView === "function") {
        top.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  var printBtn = document.getElementById("btn-print");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }
})();
