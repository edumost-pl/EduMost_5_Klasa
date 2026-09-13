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
      heading: { pl: "Epoka rycerzy", ua: "Епоха лицарів" },
      formula: "kodeks · paź · giermek",
      text: {
        pl: [
          "Z lekcji 22 wiesz: rycerz brał lenno i służył seniorowi. Dziś ten sam stan od środka: obowiązek, droga chłopca, zbroja.",
          "Nie nowa data na osi — obyczaj i sprzęt."
        ],
        ua: [
          "З уроку 22 знаєш: лицар брав лен і служив сеньйору. Сьогодні той самий стан зсередини: обов’язок, шлях хлопця, зброя.",
          "Не нова дата на осі — звичай і спорядження."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "scharakteryzować ideał rycerza i kodeks honorowy", ua: "схарактеризувати ідеал лицаря і кодекс честі" },
        { pl: "opisać życie rycerza: ziemia, zamek, turnieje", ua: "описати життя лицаря: земля, замок, турніри" },
        { pl: "powiedzieć drogę: paź (7 lat) → giermek (14) → pasowanie", ua: "сказати шлях: паж (7 років) → зброєносець (14) → посвята" },
        { pl: "wskazać herb i główne elementy uzbrojenia", ua: "вказати герб і головні елементи озброєння" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Kim byli rycerze?", ua: "Ким були лицарі?" },
      formula: "ludzie miecza",
      visual: gh("192", {
        kind: "image-placeholder",
        alt: {
          pl: "Rycerz w zbroi stoi przy koniu; obok krótkie cechy kodeksu honorowego",
          ua: "Лицар у зброї стоїть біля коня; поряд короткі риси кодексу честі"
        },
        title: { pl: "Stan, obowiązek, kodeks", ua: "Стан, обов’язок, кодекс" },
        prompt: {
          pl: "Szkolny slajd 16:9. Rycerz STOI w zbroi przy koniu, dzień, BEZ bitwy i BEZ krwi. Lista PL: „ochrona państwa”; „wierność władcy”; „kodeks: odwaga, słowo, prawda, pobożność, pomoc słabszym”. Tytuł: „rycerski kodeks honorowy”. Styl Nowej Ery.",
          ua: "Лицар стоїть. Кодекс: відвага, слово, віра, допомога слабшим. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Rycerstwo"), " to jeden ze stanów (lekcja 22). Rycerz to wojownik — „człowiek miecza”. Główny obowiązek: ", em("walka w obronie ojczyzny i wiary"), ", wierność królowi lub księciu. Na rozkaz władcy miał stawić się do walki."],
          ["", em("Kodeks honorowy"), ": odwaga (hańbą była ucieczka), słowo, prawda, pobożność, pomoc słabszym, uprzejmość wobec kobiet. Nie przynosiło chwały zwycięstwo nad bezbronnym."]
        ],
        ua: [
          ["", em("Лицарство"), " — один зі станів (урок 22). Лицар — воїн, «людина меча». Головний обов’язок: ", em("боротьба в обороні вітчизни і віри"), ", вірність королю чи князю. За наказом володаря мав стати до бою."],
          ["", em("Кодекс честі"), ": відвага (ганьба — втеча), слово, правда, побожність, допомога слабшим, ввічливість до жінок. Перемога над беззбройним не давала слави."]
        ]
      },
      task: {
        id: "h23-obow",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co było głównym obowiązkiem rycerza?",
          ua: "Що було головним обов’язком лицаря?"
        },
        options: [
          { id: "a", label: { pl: "walka w obronie ojczyzny, władcy i wiary; kodeks honorowy", ua: "боротьба в обороні вітчизни, володаря і віри; кодекс честі" } },
          { id: "b", label: { pl: "tylko handel w mieście jak mieszczanin", ua: "лише торгівля в місті як міщанин" } },
          { id: "c", label: { pl: "oranie pola zamiast chłopów", ua: "оранка поля замість селян" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: ideał i obowiązek. Handel = mieszczaństwo. Pole = chłopi.",
          ua: "KN: ідеал і обов’язок. Торгівля = міщани. Поле = селяни."
        },
        explanation: {
          pl: "Notatki + KN. Stany z lekcji 22 nie mylić.",
          ua: "Нотатки + KN. Стани з уроку 22 не плутати."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Ziemia i zamek", ua: "Земля і замок" },
      formula: "siedziba · obrona",
      visual: gh("193", {
        kind: "image-placeholder",
        alt: {
          pl: "Kamienny zamek na wzgórzu i pole, które orzą chłopi",
          ua: "Кам’яний замок на пагорбі і поле, яке орють селяни"
        },
        title: { pl: "Za służbę — ziemia", ua: "За службу — земля" },
        prompt: {
          pl: "Szkolny slajd 16:9. Kamienny zamek na wzgórzu (typ Będzin), dzień, puste mury, BEZ oblężenia i BEZ kopii Malborka z filmu. Dwie etykiety: „mieszkalna” i „obronna”. Na dole pole, chłopi orzą. Napis: „ziemia od władcy”. Styl Nowej Ery.",
          ua: "Замок: жити і боронити. Селяни орють. Без штурму."
        }
      }),
      text: {
        pl: [
          ["Za wierną służbę rycerz dostawał od ", em("władcy"), " ", em("ziemię"), ". Tam stawiał siedzibę. Najbogatsi budowali ", em("zamki"), ": żeby mieszkać i żeby się bronić."],
          ["Grunty w dobrach rycerskich uprawiali ", em("chłopi"), "."]
        ],
        ua: [
          ["За вірну службу лицар діставав від ", em("володаря"), " ", em("землю"), ". Там ставив оселю. Найбагатші будували ", em("замки"), ": щоб жити і щоб боронитися."],
          ["Грунти в лицарських маєтках обробляли ", em("селяни"), "."]
        ]
      },
      task: {
        id: "h23-ziemia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Za wierną służbę rycerze otrzymywali od ______ ziemię, którą uprawiali ______.",
          ua: "За вірну службу лицарі отримували від ______ землю, яку обробляли ______."
        },
        options: [
          { id: "a", label: { pl: "od władcy; uprawiali chłopi", ua: "від володаря; обробляли селяни" } },
          { id: "b", label: { pl: "od giermka; uprawiali mieszczanie", ua: "від зброєносця; обробляли міщани" } },
          { id: "c", label: { pl: "od pazia; uprawiali papieże", ua: "від пажа; обробляли папи" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta pracy: władca daje ziemię, chłopi orzą. Giermek i paź = droga chłopca.",
          ua: "Картка: володар дає землю, селяни орють. Зброєносець і паж = шлях хлопця."
        },
        explanation: {
          pl: "KN: życie rycerza. Ćwiczenie z lekcji nauczycielki.",
          ua: "KN: життя лицаря. Вправа з уроку вчительки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Turnieje", ua: "Турніри" },
      formula: "kopie · koń",
      visual: gh("194", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwóch rycerzy na koniach z kopiami na turnieju, trybuny, bez krwi",
          ua: "Двоє лицарів на конях зі списами на турнірі, трибуни, без крові"
        },
        title: { pl: "Ćwiczenie sprawności, nie rzeź", ua: "Вправа спритності, не різанина" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dwaj jeźdźcy z długimi kopiami, konie w czapraku, drewniane trybuny, flagi, dzień. OBA siedzą w siodle. BEZ leżącego w krwi, BEZ kopii obrazu z filmu. Tytuł: „turniej rycerski”. Mała ikona rogu: „też polowania”. Styl Nowej Ery.",
          ua: "Турнір: два вершники, списи. Обидва в сідлі. Без крові."
        }
      }),
      text: {
        pl: [
          ["Czas wolny: ", em("turnieje"), " na dworach królów i książąt — pojedynek na ", em("kopie"), " (długie włócznie). Wygrywał, kto wytrącił tarczę albo wysadził rywala z siodła. Nagroda: np. zbroja i koń."],
          "Ćwiczono sprawność. Polowano też. To nie lekcja o polu bitwy z krucjat."
        ],
        ua: [
          ["Вільний час: ", em("турніри"), " на дворах королів і князів — поєдинок на ", em("коп’ях"), " (довгі списи). Вигравав, хто вибив щит або вибив суперника з сідла. Нагорода: напр. зброя і кінь."],
          "Тренували спритність. Також полювали. Це не урок про поле бою з походів."
        ]
      },
      task: {
        id: "h23-turniej",
        type: "true-false",
        level: "B",
        question: {
          pl: "Turnieje służyły m.in. do pokazania sprawności we władaniu bronią — prawda czy fałsz?",
          ua: "Турніри служили зокрема щоб показати спритність у володінні зброєю — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Tajemnice sprzed wieków: dlaczego rycerze brali udział w turniejach.",
          ua: "Таємниці з-перед віків: чому лицарі брали участь у турнірах."
        },
        explanation: {
          pl: "Prawda. KN: życie codzienne / kultura rycerska. Podręcznik s. 140.",
          ua: "Правда. KN: повсякденне життя / лицарська культура. Підручник с. 140."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Paź i giermek", ua: "Паж і зброєносець" },
      formula: "7 lat · 14 lat",
      visual: gh("195", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa pola: mały paź przy stole i giermek przy zbroi rycerza",
          ua: "Два поля: малий паж біля столу і зброєносець біля зброї лицаря"
        },
        title: { pl: "Najpierw służba, potem nauka u boku", ua: "Спочатку служба, потім наука поруч" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwa pola, dzień. LEWA „paź, od 7 lat”: chłopiec w tunice przy stole, „dobre wychowanie, posługi”. PRAWA „giermek, od 14 lat”: młodzieniec przy koniu i zbroi, „nauka u boku rycerza”. BEZ bitwy dzieci. Styl Nowej Ery.",
          ua: "Паж з 7 років, зброєносець з 14. Без бою дітей."
        }
      }),
      text: {
        pl: [
          ["Chłopiec z rodu rycerskiego od ", em("7 lat"), " był ", em("paziem"), ": zasady dobrego wychowania, posługi na dworze."],
          ["Od ", em("14 lat"), " — ", em("giermkiem"), ": nauka u boku rycerza, koń i ekwipunek, towarzyszył w wyprawie. Potem pasowanie."]
        ],
        ua: [
          ["Хлопець із лицарського роду від ", em("7 років"), " був ", em("пажем"), ": гарні звичаї, послуги на дворі."],
          ["Від ", em("14 років"), " — ", em("зброєносцем"), " (giermek): наука поруч із лицарем, кінь і спорядження, супровід. Потім посвята."]
        ]
      },
      task: {
        id: "h23-droga",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ułóż drogę chłopca (podręcznik s. 137): 7 lat → 14 lat → potem…",
          ua: "Склади шлях хлопця (підручник с. 137): 7 років → 14 років → потім…"
        },
        options: [
          { id: "a", label: { pl: "paź → giermek → pasowanie na rycerza", ua: "паж → зброєносець → посвята на лицаря" } },
          { id: "b", label: { pl: "giermek → paź → kalif", ua: "зброєносець → паж → халіф" } },
          { id: "c", label: { pl: "chłop → mieszczanin → senior z lekcji 22", ua: "селянин → міщанин → сеньйор з уроку 22" } }
        ],
        answer: "a",
        hint: {
          pl: "Najpierw młodszy (paź), potem starszy (giermek), na końcu ceremonia.",
          ua: "Спочатку молодший (паж), потім старший (зброєносець), наприкінці церемонія."
        },
        explanation: {
          pl: "KN: etapy szkolenia. Schemat z karty nauczycielki.",
          ua: "KN: етапи навчання. Схема з картки вчительки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pasowanie", ua: "Посвята" },
      formula: "pas · ostrogi",
      visual: gh("196", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojna ceremonia: władca zapina pas z mieczem, przy ostrogach klęczą pomocnicy",
          ua: "Спокійна церемонія: володар застібає пояс із мечем, біля шпор клечать помічники"
        },
        title: { pl: "Przysięga, nie cios w twarz", ua: "Присяга, не удар у обличчя" },
        prompt: {
          pl: "Szkolny slajd 16:9. Młodzieniec w kolczudze, władca zapina PAS Z MIECZEM, ktoś kładzie OSTROGI. Ikony z boku: „noc modlitwy”, „msza”, „przysięga”, „turniej”. Dzień, BEZ policzka-ciosu, BEZ krwi. Tytuł: „pasowanie na rycerza”. Styl Nowej Ery.",
          ua: "Посвята: пояс із мечем і шпори. Без удару в обличчя."
        }
      }),
      text: {
        pl: [
          ["", em("Pasowanie"), ": noc na modlitwie, msza, przysięga przed władcą. Nowy rycerz dostawał ", em("pas z mieczem"), " i ", em("ostrogi"), "."],
          "Czasem po ceremonii był turniej. Zapamiętaj etapy i uroczystość — nie filmową bójkę."
        ],
        ua: [
          ["", em("Посвята"), " (pasowanie): ніч на молитві, служба, присяга перед володарем. Новий лицар діставав ", em("пояс із мечем"), " і ", em("шпори"), "."],
          "Іноді після церемонії був турнір. Запам’ятай етапи і урочистість — не кіношну бійку."
        ]
      },
      task: {
        id: "h23-pas",
        type: "true-false",
        level: "B",
        question: {
          pl: "Przy pasowaniu rycerz otrzymywał m.in. pas z mieczem i ostrogi — prawda czy fałsz?",
          ua: "Під час посвяти лицар отримував зокрема пояс із мечем і шпори — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: ostrogi to pojęcie tej lekcji. Nie myl z hołdem lennym (klękanie po lenno).",
          ua: "KN: шпори — поняття цього уроку. Не плутай із ленною присягою (кліч за лен)."
        },
        explanation: {
          pl: "Prawda. Hołd lenny = lekcja 22. Tu pasowanie na rycerza.",
          ua: "Правда. Ленна присяга = урок 22. Тут посвята на лицаря."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Herb rycerski", ua: "Лицарський герб" },
      formula: "znak dziedziczony",
      visual: gh("197", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat herbu z podpisami: tarcza z godłem, hełm, klejnot, labry",
          ua: "Схема герба з підписами: щит із емблемою, шолом, клейнод, намет"
        },
        title: { pl: "Rodzina, nie logo klubu", ua: "Родина, не логотип клубу" },
        prompt: {
          pl: "Szkolny schemat 16:9. Prosty herb (niebieski kartusz, złoty znak geometryczny — NIE kopia herbu Jastrzębiec z Wikipedii). Podpisy PL: „tarcza z godłem”, „hełm”, „klejnot”, „labry”. Tytuł: „herb — znak dziedziczony”. Styl Nowej Ery.",
          ua: "Схема герба: щит, шолом, клейнод, намет. Не копія Вікіпедії."
        }
      }),
      text: {
        pl: [
          ["", em("Herb"), " to charakterystyczny znak rodu, ", em("dziedziczony"), ". Na tarczy — ", em("godło"), "; wyżej hełm, ", em("klejnot"), " i ozdobne ", em("labry"), "."],
          "Rycerz nosił herb na tarczy i chorągwi, żeby poznać go w tłumie. Projekt własnego herbu — zadanie w zeszycie, nie w tej aplikacji."
        ],
        ua: [
          ["", em("Герб"), " — характерний знак роду, ", em("спадковий"), ". На щиті — ", em("емблема"), " (godło); вище шолом, ", em("клейнод"), " і декоративний ", em("намет"), " (labry)."],
          "Лицар носив герб на щиті й хоругві, щоб його впізнати. Власний герб — у зошиті, не в цій програмі."
        ]
      },
      task: {
        id: "h23-herb",
        type: "true-false",
        level: "B",
        question: {
          pl: "Herb rycerski był znakiem dziedziczonym w rodzie — prawda czy fałsz?",
          ua: "Лицарський герб був спадковим знаком роду — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: herb. Nie myl z ikoną z lekcji 17.",
          ua: "KN: герб. Не плутай з іконою з уроку 17."
        },
        explanation: {
          pl: "Prawda. Film + KN. Ikona = prawosławie, lekcja 20.",
          ua: "Правда. Фільм + KN. Ікона = православ’я, урок 20."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Uzbrojenie", ua: "Озброєння" },
      formula: "koń + zbroja",
      visual: gh("198", {
        kind: "image-placeholder",
        alt: {
          pl: "Rycerz na koniu z podpisami: miecz, hełm, rękawica, tarcza, zbroja, ostrogi",
          ua: "Лицар на коні з підписами: меч, шолом, рукавиця, щит, зброя, шпори"
        },
        title: { pl: "Sześć części, walka konna", ua: "Шість частин, бій верхи" },
        prompt: {
          pl: "Szkolna figurka 16:9, rycerz na koniu, miecz w górze ale BEZ ciosu w kogoś. Czerwone strzałki PL: miecz, hełm (przyłbica), rękawica, tarcza, zbroja, ostrogi. Tytuł: „uzbrojenie”. Styl Nowej Ery.",
          ua: "Підписи: меч, шолом, рукавиця, щит, зброя, шпори. Без удару по людині."
        }
      }),
      text: {
        pl: [
          ["W walce ważne: ", em("miecz"), ", ", em("hełm"), " (przyłbica), ", em("zbroja"), ", ", em("tarcza"), ", ", em("rękawica"), ", ", em("ostrogi"), "."],
          ["Rycerz walczył ", em("konno"), ". Koń i zbroja — z lekcji 22: wasal kupował je sam."]
        ],
        ua: [
          ["У бою важливі: ", em("меч"), ", ", em("шолом"), " (забрало), ", em("зброя"), ", ", em("щит"), ", ", em("рукавиця"), ", ", em("шпори"), "."],
          ["Лицар бився ", em("верхи"), ". Кінь і зброя — з уроку 22: васал купував їх сам."]
        ]
      },
      task: {
        id: "h23-bron",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które elementy uzbrojenia zapamiętujemy i jak rycerz walczył?",
          ua: "Які елементи озброєння запам’ятовуємо і як лицар бився?"
        },
        options: [
          { id: "a", label: { pl: "miecz, hełm, zbroja, tarcza, rękawica, ostrogi; konno", ua: "меч, шолом, зброя, щит, рукавиця, шпори; верхи" } },
          { id: "b", label: { pl: "tylko łuk i dżihad z lekcji 18", ua: "лише лук і джихад з уроку 18" } },
          { id: "c", label: { pl: "tylko ikonostas i cerkiew", ua: "лише іконостас і церква" } }
        ],
        answer: "a",
        hint: {
          pl: "Sześć części z filmu i cele lekcji. Koń = ostrogi.",
          ua: "Шість частин з фільму і цілі уроку. Кінь = шпори."
        },
        explanation: {
          pl: "KN: wyposażenie. Islam i cerkiew = inne lekcje.",
          ua: "KN: спорядження. Іслам і церква = інші уроки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zawisza Czarny", ua: "Завіша Чорний" },
      formula: "XV w. · Polska",
      visual: gh("199", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Zawiszy Czarnego: cztery punkty, spokojny portret w ciemnej zbroi",
          ua: "Картка Завіші Чорного: чотири пункти, спокійний портрет у темній зброї"
        },
        title: { pl: "Słowo jak Zawiszy", ua: "Слово як у Завіші" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret rycerza w CIEMNEJ zbroi, dzień, BEZ Bitwy pod Grunwaldem, BEZ Matejki, BEZ maczugi nad głową wroga. Cztery punkty PL: „kto — Zawisza Czarny”; „skąd — Polska”; „lata — XV wiek”; „wsławił się — dotrzymywał słowa, wzór rycerza”. Styl Nowej Ery.",
          ua: "Картка Завіші: Польща, XV ст., слово. Без Матейка і без різанини."
        }
      }),
      text: {
        pl: [
          ["", em("Zawisza Czarny"), " — najsłynniejszy polski rycerz (XV w.). Pamiętamy go za ", em("słowo"), ": dotrzymywał obietnic."],
          ["Do dziś harcerze mówią: „Na słowie harcerza polegaj jak na Zawiszy”. Roland z pieśni to literacki ideał — nie scena śmierci na obrazie."]
        ],
        ua: [
          ["", em("Завіша Чорний"), " — найславетніший польський лицар (XV ст.). Пам’ятаємо його за ", em("слово"), ": дотримував обіцянок."],
          ["Досі скаути кажуть: «На слові скаута покладайсь, як на Завішу». Роланд із пісні — літературний ідеал, не сцена смерті на картині."]
        ]
      },
      task: {
        id: "h23-zawisza",
        type: "true-false",
        level: "C",
        question: {
          pl: "Zawiszę Czarnego pamiętamy m.in. za dotrzymywanie słowa — prawda czy fałsz?",
          ua: "Завішу Чорного пам’ятаємо зокрема за те, що дотримував слова — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN ponadpodstawowe. Nie myl z Urbanem II (lekcja 21).",
          ua: "KN понад базове. Не плутай з Урбаном II (урок 21)."
        },
        explanation: {
          pl: "Prawda. Roland i Zawisza = ideały, nie gore z filmu.",
          ua: "Правда. Роланд і Завіша = ідеали, не gore з фільму."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "rycerz / rycerstwo — wojownik stanu; „człowiek miecza”", ua: "лицар / лицарство — воїн стану; «людина меча»" },
        { pl: "kodeks honorowy — odwaga, słowo, prawda, pobożność, pomoc słabszym", ua: "кодекс честі — відвага, слово, правда, побожність, допомога слабшим" },
        { pl: "paź (od 7 lat) / giermek (od 14 lat) — etapy drogi do pasowania", ua: "паж (від 7 років) / зброєносець (від 14) — етапи шляху до посвяти" },
        { pl: "pasowanie — uroczystość: pas z mieczem i ostrogi", ua: "посвята — урочистість: пояс із мечем і шпори" },
        { pl: "herb — dziedziczony znak rodu (tarcza, godło, hełm, klejnot, labry)", ua: "герб — спадковий знак роду (щит, емблема, шолом, клейнод, намет)" },
        { pl: "zbroja, hełm, tarcza, ostrogi — uzbrojenie; walka konna", ua: "лати, шолом, щит, шпори — озброєння; бій верхи" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Paź zaczynał w 14 roku życia. Giermek orał pole zamiast chłopów. Pasowanie to hołd lenny z 1122. Herb to ikonostas. Zawisza był papieżem w Clermont.”",
        ua: "«Паж починав у 14 років. Зброєносець орав поле замість селян. Посвята — це ленна присяга з 1122. Герб — іконостас. Завіша був папою в Клермоні.»"
      },
      text: {
        pl: [
          "Paź = 7 lat, giermek = 14. Chłopi orzą. Hołd = lekcja 22. Pasowanie = pas i ostrogi. Herb ≠ ikona. Zawisza = rycerz XV w., nie Urban II."
        ],
        ua: [
          "Паж = 7 років, зброєносець = 14. Селяни орють. Присяга ленна = урок 22. Посвята = пояс і шпори. Герб ≠ ікона. Завіша = лицар XV ст., не Урбан II."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: obowiązek rycerza, droga pazia i giermka oraz co dostał przy pasowaniu. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях: обов’язок лицаря, шлях пажа і зброєносця та що дістав при посвяті. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: ojczyzna i wiara; 7 i 14 lat; pas, ostrogi, ziemia od władcy."
        ],
        ua: [
          "Підказка: вітчизна і віра; 7 і 14 років; пояс, шпори, земля від володаря."
        ]
      },
      task: {
        id: "h23-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje obowiązek, drogę i pasowanie?",
          ua: "Яке речення охоплює обов’язок, шлях і посвяту?"
        },
        options: [
          { id: "a", label: { pl: "Rycerz bronił władcy i wiary; chłopiec: paź, potem giermek; przy pasowaniu pas, miecz i ostrogi", ua: "Лицар боронив володаря і віру; хлопець: паж, потім зброєносець; при посвяті пояс, меч і шпори" } },
          { id: "b", label: { pl: "Rycerz orał lenno papieża w Mekce w 622", ua: "Лицар орав лен папи в Мецці 622 року" } },
          { id: "c", label: { pl: "Pasowanie to konkordat w Wormacji", ua: "Посвята — це конкордат у Вормсі" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: obowiązki, droga, wyposażenie/ceremonia.",
          ua: "Цілі вчительки: обов’язки, шлях, спорядження/церемонія."
        },
        explanation: {
          pl: "Hidżra i Wormacja = inne lekcje.",
          ua: "Хіджра і Вормс = інші уроки."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Ideały i wyjątki", ua: "Ідеали і винятки" },
      task: {
        id: "h23-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zgodne z KN ponadpodstawowym i notatką?",
          ua: "Яке речення згідне з KN понад базовим і нотаткою?"
        },
        options: [
          { id: "a", label: { pl: "Zawisza = słowo (harcerze); Roland = pieśń o idealiście; rycerzami byli zwykle mężczyźni, wyjątek np. Joanna d’Arc", ua: "Завіша = слово (скаути); Роланд = пісня про ідеал; лицарями були здебільшого чоловіки, виняток напр. Жанна д’Арк" } },
          { id: "b", label: { pl: "kobiety zawsze pasowano w Clermont w 1095", ua: "жінок завжди посвячували в Клермоні 1095 року" } },
          { id: "c", label: { pl: "Zawisza napisał Koran", ua: "Завіша написав Коран" } }
        ],
        answer: "a",
        hint: {
          pl: "Literatura (Roland) i polski rycerz (Zawisza). Joanna = wyjątek, nie reguła.",
          ua: "Література (Роланд) і польський лицар (Завіша). Жанна = виняток, не правило."
        },
        explanation: {
          pl: "KN ponadpodstawowe: Roland, Zawisza. Notatka: dama serca i rzadki wyjątek.",
          ua: "KN понад базове: Роланд, Завіша. Нотатка: дама серця і рідкісний виняток."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h23-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Paź, giermek, pasowanie — co jest prawdą?",
          ua: "Паж, зброєносець, посвята — що правда?"
        },
        options: [
          { id: "a", label: { pl: "7 lat paź; 14 lat giermek; pasowanie: pas z mieczem i ostrogi; ziemia od władcy, orzą chłopi", ua: "7 років паж; 14 зброєносець; посвята: пояс із мечем і шпори; земля від володаря, орють селяни" } },
          { id: "b", label: { pl: "najpierw giermek w 7 roku, potem paź w 3 roku życia", ua: "спочатку зброєносець у 7 років, потім паж у 3 роки" } },
          { id: "c", label: { pl: "pasowanie = wielka schizma 1054", ua: "посвята = велика схизма 1054" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe: etapy i ceremonia. Ziemia = karta nauczycielki.",
          ua: "KN базове: етапи і церемонія. Земля = картка вчительки."
        },
        explanation: {
          pl: "To KN + notatki. 1054 = lekcja 20.",
          ua: "Це KN + нотатки. 1054 = урок 20."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Rycerz bronił ojczyzny i wiary. Kodeks: uczciwość, pobożność, słowo, prawda, pomoc słabszym.",
          ["ojczyzny", "Kodeks"],
          "Лицар боронив вітчизну і віру. Кодекс: чесність, побожність, слово, правда, допомога слабшим.",
          ["вітчизну", "Кодекс"]
        ),
        mark(
          "Za służbę dostawał od władcy ziemię i siedzibę. Pola uprawiali chłopi.",
          ["władcy", "chłopi"],
          "За службу діставав від володаря землю і оселю. Поля обробляли селяни.",
          ["володаря", "селяни"]
        ),
        mark(
          "Chłopiec: paź, potem giermek. Pasowanie — pas z mieczem i ostrogi.",
          ["paź", "giermek", "ostrogi"],
          "Хлопець: паж, потім зброєносець. Посвята — пояс із мечем і шпори.",
          ["паж", "зброєносець", "шпори"]
        ),
        mark(
          "Uzbrojenie: miecz, hełm, zbroja, tarcza, rękawica, ostrogi. Walka konna.",
          ["miecz", "hełm", "konna"],
          "Озброєння: меч, шолом, лати, щит, рукавиця, шпори. Бій верхи.",
          ["меч", "шолом", "верхи"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: średniowieczne miasto i wieś — gdzie mieszkali mieszczanie i jak orali chłopi.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: середньовічне місто і село — де жили міщани і як орали селяни.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "9MW3pLbcHBE",
        title: {
          pl: "Krótkie Lekcje: Epoka rycerzy",
          ua: "Короткі уроки: Епоха лицарів"
        }
      }
    }
  ]
};
