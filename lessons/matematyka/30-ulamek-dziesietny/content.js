function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Przecinek, który rozdziela metry i centymetry",
        ua: "Кома, яка розділяє метри і сантиметри"
      },
      formula: "3 m 5 cm = 3,05 m",
      text: {
        pl: [
          "Na metce, na linijce i na paragonie liczby nie zawsze są „całe”.",
          "Dziś zobaczymy, co stoi zaraz za przecinkiem — i czemu 3 m 5 cm to nie 3,5 m."
        ],
        ua: [
          "На ціннику, на лінійці і на чеку числа не завжди «цілі».",
          "Сьогодні побачимо, що стоїть одразу за комою — і чому 3 m 5 cm це не 3,5 m."
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
        { pl: "odczytać dziesiąte i setne", ua: "прочитати десяті і соті" },
        { pl: "zamienić ułamek zwykły na dziesiętny: 3/10 = 0,3", ua: "замінити звичайний дріб на десятковий: 3/10 = 0,3" },
        { pl: "zauważyć, że 0,5 = 1/2", ua: "помітити, що 0,5 = 1/2" },
        { pl: "uznać, że 0,40 i 0,4 to ta sama liczba", ua: "визнати, що 0,40 і 0,4 — те саме число" },
        { pl: "zapis z dwóch jednostek zamienić na jeden: 3 m 5 cm = 3,05 m", ua: "запис із двох одиниць замінити на один: 3 m 5 cm = 3,05 m" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Trzy kawałki z dziesięciu",
        ua: "Три шматки з десяти"
      },
      visual: { kind: "fraction-bar", total: 10, filled: 3 },
      prompt: {
        pl: [
          "Pasek podzielono na 10 równych części. Zaznaczono 3.",
          "Jak krótko zapisać tę część, jeśli nie chcesz kreślić kreski ułamka?"
        ],
        ua: [
          "Смужку поділено на 10 рівних частин. Зафарбовано 3.",
          "Як коротко записати цю частину, якщо не хочеш креслити риску дробу?"
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Przecinek otwiera dziesiąte",
        ua: "Кома відкриває десяті"
      },
      formula: "3/10 = 0,3",
      text: {
        pl: [
          ["Pierwsze miejsce po przecinku to ", em("dziesiąte"), "."],
          ["Dlatego ", em("3/10"), " zapisujemy ", em("0,3"), " — zero całości i trzy dziesiąte."],
          "Czytamy: zero przecinek trzy."
        ],
        ua: [
          ["Перше місце після коми — це ", em("десяті"), "."],
          ["Тому ", em("3/10"), " записуємо ", em("0,3"), " — нуль цілих і три десяті."],
          "Читаємо: нуль кома три."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Połowa i pięć dziesiątych",
        ua: "Половина і п’ять десятих"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "fraction-bar", total: 2, filled: 1 },
          text: {
            pl: ["Połowa paska to ", em("1/2"), "."],
            ua: ["Половина смужки — це ", em("1/2"), "."]
          }
        },
        {
          visual: { kind: "fraction-bar", total: 10, filled: 5 },
          text: {
            pl: ["Ten sam kawałek to też ", em("5/10"), "."],
            ua: ["Той самий шматок — це також ", em("5/10"), "."]
          }
        },
        {
          formula: "1/2 = 5/10 = 0,5",
          text: {
            pl: ["Pięć dziesiątych to ", em("0,5"), ". To ta sama liczba co połowa."],
            ua: ["П’ять десятих — це ", em("0,5"), ". Це те саме число, що половина."]
          }
        }
      ]
    },
    {
      type: "visual",
      heading: {
        pl: "Gdzie stoi 0,3?",
        ua: "Де стоїть 0,3?"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.3] },
      text: {
        pl: [
          ["Oś od ", em("0"), " do ", em("1"), ". Kropka jest bliżej zera niż jedynki."],
          ["To ", em("0,3"), " — trzy dziesiąte drogi od 0 do 1."]
        ],
        ua: [
          ["Вісь від ", em("0"), " до ", em("1"), ". Крапка ближче до нуля, ніж до одиниці."],
          ["Це ", em("0,3"), " — три десяті шляху від 0 до 1."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Zero na końcu nic nie dodaje",
        ua: "Нуль на кінці нічого не додає"
      },
      formula: "0,40 = 0,4",
      text: {
        pl: [
          ["Drugie miejsce po przecinku to ", em("setne"), "."],
          [em("0,40"), " to czterdzieści setnych. ", em("0,4"), " to cztery dziesiąte."],
          ["Czterdzieści setnych to to samo co cztery dziesiąte. Zero na końcu można opuścić."]
        ],
        ua: [
          ["Друге місце після коми — це ", em("соті"), "."],
          [em("0,40"), " — сорок сотих. ", em("0,4"), " — чотири десяті."],
          ["Сорок сотих — це те саме, що чотири десяті. Нуль на кінці можна опустити."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Dwie jednostki, jeden przecinek",
        ua: "Дві одиниці, одна кома"
      },
      reveal: true,
      steps: [
        {
          formula: "3 m 5 cm",
          text: {
            pl: ["W ", em("1 m"), " mieści się ", em("100 cm"), ". Pięć centymetrów to nie pięć dziesiątych metra."],
            ua: ["У ", em("1 m"), " вміщається ", em("100 cm"), ". П’ять сантиметрів — це не п’ять десятих метра."]
          }
        },
        {
          formula: "5 cm = 5/100 m = 0,05 m",
          text: {
            pl: ["Centymetry w metrach to setne. Jedna cyfra po przecinku nie wystarczy."],
            ua: ["Сантиметри в метрах — це соті. Однієї цифри після коми замало."]
          }
        },
        {
          formula: "3 m 5 cm = 3,05 m",
          text: {
            pl: [em("3"), " całe metry i ", em("5"), " setnych. Nie 3,5 i nie 3,005."],
            ua: [em("3"), " цілі метри і ", em("5"), " сотих. Не 3,5 і не 3,005."]
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
        { pl: "ułamek dziesiętny", ua: "десятковий дріб" },
        { pl: "przecinek", ua: "кома" },
        { pl: "część całkowita", ua: "ціла частина" },
        { pl: "dziesiąte", ua: "десяті" },
        { pl: "setne", ua: "соті" }
      ],
      phrases: [
        { pl: "Zapisz ułamek dziesiętny.", ua: "Запиши десятковий дріб." },
        { pl: "Odczytaj liczbę.", ua: "Прочитай число." },
        { pl: "Które zapisy oznaczają tę samą liczbę?", ua: "Які записи означають те саме число?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Z paska na przecinek",
        ua: "Зі смужки на кому"
      },
      visual: { kind: "fraction-bar", total: 10, filled: 7 },
      task: {
        id: "dzies-guided-7-10",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zaznaczono ", em("7/10"), ". Zapisz ułamek dziesiętny. Wpisz liczbę, przecinek lub kropka."],
          ua: ["Зафарбовано ", em("7/10"), ". Запиши десятковий дріб. Введи число, кому або крапку."]
        },
        answer: 0.7,
        hint: {
          pl: "Pierwsze miejsce po przecinku to dziesiąte. Siedem dziesiątych.",
          ua: "Перше місце після коми — десяті. Сім десятих."
        },
        explanation: {
          pl: "7/10 = 0,7.",
          ua: "7/10 = 0,7."
        },
        mistakes: [
          {
            answer: 7,
            feedback: {
              pl: "To siedem całości. Tu jest siedem dziesiątych: 0,7.",
              ua: "Це сім цілих. Тут сім десятих: 0,7."
            }
          },
          {
            answer: 0.07,
            feedback: {
              pl: "0,07 to siedem setnych. Dziesiąte stoją zaraz za przecinkiem.",
              ua: "0,07 — це сім сотих. Десяті стоять одразу за комою."
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
        pl: "0,40 jest większe od 0,4, bo ma więcej cyfr",
        ua: "0,40 більше за 0,4, бо має більше цифр"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.4] },
      text: {
        pl: [
          "Na osi jest jedno miejsce: cztery dziesiąte.",
          [em("0,40"), " to czterdzieści setnych — ten sam punkt co ", em("0,4"), "."],
          "Zero na końcu nie przesuwa kropki."
        ],
        ua: [
          "На осі одне місце: чотири десяті.",
          [em("0,40"), " — сорок сотих, та сама точка, що ", em("0,4"), "."],
          "Нуль на кінці не зсуває крапку."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Połowa",
        ua: "Половина"
      },
      task: {
        id: "dzies-half",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Czy ", em("0,5"), " to to samo co ", em("1/2"), "?"],
          ua: ["Чи ", em("0,5"), " — це те саме, що ", em("1/2"), "?"]
        },
        answer: true,
        hint: {
          pl: "Pięć dziesiątych paska to połowa.",
          ua: "П’ять десятих смужки — це половина."
        },
        explanation: {
          pl: "0,5 = 5/10 = 1/2.",
          ua: "0,5 = 5/10 = 1/2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Która cyfra to setne?",
        ua: "Яка цифра — соті?"
      },
      task: {
        id: "dzies-hundredths-digit",
        type: "input-number",
        level: "B",
        question: {
          pl: ["W liczbie ", em("2,47"), " która cyfra stoi na miejscu setnych? Wpisz liczbę, przecinek lub kropka."],
          ua: ["У числі ", em("2,47"), " яка цифра стоїть на місці сотих? Введи число, кому або крапку."]
        },
        answer: 7,
        hint: {
          pl: "Za przecinkiem: najpierw dziesiąte, potem setne.",
          ua: "Після коми: спочатку десяті, потім соті."
        },
        explanation: {
          pl: "2 — całości, 4 — dziesiąte, 7 — setne.",
          ua: "2 — цілі, 4 — десяті, 7 — соті."
        },
        mistakes: [
          {
            answer: 4,
            feedback: {
              pl: "4 to dziesiąte — pierwsze miejsce po przecinku. Setne są drugie.",
              ua: "4 — це десяті, перше місце після коми. Соті — другі."
            }
          },
          {
            answer: 2,
            feedback: {
              pl: "2 to część całkowita, przed przecinkiem.",
              ua: "2 — це ціла частина, перед комою."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Deska w dwóch jednostkach",
        ua: "Дошка у двох одиницях"
      },
      text: {
        pl: [
          ["Stolarz zmierzył deskę: ", em("3 m"), " i ", em("5 cm"), "."],
          "Chce zapisać długość tylko w metrach, z przecinkiem."
        ],
        ua: [
          ["Столяр виміряв дошку: ", em("3 m"), " і ", em("5 cm"), "."],
          "Хоче записати довжину лише в метрах, з комою."
        ]
      },
      task: {
        id: "dzies-3m5cm",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("3 m 5 cm"), " to ile metrów? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("3 m 5 cm"), " — скільки метрів? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 3.05,
        hint: {
          pl: "1 m = 100 cm, więc centymetry to setne metra. Nie dziesiąte.",
          ua: "1 m = 100 cm, отже сантиметри — соті метра. Не десяті."
        },
        explanation: {
          pl: "5 cm = 0,05 m, razem 3,05 m.",
          ua: "5 cm = 0,05 m, разом 3,05 m."
        },
        mistakes: [
          {
            answer: 3.5,
            feedback: {
              pl: "3,5 m to 3 m i 50 cm. Tu jest tylko 5 cm — setne, nie dziesiąte.",
              ua: "3,5 m — це 3 m і 50 cm. Тут лише 5 cm — соті, не десяті."
            }
          },
          {
            answer: 3.005,
            feedback: {
              pl: "Za przecinkiem dwa miejsca wystarczą: setne. 3,05.",
              ua: "Після коми двох місць досить: соті. 3,05."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Kropka na osi",
        ua: "Крапка на осі"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.4] },
      text: {
        pl: [
          "Kropka stoi między 0 a 1, bliżej środka niż zera, ale nie na połowie."
        ],
        ua: [
          "Крапка стоїть між 0 і 1, ближче до середини, ніж до нуля, але не на половині."
        ]
      },
      task: {
        id: "dzies-line-04",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która liczba jest zaznaczona?",
          ua: "Яке число позначено?"
        },
        options: [
          { id: "a", label: { pl: "0,04", ua: "0,04" } },
          { id: "b", label: { pl: "0,4", ua: "0,4" } },
          { id: "c", label: { pl: "0,5", ua: "0,5" } }
        ],
        answer: "b",
        hint: {
          pl: "Połowa odcinka 0–1 to 0,5. Kropka jest trochę na lewo od połowy.",
          ua: "Половина відрізка 0–1 — це 0,5. Крапка трохи лівіше від половини."
        },
        explanation: {
          pl: "0,4 to cztery dziesiąte. 0,04 byłoby bardzo blisko zera. 0,5 to środek.",
          ua: "0,4 — чотири десяті. 0,04 було б дуже близько до нуля. 0,5 — середина."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "0,04 to cztery setne — tuż przy zerze. Tu widać cztery dziesiąte.",
              ua: "0,04 — чотири соті, майже біля нуля. Тут видно чотири десяті."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "0,5 jest dokładnie w połowie. Kropka jest na lewo od środka.",
              ua: "0,5 точно посередині. Крапка лівіше від середини."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Które zapisy to ta sama liczba?",
        ua: "Які записи — те саме число?"
      },
      text: {
        pl: [
          "Nie licz wartości na kalkulatorze. Porównaj miejsca: dziesiąte i setne, zero na końcu, dwie jednostki."
        ],
        ua: [
          "Не рахуй на калькуляторі. Порівняй місця: десяті і соті, нуль на кінці, дві одиниці."
        ]
      },
      task: {
        id: "dzies-same-writings",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która para oznacza tę samą liczbę?",
          ua: "Яка пара означає те саме число?"
        },
        options: [
          { id: "a", label: { pl: "0,40 i 0,4", ua: "0,40 і 0,4" } },
          { id: "b", label: { pl: "0,40 i 0,04", ua: "0,40 і 0,04" } },
          { id: "c", label: { pl: "3,05 m i 3,5 m", ua: "3,05 m і 3,5 m" } }
        ],
        answer: "a",
        hint: {
          pl: "Zero na końcu po przecinku nie zmienia wartości. Setne to nie dziesiąte.",
          ua: "Нуль на кінці після коми не змінює значення. Соті — це не десяті."
        },
        explanation: {
          pl: "0,40 = 0,4. Natomiast 0,04 to cztery setne, a 3,5 m to 3 m 50 cm, nie 3 m 5 cm.",
          ua: "0,40 = 0,4. Натомість 0,04 — чотири соті, а 3,5 m — це 3 m 50 cm, не 3 m 5 cm."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "0,40 to czterdzieści setnych. 0,04 to cztery setne. Przecinek „przeskoczył” cyfrę.",
              ua: "0,40 — сорок сотих. 0,04 — чотири соті. Кома «перестрибнула» цифру."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "3,05 m = 3 m 5 cm. 3,5 m = 3 m 50 cm. To różne deski.",
              ua: "3,05 m = 3 m 5 cm. 3,5 m = 3 m 50 cm. Це різні дошки."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dziesiąte",
        ua: "Чи вже вмію? Десяті"
      },
      task: {
        id: "dzies-check-9-10",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zapisz ", em("9/10"), " ułamkiem dziesiętnym. Wpisz liczbę, przecinek lub kropka."],
          ua: ["Запиши ", em("9/10"), " десятковим дробом. Введи число, кому або крапку."]
        },
        answer: 0.9,
        hint: {
          pl: "Dziewięć dziesiątych — cyfra 9 zaraz za przecinkiem.",
          ua: "Дев’ять десятих — цифра 9 одразу за комою."
        },
        explanation: {
          pl: "9/10 = 0,9.",
          ua: "9/10 = 0,9."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dwie jednostki",
        ua: "Чи вже вмію? Дві одиниці"
      },
      task: {
        id: "dzies-check-4m8cm",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("4 m 8 cm"), " to ile metrów? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("4 m 8 cm"), " — скільки метрів? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 4.08,
        hint: {
          pl: "Centymetry to setne metra. Potrzebujesz dwóch miejsc po przecinku.",
          ua: "Сантиметри — соті метра. Потрібні два місця після коми."
        },
        explanation: {
          pl: "8 cm = 0,08 m, razem 4,08 m.",
          ua: "8 cm = 0,08 m, разом 4,08 m."
        },
        mistakes: [
          {
            answer: 4.8,
            feedback: {
              pl: "4,8 m to 4 m i 80 cm. Tu jest 8 cm → 4,08 m.",
              ua: "4,8 m — це 4 m і 80 cm. Тут 8 cm → 4,08 m."
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
      formula: "3/10 = 0,3    0,5 = 1/2    0,40 = 0,4",
      text: {
        pl: [
          "Za przecinkiem: najpierw dziesiąte, potem setne.",
          "Zero na końcu po przecinku można opuścić.",
          ["Przy dwóch jednostkach pamiętaj o skali: ", em("1 m = 100 cm"), ", więc 5 cm to 0,05 m."]
        ],
        ua: [
          "Після коми: спочатку десяті, потім соті.",
          "Нуль на кінці після коми можна опустити.",
          ["При двох одиницях пам’ятай про шкалу: ", em("1 m = 100 cm"), ", отже 5 cm це 0,05 m."]
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
          "Zaraz będziemy dodawać i odejmować takie liczby — przecinek pod przecinkiem.",
          "Najpierw musisz wiedzieć, co która cyfra znaczy."
        ],
        ua: [
          "Зараз будемо додавати і віднімати такі числа — кома під комою.",
          "Спочатку треба знати, що означає кожна цифра."
        ]
      }
    }
  ]
};
