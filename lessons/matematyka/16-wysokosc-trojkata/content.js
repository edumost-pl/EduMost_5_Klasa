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

/** Height / triangle SVG for Lekcja 16 — NO area formula */
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
  function line(x1, y1, x2, y2, color, dash) {
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
      '" stroke-width="2.5"' +
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

  if (kind === "height-abc") {
    /* A top, height AH to BC */
    H = 230;
    svg =
      poly("220,30 70,180 370,180") +
      line(220, 30, 220, 180, "#b45309") +
      rightMark(220, 166, 14) +
      lab(220, 22, "A") +
      lab(55, 190, "B") +
      lab(385, 190, "C") +
      lab(235, 110, "h", "#b45309", 16) +
      lab(225, 195, "H", "#0b7d5b", 14) +
      lab(220, 215, "AH ⟂ BC", "#57534e", 13);
  } else if (kind === "find-h") {
    /* three lines from A: only middle is height */
    H = 230;
    svg =
      poly("220,30 70,180 370,180") +
      line(220, 30, 120, 180, "#a8a29e", true) +
      line(220, 30, 220, 180, "#b45309") +
      line(220, 30, 300, 180, "#a8a29e", true) +
      rightMark(220, 166, 14) +
      lab(220, 22, "A") +
      lab(55, 190, "B") +
      lab(385, 190, "C") +
      lab(130, 100, "①", "#78716c", 14) +
      lab(240, 100, "②", "#b45309", 14) +
      lab(300, 100, "③", "#78716c", 14) +
      lab(220, 215, "tylko ② jest wysokością", "#57534e", 12);
  } else if (kind === "base-ab") {
    H = 230;
    svg =
      poly("100,180 340,180 220,40") +
      line(220, 40, 220, 180, "#b45309") +
      rightMark(220, 166, 14) +
      lab(220, 30, "C") +
      lab(85, 190, "A") +
      lab(355, 190, "B") +
      lab(235, 110, "h_c", "#b45309", 15) +
      lab(235, 175, "H", "#b45309", 13) +
      lab(220, 215, "podstawa AB · spodek H", "#57534e", 12);
  } else if (kind === "three-h") {
    /* three heights meeting (acute) — schematic */
    H = 240;
    svg =
      poly("220,35 70,185 370,185") +
      line(220, 35, 220, 185, "#b45309") +
      line(70, 185, 280, 90, "#0f766e") +
      line(370, 185, 160, 90, "#7c3aed") +
      rightMark(220, 171, 12) +
      lab(220, 25, "A") +
      lab(55, 195, "B") +
      lab(385, 195, "C") +
      lab(220, 225, "3 wysokości (ostrokątny)", "#57534e", 12);
  } else if (kind === "obtuse-out") {
    /* obtuse at C; height from A outside */
    H = 240;
    svg =
      poly("280,40 80,170 200,170", "#fed7aa", "#ea580c") +
      line(40, 170, 360, 170, "#a8a29e", true) +
      line(280, 40, 280, 170, "#b45309") +
      rightMark(280, 156, 14) +
      lab(280, 28, "A") +
      lab(65, 185, "B") +
      lab(210, 185, "C") +
      lab(295, 110, "h", "#b45309", 15) +
      lab(295, 165, "H", "#b45309", 13) +
      lab(220, 220, "H poza trójkątem — to nadal wysokość!", "#ea580c", 12);
  } else if (kind === "right") {
    H = 220;
    svg =
      poly("90,30 90,175 340,175") +
      rightMark(90, 157, 18) +
      lab(90, 22, "A") +
      lab(70, 190, "B") +
      lab(355, 190, "C") +
      lab(200, 100, "AB ⟂ BC", "#0f766e", 13) +
      lab(220, 210, "przyprostokątne mogą być wysokościami", "#57534e", 12);
  } else if (kind === "right-3h") {
    H = 230;
    svg =
      poly("90,30 90,175 340,175") +
      rightMark(90, 157, 18) +
      line(90, 30, 90, 175, "#b45309") +
      line(90, 175, 340, 175, "#0f766e") +
      line(200, 85, 200, 175, "#7c3aed") +
      rightMark(200, 161, 12) +
      lab(90, 22, "A") +
      lab(70, 190, "B") +
      lab(355, 190, "C") +
      lab(105, 100, "h₁", "#b45309", 12) +
      lab(220, 165, "h₂", "#0f766e", 12) +
      lab(215, 120, "h₃", "#7c3aed", 12);
  } else if (kind === "ekierka") {
    H = 210;
    svg =
      poly("220,30 70,175 370,175") +
      line(220, 30, 220, 175, "#0f766e") +
      rightMark(220, 161, 14) +
      lab(250, 156, "90°✓", "#0f766e", 14) +
      lab(220, 200, "CH jest wysokością", "#57534e", 13);
  } else if (kind === "not-vertical") {
    /* height not vertical — base tilted */
    H = 220;
    svg =
      poly("80,80 200,180 360,60") +
      line(200, 180, 280, 100, "#b45309") +
      rightMark(268, 112, 12) +
      lab(200, 195, "A") +
      lab(65, 75, "B") +
      lab(375, 55, "C") +
      lab(220, 210, "wysokość ≠ pionowa linia!", "#b45309", 13);
  } else if (kind === "three-lines") {
    H = 230;
    svg =
      poly("220,30 70,180 370,180") +
      line(220, 30, 220, 180, "#0f766e") +
      rightMark(220, 166, 14) +
      line(220, 30, 140, 180, "#a8a29e", true) +
      line(160, 50, 300, 180, "#dc2626", true) +
      lab(220, 22, "A") +
      lab(55, 190, "B") +
      lab(385, 190, "C") +
      lab(235, 100, "l₁", "#0f766e", 14) +
      lab(160, 100, "l₂", "#78716c", 14) +
      lab(280, 90, "l₃", "#dc2626", 14);
  } else if (kind === "map") {
    W = 440;
    H = 240;
    svg =
      lab(220, 30, "🔺 TRÓJKĄT", "#1c1917", 18) +
      line(220, 40, 220, 60, "#a8a29e") +
      line(120, 60, 320, 60, "#a8a29e") +
      line(120, 60, 120, 80, "#a8a29e") +
      line(320, 60, 320, 80, "#a8a29e") +
      lab(120, 95, "WIERZCHOŁEK", "#0f766e", 13) +
      lab(320, 95, "PODSTAWA", "#7c3aed", 13) +
      line(120, 105, 220, 130, "#a8a29e") +
      line(320, 105, 220, 130, "#a8a29e") +
      lab(220, 150, "WYSOKOŚĆ", "#b45309", 16) +
      lab(220, 175, "⟂ 90°", "#0f766e", 14) +
      lab(220, 200, "SPODEK", "#57534e", 14) +
      lab(220, 225, "3 wysokości · nie zawsze wewnątrz", "#78716c", 12);
  } else {
    svg = poly("220,30 80,170 360,170");
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
    /* 1 — Góra */
    {
      type: "intro",
      heading: {
        pl: "🏔️ Góra i jej wysokość",
        ua: "🏔️ Гора і її висота"
      },
      parts: [
        {
          visual: ph(
            "t16-mountain.jpg",
            "Góra: droga czy wysokość?",
            "Гора: шлях чи висота?",
            "Mountain height vs road"
          )
        },
        {
          text: {
            pl: [
              "🦉 Sowa Matematyczna ma zagadkę.",
              "Jak zmierzyć, jak **wysoka** jest góra?",
              "Czy drogą na szczyt — czy **prosto w dół** do podstawy?"
            ],
            ua: [
              "🦉 Сова Математична має загадку.",
              "Як виміряти, яка **висока** гора?",
              "Шляхом на вершину — чи **прямо вниз** до основи?"
            ]
          }
        }
      ],
      task: {
        id: "m16-gora",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wysokość góry to:",
          ua: "Висота гори — це:"
        },
        options: [
          {
            id: "a",
            label: { pl: "długość drogi na szczyt", ua: "довжина шляху на вершину" }
          },
          {
            id: "b",
            label: {
              pl: "odległość prostopadła od szczytu do podstawy",
              ua: "перпендикулярна відстань від вершини до основи"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Wysokość mierzymy po linii **prostopadłej** do podstawy!",
          ua: "✅ Висоту міряємо по лінії **перпендикулярній** до основи!"
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
          pl: "wiedzieć, czym jest wysokość trójkąta",
          ua: "знати, що таке висота трикутника"
        },
        {
          pl: "wskazać wysokość opuszczoną na konkretny bok",
          ua: "вказати висоту, опущену на конкретну сторону"
        },
        {
          pl: "pamiętać: wysokość ⟂ podstawa (90°)",
          ua: "пам’ятати: висота ⟂ основа (90°)"
        },
        {
          pl: "wiedzieć, że trójkąt ma 3 wysokości (czasem poza figurą)",
          ua: "знати, що трикутник має 3 висоти (іноді поза фігурою)"
        }
      ]
    },

    /* 3 — Trójkąt też */
    {
      type: "concept",
      heading: {
        pl: "🔺 Trójkąt też ma wysokość",
        ua: "🔺 Трикутник теж має висоту"
      },
      parts: [
        {
          text: {
            pl: [
              "Zamieńmy górę na **trójkąt**.",
              "Wysokość trójkąta to odcinek poprowadzony **prostopadle** od wierzchołka do prostej zawierającej podstawę."
            ],
            ua: [
              "Замінимо гору на **трикутник**.",
              "Висота трикутника — відрізок, проведений **перпендикулярно** від вершини до прямої, що містить основу."
            ]
          }
        },
        fig("height-abc"),
        {
          items: [
            {
              pl: ["**Wierzchołek** A → **wysokość** AH → **podstawa** BC"],
              ua: ["**Вершина** A → **висота** AH → **основа** BC"]
            }
          ]
        }
      ]
    },

    /* 4 — Prostopadła */
    {
      type: "practice",
      heading: {
        pl: "🧩 Najważniejsze słowo: PROSTOPADŁA",
        ua: "🧩 Найважливіше слово: ПЕРПЕНДИКУЛЯРНА"
      },
      parts: [
        {
          text: {
            pl: "🔑 Wysokość tworzy z podstawą kąt prosty — **90°** (znak □).",
            ua: "🔑 Висота утворює з основою прямий кут — **90°** (знак □)."
          }
        },
        fig("ekierka")
      ],
      task: {
        id: "m16-90",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Linia ukośna (bez 90°) — czy może być wysokością?",
          ua: "Похила лінія (без 90°) — чи може бути висотою?"
        },
        options: [
          { id: "t", label: { pl: "TAK", ua: "ТАК" } },
          { id: "n", label: { pl: "NIE — musi być 90°", ua: "НІ — має бути 90°" } }
        ],
        answer: "n",
        explanation: {
          pl: "NIE. Wysokość **musi** tworzyć kąt prosty z podstawą.",
          ua: "НІ. Висота **мусить** утворювати прямий кут з основою."
        }
      }
    },

    /* 5 — Znajdź wysokość */
    {
      type: "practice",
      heading: {
        pl: "🎯 Znajdź wysokość",
        ua: "🎯 Знайди висоту"
      },
      parts: [
        {
          text: {
            pl: "Tylko **jedna** z trzech linii jest wysokością. Która?",
            ua: "Лише **одна** з трьох ліній — висота. Яка?"
          }
        },
        fig("find-h")
      ],
      task: {
        id: "m16-findh",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Wysokością jest linia:",
          ua: "Висотою є лінія:"
        },
        options: [
          { id: "1", label: { pl: "① — ukośna", ua: "① — похила" } },
          { id: "2", label: { pl: "② — z kwadracikiem □", ua: "② — з квадратиком □" } },
          { id: "3", label: { pl: "③ — inna ukośna", ua: "③ — інша похила" } }
        ],
        answer: "2",
        explanation: {
          pl: "✅ Wysokość musi być **prostopadła** do podstawy.",
          ua: "✅ Висота має бути **перпендикулярною** до основи."
        },
        
      }
      
    },

    /* 6 — Definicja */
    {
      type: "concept",
      heading: {
        pl: "🧠 Definicja Mistrza",
        ua: "🧠 Означення Майстра"
      },
      parts: [
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "z wierzchołka + prostopadle + do przeciwległego boku",
              ua: "з вершини + перпендикулярно + до протилежної сторони"
            },
            text: {
              pl: "⭐ Wysokość trójkąta to odcinek poprowadzony z wierzchołka **prostopadle** do prostej zawierającej przeciwległy bok (lub jej przedłużenie).",
              ua: "⭐ Висота трикутника — відрізок із вершини **перпендикулярно** до прямої, що містить протилежну сторону (або її продовження)."
            }
          }
        }
      ]
    },

    /* 7 — Podstawa */
    {
      type: "concept",
      heading: {
        pl: "🏗️ Każda wysokość potrzebuje podstawy",
        ua: "🏗️ Кожна висота потребує основи"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie mówimy tylko: „to wysokość”.",
              "Mówimy: „wysokość **opuszczona na bok AB**”."
            ],
            ua: [
              "Не кажемо лише: «це висота».",
              "Кажемо: «висота, **опущена на сторону AB**»."
            ]
          }
        },
        fig("base-ab"),
        {
          rule: {
            label: { pl: "Spodek", ua: "Основа перпендикуляра" },
            text: {
              pl: "Punkt **H** — **spodek wysokości** (gdzie wysokość przecina podstawę lub jej przedłużenie).",
              ua: "Точка **H** — **основа висоти** (де висота перетинає основу або її продовження)."
            }
          }
        }
      ]
    },

    /* 8 — Obrót podstawy */
    {
      type: "practice",
      heading: {
        pl: "🔄 Czy podstawa zawsze na dole?",
        ua: "🔄 Чи основа завжди внизу?"
      },
      parts: [
        {
          visual: ph(
            "t16-rotate-base.jpg",
            "Trójkąt w trzech położeniach",
            "Трикутник у трьох положеннях",
            "Rotated bases"
          )
        },
        {
          text: {
            pl: "Czy podstawa **zawsze** musi być na dole ekranu?",
            ua: "Чи основа **завжди** має бути внизу екрана?"
          }
        }
      ],
      task: {
        id: "m16-podstawa",
        type: "true-false",
        level: "B",
        question: {
          pl: "Podstawa zawsze jest na dole?",
          ua: "Основа завжди внизу?"
        },
        answer: false,
        explanation: {
          pl: "NIE! Podstawą może być **dowolny** bok. To my wybieramy, na który bok opuszczamy wysokość.",
          ua: "НІ! Основою може бути **будь-яка** сторона. Ми обираємо, на яку опускаємо висоту."
        }
      }
    },

    /* 9 — Wybierz podstawę */
    {
      type: "practice",
      heading: {
        pl: "🎯 Wybierz podstawę — znajdź wierzchołek",
        ua: "🎯 Обери основу — знайди вершину"
      },
      parts: [
        {
          text: {
            pl: "Podstawą jest bok **AB**. Z którego wierzchołka poprowadzimy wysokość?",
            ua: "Основа — сторона **AB**. З якої вершини проведемо висоту?"
          }
        },
        fig("base-ab")
      ],
      task: {
        id: "m16-zC",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wysokość na AB wychodzi z:",
          ua: "Висота на AB виходить з:"
        },
        options: [
          { id: "a", label: { pl: "A", ua: "A" } },
          { id: "b", label: { pl: "B", ua: "B" } },
          { id: "c", label: { pl: "C", ua: "C" } }
        ],
        answer: "c",
        explanation: {
          pl: "✅ Z wierzchołka **C** — leży naprzeciwko podstawy AB.",
          ua: "✅ З вершини **C** — лежить навпроти основи AB."
        }
      }
    },

    /* 10 — Ile wysokości? */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: ile wysokości?",
        ua: "🧠 Логіка 1: скільки висот?"
      },
      parts: [
        {
          text: {
            pl: "🤔 Czy każdy trójkąt ma tylko **jedną** wysokość?",
            ua: "🤔 Чи кожен трикутник має лише **одну** висоту?"
          }
        }
      ],
      task: {
        id: "m16-ile",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ile wysokości ma trójkąt?",
          ua: "Скільки висот має трикутник?"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "4", label: { pl: "4", ua: "4" } }
        ],
        answer: "3",
        explanation: {
          pl: "🏆 **3**! Trzy wierzchołki → trzy wysokości (do trzech boków).",
          ua: "🏆 **3**! Три вершини → три висоти (до трьох сторін)."
        }
      }
    },

    /* 11 — Trzy wysokości */
    {
      type: "concept",
      heading: {
        pl: "🔺 Trzy wierzchołki — trzy wysokości",
        ua: "🔺 Три вершини — три висоти"
      },
      parts: [
        fig("three-h"),
        {
          items: [
            {
              pl: ["z **A** → do boku BC"],
              ua: ["з **A** → до сторони BC"]
            },
            {
              pl: ["z **B** → do boku AC"],
              ua: ["з **B** → до сторони AC"]
            },
            {
              pl: ["z **C** → do boku AB"],
              ua: ["з **C** → до сторони AB"]
            }
          ]
        },
        {
          text: {
            pl: "🔺 Jeden trójkąt = **3 wysokości**.",
            ua: "🔺 Один трикутник = **3 висоти**."
          }
        }
      ]
    },

    /* 12 — Ostrokątny vs rozwartokątny */
    {
      type: "observe",
      heading: {
        pl: "😮 Gdzie jest ta wysokość?!",
        ua: "😮 Де ця висота?!"
      },
      parts: [
        {
          text: {
            pl: [
              "W trójkącie **ostrokątnym** wszystkie wysokości leżą **wewnątrz**.",
              "A teraz rozwartokątny…"
            ],
            ua: [
              "У **гострокутному** всі висоти лежать **всередині**.",
              "А тепер тупокутний…"
            ]
          }
        },
        fig("obtuse-out"),
        {
          text: {
            pl: "😮 Jedna wysokość „uciekła” **poza** trójkąt — ale nadal jest wysokością!",
            ua: "😮 Одна висота «втекла» **поза** трикутник — але все одно висота!"
          }
        }
      ]
    },

    /* 13 — Poza trójkątem */
    {
      type: "practice",
      heading: {
        pl: "🚪 Wysokość poza trójkątem",
        ua: "🚪 Висота поза трикутником"
      },
      parts: [
        {
          text: {
            pl: "Punkt H jest **poza** trójkątem. Czy AH może być wysokością?",
            ua: "Точка H **поза** трикутником. Чи AH може бути висотою?"
          }
        },
        fig("obtuse-out")
      ],
      task: {
        id: "m16-poza",
        type: "true-false",
        level: "B",
        question: {
          pl: "AH poza figurą — to nadal wysokość?",
          ua: "AH поза фігурою — це все ще висота?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK! Najważniejsze: jest **prostopadła** do prostej zawierającej podstawę (czasem trzeba bok przedłużyć).",
          ua: "✅ ТАК! Найважливіше: вона **перпендикулярна** до прямої з основою (іноді треба продовжити сторону)."
        }
      }
    },

    /* 14 — Detektyw */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: detektyw znalazł błąd",
        ua: "🧠 Логіка 2: детектив знайшов помилку"
      },
      parts: [
        {
          text: {
            pl: "Detektyw: „Wysokość **zawsze** musi znajdować się **wewnątrz** trójkąta”.",
            ua: "Детектив: «Висота **завжди** має бути **всередині** трикутника»."
          }
        }
      ],
      task: {
        id: "m16-logika2",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy detektyw ma rację?",
          ua: "Чи детектив має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. W trójkącie **rozwartokątnym** niektóre wysokości leżą **poza** trójkątem.",
          ua: "❌ НІ. У **тупокутному** деякі висоти лежать **поза** трикутником."
        }
      }
    },

    /* 15 — Prostokątny */
    {
      type: "practice",
      heading: {
        pl: "📐 Trójkąt prostokątny — niespodzianka",
        ua: "📐 Прямокутний — сюрприз"
      },
      parts: [
        {
          text: {
            pl: "Przy kątku prostym dwa boki (**przyprostokątne**) są do siebie prostopadłe. Czy jeden z nich może być wysokością?",
            ua: "При прямому куті дві сторони (**катети**) перпендикулярні. Чи одна з них може бути висотою?"
          }
        },
        fig("right")
      ],
      task: {
        id: "m16-prost",
        type: "true-false",
        level: "B",
        question: {
          pl: "Przyprostokątna może być wysokością?",
          ua: "Катет може бути висотою?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK! AB ⟂ BC → AB jest wysokością opuszczoną na BC (i odwrotnie).",
          ua: "✅ ТАК! AB ⟂ BC → AB — висота, опущена на BC (і навпаки)."
        }
      }
    },

    /* 16 — Trzy wysokości prostokątnego */
    {
      type: "observe",
      heading: {
        pl: "🧩 Trzy wysokości w prostokątnym",
        ua: "🧩 Три висоти в прямокутному"
      },
      parts: [
        fig("right-3h"),
        {
          text: {
            pl: "🎉 Dwie przyprostokątne + wysokość do przeciwprostokątnej = **trzy** wysokości.",
            ua: "🎉 Два катети + висота до гіпотенузи = **три** висоти."
          }
        }
      ]
    },

    /* 17 — Kuba */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: czy wysokość ≠ bok?",
        ua: "🧠 Логіка 3: чи висота ≠ сторона?"
      },
      parts: [
        {
          text: {
            pl: "Kuba: „Wysokość **zawsze** jest odcinkiem **innym** niż boki trójkąta”.",
            ua: "Куба: «Висота **завжди** — відрізок **інший**, ніж сторони трикутника»."
          }
        }
      ],
      task: {
        id: "m16-kuba",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Kuba ma rację?",
          ua: "Чи Куба має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. W trójkącie prostokątnym **przyprostokątna** może być jedną z wysokości.",
          ua: "❌ НІ. У прямокутному **катет** може бути однією з висот."
        }
      }
    },

    /* 18 — Jak narysować */
    {
      type: "concept",
      heading: {
        pl: "✏️ Jak narysować wysokość?",
        ua: "✏️ Як накреслити висоту?"
      },
      parts: [
        {
          items: [
            {
              pl: ["1️⃣ Wybierz wierzchołek (np. C)"],
              ua: ["1️⃣ Обери вершину (напр. C)"]
            },
            {
              pl: ["2️⃣ Przyłóż ekierkę do boku AB"],
              ua: ["2️⃣ Приклади косинець до сторони AB"]
            },
            {
              pl: ["3️⃣ Poprowadź linię przez C pod **90°**"],
              ua: ["3️⃣ Проведи лінію через C під **90°**"]
            },
            {
              pl: ["4️⃣ Zaznacz spodek **H**"],
              ua: ["4️⃣ Познач основу **H**"]
            },
            {
              pl: ["5️⃣ Odcinek **CH** = wysokość"],
              ua: ["5️⃣ Відрізок **CH** = висота"]
            }
          ]
        },
        fig("base-ab")
      ]
    },

    /* 19 — Sprawdź ekierką */
    {
      type: "practice",
      heading: {
        pl: "📐 Sprawdź ekierką",
        ua: "📐 Перевір косинцем"
      },
      parts: [
        {
          text: {
            pl: "Która linia jest wysokością?",
            ua: "Яка лінія — висота?"
          }
        },
        fig("ekierka")
      ],
      task: {
        id: "m16-ekierka",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wysokość musi tworzyć z podstawą:",
          ua: "Висота має утворювати з основою:"
        },
        options: [
          { id: "a", label: { pl: "70°", ua: "70°" } },
          { id: "b", label: { pl: "90°", ua: "90°" } },
          { id: "c", label: { pl: "110°", ua: "110°" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Tylko **90°**!",
          ua: "✅ Лише **90°**!"
        }
      }
    },

    /* 20 — Nie pionowa */
    {
      type: "practice",
      heading: {
        pl: "🧠 Wysokość nie musi być pionowa!",
        ua: "🧠 Висота не мусить бути вертикальною!"
      },
      parts: [
        {
          text: {
            pl: "🔑 Nie patrz na „pion jak budynek”. Patrz na **kąt prosty** z podstawą.",
            ua: "🔑 Не дивись на «вертикаль як будинок». Дивись на **прямий кут** з основою."
          }
        },
        fig("not-vertical")
      ],
      task: {
        id: "m16-pion",
        type: "true-false",
        level: "B",
        question: {
          pl: "Wysokość musi być pionowa na ekranie?",
          ua: "Висота мусить бути вертикальною на екрані?"
        },
        answer: false,
        explanation: {
          pl: "NIE! Musi być **prostopadła do podstawy** — nawet jeśli wygląda „skośnie”.",
          ua: "НІ! Має бути **перпендикулярною до основи** — навіть якщо виглядає «похило»."
        }
      }
    },

    /* 21 — Trzy linie */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Zagadka z trzema liniami",
        ua: "🕵️ Загадка з трьома лініями"
      },
      parts: [
        fig("three-lines"),
        {
          text: {
            pl: "Która linia jest wysokością opuszczoną z **A**?",
            ua: "Яка лінія — висота, опущена з **A**?"
          }
        }
      ],
      task: {
        id: "m16-l123",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Wybierz:",
          ua: "Обери:"
        },
        options: [
          { id: "1", label: { pl: "l₁ — z A, ⟂ do BC", ua: "l₁ — з A, ⟂ до BC" } },
          { id: "2", label: { pl: "l₂ — z A, ukośna", ua: "l₂ — з A, похила" } },
          { id: "3", label: { pl: "l₃ — nie zaczyna się w A", ua: "l₃ — не починається в A" } }
        ],
        answer: "1",
        explanation: {
          pl: "✅ **l₁**: wychodzi z A i jest prostopadła do BC.",
          ua: "✅ **l₁**: виходить з A і перпендикулярна до BC."
        }
      }
    },

    /* 22 — Zaginiona */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 4: zaginiona wysokość",
        ua: "🧠 Логіка 4: зникла висота"
      },
      parts: [
        {
          text: {
            pl: "W rozwartokątnym widać tylko **dwie** wysokości wewnątrz. Czy trzecia zniknęła?",
            ua: "У тупокутному видно лише **дві** висоти всередині. Чи третя зникла?"
          }
        },
        fig("obtuse-out")
      ],
      task: {
        id: "m16-zaginiona",
        type: "true-false",
        level: "C",
        question: {
          pl: "Trzecia wysokość zniknęła?",
          ua: "Третя висота зникла?"
        },
        answer: false,
        explanation: {
          pl: "❌ Nie! Jest **poza** trójkątem — trzeba przedłużyć bok.",
          ua: "❌ Ні! Вона **поза** трикутником — треба продовжити сторону."
        }
      }
    },

    /* 23 — Prawda/fałsz batch as one check set */
    {
      type: "check",
      heading: {
        pl: "✅ Prawda czy fałsz (1/3)",
        ua: "✅ Правда чи ні (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Każdy trójkąt ma **trzy** wysokości.",
            ua: "Кожен трикутник має **три** висоти."
          }
        }
      ],
      task: {
        id: "m16-tf1",
        type: "true-false",
        level: "A",
        question: { pl: "Prawda?", ua: "Правда?" },
        answer: true,
        explanation: { pl: "✅ Prawda.", ua: "✅ Правда." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "✅ Prawda czy fałsz (2/3)",
        ua: "✅ Правда чи ні (2/3)"
      },
      parts: [
        {
          text: {
            pl: "Wysokość **zawsze** leży wewnątrz trójkąta.",
            ua: "Висота **завжди** лежить всередині трикутника."
          }
        }
      ],
      task: {
        id: "m16-tf2",
        type: "true-false",
        level: "A",
        question: { pl: "Prawda?", ua: "Правда?" },
        answer: false,
        explanation: {
          pl: "❌ Fałsz — w rozwartokątnym może być poza.",
          ua: "❌ Ні — у тупокутному може бути поза."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "✅ Prawda czy fałsz (3/3)",
        ua: "✅ Правда чи ні (3/3)"
      },
      parts: [
        {
          text: {
            pl: "Wysokość musi być **pionowa**.",
            ua: "Висота мусить бути **вертикальною**."
          }
        }
      ],
      task: {
        id: "m16-tf3",
        type: "true-false",
        level: "A",
        question: { pl: "Prawda?", ua: "Правда?" },
        answer: false,
        explanation: {
          pl: "❌ Fałsz — musi być **prostopadła do podstawy**.",
          ua: "❌ Ні — має бути **перпендикулярною до основи**."
        }
      }
    },

    /* 24 — Maszyna słów */
    {
      type: "practice",
      heading: {
        pl: "🤖 Matematyczna maszyna",
        ua: "🤖 Математична машина"
      },
      parts: [
        {
          text: {
            pl: "Wysokość wychodzi z __________. Jest __________ do podstawy. Punkt przecięcia to __________ wysokości. Trójkąt ma __________ wysokości.",
            ua: "Висота виходить з __________. Вона __________ до основи. Точка перетину — __________ висоти. Трикутник має __________ висот."
          }
        }
      ],
      task: {
        id: "m16-slowa",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Uzupełnij poprawnie:",
          ua: "Доповни правильно:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "wierzchołka · prostopadła · spodek · trzy",
              ua: "вершини · перпендикулярна · основа · три"
            }
          },
          {
            id: "b",
            label: {
              pl: "środka · równoległa · wierzchołek · jedna",
              ua: "середини · паралельна · вершина · одна"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ wierzchołka · prostopadła · spodek · trzy",
          ua: "✅ вершини · перпендикулярна · основа · три"
        }
      }
    },

    /* 25–28 Misje */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 1: wskaż wysokość",
        ua: "🏆 Місія 1: вкажи висоту"
      },
      parts: [fig("height-abc")],
      task: {
        id: "m16-misja1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wysokość z A na BC to odcinek:",
          ua: "Висота з A на BC — відрізок:"
        },
        options: [
          { id: "ah", label: { pl: "AH (z □)", ua: "AH (з □)" } },
          { id: "ab", label: { pl: "AB", ua: "AB" } },
          { id: "ac", label: { pl: "AC", ua: "AC" } }
        ],
        answer: "ah",
        explanation: { pl: "✅ AH — prostopadła do BC.", ua: "✅ AH — перпендикулярна до BC." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 2: zdanie prawdziwe",
        ua: "🏆 Місія 2: правдиве речення"
      },
      parts: [
        {
          text: {
            pl: "Które zdanie jest prawdziwe?",
            ua: "Яке речення правдиве?"
          }
        }
      ],
      task: {
        id: "m16-misja2",
        type: "single-choice",
        level: "B",
        question: { pl: "Wybierz:", ua: "Обери:" },
        options: [
          {
            id: "a",
            label: { pl: "Wysokość zawsze jest pionowa", ua: "Висота завжди вертикальна" }
          },
          {
            id: "b",
            label: {
              pl: "Wysokość zawsze leży wewnątrz trójkąta",
              ua: "Висота завжди всередині трикутника"
            }
          },
          {
            id: "c",
            label: {
              pl: "Wysokość jest prostopadła do prostej zawierającej podstawę",
              ua: "Висота перпендикулярна до прямої з основою"
            }
          },
          {
            id: "d",
            label: { pl: "Trójkąt ma tylko jedną wysokość", ua: "Трикутник має лише одну висоту" }
          }
        ],
        answer: "c",
        explanation: {
          pl: "✅ **C** — to sedno definicji!",
          ua: "✅ **C** — суть означення!"
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 3: podstawa AB",
        ua: "🏆 Місія 3: основа AB"
      },
      parts: [
        {
          text: {
            pl: "Podstawa = AB. Z którego punktu wysokość? Pod jakim kątem przecina AB?",
            ua: "Основа = AB. З якої точки висота? Під яким кутом перетинає AB?"
          }
        }
      ],
      task: {
        id: "m16-misja3",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Poprawna para:",
          ua: "Правильна пара:"
        },
        options: [
          { id: "a", label: { pl: "z A · 60°", ua: "з A · 60°" } },
          { id: "b", label: { pl: "z C · 90°", ua: "з C · 90°" } },
          { id: "c", label: { pl: "z B · 45°", ua: "з B · 45°" } }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Z **C**, pod kątem **90°**.",
          ua: "✅ З **C**, під кутом **90°**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 4: przyprostokątna",
        ua: "🏆 Місія 4: катет"
      },
      parts: [
        fig("right"),
        {
          text: {
            pl: "AB i AC to przyprostokątne. Czy AB może być wysokością opuszczoną na AC?",
            ua: "AB і AC — катети. Чи AB може бути висотою на AC?"
          }
        }
      ],
      task: {
        id: "m16-misja4",
        type: "true-false",
        level: "C",
        question: {
          pl: "AB może być wysokością na AC?",
          ua: "AB може бути висотою на AC?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — AB ⟂ AC (kąt prosty).",
          ua: "✅ ТАК — AB ⟂ AC (прямий кут)."
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
            label: { pl: "Wysokość trójkąta", ua: "Висота трикутника" },
            lines: {
              pl: "1 wierzchołek → 2 prostopadle 90° → 3 przeciwległy bok → 4 spodek",
              ua: "1 вершина → 2 перпендикулярно 90° → 3 протилежна сторона → 4 основа"
            },
            text: {
              pl: "Każdy trójkąt ma **3** wysokości. Nie zawsze wewnątrz. Nie musi być pionowa — musi być **prostopadła** do podstawy.",
              ua: "Кожен трикутник має **3** висоти. Не завжди всередині. Не мусить бути вертикальною — має бути **перпендикулярною** до основи."
            }
          }
        }
      ]
    },

    /* Mapa */
    {
      type: "summary",
      heading: {
        pl: "🧠 Mapa pamięci",
        ua: "🧠 Мапа пам’яті"
      },
      parts: [
        fig("map"),
        {
          text: {
            pl: "⭐ Jedno zdanie: wysokość = z wierzchołka **prostopadle** do prostej zawierającej przeciwległy bok.",
            ua: "⭐ Одне речення: висота = з вершини **перпендикулярно** до прямої з протилежною стороною."
          }
        }
      ]
    },

    /* Super test */
    {
      type: "check",
      heading: {
        pl: "🎮 Super test (1/3)",
        ua: "🎮 Супертест (1/3)"
      },
      parts: [],
      task: {
        id: "m16-st1",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile wysokości ma każdy trójkąt?",
          ua: "Скільки висот має кожен трикутник?"
        },
        answer: 3,
        explanation: { pl: "**3**.", ua: "**3**." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🎮 Super test (2/3)",
        ua: "🎮 Супертест (2/3)"
      },
      parts: [],
      task: {
        id: "m16-st2",
        type: "input-number",
        level: "A",
        question: {
          pl: "Pod jakim kątem wysokość przecina podstawę? (? °)",
          ua: "Під яким кутом висота перетинає основу? (? °)"
        },
        answer: 90,
        explanation: { pl: "**90°**.", ua: "**90°**." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🎮 Super test (3/3)",
        ua: "🎮 Супертест (3/3)"
      },
      parts: [],
      task: {
        id: "m16-st3",
        type: "true-false",
        level: "B",
        question: {
          pl: "Wysokość może znajdować się poza trójkątem?",
          ua: "Висота може бути поза трикутником?"
        },
        answer: true,
        explanation: {
          pl: "✅ Tak — w rozwartokątnym.",
          ua: "✅ Так — у тупокутному."
        }
      }
    },

    /* Odznaka */
    {
      type: "review",
      heading: {
        pl: "🏆 Odznaka: Detektyw wysokości",
        ua: "🏆 Відзнака: Детектив висоти"
      },
      text: {
        pl: [
          "🎉 Misja zakończona!",
          "Potrafisz znaleźć wysokość, sprawdzić 90°, wskazać spodek,",
          "odnaleźć wysokość poza trójkątem i nie mylić jej z „pionem”.",
          "Uwaga: dziś **nie** liczyliśmy pola — to będzie później (pole trójkąta)."
        ],
        ua: [
          "🎉 Місію завершено!",
          "Ти вмієш знайти висоту, перевірити 90°, вказати основу висоти,",
          "знайти висоту поза трикутником і не плутати її з «вертикаллю».",
          "Увага: сьогодні **не** рахували площу — це буде пізніше (площа трикутника)."
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
            "t16-badge.jpg",
            "Detektyw wysokości",
            "Детектив висоти",
            "Height detective badge"
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
        { pl: "wysokość trójkąta", ua: "висота трикутника" },
        { pl: "podstawa", ua: "основа" },
        { pl: "prostopadła (90°)", ua: "перпендикулярна (90°)" },
        { pl: "spodek wysokości", ua: "основа висоти (точка H)" },
        { pl: "przedłużenie boku", ua: "продовження сторони" }
      ],
      phrases: [
        {
          pl: "Wysokość jest prostopadła do podstawy.",
          ua: "Висота перпендикулярна до основи."
        },
        {
          pl: "Wysokość nie musi być pionowa ani wewnątrz trójkąta.",
          ua: "Висота не мусить бути вертикальною чи всередині трикутника."
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
          "🦉 Dzisiaj nauczyliśmy się, czym jest **wysokość**.",
          "Następne pytanie: co się stanie, gdy zamiast trójkąta weźmiemy figurę z **czterema** bokami?",
          "➡️ Lekcja 17 → **Równoległoboki**."
        ],
        ua: [
          "🦉 Сьогодні ми вивчили, що таке **висота**.",
          "Наступне питання: що буде, коли замість трикутника візьмемо фігуру з **чотирма** сторонами?",
          "➡️ Урок 17 → **Паралелограми**."
        ]
      }
    }
  ]
};
