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

/** Precise triangle SVG for Lekcja 15 */
function tri(kind, opt) {
  opt = opt || {};
  var W = 440;
  var H = 210;
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
        '" stroke="#0f766e" stroke-width="2.5"/>';
    }
    return out;
  }

  if (kind === "iso-parts") {
    /* AB=AC=5, BC=6 — ramiona + podstawa */
    H = 230;
    svg =
      poly("220,30 90,175 350,175", "#dcfce7", "#16a34a") +
      tick(220, 30, 90, 175, 1) +
      tick(220, 30, 350, 175, 1) +
      lab(220, 22, "A", "#0f766e", 18) +
      lab(72, 185, "B", "#0f766e", 18) +
      lab(368, 185, "C", "#0f766e", 18) +
      lab(130, 95, "5 cm", "#16a34a", 14) +
      lab(310, 95, "5 cm", "#16a34a", 14) +
      lab(220, 198, "6 cm", "#b45309", 14) +
      lab(220, 220, "ramiona AB = AC · podstawa BC", "#57534e", 12);
  } else if (kind === "iso-klm") {
    H = 220;
    svg =
      poly("220,28 70,175 370,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 70, 175, 1) +
      tick(220, 28, 370, 175, 1) +
      lab(220, 20, "K", "#0f766e", 17) +
      lab(55, 185, "L", "#0f766e", 17) +
      lab(385, 185, "M", "#0f766e", 17) +
      lab(125, 95, "7 cm", "#16a34a", 13) +
      lab(315, 95, "7 cm", "#16a34a", 13) +
      lab(220, 198, "4 cm", "#b45309", 13);
  } else if (kind === "iso-angles50") {
    H = 220;
    svg =
      poly("220,28 80,175 360,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 80, 175, 1) +
      tick(220, 28, 360, 175, 1) +
      lab(220, 20, "A") +
      lab(65, 185, "B") +
      lab(375, 185, "C") +
      lab(220, 70, "80°", "#b45309", 15) +
      lab(115, 170, "50°", "#0f766e", 15) +
      lab(325, 170, "50°", "#0f766e", 15) +
      lab(220, 205, "∠ ABC = ∠ BCA", "#57534e", 16);
  } else if (kind === "iso-apex40") {
    H = 220;
    svg =
      poly("220,28 70,175 370,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 70, 175, 1) +
      tick(220, 28, 370, 175, 1) +
      lab(220, 20, "A") +
      lab(55, 185, "B") +
      lab(385, 185, "C") +
      lab(220, 68, "40°", "#b45309", 15) +
      lab(110, 160, "70°", "#0f766e", 15) +
      lab(330, 160, "70°", "#0f766e", 15);
  } else if (kind === "iso-obs") {
    /* experiment: equal base angles highlighted */
    H = 210;
    svg =
      poly("220,40 100,175 340,175", "#dcfce7", "#16a34a") +
      tick(220, 40, 100, 175, 1) +
      tick(220, 40, 340, 175, 1) +
      lab(220, 30, "A") +
      lab(85, 185, "B") +
      lab(355, 185, "C") +
      lab(135, 170, "∠ B", "#0f766e", 14) +
      lab(305, 170, "∠ C", "#0f766e", 14) +
      lab(220, 200, "AB = AC  →  ∠B = ∠C", "#57534e", 16);
  } else if (kind === "equil") {
    H = 220;
    svg =
      poly("220,28 70,175 370,175", "#dbeafe", "#2563eb") +
      tick(220, 28, 70, 175, 1) +
      tick(220, 28, 370, 175, 1) +
      tick(70, 175, 370, 175, 1) +
      lab(220, 20, "A") +
      lab(55, 185, "B") +
      lab(385, 185, "C") +
      lab(220, 70, "60°", "#b45309", 15) +
      lab(115, 160, "60°", "#b45309", 15) +
      lab(325, 160, "60°", "#b45309", 15) +
      lab(220, 205, "AB = BC = AC", "#2563eb", 13);
  } else if (kind === "venn") {
    W = 480;
    H = 220;
    svg =
      '<ellipse cx="240" cy="110" rx="190" ry="90" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2.5"/>' +
      '<ellipse cx="240" cy="110" rx="95" ry="50" fill="#dbeafe" fill-opacity="0.85" stroke="#2563eb" stroke-width="2.5"/>' +
      lab(240, 55, "trójkąty równoramienne", "#16a34a", 14) +
      lab(240, 115, "równoboczne", "#2563eb", 14) +
      lab(240, 200, "każdy równoboczny ⊂ równoramienny", "#57534e", 12);
  } else if (kind === "obwod-iso") {
    H = 220;
    svg =
      poly("220,28 90,175 350,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 90, 175, 1) +
      tick(220, 28, 350, 175, 1) +
      lab(220, 20, "A") +
      lab(72, 185, "B") +
      lab(368, 185, "C") +
      lab(130, 95, "8 cm", "#16a34a", 14) +
      lab(310, 95, "8 cm", "#16a34a", 14) +
      lab(220, 198, "5 cm", "#b45309", 14);
  } else if (kind === "obwod-base") {
    H = 220;
    svg =
      poly("220,28 90,175 350,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 90, 175, 1) +
      tick(220, 28, 350, 175, 1) +
      lab(220, 20, "A") +
      lab(72, 185, "B") +
      lab(368, 185, "C") +
      lab(130, 95, "11 cm", "#16a34a", 13) +
      lab(310, 95, "11 cm", "#16a34a", 13) +
      lab(220, 198, "?", "#dc2626", 18) +
      lab(220, 215, "Obwód = 30 cm", "#57534e", 13);
  } else if (kind === "obwod-arms") {
    H = 220;
    svg =
      poly("220,28 90,175 350,175", "#dcfce7", "#16a34a") +
      tick(220, 28, 90, 175, 1) +
      tick(220, 28, 350, 175, 1) +
      lab(220, 20, "A") +
      lab(72, 185, "B") +
      lab(368, 185, "C") +
      lab(130, 95, "?", "#dc2626", 18) +
      lab(310, 95, "?", "#dc2626", 18) +
      lab(220, 198, "10 cm", "#b45309", 14) +
      lab(220, 215, "Obwód = 34 cm", "#57534e", 13);
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
    /* 1 — Intro */
    {
      type: "intro",
      heading: {
        pl: "🏰 Witaj w Królestwie Trójkątów!",
        ua: "🏰 Вітай у Королівстві Трикутників!"
      },
      parts: [
        {
          visual: ph(
            "t15-kingdom.jpg",
            "Królestwo Trójkątów",
            "Королівство Трикутників",
            "Triangle kingdom"
          )
        },
        {
          text: {
            pl: [
              "🦉 Sowa Matematyczna zaprasza Cię do **Królestwa Trójkątów**!",
              "Dzisiaj odkryjemy, dlaczego niektóre trójkąty są wyjątkowe.",
              "Czy dwa równe boki mogą zdradzić nam coś o kątach?",
              "Czy można obliczyć długość boku, znając tylko obwód?"
            ],
            ua: [
              "🦉 Сова Математична запрошує тебе до **Королівства Трикутників**!",
              "Сьогодні відкриємо, чому деякі трикутники особливі.",
              "Чи дві рівні сторони можуть сказати щось про кути?",
              "Чи можна обчислити довжину сторони, знаючи лише периметр?"
            ]
          }
        }
      ],
      task: {
        id: "m15-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "🔐 Otwieramy pierwszą bramę i zaczynamy śledztwo?",
          ua: "🔐 Відкриваємо першу браму і починаємо слідство?"
        },
        answer: true,
        explanation: {
          pl: "🚀 Misja rozpoczęta!",
          ua: "🚀 Місію розпочато!"
        }
      }
    },

    /* 2 — Goal */
    {
      type: "goal",
      heading: {
        pl: "🎯 Co odkryjesz?",
        ua: "🎯 Що відкриєш?"
      },
      items: [
        {
          pl: "ramiona i podstawę trójkąta równoramiennego",
          ua: "бічні сторони і основу рівнобедреного трикутника"
        },
        {
          pl: "kąty przy podstawie mają równe miary",
          ua: "кути при основі мають рівні міри"
        },
        {
          pl: "w trójkącie równobocznym każdy kąt = 60°",
          ua: "у рівносторонньому трикутнику кожен кут = 60°"
        },
        {
          pl: "obliczać obwód i brakujące boki",
          ua: "обчислювати периметр і відсутні сторони"
        }
      ]
    },

    /* 3 — Co już pamiętasz */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Co już pamiętasz?",
        ua: "🕵️ Що вже пам’ятаєш?"
      },
      parts: [
        {
          visual: ph(
            "t15-three-types.jpg",
            "Trzy rodzaje trójkątów",
            "Три види трикутників",
            "Three triangle types"
          )
        },
        {
          text: {
            pl: "Który opis pasuje do trójkąta z **co najmniej dwoma** równymi bokami?",
            ua: "Який опис пасує до трикутника з **щонайменше двома** рівними сторонами?"
          }
        }
      ],
      task: {
        id: "m15-recall",
        type: "single-choice",
        level: "A",
        question: {
          pl: "To jest trójkąt:",
          ua: "Це трикутник:"
        },
        options: [
          { id: "e", label: { pl: "równoboczny", ua: "рівносторонній" } },
          { id: "i", label: { pl: "równoramienny", ua: "рівнобедрений" } },
          { id: "s", label: { pl: "różnoboczny", ua: "різносторонній" } }
        ],
        answer: "i",
        explanation: {
          pl: "Równoramienny — **co najmniej** 2 równe boki. Równoboczny ma aż 3!",
          ua: "Рівнобедрений — **щонайменше** 2 рівні сторони. Рівносторонній має аж 3!"
        }
      }
    },

    /* 4 — Ramiona i podstawa */
    {
      type: "concept",
      heading: {
        pl: "📐 Dwa jednakowe ramiona",
        ua: "📐 Дві однакові бічні сторони"
      },
      parts: [
        {
          text: {
            pl: [
              "Spójrz na trójkąt **ABC**.",
              "Dwa boki mają tę samą długość: **AB = AC**."
            ],
            ua: [
              "Подивись на трикутник **ABC**.",
              "Дві сторони однакової довжини: **AB = AC**."
            ]
          }
        },
        tri("iso-parts"),
        {
          rule: {
            label: { pl: "Nazwy", ua: "Назви" },
            lines: {
              pl: "ramiona  ·  podstawa  ·  wierzchołek",
              ua: "бічні  ·  основа  ·  вершина"
            },
            text: {
              pl: "Równe boki = **ramiona**. Trzeci bok BC = **podstawa**. A — wierzchołek naprzeciwko podstawy.",
              ua: "Рівні сторони = **бічні**. Третя сторона BC = **основа**. A — вершина навпроти основи."
            }
          }
        }
      ]
    },

    /* 5 — Znajdź ramiona */
    {
      type: "practice",
      heading: {
        pl: "🔎 Znajdź ramiona i podstawę",
        ua: "🔎 Знайди бічні й основу"
      },
      parts: [
        {
          text: {
            pl: "Trójkąt **KLM**: KL = 7 cm, LM = 4 cm, KM = 7 cm.",
            ua: "Трикутник **KLM**: KL = 7 cm, LM = 4 cm, KM = 7 cm."
          }
        },
        tri("iso-klm")
      ],
      task: {
        id: "m15-ramiona",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które boki są ramionami? Który jest podstawą?",
          ua: "Які сторони — бічні? Яка — основа?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ramiona: KL i LM; podstawa: KM",
              ua: "Бічні: KL і LM; основа: KM"
            }
          },
          {
            id: "b",
            label: {
              pl: "Ramiona: KL i KM; podstawa: LM",
              ua: "Бічні: KL і KM; основа: LM"
            }
          },
          {
            id: "c",
            label: {
              pl: "Ramiona: KM i LM; podstawa: KL",
              ua: "Бічні: KM і LM; основа: KL"
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "✅ Ramiona mają jednakową długość: **7 cm i 7 cm**. Podstawa ma **4 cm**.",
          ua: "✅ Бічні однакової довжини: **7 cm і 7 cm**. Основа — **4 cm**."
        }
      }
    },

    /* 6 — Obrót */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: czy obrót zmienia nazwy?",
        ua: "🧠 Логіка 1: чи обертання змінює назви?"
      },
      parts: [
        {
          visual: ph(
            "t15-rotate.jpg",
            "Ten sam trójkąt w trzech położeniach",
            "Той самий трикутник у трьох положеннях",
            "Rotated isosceles"
          )
        },
        {
          text: {
            pl: "🦉 Sowa obróciła trójkąt. Czy ramiona i podstawa zamieniają się miejscami?",
            ua: "🦉 Сова повернула трикутник. Чи бічні й основа міняються місцями?"
          }
        }
      ],
      task: {
        id: "m15-obrot",
        type: "true-false",
        level: "C",
        question: {
          pl: "Po obróceniu ramiona i podstawa się zamieniają?",
          ua: "Після повороту бічні й основа міняються?"
        },
        answer: false,
        explanation: {
          pl: "NIE! Obrót nie zmienia długości. Podstawa nadal jest bokiem naprzeciw wierzchołka, w którym spotykają się równe ramiona.",
          ua: "НІ! Поворот не змінює довжин. Основа — сторона навпроти вершини, де зустрічаються рівні бічні."
        }
      }
    },

    /* 7 — Eksperyment → odkrycie */
    {
      type: "observe",
      heading: {
        pl: "🧪 Eksperyment: kąty przy podstawie",
        ua: "🧪 Експеримент: кути при основі"
      },
      parts: [
        {
          text: {
            pl: [
              "Pilnujemy: **AB = AC**.",
              "Obserwuj kąty przy podstawie: ∠ABC i ∠BCA."
            ],
            ua: [
              "Стежимо: **AB = AC**.",
              "Спостерігай кути при основі: ∠ABC і ∠BCA."
            ]
          }
        },
        tri("iso-obs")
      ]
    },

    /* 8 — Wielkie odkrycie */
    {
      type: "practice",
      heading: {
        pl: "⭐ Wielkie odkrycie: równe kąty",
        ua: "⭐ Велике відкриття: рівні кути"
      },
      parts: [
        tri("iso-angles50"),
        {
          rule: {
            label: { pl: "Własność", ua: "Властивість" },
            lines: {
              pl: "Jeśli AB = AC, to ∠ ABC = ∠ BCA",
              ua: "Якщо AB = AC, то ∠ ABC = ∠ BCA"
            },
            text: {
              pl: "W trójkącie równoramiennym **kąty przy podstawie** mają równe miary.",
              ua: "У рівнобедреному трикутнику **кути при основі** мають рівні міри."
            }
          }
        }
      ],
      task: {
        id: "m15-42",
        type: "input-number",
        level: "A",
        question: {
          pl: "Jeden kąt przy podstawie ma 42°. Ile ma drugi?",
          ua: "Один кут при основі — 42°. Скільки другий?"
        },
        answer: 42,
        explanation: {
          pl: "**42°** — kąty przy podstawie są równe!",
          ua: "**42°** — кути при основі рівні!"
        }
      }
    },

    /* 9 — Detektyw 68 */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Detektyw szuka pary",
        ua: "🕵️ Детектив шукає пару"
      },
      parts: [
        {
          visual: ph(
            "t15-slide9.png",
          )
        },
        {
          text: {
            pl: "W trójkącie równoramiennym jeden kąt przy podstawie ma **68°**.",
            ua: "У рівнобедреному трикутнику один кут при основі — **68°**."
          }
        }
      ],
      task: {
        id: "m15-68",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Miarę drugiego kąta przy podstawie:",
          ua: "Міра другого кута при основі:"
        },
        options: [
          { id: "a", label: { pl: "34°", ua: "34°" } },
          { id: "b", label: { pl: "68°", ua: "68°" } },
          { id: "c", label: { pl: "112°", ua: "112°" } }
        ],
        answer: "b",
        explanation: {
          pl: "🔎 Nie trzeba jeszcze dodawać ani odejmować. Kąty przy podstawie są **równe**!",
          ua: "🔎 Поки не треба ні додавати, ні віднімати. Кути при основі **рівні**!"
        }
      }
    },

    /* 10 — Trzeci kąt */
    {
      type: "practice",
      heading: {
        pl: "🎯 Tajemnica trzeciego kąta",
        ua: "🎯 Таємниця третього кута"
      },
      parts: [
        {
          text: {
            pl: "Oba kąty przy podstawie mają po **50°**. Ile ma kąt między ramionami?",
            ua: "Обидва кути при основі по **50°**. Скільки кут між бічними?"
          }
        },
        {
          visual: ph(
            "t15-slide10.png",
          )
        }
      ],
      task: {
        id: "m15-apex80",
        type: "input-number",
        level: "B",
        question: {
          pl: "Napisz",
          ua: "Напиши"
        },
        answer: 80,
        explanation: {
          pl: "50 + 50 = 100.  180 − 100 = **80°**.",
          ua: "50 + 50 = 100.  180 − 100 = **80°**."
        }
      }
    },

    /* 11 — Znamy kąt między ramionami */
    {
      type: "practice",
      heading: {
        pl: "🎯 A jeśli znamy kąt między ramionami?",
        ua: "🎯 А якщо знаємо кут між бічними?"
      },
      parts: [
        {
          text: {
            pl: [
              "Kąt między ramionami ma **40°**.",
              "Ile stopni ma **każdy** kąt przy podstawie?"
            ],
            ua: [
              "Кут між бічними — **40°**.",
              "Скільки градусів має **кожний** кут при основі?"
            ]
          }
        },
        {
          visual: ph(
            "t15-slide11.png",
          )
        }
      ],
      task: {
        id: "m15-base70",
        type: "input-number",
        level: "B",
        question: {
          pl: "Napisz",
          ua: "Напиши"
        },
        answer: 70,
        explanation: {
          pl: "180 − 40 = 140.  140 : 2 = **70°** i **70°**.",
          ua: "180 − 40 = 140.  140 : 2 = **70°** і **70°**."
        }
      }
    },

    /* 12–13 — Maszyna kątów */
    {
      type: "check",
      heading: {
        pl: "🤖 Maszyna kątów (1/2)",
        ua: "🤖 Машина кутів (1/2)"
      },
      parts: [
        {
          text: {
            pl: "Kąty przy podstawie: **35°** i **35°**. Ile ma kąt między ramionami?",
            ua: "Кути при основі: **35°** і **35°**. Скільки кут між бічними?"
          }
        }
      ],
      task: {
        id: "m15-mach1",
        type: "input-number",
        level: "B",
        question: { pl: "? °", ua: "? °" },
        answer: 110,
        explanation: {
          pl: "180 − 35 − 35 = **110°**.",
          ua: "180 − 35 − 35 = **110°**."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🤖 Maszyna kątów (2/2)",
        ua: "🤖 Машина кутів (2/2)"
      },
      parts: [
        {
          text: {
            pl: "Kąt między ramionami: **120°**. Ile ma każdy kąt przy podstawie?",
            ua: "Кут між бічними: **120°**. Скільки кожен кут при основі?"
          }
        }
      ],
      task: {
        id: "m15-mach2",
        type: "input-number",
        level: "B",
        question: { pl: "? °", ua: "? °" },
        answer: 30,
        explanation: {
          pl: "(180 − 120) : 2 = **30°**.",
          ua: "(180 − 120) : 2 = **30°**."
        }
      }
    },

    /* 14 — Czy to możliwe */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: czy to możliwe?",
        ua: "🧠 Логіка 2: чи це можливо?"
      },
      parts: [
        {
          text: {
            pl: [
              "🕵️ Kartka: „Trójkąt **równoramienny** ma kąty: **40°, 60° i 80°**”.",
              "Czy taka informacja może być prawdziwa?"
            ],
            ua: [
              "🕵️ Картка: «Трикутник **рівнобедрений** має кути: **40°, 60° і 80°**».",
              "Чи може це бути правдою?"
            ]
          }
        }
      ],
      task: {
        id: "m15-logika2",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy to może być trójkąt równoramienny?",
          ua: "Чи може це бути рівнобедрений трикутник?"
        },
        answer: false,
        explanation: {
          pl: "40+60+80=180 — trójkąt **istnieje**. Ale **żadne dwa kąty nie są równe** → nie jest równoramienny!",
          ua: "40+60+80=180 — трикутник **існує**. Але **жодні два кути не рівні** → не рівнобедрений!"
        }
      }
    },

    /* 15 — Równoboczny */
    {
      type: "concept",
      heading: {
        pl: "💎 Trójkąt idealnej równości",
        ua: "💎 Трикутник ідеальної рівності"
      },
      parts: [
        {
          visual: ph(
            "t15-equil.jpg",
            "Trójkąt równoboczny",
            "Рівносторонній трикутник",
            "Equilateral triangle"
          )
        },
        {
          text: {
            pl: [
              "🦉 W trójkącie **równobocznym** wszystkie trzy boki mają tę samą długość.",
              "**AB = BC = AC** — ale to jeszcze nie koniec tajemnic!"
            ],
            ua: [
              "🦉 У **рівносторонньому** трикутнику всі три сторони однакової довжини.",
              "**AB = BC = AC** — але це ще не кінець таємниць!"
            ]
          }
        },
        tri("equil")
      ]
    },

    /* 16 — Czy równoboczny jest równoramienny */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: równoboczny a równoramienny",
        ua: "🧠 Логіка 3: рівносторонній і рівнобедрений"
      },
      parts: [
        {
          text: {
            pl: "🦉 Sowa: „Trójkąt równoboczny ma trzy równe boki, więc **nie** jest równoramienny”. Czy ma rację?",
            ua: "🦉 Сова: «Рівносторонній має три рівні сторони, тож **не** є рівнобедреним». Чи має рацію?"
          }
        },
        {
          visual: ph(
            "t15-slide15.png",
          )
        }
      ],
      task: {
        id: "m15-logika3",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy Sowa ma rację?",
          ua: "Чи Сова має рацію?"
        },
        answer: false,
        explanation: {
          pl: "NIE! Równoramienny = **co najmniej** 2 równe boki. Równoboczny ma 3 → **każdy równoboczny jest też równoramienny**. Ale nie każdy równoramienny jest równoboczny.",
          ua: "НІ! Рівнобедрений = **щонайменше** 2 рівні сторони. Рівносторонній має 3 → **кожен рівносторонній є також рівнобедреним**. Але не кожен рівнобедрений — рівносторонній."
        }
      }
    },

    /* 17 — 60° */
    {
      type: "practice",
      heading: {
        pl: "⭐ Ile stopni ma każdy kąt?",
        ua: "⭐ Скільки градусів кожен кут?"
      },
      parts: [
        {
          text: {
            pl: [
              "W trójkącie równobocznym wszystkie boki są równe → wszystkie kąty też.",
              "Suma = 180°. Jak podzielić na **trzy równe** części?"
            ],
            ua: [
              "У рівносторонньому всі сторони рівні → усі кути теж.",
              "Сума = 180°. Як поділити на **три рівні** частини?"
            ]
          }
        },
        tri("equil")
      ],
      task: {
        id: "m15-60",
        type: "single-choice",
        level: "A",
        question: {
          pl: "180° : 3 = ?",
          ua: "180° : 3 = ?"
        },
        options: [
          { id: "a", label: { pl: "45°", ua: "45°" } },
          { id: "b", label: { pl: "60°", ua: "60°" } },
          { id: "c", label: { pl: "90°", ua: "90°" } }
        ],
        answer: "b",
        explanation: {
          pl: "⭐ Każdy kąt trójkąta równobocznego ma **60°**.",
          ua: "⭐ Кожен кут рівностороннього трикутника має **60°**."
        }
      }
    },

    /* 18 — Trzy kąty */
    {
      type: "practice",
      heading: {
        pl: "🎯 Trzy kąty, jedna odpowiedź",
        ua: "🎯 Три кути, одна відповідь"
      },
      parts: [
        {
          text: {
            pl: "Trójkąt XYZ jest **równoboczny**.",
            ua: "Трикутник XYZ — **рівносторонній**."
          }
        }
      ],
      task: {
        id: "m15-xyz60",
        type: "input-number",
        level: "A",
        question: {
          pl: "∠X = ∠Y = ∠Z = ? °",
          ua: "∠X = ∠Y = ∠Z = ? °"
        },
        answer: 60,
        explanation: {
          pl: "**60°, 60°, 60°**. Czy może być prostokątny? Nie — nie ma 90°. Jest **ostrokątny**.",
          ua: "**60°, 60°, 60°**. Чи може бути прямокутним? Ні — немає 90°. Він **гострокутний**."
        }
      }
    },

    /* 19 — Znajdź błąd */
    {
      type: "mistake",
      heading: {
        pl: "🔎 Znajdź błąd: 60°, 60°, 70°",
        ua: "🔎 Знайди помилку: 60°, 60°, 70°"
      },
      parts: [
        {
          text: {
            pl: "🤖 Maszyna: „Ten trójkąt jest **równoboczny**. Jego kąty: **60°, 60° i 70°**”. Ile błędów?",
            ua: "🤖 Машина: «Цей трикутник **рівносторонній**. Кути: **60°, 60° і 70°**». Скільки помилок?"
          }
        }
      ],
      task: {
        id: "m15-blad",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest nie tak?",
          ua: "Що не так?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Suma = 190° (≠ 180°) i kąty nie są po 60°",
              ua: "Сума = 190° (≠ 180°) і кути не по 60°"
            }
          },
          {
            id: "b",
            label: {
              pl: "Tylko suma jest zła",
              ua: "Лише сума погана"
            }
          },
          {
            id: "c",
            label: {
              pl: "Wszystko OK",
              ua: "Усе ОК"
            }
          }
        ],
        answer: "a",
        explanation: {
          pl: "❌ 60+60+70=**190°** ≠ 180°. ❌ W równobocznym każdy kąt = **60°**. Takiego trójkąta nie ma!",
          ua: "❌ 60+60+70=**190°** ≠ 180°. ❌ У рівносторонньому кожен кут = **60°**. Такого трикутника немає!"
        }
      }
    },

    /* 20 — Obwód */
    {
      type: "concept",
      heading: {
        pl: "📏 Co to jest obwód?",
        ua: "📏 Що таке периметр?"
      },
      parts: [
        {
          visual: ph(
            "t15-perimeter.jpg",
            "Taśma wokół ramki",
            "Стрічка навколо рамки",
            "Perimeter ribbon"
          )
        },
        {
          rule: {
            label: { pl: "Definicja", ua: "Означення" },
            lines: {
              pl: "Obwód = a + b + c",
              ua: "Периметр = a + b + c"
            },
            text: {
              pl: "Dodajemy długości **wszystkich trzech** boków — ile taśmy potrzeba na ramkę.",
              ua: "Додаємо довжини **усіх трьох** сторін — скільки стрічки треба на рамку."
            }
          }
        }
      ]
    },

    /* 21 — Obwód równoramiennego */
    {
      type: "practice",
      heading: {
        pl: "🎯 Obwód trójkąta równoramiennego",
        ua: "🎯 Периметр рівнобедреного"
      },
      parts: [
        {
          text: {
            pl: "Ramiona po **8 cm**, podstawa **5 cm**. Oblicz obwód.",
            ua: "Бічні по **8 cm**, основа **5 cm**. Обчисли периметр."
          }
        },
        tri("obwod-iso")
      ],
      task: {
        id: "m15-obwod21",
        type: "input-number",
        level: "B",
        question: {
          pl: "8 + 8 + 5 = ? cm",
          ua: "8 + 8 + 5 = ? cm"
        },
        answer: 21,
        explanation: {
          pl: "Obwód = **21 cm**. (ramię + ramię + podstawa)",
          ua: "Периметр = **21 cm**. (бічна + бічна + основа)"
        }
      }
    },

    /* 22 — Obwód równobocznego */
    {
      type: "practice",
      heading: {
        pl: "🎯 Obwód trójkąta równobocznego",
        ua: "🎯 Периметр рівностороннього"
      },
      parts: [
        {
          text: {
            pl: "Bok ma **7 cm**. Ile wynosi obwód?",
            ua: "Сторона **7 cm**. Який периметр?"
          }
        },
        {
          rule: {
            label: { pl: "Skrót", ua: "Скорочення" },
            lines: {
              pl: "Obwód = 3 · bok",
              ua: "Периметр = 3 · сторона"
            }
          }
        }
      ],
      task: {
        id: "m15-obwod-eq",
        type: "input-number",
        level: "A",
        question: {
          pl: "3 · 7 = ? cm",
          ua: "3 · 7 = ? cm"
        },
        answer: 21,
        explanation: {
          pl: "**21 cm**. (Albo 7+7+7)",
          ua: "**21 cm**. (Або 7+7+7)"
        }
      }
    },

    /* 23 — Znam obwód → bok */
    {
      type: "practice",
      heading: {
        pl: "🔐 Znam obwód. Szukam boku!",
        ua: "🔐 Знаю периметр. Шукаю сторону!"
      },
      parts: [
        {
          visual: ph(
            "t15-safe.jpg",
            "Trójkątny sejf",
            "Трикутний сейф",
            "Triangle safe"
          )
        },
        {
          text: {
            pl: "Sejf równoboczny: obwód **36 cm**. Jaką długość ma jeden bok?",
            ua: "Рівносторонній сейф: периметр **36 cm**. Яка довжина однієї сторони?"
          }
        }
      ],
      task: {
        id: "m15-bok36",
        type: "input-number",
        level: "B",
        question: {
          pl: "36 : 3 = ? cm",
          ua: "36 : 3 = ? cm"
        },
        answer: 12,
        explanation: {
          pl: "Każdy bok ma **12 cm**.",
          ua: "Кожна сторона — **12 cm**."
        }
      }
    },

    /* 24 — Podstawa */
    {
      type: "practice",
      heading: {
        pl: "🎯 Znam obwód i ramiona. Gdzie podstawa?",
        ua: "🎯 Знаю периметр і бічні. Де основа?"
      },
      parts: [
        {
          text: {
            pl: "Obwód **30 cm**. Każde ramię **11 cm**. Oblicz podstawę.",
            ua: "Периметр **30 cm**. Кожна бічна **11 cm**. Обчисли основу."
          }
        },
        tri("obwod-base")
      ],
      task: {
        id: "m15-podst8",
        type: "input-number",
        level: "B",
        question: {
          pl: "30 − (11 + 11) = ? cm",
          ua: "30 − (11 + 11) = ? cm"
        },
        answer: 8,
        explanation: {
          pl: "11+11=22.  30−22=**8 cm**.",
          ua: "11+11=22.  30−22=**8 cm**."
        }
      }
    },

    /* 25 — Ramiona z obwodu */
    {
      type: "practice",
      heading: {
        pl: "🎯 Znam obwód i podstawę. Gdzie ramiona?",
        ua: "🎯 Знаю периметр і основу. Де бічні?"
      },
      parts: [
        {
          text: {
            pl: [
              "Obwód **34 cm**, podstawa **10 cm**.",
              "Najpierw: ile razem mają oba ramiona? Potem dzielimy na 2."
            ],
            ua: [
              "Периметр **34 cm**, основа **10 cm**.",
              "Спочатку: скільки разом обидві бічні? Потім ділимо на 2."
            ]
          }
        },
        tri("obwod-arms")
      ],
      task: {
        id: "m15-ram12",
        type: "input-number",
        level: "B",
        question: {
          pl: "Napisz",
          ua: "Напиши"
        },
        answer: 12,
        explanation: {
          pl: "34−10=24.  24:2=**12 cm**. Sprawdź: 12+12+10=34 ✓",
          ua: "34−10=24.  24:2=**12 cm**. Перевірка: 12+12+10=34 ✓"
        }
      }
    },

    /* 26 — Trzy sejfy */
    {
      type: "check",
      heading: {
        pl: "🏆 Sejf 1: równoboczny",
        ua: "🏆 Сейф 1: рівносторонній"
      },
      parts: [
        {
          text: {
            pl: "Obwód **45 cm**. Ile ma jeden bok?",
            ua: "Периметр **45 cm**. Скільки одна сторона?"
          }
        }
      ],
      task: {
        id: "m15-safe1",
        type: "input-number",
        level: "A",
        question: { pl: "Napisz",
          ua: "Напиши"},
        answer: 15,
        explanation: { pl: "**15 cm**.", ua: "**15 cm**." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Sejf 2: obwód",
        ua: "🏆 Сейф 2: периметр"
      },
      parts: [
        {
          text: {
            pl: "Ramiona po **9 cm**, podstawa **6 cm**. Oblicz obwód.",
            ua: "Бічні по **9 cm**, основа **6 cm**. Обчисли периметр."
          }
        }
      ],
      task: {
        id: "m15-safe2",
        type: "input-number",
        level: "B",
        question: {pl: "Napisz",
          ua: "Напиши" },
        answer: 24,
        explanation: { pl: "**24 cm**.", ua: "**24 cm**." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Sejf 3: ramię",
        ua: "🏆 Сейф 3: бічна"
      },
      parts: [
        {
          text: {
            pl: "Obwód **28 cm**, podstawa **8 cm**. Ile ma jedno ramię?",
            ua: "Периметр **28 cm**, основа **8 cm**. Скільки одна бічна?"
          }
        }
      ],
      task: {
        id: "m15-safe3",
        type: "input-number",
        level: "B",
        question: {
          pl: "Napisz",
          ua: "Напиши"
        },
        answer: 10,
        explanation: {
          pl: "🏆 **10 cm**. Wszystkie sejfy otwarte!",
          ua: "🏆 **10 cm**. Усі сейфи відкрито!"
        }
      }
    },

    /* 28 — Architekt */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 4: architekt popełnił błąd",
        ua: "🧠 Логіка 4: архітектор помилився"
      },
      parts: [
        {
          visual: ph(
            "t15-architect.jpg",
            "Dach z ramionami 4 m i podstawą 9 m",
            "Дах із бічними 4 m і основою 9 m",
            "Impossible roof"
          )
        },
        {
          text: {
            pl: "Oba ramiona po **4 m**, podstawa **9 m**. Czy można zbudować taki trójkąt?",
            ua: "Обидві бічні по **4 m**, основа **9 m**. Чи можна побудувати такий трикутник?"
          }
        }
      ],
      task: {
        id: "m15-architekt",
        type: "true-false",
        level: "C",
        question: {
          pl: "Da się zbudować ten dach?",
          ua: "Можна побудувати цей дах?"
        },
        answer: false,
        explanation: {
          pl: "NIE! 4+4=8 < 9. Dwa krótsze boki są za krótkie — nierówność trójkąta z lekcji 14!",
          ua: "НІ! 4+4=8 < 9. Дві коротші сторони занадто короткі — нерівність трикутника з уроку 14!"
        }
      }
    },

    /* Summary */
    {
      type: "summary",
      heading: {
        pl: "📋 Ściąga lekcji 15",
        ua: "📋 Шпаргалка уроку 15"
      },
      parts: [
        {
          rule: {
            label: { pl: "Równoramienny", ua: "Рівнобедрений" },
            lines: {
              pl: "ramiona równe → kąty przy podstawie równe",
              ua: "бічні рівні → кути при основі рівні"
            }
          }
        },
        {
          rule: {
            label: { pl: "Równoboczny", ua: "Рівносторонній" },
            lines: {
              pl: "3 równe boki → 3 kąty po 60°",
              ua: "3 рівні сторони → 3 кути по 60°"
            },
            text: {
              pl: "Każdy równoboczny jest też równoramienny. Obwód = 3 · bok.",
              ua: "Кожен рівносторонній є також рівнобедреним. Периметр = 3 · сторона."
            }
          }
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
        { pl: "ramię / ramiona", ua: "бічна сторона / бічні" },
        { pl: "podstawa", ua: "основа" },
        { pl: "kąty przy podstawie", ua: "кути при основі" },
        { pl: "kąt między ramionami", ua: "кут між бічними" },
        { pl: "obwód", ua: "периметр" },
        { pl: "trójkąt równoboczny (60°, 60°, 60°)", ua: "рівносторонній (60°, 60°, 60°)" }
      ],
      phrases: [
        {
          pl: "Kąty przy podstawie mają równe miary.",
          ua: "Кути при основі мають рівні міри."
        },
        {
          pl: "Obwód = ramię + ramię + podstawa.",
          ua: "Периметр = бічна + бічна + основа."
        }
      ]
    },

    /* Finał */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови"
      },
      text: {
        pl: [
          "Odkryłeś tajemnice trójkąta równoramiennego i równobocznego.",
          "Równe ramiona → równe kąty przy podstawie.",
          "Trzy równe boki → trzy kąty po 60°.",
          "Umiesz już liczyć obwód i brakujące boki.",
          "Następna misja: Lekcja 16 → wysokość trójkąta!"
        ],
        ua: [
          "Ти відкрив таємниці рівнобедреного і рівностороннього трикутника.",
          "Рівні бічні → рівні кути при основі.",
          "Три рівні сторони → три кути по 60°.",
          "Ти вже вмієш рахувати периметр і відсутні сторони.",
          "Наступна місія: Урок 16 → висота трикутника!"
        ]
      }
    }
  ]
};
