function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Czas, który trzeba umieć przeliczyć",
        ua: "Час, який треба вміти переводити"
      },
      formula: "1 h = 60 min = 3600 s",
      text: {
        pl: [
          "Film, przerwa, pociąg po północy, data na kalendarzu.",
          "Dziś składamy godziny, minuty i dni tak, żeby wynik miał sens — nie „1 h 80 min”."
        ],
        ua: [
          "Фільм, перерва, потяг після півночі, дата в календарі.",
          "Сьогодні складаємо години, хвилини і дні так, щоб результат мав сенс — не «1 год 80 хв»."
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
        { pl: "przeliczać godziny, minuty i sekundy", ua: "переводити години, хвилини і секунди" },
        { pl: "dodać czas, gdy przekraczamy pełną godzinę", ua: "додати час, коли переходимо повну годину" },
        { pl: "przejść przez północ i nazwać następną dobę", ua: "перейти через північ і назвати наступну добу" },
        { pl: "łączyć dni, tygodnie, miesiące i lata", ua: "поєднувати дні, тижні, місяці і роки" },
        { pl: "odrzucić zapis czasu, który nie ma sensu", ua: "відкинути запис часу, який не має сенсу" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Te same minuty, inny zapis",
        ua: "Ті самі хвилини — інший запис"
      },
      formula: "80 min = 1 h 20 min",
      text: {
        pl: [
          "Osiemdziesiąt minut to nie „godzina osiemdziesiąt”.",
          "W godzinie jest tylko 60 minut. Nadwyżkę przenosimy dalej.",
          "Popatrz najpierw na jednostki — jeszcze nic nie licz na zegarze."
        ],
        ua: [
          "Вісімдесят хвилин — це не «година вісімдесят».",
          "У годині лише 60 хвилин. Надлишок переносимо далі.",
          "Спочатку подивись на одиниці — ще нічого не рахуй на годиннику."
        ]
      },
      items: [
        { pl: "1 min = 60 s", ua: "1 хв = 60 с" },
        { pl: "1 h = 60 min", ua: "1 год = 60 хв" },
        { pl: "1 doba = 24 h", ua: "1 доба = 24 год" },
        { pl: "1 tydzień = 7 dni", ua: "1 тиждень = 7 днів" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Godzina, minuta, sekunda",
        ua: "Година, хвилина, секунда"
      },
      formula: "2 h 15 min = 135 min",
      text: {
        pl: [
          ["Żeby dodać czasy, najpierw sprowadź je do ", em("jednej"), " jednostki."],
          ["2 godziny to ", em("120"), " minut. Plus 15 minut daje 135 minut."],
          "Potem, jeśli trzeba, znowu zapisujemy godzinami i minutami: pełne 60 minut to kolejna godzina."
        ],
        ua: [
          ["Щоб додати часи, спочатку зведи їх до ", em("однієї"), " одиниці."],
          ["2 години — це ", em("120"), " хвилин. Плюс 15 хвилин дає 135 хвилин."],
          "Потім, якщо треба, знову записуємо годинами і хвилинами: повні 60 хвилин — наступна година."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak dodać 1 h 50 min i 25 min?",
        ua: "Як додати 1 год 50 хв і 25 хв?"
      },
      reveal: true,
      steps: [
        { formula: "1 h 50 min + 25 min" },
        {
          formula: "50 min + 25 min = 75 min",
          text: {
            pl: "Minuty dodajemy osobno. 75 to więcej niż 60 — przekraczamy godzinę.",
            ua: "Хвилини додаємо окремо. 75 більше ніж 60 — переходимо годину."
          }
        },
        { formula: "75 min = 1 h 15 min" },
        {
          formula: "1 h + 1 h 15 min = 2 h 15 min",
          text: {
            pl: ["Wynik: ", em("2 h 15 min"), ". Nie zostawiamy 1 h 75 min."],
            ua: ["Результат: ", em("2 год 15 хв"), ". Не залишаємо 1 год 75 хв."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Przez pełną godzinę i przez północ",
        ua: "Через повну годину і через північ"
      },
      formula: "23:50 + 20 min = 0:10",
      text: {
        pl: [
          ["Na zegarze po 59. minucie wracamy do ", em("0"), " i dodajemy 1 godzinę."],
          ["Po godzinie 23 jest ", em("0"), " następnej doby — to północ, nie 24:10."],
          "Data też się zmienia: 23:50 we wtorek plus 20 min to 0:10 w środę."
        ],
        ua: [
          ["На годиннику після 59-ї хвилини повертаємось до ", em("0"), " і додаємо 1 годину."],
          ["Після 23-ї години є ", em("0"), " наступної доби — це північ, не 24:10."],
          "Дата теж змінюється: 23:50 у вівторок плюс 20 хв — це 0:10 у середу."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Pociąg o 23:40, jazda 50 minut",
        ua: "Потяг о 23:40, їзда 50 хвилин"
      },
      reveal: true,
      steps: [
        { formula: "23:40 + 50 min" },
        {
          formula: "40 + 50 = 90 min = 1 h 30 min",
          text: {
            pl: "Od 23:40 przesuwamy o godzinę i jeszcze 30 minut.",
            ua: "Від 23:40 зсуваємо на годину і ще 30 хвилин."
          }
        },
        {
          formula: "0:10",
          text: {
            pl: ["23 + 1 h to już następna doba. 0 godzin i 10 minut, czyli ", em("0:10"), "."],
            ua: ["23 + 1 год — це вже наступна доба. 0 годин і 10 хвилин, тобто ", em("0:10"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Dni, tygodnie, miesiące, lata",
        ua: "Дні, тижні, місяці, роки"
      },
      text: {
        pl: [
          "Tydzień ma zawsze 7 dni. Doba ma 24 godziny.",
          "Miesiące mają 28, 29, 30 albo 31 dni — przy datach liczysz po kalendarzu, nie „po 30”.",
          "Zwykły rok ma 365 dni, rok przestępny 366 (luty ma wtedy 29 dni)."
        ],
        ua: [
          "Тиждень завжди має 7 днів. Доба має 24 години.",
          "Місяці мають 28, 29, 30 або 31 день — при датах рахуєш за календарем, не «по 30».",
          "Звичайний рік має 365 днів, високосний — 366 (лютий тоді має 29 днів)."
        ]
      },
      items: [
        { pl: "styczeń, marzec, maj, lipiec, sierpień, październik, grudzień — 31 dni", ua: "січень, березень, травень, липень, серпень, жовтень, грудень — 31 день" },
        { pl: "kwiecień, czerwiec, wrzesień, listopad — 30 dni", ua: "квітень, червень, вересень, листопад — 30 днів" },
        { pl: "luty — 28 albo 29 dni", ua: "лютий — 28 або 29 днів" }
      ]
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "godzina (h)", ua: "година (год)" },
        { pl: "minuta (min)", ua: "хвилина (хв)" },
        { pl: "sekunda (s)", ua: "секунда (с)" },
        { pl: "doba", ua: "доба" },
        { pl: "tydzień", ua: "тиждень" },
        { pl: "miesiąc", ua: "місяць" },
        { pl: "rok przestępny", ua: "високосний рік" },
        { pl: "północ", ua: "північ" }
      ],
      phrases: [
        { pl: "Przelicz na minuty.", ua: "Переведи на хвилини." },
        { pl: "Podaj godzinę po upływie tego czasu.", ua: "Назви годину після спливу цього часу." },
        { pl: "Który zapis nie ma sensu?", ua: "Який запис не має сенсу?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Przelicz na minuty",
        ua: "Переведи на хвилини"
      },
      task: {
        id: "kal-guided-min",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile minut to ", em("2 h 10 min"), "? Wpisz samą liczbę minut."],
          ua: ["Скільки хвилин у ", em("2 год 10 хв"), "? Введи лише число хвилин."]
        },
        answer: 130,
        hint: {
          pl: "1 h = 60 min. Najpierw godziny, potem dodaj 10.",
          ua: "1 год = 60 хв. Спочатку години, потім додай 10."
        },
        explanation: {
          pl: "2 · 60 = 120, plus 10 minut daje 130 minut.",
          ua: "2 · 60 = 120, плюс 10 хвилин дає 130 хвилин."
        },
        mistakes: [
          {
            answer: 210,
            feedback: {
              pl: "To sklejenie cyfr, nie przeliczenie. 2 godziny to 120 minut, nie 200.",
              ua: "Це склеювання цифр, не переведення. 2 години — 120 хвилин, не 200."
            }
          },
          {
            answer: 70,
            feedback: {
              pl: "Policzyłeś tylko jedną godzinę i 10 minut. Drugą godzinę też zamień: +60.",
              ua: "Порахував лише одну годину і 10 хвилин. Другу годину теж замініть: +60."
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
        pl: "1 h 80 min",
        ua: "1 год 80 хв"
      },
      text: {
        pl: [
          "Minut nie może być osiemdziesiąt w zapisie godziny.",
          ["80 min = 1 h 20 min, więc całość to ", em("2 h 20 min"), "."],
          "Taki zapis odrzucamy — jest poprawny rachunkowo dopiero po przeniesieniu."
        ],
        ua: [
          "Хвилин не може бути вісімдесят у записі години.",
          ["80 хв = 1 год 20 хв, тож разом це ", em("2 год 20 хв"), "."],
          "Такий запис відкидаємо — він правильний лише після перенесення."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Przez pełną godzinę",
        ua: "Через повну годину"
      },
      task: {
        id: "kal-cross-hour",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Jest ", em("8:50"), ". Mija ", em("25"), " minut. Która jest godzina? Wpisz jak na zegarze, na przykład ", em("9:15"), "."],
          ua: ["Зараз ", em("8:50"), ". Минає ", em("25"), " хвилин. Котра година? Введи як на годиннику, наприклад ", em("9:15"), "."]
        },
        answer: ["9:15", "09:15"],
        hint: {
          pl: "Od 8:50 do 9:00 jest 10 minut. Zostało jeszcze 15 minut.",
          ua: "Від 8:50 до 9:00 є 10 хвилин. Залишилось ще 15 хвилин."
        },
        explanation: {
          pl: "50 + 25 = 75 min = 1 h 15 min. 8 h + 1 h 15 min = 9:15.",
          ua: "50 + 25 = 75 хв = 1 год 15 хв. 8 год + 1 год 15 хв = 9:15."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Tygodnie na dni",
        ua: "Тижні на дні"
      },
      task: {
        id: "kal-weeks-days",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile dni to ", em("2"), " tygodnie i ", em("4"), " dni? Wpisz liczbę dni."],
          ua: ["Скільки днів у ", em("2"), " тижнях і ", em("4"), " днях? Введи число днів."]
        },
        answer: 18,
        hint: {
          pl: "Tydzień ma 7 dni.",
          ua: "Тиждень має 7 днів."
        },
        explanation: {
          pl: "2 · 7 = 14, plus 4 dni daje 18 dni.",
          ua: "2 · 7 = 14, плюс 4 дні дає 18 днів."
        },
        mistakes: [
          {
            answer: 24,
            feedback: {
              pl: "To byłoby 2 · 10 + 4. Tydzień ma 7 dni, nie 10.",
              ua: "Так було б 2 · 10 + 4. Тиждень має 7 днів, не 10."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Film i przerwa",
        ua: "Фільм і перерва"
      },
      text: {
        pl: [
          ["Seans trwa ", em("1 h 42 min"), ". Po filmie jest jeszcze przerwa ", em("18 min"), "."],
          "Ile czasu minie od startu do wyjścia z sali?"
        ],
        ua: [
          ["Сеанс триває ", em("1 год 42 хв"), ". Після фільму ще перерва ", em("18 хв"), "."],
          "Скільки часу мине від початку до виходу із залу?"
        ]
      },
      task: {
        id: "kal-film-break",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile minut minie od startu do wyjścia? Wpisz samą liczbę minut.",
          ua: "Скільки хвилин мине від початку до виходу? Введи лише число хвилин."
        },
        answer: 120,
        hint: {
          pl: "1 h = 60 min. Dodaj 42 i 18, potem dołącz godzinę filmu.",
          ua: "1 год = 60 хв. Додай 42 і 18, потім долучи годину фільму."
        },
        explanation: {
          pl: "1 h = 60 min, 42 + 18 = 60 min. Razem 60 + 60 = 120 minut, czyli 2 h.",
          ua: "1 год = 60 хв, 42 + 18 = 60 хв. Разом 60 + 60 = 120 хвилин, тобто 2 год."
        },
        mistakes: [
          {
            answer: 60,
            feedback: {
              pl: "To tylko 42 + 18. Film ma jeszcze pełną godzinę: +60 min.",
              ua: "Це лише 42 + 18. Фільм має ще повну годину: +60 хв."
            }
          },
          {
            answer: 102,
            feedback: {
              pl: "To sam film bez przerwy: 60 + 42. Dodaj jeszcze 18 minut.",
              ua: "Це сам фільм без перерви: 60 + 42. Додай ще 18 хвилин."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Data na kalendarzu",
        ua: "Дата в календарі"
      },
      text: {
        pl: [
          ["Wyjazd jest ", em("25 marca"), ". Wracamy po ", em("10"), " dniach."],
          "Marzec ma 31 dni. Którego dnia wracamy?"
        ],
        ua: [
          ["Виїзд ", em("25 березня"), ". Повертаємось за ", em("10"), " днів."],
          "Березень має 31 день. Якого дня повертаємось?"
        ]
      },
      task: {
        id: "kal-date-march",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Którego dnia wracamy?",
          ua: "Якого дня повертаємось?"
        },
        options: [
          { id: "a", label: { pl: "4 kwietnia", ua: "4 квітня" } },
          { id: "b", label: { pl: "5 kwietnia", ua: "5 квітня" } },
          { id: "c", label: { pl: "7 kwietnia", ua: "7 квітня" } }
        ],
        answer: "a",
        hint: {
          pl: "Od 25 do 31 marca zostaje kilka dni. Resztę dolicz już w kwietniu.",
          ua: "Від 25 до 31 березня лишається кілька днів. Решту долічи вже в квітні."
        },
        explanation: {
          pl: "Do końca marca: 31 − 25 = 6 dni. Zostaje 10 − 6 = 4 dni kwietnia, czyli 4 kwietnia.",
          ua: "До кінця березня: 31 − 25 = 6 днів. Лишається 10 − 6 = 4 дні квітня, тобто 4 квітня."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To byłoby 11 dni albo pomyłka „31 − 25 = 5”. Od 25 do 31 włącznie zostaje 6 dni.",
              ua: "Так було б 11 днів або помилка «31 − 25 = 5». Від 25 до 31 лишається 6 днів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Policzyłeś marzec jak 30-dniowy albo dodałeś 10 do 25 i zostawiłeś marzec.",
              ua: "Порахував березень як 30-денний або додав 10 до 25 і залишив березень."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który zapis jest bez sensu?",
        ua: "Який запис безглуздий?"
      },
      text: {
        pl: [
          "Nie licz wartości. Popatrz, czy jednostki mogą tak stać obok siebie."
        ],
        ua: [
          "Не рахуй значення. Подивись, чи одиниці можуть так стояти поруч."
        ]
      },
      task: {
        id: "kal-nonsense",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zapis czasu jest niemożliwy jako poprawna odpowiedź?",
          ua: "Який запис часу неможливий як правильна відповідь?"
        },
        options: [
          { id: "a", label: { pl: "2 h 15 min", ua: "2 год 15 хв" } },
          { id: "b", label: { pl: "1 h 80 min", ua: "1 год 80 хв" } },
          { id: "c", label: { pl: "90 min", ua: "90 хв" } }
        ],
        answer: "b",
        hint: {
          pl: "W zapisie „godziny i minuty” minut jest mniej niż 60.",
          ua: "У записі «години і хвилини» хвилин менше ніж 60."
        },
        explanation: {
          pl: "1 h 80 min łamie umowę zapisu: 80 min = 1 h 20 min, więc całość to 2 h 20 min. Samo 90 min jest w porządku — to po prostu minuty.",
          ua: "1 год 80 хв ламає угоду запису: 80 хв = 1 год 20 хв, тож разом 2 год 20 хв. Самі 90 хв — нормально, це просто хвилини."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "2 h 15 min jest w porządku: minut jest 15, mniej niż 60.",
              ua: "2 год 15 хв — нормально: хвилин 15, менше ніж 60."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "90 minut to po prostu 90 minut. Można potem zapisać 1 h 30 min, ale sam zapis w minutach ma sens.",
              ua: "90 хвилин — це просто 90 хвилин. Можна потім записати 1 год 30 хв, але сам запис у хвилинах має сенс."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Minuty",
        ua: "Чи вже вмію? Хвилини"
      },
      task: {
        id: "kal-check-min",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile sekund to ", em("3 min"), "? Wpisz liczbę sekund."],
          ua: ["Скільки секунд у ", em("3 хв"), "? Введи число секунд."]
        },
        answer: 180,
        hint: {
          pl: "1 min = 60 s.",
          ua: "1 хв = 60 с."
        },
        explanation: {
          pl: "3 · 60 = 180 sekund.",
          ua: "3 · 60 = 180 секунд."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Północ",
        ua: "Чи вже вмію? Північ"
      },
      task: {
        id: "kal-check-midnight",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jest ", em("23:40"), ". Mija ", em("35"), " minut. Która jest godzina? Wpisz jak na zegarze, na przykład ", em("0:15"), "."],
          ua: ["Зараз ", em("23:40"), ". Минає ", em("35"), " хвилин. Котра година? Введи як на годиннику, наприклад ", em("0:15"), "."]
        },
        answer: ["0:15", "00:15"],
        hint: {
          pl: "40 + 35 = 75 min. To 1 h 15 min po 23:00 — już następna doba.",
          ua: "40 + 35 = 75 хв. Це 1 год 15 хв після 23:00 — вже наступна доба."
        },
        explanation: {
          pl: "23:40 + 35 min = 0:15. Nie piszemy 24:15.",
          ua: "23:40 + 35 хв = 0:15. Не пишемо 24:15."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "60 s = 1 min,  60 min = 1 h,  24 h = 1 doba",
      text: {
        pl: [
          "Minut w zapisie godziny jest mniej niż 60. Nadwyżkę przenosimy.",
          "Przez północ godzina wraca do 0 i zmienia się data.",
          "Tydzień ma 7 dni. Miesiące liczysz po kalendarzu."
        ],
        ua: [
          "Хвилин у записі години менше ніж 60. Надлишок переносимо.",
          "Через північ година повертається до 0 і змінюється дата.",
          "Тиждень має 7 днів. Місяці рахуєш за календарем."
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
          "Później znów usłyszysz: „ile to minut?” i „którego dnia?”.",
          "To nie nowy materiał — krótka powtórka zegara i kalendarza."
        ],
        ua: [
          "Пізніше знову почуєш: «скільки це хвилин?» і «якого дня?».",
          "Це не новий матеріал — коротке повторення годинника і календаря."
        ]
      }
    }
  ]
};
