function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Ile kafelków zmieści się na podłodze?",
        ua: "Скільки плиток вміститься на підлозі?"
      },
      visual: { kind: "grid", rows: 3, cols: 5 },
      text: {
        pl: [
          "Siatka 3 na 5. Każde oczko to jedna kratka — jedna jednostka pola.",
          "Dziś pole to liczba takich kratek. Obwód to coś innego: spacer po brzegu."
        ],
        ua: [
          "Сітка 3 на 5. Кожна комірка — одна клітинка, одна одиниця площі.",
          "Сьогодні площа — це число таких клітинок. Периметр — інше: прогулянка по краю."
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
        { pl: "rozumieć pole jako liczbę kratek jednostkowych", ua: "розуміти площу як число одиничних клітинок" },
        { pl: "odróżnić pole od obwodu", ua: "відрізнити площу від периметра" },
        { pl: "obliczyć pole prostokąta: P = a · b", ua: "обчислити площу прямокутника: P = a · b" },
        { pl: "zauważyć, że to samo pole może mieć różne kształty", ua: "помітити, що та сама площа може мати різні форми" },
        { pl: "z pola P i boku a znaleźć drugi bok", ua: "з площі P і сторони a знайти другу сторону" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Policz kratki",
        ua: "Полічи клітинки"
      },
      visual: { kind: "grid", rows: 3, cols: 4 },
      prompt: {
        pl: [
          "Nie musisz liczyć po jednej. Są 3 rzędy po 4 kratki.",
          "Co zostaje takie samo, gdy ułożysz te 12 kratek w 2 rzędy po 6?"
        ],
        ua: [
          "Не треба лічити по одній. Є 3 ряди по 4 клітинки.",
          "Що лишається тим самим, коли складеш ці 12 клітинок у 2 ряди по 6?"
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Pole to wypełnienie",
        ua: "Площа — це заповнення"
      },
      formula: "P = a · b",
      text: {
        pl: [
          "Pole figury mówi, ile jednostek kwadratowych mieści się w środku.",
          ["W prostokącie: ", em("P = a · b"), " — długość razy szerokość."],
          "Obwód to suma długości boków. Inne pytanie, inna liczba."
        ],
        ua: [
          "Площа фігури каже, скільки квадратних одиниць вміщається всередині.",
          ["У прямокутнику: ", em("P = a · b"), " — довжина помножити на ширину."],
          "Периметр — сума довжин сторін. Інше питання, інше число."
        ]
      }
    },
    {
      type: "comparison",
      heading: {
        pl: "Pole i obwód to nie to samo",
        ua: "Площа і периметр — не те саме"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "3 · 5", result: "15", caption: "pole (kratki)" },
        right: { expr: "2 · (3 + 5)", result: "16", caption: "obwód (brzeg)" }
      },
      prompt: {
        pl: [
          "Prostokąt 3 na 5: w środku 15 kratek, dookoła 16 jednostek długości.",
          "Liczby są blisko — i właśnie dlatego łatwo je pomylić."
        ],
        ua: [
          "Прямокутник 3 на 5: всередині 15 клітинок, навколо 16 одиниць довжини.",
          "Числа близькі — і саме тому їх легко сплутати."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Liczymy pole prostokąta",
        ua: "Рахуємо площу прямокутника"
      },
      visual: { kind: "quad", quad: "rectangle", label: { pl: "a = 5, b = 3", ua: "a = 5, b = 3" } },
      reveal: true,
      steps: [
        { formula: "P = a · b" },
        { formula: "P = 5 · 3" },
        {
          formula: "P = 15",
          text: {
            pl: ["Piętnaście kratek. Obwód byłby ", em("2 · (5 + 3) = 16"), " — tego dziś nie szukamy."],
            ua: ["П’ятнадцять клітинок. Периметр був би ", em("2 · (5 + 3) = 16"), " — цього сьогодні не шукаємо."]
          }
        }
      ]
    },
    {
      type: "visual",
      heading: {
        pl: "To samo pole, inny kształt",
        ua: "Та сама площа, інша форма"
      },
      visual: { kind: "grid", rows: 2, cols: 6 },
      text: {
        pl: [
          ["2 · 6 = 12 kratek. 3 · 4 też daje 12."],
          "Pole równe, boki inne — a obwód też inny: 16 wobec 14."
        ],
        ua: [
          ["2 · 6 = 12 клітинок. 3 · 4 теж дає 12."],
          "Площа рівна, сторони інші — і периметр теж інший: 16 проти 14."
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
        { pl: "pole", ua: "площа" },
        { pl: "obwód", ua: "периметр" },
        { pl: "prostokąt", ua: "прямокутник" },
        { pl: "jednostka kwadratowa", ua: "квадратна одиниця" },
        { pl: "kratka", ua: "клітинка" }
      ],
      phrases: [
        { pl: "Oblicz pole.", ua: "Обчисли площу." },
        { pl: "Oblicz obwód.", ua: "Обчисли периметр." },
        { pl: "Czy równe pola oznaczają równe obwody?", ua: "Чи рівні площі означають рівні периметри?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Z siatki",
        ua: "Із сітки"
      },
      visual: { kind: "grid", rows: 4, cols: 3 },
      task: {
        id: "pole-guided-siatka",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile kratek ma siatka ", em("4"), " na ", em("3"), "? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Скільки клітинок у сітці ", em("4"), " на ", em("3"), "? Введи число, кому або крапку."]
        },
        answer: 12,
        hint: {
          pl: "Rzędy razy kolumny. 4 · 3.",
          ua: "Ряди помножити на стовпці. 4 · 3."
        },
        explanation: {
          pl: "4 · 3 = 12. To pole tej figury w kratkach.",
          ua: "4 · 3 = 12. Це площа цієї фігури в клітинках."
        }
      }
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "Pole prostokąta 3 na 5 wynosi 16, bo 2 · (3 + 5) = 16",
        ua: "Площа прямокутника 3 на 5 дорівнює 16, бо 2 · (3 + 5) = 16"
      },
      visual: { kind: "grid", rows: 3, cols: 5 },
      text: {
        pl: [
          "16 to obwód — spacer dookoła.",
          ["Pole to kratki w środku: ", em("3 · 5 = 15"), "."]
        ],
        ua: [
          "16 — це периметр, прогулянка навколо.",
          ["Площа — клітинки всередині: ", em("3 · 5 = 15"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ze wzoru",
        ua: "З формули"
      },
      visual: { kind: "quad", quad: "rectangle", label: { pl: "a = 7, b = 4", ua: "a = 7, b = 4" } },
      task: {
        id: "pole-prostokat-7-4",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pole prostokąta o bokach ", em("7"), " i ", em("4"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли площу прямокутника зі сторонами ", em("7"), " і ", em("4"), ". Введи число, кому або крапку."]
        },
        answer: 28,
        hint: {
          pl: "P = a · b.",
          ua: "P = a · b."
        },
        explanation: {
          pl: "7 · 4 = 28.",
          ua: "7 · 4 = 28."
        },
        mistakes: [
          {
            answer: 22,
            feedback: {
              pl: "22 to obwód: 2 · (7 + 4). Pole to iloczyn boków.",
              ua: "22 — це периметр: 2 · (7 + 4). Площа — добуток сторін."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z pola znajdź bok",
        ua: "З площі знайди сторону"
      },
      task: {
        id: "pole-odwrotnie-b",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Prostokąt ma pole ", em("24"), " i jeden bok ", em("8"), ". Jaki jest drugi bok? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Прямокутник має площу ", em("24"), " і одну сторону ", em("8"), ". Яка друга сторона? Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "P = a · b, więc b = P : a. 24 : 8.",
          ua: "P = a · b, отже b = P : a. 24 : 8."
        },
        explanation: {
          pl: "24 : 8 = 3. Sprawdzenie: 8 · 3 = 24.",
          ua: "24 : 8 = 3. Перевірка: 8 · 3 = 24."
        },
        mistakes: [
          {
            answer: 16,
            feedback: {
              pl: "16 to 24 − 8. Bok to iloraz, nie różnica.",
              ua: "16 це 24 − 8. Сторона — частка, не різниця."
            }
          },
          {
            answer: 192,
            feedback: {
              pl: "To 24 · 8. Dzielisz pole przez znany bok.",
              ua: "Це 24 · 8. Ділиш площу на відому сторону."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwie ramki, tyle samo kratek",
        ua: "Дві рамки, стільки само клітинок"
      },
      text: {
        pl: [
          ["Prostokąt ", em("2"), " na ", em("6"), " i prostokąt ", em("3"), " na ", em("4"), "."],
          "Czy mają równe pola? A obwody?"
        ],
        ua: [
          ["Прямокутник ", em("2"), " на ", em("6"), " і прямокутник ", em("3"), " на ", em("4"), "."],
          "Чи мають рівні площі? А периметри?"
        ]
      },
      task: {
        id: "pole-dwa-ksztalty",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy oba prostokąty mają to samo pole?",
          ua: "Чи обидва прямокутники мають ту саму площу?"
        },
        answer: true,
        hint: {
          pl: "Policz 2 · 6 i 3 · 4.",
          ua: "Полічи 2 · 6 і 3 · 4."
        },
        explanation: {
          pl: "2 · 6 = 12 i 3 · 4 = 12. Pola równe. Obwody: 16 i 14 — już różne.",
          ua: "2 · 6 = 12 і 3 · 4 = 12. Площі рівні. Периметри: 16 і 14 — уже різні."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Podłoga w pokoju",
        ua: "Підлога в кімнаті"
      },
      text: {
        pl: [
          ["Pokój ma wymiary ", em("4 m"), " na ", em("5 m"), "."],
          "Ile metrów kwadratowych wykładziny kupić? (Na razie zostajemy przy m² — bez zamiany na cm².)"
        ],
        ua: [
          ["Кімната має розміри ", em("4 m"), " на ", em("5 m"), "."],
          "Скільки квадратних метрів покриття купити? (Поки лишаємось при m² — без перетворення на cm².)"
        ]
      },
      task: {
        id: "pole-pokoj",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pole w ", em("m²"), ". Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Обчисли площу в ", em("m²"), ". Введи число, кому або крапку. Без одиниці."]
        },
        answer: 20,
        hint: {
          pl: "P = 4 · 5.",
          ua: "P = 4 · 5."
        },
        explanation: {
          pl: "4 · 5 = 20 m².",
          ua: "4 · 5 = 20 m²."
        },
        mistakes: [
          {
            answer: 18,
            feedback: {
              pl: "18 m to obwód: 2 · (4 + 5). Wykładzina pokrywa pole.",
              ua: "18 m — периметр: 2 · (4 + 5). Покриття закриває площу."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Równe pole, równy obwód?",
        ua: "Рівна площа, рівний периметр?"
      },
      text: {
        pl: [
          "Przypomnij sobie prostokąty 2×6 i 3×4. Pola były równe.",
          "Czy z równości pól zawsze wynika równość obwodów?"
        ],
        ua: [
          "Згадай прямокутники 2×6 і 3×4. Площі були рівні.",
          "Чи з рівності площ завжди випливає рівність периметрів?"
        ]
      },
      task: {
        id: "pole-rowne-obwody",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy figury o równym polu muszą mieć równy obwód?",
          ua: "Чи фігури з рівною площею мусять мати рівний периметр?"
        },
        answer: false,
        hint: {
          pl: "2×6 ma obwód 16, 3×4 ma obwód 14. Pole obu: 12.",
          ua: "2×6 має периметр 16, 3×4 має периметр 14. Площа обох: 12."
        },
        explanation: {
          pl: "Nie. To samo pole można ułożyć w różne kształty. Węższy i dłuższy prostokąt ma większy obwód.",
          ua: "Ні. Ту саму площу можна скласти в різні форми. Вужчий і довший прямокутник має більший периметр."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Pole",
        ua: "Чи вже вмію? Площа"
      },
      task: {
        id: "pole-check-6-5",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Pole prostokąta o bokach ", em("6"), " i ", em("5"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа прямокутника зі сторонами ", em("6"), " і ", em("5"), ". Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "P = a · b.",
          ua: "P = a · b."
        },
        explanation: {
          pl: "6 · 5 = 30.",
          ua: "6 · 5 = 30."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Drugi bok",
        ua: "Чи вже вмію? Друга сторона"
      },
      task: {
        id: "pole-check-odwrotnie",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Pole wynosi ", em("18"), ", jeden bok ", em("6"), ". Jaki jest drugi bok? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа ", em("18"), ", одна сторона ", em("6"), ". Яка друга сторона? Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "18 : 6.",
          ua: "18 : 6."
        },
        explanation: {
          pl: "b = 18 : 6 = 3.",
          ua: "b = 18 : 6 = 3."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "P = a · b",
      text: {
        pl: [
          "Pole prostokąta to iloczyn boków — liczba kratek w środku.",
          "Obwód to brzeg. Równe pola nie oznaczają równych obwodów.",
          "Gdy znasz P i a, drugi bok to P : a."
        ],
        ua: [
          "Площа прямокутника — добуток сторін, число клітинок всередині.",
          "Периметр — край. Рівні площі не означають рівних периметрів.",
          "Коли знаєш P і a, друга сторона — P : a."
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
          "Równoległobok „pochyla” prostokąt. Pole nadal będzie podstawą razy wysokość — nie razy bok skośny."
        ],
        ua: [
          "Паралелограм «нахиляє» прямокутник. Площа знову буде основа помножити на висоту — не на скісну сторону."
        ]
      }
    }
  ]
};
