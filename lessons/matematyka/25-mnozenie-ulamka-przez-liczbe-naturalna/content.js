function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Kilka takich samych kawałków",
        ua: "Кілька однакових шматочків"
      },
      formula: "3 · (1/4) = 3/4",
      text: {
        pl: [
          "Bierzesz trzy razy po jednej czwartej czekolady.",
          "Albo: połowę z dziesięciu cukierków. To to samo mnożenie — dwa odczyty."
        ],
        ua: [
          "Береш три рази по одній четвертій шоколаду.",
          "Або: половину з десяти цукерок. Це те саме множення — два прочитання."
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
        { pl: "pomnożyć ułamek przez liczbę naturalną", ua: "помножити дріб на натуральне число" },
        { pl: "obliczyć ułamek liczby", ua: "обчислити дріб від числа" },
        { pl: "zobaczyć most: 1/2 to 50%, 1/10 to 10%", ua: "побачити місток: 1/2 — це 50%, 1/10 — це 10%" },
        { pl: "sprawdzić, czy „połowa z 10” to to samo co „10 razy 1/2”", ua: "перевірити, чи «половина з 10» — те саме, що «10 разів 1/2»" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Trzy ćwiartki obok siebie",
        ua: "Три чверті поряд"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      text: {
        pl: [
          ["Jedna ćwiartka, druga, trzecia. Pasek ma ", em("4"), " kratki, zamalowano ", em("3"), "."],
          ["To ", em("3 · (1/4)"), " — i jednocześnie ", em("3/4"), "."]
        ],
        ua: [
          ["Одна чверть, друга, третя. Смужка має ", em("4"), " клітинки, замальовано ", em("3"), "."],
          ["Це ", em("3 · (1/4)"), " — і водночас ", em("3/4"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Mnożysz licznik",
        ua: "Множиш чисельник"
      },
      formula: "n · (a/b) = (n · a)/b",
      text: {
        pl: [
          "Liczba naturalna mówi, ile razy bierzesz ułamek.",
          "Mnożysz licznik. Mianownik zostaje — kratki te same.",
          ["", em("3 · (2/5) = 6/5"), "."]
        ],
        ua: [
          "Натуральне число каже, скільки разів береш дріб.",
          "Множиш чисельник. Знаменник лишається — клітинки ті самі.",
          ["", em("3 · (2/5) = 6/5"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Ułamek liczby — to też mnożenie",
        ua: "Дріб від числа — це теж множення"
      },
      formula: "1/2 z 10 = 10 · (1/2) = 5",
      text: {
        pl: [
          ["„Połowa z dziesięciu” znaczy: ", em("10 · (1/2)"), "."],
          "Kolejność czynników nie zmienia iloczynu.",
          "Dlatego ułamek liczby i liczba razy ułamek to jeden rachunek."
        ],
        ua: [
          ["«Половина з десяти» означає: ", em("10 · (1/2)"), "."],
          "Порядок множників не змінює добуток.",
          "Тому дріб від числа і число разів дріб — один рахунок."
        ]
      }
    },
    {
      type: "comparison",
      heading: {
        pl: "Most do procentów — tylko dwa mosty",
        ua: "Місток до відсотків — лише два"
      },
      visual: { kind: "grid", rows: 2, cols: 5 },
      text: {
        pl: [
          ["Siatka ", em("2"), " na ", em("5"), " to ", em("10"), " kratek."],
          ["", em("1/2"), " z nich to ", em("5"), " kratek — połowa, czyli ", em("50%"), "."],
          ["", em("1/10"), " to jedna kratka, czyli ", em("10%"), "."],
          "Dziś tylko ten most. Procentów nie rozkręcamy na cały rozdział."
        ],
        ua: [
          ["Сітка ", em("2"), " на ", em("5"), " — це ", em("10"), " клітинок."],
          ["", em("1/2"), " з них — ", em("5"), " клітинок, половина, тобто ", em("50%"), "."],
          ["", em("1/10"), " — одна клітинка, тобто ", em("10%"), "."],
          "Сьогодні лише цей місток. Відсотки не розкручуємо на цілий розділ."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "3 · (2/5)",
        ua: "3 · (2/5)"
      },
      reveal: true,
      steps: [
        { formula: "3 · (2/5) = (3 · 2)/5" },
        { formula: "6/5" },
        {
          formula: "1 1/5",
          text: {
            pl: ["", em("5/5"), " to całość, zostaje ", em("1/5"), "."],
            ua: ["", em("5/5"), " — ціле, лишається ", em("1/5"), "."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "1/4 z 12 cukierków",
        ua: "1/4 з 12 цукерок"
      },
      visual: { kind: "grid", rows: 3, cols: 4 },
      reveal: true,
      steps: [
        { formula: "1/4 z 12 = 12 · (1/4)" },
        { formula: "12/4" },
        {
          formula: "3",
          text: {
            pl: ["Siatka ", em("3"), " na ", em("4"), " ma ", em("12"), " kratek. Jedna kolumna to ", em("3"), "."],
            ua: ["Сітка ", em("3"), " на ", em("4"), " має ", em("12"), " клітинок. Один стовпець — ", em("3"), "."]
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
        { pl: "mnożenie ułamka przez liczbę naturalną", ua: "множення дробу на натуральне число" },
        { pl: "ułamek liczby", ua: "дріб від числа" },
        { pl: "połowa", ua: "половина" },
        { pl: "procent (most)", ua: "відсоток (місток)" }
      ],
      phrases: [
        { pl: "Oblicz ułamek liczby.", ua: "Обчисли дріб від числа." },
        { pl: "Pomnóż ułamek przez liczbę naturalną.", ua: "Помнож дріб на натуральне число." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Cztery piąte",
        ua: "Чотири п’ятих"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 4 },
      task: {
        id: "ul25-guided-4-15",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("4 · (1/5)"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("4 · (1/5)"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "4/5",
        hint: {
          pl: "Mnożysz licznik: 4 · 1. Mianownik 5 zostaje.",
          ua: "Множиш чисельник: 4 · 1. Знаменник 5 лишається."
        },
        explanation: {
          pl: "4 · (1/5) = 4/5.",
          ua: "4 · (1/5) = 4/5."
        },
        mistakes: [
          {
            answer: "4/20",
            feedback: {
              pl: "Pomnożyłeś i licznik, i mianownik. Mianownik zostaje.",
              ua: "Помножив і чисельник, і знаменник. Знаменник лишається."
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
        pl: "3 · (1/4) = 3/12",
        ua: "3 · (1/4) = 3/12"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      text: {
        pl: [
          "Ktoś pomnożył licznik i mianownik przez 3.",
          "To byłoby rozszerzanie, nie „trzy razy kawałek”.",
          ["Trzy ćwiartki to ", em("3/4"), ", nie ", em("3/12"), "."]
        ],
        ua: [
          "Хтось помножив чисельник і знаменник на 3.",
          "Це було б розширення, не «три рази шматочок».",
          ["Три чверті — це ", em("3/4"), ", не ", em("3/12"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Pięć ósmych",
        ua: "П’ять восьмих"
      },
      task: {
        id: "ul25-5-razy-18",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("5 · (1/8)"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("5 · (1/8)"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "5/8",
        hint: {
          pl: "5 · 1 u góry, 8 na dole.",
          ua: "5 · 1 вгорі, 8 внизу."
        },
        explanation: {
          pl: "5 · (1/8) = 5/8.",
          ua: "5 · (1/8) = 5/8."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Połowa z szesnastu",
        ua: "Половина з шістнадцяти"
      },
      visual: { kind: "grid", rows: 4, cols: 4 },
      task: {
        id: "ul25-polowa-16",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile to ", em("1/2"), " z ", em("16"), "? Wpisz liczbę."],
          ua: ["Скільки це ", em("1/2"), " з ", em("16"), "? Введи число."]
        },
        answer: 8,
        hint: {
          pl: "16 · (1/2) = 16 : 2.",
          ua: "16 · (1/2) = 16 : 2."
        },
        explanation: {
          pl: "1/2 z 16 = 16 · (1/2) = 8.",
          ua: "1/2 з 16 = 16 · (1/2) = 8."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dwa razy trzy czwarte",
        ua: "Двічі три четвертих"
      },
      task: {
        id: "ul25-2-razy-34",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2 · (3/4)"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2 · (3/4)"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["6/4", "3/2", "1 1/2", "1 2/4"],
        hint: {
          pl: "2 · 3 = 6, mianownik 4. Potem możesz skrócić albo zapisać mieszaną.",
          ua: "2 · 3 = 6, знаменник 4. Потім можеш скоротити або записати мішаним."
        },
        explanation: {
          pl: "2 · (3/4) = 6/4 = 3/2 = 1 1/2.",
          ua: "2 · (3/4) = 6/4 = 3/2 = 1 1/2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Most 1/10",
        ua: "Місток 1/10"
      },
      task: {
        id: "ul25-tf-10procent",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Zdanie: ", em("1/10"), " z ", em("20"), " cukierków to ", em("2"), " cukierki, czyli ", em("10%"), " z dwudziestu."],
          ua: ["Речення: ", em("1/10"), " з ", em("20"), " цукерок — це ", em("2"), " цукерки, тобто ", em("10%"), " з двадцяти."]
        },
        answer: true,
        hint: {
          pl: "1/10 z 20 = 20 : 10. A 1/10 to most do 10%.",
          ua: "1/10 з 20 = 20 : 10. А 1/10 — місток до 10%."
        },
        explanation: {
          pl: "Tak. 20 · (1/10) = 2. Jedna dziesiąta to 10%.",
          ua: "Так. 20 · (1/10) = 2. Одна десята — це 10%."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Cukierki Ani",
        ua: "Цукерки Ані"
      },
      text: {
        pl: [
          ["Ania ma ", em("12"), " cukierków."],
          ["Zostawia siostrze ", em("1/4"), " z nich."]
        ],
        ua: [
          ["Аня має ", em("12"), " цукерок."],
          ["Залишає сестрі ", em("1/4"), " з них."]
        ]
      },
      visual: { kind: "grid", rows: 3, cols: 4 },
      task: {
        id: "ul25-cukierki-14-z-12",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile cukierków dostanie siostra? Wpisz liczbę."],
          ua: ["Скільки цукерок отримає сестра? Введи число."]
        },
        answer: 3,
        hint: {
          pl: "1/4 z 12 = 12 · (1/4).",
          ua: "1/4 з 12 = 12 · (1/4)."
        },
        explanation: {
          pl: "12 · (1/4) = 12/4 = 3.",
          ua: "12 · (1/4) = 12/4 = 3."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Kieszonkowe",
        ua: "Кишенькові"
      },
      text: {
        pl: [
          ["Tomek dostał ", em("20"), " zł."],
          ["Połowę odkłada do skarbonki."]
        ],
        ua: [
          ["Томек отримав ", em("20"), " zł."],
          ["Половину відкладає до скарбнички."]
        ]
      },
      task: {
        id: "ul25-pieniadze-12-z-20",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile złotych idzie do skarbonki? To też ", em("50%"), " z dwudziestu. Wpisz liczbę."],
          ua: ["Скільки злотих іде до скарбнички? Це також ", em("50%"), " з двадцяти. Введи число."]
        },
        answer: 10,
        hint: {
          pl: "1/2 z 20 = 20 · (1/2). 1/2 to 50%.",
          ua: "1/2 з 20 = 20 · (1/2). 1/2 — це 50%."
        },
        explanation: {
          pl: "20 · (1/2) = 10 zł. Połowa to 50%.",
          ua: "20 · (1/2) = 10 zł. Половина — це 50%."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy to ten sam rachunek?",
        ua: "Чи це той самий рахунок?"
      },
      text: {
        pl: [
          ["Jedno zdanie: ", em("1/2"), " z ", em("10"), " cukierków."],
          ["Drugie: ", em("10 · (1/2)"), "."],
          "Nie zgaduj z szyldu. Policz oba."
        ],
        ua: [
          ["Одне речення: ", em("1/2"), " з ", em("10"), " цукерок."],
          ["Друге: ", em("10 · (1/2)"), "."],
          "Не вгадуй з вивіски. Полічи обидва."
        ]
      },
      task: {
        id: "ul25-challenge-to-samo",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Czy 1/2 z 10 to to samo co 10 · (1/2)?",
          ua: "Чи 1/2 з 10 — те саме, що 10 · (1/2)?"
        },
        options: [
          { id: "a", label: { pl: "Tak — oba dają 5", ua: "Так — обидва дають 5" } },
          { id: "b", label: { pl: "Nie — „ułamek liczby” to inne działanie", ua: "Ні — «дріб від числа» це інша дія" } },
          { id: "c", label: { pl: "Tylko 10 · (1/2) ma sens", ua: "Лише 10 · (1/2) має сенс" } }
        ],
        answer: "a",
        hint: {
          pl: "Iloczyn nie zależy od kolejności czynników.",
          ua: "Добуток не залежить від порядку множників."
        },
        explanation: {
          pl: "1/2 z 10 = 10 · (1/2) = 5. Dwa odczyty, jeden rachunek.",
          ua: "1/2 з 10 = 10 · (1/2) = 5. Два прочитання, один рахунок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„Ułamek liczby” właśnie zapisujemy jako mnożenie. To nie inne działanie.",
              ua: "«Дріб від числа» якраз записуємо як множення. Це не інша дія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Oba zapisy mają sens i dają 5.",
              ua: "Обидва записи мають сенс і дають 5."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Liczba razy ułamek",
        ua: "Чи вже вмію? Число разів дріб"
      },
      task: {
        id: "ul25-check-razy",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("3 · (1/7)"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("3 · (1/7)"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/7",
        hint: {
          pl: "Mnożysz licznik. Siódemka zostaje.",
          ua: "Множиш чисельник. Сімка лишається."
        },
        explanation: {
          pl: "3 · (1/7) = 3/7.",
          ua: "3 · (1/7) = 3/7."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Ułamek liczby",
        ua: "Чи вже вмію? Дріб від числа"
      },
      task: {
        id: "ul25-check-z-liczby",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile to ", em("1/5"), " z ", em("20"), "? Wpisz liczbę."],
          ua: ["Скільки це ", em("1/5"), " з ", em("20"), "? Введи число."]
        },
        answer: 4,
        hint: {
          pl: "20 · (1/5) = 20 : 5.",
          ua: "20 · (1/5) = 20 : 5."
        },
        explanation: {
          pl: "20 · (1/5) = 4.",
          ua: "20 · (1/5) = 4."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "n · (a/b) = (n · a)/b     oraz     1/2 z 10 = 10 · (1/2)",
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      text: {
        pl: [
          "Liczba razy ułamek: mnożysz licznik.",
          "Ułamek liczby to to samo mnożenie.",
          ["Most: ", em("1/2 = 50%"), ", ", em("1/10 = 10%"), " — na później zostawiamy resztę procentów."]
        ],
        ua: [
          "Число разів дріб: множиш чисельник.",
          "Дріб від числа — те саме множення.",
          ["Місток: ", em("1/2 = 50%"), ", ", em("1/10 = 10%"), " — решту відсотків лишаємо на потім."]
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
          "Zaraz pomnożysz ułamek przez ułamek. Najpierw pamiętaj: n · (a/b) to (n · a)/b.",
          "I że „część z liczby” już umiesz."
        ],
        ua: [
          "Зараз помножиш дріб на дріб. Спочатку пам’ятай: n · (a/b) — це (n · a)/b.",
          "І що «частину від числа» уже вмієш."
        ]
      }
    }
  ]
};
