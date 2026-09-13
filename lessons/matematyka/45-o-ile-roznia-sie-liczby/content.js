function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "O ile, nie ile razy",
        ua: "На скільки, не у скільки разів"
      },
      formula: "od −3 do 5  →  8 w prawo",
      text: {
        pl: [
          "Dwie liczby na osi. Pytanie: jaki odcinek je dzieli?",
          "To nie „ile razy większa”, tylko o ile jednostek — nawet gdy po drodze jest zero."
        ],
        ua: [
          "Два числа на осі. Питання: який відрізок їх ділить?",
          "Це не «у скільки разів більше», а на скільки одиниць — навіть коли по дорозі нуль."
        ]
      }
    },
    {
      type: "goal",
      heading: {
        pl: "Co będziesz umieć?",
        ua: "Що ти вмітимеш?"
      },
      items: [
        { pl: "podać, o ile różnią się dwie liczby na osi", ua: "сказати, на скільки різняться два числа на осі" },
        { pl: "liczyć odległość przez zero", ua: "рахувати відстань через нуль" },
        { pl: "odróżnić „o ile” od „ile razy”", ua: "відрізнити «на скільки» від «у скільки разів»" },
        { pl: "powiedzieć, w którą stronę idziesz od jednej liczby do drugiej", ua: "сказати, в який бік ідеш від одного числа до другого" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Odcinek między kropkami",
        ua: "Відрізок між точками"
      },
      visual: { kind: "number-line", min: -4, max: 6, marks: [-3, 5] },
      prompt: {
        pl: [
          "Od −3 do 5. Policz kreski: 3 do zera i 5 dalej.",
          "Razem 8. Kierunek: w prawo."
        ],
        ua: [
          "Від −3 до 5. Полічи рисочки: 3 до нуля і 5 далі.",
          "Разом 8. Напрямок: праворуч."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Różnica to odległość",
        ua: "Різниця — це відстань"
      },
      formula: "odległość = |a − b|",
      text: {
        pl: [
          "Na osi liczymy jednostki między dwoma punktami.",
          "Gdy liczby są po dwóch stronach zera, dodajemy kawałek do zera i kawałek od zera.",
          ["Od −3 do 5: 3 + 5 = ", em("8"), "."],
          "Nie budujemy dziś algorytmu odejmowania liczb ujemnych w słupku — tylko odległość i kierunek."
        ],
        ua: [
          "На осі рахуємо одиниці між двома точками.",
          "Коли числа по різні боки нуля, додаємо шматок до нуля і шматок від нуля.",
          ["Від −3 до 5: 3 + 5 = ", em("8"), "."],
          "Сьогодні не будуємо алгоритм віднімання від’ємних у стовпчик — лише відстань і напрямок."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Po tej samej stronie zera",
        ua: "По той самий бік нуля"
      },
      visual: { kind: "number-line", min: -8, max: 1, marks: [-7, -2] },
      reveal: true,
      steps: [
        {
          formula: "−7 i −2",
          text: {
            pl: "Obie na lewo od zera. Liczysz, ile jest między nimi.",
            ua: "Обидва ліворуч від нуля. Рахуєш, скільки між ними."
          }
        },
        {
          formula: "od −7 do −2  →  5",
          text: {
            pl: ["Od −7 do −2 jest ", em("5"), " jednostek (w prawo)."],
            ua: ["Від −7 до −2 є ", em("5"), " одиниць (праворуч)."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "„O ile” to nie „ile razy”",
        ua: "«На скільки» — це не «у скільки разів»"
      },
      formula: "12 i 4:   o 8 więcej,   3 razy więcej",
      text: {
        pl: [
          ["12 jest o ", em("8"), " większe od 4, bo 4 + 8 = 12."],
          ["12 jest ", em("3 razy"), " większe od 4, bo 4 · 3 = 12."],
          "To dwa różne pytania. Dziś liczymy „o ile” — odcinek na osi."
        ],
        ua: [
          ["12 на ", em("8"), " більше за 4, бо 4 + 8 = 12."],
          ["12 у ", em("3 рази"), " більше за 4, бо 4 · 3 = 12."],
          "Це два різні питання. Сьогодні рахуємо «на скільки» — відрізок на осі."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Z kierunku: od 2 do −5",
        ua: "З напрямком: від 2 до −5"
      },
      visual: { kind: "number-line", min: -6, max: 4, marks: [-5, 2] },
      reveal: true,
      steps: [
        { formula: "od 2 do 0:  2 jednostki w lewo" },
        { formula: "od 0 do −5:  5 jednostek w lewo" },
        {
          formula: "razem 7 w lewo",
          text: {
            pl: ["Od 2 do −5 różnią się o ", em("7"), " i idziesz w ", em("lewo"), "."],
            ua: ["Від 2 до −5 різняться на ", em("7"), " і ідеш ", em("ліворуч"), "."]
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "różnić się o …", ua: "різнятися на …" },
        { pl: "odległość na osi", ua: "відстань на осі" },
        { pl: "w prawo / w lewo", ua: "праворуч / ліворуч" },
        { pl: "ile razy większa", ua: "у скільки разів більша" }
      ],
      phrases: [
        { pl: "O ile różnią się te liczby?", ua: "На скільки різняться ці числа?" },
        { pl: "W którą stronę idziesz?", ua: "В який бік ідеш?" },
        { pl: "Nie myl z „ile razy”.", ua: "Не плутай з «у скільки разів»." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Przez zero",
        ua: "Через нуль"
      },
      visual: { kind: "number-line", min: -3, max: 6, marks: [-2, 5] },
      task: {
        id: "rozn-guided-7",
        type: "input-number",
        level: "A",
        question: {
          pl: ["O ile różnią się ", em("−2"), " i ", em("5"), "? Wpisz liczbę jednostek."],
          ua: ["На скільки різняться ", em("−2"), " і ", em("5"), "? Введи число одиниць."]
        },
        answer: 7,
        hint: {
          pl: "Do zera 2, od zera 5.",
          ua: "До нуля 2, від нуля 5."
        },
        explanation: {
          pl: "2 + 5 = 7.",
          ua: "2 + 5 = 7."
        },
        mistakes: [
          {
            answer: 3,
            feedback: {
              pl: "To 5 − 2 bez przejścia przez zero. Ujemna leży 2 pod zerem, więc dodaj 2 + 5.",
              ua: "Це 5 − 2 без переходу через нуль. Від’ємне лежить на 2 нижче нуля, тож 2 + 5."
            }
          },
          {
            answer: -7,
            feedback: {
              pl: "Odległość jest dodatnia. „O ile” to 7, nie −7.",
              ua: "Відстань додатна. «На скільки» — це 7, не −7."
            }
          }
        ]
      }
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "12 i 4 różnią się 3 razy, więc o 3",
        ua: "12 і 4 різняться у 3 рази, отже на 3"
      },
      text: {
        pl: [
          "„3 razy” i „o 3” to nie to samo.",
          ["12 = 4 · 3, więc 12 jest ", em("3 razy"), " większe."],
          ["12 = 4 + 8, więc różnią się o ", em("8"), "."]
        ],
        ua: [
          "«У 3 рази» і «на 3» — не те саме.",
          ["12 = 4 · 3, отже 12 у ", em("3 рази"), " більше."],
          ["12 = 4 + 8, отже різняться на ", em("8"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ta sama strona",
        ua: "Той самий бік"
      },
      visual: { kind: "number-line", min: -8, max: 1, marks: [-6, -1] },
      task: {
        id: "rozn-same-side",
        type: "input-number",
        level: "A",
        question: {
          pl: ["O ile różnią się ", em("−6"), " i ", em("−1"), "?"],
          ua: ["На скільки різняться ", em("−6"), " і ", em("−1"), "?"]
        },
        answer: 5,
        hint: {
          pl: "Policz kreski między −6 a −1.",
          ua: "Полічи рисочки між −6 і −1."
        },
        explanation: {
          pl: "Od −6 do −1 jest 5 jednostek.",
          ua: "Від −6 до −1 є 5 одиниць."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "O ile, nie ile razy",
        ua: "На скільки, не у скільки разів"
      },
      task: {
        id: "rozn-not-times",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Liczby 12 i 4. Które zdanie mówi o różnicy na osi?",
          ua: "Числа 12 і 4. Яке речення каже про різницю на осі?"
        },
        options: [
          { id: "a", label: { pl: "Różnią się o 8", ua: "Різняться на 8" } },
          { id: "b", label: { pl: "12 jest 3 razy większe, więc różnią się o 3", ua: "12 у 3 рази більше, отже різняться на 3" } },
          { id: "c", label: { pl: "Różnią się o 12", ua: "Різняться на 12" } }
        ],
        answer: "a",
        hint: {
          pl: "O ile: 4 + ? = 12.",
          ua: "На скільки: 4 + ? = 12."
        },
        explanation: {
          pl: "4 + 8 = 12, więc o 8. „3 razy” to inne pytanie.",
          ua: "4 + 8 = 12, отже на 8. «У 3 рази» — інше питання."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "3 razy większe — tak, ale to nie jest „o ile”. O ile to 8.",
              ua: "У 3 рази більше — так, але це не «на скільки». На скільки — 8."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Temperatury rano i w nocy",
        ua: "Температури вранці і вночі"
      },
      text: {
        pl: [
          ["W nocy ", em("−4°C"), ", rano ", em("3°C"), "."],
          "O ile stopni temperatura wzrosła?"
        ],
        ua: [
          ["Вночі ", em("−4°C"), ", вранці ", em("3°C"), "."],
          "На скільки градусів температура зросла?"
        ]
      },
      task: {
        id: "rozn-temp",
        type: "input-number",
        level: "B",
        question: {
          pl: "Wpisz liczbę stopni.",
          ua: "Введи число градусів."
        },
        answer: 7,
        hint: {
          pl: "Od −4 do 0, potem do 3.",
          ua: "Від −4 до 0, потім до 3."
        },
        explanation: {
          pl: "4 + 3 = 7 stopni.",
          ua: "4 + 3 = 7 градусів."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwa piętra parkingu",
        ua: "Два поверхи паркінгу"
      },
      text: {
        pl: [
          ["Garaż ", em("−1"), " i taras na ", em("4"), "."],
          "Ile kondygnacji jest między nimi (odległość na osi)?"
        ],
        ua: [
          ["Гараж ", em("−1"), " і тераса на ", em("4"), "."],
          "Скільки поверхів між ними (відстань на осі)?"
        ]
      },
      task: {
        id: "rozn-parking",
        type: "input-number",
        level: "B",
        question: {
          pl: "Wpisz odległość.",
          ua: "Введи відстань."
        },
        answer: 5,
        hint: {
          pl: "1 w dół do zera i 4 w górę.",
          ua: "1 вниз до нуля і 4 вгору."
        },
        explanation: {
          pl: "1 + 4 = 5.",
          ua: "1 + 4 = 5."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Od −3 do 5",
        ua: "Від −3 до 5"
      },
      visual: { kind: "number-line", min: -4, max: 6, marks: [-3, 5] },
      text: {
        pl: [
          "Potrzebne dwie rzeczy: ile jednostek i w którą stronę."
        ],
        ua: [
          "Потрібні дві речі: скільки одиниць і в який бік."
        ]
      },
      task: {
        id: "rozn-direction",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Idziesz od −3 do 5. Co jest prawdą?",
          ua: "Ідеш від −3 до 5. Що правда?"
        },
        options: [
          { id: "a", label: { pl: "o 8 jednostek w prawo", ua: "на 8 одиниць праворуч" } },
          { id: "b", label: { pl: "o 8 jednostek w lewo", ua: "на 8 одиниць ліворуч" } },
          { id: "c", label: { pl: "o 2 jednostki, bo 5 − 3 = 2", ua: "на 2 одиниці, бо 5 − 3 = 2" } }
        ],
        answer: "a",
        hint: {
          pl: "3 do zera, 5 od zera. Zero zostawiasz za sobą — w którą stronę?",
          ua: "3 до нуля, 5 від нуля. Нуль лишаєш за собою — в який бік?"
        },
        explanation: {
          pl: "3 + 5 = 8. Od ujemnej do dodatniej idziesz w prawo.",
          ua: "3 + 5 = 8. Від від’ємного до додатного ідеш праворуч."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W lewo byłoby od 5 do −3. Pytanie jest od −3 do 5.",
              ua: "Ліворуч було б від 5 до −3. Питання — від −3 до 5."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odejąłeś cyfry bez znaków. −3 jest 3 pod zerem, więc 3 + 5 = 8.",
              ua: "Відняв цифри без знаків. −3 є на 3 нижче нуля, отже 3 + 5 = 8."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Odległość",
        ua: "Чи вже вмію? Відстань"
      },
      task: {
        id: "rozn-check-dist",
        type: "input-number",
        level: "A",
        question: {
          pl: ["O ile różnią się ", em("−1"), " i ", em("4"), "?"],
          ua: ["На скільки різняться ", em("−1"), " і ", em("4"), "?"]
        },
        answer: 5,
        hint: {
          pl: "1 + 4.",
          ua: "1 + 4."
        },
        explanation: {
          pl: "1 + 4 = 5.",
          ua: "1 + 4 = 5."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Bez zera w środku",
        ua: "Чи вже вмію? Без нуля всередині"
      },
      task: {
        id: "rozn-check-same",
        type: "input-number",
        level: "B",
        question: {
          pl: ["O ile różnią się ", em("−8"), " i ", em("−3"), "?"],
          ua: ["На скільки різняться ", em("−8"), " і ", em("−3"), "?"]
        },
        answer: 5,
        hint: {
          pl: "Obie na lewo. Policz od −8 do −3.",
          ua: "Обидва ліворуч. Полічи від −8 до −3."
        },
        explanation: {
          pl: "Od −8 do −3 jest 5 jednostek.",
          ua: "Від −8 до −3 є 5 одиниць."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "od −3 do 5  →  8 w prawo",
      visual: { kind: "number-line", min: -4, max: 6, marks: [-3, 5] },
      text: {
        pl: [
          "„O ile” to odcinek na osi. Przez zero: dodaj oba kawałki.",
          "Kierunek: w prawo albo w lewo. Nie myl z „ile razy”."
        ],
        ua: [
          "«На скільки» — відрізок на осі. Через нуль: додай обидва шматки.",
          "Напрямок: праворуч або ліворуч. Не плутай з «у скільки разів»."
        ]
      }
    },
    {
      type: "review",
      heading: {
        pl: "Wrócimy do tego",
        ua: "Ми до цього повернемось"
      },
      text: {
        pl: [
          "Później znów: o ile wzrosła temperatura, ile pięter między garażem a dachem.",
          "Nadal odległość na osi — nie pełne odejmowanie z klasy 7."
        ],
        ua: [
          "Пізніше знову: на скільки зросла температура, скільки поверхів між гаражем і дахом.",
          "І далі відстань на осі — не повне віднімання з 7 класу."
        ]
      }
    }
  ]
};
