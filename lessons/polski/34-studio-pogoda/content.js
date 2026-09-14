function emT34(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T34 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT34(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T34 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 67  ·  Lekcja 34  ·  studio i prognoza",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Tematy 34–35 to *jedno* studio, ale *dwie* godziny. Dziś s. 67: oglądamy komunikat, czynności prezentera, kolejność informacji, słownictwo, czas czasowników i *krótka prognoza na Ziemi*. Planeta, mapa i rola prezentera przed klasą — lekcja 35. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Теми 34–35 — *одна* студія, але *дві* години. Сьогодні с. 67: дивимось комунікат, дії ведучого, порядок інформації, словник, час дієслів і *короткий прогноз на Землі*. Планета, мапа і роль ведучого перед класом — урок 35. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opowiem o obejrzanej *prognozie pogody*;", ua: "розкажу про переглянутий *прогноз погоди*;" },
      { pl: "wymienię kolejne *czynności prezentera*;", ua: "назву по черзі *дії ведучого*;" },
      { pl: "powiem, w jakiej *kolejności* idą informacje w komunikacie;", ua: "скажу, в якому *порядку* йде інформація в комунікаті;" },
      { pl: "wskażę *czas czasowników* (głównie przyszły);", ua: "вкажу *час дієслів* (переважно майбутній);" },
      { pl: "przygotuję *krótką prognozę* (Ziemia / Polska).", ua: "підготую *короткий прогноз* (Земля / Польща)." }
    ],
    task: {
      id: "t34-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Nazwać czynności prezentera i kolejność informacji w komunikacie.", ua: "Назвати дії ведучого і порядок інформації в комунікаті." } },
        { id: "b", label: { pl: "Zauważyć, jaki czas czasowników dominuje w prognozie.", ua: "Помітити, який час дієслів панує в прогнозі." } },
        { id: "c", label: { pl: "Już dziś wymyślić planetę, tygodniową mapę i zagrać całe show przed klasą.", ua: "Уже сьогодні вигадати планету, тижневу мапу і зіграти ціле шоу перед класом." } },
        { id: "d", label: { pl: "Przygotować krótką prognozę na Ziemi.", ua: "Підготувати короткий прогноз на Землі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Projekt «planeta» jest na s. 68 — która lekcja?",
        ua: "Проєкт «планета» на с. 68 — який урок?"
      },
      explanation: {
        pl: "Dziś: studio, komunikat, prezenter, czas, krótka prognoza. Planeta i mapa — lekcja 35.",
        ua: "Сьогодні: студія, комунікат, ведучий, час, короткий прогноз. Планета і мапа — урок 35."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Studio telewizyjne", ua: "Телестудія" },
    formula: "s. 67  ·  przekaz audiowizualny",
    promptPlace: "before",
    prompt: {
      pl: "Prognoza pogody to *przekaz audiowizualny*: słyszysz głos i *widzisz* obraz (mapa, prezenter, kamery). Nie jest to wiersz Tuwima i nie tabela *piasek*. Most: українська *аудіовізуальне повідомлення*.",
      ua: "Прогноз погоди — це *аудіовізуальне повідомлення*: чуєш голос і *бачиш* образ (мапа, ведучий, камери). Це не вірш Тувіма і не таблиця *piasek*. Міст: українська *аудіовізуальне повідомлення*."
    },
    visual: vizGhT34("t34-studio.png", {
      prompt: "Studio: prezenter, mapa, kamery.",
      alt: { pl: "Prezenterka pogody w studiu przy mapie, światła i kamery.", ua: "Ведуча прогнозу в студії біля мапи, світло і камери." }
    }),
    items: [
      { pl: "Elementy dzieła telewizyjnego: *prezenter*, *mapa*, *kamery*, *światła*, *symbole* pogody.", ua: "Елементи телетвору: *ведучий*, *мапа*, *камери*, *світло*, *символи* погоди." },
      { pl: "Komunikat = treść, którą prezenter *mówi* do widzów.", ua: "Комунікат = зміст, який ведучий *каже* глядачам." }
    ],
    task: {
      id: "t34-s02-studio",
      type: "single-choice",
      question: {
        pl: "Czym NA PEWNO jest prognoza pogody w telewizji?",
        ua: "Чим НАПЕВНО є прогноз погоди на телебаченні?"
      },
      options: [
        { id: "a", label: { pl: "Przekazem audiowizualnym (głos + obraz: mapa, prezenter).", ua: "Аудіовізуальним повідомленням (голос + образ: мапа, ведучий)." } },
        { id: "b", label: { pl: "Wierszem Tuwima z lekcji 32.", ua: "Віршем Тувіма з уроку 32." } },
        { id: "c", label: { pl: "Odmianą rzeczownika przez siedem przypadków.", ua: "Відміною іменника через сім відмінків." } }
      ],
      answer: "a",
      hint: {
        pl: "Na rysunku s. 67 widać kamery i mapę. Czy to kartka z wierszem?",
        ua: "На малюнку с. 67 видно камери і мапу. Чи це аркуш із віршем?"
      },
      explanation: {
        pl: "To program telewizyjny: widać i słychać. Tuwim i przypadki — inne lekcje.",
        ua: "Це телепрограма: видно і чути. Тувім і відмінки — інші уроки."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Oglądamy komunikat", ua: "Дивимось комунікат" },
    formula: "s. 67  ·  zad. wstępne  ·  model EduMost",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: obejrzyj w telewizji kilka prognoz. Tu masz *model* komunikatu — czytaj tak, jakby prezenter mówił z ekranu. Potem opowiesz, o czym była ta prognoza. Tekstu komunikatu nie tłumaczymy wers po wersie.",
      ua: "Підручник: подивись по телевізору кілька прогнозів. Тут маєш *модель* комунікату — читай так, ніби ведучий говорить з екрана. Потім розкажеш, про що був цей прогноз. Текст комунікату не перекладаємо рядок за рядком."
    },
    text: {
      pl: [
        "Dzień dobry.",
        "Oto prognoza pogody na dziś i jutro.",
        "Dziś w całym kraju zachmurzenie umiarkowane.",
        "Na północy będzie padać deszcz. Na południu wyjrzy słońce.",
        "Temperatura od dwunastu do osiemnastu stopni.",
        "Wiatr słaby, zachodni.",
        "Jutro rozpogodzi się. Opady ustąpią.",
        "Życzę miłego dnia."
      ]
    },
    task: {
      id: "t34-s03-komunikat",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest w tym komunikacie? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО є в цьому комунікаті? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Powitanie i życzenie na końcu.", ua: "Привітання і побажання наприкінці." } },
        { id: "b", label: { pl: "Informacja o deszczu na północy i o słońcu na południu.", ua: "Інформація про дощ на півночі і про сонце на півдні." } },
        { id: "c", label: { pl: "Recytacja wiersza *Dwa wiatry*.", ua: "Декламація вірша *Dwa wiatry*." } },
        { id: "d", label: { pl: "Temperatura i wiatr.", ua: "Температура і вітер." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj osiem linijek. Czy jest tam Tuwim?",
        ua: "Читай вісім рядків. Чи є там Тувім?"
      },
      explanation: {
        pl: "Jest powitanie, regiony, temperatura, wiatr, jutro, życzenie. Nie ma wiersza.",
        ua: "Є привітання, регіони, температура, вітер, завтра, побажання. Вірша немає."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Czynności prezentera", ua: "Дії ведучого" },
    formula: "s. 67  ·  jakie czynności?",
    promptPlace: "before",
    prompt: {
      pl: "Program: przedstaw *kolejne* czynności. To nie chaos — kolejka jak w studiu.",
      ua: "Програма: покажи *послідовні* дії. Це не хаос — черга, як у студії."
    },
    items: [
      { pl: "1. Wita widzów (*Dzień dobry*).", ua: "1. Вітає глядачів (*Dzień dobry*)." },
      { pl: "2. Staje przy mapie, patrzy w kamerę.", ua: "2. Стає біля мапи, дивиться в камеру." },
      { pl: "3. Wskazuje regiony (północ, południe).", ua: "3. Вказує регіони (північ, південь)." },
      { pl: "4. Podaje temperaturę, opady, wiatr.", ua: "4. Називає температуру, опади, вітер." },
      { pl: "5. Zapowiada *jutro*.", ua: "5. Оголошує *завтра*." },
      { pl: "6. Żegna / życzy miłego dnia.", ua: "6. Прощається / бажає гарного дня." }
    ],
    task: {
      id: "t34-s04-czynnosci",
      type: "single-choice",
      question: {
        pl: "Która kolejność czynności jest POPRAWNA?",
        ua: "Який порядок дій ПРАВИЛЬНИЙ?"
      },
      options: [
        { id: "a", label: { pl: "Witam → mapa i regiony → dane (temp., opady, wiatr) → jutro → życzenia.", ua: "Вітаю → мапа і регіони → дані (темп., опади, вітер) → завтра → побажання." } },
        { id: "b", label: { pl: "Najpierw życzenia, na końcu «dzień dobry», bez mapy.", ua: "Спочатку побажання, наприкінці «dzień dobry», без мапи." } },
        { id: "c", label: { pl: "Najpierw odmiana *piasek*, potem recytacja Tuwima.", ua: "Спочатку відміна *piasek*, потім декламація Тувіма." } }
      ],
      answer: "a",
      hint: {
        pl: "Spójrz na model: pierwsza linijka to powitanie. Ostatnia?",
        ua: "Подивись на модель: перший рядок — привітання. Останній?"
      },
      explanation: {
        pl: "Studio: witamy, pokazujemy mapę, dajemy dane, jutro, życzenia. Nie odwrotnie.",
        ua: "Студія: вітаємо, показуємо мапу, даємо дані, завтра, побажання. Не навпаки."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Kolejność informacji", ua: "Порядок інформації" },
    formula: "s. 67  ·  czego dotyczą?",
    promptPlace: "before",
    prompt: {
      pl: "Analizujesz *treść* komunikatu. Każdy kawałek *czego dotyczy*? To nie to samo co gest — tu tylko informacje.",
      ua: "Аналізуєш *зміст* комунікату. Кожен шматок *чого стосується*? Це не те саме, що жест — тут лише інформація."
    },
    items: [
      { pl: "Cały kraj — ogólny obraz (*zachmurzenie umiarkowane*).", ua: "Уся країна — загальна картина (*zachmurzenie umiarkowane*)." },
      { pl: "Regiony — północ / południe (deszcz albo słońce).", ua: "Регіони — північ / південь (дощ або сонце)." },
      { pl: "Liczby i kierunki — temperatura, wiatr *zachodni*.", ua: "Числа і напрямки — температура, вітер *zachodni*." },
      { pl: "Czas — *dziś* osobno, *jutro* osobno.", ua: "Час — *сьогодні* окремо, *завтра* окремо." }
    ],
    task: {
      id: "t34-s05-kolejnosc",
      type: "true-false",
      question: {
        pl: "Czy w typowej prognozie najpierw jest ogólny obraz kraju i regiony, a dopiero potem szczegóły jak wiatr i jutro — a nie odwrotnie?",
        ua: "Чи в типовому прогнозі спочатку загальна картина країни і регіони, а вже потім деталі як вітер і завтра — а не навпаки?"
      },
      answer: true,
      hint: {
        pl: "W modelu: kraj → północ/południe → temperatura → wiatr → jutro.",
        ua: "У моделі: країна → північ/південь → температура → вітер → завтра."
      },
      explanation: {
        pl: "Tak. Od ogółu do szczegółu, od dziś do jutra. Tak analizujesz komunikat.",
        ua: "Так. Від загального до деталі, від сьогодні до завтра. Так аналізуєш комунікат."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Jak się zachowuje", ua: "Як поводиться" },
    formula: "s. 67  ·  zachowanie",
    promptPlace: "before",
    prompt: {
      pl: "Trzecie pytanie podręcznika: *jak się przy tym zachowują?* Głos, ciało, kamera. To cecha przekazu audiowizualnego — w gazecie tego nie widać.",
      ua: "Третє питання підручника: *як вони при цьому поводяться?* Голос, тіло, камера. Це риса аудіовізуального повідомлення — у газеті цього не видно."
    },
    items: [
      { pl: "Mówi *wyraźnie*, spokojnym tempem — nie krzyczy jak pędziwiatr.", ua: "Каже *виразно*, спокійним темпом — не кричить як pędziwiatr." },
      { pl: "Patrzy w *kamerę* (do widza), uśmiecha się.", ua: "Дивиться в *камеру* (до глядача), усміхається." },
      { pl: "Wskazuje mapę ręką albo wskaźnikiem. Nie stoi tyłem przez cały czas.", ua: "Вказує на мапу рукою або указкою. Не стоїть спиною весь час." }
    ],
    task: {
      id: "t34-s06-zachowanie",
      type: "single-choice",
      question: {
        pl: "Które zachowanie PASUJE do prezentera pogody?",
        ua: "Яка поведінка ПАСУЄ ведучому прогнозу?"
      },
      options: [
        { id: "a", label: { pl: "Spokojny głos, kontakt z kamerą, wskazywanie mapy.", ua: "Спокійний голос, контакт із камерою, вказування на мапу." } },
        { id: "b", label: { pl: "Krzyk przez cały czas i recytacja *Dwa wiatry* z pamięci.", ua: "Крик увесь час і декламація *Dwa wiatry* напам’ять." } },
        { id: "c", label: { pl: "Milczenie i tylko tabela przypadków na kartce.", ua: "Мовчання і лише таблиця відмінків на аркуші." } }
      ],
      answer: "a",
      hint: {
        pl: "To program na żywo do widzów. Czy prezenter milczy albo recytuje Tuwima?",
        ua: "Це програма наживо до глядачів. Чи ведучий мовчить або декламує Тувіма?"
      },
      explanation: {
        pl: "Prezenter mówi do kamery i pokazuje mapę. Tuwim i przypadki — inne lekcje.",
        ua: "Ведучий говорить до камери і показує мапу. Тувім і відмінки — інші уроки."
      }
    }
  },
  {
    type: "example",
    heading: { pl: "Słownictwo prognozy", ua: "Словник прогнозу" },
    promptPlace: "before",
    prompt: {
      pl: "Zad. wstępne b: wypisz słownictwo charakterystyczne. Najpierw ramka, potem rozbiór. Jutro na planecie — dłuższa ramka.",
      ua: "Вступне b: випиши характерну лексику. Спочатку рамка, потім розбір. Завтра на планеті — довша рамка."
    },
    text: {
      pl: "zachmurzenie  ·  opady  ·  rozpogodzić się  ·  ustąpić  ·  spodziewać się",
      ua: "zachmurzenie  ·  opady  ·  rozpogodzić się  ·  ustąpić  ·  spodziewać się"
    },
    items: [
      { pl: "**zachmurzenie** — ile nieba chronią chmury.", ua: "**zachmurzenie** — скільки неба закривають хмари." },
      { pl: "**opady** — deszcz albo śnieg, które padają.", ua: "**opady** — дощ або сніг, які падають." },
      { pl: "**rozpogodzić się** — chmury ustępują, wychodzi słońce.", ua: "**rozpogodzić się** — хмари відступають, виходить сонце." },
      { pl: "**ustąpić** — przestanie (o deszczu, wietrze).", ua: "**ustąpić** — припиниться (про дощ, вітер)." },
      { pl: "**spodziewać się** — oczekiwać, że coś będzie.", ua: "**spodziewać się** — очікувати, що щось буде." }
    ],
    task: {
      id: "t34-s07-slownik",
      type: "single-choice",
      question: {
        pl: "Które wyrazy NA PEWNO są słownictwem *prognozy pogody*?",
        ua: "Які слова НАПЕВНО є лексикою *прогнозу погоди*?"
      },
      options: [
        { id: "a", label: { pl: "zachmurzenie, opady, rozpogodzi się, wiatr zachodni", ua: "zachmurzenie, opady, rozpogodzi się, wiatr zachodni" } },
        { id: "b", label: { pl: "kamrat, śmiga, pal je licho", ua: "kamrat, śmiga, pal je licho" } },
        { id: "c", label: { pl: "mianownik, dopełniacz, wołacz", ua: "mianownik, dopełniacz, wołacz" } }
      ],
      answer: "a",
      hint: {
        pl: "Kamrat był w *Dwa wiatry*. Przypadki — lekcje 29–31. Co zostało z komunikatu?",
        ua: "Kamrat був у *Dwa wiatry*. Відмінки — уроки 29–31. Що лишилось із комунікату?"
      },
      explanation: {
        pl: "Prognoza: zachmurzenie, opady, wiatr, rozpogodzi się. Glosy Tuwima i przypadki odpadają.",
        ua: "Прогноз: zachmurzenie, opady, wiatr, rozpogodzi się. Глоси Тувіма і відмінки відпадають."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Czas czasowników", ua: "Час дієслів" },
    formula: "s. 67  ·  zad. wstępne c",
    promptPlace: "before",
    prompt: {
      pl: "Który *czas* czasowników stosują prezenterzy przede wszystkim? Most: українська *майбутній час*. Prognoza mówi, *co będzie*, nie tylko co już spadło.",
      ua: "Який *час* дієслів ведучі вживають насамперед? Міст: українська *майбутній час*. Прогноз каже, *що буде*, не лише що вже випало."
    },
    items: [
      { pl: "Przyszły: *będzie padać, wyjrzy, rozpogodzi się, ustąpią*.", ua: "Майбутній: *będzie padać, wyjrzy, rozpogodzi się, ustąpią*." },
      { pl: "Teraźniejszy bywa w ramce: *spodziewamy się, panuje, mamy zachmurzenie*.", ua: "Теперішній буває в рамці: *spodziewamy się, panuje, mamy zachmurzenie*." },
      { pl: "Nie dominuje czas przeszły (*wczoraj padało*) — to relacja z minionego dnia, nie prognoza.", ua: "Не панує минулий (*wczoraj padało*) — це реляція про минулий день, не прогноз." }
    ],
    task: {
      id: "t34-s08-czas",
      type: "single-choice",
      question: {
        pl: "Który czas prezenterzy stosują PRZEDE WSZYSTKIM?",
        ua: "Який час ведучі вживають НАСАМПЕРЕД?"
      },
      options: [
        { id: "a", label: { pl: "Przyszły (*będzie, rozpogodzi się, ustąpią*).", ua: "Майбутній (*będzie, rozpogodzi się, ustąpią*)." } },
        { id: "b", label: { pl: "Tylko przeszły (*padało, wiało wczoraj*).", ua: "Лише минулий (*padało, wiało wczoraj*)." } },
        { id: "c", label: { pl: "Żadnego — prezenter tylko milczy przy mapie.", ua: "Жодного — ведучий лише мовчить біля мапи." } }
      ],
      answer: "a",
      hint: {
        pl: "W modelu: *będzie padać, wyjrzy, rozpogodzi się*. To który czas?",
        ua: "У моделі: *będzie padać, wyjrzy, rozpogodzi się*. Який це час?"
      },
      explanation: {
        pl: "Przede wszystkim przyszły. Teraźniejszy bywa. Przeszły to nie rdzeń prognozy.",
        ua: "Насамперед майбутній. Теперішній буває. Минулий — не серце прогнозу."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Symbole na mapie", ua: "Символи на мапі" },
    formula: "s. 67  ·  obraz",
    promptPlace: "before",
    prompt: {
      pl: "Na mapie prezenter *nie pisze eseju* — stawia znaki. Trzeba je czytać razem z głosem.",
      ua: "На мапі ведучий *не пише есе* — ставить знаки. Треба читати їх разом із голосом."
    },
    visual: vizGhT34("t34-symbole.png", {
      prompt: "Symbole pogody.",
      alt: { pl: "Symbole: słońce, chmura, deszcz, śnieg, wiatr, temperatura.", ua: "Символи: сонце, хмара, дощ, сніг, вітер, температура." }
    }),
    items: [
      { pl: "Słońce — pogodnie. Chmura — zachmurzenie. Krople — deszcz. Płatki — śnieg.", ua: "Сонце — ясно. Хмара — хмарність. Краплі — дощ. Пластівці — сніг." },
      { pl: "Wiatr — strzałka / wir. Termometr — temperatura.", ua: "Вітер — стрілка / вихор. Термометр — температура." }
    ],
    task: {
      id: "t34-s09-symbole",
      type: "true-false",
      question: {
        pl: "Czy krople na mapie oznaczają opady deszczu, a słońce — pogodną aurę?",
        ua: "Чи краплі на мапі означають опади дощу, а сонце — ясну погоду?"
      },
      answer: true,
      hint: {
        pl: "Co rysują w telewizji nad Gdańskiem, gdy ma padać?",
        ua: "Що малюють на ТБ над Гданськом, коли має дощити?"
      },
      explanation: {
        pl: "Tak. Krople = deszcz. Słońce = pogodnie. To język mapy, nie wiersza.",
        ua: "Так. Краплі = дощ. Сонце = ясно. Це мова мапи, не вірша."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Krótka prognoza", ua: "Короткий прогноз" },
    formula: "s. 67  ·  przygotowujesz",
    promptPlace: "before",
    prompt: {
      pl: "Program: *przygotowujesz krótką prognozę*. W zeszycie 6–8 zdań po polsku: twoje miasto albo Polska. Użyj kolejności z lekcji i czasu przyszłego. Tu sprawdzamy, *co musi być* — nie wpisujesz całego tekstu.",
      ua: "Програма: *готуєш короткий прогноз*. У зошиті 6–8 речень польською: твоє місто або Польща. Уживай порядок з уроку і майбутній час. Тут перевіряємо, *що має бути* — не вписуєш увесь текст."
    },
    items: [
      { pl: "Start: *Dzień dobry. Oto prognoza…*", ua: "Старт: *Dzień dobry. Oto prognoza…*" },
      { pl: "Dziś: zachmurzenie / opady / temperatura / wiatr.", ua: "Сьогодні: хмарність / опади / температура / вітер." },
      { pl: "Jutro: jeden czasownik w przyszłym (*rozpogodzi się / będzie padać*).", ua: "Завтра: одне дієслово в майбутньому (*rozpogodzi się / będzie padać*)." },
      { pl: "Koniec: *Życzę miłego dnia.*", ua: "Кінець: *Życzę miłego dnia.*" }
    ],
    task: {
      id: "t34-s10-krotka",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO powinno być w twojej krótkiej prognozie? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО має бути в твоєму короткому прогнозі? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Powitanie i życzenie.", ua: "Привітання і побажання." } },
        { id: "b", label: { pl: "Przynajmniej temperatura albo opady, plus jutro w czasie przyszłym.", ua: "Принаймні температура або опади, плюс завтра в майбутньому часі." } },
        { id: "c", label: { pl: "Tylko recytacja *Dwa wiatry* zamiast pogody.", ua: "Лише декламація *Dwa wiatry* замість погоди." } },
        { id: "d", label: { pl: "Nazwa miejsca (miasto / Polska) — żeby było wiadomo, *gdzie*.", ua: "Назва місця (місто / Польща) — щоб було відомо, *де*." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Wzór z modelu. Czy Tuwim jest częścią komunikatu pogodowego?",
        ua: "Зразок із моделі. Чи Тувім є частиною прогнозу погоди?"
      },
      explanation: {
        pl: "Krótka prognoza = powitanie, miejsce, dane, jutro (przyszły), życzenie. Wiersz odpada.",
        ua: "Короткий прогноз = привітання, місце, дані, завтра (майбутній), побажання. Вірш відпадає."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 67  ·  lekcja 34",
    promptPlace: "before",
    prompt: {
      pl: "Zamykamy godzinę 34. Nie ma tu planety ani tygodniowej mapy — to lekcja 35. Sprawdź cztery rzeczy.",
      ua: "Закриваємо годину 34. Тут немає планети і тижневої мапи — це урок 35. Перевір чотири речі."
    },
    items: [
      { pl: "Prognoza = przekaz audiowizualny (głos + mapa).", ua: "Прогноз = аудіовізуальне повідомлення (голос + мапа)." },
      { pl: "Czynności: witam, wskazuję, podaję dane, jutro, życzę.", ua: "Дії: вітаю, вказую, даю дані, завтра, бажаю." },
      { pl: "Czas przede wszystkim *przyszły*.", ua: "Час насамперед *майбутній*." },
      { pl: "Krótka prognoza na Ziemi już w zeszycie.", ua: "Короткий прогноз на Землі вже в зошиті." }
    ],
    task: {
      id: "t34-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Znam studio, komunikat, czynności, czas przyszły i mam krótką prognozę.", ua: "Знаю студію, комунікат, дії, майбутній час і маю короткий прогноз." } },
        { id: "b", label: { pl: "Już wymyśliłem planetę na tydzień i oceniłem kolegów z mapy.", ua: "Уже вигадав планету на тиждень і оцінив однокласників із мапи." } },
        { id: "c", label: { pl: "Wyrecytowałem *Dwa wiatry* i wybrałem przysłowie.", ua: "Продекламував *Dwa wiatry* і вибрав прислів’я." } }
      ],
      answer: "a",
      hint: {
        pl: "Planeta = s. 68 / lekcja 35. Tuwim = 32–33.",
        ua: "Планета = с. 68 / урок 35. Тувім = 32–33."
      },
      explanation: {
        pl: "Lekcja 34 = studio i krótka prognoza na Ziemi. Planeta — 35. Tuwim — 32–33.",
        ua: "Урок 34 = студія і короткий прогноз на Землі. Планета — 35. Тувім — 32–33."
      }
    }
  }
] };
