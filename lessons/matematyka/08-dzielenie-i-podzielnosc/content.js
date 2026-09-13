function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Cukierki i pudełka",
        ua: "Цукерки і коробки"
      },
      formula: "17 = 5 · 3 + 2",
      text: {
        pl: [
          ["Jest ", em("17"), " cukierków i ", em("5"), " pudełek."],
          "Do każdego pudełka tyle samo. Coś zostanie.",
          "Dziś: reszta i cechy podzielności — bez zgadywania."
        ],
        ua: [
          ["Є ", em("17"), " цукерок і ", em("5"), " коробок."],
          "У кожну коробку порівну. Щось залишиться.",
          "Сьогодні: остача і ознаки подільності — без вгадування."
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
        { pl: "podzielić z resztą i zapisać a = b · q + r", ua: "поділити з остачею і записати a = b · q + r" },
        { pl: "wiedzieć, że reszta jest mniejsza od dzielnika", ua: "знати, що остача менша за дільник" },
        { pl: "stosować cechy podzielności przez 2, 3, 4, 5, 9, 10, 100", ua: "застосовувати ознаки подільності на 2, 3, 4, 5, 9, 10, 100" },
        { pl: "odrzucić resztę, która jest niemożliwa", ua: "відкинути остачу, яка неможлива" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Trzy pełne grupy i dwie sztuki",
        ua: "Три повні групи і дві штуки"
      },
      text: {
        pl: [
          ["Od ", em("17"), " odejmujesz piątki: 17 − 5 − 5 − 5."],
          ["Zostają ", em("2"), ". Nie da się wyjąć kolejnej piątki."],
          ["Dlatego ", em("17 = 5 · 3 + 2"), "."]
        ],
        ua: [
          ["Від ", em("17"), " віднімаєш п’ятірки: 17 − 5 − 5 − 5."],
          ["Лишаються ", em("2"), ". Ще однієї п’ятірки не вийняти."],
          ["Тому ", em("17 = 5 · 3 + 2"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Wzór z resztą",
        ua: "Формула з остачею"
      },
      formula: "a = b · q + r",
      text: {
        pl: [
          ["a to dzielna, b dzielnik, q iloraz całkowity, r reszta."],
          ["Reszta spełnia: ", em("0 ≤ r < b"), "."],
          "Jeśli r = 0, liczba dzieli się bez reszty."
        ],
        ua: [
          ["a — ділене, b — дільник, q — ціла частка, r — остача."],
          ["Остача така: ", em("0 ≤ r < b"), "."],
          "Якщо r = 0, число ділиться без остачі."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak podzielić 23 : 4?",
        ua: "Як поділити 23 : 4?"
      },
      reveal: true,
      steps: [
        { formula: "23 : 4" },
        {
          formula: "4 · 5 = 20",
          text: {
            pl: "Pięć czwórek mieści się w 23. Sześć już nie, bo 24 > 23.",
            ua: "П’ять четвірок вміщається в 23. Шість уже ні, бо 24 > 23."
          }
        },
        {
          formula: "23 = 4 · 5 + 3",
          text: {
            pl: ["Iloraz ", em("5"), ", reszta ", em("3"), ". I 3 < 4."],
            ua: ["Частка ", em("5"), ", остача ", em("3"), ". І 3 < 4."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Cechy 2, 5 i 10 — ostatnia cyfra",
        ua: "Ознаки 2, 5 і 10 — остання цифра"
      },
      text: {
        pl: [
          ["Przez ", em("2"), ": ostatnia cyfra parzysta — 0, 2, 4, 6 albo 8."],
          ["Przez ", em("5"), ": ostatnia cyfra 0 albo 5."],
          ["Przez ", em("10"), ": ostatnia cyfra 0."]
        ],
        ua: [
          ["На ", em("2"), ": остання цифра парна — 0, 2, 4, 6 або 8."],
          ["На ", em("5"), ": остання цифра 0 або 5."],
          ["На ", em("10"), ": остання цифра 0."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Cechy 3 i 9 — suma cyfr",
        ua: "Ознаки 3 і 9 — сума цифр"
      },
      formula: "1 + 4 + 7 = 12",
      text: {
        pl: [
          ["Przez ", em("3"), ": suma cyfr musi dzielić się przez 3."],
          ["Przez ", em("9"), ": suma cyfr musi dzielić się przez 9."],
          ["Przy ", em("147"), " suma to 12, a 12 dzieli się przez 3, więc 147 też."]
        ],
        ua: [
          ["На ", em("3"), ": сума цифр має ділитися на 3."],
          ["На ", em("9"), ": сума цифр має ділитися на 9."],
          ["У ", em("147"), " сума — 12, а 12 ділиться на 3, тож 147 теж."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Cechy 4 i 100 — ostatnie dwie cyfry",
        ua: "Ознаки 4 і 100 — останні дві цифри"
      },
      text: {
        pl: [
          ["Przez ", em("4"), ": liczba z dwóch ostatnich cyfr dzieli się przez 4."],
          ["Przykład: 124 — patrzysz na ", em("24"), ", a 24 : 4 = 6."],
          ["Przez ", em("100"), ": liczba kończy się dwoma zerami."]
        ],
        ua: [
          ["На ", em("4"), ": число з двох останніх цифр ділиться на 4."],
          ["Приклад: 124 — дивишся на ", em("24"), ", а 24 : 4 = 6."],
          ["На ", em("100"), ": число закінчується двома нулями."]
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
        { pl: "dzielna", ua: "ділене" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "iloraz", ua: "частка" },
        { pl: "reszta", ua: "остача" },
        { pl: "podzielność", ua: "подільність" },
        { pl: "cecha podzielności", ua: "ознака подільності" }
      ],
      phrases: [
        { pl: "Podziel z resztą.", ua: "Поділи з остачею." },
        { pl: "Czy liczba jest podzielna przez…?", ua: "Чи число ділиться на…?" },
        { pl: "Zapisz w postaci a = b · q + r.", ua: "Запиши у вигляді a = b · q + r." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Jaka reszta?",
        ua: "Яка остача?"
      },
      task: {
        id: "dzielpod-guided-29",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz resztę z dzielenia ", em("29 : 6"), ". Wpisz tylko resztę."],
          ua: ["Обчисли остачу від ділення ", em("29 : 6"), ". Введи лише остачу."]
        },
        answer: 5,
        hint: {
          pl: "Ile pełnych szóstek mieści się w 29? Potem zobacz, co zostaje.",
          ua: "Скільки повних шісток вміщається в 29? Потім подивись, що лишається."
        },
        explanation: {
          pl: "6 · 4 = 24, 29 − 24 = 5. Zapis: 29 = 6 · 4 + 5. Reszta 5 jest mniejsza od 6.",
          ua: "6 · 4 = 24, 29 − 24 = 5. Запис: 29 = 6 · 4 + 5. Остача 5 менша за 6."
        },
        mistakes: [
          {
            answer: 4,
            feedback: {
              pl: "4 to iloraz (ile szóstek), nie reszta.",
              ua: "4 — це частка (скільки шісток), не остача."
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
        pl: "20 : 6 = 2 r 8",
        ua: "20 : 6 = 2 r 8"
      },
      text: {
        pl: [
          ["Sprawdzenie: 6 · 2 + 8 = 20, liczby się zgadzają. Ale reszta ", em("8"), " jest większa od dzielnika ", em("6"), "."],
          "Z reszty 8 da się wyjąć jeszcze jedną szóstkę.",
          ["Prawidłowo: ", em("20 = 6 · 3 + 2"), "."]
        ],
        ua: [
          ["Перевірка: 6 · 2 + 8 = 20, числа сходяться. Але остача ", em("8"), " більша за дільник ", em("6"), "."],
          "З остачі 8 можна вийняти ще одну шістку.",
          ["Правильно: ", em("20 = 6 · 3 + 2"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dzielenie z resztą",
        ua: "Ділення з остачею"
      },
      task: {
        id: "dzielpod-45-7",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz resztę z dzielenia ", em("45 : 7"), ". Wpisz tylko resztę."],
          ua: ["Обчисли остачу від ділення ", em("45 : 7"), ". Введи лише остачу."]
        },
        answer: 3,
        hint: {
          pl: "7 · 6 = 42. Ile brakuje do 45?",
          ua: "7 · 6 = 42. Скільки бракує до 45?"
        },
        explanation: {
          pl: "7 · 6 = 42, 45 − 42 = 3. Zapis: 45 = 7 · 6 + 3.",
          ua: "7 · 6 = 42, 45 − 42 = 3. Запис: 45 = 7 · 6 + 3."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Cecha przez 9",
        ua: "Ознака на 9"
      },
      task: {
        id: "dzielpod-216-9",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Czy ", em("216"), " jest podzielne przez 9? Zaznacz prawda albo fałsz."],
          ua: ["Чи ", em("216"), " ділиться на 9? Познач правду або неправду."]
        },
        answer: true,
        hint: {
          pl: "Dodaj cyfry 2, 1 i 6. Czy ta suma dzieli się przez 9?",
          ua: "Додай цифри 2, 1 і 6. Чи ця сума ділиться на 9?"
        },
        explanation: {
          pl: "2 + 1 + 6 = 9, a 9 dzieli się przez 9, więc 216 też. 216 : 9 = 24.",
          ua: "2 + 1 + 6 = 9, а 9 ділиться на 9, тож 216 теж. 216 : 9 = 24."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Naklejki na kartkach",
        ua: "Наліпки на картках"
      },
      text: {
        pl: [
          ["Asia ma ", em("53"), " naklejki."],
          ["Na jedną kartkę mieści się ", em("8"), " naklejek."]
        ],
        ua: [
          ["Ася має ", em("53"), " наліпки."],
          ["На одну картку вміщається ", em("8"), " наліпок."]
        ]
      },
      task: {
        id: "dzielpod-stickers",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile naklejek zostanie po zapełnieniu pełnych kartek? Wpisz resztę z dzielenia ", em("53 : 8"), "."],
          ua: ["Скільки наліпок залишиться після заповнення повних карток? Введи остачу від ділення ", em("53 : 8"), "."]
        },
        answer: 5,
        hint: {
          pl: "8 · 6 = 48. Od 53 odejmij 48.",
          ua: "8 · 6 = 48. Від 53 відніми 48."
        },
        explanation: {
          pl: "53 = 8 · 6 + 5. Sześć pełnych kartek, zostaje 5 naklejek.",
          ua: "53 = 8 · 6 + 5. Шість повних карток, лишається 5 наліпок."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która reszta jest niemożliwa?",
        ua: "Яка остача неможлива?"
      },
      text: {
        pl: [
          "Nie licz żadnego dzielenia. Pomyśl tylko o umowie: reszta mniejsza od dzielnika."
        ],
        ua: [
          "Не рахуй жодного ділення. Подумай лише про угоду: остача менша за дільник."
        ]
      },
      task: {
        id: "dzielpod-impossible-r",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Przy dzieleniu przez ", em("6"), " która liczba nie może być resztą? Wybierz jedną."],
          ua: ["При діленні на ", em("6"), " яке число не може бути остачею? Вибери одне."]
        },
        options: [
          { id: "a", label: { pl: "0", ua: "0" } },
          { id: "b", label: { pl: "5", ua: "5" } },
          { id: "c", label: { pl: "6", ua: "6" } }
        ],
        answer: "c",
        hint: {
          pl: "Reszta musi być mniejsza od 6. Czy 6 jest mniejsze od 6?",
          ua: "Остача має бути менша за 6. Чи 6 менше за 6?"
        },
        explanation: {
          pl: "Wolno 0, 1, 2, 3, 4, 5. Reszta 6 znaczy: można wyjąć jeszcze jedną szóstkę i zapisać większy iloraz.",
          ua: "Можна 0, 1, 2, 3, 4, 5. Остача 6 означає: можна вийняти ще одну шістку і записати більшу частку."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Reszta 0 jest dozwolona — to dzielenie bez reszty.",
              ua: "Остача 0 дозволена — це ділення без остачі."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "5 < 6, więc 5 może być resztą, na przykład 11 = 6 · 1 + 5.",
              ua: "5 < 6, тож 5 може бути остачею, наприклад 11 = 6 · 1 + 5."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Reszta",
        ua: "Чи вже вмію? Остача"
      },
      task: {
        id: "dzielpod-check-17",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz resztę z dzielenia ", em("17 : 5"), ". Wpisz tylko resztę."],
          ua: ["Обчисли остачу від ділення ", em("17 : 5"), ". Введи лише остачу."]
        },
        answer: 2,
        hint: {
          pl: "Ile pełnych piątek jest w 17?",
          ua: "Скільки повних п’ятірок у 17?"
        },
        explanation: {
          pl: "5 · 3 = 15, 17 − 15 = 2. Zapis: 17 = 5 · 3 + 2.",
          ua: "5 · 3 = 15, 17 − 15 = 2. Запис: 17 = 5 · 3 + 2."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Cecha 4",
        ua: "Чи вже вмію? Ознака 4"
      },
      task: {
        id: "dzielpod-check-4",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Która liczba jest podzielna przez 4? Patrz na dwie ostatnie cyfry."],
          ua: ["Яке число ділиться на 4? Дивись на дві останні цифри."]
        },
        options: [
          { id: "a", label: { pl: "270", ua: "270" } },
          { id: "b", label: { pl: "124", ua: "124" } },
          { id: "c", label: { pl: "218", ua: "218" } }
        ],
        answer: "b",
        hint: {
          pl: "Dla 270 patrzysz na 70. Dla 124 na 24. Dla 218 na 18.",
          ua: "Для 270 дивишся на 70. Для 124 на 24. Для 218 на 18."
        },
        explanation: {
          pl: "24 : 4 = 6, więc 124 dzieli się przez 4. 70 = 4 · 17 + 2, 18 = 4 · 4 + 2 — te nie.",
          ua: "24 : 4 = 6, тож 124 ділиться на 4. 70 = 4 · 17 + 2, 18 = 4 · 4 + 2 — ті ні."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "270 kończy się zerem, więc dzieli się przez 2 i 10, ale 70 nie dzieli się przez 4.",
              ua: "270 кінчається нулем, тож ділиться на 2 і 10, але 70 не ділиться на 4."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "18 : 4 = 4 r 2. Ostatnie dwie cyfry nie wystarczają.",
              ua: "18 : 4 = 4 r 2. Останніх двох цифр не вистачає."
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
      formula: "a = b · q + r,   0 ≤ r < b",
      text: {
        pl: [
          "Reszta zawsze mniejsza od dzielnika. Zero reszty znaczy: dzieli się.",
          "2, 5, 10 — ostatnia cyfra. 3 i 9 — suma cyfr. 4 i 100 — ostatnie dwie cyfry."
        ],
        ua: [
          "Остача завжди менша за дільник. Нульова остача означає: ділиться.",
          "2, 5, 10 — остання цифра. 3 і 9 — сума цифр. 4 і 100 — останні дві цифри."
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
          "Później znów usłyszysz: „Czy liczba jest podzielna przez…?” i „podziel z resztą”.",
          "To nie nowy materiał — krótka powtórka cechy i wzoru z r."
        ],
        ua: [
          "Пізніше знову почуєш: «Чи число ділиться на…?» і «поділи з остачею».",
          "Це не новий матеріал — коротке повторення ознаки і формули з r."
        ]
      }
    }
  ]
};
