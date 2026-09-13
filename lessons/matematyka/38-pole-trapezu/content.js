function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dwie podstawy i wysokość między nimi",
        ua: "Дві основи і висота між ними"
      },
      visual: { kind: "quad", quad: "trapezoid", height: true, label: { pl: "trapez: podstawy a, b i wysokość h", ua: "трапеція: основи a, b і висота h" } },
      text: {
        pl: [
          "W trapezie jedna para boków jest równoległa. To dwie podstawy — zwykle różnej długości.",
          "Pole nie wymaga równych ramion. Wystarczy suma podstaw, wysokość i dzielenie przez 2."
        ],
        ua: [
          "У трапеції одна пара сторін паралельна. Це дві основи — зазвичай різної довжини.",
          "Площа не вимагає рівних бічних сторін. Досить суми основ, висоти і ділення на 2."
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
        { pl: "stosować P = (a + b) · h / 2", ua: "застосовувати P = (a + b) · h / 2" },
        { pl: "zobaczyć trapez jako prostokąt i trójkąt", ua: "побачити трапецію як прямокутник і трикутник" },
        { pl: "nie zapomnieć dzielenia przez 2", ua: "не забути ділення на 2" },
        { pl: "wiedzieć, że ramiona nie muszą być równe", ua: "знати, що бічні сторони не мусять бути рівними" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Rozetnij na prostokąt i trójkąt",
        ua: "Розріж на прямокутник і трикутник"
      },
      visual: { kind: "quad", quad: "trapezoid", height: true },
      prompt: {
        pl: [
          "Od krótszej podstawy opuszczasz wysokości. W środku wychodzi prostokąt.",
          "Z boku zostaje trójkąt (albo dwa). Pola dodajesz — to pole trapezu."
        ],
        ua: [
          "Від коротшої основи опускаєш висоти. Посередині виходить прямокутник.",
          "Збоку лишається трикутник (або два). Площі додаєш — це площа трапеції."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Suma podstaw, razy wysokość, przez 2",
        ua: "Сума основ, на висоту, на 2"
      },
      formula: "P = (a + b) · h / 2",
      text: {
        pl: [
          "a i b to podstawy równoległe. h łączy je prostopadle.",
          "Najpierw dodaj podstawy, potem mnożysz przez h, na końcu dzielisz przez 2.",
          "Ramiona (boki nie równoległe) do wzoru nie wchodzą."
        ],
        ua: [
          "a і b — паралельні основи. h з’єднує їх перпендикулярно.",
          "Спочатку додай основи, потім множиш на h, наприкінці ділиш на 2.",
          "Бічні сторони (непаралельні) у формулу не входять."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Podstawy 8 i 4, wysokość 3",
        ua: "Основи 8 і 4, висота 3"
      },
      visual: { kind: "quad", quad: "trapezoid", height: true, label: { pl: "a = 8, b = 4, h = 3", ua: "a = 8, b = 4, h = 3" } },
      reveal: true,
      steps: [
        {
          formula: "prostokąt 4 · 3 = 12",
          text: {
            pl: "Środek: prostokąt o bokach krótszej podstawy i wysokości.",
            ua: "Середина: прямокутник зі сторонами коротшої основи і висоти."
          }
        },
        {
          formula: "trójkąt (8 − 4) · 3 / 2 = 6",
          text: {
            pl: "Z boku: podstawa 4, wysokość 3.",
            ua: "Збоку: основа 4, висота 3."
          }
        },
        {
          formula: "12 + 6 = 18",
          text: {
            pl: "To samo wzorem: (8 + 4) · 3 / 2 = 12 · 3 / 2 = 18.",
            ua: "Те саме формулою: (8 + 4) · 3 / 2 = 12 · 3 / 2 = 18."
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Druga para liczb",
        ua: "Друга пара чисел"
      },
      reveal: true,
      steps: [
        { formula: "a = 10,  b = 6,  h = 4" },
        { formula: "(10 + 6) · 4 / 2" },
        { formula: "16 · 4 / 2" },
        {
          formula: "32",
          text: {
            pl: "16 · 2 = 32. Albo 64 : 2 = 32. Nie zostawiaj 64 — to bez dzielenia przez 2.",
            ua: "16 · 2 = 32. Або 64 : 2 = 32. Не залишай 64 — це без ділення на 2."
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
        { pl: "trapez", ua: "трапеція" },
        { pl: "podstawy trapezu", ua: "основи трапеції" },
        { pl: "ramiona trapezu", ua: "бічні сторони трапеції" },
        { pl: "wysokość trapezu", ua: "висота трапеції" }
      ],
      phrases: [
        { pl: "Oblicz pole trapezu.", ua: "Обчисли площу трапеції." },
        { pl: "Wskaż podstawy równoległe.", ua: "Вкажи паралельні основи." },
        { pl: "Czy ramiona muszą być równe?", ua: "Чи бічні сторони мусять бути рівними?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ze wzoru",
        ua: "З формули"
      },
      task: {
        id: "trapez-guided-5-7-3",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Podstawy ", em("5"), " i ", em("7"), ", wysokość ", em("3"), ". Pole trapezu? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Основи ", em("5"), " і ", em("7"), ", висота ", em("3"), ". Площа трапеції? Введи число, кому або крапку."]
        },
        answer: 18,
        hint: {
          pl: "Najpierw 5 + 7 = 12. Potem 12 · 3 / 2.",
          ua: "Спочатку 5 + 7 = 12. Потім 12 · 3 / 2."
        },
        explanation: {
          pl: "(5 + 7) · 3 / 2 = 36 / 2 = 18.",
          ua: "(5 + 7) · 3 / 2 = 36 / 2 = 18."
        },
        mistakes: [
          {
            answer: 36,
            feedback: {
              pl: "Zapomniałeś : 2. 12 · 3 = 36, pole to 18.",
              ua: "Забув : 2. 12 · 3 = 36, площа 18."
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
        pl: "P = (8 + 4) · 3 = 36",
        ua: "P = (8 + 4) · 3 = 36"
      },
      visual: { kind: "quad", quad: "trapezoid", height: true },
      text: {
        pl: [
          "Suma podstaw razy wysokość to za dużo — jakbyś złożył dwa trapezy w równoległobok i zapomniał połowy.",
          ["Jeszcze ", em("/ 2"), ": 36 : 2 = 18."]
        ],
        ua: [
          "Сума основ на висоту — забагато, ніби склав дві трапеції в паралелограм і забув половину.",
          ["Ще ", em("/ 2"), ": 36 : 2 = 18."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Inne podstawy",
        ua: "Інші основи"
      },
      task: {
        id: "trapez-10-6-4",
        type: "input-number",
        level: "A",
        question: {
          pl: ["a = ", em("10"), ", b = ", em("6"), ", h = ", em("4"), ". Pole? Wpisz liczbę, przecinek lub kropka."],
          ua: ["a = ", em("10"), ", b = ", em("6"), ", h = ", em("4"), ". Площа? Введи число, кому або крапку."]
        },
        answer: 32,
        hint: {
          pl: "(10 + 6) · 4 / 2.",
          ua: "(10 + 6) · 4 / 2."
        },
        explanation: {
          pl: "16 · 4 / 2 = 32.",
          ua: "16 · 4 / 2 = 32."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z pola znajdź wysokość",
        ua: "З площі знайди висоту"
      },
      task: {
        id: "trapez-odwrotnie-h",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Pole trapezu ", em("20"), ", podstawy ", em("6"), " i ", em("4"), ". Jaka jest wysokość? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа трапеції ", em("20"), ", основи ", em("6"), " і ", em("4"), ". Яка висота? Введи число, кому або крапку."]
        },
        answer: 4,
        hint: {
          pl: "20 = (6 + 4) · h / 2. 20 = 10 · h / 2, więc 20 = 5h.",
          ua: "20 = (6 + 4) · h / 2. 20 = 10 · h / 2, отже 20 = 5h."
        },
        explanation: {
          pl: "2 · 20 = (6 + 4) · h → 40 = 10h → h = 4.",
          ua: "2 · 20 = (6 + 4) · h → 40 = 10h → h = 4."
        },
        mistakes: [
          {
            answer: 2,
            feedback: {
              pl: "To 20 : 10, bez podwojenia. Najpierw 2P = (a + b) · h.",
              ua: "Це 20 : 10, без подвоєння. Спочатку 2P = (a + b) · h."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Sprawdź rozcięciem",
        ua: "Перевір розрізом"
      },
      text: {
        pl: [
          ["Trapez: podstawy ", em("8"), " i ", em("4"), ", wysokość ", em("5"), "."],
          "Policz wzorem. Potem: prostokąt 4×5 oraz trójkąt o podstawie 4 i wysokości 5 — czy suma się zgadza?"
        ],
        ua: [
          ["Трапеція: основи ", em("8"), " і ", em("4"), ", висота ", em("5"), "."],
          "Полічи формулою. Потім: прямокутник 4×5 і трикутник з основою 4 і висотою 5 — чи сума збігається?"
        ]
      },
      task: {
        id: "trapez-rozciecie",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile wynosi pole? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Чому дорівнює площа? Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "Wzór: (8 + 4) · 5 / 2. Albo 4 · 5 + (4 · 5 / 2).",
          ua: "Формула: (8 + 4) · 5 / 2. Або 4 · 5 + (4 · 5 / 2)."
        },
        explanation: {
          pl: "Wzór: 12 · 5 / 2 = 30. Rozcięcie: 20 + 10 = 30.",
          ua: "Формула: 12 · 5 / 2 = 30. Розріз: 20 + 10 = 30."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Działka przy drodze",
        ua: "Ділянка біля дороги"
      },
      text: {
        pl: [
          ["Działka ma kształt trapezu. Równoległe krawędzie ", em("12 m"), " i ", em("8 m"), ", odległość między nimi ", em("5 m"), "."]
        ],
        ua: [
          ["Ділянка має форму трапеції. Паралельні краї ", em("12 m"), " і ", em("8 m"), ", відстань між ними ", em("5 m"), "."]
        ]
      },
      task: {
        id: "trapez-dzialka",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile ", em("m²"), " ma działka? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки ", em("m²"), " має ділянка? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 50,
        hint: {
          pl: "(12 + 8) · 5 / 2.",
          ua: "(12 + 8) · 5 / 2."
        },
        explanation: {
          pl: "20 · 5 / 2 = 50 m².",
          ua: "20 · 5 / 2 = 50 m²."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy ramiona muszą być równe?",
        ua: "Чи бічні сторони мусять бути рівними?"
      },
      text: {
        pl: [
          "We wzorze P = (a + b) · h / 2 widać tylko podstawy i wysokość.",
          "Czy ten wzór działa wyłącznie dla trapezu równoramiennego?"
        ],
        ua: [
          "У формулі P = (a + b) · h / 2 видно лише основи і висоту.",
          "Чи ця формула діє лише для рівнобічної трапеції?"
        ]
      },
      task: {
        id: "trapez-ramiona",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy wzór na pole trapezu wymaga równych ramion?",
          ua: "Чи формула площі трапеції вимагає рівних бічних сторін?"
        },
        answer: false,
        hint: {
          pl: "Rozcięcie na prostokąt i trójkąt działa też, gdy trójkąt jest tylko z jednej strony.",
          ua: "Розріз на прямокутник і трикутник діє і тоді, коли трикутник лише з одного боку."
        },
        explanation: {
          pl: "Nie. Wystarczą dwie podstawy równoległe i wysokość. Ramiona mogą być różne. Równe ramiona to dodatkowa cecha, nie warunek wzoru.",
          ua: "Ні. Досить двох паралельних основ і висоти. Бічні сторони можуть бути різні. Рівні бічні сторони — додаткова ознака, не умова формули."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Pole",
        ua: "Чи вже вмію? Площа"
      },
      task: {
        id: "trapez-check-pole",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Podstawy ", em("9"), " i ", em("5"), ", h = ", em("4"), ". Pole? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Основи ", em("9"), " і ", em("5"), ", h = ", em("4"), ". Площа? Введи число, кому або крапку."]
        },
        answer: 28,
        hint: {
          pl: "(9 + 5) · 4 / 2.",
          ua: "(9 + 5) · 4 / 2."
        },
        explanation: {
          pl: "14 · 4 / 2 = 28.",
          ua: "14 · 4 / 2 = 28."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Wysokość",
        ua: "Чи вже вмію? Висота"
      },
      task: {
        id: "trapez-check-h",
        type: "input-number",
        level: "B",
        question: {
          pl: ["P = ", em("27"), ", podstawy ", em("8"), " i ", em("10"), ". Wysokość? Wpisz liczbę, przecinek lub kropka."],
          ua: ["P = ", em("27"), ", основи ", em("8"), " і ", em("10"), ". Висота? Введи число, кому або крапку."]
        },
        answer: 3,
        hint: {
          pl: "2 · 27 = (8 + 10) · h → 54 = 18h.",
          ua: "2 · 27 = (8 + 10) · h → 54 = 18h."
        },
        explanation: {
          pl: "h = 54 : 18 = 3.",
          ua: "h = 54 : 18 = 3."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "P = (a + b) · h / 2",
      text: {
        pl: [
          "Dodaj podstawy równoległe, pomnóż przez wysokość, podziel przez 2.",
          "Możesz sprawdzić: prostokąt plus trójkąt.",
          "Ramiona nie muszą być równe."
        ],
        ua: [
          "Додай паралельні основи, помнож на висоту, поділи на 2.",
          "Можеш перевірити: прямокутник плюс трикутник.",
          "Бічні сторони не мусять бути рівними."
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
          "Następna lekcja: cm², m², ar, hektar. Pole 50 m² zostaje 50 m² — nie łańcuchem jednostek w jednym rachunku."
        ],
        ua: [
          "Наступний урок: cm², m², ar, гектар. Площа 50 m² лишається 50 m² — не ланцюжком одиниць в одному рахунку."
        ]
      }
    }
  ]
};
