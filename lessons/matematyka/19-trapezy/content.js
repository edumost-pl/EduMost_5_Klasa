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

/** Trapezoid SVG for Lekcja 19 — NO area formula; inclusive def (≥1 pair ∥) */
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
      (color || "#b45309") +
      '" stroke-width="' +
      (w || 2.5) +
      '"' +
      (dash ? ' stroke-dasharray="6 4"' : "") +
      ' stroke-linecap="round"/>'
    );
  }
  function rightMark(x, y, s) {
    s = s || 14;
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
  function tick(x1, y1, x2, y2) {
    var mx = (x1 + x2) / 2,
      my = (y1 + y2) / 2;
    var dx = x2 - x1,
      dy = y2 - y1;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = (-dy / len) * 6,
      ny = (dx / len) * 6;
    return line(mx - nx, my - ny, mx + nx, my + ny, "#7c3aed", false, 2);
  }

  /* Standard isosceles-ish trap: A(120,45) B(320,45) C(380,170) D(60,170) */
  var A = [120, 45],
    B = [320, 45],
    C = [380, 170],
    D = [60, 170];
  var pts =
    A[0] +
    "," +
    A[1] +
    " " +
    B[0] +
    "," +
    B[1] +
    " " +
    C[0] +
    "," +
    C[1] +
    " " +
    D[0] +
    "," +
    D[1];

  if (kind === "trap-bases") {
    H = 230;
    svg =
      poly(pts) +
      line(A[0], A[1] - 6, B[0], B[1] - 6, "#b45309", false, 3) +
      line(D[0], D[1] + 6, C[0], C[1] + 6, "#b45309", false, 3) +
      lab(A[0] - 12, A[1] - 5, "A") +
      lab(B[0] + 12, B[1] - 5, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(220, 30, "AB ∥ DC — podstawy", "#b45309", 13) +
      lab(220, 215, "co najmniej jedna para boków równoległych", "#57534e", 12);
  } else if (kind === "trap-legs") {
    H = 230;
    svg =
      poly(pts) +
      line(A[0], A[1], D[0], D[1], "#7c3aed", false, 3) +
      line(B[0], B[1], C[0], C[1], "#7c3aed", false, 3) +
      lab(A[0] - 12, A[1] - 5, "A") +
      lab(B[0] + 12, B[1] - 5, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(75, 105, "AD", "#7c3aed", 13) +
      lab(365, 105, "BC", "#7c3aed", 13) +
      lab(220, 215, "ramiona = boki nierównoległe", "#57534e", 12);
  } else if (kind === "trap-unequal") {
    H = 230;
    svg =
      poly(pts) +
      lab(220, 35, "5 cm", "#b45309", 13) +
      lab(220, 195, "9 cm", "#b45309", 13) +
      lab(220, 215, "∥, ale nie muszą być równe", "#57534e", 12);
  } else if (kind === "trap-vs-para") {
    H = 210;
    svg =
      poly("40,50 140,50 180,150 20,150", "#ccfbf1", "#0f766e") +
      lab(100, 35, "TRAPEZ", "#0f766e", 12) +
      lab(100, 175, "≥ 1 para ∥", "#57534e", 11) +
      poly("250,55 380,55 340,150 210,150", "#e0f2fe", "#0284c7") +
      lab(295, 40, "RÓWNOLEGŁOBOK", "#0284c7", 12) +
      lab(295, 175, "2 pary ∥", "#57534e", 11);
  } else if (kind === "trap-h") {
    H = 240;
    /* right trap for clear height: A(80,45) B(280,45) C(340,170) D(80,170) */
    svg =
      poly("80,45 280,45 340,170 80,170") +
      line(200, 45, 200, 170, "#b45309") +
      rightMark(200, 156, 14) +
      rightMark(200, 45, 14) +
      lab(70, 40, "A") +
      lab(295, 40, "B") +
      lab(355, 185, "C") +
      lab(70, 185, "D") +
      lab(220, 110, "h", "#b45309", 15) +
      lab(220, 215, "h ⟂ obu podstawom", "#57534e", 12);
  } else if (kind === "right-trap") {
    H = 230;
    svg =
      poly("80,45 280,45 340,170 80,170") +
      rightMark(80, 156, 16) +
      rightMark(80, 45, 16) +
      lab(70, 40, "A") +
      lab(295, 40, "B") +
      lab(355, 185, "C") +
      lab(70, 185, "D") +
      lab(55, 110, "AD", "#b45309", 13) +
      lab(220, 210, "trapez prostokątny · AD = wysokość", "#0f766e", 12);
  } else if (kind === "isos") {
    H = 230;
    svg =
      poly(pts) +
      tick(A[0], A[1], D[0], D[1]) +
      tick(B[0], B[1], C[0], C[1]) +
      lab(A[0] - 12, A[1] - 5, "A") +
      lab(B[0] + 12, B[1] - 5, "B") +
      lab(C[0] + 12, C[1] + 18, "C") +
      lab(D[0] - 12, D[1] + 18, "D") +
      lab(75, 105, "AD", "#7c3aed", 12) +
      lab(365, 105, "BC", "#7c3aed", 12) +
      lab(220, 215, "AD = BC — trapez równoramienny", "#57534e", 12);
  } else if (kind === "find-h") {
    H = 240;
    svg =
      poly(pts) +
      line(200, 45, 200, 170, "#b45309") +
      rightMark(200, 156, 12) +
      line(120, 45, 60, 170, "#a8a29e", true) +
      line(320, 45, 280, 170, "#a8a29e", true) +
      lab(215, 110, "①", "#b45309", 14) +
      lab(80, 100, "②", "#78716c", 14) +
      lab(320, 100, "③", "#78716c", 14) +
      lab(220, 215, "tylko ① ⟂ podstawom", "#57534e", 12);
  } else if (kind === "map") {
    H = 250;
    svg =
      lab(220, 28, "🔶 TRAPEZ", "#0f766e", 18) +
      line(220, 38, 220, 55, "#a8a29e") +
      line(70, 55, 370, 55, "#a8a29e") +
      line(70, 55, 70, 70, "#a8a29e") +
      line(220, 55, 220, 70, "#a8a29e") +
      line(370, 55, 370, 70, "#a8a29e") +
      lab(70, 90, "PODSTAWY", "#b45309", 13) +
      lab(220, 90, "RAMIONA", "#7c3aed", 13) +
      lab(370, 90, "WYSOKOŚĆ", "#0284c7", 13) +
      lab(70, 112, "∥", "#b45309", 14) +
      lab(220, 112, "nierównoległe", "#57534e", 11) +
      lab(370, 112, "⟂ 90°", "#0284c7", 13) +
      line(70, 125, 70, 145, "#a8a29e") +
      line(40, 145, 100, 145, "#a8a29e") +
      lab(40, 170, "równoramienny", "#7c3aed", 11) +
      lab(100, 170, "prostokątny", "#0f766e", 11) +
      lab(40, 190, "równe ramiona", "#57534e", 10) +
      lab(100, 190, "ramię ⟂", "#57534e", 10) +
      lab(220, 230, "podstawa ≠ ramię ≠ wysokość", "#b45309", 13);
  } else if (kind === "angles") {
    H = 230;
    svg =
      poly(pts) +
      lab(145, 70, "70°", "#b45309", 13) +
      lab(100, 150, "110°", "#7c3aed", 13) +
      lab(220, 215, "kąty przy ramieniu → 180°", "#57534e", 12);
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
    /* 1 — Puzzle */
    {
      type: "intro",
      heading: {
        pl: "🔎 Coś tu nie pasuje…",
        ua: "🔎 Щось тут не пасує…"
      },
      parts: [
        {
          visual: ph(
            "t19-puzzle.jpg",
            "Cztery czworokąty — znajdź trapez",
            "Чотири чотирикутники — знайди трапецію",
            "Four quads puzzle"
          )
        },
        {
          text: {
            pl: [
              "🦉 Sowa znalazła cztery czworokąty.",
              "Trzy mają coś wspólnego. Czwarty wygląda trochę inaczej…",
              "🔎 Potrafisz go znaleźć?"
            ],
            ua: [
              "🦉 Сова знайшла чотири чотирикутники.",
              "Три мають щось спільне. Четвертий виглядає трохи інакше…",
              "🔎 Чи вмієш його знайти?"
            ]
          }
        }
      ],
      task: {
        id: "m19-puzzle",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która figura jest „inna” (ma tylko jedną wyraźną parę ∥)?",
          ua: "Яка фігура «інша» (має лише одну виразну пару ∥)?"
        },
        options: [
          { id: "kw", label: { pl: "kwadrat", ua: "квадрат" } },
          { id: "pr", label: { pl: "prostokąt", ua: "прямокутник" } },
          { id: "ro", label: { pl: "równoległobok", ua: "паралелограм" } },
          { id: "tr", label: { pl: "trapez", ua: "трапеція" } }
        ],
        answer: "tr",
        explanation: {
          pl: "🎉 To właśnie **trapez**!",
          ua: "🎉 Це саме **трапеція**!"
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
          pl: "rozpoznać trapez (co najmniej jedna para boków ∥)",
          ua: "розпізнати трапецію (≥ одна пара сторін ∥)"
        },
        {
          pl: "wskazać podstawy i ramiona",
          ua: "вказати основи і бічні сторони"
        },
        {
          pl: "zrozumieć wysokość trapezu (⟂ podstawom)",
          ua: "зрозуміти висоту трапеції (⟂ основам)"
        },
        {
          pl: "rozpoznać trapez prostokątny i równoramienny",
          ua: "розпізнати прямокутну й рівнобічну трапецію"
        }
      ]
    },

    /* 3 — Co wyróżnia */
    {
      type: "observe",
      heading: {
        pl: "🧩 Co wyróżnia trapez?",
        ua: "🧩 Що вирізняє трапецію?"
      },
      parts: [
        fig("trap-bases"),
        {
          text: {
            pl: "Czy widzisz parę boków o tym samym kierunku, które się nie przecinają? **AB ∥ DC** — to **podstawy**.",
            ua: "Чи бачиш пару сторін з тим самим напрямом, які не перетинаються? **AB ∥ DC** — це **основи**."
          }
        }
      ]
    },

    /* 4 — Definicja */
    {
      type: "concept",
      heading: {
        pl: "⭐ Poznajemy definicję",
        ua: "⭐ Пізнаємо означення"
      },
      parts: [
        {
          rule: {
            label: { pl: "Definicja (EduMost)", ua: "Означення (EduMost)" },
            lines: {
              pl: "co najmniej jedna para boków równoległych",
              ua: "принаймні одна пара паралельних сторін"
            },
            text: {
              pl: "⭐ **Trapez** to czworokąt, który ma **co najmniej jedną** parę boków równoległych.",
              ua: "⭐ **Трапеція** — чотирикутник, що має **принаймні одну** пару паралельних сторін."
            }
          }
        },
        fig("trap-bases")
      ]
    },

    /* 5 — Podstawy */
    {
      type: "observe",
      heading: {
        pl: "🚂 Podstawy jadą równolegle",
        ua: "🚂 Основи їдуть паралельно"
      },
      parts: [
        {
          visual: ph(
            "t19-bases.jpg",
            "Podstawy trapezu",
            "Основи трапеції",
            "Bases as tracks"
          )
        },
        {
          text: {
            pl: "Dwie **równoległe** strony trapezu nazywamy **podstawami** (tu: AB i CD).",
            ua: "Дві **паралельні** сторони трапеції називаємо **основами** (тут: AB і CD)."
          }
        }
      ]
    },

    /* 6 — Ramiona */
    {
      type: "concept",
      heading: {
        pl: "🦵 A co z pozostałymi bokami?",
        ua: "🦵 А що з іншими сторонами?"
      },
      parts: [
        fig("trap-legs"),
        {
          items: [
            {
              pl: ["**Podstawy:** AB, CD (równoległe)"],
              ua: ["**Основи:** AB, CD (паралельні)"]
            },
            {
              pl: ["**Ramiona:** AD, BC (nierównoległe)"],
              ua: ["**Бічні:** AD, BC (непаралельні)"]
            }
          ]
        }
      ]
    },

    /* 7 — Quiz ramiona */
    {
      type: "practice",
      heading: {
        pl: "🎯 Podstawy czy ramiona?",
        ua: "🎯 Основи чи бічні?"
      },
      parts: [
        fig("trap-legs"),
        {
          text: {
            pl: "W trapezie ABCD wskaż **ramiona**.",
            ua: "У трапеції ABCD вкажи **бічні**."
          }
        }
      ],
      task: {
        id: "m19-ramiona",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ramiona to:",
          ua: "Бічні сторони — це:"
        },
        options: [
          { id: "a", label: { pl: "AB i CD", ua: "AB і CD" } },
          { id: "b", label: { pl: "AD i BC", ua: "AD і BC" } },
          { id: "c", label: { pl: "AB i BC", ua: "AB і BC" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **AD i BC** — boki nierównoległe.",
          ua: "✅ **AD і BC** — непаралельні сторони."
        }
      }
    },

    /* 8 — Długości podstaw */
    {
      type: "practice",
      heading: {
        pl: "🧠 Minutka logiki",
        ua: "🧠 Хвилинка логіки"
      },
      parts: [
        fig("trap-unequal"),
        {
          text: {
            pl: "Czy podstawy trapezu muszą mieć **tę samą** długość?",
            ua: "Чи основи трапеції мусять мати **ту саму** довжину?"
          }
        }
      ],
      task: {
        id: "m19-dlugosc",
        type: "true-false",
        level: "A",
        question: {
          pl: "Podstawy muszą być równe?",
          ua: "Основи мусять бути рівні?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Są **równoległe**, ale nie muszą być równe (np. 5 cm i 9 cm).",
          ua: "❌ НІ. Вони **паралельні**, але не мусять бути рівні (напр. 5 см і 9 см)."
        }
      }
    },

    /* 9 — Trapez vs równoległobok */
    {
      type: "concept",
      heading: {
        pl: "🔄 Dwie pary czy jedna?",
        ua: "🔄 Дві пари чи одна?"
      },
      parts: [
        fig("trap-vs-para"),
        {
          text: {
            pl: [
              "**Równoległobok** ma **dwie** pary boków równoległych.",
              "**Trapez** (w EduMost) ma **co najmniej jedną** parę.",
              "Dlatego równoległobok spełnia warunek trapezu. Pełna mapa rodziny → lekcja 20."
            ],
            ua: [
              "**Паралелограм** має **дві** пари паралельних сторін.",
              "**Трапеція** (в EduMost) має **принаймні одну** пару.",
              "Тому паралелограм задовольняє умову трапеції. Повна мапа родини → урок 20."
            ]
          }
        }
      ]
    },

    /* 10 — Detektyw */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Detektyw sprawdza figury",
        ua: "🕵️ Детектив перевіряє фігури"
      },
      parts: [
        {
          text: {
            pl: "Najpierw policz **pary** boków równoległych. Która figura **na pewno** jest trapezem w wąskim sensie (wyraźnie jedna para ∥, nie dwie)?",
            ua: "Спочатку полічи **пари** паралельних сторін. Яка фігура **напевно** трапеція у вузькому сенсі (виразно одна пара ∥, не дві)?"
          }
        },
        fig("trap-vs-para")
      ],
      task: {
        id: "m19-detektyw",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Wybierz:",
          ua: "Обери:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "figura z jedną parą boków ∥ (klasyczny trapez)",
              ua: "фігура з однією парою сторін ∥ (класична трапеція)"
            }
          },
          {
            id: "b",
            label: {
              pl: "tylko kwadrat (bo ładny)",
              ua: "лише квадрат (бо гарний)"
            }
          },
          {
            id: "c",
            label: {
              pl: "figura bez żadnej pary ∥",
              ua: "фігура без жодної пари ∥"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "💡 Najpierw licz pary ∥ — nie oceniaj tylko po wyglądzie!",
          ua: "💡 Спочатку лічи пари ∥ — не оцінюй лише за виглядом!"
        }
      }
    },

    /* 11 — Orientacja */
    {
      type: "practice",
      heading: {
        pl: "⚠️ Nie oceniaj po wyglądzie!",
        ua: "⚠️ Не оцінюй за виглядом!"
      },
      parts: [
        {
          visual: ph(
            "t19-rotate.jpg",
            "Trapez w trzech położeniach",
            "Трапеція в трьох положеннях",
            "Rotated traps"
          )
        },
        {
          text: {
            pl: "Czy trapez musi mieć podstawy **poziome**?",
            ua: "Чи трапеція мусить мати основи **горизонтальні**?"
          }
        }
      ],
      task: {
        id: "m19-obrot",
        type: "true-false",
        level: "B",
        question: {
          pl: "Podstawy muszą być poziome?",
          ua: "Основи мусять бути горизонтальними?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE! Figura może być obrócona — ważne są **własności**, nie położenie na ekranie.",
          ua: "❌ НІ! Фігура може бути повернута — важливі **властивості**, не положення на екрані."
        }
      }
    },

    /* 12 — Wysokość intro */
    {
      type: "concept",
      heading: {
        pl: "📐 Pamiętasz wysokość?",
        ua: "📐 Пам’ятаєш висоту?"
      },
      parts: [
        {
          text: {
            pl: [
              "W lekcji 18 poznaliśmy wysokość **równoległoboku**.",
              "Wysokość trapezu działa podobnie: musi być **prostopadła do podstaw**."
            ],
            ua: [
              "В уроці 18 ми пізнали висоту **паралелограма**.",
              "Висота трапеції діє подібно: має бути **перпендикулярною до основ**."
            ]
          }
        },
        fig("trap-h")
      ]
    },

    /* 13 — Def h */
    {
      type: "observe",
      heading: {
        pl: "📏 Wysokość trapezu",
        ua: "📏 Висота трапеції"
      },
      parts: [
        fig("trap-h"),
        {
          rule: {
            label: { pl: "Wysokość", ua: "Висота" },
            text: {
              pl: "⭐ Odcinek **prostopadły** do podstaw, łączący obie podstawy (h ⟂ AB i h ⟂ DC).",
              ua: "⭐ Відрізок **перпендикулярний** до основ, що з’єднує обидві основи (h ⟂ AB і h ⟂ DC)."
            }
          }
        }
      ]
    },

    /* 14 — Ramię ≠ h */
    {
      type: "practice",
      heading: {
        pl: "🧠 Dlaczego wysokość nie jest ramieniem?",
        ua: "🧠 Чому висота — не бічна сторона?"
      },
      parts: [
        fig("trap-legs"),
        {
          text: {
            pl: "Spójrz na ramię AD w zwykłym trapezie. Czy może być wysokością?",
            ua: "Подивись на бічну AD у звичайній трапеції. Чи може бути висотою?"
          }
        }
      ],
      task: {
        id: "m19-ramie-h",
        type: "true-false",
        level: "B",
        question: {
          pl: "Ukośne ramię AD = wysokość?",
          ua: "Похила бічна AD = висота?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE — musi tworzyć **90°** z podstawą. ⚠️ Ale w trapezie **prostokątnym** ramię może być wysokością!",
          ua: "❌ НІ — має утворювати **90°** з основою. ⚠️ Але в **прямокутній** трапеції бічна може бути висотою!"
        }
      }
    },

    /* 15 — Prostokątny */
    {
      type: "concept",
      heading: {
        pl: "📐 Trapez prostokątny",
        ua: "📐 Прямокутна трапеція"
      },
      parts: [
        fig("right-trap"),
        {
          text: {
            pl: [
              "Jedno ramię jest **prostopadłe** do podstaw.",
              "To **trapez prostokątny** — ramię prostopadłe może być jednocześnie **wysokością**."
            ],
            ua: [
              "Одна бічна **перпендикулярна** до основ.",
              "Це **прямокутна трапеція** — перпендикулярна бічна може бути водночас **висотою**."
            ]
          }
        }
      ]
    },

    /* 16 — Gdzie ramię = h */
    {
      type: "practice",
      heading: {
        pl: "🔎 Znajdź wysokość",
        ua: "🔎 Знайди висоту"
      },
      parts: [
        {
          text: {
            pl: "W którym trapezie ramię może być wysokością?",
            ua: "У якій трапеції бічна може бути висотою?"
          }
        },
        fig("right-trap")
      ],
      task: {
        id: "m19-gdzie-h",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Ramię = wysokość:",
          ua: "Бічна = висота:"
        },
        options: [
          { id: "a", label: { pl: "w każdym trapezie", ua: "у кожній трапеції" } },
          {
            id: "b",
            label: { pl: "tylko w prostokątnym", ua: "лише в прямокутній" }
          },
          { id: "c", label: { pl: "w żadnym", ua: "у жодній" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Tylko gdy ramię jest **prostopadłe** do podstaw.",
          ua: "✅ Лише коли бічна **перпендикулярна** до основ."
        }
      }
    },

    /* 17 — TF wysokość */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Prawda czy fałsz?",
        ua: "🧠 Правда чи ні?"
      },
      parts: [
        {
          text: {
            pl: "„Wysokość trapezu **zawsze** jest jednym z jego ramion”.",
            ua: "«Висота трапеції **завжди** є однією з бічних сторін»."
          }
        }
      ],
      task: {
        id: "m19-tf-h",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy to prawda?",
          ua: "Чи це правда?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz. Tylko w trapezie **prostokątnym** ramię ⟂ może być wysokością.",
          ua: "❌ Ні. Лише в **прямокутній** трапеції бічна ⟂ може бути висотою."
        }
      }
    },

    /* 18 — Równoramienny intro */
    {
      type: "observe",
      heading: {
        pl: "🪞 Coś wygląda znajomo…",
        ua: "🪞 Щось виглядає знайомо…"
      },
      parts: [
        {
          visual: ph(
            "t19-isos.jpg",
            "Trapez równoramienny",
            "Рівнобічна трапеція",
            "Isosceles trap"
          )
        },
        {
          text: {
            pl: "Ten trapez wygląda „równo”. Jego **ramiona** mają taką samą długość.",
            ua: "Ця трапеція виглядає «рівно». Її **бічні** мають ту саму довжину."
          }
        }
      ]
    },

    /* 19 — Def równoramienny */
    {
      type: "concept",
      heading: {
        pl: "⭐ Trapez równoramienny",
        ua: "⭐ Рівнобічна трапеція"
      },
      parts: [
        fig("isos"),
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: { pl: "AD = BC", ua: "AD = BC" },
            text: {
              pl: "**Trapez równoramienny** — trapez, którego **ramiona** mają równe długości. (To czworokąt — nie myl z trójkątem równoramiennym!)",
              ua: "**Рівнобічна трапеція** — трапеція, у якої **бічні** рівні. (Це чотирикутник — не плутай із рівнобедреним трикутником!)"
            }
          }
        }
      ]
    },

    /* 20 — Kąty przy podstawie */
    {
      type: "observe",
      heading: {
        pl: "🧠 Co zauważasz?",
        ua: "🧠 Що помічаєш?"
      },
      parts: [
        fig("isos"),
        {
          text: {
            pl: "⭐ W trapezie równoramiennym kąty przy każdej podstawie są **równe**.",
            ua: "⭐ У рівнобічній трапеції кути при кожній основі **рівні**."
          }
        }
      ]
    },

    /* 21 — Oś symetrii */
    {
      type: "observe",
      heading: {
        pl: "🪞 Oś symetrii",
        ua: "🪞 Вісь симетрії"
      },
      parts: [
        {
          visual: ph(
            "t19-fold.jpg",
            "Składanie trapezu równoramiennego",
            "Складання рівнобічної трапеції",
            "Fold symmetry"
          )
        },
        {
          text: {
            pl: "Trapez równoramienny ma **oś symetrii** — połówki pasują do siebie.",
            ua: "Рівнобічна трапеція має **вісь симетрії** — половинки збігаються."
          }
        }
      ]
    },

    /* 22 — Suma 360 */
    {
      type: "practice",
      heading: {
        pl: "📐 Suma kątów",
        ua: "📐 Сума кутів"
      },
      parts: [
        {
          text: {
            pl: "Trapez jest czworokątem. Suma kątów = **360°**. Trzy kąty: 80°, 100°, 90°. Ile ma czwarty?",
            ua: "Трапеція — чотирикутник. Сума кутів = **360°**. Три кути: 80°, 100°, 90°. Скільки четвертий?"
          }
        }
      ],
      task: {
        id: "m19-360",
        type: "input-number",
        level: "A",
        question: {
          pl: "360 − 80 − 100 − 90 = ? °",
          ua: "360 − 80 − 100 − 90 = ? °"
        },
        answer: 90,
        explanation: {
          pl: "✅ **90°**.",
          ua: "✅ **90°**."
        }
      }
    },

    /* 23 — Kąty przy ramieniu */
    {
      type: "concept",
      heading: {
        pl: "🔥 Kąty przy jednym ramieniu",
        ua: "🔥 Кути при одній бічній"
      },
      parts: [
        fig("angles"),
        {
          rule: {
            label: { pl: "Własność", ua: "Властивість" },
            lines: {
              pl: "kąty przy ramieniu → 180°",
              ua: "кути при бічній → 180°"
            },
            text: {
              pl: "⭐ Kąty przy **jednym ramieniu** sumują się do **180°** (bo podstawy są równoległe). Jeśli ∠A = 70°, to ∠D = 110°.",
              ua: "⭐ Кути при **одній бічній** дають **180°** (бо основи паралельні). Якщо ∠A = 70°, то ∠D = 110°."
            }
          }
        }
      ]
    },

    /* 24 — 65° */
    {
      type: "practice",
      heading: {
        pl: "🧠 Minutka logiki — 65°",
        ua: "🧠 Хвилинка логіки — 65°"
      },
      parts: [
        {
          text: {
            pl: "Jeden kąt trapezu ma **65°**. Kąt przy **tym samym** ramieniu ma…?",
            ua: "Один кут трапеції має **65°**. Кут при **тій самій** бічній має…?"
          }
        }
      ],
      task: {
        id: "m19-65",
        type: "single-choice",
        level: "B",
        question: {
          pl: "180° − 65° =",
          ua: "180° − 65° ="
        },
        options: [
          { id: "a", label: { pl: "65°", ua: "65°" } },
          { id: "b", label: { pl: "115°", ua: "115°" } },
          { id: "c", label: { pl: "180°", ua: "180°" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **115°**.",
          ua: "✅ **115°**."
        }
      }
    },

    /* 25 — Robot kąty */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Znajdź błąd",
        ua: "🕵️ Знайди помилку"
      },
      parts: [
        {
          text: {
            pl: "Robot: „W **każdym** trapezie wszystkie kąty są równe”.",
            ua: "Робот: «У **кожній** трапеції всі кути рівні»."
          }
        }
      ],
      task: {
        id: "m19-robot-katy",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy robot ma rację?",
          ua: "Чи робот має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. W zwykłym trapezie kąty nie muszą być równe. (Wszystkie 90° → prostokąt — szczególny przypadek.)",
          ua: "❌ НІ. У звичайній трапеції кути не мусять бути рівні. (Усі 90° → прямокутник — особливий випадок.)"
        }
      }
    },

    /* 26 — Rodzina (lekka) */
    {
      type: "practice",
      heading: {
        pl: "🧩 Kto należy do rodziny?",
        ua: "🧩 Хто в родині?"
      },
      parts: [
        {
          text: {
            pl: "Które figury mają **co najmniej jedną** parę boków równoległych? (Mapa szczegółowa → lekcja 20.)",
            ua: "Які фігури мають **принаймні одну** пару паралельних сторін? (Детальна мапа → урок 20.)"
          }
        }
      ],
      task: {
        id: "m19-rodzina",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Według naszej definicji:",
          ua: "За нашим означенням:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "trapez, równoległobok, prostokąt, kwadrat, romb — wszystkie mają ≥1 parę ∥",
              ua: "трапеція, паралелограм, прямокутник, квадрат, ромб — усі мають ≥1 пару ∥"
            }
          },
          {
            id: "b",
            label: {
              pl: "tylko „zwykły” trapez, nigdy równoległobok",
              ua: "лише «звичайна» трапеція, ніколи паралелограм"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Przy definicji „co najmniej jedna para ∥” — wszystkie te figury spełniają warunek.",
          ua: "✅ При означенні «принаймні одна пара ∥» — усі ці фігури задовольняють умову."
        }
      }
    },

    /* 27 — Każdy równoległobok jest trapezem? */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Zagadka",
        ua: "🧠 Загадка"
      },
      parts: [
        {
          text: {
            pl: "Czy każdy **równoległobok** jest trapezem? (Definicja EduMost: ≥1 para ∥.)",
            ua: "Чи кожен **паралелограм** є трапецією? (Означення EduMost: ≥1 пара ∥.)"
          }
        }
      ],
      task: {
        id: "m19-para-trap",
        type: "true-false",
        level: "C",
        question: {
          pl: "Każdy równoległobok jest trapezem?",
          ua: "Кожен паралелограм є трапецією?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — ma aż **dwie** pary ∥, więc spełnia warunek „co najmniej jedna”.",
          ua: "✅ ТАК — має аж **дві** пари ∥, тож задовольняє «принаймні одну»."
        }
      }
    },

    /* 28 — Równe podstawy */
    {
      type: "practice",
      heading: {
        pl: "🔐 Dwie równe podstawy",
        ua: "🔐 Дві рівні основи"
      },
      parts: [
        {
          text: {
            pl: "Czy z samej równości podstaw możemy powiedzieć, że trapez jest **prostokątny**?",
            ua: "Чи з самої рівності основ можемо сказати, що трапеція **прямокутна**?"
          }
        }
      ],
      task: {
        id: "m19-rowne-pod",
        type: "true-false",
        level: "B",
        question: {
          pl: "Równe podstawy → trapez prostokątny?",
          ua: "Рівні основи → прямокутна трапеція?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Sama równość podstaw **nie** wystarcza do wniosku o kątach prostych.",
          ua: "❌ НІ. Сама рівність основ **не** достатня для висновку про прямі кути."
        }
      }
    },

    /* 29 — Suma 390 */
    {
      type: "practice",
      heading: {
        pl: "🧠 Detektyw ma plan",
        ua: "🧠 Детектив має план"
      },
      parts: [
        {
          text: {
            pl: "Kąty: 90°, 90°, 60°, 150°. Czy taki trapez może istnieć?",
            ua: "Кути: 90°, 90°, 60°, 150°. Чи така трапеція може існувати?"
          }
        }
      ],
      task: {
        id: "m19-390",
        type: "true-false",
        level: "B",
        question: {
          pl: "90+90+60+150 = 390° — czy OK?",
          ua: "90+90+60+150 = 390° — чи OK?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE — suma musi wynosić **360°**.",
          ua: "❌ НІ — сума має бути **360°**."
        }
      }
    },

    /* 30 — Robot ramiona */
    {
      type: "challenge",
      heading: {
        pl: "🤖 Robot pomylił ramiona",
        ua: "🤖 Робот переплутав бічні"
      },
      parts: [
        {
          text: {
            pl: "Robot: „Ramiona trapezu są **zawsze** równej długości”.",
            ua: "Робот: «Бічні трапеції **завжди** рівної довжини»."
          }
        }
      ],
      task: {
        id: "m19-robot-ram",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy robot ma rację?",
          ua: "Чи робот має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Równe ramiona ma trapez **równoramienny**. Zwykły — nie musi.",
          ua: "❌ НІ. Рівні бічні має **рівнобічна** трапеція. Звичайна — не мусить."
        }
      }
    },

    /* 31 — Gra drzwi */
    {
      type: "practice",
      heading: {
        pl: "🎮 Cztery drzwi — wskazówka 1",
        ua: "🎮 Чотири двері — підказка 1"
      },
      parts: [
        {
          text: {
            pl: "„Mam jedno ramię **prostopadłe** do podstaw”.",
            ua: "«Маю одну бічну **перпендикулярну** до основ»."
          }
        }
      ],
      task: {
        id: "m19-drzwi1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Otwórz drzwi:",
          ua: "Відчини двері:"
        },
        options: [
          { id: "a", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } },
          { id: "b", label: { pl: "równoległobok", ua: "паралелограм" } },
          {
            id: "c",
            label: { pl: "trapez prostokątny", ua: "прямокутна трапеція" }
          },
          {
            id: "d",
            label: { pl: "trapez równoramienny", ua: "рівнобічна трапеція" }
          }
        ],
        answer: "c",
        explanation: {
          pl: "✅ **Trapez prostokątny**.",
          ua: "✅ **Прямокутна трапеція**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎮 Cztery drzwi — wskazówka 2",
        ua: "🎮 Чотири двері — підказка 2"
      },
      parts: [
        {
          text: {
            pl: "„Moje ramiona mają **taką samą** długość”.",
            ua: "«Мої бічні мають **ту саму** довжину»."
          }
        }
      ],
      task: {
        id: "m19-drzwi2",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Otwórz drzwi:",
          ua: "Відчини двері:"
        },
        options: [
          { id: "a", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } },
          { id: "b", label: { pl: "równoległobok", ua: "паралелограм" } },
          {
            id: "c",
            label: { pl: "trapez prostokątny", ua: "прямокутна трапеція" }
          },
          {
            id: "d",
            label: { pl: "trapez równoramienny", ua: "рівнобічна трапеція" }
          }
        ],
        answer: "d",
        explanation: {
          pl: "✅ **Trapez równoramienny**.",
          ua: "✅ **Рівнобічна трапеція**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎮 Cztery drzwi — wskazówka 3",
        ua: "🎮 Чотири двері — підказка 3"
      },
      parts: [
        {
          text: {
            pl: "„Mam **dwie** pary boków równoległych”.",
            ua: "«Маю **дві** пари паралельних сторін»."
          }
        }
      ],
      task: {
        id: "m19-drzwi3",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Otwórz drzwi:",
          ua: "Відчини двері:"
        },
        options: [
          { id: "a", label: { pl: "zwykły trapez", ua: "звичайна трапеція" } },
          { id: "b", label: { pl: "równoległobok", ua: "паралелограм" } },
          {
            id: "c",
            label: { pl: "trapez prostokątny", ua: "прямокутна трапеція" }
          },
          {
            id: "d",
            label: { pl: "trapez równoramienny", ua: "рівнобічна трапеція" }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ **Równoległobok**.",
          ua: "✅ **Паралелограм**."
        }
      }
    },

    /* Misje */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 1 — rozpoznaj boki",
        ua: "🏆 Місія 1 — розпізнай сторони"
      },
      parts: [fig("trap-legs")],
      task: {
        id: "m19-misja1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Podstawy i ramiona w ABCD:",
          ua: "Основи і бічні в ABCD:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "podstawy AB, CD · ramiona AD, BC",
              ua: "основи AB, CD · бічні AD, BC"
            }
          },
          {
            id: "b",
            label: {
              pl: "podstawy AD, BC · ramiona AB, CD",
              ua: "основи AD, BC · бічні AB, CD"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Podstawy = ∥, ramiona = pozostałe.",
          ua: "✅ Основи = ∥, бічні = решта."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 2 — wysokość",
        ua: "🏆 Місія 2 — висота"
      },
      parts: [fig("find-h")],
      task: {
        id: "m19-misja2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Wysokość to linia:",
          ua: "Висота — лінія:"
        },
        options: [
          { id: "1", label: { pl: "① — ⟂ do obu podstaw", ua: "① — ⟂ до обох основ" } },
          { id: "2", label: { pl: "② — ramię ukośne", ua: "② — похила бічна" } },
          { id: "3", label: { pl: "③ — inne ramię", ua: "③ — інша бічна" } }
        ],
        answer: "1",
        explanation: {
          pl: "✅ Tylko **①**.",
          ua: "✅ Лише **①**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 3 — trapez prostokątny",
        ua: "🏆 Місія 3 — прямокутна трапеція"
      },
      parts: [fig("right-trap")],
      task: {
        id: "m19-misja3",
        type: "input-number",
        level: "B",
        question: {
          pl: "Przy ramieniu ⟂ drugi kąt przy tym ramieniu ma ? °",
          ua: "При бічній ⟂ другий кут при цій бічній має ? °"
        },
        answer: 90,
        explanation: {
          pl: "✅ **90°** — oba kąty przy ramieniu prostopadłym są proste.",
          ua: "✅ **90°** — обидва кути при перпендикулярній бічній прямі."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 4 — równoramienny",
        ua: "🏆 Місія 4 — рівнобічна"
      },
      parts: [
        {
          text: {
            pl: "Ramiona mają po **6 cm**. Czy podstawy też muszą mieć po 6 cm?",
            ua: "Бічні по **6 см**. Чи основи теж мусять мати по 6 см?"
          }
        }
      ],
      task: {
        id: "m19-misja4",
        type: "true-false",
        level: "B",
        question: {
          pl: "Równe ramiona → równe podstawy?",
          ua: "Рівні бічні → рівні основи?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Równe są **ramiona**, nie podstawy.",
          ua: "❌ НІ. Рівні **бічні**, не основи."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 5 — prawda/fałsz",
        ua: "🏆 Місія 5 — правда/ні"
      },
      parts: [
        {
          text: {
            pl: "„Podstawy zawsze mają taką samą długość” — prawda?",
            ua: "«Основи завжди однакової довжини» — правда?"
          }
        }
      ],
      task: {
        id: "m19-misja5",
        type: "true-false",
        level: "A",
        question: {
          pl: "Podstawy zawsze równe?",
          ua: "Основи завжди рівні?"
        },
        answer: false,
        explanation: {
          pl: "❌ Fałsz. Podstawy są ∥, ale nie muszą być równe. (Ramiona też nie zawsze równe — to tylko równoramienny.)",
          ua: "❌ Ні. Основи ∥, але не мусять бути рівні. (Бічні теж не завжди рівні — лише рівнобічна.)"
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
            label: { pl: "Trapez", ua: "Трапеція" },
            lines: {
              pl: "podstawy ∥ · ramiona · h ⟂ · równoramienny / prostokątny",
              ua: "основи ∥ · бічні · h ⟂ · рівнобічна / прямокутна"
            },
            text: {
              pl: "**Podstawy** = boki równoległe. **Ramiona** = pozostałe. **Wysokość** ⟂ podstawom. Równoramienny → równe ramiona. Prostokątny → ramię ⟂. 🔑 podstawa ≠ ramię ≠ wysokość. (**Bez** wzoru na pole — lekcja 38!)",
              ua: "**Основи** = паралельні. **Бічні** = решта. **Висота** ⟂ основам. Рівнобічна → рівні бічні. Прямокутна → бічна ⟂. 🔑 основа ≠ бічна ≠ висота. (**Без** формули площі — урок 38!)"
            }
          }
        }
      ]
    },

    /* Mapa */
    {
      type: "summary",
      heading: {
        pl: "🗺️ Mapa pamięci",
        ua: "🗺️ Мапа пам’яті"
      },
      parts: [fig("map")]
    },

    /* Odznaka */
    {
      type: "review",
      heading: {
        pl: "🏆 Odznaka: Detektyw trapezów",
        ua: "🏆 Відзнака: Детектив трапецій"
      },
      text: {
        pl: [
          "🦉 Brawo!",
          "Potrafisz rozpoznać: podstawy, ramiona, wysokość,",
          "trapez równoramienny i trapez prostokątny."
        ],
        ua: [
          "🦉 Браво!",
          "Умієш розпізнати: основи, бічні, висоту,",
          "рівнобічну й прямокутну трапецію."
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
            "t19-badge.jpg",
            "Detektyw trapezów",
            "Детектив трапецій",
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
        { pl: "trapez", ua: "трапеція" },
        { pl: "podstawy", ua: "основи" },
        { pl: "ramiona", ua: "бічні сторони" },
        { pl: "wysokość trapezu", ua: "висота трапеції" },
        { pl: "trapez równoramienny", ua: "рівнобічна трапеція" },
        { pl: "trapez prostokątny", ua: "прямокутна трапеція" }
      ],
      phrases: [
        {
          pl: "Trapez ma co najmniej jedną parę boków równoległych.",
          ua: "Трапеція має принаймні одну пару паралельних сторін."
        },
        {
          pl: "Podstawa ≠ ramię ≠ wysokość.",
          ua: "Основа ≠ бічна ≠ висота."
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
          "🔎 Poznaliśmy trapez — i to, że nie każdy czworokąt ma te same własności.",
          "Jak uporządkować wszystkie poznane czworokąty?",
          "🗺️ Lekcja 20 → **Klasyfikacja czworokątów**."
        ],
        ua: [
          "🔎 Ми пізнали трапецію — і те, що не кожен чотирикутник має ті самі властивості.",
          "Як упорядкувати всі пізнані чотирикутники?",
          "🗺️ Урок 20 → **Класифікація чотирикутників**."
        ]
      }
    }
  ]
};
