function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Połowa równoległoboku",
        ua: "Половина паралелограма"
      },
      visual: { kind: "triangle", triangle: "scalene", height: true, label: { pl: "podstawa a, wysokość h", ua: "основа a, висота h" } },
      text: {
        pl: [
          "Przekątna tnie równoległobok na dwa jednakowe trójkąty.",
          "Dlatego pole trójkąta to połowa iloczynu podstawy i wysokości. Łatwo zapomnieć o tym „przez 2”."
        ],
        ua: [
          "Діагональ ріже паралелограм на два однакові трикутники.",
          "Тому площа трикутника — половина добутку основи і висоти. Легко забути про це «поділити на 2»."
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
        { pl: "stosować P = a · h / 2", ua: "застосовувати P = a · h / 2" },
        { pl: "pamiętać o dzieleniu przez 2", ua: "пам’ятати про ділення на 2" },
        { pl: "z pola P i podstawy a znaleźć wysokość", ua: "з площі P і основи a знайти висоту" },
        { pl: "policzyć pole przy mieszanych jednostkach", ua: "порахувати площу при змішаних одиницях" },
        { pl: "porównać trójkąty o tej samej podstawie i różnych wysokościach", ua: "порівняти трикутники з тією самою основою і різними висотами" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Dwa trójkąty z jednego równoległoboku",
        ua: "Два трикутники з одного паралелограма"
      },
      visual: { kind: "quad", quad: "parallelogram", height: true },
      prompt: {
        pl: [
          "Równoległobok ma pole a · h. Przekątna dzieli go na pół.",
          "Każdy trójkąt dostaje połowę kratek."
        ],
        ua: [
          "Паралелограм має площу a · h. Діагональ ділить його навпіл.",
          "Кожен трикутник отримує половину клітинок."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Wzór z połową",
        ua: "Формула з половиною"
      },
      formula: "P = a · h / 2",
      text: {
        pl: [
          ["Najpierw jak równoległobok: ", em("a · h"), ". Potem dzielisz przez 2."],
          "Wysokość jest prostopadła do wybranej podstawy.",
          "Kolejność: możesz liczyć (a · h) : 2 albo a · (h : 2) — wynik ten sam."
        ],
        ua: [
          ["Спочатку як паралелограм: ", em("a · h"), ". Потім ділиш на 2."],
          "Висота перпендикулярна до вибраної основи.",
          "Порядок: можна (a · h) : 2 або a · (h : 2) — результат той самий."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Podstawa 8, wysokość 6",
        ua: "Основа 8, висота 6"
      },
      visual: { kind: "triangle", triangle: "scalene", height: true, label: { pl: "a = 8, h = 6", ua: "a = 8, h = 6" } },
      reveal: true,
      steps: [
        { formula: "P = a · h / 2" },
        { formula: "P = 8 · 6 / 2" },
        { formula: "P = 48 / 2" },
        {
          formula: "P = 24",
          text: {
            pl: "Gdybyś zatrzymał się na 48, policzyłbyś pole całego równoległoboku, nie trójkąta.",
            ua: "Якби зупинився на 48, порахував би площу всього паралелограма, не трикутника."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Od pola do wysokości",
        ua: "Від площі до висоти"
      },
      reveal: true,
      steps: [
        {
          formula: "P = 12,  a = 6",
          text: {
            pl: "Szukamy h. 12 = 6 · h / 2.",
            ua: "Шукаємо h. 12 = 6 · h / 2."
          }
        },
        { formula: "12 = 3 · h" },
        {
          formula: "h = 4",
          text: {
            pl: "Albo: 2 · P = a · h, więc h = 2 · 12 : 6 = 4.",
            ua: "Або: 2 · P = a · h, отже h = 2 · 12 : 6 = 4."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Metr i centymetry razem",
        ua: "Метр і сантиметри разом"
      },
      reveal: true,
      steps: [
        {
          formula: "a = 2 m,   h = 50 cm",
          text: {
            pl: "Najpierw jedna jednostka. 50 cm = 0,5 m.",
            ua: "Спочатку одна одиниця. 50 cm = 0,5 m."
          }
        },
        { formula: "P = 2 · 0,5 / 2" },
        {
          formula: "P = 0,5 m²",
          text: {
            pl: "Gdybyś wziął 2 · 50 / 2 = 50, jednostki byłyby pomieszane i wynik bez sensu.",
            ua: "Якби взяв 2 · 50 / 2 = 50, одиниці були б змішані і результат без сенсу."
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
        { pl: "trójkąt", ua: "трикутник" },
        { pl: "podstawa trójkąta", ua: "основа трикутника" },
        { pl: "wysokość trójkąta", ua: "висота трикутника" },
        { pl: "pole trójkąta", ua: "площа трикутника" }
      ],
      phrases: [
        { pl: "Oblicz pole trójkąta.", ua: "Обчисли площу трикутника." },
        { pl: "Oblicz wysokość trójkąta.", ua: "Обчисли висоту трикутника." },
        { pl: "Nie zapomnij podzielić przez 2.", ua: "Не забудь поділити на 2." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Z wzoru",
        ua: "З формули"
      },
      visual: { kind: "triangle", triangle: "right", height: true, label: { pl: "a = 10, h = 4", ua: "a = 10, h = 4" } },
      task: {
        id: "troj-guided-10-4",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Pole trójkąta: a = ", em("10"), ", h = ", em("4"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа трикутника: a = ", em("10"), ", h = ", em("4"), ". Введи число, кому або крапку."]
        },
        answer: 20,
        hint: {
          pl: "10 · 4 = 40, potem : 2.",
          ua: "10 · 4 = 40, потім : 2."
        },
        explanation: {
          pl: "10 · 4 / 2 = 20.",
          ua: "10 · 4 / 2 = 20."
        },
        mistakes: [
          {
            answer: 40,
            feedback: {
              pl: "To pole równoległoboku. Trójkąt to połowa: 20.",
              ua: "Це площа паралелограма. Трикутник — половина: 20."
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
        pl: "P = 8 · 6 = 48",
        ua: "P = 8 · 6 = 48"
      },
      visual: { kind: "triangle", triangle: "scalene", height: true },
      text: {
        pl: [
          "To wzór na równoległobok albo prostokąt.",
          ["Trójkąt: ", em("8 · 6 / 2 = 24"), "."]
        ],
        ua: [
          "Це формула паралелограма або прямокутника.",
          ["Трикутник: ", em("8 · 6 / 2 = 24"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Inna para liczb",
        ua: "Інша пара чисел"
      },
      task: {
        id: "troj-12-5",
        type: "input-number",
        level: "A",
        question: {
          pl: ["a = ", em("12"), ", h = ", em("5"), ". Pole trójkąta? Wpisz liczbę, przecinek lub kropka."],
          ua: ["a = ", em("12"), ", h = ", em("5"), ". Площа трикутника? Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "12 · 5 = 60, : 2 = 30.",
          ua: "12 · 5 = 60, : 2 = 30."
        },
        explanation: {
          pl: "12 · 5 / 2 = 30.",
          ua: "12 · 5 / 2 = 30."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Znajdź wysokość",
        ua: "Знайди висоту"
      },
      task: {
        id: "troj-odwrotnie-h",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Pole trójkąta wynosi ", em("18"), ", podstawa ", em("6"), ". Jaka jest wysokość? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа трикутника ", em("18"), ", основа ", em("6"), ". Яка висота? Введи число, кому або крапку."]
        },
        answer: 6,
        hint: {
          pl: "18 = 6 · h / 2. Najpierw ×2: 36 = 6 · h.",
          ua: "18 = 6 · h / 2. Спочатку ×2: 36 = 6 · h."
        },
        explanation: {
          pl: "h = 2 · 18 : 6 = 36 : 6 = 6.",
          ua: "h = 2 · 18 : 6 = 36 : 6 = 6."
        },
        mistakes: [
          {
            answer: 3,
            feedback: {
              pl: "To 18 : 6, bez podwojenia. Najpierw wróć do a · h = 2P.",
              ua: "Це 18 : 6, без подвоєння. Спочатку повернись до a · h = 2P."
            }
          },
          {
            answer: 12,
            feedback: {
              pl: "2 · 18 = 36, ale potem dzielisz przez podstawę 6, nie zostawiasz 12.",
              ua: "2 · 18 = 36, але потім ділиш на основу 6, не залишаєш 12."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Żagiel — mieszane jednostki",
        ua: "Вітрило — змішані одиниці"
      },
      text: {
        pl: [
          ["Żagiel ma kształt trójkąta. Podstawa ", em("2 m"), ", wysokość ", em("50 cm"), "."],
          "Najpierw zamień na metry, potem licz pole w m²."
        ],
        ua: [
          ["Вітрило має форму трикутника. Основа ", em("2 m"), ", висота ", em("50 cm"), "."],
          "Спочатку перетвори на метри, потім рахуй площу в m²."
        ]
      },
      task: {
        id: "troj-zagiel",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile wynosi pole w ", em("m²"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Чому дорівнює площа в ", em("m²"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 0.5,
        hint: {
          pl: "50 cm = 0,5 m. Potem 2 · 0,5 / 2.",
          ua: "50 cm = 0,5 m. Потім 2 · 0,5 / 2."
        },
        explanation: {
          pl: "h = 0,5 m. P = 2 · 0,5 / 2 = 0,5 m².",
          ua: "h = 0,5 m. P = 2 · 0,5 / 2 = 0,5 m²."
        },
        mistakes: [
          {
            answer: 50,
            feedback: {
              pl: "Pomieszałeś metry i centymetry. 50 cm = 0,5 m.",
              ua: "Змішав метри і сантиметри. 50 cm = 0,5 m."
            }
          },
          {
            answer: 1,
            feedback: {
              pl: "2 · 0,5 = 1 to pole równoległoboku. Trójkąt: jeszcze : 2 → 0,5.",
              ua: "2 · 0,5 = 1 — площа паралелограма. Трикутник: ще : 2 → 0,5."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Ta sama podstawa, inna wysokość",
        ua: "Та сама основа, інша висота"
      },
      text: {
        pl: [
          ["Dwa trójkąty mają podstawę ", em("8"), "."],
          ["Pierwszy ma h = ", em("3"), ", drugi h = ", em("5"), "."]
        ],
        ua: [
          ["Два трикутники мають основу ", em("8"), "."],
          ["Перший має h = ", em("3"), ", другий h = ", em("5"), "."]
        ]
      },
      task: {
        id: "troj-dwie-h",
        type: "input-number",
        level: "B",
        question: {
          pl: ["O ile większe jest pole drugiego trójkąta? Wpisz liczbę, przecinek lub kropka."],
          ua: ["На скільки більша площа другого трикутника? Введи число, кому або крапку."]
        },
        answer: 8,
        hint: {
          pl: "Pola: 8 · 3 / 2 = 12 i 8 · 5 / 2 = 20. Różnica.",
          ua: "Площі: 8 · 3 / 2 = 12 і 8 · 5 / 2 = 20. Різниця."
        },
        explanation: {
          pl: "12 i 20. 20 − 12 = 8. Przy tej samej podstawie większa wysokość daje większe pole.",
          ua: "12 і 20. 20 − 12 = 8. При тій самій основі більша висота дає більшу площу."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Ta sama a, różne h",
        ua: "Та сама a, різні h"
      },
      text: {
        pl: [
          ["Trójkąty o podstawie ", em("10"), ". Wysokości ", em("4"), " i ", em("6"), "."],
          "Nie musisz zgadywać stosunku. Policz większe pole."
        ],
        ua: [
          ["Трикутники з основою ", em("10"), ". Висоти ", em("4"), " і ", em("6"), "."],
          "Не треба вгадувати відношення. Полічи більшу площу."
        ]
      },
      task: {
        id: "troj-wieksze-pole",
        type: "input-number",
        level: "C",
        question: {
          pl: ["Ile wynosi większe z tych dwóch pól? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Чому дорівнює більша з цих двох площ? Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "Większe h daje większe pole. 10 · 6 / 2.",
          ua: "Більше h дає більшу площу. 10 · 6 / 2."
        },
        explanation: {
          pl: "Przy a = 10: P₁ = 10 · 4 / 2 = 20, P₂ = 10 · 6 / 2 = 30. Większe jest 30. Wysokość 6 jest 1,5 raza większa niż 4 — pole też.",
          ua: "При a = 10: P₁ = 10 · 4 / 2 = 20, P₂ = 10 · 6 / 2 = 30. Більше 30. Висота 6 у 1,5 раза більша за 4 — площа теж."
        },
        mistakes: [
          {
            answer: 20,
            feedback: {
              pl: "To pole niższego trójkąta. Pytanie o większe: wysokość 6.",
              ua: "Це площа нижчого трикутника. Питання про більше: висота 6."
            }
          },
          {
            answer: 60,
            feedback: {
              pl: "Zapomniałeś : 2. 10 · 6 = 60 to równoległobok.",
              ua: "Забув : 2. 10 · 6 = 60 — паралелограм."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Pole",
        ua: "Чи вже вмію? Площа"
      },
      task: {
        id: "troj-check-pole",
        type: "input-number",
        level: "A",
        question: {
          pl: ["a = ", em("9"), ", h = ", em("4"), ". Pole trójkąta? Wpisz liczbę, przecinek lub kropka."],
          ua: ["a = ", em("9"), ", h = ", em("4"), ". Площа трикутника? Введи число, кому або крапку."]
        },
        answer: 18,
        hint: {
          pl: "9 · 4 / 2.",
          ua: "9 · 4 / 2."
        },
        explanation: {
          pl: "36 / 2 = 18.",
          ua: "36 / 2 = 18."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Wysokość",
        ua: "Чи вже вмію? Висота"
      },
      task: {
        id: "troj-check-h",
        type: "input-number",
        level: "B",
        question: {
          pl: ["P = ", em("15"), ", a = ", em("5"), ". Wysokość? Wpisz liczbę, przecinek lub kropka."],
          ua: ["P = ", em("15"), ", a = ", em("5"), ". Висота? Введи число, кому або крапку."]
        },
        answer: 6,
        hint: {
          pl: "h = 2P : a = 30 : 5.",
          ua: "h = 2P : a = 30 : 5."
        },
        explanation: {
          pl: "h = 2 · 15 : 5 = 6.",
          ua: "h = 2 · 15 : 5 = 6."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "P = a · h / 2",
      text: {
        pl: [
          "Trójkąt to połowa równoległoboku. Nie zapomnij : 2.",
          "Z P i a: najpierw podwój pole, potem podziel przez podstawę.",
          "Jednostki muszą być te same, zanim mnożysz."
        ],
        ua: [
          "Трикутник — половина паралелограма. Не забудь : 2.",
          "З P і a: спочатку подвої площу, потім поділи на основу.",
          "Одиниці мають бути ті самі, перш ніж множити."
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
          "Trapez złożysz z trójkąta i prostokąta. Znów pojawi się dzielenie przez 2 — tym razem przy sumie dwóch podstaw."
        ],
        ua: [
          "Трапецію складеш із трикутника і прямокутника. Знову з’явиться ділення на 2 — цього разу при сумі двох основ."
        ]
      }
    }
  ]
};
