(function () {
  const pages = window.MISTRZ_PAGES || [];

  function currentIndex() {
    const path = decodeURIComponent(location.pathname);
    const file = path.split("/").pop() || "";
    const i = pages.findIndex((p) => p.file.endsWith(file) || p.n + ".html" === file);
    return i;
  }

  function hrefFor(i) {
    if (i < 0 || i >= pages.length) return null;
    const depth = location.pathname.includes("/pages/") ? "../" : "";
    return depth + pages[i].file;
  }

  async function savePageAsPdf() {
      const page = document.querySelector(".page");
    if (!page) return;
    const btn = document.querySelector(".btn-pdf");
    if (btn) {
      btn.disabled = true;
      btn.textContent = "PDF…";
    }
    const prevTransform = page.style.transform;
    const prevMargin = page.style.marginBottom;
    try {
      page.style.transform = "none";
      page.style.marginBottom = "0";
      await ensurePdfLibs();
      if (!window.html2canvas || !window.jspdf) {
        throw new Error("Brak bibliotek PDF (html2canvas / jspdf). Włącz sieć / otwórz przez lokalny serwer.");
      }
      const imgs = [...page.querySelectorAll("img")];
      await Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
        )
      );
      // daj czas na fonty
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      const canvas = await window.html2canvas(page, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        width: 1240,
        height: 1754,
        windowWidth: 1240,
        windowHeight: 1754,
        onclone: (doc) => {
          const clone = doc.querySelector(".page");
          if (clone) {
            clone.style.transform = "none";
            clone.style.marginBottom = "0";
          }
        },
      });
      const img = canvas.toDataURL("image/jpeg", 0.95);
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
      pdf.addImage(img, "JPEG", 0, 0, 210, 297);
      const i = currentIndex();
      const name = i >= 0 ? `mistrz-liczb-calkowitych-${pages[i].n}` : "mistrz-strona";
      pdf.save(name + ".pdf");
    } catch (err) {
      console.error(err);
      alert("Nie udało się zapisać PDF: " + (err && err.message ? err.message : err));
    } finally {
      page.style.transform = prevTransform;
      page.style.marginBottom = prevMargin;
      if (btn) {
        btn.disabled = false;
        btn.textContent = "⬇ PDF";
      }
    }
  }

  function mountNav() {
    const i = currentIndex();
    if (i < 0) return;

    const prev = hrefFor(i - 1);
    const next = hrefFor(i + 1);
    const indexHref = location.pathname.includes("/pages/") ? "../index.html" : "index.html";

    const nav = document.createElement("nav");
    nav.className = "page-nav";
    nav.setAttribute("aria-label", "Nawigacja stron");
    nav.innerHTML = `
      <a href="${indexHref}">Spis</a>
      <a class="${prev ? "" : "is-disabled"}" href="${prev || "#"}" ${prev ? "" : 'aria-disabled="true"'}>← Wstecz</a>
      <span class="pager">${pages[i].n} / ${String(pages.length).padStart(2, "0")}</span>
      <a class="${next ? "" : "is-disabled"}" href="${next || "#"}" ${next ? "" : 'aria-disabled="true"'}>Dalej →</a>
      <button type="button" class="btn-pdf" title="Zapisz stronę jako PDF">⬇ PDF</button>
    `;
    document.body.appendChild(nav);
    nav.querySelector(".btn-pdf").addEventListener("click", savePageAsPdf);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" && prev) location.href = prev;
      if (e.key === "ArrowRight" && next) location.href = next;
    });
  }

  function mountIndex() {
    const list = document.getElementById("page-list");
    if (!list) return;
    list.innerHTML = pages
      .map(
        (p) => `
      <li>
        <a href="${p.file}">
          <span class="num">${p.n}</span>
          <span class="title">${p.title}</span>
          <span class="badge ${p.status}">${p.status === "ready" ? "gotowe" : "stub"}</span>
        </a>
      </li>`
      )
      .join("");
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const id = src.split("/").slice(-2).join("/");
      if ([...document.scripts].some((s) => s.src && s.src.indexOf(id) !== -1)) {
        resolve();
        return;
      }
      const el = document.createElement("script");
      el.src = src;
      el.onload = () => resolve();
      el.onerror = () => reject(new Error("Nie załadowano: " + src));
      document.head.appendChild(el);
    });
  }

  async function ensurePdfLibs() {
    if (window.html2canvas && window.jspdf) return;
    await loadScript("https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js");
    await loadScript("https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js");
  }

  document.addEventListener("DOMContentLoaded", async () => {
    mountIndex();
    if (document.body.classList.contains("page-view")) {
      try {
        await ensurePdfLibs();
      } catch (e) {
        console.warn(e);
      }
      mountNav();
    }
  });
})();
