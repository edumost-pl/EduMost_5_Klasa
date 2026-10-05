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

/** Polish long-division board with fixed digit columns (does not “slip”). */
function board(cfg) {
  var esc = function (s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };
  var digs = String(cfg.dividend).split("");
  var n = digs.length;
  var div = String(cfg.divisor);
  var qRaw = cfg.quotient == null ? "" : String(cfg.quotient);
  var markQ = cfg.markQ || {};
  var markD = cfg.markD || {};

  function cell(ch, mark, extraClass) {
    var v = ch == null || ch === "" ? "&nbsp;" : esc(String(ch));
    var cls = "pd-cell" + (extraClass ? " " + extraClass : "") + (mark ? " pd-mark" : "");
    return '<span class="' + cls + '">' + v + "</span>";
  }

  function rowOpen() {
    return '<div class="pd-row">';
  }

  var html = '<div class="polish-board" style="--pd-n:' + n + '" aria-label="dzielenie pisemne">';

  /* quotient */
  html += rowOpen() + cell("", false, "pd-op");
  var qi;
  for (qi = 0; qi < n; qi++) {
    var qch = "";
    if (qRaw === "?") qch = qi === 0 ? "?" : "";
    else if (qi < qRaw.length) qch = qRaw.charAt(qi);
    html += cell(qch, !!markQ[qi]);
  }
  html += cell("", false) + cell("", false) + "</div>";

  /* top rule over dividend + divisor */
  html += '<div class="pd-row"><span class="pd-rule-full"></span></div>';

  /* dividend : divisor */
  html += rowOpen() + cell("", false, "pd-op");
  for (qi = 0; qi < n; qi++) html += cell(digs[qi], !!markD[qi]);
  html += cell(":", false, "pd-colon") + cell(div, false) + "</div>";

  /* working rows */
  var rows = cfg.rows || [];
  var r;
  for (r = 0; r < rows.length; r++) {
    var step = rows[r];
    if (step === "rule" || step.rule) {
      html += '<div class="pd-row"><span class="pd-rule"></span></div>';
      continue;
    }
    if (step === "done" || step.done) {
      html += rowOpen() + cell("", false, "pd-op");
      for (qi = 0; qi < n; qi++) {
        html += cell(qi >= n - 2 ? "=" : "", !!step.mark);
      }
      html += cell("", false) + cell("", false) + "</div>";
      continue;
    }
    var op = step.op == null ? "" : String(step.op);
    var cells = step.cells || [];
    var marks = step.markCells || {};
    var markAll = !!step.mark;
    html += rowOpen() + cell(op, markAll && !!op, "pd-op");
    for (qi = 0; qi < n; qi++) {
      html += cell(cells[qi] == null ? "" : cells[qi], markAll || !!marks[qi]);
    }
    html += cell("", false) + cell("", false) + "</div>";
  }

  html += "</div>";
  return { html: html };
}

