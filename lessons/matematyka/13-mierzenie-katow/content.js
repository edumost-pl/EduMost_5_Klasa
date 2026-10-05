function em(text) {
  return { text: text, emphasis: true };
}

function ph(file, titlePl, titleUa, prompt) {
  var path = "./" + file;
  return {
    kind: "image-placeholder",
    file: path,
    url: path,
    title: { pl: titlePl, ua: titleUa },
    alt: { pl: titlePl, ua: titleUa },
    prompt: prompt
  };
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Angle / protractor SVG helper */
function ang(kind, opt) {
  opt = opt || {};
  var mark = opt.mark || "";
  var W = 440;
  var H = 180;
  var svg = "";

  function ray(x1, y1, x2, y2, color) {
    color = color || "#1c1917";
    return (
      '<line x1="' +
      x1 +
      '" y1="' +
      y1 +
      '" x2="' +
      x2 +
      '" y2="' +
      y2 +
      '" stroke="' +
      color +
      '" stroke-width="3" stroke-linecap="round"/>'
    );
  }
  function arrow(x, y, dx, dy, color) {
    color = color || "#1c1917";
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len;
    var uy = dy / len;
    var px = -uy;
    var py = ux;
    var bx = x - ux * 12;
    var by = y - uy * 12;
    return (
      '<polygon points="' +
      x +
      "," +
      y +
      " " +
      (bx + px * 5) +
      "," +
      (by + py * 5) +
      " " +
      (bx - px * 5) +
      "," +
      (by - py * 5) +
      '" fill="' +
      color +
      '"/>'
    );
  }
  function dot(x, y, label) {
    return (
      '<circle cx="' +
      x +
      '" cy="' +
      y +
      '" r="7" fill="#0f766e"/>' +
      (label
        ? '<text x="' +
          x +
          '" y="' +
          (y + 26) +
          '" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">' +
          esc(label) +
          "</text>"
        : "")
    );
  }

  if (kind === "three") {
    H = 150;
    svg =
      ray(40, 110, 110, 50, "#dc2626") +
      ray(40, 110, 120, 110, "#dc2626") +
      dot(40, 110) +
      '<text x="70" y="140" text-anchor="middle" font-size="12" fill="#dc2626">ostry</text>' +
      ray(180, 110, 180, 40, "#0f766e") +
      ray(180, 110, 260, 110, "#0f766e") +
      '<rect x="180" y="90" width="16" height="16" fill="none" stroke="#0f766e" stroke-width="2"/>' +
      dot(180, 110) +
      '<text x="210" y="140" text-anchor="middle" font-size="12" fill="#0f766e">prosty</text>' +
      ray(300, 110, 270, 50, "#ea580c") +
      ray(300, 110, 400, 110, "#ea580c") +
      dot(300, 110) +
      '<text x="340" y="140" text-anchor="middle" font-size="12" fill="#ea580c">rozwarty</text>';
  } else if (kind === "acute40") {
    svg =
      ray(100, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(100, 140, 250, 55) +
      arrow(250, 55, 1, -0.6) +
      '<path d="M 170 140 A 70 70 0 0 0 155 95" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      dot(100, 140, "A") +
      (opt.show
        ? '<text x="175" y="115" font-size="18" font-weight="700" fill="#b45309">40°</text>'
        : '<text x="165" y="115" font-size="16" fill="#78716c">α = ?</text>');
  } else if (kind === "acute30") {
    svg =
      ray(100, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(100, 140, 270, 70) +
      arrow(270, 70, 1, -0.4) +
      '<path d="M 170 140 A 70 70 0 0 0 162 105" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      dot(100, 140, "A") +
      (opt.show
        ? '<text x="175" y="120" font-size="18" font-weight="700" fill="#b45309">30°</text>'
        : "");
  } else if (kind === "clock") {
    /* Clock face: opt.hour = 2|3|4 at :00 — minute hand at 12 */
    W = 280;
    H = 260;
    var hour = opt.hour || 3;
    var cx = 140;
    var cy = 125;
    var R = 95;
    function hand(degFrom12, len, width, color) {
      var rad = (degFrom12 * Math.PI) / 180;
      var x2 = cx + len * Math.sin(rad);
      var y2 = cy - len * Math.cos(rad);
      return (
        '<line x1="' +
        cx +
        '" y1="' +
        cy +
        '" x2="' +
        x2 +
        '" y2="' +
        y2 +
        '" stroke="' +
        color +
        '" stroke-width="' +
        width +
        '" stroke-linecap="round"/>'
      );
    }
    svg =
      '<circle cx="' +
      cx +
      '" cy="' +
      cy +
      '" r="' +
      R +
      '" fill="#fffef7" stroke="#0f766e" stroke-width="3"/>';
    var nums = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (var i = 0; i < 12; i++) {
      var n = nums[i];
      var a = (i * 30 * Math.PI) / 180;
      var nr = R - 18;
      var nx = cx + nr * Math.sin(a);
      var ny = cy - nr * Math.cos(a);
      svg +=
        '<text x="' +
        nx +
        '" y="' +
        (ny + 5) +
        '" text-anchor="middle" font-size="14" font-weight="700" fill="#1c1917">' +
        n +
        "</text>";
      var tr = R - 4;
      var tx1 = cx + (R - 10) * Math.sin(a);
      var ty1 = cy - (R - 10) * Math.cos(a);
      var tx2 = cx + tr * Math.sin(a);
      var ty2 = cy - tr * Math.cos(a);
      svg +=
        '<line x1="' +
        tx1 +
        '" y1="' +
        ty1 +
        '" x2="' +
        tx2 +
        '" y2="' +
        ty2 +
        '" stroke="#a8a29e" stroke-width="2"/>';
    }
    /* shaded angle between 12 and hour */
    var hourDeg = hour * 30;
    var large = hourDeg > 180 ? 1 : 0;
    var hx = cx + 55 * Math.sin((hourDeg * Math.PI) / 180);
    var hy = cy - 55 * Math.cos((hourDeg * Math.PI) / 180);
    svg +=
      '<path d="M ' +
      cx +
      " " +
      (cy - 55) +
      " A 55 55 0 " +
      large +
      " 1 " +
      hx +
      " " +
      hy +
      ' L ' +
      cx +
      " " +
      cy +
      ' Z" fill="#fed7aa" fill-opacity="0.7" stroke="#ea580c" stroke-width="1.5"/>';
    svg += hand(0, 70, 3, "#0f766e"); /* minute → 12 */
    svg += hand(hourDeg, 50, 5, "#1c1917"); /* hour */
    svg +=
      '<circle cx="' +
      cx +
      '" cy="' +
      cy +
      '" r="5" fill="#dc2626"/>';
    svg +=
      '<text x="' +
      cx +
      '" y="245" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">' +
      hour +
      ":00</text>";
  } else if (kind === "acute60") {
    svg =
      ray(100, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(100, 140, 250, 55) +
      arrow(250, 55, 1, -0.6) +
      '<path d="M 170 140 A 70 70 0 0 0 150 90" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      dot(100, 140, "A") +
      (opt.show
        ? '<text x="175" y="112" font-size="18" font-weight="700" fill="#b45309">60°</text>'
        : "");
  } else if (kind === "right90") {
    svg =
      ray(120, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(120, 140, 120, 30) +
      arrow(120, 30, 0, -1) +
      '<rect x="120" y="116" width="24" height="24" fill="none" stroke="#0f766e" stroke-width="2.5"/>' +
      dot(120, 140, "A") +
      (opt.show
        ? '<text x="160" y="100" font-size="18" font-weight="700" fill="#b45309">90°</text>'
        : "");
  } else if (kind === "obtuse120") {
    svg =
      ray(140, 140, 380, 140) +
      arrow(380, 140, 1, 0) +
      ray(140, 140, 70, 55) +
      arrow(70, 55, -0.7, -1) +
      '<path d="M 210 140 A 70 70 0 0 0 100 95" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>' +
      dot(140, 140, "A") +
      (opt.show
        ? '<text x="175" y="105" font-size="18" font-weight="700" fill="#b45309">120°</text>'
        : "");
  } else if (kind === "acute65") {
    svg =
      ray(100, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(100, 140, 240, 50) +
      arrow(240, 50, 1, -0.7) +
      '<path d="M 170 140 A 70 70 0 0 0 150 90" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      dot(100, 140, "A") +
      (opt.show
        ? '<text x="175" y="112" font-size="18" font-weight="700" fill="#b45309">65°</text>'
        : '<text x="165" y="112" font-size="16" fill="#78716c">?</text>');
  } else if (kind === "draw60") {
    H = 210;
    svg =
      '<path d="M 80 155 A 140 140 0 0 1 360 155" fill="#f0fdfa" stroke="#0f766e" stroke-width="2"/>' +
      '<line x1="80" y1="155" x2="360" y2="155" stroke="#0f766e" stroke-width="1.5"/>' +
      '<text x="95" y="148" font-size="12" fill="#0f766e">0°</text>' +
      '<text x="210" y="48" font-size="12" fill="#0f766e">90°</text>' +
      '<text x="325" y="148" font-size="12" fill="#0f766e">180°</text>' +
      ray(220, 155, 390, 155) +
      arrow(390, 155, 1, 0) +
      ray(220, 155, 295, 70) +
      arrow(295, 70, 0.7, -0.9) +
      '<circle cx="290" cy="78" r="6" fill="#b45309"/>' +
      '<text x="305" y="75" font-size="14" font-weight="700" fill="#b45309">60°</text>' +
      '<circle cx="220" cy="155" r="7" fill="#dc2626"/>' +
      '<text x="220" y="185" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">A</text>' +
      '<text x="220" y="202" text-anchor="middle" font-size="12" fill="#0f766e">kąt 60° — gotowe!</text>';
  } else if (kind === "wrong60") {
    svg =
      ray(100, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(100, 140, 250, 70) +
      arrow(250, 70, 1, -0.5) +
      '<text x="200" y="100" font-size="15" fill="#dc2626">zrobiono 60°…</text>' +
      '<text x="200" y="50" font-size="14" fill="#78716c">miało być 120°</text>' +
      dot(100, 140, "A");
  } else if (kind === "place-ok") {
    H = 210;
    svg =
      '<path d="M 80 155 A 140 140 0 0 1 360 155" fill="#ecfdf5" stroke="#0f766e" stroke-width="2"/>' +
      '<line x1="80" y1="155" x2="360" y2="155" stroke="#0f766e" stroke-width="1.5"/>' +
      '<text x="95" y="150" font-size="12" fill="#0f766e">0°</text>' +
      '<text x="210" y="50" font-size="12" fill="#0f766e">90°</text>' +
      '<text x="330" y="150" font-size="12" fill="#0f766e">180°</text>' +
      ray(220, 155, 380, 155) +
      ray(220, 155, 300, 55) +
      '<circle cx="220" cy="155" r="7" fill="#dc2626"/>' +
      '<text x="220" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#0f766e">A</text>';
  } else if (kind === "draw12") {
    /* First arm + protractor at A — no second ray yet */
    H = 210;
    svg =
      '<path d="M 80 155 A 140 140 0 0 1 360 155" fill="#f0fdfa" stroke="#0f766e" stroke-width="2.5"/>' +
      '<line x1="80" y1="155" x2="360" y2="155" stroke="#0f766e" stroke-width="1.5"/>' +
      '<text x="95" y="148" font-size="12" fill="#0f766e">0°</text>' +
      '<text x="210" y="48" font-size="12" fill="#0f766e">90°</text>' +
      '<text x="325" y="148" font-size="12" fill="#0f766e">180°</text>' +
      '<text x="300" y="95" font-size="12" fill="#b45309">60°</text>' +
      '<circle cx="295" cy="100" r="3" fill="#b45309" opacity="0.45"/>' +
      ray(220, 155, 390, 155) +
      arrow(390, 155, 1, 0) +
      '<circle cx="220" cy="155" r="7" fill="#dc2626"/>' +
      '<text x="220" y="185" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">A</text>' +
      '<text x="220" y="202" text-anchor="middle" font-size="12" fill="#78716c">środek kątomierza w A · 0° na ramieniu</text>';
  } else if (kind === "place-abc") {
    /* Three placements side by side — no spoilers */
    W = 640;
    H = 220;
    function mini(ox, label, mode) {
      var cx = ox + 90;
      var cy = 150;
      var g =
        '<rect x="' +
        ox +
        '" y="8" width="200" height="204" rx="10" fill="#fffef7" stroke="#e7e0d2"/>' +
        '<text x="' +
        (ox + 100) +
        '" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1c1917">' +
        label +
        "</text>" +
        '<path d="M ' +
        (ox + 20) +
        " 150 A 70 70 0 0 1 " +
        (ox + 160) +
        ' 150" fill="#f0fdfa" stroke="#0f766e" stroke-width="2"/>' +
        '<line x1="' +
        (ox + 20) +
        '" y1="150" x2="' +
        (ox + 160) +
        '" y2="150" stroke="#0f766e" stroke-width="1.5"/>' +
        '<text x="' +
        (ox + 28) +
        '" y="145" font-size="10" fill="#0f766e">0°</text>' +
        '<text x="' +
        (ox + 88) +
        '" y="88" font-size="10" fill="#0f766e">90°</text>' +
        '<text x="' +
        (ox + 148) +
        '" y="145" font-size="10" fill="#0f766e">180°</text>';
      /* protractor center mark (cross) */
      g +=
        '<circle cx="' +
        cx +
        '" cy="' +
        cy +
        '" r="3" fill="#0f766e"/>';
      if (mode === "a") {
        /* vertex shifted right — NOT on center */
        g +=
          '<line x1="' +
          (cx + 28) +
          '" y1="' +
          cy +
          '" x2="' +
          (ox + 185) +
          '" y2="' +
          cy +
          '" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<line x1="' +
          (cx + 28) +
          '" y1="' +
          cy +
          '" x2="' +
          (cx + 55) +
          '" y2="70" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<circle cx="' +
          (cx + 28) +
          '" cy="' +
          cy +
          '" r="6" fill="#dc2626"/>' +
          '<text x="' +
          (ox + 100) +
          '" y="195" text-anchor="middle" font-size="11" fill="#78716c">wierzchołek ≠ środek</text>';
      } else if (mode === "b") {
        /* vertex on center, but arm NOT on 0° baseline — tilted */
        g +=
          '<line x1="' +
          cx +
          '" y1="' +
          cy +
          '" x2="' +
          (ox + 175) +
          '" y2="125" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<line x1="' +
          cx +
          '" y1="' +
          cy +
          '" x2="' +
          (cx + 40) +
          '" y2="75" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<circle cx="' +
          cx +
          '" cy="' +
          cy +
          '" r="6" fill="#dc2626"/>' +
          '<text x="' +
          (ox + 100) +
          '" y="195" text-anchor="middle" font-size="11" fill="#78716c">0° nie na ramieniu</text>';
      } else {
        /* correct: center = vertex, one arm on 0° baseline */
        g +=
          '<line x1="' +
          cx +
          '" y1="' +
          cy +
          '" x2="' +
          (ox + 185) +
          '" y2="' +
          cy +
          '" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<line x1="' +
          cx +
          '" y1="' +
          cy +
          '" x2="' +
          (cx + 45) +
          '" y2="75" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>' +
          '<circle cx="' +
          cx +
          '" cy="' +
          cy +
          '" r="6" fill="#dc2626"/>' +
          '<text x="' +
          (ox + 100) +
          '" y="195" text-anchor="middle" font-size="11" fill="#78716c">środek + 0° OK</text>';
      }
      return g;
    }
    svg = mini(10, "A", "a") + mini(220, "B", "b") + mini(430, "C", "c");
  } else if (kind === "protractor") {
    H = 200;
    svg =
      '<path d="M 60 170 A 160 160 0 0 1 380 170" fill="#f0fdfa" stroke="#0f766e" stroke-width="2.5"/>' +
      '<line x1="60" y1="170" x2="380" y2="170" stroke="#0f766e" stroke-width="2"/>' +
      '<circle cx="220" cy="170" r="5" fill="#b45309"/>' +
      '<text x="70" y="160" font-size="11" fill="#0f766e">0°</text>' +
      '<text x="70" y="188" font-size="11" fill="#78716c">180°</text>' +
      '<text x="210" y="50" font-size="11" fill="#0f766e">90°</text>' +
      '<text x="340" y="160" font-size="11" fill="#0f766e">180°</text>' +
      '<text x="330" y="188" font-size="11" fill="#78716c">0°</text>' +
      '<text x="220" y="110" text-anchor="middle" font-size="13" fill="#b45309">dwie skale!</text>';
  }

  if (mark) {
    /* Extra caption only when figure has no built-in bottom label */
    var hasOwnCaption =
      kind === "draw12" || kind === "draw60" || kind === "place-abc";
    if (!hasOwnCaption) {
      H = Math.max(H, 200);
      svg +=
        '<text x="' +
        W / 2 +
        '" y="' +
        (H - 8) +
        '" text-anchor="middle" font-size="13" fill="#78716c">' +
        esc(mark) +
        "</text>";
    }
  }

  return {
    html:
      '<div class="polish-board" style="padding:0.5rem 0.75rem">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
      W +
      '" height="' +
      H +
      '" viewBox="0 0 ' +
      W +
      " " +
      H +
      '" aria-hidden="true">' +
      svg +
      "</svg></div>"
  };
}

window.EduMostLessonContent = {
  blocks: [
    /* 1 */
    {
      type: "intro",
      heading: {
        pl: "🤔 A można poznać dokładnie?",
        ua: "🤔 А можна дізнатися точно?"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Potrafisz już rozpoznać rodzaj kąta.",
              "Ale czy potrafisz powiedzieć **dokładnie**, ile ma stopni?"
            ],
            ua: [
              "🦉 Ти вже вмієш розпізнати вид кута.",
              "Але чи вмієш сказати **точно**, скільки в нього градусів?"
            ]
          }
        },
        ang("three"),
        {
          text: {
            pl: "45°? 70°? 120°? Sprawdźmy!",
            ua: "45°? 70°? 120°? Перевіримо!"
          }
        }
      ],
      task: {
        id: "m13-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "Uczymy się mierzyć kąty?",
          ua: "Вчимося вимірювати кути?"
        },
        answer: true,
        explanation: {
          pl: "🚀 Start! Najpierw poznamy stopień (°).",
          ua: "🚀 Старт! Спочатку пізнаємо градус (°)."
        }
      }
    },

    /* 2 — Goal */
    {
      type: "goal",
      heading: {
        pl: "🎯 Co będziesz umieć?",
        ua: "🎯 Що ти вмітимеш?"
      },
      items: [
        {
          pl: "znać jednostkę: stopień (°)",
          ua: "знати одиницю: градус (°)"
        },
        {
          pl: "przyłożyć kątomierz: środek → wierzchołek, 0° → ramię",
          ua: "прикласти транспортир: центр → вершина, 0° → сторона"
        },
        {
          pl: "wybrać właściwą skalę i odczytać miarę",
          ua: "обрати правильну шкалу і прочитати міру"
        },
        {
          pl: "narysować kąt o podanej mierze (np. 30°, 90°, 120°)",
          ua: "накреслити кут заданої міри (напр. 30°, 90°, 120°)"
        },
        {
          pl: "określić rodzaj kąta według miary",
          ua: "визначити вид кута за мірою"
        }
      ]
    },

    /* 3 — Miara / stopień */
    {
      type: "concept",
      heading: {
        pl: "📏 Co to jest miara kąta?",
        ua: "📏 Що таке міра кута?"
      },
      parts: [
        {
          text: {
            pl: [
              "Kąt możemy **zmierzyć**.",
              "Miara kąta mówi, jak bardzo jest on otwarty."
            ],
            ua: [
              "Кут можна **виміряти**.",
              "Міра кута каже, наскільки він відкритий."
            ]
          }
        },
        {
          rule: {
            label: { pl: "Jednostka", ua: "Одиниця" },
            lines: {
              pl: "1°  —  stopień",
              ua: "1°  —  градус"
            },
            text: {
              pl: "Kąt prosty = 90 jednakowych części po 1°.",
              ua: "Прямий кут = 90 однакових частин по 1°."
            }
          }
        }
      ]
    },

    /* 4 — Znak ° */
    {
      type: "practice",
      heading: {
        pl: "° Znak stopnia",
        ua: "° Знак градуса"
      },
      parts: [
        {
          text: {
            pl: [
              "Mały kółeczko przy liczbie: **45°** — to znak stopnia.",
              "Przykłady: 30°, 45°, 90°, 120°, 180°."
            ],
            ua: [
              "Маленьке кільце біля числа: **45°** — це знак градуса.",
              "Приклади: 30°, 45°, 90°, 120°, 180°."
            ]
          }
        }
      ],
      task: {
        id: "m13-prosty-90",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który kąt jest prosty?",
          ua: "Який кут прямий?"
        },
        options: [
          { id: "a", label: { pl: "45°", ua: "45°" } },
          { id: "b", label: { pl: "90°", ua: "90°" } },
          { id: "c", label: { pl: "120°", ua: "120°" } },
          { id: "d", label: { pl: "180°", ua: "180°" } }
        ],
        answer: "b",
        explanation: {
          pl: "Kąt prosty = **90°**.",
          ua: "Прямий кут = **90°**."
        }
      }
    },

    /* 5 — Kątomierz */
    {
      type: "observe",
      heading: {
        pl: "🕵️ Poznaj kątomierz",
        ua: "🕵️ Пізнай транспортир"
      },
      parts: [
        {
          text: {
            pl: "🦉 Twój nowy pomocnik:",
            ua: "🦉 Твій новий помічник:"
          }
        },
        {
          visual: ph(
            "t13-protractor.jpg",
            "Kątomierz",
            "Транспортир",
            "Protractor"
          )
        },
        {
          rule: {
            label: { pl: "Do czego służy?", ua: "Для чого служить?" },
            text: {
              pl: "Kątomierz służy do **mierzenia** kątów i **rysowania** kątów o podanej mierze.",
              ua: "Транспортир служить для **вимірювання** кутів і **креслення** кутів заданої міри."
            }
          }
        }
      ]
    },

    /* 6 — Budowa */
    {
      type: "concept",
      heading: {
        pl: "🧩 Rozbieramy kątomierz",
        ua: "🧩 Розбираємо транспортир"
      },
      parts: [
        {
          text: {
            pl: "Trzy ważne elementy:",
            ua: "Три важливі елементи:"
          }
        },
        ang("protractor"),
        {
          items: [
            {
              pl: ["✚ **Środek** — przykładamy do wierzchołka"],
              ua: ["✚ **Центр** — прикладаємо до вершини"]
            },
            {
              pl: ["📏 **Skala** — pokazuje stopnie"],
              ua: ["📏 **Шкала** — показує градуси"]
            },
            {
              pl: ["0️⃣ **0°** — kątomierz ma **dwie** skale!"],
              ua: ["0️⃣ **0°** — транспортир має **дві** шкали!"]
            }
          ]
        }
      ]
    },

    /* 7 — Dwie skale */
    {
      type: "concept",
      heading: {
        pl: "😈 Dwie skale — uwaga!",
        ua: "😈 Дві шкали — увага!"
      },
      parts: [
        {
          text: {
            pl: [
              "Dlaczego są dwie skale?",
              "Bo kąt może zaczynać się z **lewej** albo z **prawej** strony."
            ],
            ua: [
              "Чому дві шкали?",
              "Бо кут може починатися з **лівого** або з **правого** боку."
            ]
          }
        },
        {
          visual: ph(
            "t13-scales.jpg",
            "40° czy 140°?",
            "40° чи 140°?",
            "Two scales mistake"
          )
        },
        {
          rule: {
            label: { pl: "🔐 Złota zasada", ua: "🔐 Золоте правило" },
            lines: {
              pl: "ZAWSZE ZACZYNAJ OD 0°!",
              ua: "ЗАВЖДИ ПОЧИНАЙ ВІД 0°!"
            },
            text: {
              pl: "Wybierz skalę, na której ramię kąta przechodzi przez 0°.",
              ua: "Обери шкалу, на якій сторона кута проходить через 0°."
            }
          }
        }
      ]
    },

    /* 8 — Krok 1 */
    {
      type: "guided-practice",
      heading: {
        pl: "1️⃣ Środek → wierzchołek",
        ua: "1️⃣ Центр → вершина"
      },
      parts: [
        {
          text: {
            pl: "Gdzie położysz **środek** kątomierza?",
            ua: "Куди покладеш **центр** транспортира?"
          }
        },
        ang("acute40"),
        {
          visual: ph(
            "t13-place.jpg",
            "Prawidłowe przyłożenie",
            "Правильне прикладання",
            "Correct placement"
          )
        }
      ],
      task: {
        id: "m13-srodek",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Środek kątomierza kładziemy:",
          ua: "Центр транспортира кладемо:"
        },
        options: [
          { id: "a", label: { pl: "na wierzchołku kąta", ua: "на вершині кута" } },
          { id: "b", label: { pl: "na końcu ramienia", ua: "на кінці сторони" } },
          { id: "c", label: { pl: "gdziekolwiek na skali", ua: "де завгодно на шкалі" } }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Środek kątomierza → **wierzchołek** kąta!",
          ua: "✅ Центр транспортира → **вершина** кута!"
        }
      }
    },

    /* 9 — Krok 2 */
    {
      type: "guided-practice",
      heading: {
        pl: "2️⃣ 0° → na ramieniu",
        ua: "2️⃣ 0° → на стороні"
      },
      parts: [
        {
          text: {
            pl: "Co teraz trzeba zrobić?",
            ua: "Що тепер треба зробити?"
          }
        },
        ang("place-ok")
      ],
      task: {
        id: "m13-zero",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Następny krok:",
          ua: "Наступний крок:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ustawić 0° na jednym ramieniu",
              ua: "Поставити 0° на одній стороні"
            }
          },
          {
            id: "b",
            label: {
              pl: "Obrócić kątomierz do góry nogami",
              ua: "Перевернути транспортир догори ногами"
            }
          },
          {
            id: "c",
            label: {
              pl: "Od razu odczytać 180°",
              ua: "Одразу прочитати 180°"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "2️⃣ **0°** → na jednym ramieniu kąta.",
          ua: "2️⃣ **0°** → на одній стороні кута."
        }
      }
    },

    /* 10 — Krok 3 */
    {
      type: "concept",
      heading: {
        pl: "3️⃣ Odczytaj miarę",
        ua: "3️⃣ Прочитай міру"
      },
      parts: [
        {
          text: {
            pl: [
              "Drugie ramię wskazuje wartość na skali.",
              "Na przykład: **40°**."
            ],
            ua: [
              "Друга сторона вказує значення на шкалі.",
              "Наприклад: **40°**."
            ]
          }
        },
        ang("acute40", { show: true }),
        {
          rule: {
            label: { pl: "Formuła", ua: "Формула" },
            lines: {
              pl: "miara kąta α = 40°",
              ua: "міра кута α = 40°"
            }
          }
        }
      ]
    },

    /* 11 — Trzy kroki */
    {
      type: "concept",
      heading: {
        pl: "📐 Jak mierzyć kąt?",
        ua: "📐 Як вимірювати кут?"
      },
      parts: [
        {
          visual: ph(
            "t13-steps.jpg",
            "Cztery kroki pomiaru",
            "Чотири кроки вимірювання",
            "Measuring steps"
          )
        },
        {
          items: [
            {
              pl: ["1️⃣ Środek kątomierza → **wierzchołek**"],
              ua: ["1️⃣ Центр транспортира → **вершина**"]
            },
            {
              pl: ["2️⃣ **0°** → jedno ramię"],
              ua: ["2️⃣ **0°** → одна сторона"]
            },
            {
              pl: ["3️⃣ Drugie ramię → **odczytaj** wynik"],
              ua: ["3️⃣ Друга сторона → **прочитай** результат"]
            }
          ]
        },
        {
          text: {
            pl: "Nie zgadujemy. Sprawdzamy!",
            ua: "Не вгадуємо. Перевіряємо!"
          }
        }
      ]
    },

    /* 12 — 40 vs 140 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: 40° czy 140°?",
        ua: "🧠 Логіка 1: 40° чи 140°?"
      },
      parts: [
        {
          text: {
            pl: [
              "Dwaj uczniowie patrzą na ten sam kąt:",
              "Uczeń 1: **40°**   ·   Uczeń 2: **140°**",
              "Obie liczby widać na kątomierzu…"
            ],
            ua: [
              "Двоє учнів дивляться на той самий кут:",
              "Учень 1: **40°**   ·   Учень 2: **140°**",
              "Обидва числа видно на транспортирі…"
            ]
          }
        },
        ang("acute40"),
        {
          visual: ph(
            "t13-scales.jpg",
            "Która skala?",
            "Яка шкала?",
            "Which scale"
          )
        }
      ],
      task: {
        id: "m13-logika1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która miara pasuje do kąta ostrego?",
          ua: "Яка міра підходить до гострого кута?"
        },
        options: [
          { id: "40", label: { pl: "40°", ua: "40°" } },
          { id: "140", label: { pl: "140°", ua: "140°" } }
        ],
        answer: "40",
        explanation: {
          pl: "40°! Kąt ostry < 90°. Sprawdź, od którego **0°** zaczyna się kąt.",
          ua: "40°! Гострий кут < 90°. Перевір, від якого **0°** починається кут."
        }
      }
    },

    /* 13 — Logika przyłożenie */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: kto źle przyłożył?",
        ua: "🧠 Логіка 2: хто погано приклав?"
      },
      parts: [
        {
          text: {
            pl: "Spójrz na trzy przyłożenia kątomierza. Które jest prawidłowe?",
            ua: "Подивись на три прикладання транспортира. Яке правильне?"
          }
        },
        ang("place-abc")
      ],
      task: {
        id: "m13-logika2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Wybierz prawidłowe ustawienie:",
          ua: "Обери правильне положення:"
        },
        options: [
          { id: "a", label: { pl: "A", ua: "A" } },
          { id: "b", label: { pl: "B", ua: "B" } },
          { id: "c", label: { pl: "C", ua: "C" } }
        ],
        answer: "c",
        explanation: {
          pl: "✅ C! Środek na wierzchołku i 0° na ramieniu. A i B są źle przyłożone.",
          ua: "✅ C! Центр на вершині і 0° на стороні. A і B прикладені погано."
        }
      }
    },

    /* 14 — Pierwszy pomiar */
    {
      type: "practice",
      heading: {
        pl: "🎯 Pierwszy pomiar: α",
        ua: "🎯 Перше вимірювання: α"
      },
      parts: [
        {
          text: {
            pl: "Odczytaj miarę kąta α (środek na A, 0° na dolnym ramieniu):",
            ua: "Прочитай міру кута α (центр на A, 0° на нижній стороні):"
          }
        },
        ang("acute40")
      ],
      task: {
        id: "m13-alfa40",
        type: "input-number",
        level: "B",
        question: {
          pl: "α = ? °",
          ua: "α = ? °"
        },
        answer: 40,
        explanation: {
          pl: "Miara kąta α wynosi **40°**.",
          ua: "Міра кута α дорівнює **40°**."
        }
      }
    },

    /* 15 — Trzy kąty */
    {
      type: "practice",
      heading: {
        pl: "🎯 Zmierz: β",
        ua: "🎯 Виміряй: β"
      },
      parts: [
        {
          text: {
            pl: "Ten kąt ma znak □. Ile ma stopni?",
            ua: "Цей кут має знак □. Скільки градусів?"
          }
        },
        ang("right90")
      ],
      task: {
        id: "m13-beta90",
        type: "input-number",
        level: "A",
        question: { pl: "β = ? °", ua: "β = ? °" },
        answer: 90,
        explanation: {
          pl: "β = **90°** — kąt prosty.",
          ua: "β = **90°** — прямий кут."
        }
      }
    },

    /* 16 — gamma */
    {
      type: "practice",
      heading: {
        pl: "🎯 Zmierz: γ",
        ua: "🎯 Виміряй: γ"
      },
      parts: [
        {
          text: {
            pl: "Większy niż prosty. Odczytaj miarę:",
            ua: "Більший за прямий. Прочитай міру:"
          }
        },
        ang("obtuse120")
      ],
      task: {
        id: "m13-gamma120",
        type: "input-number",
        level: "B",
        question: { pl: "γ = ? °", ua: "γ = ? °" },
        answer: 120,
        explanation: {
          pl: "γ = **120°** — kąt rozwarty.",
          ua: "γ = **120°** — тупий кут."
        }
      }
    },

    /* 17 — Miara → rodzaj */
    {
      type: "concept",
      heading: {
        pl: "🔗 Miara → rodzaj kąta",
        ua: "🔗 Міра → вид кута"
      },
      parts: [
        {
          text: {
            pl: "Najpierw mierzysz → potem rozpoznajesz rodzaj:",
            ua: "Спочатку вимірюєш → потім розпізнаєш вид:"
          }
        },
        {
          items: [
            {
              pl: ["**40°** → ostry  (< 90°)"],
              ua: ["**40°** → гострий  (< 90°)"]
            },
            {
              pl: ["**90°** → prosty"],
              ua: ["**90°** → прямий"]
            },
            {
              pl: ["**120°** → rozwarty  (90° < … < 180°)"],
              ua: ["**120°** → тупий  (90° < … < 180°)"]
            },
            {
              pl: ["**180°** → półpełny"],
              ua: ["**180°** → розгорнутий"]
            }
          ]
        },
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "0° < ostry < 90° = prosty < rozwarty < 180° = półpełny",
              ua: "0° < гострий < 90° = прямий < тупий < 180° = розгорнутий"
            }
          }
        }
      ]
    },

    /* 18 — Zmierz i nazwij */
    {
      type: "practice",
      heading: {
        pl: "🔎 Zmierz i nazwij",
        ua: "🔎 Виміряй і назви"
      },
      parts: [
        {
          text: {
            pl: "Miara tego kąta to **65°**. Jakiego jest rodzaju?",
            ua: "Міра цього кута — **65°**. Якого він виду?"
          }
        },
        ang("acute65", { show: true })
      ],
      task: {
        id: "m13-65-rodzaj",
        type: "single-choice",
        level: "B",
        question: {
          pl: "65° → rodzaj:",
          ua: "65° → вид:"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "o",
        explanation: {
          pl: "65° < 90° → **ostry**.",
          ua: "65° < 90° → **гострий**."
        }
      }
    },

    /* 19 — Rysowanie intro */
    {
      type: "observe",
      heading: {
        pl: "✏️ A teraz rysujemy kąt",
        ua: "✏️ А тепер креслимо кут"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 A jeśli znamy miarę, ale kąta jeszcze nie ma?",
              "Narysujemy kąt **60°** — krok po kroku."
            ],
            ua: [
              "🦉 А якщо знаємо міру, але кута ще немає?",
              "Накреслимо кут **60°** — крок за кроком."
            ]
          }
        }
      ]
    },

    /* 20–22 — Kroki rysowania */
    {
      type: "concept",
      heading: {
        pl: "✏️ Krok 1–2: ramię i kątomierz",
        ua: "✏️ Крок 1–2: сторона і транспортир"
      },
      parts: [
        {
          text: {
            pl: [
              "1. Narysuj **pierwsze ramię**.",
              "2. Przyłóż kątomierz: środek w punkcie **A**."
            ],
            ua: [
              "1. Накресли **першу сторону**.",
              "2. Приклади транспортир: центр у точці **A**."
            ]
          }
        },
        ang("draw12")
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "✏️ Krok 3–4: 60° i połączenie",
        ua: "✏️ Крок 3–4: 60° і з’єднання"
      },
      parts: [
        {
          text: {
            pl: [
              "3. Zaznacz punkt przy **60°**.",
              "4. Połącz punkt z wierzchołkiem A."
            ],
            ua: [
              "3. Познач точку біля **60°**.",
              "4. З’єднай точку з вершиною A."
            ]
          }
        },
        ang("draw60")
      ]
    },

    /* 23 — Algorytm */
    {
      type: "concept",
      heading: {
        pl: "📋 Jak narysować kąt?",
        ua: "📋 Як накреслити кут?"
      },
      parts: [
        {
          items: [
            {
              pl: ["1. Narysuj pierwsze ramię"],
              ua: ["1. Накресли першу сторону"]
            },
            {
              pl: ["2. Przyłóż kątomierz (środek + 0°)"],
              ua: ["2. Приклади транспортир (центр + 0°)"]
            },
            {
              pl: ["3. Zaznacz podaną liczbę stopni"],
              ua: ["3. Познач задане число градусів"]
            },
            {
              pl: ["4. Połącz punkt z wierzchołkiem"],
              ua: ["4. З’єднай точку з вершиною"]
            }
          ]
        }
      ]
    },

    /* 24 — Narysuj 30/90/120 via recognition */
    {
      type: "practice",
      heading: {
        pl: "🎮 Narysuj kąt 30°",
        ua: "🎮 Накресли кут 30°"
      },
      parts: [
        {
          text: {
            pl: "Po narysowaniu 30° kąt powinien być **ostry**.",
            ua: "Після креслення 30° кут має бути **гострим**."
          }
        },
        ang("acute30", { show: true })
      ],
      task: {
        id: "m13-draw30",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy kąt 30° jest ostry?",
          ua: "Чи кут 30° гострий?"
        },
        answer: true,
        explanation: {
          pl: "TAK — 30° < 90°.",
          ua: "ТАК — 30° < 90°."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎮 Narysuj kąt 90°",
        ua: "🎮 Накресли кут 90°"
      },
      parts: [
        ang("right90", { show: true })
      ],
      task: {
        id: "m13-draw90",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kąt 90° to:",
          ua: "Кут 90° — це:"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "p",
        explanation: { pl: "Prosty!", ua: "Прямий!" }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎮 Narysuj kąt 120°",
        ua: "🎮 Накресли кут 120°"
      },
      parts: [
        ang("obtuse120", { show: true })
      ],
      task: {
        id: "m13-draw120",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kąt 120° to:",
          ua: "Кут 120° — це:"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "r",
        explanation: {
          pl: "120° → rozwarty (między 90° a 180°).",
          ua: "120° → тупий (між 90° і 180°)."
        }
      }
    },

    /* 25 — Znajdź błąd */
    {
      type: "mistake",
      heading: {
        pl: "🔎 Znajdź błąd: miało być 120°",
        ua: "🔎 Знайди помилку: мало бути 120°"
      },
      claim: {
        pl: "Zadanie: narysuj 120°. Uczeń narysował to:",
        ua: "Завдання: накресли 120°. Учень накреслив це:"
      },
      parts: [
        ang("wrong60")
      ],
      task: {
        id: "m13-blad-skala",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co poszło nie tak?",
          ua: "Що пішло не так?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Wybrano złą skalę kątomierza",
              ua: "Обрано погану шкалу транспортира"
            }
          },
          {
            id: "b",
            label: {
              pl: "Kąt 60° jest zawsze poprawny",
              ua: "Кут 60° завжди правильний"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "Zła skala! 60° zamiast 120° — klasyczna pomyłka.",
          ua: "Погана шкала! 60° замість 120° — класична помилка."
        }
      }
    },

    /* 26 — Dopasuj miarę */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: miara → rodzaj",
        ua: "🧠 Логіка 3: міра → вид"
      },
      parts: [
        {
          text: {
            pl: "Dopasuj: **125°** należy do którego rodzaju?",
            ua: "Підбери: **125°** належить до якого виду?"
          }
        }
      ],
      task: {
        id: "m13-logika3",
        type: "single-choice",
        level: "C",
        question: {
          pl: "125° to kąt:",
          ua: "125° — це кут:"
        },
        options: [
          { id: "o", label: { pl: "🔺 ostry", ua: "🔺 гострий" } },
          { id: "p", label: { pl: "🟦 prosty", ua: "🟦 прямий" } },
          { id: "r", label: { pl: "🟠 rozwarty", ua: "🟠 тупий" } }
        ],
        answer: "r",
        explanation: {
          pl: "125°: większy niż 90°, mniejszy niż 180° → rozwarty.",
          ua: "125°: більший за 90°, менший за 180° → тупий."
        }
      }
    },

    /* 27 — Zegar */
    {
      type: "practice",
      heading: {
        pl: "🕐 Zegar: 3:00",
        ua: "🕐 Годинник: 3:00"
      },
      parts: [
        {
          text: {
            pl: "Jaką miarę ma kąt między wskazówkami o **3:00**?",
            ua: "Яку міру має кут між стрілками о **3:00**?"
          }
        },
        ang("clock", { hour: 3 })
      ],
      task: {
        id: "m13-zegar3",
        type: "input-number",
        level: "B",
        question: {
          pl: "3:00 → ? °",
          ua: "3:00 → ? °"
        },
        answer: 90,
        explanation: {
          pl: "**90°** — kąt prosty (jak między 12 a 3).",
          ua: "**90°** — прямий кут (як між 12 і 3)."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🕐 Zegar: 2:00",
        ua: "🕐 Годинник: 2:00"
      },
      parts: [
        {
          text: {
            pl: "O **2:00** wskazówki tworzą kąt. Ile stopni?",
            ua: "О **2:00** стрілки утворюють кут. Скільки градусів?"
          }
        },
        ang("clock", { hour: 2 })
      ],
      task: {
        id: "m13-zegar2",
        type: "input-number",
        level: "B",
        question: {
          pl: "2:00 → ? °",
          ua: "2:00 → ? °"
        },
        answer: 60,
        explanation: {
          pl: "**60°** (każda godzina ≈ 30°, 2 × 30° = 60°).",
          ua: "**60°** (кожна година ≈ 30°, 2 × 30° = 60°)."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🕐 Zegar: 4:00",
        ua: "🕐 Годинник: 4:00"
      },
      parts: [
        {
          text: {
            pl: "O **4:00** wskazówki tworzą kąt. Ile stopni?",
            ua: "О **4:00** стрілки утворюють кут. Скільки градусів?"
          }
        },
        ang("clock", { hour: 4 })
      ],
      task: {
        id: "m13-zegar4",
        type: "input-number",
        level: "B",
        question: {
          pl: "4:00 → ? °",
          ua: "4:00 → ? °"
        },
        answer: 120,
        explanation: {
          pl: "**120°** (4 × 30° = 120°) — kąt rozwarty.",
          ua: "**120°** (4 × 30° = 120°) — тупий кут."
        }
      }
    },

    /* 28 — Misja */
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz kątomierza (1/4)",
        ua: "🏆 Майстер транспортира (1/4)"
      },
      parts: [
        {
          text: {
            pl: "Zmierz kąt α (zacznij od 0°!):",
            ua: "Виміряй кут α (почни від 0°!):"
          }
        },
        ang("acute40")
      ],
      task: {
        id: "m13-fin1",
        type: "input-number",
        level: "B",
        question: { pl: "α = ? °", ua: "α = ? °" },
        answer: 40,
        explanation: {
          pl: "α = **40°**. Środek → wierzchołek, 0° → ramię.",
          ua: "α = **40°**. Центр → вершина, 0° → сторона."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz kątomierza (2/4)",
        ua: "🏆 Майстер транспортира (2/4)"
      },
      parts: [
        {
          text: {
            pl: "Ten sam kąt na kątomierzu: widać 40° i 140°. Którą skalę wybrać?",
            ua: "Той самий кут на транспортирі: видно 40° і 140°. Яку шкалу обрати?"
          }
        },
        ang("acute40")
      ],
      task: {
        id: "m13-fin2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Właściwa miara:",
          ua: "Правильна міра:"
        },
        options: [
          { id: "40", label: { pl: "40° (od 0°)", ua: "40° (від 0°)" } },
          { id: "140", label: { pl: "140°", ua: "140°" } }
        ],
        answer: "40",
        explanation: {
          pl: "Zawsze ta skala, która zaczyna się od **0°** na ramieniu.",
          ua: "Завжди та шкала, що починається від **0°** на стороні."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz kątomierza (3/4)",
        ua: "🏆 Майстер транспортира (3/4)"
      },
      parts: [ang("obtuse120")],
      task: {
        id: "m13-fin3",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jeśli miara = 120°, jaki to rodzaj?",
          ua: "Якщо міра = 120°, який це вид?"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "r",
        explanation: { pl: "Rozwarty (90° < 120° < 180°).", ua: "Тупий (90° < 120° < 180°)." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz kątomierza (4/4)",
        ua: "🏆 Майстер транспортира (4/4)"
      },
      parts: [
        {
          text: {
            pl: "Chcesz narysować **120°**, a wyszło **60°**. Co poszło nie tak?",
            ua: "Хочеш накреслити **120°**, а вийшло **60°**. Що пішло не так?"
          }
        },
        ang("wrong60")
      ],
      task: {
        id: "m13-fin4",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Najważniejsze:",
          ua: "Найважливіше:"
        },
        options: [
          {
            id: "s",
            label: { pl: "wybrano złą skalę kątomierza", ua: "обрано погану шкалу транспортира" }
          },
          {
            id: "k",
            label: { pl: "za cienki ołówek", ua: "затонкий олівець" }
          }
        ],
        answer: "s",
        explanation: {
          pl: "Zawsze sprawdzaj skalę od 0° — i przy rysowaniu!",
          ua: "Завжди перевіряй шкалу від 0° — і при кресленні!"
        }
      }
    },

    /* 29 — Ściąga */
    {
      type: "summary",
      heading: {
        pl: "🔐 Mierzę kąt — ściąga",
        ua: "🔐 Вимірюю кут — шпаргалка"
      },
      parts: [
        {
          visual: ph(
            "t13-summary.svg",
            "Ściąga pomiaru po polsku",
            "Шпаргалка вимірювання польською",
            "Polish measuring cheat sheet"
          )
        },
        {
          rule: {
            label: { pl: "Kolejność", ua: "Порядок" },
            lines: {
              pl: "1 ŚRODEK → 2 ZERO → 3 SKALA → 4 ODCZYT → 5 RODZAJ",
              ua: "1 ЦЕНТР → 2 НУЛЬ → 3 ШКАЛА → 4 ВІДЛІК → 5 ВИД"
            },
            text: {
              pl: "Porównaj miarę z 90° i 180°.",
              ua: "Порівняй міру з 90° і 180°."
            }
          }
        }
      ]
    },

    /* 30 — Vocab */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka pomiaru",
        ua: "📚 Слова вимірювання"
      },
      rows: [
        { pl: "stopień (°)", ua: "градус (°)" },
        { pl: "kątomierz", ua: "транспортир" },
        { pl: "miara kąta", ua: "міра кута" },
        { pl: "skala (dwie skale!)", ua: "шкала (дві шкали!)" },
        { pl: "odczytać / narysować", ua: "прочитати / накреслити" }
      ],
      phrases: [
        {
          pl: "Przyłożę środek do wierzchołka.",
          ua: "Прикладу центр до вершини."
        },
        {
          pl: "Zaczynam od 0° na skali.",
          ua: "Починаю від 0° на шкалі."
        }
      ]
    },

    /* 31 — Finał */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови"
      },
      text: {
        pl: [
          "Wiesz już, jak zmierzyć kąt.",
          "Nie musisz zgadywać, czy ma 40°, 70° czy 120°.",
          "Masz narzędzie, które pozwala to sprawdzić.",
          "Matematyka nie każe zgadywać. Matematyka pozwala sprawdzać. 🔎",
          "Następna misja: Lekcja 14 → trójkąty!"
        ],
        ua: [
          "Ти вже вмієш виміряти кут.",
          "Не треба вгадувати, чи це 40°, 70° чи 120°.",
          "У тебе є інструмент, який дозволяє це перевірити.",
          "Математика не змушує вгадувати. Математика дозволяє перевіряти. 🔎",
          "Наступна місія: Урок 14 → трикутники!"
        ]
      }
    }
  ]
};
