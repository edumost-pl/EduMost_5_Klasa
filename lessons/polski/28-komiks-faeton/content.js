function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_SCH = "Styl: infografika szkolna. Zero znaku wodnego. PNG 16:9.";
var IMG_STYLE_KOM = "Styl: komiks GWO klasa 5, ochra. Zero napisów, zero znaku wodnego. PNG 16:9.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "../28-komiks-faeton/" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostT28Blocks = [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 59–60  ·  ciąg dalszy  ·  lekcja 28",
    promptPlace: "before",
    prompt: {
      pl: "Ciąg dalszy Heliosa. Teraz *tworzymy*: plan, komiks (6 kadrów, dymki, tytuł), *reklamę*, bóstwa słońca, komiks z *innego* mitu, prezentację. Treść mitu — lekcja 27.",
      ua: "Продовження Геліоса. Тепер *творимо*: план, комікс, *рекламу*, богів сонця, комікс з *іншого* міфу, презентацію."
    },
    items: [
      { pl: "ułożę *ramowy plan* 5–6 punktów i nadam komiksowi *tytuł*;", ua: "складу *рамковий план* 5–6 пунктів і дам коміксу *назву*;" },
      { pl: "wykonam kadry z *dymkami* i onomatopeją;", ua: "зроблю кадри з *хмарками* і звуконаслідуванням;" },
      { pl: "zredaguję *zapowiedź-reklamę* komiksu;", ua: "зредагую *анонс-рекламу* коміксу;" },
      { pl: "wskażę bóstwa słońca w *innych* mitologiach i zaplanuję komiks z innego mitu.", ua: "вкажу богів сонця в *інших* міфологіях і складу комікс з іншого міфу." }
    ],
    task: {
      id: "t28-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Ułożyć plan 5–6 punktów i zatytułować komiks.", ua: "Скласти план 5–6 пунктів і назвати комікс." } },
        { id: "b", label: { pl: "Dodać dymki, wykrzykniki i napisać reklamę.", ua: "Додати хмарки, вигуки і написати рекламу." } },
        { id: "c", label: { pl: "Od nowa streszczać Królestwo morza od pierwszej linijki.", ua: "Наново переказувати Царство моря з першого рядка." } },
        { id: "d", label: { pl: "Podać imię bóstwa słońca z innej mitologii.", ua: "Подати ім’я бога сонця з іншої міфології." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "s. 59–60: zad. 1–3. Mit był wczoraj.",
        ua: "с. 59–60: завд. 1–3. Міф був учора."
      },
      explanation: {
        pl: "Dziś warsztat komiksu. Treść — lekcja 27.",
        ua: "Сьогодні майстерня коміксу. Зміст — урок 27."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1a–c · kto, gdzie, kiedy", ua: "Завд. 1а–в · хто, де, коли" },
    formula: "s. 59",
    promptPlace: "before",
    prompt: {
      pl: "W zespołach stwórzcie komiks. Najpierw: *bohaterowie* na rysunkach, *miejsca*, *czas* (na początku komiksu powiedzcie czytelnikowi).",
      ua: "У командах створіть комікс. Спочатку: *герої*, *місця*, *час* (на початку скажіть читачеві)."
    },
    items: [
      { pl: "a) Helios, Faeton, rumaki, Ziemia, Dzeus; można dodać Heliady.", ua: "a) Геліос, Фаетон, коні, Земля, Дзевс; можна Геліад." },
      { pl: "b) Pałac słońca; niebo / eter; Afryka; rzeka Erydan.", ua: "b) Палац сонця; небо / ефір; Африка; ріка Еридан." },
      { pl: "c) Czas mityczny: „Pewnego świtu w pałacu Heliosa…” — napis na kadrze 1.", ua: "c) Міфічний час: «Одного світанку в палаці Геліоса…» — напис на кадрі 1." }
    ],
    task: {
      id: "t28-s02-kto",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO wstawisz do komiksu *tej* historii? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО вставиш у комікс *цієї* історії? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Helios, Faeton, Dzeus, rydwan, Erydan.", ua: "Геліос, Фаетон, Дзевс, колісниця, Еридан." } },
        { id: "b", label: { pl: "Amfitryta, delfin i pałac z muszli jako główni bohaterowie.", ua: "Амфітріта, дельфін і палац із мушель як головні герої." } },
        { id: "c", label: { pl: "Napis czasu na starcie, np. pewnego świtu.", ua: "Напис часу на старті, напр. одного світанку." } },
        { id: "d", label: { pl: "Miejsca: pałac, niebo, Afryka, rzeka.", ua: "Місця: палац, небо, Африка, ріка." } }
      ],
      answer: ["a", "c", "d"],
      hint: {
        pl: "Nie mieszaj mitów. Kto wozi słońce?",
        ua: "Не змішуй міфи. Хто возить сонце?"
      },
      explanation: {
        pl: "a, c, d z s. 59. Amfitryta — T24–T25.",
        ua: "a, c, d з с. 59. Амфітріта — T24–T25."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1d · plan 6 punktów", ua: "Завд. 1г · план 6 пунктів" },
    formula: "s. 59  ·  ramowy plan",
    promptPlace: "before",
    prompt: {
      pl: "Napiszcie ramowy plan *5–6 punktów*. EduMost daje 6 kadrów — możesz skrócić do 5, ale nie gub pioruna i Erydanu.",
      ua: "Напишіть рамковий план *5–6 пунктів*. EduMost дає 6 кадрів."
    },
    items: [
      { pl: "1. Spotkanie w złotym pałacu i przysięga.", ua: "1. Зустріч у золотому палаці і присяга." },
      { pl: "2. Prośba o wóz i ostrzeżenie Heliosa.", ua: "2. Прохання про віз і попередження Геліоса." },
      { pl: "3. Start rydwanu (WIOOO!).", ua: "3. Старт колісниці (WIOOO!)." },
      { pl: "4. Utrata kontroli: pustynie, Etiopowie.", ua: "4. Втрата контролю: пустелі, ефіопи." },
      { pl: "5. Piorun Dzeusa (BUM!).", ua: "5. Блискавка Дзевса (BUM!)." },
      { pl: "6. Upadek do Erydanu (i ewentualnie Heliady).", ua: "6. Падіння в Еридан (і можливо Геліади)." }
    ],
    task: {
      id: "t28-s03-plan",
      type: "single-choice",
      question: {
        pl: "Który plan jest *tej* historii?",
        ua: "Який план *цієї* історії?"
      },
      options: [
        { id: "a", label: { pl: "Pałac i przysięga → prośba → start → katastrofa → piorun → Erydan.", ua: "Палац і присяга → прохання → старт → катастрофа → блискавка → Еридан." } },
        { id: "b", label: { pl: "Giza → piramida → feluka → e-mail Wiktora.", ua: "Гіза → піраміда → фелука → e-mail Віктора." } },
        { id: "c", label: { pl: "Kaukaz → orzeł → Herakles — bez wozu słońca.", ua: "Кавказ → орел → Геракл — без воза сонця." } }
      ],
      answer: "a",
      hint: {
        pl: "6 kadrów z lekcji 27. Co jest punktem 5?",
        ua: "6 кадрів з уроку 27. Що є пунктом 5?"
      },
      explanation: {
        pl: "Ten sam porządek co kadry 1–6. Egipt i Kaukaz — inne lekcje.",
        ua: "Той самий порядок, що кадри 1–6."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1e–f · rysunek, dymki, tytuł", ua: "Завд. 1д–е · малюнок, хмарки, назва" },
    formula: "s. 59",
    promptPlace: "before",
    prompt: {
      pl: "Do każdego punktu — przynajmniej *jedna* ilustracja. Uzupełnijcie dymkami. Zatytułujcie pracę. Najpierw tekst ołówkiem, potem obwódka dymka — wtedy się zmieści.",
      ua: "До кожного пункту — принаймні *одна* ілюстрація. Доповніть хмарками. Дайте назву. Спочатку текст олівцем, потім обводка."
    },
    text: {
      pl: [
        "*Kolory:* żółty, pomarańcz, czerwień przy pałacu i wozie.",
        "*Miny:* duma, strach, gniew — ważniejsze niż idealna kreska.",
        "*Dymki* (wzorcowe): Faeton / Helios / Dzeus + WIOOO, TUPOT KOPYT, TRZASK, OGIEŃ, BUM, PIUUU.",
        "*Tytuł* (przykłady, nie jedyne): *Syn Słońca*; *Wóz, który spalił ziemię*; *Faeton. Pycha i piorun.*"
      ],
      ua: [
        "*Кольори:* жовтий, помаранч, червоний.",
        "*Міни:* гордість, страх, гнів — важливіші за ідеальну лінію.",
        "*Хмарки* + WIOOO, TRZASK, BUM.",
        "*Назва* (приклади): *Syn Słońca*; *Wóz, który spalił ziemię*."
      ]
    },
    task: {
      id: "t28-s04-dymki",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ma mieć wasz komiks? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО має мати ваш комікс? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Ilustracja do każdego punktu planu i tytuł.", ua: "Ілюстрація до кожного пункту плану і назва." } },
        { id: "b", label: { pl: "Dymki bohaterów; dobrze dodać onomatopeję.", ua: "Хмарки героїв; добре додати звуконаслідування." } },
        { id: "c", label: { pl: "Sześć razy słowo fajny bez dymka.", ua: "Шість разів слово fajny без хмарки." } },
        { id: "d", label: { pl: "Wyraźne miny: pycha, strach, gniew Dzeusa.", ua: "Виразні міни: пиха, страх, гнів Дзевса." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Polecenie f: wypowiedzi + tytuł. Fajny było w T26.",
        ua: "Пункт f: репліки + назва. Fajny було в T26."
      },
      explanation: {
        pl: "Rysunek, dymki, tytuł, miny. Nie powtórki z listu Wojtka.",
        ua: "Малюнок, хмарки, назва, міни."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 2 · reklama komiksu", ua: "Завд. 2 · реклама коміксу" },
    formula: "s. 59",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnijcie tekst, by powstała *zapowiedź* waszego komiksu. To reklama: tytuł, kto opowiada, na jakich wierzeniach, co mit *tłumaczy*.",
      ua: "Доповніть текст, щоб вийшов *анонс* коміксу. Реклама: назва, хто розповідає, на яких віруваннях, що міф *пояснює*."
    },
    text: {
      pl: [
        "W księgarni pojawił się komiks zatytułowany *?*, opowiadany przez *?*. Jest to fantastyczna historia o boskim woźnicy i jego synu, oparta na wierzeniach *?*. Tłumaczy codzienną *?* słońca po niebie, skąd się wzięły *?* i co sprawiło, że Etiopowie *?*."
      ],
      ua: [
        "У книгарні з’явився комікс під назвою *?*, розказаний *?*. Це фантастична історія про божественного візницю і його сина, за віруваннями *?*. Пояснює щоденну *?* сонця небом, звідки взялися *?* і що сталося з ефіопами *?*."
      ]
    },
    reveal: true,
    steps: [
      {
        formula: "PRZYKŁAD EduMost  ·  nie jedyny",
        text: {
          pl: "…zatytułowany *Syn Słońca*, opowiadany przez *klasę 5a / zespół Ani i Marka*. …wierzeniach *Greków*. Tłumaczy codzienną *podróż / jazdę* słońca, skąd się wzięły *pustynie* i że Etiopowie *poczernieli* (w micie).",
          ua: "…назва *Syn Słońca*, розказаний *класом 5а*. …вірування *греків*. Щоденна *подорож* сонця, *пустелі*, ефіопи *почорніли* (у міфі)."
        }
      }
    ],
    task: {
      id: "t28-s05-reklama",
      type: "multiple-choice",
      question: {
        pl: "Która zapowiedź pasuje do *tego* komiksu? Zaznacz wszystkie pewne.",
        ua: "Який анонс пасує до *цього* коміксу? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Tytuł własny + historia woźnicy i syna + wierzenia Greków.", ua: "Власна назва + історія візниці і сина + вірування греків." } },
        { id: "b", label: { pl: "Tłumaczy jazdę słońca, pustynie i (w micie) skórę Etiopów.", ua: "Пояснює їзду сонця, пустелі і (в міфі) шкіру ефіопів." } },
        { id: "c", label: { pl: "Reklama listu Amfitryty i makiety z muszli.", ua: "Реклама листа Амфітріти і макета з мушель." } },
        { id: "d", label: { pl: "Podpis zespołu / klasy, która *opowiada* komiks.", ua: "Підпис команди / класу, який *розповідає* комікс." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Luki: tytuł, kto opowiada, Grecy, podróż słońca, pustynie, Etiopowie.",
        ua: "Пропуски: назва, хто розповідає, греки, подорож сонця, пустелі, ефіопи."
      },
      explanation: {
        pl: "Reklama *tego* mitu. Muszle — inna lekcja.",
        ua: "Реклама *цього* міфу."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 3 · bóstwa słońca", ua: "Завд. 3 · боги сонця" },
    formula: "s. 60",
    visual: vizGh("t28-bogowie.png", {
      alt: {
        pl: "Siedem ochrowych postaci bóstw solarnych z różnych mitologii",
        ua: "Сім охраних постатей сонячних богів різних міфологій"
      },
      title: { pl: "Slajd · bóstwa słońca", ua: "Слайд · боги сонця" },
      prompt: {
        pl: IMG_STYLE_KOM + " IMAGE PROMPT: 7 ochrowych bóstw słońca, zero liter.",
        ua: "Сім богів сонця. Без напису."
      }
    }),
    promptPlace: "before",
    prompt: {
      pl: "Odszukaj w źródłach imiona bogów słońca: np. rzymska, japońska, skandynawska. Podaj *co najmniej jedno* imię i mitologię. Potem *prezentacja*.",
      ua: "Знайди в джерелах імена богів сонця: римська, японська, скандинавська. Подай *хоча б одне* ім’я і міфологію. Потім *презентація*."
    },
    text: {
      pl: [
        "*Helios* — mitologia *grecka* (nasz tekst).",
        "*Sol* — mitologia *rzymska*.",
        "*Amaterasu* — mitologia *japońska*.",
        "*Sól* — mitologia *skandynawska*.",
        "Inne (do zeszytu): *Ra* (Egipt), *Surya* (Indie), *Tonatiuh* (Aztekowie)."
      ],
      ua: [
        "*Helios* — *грецька*.",
        "*Sol* — *римська*.",
        "*Amaterasu* — *японська*.",
        "*Sól* — *скандинавська*.",
        "Інші: *Ra* (Єгипет), *Surya* (Індія), *Tonatiuh* (ацтеки)."
      ]
    },
    task: {
      id: "t28-s06-bogowie",
      type: "multiple-choice",
      question: {
        pl: "Które pary imię + mitologia są poprawne? Zaznacz wszystkie pewne.",
        ua: "Які пари ім’я + міфологія правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Amaterasu — japońska; Sol — rzymska; Sól — skandynawska.", ua: "Amaterasu — японська; Sol — римська; Sól — скандинавська." } },
        { id: "b", label: { pl: "Helios — grecka; Ra — egipska.", ua: "Helios — грецька; Ra — єгипетська." } },
        { id: "c", label: { pl: "Posejdon — bóg słońca w micie o Faetonie.", ua: "Посейдон — бог сонця в міфі про Фаетона." } },
        { id: "d", label: { pl: "Surya — indyjska (do zeszytu jako dodatkowa).", ua: "Surya — індійська (до зошита як додаткова)." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Posejdon to morze. Słońce w Grecji — Helios (i Apollo w innym ujęciu).",
        ua: "Посейдон — море. Сонце в Греції — Геліос."
      },
      explanation: {
        pl: "Sol, Amaterasu, Sól, Helios, Ra, Surya. Posejdon odpada.",
        ua: "Sol, Amaterasu, Sól, Helios, Ra, Surya."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Komiks z innego mitu · prezentacja", ua: "Комікс з іншого міфу · презентація" },
    formula: "program",
    promptPlace: "before",
    prompt: {
      pl: "Program: *komiks na podstawie innego mitu* + *prezentacja efektów*. Nie pisz mitu od zera — bierz ten, który już znasz.",
      ua: "Програма: *комікс на основі іншого міфу* + *презентація*. Не пиши міф з нуля — бери вже відомий."
    },
    items: [
      { pl: "*Prometeusz* (T21): glina → ogień → Kaukaz. 4–6 kadrów.", ua: "*Прометей* (T21): глина → вогонь → Кавказ." },
      { pl: "*Demeter i Kora* (T19–T20): porwanie, Eleusis, granat. Plan jak w teatrze.", ua: "*Деметра і Кора* (T19–T20): викрадення, Елевсін, гранат." },
      { pl: "*Królestwo morza* (T24): Naksos → delfin → pałac. Dymki Amfitryty.", ua: "*Царство моря* (T24): Наксос → дельфін → палац." },
      { pl: "Prezentacja: pokaż tytuł, 1 kadr, jeden dymęk, jedną onomatopeję, jedno bóstwo słońca z zad. 3.", ua: "Презентація: назва, 1 кадр, одна хмарка, одне звуконаслідування, один бог сонця." }
    ],
    task: {
      id: "t28-s07-inny",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO spełnia polecenie *innego* mitu i prezentacji? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО виконує вимогу *іншого* міфу і презентації? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Nowy komiks: Prometeusz albo Demeter, nie drugi raz ten sam Faeton.", ua: "Новий комікс: Прометей або Деметра, не вдруге той самий Фаетон." } },
        { id: "b", label: { pl: "Prezentacja: tytuł + kadr + dymęk / BUM + jedno bóstwo z zad. 3.", ua: "Презентація: назва + кадр + хмарка / BUM + один бог із завд. 3." } },
        { id: "c", label: { pl: "Tylko przepisać SMS mamy ze słowem dobry.", ua: "Лише переписати SMS мами зі словом dobry." } },
        { id: "d", label: { pl: "Plan 5–6 punktów jak przy Faetonie — inna fabuła.", ua: "План 5–6 пунктів як у Фаетона — інша фабула." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Inny mit = nie Helios jeszcze raz. SMS to T26.",
        ua: "Інший міф = не Геліос ще раз. SMS — T26."
      },
      explanation: {
        pl: "Drugi komiks z znanego mitu + krótka prezentacja.",
        ua: "Другий комікс зі знайомого міфу + коротка презентація."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
    formula: "s. 58–60",
    promptPlace: "before",
    prompt: {
      pl: "Zeszyt. Tematy 27–28 razem.",
      ua: "Зошит. Теми 27–28 разом."
    },
    items: [
      { pl: "Mit: Helios woźnicą, Faeton z pychy bierze wóz, Dzeus ratuje ziemię, Erydan.", ua: "Міф: Геліос візниця, Фаетон з пихи бере віз, Дзевс рятує землю, Еридан." },
      { pl: "Komiks: 6 kadrów, dymki, WIOOO/TRZASK/BUM, tytuł, reklama.", ua: "Комікс: 6 кадрів, хмарки, WIOOO/TRZASK/BUM, назва, реклама." },
      { pl: "Przyroda w micie ≠ nauka, ale *pytania* zapisujesz.", ua: "Природа в міфі ≠ наука, але *питання* записуєш." },
      { pl: "Bóstwa: Helios, Sol, Amaterasu, Sól… + komiks z innego mitu i prezentacja.", ua: "Боги: Helios, Sol, Amaterasu, Sól… + комікс з іншого міфу і презентація." }
    ],
    task: {
      id: "t28-s08-nota",
      type: "single-choice",
      question: {
        pl: "Która notatka pokazuje, że umiesz lekcje 27–28?",
        ua: "Яка нотатка показує, що вмієш уроки 27–28?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Parandowski; 6 kadrów; plan i tytuł; reklama; Sol/Amaterasu/Sól; drugi komiks.",
            ua: "Парандовський; 6 кадрів; план і назва; реклама; Sol/Amaterasu/Sól; другий комікс."
          }
        },
        { id: "b", label: { pl: "Tylko synonimy dobry i fajny.", ua: "Лише синоніми dobry і fajny." } },
        { id: "c", label: { pl: "Tylko 7 przypadków rzeczownika.", ua: "Лише 7 відмінків іменника." } }
      ],
      answer: "a",
      hint: {
        pl: "Tematy 27 i 28: komiksowa wersja mitu o Heliosie i Faetonie.",
        ua: "Теми 27 і 28: коміксна версія міфу про Геліоса і Фаетона."
      },
      explanation: {
        pl: "27 = mit i kadry. 28 = warsztat i kultura. Gramatyka — 29.",
        ua: "27 = міф і кадри. 28 = майстерня і культура."
      }
    }
  }
];

(function () {
  var part = window.EduMostT28Blocks || [];
  var prev = window.EduMostLessonContent && window.EduMostLessonContent.blocks;
  if (prev && prev.length) {
    window.EduMostLessonContent = { blocks: prev.concat(part) };
  } else {
    window.EduMostLessonContent = { blocks: part };
  }
})();
