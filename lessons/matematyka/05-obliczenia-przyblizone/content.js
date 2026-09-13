function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Czy starczy nam pieniędzy?",
        ua: "Чи вистачить нам грошей?"
      },
      formula: "47 + 38",
      text: {
        pl: [
          ["W sklepie zeszyt kosztuje ", em("47"), " zł, a farby ", em("38"), " zł."],
          ["Mama ma ", em("90"), " zł. Jeszcze nie licz dokładnie."],
          "Najpierw zgrubnie: czy to mniej więcej 80, 90, czy już 200?"
        ],
        ua: [
          ["У магазині зошит коштує ", em("47"), " zł, а фарби ", em("38"), " zł."],
          ["Мама має ", em("90"), " zł. Поки не рахуй точно."],
          "Спочатку грубо: це десь 80, 90, чи вже 200?"
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
        { pl: "zaokrąglić liczbę naturalną do 10, 100 i 1000", ua: "округлити натуральне число до 10, 100 і 1000" },
        { pl: "oszacować sumę i iloczyn", ua: "оцінити суму і добуток" },
        { pl: "sprawdzić, czy dokładny wynik ma sens", ua: "перевірити, чи точний результат має сенс" },
        { pl: "odrzucić szacunek, który jest niemożliwy", ua: "відкинути оцінку, яка неможлива" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Gdzie stoi 47?",
        ua: "Де стоїть 47?"
      },
      visual: { kind: "number-line", min: 40, max: 50, marks: [47] },
      text: {
        pl: [
          ["Na osi widać ", em("47"), " między ", em("40"), " a ", em("50"), "."],
          "Do której dziesiątki jest bliżej? Jeszcze nie zaokrąglaj na pamięć — popatrz."
        ],
        ua: [
          ["На осі видно ", em("47"), " між ", em("40"), " і ", em("50"), "."],
          "До якої десятки ближче? Поки не округлюй напам’ять — подивись."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Zaokrąglanie do 10",
        ua: "Округлення до 10"
      },
      formula: "47 ≈ 50",
      text: {
        pl: [
          "Patrzymy na cyfrę jedności.",
          ["Jeśli to ", em("0, 1, 2, 3"), " albo ", em("4"), " — zostawiamy dziesiątki."],
          ["Jeśli to ", em("5, 6, 7, 8"), " albo ", em("9"), " — skaczemy do następnej dziesiątki."],
          ["Przy ", em("47"), " jedności to 7, więc bliżej ", em("50"), "."]
        ],
        ua: [
          "Дивимось на цифру одиниць.",
          ["Якщо це ", em("0, 1, 2, 3"), " або ", em("4"), " — десятки лишаємо."],
          ["Якщо це ", em("5, 6, 7, 8"), " або ", em("9"), " — стрибаємо до наступної десятки."],
          ["У ", em("47"), " одиниці — 7, тож ближче до ", em("50"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak zaokrąglić 85?",
        ua: "Як округлити 85?"
      },
      reveal: true,
      steps: [
        { visual: { kind: "number-line", min: 80, max: 90, marks: [85] } },
        { formula: "85" },
        {
          formula: "jedności: 5",
          text: {
            pl: ["Piątka stoi dokładnie w środku. Umowa szkolna: ", em("5"), " zaokrąglamy w górę."],
            ua: ["П’ятірка стоїть рівно посередині. Шкільна угода: ", em("5"), " округлюємо вгору."]
          }
        },
        {
          formula: "85 ≈ 90",
          text: {
            pl: [em("85"), " zaokrąglone do 10 to ", em("90"), "."],
            ua: [em("85"), " округлене до 10 — це ", em("90"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Do 100 i do 1000 — ta sama umowa",
        ua: "До 100 і до 1000 — та сама угода"
      },
      text: {
        pl: [
          "Do 100: patrzysz na cyfrę dziesiątek. Do 1000: na cyfrę setek.",
          ["Znowu: ", em("0–4"), " zostawiamy, ", em("5–9"), " idziemy w górę."],
          "Reszta cyfr z prawej zamienia się w zera."
        ],
        ua: [
          "До 100: дивишся на цифру десятків. До 1000: на цифру сотень.",
          ["Знову: ", em("0–4"), " лишаємо, ", em("5–9"), " йдемо вгору."],
          "Решта цифр справа стає нулями."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "648 i 2840",
        ua: "648 і 2840"
      },
      reveal: true,
      steps: [
        {
          formula: "648 ≈ 600",
          text: {
            pl: ["Do 100: dziesiątki to ", em("4"), ", więc setki zostają. ", em("648"), " ≈ ", em("600"), "."],
            ua: ["До 100: десятки — ", em("4"), ", тож сотні лишаються. ", em("648"), " ≈ ", em("600"), "."]
          }
        },
        {
          formula: "2840 ≈ 3000",
          text: {
            pl: ["Do 1000: setki to ", em("8"), ", więc w górę. ", em("2840"), " ≈ ", em("3000"), "."],
            ua: ["До 1000: сотні — ", em("8"), ", тож вгору. ", em("2840"), " ≈ ", em("3000"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Szacunek: najpierw zaokrąglij, potem licz",
        ua: "Оцінка: спочатку округли, потім рахуй"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "48 + 31", result: "79", caption: "dokładnie" },
        right: { expr: "50 + 30", result: "80", caption: "szacunek" }
      },
      text: {
        pl: [
          "Szacunek to nie zgadywanie. Zaokrąglasz składniki, potem dodajesz albo mnożysz.",
          ["Dokładnie wyszło ", em("79"), ". Szacunek ", em("80"), " jest blisko — wynik ma sens."]
        ],
        ua: [
          "Оцінка — це не вгадування. Округлюєш доданки, потім додаєш або множиш.",
          ["Точно вийшло ", em("79"), ". Оцінка ", em("80"), " поруч — результат має сенс."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Iloczyn też można oszacować",
        ua: "Добуток теж можна оцінити"
      },
      reveal: true,
      steps: [
        { formula: "19 · 3" },
        {
          formula: "20 · 3 = 60",
          text: {
            pl: ["19 jest tuż przy 20. Szacunek: ", em("60"), " zł."],
            ua: ["19 майже 20. Оцінка: ", em("60"), " zł."]
          }
        },
        {
          formula: "19 · 3 = 57",
          text: {
            pl: ["Dokładnie ", em("57"), ". Trochę mniej niż 60 — tak miało być, bo zaokrąglaliśmy w górę."],
            ua: ["Точно ", em("57"), ". Трохи менше за 60 — так і мало бути, бо округлювали вгору."]
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
        { pl: "zaokrąglanie", ua: "округлення" },
        { pl: "szacunek", ua: "оцінка / наближення" },
        { pl: "obliczenie przybliżone", ua: "наближене обчислення" },
        { pl: "wynik dokładny", ua: "точний результат" }
      ],
      phrases: [
        { pl: "Zaokrąglij do dziesiątek.", ua: "Округли до десятків." },
        { pl: "Oszacuj sumę.", ua: "Оціни суму." },
        { pl: "Czy ten wynik ma sens?", ua: "Чи цей результат має сенс?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Zaokrąglij 73",
        ua: "Округли 73"
      },
      task: {
        id: "przybliz-guided-73",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zaokrąglij ", em("73"), " do 10. Wpisz tylko liczbę."],
          ua: ["Округли ", em("73"), " до 10. Введи лише число."]
        },
        answer: 70,
        hint: {
          pl: "Spójrz na jedności. Czy 3 jest mniejsze od 5?",
          ua: "Подивись на одиниці. Чи 3 менше за 5?"
        },
        explanation: {
          pl: "Jedności to 3, więc zostawiamy dziesiątki: 73 ≈ 70.",
          ua: "Одиниці — 3, тож десятки лишаємо: 73 ≈ 70."
        },
        mistakes: [
          {
            answer: 80,
            feedback: {
              pl: "80 byłoby przy 5–9 w jednościach. Tu jest 3.",
              ua: "80 було б при 5–9 в одиницях. Тут 3."
            }
          },
          {
            answer: 73,
            feedback: {
              pl: "To liczba dokładna. Szukamy najbliższej dziesiątki.",
              ua: "Це точне число. Шукаємо найближчу десятку."
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
        pl: "47 ≈ 40",
        ua: "47 ≈ 40"
      },
      visual: { kind: "number-line", min: 40, max: 50, marks: [47] },
      text: {
        pl: [
          ["Od ", em("47"), " do 40 jest 7 kroków, do 50 tylko 3."],
          ["Bliżej jest ", em("50"), ". Cyfra 7 każe iść w górę."]
        ],
        ua: [
          ["Від ", em("47"), " до 40 — 7 кроків, до 50 лише 3."],
          ["Ближче ", em("50"), ". Цифра 7 каже йти вгору."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Do setek",
        ua: "До сотень"
      },
      task: {
        id: "przybliz-round-648",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zaokrąglij ", em("648"), " do 100. Wpisz tylko liczbę."],
          ua: ["Округли ", em("648"), " до 100. Введи лише число."]
        },
        answer: 600,
        hint: {
          pl: "Patrzysz na cyfrę dziesiątek, nie na jedności.",
          ua: "Дивишся на цифру десятків, не на одиниці."
        },
        explanation: {
          pl: "Dziesiątki to 4, więc setki zostają: 648 ≈ 600.",
          ua: "Десятки — 4, тож сотні лишаються: 648 ≈ 600."
        },
        mistakes: [
          {
            answer: 650,
            feedback: {
              pl: "650 to zaokrąglenie do 10. Tu pytamy o 100.",
              ua: "650 — це округлення до 10. Тут питаємо про 100."
            }
          },
          {
            answer: 700,
            feedback: {
              pl: "W górę idziemy przy dziesiątkach 5–9. Tu jest 4.",
              ua: "Вгору йдемо при десятках 5–9. Тут 4."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Szacunek sumy",
        ua: "Оцінка суми"
      },
      task: {
        id: "przybliz-est-sum",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oszacuj: ", em("48 + 31"), ". Zaokrąglij każdy składnik do 10 i dodaj. Wpisz szacunek."],
          ua: ["Оціни: ", em("48 + 31"), ". Округли кожен доданок до 10 і додай. Введи оцінку."]
        },
        answer: 80,
        hint: {
          pl: "48 jest blisko której dziesiątki? 31 blisko której?",
          ua: "48 близько якої десятки? 31 близько якої?"
        },
        explanation: {
          pl: "48 ≈ 50, 31 ≈ 30, 50 + 30 = 80.",
          ua: "48 ≈ 50, 31 ≈ 30, 50 + 30 = 80."
        },
        mistakes: [
          {
            answer: 79,
            feedback: {
              pl: "79 to wynik dokładny. Szacunek liczymy na zaokrąglonych liczbach.",
              ua: "79 — точний результат. Оцінку рахуємо на округлених числах."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Zakupy Oli",
        ua: "Покупки Олі"
      },
      text: {
        pl: [
          ["Ola bierze zeszyt za ", em("19"), " zł, ołówek za ", em("8"), " zł i farby za ", em("32"), " zł."],
          "Kasjerka liczy długo. Ola chce wiedzieć z grubsza, ile zapłaci."
        ],
        ua: [
          ["Оля бере зошит за ", em("19"), " zł, олівець за ", em("8"), " zł і фарби за ", em("32"), " zł."],
          "Касирка рахує довго. Оля хоче знати приблизно, скільки заплатить."
        ]
      },
      task: {
        id: "przybliz-shop",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oszacuj sumę: zaokrąglij każdą cenę do 10 i dodaj. Wpisz szacunek w złotych."],
          ua: ["Оціни суму: округли кожну ціну до 10 і додай. Введи оцінку в злотих."]
        },
        answer: 60,
        hint: {
          pl: "19 ≈ 20, 8 ≈ 10. A 32?",
          ua: "19 ≈ 20, 8 ≈ 10. А 32?"
        },
        explanation: {
          pl: "19 ≈ 20, 8 ≈ 10, 32 ≈ 30. 20 + 10 + 30 = 60. Dokładnie byłoby 59 — blisko.",
          ua: "19 ≈ 20, 8 ≈ 10, 32 ≈ 30. 20 + 10 + 30 = 60. Точно було б 59 — поруч."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Niemożliwy szacunek",
        ua: "Неможлива оцінка"
      },
      text: {
        pl: [
          "Nie licz dokładnie. Pomyśl o wielkości liczb."
        ],
        ua: [
          "Не рахуй точно. Подумай про величину чисел."
        ]
      },
      task: {
        id: "przybliz-impossible",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Ktoś oszacował ", em("48 + 31"), " jako ", em("800"), ". Które zdanie pokazuje, że ten szacunek jest niemożliwy?"],
          ua: ["Хтось оцінив ", em("48 + 31"), " як ", em("800"), ". Яке речення показує, що ця оцінка неможлива?"]
        },
        options: [
          { id: "a", label: { pl: "48 i 31 to liczby dwucyfrowe, ich suma jest około 80, nie 800", ua: "48 і 31 — двоцифрові, їхня сума близько 80, не 800" } },
          { id: "b", label: { pl: "Trzeba było zaokrąglić do 1000", ua: "Треба було округлити до 1000" } },
          { id: "c", label: { pl: "48 + 31 jest większe niż 800", ua: "48 + 31 більше за 800" } }
        ],
        answer: "a",
        hint: {
          pl: "Ile cyfr ma suma dwóch liczb dwucyfrowych? Czy może mieć trzy zera?",
          ua: "Скільки цифр має сума двох двоцифрових чисел? Чи може мати три нулі?"
        },
        explanation: {
          pl: "48 ≈ 50, 31 ≈ 30, razem około 80. 800 jest dziesięć razy za duże — ktoś dopisał zero.",
          ua: "48 ≈ 50, 31 ≈ 30, разом близько 80. 800 у десять разів завелике — хтось дописав нуль."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Do 1000 zaokrągla się tysiące, nie sumę czterdziestu i trzydziestu.",
              ua: "До 1000 округлюють тисячі, не суму сорока і тридцяти."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "48 + 31 to mniej niż 100, więc na pewno mniej niż 800.",
              ua: "48 + 31 менше за 100, тож точно менше за 800."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Do 10",
        ua: "Чи вже вмію? До 10"
      },
      task: {
        id: "przybliz-check-85",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Zaokrąglij ", em("85"), " do 10. Wpisz tylko liczbę."],
          ua: ["Округли ", em("85"), " до 10. Введи лише число."]
        },
        answer: 90,
        hint: {
          pl: "Cyfra 5 — w górę czy w dół?",
          ua: "Цифра 5 — вгору чи вниз?"
        },
        explanation: {
          pl: "Piątka zaokrągla w górę: 85 ≈ 90.",
          ua: "П’ятірка округлює вгору: 85 ≈ 90."
        },
        mistakes: [
          {
            answer: 80,
            feedback: {
              pl: "Przy 5 umawiamy się iść w górę, nie zostawać przy 80.",
              ua: "При 5 домовляємось іти вгору, не лишатись при 80."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Czy ma sens?",
        ua: "Чи вже вмію? Чи має сенс?"
      },
      task: {
        id: "przybliz-check-sense",
        type: "true-false",
        level: "B",
        question: {
          pl: ["Szacunek ", em("397 · 2"), " to około ", em("800"), ". Czy dokładny wynik ", em("794"), " ma sens? Zaznacz prawda albo fałsz."],
          ua: ["Оцінка ", em("397 · 2"), " — близько ", em("800"), ". Чи точний результат ", em("794"), " має сенс? Познач правду або неправду."]
        },
        answer: true,
        hint: {
          pl: "397 jest tuż pod 400. Ile to dwie czterystki?",
          ua: "397 майже 400. Скільки це дві чотириста?"
        },
        explanation: {
          pl: "397 ≈ 400, 400 · 2 = 800. 794 jest tuż pod 800 — wynik ma sens.",
          ua: "397 ≈ 400, 400 · 2 = 800. 794 трохи менше за 800 — результат має сенс."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "47 ≈ 50",
      text: {
        pl: [
          ["Patrzysz na cyfrę z prawej: ", em("0–4"), " zostawiasz, ", em("5–9"), " idziesz w górę."],
          "Szacunek: zaokrąglij, potem licz. Potem spytaj: czy dokładny wynik jest w pobliżu?"
        ],
        ua: [
          ["Дивишся на цифру справа: ", em("0–4"), " лишаєш, ", em("5–9"), " йдеш вгору."],
          "Оцінка: округли, потім рахуй. Потім запитай: чи точний результат поруч?"
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
          "Później znów usłyszysz: „Oszacuj, a potem oblicz dokładnie”.",
          "To nie nowy materiał — krótka powtórka, czy wynik w ogóle ma sens."
        ],
        ua: [
          "Пізніше знову почуєш: «Оціни, а потім обчисли точно».",
          "Це не новий матеріал — коротке повторення, чи результат узагалі має сенс."
        ]
      }
    }
  ]
};
