function em(text) {
  return { text: text, emphasis: true };
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Sparta i wojny z Persami", ua: "Спарта і війни з персами" },
      formula: "Laconia · hoplita",
      text: {
        pl: [
          "Ateny uczyły się głosować. Sparta uczyła się walczyć. Potem przyszło wielkie mocarstwo z Azji.",
          "Dziś: heloci i periojkowie, życie Spartanina, hoplita i falanga, Maraton, Termopile, Salamina — i dwa powiedzenia."
        ],
        ua: [
          "Афіни вчилися голосувати. Спарта вчилася воювати. Потім прийшла велика держава з Азії.",
          "Сьогодні: гелоти і періеки, життя спартанця, гопліт і фаланга, Марафон, Фермопіли, Саламін — і два прислів’я."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, gdzie leżała Sparta i kim byli heloci oraz periojkowie", ua: "сказати, де лежала Спарта і ким були гелоти та періеки" },
        { pl: "opisać etapy życia Spartanina (bez szczegółów grozy)", ua: "описати етапи життя спартанця (без подробиць жаху)" },
        { pl: "nazwać uzbrojenie hoplity i szyk falangi", ua: "назвати озброєння гопліта і стрій фаланги" },
        { pl: "ustawić w czasie Maraton, Termopile i Salaminę", ua: "розставити в часі Марафон, Фермопіли і Саламін" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Sparta w Lakonii", ua: "Спарта в Лаконії" },
      visual: gh("062", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Peloponezu: Lakonia, Messenia, Sparta",
          ua: "Карта Пелопоннесу: Лаконія, Мессенія, Спарта"
        },
        title: { pl: "Południe Grecji, między górami", ua: "Південь Греції, між горами" },
        prompt: {
          pl: "Szkolna atlasowa mapa Peloponezu dla klasy 5, jasne tło, czytelne polskie etykiety, bez scen przemocy. Zaznacz Lakonię (wschód) i Messenię (zachód). Sparta w środku Lakonii, między pasmami Tajget i Parnon. Inne orientacyjne nazwy: Olimpia, Arkadia, Argos. Morze dookoła półwyspu. Róża wiatrów. Ciepły kolor Lakonii, spokojna zieleń Messenii. Żadnych armii, krwi ani bata. Styl podręcznika Nowej Ery.",
          ua: "Шкільна атласна карта Пелопоннесу для 5 класу, світле тло. Лаконія на сході, Мессенія на заході. Спарта в центрі Лаконії між Тайгетом і Парноном. Підписи: Олімпія, Аркадія, Аргос. Троянда вітрів. Без армій, крові і батога."
        }
      }),
      text: {
        pl: [
          ["Sparta leżała w ", em("Lakonii"), " — na południu Grecji. Spartanie podbili sporą część południa. Podbitą ludność zamieniono w ", em("helotów"), "."]
        ],
        ua: [
          ["Спарта лежала в ", em("Лаконії"), " — на півдні Греції. Спартанці підкорили чималу частину півдня. Підкорене населення зробили ", em("гелотами"), "."]
        ]
      },
      task: {
        id: "h08-map",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leżała Sparta?",
          ua: "Де лежала Спарта?"
        },
        options: [
          { id: "a", label: { pl: "w Lakonii, na południu Grecji (Peloponez)", ua: "у Лаконії, на півдні Греції (Пелопоннес)" } },
          { id: "b", label: { pl: "nad Nilem, w Egipcie", ua: "над Нілом, в Єгипті" } },
          { id: "c", label: { pl: "w Fenicji, nad Morzem Śródziemnym", ua: "у Фінікії, над Середземним морем" } }
        ],
        answer: "a",
        hint: {
          pl: "Półwysep na południu Grecji, nie Afryka.",
          ua: "Півострів на півдні Греції, не Африка."
        },
        explanation: {
          pl: "Sparta = Lakonia na Peloponezie. Nie Egipt i nie Fenicja.",
          ua: "Спарта = Лаконія на Пелопоннесі. Не Єгипет і не Фінікія."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Trzy grupy mieszkańców", ua: "Три групи мешканців" },
      visual: gh("063", {
        kind: "image-placeholder",
        alt: {
          pl: "Infografika: obywatele, periojkowie, heloci",
          ua: "Інфографіка: громадяни, періеки, гелоти"
        },
        title: { pl: "Obywatele, periojkowie, heloci", ua: "Громадяни, періеки, гелоти" },
        prompt: {
          pl: "Szkolna infografika dla klasy 5, jasne tło, trzy równe kolumny, dzień, bez grozy, bez bata, bez walki. KOLUMNA 1 „pełnoprawni obywatele”: spokojny hoplita w pełnym pancerzu i czerwonym płaszczu (hełm na głowie, tarcza z literą Λ) stoi na placu — nie atakuje. Punkty: zgromadzenie obywateli; kandydować do władz; służba wojskowa do 60. roku życia; król = dowódca armii. KOLUMNA 2 „periojkowie”: rzemieślnicy na agorze przy warsztacie i straganie, tuniki, kolumny, dachy z dachówki. Punkty: ludzie wolni; nie mieli praw publicznych; rzemiosło. KOLUMNA 3 „heloci”: rolnicy zbierają zboże na polu, proste białe domy w tle — praca, nie kara. Punkty: nie mieli praw; obowiązkowa praca na roli; oddawali połowę plonów. Dużo powietrza, czytelne polskie etykiety.",
          ua: "Шкільна інфографіка для 5 класу, три колонки, день, без жаху, без батога, без бою. 1 «повноправні громадяни»: спокійний гопліт у повному обладунку. 2 «періеки»: ремісники на агорі. 3 «гелоти»: селяни збирають збіжжя — праця, не кара. Читабельні підписи."
        }
      }),
      text: {
        pl: [
          ["Pełnoprawni ", em("obywatele"), " mogli być na zgromadzeniu i kandydować do władz. Służba wojskowa do 60. roku życia. Król był dowódcą armii."],
          [em("Periojkowie"), " — ludzie wolni, bez praw publicznych; trudnili się rzemiosłem."],
          [em("Heloci"), " nie mieli praw, musieli pracować na roli i oddawać połowę plonów."]
        ],
        ua: [
          ["Повноправні ", em("громадяни"), " могли бути на зборах і балотуватися до влади. Військова служба до 60 років. Цар був командувачем війська."],
          [em("Періеки"), " — вільні люди, без публічних прав; займалися ремеслом."],
          [em("Гелоти"), " не мали прав, мусили працювати на землі і віддавати половину врожаю."]
        ]
      },
      task: {
        id: "h08-check1",
        type: "true-false",
        level: "A",
        question: {
          pl: "Heloci byli pełnoprawnymi obywatelami Sparty — prawda czy fałsz?",
          ua: "Гелоти були повноправними громадянами Спарти — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Heloci pracowali na roli i nie mieli praw.",
          ua: "Гелоти працювали на землі і не мали прав."
        },
        explanation: {
          pl: "Fałsz. Obywatele rządzili i służyli w wojsku. Heloci — praca na polu, połowa plonów.",
          ua: "Неправда. Громадяни правили і служили в війську. Гелоти — праця на полі, половина врожаю."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Życie Spartanina", ua: "Життя спартанця" },
      visual: gh("064", {
        kind: "image-placeholder",
        alt: {
          pl: "Oś czasu: 7, 12, 20, 30, 60 lat",
          ua: "Вісь часу: 7, 12, 20, 30, 60 років"
        },
        title: { pl: "Od domu do służby", ua: "Від дому до служби" },
        prompt: {
          pl: "Szkolna oś czasu dla klasy 5, jasne tło, pięć stacji w poziomie, dzień, bez grozy, bez porzucania dzieci, bez koszar-horroru. Stacje z polskimi etykietami: „do 7 lat — matka”; „od 7 — czytanie, pisanie, zwięzłe wypowiedzi”; „od 12 — koszary, szkolenie”; „od 20 — służba wojskowa”; „od 30 — ziemia i rodzina; po 60 — koniec obowiązkowej służby”. Przy stacjach małe spokojne figurki: dziecko z tabliczką, młodzieniec z hełmem w ręku (nie na polu bitwy), dorosły hoplita w pełnym pancerzu stoi, nie walczy. Osobna etykieta: „stała gotowość bojowa; każdy w swoim oddziale; kobiety też dbały o sprawność”. Styl infografiki podręcznikowej.",
          ua: "Шкільна вісь часу для 5 класу, п’ять станцій, день, без жаху, без сцен покинутих дітей. Станції: до 7 — мати; від 7 — читання, письмо, стислі висловлювання; від 12 — казарми; від 20 — служба; від 30 — земля і родина; після 60 — кінець обов’язкової служби. Спокійні фігурки, гопліт стоїть, не б’ється. Етикетка: «постійна готовність; кожен у своєму загоні; жінки теж дбали про фізичну форму»."
        }
      }),
      text: {
        pl: [
          "Słabe noworodki porzucano w górach. Do 7. roku życia chłopcami zajmowały się matki. Od 7. roku: czytanie, pisanie, zwięzłe wypowiedzi. Od 12. — koszary i szkolenie. Od 20. — obowiązkowa służba, od 30. — ziemia i rodzina. Po 60. roku służba nie była już obowiązkowa.",
          "Utrzymywano stałą gotowość. Każdy Spartanin miał swój oddział. Kobiety też dbały o sprawność fizyczną."
        ],
        ua: [
          "Слабких немовлят залишали в горах. До 7 років хлопчиками опікувалися матері. Від 7: читання, письмо, стислі висловлювання. Від 12 — казарми і вишкіл. Від 20 — обов’язкова служба, від 30 — земля і родина. Після 60 служба вже не була обов’язкова.",
          "Тримали постійну готовність. Кожен спартанець мав свій загін. Жінки теж дбали про фізичну форму."
        ]
      },
      task: {
        id: "h08-practice",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Od którego roku życia Spartanin zaczynał obowiązkową służbę wojskową?",
          ua: "З якого віку спартанець починав обов’язкову військову службу?"
        },
        options: [
          { id: "a", label: { pl: "od 7. roku życia", ua: "з 7 років" } },
          { id: "b", label: { pl: "od 20. roku życia", ua: "з 20 років" } },
          { id: "c", label: { pl: "dopiero po 60. roku życia", ua: "лише після 60 років" } }
        ],
        answer: "b",
        hint: {
          pl: "Najpierw nauka i koszary, potem służba dorosłych.",
          ua: "Спочатку навчання і казарми, потім служба дорослих."
        },
        explanation: {
          pl: "Od 20. roku. Po 60. obowiązek się kończył.",
          ua: "З 20 років. Після 60 обов’язок закінчувався."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Imperium perskie", ua: "Перська імперія" },
      formula: "VI–V w. p.n.e.",
      visual: gh("065", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa imperium perskiego od Egiptu po Indus",
          ua: "Карта перської імперії від Єгипту до Інду"
        },
        title: { pl: "Azja i Afryka, daniny i okręty", ua: "Азія і Африка, данини і кораблі" },
        prompt: {
          pl: "Szkolna mapa Bliskiego Wschodu i wschodniego Śródziemnomorza dla klasy 5. Imperium perskie jasnozielonym tłem: dolina Nilu, Lewant, Mezopotamia, Azja Mniejsza, aż po Indus. Etykiety: Egipt, Mezopotamia, Azja Mniejsza, greckie polis na wybrzeżu. Reszta mapy beżowa. Bez armii w marszu i bez bitew. Dwie spokojne wstawki (nie walka): (1) jeździec w łuskowej zbroi na koniu z ochroną piersi — „ciężkozbrojna konnica perska”, stoi, nie szarżuje; (2) galera z prostokątnym żaglem w paski i rzędem wioseł, dziób z ozdobą ptaka — na spokojnym morzu. Punkty: VI i V w. p.n.e.; podbici płacili daniny, dawali oddziały i okręty. Atlas szkolny.",
          ua: "Шкільна карта Близького Сходу для 5 класу. Перська імперія світло-зеленим: Ніл, Левант, Месопотамія, Мала Азія, до Інду. Без армій і битв. Дві спокійні вставки: вершник у лускатому обладунку стоїть; галера на спокійному морі. Пункти: VI–V ст. до н.е.; підкорені платили данину, давали загони і кораблі."
        }
      }),
      text: {
        pl: [
          ["W ", em("VI i V wieku p.n.e."), " Persowie budowali imperium w Azji i Afryce: Mezopotamia, Egipt, greckie polis na wybrzeżu Azji Mniejszej."],
          "Podbici płacili daniny oraz dawali zbrojne oddziały i okręty wojenne."
        ],
        ua: [
          ["У ", em("VI і V століттях до н.е."), " перси будували імперію в Азії і Африці: Месопотамія, Єгипет, грецькі поліси на узбережжі Малої Азії."],
          "Підкорені платили данину, давали збройні загони і військові кораблі."
        ]
      },
      task: {
        id: "h08-src",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czego Persowie żądali od podbitych ludów?",
          ua: "Чого перси вимагали від підкорених народів?"
        },
        options: [
          { id: "a", label: { pl: "danin, zbrojnych oddziałów i okrętów", ua: "данини, збройних загонів і кораблів" } },
          { id: "b", label: { pl: "tylko oliwek i kóz ze Sparty", ua: "лише олив і кіз зі Спарти" } },
          { id: "c", label: { pl: "żeby wszyscy zostali helotami Aten", ua: "щоб усі стали гелотами Афін" } }
        ],
        answer: "a",
        hint: {
          pl: "Podatek, żołnierze, flota.",
          ua: "Податок, солдати, флот."
        },
        explanation: {
          pl: "Daniny, oddziały, okręty — tak rosło mocarstwo przed wojnami z Grekami.",
          ua: "Данини, загони, кораблі — так росла держава перед війнами з греками."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hoplita i falanga", ua: "Гопліт і фаланга" },
      visual: gh("066", {
        kind: "image-placeholder",
        alt: {
          pl: "Podpisany hoplita i schemat falangi",
          ua: "Підписаний гопліт і схема фаланги"
        },
        title: { pl: "Hełm, hoplon, włócznia, szyk", ua: "Шолом, гоплон, спис, стрій" },
        prompt: {
          pl: "Szkolna tablica uzbrojenia dla klasy 5, jasne tło, BEZ walki, BEZ krwi, NIE kadr z filmu. LEWA: stojący grecki hoplita w pełnym pancerzu (nie bez koszuli): koryncki hełm z czerwonym grzebieniem, złoty napierśnik, czerwona tunika, nagolenniki, sandały. W lewej ręce duża okrągła tarcza (niebieski środek, złoty rant), w prawej długa włócznia oparta, miecz przy boku w pochwie. Polskie etykiety w ramkach: hełm, hoplon, włócznia, miecz, pancerz, nagolenniki. Podpis: „hoplita / grecki żołnierz”. PRAWA: schemat falangi z góry lub z ukosa — rząd tarcz ramię w ramię i włócznie do przodu, jak diagram, nie jak scena filmu. Etykieta „falanga / szyk bojowy”. Muzealny, czytelny rysunek podręcznikowy.",
          ua: "Шкільна таблиця озброєння для 5 класу, БЕЗ бою, БЕЗ крові, НЕ кадр з фільму. Ліворуч стоїть гопліт у повному обладунку (не без сорочки), підписи: шолом, гоплон, спис, меч, панцир, поножі. Праворуч схема фаланги як діаграма, не як кіно. Етикетка «фаланга / бойовий стрій»."
        }
      }),
      text: {
        pl: [
          ["Greckiego ciężkozbrojnego piechura nazywamy ", em("hoplitą"), ". Broń: długa włócznia i okrągła tarcza ", em("hoplon"), ". W bitwie tworzyli zwarty szyk — ", em("falangę"), "."]
        ],
        ua: [
          ["Грецького важкоозброєного піхотинця називаємо ", em("гоплітом"), ". Зброя: довгий спис і круглий щит ", em("гоплон"), ". У бою творили щільний стрій — ", em("фалангу"), "."]
        ]
      },
      task: {
        id: "h08-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jak nazywa się okrągła tarcza hoplity?",
          ua: "Як називається круглий щит гопліта?"
        },
        options: [
          { id: "a", label: { pl: "hoplon", ua: "гоплон" } },
          { id: "b", label: { pl: "papirus", ua: "папірус" } },
          { id: "c", label: { pl: "agora", ua: "агора" } }
        ],
        answer: "a",
        hint: {
          pl: "Od tej tarczy wzięła się nazwa żołnierza.",
          ua: "Від цього щита взялася назва воїна."
        },
        explanation: {
          pl: "Hoplon. Falanga to szyk wielu hoplitów ramię w ramię.",
          ua: "Гоплон. Фаланга — стрій багатьох гоплітів пліч-о-пліч."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wojny perskie: Maraton", ua: "Перські війни: Марафон" },
      timelineYear: 490,
      formula: "499 · 490 p.n.e.",
      visual: gh("067", {
        kind: "map-placeholder",
        alt: {
          pl: "Trzy małe mapy: Maraton, Termopile, Salamina",
          ua: "Три малі карти: Марафон, Фермопіли, Саламін"
        },
        title: { pl: "Trzy daty, trzy miejsca", ua: "Три дати, три місця" },
        prompt: {
          pl: "Szkolna infografika-mapa dla klasy 5, jasne tło, TRZY małe mapy Grecji w rzędzie, BEZ walki wręcz, BEZ krwi, BEZ filmu 300. 1) „499–490 p.n.e.”: Grecja i Azja Mniejsza, kropka Milet, strzałka Ateny, kropka Maraton na Attyce — podpis „klęska Persów pod Maratonem 490”. 2) „480 p.n.e. Termopile”: wąski przesmyk między morzem (błękit) a górami, cienka ścieżka górska z tyłu, etykieta „przesmyk”; hoplici jako małe prostokąty-bloki, nie twarze w walce. 3) „480 p.n.e. Salamina”: cieśnina, Ateny, Pireus, Salamina; niebieskie bloki „Grecy” w wąskiej wodzie, czerwone „flota perska” od otwartego morza. Skala i północ. Legenda. Atlas, nie kino.",
          ua: "Шкільна інфографіка для 5 класу, три малі карти, БЕЗ рукопашного бою, БЕЗ крові, БЕЗ фільму 300. 1) Мілет, Афіни, Марафон 490. 2) Фермопіли — вузький перешийок між морем і горами. 3) Саламін 480 — протока, сині блоки греків, червона перська флотилія. Атлас, не кіно."
        }
      }),
      text: {
        pl: [
          ["W ", em("499 p.n.e."), " wybuchło antyperskie powstanie (Milet, pomoc Aten) — i upadło."],
          ["W ", em("490 p.n.e."), " król ", em("Dariusz"), " wysłał flotę i armię. Persowie ponieśli klęskę w bitwie ", em("pod Maratonem"), "."]
        ],
        ua: [
          ["У ", em("499 до н.е."), " спалахнуло антиперське повстання (Мілет, допомога Афін) — і впало."],
          ["У ", em("490 до н.е."), " цар ", em("Дарій"), " вислав флот і військо. Перси зазнали поразки в битві ", em("під Марафоном"), "."]
        ]
      },
      task: {
        id: "h08-check2",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. Ateńczycy pokonali Persów pod Maratonem? (wpisz liczbę, np. 490)",
          ua: "У якому році до н.е. афіняни перемогли персів під Марафоном? (введи число, напр. 490)"
        },
        answer: 490,
        hint: {
          pl: "Pięćset minus dziesięć.",
          ua: "П’ятсот мінус десять."
        },
        explanation: {
          pl: "490 p.n.e. — pierwsza wielka klęska Persów w Grecji.",
          ua: "490 до н.е. — перша велика поразка персів у Греції."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Termopile i Salamina", ua: "Фермопіли і Саламін" },
      timelineYear: 480,
      formula: "480 p.n.e.",
      text: {
        pl: [
          ["W ", em("480 p.n.e."), " król ", em("Kserkses"), " ruszył na Grecję. Polis zawarły sojusz. Pod ", em("Termopilami"), " (wąski przesmyk między morzem i górami) zastąpiły drogę. Zdrada pokazała Persom ścieżkę w górach. Oddział 300 Spartan pod wodzą ", em("Leonidasa"), " bronił przesmyku."],
          ["Persowie zajęli Ateny i spalili je — ludność wcześniej odesłał wódz ", em("Temistokles"), ". W 480 p.n.e. pod ", em("Salaminą"), " Grecy rozbili flotę perską i powstrzymali najazd."]
        ],
        ua: [
          ["У ", em("480 до н.е."), " цар ", em("Ксеркс"), " пішов на Грецію. Поліси уклали союз. Під ", em("Фермопілами"), " (вузький перешийок між морем і горами) заступили шлях. Зрада показала персам стежку в горах. Загін 300 спартанців під проводом ", em("Леоніда"), " боронив перешийок."],
          ["Перси зайняли Афіни і спалили їх — населення раніше відіслав вождь ", em("Фемістокл"), ". У 480 до н.е. під ", em("Саламіном"), " греки розбили перський флот і зупинили напад."]
        ]
      },
      task: {
        id: "h08-logic",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co powstrzymało najazd Kserksesa w 480 p.n.e.?",
          ua: "Що зупинило напад Ксеркса в 480 до н.е.?"
        },
        options: [
          { id: "a", label: { pl: "zwycięstwo Greków pod Salaminą (po Termopilach i spaleniu Aten)", ua: "перемога греків під Саламіном (після Фермопіл і спалення Афін)" } },
          { id: "b", label: { pl: "to, że Persowie nigdy nie weszli do Grecji", ua: "те, що перси ніколи не зайшли до Греції" } },
          { id: "c", label: { pl: "bitwa pod Maratonem w tym samym roku 480", ua: "битва під Марафоном того самого 480 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Maraton = 490. Termopile = przesmyk. Salamina = flota.",
          ua: "Марафон = 490. Фермопіли = перешийок. Саламін = флот."
        },
        explanation: {
          pl: "Termopile nie zatrzymały Persów na stałe. Salamina rozbiła flotę.",
          ua: "Фермопіли не зупинили персів назавжди. Саламін розбив флот."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Powiedzenia ze Sparty", ua: "Прислів’я зі Спарти" },
      visual: gh("068", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwie karty: spartańskie warunki i lakoniczna wypowiedź",
          ua: "Дві картки: спартанські умови і лаконічний вислів"
        },
        title: { pl: "Dwa zwroty, które zostały w języku", ua: "Два звороти, що лишилися в мові" },
        prompt: {
          pl: "Szkolna dwukartkowa infografika dla klasy 5, jasne tło, bez grozy, NIE kadr z filmu 300, NIE półnadzy wojownicy. GÓRA: spokojna ilustracja dorosłego w prostym płaszczu prowadzi dziecko za rękę po kamienistej drodze, dzień, wiatr — etykieta „spartańskie warunki” i krótkie wyjaśnienie: „życie surowe, bez wygód”. DÓŁ: dwoje ludzi w tunikach rozmawia; z ust jednego krótki dymek z jednym zdaniem — etykieta „lakoniczna wypowiedź” i wyjaśnienie: „Lakonia → mówić krótko i treśćią, jak w Sparcie”. Czytelne polskie napisy, dużo powietrza, styl podręcznika.",
          ua: "Шкільна двокарткова інфографіка для 5 класу, без жаху, НЕ кадр з фільму 300. ВГОРІ: дорослий у плащі веде дитину кам’янистою дорогою — «спартанські умови»: суворе життя без вигод. ВНИЗУ: коротка розмова, одна репліка в бульбашці — «лаконічний вислів»: Лаконія → говорити коротко. Стиль підручника."
        }
      }),
      text: {
        pl: [
          [em("Spartańskie warunki"), " — surowe życie, bez wygód. ", em("Lakoniczna wypowiedź"), " — krótka i treściwa (od Lakonii)."]
        ],
        ua: [
          [em("Спартанські умови"), " — суворе життя, без вигод. ", em("Лаконічний вислів"), " — короткий і змістовний (від Лаконії)."]
        ]
      },
      task: {
        id: "h08-extra",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywamy zwięzłą, krótką wypowiedź (od nazwy Lakonii)?",
          ua: "Як називаємо стислий, короткий вислів (від назви Лаконії)?"
        },
        answer: ["lakoniczna", "lakoniczna wypowiedź", "lakoniczny", "лаконічна", "лаконічний", "лаконічний вислів", "wypowiedź lakoniczna"],
        hint: {
          pl: "Lakonia → lako-…",
          ua: "Лаконія → лако-…"
        },
        explanation: {
          pl: "Lakoniczna wypowiedź. Spartanie uczyli się mówić krótko.",
          ua: "Лаконічний вислів. Спартанці вчилися говорити коротко."
        }
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Trzy bitwy, dwie daty", ua: "Три битви, дві дати" },
      reveal: true,
      steps: [
        {
          formula: "1. 490 p.n.e.",
          text: {
            pl: "Maraton: Ateńczycy pokonują armię Dariusza.",
            ua: "Марафон: афіняни перемагають військо Дарія."
          }
        },
        {
          formula: "2. 480 p.n.e. · ląd",
          text: {
            pl: "Termopile: przesmyk, 300 Spartan, Leonidas; Persowie obchodzą góry.",
            ua: "Фермопіли: перешийок, 300 спартанців, Леонід; перси обходять горами."
          }
        },
        {
          formula: "3. 480 p.n.e. · morze",
          text: {
            pl: "Salamina: Temistokles, rozbicie floty Kserksesa — najazd zatrzymany.",
            ua: "Саламін: Фемістокл, розгром флоту Ксеркса — напад зупинено."
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "heloci — podbita ludność bez praw; praca na roli, połowa plonów", ua: "гелоти — підкорене населення без прав; праця на землі, половина врожаю" },
        { pl: "periojkowie — wolni, bez praw publicznych; rzemiosło", ua: "періеки — вільні, без публічних прав; ремесло" },
        { pl: "hoplita — ciężkozbrojny piechur; tarcza hoplon, włócznia", ua: "гопліт — важкоозброєний піхотинець; щит гоплон, спис" },
        { pl: "falanga — zwarty szyk hoplitów", ua: "фаланга — щільний стрій гоплітів" },
        { pl: "lakoniczna wypowiedź — krótka i treściwa (Lakonia)", ua: "лаконічний вислів — короткий і змістовний (Лаконія)" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Kto w Sparcie NIE był obywatelem? Porównaj trzy grupy z początku lekcji."],
        ua: ["Хто в Спарті НЕ був громадянином? Порівняй три групи з початку уроку."]
      },
      task: {
        id: "h08-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywamy podbitą ludność Sparty, która pracowała na roli i nie miała praw?",
          ua: "Як називаємо підкорене населення Спарти, яке працювало на землі і не мало прав?"
        },
        answer: ["heloci", "helotów", "helota", "helot", "гелоти", "гелотів", "гелот"],
        hint: {
          pl: "Nie periojkowie (ci byli wolni i rzemieślnikami).",
          ua: "Не періеки (ті були вільні й ремісники)."
        },
        explanation: {
          pl: "Heloci. Periojkowie byli wolni, ale bez praw publicznych.",
          ua: "Гелоти. Періеки були вільні, але без публічних прав."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Sparta to była taka sama demokracja jak Ateny: głosował każdy mieszkaniec, także heloci.”",
        ua: "«Спарта була такою самою демократією, як Афіни: голосував кожен мешканець, також гелоти.»"
      },
      text: {
        pl: [
          "Sparta to inna polis: liczyło się wojsko. Głos i urzędy — pełnoprawni obywatele, nie heloci."
        ],
        ua: [
          "Спарта — інший поліс: рахувалося військо. Голос і уряди — повноправні громадяни, не гелоти."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wyjaśnij, czemu Spartanie uchodzili za najlepszych wojowników Grecji.",
        ua: "Поясни, чому спартанців вважали найкращими воїнами Греції."
      },
      text: {
        pl: [
          "Podpowiedź: wychowanie, służba, falanga, hoplita. 2–4 zdania, potem wybór.",
          "Nie opisuj scen walki — mów o ćwiczeniu i szyku."
        ],
        ua: [
          "Підказка: виховання, служба, фаланга, гопліт. 2–4 речення, потім вибір.",
          "Не описуй сцени бою — говори про вишкіл і стрій."
        ]
      },
      task: {
        id: "h08-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej wyjaśnia sławę Spartan jako wojowników?",
          ua: "Яке речення найкраще пояснює славу спартанців як воїнів?"
        },
        options: [
          { id: "a", label: { pl: "Całe życie — w tym wychowanie młodzieży — podporządkowano wojsku; walczyli jako hoplici w falandze", ua: "Усе життя — зокрема виховання молоді — підпорядкували війську; воювали як гопліти у фаланзі" } },
          { id: "b", label: { pl: "Spartanie nie mieli wojska, bo wszyscy byli helotami", ua: "Спартанці не мали війська, бо всі були гелотами" } },
          { id: "c", label: { pl: "Sławę dał im tylko jeden wyścig pod Maratonem", ua: "Славу їм дав лише один забіг під Марафоном" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie myl Maratonu (Ateny, 490) z całym ustrojem Sparty.",
          ua: "Не плутай Марафон (Афіни, 490) з усім устроєм Спарти."
        },
        explanation: {
          pl: "Wojsko organizowało życie. Hoplita + falanga to sposób walki Greków.",
          ua: "Військо організовувало життя. Гопліт + фаланга — спосіб бою греків."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Kto, gdzie, kiedy?", ua: "Хто, де, коли?" },
      task: {
        id: "h08-odd",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zestawienie jest poprawne?",
          ua: "Яке поєднання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "Leonidas — Termopile 480; Temistokles — Salamina 480; Dariusz — Maraton 490", ua: "Леонід — Фермопіли 480; Фемістокл — Саламін 480; Дарій — Марафон 490" } },
          { id: "b", label: { pl: "Perykles — Termopile 490; Dariusz — Salamina 499", ua: "Перикл — Фермопіли 490; Дарій — Саламін 499" } },
          { id: "c", label: { pl: "Kserkses — tylko bitwa pod Maratonem, bez floty", ua: "Ксеркс — лише битва під Марафоном, без флоту" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty: 490 i 480. Dwóch królów Persji: Dariusz, potem Kserkses.",
          ua: "Дві дати: 490 і 480. Два царі Персії: Дарій, потім Ксеркс."
        },
        explanation: {
          pl: "Maraton 490 (Dariusz). Termopile i Salamina 480 (Kserkses; Leonidas, Temistokles).",
          ua: "Марафон 490 (Дарій). Фермопіли і Саламін 480 (Ксеркс; Леонід, Фемістокл)."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Spartanie byli uznawani za najlepszych wojowników w całej starożytnej Grecji. Całe życie społeczeństwa, w tym wychowanie młodzieży, było podporządkowane sprawom wojska.",
          ["Spartanie", "wojowników", "wychowanie młodzieży", "wojska"],
          "Спартанців вважали найкращими воїнами в усій стародавній Греції. Усе життя суспільства, зокрема виховання молоді, було підпорядковане справам війська.",
          ["Спартанців", "воїнами", "виховання молоді", "війська"]
        ),
        mark(
          "Greckich ciężkozbrojnych wojowników piechoty nazywamy hoplitami. Byli wyposażeni w długie włócznie i okrągłe tarcze zwane hoplonami. W bitwie tworzyli zwarty szyk, czyli falangę.",
          ["hoplitami", "włócznie", "hoplonami", "falangę"],
          "Грецьких важкоозброєних воїнів піхоти називаємо гоплітами. Вони мали довгі списи і круглі щити, звані гоплонами. У бою творили щільний стрій — фалангу.",
          ["гоплітами", "списи", "гоплонами", "фалангу"]
        ),
        mark(
          "W 490 roku p.n.e. Persowie dokonali najazdu na Grecję. Ateńczycy zadali im klęskę w bitwie pod Maratonem.",
          ["490 roku p.n.e.", "Ateńczycy", "Maratonem"],
          "У 490 році до н.е. перси напали на Грецію. Афіняни завдали їм поразки в битві під Марафоном.",
          ["490 році до н.е.", "Афіняни", "Марафоном"]
        ),
        mark(
          "Kolejny najazd perski nastąpił w 480 roku p.n.e. Pod Termopilami Spartanie z Leonidasem bronili wąwozu — prawie wszyscy polegli, ale dali Grekom czas. Dzięki zwycięstwu floty pod Salaminą Grecy powstrzymali perski najazd.",
          ["480 roku p.n.e.", "Termopilami", "Salaminą"],
          "Наступний перський напад стався в 480 році до н.е. Під Фермопілами спартанці з Леонідом боронили тіснину — майже всі полягли, але дали грекам час. Завдяки перемозі флоту під Саламіном греки зупинили перський напад.",
          ["480 році до н.е.", "Фермопілами", "Саламіном"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: bogowie i mity. Wojna wraca do opowieści — Zeus, Atena i herosi, nie do pola bitwy.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: боги і міти. Війна повертається в оповідь — Зевс, Афіна і герої, не на поле бою.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "I_eAHK6x1Kk",
        title: {
          pl: "Krótkie Lekcje: Sparta i wojny z Persami",
          ua: "Короткі уроки: Спарта і війни з персами"
        }
      }
    }
  ]
};
