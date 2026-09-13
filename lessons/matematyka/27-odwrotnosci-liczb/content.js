function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Para, która daje 1",
        ua: "Пара, яка дає 1"
      },
      formula: "2/3 · 3/2 = 1",
      text: {
        pl: [
          "Niektóre liczby tańczą w parach.",
          "Pomnożysz je — i wychodzi dokładnie 1. Taka para to odwrotności."
        ],
        ua: [
          "Деякі числа танцюють парами.",
          "Помножиш їх — і виходить рівно 1. Така пара — обернені числа."
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
        { pl: "podać odwrotność ułamka a/b", ua: "назвати обернене до дробу a/b" },
        { pl: "podać odwrotność liczby naturalnej", ua: "назвати обернене до натурального числа" },
        { pl: "sprawdzić, że iloczyn odwrotności to 1", ua: "перевірити, що добуток обернених — це 1" },
        { pl: "wiedzieć, że 0 nie ma odwrotności", ua: "знати, що 0 не має оберненого" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Dwa ułamki, jeden punkt „1”",
        ua: "Два дроби, одна точка «1»"
      },
      visual: { kind: "number-line", min: 0, max: 2, marks: [1] },
      text: {
        pl: [
          ["Na osi kropka stoi przy ", em("1"), "."],
          ["", em("2/3"), " jest na lewo, ", em("3/2"), " na prawo — a ich iloczyn ląduje właśnie tu."]
        ],
        ua: [
          ["На осі крапка стоїть біля ", em("1"), "."],
          ["", em("2/3"), " ліворуч, ", em("3/2"), " праворуч — а їхній добуток сідає саме тут."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Odwróć ułamek",
        ua: "Переверни дріб"
      },
      formula: "a/b  →  b/a",
      text: {
        pl: [
          ["Odwrotność ", em("a/b"), " to ", em("b/a"), " — licznik i mianownik zamieniają się miejscami."],
          ["Dlatego ", em("2/3"), " ma odwrotność ", em("3/2"), "."],
          ["Sprawdzenie: ", em("2/3 · 3/2 = 6/6 = 1"), "."]
        ],
        ua: [
          ["Обернене до ", em("a/b"), " — це ", em("b/a"), ": чисельник і знаменник міняються місцями."],
          ["Тому ", em("2/3"), " має обернене ", em("3/2"), "."],
          ["Перевірка: ", em("2/3 · 3/2 = 6/6 = 1"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Liczba naturalna to też ułamek",
        ua: "Натуральне число — теж дріб"
      },
      formula: "4 = 4/1  →  1/4",
      text: {
        pl: [
          ["", em("4"), " to ", em("4/1"), ". Odwróć: ", em("1/4"), "."],
          ["", em("4 · (1/4) = 1"), " — cztery ćwiartki składają się w całość."],
          ["", em("1"), " ma odwrotność ", em("1"), ", bo ", em("1 · 1 = 1"), "."]
        ],
        ua: [
          ["", em("4"), " — це ", em("4/1"), ". Переверни: ", em("1/4"), "."],
          ["", em("4 · (1/4) = 1"), " — чотири чверті складаються в ціле."],
          ["", em("1"), " має обернене ", em("1"), ", бо ", em("1 · 1 = 1"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Zero zostaje samo",
        ua: "Нуль лишається сам"
      },
      formula: "0 · ? = 1    — niemożliwe",
      text: {
        pl: [
          "Odwrotność ma dać 1 po pomnożeniu.",
          ["", em("0"), " razy cokolwiek to ", em("0"), ", nigdy ", em("1"), "."],
          "Dlatego 0 nie ma odwrotności. Nie odwracamy też ułamka z mianownikiem 0 — takiego ułamka nie ma."
        ],
        ua: [
          "Обернене має дати 1 після множення.",
          ["", em("0"), " рази будь-що — це ", em("0"), ", ніколи ", em("1"), "."],
          "Тому 0 не має оберненого. Не перевертаємо й дріб зі знаменником 0 — такого дробу немає."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Odwrotność 3/5",
        ua: "Обернене до 3/5"
      },
      reveal: true,
      steps: [
        { formula: "3/5  →  5/3" },
        { formula: "3/5 · 5/3 = 15/15" },
        {
          formula: "1",
          text: {
            pl: "Para się zgadza.",
            ua: "Пара сходиться."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Odwrotność 5",
        ua: "Обернене до 5"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 1 },
      reveal: true,
      steps: [
        { formula: "5 = 5/1" },
        { formula: "odwrotność: 1/5" },
        {
          formula: "5 · (1/5) = 1",
          text: {
            pl: "Pięć takich pasków jak ten złoży się w całość.",
            ua: "П’ять таких смужок, як ця, складуться в ціле."
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
        { pl: "odwrotność", ua: "обернене число" },
        { pl: "iloczyn", ua: "добуток" },
        { pl: "liczba naturalna", ua: "натуральне число" },
        { pl: "nie ma odwrotności", ua: "не має оберненого" }
      ],
      phrases: [
        { pl: "Podaj odwrotność liczby.", ua: "Назви обернене число." },
        { pl: "Sprawdź, że iloczyn wynosi 1.", ua: "Перевір, що добуток дорівнює 1." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Odwróć 2/7",
        ua: "Переверни 2/7"
      },
      task: {
        id: "ul27-guided-27",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jaka jest odwrotność ", em("2/7"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яке обернене до ", em("2/7"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["7/2", "3 1/2"],
        hint: {
          pl: "Zamień licznik z mianownikiem.",
          ua: "Поміняй чисельник зі знаменником."
        },
        explanation: {
          pl: "2/7 → 7/2. 7/2 = 3 1/2.",
          ua: "2/7 → 7/2. 7/2 = 3 1/2."
        },
        mistakes: [
          {
            answer: "2/7",
            feedback: {
              pl: "To ten sam ułamek, nie odwrócony.",
              ua: "Це той самий дріб, не перевернутий."
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
        pl: "Odwrotność 3/4 to 4/5",
        ua: "Обернене до 3/4 — це 4/5"
      },
      text: {
        pl: [
          "Ktoś dodał 1 do obu liczb.",
          "Odwrotność to zamiana miejsc, nie sąsiad na osi.",
          ["Odwrotność ", em("3/4"), " to ", em("4/3"), "."]
        ],
        ua: [
          "Хтось додав 1 до обох чисел.",
          "Обернене — це зміна місць, не сусід на осі.",
          ["Обернене до ", em("3/4"), " — це ", em("4/3"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Jedna piąta w drugą stronę",
        ua: "Одна п’ята в інший бік"
      },
      task: {
        id: "ul27-odwrot-15",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jaka jest odwrotność ", em("1/5"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), " — albo samą liczbę, jeśli wyjdzie całość."],
          ua: ["Яке обернене до ", em("1/5"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), " — або саме число, якщо вийде ціле."]
        },
        answer: ["5", "5/1"],
        hint: {
          pl: "1/5 → 5/1, a to po prostu 5.",
          ua: "1/5 → 5/1, а це просто 5."
        },
        explanation: {
          pl: "Odwrotność 1/5 to 5.",
          ua: "Обернене до 1/5 — це 5."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czwórka",
        ua: "Четвірка"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 1 },
      task: {
        id: "ul27-odwrot-4",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jaka jest odwrotność liczby ", em("4"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яке обернене до числа ", em("4"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/4",
        hint: {
          pl: "4 = 4/1. Odwróć.",
          ua: "4 = 4/1. Переверни."
        },
        explanation: {
          pl: "4 → 1/4.",
          ua: "4 → 1/4."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Odwróć 5/2",
        ua: "Переверни 5/2"
      },
      task: {
        id: "ul27-odwrot-52",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jaka jest odwrotność ", em("5/2"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яке обернене до ", em("5/2"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "2/5",
        hint: {
          pl: "Zamień 5 i 2 miejscami.",
          ua: "Поміняй 5 і 2 місцями."
        },
        explanation: {
          pl: "5/2 → 2/5.",
          ua: "5/2 → 2/5."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czy iloczyn to 1?",
        ua: "Чи добуток — це 1?"
      },
      task: {
        id: "ul27-tf-iloczyn-1",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Zdanie: ", em("2/3 · 3/2 = 1"), "."],
          ua: ["Речення: ", em("2/3 · 3/2 = 1"), "."]
        },
        answer: true,
        hint: {
          pl: "2 · 3 = 6 i 3 · 2 = 6, więc 6/6.",
          ua: "2 · 3 = 6 і 3 · 2 = 6, отже 6/6."
        },
        explanation: {
          pl: "2/3 · 3/2 = 6/6 = 1. To definicja odwrotności.",
          ua: "2/3 · 3/2 = 6/6 = 1. Це означення оберненого."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dlaczego 4 · (1/4) = 1?",
        ua: "Чому 4 · (1/4) = 1?"
      },
      text: {
        pl: [
          ["Tomek składa pasek z ", em("4"), " ćwiartek."],
          "Ile całości dostanie?"
        ],
        ua: [
          ["Томек складає смужку з ", em("4"), " чвертей."],
          "Скільки цілих отримає?"
        ]
      },
      visual: { kind: "fraction-bar", total: 4, filled: 4 },
      task: {
        id: "ul27-myslenie-4-14",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile to ", em("4 · (1/4)"), "? Wpisz liczbę."],
          ua: ["Скільки це ", em("4 · (1/4)"), "? Введи число."]
        },
        answer: 1,
        hint: {
          pl: "Cztery razy jedna czwarta. Albo 4/4.",
          ua: "Чотири рази одна четверта. Або 4/4."
        },
        explanation: {
          pl: "4 · (1/4) = 4/4 = 1. Dlatego 1/4 jest odwrotnością 4.",
          ua: "4 · (1/4) = 4/4 = 1. Тому 1/4 — обернене до 4."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Która para?",
        ua: "Яка пара?"
      },
      text: {
        pl: [
          "Odwrotności po pomnożeniu dają 1.",
          "Wskaż parę, która tak działa."
        ],
        ua: [
          "Обернені після множення дають 1.",
          "Вкажи пару, яка так працює."
        ]
      },
      task: {
        id: "ul27-para-25-52",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która para to odwrotności?",
          ua: "Яка пара — обернені числа?"
        },
        options: [
          { id: "a", label: { pl: "2/5 i 5/2", ua: "2/5 і 5/2" } },
          { id: "b", label: { pl: "2/5 i 2/5", ua: "2/5 і 2/5" } },
          { id: "c", label: { pl: "2/5 i 3/5", ua: "2/5 і 3/5" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz iloczyn. Ma wyjść 1.",
          ua: "Полічи добуток. Має вийти 1."
        },
        explanation: {
          pl: "2/5 · 5/2 = 10/10 = 1. Para a.",
          ua: "2/5 · 5/2 = 10/10 = 1. Пара a."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "2/5 · 2/5 = 4/25, nie 1.",
              ua: "2/5 · 2/5 = 4/25, не 1."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "2/5 · 3/5 = 6/25. To sąsiedzi z tym samym mianownikiem, nie odwrotności.",
              ua: "2/5 · 3/5 = 6/25. Це сусіди з тим самим знаменником, не обернені."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która liczba nie ma pary?",
        ua: "Яке число не має пари?"
      },
      text: {
        pl: [
          "Odwrotność musi po pomnożeniu dać 1.",
          "Jedna z tych liczb nigdy tego nie zrobi."
        ],
        ua: [
          "Обернене після множення має дати 1.",
          "Одне з цих чисел ніколи цього не зробить."
        ]
      },
      task: {
        id: "ul27-challenge-zero",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która liczba nie ma odwrotności?",
          ua: "Яке число не має оберненого?"
        },
        options: [
          { id: "a", label: { pl: "0", ua: "0" } },
          { id: "b", label: { pl: "1", ua: "1" } },
          { id: "c", label: { pl: "1/2", ua: "1/2" } }
        ],
        answer: "a",
        hint: {
          pl: "Co wychodzi, gdy mnożysz zero przez cokolwiek?",
          ua: "Що виходить, коли множиш нуль на будь-що?"
        },
        explanation: {
          pl: "0 · cokolwiek = 0, nigdy 1. Więc 0 nie ma odwrotności. 1 · 1 = 1, a 1/2 · 2 = 1.",
          ua: "0 · будь-що = 0, ніколи 1. Отже 0 не має оберненого. 1 · 1 = 1, а 1/2 · 2 = 1."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "1 ma odwrotność 1, bo 1 · 1 = 1.",
              ua: "1 має обернене 1, бо 1 · 1 = 1."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1/2 ma odwrotność 2, bo 1/2 · 2 = 1.",
              ua: "1/2 має обернене 2, бо 1/2 · 2 = 1."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Liczba naturalna",
        ua: "Чи вже вмію? Натуральне число"
      },
      task: {
        id: "ul27-check-3",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jaka jest odwrotność liczby ", em("3"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яке обернене до числа ", em("3"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/3",
        hint: {
          pl: "3 = 3/1.",
          ua: "3 = 3/1."
        },
        explanation: {
          pl: "3 → 1/3.",
          ua: "3 → 1/3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Ułamek",
        ua: "Чи вже вмію? Дріб"
      },
      task: {
        id: "ul27-check-47",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jaka jest odwrotność ", em("4/7"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яке обернене до ", em("4/7"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["7/4", "1 3/4"],
        hint: {
          pl: "Zamień 4 i 7.",
          ua: "Поміняй 4 і 7."
        },
        explanation: {
          pl: "4/7 → 7/4 = 1 3/4.",
          ua: "4/7 → 7/4 = 1 3/4."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "a/b  →  b/a      oraz      a/b · b/a = 1",
      visual: { kind: "number-line", min: 0, max: 2, marks: [1] },
      text: {
        pl: [
          "Odwrotność: odwróć ułamek. Liczba n to n/1, odwrotność 1/n.",
          "Iloczyn pary to 1.",
          "Zero nie ma odwrotności."
        ],
        ua: [
          "Обернене: переверни дріб. Число n — це n/1, обернене 1/n.",
          "Добуток пари — 1.",
          "Нуль не має оберненого."
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
          "Dzielenie ułamków zaczyna się od pytania: jaka jest odwrotność dzielnika?",
          "Potem mnożysz — a mnożenie już umiesz."
        ],
        ua: [
          "Ділення дробів починається з питання: яке обернене до дільника?",
          "Потім множиш — а множення вже вмієш."
        ]
      }
    }
  ]
};