window.EduMostLessonContent = {
  blocks: [
    /* 1 — Intro */
    {
      type: "intro",
      heading: {
        pl: "🧙‍♂️ Misja: Wielka maszyna dzielenia",
        ua: "🧙‍♂️ Місія: Велика машина ділення"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Dzisiaj nauczysz się **dzielenia pisemnego** — tak, jak zapisujemy je w polskiej szkole.",
              "Cel misji: podzielić **864 : 4** krok po kroku."
            ],
            ua: [
              "🦉 Сьогодні навчишся **письмового ділення** — так, як його записують у польській школі.",
              "Мета місії: поділити **864 : 4** крок за кроком."
            ]
          }
        },
        {
          visual: ph(
            "t10-machine.jpg",
            "Maszyna dzielenia",
            "Машина ділення",
            "Math division machine"
          )
        },
        {
          text: {
            pl: "Cztery dźwignie: **DZIELĘ → MNOŻĘ → ODEJMUJĘ → SPROWADZAM**.",
            ua: "Чотири важелі: **ДІЛЮ → МНОЖУ → ВІДНІМАЮ → СПУСКАЮ**."
          }
        }
      ],
      task: {
        id: "m10-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "Uruchamiamy Wielką Maszynę Dzielenia?",
          ua: "Запускаємо Велику Машину Ділення?"
        },
        answer: true,
        explanation: {
          pl: "🚀 Start! Najpierw poznamy polski zapis.",
          ua: "🚀 Старт! Спочатку пізнаємо польський запис."
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
          pl: "zapisać dzielenie pisemne po polsku (iloraz nad kreską)",
          ua: "записати письмове ділення по-польськи (частка над рискою)"
        },
        {
          pl: "powtarzać rytm: dzielę → mnożę → odejmuję → sprowadzam",
          ua: "повторювати ритм: ділю → множу → віднімаю → спускаю"
        },
        {
          pl: "nie zgubić zera w ilorazie",
          ua: "не загубити нуль у частці"
        },
        {
          pl: "dzielić z resztą i sprawdzić wynik",
          ua: "ділити з остачею і перевірити результат"
        }
      ]
    },

    /* 3 — Po co */
    {
      type: "concept",
      heading: {
        pl: "🤔 Po co dzielenie pisemne?",
        ua: "🤔 Навіщо письмове ділення?"
      },
      parts: [
        {
          text: {
            pl: ["Małe liczby dzielimy w pamięci: ", em("84 : 4"), " = 21."],
            ua: ["Малі числа ділимо в розумі: ", em("84 : 4"), " = 21."]
          }
        },
        {
          text: {
            pl: ["Duże — zapisujemy krok po kroku: ", em("864 : 4"), "."],
            ua: ["Великі — записуємо крок за кроком: ", em("864 : 4"), "."]
          }
        },
        {
          visual: ph(
            "t10-why.jpg",
            "Małe vs duże",
            "Мале vs велике",
            "Why long division"
          )
        },
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Dzielenie pisemne rozkłada trudne działanie na proste kroki.",
              ua: "Письмове ділення розкладає складну дію на прості кроки."
            }
          }
        }
      ]
    },

    /* 4 — Polski zapis: pusty szkielet (bez wyniku!) */
    {
      type: "concept",
      heading: {
        pl: "🧩 Polski zapis — start",
        ua: "🧩 Польський запис — старт"
      },
      parts: [
        {
          text: {
            pl: [
              "W polskiej szkole zapisujemy tak:",
              "• **iloraz** — nad kreską",
              "• **dzielna : dzielnik** — pod kreską",
              "• odejmowania — pod spodem"
            ],
            ua: [
              "У польській школі записуємо так:",
              "• **частка** — над рискою",
              "• **ділене : дільник** — під рискою",
              "• віднімання — знизу"
            ]
          }
        },
        {
          visual: ph(
            "t10-setup.jpg",
            "Pusty zapis 864 : 4",
            "Порожній запис 864 : 4",
            "Empty Polish division setup"
          )
        },
        board({ dividend: "864", divisor: "4", quotient: "?" }),
        {
          items: [
            {
              pl: ["**864** — dzielna (co dzielimy)"],
              ua: ["**864** — ділене (що ділимо)"]
            },
            {
              pl: ["**4** — dzielnik (przez ile)"],
              ua: ["**4** — дільник (на скільки)"]
            },
            {
              pl: ["**?** — iloraz (wynik, którego szukamy)"],
              ua: ["**?** — частка (результат, який шукаємо)"]
            }
          ]
        },
        {
          text: {
            pl: "🦉 Jeszcze **nie** znamy wyniku — zbudujemy go cyfra po cyfrze!",
            ua: "🦉 Ще **не** знаємо результату — збудуємо його цифра за цифрою!"
          }
        }
      ]
    },

    /* 5 — Rytm 4 kroków */
    {
      type: "concept",
      heading: {
        pl: "🔄 Cztery magiczne kroki",
        ua: "🔄 Чотири магічні кроки"
      },
      parts: [
        {
          text: {
            pl: "Każdą cyfrę ilorazu robimy tym samym rytmem:",
            ua: "Кожну цифру частки робимо тим самим ритмом:"
          }
        },
        {
          visual: ph(
            "t10-cycle.jpg",
            "Pętla czterech kroków",
            "Цикл чотирьох кроків",
            "Four-step cycle"
          )
        },
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "DZIELĘ → MNOŻĘ → ODEJMUJĘ → SPROWADZAM",
              ua: "ДІЛЮ → МНОЖУ → ВІДНІМАЮ → СПУСКАЮ"
            },
            text: {
              pl: "Potem znowu od DZIELĘ — aż skończą się cyfry.",
              ua: "Потім знову від ДІЛЮ — доки не закінчаться цифри."
            }
          }
        }
      ]
    },

    /* 6 — Krok 1: DZIELĘ */
    {
      type: "guided-practice",
      heading: {
        pl: "1️⃣ DZIELĘ — pierwsza cyfra",
        ua: "1️⃣ ДІЛЮ — перша цифра"
      },
      parts: [
        {
          text: {
            pl: [
              "Patrzymy od **lewej**. Pierwsza cyfra dzielnej: **8**.",
              "Ile razy **4** mieści się w **8**?"
            ],
            ua: [
              "Дивимось зліва. Перша цифра діленого: **8**.",
              "Скільки разів **4** вміщається в **8**?"
            ]
          }
        },
        board({ dividend: "864", divisor: "4", quotient: "?" })
      ],
      task: {
        id: "m10-dziel1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "8 : 4 = ?",
          ua: "8 : 4 = ?"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "4", label: { pl: "4", ua: "4" } }
        ],
        answer: "2",
        explanation: {
          pl: "8 : 4 = **2**. Piszemy **2** nad kreską, nad cyfrą 8.",
          ua: "8 : 4 = **2**. Пишемо **2** над рискою, над цифрою 8."
        }
      }
    },

    /* 7 — MNOŻĘ + ODEJMUJĘ */
    {
      type: "guided-practice",
      heading: {
        pl: "2️⃣3️⃣ MNOŻĘ i ODEJMUJĘ",
        ua: "2️⃣3️⃣ МНОЖУ і ВІДНІМАЮ"
      },
      parts: [
        {
          text: {
            pl: [
              "MNOŻĘ: **2 · 4 = 8** — piszemy **- 8** pod ósemką.",
              "ODEJMUJĘ: **8 − 8 = 0**."
            ],
            ua: [
              "МНОЖУ: **2 · 4 = 8** — пишемо **- 8** під вісімкою.",
              "ВІДНІМАЮ: **8 − 8 = 0**."
            ]
          }
        },
        {
          visual: ph(
            "t10-step1.svg",
            "Krok 1: 2 i −8",
            "Крок 1: 2 і −8",
            "Step 1 aligned"
          )
        },
        board({
          dividend: "864",
          divisor: "4",
          quotient: "2",
          markQ: { 0: true },
          rows: [
            { op: "-", cells: ["8", "", ""], mark: true },
            "rule",
            { op: "", cells: ["0", "", ""] }
          ]
        })
      ],
      task: {
        id: "m10-mnoz-odejm",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile wynosi 8 − 8?",
          ua: "Чому дорівнює 8 − 8?"
        },
        answer: 0,
        explanation: {
          pl: "0 — nic nie zostało. Czas na **SPROWADZAM**!",
          ua: "0 — нічого не лишилось. Час на **СПУСКАЮ**!"
        }
      }
    },

    /* 8 — SPROWADZAM */
    {
      type: "guided-practice",
      heading: {
        pl: "4️⃣ SPROWADZAM cyfrę 6",
        ua: "4️⃣ СПУСКАЮ цифру 6"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie wymyślamy nowej liczby — **sprowadzamy** następną cyfrę z dzielnej.",
              "Po 0 ściągamy **6** i piszemy **= 06**."
            ],
            ua: [
              "Не вигадуємо нове число — **спускаємо** наступну цифру з діленого.",
              "Після 0 тягнемо **6** і пишемо **= 06**."
            ]
          }
        },
        {
          visual: ph(
            "t10-step2.svg",
            "Sprowadzamy 6 → = 06",
            "Спускаємо 6 → = 06",
            "Bring down 6"
          )
        },
        board({
          dividend: "864",
          divisor: "4",
          quotient: "2",
          rows: [
            { op: "-", cells: ["8", "", ""] },
            "rule",
            { op: "=", cells: ["0", "6", ""], mark: true }
          ]
        }),
        {
          text: {
            pl: "🦉 Rytm wraca: znowu **DZIELĘ**!",
            ua: "🦉 Ритм повертається: знову **ДІЛЮ**!"
          }
        }
      ],
      task: {
        id: "m10-sprowadz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po sprowadzeniu 6 następny krok to:",
          ua: "Після спуску 6 наступний крок:"
        },
        options: [
          { id: "d", label: { pl: "🔵 DZIELĘ (6 : 4)", ua: "🔵 ДІЛЮ (6 : 4)" } },
          { id: "m", label: { pl: "🟢 MNOŻĘ od razu", ua: "🟢 МНОЖУ одразу" } }
        ],
        answer: "d",
        explanation: {
          pl: "Zawsze wracamy do **DZIELĘ**.",
          ua: "Завжди повертаємось до **ДІЛЮ**."
        }
      }
    },

    /* 9 — Druga cyfra */
    {
      type: "guided-practice",
      heading: {
        pl: "Znowu DZIELĘ — cyfra 1",
        ua: "Знову ДІЛЮ — цифра 1"
      },
      parts: [
        {
          text: {
            pl: [
              "Mamy **6**. Ile razy 4 mieści się w 6?",
              "2 · 4 = 8 — to już za dużo. Zostaje **1** raz."
            ],
            ua: [
              "Маємо **6**. Скільки разів 4 вміщається в 6?",
              "2 · 4 = 8 — це вже забагато. Лишається **1** раз."
            ]
          }
        },
        board({
          dividend: "864",
          divisor: "4",
          quotient: "21",
          markQ: { 1: true },
          rows: [
            { op: "-", cells: ["8", "", ""] },
            "rule",
            { op: "=", cells: ["0", "6", ""] }
          ]
        })
      ],
      task: {
        id: "m10-cyfra1",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Druga cyfra ilorazu to:",
          ua: "Друга цифра частки:"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } }
        ],
        answer: "1",
        explanation: {
          pl: "**1**. Dalej: 1 · 4 = 4, potem 6 − 4 = 2.",
          ua: "**1**. Далі: 1 · 4 = 4, потім 6 − 4 = 2."
        }
      }
    },

    /* 10 — Do =24 */
    {
      type: "guided-practice",
      heading: {
        pl: "MNOŻĘ → ODEJMUJĘ → SPROWADZAM",
        ua: "МНОЖУ → ВІДНІМАЮ → СПУСКАЮ"
      },
      parts: [
        {
          text: {
            pl: [
              "1 · 4 = **4** → piszemy **- 4**.",
              "6 − 4 = **2**. Sprowadzamy **4** → **= 24**."
            ],
            ua: [
              "1 · 4 = **4** → пишемо **- 4**.",
              "6 − 4 = **2**. Спускаємо **4** → **= 24**."
            ]
          }
        },
        {
          visual: ph(
            "t10-step3.svg",
            "Mamy = 24",
            "Маємо = 24",
            "Step to 24"
          )
        },
        // board({
        //   dividend: "864",
        //   divisor: "4",
        //   quotient: "21",
        //   rows: [
        //     { op: "-", cells: ["8", "", ""] },
        //     "rule",
        //     { op: "=", cells: ["0", "6", ""] },
        //     { op: "-", cells: ["", "4", ""], mark: true },
        //     "rule",
        //     { op: "=", cells: ["", "2", "4"], mark: true }
        //   ]
        // })
      ],
      task: {
        id: "m10-do24",
        type: "input-number",
        level: "B",
        question: {
          pl: "Po sprowadzeniu 4 mamy liczbę:",
          ua: "Після спуску 4 маємо число:"
        },
        answer: 24,
        explanation: {
          pl: "**24**. Ostatni raz: DZIELĘ!",
          ua: "**24**. Останній раз: ДІЛЮ!"
        }
      }
    },

    /* 11 — Finisz 864:4 */
    {
      type: "practice",
      heading: {
        pl: "🏁 Ostatnia cyfra — wynik!",
        ua: "🏁 Остання цифра — результат!"
      },
      parts: [
        {
          text: {
            pl: [
              "24 : 4 = **6**.",
              "6 · 4 = 24 → **- 24**.",
              "24 − 24 = 0 → na dole piszemy **==** (reszta zero)."
            ],
            ua: [
              "24 : 4 = **6**.",
              "6 · 4 = 24 → **- 24**.",
              "24 − 24 = 0 → знизу пишемо **==** (остача нуль)."
            ]
          }
        },
        {
          visual: ph(
            "t10-step4.svg",
            "864 : 4 = 216",
            "864 : 4 = 216",
            "Complete Polish division"
          )
        },
        // board({
        //   dividend: "864",
        //   divisor: "4",
        //   quotient: "216",
        //   markQ: { 0: true, 1: true, 2: true },
        //   rows: [
        //     { op: "-", cells: ["8", "", ""] },
        //     "rule",
        //     { op: "=", cells: ["0", "6", ""] },
        //     { op: "-", cells: ["", "4", ""] },
        //     "rule",
        //     { op: "=", cells: ["", "2", "4"] },
        //     { op: "-", cells: ["", "2", "4"] },
        //     "rule",
        //     "done"
        //   ]
        // })
      ],
      task: {
        id: "m10-wynik864",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile wynosi 864 : 4?",
          ua: "Чому дорівнює 864 : 4?"
        },
        answer: 216,
        explanation: {
          pl: "🎉 **216**. Sprawdzenie: 216 · 4 = 864.",
          ua: "🎉 **216**. Перевірка: 216 · 4 = 864."
        }
      }
    },

    /* 12–14 — Samodzielnie 735:5 */
    {
      type: "guided-practice",
      heading: {
        pl: "🎮 Ty prowadzisz: 735 : 5",
        ua: "🎮 Ти керуєш: 735 : 5"
      },
      parts: [
        {
          text: {
            pl: [
              "Nowy przykład — ten sam polski zapis.",
              "DZIELĘ od lewej: **7 : 5 = ?**"
            ],
            ua: [
              "Новий приклад — той самий польський запис.",
              "ДІЛЮ зліва: **7 : 5 = ?**"
            ]
          }
        },
        board({ dividend: "735", divisor: "5", quotient: "?" })
      ],
      task: {
        id: "m10-735a",
        type: "single-choice",
        level: "B",
        question: { pl: "7 : 5 = ?", ua: "7 : 5 = ?" },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } }
        ],
        answer: "1",
        explanation: {
          pl: "1. Dalej: 1 · 5 = 5, 7 − 5 = 2, sprowadzamy 3 → **= 23**.",
          ua: "1. Далі: 1 · 5 = 5, 7 − 5 = 2, спускаємо 3 → **= 23**."
        }
      }
    },
    {
      type: "guided-practice",
      heading: {
        pl: "🎮 735 : 5 — dalej",
        ua: "🎮 735 : 5 — далі"
      },
      parts: [
        {
          text: {
            pl: [
              "Mamy **= 23**.",
              "23 : 5 = **4** (bo 5 · 4 = 20, 23 − 20 = 3).",
              "Sprowadzamy **5** → **= 35**."
            ],
            ua: [
              "Маємо **= 23**.",
              "23 : 5 = **4** (бо 5 · 4 = 20, 23 − 20 = 3).",
              "Спускаємо **5** → **= 35**."
            ]
          }
        },
        board({
          dividend: "735",
          divisor: "5",
          quotient: "14",
          rows: [
            { op: "-", cells: ["5", "", ""] },
            "rule",
            { op: "=", cells: ["2", "3", ""] },
            { op: "-", cells: ["2", "0", ""] },
            "rule",
            { op: "=", cells: ["3", "5", ""], mark: true }
          ]
        })
      ],
      task: {
        id: "m10-735b",
        type: "input-number",
        level: "B",
        question: {
          pl: "35 : 5 = ?",
          ua: "35 : 5 = ?"
        },
        answer: 7,
        explanation: {
          pl: "7. Iloraz: **147**.",
          ua: "7. Частка: **147**."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "🎮 735 : 5 — wynik",
        ua: "🎮 735 : 5 — результат"
      },
      parts: [
        {
          text: {
            pl: "Dokończ zapis. Na dole powinno wyjść **0**.",
            ua: "Допиши запис. Знизу має вийти **0**."
          }
        },
        board({
          dividend: "735",
          divisor: "5",
          quotient: "1??",
          markQ: { 0: true, 1: true, 2: true },
          rows: [
            { op: "-", cells: ["5", "", ""] },
            "rule",
            { op: "=", cells: ["2", "3", ""] },
            { op: "-", cells: ["?", "?"],  },
            "rule",
            { op: "=", cells: ["", "0", "0"] },
            { op: "-", cells: ["", "0", "0"] },
          ]
        })
      ],
      task: {
        id: "m10-735c",
        type: "input-number",
        level: "B",
        question: {
          pl: "735 : 5 = ?",
          ua: "735 : 5 = ?"
        },
        answer: 147,
        explanation: {
          pl: "**147**. Sprawdzenie: 147 · 5 = 735.",
          ua: "**147**. Перевірка: 147 · 5 = 735."
        }
      }
    },

    /* 15 — LOGIKA 1 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 1: od której cyfry?",
        ua: "🧠 Логіка 1: з якої цифри?"
      },
      parts: [
        {
          text: {
            pl: [
              "Przy **735 : 5** zaczynamy od **7**, a nie od **73**.",
              "Dlaczego to ma sens?"
            ],
            ua: [
              "При **735 : 5** починаємо з **7**, а не з **73**.",
              "Чому це має сенс?"
            ]
          }
        },
        {
          visual: ph(
            "t10-start.jpg",
            "Start od cyfry 7",
            "Старт з цифри 7",
            "Start from left digit"
          )
        }
      ],
      task: {
        id: "m10-logika1",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Najlepsze wyjaśnienie:",
          ua: "Найкраще пояснення:"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "A. Bo tak wygląda działanie.",
              ua: "A. Бо так виглядає дія."
            }
          },
          {
            id: "b",
            label: {
              pl: "B. Od lewej bierzemy najmniejszy fragment, który już da się podzielić przez dzielnik.",
              ua: "B. Зліва беремо найменший фрагмент, який уже можна поділити на дільник."
            }
          },
          {
            id: "c",
            label: {
              pl: "C. Bo 73 jest za duże.",
              ua: "C. Бо 73 завелике."
            }
          }
        ],
        answer: "b",
        explanation: {
          pl: "B! 7 już „mieści” 5 (iloraz 1). Idziemy od lewej, kawałek po kawałku.",
          ua: "B! 7 уже «вміщає» 5 (частка 1). Йдемо зліва, шматочок за шматочком."
        }
      }
    },

    /* 16 — Reszta */
    {
      type: "example",
      heading: {
        pl: "😲 A jeśli coś zostanie?",
        ua: "😲 А якщо щось лишиться?"
      },
      parts: [
        {
          text: {
            pl: "Przykład z resztą: **47 : 3** — ten sam polski zapis.",
            ua: "Приклад з остачею: **47 : 3** — той самий польський запис."
          }
        },
        {
          visual: ph(
            "t10-remainder.jpg",
            "Dzielenie z resztą",
            "Ділення з остачею",
            "Division with remainder"
          )
        }
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "4 : 3 = 1 → −3 → zostaje 1 → sprowadzamy 7 → = 17.",
            ua: "4 : 3 = 1 → −3 → лишається 1 → спускаємо 7 → = 17."
          }
        },
        {
          text: {
            pl: "17 : 3 = 5 → −15 → zostaje **2**.",
            ua: "17 : 3 = 5 → −15 → лишається **2**."
          }
        },
        board({
          dividend: "47",
          divisor: "3",
          quotient: "1?",
          rows: [
            { op: "-", cells: ["3", ""] },
            "rule",
            { op: "=", cells: ["?", "?"] },
            { op: "-", cells: ["?", "?"] },
            "rule",
            { op: "", cells: ["", "?"], mark: true }
          ]
        })
      ],
      task: {
        id: "m10-reszta47",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wpisz wynik 47 : 3 (np. 15 r. 2):",
          ua: "Впиши результат 47 : 3 (напр. 15 r. 2):"
        },
        answer: ["15 r. 2", "15r.2", "15 r 2", "15r 2"],
        explanation: {
          pl: "47 : 3 = **15 r. 2**. Sprawdzenie: 15 · 3 + 2 = 47.",
          ua: "47 : 3 = **15 r. 2**. Перевірка: 15 · 3 + 2 = 47."
        }
      }
    },

    /* 17 — Reguła reszty */
    {
      type: "concept",
      heading: {
        pl: "⚠️ Reszta < dzielnik",
        ua: "⚠️ Остача < дільник"
      },
      parts: [
        {
          text: {
            pl: "Złota zasada polskiego dzielenia:",
            ua: "Золоте правило польського ділення:"
          }
        },
        {
          visual: ph(
            "t10-rule.jpg",
            "Reszta < dzielnik",
            "Остача < дільник",
            "Remainder rule"
          )
        },
        {
          rule: {
            label: { pl: "Ważne!", ua: "Важливо!" },
            lines: {
              pl: "RESZTA < DZIELNIK",
              ua: "ОСТАЧА < ДІЛЬНИК"
            },
            text: {
              pl: "15 r. 2 ✅ (2 < 3). Wynik 14 r. 5 ❌ — bo 5 ≥ 3.",
              ua: "15 r. 2 ✅ (2 < 3). Результат 14 r. 5 ❌ — бо 5 ≥ 3."
            }
          }
        }
      ],
      task: {
        id: "m10-reszta-rule",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy 47 : 3 = 14 r. 5 jest możliwe?",
          ua: "Чи 47 : 3 = 14 r. 5 можливе?"
        },
        answer: false,
        explanation: {
          pl: "Nie — reszta 5 ≥ 3. Poprawnie 15 r. 2.",
          ua: "Ні — остача 5 ≥ 3. Правильно 15 r. 2."
        }
      }
    },

    /* 18 — Zero w ilorazie */
    {
      type: "concept",
      heading: {
        pl: "😮 Zero w ilorazie: 408 : 4",
        ua: "😮 Нуль у частці: 408 : 4"
      },
      parts: [
        {
          text: {
            pl: [
              "4 : 4 = 1. Sprowadzamy **0** → 0 : 4 = **0**.",
              "To zero **musi** stanąć w ilorazie!",
              "Potem 8 : 4 = 2 → wynik **102**."
            ],
            ua: [
              "4 : 4 = 1. Спускаємо **0** → 0 : 4 = **0**.",
              "Цей нуль **має** стати в частці!",
              "Потім 8 : 4 = 2 → результат **102**."
            ]
          }
        },
        {
          visual: ph(
            "t10-zero.jpg",
            "Zero w ilorazie",
            "Нуль у частці",
            "Zero in quotient"
          )
        },
        board({
          dividend: "408",
          divisor: "4",
          quotient: "102",
          markQ: { 1: true },
          rows: [
            { op: "-", cells: ["4", "", ""] },
            "rule",
            { op: "=", cells: ["0", "0", ""] },
            { op: "-", cells: ["", "0", ""] },
            "rule",
            { op: "=", cells: ["0", "0", "8"] },
            { op: "-", cells: ["", "0", "8"] },
            "rule",
            { op: "-", cells: ["", "", "0"] },
          ]
        }),
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Bez zera wyszłoby 12 — a 12 · 4 = 48 ≠ 408.",
              ua: "Без нуля вийшло б 12 — а 12 · 4 = 48 ≠ 408."
            }
          }
        }
      ],
      task: {
        id: "m10-zero",
        type: "input-number",
        level: "B",
        question: {
          pl: "408 : 4 = ?",
          ua: "408 : 4 = ?"
        },
        answer: 102,
        explanation: {
          pl: "**102** — zero zajmuje swoje miejsce.",
          ua: "**102** — нуль займає своє місце."
        }
      }
    },

    /* 19 — Detektyw (nie challenge) */
    {
      type: "mistake",
      heading: {
        pl: "🕵️ Detektyw błędów",
        ua: "🕵️ Детектив помилок"
      },
      claim: {
        pl: "Ktoś napisał: 98 : 4 = 25 r. 2",
        ua: "Хтось написав: 98 : 4 = 25 r. 2"
      },
      parts: [
        {
          text: {
            pl: [
              "Sprawdzenie: iloraz · dzielnik + reszta = dzielna?",
              "**25 · 4 + 2 = 102** ≠ 98 — błąd!"
            ],
            ua: [
              "Перевірка: частка · дільник + остача = ділене?",
              "**25 · 4 + 2 = 102** ≠ 98 — помилка!"
            ]
          }
        },
        {
          visual: ph(
            "t10-detective.jpg",
            "Detektyw błędów",
            "Детектив помилок",
            "Error detective"
          )
        }
      ],
      task: {
        id: "m10-detektyw",
        type: "input-text",
        level: "C",
        question: {
          pl: "Poprawny wynik 98 : 4 (np. 25 r. 2):",
          ua: "Правильний результат 98 : 4 (напр. 25 r. 2):"
        },
        answer: ["24 r. 2", "24r.2", "24 r 2", "24r 2"],
        hint: {
          pl: "Sprawdź: ? · 4 + 2 = 98.",
          ua: "Перевір: ? · 4 + 2 = 98."
        },
        explanation: {
          pl: "**24 r. 2**, bo 24 · 4 + 2 = 98.",
          ua: "**24 r. 2**, бо 24 · 4 + 2 = 98."
        }
      }
    },

    /* 20 — LOGIKA 2 */
    {
      type: "challenge",
      heading: {
        pl: "🧠 Logika 2: który wynik ma sens?",
        ua: "🧠 Логіка 2: який результат має сенс?"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie licz całego dzielenia — **oszacuj**!",
              "**720 : 8** — który iloraz jest możliwy?"
            ],
            ua: [
              "Не рахуй усе ділення — **оціни**!",
              "**720 : 8** — яка частка можлива?"
            ]
          }
        },
        {
          visual: ph(
            "t10-estimate.jpg",
            "Szacowanie 720 : 8",
            "Оцінювання 720 : 8",
            "Estimate quotient"
          )
        }
      ],
      task: {
        id: "m10-logika2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "720 : 8 ≈ ?",
          ua: "720 : 8 ≈ ?"
        },
        options: [
          { id: "a", label: { pl: "9", ua: "9" } },
          { id: "b", label: { pl: "90", ua: "90" } },
          { id: "c", label: { pl: "900", ua: "900" } }
        ],
        answer: "b",
        hint: {
          pl: "8 · 9 = 72 (za mało). 8 · 900 = 7200 (za dużo).",
          ua: "8 · 9 = 72 (замало). 8 · 900 = 7200 (забагато)."
        },
        explanation: {
          pl: "⭐ **90**, bo 90 · 8 = 720.",
          ua: "⭐ **90**, бо 90 · 8 = 720."
        }
      }
    },

    /* 21 — Vocabulary */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka maszyny",
        ua: "📚 Слова машини"
      },
      rows: [
        { pl: "dzielenie pisemne", ua: "письмове ділення" },
        { pl: "dzielna / dzielnik / iloraz", ua: "ділене / дільник / частка" },
        { pl: "dzielę → mnożę → odejmuję → sprowadzam", ua: "ділю → множу → віднімаю → спускаю" },
        { pl: "reszta (== gdy zero)", ua: "остача (== коли нуль)" },
        { pl: "sprawdzenie: q · b + r = a", ua: "перевірка: q · b + r = a" }
      ]
    },

    /* 22–24 — Check */
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz maszyny — poziom 1",
        ua: "🏆 Майстер машини — рівень 1"
      },
      parts: [
        {
          text: {
            pl: "🟢 Zapisz w głowie (lub na kartce) po polsku: **648 : 2**.",
            ua: "🟢 Запиши в голові (чи на папері) по-польськи: **648 : 2**."
          }
        }
      ],
      task: {
        id: "m10-fin1",
        type: "input-number",
        level: "A",
        question: { pl: "648 : 2 = ?", ua: "648 : 2 = ?" },
        answer: 324,
        explanation: {
          pl: "**324**. Sprawdzenie: 324 · 2 = 648.",
          ua: "**324**. Перевірка: 324 · 2 = 648."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz maszyny — poziom 2",
        ua: "🏆 Майстер машини — рівень 2"
      },
      parts: [
        {
          text: {
            pl: "🟡 Uważaj na zero: **936 : 3**.",
            ua: "🟡 Увага на нуль: **936 : 3**."
          }
        }
      ],
      task: {
        id: "m10-fin2",
        type: "input-number",
        level: "B",
        question: { pl: "936 : 3 = ?", ua: "936 : 3 = ?" },
        answer: 312,
        explanation: {
          pl: "**312** — zero w środku ilorazu.",
          ua: "**312** — нуль посередині частки."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz maszyny — poziom 3",
        ua: "🏆 Майстер машини — рівень 3"
      },
      parts: [
        {
          text: {
            pl: "🔴 Z resztą: **947 : 4**.",
            ua: "🔴 З остачею: **947 : 4**."
          }
        }
      ],
      task: {
        id: "m10-fin3",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wynik 947 : 4 (np. 236 r. 3):",
          ua: "Результат 947 : 4 (напр. 236 r. 3):"
        },
        answer: ["236 r. 3", "236r.3", "236 r 3", "236r 3"],
        explanation: {
          pl: "**236 r. 3**, bo 236 · 4 + 3 = 947.",
          ua: "**236 r. 3**, бо 236 · 4 + 3 = 947."
        }
      }
    },

    /* 25 — Summary */
    {
      type: "summary",
      heading: {
        pl: "🎉 Maszyna działa!",
        ua: "🎉 Машина працює!"
      },
      parts: [
        {
          text: {
            pl: [
              "Potrafisz dzielić pisemnie **po polsku**: iloraz nad kreską, odejmowania pod spodem.",
              "Jeden dobry krok → następny. Rytm trzyma całą maszynę."
            ],
            ua: [
              "Ти вмієш ділити письмово **по-польськи**: частка над рискою, віднімання знизу.",
              "Один добрий крок → наступний. Ритм тримає всю машину."
            ]
          }
        },
        {
          visual: ph(
            "t10-medal.jpg",
            "Maszyna działa",
            "Машина працює",
            "Celebration medal"
          )
        },
        {
          rule: {
            label: { pl: "Mini-ściąga", ua: "Міні-шпаргалка" },
            lines: {
              pl: "DZIELĘ → MNOŻĘ → ODEJMUJĘ → SPROWADZAM",
              ua: "ДІЛЮ → МНОЖУ → ВІДНІМАЮ → СПУСКАЮ"
            },
            text: {
              pl: "Reszta < dzielnik. Sprawdzenie: q · b + r = a.",
              ua: "Остача < дільник. Перевірка: q · b + r = a."
            }
          }
        }
      ]
    },

    /* 26 — Review */
    {
      type: "review",
      heading: {
        pl: "🦉 Wiadomość od Sowy",
        ua: "🦉 Повідомлення від Сови"
      },
      text: {
        pl: [
          "Na początku duże dzielenie wygląda jak trudna zagadka.",
          "Ale polski zapis pokazuje każdy krok jasno.",
          "Ćwicz rytm — przy ułamkach jeszcze się przyda!"
        ],
        ua: [
          "Спочатку велике ділення виглядає як складна загадка.",
          "Але польський запис показує кожен крок ясно.",
          "Тренуй ритм — у дробах він ще знадобиться!"
        ]
      }
    }
  ]
};
