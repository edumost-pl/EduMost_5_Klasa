function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Kredki do pudełek",
        ua: "Олівці в коробки"
      },
      formula: "84 : 4",
      text: {
        pl: [
          ["Jest ", em("84"), " kredek i pudełka po ", em("4"), "."],
          "W głowie idzie opornie. W słupku — miejsce po miejscu, od lewej.",
          "Na końcu zawsze sprawdzenie: iloraz razy dzielnik."
        ],
        ua: [
          ["Є ", em("84"), " олівців і коробки по ", em("4"), "."],
          "У голові йде туго. У стовпчику — місце за місцем, зліва.",
          "Наприкінці завжди перевірка: частка помножена на дільник."
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
        { pl: "dzielić pisemnie przez 1–2 cyfry", ua: "ділити письмово на 1–2 цифри" },
        { pl: "nie zgubić zera w ilorazie", ua: "не загубити нуль у частці" },
        { pl: "sprawdzić dzielenie mnożeniem", ua: "перевірити ділення множенням" },
        { pl: "odrzucić iloraz, który jest niemożliwy", ua: "відкинути частку, яка неможлива" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Od lewej, po kawałku",
        ua: "Зліва, по шматочках"
      },
      text: {
        pl: [
          ["Najpierw patrzysz, ile razy dzielnik mieści się w pierwszych cyfrach."],
          ["Przy ", em("84 : 4"), " czwórka wchodzi w 8 dwa razy. Potem w 4 — raz."],
          "Iloraz rośnie cyfra po cyfrze, nie od końca."
        ],
        ua: [
          ["Спочатку дивишся, скільки разів дільник вміщається в перших цифрах."],
          ["При ", em("84 : 4"), " четвірка входить у 8 двічі. Потім у 4 — раз."],
          "Частка росте цифра за цифрою, не з кінця."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Sprawdzenie: q · b + r = a",
        ua: "Перевірка: q · b + r = a"
      },
      formula: "iloraz · dzielnik + reszta = dzielna",
      text: {
        pl: [
          "Po słupku nie zgadujesz, czy wyszło. Mnożysz z powrotem.",
          "Jeśli jest reszta — dodajesz ją. Ma wyjść dzielna."
        ],
        ua: [
          "Після стовпчика не вгадуєш, чи вийшло. Множиш назад.",
          "Якщо є остача — додаєш її. Має вийти ділене."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 84 : 4",
        ua: "Крок за кроком: 84 : 4"
      },
      reveal: true,
      steps: [
        { formula: "84 : 4" },
        {
          formula: "8 : 4 = 2",
          text: {
            pl: "Pierwsza cyfra ilorazu: 2. 2 · 4 = 8, odejmujesz, zostaje 0.",
            ua: "Перша цифра частки: 2. 2 · 4 = 8, віднімаєш, лишається 0."
          }
        },
        {
          formula: "4 : 4 = 1",
          text: {
            pl: "Ściągasz 4. Druga cyfra ilorazu: 1.",
            ua: "Знімаєш 4. Друга цифра частки: 1."
          }
        },
        {
          formula: "21 · 4 = 84",
          text: {
            pl: [em("84 : 4"), " = ", em("21"), ". Sprawdzenie mnożeniem się zgadza."],
            ua: [em("84 : 4"), " = ", em("21"), ". Перевірка множенням сходиться."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Gdy w środku za mało: 816 : 4",
        ua: "Коли в середині замало: 816 : 4"
      },
      reveal: true,
      steps: [
        { formula: "816 : 4" },
        {
          formula: "8 : 4 = 2",
          text: {
            pl: "Pierwsza cyfra: 2. Zostaje 0, ściągasz 1.",
            ua: "Перша цифра: 2. Лишається 0, знімаєш 1."
          }
        },
        {
          formula: "1 < 4  →  0 w ilorazie",
          text: {
            pl: ["Jedynka jest za mała. Zapisujesz ", em("0"), " w ilorazie i ściągasz 6. Teraz 16."],
            ua: ["Одиниця замала. Записуєш ", em("0"), " у частці і знімаєш 6. Тепер 16."]
          }
        },
        {
          formula: "16 : 4 = 4",
          text: {
            pl: [em("816 : 4"), " = ", em("204"), ". Sprawdzenie: 204 · 4 = 816."],
            ua: [em("816 : 4"), " = ", em("204"), ". Перевірка: 204 · 4 = 816."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Dzielnik dwucyfrowy: 96 : 12",
        ua: "Двоцифровий дільник: 96 : 12"
      },
      reveal: true,
      steps: [
        { formula: "96 : 12" },
        {
          formula: "12 · 8 = 96",
          text: {
            pl: "12 nie wchodzi w 9. Bierzesz 96. Próbujesz 8, bo 12 · 8 = 96.",
            ua: "12 не входить у 9. Береш 96. Пробуєш 8, бо 12 · 8 = 96."
          }
        },
        {
          formula: "8 · 12 = 96",
          text: {
            pl: [em("96 : 12"), " = ", em("8"), ". Reszty nie ma."],
            ua: [em("96 : 12"), " = ", em("8"), ". Остачі немає."]
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
        { pl: "dzielenie pisemne", ua: "письмове ділення" },
        { pl: "dzielna", ua: "ділене" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "iloraz", ua: "частка" },
        { pl: "reszta", ua: "остача" }
      ],
      phrases: [
        { pl: "Podziel pisemnie.", ua: "Поділи письмово." },
        { pl: "Sprawdź mnożeniem.", ua: "Перевір множенням." },
        { pl: "Ile zostanie?", ua: "Скільки залишиться?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Podziel 72 : 3",
        ua: "Поділи 72 : 3"
      },
      task: {
        id: "dzielpis-guided-72",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("72 : 3"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("72 : 3"), ". Введи частку."]
        },
        answer: 24,
        hint: {
          pl: "Ile trójek mieści się w 7? Potem ściągnij 2.",
          ua: "Скільки трійок вміщається в 7? Потім зніми 2."
        },
        explanation: {
          pl: "7 : 3 = 2 r 1. Ściągasz 2 → 12 : 3 = 4. Iloraz 24. Sprawdzenie: 24 · 3 = 72.",
          ua: "7 : 3 = 2 r 1. Знімаєш 2 → 12 : 3 = 4. Частка 24. Перевірка: 24 · 3 = 72."
        },
        mistakes: [
          {
            answer: 21,
            feedback: {
              pl: "Po 2 w ilorazie zostaje reszta 1. Z 12 wychodzi 4, nie 1.",
              ua: "Після 2 у частці лишається остача 1. З 12 виходить 4, не 1."
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
        pl: "816 : 4 = 24",
        ua: "816 : 4 = 24"
      },
      text: {
        pl: [
          ["Ktoś podzielił 8 i 16, a zero w środku pominął."],
          ["Sprawdzenie demaskuje: 24 · 4 = ", em("96"), ", nie 816."],
          ["Gdy 1 nie dzieli się przez 4, w ilorazie musi stanąć ", em("0"), ": wynik to ", em("204"), "."]
        ],
        ua: [
          ["Хтось поділив 8 і 16, а нуль у середині пропустив."],
          ["Перевірка викриває: 24 · 4 = ", em("96"), ", не 816."],
          ["Коли 1 не ділиться на 4, у частці має стати ", em("0"), ": результат ", em("204"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Bez reszty",
        ua: "Без остачі"
      },
      task: {
        id: "dzielpis-96-8",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("96 : 8"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("96 : 8"), ". Введи частку."]
        },
        answer: 12,
        hint: {
          pl: "8 nie wchodzi w 9? Wchodzi raz. Potem ściągnij 6.",
          ua: "8 не входить у 9? Входить раз. Потім зніми 6."
        },
        explanation: {
          pl: "9 : 8 = 1 r 1. 16 : 8 = 2. Iloraz 12. Sprawdzenie: 12 · 8 = 96.",
          ua: "9 : 8 = 1 r 1. 16 : 8 = 2. Частка 12. Перевірка: 12 · 8 = 96."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Zero w ilorazie",
        ua: "Нуль у частці"
      },
      task: {
        id: "dzielpis-505-5",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("505 : 5"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("505 : 5"), ". Введи частку."]
        },
        answer: 101,
        hint: {
          pl: "Po pierwszej cyfrze ściągasz 0. Czy 0 dzieli się przez 5? Jaka cyfra wtedy stoi w ilorazie?",
          ua: "Після першої цифри знімаєш 0. Чи 0 ділиться на 5? Яка цифра тоді стоїть у частці?"
        },
        explanation: {
          pl: "5 : 5 = 1, 0 : 5 = 0, 5 : 5 = 1. Iloraz 101. Sprawdzenie: 101 · 5 = 505.",
          ua: "5 : 5 = 1, 0 : 5 = 0, 5 : 5 = 1. Частка 101. Перевірка: 101 · 5 = 505."
        },
        mistakes: [
          {
            answer: 11,
            feedback: {
              pl: "Zginęło zero w środku. 11 · 5 = 55, nie 505.",
              ua: "Зник нуль у середині. 11 · 5 = 55, не 505."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Naklejki, które zostaną",
        ua: "Наліпки, що залишаться"
      },
      text: {
        pl: [
          ["W klasie jest ", em("250"), " naklejek."],
          ["Na jedną kartę wróżek mieści się ", em("12"), " sztuk."]
        ],
        ua: [
          ["У класі є ", em("250"), " наліпок."],
          ["На одну картку фей вміщається ", em("12"), " штук."]
        ]
      },
      task: {
        id: "dzielpis-leftover",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile naklejek zostanie po zapełnieniu pełnych kart? Wpisz resztę z dzielenia ", em("250 : 12"), "."],
          ua: ["Скільки наліпок залишиться після заповнення повних карт? Введи остачу від ділення ", em("250 : 12"), "."]
        },
        answer: 10,
        hint: {
          pl: "12 · 20 = 240. Ile brakuje do 250?",
          ua: "12 · 20 = 240. Скільки бракує до 250?"
        },
        explanation: {
          pl: "250 : 12 = 20 r 10, bo 12 · 20 + 10 = 250. Zostaje 10 naklejek.",
          ua: "250 : 12 = 20 r 10, бо 12 · 20 + 10 = 250. Лишається 10 наліпок."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Dlaczego ten iloraz odpada?",
        ua: "Чому ця частка відпадає?"
      },
      text: {
        pl: [
          "Nie musisz stawiać całego słupka. Sprawdzenie mnożeniem wystarczy."
        ],
        ua: [
          "Не треба ставити весь стовпчик. Перевірки множенням досить."
        ]
      },
      task: {
        id: "dzielpis-impossible-q",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Ktoś napisał ", em("96 : 8 = 8"), ". Dlaczego iloraz 8 jest niemożliwy? Wybierz wyjaśnienie."],
          ua: ["Хтось написав ", em("96 : 8 = 8"), ". Чому частка 8 неможлива? Вибери пояснення."]
        },
        options: [
          { id: "a", label: { pl: "Bo 8 · 8 = 64, a 64 ≠ 96", ua: "Бо 8 · 8 = 64, а 64 ≠ 96" } },
          { id: "b", label: { pl: "Bo 96 jest nieparzyste", ua: "Бо 96 непарне" } },
          { id: "c", label: { pl: "Bo w ilorazie zawsze musi być zero", ua: "Бо в частці завжди має бути нуль" } }
        ],
        answer: "a",
        hint: {
          pl: "Pomnóż proponowany iloraz przez dzielnik. Czy wracasz do 96?",
          ua: "Помнож запропоновану частку на дільник. Чи повертаєшся до 96?"
        },
        explanation: {
          pl: "Sprawdzenie: 8 · 8 = 64, nie 96. Trafiony iloraz to 12, bo 12 · 8 = 96.",
          ua: "Перевірка: 8 · 8 = 64, не 96. Правильна частка — 12, бо 12 · 8 = 96."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "96 kończy się cyfrą 6 — jest parzyste. Problem jest w mnożeniu w drugą stronę.",
              ua: "96 кінчається цифрою 6 — воно парне. Проблема в множенні назад."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zero w ilorazie pojawia się tylko, gdy kolejny kawałek jest za mały. Tu 96 : 8 = 12, bez zera.",
              ua: "Нуль у частці з’являється лише тоді, коли наступний шматок замалий. Тут 96 : 8 = 12, без нуля."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Iloraz",
        ua: "Чи вже вмію? Частка"
      },
      task: {
        id: "dzielpis-check-48",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("48 : 4"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("48 : 4"), ". Введи частку."]
        },
        answer: 12,
        hint: {
          pl: "4 wchodzi w 4 raz. Potem w 8 — dwa razy. Albo sprawdź: ? · 4 = 48.",
          ua: "4 входить у 4 раз. Потім у 8 — двічі. Або перевір: ? · 4 = 48."
        },
        explanation: {
          pl: "4 : 4 = 1, 8 : 4 = 2. Iloraz 12. Sprawdzenie: 12 · 4 = 48.",
          ua: "4 : 4 = 1, 8 : 4 = 2. Частка 12. Перевірка: 12 · 4 = 48."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Zero na końcu ilorazu",
        ua: "Чи вже вмію? Нуль у кінці частки"
      },
      task: {
        id: "dzielpis-check-630",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("630 : 3"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("630 : 3"), ". Введи частку."]
        },
        answer: 210,
        hint: {
          pl: "6 : 3, potem 3 : 3, potem 0 : 3. Ostatnia cyfra ilorazu nie może zginąć.",
          ua: "6 : 3, потім 3 : 3, потім 0 : 3. Остання цифра частки не може зникнути."
        },
        explanation: {
          pl: "6 : 3 = 2, 3 : 3 = 1, 0 : 3 = 0. Iloraz 210. Sprawdzenie: 210 · 3 = 630.",
          ua: "6 : 3 = 2, 3 : 3 = 1, 0 : 3 = 0. Частка 210. Перевірка: 210 · 3 = 630."
        },
        mistakes: [
          {
            answer: 21,
            feedback: {
              pl: "Brakuje zera z 0 : 3. 21 · 3 = 63, nie 630.",
              ua: "Бракує нуля з 0 : 3. 21 · 3 = 63, не 630."
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
      formula: "816 : 4 = 204",
      text: {
        pl: [
          "Dzielenie pisemne idzie od lewej. Gdy kawałek jest za mały — w ilorazie stoi 0.",
          "Zawsze sprawdź: iloraz · dzielnik + reszta = dzielna.",
          "Jeśli mnożenie nie wraca do dzielnej, iloraz jest niemożliwy."
        ],
        ua: [
          "Письмове ділення йде зліва. Коли шматок замалий — у частці стоїть 0.",
          "Завжди перевір: частка · дільник + остача = ділене.",
          "Якщо множення не повертає до діленого, частка неможлива."
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
          "Później znów usłyszysz: „Podziel pisemnie” i „sprawdź mnożeniem”.",
          "To nie nowy materiał — krótka powtórka słupka i zera w ilorazie."
        ],
        ua: [
          "Пізніше знову почуєш: «Поділи письмово» і «перевір множенням».",
          "Це не новий матеріал — коротке повторення стовпчика і нуля в частці."
        ]
      }
    }
  ]
};
