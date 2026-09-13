function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Czy można policzyć to łatwiej?",
        ua: "Чи можна порахувати це легше?",
      },
      formula: "18 + 34 + 32 + 66",
      text: {
        pl: [
          "Można iść od lewej, po kolei.",
          "Ale czasem liczby same „proszą się” o inną kolejność.",
          "Nie licz jeszcze — najpierw popatrz.",
        ],
        ua: [
          "Можна йти зліва, по черзі.",
          "Але іноді числа самі «просяться» в іншому порядку.",
          "Поки не рахуй — спочатку подивись.",
        ],
      },
    },
    {
      type: "goal",
      heading: {
        pl: "Co będziesz umieć?",
        ua: "Що ти вмітимеш?",
      },
      items: [
        {
          pl: "zmieniać kolejność liczb w dodawaniu",
          ua: "zmieniać kolejność — змінювати порядок у dodawaniu",
        },
        {
          pl: "grupować wygodne liczby",
          ua: "grupować — групувати зручні числа",
        },
        {
          pl: "mnożyć „po kawałku”",
          ua: "mnożyć „po kawałku” — множити частинами",
        },
        {
          pl: "dzielić „po kawałku”",
          ua: "dzielić „po kawałku” — ділити частинами",
        },
        {
          pl: "korzystać z zer na końcu",
          ua: "korzystać z zer — користуватися нулями в кінці",
        },
        {
          pl: "rozpoznawać 0 i 1 w mnożeniu i dzieleniu",
          ua: "rozpoznawać 0 і 1 у mnożeniu і dzieleniu",
        },
        {
          pl: "wybrać najwygodniejszy sposób obliczenia",
          ua: "wybrać sposób obliczenia — вибрати найзручніший спосіб",
        },
      ],
    },
    {
      type: "observe",
      heading: {
        pl: "Te same liczby, inna kolejność",
        ua: "Ті самі числа, інший порядок",
      },
      visual: {
        kind: "add-reorder",
        a: [4, 29, 16],
        b: [4, 16, 29],
      },
      prompt: {
        pl: [
          [em("4 + 16"), " jest łatwe. ", em("29"), " zostało na koniec."],
          "Co się nie zmieniło?",
        ],
        ua: [
          [em("4 + 16"), " додавати легко. ", em("29"), " залишилося в кінці."],
          "Що не змінилося?",
        ],
      },
    },
    {
      type: "concept",
      heading: {
        pl: "Jak ułatwić dodawanie?",
        ua: "Як полегшити dodawanie?",
      },
      text: {
        pl: [
          "W dodawaniu kolejność składników można zmienić.",
          ["Szukaj par, które dają ", em("10, 20, 50, 100"), "."],
          "Najpierw pary – reszta poczeka.",
        ],
        ua: [
          "У dodawaniu порядок składników можна змінити.",
          ["Шукай пари, що дають ", em("10, 20, 50, 100"), "."],
          "Спочатку пари — решта зачекає.",
        ],
      },
    },
    {
      type: "visual",
      heading: {
        pl: "Liczby się zbierają w pary",
        ua: "Числа збираються в пари",
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "add-groups",
            stage: "line",
            numbers: [8, 17, 22, 4, 53],
            title: {
              pl: "szukamy par, które łatwo dodać",
              ua: "шукаємо пари, які легко додати",
            },
          },
        },
        {
          visual: {
            kind: "add-groups",
            stage: "pairs",
            title: {
              pl: "łączymy wygodne pary",
              ua: "об’єднуємо зручні пари",
            },
          },
        },
        { visual: { kind: "add-groups", stage: "tens" } },
        {
          visual: {
            kind: "add-groups",
            stage: "total",
            title: {
              pl: "wygodne pary dały szybki wynik",
              ua: "зручні пари дали швидкий результат",
            },
          },
        },
      ],
    },
    {
      type: "example",
      heading: {
        pl: "Policzmy tamto dodawanie",
        ua: "Полічимо те dodawanie",
      },
      reveal: true,
      steps: [
        { formula: "18 + 34 + 32 + 66" },
        { formula: "18 + 32 = 50" },
        { formula: "34 + 66 = 100" },
        {
          formula: "50 + 100 = 150",
          text: {
            pl: [
              "Nie trzeba iść od lewej.",
              ["Pary do ", em("50"), " i ", em("100"), " zrobiły robotę."],
            ],
            ua: [
              "Не треба йти зліва.",
              ["Пари до ", em("50"), " і ", em("100"), " зробили роботу."],
            ],
          },
        },
      ],
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Znajdź wygodną parę",
        ua: "Знайди зручну пару",
      },
      taskId: "dzial-group-pair",
    },
    {
      type: "concept",
      heading: {
        pl: "Mnożenie po kawałku",
        ua: "Mnożenie по шматочках",
      },
      formula: "8 · 23 = 8 · 20 + 8 · 3",
      text: {
        pl: [
          [em("23"), " to ", em("20"), " i jeszcze ", em("3"), "."],
          "Możemy pomnożyć ósemkę przez każdą część, a potem dodać.",
          "To wciąż to samo mnożenie.",
        ],
        ua: [
          [em("23"), " — це ", em("20"), " і ще ", em("3"), "."],
          "Можемо помножити вісімку на кожну частину, а потім додати.",
          "Це все ще те саме множення.",
        ],
      },
    },
    {
      type: "visual",
      heading: {
        pl: "Prostokąt rozcięty na dwa",
        ua: "Прямокутник розрізаний надвоє",
      },
      visual: { kind: "split-rect", a: 8, left: 20, right: 3 },
      text: {
        pl: [
          ["Wysokość ", em("8"), " zostaje."],
          ["Szerokość ", em("23"), " pęka na ", em("20"), " i ", em("3"), "."],
          "Dwa mniejsze prostokąty — jeden iloczyn.",
        ],
        ua: [
          ["Висота ", em("8"), " лишається."],
          ["Ширина ", em("23"), " тріскається на ", em("20"), " і ", em("3"), "."],
          "Два менші прямокутники — один добуток.",
        ],
      },
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 8 · 23",
        ua: "Крок за кроком: 8 · 23"
      },
      reveal: true,
      steps: [
        { formula: "8 · 23" },
        { formula: "8 · 20 + 8 · 3" },
        { formula: "160 + 24" },
        { formula: "184" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Jak rozbić 12 · 11?",
        ua: "Як розбити 12 · 11?",
      },
      taskId: "dzial-split-12-11",
    },
    {
      type: "concept",
      heading: {
        pl: "Czasem łatwiej odjąć",
        ua: "Іноді легше відняти",
      },
      formula: "29 · 6 = 30 · 6 − 1 · 6",
      text: {
        pl: [
          [em("30 · 6"), " znasz od razu: ", em("180"), "."],
          [em("29"), " to o jedną szóstkę mniej. Odejmujesz ", em("6"), " — i masz ", em("174"), "."],
          ["Krócej niż liczyć ", em("29"), " sześć razy."],
        ],
        ua: [
          [em("30 · 6"), " знаєш одразу: ", em("180"), "."],
          [em("29"), " — це на одну шістку менше. Віднімаєш ", em("6"), " — і маєш ", em("174"), "."],
          ["Коротше, ніж рахувати ", em("29"), " шість разів."],
        ],
      },
    },
    {
      type: "visual",
      heading: {
        pl: "Blisko okrągłej liczby",
        ua: "Близько круглого числа",
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "near-multiply",
            n: 29,
            up: 30,
            k: 6,
            stage: "shift",
          },
          text: {
            pl: [
              [em("29"), " to prawie ", em("30"), "."],
              ["Łatwiej wziąć ", em("30"), " szóstek i oddać jedną."],
            ],
            ua: [
              [em("29"), " — майже ", em("30"), "."],
              ["Легше взяти ", em("30"), " шісток і віддати одну."],
            ],
          },
        },
        {
          visual: {
            kind: "near-multiply",
            n: 29,
            up: 30,
            k: 6,
            stage: "compute",
          },
        },
      ],
    },
    {
      type: "concept",
      heading: {
        pl: "Dzielenie po kawałku",
        ua: "Dzielenie по шматочках",
      },
      formula: "268 : 2 = 200 : 2 + 60 : 2 + 8 : 2",
      text: {
        pl: [
          "Dużą liczbę rozbijamy na części, które łatwo podzielić.",
          "Każdą część dzielimy osobno, potem dodajemy ilorazy.",
        ],
        ua: [
          "Велике число розбиваємо на частини, які легко поділити.",
          "Кожну частину ділимо окремо, потім додаємо частки.",
        ],
      },
    },
    {
      type: "visual",
      heading: {
        pl: "268 pęka na trzy części",
        ua: "268 тріскається на три частини",
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "split-divide",
            parts: [200, 60, 8],
            d: 2,
            stage: "split",
          },
          text: {
            pl: [
              [em("268"), " trudno podzielić od razu."],
              ["Łatwiej: ", em("200"), ", ", em("60"), " i ", em("8"), "."],
            ],
            ua: [
              [em("268"), " важко поділити одразу."],
              ["Легше: ", em("200"), ", ", em("60"), " і ", em("8"), "."],
            ],
          },
        },
        {
          visual: {
            kind: "split-divide",
            parts: [200, 60, 8],
            d: 2,
            stage: "quotients",
          },
        },
      ],
    },
    {
      type: "concept",
      heading: {
        pl: "Zera na końcu pomagają",
        ua: "Нулі в кінці допомагають",
      },
      reveal: true,
      steps: [
        { visual: { kind: "zeros-scale", stage: "mul" } },
        { visual: { kind: "zeros-scale", stage: "div" } },
      ],
      text: {
        pl: [
          "Przy mnożeniu: policz bez zer, potem dopisz je z prawej.",
          "Przy dzieleniu możesz skreślić tyle samo zer w dzielnej i dzielniku.",
        ],
        ua: [
          "При mnożeniu: полічи без нулів, потім допиши їх справа.",
          "При dzieleniu можна закреслити стільки ж нулів у dzielnej і dzielniku.",
        ],
      },
    },
    {
      type: "concept",
      heading: {
        pl: "Gdy widać 0 albo 1",
        ua: "Коли видно 0 або 1",
      },
      text: {
        pl: [[
          "Zanim zaczniesz liczyć, spójrz, czy w działaniu jest ",
          em("0"),
          " albo ",
          em("1"),
          ". Te liczby mają specjalne zasady, które pomagają liczyć szybciej."
        ]],
        ua: [[
          "Перш ніж почати рахувати, подивись, чи є в дії ",
          em("0"),
          " або ",
          em("1"),
          ". Ці числа мають особливі правила, які допомагають рахувати швидше."
        ]]
      },
      items: [
        {
          pl: [
            ["Gdy mnożysz liczbę przez ", em("0"), ", wynik zawsze jest ", em("0"), "."],
            [em("7"), " · ", em("0"), " = ", em("0"), " oraz ", em("0"), " · ", em("7"), " = ", em("0")]
          ],
          ua: [
            ["Якщо множиш число на ", em("0"), ", результат завжди ", em("0"), "."],
            [em("7"), " · ", em("0"), " = ", em("0"), " та ", em("0"), " · ", em("7"), " = ", em("0")]
          ]
        },
        {
          pl: [
            ["Gdy mnożysz liczbę przez ", em("1"), ", liczba się nie zmienia."],
            [em("7"), " · ", em("1"), " = ", em("7"), " oraz ", em("1"), " · ", em("7"), " = ", em("7")]
          ],
          ua: [
            ["Якщо множиш число на ", em("1"), ", число не змінюється."],
            [em("7"), " · ", em("1"), " = ", em("7"), " та ", em("1"), " · ", em("7"), " = ", em("7")]
          ]
        },
        {
          pl: [
            ["Gdy dzielisz liczbę przez ", em("1"), ", liczba się nie zmienia."],
            [em("7"), " : ", em("1"), " = ", em("7")]
          ],
          ua: [
            ["Якщо ділиш число на ", em("1"), ", число не змінюється."],
            [em("7"), " : ", em("1"), " = ", em("7")]
          ]
        },
        {
          pl: [
            ["Gdy dzielisz ", em("0"), " przez liczbę różną od ", em("0"), ", wynik jest ", em("0"), "."],
            [em("0"), " : ", em("7"), " = ", em("0")],
            ["Przez ", em("0"), " dzielić nie wolno."]
          ],
          ua: [
            ["Якщо ділиш ", em("0"), " на число, відмінне від ", em("0"), ", результат — ", em("0"), "."],
            [em("0"), " : ", em("7"), " = ", em("0")],
            ["Ділити на ", em("0"), " не можна."]
          ]
        }
      ]
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова",
      },
      rows: [
        { pl: "dodawanie", ua: "додавання" },
        { pl: "odejmowanie", ua: "віднімання" },
        { pl: "mnożenie", ua: "множення" },
        { pl: "dzielenie", ua: "ділення" },
        { pl: "składnik", ua: "доданок" },
        { pl: "suma", ua: "сума" },
        { pl: "czynnik", ua: "множник" },
        { pl: "iloczyn", ua: "добуток" },
        { pl: "dzielna", ua: "ділене" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "iloraz", ua: "частка" },
        { pl: "wynik", ua: "результат" },
        { pl: "oblicz", ua: "обчисли" },
        { pl: "podkreśl", ua: "підкресли" },
        { pl: "zgrupuj", ua: "згрупуй" },
        {
          pl: "wybierz najwygodniejszy sposób",
          ua: "вибери найзручніший спосіб",
        },
      ],
      phrases: [
        {
          pl: "Oblicz najprostszym sposobem.",
          ua: "Обчисли найпростішим способом.",
        },
        { pl: "Zgrupuj liczby.", ua: "Згрупуй числа." },
        { pl: "Wykonaj działanie.", ua: "Виконай дію." },
        {
          pl: "Oblicz podobnie jak w przykładzie.",
          ua: "Обчисли подібно до прикладу.",
        },
      ],
    },
    {
      type: "practice",
      heading: {
        pl: "Zgrupuj i oblicz",
        ua: "Згрупуй і обчисли",
      },
      taskId: "dzial-group-compute",
    },
    {
      type: "practice",
      heading: {
        pl: "Uzupełnij brakującą liczbę",
        ua: "Доповни пропущене число",
      },
      taskId: "dzial-fill-23",
    },
    {
      type: "practice",
      heading: {
        pl: "Rozbij i pomnóż",
        ua: "Розбий і помнож",
      },
      taskId: "dzial-8-23",
    },
    {
      type: "practice",
      heading: {
        pl: "Ile drzew na osobę?",
        ua: "Скільки дерев на особу?",
      },
      taskId: "dzial-trees",
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dodawanie",
        ua: "Чи вже вмію? Додавання",
      },
      taskId: "dzial-check-sum",
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Mnożenie",
        ua: "Чи вже вмію? Множення",
      },
      taskId: "dzial-check-near",
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? 0 i 1",
        ua: "Чи вже вмію? 0 і 1",
      },
      taskId: "dzial-zero",
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше",
      },
      text: {
        pl: [
          "Nie zawsze trzeba liczyć dłużej.",
          ["Najpierw zobacz, czy możesz: przestawić, pogrupować, rozbić liczbę, wykorzystać ", em("0"), " lub ", em("1"), ", wybrać prostszy sposób."],
        ],
        ua: [
          "Не завжди треба рахувати довше.",
          ["Спочатку подивись, чи можеш: переставити, згрупувати, розбити число, використати ", em("0"), " або ", em("1"), ", вибрати простіший спосіб."],
        ],
      },
    },
    {
      type: "review",
      heading: {
        pl: "Wrócimy do tego",
        ua: "Ми до цього повернемось",
      },
      text: {
        pl: [
          "Później znów spotkasz: „Oblicz najprostszym sposobem”.",
          "To nie nowy materiał — krótka powtórka wyboru sposobu.",
        ],
        ua: [
          "Пізніше знову зустрінеш: «Oblicz najprostszym sposobem».",
          "Це не новий матеріал — коротке повторення вибору способу.",
        ],
      },
    },
  ],
};
