function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Liczby, których nie piszemy cyframi 1, 2, 3…",
        ua: "Числа, яких не пишемо цифрами 1, 2, 3…"
      },
      formula: "M C M L XX XIV",
      text: {
        pl: [
          "Na zegarze, na pomniku i w dacie filmu bywa inny alfabet liczb.",
          "To cyfry rzymskie. Dziś nauczymy się je czytać i zapisywać — bez zgadywania."
        ],
        ua: [
          "На годиннику, на пам’ятнику і в даті фільму інколи інший алфавіт чисел.",
          "Це римські цифри. Сьогодні навчимося їх читати і записувати — без вгадування."
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
        { pl: "rozpoznać znaki I, V, X, L, C, D, M", ua: "розпізнати знаки I, V, X, L, C, D, M" },
        { pl: "odczytać liczbę rzymską do 3000", ua: "прочитати римське число до 3000" },
        { pl: "zapisać liczbę arabską cyframi rzymskimi", ua: "записати арабське число римськими цифрами" },
        { pl: "stosować odejmowanie: IV, IX, XL, XC, CD, CM", ua: "застосовувати віднімання: IV, IX, XL, XC, CD, CM" },
        { pl: "odrzucić zapis, który jest niemożliwy", ua: "відкинути запис, який неможливий" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Siedem znaków",
        ua: "Сім знаків"
      },
      text: {
        pl: [
          "Rzymianie nie mieli cyfry 0. Mieli siedem liter.",
          "Popatrz, ile każda jest warta — jeszcze nic nie składaj."
        ],
        ua: [
          "Римляни не мали цифри 0. Мали сім літер.",
          "Подивись, скільки кожна варта — ще нічого не складай."
        ]
      },
      items: [
        { pl: "I = 1", ua: "I = 1" },
        { pl: "V = 5", ua: "V = 5" },
        { pl: "X = 10", ua: "X = 10" },
        { pl: "L = 50", ua: "L = 50" },
        { pl: "C = 100", ua: "C = 100" },
        { pl: "D = 500", ua: "D = 500" },
        { pl: "M = 1000", ua: "M = 1000" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Gdy większy stoi z lewej — dodajemy",
        ua: "Коли більший стоїть зліва — додаємо"
      },
      formula: "VI = 5 + 1 = 6",
      text: {
        pl: [
          "Idziemy od lewej. Jeśli znak jest większy albo równy następnemu — dodajemy jego wartość.",
          ["Dlatego ", em("III"), " to ", em("3"), ", a ", em("XX"), " to ", em("20"), "."],
          ["Ten sam znak można powtórzyć najwyżej ", em("trzy"), " razy: III, XXX, CCC, MMM."]
        ],
        ua: [
          "Йдемо зліва. Якщо знак більший або рівний наступному — додаємо його значення.",
          ["Тому ", em("III"), " це ", em("3"), ", а ", em("XX"), " це ", em("20"), "."],
          ["Той самий знак можна повторити щонайбільше ", em("три"), " рази: III, XXX, CCC, MMM."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak odczytać XII?",
        ua: "Як прочитати XII?"
      },
      reveal: true,
      steps: [
        { formula: "XII" },
        { formula: "X + I + I" },
        { formula: "10 + 1 + 1" },
        {
          formula: "12",
          text: {
            pl: ["Każdy znak jest nie większy od tego z prawej albo równy. Więc dodajemy.", [em("XII"), " = ", em("12"), "."]],
            ua: ["Кожен знак не більший за той справа або рівний. Отже додаємо.", [em("XII"), " = ", em("12"), "."]]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Gdy mniejszy stoi przed większym — odejmujemy",
        ua: "Коли менший стоїть перед більшим — віднімаємо"
      },
      formula: "IV = 5 − 1 = 4",
      text: {
        pl: [
          ["Nie piszemy ", em("IIII"), ". Mniejszy znak przed większym znaczy: odejmij."],
          ["Wolno tylko pary: ", em("IV, IX, XL, XC, CD, CM"), "."],
          "I tylko przed V i X, X tylko przed L i C, C tylko przed D i M."
        ],
        ua: [
          ["Не пишемо ", em("IIII"), ". Менший знак перед більшим означає: відніми."],
          ["Можна лише пари: ", em("IV, IX, XL, XC, CD, CM"), "."],
          "I лише перед V і X, X лише перед L і C, C лише перед D і M."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak zapisać 9 i 40?",
        ua: "Як записати 9 і 40?"
      },
      reveal: true,
      steps: [
        {
          formula: "9 = IX",
          text: {
            pl: ["I przed X: ", em("10 − 1 = 9"), "."],
            ua: ["I перед X: ", em("10 − 1 = 9"), "."]
          }
        },
        {
          formula: "40 = XL",
          text: {
            pl: ["X przed L: ", em("50 − 10 = 40"), "."],
            ua: ["X перед L: ", em("50 − 10 = 40"), "."]
          }
        }
      ]
    },
    {
      type: "example",
      heading: {
        pl: "Złóżmy większą liczbę: 1984",
        ua: "Зберімо більше число: 1984"
      },
      reveal: true,
      steps: [
        { formula: "1984 = 1000 + 900 + 80 + 4" },
        { formula: "M + CM + LXXX + IV" },
        {
          formula: "MCMLXXXIV",
          text: {
            pl: ["Tysiące, potem setki, dziesiątki, jedności. ", em("CM"), " to 900, ", em("IV"), " to 4."],
            ua: ["Тисячі, потім сотні, десятки, одиниці. ", em("CM"), " це 900, ", em("IV"), " це 4."]
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
        { pl: "cyfry rzymskie", ua: "римські цифри" },
        { pl: "cyfry arabskie", ua: "арабські цифри" },
        { pl: "znak", ua: "знак" },
        { pl: "wartość", ua: "значення" }
      ],
      phrases: [
        { pl: "Zapisz liczbę cyframi rzymskimi.", ua: "Запиши число римськими цифрами." },
        { pl: "Odczytaj liczbę.", ua: "Прочитай число." },
        { pl: "Który zapis jest niemożliwy?", ua: "Який запис неможливий?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Odczytaj",
        ua: "Прочитай"
      },
      task: {
        id: "rzym-guided-14",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Odczytaj: ", em("XIV"), ". Wpisz tylko liczbę arabską."],
          ua: ["Прочитай: ", em("XIV"), ". Введи лише арабське число."]
        },
        answer: 14,
        hint: {
          pl: "X = 10. IV to 5 − 1, nie 1 + 5.",
          ua: "X = 10. IV це 5 − 1, не 1 + 5."
        },
        explanation: {
          pl: "X = 10, IV = 4, razem 14.",
          ua: "X = 10, IV = 4, разом 14."
        },
        mistakes: [
          {
            answer: 16,
            feedback: {
              pl: "To byłoby XVI. IV odejmuje, nie dodaje.",
              ua: "Так було б XVI. IV віднімає, не додає."
            }
          },
          {
            answer: 15,
            feedback: {
              pl: "XV to 15. Tu jest XIV — jedynka przed piątką.",
              ua: "XV це 15. Тут XIV — одиниця перед п’ятіркою."
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
        pl: "4 = IIII",
        ua: "4 = IIII"
      },
      text: {
        pl: [
          "Znak I wolno powtórzyć trzy razy, nie cztery.",
          ["Czwórkę zapisujemy ", em("IV"), ": 5 − 1."]
        ],
        ua: [
          "Знак I можна повторити тричі, не чотири рази.",
          ["Четвірку записуємо ", em("IV"), ": 5 − 1."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Zapisz czwórkę",
        ua: "Запиши четвірку"
      },
      task: {
        id: "rzym-write-4",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Zapisz cyframi rzymskimi: ", em("4"), ". Wpisz litery, na przykład ", em("XII"), "."],
          ua: ["Запиши римськими цифрами: ", em("4"), ". Введи літери, наприклад ", em("XII"), "."]
        },
        answer: ["IV", "iv"],
        hint: {
          pl: "Nie powtarzaj I cztery razy. Skorzystaj z V.",
          ua: "Не повторюй I чотири рази. Скористайся V."
        },
        explanation: {
          pl: "4 = IV.",
          ua: "4 = IV."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Osiemdziesiąt dziewięć",
        ua: "Вісімдесят дев’ять"
      },
      task: {
        id: "rzym-write-89",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Zapisz cyframi rzymskimi: ", em("89"), ". Wpisz litery, na przykład ", em("XII"), "."],
          ua: ["Запиши римськими цифрами: ", em("89"), ". Введи літери, наприклад ", em("XII"), "."]
        },
        answer: ["LXXXIX", "lxxxix"],
        hint: {
          pl: "50 + 30 + 9. Dziewiątka to IX, nie VIIII.",
          ua: "50 + 30 + 9. Дев’ятка — це IX, не VIIII."
        },
        explanation: {
          pl: "L = 50, XXX = 30, IX = 9 → LXXXIX.",
          ua: "L = 50, XXX = 30, IX = 9 → LXXXIX."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Rok na budynku szkoły",
        ua: "Рік на будівлі школи"
      },
      text: {
        pl: [
          ["Nad wejściem ktoś wykuł ", em("MMXV"), "."],
          "W którym roku oddano szkołę?"
        ],
        ua: [
          ["Над входом викарбувано ", em("MMXV"), "."],
          "В якому році здали школу?"
        ]
      },
      task: {
        id: "rzym-school-year",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Odczytaj ", em("MMXV"), ". Wpisz rok liczbą arabską."],
          ua: ["Прочитай ", em("MMXV"), ". Введи рік арабським числом."]
        },
        answer: 2015,
        hint: {
          pl: "M to 1000. Dwa M, potem XV.",
          ua: "M це 1000. Два M, потім XV."
        },
        explanation: {
          pl: "MM = 2000, XV = 15, razem 2015.",
          ua: "MM = 2000, XV = 15, разом 2015."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Który zapis jest niemożliwy?",
        ua: "Який запис неможливий?"
      },
      text: {
        pl: [
          "Nie licz wartości. Najpierw sprawdź zasady: powtórzenia i odejmowanie."
        ],
        ua: [
          "Не рахуй значення. Спочатку перевір правила: повторення і віднімання."
        ]
      },
      task: {
        id: "rzym-impossible",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zapis łamie zasady cyfr rzymskich?",
          ua: "Який запис ламає правила римських цифр?"
        },
        options: [
          { id: "a", label: { pl: "XXXIX", ua: "XXXIX" } },
          { id: "b", label: { pl: "IC", ua: "IC" } },
          { id: "c", label: { pl: "XLIV", ua: "XLIV" } }
        ],
        answer: "b",
        hint: {
          pl: "I odejmujemy tylko od V i X, nigdy od C.",
          ua: "I віднімаємо лише від V і X, ніколи від C."
        },
        explanation: {
          pl: "IC byłoby 99, ale tak nie wolno. 99 to XCIX. I stoi tylko przed V albo X.",
          ua: "IC було б 99, але так не можна. 99 це XCIX. I стоїть лише перед V або X."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "XXXIX = 39. Trzy X i IX — to poprawne.",
              ua: "XXXIX = 39. Три X і IX — це правильно."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "XLIV = 44. XL i IV — obie pary są dozwolone.",
              ua: "XLIV = 44. XL і IV — обидві пари дозволені."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Odczyt",
        ua: "Чи вже вмію? Читання"
      },
      task: {
        id: "rzym-check-27",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Odczytaj: ", em("XXVII"), ". Wpisz liczbę arabską."],
          ua: ["Прочитай: ", em("XXVII"), ". Введи арабське число."]
        },
        answer: 27,
        hint: {
          pl: "XX = 20, VII = 7.",
          ua: "XX = 20, VII = 7."
        },
        explanation: {
          pl: "20 + 7 = 27.",
          ua: "20 + 7 = 27."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Zapis",
        ua: "Чи вже вмію? Запис"
      },
      task: {
        id: "rzym-check-40",
        type: "input-text",
        level: "B",
        question: {
          pl: ["Zapisz cyframi rzymskimi: ", em("40"), ". Wpisz litery, na przykład ", em("XII"), "."],
          ua: ["Запиши римськими цифрами: ", em("40"), ". Введи літери, наприклад ", em("XII"), "."]
        },
        answer: ["XL", "xl"],
        hint: {
          pl: "40 to 50 minus 10, nie cztery dziesiątki.",
          ua: "40 це 50 мінус 10, не чотири десятки."
        },
        explanation: {
          pl: "40 = XL. XXXX jest zakazane.",
          ua: "40 = XL. XXXX заборонено."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "I V X L C D M",
      text: {
        pl: [
          "Siedem znaków. Od lewej dodajemy, chyba że mniejszy stoi przed większym.",
          ["Pary odejmowania: ", em("IV, IX, XL, XC, CD, CM"), "."],
          "Ten sam znak — najwyżej trzy razy."
        ],
        ua: [
          "Сім знаків. Зліва додаємо, хіба що менший стоїть перед більшим.",
          ["Пари віднімання: ", em("IV, IX, XL, XC, CD, CM"), "."],
          "Той самий знак — щонайбільше тричі."
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
          "Później znów spotkasz datę na pomniku albo numer rozdziału zapisany literami.",
          "To nie nowy materiał — krótka powtórka odczytu."
        ],
        ua: [
          "Пізніше знову зустрінеш дату на пам’ятнику або номер розділу літерами.",
          "Це не новий матеріал — коротке повторення читання."
        ]
      }
    }
  ]
};
