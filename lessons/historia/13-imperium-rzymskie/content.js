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
      heading: { pl: "Imperium Rzymskie", ua: "Римська імперія" },
      formula: "146 p.n.e. · 395 n.e. · 476 n.e.",
      text: {
        pl: [
          "Z lekcji 12 wiesz: królestwo, republika, cesarstwo. Dziś Rzym wychodzi z Italii i otacza Morze Śródziemne.",
          "Trzy pytania: jakie ziemie weszły do imperium, co dało Rzymianom sukcesy w podbojach, dlaczego po świetności cesarstwo zachodnie upadło. Na osi nowe daty: 146 p.n.e., a po bramce naszej ery — 395 i 476."
        ],
        ua: [
          "З уроку 12 знаєш: царство, республіка, імперія. Сьогодні Рим виходить з Італії і оточує Середземне море.",
          "Три питання: які землі ввійшли до імперії, що дало римлянам успіхи в підбоях, чому після розквіту західна імперія впала. На осі нові дати: 146 до н.е., а після брами нашої ери — 395 і 476."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać terytoria, które weszły w skład Imperium Rzymskiego", ua: "вказати території, які ввійшли до складу Римської імперії" },
        { pl: "powiedzieć, co decydowało o rzymskich sukcesach w podbojach (legion, limes)", ua: "сказати, що вирішувало римські успіхи в підбоях (легіон, лімес)" },
        { pl: "wyjaśnić, czym są prowincja, pax Romana i romanizacja", ua: "пояснити, що таке провінція, pax Romana і романізація" },
        { pl: "podać 146 p.n.e., 395 n.e. i 476 n.e. oraz powiedzieć, dlaczego cesarstwo zachodnie upadło", ua: "подати 146 до н.е., 395 н.е. і 476 н.е. та сказати, чому західна імперія впала" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Droga do potęgi", ua: "Шлях до могутності" },
      formula: "III w. p.n.e. → I w. n.e.",
      visual: gh("099", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa podbojów: Morze Śródziemne, Kartagina, ziemie rzymskie, Ren i Dunaj",
          ua: "Мапа підбоїв: Середземне море, Карфаген, римські землі, Рейн і Дунай"
        },
        title: { pl: "Od Italii do Mare Nostrum", ua: "Від Італії до Mare Nostrum" },
        prompt: {
          pl: "Szkolna atlasowa mapa dla klasy 5, 16:9, jasne tło, styl Nowej Ery. Morze Śródziemne na środku, lądy ciepłe. Ziemie rzymskie spokojnym czerwonym cieniem wokół morza (Italia, Sycylia, Afryka północna, Hiszpania, Galia, Brytania, Grecja, Azja Mniejsza, Syria, Egipt). Podpisy PL: Rzym, Italia, Sycylia, Kartagina, Grecja, Azja Mniejsza, Syria, Egipt, Hiszpania, Galia, Brytania, Ren, Dunaj, Morze Śródziemne. Kropka Kartaginy w Tunezji. Rzeki Ren i Dunaj jako linia granicy na północy. BEZ bitwy morskiej, BEZ żołnierzy, BEZ okrętów taranujących. Róża wiatrów.",
          ua: "Шкільна атласна мапа: Середземне море, римські землі червоним, підписи земель, Карфаген, Рейн і Дунай. Без битв і без кораблів."
        }
      }),
      text: {
        pl: [
          ["W ", em("III wieku p.n.e."), " Rzymianie podbili ", em("Italię"), " i greckie kolonie na ", em("Sycylii"), ". Potem trzy wojny z ", em("Kartaginą"), " (miasto-państwo w północnej Afryce)."],
          ["Do I wieku n.e. doszły m.in. ", em("Grecja"), ", ", em("Azja Mniejsza"), ", ", em("Syria"), ", ", em("Egipt"), ", ", em("Hiszpania"), ", ", em("Galia"), ", ", em("Brytania"), ". Granica na północy: rzeki ", em("Ren"), " i ", em("Dunaj"), "."]
        ],
        ua: [
          ["У ", em("III столітті до н.е."), " римляни підкорили ", em("Італію"), " і грецькі колонії на ", em("Сицилії"), ". Потім три війни з ", em("Карфагеном"), " (місто-держава в північній Африці)."],
          ["До I століття н.е. додались м.ін. ", em("Греція"), ", ", em("Мала Азія"), ", ", em("Сирія"), ", ", em("Єгипет"), ", ", em("Іспанія"), ", ", em("Галлія"), ", ", em("Британія"), ". Кордон на півночі: річки ", em("Рейн"), " і ", em("Дунай"), "."]
        ]
      },
      task: {
        id: "h13-map",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które ziemie weszły w skład imperium (oprócz Italii)?",
          ua: "Які землі ввійшли до складу імперії (крім Італії)?"
        },
        options: [
          { id: "a", label: { pl: "Grecja, Azja Mniejsza, Syria, Egipt, Hiszpania, Galia, Brytania", ua: "Греція, Мала Азія, Сирія, Єгипет, Іспанія, Галлія, Британія" } },
          { id: "b", label: { pl: "tylko Chiny i Indie", ua: "лише Китай і Індія" } },
          { id: "c", label: { pl: "tylko Skandynawia", ua: "лише Скандинавія" } }
        ],
        answer: "a",
        hint: {
          pl: "To lista z mapy wokół Morza Śródziemnego, nie Daleki Wschód.",
          ua: "Це список з мапи довкола Середземного моря, не Далекий Схід."
        },
        explanation: {
          pl: "Imperium otaczało Mare Nostrum. Chiny i Indie to inne lekcje.",
          ua: "Імперія оточувала Mare Nostrum. Китай і Індія — інші уроки."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Kartagina — 146 p.n.e.", ua: "Карфаген — 146 до н.е." },
      formula: "146 p.n.e.",
      timelineYear: 146,
      text: {
        pl: [
          ["W III i II wieku p.n.e. wybuchły ", em("trzy wojny"), " z Kartaginą. W ", em("146 p.n.e."), " Rzym ostatecznie ją pokonał."],
          ["Ziemie Kartaginy stały się rzymską ", em("prowincją Afryka"), "."]
        ],
        ua: [
          ["У III і II століттях до н.е. спалахнули ", em("три війни"), " з Карфагеном. У ", em("146 до н.е."), " Рим остаточно його переміг."],
          ["Землі Карфагена стали римською ", em("провінцією Африка"), "."]
        ]
      },
      task: {
        id: "h13-146",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. Rzym ostatecznie pokonał Kartaginę? Wpisz tylko liczbę.",
          ua: "У якому році до н.е. Рим остаточно переміг Карфаген? Введи лише число."
        },
        answer: 146,
        hint: {
          pl: "Sto czterdzieści i sześć. II wiek p.n.e.",
          ua: "Сто сорок і шість. II століття до н.е."
        },
        explanation: {
          pl: "146 p.n.e. — koniec Kartaginy, początek prowincji Afryka. Na osi to nowa data p.n.e.",
          ua: "146 до н.е. — кінець Карфагена, початок провінції Африка. На осі це нова дата до н.е."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Limes", ua: "Лімес" },
      formula: "Ren · Dunaj",
      visual: gh("100", {
        kind: "image-placeholder",
        alt: {
          pl: "Rekonstrukcja bramy rzymskiej warowni na limes (Saalburg)",
          ua: "Реконструкція брами римської твердині на лімесі (Саальбург)"
        },
        title: { pl: "Umocnienia granicy", ua: "Укріплення кордону" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień, spokojne światło, styl Nowej Ery. Duża fotografia / rysunek kamiennej bramy rzymskiego fortu (typ Porta Praetoria, rekonstrukcja Saalburg): dwa kamienne pylony, łuk wjazdu, dachówki, bez żołnierzy w ataku. Podpis PL na dole: „limes — umocnienia na linii Renu i Dunaju (rekonstrukcja warowni)”. BEZ bitwy, BEZ krwi, BEZ muru z palisadą pełną oszczepów w locie. Architektura, nie wojna.",
          ua: "Кам’яна брама римського форту (реконструкція), денне світло. Підпис: лімес — укріплення на лінії Рейну і Дунаю. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Limes"), " to potężny system umocnień na linii ", em("Renu"), " i ", em("Dunaju"), ". Chronił ", em("północną"), " granicę cesarstwa."],
          ["Za murem stały warownie i drogi. To nie magiczna tarcza — to budowle i wojsko na granicy."]
        ],
        ua: [
          ["", em("Лімес"), " — потужна система укріплень на лінії ", em("Рейну"), " і ", em("Дунаю"), ". Охороняв західні кордони держави."],
          ["За муром стояли твердині і дороги. Це не магічний щит — це будівлі і військо на кордоні."]
        ]
      },
      task: {
        id: "h13-limes",
        type: "true-false",
        level: "A",
        question: {
          pl: "Limes to system umocnień na linii Renu i Dunaju — prawda czy fałsz?",
          ua: "Лімес — система укріплень на лінії Рейну і Дунаю — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Dwie rzeki z mapy podbojów.",
          ua: "Дві річки з мапи підбоїв."
        },
        explanation: {
          pl: "Prawda. Limes = granica umocniona, nie nazwa prowincji w Afryce.",
          ua: "Правда. Лімес = укріплений кордон, не назва провінції в Африці."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzymski legionista", ua: "Римський легіонер" },
      formula: "legion ≈ 4000",
      visual: gh("101", {
        kind: "image-placeholder",
        alt: {
          pl: "Stojący legionista z podpisami ekwipunku oraz drewniana katapulta",
          ua: "Легіонер, що стоїть, з підписами спорядження та дерев’яна катапульта"
        },
        title: { pl: "Szkolenie, ekwipunek, katapulta", ua: "Вишкіл, спорядження, катапульта" },
        prompt: {
          pl: "Szkolny schemat 16:9, jasne tło, styl Nowej Ery. Po prawej: jeden rzymski żołnierz STOI spokojnie (nie biegnie, nie wali mieczem). Podpisy PL ze strzałkami: hełm, pancerz, oszczep, miecz, tarcza, sandały. Tarcza prostokątna czerwona, bez wroga. Po lewej: drewniana katapulta na kółkach, podpis „katapulta”. Na górze trzy krótkie punkty: „świetnie wyszkolona armia”; „legion ≈ 4000 żołnierzy”; „ciężkozbrojna piechota”. BEZ szarży, BEZ bitwy, BEZ dziesiątkowania, BEZ krwi.",
          ua: "Стоїть один легіонер з підписами: шолом, панцир, спис, меч, щит, сандалі. Поруч дерев’яна катапульта. Без бою і без крові."
        }
      }),
      text: {
        pl: [
          ["", em("Legion"), " — oddział około ", em("4000"), " ciężkozbrojnych, doskonale wyszkolonych piechurów. Wielu wywodziło się z ", em("plebejuszy"), "."],
          ["„Tajna broń” Rzymu to nie czary: ", em("szkolenie"), ", dyscyplina i ekwipunek (hełm, pancerz, oszczep, miecz, tarcza) oraz machiny jak ", em("katapulta"), "."]
        ],
        ua: [
          ["", em("Легіон"), " — загін близько ", em("4000"), " важкоозброєних, добре навчених піхотинців. Багато походили з ", em("плебеїв"), "."],
          ["«Таємна зброя» Риму — не чари: ", em("вишкіл"), ", дисципліна і спорядження (шолом, панцир, спис, меч, щит) та машини як ", em("катапульта"), "."]
        ]
      },
      task: {
        id: "h13-legion",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co przede wszystkim dawało Rzymianom sukcesy w podbojach?",
          ua: "Що передусім давало римлянам успіхи в підбоях?"
        },
        options: [
          { id: "a", label: { pl: "legiony: wyszkolona ciężka piechota i dyscyplina", ua: "легіони: навчена важка піхота і дисципліна" } },
          { id: "b", label: { pl: "brak jakiejkolwiek armii", ua: "відсутність будь-якого війська" } },
          { id: "c", label: { pl: "tylko flota Kartaginy po stronie Rzymu", ua: "лише флот Карфагена на боці Риму" } }
        ],
        answer: "a",
        hint: {
          pl: "Hasło z filmu: legiony, nie „zero wojska”.",
          ua: "Гасло з фільму: легіони, не «нуль війська»."
        },
        explanation: {
          pl: "To NACOBEZU o sukcesach. Kartagina była rywalem, nie sojusznikiem.",
          ua: "Це NACOBEZU про успіхи. Карфаген був суперником, не союзником."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Prowincja i skutki podbojów", ua: "Провінція і наслідки підбоїв" },
      formula: "prowincja · podatki",
      text: {
        pl: [
          ["", em("Prowincja"), " — terytorium podbite przez Rzym. Rządzili nim urzędnicy, stały tam legiony, mieszkańcy płacili ", em("podatki"), "."],
          ["Napływały zboże, bogactwa i niewolnicy; rósł handel. Powiedzenie: ", em("wszystkie drogi prowadzą do Rzymu"), ". Skutek uboczny: ubożeli chłopi, więc trudniej było nabierać żołnierzy."]
        ],
        ua: [
          ["", em("Провінція"), " — територія, підкорена Римом. Нею керували урядовці, там стояли легіони, мешканці платили ", em("податки"), "."],
          ["Напливали збіжжя, багатства і невільники; зростала торгівля. Приказка: ", em("усі дороги ведуть до Риму"), ". Побічний наслідок: біднішали селяни, тож важче було набирати вояків."]
        ]
      },
      task: {
        id: "h13-prowincja",
        type: "true-false",
        level: "A",
        question: {
          pl: "Prowincja to ziemia podbita, której ludność płaci podatki Rzymowi — prawda czy fałsz?",
          ua: "Провінція — підкорена земля, населення якої платить податки Риму — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z limes: limes to umocnienia, prowincja to terytorium.",
          ua: "Не плутай з лімесом: лімес — укріплення, провінція — територія."
        },
        explanation: {
          pl: "Prawda. Imperium = wielkie państwo, które podporządkowuje inne.",
          ua: "Правда. Імперія = велика держава, що підпорядковує інші."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Świetność, pax Romana, romanizacja", ua: "Розквіт, pax Romana, романізація" },
      formula: "pax Romana",
      visual: gh("102", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Cesarstwa Rzymskiego z podziałem na prowincje",
          ua: "Мапа Римської імперії з поділом на провінції"
        },
        title: { pl: "Liczne prowincje wokół morza", ua: "Численні провінції довкола моря" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy, styl Nowej Ery. Cesarstwo wokół Morza Śródziemnego (podpis Mare internum), prowincje spokojnymi kolorami (żółcie, zielenie, pomarańcze) — NIE jedna czerwona plama bitwy. Podpisy: Britannia, Gallia, Hispania, Italia, Rzym, Graecia, Asia, Syria, Aegyptus. Mała etykieta PL: „pax Romana — spokój wewnątrz granic”; druga: „romanizacja”. BEZ legionów w marszu, BEZ scen walki. Róża wiatrów.",
          ua: "Мапа імперії з провінціями різними кольорами, Середземне море, підписи земель. Етикетки: pax Romana, романізація. Без війська в бою."
        }
      }),
      text: {
        pl: [
          ["Okres świetności: liczne ", em("prowincje"), ", urzędnicy, legiony, podatki. Od I wieku p.n.e. mówi się o ", em("pax Romana"), " — względnym spokoju wewnątrz granic, który sprzyjał gospodarce, handlowi i kulturze."],
          ["", em("Romanizacja"), ": mieszkańcy prowincji przyjmowali łacinę, rzymskie budowle, obyczaje, strój i rozrywki."]
        ],
        ua: [
          ["Період розквіту: численні ", em("провінції"), ", урядовці, легіони, податки. Від I століття до н.е. кажуть про ", em("pax Romana"), " — відносний спокій усередині кордонів, що сприяв господарству, торгівлі і культурі."],
          ["", em("Романізація"), ": мешканці провінцій переймали латину, римські будівлі, звичаї, одяг і розваги."]
        ]
      },
      task: {
        id: "h13-pax",
        type: "true-false",
        level: "B",
        question: {
          pl: "Pax Romana znaczy, że Rzym nie miał w ogóle armii — prawda czy fałsz?",
          ua: "Pax Romana означає, що Рим зовсім не мав армії — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Spokój wewnątrz granic. Legiony nadal stały w prowincjach.",
          ua: "Спокій усередині кордонів. Легіони далі стояли в провінціях."
        },
        explanation: {
          pl: "Fałsz. To pokój względny w środku imperium, nie rozpuszczenie wojska.",
          ua: "Неправда. Це відносний мир усередині імперії, не розпуск війська."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Konstantyn Wielki", ua: "Костянтин Великий" },
      formula: "IV w. n.e. · Konstantynopol",
      visual: gh("103", {
        kind: "image-placeholder",
        alt: {
          pl: "Muzealne popiersie Konstantyna Wielkiego",
          ua: "Музейне погруддя Костянтина Великого"
        },
        title: { pl: "Nowa stolica cesarstwa", ua: "Нова столиця імперії" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło, BEZ bitwy, BEZ korony zdzieranej z głowy. Białe / kamienne popiersie cesarza Konstantyna (dojrzały mężczyzna, spokojne spojrzenie, typ muzealny). Po lewej cztery punkty PL: „kto — Konstantyn Wielki, cesarz”; „skąd — cesarstwo rzymskie; miasto na miejscu greckiej kolonii Bizancjum”; „lata — IV wiek n.e.”; „wsławił się — nowa stolica Konstantynopol”. Podpis: „Konstantyn Wielki — popiersie”. Styl Nowej Ery.",
          ua: "Погруддя Костянтина Великого. Пункти: імператор; Римська імперія, Візантій; IV ст. н.е.; нова столиця Константинополь."
        }
      }),
      text: {
        pl: [
          ["Od III wieku n.e. cesarstwo słabło: ataki ", em("Germanów"), ", bunty, walki dowódców o władzę. ", em("Rzym"), " tracił na znaczeniu — rósł ", em("Konstantynopol"), "."],
          ["", em("Konstantyn Wielki"), ": cesarz, IV wiek n.e. Miasto na miejscu greckiej kolonii ", em("Bizancjum"), " nazwał od swojego imienia. W IV w. n.e. ", em("Konstantynopol"), " został stolicą cesarstwa rzymskiego."]
        ],
        ua: [
          ["Від III століття н.е. імперія слабшала: напади ", em("германців"), ", бунти, боротьба командирів за владу. ", em("Рим"), " втрачав значення — зростав ", em("Константинополь"), "."],
          ["", em("Костянтин Великий"), ": імператор, IV століття н.е. Місто на місці грецької колонії ", em("Візантій"), " назвав від свого імені. У IV ст. н.е. ", em("Константинополь"), " став столицею римської імперії."]
        ]
      },
      task: {
        id: "h13-stolica",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywało się miasto, które w IV w. n.e. zostało stolicą cesarstwa? Wpisz nazwę.",
          ua: "Як називалося місто, яке в IV ст. н.е. стало столицею імперії? Введи назву."
        },
        answer: [
          "konstantynopol",
          "константинополь",
          "constantinople",
          "konstantynopola"
        ],
        hint: {
          pl: "Od imienia Konstantyna. Leży nad Bosforem.",
          ua: "Від імені Костянтина. Лежить над Босфором."
        },
        explanation: {
          pl: "Konstantynopol. Bizancjum to dawna nazwa miejsca — w zeszycie zapisujemy Konstantynopol.",
          ua: "Константинополь. Візантій — давня назва місця; у зошит пишемо Константинополь."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Podział cesarstwa — 395 n.e.", ua: "Поділ імперії — 395 н.е." },
      formula: "395 n.e.",
      timelineYear: 395,
      visual: gh("104", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa podziału: cesarstwo zachodnie i wschodnie, stolice Rzym i Konstantynopol",
          ua: "Мапа поділу: західна і східна імперія, столиці Рим і Константинополь"
        },
        title: { pl: "Dwie stolice, dwa cesarstwa", ua: "Дві столиці, дві імперії" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Europa, północna Afryka, Bliski Wschód. Zachód spokojnym czerwonym cieniem (Italia, Galia, Hiszpania, Brytania, część Afryki), wschód fioletowym (Bałkany, Grecja, Azja Mniejsza, Egipt, Syria). Legenda PL: „cesarstwo zachodniorzymskie” / „cesarstwo wschodniorzymskie”. Kropki: Rzym, Konstantynopol. Tytuł: „w 395 n.e. podzielono cesarstwo”. BEZ żołnierzy, BEZ bitew. Róża wiatrów.",
          ua: "Мапа 395: захід червоний, схід фіолетовий, Рим і Константинополь. Без війська."
        }
      }),
      text: {
        pl: [
          ["W ", em("395 roku n.e."), " imperium rzymskie zostało ", em("podzielone"), "."],
          ["", em("Cesarstwo zachodniorzymskie"), " — stolica ", em("Rzym"), ". ", em("Cesarstwo wschodniorzymskie"), " — stolica ", em("Konstantynopol"), "."]
        ],
        ua: [
          ["У ", em("395 році н.е."), " римську імперію ", em("поділили"), "."],
          ["", em("Західна Римська імперія"), " — столиця ", em("Рим"), ". ", em("Східна Римська імперія"), " — столиця ", em("Константинополь"), "."]
        ]
      },
      task: {
        id: "h13-395",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku n.e. podzielono imperium rzymskie? Wpisz tylko liczbę.",
          ua: "У якому році н.е. поділили римську імперію? Введи лише число."
        },
        answer: 395,
        hint: {
          pl: "Trzy, dziewięć, pięć. Koniec IV wieku n.e.",
          ua: "Три, дев’ять, п’ять. Кінець IV століття н.е."
        },
        explanation: {
          pl: "395 n.e. Na osi ta data stoi już po bramce „nasza era”.",
          ua: "395 н.е. На осі ця дата стоїть уже після брами «наша ера»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wielka wędrówka ludów", ua: "Велике переселення народів" },
      formula: "IV w. n.e.",
      visual: gh("105", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa wędrówek plemion po cesarstwie: strzałki, bez scen walki",
          ua: "Мапа переселень племен імперією: стрілки, без сцен бою"
        },
        title: { pl: "Hunowie, Germanie, Wandalowie", ua: "Гуни, германці, вандали" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Cesarstwo podzielone: zachód jasnoszary, wschód jasny fiolet. Kolorowe STRZAŁKI szlaków (nie żołnierze w walce): Hunowie ze wschodu, Wizygoci, Wandalowie ku Afryce, Frankowie, Anglowie i Sasowie ku Brytanii. Legenda PL: Hunowie, Wandalowie, Wizygoci, Ostrogoci, Frankowie, Anglowie i Sasowie. Tytuł: „Wielka wędrówka ludów”. BEZ palenia miast, BEZ rzezi, BEZ obrazu splądrowania Rzymu. Tylko mapa i strzałki.",
          ua: "Мапа зі стрілками племен (гуни, вандали, вестготи…). Без штурму міст і без різанини."
        }
      }),
      text: {
        pl: [
          ["W ", em("IV wieku n.e."), " (nie p.n.e.!) ze wschodu przyszli ", em("Hunowie"), ". Cisnęli plemiona ", em("germańskie"), " — te przekroczyły granice. To ", em("wielka wędrówka ludów"), "."],
          ["Wśród plemion byli też ", em("Wandalowie"), ". Barbarzyńcy przeszli przez Italię; od ich imienia pochodzi słowo ", em("wandalizm"), " — bezmyślne niszczenie cudzej własności."]
        ],
        ua: [
          ["У ", em("IV столітті н.е."), " (не до н.е.!) зі сходу прийшли ", em("гуни"), ". Тиснули ", em("германські"), " племена — ті перейшли кордони. Це ", em("велике переселення народів"), "."],
          ["Серед племен були й ", em("вандали"), ". Варвари пройшли Італією; від їхнього імені походить слово ", em("вандалізм"), " — безглузде нищення чужого майна."]
        ]
      },
      task: {
        id: "h13-wedrowka",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kiedy zaczęła się wielka wędrówka ludów związana z Hunami?",
          ua: "Коли почалося велике переселення народів, пов’язане з гунами?"
        },
        options: [
          { id: "a", label: { pl: "w IV wieku n.e.", ua: "у IV столітті н.е." } },
          { id: "b", label: { pl: "w IV wieku p.n.e.", ua: "у IV столітті до н.е." } },
          { id: "c", label: { pl: "w 146 p.n.e.", ua: "у 146 до н.е." } }
        ],
        answer: "a",
        hint: {
          pl: "Po bramce naszej ery. Nie myl z wojnami punickimi.",
          ua: "Після брами нашої ери. Не плутай із пунічними війнами."
        },
        explanation: {
          pl: "IV w. n.e. Częsty błąd: napisać p.n.e., bo tak było przy Kartaginie.",
          ua: "IV ст. н.е. Часта помилка: написати до н.е., бо так було при Карфагені."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Upadek cesarstwa zachodniego", ua: "Упад західної імперії" },
      formula: "476 n.e.",
      timelineYear: 476,
      text: {
        pl: [
          ["W ", em("476 roku n.e."), " barbarzyński wódz pozbawił korony ostatniego cesarza Zachodu — ", em("Romulusa Augustulusa"), ". To ", em("koniec cesarstwa zachodniorzymskiego"), "."],
          ["Tę datę uznaje się też za symboliczny ", em("koniec starożytności"), ". Cesarstwo wschodnie trwa dalej — o Bizancjum będzie następny dział."]
        ],
        ua: [
          ["У ", em("476 році н.е."), " варварський вождь позбавив корони останнього імператора Заходу — ", em("Ромула Августула"), ". Це ", em("кінець Західної Римської імперії"), "."],
          ["Цю дату визнають також за символічний ", em("кінець античності"), ". Східна імперія триває далі — про Візантію буде наступний розділ."]
        ]
      },
      task: {
        id: "h13-476",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku n.e. upadło cesarstwo zachodniorzymskie? Wpisz tylko liczbę.",
          ua: "У якому році н.е. впала Західна Римська імперія? Введи лише число."
        },
        answer: 476,
        hint: {
          pl: "Cztery, siedem, sześć. Po podziale z 395.",
          ua: "Чотири, сім, шість. Після поділу 395."
        },
        explanation: {
          pl: "476 n.e. — upadek Zachodu i szkolny koniec starożytności. Wschód nie znika w tym roku.",
          ua: "476 н.е. — упад Заходу і шкільний кінець античності. Схід цього року не зникає."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Łacina i języki romańskie", ua: "Латина і романські мови" },
      formula: "łacina → języki romańskie",
      text: {
        pl: [
          ["Za czasów imperium ", em("łacina"), " była językiem międzynarodowym. Dziś to język ", em("martwy"), ", ale żyje w prawie i medycynie."],
          ["Z łaciny wywodzą się ", em("języki romańskie"), ": hiszpański, portugalski, francuski, włoski, rumuński."]
        ],
        ua: [
          ["За часів імперії ", em("латина"), " була міжнародною мовою. Сьогодні це мова ", em("мертва"), ", але живе в праві і медицині."],
          ["З латини походять ", em("романські мови"), ": іспанська, португальська, французька, італійська, румунська."]
        ]
      },
      task: {
        id: "h13-roma",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które języki są romańskie (z łaciny)?",
          ua: "Які мови є романськими (з латини)?"
        },
        options: [
          { id: "a", label: { pl: "hiszpański, portugalski, francuski, włoski, rumuński", ua: "іспанська, португальська, французька, італійська, румунська" } },
          { id: "b", label: { pl: "tylko chiński i japoński", ua: "лише китайська і японська" } },
          { id: "c", label: { pl: "tylko język Hunów", ua: "лише мова гунів" } }
        ],
        answer: "a",
        hint: {
          pl: "Pięć języków Europy z filmu, nie Azja Wschodnia.",
          ua: "П’ять мов Європи з фільму, не Східна Азія."
        },
        explanation: {
          pl: "To ślad romanizacji. Polski nie jest na tej liście.",
          ua: "Це слід романізації. Польська не в цьому списку."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "imperium — wielkie państwo, które podporządkowuje sobie inne", ua: "імперія — велика держава, що підпорядковує собі інші" },
        { pl: "prowincja — ziemia podbita; podatki, urzędnicy, legiony", ua: "провінція — підкорена земля; податки, урядовці, легіони" },
        { pl: "limes — umocnienia na linii Renu i Dunaju; chronił północną granicę cesarstwa", ua: "лімес — укріплення на лінії Рейну і Дунаю; захищав північний кордон імперії" },
        { pl: "legion — ok. 4000 ciężkozbrojnej, wyszkolonej piechoty", ua: "легіон — близько 4000 важкоозброєної, навченої піхоти" },
        { pl: "pax Romana — względny spokój wewnątrz granic (od I w. p.n.e.)", ua: "pax Romana — відносний спокій усередині кордонів (від I ст. до н.е.)" },
        { pl: "romanizacja — łacina i rzymskie wzorce u ludności prowincji", ua: "романізація — латина і римські зразки в населення провінцій" },
        { pl: "języki romańskie — m.in. hiszpański, francuski, włoski, rumuński, portugalski", ua: "романські мови — м.ін. іспанська, французька, італійська, румунська, португальська" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„W 146 n.e. Rzymianie pokonali Kartaginę. W IV wieku p.n.e. Hunowie weszli do Italii. W 395 p.n.e. upadło całe imperium, a Konstantynopol był stolicą Zachodu.”",
        ua: "«У 146 н.е. римляни перемогли Карфаген. У IV столітті до н.е. гуни ввійшли в Італію. У 395 до н.е. впала вся імперія, а Константинополь був столицею Заходу.»"
      },
      text: {
        pl: [
          "146 to p.n.e., nie n.e. Hunowie i wędrówka — IV w. n.e., nie p.n.e. 395 n.e. to podział, nie upadek całości; stolica Wschodu to Konstantynopol, Zachodu — Rzym. Upadek Zachodu: 476 n.e."
        ],
        ua: [
          "146 — до н.е., не н.е. Гуни і переселення — IV ст. н.е., не до н.е. 395 н.е. — поділ, не упад усієї імперії; столиця Сходу — Константинополь, Заходу — Рим. Упад Заходу: 476 н.е."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, dlaczego po czasach świetności cesarstwo zachodniorzymskie upadło. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, чому після часів розквіту Західна Римська імперія впала. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: Germanie, Hunowie, wielka wędrówka, podatki i walki o władzę, 476, Romulus Augustulus. Nie mieszaj z Kartaginą z II w. p.n.e."
        ],
        ua: [
          "Підказка: германці, гуни, велике переселення, податки і боротьба за владу, 476, Ромул Августул. Не змішуй із Карфагеном II ст. до н.е."
        ]
      },
      task: {
        id: "h13-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej wyjaśnia upadek Zachodu?",
          ua: "Яке речення найкраще пояснює упад Заходу?"
        },
        options: [
          { id: "a", label: { pl: "Cesarstwo osłabiły najazdy i wędrówki plemion, kryzys władzy i podatków; w 476 n.e. padł Zachód", ua: "Імперію ослабили напади і переселення племен, криза влади і податків; у 476 н.е. впав Захід" } },
          { id: "b", label: { pl: "Rzym upadł, bo w 146 p.n.e. przegrał z Kartaginą i nie miał legionów", ua: "Рим упав, бо в 146 до н.е. програв Карфагену і не мав легіонів" } },
          { id: "c", label: { pl: "W 395 p.n.e. Konstantyn zburzył Rzym i przeniósł stolicę do Kartaginy", ua: "У 395 до н.е. Костянтин зруйнував Рим і переніс столицю до Карфагена" } }
        ],
        answer: "a",
        hint: {
          pl: "NACOBEZU: dlaczego po świetności upadło. Data 476, nie 146.",
          ua: "NACOBEZU: чому після розквіту впало. Дата 476, не 146."
        },
        explanation: {
          pl: "Kartagina to droga do potęgi, nie przyczyna 476. 395 to podział n.e.",
          ua: "Карфаген — шлях до могутності, не причина 476. 395 — поділ н.е."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Dwie stolice, jeden rok", ua: "Дві столиці, один рік" },
      task: {
        id: "h13-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Po 395 n.e. kto ma jaką stolicę?",
          ua: "Після 395 н.е. хто має яку столицю?"
        },
        options: [
          { id: "a", label: { pl: "Zachód — Rzym; Wschód — Konstantynopol", ua: "Захід — Рим; Схід — Константинополь" } },
          { id: "b", label: { pl: "Zachód — Konstantynopol; Wschód — Kartagina", ua: "Захід — Константинополь; Схід — Карфаген" } },
          { id: "c", label: { pl: "Obie części — tylko Ateny", ua: "Обидві частини — лише Афіни" } }
        ],
        answer: "a",
        hint: {
          pl: "Zeszyt: dwie strzałki, dwa miasta. Nie odwracaj ich.",
          ua: "Зошит: дві стрілки, два міста. Не міняй їх місцями."
        },
        explanation: {
          pl: "To zapis z prezentacji. Kartagina dawno była prowincją Afryka.",
          ua: "Це запис із презентації. Карфаген давно був провінцією Африка."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h13-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz wydarzenia: 146 p.n.e. · 395 n.e. · 476 n.e.",
          ua: "Добери події: 146 до н.е. · 395 н.е. · 476 н.е."
        },
        options: [
          { id: "a", label: { pl: "146 — koniec Kartaginy; 395 — podział cesarstwa; 476 — upadek Zachodu (koniec starożytności)", ua: "146 — кінець Карфагена; 395 — поділ імперії; 476 — упад Заходу (кінець античності)" } },
          { id: "b", label: { pl: "146 — igrzyska; 395 — Maraton; 476 — Issos", ua: "146 — ігри; 395 — Марафон; 476 — Ісс" } },
          { id: "c", label: { pl: "146 — August; 395 — wilczyca; 476 — Cezar", ua: "146 — Август; 395 — вовчиця; 476 — Цезар" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy liczby z intro i z osi. Nie bierz dat Grecji ani lekcji 12.",
          ua: "Три числа з intro і з осі. Не бери дат Греції чи уроку 12."
        },
        explanation: {
          pl: "To zeszyt i Zapamiętaj. Wschód nie ginie w 476 — ginie Zachód.",
          ua: "Це зошит і Запам’ятай. Схід не гине в 476 — гине Захід."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Starożytni Rzymianie toczyli wiele wojen. Szczególnie groźnym rywalem republiki była Kartagina. Rzymianie stoczyli z nią trzy wojny i w 146 p.n.e. ostatecznie ją pokonali, zajmując jej ziemie (prowincja Afryka).",
          ["Kartagina", "trzy wojny", "146 p.n.e."],
          "Стародавні римляни вели багато воєн. Особливо небезпечним суперником республіки був Карфаген. Римляни сточили з ним три війни і 146 до н.е. остаточно перемогли, зайнявши його землі (провінція Африка).",
          ["Карфаген", "три війни", "146 до н.е."]
        ),
        mark(
          "W wyniku podbojów Rzymianie przyłączali prowincje. Do I wieku n.e. opanowali m.in. Galię, Hiszpanię, Grecję, Azję Mniejszą, Syrię, Egipt i Brytanię. Sukcesy dawały legiony — oddziały ciężkozbrojnej, wyszkolonej piechoty.",
          ["prowincje", "legiony"],
          "Унаслідок підбоїв римляни приєднували провінції. До I століття н.е. опанували м.ін. Галлію, Іспанію, Грецію, Малу Азію, Сирію, Єгипет і Британію. Успіхи давали легіони — загони важкоозброєної, навченої піхоти.",
          ["провінції", "легіони"]
        ),
        mark(
          "W okresie świetności imperium obejmowało dużą część Europy, Bliskiego Wschodu i północnej Afryki. Pax Romana sprzyjał gospodarce; romanizacja niosła łacinę i rzymskie wzorce.",
          ["świetności", "Pax Romana", "romanizacja"],
          "У період розквіту імперія охоплювала велику частину Європи, Близького Сходу і північної Африки. Pax Romana сприяв господарству; романізація несла латину і римські зразки.",
          ["розквіту", "Pax Romana", "романізація"]
        ),
        mark(
          "W 395 n.e. cesarstwo podzielono na zachodnie (stolica Rzym) i wschodnie (stolica Konstantynopol). W 476 n.e. w wyniku najazdów barbarzyńców upadło cesarstwo zachodniorzymskie — symboliczny koniec starożytności.",
          ["395 n.e.", "476 n.e.", "starożytności"],
          "У 395 н.е. імперію поділили на західну (столиця Рим) і східну (столиця Константинополь). У 476 н.е. внаслідок нападів варварів упала Західна Римська імперія — символічний кінець античності.",
          ["395 н.е.", "476 н.е.", "античності"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: życie w Wiecznym Mieście — ulice, domy i codzienność, nie mapa wojen.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: життя у Вічному Місті — вулиці, домівки і повсякдення, не мапа воєн.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "9VsKetPq-uQ",
        title: {
          pl: "Krótkie Lekcje: Imperium Rzymskie",
          ua: "Короткі уроки: Римська імперія"
        }
      }
    }
  ]
};
