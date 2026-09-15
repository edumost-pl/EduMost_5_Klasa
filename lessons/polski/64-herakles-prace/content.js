function emT64(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T64 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT64(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T64 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 122–128  ·  Lekcja 64  ·  12 prac",
    promptPlace: "before",
    prompt: {
      pl: "Druga część tematu: **12 prac** Heraklesa, kolejność, uzasadnienie nagrody na Olimpie, heros dziś, własny tekst. Mit i cechy herosa — w T63. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга частина теми: **12 праць** Геракла, порядок, обґрунтування нагороди на Олімпі, heros сьогодні, власний текст. Міф і риси herosa — у T63. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "podam kolejność 12 prac;", ua: "назву порядок 12 праць;" },
      { pl: "uzasadnię decyzję bogów o Olimpie;", ua: "обґрунтую рішення богів про Олімп;" },
      { pl: "napiszę własny tekst o Heraklesie.", ua: "напишу власний текст про Геракла." }
    ],
    task: {
      id: "t64-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Kolejność i treść 12 prac", ua: "Порядок і зміст 12 праць" } },
        { id: "b", label: { pl: "Uzasadnienie wiecznego życia na Olimpie", ua: "Обґрунтування вічного життя на Олімпі" } },
        { id: "c", label: { pl: "Tylko definicję herosa od zera (to T63)", ua: "Лише означення herosa з нуля (це T63)" } },
        { id: "d", label: { pl: "Własny tekst kreatywny (opowiadanie / prasa / pamiętnik)", ua: "Власний креативний текст (оповідання / преса / щоденник)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Notatka o herosie była w T63.",
        ua: "Нотатка про herosa була в T63."
      },
      explanation: {
        pl: "A, B, D. C = T63.",
        ua: "A, B, D. C = T63."
      }
    }
  },

  // 2 — 12 prac ilustracja
  {
    type: "observe",
    heading: { pl: "12 prac Heraklesa · przegląd", ua: "12 праць Геракла · огляд" },
    formula: "s. 128  ·  ilustracja",
    promptPlace: "before",
    prompt: {
      pl: "Kliknij planszę — 12 obrazków. To prace dla króla **Eurysteusza**.",
      ua: "Клацни планшет — 12 малюнків. Це праці для царя **Еврістея**."
    },
    visual: vizGhT64("t64-12prac.jpg", {
      alt: { pl: "Plansza: 12 prac Heraklesa", ua: "Планшет: 12 праць Геракла" },
      place: "after"
    }),
    items: [
      { pl: "Na planszy: lew, hydra, łania, dzik, stajnie, ptaki…", ua: "На планшеті: лев, гідра, лань, кабан, стайні, птахи…" },
      { pl: "…byk, klacze, pas Hipolity, byki Geriona, jabłka, Cerber.", ua: "…бик, кобили, пояс Іпполіти, бики Геріона, яблука, Цербер." },
      { pl: "Kolejność numerów — na następnym ekranie.", ua: "Порядок номерів — на наступному екрані." }
    ],
    task: {
      id: "t64-s02-przeglad",
      type: "single-choice",
      question: {
        pl: "Dla kogo Herakles wykonywał 12 prac?",
        ua: "Для кого Геракл виконував 12 праць?"
      },
      options: [
        { id: "a", label: { pl: "dla króla Eurysteusza", ua: "для царя Еврістея" } },
        { id: "b", label: { pl: "dla Fileasa Fogga", ua: "для Філеаса Фоґґа" } },
        { id: "c", label: { pl: "dla Nessosa centaura", ua: "для кентавра Несса" } }
      ],
      answer: "a",
      hint: {
        pl: "Pokuta / służba ziemskiemu królowi.",
        ua: "Покута / служба земному цареві."
      },
      explanation: {
        pl: "12 prac = odpokutowanie u Eurysteusza w Mykenach.",
        ua: "12 праць = спокута в Еврістея в Мікенах."
      }
    }
  },

  // 3 — kolejność
  {
    type: "practice",
    heading: { pl: "Kolejność prac", ua: "Порядок праць" },
    formula: "s. 128  ·  kolejność",
    promptPlace: "before",
    prompt: {
      pl: "Ustal kolejność. Silniki *sort* nie używamy — wybierz poprawny ciąg.",
      ua: "Встанови порядок. Обери правильний ланцюжок."
    },
    items: [
      { pl: "Zapamiętaj początek: lew → hydra → łania → dzik…", ua: "Запам’ятай початок: лев → гідра → лань → кабан…" },
      { pl: "Koniec: jabłka Hesperyd → Cerber z Hadesu.", ua: "Кінець: яблука Гесперид → Цербер з Аїду." }
    ],
    task: {
      id: "t64-s03-kolejnosc",
      type: "single-choice",
      question: {
        pl: "Która kolejność pierwszych czterech prac jest poprawna?",
        ua: "Який порядок перших чотирьох праць правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "lew nemejski → hydra lernejska → łania Artemidy → dzik erymantejski",
            ua: "немейський лев → лернейська гідра → лань Артеміди → ериманфський кабан"
          }
        },
        {
          id: "b",
          label: {
            pl: "Cerber → jabłka → lew → hydra",
            ua: "Цербер → яблука → лев → гідра"
          }
        },
        {
          id: "c",
          label: {
            pl: "stajnie Augiasza → lew → pas Hipolity → hydra",
            ua: "стайні Авгія → лев → пояс Іпполіти → гідра"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Pierwsza praca = lew nemejski (w micie szczegółowo).",
        ua: "Перша праця = немейський лев (у міфі докладно)."
      },
      explanation: {
        pl: "1 lew · 2 hydra · 3 łania · 4 dzik · 5 stajnie · 6 ptaki · 7 byk · 8 klacze · 9 pas · 10 byki Geriona · 11 jabłka · 12 Cerber.",
        ua: "1 лев · 2 гідра · 3 лань · 4 кабан · 5 стайні · 6 птахи · 7 бик · 8 кобили · 9 пояс · 10 бики · 11 яблука · 12 Цербер."
      }
    }
  },

  // 4 — zad 2
  {
    type: "practice",
    heading: { pl: "Zad. 2 · jedna praca do zapamiętania", ua: "Завд. 2 · одна праця напам’ять" },
    formula: "s. 128  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Na ilustracji (styl wazowy) — 12 prac. Wybierz jedną i zapisz najważniejsze fakty. Skan — kliknij.",
      ua: "На ілюстрації (стиль вази) — 12 праць. Обери одну й запиши найважливіші факти. Скан — клікни."
    },
    visual: vizGhT64("t64-zad2.jpg", {
      alt: { pl: "Zad. 2: 12 prac w stylu czarnofigurowym", ua: "Завд. 2: 12 праць у чорнофігурному стилі" },
      place: "after"
    }),
    items: [
      { pl: "Dla wybranej pracy: kto/co, gdzie, jak Herakles zwyciężył, ciekawostka.", ua: "Для обраної праці: хто/що, де, як Геракл переміг, цікавинка." },
      { pl: "Przykład (lew): skóra nieprzebijalna → uduszenie; skóra = płaszcz.", ua: "Приклад (лев): шкіра непробивна → удушення; шкіра = плащ." }
    ],
    task: {
      id: "t64-s04-jedna",
      type: "multiple-choice",
      question: {
        pl: "Które informacje o **lwie nemejskim** warto zapamiętać? Zaznacz wszystkie.",
        ua: "Які відомості про **немейського лева** варто запам’ятати? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "strzały i maczuga nie pomagały — skóra jak zbroja", ua: "стріли й булава не допомагали — шкіра як броня" } },
        { id: "b", label: { pl: "Herakles udusił lwa gołymi rękami", ua: "Геракл задушив лева голими руками" } },
        { id: "c", label: { pl: "lew mieszkał spokojnie w ogrodzie Hesperyd", ua: "лев спокійно жив у саду Гесперид" } },
        { id: "d", label: { pl: "ze skóry zrobił hełm/płaszcz", ua: "зі шкіри зробив шолом/плащ" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Fragment o Mrocznej Jaskini w Nemei (T63).",
        ua: "Уривок про Темну печеру в Немеї (T63)."
      },
      explanation: {
        pl: "A, B, D. C myli z jabłkami Hesperyd / innym miejscem.",
        ua: "A, B, D. C плутає з яблуками Гесперид / іншим місцем."
      }
    }
  },

  // 5 — trudność / wybrane prace
  {
    type: "practice",
    heading: { pl: "Wybrane prace · trudność", ua: "Обрані праці · складність" },
    formula: "s. 128  ·  porównanie",
    promptPlace: "before",
    prompt: {
      pl: "Krótko: co jest trudne w hydrze, stajniach, Cerberze?",
      ua: "Коротко: що складного в гідрі, стайнях, Цербері?"
    },
    items: [
      { pl: "Hydra: wiele głów (odrastały).", ua: "Гідра: багато голів (відростали)." },
      { pl: "Stajnie Augiasza: pomysł (rzeka), nie tylko siła.", ua: "Стайні Авгія: ідея (річка), не лише сила." },
      { pl: "Cerber: zejście do Hadesu — granica świata żywych.", ua: "Цербер: спуск до Аїду — межа світу живих." }
    ],
    task: {
      id: "t64-s05-trudnosc",
      type: "single-choice",
      question: {
        pl: "Która praca prowadzi Heraklesa do świata zmarłych?",
        ua: "Яка праця веде Геракла у світ мертвих?"
      },
      options: [
        { id: "a", label: { pl: "porwanie Cerbera z Hadesu", ua: "викрадення Цербера з Аїду" } },
        { id: "b", label: { pl: "oczyszczenie stajni Augiasza", ua: "очищення стаєнь Авгія" } },
        { id: "c", label: { pl: "upolowanie dzika erymantejskiego", ua: "полювання на ериманфського кабана" } }
      ],
      answer: "a",
      hint: {
        pl: "Ostatnia, dwunasta praca.",
        ua: "Остання, дванадцята праця."
      },
      explanation: {
        pl: "12. praca = Cerber z Hadesu — szczyt odwagi i ryzyka.",
        ua: "12-та праця = Цербер з Аїду — вершина відваги й ризику."
      }
    }
  },

  // 6 — zad 3 Olimp
  {
    type: "practice",
    heading: { pl: "Zad. 3 · uzasadnienie bogów", ua: "Завд. 3 · обґрунтування богів" },
    formula: "s. 128  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "W imieniu bogów napiszcie uzasadnienie nagrodzenia Heraklesa wiecznym życiem na Olimpie.",
      ua: "Від імені богів напишіть обґрунтування нагородження Геракла вічним життям на Олімпі."
    },
    visual: vizGhT64("t64-zad3.png", {
      alt: { pl: "Zad. 3: uzasadnienie Olimpu", ua: "Завд. 3: обґрунтування Олімпу" },
      place: "after"
    }),
    items: [
      { pl: "Wykorzystaj: 12 prac · wybór Cnoty · cierpienie · pomoc ludziom · półbóg.", ua: "Використай: 12 праць · вибір Чесноти · страждання · допомога людям · напівбог." },
      { pl: "Wzór argumentów — po *Sprawdź*; najpierw napisz sam.", ua: "Зразок аргументів — після *Sprawdź*; спочатку напиши сам." }
    ],
    task: {
      id: "t64-s06-olimp",
      type: "open-answer",
      question: {
        pl: "Napisz 5–8 zdań uzasadnienia **w imieniu bogów** (dlaczego Herakles zasługuje na Olimp).",
        ua: "Напиши 5–8 речень обґрунтування **від імені богів** (чому Геракл заслуговує на Олімп)."
      },
      hint: {
        pl: "My: „Postanawiamy… bo…”. Wspomnij prace i cierpienie.",
        ua: "Ми: «Постановляємо… бо…». Згадай праці і страждання."
      },
      explanation: {
        pl: "Klucz merytoryczny: wybrał Cnotę; 12 prac ponad siły człowieka; chronił ludzi; cierpiał jak śmiertelnik; półbóg Zeus+Alkmena → apoteoza zasłużona.",
        ua: "Змістовий ключ: обрав Чесноту; 12 праць понад сили людини; захищав людей; страждав як смертний; напівбог Зевс+Алкмена → заслужений апофеоз."
      }
    }
  },

  // 7 — zad 4 współczesny
  {
    type: "practice",
    heading: { pl: "Zad. 4 · heros dziś?", ua: "Завд. 4 · heros сьогодні?" },
    formula: "s. 128  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Przedyskutujcie: czy Herakles mógłby być bohaterem dla współczesnych ludzi? Uzasadnijcie.",
      ua: "Обговоріть: чи міг би Геракл бути героєм для сучасних людей? Обґрунтуйте."
    },
    visual: vizGhT64("t64-zad4.png", {
      alt: { pl: "Zad. 4: bohater współczesny", ua: "Завд. 4: сучасний герой" },
      place: "after"
    }),
    items: [
      { pl: "Tak: odwaga, pomoc słabszym, wytrwałość mimo błędów.", ua: "Так: відвага, допомога слабшим, витривалість попри помилки." },
      { pl: "Nie / częściowo: przemoc, inny świat — ale wartości (Cnota) nadal aktualne.", ua: "Ні / частково: насильство, інший світ — але цінності (Чеснота) досі актуальні." }
    ],
    task: {
      id: "t64-s07-dzis",
      type: "open-answer",
      question: {
        pl: "Napisz 4–6 zdań: TAK / NIE / CZĘŚCIOWO + uzasadnienie (odwołaj się do mitu).",
        ua: "Напиши 4–6 речень: ТАК / НІ / ЧАСТКОВО + обґрунтування (посилайся на міф)."
      },
      hint: {
        pl: "Wspomnij wybór Cnoty albo 12 prac albo ludzkie słabości.",
        ua: "Згадай вибір Чесноти або 12 праць або людські слабкості."
      },
      explanation: {
        pl: "Ocena: jasne stanowisko + 1–2 argumenty z mitu (nie tylko „bo lubię”).",
        ua: "Оцінка: чітка позиція + 1–2 аргументи з міфу (не лише «бо подобається»)."
      }
    }
  },

  // 8 — zad 5 creative
  {
    type: "practice",
    heading: { pl: "Zad. 5 · wybierz jedno zadanie", ua: "Завд. 5 · обери одне завдання" },
    formula: "s. 128  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Wykonaj **jedno** z czterech zadań kreatywnych. Skan poleceń — kliknij.",
      ua: "Виконай **одне** з чотирьох креативних завдань. Скан завдань — клікни."
    },
    visual: vizGhT64("t64-zad5.png", {
      alt: { pl: "Zad. 5: cztery opcje pisania", ua: "Завд. 5: чотири варіанти письма" },
      place: "after"
    }),
    items: [
      { pl: "A) wymyślona 13. praca · B) tekst prasowy (Herakles dziś)", ua: "A) вигадана 13-та праця · B) текст у пресі (Геракл сьогодні)" },
      { pl: "C) kartka z pamiętnika Heraklesa · D) opowiadanie od *Dzisiaj naprawdę zapragnęłam/em…*", ua: "C) сторінка зі щоденника Геракла · D) оповідання від *Dzisiaj naprawdę zapragnęłam/em…*" }
    ],
    task: {
      id: "t64-s08-kreatywne",
      type: "open-answer",
      question: {
        pl: "Napisz wybrany tekst (ok. 8–12 zdań). Na początku zaznacz literę A/B/C/D.",
        ua: "Напиши обраний текст (бл. 8–12 речень). На початку познач літеру A/B/C/D."
      },
      hint: {
        pl: "Trzymaj się konwencji: prasa = nagłówek; pamiętnik = 1. os.; 13. praca = miticzny styl.",
        ua: "Тримай конвенцію: преса = заголовок; щоденник = 1 ос.; 13-та праця = міфічний стиль."
      },
      explanation: {
        pl: "Ocena: wybrana forma · związek z Heraklesem · poprawny polski · domknięcie.",
        ua: "Оцінка: обрана форма · зв’язок із Гераклом · правильна польська · завершеність."
      }
    }
  },

  // 9 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T64", ua: "Підсумок · T64" },
    formula: "s. 122–128  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Domknij temat Heraklesa.",
      ua: "Закрий тему Геракла."
    },
    items: [
      { pl: "12 prac = próba przekraczająca siły człowieka.", ua: "12 праць = випробування понад сили людини." },
      { pl: "Bogowie nagradzają Olimpem za czyny + cierpienie.", ua: "Боги нагороджують Олімпом за вчинки + страждання." },
      { pl: "Heros może inspirować także dziś (wartości Cnoty).", ua: "Heros може надихати й сьогодні (цінності Чесноти)." },
      emT64("T63 = heros · T64 = prace i teksty własne")
    ],
    task: {
      id: "t64-s09-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Ostatnią z 12 prac było porwanie Cerbera z Hadesu.”",
        ua: "Чи твердження правильне? «Останньою з 12 праць було викрадення Цербера з Аїду.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Plansza: ostatni obrazek — Cerber.",
        ua: "Планшет: останній малюнок — Цербер."
      },
      explanation: {
        pl: "Prawda — 12. praca = Cerber.",
        ua: "Правда — 12-та праця = Цербер."
      }
    }
  }
]};
