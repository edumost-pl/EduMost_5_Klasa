function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Inne kratki — najpierw wspólny pasek",
        ua: "Інші клітинки — спочатку спільна смужка"
      },
      formula: "1/2 + 1/3 = 3/6 + 2/6",
      text: {
        pl: [
          "Pół czekolady i jedna trzecia to nie te same kostki.",
          "Zanim dodasz, pokrój obie na takie same kawałki — wygodny wspólny mianownik."
        ],
        ua: [
          "Пів шоколаду і одна третя — не ті самі часточки.",
          "Перш ніж додати, наріж обидва на однакові шматки — зручний спільний знаменник."
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
        { pl: "znaleźć wygodny wspólny mianownik", ua: "знайти зручний спільний знаменник" },
        { pl: "dodać ułamki o różnych mianownikach", ua: "додати дроби з різними знаменниками" },
        { pl: "odjąć ułamki o różnych mianownikach", ua: "відняти дроби з різними знаменниками" },
        { pl: "odrzucić wspólny mianownik, który jest niepotrzebnie duży", ua: "відкинути спільний знаменник, який зайве великий" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Połówka i ćwiartka",
        ua: "Половина і чверть"
      },
      visual: { kind: "fraction-bar", total: 2, filled: 1 },
      text: {
        pl: [
          ["Lewy pasek: ", em("1/2"), " — dwie wielkie kratki."],
          "Prawego jeszcze nie ma. Ćwiartka potrzebuje drobniejszych kratek."
        ],
        ua: [
          ["Ліва смужка: ", em("1/2"), " — дві великі клітинки."],
          "Правої ще немає. Чверть потребує дрібніших клітинок."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Oba na czwórkach",
        ua: "Обидва на четвертих"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      prompt: {
        pl: [
          ["", em("1/2 = 2/4"), ". Dołóż ", em("1/4"), "."],
          ["Trzy zamalowane z czterech: ", em("3/4"), "."],
          ["Wygodny mianownik to ", em("4"), " — nie trzeba 8 ani 12."]
        ],
        ua: [
          ["", em("1/2 = 2/4"), ". Доклади ", em("1/4"), "."],
          ["Три замальовані з чотирьох: ", em("3/4"), "."],
          ["Зручний знаменник — ", em("4"), ", не треба 8 чи 12."]
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Szóstka na siatce 2×3",
        ua: "Шістка на сітці 2×3"
      },
      visual: { kind: "grid", rows: 2, cols: 3 },
      text: {
        pl: [
          ["Siatka ", em("2"), " na ", em("3"), " ma ", em("6"), " równych kratek."],
          ["Dlatego dla ", em("1/2"), " i ", em("1/3"), " wygodny mianownik to ", em("6"), ": trzy kratki i dwie kratki."]
        ],
        ua: [
          ["Сітка ", em("2"), " на ", em("3"), " має ", em("6"), " рівних клітинок."],
          ["Тому для ", em("1/2"), " і ", em("1/3"), " зручний знаменник — ", em("6"), ": три клітинки і дві клітинки."]
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Wynik 3/4 na osi",
        ua: "Результат 3/4 на осі"
      },
      visual: { kind: "number-line", min: 0, max: 1, marks: [0.75] },
      text: {
        pl: [
          ["", em("1/2 + 1/4 = 3/4"), " — kropka między połową a jedynką."]
        ],
        ua: [
          ["", em("1/2 + 1/4 = 3/4"), " — крапка між половиною і одиницею."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Wygodny wspólny mianownik",
        ua: "Зручний спільний знаменник"
      },
      formula: "1/2 + 1/3 → mianownik 6",
      text: {
        pl: [
          "Szukasz liczby, która dzieli się przez oba mianowniki.",
          ["Dla ", em("2"), " i ", em("3"), " wygodnie jest ", em("6"), " (bo ", em("2 · 3 = 6"), ")."],
          "Czasem wystarczy mniejsza: dla 2 i 4 wystarczy 4, nie 8.",
          "Potem rozszerzasz oba ułamki i dodajesz liczniki — jak wczoraj."
        ],
        ua: [
          "Шукаєш число, яке ділиться на обидва знаменники.",
          ["Для ", em("2"), " і ", em("3"), " зручно ", em("6"), " (бо ", em("2 · 3 = 6"), ")."],
          "Інколи вистачить меншого: для 2 і 4 вистачить 4, не 8.",
          "Потім розширюєш обидва дроби і додаєш чисельники — як учора."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "1/2 + 1/4",
        ua: "1/2 + 1/4"
      },
      reveal: true,
      steps: [
        {
          formula: "mianownik 4",
          text: {
            pl: ["", em("4"), " dzieli się przez ", em("2"), " i przez ", em("4"), "."],
            ua: ["", em("4"), " ділиться на ", em("2"), " і на ", em("4"), "."]
          }
        },
        { formula: "1/2 = 2/4" },
        { formula: "2/4 + 1/4 = 3/4" },
        {
          visual: { kind: "fraction-bar", total: 4, filled: 3 },
          text: {
            pl: ["Wynik: ", em("3/4"), "."],
            ua: ["Результат: ", em("3/4"), "."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "1/3 + 1/6",
        ua: "1/3 + 1/6"
      },
      reveal: true,
      steps: [
        {
          formula: "mianownik 6",
          text: {
            pl: ["Szóstka jest wygodna: już jest w ", em("1/6"), "."],
            ua: ["Шістка зручна: вона вже є в ", em("1/6"), "."]
          }
        },
        { formula: "1/3 = 2/6" },
        { formula: "2/6 + 1/6 = 3/6" },
        {
          formula: "3/6 = 1/2",
          text: {
            pl: "Skróć przez wspólny dzielnik 3.",
            ua: "Скороти на спільний дільник 3."
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
        { pl: "wspólny mianownik", ua: "спільний знаменник" },
        { pl: "wygodny wspólny mianownik", ua: "зручний спільний знаменник" },
        { pl: "sprowadzić do wspólnego mianownika", ua: "звести до спільного знаменника" },
        { pl: "rozszerzanie", ua: "розширення" }
      ],
      phrases: [
        { pl: "Sprowadź do wspólnego mianownika.", ua: "Зведи до спільного знаменника." },
        { pl: "Wybierz wygodny mianownik.", ua: "Вибери зручний знаменник." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Połówka i szósta",
        ua: "Половина і шоста"
      },
      task: {
        id: "ul24-guided-12-16",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/2 + 1/6"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/2 + 1/6"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["4/6", "2/3"],
        hint: {
          pl: "Wygodny mianownik to 6. 1/2 = 3/6.",
          ua: "Зручний знаменник — 6. 1/2 = 3/6."
        },
        explanation: {
          pl: "1/2 = 3/6, 3/6 + 1/6 = 4/6 = 2/3.",
          ua: "1/2 = 3/6, 3/6 + 1/6 = 4/6 = 2/3."
        },
        mistakes: [
          {
            answer: "2/8",
            feedback: {
              pl: "Dodałeś liczniki i mianowniki. Najpierw wspólny mianownik.",
              ua: "Додав чисельники і знаменники. Спочатку спільний знаменник."
            }
          },
          {
            answer: "2/6",
            feedback: {
              pl: "1/2 to 3/6, nie 1/6. 3 + 1 = 4.",
              ua: "1/2 — це 3/6, не 1/6. 3 + 1 = 4."
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
        pl: "1/2 + 1/3 = 2/5",
        ua: "1/2 + 1/3 = 2/5"
      },
      text: {
        pl: [
          "Ktoś dodał 1 + 1 i 2 + 3.",
          "To nie są te same kratki — najpierw wspólny mianownik 6.",
          ["", em("1/2 = 3/6"), ", ", em("1/3 = 2/6"), ", suma ", em("5/6"), "."]
        ],
        ua: [
          "Хтось додав 1 + 1 і 2 + 3.",
          "Це не ті самі клітинки — спочатку спільний знаменник 6.",
          ["", em("1/2 = 3/6"), ", ", em("1/3 = 2/6"), ", сума ", em("5/6"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ćwiartka i połówka",
        ua: "Чверть і половина"
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      task: {
        id: "ul24-14-plus-12",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/4 + 1/2"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/4 + 1/2"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/4",
        hint: {
          pl: "Wystarczy mianownik 4, nie 8. 1/2 = 2/4.",
          ua: "Вистачить знаменника 4, не 8. 1/2 = 2/4."
        },
        explanation: {
          pl: "1/2 = 2/4, 1/4 + 2/4 = 3/4.",
          ua: "1/2 = 2/4, 1/4 + 2/4 = 3/4."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Odejmij szóste od trzecich",
        ua: "Відніми шості від третіх"
      },
      task: {
        id: "ul24-23-minus-16",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("2/3 − 1/6"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/3 − 1/6"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/6", "1/2"],
        hint: {
          pl: "Mianownik 6. 2/3 = 4/6.",
          ua: "Знаменник 6. 2/3 = 4/6."
        },
        explanation: {
          pl: "2/3 = 4/6, 4/6 − 1/6 = 3/6 = 1/2.",
          ua: "2/3 = 4/6, 4/6 − 1/6 = 3/6 = 1/2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Trzecia i ćwiartka",
        ua: "Третя і чверть"
      },
      task: {
        id: "ul24-13-plus-14",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1/3 + 1/4"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/3 + 1/4"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "7/12",
        hint: {
          pl: "Wygodny mianownik: 3 · 4 = 12.",
          ua: "Зручний знаменник: 3 · 4 = 12."
        },
        explanation: {
          pl: "1/3 = 4/12, 1/4 = 3/12, suma 7/12.",
          ua: "1/3 = 4/12, 1/4 = 3/12, сума 7/12."
        },
        mistakes: [
          {
            answer: "2/7",
            feedback: {
              pl: "To suma liczników i mianowników. Wspólny mianownik to 12.",
              ua: "Це сума чисельників і знаменників. Спільний знаменник — 12."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Która dwunastka?",
        ua: "Яка дванадцятка?"
      },
      task: {
        id: "ul24-tf-mianownik-12",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Zdanie: dla ", em("1/4"), " i ", em("1/6"), " wygodny wspólny mianownik to ", em("12"), "."],
          ua: ["Речення: для ", em("1/4"), " і ", em("1/6"), " зручний спільний знаменник — ", em("12"), "."]
        },
        answer: true,
        hint: {
          pl: "12 dzieli się przez 4 i przez 6. 24 też, ale jest większy.",
          ua: "12 ділиться на 4 і на 6. 24 теж, але він більший."
        },
        explanation: {
          pl: "Tak. 12 : 4 = 3 i 12 : 6 = 2. To wygodny wspólny mianownik.",
          ua: "Так. 12 : 4 = 3 і 12 : 6 = 2. Це зручний спільний знаменник."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Przepis na ciasto",
        ua: "Рецепт тіста"
      },
      text: {
        pl: [
          ["W przepisie: ", em("1/2"), " szklanki cukru."],
          ["Ola dołożyła jeszcze ", em("1/4"), " szklanki."]
        ],
        ua: [
          ["У рецепті: ", em("1/2"), " склянки цукру."],
          ["Оля доклала ще ", em("1/4"), " склянки."]
        ]
      },
      visual: { kind: "fraction-bar", total: 4, filled: 3 },
      task: {
        id: "ul24-przepis-cukier",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Ile cukru jest w misce? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки цукру в мисці? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/4",
        hint: {
          pl: "1/2 = 2/4. Dołóż 1/4.",
          ua: "1/2 = 2/4. Доклади 1/4."
        },
        explanation: {
          pl: "1/2 + 1/4 = 2/4 + 1/4 = 3/4 szklanki.",
          ua: "1/2 + 1/4 = 2/4 + 1/4 = 3/4 склянки."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dwie wstążki",
        ua: "Дві стрічки"
      },
      text: {
        pl: [
          ["Niebieska wstążka: ", em("1/3"), " metra."],
          ["Czerwona: ", em("1/6"), " metra. Sklejamy je."]
        ],
        ua: [
          ["Синя стрічка: ", em("1/3"), " метра."],
          ["Червона: ", em("1/6"), " метра. Склеюємо їх."]
        ]
      },
      task: {
        id: "ul24-wstazki-13-16",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Jaka jest łączna długość? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Яка спільна довжина? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/6", "1/2"],
        hint: {
          pl: "1/3 = 2/6. Potem dodaj 1/6.",
          ua: "1/3 = 2/6. Потім додай 1/6."
        },
        explanation: {
          pl: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 metra.",
          ua: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 метра."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Niepotrzebnie duży mianownik",
        ua: "Зайве великий знаменник"
      },
      text: {
        pl: [
          ["Kamil dodaje ", em("1/2 + 1/3"), "."],
          ["Dwie liczby poniżej działają. Jedna jest wygodna, druga niepotrzebnie duża. Trzecia w ogóle nie pasuje."]
        ],
        ua: [
          ["Каміль додає ", em("1/2 + 1/3"), "."],
          ["Два числа нижче «працюють». Одне зручне, друге зайве велике. Третє взагалі не пасує."]
        ]
      },
      task: {
        id: "ul24-challenge-duzy-mianownik",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który wspólny mianownik jest poprawny, ale niepotrzebnie duży — da się mniejszy?",
          ua: "Який спільний знаменник правильний, але зайве великий — можна менший?"
        },
        options: [
          { id: "a", label: { pl: "6", ua: "6" } },
          { id: "b", label: { pl: "12", ua: "12" } },
          { id: "c", label: { pl: "5", ua: "5" } }
        ],
        answer: "b",
        hint: {
          pl: "6 już dzieli się przez 2 i przez 3. 12 też, ale po co podwajać?",
          ua: "6 уже ділиться на 2 і на 3. 12 теж, але навіщо подвоювати?"
        },
        explanation: {
          pl: "6 to wygodny wspólny mianownik. 12 też działa (1/2=6/12, 1/3=4/12), ale jest niepotrzebnie duży. 5 nie dzieli się przez 2 ani przez 3.",
          ua: "6 — зручний спільний знаменник. 12 теж працює (1/2=6/12, 1/3=4/12), але він зайве великий. 5 не ділиться ні на 2, ні на 3."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "6 jest wygodny i najmniejszy z dobrych tu. Szukamy tego, który jest za duży.",
              ua: "6 зручний і найменший із добрих тут. Шукаємо той, який завеликий."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "5 w ogóle nie jest wspólnym mianownikiem 2 i 3. Nie „za duży” — po prostu zły.",
              ua: "5 взагалі не спільний знаменник 2 і 3. Не «завеликий» — просто неправильний."
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
        id: "ul24-check-suma",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/2 + 1/8"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/2 + 1/8"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "5/8",
        hint: {
          pl: "Wygodny mianownik 8. 1/2 = 4/8.",
          ua: "Зручний знаменник 8. 1/2 = 4/8."
        },
        explanation: {
          pl: "1/2 = 4/8, 4/8 + 1/8 = 5/8.",
          ua: "1/2 = 4/8, 4/8 + 1/8 = 5/8."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Różnica",
        ua: "Чи вже вмію? Різниця"
      },
      task: {
        id: "ul24-check-roznica",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2/3 − 1/4"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2/3 − 1/4"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "5/12",
        hint: {
          pl: "Mianownik 12. 2/3 = 8/12, 1/4 = 3/12.",
          ua: "Знаменник 12. 2/3 = 8/12, 1/4 = 3/12."
        },
        explanation: {
          pl: "8/12 − 3/12 = 5/12.",
          ua: "8/12 − 3/12 = 5/12."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1/2 + 1/3 = 3/6 + 2/6 = 5/6",
      text: {
        pl: [
          "Różne mianowniki: najpierw wygodny wspólny mianownik.",
          "Rozszerz, potem dodaj albo odejmij liczniki.",
          "Nie bierz mianownika większego, niż trzeba."
        ],
        ua: [
          "Різні знаменники: спочатку зручний спільний знаменник.",
          "Розшир, потім додай або відніми чисельники.",
          "Не бери знаменник більший, ніж треба."
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
          "W przepisie, na wstążce i w zadaniu z podręcznika znów spotkasz 1/2 + 1/4.",
          "Najpierw wspólny pasek, potem kratki."
        ],
        ua: [
          "У рецепті, на стрічці і в задачі з підручника знову зустрінеш 1/2 + 1/4.",
          "Спочатку спільна смужка, потім клітинки."
        ]
      }
    }
  ]
};
