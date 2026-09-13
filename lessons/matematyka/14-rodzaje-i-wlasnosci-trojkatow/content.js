function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Trzy boki, trzy kąty — nie zawsze się da",
        ua: "Три сторони, три кути — не завжди вийде"
      },
      visual: {
        kind: "triangle",
        triangle: "scalene",
        label: { pl: "trójkąt", ua: "трикутник" }
      },
      text: {
        pl: [
          "Z trzech patyczków próbujesz złożyć trójkąt.",
          "Czasem się zamyka. Czasem jeden patyczek jest za długi i zostaje szpara.",
          "Dziś: jakie bywają trójkąty i które w ogóle istnieją."
        ],
        ua: [
          "З трьох паличок намагаєшся скласти трикутник.",
          "Інколи замикається. Інколи одна паличка задовга і лишається щілина.",
          "Сьогодні: які бувають трикутники і які взагалі існують."
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
        { pl: "klasyfikować trójkąt według kątów", ua: "класифікувати трикутник за кутами" },
        { pl: "klasyfikować trójkąt według boków", ua: "класифікувати трикутник за сторонами" },
        { pl: "pamiętać, że suma kątów to 180°", ua: "пам’ятати, що сума кутів — 180°" },
        { pl: "sprawdzić nierówność trójkąta", ua: "перевірити нерівність трикутника" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Ten sam przepis, inny kształt",
        ua: "Той самий рецепт, інша форма"
      },
      visual: {
        kind: "triangle",
        triangle: "right",
        label: { pl: "jest kąt prosty", ua: "є прямий кут" }
      },
      text: {
        pl: [
          "Trzy boki, trzy wierzchołki, trzy kąty. To zawsze trójkąt.",
          "Ale jeden ma kwadracik w rogu, inny jest „spłaszczony”, jeszcze inny ma wszystkie boki równe."
        ],
        ua: [
          "Три сторони, три вершини, три кути. Це завжди трикутник.",
          "Але один має квадратик у розі, інший «сплющений», ще інший має всі сторони рівні."
        ]
      },
      prompt: {
        pl: [
          "Najpierw patrz na kąty: czy któryś jest prosty? rozwarty? czy wszystkie ostre?",
          "Potem na boki: czy któreś są równe?"
        ],
        ua: [
          "Спочатку дивись на кути: чи є прямий? тупий? чи всі гострі?",
          "Потім на сторони: чи якісь рівні?"
        ]
      }
    },
    {
      type: "classification",
      heading: {
        pl: "Według kątów i według boków",
        ua: "За кутами і за сторонами"
      },
      items: [
        { pl: "ostrokątny — wszystkie kąty ostre", ua: "гострокутний — усі кути гострі" },
        { pl: "prostokątny — jeden kąt prosty", ua: "прямокутний — один прямий кут" },
        { pl: "rozwartokątny — jeden kąt rozwarty", ua: "тупокутний — один тупий кут" },
        { pl: "równoboczny — trzy boki równe", ua: "рівносторонній — три сторони рівні" },
        { pl: "równoramienny — co najmniej dwa boki równe", ua: "рівнобедрений — принаймні дві сторони рівні" },
        { pl: "różnoboczny — wszystkie boki różne", ua: "різносторонній — усі сторони різні" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Suma kątów zawsze 180°",
        ua: "Сума кутів завжди 180°"
      },
      formula: "α + β + γ = 180°",
      visual: {
        kind: "triangle",
        triangle: "scalene",
        label: { pl: "trzy kąty składają się w półpełny", ua: "три кути складаються в розгорнутий" }
      },
      text: {
        pl: [
          "W każdym trójkącie trzy kąty wewnętrzne dają razem kąt półpełny.",
          ["Dlatego nie może być dwóch kątów prostych: ", em("90 + 90"), " to już 180, na trzeci kąt nic nie zostaje."]
        ],
        ua: [
          "У кожному трикутнику три внутрішні кути разом дають розгорнутий кут.",
          ["Тому не може бути двох прямих кутів: ", em("90 + 90"), " — уже 180, на третій кут нічого не лишається."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Szukamy trzeciego kąta",
        ua: "Шукаємо третій кут"
      },
      reveal: true,
      steps: [
        {
          formula: "40° + 70° + ? = 180°"
        },
        {
          formula: "180° − 110° = 70°",
          text: {
            pl: ["Trzeci kąt ma ", em("70°"), ". Dwa kąty po 70° — trójkąt jest równoramienny."],
            ua: ["Третій кут має ", em("70°"), ". Два кути по 70° — трикутник рівнобедрений."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Nierówność trójkąta",
        ua: "Нерівність трикутника"
      },
      formula: "a + b > c",
      text: {
        pl: [
          "Suma długości dwóch boków musi być większa niż trzeci bok.",
          "Sprawdzasz to dla każdego boku: najdłuższy nie może być dłuższy niż suma dwóch krótszych.",
          ["Patyczki ", em("2"), ", ", em("3"), " i ", em("6"), ": 2 + 3 = 5, a 5 nie jest większe od 6. Szpara. To nie trójkąt."]
        ],
        ua: [
          "Сума довжин двох сторін має бути більша за третю сторону.",
          "Перевіряєш це для кожної сторони: найдовша не може бути довша за суму двох коротших.",
          ["Палички ", em("2"), ", ", em("3"), " і ", em("6"), ": 2 + 3 = 5, а 5 не більше за 6. Щілина. Це не трикутник."]
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
        { pl: "trójkąt", ua: "трикутник" },
        { pl: "trójkąt ostrokątny", ua: "гострокутний трикутник" },
        { pl: "trójkąt prostokątny", ua: "прямокутний трикутник" },
        { pl: "trójkąt rozwartokątny", ua: "тупокутний трикутник" },
        { pl: "trójkąt równoboczny", ua: "рівносторонній трикутник" },
        { pl: "trójkąt równoramienny", ua: "рівнобедрений трикутник" },
        { pl: "trójkąt różnoboczny", ua: "різносторонній трикутник" },
        { pl: "nierówność trójkąta", ua: "нерівність трикутника" }
      ],
      phrases: [
        { pl: "Jakim trójkątem jest ten trójkąt?", ua: "Яким є цей трикутник?" },
        { pl: "Oblicz miarę trzeciego kąta.", ua: "Обчисли міру третього кута." },
        { pl: "Czy taki trójkąt istnieje?", ua: "Чи такий трикутник існує?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Trzeci kąt",
        ua: "Третій кут"
      },
      visual: {
        kind: "triangle",
        triangle: "right",
        label: { pl: "kąt prosty i 35°", ua: "прямий кут і 35°" }
      },
      task: {
        id: "troj-guided-third",
        type: "input-number",
        level: "A",
        question: {
          pl: ["W trójkącie prostokątnym jeden kąt ostry ma ", em("35°"), ". Ile stopni ma drugi kąt ostry? Wpisz liczbę."],
          ua: ["У прямокутному трикутнику один гострий кут має ", em("35°"), ". Скільки градусів має другий гострий кут? Введи число."]
        },
        answer: 55,
        hint: {
          pl: "Kąt prosty zabrał 90°. Na dwa ostre zostaje 90°.",
          ua: "Прямий кут забрав 90°. На два гострі лишається 90°."
        },
        explanation: {
          pl: "180 − 90 − 35 = 55.",
          ua: "180 − 90 − 35 = 55."
        },
        mistakes: [
          {
            answer: 145,
            feedback: {
              pl: "Odjąłeś tylko 35 od 180 i zapomniałeś o kącie prostym.",
              ua: "Відняв лише 35 від 180 і забув про прямий кут."
            }
          },
          {
            answer: 35,
            feedback: {
              pl: "To byłby równoramienny prostokątny — wtedy oba ostre mają po 45°, nie 35°.",
              ua: "То був би рівнобедрений прямокутний — тоді обидва гострі по 45°, не 35°."
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
        pl: "Z boków 4, 5 i 9 da się złożyć trójkąt.",
        ua: "Із сторін 4, 5 і 9 можна скласти трикутник."
      },
      text: {
        pl: [
          ["4 + 5 = 9. Suma dwóch boków ", em("nie jest większa"), " od trzeciego."],
          "Patyczki ułożą się w jedną kreskę. To nie trójkąt — brakuje „luzu”."
        ],
        ua: [
          ["4 + 5 = 9. Сума двох сторін ", em("не більша"), " за третю."],
          "Палички ляжуть в одну риску. Це не трикутник — бракує «люфту»."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Jaki według kątów?",
        ua: "Який за кутами?"
      },
      visual: {
        kind: "triangle",
        triangle: "obtuse",
        label: { pl: "jeden kąt szerszy niż róg kartki", ua: "один кут ширший за ріг аркуша" }
      },
      task: {
        id: "troj-prac-obtuse",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Trójkąt ma jeden kąt rozwarty. Jakim trójkątem jest według kątów?",
          ua: "Трикутник має один тупий кут. Яким він є за кутами?"
        },
        options: [
          { id: "a", label: { pl: "ostrokątny", ua: "гострокутний" } },
          { id: "b", label: { pl: "prostokątny", ua: "прямокутний" } },
          { id: "c", label: { pl: "rozwartokątny", ua: "тупокутний" } }
        ],
        answer: "c",
        hint: {
          pl: "Nazwa idzie za „największym” kątem.",
          ua: "Назва йде за «найбільшим» кутом."
        },
        explanation: {
          pl: "Jeden kąt rozwarty → trójkąt rozwartokątny. Drugi rozwarty nie zmieści się, bo suma to 180°.",
          ua: "Один тупий кут → тупокутний трикутник. Другий тупий не вміститься, бо сума 180°."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Równe boki",
        ua: "Рівні сторони"
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "wszystkie boki równe", ua: "усі сторони рівні" }
      },
      task: {
        id: "troj-prac-sides",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy trójkąt równoboczny jest też równoramienny.",
          ua: "Кожен рівносторонній трикутник є також рівнобедреним."
        },
        answer: true,
        hint: {
          pl: "Równoramienny znaczy: co najmniej dwa boki równe.",
          ua: "Рівнобедрений означає: принаймні дві сторони рівні."
        },
        explanation: {
          pl: "Równoboczny ma trzy boki równe, więc tym bardziej dwa. Jest szczególnym równoramiennym.",
          ua: "Рівносторонній має три рівні сторони, отже тим більше дві. Це особливий рівнобедрений."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Kąty 90°, 40° i …",
        ua: "Кути 90°, 40° і …"
      },
      text: {
        pl: [
          ["W trójkącie zmierzono ", em("90°"), " i ", em("40°"), "."],
          "Najpierw trzeci kąt, potem nazwa według kątów."
        ],
        ua: [
          ["У трикутнику виміряли ", em("90°"), " і ", em("40°"), "."],
          "Спочатку третій кут, потім назва за кутами."
        ]
      },
      task: {
        id: "troj-prob-name",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Trójkąt ma kąty ", em("90°"), " i ", em("40°"), ". Jakim jest według kątów?"],
          ua: ["Трикутник має кути ", em("90°"), " і ", em("40°"), ". Яким він є за кутами?"]
        },
        options: [
          { id: "a", label: { pl: "ostrokątny", ua: "гострокутний" } },
          { id: "b", label: { pl: "prostokątny", ua: "прямокутний" } },
          { id: "c", label: { pl: "rozwartokątny", ua: "тупокутний" } }
        ],
        answer: "b",
        hint: {
          pl: "Jest kąt 90°. Jak nazywamy taki trójkąt?",
          ua: "Є кут 90°. Як називаємо такий трикутник?"
        },
        explanation: {
          pl: "Trzeci kąt: 180 − 90 − 40 = 50°. Jest kąt prosty → trójkąt prostokątny.",
          ua: "Третій кут: 180 − 90 − 40 = 50°. Є прямий кут → прямокутний трикутник."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Czy te patyczki się zamkną?",
        ua: "Чи ці палички замкнуться?"
      },
      text: {
        pl: [
          ["Boki: ", em("5"), ", ", em("7"), " i ", em("10"), "."],
          "Nie rysuj w skali. Sprawdź nierówność przy najdłuższym boku."
        ],
        ua: [
          ["Сторони: ", em("5"), ", ", em("7"), " і ", em("10"), "."],
          "Не малюй у масштабі. Перевір нерівність при найдовшій стороні."
        ]
      },
      task: {
        id: "troj-prob-ineq",
        type: "true-false",
        level: "B",
        question: {
          pl: "Z odcinków 5, 7 i 10 można zbudować trójkąt.",
          ua: "З відрізків 5, 7 і 10 можна побудувати трикутник."
        },
        answer: true,
        hint: {
          pl: "Czy 5 + 7 jest większe od 10?",
          ua: "Чи 5 + 7 більше за 10?"
        },
        explanation: {
          pl: "5 + 7 = 12 > 10. 5 + 10 > 7 i 7 + 10 > 5. Trójkąt istnieje.",
          ua: "5 + 7 = 12 > 10. 5 + 10 > 7 і 7 + 10 > 5. Трикутник існує."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który trójkąt nie istnieje?",
        ua: "Який трикутник не існує?"
      },
      text: {
        pl: [
          "Nie musisz rysować. Wystarczy jedna suma dwóch boków."
        ],
        ua: [
          "Не треба малювати. Достатньо однієї суми двох сторін."
        ]
      },
      task: {
        id: "troj-chall-exist",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zestaw długości nie tworzy trójkąta?",
          ua: "Який набір довжин не утворює трикутника?"
        },
        options: [
          { id: "a", label: { pl: "3, 4, 5", ua: "3, 4, 5" } },
          { id: "b", label: { pl: "2, 3, 6", ua: "2, 3, 6" } },
          { id: "c", label: { pl: "6, 6, 6", ua: "6, 6, 6" } }
        ],
        answer: "b",
        hint: {
          pl: "Dodaj dwa krótsze i porównaj z najdłuższym. Musi być ostro więcej, nie „równo”.",
          ua: "Додай дві коротші і порівняй із найдовшою. Має бути строго більше, не «рівно»."
        },
        explanation: {
          pl: "2 + 3 = 5, a 5 < 6. Nierówność nie zachodzi. 3+4>5 oraz 6+6>6 — te dwa trójkąty istnieją.",
          ua: "2 + 3 = 5, а 5 < 6. Нерівність не виконується. 3+4>5 і 6+6>6 — ті два трикутники існують."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "3 + 4 = 7 > 5. Ten trójkąt istnieje (nawet ładnie się zamyka).",
              ua: "3 + 4 = 7 > 5. Цей трикутник існує (навіть гарно замикається)."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Równoboczny z bokami 6 istnieje. 6 + 6 > 6.",
              ua: "Рівносторонній зі сторонами 6 існує. 6 + 6 > 6."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Suma",
        ua: "Чи вже вмію? Сума"
      },
      task: {
        id: "troj-check-sum",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Kąty trójkąta: ", em("62°"), " i ", em("51°"), ". Ile stopni ma trzeci kąt? Wpisz liczbę."],
          ua: ["Кути трикутника: ", em("62°"), " і ", em("51°"), ". Скільки градусів має третій кут? Введи число."]
        },
        answer: 67,
        hint: {
          pl: "180 − 62 − 51.",
          ua: "180 − 62 − 51."
        },
        explanation: {
          pl: "62 + 51 = 113, 180 − 113 = 67.",
          ua: "62 + 51 = 113, 180 − 113 = 67."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Nierówność",
        ua: "Чи вже вмію? Нерівність"
      },
      task: {
        id: "troj-check-ineq",
        type: "true-false",
        level: "B",
        question: {
          pl: "Z odcinków 8, 1 i 6 można zbudować trójkąt.",
          ua: "З відрізків 8, 1 і 6 можна побудувати трикутник."
        },
        answer: false,
        hint: {
          pl: "1 + 6 = 7. Porównaj z 8.",
          ua: "1 + 6 = 7. Порівняй з 8."
        },
        explanation: {
          pl: "1 + 6 = 7 < 8. Nierówność trójkąta nie zachodzi.",
          ua: "1 + 6 = 7 < 8. Нерівність трикутника не виконується."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "α + β + γ = 180°     a + b > c",
      text: {
        pl: [
          "Kąty: ostrokątny, prostokątny, rozwartokątny.",
          "Boki: równoboczny, równoramienny, różnoboczny.",
          "Suma kątów 180°. Suma dwóch boków większa niż trzeci."
        ],
        ua: [
          "Кути: гострокутний, прямокутний, тупокутний.",
          "Сторони: рівносторонній, рівнобедрений, різносторонній.",
          "Сума кутів 180°. Сума двох сторін більша за третю."
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
          "Następnie: co specjalnego ma trójkąt równoramienny i równoboczny.",
          "Kąty przy podstawie, 60° i obwód."
        ],
        ua: [
          "Далі: що особливого має рівнобедрений і рівносторонній трикутник.",
          "Кути при основі, 60° і периметр."
        ]
      }
    }
  ]
};
