function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Inny zapis, to samo miejsce",
        ua: "Інший запис — те саме місце"
      },
      formula: "1/2 = 2/4",
      text: {
        pl: [
          "Dwa ułamki mogą wyglądać inaczej, a oznaczać ten sam kawałek.",
          "Dziś nauczymy się je rozszerzać i skracać — bez zgadywania."
        ],
        ua: [
          "Два дроби можуть виглядати інакше, а означати той самий шматочок.",
          "Сьогодні навчимося їх розширювати і скорочувати — без вгадування."
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
        { pl: "rozszerzyć ułamek, mnożąc licznik i mianownik przez tę samą liczbę", ua: "розширити дріб, помноживши чисельник і знаменник на те саме число" },
        { pl: "skrócić ułamek przez wspólny dzielnik", ua: "скоротити дріб на спільний дільник" },
        { pl: "zobaczyć równe ułamki na osi", ua: "побачити рівні дроби на осі" },
        { pl: "rozpoznać pary, które są równe, choć wyglądają inaczej", ua: "розпізнати пари, які рівні, хоч виглядають інакше" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Ten sam kawałek",
        ua: "Той самий шматочок"
      },
      visual: { kind: "fraction-bar", total: 2, filled: 1 },
      text: {
        pl: [
          "Pasek: jedna z dwóch kratek. To połowa.",
          "Zaraz pęknie na mniejsze kratki — zamalowany kawałek zostanie ten sam."
        ],
        ua: [
          "Смужка: одна з двох клітинок. Це половина.",
          "Зараз трісне на менші клітинки — замальований шматочок лишиться той самий."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Połówka w czterech kratkach",
        ua: "Половина в чотирьох клітинках"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 2 },
      prompt: {
        pl: [
          ["Zamalowano ", em("2"), " z ", em("4"), " — nadal połowa paska."],
          ["", em("1/2"), " i ", em("2/4"), " zajmują to samo miejsce."]
        ],
        ua: [
          ["Замальовано ", em("2"), " з ", em("4"), " — досі половина смужки."],
          ["", em("1/2"), " і ", em("2/4"), " займають те саме місце."]
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Na osi też to samo",
        ua: "На осі теж те саме"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.5] },
      text: {
        pl: [
          ["Kropka stoi w połowie drogi od ", em("0"), " do ", em("1"), "."],
          ["Tam mieszka ", em("1/2"), ", ", em("2/4"), " i ", em("3/6"), " — jeden punkt, wiele zapisów."]
        ],
        ua: [
          ["Крапка стоїть на середині шляху від ", em("0"), " до ", em("1"), "."],
          ["Там живуть ", em("1/2"), ", ", em("2/4"), " і ", em("3/6"), " — одна точка, багато записів."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Rozszerzanie: mnożymy obie liczby",
        ua: "Розширення: множимо обидва числа"
      },
      formula: "1/3 = (1 · 2)/(3 · 2) = 2/6",
      text: {
        pl: [
          "Licznik i mianownik mnożymy przez tę samą liczbę — różną od zera.",
          "Kawałek się nie zmienia. Tylko kratki stają się drobniejsze."
        ],
        ua: [
          "Чисельник і знаменник множимо на те саме число — відмінне від нуля.",
          "Шматочок не змінюється. Лише клітинки стають дрібнішими."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Skracanie: dzielimy przez wspólny dzielnik",
        ua: "Скорочення: ділимо на спільний дільник"
      },
      formula: "6/8 = (6 : 2)/(8 : 2) = 3/4",
      text: {
        pl: [
          ["", em("6"), " i ", em("8"), " mają wspólny dzielnik ", em("2"), "."],
          "Dzielimy licznik i mianownik przez ten sam wspólny dzielnik.",
          "Nie odejmujemy „po jedynce” od góry i dołu — to inna historia i zły ruch."
        ],
        ua: [
          ["", em("6"), " і ", em("8"), " мають спільний дільник ", em("2"), "."],
          "Ділимо чисельник і знаменник на той самий спільний дільник.",
          "Не віднімаємо «по одиниці» згори і знизу — це інша історія і поганий хід."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Rozszerz 1/2 do mianownika 6",
        ua: "Розшир 1/2 до знаменника 6"
      },
      reveal: true,
      steps: [
        { formula: "1/2 = ?/6" },
        {
          formula: "2 · 3 = 6",
          text: {
            pl: ["Mianownik pomnożono przez ", em("3"), ", więc licznik też przez ", em("3"), "."],
            ua: ["Знаменник помножили на ", em("3"), ", отже чисельник теж на ", em("3"), "."]
          }
        },
        {
          formula: "1/2 = 3/6",
          text: {
            pl: ["", em("1 · 3 = 3"), ". Zapis ", em("3/6"), " to nadal połowa."],
            ua: ["", em("1 · 3 = 3"), ". Запис ", em("3/6"), " — досі половина."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Skróć 8/12",
        ua: "Скороти 8/12"
      },
      reveal: true,
      steps: [
        {
          formula: "8 i 12 — wspólny dzielnik 4",
          text: {
            pl: ["Można też najpierw przez ", em("2"), ", potem znowu przez ", em("2"), "."],
            ua: ["Можна спочатку на ", em("2"), ", потім знову на ", em("2"), "."]
          }
        },
        { formula: "8 : 4 = 2,    12 : 4 = 3" },
        {
          formula: "8/12 = 2/3",
          text: {
            pl: "Kawałek ten sam, zapis krótszy.",
            ua: "Шматочок той самий, запис коротший."
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
        { pl: "rozszerzanie ułamka", ua: "розширення дробу" },
        { pl: "skracanie ułamka", ua: "скорочення дробу" },
        { pl: "wspólny dzielnik", ua: "спільний дільник" },
        { pl: "równe ułamki", ua: "рівні дроби" },
        { pl: "oś liczbowa", ua: "числова вісь" }
      ],
      phrases: [
        { pl: "Rozszerz ułamek.", ua: "Розшир дріб." },
        { pl: "Skróć ułamek.", ua: "Скороти дріб." },
        { pl: "Czy te ułamki są równe?", ua: "Чи ці дроби рівні?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Skróć przez dwójkę",
        ua: "Скороти на двійку"
      },
      visual: { kind: "fraction-bar", total: 8, filled: 4 },
      task: {
        id: "ul22-guided-skroc",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Skróć ", em("4/8"), " przez wspólny dzielnik ", em("4"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скороти ", em("4/8"), " на спільний дільник ", em("4"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/2",
        hint: {
          pl: "4 : 4 = 1 i 8 : 4 = 2. Zostanie 1/2.",
          ua: "4 : 4 = 1 і 8 : 4 = 2. Залишиться 1/2."
        },
        explanation: {
          pl: "4/8 = (4 : 4)/(8 : 4) = 1/2.",
          ua: "4/8 = (4 : 4)/(8 : 4) = 1/2."
        },
        mistakes: [
          {
            answer: "3/7",
            feedback: {
              pl: "Odjąłeś 1 od góry i dołu. Skracanie to dzielenie, nie odejmowanie.",
              ua: "Відняв 1 згори і знизу. Скорочення — це ділення, не віднімання."
            }
          },
          {
            answer: "4/4",
            feedback: {
              pl: "Skróciłeś tylko mianownik. Obie liczby dzielimy przez ten sam wspólny dzielnik.",
              ua: "Скоротив лише знаменник. Обидва числа ділимо на той самий спільний дільник."
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
        pl: "2/4 = 1/3",
        ua: "2/4 = 1/3"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.5] },
      text: {
        pl: [
          "Ktoś odjął 1 od licznika i od mianownika.",
          ["", em("2 − 1 = 1"), ", ", em("4 − 1 = 3"), " — ale to nie jest skracanie."],
          ["Skracamy przez dzielenie. ", em("2/4 = 1/2"), ", a nie ", em("1/3"), "."]
        ],
        ua: [
          "Хтось відняв 1 від чисельника і від знаменника.",
          ["", em("2 − 1 = 1"), ", ", em("4 − 1 = 3"), " — але це не скорочення."],
          ["Скорочуємо діленням. ", em("2/4 = 1/2"), ", а не ", em("1/3"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Rozszerz przez trójkę",
        ua: "Розшир на трійку"
      },
      task: {
        id: "ul22-rozszerz-12",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Rozszerz ", em("1/2"), " mnożąc licznik i mianownik przez ", em("3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Розшир ", em("1/2"), ", помноживши чисельник і знаменник на ", em("3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/6",
        hint: {
          pl: "1 · 3 u góry, 2 · 3 na dole.",
          ua: "1 · 3 вгорі, 2 · 3 внизу."
        },
        explanation: {
          pl: "1/2 = 3/6.",
          ua: "1/2 = 3/6."
        },
        mistakes: [
          {
            answer: "1/6",
            feedback: {
              pl: "Mianownik pomnożyłeś, licznik zostawiłeś. Obie liczby mnożymy.",
              ua: "Знаменник помножив, чисельник лишив. Множимо обидва числа."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Skróć 6/9",
        ua: "Скороти 6/9"
      },
      task: {
        id: "ul22-skroc-69",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Skróć ", em("6/9"), " przez wspólny dzielnik ", em("3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скороти ", em("6/9"), " на спільний дільник ", em("3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "2/3",
        hint: {
          pl: "6 : 3 i 9 : 3.",
          ua: "6 : 3 і 9 : 3."
        },
        explanation: {
          pl: "6/9 = 2/3.",
          ua: "6/9 = 2/3."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czy 2/4 to 1/2?",
        ua: "Чи 2/4 — це 1/2?"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.5] },
      task: {
        id: "ul22-tf-rowne",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Zdanie: ", em("2/4"), " i ", em("1/2"), " stoją w tym samym punkcie osi."],
          ua: ["Речення: ", em("2/4"), " і ", em("1/2"), " стоять в одній точці осі."]
        },
        answer: true,
        hint: {
          pl: "Skróć 2/4 przez 2.",
          ua: "Скороти 2/4 на 2."
        },
        explanation: {
          pl: "2/4 = 1/2. Oba to połowa — jedna kropka na osi.",
          ua: "2/4 = 1/2. Обидва — половина, одна крапка на осі."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Który zapis to 3/5?",
        ua: "Який запис — це 3/5?"
      },
      task: {
        id: "ul22-choice-35",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Który ułamek jest równy ", em("3/5"), "?"],
          ua: ["Який дріб рівний ", em("3/5"), "?"]
        },
        options: [
          { id: "a", label: { pl: "6/10", ua: "6/10" } },
          { id: "b", label: { pl: "3/10", ua: "3/10" } },
          { id: "c", label: { pl: "5/3", ua: "5/3" } }
        ],
        answer: "a",
        hint: {
          pl: "Rozszerz 3/5 przez 2.",
          ua: "Розшир 3/5 на 2."
        },
        explanation: {
          pl: "3/5 = (3 · 2)/(5 · 2) = 6/10.",
          ua: "3/5 = (3 · 2)/(5 · 2) = 6/10."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "3/10 ma ten sam licznik, ale inny kawałek. Mianownik też trzeba pomnożyć.",
              ua: "3/10 має той самий чисельник, але інший шматочок. Знаменник теж треба помножити."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "5/3 to odwrócony ułamek, nie rozszerzony.",
              ua: "5/3 — перевернутий дріб, не розширений."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Pizza na pół",
        ua: "Піца навпіл"
      },
      text: {
        pl: [
          ["Pizzę pocięto na ", em("8"), " kawałków. Tomek zjadł ", em("2"), "."],
          ["Ania mówi: to przecież ", em("1/4"), " pizzy."]
        ],
        ua: [
          ["Піцу нарізали на ", em("8"), " шматків. Томек з’їв ", em("2"), "."],
          ["Аня каже: це ж ", em("1/4"), " піци."]
        ]
      },
      visual: { kind: "fraction-bar", total: 8, filled: 2 },
      task: {
        id: "ul22-pizza-28",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Czy ", em("2/8"), " to naprawdę to samo co ", em("1/4"), "?"],
          ua: ["Чи ", em("2/8"), " справді те саме, що ", em("1/4"), "?"]
        },
        answer: true,
        hint: {
          pl: "Skróć 2/8 przez wspólny dzielnik 2.",
          ua: "Скороти 2/8 на спільний дільник 2."
        },
        explanation: {
          pl: "2/8 = (2 : 2)/(8 : 2) = 1/4. Ania ma rację.",
          ua: "2/8 = (2 : 2)/(8 : 2) = 1/4. Аня має рацію."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Gdzie stoi 3/6?",
        ua: "Де стоїть 3/6?"
      },
      text: {
        pl: [
          ["Na osi od ", em("0"), " do ", em("1"), " ktoś zaznaczył środek."],
          ["Czy ", em("3/6"), " też tam stoi?"]
        ],
        ua: [
          ["На осі від ", em("0"), " до ", em("1"), " хтось позначив середину."],
          ["Чи ", em("3/6"), " теж там стоїть?"]
        ]
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.5] },
      task: {
        id: "ul22-os-36",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Skróć ", em("3/6"), " do najkrótszego zapisu. Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скороти ", em("3/6"), " до найкоротшого запису. Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/2",
        hint: {
          pl: "Wspólny dzielnik 3 i 6 to 3.",
          ua: "Спільний дільник 3 і 6 — це 3."
        },
        explanation: {
          pl: "3/6 = 1/2. Środek osi — to właśnie 1/2.",
          ua: "3/6 = 1/2. Середина осі — саме 1/2."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Wyglądają inaczej — a są równe",
        ua: "Виглядають інакше — а рівні"
      },
      text: {
        pl: [
          "Nie zgaduj z wyglądu. Sprawdź rozszerzaniem albo skracaniem.",
          "Która para to ten sam kawałek?"
        ],
        ua: [
          "Не вгадуй з вигляду. Перевір розширенням або скороченням.",
          "Яка пара — той самий шматочок?"
        ]
      },
      task: {
        id: "ul22-challenge-pary",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która para ułamków jest równa, choć zapisy wyglądają inaczej?",
          ua: "Яка пара дробів рівна, хоч записи виглядають інакше?"
        },
        options: [
          { id: "a", label: { pl: "1/2 i 2/5", ua: "1/2 і 2/5" } },
          { id: "b", label: { pl: "4/6 i 2/3", ua: "4/6 і 2/3" } },
          { id: "c", label: { pl: "3/5 i 3/8", ua: "3/5 і 3/8" } }
        ],
        answer: "b",
        hint: {
          pl: "Skróć 4/6 przez wspólny dzielnik 2.",
          ua: "Скороти 4/6 на спільний дільник 2."
        },
        explanation: {
          pl: "4/6 = (4 : 2)/(6 : 2) = 2/3. Para b jest równa. 1/2 ≠ 2/5, a 3/5 ≠ 3/8.",
          ua: "4/6 = (4 : 2)/(6 : 2) = 2/3. Пара b рівна. 1/2 ≠ 2/5, а 3/5 ≠ 3/8."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "1/2 = 2/4, nie 2/5. Inny mianownik, inny kawałek.",
              ua: "1/2 = 2/4, не 2/5. Інший знаменник — інший шматочок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ten sam licznik 3 nie wystarczy. 3/5 i 3/8 to różne części.",
              ua: "Той самий чисельник 3 не достатній. 3/5 і 3/8 — різні частини."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Skracanie",
        ua: "Чи вже вмію? Скорочення"
      },
      task: {
        id: "ul22-check-skroc",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Skróć ", em("5/10"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скороти ", em("5/10"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/2",
        hint: {
          pl: "Wspólny dzielnik 5 i 10 to 5.",
          ua: "Спільний дільник 5 і 10 — це 5."
        },
        explanation: {
          pl: "5/10 = 1/2.",
          ua: "5/10 = 1/2."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Rozszerzanie",
        ua: "Чи вже вмію? Розширення"
      },
      task: {
        id: "ul22-check-rozszerz",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Rozszerz ", em("2/5"), " tak, by mianownik był ", em("15"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Розшир ", em("2/5"), " так, щоб знаменник був ", em("15"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "6/15",
        hint: {
          pl: "5 · 3 = 15, więc licznik też · 3.",
          ua: "5 · 3 = 15, отже чисельник теж · 3."
        },
        explanation: {
          pl: "2/5 = (2 · 3)/(5 · 3) = 6/15.",
          ua: "2/5 = (2 · 3)/(5 · 3) = 6/15."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1/2 = 2/4 = 3/6",
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.5] },
      text: {
        pl: [
          "Rozszerzamy: mnożymy licznik i mianownik przez tę samą liczbę.",
          "Skracamy: dzielimy obie liczby przez wspólny dzielnik.",
          "Równe ułamki stoją w tym samym punkcie osi — choć wyglądają inaczej."
        ],
        ua: [
          "Розширюємо: множимо чисельник і знаменник на те саме число.",
          "Скорочуємо: ділимо обидва числа на спільний дільник.",
          "Рівні дроби стоять в одній точці осі — хоч виглядають інакше."
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
          "Później, przy dodawaniu, znów będziesz rozszerzać do wspólnego mianownika.",
          "To nie nowy materiał — ta sama zasada: obie liczby, ta sama liczba."
        ],
        ua: [
          "Пізніше, при додаванні, знову розширюватимеш до спільного знаменника.",
          "Це не новий матеріал — те саме правило: обидва числа, те саме число."
        ]
      }
    }
  ]
};
