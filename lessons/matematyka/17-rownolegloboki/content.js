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
    prompt: prompt
  };
}

/** Parallelogram / parallel SVG for Lekcja 17 — NO area formula */
function fig(kind, opt) {
  opt = opt || {};
  var W = 440;
  var H = 220;
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
  function line(x1, y1, x2, y2, color, dash, w) {
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
      (color || "#0f766e") +
      '" stroke-width="' +
      (w || 2.5) +
      '"' +
      (dash ? ' stroke-dasharray="6 4"' : "") +
      ' stroke-linecap="round"/>'
    );
  }
  function arcMark(cx, cy, r, a0, a1, color) {
    var x0 = cx + r * Math.cos(a0);
    var y0 = cy + r * Math.sin(a0);
    var x1 = cx + r * Math.cos(a1);
    var y1 = cy + r * Math.sin(a1);
    return (
      '<path d="M ' +
      x0.toFixed(1) +
      " " +
      y0.toFixed(1) +
      " A " +
      r +
      " " +
      r +
      " 0 0 1 " +
      x1.toFixed(1) +
      " " +
      y1.toFixed(1) +
      '" fill="none" stroke="' +
      (color || "#b45309") +
      '" stroke-width="2"/>'
    );
  }

  /* Standard parallelogram ABCD: A(120,40) B(340,40) C(290,170) D(70,170) — wait that's wrong for AB||DC
     Better: A(100,50) B(340,50) C(380,170) D(140,170) — AB top, DC bottom shifted?
     Classic: A top-left slanted: A(130,45) B(360,45) C(300,175) D(70,175)
     AB = (230,0), DC = (230,0) → parallel equal
     AD = (-60,130), BC = (-60,130) → parallel equal
  */
  var A = [130, 45],
    B = [360, 45],
    C = [300, 175],
    D = [70, 175];
  var pts =
    A[0] + "," + A[1] + " " + B[0] + "," + B[1] + " " + C[0] + "," + C[1] + " " + D[0] + "," + D[1];

  if (kind === "rect-vs-para") {
    H = 210;
    svg =
      poly("40,40 160,40 160,150 40,150", "#e0f2fe", "#0284c7") +
      lab(100, 30, "PROSTOKĄT", "#0284c7", 12) +
      poly("250,55 380,55 340,160 210,160", "#ccfbf1", "#0f766e") +
      lab(295, 40, "RÓWNOLEGŁOBOK", "#0f766e", 12) +
      lab(220, 195, "przeciwległe boki w obu figurach ∥", "#57534e", 12);
  } else if (kind === "parallel-lines") {
    H = 200;
    svg =
      lab(110, 28, "Równoległe", "#0f766e", 14) +
      line(40, 50, 200, 50, "#0f766e") +
      line(40, 80, 200, 80, "#0f766e") +
      lab(110, 110, "∥ nie przecinają się", "#57534e", 12) +
      lab(320, 28, "Nie równoległe", "#dc2626", 14) +
      line(250, 50, 410, 50, "#dc2626") +
      line(280, 80, 400, 140, "#dc2626") +
      lab(330, 170, "przecinają się", "#57534e", 12);
  } else if (kind === "para-abcd") {
    H = 230;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      line(A[0], A[1] - 8, B[0], B[1] - 8, "#b45309", false, 2) +
      line(D[0], D[1] + 8, C[0], C[1] + 8, "#b45309", false, 2) +
      line(A[0] - 10, A[1], D[0] - 10, D[1], "#7c3aed", false, 2) +
      line(B[0] + 10, B[1], C[0] + 10, C[1], "#7c3aed", false, 2) +
      lab(220, 215, "AB ∥ DC   ·   AD ∥ BC", "#57534e", 13);
  } else if (kind === "pairs") {
    H = 230;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(245, 35, "AB", "#b45309", 13) +
      lab(185, 195, "CD", "#b45309", 13) +
      lab(85, 115, "AD", "#7c3aed", 13) +
      lab(350, 115, "BC", "#7c3aed", 13) +
      lab(220, 215, "przeciwległe: AB–CD, AD–BC", "#57534e", 12);
  } else if (kind === "sides-8") {
    H = 230;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(245, 35, "8 cm", "#b45309", 14) +
      lab(185, 195, "?", "#dc2626", 16) +
      lab(220, 215, "CD = ?", "#57534e", 13);
  } else if (kind === "sides-unequal-pairs") {
    H = 230;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(245, 35, "8 cm", "#b45309", 13) +
      lab(185, 195, "8 cm", "#b45309", 13) +
      lab(85, 115, "4 cm", "#7c3aed", 13) +
      lab(350, 115, "4 cm", "#7c3aed", 13) +
      lab(220, 215, "pary równe — nie wszystkie 4!", "#57534e", 12);
  } else if (kind === "angles-70") {
    H = 240;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(155, 70, "70°", "#b45309", 14) +
      lab(320, 70, "?", "#dc2626", 14) +
      lab(260, 150, "70°", "#b45309", 14) +
      lab(120, 150, "?", "#dc2626", 14) +
      lab(220, 220, "przeciwległe kąty…", "#57534e", 12);
  } else if (kind === "angles-filled") {
    H = 240;
    svg =
      poly(pts) +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(155, 70, "70°", "#b45309", 14) +
      lab(310, 70, "110°", "#7c3aed", 14) +
      lab(255, 150, "70°", "#b45309", 14) +
      lab(110, 150, "110°", "#7c3aed", 14) +
      lab(220, 220, "przeciwległe równe · sąsiednie → 180°", "#57534e", 12);
  } else if (kind === "diagonals") {
    H = 240;
    svg =
      poly(pts) +
      line(A[0], A[1], C[0], C[1], "#b45309") +
      line(B[0], B[1], D[0], D[1], "#7c3aed") +
      '<circle cx="215" cy="110" r="5" fill="#0f766e"/>' +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(B[0] + 12, B[1] - 8, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(225, 105, "O", "#0f766e", 13) +
      lab(220, 220, "AO = OC · BO = OD", "#57534e", 13);
  } else if (kind === "diag-14") {
    H = 240;
    svg =
      poly(pts) +
      line(A[0], A[1], C[0], C[1], "#b45309") +
      '<circle cx="215" cy="110" r="5" fill="#0f766e"/>' +
      lab(A[0] - 12, A[1] - 8, "A") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(225, 105, "O", "#0f766e", 13) +
      lab(170, 85, "AC = 14 cm", "#b45309", 13) +
      lab(220, 220, "AO = ?", "#57534e", 13);
  } else if (kind === "family") {
    H = 240;
    svg =
      lab(220, 28, "CZWOROKĄTY", "#1c1917", 16) +
      line(220, 38, 220, 55, "#a8a29e") +
      line(100, 55, 340, 55, "#a8a29e") +
      line(100, 55, 100, 70, "#a8a29e") +
      line(340, 55, 340, 70, "#a8a29e") +
      lab(100, 88, "RÓWNOLEGŁOBOKI", "#0f766e", 13) +
      lab(340, 88, "inne", "#78716c", 13) +
      line(100, 98, 100, 115, "#a8a29e") +
      line(40, 115, 160, 115, "#a8a29e") +
      line(40, 115, 40, 130, "#a8a29e") +
      line(100, 115, 100, 130, "#a8a29e") +
      line(160, 115, 160, 130, "#a8a29e") +
      lab(40, 150, "prostokąt", "#0284c7", 12) +
      lab(100, 150, "romb", "#7c3aed", 12) +
      lab(160, 150, "…", "#78716c", 12) +
      lab(220, 190, "prostokąt ⊂ równoległoboki", "#57534e", 13) +
      lab(220, 215, "romb ⊂ równoległoboki", "#57534e", 13);
  } else if (kind === "map") {
    H = 250;
    svg =
      lab(220, 30, "▱ RÓWNOLEGŁOBOK", "#0f766e", 18) +
      lab(110, 80, "∥ dwie pary", "#0284c7", 13) +
      lab(330, 80, "boki =", "#b45309", 13) +
      lab(110, 140, "kąty =", "#7c3aed", 13) +
      lab(330, 140, "przekątne ÷2", "#0f766e", 13) +
      line(220, 45, 220, 100, "#a8a29e") +
      line(110, 90, 330, 90, "#a8a29e") +
      line(110, 100, 110, 125, "#a8a29e") +
      line(330, 100, 330, 125, "#a8a29e") +
      lab(220, 185, "przeciwległe boki równe", "#57534e", 12) +
      lab(220, 205, "przeciwległe kąty równe · sąsiednie → 180°", "#57534e", 12) +
      lab(220, 225, "przekątne dzielą się na połowy", "#57534e", 12);
  } else if (kind === "four-quads") {
    H = 200;
    /* A para, B trap, C irregular, D kite-ish */
    svg =
      poly("30,50 110,50 95,140 15,140", "#ccfbf1", "#0f766e") +
      lab(65, 30, "A", "#0f766e", 14) +
      poly("150,60 250,50 250,140 150,140", "#fed7aa", "#ea580c") +
      lab(200, 30, "B", "#ea580c", 14) +
      poly("290,45 370,70 350,150 280,120", "#e7e5e4", "#78716c") +
      lab(325, 30, "C", "#78716c", 14) +
      poly("50,165 100,165 120,185 30,185", "#fce7f3", "#db2777") +
      lab(75, 158, "…", "#db2777", 11) +
      lab(220, 190, "sprawdź pary boków równoległych!", "#57534e", 12);
  } else {
    svg = poly(pts);
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
    /* 1 — Dom */
    {
      type: "intro",
      heading: {
        pl: "🏠 Dom, który się przechylił",
        ua: "🏠 Будинок, що нахилився"
      },
      parts: [
        {
          visual: ph(
            "t17-house.jpg",
            "Prostokąt staje się równoległobokiem",
            "Прямокутник стає паралелограмом",
            "House tilt"
          )
        },
        {
          text: {
            pl: [
              "🦉 Sowa Matematyczna zbudowała **prostokątny** domek.",
              "A potem… **przechyliła** go!",
              "Czy figura przestała być prostokątem? Czy stała się **inną** figurą?"
            ],
            ua: [
              "🦉 Сова Математична збудувала **прямокутний** будиночок.",
              "А потім… **нахилила** його!",
              "Чи фігура перестала бути прямокутником? Чи стала **іншою** фігурою?"
            ]
          }
        }
      ],
      task: {
        id: "m17-dom",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po przechyleniu figura:",
          ua: "Після нахилу фігура:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "nadal jest prostokątem (kąty 90°)",
              ua: "досі прямокутник (кути 90°)"
            }
          },
          {
            id: "b",
            label: {
              pl: "stała się równoległobokiem (boki nadal ∥)",
              ua: "стала паралелограмом (сторони досі ∥)"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Przeciwległe boki zostały **równoległe** — to równoległobok!",
          ua: "✅ Протилежні сторони лишилися **паралельними** — це паралелограм!"
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
          pl: "rozpoznać równoległobok (dwie pary boków równoległych)",
          ua: "розпізнати паралелограм (дві пари паралельних сторін)"
        },
        {
          pl: "wskazać boki przeciwległe i sąsiednie",
          ua: "вказати протилежні й сусідні сторони"
        },
        {
          pl: "znać: równe przeciwległe boki i kąty; sąsiednie → 180°",
          ua: "знати: рівні протилежні сторони й кути; сусідні → 180°"
        },
        {
          pl: "wiedzieć, że przekątne dzielą się na połowy",
          ua: "знати, що діагоналі діляться навпіл"
        }
      ]
    },

    /* 3 — Co się zmieniło */
    {
      type: "observe",
      heading: {
        pl: "🔍 Co się zmieniło?",
        ua: "🔍 Що змінилося?"
      },
      parts: [
        fig("rect-vs-para"),
        {
          text: {
            pl: "Sprawdź boki obu figur. Czy w obu **przeciwległe** boki mają ten sam kierunek?",
            ua: "Перевір сторони обох фігур. Чи в обох **протилежні** сторони мають той самий напрям?"
          }
        }
      ]
    },
    {
      type: "practice",
      heading: {
        pl: "🔍 Prostokąt i równoległobok",
        ua: "🔍 Прямокутник і паралелограм"
      },
      parts: [
        {
          text: {
            pl: "W obu figurach przeciwległe boki są **równoległe**.",
            ua: "В обох фігурах протилежні сторони **паралельні**."
          }
        }
      ],
      task: {
        id: "m17-zmiana",
        type: "true-false",
        level: "A",
        question: {
          pl: "W obu figurach przeciwległe boki mają ten sam kierunek (∥)?",
          ua: "В обох фігурах протилежні сторони мають той самий напрям (∥)?"
        },
        answer: true,
        explanation: {
          pl: "✅ Tak! Dlatego powstał **równoległobok**.",
          ua: "✅ Так! Тому й виник **паралелограм**."
        }
      }
    },

    /* 4 — Równoległe */
    {
      type: "concept",
      heading: {
        pl: "🧠 Najważniejsze słowo: RÓWNOLEGŁE",
        ua: "🧠 Найважливіше слово: ПАРАЛЕЛЬНІ"
      },
      parts: [
        {
          text: {
            pl: "Dwie proste są **równoległe**, jeśli leżą w tej samej płaszczyźnie i **nigdy się nie przecinają**.",
            ua: "Дві прямі **паралельні**, якщо лежать в одній площині і **ніколи не перетинаються**."
          }
        },
        fig("parallel-lines"),
        {
          rule: {
            label: { pl: "Podpowiedź", ua: "Підказка" },
            text: {
              pl: "🇺🇦 Паралельні прямі не перетинаються.",
              ua: "🇺🇦 Паралельні прямі не перетинаються."
            }
          }
        }
      ]
    },

    /* 5 — Tory */
    {
      type: "observe",
      heading: {
        pl: "🚂 Tor kolejowy",
        ua: "🚂 Залізнична колія"
      },
      parts: [
        {
          visual: ph(
            "t17-tracks.jpg",
            "Tory równoległe",
            "Паралельні рейки",
            "Railway tracks"
          )
        },
        {
          text: {
            pl: [
              "🚂 Dlaczego szyny mogą biec obok siebie bardzo długo i się **nie spotykają**?",
              "Bo są **równoległe**."
            ],
            ua: [
              "🚂 Чому рейки можуть іти поруч дуже довго і **не зустрітися**?",
              "Бо вони **паралельні**."
            ]
          }
        }
      ]
    },

    /* 6 — Definicja */
    {
      type: "concept",
      heading: {
        pl: "▱ Poznajemy równoległobok",
        ua: "▱ Знайомимось із паралелограмом"
      },
      parts: [
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "dwie pary boków równoległych",
              ua: "дві пари паралельних сторін"
            },
            text: {
              pl: "⭐ **Równoległobok** to czworokąt, który ma **dwie pary** boków równoległych.",
              ua: "⭐ **Паралелограм** — чотирикутник, що має **дві пари** паралельних сторін."
            }
          }
        },
        fig("para-abcd")
      ]
    },

    /* 7 — Znajdź pary */
    {
      type: "practice",
      heading: {
        pl: "🎯 Znajdź dwie pary",
        ua: "🎯 Знайди дві пари"
      },
      parts: [
        fig("pairs"),
        {
          text: {
            pl: "Równoległobok ABCD ma cztery boki. Które są równoległe?",
            ua: "Паралелограм ABCD має чотири сторони. Які паралельні?"
          }
        }
      ],
      task: {
        id: "m17-pary1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Para równoległa (górny i dolny bok):",
          ua: "Паралельна пара (верхня й нижня сторони):"
        },
        options: [
          { id: "a", label: { pl: "AB i BC", ua: "AB і BC" } },
          { id: "b", label: { pl: "AB i CD", ua: "AB і CD" } },
          { id: "c", label: { pl: "AD i AB", ua: "AD і AB" } },
          { id: "d", label: { pl: "BC i CD", ua: "BC і CD" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **AB ∥ CD**. Druga para: **AD ∥ BC**.",
          ua: "✅ **AB ∥ CD**. Друга пара: **AD ∥ BC**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎯 Druga para równoległa",
        ua: "🎯 Друга паралельна пара"
      },
      parts: [fig("pairs")],
      task: {
        id: "m17-pary2",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Druga para boków równoległych to:",
          ua: "Друга пара паралельних сторін:"
        },
        options: [
          { id: "a", label: { pl: "AB i BC", ua: "AB і BC" } },
          { id: "b", label: { pl: "AD i BC", ua: "AD і BC" } },
          { id: "c", label: { pl: "AB i AD", ua: "AB і AD" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **AD ∥ BC**.",
          ua: "✅ **AD ∥ BC**."
        }
      }
    },

    /* 8 — Przeciwległe / sąsiednie */
    {
      type: "practice",
      heading: {
        pl: "🧩 Przeciwległe czy sąsiednie?",
        ua: "🧩 Протилежні чи сусідні?"
      },
      parts: [
        fig("pairs"),
        {
          items: [
            {
              pl: ["**Przeciwległe:** AB i CD · AD i BC"],
              ua: ["**Протилежні:** AB і CD · AD і BC"]
            },
            {
              pl: ["**Sąsiednie:** AB i BC · BC i CD · CD i DA · DA i AB"],
              ua: ["**Сусідні:** AB і BC · BC і CD · CD і DA · DA і AB"]
            }
          ]
        }
      ],
      task: {
        id: "m17-rodzaje",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Boki AB i CD to boki:",
          ua: "Сторони AB і CD — це сторони:"
        },
        options: [
          { id: "p", label: { pl: "przeciwległe", ua: "протилежні" } },
          { id: "s", label: { pl: "sąsiednie", ua: "сусідні" } }
        ],
        answer: "p",
        explanation: {
          pl: "✅ **Przeciwległe** — leżą naprzeciwko siebie.",
          ua: "✅ **Протилежні** — лежать навпроти одна одної."
        }
      }
    },

    /* 9 — Detektyw */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Detektyw sprawdza figurę",
        ua: "🕵️ Детектив перевіряє фігуру"
      },
      parts: [
        {
          visual: ph(
            "t17-cards.jpg",
            "Cztery czworokąty — który równoległobok?",
            "Чотири чотирикутники — який паралелограм?",
            "Four quads"
          )
        },
        {
          text: {
            pl: "Która figura jest równoległobokiem? Nie patrz tylko na „ładny” wygląd — sprawdź **dwie pary** boków równoległych.",
            ua: "Яка фігура — паралелограм? Не дивись лише на «красивий» вигляд — перевір **дві пари** паралельних сторін."
          }
        }
      ],
      task: {
        id: "m17-detektyw",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Równoległobokiem jest figura, która ma:",
          ua: "Паралелограмом є фігура, яка має:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "tylko jedną parę boków równoległych",
              ua: "лише одну пару паралельних сторін"
            }
          },
          {
            id: "b",
            label: {
              pl: "dwie pary boków równoległych",
              ua: "дві пари паралельних сторін"
            }
          },
          {
            id: "c",
            label: {
              pl: "żadnej pary równoległej",
              ua: "жодної паралельної пари"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Definicja: **dwie pary** boków równoległych.",
          ua: "✅ Означення: **дві пари** паралельних сторін."
        }
      }
    },

    /* 10 — Boki równe */
    {
      type: "practice",
      heading: {
        pl: "📏 Czy przeciwległe boki są równe?",
        ua: "📏 Чи протилежні сторони рівні?"
      },
      parts: [
        fig("sides-8"),
        {
          text: {
            pl: "Mamy równoległobok. Jeden bok ma **8 cm**. Ile ma przeciwległy?",
            ua: "Маємо паралелограм. Одна сторона — **8 см**. Скільки протилежна?"
          }
        }
      ],
      task: {
        id: "m17-bok8",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Przeciwległy bok ma:",
          ua: "Протилежна сторона має:"
        },
        options: [
          { id: "5", label: { pl: "5 cm", ua: "5 см" } },
          { id: "8", label: { pl: "8 cm", ua: "8 см" } },
          { id: "16", label: { pl: "16 cm", ua: "16 см" } }
        ],
        answer: "8",
        explanation: {
          pl: "⭐ **8 cm!** Przeciwległe boki mają równe długości.",
          ua: "⭐ **8 см!** Протилежні сторони мають рівні довжини."
        }
      }
    },

    /* 11 — Odkrycie 1 */
    {
      type: "concept",
      heading: {
        pl: "💡 Wielkie odkrycie nr 1",
        ua: "💡 Велике відкриття № 1"
      },
      parts: [
        {
          rule: {
            label: { pl: "Boki", ua: "Сторони" },
            lines: {
              pl: "AB = CD · AD = BC",
              ua: "AB = CD · AD = BC"
            },
            text: {
              pl: "W równoległoboku **przeciwległe boki** mają równe długości.",
              ua: "У паралелограмі **протилежні сторони** мають рівні довжини."
            }
          }
        },
        fig("sides-unequal-pairs")
      ]
    },

    /* 12 — Maszyna boków */
    {
      type: "practice",
      heading: {
        pl: "🤖 Matematyczna maszyna — boki",
        ua: "🤖 Математична машина — сторони"
      },
      parts: [
        {
          text: {
            pl: "Uzupełnij: przeciwległy bok ma **tę samą** długość.",
            ua: "Доповни: протилежна сторона має **ту саму** довжину."
          }
        }
      ],
      task: {
        id: "m17-maszyna",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jeśli dany bok ma 6 cm, 12 cm, 4,5 cm, 10 cm — przeciwległe mają:",
          ua: "Якщо дана сторона 6 см, 12 см, 4,5 см, 10 см — протилежні мають:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "6 · 12 · 4,5 · 10 cm",
              ua: "6 · 12 · 4,5 · 10 см"
            }
          },
          {
            id: "b",
            label: {
              pl: "12 · 6 · 9 · 5 cm",
              ua: "12 · 6 · 9 · 5 см"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Przeciwległe boki są **równej** długości.",
          ua: "✅ Протилежні сторони **рівної** довжини."
        }
      }
    },

    /* 13 — Logika Kuba */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Minutka logiki",
        ua: "🧠 Хвилинка логіки"
      },
      parts: [
        {
          text: {
            pl: "Kuba: „Skoro przeciwległe boki są równe, **wszystkie cztery** boki muszą być równe”.",
            ua: "Куба: «Раз протилежні рівні, то **усі чотири** сторони мусять бути рівні»."
          }
        },
        fig("sides-unequal-pairs")
      ],
      task: {
        id: "m17-kuba",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Kuba ma rację?",
          ua: "Чи Куба має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Równe są **pary** przeciwległych (np. 8 i 8, 4 i 4). Jeśli wszystkie 4 równe → szczególny równoległobok: **romb** (później).",
          ua: "❌ НІ. Рівні **пари** протилежних (напр. 8 і 8, 4 і 4). Якщо всі 4 рівні → особливий паралелограм: **ромб** (пізніше)."
        }
      }
    },

    /* 14 — Kąty intro */
    {
      type: "observe",
      heading: {
        pl: "📐 Czy kąty też mają sekret?",
        ua: "📐 Чи кути теж мають секрет?"
      },
      parts: [
        fig("angles-70"),
        {
          text: {
            pl: "Wiemy już coś o bokach. A co z **kątami**?",
            ua: "Ми вже щось знаємо про сторони. А що з **кутами**?"
          }
        }
      ]
    },

    /* 15 — Odkrycie 2 */
    {
      type: "concept",
      heading: {
        pl: "⭐ Wielkie odkrycie nr 2",
        ua: "⭐ Велике відкриття № 2"
      },
      parts: [
        {
          rule: {
            label: { pl: "Kąty przeciwległe", ua: "Протилежні кути" },
            lines: {
              pl: "∠A = ∠C · ∠B = ∠D",
              ua: "∠A = ∠C · ∠B = ∠D"
            },
            text: {
              pl: "**Przeciwległe kąty** równoległoboku mają równe miary. Jeśli ∠A = 70°, to ∠C = 70°.",
              ua: "**Протилежні кути** паралелограма мають рівні міри. Якщо ∠A = 70°, то ∠C = 70°."
            }
          }
        },
        fig("angles-filled")
      ]
    },

    /* 16 — Sąsiednie */
    {
      type: "practice",
      heading: {
        pl: "🔥 A co z sąsiednimi kątami?",
        ua: "🔥 А що із сусідніми кутами?"
      },
      parts: [
        {
          text: {
            pl: "Jeden kąt ma **70°**. Ile ma kąt **sąsiedni**?",
            ua: "Один кут має **70°**. Скільки має **сусідній** кут?"
          }
        },
        fig("angles-filled")
      ],
      task: {
        id: "m17-sasiedni",
        type: "input-number",
        level: "B",
        question: {
          pl: "180° − 70° = ? °",
          ua: "180° − 70° = ? °"
        },
        answer: 110,
        explanation: {
          pl: "✅ **110°**. Suma sąsiednich kątów = **180°**.",
          ua: "✅ **110°**. Сума сусідніх кутів = **180°**."
        }
      }
    },

    /* 17 — Odkrycie 3 */
    {
      type: "concept",
      heading: {
        pl: "💡 Wielkie odkrycie nr 3",
        ua: "💡 Велике відкриття № 3"
      },
      parts: [
        {
          rule: {
            label: { pl: "Kąty sąsiednie", ua: "Сусідні кути" },
            lines: {
              pl: "α + β = 180°",
              ua: "α + β = 180°"
            },
            text: {
              pl: "Suma miar **sąsiednich** kątów równoległoboku wynosi **180°**.",
              ua: "Сума мір **сусідніх** кутів паралелограма дорівнює **180°**."
            }
          }
        }
      ]
    },

    /* 18 — Zagadka 45 */
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka z kątem 45°",
        ua: "🧠 Загадка з кутом 45°"
      },
      parts: [
        {
          text: {
            pl: "Jeden kąt ma **45°**. Ile mają pozostałe trzy?",
            ua: "Один кут має **45°**. Скільки мають решта три?"
          }
        }
      ],
      task: {
        id: "m17-45",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kąty w kolejności wokół figury:",
          ua: "Кути по колу фігури:"
        },
        options: [
          {
            id: "a",
            label: { pl: "45° · 45° · 45° · 45°", ua: "45° · 45° · 45° · 45°" }
          },
          {
            id: "b",
            label: {
              pl: "45° · 135° · 45° · 135°",
              ua: "45° · 135° · 45° · 135°"
            }
          },
          {
            id: "c",
            label: {
              pl: "45° · 90° · 45° · 90°",
              ua: "45° · 90° · 45° · 90°"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Przeciwległy = 45°. Sąsiednie = 180° − 45° = **135°**.",
          ua: "✅ Протилежний = 45°. Сусідні = 180° − 45° = **135°**."
        }
      }
    },

    /* 19 — Robot błąd */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Znajdź błąd",
        ua: "🕵️ Знайди помилку"
      },
      parts: [
        {
          text: {
            pl: "Robot: „Jeśli jeden kąt ma **80°**, pozostałe mają po **100°**”.",
            ua: "Робот: «Якщо один кут має **80°**, решта по **100°**»."
          }
        }
      ],
      task: {
        id: "m17-robot80",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy robot ma rację?",
          ua: "Чи робот має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Układ: **80° · 100° · 80° · 100°** (przeciwległe równe!).",
          ua: "❌ НІ. Схема: **80° · 100° · 80° · 100°** (протилежні рівні!)."
        }
      }
    },

    /* 20 — Szybki test kątów */
    {
      type: "check",
      heading: {
        pl: "🎯 Szybki test — kąt 120°",
        ua: "🎯 Швидкий тест — кут 120°"
      },
      parts: [
        {
          text: {
            pl: "Kąt A = **120°**. Ile wynoszą kąty C, B, D?",
            ua: "Кут A = **120°**. Чому рівні кути C, B, D?"
          }
        }
      ],
      task: {
        id: "m17-120",
        type: "single-choice",
        level: "B",
        question: {
          pl: "C · B · D =",
          ua: "C · B · D ="
        },
        options: [
          {
            id: "a",
            label: { pl: "120° · 60° · 60°", ua: "120° · 60° · 60°" }
          },
          {
            id: "b",
            label: { pl: "60° · 120° · 60°", ua: "60° · 120° · 60°" }
          },
          {
            id: "c",
            label: {
              pl: "120° · 120° · 120°",
              ua: "120° · 120° · 120°"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ C = 120° (przeciwległy). B = D = 60° (sąsiednie: 180° − 120°).",
          ua: "✅ C = 120° (протилежний). B = D = 60° (сусідні: 180° − 120°)."
        }
      }
    },

    /* 21 — Przekątne nazwa */
    {
      type: "practice",
      heading: {
        pl: "✨ Tajemnicze linie",
        ua: "✨ Таємничі лінії"
      },
      parts: [
        fig("diagonals"),
        {
          text: {
            pl: "Połącz przeciwległe wierzchołki (AC i BD). Jak nazywają się te odcinki?",
            ua: "З’єднай протилежні вершини (AC і BD). Як називаються ці відрізки?"
          }
        }
      ],
      task: {
        id: "m17-przekatne",
        type: "single-choice",
        level: "A",
        question: {
          pl: "To są:",
          ua: "Це:"
        },
        options: [
          { id: "a", label: { pl: "wysokości", ua: "висоти" } },
          { id: "b", label: { pl: "przekątne", ua: "діагоналі" } },
          { id: "c", label: { pl: "środkowe", ua: "медіани" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **Przekątne** łączą przeciwległe wierzchołki.",
          ua: "✅ **Діагоналі** з’єднують протилежні вершини."
        }
      }
    },

    /* 22–23 — Odkrycie 4 */
    {
      type: "concept",
      heading: {
        pl: "⭐ Wielkie odkrycie nr 4",
        ua: "⭐ Велике відкриття № 4"
      },
      parts: [
        fig("diagonals"),
        {
          rule: {
            label: { pl: "Przekątne", ua: "Діагоналі" },
            lines: {
              pl: "AO = OC · BO = OD",
              ua: "AO = OC · BO = OD"
            },
            text: {
              pl: "**Przekątne** równoległoboku dzielą się na **połowy** (punkt O — środek obu).",
              ua: "**Діагоналі** паралелограма діляться **навпіл** (точка O — середина обох)."
            }
          }
        }
      ]
    },

    /* 24 — AO */
    {
      type: "practice",
      heading: {
        pl: "🧩 Brakujący kawałek przekątnej",
        ua: "🧩 Відсутній шматок діагоналі"
      },
      parts: [
        fig("diag-14"),
        {
          text: {
            pl: "Przekątna AC = **14 cm**. Ile ma AO?",
            ua: "Діагональ AC = **14 см**. Скільки AO?"
          }
        }
      ],
      task: {
        id: "m17-ao",
        type: "input-number",
        level: "A",
        question: {
          pl: "AO = ? cm  (14 : 2)",
          ua: "AO = ? см  (14 : 2)"
        },
        answer: 7,
        explanation: {
          pl: "✅ AO = OC = **7 cm**.",
          ua: "✅ AO = OC = **7 см**."
        }
      }
    },

    /* 25 — Detektyw przekątne */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Detektyw bada przekątne",
        ua: "🕵️ Детектив досліджує діагоналі"
      },
      parts: [
        {
          text: {
            pl: "AO = 5 cm, OB = 7 cm. Ile mają całe przekątne AC i BD?",
            ua: "AO = 5 см, OB = 7 см. Скільки цілі діагоналі AC і BD?"
          }
        },
        fig("diagonals")
      ],
      task: {
        id: "m17-acbd",
        type: "single-choice",
        level: "B",
        question: {
          pl: "AC i BD =",
          ua: "AC і BD ="
        },
        options: [
          {
            id: "a",
            label: { pl: "10 cm i 14 cm", ua: "10 см і 14 см" }
          },
          {
            id: "b",
            label: { pl: "5 cm i 7 cm", ua: "5 см і 7 см" }
          },
          {
            id: "c",
            label: { pl: "12 cm i 12 cm", ua: "12 см і 12 см" }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ AC = 5+5 = **10**. BD = 7+7 = **14**. (Nie muszą być równe!)",
          ua: "✅ AC = 5+5 = **10**. BD = 7+7 = **14**. (Не мусять бути рівні!)"
        }
      }
    },

    /* 26 — Czy to równoległobok */
    {
      type: "practice",
      heading: {
        pl: "🔎 Podejrzane czworokąty",
        ua: "🔎 Підозрілі чотирикутники"
      },
      parts: [
        {
          text: {
            pl: "Który opis **pasuje** do równoległoboku?",
            ua: "Який опис **підходить** до паралелограма?"
          }
        }
      ],
      task: {
        id: "m17-podejrzane",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Równoległobokiem jest figura, w której:",
          ua: "Паралелограмом є фігура, у якій:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "AB ∥ CD i AD ∥ BC",
              ua: "AB ∥ CD і AD ∥ BC"
            }
          },
          {
            id: "b",
            label: {
              pl: "tylko jedna para boków równoległych",
              ua: "лише одна пара паралельних сторін"
            }
          },
          {
            id: "c",
            label: {
              pl: "brak par równoległych",
              ua: "немає паралельних пар"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Dwie pary ∥ → równoległobok. (Także gdy wszystkie boki równe i przeciwległe ∥ — to też równoległobok / romb.)",
          ua: "✅ Дві пари ∥ → паралелограм. (Також коли всі сторони рівні й протилежні ∥ — теж паралелограм / ромб.)"
        }
      }
    },

    /* 27 — Prostokąt ⊂ */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Ważna pułapka",
        ua: "🧠 Важлива пастка"
      },
      parts: [
        {
          text: {
            pl: "Czy każdy **prostokąt** jest równoległobokiem?",
            ua: "Чи кожен **прямокутник** є паралелограмом?"
          }
        }
      ],
      task: {
        id: "m17-prost",
        type: "true-false",
        level: "C",
        question: {
          pl: "Każdy prostokąt jest równoległobokiem?",
          ua: "Кожен прямокутник є паралелограмом?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — ma dwie pary boków równoległych. Ale **nie** każdy równoległobok jest prostokątem!",
          ua: "✅ ТАК — має дві пари паралельних сторін. Але **не** кожен паралелограм є прямокутником!"
        }
      }
    },

    /* 28 — Rodzina */
    {
      type: "observe",
      heading: {
        pl: "🌳 Rodzina figur",
        ua: "🌳 Родина фігур"
      },
      parts: [
        fig("family"),
        {
          text: {
            pl: [
              "Niektóre figury mają więcej niż jedną nazwę.",
              "**Prostokąt** i **romb** należą do rodziny równoległoboków."
            ],
            ua: [
              "Деякі фігури мають більше ніж одну назву.",
              "**Прямокутник** і **ромб** належать до родини паралелограмів."
            ]
          }
        }
      ]
    },

    /* 29 — Wygląd */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Czy można oszukać geometrię?",
        ua: "🧠 Чи можна обдурити геометрію?"
      },
      parts: [
        {
          text: {
            pl: "Sowa: „Ten czworokąt **wygląda** jak równoległobok, więc na pewno nim jest”.",
            ua: "Сова: «Цей чотирикутник **виглядає** як паралелограм, тож напевно ним є»."
          }
        }
      ],
      task: {
        id: "m17-wyglad",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy to dobre rozumowanie?",
          ua: "Чи це добре міркування?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Sprawdzamy **własności** (∥), nie tylko wygląd.",
          ua: "❌ НІ. Перевіряємо **властивості** (∥), не лише вигляд."
        }
      }
    },

    /* 30 — Równość boków vs definicja */
    {
      type: "concept",
      heading: {
        pl: "🔐 Tajemniczy czworokąt",
        ua: "🔐 Таємничий чотирикутник"
      },
      parts: [
        {
          text: {
            pl: [
              "Czworokąt ma AB = CD i AD = BC.",
              "W tej lekcji najważniejsze jest rozpoznawanie równoległoboku po **dwóch parach boków równoległych** (definicja).",
              "Równość przeciwległych boków to ważna **własność** — nie myl jej z definicją."
            ],
            ua: [
              "Чотирикутник має AB = CD і AD = BC.",
              "У цьому уроці найважливіше — розпізнавати паралелограм за **двома парами паралельних сторін** (означення).",
              "Рівність протилежних сторін — важлива **властивість**; не плутай її з означенням."
            ]
          }
        }
      ]
    },

    /* 31 — Kąty 70 110 */
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka z czterema kątami",
        ua: "🧠 Загадка з чотирма кутами"
      },
      parts: [
        {
          text: {
            pl: "Kąty: **70°, 110°, 70°, 110°**. Czy może to być równoległobok?",
            ua: "Кути: **70°, 110°, 70°, 110°**. Чи може це бути паралелограм?"
          }
        }
      ],
      task: {
        id: "m17-katy711",
        type: "true-false",
        level: "B",
        question: {
          pl: "Taki układ kątów pasuje do równoległoboku?",
          ua: "Така схема кутів пасує до паралелограма?"
        },
        answer: true,
        explanation: {
          pl: "✅ Tak: przeciwległe 70° i 70°, 110° i 110°; sąsiednie sumują się do 180°.",
          ua: "✅ Так: протилежні 70° і 70°, 110° і 110°; сусідні дають 180°."
        }
      }
    },

    /* 32 — Przekątne ≠ równe */
    {
      type: "challenge",
      heading: {
        pl: "🤖 Robot pomylił przekątne",
        ua: "🤖 Робот переплутав діагоналі"
      },
      parts: [
        {
          text: {
            pl: "Robot: „Przekątne równoległoboku mają **zawsze** taką samą długość”.",
            ua: "Робот: «Діагоналі паралелограма **завжди** однакової довжини»."
          }
        },
        fig("diagonals")
      ],
      task: {
        id: "m17-diag-rowne",
        type: "true-false",
        level: "C",
        question: {
          pl: "Prawda czy fałsz? (przekątne zawsze równe)",
          ua: "Правда чи ні? (діагоналі завжди рівні)"
        },
        answer: false,
        explanation: {
          pl: "❌ FAŁSZ. Dzielą się na połowy, ale mogą mieć różne długości (np. 10 cm i 14 cm).",
          ua: "❌ НІ. Діляться навпіл, але можуть мати різні довжини (напр. 10 см і 14 см)."
        }
      }
    },

    /* 33 — Mapa */
    {
      type: "summary",
      heading: {
        pl: "🧩 Uzupełnij mapę",
        ua: "🧩 Доповни мапу"
      },
      parts: [
        fig("map"),
        {
          items: [
            {
              pl: ["**Boki:** dwie pary równoległych"],
              ua: ["**Сторони:** дві пари паралельних"]
            },
            {
              pl: ["**Długości:** przeciwległe równe"],
              ua: ["**Довжини:** протилежні рівні"]
            },
            {
              pl: ["**Kąty:** przeciwległe równe · sąsiednie → 180°"],
              ua: ["**Кути:** протилежні рівні · сусідні → 180°"]
            },
            {
              pl: ["**Przekątne:** dzielą się na połowy"],
              ua: ["**Діагоналі:** діляться навпіл"]
            }
          ]
        }
      ]
    },

    /* Misje */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 1 — definicja",
        ua: "🏆 Місія 1 — означення"
      },
      parts: [
        {
          text: {
            pl: "Która figura jest równoległobokiem?",
            ua: "Яка фігура — паралелограм?"
          }
        }
      ],
      task: {
        id: "m17-misja1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Równoległobok to czworokąt z:",
          ua: "Паралелограм — чотирикутник із:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "jedną parą boków równoległych",
              ua: "однією парою паралельних сторін"
            }
          },
          {
            id: "b",
            label: {
              pl: "dwoma parami boków równoległych",
              ua: "двома парами паралельних сторін"
            }
          },
          {
            id: "c",
            label: {
              pl: "trzema kątami prostymi",
              ua: "трьома прямими кутами"
            }
          }
        ],
        answer: "b",
        explanation: { pl: "✅ Dwie pary ∥.", ua: "✅ Дві пари ∥." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 2 — boki",
        ua: "🏆 Місія 2 — сторони"
      },
      parts: [],
      task: {
        id: "m17-misja2",
        type: "input-number",
        level: "A",
        question: {
          pl: "AB = 9 cm. Ile wynosi CD? (? cm)",
          ua: "AB = 9 см. Скільки CD? (? см)"
        },
        answer: 9,
        explanation: {
          pl: "✅ **9 cm** — przeciwległe boki równe.",
          ua: "✅ **9 см** — протилежні сторони рівні."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 3 — kąty",
        ua: "🏆 Місія 3 — кути"
      },
      parts: [
        {
          text: {
            pl: "Kąt A = **65°**. Oblicz pozostałe.",
            ua: "Кут A = **65°**. Обчисли решту."
          }
        }
      ],
      task: {
        id: "m17-misja3",
        type: "single-choice",
        level: "B",
        question: {
          pl: "A · B · C · D =",
          ua: "A · B · C · D ="
        },
        options: [
          {
            id: "a",
            label: {
              pl: "65° · 115° · 65° · 115°",
              ua: "65° · 115° · 65° · 115°"
            }
          },
          {
            id: "b",
            label: {
              pl: "65° · 65° · 65° · 65°",
              ua: "65° · 65° · 65° · 65°"
            }
          },
          {
            id: "c",
            label: {
              pl: "65° · 115° · 115° · 65°",
              ua: "65° · 115° · 115° · 65°"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ C = 65°. B = D = 180° − 65° = **115°**.",
          ua: "✅ C = 65°. B = D = 180° − 65° = **115°**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 4 — przekątna",
        ua: "🏆 Місія 4 — діагональ"
      },
      parts: [],
      task: {
        id: "m17-misja4",
        type: "input-number",
        level: "A",
        question: {
          pl: "AC = 18 cm. Ile wynosi AO? (? cm)",
          ua: "AC = 18 см. Скільки AO? (? см)"
        },
        answer: 9,
        explanation: {
          pl: "✅ 18 : 2 = **9 cm**.",
          ua: "✅ 18 : 2 = **9 см**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 5 — detektyw",
        ua: "🏆 Місія 5 — детектив"
      },
      parts: [
        {
          text: {
            pl: "Które zdanie jest **fałszywe**?",
            ua: "Яке речення **хибне**?"
          }
        }
      ],
      task: {
        id: "m17-misja5",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Fałsz to:",
          ua: "Хибне — це:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Przeciwległe boki są równe",
              ua: "Протилежні сторони рівні"
            }
          },
          {
            id: "b",
            label: {
              pl: "Przeciwległe boki są równoległe",
              ua: "Протилежні сторони паралельні"
            }
          },
          {
            id: "c",
            label: {
              pl: "Przeciwległe kąty są równe",
              ua: "Протилежні кути рівні"
            }
          },
          {
            id: "d",
            label: {
              pl: "Wszystkie cztery boki zawsze mają taką samą długość",
              ua: "Усі чотири сторони завжди однакової довжини"
            }
          }
        ],
        answer: "d",
        explanation: {
          pl: "✅ **D** jest fałszem — równe są pary przeciwległych, niekoniecznie wszystkie cztery.",
          ua: "✅ **D** хибне — рівні пари протилежних, не обов’язково всі чотири."
        }
      }
    },

    /* Ściąga */
    {
      type: "summary",
      heading: {
        pl: "🧾 Ściąga Mistrza",
        ua: "🧾 Шпаргалка Майстра"
      },
      parts: [
        {
          rule: {
            label: { pl: "Równoległobok", ua: "Паралелограм" },
            lines: {
              pl: "∥∥ · boki= · kąty= · przekątne ÷2",
              ua: "∥∥ · сторони= · кути= · діагоналі ÷2"
            },
            text: {
              pl: "**Definicja:** dwie pary boków równoległych. **Boki:** przeciwległe równe. **Kąty:** przeciwległe równe; sąsiednie → 180°. **Przekątne:** dzielą się na połowy. (Bez wzoru na pole — to później!)",
              ua: "**Означення:** дві пари паралельних сторін. **Сторони:** протилежні рівні. **Кути:** протилежні рівні; сусідні → 180°. **Діагоналі:** діляться навпіл. (Без формули площі — це пізніше!)"
            }
          }
        }
      ]
    },

    /* Odkrycie final */
    {
      type: "observe",
      heading: {
        pl: "🎨 Wielkie odkrycie",
        ua: "🎨 Велике відкриття"
      },
      parts: [
        {
          visual: ph(
            "t17-discovery.jpg",
            "Cztery tajemnice równoległoboku",
            "Чотири таємниці паралелограма",
            "Discovery rays"
          )
        },
        {
          items: [
            {
              pl: ["1️⃣ równoległość (dwie pary)"],
              ua: ["1️⃣ паралельність (дві пари)"]
            },
            {
              pl: ["2️⃣ równe przeciwległe boki"],
              ua: ["2️⃣ рівні протилежні сторони"]
            },
            {
              pl: ["3️⃣ równe przeciwległe kąty (+ sąsiednie 180°)"],
              ua: ["3️⃣ рівні протилежні кути (+ сусідні 180°)"]
            },
            {
              pl: ["4️⃣ przekątne dzielą się na połowy"],
              ua: ["4️⃣ діагоналі діляться навпіл"]
            }
          ]
        }
      ]
    },

    /* Odznaka */
    {
      type: "review",
      heading: {
        pl: "🏆 Odznaka: Mistrz równoległoboków",
        ua: "🏆 Відзнака: Майстер паралелограмів"
      },
      text: {
        pl: [
          "🎉 Brawo!",
          "Poznałeś figurę jak „pochylony prostokąt” — z własnym zestawem właściwości.",
          "Potrafisz rozpoznać równoległobok, znaleźć przeciwległe boki, obliczyć kąty i użyć przekątnych.",
          "Dzisiaj **nie** liczyliśmy pola — to będzie w lekcji o polu równoległoboku."
        ],
        ua: [
          "🎉 Браво!",
          "Ти пізнав фігуру як «нахилений прямокутник» — зі своїм набором властивостей.",
          "Умієш розпізнати паралелограм, знайти протилежні сторони, обчислити кути й використати діагоналі.",
          "Сьогодні ми **не** рахували площу — це буде в уроці про площу паралелограма."
        ]
      }
    },

    /* Vocab */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka",
        ua: "📚 Слова"
      },
      rows: [
        { pl: "równoległobok", ua: "паралелограм" },
        { pl: "równoległe (∥)", ua: "паралельні (∥)" },
        { pl: "boki przeciwległe / sąsiednie", ua: "протилежні / сусідні сторони" },
        { pl: "przekątne", ua: "діагоналі" },
        { pl: "dzielić na połowy", ua: "ділити навпіл" }
      ],
      phrases: [
        {
          pl: "Równoległobok ma dwie pary boków równoległych.",
          ua: "Паралелограм має дві пари паралельних сторін."
        },
        {
          pl: "Przeciwległe kąty są równe; sąsiednie dają 180°.",
          ua: "Протилежні кути рівні; сусідні дають 180°."
        }
      ]
    },

    /* Co dalej */
    {
      type: "review",
      heading: {
        pl: "🔮 Co dalej?",
        ua: "🔮 Що далі?"
      },
      text: {
        pl: [
          "🦉 Znasz już równoległobok i jego własności.",
          "Następne pytanie: **jak zmierzyć wysokość** równoległoboku?",
          "➡️ Lekcja 18 → **Wysokość równoległoboku** (użyjemy pojęcia z lekcji 16!)."
        ],
        ua: [
          "🦉 Ти вже знаєш паралелограм і його властивості.",
          "Наступне питання: **як виміряти висоту** паралелограма?",
          "➡️ Урок 18 → **Висота паралелограма** (використаємо поняття з уроку 16!)."
        ]
      }
    }
  ]
};
