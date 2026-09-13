function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pudełko, które się ześlizguje",
        ua: "Коробка, яка зісковзує"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "równoległobok", ua: "паралелограм" }
      },
      text: {
        pl: [
          "Prostokątna ramka z czterech listewek. Pchasz w bok — kąty się zmieniają, boki zostają.",
          "Naprzeciwległe krawędzie wciąż biegną obok siebie i nie chcą się spotkać.",
          "To równoległobok."
        ],
        ua: [
          "Прямокутна рамка з чотирьох планок. Штовхаєш убік — кути змінюються, сторони лишаються.",
          "Протилежні краї далі біжать поруч і не хочуть зустрітися.",
          "Це паралелограм."
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
        { pl: "rozpoznać równoległobok po bokach równoległych", ua: "розпізнати паралелограм за паралельними сторонами" },
        { pl: "wskazać równe boki i równe kąty naprzeciwległe", ua: "вказати рівні протилежні сторони і кути" },
        { pl: "zobaczyć prostokąt, romb i kwadrat jako szczególne równoległoboki", ua: "побачити прямокутник, ромб і квадрат як особливі паралелограми" },
        { pl: "odróżnić zdanie „zawsze” od „nie zawsze”", ua: "відрізнити речення «завжди» від «не завжди»" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Co zostaje, gdy ramkę ześlizgniesz?",
        ua: "Що лишається, коли рамку зсунеш?"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "boki naprzeciw siebie idą w tę samą stronę", ua: "сторони навпроти йдуть у той самий бік" }
      },
      text: {
        pl: [
          "Górny bok i dolny — jak dwie szyny. Lewy i prawy — jak dwie inne szyny.",
          "Kąty już nie są proste. A jednak figura nie rozjeżdża się."
        ],
        ua: [
          "Верхня сторона і нижня — як дві рейки. Ліва і права — як дві інші рейки.",
          "Кути вже не прямі. А фігура все одно не роз’їжджається."
        ]
      },
      prompt: {
        pl: [
          "Dwie pary boków równoległych.",
          "To jest znak równoległoboku."
        ],
        ua: [
          "Дві пари паралельних сторін.",
          "Це ознака паралелограма."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Własności równoległoboku",
        ua: "Властивості паралелограма"
      },
      formula: "AB ∥ CD, AD ∥ BC     AB = CD, AD = BC",
      text: {
        pl: [
          ["", em("Równoległobok"), " to czworokąt, który ma dwa boki równoległe i drugie dwa też równoległe."],
          "Naprzeciwległe boki są równe.",
          "Naprzeciwległe kąty są równe.",
          ["Kąty sąsiednie (przy jednym boku) dają ", em("180°"), " — są przyległe w tym sensie, że dopełniają się do prostej."]
        ],
        ua: [
          ["", em("Паралелограм"), " — чотирикутник, у якого дві сторони паралельні і другі дві теж паралельні."],
          "Протилежні сторони рівні.",
          "Протилежні кути рівні.",
          ["Сусідні кути (при одній стороні) дають ", em("180°"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Kąt 70° w równoległoboku",
        ua: "Кут 70° у паралелограмі"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "parallelogram",
            label: { pl: "jeden kąt 70°", ua: "один кут 70°" }
          },
          formula: "kąt naprzeciw = 70°"
        },
        {
          formula: "kąt sąsiedni = 180° − 70° = 110°",
          text: {
            pl: ["Naprzeciw też ", em("70°"), ". Przy boku — ", em("110°"), " i znowu 110° po drugiej stronie."],
            ua: ["Навпроти теж ", em("70°"), ". При стороні — ", em("110°"), " і знову 110° з другого боку."]
          }
        }
      ]
    },
    {
      type: "classification",
      heading: {
        pl: "Szczególne równoległoboki",
        ua: "Особливі паралелограми"
      },
      items: [
        { pl: "prostokąt — równoległobok z kątami prostymi", ua: "прямокутник — паралелограм із прямими кутами" },
        { pl: "romb — równoległobok z równymi bokami", ua: "ромб — паралелограм із рівними сторонами" },
        { pl: "kwadrat — i kąty proste, i równe boki", ua: "квадрат — і прямі кути, і рівні сторони" }
      ],
      text: {
        pl: [
          "Każdy z nich ma dwie pary boków równoległych. Więc każdy jest równoległobokiem.",
          "Nie każdy równoległobok jest prostokątem albo rombem."
        ],
        ua: [
          "Кожен із них має дві пари паралельних сторін. Отже кожен є паралелограмом.",
          "Не кожен паралелограм є прямокутником або ромбом."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Cztery twarze tej samej rodziny",
        ua: "Чотири обличчя однієї родини"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "parallelogram",
            label: { pl: "równoległobok", ua: "паралелограм" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "rectangle",
            label: { pl: "prostokąt", ua: "прямокутник" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "rhombus",
            label: { pl: "romb", ua: "ромб" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "square",
            label: { pl: "kwadrat", ua: "квадрат" }
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
        { pl: "równoległobok", ua: "паралелограм" },
        { pl: "boki naprzeciwległe", ua: "протилежні сторони" },
        { pl: "kąty naprzeciwległe", ua: "протилежні кути" },
        { pl: "prostokąt", ua: "прямокутник" },
        { pl: "romb", ua: "ромб" },
        { pl: "kwadrat", ua: "квадрат" }
      ],
      phrases: [
        { pl: "Czy ten czworokąt jest równoległobokiem?", ua: "Чи цей чотирикутник є паралелограмом?" },
        { pl: "Wskaż boki równoległe.", ua: "Вкажи паралельні сторони." },
        { pl: "Czy to zdanie jest zawsze prawdziwe?", ua: "Чи це речення завжди правильне?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Kąt naprzeciw",
        ua: "Кут навпроти"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "równoległobok", ua: "паралелограм" }
      },
      task: {
        id: "rglob-guided-opp",
        type: "input-number",
        level: "A",
        question: {
          pl: ["W równoległoboku jeden kąt ma ", em("115°"), ". Ile stopni ma kąt leżący naprzeciw? Wpisz liczbę."],
          ua: ["У паралелограмі один кут має ", em("115°"), ". Скільки градусів має кут навпроти? Введи число."]
        },
        answer: 115,
        hint: {
          pl: "Naprzeciwległe kąty równoległoboku są równe. Nie odejmuj od 180.",
          ua: "Протилежні кути паралелограма рівні. Не віднімай від 180."
        },
        explanation: {
          pl: "Kąt naprzeciw ma też 115°. Sąsiedni miałby 65°.",
          ua: "Кут навпроти теж має 115°. Сусідній мав би 65°."
        },
        mistakes: [
          {
            answer: 65,
            feedback: {
              pl: "65° to kąt sąsiedni (180 − 115), nie naprzeciwległy.",
              ua: "65° — сусідній кут (180 − 115), не протилежний."
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
        pl: "Każdy równoległobok jest prostokątem.",
        ua: "Кожен паралелограм є прямокутником."
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "kąty nie muszą być proste", ua: "кути не мусять бути прямими" }
      },
      text: {
        pl: [
          "Prostokąt to szczególny równoległobok — z kątami prostymi.",
          "Gdy ramkę ześlizgniesz, równoległe boki zostają, a kąty już nie są 90°.",
          "W drugą stronę: każdy prostokąt jest równoległobokiem."
        ],
        ua: [
          "Прямокутник — особливий паралелограм із прямими кутами.",
          "Коли рамку зсунеш, паралельні сторони лишаються, а кути вже не 90°.",
          "У зворотний бік: кожен прямокутник є паралелограмом."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Sąsiad 70°",
        ua: "Сусіда 70°"
      },
      task: {
        id: "rglob-prac-adj",
        type: "input-number",
        level: "A",
        question: {
          pl: ["W równoległoboku kąt ma ", em("70°"), ". Ile stopni ma kąt przy tym samym boku (sąsiedni)? Wpisz liczbę."],
          ua: ["У паралелограмі кут має ", em("70°"), ". Скільки градусів має кут при тій самій стороні (сусідній)? Введи число."]
        },
        answer: 110,
        hint: {
          pl: "Sąsiednie kąty równoległoboku dają 180°.",
          ua: "Сусідні кути паралелограма дають 180°."
        },
        explanation: {
          pl: "180 − 70 = 110.",
          ua: "180 − 70 = 110."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Kwadrat w rodzinie",
        ua: "Квадрат у родині"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "kwadrat", ua: "квадрат" }
      },
      task: {
        id: "rglob-prac-square",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy kwadrat jest równoległobokiem.",
          ua: "Кожен квадрат є паралелограмом."
        },
        answer: true,
        hint: {
          pl: "Czy kwadrat ma dwie pary boków równoległych?",
          ua: "Чи квадрат має дві пари паралельних сторін?"
        },
        explanation: {
          pl: "Tak. Kwadrat ma przeciwległe boki równoległe (i równe, i kąty proste). Jest równoległobokiem, rombem i prostokątem.",
          ua: "Так. Квадрат має протилежні сторони паралельні (і рівні, і прямі кути). Він є паралелограмом, ромбом і прямокутником."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Który czworokąt jest zawsze równoległobokiem?",
        ua: "Який чотирикутник завжди є паралелограмом?"
      },
      text: {
        pl: [
          "Pomyśl o definicji: dwie pary boków równoległych.",
          "Która figura z listy nigdy z tej definicji nie wychodzi?"
        ],
        ua: [
          "Подумай про означення: дві пари паралельних сторін.",
          "Яка фігура зі списку ніколи з цього означення не виходить?"
        ]
      },
      task: {
        id: "rglob-prob-always",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który czworokąt jest zawsze równoległobokiem?",
          ua: "Який чотирикутник завжди є паралелограмом?"
        },
        options: [
          { id: "a", label: { pl: "romb", ua: "ромб" } },
          { id: "b", label: { pl: "trapez", ua: "трапеція" } },
          { id: "c", label: { pl: "dowolny czworokąt", ua: "будь-який чотирикутник" } }
        ],
        answer: "a",
        hint: {
          pl: "Romb ma wszystkie boki równe i przeciwległe równoległe. Trapez (w naszym podręczniku) ma tylko jedną parę równoległych.",
          ua: "Ромб має всі сторони рівні і протилежні паралельні. Трапеція (у нашому підручнику) має лише одну пару паралельних."
        },
        explanation: {
          pl: "Romb jest zawsze równoległobokiem. Trapez ma dokładnie jedną parę boków równoległych — więc nie jest równoległobokiem. Nie każdy czworokąt ma boki równoległe.",
          ua: "Ромб завжди є паралелограмом. Трапеція має рівно одну пару паралельних сторін — отже не є паралелограмом. Не кожен чотирикутник має паралельні сторони."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Trapez ma jedną parę boków równoległych, równoległobok — dwie. To nie to samo.",
              ua: "Трапеція має одну пару паралельних сторін, паралелограм — дві. Це не те саме."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czworokąt może być całkiem „krzywy”, bez żadnej pary równoległych.",
              ua: "Чотирикутник може бути зовсім «кривим», без жодної пари паралельних."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Zawsze czy nie zawsze?",
        ua: "Завжди чи не завжди?"
      },
      visual: {
        kind: "quad",
        quad: "rhombus",
        label: { pl: "romb", ua: "ромб" }
      },
      text: {
        pl: [
          "Romb ma wszystkie boki równe.",
          "Czy z tego wynika, że wszystkie kąty są proste?"
        ],
        ua: [
          "Ромб має всі сторони рівні.",
          "Чи з цього випливає, що всі кути прямі?"
        ]
      },
      task: {
        id: "rglob-prob-rhombus",
        type: "true-false",
        level: "C",
        question: {
          pl: "Każdy romb jest kwadratem.",
          ua: "Кожен ромб є квадратом."
        },
        answer: false,
        hint: {
          pl: "Kwadrat potrzebuje jeszcze kątów prostych. Czy romb zawsze je ma?",
          ua: "Квадрату ще потрібні прямі кути. Чи ромб завжди їх має?"
        },
        explanation: {
          pl: "Nie. Romb może być „spłaszczony”: boki równe, kąty ostre i rozwarte. Kwadrat to romb z kątami prostymi.",
          ua: "Ні. Ромб може бути «сплющений»: сторони рівні, кути гострі і тупі. Квадрат — це ромб із прямими кутами."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Zdanie, które zawsze działa",
        ua: "Речення, яке завжди працює"
      },
      text: {
        pl: [
          "Odwróć kolejność słów w głowie: „każdy A jest B” to nie to samo co „każdy B jest A”."
        ],
        ua: [
          "Переверни порядок слів у голові: «кожен A є B» — це не те саме, що «кожен B є A»."
        ]
      },
      task: {
        id: "rglob-chall-always",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zawsze prawdziwe?",
          ua: "Яке речення завжди правильне?"
        },
        options: [
          { id: "a", label: { pl: "Każdy równoległobok jest prostokątem.", ua: "Кожен паралелограм є прямокутником." } },
          { id: "b", label: { pl: "Każdy prostokąt jest równoległobokiem.", ua: "Кожен прямокутник є паралелограмом." } },
          { id: "c", label: { pl: "Każdy romb jest kwadratem.", ua: "Кожен ромб є квадратом." } }
        ],
        answer: "b",
        hint: {
          pl: "Prostokąt ma przeciwległe boki równoległe. Czy każdy równoległobok ma kąty 90°?",
          ua: "Прямокутник має протилежні сторони паралельні. Чи кожен паралелограм має кути 90°?"
        },
        explanation: {
          pl: "Każdy prostokąt ma dwie pary boków równoległych, więc jest równoległobokiem. Odwrotnie nie: równoległobok nie musi mieć kątów prostych. Romb nie musi być kwadratem.",
          ua: "Кожен прямокутник має дві пари паралельних сторін, отже є паралелограмом. Навпаки ні: паралелограм не мусить мати прямих кутів. Ромб не мусить бути квадратом."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Równoległobok po ześlizgnięciu nie ma kątów prostych. Nie każdy jest prostokątem.",
              ua: "Паралелограм після зсуву не має прямих кутів. Не кожен є прямокутником."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Romb bez kątów prostych nie jest kwadratem.",
              ua: "Ромб без прямих кутів не є квадратом."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Boki",
        ua: "Чи вже вмію? Сторони"
      },
      task: {
        id: "rglob-check-sides",
        type: "true-false",
        level: "A",
        question: {
          pl: "W równoległoboku boki naprzeciwległe są równe.",
          ua: "У паралелограмі протилежні сторони рівні."
        },
        answer: true,
        hint: {
          pl: "To jedna z podstawowych własności, obok równoległości.",
          ua: "Це одна з основних властивостей, поряд із паралельністю."
        },
        explanation: {
          pl: "Tak. Przeciwległe boki są równoległe i równe.",
          ua: "Так. Протилежні сторони паралельні і рівні."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Prostokąt",
        ua: "Чи вже вмію? Прямокутник"
      },
      visual: {
        kind: "quad",
        quad: "rectangle",
        label: { pl: "prostokąt", ua: "прямокутник" }
      },
      task: {
        id: "rglob-check-rect",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy prostokąt jest równoległobokiem.",
          ua: "Кожен прямокутник є паралелограмом."
        },
        answer: true,
        hint: {
          pl: "Spójrz na przeciwległe boki prostokąta.",
          ua: "Подивись на протилежні сторони прямокутника."
        },
        explanation: {
          pl: "Prostokąt ma dwie pary boków równoległych, więc jest równoległobokiem.",
          ua: "Прямокутник має дві пари паралельних сторін, отже є паралелограмом."
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
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "dwie pary boków ∥", ua: "дві пари сторін ∥" }
      },
      text: {
        pl: [
          "Równoległobok: dwie pary boków równoległych, przeciwległe boki i kąty równe.",
          ["Prostokąt, romb, kwadrat — ", em("zawsze"), " są równoległobokami."],
          "Nie każdy równoległobok jest prostokątem, rombem albo kwadratem."
        ],
        ua: [
          "Паралелограм: дві пари паралельних сторін, протилежні сторони і кути рівні.",
          ["Прямокутник, ромб, квадрат — ", em("завжди"), " є паралелограмами."],
          "Не кожен паралелограм є прямокутником, ромбом або квадратом."
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
          "Następna lekcja: wysokość równoległoboku do wybranego boku.",
          "Potem — w innym rozdziale — pole. Dziś tylko kształt i własności."
        ],
        ua: [
          "Наступний урок: висота паралелограма до вибраної сторони.",
          "Потім — в іншому розділі — площа. Сьогодні лише форма і властивості."
        ]
      }
    }
  ]
};
