function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Znowu dwa wyniki",
        ua: "Знову два результати"
      },
      formula: "1/2 + 1/4 · 2",
      text: {
        pl: [
          ["Ola dostała ", em("3/2"), ". Tomek dostał ", em("1"), "."],
          "Te same ułamki, inna kolejka działań.",
          "Kolejność nie zmieniła się dlatego, że pojawiły się kreski ułamkowe."
        ],
        ua: [
          ["Оля отримала ", em("3/2"), ". Томек — ", em("1"), "."],
          "Ті самі дроби, інша черга дій.",
          "Порядок не змінився тому, що з’явилися риски дробів."
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
        { pl: "stosować kolejność działań do ułamków", ua: "застосовувати порядок дій до дробів" },
        { pl: "najpierw nawiasy, potem · i :, na końcu + i −", ua: "спочатку дужки, потім · і :, наприкінці + і −" },
        { pl: "iść od lewej na tym samym piętrze", ua: "йти зліва на тому самому поверсі" },
        { pl: "znaleźć krok, który złamał kolejność", ua: "знайти крок, який зламав порядок" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Nawias zmienia historię — też przy ułamkach",
        ua: "Дужка змінює історію — також при дробах"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "1/2 + 1/3 · 1/2", result: "2/3", caption: "najpierw ·" },
        right: { expr: "(1/2 + 1/3) · 1/2", result: "5/12", caption: "najpierw nawias" }
      },
      prompt: {
        pl: [
          "Cyfry te same. Zmienił się tylko nawias.",
          "Najpierw decyzja, potem rachunek — jak w lekcji o kolejności."
        ],
        ua: [
          "Цифри ті самі. Змінилася лише дужка.",
          "Спочатку рішення, потім рахунок — як у уроці про порядок."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Te same cztery drzwi",
        ua: "Ті самі чотири двері"
      },
      visual: {
        kind: "ops-queue",
        items: [
          { n: 1, label: "nawiasy" },
          { n: 2, label: "potęgi" },
          { n: 3, label: "·  i  :", hint: "od lewej" },
          { n: 4, label: "+  i  −", hint: "od lewej" }
        ]
      },
      text: {
        pl: [
          "Ułamki nie dostają osobnej kolejki.",
          "Najpierw nawiasy, potem potęgi, potem · i :, na końcu + i −.",
          ["Drzwi ", em("3"), " i ", em("4"), ": od lewej do prawej."]
        ],
        ua: [
          "Дроби не отримують окремої черги.",
          "Спочатку дужки, потім степені, потім · і :, наприкінці + і −.",
          ["Двері ", em("3"), " і ", em("4"), ": зліва направо."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Mnożenie ułamków wyprzedza dodawanie",
        ua: "Множення дробів випереджає додавання"
      },
      formula: "1/2 + 1/4 · 2 = 1/2 + 1/2 = 1",
      text: {
        pl: [
          "Nie ma nawiasu. Nie ma potęgi. Najpierw 1/4 · 2.",
          ["", em("1/4 · 2 = 1/2"), ", potem ", em("1/2 + 1/2 = 1"), "."],
          ["Gdyby dodać najpierw, jakby stał nawias: ", em("(1/2 + 1/4) · 2 = 3/2"), " — inna historia."]
        ],
        ua: [
          "Немає дужки. Немає степеня. Спочатку 1/4 · 2.",
          ["", em("1/4 · 2 = 1/2"), ", потім ", em("1/2 + 1/2 = 1"), "."],
          ["Якби додати спочатку, ніби стояла дужка: ", em("(1/2 + 1/4) · 2 = 3/2"), " — інша історія."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Wracamy do Oli i Tomka",
        ua: "Повертаємось до Олі і Томека"
      },
      reveal: true,
      steps: [
        { formula: "1/2 + 1/4 · 2" },
        {
          formula: "1/2 + 1/2",
          text: {
            pl: "Najpierw mnożenie. 1/4 · 2 = 2/4 = 1/2.",
            ua: "Спочатку множення. 1/4 · 2 = 2/4 = 1/2."
          }
        },
        {
          formula: "1",
          text: {
            pl: [
              "Tomek miał rację.",
              ["Ola dodała ", em("1/2 + 1/4"), " — jakby stał nawias, którego nie było."]
            ],
            ua: [
              "Томек мав рацію.",
              ["Оля додала ", em("1/2 + 1/4"), " — ніби стояла дужка, якої не було."]
            ]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Od lewej: dzielenie przed odejmowaniem",
        ua: "Зліва: ділення перед відніманням"
      },
      reveal: true,
      steps: [
        { formula: "1/2 : 1/4 − 1/2" },
        {
          formula: "2 − 1/2",
          text: {
            pl: "Najpierw : . 1/2 : 1/4 = 2.",
            ua: "Спочатку : . 1/2 : 1/4 = 2."
          }
        },
        {
          formula: "3/2 = 1 1/2",
          text: {
            pl: "Potem odejmowanie.",
            ua: "Потім віднімання."
          }
        }
      ]
    },
    {
      type: "algorithm",
      heading: {
        pl: "Przepisuj całą linię",
        ua: "Переписуй увесь рядок"
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: [
              "Po każdym kroku przepisz ułamki, których jeszcze nie ruszyłeś.",
              "Liczby małe — żeby nic nie zgubić."
            ],
            ua: [
              "Після кожного кроку перепиши дроби, яких ще не чіпав.",
              "Числа малі — щоб нічого не загубити."
            ]
          }
        },
        { formula: "1/6 + 1/3 · 1/2" },
        { formula: "1/6 + 1/6" },
        { formula: "2/6 = 1/3" }
      ]
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "kolejność wykonywania działań", ua: "порядок виконання дій" },
        { pl: "wyrażenie", ua: "вираз" },
        { pl: "nawias", ua: "дужка" },
        { pl: "wartość wyrażenia", ua: "значення виразу" }
      ],
      phrases: [
        { pl: "Oblicz wartość wyrażenia.", ua: "Обчисли значення виразу." },
        { pl: "Wykonaj działania w odpowiedniej kolejności.", ua: "Виконай дії у відповідному порядку." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Najpierw mnożenie",
        ua: "Спочатку множення"
      },
      task: {
        id: "ul29-guided-13-13-2",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/3 + 1/3 · 2"), ". Wpisz liczbę."],
          ua: ["Обчисли ", em("1/3 + 1/3 · 2"), ". Введи число."]
        },
        answer: 1,
        hint: {
          pl: "Najpierw 1/3 · 2 = 2/3. Potem 1/3 + 2/3.",
          ua: "Спочатку 1/3 · 2 = 2/3. Потім 1/3 + 2/3."
        },
        explanation: {
          pl: "1/3 · 2 = 2/3, potem 1/3 + 2/3 = 1.",
          ua: "1/3 · 2 = 2/3, потім 1/3 + 2/3 = 1."
        },
        mistakes: [
          {
            answer: "4/3",
            feedback: {
              pl: "Dodałeś najpierw 1/3 + 1/3 = 2/3, potem · 2. Nawiasu nie było — wynik miał być 1.",
              ua: "Додав спочатку 1/3 + 1/3 = 2/3, потім · 2. Дужки не було — результат мав бути 1."
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
        pl: "1/2 + 1/4 · 2 = 3/4 · 2 = 3/2",
        ua: "1/2 + 1/4 · 2 = 3/4 · 2 = 3/2"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "1/2 + 1/4 · 2", result: "1", caption: "najpierw ·" },
        right: { expr: "(1/2 + 1/4) · 2", result: "3/2", caption: "nie ma takiego nawiasu" }
      },
      text: {
        pl: [
          "To zapis Oli. Dodała, jakby był nawias.",
          "W wyrażeniu nawiasu nie ma — więc mnożenie pierwsze, wynik 1."
        ],
        ua: [
          "Це запис Олі. Додала, ніби була дужка.",
          "У виразі дужки немає — отже множення перше, результат 1."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ćwiartka plus iloczyn",
        ua: "Чверть плюс добуток"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 2 },
      task: {
        id: "ul29-14-plus-12-12",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/4 + 1/2 · 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/4 + 1/2 · 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["1/2", "2/4"],
        hint: {
          pl: "Najpierw 1/2 · 1/2 = 1/4. Potem 1/4 + 1/4.",
          ua: "Спочатку 1/2 · 1/2 = 1/4. Потім 1/4 + 1/4."
        },
        explanation: {
          pl: "1/2 · 1/2 = 1/4, 1/4 + 1/4 = 1/2.",
          ua: "1/2 · 1/2 = 1/4, 1/4 + 1/4 = 1/2."
        },
        mistakes: [
          {
            answer: "3/8",
            feedback: {
              pl: "Dodałeś najpierw 1/4 + 1/2 = 3/4, potem · 1/2. Nawiasu nie było.",
              ua: "Додав спочатку 1/4 + 1/2 = 3/4, потім · 1/2. Дужки не було."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czy dodawanie pierwsze?",
        ua: "Чи додавання перше?"
      },
      task: {
        id: "ul29-tf-kolejnosc",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Zdanie: w wyrażeniu ", em("1/2 + 1/3 · 1/2"), " najpierw dodajemy ", em("1/2 + 1/3"), "."],
          ua: ["Речення: у виразі ", em("1/2 + 1/3 · 1/2"), " спочатку додаємо ", em("1/2 + 1/3"), "."]
        },
        answer: false,
        hint: {
          pl: "Mnożenie jest wcześniej niż dodawanie, gdy nie ma nawiasu.",
          ua: "Множення раніше за додавання, коли немає дужки."
        },
        explanation: {
          pl: "Nie. Najpierw 1/3 · 1/2 = 1/6, potem 1/2 + 1/6 = 2/3.",
          ua: "Ні. Спочатку 1/3 · 1/2 = 1/6, потім 1/2 + 1/6 = 2/3."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Nawias na początku",
        ua: "Дужка на початку"
      },
      task: {
        id: "ul29-nawias-12-12-14",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("(1/2 + 1/2) · 1/4"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("(1/2 + 1/2) · 1/4"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/4",
        hint: {
          pl: "Najpierw nawias: 1/2 + 1/2 = 1. Potem 1 · 1/4.",
          ua: "Спочатку дужка: 1/2 + 1/2 = 1. Потім 1 · 1/4."
        },
        explanation: {
          pl: "(1/2 + 1/2) · 1/4 = 1 · 1/4 = 1/4.",
          ua: "(1/2 + 1/2) · 1/4 = 1 · 1/4 = 1/4."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Jedynka minus iloczyn",
        ua: "Одиниця мінус добуток"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      task: {
        id: "ul29-1-minus-12-12",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1 − 1/2 · 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1 − 1/2 · 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/4",
        hint: {
          pl: "Najpierw 1/2 · 1/2 = 1/4. Potem 1 − 1/4.",
          ua: "Спочатку 1/2 · 1/2 = 1/4. Потім 1 − 1/4."
        },
        explanation: {
          pl: "1/2 · 1/2 = 1/4, 1 − 1/4 = 3/4.",
          ua: "1/2 · 1/2 = 1/4, 1 − 1/4 = 3/4."
        },
        mistakes: [
          {
            answer: "1/4",
            feedback: {
              pl: "Odjąłeś najpierw 1 − 1/2 = 1/2, potem · 1/2. Mnożenie jest pierwsze.",
              ua: "Відняв спочатку 1 − 1/2 = 1/2, потім · 1/2. Множення перше."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Mąka i dwie torebki",
        ua: "Борошно і два пакетики"
      },
      text: {
        pl: [
          ["W misce już jest ", em("1/2"), " kg mąki."],
          ["Ania dosypuje ", em("2"), " torebki po ", em("1/4"), " kg."]
        ],
        ua: [
          ["У мисці вже є ", em("1/2"), " кг борошна."],
          ["Аня досипає ", em("2"), " пакетики по ", em("1/4"), " кг."]
        ]
      },
      task: {
        id: "ul29-maka-wyrazenie",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1/2 + 2 · (1/4)"), ". Ile kilogramów mąki będzie w misce? Wpisz liczbę."],
          ua: ["Обчисли ", em("1/2 + 2 · (1/4)"), ". Скільки кілограмів борошна буде в мисці? Введи число."]
        },
        answer: 1,
        hint: {
          pl: "Najpierw 2 · (1/4) = 1/2. Potem 1/2 + 1/2.",
          ua: "Спочатку 2 · (1/4) = 1/2. Потім 1/2 + 1/2."
        },
        explanation: {
          pl: "2 · (1/4) = 1/2, 1/2 + 1/2 = 1 kg.",
          ua: "2 · (1/4) = 1/2, 1/2 + 1/2 = 1 кг."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Wstążka po odcięciu połowy połowy",
        ua: "Стрічка після відрізання половини половини"
      },
      text: {
        pl: [
          ["Wstążka ma ", em("1"), " metr."],
          ["Ola odcina ", em("1/2"), " z kawałka, który sam ma ", em("1/2"), " metra — czyli ", em("1/2 · 1/2"), "."]
        ],
        ua: [
          ["Стрічка має ", em("1"), " метр."],
          ["Оля відрізає ", em("1/2"), " зі шматка, який сам має ", em("1/2"), " метра — тобто ", em("1/2 · 1/2"), "."]
        ]
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      task: {
        id: "ul29-wstazka-1-minus",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Ile wstążki zostanie: ", em("1 − 1/2 · 1/2"), "? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки стрічки лишиться: ", em("1 − 1/2 · 1/2"), "? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/4",
        hint: {
          pl: "Najpierw iloczyn 1/4, potem 1 − 1/4.",
          ua: "Спочатку добуток 1/4, потім 1 − 1/4."
        },
        explanation: {
          pl: "1 − 1/4 = 3/4 metra.",
          ua: "1 − 1/4 = 3/4 метра."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który krok złamał kolejność?",
        ua: "Який крок зламав порядок?"
      },
      text: {
        pl: [
          ["Wyrażenie: ", em("1/2 + 1/4 · 2"), "."],
          "Kasia zapisała dwa kroki. Jeden z nich nie miał prawa być pierwszy."
        ],
        ua: [
          ["Вираз: ", em("1/2 + 1/4 · 2"), "."],
          "Кася записала два кроки. Один з них не мав права бути першим."
        ]
      },
      task: {
        id: "ul29-challenge-krok",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Kasia: krok 1: 1/2 + 1/4 = 3/4. Krok 2: 3/4 · 2 = 3/2. Który krok złamał kolejność?",
          ua: "Кася: крок 1: 1/2 + 1/4 = 3/4. Крок 2: 3/4 · 2 = 3/2. Який крок зламав порядок?"
        },
        options: [
          { id: "a", label: { pl: "Krok 1 — dodała przed mnożeniem", ua: "Крок 1 — додала перед множенням" } },
          { id: "b", label: { pl: "Krok 2 — źle pomnożyła 3/4 · 2", ua: "Крок 2 — погано помножила 3/4 · 2" } },
          { id: "c", label: { pl: "Oba kroki są zgodne z kolejnością", ua: "Обидва кроки згідні з порядком" } }
        ],
        answer: "a",
        hint: {
          pl: "Czy w wyrażeniu stoi nawias przy 1/2 + 1/4?",
          ua: "Чи у виразі стоїть дужка при 1/2 + 1/4?"
        },
        explanation: {
          pl: "Krok 1 złamał kolejność: dodała, jakby był nawias. Mnożenie 1/4 · 2 powinno być pierwsze. (Krok 2 sam w sobie 3/4 · 2 = 3/2 jest policzony dobrze — tylko nie do tej kolejki.)",
          ua: "Крок 1 зламав порядок: додала, ніби була дужка. Множення 1/4 · 2 мало бути першим. (Крок 2 сам по собі 3/4 · 2 = 3/2 полічений добре — лише не до цієї черги.)"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "3/4 · 2 naprawdę jest 3/2. Rachunek kroku 2 jest dobry, zła była decyzja w kroku 1.",
              ua: "3/4 · 2 справді 3/2. Рахунок кроку 2 добрий, поганим було рішення в кроці 1."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gdyby kolejność była zachowana, wynik byłby 1, nie 3/2.",
              ua: "Якби порядок зберегли, результат був би 1, не 3/2."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Mnożenie pierwsze",
        ua: "Чи вже вмію? Множення перше"
      },
      task: {
        id: "ul29-check-mul",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/6 + 1/3 · 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/6 + 1/3 · 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["1/3", "2/6"],
        hint: {
          pl: "Najpierw 1/3 · 1/2 = 1/6. Potem 1/6 + 1/6.",
          ua: "Спочатку 1/3 · 1/2 = 1/6. Потім 1/6 + 1/6."
        },
        explanation: {
          pl: "1/3 · 1/2 = 1/6, 1/6 + 1/6 = 2/6 = 1/3.",
          ua: "1/3 · 1/2 = 1/6, 1/6 + 1/6 = 2/6 = 1/3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dzielenie przed odejmowaniem",
        ua: "Чи вже вмію? Ділення перед відніманням"
      },
      task: {
        id: "ul29-check-div",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1/2 : 1/4 − 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/2 : 1/4 − 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/2", "1 1/2"],
        hint: {
          pl: "Najpierw 1/2 : 1/4 = 2. Potem 2 − 1/2.",
          ua: "Спочатку 1/2 : 1/4 = 2. Потім 2 − 1/2."
        },
        explanation: {
          pl: "1/2 : 1/4 = 2, 2 − 1/2 = 3/2 = 1 1/2.",
          ua: "1/2 : 1/4 = 2, 2 − 1/2 = 3/2 = 1 1/2."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      visual: {
        kind: "ops-queue",
        items: [
          { n: 1, label: "nawiasy" },
          { n: 2, label: "potęgi" },
          { n: 3, label: "·  i  :", hint: "od lewej" },
          { n: 4, label: "+  i  −", hint: "od lewej" }
        ]
      },
      text: {
        pl: [
          "Ułamki korzystają z tej samej kolejności co liczby naturalne.",
          "Zanim policzysz: czy jest nawias? czy · i : idą przed + i −?",
          "Liczby małe — jeden krok, cała linia przepisana."
        ],
        ua: [
          "Дроби користуються тим самим порядком, що й натуральні числа.",
          "Перш ніж полічити: чи є дужка? чи · і : йдуть перед + і −?",
          "Числа малі — один крок, увесь рядок переписаний."
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
          "Później znów usłyszysz: „Oblicz wartość wyrażenia” — już z ułamkami dziesiętnymi.",
          "Kolejność zostaje. Zmienia się tylko zapis liczb."
        ],
        ua: [
          "Пізніше знову почуєш: «Обчисли значення виразу» — уже з десятковими дробами.",
          "Порядок лишається. Змінюється лише запис чисел."
        ]
      }
    }
  ]
};
