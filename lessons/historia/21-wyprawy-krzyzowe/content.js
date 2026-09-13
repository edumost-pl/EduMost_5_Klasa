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
      heading: { pl: "Wyprawy krzyżowe", ua: "Хрестові походи" },
      formula: "1095 · 1096 · 1099",
      text: {
        pl: [
          "Z lekcji 20 znasz papieża i spór o władzę. Dziś papież wzywa rycerzy do Ziemi Świętej.",
          "Na osi trzy daty: 1095 — Clermont, 1096 — pierwsza krucjata, 1099 — Jerozolima."
        ],
        ua: [
          "З уроку 20 знаєш папу і суперечку про владу. Сьогодні папа кличе лицарів до Святої Землі.",
          "На осі три дати: 1095 — Клермон, 1096 — перший похід, 1099 — Єрусалим."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, co nazywamy Ziemią Świętą", ua: "сказати, що називаємо Святою Землею" },
        { pl: "wyjaśnić, czego dotyczył synod w Clermont (1095, Urban II)", ua: "пояснити, чого стосувався собор у Клермоні (1095, Урбан II)" },
        { pl: "wskazać, czym były krucjaty i czy krzyżowcy utrzymali Palestynę", ua: "вказати, чим були круціати і чи хрестоносці втримали Палестину" },
        { pl: "wymienić zakony rycerskie i skutki wypraw (wrogość i kultura Wschodu)", ua: "назвати лицарські ордени і наслідки походів (ворожість і культура Сходу)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Ziemia Święta", ua: "Свята Земля" },
      formula: "Palestyna",
      visual: gh("177", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Palestyny: Jerozolima i Betlejem, bez wojska",
          ua: "Мапа Палестини: Єрусалим і Вифлеєм, без війська"
        },
        title: { pl: "Tam żył i nauczał Jezus", ua: "Там жив і навчав Ісус" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. PALESTYNA / Ziemia Święta. Kropki: JEROZOLIMA, BETLEJEM. Morze Śródziemne z lewej. Tytuł: „Ziemia Święta”. Legenda. BEZ armii, BEZ granic Izraela XXI w., BEZ Kopuły Skały jako celu wojny. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа Святої Землі: Єрусалим, Вифлеєм. Без війська."
        }
      }),
      text: {
        pl: [
          ["", em("Ziemia Święta"), " to obszar ", em("Palestyny"), ", gdzie żył i nauczał Jezus. Ważne miasta: ", em("Jerozolima"), " i ", em("Betlejem"), "."],
          "Chrześcijanie chętnie tam pielgrzymowali — prosić o łaski i odpokutować za grzechy."
        ],
        ua: [
          ["", em("Свята Земля"), " — область ", em("Палестини"), ", де жив і навчав Ісус. Важливі міста: ", em("Єрусалим"), " і ", em("Вифлеєм"), "."],
          "Християни охоче туди паломничали — просити ласки і спокутувати гріхи."
        ]
      },
      task: {
        id: "h21-ziemia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co w tej lekcji nazywamy Ziemią Świętą?",
          ua: "Що в цьому уроці називаємо Святою Землею?"
        },
        options: [
          { id: "a", label: { pl: "Palestynę — m.in. Jerozolimę i Betlejem", ua: "Палестину — зокрема Єрусалим і Вифлеєм" } },
          { id: "b", label: { pl: "Mekkę i Medynę z lekcji 18", ua: "Мекку і Медину з уроку 18" } },
          { id: "c", label: { pl: "Rzym i Wormację z lekcji 20", ua: "Рим і Вормс з уроку 20" } }
        ],
        answer: "a",
        hint: {
          pl: "Jezus — lekcja 16. Mekka = islam.",
          ua: "Ісус — урок 16. Мекка = іслам."
        },
        explanation: {
          pl: "KN/film: Ziemia Święta = Palestyna. Mekka = hidżra. Wormacja = 1122.",
          ua: "KN/фільм: Свята Земля = Палестина. Мекка = хіджра. Вормс = 1122."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dlaczego ruszyli?", ua: "Чому рушили?" },
      formula: "VII w. · XI w.",
      visual: gh("178", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: pielgrzymi, Arabowie od VII w., Turcy w XI w.",
          ua: "Схема: паломники, араби від VII ст., турки в XI ст."
        },
        title: { pl: "Najpierw Arabowie, potem Turcy", ua: "Спочатку араби, потім турки" },
        prompt: {
          pl: "Szkolna infografika 16:9, trzy spokojne pola. 1) pielgrzym z laską, podpis „chrześcijanie pielgrzymują”. 2) mapa VI–VII w. „Arabowie — nie przeszkadzali”. 3) XI w. „Turcy — wrogość”. BEZ bicia pielgrzymów, BEZ krwi. Styl Nowej Ery.",
          ua: "Три поля: паломники; араби не заважали; турки — ворожість. Без насильства."
        }
      }),
      text: {
        pl: [
          ["Od ", em("VII wieku"), " Palestyną władali ", em("Arabowie"), " (lekcja 18). Pielgrzymom zwykle nie przeszkadzali."],
          ["W drugiej połowie ", em("XI wieku"), " ziemię zdobyli ", em("Turcy"), ". Relacje z chrześcijanami zaostrzyły się — stąd wezwanie do wyprawy."]
        ],
        ua: [
          ["Від ", em("VII століття"), " Палестиною правили ", em("араби"), " (урок 18). Паломникам зазвичай не заважали."],
          ["У другій половині ", em("XI століття"), " край здобули ", em("турки"), ". Стосунки з християнами загострилися — звідси заклик до походу."]
        ]
      },
      task: {
        id: "h21-turcy",
        type: "true-false",
        level: "A",
        question: {
          pl: "Turcy w XI wieku zaostrzyli stosunki z chrześcijanami w Ziemi Świętej — prawda czy fałsz?",
          ua: "Турки в XI столітті загострили стосунки з християнами на Святій Землі — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Arabowie wcześniej — zwykle spokój dla pielgrzymów. Zmiana = Turcy.",
          ua: "Араби раніше — зазвичай спокій для паломників. Зміна = турки."
        },
        explanation: {
          pl: "Prawda. Przyczyna KN. Nie myl z schizną 1054 (lekcja 20).",
          ua: "Правда. Причина KN. Не плутай зі схизмою 1054 (урок 20)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Urban II — Clermont", ua: "Урбан II — Клермон" },
      formula: "1095 n.e.",
      timelineYear: 1095,
      visual: gh("179", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta papieża Urbana II: cztery punkty, spokojny portret, synod",
          ua: "Картка папи Урбана II: чотири пункти, спокійний портрет, собор"
        },
        title: { pl: "Wezwanie, nie scena boju", ua: "Заклик, не сцена бою" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret papieża (mitra), dzień, BEZ karykatury i BEZ tłumu z mieczami. Cztery punkty PL: „kto — Urban II, papież”; „skąd — Rzym; synod we Francji, w Clermont”; „lata — 1095”; „wsławił się — wezwał do wyzwolenia Ziemi Świętej, obietnica zbawienia”. Styl Nowej Ery.",
          ua: "Картка Урбана II: Клермон; 1095; заклик. Без бою."
        }
      }),
      text: {
        pl: [
          ["W ", em("1095"), " papież ", em("Urban II"), " zwołał ", em("synod"), " w ", em("Clermont"), " we Francji. Wezwał do wyzwolenia Ziemi Świętej z rąk Turków. Uczestnikom obiecano zbawienie."],
          ["Wyprawy nazwano ", em("krucjatami"), " (od łac. crux — krzyż). Uczestnicy to ", em("krzyżowcy"), " — znak krzyża na odzieży. Wyruszyć mieli wiosną 1096."]
        ],
        ua: [
          ["Року ", em("1095"), " папа ", em("Урбан II"), " скликав ", em("собор"), " у ", em("Клермоні"), " у Франції. Закликав визволити Святу Землю з рук турків. Учасникам обіцяли спасіння."],
          ["Походи назвали ", em("хрестовими походами"), " (лат. crux — хрест; польською: krucjata). Учасники — ", em("хрестоносці"), ": знак хреста на одязі. Рушити мали навесні 1096."]
        ]
      },
      task: {
        id: "h21-1095",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co stało się w Clermont w 1095?",
          ua: "Що сталося в Клермоні 1095 року?"
        },
        options: [
          { id: "a", label: { pl: "Urban II wezwał do wyzwolenia Ziemi Świętej", ua: "Урбан II закликав визволити Святу Землю" } },
          { id: "b", label: { pl: "podpisano konkordat w Wormacji", ua: "підписали конкордат у Вормсі" } },
          { id: "c", label: { pl: "Mahomet ogłosił hidżrę", ua: "Мухаммад проголосив хіджру" } }
        ],
        answer: "a",
        hint: {
          pl: "Synod = zjazd. 1122 = Wormacja. 622 = hidżra.",
          ua: "Собор = з’їзд. 1122 = Вормс. 622 = хіджра."
        },
        explanation: {
          pl: "KN: 1095 Clermont. Wormacja = lekcja 20. Hidżra = 18.",
          ua: "KN: 1095 Клермон. Вормс = урок 20. Хіджра = 18."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pierwsza krucjata", ua: "Перший похід" },
      formula: "1096 · 1099",
      timelineYear: [1096, 1099],
      visual: gh("180", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: z Europy do Jerozolimy 1096–1099, Królestwo Jerozolimskie",
          ua: "Мапа: з Європи до Єрусалима 1096–1099, Єрусалимське королівство"
        },
        title: { pl: "Trzy lata drogi, potem królestwo", ua: "Три роки шляху, потім королівство" },
        prompt: {
          pl: "Szkolna mapa 16:9. Strzałka z Europy (Francja, Włochy, Niemcy, Anglia jako podpisy, nie flagi XXI w.) ku JEROZOLIMIE. Daty 1096 i 1099. Plama „Królestwo Jerozolimskie”. BEZ szturmu, BEZ drabin na murach, BEZ miniatury z trupami. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа першого походу: Європа → Єрусалим 1099. Без штурму."
        }
      }),
      text: {
        pl: [
          ["W ", em("1096"), " ruszyła ", em("pierwsza wyprawa krzyżowa"), ": głównie rycerze z Francji, Włoch, Niemiec i Anglii, także ubożsi. Motywy: wiara, rozgrzeszenie, czasem łupy."],
          ["Droga trwała ok. 3 lat. W ", em("1099"), " krzyżowcy zdobyli ", em("Jerozolimę"), ". Powstało ", em("Królestwo Jerozolimskie"), " i mniejsze państwa. To fakt zdobycia — bez sceny rzezi na obrazie."]
        ],
        ua: [
          ["Року ", em("1096"), " рушив ", em("перший хрестовий похід"), ": здебільшого лицарі з Франції, Італії, Німеччини й Англії, також бідніші. Мотиви: віра, розгрішення, інколи здобич."],
          ["Шлях тривав бл. 3 років. Року ", em("1099"), " хрестоносці здобули ", em("Єрусалим"), ". Постало ", em("Єрусалимське королівство"), " і менші держави. Це факт здобуття — без сцени різанини."]
        ]
      },
      task: {
        id: "h21-1099",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kiedy ruszyła pierwsza krucjata i kiedy zdobyto Jerozolimę?",
          ua: "Коли рушив перший похід і коли здобули Єрусалим?"
        },
        options: [
          { id: "a", label: { pl: "1096 — wyruszyli; 1099 — Jerozolima i Królestwo Jerozolimskie", ua: "1096 — рушили; 1099 — Єрусалим і Єрусалимське королівство" } },
          { id: "b", label: { pl: "1054 — schizma; 1077 — Canossa", ua: "1054 — схизма; 1077 — Каносса" } },
          { id: "c", label: { pl: "843 — Verdun; 962 — Otton", ua: "843 — Верден; 962 — Оттон" } }
        ],
        answer: "a",
        hint: {
          pl: "Najpierw wezwanie 1095, potem droga, potem miasto.",
          ua: "Спочатку заклик 1095, потім шлях, потім місто."
        },
        explanation: {
          pl: "Łańcuch KN: 1095–1096–1099. 1054/1077 = lekcja 20. 843/962 = 19.",
          ua: "Ланцюг KN: 1095–1096–1099. 1054/1077 = урок 20. 843/962 = 19."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dalsze wyprawy", ua: "Наступні походи" },
      formula: "XI–XIII w.",
      visual: gh("181", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: IV wyprawa do Konstantynopola 1204, upadek Akki 1291",
          ua: "Мапа: IV похід на Константинополь 1204, падіння Акри 1291"
        },
        title: { pl: "Nie zawsze do Jerozolimy", ua: "Не завжди до Єрусалима" },
        prompt: {
          pl: "Szkolna mapa 16:9 Morza Śródziemnego. Strzałka „IV wyprawa 1204” do KONSTANTYNOPOLA (nie do Jerozolimy). Pin „Akka 1291 — ostatnia twierdza”. Daty w legendzie. BEZ Delacroix, BEZ szturmu na mury, BEZ ciał. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа: 1204 Константинополь; 1291 Акра. Без різанини."
        }
      }),
      text: {
        pl: [
          ["Po pierwszej krucjacie wojna trwała prawie 200 lat. Zorganizowano jeszcze ", em("siedem"), " wypraw (łącznie ok. 1096–1291)."],
          ["", em("IV wyprawa"), " nie doszła do Ziemi Świętej: w ", em("1204"), " zdobyto ", em("Konstantynopol"), " (lekcja 17). W ", em("1291"), " padła ostatnia twierdza krzyżowców — ", em("Akka"), ". Chrześcijan wyparto z Palestyny."]
        ],
        ua: [
          ["Після першого походу війна тривала майже 200 років. Організували ще ", em("сім"), " походів (разом бл. 1096–1291)."],
          ["", em("IV похід"), " не дійшов до Святої Землі: року ", em("1204"), " здобули ", em("Константинополь"), " (урок 17). Року ", em("1291"), " впала остання твердиня хрестоносців — ", em("Акра"), ". Християн витіснили з Палестини."]
        ]
      },
      task: {
        id: "h21-1291",
        type: "true-false",
        level: "B",
        question: {
          pl: "Krzyżowcy na stałe utrzymali Ziemię Świętą aż do dziś — prawda czy fałsz?",
          ua: "Хрестоносці назавжди втримали Святу Землю аж до сьогодні — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Na końcu XIII w. utracili ostatnią twierdzę. IV wyprawa poszła na Konstantynopol.",
          ua: "Наприкінці XIII ст. втратили останню твердиню. IV похід пішов на Константинополь."
        },
        explanation: {
          pl: "Fałsz. KN: czy udało się utrzymać. 1291 = Akka. 1204 ≠ Jerozolima.",
          ua: "Неправда. KN: чи вдалося втримати. 1291 = Акра. 1204 ≠ Єрусалим."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zakony rycerskie", ua: "Лицарські ордени" },
      formula: "rycerz + zakonnik",
      visual: gh("182", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzej spokojni rycerze: czarny krzyż, biały na czerwonym, czerwony na białym",
          ua: "Три спокійні лицарі: чорний хрест, білий на червоному, червоний на білому"
        },
        title: { pl: "Joannici, Krzyżacy, templariusze", ua: "Госпітальєри, тевтонці, тамплієри" },
        prompt: {
          pl: "Szkolny slajd 16:9. Trzej rycerze STOJĄ, dzień, BEZ walki. 1) biały płaszcz, czarny krzyż — „Krzyżacy, 1190, potem państwo nad Bałtykiem”. 2) czerwony płaszcz, biały krzyż — „joannici, 1113, potem Cypr, Rodos, Malta”. 3) biały płaszcz, czerwony krzyż — „templariusze, 1119, rycerze francuscy”. Tytuł: „zakony rycerskie”. Styl Nowej Ery.",
          ua: "Три ордени, стоять. Без бою. Без процесу тамплієрів."
        }
      }),
      text: {
        pl: [
          ["", em("Zakony rycerskie"), ": członkowie byli rycerzami i zakonnikami. Szpitale dla pielgrzymów, ochrona, walka. Podlegali papieżowi; na czele — wielki mistrz."],
          ["Najsłynniejsze: ", em("joannici"), ", ", em("Krzyżacy"), " (później państwo nad Bałtykiem — Polska od lekcji 27), ", em("templariusze"), "."]
        ],
        ua: [
          ["", em("Лицарські ордени"), ": члени були лицарями і ченцями. Шпиталі для паломників, захист, боротьба. Підлягали папі; на чолі — великий магістр."],
          ["Найвідоміші: ", em("госпітальєри"), " (joannici), ", em("тевтонці"), " (Krzyżacy; пізніше держава над Балтикою — Польща від уроку 27), ", em("тамплієри"), "."]
        ]
      },
      task: {
        id: "h21-zakony",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które trzy zakony rycerskie zapamiętujemy w tej lekcji?",
          ua: "Які три лицарські ордени запам’ятовуємо в цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "joannici, Krzyżacy, templariusze", ua: "госпітальєри, тевтонці, тамплієри" } },
          { id: "b", label: { pl: "benedyktyni, franciszkanie, dominikanie", ua: "бенедиктинці, францисканці, домініканці" } },
          { id: "c", label: { pl: "legioniści, hoplici, husaria", ua: "легіонери, гопліти, гусарія" } }
        ],
        answer: "a",
        hint: {
          pl: "Znak krzyża na płaszczu. Nie myl z zakonami mnichów z późniejszej lekcji o Kościele.",
          ua: "Знак хреста на плащі. Не плутай з чернечими орденами з пізнішого уроку про Церкву."
        },
        explanation: {
          pl: "Film/KN. Benedyktyni ≠ krucjaty. Husaria = nowożytność.",
          ua: "Фільм/KN. Бенедиктинці ≠ круціати. Гусарія = новий час."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Skutki krucjat", ua: "Наслідки походів" },
      formula: "wrogość · kultura",
      visual: gh("183", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwie kolumny skutków: wrogość i przejęcie kultury Wschodu",
          ua: "Дві колонки наслідків: ворожість і перейняття культури Сходу"
        },
        title: { pl: "Nie tylko wojna", ua: "Не лише війна" },
        prompt: {
          pl: "Szkolna infografika 16:9, dwie kolumny, BEZ pola bitwy i BEZ Matejki. LEWA: „wrogość chrześcijanie–muzułmanie; wyparcie z Palestyny; osłabienie Bizancjum”. PRAWA: „kultura Wschodu: papier, cyfry, lustra, tkaniny; handel Wenecja, Genua”. Tytuł: „skutki wypraw krzyżowych”. Styl Nowej Ery.",
          ua: "Дві колонки: ворожість | культура Сходу. Без битви."
        }
      }),
      text: {
        pl: [
          ["Chrześcijan wyparto z Ziemi Świętej. Zginęło wiele osób, niszczono miasta. Osłabło ", em("Bizancjum"), " (splądrowanie Konstantynopola). Wzrosła ", em("wrogość"), " między chrześcijanami a muzułmanami."],
          ["Europejczycy poznali kulturę Bliskiego Wschodu: ", em("papier"), ", ", em("cyfry"), " (lekcja 18), lustra, tkaniny. Rozwijał się handel — ", em("Wenecja"), ", ", em("Genua"), "."]
        ],
        ua: [
          ["Християн витіснили зі Святої Землі. Загинуло багато людей, нищили міста. Ослабла ", em("Візантія"), " (пограбування Константинополя). Зросла ", em("ворожість"), " між християнами і мусульманами."],
          ["Європейці пізнали культуру Близького Сходу: ", em("папір"), ", ", em("цифри"), " (урок 18), люстра, тканини. Розвивалась торгівля — ", em("Венеція"), ", ", em("Генуя"), "."]
        ]
      },
      task: {
        id: "h21-skutki",
        type: "true-false",
        level: "B",
        question: {
          pl: "Skutkiem krucjat była tylko przyjaźń Wschodu i Zachodu — prawda czy fałsz?",
          ua: "Наслідком походів була лише дружба Сходу і Заходу — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Dwa skutki naraz: wrogość i przejęcie osiągnięć. Nie jeden uśmiech.",
          ua: "Два наслідки разом: ворожість і перейняття здобутків. Не одна усмішка."
        },
        explanation: {
          pl: "Fałsz. Film: wrogość oraz kultura Wschodu.",
          ua: "Неправда. Фільм: ворожість і культура Сходу."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Joannici dziś", ua: "Госпітальєри сьогодні" },
      formula: "zakon maltański",
      visual: gh("184", {
        kind: "image-placeholder",
        alt: {
          pl: "Biały krzyż maltański na czerwonym i spokojna pomoc chorym",
          ua: "Білий мальтійський хрест на червоному і спокійна допомога хворим"
        },
        title: { pl: "Szpitalnicy, nie szturm", ua: "Шпитальники, не штурм" },
        prompt: {
          pl: "Szkolny slajd 16:9. LEWA: czerwona tarcza, biały ośmioramienny krzyż maltański, podpis „joannici / zakon maltański”. PRAWA: spokojna scena pomocy choremu (wózek, opiekun), BEZ kopii zdjęcia z dworca PKP, BEZ broni. Tytuł: „zakon joannitów dziś”. Styl Nowej Ery.",
          ua: "Мальтійський хрест і допомога хворим. Без зброї."
        }
      }),
      text: {
        pl: [
          ["", em("Joannici"), " to też zakon maltański (kawalerowie maltańscy, szpitalnicy). Jeden z najstarszych zakonów rycerskich, który działa do dziś."],
          "Znak: biały krzyż na czerwonym. Dziś: opieka nad chorymi i biednymi, pomoc przy klęskach. Siedziba — Rzym. To ciekawostka filmu, nie nowa data na osi."
        ],
        ua: [
          ["", em("Госпітальєри"), " (joannici) — також мальтійський орден. Один із найдавніших лицарських орденів, що діє досі."],
          "Знак: білий хрест на червоному. Нині: опіка над хворими і бідними, допомога при лихах. Осідок — Рим. Це цікавинка фільму, не нова дата на осі."
        ]
      },
      task: {
        id: "h21-malta",
        type: "true-false",
        level: "C",
        question: {
          pl: "Joannici (zakon maltański) zajmują się dziś m.in. pomocą chorym — prawda czy fałsz?",
          ua: "Госпітальєри (мальтійський орден) сьогодні серед іншого допомагають хворим — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Szpitalnicy = szpital. Nie myl z Krzyżakami nad Bałtykiem.",
          ua: "Шпитальники = шпиталь. Не плутай з тевтонцями над Балтикою."
        },
        explanation: {
          pl: "Prawda. Film: joannici współcześnie. Krzyżacy = osobna historia Polski.",
          ua: "Правда. Фільм: госпітальєри сьогодні. Тевтонці = окрема історія Польщі."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Ziemia Święta — Palestyna (Jerozolima, Betlejem)", ua: "Свята Земля — Палестина (Єрусалим, Вифлеєм)" },
        { pl: "synod w Clermont (1095) — zjazd; wezwanie Urbana II", ua: "собор у Клермоні (1095) — з’їзд; заклик Урбана II" },
        { pl: "krucjata / krzyżowiec — wyprawa krzyżowa / jej uczestnik (crux = krzyż)", ua: "хрестовий похід / хрестоносець — виправа за хрестом / її учасник (crux = хрест)" },
        { pl: "Królestwo Jerozolimskie — państwo krzyżowców po 1099", ua: "Єрусалимське королівство — держава хрестоносців після 1099" },
        { pl: "zakony rycerskie — joannici, Krzyżacy, templariusze", ua: "лицарські ордени — госпітальєри, тевтонці, тамплієри" },
        { pl: "Akka (1291) — ostatnia twierdza krzyżowców w Palestynie", ua: "Акра (1291) — остання твердиня хрестоносців у Палестині" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„W 622 Urban II w Mekce wezwał do hidżry. Pierwsza krucjata zdobyła Konstantynopol w 843. Krzyżacy to Arabowie z lekcji 18. Joannici dziś szturmują Jerozolimę.”",
        ua: "«Року 622 Урбан II в Мецці закликав до хіджри. Перший похід здобув Константинополь 843 року. Тевтонці — це араби з уроку 18. Госпітальєри сьогодні штурмують Єрусалим.»"
      },
      text: {
        pl: [
          "622 = hidżra Mahometa. 1095 = Clermont. 1099 = Jerozolima. 1204 = Konstantynopol. 843 = Verdun. Krzyżacy = zakon niemiecki. Joannici dziś = pomoc chorym."
        ],
        ua: [
          "622 = хіджра Мухаммада. 1095 = Клермон. 1099 = Єрусалим. 1204 = Константинополь. 843 = Верден. Тевтонці = німецький орден. Госпітальєри сьогодні = допомога хворим."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: dlaczego Urban II wezwał do wyprawy, czym się skończyła pierwsza krucjata i co zostało po zakonach. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях: чому Урбан II закликав до походу, чим скінчився перший похід і що лишилось після орденів. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1095, 1096, 1099, 1291; joannici, Krzyżacy, templariusze."
        ],
        ua: [
          "Підказка: 1095, 1096, 1099, 1291; госпітальєри, тевтонці, тамплієри."
        ]
      },
      task: {
        id: "h21-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje wezwanie, pierwszą krucjatę i koniec w Palestynie?",
          ua: "Яке речення охоплює заклик, перший похід і кінець у Палестині?"
        },
        options: [
          { id: "a", label: { pl: "W 1095 Urban II wezwał do odbicia Ziemi Świętej; w 1096–1099 krzyżowcy zdobyli Jerozolimę; do końca XIII w. chrześcijan wyparto", ua: "Року 1095 Урбан II закликав відбити Святу Землю; 1096–1099 хрестоносці здобули Єрусалим; до кінця XIII ст. християн витіснили" } },
          { id: "b", label: { pl: "W 1054 Grzegorz VII poszedł do Canossy i założył Mekkę", ua: "Року 1054 Григорій VII пішов до Каносси і заснував Мекку" } },
          { id: "c", label: { pl: "Krucjaty to pięć filarów islamu z lekcji 18", ua: "Круціати — це п’ять стовпів ісламу з уроку 18" } }
        ],
        answer: "a",
        hint: {
          pl: "Daty z osi + koniec XIII wieku. Nie mieszaj z lekcją 18 i 20.",
          ua: "Дати з осі + кінець XIII століття. Не змішуй з уроком 18 і 20."
        },
        explanation: {
          pl: "Canossa = 1077, lekcja 20. Filary = islam.",
          ua: "Каносса = 1077, урок 20. Стовпи = іслам."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "IV wyprawa i Krzyżacy", ua: "IV похід і тевтонці" },
      task: {
        id: "h21-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które miasto zdobyła IV krucjata (1204), a który zakon założył potem państwo nad Bałtykiem?",
          ua: "Яке місто здобув IV похід (1204), а який орден потім заснував державу над Балтикою?"
        },
        options: [
          { id: "a", label: { pl: "1204 — Konstantynopol (nie Jerozolima); państwo nad Bałtykiem — Krzyżacy", ua: "1204 — Константинополь (не Єрусалим); держава над Балтикою — тевтонці" } },
          { id: "b", label: { pl: "1204 — Mekka; państwo — templariusze w Clermont", ua: "1204 — Мекка; держава — тамплієри в Клермоні" } },
          { id: "c", label: { pl: "1204 — Canossa; państwo — Arabowie z 732", ua: "1204 — Каносса; держава — араби з 732" } }
        ],
        answer: "a",
        hint: {
          pl: "IV ≠ I. Jerozolima = 1099. Krzyżacy = czarny krzyż, Bałtyk później w lekcjach o Polsce.",
          ua: "IV ≠ I. Єрусалим = 1099. Тевтонці = чорний хрест, Балтика пізніше в уроках про Польщу."
        },
        explanation: {
          pl: "Ponadpodstawowe z filmu i krzyżówki nauczyciela. Rekonkwista i wyprawa dziecięca zostają w filmie / ciekawostce — nie na osi.",
          ua: "Понад базове з фільму і кросворда вчителя. Реконкіста і дитячий похід лишаються у фільмі — не на осі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h21-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 1095 · 1096 · 1099",
          ua: "Добери: 1095 · 1096 · 1099"
        },
        options: [
          { id: "a", label: { pl: "1095 — Clermont (Urban II); 1096 — pierwsza krucjata; 1099 — Jerozolima", ua: "1095 — Клермон (Урбан II); 1096 — перший похід; 1099 — Єрусалим" } },
          { id: "b", label: { pl: "1095 — schizma; 1096 — Canossa; 1099 — Wormacja", ua: "1095 — схизма; 1096 — Каносса; 1099 — Вормс" } },
          { id: "c", label: { pl: "1095 — hidżra; 1096 — Verdun; 1099 — 800", ua: "1095 — хіджра; 1096 — Верден; 1099 — 800" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty z osi tej lekcji.",
          ua: "Три дати з осі цього уроку."
        },
        explanation: {
          pl: "To KN. Inne lata = lekcje 18–20.",
          ua: "Це KN. Інші роки = уроки 18–20."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "1095: Urban II wezwał do odbicia Ziemi Świętej. 1096 — pierwsza krucjata; 1099 — Jerozolima i państwa chrześcijańskie.",
          ["1095", "Urban II", "1096", "1099"],
          "1095: Урбан II закликав відбити Святу Землю. 1096 — перший похід; 1099 — Єрусалим і християнські держави.",
          ["1095", "Урбан II", "1096", "1099"]
        ),
        mark(
          "Do końca XIII w. jeszcze siedem krucjat. Chrześcijan wyparto z Palestyny.",
          ["XIII w.", "siedem", "wyparto"],
          "До кінця XIII ст. ще сім походів. Християн витіснили з Палестини.",
          ["XIII ст.", "сім", "витіснили"]
        ),
        mark(
          "Zakony rycerskie: joannici, Krzyżacy, templariusze.",
          ["joannici", "Krzyżacy", "templariusze"],
          "Лицарські ордени: госпітальєри, тевтонці, тамплієри.",
          ["госпітальєри", "тевтонці", "тамплієри"]
        ),
        mark(
          "Skutki: wrogość muzułmanów i chrześcijan, ale też kultura Wschodu w Europie.",
          ["wrogość", "kultura Wschodu"],
          "Наслідки: ворожість мусульман і християн, але також культура Сходу в Європі.",
          ["ворожість", "культура Сходу"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: system feudalny — jak żyli pan i wasal, gdy rycerz wracał z wyprawy.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: феодальна система — як жили пан і васал, коли лицар повертався з походу.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "UT-bn_iWrsw",
        title: {
          pl: "Krótkie Lekcje: Wyprawy krzyżowe",
          ua: "Короткі уроки: Хрестові походи"
        }
      }
    }
  ]
};
