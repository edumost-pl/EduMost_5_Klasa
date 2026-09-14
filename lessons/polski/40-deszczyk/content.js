function emT40(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T40 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT40(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T40 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 76  ·  Lekcja 40  ·  bohater i marzenia",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Cykl podręcznika: *Z wielkiej chmury*. Tematy 40 i 41 to *jeden* wiersz Juliana Tuwima *Deszczyk*, ale *dwie* osobne godziny. Dziś: glosy z pól, nagranie, treść, *bohater* (mały kapuśniaczek), epitety, porównania i marzenia. Ramka *uosobienie* — lekcja 41. Wiersza nie tłumaczymy. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Цикл підручника: *Z wielkiej chmury*. Теми 40 і 41 — *один* вірш Юліана Тувіма *Deszczyk*, але *дві* окремі години. Сьогодні: глоси з полів, запис, зміст, *герой* (маленький kapuśniaczek), епітети, порівняння і мрії. Рамка *uosobienie* — урок 41. Вірш не перекладаємо. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wyjaśnię glosy z pól: *wilgny, mżyć, rośny, siec*;", ua: "поясню глоси з полів: *wilgny, mżyć, rośny, siec*;" },
      { pl: "zrelacjonuję treść wiersza *Deszczyk*;", ua: "перекажу зміст вірша *Deszczyk*;" },
      { pl: "przedstawię bohatera: młodziutki deszczyk / kapuśniaczek;", ua: "представлю героя: молодесенький дощик / kapuśniaczek;" },
      { pl: "wskażę *epitety* i *porównania* opisujące deszcz;", ua: "вкажу *епітети* і *порівняння*, що описують дощ;" },
      { pl: "powiem, co deszczyk *robi teraz* i *czego pragnie*.", ua: "скажу, що дощик *робить зараз* і *чого прагне*." }
    ],
    task: {
      id: "t40-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opowiedzieć, kim jest bohater i o czym marzy.", ua: "Розповісти, хто герой і про що мріє." } },
        { id: "b", label: { pl: "Wskazać epitety i porównania z wiersza.", ua: "Вказати епітети і порівняння з вірша." } },
        { id: "c", label: { pl: "Już dziś zapisać pełną definicję uosobienia z ramki s. 77 i dialog kropli.", ua: "Уже сьогодні записати повне означення уособлення з рамки с. 77 і діалог крапель." } },
        { id: "d", label: { pl: "Wyjaśnić słowa z pomarańczowych pól podręcznika.", ua: "Пояснити слова з помаранчевих полів підручника." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ramka uosobienia, dialog kropli i fragmenty z innych utworów są w temacie 41. Co zostaje na dziś?",
        ua: "Рамка уособлення, діалог крапель і уривки з інших творів — тема 41. Що лишається на сьогодні?"
      },
      explanation: {
        pl: "Dziś: glosy, treść, bohater, epitety, porównania, marzenia. Uosobienie i dialog — lekcja 41.",
        ua: "Сьогодні: глоси, зміст, герой, епітети, порівняння, мрії. Уособлення і діалог — урок 41."
      }
    }
  },
  // 2
  {
    type: "example",
    heading: { pl: "Słowa z pól", ua: "Слова з полів" },
    promptPlace: "before",
    prompt: {
      pl: "Cztery glosy z pól s. 76. Najpierw ramka, potem rozbiór: znaczenie *w tym wierszu*. Posłuchaj ich w głowie, zanim włączysz nagranie.",
      ua: "Чотири глоси з полів с. 76. Спочатку рамка, потім розбір: значення *в цьому вірші*. Промов їх у голові, перш ніж увімкнеш запис."
    },
    text: {
      pl: "wilgny  ·  mżyć  ·  rośny  ·  siec",
      ua: "wilgny  ·  mżyć  ·  rośny  ·  siec"
    },
    items: [
      { pl: "**wilgny** — wilgotny.", ua: "**wilgny** — вологий (*wilgotny*)." },
      { pl: "**mżyć** — padać gęsto drobniutkimi kropelkami; kropić.", ua: "**mżyć** — мрячити, падати густо дрібнесенькими краплями; кропити." },
      { pl: "**rośny** — pełen rosy, przesiąknięty wilgocią.", ua: "**rośny** — повний роси, просякнутий вологою." },
      { pl: "**siec** — uderzać czymś mocno, chłostać, bić; *tu: w znaczeniu przenośnym* (ulewa jak chłosta).", ua: "**siec** — сильно бити, шмагати; *тут: у переносному значенні* (злива як батіг)." }
    ],
    task: {
      id: "t40-s02-glosy",
      type: "single-choice",
      question: {
        pl: "«Jakby z worków szarych mokry, mżący maczek». *Mżący* znaczy, że deszcz:",
        ua: "«Jakby z worków szarych mokry, mżący maczek». *Mżący* означає, що дощ:"
      },
      options: [
        { id: "a", label: { pl: "pada gęsto drobniutkimi kropelkami", ua: "падає густо дрібнесенькими краплями" } },
        { id: "b", label: { pl: "grzmi i wali piorunami", ua: "гримить і б’є блискавками" } },
        { id: "c", label: { pl: "to nazwa wróbla na drucie", ua: "це назва горобця на дроті" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa: *mżyć* = padać gęsto drobniutkimi kropelkami; kropić.",
        ua: "Глоса: *mżyć* = падати густо дрібнесенькими краплями; кропити."
      },
      explanation: {
        pl: "*Mżący maczek* = drobny, gęsty deszczyk jak ziarenka maku. To nie burza i nie wróbel.",
        ua: "*Mżący maczek* = дрібний густий дощик, як зернята маку. Це не буря і не горобець."
      }
    }
  },
  // 3
  {
    type: "observe",
    heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
    formula: "s. 76  ·  nagranie  ·  Julian Tuwim",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw *posłuchaj* nagrania (czyta głos po polsku). Potem przeczytaj cały wiersz. Wiersza nie tłumaczymy. Pytania w głowie: *kto* pada? *jaki* jest teraz? *czego* chce? co się dzieje na *końcu*?",
      ua: "Спочатку *послухай* запис (читає голос польською). Потім прочитай увесь вірш. Вірш не перекладаємо. Питання: *хто* падає? *який* він зараз? *чого* хоче? що діється *в кінці*?"
    },
    text: {
      pl: [
        emT40("Julian Tuwim"),
        emT40("Deszczyk"),
        " ",
        "Jak wesoły milion drobnych, wilgnych muszek,",
        "Jakby z worków szarych mokry, mżący maczek,",
        "Sypie się i skacze dżdżu wodnisty puszek,",
        "Rośny pył jesienny, siwy kapuśniaczek.",
        " ",
        "Słabe to, maleńkie, ledwo samo kropi,",
        "Nawet w blachy bębnić nie potrafi jeszcze.",
        "Ot, młodziutki deszczyk, fruwające kropki,",
        "Co by strasznie chciały być dorosłym deszczem.",
        " ",
        "Chciałby ulewą lunąć w gromkiej burzy,",
        "Miasto siec na ukos chlustającą chłostą,",
        "W rynnach się rozpluskać, rozlać się w kałuży,",
        "Szyby dziobać łzawą i zawiłą ospą…",
        " ",
        "Tak to sobie marzy kapaninka biedna,",
        "Sił ostatkiem pusząc się w ostatnim dreszczu…",
        "Lecz cóż? Spójrz: na drucie jeździ kropla jedna.",
        "Już ją wróbel strząsnął. Już po całym deszczu."
      ]
    },
    task: {
      id: "t40-s03-w-wierszu",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest w tym wierszu? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО є в цьому вірші? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Młody, słaby deszczyk, który chce być dorosłym deszczem.", ua: "Молодий слабкий дощик, який хоче бути дорослим дощем." } },
        { id: "b", label: { pl: "Na końcu wróbel strząsa jedną kroplę z drutu.", ua: "Наприкінці горобець струшує одну краплю з дроту." } },
        { id: "c", label: { pl: "Van Gogh maluje słoneczniki w Arles.", ua: "Ван Гог малює соняшники в Арлі." } },
        { id: "d", label: { pl: "Deszczyk marzy o ulewie, rynnach i kałużach.", ua: "Дощик мріє про зливу, ринви і калюжі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj cztery strofy. Czy w tekście jest van Gogh?",
        ua: "Читай чотири строфи. Чи є в тексті ван Гог?"
      },
      explanation: {
        pl: "Mały deszczyk, wielkie marzenia, wróbel na drucie. Słoneczniki — lekcja 39.",
        ua: "Малий дощик, великі мрії, горобець на дроті. Соняшники — урок 39."
      }
    }
  },
  // 4
  {
    type: "observe",
    heading: { pl: "O czym jest wiersz", ua: "Про що вірш" },
    formula: "s. 76  ·  relacja treści",
    promptPlace: "before",
    prompt: {
      pl: "Zrelacjonuj treść *swoimi słowami* — jak opowiadasz koledze film. Nie recytuj całego wiersza. Cztery zdania wystarczą.",
      ua: "Перекажи зміст *своїми словами* — як розповідаєш другові фільм. Не декламуй увесь вірш. Чотирьох речень досить."
    },
    items: [
      { pl: "Pada drobny, jesienny deszczyk — *siwy kapuśniaczek*.", ua: "Падає дрібний осінній дощик — *сивий kapuśniaczek* (мряка)." },
      { pl: "Jest słaby: ledwo kropi, jeszcze nie umie bębnić w blachy.", ua: "Він слабкий: ледве кропить, ще не вміє барабанити по блясі." },
      { pl: "Marzy, żeby stać się *dorosłym deszczem*: ulewą, chłostą, kałużą.", ua: "Мріє стати *дорослим дощем*: зливою, батогом, калюжею." },
      { pl: "Koniec jest cichy: jedna kropla na drucie, wróbel ją strząsa — *już po całym deszczu*.", ua: "Кінець тихий: одна крапля на дроті, горобець її струшує — *вже по всьому дощі*." }
    ],
    task: {
      id: "t40-s04-relacja",
      type: "true-false",
      question: {
        pl: "Czy wiersz opowiada o wielkiej letniej burzy, która przez godzinę siecze miasto i nikt nie wychodzi z domu?",
        ua: "Чи вірш розповідає про велику літню бурю, яка годину шмагає місто і ніхто не виходить з дому?"
      },
      answer: false,
      hint: {
        pl: "Ulewa jest w *marzeniach*. A jaki deszcz pada *naprawdę*? Spójrz na strofę 4.",
        ua: "Злива є в *мріях*. А який дощ падає *насправді*? Подивись на строфу 4."
      },
      explanation: {
        pl: "Fałsz. Naprawdę pada drobny kapuśniaczek. Ulewa to tylko marzenie. Koniec: wróbel i jedna kropla.",
        ua: "Хиба. Насправді падає дрібний kapuśniaczek. Злива — лише мрія. Кінець: горобець і одна крапля."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Kim jest bohater", ua: "Хто герой" },
    formula: "s. 76  ·  parasol  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Bohater wiersza to *nie* Tuwim i *nie* wróbel. To *młodziutki deszczyk*. Podręcznik nazywa go też *kapuśniaczkiem* i *kapaninką biedną*. W zeszycie narysuj parasol (jak na s. 76) — pod spodem będą cytaty.",
      ua: "Герой вірша — *не* Тувім і *не* горобець. Це *молодесенький deszczyk*. Підручник називає його ще *kapuśniaczkiem* і *kapaninką biedną*. У зошиті намалюй парасольку (як на с. 76) — під нею будуть цитати."
    },
    visual: vizGhT40("t40-deszczyk.png", {
      prompt: "Deszczyk i parasol.",
      alt: {
        pl: "Kolorowy parasol, drobny deszcz i wróbel na drucie.",
        ua: "Кольорова парасолька, дрібний дощ і горобець на дроті."
      }
    }),
    items: [
      { pl: "Imiona-przezwiska z tekstu: *deszczyk, kapuśniaczek, kapaninka, wodnisty puszek, pył jesienny*.", ua: "Імена-прізвиська з тексту: *deszczyk, kapuśniaczek, kapaninka, wodnisty puszek, pył jesienny*." },
      { pl: "*Kapuśniaczek* tu = bardzo drobny, siwy deszczyk (nie zupa!).", ua: "*Kapuśniaczek* тут = дуже дрібний сивий дощик (не суп!)." },
      { pl: "Wróbel jest w ostatniej strofie, ale to *nie* tytułowy bohater.", ua: "Горобець є в останній строфі, але це *не* титульний герой." },
      { pl: "Most z lekcji 32: bohater wiersza ≠ autor.", ua: "Міст з уроку 32: герой вірша ≠ автор." }
    ],
    task: {
      id: "t40-s05-bohater",
      type: "single-choice",
      question: {
        pl: "Kim jest bohater wiersza *Deszczyk*?",
        ua: "Хто герой вірша *Deszczyk*?"
      },
      options: [
        { id: "a", label: { pl: "Młodziutki deszczyk — kapuśniaczek.", ua: "Молодесенький дощик — kapuśniaczek." } },
        { id: "b", label: { pl: "Julian Tuwim (autor = bohater).", ua: "Юліан Тувім (автор = герой)." } },
        { id: "c", label: { pl: "Wróbel, który strząsa kroplę.", ua: "Горобець, який струшує краплю." } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł i strofa 2: «Ot, młodziutki deszczyk». Autor pisze — nie pada z chmury.",
        ua: "Назва і строфа 2: «Ot, młodziutki deszczyk». Автор пише — не падає з хмари."
      },
      explanation: {
        pl: "Bohater = mały deszczyk / kapuśniaczek. Tuwim = autor. Wróbel tylko kończy deszcz.",
        ua: "Герой = малий deszczyk / kapuśniaczek. Тувім = автор. Горобець лише закінчує дощ."
      }
    }
  },
  // 6
  {
    type: "practice",
    heading: { pl: "Jaki jest deszczyk teraz", ua: "Який дощик зараз" },
    formula: "s. 76  ·  epitety  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Most z lekcji 36: *epitet* to słowo określające rzeczownik (*jaki?*). Zwykle to *przymiotnik*. Pod parasolem zapisz epitety, które *opisują deszcz teraz* — nie te z marzeń o burzy.",
      ua: "Міст з уроку 36: *епітет* — слово, що означає іменник (*який?*). Звичайно це *прикметник*. Під парасолькою запиши епітети, які *описують дощ зараз* — не ті з мрій про бурю."
    },
    items: [
      { pl: "Ze strofy 1–2: *mokry, mżący, wodnisty, rośny, jesienny, siwy, słabe, maleńkie, młodziutki*.", ua: "Зі строф 1–2: *mokry, mżący, wodnisty, rośny, jesienny, siwy, słabe, maleńkie, młodziutki*." },
      { pl: "Rzeczownik + epitet: *wodnisty puszek*, *siwy kapuśniaczek*, *młodziutki deszczyk*, *kapaninka biedna*.", ua: "Іменник + епітет: *wodnisty puszek*, *siwy kapuśniaczek*, *młodziutki deszczyk*, *kapaninka biedna*." },
      { pl: "Wzór z lekcji: kot — *jaki?* → *bury*; deszczyk — *jaki?* → *młodziutki*.", ua: "Зразок з уроку: кіт — *який?* → *bury*; дощик — *який?* → *młodziutki*." }
    ],
    task: {
      id: "t40-s06-epitety",
      type: "multiple-choice",
      question: {
        pl: "Które to NA PEWNO epitety deszczyku *teraz*? Zaznacz wszystkie pewne.",
        ua: "Які це НАПЕВНО епітети дощика *зараз*? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "młodziutki, siwy, wodnisty, maleńkie", ua: "młodziutki, siwy, wodnisty, maleńkie" } },
        { id: "b", label: { pl: "gromka (burza) — to z marzeń, nie z portretu «teraz»", ua: "gromka (буря) — це з мрій, не з портрета «зараз»" } },
        { id: "c", label: { pl: "sypie się, skacze (to czasowniki: co robi?)", ua: "sypie się, skacze (це дієслова: що робить?)" } },
        { id: "d", label: { pl: "mokry, mżący, biedna", ua: "mokry, mżący, biedna" } }
      ],
      answer: ["a", "d"],
      hint: {
        pl: "Epitet = *jaki?* Gromka burza jest w strofie 3 (marzenie). Sypie się = *co robi?*",
        ua: "Епітет = *який?* Gromka burza — у строфі 3 (мрія). Sypie się = *що робить?*"
      },
      explanation: {
        pl: "Teraz: młodziutki, siwy, wodnisty, mokry, mżący, biedna. Gromka = marzenie. Sypie się = czasownik.",
        ua: "Зараз: młodziutki, siwy, wodnisty, mokry, mżący, biedna. Gromka = мрія. Sypie się = дієслово."
      }
    }
  },
  // 7
  {
    type: "practice",
    heading: { pl: "Co robi deszczyk teraz", ua: "Що робить дощик зараз" },
    formula: "s. 76  ·  parasol  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Druga ćwiartka parasola: *Co robi deszcz?* Szukaj *czasowników* w strofach 1–2 i 4 (to, co dzieje się naprawdę — nie w marzeniu).",
      ua: "Друга чверть парасольки: *Що робить дощ?* Шукай *дієслова* в строфах 1–2 і 4 (те, що діється насправді — не в мрії)."
    },
    items: [
      { pl: "Teraz: *sypie się, skacze, kropi, fruwają (kropki), pusząc się*, ledwo *bębnić nie potrafi*.", ua: "Зараз: *sypie się, skacze, kropi, fruwają (краплі), pusząc się*, ледве *bębnić nie potrafi*." },
      { pl: "To drobne ruchy: jak muszki, jak maczek z worka — nie jak ulewa.", ua: "Це дрібні рухи: як мошки, як мак із мішка — не як злива." },
      { pl: "W zeszycie pod parasolem: trzy czasowniki z cytatem.", ua: "У зошиті під парасолькою: три дієслова з цитатою." }
    ],
    task: {
      id: "t40-s07-teraz",
      type: "single-choice",
      question: {
        pl: "Co deszczyk NA PEWNO robi *teraz* (nie w marzeniu)?",
        ua: "Що дощик НАПЕВНО робить *зараз* (не в мрії)?"
      },
      options: [
        { id: "a", label: { pl: "Sypie się, skacze i ledwo kropi.", ua: "Сиплеться, стрибає і ледве кропить." } },
        { id: "b", label: { pl: "Lunie ulewą i siecze miasto chłostą.", ua: "Хлюпне зливою і шмагає місто батогом." } },
        { id: "c", label: { pl: "Dzioba szyby zawiłą ospą przez całą burzę.", ua: "Дзьобає шибки віспою протягом усієї бурі." } }
      ],
      answer: "a",
      hint: {
        pl: "Strofa 3 zaczyna się od *Chciałby*. To tryb marzenia. Strofa 1–2 = teraz.",
        ua: "Строфа 3 починається з *Chciałby*. Це спосіб мрії. Строфи 1–2 = зараз."
      },
      explanation: {
        pl: "Teraz: sypie się, skacze, kropi. Ulewa, siec, dziobać szyby = czego *chce*, nie co robi.",
        ua: "Зараз: сиплеться, стрибає, кропить. Злива, siec, дзьобати шибки = чого *хоче*, не що робить."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Porównania w wierszu", ua: "Порівняння у вірші" },
    formula: "s. 76  ·  zad. 1a  ·  jak / jakby",
    promptPlace: "before",
    prompt: {
      pl: "Porównanie łączy dwa obrazy słowem *jak*, *jakby*, *niczym*, *niby*. W strofie 1 Tuwim od razu stawia dwa: deszczyk *jak* muszki i *jakby* maczek. Zapisz je pod parasolem.",
      ua: "Порівняння з’єднує два образи словом *jak*, *jakby*, *niczym*, *niby*. У строфі 1 Тувім одразу ставить два: дощик *jak* мошки і *jakby* мак. Запиши їх під парасолькою."
    },
    items: [
      { pl: "*Jak wesoły mihon drobnych, wilgnych muszek* — deszcz jak rojek mokrych muszek.", ua: "*Jak wesoły mihon drobnych, wilgnych muszek* — дощ як рій вологих мошок." },
      { pl: "*Jakby z worków szarych mokry, mżący maczek* — kropelki jak ziarenka maku z worka.", ua: "*Jakby z worków szarych mokry, mżący maczek* — краплі як зернята маку з мішка." },
      { pl: "To *nie* epitety. Epitet = *jaki deszczyk?* Porównanie = *do czego jest podobny?*", ua: "Це *не* епітети. Епітет = *який дощик?* Порівняння = *до чого подібний?*" }
    ],
    task: {
      id: "t40-s08-porownania",
      type: "single-choice",
      question: {
        pl: "Który cytat to NA PEWNO porównanie?",
        ua: "Яка цитата НАПЕВНО є порівнянням?"
      },
      options: [
        { id: "a", label: { pl: "Jak wesoły mihon drobnych, wilgnych muszek", ua: "Jak wesoły mihon drobnych, wilgnych muszek" } },
        { id: "b", label: { pl: "młodziutki deszczyk", ua: "młodziutki deszczyk" } },
        { id: "c", label: { pl: "sypie się i skacze", ua: "sypie się i skacze" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *jak* / *jakby*. *Młodziutki* = epitet. *Sypie się* = czasownik.",
        ua: "Шукай *jak* / *jakby*. *Młodziutki* = епітет. *Sypie się* = дієслово."
      },
      explanation: {
        pl: "Porównanie ma *jak* lub *jakby*. *Młodziutki deszczyk* = epitet + rzeczownik. *Sypie się* = co robi.",
        ua: "Порівняння має *jak* або *jakby*. *Młodziutki deszczyk* = епітет + іменник. *Sypie się* = що робить."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Czego pragnie deszczyk", ua: "Чого прагне дощик" },
    formula: "s. 76  ·  strofa 3  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Czwarta ćwiartka parasola: *Co chciałby robić deszcz?* Mały kapuśniaczek czuje się słaby, więc marzy na wyrost — jak dziecko, które chce być «duże». Wypisz czasowniki ze strofy 3.",
      ua: "Четверта чверть парасольки: *Що хотів би робити дощ?* Малий kapuśniaczek почувається слабким, тож мріє на виріст — як дитина, яка хоче бути «великою». Випиши дієслова зі строфи 3."
    },
    items: [
      { pl: "Pragnie być *dorosłym, prawdziwym deszczem*.", ua: "Прагне бути *дорослим, справжнім дощем*." },
      { pl: "Chciałby *ulewą lunąć* w gromkiej burzy.", ua: "Хотів би *хлюпнути зливою* в гучній бурі." },
      { pl: "Chce *siec* miasto na ukos, *rozpluskać się* w rynnach, *rozlać się* w kałuży, *dziobać* szyby.", ua: "Хоче *шмагати* місто навскіс, *розплюскатися* в ринвах, *розлитися* в калюжі, *дзьобати* шибки." },
      { pl: "W zeszycie dwa słupki: *teraz* | *marzenia* — jak notatka z planu lekcji.", ua: "У зошиті два стовпчики: *зараз* | *мрії* — як нотатка з плану уроку." }
    ],
    task: {
      id: "t40-s09-marzenia",
      type: "multiple-choice",
      question: {
        pl: "Czego deszczyk NA PEWNO pragnie? Zaznacz wszystkie pewne.",
        ua: "Чого дощик НАПЕВНО прагне? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Być dorosłym deszczem i lunąć ulewą.", ua: "Бути дорослим дощем і хлюпнути зливою." } },
        { id: "b", label: { pl: "Rozpluskać się w rynnach i rozlać w kałuży.", ua: "Розплюскатися в ринвах і розлитися в калюжі." } },
        { id: "c", label: { pl: "Zostać wróblem na drucie.", ua: "Стати горобцем на дроті." } },
        { id: "d", label: { pl: "Głośno bębnić i siec miasto chłostą.", ua: "Гучно барабанити і шмагати місто батогом." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Strofa 2–3. Wróbel jest na końcu, ale deszczyk nie chce nim być.",
        ua: "Строфи 2–3. Горобець є в кінці, але дощик не хоче ним бути."
      },
      explanation: {
        pl: "Marzenia: dorosły deszcz, ulewa, rynny, kałuże, bębnienie, chłosta. Wróbel kończy deszcz — to nie marzenie deszczyku.",
        ua: "Мрії: дорослий дощ, злива, ринви, калюжі, барабан, батіг. Горобець кінчає дощ — це не мрія дощика."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Nietypowe zachowanie deszczu", ua: "Незвичайна поведінка дощу" },
    formula: "s. 76  ·  zad. 1c",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: powiedz, które zachowania są *charakterystyczne tylko dla człowieka*, i podkreśl je. Deszcz w przyrodzie nie marzy i nie wstydzi się, że jest mały. Tu — tak. Jutro nazwiemy ten zabieg *uosobieniem*. Dziś wystarczy *zauważyć*.",
      ua: "Підручник: скажи, які поведінки *характерні лише для людини*, і підкресли їх. Дощ у природі не мріє і не соромиться, що малий. Тут — так. Завтра назвемо цей засіб *уособленням*. Сьогодні досить *помітити*."
    },
    items: [
      { pl: "Ludzkie: *chciałby, marzy, nie potrafi jeszcze, pusząc się, kapaninka biedna*.", ua: "Людське: *chciałby, marzy, nie potrafi jeszcze, pusząc się, kapaninka biedna*." },
      { pl: "Przyrodnicze (deszcz tak bywa): *sypie się, kropi, skacze* (krople).", ua: "Природне (дощ так буває): *sypie się, kropi, skacze* (краплі)." },
      { pl: "To zachowanie dziecka: słabe teraz — wielkie plany na «kiedy będę duży».", ua: "Це поведінка дитини: слабке зараз — великі плани на «коли буду великим»." }
    ],
    task: {
      id: "t40-s10-nietypowe",
      type: "true-false",
      question: {
        pl: "Czy zdanie «Tak to sobie marzy kapaninka biedna» opisuje zachowanie, które w przyrodzie ma zwykła kropla wody — bez wyobraźni poety?",
        ua: "Чи речення «Tak to sobie marzy kapaninka biedna» описує поведінку, яку в природі має звичайна крапля води — без уяви поета?"
      },
      answer: false,
      hint: {
        pl: "Czy woda *marzy* i czuje się *biedna*? To cechy człowieka.",
        ua: "Чи вода *мріє* і почувається *бідолашною*? Це риси людини."
      },
      explanation: {
        pl: "Fałsz. Marzyć i być «biednym» umie człowiek. Tuwim nadaje to deszczowi. Jutro: uosobienie.",
        ua: "Хиба. Мріяти і бути «бідолашним» вміє людина. Тувім надає це дощу. Завтра: уособлення."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 76  ·  lekcja 40",
    promptPlace: "before",
    prompt: {
      pl: "Zamykamy godzinę 40. W zeszycie zostaje parasol: epitety, porównania, *co robi* / *co chciałby*. Definicji uosobienia z ramki s. 77 dziś nie zapisujemy — to lekcja 41.",
      ua: "Закриваємо годину 40. У зошиті лишається парасолька: епітети, порівняння, *що робить* / *що хотів би*. Означення уособлення з рамки с. 77 сьогодні не записуємо — це урок 41."
    },
    items: [
      { pl: "Bohater = młodziutki deszczyk / kapuśniaczek, nie Tuwim.", ua: "Герой = молодесенький deszczyk / kapuśniaczek, не Тувім." },
      { pl: "Teraz: kropi, mży, sypie się. Marzenia: ulewa, rynny, kałuże, bębnienie.", ua: "Зараз: кропить, мрячить, сиплеться. Мрії: злива, ринви, калюжі, барабан." },
      { pl: "Glosy: wilgny, mżyć, rośny, siec.", ua: "Глоси: wilgny, mżyć, rośny, siec." },
      { pl: "Jutro: ramka *uosobienie*, tekst w 1. osobie i dialog kropli.", ua: "Завтра: рамка *uosobienie*, текст у 1. особі і діалог крапель." }
    ],
    task: {
      id: "t40-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Znam treść, bohatera, glosy, epitety, porównania i marzenia deszczyku.", ua: "Знаю зміст, героя, глоси, епітети, порівняння і мрії дощика." } },
        { id: "b", label: { pl: "Zapisałem już ramkę uosobienia i dialog dwóch kropli z myślnikami.", ua: "Уже записав рамку уособлення і діалог двох крапель з тире." } },
        { id: "c", label: { pl: "Opisałem obraz van Gogha *Słoneczniki*.", ua: "Описав картину ван Гога *Słoneczniki*." } }
      ],
      answer: "a",
      hint: {
        pl: "Uosobienie i dialog = 41. Słoneczniki = 39.",
        ua: "Уособлення і діалог = 41. Соняшники = 39."
      },
      explanation: {
        pl: "Lekcja 40 = treść + kapuśniaczek + środki opisu + marzenia. Ramka s. 77 — jutro. Van Gogh — 39.",
        ua: "Урок 40 = зміст + kapuśniaczek + засоби опису + мрії. Рамка с. 77 — завтра. Ван Гог — 39."
      }
    }
  }
] };
