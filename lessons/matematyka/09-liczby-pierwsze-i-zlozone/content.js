function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Prostokąt z kafelków",
        ua: "Прямокутник із плиток"
      },
      visual: { kind: "grid", rows: 3, cols: 4 },
      text: {
        pl: [
          ["Z ", em("12"), " kafelków ułożysz prostokąt ", em("3"), " na ", em("4"), " — i nie tylko ten."],
          ["A z ", em("7"), " kafelków? Tylko rząd ", em("1"), " na ", em("7"), "."],
          "Jedne liczby rozpadają się na czynniki. Inne — prawie wcale."
        ],
        ua: [
          ["З ", em("12"), " плиток складеш прямокутник ", em("3"), " на ", em("4"), " — і не лише такий."],
          ["А з ", em("7"), " плиток? Лише ряд ", em("1"), " на ", em("7"), "."],
          "Одні числа розпадаються на множники. Інші — майже ні."
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
        { pl: "odróżnić liczbę pierwszą od złożonej", ua: "відрізнити просте число від складеного" },
        { pl: "wiedzieć, że 1 nie jest ani pierwsza, ani złożona", ua: "знати, що 1 не є ні простим, ні складеним" },
        { pl: "rozłożyć małą liczbę na czynniki", ua: "розкласти мале число на множники" },
        { pl: "policzyć liczby pierwsze w krótkim przedziale", ua: "порахувати прості числа на короткому проміжку" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Ile prostokątów?",
        ua: "Скільки прямокутників?"
      },
      visual: { kind: "grid", rows: 2, cols: 6 },
      prompt: {
        pl: [
          ["12 = 2 · 6, też 3 · 4, też 1 · 12."],
          "Więcej niż jedna para czynników — liczba się składa."
        ],
        ua: [
          ["12 = 2 · 6, також 3 · 4, також 1 · 12."],
          "Більше ніж одна пара множників — число складається."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Liczba pierwsza",
        ua: "Просте число"
      },
      formula: "7 = 1 · 7",
      text: {
        pl: [
          "Ma dokładnie dwa dzielniki naturalne: 1 i samą siebie.",
          ["Takie są ", em("2, 3, 5, 7, 11, 13"), "…"],
          ["Dwójka jest jedyną parzystą liczbą pierwszą."]
        ],
        ua: [
          "Має рівно два натуральні дільники: 1 і саме себе.",
          ["Такі є ", em("2, 3, 5, 7, 11, 13"), "…"],
          ["Двійка — єдине парне просте число."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Jedynka stoi osobno",
        ua: "Одиниця стоїть окремо"
      },
      formula: "1",
      text: {
        pl: [
          "1 ma tylko jeden dzielnik: samą siebie.",
          "Do pierwszych potrzeba dwóch dzielników. Do złożonych — więcej niż dwóch.",
          "Dlatego 1 nie jest liczbą pierwszą i nie jest złożoną."
        ],
        ua: [
          "1 має лише один дільник: саму себе.",
          "Для простих треба два дільники. Для складених — більше ніж два.",
          "Тому 1 не є простим числом і не є складеним."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Liczba złożona",
        ua: "Складене число"
      },
      formula: "15 = 3 · 5",
      text: {
        pl: [
          "Ma więcej niż dwa dzielniki.",
          ["15 dzieli się przez ", em("1, 3, 5"), " i ", em("15"), " — cztery dzielniki, więc złożona."],
          "Nie wystarczy, że liczba jest nieparzysta. 15 jest nieparzysta i złożona."
        ],
        ua: [
          "Має більше ніж два дільники.",
          ["15 ділиться на ", em("1, 3, 5"), " і ", em("15"), " — чотири дільники, тож складене."],
          "Недостатньо, що число непарне. 15 непарне і складене."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Rozłóżmy 42",
        ua: "Розкладімо 42"
      },
      reveal: true,
      steps: [
        { formula: "42" },
        {
          formula: "42 = 2 · 21",
          text: {
            pl: "Parzysta, więc 2 wchodzi od razu. 21 jeszcze nie jest pierwsze.",
            ua: "Парне, тож 2 входить одразу. 21 ще не просте."
          }
        },
        {
          formula: "21 = 3 · 7",
          text: {
            pl: "2 + 1 = 3, więc 21 dzieli się przez 3.",
            ua: "2 + 1 = 3, тож 21 ділиться на 3."
          }
        },
        {
          formula: "42 = 2 · 3 · 7",
          text: {
            pl: "Wszystkie czynniki są pierwsze. To rozkład na czynniki pierwsze.",
            ua: "Усі множники прості. Це розклад на прості множники."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Klasyfikacja: 2, 9, 11, 1",
        ua: "Класифікація: 2, 9, 11, 1"
      },
      reveal: true,
      steps: [
        {
          formula: "2 — pierwsza",
          text: {
            pl: "Dzielniki: tylko 1 i 2. Parzysta, a jednak pierwsza.",
            ua: "Дільники: лише 1 і 2. Парне, а все ж просте."
          }
        },
        {
          formula: "9 = 3 · 3 — złożona",
          text: {
            pl: "Dzielniki 1, 3 i 9.",
            ua: "Дільники 1, 3 і 9."
          }
        },
        {
          formula: "11 — pierwsza",
          text: {
            pl: "Nie dzieli się przez 2, 3, 5.",
            ua: "Не ділиться на 2, 3, 5."
          }
        },
        {
          formula: "1 — ani pierwsza, ani złożona",
          text: {
            pl: "Tylko jeden dzielnik.",
            ua: "Лише один дільник."
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
        { pl: "liczba pierwsza", ua: "просте число" },
        { pl: "liczba złożona", ua: "складене число" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "czynnik", ua: "множник" },
        { pl: "rozkład na czynniki", ua: "розклад на множники" }
      ],
      phrases: [
        { pl: "Czy to liczba pierwsza?", ua: "Чи це просте число?" },
        { pl: "Rozłóż na czynniki pierwsze.", ua: "Розклади на прості множники." },
        { pl: "Podaj dzielniki liczby.", ua: "Назви дільники числа." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Czy 17 jest pierwsza?",
        ua: "Чи 17 просте?"
      },
      task: {
        id: "pierwsze-guided-17",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Czy ", em("17"), " jest liczbą pierwszą? Zaznacz prawda albo fałsz."],
          ua: ["Чи ", em("17"), " є простим числом? Познач правду або неправду."]
        },
        answer: true,
        hint: {
          pl: "Sprawdź dzielniki 2, 3, 5. Czy któraś wchodzi w 17?",
          ua: "Перевір дільники 2, 3, 5. Чи якийсь входить у 17?"
        },
        explanation: {
          pl: "17 nie dzieli się przez 2, 3, 5. Dzielniki to tylko 1 i 17 — liczba pierwsza.",
          ua: "17 не ділиться на 2, 3, 5. Дільники лише 1 і 17 — просте число."
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
        pl: "15 jest liczbą pierwszą, bo jest nieparzysta",
        ua: "15 є простим числом, бо воно непарне"
      },
      text: {
        pl: [
          "Nieparzystość nie wystarczy. Pierwsza ma tylko dwa dzielniki.",
          [em("15 = 3 · 5"), ". Są też dzielniki 1 i 15 — cztery sztuki. To liczba złożona."]
        ],
        ua: [
          "Непарності замало. Просте має лише два дільники.",
          [em("15 = 3 · 5"), ". Є ще дільники 1 і 15 — чотири штуки. Це складене число."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Złożona czy pierwsza?",
        ua: "Складене чи просте?"
      },
      task: {
        id: "pierwsze-21",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Jaką liczbą jest ", em("21"), "? Wybierz jedną odpowiedź."],
          ua: ["Яким числом є ", em("21"), "? Вибери одну відповідь."]
        },
        options: [
          { id: "a", label: { pl: "pierwsza", ua: "просте" } },
          { id: "b", label: { pl: "złożona", ua: "складене" } },
          { id: "c", label: { pl: "ani pierwsza, ani złożona", ua: "ні просте, ні складене" } }
        ],
        answer: "b",
        hint: {
          pl: "Suma cyfr 2 + 1. Czy 21 dzieli się przez 3?",
          ua: "Сума цифр 2 + 1. Чи 21 ділиться на 3?"
        },
        explanation: {
          pl: "21 = 3 · 7. Więcej niż dwa dzielniki — liczba złożona.",
          ua: "21 = 3 · 7. Більше ніж два дільники — складене число."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "21 dzieli się przez 3 i przez 7. Pierwsza miałaby tylko 1 i 21.",
              ua: "21 ділиться на 3 і на 7. Просте мало б лише 1 і 21."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tak mówimy tylko o 1. 21 ma cztery dzielniki: 1, 3, 7, 21.",
              ua: "Так кажемо лише про 1. 21 має чотири дільники: 1, 3, 7, 21."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Rozkład 42",
        ua: "Розклад 42"
      },
      task: {
        id: "pierwsze-factor-42",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Który zapis to rozkład ", em("42"), " na czynniki pierwsze? Wybierz jeden."],
          ua: ["Який запис — розклад ", em("42"), " на прості множники? Вибери один."]
        },
        options: [
          { id: "a", label: { pl: "2 · 21", ua: "2 · 21" } },
          { id: "b", label: { pl: "2 · 3 · 7", ua: "2 · 3 · 7" } },
          { id: "c", label: { pl: "6 · 7", ua: "6 · 7" } }
        ],
        answer: "b",
        hint: {
          pl: "Czynnik pierwszy sam nie rozpada się dalej. Czy 21 i 6 są pierwsze?",
          ua: "Простий множник далі не розпадається. Чи 21 і 6 прості?"
        },
        explanation: {
          pl: "2, 3 i 7 są pierwsze. 2 · 3 · 7 = 42. W a i c zostały złożone czynniki 21 i 6.",
          ua: "2, 3 і 7 — прості. 2 · 3 · 7 = 42. У a і c лишились складені множники 21 і 6."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Iloczyn się zgadza, ale 21 = 3 · 7. Trzeba rozłożyć do końca.",
              ua: "Добуток сходиться, але 21 = 3 · 7. Треба розкласти до кінця."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "6 = 2 · 3. Szóstka nie jest pierwsza.",
              ua: "6 = 2 · 3. Шістка не проста."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Ile dzielników ma 12?",
        ua: "Скільки дільників у 12?"
      },
      text: {
        pl: [
          ["Z ", em("12"), " kafelków można ułożyć kilka prostokątów."],
          "Każda para boków to para dzielników."
        ],
        ua: [
          ["З ", em("12"), " плиток можна скласти кілька прямокутників."],
          "Кожна пара сторін — це пара дільників."
        ]
      },
      task: {
        id: "pierwsze-divisors-12",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile liczb naturalnych dzieli ", em("12"), "? Wpisz, ile jest dzielników."],
          ua: ["Скільки натуральних чисел ділить ", em("12"), "? Введи, скільки дільників."]
        },
        answer: 6,
        hint: {
          pl: "Wypisz pary: 1 · 12, 2 · 6, 3 · 4. Nie zapomnij obu stron.",
          ua: "Випиши пари: 1 · 12, 2 · 6, 3 · 4. Не забудь обидва боки."
        },
        explanation: {
          pl: "Dzielniki: 1, 2, 3, 4, 6, 12. Jest ich 6.",
          ua: "Дільники: 1, 2, 3, 4, 6, 12. Їх 6."
        },
        mistakes: [
          {
            answer: 3,
            feedback: {
              pl: "To liczba par prostokątów bez obracania. Dzielniki liczymy wszystkie: i 3, i 4.",
              ua: "Це число пар прямокутників без обертання. Дільники рахуємо всі: і 3, і 4."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Ile pierwszych od 20 do 30?",
        ua: "Скільки простих від 20 до 30?"
      },
      text: {
        pl: [
          "Nie zgaduj z pamięci. Przejdź liczby po kolei i odsłoń złożone."
        ],
        ua: [
          "Не вгадуй з пам’яті. Пройди числа по черзі і відсій складені."
        ]
      },
      task: {
        id: "pierwsze-count-20-30",
        type: "input-number",
        level: "C",
        question: {
          pl: ["Ile liczb pierwszych jest wśród liczb od ", em("20"), " do ", em("30"), "? Wpisz, ile ich jest."],
          ua: ["Скільки простих чисел серед чисел від ", em("20"), " до ", em("30"), "? Введи, скільки їх."]
        },
        answer: 2,
        hint: {
          pl: "Wykreśl parzyste, potem 21, 25, 27. Które dwie zostaną?",
          ua: "Викресли парні, потім 21, 25, 27. Які дві залишаться?"
        },
        explanation: {
          pl: "21 = 3 · 7, 22 = 2 · 11, 24, 25 = 5 · 5, 26, 27 = 3 · 9, 28, 30 — złożone. Zostają 23 i 29. Jest ich 2.",
          ua: "21 = 3 · 7, 22 = 2 · 11, 24, 25 = 5 · 5, 26, 27 = 3 · 9, 28, 30 — складені. Лишаються 23 і 29. Їх 2."
        },
        mistakes: [
          {
            answer: 3,
            feedback: {
              pl: "Czy wliczyłeś 21 albo 25? Obie są złożone. Albo 19 — ale 19 jest przed 20.",
              ua: "Чи зарахував 21 або 25? Обидва складені. Або 19 — але 19 стоїть перед 20."
            }
          },
          {
            answer: 1,
            feedback: {
              pl: "Są dwie: 23 i 29.",
              ua: "Є дві: 23 і 29."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dwójka",
        ua: "Чи вже вмію? Двійка"
      },
      task: {
        id: "pierwsze-check-2",
        type: "true-false",
        level: "A",
        question: {
          pl: ["Czy ", em("2"), " jest liczbą pierwszą? Zaznacz prawda albo fałsz."],
          ua: ["Чи ", em("2"), " є простим числом? Познач правду або неправду."]
        },
        answer: true,
        hint: {
          pl: "Ile dzielników ma 2? Czy parzystość przeszkadza?",
          ua: "Скільки дільників у 2? Чи парність заважає?"
        },
        explanation: {
          pl: "Dzielniki 2 to tylko 1 i 2. To najmniejsza — i jedyna parzysta — liczba pierwsza.",
          ua: "Дільники 2 — лише 1 і 2. Це найменше — і єдине парне — просте число."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Jedynka",
        ua: "Чи вже вмію? Одиниця"
      },
      task: {
        id: "pierwsze-check-1",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Czy ", em("1"), " jest liczbą pierwszą? Zaznacz prawda albo fałsz."],
          ua: ["Чи ", em("1"), " є простим числом? Познач правду або неправду."]
        },
        answer: false,
        hint: {
          pl: "Ile dzielników ma 1? Ile trzeba do liczby pierwszej?",
          ua: "Скільки дільників у 1? Скільки треба для простого числа?"
        },
        explanation: {
          pl: "1 ma jeden dzielnik. Liczba pierwsza potrzebuje dokładnie dwóch. 1 nie jest pierwsza ani złożona.",
          ua: "1 має один дільник. Простому числу треба рівно два. 1 не є ні простим, ні складеним."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "7 — pierwsza,   15 = 3 · 5 — złożona,   1 — osobno",
      text: {
        pl: [
          "Pierwsza: dokładnie dwa dzielniki. Złożona: więcej niż dwa.",
          "1 nie należy do żadnej z tych grup.",
          "Rozkład: dziel przez małe liczby pierwsze, aż zostaną same pierwsze czynniki."
        ],
        ua: [
          "Просте: рівно два дільники. Складене: більше ніж два.",
          "1 не належить до жодної з цих груп.",
          "Розклад: діли на малі прості, доки не залишаться самі прості множники."
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
          "Później znów usłyszysz: „Czy to liczba pierwsza?” i „rozłóż na czynniki”.",
          "To nie nowy materiał — krótka powtórka klasyfikacji."
        ],
        ua: [
          "Пізніше знову почуєш: «Чи це просте число?» і «розклади на множники».",
          "Це не новий матеріал — коротке повторення класифікації."
        ]
      }
    }
  ]
};
