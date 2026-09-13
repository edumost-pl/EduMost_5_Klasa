function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Ile miejsca i ile się zmieści",
        ua: "Скільки місця і скільки вміщається"
      },
      formula: "1 l = 1 dm³",
      text: {
        pl: [
          "Cegła zajmuje miejsce. Butelka je mieści.",
          "Objętość i pojemność to bliscy kuzyni — ale nie zawsze ta sama historia."
        ],
        ua: [
          "Цеглина займає місце. Пляшка його вміщає.",
          "Об’єм і місткість — близькі родичі, але не завжди та сама історія."
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
        { pl: "odróżnić objętość od pojemności", ua: "відрізнити об’єм від місткості" },
        { pl: "przeliczać cm³, dm³, m³ oraz ml i l", ua: "переводити см³, дм³, м³ а також мл і л" },
        { pl: "pamiętać, że 1 l = 1 dm³", ua: "пам’ятати, що 1 л = 1 дм³" },
        { pl: "zastanowić się, czy większa bryła zawsze więcej mieści", ua: "поміркувати, чи більше тіло завжди більше вміщає" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Kostka i dzbanek",
        ua: "Куб і глечик"
      },
      text: {
        pl: [
          "Drewniana kostka 1 dm × 1 dm × 1 dm zajmuje 1 dm³ miejsca — to jej objętość.",
          "Dzbanek, do którego wlewa się 1 litr wody, ma pojemność 1 l.",
          "1 litr wody zajmuje właśnie 1 dm³."
        ],
        ua: [
          "Дерев’яний кубик 1 дм × 1 дм × 1 дм займає 1 дм³ місця — це його об’єм.",
          "Глечик, у який вливається 1 літр води, має місткість 1 л.",
          "1 літр води займає саме 1 дм³."
        ]
      },
      items: [
        { pl: "1 dm³ = 1000 cm³", ua: "1 дм³ = 1000 см³" },
        { pl: "1 m³ = 1000 dm³", ua: "1 м³ = 1000 дм³" },
        { pl: "1 l = 1000 ml", ua: "1 л = 1000 мл" },
        { pl: "1 l = 1 dm³", ua: "1 л = 1 дм³" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Objętość i pojemność",
        ua: "Об’єм і місткість"
      },
      formula: "V  —  objętość,     C  —  pojemność",
      text: {
        pl: [
          ["Objętość", " mówi, ile miejsca zajmuje bryła."],
          ["Pojemność", " mówi, ile substancji zmieści naczynie."],
          "Dla pełnego naczynia bez grubych ścianek te liczby bywają równe. Ścianki zabierają miejsce — wtedy pojemność jest mniejsza niż „zewnętrzna” objętość."
        ],
        ua: [
          "Об’єм каже, скільки місця займає тіло.",
          "Місткість каже, скільки речовини вмістить посудина.",
          "Для повної посудини без товстих стінок ці числа можуть бути рівні. Стінки забирають місце — тоді місткість менша за «зовнішній» об’єм."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak zamienić 3 l na mililitry?",
        ua: "Як перевести 3 л на мілілітри?"
      },
      reveal: true,
      steps: [
        { formula: "1 l = 1000 ml" },
        { formula: "3 l = 3 · 1000 ml" },
        {
          formula: "3000 ml",
          text: {
            pl: ["3 litry to ", em("3000 ml"), ". Tyle samo co 3 dm³."],
            ua: ["3 літри — це ", em("3000 мл"), ". Стільки само, як 3 дм³."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Drabina jednostek",
        ua: "Драбина одиниць"
      },
      formula: "1 m³ = 1000 dm³ = 1 000 000 cm³",
      text: {
        pl: [
          "Krok o 1 w jednostkach długości to krok o 1000 w objętości, bo 10 · 10 · 10 = 1000.",
          ["1 dm = 10 cm, więc 1 dm³ = ", em("1000 cm³"), "."],
          ["1 m = 10 dm, więc 1 m³ = ", em("1000 dm³"), " = 1000 l."]
        ],
        ua: [
          "Крок на 1 в одиницях довжини — крок на 1000 в об’ємі, бо 10 · 10 · 10 = 1000.",
          ["1 дм = 10 см, отже 1 дм³ = ", em("1000 см³"), "."],
          ["1 м = 10 дм, отже 1 м³ = ", em("1000 дм³"), " = 1000 л."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Pół litra soku",
        ua: "Пів літра соку"
      },
      reveal: true,
      steps: [
        {
          formula: "500 ml = 0,5 l",
          text: {
            pl: "500 mililitrów to połowa z 1000 ml, czyli pół litra.",
            ua: "500 мілілітрів — половина з 1000 мл, тобто пів літра."
          }
        },
        {
          formula: "0,5 l = 0,5 dm³ = 500 cm³",
          text: {
            pl: "Ten sok zajmuje 500 cm³.",
            ua: "Цей сік займає 500 см³."
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
        { pl: "objętość", ua: "об’єм" },
        { pl: "pojemność", ua: "місткість" },
        { pl: "centymetr sześcienny (cm³)", ua: "кубічний сантиметр (см³)" },
        { pl: "decymetr sześcienny (dm³)", ua: "кубічний дециметр (дм³)" },
        { pl: "metr sześcienny (m³)", ua: "кубічний метр (м³)" },
        { pl: "litr, mililitr", ua: "літр, мілілітр" },
        { pl: "naczynie, ścianka", ua: "посудина, стінка" }
      ],
      phrases: [
        { pl: "Zamień na litry.", ua: "Переведи на літри." },
        { pl: "Ile to centymetrów sześciennych?", ua: "Скільки це кубічних сантиметрів?" },
        { pl: "Czy większa bryła zawsze więcej mieści?", ua: "Чи більше тіло завжди більше вміщає?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Litry i dm³",
        ua: "Літри і дм³"
      },
      task: {
        id: "poj-guided-litr",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile dm³ to ", em("4 l"), "? Wpisz liczbę."],
          ua: ["Скільки дм³ у ", em("4 л"), "? Введи число."]
        },
        answer: 4,
        hint: {
          pl: "1 l = 1 dm³.",
          ua: "1 л = 1 дм³."
        },
        explanation: {
          pl: "4 l = 4 dm³.",
          ua: "4 л = 4 дм³."
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
        pl: "1 l = 100 cm³",
        ua: "1 л = 100 см³"
      },
      text: {
        pl: [
          "Pomyłka o rząd wielkości.",
          ["1 l = 1 dm³ = ", em("1000 cm³"), ", nie 100."]
        ],
        ua: [
          "Помилка на порядок.",
          ["1 л = 1 дм³ = ", em("1000 см³"), ", не 100."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Mililitry",
        ua: "Мілілітри"
      },
      task: {
        id: "poj-ml",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile mililitrów to ", em("2 l"), "?"],
          ua: ["Скільки мілілітрів у ", em("2 л"), "?"]
        },
        answer: 2000,
        hint: {
          pl: "1 l = 1000 ml.",
          ua: "1 л = 1000 мл."
        },
        explanation: {
          pl: "2 · 1000 = 2000 ml.",
          ua: "2 · 1000 = 2000 мл."
        },
        mistakes: [
          {
            answer: 200,
            feedback: {
              pl: "Za mało zer. 1 l = 1000 ml, nie 100 ml.",
              ua: "Замало нулів. 1 л = 1000 мл, не 100 мл."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z dm³ na cm³",
        ua: "З дм³ на см³"
      },
      task: {
        id: "poj-dm-cm",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile cm³ to ", em("3 dm³"), "?"],
          ua: ["Скільки см³ у ", em("3 дм³"), "?"]
        },
        answer: 3000,
        hint: {
          pl: "1 dm³ = 1000 cm³.",
          ua: "1 дм³ = 1000 см³."
        },
        explanation: {
          pl: "3 · 1000 = 3000 cm³. To też 3 l.",
          ua: "3 · 1000 = 3000 см³. Це також 3 л."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Akwarium",
        ua: "Акваріум"
      },
      text: {
        pl: [
          ["Do akwarium wlewamy ", em("12 l"), " wody."],
          "Ile to decymetrów sześciennych?"
        ],
        ua: [
          ["В акваріум наливаємо ", em("12 л"), " води."],
          "Скільки це кубічних дециметрів?"
        ]
      },
      task: {
        id: "poj-aquarium",
        type: "input-number",
        level: "B",
        question: {
          pl: "Wpisz liczbę dm³.",
          ua: "Введи число дм³."
        },
        answer: 12,
        hint: {
          pl: "Litry i dm³ idą jeden do jednego.",
          ua: "Літри і дм³ ідуть один до одного."
        },
        explanation: {
          pl: "12 l = 12 dm³.",
          ua: "12 л = 12 дм³."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Sok w kartonie",
        ua: "Сік у пачці"
      },
      text: {
        pl: [
          ["Karton ma pojemność ", em("1 l"), ". Wylaliśmy ", em("250 ml"), "."]
        ],
        ua: [
          ["Пачка має місткість ", em("1 л"), ". Вилили ", em("250 мл"), "."]
        ]
      },
      task: {
        id: "poj-juice",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile mililitrów soku zostało?",
          ua: "Скільки мілілітрів соку залишилось?"
        },
        answer: 750,
        hint: {
          pl: "1 l = 1000 ml.",
          ua: "1 л = 1000 мл."
        },
        explanation: {
          pl: "1000 − 250 = 750 ml.",
          ua: "1000 − 250 = 750 мл."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy większa bryła zawsze więcej mieści?",
        ua: "Чи більше тіло завжди більше вміщає?"
      },
      text: {
        pl: [
          "Duża drewniana kostka i mała szklana butelka.",
          "Albo dwa pudełka: większe z zewnątrz, ale z grubymi ściankami."
        ],
        ua: [
          "Великий дерев’яний кубик і маленька скляна пляшка.",
          "Або дві коробки: більша зовні, але з товстими стінками."
        ]
      },
      task: {
        id: "poj-bigger-holds",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy większa bryła zawsze ma większą pojemność (zawsze więcej wlejesz do środka)?",
          ua: "Чи більше тіло завжди має більшу місткість (завжди більше наллєш усередину)?"
        },
        answer: false,
        hint: {
          pl: "Kostka może być pełna. Ścianki naczynia zabierają miejsce.",
          ua: "Кубик може бути суцільним. Стінки посудини забирають місце."
        },
        explanation: {
          pl: "Nie. Objętość to miejsce zajęte przez bryłę. Pojemność zależy od pustego środka i od ścianek. Pełna cegła jest duża, a nic nie wlejesz. Grube ścianki zmniejszają to, co się zmieści.",
          ua: "Ні. Об’єм — місце, зайняте тілом. Місткість залежить від порожнини всередині і від стінок. Суцільна цеглина велика, а нічого не наллєш. Товсті стінки зменшують те, що вміщається."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? 1 l",
        ua: "Чи вже вмію? 1 л"
      },
      task: {
        id: "poj-check-cm",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile cm³ to ", em("1 l"), "?"],
          ua: ["Скільки см³ у ", em("1 л"), "?"]
        },
        answer: 1000,
        hint: {
          pl: "1 l = 1 dm³ = ? cm³",
          ua: "1 л = 1 дм³ = ? см³"
        },
        explanation: {
          pl: "1 l = 1 dm³ = 1000 cm³.",
          ua: "1 л = 1 дм³ = 1000 см³."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Metry sześcienne",
        ua: "Чи вже вмію? Кубічні метри"
      },
      task: {
        id: "poj-check-m3",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile litrów to ", em("1 m³"), "?"],
          ua: ["Скільки літрів у ", em("1 м³"), "?"]
        },
        answer: 1000,
        hint: {
          pl: "1 m³ = 1000 dm³ i 1 dm³ = 1 l.",
          ua: "1 м³ = 1000 дм³ і 1 дм³ = 1 л."
        },
        explanation: {
          pl: "1 m³ = 1000 dm³ = 1000 l.",
          ua: "1 м³ = 1000 дм³ = 1000 л."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1 l = 1 dm³ = 1000 cm³ = 1000 ml",
      text: {
        pl: [
          "Objętość — ile miejsca zajmuje. Pojemność — ile się zmieści.",
          "1 l = 1 dm³. Ścianki i pełny środek sprawiają, że większa bryła nie zawsze więcej mieści."
        ],
        ua: [
          "Об’єм — скільки місця займає. Місткість — скільки вміщається.",
          "1 л = 1 дм³. Стінки і суцільна середина роблять так, що більше тіло не завжди більше вміщає."
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
          "Zaraz policzymy objętość prostopadłościanu: V = a · b · c.",
          "Jednostki cm³, dm³, l zostają te same."
        ],
        ua: [
          "Зараз полічимо об’єм прямокутного паралелепіпеда: V = a · b · c.",
          "Одиниці см³, дм³, л залишаються ті самі."
        ]
      }
    }
  ]
};
