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

/** Simple labeled figure board (SVG). kinds: prosta | polprosta | odcinek | points | cut */
function fig(kind, labels) {
  labels = labels || {};
  var a = labels.a || "A";
  var b = labels.b || "B";
  var mark = labels.mark || "";
  var svg = "";
  if (kind === "points") {
    svg =
      '<circle cx="100" cy="70" r="8" fill="#0f766e"/>' +
      '<text x="100" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + a + "</text>" +
      '<circle cx="220" cy="70" r="8" fill="#0f766e"/>' +
      '<text x="220" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + b + "</text>" +
      (labels.c
        ? '<circle cx="340" cy="70" r="8" fill="#0f766e"/>' +
          '<text x="340" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' +
          labels.c +
          "</text>"
        : "");
  } else if (kind === "prosta") {
    svg =
      '<line x1="40" y1="70" x2="400" y2="70" stroke="#1c1917" stroke-width="3"/>' +
      '<polygon points="28,70 42,64 42,76" fill="#1c1917"/>' +
      '<polygon points="412,70 398,64 398,76" fill="#1c1917"/>' +
      '<circle cx="150" cy="70" r="7" fill="#0f766e"/>' +
      '<text x="150" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + a + "</text>" +
      '<circle cx="290" cy="70" r="7" fill="#0f766e"/>' +
      '<text x="290" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + b + "</text>";
    if (labels.name) {
      svg +=
        '<text x="220" y="48" text-anchor="middle" font-size="22" font-weight="700" font-style="italic" fill="#b45309">' +
        String(labels.name)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;") +
        "</text>";
    }
  } else if (kind === "polprosta") {
    svg =
      '<line x1="90" y1="70" x2="400" y2="70" stroke="#1c1917" stroke-width="3"/>' +
      '<polygon points="412,70 398,64 398,76" fill="#1c1917"/>' +
      '<circle cx="90" cy="70" r="9" fill="#0f766e"/>' +
      '<text x="90" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + a + "</text>" +
      '<circle cx="250" cy="70" r="6" fill="#57534e"/>' +
      '<text x="250" y="100" text-anchor="middle" font-size="16" fill="#57534e">' + b + "</text>";
  } else if (kind === "polprosta-ba") {
    svg =
      '<line x1="40" y1="70" x2="350" y2="70" stroke="#1c1917" stroke-width="3"/>' +
      '<polygon points="28,70 42,64 42,76" fill="#1c1917"/>' +
      '<circle cx="350" cy="70" r="9" fill="#0f766e"/>' +
      '<text x="350" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + b + "</text>" +
      '<circle cx="190" cy="70" r="6" fill="#57534e"/>' +
      '<text x="190" y="100" text-anchor="middle" font-size="16" fill="#57534e">' + a + "</text>";
  } else if (kind === "odcinek") {
    svg =
      '<line x1="120" y1="70" x2="320" y2="70" stroke="#1c1917" stroke-width="3"/>' +
      '<circle cx="120" cy="70" r="9" fill="#0f766e"/>' +
      '<text x="120" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + a + "</text>" +
      '<circle cx="320" cy="70" r="9" fill="#0f766e"/>' +
      '<text x="320" y="100" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' + b + "</text>";
  } else if (kind === "cut") {
    svg =
      '<line x1="40" y1="50" x2="200" y2="50" stroke="#1c1917" stroke-width="3"/>' +
      '<polygon points="28,50 42,44 42,56" fill="#1c1917"/>' +
      '<circle cx="200" cy="50" r="9" fill="#0f766e"/>' +
      '<text x="200" y="30" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">' + a + "</text>" +
      '<line x1="240" y1="50" x2="400" y2="50" stroke="#1c1917" stroke-width="3"/>' +
      '<polygon points="412,50 398,44 398,56" fill="#1c1917"/>' +
      '<circle cx="240" cy="50" r="9" fill="#0f766e"/>' +
      '<text x="240" y="80" text-anchor="middle" font-size="16" font-weight="700" fill="#0f766e">' + a + "</text>";
  }
  if (mark) {
    svg +=
      '<text x="220" y="130" text-anchor="middle" font-size="15" fill="#78716c">' +
      String(mark)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;") +
      "</text>";
  }
  return {
    html:
      '<div class="polish-board" style="padding:0.5rem 0.75rem">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="440" height="140" viewBox="0 0 440 140" aria-hidden="true">' +
      svg +
      "</svg></div>"
  };
}

