function emT52(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T52 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT52(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T52 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 94  ·  Lekcja 52  ·  podmiot zbiorowy",
    promptPlace: "before",
    prompt: {
      pl: "Dział *Gdzie stopy nasze*. Temat: *Mamy wspólne cele…* Wiersz Gałczyńskiego, nagranie, czasowniki z *-my*, ramka *podmiot zbiorowy* i krótka wypowiedź „my”. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *Gdzie stopy nasze*. Тема: *Mamy wspólne cele…* Вірш Ґалчинського, запис, дієслова з *-my*, рамка *podmiot zbiorowy* і коротка репліка «ми». Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wypiszę czasowniki wskazujące na osobę mówiącą (*-my*);", ua: "випишу дієслова, що вказують на мовця (*-my*);" },
      { pl: "objaśnię, o czym informuje cząstka *-my*;", ua: "поясню, про що повідомляє частка *-my*;" },
      { pl: "rozpoznam *podmiot zbiorowy*;", ua: "розпізнаю *збірний суб’єкт*;" },
      { pl: "napiszę krótką wypowiedź w 1. os. l. mn. czasu przyszłego.", ua: "напишу коротку репліку в 1 ос. мн. майбутнього часу." }
    ],
    task: {
      id: "t52-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Wskazać czasowniki z *-my* i wyjaśnić ich sens.", ua: "Вказати дієслова з *-my* і пояснити їхній сенс." } },
        { id: "b", label: { pl: "Rozpoznać podmiot zbiorowy.", ua: "Розпізнати збірний суб’єкт." } },
        { id: "c", label: { pl: "Już dziś odmienić wszystkie liczebniki z s. 97.", ua: "Уже сьогодні відмінити всі числівники з с. 97." } },
        { id: "d", label: { pl: "Napisać krótką wypowiedź jako „my”.", ua: "Написати коротку репліку як «ми»." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Liczebnik jest tematem 53. Co zostaje na dziś?",
        ua: "Числівник — тема 53. Що лишається на сьогодні?"
      },
      explanation: {
        pl: "Dziś: wiersz, *-my*, podmiot zbiorowy, wypowiedź. Liczebnik — lekcja 53.",
        ua: "Сьогодні: вірш, *-my*, збірний суб’єкт, репліка. Числівник — урок 53."
      }
    }
  },

  // 2 — poem + audio
  {
    type: "observe",
    heading: { pl: "Czytamy · Kronika olsztyńska", ua: "Читаємо · Kronika olsztyńska" },
    formula: "s. 94  ·  nagranie  ·  K. I. Gałczyński",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw *posłuchaj* nagrania GWO. Potem przeczytaj fragment. Glosa: *bór* = duży, stary, gęsty las. Wiersza nie tłumaczymy słowo w słowo.",
      ua: "Спочатку *послухай* запис GWO. Потім прочитай уривок. Глоса: *bór* = великий старий густий ліс. Вірш не перекладаємо дослівно."
    },
    visual: vizGhT52("t52-wiersz.png", {
      alt: { pl: "Gałczyński — Kronika olsztyńska (fragment)", ua: "Ґалчинський — Kronika olsztyńska (уривок)" },
      place: "after"
    }),
    
    task: {
      id: "t52-s02-bor",
      type: "single-choice",
      question: {
        pl: "*Bór* w glosie oznacza:",
        ua: "*Bór* у глосі означає:"
      },
      options: [
        { id: "a", label: { pl: "duży, stary, gęsty las", ua: "великий старий густий ліс" } },
        { id: "b", label: { pl: "małą kałużę przy drodze", ua: "малу калюжу біля дороги" } },
        { id: "c", label: { pl: "nazwę miasta Olsztyn", ua: "назву міста Olsztyn" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa w podręczniku: duży, stary, gęsty las iglasty…",
        ua: "Глоса в підручнику: великий старий густий хвойний ліс…"
      },
      explanation: {
        pl: "*Bór* = duży gęsty las. UA: *бір*.",
        ua: "*Bór* = великий густий ліс. UA: *бір*."
      }
    }
  },

  // 3 — verbs with -my (zad 1a)
  {
    type: "practice",
    heading: { pl: "Czasowniki z «-my»", ua: "Дієслова з «-my»" },
    formula: "s. 94  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Wymień czasowniki wskazujące na osobę mówiącą. Schemat z podręcznika (*Co zrobimy?*) — kliknij obraz, jeśli trzeba.",
      ua: "Назви дієслова, що вказують на мовця. Схема з підручника (*Co zrobimy?*) — клікни зображення, якщо треба."
    },
    visual: vizGhT52("t52-czasowniki.png", {
      alt: { pl: "Schemat: Co zrobimy?", ua: "Схема: Co zrobimy?" },
      place: "after"
    }),
    items: [
      { pl: "statek → **popłyniemy**", ua: "корабель → **popłyniemy**" },
      { pl: "brzeg / zatoka → **pokłonimy się** · **odkryjemy**", ua: "берег / затока → **pokłonimy się** · **odkryjemy**" },
      { pl: "ryby → **znajdziemy**", ua: "риби → **znajdziemy**" },
      { pl: "gwiazdy → **złowimy**", ua: "зірки → **złowimy**" },
      { pl: "bory → **damy** imię", ua: "бори → **damy** imię" },
      { pl: "ptaki → **znajdziemy**", ua: "птахи → **znajdziemy**" },
      { pl: "serce przyrody → **posłuchamy**", ua: "серце природи → **posłuchamy**" }
    ],
    task: {
      id: "t52-s03-czasowniki",
      type: "multiple-choice",
      question: {
        pl: "Które formy NA PEWNO pochodzą z wiersza (1. os. l. mn.)? Zaznacz wszystkie.",
        ua: "Які форми НАПЕВНО з вірша (1 ос. мн.)? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "popłyniemy · pokłonimy się · odkryjemy", ua: "popłyniemy · pokłonimy się · odkryjemy" } },
        { id: "b", label: { pl: "znajdziemy · złowimy · damy · posłuchamy", ua: "znajdziemy · złowimy · damy · posłuchamy" } },
        { id: "c", label: { pl: "płynę · znajduję · słucham (1. os. l. poj.)", ua: "płynę · znajduję · słucham (1 ос. одн.)" } },
        { id: "d", label: { pl: "płyną · znajdują (3. os. l. mn.)", ua: "płyną · znajdują (3 ос. мн.)" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Szukaj końcówki *-my* / *-emy* / *-imy*: *my* robimy.",
        ua: "Шукай закінчення *-my* / *-emy* / *-imy*: *ми* робимо."
      },
      explanation: {
        pl: "A i B = formy z wiersza. C i D to inne osoby / liczby.",
        ua: "A і B = форми з вірша. C і D — інші особи / числа."
      }
    }
  },

  // 4 — what -my means (1b)
  {
    type: "practice",
    heading: { pl: "Co mówi cząstka «-my»?", ua: "Що каже частка «-my»?" },
    formula: "s. 94  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Objaśnij, o czym informuje cząstka *-my* we wszystkich tych formach.",
      ua: "Поясни, про що повідомляє частка *-my* в усіх цих формах."
    },
    items: [
      { pl: "*-my* = **1. osoba liczby mnogiej** → mówimy jako **„my”**, nie „ja”.", ua: "*-my* = **1-ша особа множини** → говоримо як **«ми»**, не «я»." },
      { pl: "Podmiot liryczny wypowiada się *w imieniu grupy*.", ua: "Ліричний суб’єкт говорить *від імені групи*." }
    ],
    task: {
      id: "t52-s04-my",
      type: "single-choice",
      question: {
        pl: "Cząstka *-my* informuje, że:",
        ua: "Частка *-my* повідомляє, що:"
      },
      options: [
        { id: "a", label: { pl: "osoba mówiąca to grupa („my”) — 1. os. l. mn.", ua: "мовець — група («ми») — 1 ос. мн." } },
        { id: "b", label: { pl: "mówi tylko jedna osoba w czasie przeszłym", ua: "говорить лише одна особа в минулому часі" } },
        { id: "c", label: { pl: "to zawsze 3. osoba (*oni*)", ua: "це завжди 3-тя особа (*вони*)" } }
      ],
      answer: "a",
      hint: {
        pl: "Porównaj: *idę* (ja) / *idziemy* (my).",
        ua: "Порівняй: *idę* (я) / *idziemy* (ми)."
      },
      explanation: {
        pl: "*-my* = my. To klucz do podmiotu zbiorowego.",
        ua: "*-my* = ми. Це ключ до збірного суб’єкта."
      }
    }
  },

  // 5 — future tense + what connects
  {
    type: "practice",
    heading: { pl: "Czas i wspólny cel", ua: "Час і спільна мета" },
    formula: "s. 94  ·  zad. 2a",
    promptPlace: "before",
    prompt: {
      pl: "Jaką informację o *czasie* zawierają czasowniki? Co łączy osoby, w których imieniu mówi podmiot?",
      ua: "Яку інформацію про *час* містять дієслова? Що єднає осіб, від імені яких говорить суб’єкт?"
    },
    items: [
      { pl: "Formy typu *popłyniemy, złowimy* = **czas przyszły** (plany / marzenia).", ua: "Форми типу *popłyniemy, złowimy* = **майбутній час** (плани / мрії)." },
      { pl: "Łączy ich: wspólna wyprawa, ciekawość świata, odkrywanie przyrody.", ua: "Єднає їх: спільна подорож, цікавість до світу, відкриття природи." }
    ],
    task: {
      id: "t52-s05-czas",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie prawdziwe.",
        ua: "Познач усі правдиві."
      },
      options: [
        { id: "a", label: { pl: "Czasowniki są w czasie *przyszłym*.", ua: "Дієслова в *майбутньому* часі." } },
        { id: "b", label: { pl: "Osoby łączy wspólne dążenie: podróż / odkrywanie.", ua: "Осіб єднає спільне прагнення: подорож / відкриття." } },
        { id: "c", label: { pl: "Wszystkie formy są w czasie przeszłym (*popłynęliśmy*).", ua: "Усі форми в минулому часі (*popłynęliśmy*)." } },
        { id: "d", label: { pl: "Podmiot mówi tylko o sobie w liczbie pojedynczej (*ja*).", ua: "Суб’єкт говорить лише про себе в однині (*я*)." } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "*Jutro popłyniemy* — jutro = przyszłość. Końcówki *-my*.",
        ua: "*Jutro popłyniemy* — завтра = майбутнє. Закінчення *-my*."
      },
      explanation: {
        pl: "A i B prawdziwe. C i D fałszywe.",
        ua: "A і B правдиві. C і D хибні."
      }
    }
  },

  // 6 — poetic images + wniosek
  {
    type: "practice",
    heading: { pl: "Obrazy poetyckie · wniosek", ua: "Поетичні образи · висновок" },
    formula: "s. 94  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Objaśnij obrazy, potem uzupełnij wniosek. Spójrz na karty z cytatami (kliknij).",
      ua: "Поясни образи, потім доповни висновок. Глянь на картки з цитатами (клікни)."
    },
    visual: vizGhT52("t52-obrazy.png", {
      alt: { pl: "Karty obrazów poetyckich", ua: "Картки поетичних образів" },
      place: "after"
    }),
    items: [
      { pl: "*dalej niż obłoki* — bardzo daleka podróż / marzenie", ua: "*dalej niż obłoki* — дуже далека подорож / мрія" },
      { pl: "*pokłonimy się brzegom* — szacunek dla nowych miejsc", ua: "*pokłonimy się brzegom* — повага до нових місць" },
      { pl: "*złowimy gwiazdy* — niezwykłe odkrycia (przenośnia)", ua: "*złowimy gwiazdy* — незвичайні відкриття (метафора)" },
      { pl: "*zielone serce przyrody* — życie / rytm natury", ua: "*zielone serce przyrody* — життя / ритм природи" }
    ],
    task: {
      id: "t52-s06-wniosek",
      type: "single-choice",
      question: {
        pl: "Najlepsze uzupełnienie wniosku z podręcznika:",
        ua: "Найкраще доповнення висновку з підручника:"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "chcą poznawać / odkrywać świat · są ciekawi przygód · można nazwać ich podróżnikami / odkrywcami",
            ua: "хочуть пізнавати / відкривати світ · цікаві до пригод · можна назвати мандрівниками / відкривачами"
          }
        },
        {
          id: "b",
          label: {
            pl: "chcą zostać w domu · są znudzeni · nazywamy ich urzędnikami",
            ua: "хочуть лишитися вдома · нудьгують · називаємо їх чиновниками"
          }
        },
        {
          id: "c",
          label: {
            pl: "chcą tylko spać · są samotni · nie mają wspólnych celów",
            ua: "хочуть лише спати · самотні · не мають спільних цілей"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Wiersz pełen *nowych* brzegów, zatok, gwiazd, ptaków.",
        ua: "Вірш повний *нових* берегів, заток, зірок, птахів."
      },
      explanation: {
        pl: "Wniosek: chcą odkrywać · są ciekawi · podróżnicy / odkrywcy / marzyciele.",
        ua: "Висновок: хочуть відкривати · цікаві · мандрівники / відкривачі / мрійники."
      }
    }
  },

  // 7 — concept podmiot zbiorowy
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · podmiot zbiorowy", ua: "Запам’ятай · збірний суб’єкт" },
    formula: "s. 94  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Ramka z podręcznika. Zapisz definicję. Potem przykłady z podkreśleniami.",
      ua: "Рамка з підручника. Запиши означення. Потім приклади з підкресленнями."
    },
    visual: vizGhT52("t52-ramka.png", {
      alt: { pl: "Ramka: podmiot zbiorowy", ua: "Рамка: podmiot zbiorowy" },
      place: "after"
    }),
    text: {
      pl: "Podmiot zbiorowy — podmiot liryczny mówiący jako „my” (1. os. l. mn.) w imieniu grupy o wspólnych dążeniach, emocjach, przekonaniach.",
      ua: "Збірний суб’єкт — ліричний суб’єкт, що говорить як «ми» (1 ос. мн.) від імені групи зі спільними прагненнями, емоціями, переконаннями."
    },
    items: [
      { pl: "Gałczyński: *popłyniemy, złowimy, posłuchamy* → **my**.", ua: "Ґалчинський: *popłyniemy, złowimy, posłuchamy* → **ми**." },
      { pl: "Kulmowa: *Nam… My… doczekamy się…*", ua: "Kulmowa: *Nam… My… doczekamy się…*" },
      { pl: "Kamieńska: *oplatamy*…", ua: "Kamieńska: *oplatamy*…" },
      { pl: "Most UA: *збірний ліричний суб’єкт* / «ми» від імені групи.", ua: "Міст UA: *збірний ліричний суб’єкт* / «ми» від імені групи." }
    ],
    task: {
      id: "t52-s07-definicja",
      type: "single-choice",
      question: {
        pl: "Podmiot zbiorowy to:",
        ua: "Збірний суб’єкт — це:"
      },
      options: [
        { id: "a", label: { pl: "„my” mówiące w imieniu grupy o wspólnych celach", ua: "«ми», що говорить від імені групи зі спільними цілями" } },
        { id: "b", label: { pl: "zawsze tylko jedno „ja” bez grupy", ua: "завжди лише одне «я» без групи" } },
        { id: "c", label: { pl: "nazwa autora na okładce książki", ua: "ім’я автора на обкладинці книжки" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: *w imieniu jakiejś grupy* + 1. os. l. mn.",
        ua: "Рамка: *від імені певної групи* + 1 ос. мн."
      },
      explanation: {
        pl: "Podmiot zbiorowy = my + wspólne dążenia grupy.",
        ua: "Збірний суб’єкт = ми + спільні прагнення групи."
      }
    }
  },

  // 8 — recognize in examples
  {
    type: "practice",
    heading: { pl: "Rozpoznaję podmiot zbiorowy", ua: "Розпізнаю збірний суб’єкт" },
    formula: "s. 94  ·  przykłady z ramki",
    promptPlace: "before",
    prompt: {
      pl: "Wskaż formy, które sygnałują podmiot zbiorowy.",
      ua: "Вкажи форми, що сигналізують збірний суб’єкт."
    },
    task: {
      id: "t52-s08-rozpoznaj",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie sygnały podmiotu zbiorowego.",
        ua: "Познач усі сигнали збірного суб’єкта."
      },
      options: [
        { id: "a", label: { pl: "*My doczekamy się dnia…* (Kulmowa)", ua: "*My doczekamy się dnia…* (Kulmowa)" } },
        { id: "b", label: { pl: "*oplatamy ją gorączkowo…* (Kamieńska)", ua: "*oplatamy ją gorączkowo…* (Kamieńska)" } },
        { id: "c", label: { pl: "*popłyniemy daleko…* (Gałczyński)", ua: "*popłyniemy daleko…* (Gałczyński)" } },
        { id: "d", label: { pl: "*Idę sam do domu.* (tylko „ja”)", ua: "*Idę sam do domu.* (лише «я»)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Szukaj *my / nam / -my* w czasowniku.",
        ua: "Шукай *my / nam / -my* в дієслові."
      },
      explanation: {
        pl: "A–C = „my”. D = podmiot indywidualny (*ja*).",
        ua: "A–C = «ми». D = індивідуальний суб’єкт (*я*)."
      }
    }
  },

  // 9 — writing zad 3
  {
    type: "practice",
    heading: { pl: "Piszemy jako «my»", ua: "Пишемо як «ми»" },
    formula: "s. 94  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz jedną propozycję. Użyj czasowników w **1. os. l. mn.** (najlepiej czas przyszły w opcji o planach). Spójrz na ilustrację miejsc wyprawy.",
      ua: "Обери одну пропозицію. Використай дієслова в **1 ос. мн.** (краще майбутній час у варіанті про плани). Глянь на ілюстрацію місць подорожі."
    },
    visual: vizGhT52("t52-wyprawa.jpg", {
      alt: { pl: "Miejsca wyprawy: jaskinia, rafy, góry, las, niebo", ua: "Місця подорожі: печера, рифи, гори, ліс, небо" },
      place: "after"
    }),
    items: [
      { pl: "**A.** W imieniu grupy o wspólnych zainteresowaniach — plany / marzenia (*jutro zrobimy…*).", ua: "**A.** Від імені групи зі спільними інтересами — плани / мрії (*jutro zrobimy…*)." },
      { pl: "**B.** W imieniu pasjonatów przygód — co się wydarzyło na wyprawie (*dotarliśmy… znaleźliśmy…*).", ua: "**B.** Від імені прихильників пригод — що сталося в подорожі (*dotarliśmy… znaleźliśmy…*)." },
      { pl: "Wzór A: *Jutro popłyniemy… Odkryjemy… Posłuchamy…*", ua: "Зразок A: *Jutro popłyniemy… Odkryjemy… Posłuchamy…*" }
    ],
    task: {
      id: "t52-s09-wzor",
      type: "single-choice",
      question: {
        pl: "Który tekst poprawnie używa podmiotu zbiorowego (plany)?",
        ua: "Який текст правильно використовує збірний суб’єкт (плани)?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Jutro pójdziemy w góry. Odkryjemy nową ścieżkę i posłuchamy ciszy lasu.",
            ua: "Jutro pójdziemy w góry. Odkryjemy nową ścieżkę i posłuchamy ciszy lasu."
          }
        },
        {
          id: "b",
          label: {
            pl: "Jutro pójdę sam. Odkryję ścieżkę. (tylko „ja”)",
            ua: "Jutro pójdę sam. Odkryję ścieżkę. (лише «я»)"
          }
        },
        {
          id: "c",
          label: {
            pl: "Oni pójdą w góry. Oni odkryją ścieżkę. (3. os.)",
            ua: "Oni pójdą w góry. Oni odkryją ścieżkę. (3 ос.)"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *-my / -emy / -imy*: *pójdziemy, odkryjemy…*",
        ua: "Шукай *-my / -emy / -imy*: *pójdziemy, odkryjemy…*"
      },
      explanation: {
        pl: "A = my + przyszłość. B = ja. C = oni.",
        ua: "A = ми + майбутнє. B = я. C = вони."
      }
    }
  },

  // 10 — open writing + summary
  {
    type: "summary",
    heading: { pl: "Twoja praca + co zabieram", ua: "Твоя робота + що забираю" },
    formula: "s. 94  ·  zad. 3  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Napisz 5–8 zdań (opcja A lub B). Minimum 4 czasowniki w 1. os. l. mn.",
      ua: "Напиши 5–8 речень (варіант A або B). Мінімум 4 дієслова в 1 ос. мн."
    },
    items: [
      { pl: "*-my* = mówimy jako grupa.", ua: "*-my* = говоримо як група." },
      { pl: "Podmiot zbiorowy = „my” w imieniu grupy o wspólnych celach.", ua: "Збірний суб’єкт = «ми» від імені групи зі спільними цілями." },
      { pl: "W *Kronice olsztyńskiej* — wspólna wyprawa i odkrywanie przyrody.", ua: "У *Kronice olsztyńskiej* — спільна подорож і відкриття природи." }
    ],
    task: {
      id: "t52-s10-open",
      type: "open-answer",
      question: {
        pl: "Twoja wypowiedź w imieniu grupy („my”):",
        ua: "Твоя репліка від імені групи («ми»):"
      },
      hint: {
        pl: "Start: Jutro… / Wczoraj… Użyj: pójdziemy, znajdziemy, zobaczymy, posłuchamy…",
        ua: "Старт: Jutro… / Wczoraj… Використай: pójdziemy, znajdziemy, zobaczymy, posłuchamy…"
      },
      explanation: {
        pl: "Sprawdź: czy widać *-my* i wspólny cel grupy?",
        ua: "Перевір: чи видно *-my* і спільну мету групи?"
      }
    }
  }
]};
