function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dlaczego 0,5 m to 50 cm, a nie 5",
        ua: "Чому 0,5 m це 50 cm, а не 5"
      },
      formula: "0,5 m = 50 cm",
      text: {
        pl: [
          "Nie uczysz się tabeli na pamięć jak wierszyka.",
          "Pytanie jest: ile razy mniejsza jednostka mieści się w większej? To ta liczba, przez którą mnożysz."
        ],
        ua: [
          "Ти не вчиш таблицю напам’ять як віршик.",
          "Питання: скільки разів менша одиниця вміщається у більшій? Це те число, на яке множиш."
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
        { pl: "zamieniać mm, cm, dm, m, km", ua: "перетворювати mm, cm, dm, m, km" },
        { pl: "zamieniać g, dag, kg, t", ua: "перетворювати g, dag, kg, t" },
        { pl: "wyjaśnić, czemu 0,5 m = 50 cm (×100)", ua: "пояснити, чому 0,5 m = 50 cm (×100)" },
        { pl: "odrzucić zamianę, która nie ma sensu (metry na gramy)", ua: "відкинути перетворення, яке не має сенсу (метри на грами)" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Jeden metr, sto centymetrów",
        ua: "Один метр, сто сантиметрів"
      },
      visual: { kind: "fraction-bar", total: 10, filled: 5 },
      prompt: {
        pl: [
          ["Pasek to ", em("1 m"), ". Każda działka to ", em("1 dm"), ", czyli ", em("10 cm"), "."],
          ["Zaznaczono połowę metra. Ile to centymetrów, skoro w metrze jest ich sto — nie dziesięć?"]
        ],
        ua: [
          ["Смужка — це ", em("1 m"), ". Кожна поділка — ", em("1 dm"), ", тобто ", em("10 cm"), "."],
          ["Зафарбовано половину метра. Скільки це сантиметрів, якщо в метрі їх сто — не десять?"]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Mnożysz przez to, ile razy się mieści",
        ua: "Множиш на те, скільки разів вміщається"
      },
      formula: "0,5 m = 0,5 · 100 cm = 50 cm",
      text: {
        pl: [
          [em("1 m = 100 cm"), ". Z metrów na centymetry idziesz do mniejszej jednostki — mnożysz."],
          ["Przez ile? Przez ", em("100"), ", bo tyle centymetrów jest w jednym metrze. Nie przez 10."],
          ["Dlatego ", em("0,5"), " · ", em("100"), " = ", em("50"), ". Pół metra to pięćdziesiąt centymetrów."]
        ],
        ua: [
          [em("1 m = 100 cm"), ". З метрів на сантиметри йдеш до меншої одиниці — множиш."],
          ["На скільки? На ", em("100"), ", бо стільки сантиметрів в одному метрі. Не на 10."],
          ["Тому ", em("0,5"), " · ", em("100"), " = ", em("50"), ". Пів метра — п’ятдесят сантиметрів."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Długość: w dół i w górę drabiny",
        ua: "Довжина: вниз і вгору драбиною"
      },
      reveal: true,
      steps: [
        {
          formula: "mm → cm → dm → m → km",
          text: {
            pl: "Każdy sąsiad na tej drabinie różni się 10 razy. Od m do cm przeskakujesz dwa szczeble: 10 · 10 = 100.",
            ua: "Кожен сусід на цій драбині відрізняється в 10 разів. Від m до cm перестрибуєш дві сходинки: 10 · 10 = 100."
          }
        },
        {
          formula: "3 m = 300 cm",
          text: {
            pl: "Do mniejszej jednostki: ×100.",
            ua: "До меншої одиниці: ×100."
          }
        },
        {
          formula: "400 cm = 4 m",
          text: {
            pl: "Do większej jednostki: dzielisz przez 100. Przecinek skacze o dwa miejsca w lewo.",
            ua: "До більшої одиниці: ділиш на 100. Кома скаче на два місця ліворуч."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Masa: gramy i kilogramy",
        ua: "Маса: грами і кілограми"
      },
      reveal: true,
      steps: [
        {
          formula: "g → dag → kg → t",
          text: {
            pl: ["1 dag = 10 g. 1 kg = 100 dag = 1000 g. 1 t = 1000 kg."],
            ua: ["1 dag = 10 g. 1 kg = 100 dag = 1000 g. 1 t = 1000 kg."]
          }
        },
        {
          formula: "2,5 kg = 2,5 · 1000 g = 2500 g",
          text: {
            pl: "Do gramów — mniejsza jednostka — mnożysz przez 1000.",
            ua: "До грамів — менша одиниця — множиш на 1000."
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
        { pl: "jednostka długości", ua: "одиниця довжини" },
        { pl: "jednostka masy", ua: "одиниця маси" },
        { pl: "zamiana jednostek", ua: "перетворення одиниць" },
        { pl: "milimetr, centymetr, decymetr, metr, kilometr", ua: "міліметр, сантиметр, дециметр, метр, кілометр" },
        { pl: "gram, dekagram, kilogram, tona", ua: "грам, декаграм, кілограм, тонна" }
      ],
      phrases: [
        { pl: "Zamień na centymetry.", ua: "Перетвори на сантиметри." },
        { pl: "Wyraź w kilogramach.", ua: "Вирази в кілограмах." },
        { pl: "Przez ile mnożysz? Dlaczego?", ua: "На скільки множиш? Чому?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Metry na centymetry",
        ua: "Метри на сантиметри"
      },
      task: {
        id: "zamiana-guided-3m",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("3 m"), " to ile ", em("cm"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("3 m"), " — скільки ", em("cm"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 300,
        hint: {
          pl: "1 m = 100 cm. Do mniejszej jednostki mnożysz przez 100.",
          ua: "1 m = 100 cm. До меншої одиниці множиш на 100."
        },
        explanation: {
          pl: "3 · 100 = 300 cm.",
          ua: "3 · 100 = 300 cm."
        },
        mistakes: [
          {
            answer: 30,
            feedback: {
              pl: "30 cm byłoby 3 · 10, jak z dm. Z metrów na cm jest ×100.",
              ua: "30 cm було б 3 · 10, як з dm. З метрів на cm є ×100."
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
        pl: "0,5 m = 5 cm",
        ua: "0,5 m = 5 cm"
      },
      text: {
        pl: [
          "Ktoś pomnożył przez 10, jakby szedł o jeden szczebel.",
          ["Z ", em("m"), " na ", em("cm"), " są dwa szczeble: dm i cm. 10 · 10 = 100."],
          "0,5 · 100 = 50 cm. Pięć centymetrów to tylko 0,05 m."
        ],
        ua: [
          "Хтось помножив на 10, ніби йшов на одну сходинку.",
          ["З ", em("m"), " на ", em("cm"), " дві сходинки: dm і cm. 10 · 10 = 100."],
          "0,5 · 100 = 50 cm. П’ять сантиметрів — це лише 0,05 m."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "W górę drabiny",
        ua: "Вгору драбиною"
      },
      task: {
        id: "zamiana-400cm",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("400 cm"), " to ile ", em("m"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("400 cm"), " — скільки ", em("m"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 4,
        hint: {
          pl: "Do większej jednostki dzielisz. 400 : 100.",
          ua: "До більшої одиниці ділиш. 400 : 100."
        },
        explanation: {
          pl: "400 : 100 = 4 m.",
          ua: "400 : 100 = 4 m."
        },
        mistakes: [
          {
            answer: 40,
            feedback: {
              pl: "Podzieliłeś przez 10. Z cm na m dzielisz przez 100.",
              ua: "Поділив на 10. З cm на m ділиш на 100."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dekagramy",
        ua: "Декаграми"
      },
      task: {
        id: "zamiana-3dag",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("3 dag"), " to ile ", em("g"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("3 dag"), " — скільки ", em("g"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 30,
        hint: {
          pl: "1 dag = 10 g. Do mniejszej jednostki mnożysz.",
          ua: "1 dag = 10 g. До меншої одиниці множиш."
        },
        explanation: {
          pl: "3 · 10 = 30 g.",
          ua: "3 · 10 = 30 g."
        },
        mistakes: [
          {
            answer: 300,
            feedback: {
              pl: "Pomyliłeś dag z kg albo z 100. Dekagram to 10 gramów.",
              ua: "Переплутав dag з kg або зі 100. Декаграм — 10 грамів."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dystans na mapie",
        ua: "Відстань на мапі"
      },
      text: {
        pl: [
          ["Szlak ma ", em("2,5 km"), ". W opisie zawodów trzeba podać metry."]
        ],
        ua: [
          ["Маршрут має ", em("2,5 km"), ". В описі змагань треба подати метри."]
        ]
      },
      task: {
        id: "zamiana-25km",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("2,5 km"), " to ile ", em("m"), "? Wpisz liczbę bez spacji, przecinek lub kropka. Bez jednostki."],
          ua: [em("2,5 km"), " — скільки ", em("m"), "? Введи число без пробілу, кому або крапку. Без одиниці."]
        },
        answer: 2500,
        hint: {
          pl: "1 km = 1000 m. Mnożysz 2,5 przez 1000 — przecinek o trzy miejsca w prawo.",
          ua: "1 km = 1000 m. Множиш 2,5 на 1000 — кома на три місця праворуч."
        },
        explanation: {
          pl: "2,5 · 1000 = 2500 m.",
          ua: "2,5 · 1000 = 2500 m."
        },
        mistakes: [
          {
            answer: 250,
            feedback: {
              pl: "To ×100, jak z m na cm. Kilometr to 1000 metrów.",
              ua: "Це ×100, як з m на cm. Кілометр — 1000 метрів."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Mąka do przepisu",
        ua: "Борошно до рецепту"
      },
      text: {
        pl: [
          ["Na opakowaniu jest ", em("1,5 kg"), ". Waga kuchenna pokazuje gramy."]
        ],
        ua: [
          ["На упаковці ", em("1,5 kg"), ". Кухонні ваги показують грами."]
        ]
      },
      task: {
        id: "zamiana-15kg",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("1,5 kg"), " to ile ", em("g"), "? Wpisz liczbę bez spacji, przecinek lub kropka. Bez jednostki."],
          ua: [em("1,5 kg"), " — скільки ", em("g"), "? Введи число без пробілу, кому або крапку. Без одиниці."]
        },
        answer: 1500,
        hint: {
          pl: "1 kg = 1000 g. 1,5 · 1000.",
          ua: "1 kg = 1000 g. 1,5 · 1000."
        },
        explanation: {
          pl: "1,5 · 1000 = 1500 g.",
          ua: "1,5 · 1000 = 1500 g."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która zamiana jest niemożliwa?",
        ua: "Яке перетворення неможливе?"
      },
      text: {
        pl: [
          "Zamiana ma sens, gdy obie jednostki mierzą to samo: długość albo masę.",
          "Nie licz. Najpierw zapytaj: czy to w ogóle ta sama wielkość?"
        ],
        ua: [
          "Перетворення має сенс, коли обидві одиниці вимірюють те саме: довжину або масу.",
          "Не рахуй. Спочатку запитай: чи це взагалі та сама величина?"
        ]
      },
      task: {
        id: "zamiana-niemozliwa",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Której zamiany nie da się wykonać?",
          ua: "Яке перетворення неможливо виконати?"
        },
        options: [
          { id: "a", label: { pl: "3 m na cm", ua: "3 m на cm" } },
          { id: "b", label: { pl: "3 m na g", ua: "3 m на g" } },
          { id: "c", label: { pl: "3 kg na g", ua: "3 kg на g" } }
        ],
        answer: "b",
        hint: {
          pl: "Metr mierzy długość. Gram mierzy masę.",
          ua: "Метр вимірює довжину. Грам вимірює масу."
        },
        explanation: {
          pl: "Metry i gramy to różne wielkości. 3 m = 300 cm — to długość. 3 kg = 3000 g — to masa. m → g nie ma sensu.",
          ua: "Метри і грами — різні величини. 3 m = 300 cm — це довжина. 3 kg = 3000 g — це маса. m → g не має сенсу."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "m i cm to długość. 3 m = 300 cm — jak najbardziej.",
              ua: "m і cm — довжина. 3 m = 300 cm — цілком можна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "kg i g to masa. 3 kg = 3000 g.",
              ua: "kg і g — маса. 3 kg = 3000 g."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Pół metra",
        ua: "Чи вже вмію? Пів метра"
      },
      task: {
        id: "zamiana-check-05m",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("0,5 m"), " to ile ", em("cm"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("0,5 m"), " — скільки ", em("cm"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 50,
        hint: {
          pl: "×100, bo 1 m = 100 cm. Nie ×10.",
          ua: "×100, бо 1 m = 100 cm. Не ×10."
        },
        explanation: {
          pl: "0,5 · 100 = 50 cm.",
          ua: "0,5 · 100 = 50 cm."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "To ×10. Z metrów na centymetry mnożysz przez 100.",
              ua: "Це ×10. З метрів на сантиметри множиш на 100."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Kilogramy na dekagramy",
        ua: "Чи вже вмію? Кілограми на декаграми"
      },
      task: {
        id: "zamiana-check-2kg-dag",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("2 kg"), " to ile ", em("dag"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("2 kg"), " — скільки ", em("dag"), "? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 200,
        hint: {
          pl: "1 kg = 100 dag. Mnożysz przez 100.",
          ua: "1 kg = 100 dag. Множиш на 100."
        },
        explanation: {
          pl: "2 · 100 = 200 dag.",
          ua: "2 · 100 = 200 dag."
        },
        mistakes: [
          {
            answer: 2000,
            feedback: {
              pl: "2000 to gramy (×1000). Pytanie jest o dekagramy: ×100.",
              ua: "2000 — це грами (×1000). Питання про декаграми: ×100."
            }
          }
        ]
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "0,5 m = 0,5 · 100 cm = 50 cm",
      text: {
        pl: [
          "Do mniejszej jednostki mnożysz. Do większej — dzielisz.",
          "Przez ile? Tyle, ile razy mniejsza mieści się w większej.",
          "Długość nie zamienia się na masę."
        ],
        ua: [
          "До меншої одиниці множиш. До більшої — ділиш.",
          "На скільки? Стільки, скільки разів менша вміщається у більшій.",
          "Довжина не перетворюється на масу."
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
          "Przy polu figur jednostki będą kwadratowe: cm², m². Tam mnożysz już dwa wymiary — nie jeden."
        ],
        ua: [
          "При площі фігур одиниці будуть квадратні: cm², m². Там множиш уже два виміри — не один."
        ]
      }
    }
  ]
};
