function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Tylko jedna para szyn",
        ua: "Лише одна пара рейок"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "trapez", ua: "трапеція" }
      },
      text: {
        pl: [
          "Równoległobok miał dwie pary boków równoległych.",
          "Teraz zostawiamy tylko jedną parę — jak krawędź stołu i krawędź blatu, które idą obok siebie, a nogi już nie.",
          "Taki czworokąt nazywamy trapezem."
        ],
        ua: [
          "Паралелограм мав дві пари паралельних сторін.",
          "Тепер лишаємо лише одну пару — як край столу і край стільниці, що йдуть поруч, а ніжки вже ні.",
          "Такий чотирикутник називаємо трапецією."
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
        { pl: "rozpoznać trapez: dokładnie jedna para boków równoległych", ua: "розпізнати трапецію: рівно одна пара паралельних сторін" },
        { pl: "wskazać podstawy i ramiona", ua: "вказати основи і бічні сторони" },
        { pl: "rozpoznać trapez prostokątny i równoramienny", ua: "розпізнати прямокутну і рівнобедрену трапецію" },
        { pl: "odpowiedzieć, czy trapez może być równoległobokiem", ua: "відповісти, чи трапеція може бути паралелограмом" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Górna i dolna — równoległe. Boki — nie",
        ua: "Верхня і нижня — паралельні. Бічні — ні"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "jedna para ∥", ua: "одна пара ∥" }
      },
      text: {
        pl: [
          "Górny bok i dolny biegną jak dwie szyny. Nigdy się nie zetkną.",
          "Lewe ramię i prawe ramię — już nie. Gdyby je przedłużyć, spotkałyby się."
        ],
        ua: [
          "Верхня сторона і нижня біжать як дві рейки. Ніколи не зустрінуться.",
          "Ліве рамено і праве — вже ні. Якби їх продовжити, вони б зустрілися."
        ]
      },
      prompt: {
        pl: [
          "Policz pary równoległych.",
          "Jedna para — trapez. Dwie pary — to już równoległobok, nie trapez."
        ],
        ua: [
          "Полічи пари паралельних.",
          "Одна пара — трапеція. Дві пари — це вже паралелограм, не трапеція."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Definicja z podręcznika",
        ua: "Означення з підручника"
      },
      formula: "trapez  =  dokładnie jedna para boków ∥",
      text: {
        pl: [
          ["", em("Trapez"), " to czworokąt, który ma ", em("dokładnie jedną"), " parę boków równoległych."],
          ["Te dwa boki równoległe to ", em("podstawy"), "."],
          ["Pozostałe dwa boki to ", em("ramiona"), "."],
          "W tej lekcji równoległobok nie jest trapezem — ma dwie pary, a nie jedną."
        ],
        ua: [
          ["", em("Трапеція"), " — чотирикутник, який має ", em("рівно одну"), " пару паралельних сторін."],
          ["Ці дві паралельні сторони — ", em("основи"), "."],
          ["Дві інші сторони — ", em("бічні сторони"), " (рамена)."],
          "На цьому уроці паралелограм не є трапецією — має дві пари, а не одну."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Prostokątny i równoramienny",
        ua: "Прямокутна і рівнобедрена"
      },
      text: {
        pl: [
          ["", em("Trapez prostokątny"), " ma dwa kąty proste. Jedno ramię stoi prostopadle do podstaw."],
          ["", em("Trapez równoramienny"), " ma ramiona równe. Kąty przy tej samej podstawie są równe."]
        ],
        ua: [
          ["", em("Прямокутна трапеція"), " має два прямі кути. Одне рамено стоїть перпендикулярно до основ."],
          ["", em("Рівнобедрена трапеція"), " має рівні рамена. Кути при тій самій основі рівні."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Nazwij części",
        ua: "Назви частини"
      },
      reveal: true,
      steps: [
        {
          visual: {
            kind: "quad",
            quad: "trapezoid",
            label: { pl: "góra i dół — podstawy", ua: "верх і низ — основи" }
          },
          text: {
            pl: "Krótszy górny i dłuższy dolny są równoległe. To podstawy.",
            ua: "Коротша верхня і довша нижня паралельні. Це основи."
          }
        },
        {
          text: {
            pl: ["Lewe i prawe nachylone boki to ramiona. Nie są równoległe."],
            ua: ["Ліва і права похилі сторони — рамена. Вони не паралельні."]
          }
        }
      ]
    },
    {
      type: "comparison",
      heading: {
        pl: "Trapez a równoległobok",
        ua: "Трапеція і паралелограм"
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "dwie pary ∥ — nie trapez", ua: "дві пари ∥ — не трапеція" }
      },
      prompt: {
        pl: [
          "Równoległobok wygląda „podobnie”, ale ma drugą parę równoległych.",
          "W klasie 5 mówimy: to już nie trapez."
        ],
        ua: [
          "Паралелограм виглядає «схоже», але має другу пару паралельних.",
          "У 5 класі кажемо: це вже не трапеція."
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
        { pl: "trapez", ua: "трапеція" },
        { pl: "podstawy trapezu", ua: "основи трапеції" },
        { pl: "ramiona trapezu", ua: "бічні сторони трапеції" },
        { pl: "trapez prostokątny", ua: "прямокутна трапеція" },
        { pl: "trapez równoramienny", ua: "рівнобедрена трапеція" }
      ],
      phrases: [
        { pl: "Wskaż podstawy i ramiona trapezu.", ua: "Вкажи основи і бічні сторони трапеції." },
        { pl: "Czy ten czworokąt jest trapezem?", ua: "Чи цей чотирикутник є трапецією?" },
        { pl: "Czy trapez może być równoległobokiem?", ua: "Чи трапеція може бути паралелограмом?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile par równoległych?",
        ua: "Скільки пар паралельних?"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "trapez", ua: "трапеція" }
      },
      task: {
        id: "trap-guided-pairs",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile par boków równoległych ma trapez? Wpisz liczbę.",
          ua: "Скільки пар паралельних сторін має трапеція? Введи число."
        },
        answer: 1,
        hint: {
          pl: "Dokładnie jedna. Nie zero i nie dwie.",
          ua: "Рівно одна. Не нуль і не дві."
        },
        explanation: {
          pl: "Trapez ma dokładnie jedną parę boków równoległych.",
          ua: "Трапеція має рівно одну пару паралельних сторін."
        },
        mistakes: [
          {
            answer: 2,
            feedback: {
              pl: "Dwie pary to równoległobok. W naszym podręczniku to nie jest trapez.",
              ua: "Дві пари — це паралелограм. У нашому підручнику це не трапеція."
            }
          },
          {
            answer: 0,
            feedback: {
              pl: "Zero par równoległych to zwykły czworokąt, nie trapez.",
              ua: "Нуль пар паралельних — звичайний чотирикутник, не трапеція."
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
        pl: "Każdy równoległobok jest trapezem, bo ma boki równoległe.",
        ua: "Кожен паралелограм є трапецією, бо має паралельні сторони."
      },
      visual: {
        kind: "quad",
        quad: "parallelogram",
        label: { pl: "za dużo par ∥", ua: "забагато пар ∥" }
      },
      text: {
        pl: [
          ["Słowo kluczowe: ", em("dokładnie jedna"), " para."],
          "Równoległobok ma dwie. Więc według tej definicji nie jest trapezem."
        ],
        ua: [
          ["Ключове слово: ", em("рівно одна"), " пара."],
          "Паралелограм має дві. Отже за цим означенням не є трапецією."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Co jest podstawą?",
        ua: "Що є основою?"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "góra ∥ dół", ua: "верх ∥ низ" }
      },
      task: {
        id: "trap-prac-bases",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które boki trapezu nazywamy podstawami?",
          ua: "Які сторони трапеції називаємо основами?"
        },
        options: [
          { id: "a", label: { pl: "dwa boki równoległe", ua: "дві паралельні сторони" } },
          { id: "b", label: { pl: "dwa boki, które nie są równoległe", ua: "дві сторони, які не паралельні" } },
          { id: "c", label: { pl: "zawsze dwa najdłuższe boki", ua: "завжди дві найдовші сторони" } }
        ],
        answer: "a",
        hint: {
          pl: "Podstawy to ta jedyna para równoległych. Jedna bywa krótsza.",
          ua: "Основи — та єдина пара паралельних. Одна буває коротшою."
        },
        explanation: {
          pl: "Podstawy = boki równoległe. Nie muszą być oba długie: jedna podstawa często jest krótsza. Ramiona to te nierównoległe.",
          ua: "Основи = паралельні сторони. Не мусять обидві бути довгими: одна основа часто коротша. Рамена — ті, що не паралельні."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To ramiona, nie podstawy.",
              ua: "Це рамена, не основи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krótszy górny bok też jest podstawą, jeśli jest równoległy do dolnego.",
              ua: "Коротша верхня сторона теж є основою, якщо вона паралельна до нижньої."
            }
          }
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Równoramienny",
        ua: "Рівнобедрена"
      },
      task: {
        id: "trap-prac-iso",
        type: "true-false",
        level: "B",
        question: {
          pl: "W trapezie równoramiennym ramiona są równe.",
          ua: "У рівнобедреній трапеції бічні сторони рівні."
        },
        answer: true,
        hint: {
          pl: "Tak jak w trójkącie równoramiennym: dwa ramiona tej samej długości.",
          ua: "Як у рівнобедреному трикутнику: два рамена тієї самої довжини."
        },
        explanation: {
          pl: "Tak. Równe ramiona. Przy tym kąty przy tej samej podstawie są równe.",
          ua: "Так. Рівні рамена. При цьому кути при тій самій основі рівні."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Ramię przy stole",
        ua: "Рамено біля столу"
      },
      text: {
        pl: [
          "Blat i krawędź podłogi pod oknem idą równolegle.",
          "Jedna noga stołu stoi prosto, druga jest ukośna jak podpórka."
        ],
        ua: [
          "Стільниця і край підлоги під вікном ідуть паралельно.",
          "Одна ніжка столу стоїть прямо, друга навскіс як підпора."
        ]
      },
      task: {
        id: "trap-prob-right",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak nazywamy trapez, w którym jedno ramię jest prostopadłe do podstaw?",
          ua: "Як називаємо трапецію, в якій одне рамено перпендикулярне до основ?"
        },
        options: [
          { id: "a", label: { pl: "równoramienny", ua: "рівнобедрена" } },
          { id: "b", label: { pl: "prostokątny", ua: "прямокутна" } },
          { id: "c", label: { pl: "równoboczny", ua: "рівностороння" } }
        ],
        answer: "b",
        hint: {
          pl: "Prostopadłe ramię tworzy kąty proste z podstawami.",
          ua: "Перпендикулярне рамено утворює прямі кути з основами."
        },
        explanation: {
          pl: "To trapez prostokątny: dwa kąty proste przy pionowym ramieniu.",
          ua: "Це прямокутна трапеція: два прямі кути при вертикальному рамені."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Czy ramiona mogą być równoległe?",
        ua: "Чи рамена можуть бути паралельними?"
      },
      text: {
        pl: [
          "Gdyby ramiona też były równoległe, dostałbyś drugą parę szyn."
        ],
        ua: [
          "Якби рамена теж були паралельні, отримав би другу пару рейок."
        ]
      },
      task: {
        id: "trap-prob-legs",
        type: "true-false",
        level: "B",
        question: {
          pl: "W trapezie ramiona są równoległe.",
          ua: "У трапеції бічні сторони паралельні."
        },
        answer: false,
        hint: {
          pl: "Gdyby były, miałbyś dwie pary równoległych.",
          ua: "Якби були, мав би дві пари паралельних."
        },
        explanation: {
          pl: "Nie. Ramiona nie są równoległe. Równoległe są tylko podstawy.",
          ua: "Ні. Рамена не паралельні. Паралельні лише основи."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy trapez bywa równoległobokiem?",
        ua: "Чи трапеція буває паралелограмом?"
      },
      text: {
        pl: [
          "Złóż obie definicje. Jedna mówi „dokładnie jedna para”, druga „dwie pary”.",
          "Czy da się spełnić obie naraz?"
        ],
        ua: [
          "Склади обидва означення. Одне каже «рівно одна пара», друге «дві пари».",
          "Чи можна виконати обидва разом?"
        ]
      },
      task: {
        id: "trap-chall-para",
        type: "true-false",
        level: "C",
        question: {
          pl: "Trapez (według definicji z tej lekcji) może być równoległobokiem.",
          ua: "Трапеція (за означенням цього уроку) може бути паралелограмом."
        },
        answer: false,
        hint: {
          pl: "Jedna para i dwie pary naraz się wykluczają.",
          ua: "Одна пара і дві пари разом виключають одне одного."
        },
        explanation: {
          pl: "Nie. Trapez ma dokładnie jedną parę boków równoległych. Równoległobok ma dwie. Żaden czworokąt nie ma jednocześnie jednej i dwóch par.",
          ua: "Ні. Трапеція має рівно одну пару паралельних сторін. Паралелограм має дві. Жоден чотирикутник не має одночасно однієї і двох пар."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Definicja",
        ua: "Чи вже вмію? Означення"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "trapez", ua: "трапеція" }
      },
      task: {
        id: "trap-check-def",
        type: "true-false",
        level: "A",
        question: {
          pl: "Trapez ma dokładnie jedną parę boków równoległych.",
          ua: "Трапеція має рівно одну пару паралельних сторін."
        },
        answer: true,
        hint: {
          pl: "To definicja z tej lekcji.",
          ua: "Це означення з цього уроку."
        },
        explanation: {
          pl: "Tak. Jedna para — podstawy. Druga para to ramiona, nierównoległe.",
          ua: "Так. Одна пара — основи. Друга пара — рамена, непаралельні."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Rodzaj",
        ua: "Чи вже вмію? Вид"
      },
      task: {
        id: "trap-check-iso",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Trapez ma równe ramiona i równe kąty przy dolnej podstawie. Jakim trapezem jest?",
          ua: "Трапеція має рівні рамена і рівні кути при нижній основі. Якою трапецією вона є?"
        },
        options: [
          { id: "a", label: { pl: "prostokątnym", ua: "прямокутною" } },
          { id: "b", label: { pl: "równoramiennym", ua: "рівнобедреною" } },
          { id: "c", label: { pl: "równoległobokiem", ua: "паралелограмом" } }
        ],
        answer: "b",
        hint: {
          pl: "Równe ramiona — jak w trójkącie równoramiennym.",
          ua: "Рівні рамена — як у рівнобедреному трикутнику."
        },
        explanation: {
          pl: "To trapez równoramienny. Prostokątny potrzebuje kątów prostych. Równoległobokiem nie jest, bo ma tylko jedną parę równoległych.",
          ua: "Це рівнобедрена трапеція. Прямокутній потрібні прямі кути. Паралелограмом не є, бо має лише одну пару паралельних."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      visual: {
        kind: "quad",
        quad: "trapezoid",
        label: { pl: "podstawy ∥ , ramiona nie", ua: "основи ∥ , рамена ні" }
      },
      text: {
        pl: [
          ["Trapez: ", em("dokładnie jedna"), " para boków równoległych."],
          "Te boki to podstawy. Pozostałe — ramiona.",
          "Bywa prostokątny (ramię ⊥ podstawy) albo równoramienny (równe ramiona).",
          "Nie jest równoległobokiem."
        ],
        ua: [
          ["Трапеція: ", em("рівно одна"), " пара паралельних сторін."],
          "Ці сторони — основи. Решта — рамена.",
          "Буває прямокутна (рамено ⊥ основи) або рівнобедрена (рівні рамена).",
          "Не є паралелограмом."
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
          "Następnie ułożymy czworokąty w diagram: kto w kim się mieści.",
          "Kwadrat w rombie i w prostokącie. Trapez obok równoległoboku."
        ],
        ua: [
          "Далі складемо чотирикутники в діаграму: хто в кому вміщається.",
          "Квадрат у ромбі і в прямокутнику. Трапеція поруч із паралелограмом."
        ]
      }
    }
  ]
};
