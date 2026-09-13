function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Najkrótsza droga z czubka do boku",
        ua: "Найкоротший шлях із верхівки до сторони"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        height: true,
        label: { pl: "kreska prostopadła do podstawy", ua: "риска, перпендикулярна до основи" }
      },
      text: {
        pl: [
          "Z wierzchołka chcesz trafić na przeciwległy bok „prosto w dół”.",
          "Nie po skosie. Prostopadle.",
          "Tę kreskę nazywamy wysokością trójkąta."
        ],
        ua: [
          "З вершини хочеш попасти на протилежну сторону «прямо вниз».",
          "Не навскіс. Перпендикулярно.",
          "Цю риску називаємо висотою трикутника."
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
        { pl: "rozpoznać wysokość jako prostopadłą z wierzchołka", ua: "розпізнати висоту як перпендикуляр із вершини" },
        { pl: "wiedzieć, że trójkąt ma trzy wysokości", ua: "знати, що трикутник має три висоти" },
        { pl: "zauważyć, że w rozwartokątnym wysokość bywa na zewnątrz", ua: "помітити, що в тупокутному висота буває зовні" },
        { pl: "odpowiedzieć, czy wysokość zawsze leży wewnątrz", ua: "відповісти, чи висота завжди лежить усередині" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Kreska z wierzchołka",
        ua: "Риска з вершини"
      },
      visual: {
        kind: "triangle",
        triangle: "iso",
        height: true,
        label: { pl: "h — wysokość do podstawy", ua: "h — висота до основи" }
      },
      text: {
        pl: [
          "Przerywana kreska schodzi z góry i trafia w podstawę.",
          "Przy podstawie tworzy kąt prosty."
        ],
        ua: [
          "Пунктирна риска сходить згори і потрапляє в основу.",
          "При основі утворює прямий кут."
        ]
      },
      prompt: {
        pl: [
          "Wysokość nie jest „jak wysoki jest trójkąt na oko”.",
          "Wysokość to konkretna prostopadła z wierzchołka do prostej, na której leży przeciwległy bok."
        ],
        ua: [
          "Висота — не «який високий трикутник на око».",
          "Висота — конкретний перпендикуляр із вершини до прямої, на якій лежить протилежна сторона."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Co to jest wysokość?",
        ua: "Що таке висота?"
      },
      formula: "wysokość  ⊥  podstawa",
      text: {
        pl: [
          ["", em("Wysokość"), " trójkąta to odcinek prostopadły z wierzchołka do prostej zawierającej przeciwległy bok."],
          "Ten bok nazywamy wtedy podstawą (dla tej wysokości).",
          "Każdy wierzchołek ma swoją wysokość — więc wysokości są trzy."
        ],
        ua: [
          ["", em("Висота"), " трикутника — відрізок, перпендикулярний із вершини до прямої, що містить протилежну сторону."],
          "Ту сторону тоді називаємо основою (для цієї висоти).",
          "Кожна вершина має свою висоту — отже висот три."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Trzy wysokości, nie jedna",
        ua: "Три висоти, не одна"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "triangle",
            triangle: "equilateral",
            height: true,
            label: { pl: "jedna z trzech wysokości", ua: "одна з трьох висот" }
          },
          text: {
            pl: "Na rysunku widać wysokość do dolnej podstawy.",
            ua: "На рисунку видно висоту до нижньої основи."
          }
        },
        {
          text: {
            pl: [
              "Z lewego wierzchołka też można opuścić prostopadłą do przeciwległego boku.",
              "Z prawego — tak samo. Razem trzy wysokości."
            ],
            ua: [
              "З лівої вершини теж можна опустити перпендикуляр до протилежної сторони.",
              "З правої — так само. Разом три висоти."
            ]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Gdzie leży wysokość?",
        ua: "Де лежить висота?"
      },
      visual: {
        kind: "triangle",
        triangle: "obtuse",
        label: { pl: "kąt rozwarty — wysokość może wyjść na zewnątrz", ua: "тупий кут — висота може вийти назовні" }
      },
      text: {
        pl: [
          ["W trójkącie ", em("ostrokątnym"), " wszystkie trzy wysokości leżą wewnątrz."],
          ["W ", em("prostokątnym"), " dwie wysokości są ramionami kąta prostego — leżą na bokach."],
          ["W ", em("rozwartokątnym"), " wysokość opuszczona na bok przy kącie rozwartym wypada ", em("na zewnątrz"), " trójkąta. Przedłużasz bok i dopiero tam stawiasz prostopadłą."]
        ],
        ua: [
          ["У ", em("гострокутному"), " трикутнику всі три висоти лежать усередині."],
          ["У ", em("прямокутному"), " дві висоти є сторонами прямого кута — лежать на сторонах."],
          ["У ", em("тупокутному"), " висота, опущена на сторону при тупому куті, падає ", em("назовні"), " трикутника. Продовжуєш сторону і вже там ставиш перпендикуляр."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Wewnątrz, na boku, na zewnątrz",
        ua: "Усередині, на стороні, назовні"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "triangle",
            triangle: "iso",
            height: true,
            label: { pl: "ostrokątny — h w środku", ua: "гострокутний — h усередині" }
          }
        },
        {
          visual: {
            kind: "triangle",
            triangle: "right",
            label: { pl: "prostokątny — ramiona kąta prostego są wysokościami", ua: "прямокутний — сторони прямого кута є висотами" }
          },
          text: {
            pl: "Ramiona kąta prostego są już prostopadłe. Same są wysokościami do siebie.",
            ua: "Сторони прямого кута вже перпендикулярні. Самі є висотами одна до одної."
          }
        },
        {
          visual: {
            kind: "triangle",
            triangle: "obtuse",
            label: { pl: "rozwartokątny — h bywa obok figury", ua: "тупокутний — h буває поруч із фігурою" }
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
        { pl: "wysokość trójkąta", ua: "висота трикутника" },
        { pl: "podstawa", ua: "основа" },
        { pl: "prostopadła", ua: "перпендикуляр" },
        { pl: "opuścić wysokość", ua: "опустити висоту" },
        { pl: "wewnątrz trójkąta", ua: "всередині трикутника" },
        { pl: "na zewnątrz trójkąta", ua: "зовні трикутника" }
      ],
      phrases: [
        { pl: "Narysuj wysokość trójkąta.", ua: "Намалюй висоту трикутника." },
        { pl: "Ile wysokości ma trójkąt?", ua: "Скільки висот має трикутник?" },
        { pl: "Czy wysokość leży wewnątrz trójkąta?", ua: "Чи висота лежить усередині трикутника?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile wysokości?",
        ua: "Скільки висот?"
      },
      visual: {
        kind: "triangle",
        triangle: "scalene",
        label: { pl: "zwykły trójkąt, trzy wierzchołki", ua: "звичайний трикутник, три вершини" }
      },
      task: {
        id: "wys-guided-three",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile wysokości ma każdy trójkąt? Wpisz liczbę.",
          ua: "Скільки висот має кожен трикутник? Введи число."
        },
        answer: 3,
        hint: {
          pl: "Z każdego wierzchołka można opuścić jedną wysokość.",
          ua: "З кожної вершини можна опустити одну висоту."
        },
        explanation: {
          pl: "Trzy wierzchołki → trzy wysokości.",
          ua: "Три вершини → три висоти."
        },
        mistakes: [
          {
            answer: 1,
            feedback: {
              pl: "Na rysunku często widać jedną, ale każda para „wierzchołek + przeciwległy bok” ma swoją.",
              ua: "На рисунку часто видно одну, але кожна пара «вершина + протилежна сторона» має свою."
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
        pl: "Wysokość to zawsze kreska w środku trójkąta, jak w namiocie.",
        ua: "Висота — завжди риска всередині трикутника, як у наметі."
      },
      visual: {
        kind: "triangle",
        triangle: "obtuse",
        label: { pl: "tu „środek” nie wystarczy", ua: "тут «середини» не досить" }
      },
      text: {
        pl: [
          "W namiocie — tak, bo kąty przy podstawie są ostre.",
          "Gdy jeden kąt jest rozwarty, prostopadła do przedłużenia boku ląduje obok trójkąta.",
          "Wysokość nadal jest prostopadła. Tylko nie mieści się w środku."
        ],
        ua: [
          "У наметі — так, бо кути при основі гострі.",
          "Коли один кут тупий, перпендикуляр до продовження сторони падає поруч із трикутником.",
          "Висота далі перпендикулярна. Лише не вміщається всередині."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Co musi być przy podstawie?",
        ua: "Що має бути при основі?"
      },
      task: {
        id: "wys-prac-perp",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wysokość trójkąta jest prostopadła do prostej, na której leży wybrana podstawa.",
          ua: "Висота трикутника перпендикулярна до прямої, на якій лежить вибрана основа."
        },
        answer: true,
        hint: {
          pl: "Prostopadła znaczy: kąt prosty.",
          ua: "Перпендикулярна означає: прямий кут."
        },
        explanation: {
          pl: "To definicja wysokości: z wierzchołka prostopadle do prostej podstawy.",
          ua: "Це означення висоти: з вершини перпендикулярно до прямої основи."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Prostokątny — gdzie wysokość?",
        ua: "Прямокутний — де висота?"
      },
      visual: {
        kind: "triangle",
        triangle: "right",
        label: { pl: "kąt prosty przy lewym dolnym wierzchołku", ua: "прямий кут біля лівої нижньої вершини" }
      },
      task: {
        id: "wys-prac-right",
        type: "single-choice",
        level: "B",
        question: {
          pl: "W trójkącie prostokątnym dwie wysokości leżą na bokach figury. Które to boki?",
          ua: "У прямокутному трикутнику дві висоти лежать на сторонах фігури. Які це сторони?"
        },
        options: [
          { id: "a", label: { pl: "ramiona kąta prostego", ua: "сторони прямого кута" } },
          { id: "b", label: { pl: "tylko najdłuższy bok", ua: "лише найдовша сторона" } },
          { id: "c", label: { pl: "żaden bok nie jest wysokością", ua: "жодна сторона не є висотою" } }
        ],
        answer: "a",
        hint: {
          pl: "Ramiona kąta prostego są już do siebie prostopadłe.",
          ua: "Сторони прямого кута вже перпендикулярні одна до одної."
        },
        explanation: {
          pl: "Ramiona kąta prostego są do siebie prostopadłe, więc każde jest wysokością opuszczoną na drugie.",
          ua: "Сторони прямого кута перпендикулярні, отже кожна є висотою, опущеною на другу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Najdłuższy bok leży naprzeciw kąta prostego. Wysokość na ten bok spada z kąta prostego do środka tego boku — ale sam ten bok nie jest wysokością.",
              ua: "Найдовша сторона лежить навпроти прямого кута. Висота на цю сторону падає з прямого кута на середину цієї сторони — але сама сторона не є висотою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Właśnie dwa boki kąta prostego pełnią rolę wysokości.",
              ua: "Саме дві сторони прямого кута відіграють роль висот."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Która kreska jest wysokością?",
        ua: "Яка риска є висотою?"
      },
      text: {
        pl: [
          "Z wierzchołka wychodzą trzy kreski do przeciwległego boku:",
          "jedna na skos do lewego końca, jedna na skos do prawego, jedna prostopadle."
        ],
        ua: [
          "З вершини виходять три риски до протилежної сторони:",
          "одна навскіс до лівого кінця, одна навскіс до правого, одна перпендикулярно."
        ]
      },
      task: {
        id: "wys-prob-which",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kreska jest wysokością do tego boku?",
          ua: "Яка риска є висотою до цієї сторони?"
        },
        options: [
          { id: "a", label: { pl: "kreska do lewego końca boku", ua: "риска до лівого кінця сторони" } },
          { id: "b", label: { pl: "kreska prostopadła do boku", ua: "риска, перпендикулярна до сторони" } },
          { id: "c", label: { pl: "kreska do prawego końca boku", ua: "риска до правого кінця сторони" } }
        ],
        answer: "b",
        hint: {
          pl: "Wysokość tworzy kąt prosty z podstawą, nie musi trafiać w koniec boku.",
          ua: "Висота утворює прямий кут з основою, не мусить потрапляти в кінець сторони."
        },
        explanation: {
          pl: "Tylko prostopadła jest wysokością. Kreski do końców boku to po prostu ramiona trójkąta albo inne odcinki.",
          ua: "Лише перпендикуляр є висотою. Риски до кінців сторони — просто сторони трикутника або інші відрізки."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Rozwartokątny — gdzie szukać h?",
        ua: "Тупокутний — де шукати h?"
      },
      visual: {
        kind: "triangle",
        triangle: "obtuse",
        label: { pl: "trójkąt rozwartokątny", ua: "тупокутний трикутник" }
      },
      text: {
        pl: [
          "Chcesz opuścić wysokość na bok, który „wchodzi” w kąt rozwarty.",
          "Wewnątrz trójkąta prostopadła się nie mieści."
        ],
        ua: [
          "Хочеш опустити висоту на сторону, яка «входить» у тупий кут.",
          "Усередині трикутника перпендикуляр не вміщається."
        ]
      },
      task: {
        id: "wys-prob-outside",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Gdzie leży ta wysokość w trójkącie rozwartokątnym?",
          ua: "Де лежить ця висота в тупокутному трикутнику?"
        },
        options: [
          { id: "a", label: { pl: "zawsze wewnątrz trójkąta", ua: "завжди всередині трикутника" } },
          { id: "b", label: { pl: "na zewnątrz — na przedłużeniu boku", ua: "зовні — на продовженні сторони" } },
          { id: "c", label: { pl: "takiego trójkąta nie rysuje się wysokości", ua: "у такому трикутнику висоту не малюють" } }
        ],
        answer: "b",
        hint: {
          pl: "Przedłuż bok i dopiero na tej prostej stawiasz kąt prosty.",
          ua: "Продовж сторону і вже на цій прямій став прямий кут."
        },
        explanation: {
          pl: "W rozwartokątnym wysokość do boku wychodzącego z kąta rozwartego spada na zewnątrz, na przedłużenie tego boku. Nadal jest wysokością.",
          ua: "У тупокутному висота до сторони, що виходить із тупого кута, падає назовні, на продовження цієї сторони. Далі є висотою."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Wewnątrz jest w ostrokątnym. Tu kąt rozwarty wypycha prostopadłą obok figury.",
              ua: "Усередині — в гострокутному. Тут тупий кут виштовхує перпендикуляр поруч із фігурою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wysokość istnieje zawsze. Trzeba tylko przedłużyć bok.",
              ua: "Висота існує завжди. Треба лише продовжити сторону."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy zawsze w środku?",
        ua: "Чи завжди всередині?"
      },
      text: {
        pl: [
          "Nie licz. Pomyśl o trzech rodzajach trójkątów: ostrokątny, prostokątny, rozwartokątny."
        ],
        ua: [
          "Не рахуй. Подумай про три види трикутників: гострокутний, прямокутний, тупокутний."
        ]
      },
      task: {
        id: "wys-chall-inside",
        type: "true-false",
        level: "C",
        question: {
          pl: "Wysokość trójkąta zawsze leży wewnątrz trójkąta.",
          ua: "Висота трикутника завжди лежить усередині трикутника."
        },
        answer: false,
        hint: {
          pl: "Przypomnij trójkąt z kątem rozwartym.",
          ua: "Пригадай трикутник із тупим кутом."
        },
        explanation: {
          pl: "Nie zawsze. W trójkącie rozwartokątnym co najmniej jedna wysokość leży na zewnątrz. W prostokątnym dwie wysokości leżą na bokach.",
          ua: "Не завжди. У тупокутному трикутнику принаймні одна висота лежить зовні. У прямокутному дві висоти лежать на сторонах."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Definicja",
        ua: "Чи вже вмію? Означення"
      },
      task: {
        id: "wys-check-def",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wysokość to odcinek z wierzchołka prostopadły do prostej zawierającej przeciwległy bok.",
          ua: "Висота — відрізок із вершини, перпендикулярний до прямої, що містить протилежну сторону."
        },
        answer: true,
        hint: {
          pl: "Kluczowe słowo: prostopadły.",
          ua: "Ключове слово: перпендикулярний."
        },
        explanation: {
          pl: "Tak. Nie myl wysokości z dowolną kreską do boku.",
          ua: "Так. Не плутай висоту з будь-якою рискою до сторони."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Rodzaj trójkąta",
        ua: "Чи вже вмію? Вид трикутника"
      },
      task: {
        id: "wys-check-obtuse",
        type: "single-choice",
        level: "B",
        question: {
          pl: "W którym trójkącie wysokość może wypaść na zewnątrz figury?",
          ua: "У якому трикутнику висота може випасти назовні фігури?"
        },
        options: [
          { id: "a", label: { pl: "tylko równobocznym", ua: "лише рівносторонньому" } },
          { id: "b", label: { pl: "rozwartokątnym", ua: "тупокутному" } },
          { id: "c", label: { pl: "w każdym ostrokątnym", ua: "у кожному гострокутному" } }
        ],
        answer: "b",
        hint: {
          pl: "Szukaj kąta szerszego niż róg kartki.",
          ua: "Шукай кут ширший за ріг аркуша."
        },
        explanation: {
          pl: "W rozwartokątnym wysokość do boku przy kącie rozwartym spada na zewnątrz. Równoboczny jest ostrokątny — tam wysokości są w środku.",
          ua: "У тупокутному висота до сторони при тупому куті падає назовні. Рівносторонній є гострокутним — там висоти всередині."
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
        kind: "triangle",
        triangle: "iso",
        height: true,
        label: { pl: "h ⊥ podstawa", ua: "h ⊥ основа" }
      },
      text: {
        pl: [
          ["Wysokość = prostopadła z wierzchołka do prostej przeciwległego boku."],
          ["Każdy trójkąt ma ", em("trzy"), " wysokości."],
          "Nie zawsze w środku: w rozwartokątnym bywa na zewnątrz."
        ],
        ua: [
          ["Висота = перпендикуляр із вершини до прямої протилежної сторони."],
          ["Кожен трикутник має ", em("три"), " висоти."],
          "Не завжди всередині: у тупокутному буває назовні."
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
          "Później wysokość wróci przy polu trójkąta.",
          "Dziś nie liczymy pola — wystarczy wiedzieć, gdzie stoi kreska h."
        ],
        ua: [
          "Пізніше висота повернеться при площі трикутника.",
          "Сьогодні площу не рахуємо — досить знати, де стоїть риска h."
        ]
      }
    }
  ]
};
