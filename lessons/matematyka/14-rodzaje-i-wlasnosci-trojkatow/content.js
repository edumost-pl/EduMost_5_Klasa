function em(text) {
  return { text: text, emphasis: true };
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function ph(file, titlePl, titleUa, prompt) {
  var path = "./" + file;
  return {
    kind: "image-placeholder",
    file: path,
    url: path,
    title: { pl: titlePl, ua: titleUa },
    alt: { pl: titlePl, ua: titleUa },
    prompt: prompt,
  };
}

/** Row of real-world triangle photos for intro (viz-img = lightbox zoom) */
function worldGallery() {
  var items = [
    { file: "t14-dach.jpg", pl: "dach", ua: "дах" },
    { file: "t14-znak.jpg", pl: "znak", ua: "знак" },
    { file: "t14-most.jpg", pl: "most", ua: "міст" },
    { file: "t14-gitara.jpg", pl: "gitara", ua: "гітара" },
    { file: "t14-linial.jpg", pl: "kątownik", ua: "кутник" },
  ];
  var cells = items
    .map(function (it) {
      return (
        '<figure style="margin:0;text-align:center;flex:1 1 88px;max-width:110px">' +
        '<img class="viz-img" src="./' +
        it.file +
        '" alt="' +
        esc(it.pl) +
        '" role="button" tabindex="0" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:12px;border:1px solid #e7e0d2;display:block;margin:0"/>' +
        '<figcaption style="margin-top:0.35rem;font-size:0.8rem;font-weight:600;color:#57534e">' +
        esc(it.pl) +
        "</figcaption></figure>"
      );
    })
    .join("");
  return {
    html:
      '<div class="polish-board" style="padding:0.75rem">' +
      '<div style="display:flex;flex-wrap:wrap;gap:0.65rem;justify-content:center;align-items:flex-start">' +
      cells +
      "</div></div>",
  };
}

/** Triangle SVG helper for Lekcja 14 */
function tri(kind, opt) {
  opt = opt || {};
  var mark = opt.mark || "";
  var W = 440;
  var H = 200;
  var svg = "";

  function poly(pts, fill, stroke) {
    return (
      '<polygon points="' +
      pts +
      '" fill="' +
      (fill || "#ccfbf1") +
      '" fill-opacity="0.55" stroke="' +
      (stroke || "#0f766e") +
      '" stroke-width="2.5" stroke-linejoin="round"/>'
    );
  }
  function lab(x, y, t, color, size) {
    return (
      '<text x="' +
      x +
      '" y="' +
      y +
      '" text-anchor="middle" font-size="' +
      (size || 14) +
      '" font-weight="700" fill="' +
      (color || "#0f766e") +
      '">' +
      esc(t) +
      "</text>"
    );
  }
  function tick(x1, y1, x2, y2, n) {
    /* equal-side marks: n short ticks across midpoint */
    var mx = (x1 + x2) / 2;
    var my = (y1 + y2) / 2;
    var dx = x2 - x1;
    var dy = y2 - y1;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var px = (-dy / len) * 7;
    var py = (dx / len) * 7;
    var out = "";
    var i;
    for (i = 0; i < n; i++) {
      var ox = (i - (n - 1) / 2) * 4 * (dx / len);
      var oy = (i - (n - 1) / 2) * 4 * (dy / len);
      out +=
        '<line x1="' +
        (mx + ox - px) +
        '" y1="' +
        (my + oy - py) +
        '" x2="' +
        (mx + ox + px) +
        '" y2="' +
        (my + oy + py) +
        '" stroke="#0f766e" stroke-width="2"/>';
    }
    return out;
  }

  if (kind === "world") {
    return worldGallery();
  } else if (kind === "abc") {
    H = 220;
    svg =
      poly("220,36 90,168 350,168") +
      lab(220, 26, "A", "#0f766e", 18) +
      lab(72, 180, "B", "#0f766e", 18) +
      lab(368, 180, "C", "#0f766e", 18) +
      (opt.showAngles
        ? lab(220, 58, "∠A", "#b45309", 14) +
          lab(118, 162, "∠B", "#b45309", 14) +
          lab(325, 162, "∠C", "#b45309", 14)
        : lab(118, 90, "AB", "#57534e", 15) +
          lab(220, 198, "BC", "#57534e", 15) +
          lab(322, 90, "AC", "#57534e", 15));
  } else if (kind === "three-shapes") {
    W = 480;
    H = 170;
    svg =
      poly("70,30 20,140 120,140", "#fecaca", "#dc2626") +
      lab(70, 160, "ostrokątny", "#dc2626", 11) +
      poly("200,30 200,140 320,140", "#ccfbf1", "#0f766e") +
      '<rect x="200" y="122" width="16" height="16" fill="none" stroke="#0f766e" stroke-width="2"/>' +
      lab(250, 160, "prostokątny", "#0f766e", 11) +
      poly("400,50 350,140 460,140", "#fed7aa", "#ea580c") +
      lab(405, 160, "rozwartokątny", "#ea580c", 11);
  } else if (kind === "acute") {
    svg =
      poly("220,28 70,170 370,170", "#fecaca", "#dc2626") +
      lab(220, 70, opt.show ? "60°" : "?", "#b45309", 16) +
      lab(120, 150, opt.show ? "70°" : "?", "#b45309", 16) +
      lab(320, 150, opt.show ? "50°" : "?", "#b45309", 16) +
      lab(220, 22, "A") +
      lab(55, 180, "B") +
      lab(385, 180, "C");
  } else if (kind === "right") {
    H = 210;
    svg =
      poly("100,36 100,168 350,168", "#ccfbf1", "#0f766e") +
      '<rect x="100" y="150" width="18" height="18" fill="none" stroke="#0f766e" stroke-width="2.5"/>' +
      lab(100, 26, "A", "#0f766e", 18) +
      lab(78, 185, "B", "#0f766e", 18) +
      lab(368, 185, "C", "#0f766e", 18) +
      (opt.show
        ? lab(138, 158, "90°", "#0f766e", 14) +
          lab(118, 70, "40°", "#b45309", 14) +
          lab(286, 158, "50°", "#b45309", 14)
        : "");
  } else if (kind === "obtuse") {
    /* Exact 120° at A (left), AB=AC → 30°+30° at B,C; BC longest */
    H = 230;
    W = 440;
    svg =
      poly("220,40 47,150 393,150", "#fed7aa", "#ea580c") +
      lab(220, 28, "A", "#0f766e", 18) +
      lab(32, 165, "B", "#0f766e", 18) +
      lab(408, 165, "C", "#0f766e", 18) +
      (opt.show
        ? lab(220, 70, "120°", "#ea580c", 14) +
          lab(94, 144, "30°", "#b45309", 14) +
          lab(350, 144, "30°", "#b45309", 14)
        : "");
  } else if (kind === "scalene") {
    svg =
      poly("200,30 60,170 380,170", "#fed7aa", "#ea580c") +
      lab(120, 95, "5", "#57534e") +
      lab(220, 188, "8", "#57534e") +
      lab(300, 90, "7", "#57534e") +
      lab(200, 22, "A") +
      lab(45, 180, "B") +
      lab(395, 170, "C");
  } else if (kind === "iso") {
    svg =
      poly("220,28 80,170 360,170", "#dcfce7", "#16a34a") +
      tick(220, 28, 80, 170, 1) +
      tick(220, 28, 360, 170, 1) +
      lab(130, 95, "5", "#16a34a") +
      lab(310, 95, "5", "#16a34a") +
      lab(220, 188, "7", "#57534e") +
      lab(220, 22, "A") +
      lab(65, 180, "B") +
      lab(375, 180, "C");
  } else if (kind === "equil") {
    svg =
      poly("220,28 70,170 370,170", "#dbeafe", "#2563eb") +
      tick(220, 28, 70, 170, 1) +
      tick(220, 28, 370, 170, 1) +
      tick(70, 170, 370, 170, 1) +
      lab(130, 95, "6", "#2563eb") +
      lab(310, 95, "6", "#2563eb") +
      lab(220, 188, "6", "#2563eb") +
      lab(220, 22, "A") +
      lab(55, 180, "B") +
      lab(385, 180, "C");
  } else if (kind === "dual") {
    /* isosceles acute — two classifications */
    svg =
      poly("220,28 90,170 350,170", "#fef3c7", "#b45309") +
      tick(220, 28, 90, 170, 1) +
      tick(220, 28, 350, 170, 1) +
      lab(220, 70, "70°", "#b45309") +
      lab(130, 145, "55°", "#b45309") +
      lab(310, 145, "55°", "#b45309") +
      lab(220, 195, "ostrokątny + równoramienny", "#57534e", 13);
  } else if (kind === "sum180") {
    svg =
      poly("220,30 70,170 370,170") +
      lab(220, 70, "50°", "#b45309", 16) +
      lab(120, 150, "60°", "#b45309", 16) +
      lab(320, 150, "70°", "#b45309", 16) +
      lab(220, 195, "50° + 60° + 70° = 180°", "#0f766e", 14);
  } else if (kind === "tear") {
    W = 480;
    H = 160;
    svg =
      '<path d="M 40 120 L 90 40 L 110 120 Z" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      lab(80, 145, "∠A", "#dc2626", 12) +
      lab(145, 90, "+", "#57534e", 22) +
      '<path d="M 180 120 L 230 50 L 250 120 Z" fill="#ccfbf1" stroke="#0f766e" stroke-width="2"/>' +
      lab(215, 145, "∠B", "#0f766e", 12) +
      lab(280, 90, "+", "#57534e", 22) +
      '<path d="M 320 100 L 420 100 L 420 130 L 320 130 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>' +
      lab(370, 145, "∠C → 180°", "#ea580c", 12);
  } else if (kind === "machine") {
    /* Example: know 40° and 80° → third = 60° */
    H = 220;
    svg =
      poly("200,28 60,175 380,175", "#ccfbf1", "#0f766e") +
      lab(200, 20, "A", "#0f766e", 17) +
      lab(42, 185, "B", "#0f766e", 17) +
      lab(395, 185, "C", "#0f766e", 17) +
      lab(200, 58, "60°", "#0f766e", 15) +
      lab(100, 165, "40°", "#b45309", 15) +
      lab(330, 165, "80°", "#b45309", 15) ;
  } else if (kind === "missing") {
    svg =
      poly("220,30 70,170 370,170") +
      lab(220, 70, "?", "#dc2626", 20) +
      lab(120, 160, "50°", "#b45309", 16) +
      lab(320, 160, "60°", "#b45309", 16) +
      lab(220, 22, "A") +
      lab(55, 180, "B") +
      lab(385, 180, "C");
  } else if (kind === "sticks-bad") {
    /* Three sticks + failed attempt to close triangle (gap) */
    W = 440;
    H = 230;
    svg =
      '<line x1="40" y1="40" x2="120" y2="40" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>' +
      lab(80, 62, "4 cm", "#0f766e", 13) +
      '<line x1="150" y1="40" x2="250" y2="40" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>' +
      lab(200, 62, "5 cm", "#0f766e", 13) +
      '<line x1="280" y1="40" x2="420" y2="40" stroke="#dc2626" stroke-width="8" stroke-linecap="round"/>' +
      lab(350, 62, "10 cm", "#dc2626", 13) +
      /* attempt: long base + two short sides that don't meet */
      '<line x1="80" y1="190" x2="360" y2="190" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>' +
      lab(220, 210, "10 cm", "#dc2626", 12) +
      '<line x1="80" y1="190" x2="150" y2="130" stroke="#0f766e" stroke-width="5" stroke-linecap="round"/>' +
      lab(95, 145, "4", "#0f766e", 12) +
      '<line x1="360" y1="190" x2="280" y2="130" stroke="#0f766e" stroke-width="5" stroke-linecap="round"/>' +
      lab(340, 145, "5", "#0f766e", 12) +
      '<circle cx="150" cy="130" r="5" fill="#dc2626"/>' +
      '<circle cx="280" cy="130" r="5" fill="#dc2626"/>' +
      '<line x1="155" y1="130" x2="275" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>' +
      lab(220, 118, "dziura!", "#dc2626", 14) +
      lab(220, 95, "4 + 5 = 9  <  10", "#b45309", 14);
  } else if (kind === "sticks-ok") {
    W = 440;
    H = 140;
    svg =
      '<line x1="40" y1="50" x2="100" y2="50" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>' +
      lab(70, 75, "3", "#0f766e", 13) +
      '<line x1="130" y1="50" x2="210" y2="50" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>' +
      lab(170, 75, "4", "#0f766e", 13) +
      '<line x1="240" y1="50" x2="340" y2="50" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>' +
      lab(290, 75, "5", "#0f766e", 13) +
      lab(220, 115, "3 + 4 > 5  →  można!", "#0f766e", 14);
  } else if (kind === "cheat") {
    W = 520;
    H = 280;
    svg =
      lab(260, 28, "🔺 TRÓJKĄTY", "#1c1917", 18) +
      lab(130, 58, "ZE WZGLĘDU NA KĄTY", "#0f766e", 13) +
      lab(390, 58, "ZE WZGLĘDU NA BOKI", "#7c3aed", 13) +
      '<rect x="30" y="70" width="200" height="150" rx="10" fill="#fef2f2" stroke="#dc2626"/>' +
      lab(130, 95, "ostrokątny", "#dc2626", 13) +
      lab(130, 115, "3 kąty ostre", "#57534e", 12) +
      lab(130, 145, "prostokątny", "#0f766e", 13) +
      lab(130, 165, "1 prosty + 2 ostre", "#57534e", 12) +
      lab(130, 195, "rozwartokątny", "#ea580c", 13) +
      lab(130, 215, "1 rozwarty + 2 ostre", "#57534e", 12) +
      '<rect x="290" y="70" width="200" height="150" rx="10" fill="#f5f3ff" stroke="#7c3aed"/>' +
      lab(390, 95, "równoboczny", "#2563eb", 13) +
      lab(390, 115, "3 równe boki", "#57534e", 12) +
      lab(390, 145, "równoramienny", "#16a34a", 13) +
      lab(390, 165, "≥ 2 równe boki", "#57534e", 12) +
      lab(390, 195, "różnoboczny", "#ea580c", 13) +
      lab(390, 215, "3 różne boki", "#57534e", 12) +
      lab(260, 255, "Suma kątów = 180°", "#0f766e", 15) +
      lab(260, 275, "Najdłuższy bok < suma dwóch pozostałych", "#57534e", 13);
  } else if (kind === "tree") {
    W = 520;
    H = 240;
    svg =
      lab(260, 30, "🔺 TRÓJKĄT", "#1c1917", 18) +
      '<line x1="260" y1="40" x2="260" y2="60" stroke="#a8a29e" stroke-width="2"/>' +
      '<line x1="130" y1="60" x2="390" y2="60" stroke="#a8a29e" stroke-width="2"/>' +
      '<line x1="130" y1="60" x2="130" y2="80" stroke="#a8a29e" stroke-width="2"/>' +
      '<line x1="390" y1="60" x2="390" y2="80" stroke="#a8a29e" stroke-width="2"/>' +
      lab(130, 95, "KĄTY", "#0f766e", 14) +
      lab(390, 95, "BOKI", "#7c3aed", 14) +
      lab(60, 140, "ostro-", "#dc2626", 12) +
      lab(130, 140, "prosto-", "#0f766e", 12) +
      lab(200, 140, "rozwarto-", "#ea580c", 12) +
      lab(60, 158, "kątny", "#dc2626", 12) +
      lab(130, 158, "kątny", "#0f766e", 12) +
      lab(200, 158, "kątny", "#ea580c", 12) +
      lab(320, 140, "równo-", "#2563eb", 12) +
      lab(390, 140, "równo-", "#16a34a", 12) +
      lab(460, 140, "różno-", "#ea580c", 12) +
      lab(320, 158, "boczny", "#2563eb", 12) +
      lab(390, 158, "ramienny", "#16a34a", 12) +
      lab(460, 158, "boczny", "#ea580c", 12) +
      lab(260, 210, "🔐 3 kąty = 180°", "#0f766e", 14) +
      lab(260, 232, "🔐 nierówność trójkąta", "#57534e", 13);
  } else {
    svg = poly("220,30 80,170 360,170");
  }

  if (mark) {
    svg += lab(W / 2, H - 8, mark, "#78716c", 12);
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
      "</svg></div>",
  };
}

window.EduMostLessonContent = {
  blocks: [
    /* 1 — Intro */
    {
      type: "intro",
      heading: {
        pl: "🔺 Co to w ogóle jest trójkąt?",
        ua: "🔺 Що взагалі таке трикутник?",
      },
      parts: [
        {
          text: {
            pl: "🦉 Co łączy wszystkie te rzeczy?",
            ua: "🦉 Що спільне у всіх цих речей?",
          },
        },
        tri("world"),
        {
          text: {
            pl: "🔺 **TRÓJKĄT** — ile ma boków, wierzchołków i kątów?",
            ua: "🔺 **ТРИКУТНИК** — скільки сторін, вершин і кутів?",
          },
        },
      ],
      task: {
        id: "m14-start",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Trójkąt ma:",
          ua: "Трикутник має:",
        },
        options: [
          {
            id: "a",
            label: {
              pl: "3 boki + 3 wierzchołki + 3 kąty",
              ua: "3 сторони + 3 вершини + 3 кути",
            },
          },
          {
            id: "b",
            label: {
              pl: "4 boki + 4 wierzchołki + 4 kąty",
              ua: "4 сторони + 4 вершини + 4 кути",
            },
          },
          {
            id: "c",
            label: { pl: "2 boki + 3 kąty", ua: "2 сторони + 3 кути" },
          },
        ],
        answer: "a",
        explanation: {
          pl: "Tak! Zawsze **3 + 3 + 3**.",
          ua: "Так! Завжди **3 + 3 + 3**.",
        },
      },
    },

    /* 2 — Goal */
    {
      type: "goal",
      heading: {
        pl: "🎯 Co będziesz umieć?",
        ua: "🎯 Що ти вмітимеш?",
      },
      items: [
        {
          pl: "rozpoznać trójkąt ostrokątny, prostokątny, rozwartokątny",
          ua: "розпізнати гострокутний, прямокутний, тупокутний трикутник",
        },
        {
          pl: "rozpoznać trójkąt według boków: równoboczny, równoramienny, różnoboczny",
          ua: "розпізнати трикутник за сторонами: рівносторонній, рівнобедрений, різносторонній",
        },
        {
          pl: "wiedzieć, że suma kątów = 180° i obliczyć brakujący kąt",
          ua: "знати, що сума кутів = 180° і обчислити відсутній кут",
        },
        {
          pl: "sprawdzić nierówność trójkąta (czy da się zbudować)",
          ua: "перевірити нерівність трикутника (чи можна побудувати)",
        },
      ],
    },

    /* 3 — ABC */
    {
      type: "concept",
      heading: {
        pl: "📐 Przypomnienie: trójkąt ABC",
        ua: "📐 Нагадування: трикутник ABC",
      },
      parts: [
        {
          text: {
            pl: "🦉 Pamiętasz kąty? Dziś one pomogą rozpoznawać trójkąty.",
            ua: "🦉 Пам’ятаєш кути? Сьогодні вони допоможуть розпізнавати трикутники.",
          },
        },
        tri("abc"),
        {
          items: [
            {
              pl: ["**Boki:** AB, BC, AC"],
              ua: ["**Сторони:** AB, BC, AC"],
            },
            {
              pl: ["**Wierzchołki:** A, B, C"],
              ua: ["**Вершини:** A, B, C"],
            },
          ],
        },
        tri("abc", { showAngles: true }),
      ],
    },

    /* 4 — Trzy kształty + reguła (ex 4+5) */
    {
      type: "practice",
      heading: {
        pl: "🔎 Czy wszystkie są trójkątami?",
        ua: "🔎 Чи всі — трикутники?",
      },
      parts: [
        {
          visual: ph(
            "t14-three-angles.svg",
            "Trzy różne figury",
            "Три різні фігури",
            "Three different figures",
          ),
        },
        {
          text: {
            pl: "Wyglądają inaczej… ale czy wszystkie są trójkątami?",
            ua: "Виглядають інакше… але чи всі — трикутники?",
          },
        },
        {
          rule: {
            label: {
              pl: "Reguła: czym jest trójkąt?",
              ua: "Правило: що таке трикутник?",
            },
            lines: {
              pl: "3 boki + 3 wierzchołki + 3 kąty",
              ua: "3 сторони + 3 вершини + 3 кути",
            },
            text: {
              pl: "Nieważne, czy figura jest „spiczasta”, „z kwadracikiem □”, czy „szeroka” — jeśli ma **trzy boki, trzy wierzchołki i trzy kąty**, to jest **trójkąt**.",
              ua: "Неважливо, чи фігура «гостра», «з квадратиком □», чи «широка» — якщо має **три сторони, три вершини і три кути**, це **трикутник**.",
            },
          },
        },
      ],
      task: {
        id: "m14-all-tri",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wszystkie trzy figury są trójkątami?",
          ua: "Усі три фігури — трикутники?",
        },
        answer: true,
        explanation: {
          pl: "Tak! Każda ma **3 boki, 3 wierzchołki i 3 kąty**.",
          ua: "Так! Кожна має **3 сторони, 3 вершини і 3 кути**.",
        },
      },
    },

    /* 5 — Ostrokątny */
    {
      type: "concept",
      heading: {
        pl: "🔺 Trójkąt ostrokątny",
        ua: "🔺 Гострокутний трикутник",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Trójkąty możemy klasyfikować **ze względu na kąty**.",
              "Pierwszy rodzaj: spójrz na kąty w trójkącie ABC — wszystkie są mniejsze niż 90°.",
            ],
            ua: [
              "🦉 Трикутники можна класифікувати **за кутами**.",
              "Перший вид: подивись на кути в трикутнику ABC — усі менші за 90°.",
            ],
          },
        },
        tri("acute", { show: true }),
        // {
        //   text: {
        //     pl: "60° + 70° + 50° = 180°. Żaden kąt nie jest prosty ani rozwarty.",
        //     ua: "60° + 70° + 50° = 180°. Жоден кут не прямий і не тупий."
        //   }
        // },
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "Wszystkie kąty są ostre",
              ua: "Усі кути гострі",
            },
            text: {
              pl: "Każdy kąt < 90°. Taki trójkąt nazywamy **ostrokątnym**.",
              ua: "Кожен кут < 90°. Такий трикутник називаємо **гострокутним**.",
            },
          },
        },
      ],
    },

    /* 6 — Prostokątny */
    {
      type: "concept",
      heading: {
        pl: "🟦 Trójkąt prostokątny",
        ua: "🟦 Прямокутний трикутник",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Drugi rodzaj ze względu na kąty — trójkąt z **kątem prostym**.",
              "Kwadracik ⬜️ przy wierzchołku B oznacza **90°**.",
            ],
            ua: [
              "🦉 Другий вид за кутами — трикутник із **прямим кутом**.",
              "Квадратик ⬜️ біля вершини B означає **90°**.",
            ],
          },
        },
        tri("right", { show: true }),
        {
          text: {
            pl: [
              "Ciekawostka: dwa pozostałe kąty są **ostre** i razem dają też **90°**!",
              "Tu: 40° + 50° = 90°. A bok naprzeciw kąta prostego (AC) jest **najdłuższy** — nazywamy go **przeciwprostokątną**.",
            ],
            ua: [
              "Цікавинка: два інші кути — **гострі** і разом теж дають **90°**!",
              "Тут: 40° + 50° = 90°. А сторона навпроти прямого кута (AC) — **найдовша**; її називають **гіпотенузою**.",
            ],
          },
        },
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "Jeden kąt prosty + dwa ostre",
              ua: "Один прямий кут + два гострі",
            },
            text: {
              pl: "Kwadracik □ = 90°. Dwa ostre kąty sumują się do 90°. Przeciwprostokątna — najdłuższy bok.",
              ua: "Квадратик □ = 90°. Два гострі кути дають у сумі 90°. Гіпотенуза — найдовша сторона.",
            },
          },
        },
      ],
    },

    /* 7 — Prostokątny własność */
    {
      type: "practice",
      heading: {
        pl: "🟦 Czy może przestać być prostokątny?",
        ua: "🟦 Чи може перестати бути прямокутним?",
      },
      parts: [
        {
          text: {
            pl: "Poruszaj wierzchołkami w wyobraźni — ale **zachowaj** zaznaczony kąt prosty.",
            ua: "Посувай вершини в уяві — але **збережи** позначений прямий кут.",
          },
        },
        tri("right", { show: true }),
      ],
      task: {
        id: "m14-right-stay",
        type: "true-false",
        level: "B",
        question: {
          pl: "Jeśli kąt prosty zostaje, trójkąt nadal jest prostokątny?",
          ua: "Якщо прямий кут лишається, трикутник і далі прямокутний?",
        },
        answer: true,
        explanation: {
          pl: "Tak! Rodzaj zależy od **właściwości** kąta, nie od „kształtu obrazka”.",
          ua: "Так! Вид залежить від **властивості** кута, не від «форми малюнка».",
        },
      },
    },

    /* 8 — Rozwartokątny */
    {
      type: "concept",
      heading: {
        pl: "🟠 Trójkąt rozwartokątny",
        ua: "🟠 Тупокутний трикутник",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Trzeci rodzaj ze względu na kąty — trójkąt z **kątem rozwartym**.",
              "Przy wierzchołku A widać kąt **większy niż 90°**.",
            ],
            ua: [
              "🦉 Третій вид за кутами — трикутник із **тупим кутом**.",
              "Біля вершини A видно кут **більший за 90°**.",
            ],
          },
        },
        tri("obtuse", { show: true }),
        {
          text: {
            pl: [
              "Ciekawostka: kąt rozwarty może być **tylko jeden** (tu 120°).",
              "Dwa pozostałe są zawsze **ostre** — tu nawet oba po 30°. Bok naprzeciw kąta rozwartego (BC) jest **najdłuższy**.",
            ],
            ua: [
              "Цікавинка: тупий кут може бути **лише один** (тут 120°).",
              "Два інші завжди **гострі** — тут навіть обидва по 30°. Сторона навпроти тупого кута (BC) — **найдовша**.",
            ],
          },
        },
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "Jeden kąt rozwarty + dwa ostre",
              ua: "Один тупий кут + два гострі",
            },
            text: {
              pl: "Kąt rozwarty: większy niż 90°, mniejszy niż 180°. Najdłuższy bok leży naprzeciw kąta rozwartego.",
              ua: "Тупий кут: більший за 90°, менший за 180°. Найдовша сторона лежить навпроти тупого кута.",
            },
          },
        },
      ],
    },

    /* 9 — Jeden — nie więcej */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: jeden — nie więcej!",
        ua: "🧠 Логіка 1: один — не більше!",
      },
      parts: [
        {
          text: {
            pl: [
              "Czy trójkąt może mieć **dwa** kąty proste?",
              "A dwa kąty rozwarte?",
            ],
            ua: [
              "Чи може трикутник мати **два** прямі кути?",
              "А два тупі кути?",
            ],
          },
        },
      ],
      task: {
        id: "m14-logika1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dwa kąty proste w trójkącie?",
          ua: "Два прямі кути в трикутнику?",
        },
        options: [
          { id: "t", label: { pl: "TAK", ua: "ТАК" } },
          { id: "n", label: { pl: "NIE", ua: "НІ" } },
        ],
        answer: "n",
        explanation: {
          pl: "NIE. 90° + 90° = 180° — nie zostaje miejsca na trzeci kąt. Tak samo z dwoma rozwartymi.",
          ua: "НІ. 90° + 90° = 180° — не лишається місця на третій кут. Так само з двома тупими.",
        },
      },
    },

    /* 10 — Kto nie pasuje */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: kto tu nie pasuje?",
        ua: "🧠 Логіка 2: хто тут зайвий?",
      },
      parts: [
        {
          text: {
            pl: [
              "**A** — trzy kąty ostre",
              "**B** — jeden prosty + dwa ostre",
              "**C** — jeden rozwarty + dwa ostre",
              "**D** — dwa proste + jeden ostry",
            ],
            ua: [
              "**A** — три гострі кути",
              "**B** — один прямий + два гострі",
              "**C** — один тупий + два гострі",
              "**D** — два прямі + один гострий",
            ],
          },
        },
      ],
      task: {
        id: "m14-logika2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który opis NIE może dotyczyć trójkąta?",
          ua: "Який опис НЕ може стосуватися трикутника?",
        },
        options: [
          { id: "a", label: { pl: "A", ua: "A" } },
          { id: "b", label: { pl: "B", ua: "B" } },
          { id: "c", label: { pl: "C", ua: "C" } },
          { id: "d", label: { pl: "D", ua: "D" } },
        ],
        answer: "d",
        explanation: {
          pl: "D! Dwa proste = 180° — trzeciego kąta już nie ma.",
          ua: "D! Два прямі = 180° — третього кута вже немає.",
        },
      },
    },

    /* 11 — Boki: tylko rozpoznawanie (bez właściwości → L15) */
    {
      type: "observe",
      heading: {
        pl: "🔎 Ze względu na długość boków",
        ua: "🔎 За довжиною сторін",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 A może zamiast kątów popatrzymy na **boki**?",
              "W Lekcji 14 wystarczy **rozpoznać** trzy rodzaje — bez specjalnych właściwości.",
            ],
            ua: [
              "🦉 А може замість кутів подивимось на **сторони**?",
              "В Уроці 14 достатньо **розпізнати** три види — без особливих властивостей.",
            ],
          },
        },
        {
          visual: ph(
            "t14-three-sides.jpg",
            "Trójkąty ze względu na boki",
            "Трикутники за сторонами",
            "Three triangle types by sides",
          ),
        },
        {
          rule: {
            label: { pl: "Zapamiętaj", ua: "Запам'ятай" },
            lines: {
              pl: "równoboczny · równoramienny · różnoboczny",
              ua: "рівносторонній · рівнобедрений · різносторонній",
            },
          },
        },
        {
          items: [
            {
              pl: ["🔵 **równoboczny** — 3 równe boki"],
              ua: ["🔵 **рівносторонній** — 3 рівні сторони"],
            },
            {
              pl: ["🟢 **równoramienny** — co najmniej 2 równe boki"],
              ua: ["🟢 **рівнобедрений** — щонайменше 2 рівні сторони"],
            },
            {
              pl: ["🟠 **różnoboczny** — 3 różne boki"],
              ua: ["🟠 **різносторонній** — 3 різні сторони"],
            },
          ],
        },
      ],
    },

    /* 12 — Suma 180 */
    {
      type: "concept",
      heading: {
        pl: "🔐 Suma kątów w trójkącie",
        ua: "🔐 Сума кутів у трикутнику",
      },
      parts: [
        {
          text: {
            pl: "🦉 Spróbuj dodać wszystkie kąty…",
            ua: "🦉 Спробуй додати всі кути…",
          },
        },
        tri("sum180"),
        {
          rule: {
            label: { pl: "Złota zasada", ua: "Золоте правило" },
            lines: {
              pl: "Suma kątów wewnętrznych = 180°",
              ua: "Сума внутрішніх кутів = 180°",
            },
            text: {
              pl: "W **każdym** trójkącie!",
              ua: "У **кожному** трикутнику!",
            },
          },
        },
      ],
    },

    /* 13 — Brakujący kąt */
    {
      type: "practice",
      heading: {
        pl: "🎯 Oblicz brakujący kąt",
        ua: "🎯 Обчисли відсутній кут",
      },
      parts: [
        {
          text: {
            pl: "Znasz dwa kąty. Znajdź trzeci!",
            ua: "Знаєш два кути. Знайди третій!",
          },
        },
        tri("missing"),
      ],
      task: {
        id: "m14-missing70",
        type: "input-number",
        level: "B",
        question: {
          pl: "∠ A = 180° − (50° + 60°) = ? °",
          ua: "∠ A = 180° − (50° + 60°) = ? °",
        },
        answer: 70,
        explanation: {
          pl: "50 + 60 = 110.  180 − 110 = **70°**.",
          ua: "50 + 60 = 110.  180 − 110 = **70°**.",
        },
      },
    },

    /* 14 — Maszyna */
    {
      type: "concept",
      heading: {
        pl: "🤖 Maszyna trójkąta",
        ua: "🤖 Машина трикутника",
      },
      parts: [
        {
          text: {
            pl: "🦉 Znasz dwa kąty? Maszyna zawsze działa tak samo:",
            ua: "🦉 Знаєш два кути? Машина завжди працює так само:",
          },
        },
        {
          items: [
            {
              pl: ["1️⃣ Znam 2 kąty -> (*40° i 80°*)"],
              ua: ["1️⃣ Знаю 2 кути -> (*40° i 80°*)"],
            },
            {
              pl: ["2️⃣ Dodaję je -> (*40° + 80° = 120°*)"],
              ua: ["2️⃣ Додаю їх  -> (*40° + 80° = 120°*)"],
            },
            {
              pl: ["3️⃣ Odejmuję od 180°  -> (*180° - 120° = 60°*)"],
              ua: ["3️⃣ Віднімаю від 180°"],
            },
            {
              pl: ["4️⃣ Mam trzeci kąt -> (*60°*)"],
              ua: ["4️⃣ Маю третій кут -> (*60°*)"],
            },
          ],
        },
        tri("machine"),
        {
          rule: {
            label: { pl: "Przykład", ua: "Приклад" },
            lines: {
              pl: "40° + 80° = 120°  →  180° − 120° = 60°",
              ua: "40° + 80° = 120°  →  180° − 120° = 60°",
            },
            text: {
              pl: "Znamy ∠B = 40° i ∠C = 80°. Szukamy ∠A — wychodzi **60°**.",
              ua: "Знаємо ∠B = 40° і ∠C = 80°. Шукаємо ∠A — виходить **60°**.",
            },
          },
        },
      ],
    },

    /* 15 — Czy istnieje */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: czy ten trójkąt istnieje?",
        ua: "🧠 Логіка 3: чи існує цей трикутник?",
      },
      parts: [
        {
          text: {
            pl: "Kąty: **90°, 60°, 40°**. Policz sumę!",
            ua: "Кути: **90°, 60°, 40°**. Порахуй суму!",
          },
        },
      ],
      task: {
        id: "m14-logika3",
        type: "single-choice",
        level: "C",
        question: {
          pl: "90° + 60° + 40° = 190°. Taki trójkąt:",
          ua: "90° + 60° + 40° = 190°. Такий трикутник:",
        },
        options: [
          {
            id: "ok",
            label: { pl: "może istnieć ✅", ua: "може існувати ✅" },
          },
          { id: "no", label: { pl: "nie istnieje ❌", ua: "не існує ❌" } },
        ],
        answer: "no",
        explanation: {
          pl: "190° ≠ 180° → nie istnieje. A 80°+60°+40°=180° → OK!",
          ua: "190° ≠ 180° → не існує. А 80°+60°+40°=180° → OK!",
        },
      },
    },

    /* 24 — Nierówność intro */
    {
      type: "observe",
      heading: {
        pl: "📏 Nierówność trójkąta",
        ua: "📏 Нерівність трикутника",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Trzy patyczki: **4 cm, 5 cm, 10 cm**. Czy złożysz trójkąt?",
              "Spróbujmy „złożyć” je w wyobraźni…",
            ],
            ua: [
              "🦉 Три палички: **4 cm, 5 cm, 10 cm**. Чи складеш трикутник?",
              "Спробуймо «скласти» їх в уяві…",
            ],
          },
        },
        tri("sticks-bad"),
        {
          text: {
            pl: [
              "Kładziemy najdłuższy patyczek (10 cm) jako podstawę.",
              "Od jego końców odkładamy 4 cm i 5 cm — ale **końce się nie spotykają**! Zostaje dziura.",
              "Dlaczego? Bo **4 + 5 = 9**, a 9 jest **mniejsze** niż 10. Dwa krótkie razem są za krótkie, by domknąć figurę.",
            ],
            ua: [
              "Кладемо найдовшу паличку (10 cm) як основу.",
              "Від її кінців відкладаємо 4 cm і 5 cm — але **кінці не зустрічаються**! Лишається дірка.",
              "Чому? Бо **4 + 5 = 9**, а 9 **менше** за 10. Дві короткі разом занадто короткі, щоб замкнути фігуру.",
            ],
          },
        },
        {
          rule: {
            label: { pl: "Wniosek", ua: "Висновок" },
            lines: {
              pl: "4 + 5 = 9  <  10  →  trójkąta nie ma",
              ua: "4 + 5 = 9  <  10  →  трикутника немає",
            },
            text: {
              pl: "Aby powstał trójkąt, suma dwóch boków musi być **większa** od trzeciego.",
              ua: "Щоб вийшов трикутник, сума двох сторін має бути **більшою** за третю.",
            },
          },
        },
      ],
    },

    /* 25 — Reguła */
    {
      type: "concept",
      heading: {
        pl: "🔐 Reguła nierówności",
        ua: "🔐 Правило нерівності",
      },
      parts: [
        {
          rule: {
            label: { pl: "Zasada", ua: "Правило" },
            lines: {
              pl: "Każdy bok < suma dwóch pozostałych",
              ua: "Кожна сторона < сума двох інших",
            },
            text: {
              pl: "4 + 5 = 9 < 10 → nie da się zamknąć trójkąta.",
              ua: "4 + 5 = 9 < 10 → не можна замкнути трикутник.",
            },
          },
        },
        tri("sticks-ok"),
      ],
    },

    /* 26 — Czy da się */
    {
      type: "practice",
      heading: {
        pl: "🎯 Czy da się zbudować?",
        ua: "🎯 Чи можна побудувати?",
      },
      parts: [
        {
          text: {
            pl: "Odcinki: **2 cm, 3 cm, 6 cm**. Sprawdź najdłuższy bok!",
            ua: "Відрізки: **2 cm, 3 cm, 6 cm**. Перевір найдовшу сторону!",
          },
        },
      ],
      task: {
        id: "m14-build-no",
        type: "single-choice",
        level: "B",
        question: {
          pl: "2 + 3 = 5  …  a najdłuższy = 6. Da się?",
          ua: "2 + 3 = 5  …  а найдовша = 6. Можна?",
        },
        options: [
          { id: "t", label: { pl: "TAK — można", ua: "ТАК — можна" } },
          { id: "n", label: { pl: "NIE — nie można", ua: "НІ — не можна" } },
        ],
        answer: "n",
        explanation: {
          pl: "5 < 6 → NIE. Najdłuższy bok musi być **krótszy** niż suma dwóch pozostałych.",
          ua: "5 < 6 → НІ. Найдовша сторона має бути **коротшою** за суму двох інших.",
        },
      },
    },

    /* 27 — Lifehack */
    {
      type: "practice",
      heading: {
        pl: "🔎 Lifehack: sprawdź najdłuższy bok",
        ua: "🔎 Лайфхак: перевір найдовшу сторону",
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Szybki trik: nie musisz sprawdzać trzech nierówności.",
              "Wystarczy sprawdzić **najdłuższy bok** — jeśli on jest krótszy niż suma dwóch pozostałych, trójkąt da się zbudować.",
            ],
            ua: [
              "🦉 Швидкий трюк: не треба перевіряти три нерівності.",
              "Достатньо перевірити **найдовшу сторону** — якщо вона коротша за суму двох інших, трикутник можна побудувати.",
            ],
          },
        },
        {
          text: {
            pl: "Boki: **4, 6, 7**. Najdłuższy = **7**.  4 + 6 = **10**. Czy 7 < 10?",
            ua: "Сторони: **4, 6, 7**. Найдовша = **7**.  4 + 6 = **10**. Чи 7 < 10?",
          },
        },
      ],
      task: {
        id: "m14-build-yes",
        type: "true-false",
        level: "B",
        question: {
          pl: "Można zbudować trójkąt 4–6–7?",
          ua: "Можна побудувати трикутник 4–6–7?",
        },
        answer: true,
        explanation: {
          pl: "Tak! 7 < 10 ✅ — dwa krótsze boki „domykają” najdłuższy.",
          ua: "Так! 7 < 10 ✅ — дві коротші сторони «замикають» найдовшу.",
        },
      },
    },

    /* 28 — Architekt */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 4: architekt",
        ua: "🧠 Логіка 4: архітектор",
      },
      parts: [
        {
          text: {
            pl: [
              "Masz trzy deski. Z którego zestawu zbudujesz trójkąt?",
              "**A** 5, 5, 5",
              "**B** 3, 4, 8",
              "**C** 6, 7, 10",
            ],
            ua: [
              "Маєш три дошки. З якого набору збудуєш трикутник?",
              "**A** 5, 5, 5",
              "**B** 3, 4, 8",
              "**C** 6, 7, 10",
            ],
          },
        },
      ],
      task: {
        id: "m14-logika4",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zestaw NIE daje trójkąta?",
          ua: "Який набір НЕ дає трикутника?",
        },
        options: [
          { id: "a", label: { pl: "A (5+5+5)", ua: "A (5+5+5)" } },
          { id: "b", label: { pl: "B (3+4+8)", ua: "B (3+4+8)" } },
          { id: "c", label: { pl: "C (6+7+10)", ua: "C (6+7+10)" } },
        ],
        answer: "b",
        explanation: {
          pl: "B: 3+4=7 < 8 ❌. A i C — OK.",
          ua: "B: 3+4=7 < 8 ❌. A і C — OK.",
        },
      },
    },

    /* 29 — Ciekawostka (bonus; pełna gra → L15+) */
    {
      type: "observe",
      heading: {
        pl: "💡 Ciekawostka",
        ua: "💡 Цікавинка",
      },
      parts: [
        {
          text: {
            pl: [
              "Jeden trójkąt może mieć **dwie** nazwy naraz:",
              "jedną ze względu na **kąty** i jedną ze względu na **boki**.",
              "Na przykład: **ostrokątny równoramienny**.",
              "Więcej o właściwościach takich trójkątów — w **lekcji 15**.",
            ],
            ua: [
              "Один трикутник може мати **дві** назви водночас:",
              "одну за **кутами** і одну за **сторонами**.",
              "Наприклад: **гострокутний рівнобедрений**.",
              "Більше про властивості таких трикутників — в **уроці 15**.",
            ],
          },
        },
      ],
    },

    /* 30 — Znajdź błąd */
    {
      type: "mistake",
      heading: {
        pl: "🔎 Znajdź błąd",
        ua: "🔎 Знайди помилку",
      },
      parts: [
        {
          text: {
            pl: "Podpisano: „trójkąt prostokątny” — ale nie ma kwadracika 90°.",
            ua: "Підписано: «прямокутний трикутник» — але немає квадратика 90°.",
          },
        },
        tri("acute", { show: true, mark: "to NIE jest prostokątny!" }),
      ],
      task: {
        id: "m14-mistake",
        type: "true-false",
        level: "B",
        question: {
          pl: "Podpis „prostokątny” jest błędny?",
          ua: "Підпис «прямокутний» помилковий?",
        },
        answer: true,
        explanation: {
          pl: "Tak — tu wszystkie kąty ostre → **ostrokątny**.",
          ua: "Так — тут усі кути гострі → **гострокутний**.",
        },
      },
    },

    /* 31 — Ściąga */
    {
      type: "summary",
      heading: {
        pl: "📋 Ściąga: trójkąty",
        ua: "📋 Шпаргалка: трикутники",
      },
      parts: [
        {
          visual: ph(
            "t14-cheat.jpg",
            "Ściąga: trójkąty",
            "Шпаргалка: трикутники",
            "Triangle classification cheat sheet",
          ),
        },
      ],
    },

    /* 32 — Nierówność ściąga */
    {
      type: "summary",
      heading: {
        pl: "🔐 Ściąga: nierówność",
        ua: "🔐 Шпаргалка: нерівність",
      },
      parts: [
        {
          rule: {
            label: { pl: "Szybki test", ua: "Швидкий тест" },
            lines: {
              pl: "Najdłuższy bok < suma dwóch pozostałych",
              ua: "Найдовша сторона < сума двох інших",
            },
            text: {
              pl: "4 + 5 > 7 ✅  ·  4 + 5 < 10 ❌",
              ua: "4 + 5 > 7 ✅  ·  4 + 5 < 10 ❌",
            },
          },
        },
      ],
    },

    /* 33 — Misja */
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz trójkątów (1/4)",
        ua: "🏆 Майстер трикутників (1/4)",
      },
      parts: [tri("obtuse", { show: true })],
      task: {
        id: "m14-fin1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ze względu na kąty to trójkąt:",
          ua: "За кутами це трикутник:",
        },
        options: [
          { id: "o", label: { pl: "ostrokątny", ua: "гострокутний" } },
          { id: "p", label: { pl: "prostokątny", ua: "прямокутний" } },
          { id: "r", label: { pl: "rozwartokątny", ua: "тупокутний" } },
        ],
        answer: "r",
        explanation: {
          pl: "Jeden kąt 120° → rozwartokątny.",
          ua: "Один кут 120° → тупокутний.",
        },
      },
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz trójkątów (2/4)",
        ua: "🏆 Майстер трикутників (2/4)",
      },
      parts: [tri("equil")],
      task: {
        id: "m14-fin2",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ze względu na boki:",
          ua: "За сторонами:",
        },
        options: [
          { id: "e", label: { pl: "równoboczny", ua: "рівносторонній" } },
          { id: "i", label: { pl: "równoramienny", ua: "рівнобедрений" } },
          { id: "s", label: { pl: "różnoboczny", ua: "різносторонній" } },
        ],
        answer: "e",
        explanation: {
          pl: "3 równe boki → **równoboczny**.",
          ua: "3 рівні сторони → **рівносторонній**.",
        },
      },
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz trójkątów (3/4)",
        ua: "🏆 Майстер трикутників (3/4)",
      },
      parts: [
        {
          text: {
            pl: "Kąty: 40° i 80°. Ile ma trzeci?",
            ua: "Кути: 40° і 80°. Скільки третій?",
          },
        },
      ],
      task: {
        id: "m14-fin3",
        type: "input-number",
        level: "B",
        question: {
          pl: "Trzeci kąt = ? °",
          ua: "Третій кут = ? °",
        },
        answer: 60,
        explanation: {
          pl: "40 + 80 = 120.  180 − 120 = **60°**.",
          ua: "40 + 80 = 120.  180 − 120 = **60°**.",
        },
      },
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz trójkątów (4/4)",
        ua: "🏆 Майстер трикутників (4/4)",
      },
      parts: [
        {
          text: {
            pl: "Odcinki: **5 cm, 5 cm, 7 cm**.",
            ua: "Відрізки: **5 cm, 5 cm, 7 cm**.",
          },
        },
      ],
      task: {
        id: "m14-fin4",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Da się zbudować trójkąt?",
          ua: "Можна побудувати трикутник?",
        },
        options: [
          { id: "t", label: { pl: "TAK (5+5>7)", ua: "ТАК (5+5>7)" } },
          { id: "n", label: { pl: "NIE", ua: "НІ" } },
        ],
        answer: "t",
        explanation: {
          pl: "5 + 5 = 10 > 7 ✅ — można zbudować.",
          ua: "5 + 5 = 10 > 7 ✅ — можна побудувати.",
        },
      },
    },

    /* 34 — Drzewo */
    {
      type: "summary",
      heading: {
        pl: "🌳 Mapa trójkąta",
        ua: "🌳 Мапа трикутника",
      },
      parts: [tri("tree")],
    },

    /* 35 — Vocab */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka o trójkątach",
        ua: "📚 Слова про трикутники",
      },
      rows: [
        { pl: "trójkąt ostrokątny", ua: "гострокутний трикутник" },
        { pl: "trójkąt prostokątny", ua: "прямокутний трикутник" },
        { pl: "trójkąt rozwartokątny", ua: "тупокутний трикутник" },
        {
          pl: "równoboczny / równoramienny / różnoboczny",
          ua: "рівносторонній / рівнобедрений / різносторонній",
        },
        { pl: "suma kątów = 180°", ua: "сума кутів = 180°" },
        { pl: "nierówność trójkąta", ua: "нерівність трикутника" },
      ],
      phrases: [
        {
          pl: "Suma kątów wewnętrznych wynosi 180°.",
          ua: "Сума внутрішніх кутів дорівнює 180°.",
        },
        {
          pl: "Najdłuższy bok musi być krótszy niż suma dwóch pozostałych.",
          ua: "Найдовша сторона має бути коротшою за суму двох інших.",
        },
      ],
    },

    /* 36 — Finał */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови",
      },
      text: {
        pl: [
          "Dzisiaj nauczyłeś się **rozpoznawać** trójkąty:",
          "ze względu na **kąty** i ze względu na **boki**.",
          "Wiesz, że trzy kąty zawsze mają razem **180°**,",
          "a nie z każdych trzech odcinków da się zbudować trójkąt.",
          "A właściwości trójkątów równoramiennych i równobocznych…",
          "👀 poznasz w **lekcji 15**!",
        ],
        ua: [
          "Сьогодні ти навчився **розпізнавати** трикутники:",
          "за **кутами** і за **сторонами**.",
          "Ти знаєш, що три кути завжди разом дають **180°**,",
          "і не з будь-яких трьох відрізків можна побудувати трикутник.",
          "А властивості рівнобедрених і рівносторонніх…",
          "👀 пізнаєш в **уроці 15**!",
        ],
      },
    },
  ],
};
