function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dwie półproste z jednego punktu",
        ua: "Дві півпрямі з однієї точки"
      },
      visual: { kind: "angle", degrees: 55 },
      text: {
        pl: [
          "Otwierasz cyrkiel. Albo drzwi.",
          "Z jednego punktu wychodzą dwie kreski i między nimi jest rozwartość.",
          "Tę rozwartość nazywamy kątem."
        ],
        ua: [
          "Розкриваєш циркуль. Або двері.",
          "З однієї точки виходять дві риски і між ними є розхил.",
          "Цей розхил називаємо кутом."
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
        { pl: "wskazać wierzchołek i ramiona kąta", ua: "вказати вершину і сторони кута" },
        { pl: "rozpoznać kąt ostry, prosty i rozwarty", ua: "розпізнати гострий, прямий і тупий кут" },
        { pl: "wiedzieć, że kąty przyległe dają 180°", ua: "знати, що суміжні кути дають 180°" },
        { pl: "wiedzieć, że kąty wierzchołkowe są równe", ua: "знати, що вертикальні кути рівні" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Gdzie jest kąt?",
        ua: "Де кут?"
      },
      visual: { kind: "angle", degrees: 55 },
      text: {
        pl: [
          "Dwie kreski schodzą się w jednym punkcie.",
          "Kąt to nie kreska. Kąt to rozwartość między kreskami."
        ],
        ua: [
          "Дві риски сходяться в одній точці.",
          "Кут — не риска. Кут — це розхил між рисками."
        ]
      },
      prompt: {
        pl: [
          "Znajdź punkt styku. To wierzchołek.",
          "Dwie kreski to ramiona."
        ],
        ua: [
          "Знайди точку стику. Це вершина.",
          "Дві риски — сторони кута."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Wierzchołek i ramiona",
        ua: "Вершина і сторони"
      },
      text: {
        pl: [
          ["", em("Wierzchołek"), " kąta to punkt, z którego wychodzą ramiona."],
          ["", em("Ramiona"), " to dwie półproste o wspólnym początku."],
          ["Kąt zapisujemy znakiem ", em("∠"), ". Na przykład ", em("∠ABC"), " — wierzchołek jest w środku, przy ", em("B"), "."]
        ],
        ua: [
          ["", em("Вершина"), " кута — точка, з якої виходять сторони."],
          ["", em("Сторони"), " (рамена) — дві півпрямі зі спільним початком."],
          ["Кут записуємо знаком ", em("∠"), ". Наприклад ", em("∠ABC"), " — вершина всередині, біля ", em("B"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Ostry, prosty, rozwarty",
        ua: "Гострий, прямий, тупий"
      },
      text: {
        pl: [
          ["", em("Kąt ostry"), " — mniejszy niż kąt prosty. Mniej niż ", em("90°"), "."],
          ["", em("Kąt prosty"), " — jak róg kartki. Dokładnie ", em("90°"), "."],
          ["", em("Kąt rozwarty"), " — większy niż prosty, ale mniejszy niż półpełny. Między ", em("90°"), " a ", em("180°"), "."]
        ],
        ua: [
          ["", em("Гострий кут"), " — менший за прямий. Менше ніж ", em("90°"), "."],
          ["", em("Прямий кут"), " — як ріг аркуша. Рівно ", em("90°"), "."],
          ["", em("Тупий кут"), " — більший за прямий, але менший за розгорнутий. Між ", em("90°"), " і ", em("180°"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Trzy kąty — trzy nazwy",
        ua: "Три кути — три назви"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "angle", degrees: 55 },
          text: {
            pl: ["", em("55°"), " jest mniejsze niż 90°. To kąt ostry."],
            ua: ["", em("55°"), " менше ніж 90°. Це гострий кут."]
          }
        },
        {
          visual: { kind: "angle", degrees: 90 },
          text: {
            pl: ["", em("90°"), " — kąt prosty. Na rysunku bywa mały kwadracik."],
            ua: ["", em("90°"), " — прямий кут. На рисунку інколи маленький квадратик."]
          }
        },
        {
          visual: { kind: "angle", degrees: 120 },
          text: {
            pl: ["", em("120°"), " jest większe niż 90° i mniejsze niż 180°. To kąt rozwarty."],
            ua: ["", em("120°"), " більше ніж 90° і менше ніж 180°. Це тупий кут."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Przyległe i wierzchołkowe",
        ua: "Суміжні і вертикальні"
      },
      formula: "przyległe:  α + β = 180°     wierzchołkowe:  α = α",
      text: {
        pl: [
          ["Dwa kąty ", em("przyległe"), " mają wspólne ramię, a pozostałe dwa ramiona tworzą prostą. Razem zawsze ", em("180°"), "."],
          ["Dwa kąty ", em("wierzchołkowe"), " powstają, gdy dwie proste się przecinają. Leżą naprzeciw siebie i są ", em("równe"), "."]
        ],
        ua: [
          ["Два ", em("суміжні"), " кути мають спільну сторону, а дві інші сторони утворюють пряму. Разом завжди ", em("180°"), "."],
          ["Два ", em("вертикальні"), " кути виникають, коли дві прямі перетинаються. Лежать навпроти і є ", em("рівними"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Sąsiad kąta 70°",
        ua: "Сусіда кута 70°"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "angle", degrees: 70 },
          formula: "70° + ? = 180°"
        },
        {
          formula: "180° − 70° = 110°",
          text: {
            pl: ["Kąt przyległy do ", em("70°"), " ma miarę ", em("110°"), ". Ostry dostaje za sąsiada rozwarty."],
            ua: ["Суміжний до ", em("70°"), " має міру ", em("110°"), ". Гострий отримує сусідом тупий."]
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
        { pl: "kąt", ua: "кут" },
        { pl: "wierzchołek kąta", ua: "вершина кута" },
        { pl: "ramiona kąta", ua: "сторони кута" },
        { pl: "kąt ostry", ua: "гострий кут" },
        { pl: "kąt prosty", ua: "прямий кут" },
        { pl: "kąt rozwarty", ua: "тупий кут" },
        { pl: "kąty przyległe", ua: "суміжні кути" },
        { pl: "kąty wierzchołkowe", ua: "вертикальні кути" }
      ],
      phrases: [
        { pl: "Jakim kątem jest ten kąt?", ua: "Яким є цей кут?" },
        { pl: "Wskaż wierzchołek i ramiona.", ua: "Вкажи вершину і сторони." },
        { pl: "Ile wynosi kąt przyległy?", ua: "Чому дорівнює суміжний кут?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Jaki to kąt?",
        ua: "Який це кут?"
      },
      visual: { kind: "angle", degrees: 35 },
      task: {
        id: "katy-guided-kind",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Kąt na rysunku ma ", em("35°"), ". Jakim kątem jest?"],
          ua: ["Кут на рисунку має ", em("35°"), ". Яким він є?"]
        },
        options: [
          { id: "a", label: { pl: "ostry", ua: "гострий" } },
          { id: "b", label: { pl: "prosty", ua: "прямий" } },
          { id: "c", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj z kątem prostym — rogiem kartki.",
          ua: "Порівняй із прямим кутом — рогом аркуша."
        },
        explanation: {
          pl: "35° < 90°, więc kąt jest ostry.",
          ua: "35° < 90°, отже кут гострий."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Prosty ma dokładnie 90°. Tu jest wyraźnie ciaśniej.",
              ua: "Прямий має рівно 90°. Тут явно тісніше."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rozwarty jest szerszy niż róg kartki. Ten jest węższy.",
              ua: "Тупий ширший за ріг аркуша. Цей вужчий."
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
        pl: "Kąt rozwarty to kąt większy niż 180°.",
        ua: "Тупий кут — це кут більший ніж 180°."
      },
      visual: { kind: "angle", degrees: 140 },
      text: {
        pl: [
          ["Kąt rozwarty mieści się między prostym a półpełnym: więcej niż ", em("90°"), ", mniej niż ", em("180°"), "."],
          "Kąt większy niż 180° to już inna historia — w klasie 5 mierzymy kąty wypukłe, do 180°."
        ],
        ua: [
          ["Тупий кут лежить між прямим і розгорнутим: більше ніж ", em("90°"), ", менше ніж ", em("180°"), "."],
          "Кут більший ніж 180° — вже інша історія. У 5 класі вимірюємо опуклі кути, до 180°."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Kąt przyległy",
        ua: "Суміжний кут"
      },
      task: {
        id: "katy-prac-adj",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Kąt ma ", em("40°"), ". Ile stopni ma kąt do niego przyległy? Wpisz samą liczbę."],
          ua: ["Кут має ", em("40°"), ". Скільки градусів має суміжний до нього кут? Введи лише число."]
        },
        answer: 140,
        hint: {
          pl: "Przyległe dają razem 180°.",
          ua: "Суміжні разом дають 180°."
        },
        explanation: {
          pl: "180 − 40 = 140. Kąt przyległy ma 140°.",
          ua: "180 − 40 = 140. Суміжний кут має 140°."
        },
        mistakes: [
          {
            answer: 50,
            feedback: {
              pl: "To byłoby do 90°, nie do 180°. Przyległe składają się w prostą.",
              ua: "Це було б до 90°, не до 180°. Суміжні складаються в пряму."
            }
          },
          {
            answer: 40,
            feedback: {
              pl: "Równe kąty przy przecięciu to wierzchołkowe, nie przyległe.",
              ua: "Рівні кути при перетині — вертикальні, не суміжні."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Wierzchołkowe",
        ua: "Вертикальні"
      },
      task: {
        id: "katy-prac-vert",
        type: "true-false",
        level: "B",
        question: {
          pl: "Gdy dwie proste się przecinają, kąty leżące naprzeciw siebie są równe.",
          ua: "Коли дві прямі перетинаються, кути, що лежать навпроти, рівні."
        },
        answer: true,
        hint: {
          pl: "To kąty wierzchołkowe. Nie myl ich z przyległymi.",
          ua: "Це вертикальні кути. Не плутай із суміжними."
        },
        explanation: {
          pl: "Kąty wierzchołkowe są zawsze równe.",
          ua: "Вертикальні кути завжди рівні."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Drzwi i framuga",
        ua: "Двері і одвірок"
      },
      text: {
        pl: [
          ["Drzwi otwarte tworzą z framugą kąt ", em("90°"), "."],
          "Na podłodze widać ten kąt jak róg zeszytu."
        ],
        ua: [
          ["Відчинені двері утворюють з одвірком кут ", em("90°"), "."],
          "На підлозі цей кут виглядає як ріг зошита."
        ]
      },
      task: {
        id: "katy-prob-door",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Jakim kątem jest kąt ", em("90°"), " między drzwiami a framugą?"],
          ua: ["Яким є кут ", em("90°"), " між дверима і одвірком?"]
        },
        options: [
          { id: "a", label: { pl: "ostry", ua: "гострий" } },
          { id: "b", label: { pl: "prosty", ua: "прямий" } },
          { id: "c", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "b",
        hint: {
          pl: "Róg kartki, róg pokoju, otwarte drzwi pod ścianą.",
          ua: "Ріг аркуша, ріг кімнати, двері під стіною."
        },
        explanation: {
          pl: "90° to kąt prosty.",
          ua: "90° — прямий кут."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Naprzeciw 65°",
        ua: "Навпроти 65°"
      },
      text: {
        pl: [
          ["Dwie proste przecięły się. Jeden z kątów ma ", em("65°"), "."],
          "Pomyśl, które kąty są mu równe, a które dopełniają do 180°."
        ],
        ua: [
          ["Дві прямі перетнулися. Один із кутів має ", em("65°"), "."],
          "Подумай, які кути йому рівні, а які доповнюють до 180°."
        ]
      },
      task: {
        id: "katy-prob-cross",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile stopni ma kąt wierzchołkowy do kąta ", em("65°"), "? Wpisz liczbę."],
          ua: ["Скільки градусів має вертикальний кут до кута ", em("65°"), "? Введи число."]
        },
        answer: 65,
        hint: {
          pl: "Wierzchołkowe są równe. Nie odejmuj od 180.",
          ua: "Вертикальні рівні. Не віднімай від 180."
        },
        explanation: {
          pl: "Kąt wierzchołkowy ma też 65°. Przyległy miałby 115°.",
          ua: "Вертикальний кут теж має 65°. Суміжний мав би 115°."
        },
        mistakes: [
          {
            answer: 115,
            feedback: {
              pl: "115° to kąt przyległy (180 − 65), nie wierzchołkowy.",
              ua: "115° — суміжний кут (180 − 65), не вертикальний."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Sąsiad kąta prostego",
        ua: "Сусіда прямого кута"
      },
      text: {
        pl: [
          "Kąty przyległe zawsze dają 180°.",
          "Kąt prosty już zabrał 90°. Co może stać obok?"
        ],
        ua: [
          "Суміжні кути завжди дають 180°.",
          "Прямий кут уже забрав 90°. Що може стати поруч?"
        ]
      },
      task: {
        id: "katy-chall-adj-right",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który kąt nie może być przyległy do kąta prostego?",
          ua: "Який кут не може бути суміжним до прямого кута?"
        },
        options: [
          { id: "a", label: { pl: "inny kąt prosty", ua: "інший прямий кут" } },
          { id: "b", label: { pl: "kąt rozwarty", ua: "тупий кут" } },
          { id: "c", label: { pl: "kąt o mierze 90°", ua: "кут мірою 90°" } }
        ],
        answer: "b",
        hint: {
          pl: "Przyległe: 90° + □ = 180°. Jakie □ tu pasuje?",
          ua: "Суміжні: 90° + □ = 180°. Яке □ тут пасує?"
        },
        explanation: {
          pl: "90 + 90 = 180, więc sąsiadem kąta prostego jest inny kąt prosty. Rozwarty ma więcej niż 90°, suma przekroczyłaby 180°.",
          ua: "90 + 90 = 180, отже сусідом прямого є інший прямий. Тупий більший ніж 90°, сума перевищила б 180°."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Właśnie kąt prosty PASUJE: 90 + 90 = 180.",
              ua: "Саме прямий кут ПАСУЄ: 90 + 90 = 180."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "90° to ten sam kąt prosty. On może stać obok drugiego prostego.",
              ua: "90° — той самий прямий кут. Він може стояти поруч з іншим прямим."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Rodzaj",
        ua: "Чи вже вмію? Вид"
      },
      visual: { kind: "angle", degrees: 110 },
      task: {
        id: "katy-check-obtuse",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Kąt ma ", em("110°"), ". Jakim kątem jest?"],
          ua: ["Кут має ", em("110°"), ". Яким він є?"]
        },
        options: [
          { id: "a", label: { pl: "ostry", ua: "гострий" } },
          { id: "b", label: { pl: "prosty", ua: "прямий" } },
          { id: "c", label: { pl: "rozwarty", ua: "тупий" } }
        ],
        answer: "c",
        hint: {
          pl: "Czy jest ciaśniejszy, równy czy szerszy niż róg kartki?",
          ua: "Він тісніший, рівний чи ширший за ріг аркуша?"
        },
        explanation: {
          pl: "110° leży między 90° a 180°, więc kąt jest rozwarty.",
          ua: "110° лежить між 90° і 180°, отже кут тупий."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Przyległe",
        ua: "Чи вже вмію? Суміжні"
      },
      task: {
        id: "katy-check-sum",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Kąty przyległe. Jeden ma ", em("125°"), ". Ile ma drugi? Wpisz liczbę."],
          ua: ["Суміжні кути. Один має ", em("125°"), ". Скільки має другий? Введи число."]
        },
        answer: 55,
        hint: {
          pl: "180 minus znany kąt.",
          ua: "180 мінус відомий кут."
        },
        explanation: {
          pl: "180 − 125 = 55.",
          ua: "180 − 125 = 55."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "ostry < 90°     prosty = 90°     rozwarty: 90° < α < 180°",
      text: {
        pl: [
          "Kąt ma wierzchołek i dwa ramiona.",
          ["Przyległe: suma ", em("180°"), ". Wierzchołkowe: ", em("równe"), "."]
        ],
        ua: [
          "Кут має вершину і дві сторони.",
          ["Суміжні: сума ", em("180°"), ". Вертикальні: ", em("рівні"), "."]
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
          "Następna lekcja: kątomierz i odczyt do 1°.",
          "Uważaj na złą skalę — to najczęstsza pułapka."
        ],
        ua: [
          "Наступний урок: транспортир і відлік до 1°.",
          "Увага на неправильну шкалу — це найчастіша пастка."
        ]
      }
    }
  ]
};
