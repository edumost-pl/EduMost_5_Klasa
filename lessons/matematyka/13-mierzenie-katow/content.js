function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Ile to jest „trochę otwarte”?",
        ua: "Скільки це «трохи відкрито»?"
      },
      visual: { kind: "angle", degrees: 40 },
      text: {
        pl: [
          "Oko mówi: ostry. Ale czy 35°, czy 50°?",
          "Dziś kątomierz. Mierzymy do jednego stopnia — bez zgadywania."
        ],
        ua: [
          "Око каже: гострий. Але чи 35°, чи 50°?",
          "Сьогодні транспортир. Міряємо до одного градуса — без вгадування."
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
        { pl: "odczytać miarę kąta do 1°", ua: "прочитати міру кута до 1°" },
        { pl: "mierzyć kąty mniejsze niż 180°", ua: "вимірювати кути менші ніж 180°" },
        { pl: "wybrać właściwą skalę kątomierza", ua: "вибрати правильну шкалу транспортира" },
        { pl: "obliczyć kąt dopełniający do 180°", ua: "обчислити кут, що доповнює до 180°" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Dwie skale na jednym łuku",
        ua: "Дві шкали на одній дузі"
      },
      visual: { kind: "angle", degrees: 40 },
      text: {
        pl: [
          "Kątomierz ma dwa rzędy liczb. Od lewej 0…180 i od prawej 0…180.",
          "Ten sam kreska może pokazywać 40 i 140."
        ],
        ua: [
          "Транспортир має два ряди чисел. Зліва 0…180 і справа 0…180.",
          "Та сама риска може показувати 40 і 140."
        ]
      },
      prompt: {
        pl: [
          "Nie czytaj pierwszej liczby, którą zobaczysz.",
          "Najpierw sprawdź, od której strony ramie stoi przy zerze."
        ],
        ua: [
          "Не читай перше число, яке побачиш.",
          "Спочатку перевір, з якого боку сторона стоїть біля нуля."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Jak przyłożyć kątomierz",
        ua: "Як прикласти транспортир"
      },
      text: {
        pl: [
          ["Środek kątomierza kładziesz na ", em("wierzchołek"), "."],
          "Zero jednej skali — na jednym ramieniu.",
          ["Drugie ramię pokazuje miarę na ", em("tej samej"), " skali."],
          ["Mierzymy kąty wypukłe: mniej niż ", em("180°"), "."]
        ],
        ua: [
          ["Центр транспортира кладеш на ", em("вершину"), "."],
          "Нуль однієї шкали — на одній стороні.",
          ["Друга сторона показує міру на ", em("тій самій"), " шкалі."],
          ["Міряємо опуклі кути: менше ніж ", em("180°"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Odczyt 55°",
        ua: "Відлік 55°"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "angle", degrees: 55 },
          text: {
            pl: "Ramie leży przy 0 na dolnej skali. Drugie ramie przecina łuk.",
            ua: "Сторона лежить біля 0 на нижній шкалі. Друга сторона перетинає дугу."
          }
        },
        {
          formula: "55°",
          text: {
            pl: ["Na tej samej skali widać ", em("55"), ". Na drugiej skali byłoby ", em("125"), " — to nie ta skala."],
            ua: ["На тій самій шкалі видно ", em("55"), ". На другій шкалі було б ", em("125"), " — це не та шкала."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Pułapka: zła skala",
        ua: "Пастка: неправильна шкала"
      },
      formula: "40°    albo    140°  ?",
      text: {
        pl: [
          ["Suma dwóch liczb na tej samej kresce to zawsze ", em("180°"), "."],
          "Jedna z nich pasuje do twojego kąta. Druga jest pułapką.",
          "Ostry kąt nie może mieć 140°. Rozwarty nie może mieć 40°."
        ],
        ua: [
          ["Сума двох чисел на тій самій рисці завжди ", em("180°"), "."],
          "Одне з них пасує до твого кута. Друге — пастка.",
          "Гострий кут не може мати 140°. Тупий не може мати 40°."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Kąt ostry przy dwóch liczbach",
        ua: "Гострий кут при двох числах"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "angle", degrees: 40 },
          text: {
            pl: ["Kreska kątomierza: ", em("40"), " i ", em("140"), "."],
            ua: ["Риска транспортира: ", em("40"), " і ", em("140"), "."]
          }
        },
        {
          formula: "kąt ostry → 40°",
          text: {
            pl: ["Oko widzi kąt ciaśniejszy niż róg kartki. Wybieramy ", em("40°"), ". ", em("140°"), " to odczyt z drugiej skali."],
            ua: ["Око бачить кут тісніший за ріг аркуша. Вибираємо ", em("40°"), ". ", em("140°"), " — відлік з другої шкали."]
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
        { pl: "kątomierz", ua: "транспортир" },
        { pl: "miara kąta", ua: "міра кута" },
        { pl: "stopień", ua: "градус" },
        { pl: "skala", ua: "шкала" },
        { pl: "kąt wypukły", ua: "опуклий кут" },
        { pl: "dopełnienie do 180°", ua: "доповнення до 180°" }
      ],
      phrases: [
        { pl: "Odczytaj miarę kąta.", ua: "Прочитай міру кута." },
        { pl: "Zmierz kąt z dokładnością do 1°.", ua: "Виміряй кут з точністю до 1°." },
        { pl: "Który odczyt jest pułapką?", ua: "Який відлік є пасткою?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Wybierz odczyt",
        ua: "Вибери відлік"
      },
      visual: { kind: "angle", degrees: 70 },
      task: {
        id: "miara-guided-70",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Kąt na rysunku jest ostry. Kątomierz pokazuje na tej kresce ", em("70"), " i ", em("110"), ". Ile stopni ma kąt? Wpisz liczbę."],
          ua: ["Кут на рисунку гострий. Транспортир на цій рисці показує ", em("70"), " і ", em("110"), ". Скільки градусів має кут? Введи число."]
        },
        answer: 70,
        hint: {
          pl: "Ostry jest mniejszy niż 90°. Która z dwóch liczb jest mniejsza niż 90?",
          ua: "Гострий менший ніж 90°. Яке з двох чисел менше ніж 90?"
        },
        explanation: {
          pl: "Kąt ostry → 70°. 110° byłoby kątem rozwartym — zła skala.",
          ua: "Гострий кут → 70°. 110° був би тупим — неправильна шкала."
        },
        mistakes: [
          {
            answer: 110,
            feedback: {
              pl: "To pułapka drugiej skali. 70 + 110 = 180, ale kąt jest ostry.",
              ua: "Це пастка другої шкали. 70 + 110 = 180, але кут гострий."
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
        pl: "Zawsze czytam mniejszą liczbę na kątomierzu.",
        ua: "Завжди читаю менше число на транспортирі."
      },
      visual: { kind: "angle", degrees: 125 },
      text: {
        pl: [
          "Nie. Najpierw rodzaj kąta, potem liczba.",
          ["Kąt rozwarty potrzebuje liczby ", em("większej"), " niż 90°."],
          "Mniejsza liczba na tej samej kresce byłaby wtedy pułapką."
        ],
        ua: [
          "Ні. Спочатку вид кута, потім число.",
          ["Тупий кут потребує числа ", em("більшого"), " ніж 90°."],
          "Менше число на тій самій рисці тоді було б пасткою."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Rozwarty i dwie liczby",
        ua: "Тупий і два числа"
      },
      visual: { kind: "angle", degrees: 130 },
      task: {
        id: "miara-prac-obtuse",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Kąt jest rozwarty. Na kresce kątomierza widać ", em("50"), " i ", em("130"), ". Ile stopni ma kąt? Wpisz liczbę."],
          ua: ["Кут тупий. На рисці транспортира видно ", em("50"), " і ", em("130"), ". Скільки градусів має кут? Введи число."]
        },
        answer: 130,
        hint: {
          pl: "Rozwarty > 90°. Która liczba jest większa niż 90?",
          ua: "Тупий > 90°. Яке число більше ніж 90?"
        },
        explanation: {
          pl: "Kąt rozwarty → 130°. 50° to odczyt ze złej skali.",
          ua: "Тупий кут → 130°. 50° — відлік з неправильної шкали."
        },
        mistakes: [
          {
            answer: 50,
            feedback: {
              pl: "50° to kąt ostry. Tu kąt jest szerszy niż róg kartki.",
              ua: "50° — гострий кут. Тут кут ширший за ріг аркуша."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dopełnienie do 180°",
        ua: "Доповнення до 180°"
      },
      task: {
        id: "miara-prac-180",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zmierzono kąt ", em("63°"), ". Ile stopni ma kąt przyległy, dopełniający go do prostej? Wpisz liczbę."],
          ua: ["Виміряли кут ", em("63°"), ". Скільки градусів має суміжний кут, що доповнює його до прямої? Введи число."]
        },
        answer: 117,
        hint: {
          pl: "180 − 63.",
          ua: "180 − 63."
        },
        explanation: {
          pl: "180 − 63 = 117.",
          ua: "180 − 63 = 117."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Zegar bez minut",
        ua: "Годинник без хвилин"
      },
      text: {
        pl: [
          "Na kątomierzu uczeń przyłożył zero do jednego ramienia.",
          ["Drugie ramię padło na kreskę ", em("28"), "/", em("152"), "."],
          "Kąt wygląda na ciaśniejszy niż róg zeszytu."
        ],
        ua: [
          "На транспортирі учень приклав нуль до однієї сторони.",
          ["Друга сторона впала на риску ", em("28"), "/", em("152"), "."],
          "Кут виглядає тіснішим за ріг зошита."
        ]
      },
      task: {
        id: "miara-prob-clock",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Jaka jest miara tego kąta w stopniach? Wpisz liczbę."],
          ua: ["Яка міра цього кута в градусах? Введи число."]
        },
        answer: 28,
        hint: {
          pl: "Ciaśniejszy niż róg zeszytu to kąt ostry.",
          ua: "Тісніший за ріг зошита — гострий кут."
        },
        explanation: {
          pl: "Kąt ostry → 28°. 152° to druga skala.",
          ua: "Гострий кут → 28°. 152° — друга шкала."
        },
        mistakes: [
          {
            answer: 152,
            feedback: {
              pl: "152° byłoby kątem rozwartym. Ten kąt jest ostry.",
              ua: "152° був би тупим кутом. Цей кут гострий."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwa odczyty, jedna prosta",
        ua: "Два відліки, одна пряма"
      },
      text: {
        pl: [
          ["Na prostej leżą dwa kąty przyległe. Jeden zmierzono: ", em("47°"), "."],
          "Drugiego nie trzeba przykładać kątomierza — jeśli wierzysz w 180°."
        ],
        ua: [
          ["На прямій лежать два суміжні кути. Один виміряли: ", em("47°"), "."],
          "Другий не треба міряти транспортиром — якщо віриш у 180°."
        ]
      },
      task: {
        id: "miara-prob-adj",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile stopni ma drugi kąt? Wpisz liczbę."],
          ua: ["Скільки градусів має другий кут? Введи число."]
        },
        answer: 133,
        hint: {
          pl: "Dopełnienie do 180°.",
          ua: "Доповнення до 180°."
        },
        explanation: {
          pl: "180 − 47 = 133.",
          ua: "180 − 47 = 133."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który odczyt jest pułapką?",
        ua: "Який відлік є пасткою?"
      },
      visual: { kind: "angle", degrees: 35 },
      text: {
        pl: [
          "Nie licz „na oko” stopni. Oceń tylko: ostry czy rozwarty, potem wybierz skalę."
        ],
        ua: [
          "Не рахуй «на око» градуси. Оціни лише: гострий чи тупий, потім вибери шкалу."
        ]
      },
      task: {
        id: "miara-chall-trap",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Kąt na rysunku jest ostry. Na kresce kątomierza widać ", em("35"), " i ", em("145"), ". Który odczyt jest pułapką?"],
          ua: ["Кут на рисунку гострий. На рисці транспортира видно ", em("35"), " і ", em("145"), ". Який відлік є пасткою?"]
        },
        options: [
          { id: "a", label: { pl: "35°", ua: "35°" } },
          { id: "b", label: { pl: "145°", ua: "145°" } },
          { id: "c", label: { pl: "oba odczyty są dobre, bo 35 + 145 = 180", ua: "обидва відліки добрі, бо 35 + 145 = 180" } }
        ],
        answer: "b",
        hint: {
          pl: "Pułapka to liczba z drugiej skali. Ostry kąt nie ma 145°.",
          ua: "Пастка — число з другої шкали. Гострий кут не має 145°."
        },
        explanation: {
          pl: "Kąt ostry ma 35°. 145° to zła skala — pułapka. Suma 180° tylko tłumaczy, skąd wzięła się druga liczba.",
          ua: "Гострий кут має 35°. 145° — неправильна шкала, пастка. Сума 180° лише пояснює, звідки взялося друге число."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "35° to właściwy odczyt dla kąta ostrego, nie pułapka.",
              ua: "35° — правильний відлік для гострого кута, не пастка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Suma 180° jest prawdą o skalach, ale kąt ma tylko jedną miarę.",
              ua: "Сума 180° — правда про шкали, але кут має лише одну міру."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Odczyt",
        ua: "Чи вже вмію? Відлік"
      },
      visual: { kind: "angle", degrees: 90 },
      task: {
        id: "miara-check-right",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Kąt prosty. Ile stopni odczytasz na kątomierzu? Wpisz liczbę."],
          ua: ["Прямий кут. Скільки градусів прочитаєш на транспортирі? Введи число."]
        },
        answer: 90,
        hint: {
          pl: "Róg kartki. Na obu skalach ta kreska bywa podpisana tak samo.",
          ua: "Ріг аркуша. На обох шкалах ця риска інколи підписана однаково."
        },
        explanation: {
          pl: "Kąt prosty ma 90°.",
          ua: "Прямий кут має 90°."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dopełnienie",
        ua: "Чи вже вмію? Доповнення"
      },
      task: {
        id: "miara-check-comp",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Kąt ma ", em("18°"), ". Ile stopni ma kąt dopełniający go do 180°? Wpisz liczbę."],
          ua: ["Кут має ", em("18°"), ". Скільки градусів має кут, що доповнює його до 180°? Введи число."]
        },
        answer: 162,
        hint: {
          pl: "180 − 18.",
          ua: "180 − 18."
        },
        explanation: {
          pl: "180 − 18 = 162.",
          ua: "180 − 18 = 162."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "0 na ramieniu  →  czytaj TĘ samą skalę",
      text: {
        pl: [
          "Środek na wierzchołku. Zero na ramieniu. Druga liczba — z tej samej skali.",
          ["Na kresce zawsze para liczb o sumie ", em("180°"), ". Jedna pasuje, druga to pułapka."],
          "Najpierw: ostry, prosty czy rozwarty? Potem odczyt do 1°."
        ],
        ua: [
          "Центр на вершині. Нуль на стороні. Друге число — з тієї самої шкали.",
          ["На рисці завжди пара чисел із сумою ", em("180°"), ". Одне пасує, друге — пастка."],
          "Спочатку: гострий, прямий чи тупий? Потім відлік до 1°."
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
          "W trójkącie znów zmierzysz kąty — i sprawdzisz, czy suma to 180°.",
          "Kątomierz zostanie w piórniku."
        ],
        ua: [
          "У трикутнику знову виміряєш кути — і перевіриш, чи сума 180°.",
          "Транспортир залишиться в пеналі."
        ]
      }
    }
  ]
};
