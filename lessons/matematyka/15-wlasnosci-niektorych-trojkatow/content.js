function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dwa ramiona jak dwa kije od namiotu",
        ua: "Два рамена як дві жердини намету"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        label: { pl: "dwa boki równe", ua: "дві сторони рівні" }
      },
      text: {
        pl: [
          "Składasz namiot: dwa kije tej samej długości, dołem poprzeczka.",
          "Góra sama się ustawia. Kąty przy ziemi wychodzą takie same.",
          "Dziś własności trójkąta równoramiennego i równobocznego."
        ],
        ua: [
          "Складаєш намет: дві жердини однакової довжини, знизу поперечка.",
          "Верх сам стає. Кути біля землі виходять однакові.",
          "Сьогодні властивості рівнобедреного і рівностороннього трикутника."
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
        { pl: "wskazać ramiona i podstawę w trójkącie równoramiennym", ua: "вказати бічні сторони і основу в рівнобедреному трикутнику" },
        { pl: "korzystać z równości kątów przy podstawie", ua: "користуватися рівністю кутів при основі" },
        { pl: "pamiętać, że w równobocznym każdy kąt ma 60°", ua: "пам’ятати, що в рівносторонньому кожен кут має 60°" },
        { pl: "obliczyć brakujący kąt albo bok z obwodu", ua: "обчислити невідомий кут або сторону з периметра" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Co jest takie samo?",
        ua: "Що однакове?"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        height: true,
        label: { pl: "ramiona równe, poprzeczka u dołu", ua: "рамена рівні, поперечка внизу" }
      },
      text: {
        pl: [
          "Dwa ramiona tej samej długości. Na dole podstawa.",
          "Kąty przy podstawie — lewy i prawy — wyglądają na bliźniaki."
        ],
        ua: [
          "Два рамена тієї самої довжини. Знизу основа.",
          "Кути при основі — лівий і правий — виглядають як близнюки."
        ]
      },
      prompt: {
        pl: [
          "Jeśli ramiona są równe, kąty przy podstawie też są równe.",
          "To nie przypadek — to własność."
        ],
        ua: [
          "Якщо рамена рівні, кути при основі теж рівні.",
          "Це не випадковість — це властивість."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Równoramienny: kąty przy podstawie",
        ua: "Рівнобедрений: кути при основі"
      },
      formula: "kąt przy podstawie = kąt przy podstawie",
      text: {
        pl: [
          ["W trójkącie ", em("równoramiennym"), " dwa boki (ramiona) są równe."],
          ["Trzeci bok to ", em("podstawa"), "."],
          ["Kąty leżące przy podstawie są ", em("równe"), "."],
          "Kąt między ramionami to kąt przy wierzchołku."
        ],
        ua: [
          ["У ", em("рівнобедреному"), " трикутнику дві сторони (рамена) рівні."],
          ["Третя сторона — ", em("основа"), "."],
          ["Кути, що лежать при основі, ", em("рівні"), "."],
          "Кут між раменами — кут при вершині."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Wierzchołek 40° — ile przy podstawie?",
        ua: "Вершина 40° — скільки при основі?"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "triangle",
            triangle: "iso",
            label: { pl: "kąt przy wierzchołku 40°", ua: "кут при вершині 40°" }
          },
          formula: "40° + □ + □ = 180°"
        },
        {
          formula: "180° − 40° = 140°",
          text: {
            pl: "Na dwa równe kąty zostaje 140°.",
            ua: "На два рівні кути лишається 140°."
          }
        },
        {
          formula: "140° : 2 = 70°",
          text: {
            pl: ["Każdy kąt przy podstawie ma ", em("70°"), "."],
            ua: ["Кожен кут при основі має ", em("70°"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Równoboczny: wszystkie kąty 60°",
        ua: "Рівносторонній: усі кути 60°"
      },
      formula: "60° + 60° + 60° = 180°",
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "trójkąt równoboczny", ua: "рівносторонній трикутник" }
      },
      text: {
        pl: [
          ["Trójkąt ", em("równoboczny"), " ma trzy równe boki i trzy równe kąty."],
          ["Każdy kąt ma ", em("60°"), "."],
          "To też trójkąt równoramienny — tylko „podstawą” może być każdy bok."
        ],
        ua: [
          ["", em("Рівносторонній"), " трикутник має три рівні сторони і три рівні кути."],
          ["Кожен кут має ", em("60°"), "."],
          "Це також рівнобедрений — лише «основою» може бути кожна сторона."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Obwód i jeden bok",
        ua: "Периметр і одна сторона"
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trójkąt równoramienny. Ramiona po ", em("8"), ", podstawa ", em("5"), "."],
            ua: ["Рівнобедрений трикутник. Рамена по ", em("8"), ", основа ", em("5"), "."]
          }
        },
        {
          formula: "8 + 8 + 5 = 21",
          text: {
            pl: ["Obwód wynosi ", em("21"), "."],
            ua: ["Периметр дорівнює ", em("21"), "."]
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
        { pl: "trójkąt równoramienny", ua: "рівнобедрений трикутник" },
        { pl: "ramiona", ua: "бічні сторони / рамена" },
        { pl: "podstawa", ua: "основа" },
        { pl: "kąty przy podstawie", ua: "кути при основі" },
        { pl: "kąt przy wierzchołku", ua: "кут при вершині" },
        { pl: "trójkąt równoboczny", ua: "рівносторонній трикутник" },
        { pl: "obwód", ua: "периметр" }
      ],
      phrases: [
        { pl: "Oblicz kąty przy podstawie.", ua: "Обчисли кути при основі." },
        { pl: "Oblicz obwód trójkąta.", ua: "Обчисли периметр трикутника." },
        { pl: "Ile ma każdy kąt trójkąta równobocznego?", ua: "Скільки має кожен кут рівностороннього трикутника?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Kąty przy podstawie",
        ua: "Кути при основі"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        label: { pl: "kąt przy wierzchołku 50°", ua: "кут при вершині 50°" }
      },
      task: {
        id: "ramie-guided-base",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Trójkąt równoramienny. Kąt przy wierzchołku ma ", em("50°"), ". Ile stopni ma jeden kąt przy podstawie? Wpisz liczbę."],
          ua: ["Рівнобедрений трикутник. Кут при вершині має ", em("50°"), ". Скільки градусів має один кут при основі? Введи число."]
        },
        answer: 65,
        hint: {
          pl: "Od 180 odejmij 50. To, co zostanie, podziel na dwa równe kąty.",
          ua: "Від 180 відніми 50. Те, що лишиться, поділи на два рівні кути."
        },
        explanation: {
          pl: "180 − 50 = 130, 130 : 2 = 65. Każdy kąt przy podstawie ma 65°.",
          ua: "180 − 50 = 130, 130 : 2 = 65. Кожен кут при основі має 65°."
        },
        mistakes: [
          {
            answer: 130,
            feedback: {
              pl: "To suma obu kątów przy podstawie, nie jeden kąt.",
              ua: "Це сума обох кутів при основі, не один кут."
            }
          },
          {
            answer: 50,
            feedback: {
              pl: "50° stoi przy wierzchołku. Przy podstawie jest inaczej, chyba że trójkąt jest równoboczny.",
              ua: "50° стоїть при вершині. При основі інакше, хіба що трикутник рівносторонній."
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
        pl: "W trójkącie równobocznym jeden kąt może mieć 70°.",
        ua: "У рівносторонньому трикутнику один кут може мати 70°."
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "wszystkie kąty równe", ua: "усі кути рівні" }
      },
      text: {
        pl: [
          "Równe boki → równe kąty. Trzy równe kąty i suma 180°.",
          ["Każdy ma ", em("60°"), ", nie 70°."]
        ],
        ua: [
          "Рівні сторони → рівні кути. Три рівні кути і сума 180°.",
          ["Кожен має ", em("60°"), ", не 70°."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Równoboczny — jeden kąt",
        ua: "Рівносторонній — один кут"
      },
      task: {
        id: "ramie-prac-60",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile stopni ma każdy kąt trójkąta równobocznego? Wpisz liczbę.",
          ua: "Скільки градусів має кожен кут рівностороннього трикутника? Введи число."
        },
        answer: 60,
        hint: {
          pl: "Trzy równe kąty składają się na 180°.",
          ua: "Три рівні кути складаються на 180°."
        },
        explanation: {
          pl: "180 : 3 = 60.",
          ua: "180 : 3 = 60."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Obwód z podstawą",
        ua: "Периметр з основою"
      },
      task: {
        id: "ramie-prac-peri",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Obwód trójkąta równoramiennego wynosi ", em("20"), ". Podstawa ma ", em("6"), ". Ile ma jedno ramię? Wpisz liczbę."],
          ua: ["Периметр рівнобедреного трикутника дорівнює ", em("20"), ". Основа має ", em("6"), ". Скільки має одне рамено? Введи число."]
        },
        answer: 7,
        hint: {
          pl: "Od obwodu odejmij podstawę. To, co zostanie, to dwa ramiona.",
          ua: "Від периметра відніми основу. Те, що лишиться, — два рамена."
        },
        explanation: {
          pl: "20 − 6 = 14, 14 : 2 = 7. Każde ramię ma 7.",
          ua: "20 − 6 = 14, 14 : 2 = 7. Кожне рамено має 7."
        },
        mistakes: [
          {
            answer: 14,
            feedback: {
              pl: "14 to suma obu ramion. Pytanie jest o jedno ramię.",
              ua: "14 — сума обох рамен. Питання про одне рамено."
            }
          },
          {
            answer: 6,
            feedback: {
              pl: "6 to podstawa, nie ramię.",
              ua: "6 — основа, не рамено."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Kąt przy podstawie 50°",
        ua: "Кут при основі 50°"
      },
      text: {
        pl: [
          ["W trójkącie równoramiennym kąt przy podstawie ma ", em("50°"), "."],
          "Drugi przy podstawie jest taki sam. Szukamy kąta przy wierzchołku."
        ],
        ua: [
          ["У рівнобедреному трикутнику кут при основі має ", em("50°"), "."],
          "Другий при основі такий самий. Шукаємо кут при вершині."
        ]
      },
      task: {
        id: "ramie-prob-vertex",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Kąt przy podstawie ma ", em("50°"), ". Ile stopni ma kąt przy wierzchołku? Wpisz liczbę."],
          ua: ["Кут при основі має ", em("50°"), ". Скільки градусів має кут при вершині? Введи число."]
        },
        answer: 80,
        hint: {
          pl: "Dwa kąty po 50° plus wierzchołek = 180°.",
          ua: "Два кути по 50° плюс вершина = 180°."
        },
        explanation: {
          pl: "50 + 50 = 100, 180 − 100 = 80.",
          ua: "50 + 50 = 100, 180 − 100 = 80."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Równoboczny i obwód",
        ua: "Рівносторонній і периметр"
      },
      text: {
        pl: [
          ["Trójkąt równoboczny. Jeden bok ma ", em("9"), "."],
          "Wszystkie boki takie same."
        ],
        ua: [
          ["Рівносторонній трикутник. Одна сторона має ", em("9"), "."],
          "Усі сторони однакові."
        ]
      },
      task: {
        id: "ramie-prob-eq-peri",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Bok trójkąta równobocznego ma ", em("9"), ". Ile wynosi obwód? Wpisz liczbę."],
          ua: ["Сторона рівностороннього трикутника має ", em("9"), ". Чому дорівнює периметр? Введи число."]
        },
        answer: 27,
        hint: {
          pl: "Trzy takie same boki.",
          ua: "Три однакові сторони."
        },
        explanation: {
          pl: "9 + 9 + 9 = 27.",
          ua: "9 + 9 + 9 = 27."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Zmieniasz podstawę",
        ua: "Змінюєш основу"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        height: true,
        label: { pl: "ramiona zostają, podstawa się zmienia", ua: "рамена лишаються, основа змінюється" }
      },
      text: {
        pl: [
          "Ramiona namiotu zostawiasz te same. Poprzeczkę u dołu robisz dłuższą albo krótszą.",
          "Trójkąt nadal jest równoramienny. Co się musi zmienić?"
        ],
        ua: [
          "Рамена намету лишаєш тими самими. Поперечку внизу робиш довшою або коротшою.",
          "Трикутник далі рівнобедрений. Що мусить змінитися?"
        ]
      },
      task: {
        id: "ramie-chall-base",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Zostawiasz ramiona tej samej długości i zmieniasz tylko podstawę. Co na pewno się zmienia?",
          ua: "Лишаєш рамена тієї самої довжини і змінюєш лише основу. Що напевно змінюється?"
        },
        options: [
          { id: "a", label: { pl: "długości ramion", ua: "довжини рамен" } },
          { id: "b", label: { pl: "kąty przy podstawie", ua: "кути при основі" } },
          { id: "c", label: { pl: "to, że trójkąt jest równoramienny", ua: "те, що трикутник рівнобедрений" } }
        ],
        answer: "b",
        hint: {
          pl: "Ramiona zostają. Równoramienny zostaje. Kąty przy ziemi — jak w namiocie — idą w górę albo w dół.",
          ua: "Рамена лишаються. Рівнобедрений лишається. Кути біля землі — як у наметі — йдуть угору або вниз."
        },
        explanation: {
          pl: "Ramiona nie zmieniają długości. Trójkąt dalej ma dwa równe boki. Szersza lub węższa podstawa zmienia kąty przy podstawie (i kąt przy wierzchołku).",
          ua: "Рамена не змінюють довжини. Трикутник далі має дві рівні сторони. Ширша або вужча основа змінює кути при основі (і кут при вершині)."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Ramiona właśnie zostawiasz. To jedyne, co się NIE zmienia.",
              ua: "Рамена якраз лишаєш. Це єдине, що НЕ змінюється."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dwa ramiona nadal są równe, więc trójkąt nadal jest równoramienny.",
              ua: "Два рамена далі рівні, отже трикутник далі рівнобедрений."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Wierzchołek",
        ua: "Чи вже вмію? Вершина"
      },
      task: {
        id: "ramie-check-vertex",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Trójkąt równoramienny. Kąt przy wierzchołku ma ", em("80°"), ". Ile stopni ma kąt przy podstawie? Wpisz liczbę."],
          ua: ["Рівнобедрений трикутник. Кут при вершині має ", em("80°"), ". Скільки градусів має кут при основі? Введи число."]
        },
        answer: 50,
        hint: {
          pl: "180 − 80, potem podziel na dwa.",
          ua: "180 − 80, потім поділи на два."
        },
        explanation: {
          pl: "180 − 80 = 100, 100 : 2 = 50.",
          ua: "180 − 80 = 100, 100 : 2 = 50."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Ramię z obwodu",
        ua: "Чи вже вмію? Рамено з периметра"
      },
      task: {
        id: "ramie-check-side",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Obwód trójkąta równoramiennego wynosi ", em("17"), ". Jedno ramię ma ", em("6"), ". Ile ma podstawa? Wpisz liczbę."],
          ua: ["Периметр рівнобедреного трикутника дорівнює ", em("17"), ". Одне рамено має ", em("6"), ". Скільки має основа? Введи число."]
        },
        answer: 5,
        hint: {
          pl: "Dwa ramiona po 6. Reszta to podstawa.",
          ua: "Два рамена по 6. Решта — основа."
        },
        explanation: {
          pl: "6 + 6 = 12, 17 − 12 = 5. Podstawa ma 5.",
          ua: "6 + 6 = 12, 17 − 12 = 5. Основа має 5."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "ramiona równe  →  kąty przy podstawie równe     równoboczny: 60°",
      text: {
        pl: [
          "Równoramienny: dwa ramiona, podstawa, kąty przy podstawie równe.",
          ["Równoboczny: każdy kąt ", em("60°"), "."],
          "Znasz jeden kąt albo obwód i jeden bok — resztę da się policzyć."
        ],
        ua: [
          "Рівнобедрений: два рамена, основа, кути при основі рівні.",
          ["Рівносторонній: кожен кут ", em("60°"), "."],
          "Знаєш один кут або периметр і одну сторону — решту можна порахувати."
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
          "Zaraz z wierzchołka poprowadzimy wysokość — prostopadłą do podstawy.",
          "W równoramiennym ta kreska stoi ładnie na środku podstawy."
        ],
        ua: [
          "Зараз із вершини проведемо висоту — перпендикуляр до основи.",
          "У рівнобедреному ця риска гарно стоїть на середині основи."
        ]
      }
    }
  ]
};
