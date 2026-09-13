function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dziś krótki zapis mnożenia",
        ua: "Сьогодні короткий запис множення"
      },
      text: {
        pl: [
          "W podręczniku najpierw zginasz kartkę.",
          "Im więcej zgięć, tym więcej dziurek. Liczba rośnie bardzo szybko.",
          "Dziś zobaczymy, jak krótko zapisać mnożenie takich samych czynników."
        ],
        ua: [
          "У підручнику спочатку згинаєш картку.",
          "Що більше згинів, то більше дірочок. Число росте дуже швидко.",
          "Сьогодні навчимося коротко записувати множення однакових множників."
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
        { pl: "rozpoznać potęgę", ua: "розпізнати степінь" },
        { pl: "wskazać podstawę i wykładnik", ua: "вказати основу і показник" },
        { pl: "zapisać potęgę jako iloczyn", ua: "записати степінь як добуток" },
        { pl: "obliczyć potęgę", ua: "обчислити степінь" },
        { pl: "przeczytać potęgę", ua: "прочитати степінь" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Co się zmienia?",
        ua: "Що змінюється?"
      },
      visual: { kind: "power-grow", base: 2, max: 4 },
      text: {
        pl: [
          "Spójrz: z lewej strony przybywa czynników, z prawej — wykładnik.",
          "Co zostaje takie samo?",
          "Liczba, która się powtarza, to podstawa. Liczba powtórzeń to wykładnik."
        ],
        ua: [
          "Подивись: зліва стає більше множників, справа — показник.",
          "Що лишається тим самим?",
          "Число, яке повторюється, — основа. Кількість повторень — показник."
        ]
      },
      prompt: {
        pl: [
          "💡 Jak wpisać potęgę na komputerze?",
          ["Potęgę wpisujemy za pomocą znaku ", em("^"), "."],
          ["Na przykład: ", em("7⁴"), " → ", em("7^4")]
        ],
        ua: [
          "💡 Як ввести степінь на комп'ютері?",
          ["Степінь вводимо за допомогою знака ", em("^"), "."],
          ["Наприклад: ", em("7⁴"), " → ", em("7^4")]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Co to jest potęga?",
        ua: "Що таке степінь?"
      },
      formula: "2⁴ = 2 · 2 · 2 · 2",
      text: {
        pl: "Potęga to krótki zapis mnożenia takich samych czynników.",
        ua: "Степінь — це короткий запис множення однакових множників."
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Podstawa i wykładnik",
        ua: "Основа і показник"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "power", base: 2, exponent: 4 }
        },
        {
          visual: { kind: "power-labeled", base: 2, exponent: 4 },
          text: {
            pl: [
              [em("2"), " — podstawa. ", em("4"), " — wykładnik."],
              "Wykładnik mówi, ile razy podstawa występuje jako czynnik."
            ],
            ua: [
              [em("2"), " — основа. ", em("4"), " — показник."],
              "Показник каже, скільки разів основа є множником."
            ]
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
        { pl: "potęga", ua: "степінь" },
        { pl: "podstawa potęgi", ua: "основа степеня" },
        { pl: "wykładnik", ua: "показник степеня" },
        { pl: "czynnik", ua: "множник" },
        { pl: "iloczyn", ua: "добуток" }
      ],
      phrases: [
        { pl: "Zapisz w postaci potęgi.", ua: "Запиши у вигляді степеня." },
        { pl: "Oblicz potęgę.", ua: "Обчисли степінь." },
        { pl: "Przeczytaj potęgę.", ua: "Прочитай степінь." },
        { pl: "Zapisz potęgę w postaci iloczynu.", ua: "Запиши степінь у вигляді добутку." }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Jak obliczyć 3⁴?",
        ua: "Як обчислити 3⁴?"
      },
      reveal: true,
      steps: [
        { formula: "3⁴" },
        { formula: "3 · 3 · 3 · 3" },
        { formula: "9 · 3 · 3" },
        { formula: "27 · 3" },
        {
          formula: "81",
          text: {
            pl: [
              "Czytamy: trzy do potęgi czwartej.",
              [em("3⁴"), " = ", em("81"), "."]
            ],
            ua: [
              "Читаємо: три до степеня четвертого.",
              [em("3⁴"), " = ", em("81"), "."]
            ]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Co oznacza 4³?",
        ua: "Що означає 4³?"
      },
      taskId: "poteg-guided-iloczyn"
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "3⁴ = 3 · 4 = 12",
        ua: "3⁴ = 3 · 4 = 12"
      },
      visual: { kind: "power-false", base: 3, exponent: 4 },
      text: {
        pl: [
          "Wykładnik mówi, ile razy zapisujemy podstawę jako czynnik.",
          "Nie mnożymy podstawy przez wykładnik."
        ],
        ua: [
          "Показник каже, скільки разів записуємо основу як множник.",
          "Не множимо основу на показник."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Zapisz w postaci potęgi",
        ua: "Запиши у вигляді степеня"
      },
      taskId: "poteg-write-7"
    },
    {
      type: "practice",
      heading: {
        pl: "Oblicz",
        ua: "Обчисли"
      },
      taskId: "poteg-calc-32"
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem?",
        ua: "Чи вже вмію?"
      },
      taskId: "poteg-check-3"
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "2⁴ = 2 · 2 · 2 · 2",
      visual: { kind: "power-labeled", base: 2, exponent: 4 },
      text: {
        pl: [
          [em("2"), " — podstawa. ", em("4"), " — wykładnik."],
          "Wykładnik mówi, ile razy podstawa występuje jako czynnik."
        ],
        ua: [
          [em("2"), " — основа. ", em("4"), " — показник."],
          "Показник каже, скільки разів основа є множником."
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
          ["Później znów spotkasz: ", em("3⁴"), " = ? i pytanie: co oznacza liczba ", em("4"), "?"],
          "To nie nowy materiał — krótka powtórka."
        ],
        ua: [
          ["Пізніше знову зустрінеш: ", em("3⁴"), " = ? і питання: що означає число ", em("4"), "?"],
          "Це не новий матеріал — коротке повторення."
        ]
      }
    }
  ]
};
