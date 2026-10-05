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

/** Classification SVG for Lekcja 20 — system of shapes, no area/diagonals overload */
function fig(kind) {
  var W = 440;
  var H = 220;
  var svg = "";

  function poly(pts, fill, stroke) {
    return (
      '<polygon points="' +
      pts +
      '" fill="' +
      (fill || "#ccfbf1") +
      '" fill-opacity="0.5" stroke="' +
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
      (size || 13) +
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
      (color || "#a8a29e") +
      '" stroke-width="' +
      (w || 2) +
      '"' +
      (dash ? ' stroke-dasharray="5 4"' : "") +
      ' stroke-linecap="round"/>'
    );
  }
  function rightMark(x, y, s) {
    s = s || 12;
    return (
      '<rect x="' +
      x +
      '" y="' +
      y +
      '" width="' +
      s +
      '" height="' +
      s +
      '" fill="none" stroke="#0f766e" stroke-width="2"/>'
    );
  }

  if (kind === "quad-abcd") {
    H = 210;
    svg =
      poly("100,40 340,40 380,160 60,160") +
      lab(100, 30, "A") +
      lab(340, 30, "B") +
      lab(395, 175, "C") +
      lab(50, 175, "D") +
      lab(220, 195, "4 boki · 4 wierzchołki · 4 kąty", "#57534e", 12);
  } else if (kind === "gallery") {
    H = 200;
    svg =
      poly("20,40 70,40 70,90 20,90", "#e0f2fe", "#0284c7") +
      lab(45, 30, "□", "#0284c7", 12) +
      poly("95,40 165,40 165,85 95,85", "#ccfbf1", "#0f766e") +
      lab(130, 30, "▭", "#0f766e", 12) +
      poly("195,35 255,55 235,105 175,85", "#fce7f3", "#db2777") +
      lab(215, 25, "♦", "#db2777", 12) +
      poly("275,45 360,45 340,100 255,100", "#e0e7ff", "#4f46e5") +
      lab(310, 35, "▱", "#4f46e5", 12) +
      poly("60,130 140,130 170,175 30,175", "#fed7aa", "#ea580c") +
      lab(100, 120, "🔶", "#ea580c", 11) +
      poly("220,125 320,140 300,180 200,165", "#e7e5e4", "#78716c") +
      lab(260, 115, "inne", "#78716c", 11) +
      lab(220, 195, "wszystkie = czworokąty · różne własności", "#57534e", 11);
  } else if (kind === "trap") {
    H = 200;
    svg =
      poly("120,45 320,45 380,160 60,160", "#fed7aa", "#ea580c") +
      line(120, 38, 320, 38, "#b45309", false, 3) +
      line(60, 168, 380, 168, "#b45309", false, 3) +
      lab(220, 30, "AB ∥ DC", "#b45309", 13) +
      lab(220, 190, "🔶 TRAPEZ · ≥ 1 para ∥", "#57534e", 12);
  } else if (kind === "para") {
    H = 200;
    svg =
      poly("100,45 340,45 300,160 60,160", "#e0e7ff", "#4f46e5") +
      lab(220, 30, "AB ∥ DC · AD ∥ BC", "#4f46e5", 12) +
      lab(220, 190, "🔷 RÓWNOLEGŁOBOK · 2 pary ∥", "#57534e", 12);
  } else if (kind === "rect") {
    H = 190;
    svg =
      poly("90,40 350,40 350,150 90,150", "#ccfbf1", "#0f766e") +
      rightMark(90, 40, 14) +
      rightMark(336, 40, 14) +
      rightMark(90, 136, 14) +
      rightMark(336, 136, 14) +
      lab(220, 175, "▭ PROSTOKĄT · 4 kąty 90°", "#57534e", 12);
  } else if (kind === "rhomb") {
    H = 200;
    svg =
      poly("220,30 340,100 220,170 100,100", "#fce7f3", "#db2777") +
      lab(220, 190, "♦️ ROMB · 4 równe boki", "#57534e", 12);
  } else if (kind === "square") {
    H = 200;
    svg =
      poly("145,40 295,40 295,190 145,190", "#e0f2fe", "#0284c7") +
      rightMark(145, 40, 14) +
      rightMark(281, 40, 14) +
      rightMark(145, 176, 14) +
      rightMark(281, 176, 14) +
      lab(220, 25, "⬜ KWADRAT", "#0284c7", 14);
  } else if (kind === "tree") {
    H = 260;
    svg =
      lab(220, 22, "CZWOROKĄTY", "#1c1917", 15) +
      line(220, 30, 220, 48, "#a8a29e") +
      line(80, 48, 360, 48, "#a8a29e") +
      line(80, 48, 80, 62, "#a8a29e") +
      line(360, 48, 360, 62, "#a8a29e") +
      lab(80, 78, "TRAPEZY (≥1 ∥)", "#ea580c", 12) +
      lab(360, 78, "inne", "#78716c", 12) +
      line(80, 88, 80, 105, "#a8a29e") +
      lab(80, 122, "RÓWNOLEGŁOBOKI", "#4f46e5", 12) +
      lab(80, 140, "(2 pary ∥)", "#57534e", 10) +
      line(80, 150, 80, 165, "#a8a29e") +
      line(20, 165, 140, 165, "#a8a29e") +
      line(20, 165, 20, 178, "#a8a29e") +
      line(140, 165, 140, 178, "#a8a29e") +
      lab(20, 195, "PROSTOKĄT", "#0f766e", 11) +
      lab(140, 195, "ROMB", "#db2777", 11) +
      line(20, 205, 80, 220, "#a8a29e") +
      line(140, 205, 80, 220, "#a8a29e") +
      lab(80, 240, "KWADRAT", "#0284c7", 13) +
      lab(300, 160, "kwadrat ⊂ obu!", "#b45309", 11);
  } else if (kind === "chain-sq") {
    H = 220;
    svg =
      lab(220, 28, "⬜ KWADRAT", "#0284c7", 16) +
      line(220, 40, 220, 58, "#a8a29e") +
      line(100, 58, 340, 58, "#a8a29e") +
      line(100, 58, 100, 75, "#a8a29e") +
      line(340, 58, 340, 75, "#a8a29e") +
      lab(100, 95, "▭ prostokąt", "#0f766e", 13) +
      lab(340, 95, "♦️ romb", "#db2777", 13) +
      line(100, 110, 220, 140, "#a8a29e") +
      line(340, 110, 220, 140, "#a8a29e") +
      lab(220, 160, "▱ równoległobok", "#4f46e5", 13) +
      line(220, 170, 220, 185, "#a8a29e") +
      lab(220, 205, "🔷 czworokąt", "#57534e", 13);
  } else if (kind === "table") {
    H = 250;
    svg =
      lab(70, 25, "Figura", "#57534e", 11) +
      lab(180, 25, "2 pary ∥", "#57534e", 11) +
      lab(280, 25, "4 boki =", "#57534e", 11) +
      lab(380, 25, "4×90°", "#57534e", 11) +
      line(30, 35, 410, 35, "#d6d3d1", false, 1) +
      lab(70, 58, "Trapez", "#ea580c", 12) +
      lab(180, 58, "≥1*", "#ea580c", 12) +
      lab(280, 58, "?", "#78716c", 12) +
      lab(380, 58, "?", "#78716c", 12) +
      lab(70, 95, "Równoległ.", "#4f46e5", 12) +
      lab(180, 95, "✅", "#0f766e", 14) +
      lab(280, 95, "?", "#78716c", 12) +
      lab(380, 95, "?", "#78716c", 12) +
      lab(70, 132, "Prostokąt", "#0f766e", 12) +
      lab(180, 132, "✅", "#0f766e", 14) +
      lab(280, 132, "?", "#78716c", 12) +
      lab(380, 132, "✅", "#0f766e", 14) +
      lab(70, 169, "Romb", "#db2777", 12) +
      lab(180, 169, "✅", "#0f766e", 14) +
      lab(280, 169, "✅", "#0f766e", 14) +
      lab(380, 169, "?", "#78716c", 12) +
      lab(70, 206, "Kwadrat", "#0284c7", 12) +
      lab(180, 206, "✅", "#0f766e", 14) +
      lab(280, 206, "✅", "#0f766e", 14) +
      lab(380, 206, "✅", "#0f766e", 14) +
      lab(220, 235, "* EduMost: trapez = ≥1 para ∥", "#57534e", 11);
  } else if (kind === "para-slant") {
    H = 190;
    svg =
      poly("80,50 320,50 360,150 120,150", "#e0e7ff", "#4f46e5") +
      lab(220, 175, "równoległobok · bez 4×90°", "#57534e", 12);
  } else if (kind === "rhomb-slant") {
    H = 200;
    svg =
      poly("220,25 350,100 220,175 90,100", "#fce7f3", "#db2777") +
      lab(220, 195, "romb · 4 boki = · bez 4×90°", "#57534e", 12);
  } else {
    svg = poly("100,40 340,40 380,160 60,160");
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
    /* 1 — Brama */
    {
      type: "intro",
      heading: {
        pl: "🚪 Brama czterech boków",
        ua: "🚪 Брама чотирьох сторін"
      },
      parts: [
        {
          visual: ph(
            "t20-gate.jpg",
            "Brama czworokątów",
            "Брама чотирикутників",
            "Gate of shapes"
          )
        },
        {
          text: {
            pl: [
              "🦉 Sowa otwiera kolejną bramę.",
              "Za nią figury mają jedną wspólną cechę…",
              "🔎 Potrafisz zgadnąć jaką?"
            ],
            ua: [
              "🦉 Сова відчиняє наступну браму.",
              "За нею фігури мають одну спільну рису…",
              "🔎 Чи вмієш здогадатися яку?"
            ]
          }
        }
      ],
      task: {
        id: "m20-brama",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która figura ma **cztery** boki?",
          ua: "Яка фігура має **чотири** сторони?"
        },
        options: [
          { id: "t", label: { pl: "trójkąt", ua: "трикутник" } },
          { id: "c", label: { pl: "czworokąt", ua: "чотирикутник" } },
          { id: "p", label: { pl: "pięciokąt", ua: "п’ятикутник" } }
        ],
        answer: "c",
        explanation: {
          pl: "✅ **Czworokąt**!",
          ua: "✅ **Чотирикутник**!"
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
          pl: "rozpoznać rodzaje czworokątów po **właściwościach**",
          ua: "розпізнати види чотирикутників за **властивостями**"
        },
        {
          pl: "rozumieć włączanie: kwadrat ⊂ prostokąt ⊂ równoległobok…",
          ua: "розуміти включення: квадрат ⊂ прямокутник ⊂ паралелограм…"
        },
        {
          pl: "wiedzieć, że jedna figura może mieć **kilka nazw**",
          ua: "знати, що одна фігура може мати **кілька назв**"
        },
        {
          pl: "znajdować błędy w klasyfikacji",
          ua: "знаходити помилки в класифікації"
        }
      ]
    },

    /* 3 — Definicja */
    {
      type: "concept",
      heading: {
        pl: "🔷 Czworokąt",
        ua: "🔷 Чотирикутник"
      },
      parts: [
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            text: {
              pl: "⭐ **Czworokąt** to wielokąt, który ma **cztery** boki, **cztery** wierzchołki i **cztery** kąty.",
              ua: "⭐ **Чотирикутник** — многокутник, що має **чотири** сторони, **чотири** вершини і **чотири** кути."
            }
          }
        },
        fig("quad-abcd")
      ]
    },

    /* 4 — Różne figury */
    {
      type: "observe",
      heading: {
        pl: "🧩 Cztery boki — różne figury",
        ua: "🧩 Чотири сторони — різні фігури"
      },
      parts: [
        fig("gallery"),
        {
          text: {
            pl: "Wszystkie mają cztery boki — ale **nie** te same właściwości. Dzisiaj nauczymy się je **klasyfikować**.",
            ua: "Усі мають чотири сторони — але **не** ті самі властивості. Сьогодні навчимося їх **класифікувати**."
          }
        }
      ]
    },

    /* 5 — Zasada detektywa */
    {
      type: "concept",
      heading: {
        pl: "🕵️ Zasada detektywa",
        ua: "🕵️ Правило детектива"
      },
      parts: [
        {
          rule: {
            label: { pl: "Złota zasada", ua: "Золоте правило" },
            lines: {
              pl: "NIE wygląd · TAK właściwości",
              ua: "НЕ вигляд · ТАК властивості"
            },
            text: {
              pl: "❌ Nie oceniamy figury po wyglądzie. ✅ Sprawdzamy jej **właściwości**. Figura może „wyglądać jak kwadrat”, ale bez czterech kątów prostych — nie jest kwadratem.",
              ua: "❌ Не оцінюємо фігуру за виглядом. ✅ Перевіряємо її **властивості**. Фігура може «виглядати як квадрат», але без чотирьох прямих кутів — це не квадрат."
            }
          }
        }
      ]
    },

    /* 6 — Trapez */
    {
      type: "concept",
      heading: {
        pl: "🔶 Jedna para równoległych → trapez",
        ua: "🔶 Одна пара паралельних → трапеція"
      },
      parts: [
        fig("trap"),
        {
          text: {
            pl: "W EduMost: **trapez** = czworokąt z **co najmniej jedną** parą boków równoległych.",
            ua: "В EduMost: **трапеція** = чотирикутник із **принаймні однією** парою паралельних сторін."
          }
        }
      ]
    },

    /* 7 — Równoległobok */
    {
      type: "concept",
      heading: {
        pl: "🔷 Dwie pary równoległych → równoległobok",
        ua: "🔷 Дві пари паралельних → паралелограм"
      },
      parts: [
        fig("para"),
        {
          text: {
            pl: "**Równoległobok** ma **dwie** pary boków równoległych (+ przeciwległe boki i kąty równe — z lekcji 17).",
            ua: "**Паралелограм** має **дві** пари паралельних сторін (+ протилежні сторони й кути рівні — з уроку 17)."
          }
        }
      ]
    },

    /* 8 — Sowa o trapezie */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Minutka logiki",
        ua: "🧠 Хвилинка логіки"
      },
      parts: [
        {
          text: {
            pl: "Sowa: „Każdy równoległobok ma boki równoległe, więc **nie** jest trapezem”.",
            ua: "Сова: «Кожен паралелограм має паралельні сторони, тож **не** є трапецією»."
          }
        }
      ],
      task: {
        id: "m20-sowa-trap",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Sowa ma rację? (def. EduMost: ≥1 para ∥)",
          ua: "Чи Сова має рацію? (означ. EduMost: ≥1 пара ∥)"
        },
        answer: false,
        explanation: {
          pl: "❌ Sowa się myli. Równoległobok ma **dwie** pary ∥ — spełnia warunek trapezu (≥1).",
          ua: "❌ Сова помиляється. Паралелограм має **дві** пари ∥ — задовольняє умову трапеції (≥1)."
        }
      }
    },

    /* 9 — Prostokąt */
    {
      type: "practice",
      heading: {
        pl: "▭ Prostokąt",
        ua: "▭ Прямокутник"
      },
      parts: [
        fig("rect"),
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            text: {
              pl: "⭐ **Prostokąt** = równoległobok z **czterema kątami prostymi**.",
              ua: "⭐ **Прямокутник** = паралелограм із **чотирма прямими кутами**."
            }
          }
        }
      ],
      task: {
        id: "m20-prost-para",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy każdy prostokąt jest równoległobokiem?",
          ua: "Чи кожен прямокутник є паралелограмом?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — ma dwie pary boków równoległych.",
          ua: "✅ ТАК — має дві пари паралельних сторін."
        }
      }
    },

    /* 10 — Odwrotnie */
    {
      type: "practice",
      heading: {
        pl: "🧠 A każdy równoległobok jest prostokątem?",
        ua: "🧠 А кожен паралелограм — прямокутник?"
      },
      parts: [
        fig("para-slant"),
        {
          text: {
            pl: "Czy każdy równoległobok ma cztery kąty proste?",
            ua: "Чи кожен паралелограм має чотири прямі кути?"
          }
        }
      ],
      task: {
        id: "m20-para-prost",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy równoległobok = prostokąt?",
          ua: "Кожен паралелограм = прямокутник?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Może mieć dwie pary ∥ bez czterech kątów 90°.",
          ua: "❌ НІ. Може мати дві пари ∥ без чотирьох кутів 90°."
        }
      }
    },

    /* 11 — Romb */
    {
      type: "concept",
      heading: {
        pl: "♦️ Romb",
        ua: "♦️ Ромб"
      },
      parts: [
        fig("rhomb"),
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            text: {
              pl: "⭐ **Romb** ma **cztery boki równej długości** i jest równoległobokiem.",
              ua: "⭐ **Ромб** має **чотири сторони рівної довжини** і є паралелограмом."
            }
          }
        }
      ]
    },

    /* 12 — Romb ≠ kwadrat */
    {
      type: "practice",
      heading: {
        pl: "🧠 Czy każdy romb jest kwadratem?",
        ua: "🧠 Чи кожен ромб — квадрат?"
      },
      parts: [
        fig("rhomb-slant"),
        {
          text: {
            pl: "Cztery równe boki — czy to wystarczy na kwadrat?",
            ua: "Чотири рівні сторони — чи цього досить для квадрата?"
          }
        }
      ],
      task: {
        id: "m20-romb-kw",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy romb jest kwadratem?",
          ua: "Кожен ромб є квадратом?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Potrzeba jeszcze **czterech kątów prostych**.",
          ua: "❌ НІ. Потрібні ще **чотири прямі кути**."
        }
      }
    },

    /* 13 — Kwadrat */
    {
      type: "concept",
      heading: {
        pl: "⬜ Kwadrat",
        ua: "⬜ Квадрат"
      },
      parts: [
        fig("square"),
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            text: {
              pl: "⭐ **Kwadrat** = cztery **równe** boki + cztery kąty **proste**. To jednocześnie prostokąt i romb!",
              ua: "⭐ **Квадрат** = чотири **рівні** сторони + чотири **прямі** кути. Це водночас прямокутник і ромб!"
            }
          }
        }
      ]
    },

    /* 14 — Wielkie odkrycie */
    {
      type: "practice",
      heading: {
        pl: "🤯 Wielkie odkrycie",
        ua: "🤯 Велике відкриття"
      },
      parts: [
        fig("chain-sq"),
        {
          text: {
            pl: "Czy kwadrat jest prostokątem? Rombem? Równoległobokiem? Czworokątem?",
            ua: "Чи квадрат є прямокутником? Ромбом? Паралелограмом? Чотирикутником?"
          }
        }
      ],
      task: {
        id: "m20-kw-all",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kwadrat jest jednocześnie:",
          ua: "Квадрат є водночас:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "tylko kwadratem (niczym więcej)",
              ua: "лише квадратом (нічим більше)"
            }
          },
          {
            id: "b",
            label: {
              pl: "prostokątem + rombem + równoległobokiem + czworokątem",
              ua: "прямокутником + ромбом + паралелограмом + чотирикутником"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "🔥 Jedna figura może mieć **kilka nazw**, jeśli spełnia kilka zestawów właściwości!",
          ua: "🔥 Одна фігура може мати **кілька назв**, якщо задовольняє кілька наборів властивостей!"
        }
      }
    },

    /* 15 — Mapa */
    {
      type: "observe",
      heading: {
        pl: "🌳 Rodzina czworokątów",
        ua: "🌳 Родина чотирикутників"
      },
      parts: [
        {
          visual: ph(
            "t20-family.jpg",
            "Rodzina czworokątów",
            "Родина чотирикутників",
            "Family tree"
          )
        },
        fig("tree"),
        {
          text: {
            pl: "CZWOROKĄTY → trapezy (≥1 ∥) → równoległoboki → prostokąt / romb → **kwadrat**.",
            ua: "ЧОТИРИКУТНИКИ → трапеції (≥1 ∥) → паралелограми → прямокутник / ромб → **квадрат**."
          }
        }
      ]
    },

    /* 16 — Wstaw w drzewo (MC zamiast drag) */
    {
      type: "practice",
      heading: {
        pl: "🧩 Gdzie w drzewie stoi kwadrat?",
        ua: "🧩 Де в дереві стоїть квадрат?"
      },
      parts: [
        fig("tree"),
        {
          text: {
            pl: "Kwadrat łączy gałęzie prostokąta i rombu.",
            ua: "Квадрат з’єднує гілки прямокутника і ромба."
          }
        }
      ],
      task: {
        id: "m20-drzewo",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kwadrat należy jednocześnie do:",
          ua: "Квадрат належить водночас до:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "tylko gałęzi „inne” (bez równoległoboków)",
              ua: "лише гілки «інші» (без паралелограмів)"
            }
          },
          {
            id: "b",
            label: {
              pl: "prostokątów i rombów (a więc i równoległoboków)",
              ua: "прямокутників і ромбів (а отже й паралелограмів)"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Na mapie stoi na skrzyżowaniu **prostokąt ∩ romb**.",
          ua: "✅ На мапі стоїть на перетині **прямокутник ∩ ромб**."
        }
      }
    },

    /* 17 — Tabela */
    {
      type: "observe",
      heading: {
        pl: "📊 Tabela Mistrza",
        ua: "📊 Таблиця Майстра"
      },
      parts: [
        fig("table"),
        {
          text: {
            pl: "Porównuj właściwości — nie zapamiętuj tylko obrazków!",
            ua: "Порівнюй властивості — не запам’ятовуй лише малюнки!"
          }
        }
      ]
    },

    /* 18 — Sekret kwadratu */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekret kwadratu",
        ua: "🔐 Секрет квадрата"
      },
      parts: [
        fig("chain-sq"),
        {
          text: {
            pl: "Kwadrat spełnia wymagania: prostokąta · rombu · równoległoboku · czworokąta.",
            ua: "Квадрат задовольняє вимоги: прямокутника · ромба · паралелограма · чотирикутника."
          }
        }
      ]
    },

    /* 19–22 Detektyw */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Tajemnicza figura nr 1",
        ua: "🕵️ Таємнича фігура № 1"
      },
      parts: [
        {
          text: {
            pl: "4 boki · 2 pary ∥ · wszystkie kąty 90° · przeciwległe boki równe.",
            ua: "4 сторони · 2 пари ∥ · усі кути 90° · протилежні сторони рівні."
          }
        }
      ],
      task: {
        id: "m20-taj1",
        type: "single-choice",
        level: "B",
        question: {
          pl: "To jest:",
          ua: "Це:"
        },
        options: [
          { id: "a", label: { pl: "romb (bez 90°)", ua: "ромб (без 90°)" } },
          { id: "b", label: { pl: "prostokąt", ua: "прямокутник" } },
          { id: "c", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **Prostokąt** (może być też kwadratem, jeśli boki równe — tu tego nie wiemy).",
          ua: "✅ **Прямокутник** (може бути й квадратом, якщо сторони рівні — тут цього не знаємо)."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🕵️ Tajemnicza figura nr 2",
        ua: "🕵️ Таємнича фігура № 2"
      },
      parts: [
        {
          text: {
            pl: "4 boki · 2 pary ∥ · wszystkie boki równe · **bez** czterech kątów prostych.",
            ua: "4 сторони · 2 пари ∥ · усі сторони рівні · **без** чотирьох прямих кутів."
          }
        }
      ],
      task: {
        id: "m20-taj2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "To jest:",
          ua: "Це:"
        },
        options: [
          { id: "a", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "b", label: { pl: "romb", ua: "ромб" } },
          { id: "c", label: { pl: "prostokąt", ua: "прямокутник" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **Romb**.",
          ua: "✅ **Ромб**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🕵️ Tajemnicza figura nr 3",
        ua: "🕵️ Таємнича фігура № 3"
      },
      parts: [
        {
          text: {
            pl: "4 boki · 2 pary ∥ · 4 równe boki · 4 kąty proste.",
            ua: "4 сторони · 2 пари ∥ · 4 рівні сторони · 4 прямі кути."
          }
        }
      ],
      task: {
        id: "m20-taj3",
        type: "single-choice",
        level: "A",
        question: {
          pl: "To jest:",
          ua: "Це:"
        },
        options: [
          { id: "a", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "b", label: { pl: "tylko trapez", ua: "лише трапеція" } },
          { id: "c", label: { pl: "tylko równoległobok", ua: "лише паралелограм" } }
        ],
        answer: "a",
        explanation: {
          pl: "✅ **Kwadrat**!",
          ua: "✅ **Квадрат**!"
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🕵️ Tajemnicza figura nr 4",
        ua: "🕵️ Таємнича фігура № 4"
      },
      parts: [
        {
          text: {
            pl: "4 boki · **jedna** para boków równoległych · pozostałe nie są równoległe.",
            ua: "4 сторони · **одна** пара паралельних · решта не паралельні."
          }
        }
      ],
      task: {
        id: "m20-taj4",
        type: "single-choice",
        level: "A",
        question: {
          pl: "To jest:",
          ua: "Це:"
        },
        options: [
          { id: "a", label: { pl: "równoległobok", ua: "паралелограм" } },
          { id: "b", label: { pl: "trapez", ua: "трапеція" } },
          { id: "c", label: { pl: "kwadrat", ua: "квадрат" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **Trapez** (klasyczny obraz: jedna para ∥).",
          ua: "✅ **Трапеція** (класичний образ: одна пара ∥)."
        }
      }
    },

    /* Błędy */
    {
      type: "challenge",
      heading: {
        pl: "🚨 Błąd nr 1 — Kuba",
        ua: "🚨 Помилка № 1 — Куба"
      },
      parts: [
        {
          text: {
            pl: "Kuba: „Kwadrat **nie** jest prostokątem, bo ma cztery równe boki”.",
            ua: "Куба: «Квадрат **не** є прямокутником, бо має чотири рівні сторони»."
          }
        }
      ],
      task: {
        id: "m20-blad1",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Kuba ma rację?",
          ua: "Чи Куба має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz. Kwadrat **spełnia** warunki prostokąta (4 kąty 90°).",
          ua: "❌ Ні. Квадрат **задовольняє** умови прямокутника (4 кути 90°)."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "🚨 Błąd nr 2 — Ania",
        ua: "🚨 Помилка № 2 — Аня"
      },
      parts: [
        {
          text: {
            pl: "Ania: „Romb **nie może** być prostokątem”.",
            ua: "Аня: «Ромб **не може** бути прямокутником»."
          }
        }
      ],
      task: {
        id: "m20-blad2",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Ania ma rację?",
          ua: "Чи Аня має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz. **Kwadrat** jest jednocześnie rombem i prostokątem.",
          ua: "❌ Ні. **Квадрат** є водночас ромбом і прямокутником."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "🚨 Błąd nr 3 — Robot",
        ua: "🚨 Помилка № 3 — Робот"
      },
      parts: [
        fig("para-slant"),
        {
          text: {
            pl: "Robot: „Każdy równoległobok jest prostokątem”.",
            ua: "Робот: «Кожен паралелограм є прямокутником»."
          }
        }
      ],
      task: {
        id: "m20-blad3",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy robot ma rację?",
          ua: "Чи робот має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz — równoległobok nie musi mieć kątów prostych.",
          ua: "❌ Ні — паралелограм не мусить мати прямі кути."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "🚨 Błąd nr 4 — Sowa",
        ua: "🚨 Помилка № 4 — Сова"
      },
      parts: [
        {
          text: {
            pl: "Sowa: „Każdy czworokąt jest trapezem”.",
            ua: "Сова: «Кожен чотирикутник є трапецією»."
          }
        }
      ],
      task: {
        id: "m20-blad4",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy Sowa ma rację?",
          ua: "Чи Сова має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz. Czworokąt może **nie** mieć żadnej pary boków równoległych.",
          ua: "❌ Ні. Чотирикутник може **не** мати жодної пари паралельних сторін."
        }
      }
    },

    /* Logika „czy można” */
    {
      type: "practice",
      heading: {
        pl: "🧠 Czy można: prostokąt i romb?",
        ua: "🧠 Чи можна: прямокутник і ромб?"
      },
      parts: [
        {
          text: {
            pl: "Czy figura może być jednocześnie prostokątem i rombem?",
            ua: "Чи фігура може бути водночас прямокутником і ромбом?"
          }
        }
      ],
      task: {
        id: "m20-i1",
        type: "true-false",
        level: "A",
        question: {
          pl: "Prostokąt ∩ romb — możliwe?",
          ua: "Прямокутник ∩ ромб — можливо?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — to **kwadrat**.",
          ua: "✅ ТАК — це **квадрат**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🧠 Czy można: prostokąt, ale nie równoległobok?",
        ua: "🧠 Чи можна: прямокутник, але не паралелограм?"
      },
      parts: [
        {
          text: {
            pl: "Czy istnieje prostokąt, który **nie** jest równoległobokiem?",
            ua: "Чи існує прямокутник, який **не** є паралелограмом?"
          }
        }
      ],
      task: {
        id: "m20-i2",
        type: "true-false",
        level: "B",
        question: {
          pl: "Prostokąt bez bycia równoległobokiem?",
          ua: "Прямокутник без того, щоб бути паралелограмом?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Każdy prostokąt **jest** równoległobokiem.",
          ua: "❌ НІ. Кожен прямокутник **є** паралелограмом."
        }
      }
    },

    /* Zagadki Kim jestem */
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka „Kim jestem?” nr 1",
        ua: "🧠 Загадка «Хто я?» № 1"
      },
      parts: [
        {
          text: {
            pl: "4 boki · 2 pary ∥ · 4 równe boki · **bez** kąta prostego.",
            ua: "4 сторони · 2 пари ∥ · 4 рівні сторони · **без** прямого кута."
          }
        }
      ],
      task: {
        id: "m20-kim1",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kim jestem?",
          ua: "Хто я?"
        },
        options: [
          { id: "a", label: { pl: "romb", ua: "ромб" } },
          { id: "b", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "c", label: { pl: "prostokąt", ua: "прямокутник" } }
        ],
        answer: "a",
        explanation: { pl: "✅ **Romb**.", ua: "✅ **Ромб**." }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka „Kim jestem?” nr 2",
        ua: "🧠 Загадка «Хто я?» № 2"
      },
      parts: [
        {
          text: {
            pl: "4 boki · 2 pary ∥ · 4 kąty proste · nie wszystkie boki muszą być równe.",
            ua: "4 сторони · 2 пари ∥ · 4 прямі кути · не всі сторони мусять бути рівні."
          }
        }
      ],
      task: {
        id: "m20-kim2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kim jestem?",
          ua: "Хто я?"
        },
        options: [
          { id: "a", label: { pl: "romb", ua: "ромб" } },
          { id: "b", label: { pl: "prostokąt", ua: "прямокутник" } },
          { id: "c", label: { pl: "tylko trapez", ua: "лише трапеція" } }
        ],
        answer: "b",
        explanation: { pl: "✅ **Prostokąt**.", ua: "✅ **Прямокутник**." }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka „Kim jestem?” nr 3",
        ua: "🧠 Загадка «Хто я?» № 3"
      },
      parts: [
        {
          text: {
            pl: "4 boki · wszystkie równe · wszystkie kąty 90°. Ile nazw możesz mi dać?",
            ua: "4 сторони · усі рівні · усі кути 90°. Скільки назв можеш мені дати?"
          }
        }
      ],
      task: {
        id: "m20-kim3",
        type: "single-choice",
        level: "C",
        question: {
          pl: "To kwadrat — ile poprawnych nazw?",
          ua: "Це квадрат — скільки правильних назв?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "tylko 1 (kwadrat)",
              ua: "лише 1 (квадрат)"
            }
          },
          {
            id: "b",
            label: {
              pl: "5: kwadrat + romb + prostokąt + równoległobok + czworokąt",
              ua: "5: квадрат + ромб + прямокутник + паралелограм + чотирикутник"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Aż **pięć** nazw naraz!",
          ua: "✅ Аж **п’ять** назв одразу!"
        }
      }
    },

    /* Super logika */
    {
      type: "check",
      heading: {
        pl: "🧠 Jeśli figura jest kwadratem…",
        ua: "🧠 Якщо фігура — квадрат…"
      },
      parts: [
        {
          text: {
            pl: "Jeśli figura jest kwadratem, to…",
            ua: "Якщо фігура — квадрат, то…"
          }
        }
      ],
      task: {
        id: "m20-jesli-kw",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Musi być prawdą, że:",
          ua: "Мусить бути правдою, що:"
        },
        options: [
          { id: "a", label: { pl: "jest rombem", ua: "є ромбом" } },
          { id: "b", label: { pl: "jest prostokątem", ua: "є прямокутником" } },
          {
            id: "c",
            label: { pl: "jest równoległobokiem", ua: "є паралелограмом" }
          },
          {
            id: "d",
            label: { pl: "wszystkie odpowiedzi są prawidłowe", ua: "усі відповіді правильні" }
          }
        ],
        answer: "d",
        explanation: {
          pl: "✅ **D** — wszystkie!",
          ua: "✅ **D** — усі!"
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🔎 Odwrotnie: prostokąt → kwadrat?",
        ua: "🔎 Навпаки: прямокутник → квадрат?"
      },
      parts: [
        {
          text: {
            pl: "Jeśli figura jest prostokątem, czy **musi** być kwadratem? (np. 2 cm × 5 cm)",
            ua: "Якщо фігура — прямокутник, чи **мусить** бути квадратом? (напр. 2 см × 5 см)"
          }
        }
      ],
      task: {
        id: "m20-prost-kw",
        type: "true-false",
        level: "A",
        question: {
          pl: "Każdy prostokąt jest kwadratem?",
          ua: "Кожен прямокутник є квадратом?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE — boki nie muszą być równe.",
          ua: "❌ НІ — сторони не мусять бути рівні."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🔎 Romb → kwadrat?",
        ua: "🔎 Ромб → квадрат?"
      },
      parts: [
        fig("rhomb-slant"),
        {
          text: {
            pl: "Jeśli figura jest rombem (np. kąty 60°/120°), czy musi być kwadratem?",
            ua: "Якщо фігура — ромб (напр. кути 60°/120°), чи мусить бути квадратом?"
          }
        }
      ],
      task: {
        id: "m20-romb-musi",
        type: "true-false",
        level: "A",
        question: {
          pl: "Każdy romb jest kwadratem?",
          ua: "Кожен ромб є квадратом?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE — kąty nie muszą być proste.",
          ua: "❌ НІ — кути не мусять бути прямими."
        }
      }
    },

    /* Misje */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 1 — cechy → nazwa",
        ua: "🏆 Місія 1 — ознаки → назва"
      },
      parts: [
        {
          text: {
            pl: "2 pary ∥ · wszystkie boki równe · jeden kąt 90°.",
            ua: "2 пари ∥ · усі сторони рівні · один кут 90°."
          }
        }
      ],
      task: {
        id: "m20-misja1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Kim jest?",
          ua: "Хто це?"
        },
        options: [
          { id: "a", label: { pl: "romb bez 90°", ua: "ромб без 90°" } },
          { id: "b", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "c", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Romb + kąt 90° → **kwadrat** (wszystkie kąty będą 90°).",
          ua: "✅ Ромб + кут 90° → **квадрат** (усі кути будуть 90°)."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 2 — równoległobok",
        ua: "🏆 Місія 2 — паралелограм"
      },
      parts: [
        {
          text: {
            pl: "2 pary ∥ · kąty nieproste · przeciwległe boki równe.",
            ua: "2 пари ∥ · кути непрямі · протилежні сторони рівні."
          }
        }
      ],
      task: {
        id: "m20-misja2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co to może być?",
          ua: "Що це може бути?"
        },
        options: [
          { id: "a", label: { pl: "równoległobok", ua: "паралелограм" } },
          { id: "b", label: { pl: "prostokąt", ua: "прямокутник" } },
          { id: "c", label: { pl: "kwadrat", ua: "квадрат" } }
        ],
        answer: "a",
        explanation: {
          pl: "✅ **Równoległobok** (nie prostokąt, bo brak 90°).",
          ua: "✅ **Паралелограм** (не прямокутник, бо немає 90°)."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 3 — kto ma 4×90°?",
        ua: "🏆 Місія 3 — хто має 4×90°?"
      },
      parts: [
        {
          text: {
            pl: "Które figury mają cztery kąty proste?",
            ua: "Які фігури мають чотири прямі кути?"
          }
        }
      ],
      task: {
        id: "m20-misja3",
        type: "single-choice",
        level: "A",
        question: {
          pl: "4 kąty proste mają:",
          ua: "4 прямі кути мають:"
        },
        options: [
          {
            id: "a",
            label: { pl: "kwadrat i prostokąt", ua: "квадрат і прямокутник" }
          },
          {
            id: "b",
            label: { pl: "romb i trapez", ua: "ромб і трапеція" }
          },
          {
            id: "c",
            label: { pl: "tylko romb", ua: "лише ромб" }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ **Kwadrat** i **prostokąt**.",
          ua: "✅ **Квадрат** і **прямокутник**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 4 — Mistrz",
        ua: "🏆 Місія 4 — Майстер"
      },
      parts: [
        {
          text: {
            pl: "Figura jednocześnie: czworokąt · równoległobok · prostokąt · romb?",
            ua: "Фігура водночас: чотирикутник · паралелограм · прямокутник · ромб?"
          }
        }
      ],
      task: {
        id: "m20-misja4",
        type: "single-choice",
        level: "A",
        question: {
          pl: "To musi być:",
          ua: "Це мусить бути:"
        },
        options: [
          { id: "a", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "b", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } },
          { id: "c", label: { pl: "romb bez 90°", ua: "ромб без 90°" } }
        ],
        answer: "a",
        explanation: {
          pl: "🏆 **KWADRAT**!",
          ua: "🏆 **КВАДРАТ**!"
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
            label: { pl: "Klasyfikacja", ua: "Класифікація" },
            lines: {
              pl: "trapez ≥1∥ · równoległobok 2∥ · prostokąt +90° · romb 4= · kwadrat = obu",
              ua: "трапеція ≥1∥ · паралелограм 2∥ · прямокутник +90° · ромб 4= · квадрат = обох"
            },
            text: {
              pl: "🔶 Trapez: ≥1 para ∥ (EduMost). ▱ Równoległobok: 2 pary ∥. ▭ Prostokąt: równoległobok + 4×90°. ♦️ Romb: równoległobok + 4 równe boki. ⬜ Kwadrat: prostokąt + romb. 🕵️ Sprawdzaj **właściwości**, nie wygląd!",
              ua: "🔶 Трапеція: ≥1 пара ∥ (EduMost). ▱ Паралелограм: 2 пари ∥. ▭ Прямокутник: паралелограм + 4×90°. ♦️ Ромб: паралелограм + 4 рівні сторони. ⬜ Квадрат: прямокутник + ромб. 🕵️ Перевіряй **властивості**, не вигляд!"
            }
          }
        }
      ]
    },

    /* Wielka mapa */
    {
      type: "summary",
      heading: {
        pl: "🌳 Wielka mapa figur",
        ua: "🌳 Велика мапа фігур"
      },
      parts: [
        fig("tree"),
        fig("chain-sq"),
        {
          text: {
            pl: "Kliknij w głowie: KWADRAT → prostokąt → równoległobok → czworokąt · oraz KWADRAT → romb → równoległobok → czworokąt.",
            ua: "Уяви: КВАДРАТ → прямокутник → паралелограм → чотирикутник · і КВАДРАТ → ромб → паралелограм → чотирикутник."
          }
        }
      ]
    },

    /* Odznaka */
    {
      type: "review",
      heading: {
        pl: "🏆 Odznaka: Mistrz klasyfikacji",
        ua: "🏆 Відзнака: Майстер класифікації"
      },
      text: {
        pl: [
          "🦉 Brawo, Detektywie!",
          "Figury mają rodziny. Jedna figura może należeć do kilku grup.",
          "Kwadrat jest najlepszym przykładem: czworokąt → równoległobok → prostokąt → romb → kwadrat."
        ],
        ua: [
          "🦉 Браво, Детективе!",
          "Фігури мають родини. Одна фігура може належати до кількох груп.",
          "Квадрат — найкращий приклад: чотирикутник → паралелограм → прямокутник → ромб → квадрат."
        ]
      }
    },
    {
      type: "observe",
      heading: {
        pl: "🎉 Misja zakończona!",
        ua: "🎉 Місію завершено!"
      },
      parts: [
        {
          visual: ph(
            "t20-badge.jpg",
            "Mistrz klasyfikacji czworokątów",
            "Майстер класифікації чотирикутників",
            "Badge"
          )
        }
      ]
    },

    /* Vocab */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka",
        ua: "📚 Слова"
      },
      rows: [
        { pl: "czworokąt", ua: "чотирикутник" },
        { pl: "klasyfikacja", ua: "класифікація" },
        { pl: "właściwości (nie wygląd)", ua: "властивості (не вигляд)" },
        { pl: "prostokąt / romb / kwadrat", ua: "прямокутник / ромб / квадрат" },
        { pl: "należeć do kilku grup", ua: "належати до кількох груп" }
      ],
      phrases: [
        {
          pl: "Nie oceniamy figury po wyglądzie — sprawdzamy właściwości.",
          ua: "Не оцінюємо фігуру за виглядом — перевіряємо властивості."
        },
        {
          pl: "Każdy kwadrat jest prostokątem i rombem.",
          ua: "Кожен квадрат є прямокутником і ромбом."
        }
      ]
    },

    /* Koniec działu */
    {
      type: "review",
      heading: {
        pl: "🌟 Koniec działu „Figury geometryczne”",
        ua: "🌟 Кінець розділу «Геометричні фігури»"
      },
      text: {
        pl: [
          "Znasz już: trójkąty, równoległoboki, trapezy, prostokąty, romby, kwadraty.",
          "Potrafisz mierzyć kąty, rysować wysokości i klasyfikować figury.",
          "🗝️ Ale przygoda dopiero się rozkręca…",
          "🍕 Następny dział: **Ułamki zwykłe**!"
        ],
        ua: [
          "Ти вже знаєш: трикутники, паралелограми, трапеції, прямокутники, ромби, квадрати.",
          "Умієш міряти кути, креслити висоти й класифікувати фігури.",
          "🗝️ Але пригода тільки розкручується…",
          "🍕 Наступний розділ: **Звичайні дроби**!"
        ]
      }
    }
  ]
};