window.EduMostLessonContent = {
  blocks: [
    /* 1 — Wejście */
    {
      type: "intro",
      heading: {
        pl: "🗺️ Matematyka jest wszędzie!",
        ua: "🗺️ Математика всюди!"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Spójrz na mapę miasta.",
              "Czy widzisz **punkty**? A **proste**? A **odcinki**?",
              "A coś, co może przypominać całą powierzchnię mapy?"
            ],
            ua: [
              "🦉 Подивись на мапу міста.",
              "Чи бачиш **точки**? А **прямі**? А **відрізки**?",
              "А щось, що може нагадувати всю поверхню мапи?"
            ]
          }
        },
        {
          visual: ph(
            "t11-map.jpg",
            "Mapa miasta",
            "Мапа міста",
            "City map with points A B C"
          )
        },
        {
          text: {
            pl: "🔎 Zaczynamy odkrywanie — od świata do geometrii!",
            ua: "🔎 Починаємо відкриття — від світу до геометрії!"
          }
        }
      ],
      task: {
        id: "m11-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "Zaczynamy geometryczną podróż?",
          ua: "Починаємо геометричну подорож?"
        },
        answer: true,
        explanation: {
          pl: "🚀 Start! Najpierw poznamy punkt.",
          ua: "🚀 Старт! Спочатку пізнаємо точку."
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
          pl: "odróżnić punkt, prostą, półprostą i odcinek",
          ua: "розрізнити точку, пряму, півпряму і відрізок"
        },
        {
          pl: "nazwać figury: a, AB, półprosta AB / BA",
          ua: "назвати фігури: a, AB, півпряма AB / BA"
        },
        {
          pl: "zrozumieć, że płaszczyzna to nieograniczona powierzchnia",
          ua: "зрозуміти, що площина — необмежена поверхня"
        },
        {
          pl: "rozpoznać geometrię w prawdziwym świecie",
          ua: "розпізнати геометрію в реальному світі"
        }
      ]
    },

    /* 3 — Punkt */
    {
      type: "concept",
      heading: {
        pl: "● Co to jest punkt?",
        ua: "● Що таке точка?"
      },
      parts: [
        {
          text: {
            pl: "🦉 To jest **punkt A** — pokazuje miejsce na mapie.",
            ua: "🦉 Це **точка A** — показує місце на мапі."
          }
        },
        fig("points", { a: "A", b: "B", c: "C" }),
        {
          text: {
            pl: "Pojawiły się też punkty **B** i **C**.",
            ua: "З’явились також точки **B** і **C**."
          }
        },
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Punkt pokazuje miejsce. Nie ma długości, szerokości ani wysokości.",
              ua: "Точка показує місце. Не має довжини, ширини ні висоти."
            }
          }
        }
      ],
      task: {
        id: "m11-punkt-dl",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy punkt ma długość?",
          ua: "Чи точка має довжину?"
        },
        answer: false,
        explanation: {
          pl: "NIE. Punkt tylko pokazuje miejsce.",
          ua: "НІ. Точка лише показує місце."
        }
      }
    },

    /* 4 — Znajdź punkt A */
    {
      type: "practice",
      heading: {
        pl: "🎯 Znajdź punkt A",
        ua: "🎯 Знайди точку A"
      },
      parts: [
        {
          text: {
            pl: [
              "Na mapie: **A** — szkoła, **B** — dom, **C** — sklep.",
              "Który punkt to szkoła?"
            ],
            ua: [
              "На мапі: **A** — школа, **B** — дім, **C** — магазин.",
              "Яка точка — школа?"
            ]
          }
        },
        {
          visual: ph(
            "t11-map.jpg",
            "Mapa — szukamy A",
            "Мапа — шукаємо A",
            "Find point A"
          )
        }
      ],
      task: {
        id: "m11-find-a",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kliknij punkt A (szkoła):",
          ua: "Натисни точку A (школа):"
        },
        options: [
          { id: "a", label: { pl: "📍 A — szkoła", ua: "📍 A — школа" } },
          { id: "b", label: { pl: "📍 B — dom", ua: "📍 B — дім" } },
          { id: "c", label: { pl: "📍 C — sklep", ua: "📍 C — магазин" } }
        ],
        answer: "a",
        explanation: {
          pl: "🎉 Punkt A znaleziony!",
          ua: "🎉 Точку A знайдено!"
        }
      }
    },

    /* 5 — Prosta pojawia się */
    {
      type: "observe",
      heading: {
        pl: "✨ A teraz prosta",
        ua: "✨ А тепер пряма"
      },
      parts: [
        {
          text: {
            pl: [
              "Mamy punkt **A** na mapie.",
              "Przez ten punkt prowadzimy linię **w obie strony**.",
              "Wyobraź sobie: linia **nie zaczyna się** w A i **nie kończy** się nigdzie — A tylko na niej leży."
            ],
            ua: [
              "Маємо точку **A** на мапі.",
              "Через цю точку проводимо лінію **в обидва боки**.",
              "Уяви: лінія **не починається** в A і **ніде не кінчається** — A лише на ній лежить."
            ]
          }
        },
        fig("prosta", { a: "A", b: "B", mark: "punkt A leży na prostej" }),
        {
          rule: {
            label: { pl: "Odkrycie!", ua: "Відкриття!" },
            lines: { pl: "PROSTA", ua: "ПРЯМА" },
            text: {
              pl: "Nie ma początku ani końca. Dwie strzałki: ← →",
              ua: "Не має ні початку, ні кінця. Дві стрілки: ← →"
            }
          }
        },
        {
          html:
            '<div class="polish-board" style="padding:0.65rem 1rem">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="440" height="56" viewBox="0 0 440 56" aria-label="prosta">' +
            '<line x1="36" y1="28" x2="404" y2="28" stroke="#1c1917" stroke-width="3"/>' +
            '<polygon points="24,28 38,22 38,34" fill="#1c1917"/>' +
            '<polygon points="416,28 402,22 402,34" fill="#1c1917"/>' +
            "</svg></div>"
        }
      ]
    },

    /* 6 — Nie widzimy całej */
    {
      type: "concept",
      heading: {
        pl: "👁️ Nie widzimy całej prostej",
        ua: "👁️ Ми не бачимо всієї прямої"
      },
      parts: [
        {
          text: {
            pl: [
              "Na ekranie widzimy tylko **fragment**.",
              "Powiększamy… linia nadal idzie dalej.",
              "Jeszcze… i nadal nie ma końca."
            ],
            ua: [
              "На екрані бачимо лише **фрагмент**.",
              "Збільшуємо… лінія все одно йде далі.",
              "Ще… і все одно немає кінця."
            ]
          }
        },
        fig("prosta", { a: "A", b: "B", mark: "← fragment na ekranie →" }),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Prosta nie ma początku ani końca.",
              ua: "Пряма не має ні початку, ні кінця."
            }
          }
        }
      ],
      task: {
        id: "m11-prosta-koniec",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy prosta ma początek lub koniec?",
          ua: "Чи пряма має початок або кінець?"
        },
        answer: false,
        explanation: {
          pl: "Nie. To, że kreska na ekranie „się urywa”, nie znaczy, że prosta ma koniec.",
          ua: "Ні. Те, що риска на екрані «обривається», не означає, що пряма має кінець."
        }
      }
    },

    /* 7 — Jak nazywamy */
    {
      type: "guided-practice",
      heading: {
        pl: "🏷️ Jak nazywamy prostą?",
        ua: "🏷️ Як називаємо пряму?"
      },
      parts: [
        {
          text: {
            pl: "Prosta przechodzi przez punkty A i B:",
            ua: "Пряма проходить через точки A і B:"
          }
        },
        fig("prosta", { a: "A", b: "B", name: "a" }),
        {
          text: {
            pl: "Możemy też oznaczyć ją małą literą, np. **a** (nad prostą).",
            ua: "Можемо також позначити її малою літерою, напр. **a** (над прямою)."
          }
        }
      ],
      task: {
        id: "m11-nazwa-prostej",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jak możemy nazwać tę prostą?",
          ua: "Як можемо назвати цю пряму?"
        },
        options: [
          { id: "ab", label: { pl: "prosta AB (lub a)", ua: "пряма AB (або a)" } },
          { id: "onlya", label: { pl: "tylko punkt A", ua: "лише точка A" } },
          { id: "odc", label: { pl: "odcinek AB", ua: "відрізок AB" } }
        ],
        answer: "ab",
        explanation: {
          pl: "Prosta AB — albo mała litera **a**. Dwa punkty wskazują, przez które przechodzi.",
          ua: "Пряма AB — або мала літера **a**. Дві точки показують, через які вона проходить."
        }
      }
    },

    /* 8 — LOGIKA 1 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: czy to naprawdę prosta?",
        ua: "🧠 Логіка 1: чи це справді пряма?"
      },
      parts: [
        {
          text: {
            pl: "Cztery rysunki. Który pokazuje **prostą**?",
            ua: "Чотири малюнки. Який показує **пряму**?"
          }
        },
        {
          items: [
            {
              pl: ["**A**  ●────────●   (dwa końce)"],
              ua: ["**A**  ●────────●   (два кінці)"]
            },
            {
              pl: ["**B**  ←────────→   (strzałki w obie strony)"],
              ua: ["**B**  ←────────→   (стрілки в обидва боки)"]
            },
            {
              pl: ["**C**  ●────────→   (początek + strzałka)"],
              ua: ["**C**  ●────────→   (початок + стрілка)"]
            },
            {
              pl: ["**D**  ●────────●   (znowu dwa końce)"],
              ua: ["**D**  ●────────●   (знову два кінці)"]
            }
          ]
        }
      ],
      task: {
        id: "m11-logika1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który rysunek przedstawia prostą?",
          ua: "Який малюнок зображує пряму?"
        },
        options: [
          { id: "a", label: { pl: "A — odcinek", ua: "A — відрізок" } },
          { id: "b", label: { pl: "B — prosta", ua: "B — пряма" } },
          { id: "c", label: { pl: "C — półprosta", ua: "C — півпряма" } },
          { id: "d", label: { pl: "D — odcinek", ua: "D — відрізок" } }
        ],
        answer: "b",
        explanation: {
          pl: "B! Strzałki w obie strony = prosta. A i D to odcinki, C to półprosta.",
          ua: "B! Стрілки в обидва боки = пряма. A і D — відрізки, C — півпряма."
        }
      }
    },

    /* 9 — Magiczny punkt */
    {
      type: "observe",
      heading: {
        pl: "✂️ Magiczny punkt na prostej",
        ua: "✂️ Чарівна точка на прямій"
      },
      parts: [
        {
          text: {
            pl: [
              "Mamy prostą. Zaznaczamy na niej punkt **A**.",
              "🦉 Co się stanie?"
            ],
            ua: [
              "Маємо пряму. Позначаємо на ній точку **A**.",
              "🦉 Що станеться?"
            ]
          }
        },
        {
          visual: { kind: "geo-lines", mode: "prosta" }
        },
        {
          text: {
            pl: "Prosta „rozcina się” na **dwie półproste**!",
            ua: "Пряма «розрізається» на **дві півпрямі**!"
          }
        },
        fig("cut", { a: "A", mark: "dwie półproste z początkiem A" })
      ]
    },

    /* 10 — Półprosta */
    {
      type: "concept",
      heading: {
        pl: "➡️ Półprosta",
        ua: "➡️ Півпряма"
      },
      parts: [
        {
          text: {
            pl: "Półprosta ma **początek**, ale **nie ma końca**.",
            ua: "Півпряма має **початок**, але **не має кінця**."
          }
        },
        {
          visual: { kind: "geo-lines", mode: "polprosta" }
        },
        fig("polprosta", { a: "A", b: "B", mark: "●────────────→" }),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            lines: {
              pl: "POCZĄTEK + BRAK KOŃCA",
              ua: "ПОЧАТОК + НЕМАЄ КІНЦЯ"
            },
            text: {
              pl: "Półprosta ma początek, ale nie ma końca.",
              ua: "Промінь (півпряма) має початок, але не має кінця."
            }
          }
        }
      ]
    },

    /* 11 — Kolejność liter */
    {
      type: "guided-practice",
      heading: {
        pl: "🔤 Ważne: kolejność liter",
        ua: "🔤 Важливо: порядок літер"
      },
      parts: [
        {
          text: {
            pl: "Pierwsza litera mówi, gdzie jest **początek**.",
            ua: "Перша літера каже, де **початок**."
          }
        },
        fig("polprosta", { a: "A", b: "B", mark: "półprosta AB" })
      ],
      task: {
        id: "m11-pol-ab",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak nazywamy tę półprostą? (początek w A)",
          ua: "Як називаємо цю півпряму? (початок в A)"
        },
        options: [
          { id: "ab", label: { pl: "półprosta AB", ua: "півпряма AB" } },
          { id: "ba", label: { pl: "półprosta BA", ua: "півпряма BA" } },
          { id: "a", label: { pl: "tylko A", ua: "лише A" } }
        ],
        answer: "ab",
        explanation: {
          pl: "AB — pierwsza litera = początek A.",
          ua: "AB — перша літера = початок A."
        }
      }
    },

    /* 12 — BA */
    {
      type: "practice",
      heading: {
        pl: "🔤 A teraz półprosta BA",
        ua: "🔤 А тепер півпряма BA"
      },
      parts: [
        {
          text: {
            pl: "Początek jest w **B**. Strzałka idzie przez A…",
            ua: "Початок у **B**. Стрілка йде через A…"
          }
        },
        fig("polprosta-ba", { a: "A", b: "B", mark: "półprosta BA" }),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Pierwsza litera pokazuje początek półprostej.",
              ua: "Перша літера показує початок променя."
            }
          }
        }
      ],
      task: {
        id: "m11-pol-ba",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Początek w B → to jest:",
          ua: "Початок у B → це:"
        },
        options: [
          { id: "ab", label: { pl: "półprosta AB", ua: "півпряма AB" } },
          { id: "ba", label: { pl: "półprosta BA", ua: "півпряма BA" } }
        ],
        answer: "ba",
        explanation: {
          pl: "BA! Inna kolejność liter = inny początek.",
          ua: "BA! Інший порядок літер = інший початок."
        }
      }
    },

    /* 13 — Odcinek pojawia się */
    {
      type: "observe",
      heading: {
        pl: "📏 A teraz odcinek",
        ua: "📏 А тепер відрізок"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 A co, jeśli linia ma **dwa końce**?",
              "Linia przestaje „uciekać” w nieskończoność."
            ],
            ua: [
              "🦉 А що, якщо лінія має **два кінці**?",
              "Лінія перестає «тікати» в нескінченність."
            ]
          }
        },
        {
          visual: { kind: "geo-lines", mode: "odcinek" }
        },
        {
          rule: {
            label: { pl: "Odkrycie!", ua: "Відкриття!" },
            lines: { pl: "ODCINEK", ua: "ВІДРІЗОК" }
          }
        }
      ]
    },

    /* 14 — Porównanie */
    {
      type: "concept",
      heading: {
        pl: "📊 Trzy figury — porównanie",
        ua: "📊 Три фігури — порівняння"
      },
      parts: [
        {
          text: {
            pl: "Teraz znasz trzy „historie” linii:",
            ua: "Тепер ти знаєш три «історії» лінії:"
          }
        },
        {
          visual: { kind: "geo-lines", mode: "all" }
        },
        {
          items: [
            {
              pl: ["**Prosta** — początek ❌  koniec ❌"],
              ua: ["**Пряма** — початок ❌  кінець ❌"]
            },
            {
              pl: ["**Półprosta** — początek ✅  koniec ❌"],
              ua: ["**Півпряма** — початок ✅  кінець ❌"]
            },
            {
              pl: ["**Odcinek** — początek ✅  koniec ✅ (dwa końce)"],
              ua: ["**Відрізок** — початок ✅  кінець ✅ (два кінці)"]
            }
          ]
        }
      ],
      task: {
        id: "m11-porownaj",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która figura ma dokładnie dwa końce?",
          ua: "Яка фігура має рівно два кінці?"
        },
        options: [
          { id: "p", label: { pl: "prosta", ua: "пряма" } },
          { id: "h", label: { pl: "półprosta", ua: "півпряма" } },
          { id: "o", label: { pl: "odcinek", ua: "відрізок" } }
        ],
        answer: "o",
        explanation: {
          pl: "Odcinek ●────────●",
          ua: "Відрізок ●────────●"
        }
      }
    },

    /* 15 — Trzy bramy */
    {
      type: "practice",
      heading: {
        pl: "🚪 Trzy bramy",
        ua: "🚪 Три брами"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Każda figura ma inną historię.",
              "Dopasuj: która brama ma opis „nie ma końców”?"
            ],
            ua: [
              "🦉 Кожна фігура має іншу історію.",
              "Підбери: яка брама має опис «немає кінців»?"
            ]
          }
        },
        {
          items: [
            {
              pl: ["🚪 PROSTA — ∞ ← → ∞"],
              ua: ["🚪 ПРЯМА — ∞ ← → ∞"]
            },
            {
              pl: ["🚪 PÓŁPROSTA — ● → ∞"],
              ua: ["🚪 ПІВПРЯМА — ● → ∞"]
            },
            {
              pl: ["🚪 ODCINEK — ● ─ ●"],
              ua: ["🚪 ВІДРІЗОК — ● ─ ●"]
            }
          ]
        }
      ],
      task: {
        id: "m11-bramy",
        type: "single-choice",
        level: "B",
        question: {
          pl: "„Nie ma końców” → która figura?",
          ua: "«Немає кінців» → яка фігура?"
        },
        options: [
          { id: "p", label: { pl: "prosta", ua: "пряма" } },
          { id: "h", label: { pl: "półprosta", ua: "півпряма" } },
          { id: "o", label: { pl: "odcinek", ua: "відрізок" } }
        ],
        answer: "p",
        explanation: {
          pl: "Prosta — zero końców.",
          ua: "Пряма — нуль кінців."
        }
      }
    },

    /* 16 — Dwa punkty */
    {
      type: "example",
      heading: {
        pl: "✨ Dwa punkty — ile figur?",
        ua: "✨ Дві точки — скільки фігур?"
      },
      parts: [
        {
          text: {
            pl: "🦉 Mam punkty **A** i **B**. Co mogę z nich utworzyć?",
            ua: "🦉 Маю точки **A** і **B**. Що можу з них утворити?"
          }
        },
        fig("points", { a: "A", b: "B" })
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "1. prosta AB",
            ua: "1. пряма AB"
          },
          visual: { kind: "geo-lines", mode: "prosta" }
        },
        {
          text: {
            pl: "2. półprosta AB  i  3. półprosta BA",
            ua: "2. півпряма AB  і  3. півпряма BA"
          },
          visual: { kind: "geo-lines", mode: "polprosta" }
        },
        {
          text: {
            pl: "4. odcinek AB",
            ua: "4. відрізок AB"
          },
          visual: { kind: "geo-lines", mode: "odcinek" }
        }
      ],
      task: {
        id: "m11-dwa-punkty",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile różnych figur (prosta + 2 półproste + odcinek) z A i B?",
          ua: "Скільки різних фігур (пряма + 2 півпрямі + відрізок) з A і B?"
        },
        answer: 4,
        explanation: {
          pl: "**4**: prosta AB, półproste AB i BA, odcinek AB.",
          ua: "**4**: пряма AB, півпрямі AB і BA, відрізок AB."
        }
      }
    },

    /* 17 — LOGIKA 2 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: kto zabrał koniec?",
        ua: "🧠 Логіка 2: хто забрав кінець?"
      },
      parts: [
        {
          text: {
            pl: [
              "Trzech świadków mówi o sobie:",
              "🐰 „Mam **dwa** końce.”",
              "🦊 „Mam **początek**, ale nie mam końca.”",
              "🐼 „Nie mam **ani** początku, **ani** końca.”"
            ],
            ua: [
              "Троє свідків кажуть про себе:",
              "🐰 «Маю **два** кінці.»",
              "🦊 «Маю **початок**, але не маю кінця.»",
              "🐼 «Не маю **ні** початку, **ні** кінця.»"
            ]
          }
        },
        {
          visual: ph(
            "t11-animals.jpg",
            "Trzej świadkowie figur",
            "Троє свідків фігур",
            "Animals logic figures"
          )
        }
      ],
      task: {
        id: "m11-logika2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Kto jest prostą?",
          ua: "Хто є прямою?"
        },
        options: [
          { id: "zaj", label: { pl: "🐰 zając (odcinek)", ua: "🐰 заєць (відрізок)" } },
          { id: "lis", label: { pl: "🦊 lis (półprosta)", ua: "🦊 лис (півпряма)" } },
          { id: "pan", label: { pl: "🐼 panda (prosta)", ua: "🐼 панда (пряма)" } }
        ],
        answer: "pan",
        explanation: {
          pl: "🐼 Panda = prosta. 🐰 odcinek, 🦊 półprosta. Pamiętaj: fragment na ekranie ≠ koniec prostej!",
          ua: "🐼 Панда = пряма. 🐰 відрізок, 🦊 півпряма. Пам’ятай: фрагмент на екрані ≠ кінець прямої!"
        }
      }
    },

    /* 18 — Świat */
    {
      type: "practice",
      heading: {
        pl: "🌍 Geometria w prawdziwym świecie",
        ua: "🌍 Геометрія в реальному світі"
      },
      parts: [
        {
          text: {
            pl: [
              "Co może **przypominać** (nie „jest”!) półprostą?",
              "Pamiętaj: prawdziwe rzeczy tylko modelują figury."
            ],
            ua: [
              "Що може **нагадувати** (не «є»!) півпряму?",
              "Пам’ятай: реальні речі лише моделюють фігури."
            ]
          }
        },
        {
          visual: ph(
            "t11-world.jpg",
            "Droga, linijka, promień…",
            "Дорога, лінійка, промінь…",
            "Real world geometry"
          )
        }
      ],
      task: {
        id: "m11-swiat",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co najbardziej przypomina półprostą?",
          ua: "Що найбільше нагадує півпряму?"
        },
        options: [
          { id: "lin", label: { pl: "📏 linijka (odcinek)", ua: "📏 лінійка (відрізок)" } },
          { id: "prom", label: { pl: "🔦 promień latarki", ua: "🔦 промінь ліхтарика" } },
          { id: "nit", label: { pl: "🧵 krótka nitka (odcinek)", ua: "🧵 коротка нитка (відрізок)" } }
        ],
        answer: "prom",
        explanation: {
          pl: "🔦 Promień ma „początek” przy latarke i biegnie dalej — jak półprosta.",
          ua: "🔦 Промінь має «початок» біля ліхтарика і йде далі — як півпряма."
        }
      }
    },

    /* 19 — Płaszczyzna */
    {
      type: "concept",
      heading: {
        pl: "📄 Płaszczyzna",
        ua: "📄 Площина"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Spójrz na kartkę — to tylko **fragment** powierzchni.",
              "Wyobraź sobie, że ta powierzchnia rozciąga się we wszystkich kierunkach **bez końca**."
            ],
            ua: [
              "🦉 Подивись на аркуш — це лише **фрагмент** поверхні.",
              "Уяви, що ця поверхня простягається в усі боки **без кінця**."
            ]
          }
        },
        {
          visual: ph(
            "t11-plane.jpg",
            "Model płaszczyzny",
            "Модель площини",
            "Infinite plane"
          )
        },
        {
          rule: {
            label: { pl: "Ważne!", ua: "Важливо!" },
            lines: {
              pl: "PŁASZCZYZNA = nieograniczona powierzchnia",
              ua: "ПЛОЩИНА = необмежена поверхня"
            },
            text: {
              pl: "Kartka może być modelem fragmentu płaszczyzny — ale sama nie jest całą płaszczyzną.",
              ua: "Аркуш може бути моделлю фрагмента площини — але сам не є всією площиною."
            }
          }
        }
      ]
    },

    /* 20 — Punkty na płaszczyźnie */
    {
      type: "concept",
      heading: {
        pl: "● Punkty na płaszczyźnie",
        ua: "● Точки на площині"
      },
      parts: [
        {
          text: {
            pl: [
              "Na płaszczyźnie **p** leżą punkty A, B, C…",
              "Mówimy: punkt A **leży na** płaszczyźnie p."
            ],
            ua: [
              "На площині **p** лежать точки A, B, C…",
              "Кажемо: точка A **лежить на** площині p."
            ]
          }
        },
        fig("points", { a: "A", b: "B", c: "C", mark: "na płaszczyźnie p" }),
        {
          rule: {
            label: { pl: "🦉 Sowa", ua: "🦉 Сова" },
            text: {
              pl: "Płaszczyzna jest jak ogromna scena — rysujemy na niej punkty i linie.",
              ua: "Площина — як величезна сцена: на ній малюємо точки і лінії."
            }
          }
        }
      ],
      task: {
        id: "m11-na-plaszczyznie",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy prosta, półprosta i odcinek mogą leżeć na płaszczyźnie?",
          ua: "Чи пряма, півпряма і відрізок можуть лежати на площині?"
        },
        answer: true,
        explanation: {
          pl: "TAK — wszystkie te figury rysujemy na płaszczyźnie.",
          ua: "ТАК — усі ці фігури малюємо на площині."
        }
      }
    },

    /* 21 — LOGIKA 3 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: czy to możliwe?",
        ua: "🧠 Логіка 3: чи це можливо?"
      },
      parts: [
        {
          text: {
            pl: [
              "Sprawdź twierdzenie:",
              "„Punkt A jest **końcem** prostej AB.”"
            ],
            ua: [
              "Перевір твердження:",
              "«Точка A є **кінцем** прямої AB.»"
            ]
          }
        },
        fig("prosta", { a: "A", b: "B" })
      ],
      task: {
        id: "m11-logika3",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy punkt A może być końcem prostej AB?",
          ua: "Чи точка A може бути кінцем прямої AB?"
        },
        answer: false,
        explanation: {
          pl: "NIE — prosta nie ma końca. A leży na prostej, ale nie jest jej końcem.",
          ua: "НІ — пряма не має кінця. A лежить на прямій, але не є її кінцем."
        }
      }
    },

    /* 22 — Zbuduj figurę */
    {
      type: "guided-practice",
      heading: {
        pl: "🎮 Zbuduj figurę",
        ua: "🎮 Побудуй фігуру"
      },
      parts: [
        {
          text: {
            pl: "Masz punkty A i B. Wybierz, co zbudować:",
            ua: "Маєш точки A і B. Обери, що побудувати:"
          }
        },
        fig("points", { a: "A", b: "B" })
      ],
      task: {
        id: "m11-buduj",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Chcę figurę z początkiem w A i bez końca — co wybieram?",
          ua: "Хочу фігуру з початком в A і без кінця — що обираю?"
        },
        options: [
          { id: "p", label: { pl: "PROSTA AB", ua: "ПРЯМА AB" } },
          { id: "h", label: { pl: "PÓŁPROSTA AB", ua: "ПІВПРЯМА AB" } },
          { id: "o", label: { pl: "ODCINEK AB", ua: "ВІДРІЗОК AB" } },
          { id: "ba", label: { pl: "PÓŁPROSTA BA", ua: "ПІВПРЯМА BA" } }
        ],
        answer: "h",
        explanation: {
          pl: "Półprosta AB — początek A, potem przez B w nieskończoność.",
          ua: "Півпряма AB — початок A, потім через B у нескінченність."
        }
      }
    },

    /* 23 — Znajdź błąd */
    {
      type: "mistake",
      heading: {
        pl: "🕵️ Znajdź błąd",
        ua: "🕵️ Знайди помилку"
      },
      claim: {
        pl: "Podpis pod rysunkiem: „odcinek AB”",
        ua: "Підпис під малюнком: «відрізок AB»"
      },
      parts: [
        {
          text: {
            pl: "Spójrz na rysunek:",
            ua: "Подивись на малюнок:"
          }
        },
        fig("polprosta", { a: "A", b: "B", mark: "???" })
      ],
      task: {
        id: "m11-blad",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Czy podpis „odcinek AB” jest poprawny?",
          ua: "Чи підпис «відрізок AB» правильний?"
        },
        options: [
          { id: "tak", label: { pl: "TAK", ua: "ТАК" } },
          { id: "nie", label: { pl: "NIE — to półprosta AB", ua: "НІ — це півпряма AB" } }
        ],
        answer: "nie",
        explanation: {
          pl: "NIE. Jest początek i strzałka → **półprosta AB**, nie odcinek.",
          ua: "НІ. Є початок і стрілка → **півпряма AB**, не відрізок."
        }
      }
    },

    /* 24–26 — Misja detektywa */
    {
      type: "check",
      heading: {
        pl: "🏆 Geometryczny detektyw (1/3)",
        ua: "🏆 Геометричний детектив (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Która figura **nie ma** początku ani końca?",
            ua: "Яка фігура **не має** ні початку, ні кінця?"
          }
        }
      ],
      task: {
        id: "m11-fin1",
        type: "single-choice",
        level: "A",
        question: { pl: "Wybierz:", ua: "Обери:" },
        options: [
          { id: "p", label: { pl: "prosta", ua: "пряма" } },
          { id: "h", label: { pl: "półprosta", ua: "півпряма" } },
          { id: "o", label: { pl: "odcinek", ua: "відрізок" } }
        ],
        answer: "p",
        explanation: { pl: "Prosta ←——→", ua: "Пряма ←——→" }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Geometryczny detektyw (2/3)",
        ua: "🏆 Геометричний детектив (2/3)"
      },
      parts: [
        fig("polprosta", { a: "A", b: "B" })
      ],
      task: {
        id: "m11-fin2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak nazywa się ta figura?",
          ua: "Як називається ця фігура?"
        },
        options: [
          { id: "p", label: { pl: "prosta AB", ua: "пряма AB" } },
          { id: "h", label: { pl: "półprosta AB", ua: "півпряма AB" } },
          { id: "o", label: { pl: "odcinek AB", ua: "відрізок AB" } }
        ],
        answer: "h",
        explanation: {
          pl: "Półprosta AB — początek A, strzałka dalej.",
          ua: "Півпряма AB — початок A, стрілка далі."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Geometryczny detektyw (3/3)",
        ua: "🏆 Геометричний детектив (3/3)"
      },
      parts: [
        fig("odcinek", { a: "A", b: "B" })
      ],
      task: {
        id: "m11-fin3",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak nazywa się ta figura?",
          ua: "Як називається ця фігура?"
        },
        options: [
          { id: "p", label: { pl: "prosta AB", ua: "пряма AB" } },
          { id: "h", label: { pl: "półprosta AB", ua: "півпряма AB" } },
          { id: "o", label: { pl: "odcinek AB", ua: "відрізок AB" } }
        ],
        answer: "o",
        explanation: {
          pl: "Odcinek AB — dwa końce.",
          ua: "Відрізок AB — два кінці."
        }
      }
    },

    /* 27 — Ostatnie odkrycie */
    {
      type: "summary",
      heading: {
        pl: "🎉 Ostatnie odkrycie",
        ua: "🎉 Останнє відкриття"
      },
      parts: [
        {
          text: {
            pl: [
              "🌌 **Płaszczyzna** — wielka scena.",
              "Na niej: prosta, półprosta, odcinek."
            ],
            ua: [
              "🌌 **Площина** — велика сцена.",
              "На ній: пряма, півпряма, відрізок."
            ]
          }
        },
        {
          visual: ph(
            "t11-summary.jpg",
            "Mapa figur",
            "Мапа фігур",
            "Figures summary"
          )
        },
        {
          rule: {
            label: { pl: "Mini-ściąga", ua: "Міні-шпаргалка" },
            lines: {
              pl: "prosta ←→ · półprosta ●→ · odcinek ●─●",
              ua: "пряма ←→ · півпряма ●→ · відрізок ●─●"
            },
            text: {
              pl: "Płaszczyzna = nieograniczona powierzchnia (kartka = tylko model fragmentu).",
              ua: "Площина = необмежена поверхня (аркуш = лише модель фрагмента)."
            }
          }
        }
      ]
    },

    /* 28 — Vocabulary */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka geometrii",
        ua: "📚 Слова геометрії"
      },
      rows: [
        { pl: "płaszczyzna", ua: "площина" },
        { pl: "punkt", ua: "точка" },
        { pl: "prosta", ua: "пряма" },
        { pl: "półprosta", ua: "півпряма / промінь" },
        { pl: "odcinek", ua: "відрізок" },
        { pl: "początek / koniec", ua: "початок / кінець" }
      ],
      phrases: [
        {
          pl: "Wskaż prostą, półprostą i odcinek.",
          ua: "Вкажи пряму, півпряму і відрізок."
        },
        {
          pl: "Gdzie jest początek półprostej AB?",
          ua: "Де початок півпрямої AB?"
        }
      ]
    },

    /* 29 — Zakończenie */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови"
      },
      text: {
        pl: [
          "Dzisiaj nie nauczyłeś się tylko kilku nowych słów.",
          "Nauczyłeś się patrzeć na świat jak matematyk.",
          "Droga może przypominać odcinek. Promień światła — półprostą.",
          "A kartka może być modelem fragmentu płaszczyzny.",
          "Teraz potrafisz zobaczyć geometrię prawie wszędzie. 🔎"
        ],
        ua: [
          "Сьогодні ти навчився не лише кількох нових слів.",
          "Ти навчився дивитися на світ як математик.",
          "Дорога може нагадувати відрізок. Промінь світла — півпряму.",
          "А аркуш може бути моделлю фрагмента площини.",
          "Тепер ти вмієш бачити геометрію майже всюди. 🔎"
        ]
      }
    }
  ]
};
