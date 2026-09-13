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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(33, 38) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 33–38",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział VII: od rozbicia dzielnicowego do monarchii stanowej.",
          "Najpierw synteza, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ VII: від удільної роздробленості до станової монархії.",
          "Спочатку синтез, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "wskazać 1226, Gąsawę 1227, Legnicę 1241 i drogę do korony 1295–1320", ua: "вказати 1226, Гонсаву 1227, Легницю 1241 і шлях до корони 1295–1320" },
        { pl: "opisać Kazimierza: 1333, 1343, 1364", ua: "описати Казимира: 1333, 1343, 1364" },
        { pl: "podać unię 1385, Grunwald 1410, Horodło 1413", ua: "назвати унію 1385, Грюнвальд 1410, Городло 1413" },
        { pl: "zamknąć Jagiellonów: Warna 1444, wojna 1454–1466; oraz Koszyce 1374 i Nihil novi 1505", ua: "замкнути Ягеллонів: Варна 1444, війна 1454–1466; а також Кошиці 1374 і Nihil novi 1505" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Rozbicie i zjednoczenie", ua: "Роздробленість і об’єднання" },
      visual: gh("280", {
        kind: "image-placeholder",
        alt: { pl: "Zjednoczenie — lekcja 34", ua: "Об’єднання — урок 34" },
        title: { pl: "Krzyżacy, Tatarzy, Łokietek", ua: "Хрестоносці, татари, Локетек" },
        prompt: { pl: "Istniejący slajd lekcji 34.", ua: "Існуючий слайд уроку 34." }
      }),
      text: {
        pl: [
          ["Po 1138 kraj jest słaby. Konrad Mazowiecki sprowadza Krzyżaków (", em("1226"), "). ", em("Gąsawa 1227"), " — śmierć Leszka Białego. ", em("Legnica 1241"), " — Tatarzy, ginie Henryk Pobożny."],
          ["", em("Przemysł II"), " koronowany ", em("1295"), ". ", em("Wacław II"), " w ", em("1300"), ". Krzyżacy biorą Pomorze ", em("1309"), ". ", em("Łokietek"), " koronowany ", em("1320"), "; ", em("Płowce 1331"), "."]
        ],
        ua: [
          ["Після 1138 край слабкий. Конрад Мазовецький запрошує хрестоносців (", em("1226"), "). ", em("Гонсава 1227"), " — смерть Лешка Білого. ", em("Легниця 1241"), " — татари, гине Генрик Побожний."],
          ["", em("Пшемисл II"), " коронований ", em("1295"), ". ", em("Вацлав II"), " у ", em("1300"), ". Хрестоносці беруть Помор’я ", em("1309"), ". ", em("Локетек"), " коронований ", em("1320"), "; ", em("Пловці 1331"), "."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Kazimierz, unia, stany", ua: "Казимир, унія, стани" },
      visual: gh("298", {
        kind: "map-placeholder",
        alt: { pl: "Unia polsko-litewska — lekcja 36", ua: "Польсько-литовська унія — урок 36" },
        title: { pl: "Od Kazimierza do Nihil novi", ua: "Від Казимира до Nihil novi" },
        prompt: { pl: "Istniejąca mapa lekcji 36.", ua: "Існуюча карта уроку 36." }
      }),
      text: {
        pl: [
          ["", em("Kazimierz Wielki"), ": koronacja ", em("1333"), ", pokój kaliski ", em("1343"), ", Akademia Krakowska ", em("1364"), "."],
          ["", em("Krewo 1385"), " — Jagiełło i Jadwiga. ", em("Grunwald 1410"), ". ", em("Horodło 1413"), ". Warna ", em("1444"), ". Wojna trzynastoletnia ", em("1454–1466"), ", II pokój toruński ", em("1466"), ". Przywileje: ", em("Koszyce 1374"), ", ", em("Nihil novi 1505"), "."]
        ],
        ua: [
          ["", em("Казимир Великий"), ": коронація ", em("1333"), ", каліський мир ", em("1343"), ", Краківська академія ", em("1364"), "."],
          ["", em("Крево 1385"), " — Ягайло і Ядвіга. ", em("Грюнвальд 1410"), ". ", em("Городло 1413"), ". Варна ", em("1444"), ". Тринадцятирічна війна ", em("1454–1466"), ", II торунський мир ", em("1466"), ". Привілеї: ", em("Кошиці 1374"), ", ", em("Nihil novi 1505"), "."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "rozbicie dzielnicowe — podział Polski po 1138 na księstwa", ua: "удільна роздробленість — поділ Польщі після 1138 на князівства" },
        { pl: "unia personalna (Krewo) — wspólny władca Polski i Litwy", ua: "персональна унія (Крево) — спільний володар Польщі і Литви" },
        { pl: "przywilej koszycki — 1374, ustępstwa Ludwika wobec szlachty", ua: "кошицький привілей — 1374, поступки Людовика шляхті" },
        { pl: "Nihil novi — 1505, nic nowego bez sejmu", ua: "Nihil novi — 1505, нічого нового без сейму" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "1226",
      timelineYear: 1226,
      task: {
        id: "r7-pam-1226",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Konrad Mazowiecki sprowadził Krzyżaków? Wpisz rok (np. 1226).",
          ua: "В якому році Конрад Мазовецький запросив хрестоносців? Введи рік (напр. 1226)."
        },
        answer: 1226,
        hint: { pl: "Przed Gąsawą 1227 i Legnicą 1241.", ua: "Перед Гонсавою 1227 і Легницею 1241." },
        explanation: { pl: "1226. Gąsawa 1227. Legnica 1241.", ua: "1226. Гонсава 1227. Легниця 1241." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "1320",
      timelineYear: 1320,
      task: {
        id: "r7-pam-1320",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku koronowano Władysława Łokietka? Wpisz rok (np. 1320).",
          ua: "В якому році коронували Владислава Локетека? Введи рік (напр. 1320)."
        },
        answer: 1320,
        hint: { pl: "Po Przemysle 1295 i Wacławie 1300. Na osi: Łokietek.", ua: "Після Пшемисла 1295 і Вацлава 1300. На осі: Локетек." },
        explanation: { pl: "1320. Pomorze utracone 1309. Płowce 1331.", ua: "1320. Помор’я втрачене 1309. Пловці 1331." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "1385",
      timelineYear: 1385,
      task: {
        id: "r7-pam-1385",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zawarto unię w Krewie? Wpisz rok (np. 1385).",
          ua: "В якому році укладено унію в Креві? Введи рік (напр. 1385)."
        },
        answer: 1385,
        hint: { pl: "Jagiełło i Jadwiga. Przed Grunwaldem.", ua: "Ягайло і Ядвіга. Перед Грюнвальдом." },
        explanation: { pl: "1385. Grunwald 1410. Horodło 1413.", ua: "1385. Грюнвальд 1410. Городло 1413." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r7-pam-nihil",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się konstytucja z 1505 roku („nic nowego” bez sejmu)? Wpisz łacińską nazwę.",
          ua: "Як називається конституція 1505 року («нічого нового» без сейму)? Введи латинську назву."
        },
        answer: ["Nihil novi", "nihil novi", "Nihil Novi"],
        hint: { pl: "Dwie łacińskie słowa. Para KN z Koszycami 1374. Nie Nieszawa.", ua: "Два латинські слова. Пара KN з Кошицями 1374. Не Нешава." },
        explanation: { pl: "Nihil novi 1505. Koszyce 1374. Nieszawa nie jest parą KN tej lekcji.", ua: "Nihil novi 1505. Кошиці 1374. Нешава не є парою KN цього уроку." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r7-roz-krzyzacy",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego sprowadzenie Krzyżaków (1226) miało ciężkie skutki?",
          ua: "Чому запрошення хрестоносців (1226) мало важкі наслідки?"
        },
        options: [
          { id: "a", label: { pl: "zakon zbudował własne państwo i później zabrał Pomorze (1309); spór trwał aż do Grunwaldu i Torunia", ua: "орден збудував власну державу і пізніше забрав Помор’я (1309); спір тривав аж до Грюнвальду і Торуня" } },
          { id: "b", label: { pl: "bo Krzyżacy ochrzcili Mieszka w 966", ua: "бо хрестоносці охрестили Мешка в 966" } },
          { id: "c", label: { pl: "bo wtedy upadł Rzym", ua: "бо тоді упав Рим" } }
        ],
        answer: "a",
        hint: { pl: "Przyczyna (1226) → Pomorze 1309 → Grunwald 1410 → 1466.", ua: "Причина (1226) → Помор’я 1309 → Грюнвальд 1410 → 1466." },
        explanation: { pl: "966 i 476 to inne rozdziały.", ua: "966 і 476 — інші розділи." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r7-roz-stany",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co zmieniły przywileje Koszyce 1374 i Nihil novi 1505?",
          ua: "Що змінили привілеї Кошиці 1374 і Nihil novi 1505?"
        },
        options: [
          { id: "a", label: { pl: "król przestaje rządzić sam — szlachta i sejm ograniczają władzę", ua: "король перестає правити сам — шляхта і сейм обмежують владу" } },
          { id: "b", label: { pl: "Polska wraca do prawa faraona", ua: "Польща повертається до права фараона" } },
          { id: "c", label: { pl: "znoszą chrzest Polski", ua: "скасовують хрещення Польщі" } }
        ],
        answer: "a",
        hint: { pl: "Monarchia stanowa. Nie mylić z Nieszawą jako parą KN.", ua: "Станова монархія. Не плутати з Нешавою як парою KN." },
        explanation: { pl: "1374 i 1505 = KN lekcji 38. Unia lubelska 1569 nie jest w tym kursie.", ua: "1374 і 1505 = KN уроку 38. Люблінська унія 1569 не в цьому курсі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r7-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "1226 Krzyżacy → 1241 Legnica → 1320 Łokietek → 1333 Kazimierz → 1385 Krewo → 1410 Grunwald → 1466 Toruń → 1505 Nihil novi", ua: "1226 хрестоносці → 1241 Легниця → 1320 Локетек → 1333 Казимир → 1385 Крево → 1410 Грюнвальд → 1466 Торунь → 1505 Nihil novi" } },
          { id: "b", label: { pl: "Grunwald → chrzest 966 → Krzyżacy", ua: "Грюнвальд → хрещення 966 → хрестоносці" } },
          { id: "c", label: { pl: "Nihil novi → Gąsawa → Przemysł II", ua: "Nihil novi → Гонсава → Пшемисл II" } }
        ],
        answer: "a",
        hint: { pl: "Od rozbicia do sejmu. 966 należy do rozdziału VI.", ua: "Від роздробленості до сейму. 966 належить до розділу VI." },
        explanation: { pl: "W środku osi mieszczą się też 1227, 1295, 1300, 1309, 1331, 1343, 1364, 1374, 1413, 1444, 1454.", ua: "У середині осі також 1227, 1295, 1300, 1309, 1331, 1343, 1364, 1374, 1413, 1444, 1454." }
      }
    },
    {
      type: "check",
      heading: { pl: "Mapa", ua: "Карта" },
      visual: gh("298", {
        kind: "map-placeholder",
        alt: { pl: "Polska i Litwa po unii", ua: "Польща і Литва після унії" },
        title: { pl: "Dwa państwa, jeden władca", ua: "Дві держави, один володар" },
        prompt: { pl: "Istniejąca mapa lekcji 36.", ua: "Існуюча карта уроку 36." }
      }),
      task: {
        id: "r7-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co pokazuje mapa po unii w Krewie?",
          ua: "Що показує карта після унії в Креві?"
        },
        options: [
          { id: "a", label: { pl: "Polskę i Litwę związane wspólnym władcą; Krzyżacy między nimi nad Bałtykiem", ua: "Польщу і Литву, зв’язані спільним володарем; хрестоносці між ними над Балтикою" } },
          { id: "b", label: { pl: "tylko Egipt nad Nilem", ua: "лише Єгипет над Нілом" } },
          { id: "c", label: { pl: "tylko polis Ateny i Spartę", ua: "лише поліси Афіни і Спарту" } }
        ],
        answer: "a",
        hint: { pl: "Dwa państwa, zakon między nimi. Grunwald jest na styku tego sporu.", ua: "Дві держави, орден між ними. Грюнвальд — на стику цієї суперечки." },
        explanation: { pl: "Krewo ≠ unia lubelska 1569 (poza klasą 5).", ua: "Крево ≠ Люблінська унія 1569 (поза 5 класом)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1410",
      timelineYear: 1410,
      task: {
        id: "r7-sp-1410",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku stoczono bitwę pod Grunwaldem? Wpisz rok (np. 1410).",
          ua: "В якому році відбулася битва під Грюнвальдом? Введи рік (напр. 1410)."
        },
        answer: 1410,
        hint: { pl: "Po Krewie, przed Horodłem. Na osi: Grunwald.", ua: "Після Крева, перед Городлом. На осі: Грюнвальд." },
        explanation: { pl: "1410. Horodło 1413. Warna 1444.", ua: "1410. Городло 1413. Варна 1444." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1364",
      timelineYear: 1364,
      task: {
        id: "r7-sp-1364",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Kazimierz Wielki założył Akademię Krakowską? Wpisz rok (np. 1364).",
          ua: "В якому році Казимир Великий заснував Краківську академію? Введи рік (напр. 1364)."
        },
        answer: 1364,
        hint: { pl: "Po koronacji 1333 i pokoju kaliskim 1343.", ua: "Після коронації 1333 і каліського миру 1343." },
        explanation: { pl: "1364. Trzy daty KN Kazimierza: 1333, 1343, 1364.", ua: "1364. Три дати KN Казимира: 1333, 1343, 1364." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1466",
      timelineYear: 1466,
      task: {
        id: "r7-sp-1466",
        type: "true-false",
        level: "A",
        question: {
          pl: "II pokój toruński 1466 zakończył wojnę trzynastoletnią (od 1454) — prawda czy fałsz?",
          ua: "II торунський мир 1466 закінчив тринадцятирічну війну (від 1454) — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Kazimierz Jagiellończyk. Nie mylić z pokojem kaliskim 1343.", ua: "Казимир Ягеллончик. Не плутати з каліським миром 1343." },
        explanation: { pl: "Prawda. 1343 = Kazimierz Wielki i Krzyżacy. 1466 = zwrot Pomorza Gdańskiego.", ua: "Правда. 1343 = Казимир Великий і хрестоносці. 1466 = повернення Гданського Помор’я." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 4 zdaniach: rozbicie → Łokietek i Kazimierz → unia i Grunwald → sejm. Potem wybierz streszczenie.",
        ua: "У 4 реченнях: роздробленість → Локетек і Казимир → унія і Грюнвальд → сейм. Потім вибери стислий виклад."
      },
      task: {
        id: "r7-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział VII — i cały kurs klasy 5?",
          ua: "Яке речення замикає розділ VII — і весь курс 5 класу?"
        },
        options: [
          { id: "a", label: { pl: "Po rozbiciu Polska znów ma króla, Kazimierz umacnia państwo, unia z Litwą i Grunwald zmienia układ z Krzyżakami, a przywileje prowadzą do monarchii stanowej (1374, 1505)", ua: "Після роздробленості Польща знову має короля, Казимир зміцнює державу, унія з Литвою і Грюнвальд змінюють уклад з хрестоносцями, а привілеї ведуть до станової монархії (1374, 1505)" } },
          { id: "b", label: { pl: "To tylko lekcja o piramidach i Nilu", ua: "Це лише урок про піраміди і Ніл" } },
          { id: "c", label: { pl: "To lekcja o demokracji Aten bez Polski", ua: "Це урок про демократію Афін без Польщі" } }
        ],
        answer: "a",
        hint: { pl: "XIII–XV w. w Polsce. Egipt i Ateny = początek podręcznika.", ua: "XIII–XV ст. в Польщі. Єгипет і Афіни = початок підручника." },
        explanation: { pl: "Nie testujemy unii lubelskiej 1569 — poza KN klasy 5.", ua: "Не тестуємо Люблінську унію 1569 — поза KN 5 класу." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę znać ludzi: Konrad Mazowiecki, Henryk Pobożny, Przemysł II, Wacław II, Łokietek, Kazimierz Wielki, Jadwiga, Jagiełło, Witold, Kazimierz Jagiellończyk, Ludwik Węgierski.",
          ["Łokietek", "Kazimierz Wielki", "Jagiełło"],
          "Мушу знати людей: Конрад Мазовецький, Генрик Побожний, Пшемисл II, Вацлав II, Локетек, Казимир Великий, Ядвіга, Ягайло, Вітовт, Казимир Ягеллончик, Людовик Угорський.",
          ["Локетек", "Казимир Великий", "Ягайло"]
        ),
        mark(
          "Muszę pamiętać: 1226, 1227, 1241, 1295, 1300, 1309, 1320, 1331, 1333, 1343, 1364, 1374, 1385, 1410, 1413, 1444, 1454–1466, 1505.",
          ["1320", "1385", "1410"],
          "Мушу пам’ятати: 1226, 1227, 1241, 1295, 1300, 1309, 1320, 1331, 1333, 1343, 1364, 1374, 1385, 1410, 1413, 1444, 1454–1466, 1505.",
          ["1320", "1385", "1410"]
        ),
        mark(
          "Potrafię powiedzieć: rozbite księstwa znów stały się królestwem, unia z Litwą pokonała Krzyżaków, a szlachta ograniczyła króla dokumentami.",
          ["królestwem", "unią", "szlachta"],
          "Можу сказати: роздроблені князівства знову стали королівством, унія з Литвою перемогла хрестоносців, а шляхта обмежила короля документами.",
          ["королівством", "унія", "шляхта"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 33–38. Nie ucz się unii lubelskiej 1569 ani Nieszawy jako pary KN — w klasie 5 obowiązują Koszyce 1374 i Nihil novi 1505.",
          "Mini-notatka powyżej to konspekt na 4 zdania przy tablicy."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 33–38. Не вчи Люблінську унію 1569 і Нешаву як пару KN — у 5 класі чинні Кошиці 1374 і Nihil novi 1505.",
          "Міні-нотатка вище — конспект на 4 речення біля дошки."
        ]
      }
    }
  ]
};
