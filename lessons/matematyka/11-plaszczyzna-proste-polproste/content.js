function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Kartka, która nie ma brzegu",
        ua: "Аркуш, який не має краю"
      },
      text: {
        pl: [
          "Na kartce stawiasz kropkę. Potem prowadzisz kreskę.",
          "W wyobraźni kartka nie kończy się. Kreska też może nie mieć końca.",
          "Dziś nazwiemy to, co widzisz: punkt, prostą, półprostą i odcinek."
        ],
        ua: [
          "На аркуші ставиш крапку. Потім ведеш риску.",
          "В уяві аркуш не кінчається. Риска теж може не мати кінця.",
          "Сьогодні назвемо те, що бачиш: точку, пряму, півпряму і відрізок."
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
        { pl: "odróżnić punkt, prostą, półprostą i odcinek", ua: "розрізнити точку, пряму, півпряму і відрізок" },
        { pl: "wskazać, co ma koniec, a co nie", ua: "вказати, що має кінець, а що ні" },
        { pl: "rozpoznać proste równoległe ∥", ua: "розпізнати паралельні прямі ∥" },
        { pl: "rozpoznać proste prostopadłe ⊥", ua: "розпізнати перпендикулярні прямі ⊥" },
        { pl: "odczytać łańcuch: AB ⊥ CD, CD ∥ EF", ua: "прочитати ланцюжок: AB ⊥ CD, CD ∥ EF" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Trzy kreski — nie to samo",
        ua: "Три риски — не те саме"
      },
      visual: { kind: "geo-lines", mode: "all" },
      text: {
        pl: [
          "Popatrz. Strzałki, kropki, końce.",
          "Jeszcze nie nazywaj. Najpierw policz końce każdej kreski."
        ],
        ua: [
          "Подивись. Стрілки, крапки, кінці.",
          "Ще не називай. Спочатку полічи кінці кожної риски."
        ]
      },
      prompt: {
        pl: [
          "Jedna kreska nie ma żadnego końca.",
          "Jedna ma początek i leci w jedną stronę.",
          "Jedna ma dwa końce."
        ],
        ua: [
          "Одна риска не має жодного кінця.",
          "Одна має початок і летить в один бік.",
          "Одна має два кінці."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Punkt i płaszczyzna",
        ua: "Точка і площина"
      },
      text: {
        pl: [
          ["", em("Punkt"), " to miejsce. Nie ma długości ani grubości. Zaznaczamy go kropką i literą: ", em("A"), "."],
          ["Kartka w wyobraźni to model ", em("płaszczyzny"), ": rozciąga się we wszystkie strony i nie ma brzegu."],
          "Na płaszczyźnie leżą punkty i kreski, o których dziś mówimy."
        ],
        ua: [
          ["", em("Точка"), " — це місце. Не має довжини ні товщини. Позначаємо крапкою і літерою: ", em("A"), "."],
          ["Аркуш в уяві — модель ", em("площини"), ": простягається в усі боки і не має краю."],
          "На площині лежать точки і риски, про які сьогодні говоримо."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Prosta, półprosta, odcinek",
        ua: "Пряма, півпряма, відрізок"
      },
      visual: { kind: "geo-lines", mode: "prosta" },
      text: {
        pl: [
          ["", em("Prosta"), " nie ma początku ani końca. Dwie strzałki. Przez dwa punkty przechodzi dokładnie jedna prosta."],
          ["", em("Półprosta"), " ma jeden początek i nie ma końca. Jedna strzałka."],
          ["", em("Odcinek"), " ma dwa końce. To kawałek prostej między dwoma punktami."]
        ],
        ua: [
          ["", em("Пряма"), " не має початку ні кінця. Дві стрілки. Через дві точки проходить рівно одна пряма."],
          ["", em("Півпряма"), " має один початок і не має кінця. Одна стрілка."],
          ["", em("Відрізок"), " має два кінці. Це шматок прямої між двома точками."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Jak nazwać kreskę AB?",
        ua: "Як назвати риску AB?"
      },
      reveal: true,
      steps: [
        {
          visual: { kind: "geo-lines", mode: "odcinek" },
          text: {
            pl: ["Dwa końce: ", em("A"), " i ", em("B"), ". To odcinek ", em("AB"), "."],
            ua: ["Два кінці: ", em("A"), " і ", em("B"), ". Це відрізок ", em("AB"), "."]
          }
        },
        {
          visual: { kind: "geo-lines", mode: "polprosta" },
          text: {
            pl: ["Początek ", em("A"), ", dalej przez ", em("B"), " bez końca. To półprosta ", em("AB"), "."],
            ua: ["Початок ", em("A"), ", далі через ", em("B"), " без кінця. Це півпряма ", em("AB"), "."]
          }
        },
        {
          visual: { kind: "geo-lines", mode: "prosta" },
          text: {
            pl: ["Przez ", em("A"), " i ", em("B"), " w obie strony. To prosta ", em("AB"), "."],
            ua: ["Через ", em("A"), " і ", em("B"), " в обидва боки. Це пряма ", em("AB"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Równoległe i prostopadłe",
        ua: "Паралельні і перпендикулярні"
      },
      formula: "AB ∥ CD    AB ⊥ CD",
      text: {
        pl: [
          ["Dwie proste ", em("równoległe"), " nigdy się nie przetną. Znak: ", em("∥"), "."],
          ["Dwie proste ", em("prostopadłe"), " tworzą kąt prosty. Znak: ", em("⊥"), "."],
          "Na kartce w kratkę linie kratki są równoległe, a pion z poziomem — prostopadłe."
        ],
        ua: [
          ["Дві ", em("паралельні"), " прямі ніколи не перетнуться. Знак: ", em("∥"), "."],
          ["Дві ", em("перпендикулярні"), " прямі утворюють прямий кут. Знак: ", em("⊥"), "."],
          "На аркуші в клітинку лінії клітинок паралельні, а вертикаль із горизонталлю — перпендикулярні."
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
        { pl: "płaszczyzna", ua: "площина" },
        { pl: "punkt", ua: "точка" },
        { pl: "prosta", ua: "пряма" },
        { pl: "półprosta", ua: "півпряма" },
        { pl: "odcinek", ua: "відрізок" },
        { pl: "proste równoległe", ua: "паралельні прямі" },
        { pl: "proste prostopadłe", ua: "перпендикулярні прямі" }
      ],
      phrases: [
        { pl: "Wskaż prostą, półprostą i odcinek.", ua: "Вкажи пряму, півпряму і відрізок." },
        { pl: "Która figura nie ma końca?", ua: "Яка фігура не має кінця?" },
        { pl: "Czy te proste są równoległe?", ua: "Чи ці прямі паралельні?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Policz końce",
        ua: "Полічи кінці"
      },
      visual: { kind: "geo-lines", mode: "all" },
      task: {
        id: "linie-guided-ends",
        type: "single-choice",
        level: "A",
        question: {
          pl: ["Która figura ma ", em("dwa"), " końce?"],
          ua: ["Яка фігура має ", em("два"), " кінці?"]
        },
        options: [
          { id: "a", label: { pl: "prosta", ua: "пряма" } },
          { id: "b", label: { pl: "półprosta", ua: "півпряма" } },
          { id: "c", label: { pl: "odcinek", ua: "відрізок" } }
        ],
        answer: "c",
        hint: {
          pl: "Koniec to kropka, na której kreska się urywa. Strzałka to nie koniec.",
          ua: "Кінець — це крапка, на якій риска обривається. Стрілка — не кінець."
        },
        explanation: {
          pl: "Odcinek ma dwa końce. Półprosta ma jeden początek. Prosta nie ma końców.",
          ua: "Відрізок має два кінці. Півпряма має один початок. Пряма не має кінців."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Prosta idzie w obie strony. Nie ma końców.",
              ua: "Пряма йде в обидва боки. Не має кінців."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Półprosta ma tylko jeden początek, nie dwa końce.",
              ua: "Півпряма має лише один початок, не два кінці."
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
        pl: "Półprosta ma dwa końce, tylko jeden jest daleko.",
        ua: "Півпряма має два кінці, лише один далеко."
      },
      visual: { kind: "geo-lines", mode: "polprosta" },
      text: {
        pl: [
          "Daleko nie ma żadnego końca. Półprosta nie urywa się po drugiej stronie.",
          ["Ma ", em("jeden początek"), " i tyle."]
        ],
        ua: [
          "Далеко немає жодного кінця. Півпряма не обривається з другого боку.",
          ["Має ", em("один початок"), " і все."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Nazwij figurę",
        ua: "Назви фігуру"
      },
      visual: { kind: "geo-lines", mode: "prosta" },
      task: {
        id: "linie-prac-name",
        type: "input-text",
        level: "A",
        question: {
          pl: ["Ta kreska nie ma początku ani końca. Wpisz nazwę figury: ", em("prosta"), ", ", em("półprosta"), " albo ", em("odcinek"), "."],
          ua: ["Ця риска не має початку ні кінця. Введи назву фігури: ", em("prosta"), ", ", em("półprosta"), " / ", em("пряма"), ", ", em("півпряма"), " або ", em("відрізок"), "."]
        },
        answer: ["prosta", "пряма"],
        hint: {
          pl: "Dwie strzałki. Żadnej kropki na końcu.",
          ua: "Дві стрілки. Жодної крапки на кінці."
        },
        explanation: {
          pl: "To prosta.",
          ua: "Це пряма."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Jaki znak?",
        ua: "Який знак?"
      },
      task: {
        id: "linie-prac-symbol",
        type: "single-choice",
        level: "B",
        question: {
          pl: ["Dwie proste na kartce w kratkę nigdy się nie zetkną. Który znak to zapisuje?"],
          ua: ["Дві прямі на аркуші в клітинку ніколи не зустрінуться. Який знак це записує?"]
        },
        options: [
          { id: "a", label: { pl: "∥", ua: "∥" } },
          { id: "b", label: { pl: "⊥", ua: "⊥" } },
          { id: "c", label: { pl: "∠", ua: "∠" } }
        ],
        answer: "a",
        hint: {
          pl: "Równoległe nie przecinają się. Prostopadłe tworzą kąt prosty.",
          ua: "Паралельні не перетинаються. Перпендикулярні утворюють прямий кут."
        },
        explanation: {
          pl: "∥ znaczy równoległe. ⊥ znaczy prostopadłe. ∠ to kąt.",
          ua: "∥ означає паралельні. ⊥ означає перпендикулярні. ∠ — це кут."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "⊥ to prostopadłe — jak kratka pion–poziom, nie „nigdy się nie zetkną”.",
              ua: "⊥ — це перпендикулярні, як клітинка вертикаль–горизонталь, не «ніколи не зустрінуться»."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "∠ oznacza kąt, nie układ dwóch prostych.",
              ua: "∠ означає кут, не розташування двох прямих."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Krawędzie zeszytu",
        ua: "Краї зошита"
      },
      text: {
        pl: [
          "Otwórz w wyobraźni zeszyt w kratkę.",
          "Dłuższy brzeg i krótszy brzeg schodzą się w rogu."
        ],
        ua: [
          "Відкрий в уяві зошит у клітинку.",
          "Довший край і коротший край сходяться в куті."
        ]
      },
      task: {
        id: "linie-prob-room",
        type: "true-false",
        level: "B",
        question: {
          pl: "Dłuższy brzeg zeszytu i krótszy brzeg zeszytu są prostopadłe.",
          ua: "Довший край зошита і коротший край зошита перпендикулярні."
        },
        answer: true,
        hint: {
          pl: "Róg zeszytu to kąt prosty. Jakie proste tworzą kąt prosty?",
          ua: "Ріг зошита — прямий кут. Які прямі утворюють прямий кут?"
        },
        explanation: {
          pl: "Brzegi zeszytu tworzą w rogu kąt prosty, więc są prostopadłe.",
          ua: "Краї зошита утворюють у розі прямий кут, отже вони перпендикулярні."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Łańcuch prostych",
        ua: "Ланцюжок прямих"
      },
      text: {
        pl: [
          ["Wiadomo: ", em("AB ⊥ CD"), " oraz ", em("CD ∥ EF"), "."],
          "Nie rysuj jeszcze. Pomyśl, co z tego wynika dla AB i EF."
        ],
        ua: [
          ["Відомо: ", em("AB ⊥ CD"), " і ", em("CD ∥ EF"), "."],
          "Ще не малюй. Подумай, що з цього випливає для AB і EF."
        ]
      },
      task: {
        id: "linie-prob-chain",
        type: "single-choice",
        level: "C",
        question: {
          pl: ["Jeśli ", em("AB ⊥ CD"), " i ", em("CD ∥ EF"), ", to która relacja jest prawdziwa?"],
          ua: ["Якщо ", em("AB ⊥ CD"), " і ", em("CD ∥ EF"), ", то яке відношення правильне?"]
        },
        options: [
          { id: "a", label: { pl: "AB ∥ EF", ua: "AB ∥ EF" } },
          { id: "b", label: { pl: "AB ⊥ EF", ua: "AB ⊥ EF" } },
          { id: "c", label: { pl: "AB i EF na pewno się zbiegają pod kątem ostrym", ua: "AB і EF напевно сходяться під гострим кутом" } }
        ],
        answer: "b",
        hint: {
          pl: "Prosta prostopadła do jednej z dwóch równoległych jest prostopadła i do drugiej.",
          ua: "Пряма, перпендикулярна до однієї з двох паралельних, перпендикулярна і до другої."
        },
        explanation: {
          pl: "CD jest równoległa do EF. AB stoi prosto do CD, więc stoi prosto i do EF. AB ⊥ EF.",
          ua: "CD паралельна до EF. AB стоїть прямо до CD, отже стоїть прямо і до EF. AB ⊥ EF."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Gdyby AB była równoległa do EF, nie mogłaby być prostopadła do CD.",
              ua: "Якби AB була паралельна до EF, вона не могла б бути перпендикулярною до CD."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kąt nie jest ostry — jest prosty. AB ⊥ EF.",
              ua: "Кут не гострий — він прямий. AB ⊥ EF."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Bez końca",
        ua: "Без кінця"
      },
      text: {
        pl: [
          "Nie zgaduj ze strzałek na pamięć. Policz końce."
        ],
        ua: [
          "Не вгадуй зі стрілок напам’ять. Полічи кінці."
        ]
      },
      task: {
        id: "linie-chall-noend",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która figura nie ma żadnego końca?",
          ua: "Яка фігура не має жодного кінця?"
        },
        options: [
          { id: "a", label: { pl: "prosta", ua: "пряма" } },
          { id: "b", label: { pl: "półprosta", ua: "півпряма" } },
          { id: "c", label: { pl: "odcinek", ua: "відрізок" } }
        ],
        answer: "a",
        hint: {
          pl: "Półprosta ma początek. Początek to też koniec kreski z jednej strony.",
          ua: "Півпряма має початок. Початок — це теж кінець риски з одного боку."
        },
        explanation: {
          pl: "Prosta nie ma żadnego końca. Półprosta ma początek. Odcinek ma dwa końce.",
          ua: "Пряма не має жодного кінця. Півпряма має початок. Відрізок має два кінці."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Półprosta nie ma końca w jedną stronę, ale ma początek — to jest jeden koniec.",
              ua: "Півпряма не має кінця в один бік, але має початок — це один кінець."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odcinek ma dwa końce. To jedyna z tych trzech, która się urywa z obu stron.",
              ua: "Відрізок має два кінці. Це єдина з цих трьох, яка обривається з обох боків."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Półprosta",
        ua: "Чи вже вмію? Півпряма"
      },
      visual: { kind: "geo-lines", mode: "polprosta" },
      task: {
        id: "linie-check-ray",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ile końców (początków) ma półprosta?",
          ua: "Скільки кінців (початків) має півпряма?"
        },
        options: [
          { id: "a", label: { pl: "0", ua: "0" } },
          { id: "b", label: { pl: "1", ua: "1" } },
          { id: "c", label: { pl: "2", ua: "2" } }
        ],
        answer: "b",
        hint: {
          pl: "Szukaj kropki, od której kreska startuje.",
          ua: "Шукай крапку, від якої риска стартує."
        },
        explanation: {
          pl: "Półprosta ma jeden początek.",
          ua: "Півпряма має один початок."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Prostopadłe",
        ua: "Чи вже вмію? Перпендикулярні"
      },
      task: {
        id: "linie-check-perp",
        type: "true-false",
        level: "B",
        question: {
          pl: "Jeśli dwie proste są prostopadłe, to tworzą kąt prosty.",
          ua: "Якщо дві прямі перпендикулярні, то вони утворюють прямий кут."
        },
        answer: true,
        hint: {
          pl: "Przypomnij znak ⊥.",
          ua: "Пригадай знак ⊥."
        },
        explanation: {
          pl: "Prostopadłe znaczy: spotykają się pod kątem prostym.",
          ua: "Перпендикулярні означає: зустрічаються під прямим кутом."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      visual: { kind: "geo-lines", mode: "all" },
      text: {
        pl: [
          ["", em("Prosta"), " — bez końców. ", em("Półprosta"), " — jeden początek. ", em("Odcinek"), " — dwa końce."],
          ["", em("∥"), " równoległe, nigdy się nie przetną. ", em("⊥"), " prostopadłe, kąt prosty."],
          "Prosta prostopadła do jednej z dwóch równoległych jest prostopadła i do drugiej."
        ],
        ua: [
          ["", em("Пряма"), " — без кінців. ", em("Півпряма"), " — один початок. ", em("Відрізок"), " — два кінці."],
          ["", em("∥"), " паралельні, ніколи не перетнуться. ", em("⊥"), " перпендикулярні, прямий кут."],
          "Пряма, перпендикулярна до однієї з двох паралельних, перпендикулярна і до другої."
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
          "Zaraz z dwóch półprostych zrobimy kąt.",
          "Później równoległe wrócą w równoległoboku i trapezie."
        ],
        ua: [
          "Зараз із двох півпрямих зробимо кут.",
          "Пізніше паралельні повернуться в паралелограмі і трапеції."
        ]
      }
    }
  ]
};
