(function (g) {
  function svgWrap(inner, w, h, alt) {
    return '<svg class="viz-svg" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' +
      String(alt || "").replace(/"/g, "&quot;") + '" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>";
  }

  function vizLang() {
    return window.EduMostI18n ? EduMostI18n.getLang() : "pl";
  }

  function vizText(value) {
    if (value == null || value === "") return "";
    if (typeof value !== "object") return String(value);
    if (vizLang() === "ua") {
      if (value.ua != null) return String(value.ua);
      return value.pl != null ? String(value.pl) : "";
    }
    if (value.pl != null) return String(value.pl);
    return "";
  }

  function vizEsc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function vizLabel(value) {
    return vizEsc(vizText(value));
  }

  function power(spec) {
    const base = spec.base != null ? spec.base : 2;
    const exp = spec.exponent != null ? spec.exponent : 4;
    const n = Math.max(1, Math.min(8, Number(exp) || 1));
    const factors = Array(n).fill(String(base)).join(" · ");
    return svgWrap(
      '<text x="200" y="38" text-anchor="middle" font-size="22" font-family="Georgia, serif" fill="#1c1917">' + factors + "</text>" +
      '<text x="200" y="72" text-anchor="middle" font-size="22" fill="#0f766e">↓</text>' +
      '<text x="200" y="112" text-anchor="middle" font-size="36" font-family="Georgia, serif" fill="#1c1917">' +
      base + '<tspan baseline-shift="super" font-size="20">' + exp + "</tspan></text>",
      400, 130,
      factors + " = " + base + "^" + exp
    );
  }

  function fractionBar(spec) {
    const total = Math.max(1, spec.total || 10);
    const filled = Math.max(0, Math.min(total, spec.filled || 0));
    const cell = 28;
    const w = total * cell + 20;
    let cells = "";
    for (let i = 0; i < total; i++) {
      cells += '<rect x="' + (10 + i * cell) + '" y="16" width="' + (cell - 4) + '" height="36" rx="3" fill="' +
        (i < filled ? "#0f766e" : "#e7e5e4") + '" stroke="#d6d3d1"/>';
    }
    return svgWrap(
      cells + '<text x="' + (w / 2) + '" y="78" text-anchor="middle" font-size="16" fill="#57534e">' +
      filled + " / " + total + "</text>",
      w, 90,
      filled + " z " + total
    );
  }

  function angle(spec) {
    const deg = spec.degrees != null ? spec.degrees : 45;
    const rad = (deg * Math.PI) / 180;
    const x2 = 80 + Math.cos(rad) * 90;
    const y2 = 110 - Math.sin(rad) * 90;
    return svgWrap(
      '<line x1="40" y1="110" x2="200" y2="110" stroke="#1c1917" stroke-width="3"/>' +
      '<line x1="80" y1="110" x2="' + x2 + '" y2="' + y2 + '" stroke="#0f766e" stroke-width="3"/>' +
      '<text x="130" y="100" font-size="18" fill="#b45309">' + deg + "°</text>",
      240, 140,
      deg + " stopni"
    );
  }

  function numberLine(spec) {
    const min = spec.min != null ? spec.min : -3;
    const max = spec.max != null ? spec.max : 3;
    const marks = spec.marks || [];
    const span = max - min || 1;
    const x0 = 30;
    const x1 = 370;
    function x(n) { return x0 + ((n - min) / span) * (x1 - x0); }
    let ticks = '<line x1="' + x0 + '" y1="50" x2="' + x1 + '" y2="50" stroke="#1c1917" stroke-width="2"/>';
    for (let n = min; n <= max; n++) {
      ticks += '<line x1="' + x(n) + '" y1="42" x2="' + x(n) + '" y2="58" stroke="#1c1917"/>' +
        '<text x="' + x(n) + '" y="78" text-anchor="middle" font-size="14" fill="#57534e">' + n + "</text>";
    }
    marks.forEach(function (n) {
      ticks += '<circle cx="' + x(n) + '" cy="50" r="7" fill="#0f766e"/>';
    });
    return svgWrap(ticks, 400, 96, "oś liczbowa");
  }

  function grid(spec) {
    const rows = spec.rows || 3;
    const cols = spec.cols || 5;
    const s = 22;
    let cells = "";
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        cells += '<rect x="' + (12 + c * s) + '" y="' + (12 + r * s) + '" width="' + (s - 4) + '" height="' +
          (s - 4) + '" rx="2" fill="#ccfbf1" stroke="#0f766e"/>';
      }
    }
    return svgWrap(cells, 12 + cols * s + 8, 12 + rows * s + 8, "siatka " + rows + "×" + cols);
  }

  function powerGrow(spec) {
    const base = spec.base != null ? spec.base : 2;
    const max = Math.max(1, Math.min(6, spec.max || 4));
    let rows = "";
    for (let e = 1; e <= max; e++) {
      const y = 22 + (e - 1) * 28;
      const factors = Array(e).fill(String(base)).join(" · ");
      rows += '<text x="20" y="' + y + '" font-size="18" font-family="Georgia, serif" fill="#1c1917">' + factors + "</text>" +
        '<text x="248" y="' + y + '" font-size="18" font-family="Georgia, serif" fill="#0f766e">' +
        base + '<tspan dy="-8" font-size="12">' + e + "</tspan></text>";
    }
    return svgWrap(rows, 320, 16 + max * 28, "wzrost potęg liczby " + base);
  }

  function powerLabeled(spec) {
    const base = spec.base != null ? spec.base : 2;
    const exp = spec.exponent != null ? spec.exponent : 4;
    const lang = window.EduMostI18n ? EduMostI18n.getLang() : "pl";
    const expWord = lang === "ua" ? "wykładnik" : "wykładnik";
    const baseWord = "podstawa";
    return svgWrap(
      '<text x="200" y="28" text-anchor="middle" font-size="14" fill="#b45309">' + expWord + "</text>" +
      '<text x="200" y="48" text-anchor="middle" font-size="18" fill="#0f766e">↓</text>' +
      '<text x="200" y="100" text-anchor="middle" font-size="48" font-family="Georgia, serif" fill="#1c1917">' +
      base + '<tspan dy="-22" font-size="26">' + exp + "</tspan></text>" +
      '<text x="200" y="128" text-anchor="middle" font-size="18" fill="#0f766e">↑</text>' +
      '<text x="200" y="150" text-anchor="middle" font-size="14" fill="#0f766e">' + baseWord + "</text>",
      400, 168,
      baseWord + " " + base + ", " + expWord + " " + exp
    );
  }

  function powerFalse(spec) {
    const base = spec.base != null ? spec.base : 3;
    const exp = spec.exponent != null ? spec.exponent : 4;
    const factors = Array(exp).fill(String(base)).join(" · ");
    return svgWrap(
      '<text x="200" y="36" text-anchor="middle" font-size="22" font-family="Georgia, serif" fill="#b91c1c">' +
      base + '<tspan dy="-10" font-size="16">' + exp + "</tspan>" +
      "  ≠  " + base + " · " + exp + "</text>" +
      '<text x="200" y="78" text-anchor="middle" font-size="22" fill="#0f766e">↓</text>' +
      '<text x="200" y="118" text-anchor="middle" font-size="24" font-family="Georgia, serif" fill="#1c1917">' +
      factors + "</text>",
      400, 140,
      base + "^" + exp + " to nie " + base + " · " + exp
    );
  }

  function chip(x, y, n, fill) {
    return '<rect x="' + x + '" y="' + y + '" width="48" height="30" rx="7" fill="' + (fill || "#ccfbf1") + '" stroke="#0f766e"/>' +
      '<text x="' + (x + 24) + '" y="' + (y + 21) + '" text-anchor="middle" font-size="14" font-family="Georgia, serif" fill="#1c1917">' + n + "</text>";
  }

  function addReorder(spec) {
    const a = spec.a || [4, 29, 16];
    const b = spec.b || [4, 16, 29];
    const lang = window.EduMostI18n ? EduMostI18n.getLang() : "pl";
    const leftTitle = lang === "ua" ? "початковий порядок" : "początkowa kolejność";
    const rightTitle = lang === "ua" ? "зручний порядок" : "wygodna kolejność";
    const palette = ["#99f6e4", "#fecaca", "#fde68a", "#ddd6fe"];
    const colorOf = {};
    a.concat(b).forEach(function (n) {
      if (colorOf[n] == null) {
        colorOf[n] = palette[Object.keys(colorOf).length % palette.length];
      }
    });
    let left = '<text x="90" y="22" text-anchor="middle" font-size="12" fill="#57534e">' + leftTitle + "</text>";
    a.forEach(function (n, i) {
      left += chip(12 + i * 56, 36, n, colorOf[n]);
    });
    let right = '<text x="310" y="22" text-anchor="middle" font-size="12" fill="#0f766e">' + rightTitle + "</text>";
    b.forEach(function (n, i) {
      right += chip(232 + i * 56, 36, n, colorOf[n]);
    });
    return svgWrap(
      '<line x1="200" y1="28" x2="200" y2="78" stroke="#d6d3d1"/>' + left + right,
      400, 96,
      leftTitle + " → " + rightTitle
    );
  }

  function addGroups(spec) {
    const stage = spec.stage || "line";
    const nums = spec.numbers || [8, 17, 22, 4, 53];
    const title = vizLabel(spec.title != null ? spec.title : spec.caption);
    if (stage === "line") {
      let row = title
        ? '<text x="200" y="24" text-anchor="middle" font-size="14" fill="#57534e">' + title + "</text>"
        : "";
      nums.forEach(function (n, i) {
        row += chip(18 + i * 74, 44, n);
      });
      return svgWrap(row, 400, 96, title);
    }
    if (stage === "pairs") {
      return svgWrap(
        (title
          ? '<text x="200" y="22" text-anchor="middle" font-size="14" fill="#0f766e">' + title + "</text>"
          : "") +
        chip(40, 40, 8, "#99f6e4") + chip(100, 40, 22, "#99f6e4") +
        chip(200, 40, 17, "#fde68a") + chip(260, 40, 53, "#fde68a") +
        chip(340, 40, 4, "#e7e5e4") +
        '<text x="94" y="90" text-anchor="middle" font-size="13" fill="#0f766e">8 + 22</text>' +
        '<text x="254" y="90" text-anchor="middle" font-size="13" fill="#b45309">17 + 53</text>' +
        '<text x="364" y="90" text-anchor="middle" font-size="13" fill="#57534e">+ 4</text>',
        400, 108,
        title
      );
    }
    if (stage === "tens") {
      return svgWrap(
        chip(70, 36, 30, "#99f6e4") +
        '<text x="148" y="56" font-size="20" fill="#57534e">+</text>' +
        chip(170, 36, 70, "#fde68a") +
        '<text x="248" y="56" font-size="20" fill="#57534e">+</text>' +
        chip(270, 36, 4, "#e7e5e4") +
        '<text x="200" y="92" text-anchor="middle" font-size="15" fill="#0f766e">30 + 70 + 4</text>',
        400, 108,
        title || "30 + 70 + 4"
      );
    }
    return svgWrap(
      '<text x="200" y="58" text-anchor="middle" font-size="36" font-family="Georgia, serif" fill="#0f766e">104</text>' +
      (title
        ? '<text x="200" y="88" text-anchor="middle" font-size="14" fill="#57534e">' + title + "</text>"
        : ""),
      400, 108,
      title || "104"
    );
  }

  function splitRect(spec) {
    const a = spec.a != null ? spec.a : 8;
    const left = spec.left != null ? spec.left : 20;
    const right = spec.right != null ? spec.right : 3;
    const h = 70;
    const w1 = 180;
    const w2 = 54;
    return svgWrap(
      '<rect x="40" y="28" width="' + w1 + '" height="' + h + '" fill="#99f6e4" stroke="#0f766e"/>' +
      '<rect x="' + (40 + w1) + '" y="28" width="' + w2 + '" height="' + h + '" fill="#fde68a" stroke="#b45309"/>' +
      '<text x="' + (40 + w1 / 2) + '" y="68" text-anchor="middle" font-size="16">' + a + " · " + left + "</text>" +
      '<text x="' + (40 + w1 + w2 / 2) + '" y="68" text-anchor="middle" font-size="16">' + a + " · " + right + "</text>" +
      '<text x="130" y="118" text-anchor="middle" font-size="13" fill="#0f766e">' + left + "</text>" +
      '<text x="247" y="118" text-anchor="middle" font-size="13" fill="#b45309">' + right + "</text>" +
      '<text x="40" y="22" font-size="13" fill="#57534e">' + a + " rzędów</text>",
      400, 132,
      a + " razy (" + left + " + " + right + ")"
    );
  }

  function nearMultiply(spec) {
    const n = spec.n != null ? spec.n : 29;
    const up = spec.up != null ? spec.up : 30;
    const k = spec.k != null ? spec.k : 6;
    const stage = spec.stage || "shift";
    if (stage === "shift") {
      return svgWrap(
        chip(70, 40, n, "#fecaca") +
        '<text x="160" y="60" font-size="22" fill="#0f766e">→</text>' +
        chip(190, 40, up, "#99f6e4") +
        '<text x="258" y="60" font-size="20" fill="#57534e">−</text>' +
        chip(280, 40, 1, "#fde68a") +
        '<text x="200" y="98" text-anchor="middle" font-size="14" fill="#57534e">' + n + " jest tuż obok " + up + "</text>",
        400, 116,
        n + " = " + up + " − 1"
      );
    }
    return svgWrap(
      '<text x="200" y="32" text-anchor="middle" font-size="16">' + up + " · " + k + " = " + (up * k) + "</text>" +
      '<text x="200" y="58" text-anchor="middle" font-size="16">1 · ' + k + " = " + k + "</text>" +
      '<text x="200" y="92" text-anchor="middle" font-size="22" font-family="Georgia, serif" fill="#0f766e">' +
      (up * k) + " − " + k + " = " + (up * k - k) + "</text>",
      400, 116,
      n + " · " + k
    );
  }

  function splitDivide(spec) {
    const parts = spec.parts || [200, 60, 8];
    const d = spec.d != null ? spec.d : 2;
    const stage = spec.stage || "split";
    if (stage === "split") {
      let row = '<text x="200" y="24" text-anchor="middle" font-size="14" fill="#57534e">268 = 200 + 60 + 8</text>';
      parts.forEach(function (n, i) {
        row += chip(70 + i * 90, 44, n);
      });
      return svgWrap(row, 400, 96, "rozbicie dzielnej");
    }
    let row = '<text x="200" y="24" text-anchor="middle" font-size="14" fill="#0f766e">każdą część dzielimy przez ' + d + "</text>";
    parts.forEach(function (n, i) {
      row += chip(70 + i * 90, 40, n / d, "#99f6e4");
    });
    const total = parts.reduce(function (s, n) { return s + n / d; }, 0);
    row += '<text x="200" y="94" text-anchor="middle" font-size="18" fill="#0f766e">100 + 30 + 4 = ' + total + "</text>";
    return svgWrap(row, 400, 112, "dzielenie po kawałku");
  }

  function zerosScale(spec) {
    const stage = spec.stage || "mul";
    if (stage === "div") {
      return svgWrap(
        '<text x="40" y="36" font-size="18" font-family="Georgia, serif">800 : 4 = 200</text>' +
        '<text x="40" y="64" font-size="18" font-family="Georgia, serif">40 000 : 5 = 8 000</text>' +
        '<text x="40" y="96" font-size="13" fill="#57534e">skreślasz tyle samo zer w dzielnej i dzielniku</text>' +
        '<text x="40" y="118" font-size="13" fill="#0f766e">80 : 20 = 8 : 2</text>',
        400, 136,
        "dzielenie z zerami"
      );
    }
    return svgWrap(
      '<text x="40" y="36" font-size="18" font-family="Georgia, serif">4 · 2 = 8</text>' +
      '<text x="40" y="64" font-size="18" font-family="Georgia, serif">4 · 2<tspan fill="#0f766e">0</tspan> = 8<tspan fill="#0f766e">0</tspan></text>' +
      '<text x="40" y="92" font-size="18" font-family="Georgia, serif">4 · 2<tspan fill="#0f766e">000</tspan> = 8<tspan fill="#0f766e">000</tspan></text>' +
      '<text x="40" y="120" font-size="13" fill="#57534e">zero na końcu czynnika → zero na końcu iloczynu</text>',
      400, 136,
      "mnożenie z zerami"
    );
  }

  function opsQueue(spec) {
    const items = spec.items || [];
    if (!items.length) return "";
    const n = items.length;
    const gap = 10;
    const boxW = Math.min(86, Math.floor((380 - gap * (n - 1)) / n));
    const total = n * boxW + (n - 1) * gap;
    const x0 = Math.round((400 - total) / 2);
    let inner = "";
    items.forEach(function (item, i) {
      const x = x0 + i * (boxW + gap);
      inner += '<rect x="' + x + '" y="18" width="' + boxW + '" height="62" rx="8" fill="#ccfbf1" stroke="#0f766e"/>' +
        '<text x="' + (x + boxW / 2) + '" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e">' +
        (item.n != null ? item.n : i + 1) + "</text>" +
        '<text x="' + (x + boxW / 2) + '" y="56" text-anchor="middle" font-size="11" fill="#1c1917">' +
        vizLabel(item.label) + "</text>" +
        (item.hint
          ? '<text x="' + (x + boxW / 2) + '" y="92" text-anchor="middle" font-size="10" fill="#57534e">' + vizLabel(item.hint) + "</text>"
          : "");
      if (i < n - 1) {
        inner += '<text x="' + (x + boxW + gap / 2) + '" y="54" text-anchor="middle" font-size="14" fill="#0f766e">→</text>';
      }
    });
    return svgWrap(inner, 400, 108, "kolejność wykonywania działań");
  }

  function exprPair(spec) {
    const L = spec.left || {};
    const R = spec.right || {};
    function col(x, side) {
      return '<text x="' + x + '" y="28" text-anchor="middle" font-size="16" font-family="Georgia, serif">' +
        (side.expr || "") + "</text>" +
        '<text x="' + x + '" y="58" text-anchor="middle" font-size="22" font-family="Georgia, serif" fill="#0f766e">' +
        (side.result != null ? side.result : "") + "</text>" +
        '<text x="' + x + '" y="82" text-anchor="middle" font-size="12" fill="#57534e">' +
        vizLabel(side.caption) + "</text>";
    }
    return svgWrap(
      col(100, L) +
      '<line x1="200" y1="16" x2="200" y2="90" stroke="#d6d3d1"/>' +
      col(300, R),
      400, 100,
      (L.expr || "") + "  vs  " + (R.expr || "")
    );
  }

  function geoLines(spec) {
    const mode = spec.mode || "all";
    function lineFig(x, caption, kind) {
      let inner = "";
      if (kind === "prosta") {
        inner += '<line x1="' + (x - 70) + '" y1="48" x2="' + (x + 70) + '" y2="48" stroke="#1c1917" stroke-width="2.5"/>' +
          '<polygon points="' + (x - 78) + ',48 ' + (x - 66) + ',44 ' + (x - 66) + ',52" fill="#1c1917"/>' +
          '<polygon points="' + (x + 78) + ',48 ' + (x + 66) + ',44 ' + (x + 66) + ',52" fill="#1c1917"/>' +
          '<circle cx="' + (x - 20) + '" cy="48" r="3.5" fill="#0f766e"/>' +
          '<circle cx="' + (x + 20) + '" cy="48" r="3.5" fill="#0f766e"/>';
      } else if (kind === "polprosta") {
        inner += '<line x1="' + (x - 40) + '" y1="48" x2="' + (x + 70) + '" y2="48" stroke="#1c1917" stroke-width="2.5"/>' +
          '<polygon points="' + (x + 78) + ',48 ' + (x + 66) + ',44 ' + (x + 66) + ',52" fill="#1c1917"/>' +
          '<circle cx="' + (x - 40) + '" cy="48" r="5" fill="#0f766e"/>';
      } else {
        inner += '<line x1="' + (x - 40) + '" y1="48" x2="' + (x + 40) + '" y2="48" stroke="#1c1917" stroke-width="2.5"/>' +
          '<circle cx="' + (x - 40) + '" cy="48" r="5" fill="#0f766e"/>' +
          '<circle cx="' + (x + 40) + '" cy="48" r="5" fill="#0f766e"/>';
      }
      inner += '<text x="' + x + '" y="88" text-anchor="middle" font-size="13" fill="#57534e">' + vizLabel(caption) + "</text>";
      return inner;
    }
    if (mode === "prosta") return svgWrap(lineFig(200, spec.caption || { pl: "prosta", ua: "пряма" }, "prosta"), 400, 110, "prosta");
    if (mode === "polprosta") return svgWrap(lineFig(200, spec.caption || { pl: "półprosta", ua: "півпряма" }, "polprosta"), 400, 110, "półprosta");
    if (mode === "odcinek") return svgWrap(lineFig(200, spec.caption || { pl: "odcinek", ua: "відрізок" }, "odcinek"), 400, 110, "odcinek");
    return svgWrap(
      lineFig(70, { pl: "prosta", ua: "пряма" }, "prosta") +
      lineFig(200, { pl: "półprosta", ua: "півпряма" }, "polprosta") +
      lineFig(330, { pl: "odcinek", ua: "відрізок" }, "odcinek"),
      400, 110,
      "prosta, półprosta, odcinek"
    );
  }

  function triangleFig(spec) {
    const kind = spec.triangle || "scalene";
    let pts = "60,140 200,28 340,140";
    if (kind === "right") pts = "70,150 70,30 310,150";
    if (kind === "iso") pts = "80,150 200,28 320,150";
    if (kind === "equilateral") pts = "70,150 200,24 330,150";
    if (kind === "obtuse") pts = "40,120 280,30 340,150";
    let extra = "";
    if (kind === "right") {
      extra += '<rect x="70" y="132" width="18" height="18" fill="none" stroke="#0f766e" stroke-width="2"/>';
    }
    if (spec.height) {
      extra += '<line x1="200" y1="28" x2="200" y2="140" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<text x="214" y="90" font-size="13" fill="#b45309">h</text>';
    }
    const label = spec.label ? vizLabel(spec.label) : "";
    return svgWrap(
      '<polygon points="' + pts + '" fill="#ccfbf1" fill-opacity=".55" stroke="#0f766e" stroke-width="2.5"/>' +
      extra +
      (label ? '<text x="200" y="178" text-anchor="middle" font-size="14" fill="#57534e">' + label + "</text>" : ""),
      400, 190,
      label || "trójkąt"
    );
  }

  function quadFig(spec) {
    const kind = spec.quad || "parallelogram";
    let pts = "70,120 150,40 340,40 260,120";
    if (kind === "rectangle") pts = "70,40 330,40 330,140 70,140";
    if (kind === "square") pts = "110,30 290,30 290,160 110,160";
    if (kind === "rhombus") pts = "200,24 330,90 200,156 70,90";
    if (kind === "trapezoid") pts = "110,44 290,44 350,150 50,150";
    if (kind === "kite") pts = "200,24 320,90 200,170 80,90";
    let extra = "";
    if (spec.height) {
      extra += '<line x1="150" y1="40" x2="150" y2="120" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<text x="158" y="86" font-size="13" fill="#b45309">h</text>';
    }
    const label = spec.label ? vizLabel(spec.label) : "";
    return svgWrap(
      '<polygon points="' + pts + '" fill="#fde68a" fill-opacity=".45" stroke="#b45309" stroke-width="2.5"/>' + extra +
      (label ? '<text x="200" y="184" text-anchor="middle" font-size="14" fill="#57534e">' + label + "</text>" : ""),
      400, 198,
      label || kind
    );
  }

  function netBoxes(spec) {
    const variant = spec.variant || "true";
    const boxes = spec.boxes || [
      { x: 90, y: 58, w: 70, h: 46 },
      { x: 160, y: 12, w: 70, h: 46 },
      { x: 160, y: 58, w: 70, h: 46 },
      { x: 160, y: 104, w: 70, h: 46 },
      { x: 230, y: 58, w: 70, h: 46 },
      { x: 300, y: 58, w: 70, h: 46 }
    ];
    let inner = "";
    boxes.forEach(function (b) {
      inner += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h +
        '" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>';
    });
    if (variant === "false") {
      inner += '<rect x="20" y="12" width="70" height="46" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>';
    }
    const label = spec.label ? vizLabel(spec.label) : "";
    return svgWrap(
      inner + (label ? '<text x="200" y="178" text-anchor="middle" font-size="13" fill="#57534e">' + label + "</text>" : ""),
      400, 190,
      label || "siatka"
    );
  }

  function oneDriveContentUrl(shareUrl) {
    try {
      const b64 = btoa(shareUrl).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      return "https://api.onedrive.com/v1.0/shares/u!" + b64 + "/root/content";
    } catch (e) {
      return "";
    }
  }

  function isSharePageUrl(url) {
    return /^https?:\/\/(1drv\.ms|onedrive\.live\.com|photos\.onedrive\.com)\//i.test(url);
  }

  function githubRawUrl(url) {
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./i, "").toLowerCase();
      if (host === "raw.githubusercontent.com") return u.href.split("#")[0];
      if (host !== "github.com") return "";
      const parts = u.pathname.replace(/^\/+/, "").split("/");
      if (parts.length >= 5 && (parts[2] === "blob" || parts[2] === "raw")) {
        const filePath = parts.slice(4).join("/");
        if (!filePath) return "";
        return "https://raw.githubusercontent.com/" + parts[0] + "/" + parts[1] + "/" +
          parts[3] + "/" + filePath;
      }
    } catch (e) {}
    return "";
  }

  function mediaCandidates(spec) {
    const raw = spec.url || (spec.key ? window.EduMostAssetUrl(spec.key) : "") || "";
    if (!raw) return [];
    const out = [];
    const gh = githubRawUrl(raw);
    if (gh) out.push(gh);
    if (raw && raw !== gh) out.push(raw);
    // 1drv.ms?width=&height= is already an embed thumbnail — use it as-is.
    if (isSharePageUrl(raw) && !/[?&]width=/i.test(raw)) {
      const converted = oneDriveContentUrl(raw);
      if (converted) out.push(converted);
    }
    const local = spec.file && /^\.\.?\/./.test(String(spec.file))
      ? String(spec.file)
      : "";
    if (local && out.indexOf(local) < 0 && local !== raw) out.push(local);
    return out.filter(function (u, i, arr) { return u && arr.indexOf(u) === i; });
  }

  function mediaMetaHtml(spec, isMap) {
    const title = vizText(spec.title) || vizText(spec.caption);
    const file = spec.file ? vizEsc(String(spec.file)) : "";
    const url = spec.url ? vizEsc(String(spec.url)) : "";
    const prompt = vizText(spec.prompt);
    const promptLabel = isMap ? "MAP PROMPT" : "IMAGE PROMPT";
    return '<div class="hist-placeholder ' + (isMap ? "is-map" : "is-image") + '">' +
      '<p class="hist-ph-tag">' + vizEsc(isMap ? "[MAP_PLACEHOLDER]" : "[IMAGE_PLACEHOLDER]") + "</p>" +
      (title ? '<p class="hist-ph-title">' + vizEsc(title) + "</p>" : "") +
      (file ? '<p class="hist-ph-prompt"><strong>plik:</strong> ' + file + "</p>" : "") +
      (prompt ? '<p class="hist-ph-prompt"><strong>' + vizEsc(promptLabel) + ":</strong> " + vizEsc(prompt) + "</p>" : "") +
      (url ? '<p class="hist-ph-prompt"><strong>GitHub:</strong> ' + url + "</p>" : "") +
      "</div>";
  }

  function mediaFailHtml(spec) {
    return mediaMetaHtml(spec, spec.kind === "map-placeholder");
  }

  function mediaPlaceholder(spec) {
    const urls = mediaCandidates(spec);
    if (urls.length) return fromAsset(spec);
    return mediaMetaHtml(spec, spec.kind === "map-placeholder");
  }

  function fromAsset(spec) {
    const urls = mediaCandidates(spec);
    if (!urls.length) return "";
    const alt = vizText(spec.alt) || vizText(spec.title) || "";
    const payload = encodeURIComponent(JSON.stringify({
      urls: urls,
      fail: mediaFailHtml(spec)
    }));
    return '<img class="viz-img" src="' + urls[0].replace(/"/g, "&quot;") + '" alt="' +
      String(alt).replace(/"/g, "&quot;") + '" referrerpolicy="no-referrer" data-edumost-media="' + payload +
      '" onerror="EduMostSvg.mediaError(this)" role="button" tabindex="0">';
  }

  function mediaError(img) {
    if (!img) return;
    let data = { urls: [], fail: "" };
    try {
      data = JSON.parse(decodeURIComponent(img.getAttribute("data-edumost-media") || "")) || data;
    } catch (e) {}
    const urls = data.urls || [];
    const current = img.getAttribute("src");
    const next = urls.filter(function (u) { return u && u !== current; })[0];
    if (next) {
      img.setAttribute("src", next);
      img.setAttribute("data-edumost-media", encodeURIComponent(JSON.stringify({
        urls: urls.filter(function (u) { return u !== current; }),
        fail: data.fail || ""
      })));
      return;
    }
    const wrap = document.createElement("div");
    wrap.innerHTML = data.fail || "";
    if (wrap.firstChild) img.replaceWith(wrap.firstChild);
    else img.remove();
  }

  function youtubeId(spec) {
    const raw = String((spec && (spec.id || spec.url || spec.youtube)) || "").trim();
    const m = raw.match(/(?:youtu\.be\/|youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/|[&?]v=)([A-Za-z0-9_-]{11})/);
    if (m) return m[1];
    if (/^[A-Za-z0-9_-]{11}$/.test(raw)) return raw;
    return "";
  }

  function youtubeEmbed(spec) {
    const id = youtubeId(spec);
    if (!id) return "";
    const title = vizText(spec.title) || vizText(spec.alt) || "YouTube";
    return '<div class="viz-video">' +
      '<iframe src="https://www.youtube.com/embed/' + id +
      '" title="' + vizEsc(title).replace(/"/g, "&quot;") +
      '" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"' +
      ' referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>' +
      "</div>";
  }

  function wrapLabel(s, max) {
    s = String(s || "").trim();
    if (!s) return [""];
    if (s.length <= max) return [s];
    const dash = s.indexOf(" — ");
    if (dash > 0 && dash <= max + 6) return [s.slice(0, dash), s.slice(dash + 3)];
    const space = s.lastIndexOf(" ", max);
    if (space > 3) return [s.slice(0, space), s.slice(space + 1)];
    return [s.slice(0, max), s.slice(max)];
  }

  function treeBox(x, y, w, h, lines, variant) {
    const fill = variant === "root" ? "#0f766e" : variant === "aside" ? "#fafaf9" : "#ffffff";
    const stroke = variant === "aside" ? "#a8a29e" : "#0f766e";
    const textFill = variant === "root" ? "#ffffff" : "#1c1917";
    const dash = variant === "aside" ? ' stroke-dasharray="5 4"' : "";
    const fs = lines.length > 1 || (lines[0] && lines[0].length > 18) ? 12 : 13;
    const startY = y + h / 2 - ((lines.length - 1) * 7);
    let texts = "";
    lines.forEach(function (line, i) {
      texts += '<text x="' + (x + w / 2) + '" y="' + (startY + i * 14) +
        '" text-anchor="middle" dominant-baseline="middle" font-size="' + fs +
        '" font-family="Georgia, serif" fill="' + textFill + '">' + vizEsc(line) + "</text>";
    });
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
      '" rx="8" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.75"' + dash + "/>" + texts;
  }

  function classLadder(spec) {
    const items = spec.items || [];
    const w = 280;
    const boxH = 40;
    const gap = 22;
    const x = 40;
    let y = 16;
    let inner = "";
    items.forEach(function (item, i) {
      const label = vizText(item);
      inner += treeBox(x, y, w, boxH, wrapLabel(label, 28), i === 0 ? "root" : "item");
      if (i < items.length - 1) {
        const xMid = x + w / 2;
        inner += '<line x1="' + xMid + '" y1="' + (y + boxH) + '" x2="' + xMid + '" y2="' + (y + boxH + gap) +
          '" stroke="#0f766e" stroke-width="2"/>';
        inner += '<polygon points="' + xMid + "," + (y + boxH + gap) + " " + (xMid - 5) + "," +
          (y + boxH + gap - 8) + " " + (xMid + 5) + "," + (y + boxH + gap - 8) + '" fill="#0f766e"/>';
      }
      y += boxH + gap;
    });
    const caption = vizText(spec.caption);
    if (caption) {
      inner += '<text x="' + (x + w / 2) + '" y="' + (y + 8) +
        '" text-anchor="middle" font-size="12" fill="#57534e">' + vizEsc(caption) + "</text>";
      y += 22;
    }
    return svgWrap(inner, 360, y + 8, vizText(spec.alt) || vizText(spec.root) || "schemat podziału");
  }

  function classFork(spec) {
    const root = vizText(spec.root);
    const items = spec.items || [];
    const aside = spec.aside ? vizText(spec.aside) : "";
    const n = Math.max(1, items.length);
    const W = aside ? 760 : 700;
    const pad = 16;
    const gap = 10;
    const usable = W - pad * 2 - (aside ? 130 : 0);
    const childW = Math.min(150, Math.max(88, (usable - gap * (n - 1)) / n));
    const childH = 48;
    const rootW = Math.min(240, Math.max(140, root.length * 8 + 24));
    const rootH = 40;
    const rootX = pad + (usable - rootW) / 2;
    const rootY = 14;
    const childY = 110;
    const totalChildren = n * childW + (n - 1) * gap;
    const startX = pad + (usable - totalChildren) / 2;
    const rootCx = rootX + rootW / 2;
    const rootBy = rootY + rootH;
    let inner = treeBox(rootX, rootY, rootW, rootH, wrapLabel(root, 26), "root");
    items.forEach(function (item, i) {
      const x = startX + i * (childW + gap);
      const cx = x + childW / 2;
      inner += '<line x1="' + rootCx + '" y1="' + rootBy + '" x2="' + cx + '" y2="' + childY +
        '" stroke="#0f766e" stroke-width="1.75"/>';
      inner += treeBox(x, childY, childW, childH, wrapLabel(vizText(item), 16), "item");
    });
    let h = childY + childH + 16;
    if (aside) {
      const ax = W - 124;
      const ay = childY;
      inner += '<line x1="' + (pad + usable) + '" y1="' + (rootY + rootH / 2) + '" x2="' + ax +
        '" y2="' + (ay + childH / 2) + '" stroke="#a8a29e" stroke-width="1.5" stroke-dasharray="5 4"/>';
      inner += treeBox(ax, ay, 112, childH, wrapLabel(aside, 12), "aside");
    }
    const caption = vizText(spec.caption);
    if (caption) {
      inner += '<text x="' + (W / 2) + '" y="' + (h + 6) +
        '" text-anchor="middle" font-size="12" fill="#57534e">' + vizEsc(caption) + "</text>";
      h += 22;
    }
    return svgWrap(inner, W, h + 8, vizText(spec.alt) || root || "schemat podziału");
  }

  function classNested(spec) {
    const root = vizText(spec.root);
    const groups = spec.groups || [];
    const gN = Math.max(1, groups.length);
    const W = 720;
    const pad = 16;
    const gap = 14;
    const gW = Math.min(220, (W - pad * 2 - gap * (gN - 1)) / gN);
    const rootW = Math.min(260, Math.max(160, root.length * 8 + 20));
    const rootH = 40;
    const rootX = (W - rootW) / 2;
    const rootY = 12;
    const groupY = 92;
    const groupH = 36;
    const childH = 40;
    const childGap = 8;
    const maxKids = groups.reduce(function (m, g) {
      return Math.max(m, (g.items || []).length);
    }, 1);
    const kidsY = groupY + groupH + 28;
    const totalG = gN * gW + (gN - 1) * gap;
    const gStart = (W - totalG) / 2;
    const rootCx = rootX + rootW / 2;
    let inner = treeBox(rootX, rootY, rootW, rootH, wrapLabel(root, 28), "root");
    groups.forEach(function (g, i) {
      const gx = gStart + i * (gW + gap);
      const gcx = gx + gW / 2;
      inner += '<line x1="' + rootCx + '" y1="' + (rootY + rootH) + '" x2="' + gcx + '" y2="' + groupY +
        '" stroke="#0f766e" stroke-width="1.75"/>';
      inner += treeBox(gx, groupY, gW, groupH, wrapLabel(vizText(g.title || g), 18), "root");
      (g.items || []).forEach(function (item, k) {
        const cy = kidsY + k * (childH + childGap);
        inner += '<line x1="' + gcx + '" y1="' + (groupY + groupH) + '" x2="' + gcx + '" y2="' + cy +
          '" stroke="#0f766e" stroke-width="1.5"/>';
        inner += treeBox(gx + 6, cy, gW - 12, childH, wrapLabel(vizText(item), 16), "item");
      });
    });
    const h = kidsY + maxKids * (childH + childGap) + 8;
    const caption = vizText(spec.caption);
    let extra = 0;
    if (caption) {
      inner += '<text x="' + (W / 2) + '" y="' + (h + 4) +
        '" text-anchor="middle" font-size="12" fill="#57534e">' + vizEsc(caption) + "</text>";
      extra = 20;
    }
    return svgWrap(inner, W, h + extra, vizText(spec.alt) || root || "schemat podziału");
  }

  function classTree(spec) {
    const layout = spec.layout || "fork";
    if (layout === "ladder") return classLadder(spec);
    if (layout === "nested") return classNested(spec);
    return classFork(spec);
  }

  function render(spec) {
    if (!spec) return "";
    if (spec.kind === "asset" || spec.kind === "image") return fromAsset(spec);
    if (spec.kind === "power") return power(spec);
    if (spec.kind === "power-grow") return powerGrow(spec);
    if (spec.kind === "power-labeled") return powerLabeled(spec);
    if (spec.kind === "power-false") return powerFalse(spec);
    if (spec.kind === "add-reorder") return addReorder(spec);
    if (spec.kind === "add-groups") return addGroups(spec);
    if (spec.kind === "split-rect") return splitRect(spec);
    if (spec.kind === "near-multiply") return nearMultiply(spec);
    if (spec.kind === "split-divide") return splitDivide(spec);
    if (spec.kind === "zeros-scale") return zerosScale(spec);
    if (spec.kind === "ops-queue") return opsQueue(spec);
    if (spec.kind === "expr-pair") return exprPair(spec);
    if (spec.kind === "fraction-bar") return fractionBar(spec);
    if (spec.kind === "angle") return angle(spec);
    if (spec.kind === "number-line") return numberLine(spec);
    if (spec.kind === "grid") return grid(spec);
    if (spec.kind === "geo-lines") return geoLines(spec);
    if (spec.kind === "triangle") return triangleFig(spec);
    if (spec.kind === "quad") return quadFig(spec);
    if (spec.kind === "net") return netBoxes(spec);
    if (spec.kind === "youtube") return youtubeEmbed(spec);
    if (spec.kind === "class-tree" || spec.kind === "tree") return classTree(spec);
    if (spec.kind === "map-placeholder" || spec.kind === "image-placeholder") {
      return mediaPlaceholder(spec);
    }
    return "";
  }

  function closeLightbox() {
    const box = document.getElementById("edumost-lightbox");
    if (!box) return;
    box.hidden = true;
    document.body.classList.remove("viz-lightbox-open");
  }

  function openLightbox(img) {
    if (!img || !img.getAttribute("src")) return;
    let box = document.getElementById("edumost-lightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "edumost-lightbox";
      box.className = "viz-lightbox";
      box.hidden = true;
      box.innerHTML = '<img class="viz-lightbox-img" alt="">';
      box.addEventListener("click", closeLightbox);
      document.body.appendChild(box);
    }
    const big = box.querySelector("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.getAttribute("alt") || "";
    box.hidden = false;
    document.body.classList.add("viz-lightbox-open");
  }

  function toggleLightbox(img) {
    const box = document.getElementById("edumost-lightbox");
    if (box && !box.hidden) closeLightbox();
    else openLightbox(img);
  }

  document.addEventListener("click", function (ev) {
    const t = ev.target;
    if (!t || !t.closest) return;
    const img = t.closest("img.viz-img");
    if (!img) return;
    ev.preventDefault();
    toggleLightbox(img);
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "Enter" && ev.key !== " " && ev.key !== "Escape") return;
    const box = document.getElementById("edumost-lightbox");
    const open = box && !box.hidden;
    if (ev.key === "Escape") {
      if (open) {
        ev.preventDefault();
        closeLightbox();
      }
      return;
    }
    const t = ev.target;
    if (t && t.classList && t.classList.contains("viz-img")) {
      ev.preventDefault();
      toggleLightbox(t);
    }
  });

  g.EduMostSvg = { render: render, mediaError: mediaError, closeLightbox: closeLightbox };
})(window);
