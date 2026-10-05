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

/**
 * Angle figure SVG.
 * kinds: acute | right | obtuse | straight | full | parts | half-line | two-rays
 */
function ang(kind, opt) {
  opt = opt || {};
  var mark = opt.mark || "";
  var showDeg = opt.deg != null;
  var svg = "";
  var W = 440;
  var H = 180;

  function ray(x1, y1, x2, y2, color) {
    color = color || "#1c1917";
    return (
      '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 +
      '" stroke="' + color + '" stroke-width="3" stroke-linecap="round"/>'
    );
  }
  function arrow(x, y, dx, dy, color) {
    color = color || "#1c1917";
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len;
    var uy = dy / len;
    var px = -uy;
    var py = ux;
    var bx = x - ux * 14;
    var by = y - uy * 14;
    return (
      '<polygon points="' +
      x + "," + y + " " +
      (bx + px * 6) + "," + (by + py * 6) + " " +
      (bx - px * 6) + "," + (by - py * 6) +
      '" fill="' + color + '"/>'
    );
  }
  function dot(x, y, label, ly) {
    return (
      '<circle cx="' + x + '" cy="' + y + '" r="8" fill="#0f766e"/>' +
      (label
        ? '<text x="' + x + '" y="' + (ly || y + 28) +
          '" text-anchor="middle" font-size="18" font-weight="700" fill="#0f766e">' +
          esc(label) +
          "</text>"
        : "")
    );
  }

  if (kind === "half-line") {
    svg =
      ray(80, 90, 380, 90) +
      arrow(380, 90, 1, 0) +
      dot(80, 90, "A");
  } else if (kind === "two-rays") {
    svg =
      ray(220, 140, 380, 140, "#0f766e") +
      arrow(380, 140, 1, 0, "#0f766e") +
      ray(220, 140, 320, 40, "#b45309") +
      arrow(320, 40, 1, -1, "#b45309") +
      '<path d="M 280 140 A 60 60 0 0 0 268 92" fill="none" stroke="#fbbf24" stroke-width="10" opacity="0.55"/>' +
      dot(220, 140, "A");
  } else if (kind === "parts") {
    svg =
      ray(220, 140, 380, 140, "#0f766e") +
      arrow(380, 140, 1, 0, "#0f766e") +
      ray(220, 140, 320, 40, "#0f766e") +
      arrow(320, 40, 1, -1, "#0f766e") +
      '<path d="M 280 140 A 60 60 0 0 0 268 92" fill="#fde68a" stroke="#f59e0b" stroke-width="2" opacity="0.7"/>' +
      dot(220, 140, "A") +
      '<text x="340" y="50" font-size="16" font-weight="700" fill="#0f766e">B</text>' +
      '<text x="400" y="165" font-size="16" font-weight="700" fill="#0f766e">C</text>' +
      '<text x="255" y="118" font-size="13" fill="#b45309">wnętrze</text>';
  } else if (kind === "acute") {
    svg =
      ray(120, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(120, 140, 260, 50) +
      arrow(260, 50, 1, -0.7) +
      '<path d="M 180 140 A 60 60 0 0 0 168 98" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>' +
      (opt.square
        ? ""
        : "") +
      dot(120, 140, opt.v || "A") +
      (showDeg
        ? '<text x="190" y="120" font-size="16" fill="#b45309">' + opt.deg + "°</text>"
        : "");
  } else if (kind === "right") {
    svg =
      ray(120, 140, 360, 140) +
      arrow(360, 140, 1, 0) +
      ray(120, 140, 120, 30) +
      arrow(120, 30, 0, -1) +
      '<rect x="120" y="116" width="24" height="24" fill="none" stroke="#0f766e" stroke-width="2.5"/>' +
      dot(120, 140, opt.v || "A") +
      (showDeg
        ? '<text x="160" y="100" font-size="16" fill="#b45309">90°</text>'
        : "");
  } else if (kind === "obtuse") {
    svg =
      ray(140, 140, 380, 140) +
      arrow(380, 140, 1, 0) +
      ray(140, 140, 80, 50) +
      arrow(80, 50, -0.6, -1) +
      '<path d="M 200 140 A 60 60 0 0 0 112 92" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>' +
      dot(140, 140, opt.v || "A");
  } else if (kind === "straight") {
    svg =
      ray(40, 90, 400, 90) +
      arrow(40, 90, -1, 0) +
      arrow(400, 90, 1, 0) +
      dot(220, 90, opt.v || "A", 120) +
      (showDeg
        ? '<text x="220" y="70" text-anchor="middle" font-size="16" fill="#b45309">180°</text>'
        : "");
  } else if (kind === "full") {
    svg =
      '<circle cx="220" cy="90" r="55" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/>' +
      ray(220, 90, 360, 90, "#7c3aed") +
      arrow(360, 90, 1, 0, "#7c3aed") +
      ray(220, 90, 360, 90, "#0f766e") +
      dot(220, 90, opt.v || "A", 130) +
      (showDeg
        ? '<text x="220" y="50" text-anchor="middle" font-size="16" fill="#7c3aed">360°</text>'
        : "");
  } else if (kind === "compare") {
    H = 170;
    svg =
      /* ostry */
      ray(40, 110, 120, 110, "#dc2626") +
      ray(40, 110, 90, 50, "#dc2626") +
      '<text x="70" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">ostry</text>' +
      /* prosty */
      ray(160, 110, 240, 110, "#0f766e") +
      ray(160, 110, 160, 40, "#0f766e") +
      '<rect x="160" y="90" width="16" height="16" fill="none" stroke="#0f766e" stroke-width="2"/>' +
      '<text x="190" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="#0f766e">prosty</text>' +
      /* rozwarty */
      ray(280, 110, 400, 110, "#ea580c") +
      ray(280, 110, 250, 45, "#ea580c") +
      '<text x="330" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">rozwarty</text>';
  }

  if (mark) {
    svg +=
      '<text x="' +
      W / 2 +
      '" y="' +
      (H - 8) +
      '" text-anchor="middle" font-size="14" fill="#78716c">' +
      esc(mark) +
      "</text>";
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
    /* 1 — Wejście */
    {
      type: "intro",
      heading: {
        pl: "📐 Kąty wokół nas",
        ua: "📐 Кути навколо нас"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Popatrz uważnie! Co łączy te wszystkie rzeczy?",
              "Drzwi, nożyczki, zegar, dach, książka, róg stołu…"
            ],
            ua: [
              "🦉 Подивись уважно! Що спільне в усіх цих речах?",
              "Двері, ножиці, годинник, дах, книжка, кут столу…"
            ]
          }
        },
        {
          visual: ph(
            "t12-world.jpg",
            "Kąty wokół nas",
            "Кути навколо нас",
            "Angles in everyday life"
          )
        },
        {
          text: {
            pl: "🔎 Odkryj kąt — zaczynamy!",
            ua: "🔎 Відкрий кут — починаємо!"
          }
        }
      ],
      task: {
        id: "m12-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "Zaczynamy misję kątów?",
          ua: "Починаємо місію кутів?"
        },
        answer: true,
        explanation: {
          pl: "🚀 Start! Przypomnij sobie półprostą z lekcji 11.",
          ua: "🚀 Старт! Пригадай півпряму з уроку 11."
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
          pl: "powiedzieć, czym jest kąt (dwie półproste ze wspólnym początkiem)",
          ua: "сказати, що таке кут (дві півпрямі зі спільним початком)"
        },
        {
          pl: "wskazać wierzchołek, ramiona i wnętrze kąta",
          ua: "вказати вершину, сторони і внутрішню область кута"
        },
        {
          pl: "rozpoznać: ostry, prosty, rozwarty, półpełny, pełny",
          ua: "розпізнати: гострий, прямий, тупий, розгорнутий, повний"
        },
        {
          pl: "porównać kąt z kątem prostym — bez mierzenia",
          ua: "порівняти кут із прямим — без вимірювання"
        }
      ]
    },

    /* 3 — Most z lekcji 11 */
    {
      type: "concept",
      heading: {
        pl: "💡 Z półprostej do kąta",
        ua: "💡 Від півпрямої до кута"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Pamiętasz **półprostą** z lekcji 11?",
              "Dziś z **dwóch** półprostych zbudujemy nową figurę!"
            ],
            ua: [
              "🦉 Пам’ятаєш **півпряму** з уроку 11?",
              "Сьогодні з **двох** півпрямих збудуємо нову фігуру!"
            ]
          }
        },
        ang("half-line", { mark: "półprosta" }),
        {
          text: {
            pl: "Dodajemy drugą półprostę ze **wspólnym początkiem**…",
            ua: "Додаємо другу півпряму зі **спільним початком**…"
          }
        },
        ang("two-rays", { mark: "dwie półproste → kąt" })
      ]
    },

    /* 4 — Co to jest kąt */
    {
      type: "observe",
      heading: {
        pl: "✨ Co to jest kąt?",
        ua: "✨ Що таке кут?"
      },
      parts: [
        {
          text: {
            pl: [
              "Dwie półproste spotkały się w jednym punkcie.",
              "Między nimi jest przestrzeń — i powstał **kąt**."
            ],
            ua: [
              "Дві півпрямі зустрілись в одній точці.",
              "Між ними є простір — і утворився **кут**."
            ]
          }
        },
        ang("two-rays"),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Kąt tworzą dwie półproste o wspólnym początku.",
              ua: "Кут утворюють дві півпрямі зі спільним початком."
            }
          }
        }
      ]
    },

    /* 5 — Części kąta */
    {
      type: "concept",
      heading: {
        pl: "🧩 Z czego składa się kąt?",
        ua: "🧩 З чого складається кут?"
      },
      parts: [
        {
          text: {
            pl: "Trzy ważne części:",
            ua: "Три важливі частини:"
          }
        },
        ang("parts"),
        {
          items: [
            {
              pl: ["🔵 **A** — wierzchołek (wspólny początek)"],
              ua: ["🔵 **A** — вершина (спільний початок)"]
            },
            {
              pl: ["🟢 **AB** i **AC** — ramiona (dwie półproste)"],
              ua: ["🟢 **AB** і **AC** — сторони (дві півпрямі)"]
            },
            {
              pl: ["🟡 przestrzeń pomiędzy — **wnętrze kąta**"],
              ua: ["🟡 простір між ними — **внутрішня область кута**"]
            }
          ]
        }
      ]
    },

    /* 6 — Znajdź wierzchołek */
    {
      type: "practice",
      heading: {
        pl: "🔎 Znajdź wierzchołek!",
        ua: "🔎 Знайди вершину!"
      },
      parts: [
        {
          text: {
            pl: "Gdzie jest wspólny początek obu półprostych?",
            ua: "Де спільний початок обох півпрямих?"
          }
        },
        ang("acute", { v: "?" })
      ],
      task: {
        id: "m12-wierzcholek",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który punkt to wierzchołek?",
          ua: "Яка точка — вершина?"
        },
        options: [
          { id: "ramie", label: { pl: "punkt na górnym ramieniu", ua: "точка на верхній стороні" } },
          { id: "srodek", label: { pl: "wspólny początek obu ramion", ua: "спільний початок обох сторін" } },
          { id: "dol", label: { pl: "punkt na dolnym ramieniu", ua: "точка на нижній стороні" } }
        ],
        answer: "srodek",
        explanation: {
          pl: "🎉 Tak! Wierzchołek = wspólny początek obu półprostych.",
          ua: "🎉 Так! Вершина = спільний початок обох півпрямих."
        }
      }
    },

    /* 7 — Ramiona */
    {
      type: "practice",
      heading: {
        pl: "➡️ Gdzie są ramiona?",
        ua: "➡️ Де сторони?"
      },
      parts: [
        {
          text: {
            pl: "Które elementy to **ramiona** kąta?",
            ua: "Які елементи — **сторони** кута?"
          }
        },
        ang("parts")
      ],
      task: {
        id: "m12-ramiona",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ramiona kąta to:",
          ua: "Сторони кута — це:"
        },
        options: [
          { id: "p", label: { pl: "tylko wierzchołek", ua: "лише вершина" } },
          { id: "r", label: { pl: "dwie półproste", ua: "дві півпрямі" } },
          { id: "w", label: { pl: "tylko wnętrze kąta", ua: "лише внутрішня область" } }
        ],
        answer: "r",
        explanation: {
          pl: "Ramiona = dwie półproste tworzące kąt.",
          ua: "Сторони = дві півпрямі, що утворюють кут."
        }
      }
    },

    /* 8 — LOGIKA 1 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: czy to kąt?",
        ua: "🧠 Логіка 1: чи це кут?"
      },
      parts: [
        {
          text: {
            pl: [
              "Znajdź rysunek, na którym **dwie półproste mają wspólny początek**.",
              "**A** — jedna prosta (←——●——→)",
              "**B** — dwie półproste ze wspólnym początkiem",
              "**C** — trzy oddzielne kreski bez wspólnego punktu"
            ],
            ua: [
              "Знайди малюнок, де **дві півпрямі мають спільний початок**.",
              "**A** — одна пряма (←——●——→)",
              "**B** — дві півпрямі зі спільним початком",
              "**C** — три окремі риски без спільної точки"
            ]
          }
        },
        ang("two-rays", { mark: "przykład B" })
      ],
      task: {
        id: "m12-logika1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "W którym rysunku widzisz kąt?",
          ua: "На якому малюнку бачиш кут?"
        },
        options: [
          { id: "a", label: { pl: "A", ua: "A" } },
          { id: "b", label: { pl: "B", ua: "B" } },
          { id: "c", label: { pl: "C", ua: "C" } }
        ],
        answer: "b",
        explanation: {
          pl: "B! Wspólny początek dwóch półprostych = kąt.",
          ua: "B! Спільний початок двох півпрямих = кут."
        }
      }
    },

    /* 9 — Rodzaje intro */
    {
      type: "observe",
      heading: {
        pl: "🚪 Nie wszystkie kąty są takie same",
        ua: "🚪 Не всі кути однакові"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Drzwi mogą być prawie zamknięte… albo szeroko otwarte.",
              "Kąty też bywają różne!"
            ],
            ua: [
              "🦉 Двері можуть бути майже зачинені… або широко відчинені.",
              "Кути теж бувають різні!"
            ]
          }
        },
        {
          visual: ph(
            "t12-types.jpg",
            "Rodzaje kątów",
            "Види кутів",
            "Angle types strip"
          )
        },
        {
          text: {
            pl: "Najpierw poznamy **wzorzec** — kąt prosty.",
            ua: "Спочатку пізнаємо **еталон** — прямий кут."
          }
        }
      ]
    },

    /* 10 — Kąt prosty = wzorzec */
    {
      type: "concept",
      heading: {
        pl: "📐 Kąt prosty — nasz wzorzec",
        ua: "📐 Прямий кут — наш еталон"
      },
      parts: [
        {
          text: {
            pl: [
              "To najważniejszy kąt w dzisiejszej lekcji.",
              "Od teraz kąt prosty będzie naszym **matematycznym wzorcem**."
            ],
            ua: [
              "Це найважливіший кут у сьогоднішньому уроці.",
              "Відтепер прямий кут буде нашим **математичним еталоном**."
            ]
          }
        },
        ang("right", { deg: 90 }),
        {
          visual: ph(
            "t12-right.jpg",
            "Kąt prosty wokół nas",
            "Прямий кут навколо нас",
            "Right angle standard"
          )
        },
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "KĄT PROSTY = 90° (znak □ przy wierzchołku)",
              ua: "ПРЯМИЙ КУТ = 90° (знак □ біля вершини)"
            },
            text: {
              pl: "Najpierw porównuj z prostym — liczby przyjdą potem.",
              ua: "Спочатку порівнюй із прямим — числа прийдуть потім."
            }
          }
        }
      ]
    },

    /* 11 — Skąd znamy prosty */
    {
      type: "practice",
      heading: {
        pl: "🔍 Skąd znamy kąt prosty?",
        ua: "🔍 Звідки знаємо прямий кут?"
      },
      parts: [
        {
          text: {
            pl: "Co mają wspólnego: róg zeszytu, kartki, okna, stołu?",
            ua: "Що спільне: кут зошита, аркуша, вікна, столу?"
          }
        }
      ],
      task: {
        id: "m12-prosty-wspolne",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Tworzą:",
          ua: "Утворюють:"
        },
        options: [
          { id: "o", label: { pl: "kąt ostry", ua: "гострий кут" } },
          { id: "p", label: { pl: "kąt prosty", ua: "прямий кут" } },
          { id: "r", label: { pl: "kąt rozwarty", ua: "тупий кут" } }
        ],
        answer: "p",
        explanation: {
          pl: "🟦 Kąt prosty — nasz wzorzec z życia!",
          ua: "🟦 Прямий кут — наш еталон із життя!"
        }
      }
    },

    /* 12 — Ostry */
    {
      type: "concept",
      heading: {
        pl: "🔺 Kąt ostry",
        ua: "🔺 Гострий кут"
      },
      parts: [
        {
          text: {
            pl: "🦉 A jeśli kąt jest **mniejszy** od kąta prostego?",
            ua: "🦉 А якщо кут **менший** за прямий?"
          }
        },
        ang("acute"),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            lines: {
              pl: "KĄT OSTRY < kąt prosty  (< 90°)",
              ua: "ГОСТРИЙ КУТ < прямий кут  (< 90°)"
            },
            text: {
              pl: "Najpierw porównaj z prostym — potem myśl o stopniach.",
              ua: "Спочатку порівняй із прямим — потім думай про градуси."
            }
          }
        }
      ]
    },

    /* 13 — Ostry czy nie */
    {
      type: "practice",
      heading: {
        pl: "🔎 Ostry czy nie?",
        ua: "🔎 Гострий чи ні?"
      },
      parts: [
        {
          text: {
            pl: "Porównaj z kątem prostym. Który kąt jest **ostry**?",
            ua: "Порівняй із прямим кутом. Який кут **гострий**?"
          }
        },
        ang("compare")
      ],
      task: {
        id: "m12-ostry-wybor",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kąt ostry to ten, który jest:",
          ua: "Гострий кут — той, що:"
        },
        options: [
          { id: "m", label: { pl: "mniejszy niż prosty", ua: "менший за прямий" } },
          { id: "r", label: { pl: "równy prostemu", ua: "рівний прямому" } },
          { id: "w", label: { pl: "większy niż prosty", ua: "більший за прямий" } }
        ],
        answer: "m",
        explanation: {
          pl: "Ostry = mniejszy niż prosty.",
          ua: "Гострий = менший за прямий."
        }
      }
    },

    /* 14 — Rozwarty */
    {
      type: "concept",
      heading: {
        pl: "🟠 Kąt rozwarty",
        ua: "🟠 Тупий кут"
      },
      parts: [
        {
          text: {
            pl: "🦉 A jeśli kąt jest **większy** od prostego — ale jeszcze nie „płaski”?",
            ua: "🦉 А якщо кут **більший** за прямий — але ще не «плоский»?"
          }
        },
        ang("obtuse"),
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "PROSTY < ROZWARTY < PÓŁPEŁNY",
              ua: "ПРЯМИЙ < ТУПИЙ < РОЗГОРНУТИЙ"
            },
            text: {
              pl: "Czyli: większy niż 90°, mniejszy niż 180°.",
              ua: "Тобто: більший за 90°, менший за 180°."
            }
          }
        },
        ang("compare")
      ]
    },

    /* 15 — Buźki */
    {
      type: "observe",
      heading: {
        pl: "😄 Kąt coraz większy",
        ua: "😄 Кут дедалі більший"
      },
      parts: [
        {
          text: {
            pl: "Trzy „miny” kątów — od prawie zamkniętego do szeroko otwartego:",
            ua: "Три «міміки» кутів — від майже закритого до широко відкритого:"
          }
        },
        {
          visual: ph(
            "t12-faces.jpg",
            "Ostry → prosty → rozwarty",
            "Гострий → прямий → тупий",
            "Angle faces"
          )
        }
      ]
    },

    /* 16 — LOGIKA 2 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: kto kłamie?",
        ua: "🧠 Логіка 2: хто бреше?"
      },
      parts: [
        {
          text: {
            pl: [
              "🔺 Trójkąt: „Mój kąt jest mniejszy od prostego — jestem ostry.”",
              "🟦 Kwadrat: „Mój kąt jest **większy** od prostego.”",
              "🟠 Pomarańcza: „Jestem większa od prostego, ale mniejsza od półpełnego.”"
            ],
            ua: [
              "🔺 Трикутник: «Мій кут менший за прямий — я гострий.»",
              "🟦 Квадрат: «Мій кут **більший** за прямий.»",
              "🟠 Апельсин: «Я більший за прямий, але менший за розгорнутий.»"
            ]
          }
        }
      ],
      task: {
        id: "m12-logika2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Kto powiedział coś nieprawdziwego?",
          ua: "Хто сказав щось неправильне?"
        },
        options: [
          { id: "t", label: { pl: "🔺 Trójkąt", ua: "🔺 Трикутник" } },
          { id: "k", label: { pl: "🟦 Kwadrat", ua: "🟦 Квадрат" } },
          { id: "p", label: { pl: "🟠 Pomarańcza", ua: "🟠 Апельсин" } }
        ],
        answer: "k",
        explanation: {
          pl: "🟦 Kwadrat kłamie! Jego kąt jest **prosty** (= 90°), nie większy.",
          ua: "🟦 Квадрат бреше! Його кут **прямий** (= 90°), не більший."
        }
      }
    },

    /* 17 — Półpełny */
    {
      type: "concept",
      heading: {
        pl: "➖ Kąt półpełny",
        ua: "➖ Розгорнутий кут"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Ramiona ustawiły się w **jednej prostej**.",
              "To kąt półpełny."
            ],
            ua: [
              "🦉 Сторони вишикувались в **одну пряму**.",
              "Це розгорнутий кут."
            ]
          }
        },
        ang("straight", { deg: 180 }),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            lines: {
              pl: "KĄT PÓŁPEŁNY = 180°",
              ua: "РОЗГОРНУТИЙ КУТ = 180°"
            },
            text: {
              pl: "Dwie przeciwne półproste o wspólnym początku.",
              ua: "Дві протилежні півпрямі зі спільним початком."
            }
          }
        }
      ],
      task: {
        id: "m12-polpelny-q",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy przy kącie półpełnym nadal mamy dwie półproste?",
          ua: "Чи при розгорнутому куті все ще маємо дві півпрямі?"
        },
        answer: true,
        explanation: {
          pl: "TAK! Wspólny początek, ramiona w jednej prostej — to nadal kąt.",
          ua: "ТАК! Спільний початок, сторони в одній прямій — це все ще кут."
        }
      }
    },

    /* 18 — Pełny */
    {
      type: "concept",
      heading: {
        pl: "🟣 Kąt pełny",
        ua: "🟣 Повний кут"
      },
      parts: [
        {
          text: {
            pl: [
              "Ramiona mogą obejść pełne koło i **pokryć się**.",
              "To kąt pełny — jak pełny obrót."
            ],
            ua: [
              "Сторони можуть обійти повне коло і **збігтися**.",
              "Це повний кут — як повний оберт."
            ]
          }
        },
        ang("full", { deg: 360 }),
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "KĄT PEŁNY = 360°",
              ua: "ПОВНИЙ КУТ = 360°"
            },
            text: {
              pl: "Ramiona pokrywają się po pełnym obrocie.",
              ua: "Сторони збігаються після повного оберту."
            }
          }
        }
      ]
    },

    /* 19 — Tabela / skala */
    {
      type: "concept",
      heading: {
        pl: "📊 Mapa rodzajów kątów",
        ua: "📊 Мапа видів кутів"
      },
      parts: [
        {
          text: {
            pl: "Cała rodzina — porównuj z **kątem prostym**:",
            ua: "Уся родина — порівнюй із **прямим кутом**:"
          }
        },
        {
          visual: ph(
            "t12-types.jpg",
            "Skala kątów",
            "Шкала кутів",
            "Angle scale"
          )
        },
        {
          items: [
            {
              pl: ["🔺 **ostry** — mniejszy niż prosty"],
              ua: ["🔺 **гострий** — менший за прямий"]
            },
            {
              pl: ["🟦 **prosty** — 90° (wzorzec!)"],
              ua: ["🟦 **прямий** — 90° (еталон!)"]
            },
            {
              pl: ["🟠 **rozwarty** — większy niż prosty, mniejszy niż półpełny"],
              ua: ["🟠 **тупий** — більший за прямий, менший за розгорнутий"]
            },
            {
              pl: ["➖ **półpełny** — 180°"],
              ua: ["➖ **розгорнутий** — 180°"]
            },
            {
              pl: ["🟣 **pełny** — 360°"],
              ua: ["🟣 **повний** — 360°"]
            }
          ]
        }
      ]
    },

    /* 20 — Sortuj (bez drag — wybór) */
    {
      type: "practice",
      heading: {
        pl: "🎮 Do którego „domku”?",
        ua: "🎮 До якого «будиночка»?"
      },
      parts: [
        {
          text: {
            pl: "Ten kąt jest większy od prostego, ale mniejszy od półpełnego:",
            ua: "Цей кут більший за прямий, але менший за розгорнутий:"
          }
        },
        ang("obtuse")
      ],
      task: {
        id: "m12-domek",
        type: "single-choice",
        level: "B",
        question: {
          pl: "W którym domku mieszka?",
          ua: "У якому будиночку живе?"
        },
        options: [
          { id: "o", label: { pl: "🏠 OSTRE", ua: "🏠 ГОСТРІ" } },
          { id: "p", label: { pl: "🏠 PROSTE", ua: "🏠 ПРЯМІ" } },
          { id: "r", label: { pl: "🏠 ROZWARTE", ua: "🏠 ТУПІ" } },
          { id: "h", label: { pl: "🏠 PÓŁPEŁNE", ua: "🏠 РОЗГОРНУТІ" } }
        ],
        answer: "r",
        explanation: {
          pl: "🏠 ROZWARTE — porównaj z kątem prostym!",
          ua: "🏠 ТУПІ — порівняй із прямим кутом!"
        }
      }
    },

    /* 21 — Bez mierzenia */
    {
      type: "practice",
      heading: {
        pl: "👁️ Bez kątomierza!",
        ua: "👁️ Без транспортира!"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie używaj stopni — tylko patrz.",
              "Porównaj z kątem prostym."
            ],
            ua: [
              "Не використовуй градуси — лише дивись.",
              "Порівняй із прямим кутом."
            ]
          }
        },
        ang("right")
      ],
      task: {
        id: "m12-bez-mierzenia",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jaki to kąt?",
          ua: "Який це кут?"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } },
          { id: "h", label: { pl: "półpełny", ua: "розгорнутий" } }
        ],
        answer: "p",
        explanation: {
          pl: "Prosty — widać znak □ i ramiona jak róg kartki.",
          ua: "Прямий — видно знак □ і сторони як кут аркуша."
        }
      }
    },

    /* 22 — LOGIKA 3 / znajdź błąd */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 3: znajdź błąd",
        ua: "🧠 Логіка 3: знайди помилку"
      },
      parts: [
        {
          text: {
            pl: "Ktoś podpisał ten rysunek: **„kąt prosty”**.",
            ua: "Хтось підписав цей малюнок: **«прямий кут»**."
          }
        },
        ang("acute", { mark: "podpis: „kąt prosty” ???" })
      ],
      task: {
        id: "m12-logika3",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Czy podpis jest poprawny?",
          ua: "Чи підпис правильний?"
        },
        options: [
          { id: "tak", label: { pl: "TAK", ua: "ТАК" } },
          {
            id: "nie",
            label: {
              pl: "NIE — to kąt ostry (mniejszy niż prosty)",
              ua: "НІ — це гострий кут (менший за прямий)"
            }
          }
        ],
        answer: "nie",
        explanation: {
          pl: "Błąd! Ten kąt jest **ostry** — mniejszy od wzorca prostego.",
          ua: "Помилка! Цей кут **гострий** — менший за еталон прямого."
        }
      }
    },

    /* 23 — Zegar */
    {
      type: "practice",
      heading: {
        pl: "🕐 Zegar i kąty",
        ua: "🕐 Годинник і кути"
      },
      parts: [
        {
          text: {
            pl: [
              "Wskazówki o **3:00** — jak na plusie.",
              "Jaki kąt tworzą?"
            ],
            ua: [
              "Стрілки о **3:00** — як на плюсі.",
              "Який кут утворюють?"
            ]
          }
        },
        {
          visual: ph(
            "t12-clock.jpg",
            "Zegar 3:00",
            "Годинник 3:00",
            "Clock at 3:00 right angle"
          )
        },
        ang("right", { deg: 90, mark: "kąt prosty — jak 3:00" })
      ],
      task: {
        id: "m12-zegar",
        type: "single-choice",
        level: "B",
        question: {
          pl: "3:00 → jaki kąt?",
          ua: "3:00 → який кут?"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } },
          { id: "h", label: { pl: "półpełny", ua: "розгорнутий" } }
        ],
        answer: "p",
        explanation: {
          pl: "3:00 = kąt prosty. 6:00 = półpełny. 1:00 = ostry.",
          ua: "3:00 = прямий. 6:00 = розгорнутий. 1:00 = гострий."
        }
      }
    },

    /* 24 — Misja 1 */
    {
      type: "check",
      heading: {
        pl: "🏆 Łowca kątów (1/3)",
        ua: "🏆 Мисливець за кутами (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Wskaż wierzchołek — wspólny początek ramion.",
            ua: "Вкажи вершину — спільний початок сторін."
          }
        },
        ang("obtuse", { v: "A" })
      ],
      task: {
        id: "m12-fin1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wierzchołek to punkt:",
          ua: "Вершина — це точка:"
        },
        options: [
          { id: "a", label: { pl: "A", ua: "A" } },
          { id: "b", label: { pl: "dowolny punkt na ramieniu", ua: "будь-яка точка на стороні" } }
        ],
        answer: "a",
        explanation: { pl: "A — wierzchołek.", ua: "A — вершина." }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Łowca kątów (2/3)",
        ua: "🏆 Мисливець за кутами (2/3)"
      },
      parts: [ang("acute")],
      task: {
        id: "m12-fin2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jaki to rodzaj kąta?",
          ua: "Який це вид кута?"
        },
        options: [
          { id: "o", label: { pl: "ostry", ua: "гострий" } },
          { id: "p", label: { pl: "prosty", ua: "прямий" } },
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "o",
        explanation: {
          pl: "Ostry — mniejszy niż prosty.",
          ua: "Гострий — менший за прямий."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Łowca kątów (3/3)",
        ua: "🏆 Мисливець за кутами (3/3)"
      },
      parts: [ang("straight")],
      task: {
        id: "m12-fin3",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jaki to rodzaj kąta?",
          ua: "Який це вид кута?"
        },
        options: [
          { id: "r", label: { pl: "rozwarty", ua: "тупий" } },
          { id: "h", label: { pl: "półpełny", ua: "розгорнутий" } },
          { id: "f", label: { pl: "pełny", ua: "повний" } }
        ],
        answer: "h",
        explanation: {
          pl: "Półpełny — ramiona w jednej prostej (180°).",
          ua: "Розгорнутий — сторони в одній прямій (180°)."
        }
      }
    },

    /* 27 — Ściąga */
    {
      type: "summary",
      heading: {
        pl: "🔐 Jak rozpoznać kąt?",
        ua: "🔐 Як розпізнати кут?"
      },
      parts: [
        {
          text: {
            pl: [
              "1. Znajdź **wierzchołek**.",
              "2. Znajdź **dwa ramiona**.",
              "3. Porównaj z **kątem prostym**."
            ],
            ua: [
              "1. Знайди **вершину**.",
              "2. Знайди **дві сторони**.",
              "3. Порівняй із **прямим кутом**."
            ]
          }
        },
        {
          rule: {
            label: { pl: "Mini-ściąga", ua: "Міні-шпаргалка" },
            lines: {
              pl: "mniejszy → OSTRY · równy → PROSTY · większy → ROZWARTY",
              ua: "менший → ГОСТРИЙ · рівний → ПРЯМИЙ · більший → ТУПИЙ"
            },
            text: {
              pl: "prosta → PÓŁPEŁNY · pełne koło → PEŁNY",
              ua: "пряма → РОЗГОРНУТИЙ · повне коло → ПОВНИЙ"
            }
          }
        },
        {
          visual: ph(
            "t12-summary.svg",
            "Mapa kąta po polsku",
            "Мапа кута польською",
            "Polish angle summary"
          )
        }
      ]
    },

    /* 28 — Vocabulary */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka kątów",
        ua: "📚 Слова кутів"
      },
      rows: [
        { pl: "kąt", ua: "кут" },
        { pl: "wierzchołek", ua: "вершина" },
        { pl: "ramiona kąta", ua: "сторони кута" },
        { pl: "wnętrze kąta", ua: "внутрішня область кута" },
        { pl: "kąt ostry / prosty / rozwarty", ua: "гострий / прямий / тупий кут" },
        { pl: "kąt półpełny / pełny", ua: "розгорнутий / повний кут" }
      ],
      phrases: [
        {
          pl: "Porównaj ten kąt z kątem prostym.",
          ua: "Порівняй цей кут із прямим."
        },
        {
          pl: "Wskaż wierzchołek i ramiona.",
          ua: "Вкажи вершину і сторони."
        }
      ]
    },

    /* 29 — Finał */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови"
      },
      text: {
        pl: [
          "Dzisiaj odkryłeś coś ważnego.",
          "Kąt nie jest po prostu „dwiema kreskami”.",
          "Ma wierzchołek i dwa ramiona — z dwóch półprostych.",
          "Potrafisz rozpoznać: ostry, prosty, rozwarty, półpełny, pełny.",
          "Następnym razem zrobimy coś jeszcze ciekawszego…",
          "📐 zmierzymy kąt! → Lekcja 13"
        ],
        ua: [
          "Сьогодні ти відкрив щось важливе.",
          "Кут — це не просто «дві риски».",
          "Він має вершину і дві сторони — з двох півпрямих.",
          "Ти вмієш розпізнати: гострий, прямий, тупий, розгорнутий, повний.",
          "Наступного разу зробимо ще цікавіше…",
          "📐 виміряємо кут! → Урок 13"
        ]
      }
    }
  ]
};
