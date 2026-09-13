function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dlaczego w metrze kwadratowym jest 10 000 centymetrów kwadratowych",
        ua: "Чому в квадратному метрі 10 000 квадратних сантиметрів"
      },
      formula: "1 m² = 10 000 cm²",
      text: {
        pl: [
          "1 m = 100 cm. To długość jednego boku kwadratu.",
          "Pole kwadratu to bok razy bok: 100 · 100. Nie 100."
        ],
        ua: [
          "1 m = 100 cm. Це довжина одного боку квадрата.",
          "Площа квадрата — сторона на сторону: 100 · 100. Не 100."
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
        { pl: "rozróżnić cm², m², ar, hektar", ua: "розрізняти cm², m², ar, гектар" },
        { pl: "wyjaśnić 1 m² = 10 000 cm² przez 100 · 100", ua: "пояснити 1 m² = 10 000 cm² через 100 · 100" },
        { pl: "zamieniać pole jedną parą jednostek — bez łańcucha w jednym rachunku", ua: "перетворити площу однією парою одиниць — без ланцюжка в одному рахунку" },
        { pl: "policzyć pole pokoju lub ogrodu w m² albo arach", ua: "порахувати площу кімнати або саду в m² або арах" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Kwadrat 1 m na 1 m",
        ua: "Квадрат 1 m на 1 m"
      },
      visual: { kind: "quad", quad: "square", label: { pl: "bok 1 m = 100 cm", ua: "сторона 1 m = 100 cm" } },
      prompt: {
        pl: [
          "Bok ma 100 cm. Na drugim boku też 100 cm.",
          "Ile kratek 1 cm × 1 cm zmieści się w tym kwadracie? Nie 100 — rzędy razy kolumny."
        ],
        ua: [
          "Сторона має 100 cm. На другій стороні теж 100 cm.",
          "Скільки клітинок 1 cm × 1 cm вміститься в цьому квадраті? Не 100 — ряди на стовпці."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Sto razy sto, nie sto",
        ua: "Сто разів сто, не сто"
      },
      formula: "1 m² = 100 · 100 cm² = 10 000 cm²",
      text: {
        pl: [
          "Jednostka pola powstaje z dwóch długości.",
          ["Dlatego ", em("1 m²"), " to nie 100 cm². Oba boki skalujesz przez 100."],
          "100 · 100 = 10 000."
        ],
        ua: [
          "Одиниця площі виникає з двох довжин.",
          ["Тому ", em("1 m²"), " — це не 100 cm². Обидві сторони масштабуєш на 100."],
          "100 · 100 = 10 000."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Od metra kwadratowego do centymetrów kwadratowych",
        ua: "Від квадратного метра до квадратних сантиметрів"
      },
      reveal: true,
      steps: [
        { formula: "1 m = 100 cm" },
        { formula: "1 m² = 100 cm · 100 cm" },
        {
          formula: "1 m² = 10 000 cm²",
          text: {
            pl: "Jeden skok: z m² na cm² mnożysz przez 10 000. Nie robisz po drodze dm², jeśli nie musisz.",
            ua: "Один стрибок: з m² на cm² множиш на 10 000. Не робиш по дорозі dm², якщо не треба."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Ar i hektar",
        ua: "Ар і гектар"
      },
      formula: "1 a = 100 m²    1 ha = 10 000 m²",
      text: {
        pl: [
          ["Ar to kwadrat ", em("10 m"), " na ", em("10 m"), ": 10 · 10 = 100 m²."],
          ["Hektar to kwadrat ", em("100 m"), " na ", em("100 m"), ": 100 · 100 = 10 000 m²."],
          "W jednym zadaniu zmieniasz jednostki raz: m² → a albo m² → ha, nie oba łańcuchem."
        ],
        ua: [
          ["Ар — квадрат ", em("10 m"), " на ", em("10 m"), ": 10 · 10 = 100 m²."],
          ["Гектар — квадрат ", em("100 m"), " на ", em("100 m"), ": 100 · 100 = 10 000 m²."],
          "В одному завданні змінюєш одиниці раз: m² → a або m² → ha, не обидва ланцюжком."
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
        { pl: "centymetr kwadratowy (cm²)", ua: "квадратний сантиметр (cm²)" },
        { pl: "metr kwadratowy (m²)", ua: "квадратний метр (m²)" },
        { pl: "ar (a)", ua: "ар (a)" },
        { pl: "hektar (ha)", ua: "гектар (ha)" }
      ],
      phrases: [
        { pl: "Zamień na metry kwadratowe.", ua: "Перетвори на квадратні метри." },
        { pl: "Ile arów ma działka?", ua: "Скільки арів має ділянка?" },
        { pl: "Dlaczego 10 000, a nie 100?", ua: "Чому 10 000, а не 100?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile cm² w 1 m²?",
        ua: "Скільки cm² в 1 m²?"
      },
      visual: { kind: "grid", rows: 4, cols: 4 },
      task: {
        id: "jedn-guided-10000",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("1 m²"), " to ile ", em("cm²"), "? Wpisz liczbę bez spacji, przecinek lub kropka. Bez jednostki."],
          ua: [em("1 m²"), " — скільки ", em("cm²"), "? Введи число без пробілу, кому або крапку. Без одиниці."]
        },
        answer: 10000,
        hint: {
          pl: "100 · 100. Oba boki kwadratu 1 m.",
          ua: "100 · 100. Обидві сторони квадрата 1 m."
        },
        explanation: {
          pl: "100 · 100 = 10 000 cm².",
          ua: "100 · 100 = 10 000 cm²."
        },
        mistakes: [
          {
            answer: 100,
            feedback: {
              pl: "100 to ile centymetrów w metrze — jedna długość. Pole mnoży dwie: 100 · 100.",
              ua: "100 — скільки сантиметрів у метрі, одна довжина. Площа множить дві: 100 · 100."
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
        pl: "1 m² = 100 cm²",
        ua: "1 m² = 100 cm²"
      },
      visual: { kind: "quad", quad: "square" },
      text: {
        pl: [
          "100 cm to bok. Pole to bok · bok.",
          ["100 · 100 = ", em("10 000"), ". Zero mniej — i jesteś przy długości, nie przy polu."]
        ],
        ua: [
          "100 cm — це сторона. Площа — сторона · сторона.",
          ["100 · 100 = ", em("10 000"), ". На нуль менше — і ти вже при довжині, не при площі."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Metry kwadratowe na ary",
        ua: "Квадратні метри на ари"
      },
      task: {
        id: "jedn-300m2-ary",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("300 m²"), " to ile arów? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: [em("300 m²"), " — скільки арів? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 3,
        hint: {
          pl: "1 a = 100 m². Dzielisz przez 100. Jeden krok, bez hektarów.",
          ua: "1 a = 100 m². Ділиш на 100. Один крок, без гектарів."
        },
        explanation: {
          pl: "300 : 100 = 3 a.",
          ua: "300 : 100 = 3 a."
        },
        mistakes: [
          {
            answer: 0.03,
            feedback: {
              pl: "To byłoby dzielenie przez 10 000 (jak na hektary). Ar to 100 m².",
              ua: "Це було б ділення на 10 000 (як на гектари). Ар — 100 m²."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Pokój — tylko m²",
        ua: "Кімната — лише m²"
      },
      visual: { kind: "quad", quad: "rectangle", label: { pl: "5 m na 4 m", ua: "5 m на 4 m" } },
      task: {
        id: "jedn-pokoj",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Pokój ", em("5 m"), " na ", em("4 m"), ". Ile ", em("m²"), "? Wpisz liczbę, przecinek lub kropka. Bez jednostki. Nie zamieniaj na cm²."],
          ua: ["Кімната ", em("5 m"), " на ", em("4 m"), ". Скільки ", em("m²"), "? Введи число, кому або крапку. Без одиниці. Не перетворюй на cm²."]
        },
        answer: 20,
        hint: {
          pl: "P = 5 · 4. Jednostki już są metry — wynik w m².",
          ua: "P = 5 · 4. Одиниці вже метри — результат у m²."
        },
        explanation: {
          pl: "5 · 4 = 20 m². Nie mnożymy dalej przez 10 000 — to byłby inny, osobny rachunek.",
          ua: "5 · 4 = 20 m². Далі не множимо на 10 000 — це був би інший, окремий рахунок."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Ogród w metrach kwadratowych",
        ua: "Сад у квадратних метрах"
      },
      text: {
        pl: [
          ["Prostokątny ogród ma boki ", em("20 m"), " i ", em("15 m"), "."],
          "Zostajemy przy m². Nie zamieniamy dalej na ary w tym samym rachunku."
        ],
        ua: [
          ["Прямокутний сад має сторони ", em("20 m"), " і ", em("15 m"), "."],
          "Лишаємось при m². Далі не перетворюємо на ари в тому самому рахунку."
        ]
      },
      task: {
        id: "jedn-ogrod-m2",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile ", em("m²"), " ma ogród? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки ", em("m²"), " має сад? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 300,
        hint: {
          pl: "20 · 15.",
          ua: "20 · 15."
        },
        explanation: {
          pl: "20 · 15 = 300 m².",
          ua: "20 · 15 = 300 m²."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Działka w arach — jeden skok",
        ua: "Ділянка в арах — один стрибок"
      },
      text: {
        pl: [
          ["Działka ma ", em("500 m²"), "."],
          "Zamień tylko na ary (1 a = 100 m²). Nie idź dalej na hektary."
        ],
        ua: [
          ["Ділянка має ", em("500 m²"), "."],
          "Перетвори лише на ари (1 a = 100 m²). Далі на гектари не йди."
        ]
      },
      task: {
        id: "jedn-dzialka-ary",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile to arów? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки це арів? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 5,
        hint: {
          pl: "500 : 100.",
          ua: "500 : 100."
        },
        explanation: {
          pl: "500 : 100 = 5 a. Hektarów tu nie liczymy.",
          ua: "500 : 100 = 5 a. Гектарів тут не рахуємо."
        },
        mistakes: [
          {
            answer: 0.05,
            feedback: {
              pl: "0,05 ha dostałbyś po dzieleniu przez 10 000. Pytanie jest o ary.",
              ua: "0,05 ha отримав би після ділення на 10 000. Питання про ари."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Dlaczego 10 000, a nie 100?",
        ua: "Чому 10 000, а не 100?"
      },
      text: {
        pl: [
          "Ktoś pamięta 1 m = 100 cm i wstawia to samo do metrów kwadratowych.",
          "Które zdanie tłumaczy błąd?"
        ],
        ua: [
          "Хтось пам’ятає 1 m = 100 cm і ставить те саме до квадратних метрів.",
          "Яке речення пояснює помилку?"
        ]
      },
      task: {
        id: "jedn-dlaczego-10000",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dlaczego 1 m² = 10 000 cm², a nie 100 cm²?",
          ua: "Чому 1 m² = 10 000 cm², а не 100 cm²?"
        },
        options: [
          { id: "a", label: { pl: "Bo metr jest 10 000 razy dłuższy od centymetra.", ua: "Бо метр у 10 000 разів довший за сантиметр." } },
          { id: "b", label: { pl: "Bo oba boki kwadratu skalujesz przez 100: 100 · 100 = 10 000.", ua: "Бо обидві сторони квадрата масштабуєш на 100: 100 · 100 = 10 000." } },
          { id: "c", label: { pl: "Bo w arze jest 100 m², więc w m² musi być 10 000 cm².", ua: "Бо в арі 100 m², отже в m² має бути 10 000 cm²." } }
        ],
        answer: "b",
        hint: {
          pl: "Pole = długość · szerokość. Każdą z nich zamieniasz z m na cm.",
          ua: "Площа = довжина · ширина. Кожну з них перетворюєш з m на cm."
        },
        explanation: {
          pl: "1 m na 1 m to 100 cm na 100 cm. Iloczyn dwóch setek daje 10 000. 100 dotyczy jednej długości, nie pola. Ar tu nic nie wyjaśnia.",
          ua: "1 m на 1 m — це 100 cm на 100 cm. Добуток двох сотень дає 10 000. 100 стосується однієї довжини, не площі. Ар тут нічого не пояснює."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Metr jest 100 razy dłuższy od centymetra, nie 10 000. 10 000 pojawia się dopiero przy polu.",
              ua: "Метр у 100 разів довший за сантиметр, не в 10 000. 10 000 з’являється щойно при площі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To inna para jednostek. 10 000 cm² wynika z 100 · 100, nie z ara.",
              ua: "Це інша пара одиниць. 10 000 cm² випливає з 100 · 100, не з ара."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Z m² na cm²",
        ua: "Чи вже вмію? З m² на cm²"
      },
      task: {
        id: "jedn-check-2m2",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("2 m²"), " to ile ", em("cm²"), "? Wpisz liczbę bez spacji, przecinek lub kropka. Bez jednostki."],
          ua: [em("2 m²"), " — скільки ", em("cm²"), "? Введи число без пробілу, кому або крапку. Без одиниці."]
        },
        answer: 20000,
        hint: {
          pl: "2 · 10 000. Jeden skok.",
          ua: "2 · 10 000. Один стрибок."
        },
        explanation: {
          pl: "2 · 10 000 = 20 000 cm².",
          ua: "2 · 10 000 = 20 000 cm²."
        },
        mistakes: [
          {
            answer: 200,
            feedback: {
              pl: "Pomyliłeś z 2 · 100. Pole: 2 · 10 000.",
              ua: "Переплутав із 2 · 100. Площа: 2 · 10 000."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Hektar na m²",
        ua: "Чи вже вмію? Гектар на m²"
      },
      task: {
        id: "jedn-check-2ha",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("2 ha"), " to ile ", em("m²"), "? Wpisz liczbę bez spacji, przecinek lub kropka. Bez jednostki. Nie licz przez ary."],
          ua: [em("2 ha"), " — скільки ", em("m²"), "? Введи число без пробілу, кому або крапку. Без одиниці. Не рахуй через ари."]
        },
        answer: 20000,
        hint: {
          pl: "1 ha = 10 000 m². Mnożysz 2 · 10 000. Jeden krok.",
          ua: "1 ha = 10 000 m². Множиш 2 · 10 000. Один крок."
        },
        explanation: {
          pl: "2 · 10 000 = 20 000 m². Bez pośredniego kroku przez ary.",
          ua: "2 · 10 000 = 20 000 m². Без проміжного кроку через ари."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1 m² = 100 · 100 cm² = 10 000 cm²",
      text: {
        pl: [
          "Pole skaluje obie długości. Stąd 10 000, nie 100.",
          "1 a = 100 m², 1 ha = 10 000 m².",
          "W jednym rachunku jedna para jednostek — bez łańcucha."
        ],
        ua: [
          "Площа масштабує обидві довжини. Звідси 10 000, не 100.",
          "1 a = 100 m², 1 ha = 10 000 m².",
          "В одному рахунку одна пара одиниць — без ланцюжка."
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
          "Przy objętości skalujesz już trzy wymiary. Na razie zostajemy przy polu: dwa boki, dwa czynniki."
        ],
        ua: [
          "При об’ємі масштабуєш уже три виміри. Поки лишаємось при площі: дві сторони, два множники."
        ]
      }
    }
  ]
};
