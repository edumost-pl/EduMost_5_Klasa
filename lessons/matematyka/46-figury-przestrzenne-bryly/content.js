function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Bryły wokół nas",
        ua: "Тіла навколо нас"
      },
      text: {
        pl: [
          "Pudełko, kostka do gry, dach, puszka, lody, piłka.",
          "Dziś nazywamy bryły, liczymy ściany, krawędzie i wierzchołki — bez objętości ostrosłupa czy walca."
        ],
        ua: [
          "Коробка, гральний кубик, дах, банка, морозиво, м’яч.",
          "Сьогодні називаємо тіла, рахуємо грані, ребра і вершини — без об’єму піраміди чи циліндра."
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
        { pl: "rozpoznać prostopadłościan, sześcian, graniastosłup, ostrosłup, walec, stożek, kulę", ua: "розпізнати прямокутний паралелепіпед, куб, призму, піраміду, циліндр, конус, кулю" },
        { pl: "powiedzieć, ile ścian, krawędzi i wierzchołków ma bryła", ua: "сказати, скільки граней, ребер і вершин має тіло" },
        { pl: "uzasadnić, że prostopadłościan jest graniastosłupem", ua: "обґрунтувати, що прямокутний паралелепіпед є призмою" },
        { pl: "wskazać bryłę, która nie pasuje do grupy", ua: "вказати тіло, яке не пасує до групи" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Przedmiot i nazwa",
        ua: "Предмет і назва"
      },
      text: {
        pl: [
          "Zanim liczysz krawędzie, nazwij kształt.",
          "Pudełko po butach — prostopadłościan. Kostka do gry — sześcian. Puszka — walec."
        ],
        ua: [
          "Перш ніж рахувати ребра, назви форму.",
          "Коробка з-під взуття — прямокутний паралелепіпед. Кубик — куб. Банка — циліндр."
        ]
      },
      items: [
        { pl: "pudełko, cegła, szafa → prostopadłościan", ua: "коробка, цеглина, шафа → прямокутний паралелепіпед" },
        { pl: "kostka do gry, kostka cukru → sześcian", ua: "гральний кубик, цукор-рафінад → куб" },
        { pl: "namiot trójkątny, klin → graniastosłup", ua: "трикутний намет, клин → призма" },
        { pl: "dach, piramida → ostrosłup", ua: "дах, піраміда → піраміда" },
        { pl: "puszka, rura → walec", ua: "банка, труба → циліндр" },
        { pl: "lody w rożku, czapka urodzinowa → stożek", ua: "морозиво в ріжку, ковпак → конус" },
        { pl: "piłka, globus → kula", ua: "м’яч, глобус → куля" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Ściana, krawędź, wierzchołek",
        ua: "Грань, ребро, вершина"
      },
      visual: {
        kind: "quad",
        quad: "rectangle",
        label: { pl: "ściana prostopadłościanu jest prostokątem", ua: "грань прямокутного паралелепіпеда — прямокутник" }
      },
      text: {
        pl: [
          ["Ściana", " to płaska powierzchnia bryły."],
          "Krawędź to odcinek, w którym schodzą się dwie ściany.",
          "Wierzchołek to punkt, w którym schodzą się krawędzie."
        ],
        ua: [
          "Грань — плоска поверхня тіла.",
          "Ребро — відрізок, у якому сходяться дві грані.",
          "Вершина — точка, у якій сходяться ребра."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Sześcian i prostopadłościan",
        ua: "Куб і прямокутний паралелепіпед"
      },
      reveal: true,
      steps: [
        {
          formula: "6 ścian,  12 krawędzi,  8 wierzchołków",
          text: {
            pl: "Sześcian i prostopadłościan mają tyle samo. Różnica: u sześcianu wszystkie krawędzie są równe.",
            ua: "Куб і прямокутний паралелепіпед мають стільки само. Різниця: у куба всі ребра рівні."
          }
        },
        {
          formula: "ściany: prostokąty  (u sześcianu — kwadraty)",
          text: {
            pl: "Każda ściana sześcianu to kwadrat. U prostopadłościanu — prostokąty (niekoniecznie kwadraty).",
            ua: "Кожна грань куба — квадрат. У прямокутного паралелепіпеда — прямокутники (не обов’язково квадрати)."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Graniastosłup i ostrosłup",
        ua: "Призма і піраміда"
      },
      visual: {
        kind: "triangle",
        triangle: "equilateral",
        label: { pl: "podstawa może być trójkątem", ua: "основа може бути трикутником" }
      },
      text: {
        pl: [
          ["Graniastosłup ma ", em("dwie"), " podstawy — wielokąty równoległe i przystające — oraz ściany boczne prostokątne (w graniastosłupie prostym)."],
          ["Ostrosłup ma ", em("jedną"), " podstawę i ściany boczne — trójkąty zbiegające się w jednym wierzchołku."],
          "Walec, stożek i kula mają powierzchnie zakrzywione. Dziś tylko je rozpoznajemy."
        ],
        ua: [
          ["Призма має ", em("дві"), " основи — паралельні й рівні многокутники — і бічні грані-прямокутники (у прямій призмі)."],
          ["Піраміда має ", em("одну"), " основу і бічні грані — трикутники, що сходяться в одній вершині."],
          "Циліндр, конус і куля мають криві поверхні. Сьогодні лише розпізнаємо їх."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Trójkątny graniastosłup i ostrosłup czworokątny",
        ua: "Трикутна призма і чотирикутна піраміда"
      },
      reveal: true,
      steps: [
        {
          formula: "graniastosłup trójkątny:  5 ścian,  9 krawędzi,  6 wierzchołków",
          text: {
            pl: "2 podstawy-trójkąty i 3 prostokąty. 3 + 3 krawędzie podstaw i 3 krawędzie boczne.",
            ua: "2 основи-трикутники і 3 прямокутники. 3 + 3 ребра основ і 3 бічні ребра."
          }
        },
        {
          formula: "ostrosłup o podstawie kwadratu:  5 ścian,  8 krawędzi,  5 wierzchołków",
          text: {
            pl: "1 kwadrat i 4 trójkąty. 4 krawędzie podstawy i 4 krawędzie do wierzchołka.",
            ua: "1 квадрат і 4 трикутники. 4 ребра основи і 4 ребра до вершини."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Prostopadłościan wśród graniastosłupów",
        ua: "Прямокутний паралелепіпед серед призм"
      },
      visual: {
        kind: "quad",
        quad: "rectangle",
        label: { pl: "podstawa — prostokąt", ua: "основа — прямокутник" }
      },
      text: {
        pl: [
          "Prostopadłościan to szczególny graniastosłup prosty.",
          "Jego podstawy są prostokątami, ściany boczne też są prostokątami.",
          "Sześcian jest szczególnym prostopadłościanem — a więc też graniastosłupem."
        ],
        ua: [
          "Прямокутний паралелепіпед — особлива пряма призма.",
          "Його основи — прямокутники, бічні грані теж прямокутники.",
          "Куб — особливий прямокутний паралелепіпед, а отже теж призма."
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
        { pl: "bryła, figura przestrzenna", ua: "тіло, просторова фігура" },
        { pl: "prostopadłościan", ua: "прямокутний паралелепіпед" },
        { pl: "sześcian", ua: "куб" },
        { pl: "graniastosłup", ua: "призма" },
        { pl: "ostrosłup", ua: "піраміда" },
        { pl: "walec, stożek, kula", ua: "циліндр, конус, куля" },
        { pl: "ściana, krawędź, wierzchołek", ua: "грань, ребро, вершина" },
        { pl: "podstawa", ua: "основа" }
      ],
      phrases: [
        { pl: "Nazwij bryłę.", ua: "Назви тіло." },
        { pl: "Ile ścian, krawędzi, wierzchołków?", ua: "Скільки граней, ребер, вершин?" },
        { pl: "Która bryła nie pasuje?", ua: "Яке тіло не пасує?" }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Ile krawędzi ma sześcian?",
        ua: "Скільки ребер у куба?"
      },
      task: {
        id: "bryly-guided-edges",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile krawędzi ma sześcian?",
          ua: "Скільки ребер має куб?"
        },
        answer: 12,
        hint: {
          pl: "Każda z 6 ścian ma 4 krawędzie, ale każdą krawędź liczysz przy dwóch ścianach.",
          ua: "Кожна з 6 граней має 4 ребра, але кожне ребро рахуєш при двох гранях."
        },
        explanation: {
          pl: "(6 · 4) : 2 = 12 krawędzi. Albo: 4 na dole, 4 na górze, 4 pionowe.",
          ua: "(6 · 4) : 2 = 12 ребер. Або: 4 знизу, 4 зверху, 4 вертикальні."
        },
        mistakes: [
          {
            answer: 6,
            feedback: {
              pl: "6 to liczba ścian, nie krawędzi.",
              ua: "6 — це число граней, не ребер."
            }
          },
          {
            answer: 8,
            feedback: {
              pl: "8 to liczba wierzchołków.",
              ua: "8 — це число вершин."
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
        pl: "Puszka po konserwie to prostopadłościan",
        ua: "Банка з-під консервів — прямокутний паралелепіпед"
      },
      text: {
        pl: [
          "Puszka ma podstawy-koła i zakrzywioną ścianę boczną.",
          ["To ", em("walec"), ", nie prostopadłościan."]
        ],
        ua: [
          "Банка має основи-кола і криву бічну поверхню.",
          ["Це ", em("циліндр"), ", не прямокутний паралелепіпед."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Co to za przedmiot?",
        ua: "Що це за предмет?"
      },
      task: {
        id: "bryly-object",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Piłka nożna ma kształt:",
          ua: "Футбольний м’яч має форму:"
        },
        options: [
          { id: "a", label: { pl: "kuli", ua: "кулі" } },
          { id: "b", label: { pl: "stożka", ua: "конуса" } },
          { id: "c", label: { pl: "sześcianu", ua: "куба" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie ma płaskich ścian ani krawędzi.",
          ua: "Немає плоских граней і ребер."
        },
        explanation: {
          pl: "Piłka to kula (w przybliżeniu).",
          ua: "М’яч — куля (наближено)."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Wierzchołki ostrosłupa",
        ua: "Вершини піраміди"
      },
      task: {
        id: "bryly-pyramid-v",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ostrosłup o podstawie kwadratu. Ile ma wierzchołków?",
          ua: "Піраміда з основою-квадратом. Скільки в неї вершин?"
        },
        answer: 5,
        hint: {
          pl: "Cztery w podstawie i jeden na górze.",
          ua: "Чотири в основі і одна зверху."
        },
        explanation: {
          pl: "4 wierzchołki kwadratu + 1 wierzchołek ostrosłupa = 5.",
          ua: "4 вершини квадрата + 1 вершина піраміди = 5."
        }
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Dlaczego prostopadłościan jest graniastosłupem?",
        ua: "Чому прямокутний паралелепіпед є призмою?"
      },
      text: {
        pl: [
          "Wybierz uzasadnienie, nie tylko nazwę."
        ],
        ua: [
          "Вибери обґрунтування, не лише назву."
        ]
      },
      task: {
        id: "bryly-cuboid-prism",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Prostopadłościan jest graniastosłupem, ponieważ:",
          ua: "Прямокутний паралелепіпед є призмою, бо:"
        },
        options: [
          { id: "a", label: { pl: "ma dwie równoległe prostokątne podstawy i prostokątne ściany boczne", ua: "має дві паралельні прямокутні основи і прямокутні бічні грані" } },
          { id: "b", label: { pl: "ma jedną podstawę i trójkątne ściany boczne", ua: "має одну основу і трикутні бічні грані" } },
          { id: "c", label: { pl: "wszystkie jego krawędzie muszą być równe", ua: "усі його ребра мусять бути рівними" } }
        ],
        answer: "a",
        hint: {
          pl: "Graniastosłup: dwie podstawy. Ostrosłup: jedna. Sześcian ma równe krawędzie — prostopadłościan nie musi.",
          ua: "Призма: дві основи. Піраміда: одна. Куб має рівні ребра — паралелепіпед не мусить."
        },
        explanation: {
          pl: "Graniastosłup prosty ma dwie równoległe przystające podstawy i prostokątne ściany boczne. Prostopadłościan tak właśnie wygląda. b to opis ostrosłupa. c to sześcian.",
          ua: "Пряма призма має дві паралельні рівні основи і прямокутні бічні грані. Так виглядає прямокутний паралелепіпед. b — опис піраміди. c — куб."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To opis ostrosłupa: jedna podstawa i trójkąty boczne.",
              ua: "Це опис піраміди: одна основа і бічні трикутники."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Równe krawędzie ma sześcian. Prostopadłościan może mieć krawędzie różnej długości.",
              ua: "Рівні ребра має куб. У паралелепіпеда ребра можуть бути різної довжини."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Ściany graniastosłupa",
        ua: "Грані призми"
      },
      text: {
        pl: [
          "Graniastosłup trójkątny prosty."
        ],
        ua: [
          "Пряма трикутна призма."
        ]
      },
      task: {
        id: "bryly-prism-faces",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile ścian ma graniastosłup trójkątny?",
          ua: "Скільки граней має трикутна призма?"
        },
        answer: 5,
        hint: {
          pl: "Dwie podstawy i tyle ścian bocznych, ile boków podstawy.",
          ua: "Дві основи і стільки бічних граней, скільки сторін основи."
        },
        explanation: {
          pl: "2 trójkąty + 3 prostokąty = 5 ścian.",
          ua: "2 трикутники + 3 прямокутники = 5 граней."
        }
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Która bryła nie pasuje?",
        ua: "Яке тіло не пасує?"
      },
      text: {
        pl: [
          "Trzy z nich mają tylko płaskie ściany. Jedna — nie."
        ],
        ua: [
          "Три з них мають лише плоскі грані. Одне — ні."
        ]
      },
      task: {
        id: "bryly-odd-one",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która bryła nie pasuje do pozostałych?",
          ua: "Яке тіло не пасує до решти?"
        },
        options: [
          { id: "a", label: { pl: "sześcian", ua: "куб" } },
          { id: "b", label: { pl: "prostopadłościan", ua: "прямокутний паралелепіпед" } },
          { id: "c", label: { pl: "kula", ua: "куля" } }
        ],
        answer: "c",
        hint: {
          pl: "Która nie ma ścian, krawędzi ani wierzchołków?",
          ua: "Яке не має граней, ребер і вершин?"
        },
        explanation: {
          pl: "Sześcian i prostopadłościan to graniastosłupy (wielościany). Kula nie ma płaskich ścian — nie pasuje.",
          ua: "Куб і прямокутний паралелепіпед — призми (многогранники). Куля не має плоских граней — не пасує."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Sześcian jest szczególnym prostopadłościanem. Pasuje do grupy wielościanów.",
              ua: "Куб — особливий прямокутний паралелепіпед. Пасує до групи многогранників."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Prostopadłościan ma 6 prostokątnych ścian. Pasuje do sześcianu, nie do kuli.",
              ua: "Паралелепіпед має 6 прямокутних граней. Пасує до куба, не до кулі."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Sześcian",
        ua: "Чи вже вмію? Куб"
      },
      task: {
        id: "bryly-check-cube",
        type: "input-number",
        level: "A",
        question: {
          pl: "Ile ścian ma sześcian?",
          ua: "Скільки граней має куб?"
        },
        answer: 6,
        hint: {
          pl: "Jak kostka do gry.",
          ua: "Як гральний кубик."
        },
        explanation: {
          pl: "Sześcian ma 6 ścian.",
          ua: "Куб має 6 граней."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Przedmiot",
        ua: "Чи вже вмію? Предмет"
      },
      task: {
        id: "bryly-check-cone",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Rożek do lodów ma kształt:",
          ua: "Ріжок для морозива має форму:"
        },
        options: [
          { id: "a", label: { pl: "stożka", ua: "конуса" } },
          { id: "b", label: { pl: "walca", ua: "циліндра" } },
          { id: "c", label: { pl: "ostrosłupa", ua: "піраміди" } }
        ],
        answer: "a",
        hint: {
          pl: "Okrągła podstawa i spiczasty wierzchołek. Ściany boczne nie są trójkątami płaskimi jak w ostrosłupie.",
          ua: "Кругла основа і гостра вершина. Бічна поверхня не з плоских трикутників, як у піраміди."
        },
        explanation: {
          pl: "Rożek to stożek. Walec ma dwie podstawy-koła. Ostrosłup ma wielokątną podstawę.",
          ua: "Ріжок — конус. Циліндр має дві основи-кола. Піраміда має многокутну основу."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      text: {
        pl: [
          "Sześcian i prostopadłościan: 6 ścian, 12 krawędzi, 8 wierzchołków.",
          "Prostopadłościan to graniastosłup o prostokątnych podstawach.",
          "Ostrosłup — jedna podstawa. Walec, stożek, kula — powierzchnie zakrzywione. Objętości tych brył dziś nie liczymy."
        ],
        ua: [
          "Куб і прямокутний паралелепіпед: 6 граней, 12 ребер, 8 вершин.",
          "Прямокутний паралелепіпед — призма з прямокутними основами.",
          "Піраміда — одна основа. Циліндр, конус, куля — криві поверхні. Об’єми цих тіл сьогодні не рахуємо."
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
          "Następnie: objętość i pojemność, potem objętość samego prostopadłościanu.",
          "Nazwy brył zostaną — przy siatkach znów je usłyszysz."
        ],
        ua: [
          "Далі: об’єм і місткість, потім об’єм самого прямокутного паралелепіпеда.",
          "Назви тіл залишаться — на розгортках знову їх почуєш."
        ]
      }
    }
  ]
};
