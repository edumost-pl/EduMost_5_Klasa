function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Jak „gruby” jest równoległobok?",
        ua: "Який «товстий» паралелограм?"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        height: true,
        label: { pl: "h — odległość między podstawami", ua: "h — відстань між основами" }
      },
      text: {
        pl: [
          "Ramkę ześlizgujesz coraz mocniej. Boki zostają te same, a figura robi się niższa.",
          "Ta „grubość” między dwiema równoległymi to wysokość.",
          "Dziś nie liczymy pola. Patrzymy, do którego boku należy h."
        ],
        ua: [
          "Рамку зсуваєш дедалі сильніше. Сторони ті самі, а фігура стає нижчою.",
          "Ця «товщина» між двома паралельними — висота.",
          "Сьогодні площу не рахуємо. Дивимось, до якої сторони належить h."
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
        { pl: "wskazać wysokość odpowiadającą wybranemu bokowi", ua: "вказати висоту, що відповідає вибраній стороні" },
        { pl: "zauważyć, że są dwie pary: bok i jego wysokość", ua: "помітити, що є дві пари: сторона і її висота" },
        { pl: "rozumieć, że dłuższy bok idzie z krótszą wysokością", ua: "розуміти, що довша сторона йде з коротшою висотою" },
        { pl: "odpowiedzieć, czy równe boki wymuszają równą wysokość", ua: "відповісти, чи рівні сторони змушують рівну висоту" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Przerywana kreska między szynami",
        ua: "Пунктирна риска між рейками"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        height: true,
        label: { pl: "h spada prostopadle na podstawę", ua: "h падає перпендикулярно на основу" }
      },
      text: {
        pl: [
          "Górny i dolny bok są równoległe. Między nimi — jak między dwiema szynami — najkrótsza kreska jest prostopadła.",
          "To wysokość odpowiadająca tej parze boków."
        ],
        ua: [
          "Верхня і нижня сторони паралельні. Між ними — як між двома рейками — найкоротша риска перпендикулярна.",
          "Це висота, що відповідає цій парі сторін."
        ]
      },
      prompt: {
        pl: [
          "Wysokość nie leży na skos wzdłuż boku.",
          "Stoi prosto do podstawy — albo do jej przedłużenia, gdy figura jest mocno ześlizgnięta."
        ],
        ua: [
          "Висота не лежить навскіс уздовж сторони.",
          "Стоїть прямо до основи — або до її продовження, коли фігура сильно зсунута."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Wysokość do boku",
        ua: "Висота до сторони"
      },
      formula: "h  ⊥  a",
      text: {
        pl: [
          ["", em("Wysokość równoległoboku"), " to odległość między jednym bokiem a bokiem do niego równoległym."],
          "Rysujemy ją jako odcinek prostopadły do tego boku (podstawy).",
          "Wybierasz podstawę — dostajesz jej wysokość. Inna podstawa — inna wysokość."
        ],
        ua: [
          ["", em("Висота паралелограма"), " — відстань між однією стороною і стороною, паралельною до неї."],
          "Малюємо її як відрізок, перпендикулярний до цієї сторони (основи).",
          "Вибираєш основу — отримуєш її висоту. Інша основа — інша висота."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Dwie pary: bok i wysokość",
        ua: "Дві пари: сторона і висота"
      },
      text: {
        pl: [
          ["Równoległobok ma dwa różne boki: ", em("a"), " i ", em("b"), " (sąsiednie)."],
          ["Do boku ", em("a"), " należy wysokość ", em("hₐ"), ". Do boku ", em("b"), " — wysokość ", em("hᵦ"), "."],
          "Dłuższy bok „rozpycha” figurę wszerz, więc wysokość do niego jest krótsza. Krótszy bok — wyższa wysokość.",
          "To się przyda później przy polu. Dziś wystarczy to zobaczyć."
        ],
        ua: [
          ["Паралелограм має дві різні сторони: ", em("a"), " і ", em("b"), " (сусідні)."],
          ["До сторони ", em("a"), " належить висота ", em("hₐ"), ". До сторони ", em("b"), " — висота ", em("hᵦ"), "."],
          "Довша сторона «розпихає» фігуру вшир, отже висота до неї коротша. Коротша сторона — вища висота.",
          "Це знадобиться пізніше при площі. Сьогодні досить це побачити."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Ten sam równoległobok, dwa h",
        ua: "Той самий паралелограм, два h"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "parallelogram",
            height: true,
            label: { pl: "wysokość do dłuższego boku", ua: "висота до довшої сторони" }
          },
          text: {
            pl: "Dolny bok jest dłuższy. Przerywana h jest stosunkowo krótka.",
            ua: "Нижня сторона довша. Пунктирне h відносно коротке."
          }
        },
        {
          text: {
            pl: [
              "Gdyby za podstawę wziąć krótszy bok (lewy albo prawy), wysokość do niego byłaby inna — wyższa.",
              "To nadal ten sam równoległobok. Zmieniła się tylko para „podstawa + wysokość”."
            ],
            ua: [
              "Якби за основу взяти коротшу сторону (ліву або праву), висота до неї була б інша — вища.",
              "Це далі той самий паралелограм. Змінилася лише пара «основа + висота»."
            ]
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
        { pl: "wysokość równoległoboku", ua: "висота паралелограма" },
        { pl: "podstawa", ua: "основа" },
        { pl: "bok odpowiadający wysokości", ua: "сторона, що відповідає висоті" },
        { pl: "odległość między bokami równoległymi", ua: "відстань між паралельними сторонами" }
      ],
      phrases: [
        { pl: "Narysuj wysokość do wskazanego boku.", ua: "Намалюй висоту до вказаної сторони." },
        { pl: "Która wysokość odpowiada temu bokowi?", ua: "Яка висота відповідає цій стороні?" },
        { pl: "Czy równe boki dają równą wysokość?", ua: "Чи рівні сторони дають рівну висоту?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Do czego stoi h?",
        ua: "До чого стоїть h?"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        height: true,
        label: { pl: "h prostopadła do dolnego boku", ua: "h перпендикулярна до нижньої сторони" }
      },
      task: {
        id: "wysr-guided-base",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Na rysunku wysokość h jest prostopadła do dolnego boku. Do której pary boków należy ta wysokość?",
          ua: "На рисунку висота h перпендикулярна до нижньої сторони. До якої пари сторін належить ця висота?"
        },
        options: [
          { id: "a", label: { pl: "do dolnego i górnego (równoległych)", ua: "до нижньої і верхньої (паралельних)" } },
          { id: "b", label: { pl: "do lewego i prawego", ua: "до лівої і правої" } },
          { id: "c", label: { pl: "do wszystkich czterech boków naraz", ua: "до всіх чотирьох сторін одразу" } }
        ],
        answer: "a",
        hint: {
          pl: "Wysokość mierzy odległość między jedną parą równoległych.",
          ua: "Висота міряє відстань між однією парою паралельних."
        },
        explanation: {
          pl: "h stoi prostopadle do dolnego boku, więc mierzy odległość między dolnym a górnym. To jedna para.",
          ua: "h стоїть перпендикулярно до нижньої сторони, отже міряє відстань між нижньою і верхньою. Це одна пара."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Do lewej i prawej należałaby inna wysokość — prostopadła do tych boków.",
              ua: "До лівої і правої належала б інша висота — перпендикулярна до тих сторін."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jedno h nie obsługuje obu par. Są dwie pary bok–wysokość.",
              ua: "Одне h не обслуговує обох пар. Є дві пари сторона–висота."
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
        pl: "Wysokość równoległoboku to zawsze długość skośnego boku.",
        ua: "Висота паралелограма — це завжди довжина навскісної сторони."
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        height: true,
        label: { pl: "h to nie bok", ua: "h — не сторона" }
      },
      text: {
        pl: [
          "Skośny bok to bok. Wysokość to inna kreska: prostopadła między równoległymi.",
          "Gdy ześlizgniesz ramkę, bok zostaje, a wysokość się skraca."
        ],
        ua: [
          "Навкісна сторона — це сторона. Висота — інша риска: перпендикуляр між паралельними.",
          "Коли зсунеш рамку, сторона лишається, а висота коротшає."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dłuższy bok, która h?",
        ua: "Довша сторона, яке h?"
      },
      task: {
        id: "wysr-prac-longer",
        type: "single-choice",
        level: "B",
        question: {
          pl: "W równoległoboku jeden bok jest wyraźnie dłuższy od sąsiedniego. Która wysokość jest krótsza?",
          ua: "У паралелограмі одна сторона явно довша за сусідню. Яка висота коротша?"
        },
        options: [
          { id: "a", label: { pl: "wysokość do dłuższego boku", ua: "висота до довшої сторони" } },
          { id: "b", label: { pl: "wysokość do krótszego boku", ua: "висота до коротшої сторони" } },
          { id: "c", label: { pl: "obie wysokości są zawsze równe", ua: "обидві висоти завжди рівні" } }
        ],
        answer: "a",
        hint: {
          pl: "Wyobraź sobie: szeroka podstawa, figura niska — albo wąska podstawa, figura wysoka. To ten sam płat.",
          ua: "Уяви: широка основа, фігура низька — або вузька основа, фігура висока. Це той самий шматок."
        },
        explanation: {
          pl: "Dłuższy bok idzie z krótszą wysokością. Krótszy bok — z wyższą. Dlatego obie pary opisują ten sam równoległobok.",
          ua: "Довша сторона йде з коротшою висотою. Коротша сторона — з вищою. Тому обидві пари описують той самий паралелограм."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Do krótszego boku wysokość jest wyższa, nie krótsza.",
              ua: "До коротшої сторони висота вища, не коротша."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Równe wysokości byłyby przy równych bokach. Tu boki są różne.",
              ua: "Рівні висоти були б при рівних сторонах. Тут сторони різні."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ześlizg przy stałych bokach",
        ua: "Зсув при сталих сторонах"
      },
      task: {
        id: "wysr-prac-tilt",
        type: "true-false",
        level: "B",
        question: {
          pl: "Można zostawić boki równoległoboku tej samej długości, a wysokość i tak się zmieni (gdy figurę „spłaszczysz”).",
          ua: "Можна лишити сторони паралелограма тієї самої довжини, а висота все одно зміниться (коли фігуру «сплющиш»)."
        },
        answer: true,
        hint: {
          pl: "Ramka z listewek: długości listewek stałe, kąt się zmienia, figura robi się niższa.",
          ua: "Рамка з планок: довжини планок сталі, кут змінюється, фігура стає нижчою."
        },
        explanation: {
          pl: "Tak. Wysokość zależy nie tylko od długości boku, ale i od tego, jak mocno ramka jest ześlizgnięta.",
          ua: "Так. Висота залежить не лише від довжини сторони, а й від того, наскільки сильно рамку зсунуто."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwie podstawy, dwa h",
        ua: "Дві основи, два h"
      },
      text: {
        pl: [
          "Na kartce narysowano jeden równoległobok.",
          "Nauczyciel raz nazywa podstawą dolny bok, raz — lewy bok."
        ],
        ua: [
          "На аркуші намальовано один паралелограм.",
          "Учитель раз називає основою нижню сторону, раз — ліву."
        ]
      },
      task: {
        id: "wysr-prob-pairs",
        type: "true-false",
        level: "B",
        question: {
          pl: "Do dwóch różnych (sąsiednich) boków równoległoboku należą na ogół dwie różne wysokości.",
          ua: "До двох різних (сусідніх) сторін паралелограма здебільшого належать дві різні висоти."
        },
        answer: true,
        hint: {
          pl: "Chyba że boki są równe — wtedy obie wysokości też się zrównają. W ogólnym równoległoboku boki są różne.",
          ua: "Хіба що сторони рівні — тоді обидві висоти теж зрівняються. У загальному паралелограмі сторони різні."
        },
        explanation: {
          pl: "Tak. Są dwie pary a–h. Przy różnych bokach wysokości są różne.",
          ua: "Так. Є дві пари a–h. При різних сторонах висоти різні."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Nie mylić z polem",
        ua: "Не плутати з площею"
      },
      text: {
        pl: [
          "Ktoś mówi: „żeby znaleźć pole, mnożysz bok przez wysokość”.",
          "To będzie później. Dziś pytanie jest inne: czy wysokość to to samo co pole?"
        ],
        ua: [
          "Хтось каже: «щоб знайти площу, множиш сторону на висоту».",
          "Це буде пізніше. Сьогодні питання інше: чи висота — це те саме, що площа?"
        ]
      },
      task: {
        id: "wysr-prob-area",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wysokość równoległoboku to to samo co jego pole.",
          ua: "Висота паралелограма — це те саме, що його площа."
        },
        answer: false,
        hint: {
          pl: "Wysokość jest kreską (odległością). Pole będzie przychodzić w innym rozdziale.",
          ua: "Висота — риска (відстань). Площа прийде в іншому розділі."
        },
        explanation: {
          pl: "Nie. Wysokość to odległość między równoległymi. Pole to już inna wielkość — na później.",
          ua: "Ні. Висота — відстань між паралельними. Площа — вже інша величина, на потім."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Równe boki ⇒ równa wysokość?",
        ua: "Рівні сторони ⇒ рівна висота?"
      },
      visual: {
        kind: "quad",
        quad: "rhombus",
        label: { pl: "wszystkie boki równe — a h?", ua: "усі сторони рівні — а h?" }
      },
      text: {
        pl: [
          "Weź dwa równoległoboki o tym samym boku a.",
          "Jeden jest „wysoki”, drugi mocno spłaszczony.",
          "Bok a ten sam. Czy h do tego boku musi być to samo?"
        ],
        ua: [
          "Візьми два паралелограми з тією самою стороною a.",
          "Один «високий», другий сильно сплющений.",
          "Сторона a та сама. Чи h до цієї сторони мусить бути тим самим?"
        ]
      },
      task: {
        id: "wysr-chall-equal",
        type: "true-false",
        level: "C",
        question: {
          pl: "Jeśli dwa równoległoboki mają równe boki (tej samej długości), to ich wysokości do tych boków są zawsze równe.",
          ua: "Якщо два паралелограми мають рівні сторони (тієї самої довжини), то їхні висоти до цих сторін завжди рівні."
        },
        answer: false,
        hint: {
          pl: "Ta sama ramka, inny kąt ześlizgnięcia. Bok stały — wysokość spada.",
          ua: "Та сама рамка, інший кут зсуву. Сторона стала — висота падає."
        },
        explanation: {
          pl: "Nie. Równy bok nie ustala wysokości. Im bardziej spłaszczysz równoległobok, tym mniejsza wysokość przy tych samych bokach.",
          ua: "Ні. Рівна сторона не фіксує висоту. Що сильніше сплющиш паралелограм, то менша висота при тих самих сторонах."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Prostopadła",
        ua: "Чи вже вмію? Перпендикуляр"
      },
      task: {
        id: "wysr-check-perp",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wysokość równoległoboku jest prostopadła do boku, do którego ją prowadzimy.",
          ua: "Висота паралелограма перпендикулярна до сторони, до якої її проводимо."
        },
        answer: true,
        hint: {
          pl: "Tak jak w trójkącie: wysokość tworzy kąt prosty z podstawą.",
          ua: "Як у трикутнику: висота утворює прямий кут з основою."
        },
        explanation: {
          pl: "Tak. h ⊥ podstawa.",
          ua: "Так. h ⊥ основа."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dwie pary",
        ua: "Чи вже вмію? Дві пари"
      },
      task: {
        id: "wysr-check-pairs",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Ile różnych par „bok + odpowiadająca mu wysokość” ma równoległobok, który nie jest rombem?",
          ua: "Скільки різних пар «сторона + відповідна висота» має паралелограм, який не є ромбом?"
        },
        options: [
          { id: "a", label: { pl: "jedną", ua: "одну" } },
          { id: "b", label: { pl: "dwie", ua: "дві" } },
          { id: "c", label: { pl: "cztery całkiem różne", ua: "чотири зовсім різні" } }
        ],
        answer: "b",
        hint: {
          pl: "Są dwie pary boków równoległych. Każda para ma jedną wysokość (odległość między szynami).",
          ua: "Є дві пари паралельних сторін. Кожна пара має одну висоту (відстань між рейками)."
        },
        explanation: {
          pl: "Dwie pary równoległych → dwie wysokości (dwie pary a–h). Przeciwległe boki dzielą tę samą wysokość, więc nie cztery różne.",
          ua: "Дві пари паралельних → дві висоти (дві пари a–h). Протилежні сторони ділять ту саму висоту, отже не чотири різні."
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
        height: true,
        label: { pl: "h ⊥ podstawa", ua: "h ⊥ основа" }
      },
      text: {
        pl: [
          "Wysokość = odległość między parą boków równoległych. Rysunek: prostopadła do podstawy.",
          "Dwie pary a–h. Dłuższy bok → krótsza wysokość.",
          "Równe boki nie znaczą same z siebie „równa wysokość” — liczy się też ześlizg."
        ],
        ua: [
          "Висота = відстань між парою паралельних сторін. Рисунок: перпендикуляр до основи.",
          "Дві пари a–h. Довша сторона → коротша висота.",
          "Рівні сторони самі по собі не означають «рівна висота» — ще важливий зсув."
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
          "W rozdziale o polu para bok–wysokość wróci.",
          "Dziś zapamiętaj tylko, gdzie stoi h i że są dwie takie pary."
        ],
        ua: [
          "У розділі про площу пара сторона–висота повернеться.",
          "Сьогодні запам’ятай лише, де стоїть h і що таких пар дві."
        ]
      }
    }
  ]
};
