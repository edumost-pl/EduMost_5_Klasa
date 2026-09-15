function emT63(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T63 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT63(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T63 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 122–128  ·  Lekcja 63  ·  heros",
    promptPlace: "before",
    prompt: {
      pl: "Pierwsza część tematu: mit o **Heraklesie** (Nikos Chadzinikolau). Kim jest **heros**, skąd pochodzi bohater, jaki wybór zrobił, jakie ma cechy. **12 prac** — w T64. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Перша частина теми: міф про **Геракла**. Хто такий **heros**, звідки герой, який вибір зробив, які риси. **12 праць** — у T64. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opowiem o wydarzeniach z mitu;", ua: "розкажу про події з міфу;" },
      { pl: "wyjaśnię, kto to heros (półbóg);", ua: "поясню, хто такий heros (напівбог);" },
      { pl: "zbiorę cechy boskie i ludzkie Heraklesa.", ua: "зберу божественні й людські риси Геракла." }
    ],
    task: {
      id: "t63-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam mit o Heraklesie", ua: "Читаю міф про Геракла" } },
        { id: "b", label: { pl: "Uczę się, kim jest heros, i zbieram cechy", ua: "Вчуся, хто такий heros, і збираю риси" } },
        { id: "c", label: { pl: "Tylko numeruję wszystkie 12 prac (to T64)", ua: "Лише нумерую всі 12 праць (це T64)" } },
        { id: "d", label: { pl: "Analizuję wybór Cnoty i stosunek do rodziców", ua: "Аналізую вибір Чесноти і ставлення до батьків" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Kolejność 12 prac → T64.",
        ua: "Порядок 12 праць → T64."
      },
      explanation: {
        pl: "A, B, D. Pełna kolejność prac — w T64.",
        ua: "A, B, D. Повний порядок праць — у T64."
      }
    }
  },

  // 2 intro
  {
    type: "observe",
    heading: { pl: "Wstęp · popularny heros", ua: "Вступ · популярний heros" },
    formula: "s. 122  ·  dymki",
    promptPlace: "before",
    prompt: {
      pl: "Zanim czytasz — co warto wiedzieć o Heraklesie w starożytnym świecie?",
      ua: "Перш ніж читати — що варто знати про Геракла в античному світі?"
    },
    items: [
      { pl: "Był bardzo popularnym **herosem** — wiele miast miało o nim własne historie.", ua: "Був дуже популярним **herosом** — багато міст мали про нього власні історії." },
      { pl: "W mitologii rzymskiej = **Herkules**.", ua: "У римській міфології = **Геркулес (Herkules)**." },
      { pl: "Tytuł fragmentu: *Pokonać każdą przeszkodę*.", ua: "Заголовок уривка: *Подолати кожну перешкоду*." }
    ],
    task: {
      id: "t63-s02-wstep",
      type: "single-choice",
      question: {
        pl: "Jak Rzymianie nazywali Heraklesa?",
        ua: "Як римляни називали Геракла?"
      },
      options: [
        { id: "a", label: { pl: "Herkules", ua: "Herkules (Геркулес)" } },
        { id: "b", label: { pl: "Fileas Fogg", ua: "Fileas Fogg" } },
        { id: "c", label: { pl: "Zeus", ua: "Zeus" } }
      ],
      answer: "a",
      hint: {
        pl: "Dymki na s. 122.",
        ua: "Хмарка на с. 122."
      },
      explanation: {
        pl: "Grecki Herakles = rzymski Herkules.",
        ua: "Грецький Геракл = римський Геркулес."
      }
    }
  },

  // 3 czytanie
  {
    type: "observe",
    heading: { pl: "Czytamy · Mit o Heraklesie", ua: "Читаємо · Міф про Геракла" },
    formula: "s. 122–128  ·  fragment  ·  N. Chadzinikolau",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj mit. Siedem skanów — klikaj, by powiększyć. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Прочитай міф. Сім сканів — клікай, щоб збільшити. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź: narodziny → węże → Tejrezjasz → Linos → Kitajron → rozdroże → Teby → lew → 12 prac → Dejanira → Olimp.", ua: "Слідкуй: народження → змії → Тейресій → Лінос → Кітерон → роздоріжжя → Фіви → лев → 12 праць → Деяніра → Олімп." },
      { pl: "Zwróć uwagę: siła (boska) i błędy / cierpienie (ludzkie).", ua: "Зверни увагу: сила (божественна) і помилки / страждання (людські)." }
    ],
    task: {
      id: "t63-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Co zrobił ośmiomiesięczny Herakles z wężami Hery?",
        ua: "Що зробив восьмимісячний Геракл зі зміями Гери?"
      },
      options: [
        { id: "a", label: { pl: "udusił je w kołysce", ua: "задушив їх у колисці" } },
        { id: "b", label: { pl: "uciekł z nimi na Olimp", ua: "втік із ними на Олімп" } },
        { id: "c", label: { pl: "oddał je Eurysteuszowi", ua: "віддав їх Еврістею" } }
      ],
      answer: "a",
      hint: {
        pl: "Początek mitu — znak boskiej siły.",
        ua: "Початок міфу — знак божественної сили."
      },
      explanation: {
        pl: "Niemowlę udusiło dwa fosforyzujące węże — nadludzka siła od urodzenia.",
        ua: "Немовля задушило двох фосфоресцентних змій — надлюдська сила від народження."
      }
    }
  },

  // 4 glosy
  {
    type: "example",
    heading: { pl: "Słownictwo z ramki · glosy", ua: "Словник з рамки · глоси" },
    formula: "s. 122–128  ·  margines",
    promptPlace: "before",
    prompt: {
      pl: "Wyrazy z pomarańczowych trójkątów — w kontekście mitu.",
      ua: "Слова з помаранчевих трикутників — у контексті міфу."
    },
    text: {
      pl: "**fosforyzujące** — jaśniejące bladym zielonkawym światłem. **wieszcz** — wróżbita, przepowiadający przyszłość. **Hellada** — starożytna Grecja. **kitara** — instrument muzyczny Greków. **strofować** — upominać, karcić. **onyks** — kamień szlachetny. **szkarłat** — ciemnoczerwony kolor.",
      ua: "**fosforyzujące** — що світяться блідо-зеленкуватим світлом. **wieszcz** — віщун, що провіщає майбутнє. **Hellada** — давня Греція. **kitara** — музичний інструмент греків. **strofować** — робити зауваження, сварити. **onyks** — дорогоцінний камінь. **szkarłat** — темно-червоний колір."
    },
    items: [
      { pl: "*maczuga* — broń Heraklesa z sękatego drzewa.", ua: "*maczuga* — зброя Геракла з сучкуватого дерева." },
      { pl: "*Arete — Cnota* · *Szczęście / Nieszczęście* — wybór na rozdrożu.", ua: "*Arete — Чеснота* · *Щастя / Нещастя* — вибір на роздоріжжі." }
    ],
    task: {
      id: "t63-s04-glosy",
      type: "single-choice",
      question: {
        pl: "Kim jest *wieszcz* Tejrezjasz w micie?",
        ua: "Хто такий *wieszcz* Тейресій у міфі?"
      },
      options: [
        { id: "a", label: { pl: "przepowiadający przyszłość (ślepy wróżbita)", ua: "той, хто провіщає майбутнє (сліпий віщун)" } },
        { id: "b", label: { pl: "król Myken, który zadaje 12 prac", ua: "цар Мікен, що задає 12 праць" } },
        { id: "c", label: { pl: "nauczyciel gry na kitarze", ua: "учитель гри на кітарі" } }
      ],
      answer: "a",
      hint: {
        pl: "Margines: *wieszcz* = wróżbita.",
        ua: "Поле: *wieszcz* = віщун."
      },
      explanation: {
        pl: "Tejrezjasz przepowiada: walka z potworami, pomoc ludziom, największy heros Hellady.",
        ua: "Тейресій провіщає: боротьба з потворами, допомога людям, найбільший heros Еллади."
      }
    }
  },

  // 5 zad 1a
  {
    type: "practice",
    heading: { pl: "Zad. 1a · zapowiedź przyszłości", ua: "Завд. 1a · передвістя майбутнього" },
    formula: "s. 128  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Co sprawiło, że Herakles stał się herosem? Najpierw: co **zapowiadało** wielką przyszłość?",
      ua: "Що зробило Геракла herosом? Спочатку: що **передвіщало** велике майбутнє?"
    },
    visual: vizGhT63("t63-zad1.png", {
      alt: { pl: "Zad. 1a–d: heros Herakles", ua: "Завд. 1a–d: heros Геракл" },
      place: "after"
    }),
    items: [
      { pl: "Szukaj w tekście znaków: siła niemowlęcia, słowa Tejrezjasza, pogłoski o Zeusie…", ua: "Шукай у тексті знаки: сила немовляти, слова Тейресія, чутки про Зевса…" },
      { pl: "Klucz — po *Sprawdź*.", ua: "Ключ — після *Sprawdź*." }
    ],
    task: {
      id: "t63-s05-1a",
      type: "multiple-choice",
      question: {
        pl: "Co zapowiadało wielką przyszłość Heraklesa? Zaznacz wszystkie poprawne.",
        ua: "Що передвіщало велике майбутнє Геракла? Познач усі правильні."
      },
      options: [
        { id: "a", label: { pl: "nadludzka siła już w kołysce (węże Hery)", ua: "надлюдська сила вже в колисці (змії Гери)" } },
        { id: "b", label: { pl: "przepowiednia Tejrezjasza (heros Hellady)", ua: "пророцтво Тейресія (heros Еллади)" } },
        { id: "c", label: { pl: "pogłoski, że ojcem jest Zeus", ua: "чутки, що батько — Зевс" } },
        { id: "d", label: { pl: "to, że od razu został królem Myken bez walki", ua: "те, що одразу став царем Мікен без боротьби" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Nie dostał tronu „za darmo” — musiał służyć Eurysteuszowi.",
        ua: "Не отримав трон «задарма» — мусив служити Еврістею."
      },
      explanation: {
        pl: "A, B, C. D fałsz — służył ziemskiemu królowi, nie rządził od razu.",
        ua: "A, B, C. D хиба — служив земному цареві, не правив одразу."
      }
    }
  },

  // 6 zad 1b
  {
    type: "practice",
    heading: { pl: "Zad. 1b · wybór na rozdrożu", ua: "Завд. 1b · вибір на роздоріжжі" },
    formula: "s. 128  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Spotkanie z **Szczęściem/Nieszczęściem** i **Cnotą (Arete)**. Jaki wybór i co z niego wynika?",
      ua: "Зустріч із **Щастям/Нещастям** і **Чеснотою (Arete)**. Який вибір і що з нього випливає?"
    },
    items: [
      { pl: "Szczęście obiecuje łatwiznę; Cnota — trud, pomoc słabszym.", ua: "Щастя обіцяє легкість; Чеснота — труд, допомогу слабшим." },
      { pl: "Herakles: „Twoja ścieżka bardziej mi odpowiada.”", ua: "Геракл: «Твій шлях мені більше пасує.»" }
    ],
    task: {
      id: "t63-s06-1b",
      type: "single-choice",
      question: {
        pl: "Jakie znaczenie miał wybór Cnoty dla dalszych losów Heraklesa?",
        ua: "Яке значення мав вибір Чесноти для подальшої долі Геракла?"
      },
      options: [
        { id: "a", label: { pl: "wybrał trudną drogę służby i walki o innych — drogę herosa", ua: "обрав важкий шлях служби й боротьби за інших — шлях herosa" } },
        { id: "b", label: { pl: "wybrał życie bez wysiłku i uniknął 12 prac", ua: "обрав життя без зусиль і уникнув 12 праць" } },
        { id: "c", label: { pl: "odmówił obu kobietom i wrócił do Kitajronu", ua: "відмовив обом жінкам і повернувся на Кітерон" } }
      ],
      answer: "a",
      hint: {
        pl: "Cnota = ciernie, wysiłek, sens w pomaganiu.",
        ua: "Чеснота = терни, зусилля, сенс у допомозі."
      },
      explanation: {
        pl: "Wybór Cnoty wyznacza drogę heroicznych czynów i cierpienia — nie łatwego szczęścia.",
        ua: "Вибір Чесноти визначає шлях героїчних вчинків і страждання — не легкого щастя."
      }
    }
  },

  // 7 zad 1c
  {
    type: "practice",
    heading: { pl: "Zad. 1c · stosunek do rodziców", ua: "Завд. 1c · ставлення до батьків" },
    formula: "s. 128  ·  zad. 1c",
    promptPlace: "before",
    prompt: {
      pl: "Jak Herakles traktował Alkmenę i Amfitriona? Szukaj scen po zwycięstwie pod Tebami i próśb do Eurysteusza.",
      ua: "Як Геракл ставився до Алкмени і Амфітріона? Шукай сцени після перемоги під Фівами і прохань до Еврістея."
    },
    items: [
      { pl: "Matka prosi, by został; on musi iść za przeznaczeniem — ale z szacunkiem.", ua: "Мати просить залишитися; він мусить іти за призначенням — але з повагою." },
      { pl: "Prosi króla o powrót wygnanych rodziców do Myken.", ua: "Просить царя про повернення вигнаних батьків до Мікен." }
    ],
    task: {
      id: "t63-s07-1c",
      type: "single-choice",
      question: {
        pl: "Które stwierdzenie najlepiej opisuje stosunek Heraklesa do rodziców?",
        ua: "Яке твердження найкраще описує ставлення Геракла до батьків?"
      },
      options: [
        { id: "a", label: { pl: "szanuje ich, troszczy się (prosi o ich powrót), choć musi odejść", ua: "поважає їх, піклується (просить про їхнє повернення), хоч мусить піти" } },
        { id: "b", label: { pl: "wyrzeka się ich i nigdy o nich nie wspomina", ua: "відрікається від них і ніколи про них не згадує" } },
        { id: "c", label: { pl: "zostaje na zawsze przy matce zamiast 12 prac", ua: "залишається назавжди з матір’ю замість 12 праць" } }
      ],
      answer: "a",
      hint: {
        pl: "Po bitwie: dialog z Alkmeną + prośba u Eurysteusza.",
        ua: "Після битви: діалог з Алкменою + прохання в Еврістея."
      },
      explanation: {
        pl: "Kochający syn: odchodzi z obowiązku, ale dba o los rodziców.",
        ua: "Люблячий син: іде з обов’язку, але дбає про долю батьків."
      }
    }
  },

  // 8 zad 1d
  {
    type: "practice",
    heading: { pl: "Zad. 1d · cechy młodego bohatera", ua: "Завд. 1d · риси молодого героя" },
    formula: "s. 128  ·  zad. 1d",
    promptPlace: "before",
    prompt: {
      pl: "Spisz cechy młodego Heraklesa. Potem porównamy boskie i ludzkie.",
      ua: "Випиши риси молодого Геракла. Потім порівняємо божественні й людські."
    },
    items: [
      { pl: "Myśl o: sile, odwadze, gniewie (Linos), współczuciu, wyborze Cnoty…", ua: "Думай про: силу, відвагу, гнів (Лінос), співчуття, вибір Чесноти…" },
      { pl: "Lista propozycji — po *Sprawdź*.", ua: "Список пропозицій — після *Sprawdź*." }
    ],
    task: {
      id: "t63-s08-1d",
      type: "multiple-choice",
      question: {
        pl: "Które cechy młodego Heraklesa wynikają z tekstu? Zaznacz wszystkie.",
        ua: "Які риси молодого Геракла випливають із тексту? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "nadludzka siła i odwaga", ua: "надлюдська сила і відвага" } },
        { id: "b", label: { pl: "skłonność do gniewu / impulsywność (Linos)", ua: "схильність до гніву / імпульсивність (Лінос)" } },
        { id: "c", label: { pl: "współczucie i chęć pomagania (kobieta w Nemei, wybór Cnoty)", ua: "співчуття і бажання допомагати (жінка в Немеї, вибір Чесноти)" } },
        { id: "d", label: { pl: "tchórzostwo i unikanie walki", ua: "боягузтво і уникання боротьби" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Heros ma też ludzkie słabości — nie jest „idealny”.",
        ua: "Heros має й людські слабкості — не «ідеальний»."
      },
      explanation: {
        pl: "A, B, C. D przeczy mitowi — Herakles walczy i chroni.",
        ua: "A, B, C. D суперечить міфу — Геракл бореться і захищає."
      }
    }
  },

  // 9 notatka heros
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · kim jest heros?", ua: "Zapamiętaj · хто такий heros?" },
    formula: "s. 122  ·  notatka do zeszytu",
    promptPlace: "before",
    prompt: {
      pl: "Złota notatka: Herakles = wzór herosa (półboga).",
      ua: "Золота нотатка: Геракл = взірець herosa (напівбога)."
    },
    text: {
      pl: "**Heros** (półbóg) łączy cechy **boskie** i **ludzkie**. Ojciec Heraklesa — **Zeus**, matka — śmiertelna **Alkmena**. Ma nadludzką siłę i odwagę, ale jest **śmiertelny**, popełnia błędy, cierpi. Za winy odpokutowuje **12 pracami** dla Eurysteusza. Po cierpieniu zasługuje na **nieśmiertelność na Olimpie** (apoteoza).",
      ua: "**Heros** (напівбог) поєднує риси **божественні** і **людські**. Батько Геракла — **Зевс**, мати — смертна **Алкмена**. Має надлюдську силу й відвагу, але є **смертним**, помиляється, страждає. За провини спокутує **12 працями** для Еврістея. Після страждання заслуговує на **безсмертя на Олімпі** (апофеоз)."
    },
    items: [
      { pl: "Pochodzenie: Zeus + Alkmena → półbóg.", ua: "Походження: Зевс + Алкмена → напівбог." },
      { pl: "Nadludzka siła ≠ brak cierpienia.", ua: "Надлюдська сила ≠ відсутність страждання." },
      { pl: "Wielkie czyny + próba cierpienia → Olimp.", ua: "Великі вчинки + випробування стражданням → Олімп." }
    ],
    task: {
      id: "t63-s09-heros",
      type: "single-choice",
      question: {
        pl: "Dlaczego Herakles jest uznawany za herosa?",
        ua: "Чому Геракла вважають herosом?"
      },
      options: [
        { id: "a", label: { pl: "łączy cechy boskie i ludzkie; wielkie czyny + śmiertelność/cierpienie", ua: "поєднує божественні й людські риси; великі вчинки + смертність/страждання" } },
        { id: "b", label: { pl: "jest zwykłym bogiem Olimpu od urodzenia, bez śmierci", ua: "є звичайним богом Олімпу від народження, без смерті" } },
        { id: "c", label: { pl: "nigdy nie miał słabości ani obowiązków wobec ludzi", ua: "ніколи не мав слабкостей і обов’язків перед людьми" } }
      ],
      answer: "a",
      hint: {
        pl: "Heros ≠ pełny bóg; może cierpieć i umrzeć.",
        ua: "Heros ≠ повний бог; може страждати й померти."
      },
      explanation: {
        pl: "Archetyp herosa: walka ze słabościami i przeciwnościami → nagroda na Olimpie.",
        ua: "Архетип herosa: боротьба зі слабкостями і протиріччями → нагорода на Олімпі."
      }
    }
  },

  // 10 porównanie
  {
    type: "practice",
    heading: { pl: "Porównanie · cechy boskie / ludzkie", ua: "Порівняння · риси божественні / людські" },
    formula: "s. 122  ·  tabela",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij w zeszycie dwie kolumny. Tu sprawdź kluczowe przykłady.",
      ua: "Доповни в зошиті дві колонки. Тут перевір ключові приклади."
    },
    items: [
      { pl: "Boskie: nadludzka siła · ojciec Zeus · opieka bogów · przyjęcie na Olimp.", ua: "Божественні: надлюдська сила · батько Зевс · опіка богів · прийняття на Олімп." },
      { pl: "Ludzkie: śmiertelne ciało · matka Alkmena · gniew, błędy, cierpienie · służba Eurysteuszowi.", ua: "Людські: смертне тіло · мати Алкмена · гнів, помилки, страждання · служба Еврістею." }
    ],
    task: {
      id: "t63-s10-porownanie",
      type: "multiple-choice",
      question: {
        pl: "Które zestawienie jest poprawne? Zaznacz wszystkie.",
        ua: "Яке зіставлення правильне? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "boskie: nadludzka siła · ojciec Zeus", ua: "божественні: надлюдська сила · батько Зевс" } },
        { id: "b", label: { pl: "ludzkie: śmiertelność · gniew/cierpienie · służba królowi", ua: "людські: смертність · гнів/страждання · служба цареві" } },
        { id: "c", label: { pl: "ludzkie: przyjęcie na Olimp jako bóg (to raczej skutek boskiej nagrody)", ua: "людські: прийняття на Олімп як бог (це радше наслідок божественної нагороди)" } },
        { id: "d", label: { pl: "boskie: ostateczna apoteoza (miejsce wśród bogów)", ua: "божественні: остаточний апофеоз (місце серед богів)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Apoteoza = nagroda boska po ludzkim cierpieniu.",
        ua: "Апофеоз = божественна нагорода після людського страждання."
      },
      explanation: {
        pl: "A, B, D. C myli: Olimp to nagroda, nie „ludzka cecha”.",
        ua: "A, B, D. C плутає: Олімп — нагорода, не «людська риса»."
      }
    }
  },

  // 11 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T63", ua: "Підсумок · T63" },
    formula: "s. 122–128  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Heros = półbóg w walce ze słabościami. Dalej → T64: **12 prac** i uzasadnienie nagrody.",
      ua: "Heros = напівбог у боротьбі зі слабкостями. Далі → T64: **12 праць** і обґрунтування нагороди."
    },
    items: [
      { pl: "Mit: od kołyski do Olimpu.", ua: "Міф: від колиски до Олімпу." },
      { pl: "Wybór Cnoty = droga herosa.", ua: "Вибір Чесноти = шлях herosa." },
      { pl: "Cechy boskie + ludzkie = heros.", ua: "Риси божественні + людські = heros." },
      emT63("Dalej → T64: kolejność 12 prac")
    ],
    task: {
      id: "t63-s11-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Heros jest śmiertelny i może cierpieć, choć ma nadludzkie zdolności.”",
        ua: "Чи твердження правильне? «Heros є смертним і може страждати, хоч має надлюдські здібності.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Notatka: półbóg ≠ pełny bóg Olimpu od urodzenia.",
        ua: "Нотатка: напівбог ≠ повний бог Олімпу від народження."
      },
      explanation: {
        pl: "Prawda — na tym polega różnica herosa i boga.",
        ua: "Правда — у цьому різниця herosa і бога."
      }
    }
  }
]};
