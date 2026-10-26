function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: {
        pl: "Sprawdzian 27.10 — dział I",
        ua: "Контрольна 27.10 — розділ I"
      },
      items: [
        { pl: "dodawanie i odejmowanie pisemne", ua: "письмове додавання і віднімання" },
        { pl: "mnożenie i dzielenie pisemne", ua: "письмове множення і ділення" },
        { pl: "liczba pierwsza i liczba złożona", ua: "просте і складене число" },
        { pl: "rozkład na czynniki pierwsze", ua: "розклад на прості множники" }
      ],
      parts: [
        {
          text: {
            pl: [
              "Wtorek, 27 października. Nauczycielka: Skotarczak Aleksandra. Lekcja 3.",
              "W Librusie: pierwszy dział. Działania pisemne. Rozkład na czynniki pierwsze. Liczby pierwsze i liczby złożone.",
              "Najpierw jedna reguła i jeden przykład. Potem liczysz sam. Na końcu próbny sprawdzian."
            ],
            ua: [
              "Вівторок, 27 жовтня. Вчителька: Skotarczak Aleksandra. Урок 3.",
              "У Librus: перший розділ. Письмові дії. Розклад на прості множники. Прості і складені числа.",
              "Спочатку одне правило і один приклад. Потім рахуєш сам. Наприкінці пробна контрольна."
            ]
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa ze sprawdzianu", ua: "Слова з контрольної" },
      rows: [
        { pl: "dodawanie pisemne", ua: "письмове додавання" },
        { pl: "odejmowanie pisemne", ua: "письмове віднімання" },
        { pl: "przeniesienie", ua: "перенесення" },
        { pl: "pożyczka", ua: "позика" },
        { pl: "mnożenie pisemne", ua: "письмове множення" },
        { pl: "dzielenie pisemne", ua: "письмове ділення" },
        { pl: "dzielna : dzielnik = iloraz", ua: "ділене : дільник = частка" },
        { pl: "liczba pierwsza", ua: "просте число" },
        { pl: "liczba złożona", ua: "складене число" },
        { pl: "rozkład na czynniki pierwsze", ua: "розклад на прості множники" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Dodawanie: kolumna od prawej", ua: "Додавання: колонка справа" },
      formula: "8 + 6 = 14",
      text: {
        pl: [
          "Zapisujesz liczby jedna pod drugą: jedności pod jednościami.",
          "Gdy w kolumnie wychodzi 10 albo więcej, na dole zostaje cyfra jedności, a 1 idzie do kolumny z lewej."
        ],
        ua: [
          "Записуєш числа одне під одним: одиниці під одиницями.",
          "Коли в колонці виходить 10 або більше, внизу лишається цифра одиниць, а 1 іде в колонку зліва."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Krok po kroku: 367 + 485", ua: "Крок за кроком: 367 + 485" },
      reveal: true,
      steps: [
        { formula: "367 + 485" },
        {
          formula: "7 + 5 = 12",
          text: {
            pl: ["Zapisujesz ", em("2"), ", przenosisz ", em("1"), "."],
            ua: ["Записуєш ", em("2"), ", переносиш ", em("1"), "."]
          }
        },
        {
          formula: "6 + 8 + 1 = 15",
          text: {
            pl: ["Zapisujesz ", em("5"), ", przenosisz ", em("1"), "."],
            ua: ["Записуєш ", em("5"), ", переносиш ", em("1"), "."]
          }
        },
        {
          formula: "3 + 4 + 1 = 8",
          text: {
            pl: [em("367 + 485"), " = ", em("852"), "."],
            ua: [em("367 + 485"), " = ", em("852"), "."]
          }
        }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Dodaj pisemnie", ua: "Додай письмово" },
      task: {
        id: "s27-add",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("486 + 259"), ". Wpisz sumę."],
          ua: ["Обчисли письмово: ", em("486 + 259"), ". Введи суму."]
        },
        answer: 745,
        hint: {
          pl: "6 + 9 = 15. Potem dziesiątki i przeniesienie.",
          ua: "6 + 9 = 15. Потім десятки і перенесення."
        },
        explanation: {
          pl: "6 + 9 = 15 → 5. 8 + 5 + 1 = 14 → 4. 4 + 2 + 1 = 7. Suma 745.",
          ua: "6 + 9 = 15 → 5. 8 + 5 + 1 = 14 → 4. 4 + 2 + 1 = 7. Сума 745."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Odejmowanie: gdy góra jest za mała", ua: "Віднімання: коли зверху замало" },
      formula: "2 − 7  →  12 − 7",
      text: {
        pl: [
          "Pożyczasz 1 z kolumny z lewej. Górna cyfra rośnie o 10. Sąsiad maleje o 1.",
          "Jeśli sąsiad to 0, pożyczka idzie dalej. Zero staje się 10, a potem 9, bo samo też pożycza w prawo."
        ],
        ua: [
          "Позичаєш 1 з колонки зліва. Верхня цифра росте на 10. Сусід зменшується на 1.",
          "Якщо сусід — 0, позика йде далі. Нуль стає 10, а потім 9, бо сам теж позичає вправо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Zero w środku: 602 − 347", ua: "Нуль у середині: 602 − 347" },
      reveal: true,
      steps: [
        { formula: "602 − 347" },
        {
          formula: "2 < 7,  dziesiątki = 0",
          text: {
            pl: "Jedności za małe. Dziesiątki to zero, więc pożyczka idzie do setek.",
            ua: "Одиниць замало. Десятки — нуль, тож позика йде до сотень."
          }
        },
        {
          formula: "12 − 7 = 5,   9 − 4 = 5,   5 − 3 = 2",
          text: {
            pl: ["Setki: 6 staje się 5. Zero staje się 10, potem 9. Wynik: ", em("255"), "."],
            ua: ["Сотні: 6 стає 5. Нуль стає 10, потім 9. Результат: ", em("255"), "."]
          }
        },
        {
          formula: "347 + 255 = 602",
          text: {
            pl: "Sprawdzenie: odjemnik plus różnica daje odjemną.",
            ua: "Перевірка: від’ємник плюс різниця дає зменшуване."
          }
        }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Odejmij pisemnie", ua: "Відніми письмово" },
      task: {
        id: "s27-sub",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("800 − 256"), ". Wpisz różnicę."],
          ua: ["Обчисли письмово: ", em("800 − 256"), ". Введи різницю."]
        },
        answer: 544,
        hint: {
          pl: "Dwa zera. Pożyczka idzie aż do setek: 10, 9 i 7.",
          ua: "Два нулі. Позика йде аж до сотень: 10, 9 і 7."
        },
        explanation: {
          pl: "10 − 6 = 4, 9 − 5 = 4, 7 − 2 = 5. Różnica 544. Sprawdzenie: 256 + 544 = 800.",
          ua: "10 − 6 = 4, 9 − 5 = 4, 7 − 2 = 5. Різниця 544. Перевірка: 256 + 544 = 800."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Czy to jest dobrze?", ua: "Чи це добре?" },
      claim: { pl: "503 − 278 = 375", ua: "503 − 278 = 375" },
      text: {
        pl: [
          "Jedności pożyczyły. Dziesiątki też. Setki zostały 5 — a powinny zmaleć do 4.",
          ["Dobrze: 13 − 8 = 5, 9 − 7 = 2, 4 − 2 = 2. Wynik ", em("225"), "."]
        ],
        ua: [
          "Одиниці позичили. Десятки теж. Сотні лишились 5 — а мали зменшитись до 4.",
          ["Правильно: 13 − 8 = 5, 9 − 7 = 2, 4 − 2 = 2. Результат ", em("225"), "."]
        ]
      }
    },

    {
      type: "concept",
      heading: { pl: "Mnożenie przez jedną cyfrę", ua: "Множення на одну цифру" },
      formula: "7 · 8 = 56",
      text: {
        pl: [
          "Mnożysz od prawej. Z 56 zapisujesz 6 i pamiętasz 5.",
          "Następną kolumnę mnożysz i dodajesz to, co pamiętałeś."
        ],
        ua: [
          "Множиш справа. З 56 записуєш 6 і пам’ятаєш 5.",
          "Наступну колонку множиш і додаєш те, що пам’ятав."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Krok po kroku: 38 · 7", ua: "Крок за кроком: 38 · 7" },
      reveal: true,
      steps: [
        { formula: "38 · 7" },
        {
          formula: "7 · 8 = 56",
          text: {
            pl: ["Zapisujesz ", em("6"), ", przenosisz ", em("5"), "."],
            ua: ["Записуєш ", em("6"), ", переносиш ", em("5"), "."]
          }
        },
        {
          formula: "7 · 3 + 5 = 26",
          text: {
            pl: [em("38 · 7"), " = ", em("266"), "."],
            ua: [em("38 · 7"), " = ", em("266"), "."]
          }
        }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Jedna cyfra na dole", ua: "Одна цифра внизу" },
      task: {
        id: "s27-mul1",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("47 · 6"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("47 · 6"), ". Введи добуток."]
        },
        answer: 282,
        hint: {
          pl: "6 · 7 = 42. Potem 6 · 4 i przeniesienie.",
          ua: "6 · 7 = 42. Потім 6 · 4 і перенесення."
        },
        explanation: {
          pl: "6 · 7 = 42 → 2. 6 · 4 + 4 = 28. Iloczyn 282.",
          ua: "6 · 7 = 42 → 2. 6 · 4 + 4 = 28. Добуток 282."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Dwie cyfry na dole — dwa wiersze", ua: "Дві цифри внизу — два рядки" },
      formula: "34 · 12 = 34 · 2 + 34 · 10",
      text: {
        pl: [
          "Pierwszy wiersz: mnożysz przez jedności.",
          "Drugi wiersz: mnożysz przez dziesiątki i przesuwasz o jedno miejsce. Na końcu dodajesz wiersze."
        ],
        ua: [
          "Перший рядок: множиш на одиниці.",
          "Другий рядок: множиш на десятки і зсуваєш на одне місце. Наприкінці додаєш рядки."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Krok po kroku: 34 · 12", ua: "Крок за кроком: 34 · 12" },
      reveal: true,
      steps: [
        { formula: "34 · 12" },
        {
          formula: "34 · 2 = 68",
          text: {
            pl: "To pierwszy wiersz — jedności.",
            ua: "Це перший рядок — одиниці."
          }
        },
        {
          formula: "34 · 10 = 340",
          text: {
            pl: "To drugi wiersz. Zero na końcu to przesunięcie o dziesiątki.",
            ua: "Це другий рядок. Нуль у кінці — це зсув на десятки."
          }
        },
        {
          formula: "68 + 340 = 408",
          text: {
            pl: [em("34 · 12"), " = ", em("408"), "."],
            ua: [em("34 · 12"), " = ", em("408"), "."]
          }
        }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Dwa wiersze", ua: "Два рядки" },
      task: {
        id: "s27-mul2",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("25 · 14"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("25 · 14"), ". Введи добуток."]
        },
        answer: 350,
        hint: {
          pl: "25 · 4 i 25 · 10, potem dodaj.",
          ua: "25 · 4 і 25 · 10, потім додай."
        },
        explanation: {
          pl: "25 · 4 = 100, 25 · 10 = 250, 100 + 250 = 350.",
          ua: "25 · 4 = 100, 25 · 10 = 250, 100 + 250 = 350."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Zginął drugi wiersz", ua: "Зник другий рядок" },
      claim: { pl: "34 · 12 = 68", ua: "34 · 12 = 68" },
      text: {
        pl: [
          ["To tylko ", em("34 · 2"), ". Zginęło mnożenie przez 10."],
          ["Bez ", em("340"), " iloczyn jest za mały. Razem: 68 + 340 = 408."]
        ],
        ua: [
          ["Це лише ", em("34 · 2"), ". Зникло множення на 10."],
          ["Без ", em("340"), " добуток замалий. Разом: 68 + 340 = 408."]
        ]
      }
    },

    {
      type: "concept",
      heading: { pl: "Dzielenie pisemne — cztery kroki", ua: "Письмове ділення — чотири кроки" },
      parts: [
        {
          text: {
            pl: [
              "W polskiej szkole iloraz stoi nad kreską, a pod kreską jest dzielna i dzielnik.",
              "Każdą cyfrę wyniku robisz tym samym rytmem."
            ],
            ua: [
              "У польській школі частка стоїть над рискою, а під рискою — ділене і дільник.",
              "Кожну цифру результату робиш тим самим ритмом."
            ]
          }
        },
        {
          rule: {
            label: { pl: "Zapamiętaj", ua: "Запам’ятай" },
            lines: {
              pl: "DZIELĘ → MNOŻĘ → ODEJMUJĘ → SPROWADZAM",
              ua: "ДІЛЮ → МНОЖУ → ВІДНІМАЮ → СПУСКАЮ"
            }
          }
        }
      ]
    },
    {
      type: "example",
      heading: { pl: "Krok po kroku: 96 : 4", ua: "Крок за кроком: 96 : 4" },
      reveal: true,
      steps: [
        { formula: "96 : 4" },
        {
          formula: "9 : 4 = 2",
          text: {
            pl: "Pierwsza cyfra z lewej. 3 · 4 = 12 jest za duże, więc piszesz 2.",
            ua: "Перша цифра зліва. 3 · 4 = 12 завелике, тож пишеш 2."
          }
        },
        {
          formula: "2 · 4 = 8,   9 − 8 = 1",
          text: {
            pl: "Mnożysz i odejmujesz. Zostaje 1.",
            ua: "Множиш і віднімаєш. Лишається 1."
          }
        },
        {
          formula: "16 : 4 = 4",
          text: {
            pl: "Sprowadzasz 6. 16 : 4 = 4. Zostaje 0.",
            ua: "Спускаєш 6. 16 : 4 = 4. Лишається 0."
          }
        },
        {
          formula: "96 : 4 = 24",
          text: {
            pl: "Sprawdzenie: 4 · 24 = 96.",
            ua: "Перевірка: 4 · 24 = 96."
          }
        }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Podziel pisemnie", ua: "Поділи письмово" },
      task: {
        id: "s27-div",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("84 : 3"), ". Wpisz iloraz."],
          ua: ["Обчисли письмово: ", em("84 : 3"), ". Введи частку."]
        },
        answer: 28,
        hint: {
          pl: "8 : 3 = 2. Potem sprowadź 4.",
          ua: "8 : 3 = 2. Потім спусти 4."
        },
        explanation: {
          pl: "2 · 3 = 6, 8 − 6 = 2. Sprowadzasz 4 → 24. 24 : 3 = 8. Iloraz 28. Sprawdzenie: 3 · 28 = 84.",
          ua: "2 · 3 = 6, 8 − 6 = 2. Спускаєш 4 → 24. 24 : 3 = 8. Частка 28. Перевірка: 3 · 28 = 84."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Liczba pierwsza i liczba złożona", ua: "Просте і складене число" },
      parts: [
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Liczba pierwsza ma dokładnie dwóch dzielników: 1 i samą siebie. Liczba złożona ma ich więcej. 1 nie jest ani pierwsza, ani złożona.",
              ua: "Просте число має рівно два дільники: 1 і себе. Складене має їх більше. 1 не є ні простим, ні складеним."
            }
          }
        },
        {
          items: [
            { pl: "2, 3, 5, 7, 11, 13, 17, 19, 23 — pierwsze", ua: "2, 3, 5, 7, 11, 13, 17, 19, 23 — прості" },
            { pl: "4, 6, 8, 9, 10, 15, 21, 25, 27, 49 — złożone", ua: "4, 6, 8, 9, 10, 15, 21, 25, 27, 49 — складені" },
            { pl: "2 to jedyna parzysta liczba pierwsza", ua: "2 — єдине парне просте число" }
          ]
        }
      ],
      task: {
        id: "s27-one",
        type: "single-choice",
        level: "A",
        question: { pl: "Liczba 1 jest…", ua: "Число 1 є…" },
        options: [
          { id: "p", label: { pl: "pierwsza", ua: "простим" } },
          { id: "z", label: { pl: "złożona", ua: "складеним" } },
          { id: "n", label: { pl: "ani pierwsza, ani złożona", ua: "ні простим, ні складеним" } }
        ],
        answer: "n",
        explanation: {
          pl: "1 ma tylko jednego dzielnika — samą siebie. Do pierwszej liczby potrzeba dwóch.",
          ua: "1 має лише одного дільника — себе. Для простого числа треба двох."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Pierwsza czy złożona: 23", ua: "Просте чи складене: 23" },
      task: {
        id: "s27-23",
        type: "single-choice",
        level: "A",
        question: { pl: "23 jest…", ua: "23 є…" },
        options: [
          { id: "p", label: { pl: "pierwsza", ua: "простим" } },
          { id: "z", label: { pl: "złożona", ua: "складеним" } }
        ],
        answer: "p",
        explanation: {
          pl: "23 dzieli się tylko przez 1 i 23.",
          ua: "23 ділиться лише на 1 і 23."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Pierwsza czy złożona: 49", ua: "Просте чи складене: 49" },
      task: {
        id: "s27-49",
        type: "single-choice",
        level: "A",
        question: { pl: "49 jest…", ua: "49 є…" },
        options: [
          { id: "p", label: { pl: "pierwsza", ua: "простим" } },
          { id: "z", label: { pl: "złożona", ua: "складеним" } }
        ],
        answer: "z",
        explanation: {
          pl: "49 = 7 · 7. Dzielniki: 1, 7 i 49. To liczba złożona.",
          ua: "49 = 7 · 7. Дільники: 1, 7 і 49. Це складене число."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Rozkład na czynniki pierwsze", ua: "Розклад на прості множники" },
      parts: [
        {
          text: {
            pl: [
              "Dzielisz liczbę złożoną przez najmniejszą liczbę pierwszą, która wchodzi bez reszty.",
              "Najpierw sprawdzasz 2, potem 3, potem 5, potem 7. Kończysz, gdy zostaną same liczby pierwsze."
            ],
            ua: [
              "Ділиш складене число на найменше просте, яке входить без остачі.",
              "Спочатку перевіряєш 2, потім 3, потім 5, потім 7. Закінчуєш, коли лишаться самі прості."
            ]
          }
        },
        {
          rule: {
            label: { pl: "Szybki test", ua: "Швидка перевірка" },
            text: {
              pl: "Parzysta — dzielisz przez 2. Suma cyfr dzieli się przez 3 — dzielisz przez 3. Kończy się na 0 lub 5 — dzielisz przez 5.",
              ua: "Парне — ділиш на 2. Сума цифр ділиться на 3 — ділиш на 3. Закінчується на 0 або 5 — ділиш на 5."
            }
          }
        }
      ]
    },
    {
      type: "example",
      heading: { pl: "Krok po kroku: 36", ua: "Крок за кроком: 36" },
      reveal: true,
      steps: [
        { formula: "36" },
        {
          formula: "36 : 2 = 18",
          text: {
            pl: "36 jest parzysta, więc wchodzi 2.",
            ua: "36 парне, тож входить 2."
          }
        },
        {
          formula: "18 : 2 = 9",
          text: {
            pl: "18 też parzysta. Znowu 2.",
            ua: "18 теж парне. Знову 2."
          }
        },
        {
          formula: "9 : 3 = 3",
          text: {
            pl: "9 = 3 · 3. Oba czynniki są pierwsze.",
            ua: "9 = 3 · 3. Обидва множники прості."
          }
        },
        {
          formula: "36 = 2 · 2 · 3 · 3",
          text: {
            pl: "W rozkładzie nie zostawiasz 4, 6, 9 ani 18. To liczby złożone.",
            ua: "У розкладі не лишаєш 4, 6, 9 чи 18. Це складені числа."
          }
        }
      ]
    },
    {
      type: "check",
      heading: { pl: "Rozkład liczby 60", ua: "Розклад числа 60" },
      task: {
        id: "s27-60",
        type: "single-choice",
        level: "B",
        question: { pl: "Który zapis to rozkład 60 na czynniki pierwsze?", ua: "Який запис — розклад 60 на прості множники?" },
        options: [
          { id: "a", label: { pl: "2 · 2 · 3 · 5", ua: "2 · 2 · 3 · 5" } },
          { id: "b", label: { pl: "2 · 3 · 10", ua: "2 · 3 · 10" } },
          { id: "c", label: { pl: "4 · 3 · 5", ua: "4 · 3 · 5" } }
        ],
        answer: "a",
        explanation: {
          pl: "60 : 2 = 30, 30 : 2 = 15, 15 : 3 = 5. Zostaje 2 · 2 · 3 · 5. W b jest 10, w c jest 4 — obie złożone.",
          ua: "60 : 2 = 30, 30 : 2 = 15, 15 : 3 = 5. Лишається 2 · 2 · 3 · 5. У b є 10, у c є 4 — обидва складені."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "10 = 2 · 5. W rozkładzie na pierwsze 10 nie zostaje.",
              ua: "10 = 2 · 5. У розкладі на прості 10 не лишається."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "4 = 2 · 2. Czynnik 4 jest złożony.",
              ua: "4 = 2 · 2. Множник 4 складений."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Rozkład liczby 27", ua: "Розклад числа 27" },
      task: {
        id: "s27-27",
        type: "single-choice",
        level: "B",
        question: { pl: "27 = …", ua: "27 = …" },
        options: [
          { id: "a", label: { pl: "3 · 3 · 3", ua: "3 · 3 · 3" } },
          { id: "b", label: { pl: "3 · 9", ua: "3 · 9" } },
          { id: "c", label: { pl: "2 · 13", ua: "2 · 13" } }
        ],
        answer: "a",
        explanation: {
          pl: "27 jest nieparzysta, więc 2 nie wchodzi. 2 + 7 = 9, a 9 dzieli się przez 3. 27 : 3 = 9, 9 : 3 = 3. Zostaje 3 · 3 · 3.",
          ua: "27 непарне, тож 2 не входить. 2 + 7 = 9, а 9 ділиться на 3. 27 : 3 = 9, 9 : 3 = 3. Лишається 3 · 3 · 3."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Próbny sprawdzian", ua: "Пробна контрольна" },
      items: [
        { pl: "pięć działań pisemnych", ua: "п’ять письмових дій" },
        { pl: "jedna liczba pierwsza albo złożona", ua: "одне просте або складене число" },
        { pl: "jeden rozkład na czynniki pierwsze", ua: "один розклад на прості множники" }
      ],
      parts: [
        {
          text: {
            pl: "Te liczby są nowe. Liczysz w zeszycie, tu wpisujesz tylko wynik.",
            ua: "Ці числа нові. Рахуєш у зошиті, тут вписуєш лише результат."
          }
        }
      ]
    },
    {
      type: "check",
      heading: { pl: "1. Dodawanie", ua: "1. Додавання" },
      task: {
        id: "s27-t1",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("258 + 467")],
          ua: [em("258 + 467")]
        },
        answer: 725,
        hint: { pl: "Zacznij od jedności: 8 + 7.", ua: "Почни з одиниць: 8 + 7." },
        explanation: {
          pl: "8 + 7 = 15 → 5. 5 + 6 + 1 = 12 → 2. 2 + 4 + 1 = 7. Suma 725.",
          ua: "8 + 7 = 15 → 5. 5 + 6 + 1 = 12 → 2. 2 + 4 + 1 = 7. Сума 725."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "2. Odejmowanie", ua: "2. Віднімання" },
      task: {
        id: "s27-t2",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("700 − 348")],
          ua: [em("700 − 348")]
        },
        answer: 352,
        hint: { pl: "Dwa zera. Pożyczka idzie do setek.", ua: "Два нулі. Позика йде до сотень." },
        explanation: {
          pl: "10 − 8 = 2, 9 − 4 = 5, 6 − 3 = 3. Różnica 352. Sprawdzenie: 348 + 352 = 700.",
          ua: "10 − 8 = 2, 9 − 4 = 5, 6 − 3 = 3. Різниця 352. Перевірка: 348 + 352 = 700."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "3. Mnożenie", ua: "3. Множення" },
      task: {
        id: "s27-t3",
        type: "input-number",
        level: "A",
        question: {
          pl: [em("56 · 8")],
          ua: [em("56 · 8")]
        },
        answer: 448,
        hint: { pl: "8 · 6, potem przenieś.", ua: "8 · 6, потім перенеси." },
        explanation: {
          pl: "8 · 6 = 48 → 8. 8 · 5 + 4 = 44. Iloczyn 448.",
          ua: "8 · 6 = 48 → 8. 8 · 5 + 4 = 44. Добуток 448."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "4. Dwa wiersze", ua: "4. Два рядки" },
      task: {
        id: "s27-t4",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("18 · 15")],
          ua: [em("18 · 15")]
        },
        answer: 270,
        hint: { pl: "18 · 5 i 18 · 10.", ua: "18 · 5 і 18 · 10." },
        explanation: {
          pl: "18 · 5 = 90, 18 · 10 = 180, 90 + 180 = 270.",
          ua: "18 · 5 = 90, 18 · 10 = 180, 90 + 180 = 270."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "5. Dzielenie", ua: "5. Ділення" },
      task: {
        id: "s27-t5",
        type: "input-number",
        level: "B",
        question: {
          pl: [em("75 : 5")],
          ua: [em("75 : 5")]
        },
        answer: 15,
        hint: { pl: "7 : 5 = 1. Potem sprowadź 5.", ua: "7 : 5 = 1. Потім спусти 5." },
        explanation: {
          pl: "1 · 5 = 5, 7 − 5 = 2. Sprowadzasz 5 → 25. 25 : 5 = 5. Iloraz 15.",
          ua: "1 · 5 = 5, 7 − 5 = 2. Спускаєш 5 → 25. 25 : 5 = 5. Частка 15."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "6. Pierwsza czy złożona", ua: "6. Просте чи складене" },
      task: {
        id: "s27-t6",
        type: "single-choice",
        level: "A",
        question: { pl: "29 jest…", ua: "29 є…" },
        options: [
          { id: "p", label: { pl: "pierwsza", ua: "простим" } },
          { id: "z", label: { pl: "złożona", ua: "складеним" } },
          { id: "n", label: { pl: "ani pierwsza, ani złożona", ua: "ні простим, ні складеним" } }
        ],
        answer: "p",
        explanation: {
          pl: "29 nie dzieli się przez 2, 3 ani 5. Dzielniki: tylko 1 i 29.",
          ua: "29 не ділиться на 2, 3 і 5. Дільники: лише 1 і 29."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "7. Rozkład", ua: "7. Розклад" },
      task: {
        id: "s27-t7",
        type: "single-choice",
        level: "B",
        question: { pl: "Rozkład 42 na czynniki pierwsze to…", ua: "Розклад 42 на прості множники — це…" },
        options: [
          { id: "a", label: { pl: "2 · 3 · 7", ua: "2 · 3 · 7" } },
          { id: "b", label: { pl: "6 · 7", ua: "6 · 7" } },
          { id: "c", label: { pl: "2 · 21", ua: "2 · 21" } }
        ],
        answer: "a",
        explanation: {
          pl: "42 : 2 = 21, 21 : 3 = 7. Zostaje 2 · 3 · 7. Szóstka i 21 są złożone.",
          ua: "42 : 2 = 21, 21 : 3 = 7. Лишається 2 · 3 · 7. Шістка і 21 складені."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Do zeszytu", ua: "У зошит" },
      text: {
        pl: [
          "Dodawanie: kolumna od prawej, 10 i więcej — cyfra zostaje, 1 idzie w lewo.",
          "Odejmowanie: gdy góra za mała, pożyczasz. Zero w środku też maleje: 10, potem 9.",
          "Mnożenie przez dziesiątki to drugi wiersz, przesunięty o jedno miejsce.",
          "Dzielenie: dzielę, mnożę, odejmuję, sprowadzam. Potem sprawdzam mnożeniem.",
          "Pierwsza: dokładnie 1 i ona sama. Złożona: więcej dzielników. 1 — żadna z nich.",
          "Rozkład kończy się samymi liczbami pierwszymi: 36 = 2 · 2 · 3 · 3."
        ],
        ua: [
          "Додавання: колонка справа, 10 і більше — цифра лишається, 1 іде вліво.",
          "Віднімання: коли зверху замало, позичаєш. Нуль у середині теж зменшується: 10, потім 9.",
          "Множення на десятки — другий рядок, зсунутий на одне місце.",
          "Ділення: ділю, множу, віднімаю, спускаю. Потім перевіряю множенням.",
          "Просте: рівно 1 і воно саме. Складене: більше дільників. 1 — жодне з них.",
          "Розклад закінчується самими простими: 36 = 2 · 2 · 3 · 3."
        ]
      }
    }
  ]
};
