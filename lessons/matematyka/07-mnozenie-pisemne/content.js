function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pudełka na półkach",
        ua: "Коробки на полицях"
      },
      formula: "24 · 13",
      visual: { kind: "grid", rows: 3, cols: 4 },
      text: {
        pl: [
          ["Małą siatkę ", em("3 · 4"), " widać od razu."],
          ["Ale ", em("24"), " pudełka w ", em("13"), " warstwach już nie zmieścisz na palcach."],
          "Dlatego mnożymy pisemnie — i łączymy to z rozbijaniem z lekcji o działaniach pamięciowych."
        ],
        ua: [
          ["Маленьку сітку ", em("3 · 4"), " видно одразу."],
          ["Але ", em("24"), " коробки в ", em("13"), " шарах уже не змістиш на пальцях."],
          "Тому множимо письмово — і поєднуємо це з розбиттям з уроку про усні дії."
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
        { pl: "pomnożyć pisemnie przez liczbę jednocyfrową", ua: "помножити письмово на одноцифрове число" },
        { pl: "pomnożyć przez liczbę dwucyfrową", ua: "помножити на двоцифрове число" },
        { pl: "dopisać zera na końcu iloczynu", ua: "дописати нулі в кінці добутку" },
        { pl: "zauważyć, gdy w iloczynie zginęło zero", ua: "помітити, коли в добутку зник нуль" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "To samo mnożenie, dwa zapisy",
        ua: "Те саме множення, два записи"
      },
      visual: { kind: "split-rect", a: 8, left: 20, right: 3 },
      prompt: {
        pl: [
          ["Pamiętasz? ", em("8 · 23"), " = ", em("8 · 20 + 8 · 3"), "."],
          "Słupek robi to samo: najpierw jedności, potem dziesiątki."
        ],
        ua: [
          ["Пам’ятаєш? ", em("8 · 23"), " = ", em("8 · 20 + 8 · 3"), "."],
          "Стовпчик робить те саме: спочатку одиниці, потім десятки."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Przez jedną cyfrę — od prawej",
        ua: "На одну цифру — справа"
      },
      formula: "247 · 6",
      text: {
        pl: [
          "Mnożysz każdą cyfrę górnej liczby przez dolną, od jedności.",
          "Gdy wyjdzie 10 albo więcej — cyfrę jedności zapisujesz, resztę przenosisz."
        ],
        ua: [
          "Множиш кожну цифру верхнього числа на нижнє, від одиниць.",
          "Коли вийде 10 або більше — цифру одиниць записуєш, решту переносиш."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 247 · 6",
        ua: "Крок за кроком: 247 · 6"
      },
      reveal: true,
      steps: [
        { formula: "247 · 6" },
        {
          formula: "6 · 7 = 42",
          text: {
            pl: ["Zapisujesz ", em("2"), ", przenosisz ", em("4"), "."],
            ua: ["Записуєш ", em("2"), ", переносиш ", em("4"), "."]
          }
        },
        {
          formula: "6 · 4 + 4 = 28",
          text: {
            pl: ["Zapisujesz ", em("8"), ", przenosisz ", em("2"), "."],
            ua: ["Записуєш ", em("8"), ", переносиш ", em("2"), "."]
          }
        },
        {
          formula: "6 · 2 + 2 = 14",
          text: {
            pl: [em("247 · 6"), " = ", em("1482"), ". Sprawdzenie z rozbicia: 200 · 6 + 40 · 6 + 7 · 6 = 1200 + 240 + 42."],
            ua: [em("247 · 6"), " = ", em("1482"), ". Перевірка розбиттям: 200 · 6 + 40 · 6 + 7 · 6 = 1200 + 240 + 42."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Przez dwie cyfry — dwa wiersze",
        ua: "На дві цифри — два рядки"
      },
      formula: "24 · 13 = 24 · 3 + 24 · 10",
      text: {
        pl: [
          "Najpierw mnożysz przez jedności dolnej liczby.",
          "Potem przez dziesiątki — i ten iloczyn przesuwasz o jedno miejsce w lewo (to mnożenie przez 10).",
          "Na końcu dodajesz oba wiersze."
        ],
        ua: [
          "Спочатку множиш на одиниці нижнього числа.",
          "Потім на десятки — і цей добуток зсуваєш на одне місце ліворуч (це множення на 10).",
          "Наприкінці додаєш обидва рядки."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Krok po kroku: 24 · 13",
        ua: "Крок за кроком: 24 · 13"
      },
      reveal: true,
      steps: [
        { formula: "24 · 13" },
        {
          formula: "24 · 3 = 72",
          text: {
            pl: "Pierwszy wiersz: mnożenie przez jedności.",
            ua: "Перший рядок: множення на одиниці."
          }
        },
        {
          formula: "24 · 10 = 240",
          text: {
            pl: "Drugi wiersz: mnożenie przez dziesiątki. Zero na końcu to przesunięcie.",
            ua: "Другий рядок: множення на десятки. Нуль у кінці — це зсув."
          }
        },
        {
          formula: "72 + 240 = 312",
          text: {
            pl: [em("24 · 13"), " = ", em("312"), "."],
            ua: [em("24 · 13"), " = ", em("312"), "."]
          }
        }
      ]
    },
    {
      type: "visual",
      heading: {
        pl: "Zero na końcu czynnika",
        ua: "Нуль у кінці множника"
      },
      visual: { kind: "zeros-scale", stage: "mul" },
      text: {
        pl: [
          "Mnożysz bez zer, potem dopisujesz je z prawej.",
          ["Dlatego ", em("36 · 20"), " to ", em("36 · 2"), " i jeszcze jedno zero: ", em("720"), "."]
        ],
        ua: [
          "Множиш без нулів, потім дописуєш їх справа.",
          ["Тому ", em("36 · 20"), " — це ", em("36 · 2"), " і ще один нуль: ", em("720"), "."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "mnożenie pisemne", ua: "письмове множення" },
        { pl: "czynnik", ua: "множник" },
        { pl: "iloczyn", ua: "добуток" },
        { pl: "przeniesienie", ua: "перенесення" }
      ],
      phrases: [
        { pl: "Pomnóż pisemnie.", ua: "Помнож письмово." },
        { pl: "Dopisz zera.", ua: "Допиши нулі." },
        { pl: "Sprawdź iloczyn rozbiciem.", ua: "Перевір добуток розбиттям." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Pomnóż przez 7",
        ua: "Помнож на 7"
      },
      task: {
        id: "mnopis-guided-38",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("38 · 7"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("38 · 7"), ". Введи добуток."]
        },
        answer: 266,
        hint: {
          pl: "7 · 8 = 56. Co zapisujesz, a co przenosisz do 7 · 3?",
          ua: "7 · 8 = 56. Що записуєш, а що переносиш до 7 · 3?"
        },
        explanation: {
          pl: "7 · 8 = 56 → 6 i przeniesienie 5. 7 · 3 + 5 = 26. Iloczyn 266. Sprawdzenie: 40 · 7 − 14 = 266.",
          ua: "7 · 8 = 56 → 6 і перенесення 5. 7 · 3 + 5 = 26. Добуток 266. Перевірка: 40 · 7 − 14 = 266."
        },
        mistakes: [
          {
            answer: 216,
            feedback: {
              pl: "Przeniesienie 5 z 56 trzeba dodać do 21.",
              ua: "Перенесення 5 з 56 треба додати до 21."
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
        pl: "24 · 13 = 72",
        ua: "24 · 13 = 72"
      },
      text: {
        pl: [
          ["To tylko ", em("24 · 3"), ". Zginął drugi wiersz: mnożenie przez 10."],
          ["Bez ", em("240"), " iloczyn jest za mały. Razem: 72 + 240 = 312."]
        ],
        ua: [
          ["Це лише ", em("24 · 3"), ". Зник другий рядок: множення на 10."],
          ["Без ", em("240"), " добуток замалий. Разом: 72 + 240 = 312."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Jedna cyfra na dole",
        ua: "Одна цифра внизу"
      },
      task: {
        id: "mnopis-56-4",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("56 · 4"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("56 · 4"), ". Введи добуток."]
        },
        answer: 224,
        hint: {
          pl: "4 · 6 = 24. Potem 4 · 5 i przeniesienie.",
          ua: "4 · 6 = 24. Потім 4 · 5 і перенесення."
        },
        explanation: {
          pl: "4 · 6 = 24 → 4. 4 · 5 + 2 = 22. Iloczyn 224.",
          ua: "4 · 6 = 24 → 4. 4 · 5 + 2 = 22. Добуток 224."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dwie cyfry na dole",
        ua: "Дві цифри внизу"
      },
      task: {
        id: "mnopis-45-12",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("45 · 12"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("45 · 12"), ". Введи добуток."]
        },
        answer: 540,
        hint: {
          pl: "Rozbij jak na lekcji 1: 45 · 10 i 45 · 2, potem dodaj.",
          ua: "Розбий як на уроці 1: 45 · 10 і 45 · 2, потім додай."
        },
        explanation: {
          pl: "45 · 2 = 90, 45 · 10 = 450, 90 + 450 = 540.",
          ua: "45 · 2 = 90, 45 · 10 = 450, 90 + 450 = 540."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Pudełka w kartonie",
        ua: "Коробки в ящику"
      },
      text: {
        pl: [
          ["W jednym kartonie jest ", em("12"), " pudełek kredek."],
          ["Do świetlicy wjechało ", em("16"), " takich kartonów."]
        ],
        ua: [
          ["В одному ящику ", em("12"), " коробок олівців."],
          ["До групи продовженого дня завезли ", em("16"), " таких ящиків."]
        ]
      },
      task: {
        id: "mnopis-boxes",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Ile pudełek przywieziono? Oblicz ", em("16 · 12"), " i wpisz liczbę."],
          ua: ["Скільки коробок привезли? Обчисли ", em("16 · 12"), " і введи число."]
        },
        answer: 192,
        hint: {
          pl: "16 · 10 i 16 · 2.",
          ua: "16 · 10 і 16 · 2."
        },
        explanation: {
          pl: "16 · 10 = 160, 16 · 2 = 32, razem 192.",
          ua: "16 · 10 = 160, 16 · 2 = 32, разом 192."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Gdzie zginęło zero?",
        ua: "Де зник нуль?"
      },
      text: {
        pl: [
          "Iloczyn skończył się za wcześnie. Pomyśl, której dziesiątki brakuje."
        ],
        ua: [
          "Добуток скінчився зарано. Подумай, якої десятки бракує."
        ]
      },
      task: {
        id: "mnopis-lost-zero",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Kasia napisała ", em("36 · 20 = 72"), ". Gdzie zginęło zero? Wybierz wyjaśnienie."],
          ua: ["Кася написала ", em("36 · 20 = 72"), ". Де зник нуль? Вибери пояснення."]
        },
        options: [
          { id: "a", label: { pl: "Policzyła 36 · 2 = 72 i nie dopisała zera za mnożenie przez 10", ua: "Полічила 36 · 2 = 72 і не дописала нуль за множення на 10" } },
          { id: "b", label: { pl: "36 · 20 naprawdę wynosi 72", ua: "36 · 20 справді дорівнює 72" } },
          { id: "c", label: { pl: "Trzeba było odjąć 20, nie mnożyć", ua: "Треба було відняти 20, не множити" } }
        ],
        answer: "a",
        hint: {
          pl: "20 = 2 · 10. Który krok daje extra zero?",
          ua: "20 = 2 · 10. Який крок дає додатковий нуль?"
        },
        explanation: {
          pl: "36 · 2 = 72, potem · 10 daje 720. Bez tego zera zostaje 72 — dziesięć razy za mało.",
          ua: "36 · 2 = 72, потім · 10 дає 720. Без цього нуля лишається 72 — у десять разів замало."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "72 to 36 · 2. Drugi czynnik to 20, nie 2.",
              ua: "72 — це 36 · 2. Другий множник — 20, не 2."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Znak · oznacza mnożenie. Zero ginie przy zapisie, nie przy wyborze działania.",
              ua: "Знак · означає множення. Нуль зникає в записі, не у виборі дії."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Przez 8",
        ua: "Чи вже вмію? На 8"
      },
      task: {
        id: "mnopis-check-29",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Oblicz pisemnie: ", em("29 · 8"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("29 · 8"), ". Введи добуток."]
        },
        answer: 232,
        hint: {
          pl: "8 · 9 = 72. Potem 8 · 2 i przeniesienie. Albo 30 · 8 minus jedna ósemka.",
          ua: "8 · 9 = 72. Потім 8 · 2 і перенесення. Або 30 · 8 мінус одна вісімка."
        },
        explanation: {
          pl: "8 · 9 = 72 → 2. 8 · 2 + 7 = 23. Iloczyn 232. Sprawdzenie: 30 · 8 − 8 = 232.",
          ua: "8 · 9 = 72 → 2. 8 · 2 + 7 = 23. Добуток 232. Перевірка: 30 · 8 − 8 = 232."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Dwa wiersze",
        ua: "Чи вже вмію? Два рядки"
      },
      task: {
        id: "mnopis-check-15",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Oblicz pisemnie: ", em("15 · 14"), ". Wpisz iloczyn."],
          ua: ["Обчисли письмово: ", em("15 · 14"), ". Введи добуток."]
        },
        answer: 210,
        hint: {
          pl: "15 · 10 i 15 · 4.",
          ua: "15 · 10 і 15 · 4."
        },
        explanation: {
          pl: "15 · 4 = 60, 15 · 10 = 150, 60 + 150 = 210.",
          ua: "15 · 4 = 60, 15 · 10 = 150, 60 + 150 = 210."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "24 · 13 = 24 · 3 + 24 · 10",
      text: {
        pl: [
          "Słupek to rozbicie z lekcji 1, tylko w kolumnach.",
          "Przez jedności — pierwszy wiersz. Przez dziesiątki — drugi, przesunięty.",
          "Zero na końcu czynnika zostaje na końcu iloczynu. Jeśli zginęło — iloczyn jest za mały."
        ],
        ua: [
          "Стовпчик — це розбиття з уроку 1, лише в колонках.",
          "На одиниці — перший рядок. На десятки — другий, зсунутий.",
          "Нуль у кінці множника лишається в кінці добутку. Якщо зник — добуток замалий."
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
          "Później znów spotkasz: „Pomnóż pisemnie” i „dopisz zera”.",
          "To nie nowy materiał — krótka powtórka słupka i rozbicia."
        ],
        ua: [
          "Пізніше знову зустрінеш: «Помнож письмово» і «допиши нулі».",
          "Це не новий матеріал — коротке повторення стовпчика і розбиття."
        ]
      }
    }
  ]
};
