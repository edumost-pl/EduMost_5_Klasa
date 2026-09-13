function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Skoki po osi",
        ua: "Стрибки по осі"
      },
      formula: "5 + (−8) = −3",
      text: {
        pl: [
          "Dodawanie liczb całkowitych to spacery po osi.",
          "Plus dodatnia — w prawo. Plus ujemna — w lewo. Dziś bez odejmowania „w słupku”."
        ],
        ua: [
          "Додавання цілих чисел — це прогулянки по осі.",
          "Плюс додатна — праворуч. Плюс від’ємна — ліворуч. Сьогодні без віднімання «у стовпчик»."
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
        { pl: "dodać liczby całkowite skokami na osi", ua: "додати цілі числа стрибками на осі" },
        { pl: "obliczyć 5 + (−8)", ua: "обчислити 5 + (−8)" },
        { pl: "dodać kilka składników", ua: "додати кілька доданків" },
        { pl: "zauważyć, że różne pary mogą dać ten sam wynik", ua: "помітити, що різні пари можуть дати той самий результат" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Start, skok, lądowanie",
        ua: "Старт, стрибок, приземлення"
      },
      visual: { kind: "number-line", min: -4, max: 6, marks: [5, -3] },
      prompt: {
        pl: [
          "Start w 5. Dodajesz −8 — osiem kroków w lewo.",
          "Lądujesz w −3. Wynik to miejsce, w którym staniesz."
        ],
        ua: [
          "Старт у 5. Додаєш −8 — вісім кроків ліворуч.",
          "Приземлення в −3. Результат — місце, де станеш."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Dodatni składnik — w prawo, ujemny — w lewo",
        ua: "Додатний доданок — праворуч, від’ємний — ліворуч"
      },
      formula: "a + b",
      text: {
        pl: [
          "Zaczynasz na osi w pierwszym składniku.",
          ["Jeśli drugi jest dodatni, idziesz w ", em("prawo"), "."],
          ["Jeśli drugi jest ujemny, idziesz w ", em("lewo"), " o tyle jednostek, ile wynosi |b|."],
          "5 + 3 to trzy kroki w prawo. 5 + (−3) to trzy kroki w lewo."
        ],
        ua: [
          "Починаєш на осі з першого доданка.",
          ["Якщо другий додатний, ідеш ", em("праворуч"), "."],
          ["Якщо другий від’ємний, ідеш ", em("ліворуч"), " на стільки одиниць, скільки |b|."],
          "5 + 3 — три кроки праворуч. 5 + (−3) — три кроки ліворуч."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak policzyć 5 + (−8)?",
        ua: "Як полічити 5 + (−8)?"
      },
      visual: { kind: "number-line", min: -4, max: 6, marks: [5, -3] },
      reveal: true,
      steps: [
        {
          formula: "start: 5",
          text: {
            pl: "Stoisz w 5.",
            ua: "Стоїш у 5."
          }
        },
        {
          formula: "skok o 8 w lewo",
          text: {
            pl: "Dodajesz −8, więc |−8| = 8 kroków w lewo. Przechodzisz przez zero.",
            ua: "Додаєш −8, отже |−8| = 8 кроків ліворуч. Переходиш через нуль."
          }
        },
        {
          formula: "5 + (−8) = −3",
          text: {
            pl: ["Od 5 do 0 jest 5, zostaje 3 kroki — lądujesz w ", em("−3"), "."],
            ua: ["Від 5 до 0 є 5, лишається 3 кроки — приземлення в ", em("−3"), "."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Kilka składników",
        ua: "Кілька доданків"
      },
      reveal: true,
      steps: [
        { formula: "4 + (−1) + (−6)" },
        {
          formula: "4 + (−1) = 3",
          text: {
            pl: "Najpierw jeden skok: z 4 o 1 w lewo.",
            ua: "Спочатку один стрибок: з 4 на 1 ліворуч."
          }
        },
        {
          formula: "3 + (−6) = −3",
          text: {
            pl: ["Potem z 3 o 6 w lewo: przez zero do ", em("−3"), "."],
            ua: ["Потім з 3 на 6 ліворуч: через нуль до ", em("−3"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Para przeciwna daje zero",
        ua: "Протилежна пара дає нуль"
      },
      formula: "6 + (−6) = 0",
      visual: { kind: "number-line", min: -6, max: 6, marks: [6, 0] },
      text: {
        pl: [
          "Z 6 o 6 w lewo wracasz do zera.",
          ["Liczby ", em("n"), " i ", em("−n"), " znoszą się przy dodawaniu."],
          "To wygodne, gdy składasz kilka liczb: najpierw szukaj par do zera."
        ],
        ua: [
          "З 6 на 6 ліворуч повертаєшся до нуля.",
          ["Числа ", em("n"), " і ", em("−n"), " взаємно знищуються при додаванні."],
          "Це зручно, коли складаєш кілька чисел: спочатку шукай пари до нуля."
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
        { pl: "liczba całkowita", ua: "ціле число" },
        { pl: "składnik, suma", ua: "доданок, сума" },
        { pl: "liczby przeciwne", ua: "протилежні числа" },
        { pl: "oś liczbowa", ua: "числова вісь" }
      ],
      phrases: [
        { pl: "Oblicz sumę.", ua: "Обчисли суму." },
        { pl: "Zaznacz skok na osi.", ua: "Познач стрибок на осі." },
        { pl: "Dodaj liczby całkowite.", ua: "Додай цілі числа." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Jeden skok w lewo",
        ua: "Один стрибок ліворуч"
      },
      visual: { kind: "number-line", min: -5, max: 6, marks: [3] },
      task: {
        id: "dod-guided-3-8",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz: ", em("3 + (−8)"), "."],
          ua: ["Обчисли: ", em("3 + (−8)"), "."]
        },
        answer: -5,
        hint: {
          pl: "Z 3 idziesz 8 kroków w lewo. Przejdziesz przez zero.",
          ua: "З 3 ідеш 8 кроків ліворуч. Перейдеш через нуль."
        },
        explanation: {
          pl: "Z 3 do 0 jest 3 kroki, zostaje 5 w lewo: −5.",
          ua: "З 3 до 0 є 3 кроки, лишається 5 ліворуч: −5."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "Zgubiłeś znak. Lądujesz na lewo od zera: −5.",
              ua: "Згубив знак. Приземлення ліворуч від нуля: −5."
            }
          },
          {
            answer: 11,
            feedback: {
              pl: "Dodałeś 3 + 8 jak liczby dodatnie. Tu skaczesz w lewo.",
              ua: "Додав 3 + 8 як додатні. Тут стрибаєш ліворуч."
            }
          },
          {
            answer: -11,
            feedback: {
              pl: "To byłoby 3 + (−8) gdybyś odjął 8 od −3. Start jest w +3.",
              ua: "Так було б, якби старт був у −3. Старт у +3."
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
        pl: "5 + (−8) = 13",
        ua: "5 + (−8) = 13"
      },
      visual: { kind: "number-line", min: -4, max: 6, marks: [5, -3] },
      text: {
        pl: [
          "Znak minus przy 8 nie zamienia dodawania w „zlepianie” 5 i 8.",
          "Idziesz z 5 w lewo, nie w prawo. Wynik to −3."
        ],
        ua: [
          "Знак мінус біля 8 не змінює додавання на «склеювання» 5 і 8.",
          "Ідеш з 5 ліворуч, не праворуч. Результат −3."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dwa ujemne",
        ua: "Два від’ємні"
      },
      visual: { kind: "number-line", min: -8, max: 2, marks: [-2] },
      task: {
        id: "dod-two-neg",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz: ", em("(−2) + (−5)"), "."],
          ua: ["Обчисли: ", em("(−2) + (−5)"), "."]
        },
        answer: -7,
        hint: {
          pl: "Start w −2, potem jeszcze 5 w lewo.",
          ua: "Старт у −2, потім ще 5 ліворуч."
        },
        explanation: {
          pl: "Z −2 o 5 w lewo: −7.",
          ua: "З −2 на 5 ліворуч: −7."
        },
        mistakes: [
          {
            answer: -3,
            feedback: {
              pl: "To różnica 5 − 2. Oba skoki idą w lewo, więc −2 − 5 jednostek.",
              ua: "Це різниця 5 − 2. Обидва стрибки ліворуч, отже ще 5 одиниць."
            }
          },
          {
            answer: 7,
            feedback: {
              pl: "Kierunek: w lewo od zera. Wynik ujemny: −7.",
              ua: "Напрямок: ліворуч від нуля. Результат від’ємний: −7."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Przez zero w prawo",
        ua: "Через нуль праворуч"
      },
      task: {
        id: "dod-neg-plus-pos",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz: ", em("(−4) + 7"), "."],
          ua: ["Обчисли: ", em("(−4) + 7"), "."]
        },
        answer: 3,
        hint: {
          pl: "Z −4 idziesz 7 kroków w prawo.",
          ua: "З −4 ідеш 7 кроків праворуч."
        },
        explanation: {
          pl: "Z −4 do 0 jest 4, zostaje 3 w prawo: 3.",
          ua: "З −4 до 0 є 4, лишається 3 праворуч: 3."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Winda w budynku",
        ua: "Ліфт у будинку"
      },
      text: {
        pl: [
          ["Parter to 0. Jesteś na ", em("2"), " piętrze."],
          ["Jedziesz 5 pięter w dół (to ", em("+(−5)"), "), potem 1 piętro w górę."]
        ],
        ua: [
          ["Партер — 0. Ти на ", em("2"), " поверсі."],
          ["Їдеш 5 поверхів униз (це ", em("+(−5)"), "), потім 1 поверх угору."]
        ]
      },
      task: {
        id: "dod-lift",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Na którym piętrze staniesz? Oblicz ", em("2 + (−5) + 1"), "."],
          ua: ["На якому поверсі станеш? Обчисли ", em("2 + (−5) + 1"), "."]
        },
        answer: -2,
        hint: {
          pl: "Najpierw 2 + (−5), potem +1.",
          ua: "Спочатку 2 + (−5), потім +1."
        },
        explanation: {
          pl: "2 + (−5) = −3. −3 + 1 = −2. Dwa piętra poniżej parteru.",
          ua: "2 + (−5) = −3. −3 + 1 = −2. Два поверхи нижче партеру."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Trzy składniki",
        ua: "Три доданки"
      },
      text: {
        pl: [
          ["Oblicz ", em("6 + (−2) + (−4)"), "."],
          "Możesz najpierw złożyć ujemne, albo iść po kolei."
        ],
        ua: [
          ["Обчисли ", em("6 + (−2) + (−4)"), "."],
          "Можеш спочатку скласти від’ємні або йти по черзі."
        ]
      },
      task: {
        id: "dod-three",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Wpisz wartość ", em("6 + (−2) + (−4)"), "."],
          ua: ["Введи значення ", em("6 + (−2) + (−4)"), "."]
        },
        answer: 0,
        hint: {
          pl: "6 + (−2) = 4. Potem 4 + (−4).",
          ua: "6 + (−2) = 4. Потім 4 + (−4)."
        },
        explanation: {
          pl: "6 + (−2) = 4. 4 + (−4) = 0. Para 4 i −4 znosi się.",
          ua: "6 + (−2) = 4. 4 + (−4) = 0. Пара 4 і −4 знищується."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Ten sam wynik, inne składniki",
        ua: "Той самий результат, інші доданки"
      },
      text: {
        pl: [
          "Nie musisz liczyć wszystkich. Która para na pewno ląduje w tym samym miejscu?"
        ],
        ua: [
          "Не треба рахувати всі. Яка пара точно приземлиться в тому самому місці?"
        ]
      },
      task: {
        id: "dod-same-sum",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które dwa dodawania dają ten sam wynik?",
          ua: "Які два додавання дають той самий результат?"
        },
        options: [
          { id: "a", label: { pl: "5 + (−8) oraz (−1) + (−2)", ua: "5 + (−8) і (−1) + (−2)" } },
          { id: "b", label: { pl: "4 + (−1) oraz 4 + 1", ua: "4 + (−1) і 4 + 1" } },
          { id: "c", label: { pl: "3 + (−3) oraz 2 + (−5)", ua: "3 + (−3) і 2 + (−5)" } }
        ],
        answer: "a",
        hint: {
          pl: "5 + (−8) już znasz. Dokąd idzie (−1) + (−2)?",
          ua: "5 + (−8) уже знаєш. Куди йде (−1) + (−2)?"
        },
        explanation: {
          pl: "5 + (−8) = −3. (−1) + (−2) = −3. Te same lądowanie, inne skoki. 4+(−1)=3, a 4+1=5. 3+(−3)=0, a 2+(−5)=−3.",
          ua: "5 + (−8) = −3. (−1) + (−2) = −3. Те саме приземлення, інші стрибки. 4+(−1)=3, а 4+1=5. 3+(−3)=0, а 2+(−5)=−3."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jeden skok w lewo, drugi w prawo. 3 i 5 to nie to samo.",
              ua: "Один стрибок ліворуч, другий праворуч. 3 і 5 — не те саме."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "3 + (−3) = 0, a 2 + (−5) = −3. Różne wyniki.",
              ua: "3 + (−3) = 0, а 2 + (−5) = −3. Різні результати."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Plus ujemna",
        ua: "Чи вже вмію? Плюс від’ємна"
      },
      task: {
        id: "dod-check-5-8",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz: ", em("5 + (−8)"), "."],
          ua: ["Обчисли: ", em("5 + (−8)"), "."]
        },
        answer: -3,
        hint: {
          pl: "Z 5 o 8 w lewo.",
          ua: "З 5 на 8 ліворуч."
        },
        explanation: {
          pl: "5 + (−8) = −3.",
          ua: "5 + (−8) = −3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Kilka liczb",
        ua: "Чи вже вмію? Кілька чисел"
      },
      task: {
        id: "dod-check-three",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz: ", em("(−3) + 5 + (−1)"), "."],
          ua: ["Обчисли: ", em("(−3) + 5 + (−1)"), "."]
        },
        answer: 1,
        hint: {
          pl: "−3 + 5 = 2. Potem 2 + (−1).",
          ua: "−3 + 5 = 2. Потім 2 + (−1)."
        },
        explanation: {
          pl: "(−3) + 5 = 2. 2 + (−1) = 1.",
          ua: "(−3) + 5 = 2. 2 + (−1) = 1."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "5 + (−8) = −3",
      visual: { kind: "number-line", min: -4, max: 6, marks: [5, -3] },
      text: {
        pl: [
          "Start w pierwszym składniku. Dodatni — w prawo, ujemny — w lewo.",
          "Kilka składników: skok po skoku. n + (−n) = 0."
        ],
        ua: [
          "Старт у першому доданку. Додатний — праворуч, від’ємний — ліворуч.",
          "Кілька доданків: стрибок за стрибком. n + (−n) = 0."
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
          "Później zapytamy, o ile różnią się dwie liczby — to odległość na osi, nie nowy algorytm odejmowania.",
          "Dziś pamiętaj skok: 5 + (−8) = −3."
        ],
        ua: [
          "Пізніше запитаємо, на скільки різняться два числа — це відстань на осі, не новий алгоритм віднімання.",
          "Сьогодні пам’ятай стрибок: 5 + (−8) = −3."
        ]
      }
    }
  ]
};
