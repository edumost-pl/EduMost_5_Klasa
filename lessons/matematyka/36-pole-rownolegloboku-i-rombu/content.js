function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pochylony prostokąt",
        ua: "Нахилений прямокутник"
      },
      visual: { kind: "quad", quad: "parallelogram", height: true, label: { pl: "równoległobok, wysokość h", ua: "паралелограм, висота h" } },
      text: {
        pl: [
          "Równoległobok wygląda, jakby ktoś przesunął prostokąt w bok.",
          "Pole nie liczy się skośnym bokiem. Liczy się wysokość — pionowy spadek z boku na podstawę."
        ],
        ua: [
          "Паралелограм виглядає так, ніби хтось зсунув прямокутник убік.",
          "Площу не рахують скісною стороною. Рахують висоту — вертикальний спад зі сторони на основу."
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
        { pl: "obliczyć pole równoległoboku: P = a · h", ua: "обчислити площу паралелограма: P = a · h" },
        { pl: "zobaczyć, że po odcięciu i dosunięciu powstaje prostokąt", ua: "побачити, що після відрізання і присунення виникає прямокутник" },
        { pl: "obliczyć pole rombu przez wysokość", ua: "обчислити площу ромба через висоту" },
        { pl: "porównać dwie pary a i h o tym samym polu", ua: "порівняти дві пари a і h з тією самою площею" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Odetnij trójkąt, dosuń z drugiej strony",
        ua: "Відріж трикутник, присунь з іншого боку"
      },
      visual: { kind: "quad", quad: "parallelogram", height: true },
      prompt: {
        pl: [
          "Wysokość jest prostopadła do podstawy. Skośny bok jest dłuższy niż h.",
          "Gdy odetniesz skrajny trójkąt i dosuniesz go do drugiej krawędzi, dostajesz prostokąt o bokach a i h."
        ],
        ua: [
          "Висота перпендикулярна до основи. Скісна сторона довша за h.",
          "Коли відріжеш крайній трикутник і присунеш його до другого краю, отримаєш прямокутник зі сторонами a і h."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Pole równoległoboku",
        ua: "Площа паралелограма"
      },
      formula: "P = a · h",
      text: {
        pl: [
          "Po przesunięciu masz prostokąt: pole a · h.",
          "Równoległobok ma to samo pole — nic nie zginęło i nic nie przybyło.",
          ["Nie mnożysz dwóch skośnych boków. Tylko ", em("podstawa"), " i ", em("wysokość"), "."]
        ],
        ua: [
          "Після зсуву маєш прямокутник: площа a · h.",
          "Паралелограм має ту саму площу — нічого не зникло і нічого не додалось.",
          ["Не множиш двох скісних сторін. Лише ", em("основа"), " і ", em("висота"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Podstawa 8, wysokość 3",
        ua: "Основа 8, висота 3"
      },
      visual: { kind: "quad", quad: "parallelogram", height: true, label: { pl: "a = 8, h = 3", ua: "a = 8, h = 3" } },
      reveal: true,
      steps: [
        { formula: "P = a · h" },
        { formula: "P = 8 · 3" },
        {
          formula: "P = 24",
          text: {
            pl: "Gdyby ktoś wziął skośny bok 5 zamiast wysokości, dostałby 40 — za dużo.",
            ua: "Якби хтось узяв скісну сторону 5 замість висоти, отримав би 40 — забагато."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Romb to równoległobok o równych bokach",
        ua: "Ромб — паралелограм з рівними сторонами"
      },
      formula: "P = a · h",
      visual: { kind: "quad", quad: "rhombus", label: { pl: "romb", ua: "ромб" } },
      text: {
        pl: [
          "W rombie wszystkie boki są równe. Pole i tak liczysz wysokością opuszczoną na bok.",
          ["Wzór zostaje: ", em("P = a · h"), "."],
          "Nie potrzebujesz przekątnych, jeśli znasz a i h."
        ],
        ua: [
          "У ромбі всі сторони рівні. Площу все одно рахуєш висотою, опущеною на сторону.",
          ["Формула лишається: ", em("P = a · h"), "."],
          "Не потрібні діагоналі, якщо знаєш a і h."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Romb: bok 5, wysokość 4",
        ua: "Ромб: сторона 5, висота 4"
      },
      reveal: true,
      steps: [
        { formula: "P = 5 · 4" },
        {
          formula: "P = 20",
          text: {
            pl: "Bok razy wysokość. Nie bok razy bok: 5 · 5 = 25 to pole kwadratu o boku 5, a romb jest spłaszczony.",
            ua: "Сторона на висоту. Не сторона на сторону: 5 · 5 = 25 — площа квадрата зі стороною 5, а ромб сплющений."
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
        { pl: "równoległobok", ua: "паралелограм" },
        { pl: "romb", ua: "ромб" },
        { pl: "podstawa", ua: "основа" },
        { pl: "wysokość", ua: "висота" }
      ],
      phrases: [
        { pl: "Oblicz pole równoległoboku.", ua: "Обчисли площу паралелограма." },
        { pl: "Oblicz pole rombu.", ua: "Обчисли площу ромба." },
        { pl: "Która para a, h daje większe pole?", ua: "Яка пара a, h дає більшу площу?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Podstawa i wysokość",
        ua: "Основа і висота"
      },
      visual: { kind: "quad", quad: "parallelogram", height: true, label: { pl: "a = 6, h = 5", ua: "a = 6, h = 5" } },
      task: {
        id: "rownol-guided-6-5",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Pole równoległoboku: podstawa ", em("6"), ", wysokość ", em("5"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Площа паралелограма: основа ", em("6"), ", висота ", em("5"), ". Введи число, кому або крапку."]
        },
        answer: 30,
        hint: {
          pl: "P = a · h.",
          ua: "P = a · h."
        },
        explanation: {
          pl: "6 · 5 = 30.",
          ua: "6 · 5 = 30."
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
        pl: "Równoległobok o bokach 6 i 5 ma pole 30",
        ua: "Паралелограм зі сторонами 6 і 5 має площу 30"
      },
      text: {
        pl: [
          "5 może być skośnym bokiem, nie wysokością.",
          "Pole to podstawa razy wysokość. Jeśli h = 4, to P = 6 · 4 = 24, nie 30.",
          "Bok skośny jest zwykle dłuższy od wysokości."
        ],
        ua: [
          "5 може бути скісною стороною, не висотою.",
          "Площа — основа на висоту. Якщо h = 4, то P = 6 · 4 = 24, не 30.",
          "Скісна сторона зазвичай довша за висоту."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Równoległobok",
        ua: "Паралелограм"
      },
      task: {
        id: "rownol-7-3",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Podstawa ", em("7"), ", wysokość ", em("3"), ". Oblicz pole. Wpisz liczbę, przecinek lub kropka."],
          ua: ["Основа ", em("7"), ", висота ", em("3"), ". Обчисли площу. Введи число, кому або крапку."]
        },
        answer: 21,
        hint: {
          pl: "P = 7 · 3.",
          ua: "P = 7 · 3."
        },
        explanation: {
          pl: "7 · 3 = 21.",
          ua: "7 · 3 = 21."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Romb wysokością",
        ua: "Ромб висотою"
      },
      visual: { kind: "quad", quad: "rhombus", label: { pl: "a = 6, h = 3", ua: "a = 6, h = 3" } },
      task: {
        id: "rownol-romb-6-3",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Romb ma bok ", em("6"), " i wysokość ", em("3"), ". Oblicz pole. Wpisz liczbę, przecinek lub kropka."],
          ua: ["Ромб має сторону ", em("6"), " і висоту ", em("3"), ". Обчисли площу. Введи число, кому або крапку."]
        },
        answer: 18,
        hint: {
          pl: "Tak samo jak równoległobok: a · h. Nie 6 · 6.",
          ua: "Так само як паралелограм: a · h. Не 6 · 6."
        },
        explanation: {
          pl: "6 · 3 = 18. 6 · 6 = 36 byłoby polem kwadratu.",
          ua: "6 · 3 = 18. 6 · 6 = 36 було б площею квадрата."
        },
        mistakes: [
          {
            answer: 36,
            feedback: {
              pl: "36 to 6 · 6. Romb nie jest kwadratem, chyba że wysokość też wynosi 6.",
              ua: "36 це 6 · 6. Ромб не квадрат, якщо висота теж не 6."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwie pary — to samo pole?",
        ua: "Дві пари — та сама площа?"
      },
      text: {
        pl: [
          ["Para A: podstawa ", em("8"), ", wysokość ", em("3"), "."],
          ["Para B: podstawa ", em("6"), ", wysokość ", em("4"), "."]
        ],
        ua: [
          ["Пара A: основа ", em("8"), ", висота ", em("3"), "."],
          ["Пара B: основа ", em("6"), ", висота ", em("4"), "."]
        ]
      },
      task: {
        id: "rownol-dwie-pary",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy oba równoległoboki mają równe pola?",
          ua: "Чи обидва паралелограми мають рівні площі?"
        },
        answer: true,
        hint: {
          pl: "Policz 8 · 3 i 6 · 4.",
          ua: "Полічи 8 · 3 і 6 · 4."
        },
        explanation: {
          pl: "8 · 3 = 24 i 6 · 4 = 24. Dłuższa podstawa nie znaczy większego pola, gdy wysokość jest mniejsza.",
          ua: "8 · 3 = 24 і 6 · 4 = 24. Довша основа не означає більшої площі, коли висота менша."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Rabata w ogrodzie",
        ua: "Клумба в саду"
      },
      text: {
        pl: [
          ["Rabata ma kształt równoległoboku. Podstawa ", em("9 m"), ", wysokość ", em("4 m"), "."]
        ],
        ua: [
          ["Клумба має форму паралелограма. Основа ", em("9 m"), ", висота ", em("4 m"), "."]
        ]
      },
      task: {
        id: "rownol-rabata",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile ", em("m²"), " ziemi zajmuje rabata? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки ", em("m²"), " землі займає клумба? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 36,
        hint: {
          pl: "P = 9 · 4.",
          ua: "P = 9 · 4."
        },
        explanation: {
          pl: "9 · 4 = 36 m².",
          ua: "9 · 4 = 36 m²."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Dłuższy bok, większe pole?",
        ua: "Довша сторона, більша площа?"
      },
      text: {
        pl: [
          ["Równoległobok K: a = ", em("10"), ", h = ", em("2"), "."],
          ["Równoległobok L: a = ", em("6"), ", h = ", em("4"), "."],
          "K ma dłuższą podstawę. Czy ma większe pole?"
        ],
        ua: [
          ["Паралелограм K: a = ", em("10"), ", h = ", em("2"), "."],
          ["Паралелограм L: a = ", em("6"), ", h = ", em("4"), "."],
          "K має довшу основу. Чи має більшу площу?"
        ]
      },
      task: {
        id: "rownol-dluzszy-bok",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy dłuższa podstawa zawsze oznacza większe pole równoległoboku?",
          ua: "Чи довша основа завжди означає більшу площу паралелограма?"
        },
        answer: false,
        hint: {
          pl: "Policz 10 · 2 i 6 · 4.",
          ua: "Полічи 10 · 2 і 6 · 4."
        },
        explanation: {
          pl: "10 · 2 = 20, a 6 · 4 = 24. K jest dłuższy, ale niższy — pole mniejsze. Pole zależy od pary a i h, nie od samego a.",
          ua: "10 · 2 = 20, а 6 · 4 = 24. K довший, але нижчий — площа менша. Площа залежить від пари a і h, не від самого a."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Równoległobok",
        ua: "Чи вже вмію? Паралелограм"
      },
      task: {
        id: "rownol-check-ah",
        type: "input-number",
        level: "A",
        question: {
          pl: ["a = ", em("8"), ", h = ", em("5"), ". Pole równoległoboku? Wpisz liczbę, przecinek lub kropka."],
          ua: ["a = ", em("8"), ", h = ", em("5"), ". Площа паралелограма? Введи число, кому або крапку."]
        },
        answer: 40,
        hint: {
          pl: "P = a · h.",
          ua: "P = a · h."
        },
        explanation: {
          pl: "8 · 5 = 40.",
          ua: "8 · 5 = 40."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Romb",
        ua: "Чи вже вмію? Ромб"
      },
      task: {
        id: "rownol-check-romb",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Romb: bok ", em("9"), ", wysokość ", em("4"), ". Pole? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Ромб: сторона ", em("9"), ", висота ", em("4"), ". Площа? Введи число, кому або крапку."]
        },
        answer: 36,
        hint: {
          pl: "P = a · h, nie a · a.",
          ua: "P = a · h, не a · a."
        },
        explanation: {
          pl: "9 · 4 = 36.",
          ua: "9 · 4 = 36."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "P = a · h",
      text: {
        pl: [
          "Równoległobok po odcięciu i dosunięciu staje się prostokątem o bokach a i h.",
          "Romb liczysz tak samo: bok razy wysokość.",
          "Dłuższa podstawa nie gwarantuje większego pola."
        ],
        ua: [
          "Паралелограм після відрізання і присунення стає прямокутником зі сторонами a і h.",
          "Ромб рахуєш так само: сторона на висоту.",
          "Довша основа не гарантує більшої площі."
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
          "Trójkąt to połowa równoległoboku. Pojawi się dzielenie przez 2 — i łatwo o nim zapomnieć."
        ],
        ua: [
          "Трикутник — половина паралелограма. З’явиться ділення на 2 — і про нього легко забути."
        ]
      }
    }
  ]
};
