function em(text) {
  return { text: text, emphasis: true };
}

function ph(file, titlePl, titleUa, prompt) {
  var path = "./" + file;
  return {
    kind: "image-placeholder",
    file: path,
    url: path,
    title: { pl: titlePl, ua: titleUa },
    alt: { pl: titlePl, ua: titleUa },
    prompt: prompt
  };
}

window.EduMostLessonContent = {
  blocks: [
    /* 1 — Klub liczb */
    {
      type: "intro",
      heading: {
        pl: "🔐 Tajemniczy klub liczb",
        ua: "🔐 Таємничий клуб чисел"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Dzisiaj mam dla Ciebie tajemnicę.",
              "Nie wszystkie liczby są takie same.",
              "Niektóre mają tylko **dwóch przyjaciół**.",
              "Inne mają ich znacznie więcej.",
              "A jedna liczba… nie należy do żadnej grupy!"
            ],
            ua: [
              "🦉 Сьогодні маю для тебе таємницю.",
              "Не всі числа однакові.",
              "Деякі мають лише **двох друзів**.",
              "Інші мають їх значно більше.",
              "А одне число… не належить до жодної групи!"
            ]
          }
        },
        {
          visual: ph(
            "t09-club.jpg",
            "Klub liczb — drzwi",
            "Клуб чисел — двері",
            "Owl before club door with 7, 8, 1"
          )
        },
        {
          text: {
            pl: "Na drzwiach widzisz **7**, **8** i **1**. Która z nich jest jaka?",
            ua: "На дверях бачиш **7**, **8** і **1**. Яке з них яке?"
          }
        }
      ],
      task: {
        id: "m09-start",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wchodzimy do Klubu Liczb i odkrywamy tajemnicę?",
          ua: "Заходимо до Клубу Чисел і відкриваємо таємницю?"
        },
        answer: true,
        explanation: {
          pl: "🔎 Tak! Wchodzimy. Na drzwiach czekają 7, 8 i 1…",
          ua: "🔎 Так! Заходимо. На дверях чекають 7, 8 і 1…"
        }
      }
    },

    /* 2 — Goal */
    {
      type: "goal",
      heading: {
        pl: "🎯 Co będziesz umieć?",
        ua: "🎯 Що ти вмітимеш?"
      },
      items: [
        {
          pl: "rozpoznać liczbę pierwszą (dokładnie 2 dzielniki)",
          ua: "розпізнати просте число (рівно 2 дільники)"
        },
        {
          pl: "rozpoznać liczbę złożoną (więcej niż 2 dzielniki)",
          ua: "розпізнати складене число (більше ніж 2 дільники)"
        },
        {
          pl: "wiedzieć, że 1 nie jest ani pierwsza, ani złożona",
          ua: "знати, що 1 не є ні простим, ні складеним"
        },
        {
          pl: "znajdować dzielniki i rozłożyć małą liczbę na czynniki",
          ua: "знаходити дільники і розкласти мале число на множники"
        },
        {
          pl: "wiedzieć, że 2 to jedyna parzysta liczba pierwsza",
          ua: "знати, що 2 — єдине парне просте число"
        }
      ]
    },

    /* 3 — Dzielniki 7 */
    {
      type: "observe",
      heading: {
        pl: "Poznajemy liczbę 7",
        ua: "Пізнаємо число 7"
      },
      parts: [
        {
          text: {
            pl: [
              "Na środku stoi **7**.",
              "Sprawdźmy, przez które liczby dzielimy 7 **bez reszty**."
            ],
            ua: [
              "Посередині стоїть **7**.",
              "Перевіримо, на які числа ділиться 7 **без остачі**."
            ]
          }
        },
        {
          visual: ph(
            "t09-check7.jpg",
            "Sprawdzamy dzielniki 7",
            "Перевіряємо дільники 7",
            "Number 7 with divisor cards"
          )
        },
        { formula: "7" },
        {
          items: [
            { pl: "7 : 1 = 7 ✅", ua: "7 : 1 = 7 ✅" },
            { pl: "7 : 2 = 3 r. 1 ❌", ua: "7 : 2 = 3 r. 1 ❌" },
            { pl: "7 : 3 = 2 r. 1 ❌", ua: "7 : 3 = 2 r. 1 ❌" },
            { pl: "7 : 4 = 1 r. 3 ❌", ua: "7 : 4 = 1 r. 3 ❌" },
            { pl: "7 : 5 = 1 r. 2 ❌", ua: "7 : 5 = 1 r. 2 ❌" },
            { pl: "7 : 6 = 1 r. 1 ❌", ua: "7 : 6 = 1 r. 1 ❌" },
            { pl: "7 : 7 = 1 ✅", ua: "7 : 7 = 1 ✅" }
          ]
        },
        {
          text: {
            pl: [["Dzielniki liczby 7: ", em("1"), " i ", em("7"), "."]],
            ua: [["Дільники числа 7: ", em("1"), " і ", em("7"), "."]]
          }
        }
      ],
      task: {
        id: "m09-div7",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ile dzielników ma liczba 7?",
          ua: "Скільки дільників має число 7?"
        },
        options: [
          { id: "a", label: { pl: "1", ua: "1" } },
          { id: "b", label: { pl: "2", ua: "2" } },
          { id: "c", label: { pl: "3", ua: "3" } }
        ],
        answer: "b",
        explanation: {
          pl: "Dokładnie dwóch: 1 i 7.",
          ua: "Рівно два: 1 і 7."
        }
      }
    },

    /* 4 — Liczba pierwsza */
    {
      type: "concept",
      heading: {
        pl: "⭐ Tylko dwóch przyjaciół",
        ua: "⭐ Лише двоє друзів"
      },
      parts: [
        {
          text: {
            pl: [
              "Liczba **7** ma tylko dwóch dzielników: **1** i samą siebie.",
              "To wielkie odkrycie Klubu Liczb!"
            ],
            ua: [
              "Число **7** має лише два дільники: **1** і саме себе.",
              "Це велике відкриття Клубу Чисел!"
            ]
          }
        },
        {
          visual: ph(
            "t09-prime7.jpg",
            "7 i dwóch przyjaciół",
            "7 і двоє друзів",
            "Number 7 with two friends"
          )
        },
        {
          rule: {
            label: { pl: "Liczba pierwsza", ua: "Просте число" },
            text: {
              pl: "Ma **dokładnie dwa** dzielniki: 1 oraz samą siebie.",
              ua: "Має **рівно два** дільники: 1 і саме себе."
            }
          }
        },
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Proste (pierwsza) = dokładnie 2 dzielniki.",
              ua: "Просте число має рівно два дільники: 1 і саме число."
            }
          }
        }
      ]
    },

    /* 5 — Liczba 8 */
    {
      type: "observe",
      heading: {
        pl: "A teraz 8",
        ua: "А тепер 8"
      },
      parts: [
        {
          text: {
            pl: [
              "Sprawdźmy przyjaciół liczby **8**.",
              "Które dzielenia wychodzą bez reszty?"
            ],
            ua: [
              "Перевіримо друзів числа **8**.",
              "Які ділення виходять без остачі?"
            ]
          }
        },
        {
          visual: ph(
            "t09-check8.jpg",
            "Przyjaciele liczby 8",
            "Друзі числа 8",
            "Number 8 with four divisors"
          )
        },
        { formula: "8" },
        {
          items: [
            { pl: "8 : 1 = 8 ✅", ua: "8 : 1 = 8 ✅" },
            { pl: "8 : 2 = 4 ✅", ua: "8 : 2 = 4 ✅" },
            { pl: "8 : 3 = 2 r. 2 ❌", ua: "8 : 3 = 2 r. 2 ❌" },
            { pl: "8 : 4 = 2 ✅", ua: "8 : 4 = 2 ✅" },
            { pl: "8 : 8 = 1 ✅", ua: "8 : 8 = 1 ✅" }
          ]
        },
        {
          text: {
            pl: [["Dzielniki 8: ", em("1, 2, 4, 8"), ". Ooo — więcej niż dwóch!"]],
            ua: [["Дільники 8: ", em("1, 2, 4, 8"), ". Ого — більше ніж двоє!"]]
          }
        }
      ],
      task: {
        id: "m09-div8",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy 8 ma więcej niż dwóch dzielników?",
          ua: "Чи 8 має більше ніж два дільники?"
        },
        answer: true,
        explanation: {
          pl: "Tak — aż czterech: 1, 2, 4, 8.",
          ua: "Так — аж чотири: 1, 2, 4, 8."
        }
      }
    },

    /* 6 — Liczba złożona */
    {
      type: "concept",
      heading: {
        pl: "⭐ Liczba złożona",
        ua: "⭐ Складене число"
      },
      parts: [
        {
          text: {
            pl: "Liczba **8** ma więcej niż dwóch dzielników — to inna drużyna!",
            ua: "Число **8** має більше ніж два дільники — це інша команда!"
          }
        },
        {
          visual: ph(
            "t09-composite8.jpg",
            "8 i wielu przyjaciół",
            "8 і багато друзів",
            "Number 8 with many friends"
          )
        },
        {
          rule: {
            label: { pl: "Liczba złożona", ua: "Складене число" },
            text: {
              pl: "Ma **więcej niż dwa** dzielniki.",
              ua: "Має **більше ніж два** дільники."
            }
          }
        }
      ]
    },

    /* 7 — Porównaj */
    {
      type: "comparison",
      heading: {
        pl: "⚖️ Porównaj",
        ua: "⚖️ Порівняй"
      },
      parts: [
        {
          text: {
            pl: "Połóż karty obok siebie i porównaj przyjaciół:",
            ua: "Поклади картки поруч і порівняй друзів:"
          }
        },
        {
          visual: ph(
            "t09-compare.jpg",
            "Pierwsza vs złożona",
            "Просте vs складене",
            "Compare 7 and 8 cards"
          )
        },
        {
          items: [
            {
              pl: ["**Pierwsza (7):** dzielniki 1, 7"],
              ua: ["**Просте (7):** дільники 1, 7"]
            },
            {
              pl: ["**Złożona (8):** dzielniki 1, 2, 4, 8"],
              ua: ["**Складене (8):** дільники 1, 2, 4, 8"]
            }
          ]
        }
      ],
      task: {
        id: "m09-porownaj",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która liczba ma więcej dzielników?",
          ua: "Яке число має більше дільників?"
        },
        options: [
          { id: "a", label: { pl: "7", ua: "7" } },
          { id: "b", label: { pl: "8", ua: "8" } }
        ],
        answer: "b",
        explanation: {
          pl: "8 ma czterech dzielników, 7 tylko dwóch.",
          ua: "8 має чотири дільники, 7 — лише два."
        }
      }
    },

    /* 8 — Gra drużyny */
    {
      type: "practice",
      heading: {
        pl: "⚽ Drużyna pierwszych i złożonych",
        ua: "⚽ Команда простих і складених"
      },
      parts: [
        {
          text: {
            pl: [
              "Podziel liczby do dwóch drużyn.",
              "Liczby: **2, 4, 5, 6, 7, 9**"
            ],
            ua: [
              "Розділи числа на дві команди.",
              "Числа: **2, 4, 5, 6, 7, 9**"
            ]
          }
        },
        {
          visual: ph(
            "t09-teams.jpg",
            "Dwie drużyny liczb",
            "Дві команди чисел",
            "Prime vs composite teams"
          )
        }
      ],
      task: {
        id: "m09-druzyny",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz wszystkie **liczby pierwsze**:",
          ua: "Познач усі **прості числа**:"
        },
        options: [
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "4", label: { pl: "4", ua: "4" } },
          { id: "5", label: { pl: "5", ua: "5" } },
          { id: "6", label: { pl: "6", ua: "6" } },
          { id: "7", label: { pl: "7", ua: "7" } },
          { id: "9", label: { pl: "9", ua: "9" } }
        ],
        answer: ["2", "5", "7"],
        explanation: {
          pl: "Pierwsze: 2, 5, 7. Złożone: 4, 6, 9.",
          ua: "Прості: 2, 5, 7. Складені: 4, 6, 9."
        }
      }
    },

    /* 9 — Liczba 2 */
    {
      type: "concept",
      heading: {
        pl: "✨ Ciekawostka: liczba 2",
        ua: "✨ Цікавинка: число 2"
      },
      parts: [
        {
          text: {
            pl: [
              "Mam dla Ciebie ciekawostkę.",
              "**2** jest liczbą pierwszą — ma dzielniki tylko 1 i 2."
            ],
            ua: [
              "Маю для тебе цікавинку.",
              "**2** є простим числом — дільники лише 1 і 2."
            ]
          }
        },
        {
          visual: ph(
            "t09-two.jpg",
            "Wyjątkowa dwójka",
            "Особлива двійка",
            "Number 2 as special prime"
          )
        },
        { formula: "2" },
        {
          items: [
            { pl: "2 : 1 = 2 ✅", ua: "2 : 1 = 2 ✅" },
            { pl: "2 : 2 = 1 ✅", ua: "2 : 2 = 1 ✅" }
          ]
        },
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            text: {
              pl: "**2** jest jedyną **parzystą** liczbą pierwszą!",
              ua: "**2** — єдине **парне** просте число!"
            }
          }
        },
        {
          text: {
            pl: "Bo każda większa liczba parzysta (4, 6, 8…) dzieli się jeszcze przez 2.",
            ua: "Бо кожне більше парне число (4, 6, 8…) ще ділиться на 2."
          }
        }
      ],
      task: {
        id: "m09-dwa",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy 2 jest jedyną parzystą liczbą pierwszą?",
          ua: "Чи 2 — єдине парне просте число?"
        },
        answer: true,
        explanation: {
          pl: "Tak! To wyjątkowy zawodnik w drużynie pierwszych.",
          ua: "Так! Це особливий гравець у команді простих."
        }
      }
    },

    /* 10 — Pułapka 1 */
    {
      type: "mistake",
      heading: {
        pl: "⚠️ Największa pułapka: liczba 1",
        ua: "⚠️ Найбільша пастка: число 1"
      },
      claim: {
        pl: "Ktoś mówi: „1 jest liczbą pierwszą.”",
        ua: "Хтось каже: «1 є простим числом.»"
      },
      parts: [
        {
          text: {
            pl: [
              "Sprawdzamy: 1 : 1 = 1.",
              "Dzielniki liczby 1: **tylko 1**.",
              "Liczba pierwsza musi mieć **dokładnie dwa** dzielniki."
            ],
            ua: [
              "Перевіряємо: 1 : 1 = 1.",
              "Дільники числа 1: **лише 1**.",
              "Просте число має мати **рівно два** дільники."
            ]
          }
        },
        {
          visual: ph(
            "t09-one.jpg",
            "Pułapka liczby 1",
            "Пастка числа 1",
            "Warning about number 1"
          )
        },
        {
          text: {
            pl: "Dlatego: **1 nie jest pierwsza** i **nie jest złożona**.",
            ua: "Тому: **1 не є простим** і **не є складеним**."
          }
        }
      ],
      task: {
        id: "m09-jeden",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym jest liczba 1?",
          ua: "Чим є число 1?"
        },
        options: [
          { id: "a", label: { pl: "pierwsza", ua: "просте" } },
          { id: "b", label: { pl: "złożona", ua: "складене" } },
          { id: "c", label: { pl: "ani pierwsza, ani złożona", ua: "ні просте, ні складене" } }
        ],
        answer: "c",
        explanation: {
          pl: "Ma tylko jeden dzielnik — wypada z obu drużyn.",
          ua: "Має лише один дільник — випадає з обох команд."
        }
      }
    },

    /* 11 — Logika 1: kto kłamie */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Kto kłamie?",
        ua: "🕵️ Хто бреше?"
      },
      parts: [
        {
          text: {
            pl: [
              "Trzech świadków. Jeden mówi nieprawdę.",
              "🦊 Lis: „**9** jest liczbą pierwszą.”",
              "🐸 Żaba: „**11** jest liczbą pierwszą.”",
              "🐱 Kot: „**12** jest liczbą złożoną.”"
            ],
            ua: [
              "Троє свідків. Один каже неправду.",
              "🦊 Лис: «**9** є простим числом.»",
              "🐸 Жаба: «**11** є простим числом.»",
              "🐱 Кіт: «**12** є складеним числом.»"
            ]
          }
        },
        {
          visual: ph(
            "t09-liars.jpg",
            "Lis, żaba i kot — świadkowie",
            "Лис, жаба і кіт — свідки",
            "Fox frog cat as witnesses"
          )
        },
        {
          text: {
            pl: "Spójrz na świadków. Sprawdź dzielniki i znajdź kłamcę!",
            ua: "Подивись на свідків. Перевір дільники й знайди брехуна!"
          }
        }
      ],
      task: {
        id: "m09-klamie",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Kto mówi nieprawdę?",
          ua: "Хто каже неправду?"
        },
        options: [
          { id: "lis", label: { pl: "🦊 Lis", ua: "🦊 Лис" } },
          { id: "zaba", label: { pl: "🐸 Żaba", ua: "🐸 Жаба" } },
          { id: "kot", label: { pl: "🐱 Kot", ua: "🐱 Кіт" } }
        ],
        answer: "lis",
        hint: {
          pl: "9 = 1 · 9 = 3 · 3 — ma więcej niż 2 dzielniki.",
          ua: "9 = 1 · 9 = 3 · 3 — має більше ніж 2 дільники."
        },
        explanation: {
          pl: "🦊 Lis kłamie! 9 jest złożona (1, 3, 9). Żaba i Kot mówią prawdę.",
          ua: "🦊 Лис бреше! 9 складене (1, 3, 9). Жаба і Кіт кажуть правду."
        }
      }
    },

    /* 12 — Jak sprawdzić 13 */
    {
      type: "example",
      heading: {
        pl: "🔎 Detektyw dzielników",
        ua: "🔎 Детектив дільників"
      },
      parts: [
        {
          text: {
            pl: [
              "Czy musimy sprawdzać **wszystkie** liczby od 1 do 13?",
              "Wystarczy szukać dzielnika innego niż 1 i 13."
            ],
            ua: [
              "Чи треба перевіряти **усі** числа від 1 до 13?",
              "Достатньо шукати дільник, інший ніж 1 і 13."
            ]
          }
        },
        {
          visual: ph(
            "t09-detect13.jpg",
            "Detektyw i liczba 13",
            "Детектив і число 13",
            "Owl detective examining 13"
          )
        },
        { formula: "13" }
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "Próby: 13 : 2, 13 : 3, 13 : 4… — wszędzie jest reszta.",
            ua: "Спроби: 13 : 2, 13 : 3, 13 : 4… — скрізь є остача."
          }
        },
        {
          formula: "13 : 1 = 13 ✅   ·   13 : 13 = 1 ✅",
          text: {
            pl: "Tylko dwóch dzielników → **13 jest pierwsza**.",
            ua: "Лише два дільники → **13 просте**."
          }
        }
      ],
      task: {
        id: "m09-trzynascie",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy 13 jest liczbą pierwszą?",
          ua: "Чи 13 є простим числом?"
        },
        answer: true,
        explanation: {
          pl: "Tak — dzielniki tylko 1 i 13.",
          ua: "Так — дільники лише 1 і 13."
        }
      }
    },

    /* 13 — Zamki 18 + czynniki */
    {
      type: "practice",
      heading: {
        pl: "🧩 Otwórz zamki liczby 18",
        ua: "🧩 Відкрий замки числа 18"
      },
      parts: [
        {
          text: {
            pl: [
              "Przed tobą zamki: 2, 3, 4, 5, 6, 7.",
              "Które **otwierają** 18 (dzielą bez reszty)?"
            ],
            ua: [
              "Перед тобою замки: 2, 3, 4, 5, 6, 7.",
              "Які **відкривають** 18 (ділять без остачі)?"
            ]
          }
        },
        {
          visual: ph(
            "t09-locks18.jpg",
            "Zamki liczby 18",
            "Замки числа 18",
            "Locks for number 18"
          )
        },
        { formula: "18" },
        {
          text: {
            pl: "Pełne dzielniki 18 to: 1, 2, 3, 6, 9, 18.",
            ua: "Повні дільники 18: 1, 2, 3, 6, 9, 18."
          }
        },
        {
          rule: {
            label: { pl: "Rozkład na czynniki", ua: "Розклад на множники" },
            text: {
              pl: "18 = 2 · 3 · 3. Złożoną liczbę można zapisać jako iloczyn liczb pierwszych.",
              ua: "18 = 2 · 3 · 3. Складене число можна записати як добуток простих."
            }
          }
        }
      ],
      task: {
        id: "m09-zamki18",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz zamki, które dzielą 18 bez reszty:",
          ua: "Познач замки, що ділять 18 без остачі:"
        },
        options: [
          { id: "2", label: { pl: "🔒 2", ua: "🔒 2" } },
          { id: "3", label: { pl: "🔒 3", ua: "🔒 3" } },
          { id: "4", label: { pl: "🔒 4", ua: "🔒 4" } },
          { id: "5", label: { pl: "🔒 5", ua: "🔒 5" } },
          { id: "6", label: { pl: "🔒 6", ua: "🔒 6" } },
          { id: "7", label: { pl: "🔒 7", ua: "🔒 7" } }
        ],
        answer: ["2", "3", "6"],
        explanation: {
          pl: "Otwierają: 2, 3, 6. (4, 5, 7 dają resztę). 18 = 2 · 3 · 3.",
          ua: "Відкривають: 2, 3, 6. (4, 5, 7 дають остачу). 18 = 2 · 3 · 3."
        }
      }
    },

    /* 14–16 — Szybki test (3 z 5) */
    {
      type: "check",
      heading: {
        pl: "⚡ Szybki test (1/3)",
        ua: "⚡ Швидкий тест (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Pierwsza czy złożona?",
            ua: "Просте чи складене?"
          }
        },
        { formula: "17" }
      ],
      task: {
        id: "m09-qt17",
        type: "single-choice",
        level: "A",
        question: { pl: "17 jest…", ua: "17 є…" },
        options: [
          { id: "p", label: { pl: "🟢 pierwsza", ua: "🟢 просте" } },
          { id: "z", label: { pl: "🔵 złożona", ua: "🔵 складене" } }
        ],
        answer: "p",
        explanation: {
          pl: "17 — pierwsza (1 i 17).",
          ua: "17 — просте (1 і 17)."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "⚡ Szybki test (2/3)",
        ua: "⚡ Швидкий тест (2/3)"
      },
      parts: [
        { formula: "20" },
        {
          text: {
            pl: "Pierwsza czy złożona?",
            ua: "Просте чи складене?"
          }
        }
      ],
      task: {
        id: "m09-qt20",
        type: "single-choice",
        level: "A",
        question: { pl: "20 jest…", ua: "20 є…" },
        options: [
          { id: "p", label: { pl: "🟢 pierwsza", ua: "🟢 просте" } },
          { id: "z", label: { pl: "🔵 złożona", ua: "🔵 складене" } }
        ],
        answer: "z",
        explanation: {
          pl: "20 — złożona (1, 2, 4, 5, 10, 20).",
          ua: "20 — складене (1, 2, 4, 5, 10, 20)."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "⚡ Szybki test (3/3)",
        ua: "⚡ Швидкий тест (3/3)"
      },
      parts: [
        { formula: "25" },
        {
          text: {
            pl: "Pierwsza czy złożona?",
            ua: "Просте чи складене?"
          }
        }
      ],
      task: {
        id: "m09-qt25",
        type: "single-choice",
        level: "A",
        question: { pl: "25 jest…", ua: "25 є…" },
        options: [
          { id: "p", label: { pl: "🟢 pierwsza", ua: "🟢 просте" } },
          { id: "z", label: { pl: "🔵 złożona", ua: "🔵 складене" } }
        ],
        answer: "z",
        explanation: {
          pl: "25 = 5 · 5 — złożona.",
          ua: "25 = 5 · 5 — складене."
        }
      }
    },

    /* 17 — Logika 2: tajemniczy kod */
    {
      type: "challenge",
      heading: {
        pl: "🔐 Tajemniczy kod",
        ua: "🔐 Таємничий код"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Mam tajemniczą liczbę.",
              "Jest większa od **10** i mniejsza od **20**.",
              "Jest liczbą **pierwszą**.",
              "Jej cyfra jedności jest **większa od 5**."
            ],
            ua: [
              "🦉 Маю таємниче число.",
              "Воно більше за **10** і менше за **20**.",
              "Воно **просте**.",
              "Його цифра одиниць **більша за 5**."
            ]
          }
        },
        {
          visual: ph(
            "t09-code.jpg",
            "Tajemniczy kod 10–20",
            "Таємничий код 10–20",
            "Secret code number line"
          )
        },
        {
          text: {
            pl: [
              "Kandydaci pierwsze: 11, 13, 17, 19.",
              "Cyfra jedności > 5 → zostają **17** i **19**."
            ],
            ua: [
              "Кандидати прості: 11, 13, 17, 19.",
              "Цифра одиниць > 5 → лишаються **17** і **19**."
            ]
          }
        },
        {
          text: {
            pl: "Sowa dodaje: „To liczba **nieparzysta** i **większa od 18**.”",
            ua: "Сова додає: «Це число **непарне** і **більше за 18**.»"
          }
        }
      ],
      task: {
        id: "m09-kod",
        type: "input-number",
        level: "C",
        question: {
          pl: "Wpisz tajemniczą liczbę:",
          ua: "Впиши таємниче число:"
        },
        answer: 19,
        hint: {
          pl: "Z 17 i 19 wybierz większą od 18.",
          ua: "З 17 і 19 обери більше за 18."
        },
        explanation: {
          pl: "⭐ To **19**. Brawo, detektywie!",
          ua: "⭐ Це **19**. Браво, детективе!"
        }
      }
    },

    /* 18 — Wszystkie pierwsze nieparzyste (oprócz 2) */
    {
      type: "concept",
      heading: {
        pl: "🤔 Co łączy liczby pierwsze?",
        ua: "🤔 Що спільне в простих числах?"
      },
      parts: [
        {
          text: {
            pl: "Spójrz: 2, 3, 5, 7, 11, 13, 17, 19…",
            ua: "Подивись: 2, 3, 5, 7, 11, 13, 17, 19…"
          }
        },
        {
          visual: ph(
            "t09-primes.jpg",
            "Rząd liczb pierwszych",
            "Ряд простих чисел",
            "Row of prime numbers"
          )
        },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Wszystkie liczby pierwsze **oprócz 2** są nieparzyste.",
              ua: "Усі прості числа **крім 2** — непарні."
            }
          }
        },
        {
          text: {
            pl: "Bo każda liczba parzysta większa od 2 ma dzielnik 2 — więc nie może być pierwsza.",
            ua: "Бо кожне парне число, більше за 2, ділиться на 2 — тож не може бути простим."
          }
        }
      ],
      task: {
        id: "m09-nieparzyste",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy wszystkie liczby pierwsze oprócz 2 są nieparzyste?",
          ua: "Чи всі прості числа крім 2 є непарними?"
        },
        answer: true,
        explanation: {
          pl: "Tak — i dlatego 2 jest taka wyjątkowa!",
          ua: "Так — і тому 2 така особлива!"
        }
      }
    },

    /* 19 — Piraci 24 */
    {
      type: "practice",
      heading: {
        pl: "🏴‍☠️ Piraci dzielników — skarb 24",
        ua: "🏴‍☠️ Пірати дільників — скарб 24"
      },
      parts: [
        {
          text: {
            pl: [
              "Na skrzyni napisano: **SKARB LICZBY 24**.",
              "Otworzysz ją, gdy wybierzesz **wszystkie** dzielniki."
            ],
            ua: [
              "На скрині написано: **СКАРБ ЧИСЛА 24**.",
              "Відкриєш її, коли обереш **усі** дільники."
            ]
          }
        },
        {
          visual: ph(
            "t09-pirates.jpg",
            "Skarb liczby 24",
            "Скарб числа 24",
            "Treasure chest 24"
          )
        }
      ],
      task: {
        id: "m09-piraci24",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz wszystkie dzielniki liczby 24:",
          ua: "Познач усі дільники числа 24:"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "4", label: { pl: "4", ua: "4" } },
          { id: "5", label: { pl: "5", ua: "5" } },
          { id: "6", label: { pl: "6", ua: "6" } },
          { id: "8", label: { pl: "8", ua: "8" } },
          { id: "10", label: { pl: "10", ua: "10" } },
          { id: "12", label: { pl: "12", ua: "12" } },
          { id: "24", label: { pl: "24", ua: "24" } }
        ],
        answer: ["1", "2", "3", "4", "6", "8", "12", "24"],
        explanation: {
          pl: "🎉 Skrzynia otwarta! Dzielniki: 1, 2, 3, 4, 6, 8, 12, 24. (5 i 10 — nie).",
          ua: "🎉 Скриню відкрито! Дільники: 1, 2, 3, 4, 6, 8, 12, 24. (5 і 10 — ні)."
        }
      }
    },

    /* 20 — Błyskawiczne pytania (skompresowane do 3) */
    {
      type: "check",
      heading: {
        pl: "⚡ Błyskawica (1/3)",
        ua: "⚡ Блискавка (1/3)"
      },
      parts: [
        {
          text: {
            pl: "**2** jest liczbą…",
            ua: "**2** є числом…"
          }
        }
      ],
      task: {
        id: "m09-flash1",
        type: "single-choice",
        level: "A",
        question: { pl: "2 jest…", ua: "2 є…" },
        options: [
          { id: "p", label: { pl: "pierwszą", ua: "простим" } },
          { id: "z", label: { pl: "złożoną", ua: "складеним" } }
        ],
        answer: "p",
        explanation: { pl: "Pierwsza — i jedyna parzysta pierwsza!", ua: "Просте — і єдине парне просте!" }
      }
    },
    {
      type: "check",
      heading: {
        pl: "⚡ Błyskawica (2/3)",
        ua: "⚡ Блискавка (2/3)"
      },
      parts: [
        {
          text: {
            pl: "**1** jest liczbą…",
            ua: "**1** є числом…"
          }
        }
      ],
      task: {
        id: "m09-flash2",
        type: "single-choice",
        level: "B",
        question: { pl: "1 jest…", ua: "1 є…" },
        options: [
          { id: "p", label: { pl: "pierwszą", ua: "простим" } },
          { id: "z", label: { pl: "złożoną", ua: "складеним" } },
          { id: "n", label: { pl: "żadną z nich", ua: "жодним із них" } }
        ],
        answer: "n",
        explanation: {
          pl: "Ani pierwsza, ani złożona.",
          ua: "Ні просте, ні складене."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "⚡ Błyskawica (3/3)",
        ua: "⚡ Блискавка (3/3)"
      },
      parts: [
        {
          text: {
            pl: "**15** jest…",
            ua: "**15** є…"
          }
        }
      ],
      task: {
        id: "m09-flash3",
        type: "single-choice",
        level: "A",
        question: { pl: "15 jest…", ua: "15 є…" },
        options: [
          { id: "p", label: { pl: "pierwsza", ua: "просте" } },
          { id: "z", label: { pl: "złożona", ua: "складене" } }
        ],
        answer: "z",
        explanation: {
          pl: "15 = 3 · 5 — złożona.",
          ua: "15 = 3 · 5 — складене."
        }
      }
    },

    /* 21 — Wielkie śledztwo 29 */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Znajdź tajemniczą liczbę",
        ua: "🕵️ Знайди таємниче число"
      },
      parts: [
        {
          text: {
            pl: [
              "Jestem liczbą między **20** a **30**.",
              "Jestem liczbą **pierwszą**.",
              "Jestem **większa od 25**."
            ],
            ua: [
              "Я число між **20** і **30**.",
              "Я **просте**.",
              "Я **більше за 25**."
            ]
          }
        },
        {
          visual: ph(
            "t09-hunt.jpg",
            "Śledztwo 20–30",
            "Слідство 20–30",
            "Number hunt 20 to 30"
          )
        },
        {
          text: {
            pl: "Skala: 20 — 21 — 22 — 23 — 24 — 25 — 26 — 27 — 28 — 29 — 30",
            ua: "Шкала: 20 — 21 — 22 — 23 — 24 — 25 — 26 — 27 — 28 — 29 — 30"
          }
        }
      ],
      task: {
        id: "m09-sledztwo",
        type: "input-number",
        level: "C",
        question: {
          pl: "Wpisz tajemniczą liczbę:",
          ua: "Впиши таємниче число:"
        },
        answer: 29,
        hint: {
          pl: "Pierwsze między 26 a 30: tylko 29.",
          ua: "Прості між 26 і 30: лише 29."
        },
        explanation: {
          pl: "🎉 Zagadka rozwiązana! To **29**.",
          ua: "🎉 Загадку розгадано! Це **29**."
        }
      }
    },

    /* 22 — Vocabulary */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka Klubu Liczb",
        ua: "📚 Слова Клубу Чисел"
      },
      rows: [
        { pl: "liczba pierwsza", ua: "просте число" },
        { pl: "liczba złożona", ua: "складене число" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "czynniki / rozkład na czynniki", ua: "множники / розклад на множники" },
        { pl: "parzysta / nieparzysta", ua: "парне / непарне" }
      ]
    },

    /* 23 — Podsumowanie pojęć */
    {
      type: "summary",
      heading: {
        pl: "🔑 Dwa klucze Klubu",
        ua: "🔑 Два ключі Клубу"
      },
      parts: [
        {
          rule: {
            label: { pl: "Liczba pierwsza", ua: "Просте число" },
            text: {
              pl: "Dokładnie 2 dzielniki: 1 i sama siebie. Przykłady: 2, 3, 5, 7, 11, 13…",
              ua: "Рівно 2 дільники: 1 і саме себе. Приклади: 2, 3, 5, 7, 11, 13…"
            }
          }
        },
        {
          rule: {
            label: { pl: "Liczba złożona", ua: "Складене число" },
            text: {
              pl: "Więcej niż 2 dzielniki. Przykłady: 4, 6, 8, 9, 10, 12…",
              ua: "Більше ніж 2 дільники. Приклади: 4, 6, 8, 9, 10, 12…"
            }
          }
        },
        {
          rule: {
            label: { pl: "⚠️ Liczba 1", ua: "⚠️ Число 1" },
            text: {
              pl: "Ani pierwsza, ani złożona.",
              ua: "Ні просте, ні складене."
            }
          }
        }
      ]
    },

    /* 24–27 — Finalna misja */
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz liczb (1/4)",
        ua: "🏆 Майстер чисел (1/4)"
      },
      parts: [
        {
          text: {
            pl: "Ostatnia misja detektywa!",
            ua: "Остання місія детектива!"
          }
        },
        {
          text: {
            pl: "Czy **31** jest liczbą pierwszą?",
            ua: "Чи **31** є простим числом?"
          }
        }
      ],
      task: {
        id: "m09-fin1",
        type: "true-false",
        level: "B",
        question: { pl: "31 jest pierwsza?", ua: "31 просте?" },
        answer: true,
        explanation: {
          pl: "Tak — dzielniki tylko 1 i 31.",
          ua: "Так — дільники лише 1 і 31."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz liczb (2/4)",
        ua: "🏆 Майстер чисел (2/4)"
      },
      parts: [
        {
          text: {
            pl: "Czy **27** jest liczbą złożoną?",
            ua: "Чи **27** є складеним числом?"
          }
        }
      ],
      task: {
        id: "m09-fin2",
        type: "true-false",
        level: "B",
        question: { pl: "27 jest złożona?", ua: "27 складене?" },
        answer: true,
        explanation: {
          pl: "Tak. 27 = 3 · 9 = 3 · 3 · 3.",
          ua: "Так. 27 = 3 · 9 = 3 · 3 · 3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz liczb (3/4)",
        ua: "🏆 Майстер чисел (3/4)"
      },
      parts: [
        {
          text: {
            pl: "Która liczba jest **pierwsza**?",
            ua: "Яке число **просте**?"
          }
        }
      ],
      task: {
        id: "m09-fin3",
        type: "single-choice",
        level: "B",
        question: { pl: "Wybierz pierwszą:", ua: "Обери просте:" },
        options: [
          { id: "a", label: { pl: "21", ua: "21" } },
          { id: "b", label: { pl: "22", ua: "22" } },
          { id: "c", label: { pl: "23", ua: "23" } },
          { id: "d", label: { pl: "24", ua: "24" } }
        ],
        answer: "c",
        explanation: {
          pl: "23 — pierwsza. 21=3·7, 22 i 24 parzyste > 2.",
          ua: "23 — просте. 21=3·7, 22 і 24 парні > 2."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Mistrz liczb (4/4)",
        ua: "🏆 Майстер чисел (4/4)"
      },
      parts: [
        {
          text: {
            pl: "Podaj **wszystkie** dzielniki liczby **16**.",
            ua: "Назви **усі** дільники числа **16**."
          }
        }
      ],
      task: {
        id: "m09-fin4",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz dzielniki 16:",
          ua: "Познач дільники 16:"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "4", label: { pl: "4", ua: "4" } },
          { id: "8", label: { pl: "8", ua: "8" } },
          { id: "16", label: { pl: "16", ua: "16" } }
        ],
        answer: ["1", "2", "4", "8", "16"],
        explanation: {
          pl: "Dzielniki 16: 1, 2, 4, 8, 16. (3 nie dzieli).",
          ua: "Дільники 16: 1, 2, 4, 8, 16. (3 не ділить)."
        }
      }
    },

    /* 28 — Koniec */
    {
      type: "summary",
      heading: {
        pl: "🏅 Brawo, detektywie!",
        ua: "🏅 Браво, детективе!"
      },
      parts: [
        {
          text: {
            pl: [
              "Dzisiaj odkryłeś tajemnicę liczb pierwszych i złożonych!",
              "Teraz już wiesz:"
            ],
            ua: [
              "Сьогодні ти відкрив таємницю простих і складених чисел!",
              "Тепер ти вже знаєш:"
            ]
          }
        },
        {
          visual: ph(
            "t09-medal.jpg",
            "Sowa z medalem",
            "Сова з медаллю",
            "Owl with medal"
          )
        },
        {
          items: [
            {
              pl: "🔹 pierwsza → dokładnie 2 dzielniki",
              ua: "🔹 просте → рівно 2 дільники"
            },
            {
              pl: "🔹 złożona → więcej niż 2 dzielniki",
              ua: "🔹 складене → більше ніж 2 дільники"
            },
            {
              pl: "🔹 1 → ani pierwsza, ani złożona",
              ua: "🔹 1 → ні просте, ні складене"
            },
            {
              pl: "🔹 2 → jedyna parzysta pierwsza",
              ua: "🔹 2 → єдине парне просте"
            }
          ]
        }
      ]
    },

    /* 29 — Review */
    {
      type: "review",
      heading: {
        pl: "🚀 Stwórz własną zagadkę!",
        ua: "🚀 Створи власну загадку!"
      },
      text: {
        pl: [
          "🦉 Sowa pyta: czy potrafisz wymyślić własną zagadkę o liczbie pierwszej?",
          "Wrócimy do czynników przy dzieleniu pisemnym i przy ułamkach.",
          "Następna misja: **dzielenie pisemne**."
        ],
        ua: [
          "🦉 Сова питає: чи вмієш придумати власну загадку про просте число?",
          "Множники ще зустрінуться в письменному діленні та в дробах.",
          "Наступна місія: **письмове ділення**."
        ]
      }
    }
  ]
};
