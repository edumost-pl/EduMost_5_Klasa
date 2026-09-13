function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pudełka w pudełkach",
        ua: "Коробки в коробках"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "kwadrat — gość w kilku rodzinach", ua: "квадрат — гість у кількох родинах" }
      },
      text: {
        pl: [
          "Kwadrat jest prostokątem. I rombem. I równoległobokiem. I czworokątem.",
          "To nie magia — to wkładanie mniejszej szufladki do większej.",
          "Dziś ułożymy te szufladki i policzymy osie symetrii."
        ],
        ua: [
          "Квадрат є прямокутником. І ромбом. І паралелограмом. І чотирикутником.",
          "Це не магія — це вкладання меншої шухлядки в більшу.",
          "Сьогодні складемо ці шухлядки і полічимо осі симетрії."
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
        { pl: "czytać diagram: kwadrat ⊂ romb i kwadrat ⊂ prostokąt ⊂ równoległobok", ua: "читати діаграму: квадрат ⊂ ромб і квадрат ⊂ прямокутник ⊂ паралелограм" },
        { pl: "odróżnić „każdy A jest B” od „każdy B jest A”", ua: "відрізнити «кожен A є B» від «кожен B є A»" },
        { pl: "policzyć osie symetrii wybranych czworokątów", ua: "полічити осі симетрії вибраних чотирикутників" },
        { pl: "wskazać zdanie, które jest zawsze prawdziwe", ua: "вказати речення, яке завжди правильне" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Kwadrat spełnia oba warunki",
        ua: "Квадрат виконує обидві умови"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "równe boki i kąty proste", ua: "рівні сторони і прямі кути" }
      },
      text: {
        pl: [
          "Romb: wszystkie boki równe. Kwadrat to ma.",
          "Prostokąt: wszystkie kąty proste. Kwadrat to ma.",
          "Więc kwadrat siedzi w obu szufladkach naraz."
        ],
        ua: [
          "Ромб: усі сторони рівні. Квадрат це має.",
          "Прямокутник: усі кути прямі. Квадрат це має.",
          "Отже квадрат сидить в обох шухлядках разом."
        ]
      },
      prompt: {
        pl: [
          "Nie każdy romb jest kwadratem — brakuje kątów prostych.",
          "Nie każdy prostokąt jest kwadratem — brakuje równych boków."
        ],
        ua: [
          "Не кожен ромб є квадратом — бракує прямих кутів.",
          "Не кожен прямокутник є квадратом — бракує рівних сторін."
        ]
      }
    },
    {
      type: "classification",
      heading: {
        pl: "Diagram klasy 5",
        ua: "Діаграма 5 класу"
      },
      items: [
        { pl: "czworokąt", ua: "чотирикутник" },
        { pl: "→ trapez (dokładnie 1 para ∥) — obok, nie wewnątrz równoległoboku", ua: "→ трапеція (рівно 1 пара ∥) — поруч, не всередині паралелограма" },
        { pl: "→ równoległobok (2 pary ∥)", ua: "→ паралелограм (2 пари ∥)" },
        { pl: "→ → prostokąt (kąty proste) oraz romb (równe boki)", ua: "→ → прямокутник (прямі кути) і ромб (рівні сторони)" },
        { pl: "→ → → kwadrat = prostokąt i romb jednocześnie", ua: "→ → → квадрат = прямокутник і ромб одночасно" }
      ],
      text: {
        pl: [
          ["Czytamy: ", em("każdy kwadrat jest rombem"), " i ", em("każdy kwadrat jest prostokątem"), "."],
          "Każdy prostokąt i każdy romb jest równoległobokiem.",
          "Trapez stoi obok równoległoboku — oba są czworokątami, żaden nie chowa się w drugim."
        ],
        ua: [
          ["Читаємо: ", em("кожен квадрат є ромбом"), " і ", em("кожен квадрат є прямокутником"), "."],
          "Кожен прямокутник і кожен ромб є паралелограмом.",
          "Трапеція стоїть поруч із паралелограмом — обидва чотирикутники, жоден не ховається в другому."
        ]
      }
    },
    {
      type: "visual",
      heading: {
        pl: "Cztery figury — cztery szufladki",
        ua: "Чотири фігури — чотири шухлядки"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "parallelogram",
            label: { pl: "równoległobok", ua: "паралелограм" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "rectangle",
            label: { pl: "prostokąt ⊂ równoległobok", ua: "прямокутник ⊂ паралелограм" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "rhombus",
            label: { pl: "romb ⊂ równoległobok", ua: "ромб ⊂ паралелограм" }
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "square",
            label: { pl: "kwadrat ⊂ romb i ⊂ prostokąt", ua: "квадрат ⊂ ромб і ⊂ прямокутник" }
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Osie symetrii",
        ua: "Осі симетрії"
      },
      text: {
        pl: [
          ["", em("Oś symetrii"), " to kreska, wzdłuż której możesz złożyć figurę na pół tak, by połówki się pokryły."],
          ["Kwadrat: ", em("4"), " osie (dwie przez środki boków, dwie przekątne)."],
          ["Prostokąt, który nie jest kwadratem: ", em("2"), " osie (przez środki przeciwległych boków, nie przekątne)."],
          ["Romb, który nie jest kwadratem: ", em("2"), " osie (przekątne)."],
          ["Równoległobok „zwykły”: ", em("0"), " osi."],
          ["Trapez równoramienny: ", em("1"), " oś (przez środki podstaw)."]
        ],
        ua: [
          ["", em("Вісь симетрії"), " — риска, вздовж якої можна скласти фігуру навпіл так, щоб половинки збіглися."],
          ["Квадрат: ", em("4"), " осі (дві через середини сторін, дві діагоналі)."],
          ["Прямокутник, який не є квадратом: ", em("2"), " осі (через середини протилежних сторін, не діагоналі)."],
          ["Ромб, який не є квадратом: ", em("2"), " осі (діагоналі)."],
          ["«Звичайний» паралелограм: ", em("0"), " осей."],
          ["Рівнобедрена трапеція: ", em("1"), " вісь (через середини основ)."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Złóż na pół",
        ua: "Склади навпіл"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "rectangle",
            label: { pl: "prostokąt — 2 osie", ua: "прямокутник — 2 осі" }
          },
          text: {
            pl: "Złożenie wzdłuż przekątnej prostokąta nie pokrywa połówek — przekątna nie jest osią.",
            ua: "Складання вздовж діагоналі прямокутника не накриває половинок — діагональ не є віссю."
          }
        },
        {
          visual: {
            kind: "quad",
            quad: "square",
            label: { pl: "kwadrat — 4 osie", ua: "квадрат — 4 осі" }
          },
          text: {
            pl: "W kwadracie przekątne już działają. Dlatego osi jest więcej.",
            ua: "У квадраті діагоналі вже працюють. Тому осей більше."
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
        { pl: "czworokąt", ua: "чотирикутник" },
        { pl: "klasyfikacja", ua: "класифікація" },
        { pl: "oś symetrii", ua: "вісь симетрії" },
        { pl: "każdy kwadrat jest rombem", ua: "кожен квадрат є ромбом" },
        { pl: "nie każdy romb jest kwadratem", ua: "не кожен ромб є квадратом" }
      ],
      phrases: [
        { pl: "Czy każdy A jest B?", ua: "Чи кожен A є B?" },
        { pl: "Ile osi symetrii ma ta figura?", ua: "Скільки осей симетрії має ця фігура?" },
        { pl: "Które zdanie jest zawsze prawdziwe?", ua: "Яке речення завжди правильне?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Czytanie diagramu",
        ua: "Читання діаграми"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "kwadrat", ua: "квадрат" }
      },
      task: {
        id: "czwor-guided-square",
        type: "true-false",
        level: "A",
        question: {
          pl: "Każdy kwadrat jest rombem.",
          ua: "Кожен квадрат є ромбом."
        },
        answer: true,
        hint: {
          pl: "Czy kwadrat ma wszystkie boki równe? To definicja rombu.",
          ua: "Чи квадрат має всі сторони рівні? Це означення ромба."
        },
        explanation: {
          pl: "Tak. Kwadrat ma cztery równe boki, więc jest rombem. Dodatkowo ma kąty proste.",
          ua: "Так. Квадрат має чотири рівні сторони, отже є ромбом. Додатково має прямі кути."
        }
      }
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "Każdy romb jest kwadratem.",
        ua: "Кожен ромб є квадратом."
      },
      visual: {
        kind: "quad",
        quad: "rhombus",
        label: { pl: "równe boki, kąty nieproste", ua: "рівні сторони, кути непрямі" }
      },
      text: {
        pl: [
          "Odwróciłeś strzałkę w diagramie.",
          "Kwadrat ⊂ romb, ale romb nie chowa się w kwadracie.",
          "Romb bez kątów prostych nie jest kwadratem."
        ],
        ua: [
          "Перевернув стрілку на діаграмі.",
          "Квадрат ⊂ ромб, але ромб не ховається в квадраті.",
          "Ромб без прямих кутів не є квадратом."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Osie prostokąta",
        ua: "Осі прямокутника"
      },
      visual: {
        kind: "quad",
        quad: "rectangle",
        label: { pl: "prostokąt (nie kwadrat)", ua: "прямокутник (не квадрат)" }
      },
      task: {
        id: "czwor-prac-axes-rect",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile osi symetrii ma prostokąt, który nie jest kwadratem? Wpisz liczbę.",
          ua: "Скільки осей симетрії має прямокутник, який не є квадратом? Введи число."
        },
        answer: 2,
        hint: {
          pl: "Złóż wzdłuż linii przez środki dłuższych boków. I przez środki krótszych. Przekątne nie działają.",
          ua: "Склади вздовж лінії через середини довших сторін. І через середини коротших. Діагоналі не працюють."
        },
        explanation: {
          pl: "2 osie. Przekątne prostokąta (nie-kwadratu) nie są osiami symetrii.",
          ua: "2 осі. Діагоналі прямокутника (не-квадрата) не є осями симетрії."
        },
        mistakes: [
          {
            answer: 4,
            feedback: {
              pl: "4 osie ma kwadrat. W wydłużonym prostokącie przekątne nie składają figury na pół.",
              ua: "4 осі має квадрат. У видовженому прямокутнику діагоналі не складають фігуру навпіл."
            }
          },
          {
            answer: 0,
            feedback: {
              pl: "Prostokąt da się złożyć na pół pionowo i poziomo.",
              ua: "Прямокутник можна скласти навпіл вертикально і горизонтально."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Osie równoległoboku",
        ua: "Осі паралелограма"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "równoległobok „ześlizgnięty”", ua: "«зсунутий» паралелограм" }
      },
      task: {
        id: "czwor-prac-axes-para",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile osi symetrii ma równoległobok, który nie jest ani prostokątem, ani rombem? Wpisz liczbę.",
          ua: "Скільки осей симетрії має паралелограм, який не є ні прямокутником, ні ромбом? Введи число."
        },
        answer: 0,
        hint: {
          pl: "Spróbuj złożyć na pół. Połówki rozjeżdżają się.",
          ua: "Спробуй скласти навпіл. Половинки роз’їжджаються."
        },
        explanation: {
          pl: "0. Zwykły równoległobok nie ma osi symetrii. (Ma środek symetrii — ale to nie oś.)",
          ua: "0. Звичайний паралелограм не має осей симетрії. (Має центр симетрії — але це не вісь.)"
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Kwadrat i prostokąt",
        ua: "Квадрат і прямокутник"
      },
      text: {
        pl: [
          "W diagramie strzałka idzie od węższego do szerszego:",
          "kwadrat → prostokąt → równoległobok → czworokąt."
        ],
        ua: [
          "На діаграмі стрілка йде від вужчого до ширшого:",
          "квадрат → прямокутник → паралелограм → чотирикутник."
        ]
      },
      task: {
        id: "czwor-prob-rect",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy prostokąt jest kwadratem.",
          ua: "Кожен прямокутник є квадратом."
        },
        answer: false,
        hint: {
          pl: "Czy każdy prostokąt ma wszystkie boki równe?",
          ua: "Чи кожен прямокутник має всі сторони рівні?"
        },
        explanation: {
          pl: "Nie. Prostokąt może mieć różne boki (dłuższe i krótsze). Kwadrat jest szczególnym prostokątem.",
          ua: "Ні. Прямокутник може мати різні сторони (довші і коротші). Квадрат — особливий прямокутник."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Gdzie stoi trapez?",
        ua: "Де стоїть трапеція?"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "1 para ∥", ua: "1 пара ∥" }
      },
      text: {
        pl: [
          "Uczeń włożył trapez do szufladki „równoległobok”, bo „ma równoległe boki”."
        ],
        ua: [
          "Учень поклав трапецію в шухлядку «паралелограм», бо «має паралельні сторони»."
        ]
      },
      task: {
        id: "czwor-prob-trap",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy trapez jest równoległobokiem.",
          ua: "Кожна трапеція є паралелограмом."
        },
        answer: false,
        hint: {
          pl: "Ile par równoległych ma trapez? A ile równoległobok?",
          ua: "Скільки пар паралельних має трапеція? А скільки паралелограм?"
        },
        explanation: {
          pl: "Nie. Trapez ma jedną parę, równoległobok dwie. W diagramie klasy 5 trapez stoi obok, nie wewnątrz równoległoboku.",
          ua: "Ні. Трапеція має одну пару, паралелограм дві. На діаграмі 5 класу трапеція стоїть поруч, не всередині паралелограма."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Które zdanie jest zawsze prawdziwe?",
        ua: "Яке речення завжди правильне?"
      },
      text: {
        pl: [
          "Sprawdź każde zdanie na diagramie. Szukaj takiego, którego nie da się odwrócić w fałsz."
        ],
        ua: [
          "Перевір кожне речення на діаграмі. Шукай таке, яке не можна перевернути у хибність."
        ]
      },
      task: {
        id: "czwor-chall-always",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zawsze prawdziwe?",
          ua: "Яке речення завжди правильне?"
        },
        options: [
          { id: "a", label: { pl: "Każdy romb jest kwadratem.", ua: "Кожен ромб є квадратом." } },
          { id: "b", label: { pl: "Każdy kwadrat jest rombem.", ua: "Кожен квадрат є ромбом." } },
          { id: "c", label: { pl: "Każdy prostokąt jest kwadratem.", ua: "Кожен прямокутник є квадратом." } }
        ],
        answer: "b",
        hint: {
          pl: "Idź od mniejszej szufladki do większej: kwadrat ma wszystko, czego wymaga romb.",
          ua: "Йди від меншої шухлядки до більшої: квадрат має все, чого вимагає ромб."
        },
        explanation: {
          pl: "Każdy kwadrat ma równe boki, więc jest rombem. Odwrotnie nie: romb bez kątów 90° nie jest kwadratem. Prostokąt bez równych boków nie jest kwadratem.",
          ua: "Кожен квадрат має рівні сторони, отже є ромбом. Навпаки ні: ромб без кутів 90° не є квадратом. Прямокутник без рівних сторін не є квадратом."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "To odwrócona strzałka. Romb ⊄ kwadrat.",
              ua: "Це перевернута стрілка. Ромб ⊄ квадрат."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Prostokąt o bokach 3 i 5 nie jest kwadratem.",
              ua: "Прямокутник зі сторонами 3 і 5 не є квадратом."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Osie kwadratu",
        ua: "Чи вже вмію? Осі квадрата"
      },
      visual: {
        kind: "quad",
        quad: "square",
        label: { pl: "kwadrat", ua: "квадрат" }
      },
      task: {
        id: "czwor-check-axes",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile osi symetrii ma kwadrat? Wpisz liczbę.",
          ua: "Скільки осей симетрії має квадрат? Введи число."
        },
        answer: 4,
        hint: {
          pl: "Dwie przez środki boków, dwie przekątne.",
          ua: "Дві через середини сторін, дві діагоналі."
        },
        explanation: {
          pl: "Kwadrat ma 4 osie symetrii.",
          ua: "Квадрат має 4 осі симетрії."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Zawsze",
        ua: "Чи вже вмію? Завжди"
      },
      task: {
        id: "czwor-check-always",
        type: "true-false",
        level: "B",
        question: {
          pl: "Każdy kwadrat jest prostokątem.",
          ua: "Кожен квадрат є прямокутником."
        },
        answer: true,
        hint: {
          pl: "Czy kwadrat ma wszystkie kąty proste?",
          ua: "Чи квадрат має всі прямі кути?"
        },
        explanation: {
          pl: "Tak. Kwadrat ma kąty proste, więc jest prostokątem (i rombem, i równoległobokiem).",
          ua: "Так. Квадрат має прямі кути, отже є прямокутником (і ромбом, і паралелограмом)."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "kwadrat ⊂ romb    kwadrat ⊂ prostokąt ⊂ równoległobok",
      text: {
        pl: [
          "Czytaj diagram od środka na zewnątrz: każdy kwadrat jest rombem i prostokątem.",
          "Nie odwrotnie.",
          ["Osie: kwadrat ", em("4"), ", prostokąt ", em("2"), ", romb ", em("2"), ", zwykły równoległobok ", em("0"), ", trapez równoramienny ", em("1"), "."],
          "Trapez stoi obok równoległoboku."
        ],
        ua: [
          "Читай діаграму від середини назовні: кожен квадрат є ромбом і прямокутником.",
          "Не навпаки.",
          ["Осі: квадрат ", em("4"), ", прямокутник ", em("2"), ", ромб ", em("2"), ", звичайний паралелограм ", em("0"), ", рівнобедрена трапеція ", em("1"), "."],
          "Трапеція стоїть поруч із паралелограмом."
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
          "Później te same figury wrócą przy polu i przy siatkach graniastosłupów.",
          "Diagram czworokątów zostaje — tylko dokładamy liczby."
        ],
        ua: [
          "Пізніше ті самі фігури повернуться при площі і при сітках призм.",
          "Діаграма чотирикутників лишається — лише додаємо числа."
        ]
      }
    }
  ]
};
