function emT38(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T38 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT38(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T38 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 72–73  ·  Lekcja 38  ·  Dwa słońca",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Cykl podręcznika: *Kiedy wstaje dzień*. Dziś *jeden* wiersz Józefa Ratajczaka, s. 72–73: rodzina wyrazu *słońce*, dwa obrazy, koncept, ożywienie, dialog. van Gogh, *Słoneczniki* — lekcja 39, s. 74. Wiersza nie tłumaczymy. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Цикл підручника: *Kiedy wstaje dzień*. Сьогодні *один* вірш Юзефа Ратайчака, с. 72–73: сім’я слова *słońce*, два образи, концепт, оживлення, діалог. van Gogh, *Słoneczniki* — урок 39, с. 74. Вірш не перекладаємо. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wskażę wyrazy z *rodziny* słowa *słońce* (i odłożę pułapki);", ua: "вкажу слова з *сім’ї* слова *słońce* (і відкладу пастки);" },
      { pl: "zrelacjonuję treść i opiszę zachowanie *dwóch* bohaterów;", ua: "перекажу зміст і опишу поведінку *двох* героїв;" },
      { pl: "powiem, czym jest *koncept* w tym wierszu;", ua: "скажу, що таке *концепт* у цьому вірші;" },
      { pl: "odróżnię *uosobienie*, *ożywienie*, porównanie i przenośnię;", ua: "відрізню *уособлення*, *оживлення*, порівняння і метафору;" },
      { pl: "ułożę krótki *dialog* słońca ze słonecznikiem (myślnik).", ua: "складу короткий *діалог* сонця з соняшником (тире)." }
    ],
    task: {
      id: "t38-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Zbudować rodzinę wyrazu słońce i opowiedzieć o dwóch bohaterach wiersza.", ua: "Побудувати сім’ю слова słońce і розповісти про двох героїв вірша." } },
        { id: "b", label: { pl: "Rozpoznać ożywienie i uosobienie oraz ułożyć dialog z myślnikiem.", ua: "Розпізнати оживлення і уособлення та скласти діалог з тире." } },
        { id: "c", label: { pl: "Już dziś opisać obraz van Gogha Słoneczniki (barwy, nastrój, biografia).", ua: "Уже сьогодні описати картину van Gogha Słoneczniki (барви, настрій, біографія)." } },
        { id: "d", label: { pl: "Wyjaśnić koncept: dwa różne «słońca» w jednym utworze.", ua: "Пояснити концепт: два різні «сонця» в одному творі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "van Gogh stoi na s. 74. Która to lekcja — 38 czy 39?",
        ua: "van Gogh стоїть на с. 74. Який це урок — 38 чи 39?"
      },
      explanation: {
        pl: "Dziś: rodzina słońce, dwa obrazy, koncept, środki, dialog. van Gogh — lekcja 39.",
        ua: "Сьогодні: сім’я słońce, два образи, концепт, засоби, діалог. van Gogh — урок 39."
      }
    }
  },
  // 2
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · słońce", ua: "Розминка · słońce" },
    formula: "burza mózgów  ·  przed wierszem",
    promptPlace: "before",
    prompt: {
      pl: [
        "Powiedz pierwsze skojarzenia ze słowem *słońce*: ciepło, żółty kolor, niebo, lato, życie… ",
        "W zeszycie 4 słowa. Potem pytanie-zagadka: ",
        "*Czy słońce można zerwać i wziąć do ręki?* ",
        "Odpowiedzi szukamy w wierszu — nie zgaduj na siłę."
      ],
      ua: "Назви перші асоціації зі словом *słońce*: тепло, жовтий колір, небо, літо, життя… У зошиті 4 слова. Потім загадка: *Чи сонце можна зірвати і взяти в руку?* Відповідь шукаємо у вірші — не вгадуй наосліп."
    },
    items: [
      { pl: "Skojarzenia bywają *dosłowne* (świeci, grzeje) i *poetyckie* (życie, radość).", ua: "Асоціації бувають *буквальні* (світить, гріє) і *поетичні* (життя, радість)." },
      { pl: "Zagadka zostaje otwarta do ostatniej zwrotki.", ua: "Загадка лишається відкритою до останньої строфи." }
    ],
    task: {
      id: "t38-s02-zerwac",
      type: "true-false",
      question: {
        pl: "Czy już TERAZ, bez wiersza, musisz na pewno wiedzieć, czy słońce można zerwać do ręki?",
        ua: "Чи вже ЗАРАЗ, без вірша, маєш напевно знати, чи сонце можна зірвати в руку?"
      },
      answer: false,
      hint: {
        pl: "To pytanie otwiera lekcję. Gdzie poeta da odpowiedź?",
        ua: "Це питання відкриває урок. Де поет дасть відповідь?"
      },
      explanation: {
        pl: "Fałsz. Na razie zbieramy skojarzenia. Odpowiedź jest w ostatniej zwrotce wiersza.",
        ua: "Хиба. Поки збираємо асоціації. Відповідь — в останній строфі вірша."
      }
    }
  },
  // 3
  {
    type: "practice",
    heading: { pl: "Zadanie wstępne · rodzina «słońce»", ua: "Вступне · сім’я «słońce»" },
    formula: "s. 72  ·  przed wierszem",
    promptPlace: "before",
    prompt: {
      pl: [
        "Podręcznik: wskaż wyrazy należące do *rodziny* wyrazu *słońce*. ",
        "Rodzina = ten sam *rdzeń* i pokrewne znaczenie (słońce, ciepło, światło). ",
        "Dwie pułapki brzmią podobnie, ale idą od *innego* wyrazu. ",
        "Most: українська *словотворча сім’я*."
      ],
      ua: "Підручник: вкажи слова з *сім’ї* слова *słońce*. Сім’я = той самий *корінь* і споріднене значення (сонце, тепло, світло). Дві пастки звучать подібно, але йдуть від *іншого* слова. Міст: українська *словотворча сім’я*."
    },
    items: [
      { pl: "Z rodziny: *słoneczny, słonecznik, słoneczko, słonecznikowy, słonko*.", ua: "З сім’ї: *słoneczny, słonecznik, słoneczko, słonecznikowy, słonko*." },
      { pl: "Pułapka: *słony* — od *sól*, nie od słońca.", ua: "Пастка: *słony* — від *sól* (сіль), не від сонця." },
      { pl: "Pułapka: *słonka* — ptak (бекас), nie zdrobnienie słońca.", ua: "Пастка: *słonka* — птах (баранець), не пестливе до сонця." }
    ],
    task: {
      id: "t38-s03-rodzina",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy NA PEWNO należą do rodziny «słońce»? Zaznacz wszystkie pewne.",
        ua: "Які слова НАПЕВНО належать до сім’ї «słońce»? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "słoneczny, słonecznik, słoneczko, słonko", ua: "słoneczny, słonecznik, słoneczko, słonko" } },
        { id: "b", label: { pl: "słony (od sól)", ua: "słony (від sól — сіль)" } },
        { id: "c", label: { pl: "słonecznikowy", ua: "słonecznikowy" } },
        { id: "d", label: { pl: "słonka (ptak)", ua: "słonka (птах)" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Czy słony smak ma związek ze słońcem? Czy słonka to kwiat?",
        ua: "Чи солоний смак має зв’язок із сонцем? Чи słonka — квітка?"
      },
      explanation: {
        pl: "Z rodziny: słoneczny, słonecznik, słoneczko, słonecznikowy, słonko. *słony* ← sól. *słonka* = ptak.",
        ua: "З сім’ї: słoneczny, słonecznik, słoneczko, słonecznikowy, słonko. *słony* ← сіль. *słonka* = птах."
      }
    }
  },
  // 4
  {
    type: "observe",
    heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
    formula: "s. 72  ·  Józef Ratajczak",
    promptPlace: "before",
    prompt: {
      pl: "Odsłoń ilustrację i cztery zwrotki. Czytaj *głośno*. Wiersza nie tłumaczymy. Pytania w głowie: ile jest słońc? gdzie które? które można wziąć do ręki?",
      ua: "Відкрий ілюстрацію і чотири строфи. Читай *вголос*. Вірш не перекладаємо. Питання: скільки сонць? де яке? яке можна взяти в руку?"
    },
    reveal: true,
    steps: [
      {
        formula: "ilustracja  ·  s. 72–73",
        visual: vizGhT38("t38-slonecznik.png", {
          prompt: "Łąka, domek, słońce i słonecznik.",
          alt: {
            pl: "Łąka o świcie: domek z czerwonym dachem, słońce, drzewo i słonecznik przy płocie.",
            ua: "Лука на світанку: хатка з червоним дахом, сонце, дерево і соняшник біля плоту."
          }
        }),
        text: {
          pl: "JÓZEF RATAJCZAK  ·  Dwa słońca"
        }
      },
      {
        formula: "zwrotka 1",
        text: {
          pl: [
            "Dwa słońca patrzą na siebie co dzień,",
            "jedno rośnie na niebie, drugie – przy płocie."
          ]
        }
      },
      {
        formula: "zwrotka 2",
        text: {
          pl: [
            "Jedno ma łodygę jak promień,",
            "drugie – kulę słonecznika",
            "dźwiga ciężko nad domem,",
            "gdy o zachodzie znika."
          ]
        }
      },
      {
        formula: "zwrotka 3",
        text: {
          pl: [
            "Jedno jest pełne wróbli,",
            "kiedy stoi w zenicie,",
            "drugie – nasiona gubi,",
            "wschodząc o świcie."
          ]
        }
      },
      {
        formula: "zwrotka 4",
        text: {
          pl: [
            "Dwa słońca-słoneczniki, lecz tylko jedno z nich mogę",
            "zerwać, chwycić do ręki i wynieść jak lampę na drogę."
          ]
        }
      }
    ],
    task: {
      id: "t38-s04-w-wierszu",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest w tym wierszu? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО є в цьому вірші? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Dwa słońca: jedno na niebie, drugie przy płocie.", ua: "Два сонця: одне на небі, друге біля плоту." } },
        { id: "b", label: { pl: "Tylko jedno z nich można zerwać i wziąć do ręki.", ua: "Лише одне з них можна зірвати і взяти в руку." } },
        { id: "c", label: { pl: "Obraz van Gogha i biografia malarza.", ua: "Картина van Gogha і біографія маляра." } },
        { id: "d", label: { pl: "Słońca patrzą na siebie co dzień.", ua: "Сонця дивляться одне на одного щодня." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj zwrotkę 1 i ostatnią. Czy w tekście jest van Gogh?",
        ua: "Читай строфу 1 і останню. Чи є в тексті van Gogh?"
      },
      explanation: {
        pl: "Dwa słońca patrzą na siebie; jedno na niebie, drugie przy płocie; tylko kwiat można zerwać. van Gogh — lekcja 39.",
        ua: "Два сонця дивляться одне на одного; одне на небі, друге біля плоту; лише квітку можна зірвати. van Gogh — урок 39."
      }
    }
  },
  // 5
  {
    type: "concept",
    heading: { pl: "Koncept i dwaj bohaterowie", ua: "Концепт і два герої" },
    formula: "s. 72  ·  zaskakujący pomysł",
    promptPlace: "before",
    prompt: {
      pl: "To pojęcie do zeszytu. Potem zastosuj je do *tego* wiersza: zrelacjonuj treść i opisz zachowanie bohaterów.",
      ua: "Це поняття до зошита. Потім застосуй до *цього* вірша: перекажи зміст і опиши поведінку героїв."
    },
    text: {
      pl: "**Koncept** to oryginalny, zaskakujący pomysł na utwór.",
      ua: "**Концепт** — оригінальний, несподіваний задум твору."
    },
    items: [
      { pl: "Tu: poeta stawia obok siebie *dwa* słońca — gwiazdę na niebie i kwiat przy płocie. Dlatego tytuł *Dwa słońca*.", ua: "Тут: поет ставить поруч *два* сонця — зорю на небі і квітку біля плоту. Тому назва *Dwa słońca*." },
      { pl: "Bohater 1: *słońce na niebie* — rośnie wysoko, stoi w zenicie, znika o zachodzie.", ua: "Герой 1: *сонце на небі* — росте високо, стоїть у зеніті, зникає на заході." },
      { pl: "Bohater 2: *słonecznik przy płocie* — ma łodygę, kulę, wróble, gubi nasiona.", ua: "Герой 2: *соняшник біля плоту* — має стебло, кулю, горобців, губить насіння." },
      { pl: "Poeta celowo *miesza* cechy («jedno / drugie»), żeby wyglądały jak bliźniaki.", ua: "Поет навмисно *змішує* риси («jedno / drugie»), щоб вони були як близнюки." },
      { pl: "Autor Ratajczak *napisał* wiersz. Bohaterowie *w środku* to słońce i słonecznik.", ua: "Автор Ратайчак *написав* вірш. Герої *всередині* — сонце і соняшник." }
    ],
    task: {
      id: "t38-s05-koncept",
      type: "single-choice",
      question: {
        pl: "Na czym polega koncept tego wiersza?",
        ua: "У чому концепт цього вірша?"
      },
      options: [
        { id: "a", label: { pl: "Zestawienie dwóch «słońc»: gwiazdy i kwiatu, które patrzą na siebie.", ua: "Зіставлення двох «сонць»: зорі і квітки, які дивляться одне на одного." } },
        { id: "b", label: { pl: "Opis wyłącznie pogody na jutro, jak w studiu z lekcji 34.", ua: "Опис лише погоди на завтра, як у студії з уроку 34." } },
        { id: "c", label: { pl: "Tylko biografia Józefa Ratajczaka, bez obrazów.", ua: "Лише біографія Юзефа Ратайчака, без образів." } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł: *Dwa słońca*. Ile bohaterów widać w zwrotce 1?",
        ua: "Назва: *Dwa słońca*. Скільки героїв у строфі 1?"
      },
      explanation: {
        pl: "Koncept = dwa słońca obok siebie: niebo i płot. To nie prognoza i nie życiorys.",
        ua: "Концепт = два сонця поруч: небо і пліт. Це не прогноз і не життєпис."
      }
    }
  },
  // 6
  {
    type: "vocabulary",
    heading: { pl: "Tabela cytatów", ua: "Таблиця цитат" },
    formula: "s. 73  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: wypisz odpowiednie cytaty. Tabela: *Co robi? Co się z nim dzieje?* — osobno *słońce* i *słonecznik*. W zeszycie dwa słupki. Bierz *pewne* cytaty (zwrotka 1 i 4). Zwrotki 2–3 mieszają cechy — to część konceptu, nie błąd.",
      ua: "Підручник: випиши відповідні цитати. Таблиця: *Що робить? Що з ним діється?* — окремо *сонце* і *соняшник*. У зошиті два стовпчики. Бери *певні* цитати (строфа 1 і 4). Строфи 2–3 змішують риси — це частина концепту, не помилка."
    },
    rows: [
      { pl: "słońce — «rośnie na niebie»; «o zachodzie znika»; «stoi w zenicie»", ua: "сонце — «rośnie na niebie»; «o zachodzie znika»; «stoi w zenicie»" },
      { pl: "słonecznik — «przy płocie»; «łodygę jak promień»; «pełne wróbli»; «nasiona gubi»", ua: "соняшник — «przy płocie»; «łodygę jak promień»; «pełne wróbli»; «nasiona gubi»" },
      { pl: "człowiek / kwiat — «zerwać, chwycić do ręki i wynieść jak lampę na drogę»", ua: "людина / квітка — «zerwać, chwycić do ręki i wynieść jak lampę na drogę»" }
    ],
    task: {
      id: "t38-s06-tabela",
      type: "single-choice",
      question: {
        pl: "Który cytat NA PEWNO dotyczy słonecznika, a nie gwiazdy na niebie?",
        ua: "Яка цитата НАПЕВНО стосується соняшника, а не зорі на небі?"
      },
      options: [
        { id: "a", label: { pl: "«zerwać, chwycić do ręki i wynieść jak lampę na drogę»", ua: "«zerwać, chwycić do ręki i wynieść jak lampę na drogę»" } },
        { id: "b", label: { pl: "«rośnie na niebie» / «o zachodzie znika»", ua: "«rośnie na niebie» / «o zachodzie znika»" } },
        { id: "c", label: { pl: "Prognoza pogody ze s. 67 (studio).", ua: "Прогноз погоди зі с. 67 (студія)." } }
      ],
      answer: "a",
      hint: {
        pl: "Ostatnia zwrotka: które słońce można wziąć do ręki — to na niebie czy przy płocie?",
        ua: "Остання строфа: яке сонце можна взяти в руку — на небі чи біля плоту?"
      },
      explanation: {
        pl: "Do ręki bierzesz kwiat. Gwiazda znika o zachodzie i «rośnie» na niebie — tego nie zerwiesz.",
        ua: "У руку береш квітку. Зоря зникає на заході і «росте» на небі — її не зірвеш."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "«Patrzy» · dosłownie i przenośnie", ua: "«Patrzy» · буквально і переносно" },
    formula: "s. 73  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: jakie znaczenie może mieć czasownik *patrzy*, gdy wykonawcą jest *słońce* albo *słonecznik*? Możesz użyć znaczenia *dosłownego* i *przenośnego*. W razie trudności — słownik wyrazów bliskoznacznych. Most: українська *буквально / переносно*.",
      ua: "Підручник: яке значення може мати дієслово *patrzy*, коли виконавець — *сонце* або *соняшник*? Можна *буквальне* і *переносне*. Як важко — словник синонімів. Міст: українська *буквально / переносно*."
    },
    items: [
      { pl: "Słońce *nie ma oczu*. «Słońce patrzy» = uosobienie: zachowuje się jak człowiek.", ua: "Сонце *не має очей*. «Słońce patrzy» = уособлення: поводиться як людина." },
      { pl: "Słonecznik *zwraca tarczę* ku słońcu. «Patrzy» jest bliżej życia kwiatu — nadal obraz, nie oczy.", ua: "Соняшник *повертає диск* до сонця. «Patrzy» ближче до життя квітки — це все одно образ, не очі." },
      { pl: "Bliskoznaczne do *patrzy*: *spogląda, patrzy się, zwraca się, patrzy w stronę*.", ua: "Синоніми до *patrzy*: *spogląda, patrzy się, zwraca się, patrzy w stronę*." }
    ],
    task: {
      id: "t38-s07-patrzy",
      type: "single-choice",
      question: {
        pl: "«Dwa słońca patrzą na siebie». Jak rozumiesz *patrzy* przy słońcu na niebie?",
        ua: "«Dwa słońca patrzą na siebie». Як розумієш *patrzy* при сонці на небі?"
      },
      options: [
        { id: "a", label: { pl: "Przenośnie: słońce nie ma oczu, ale poeta daje mu ludzką czynność (uosobienie).", ua: "Переносно: сонце не має очей, але поет дає йому людську дію (уособлення)." } },
        { id: "b", label: { pl: "Dosłownie: na tarczy słońca są prawdziwe oczy i powieki.", ua: "Буквально: на диску сонця є справжні очі й повіки." } },
        { id: "c", label: { pl: "To czasownik z prognozy pogody: «jutro popatrzy deszcz».", ua: "Це дієслово з прогнозу: «завтра подивиться дощ»." } }
      ],
      answer: "a",
      hint: {
        pl: "Czy gwiazda ma twarz? Co robili wiatry w lekcji 33, gdy «grały» i «brały brata za kamrata»?",
        ua: "Чи зоря має обличчя? Що робили вітри в уроці 33, коли «грали» і «брали брата за kamrata»?"
      },
      explanation: {
        pl: "Słońce patrzy = przenośnia + uosobienie. Nie ma oczu. To ten sam zabieg, co wiatry-ludzie w Tuwimie.",
        ua: "Сонце дивиться = метафора + уособлення. Очей немає. Той самий прийом, що вітри-люди в Тувіма."
      }
    }
  },
  // 8
  {
    type: "concept",
    heading: { pl: "Uosobienie, ożywienie, jak", ua: "Уособлення, оживлення, jak" },
    formula: "środki  ·  T33 + nowe",
    promptPlace: "before",
    prompt: {
      pl: "Zapisz trzy pojęcia. *Uosobienie* znasz z lekcji 33. Nowe: *ożywienie*. Potem znajdź je w *tym* wierszu.",
      ua: "Запиши три поняття. *Уособлення* знаєш з уроку 33. Нове: *оживлення*. Потім знайди їх у *цьому* вірші."
    },
    text: {
      pl: "**Uosobienie** — rzecz lub zjawisko zachowuje się jak człowiek. **Ożywienie** — rzecz martwa dostaje życie rośliny lub zwierzęcia. **Porównanie** ma słowo *jak*; **przenośnia** mówi «to jest tamto» bez *jak*.",
      ua: "**Уособлення** — річ або явище поводиться як людина. **Оживлення** — мертва річ дістає життя рослини чи тварини. **Порівняння** має слово *jak*; **метафора** каже «це є те» без *jak*."
    },
    items: [
      { pl: "Uosobienie: *Dwa słońca patrzą na siebie* — jak ludzie, co dzień.", ua: "Уособлення: *Dwa słońca patrzą na siebie* — як люди, щодня." },
      { pl: "Ożywienie: *słońce rośnie na niebie* — gwiazda «rośnie» jak kwiat.", ua: "Оживлення: *słońce rośnie na niebie* — зоря «росте» як квітка." },
      { pl: "Porównanie: *łodyga jak promień*; *wynieść jak lampę na drogę*.", ua: "Порівняння: *łodyga jak promień*; *wynieść jak lampę na drogę*." },
      { pl: "Przenośnia: *słońca-słoneczniki*; *słońce rośnie na niebie* (bez *jak*).", ua: "Метафора: *słońca-słoneczniki*; *słońce rośnie na niebie* (без *jak*)." }
    ],
    task: {
      id: "t38-s08-srodki",
      type: "multiple-choice",
      question: {
        pl: "Które rozpoznania NA PEWNO pasują do *tego* wiersza? Zaznacz wszystkie pewne.",
        ua: "Які розпізнання НАПЕВНО пасують до *цього* вірша? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "«patrzą na siebie» — uosobienie (jak ludzie).", ua: "«patrzą na siebie» — уособлення (як люди)." } },
        { id: "b", label: { pl: "«słońce rośnie na niebie» — ożywienie (jak roślina).", ua: "«słońce rośnie na niebie» — оживлення (як рослина)." } },
        { id: "c", label: { pl: "Cały wiersz to apostrofa «O, słońce!» z lekcji 2.", ua: "Весь вірш — апострофа «О, сонце!» з уроку 2." } },
        { id: "d", label: { pl: "«jak promień», «jak lampę» — porównania (jest jak).", ua: "«jak promień», «jak lampę» — порівняння (є jak)." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czy ktoś woła «O, słońce»? Czy w tekście jest słowo *jak*? Czy słońce «rośnie»?",
        ua: "Чи хтось кличе «О, сонце»? Чи в тексті є *jak*? Чи сонце «росте»?"
      },
      explanation: {
        pl: "Uosobienie, ożywienie, porównania — tak. Apostrofy tu nie ma (to było *Preludium*).",
        ua: "Уособлення, оживлення, порівняння — так. Апострофи тут немає (це було *Preludium*)."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Obrazy ze skojarzeń", ua: "Образи з асоціацій" },
    formula: "s. 73  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: jak zostały zbudowane obrazy poetyckie? a) Skojarzenia: *słońce świeci na niebie* + *słonecznik rośnie w ogrodzie* → *słońce rośnie na niebie*. b) Nazwij sposób obrazowania. To *ożywienie* (i przenośnia): gwiazda dostaje czynność kwiatu.",
      ua: "Підручник: як збудовані поетичні образи? a) Асоціації: *słońce świeci na niebie* + *słonecznik rośnie w ogrodzie* → *słońce rośnie на небі*. b) Назви спосіб зображення. Це *оживлення* (і метафора): зоря дістає дію квітки."
    },
    items: [
      { pl: "Obraz poetycki = obraz narysowany *słowami* (znałeś z lekcji 11).", ua: "Поетичний образ = образ намальований *словами* (знав з уроку 11)." },
      { pl: "Dwa zwykłe zdania spotykają się i powstaje zdanie *niezwykłe*.", ua: "Два звичайні речення зустрічаються і постає речення *незвичайне*." },
      { pl: "Sposób: ożywienie / przenośnia ze skojarzeń — nie nowa pogoda i nie van Gogh.", ua: "Спосіб: оживлення / метафора з асоціацій — не нова погода і не van Gogh." }
    ],
    task: {
      id: "t38-s09-obrazy",
      type: "single-choice",
      question: {
        pl: "Jak powstaje obraz «słońce rośnie na niebie»?",
        ua: "Як постає образ «słońce rośnie na niebie»?"
      },
      options: [
        { id: "a", label: { pl: "Ze skojarzeń: słońce świeci na niebie + słonecznik rośnie w ogrodzie → ożywienie.", ua: "З асоціацій: сонце світить на небі + соняшник росте в саду → оживлення." } },
        { id: "b", label: { pl: "Z tabeli odmiany przymiotnika na s. 70.", ua: "З таблиці відміни прикметника на с. 70." } },
        { id: "c", label: { pl: "Z biografii van Gogha na s. 74.", ua: "З біографії van Gogha на с. 74." } }
      ],
      answer: "a",
      hint: {
        pl: "Schemat na s. 73: dwa obrazki i strzałka do żółtej ramki. Co się łączy?",
        ua: "Схема на с. 73: дві картинки і стрілка до жовтої рамки. Що з’єднується?"
      },
      explanation: {
        pl: "Świeci + rośnie = słońce rośnie. To ożywienie (gwiazda jak roślina). Van Gogh i przymiotnik — inne lekcje.",
        ua: "Світить + росте = сонце росте. Це оживлення (зоря як рослина). Van Gogh і прикметник — інші уроки."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Dialog słońce — słonecznik", ua: "Діалог сонце — соняшник" },
    formula: "s. 73  ·  zad. 4  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: ułóż rozmowę, którą mogliby przeprowadzić bohaterowie: słońce i słonecznik. Kolejne wypowiedzi oznacz *myślnikiem* (—). 3–4 zdania. Program dodaje: wymyśl sytuację, która u autora mogła wywołać ten opis (np. ogród o świcie).",
      ua: "Підручник: склади розмову, яку могли б провести герої: сонце і соняшник. Репліки починай *тире* (—). 3–4 речення. Програма: вигадай ситуацію, яка могла підказати авторові цей опис (наприклад сад на світанку)."
    },
    reveal: true,
    steps: [
      {
        formula: "wzór  ·  myślnik na początku repliki",
        text: {
          pl: [
            "— Halo, bracie z płotu! Widzę twoją żółtą kulę nad trawą.",
            "— A ja twoją na niebie. Szkoda, że nie mogę do ciebie polecieć.",
            "— Zostań. Wieczorem ja zniknę, a ciebie ktoś może wynieść jak lampę."
          ],
          ua: [
            "— Привіт, брате з плоту! Бачу твою жовту кулю над травою.",
            "— А я твою на небі. Шкода, що не можу до тебе полетіти.",
            "— Залишайся. Увечері я зникну, а тебе хтось може винести як лампу."
          ]
        }
      },
      {
        formula: "sytuacja autora  ·  program",
        text: {
          pl: [
            "Możliwa sytuacja: poeta stoi w ogrodzie o świcie. Na niebie słońce, przy płocie słonecznik — dwa żółte kręgi «patrzą» na siebie.",
            "To nie jedyna dobra odpowiedź. Ważne: zwykły widok + zaskakujący pomysł (koncept)."
          ],
          ua: [
            "Можлива ситуація: поет стоїть у саду на світанку. На небі сонце, біля плоту соняшник — два жовті кола «дивляться» одне на одного.",
            "Це не єдина добра відповідь. Важливо: звичайний вид + несподіваний задум (концепт)."
          ]
        }
      }
    ],
    task: {
      id: "t38-s10-dialog",
      type: "open-answer",
      question: {
        pl: "Napisz 3–4 zdania dialogu. Każdą replikę zacznij od myślnika. Mówią słońce i słonecznik.",
        ua: "Напиши 3–4 речення діалогу. Кожну репліку почни з тире. Говорять сонце і соняшник."
      },
      answer: [
        "— Halo, bracie z płotu! Widzę twoją żółtą kulę nad trawą.",
        "— A ja twoją na niebie. Szkoda, że nie mogę do ciebie polecieć.",
        "— Zostań. Wieczorem ja zniknę, a ciebie ktoś może wynieść jak lampę."
      ],
      hint: {
        pl: "Zacznij każdą linię od —. Dwie osoby: słońce (niebo) i słonecznik (płot). Nie pisz o van Goghu.",
        ua: "Почни кожен рядок з —. Дві особи: сонце (небо) і соняшник (пліт). Не пиши про van Gogha."
      },
      explanation: {
        pl: "Silnik nie ocenia poezji. Sprawdź sam: 1) myślniki; 2) dwa głosy; 3) po polsku; 4) widać niebo i płot albo lampę. Wzór jest jedną z możliwości.",
        ua: "Рушій не оцінює поезію. Сам: 1) тире; 2) два голоси; 3) польською; 4) видно небо і пліт або лампу. Зразок — одна з можливостей."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 72–73  ·  lekcja 38",
    promptPlace: "before",
    prompt: {
      pl: "Ukryte znaczenie: poeta uczy dostrzegać *niezwykłe* w zwykłym kwiecie — słonecznik też może być słońcem. van Gogh zostaje na lekcję 39. W zeszycie: rodzina słońce + tabela cytatów + dialog.",
      ua: "Прихований сенс: поет учить бачити *незвичайне* в звичайній квітці — соняшник теж може бути сонцем. van Gogh лишається на урок 39. У зошиті: сім’я słońce + таблиця цитат + діалог."
    },
    items: [
      { pl: "Koncept: dwa słońca — gwiazda i kwiat.", ua: "Концепт: два сонця — зоря і квітка." },
      { pl: "Uosobienie: *patrzą*. Ożywienie: *rośnie na niebie*. Porównanie: *jak lampa*.", ua: "Уособлення: *patrzą*. Оживлення: *rośnie na niebie*. Порівняння: *jak lampa*." },
      { pl: "Praca domowa dla wszystkich: 3 zdania — dlaczego autor porównał słonecznik do *lampy*.", ua: "Домашня для всіх: 3 речення — чому автор порівняв соняшник до *лампи*." },
      { pl: "Dla chętnych: krótki własny koncept (np. księżyc jak rogal, gwiazdy jak iskry).", ua: "Для охочих: короткий власний концепт (наприклад місяць як рогалик, зорі як іскри)." }
    ],
    task: {
      id: "t38-s11-karta",
      type: "true-false",
      question: {
        pl: "Czy w tym wierszu oba słońca można zerwać, chwycić do ręki i wynieść jak lampę?",
        ua: "Чи в цьому вірші обидва сонця можна зірвати, взяти в руку і винести як лампу?"
      },
      answer: false,
      hint: {
        pl: "Ostatnia zwrotka: «lecz tylko jedno z nich mogę zerwać». Które?",
        ua: "Остання строфа: «lecz tylko jedno z nich mogę zerwać». Яке?"
      },
      explanation: {
        pl: "Fałsz. Tylko słonecznik. Gwiazdy z nieba nie zerwiesz — i właśnie dlatego kwiat staje się lampą na drogę.",
        ua: "Хиба. Лише соняшник. Зорю з неба не зірвеш — і саме тому квітка стає лампою на дорогу."
      }
    }
  }
] };
