function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Dwoje dzieci, dwa wyniki",
        ua: "Двоє дітей — два результати"
      },
      formula: "2 + 3 · 4",
      text: {
        pl: [
          ["Ola dostała ", em("20"), ". Tomek dostał ", em("14"), "."],
          "Oboje policzyli „po kolei”, ale każdy inną kolejką.",
          "Kto ma rację? Jeszcze nie licz — najpierw pomyśl, dlaczego w ogóle mogą wyjść dwa wyniki."
        ],
        ua: [
          ["Оля отримала ", em("20"), ". Томек — ", em("14"), "."],
          "Обидва рахували «по черзі», але кожен своєю чергою.",
          "Хто має рацію? Ще не рахуй — спочатку подумай, чому взагалі можуть вийти два результати."
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
        { pl: "wiedzieć, po co jest kolejność wykonywania działań", ua: "kolejność wykonywania działań — навіщо вона потрібна" },
        { pl: "najpierw działania w nawiasach", ua: "najpierw nawiasy — спочатку дужки" },
        { pl: "potem potęgowanie", ua: "potem potęgowanie — потім степінь" },
        { pl: "potem mnożenie i dzielenie od lewej do prawej", ua: "mnożenie i dzielenie od lewej do prawej" },
        { pl: "na końcu dodawanie i odejmowanie od lewej do prawej", ua: "dodawanie i odejmowanie od lewej do prawej" },
        { pl: "zapisać historię jako jedno wyrażenie", ua: "wyrażenie — один запис замість багатьох кроків" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Te same liczby, inny wynik",
        ua: "Ті самі числа — інший результат"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "10 − 6 + 2", result: "6", caption: "od lewej do prawej" },
        right: { expr: "10 − (6 + 2)", result: "2", caption: "najpierw nawias" }
      },
      prompt: {
        pl: [
          "Cyfry te same. Zmienił się tylko nawias. Wynik już inny.",
          "Kolejność to nie ozdoba — to decyzja."
        ],
        ua: [
          "Цифри ті самі. Змінився лише nawias. Результат уже інший.",
          "Kolejność — це не прикраса, а рішення."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Po co w ogóle kolejność?",
        ua: "Навіщо kolejność?"
      },
      text: {
        pl: [
          "Gdy każdy liczy „jak mu wygodnie”, to samo wyrażenie ma wiele wyników.",
          "Szkoła umawia się na jedną kolejność wykonywania działań — jak na przepisy ruchu.",
          "Wtedy 2 + 3 · 4 znaczy to samo u Oli, u Tomka i u nauczyciela."
        ],
        ua: [
          "Якщо кожен рахує «як зручно», те саме wyrażenie має багато результатів.",
          "Школа домовляється про одну kolejność wykonywania działań — як про правила руху.",
          "Тоді 2 + 3 · 4 означає те саме в Олі, в Томека і в учителя."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Kolejka czterech drzwi",
        ua: "Черга з чотирьох дверей"
      },
      visual: {
        kind: "ops-queue",
        items: [
          { n: 1, label: "nawiasy" },
          { n: 2, label: "potęgi" },
          { n: 3, label: "·  i  :", hint: "od lewej" },
          { n: 4, label: "+  i  −", hint: "od lewej" }
        ]
      },
      text: {
        pl: [
          "Wchodzisz tylko otwartymi drzwiami.",
          "Najpierw nawiasy, potem potęgi, potem · i :, na końcu + i −.",
          ["Drzwi ", em("3"), " i ", em("4"), ": od lewej do prawej."]
        ],
        ua: [
          "Заходиш лише у відкриті двері.",
          "Спочатку nawiasy, потім potęgi, потім · і :, наприкінці + і −.",
          ["Двері ", em("3"), " і ", em("4"), ": od lewej do prawej."]
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Nawias mówi: zrób to pierwsze",
        ua: "Nawias каже: зроби це першим"
      },
      formula: "10 − (6 + 2)",
      text: {
        pl: [
          "Nawias to polecenie, nie ozdoba.",
          "Najpierw to, co w środku. Dopiero potem reszta wyrażenia.",
          "Ile nawiasów otworzysz, tyle musisz zamknąć."
        ],
        ua: [
          "Nawias — це наказ, не прикраса.",
          "Спочатку те, що всередині. Потім решта wyrażenia.",
          "Скільки nawiasów відкриєш, стільки закрий."
        ]
      }
    },
    {
      type: "comparison",
      heading: {
        pl: "Nawias zmienia historię",
        ua: "Nawias змінює історію"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "4 + 2 · 10", result: "24", caption: "najpierw mnożenie" },
        right: { expr: "(4 + 2) · 10", result: "60", caption: "najpierw nawias" }
      },
      prompt: {
        pl: [
          "Bez nawiasu mnożenie wyprzedza dodawanie.",
          "Z nawiasem dodajesz najpierw — i dostajesz inną opowieść."
        ],
        ua: [
          "Без nawiasu mnożenie випереджає dodawanie.",
          "З nawiasem додаєш спочатку — і отримуєш іншу історію."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Jedno piętro: od lewej do prawej",
        ua: "Один поверх: od lewej do prawej"
      },
      formula: "20 : 2 · 5 = 10 · 5 = 50",
      text: {
        pl: [
          "Mnożenie i dzielenie stoją na tym samym piętrze. Nie ma „najpierw zawsze ·”.",
          "Idziesz od lewej do prawej.",
          ["Dlatego 20 : 2 · 5 to ", em("50"), ", a nie ", em("2"), "."],
          "Żeby było 2, musiałby stanąć nawias: 20 : (2 · 5)."
        ],
        ua: [
          "Mnożenie і dzielenie стоять на одному поверсі. Немає «завжди спочатку ·».",
          "Йдеш od lewej do prawej.",
          ["Тому 20 : 2 · 5 — це ", em("50"), ", а не ", em("2"), "."],
          "Щоб було 2, має стати nawias: 20 : (2 · 5)."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Potęgowanie przed mnożeniem",
        ua: "Potęgowanie перед mnożeniem"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "2 · 3²", result: "18", caption: "najpierw potęga" },
        right: { expr: "(2 · 3)²", result: "36", caption: "najpierw nawias" }
      },
      text: {
        pl: [
          [em("3²"), " to 3 · 3, nie 3 · 2."],
          "Potęgowanie jest wcześniej niż mnożenie.",
          "Nawias znów może zmienić plan."
        ],
        ua: [
          [em("3²"), " — це 3 · 3, не 3 · 2."],
          "Potęgowanie раніше за mnożenie.",
          "Nawias знову може змінити план."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Wracamy do Oli i Tomka",
        ua: "Повертаємось до Олі і Томека"
      },
      reveal: true,
      steps: [
        { formula: "2 + 3 · 4" },
        {
          formula: "2 + 12",
          text: {
            pl: "Nie ma nawiasu. Nie ma potęgi. Najpierw mnożenie.",
            ua: "Немає nawiasu. Немає potęgi. Спочатку mnożenie."
          }
        },
        {
          formula: "14",
          text: {
            pl: [
              "Tomek miał rację.",
              ["Ola dodała najpierw ", em("2 + 3"), " — jakby stał nawias, którego nie było."]
            ],
            ua: [
              "Томек мав рацію.",
              ["Оля спочатку додала ", em("2 + 3"), " — ніби стояв nawias, якого не було."]
            ]
          }
        }
      ]
    },
    {
      type: "algorithm",
      heading: {
        pl: "Przepisuj całą linię",
        ua: "Переписуй увесь рядок"
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: [
              "Długość wyrażenia straszna?",
              "Po każdym kroku przepisz liczby, których jeszcze nie ruszyłeś. Wtedy nic nie zginie."
            ],
            ua: [
              "Довге wyrażenie страшне?",
              "Після кожного кроку перепиши числа, яких ще не чіпав. Тоді нічого не зникне."
            ]
          }
        },
        { formula: "5 · 2² + 1" },
        { formula: "5 · 4 + 1" },
        { formula: "20 + 1" },
        { formula: "21" }
      ]
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "kolejność wykonywania działań", ua: "порядок виконання дій" },
        { pl: "wyrażenie", ua: "вираз" },
        { pl: "wartość wyrażenia", ua: "значення виразу" },
        { pl: "nawias", ua: "дужка" },
        { pl: "potęgowanie", ua: "піднесення до степеня" },
        { pl: "mnożenie", ua: "множення" },
        { pl: "dzielenie", ua: "ділення" },
        { pl: "dodawanie", ua: "додавання" },
        { pl: "odejmowanie", ua: "віднімання" },
        { pl: "od lewej do prawej", ua: "зліва направо" },
        { pl: "wynik", ua: "результат" }
      ],
      phrases: [
        { pl: "Oblicz.", ua: "Обчисли." },
        { pl: "Wykonaj działania.", ua: "Виконай дії." },
        { pl: "Oblicz wartość wyrażenia.", ua: "Обчисли значення виразу." },
        { pl: "Wykonaj działania w odpowiedniej kolejności.", ua: "Виконай дії у відповідній kolejności." },
        { pl: "Zapisuj kolejne etapy obliczania.", ua: "Записуй наступні етапи обчислення." },
        { pl: "Zapisz rozwiązanie w postaci jednego wyrażenia.", ua: "Запиши розв’язання у вигляді одного wyrażenia." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Policz to wyrażenie",
        ua: "Полічи це wyrażenie"
      },
      taskId: "kolej-guided-234"
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "2 + 3 · 4 = 5 · 4 = 20",
        ua: "2 + 3 · 4 = 5 · 4 = 20"
      },
      visual: {
        kind: "expr-pair",
        left: { expr: "2 + 3 · 4", result: "14", caption: "najpierw ·" },
        right: { expr: "(2 + 3) · 4", result: "20", caption: "nie ma takiego nawiasu" }
      },
      text: {
        pl: [
          "To zapis Oli. Dodała, jakby był nawias.",
          "W wyrażeniu nawiasu nie ma — więc mnożenie pierwsze."
        ],
        ua: [
          "Це запис Олі. Додала, ніби був nawias.",
          "У wyrażeniu nawiasu немає — отже mnożenie перше."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Ta sama półka",
        ua: "Та сама полиця"
      },
      taskId: "kolej-tf-left"
    },
    {
      type: "problem",
      heading: {
        pl: "Zakupy Ani — jedno wyrażenie",
        ua: "Покупки Ані — одне wyrażenie"
      },
      text: {
        pl: [
          ["Ania kupuje ", em("2"), " bloki po ", em("3"), " zł i kredki za ", em("5"), " zł."],
          ["Płaci ", em("20"), " zł. Które wyrażenie liczy resztę?"]
        ],
        ua: [
          ["Аня купує ", em("2"), " bloki по ", em("3"), " zł і kredki за ", em("5"), " zł."],
          ["Платить ", em("20"), " zł. Яке wyrażenie рахує решту?"]
        ]
      },
      taskId: "kolej-shop"
    },
    {
      type: "problem",
      heading: {
        pl: "Koła na parkingu",
        ua: "Колеса на парковці"
      },
      text: {
        pl: [
          ["Samochód ma ", em("4"), " koła, motocykl ", em("2"), "."],
          ["Na parkingu stoją ", em("3"), " samochody i ", em("1"), " motocykl."],
          "Które wyrażenie liczy wszystkie koła?"
        ],
        ua: [
          ["Samochód має ", em("4"), " koła, motocykl — ", em("2"), "."],
          ["На парковці ", em("3"), " samochody і ", em("1"), " motocykl."],
          "Яке wyrażenie рахує всі koła?"
        ]
      },
      taskId: "kolej-wheels"
    },
    {
      type: "challenge",
      heading: {
        pl: "Bez liczenia — ta sama wartość",
        ua: "Без лічби — та сама wartość"
      },
      text: {
        pl: [
          "Najpierw pomyśl o nawiasie, nie o wyniku.",
          "Która para na pewno da to samo?"
        ],
        ua: [
          "Спочатку подумай про nawias, не про wynik.",
          "Яка пара точно дасть те саме?"
        ]
      },
      taskId: "kolej-same"
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Mnożenie pierwsze",
        ua: "Чи вже вмію? Mnożenie перше"
      },
      taskId: "kolej-check-mul"
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Od lewej",
        ua: "Чи вже вмію? Od lewej"
      },
      taskId: "kolej-check-left"
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Z potęgą",
        ua: "Чи вже вмію? З potęgą"
      },
      taskId: "kolej-check-power"
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      visual: {
        kind: "ops-queue",
        items: [
          { n: 1, label: "nawiasy" },
          { n: 2, label: "potęgi" },
          { n: 3, label: "·  i  :", hint: "od lewej" },
          { n: 4, label: "+  i  −", hint: "od lewej" }
        ]
      },
      text: {
        pl: [
          "Matematyka tu to najpierw decyzja, potem rachunek.",
          "Zanim policzysz: czy jest nawias? potęga? czy · i : idą od lewej?"
        ],
        ua: [
          "Математика тут — спочатку рішення, потім рахунок.",
          "Перш ніж полічити: чи є nawias? potęga? чи · і : йдуть od lewej?"
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
          "Później znów usłyszysz: „Oblicz wartość wyrażenia” i „Zapisz w postaci jednego wyrażenia”.",
          "To nie nowy materiał — krótka powtórka kolejności."
        ],
        ua: [
          "Пізніше знову почуєш: «Oblicz wartość wyrażenia» і «Zapisz w postaci jednego wyrażenia».",
          "Це не новий матеріал — коротке повторення kolejności."
        ]
      }
    }
  ]
};
