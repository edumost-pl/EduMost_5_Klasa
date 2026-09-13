function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Paragon nie lubi krzywej kolumny",
        ua: "Чек не любить кривої колонки"
      },
      formula: "3,40 + 1,25",
      text: {
        pl: [
          "Kasjerka nie dodaje „od lewej jak się da”.",
          "Przecinek musi stanąć pod przecinkiem — jak złotówki pod złotówkami, grosze pod groszami."
        ],
        ua: [
          "Касирка не додає «зліва як вийде».",
          "Кома має стати під комою — як злоті під злотими, гроші під грошами."
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
        { pl: "dodać i odjąć ułamki dziesiętne: przecinek pod przecinkiem", ua: "додати і відняти десяткові дроби: кома під комою" },
        { pl: "liczyć pieniądze w zł i gr", ua: "рахувати гроші в zł і gr" },
        { pl: "trzymać się krótkich zapisów (razem najwyżej 6 cyfr znaczących)", ua: "триматися коротких записів (разом щонайбільше 6 значущих цифр)" },
        { pl: "połączyć jednostki: 2,5 m − 80 cm", ua: "поєднати одиниці: 2,5 m − 80 cm" },
        { pl: "znaleźć, gdzie w błędzie „uciekł” przecinek", ua: "знайти, де в помилці «втекла» кома" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Te same cyfry, inny przecinek",
        ua: "Ті самі цифри, інша кома"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "3,4 + 1,25", result: "4,65", caption: "przecinek pod przecinkiem" },
        right: { expr: "34 + 125", result: "159", caption: "jakby nie było przecinków" }
      },
      prompt: {
        pl: [
          "Cyfry 3, 4, 1, 2, 5 te same. Wynik już nie.",
          "Różnica jest tylko w tym, które miejsca są dziesiątymi."
        ],
        ua: [
          "Цифри 3, 4, 1, 2, 5 ті самі. Результат уже ні.",
          "Різниця лише в тому, які місця є десятими."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Przecinek pod przecinkiem",
        ua: "Кома під комою"
      },
      formula: "3,25 + 1,4 = 4,65",
      text: {
        pl: [
          "Zapisujesz liczby tak, żeby przecinki tworzyły jedną pionową kreskę.",
          ["Jeśli brakuje cyfry, dopisz ", em("0"), ": 1,4 to 1,40."],
          "Potem dodajesz albo odejmujesz jak liczby naturalne — miejsce po miejscu."
        ],
        ua: [
          "Записуєш числа так, щоб коми утворили одну вертикальну риску.",
          ["Якщо бракує цифри, допиши ", em("0"), ": 1,4 це 1,40."],
          "Потім додаєш або віднімаєш як натуральні числа — місце за місцем."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Dodajmy 3,25 i 1,4",
        ua: "Додаймо 3,25 і 1,4"
      },
      reveal: true,
      steps: [
        { formula: "  3,25" },
        { formula: "+ 1,40" },
        {
          formula: "  4,65",
          text: {
            pl: ["Dopisaliśmy zero. Setne pod setnymi: 5 + 0 = 5. Dziesiąte: 2 + 4 = 6."],
            ua: ["Дописали нуль. Соті під сотими: 5 + 0 = 5. Десяті: 2 + 4 = 6."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Złotówki i grosze",
        ua: "Злоті і гроші"
      },
      reveal: true,
      steps: [
        {
          formula: "8,50 − 3,75",
          text: {
            pl: [em("8,50 zł"), " to 8 zł i 50 gr. Grosze to setne złotówki."],
            ua: [em("8,50 zł"), " — це 8 zł і 50 gr. Гроші — соті злотого."]
          }
        },
        { formula: "8,50 − 3,75 = 4,75" },
        {
          text: {
            pl: ["Zostało ", em("4,75 zł"), " — cztery złote i siedemdziesiąt pięć groszy."],
            ua: ["Залишилось ", em("4,75 zł"), " — чотири злоті і сімдесят п’ять грошів."]
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
        { pl: "składnik", ua: "доданок" },
        { pl: "suma", ua: "сума" },
        { pl: "odjemna, odjemnik, różnica", ua: "зменшуване, від’ємник, різниця" },
        { pl: "złoty, grosz", ua: "злотий, грош" }
      ],
      phrases: [
        { pl: "Dodaj pisemnie.", ua: "Додай письмово." },
        { pl: "Odejmij pisemnie.", ua: "Відніми письмово." },
        { pl: "Ustaw przecinek pod przecinkiem.", ua: "Постав кому під комою." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ustaw i dodaj",
        ua: "Постав і додай"
      },
      task: {
        id: "dod-dzies-guided-216-34",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("2,16 + 3,4"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("2,16 + 3,4"), ". Введи число, кому або крапку."]
        },
        answer: 5.56,
        hint: {
          pl: "3,4 zapisz jako 3,40. Potem 16 setnych + 40 setnych.",
          ua: "3,4 запиши як 3,40. Потім 16 сотих + 40 сотих."
        },
        explanation: {
          pl: "2,16 + 3,40 = 5,56.",
          ua: "2,16 + 3,40 = 5,56."
        },
        mistakes: [
          {
            answer: 5.2,
            feedback: {
              pl: "Dodałeś 2,16 + 3,04 albo pominąłeś setne. Ustaw 3,40.",
              ua: "Додав 2,16 + 3,04 або пропустив соті. Постав 3,40."
            }
          },
          {
            answer: 2.5,
            feedback: {
              pl: "To za mało. 2 + 3 = 5 całości, plus 0,16 + 0,40.",
              ua: "Це замало. 2 + 3 = 5 цілих, плюс 0,16 + 0,40."
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
        pl: "3,4 + 1,25 = 1,59",
        ua: "3,4 + 1,25 = 1,59"
      },
      text: {
        pl: [
          "Ktoś dodał 34 + 125 = 159 i wstawił przecinek po jedynce.",
          "Przecinki nie stały pod sobą. Poprawnie: 3,40 + 1,25 = 4,65."
        ],
        ua: [
          "Хтось додав 34 + 125 = 159 і поставив кому після одиниці.",
          "Коми не стояли одна під одною. Правильно: 3,40 + 1,25 = 4,65."
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
        id: "dod-dzies-sub-56-128",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("5,6 − 1,28"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("5,6 − 1,28"), ". Введи число, кому або крапку."]
        },
        answer: 4.32,
        hint: {
          pl: "5,6 to 5,60. Odejmuj setne od setnych.",
          ua: "5,6 це 5,60. Віднімай соті від сотих."
        },
        explanation: {
          pl: "5,60 − 1,28 = 4,32.",
          ua: "5,60 − 1,28 = 4,32."
        },
        mistakes: [
          {
            answer: 4.48,
            feedback: {
              pl: "Od 60 setnych odejmij 28, nie 12. 60 − 28 = 32 setne.",
              ua: "Від 60 сотих відніми 28, не 12. 60 − 28 = 32 сотих."
            }
          },
          {
            answer: 4.4,
            feedback: {
              pl: "Zostały jeszcze setne. 5,60 − 1,28 = 4,32.",
              ua: "Ще лишилися соті. 5,60 − 1,28 = 4,32."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Wydaj resztę",
        ua: "Дай решту"
      },
      task: {
        id: "dod-dzies-reszta",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Zakupy kosztują ", em("6,80 zł"), ". Płacisz ", em("10 zł"), ". Ile złotych reszty? Wpisz liczbę, przecinek lub kropka."],
          ua: ["Покупки коштують ", em("6,80 zł"), ". Платиш ", em("10 zł"), ". Скільки злотих решти? Введи число, кому або крапку."]
        },
        answer: 3.2,
        hint: {
          pl: "10,00 − 6,80. Grosze pod groszami.",
          ua: "10,00 − 6,80. Гроші під грошами."
        },
        explanation: {
          pl: "10,00 − 6,80 = 3,20 zł, czyli 3,2 zł.",
          ua: "10,00 − 6,80 = 3,20 zł, тобто 3,2 zł."
        },
        mistakes: [
          {
            answer: 4.2,
            feedback: {
              pl: "10 − 6 = 4, ale jeszcze grosze: 00 − 80, trzeba pożyczyć. Reszta 3,20.",
              ua: "10 − 6 = 4, але ще гроші: 00 − 80, треба позичити. Решта 3,20."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Paragon z piekarni",
        ua: "Чек з пекарні"
      },
      text: {
        pl: [
          ["Chleb ", em("4,20 zł"), ", bułka ", em("1,49 zł"), "."],
          "Ile zapłacisz za oba produkty?"
        ],
        ua: [
          ["Хліб ", em("4,20 zł"), ", булочка ", em("1,49 zł"), "."],
          "Скільки заплатиш за обидва продукти?"
        ]
      },
      task: {
        id: "dod-dzies-paragon",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("4,20 + 1,49"), ". Wpisz liczbę, przecinek lub kropka. To kwota w złotych."],
          ua: ["Обчисли ", em("4,20 + 1,49"), ". Введи число, кому або крапку. Це сума в злотих."]
        },
        answer: 5.69,
        hint: {
          pl: "Grosze: 20 + 49 = 69. Złotówki: 4 + 1 = 5.",
          ua: "Гроші: 20 + 49 = 69. Злоті: 4 + 1 = 5."
        },
        explanation: {
          pl: "4,20 + 1,49 = 5,69 zł.",
          ua: "4,20 + 1,49 = 5,69 zł."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Taśma w metrach i centymetrach",
        ua: "Стрічка в метрах і сантиметрах"
      },
      text: {
        pl: [
          ["Masz taśmę ", em("2,5 m"), ". Odcinasz ", em("80 cm"), "."],
          "Najpierw sprowadź do jednej jednostki, potem odejmij."
        ],
        ua: [
          ["Маєш стрічку ", em("2,5 m"), ". Відрізаєш ", em("80 cm"), "."],
          "Спочатку зведи до однієї одиниці, потім відніми."
        ]
      },
      task: {
        id: "dod-dzies-tasma",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile metrów taśmy zostanie? Wpisz liczbę, przecinek lub kropka. Bez jednostki."],
          ua: ["Скільки метрів стрічки залишиться? Введи число, кому або крапку. Без одиниці."]
        },
        answer: 1.7,
        hint: {
          pl: "80 cm = 0,80 m = 0,8 m. Potem 2,5 − 0,8.",
          ua: "80 cm = 0,80 m = 0,8 m. Потім 2,5 − 0,8."
        },
        explanation: {
          pl: "80 cm = 0,8 m. 2,5 − 0,8 = 1,7 m.",
          ua: "80 cm = 0,8 m. 2,5 − 0,8 = 1,7 m."
        },
        mistakes: [
          {
            answer: 2.42,
            feedback: {
              pl: "Nie odejmuj 80 od 2,5 jak 2,50 − 0,08. 80 cm to 0,80 m.",
              ua: "Не віднімай 80 від 2,5 як 2,50 − 0,08. 80 cm це 0,80 m."
            }
          },
          {
            answer: 170,
            feedback: {
              pl: "170 to centymetry. Pytanie prosi o metry: 1,7.",
              ua: "170 — це сантиметри. Питання просить метри: 1,7."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Gdzie uciekł przecinek?",
        ua: "Де втекла кома?"
      },
      text: {
        pl: [
          ["Kuba liczył ", em("3,4 + 1,25"), " i dostał ", em("1,59"), "."],
          "Wynik 4,65 byłby dobry. Co zrobił Kuba?"
        ],
        ua: [
          ["Куба рахував ", em("3,4 + 1,25"), " і отримав ", em("1,59"), "."],
          "Результат 4,65 був би добрий. Що зробив Куба?"
        ]
      },
      task: {
        id: "dod-dzies-przecinek-uciek",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który opis zgadza się z błędem 1,59?",
          ua: "Який опис збігається з помилкою 1,59?"
        },
        options: [
          { id: "a", label: { pl: "Odjął 3,4 − 1,25.", ua: "Відняв 3,4 − 1,25." } },
          { id: "b", label: { pl: "Dodał 34 + 125 = 159 i wstawił przecinek po pierwszej cyfrze.", ua: "Додав 34 + 125 = 159 і поставив кому після першої цифри." } },
          { id: "c", label: { pl: "Dodał tylko części całkowite: 3 + 1.", ua: "Додав лише цілі частини: 3 + 1." } }
        ],
        answer: "b",
        hint: {
          pl: "34 + 125 = 159. Przecinek „po jedynce” daje 1,59.",
          ua: "34 + 125 = 159. Кома «після одиниці» дає 1,59."
        },
        explanation: {
          pl: "Kuba zignorował miejsce przecinka, dodał jak liczby naturalne i wstawił przecinek w złym miejscu. 3,40 + 1,25 = 4,65.",
          ua: "Куба проігнорував місце коми, додав як натуральні числа і поставив кому не там. 3,40 + 1,25 = 4,65."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "3,40 − 1,25 = 2,15, nie 1,59.",
              ua: "3,40 − 1,25 = 2,15, не 1,59."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "3 + 1 = 4. Kuba dostał 1,59 — to cyfry 159 z przecinkiem.",
              ua: "3 + 1 = 4. Куба отримав 1,59 — це цифри 159 з комою."
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
        id: "dod-dzies-check-suma",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz ", em("1,7 + 2,15"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("1,7 + 2,15"), ". Введи число, кому або крапку."]
        },
        answer: 3.85,
        hint: {
          pl: "1,70 + 2,15.",
          ua: "1,70 + 2,15."
        },
        explanation: {
          pl: "1,70 + 2,15 = 3,85.",
          ua: "1,70 + 2,15 = 3,85."
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
        id: "dod-dzies-check-roznica",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz ", em("6,05 − 2,4"), ". Wpisz liczbę, przecinek lub kropka."],
          ua: ["Обчисли ", em("6,05 − 2,4"), ". Введи число, кому або крапку."]
        },
        answer: 3.65,
        hint: {
          pl: "2,4 to 2,40. 6,05 − 2,40.",
          ua: "2,4 це 2,40. 6,05 − 2,40."
        },
        explanation: {
          pl: "6,05 − 2,40 = 3,65.",
          ua: "6,05 − 2,40 = 3,65."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "przecinek pod przecinkiem",
      text: {
        pl: [
          "Ustawiasz przecinki w jednej kolumnie. Brakującą cyfrę zastępuje 0.",
          "Złote i grosze to całości i setne.",
          "Gdy jednostki różne — najpierw zamiana, potem działanie."
        ],
        ua: [
          "Ставиш коми в одну колонку. Брак цифри замінює 0.",
          "Злоті і гроші — це цілі і соті.",
          "Коли одиниці різні — спочатку перетворення, потім дія."
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
          "Następna lekcja: mnożenie. Przecinek już nie stoi w kolumnie — najpierw liczysz jak liczby naturalne."
        ],
        ua: [
          "Наступний урок: множення. Кома вже не стоїть у колонці — спочатку рахуєш як натуральні числа."
        ]
      }
    }
  ]
};
