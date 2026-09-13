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
      heading: { pl: "Ustrój starożytnego Rzymu", ua: "Устрій стародавнього Риму" },
      formula: "753 · 509 · 44 p.n.e.",
      text: {
        pl: [
          "Nad Tybrem urosło miasto na siedmiu wzgórzach. Najpierw król, potem rzecz wspólna, na końcu cesarz.",
          "Dziś trzy pytania: jak działała republika, skąd konflikt patrycjuszy z plebejuszami, co zmienili Cezar i Oktawian. Na osi trzy daty tej lekcji: 753, 509 i 44."
        ],
        ua: [
          "Над Тибром виросло місто на семи пагорбах. Спочатку цар, потім спільна справа, наприкінці імператор.",
          "Сьогодні три питання: як діяла республіка, звідки конфлікт патриціїв із плебеями, що змінили Цезар і Октавіан. На осі три дати цього уроку: 753, 509 і 44."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać Rzym na mapie: Italia, Tyber, Półwysep Apeniński, Europa", ua: "вказати Рим на мапі: Італія, Тибр, Апеннінський півострів, Європа" },
        { pl: "powiedzieć, na czym polegał republikański system władzy", ua: "сказати, у чому полягала республіканська система влади" },
        { pl: "wyjaśnić konflikt plebejuszy z patrycjuszami i rolę trybuna ludowego", ua: "пояснити конфлікт плебеїв із патриціями і роль народного трибуна" },
        { pl: "podać daty 753, 509, 44 oraz powiedzieć, co zmienili Cezar i Oktawian", ua: "подати дати 753, 509, 44 і сказати, що змінили Цезар і Октавіан" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Rzym na mapie — i dziś", ua: "Рим на мапі — і сьогодні" },
      visual: gh("092", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Półwysep Apeniński, Tyber, Rzym; wstawka Europa",
          ua: "Мапа: Апеннінський півострів, Тибр, Рим; вставка Європа"
        },
        title: { pl: "Italia, Tyber, stolica Włoch", ua: "Італія, Тибр, столиця Італії" },
        prompt: {
          pl: "Szkolna atlasowa mapa dla klasy 5, jasne tło, bez spornych granic jako tematu lekcji. DUŻA mapa Półwyspu Apenińskiego (kształt buta): morza niebieskie (Śródziemne, Adriatyk, Tyrreńskie), ląd ciepły. Pogrubiona rzeka Tyber w środku zachodniego brzegu, kropka Rzym. Podpisy PL: Italia, Rzym, Tyber, Półwysep Apeniński, Morze Śródziemne. Wstawka w rogu: kontur Europy z czerwoną kropką „Półwysep Apeniński”. Mała etykieta: „dziś stolica Włoch”. Róża wiatrów. Bez armii i bez ruin-horroru. Styl Nowej Ery.",
          ua: "Шкільна атласна мапа для 5 класу. Апеннінський півострів-чобіт, річка Тибр, Рим, Середземне море. Вставка: Європа. Підпис: сьогодні столиця Італії. Без армій."
        }
      }),
      text: {
        pl: [
          ["Odszukaj ", em("Rzym"), ". Leży w Europie, na ", em("Półwyspie Apenińskim"), " (Italia). Dziś to stolica ", em("Włoch"), "."],
          ["Miasto stoi nad rzeką ", em("Tyber"), ", przy ", em("Morzu Śródziemnym"), "."]
        ],
        ua: [
          ["Знайди ", em("Рим"), ". Лежить у Європі, на ", em("Апеннінському півострові"), " (Італія). Сьогодні це столиця ", em("Італії"), "."],
          ["Місто стоїть над річкою ", em("Тибр"), ", біля ", em("Середземного моря"), "."]
        ]
      },
      task: {
        id: "h12-map",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Nad którą rzeką leży Rzym i stolicą jakiego państwa jest dziś?",
          ua: "Над якою річкою лежить Рим і столицею якої держави він є сьогодні?"
        },
        options: [
          { id: "a", label: { pl: "nad Tybrem; stolica Włoch", ua: "над Тибром; столиця Італії" } },
          { id: "b", label: { pl: "nad Nilem; stolica Egiptu", ua: "над Нілом; столиця Єгипту" } },
          { id: "c", label: { pl: "nad Dnieprem; stolica Grecji", ua: "над Дніпром; столиця Греції" } }
        ],
        answer: "a",
        hint: {
          pl: "Półwysep jak but. Rzeka w środku zachodniego brzegu.",
          ua: "Півострів як чобіт. Річка всередині західного берега."
        },
        explanation: {
          pl: "Tyber + Włochy. Nil to Egipt z lekcji 03.",
          ua: "Тибр + Італія. Ніл — це Єгипет з уроку 03."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Początki Rzymu", ua: "Початки Риму" },
      formula: "753 p.n.e. · 7 wzgórz",
      timelineYear: 753,
      text: {
        pl: [
          ["Według tradycji Rzym założono w ", em("753 p.n.e."), " — najpierw niewielka osada nad Tybrem."],
          ["Mieszkali ", em("Latynowie"), ", kraina ", em("Lacjum"), ", język ", em("łaciński"), ". Z czasem miasto zajęło ", em("siedem wzgórz"), " i stało się stolicą wielkiego imperium."]
        ],
        ua: [
          ["За традицією Рим заснували ", em("753 до н.е."), " — спочатку невелике поселення над Тибром."],
          ["Жили ", em("латини"), ", край ", em("Лацій"), ", мова ", em("латинська"), ". З часом місто зайняло ", em("сім пагорбів"), " і стало столицею великої імперії."]
        ]
      },
      task: {
        id: "h12-753",
        type: "input-number",
        level: "A",
        question: {
          pl: "Tradycyjny rok założenia Rzymu p.n.e.? Wpisz tylko liczbę.",
          ua: "Традиційний рік заснування Риму до н.е.? Введи лише число."
        },
        answer: 753,
        hint: {
          pl: "Siedem-pięć-trzy. Ta data jest na osi.",
          ua: "Сім-п’ять-три. Ця дата на осі."
        },
        explanation: {
          pl: "753 p.n.e. — szkolna data założenia. Italia, Tyber, Latynowie, Lacjum, łacina, 7 wzgórz.",
          ua: "753 до н.е. — шкільна дата заснування. Італія, Тибр, латини, Лацій, латина, 7 пагорбів."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Romulus i Remus", ua: "Ромул і Рем" },
      formula: "mit · 753 p.n.e.",
      timelineYear: 753,
      visual: gh("093", {
        kind: "image-placeholder",
        alt: {
          pl: "Wilczyca kapitolińska: wilczyca i dwaj chłopcy",
          ua: "Капітолійська вовчиця: вовчиця і двоє хлопчиків"
        },
        title: { pl: "Wilczyca kapitolińska", ua: "Капітолійська вовчиця" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, 16:9, muzealne światło, BEZ walki braci, BEZ krwi, BEZ grozy. Na środku brązowa rzeźba Wilczycy kapitolińskiej: spokojna wilczyca stoi, pod nią dwaj mali chłopcy (niemowlęta) — jak w muzeum, nie horror. Cokół, jasna ściana. Po lewej cztery punkty PL: „kto — Romulus i Remus, bliźnięta”; „skąd — mit o Lacjum / Tybrze”; „lata — legenda o 753 p.n.e.”; „wsławił się — Romulus pierwszy król, założyciel Rzymu”. Podpis: „Wilczyca kapitolińska”. Nie rysuj morderstwa Remusa. Styl podręcznika.",
          ua: "Шкільний слайд, музейне світло, БЕЗ бійки братів і крові. Капітолійська вовчиця, двоє немовлят. Пункти: Ромул і Рем; міт про Лацій; 753; Ромул — перший цар."
        }
      }),
      text: {
        pl: [
          ["Mit: bliźnięta ", em("Romulus"), " i ", em("Remus"), " wychowała ", em("wilczyca"), ". Romulus został pierwszym królem i dał miastu imię."],
          "To opowieść, nie raport z wykopalisk. Datę 753 i tak zapamiętujemy — tak uczy szkoła."
        ],
        ua: [
          ["Міт: близнят ", em("Ромула"), " і ", em("Рема"), " вигодувала ", em("вовчиця"), ". Ромул став першим царем і дав місту ім’я."],
          "Це оповідь, не звіт з розкопок. Дату 753 усе одно запам’ятовуємо — так учить школа."
        ]
      },
      task: {
        id: "h12-mit",
        type: "true-false",
        level: "A",
        question: {
          pl: "Według mitu Rzym założył Romulus, a dzieciom pomogła wilczyca — prawda czy fałsz?",
          ua: "За мітом Рим заснував Ромул, а дітям допомогла вовчиця — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Wilczyca kapitolińska stoi w muzeum do dziś.",
          ua: "Капітолійська вовчиця стоїть у музеї досі."
        },
        explanation: {
          pl: "Prawda. Remus jest bratem z mitu; pierwszym królem tradycja czyni Romulusa.",
          ua: "Правда. Рем — брат із міту; першим царем традиція робить Ромула."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Monarchia", ua: "Монархія" },
      formula: "król dożywotnio · 509 p.n.e.",
      timelineYear: 509,
      text: {
        pl: [
          ["Pierwszy ustrój: ", em("monarchia"), " — pełnia władzy należy do ", em("króla"), " (monarchy) ", em("dożywotnio"), ". Pierwszy król: Romulus. Potem jeszcze sześciu — razem siedmiu."],
          ["W ", em("509 p.n.e."), " Rzymianie wypędzili ostatniego króla i zrezygnowali z monarchii."]
        ],
        ua: [
          ["Перший устрій: ", em("монархія"), " — вся влада в ", em("царя"), " (монарха) ", em("досмертно"), ". Перший цар: Ромул. Потім ще шестеро — разом семеро."],
          ["У ", em("509 до н.е."), " римляни вигнали останнього царя і відмовилися від монархії."]
        ]
      },
      task: {
        id: "h12-509",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. wprowadzono republikę? Wpisz tylko liczbę.",
          ua: "У якому році до н.е. запровадили республіку? Введи лише число."
        },
        answer: 509,
        hint: {
          pl: "Pięć-zero-dziewięć. Koniec monarchii.",
          ua: "П’ять-нуль-дев’ять. Кінець монархії."
        },
        explanation: {
          pl: "509 p.n.e. — wygnanie króla, start republiki. Imion sześciu kolejnych królów nie wkuwamy.",
          ua: "509 до н.е. — вигнання царя, старт республіки. Імен шести наступних царів не вчимо напам’ять."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Republika: trzy miejsca władzy", ua: "Республіка: три місця влади" },
      formula: "res publica",
      visual: gh("094", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: zgromadzenie ludowe, urzędnicy, senat",
          ua: "Схема: народні збори, урядовці, сенат"
        },
        title: { pl: "Rzecz wspólna, nie głos każdego dnia", ua: "Спільна справа, не голос щодня" },
        prompt: {
          pl: "Szkolna infografika dla klasy 5, jasne tło, BEZ walki. Trzy spokojne pola w rzędzie, strzałki „wybierano”. 1) zgromadzenie ludowe: tłum mężczyzn w togach przed budowlą z kolumnami, podpis „wszyscy mężczyźni-obywatele”. 2) urzędnicy: dwaj mężczyźni w togach, podpis „kadencja zwykle 1 rok”. 3) senat: półkolista sala, mężczyźni na ławach, podpis „główny organ władzy; lista dożywotnia przez cenzora”. Na górze: „res publica = rzecz wspólna”. Nikt nie krzyczy, nie ma noży. Styl podręcznika.",
          ua: "Шкільна інфографіка, три поля: народні збори; урядовці на 1 рік; сенат — головний орган. Підпис res publica. Без насильства."
        }
      }),
      text: {
        pl: [
          [em("Republika"), " (łac. ", em("res publica"), ") — państwo jako wspólne dobro mieszkańców. Lud nie rządzi codziennie sam: wybiera ", em("urzędników"), "."],
          ["Wybory na ", em("zgromadzeniu ludowym"), " (mężczyźni-obywatele). Główny organ: ", em("senat"), ". Kadencja urzędnika zwykle ", em("1 rok"), "."]
        ],
        ua: [
          [em("Республіка"), " (лат. ", em("res publica"), ") — держава як спільне добро мешканців. Народ не править щодня сам: обирає ", em("урядовців"), "."],
          ["Вибори на ", em("народних зборах"), " (чоловіки-громадяни). Головний орган: ", em("сенат"), ". Каденція урядовця зазвичай ", em("1 рік"), "."]
        ]
      },
      task: {
        id: "h12-rep",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest cechą republiki rzymskiej z tej lekcji?",
          ua: "Що є рисою римської республіки з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "władza przez wybieranych urzędników (kadencja ok. roku) i senat", ua: "влада через обраних урядовців (каденція близько року) і сенат" } },
          { id: "b", label: { pl: "jeden król rządzi dożywotnio i sam stanowi wszystkie prawa", ua: "один цар править досмертно і сам становить усі закони" } },
          { id: "c", label: { pl: "głosowały też kobiety i niewolnicy, jak w Polsce dziś", ua: "голосували також жінки і раби, як у Польщі сьогодні" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie myl z monarchią. Nie myl z dzisiejszą Polską.",
          ua: "Не плутай із монархією. Не плутай із сьогоднішньою Польщею."
        },
        explanation: {
          pl: "Res publica ≠ król. Obywatel = mężczyzna; to nie współczesne prawa wyborcze.",
          ua: "Res publica ≠ цар. Громадянин = чоловік; це не сучасні виборчі права."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Patrycjusze i plebejusze", ua: "Патриції і плебеї" },
      visual: gh("095", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwie pary Rzymian: bogatszy strój i skromniejszy",
          ua: "Дві пари римлян: багатший одяг і скромніший"
        },
        title: { pl: "Wolni, ale nie równi", ua: "Вільні, але не рівні" },
        prompt: {
          pl: "Szkolna ilustracja dla klasy 5, dzień, BEZ bójki, BEZ bata. Dwie pary spokojnie stoją obok siebie. LEWA etykieta „patrycjusze”: mężczyzna i kobieta w jasnych, czystych togach/stoli. PRAWA etykieta „plebejusze”: mężczyzna i kobieta w skromniejszych brązowych tunikach. Punkty PL: patrycjusze — bogate rody, wpływ na rządy; plebejusze — wolni, początkowo bez urzędów i bez małżeństw z patrycjuszami. Potem strzałka „trybun ludowy”. Nikt nie klęczy w błocie. Styl podręcznika.",
          ua: "Дві пари: патриції в світлих тогах, плебеї в скромнішому одязі. Без бійки. Пункти про вплив, уряди, трибуна."
        }
      }),
      text: {
        pl: [
          [em("Patrycjusze"), " — z bogatych rodów, mieli wpływ na rządy. ", em("Plebejusze"), " — wolni, ale początkowo bez urzędów i bez małżeństw z patrycjuszami."],
          ["Po protestach plebejusze wywalczyli ", em("trybunów ludowych"), " i z czasem dostęp do większości urzędów."]
        ],
        ua: [
          [em("Патриції"), " — з багатих родів, мали вплив на владу. ", em("Плебеї"), " — вільні, але спочатку без урядів і шлюбів із патриціями."],
          ["Після протестів плебеї вибороли ", em("народних трибунів"), " і з часом доступ до більшості урядів."]
        ]
      },
      task: {
        id: "h12-spoleczenstwo",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co było powodem konfliktu plebejuszy z patrycjuszami?",
          ua: "Що було причиною конфлікту плебеїв із патриціями?"
        },
        options: [
          { id: "a", label: { pl: "plebejusze byli wolni, ale bez wpływu na urzędy i prawa patrycjuszy", ua: "плебеї були вільні, але без впливу на уряди і права патриціїв" } },
          { id: "b", label: { pl: "plebejusze chcieli wrócić do siedmiu królów", ua: "плебеї хотіли повернутися до семи царів" } },
          { id: "c", label: { pl: "patrycjusze mieszkali nad Nilem, a plebejusze w Sparcie", ua: "патриції жили над Нілом, а плебеї в Спарті" } }
        ],
        answer: "a",
        hint: {
          pl: "Wolni ≠ równi. Szukaj urzędów i małżeństw.",
          ua: "Вільні ≠ рівні. Шукай уряди і шлюби."
        },
        explanation: {
          pl: "Konflikt o prawa, nie o Nil. Skutek: trybun ludowy, potem urzędy.",
          ua: "Конфлікт про права, не про Ніл. Наслідок: народний трибун, потім уряди."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Urzędnicy republiki", ua: "Урядовці республіки" },
      visual: gh("096", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat urzędów: senat, konsulowie, dyktator, pretorzy, kwestorzy, trybuni",
          ua: "Схема урядів: сенат, консули, диктатор, претори, квестори, трибуни"
        },
        title: { pl: "Kto co robił", ua: "Хто що робив" },
        prompt: {
          pl: "Szkolny schemat dla klasy 5, jasna tablica, czytelne ramki, BEZ przemocy. LEWA ramka SENAT: 300 wpływowych, byli urzędnicy, lista dożywotnia przez cenzora; wpływa na urzędników; mianuje dyktatora. ŚRODEK URZĘDNICY: dyktator — nieograniczona władza, 6 miesięcy; konsulowie — zwołują senat i zgromadzenie, dowodzą armią; pretorzy — sądy; kwestorzy — podatki. PRAWA: trybuni ludowi — plebejusze, wetują złe decyzje (nie dyktatora). DÓŁ: zgromadzenie ludowe — ustawy i wybory. Żółte strzałki: wybór / kontrola. Ludziki w togach, spokojni. Podpisy po polsku DOKŁADNIE jak wyżej.",
          ua: "Схема: сенат; диктатор 6 місяців; консули; претори — суди; квестори — податки; народні трибуни; народні збори. Без насильства."
        }
      }),
      text: {
        pl: [
          ["", em("Konsulowie"), " — zwołują senat i zgromadzenie, w wojnie dowodzą armią. ", em("Pretorzy"), " — sądy. ", em("Kwestorzy"), " — podatki."],
          [em("Dyktator"), " — na ", em("6 miesięcy"), ", władza niemal nieograniczona (senat go mianuje). ", em("Trybun ludowy"), " broni plebejuszy i może weto — ale nie wobec dyktatora."]
        ],
        ua: [
          ["", em("Консули"), " — скликають сенат і збори, на війні командують військом. ", em("Претори"), " — суди. ", em("Квестори"), " — податки."],
          [em("Диктатор"), " — на ", em("6 місяців"), ", влада майже необмежена (сенат призначає). ", em("Народний трибун"), " захищає плебеїв і може вето — але не проти диктатора."]
        ]
      },
      task: {
        id: "h12-urzad",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zestawienie urzędów jest poprawne?",
          ua: "Яке поєднання урядів є правильним?"
        },
        options: [
          { id: "a", label: { pl: "konsulowie — wojsko i zwołania; pretorzy — sądy; kwestorzy — podatki; dyktator — 6 miesięcy", ua: "консули — військо і скликання; претори — суди; квестори — податки; диктатор — 6 місяців" } },
          { id: "b", label: { pl: "kwestorzy dowodzili armią, a konsulowie zbierali podatki dożywotnio", ua: "квестори командували військом, а консули досмертно збирали податки" } },
          { id: "c", label: { pl: "trybun ludowy był królem Macedonii", ua: "народний трибун був царем Македонії" } }
        ],
        answer: "a",
        hint: {
          pl: "Sądy = pretor. Pieniądze = kwestor. Krótka nadzwyczajna władza = dyktator.",
          ua: "Суди = претор. Гроші = квестор. Коротка надзвичайна влада = диктатор."
        },
        explanation: {
          pl: "To szkielet s. 78. Kadencja urzędnika ≠ dożywotni senat.",
          ua: "Це кістяк с. 78. Каденція урядовця ≠ довічний сенат."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Gajusz Juliusz Cezar", ua: "Гай Юлій Цезар" },
      formula: "I w. p.n.e. · 44 p.n.e.",
      timelineYear: 44,
      visual: gh("097", {
        kind: "image-placeholder",
        alt: {
          pl: "Muzealne popiersie Juliusza Cezara",
          ua: "Музейне погруддя Юлія Цезаря"
        },
        title: { pl: "Wódz, który zmienił republikę", ua: "Вождь, який змінив республіку" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, muzealne światło, BEZ zabójstwa, BEZ sztyletów, BEZ obrazu Camucciniego, BEZ bitwy pod Alezją. Na środku białe marmurowe popiersie dojrzałego mężczyzny (Juliusz Cezar) na cokołe. Po lewej cztery punkty PL: „kto — wódz rzymski”; „skąd — Rzym”; „lata — I wiek p.n.e., śmierć 44 p.n.e.”; „wsławił się — podbój Galii, dyktator dożywotni, powiedzenie «przekroczyć Rubikon»”. Podpis: „Juliusz Cezar — popiersie”. Nie rysuj krwi ani senatu z nożami. Styl Nowej Ery.",
          ua: "Музейне погруддя Цезаря. БЕЗ убивства і крові. Пункти: вождь; Рим; I ст. до н.е., 44; Галлія, довічний диктатор, «перейти Рубікон»."
        }
      }),
      text: {
        pl: [
          [em("Gajusz Juliusz Cezar"), " — słynny wódz z Rzymu, I wiek p.n.e. Podbił ", em("Galię"), ". Armia była mu wierna bardziej niż senatowi."],
          ["Zmusił senat, by dał mu tytuł ", em("dyktatora dożywotniego"), " — urzędy zostawił. Powiedzenie ", em("„przekroczyć Rubikon”"), " = podjąć nieodwracalną decyzję."]
        ],
        ua: [
          [em("Гай Юлій Цезар"), " — славетний вождь із Риму, I століття до н.е. Підкорив ", em("Галлію"), ". Військо було вірніше йому, ніж сенату."],
          ["Змусив сенат дати йому титул ", em("довічного диктатора"), " — уряди лишив. Прислів’я ", em("«перейти Рубікон»"), " = ухвалити незворотне рішення."]
        ]
      },
      task: {
        id: "h12-cezar-kto",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Gajusz Juliusz Cezar w tej lekcji?",
          ua: "Ким був Гай Юлій Цезар у цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "wodzem, który podbił Galię i został dyktatorem dożywotnim", ua: "вождем, який підкорив Галлію і став довічним диктатором" } },
          { id: "b", label: { pl: "pierwszym z siedmiu królów z 753 p.n.e.", ua: "першим із семи царів 753 до н.е." } },
          { id: "c", label: { pl: "trybunem ludowym plebejuszy w VI wieku", ua: "народним трибуном плебеїв у VI столітті" } }
        ],
        answer: "a",
        hint: {
          pl: "Galia + I wiek p.n.e. Nie myl z Romulusem.",
          ua: "Галлія + I століття до н.е. Не плутай із Ромулом."
        },
        explanation: {
          pl: "Cezar zamyka republikę od strony wodza. Romulus jest z mitu o początku.",
          ua: "Цезар замикає республіку з боку вождя. Ромул — з міту про початок."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "44 p.n.e.", ua: "44 до н.е." },
      formula: "44 p.n.e.",
      timelineYear: 44,
      text: {
        pl: [
          ["Republika trwała około 500 lat. W I wieku p.n.e. wojny domowe osłabiły państwo."],
          ["W ", em("44 p.n.e."), " Cezara zabito na posiedzeniu senatu. Po tym wybuchła kolejna wojna wewnętrzna."]
        ],
        ua: [
          ["Республіка тривала близько 500 років. У I столітті до н.е. громадянські війни ослабили державу."],
          ["У ", em("44 до н.е."), " Цезаря вбили на засіданні сенату. Після цього спалахнула ще одна внутрішня війна."]
        ]
      },
      task: {
        id: "h12-44",
        type: "input-number",
        level: "A",
        question: {
          pl: "Rok śmierci Juliusza Cezara p.n.e.? Wpisz tylko liczbę.",
          ua: "Рік смерті Юлія Цезаря до н.е.? Введи лише число."
        },
        answer: 44,
        hint: {
          pl: "Dwie czwórki. Blisko naszej ery na osi.",
          ua: "Дві четвірки. Близько нашої ери на осі."
        },
        explanation: {
          pl: "44 p.n.e. — koniec Cezara, nie koniec Rzymu. Dalej Oktawian.",
          ua: "44 до н.е. — кінець Цезаря, не кінець Риму. Далі Октавіан."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Oktawian August", ua: "Октавіан Август" },
      formula: "I w. p.n.e. · cesarz",
      visual: gh("098", {
        kind: "image-placeholder",
        alt: {
          pl: "Muzealne popiersie Oktawiana Augusta",
          ua: "Музейне погруддя Октавіана Августа"
        },
        title: { pl: "Pozory republiki, faktyczna władza", ua: "Вигляд республіки, фактична влада" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, muzealne światło, BEZ bitwy, BEZ korony-horroru. Białe marmurowe popiersie młodego mężczyzny z falowanymi włosami (August, typ Glyptoteka). Po lewej cztery punkty PL: „kto — Oktawian August, pierwszy cesarz”; „skąd — Rzym, następca Cezara”; „lata — I wiek p.n.e., po 44 p.n.e.”; „wsławił się — początek cesarstwa: nadzór armii, mianowanie urzędników, tytuł cezara”. Podpis: „Oktawian August — popiersie”. Styl Nowej Ery.",
          ua: "Погруддя Августа. Пункти: перший імператор; Рим, наступник Цезаря; I ст. до н.е.; початок імперії, титул цезаря."
        }
      }),
      text: {
        pl: [
          ["Wojnę po Cezarze wygrał ", em("Oktawian August"), ". Zachował ", em("pozory republiki"), ", a sprawował władzę: armia, urzędnicy, część prowincji."],
          ["Tytuł dyktatora zastąpił tytułem ", em("cezara"), ". Od Augusta władcę zwiemy ", em("cesarzem"), ", a państwo ", em("cesarstwem"), "."]
        ],
        ua: [
          ["Війну після Цезаря виграв ", em("Октавіан Август"), ". Зберіг ", em("вигляд республіки"), ", а владу здійснював: військо, урядовці, частина провінцій."],
          ["Титул диктатора замінив титулом ", em("цезаря"), ". Від Августа володаря звемо ", em("імператором"), ", а державу ", em("імперією"), "."]
        ]
      },
      task: {
        id: "h12-august-kto",
        type: "true-false",
        level: "A",
        question: {
          pl: "Oktawian August zostawił nazwy urzędów republiki, ale trzymał faktyczną władzę — prawda czy fałsz?",
          ua: "Октавіан Август лишив назви урядів республіки, але тримав фактичну владу — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Słowo klucz: pozory.",
          ua: "Ключове слово: вигляд / позóри."
        },
        explanation: {
          pl: "Prawda. Cesarz = jedna osoba. To nie powrót siedmiu królów z imionami na monetach.",
          ua: "Правда. Імператор = одна особа. Це не повернення семи царів з іменами на монетах."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Współcześnie: te same słowa", ua: "Сьогодні: ті самі слова" },
      formula: "republika · senat · konsul · dyktator",
      text: {
        pl: [
          ["", em("Republika"), " dziś: najwyższe organy wybierane na czas. Polska też jest republiką; słowo ", em("Rzeczpospolita"), " stąd."],
          [em("Senat"), " — wyższa izba parlamentu (w Polsce 100 senatorów). ", em("Konsul"), " — przedstawiciel państwa za granicą. ", em("Dyktator"), " dziś = rządy niedemokratyczne, często okrutne — to nie rzymskie „6 miesięcy w nagłym razie”."]
        ],
        ua: [
          ["", em("Республіка"), " сьогодні: найвищі органи обирають на строк. Польща теж республіка; слово ", em("Rzeczpospolita"), " звідси."],
          [em("Сенат"), " — верхня палата парламенту (у Польщі 100 сенаторів). ", em("Консул"), " — представник держави за кордоном. ", em("Диктатор"), " сьогодні = недемократична, часто жорстока влада — це не римські «6 місяців у нагальній потребі»."]
        ]
      },
      task: {
        id: "h12-dzis",
        type: "true-false",
        level: "B",
        question: {
          pl: "Rzymski dyktator na 6 miesięcy to to samo, co dzisiejsze słowo „dyktator” — prawda czy fałsz?",
          ua: "Римський диктатор на 6 місяців — це те саме, що сьогоднішнє слово «диктатор» — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Film rozdziela nagły urząd i okrutne rządy.",
          ua: "Фільм розділяє нагальну посаду і жорстоку владу."
        },
        explanation: {
          pl: "Fałsz. W Rzymie to krótki nadzwyczajny urząd. Dziś słowo brzmi inaczej.",
          ua: "Неправда. У Римі це коротка надзвичайна посада. Сьогодні слово звучить інакше."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "monarchia — rządy króla dożywotnio", ua: "монархія — правління царя досмертно" },
        { pl: "republika (res publica) — rzecz wspólna; władza przez urzędników", ua: "республіка (res publica) — спільна справа; влада через урядовців" },
        { pl: "cesarstwo — rządy cesarza, władza skupiona w jednej osobie", ua: "імперія / цесарство — правління імператора, влада в одній особі" },
        { pl: "senat — główny organ republiki; lista dożywotnia (cenzor)", ua: "сенат — головний орган республіки; список довічний (цензор)" },
        { pl: "patrycjusze / plebejusze — bogate rody / wolni bez pełnych praw (początkowo)", ua: "патриції / плебеї — багаті роди / вільні без повних прав (спочатку)" },
        { pl: "trybun ludowy — urząd plebejuszy; weto wobec decyzji (nie dyktatora)", ua: "народний трибун — уряд плебеїв; вето (не проти диктатора)" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Rzym założył Cezar w 509 p.n.e. nad Nilem. Plebejusze od początku rządzili senatem, a Oktawian wrócił do siedmiu królów.”",
        ua: "«Рим заснував Цезар 509 до н.е. над Нілом. Плебеї від початку правили сенатом, а Октавіан повернув сімох царів.»"
      },
      text: {
        pl: [
          "Założenie: 753, Tyber, mit Romulusa — nie Cezar i nie Nil. 509 to republika, nie narodziny miasta. Senat na starcie to patrycjusze; plebejusze wywalczyli trybunów. August = cesarstwo, nie monarchia siedmiu królów."
        ],
        ua: [
          "Заснування: 753, Тибр, міт Ромула — не Цезар і не Ніл. 509 — республіка, не народження міста. Сенат спочатку — патриції; плебеї вибороли трибунів. Август = імперія, не монархія семи царів."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, na czym polegał republikański system władzy w Rzymie. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, у чому полягала республіканська система влади в Римі. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: res publica, zgromadzenie, urzędnicy na rok, senat. Nie król i nie „wszyscy mieszkańcy jak w Polsce”."
        ],
        ua: [
          "Підказка: res publica, збори, урядовці на рік, сенат. Не цар і не «всі мешканці як у Польщі»."
        ]
      },
      task: {
        id: "h12-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej opisuje republikę rzymską?",
          ua: "Яке речення найкраще описує римську республіку?"
        },
        options: [
          { id: "a", label: { pl: "Państwo jako dobro wspólne: obywatele (mężczyźni) wybierają urzędników, senat podejmuje najważniejsze decyzje", ua: "Держава як спільне добро: громадяни (чоловіки) обирають урядовців, сенат ухвалює найважливіші рішення" } },
          { id: "b", label: { pl: "Jeden król dożywotnio stanowił wszystkie prawa, jak faraon", ua: "Один цар досмертно становив усі закони, як фараон" } },
          { id: "c", label: { pl: "Głosowała cała Europa, w tym kobiety z Aten", ua: "Голосувала вся Європа, зокрема жінки з Афін" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy miejsca ze schematu: zgromadzenie, urzędnicy, senat.",
          ua: "Три місця зі схеми: збори, урядовці, сенат."
        },
        explanation: {
          pl: "To NACOBEZU. Monarchia była wcześniej; cesarstwo — później.",
          ua: "Це NACOBEZU. Монархія була раніше; імперія — пізніше."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Trzy ustroje, jedno miasto", ua: "Три устрої, одне місто" },
      task: {
        id: "h12-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dopasuj: monarchia · republika · cesarstwo",
          ua: "Добери: монархія · республіка · імперія"
        },
        options: [
          { id: "a", label: { pl: "król dożywotnio · rzecz wspólna przez urzędników · władza w rękach cesarza", ua: "цар досмертно · спільна справа через урядовців · влада в руках імператора" } },
          { id: "b", label: { pl: "wszystkie trzy znaczą to samo co demokracja ateńska", ua: "усі три означають те саме, що афінська демократія" } },
          { id: "c", label: { pl: "cesarstwo było pierwsze, monarchia ostatnia", ua: "імперія була першою, монархія останньою" } }
        ],
        answer: "a",
        hint: {
          pl: "Kolejność na osi: 753 królestwo, 509 republika, I w. cesarz.",
          ua: "Порядок на осі: 753 царство, 509 республіка, I ст. імператор."
        },
        explanation: {
          pl: "Film po projekcji: król / dobro wspólne / jedna osoba. Ateny to inna lekcja.",
          ua: "Фільм після показу: цар / спільне добро / одна особа. Афіни — інший урок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h12-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz wydarzenia do dat: 753 · 509 · 44 p.n.e.",
          ua: "Добери події до дат: 753 · 509 · 44 до н.е."
        },
        options: [
          { id: "a", label: { pl: "753 — założenie Rzymu; 509 — republika; 44 — śmierć Cezara", ua: "753 — заснування Риму; 509 — республіка; 44 — смерть Цезаря" } },
          { id: "b", label: { pl: "753 — Issos; 509 — igrzyska; 44 — Maraton", ua: "753 — Ісс; 509 — ігри; 44 — Марафон" } },
          { id: "c", label: { pl: "753 — Oktawian; 509 — wilczyca; 44 — Latynowie", ua: "753 — Октавіан; 509 — вовчиця; 44 — латини" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy liczby z intro i z osi. Nie bierz dat Grecji.",
          ua: "Три числа з intro і з осі. Не бери дат Греції."
        },
        explanation: {
          pl: "To zadanie z prezentacji. Oktawian zaczyna cesarstwo po 44, bez nowej liczby na osi.",
          ua: "Це завдання з презентації. Октавіан починає імперію після 44, без нового числа на осі."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Na początku Rzym był królestwem. Pod koniec VI wieku p.n.e. stał się republiką: władza należała do ludu, ale sprawowali ją urzędnicy wybierani zwykle na rok. Ważnym organem był senat (byli urzędnicy, lista cenzora, dożywotnio).",
          ["królestwem", "republiką", "urzędnicy", "senat"],
          "Спочатку Рим був царством. Наприкінці VI століття до н.е. став республікою: влада належала народові, але її здійснювали урядовці, обрані зазвичай на рік. Важливим органом був сенат (колишні урядовці, список цензора, довічно).",
          ["царством", "республікою", "урядовці", "сенат"]
        ),
        mark(
          "Wolni Rzymianie dzielili się na patrycjuszy i plebejuszy. Najpierw rządzili patrycjusze. Z czasem plebejusze uzyskali trybunów ludowych i prawo do urzędów.",
          ["patrycjuszy", "plebejuszy", "trybunów ludowych"],
          "Вільні римляни ділилися на патриціїв і плебеїв. Спочатку правили патриції. З часом плебеї здобули народних трибунів і право на уряди.",
          ["патриціїв", "плебеїв", "народних трибунів"]
        ),
        mark(
          "W I wieku p.n.e. Gajusz Juliusz Cezar, a potem Oktawian, skupili pełnię władzy. Rządy Oktawiana zapoczątkowały cesarstwo.",
          ["Cezar", "Oktawian", "cesarstwo"],
          "У I столітті до н.е. Гай Юлій Цезар, а потім Октавіан, зібрали повноту влади. Правління Октавіана започаткувало імперію.",
          ["Цезар", "Октавіан", "імперію"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Imperium Rzymskie. To już mapa podbojów — Kartagina, prowincje, limes — nie nowy ustrój od zera.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Римська імперія. Це вже мапа підбоїв — Карфаген, провінції, лімес — не новий устрій з нуля.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "0jc9yMPCbgs",
        title: {
          pl: "Krótkie Lekcje: Ustrój starożytnego Rzymu",
          ua: "Короткі уроки: Устрій стародавнього Риму"
        }
      }
    }
  ]
};
