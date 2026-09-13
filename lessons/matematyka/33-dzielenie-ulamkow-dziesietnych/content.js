function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dlaczego 1,2 : 0,3 to cztery, nie zero przecinek coś",
        ua: "Чому 1,2 : 0,3 це чотири, не нуль кома щось"
      },
      formula: "1,2 : 0,3 = 4",
      text: {
        pl: [
          "W 1,2 mieści się kilka razy 0,3 — więcej niż raz.",
          "Dziś nauczymy się przesuwać przecinek w obu liczbach, żeby dzielić wygodniej. Tylko skończone ułamki dziesiętne."
        ],
        ua: [
          "У 1,2 вміщається кілька разів 0,3 — більше ніж раз.",
          "Сьогодні навчимося зсувати кому в обох числах, щоб ділити зручніше. Лише скінченні десяткові дроби."
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
        { pl: "dzielić przez 10 i 100 — przecinek w lewo", ua: "ділити на 10 і 100 — кома ліворуч" },
        { pl: "przesunąć przecinek w dzielnej i dzielniku o tyle samo", ua: "зсунути кому в діленому і дільнику на стільки само" },
        { pl: "obliczyć 1,2 : 0,3 = 4", ua: "обчислити 1,2 : 0,3 = 4" },
        { pl: "wyjaśnić, czemu po przesunięciu wynik się nie zmienia", ua: "пояснити, чому після зсуву результат не змінюється" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Przecinek skacze w lewo",
        ua: "Кома скаче ліворуч"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "4,8 : 10", result: "0,48", caption: "jeden skok w lewo" },
        right: { expr: "4,8 : 100", result: "0,048", caption: "dwa skoki w lewo" }
      },
      prompt: {
        pl: [
          "Dzielenie przez 10 — przecinek o jedno miejsce w lewo.",
          "Przez 100 — o dwa. Czasem z przodu pojawia się zero."
        ],
        ua: [
          "Ділення на 10 — кома на одне місце ліворуч.",
          "На 100 — на два. Інколи спереду з’являється нуль."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Przez 10 i przez 100",
        ua: "На 10 і на 100"
      },
      formula: "36 : 100 = 0,36",
      text: {
        pl: [
          "Mnożenie przez 10 przesuwało przecinek w prawo. Dzielenie — w lewo.",
          ["Jeśli brakuje miejsca, dopisujesz ", em("0"), " z lewej: 4,8 : 100 = 0,048."]
        ],
        ua: [
          "Множення на 10 зсувало кому праворуч. Ділення — ліворуч.",
          ["Якщо бракує місця, дописуєш ", em("0"), " зліва: 4,8 : 100 = 0,048."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "4,8 podzielone przez 10 i 100",
        ua: "4,8 поділене на 10 і 100"
      },
      reveal: true,
      steps: [
        {
          formula: "4,8 : 10 = 0,48",
          text: {
            pl: "Jedno miejsce w lewo.",
            ua: "Одне місце ліворуч."
          }
        },
        {
          formula: "4,8 : 100 = 0,048",
          text: {
            pl: "Dwa miejsca. Między przecinkiem a 4 musiało stanąć zero.",
            ua: "Два місця. Між комою і 4 мав стати нуль."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Przesuń oba przecinki tak samo",
        ua: "Зсунь обидві коми однаково"
      },
      formula: "1,2 : 0,3 = 12 : 3 = 4",
      text: {
        pl: [
          "Dzielnik z przecinkiem jest niewygodny. Mnożysz dzielną i dzielnik przez 10 (albo 100) — tyle, żeby dzielnik stał się liczbą naturalną.",
          "Iloraz się nie zmienia, bo obie liczby rosną tyle samo razy.",
          ["Tu: ×10 i ×10. ", em("12 : 3 = 4"), "."]
        ],
        ua: [
          "Дільник з комою незручний. Множиш ділене і дільник на 10 (або 100) — стільки, щоб дільник став натуральним числом.",
          "Частка не змінюється, бо обидва числа ростуть однаково.",
          ["Тут: ×10 і ×10. ", em("12 : 3 = 4"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 1,2 : 0,3",
        ua: "Крок за кроком: 1,2 : 0,3"
      },
      reveal: true,
      steps: [
        {
          formula: "1,2 : 0,3",
          text: {
            pl: "W 0,3 przecinek o jedno miejsce. W 1,2 też o jedno.",
            ua: "У 0,3 кома на одне місце. У 1,2 теж на одне."
          }
        },
        { formula: "12 : 3" },
        {
          formula: "4",
          text: {
            pl: ["Sprawdzenie: ", em("0,3 · 4 = 1,2"), ". Zgadza się."],
            ua: ["Перевірка: ", em("0,3 · 4 = 1,2"), ". Збігається."]
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
        { pl: "dzielna", ua: "ділене" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "iloraz", ua: "частка" },
        { pl: "przesunąć przecinek", ua: "зсунути кому" }
      ],
      phrases: [
        { pl: "Podziel.", ua: "Поділи." },
        { pl: "Przesuń przecinek w obu liczbach.", ua: "Зсунь кому в обох числах." },
        { pl: "Sprawdź mnożeniem.", ua: "Перевір множенням." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Skok w lewo",
        ua: "Стрибок ліворуч"
      },
      task: {
        id: "dziel-dzies-guided-36-100",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("36 : 100"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("36 : 100"), ". Введи число, кому або крапку."]
        },
        answer: 0.36,
        hint: {
          pl: "Dwa miejsca w lewo. 36 → 0,36.",
          ua: "Два місця ліворуч. 36 → 0,36."
        },
        explanation: {
          pl: "36 : 100 = 0,36.",
          ua: "36 : 100 = 0,36."
        },
        mistakes: [
          {
            answer: 3.6,
            feedback: {
              pl: "To jeden skok (dzielenie przez 10). Przez 100 — dwa skoki: 0,36.",
              ua: "Це один стрибок (ділення на 10). На 100 — два стрибки: 0,36."
            }
          },
          {
            answer: 3600,
            feedback: {
              pl: "To mnożenie przez 100. Dzielenie przesuwa w lewo.",
              ua: "Це множення на 100. Ділення зсуває ліворуч."
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
        pl: "1,2 : 0,3 = 0,4",
        ua: "1,2 : 0,3 = 0,4"
      },
      text: {
        pl: [
          "Ktoś podzielił 12 : 3 = 4, a potem „dla bezpieczeństwa” wstawił przecinek: 0,4.",
          "Przecinek już wykorzystałeś, przesuwając obie liczby. Wynik to 4, nie 0,4.",
          "Sprawdzenie: 0,4 · 0,3 = 0,12, a miało być 1,2."
        ],
        ua: [
          "Хтось поділив 12 : 3 = 4, а потім «про всяк випадок» поставив кому: 0,4.",
          "Кому ти вже використав, зсуваючи обидва числа. Результат 4, не 0,4.",
          "Перевірка: 0,4 · 0,3 = 0,12, а мало бути 1,2."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dzielenie przez liczbę naturalną",
        ua: "Ділення на натуральне число"
      },
      task: {
        id: "dziel-dzies-84-2",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("8,4 : 2"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("8,4 : 2"), ". Введи число, кому або крапку."]
        },
        answer: 4.2,
        hint: {
          pl: "8 : 2 = 4, 4 dziesiąte : 2 = 2 dziesiąte.",
          ua: "8 : 2 = 4, 4 десяті : 2 = 2 десяті."
        },
        explanation: {
          pl: "8,4 : 2 = 4,2.",
          ua: "8,4 : 2 = 4,2."
        },
        mistakes: [
          {
            answer: 42,
            feedback: {
              pl: "Zgubiłeś przecinek. 8,4 : 2 = 4,2, nie 42.",
              ua: "Загубив кому. 8,4 : 2 = 4,2, не 42."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ile razy mieści się 0,2",
        ua: "Скільки разів вміщається 0,2"
      },
      task: {
        id: "dziel-dzies-6-02",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("6 : 0,2"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("6 : 0,2"), ". Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "Przesuń oba przecinki o jedno miejsce: 60 : 2.",
          ua: "Зсунь обидві коми на одне місце: 60 : 2."
        },
        explanation: {
          pl: "6 : 0,2 = 60 : 2 = 30. W szóstce mieści się trzydzieści dwudziestych.",
          ua: "6 : 0,2 = 60 : 2 = 30. У шістці вміщається тридцять двох десятих."
        },
        mistakes: [
          {
            answer: 3,
            feedback: {
              pl: "To 6 : 2. Dzielnik to 0,2, nie 2. Po przesunięciu 60 : 2 = 30.",
              ua: "Це 6 : 2. Дільник 0,2, не 2. Після зсуву 60 : 2 = 30."
            }
          },
          {
            answer: 0.03,
            feedback: {
              pl: "Wynik jest duży: 0,2 mieści się w 6 wiele razy.",
              ua: "Результат великий: 0,2 вміщається в 6 багато разів."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Porcje mąki",
        ua: "Порції борошна"
      },
      text: {
        pl: [
          ["W worku jest ", em("2,4 kg"), " mąki. Jedna porcja to ", em("0,6 kg"), "."]
        ],
        ua: [
          ["У мішку ", em("2,4 kg"), " борошна. Одна порція — ", em("0,6 kg"), "."]
        ]
      },
      task: {
        id: "dziel-dzies-maka",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile porcji wyjdzie z worka? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Скільки порцій вийде з мішка? Введи число, кому або крапку."]
        },
        answer: 4,
        hint: {
          pl: "2,4 : 0,6. Przesuń obie liczby o jedno miejsce: 24 : 6.",
          ua: "2,4 : 0,6. Зсунь обидва числа на одне місце: 24 : 6."
        },
        explanation: {
          pl: "2,4 : 0,6 = 24 : 6 = 4 porcje.",
          ua: "2,4 : 0,6 = 24 : 6 = 4 порції."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Taśma na odcinki",
        ua: "Стрічка на відрізки"
      },
      text: {
        pl: [
          ["Taśma ma ", em("3,6 m"), ". Każdy odcinek ma ", em("1,2 m"), "."]
        ],
        ua: [
          ["Стрічка має ", em("3,6 m"), ". Кожен відрізок — ", em("1,2 m"), "."]
        ]
      },
      task: {
        id: "dziel-dzies-tasma",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile odcinków wytniesz? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Скільки відрізків виріжеш? Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "3,6 : 1,2. ×10 i ×10 → 36 : 12.",
          ua: "3,6 : 1,2. ×10 і ×10 → 36 : 12."
        },
        explanation: {
          pl: "3,6 : 1,2 = 36 : 12 = 3.",
          ua: "3,6 : 1,2 = 36 : 12 = 3."
        },
        mistakes: [
          {
            answer: 2.4,
            feedback: {
              pl: "To różnica 3,6 − 1,2. Pytanie jest o ile razy: dzielenie.",
              ua: "Це різниця 3,6 − 1,2. Питання про «скільки разів»: ділення."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Dlaczego akurat 4?",
        ua: "Чому саме 4?"
      },
      text: {
        pl: [
          ["Wiemy, że ", em("1,2 : 0,3 = 4"), "."],
          "Nie licz od nowa. Wskaż, która myśl naprawdę to wyjaśnia."
        ],
        ua: [
          ["Знаємо, що ", em("1,2 : 0,3 = 4"), "."],
          "Не рахуй знову. Вкажи, яка думка справді це пояснює."
        ]
      },
      task: {
        id: "dziel-dzies-dlaczego-4",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dlaczego 1,2 : 0,3 = 4?",
          ua: "Чому 1,2 : 0,3 = 4?"
        },
        options: [
          { id: "a", label: { pl: "Bo 1,2 − 0,3 = 0,9, a to blisko 1.", ua: "Бо 1,2 − 0,3 = 0,9, а це близько 1." } },
          { id: "b", label: { pl: "Bo obie liczby mnożymy przez 10 i 12 : 3 = 4. Iloraz się nie zmienia.", ua: "Бо обидва числа множимо на 10 і 12 : 3 = 4. Частка не змінюється." } },
          { id: "c", label: { pl: "Bo w dzieleniu przecinek zawsze skacze o jedno miejsce w wyniku.", ua: "Бо при діленні кома завжди скаче на одне місце в результаті." } }
        ],
        answer: "b",
        hint: {
          pl: "To samo robisz z dzielną i dzielnikiem. Dlatego 12 : 3 ma ten sam iloraz.",
          ua: "Те саме робиш з діленим і дільником. Тому 12 : 3 має ту саму частку."
        },
        explanation: {
          pl: "Mnożenie obu liczb przez 10 nie zmienia ilorazu. 12 : 3 = 4. Sprawdzenie: 0,3 · 4 = 1,2.",
          ua: "Множення обох чисел на 10 не змінює частки. 12 : 3 = 4. Перевірка: 0,3 · 4 = 1,2."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Odejmowanie mówi, ile zostaje po jednym odjęciu, nie ile razy mieści się dzielnik.",
              ua: "Віднімання каже, скільки лишається після одного віднімання, не скільки разів вміщається дільник."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nie ma reguły „zawsze o jedno miejsce w wyniku”. Przesuwasz oba przecinki, a iloraz może być całkowity.",
              ua: "Немає правила «завжди на одне місце в результаті». Зсуваєш обидві коми, а частка може бути цілою."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Przez dziesięć",
        ua: "Чи вже вмію? На десять"
      },
      task: {
        id: "dziel-dzies-check-10",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("7,5 : 10"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("7,5 : 10"), ". Введи число, кому або крапку."]
        },
        answer: 0.75,
        hint: {
          pl: "Jedno miejsce w lewo.",
          ua: "Одне місце ліворуч."
        },
        explanation: {
          pl: "7,5 : 10 = 0,75.",
          ua: "7,5 : 10 = 0,75."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Oba przecinki",
        ua: "Чи вже вмію? Обидві коми"
      },
      task: {
        id: "dziel-dzies-check-15-05",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1,5 : 0,5"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("1,5 : 0,5"), ". Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "×10 i ×10 → 15 : 5.",
          ua: "×10 і ×10 → 15 : 5."
        },
        explanation: {
          pl: "1,5 : 0,5 = 15 : 5 = 3. Sprawdzenie: 0,5 · 3 = 1,5.",
          ua: "1,5 : 0,5 = 15 : 5 = 3. Перевірка: 0,5 · 3 = 1,5."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1,2 : 0,3 = 12 : 3 = 4",
      text: {
        pl: [
          ": 10 i : 100 — przecinek w lewo.",
          "Gdy dzielnik ma przecinek, przesuwasz przecinek w obu liczbach o tyle samo.",
          "Iloraz się nie zmienia. Sprawdzasz mnożeniem."
        ],
        ua: [
          ": 10 і : 100 — кома ліворуч.",
          "Коли дільник має кому, зсуваєш кому в обох числах на стільки само.",
          "Частка не змінюється. Перевіряєш множенням."
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
          "Przy zamianie jednostek znów pojawi się ×10, ×100 i ×1000 — ten sam skok przecinka, tylko z metrami i gramami."
        ],
        ua: [
          "При перетворенні одиниць знову з’явиться ×10, ×100 і ×1000 — той самий стрибок коми, лише з метрами і грамами."
        ]
      }
    }
  ]
};
