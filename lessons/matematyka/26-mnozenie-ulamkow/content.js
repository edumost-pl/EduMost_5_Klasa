function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Kawałek z kawałka",
        ua: "Шматочок зі шматочка"
      },
      formula: "1/2 · 1/3 = 1/6",
      text: {
        pl: [
          "Bierzesz połowę trzeciej części paska.",
          "Prostokąt pokaże, skąd bierze się szósta."
        ],
        ua: [
          "Береш половину третьої частини смужки.",
          "Прямокутник покаже, звідки береться шоста."
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
        { pl: "pomnożyć dwa ułamki", ua: "помножити два дроби" },
        { pl: "zobaczyć iloczyn na prostokącie", ua: "побачити добуток на прямокутнику" },
        { pl: "skrócić przed mnożeniem przez wspólny dzielnik", ua: "скоротити перед множенням на спільний дільник" },
        { pl: "rozumieć, że mnożenie przez ułamek mniejszy od 1 zmniejsza", ua: "розуміти, що множення на дріб, менший за 1, зменшує" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Siatka 2 na 3",
        ua: "Сітка 2 на 3"
      },
      visual: { kind: "grid", rows: 2, cols: 3 },
      text: {
        pl: [
          ["Jeden bok pęka na ", em("2"), " (połówki), drugi na ", em("3"), " (trzecie)."],
          ["Razem ", em("6"), " małych prostokątów. Jeden z nich to ", em("1/6"), "."]
        ],
        ua: [
          ["Один бік тріщить на ", em("2"), " (половинки), другий на ", em("3"), " (треті)."],
          ["Разом ", em("6"), " маленьких прямокутників. Один з них — ", em("1/6"), "."]
        ]
      },
      prompt: {
        pl: [
          ["Połowa z jednej trzeciej to jeden kawałek z sześciu: ", em("1/2 · 1/3 = 1/6"), "."]
        ],
        ua: [
          ["Половина з однієї третьої — один шматочок із шести: ", em("1/2 · 1/3 = 1/6"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Licznik z licznikiem, mianownik z mianownikiem",
        ua: "Чисельник із чисельником, знаменник зі знаменником"
      },
      formula: "a/b · c/d = (a · c)/(b · d)",
      text: {
        pl: [
          "Mnożysz góry. Mnożysz doły.",
          ["", em("2/5 · 3/4 = 6/20"), ", a po skróceniu ", em("3/10"), "."]
        ],
        ua: [
          "Множиш верхи. Множиш низи.",
          ["", em("2/5 · 3/4 = 6/20"), ", а після скорочення ", em("3/10"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Skróć, zanim pomnożysz",
        ua: "Скороти, перш ніж помножити"
      },
      formula: "2/3 · 3/4 → skreśl 3 → 2/4 = 1/2",
      text: {
        pl: [
          ["W ", em("2/3 · 3/4"), " licznik ", em("3"), " i mianownik ", em("3"), " mają wspólny dzielnik ", em("3"), "."],
          "Dzielisz je przed mnożeniem — mniej roboty, ten sam wynik.",
          "To nadal skracanie, nie nowa czarna magia."
        ],
        ua: [
          ["У ", em("2/3 · 3/4"), " чисельник ", em("3"), " і знаменник ", em("3"), " мають спільний дільник ", em("3"), "."],
          "Ділиш їх перед множенням — менше роботи, той самий результат.",
          "Це досі скорочення, не нова чорна магія."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "1/2 · 1/3 na prostokącie",
        ua: "1/2 · 1/3 на прямокутнику"
      },
      reveal: true,
      steps: [
        { visual: { kind: "grid", rows: 2, cols: 3 } },
        { formula: "1/2 · 1/3 = (1 · 1)/(2 · 3)" },
        {
          formula: "1/6",
          visual: { kind: "fraction-bar", total: 6, filled: 1 },
          text: {
            pl: "Jeden z sześciu małych kawałków.",
            ua: "Один із шести маленьких шматочків."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Skracanie w locie: 2/3 · 3/5",
        ua: "Скорочення на льоту: 2/3 · 3/5"
      },
      reveal: true,
      steps: [
        { formula: "2/3 · 3/5" },
        {
          formula: "skreśl 3 i 3",
          text: {
            pl: ["Wspólny dzielnik ", em("3"), " w liczniku i mianowniku."],
            ua: ["Спільний дільник ", em("3"), " у чисельнику і знаменнику."]
          }
        },
        {
          formula: "2/5",
          text: {
            pl: "Zostaje 2 u góry i 5 na dole.",
            ua: "Лишається 2 вгорі і 5 внизу."
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
        { pl: "iloczyn ułamków", ua: "добуток дробів" },
        { pl: "prostokąt (model)", ua: "прямокутник (модель)" },
        { pl: "skracanie przed mnożeniem", ua: "скорочення перед множенням" },
        { pl: "wspólny dzielnik", ua: "спільний дільник" }
      ],
      phrases: [
        { pl: "Pomnóż ułamki.", ua: "Помнож дроби." },
        { pl: "Skróć przed mnożeniem.", ua: "Скороти перед множенням." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Połowa z dwóch trzecich",
        ua: "Половина з двох третіх"
      },
      task: {
        id: "ul26-guided-12-23",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/2 · 2/3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/2 · 2/3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["2/6", "1/3"],
        hint: {
          pl: "1 · 2 u góry, 2 · 3 na dole. Potem skróć przez 2.",
          ua: "1 · 2 вгорі, 2 · 3 внизу. Потім скороти на 2."
        },
        explanation: {
          pl: "1/2 · 2/3 = 2/6 = 1/3. Możesz skreślić dwójki wcześniej.",
          ua: "1/2 · 2/3 = 2/6 = 1/3. Можеш викреслити двійки раніше."
        },
        mistakes: [
          {
            answer: "3/5",
            feedback: {
              pl: "Dodałeś. Mnożenie ułamków to nie 1+2 i 2+3.",
              ua: "Додав. Множення дробів — це не 1+2 і 2+3."
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
        pl: "1/2 · 1/3 = 2/5",
        ua: "1/2 · 1/3 = 2/5"
      },
      visual: { kind: "grid", rows: 2, cols: 3 },
      text: {
        pl: [
          "To suma liczników i mianowników — dodawanie w przebraniu.",
          ["Prostokąt ", em("2"), " na ", em("3"), " ma ", em("6"), " kratek, nie 5."],
          ["", em("1/2 · 1/3 = 1/6"), "."]
        ],
        ua: [
          "Це сума чисельників і знаменників — додавання в масці.",
          ["Прямокутник ", em("2"), " на ", em("3"), " має ", em("6"), " клітинок, не 5."],
          ["", em("1/2 · 1/3 = 1/6"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ćwiartka razy połówka",
        ua: "Чверть рази половина"
      },
      visual: { kind: "fraction-bar", total: 8, filled: 1 },
      task: {
        id: "ul26-14-razy-12",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/4 · 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/4 · 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/8",
        hint: {
          pl: "1 · 1 u góry, 4 · 2 na dole.",
          ua: "1 · 1 вгорі, 4 · 2 внизу."
        },
        explanation: {
          pl: "1/4 · 1/2 = 1/8.",
          ua: "1/4 · 1/2 = 1/8."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Bez skracania na starcie",
        ua: "Без скорочення на старті"
      },
      task: {
        id: "ul26-23-razy-15",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("2/3 · 1/5"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/3 · 1/5"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "2/15",
        hint: {
          pl: "2 · 1 i 3 · 5.",
          ua: "2 · 1 і 3 · 5."
        },
        explanation: {
          pl: "2/3 · 1/5 = 2/15.",
          ua: "2/3 · 1/5 = 2/15."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Skróć trójki",
        ua: "Скороти трійки"
      },
      task: {
        id: "ul26-skroc-23-35",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2/3 · 3/5"), ". Skróć, jeśli możesz. Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/3 · 3/5"), ". Скороти, якщо можеш. Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["2/5", "6/15"],
        hint: {
          pl: "Trójka u góry i trójka na dole — wspólny dzielnik 3.",
          ua: "Трійка вгорі і трійка внизу — спільний дільник 3."
        },
        explanation: {
          pl: "Po skreśleniu 3 zostaje 2/5. Albo 2/3 · 3/5 = 6/15 = 2/5.",
          ua: "Після викреслення 3 лишається 2/5. Або 2/3 · 3/5 = 6/15 = 2/5."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Trzy czwarte razy dwie piąte",
        ua: "Три четвертих рази дві п’ятих"
      },
      task: {
        id: "ul26-34-razy-25",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("3/4 · 2/5"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("3/4 · 2/5"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["6/20", "3/10"],
        hint: {
          pl: "3 · 2 = 6, 4 · 5 = 20. Skróć przez 2.",
          ua: "3 · 2 = 6, 4 · 5 = 20. Скороти на 2."
        },
        explanation: {
          pl: "3/4 · 2/5 = 6/20 = 3/10.",
          ua: "3/4 · 2/5 = 6/20 = 3/10."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Połowa ogródka, potem trzecia",
        ua: "Половина городчика, потім третя"
      },
      text: {
        pl: [
          ["Ola ma grządkę. Sadzi kwiaty na ", em("1/2"), " grządki."],
          ["Z tej połowy tylko ", em("1/3"), " to róże."]
        ],
        ua: [
          ["Оля має грядку. Садить квіти на ", em("1/2"), " грядки."],
          ["З цієї половини лише ", em("1/3"), " — троянди."]
        ]
      },
      visual: { kind: "grid", rows: 2, cols: 3 },
      task: {
        id: "ul26-ogrod-12-13",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jaką część całej grządki zajmują róże? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яку частину всієї грядки займають троянди? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/6",
        hint: {
          pl: "Kawałek z kawałka: 1/2 · 1/3.",
          ua: "Шматочок зі шматочка: 1/2 · 1/3."
        },
        explanation: {
          pl: "1/2 · 1/3 = 1/6 grządki.",
          ua: "1/2 · 1/3 = 1/6 грядки."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Szklanka w przepisie",
        ua: "Склянка в рецепті"
      },
      text: {
        pl: [
          ["W przepisie jest ", em("3/4"), " szklanki mąki."],
          ["Tomek piecze połowę porcji, więc bierze ", em("1/2"), " z tej ilości."]
        ],
        ua: [
          ["У рецепті ", em("3/4"), " склянки борошна."],
          ["Томек пече половину порції, тож бере ", em("1/2"), " з цієї кількості."]
        ]
      },
      task: {
        id: "ul26-przepis-34-12",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Ile mąki wsypie Tomek? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки борошна насипле Томек? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/8"],
        hint: {
          pl: "1/2 · 3/4.",
          ua: "1/2 · 3/4."
        },
        explanation: {
          pl: "1/2 · 3/4 = 3/8 szklanki.",
          ua: "1/2 · 3/4 = 3/8 склянки."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Mnożenie przez ułamek mniejszy od 1",
        ua: "Множення на дріб, менший за 1"
      },
      text: {
        pl: [
          ["Weź ", em("3/4"), ". Pomnóż przez ", em("1/2"), "."],
          "Nie zgaduj „mnożenie zawsze powiększa” — to działa przy liczbach większych od 1."
        ],
        ua: [
          ["Візьми ", em("3/4"), ". Помнож на ", em("1/2"), "."],
          "Не вгадуй «множення завжди збільшує» — це працює при числах, більших за 1."
        ]
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.375] },
      task: {
        id: "ul26-challenge-mniejsze",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co się stanie z 3/4 po pomnożeniu przez 1/2?",
          ua: "Що станеться з 3/4 після множення на 1/2?"
        },
        options: [
          { id: "a", label: { pl: "Wynik będzie większy niż 3/4", ua: "Результат буде більший ніж 3/4" } },
          { id: "b", label: { pl: "Wynik będzie mniejszy niż 3/4", ua: "Результат буде менший ніж 3/4" } },
          { id: "c", label: { pl: "Wynik zostanie 3/4", ua: "Результат лишиться 3/4" } }
        ],
        answer: "b",
        hint: {
          pl: "1/2 · 3/4 = 3/8. Porównaj 3/8 i 3/4 = 6/8.",
          ua: "1/2 · 3/4 = 3/8. Порівняй 3/8 і 3/4 = 6/8."
        },
        explanation: {
          pl: "1/2 · 3/4 = 3/8. 3/8 < 6/8 = 3/4. Mnożenie przez ułamek mniejszy od 1 daje mniejszy wynik.",
          ua: "1/2 · 3/4 = 3/8. 3/8 < 6/8 = 3/4. Множення на дріб, менший за 1, дає менший результат."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Mnożenie przez 2 powiększa. Mnożenie przez 1/2 to branie połowy — zmniejsza.",
              ua: "Множення на 2 збільшує. Множення на 1/2 — взяття половини, зменшує."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zostaje 3/4 tylko po pomnożeniu przez 1.",
              ua: "Лишається 3/4 лише після множення на 1."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Iloczyn",
        ua: "Чи вже вмію? Добуток"
      },
      task: {
        id: "ul26-check-iloczyn",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/3 · 1/3"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/3 · 1/3"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "1/9",
        hint: {
          pl: "1 · 1 u góry, 3 · 3 na dole.",
          ua: "1 · 1 вгорі, 3 · 3 внизу."
        },
        explanation: {
          pl: "1/3 · 1/3 = 1/9.",
          ua: "1/3 · 1/3 = 1/9."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Skracanie",
        ua: "Чи вже вмію? Скорочення"
      },
      task: {
        id: "ul26-check-skroc",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2/5 · 5/8"), ". Skróć. Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/5 · 5/8"), ". Скороти. Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["2/8", "1/4", "10/40"],
        hint: {
          pl: "Piątki się skracają. Zostaje 2/8.",
          ua: "П’ятірки скорочуються. Лишається 2/8."
        },
        explanation: {
          pl: "Po skreśleniu 5: 2/8 = 1/4. Albo 10/40 = 1/4.",
          ua: "Після викреслення 5: 2/8 = 1/4. Або 10/40 = 1/4."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "a/b · c/d = (a · c)/(b · d)",
      visual: { kind: "grid", rows: 2, cols: 3 },
      text: {
        pl: [
          "Mnożysz liczniki. Mnożysz mianowniki.",
          "Prostokąt: wiersze × kolumny — tyle małych kawałków.",
          "Skracaj przez wspólny dzielnik przed mnożeniem.",
          "Ułamek mniejszy od 1 zmniejsza liczbę, którą mnożysz."
        ],
        ua: [
          "Множиш чисельники. Множиш знаменники.",
          "Прямокутник: рядки × стовпці — стільки маленьких шматочків.",
          "Скорочуй на спільний дільник перед множенням.",
          "Дріб, менший за 1, зменшує число, яке множиш."
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
          "Zaraz pojawi się odwrotność. Dzielenie ułamków to mnożenie przez odwrotność.",
          "Iloczyn, który dziś umiesz, będzie drugim krokiem."
        ],
        ua: [
          "Зараз з’явиться обернене число. Ділення дробів — це множення на обернене.",
          "Добуток, який сьогодні вмієш, буде другим кроком."
        ]
      }
    }
  ]
};
