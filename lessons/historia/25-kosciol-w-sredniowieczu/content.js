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
      heading: { pl: "Kościół w średniowieczu", ua: "Церква в середньовіччі" },
      formula: "zakon · klasztor · kopista",
      text: {
        pl: [
          "Z lekcji 22 wiesz: duchowieństwo to stan z przywilejami. Dziś od środka: ksiądz, zakon, szkoła.",
          "Nie nowa data na osi — VI i XIII wiek w tekście."
        ],
        ua: [
          "З уроку 22 знаєш: духовенство — стан із привілеями. Сьогодні зсередини: священик, орден, школа.",
          "Не нова дата на осі — VI і XIII століття в тексті."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "scharakteryzować stan duchowny i jego role (msza, dwór, papież)", ua: "схарактеризувати духовний стан і його ролі (служба, двір, папа)" },
        { pl: "powiedzieć, czym jest zakon: śluby, klasztor, opat, reguła", ua: "сказати, що таке орден: обітниці, монастир, абат, статут" },
        { pl: "wskazać benedyktynów, cystersów, franciszkanów i dominikanów", ua: "вказати бенедиктинців, цистерціанців, францисканців і домініканців" },
        { pl: "opisać kopistów, „benedyktyńską pracę” i szkoły kościelne", ua: "описати переписувачів, «бенедиктинську працю» і церковні школи" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Stan duchowny", ua: "Духовний стан" },
      formula: "papież",
      visual: gh("208", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojna msza: ksiądz przy ołtarzu, lista ról duchownych",
          ua: "Спокійна служба: священик біля вівтаря, список ролей духовенства"
        },
        title: { pl: "Msza i dwór, nie bitwa", ua: "Служба і двір, не битва" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Ksiądz w szatach przy ołtarzu, spokój, BEZ krwi i BEZ kopii obrazu z filmu. Lista PL: „nabożeństwa i sakramenty”; „czytać i pisać po łacinie”; „doradcy i urzędnicy”; „podlegają papieżowi”. Styl Nowej Ery.",
          ua: "Священик біля вівтаря. Ролі: служба, латина, дорадник, папа. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Duchownym"), " mógł zostać człowiek z każdego stanu — po nauce i ", em("święceniach"), ". Księża sprawowali nabożeństwa i sakramenty, czytali i pisali po ", em("łacinie"), "."],
          ["Byli doradcami na dworach i wysokimi urzędnikami. Związani z władcą kraju, ale podlegali ", em("papieżowi"), ". To jedyna liczna grupa z wykształceniem."]
        ],
        ua: [
          ["", em("Духівником"), " міг стати чоловік із кожного стану — після науки і ", em("свячень"), ". Священики служили служби і таїнства, читали й писали ", em("латиною"), "."],
          ["Були дорадниками на дворах і високими урядниками. Пов’язані з володарем країни, але підлягали ", em("папі"), ". Це єдина численна група з освітою."]
        ]
      },
      task: {
        id: "h25-duch",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co należy do roli średniowiecznego duchowieństwa?",
          ua: "Що належить до ролі середньовічного духовенства?"
        },
        options: [
          { id: "a", label: { pl: "nabożeństwa, łacina, doradcy na dworze; podlegali papieżowi", ua: "служби, латина, дорадники на дворі; підлягали папі" } },
          { id: "b", label: { pl: "tylko strzeżenie bramy miasta jak w lekcji 24", ua: "лише охорона міської брами як у уроці 24" } },
          { id: "c", label: { pl: "pasowanie giermków na rycerzy", ua: "посвята зброєносців на лицарів" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki i KN: role duchownych. Brama = miasto. Pasowanie = lekcja 23.",
          ua: "Цілі вчительки і KN: ролі духовенства. Брама = місто. Посвята = урок 23."
        },
        explanation: {
          pl: "Notatki: związani z władcą, ale papież. Rycerz i straż = inne lekcje.",
          ua: "Нотатки: пов’язані з володарем, але папа. Лицар і варта = інші уроки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Religijność ludzi", ua: "Релігійність людей" },
      formula: "zbawienie · post",
      visual: gh("209", {
        kind: "image-placeholder",
        alt: {
          pl: "Modlitwa przy stole, skromny posiłek na post, bez biczowania",
          ua: "Молитва біля столу, скромна їжа на піст, без бичування"
        },
        title: { pl: "Modlitwa i post, nie bicz", ua: "Молитва і піст, не бич" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy spokojne pola, dzień. 1 modlitwa przy stole. 2 post: chleb i woda. 3 asceza: skromny habit, bez tortury. Tytuł: „zbawienie”. BEZ procesji biczowników, BEZ kopii kadru filmu. Styl Nowej Ery.",
          ua: "Молитва, піст, аскеза. Без бичування."
        }
      }),
      text: {
        pl: [
          ["Kościół miał ogromny wpływ na życie. Ludzie chcieli ", em("zbawienia"), ": ", em("modlitwa"), ", ", em("post"), ", przestrzeganie zasad wiary."],
          ["", em("Asceza"), " to życie skromne, bez wygód — nie scena przemocy. Kary ciała zostawiamy poza ekranem."]
        ],
        ua: [
          ["Церква мала величезний вплив на життя. Люди хотіли ", em("спасіння"), ": ", em("молитва"), ", ", em("піст"), ", дотримання засад віри."],
          ["", em("Аскеза"), " — скромне життя без вигод, не сцена насильства. Тілесні кари залишаємо поза екраном."]
        ]
      },
      task: {
        id: "h25-rel",
        type: "true-false",
        level: "B",
        question: {
          pl: "Średniowieczni wierni często się modlili i zachowywali posty, bo chcieli zbawienia — prawda czy fałsz?",
          ua: "Середньовічні вірні часто молилися і дотримували постів, бо хотіли спасіння — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Prezentacja: post, zbawienie, modlitwa, asceza. KN: religijność.",
          ua: "Презентація: піст, спасіння, молитва, аскеза. KN: релігійність."
        },
        explanation: {
          pl: "Prawda. Film Zapamiętaj + karta nauczycielki.",
          ua: "Правда. Фільм «Запам’ятай» + картка вчительки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zakon i klasztor", ua: "Орден і монастир" },
      formula: "trzy śluby",
      visual: gh("210", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy śluby zakonne i klasztor z opatem, skarbnikiem i ogrodem",
          ua: "Три монаші обітниці і монастир з абатом, скарбником і садом"
        },
        title: { pl: "Reguła, nie dowolność", ua: "Статут, не сваволя" },
        prompt: {
          pl: "Szkolny slajd 16:9. Trzy karty PL: „ubóstwo”, „celibat”, „posłuszeństwo”. Obok klasztor: opat, skarbnik, szafarz, ogród, szpital. Dzień, mnisi przy stole refektarza spokojnie. BEZ kopii obrazu z filmu. Styl Nowej Ery.",
          ua: "Три обітниці. Абат, скарбник, сад, шпиталь. Без копії картини."
        }
      }),
      text: {
        pl: [
          ["", em("Zakon"), " to wspólnota, która składa śluby i żyje według ", em("reguły"), ". Siedziba: ", em("klasztor"), ". Śluby: ", em("ubóstwa"), ", ", em("celibatu"), ", ", em("posłuszeństwa"), "."],
          ["Na czele stoi ", em("opat"), ". Każdy ma pracę: skarbnik, szafarz, ogród, szpital, przytułek. Dzień: modlitwa, praca, Pismo, odpoczynek."]
        ],
        ua: [
          ["", em("Орден"), " — спільнота, що складає обітниці і живе за ", em("статутом"), " (reguła). Осідок: ", em("монастир"), ". Обітниці: ", em("вбозтва"), ", ", em("целібату"), ", ", em("послуху"), "."],
          ["На чолі стоїть ", em("абат"), " (opat). Кожен має роботу: скарбник, ключник, сад, шпиталь, притулок. День: молитва, праця, Писання, відпочинок."]
        ]
      },
      task: {
        id: "h25-sluby",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jakie trzy śluby składali zakonnicy?",
          ua: "Які три обітниці складали ченці?"
        },
        options: [
          { id: "a", label: { pl: "ubóstwa, celibatu, posłuszeństwa", ua: "вбозтва, целібату, послуху" } },
          { id: "b", label: { pl: "lenna, hołdu i ostrog z lekcji 22–23", ua: "лену, присяги і шпор з уроків 22–23" } },
          { id: "c", label: { pl: "hidżry, dżihadu i kalifatu", ua: "хіджри, джихаду і халіфату" } }
        ],
        answer: "a",
        hint: {
          pl: "Prezentacja: UBÓSTWA, CELIBATU, POSŁUSZEŃSTWA. Klasztor ≠ zamek rycerza.",
          ua: "Презентація: ВБОЗТВА, ЦЕЛІБАТУ, ПОСЛУХУ. Монастир ≠ замок лицаря."
        },
        explanation: {
          pl: "KN: zakon, reguła, klasztor. Islam = lekcja 18.",
          ua: "KN: орден, статут, монастир. Іслам = урок 18."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Święty Franciszek", ua: "Святий Франциск" },
      formula: "XIII w. · Asyż",
      visual: gh("211", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta świętego Franciszka z Asyżu: cztery punkty, spokojny portret w habicie",
          ua: "Картка святого Франциска з Ассизі: чотири пункти, спокійний портрет у габіті"
        },
        title: { pl: "Ubóstwo i kazanie, nie gore", ua: "Вбозтво і проповідь, не gore" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret mnicha w brązowym habicie, dzień, BEZ stygmatów z krwią, BEZ rozmowy ze św. Klarą jako „na wpół ślepy”. Cztery punkty PL: „kto — św. Franciszek z Asyżu”; „skąd — Włochy”; „lata — XIII wiek”; „wsławił się — ubóstwo, miłość do stworzenia, franciszkanie”. Styl Nowej Ery.",
          ua: "Картка Франциска: Італія, XIII ст., вбозтво. Без крові і без сліпоти."
        }
      }),
      text: {
        pl: [
          ["", em("Święty Franciszek z Asyżu"), " (Włochy, XIII w.) zrzekł się bogactwa, kochał przyrodę, wędrował i nauczał prostym językiem. Założył ", em("franciszkanów"), " — zakon żebraczy."],
          "Zakony żebracze (od XIII w.) żyły z ofiar wiernych i reagowały na zbyt wygodne życie części kleru. Dominikanie — św. Dominik."
        ],
        ua: [
          ["", em("Святий Франциск з Ассизі"), " (Італія, XIII ст.) зрікся багатства, любив природу, мандрував і вчив простою мовою. Заснував ", em("францисканців"), " — жебрачий орден."],
          "Жебрачі ордени (від XIII ст.) жили з пожертв вірних і відповідали на занадто зручне життя частини кліру. Домініканці — св. Домінік."
        ]
      },
      task: {
        id: "h25-franc",
        type: "true-false",
        level: "B",
        question: {
          pl: "Święty Franciszek z Asyżu związał zakon z ubóstwem i nauczaniem prostym językiem — prawda czy fałsz?",
          ua: "Святий Франциск з Ассизі пов’язав орден із убозтвом і навчанням простою мовою — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: postać tej lekcji. Nie myl z Zawiszą (23) ani Urbanem II (21).",
          ua: "KN: постать цього уроку. Не плутай із Завішею (23) чи Урбаном II (21)."
        },
        explanation: {
          pl: "Prawda. Klaryski zostawiamy w filmie — tu Franciszek.",
          ua: "Правда. Кларисок залишаємо у фільмі — тут Франциск."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jakie zakony powstały?", ua: "Які ордени постали?" },
      formula: "VI w. · XIII w.",
      visual: gh("212", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery pola: benedyktyni, cystersi, franciszkanie, dominikanie",
          ua: "Чотири поля: бенедиктинці, цистерціанці, францисканці, домініканці"
        },
        title: { pl: "Cztery nazwy, nie cztery bitwy", ua: "Чотири назви, не чотири битви" },
        prompt: {
          pl: "Szkolny slajd 16:9, cztery pola, dzień. 1 benedyktyni: „VI w., św. Benedykt, Monte Cassino”. 2 cystersi: „szkoły, szpitale, uprawa”. 3 franciszkanie: „św. Franciszek”. 4 dominikanie: „św. Dominik”. Ikony habitu, BEZ zdjęcia Monte Cassino i BEZ ryciny Henrykowa. Styl Nowej Ery.",
          ua: "Чотири ордени. Без фото Вікіпедії."
        }
      }),
      text: {
        pl: [
          ["", em("Benedyktyni"), ": VI wiek, św. Benedykt, Monte Cassino — biblioteka, kopiowanie ksiąg. ", em("Cystersi"), ": szkoły, szpitale, uprawa i hodowla."],
          ["", em("Franciszkanie"), " i ", em("dominikanie"), " — zakony żebracze (XIII w.). Klasztory były ośrodkami religii, nauki i gospodarki."]
        ],
        ua: [
          ["", em("Бенедиктинці"), ": VI століття, св. Бенедикт, Монте-Кассіно — бібліотека, перепис книг. ", em("Цистерціанці"), ": школи, шпиталі, рілля і худоба."],
          ["", em("Францисканці"), " і ", em("домініканці"), " — жебрачі ордени (XIII ст.). Монастирі були осередками релігії, науки й господарства."]
        ]
      },
      task: {
        id: "h25-zakony",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopasuj założyciela (prezentacja nauczycielki).",
          ua: "Добери засновника (презентація вчительки)."
        },
        options: [
          { id: "a", label: { pl: "św. Benedykt — benedyktyni; św. Franciszek — franciszkanie; św. Dominik — dominikanie", ua: "св. Бенедикт — бенедиктинці; св. Франциск — францисканці; св. Домінік — домініканці" } },
          { id: "b", label: { pl: "św. Benedykt — templariusze z lekcji 21", ua: "св. Бенедикт — тамплієри з уроку 21" } },
          { id: "c", label: { pl: "św. Franciszek — cechy szewców z lekcji 24", ua: "св. Франциск — цехи шевців з уроку 24" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzech świętych z prezentacji. Cystersi też KN — szkoły i uprawa, bez osobnego „założyciela” na karcie.",
          ua: "Троє святих із презентації. Цистерціанці теж KN — школи і рілля, без окремого «засновника» на картці."
        },
        explanation: {
          pl: "KN: cztery zakony. Templariusze = krucjaty.",
          ua: "KN: чотири ордени. Тамплієри = походи."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kopiści", ua: "Переписувачі" },
      formula: "skryptorium",
      visual: gh("213", {
        kind: "image-placeholder",
        alt: {
          pl: "Mnich w skryptorium pisze gęsim piórem na pergaminie, obok szkolny inicjał",
          ua: "Чернець у скрипторії пише гусячим пером на пергаменті, поряд шкільний ініціал"
        },
        title: { pl: "Ręcznie, bo nie było druku", ua: "Вручну, бо не було друку" },
        prompt: {
          pl: "Szkolny slajd 16:9. Mnich przy pulpicie, tonsura, gęsie pióro, pergamin. Podpisy: „kopista”, „skryptorium”, „benedyktyńska praca”. Obok duża ozdobna litera INICJAŁ (szkolny rysunek, nie foto kodeksu). Dzień, BEZ kopii ryciny z filmu. Styl Nowej Ery.",
          ua: "Скрипторій, перо, пергамент, ініціал. Не фото кодексу."
        }
      }),
      text: {
        pl: [
          ["Nie było jeszcze druku. ", em("Kopiści"), " przepisywali księgi w ", em("skryptorium"), ": gęsie pióro, ", em("pergamin"), " (skóra), ozdobne ", em("miniatury"), " i ", em("inicjał"), " (wielka litera). To zajęcie bardzo pracochłonne — stąd powiedzenie ", em("benedyktyńska praca"), "."],
          "Własny inicjał narysuj w zeszycie. Więcej o sztuce ksiąg — lekcja 26."
        ],
        ua: [
          ["Друку ще не було. ", em("Переписувачі"), " (kopiści) писали книги в ", em("скрипторії"), ": гусяче перо, ", em("пергамент"), " (шкіра), оздобні ", em("мініатюри"), " і ", em("ініціал"), " (велика літера). Це дуже копітка робота — звідси ", em("бенедиктинська праця"), "."],
          "Власний ініціал намалюй у зошиті. Більше про мистецтво книг — урок 26."
        ]
      },
      task: {
        id: "h25-kop",
        type: "true-false",
        level: "B",
        question: {
          pl: "„Benedyktyńska praca” oznacza m.in. żmudne, staranne przepisywanie ksiąg — prawda czy fałsz?",
          ua: "«Бенедиктинська праця» означає зокрема копітке, старанне переписування книг — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: wyjaśnić zwrot. Nie myl z orką chłopów (trójpolówka, lekcja 24).",
          ua: "KN: пояснити зворот. Не плутай з оранкою селян (трипілля, урок 24)."
        },
        explanation: {
          pl: "Prawda. Inicjał tu tylko jako litera w księdze, nie portal gotycki.",
          ua: "Правда. Ініціал тут лише як літера в книзі, не готичний портал."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Szkolnictwo", ua: "Шкільництво" },
      formula: "łacina · chłopcy",
      visual: gh("214", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy szczeble szkół kościelnych: parafialna, katedralna, uniwersytet",
          ua: "Три щаблі церковних шкіл: парафіяльна, кафедральна, університет"
        },
        title: { pl: "Tylko szkoły Kościoła", ua: "Лише школи Церкви" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy szczeble, dzień. 1 szkoła parafialna: łacina, modlitwy, śpiew. 2 katedralna/klasztorna. 3 uniwersytet: duchowni, prawnicy, lekarze; „tylko chłopcy, po łacinie”. Wykład przy pulpicie, BEZ kopii miniatury XIV w. z filmu. Styl Nowej Ery.",
          ua: "Парафія → катедра / монастир → університет. Лише хлопці, латина."
        }
      }),
      text: {
        pl: [
          ["Były praktycznie tylko ", em("szkoły kościelne"), ": parafialne (łacina, modlitwy, śpiew), potem katedralne lub klasztorne."],
          ["", em("Uniwersytet"), " kształcił duchownych, prawników i lekarzy — po łacinie, ", em("tylko chłopców"), ". Dziś szkoła jest dla dziewcząt i chłopców i uczy wielu przedmiotów."]
        ],
        ua: [
          ["Були практично лише ", em("церковні школи"), ": парафіяльні (латина, молитви, спів), далі кафедральні або монастирські."],
          ["", em("Університет"), " готував духівників, правників і лікарів — латиною, ", em("лише хлопців"), ". Сьогодні школа для дівчат і хлопців і вчить багатьох предметів."]
        ]
      },
      task: {
        id: "h25-szkola",
        type: "true-false",
        level: "C",
        question: {
          pl: "Średniowieczne uniwersytety były otwarte tylko dla chłopców i uczono tam po łacinie — prawda czy fałsz?",
          ua: "Середньовічні університети були відкриті лише для хлопців і там учили латиною — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN ponadpodstawowe: porównać ze szkołą dziś. Nie myl z cechami rzemieślników.",
          ua: "KN понад базове: порівняти зі школою сьогодні. Не плутай із цехами ремісників."
        },
        explanation: {
          pl: "Prawda. To KN: szkolnictwo. Porównanie ze współczesnością — tu krótko.",
          ua: "Правда. Це KN: шкільництво. Порівняння із сучасністю — тут коротко."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Czym się zajmowali zakonnicy?", ua: "Чим займалися ченці?" },
      formula: "modlitwa · praca",
      visual: gh("215", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery zajęcia zakonników: pole, szpital, szkoła, przepisywanie ksiąg",
          ua: "Чотири заняття ченців: поле, шпиталь, школа, перепис книг"
        },
        title: { pl: "Nie broń i nie straż miejska", ua: "Не зброя і не міська варта" },
        prompt: {
          pl: "Szkolny slajd 16:9, cztery ikony, dzień: uprawa ziemi; opieka nad chorymi; szkoła; przepisywanie ksiąg. Przekreślone małe ikony: miecz rycerza, brama miasta, worek daniny pana. Tytuł: „modlitwa i praca”. Styl Nowej Ery.",
          ua: "Рілля, хворі, школа, книги. Не меч і не брама."
        }
      }),
      text: {
        pl: [
          ["Zakonnicy: ", em("modlitwa"), " i ", em("praca"), " — przepisywanie ksiąg, uprawa, głoszenie wiary, szkoły, opieka nad chorymi. Utrzymanie: plony i ofiary wiernych."],
          "Nie strzegli porządku w mieście (lekcja 24) i nie kuli broni dla rycerzy (lekcja 23). Daniny od chłopów brał właściciel ziemi, nie „zadanie zakonu” z karty."
        ],
        ua: [
          ["Ченці: ", em("молитва"), " і ", em("праця"), " — перепис книг, рілля, проповідь, школи, опіка над хворими. Утримання: врожай і пожертви вірних."],
          "Не стерегли ладу в місті (урок 24) і не кували зброї для лицарів (урок 23). Данину з селян брав власник землі, не «завдання ордену» з картки."
        ]
      },
      task: {
        id: "h25-praca",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym zajmowali się zakonnicy? (karta nauczycielki)",
          ua: "Чим займалися ченці? (картка вчительки)"
        },
        options: [
          { id: "a", label: { pl: "przepisywanie ksiąg, uprawa, szkoły, opieka nad chorymi, głoszenie wiary", ua: "перепис книг, рілля, школи, опіка над хворими, проповідь" } },
          { id: "b", label: { pl: "strzeżenie bramy i wyrób mieczy dla giermków", ua: "охорона брами і вироб мечів для зброєносців" } },
          { id: "c", label: { pl: "tylko pobieranie danin jak wójt z lekcji 24", ua: "лише збір данин як війт з уроку 24" } }
        ],
        answer: "a",
        hint: {
          pl: "Zaznacz to, co KN i karta: księgi, pole, szkoła, chorzy. Nie myl z wójtem i rycerzem.",
          ua: "Познач те, що KN і картка: книги, поле, школа, хворі. Не плутай із війтом і лицарем."
        },
        explanation: {
          pl: "Prezentacja + KN życie w klasztorze.",
          ua: "Презентація + KN життя в монастирі."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "zakon / klasztor / opat / reguła — wspólnota, siedziba, przełożony, zasady dnia", ua: "орден / монастир / абат / статут — спільнота, осідок, настоятель, правила дня" },
        { pl: "śluby: ubóstwo, celibat, posłuszeństwo", ua: "обітниці: вбозтво, целібат, послух" },
        { pl: "asceza — życie skromne, bez wygód, dla wiary", ua: "аскеза — скромне життя без вигод, заради віри" },
        { pl: "kopista / skryptorium / pergamin / inicjał — przepisywanie ksiąg przed drukiem", ua: "переписувач / скрипторій / пергамент / ініціал — перепис книг до друку" },
        { pl: "benedyktyńska praca — żmudna, bardzo staranna (jak kopiowanie)", ua: "бенедиктинська праця — копітка, дуже старанна (як перепис)" },
        { pl: "benedyktyni, cystersi, franciszkanie, dominikanie — cztery zakony tej lekcji", ua: "бенедиктинці, цистерціанці, францисканці, домініканці — чотири ордени цього уроку" },
        { pl: "uniwersytet — szkoła wyższa Kościoła: łacina, chłopcy, duchowni, prawnicy, lekarze", ua: "університет — вища школа Церкви: латина, хлопці, духівники, правники, лікарі" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Duchowni nie podlegali papieżowi. Śluby to ostrogi i pas. Kopista orał ugór cepem. Franciszek założył cechy w Toruniu. Uniwersytet był tylko dla giermków. Benedyktyńska praca to hołd z 1122.”",
        ua: "«Духівники не підлягали папі. Обітниці — це шпори і пояс. Переписувач орав переліг ціпом. Франциск заснував цехи в Торуні. Університет був лише для зброєносців. Бенедиктинська праця — присяга 1122.»"
      },
      text: {
        pl: [
          "Papież nad klerem. Śluby = ubóstwo, celibat, posłuszeństwo. Kopista = księgi. Franciszek = zakon żebraczy. Uniwersytet = chłopcy, łacina. Benedyktyńska praca = staranne przepisywanie."
        ],
        ua: [
          "Папа над кліром. Обітниці = вбозтво, целібат, послух. Переписувач = книги. Франциск = жебрачий орден. Університет = хлопці, латина. Бенедиктинська праця = старанний перепис."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: kim był duchowny, czym zakon i co robili kopiści. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях: ким був духівник, що таке орден і що робили переписувачі. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: msza i dwór; trzy śluby i klasztor; skryptorium, benedyktyńska praca."
        ],
        ua: [
          "Підказка: служба і двір; три обітниці і монастир; скрипторій, бенедиктинська праця."
        ]
      },
      task: {
        id: "h25-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje duchownych, zakon i kopistów?",
          ua: "Яке речення охоплює духівників, орден і переписувачів?"
        },
        options: [
          { id: "a", label: { pl: "Duchowni: msza, łacina, papież; zakon: śluby i klasztor; kopiści żmudnie przepisywali księgi", ua: "Духівники: служба, латина, папа; орден: обітниці і монастир; переписувачі копітко писали книги" } },
          { id: "b", label: { pl: "Wszyscy mnisi byli wójtami i kowali miecze w Malborku", ua: "Усі ченці були війтами і кували мечі в Мальборку" } },
          { id: "c", label: { pl: "Kopista to giermek od 14. roku życia", ua: "Переписувач — це зброєносець від 14 років" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: rola duchowieństwa, zakonnicy, zakony.",
          ua: "Цілі вчительки: роль духовенства, ченці, ордени."
        },
        explanation: {
          pl: "Wójt = lekcja 24. Giermek = lekcja 23.",
          ua: "Війт = урок 24. Зброєносець = урок 23."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Kronikarze", ua: "Літописці" },
      task: {
        id: "h25-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zgodne z KN ponadpodstawowym?",
          ua: "Яке речення згідне з KN понад базовим?"
        },
        options: [
          { id: "a", label: { pl: "Gall Anonim i Wincenty Kadłubek to polscy kronikarze; refektarz to jadalnia klasztoru, nie izba tortur", ua: "Галл Анонім і Вінцентій Кадлубек — польські літописці; рефекторій — їдальня монастиря, не катівня" } },
          { id: "b", label: { pl: "Gall Anonim pasował Zawiszę w Clermont w 1095", ua: "Галл Анонім посвятив Завішу в Клермоні 1095 року" } },
          { id: "c", label: { pl: "Kadłubek napisał Koran", ua: "Кадлубек написав Коран" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: najstarsi polscy kronikarze. Części klasztoru: jadalnia, ogród, sypialnia, sala obrad — bez gore.",
          ua: "KN: найдавніші польські літописці. Частини монастиря: їдальня, сад, спальня, зала нарад — без gore."
        },
        explanation: {
          pl: "Ponadpodstawowe: kronikarze i nazwy pomieszczeń. Własny klasztor w Polsce — opowiedz w klasie.",
          ua: "Понад базове: літописці і назви приміщень. Власний монастир у Польщі — розкажи в класі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h25-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Duchowni, zakony, kopiści — co jest prawdą?",
          ua: "Духівники, ордени, переписувачі — що правда?"
        },
        options: [
          { id: "a", label: { pl: "duchowni: msza, łacina, papież; śluby: ubóstwo, celibat, posłuszeństwo; cztery zakony; kopiści w skryptorium = benedyktyńska praca", ua: "духівники: служба, латина, папа; обітниці: вбозтво, целібат, послух; чотири ордени; переписувачі в скрипторії = бенедиктинська праця" } },
          { id: "b", label: { pl: "zakon to cech kowali; kopiści strzegli fosy", ua: "орден — цех ковалів; переписувачі стерегли рів" } },
          { id: "c", label: { pl: "benedyktyni powstali na krucjacie Urbana II", ua: "бенедиктинці постали в поході Урбана II" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe + cele: stan, zakonnicy, nazwy zakonów, kopiści.",
          ua: "KN базове + цілі: стан, ченці, назви орденів, переписувачі."
        },
        explanation: {
          pl: "Benedyktyni = VI w., nie 1095. Cech = lekcja 24.",
          ua: "Бенедиктинці = VI ст., не 1095. Цех = урок 24."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Chrześcijaństwo mocno kształtowało życie: modlitwa, post, zbawienie. Duchowni umieli czytać — msza i dwór, pod papieżem.",
          ["modlitwa", "Duchowni"],
          "Християнство сильно формувало життя: молитва, піст, спасіння. Духівники вміли читати — служба і двір, під папою.",
          ["молитва", "Духівники"]
        ),
        mark(
          "Zakon składa śluby ubóstwa, celibatu i posłuszeństwa. Siedziba to klasztor, na czele opat.",
          ["śluby", "klasztor"],
          "Орден складає обітниці вбозтва, целібату і послуху. Осідок — монастир, на чолі абат.",
          ["обітниці", "монастир"]
        ),
        mark(
          "Zakonnicy: modlitwa i praca — księgi, pole, chorzy, szkoły. Kopiowanie to benedyktyńska praca.",
          ["praca", "benedyktyńska"],
          "Ченці: молитва і праця — книги, поле, хворі, школи. Перепис — бенедиктинська праця.",
          ["праця", "бенедиктинська"]
        ),
        mark(
          "Cztery zakony: benedyktyni, cystersi, franciszkanie, dominikanie. Klasztor był ośrodkiem wiary i nauki.",
          ["benedyktyni", "franciszkanie"],
          "Чотири ордени: бенедиктинці, цистерціанці, францисканці, домініканці. Монастир був осередком віри і науки.",
          ["бенедиктинці", "францисканці"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: sztuka średniowiecza — romański i gotycki kościół, witraż, inicjał jako sztuka.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: мистецтво середньовіччя — романська і готична церква, вітраж, ініціал як мистецтво.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "9BYXyPfAqbE",
        title: {
          pl: "Krótkie Lekcje: Kościół w średniowieczu",
          ua: "Короткі уроки: Церква в середньовіччі"
        }
      }
    }
  ]
};
