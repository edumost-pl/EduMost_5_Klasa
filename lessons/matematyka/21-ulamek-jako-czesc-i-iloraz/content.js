function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Kawałek czekolady i dzielenie",
        ua: "Шматочок шоколаду і ділення"
      },
      formula: "3/8",
      text: {
        pl: [
          "Czekolada pęka na równe części. Bierzesz kilka.",
          "Ten sam zapis umie też powiedzieć: ile razy jedna liczba mieści się w drugiej.",
          "Dziś ułamek zobaczymy na dwa sposoby — jeszcze nic nie skracaj."
        ],
        ua: [
          "Шоколад ламається на рівні частини. Береш кілька.",
          "Той самий запис уміє сказати й інше: скільки разів одне число вміщається в другому.",
          "Сьогодні дріб побачимо двома способами — ще нічого не скорочуй."
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
        { pl: "wskazać licznik i mianownik", ua: "вказати чисельник і знаменник" },
        { pl: "odczytać ułamek jako część całości", ua: "прочитати дріб як частину цілого" },
        { pl: "zapisać ułamek z rysunku", ua: "записати дріб з малюнка" },
        { pl: "rozumieć, że a/b to to samo co a:b", ua: "розуміти, що a/b — це те саме, що a:b" },
        { pl: "odrzucić ułamek, który nie pasuje do grupy", ua: "відкинути дріб, який не пасує до групи" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Policz najpierw oczami",
        ua: "Спочатку полічи очима"
      },
      visual: { kind: "fraction-bar", total: 8, filled: 3 },
      text: {
        pl: [
          "Pasek pęka na równe kratki. Kilka jest zamalowanych.",
          "Nie zgaduj nazwy. Najpierw: ile kratek w ogóle? Ile zamalowanych?"
        ],
        ua: [
          "Смужка ділиться на рівні клітинки. Кілька замальовані.",
          "Не вгадуй назву. Спочатку: скільки клітинок усього? Скільки замальованих?"
        ]
      },
      prompt: {
        pl: [
          ["Całość ma ", em("8"), " równych części. Zaznaczono ", em("3"), "."],
          "Górna liczba powie „ile bierzemy”. Dolna — „na ile pękła całość”."
        ],
        ua: [
          ["Ціле має ", em("8"), " рівних частин. Позначено ", em("3"), "."],
          "Верхнє число скаже «скільки беремо». Нижнє — «на скільки тріснуло ціле»."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Licznik i mianownik",
        ua: "Чисельник і знаменник"
      },
      formula: "3/8",
      text: {
        pl: [
          ["", em("3"), " — licznik. Stoi u góry. Mówi, ile części bierzemy."],
          ["", em("8"), " — mianownik. Stoi na dole. Mówi, na ile równych części podzielono całość."],
          "Bez równych części nie ma ułamka — tylko zgadywanie."
        ],
        ua: [
          ["", em("3"), " — чисельник. Стоїть угорі. Каже, скільки частин беремо."],
          ["", em("8"), " — знаменник. Стоїть унизу. Каже, на скільки рівних частин поділили ціле."],
          "Без рівних частин немає дробу — лише вгадування."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Część czekolady",
        ua: "Частина шоколаду"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "fraction-bar", total: 8, filled: 3 }
        },
        {
          formula: "3 z 8",
          text: {
            pl: ["Bierzesz ", em("3"), " kostki z tabliczki podzielonej na ", em("8"), "."],
            ua: ["Береш ", em("3"), " часточки з плитки, поділеної на ", em("8"), "."]
          }
        },
        {
          formula: "3/8",
          text: {
            pl: ["To ułamek ", em("3/8"), " — trzy ósme."],
            ua: ["Це дріб ", em("3/8"), " — три восьмих."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Ten sam zapis to też dzielenie",
        ua: "Той самий запис — це також ділення"
      },
      formula: "a/b = a : b",
      text: {
        pl: [
          "Ułamek umie być kawałkiem czekolady. Umie też być ilorazem.",
          ["", em("6/2"), " to to samo co ", em("6 : 2"), "."],
          ["", em("6 : 2 = 3"), ", więc ", em("6/2 = 3"), "."],
          "Kreska ułamkowa i dwukropek mówią o tym samym działaniu."
        ],
        ua: [
          "Дріб може бути шматочком шоколаду. Може бути й часткою.",
          ["", em("6/2"), " — це те саме, що ", em("6 : 2"), "."],
          ["", em("6 : 2 = 3"), ", отже ", em("6/2 = 3"), "."],
          "Риска дробу і двокрапка говорять про ту саму дію."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak odczytać 8/2?",
        ua: "Як прочитати 8/2?"
      },
      reveal: true,
      steps: [
        { formula: "8/2 = 8 : 2" },
        { formula: "8 : 2 = 4" },
        {
          formula: "8/2 = 4",
          text: {
            pl: ["Osiem połówek to ", em("4"), " całości. Iloraz i ułamek dają ten sam wynik."],
            ua: ["Вісім половинок — це ", em("4"), " цілих. Частка і дріб дають той самий результат."]
          }
        }
      ]
    },
    {
      type: "visual",
      heading: {
        pl: "Iloraz na osi",
        ua: "Частка на осі"
      },
      visual: { kind: "number-line", min: 0, max: 4, marks: [4] },
      text: {
        pl: [
          ["", em("8/2 = 8 : 2 = 4"), " — kropka stoi przy czwórce."],
          "Ułamek-iloraz ląduje na osi jak zwykła liczba."
        ],
        ua: [
          ["", em("8/2 = 8 : 2 = 4"), " — крапка стоїть біля четвірки."],
          "Дріб-частка сідає на осі як звичайне число."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Siatka też pęka na równe części",
        ua: "Сітка теж ділиться на рівні частини"
      },
      visual: { kind: "grid", rows: 2, cols: 4 },
      text: {
        pl: [
          ["Tu jest ", em("2"), " rzędy i ", em("4"), " kolumny — razem ", em("8"), " kratek."],
          "Każda kratka to jedna ósma całości. Mianownik znowu mówi: na ile."
        ],
        ua: [
          ["Тут ", em("2"), " рядки і ", em("4"), " стовпці — разом ", em("8"), " клітинок."],
          "Кожна клітинка — одна восьма цілого. Знаменник знову каже: на скільки."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "ułamek zwykły", ua: "звичайний дріб" },
        { pl: "licznik", ua: "чисельник" },
        { pl: "mianownik", ua: "знаменник" },
        { pl: "część całości", ua: "частина цілого" },
        { pl: "iloraz", ua: "частка" },
        { pl: "kreska ułamkowa", ua: "риска дробу" }
      ],
      phrases: [
        { pl: "Wskaż licznik i mianownik.", ua: "Вкажи чисельник і знаменник." },
        { pl: "Jaki to ułamek?", ua: "Який це дріб?" },
        { pl: "Zapisz iloraz w postaci ułamka.", ua: "Запиши частку у вигляді дробу." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Odczytaj pasek",
        ua: "Прочитай смужку"
      },
      visual: { kind: "fraction-bar", total: 6, filled: 5 },
      task: {
        id: "ul21-guided-bar",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Ile zamalowano z całości? Wpisz ułamek. Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки замальовано з цілого? Введи дріб. Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "5/6",
        hint: {
          pl: "Dolna liczba to, na ile pękł pasek. Górna — ile kratek jest zamalowanych.",
          ua: "Нижнє число — на скільки тріснула смужка. Верхнє — скільки клітинок замальовано."
        },
        explanation: {
          pl: "Zamalowano 5 z 6 równych części, więc 5/6.",
          ua: "Замальовано 5 з 6 рівних частин, отже 5/6."
        },
        mistakes: [
          {
            answer: "6/5",
            feedback: {
              pl: "Odwróciłeś. 6 to mianownik (całość), 5 to licznik (ile bierzemy).",
              ua: "Перевернув. 6 — знаменник (ціле), 5 — чисельник (скільки беремо)."
            }
          },
          {
            answer: "5/5",
            feedback: {
              pl: "Pasek ma 6 kratek, nie 5.",
              ua: "Смужка має 6 клітинок, не 5."
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
        pl: "W ułamku 2/5 licznik to 5",
        ua: "У дробі 2/5 чисельник — це 5"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 2 },
      text: {
        pl: [
          "Licznik stoi u góry i mówi, ile części bierzemy.",
          ["W ", em("2/5"), " bierzemy ", em("2"), ", a całość pękła na ", em("5"), "."],
          ["Licznik to ", em("2"), ". Mianownik to ", em("5"), "."]
        ],
        ua: [
          "Чисельник стоїть угорі і каже, скільки частин беремо.",
          ["У ", em("2/5"), " беремо ", em("2"), ", а ціле тріснуло на ", em("5"), "."],
          ["Чисельник — ", em("2"), ". Знаменник — ", em("5"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Która liczba jest licznikiem?",
        ua: "Яке число є чисельником?"
      },
      task: {
        id: "ul21-licznik-49",
        type: "input-number",
        level: "A",
        question: {
          pl: ["W ułamku ", em("4/9"), " wskaż licznik. Wpisz tylko tę liczbę."],
          ua: ["У дробі ", em("4/9"), " вкажи чисельник. Введи лише це число."]
        },
        answer: 4,
        hint: {
          pl: "Licznik stoi u góry.",
          ua: "Чисельник стоїть угорі."
        },
        explanation: {
          pl: "4/9: 4 jest u góry, więc licznik to 4.",
          ua: "4/9: 4 угорі, отже чисельник — 4."
        },
        mistakes: [
          {
            answer: 9,
            feedback: {
              pl: "9 stoi na dole — to mianownik.",
              ua: "9 стоїть унизу — це знаменник."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z siatki na ułamek",
        ua: "Із сітки в дріб"
      },
      visual: { kind: "grid", rows: 3, cols: 3 },
      task: {
        id: "ul21-grid-one-ninth",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Siatka ma ", em("3"), " rzędy i ", em("3"), " kolumny. Jeden kwadrat to jaka część całości? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Сітка має ", em("3"), " рядки і ", em("3"), " стовпці. Один квадрат — яка частина цілого? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/9",
        hint: {
          pl: "Policz wszystkie kratki. Jedna kratka to 1 przez tę liczbę.",
          ua: "Полічи всі клітинки. Одна клітинка — це 1 через це число."
        },
        explanation: {
          pl: "3 · 3 = 9 kratek. Jedna to 1/9.",
          ua: "3 · 3 = 9 клітинок. Одна — це 1/9."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ułamek jako iloraz",
        ua: "Дріб як частка"
      },
      task: {
        id: "ul21-iloraz-12-4",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("12/4"), " jak dzielenie. Wpisz wynik liczbą."],
          ua: ["Обчисли ", em("12/4"), " як ділення. Введи результат числом."]
        },
        answer: 3,
        hint: {
          pl: "12/4 = 12 : 4.",
          ua: "12/4 = 12 : 4."
        },
        explanation: {
          pl: "12 : 4 = 3, więc 12/4 = 3.",
          ua: "12 : 4 = 3, отже 12/4 = 3."
        },
        mistakes: [
          {
            answer: 8,
            feedback: {
              pl: "To byłoby 12 − 4. Kreska ułamkowa to dzielenie, nie odejmowanie.",
              ua: "Так було б 12 − 4. Риска дробу — це ділення, не віднімання."
            }
          },
          {
            answer: 48,
            feedback: {
              pl: "To byłoby 12 · 4. Tu dzielimy.",
              ua: "Так було б 12 · 4. Тут ділимо."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czy to to samo?",
        ua: "Чи це те саме?"
      },
      task: {
        id: "ul21-tf-iloraz",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Zdanie: ", em("3/4"), " znaczy to samo co ", em("3 : 4"), "."],
          ua: ["Речення: ", em("3/4"), " означає те саме, що ", em("3 : 4"), "."]
        },
        answer: true,
        hint: {
          pl: "Kreska ułamkowa i dwukropek to to samo działanie.",
          ua: "Риска дробу і двокрапка — та сама дія."
        },
        explanation: {
          pl: "Tak. a/b = a : b, więc 3/4 = 3 : 4.",
          ua: "Так. a/b = a : b, отже 3/4 = 3 : 4."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Tort na urodziny",
        ua: "Торт на день народження"
      },
      text: {
        pl: [
          ["Tort pocięto na ", em("8"), " równych kawałków."],
          ["Ola zjadła ", em("3"), " kawałki."]
        ],
        ua: [
          ["Торт нарізали на ", em("8"), " рівних шматків."],
          ["Оля з’їла ", em("3"), " шматки."]
        ]
      },
      visual: { kind: "fraction-bar", total: 8, filled: 3 },
      task: {
        id: "ul21-tort-ola",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jaką część tortu zjadła Ola? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яку частину торта з’їла Оля? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/8",
        hint: {
          pl: "Licznik — ile zjadła. Mianownik — na ile pocięto tort.",
          ua: "Чисельник — скільки з’їла. Знаменник — на скільки нарізали торт."
        },
        explanation: {
          pl: "3 kawałki z 8 to 3/8.",
          ua: "3 шматки з 8 — це 3/8."
        },
        mistakes: [
          {
            answer: "8/3",
            feedback: {
              pl: "Odwróciłeś licznik i mianownik. Zjadła 3 z 8, nie 8 z 3.",
              ua: "Перевернув чисельник і знаменник. З’їла 3 з 8, не 8 з 3."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Jabłka dla piątki",
        ua: "Яблука для п’ятьох"
      },
      text: {
        pl: [
          ["W koszyku jest ", em("10"), " jabłek."],
          ["Dzielą je po równo ", em("5"), " dzieci."]
        ],
        ua: [
          ["У кошику ", em("10"), " яблук."],
          ["Ділять їх порівну ", em("5"), " дітей."]
        ]
      },
      task: {
        id: "ul21-jablka-10-5",
        type: "input-number",
        level: "B",
        question: {
          pl: ["", em("10/5"), " to iloraz. Ile jabłek dostanie jedno dziecko?"],
          ua: ["", em("10/5"), " — це частка. Скільки яблук отримає одна дитина?"]
        },
        answer: 2,
        hint: {
          pl: "10/5 = 10 : 5.",
          ua: "10/5 = 10 : 5."
        },
        explanation: {
          pl: "10 : 5 = 2, więc każde dziecko dostaje 2 jabłka.",
          ua: "10 : 5 = 2, отже кожна дитина отримує 2 яблука."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "5 to liczba dzieci, nie wynik dzielenia. 10 : 5 = 2.",
              ua: "5 — це кількість дітей, не результат ділення. 10 : 5 = 2."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który ułamek nie pasuje?",
        ua: "Який дріб не пасує?"
      },
      text: {
        pl: [
          "Trzy zapisy to kawałek całości mniejszy niż 1.",
          "Jeden to skończone dzielenie — wychodzi liczba naturalna."
        ],
        ua: [
          "Три записи — шматочок цілого, менший за 1.",
          "Один — закінчене ділення: виходить натуральне число."
        ]
      },
      task: {
        id: "ul21-challenge-nie-pasuje",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który ułamek nie pasuje do pozostałych?",
          ua: "Який дріб не пасує до решти?"
        },
        options: [
          { id: "a", label: { pl: "2/5", ua: "2/5" } },
          { id: "b", label: { pl: "3/7", ua: "3/7" } },
          { id: "c", label: { pl: "6/2", ua: "6/2" } }
        ],
        answer: "c",
        hint: {
          pl: "Policz 6 : 2. Czy to nadal kawałek mniejszy od całości?",
          ua: "Полічи 6 : 2. Чи це ще шматочок, менший за ціле?"
        },
        explanation: {
          pl: "2/5 i 3/7 to części mniejsze od 1. 6/2 = 6 : 2 = 3 — to iloraz, liczba naturalna.",
          ua: "2/5 і 3/7 — частини, менші за 1. 6/2 = 6 : 2 = 3 — це частка, натуральне число."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "2/5 to dwie piąte — kawałek całości, tak jak 3/7.",
              ua: "2/5 — дві п’ятих, шматочок цілого, як і 3/7."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "3/7 to trzy siódme — też część mniejsza od 1.",
              ua: "3/7 — три сьомих, теж частина, менша за 1."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Część całości",
        ua: "Чи вже вмію? Частина цілого"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 2 },
      task: {
        id: "ul21-check-bar",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jaki ułamek pokazuje pasek? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Який дріб показує смужка? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "2/5",
        hint: {
          pl: "Zamalowane na górę, wszystkie kratki na dół.",
          ua: "Замальовані — вгору, усі клітинки — вниз."
        },
        explanation: {
          pl: "2 z 5 to 2/5.",
          ua: "2 з 5 — це 2/5."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Iloraz",
        ua: "Чи вже вмію? Частка"
      },
      task: {
        id: "ul21-check-iloraz",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile to jest ", em("8/2"), "? Wpisz liczbę."],
          ua: ["Скільки це ", em("8/2"), "? Введи число."]
        },
        answer: 4,
        hint: {
          pl: "8/2 = 8 : 2.",
          ua: "8/2 = 8 : 2."
        },
        explanation: {
          pl: "8 : 2 = 4.",
          ua: "8 : 2 = 4."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "3/8    oraz    a/b = a : b",
      visual: { kind: "fraction-bar", total: 8, filled: 3 },
      text: {
        pl: [
          ["Licznik (góra) — ile części bierzemy. Mianownik (dół) — na ile równych części pękła całość."],
          ["", em("a/b"), " to też ", em("a : b"), " — ten sam iloraz."]
        ],
        ua: [
          "Чисельник (верх) — скільки частин беремо. Знаменник (низ) — на скільки рівних частин тріснуло ціле.",
          ["", em("a/b"), " — це також ", em("a : b"), " — та сама частка."]
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
          "Później znów zobaczysz pasek albo usłyszysz: zapisz iloraz ułamkiem.",
          "To nie nowy materiał — krótka powtórka licznika, mianownika i kreski ułamkowej."
        ],
        ua: [
          "Пізніше знову побачиш смужку або почуєш: запиши частку дробом.",
          "Це не новий матеріал — коротке повторення чисельника, знаменника і риски дробу."
        ]
      }
    }
  ]
};
