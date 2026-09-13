function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pudełko z klocków",
        ua: "Коробка з кубиків"
      },
      formula: "V = a · b · c",
      text: {
        pl: [
          "Prostopadłościan można wypełnić jednakowymi kostkami.",
          "Długość razy szerokość razy wysokość — tyle kostek, tyle objętości."
        ],
        ua: [
          "Прямокутний паралелепіпед можна заповнити однаковими кубиками.",
          "Довжина на ширину на висоту — стільки кубиків, стільки об’єму."
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
        { pl: "obliczyć V = a · b · c", ua: "обчислити V = a · b · c" },
        { pl: "dla sześcianu użyć V = a³", ua: "для куба використати V = a³" },
        { pl: "zauważyć, że ta sama objętość może mieć różne krawędzie", ua: "помітити, що той самий об’єм може мати різні ребра" },
        { pl: "wyznaczyć brakującą krawędź, gdy znasz V", ua: "знайти відсутнє ребро, коли знаєш V" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Warstwy klocków",
        ua: "Шари кубиків"
      },
      visual: { kind: "grid", rows: 2, cols: 4 },
      prompt: {
        pl: [
          "Jedna warstwa 4 na 2 to 8 klocków. Dwie takie warstwy — 16.",
          "To samo: 4 · 2 · 2."
        ],
        ua: [
          "Один шар 4 на 2 — 8 кубиків. Два такі шари — 16.",
          "Те саме: 4 · 2 · 2."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Objętość prostopadłościanu",
        ua: "Об’єм прямокутного паралелепіпеда"
      },
      formula: "V = a · b · c",
      text: {
        pl: [
          "a, b, c to trzy krawędzie wychodzące z jednego wierzchołka.",
          "Jednostka: jeśli krawędzie są w cm, objętość jest w cm³.",
          "Kolejność mnożenia nie zmienia wyniku."
        ],
        ua: [
          "a, b, c — три ребра з однієї вершини.",
          "Одиниця: якщо ребра в см, об’єм у см³.",
          "Порядок множення не змінює результату."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak policzyć V = 5 · 3 · 2?",
        ua: "Як полічити V = 5 · 3 · 2?"
      },
      reveal: true,
      steps: [
        { formula: "V = 5 · 3 · 2" },
        { formula: "15 · 2" },
        {
          formula: "V = 30",
          text: {
            pl: ["Jeśli krawędzie są w cm, ", em("V = 30 cm³"), "."],
            ua: ["Якщо ребра в см, ", em("V = 30 см³"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Sześcian: V = a³",
        ua: "Куб: V = a³"
      },
      formula: "V = a · a · a = a³",
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "ściana sześcianu — kwadrat o boku a", ua: "грань куба — квадрат зі стороною a" }
      },
      text: {
        pl: [
          "U sześcianu wszystkie krawędzie są równe.",
          ["Dlatego ", em("4³ = 4 · 4 · 4 = 64"), "."]
        ],
        ua: [
          "У куба всі ребра рівні.",
          ["Тому ", em("4³ = 4 · 4 · 4 = 64"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Ta sama objętość, inne krawędzie",
        ua: "Той самий об’єм, інші ребра"
      },
      reveal: true,
      steps: [
        {
          formula: "2 · 3 · 6 = 36",
          text: {
            pl: "Pudełko 2 na 3 na 6.",
            ua: "Коробка 2 на 3 на 6."
          }
        },
        {
          formula: "4 · 3 · 3 = 36",
          text: {
            pl: ["Inne krawędzie, ta sama objętość ", em("36"), "."],
            ua: ["Інші ребра, той самий об’єм ", em("36"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Odwróć: znajdź krawędź",
        ua: "Навпаки: знайди ребро"
      },
      formula: "c = V : (a · b)",
      text: {
        pl: [
          "Znasz objętość i dwie krawędzie — trzecią dostaniesz przez dzielenie.",
          ["V = 48, a = 4, b = 3. Najpierw 4 · 3 = 12, potem 48 : 12 = ", em("4"), "."]
        ],
        ua: [
          "Знаєш об’єм і два ребра — третє отримаєш діленням.",
          ["V = 48, a = 4, b = 3. Спочатку 4 · 3 = 12, потім 48 : 12 = ", em("4"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Na marginesie: pole powierzchni",
        ua: "Мимохідь: площа поверхні"
      },
      formula: "P = 2 · (a·b + b·c + a·c)",
      text: {
        pl: [
          "Sześć prostokątów: dwie pary każdej ściany.",
          "Dla 5, 3, 2: 2 · (15 + 6 + 10) = 62. To tylko szybki wzór — nie rozwijamy go jak w klasie 8."
        ],
        ua: [
          "Шість прямокутників: дві пари кожної грані.",
          "Для 5, 3, 2: 2 · (15 + 6 + 10) = 62. Це лише швидка формула — не розвиваємо її як у 8 класі."
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
        { pl: "objętość prostopadłościanu", ua: "об’єм прямокутного паралелепіпеда" },
        { pl: "krawędź", ua: "ребро" },
        { pl: "sześcian", ua: "куб" },
        { pl: "pole powierzchni", ua: "площа поверхні" }
      ],
      phrases: [
        { pl: "Oblicz objętość.", ua: "Обчисли об’єм." },
        { pl: "Wyznacz brakującą krawędź.", ua: "Знайди відсутнє ребро." },
        { pl: "Czy objętości są równe?", ua: "Чи об’єми рівні?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Policz objętość",
        ua: "Полічи об’єм"
      },
      task: {
        id: "objet-guided-abc",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Krawędzie ", em("4 cm"), ", ", em("3 cm"), ", ", em("2 cm"), ". Ile cm³ ma objętość?"],
          ua: ["Ребра ", em("4 см"), ", ", em("3 см"), ", ", em("2 см"), ". Скільки см³ має об’єм?"]
        },
        answer: 24,
        hint: {
          pl: "4 · 3 · 2.",
          ua: "4 · 3 · 2."
        },
        explanation: {
          pl: "4 · 3 = 12, 12 · 2 = 24 cm³.",
          ua: "4 · 3 = 12, 12 · 2 = 24 см³."
        },
        mistakes: [
          {
            answer: 9,
            feedback: {
              pl: "Dodałeś 4+3+2. Objętość to iloczyn, nie suma.",
              ua: "Додав 4+3+2. Об’єм — добуток, не сума."
            }
          },
          {
            answer: 12,
            feedback: {
              pl: "To tylko 4 · 3. Pomnóż jeszcze przez 2.",
              ua: "Це лише 4 · 3. Помнож ще на 2."
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
        pl: "V = 5 + 3 + 2 = 10",
        ua: "V = 5 + 3 + 2 = 10"
      },
      text: {
        pl: [
          "Objętość nie jest sumą krawędzi.",
          ["V = 5 · 3 · 2 = ", em("30"), "."]
        ],
        ua: [
          "Об’єм — не сума ребер.",
          ["V = 5 · 3 · 2 = ", em("30"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Sześcian",
        ua: "Куб"
      },
      task: {
        id: "objet-cube",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Sześcian o krawędzi ", em("3 cm"), ". Ile cm³ ma objętość?"],
          ua: ["Куб із ребром ", em("3 см"), ". Скільки см³ має об’єм?"]
        },
        answer: 27,
        hint: {
          pl: "3 · 3 · 3 albo 3³.",
          ua: "3 · 3 · 3 або 3³."
        },
        explanation: {
          pl: "3³ = 27 cm³.",
          ua: "3³ = 27 см³."
        },
        mistakes: [
          {
            answer: 9,
            feedback: {
              pl: "9 to 3 · 3, pole jednej ściany. Objętość to jeszcze razy 3.",
              ua: "9 — це 3 · 3, площа однієї грані. Об’єм — ще рази 3."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Znajdź krawędź",
        ua: "Знайди ребро"
      },
      task: {
        id: "objet-find-edge",
        type: "input-number",
        level: "B",
        question: {
          pl: ["V = ", em("36 cm³"), ", a = ", em("3 cm"), ", b = ", em("3 cm"), ". Ile cm ma krawędź c?"],
          ua: ["V = ", em("36 см³"), ", a = ", em("3 см"), ", b = ", em("3 см"), ". Скільки см має ребро c?"]
        },
        answer: 4,
        hint: {
          pl: "c = 36 : (3 · 3).",
          ua: "c = 36 : (3 · 3)."
        },
        explanation: {
          pl: "3 · 3 = 9, 36 : 9 = 4 cm.",
          ua: "3 · 3 = 9, 36 : 9 = 4 см."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Pudełko na kredki",
        ua: "Коробка для олівців"
      },
      text: {
        pl: [
          ["Pudełko ma krawędzie ", em("10 cm"), ", ", em("4 cm"), " i ", em("5 cm"), "."]
        ],
        ua: [
          ["Коробка має ребра ", em("10 см"), ", ", em("4 см"), " і ", em("5 см"), "."]
        ]
      },
      task: {
        id: "objet-box",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile cm³ ma objętość pudełka?",
          ua: "Скільки см³ має об’єм коробки?"
        },
        answer: 200,
        hint: {
          pl: "10 · 4 · 5.",
          ua: "10 · 4 · 5."
        },
        explanation: {
          pl: "10 · 4 = 40, 40 · 5 = 200 cm³.",
          ua: "10 · 4 = 40, 40 · 5 = 200 см³."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwa pudełka",
        ua: "Дві коробки"
      },
      text: {
        pl: [
          ["Pierwsze: ", em("2 cm"), " × ", em("6 cm"), " × ", em("4 cm"), "."],
          ["Drugie: ", em("8 cm"), " × ", em("3 cm"), " × ", em("2 cm"), "."]
        ],
        ua: [
          ["Перша: ", em("2 см"), " × ", em("6 см"), " × ", em("4 см"), "."],
          ["Друга: ", em("8 см"), " × ", em("3 см"), " × ", em("2 см"), "."]
        ]
      },
      task: {
        id: "objet-two-boxes",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy oba pudełka mają tę samą objętość?",
          ua: "Чи обидві коробки мають той самий об’єм?"
        },
        answer: true,
        hint: {
          pl: "Policz 2·6·4 oraz 8·3·2.",
          ua: "Полічи 2·6·4 і 8·3·2."
        },
        explanation: {
          pl: "2·6·4 = 48 i 8·3·2 = 48. Ta sama objętość, inne krawędzie.",
          ua: "2·6·4 = 48 і 8·3·2 = 48. Той самий об’єм, інші ребра."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Różne krawędzie, to samo V",
        ua: "Різні ребра, те саме V"
      },
      text: {
        pl: [
          "Nie zgaduj na oko. Która para na pewno ma równą objętość?"
        ],
        ua: [
          "Не вгадуй на око. Яка пара точно має рівний об’єм?"
        ]
      },
      task: {
        id: "objet-same-v",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które dwa prostopadłościany mają tę samą objętość?",
          ua: "Які два прямокутні паралелепіпеди мають той самий об’єм?"
        },
        options: [
          { id: "a", label: { pl: "1×6×4 oraz 2×3×4", ua: "1×6×4 і 2×3×4" } },
          { id: "b", label: { pl: "2×2×5 oraz 2×5×3", ua: "2×2×5 і 2×5×3" } },
          { id: "c", label: { pl: "3×3×3 oraz 2×2×8", ua: "3×3×3 і 2×2×8" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz trzy iloczyny. 1·6·4 = ?",
          ua: "Полічи три добутки. 1·6·4 = ?"
        },
        explanation: {
          pl: "1·6·4 = 24 i 2·3·4 = 24. Natomiast 2·2·5 = 20, a 2·5·3 = 30. 3³ = 27, a 2·2·8 = 32.",
          ua: "1·6·4 = 24 і 2·3·4 = 24. Натомість 2·2·5 = 20, а 2·5·3 = 30. 3³ = 27, а 2·2·8 = 32."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "20 i 30 — różne objętości.",
              ua: "20 і 30 — різні об’єми."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "27 i 32 — blisko, ale nie równo.",
              ua: "27 і 32 — близько, але не рівно."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Iloczyn",
        ua: "Чи вже вмію? Добуток"
      },
      task: {
        id: "objet-check-mul",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz objętość: ", em("5"), " × ", em("2"), " × ", em("3"), "."],
          ua: ["Обчисли об’єм: ", em("5"), " × ", em("2"), " × ", em("3"), "."]
        },
        answer: 30,
        hint: {
          pl: "5 · 2 · 3.",
          ua: "5 · 2 · 3."
        },
        explanation: {
          pl: "5 · 2 = 10, 10 · 3 = 30.",
          ua: "5 · 2 = 10, 10 · 3 = 30."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Sześcian",
        ua: "Чи вже вмію? Куб"
      },
      task: {
        id: "objet-check-cube",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Sześcian o krawędzi ", em("4"), ". Ile wynosi V?"],
          ua: ["Куб із ребром ", em("4"), ". Чому дорівнює V?"]
        },
        answer: 64,
        hint: {
          pl: "4 · 4 · 4.",
          ua: "4 · 4 · 4."
        },
        explanation: {
          pl: "4³ = 64.",
          ua: "4³ = 64."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "V = a · b · c,    sześcian: a³",
      text: {
        pl: [
          "Mnożysz trzy krawędzie. Ta sama objętość może mieć różne krawędzie.",
          "Brakującą krawędź: V dzielisz przez iloczyn pozostałych."
        ],
        ua: [
          "Множиш три ребра. Той самий об’єм може мати різні ребра.",
          "Відсутнє ребро: V ділиш на добуток решти."
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
          "Zaraz rozłożymy prostopadłościan na siatkę z sześciu prostokątów.",
          "Objętość zostaje w cm³ — siatka pokaże ściany."
        ],
        ua: [
          "Зараз розкладемо паралелепіпед на розгортку з шести прямокутників.",
          "Об’єм лишається в см³ — розгортка покаже грані."
        ]
      }
    }
  ]
};
