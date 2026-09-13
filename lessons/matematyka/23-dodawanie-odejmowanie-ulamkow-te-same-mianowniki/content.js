function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Te same kratki, inna liczba kratek",
        ua: "Ті самі клітинки, інша кількість"
      },
      formula: "2/5 + 1/5 = 3/5",
      text: {
        pl: [
          "Gdy pasek pękł tak samo, dodawanie jest krótkie.",
          "Doliczasz zamalowane kratki. Mianownik zostaje."
        ],
        ua: [
          "Коли смужка тріснула так само, додавання коротке.",
          "Долічуєш замальовані клітинки. Знаменник лишається."
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
        { pl: "dodać ułamki o tym samym mianowniku", ua: "додати дроби з однаковим знаменником" },
        { pl: "odjąć ułamki o tym samym mianowniku", ua: "відняти дроби з однаковим знаменником" },
        { pl: "dodać liczby mieszane z tym samym mianownikiem", ua: "додати мішані числа з однаковим знаменником" },
        { pl: "nie dodawać mianowników", ua: "не додавати знаменники" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Dokładasz kratki, nie tworzysz nowych podziałów",
        ua: "Докладаєш клітинки, не робиш нових поділів"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 2 },
      text: {
        pl: [
          ["Tu zamalowano ", em("2"), " z ", em("5"), "."],
          ["Jeśli dołożysz jeszcze ", em("1"), " taką samą kratkę, pasek nadal ma ", em("5"), " części."]
        ],
        ua: [
          ["Тут замальовано ", em("2"), " з ", em("5"), "."],
          ["Якщо докладеш ще ", em("1"), " таку саму клітинку, смужка досі має ", em("5"), " частин."]
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Trzy piąte",
        ua: "Три п’ятих"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 3 },
      prompt: {
        pl: [
          ["", em("2"), " kratki plus ", em("1"), " kratka to ", em("3"), " kratki."],
          ["Całość wciąż pęka na ", em("5"), ". Dlatego ", em("2/5 + 1/5 = 3/5"), "."]
        ],
        ua: [
          ["", em("2"), " клітинки плюс ", em("1"), " клітинка — це ", em("3"), " клітинки."],
          ["Ціле досі тріщить на ", em("5"), ". Тому ", em("2/5 + 1/5 = 3/5"), "."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Liczniki razem, mianownik ten sam",
        ua: "Чисельники разом, знаменник той самий"
      },
      formula: "a/c + b/c = (a + b)/c",
      text: {
        pl: [
          "Dodajesz (albo odejmujesz) tylko liczniki.",
          "Mianownik zostaje — to nadal te same równe części.",
          ["Nigdy nie dodawaj mianowników: ", em("2/5 + 1/5"), " to nie ", em("3/10"), "."]
        ],
        ua: [
          "Додаєш (або віднімаєш) лише чисельники.",
          "Знаменник лишається — це досі ті самі рівні частини.",
          ["Ніколи не додавай знаменники: ", em("2/5 + 1/5"), " — це не ", em("3/10"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak dodać 3/7 + 2/7?",
        ua: "Як додати 3/7 + 2/7?"
      },
      reveal: true,
      steps: [
        { formula: "3/7 + 2/7" },
        { formula: "(3 + 2)/7" },
        {
          formula: "5/7",
          text: {
            pl: ["Trzy siódme i dwie siódme to pięć siódmych. Mianownik ", em("7"), " zostaje."],
            ua: ["Три сьомих і дві сьомих — п’ять сьомих. Знаменник ", em("7"), " лишається."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Liczba mieszana: 1 2/5 + 2 1/5",
        ua: "Мішане число: 1 2/5 + 2 1/5"
      },
      reveal: true,
      steps: [
        {
          formula: "1 + 2 = 3",
          text: {
            pl: "Najpierw całości.",
            ua: "Спочатку цілі."
          }
        },
        { formula: "2/5 + 1/5 = 3/5" },
        {
          formula: "3 3/5",
          text: {
            pl: ["Całości plus ułamki: ", em("3 3/5"), "."],
            ua: ["Цілі плюс дроби: ", em("3 3/5"), "."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Gdy licznik urośnie: 5/4",
        ua: "Коли чисельник зросте: 5/4"
      },
      visual: { kind: "number-line", min: 0, max: 2, marks: [1.25] },
      reveal: true,
      steps: [
        { formula: "5/4 = 4/4 + 1/4" },
        {
          formula: "1 1/4",
          text: {
            pl: ["", em("4/4"), " to całość. Zostaje jeszcze ", em("1/4"), "."],
            ua: ["", em("4/4"), " — це ціле. Лишається ще ", em("1/4"), "."]
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
        { pl: "dodawanie ułamków", ua: "додавання дробів" },
        { pl: "odejmowanie ułamków", ua: "віднімання дробів" },
        { pl: "ten sam mianownik", ua: "однаковий знаменник" },
        { pl: "liczba mieszana", ua: "мішане число" },
        { pl: "ułamek niewłaściwy", ua: "неправильний дріб" }
      ],
      phrases: [
        { pl: "Dodaj ułamki o tym samym mianowniku.", ua: "Додай дроби з однаковим знаменником." },
        { pl: "Zapisz wynik jako liczbę mieszaną.", ua: "Запиши результат мішаним числом." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Złóż kratki",
        ua: "Збери клітинки"
      },
      visual: { kind: "fraction-bar", total: 8, filled: 5 },
      task: {
        id: "ul23-guided-38-28",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("3/8 + 2/8"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("3/8 + 2/8"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["5/8"],
        hint: {
          pl: "Dodaj liczniki. Mianownik 8 zostaje.",
          ua: "Додай чисельники. Знаменник 8 лишається."
        },
        explanation: {
          pl: "3 + 2 = 5, mianownik 8, więc 5/8.",
          ua: "3 + 2 = 5, знаменник 8, отже 5/8."
        },
        mistakes: [
          {
            answer: "5/16",
            feedback: {
              pl: "Dodałeś mianowniki. Pasek nadal ma 8 kratek, nie 16.",
              ua: "Додав знаменники. Смужка досі має 8 клітинок, не 16."
            }
          },
          {
            answer: "6/8",
            feedback: {
              pl: "3 + 2 = 5, nie 6.",
              ua: "3 + 2 = 5, не 6."
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
        pl: "2/5 + 1/5 = 3/10",
        ua: "2/5 + 1/5 = 3/10"
      },
      visual: { kind: "fraction-bar", total: 5, filled: 3 },
      text: {
        pl: [
          "Ktoś dodał liczniki i mianowniki.",
          ["Pasek pęka na ", em("5"), ", nie na ", em("10"), "."],
          ["", em("2"), " kratki + ", em("1"), " kratka = ", em("3"), " kratki z pięciu: ", em("3/5"), "."]
        ],
        ua: [
          "Хтось додав чисельники і знаменники.",
          ["Смужка тріщить на ", em("5"), ", не на ", em("10"), "."],
          ["", em("2"), " клітинки + ", em("1"), " клітинка = ", em("3"), " клітинки з п’яти: ", em("3/5"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dodaj piąte",
        ua: "Додай п’ятих"
      },
      task: {
        id: "ul23-dodaj-49-29",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("4/9 + 2/9"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("4/9 + 2/9"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["6/9", "2/3"],
        hint: {
          pl: "4 + 2 u góry. Dziewiątka zostaje. Możesz skrócić.",
          ua: "4 + 2 вгорі. Дев’ятка лишається. Можеш скоротити."
        },
        explanation: {
          pl: "4/9 + 2/9 = 6/9. Skrócone: 2/3.",
          ua: "4/9 + 2/9 = 6/9. Скорочено: 2/3."
        },
        mistakes: [
          {
            answer: "6/18",
            feedback: {
              pl: "Mianowników nie dodajemy. Zostaje 9.",
              ua: "Знаменники не додаємо. Лишається 9."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Odejmij ósme",
        ua: "Відніми восьмих"
      },
      task: {
        id: "ul23-odejmij-78-38",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("7/8 − 3/8"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("7/8 − 3/8"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["4/8", "1/2"],
        hint: {
          pl: "7 − 3 u góry. Ósemka zostaje.",
          ua: "7 − 3 вгорі. Вісімка лишається."
        },
        explanation: {
          pl: "7/8 − 3/8 = 4/8. Skrócone: 1/2.",
          ua: "7/8 − 3/8 = 4/8. Скорочено: 1/2."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dołóż ułamek do mieszanej",
        ua: "Доклади дріб до мішаного"
      },
      task: {
        id: "ul23-mieszana-114",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("1 1/4 + 2/4"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1 1/4 + 2/4"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["1 3/4", "7/4"],
        hint: {
          pl: "Całość 1 zostaje. 1/4 + 2/4 = 3/4.",
          ua: "Ціле 1 лишається. 1/4 + 2/4 = 3/4."
        },
        explanation: {
          pl: "1 1/4 + 2/4 = 1 3/4.",
          ua: "1 1/4 + 2/4 = 1 3/4."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Z niewłaściwego na mieszaną",
        ua: "З неправильного в мішане"
      },
      visual: { kind: "number-line", min: 0, max: 2, marks: [1.4] },
      task: {
        id: "ul23-niewlasciwy-75",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Zapisz ", em("7/5"), " jako liczbę mieszaną. Wpisz tak: ", em("1 1/2"), "."],
          ua: ["Запиши ", em("7/5"), " мішаним числом. Пиши так: ", em("1 1/2"), "."]
        },
        answer: "1 2/5",
        hint: {
          pl: "5/5 to 1 całość. Zostaje 2/5.",
          ua: "5/5 — це 1 ціле. Лишається 2/5."
        },
        explanation: {
          pl: "7/5 = 5/5 + 2/5 = 1 2/5.",
          ua: "7/5 = 5/5 + 2/5 = 1 2/5."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Mąka do ciasta",
        ua: "Борошно до тіста"
      },
      text: {
        pl: [
          ["Ola wsypała ", em("2/5"), " szklanki mąki."],
          ["Potem dołożyła jeszcze ", em("1/5"), " szklanki."]
        ],
        ua: [
          ["Оля насипала ", em("2/5"), " склянки борошна."],
          ["Потім доклала ще ", em("1/5"), " склянки."]
        ]
      },
      task: {
        id: "ul23-maka-25-15",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Ile mąki jest w misce? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки борошна в мисці? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "3/5",
        hint: {
          pl: "Ten sam mianownik 5. Dodaj liczniki.",
          ua: "Той самий знаменник 5. Додай чисельники."
        },
        explanation: {
          pl: "2/5 + 1/5 = 3/5 szklanki.",
          ua: "2/5 + 1/5 = 3/5 склянки."
        },
        mistakes: [
          {
            answer: "3/10",
            feedback: {
              pl: "To błąd z dodawaniem mianowników. Szklanka nadal ma 5 części.",
              ua: "Це помилка з додаванням знаменників. Склянка досі має 5 частин."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Wstążka",
        ua: "Стрічка"
      },
      text: {
        pl: [
          ["Wstążka ma ", em("5/6"), " metra."],
          ["Tomek odciął ", em("2/6"), " metra na prezent."]
        ],
        ua: [
          ["Стрічка має ", em("5/6"), " метра."],
          ["Томек відрізав ", em("2/6"), " метра на подарунок."]
        ]
      },
      visual: { kind: "fraction-bar", total: 6, filled: 5 },
      task: {
        id: "ul23-wstazka-56-26",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Ile wstążki zostało? Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Скільки стрічки лишилось? Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["3/6", "1/2"],
        hint: {
          pl: "Odejmij liczniki. Szóstka zostaje.",
          ua: "Відніми чисельники. Шістка лишається."
        },
        explanation: {
          pl: "5/6 − 2/6 = 3/6. Skrócone: 1/2 metra.",
          ua: "5/6 − 2/6 = 3/6. Скорочено: 1/2 метра."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Znajdź błąd w zapisie",
        ua: "Знайди помилку в записі"
      },
      text: {
        pl: [
          ["Ktoś napisał: ", em("2/5 + 1/5 = 3/10"), "."],
          "Nie licz od nowa całego świata — wskaż, co poszło nie tak."
        ],
        ua: [
          ["Хтось написав: ", em("2/5 + 1/5 = 3/10"), "."],
          "Не рахуй увесь світ наново — вкажи, що пішло не так."
        ]
      },
      task: {
        id: "ul23-challenge-blad-310",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Gdzie jest błąd w równości 2/5 + 1/5 = 3/10?",
          ua: "Де помилка в рівності 2/5 + 1/5 = 3/10?"
        },
        options: [
          { id: "a", label: { pl: "Liczniki: 2 + 1 powinno być 2", ua: "Чисельники: 2 + 1 мало бути 2" } },
          { id: "b", label: { pl: "Mianowniki dodano: 5 + 5 = 10, a mianownik ma zostać 5", ua: "Знаменники додали: 5 + 5 = 10, а знаменник має лишитись 5" } },
          { id: "c", label: { pl: "Wynik jest dobry, tylko zapis 3/10 wygląda inaczej niż 3/5", ua: "Результат добрий, лише запис 3/10 виглядає інакше, ніж 3/5" } }
        ],
        answer: "b",
        hint: {
          pl: "Pasek 2/5 + 1/5 nadal ma 5 kratek.",
          ua: "Смужка 2/5 + 1/5 досі має 5 клітинок."
        },
        explanation: {
          pl: "Liczniki 2 + 1 = 3 są dobre. Błąd: dodano mianowniki. Ma być 3/5, nie 3/10.",
          ua: "Чисельники 2 + 1 = 3 правильні. Помилка: додали знаменники. Має бути 3/5, не 3/10."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "2 + 1 naprawdę jest 3. Liczniki są w porządku.",
              ua: "2 + 1 справді 3. Чисельники в порядку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "3/10 to nie to samo co 3/5. To nie „inny wygląd”, tylko inny kawałek.",
              ua: "3/10 — це не те саме, що 3/5. Це не «інший вигляд», а інший шматочок."
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
        id: "ul23-check-suma",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1/6 + 4/6"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("1/6 + 4/6"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: "5/6",
        hint: {
          pl: "1 + 4 u góry. Szóstka zostaje.",
          ua: "1 + 4 вгорі. Шістка лишається."
        },
        explanation: {
          pl: "1/6 + 4/6 = 5/6.",
          ua: "1/6 + 4/6 = 5/6."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Mieszana",
        ua: "Чи вже вмію? Мішане"
      },
      task: {
        id: "ul23-check-mieszana",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Oblicz ", em("2 3/8 − 1/8"), ". Wpisz tak: ", em("3/4"), " albo ", em("1 1/2"), "."],
          ua: ["Обчисли ", em("2 3/8 − 1/8"), ". Пиши так: ", em("3/4"), " або ", em("1 1/2"), "."]
        },
        answer: ["2 2/8", "2 1/4", "18/8", "9/4"],
        hint: {
          pl: "Całości 2 nie ruszaj. 3/8 − 1/8 = 2/8.",
          ua: "Цілі 2 не чіпай. 3/8 − 1/8 = 2/8."
        },
        explanation: {
          pl: "2 3/8 − 1/8 = 2 2/8. Skrócone: 2 1/4.",
          ua: "2 3/8 − 1/8 = 2 2/8. Скорочено: 2 1/4."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "2/5 + 1/5 = 3/5",
      visual: { kind: "fraction-bar", total: 5, filled: 3 },
      text: {
        pl: [
          "Ten sam mianownik: dodajesz albo odejmujesz liczniki.",
          ["Mianownik zostaje. Nigdy ", em("2/5 + 1/5 = 3/10"), "."],
          "Liczby mieszane: całości osobno, ułamki osobno."
        ],
        ua: [
          "Той самий знаменник: додаєш або віднімаєш чисельники.",
          ["Знаменник лишається. Ніколи ", em("2/5 + 1/5 = 3/10"), "."],
          "Мішані числа: цілі окремо, дроби окремо."
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
          "Gdy mianowniki będą różne, najpierw sprowadzisz je do takich samych.",
          "Potem znów dodasz tylko liczniki — ta sama zasada."
        ],
        ua: [
          "Коли знаменники будуть різні, спочатку зведеш їх до однакових.",
          "Потім знову додаси лише чисельники — те саме правило."
        ]
      }
    }
  ]
};
