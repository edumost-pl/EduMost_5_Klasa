function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Pudełko rozłożone na stole",
        ua: "Коробка, розкладена на столі"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "sześć prostokątów, które da się złożyć", ua: "шість прямокутників, які можна скласти" }
      },
      text: {
        pl: [
          "Siatka to rysunek ścian ułożonych obok siebie tak, by dało się je złożyć w bryłę.",
          "Dziś: które sześć prostokątów złoży się w prostopadłościan, a które nie."
        ],
        ua: [
          "Розгортка — рисунок граней поруч так, щоб їх можна було скласти в тіло.",
          "Сьогодні: які шість прямокутників складуться в прямокутний паралелепіпед, а які ні."
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
        { pl: "rozpoznać siatkę prostopadłościanu", ua: "розпізнати розгортку прямокутного паралелепіпеда" },
        { pl: "sprawdzić, czy jest 6 prostokątów, które nie nachodzą na siebie po złożeniu", ua: "перевірити, чи є 6 прямокутників, які не накладаються після складання" },
        { pl: "odrzucić fałszywą siatkę", ua: "відкинути хибну розгортку" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Krzyż z ramionami",
        ua: "Хрест із раменами"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "4 prostokąty w rzędzie i 2 po bokach", ua: "4 прямокутники в ряду і 2 з боків" }
      },
      prompt: {
        pl: [
          "Cztery ściany w jednym pasie to „pasek dookoła”.",
          "Dwie pozostałe — pokrywa i dno — przyklejone do paska.",
          "Po złożeniu nic nie nachodzi na siebie."
        ],
        ua: [
          "Чотири грані в одній смузі — «поясок навколо».",
          "Дві решти — кришка і дно — приклеєні до пояска.",
          "Після складання ніщо не накладається."
        ]
      }
    },
    {
      type: "concept",
      heading: {
        pl: "Sześć prostokątów, które się składają",
        ua: "Шість прямокутників, які складаються"
      },
      text: {
        pl: [
          "Prostopadłościan ma 6 ścian: trzy pary przeciwległych prostokątów.",
          "W siatce te pary nie mogą po złożeniu trafić w to samo miejsce.",
          "Ściany muszą stykać się krawędzią — nie tylko wierzchołkiem."
        ],
        ua: [
          "Прямокутний паралелепіпед має 6 граней: три пари протилежних прямокутників.",
          "У розгортці ці пари після складання не можуть потрапити в те саме місце.",
          "Грані мають стикатися ребром — не лише вершиною."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Poprawna siatka",
        ua: "Правильна розгортка"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "da się złożyć", ua: "можна скласти" }
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Jest 6 prostokątów. Pas z czterech ścian i dwa skrzydła.",
            ua: "Є 6 прямокутників. Пояс із чотирьох граней і два крила."
          }
        },
        {
          text: {
            pl: ["Po złożeniu każda para przeciwległych ścian ląduje naprzeciwko. To ", em("siatka"), "."],
            ua: ["Після складання кожна пара протилежних граней опиняється навпроти. Це ", em("розгортка"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Fałszywa siatka",
        ua: "Хибна розгортка"
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "siódma ściana — za dużo", ua: "сьома грань — забагато" }
      },
      text: {
        pl: [
          "Za dużo ścian: prostopadłościan ma ich 6, nie 7.",
          "Inny błąd: ściany nachodzą po złożeniu albo „dziura” — brakuje pokrywy.",
          "Czerwony prostokąt na rysunku nie pasuje do pudełka."
        ],
        ua: [
          "Забагато граней: у паралелепіпеда їх 6, не 7.",
          "Інша помилка: грані накладаються після складання або «дірка» — бракує кришки.",
          "Червоний прямокутник на рисунку не пасує до коробки."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Dlaczego ta nie złoży się?",
        ua: "Чому ця не складеться?"
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "nie złoży się w prostopadłościan", ua: "не складеться в прямокутний паралелепіпед" }
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Policz prostokąty. Jest ich siedem.",
            ua: "Полічи прямокутники. Їх сім."
          }
        },
        {
          text: {
            pl: ["Siódma ściana nie ma gdzie się podziać — nachodzi albo wystaje. To ", em("nie"), " jest siatka prostopadłościanu."],
            ua: ["Сьомій грані нікуди подітися — накладається або стирчить. Це ", em("не"), " розгортка прямокутного паралелепіпеда."]
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
        { pl: "siatka bryły", ua: "розгортка тіла" },
        { pl: "ściana, prostokąt", ua: "грань, прямокутник" },
        { pl: "złożyć / rozłożyć", ua: "скласти / розкласти" },
        { pl: "nachodzić na siebie", ua: "накладатися" }
      ],
      phrases: [
        { pl: "Czy tę siatkę da się złożyć?", ua: "Чи цю розгортку можна скласти?" },
        { pl: "Która siatka jest fałszywa?", ua: "Яка розгортка хибна?" },
        { pl: "Policz ściany.", ua: "Полічи грані." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile ścian na siatce?",
        ua: "Скільки граней на розгортці?"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "poprawna siatka", ua: "правильна розгортка" }
      },
      task: {
        id: "siat-prost-guided-6",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile prostokątów musi mieć siatka prostopadłościanu?",
          ua: "Скільки прямокутників мусить мати розгортка прямокутного паралелепіпеда?"
        },
        answer: 6,
        hint: {
          pl: "Tyle, ile ścian ma pudełko.",
          ua: "Стільки, скільки граней у коробки."
        },
        explanation: {
          pl: "Prostopadłościan ma 6 ścian, więc siatka ma 6 prostokątów.",
          ua: "Паралелепіпед має 6 граней, отже розгортка має 6 прямокутників."
        },
        mistakes: [
          {
            answer: 7,
            feedback: {
              pl: "Siedem to za dużo — taka figura nie złoży się w pudełko.",
              ua: "Сім — забагато: така фігура не складеться в коробку."
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
        pl: "Każde 6 prostokątów ułożonych obok siebie to siatka",
        ua: "Будь-які 6 прямокутників поруч — це розгортка"
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "układ też może być zły", ua: "розташування теж може бути поганим" }
      },
      text: {
        pl: [
          "Liczba 6 jest konieczna, ale nie wystarcza.",
          "Jeśli po złożeniu ściany nachodzą albo brakuje krawędzi styku — to nie siatka."
        ],
        ua: [
          "Число 6 необхідне, але недостатнє.",
          "Якщо після складання грані накладаються або бракує ребра стику — це не розгортка."
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Czy złoży się?",
        ua: "Чи складеться?"
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "pasek z czterech i dwa skrzydła", ua: "смуга з чотирьох і два крила" }
      },
      task: {
        id: "siat-prost-folds",
        type: "true-false",
        level: "A",
        question: {
          pl: "Czy narysowaną siatkę da się złożyć w prostopadłościan?",
          ua: "Чи нарисовану розгортку можна скласти в прямокутний паралелепіпед?"
        },
        answer: true,
        hint: {
          pl: "Policz prostokąty. Czy jest ich 6? Czy wygląda jak pasek z pokrywą i dnem?",
          ua: "Полічи прямокутники. Чи їх 6? Чи схоже на смугу з кришкою і дном?"
        },
        explanation: {
          pl: "Tak. 6 prostokątów: 4 w pasie i 2 po bokach — klasyczna siatka pudełka.",
          ua: "Так. 6 прямокутників: 4 в смузі і 2 з боків — класична розгортка коробки."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Za dużo ścian",
        ua: "Забагато граней"
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "wystaje dodatkowy prostokąt", ua: "стирчить додатковий прямокутник" }
      },
      task: {
        id: "siat-prost-too-many",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy ten rysunek jest siatką prostopadłościanu?",
          ua: "Чи цей рисунок є розгорткою прямокутного паралелепіпеда?"
        },
        answer: false,
        hint: {
          pl: "Policz wszystkie prostokąty, łącznie z czerwonym.",
          ua: "Полічи всі прямокутники, разом із червоним."
        },
        explanation: {
          pl: "Nie. Jest 7 prostokątów. Prostopadłościan ma ich 6.",
          ua: "Ні. Є 7 прямокутників. У паралелепіпеда їх 6."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Sześcian też ma siatkę",
        ua: "Куб теж має розгортку"
      },
      text: {
        pl: [
          "Sześcian to szczególny prostopadłościan: wszystkie ściany są kwadratami.",
          "Siatka sześcianu to 6 kwadratów, które da się złożyć."
        ],
        ua: [
          "Куб — особливий прямокутний паралелепіпед: усі грані — квадрати.",
          "Розгортка куба — 6 квадратів, які можна скласти."
        ]
      },
      visual: {
        kind: "net",
        variant: "true",
        label: { pl: "układ jak dla pudełka — tu ściany są kwadratami", ua: "розташування як для коробки — тут грані квадрати" }
      },
      task: {
        id: "siat-prost-cube-net",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile kwadratów ma siatka sześcianu?",
          ua: "Скільки квадратів має розгортка куба?"
        },
        answer: 6,
        hint: {
          pl: "Tyle, ile ścian.",
          ua: "Стільки, скільки граней."
        },
        explanation: {
          pl: "Sześcian ma 6 ścian-kwadratów, więc siatka ma 6 kwadratów.",
          ua: "Куб має 6 граней-квадратів, отже розгортка має 6 квадратів."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Pary ścian",
        ua: "Пари граней"
      },
      text: {
        pl: [
          "W prostopadłościanie przeciwległe ściany są takie same.",
          "W siatce szukasz trzech par: 2 + 2 + 2."
        ],
        ua: [
          "У паралелепіпеді протилежні грані однакові.",
          "У розгортці шукаєш три пари: 2 + 2 + 2."
        ]
      },
      task: {
        id: "siat-prost-pairs",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Ile par jednakowych ścian ma prostopadłościan (niebędący sześcianem)?",
          ua: "Скільки пар однакових граней має прямокутний паралелепіпед (який не є кубом)?"
        },
        options: [
          { id: "a", label: { pl: "3 pary", ua: "3 пари" } },
          { id: "b", label: { pl: "6 par", ua: "6 пар" } },
          { id: "c", label: { pl: "1 para", ua: "1 пара" } }
        ],
        answer: "a",
        hint: {
          pl: "Przód-tył, lewo-prawo, góra-dół.",
          ua: "Перед-зад, ліво-право, верх-низ."
        },
        explanation: {
          pl: "Trzy pary: dwie podstawy, dwie „dłuższe” boki, dwie „krótsze” boki.",
          ua: "Три пари: дві основи, два «довші» боки, два «коротші» боки."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która siatka się nie złoży?",
        ua: "Яка розгортка не складеться?"
      },
      text: {
        pl: [
          "Porównaj dwa rysunki w głowie: 6 ścian w krzyżu kontra 7 ścian z dodatkowym prostokątem."
        ],
        ua: [
          "Порівняй два рисунки в голові: 6 граней хрестом проти 7 граней з додатковим прямокутником."
        ]
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "ten układ ma za dużo ścian", ua: "це розташування має забагато граней" }
      },
      task: {
        id: "siat-prost-wont-fold",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która siatka nie złoży się w prostopadłościan?",
          ua: "Яка розгортка не складеться в прямокутний паралелепіпед?"
        },
        options: [
          { id: "a", label: { pl: "4 prostokąty w rzędzie i 2 przyklejone do drugiego od lewej (góra i dół)", ua: "4 прямокутники в ряду і 2 приклеєні до другого зліва (верх і низ)" } },
          { id: "b", label: { pl: "ten sam układ plus siódmy prostokąt z boku", ua: "те саме розташування плюс сьомий прямокутник збоку" } },
          { id: "c", label: { pl: "pasek z 4 prostokątów i dwa skrzydła przy trzecim", ua: "смуга з 4 прямокутників і два крила біля третього" } }
        ],
        answer: "b",
        hint: {
          pl: "Prostopadłościan ma dokładnie 6 ścian.",
          ua: "Паралелепіпед має рівно 6 граней."
        },
        explanation: {
          pl: "Siódma ściana nie ma miejsca na pudełku. Układy a i c to klasyczne siatki z 6 prostokątów.",
          ua: "Сьомій грані немає місця на коробці. Розташування a і c — класичні розгортки з 6 прямокутників."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "To poprawny krzyż: 4 w pasie i 2 skrzydła. Złoży się.",
              ua: "Це правильний хрест: 4 в смузі і 2 крила. Складеться."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrzydła przy innym prostokącie paska też bywają poprawne, byle było 6 ścian bez nachodzenia.",
              ua: "Крила біля іншого прямокутника смуги теж можуть бути правильні, аби було 6 граней без накладання."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Liczba ścian",
        ua: "Чи вже вмію? Число граней"
      },
      task: {
        id: "siat-prost-check-6",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile prostokątów jest w siatce prostopadłościanu?",
          ua: "Скільки прямокутників у розгортці прямокутного паралелепіпеда?"
        },
        answer: 6,
        hint: {
          pl: "Tyle ścian ma pudełko.",
          ua: "Стільки граней у коробки."
        },
        explanation: {
          pl: "6 prostokątów.",
          ua: "6 прямокутників."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Fałszywa siatka",
        ua: "Чи вже вмію? Хибна розгортка"
      },
      visual: {
        kind: "net",
        variant: "false",
        label: { pl: "dodatkowy prostokąt", ua: "додатковий прямокутник" }
      },
      task: {
        id: "siat-prost-check-false",
        type: "true-false",
        level: "B",
        question: {
          pl: "Czy rysunek z dodatkowym (czerwonym) prostokątem złoży się w prostopadłościan?",
          ua: "Чи рисунок із додатковим (червоним) прямокутником складеться в прямокутний паралелепіпед?"
        },
        answer: false,
        hint: {
          pl: "Policz ściany.",
          ua: "Полічи грані."
        },
        explanation: {
          pl: "Nie złoży się: jest 7 ścian zamiast 6.",
          ua: "Не складеться: є 7 граней замість 6."
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
        kind: "net",
        variant: "true",
        label: { pl: "6 prostokątów, które się składają", ua: "6 прямокутників, які складаються" }
      },
      text: {
        pl: [
          "Siatka prostopadłościanu: 6 prostokątów, trzy pary, bez nachodzenia po złożeniu.",
          "Siódma ściana albo nachodzące pokrywy — to nie siatka."
        ],
        ua: [
          "Розгортка паралелепіпеда: 6 прямокутників, три пари, без накладання після складання.",
          "Сьома грань або кришки, що накладаються, — це не розгортка."
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
          "Następna lekcja: siatki graniastosłupów — dwie podstawy i prostokąty boczne.",
          "Prostopadłościan już znasz: to szczególny graniastosłup."
        ],
        ua: [
          "Наступний урок: розгортки призм — дві основи і бічні прямокутники.",
          "Прямокутний паралелепіпед уже знаєш: це особлива призма."
        ]
      }
    }
  ]
};
