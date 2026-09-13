function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Ile razy ćwiartka mieści się w połówce?",
        ua: "Скільки разів чверть вміщається в половині?"
      },
      formula: "1/2 : 1/4 = 2",
      text: {
        pl: [
          "Nie „krój jeszcze drobniej”. Pytanie brzmi: ile razy mniejszy kawałek wchodzi w większy.",
          "Dzielenie ułamków to mnożenie przez odwrotność."
        ],
        ua: [
          "Не «крій ще дрібніше». Питання таке: скільки разів менший шматочок входить у більший.",
          "Ділення дробів — це множення на обернене."
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
        { pl: "zamienić dzielenie ułamków na mnożenie przez odwrotność", ua: "замінити ділення дробів на множення на обернене" },
        { pl: "policzyć, ile razy jeden ułamek mieści się w drugim", ua: "полічити, скільки разів один дріб вміщається в другому" },
        { pl: "odróżnić 1/2 : 1/4 od 1/2 · 1/4", ua: "відрізнити 1/2 : 1/4 від 1/2 · 1/4" },
        { pl: "rozwiązać zadanie o wstążce i porcjach", ua: "розв’язати задачу про стрічку і порції" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Połówka z ćwiartek",
        ua: "Половина з чвертей"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 2 },
      text: {
        pl: [
          ["Pasek to całość. Zamalowano ", em("2"), " z ", em("4"), " — to ", em("1/2"), "."],
          ["Jedna kratka to ", em("1/4"), ". Ile takich kratek stoi w zamalowanym kawałku?"]
        ],
        ua: [
          ["Смужка — ціле. Замальовано ", em("2"), " з ", em("4"), " — це ", em("1/2"), "."],
          ["Одна клітинка — ", em("1/4"), ". Скільки таких клітинок стоїть у замальованому шматку?"]
        ]
      },
      prompt: {
        pl: [
          ["Dwie. Więc ", em("1/2 : 1/4 = 2"), " — ćwiartka mieści się w połówce dwa razy."]
        ],
        ua: [
          ["Дві. Отже ", em("1/2 : 1/4 = 2"), " — чверть вміщається в половині двічі."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Dzielisz? Mnożysz przez odwrotność",
        ua: "Ділиш? Множиш на обернене"
      },
      formula: "a/b : c/d = a/b · d/c",
      text: {
        pl: [
          "Zostaw pierwszy ułamek.",
          "Drugi odwróć — i pomnóż, tak jak wczoraj.",
          ["", em("1/2 : 1/4 = 1/2 · 4/1 = 4/2 = 2"), "."]
        ],
        ua: [
          "Залиш перший дріб.",
          "Другий переверни — і помнож, як учора.",
          ["", em("1/2 : 1/4 = 1/2 · 4/1 = 4/2 = 2"), "."]
        ]
      }
    },
    {
      type: "comparison",
      heading: {
        pl: "Dzielenie to nie mnożenie",
        ua: "Ділення — це не множення"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "1/2 : 1/4", result: "2", caption: "ile razy mieści się" },
        right: { expr: "1/2 · 1/4", result: "1/8", caption: "kawałek z kawałka" }
      },
      prompt: {
        pl: [
          "Po lewej: ile ćwiartek w połówce.",
          "Po prawej: połowa ćwiartki — dużo mniejszy kawałek."
        ],
        ua: [
          "Ліворуч: скільки чвертей у половині.",
          "Праворуч: половина чверті — набагато менший шматочок."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "2/3 : 1/6",
        ua: "2/3 : 1/6"
      },
      reveal: true,
      steps: [
        { formula: "2/3 : 1/6 = 2/3 · 6/1" },
        { formula: "(2 · 6)/(3 · 1) = 12/3" },
        {
          formula: "4",
          text: {
            pl: ["Szóstka mieści się w dwóch trzecich ", em("4"), " razy."],
            ua: ["Шоста вміщається у двох третіх ", em("4"), " рази."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "3/4 : 1/2",
        ua: "3/4 : 1/2"
      },
      reveal: true,
      steps: [
        { formula: "3/4 : 1/2 = 3/4 · 2/1" },
        { formula: "6/4" },
        {
          formula: "3/2 = 1 1/2",
          text: {
            pl: "Połówka mieści się w trzech czwartych półtora raza.",
            ua: "Половина вміщається в трьох четвертих півтора раза."
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
        { pl: "dzielenie ułamków", ua: "ділення дробів" },
        { pl: "odwrotność dzielnika", ua: "обернене до дільника" },
        { pl: "iloraz", ua: "частка" },
        { pl: "ile razy mieści się", ua: "скільки разів вміщається" }
      ],
      phrases: [
        { pl: "Podziel ułamki.", ua: "Поділи дроби." },
        { pl: "Zamień dzielenie na mnożenie przez odwrotność.", ua: "Заміни ділення на множення на обернене." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Trzecia przez szóstą",
        ua: "Третя через шосту"
      },
      task: {
        id: "ul28-guided-13-16",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/3 : 1/6"), ". Wpisz liczbę."],
          ua: ["Обчисли ", em("1/3 : 1/6"), ". Введи число."]
        },
        answer: 2,
        hint: {
          pl: "1/3 · 6/1. Ile szóstek jest w jednej trzeciej?",
          ua: "1/3 · 6/1. Скільки шостих в одній третій?"
        },
        explanation: {
          pl: "1/3 : 1/6 = 1/3 · 6/1 = 6/3 = 2.",
          ua: "1/3 : 1/6 = 1/3 · 6/1 = 6/3 = 2."
        },
        mistakes: [
          {
            answer: "1/18",
            feedback: {
              pl: "To byłoby 1/3 · 1/6. Dzielenie odwraca drugi ułamek.",
              ua: "Так було б 1/3 · 1/6. Ділення перевертає другий дріб."
            }
          },
          {
            answer: 18,
            feedback: {
              pl: "3 · 6 to za dużo. 1/3 · 6/1 = 6/3 = 2.",
              ua: "3 · 6 — забагато. 1/3 · 6/1 = 6/3 = 2."
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
        pl: "1/2 : 1/4 = 1/8",
        ua: "1/2 : 1/4 = 1/8"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 2 },
      text: {
        pl: [
          "To wynik mnożenia 1/2 · 1/4, nie dzielenia.",
          "Na pasku widać: dwie ćwiartki składają się na połówkę.",
          ["", em("1/2 : 1/4 = 2"), ", a ", em("1/8"), " to dużo mniejszy kawałek."]
        ],
        ua: [
          "Це результат множення 1/2 · 1/4, не ділення.",
          "На смужці видно: дві чверті складають половину.",
          ["", em("1/2 : 1/4 = 2"), ", а ", em("1/8"), " — набагато менший шматочок."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Połówka przez trzecią",
        ua: "Половина через третю"
      },
      task: {
        id: "ul28-12-przez-13",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/2 : 1/3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/2 : 1/3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/2", "1 1/2"],
        hint: {
          pl: "1/2 · 3/1 = 3/2.",
          ua: "1/2 · 3/1 = 3/2."
        },
        explanation: {
          pl: "1/2 : 1/3 = 1/2 · 3/1 = 3/2 = 1 1/2.",
          ua: "1/2 : 1/3 = 1/2 · 3/1 = 3/2 = 1 1/2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ile połówek w trójce?",
        ua: "Скільки половин у трійці?"
      },
      visual: { kind: "number-line", min: 0, max: 3, marks: [0.5, 1, 1.5, 2, 2.5, 3] },
      task: {
        id: "ul28-3-przez-12",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("3 : (1/2)"), ". Ile razy połówka mieści się w ", em("3"), "?"],
          ua: ["Обчисли ", em("3 : (1/2)"), ". Скільки разів половина вміщається в ", em("3"), "?"]
        },
        answer: 6,
        hint: {
          pl: "3 · 2/1 = 6.",
          ua: "3 · 2/1 = 6."
        },
        explanation: {
          pl: "3 : (1/2) = 3 · 2 = 6.",
          ua: "3 : (1/2) = 3 · 2 = 6."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Te same mianowniki",
        ua: "Однакові знаменники"
      },
      task: {
        id: "ul28-25-przez-15",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2/5 : 1/5"), ". Wpisz liczbę."],
          ua: ["Обчисли ", em("2/5 : 1/5"), ". Введи число."]
        },
        answer: 2,
        hint: {
          pl: "2/5 · 5/1. Albo: ile jednych piątych jest w dwóch piątych?",
          ua: "2/5 · 5/1. Або: скільки одних п’ятих у двох п’ятих?"
        },
        explanation: {
          pl: "2/5 : 1/5 = 2/5 · 5/1 = 10/5 = 2.",
          ua: "2/5 : 1/5 = 2/5 · 5/1 = 10/5 = 2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Trzy czwarte przez dwie trzecie",
        ua: "Три четвертих через дві третіх"
      },
      task: {
        id: "ul28-34-przez-23",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("3/4 : 2/3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("3/4 : 2/3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["9/8", "1 1/8"],
        hint: {
          pl: "3/4 · 3/2.",
          ua: "3/4 · 3/2."
        },
        explanation: {
          pl: "3/4 : 2/3 = 3/4 · 3/2 = 9/8 = 1 1/8.",
          ua: "3/4 : 2/3 = 3/4 · 3/2 = 9/8 = 1 1/8."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Wstążka na kokardy",
        ua: "Стрічка на банти"
      },
      text: {
        pl: [
          ["Wstążka ma ", em("1/2"), " metra."],
          ["Na jedną kokardę trzeba ", em("1/8"), " metra."]
        ],
        ua: [
          ["Стрічка має ", em("1/2"), " метра."],
          ["На один бант треба ", em("1/8"), " метра."]
        ]
      },
      visual: { kind: "fraction-bar", total: 8, filled: 4 },
      task: {
        id: "ul28-wstazka-12-18",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile kokard wyjdzie z wstążki? Wpisz liczbę."],
          ua: ["Скільки бантів вийде зі стрічки? Введи число."]
        },
        answer: 4,
        hint: {
          pl: "1/2 : 1/8 = 1/2 · 8/1.",
          ua: "1/2 : 1/8 = 1/2 · 8/1."
        },
        explanation: {
          pl: "1/2 : 1/8 = 1/2 · 8 = 4 kokardy.",
          ua: "1/2 : 1/8 = 1/2 · 8 = 4 банти."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Porcje ciasta",
        ua: "Порції торта"
      },
      text: {
        pl: [
          ["Zostało ", em("3/4"), " ciasta."],
          ["Jedna porcja to ", em("1/8"), " ciasta."]
        ],
        ua: [
          ["Лишилось ", em("3/4"), " торта."],
          ["Одна порція — ", em("1/8"), " торта."]
        ]
      },
      task: {
        id: "ul28-porcje-34-18",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile porcji można rozdać? Wpisz liczbę."],
          ua: ["Скільки порцій можна роздати? Введи число."]
        },
        answer: 6,
        hint: {
          pl: "3/4 : 1/8. 3/4 = 6/8.",
          ua: "3/4 : 1/8. 3/4 = 6/8."
        },
        explanation: {
          pl: "3/4 : 1/8 = 3/4 · 8/1 = 24/4 = 6 porcji.",
          ua: "3/4 : 1/8 = 3/4 · 8/1 = 24/4 = 6 порцій."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Dlaczego 2, a nie 1/8?",
        ua: "Чому 2, а не 1/8?"
      },
      text: {
        pl: [
          ["Dwoje dzieci policzyło ", em("1/2 : 1/4"), "."],
          ["Ola dostała ", em("2"), ". Tomek dostał ", em("1/8"), "."]
        ],
        ua: [
          ["Двоє дітей полічили ", em("1/2 : 1/4"), "."],
          ["Оля отримала ", em("2"), ". Томек — ", em("1/8"), "."]
        ]
      },
      task: {
        id: "ul28-challenge-nie-18",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dlaczego 1/2 : 1/4 = 2, a nie 1/8?",
          ua: "Чому 1/2 : 1/4 = 2, а не 1/8?"
        },
        options: [
          { id: "a", label: { pl: "Bo dzielimy liczniki i mianowniki osobno: 1:1 i 2:4", ua: "Бо ділимо чисельники і знаменники окремо: 1:1 і 2:4" } },
          { id: "b", label: { pl: "Bo 1/4 mieści się w 1/2 dwa razy; 1/8 to wynik mnożenia 1/2 · 1/4", ua: "Бо 1/4 вміщається в 1/2 двічі; 1/8 — результат множення 1/2 · 1/4" } },
          { id: "c", label: { pl: "Bo 2 to suma 1/2 + 1/4 + 1/4", ua: "Бо 2 — це сума 1/2 + 1/4 + 1/4" } }
        ],
        answer: "b",
        hint: {
          pl: "Popatrz na pasek z czterema kratkami. Ile zamalowanych ćwiartek?",
          ua: "Подивись на смужку з чотирма клітинками. Скільки замальованих чвертей?"
        },
        explanation: {
          pl: "Dzielenie pyta: ile razy. Ćwiartka wchodzi w połówkę dwa razy. 1/8 powstaje, gdy pomnożysz zamiast dzielić.",
          ua: "Ділення питає: скільки разів. Чверть входить у половину двічі. 1/8 виникає, коли множиш замість ділити."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Tak się nie dzieli ułamków. Odwracasz drugi i mnożysz.",
              ua: "Так дроби не ділять. Перевертаєш другий і множиш."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1/2 + 1/4 + 1/4 = 1, nie 2. To nie wyjaśnia ilorazu.",
              ua: "1/2 + 1/4 + 1/4 = 1, не 2. Це не пояснює частку."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Ile razy",
        ua: "Чи вже вмію? Скільки разів"
      },
      visual: { kind: "fraction-bar", total: 8, filled: 2 },
      task: {
        id: "ul28-check-14-18",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/4 : 1/8"), ". Wpisz liczbę."],
          ua: ["Обчисли ", em("1/4 : 1/8"), ". Введи число."]
        },
        answer: 2,
        hint: {
          pl: "1/4 = 2/8. Ile ósmych w jednej czwartej?",
          ua: "1/4 = 2/8. Скільки восьмих в одній четвертій?"
        },
        explanation: {
          pl: "1/4 : 1/8 = 1/4 · 8/1 = 8/4 = 2.",
          ua: "1/4 : 1/8 = 1/4 · 8/1 = 8/4 = 2."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Odwróć i pomnóż",
        ua: "Чи вже вмію? Переверни і помнож"
      },
      task: {
        id: "ul28-check-23-12",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2/3 : 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/3 : 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["4/3", "1 1/3"],
        hint: {
          pl: "2/3 · 2/1.",
          ua: "2/3 · 2/1."
        },
        explanation: {
          pl: "2/3 : 1/2 = 2/3 · 2/1 = 4/3 = 1 1/3.",
          ua: "2/3 : 1/2 = 2/3 · 2/1 = 4/3 = 1 1/3."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "a/b : c/d = a/b · d/c",
      visual: { kind: "fraction-bar", total: 4, filled: 2 },
      text: {
        pl: [
          "Dzielenie = mnożenie przez odwrotność dzielnika.",
          ["", em("1/2 : 1/4 = 2"), " — ćwiartka mieści się w połówce dwa razy, to nie ", em("1/8"), "."]
        ],
        ua: [
          "Ділення = множення на обернене до дільника.",
          ["", em("1/2 : 1/4 = 2"), " — чверть вміщається в половині двічі, це не ", em("1/8"), "."]
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
          "W następnym temacie ułamki spotkają się z kolejnością działań.",
          "Najpierw nawias, potem · i :, na końcu + i − — tak samo jak przy liczbach naturalnych."
        ],
        ua: [
          "У наступній темі дроби зустрінуться з порядком дій.",
          "Спочатку дужка, потім · і :, наприкінці + і − — так само, як при натуральних числах."
        ]
      }
    }
  ]
};
