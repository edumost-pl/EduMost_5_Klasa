function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dwie podstawy i pasek z boku",
        ua: "Дві основи і бічна смуга"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "prostopadłościan jest graniastosłupem — jego siatka już znasz", ua: "прямокутний паралелепіпед є призмою — його розгортку вже знаєш" }
      },
      text: {
        pl: [
          "Graniastosłup prosty: dwie jednakowe podstawy i prostokąty dookoła.",
          "Ostrosłup ma inną siatkę — jedną podstawę i trójkąty. Dziś odróżnisz je i policzysz krawędź z podanej relacji."
        ],
        ua: [
          "Пряма призма: дві однакові основи і прямокутники навколо.",
          "Піраміда має іншу розгортку — одну основу і трикутники. Сьогодні відрізниш їх і полічиш ребро з даного відношення."
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
        { pl: "rozpoznać siatkę graniastosłupa: 2 podstawy + prostokąty boczne", ua: "розпізнати розгортку призми: 2 основи + бічні прямокутники" },
        { pl: "odróżnić siatkę graniastosłupa od siatki ostrosłupa", ua: "відрізнити розгортку призми від розгортки піраміди" },
        { pl: "obliczyć długość krawędzi z podanej relacji", ua: "обчислити довжину ребра з даного відношення" },
        { pl: "wskazać, która siatka nie jest graniastosłupem", ua: "вказати, яка розгортка не є призмою" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Co musi być na siatce?",
        ua: "Що має бути на розгортці?"
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "podstawa może być trójkątem", ua: "основа може бути трикутником" }
      },
      text: {
        pl: [
          "Graniastosłup trójkątny: 2 trójkąty (podstawy) i 3 prostokąty (ściany boczne).",
          "Graniastosłup czworokątny: 2 czworokąty i 4 prostokąty — u prostopadłościanu wszystko to prostokąty."
        ],
        ua: [
          "Трикутна призма: 2 трикутники (основи) і 3 прямокутники (бічні грані).",
          "Чотирикутна призма: 2 чотирикутники і 4 прямокутники — у паралелепіпеда все це прямокутники."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Dwie podstawy + ściany boczne",
        ua: "Дві основи + бічні грані"
      },
      formula: "ściany = 2 podstawy + n prostokątów",
      text: {
        pl: [
          "n to liczba boków podstawy.",
          "Trójkąt: n = 3, razem 5 ścian. Czworokąt: n = 4, razem 6 ścian.",
          "Na siatce prostokąty boczne często stoją w jednym pasie — jak ogrodzenie wokół podstaw."
        ],
        ua: [
          "n — число сторін основи.",
          "Трикутник: n = 3, разом 5 граней. Чотирикутник: n = 4, разом 6 граней.",
          "На розгортці бічні прямокутники часто стоять однією смугою — як огорожа навколо основ."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Siatka graniastosłupa trójkątnego",
        ua: "Розгортка трикутної призми"
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "dwie takie podstawy", ua: "дві такі основи" }
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Trzy prostokąty w rzędzie (ściany boczne). Do skrajnych albo do środkowego przyklejasz dwa trójkąty.",
            ua: "Три прямокутники в ряду (бічні грані). До крайніх або до середнього приклеюєш два трикутники."
          }
        },
        {
          formula: "2 trójkąty + 3 prostokąty",
          text: {
            pl: "Po złożeniu trójkąty stają się dnem i pokrywą. To siatka graniastosłupa, nie ostrosłupa.",
            ua: "Після складання трикутники стають дном і кришкою. Це розгортка призми, не піраміди."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Ostrosłup ma inną siatkę",
        ua: "Піраміда має іншу розгортку"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "jedna podstawa ostrosłupa — np. kwadrat", ua: "одна основа піраміди — напр. квадрат" }
      },
      text: {
        pl: [
          ["Ostrosłup: ", em("jedna"), " podstawa i trójkąty boczne zbiegające się w wierzchołku."],
          "Nie ma drugiej podstawy. Nie ma paska samych prostokątów dookoła.",
          "Jeśli na rysunku widzisz tylko jeden wielokąt i trójkąty — to nie jest siatka graniastosłupa."
        ],
        ua: [
          ["Піраміда: ", em("одна"), " основа і бічні трикутники, що сходяться у вершині."],
          "Немає другої основи. Немає смуги самих прямокутників навколо.",
          "Якщо на рисунку лише один многокутник і трикутники — це не розгортка призми."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krawędź z relacji",
        ua: "Ребро з відношення"
      },
      reveal: true,
      steps: [
        {
          formula: "krawędź podstawy  6 cm,   wysokość  2 razy dłuższa",
          text: {
            pl: "Wysokość graniastosłupa to krawędź boczna (w graniastosłupie prostym).",
            ua: "Висота призми — це бічне ребро (у прямій призмі)."
          }
        },
        { formula: "wysokość = 2 · 6 cm = 12 cm" },
        {
          formula: "prostokąt boczny:  6 cm × 12 cm",
          text: {
            pl: ["Na siatce ściana boczna ma boki ", em("6 cm"), " i ", em("12 cm"), "."],
            ua: ["На розгортці бічна грань має сторони ", em("6 см"), " і ", em("12 см"), "."]
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
        { pl: "siatka graniastosłupa", ua: "розгортка призми" },
        { pl: "siatka ostrosłupa", ua: "розгортка піраміди" },
        { pl: "podstawa", ua: "основа" },
        { pl: "ściana boczna", ua: "бічна грань" },
        { pl: "krawędź boczna, wysokość", ua: "бічне ребро, висота" },
        { pl: "relacja między krawędziami", ua: "відношення між ребрами" }
      ],
      phrases: [
        { pl: "Czy to siatka graniastosłupa?", ua: "Чи це розгортка призми?" },
        { pl: "Oblicz krawędź z podanej relacji.", ua: "Обчисли ребро з даного відношення." },
        { pl: "Wskaż siatkę, która nie jest graniastosłupem.", ua: "Вкажи розгортку, яка не є призмою." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile ścian bocznych?",
        ua: "Скільки бічних граней?"
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "podstawa trójkątna", ua: "трикутна основа" }
      },
      task: {
        id: "siat-gran-guided-lat",
        type: "input-number",
        level: "A",
        question: {
          pl: "Graniastosłup trójkątny. Ile ma prostokątnych ścian bocznych?",
          ua: "Трикутна призма. Скільки в неї прямокутних бічних граней?"
        },
        answer: 3,
        hint: {
          pl: "Tyle, ile boków ma podstawa.",
          ua: "Стільки, скільки сторін має основа."
        },
        explanation: {
          pl: "Podstawa ma 3 boki, więc 3 prostokąty boczne.",
          ua: "Основа має 3 сторони, отже 3 бічні прямокутники."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "5 to wszystkie ściany (2 podstawy + 3 boki). Pytanie jest tylko o ściany boczne.",
              ua: "5 — усі грані (2 основи + 3 боки). Питання лише про бічні грані."
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
        pl: "Kwadrat i cztery trójkąty to siatka graniastosłupa",
        ua: "Квадрат і чотири трикутники — розгортка призми"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "to raczej ostrosłup", ua: "це радше піраміда" }
      },
      text: {
        pl: [
          "Jedna podstawa i trójkąty boczne — to siatka ostrosłupa.",
          "Graniastosłup potrzebuje drugiej podstawy i prostokątów, nie samych trójkątów bocznych."
        ],
        ua: [
          "Одна основа і бічні трикутники — розгортка піраміди.",
          "Призмі потрібна друга основа і прямокутники, не самі бічні трикутники."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Prism czy ostrosłup?",
        ua: "Призма чи піраміда?"
      },
      task: {
        id: "siat-gran-vs-pyr",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który opis to siatka graniastosłupa?",
          ua: "Який опис — розгортка призми?"
        },
        options: [
          { id: "a", label: { pl: "dwa trójkąty i trzy prostokąty", ua: "два трикутники і три прямокутники" } },
          { id: "b", label: { pl: "jeden kwadrat i cztery trójkąty", ua: "один квадрат і чотири трикутники" } },
          { id: "c", label: { pl: "jeden trójkąt i trzy trójkąty", ua: "один трикутник і три трикутники" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch podstaw.",
          ua: "Шукай дві основи."
        },
        explanation: {
          pl: "Dwa trójkąty to dwie podstawy, trzy prostokąty — ściany boczne. b i c to siatki ostrosłupów.",
          ua: "Два трикутники — дві основи, три прямокутники — бічні грані. b і c — розгортки пірамід."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To ostrosłup o podstawie kwadratu.",
              ua: "Це піраміда з основою-квадратом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To ostrosłup trójkątny: 1 + 3 trójkąty.",
              ua: "Це трикутна піраміда: 1 + 3 трикутники."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Wysokość z relacji",
        ua: "Висота з відношення"
      },
      task: {
        id: "siat-gran-height",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Krawędź podstawy ma ", em("5 cm"), ". Wysokość graniastosłupa jest o ", em("3 cm"), " dłuższa. Ile cm ma wysokość?"],
          ua: ["Ребро основи має ", em("5 см"), ". Висота призми на ", em("3 см"), " довша. Скільки см має висота?"]
        },
        answer: 8,
        hint: {
          pl: "Dłuższa o 3 znaczy: dodaj 3.",
          ua: "Довша на 3 означає: додай 3."
        },
        explanation: {
          pl: "5 + 3 = 8 cm.",
          ua: "5 + 3 = 8 см."
        },
        mistakes: [
          {
            answer: 15,
            feedback: {
              pl: "To byłoby 5 · 3. „O 3 cm dłuższa” to dodawanie, nie mnożenie.",
              ua: "Так було б 5 · 3. «На 3 см довша» — додавання, не множення."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Prostokąt na siatce",
        ua: "Прямокутник на розгортці"
      },
      text: {
        pl: [
          ["Podstawa graniastosłupa to kwadrat o boku ", em("4 cm"), "."],
          ["Wysokość jest ", em("2 razy"), " dłuższa od boku podstawy."]
        ],
        ua: [
          ["Основа призми — квадрат зі стороною ", em("4 см"), "."],
          ["Висота у ", em("2 рази"), " довша за сторону основи."]
        ]
      },
      task: {
        id: "siat-gran-rect",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile cm ma dłuższy bok prostokąta bocznego na siatce?",
          ua: "Скільки см має довша сторона бічного прямокутника на розгортці?"
        },
        answer: 8,
        hint: {
          pl: "Najpierw wysokość: 2 · 4. To jeden bok prostokąta; drugi to 4 cm.",
          ua: "Спочатку висота: 2 · 4. Це одна сторона прямокутника; друга — 4 см."
        },
        explanation: {
          pl: "Wysokość = 2 · 4 = 8 cm. Prostokąt boczny ma boki 4 cm i 8 cm. Dłuższy to 8 cm.",
          ua: "Висота = 2 · 4 = 8 см. Бічний прямокутник має сторони 4 см і 8 см. Довша — 8 см."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Siatka pudełka",
        ua: "Розгортка коробки"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "siatka prostopadłościanu = siatka graniastosłupa", ua: "розгортка паралелепіпеда = розгортка призми" }
      },
      text: {
        pl: [
          "Prostopadłościan jest graniastosłupem o podstawie prostokąta."
        ],
        ua: [
          "Прямокутний паралелепіпед є призмою з основою-прямокутником."
        ]
      },
      task: {
        id: "siat-gran-cuboid-is-prism",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy siatka prostopadłościanu jest siatką graniastosłupa?",
          ua: "Чи розгортка прямокутного паралелепіпеда є розгорткою призми?"
        },
        answer: true,
        hint: {
          pl: "Ile podstaw ma prostopadłościan?",
          ua: "Скільки основ у паралелепіпеда?"
        },
        explanation: {
          pl: "Tak. Dwie prostokątne podstawy i cztery prostokąty boczne — to siatka graniastosłupa.",
          ua: "Так. Дві прямокутні основи і чотири бічні прямокутники — розгортка призми."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która siatka nie jest graniastosłupem?",
        ua: "Яка розгортка не є призмою?"
      },
      text: {
        pl: [
          "Szukaj drugiej podstawy. Jeśli jej nie ma — to nie graniastosłup."
        ],
        ua: [
          "Шукай другу основу. Якщо її немає — це не призма."
        ]
      },
      task: {
        id: "siat-gran-not-prism",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która siatka nie jest siatką graniastosłupa?",
          ua: "Яка розгортка не є розгорткою призми?"
        },
        options: [
          { id: "a", label: { pl: "2 trójkąty równoboczne i 3 prostokąty w pasie", ua: "2 рівносторонні трикутники і 3 прямокутники в смузі" } },
          { id: "b", label: { pl: "1 kwadrat i 4 trójkąty przy jego bokach", ua: "1 квадрат і 4 трикутники при його сторонах" } },
          { id: "c", label: { pl: "2 prostokąty i 4 prostokąty w pasie (siatka pudełka)", ua: "2 прямокутники і 4 прямокутники в смузі (розгортка коробки)" } }
        ],
        answer: "b",
        hint: {
          pl: "Ostrosłup: jedna podstawa. Graniastosłup: dwie.",
          ua: "Піраміда: одна основа. Призма: дві."
        },
        explanation: {
          pl: "b to siatka ostrosłupa czworokątnego. a to graniastosłup trójkątny. c to prostopadłościan, czyli też graniastosłup.",
          ua: "b — розгортка чотирикутної піраміди. a — трикутна призма. c — прямокутний паралелепіпед, тобто теж призма."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Dwie podstawy-trójkąty i trzy prostokąty — to właśnie graniastosłup trójkątny.",
              ua: "Дві основи-трикутники і три прямокутники — саме трикутна призма."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To siatka prostopadłościanu. Prostopadłościan jest graniastosłupem.",
              ua: "Це розгортка паралелепіпеда. Паралелепіпед є призмою."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Ściany razem",
        ua: "Чи вже вмію? Грані разом"
      },
      task: {
        id: "siat-gran-check-faces",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile ścian ma siatka graniastosłupa trójkątnego?",
          ua: "Скільки граней має розгортка трикутної призми?"
        },
        answer: 5,
        hint: {
          pl: "2 podstawy + 3 boki.",
          ua: "2 основи + 3 боки."
        },
        explanation: {
          pl: "2 + 3 = 5 ścian.",
          ua: "2 + 3 = 5 граней."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Relacja",
        ua: "Чи вже вмію? Відношення"
      },
      task: {
        id: "siat-gran-check-rel",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Bok podstawy ", em("6 cm"), ". Wysokość dwa razy większa. Ile cm ma krawędź boczna?"],
          ua: ["Сторона основи ", em("6 см"), ". Висота у два рази більша. Скільки см має бічне ребро?"]
        },
        answer: 12,
        hint: {
          pl: "2 · 6.",
          ua: "2 · 6."
        },
        explanation: {
          pl: "W graniastosłupie prostym krawędź boczna = wysokość = 12 cm.",
          ua: "У прямій призмі бічне ребро = висота = 12 см."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "2 podstawy + n prostokątów",
      text: {
        pl: [
          "Siatka graniastosłupa: dwie podstawy i prostokąty boczne.",
          "Ostrosłup: jedna podstawa i trójkąty. Krawędź liczysz z relacji: „o 3 dłuższa”, „2 razy większa”."
        ],
        ua: [
          "Розгортка призми: дві основи і бічні прямокутники.",
          "Піраміда: одна основа і трикутники. Ребро рахуєш з відношення: «на 3 довша», «у 2 рази більша»."
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
          "Później znów: „czy da się złożyć?” i „ile ma krawędź, gdy wysokość jest dwa razy większa?”.",
          "To nie nowy materiał — krótka powtórka siatek."
        ],
        ua: [
          "Пізніше знову: «чи можна скласти?» і «скільки має ребро, коли висота у два рази більша?».",
          "Це не новий матеріал — коротке повторення розгорток."
        ]
      }
    }
  ]
};
