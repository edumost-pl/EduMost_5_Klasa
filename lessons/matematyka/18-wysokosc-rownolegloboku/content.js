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

/** Height of parallelogram SVG — Lekcja 18 — NO area formula */
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

  /* Slanted parallelogram: A(70,175) B(300,175) C(360,50) D(130,50) */
  var A = [70, 175],
    B = [300, 175],
    C = [360, 50],
    D = [130, 50];
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
  /* Foot H under D on AB: D is (130,50), AB at y=175 → H=(130,175) */
  var Hx = 130,
    Hy = 175;

  if (kind === "para-base") {
    H = 230;
    svg =
      poly(pts) +
      line(A[0], A[1] + 8, B[0], B[1] + 8, "#b45309", false, 3) +
      lab(A[0] - 12, A[1] + 5, "A") +
      lab(B[0] + 12, B[1] + 5, "B") +
      lab(C[0] + 12, C[1] - 5, "C") +
      lab(D[0] - 12, D[1] - 5, "D") +
      lab(185, 200, "podstawa AB", "#b45309", 13) +
      lab(220, 220, "dwie pary boków ∥", "#57534e", 12);
  } else if (kind === "bok-vs-h") {
    H = 240;
    svg =
      poly(pts) +
      line(D[0], D[1], A[0], A[1], "#dc2626", true, 2.5) +
      line(D[0], D[1], Hx, Hy, "#b45309") +
      rightMark(Hx, Hy - 14, 14) +
      lab(A[0] - 12, A[1] + 5, "A") +
      lab(B[0] + 12, B[1] + 5, "B") +
      lab(C[0] + 12, C[1] - 5, "C") +
      lab(D[0] - 12, D[1] - 5, "D") +
      lab(Hx + 14, Hy - 5, "H", "#b45309", 13) +
      lab(95, 110, "AD = bok", "#dc2626", 12) +
      lab(155, 110, "DH = h", "#b45309", 13) +
      lab(220, 220, "BOK ≠ WYSOKOŚĆ", "#b45309", 14);
  } else if (kind === "find-h") {
    H = 240;
    svg =
      poly(pts) +
      line(D[0], D[1], Hx, Hy, "#b45309") +
      rightMark(Hx, Hy - 14, 14) +
      line(D[0], D[1], 220, Hy, "#a8a29e", true) +
      line(D[0], D[1], 130, 120, "#a8a29e", true) +
      lab(A[0] - 12, A[1] + 5, "A") +
      lab(B[0] + 12, B[1] + 5, "B") +
      lab(D[0] - 12, D[1] - 5, "D") +
      lab(145, 110, "①", "#b45309", 14) +
      lab(185, 100, "②", "#78716c", 14) +
      lab(145, 85, "③", "#78716c", 14) +
      lab(220, 220, "tylko ① ma □ = 90°", "#57534e", 12);
  } else if (kind === "two-heights") {
    H = 250;
    /* left: height to AB; right: height to AD (horizontal from B-ish) */
    svg =
      poly("40,160 200,160 240,50 80,50", "#ccfbf1", "#0f766e") +
      line(80, 50, 80, 160, "#b45309") +
      rightMark(80, 146, 12) +
      lab(120, 30, "h do AB", "#b45309", 12) +
      poly("270,140 400,140 430,50 300,50", "#e0f2fe", "#0284c7") +
      line(400, 140, 400, 50, "#7c3aed") +
      rightMark(386, 126, 12) +
      lab(350, 175, "inna podstawa → inna h", "#57534e", 12) +
      lab(220, 210, "ten sam równoległobok — różne wysokości", "#57534e", 12);
  } else if (kind === "base-pair") {
    H = 240;
    svg =
      poly(pts) +
      line(D[0], D[1], Hx, Hy, "#b45309") +
      rightMark(Hx, Hy - 14, 14) +
      lab(A[0] - 12, A[1] + 5, "A") +
      lab(B[0] + 12, B[1] + 5, "B") +
      lab(C[0] + 12, C[1] - 5, "C") +
      lab(D[0] - 12, D[1] - 5, "D") +
      lab(Hx + 14, Hy - 5, "H", "#b45309", 13) +
      lab(185, 200, "podstawa AB → wysokość DH", "#b45309", 12) +
      lab(220, 220, "wybór podstawy decyduje o wysokości", "#57534e", 12);
  } else if (kind === "rect-h") {
    /* rectangle: height to AB equals AD */
    H = 220;
    svg =
      poly("90,40 320,40 320,160 90,160") +
      rightMark(90, 146, 14) +
      lab(80, 35, "D") +
      lab(335, 35, "C") +
      lab(80, 175, "A") +
      lab(335, 175, "B") +
      lab(205, 30, "AB = 4 cm", "#57534e", 12) +
      lab(70, 105, "7 cm", "#b45309", 13) +
      lab(220, 200, "h względem AB = 7 cm (= AD)", "#0f766e", 12);
  } else if (kind === "wrong-slant") {
    H = 230;
    svg =
      poly(pts) +
      line(D[0], D[1], 220, Hy, "#dc2626") +
      lab(A[0] - 12, A[1] + 5, "A") +
      lab(B[0] + 12, B[1] + 5, "B") +
      lab(D[0] - 12, D[1] - 5, "D") +
      lab(220, 210, "ukośna → NIE jest wysokością", "#dc2626", 13);
  } else if (kind === "grid") {
    H = 230;
    var g = "";
    var i;
    for (i = 0; i <= 10; i++) {
      g += line(40 + i * 20, 30, 40 + i * 20, 190, "#e7e5e4", false, 1);
    }
    for (i = 0; i <= 8; i++) {
      g += line(40, 30 + i * 20, 240, 30 + i * 20, "#e7e5e4", false, 1);
    }
    svg =
      g +
      poly("60,150 200,150 240,70 100,70", "#ccfbf1", "#0f766e") +
      line(100, 70, 100, 150, "#b45309") +
      rightMark(100, 136, 12) +
      lab(130, 110, "4", "#b45309", 16) +
      lab(220, 210, "kratka = 1 cm → h = 4 cm", "#57534e", 12);
  } else if (kind === "compare-h") {
    H = 220;
    svg =
      poly("40,150 180,150 210,40 70,40", "#ccfbf1", "#0f766e") +
      line(70, 40, 70, 150, "#b45309") +
      lab(110, 25, "A · h = 5", "#b45309", 12) +
      poly("250,150 390,150 410,110 270,110", "#fed7aa", "#ea580c") +
      line(270, 110, 270, 150, "#ea580c") +
      lab(330, 95, "B · h = 2", "#ea580c", 12) +
      lab(220, 195, "ta sama podstawa · różne wysokości", "#57534e", 12);
  } else if (kind === "tri-vs-para") {
    H = 230;
    svg =
      poly("50,40 20,150 140,150", "#fed7aa", "#ea580c") +
      line(50, 40, 50, 150, "#b45309", true) +
      lab(80, 30, "trójkąt", "#ea580c", 12) +
      lab(80, 175, "h czasem poza", "#57534e", 11) +
      poly("220,140 380,140 420,50 260,50", "#ccfbf1", "#0f766e") +
      line(260, 50, 260, 140, "#b45309") +
      rightMark(260, 126, 12) +
      lab(320, 35, "równoległobok", "#0f766e", 12) +
      lab(320, 175, "h między prostymi ∥", "#57534e", 11) +
      lab(220, 210, "kontrast z lekcją 16", "#57534e", 12);
  } else if (kind === "map") {
    H = 240;
    svg =
      lab(220, 30, "▱ RÓWNOLEGŁOBOK", "#0f766e", 16) +
      line(220, 40, 220, 60, "#a8a29e") +
      line(100, 60, 340, 60, "#a8a29e") +
      line(100, 60, 100, 80, "#a8a29e") +
      line(340, 60, 340, 80, "#a8a29e") +
      lab(100, 100, "PODSTAWA", "#7c3aed", 14) +
      lab(340, 100, "WYSOKOŚĆ", "#b45309", 14) +
      lab(100, 125, "np. AB", "#57534e", 12) +
      lab(340, 125, "prostopadła", "#57534e", 12) +
      lab(340, 145, "⟂ 90°", "#0f766e", 13) +
      lab(220, 185, "🔑 wybieram podstawę → prowadzę h ⟂", "#b45309", 13) +
      lab(220, 215, "BOK ≠ WYSOKOŚĆ", "#dc2626", 14);
  } else if (kind === "ekierka") {
    H = 220;
    svg =
      poly(pts) +
      line(D[0], D[1], Hx, Hy, "#0f766e") +
      rightMark(Hx, Hy - 14, 14) +
      lab(160, 110, "90° ✓", "#0f766e", 14) +
      lab(220, 205, "ekierka potwierdza wysokość", "#57534e", 12);
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
    /* 1 — Bridge from L16 */
    {
      type: "intro",
      heading: {
        pl: "🔄 Pamiętasz wysokość trójkąta?",
        ua: "🔄 Пам’ятаєш висоту трикутника?"
      },
      parts: [
        {
          visual: ph(
            "t18-bridge.jpg",
            "Od trójkąta do równoległoboku",
            "Від трикутника до паралелограма",
            "Bridge L16→L18"
          )
        },
        {
          text: {
            pl: [
              "🦉 W lekcji 16 poznaliśmy wysokość **trójkąta**.",
              "Wychodzi z wierzchołka i jest **prostopadła** do podstawy.",
              "A co, gdy zamiast trójkąta mamy **równoległobok**?"
            ],
            ua: [
              "🦉 В уроці 16 ми пізнали висоту **трикутника**.",
              "Вона виходить з вершини і **перпендикулярна** до основи.",
              "А що, коли замість трикутника маємо **паралелограм**?"
            ]
          }
        }
      ],
      task: {
        id: "m18-pamietasz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Klucz wysokości (także dziś) to:",
          ua: "Ключ висоти (і сьогодні) — це:"
        },
        options: [
          {
            id: "a",
            label: { pl: "kąt prosty 90° z podstawą", ua: "прямий кут 90° з основою" }
          },
          {
            id: "b",
            label: { pl: "najkrótszy bok figury", ua: "найкоротша сторона фігури" }
          }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Wysokość musi być **prostopadła** do podstawy!",
          ua: "✅ Висота має бути **перпендикулярною** до основи!"
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
          pl: "wskazać wysokość równoległoboku względem wybranej podstawy",
          ua: "вказати висоту паралелограма відносно обраної основи"
        },
        {
          pl: "odróżnić **bok** od **wysokości**",
          ua: "відрізняти **сторону** від **висоти**"
        },
        {
          pl: "sprawdzić kąt 90° (ekierka)",
          ua: "перевірити кут 90° (косинець)"
        },
        {
          pl: "rozumieć: różne podstawy → różne wysokości",
          ua: "розуміти: різні основи → різні висоти"
        }
      ]
    },

    /* 3 — Podstawa */
    {
      type: "concept",
      heading: {
        pl: "▱ Co ma równoległobok?",
        ua: "▱ Що має паралелограм?"
      },
      parts: [
        {
          text: {
            pl: [
              "Przypomnijmy: równoległobok ma **dwie pary** boków równoległych.",
              "Dzisiaj wybierzemy jeden bok jako **podstawę**."
            ],
            ua: [
              "Пригадаймо: паралелограм має **дві пари** паралельних сторін.",
              "Сьогодні оберемо одну сторону як **основу**."
            ]
          }
        },
        fig("para-base")
      ]
    },

    /* 4 — Gdzie wysokość */
    {
      type: "practice",
      heading: {
        pl: "🏗️ Gdzie jest wysokość?",
        ua: "🏗️ Де висота?"
      },
      parts: [
        fig("para-base"),
        {
          text: {
            pl: "Jeśli **AB** jest podstawą — wysokość musi być **prostopadła** do AB (między prostymi zawierającymi AB i CD).",
            ua: "Якщо **AB** — основа, висота має бути **перпендикулярною** до AB (між прямими з AB і CD)."
          }
        }
      ],
      task: {
        id: "m18-skad",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Przy podstawie AB wysokość łączy AB z prostą zawierającą:",
          ua: "При основі AB висота з’єднує AB з прямою, що містить:"
        },
        options: [
          { id: "ab", label: { pl: "bok AB", ua: "сторону AB" } },
          { id: "cd", label: { pl: "bok CD (przeciwległy)", ua: "сторону CD (протилежну)" } },
          { id: "ad", label: { pl: "tylko wierzchołek A", ua: "лише вершину A" } }
        ],
        answer: "cd",
        explanation: {
          pl: "✅ Wysokość łączy podstawę z prostą zawierającą **przeciwległy** bok.",
          ua: "✅ Висота з’єднує основу з прямою, що містить **протилежну** сторону."
        }
      }
    },

    /* 5 — Definicja */
    {
      type: "concept",
      heading: {
        pl: "📐 Wysokość równoległoboku",
        ua: "📐 Висота паралелограма"
      },
      parts: [
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "prostopadle · do podstawy · do przeciwległej prostej",
              ua: "перпендикулярно · до основи · до протилежної прямої"
            },
            text: {
              pl: "⭐ Wysokość równoległoboku to odcinek **prostopadły** do podstawy, łączący podstawę z prostą zawierającą przeciwległy bok. Pokazuje odległość między dwiema **równoległymi** prostymi.",
              ua: "⭐ Висота паралелограма — відрізок **перпендикулярний** до основи, що з’єднує основу з прямою протилежної сторони. Це відстань між двома **паралельними** прямими."
            }
          }
        },
        fig("base-pair")
      ]
    },

    /* 6 — Pułapka AD */
    {
      type: "practice",
      heading: {
        pl: "⚠️ Największa pułapka",
        ua: "⚠️ Найбільша пастка"
      },
      parts: [
        fig("bok-vs-h"),
        {
          text: {
            pl: "Spójrz na bok **AD**. Czy AD jest wysokością opuszczoną na AB?",
            ua: "Подивись на сторону **AD**. Чи AD — висота, опущена на AB?"
          }
        }
      ],
      task: {
        id: "m18-ad",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy AD jest wysokością na AB?",
          ua: "Чи AD — висота на AB?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE! AD to **bok** — zwykle **nie** jest prostopadły do AB.",
          ua: "❌ НІ! AD — **сторона**, зазвичай **не** перпендикулярна до AB."
        }
      }
    },

    /* 7 — Bok ≠ wysokość */
    {
      type: "concept",
      heading: {
        pl: "🧠 BOK ≠ WYSOKOŚĆ",
        ua: "🧠 СТОРОНА ≠ ВИСОТА"
      },
      parts: [
        fig("bok-vs-h"),
        {
          text: {
            pl: [
              "**AD** — bok. **DH** — wysokość (z □).",
              "🔑 Nie patrz, czy linia „wygląda pionowo”. Sprawdź **kąt 90°**."
            ],
            ua: [
              "**AD** — сторона. **DH** — висота (з □).",
              "🔑 Не дивись, чи лінія «виглядає вертикально». Перевір **кут 90°**."
            ]
          }
        }
      ]
    },

    /* 8 — Trzy linie */
    {
      type: "practice",
      heading: {
        pl: "🧩 Która linia jest wysokością?",
        ua: "🧩 Яка лінія — висота?"
      },
      parts: [
        {
          visual: ph(
            "t18-three-lines.jpg",
            "Trzy linie — jedna wysokość",
            "Три лінії — одна висота",
            "Three candidates"
          )
        },
        fig("find-h"),
        {
          text: {
            pl: "Tylko jedna linia jest wysokością. Która?",
            ua: "Лише одна лінія — висота. Яка?"
          }
        }
      ],
      task: {
        id: "m18-trzy",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Wysokością jest:",
          ua: "Висотою є:"
        },
        options: [
          { id: "1", label: { pl: "① — z kwadracikiem □ (90°)", ua: "① — з квадратиком □ (90°)" } },
          { id: "2", label: { pl: "② — ukośna", ua: "② — похила" } },
          { id: "3", label: { pl: "③ — nie dochodzi do podstawy", ua: "③ — не доходить до основи" } }
        ],
        answer: "1",
        explanation: {
          pl: "✅ Dobra wysokość tworzy z podstawą kąt **prosty**.",
          ua: "✅ Правильна висота утворює з основою **прямий** кут."
        }
      }
    },

    /* 9 — Ekierka */
    {
      type: "practice",
      heading: {
        pl: "📐 Sprawdź ekierką",
        ua: "📐 Перевір косинцем"
      },
      parts: [
        fig("ekierka"),
        {
          text: {
            pl: "Najlepszy przyjaciel wysokości? **Ekierka!** Jeśli kąt prosty pokrywa się z przecięciem — masz wysokość.",
            ua: "Найкращий друг висоти? **Косинець!** Якщо прямий кут збігається з перетином — маєш висоту."
          }
        }
      ],
      task: {
        id: "m18-ekierka",
        type: "true-false",
        level: "A",
        question: {
          pl: "Linia z □ przy podstawie — czy jest prostopadła?",
          ua: "Лінія з □ при основі — чи перпендикулярна?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — kwadracik oznacza **90°**.",
          ua: "✅ ТАК — квадратик означає **90°**."
        }
      }
    },

    /* 10 — Dwie wysokości */
    {
      type: "observe",
      heading: {
        pl: "😮 Ten sam równoległobok — dwie wysokości",
        ua: "😮 Той самий паралелограм — дві висоти"
      },
      parts: [
        fig("two-heights"),
        {
          text: {
            pl: "Wszystko zależy od tego, którą stronę wybierzemy jako **podstawę**.",
            ua: "Усе залежить від того, яку сторону оберемо як **основу**."
          }
        }
      ]
    },

    /* 11 — Zmieniamy podstawę */
    {
      type: "practice",
      heading: {
        pl: "🔄 Zmieniamy podstawę",
        ua: "🔄 Змінюємо основу"
      },
      parts: [
        {
          text: {
            pl: "Najpierw podstawa **AB**, potem **AD**. Czy wysokość będzie taka sama?",
            ua: "Спочатку основа **AB**, потім **AD**. Чи висота буде та сама?"
          }
        },
        fig("two-heights")
      ],
      task: {
        id: "m18-zmiana",
        type: "true-false",
        level: "B",
        question: {
          pl: "Wysokość przy innej podstawie musi być taka sama?",
          ua: "Висота при іншій основі мусить бути та сама?"
        },
        answer: false,
        explanation: {
          pl: "❌ Nie musi. Do **różnych** podstaw odpowiadają **różne** wysokości.",
          ua: "❌ Не мусить. Різним основам відповідають **різні** висоти."
        }
      }
    },

    /* 12 — Podstawa → wysokość */
    {
      type: "practice",
      heading: {
        pl: "🎯 Podstawa → wysokość",
        ua: "🎯 Основа → висота"
      },
      parts: [
        fig("base-pair"),
        {
          text: {
            pl: "Podstawa **AB** → wysokość **h** do AB (np. DH). Podstawa **AD** → inna wysokość.",
            ua: "Основа **AB** → висота **h** до AB (напр. DH). Основа **AD** → інша висота."
          }
        }
      ],
      task: {
        id: "m18-para",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jeśli podstawą jest AB, wysokość jest prostopadła do:",
          ua: "Якщо основа — AB, висота перпендикулярна до:"
        },
        options: [
          { id: "ab", label: { pl: "AB", ua: "AB" } },
          { id: "ad", label: { pl: "AD", ua: "AD" } },
          { id: "dc", label: { pl: "tylko DC (bez 90° do AB)", ua: "лише DC (без 90° до AB)" } }
        ],
        answer: "ab",
        explanation: {
          pl: "✅ Wysokość jest **prostopadła do wybranej podstawy**.",
          ua: "✅ Висота **перпендикулярна до обраної основи**."
        }
      }
    },

    /* 13 — Logika 8 i 5 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Minutka logiki",
        ua: "🧠 Хвилинка логіки"
      },
      parts: [
        {
          text: {
            pl: "Równoległobok ma boki **8 cm** i **5 cm**. Czy jego wysokości muszą mieć 8 cm i 5 cm?",
            ua: "Паралелограм має сторони **8 см** і **5 см**. Чи його висоти мусять мати 8 см і 5 см?"
          }
        }
      ],
      task: {
        id: "m18-8i5",
        type: "true-false",
        level: "C",
        question: {
          pl: "Wysokości = długości boków?",
          ua: "Висоти = довжини сторін?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Długość boku **nie** jest automatycznie długością wysokości. Wysokość zależy od kąta nachylenia.",
          ua: "❌ НІ. Довжина сторони **не** є автоматично довжиною висоти. Висота залежить від кута нахилу."
        }
      }
    },

    /* 14 — Spłaszczenie */
    {
      type: "observe",
      heading: {
        pl: "🤯 Równoległobok może się „spłaszczyć”",
        ua: "🤯 Паралелограм може «сплющитися»"
      },
      parts: [
        {
          visual: ph(
            "t18-flat.jpg",
            "Ta sama podstawa — różne wysokości",
            "Та сама основа — різні висоти",
            "Tall vs flat"
          )
        },
        {
          text: {
            pl: [
              "Oba mają **tę samą** podstawę, ale **różne** wysokości.",
              "Im bardziej figura jest „pochylona”, tym mniejsza może być wysokość względem tej podstawy."
            ],
            ua: [
              "Обидва мають **ту саму** основу, але **різні** висоти.",
              "Чим сильніше фігура «нахилена», тим меншою може бути висота до цієї основи."
            ]
          }
        }
      ]
    },

    /* 15 — Wysokość > bok? */
    {
      type: "practice",
      heading: {
        pl: "🧠 Czy wysokość może być większa od boku?",
        ua: "🧠 Чи висота може бути більшою за сторону?"
      },
      parts: [
        fig("rect-h"),
        {
          text: {
            pl: "Prostokąt: AB = 4 cm, AD = 7 cm. Podstawa AB → wysokość = **7 cm**.",
            ua: "Прямокутник: AB = 4 см, AD = 7 см. Основа AB → висота = **7 см**."
          }
        }
      ],
      task: {
        id: "m18-wieksza",
        type: "true-false",
        level: "B",
        question: {
          pl: "Wysokość względem AB może być dłuższa niż bok AB?",
          ua: "Висота відносно AB може бути довшою за сторону AB?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK! Tu h = 7 cm, a podstawa ma 4 cm. Nie ma reguły „wysokość zawsze krótsza”.",
          ua: "✅ ТАК! Тут h = 7 см, а основа 4 см. Немає правила «висота завжди коротша»."
        }
      }
    },

    /* 16 — Jak narysować */
    {
      type: "concept",
      heading: {
        pl: "✏️ Jak narysować wysokość?",
        ua: "✏️ Як накреслити висоту?"
      },
      parts: [
        {
          items: [
            { pl: ["1️⃣ Wybierz podstawę AB"], ua: ["1️⃣ Обери основу AB"] },
            { pl: ["2️⃣ Znajdź przeciwległy bok CD"], ua: ["2️⃣ Знайди протилежну сторону CD"] },
            {
              pl: ["3️⃣ Z D (lub C) poprowadź linię **prostopadłą** do AB"],
              ua: ["3️⃣ З D (або C) проведи лінію **перпендикулярну** до AB"]
            },
            { pl: ["4️⃣ Oznacz spodek H"], ua: ["4️⃣ Познач основу висоти H"] },
            { pl: ["5️⃣ Odcinek DH = wysokość"], ua: ["5️⃣ Відрізок DH = висота"] }
          ]
        },
        fig("base-pair")
      ]
    },

    /* 17 — Znajdź błąd */
    {
      type: "practice",
      heading: {
        pl: "🚨 Znajdź błąd",
        ua: "🚨 Знайди помилку"
      },
      parts: [
        fig("wrong-slant"),
        {
          text: {
            pl: "Ania narysowała „wysokość” — linię ukośną. Czy poprawnie?",
            ua: "Аня накреслила «висоту» — похилу лінію. Чи правильно?"
          }
        }
      ],
      task: {
        id: "m18-ania",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy Ania narysowała wysokość poprawnie?",
          ua: "Чи Аня правильно накреслила висоту?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE — linia nie tworzy z podstawą kąta **90°**.",
          ua: "❌ НІ — лінія не утворює з основою кут **90°**."
        }
      }
    },

    /* 18 — Drugi błąd */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Drugi błąd",
        ua: "🕵️ Друга помилка"
      },
      parts: [
        {
          text: {
            pl: "Linia jest **prostopadła** do AB, ale nie łączy podstawy z przeciwległym bokiem / jego prostą. Czy to już wysokość?",
            ua: "Лінія **перпендикулярна** до AB, але не з’єднує основу з протилежною стороною / її прямою. Чи це вже висота?"
          }
        }
      ],
      task: {
        id: "m18-nie-wystarczy",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy samo 90° do AB wystarczy?",
          ua: "Чи самого 90° до AB достатньо?"
        },
        answer: false,
        explanation: {
          pl: "❌ Nie. Musi też łączyć podstawę z prostą zawierającą **przeciwległy** bok.",
          ua: "❌ Ні. Має також з’єднувати основу з прямою **протилежної** сторони."
        }
      }
    },

    /* 19 — Porównanie z trójkątem */
    {
      type: "observe",
      heading: {
        pl: "🔍 Porównujemy z trójkątem",
        ua: "🔍 Порівнюємо з трикутником"
      },
      parts: [
        fig("tri-vs-para"),
        {
          text: {
            pl: [
              "W **trójkącie** rozwartokątnym wysokość czasem wychodzi **poza** figurę.",
              "W **równoległoboku** wysokość łączy dwie **równoległe** proste, między którymi leży figura."
            ],
            ua: [
              "У **тупокутному** трикутнику висота іноді виходить **поза** фігуру.",
              "У **паралелограмі** висота з’єднує дві **паралельні** прямі, між якими лежить фігура."
            ]
          }
        }
      ]
    },

    /* 20 — Która wysokość */
    {
      type: "practice",
      heading: {
        pl: "🧠 Zagadka: która wysokość?",
        ua: "🧠 Загадка: яка висота?"
      },
      parts: [
        fig("find-h"),
        {
          text: {
            pl: "Podstawą jest dolny bok. Sprawdź **prostopadłość**, nie długość!",
            ua: "Основа — нижня сторона. Перевір **перпендикулярність**, не довжину!"
          }
        }
      ],
      task: {
        id: "m18-ktora",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Odpowiednia wysokość to:",
          ua: "Підхожа висота — це:"
        },
        options: [
          { id: "a", label: { pl: "linia z □ (90°)", ua: "лінія з □ (90°)" } },
          { id: "b", label: { pl: "linia ukośna (dłuższa)", ua: "похила лінія (довша)" } }
        ],
        answer: "a",
        explanation: {
          pl: "✅ Liczy się **90°**, nie to, która linia wygląda „ładniej”.",
          ua: "✅ Важить **90°**, а не те, яка лінія виглядає «краще»."
        }
      }
    },

    /* 21 — Dwie różne */
    {
      type: "practice",
      heading: {
        pl: "🔐 Tajemnica dwóch wysokości",
        ua: "🔐 Таємниця двох висот"
      },
      parts: [
        {
          text: {
            pl: "Równoległobok ma dwie różne podstawy. Czy może mieć dwie różne wysokości?",
            ua: "Паралелограм має дві різні основи. Чи може мати дві різні висоти?"
          }
        }
      ],
      task: {
        id: "m18-dwie",
        type: "true-false",
        level: "A",
        question: {
          pl: "Dwie różne podstawy → dwie różne wysokości?",
          ua: "Дві різні основи → дві різні висоти?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK. Do różnych podstaw odpowiadają różne wysokości.",
          ua: "✅ ТАК. Різним основам відповідають різні висоти."
        }
      }
    },

    /* 22 — Robot */
    {
      type: "challenge",
      heading: {
        pl: "🤖 Robot popełnił błąd",
        ua: "🤖 Робот зробив помилку"
      },
      parts: [
        {
          text: {
            pl: "Robot: „Wysokość równoległoboku to zawsze jego **krótszy** bok”.",
            ua: "Робот: «Висота паралелограма — завжди його **коротша** сторона»."
          }
        }
      ],
      task: {
        id: "m18-robot",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy robot ma rację?",
          ua: "Чи робот має рацію?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Wysokość musi być **prostopadła** do podstawy — nie wybieramy jej po tym, czy bok jest krótszy.",
          ua: "❌ НІ. Висота має бути **перпендикулярною** до основи — не обираємо її за тим, чи сторона коротша."
        }
      }
    },

    /* 23 — h = 10, a = 10 */
    {
      type: "practice",
      heading: {
        pl: "🧩 Czy można mieć taką figurę?",
        ua: "🧩 Чи можна мати таку фігуру?"
      },
      parts: [
        {
          text: {
            pl: "Podstawa 10 cm, wysokość względem niej też 10 cm. Czy to możliwe?",
            ua: "Основа 10 см, висота відносно неї теж 10 см. Чи це можливо?"
          }
        }
      ],
      task: {
        id: "m18-10i10",
        type: "true-false",
        level: "B",
        question: {
          pl: "Podstawa 10 cm i h = 10 cm — możliwe?",
          ua: "Основа 10 см і h = 10 см — можливо?"
        },
        answer: true,
        explanation: {
          pl: "✅ TAK — np. kwadrat 10×10 (to też równoległobok!).",
          ua: "✅ ТАК — напр. квадрат 10×10 (теж паралелограм!)."
        }
      }
    },

    /* 24–26 TF */
    {
      type: "check",
      heading: {
        pl: "✅ Prawda czy fałsz (1/3)",
        ua: "✅ Правда чи ні (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Wysokość jest prostopadła do podstawy.",
            ua: "Висота перпендикулярна до основи."
          }
        }
      ],
      task: {
        id: "m18-tf1",
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
            pl: "Każdy bok równoległoboku jest wysokością.",
            ua: "Кожна сторона паралелограма є висотою."
          }
        }
      ],
      task: {
        id: "m18-tf2",
        type: "true-false",
        level: "A",
        question: { pl: "Prawda?", ua: "Правда?" },
        answer: false,
        explanation: {
          pl: "❌ Fałsz — **BOK ≠ WYSOKOŚĆ** (chyba że kąt prosty, jak w prostokącie).",
          ua: "❌ Ні — **СТОРОНА ≠ ВИСОТА** (хіба що прямий кут, як у прямокутнику)."
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
            pl: "Wysokość zawsze jest pionowa na ekranie.",
            ua: "Висота завжди вертикальна на екрані."
          }
        }
      ],
      task: {
        id: "m18-tf3",
        type: "true-false",
        level: "A",
        question: { pl: "Prawda?", ua: "Правда?" },
        answer: false,
        explanation: {
          pl: "❌ Fałsz — musi być **prostopadła do podstawy**, niekoniecznie „pionowa”.",
          ua: "❌ Ні — має бути **перпендикулярною до основи**, не обов’язково «вертикальною»."
        }
      }
    },

    /* 27 — Siatka */
    {
      type: "practice",
      heading: {
        pl: "📏 Zmierz wysokość (kratki)",
        ua: "📏 Виміряй висоту (клітинки)"
      },
      parts: [
        fig("grid"),
        {
          text: {
            pl: "Każda kratka = **1 cm**. Ile ma wysokość? (**Nie** mierz ukośnego boku!)",
            ua: "Кожна клітинка = **1 см**. Скільки висота? (**Не** міряй похилу сторону!)"
          }
        }
      ],
      task: {
        id: "m18-kratki",
        type: "input-number",
        level: "A",
        question: {
          pl: "Wysokość = ? cm",
          ua: "Висота = ? см"
        },
        answer: 4,
        explanation: {
          pl: "✅ **4 cm** — licz kratki **prostopadle** do podstawy.",
          ua: "✅ **4 см** — лічи клітинки **перпендикулярно** до основи."
        }
      }
    },

    /* 28 — Architekt */
    {
      type: "practice",
      heading: {
        pl: "🏗️ Architekt",
        ua: "🏗️ Архітектор"
      },
      parts: [
        fig("compare-h"),
        {
          text: {
            pl: "Projekt A: podstawa 8 m, h = 5 m. Projekt B: podstawa 8 m, h = 2 m.",
            ua: "Проект A: основа 8 м, h = 5 м. Проект B: основа 8 м, h = 2 м."
          }
        }
      ],
      task: {
        id: "m18-arch",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który równoległobok jest „wyższy”?",
          ua: "Який паралелограм «вищий»?"
        },
        options: [
          { id: "a", label: { pl: "Projekt A (h = 5 m)", ua: "Проект A (h = 5 м)" } },
          { id: "b", label: { pl: "Projekt B (h = 2 m)", ua: "Проект B (h = 2 м)" } },
          { id: "c", label: { pl: "Oba tak samo", ua: "Обидва однаково" } }
        ],
        answer: "a",
        explanation: {
          pl: "✅ A — ta sama podstawa, ale **większa** wysokość.",
          ua: "✅ A — та сама основа, але **більша** висота."
        }
      }
    },

    /* Misje */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 1 — wskaż wysokość",
        ua: "🏆 Місія 1 — вкажи висоту"
      },
      parts: [fig("base-pair")],
      task: {
        id: "m18-misja1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Przy podstawie AB wysokość to:",
          ua: "При основі AB висота — це:"
        },
        options: [
          { id: "dh", label: { pl: "DH (z □)", ua: "DH (з □)" } },
          { id: "ad", label: { pl: "AD (bok)", ua: "AD (сторона)" } },
          { id: "ab", label: { pl: "AB (podstawa)", ua: "AB (основа)" } }
        ],
        answer: "dh",
        explanation: {
          pl: "✅ **DH** — prostopadła do AB.",
          ua: "✅ **DH** — перпендикулярна до AB."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 2 — która linia?",
        ua: "🏆 Місія 2 — яка лінія?"
      },
      parts: [fig("find-h")],
      task: {
        id: "m18-misja2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Poprawna wysokość:",
          ua: "Правильна висота:"
        },
        options: [
          { id: "1", label: { pl: "① z 90°", ua: "① з 90°" } },
          { id: "2", label: { pl: "② ukośna", ua: "② похила" } },
          { id: "3", label: { pl: "③ za krótka", ua: "③ закоротка" } }
        ],
        answer: "1",
        explanation: { pl: "✅ Tylko ①.", ua: "✅ Лише ①." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 3 — bok ukośny",
        ua: "🏆 Місія 3 — похила сторона"
      },
      parts: [
        {
          text: {
            pl: "Podstawa 7 cm, wysokość 4 cm. Czy bok ukośny **musi** mieć 4 cm?",
            ua: "Основа 7 см, висота 4 см. Чи похила сторона **мусить** мати 4 см?"
          }
        }
      ],
      task: {
        id: "m18-misja3",
        type: "true-false",
        level: "B",
        question: {
          pl: "Bok ukośny musi mieć 4 cm?",
          ua: "Похила сторона мусить мати 4 см?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Wysokość i bok to **nie** to samo.",
          ua: "❌ НІ. Висота і сторона — **не** те саме."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja 4 — detektyw",
        ua: "🏆 Місія 4 — детектив"
      },
      parts: [
        {
          text: {
            pl: "Ania: „Ten odcinek ma 5 cm, więc jest wysokością”.",
            ua: "Аня: «Цей відрізок має 5 см, тож це висота»."
          }
        }
      ],
      task: {
        id: "m18-misja4",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy wystarczy znać długość?",
          ua: "Чи достатньо знати довжину?"
        },
        answer: false,
        explanation: {
          pl: "❌ NIE. Najpierw sprawdź, czy odcinek jest **prostopadły** do podstawy.",
          ua: "❌ НІ. Спочатку перевір, чи відрізок **перпендикулярний** до основи."
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
            label: { pl: "Wysokość równoległoboku", ua: "Висота паралелограма" },
            lines: {
              pl: "1 podstawa → 2 przeciwległy bok → 3 ⟂ 90° → 4 BOK ≠ h",
              ua: "1 основа → 2 протилежна сторона → 3 ⟂ 90° → 4 сторона ≠ h"
            },
            text: {
              pl: "Wybierz podstawę → poprowadź odcinek **prostopadle** do niej → sprawdź 90°. Wysokość zależy od wybranej podstawy. **Bez** wzoru na pole — to lekcja 36!",
              ua: "Обери основу → проведи відрізок **перпендикулярно** → перевір 90°. Висота залежить від обраної основи. **Без** формули площі — це урок 36!"
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
            pl: "🔑 Wybieram podstawę → prowadzę wysokość **prostopadle**.",
            ua: "🔑 Обираю основу → проводжу висоту **перпендикулярно**."
          }
        }
      ]
    },

    /* Odznaka */
    {
      type: "review",
      heading: {
        pl: "🏆 Odznaka: Mistrz wysokości równoległoboku",
        ua: "🏆 Відзнака: Майстер висоти паралелограма"
      },
      text: {
        pl: [
          "🎉 Misja zakończona!",
          "Wysokość równoległoboku **nie** jest „po prostu bokiem”.",
          "Potrafisz: wybrać podstawę, narysować h, sprawdzić 90°, odróżnić bok od wysokości."
        ],
        ua: [
          "🎉 Місію завершено!",
          "Висота паралелограма — **не** «просто сторона».",
          "Умієш: обрати основу, накреслити h, перевірити 90°, відрізнити сторону від висоти."
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
            "t18-badge.jpg",
            "Mistrz wysokości równoległoboku",
            "Майстер висоти паралелограма",
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
        { pl: "wysokość równoległoboku", ua: "висота паралелограма" },
        { pl: "podstawa", ua: "основа" },
        { pl: "prostopadła (90°)", ua: "перпендикулярна (90°)" },
        { pl: "bok ≠ wysokość", ua: "сторона ≠ висота" },
        { pl: "ekierka", ua: "косинець" }
      ],
      phrases: [
        {
          pl: "Wysokość jest prostopadła do wybranej podstawy.",
          ua: "Висота перпендикулярна до обраної основи."
        },
        {
          pl: "Bok równoległoboku nie musi być wysokością.",
          ua: "Сторона паралелограма не мусить бути висотою."
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
          "🦉 Znasz już równoległobok i jego wysokość.",
          "Następna figura wygląda trochę jak „ścięty” równoległobok…",
          "➡️ Lekcja 19 → **Trapezy** 🔶"
        ],
        ua: [
          "🦉 Ти вже знаєш паралелограм і його висоту.",
          "Наступна фігура виглядає трохи як «зрізаний» паралелограм…",
          "➡️ Урок 19 → **Трапеції** 🔶"
        ]
      }
    }
  ]
};
