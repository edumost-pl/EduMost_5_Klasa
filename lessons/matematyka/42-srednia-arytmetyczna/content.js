function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Jedna liczba zamiast wielu",
        ua: "Одне число замість багатьох"
      },
      formula: "(4 + 8 + 12) : 3 = 8",
      text: {
        pl: [
          "Trzy oceny, trzy temperatury, trzy czasy na basenie.",
          "Średnia arytmetyczna mówi: gdyby wszystkie były równe, jaka byłaby ta wspólna liczba?"
        ],
        ua: [
          "Три оцінки, три температури, три часи на басейні.",
          "Середнє арифметичне каже: якби всі були рівні, яким було б те спільне число?"
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
        { pl: "obliczyć średnią: suma dzielona przez liczbę danych", ua: "обчислити середнє: сума, поділена на кількість даних" },
        { pl: "odczytać dane z tabeli", ua: "прочитати дані з таблиці" },
        { pl: "zauważyć, że skrajna wartość ciągnie średnią", ua: "помітити, що крайнє значення тягне середнє" },
        { pl: "sprawdzić, czy średnia musi być jedną z danych", ua: "перевірити, чи середнє має бути одним із даних" },
        { pl: "powiedzieć, czy wartości rosną, czy maleją", ua: "сказати, чи значення зростають, чи спадають" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Tabela z punktami",
        ua: "Таблиця з балами"
      },
      text: {
        pl: [
          "Czwartek: 2, 5, 5, 8 punktów.",
          "Suma i liczba wyników — to wszystko, czego średnia potrzebuje.",
          "Nie zgaduj „na oko”. Najpierw dodaj, potem podziel."
        ],
        ua: [
          "Четвер: 2, 5, 5, 8 балів.",
          "Сума і кількість результатів — усе, чого потребує середнє.",
          "Не вгадуй «на око». Спочатку додай, потім поділи."
        ]
      },
      items: [
        { pl: "2 + 5 + 5 + 8 = 20", ua: "2 + 5 + 5 + 8 = 20" },
        { pl: "są 4 wyniki", ua: "є 4 результати" },
        { pl: "20 : 4 = 5", ua: "20 : 4 = 5" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Średnia = suma : liczba danych",
        ua: "Середнє = сума : кількість даних"
      },
      formula: "średnia = (a + b + c + …) : n",
      text: {
        pl: [
          "Dodajesz wszystkie wartości. Dzielisz przez to, ile ich jest.",
          ["Dla 4, 8 i 12: suma 24, trzy liczby, średnia ", em("8"), "."],
          "Średnia może wyjść liczbą, której nie ma na liście."
        ],
        ua: [
          "Додаєш усі значення. Ділиш на те, скільки їх є.",
          ["Для 4, 8 і 12: сума 24, три числа, середнє ", em("8"), "."],
          "Середнє може вийти числом, якого немає в списку."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Średnia, której nie ma wśród danych",
        ua: "Середнє, якого немає серед даних"
      },
      reveal: true,
      steps: [
        { formula: "3,  5,  7,  9" },
        { formula: "3 + 5 + 7 + 9 = 24" },
        {
          formula: "24 : 4 = 6",
          text: {
            pl: ["Średnia to ", em("6"), ". Na liście nie ma szóstki. To nie błąd."],
            ua: ["Середнє — ", em("6"), ". У списку немає шістки. Це не помилка."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Skrajna wartość ciągnie średnią",
        ua: "Крайнє значення тягне середнє"
      },
      formula: "(10 + 12 + 14 + 28) : 4 = 16",
      text: {
        pl: [
          "Bez 28 średnia z 10, 12, 14 to 12.",
          ["Jedna duża liczba 28 podciąga średnią do ", em("16"), "."],
          "Mała skrajna wartość ciągnie średnią w dół. Średnia „słyszy” każdą daną."
        ],
        ua: [
          "Без 28 середнє з 10, 12, 14 — це 12.",
          ["Одне велике число 28 підтягує середнє до ", em("16"), "."],
          "Мале крайнє значення тягне середнє вниз. Середнє «чує» кожне дане."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Czy wartości rosną, czy spadają?",
        ua: "Чи значення зростають, чи спадють?"
      },
      reveal: true,
      steps: [
        {
          formula: "pon. 8°  wt. 10°  śr. 9°  czw. 12°  pt. 13°",
          text: {
            pl: "Temperatury z tygodnia. Środa jest niżej niż wtorek — to dołek, nie cały spadek.",
            ua: "Температури тижня. Середа нижче за вівторок — це провал, не весь спад."
          }
        },
        {
          formula: "8 → 13",
          text: {
            pl: ["Od poniedziałku do piątku wartości ", em("rosną"), ". Jeden dzień spadku tego nie zmienia."],
            ua: ["Від понеділка до п’ятниці значення ", em("зростають"), ". Один день спаду цього не змінює."]
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
        { pl: "średnia arytmetyczna", ua: "середнє арифметичне" },
        { pl: "suma", ua: "сума" },
        { pl: "liczba danych", ua: "кількість даних" },
        { pl: "tabela", ua: "таблиця" },
        { pl: "skrajna wartość", ua: "крайнє значення" },
        { pl: "rosną / maleją", ua: "зростають / спадають" }
      ],
      phrases: [
        { pl: "Oblicz średnią arytmetyczną.", ua: "Обчисли середнє арифметичне." },
        { pl: "Odczytaj dane z tabeli.", ua: "Прочитай дані з таблиці." },
        { pl: "Czy średnia musi być jedną z danych?", ua: "Чи середнє має бути одним із даних?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Policz średnią",
        ua: "Полічи середнє"
      },
      task: {
        id: "sred-guided-8",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz średnią liczb ", em("4"), ", ", em("8"), ", ", em("12"), "."],
          ua: ["Обчисли середнє чисел ", em("4"), ", ", em("8"), ", ", em("12"), "."]
        },
        answer: 8,
        hint: {
          pl: "Najpierw suma, potem dziel przez 3.",
          ua: "Спочатку сума, потім діли на 3."
        },
        explanation: {
          pl: "4 + 8 + 12 = 24. 24 : 3 = 8.",
          ua: "4 + 8 + 12 = 24. 24 : 3 = 8."
        },
        mistakes: [
          {
            answer: 24,
            feedback: {
              pl: "To suma. Średnia to suma dzielona przez 3.",
              ua: "Це сума. Середнє — сума, поділена на 3."
            }
          },
          {
            answer: 6,
            feedback: {
              pl: "Podzieliłeś 24 przez 4. Są trzy liczby, nie cztery.",
              ua: "Поділив 24 на 4. Є три числа, не чотири."
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
        pl: "Średnia z 2, 4, 9 to 4, bo 4 stoi w środku",
        ua: "Середнє з 2, 4, 9 — це 4, бо 4 стоїть усередині"
      },
      text: {
        pl: [
          "Środek listy to nie średnia.",
          ["2 + 4 + 9 = 15, 15 : 3 = ", em("5"), "."],
          "Średnia 5 nie jest nawet na liście."
        ],
        ua: [
          "Середина списку — це не середнє.",
          ["2 + 4 + 9 = 15, 15 : 3 = ", em("5"), "."],
          "Середнє 5 навіть немає у списку."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z tabeli",
        ua: "З таблиці"
      },
      task: {
        id: "sred-table",
        type: "input-number",
        level: "A",
        question: {
          pl: ["W tabeli: pon. ", em("6"), " km, wt. ", em("10"), " km, śr. ", em("8"), " km. Jaka jest średnia liczba kilometrów?"],
          ua: ["У таблиці: пн. ", em("6"), " км, вт. ", em("10"), " км, ср. ", em("8"), " км. Яке середнє число кілометрів?"]
        },
        answer: 8,
        hint: {
          pl: "Suma trzech dni, potem dziel przez 3.",
          ua: "Сума трьох днів, потім діли на 3."
        },
        explanation: {
          pl: "6 + 10 + 8 = 24. 24 : 3 = 8 km.",
          ua: "6 + 10 + 8 = 24. 24 : 3 = 8 км."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Skrajna ocena",
        ua: "Крайня оцінка"
      },
      task: {
        id: "sred-extreme",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oceny: ", em("5"), ", ", em("5"), ", ", em("4"), ", ", em("6"), ", ", em("10"), ". Jaka jest średnia?"],
          ua: ["Оцінки: ", em("5"), ", ", em("5"), ", ", em("4"), ", ", em("6"), ", ", em("10"), ". Яке середнє?"]
        },
        answer: 6,
        hint: {
          pl: "Suma pięciu ocen. Dziesiątka mocno ciągnie w górę.",
          ua: "Сума п’яти оцінок. Десятка сильно тягне вгору."
        },
        explanation: {
          pl: "5+5+4+6+10 = 30. 30 : 5 = 6. Bez 10 średnia byłaby 5.",
          ua: "5+5+4+6+10 = 30. 30 : 5 = 6. Без 10 середнє було б 5."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "To średnia bez dziesiątki albo „najczęstsza ocena”. Policz wszystkie pięć.",
              ua: "Це середнє без десятки або «найчастіша оцінка». Полічи всі п’ять."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Trzy biegi",
        ua: "Три забіги"
      },
      text: {
        pl: [
          ["Ola przebiegła ", em("100"), ", ", em("120"), " i ", em("80"), " metrów w trzech próbach."],
          "Jaka jest średnia długość biegu?"
        ],
        ua: [
          ["Оля пробігла ", em("100"), ", ", em("120"), " і ", em("80"), " метрів у трьох спробах."],
          "Яка середня довжина забігу?"
        ]
      },
      task: {
        id: "sred-runs",
        type: "input-number",
        level: "B",
        question: {
          pl: "Wpisz średnią w metrach.",
          ua: "Введи середнє в метрах."
        },
        answer: 100,
        hint: {
          pl: "100 + 120 + 80, potem dziel przez 3.",
          ua: "100 + 120 + 80, потім діли на 3."
        },
        explanation: {
          pl: "100 + 120 + 80 = 300. 300 : 3 = 100 m.",
          ua: "100 + 120 + 80 = 300. 300 : 3 = 100 м."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Co robią temperatury?",
        ua: "Що роблять температури?"
      },
      text: {
        pl: [
          "Z tabeli: pon. 8°, wt. 10°, śr. 9°, czw. 12°, pt. 13°.",
          "W środę jest chłodniej niż we wtorek, ale tydzień jako całość idzie w jedną stronę."
        ],
        ua: [
          "З таблиці: пн. 8°, вт. 10°, ср. 9°, чт. 12°, пт. 13°.",
          "У середу холодніше, ніж у вівторок, але тиждень як ціле йде в один бік."
        ]
      },
      task: {
        id: "sred-trend",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie jest prawdziwe?",
          ua: "Яке речення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Od poniedziałku do piątku temperatury ogólnie rosną", ua: "Від понеділка до п’ятниці температури загалом зростають" } },
          { id: "b", label: { pl: "Temperatury cały czas maleją", ua: "Температури весь час спадають" } },
          { id: "c", label: { pl: "Każdy dzień jest cieplejszy od poprzedniego", ua: "Кожен день тепліший за попередній" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj początek z końcem. Potem sprawdź, czy każdy dzień musi rosnąć.",
          ua: "Порівняй початок із кінцем. Потім перевір, чи кожен день мусить рости."
        },
        explanation: {
          pl: "Start 8°, koniec 13° — ogólnie rosną. Środa 9° jest niżej niż wtorek, więc nie każdy dzień jest cieplejszy.",
          ua: "Старт 8°, кінець 13° — загалом зростають. Середа 9° нижче за вівторок, тож не кожен день тепліший."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Koniec tygodnia jest cieplejszy niż początek. To nie spadek.",
              ua: "Кінець тижня тепліший за початок. Це не спад."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Środa 9° jest chłodniejsza niż wtorek 10°. Ogólny wzrost nie znaczy „każdy dzień w górę”.",
              ua: "Середа 9° холодніша за вівторок 10°. Загальне зростання не означає «кожен день угору»."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy średnia musi być na liście?",
        ua: "Чи середнє має бути в списку?"
      },
      text: {
        pl: [
          "Pomyśl o 3, 5, 7, 9 — średnia była 6.",
          "Albo o 2, 4, 9 — średnia 5."
        ],
        ua: [
          "Подумай про 3, 5, 7, 9 — середнє було 6.",
          "Або про 2, 4, 9 — середнє 5."
        ]
      },
      task: {
        id: "sred-must-be-data",
        type: "true-false",
        level: "C",
        question: {
          pl: "Czy średnia arytmetyczna zawsze jest jedną z danych liczb?",
          ua: "Чи середнє арифметичне завжди є одним із даних чисел?"
        },
        answer: false,
        hint: {
          pl: "Przypomnij sobie 3, 5, 7, 9.",
          ua: "Пригадай 3, 5, 7, 9."
        },
        explanation: {
          pl: "Nie. Średnia to suma dzielona przez n. Wynik nie musi występować wśród danych. Na przykład (3+5+7+9):4 = 6.",
          ua: "Ні. Середнє — сума, поділена на n. Результат не мусить бути серед даних. Наприклад (3+5+7+9):4 = 6."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Trzy liczby",
        ua: "Чи вже вмію? Три числа"
      },
      task: {
        id: "sred-check-three",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz średnią: ", em("7"), ", ", em("9"), ", ", em("8"), "."],
          ua: ["Обчисли середнє: ", em("7"), ", ", em("9"), ", ", em("8"), "."]
        },
        answer: 8,
        hint: {
          pl: "Suma, potem dziel przez 3.",
          ua: "Сума, потім діли на 3."
        },
        explanation: {
          pl: "7 + 9 + 8 = 24. 24 : 3 = 8.",
          ua: "7 + 9 + 8 = 24. 24 : 3 = 8."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Nie z listy",
        ua: "Чи вже вмію? Не зі списку"
      },
      task: {
        id: "sred-check-not-in-list",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz średnią: ", em("2"), ", ", em("6"), ", ", em("10"), ", ", em("6"), "."],
          ua: ["Обчисли середнє: ", em("2"), ", ", em("6"), ", ", em("10"), ", ", em("6"), "."]
        },
        answer: 6,
        hint: {
          pl: "Cztery liczby. Suma dzielona przez 4.",
          ua: "Чотири числа. Сума, поділена на 4."
        },
        explanation: {
          pl: "2+6+10+6 = 24. 24 : 4 = 6.",
          ua: "2+6+10+6 = 24. 24 : 4 = 6."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "średnia = suma : n",
      text: {
        pl: [
          "Dodajesz wszystkie dane, dzielisz przez ich liczbę.",
          "Średnia nie musi być na liście. Skrajna wartość ciągnie ją w swoją stronę.",
          "Z tabeli: porównaj początek z końcem, zanim powiesz „rosną” albo „maleją”."
        ],
        ua: [
          "Додаєш усі дані, ділиш на їхню кількість.",
          "Середнє не мусить бути в списку. Крайнє значення тягне його у свій бік.",
          "З таблиці: порівняй початок із кінцем, перш ніж сказати «зростають» чи «спадають»."
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
          "Później znów: średnia z ocen, z kilometrów, z tabeli.",
          "To nie nowy materiał — krótka powtórka: suma dzielona przez n."
        ],
        ua: [
          "Пізніше знову: середнє з оцінок, з кілометрів, з таблиці.",
          "Це не новий матеріал — коротке повторення: сума, поділена на n."
        ]
      }
    }
  ]
};
