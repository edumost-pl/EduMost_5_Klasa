function em(text) {
  return { text: text, emphasis: true };
}

/** Local image (./t08-….jpg). */
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
    /* ===== 1. Misja start ===== */
    {
      type: "intro",
      heading: {
        pl: "🕵️ MISJA: Podzielić sprawiedliwie!",
        ua: "🕵️ МІСІЯ: Поділити справедливо!"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Sowa EduMost ma skrzynkę cukierków… i problem!",
              "Mamy **12** cukierków.",
              "Są **4** osoby.",
              "Czy możemy podzielić cukierki tak, żeby każdy dostał tyle samo?"
            ],
            ua: [
              "🦉 Сова EduMost має скриньку цукерок… і проблему!",
              "Маємо **12** цукерок.",
              "Є **4** особи.",
              "Чи можемо поділити цукерки так, щоб кожен отримав порівну?"
            ]
          }
        },
        {
          visual: ph(
            "t08-mission.jpg",
            "Sowa i cukierki",
            "Сова і цукерки",
            "Owl with candy box and 4 children"
          )
        },
        {
          text: {
            pl: "Spójrz na obrazek i zdecyduj — to start misji!",
            ua: "Подивись на малюнок і виріши — це старт місії!"
          }
        }
      ],
      task: {
        id: "m08-start",
        type: "single-choice",
        level: "A",
        question: { pl: "Co odpowiesz Sowie?", ua: "Що відповіси Сові?" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "tak",
        hint: {
          pl: "Czy 12 dzieli się na 4 równe części?",
          ua: "Чи 12 ділиться на 4 рівні частини?"
        },
        explanation: {
          pl: "🎉 Brawo! Każdy dostanie 3 cukierki. 12 : 4 = 3",
          ua: "🎉 Браво! Кожен отримає 3 цукерки. 12 : 4 = 3"
        }
      }
    },

    /* ===== 2. Goal ===== */
    {
      type: "goal",
      heading: {
        pl: "🎯 Co będziesz umieć?",
        ua: "🎯 Що ти вмітимеш?"
      },
      items: [
        {
          pl: "dzielić na równe części i sprawdzać mnożeniem",
          ua: "ділити на рівні частини і перевіряти множенням"
        },
        {
          pl: "nazywać dzielną, dzielnik, iloraz i resztę",
          ua: "називати ділене, дільник, частку й остачу"
        },
        {
          pl: "zapisać dzielenie ze wzorem a = b · q + r",
          ua: "записати ділення формулою a = b · q + r"
        },
        {
          pl: "stosować cechy podzielności przez 2, 3, 4, 5, 9, 10, 100",
          ua: "застосовувати ознаки подільності на 2, 3, 4, 5, 9, 10, 100"
        },
        {
          pl: "znajdować dzielniki liczby i nie mylić ich z wielokrotnością",
          ua: "знаходити дільники числа і не плутати з кратним"
        }
      ]
    },

    /* ===== 3. Co to jest dzielenie ===== */
    {
      type: "concept",
      heading: {
        pl: "Dzielenie = równe części",
        ua: "Ділення = рівні частини"
      },
      parts: [
        {
          text: {
            pl: [
              "Sowa rozdziela cukierki.",
              "Dzielenie to układanie rzeczy w **równe grupy**."
            ],
            ua: [
              "Сова роздає цукерки.",
              "Ділення — це розкладання речей у **рівні групи**."
            ]
          }
        },
        {
          visual: ph(
            "t08-boxes.jpg",
            "4 pudełka po 3",
            "4 коробочки по 3",
            "12 candies in 4 boxes"
          )
        },
        { formula: "12 : 4 = 3" },
        {
          items: [
            {
              pl: ["**12** — wszystkie cukierki (dzielna)"],
              ua: ["**12** — усі цукерки (ділене)"]
            },
            {
              pl: ["**4** — równe części (dzielnik)"],
              ua: ["**4** — рівні частини (дільник)"]
            },
            {
              pl: ["**3** — w każdej części (iloraz)"],
              ua: ["**3** — у кожній частині (частка)"]
            }
          ]
        },
        {
          rule: {
            label: { pl: "🇺🇦 Pojaśnienie", ua: "🇺🇦 Пояснення" },
            text: {
              pl: "Dzielenie pomaga rozdzielić ilość na równe części.",
              ua: "Ділення допомагає розподілити кількість на рівні частини."
            }
          }
        }
      ]
    },

    /* ===== 4. Dzielenie ↔ mnożenie ===== */
    {
      type: "example",
      heading: {
        pl: "🔄 Dzielenie i mnożenie",
        ua: "🔄 Ділення і множення"
      },
      parts: [
        {
          text: {
            pl: [
              "Każde dzielenie możesz sprawdzić mnożeniem.",
              "Najpierw masz:"
            ],
            ua: [
              "Кожне ділення можна перевірити множенням.",
              "Спочатку маєш:"
            ]
          }
        },
        { formula: "12 : 3 = 4" },
        {
          text: {
            pl: "Naciśnij kolejny krok — jak przycisk SPRAWDŹ.",
            ua: "Натисни наступний крок — як кнопку ПЕРЕВІР."
          }
        }
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "🔄 Sprawdzenie:",
            ua: "🔄 Перевірка:"
          },
          formula: "3 · 4 = 12",
          visual: ph(
            "t08-groups.jpg",
            "3 grupy po 4",
            "3 групи по 4",
            "3 groups of 4"
          )
        },
        {
          text: {
            pl: "Dzielnik · iloraz = dzielna. To jak klucz i zamek!",
            ua: "Дільник · частка = ділене. Як ключ і замок!"
          }
        }
      ],
      task: {
        id: "m08-check-mul",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy 3 · 4 = 12 sprawdza 12 : 3 = 4?",
          ua: "Чи 3 · 4 = 12 перевіряє 12 : 3 = 4?"
        },
        answer: true,
        explanation: {
          pl: "Tak. Dzielnik · iloraz = dzielna.",
          ua: "Так. Дільник · частка = ділене."
        }
      }
    },

    /* ===== 5. Bohaterowie ===== */
    {
      type: "concept",
      heading: {
        pl: "🎭 Kto jest kim?",
        ua: "🎭 Хто є хто?"
      },
      parts: [
        {
          text: {
            pl: "W dzieleniu każda liczba ma rolę — jak aktorzy na scenie.",
            ua: "У діленні кожне число має роль — як актори на сцені."
          }
        },
        { formula: "24 : 6 = 4" },
        {
          items: [
            {
              pl: ["**24** — **dzielna** (co dzielimy)"],
              ua: ["**24** — **ділене** (що ділимо)"]
            },
            {
              pl: ["**6** — **dzielnik** (przez ile)"],
              ua: ["**6** — **дільник** (на скільки)"]
            },
            {
              pl: ["**4** — **iloraz** (wynik)"],
              ua: ["**4** — **частка** (результат)"]
            }
          ]
        },
        {
          rule: {
            label: { pl: "Zapamiętaj!", ua: "Запам'ятай!" },
            lines: {
              pl: "DZIELNA : DZIELNIK = ILORAZ",
              ua: "ДІЛЕНЕ : ДІЛЬНИК = ЧАСТКА"
            }
          }
        }
      ],
      task: {
        id: "m08-roles",
        type: "single-choice",
        level: "A",
        question: {
          pl: "W 24 : 6 = 4 **dzielnik** to:",
          ua: "У 24 : 6 = 4 **дільник** — це:"
        },
        options: [
          { id: "a", label: { pl: "24", ua: "24" } },
          { id: "b", label: { pl: "6", ua: "6" } },
          { id: "c", label: { pl: "4", ua: "4" } }
        ],
        answer: "b",
        explanation: {
          pl: "Dzielnik = liczba, przez którą dzielimy → **6**.",
          ua: "Дільник = число, на яке ділимо → **6**."
        }
      }
    },

    /* ===== 6. Mini-gra ===== */
    {
      type: "practice",
      heading: {
        pl: "🦉 Kto się schował?",
        ua: "🦉 Хто сховався?"
      },
      parts: [
        {
          text: {
            pl: [
              "Sowa-detektyw znalazła zagadkę.",
              "Iloraz się schował — odnajdź go!"
            ],
            ua: [
              "Сова-детектив знайшла загадку.",
              "Частка сховалася — знайди її!"
            ]
          }
        },
        { formula: "35 : 5 = ?" },
        {
          visual: ph(
            "t08-detective.jpg",
            "Sowa detektyw",
            "Сова-детектив",
            "Owl detective"
          )
        }
      ],
      task: {
        id: "m08-hide",
        type: "single-choice",
        level: "A",
        question: { pl: "35 : 5 = ?", ua: "35 : 5 = ?" },
        options: [
          { id: "a", label: { pl: "5", ua: "5" } },
          { id: "b", label: { pl: "6", ua: "6" } },
          { id: "c", label: { pl: "7", ua: "7" } },
          { id: "d", label: { pl: "8", ua: "8" } }
        ],
        answer: "c",
        explanation: {
          pl: "🎉 35 : 5 = 7. Świetnie!",
          ua: "🎉 35 : 5 = 7. Супер!"
        }
      }
    },

    /* ===== 7. Reszta (historia) ===== */
    {
      type: "observe",
      heading: {
        pl: "😲 O nie! Zostały cukierki!",
        ua: "😲 О ні! Залишились цукерки!"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie zawsze wychodzi równo.",
              "Sowa ma **17** cukierków i **5** dzieci."
            ],
            ua: [
              "Не завжди виходить порівну.",
              "У Сови **17** цукерок і **5** дітей."
            ]
          }
        },
        {
          visual: ph(
            "t08-remainder.jpg",
            "17 cukierków, 5 dzieci",
            "17 цукерок, 5 дітей",
            "Remainder story"
          )
        },
        {
          text: {
            pl: [
              "Każde dziecko dostaje po **3**.",
              "Na stole zostają **2**."
            ],
            ua: [
              "Кожна дитина отримує по **3**.",
              "На столі лишаються **2**."
            ]
          }
        },
        { formula: "17 : 5 = 3 r. 2" },
        {
          text: {
            pl: [["**r.** = ", em("reszta"), " — to właśnie te dwa cukierki."]],
            ua: [["**r.** = ", em("остача"), " — це якраз ті дві цукерки."]]
          }
        }
      ]
    },

    /* ===== 8. Wzór a = b·q + r ===== */
    {
      type: "concept",
      heading: {
        pl: "📐 Wzór z resztą",
        ua: "📐 Формула з остачею"
      },
      parts: [
        {
          text: {
            pl: [
              "Matematycy zapisują dzielenie z resztą jednym wzorem.",
              "Sowa pokazuje litery:"
            ],
            ua: [
              "Математики записують ділення з остачею однією формулою.",
              "Сова показує літери:"
            ]
          }
        },
        { formula: "a = b · q + r" },
        {
          items: [
            {
              pl: ["**a** — dzielna"],
              ua: ["**a** — ділене"]
            },
            {
              pl: ["**b** — dzielnik"],
              ua: ["**b** — дільник"]
            },
            {
              pl: ["**q** — iloraz całkowity"],
              ua: ["**q** — ціла частка"]
            },
            {
              pl: ["**r** — reszta"],
              ua: ["**r** — остача"]
            }
          ]
        },
        {
          text: {
            pl: "Dla cukierków: 17 = 5 · 3 + 2",
            ua: "Для цукерок: 17 = 5 · 3 + 2"
          }
        },
        {
          rule: {
            label: { pl: "⚠️ Ważne!", ua: "⚠️ Важливо!" },
            lines: {
              pl: "0 ≤ r < b",
              ua: "0 ≤ r < b"
            },
            text: {
              pl: "Reszta jest zawsze mniejsza od dzielnika (i nieujemna).",
              ua: "Остача завжди менша за дільник (і невід’ємна)."
            }
          }
        }
      ],
      task: {
        id: "m08-wzór",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Który zapis pasuje do 23 : 4 = 5 r. 3?",
          ua: "Який запис пасує до 23 : 4 = 5 r. 3?"
        },
        options: [
          { id: "a", label: { pl: "23 = 4 · 5 + 3", ua: "23 = 4 · 5 + 3" } },
          { id: "b", label: { pl: "23 = 4 · 3 + 5", ua: "23 = 4 · 3 + 5" } },
          { id: "c", label: { pl: "23 = 5 · 4 + 0", ua: "23 = 5 · 4 + 0" } }
        ],
        answer: "a",
        explanation: {
          pl: "a = b · q + r → 23 = 4 · 5 + 3.",
          ua: "a = b · q + r → 23 = 4 · 5 + 3."
        }
      }
    },

    /* ===== 9. Practice: zapisz z resztą ===== */
    {
      type: "practice",
      heading: {
        pl: "✍️ Zapisz z resztą",
        ua: "✍️ Запиши з остачею"
      },
      parts: [
        {
          text: {
            pl: [
              "Czas na ręce! Podziel i zapisz wynik jak w zeszycie.",
              "Przykład zapisu: **5 r. 3**"
            ],
            ua: [
              "Час для рук! Поділи й запиши результат як у зошиті.",
              "Зразок запису: **5 r. 3**"
            ]
          }
        },
        { formula: "29 : 5 = ?" }
      ],
      task: {
        id: "m08-reszta-input",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wpisz wynik 29 : 5 (np. 5 r. 4):",
          ua: "Впиши результат 29 : 5 (напр. 5 r. 4):"
        },
        answer: ["5 r. 4", "5r.4", "5 r 4", "5r 4"],
        hint: {
          pl: "5 · 5 = 25, zostaje 4, a 4 < 5.",
          ua: "5 · 5 = 25, лишається 4, а 4 < 5."
        },
        explanation: {
          pl: "29 = 5 · 5 + 4, więc 29 : 5 = **5 r. 4**.",
          ua: "29 = 5 · 5 + 4, тож 29 : 5 = **5 r. 4**."
        }
      }
    },

    /* ===== 10. Mistake ===== */
    {
      type: "mistake",
      heading: {
        pl: "🔎 Typowy błąd",
        ua: "🔎 Типова помилка"
      },
      claim: {
        pl: "Ktoś napisał: 23 : 4 = 4 r. 7",
        ua: "Хтось написав: 23 : 4 = 4 r. 7"
      },
      text: {
        pl: [
          "Reszta **7** jest większa od dzielnika **4**.",
          "To niemożliwe — moglibyśmy jeszcze raz wyjąć czwórkę.",
          "Poprawnie: 23 : 4 = **5 r. 3** (bo 23 = 4 · 5 + 3)."
        ],
        ua: [
          "Остача **7** більша за дільник **4**.",
          "Це неможливо — можна було б ще раз узяти четвірку.",
          "Правильно: 23 : 4 = **5 r. 3** (бо 23 = 4 · 5 + 3)."
        ]
      },
      task: {
        id: "m08-mistake",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy zapis 23 : 4 = 4 r. 7 jest możliwy?",
          ua: "Чи запис 23 : 4 = 4 r. 7 можливий?"
        },
        answer: false,
        explanation: {
          pl: "Nie. Zawsze: reszta < dzielnik.",
          ua: "Ні. Завжди: остача < дільник."
        }
      }
    },

    /* ===== 11. Podzielność ===== */
    {
      type: "concept",
      heading: {
        pl: "🔎 Podzielność",
        ua: "🔎 Подільність"
      },
      parts: [
        {
          text: {
            pl: [
              "Gdy po dzieleniu **nic nie zostaje** (r = 0), mówimy:",
              "liczba **jest podzielna** przez dzielnik."
            ],
            ua: [
              "Якщо після ділення **нічого не лишається** (r = 0), кажемо:",
              "число **ділиться** на дільник (podzielna)."
            ]
          }
        },
        { formula: "20 : 5 = 4" },
        {
          text: {
            pl: "🟢 Reszta 0 → 20 **dzieli się** przez 5.",
            ua: "🟢 Остача 0 → 20 **ділиться** на 5."
          }
        },
        { html: '<hr class="math-part-hr">' },
        { formula: "21 : 5 = 4 r. 1" },
        {
          text: {
            pl: "🔴 Jest reszta → 21 **nie dzieli się** przez 5.",
            ua: "🔴 Є остача → 21 **не ділиться** на 5."
          }
        }
      ]
    },

    /* ===== 12–14. TAK/NIE (3 zamiast 5) ===== */
    {
      type: "check",
      heading: {
        pl: "🎯 Podzielna czy nie? (1/3)",
        ua: "🎯 Ділиться чи ні? (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Szybka gra! Patrz na liczbę i wybierz TAK albo NIE.",
            ua: "Швидка гра! Дивись на число і обери ТАК або НІ."
          }
        },
        { formula: "36" },
        {
          text: {
            pl: "Czy **36** jest podzielne przez **2**?",
            ua: "Чи **36** ділиться на **2**?"
          }
        }
      ],
      task: {
        id: "m08-tn-36",
        type: "single-choice",
        level: "A",
        question: { pl: "Twoja decyzja:", ua: "Твоє рішення:" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "tak",
        explanation: {
          pl: "Tak. 36 : 2 = 18.",
          ua: "Так. 36 : 2 = 18."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🎯 Podzielna czy nie? (2/3)",
        ua: "🎯 Ділиться чи ні? (2/3)"
      },
      parts: [
        { formula: "41" },
        {
          text: {
            pl: "Czy **41** jest podzielne przez **2**?",
            ua: "Чи **41** ділиться на **2**?"
          }
        }
      ],
      task: {
        id: "m08-tn-41",
        type: "single-choice",
        level: "A",
        question: { pl: "Twoja decyzja:", ua: "Твоє рішення:" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "nie",
        explanation: {
          pl: "Nie. 41 : 2 = 20 r. 1.",
          ua: "Ні. 41 : 2 = 20 r. 1."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🎯 Podzielna czy nie? (3/3)",
        ua: "🎯 Ділиться чи ні? (3/3)"
      },
      parts: [
        { formula: "100" },
        {
          text: {
            pl: "Czy **100** jest podzielne przez **2**?",
            ua: "Чи **100** ділиться на **2**?"
          }
        }
      ],
      task: {
        id: "m08-tn-100",
        type: "single-choice",
        level: "A",
        question: { pl: "Twoja decyzja:", ua: "Твоє рішення:" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "tak",
        explanation: {
          pl: "Tak. Kończy się na 0.",
          ua: "Так. Закінчується на 0."
        }
      }
    },

    /* ===== 15. Sekret 2 ===== */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekret liczby 2",
        ua: "🔐 Секрет числа 2"
      },
      parts: [
        {
          text: {
            pl: [
              "Nie musisz dzielić całej liczby przez 2!",
              "Sprawdź tylko **ostatnią cyfrę**."
            ],
            ua: [
              "Не треба ділити все число на 2!",
              "Перевір лише **останню цифру**."
            ]
          }
        },
        {
          visual: ph(
            "t08-even.jpg",
            "Parzyste końcówki",
            "Парні закінчення",
            "Even endings"
          )
        },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            lines: {
              pl: "0, 2, 4, 6, 8 → podzielna przez 2",
              ua: "0, 2, 4, 6, 8 → ділиться на 2"
            }
          }
        }
      ]
    },

    /* ===== 16. Detektyw 2 ===== */
    {
      type: "practice",
      heading: {
        pl: "🕵️ Detektyw podzielności (przez 2)",
        ua: "🕵️ Детектив подільності (на 2)"
      },
      parts: [
        {
          text: {
            pl: "Znajdź **wszystkie** liczby podzielne przez **2**. Patrz na ostatnią cyfrę!",
            ua: "Знайди **усі** числа, що діляться на **2**. Дивись на останню цифру!"
          }
        },
        {
          visual: ph(
            "t08-cards.jpg",
            "Karty liczb",
            "Картки чисел",
            "Number cards"
          )
        }
      ],
      task: {
        id: "m08-det2",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz liczby podzielne przez 2:",
          ua: "Познач числа, що діляться на 2:"
        },
        options: [
          { id: "a", label: { pl: "27", ua: "27" } },
          { id: "b", label: { pl: "48", ua: "48" } },
          { id: "c", label: { pl: "53", ua: "53" } },
          { id: "d", label: { pl: "72", ua: "72" } },
          { id: "e", label: { pl: "91", ua: "91" } },
          { id: "f", label: { pl: "106", ua: "106" } }
        ],
        answer: ["b", "d", "f"],
        explanation: {
          pl: "Podzielne: 48, 72, 106.",
          ua: "Діляться: 48, 72, 106."
        }
      }
    },

    /* ===== 17. Sekret 5 i 10 ===== */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekrety 5 i 10",
        ua: "🔐 Секрети 5 і 10"
      },
      parts: [
        {
          text: {
            pl: "Dwa sekrety prawie bliźniaki — obie patrzą na koniec liczby.",
            ua: "Два секрети майже близнюки — обидва дивляться на кінець числа."
          }
        },
        {
          visual: ph(
            "t08-fives.jpg",
            "Końcówki 0 i 5",
            "Закінчення 0 і 5",
            "Endings 0 or 5"
          )
        },
        {
          rule: {
            label: { pl: "Przez 5", ua: "На 5" },
            text: {
              pl: "Kończy się na **0** lub **5** → dzieli się przez 5.",
              ua: "Закінчується на **0** або **5** → ділиться на 5."
            }
          }
        },
        {
          rule: {
            label: { pl: "Przez 10", ua: "На 10" },
            text: {
              pl: "Kończy się na **0** → dzieli się przez 10.",
              ua: "Закінчується на **0** → ділиться на 10."
            }
          }
        }
      ],
      task: {
        id: "m08-c5-10",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która liczba dzieli się przez **10**?",
          ua: "Яке число ділиться на **10**?"
        },
        options: [
          { id: "a", label: { pl: "45", ua: "45" } },
          { id: "b", label: { pl: "70", ua: "70" } },
          { id: "c", label: { pl: "33", ua: "33" } }
        ],
        answer: "b",
        explanation: {
          pl: "70 kończy się na 0.",
          ua: "70 закінчується на 0."
        }
      }
    },

    /* ===== 18. Sekret 3 ===== */
    {
      type: "concept",
      heading: {
        pl: "🤯 Sekret liczby 3 — dodawanie!",
        ua: "🤯 Секрет числа 3 — додавання!"
      },
      parts: [
        {
          text: {
            pl: [
              "Dla **3** nie patrzysz na ostatnią cyfrę — **dodajesz cyfry**."
            ],
            ua: [
              "Для **3** не дивишся на останню цифру — **додаєш цифри**."
            ]
          }
        },
        { formula: "123" },
        { formula: "1 + 2 + 3 = 6" },
        { formula: "6 : 3 = 2" },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Jeśli suma cyfr dzieli się przez 3, cała liczba też.",
              ua: "Якщо сума цифр ділиться на 3, то й саме число теж."
            }
          }
        }
      ],
      task: {
        id: "m08-c3",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy 123 jest podzielne przez 3?",
          ua: "Чи 123 ділиться на 3?"
        },
        answer: true,
        explanation: {
          pl: "Tak. 1+2+3=6, a 6 dzieli się przez 3.",
          ua: "Так. 1+2+3=6, а 6 ділиться на 3."
        }
      }
    },

    /* ===== 19. Sekret 4 ===== */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekret liczby 4",
        ua: "🔐 Секрет числа 4"
      },
      parts: [
        {
          text: {
            pl: [
              "Dla **4** patrzysz na **dwie ostatnie cyfry**.",
              "Jeśli ta dwucyfrowa liczba dzieli się przez 4 — cała też."
            ],
            ua: [
              "Для **4** дивишся на **дві останні цифри**.",
              "Якщо це двоцифрове число ділиться на 4 — то й усе число теж."
            ]
          }
        },
        {
          text: {
            pl: "Przykład: **132**. Dwie ostatnie: **32**. 32 : 4 = 8 → 132 dzieli się przez 4.",
            ua: "Приклад: **132**. Дві останні: **32**. 32 : 4 = 8 → 132 ділиться на 4."
          }
        },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Liczba z dwóch ostatnich cyfr podzielna przez 4 → cała liczba też.",
              ua: "Число з двох останніх цифр ділиться на 4 → і все число теж."
            }
          }
        }
      ],
      task: {
        id: "m08-c4",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która liczba dzieli się przez 4? (sprawdź dwie ostatnie cyfry)",
          ua: "Яке число ділиться на 4? (перевір дві останні цифри)"
        },
        options: [
          { id: "a", label: { pl: "122 (końcówka 22)", ua: "122 (закінчення 22)" } },
          { id: "b", label: { pl: "128 (końcówka 28)", ua: "128 (закінчення 28)" } },
          { id: "c", label: { pl: "130 (końcówka 30)", ua: "130 (закінчення 30)" } }
        ],
        answer: "b",
        explanation: {
          pl: "28 : 4 = 7, więc 128 dzieli się przez 4.",
          ua: "28 : 4 = 7, тож 128 ділиться на 4."
        }
      }
    },

    /* ===== 20. Sekret 9 ===== */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekret liczby 9",
        ua: "🔐 Секрет числа 9"
      },
      parts: [
        {
          text: {
            pl: [
              "Sekret **9** jest kuzynem sekretu **3**.",
              "Znowu dodajesz cyfry — ale suma musi dzielić się przez **9**."
            ],
            ua: [
              "Секрет **9** — родич секрету **3**.",
              "Знову додаєш цифри — але сума має ділитися на **9**."
            ]
          }
        },
        { formula: "27" },
        { formula: "2 + 7 = 9" },
        { formula: "9 : 9 = 1" },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Suma cyfr podzielna przez 9 → liczba podzielna przez 9.",
              ua: "Сума цифр ділиться на 9 → число ділиться на 9."
            }
          }
        }
      ],
      task: {
        id: "m08-c9",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy 45 jest podzielne przez 9? (4+5=9)",
          ua: "Чи 45 ділиться на 9? (4+5=9)"
        },
        answer: true,
        explanation: {
          pl: "Tak. Suma cyfr = 9, a 9 dzieli się przez 9.",
          ua: "Так. Сума цифр = 9, а 9 ділиться на 9."
        }
      }
    },

    /* ===== 21. Sekret 100 ===== */
    {
      type: "concept",
      heading: {
        pl: "🔐 Sekret liczby 100",
        ua: "🔐 Секрет числа 100"
      },
      parts: [
        {
          text: {
            pl: [
              "Najłatwiejszy sekret na koniec tej listy!",
              "Liczba dzieli się przez **100**, gdy kończy się na **00**."
            ],
            ua: [
              "Найлегший секрет на кінець цього списку!",
              "Число ділиться на **100**, коли закінчується на **00**."
            ]
          }
        },
        {
          items: [
            {
              pl: ["**300** → TAK (końcówka 00)"],
              ua: ["**300** → ТАК (закінчення 00)"]
            },
            {
              pl: ["**310** → NIE (końcówka 10)"],
              ua: ["**310** → НІ (закінчення 10)"]
            },
            {
              pl: ["**1200** → TAK"],
              ua: ["**1200** → ТАК"]
            }
          ]
        },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "Końcówka **00** → podzielna przez 100.",
              ua: "Закінчення **00** → ділиться на 100."
            }
          }
        }
      ],
      task: {
        id: "m08-c100",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która liczba dzieli się przez 100?",
          ua: "Яке число ділиться на 100?"
        },
        options: [
          { id: "a", label: { pl: "250", ua: "250" } },
          { id: "b", label: { pl: "400", ua: "400" } },
          { id: "c", label: { pl: "1010", ua: "1010" } }
        ],
        answer: "b",
        explanation: {
          pl: "400 kończy się na 00.",
          ua: "400 закінчується на 00."
        }
      }
    },

    /* ===== 22. LOGIKA — obowiązkowa ===== */
    {
      type: "challenge",
      heading: {
        pl: "🕵️ Tajemnicza liczba",
        ua: "🕵️ Таємниче число"
      },
      parts: [
        {
          text: {
            pl: [
              "🦉 Sowa prowadzi śledztwo. Posłuchaj wskazówek:",
              "Mam liczbę.",
              "Jest większa od **20**.",
              "Jest mniejsza od **40**.",
              "Dzieli się przez **2**.",
              "Dzieli się przez **5**."
            ],
            ua: [
              "🦉 Сова веде слідство. Послухай підказки:",
              "Маю число.",
              "Воно більше за **20**.",
              "Воно менше за **40**.",
              "Ділиться на **2**.",
              "Ділиться на **5**."
            ]
          }
        },
        {
          visual: ph(
            "t08-scale.jpg",
            "Skala 20–40",
            "Шкала 20–40",
            "Number line 20–40"
          )
        },
        {
          text: {
            pl: [
              "Na skali widać liczby od 20 do 40.",
              "Która pasuje do **wszystkich** wskazówek?",
              "Jaka to liczba?"
            ],
            ua: [
              "На шкалі видно числа від 20 до 40.",
              "Яке пасує до **усіх** підказок?",
              "Яке це число?"
            ]
          }
        }
      ],
      task: {
        id: "m08-logic",
        type: "input-number",
        level: "C",
        question: {
          pl: "Wpisz tajemniczą liczbę:",
          ua: "Впиши таємниче число:"
        },
        answer: 30,
        hint: {
          pl: "Szukaj liczby kończącej się na 0 między 21 a 39.",
          ua: "Шукай число, що закінчується на 0, між 21 і 39."
        },
        explanation: {
          pl: "⭐ To **30**. Brawo! Rozwiązałeś matematyczne śledztwo!",
          ua: "⭐ Це **30**. Браво! Ти розкрив математичне слідство!"
        }
      }
    },

    /* ===== 23. Dzielniki ===== */
    {
      type: "practice",
      heading: {
        pl: "🏠 Dom liczby 12",
        ua: "🏠 Дім числа 12"
      },
      parts: [
        {
          text: {
            pl: [
              "**Dzielnik** liczby to liczba, która dzieli ją **bez reszty**.",
              "Do domu **12** wchodzą tylko dzielniki."
            ],
            ua: [
              "**Дільник** числа — це число, яке ділить його **без остачі**.",
              "У дім **12** входять лише дільники."
            ]
          }
        },
        {
          visual: ph(
            "t08-house.jpg",
            "Dom liczby 12",
            "Дім числа 12",
            "House of 12"
          )
        },
        {
          text: {
            pl: "Kandydaci: 1, 2, 3, 4, 5, 6, 7, 8, 12.",
            ua: "Кандидати: 1, 2, 3, 4, 5, 6, 7, 8, 12."
          }
        }
      ],
      task: {
        id: "m08-dom12",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz wszystkie dzielniki liczby 12:",
          ua: "Познач усі дільники числа 12:"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "4", label: { pl: "4", ua: "4" } },
          { id: "5", label: { pl: "5", ua: "5" } },
          { id: "6", label: { pl: "6", ua: "6" } },
          { id: "7", label: { pl: "7", ua: "7" } },
          { id: "8", label: { pl: "8", ua: "8" } },
          { id: "12", label: { pl: "12", ua: "12" } }
        ],
        answer: ["1", "2", "3", "4", "6", "12"],
        explanation: {
          pl: "Dzielniki: 1, 2, 3, 4, 6, 12.",
          ua: "Дільники: 1, 2, 3, 4, 6, 12."
        }
      }
    },

    /* ===== 24. Dzielnik vs wielokrotność ===== */
    {
      type: "concept",
      heading: {
        pl: "⚠️ Dzielnik czy wielokrotność?",
        ua: "⚠️ Дільник чи кратне?"
      },
      parts: [
        {
          text: {
            pl: "Dwa słowa, które łatwo pomylić. Patrz na kierunek:",
            ua: "Два слова, які легко сплутати. Дивись на напрямок:"
          }
        },
        { formula: "12 → 24" },
        { formula: "12 · 2 = 24" },
        {
          rule: {
            label: { pl: "Reguła", ua: "Правило" },
            text: {
              pl: "**Dzielnik** → dzielimy. **Wielokrotność** → mnożymy.",
              ua: "**Дільник** → ділимо. **Кратне** → множимо."
            }
          }
        }
      ],
      task: {
        id: "m08-dw",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy 12 jest dzielnikiem 24, a 24 wielokrotnością 12?",
          ua: "Чи 12 є дільником 24, а 24 — кратним до 12?"
        },
        answer: true,
        explanation: {
          pl: "Tak. 24 : 12 = 2 oraz 12 · 2 = 24.",
          ua: "Так. 24 : 12 = 2 і 12 · 2 = 24."
        }
      }
    },

    /* ===== 25. Vocabulary ===== */
    {
      type: "vocabulary",
      heading: {
        pl: "📚 Słówka misji",
        ua: "📚 Слова місії"
      },
      rows: [
        { pl: "dzielenie", ua: "ділення" },
        { pl: "dzielna", ua: "ділене" },
        { pl: "dzielnik", ua: "дільник" },
        { pl: "iloraz", ua: "частка" },
        { pl: "reszta", ua: "остача" },
        { pl: "podzielność / podzielna", ua: "подільність / ділиться" },
        { pl: "cecha podzielności", ua: "ознака подільності" },
        { pl: "wielokrotność", ua: "кратне" }
      ]
    },

    /* ===== 26–28. Finał (3 zamiast 5) ===== */
    {
      type: "check",
      heading: {
        pl: "🏆 Misja mistrza (1/3)",
        ua: "🏆 Місія майстра (1/3)"
      },
      parts: [
        {
          text: {
            pl: "Finał! Trzy zadania — pokaż sekrety podzielności.",
            ua: "Фінал! Три питання — покажи секрети подільності."
          }
        },
        {
          text: {
            pl: "Czy **75** jest podzielne przez **5**?",
            ua: "Чи **75** ділиться на **5**?"
          }
        }
      ],
      task: {
        id: "m08-fin1",
        type: "single-choice",
        level: "B",
        question: { pl: "75 ÷ 5", ua: "75 ÷ 5" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "tak",
        explanation: {
          pl: "Tak — kończy się na 5.",
          ua: "Так — закінчується на 5."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja mistrza (2/3)",
        ua: "🏆 Місія майстра (2/3)"
      },
      parts: [
        {
          text: {
            pl: "Czy **123** jest podzielne przez **3**? (dodaj cyfry)",
            ua: "Чи **123** ділиться на **3**? (додай цифри)"
          }
        }
      ],
      task: {
        id: "m08-fin2",
        type: "single-choice",
        level: "B",
        question: { pl: "123 ÷ 3", ua: "123 ÷ 3" },
        options: [
          { id: "tak", label: { pl: "🟢 TAK", ua: "🟢 ТАК" } },
          { id: "nie", label: { pl: "🔴 NIE", ua: "🔴 НІ" } }
        ],
        answer: "tak",
        explanation: {
          pl: "1+2+3=6, a 6 dzieli się przez 3.",
          ua: "1+2+3=6, а 6 ділиться на 3."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "🏆 Misja mistrza (3/3)",
        ua: "🏆 Місія майстра (3/3)"
      },
      parts: [
        {
          text: {
            pl: "Podaj **wszystkie** dzielniki liczby **10**.",
            ua: "Назви **усі** дільники числа **10**."
          }
        }
      ],
      task: {
        id: "m08-fin3",
        type: "multiple-choice",
        level: "B",
        question: {
          pl: "Zaznacz dzielniki liczby 10:",
          ua: "Познач дільники числа 10:"
        },
        options: [
          { id: "1", label: { pl: "1", ua: "1" } },
          { id: "2", label: { pl: "2", ua: "2" } },
          { id: "3", label: { pl: "3", ua: "3" } },
          { id: "5", label: { pl: "5", ua: "5" } },
          { id: "10", label: { pl: "10", ua: "10" } }
        ],
        answer: ["1", "2", "5", "10"],
        explanation: {
          pl: "Dzielniki 10: 1, 2, 5, 10.",
          ua: "Дільники 10: 1, 2, 5, 10."
        }
      }
    },

    /* ===== 29. Summary ===== */
    {
      type: "summary",
      heading: {
        pl: "🏅 Misja ukończona!",
        ua: "🏅 Місію завершено!"
      },
      parts: [
        {
          text: {
            pl: [
              "Dzisiaj odkryłeś sekrety dzielenia.",
              "Nie zawsze trzeba długo rachować — czasem wystarczy **zauważyć regułę**."
            ],
            ua: [
              "Сьогодні ти відкрив секрети ділення.",
              "Не завжди треба довго рахувати — інколи достатньо **помітити правило**."
            ]
          }
        },
        {
          visual: ph(
            "t08-medal.jpg",
            "Sowa z medalem",
            "Сова з медаллю",
            "Owl with medal"
          )
        },
        {
          text: {
            pl: em("Potrafisz już:"),
            ua: em("Ти вже вмієш:")
          }
        },
        {
          items: [
            { pl: "✅ dzielić i sprawdzać mnożeniem", ua: "✅ ділити і перевіряти множенням" },
            { pl: "✅ zapisać a = b · q + r", ua: "✅ записати a = b · q + r" },
            { pl: "✅ odrzucić za dużą resztę", ua: "✅ відкинути завелику остачу" },
            {
              pl: "✅ cechy 2, 3, 4, 5, 9, 10, 100",
              ua: "✅ ознаки 2, 3, 4, 5, 9, 10, 100"
            },
            { pl: "✅ znajdować dzielniki", ua: "✅ знаходити дільники" }
          ]
        }
      ]
    },

    /* ===== 30. Review ===== */
    {
      type: "review",
      heading: {
        pl: "🚀 Co dalej?",
        ua: "🚀 Що далі?"
      },
      text: {
        pl: [
          "Wrócimy do dzielenia przy **dzieleniu pisemnym** i przy ułamkach.",
          "Ćwicz cechy podzielności — wtedy rachunki lecą szybciej!",
          "Następny trop Sowy: liczby pierwsze i złożone."
        ],
        ua: [
          "Ділення ще зустрінеться в **письменному діленні** та в дробах.",
          "Тренуй ознаки подільності — тоді обчислення летять швидше!",
          "Наступний слід Сови: прості і складені числа."
        ]
      }
    }
  ]
};
