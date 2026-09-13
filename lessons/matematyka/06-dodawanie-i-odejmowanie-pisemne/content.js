function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Gdy palce już nie wystarczą",
        ua: "Коли пальців уже не вистачає"
      },
      formula: "458 + 376",
      text: {
        pl: [
          "Takie dodawanie w głowie męczy.",
          "Dlatego ustawiamy liczby w słupku: jedności pod jednościami, dziesiątki pod dziesiątkami.",
          "Dziś: przeniesienie, pożyczka i zera w środku."
        ],
        ua: [
          "Таке додавання в голові втомлює.",
          "Тому ставимо числа в стовпчик: одиниці під одиницями, десятки під десятками.",
          "Сьогодні: перенесення, позика і нулі всередині."
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
        { pl: "dodać pisemnie z przeniesieniem", ua: "додати письмово з перенесенням" },
        { pl: "odjąć pisemnie z pożyczką", ua: "відняти письмово з позикою" },
        { pl: "nie zgubić zera w odjemnej", ua: "не загубити нуль у зменшуваному" },
        { pl: "znaleźć brakującą cyfrę w słupku", ua: "знайти пропущену цифру в стовпчику" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Cyfry muszą stać w swoich kolumnach",
        ua: "Цифри мають стояти у своїх колонках"
      },
      text: {
        pl: [
          ["Jeśli w ", em("23 + 5"), " piątkę postawisz pod dwójką, wyjdzie bzdura."],
          "Jedności zawsze pod jednościami. Potem kolumna dziesiątek, potem setek.",
          "Słupek to nie ozdoba — to porządek miejsc."
        ],
        ua: [
          ["Якщо в ", em("23 + 5"), " п’ятірку поставиш під двійкою, вийде нісенітниця."],
          "Одиниці завжди під одиницями. Потім колонка десятків, потім сотень.",
          "Стовпчик — не прикраса, а порядок розрядів."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Gdy w kolumnie wychodzi 10 albo więcej",
        ua: "Коли в колонці виходить 10 або більше"
      },
      formula: "8 + 6 = 14",
      text: {
        pl: [
          "Zostawiasz cyfrę jedności, a 1 dziesiątkę przenosisz do następnej kolumny.",
          ["Z ", em("14"), " zapisujesz ", em("4"), " na dole i pamiętasz ", em("1"), " obok dziesiątek."]
        ],
        ua: [
          "Лишаєш цифру одиниць, а 1 десяток переносиш у наступну колонку.",
          ["З ", em("14"), " записуєш ", em("4"), " внизу і пам’ятаєш ", em("1"), " біля десятків."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 458 + 376",
        ua: "Крок за кроком: 458 + 376"
      },
      reveal: true,
      steps: [
        { formula: "458 + 376" },
        {
          formula: "8 + 6 = 14",
          text: {
            pl: ["Zapisujesz ", em("4"), ", przenosisz ", em("1"), "."],
            ua: ["Записуєш ", em("4"), ", переносиш ", em("1"), "."]
          }
        },
        {
          formula: "5 + 7 + 1 = 13",
          text: {
            pl: ["Zapisujesz ", em("3"), ", przenosisz ", em("1"), "."],
            ua: ["Записуєш ", em("3"), ", переносиш ", em("1"), "."]
          }
        },
        {
          formula: "4 + 3 + 1 = 8",
          text: {
            pl: [em("458 + 376"), " = ", em("834"), "."],
            ua: [em("458 + 376"), " = ", em("834"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Odejmowanie: gdy góra jest za mała",
        ua: "Віднімання: коли зверху замало"
      },
      formula: "3 − 8  →  13 − 8",
      text: {
        pl: [
          "Pożyczasz jedną dziesiątkę z sąsiedniej kolumny z lewej.",
          "Górna cyfra rośnie o 10. Sąsiad z lewej maleje o 1.",
          "Jeśli sąsiad to zero — pożyczka idzie dalej, aż znajdzie niezerową cyfrę."
        ],
        ua: [
          "Позичаєш один десяток із сусідньої колонки зліва.",
          "Верхня цифра росте на 10. Сусід зліва зменшується на 1.",
          "Якщо сусід — нуль, позика йде далі, доки не знайде ненульову цифру."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Zero w środku: 503 − 278",
        ua: "Нуль у середині: 503 − 278"
      },
      reveal: true,
      steps: [
        { formula: "503 − 278" },
        {
          formula: "3 < 8",
          text: {
            pl: "Jedności za małe. Dziesiątki to 0 — więc pożyczka idzie do setek.",
            ua: "Одиниць замало. Десятки — 0, тож позика йде до сотень."
          }
        },
        {
          formula: "13 − 8 = 5,   9 − 7 = 2,   4 − 2 = 2",
          text: {
            pl: ["Setki oddają 1, zero staje się 10, potem 9. Wynik: ", em("225"), "."],
            ua: ["Сотні віддають 1, нуль стає 10, потім 9. Результат: ", em("225"), "."]
          }
        },
        {
          formula: "278 + 225 = 503",
          text: {
            pl: "Sprawdzenie: dodajesz odjemnik i różnicę. Ma wyjść odjemna.",
            ua: "Перевірка: додаєш від’ємник і різницю. Має вийти зменшуване."
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
        { pl: "dodawanie pisemne", ua: "письмове додавання" },
        { pl: "odejmowanie pisemne", ua: "письмове віднімання" },
        { pl: "przeniesienie", ua: "перенесення" },
        { pl: "pożyczka", ua: "позика" },
        { pl: "odjemna", ua: "зменшуване" },
        { pl: "odjemnik", ua: "від’ємник" },
        { pl: "różnica", ua: "різниця" }
      ],
      phrases: [
        { pl: "Oblicz pisemnie.", ua: "Обчисли письмово." },
        { pl: "Sprawdź odejmowanie dodawaniem.", ua: "Перевір віднімання додаванням." },
        { pl: "Jaka cyfra stoi w okienku?", ua: "Яка цифра стоїть у віконці?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Dodaj z przeniesieniem",
        ua: "Додай з перенесенням"
      },
      task: {
        id: "pisemne-guided-247",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("247 + 185"), ". Wpisz sumę."],
          ua: ["Обчисли письмово: ", em("247 + 185"), ". Введи суму."]
        },
        answer: 432,
        hint: {
          pl: "7 + 5 = 12. Co zapisujesz na dole, a co przenosisz?",
          ua: "7 + 5 = 12. Що записуєш внизу, а що переносиш?"
        },
        explanation: {
          pl: "7 + 5 = 12 → 2 i przeniesienie 1. 4 + 8 + 1 = 13 → 3 i 1. 2 + 1 + 1 = 4. Suma 432.",
          ua: "7 + 5 = 12 → 2 і перенесення 1. 4 + 8 + 1 = 13 → 3 і 1. 2 + 1 + 1 = 4. Сума 432."
        },
        mistakes: [
          {
            answer: 322,
            feedback: {
              pl: "Wygląda na to, że przeniesienie z jedności nie doszło do dziesiątek.",
              ua: "Схоже, перенесення з одиниць не дійшло до десятків."
            }
          },
          {
            answer: 422,
            feedback: {
              pl: "Sprawdź kolumnę dziesiątek: 4 + 8 i jeszcze przeniesienie.",
              ua: "Перевір колонку десятків: 4 + 8 і ще перенесення."
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
        pl: "458 + 376 = 724",
        ua: "458 + 376 = 724"
      },
      text: {
        pl: [
          "Ktoś zapisał 4 z czternastu, ale nie dodał przeniesionej jedynki dalej.",
          ["Bez przeniesień: 8 + 6 daje 4, 5 + 7 daje 2, 4 + 3 daje 7 — stąd ", em("724"), "."],
          ["Przeniesienie trzeba dodać. Prawidłowo: ", em("834"), "."]
        ],
        ua: [
          "Хтось записав 4 з чотирнадцяти, але не додав перенесену одиницю далі.",
          ["Без перенесень: 8 + 6 дає 4, 5 + 7 дає 2, 4 + 3 дає 7 — звідси ", em("724"), "."],
          ["Перенесення треба додати. Правильно: ", em("834"), "."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Odejmij",
        ua: "Відніми"
      },
      task: {
        id: "pisemne-sub-609",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("609 − 274"), ". Wpisz różnicę."],
          ua: ["Обчисли письмово: ", em("609 − 274"), ". Введи різницю."]
        },
        answer: 335,
        hint: {
          pl: "W dziesiątkach góra to 0. Trzeba pożyczyć z setek.",
          ua: "У десятках зверху 0. Треба позичити із сотень."
        },
        explanation: {
          pl: "9 − 4 = 5. Zero pożycza z 6: 10 − 7 = 3, setki 5 − 2 = 3. Różnica 335. Sprawdzenie: 274 + 335 = 609.",
          ua: "9 − 4 = 5. Нуль позичає з 6: 10 − 7 = 3, сотні 5 − 2 = 3. Різниця 335. Перевірка: 274 + 335 = 609."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Tysiąc minus",
        ua: "Тисяча мінус"
      },
      task: {
        id: "pisemne-sub-1000",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("1000 − 386"), ". Wpisz różnicę."],
          ua: ["Обчисли письмово: ", em("1000 − 386"), ". Введи різницю."]
        },
        answer: 614,
        hint: {
          pl: "Odjemna to same zera po jedynce. Pożyczka pójdzie aż do tysięcy.",
          ua: "Зменшуване — самі нулі після одиниці. Позика піде аж до тисяч."
        },
        explanation: {
          pl: "Pożyczka z 1 tysiąca: 10 − 6 = 4, 9 − 8 = 1, 9 − 3 = 6. Wynik 614. Sprawdzenie: 386 + 614 = 1000.",
          ua: "Позика з 1 тисячі: 10 − 6 = 4, 9 − 8 = 1, 9 − 3 = 6. Результат 614. Перевірка: 386 + 614 = 1000."
        },
        mistakes: [
          {
            answer: 714,
            feedback: {
              pl: "Setki po pożyczce to 9 − 3, nie 10 − 3. Jedynka z tysięcy już została oddana.",
              ua: "Сотні після позики — 9 − 3, не 10 − 3. Одиниця з тисяч уже віддана."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Reszta po zakupach",
        ua: "Решта після покупок"
      },
      text: {
        pl: [
          ["Kuba dostał od mamy ", em("250"), " zł."],
          ["W sklepie zapłacił ", em("178"), " zł za buty."]
        ],
        ua: [
          ["Куба отримав від мами ", em("250"), " zł."],
          ["У магазині заплатив ", em("178"), " zł за черевики."]
        ]
      },
      task: {
        id: "pisemne-shop-250",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile złotych zostanie Kubie? Oblicz ", em("250 − 178"), " i wpisz liczbę."],
          ua: ["Скільки злотих залишиться Кубі? Обчисли ", em("250 − 178"), " і введи число."]
        },
        answer: 72,
        hint: {
          pl: "W jednościach 0 jest mniejsze od 8. Pożyczasz z dziesiątek, a tam też trzeba pożyczyć z setek.",
          ua: "В одиницях 0 менше за 8. Позичаєш із десятків, а там теж треба позичити із сотень."
        },
        explanation: {
          pl: "250 − 178 = 72. Sprawdzenie: 178 + 72 = 250.",
          ua: "250 − 178 = 72. Перевірка: 178 + 72 = 250."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Brakująca cyfra",
        ua: "Пропущена цифра"
      },
      text: {
        pl: [
          "W słupku zginęła jedna cyfra. Nie zgaduj — odwróć działanie."
        ],
        ua: [
          "У стовпчику зникла одна цифра. Не вгадуй — розверни дію."
        ]
      },
      task: {
        id: "pisemne-missing-digit",
        type: "input-number",
        level: "C",
        question: {
          pl: ["W dodawaniu ", em("4□8 + 267 = 715"), " jedna cyfra jest ukryta. Wpisz, jaka cyfra stoi w miejscu kwadratu."],
          ua: ["У додаванні ", em("4□8 + 267 = 715"), " одна цифра схована. Введи, яка цифра стоїть замість квадрата."]
        },
        answer: 4,
        hint: {
          pl: "Jeśli znasz sumę i jeden składnik, drugi to 715 − 267. Potem odczytaj środkową cyfrę.",
          ua: "Якщо знаєш суму і один доданок, другий — це 715 − 267. Потім прочитай середню цифру."
        },
        explanation: {
          pl: "715 − 267 = 448, więc w okienku jest 4. Sprawdzenie: 448 + 267 = 715.",
          ua: "715 − 267 = 448, тож у віконці 4. Перевірка: 448 + 267 = 715."
        },
        mistakes: [
          {
            answer: 5,
            feedback: {
              pl: "Policz 715 − 267. Środkowa cyfra tego wyniku to nie 5.",
              ua: "Полічи 715 − 267. Середня цифра цього результату — не 5."
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
        id: "pisemne-check-sum",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("356 + 247"), ". Wpisz sumę."],
          ua: ["Обчисли письмово: ", em("356 + 247"), ". Введи суму."]
        },
        answer: 603,
        hint: {
          pl: "6 + 7 = 13. Potem 5 + 4 i przeniesienie — wyjdzie 10.",
          ua: "6 + 7 = 13. Потім 5 + 4 і перенесення — вийде 10."
        },
        explanation: {
          pl: "6 + 7 = 13 → 3. 5 + 4 + 1 = 10 → 0. 3 + 2 + 1 = 6. Suma 603.",
          ua: "6 + 7 = 13 → 3. 5 + 4 + 1 = 10 → 0. 3 + 2 + 1 = 6. Сума 603."
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
        id: "pisemne-check-sub",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("700 − 258"), ". Wpisz różnicę."],
          ua: ["Обчисли письмово: ", em("700 − 258"), ". Введи різницю."]
        },
        answer: 442,
        hint: {
          pl: "Znowu zera. Pożyczka idzie z setek aż do jedności.",
          ua: "Знову нулі. Позика йде із сотень аж до одиниць."
        },
        explanation: {
          pl: "700 − 258 = 442. Sprawdzenie: 258 + 442 = 700.",
          ua: "700 − 258 = 442. Перевірка: 258 + 442 = 700."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "458 + 376 = 834",
      text: {
        pl: [
          "Kolumny: jedności pod jednościami.",
          "Dodawanie: 10 albo więcej — zapisujesz cyfrę, jedynkę przenosisz.",
          "Odejmowanie: góra za mała — pożyczasz z lewej. Zero nie kończy pożyczki, tylko ją przesuwa.",
          "Różnicę sprawdzasz dodawaniem."
        ],
        ua: [
          "Колонки: одиниці під одиницями.",
          "Додавання: 10 або більше — записуєш цифру, одиницю переносиш.",
          "Віднімання: зверху замало — позичаєш зліва. Нуль не кінчає позику, лише зсуває її.",
          "Різницю перевіряєш додаванням."
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
          "Później znów pojawi się słupek z przeniesieniem albo z zerami.",
          "To nie nowy materiał — krótka powtórka porządku kolumn."
        ],
        ua: [
          "Пізніше знову з’явиться стовпчик із перенесенням або з нулями.",
          "Це не новий матеріал — коротке повторення порядку колонок."
        ]
      }
    }
  ]
};
