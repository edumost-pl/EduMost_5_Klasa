function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Najpierw oszacuj, potem wstaw przecinek",
        ua: "Спочатку оціни, потім постав кому"
      },
      formula: "2,9 · 4 ≈ 12",
      text: {
        pl: [
          "2,9 jest blisko 3, a 3 · 4 = 12. Wynik nie może być 116 ani 1,16.",
          "Dziś: mnożysz jak liczby naturalne, a przecinek wstawiasz na końcu."
        ],
        ua: [
          "2,9 близько до 3, а 3 · 4 = 12. Результат не може бути 116 чи 1,16.",
          "Сьогодні: множиш як натуральні числа, а кому ставиш наприкінці."
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
        { pl: "mnożyć ułamki dziesiętne jak liczby naturalne, potem wstawić przecinek", ua: "множити десяткові дроби як натуральні числа, потім поставити кому" },
        { pl: "mnożyć przez 10 i 100 — przecinek skacze w prawo", ua: "множити на 10 і 100 — кома скаче праворуч" },
        { pl: "obliczyć 0,2 · 0,3 = 0,06", ua: "обчислити 0,2 · 0,3 = 0,06" },
        { pl: "najpierw oszacować iloczyn", ua: "спочатку оцінити добуток" },
        { pl: "powiedzieć, ile miejsc po przecinku musi mieć iloczyn", ua: "сказати, скільки місць після коми має мати добуток" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Przecinek skacze w prawo",
        ua: "Кома скаче праворуч"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "0,47 · 10", result: "4,7", caption: "jeden skok" },
        right: { expr: "0,47 · 100", result: "47", caption: "dwa skoki" }
      },
      prompt: {
        pl: [
          "Mnożenie przez 10 — przecinek o jedno miejsce w prawo.",
          "Przez 100 — o dwa miejsca. Cyfry zostają te same."
        ],
        ua: [
          "Множення на 10 — кома на одне місце праворуч.",
          "На 100 — на два місця. Цифри лишаються ті самі."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Najpierw cyfry, przecinek na końcu",
        ua: "Спочатку цифри, кома наприкінці"
      },
      formula: "1,2 · 3 = 3,6",
      text: {
        pl: [
          ["Liczymy ", em("12 · 3 = 36"), " — jak liczby naturalne."],
          ["W czynnikach jest razem ", em("1"), " cyfra po przecinku, więc w iloczynie też jedna: ", em("3,6"), "."],
          "Najpierw oszacuj: 1,2 to trochę więcej niż 1, więc 1,2 · 3 trochę więcej niż 3."
        ],
        ua: [
          ["Рахуємо ", em("12 · 3 = 36"), " — як натуральні числа."],
          ["У множниках разом ", em("1"), " цифра після коми, отже в добутку теж одна: ", em("3,6"), "."],
          "Спочатку оціни: 1,2 трохи більше за 1, тож 1,2 · 3 трохи більше за 3."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Dwie dziesiąte razy trzy dziesiąte",
        ua: "Дві десяті помножити на три десяті"
      },
      reveal: true,
      steps: [
        { formula: "0,2 · 0,3" },
        {
          formula: "2 · 3 = 6",
          text: {
            pl: "Cyfry jak w liczbach naturalnych.",
            ua: "Цифри як у натуральних числах."
          }
        },
        {
          formula: "0,06",
          text: {
            pl: [
              ["W 0,2 jedna cyfra po przecinku, w 0,3 też jedna — razem ", em("2"), "."],
              ["W 6 musisz mieć dwa miejsca: dopisujesz zero. Nie 0,6."]
            ],
            ua: [
              ["У 0,2 одна цифра після коми, у 0,3 теж одна — разом ", em("2"), "."],
              ["У 6 треба два місця: дописуєш нуль. Не 0,6."]
            ]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Przez 10 i przez 100",
        ua: "На 10 і на 100"
      },
      reveal: true,
      steps: [
        {
          formula: "0,35 · 10 = 3,5",
          text: {
            pl: "Przecinek o jedno miejsce w prawo.",
            ua: "Кома на одне місце праворуч."
          }
        },
        {
          formula: "0,35 · 100 = 35",
          text: {
            pl: "Dwa miejsca w prawo. 35, a nie 3,5.",
            ua: "Два місця праворуч. 35, а не 3,5."
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
        { pl: "czynnik", ua: "множник" },
        { pl: "iloczyn", ua: "добуток" },
        { pl: "oszacowanie", ua: "оцінка" },
        { pl: "miejsce po przecinku", ua: "місце після коми" }
      ],
      phrases: [
        { pl: "Oblicz iloczyn.", ua: "Обчисли добуток." },
        { pl: "Najpierw oszacuj.", ua: "Спочатку оціни." },
        { pl: "Ile cyfr po przecinku ma mieć iloczyn?", ua: "Скільки цифр після коми має мати добуток?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Skok przez dziesięć",
        ua: "Стрибок через десять"
      },
      task: {
        id: "mnoz-dzies-guided-04-10",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("0,4 · 10"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("0,4 · 10"), ". Введи число, кому або крапку."]
        },
        answer: 4,
        hint: {
          pl: "Przecinek o jedno miejsce w prawo. 0,4 → 4.",
          ua: "Кома на одне місце праворуч. 0,4 → 4."
        },
        explanation: {
          pl: "0,4 · 10 = 4.",
          ua: "0,4 · 10 = 4."
        },
        mistakes: [
          {
            answer: 0.04,
            feedback: {
              pl: "To byłoby dzielenie przez 10. Mnożenie przesuwa przecinek w prawo.",
              ua: "Це було б ділення на 10. Множення зсуває кому праворуч."
            }
          },
          {
            answer: 40,
            feedback: {
              pl: "40 to 0,4 · 100. Tu mnożysz tylko przez 10.",
              ua: "40 це 0,4 · 100. Тут множиш лише на 10."
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
        pl: "0,2 · 0,3 = 0,6",
        ua: "0,2 · 0,3 = 0,6"
      },
      text: {
        pl: [
          "2 · 3 = 6 — ta część jest dobra.",
          ["Miejsc po przecinku jest ", em("1 + 1 = 2"), ". W 0,6 jest tylko jedno."],
          ["Trzeba dopisać zero: ", em("0,06"), "."]
        ],
        ua: [
          "2 · 3 = 6 — ця частина добра.",
          ["Місць після коми ", em("1 + 1 = 2"), ". У 0,6 лише одне."],
          ["Треба дописати нуль: ", em("0,06"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Najpierw oszacuj",
        ua: "Спочатку оціни"
      },
      task: {
        id: "mnoz-dzies-oszacuj",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Ile mniej więcej jest ", em("2,9 · 3"), "? Nie licz dokładnie — wybierz oszacowanie."],
          ua: ["Скільки приблизно ", em("2,9 · 3"), "? Не рахуй точно — вибери оцінку."]
        },
        options: [
          { id: "a", label: { pl: "około 6", ua: "близько 6" } },
          { id: "b", label: { pl: "około 9", ua: "близько 9" } },
          { id: "c", label: { pl: "około 90", ua: "близько 90" } }
        ],
        answer: "b",
        hint: {
          pl: "2,9 jest blisko 3. 3 · 3 = 9.",
          ua: "2,9 близько до 3. 3 · 3 = 9."
        },
        explanation: {
          pl: "2,9 ≈ 3, więc 2,9 · 3 ≈ 9. Dokładnie jest 8,7 — blisko dziewiątki, nie sześćdziesięciu.",
          ua: "2,9 ≈ 3, отже 2,9 · 3 ≈ 9. Точно 8,7 — близько до дев’ятки, не до дев’яноста."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "2 · 3 = 6, ale 2,9 jest prawie 3, nie 2.",
              ua: "2 · 3 = 6, але 2,9 майже 3, не 2."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "90 byłoby koło 30 · 3. Tu czynniki są koło 3 i 3.",
              ua: "90 було б близько 30 · 3. Тут множники близько 3 і 3."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Policz dokładnie",
        ua: "Полічи точно"
      },
      task: {
        id: "mnoz-dzies-29-3",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2,9 · 3"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("2,9 · 3"), ". Введи число, кому або крапку."]
        },
        answer: 8.7,
        hint: {
          pl: "29 · 3 = 87. Jedna cyfra po przecinku w czynnikach.",
          ua: "29 · 3 = 87. Одна цифра після коми в множниках."
        },
        explanation: {
          pl: "29 · 3 = 87, jedna pozycja po przecinku → 8,7. Zgodne z oszacowaniem ≈ 9.",
          ua: "29 · 3 = 87, одна позиція після коми → 8,7. Згідно з оцінкою ≈ 9."
        },
        mistakes: [
          {
            answer: 87,
            feedback: {
              pl: "Zapomniałeś przecinka. W 2,9 jest jedno miejsce → 8,7.",
              ua: "Забув кому. У 2,9 одне місце → 8,7."
            }
          },
          {
            answer: 6.7,
            feedback: {
              pl: "2 · 3 = 6, plus 0,9 · 3 = 2,7, razem 8,7.",
              ua: "2 · 3 = 6, плюс 0,9 · 3 = 2,7, разом 8,7."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Wstążka na prezenty",
        ua: "Стрічка на подарунки"
      },
      text: {
        pl: [
          ["Jedna wstążka ma ", em("1,25 m"), ". Potrzebujesz ", em("2"), " takie same."]
        ],
        ua: [
          ["Одна стрічка має ", em("1,25 m"), ". Потрібно ", em("2"), " такі самі."]
        ]
      },
      task: {
        id: "mnoz-dzies-wstazka",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile metrów wstążki kupić? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки метрів стрічки купити? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 2.5,
        hint: {
          pl: "125 · 2 = 250. Dwie cyfry po przecinku w 1,25, zero w 2. Razem dwa miejsca: 2,50 = 2,5.",
          ua: "125 · 2 = 250. Дві цифри після коми в 1,25, нуль у 2. Разом два місця: 2,50 = 2,5."
        },
        explanation: {
          pl: "1,25 · 2 = 2,50 m = 2,5 m.",
          ua: "1,25 · 2 = 2,50 m = 2,5 m."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Pół razy cztery dziesiąte",
        ua: "Половина на чотири десяті"
      },
      text: {
        pl: [
          ["Oszacuj: ", em("0,5 · 0,4"), " powinno być mniejsze od połowy, bo mnożysz przez liczbę mniejszą od 1."]
        ],
        ua: [
          ["Оціни: ", em("0,5 · 0,4"), " має бути менше від половини, бо множиш на число, менше за 1."]
        ]
      },
      task: {
        id: "mnoz-dzies-05-04",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("0,5 · 0,4"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("0,5 · 0,4"), ". Введи число, кому або крапку."]
        },
        answer: 0.2,
        hint: {
          pl: "5 · 4 = 20. Razem dwa miejsca po przecinku: 0,20, czyli 0,2.",
          ua: "5 · 4 = 20. Разом два місця після коми: 0,20, тобто 0,2."
        },
        explanation: {
          pl: "0,5 · 0,4 = 0,20 = 0,2.",
          ua: "0,5 · 0,4 = 0,20 = 0,2."
        },
        mistakes: [
          {
            answer: 2,
            feedback: {
              pl: "Przecinek musi zostać. 0,20, nie 2.",
              ua: "Кома має лишитися. 0,20, не 2."
            }
          },
          {
            answer: 0.02,
            feedback: {
              pl: "Za dużo zer. Dwa miejsca dają 0,20, a nie 0,02.",
              ua: "Забагато нулів. Два місця дають 0,20, а не 0,02."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Ile miejsc po przecinku?",
        ua: "Скільки місць після коми?"
      },
      text: {
        pl: [
          ["Nie musisz liczyć iloczynu ", em("0,12 · 0,4"), "."],
          "Policz tylko miejsca: ile cyfr po przecinku w pierwszym czynniku, ile w drugim."
        ],
        ua: [
          ["Не треба рахувати добуток ", em("0,12 · 0,4"), "."],
          "Полічи лише місця: скільки цифр після коми в першому множнику, скільки в другому."
        ]
      },
      task: {
        id: "mnoz-dzies-miejsca",
        type: "input-number",
        level: "C",
        question: {
          pl: ["Ile miejsc po przecinku musi mieć iloczyn ", em("0,12 · 0,4"), " zanim opuścisz zera na końcu? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Скільки місць після коми має мати добуток ", em("0,12 · 0,4"), " перш ніж опустиш нулі на кінці? Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "0,12 ma 2 cyfry po przecinku. 0,4 ma 1. Dodajesz te liczby.",
          ua: "0,12 має 2 цифри після коми. 0,4 має 1. Додаєш ці числа."
        },
        explanation: {
          pl: "2 + 1 = 3 miejsca. 12 · 4 = 48, więc 0,048. Zero jest potrzebne, żeby były trzy miejsca.",
          ua: "2 + 1 = 3 місця. 12 · 4 = 48, отже 0,048. Нуль потрібен, щоб були три місця."
        },
        mistakes: [
          {
            answer: 2,
            feedback: {
              pl: "To tylko miejsca z 0,12. Dodaj jeszcze jedno z 0,4.",
              ua: "Це лише місця з 0,12. Додай ще одне з 0,4."
            }
          },
          {
            answer: 48,
            feedback: {
              pl: "Pytanie nie o wynik, tylko o liczbę miejsc. 2 + 1 = 3.",
              ua: "Питання не про результат, а про кількість місць. 2 + 1 = 3."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Przez sto",
        ua: "Чи вже вмію? На сто"
      },
      task: {
        id: "mnoz-dzies-check-100",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("0,8 · 100"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("0,8 · 100"), ". Введи число, кому або крапку."]
        },
        answer: 80,
        hint: {
          pl: "Dwa skoki w prawo. Po 0,8 dopisz zero: 80.",
          ua: "Два стрибки праворуч. Після 0,8 допиши нуль: 80."
        },
        explanation: {
          pl: "0,8 · 100 = 80.",
          ua: "0,8 · 100 = 80."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dwa czynniki z przecinkiem",
        ua: "Чи вже вмію? Два множники з комою"
      },
      task: {
        id: "mnoz-dzies-check-02-03",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("0,2 · 0,3"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("0,2 · 0,3"), ". Введи число, кому або крапку."]
        },
        answer: 0.06,
        hint: {
          pl: "2 · 3 = 6. Dwa miejsca po przecinku → 0,06.",
          ua: "2 · 3 = 6. Два місця після коми → 0,06."
        },
        explanation: {
          pl: "0,2 · 0,3 = 0,06.",
          ua: "0,2 · 0,3 = 0,06."
        },
        mistakes: [
          {
            answer: 0.6,
            feedback: {
              pl: "Brakuje zera. Dwa miejsca: 0,06, nie 0,6.",
              ua: "Бракує нуля. Два місця: 0,06, не 0,6."
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
      formula: "0,2 · 0,3 = 0,06",
      text: {
        pl: [
          "Mnożysz cyfry jak w liczbach naturalnych.",
          "Liczba miejsc po przecinku w iloczynie = suma miejsc w czynnikach. Czasem dopisujesz zero.",
          "· 10 i · 100 — przecinek w prawo. Najpierw oszacuj, czy wynik ma sens."
        ],
        ua: [
          "Множиш цифри як у натуральних числах.",
          "Число місць після коми в добутку = сума місць у множниках. Інколи дописуєш нуль.",
          "· 10 і · 100 — кома праворуч. Спочатку оціни, чи результат має сенс."
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
          "Przy dzieleniu przecinek skacze w drugą stronę — albo przesuwasz go w obu liczbach naraz."
        ],
        ua: [
          "При діленні кома скаче в інший бік — або зсуваєш її в обох числах разом."
        ]
      }
    }
  ]
};
