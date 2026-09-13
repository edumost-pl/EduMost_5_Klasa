function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Na lewo od zera",
        ua: "Ліворуч від нуля"
      },
      formula: "−8  <  −3  <  0  <  5",
      text: {
        pl: [
          "Mróz, dług, piętro poniżej parteru.",
          "Dziś liczby ujemne na osi — która jest mniejsza i która dalej od zera."
        ],
        ua: [
          "Мороз, борг, поверх нижче партеру.",
          "Сьогодні від’ємні числа на осі — яке менше і яке далі від нуля."
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
        { pl: "rozpoznać liczbę dodatnią, ujemną i zero", ua: "розпізнати додатне, від’ємне число і нуль" },
        { pl: "zaznaczyć liczby na osi liczbowej", ua: "позначити числа на числовій осі" },
        { pl: "porównać liczby ujemne: −8 < −3", ua: "порівняти від’ємні числа: −8 < −3" },
        { pl: "odczytać wartość bezwzględną |n|", ua: "прочитати модуль |n|" },
        { pl: "wskazać, która liczba jest dalej od zera", ua: "вказати, яке число далі від нуля" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Oś jak termometr",
        ua: "Вісь як термометр"
      },
      visual: { kind: "number-line", min: -5, max: 5, marks: [-4, 0, 3] },
      text: {
        pl: [
          "Zero na środku. W prawo — dodatnie, w lewo — ujemne.",
          "−4°C to zimniej niż 0°C. 3°C to cieplej.",
          "Im dalej w lewo, tym liczba mniejsza."
        ],
        ua: [
          "Нуль посередині. Праворуч — додатні, ліворуч — від’ємні.",
          "−4°C — холодніше, ніж 0°C. 3°C — тепліше.",
          "Що далі ліворуч, то число менше."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Dodatnie, ujemne, zero",
        ua: "Додатні, від’ємні, нуль"
      },
      text: {
        pl: [
          ["Liczby większe od zera są ", em("dodatnie"), ": 1, 2, 15."],
          ["Liczby mniejsze od zera są ", em("ujemne"), ": −1, −8, −20."],
          "Zero nie jest ani dodatnie, ani ujemne.",
          "Dług 8 zł zapisujemy jako −8. Temperatura 8 stopni mrozu to −8°C."
        ],
        ua: [
          ["Числа більші за нуль — ", em("додатні"), ": 1, 2, 15."],
          ["Числа менші за нуль — ", em("від’ємні"), ": −1, −8, −20."],
          "Нуль не є ні додатним, ні від’ємним.",
          "Борг 8 zł записуємо як −8. Температура 8 градусів морозу — це −8°C."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Porównaj −8 i −3",
        ua: "Порівняй −8 і −3"
      },
      visual: { kind: "number-line", min: -10, max: 2, marks: [-8, -3] },
      reveal: true,
      steps: [
        {
          formula: "−8   stoi na lewo od   −3",
          text: {
            pl: "Na osi mniejsza jest ta, która jest bardziej na lewo.",
            ua: "На осі менше те, що лівіше."
          }
        },
        {
          formula: "−8 < −3",
          text: {
            pl: ["−8 to większy mróz niż −3. Dlatego ", em("−8 jest mniejsze"), "."],
            ua: ["−8 — більший мороз, ніж −3. Тому ", em("−8 менше"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Wartość bezwzględna — odległość od zera",
        ua: "Модуль — відстань від нуля"
      },
      formula: "|−7| = 7,    |5| = 5,    |0| = 0",
      visual: { kind: "number-line", min: -7, max: 7, marks: [-7, 5] },
      text: {
        pl: [
          ["|n| to odległość liczby n od zera na osi. Zawsze jest ", em("nieujemna"), "."],
          "−7 i 7 są równie daleko od zera. Obie mają wartość bezwzględną 7.",
          "Nie myl „mniejsza liczba” z „dalej od zera”."
        ],
        ua: [
          ["|n| — це відстань числа n від нуля на осі. Завжди ", em("невід’ємна"), "."],
          "−7 і 7 однаково далеко від нуля. Обидва мають модуль 7.",
          "Не плутай «менше число» з «далі від нуля»."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "liczba dodatnia", ua: "додатне число" },
        { pl: "liczba ujemna", ua: "від’ємне число" },
        { pl: "oś liczbowa", ua: "числова вісь" },
        { pl: "wartość bezwzględna |n|", ua: "модуль (абсолютна величина) |n|" },
        { pl: "zero", ua: "нуль" }
      ],
      phrases: [
        { pl: "Porównaj liczby.", ua: "Порівняй числа." },
        { pl: "Zaznacz na osi liczbowej.", ua: "Познач на числовій осі." },
        { pl: "Która liczba jest dalej od zera?", ua: "Яке число далі від нуля?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Która jest mniejsza?",
        ua: "Яке менше?"
      },
      visual: { kind: "number-line", min: -6, max: 2, marks: [-5, -1] },
      task: {
        id: "ujem-guided-compare",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Która nierówność jest prawdziwa?"],
          ua: ["Яка нерівність правдива?"]
        },
        options: [
          { id: "a", label: { pl: "−5 < −1", ua: "−5 < −1" } },
          { id: "b", label: { pl: "−5 > −1", ua: "−5 > −1" } },
          { id: "c", label: { pl: "−5 = −1", ua: "−5 = −1" } }
        ],
        answer: "a",
        hint: {
          pl: "Która kropka leży bardziej na lewo?",
          ua: "Яка точка лежить лівіше?"
        },
        explanation: {
          pl: "−5 jest na lewo od −1, więc −5 < −1.",
          ua: "−5 лівіше за −1, отже −5 < −1."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cyfra 5 jest większa od 1, ale ze znakiem minus jest odwrotnie: −5 jest zimniejsze, więc mniejsze.",
              ua: "Цифра 5 більша за 1, але зі знаком мінус навпаки: −5 холодніше, отже менше."
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
        pl: "−8 > −3, bo 8 jest większe od 3",
        ua: "−8 > −3, бо 8 більше за 3"
      },
      visual: { kind: "number-line", min: -10, max: 1, marks: [-8, -3] },
      text: {
        pl: [
          "Znak minus zmienia porządek.",
          ["Na osi −8 jest dalej w lewo. Prawda: ", em("−8 < −3"), "."]
        ],
        ua: [
          "Знак мінус змінює порядок.",
          ["На осі −8 далі ліворуч. Правда: ", em("−8 < −3"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Wartość bezwzględna",
        ua: "Модуль"
      },
      task: {
        id: "ujem-abs-7",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile wynosi ", em("|−7|"), "?"],
          ua: ["Чому дорівнює ", em("|−7|"), "?"]
        },
        answer: 7,
        hint: {
          pl: "To odległość od zera, nie sama liczba ze znakiem.",
          ua: "Це відстань від нуля, не саме число зі знаком."
        },
        explanation: {
          pl: "|−7| = 7, bo od −7 do 0 jest 7 jednostek.",
          ua: "|−7| = 7, бо від −7 до 0 є 7 одиниць."
        },
        mistakes: [
          {
            answer: -7,
            feedback: {
              pl: "Wartość bezwzględna nie jest ujemna. Odległość od zera to 7.",
              ua: "Модуль не буває від’ємним. Відстань від нуля — 7."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Porównaj z zerem",
        ua: "Порівняй із нулем"
      },
      task: {
        id: "ujem-vs-zero",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Czy ", em("−4 < 0"), "?"],
          ua: ["Чи ", em("−4 < 0"), "?"]
        },
        answer: true,
        hint: {
          pl: "Ujemne liczby leżą na lewo od zera.",
          ua: "Від’ємні числа лежать ліворуч від нуля."
        },
        explanation: {
          pl: "Każda liczba ujemna jest mniejsza od zera. −4 < 0.",
          ua: "Кожне від’ємне число менше за нуль. −4 < 0."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Termometr za oknem",
        ua: "Термометр за вікном"
      },
      text: {
        pl: [
          ["Rano było ", em("−6°C"), ", w południe ", em("−2°C"), "."],
          "Która temperatura jest niższa?"
        ],
        ua: [
          ["Вранці було ", em("−6°C"), ", опівдні ", em("−2°C"), "."],
          "Яка температура нижча?"
        ]
      },
      task: {
        id: "ujem-thermo",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która temperatura jest niższa?",
          ua: "Яка температура нижча?"
        },
        options: [
          { id: "a", label: { pl: "−6°C", ua: "−6°C" } },
          { id: "b", label: { pl: "−2°C", ua: "−2°C" } },
          { id: "c", label: { pl: "obie takie same", ua: "обидві однакові" } }
        ],
        answer: "a",
        hint: {
          pl: "Niższa to bardziej na lewo na osi.",
          ua: "Нижча — та, що лівіше на осі."
        },
        explanation: {
          pl: "−6 < −2, więc rano było zimniej: −6°C.",
          ua: "−6 < −2, отже вранці було холодніше: −6°C."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dług w zeszycie",
        ua: "Борг у зошиті"
      },
      text: {
        pl: [
          ["Ania jest winna ", em("12 zł"), " — zapisujemy ", em("−12"), "."],
          ["Bartek jest winien ", em("5 zł"), " — zapisujemy ", em("−5"), "."]
        ],
        ua: [
          ["Аня винна ", em("12 zł"), " — записуємо ", em("−12"), "."],
          ["Бартек винен ", em("5 zł"), " — записуємо ", em("−5"), "."]
        ]
      },
      task: {
        id: "ujem-debt",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Czy dług Ani jest „mniejszy” jako liczba, czyli czy ", em("−12 < −5"), "?"],
          ua: ["Чи борг Ані «менший» як число, тобто чи ", em("−12 < −5"), "?"]
        },
        answer: true,
        hint: {
          pl: "Większy dług to liczba bardziej na lewo.",
          ua: "Більший борг — число лівіше."
        },
        explanation: {
          pl: "−12 leży na lewo od −5, więc −12 < −5. Ania ma większy dług, ale mniejszą liczbę.",
          ua: "−12 лівіше за −5, отже −12 < −5. В Ані більший борг, але менше число."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która dalej od zera?",
        ua: "Яке далі від нуля?"
      },
      visual: { kind: "number-line", min: -9, max: 7, marks: [-8, 5] },
      text: {
        pl: [
          "Nie pytamy, która jest mniejsza. Pytamy o odległość od zera."
        ],
        ua: [
          "Не питаємо, яке менше. Питаємо про відстань від нуля."
        ]
      },
      task: {
        id: "ujem-farther",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która liczba jest dalej od zera: −8 czy 5?",
          ua: "Яке число далі від нуля: −8 чи 5?"
        },
        options: [
          { id: "a", label: { pl: "−8, bo |−8| = 8 > 5", ua: "−8, бо |−8| = 8 > 5" } },
          { id: "b", label: { pl: "5, bo dodatnie są „większe”", ua: "5, бо додатні «більші»" } },
          { id: "c", label: { pl: "obie tak samo, bo 8 i 5 różnią się o 3", ua: "обидва однаково, бо 8 і 5 різняться на 3" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz |−8| i |5|.",
          ua: "Полічи |−8| і |5|."
        },
        explanation: {
          pl: "|−8| = 8, |5| = 5. 8 > 5, więc −8 jest dalej od zera.",
          ua: "|−8| = 8, |5| = 5. 8 > 5, отже −8 далі від нуля."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„Większa liczba” to nie to samo co „dalej od zera”. 5 jest większe niż −8, ale bliżej zera.",
              ua: "«Більше число» — це не те саме, що «далі від нуля». 5 більше за −8, але ближче до нуля."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Różnica między 8 i 5 nie czyni odległości równymi. 8 jednostek to więcej niż 5.",
              ua: "Різниця між 8 і 5 не робить відстані рівними. 8 одиниць — більше ніж 5."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Porównanie",
        ua: "Чи вже вмію? Порівняння"
      },
      task: {
        id: "ujem-check-compare",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Czy ", em("−8 < −3"), "?"],
          ua: ["Чи ", em("−8 < −3"), "?"]
        },
        answer: true,
        hint: {
          pl: "Która jest bardziej na lewo?",
          ua: "Яке лівіше?"
        },
        explanation: {
          pl: "−8 leży na lewo od −3, więc −8 < −3.",
          ua: "−8 лівіше за −3, отже −8 < −3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Moduł",
        ua: "Чи вже вмію? Модуль"
      },
      task: {
        id: "ujem-check-abs",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile wynosi ", em("|−9|"), "?"],
          ua: ["Чому дорівнює ", em("|−9|"), "?"]
        },
        answer: 9,
        hint: {
          pl: "Odległość od zera.",
          ua: "Відстань від нуля."
        },
        explanation: {
          pl: "|−9| = 9.",
          ua: "|−9| = 9."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "−8 < −3 < 0 < 5",
      visual: { kind: "number-line", min: -8, max: 5, marks: [-8, -3, 5] },
      text: {
        pl: [
          "Na osi: w lewo maleje, w prawo rośnie.",
          ["|n| to odległość od zera. ", em("−8 < −3"), ", ale −8 jest dalej od zera niż −3."]
        ],
        ua: [
          "На осі: ліворуч маліє, праворуч росте.",
          ["|n| — відстань від нуля. ", em("−8 < −3"), ", але −8 далі від нуля, ніж −3."]
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
          "Później dodamy liczby całkowite skokami po osi.",
          "Najpierw musisz wiedzieć, która jest na lewo i jak daleko od zera."
        ],
        ua: [
          "Пізніше додамо цілі числа стрибками по осі.",
          "Спочатку треба знати, яке лівіше і як далеко від нуля."
        ]
      }
    }
  ]
};
