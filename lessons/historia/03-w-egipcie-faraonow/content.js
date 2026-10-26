function em(text) {
  return { text: text, emphasis: true };
}

function L(pl, ua, ru) {
  return { pl: pl, ua: ua, ru: ru };
}

function mark(pl, plMarks, ua, uaMarks, ru, ruMarks) {
  const row = {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
  if (ru) row.ru = { t: ru, mark: ruMarks || [] };
  return row;
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

const IMG = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/";

window.EduMostLessonContent = {
  intro: {
    image: "./img/mapa-egipt-zeszyt.jpg",
    alt: L(
      "Mapa starożytnego Egiptu: Nil, pustynia i morza",
      "Карта стародавнього Єгипту: Ніл, пустеля і моря",
      "Карта Древнего Египта: Нил, пустыня и моря"
    ),
    title: L(
      "W Egipcie faraonów",
      "W Egipcie faraonów — В Єгипті фараонів",
      "Древний Египет — страна фараонов и великих пирамид"
    ),
    text: {
      pl: [
        "Wyobraź sobie kraj, w którym wielka rzeka pomagała zbierać plony, władcy uchodzili za bardzo potężnych, a dla zmarłych budowano ogromne grobowce.",
        "Takim krajem był starożytny Egipt.",
        "Dziś zobaczymy, jak ten kraj był urządzony, kto rządził ludźmi, w co wierzyli Egipcjanie i jak powstawały piramidy oraz pismo.",
        "Zanim zaczniemy: jak myślisz, dlaczego życie starożytnego Egiptu było tak mocno związane z Nilem? Pomyśl chwilę. Poprawnej odpowiedzi jeszcze nie trzeba znać."
      ],
      ua: [
        "Уяви країну, в якій велика річка допомагала збирати врожай, правителів уважали дуже могутніми, а для померлих будували величезні гробниці.",
        "Такою країною був стародавній Єгипет.",
        "Сьогодні побачимо, як ця країна була влаштована, хто правив людьми, у що вірили єгиптяни і як виникали піраміди та письмо.",
        "Перш ніж почнемо: як гадаєш, чому життя стародавнього Єгипту було так тісно пов’язане з Нілом? Подумай хвилину. Правильної відповіді ще не треба знати."
      ],
      ru: [
        "Представь страну, в которой огромная река помогала выращивать урожай, правители считались очень могущественными, а для умерших строили величественные гробницы.",
        "Такой страной был Древний Египет.",
        "Сегодня мы узнаем, как была устроена эта страна, кто управлял людьми, во что верили египтяне и как они создавали пирамиды и письменность.",
        "Как ты думаешь, почему жизнь Древнего Египта была так тесно связана с рекой Нил? Подумай немного. Правильный ответ пока знать не нужно."
      ]
    },
    missionLabel: L(
      "W tej lekcji poznasz 5 rzeczy",
      "У цьому уроці дізнаєшся 5 речей",
      "В этом уроке мы узнаем 5 главных вещей"
    ),
    mission: L(
      "1. Gdzie leżał Egipt i dlaczego Nil był ważny. 2. Kim był faraon i jak wyglądało społeczeństwo. 3. W co wierzyli Egipcjanie. 4. Jak powstawały piramidy i mumie. 5. Jakie osiągnięcia zostawili.",
      "1. Де лежав Єгипет і чому Ніл був важливий. 2. Ким був фараон і як виглядало суспільство. 3. У що вірили єгиптяни. 4. Як виникали піраміди і мумії. 5. Які досягнення вони залишили.",
      "1. Где был Египет и почему Нил был так важен. 2. Кем был фараон и как выглядело общество. 3. Во что верили древние египтяне. 4. Как появлялись пирамиды и мумии. 5. Какие достижения оставили египтяне."
    ),
    ready: L("Gotów? Ruszamy.", "Готовий? Рушаємо.", "Готов? Начинаем."),
    button: L("Zaczynamy podróż →", "Почати подорож →", "Начать путешествие →"),
    short: L(
      "Krótka powtórka: Nil, faraon, politeizm, mumia, sarkofag, piramida, hieroglify.",
      "Коротке повторення: Ніл, фараон, політеїзм, мумія, саркофаг, піраміда, ієрогліфи.",
      "Короткое повторение: Нил, фараон, политеизм, мумия, саркофаг, пирамида и иероглифы."
    )
  },
  modules: [
    { id: "nil", title: L("1. Nil", "1. Ніл", "1. Нил") },
    { id: "faraon", title: L("2. Faraon", "2. Фараон", "2. Фараон") },
    { id: "spoleczenstwo", title: L("3. Społeczeństwo", "3. Суспільство", "3. Общество") },
    { id: "religia", title: L("4. Bogowie", "4. Боги", "4. Боги") },
    { id: "grobowce", title: L("5. Grobowce", "5. Гробниці", "5. Гробницы") },
    { id: "osiagniecia", title: L("6. Osiągnięcia", "6. Досягнення", "6. Достижения") },
    { id: "powtorka", title: L("7. Powtórka", "7. Повторення", "7. Повторение") }
  ],
  blocks: [
    {
      type: "intro",
      module: "nil",
      timelineYear: 3000,
      heading: L("W Egipcie faraonów", "В Єгипті фараонів", "В Египте фараонов"),
      formula: "ok. 3000 p.n.e. · Nil",
      text: {
        pl: [
          "Około 3 tysięcy lat p.n.e. na północy Afryki, w dolinie Nilu, powstało państwo egipskie.",
          "Dziś: dar rzeki, faraon i korony, piramida społeczeństwa, bogowie i mumie, piramidy, skarb Tutenchamona."
        ],
        ua: [
          "Близько 3 тисяч років до н.е. на півночі Африки, в долині Нілу, виникла єгипетська держава.",
          "Сьогодні: дар річки, фараон і корони, піраміда суспільства, боги і мумії, піраміди, скарб Тутанхамона."
        ],
        ru: [
          "Около 3000 года до н. э. на севере Африки, в долине Нила, возникло египетское государство.",
          "Дальше по очереди: дар реки, фараон, общество, боги и мумии, пирамиды и сокровище Тутанхамона."
        ]
      }
    },
    {
      type: "goal",
      module: "nil",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("pokazać Egipt i Nil na mapie", "показати Єгипет і Ніл на карті", "показать Египет и Нил на карте"),
        L("wyjaśnić, co znaczy „Egipt darem Nilu”", "пояснити, що означає «Єгипет — дар Нілу»", "объяснить, что значит «Egipt darem Nilu»")
      ]
    },
    {
      type: "concept",
      module: "nil",
      heading: L("Egipt darem Nilu", "Єгипет — дар Нілу", "Египет — дар Нила"),
      formula: "wylewy → muł → pola",
      text: {
        pl: [
          "Państwo powstało nad Nilem. Rzeka regularnie wylewała i zostawiała żyzny muł. Gdy woda opadała, zaczynały się prace polowe.",
          "Ludzie kopali kanały nawadniające, żeby woda szła dalej od koryta. Życie trzymało się rzeki — dalej była pustynia.",
          ["Starożytne powiedzenie: ", em("Egipt darem Nilu"), " — bez wylewów nie byłoby uprawy, bez uprawy nie powstałoby silne państwo."]
        ],
        ua: [
          "Держава виникла над Нілом. Річка регулярно розливалася і лишала родючий мул. Коли вода спадала, починалися польові роботи.",
          "Люди копали зрошувальні канали, щоб вода йшла далі від русла. Життя трималося річки — далі була пустеля.",
          ["Давнє прислів’я: ", em("Єгипет — дар Нілу"), " — без розливів не було б обробітку, без обробітку не виникла б сильна держава."]
        ],
        ru: [
          "Древний Египет вырос у Нила. Река регулярно разливалась и оставляла плодородный ил. Когда вода спадала, начинались полевые работы.",
          "Люди копали каналы, чтобы вода шла дальше от русла. Жизнь держалась реки. Дальше была пустыня.",
          ["Древняя мысль звучит по-польски так: ", em("Egipt darem Nilu"), " — «Египет — дар Нила». Без разливов не было бы земледелия, без земледелия не было бы сильного государства."]
        ]
      }
    },
    {
      type: "algorithm",
      module: "nil",
      heading: L("Nil → państwo", "Ніл → держава", "Нил → государство"),
      reveal: true,
      text: L(
        ["Otwieraj po jednym kroku."],
        ["Відкривай по одному кроку."],
        ["Открывай по одному шагу."]
      ),
      steps: [
        { formula: "NIL", text: L("Woda i żyzny muł. Dalej pustynia.", "Вода і родючий мул. Далі пустеля.", "Вода и плодородный ил. Дальше пустыня.") },
        { formula: "PLONY", text: L("Po wylewie ludzie uprawiają pola w dolinie i w delcie.", "Після розливу люди обробляють поля в долині і в дельті.", "После разлива люди обрабатывают поля в долине и в дельте.") },
        { formula: "OSADY", text: L("Można wyżywić wielu ludzi w jednym miejscu.", "Можна прогодувати багатьох людей в одному місці.", "Можно прокормить много людей в одном месте.") },
        { formula: "PAŃSTWO", text: L("Powstaje silne państwo z faraonem.", "Виникає сильна держава з фараоном.", "Возникает сильное государство с фараоном.") }
      ]
    },
    {
      type: "visual",
      module: "nil",
      heading: L("Mapa: starożytny Egipt", "Карта: стародавній Єгипет", "Карта: Древний Египет"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-egipt-zeszyt.jpg",
        file: "Historia/018.png",
        alt: L(
          "Mapa Egiptu: Nil, Giza, Morze Śródziemne i Morze Czerwone",
          "Карта Єгипту: Ніл, Гіза, Середземне і Червоне моря",
          "Карта Египта: Нил, Гиза, Средиземное и Красное моря"
        ),
        title: L("Nil, dwa morza, Giza", "Ніл, два моря, Гіза", "Нил, два моря, Гиза")
      },
      text: {
        pl: [
          "Praca z mapą: dwa morza, zielona wstęga pól, pustynia dalej.",
          ["Uwaga: ", em("Egipt Dolny"), " to delta na północy, ", em("Egipt Górny"), " — dolina na południu. Rzeka płynie „w dół” do morza."],
          "Nil wpada do Morza Śródziemnego. Na wschodzie leży Morze Czerwone. Piramidy, o których mówi zeszyt, stoją w Gizie — na północy, przy delcie."
        ],
        ua: [
          "Робота з картою: два моря, зелена стрічка полів, пустеля далі.",
          ["Увага: ", em("Нижній Єгипет"), " — дельта на півночі, ", em("Верхній Єгипет"), " — долина на півдні. Річка тече «вниз» до моря."],
          "Ніл впадає в Середземне море. На сході лежить Червоне море. Піраміди, про які каже зошит, стоять у Гізі — на півночі, біля дельти."
        ],
        ru: [
          "На карте ищи зелёную полосу полей вдоль реки. Дальше пустыня.",
          ["Ловушка: ", em("Egipt Dolny"), " — Нижний Египет — это дельта на севере. ", em("Egipt Górny"), " — Верхний Египет — долина на юге. Река течёт «вниз», к морю на севере."],
          "Nil впадает в Morze Śródziemne — Средиземное море. На востоке Morze Czerwone — Красное море. Пирамиды из тетради стоят в Gizie, на севере, у дельты."
        ]
      },
      task: {
        id: "h03-map-morza",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Nad brzegami których dwóch mórz leżał starożytny Egipt?",
          "Над берегами яких двох морів лежав стародавній Єгипет?",
          "У каких двух морей лежал Древний Египет?"
        ),
        options: [
          { id: "a", label: L("Morze Bałtyckie i Morze Czarne", "Балтійське і Чорне моря", "Балтийское и Чёрное моря") },
          { id: "b", label: L("Morze Śródziemne i Morze Czerwone", "Середземне і Червоне моря", "Средиземное и Красное моря") },
          { id: "c", label: L("Ocean Atlantycki i Morze Północne", "Атлантичний океан і Північне море", "Атлантический океан и Северное море") }
        ],
        answer: "b",
        hint: L(
          "Delta wpada do jednego morza; na wschodzie wąskie morze przy Synaju.",
          "Дельта впадає в одне море; на сході вузьке море біля Синаю.",
          "Дельта впадает в одно море, на востоке узкое море."
        ),
        explanation: L(
          "Morze Śródziemne (delta) i Morze Czerwone (wschód). Bałtyk to Polska.",
          "Середземне (дельта) і Червоне (схід). Балтика — це Польща.",
          "Средиземное море у дельты и Красное море на востоке. Балтика — это Польша."
        )
      }
    },
    {
      type: "practice",
      module: "nil",
      track: "both",
      heading: L("Górny i Dolny — pułapka mapy", "Верхній і Нижній — пастка карти", "Верхний и Нижний — ловушка карты"),
      task: {
        id: "h03-map-dolny",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L("Gdzie leży Egipt Dolny?", "Де лежить Нижній Єгипет?", "Где лежит Egipt Dolny — Нижний Египет?"),
        options: [
          { id: "a", label: L("na południu, w górnym biegu Nilu", "на півдні, у верхній течії Нілу", "на юге, в верхнем течении Нила") },
          { id: "b", label: L("na północy, w delcie przy Morzu Śródziemnym", "на півночі, в дельті біля Середземного моря", "на севере, в дельте у Средиземного моря") },
          { id: "c", label: L("w Mezopotamii, między Tygrysem i Eufratem", "у Месопотамії, між Тигром і Євфратом", "в Месопотамии, между Тигром и Евфратом") }
        ],
        answer: "b",
        hint: L(
          "„Dolny” znaczy bliżej ujścia — woda spływa do morza na północy.",
          "«Нижній» означає ближче до гирла — вода стікає в море на півночі.",
          "«Нижний» значит ближе к устью. Вода течёт к морю на севере."
        ),
        explanation: L(
          "Dolny = delta na północy. Górny = dolina na południu. To nie „góra kartki”.",
          "Нижній = дельта на півночі. Верхній = долина на півдні. Це не «верх аркуша».",
          "Нижний Египет — дельта на севере. Верхний — долина на юге. Это не «верх листа»."
        )
      }
    },
    {
      type: "visual",
      module: "nil",
      heading: L("Woda na pola", "Вода на поля", "Вода на поля"),
      visual: gh("019", {
        kind: "image-placeholder",
        alt: L(
          "Egipcjanie czerpią wodę żurawiem na pola przy palmach",
          "Єгиптяни черпають воду журавлем на поля біля пальм",
          "Египтяне поднимают воду журавлём на поля у пальм"
        ),
        title: L("Żuraw, kanały, palmy", "Журавель, канали, пальми", "Журавль, каналы, пальмы")
      }),
      text: {
        pl: [
          "Jak w Mezopotamii: woda sama nie idzie na suche pola. Trzeba kanałów i dźwigni.",
          "Gdzie rosło zboże? Tylko w wąskiej dolinie i w delcie."
        ],
        ua: [
          "Як у Месопотамії: вода сама не йде на сухі поля. Потрібні канали і важіль.",
          "Де росло збіжжя? Лише у вузькій долині і в дельті."
        ],
        ru: [
          "Как в Месопотамии: сама вода на сухие поля не идёт. Нужны каналы и рычаг — żuraw.",
          "Зерно росло только в узкой долине и в дельте."
        ]
      },
      task: {
        id: "h03-map-pola",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Gdzie w Egipcie leżały tereny uprawne?", "Де в Єгипті лежали землі під посіви?", "Где в Египте были поля?"),
        options: [
          { id: "a", label: L("w wąskiej dolinie i delcie Nilu", "у вузькій долині і дельті Нілу", "в узкой долине и в дельте Нила") },
          { id: "b", label: L("na całej Saharze po horyzont", "на всій Сахарі до обрію", "по всей Сахаре до горизонта") },
          { id: "c", label: L("tylko w górach Europy", "лише в горах Європи", "только в горах Европы") }
        ],
        answer: "a",
        hint: L("Na mapie zieleń trzyma się rzeki.", "На карті зелень тримається річки.", "На карте зелень держится реки."),
        explanation: L(
          "Pola i pastwiska — wzdłuż Nilu. Reszta to pustynia.",
          "Поля і пасовища — вздовж Нілу. Решта — пустеля.",
          "Поля и пастбища — вдоль Нила. Остальное — пустыня."
        )
      }
    },
    {
      type: "observe",
      module: "nil",
      heading: L("Ciekawostka: źródła Nilu", "Цікавинка: витоки Нілу", "Наблюдение: истоки Нила"),
      text: {
        pl: ["Egipcjanie nie wiedzieli, skąd biorą się wylewy. Deszcze padają w górnym biegu — a do źródeł (ponad 6 tys. km) Europejczycy dotarli dopiero w XIX wieku."],
        ua: ["Єгиптяни не знали, звідки беруться розливи. Дощі падають у верхній течії — а до витоків (понад 6 тис. км) європейці дісталися лише в XIX столітті."],
        ru: ["Египтяне не знали, откуда берутся разливы. Дожди идут в верхнем течении. До истоков, больше 6 тысяч километров, европейцы дошли только в XIX веке. Это дополнение, не главный пункт sprawdzianu."]
      }
    },
    {
      type: "guided-practice",
      module: "nil",
      track: "both",
      heading: L("Krótka kontrola", "Коротка перевірка", "Короткая проверка"),
      task: {
        id: "h03-guided-nil",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Co oznacza powiedzenie „Egipt darem Nilu”?",
          "Що означає прислів’я «Єгипет — дар Нілу»?",
          "Что значит «Egipt darem Nilu»?"
        ),
        options: [
          { id: "a", label: L("że Nil był groźnym wrogiem, którego należało osuszyć", "що Ніл був грізним ворогом, якого треба було висушити", "что Нил был опасным врагом, которого надо было осушить") },
          { id: "b", label: L("że bez wylewów nie byłoby rolnictwa ani silnego państwa", "що без розливів не було б рільництва ні сильної держави", "что без разливов не было бы земледелия и сильного государства") },
          { id: "c", label: L("że Egipt leżał między Tygrysem i Eufratem", "що Єгипет лежав між Тигром і Євфратом", "что Египет лежал между Тигром и Евфратом") }
        ],
        answer: "b",
        hint: L(
          "Bez Nilu niemożliwa uprawa, bez uprawy — silne państwo.",
          "Без Нілу неможливий обробіток, без обробітку — сильна держава.",
          "Без Нила нет полей, без полей нет сильного государства."
        ),
        explanation: L(
          "Rzeka karmi pola. Pola karmią ludzi i państwo.",
          "Річка годує поля. Поля годують людей і державу.",
          "Школьная мысль: без разливов Нила не было бы земледелия и сильного государства."
        )
      }
    },
    {
      type: "practice",
      module: "nil",
      heading: L("Zeszyt, strona 9, zadanie 1", "Зошит, сторінка 9, завдання 1", "Тетрадь, страница 9, задание 1"),
      visual: {
        kind: "image-placeholder",
        url: "./img/diagram-zeszyt.jpg",
        alt: L("Diagram liter z zeszytu", "Діаграма літер із зошита", "Буквенная схема из тетради"),
        title: L("Trzy wyrazy", "Три слова", "Три слова")
      },
      zeszyt: {
        id: "h03-z9-1",
        lead: L(
          ["Strona 9, zadanie 1. Wykreśl z diagramu trzy wyrazy, które tworzą ważną myśl. Zapisz hasło i wyjaśnij je. Najpierw sam."],
          ["Сторінка 9, завдання 1. Викресли з діаграми три слова, які творять важливу думку. Запиши гасло і поясни його. Спочатку сам."],
          ["Страница 9, задание 1. Вычеркни из схемы три слова, которые складываются в важную древнюю мысль. Запиши её и объясни. Сначала сам."]
        ),
        answers: [
          {
            label: L("Hasło", "Гасло", "Мысль"),
            text: L(
              ["Egipt darem Nilu"],
              ["Egipt darem Nilu"],
              ["Egipt darem Nilu"]
            ),
            why: L(
              ["W pierwszym rzędzie jest EGIPT, w drugim DAREM, w trzecim NILU. To powiedzenie z lekcji: bez wylewów Nilu nie byłoby uprawy ani silnego państwa."],
              ["У першому рядку є EGIPT, у другому DAREM, у третьому NILU. Це думка з уроку: без розливів Нілу не було б обробітку ні сильної держави."],
              ["В первом ряду подряд стоят буквы EGIPT, во втором DAREM, в третьем NILU. Это та же мысль урока: без разливов Нила не было бы земледелия и сильного государства. Другое объяснение с тем же смыслом тоже подходит."]
            )
          }
        ]
      }
    },
    {
      type: "visual",
      module: "nil",
      heading: L("Zeszyt, strona 9, zadanie 2", "Зошит, сторінка 9, завдання 2", "Тетрадь, страница 9, задание 2"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-egipt-zeszyt.jpg",
        alt: L("Mapa Egiptu z zeszytu: cyfry 1 i 2", "Карта Єгипту із зошита: цифри 1 і 2", "Карта Египта из тетради: цифры 1 и 2"),
        title: L("Mapa z zeszytu", "Карта із зошита", "Карта из тетради")
      },
      text: {
        pl: [
          "Pusty prostokąt leży na rzece, która przecina Egipt.",
          "Cyfra 1 jest w morzu na północ od delty. Cyfra 2 jest w długim morzu na wschodzie.",
          "Miasto piramid szukaj przy delcie, na północy. Nazwa jest już na mapie. Wybierz sam, zanim otworzysz wzór."
        ],
        ua: [
          "Порожній прямокутник лежить на річці, яка перетинає Єгипет.",
          "Цифра 1 є в морі на північ від дельти. Цифра 2 є в довгому морі на сході.",
          "Місто пірамід шукай біля дельти, на півночі. Назва вже є на карті. Вибери сам, перш ніж відкриєш зразок."
        ],
        ru: [
          "Пустой прямоугольник стоит на реке, которая пересекает Египет. Впиши её название сам.",
          "Цифра 1 — в море к северу от дельты. Цифра 2 — в длинном море на востоке.",
          "Город пирамид ищи у дельты, на севере. Его имя уже написано на карте. Выбери сам, прежде чем открыть образец."
        ]
      },
      zeszyt: {
        id: "h03-z9-2",
        lead: L(
          ["Strona 9, zadanie 2a–c. Wpisz rzekę, podkreśl miasto piramid i nazwij morza 1 i 2."],
          ["Сторінка 9, завдання 2a–c. Впиши річку, підкресли місто пірамід і назви моря 1 і 2."],
          ["Страница 9, задание 2a–c. Впиши реку, подчеркни город пирамид и подпиши моря под цифрами 1 и 2. Сначала в тетради."]
        ),
        answers: [
          {
            label: L("2a. Rzeka", "2a. Річка", "2a. Река"),
            text: L(["Nil"], ["Nil"], ["Nil"]),
            why: L(
              ["To jedyna wielka rzeka na tej mapie Egiptu. Prostokąt leży na jej biegu."],
              ["Це єдина велика річка на цій карті Єгипту. Прямокутник лежить на її течії."],
              ["Это единственная большая река Египта на карте. Прямоугольник стоит на её течении."]
            )
          },
          {
            label: L("2b. Miasto piramid", "2b. Місто пірамід", "2b. Город пирамид"),
            text: L(["Giza"], ["Giza"], ["Giza"]),
            why: L(
              ["Piramidy Cheopsa i Chefrena stoją w Gizie, przy delcie. Teby leżą dalej na południu."],
              ["Піраміди Хеопса і Хефрена стоять у Гізі, біля дельти. Фіви лежать далі на півдні."],
              ["Пирамиды Хеопса и Хефрена стоят в Гизе, у дельты. Teby лежат южнее. Подчеркни Giza."]
            )
          },
          {
            label: L("2c. Morza", "2c. Моря", "2c. Моря"),
            text: L(
              ["1 — Morze Śródziemne. 2 — Morze Czerwone."],
              ["1 — Morze Śródziemne. 2 — Morze Czerwone."],
              ["1 — Morze Śródziemne. 2 — Morze Czerwone."]
            ),
            why: L(
              ["Cyfra 1 leży w morzu na północ od delty. Cyfra 2 leży we wschodnim, długim morzu."],
              ["Цифра 1 лежить у морі на північ від дельти. Цифра 2 лежить у східному, довгому морі."],
              ["Цифра 1 стоит в море севернее дельты: Средиземное. Цифра 2 — в длинном море на востоке: Красное. Если на твоём отпечатке цифра стоит иначе, сверься с книгой."]
            )
          }
        ]
      }
    },

    {
      type: "goal",
      module: "faraon",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("powiedzieć, kim był faraon", "сказати, ким був фараон", "сказать, кем был faraon — фараон"),
        L("rozdzielić jego władzę na religię, wojsko i prawo", "розділити його владу на релігію, військо і право", "разделить его власть на религию, войско и право")
      ]
    },
    {
      type: "concept",
      module: "faraon",
      heading: L("Kim był faraon?", "Ким був фараон?", "Кем был фараон?"),
      formula: "władza nieograniczona",
      text: {
        pl: [
          ["Faraon — najważniejsza osoba w państwie. Miał ", em("nieograniczoną władzę"), ": stanowił prawa (sam im nie podlegał), był głównym sędzią, głównym kapłanem i zwierzchnikiem wojska."],
          "Ludzie widzieli w nim przedstawiciela bogów na ziemi. Zazwyczaj władcami byli mężczyźni. W XV wieku p.n.e. na czele państwa stanęła kobieta — królowa Hatszepsut."
        ],
        ua: [
          ["Фараон — найважливіша особа в державі. Мав ", em("необмежену владу"), ": встановлював закони (сам їм не підлягав), був головним суддею, головним жерцем і верховним воєначальником."],
          "Люди бачили в ньому представника богів на землі. Зазвичай володарями були чоловіки. У XV столітті до н.е. на чолі держави стала жінка — цариця Хатшепсут."
        ],
        ru: [
          ["Faraon — фараон, самый важный человек в государстве. У него была неограниченная власть."],
          "Он издавал законы и сам им не подчинялся. Он был главным судьёй, главным жрецом и главой войска.",
          "Люди видели в нём представителя богов на земле. Обычно правили мужчины. В XV веке до н. э. во главе государства стояла женщина — царица Хатшепсут."
        ]
      }
    },
    {
      type: "visual",
      module: "faraon",
      heading: L("Trzy korony", "Три корони", "Три короны"),
      visual: gh("020", {
        kind: "image-placeholder",
        alt: L(
          "Biała korona Górnego Egiptu, czerwona Dolnego i podwójna korona zjednoczenia",
          "Біла корона Верхнього Єгипту, червона Нижнього і подвійна корона об’єднання",
          "Белая корона Верхнего Египта, красная Нижнего и двойная корона объединения"
        ),
        title: L("Biała, czerwona i podwójna", "Біла, червона і подвійна", "Белая, красная и двойная")
      }),
      text: {
        pl: [["Korona składała się z dwóch części: biała — ", em("Egipt Górny"), " (dolina), czerwona — ", em("Egipt Dolny"), " (delta). Razem = jedno państwo."]],
        ua: [["Корона складалася з двох частин: біла — ", em("Верхній Єгипет"), " (долина), червона — ", em("Нижній Єгипет"), " (дельта). Разом = одна держава."]],
        ru: ["Белая корона — Верхний Египет, долина. Красная — Нижний Египет, дельта. Вместе они показывают одно государство."]
      },
      task: {
        id: "h03-korona",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Co oznaczała podwójna korona faraona?", "Що означала подвійна корона фараона?", "Что означала двойная корона фараона?"),
        options: [
          { id: "a", label: L("władzę tylko nad deltą Nilu", "владу лише над дельтою Нілу", "власть только над дельтой Нила") },
          { id: "b", label: L("zjednoczenie Egiptu Górnego i Dolnego", "об’єднання Верхнього і Нижнього Єгипту", "объединение Верхнего и Нижнего Египта") },
          { id: "c", label: L("sojusz z królami Uruk i Babilonu", "союз із царями Урука і Вавилона", "союз с царями Урука и Вавилона") }
        ],
        answer: "b",
        hint: L("Biała + czerwona. Dwie krainy, jeden władca.", "Біла + червона. Два краї, один володар.", "Белая плюс красная. Две земли, один правитель."),
        explanation: L(
          "Pschent = zjednoczenie obu krain. Nie Mezopotamia.",
          "Пшент = об’єднання обох земель. Не Месопотамія.",
          "Двойная корона значит объединение обеих земель. Это не Месопотамия."
        )
      }
    },
    {
      type: "algorithm",
      module: "faraon",
      heading: L("Trzy dziedziny władzy", "Три сфери влади", "Три области власти"),
      reveal: true,
      steps: [
        {
          formula: "RELIGIA",
          text: L(
            "Faraon był głównym kapłanem i przedstawicielem bogów na ziemi.",
            "Фараон був головним жерцем і представником богів на землі.",
            "Religia — религия. Фараон был главным жрецом и представителем богов на земле."
          )
        },
        {
          formula: "WOJSKO",
          text: L(
            "Był zwierzchnikiem wojska.",
            "Був верховним воєначальником.",
            "Wojsko — войско. Он стоял во главе армии."
          )
        },
        {
          formula: "PRAWO",
          text: L(
            "Stanowił prawa i był głównym sędzią. Sam tym prawom nie podlegał.",
            "Встановлював закони і був головним суддею. Сам цим законам не підлягав.",
            "Prawo — право. Он издавал законы и был главным судьёй. Сам этим законам не подчинялся."
          )
        }
      ]
    },
    {
      type: "practice",
      module: "faraon",
      track: "both",
      heading: L("Jaki zakres władzy?", "Який обсяг влади?", "Какой объём власти?"),
      task: {
        id: "h03-faraon-wladza",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Które zdanie najlepiej opisuje władzę faraona?",
          "Яке речення найкраще описує владу фараона?",
          "Какое предложение лучше всего описывает власть фараона?"
        ),
        options: [
          { id: "a", label: L("wybierano go na 4 lata jak prezydenta", "його обирали на 4 роки, як президента", "его выбирали на 4 года, как президента") },
          { id: "b", label: L("miał nieograniczoną władzę: prawa, sąd, kult i wojsko", "мав необмежену владу: закони, суд, культ і військо", "у него была неограниченная власть: законы, суд, культ и войско") },
          { id: "c", label: L("rządził tylko jednym miastem-państwem jak król Uruk", "правив лише одним містом-державою, як цар Урука", "он правил только одним городом-государством, как царь Урука") }
        ],
        answer: "b",
        hint: L(
          "Faraon nie podlegał prawom, które sam ustanawiał.",
          "Фараон не підлягав законам, які сам встановлював.",
          "Фараон не подчинялся законам, которые сам издавал."
        ),
        explanation: L(
          "To jedno państwo nad Nilem, nie wybory i nie suma miast-państw.",
          "Це одна держава над Нілом, не вибори і не сума міст-держав.",
          "Это одно государство на Ниле: законы, суд, религия и войско."
        )
      }
    },
    {
      type: "check",
      module: "faraon",
      track: "both",
      heading: L("Która dziedzina?", "Яка сфера?", "Какая область?"),
      task: {
        id: "h03-q-prawo",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Faraon stanowi prawa i jest głównym sędzią. Która to dziedzina?",
          "Фараон встановлює закони і є головним суддею. Яка це сфера?",
          "Фараон издаёт законы и он главный судья. Какая это область?"
        ),
        options: [
          { id: "a", label: L("religia", "релігія", "religia — религия") },
          { id: "b", label: L("wojsko", "військо", "wojsko — войско") },
          { id: "c", label: L("prawo", "право", "prawo — право") }
        ],
        answer: "c",
        hint: L("Sędzia i ustawy.", "Суддя і закони.", "Судья и законы."),
        explanation: L(
          "Prawo. Religia to kult, wojsko to armia.",
          "Право. Релігія — це культ, військо — це армія.",
          "Это prawo. Религия — культ, войско — армия."
        )
      }
    },
    {
      type: "practice",
      module: "faraon",
      heading: L("Zeszyt, strona 10, zadanie 4", "Зошит, сторінка 10, завдання 4", "Тетрадь, страница 10, задание 4"),
      zeszyt: {
        id: "h03-z10-4",
        lead: L(
          ["Strona 10, zadanie 4. Uzupełnij schemat „Zakres władzy faraona”: religia, wojsko, prawo. Najpierw napisz sam."],
          ["Сторінка 10, завдання 4. Доповни схему «Zakres władzy faraona»: релігія, військо, право. Спочатку напиши сам."],
          ["Страница 10, задание 4. Дополни схему «Zakres władzy faraona» в трёх ветках: Religia, Wojsko, Prawo. Сначала напиши сам."]
        ),
        answers: [
          {
            label: L("Religia", "Religia", "Religia — религия"),
            text: L(
              ["Faraon był głównym kapłanem i przedstawicielem bogów na ziemi."],
              ["Faraon był głównym kapłanem i przedstawicielem bogów na ziemi."],
              ["Faraon był głównym kapłanem i przedstawicielem bogów na ziemi."]
            ),
            why: L(
              ["Chodzi o kult, nie o bitwę i nie o sąd."],
              ["Ідеться про культ, не про битву і не про суд."],
              ["Здесь культ, не битва и не суд. Другая фраза с тем же смыслом тоже подходит."]
            )
          },
          {
            label: L("Wojsko", "Wojsko", "Wojsko — войско"),
            text: L(
              ["Faraon był zwierzchnikiem wojska."],
              ["Faraon był zwierzchnikiem wojska."],
              ["Faraon był zwierzchnikiem wojska."]
            ),
            why: L(
              ["Zwierzchnik znaczy: stał na czele armii."],
              ["Верховний означає: стояв на чолі армії."],
              ["Zwierzchnik значит: он стоял во главе армии."]
            )
          },
          {
            label: L("Prawo", "Prawo", "Prawo — право"),
            text: L(
              ["Faraon stanowił prawa i był głównym sędzią."],
              ["Faraon stanowił prawa i był głównym sędzią."],
              ["Faraon stanowił prawa i był głównym sędzią."]
            ),
            why: L(
              ["Sam tym prawom nie podlegał. To też warto dopisać, jeśli zostało miejsce."],
              ["Сам цим законам не підлягав. Це теж варто дописати, якщо лишилося місце."],
              ["Он сам этим законам не подчинялся. Это можно дописать, если в строке есть место."]
            )
          }
        ]
      }
    },

    {
      type: "goal",
      module: "spoleczenstwo",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("ustawić grupy od faraona do chłopów", "розставити групи від фараона до селян", "поставить группы от фараона до крестьян"),
        L("rozpoznać na rysunku pisarza, kapłana, rzemieślnika i chłopa", "розпізнати на рисунку писаря, жерця, ремісника і селянина", "узнать на рисунке писца, жреца, ремесленника и крестьянина")
      ]
    },
    {
      type: "visual",
      module: "spoleczenstwo",
      heading: L("Piramida społeczeństwa", "Піраміда суспільства", "Пирамида общества"),
      visual: gh("021", {
        kind: "image-placeholder",
        alt: L(
          "Siedem warstw: faraon, kapłani, urzędnicy, żołnierze, kupcy, rzemieślnicy, chłopi",
          "Сім шарів: фараон, жерці, урядовці, воїни, купці, ремісники, селяни",
          "Семь слоёв: фараон, жрецы, чиновники, воины, купцы, ремесленники, крестьяне"
        ),
        title: L("Od tronu do pola", "Від трону до поля", "От трона до поля")
      }),
      text: {
        pl: [
          "Im wyżej, tym więcej praw. Na czele faraon. Kapłani i urzędnicy — wykształceni (czytać i pisać). Potem żołnierze, kupcy, rzemieślnicy. Najliczniejsi — chłopi przy kanałach.",
          "Niewolników było stosunkowo niewielu — często jeńcy w domach zamożnych. Na rysunku piramidy ich nie ma, bo nie tworzyli osobnej wielkiej warstwy.",
          "Grupy nie miały tych samych praw. Pisarze należeli do urzędników: pisali dokumenty."
        ],
        ua: [
          "Що вище, то більше прав. На чолі фараон. Жерці й урядовці — освічені (читати і писати). Потім воїни, купці, ремісники. Найчисленніші — селяни при каналах.",
          "Рабів було порівняно мало — часто бранці в домах заможних. На рисунку піраміди їх немає, бо вони не творили окремого великого шару.",
          "Групи не мали однакових прав. Писарі належали до урядовців: писали документи."
        ],
        ru: [
          "Чем выше группа, тем больше у неё прав. Наверху фараон. Жрецы и чиновники умели читать и писать. Дальше воины, купцы и ремесленники. Самых много — крестьян у каналов.",
          "Рабов было сравнительно мало, часто это пленные в богатых домах. На рисунке пирамиды их нет: они не составляли отдельного большого слоя.",
          "Группы не были равны. Писцы относились к чиновникам: они писали документы."
        ]
      }
    },
    {
      type: "vocabulary",
      module: "spoleczenstwo",
      heading: L("Kto co robił?", "Хто що робив?", "Кто что делал?"),
      rows: [
        { pl: "faraon — rządził całym państwem", ua: "фараон — правив усією державою", ru: "правил всем государством" },
        { pl: "kapłan — obrzędy w świątyni", ua: "жрець — обряди в храмі", ru: "обряды в храме" },
        { pl: "pisarz / urzędnik — czytał i pisał dokumenty", ua: "писар / урядовець — читав і писав документи", ru: "читал и писал документы" },
        { pl: "rzemieślnik — wyrabiał przedmioty, na przykład naczynia", ua: "ремісник — виробляв речі, наприклад посуд", ru: "делал вещи, например посуду" },
        { pl: "chłop — uprawiał ziemię i dbał o kanały", ua: "селянин — обробляв землю і дбав про канали", ru: "обрабатывал землю и следил за каналами" },
        { pl: "kupiec — handlował", ua: "купець — торгував", ru: "торговал" },
        { pl: "żołnierz — służył w wojsku", ua: "воїн — служив у війську", ru: "служил в войске" }
      ]
    },
    {
      type: "visual",
      module: "spoleczenstwo",
      heading: L("Cztery rysunki z zeszytu", "Чотири рисунки із зошита", "Четыре рисунка из тетради"),
      visual: {
        kind: "image-placeholder",
        url: "./img/grupy-zeszyt.jpg",
        alt: L(
          "Czworo ludzi: z papirusem, w białej szacie, przy naczyniu i z motyką",
          "Четверо людей: з папірусом, у білій шаті, біля посудини і з мотикою",
          "Четверо людей: со свитком, в белой одежде, у сосуда и с мотыгой"
        ),
        title: L("Strona 10, zadanie 3", "Сторінка 10, завдання 3", "Страница 10, задание 3")
      },
      text: {
        pl: [
          "Przyjrzyj się narzędziom, nie ubraniu samemu. Kto trzyma przybory do pisania? Kto podnosi ręce przy lasce? Kto lepi naczynie? Kto kopie ziemię?",
          "Nazwy wpisz sam. Wzór otworzy się po przycisku."
        ],
        ua: [
          "Придивися до знарядь, не до самого одягу. Хто тримає приладдя для письма? Хто піднімає руки біля палиці? Хто ліпить посудину? Хто копає землю?",
          "Назви впиши сам. Зразок відкриється після кнопки."
        ],
        ru: [
          "Смотри на дело, а не только на одежду. Кто держит письменные принадлежности? Кто поднимает руки у посоха? Кто лепит сосуд? Кто копает землю?",
          "Названия напиши сам. Образец откроется после кнопки."
        ]
      }
    },
    {
      type: "problem",
      module: "spoleczenstwo",
      track: "both",
      heading: L("Odpowiedź ustna", "Усна відповідь", "Устный ответ"),
      prompt: L(
        "Wymień warstwy społeczeństwa od faraona do chłopów i powiedz, czym się zajmowały.",
        "Назви шари суспільства від фараона до селян і скажи, чим вони займалися.",
        "Назови слои общества от фараона до крестьян и скажи, чем они занимались."
      ),
      text: L(
        ["Podpowiedź: faraon → kapłani → urzędnicy → żołnierze → kupcy → rzemieślnicy → chłopi.", "Powiedz 4–6 zdań. Potem wybierz najlepsze podsumowanie."],
        ["Підказка: фараон → жерці → урядовці → воїни → купці → ремісники → селяни.", "Скажи 4–6 речень. Потім вибери найкращий підсумок."],
        ["Подсказка: фараон → жрецы → чиновники → воины → купцы → ремесленники → крестьяне.", "Скажи 4–6 предложений. Потом выбери лучший итог."]
      ),
      task: {
        id: "h03-oral",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Które zdanie najlepiej opisuje społeczeństwo Egiptu?",
          "Яке речення найкраще описує суспільство Єгипту?",
          "Какое предложение лучше всего описывает общество Египта?"
        ),
        options: [
          { id: "a", label: L("Wszyscy Egipcjanie mieli te same prawa i co roku wybierali faraona", "Усі єгиптяни мали ті самі права і щороку обирали фараона", "У всех египтян были одинаковые права, и они каждый год выбирали фараона") },
          { id: "b", label: L("Faraon u szczytu; kapłani i urzędnicy wykształceni; najliczniejsi chłopi", "Фараон на вершині; жерці й урядовці освічені; найчисленніші селяни", "Фараон наверху; жрецы и чиновники учёные; крестьян больше всех") },
          { id: "c", label: L("Społeczeństwo składało się tylko z kupców z Uruk", "Суспільство складалося лише з купців з Урука", "Общество состояло только из купцов Урука") }
        ],
        answer: "b",
        hint: L("Im wyżej, tym więcej praw — jak na piramidzie.", "Що вище, то більше прав — як на піраміді.", "Чем выше, тем больше прав."),
        explanation: L(
          "To piramida praw, nie równość obywateli Aten.",
          "Це піраміда прав, не рівність громадян Афін.",
          "Это пирамида прав. Группы не были равны."
        )
      }
    },
    {
      type: "practice",
      module: "spoleczenstwo",
      heading: L("Zeszyt, strona 10, zadanie 3", "Зошит, сторінка 10, завдання 3", "Тетрадь, страница 10, задание 3"),
      zeszyt: {
        id: "h03-z10-3",
        lead: L(
          ["Wpisz nazwy grup i napisz, czym się zajmowały. Kolejność rysunków: lewy górny, prawy górny, lewy dolny, prawy dolny."],
          ["Впиши назви груп і напиши, чим вони займалися. Порядок рисунків: лівий верхній, правий верхній, лівий нижній, правий нижній."],
          ["Впиши названия групп и чем они занимались. Порядок рисунков: верхний слева, верхний справа, нижний слева, нижний справа."]
        ),
        answers: [
          {
            label: L("Lewy górny", "Лівий верхній", "Верхний слева"),
            text: L(
              ["Pisarz. Pisał i czytał dokumenty. Pisarze należeli do urzędników."],
              ["Pisarz. Pisał i czytał dokumenty. Pisarze należeli do urzędników."],
              ["Pisarz. Pisał i czytał dokumenty. Pisarze należeli do urzędników."]
            ),
            why: L(
              ["W ręku ma przybory do pisania, nie motykę."],
              ["У руці має приладдя для письма, не мотику."],
              ["В руках письменные принадлежности, не мотыга. Если напишешь urzędnik и добавишь, что он pisał, sens zostanie."]
            )
          },
          {
            label: L("Prawy górny", "Правий верхній", "Верхний справа"),
            text: L(
              ["Kapłan. Odprawiał obrzędy religijne w świątyni."],
              ["Kapłan. Odprawiał obrzędy religijne w świątyni."],
              ["Kapłan. Odprawiał obrzędy religijne w świątyni."]
            ),
            why: L(
              ["Biała szata, laska i uniesione ręce wskazują na kult."],
              ["Біла шата, палиця і підняті руки вказують на культ."],
              ["Белая одежда, посох и поднятые руки — это культ, жрец."]
            )
          },
          {
            label: L("Lewy dolny", "Лівий нижній", "Нижний слева"),
            text: L(
              ["Rzemieślnik. Wyrabiał przedmioty, na przykład naczynia."],
              ["Rzemieślnik. Wyrabiał przedmioty, na przykład naczynia."],
              ["Rzemieślnik. Wyrabiał przedmioty, na przykład naczynia."]
            ),
            why: L(
              ["Lepi duże naczynie. To warsztat, nie pole."],
              ["Ліпить велику посудину. Це майстерня, не поле."],
              ["Он лепит большой сосуд. Это мастерская, не поле."]
            )
          },
          {
            label: L("Prawy dolny", "Правий нижній", "Нижний справа"),
            text: L(
              ["Chłop. Uprawiał ziemię i dbał o kanały."],
              ["Chłop. Uprawiał ziemię i dbał o kanały."],
              ["Chłop. Uprawiał ziemię i dbał o kanały."]
            ),
            why: L(
              ["Motyka i ziemia. Chłopi byli najliczniejszą grupą."],
              ["Мотика і земля. Селяни були найчисленнішою групою."],
              ["Мотыга и земля. Крестьяне были самой большой группой."]
            )
          }
        ]
      }
    },

    {
      type: "goal",
      module: "religia",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić słowo politeizm", "пояснити слово політеїзм", "объяснить слово politeizm — политеизм"),
        L("powiedzieć, po co zachowywano ciało po śmierci", "сказати, навіщо зберігали тіло після смерті", "сказать, зачем сохраняли тело после смерти")
      ]
    },
    {
      type: "concept",
      module: "religia",
      heading: L("Świat pełen bogów", "Світ повний богів", "Мир, полный богов"),
      formula: "politeizm",
      text: {
        pl: [
          ["Egipcjanie wierzyli w wielu bogów. To ", em("politeizm"), " (poli — wiele, theos — bóg). Zjawiska przyrody uważano za dzieło bogów. Jednych czczono w całym państwie, innych — lokalnie."],
          ["Jednym z najważniejszych był ", em("Ra"), " — bóg-słońce i pan wszechświata, często z głową sokoła i tarczą słońca."],
          "Na cześć bogów stawiano świątynie. Kapłani odprawiali obrzędy.",
          "Dla porównania: wiara w jednego Boga to monoteizm. Ten temat przyjdzie przy Izraelu. Nie mieszaj go z Egiptem."
        ],
        ua: [
          ["Єгиптяни вірили в багатьох богів. Це ", em("політеїзм"), " (полі — багато, теос — бог). Явища природи вважали ділом богів. Одних шанували в усій державі, інших — місцево."],
          ["Одним із найважливіших був ", em("Ра"), " — бог-сонце і пан всесвіту, часто з головою сокола і диском сонця."],
          "На честь богів ставили храми. Жерці правили обряди.",
          "Для порівняння: віра в одного Бога — це монотеїзм. Ця тема прийде при Ізраїлі. Не змішуй її з Єгиптом."
        ],
        ru: [
          ["Египтяне верили во многих богов. По-польски это ", em("politeizm"), " — политеизм. Poli значит «много», theos — «бог»."],
          "Явления природы считали делом богов. Одних чтили во всём государстве, других — в одном месте.",
          ["Один из главных — ", em("Ra"), " — Ра, бог солнца и владыка вселенной. Его часто изображали с головой сокола и солнечным диском."],
          "Богам строили храмы. Обряды вели жрецы.",
          "Для сравнения: вера в одного Бога — это monoteizm, монотеизм. Он будет в теме об Израиле. С Египтом его не смешивай."
        ]
      }
    },
    {
      type: "visual",
      module: "religia",
      heading: L("Ra — bóg-słońce", "Ра — бог-сонце", "Ра — бог солнца"),
      visual: gh("022", {
        kind: "image-placeholder",
        alt: L("Posąg Ra z głową sokoła i tarczą słońca", "Статуя Ра з головою сокола і диском сонця", "Статуя Ра с головой сокола и диском солнца"),
        title: L("Bóg-słońce i pan wszechświata", "Бог-сонце і пан всесвіту", "Бог солнца и владыка вселенной")
      }),
      text: {
        pl: ["Ra to jeden przykład. W kolejnym ekranie: co działo się po śmierci."],
        ua: ["Ра — один приклад. На наступному екрані: що діялося після смерті."],
        ru: ["Ра — один пример, не весь список богов. Дальше — что, по вере египтян, было после смерти."]
      }
    },
    {
      type: "concept",
      module: "religia",
      heading: L("Wiara w życie po śmierci", "Віра в життя після смерті", "Вера в жизнь после смерти"),
      text: {
        pl: [
          ["Po śmierci człowieka osądzał ", em("Ozyrys"), ". Dusza miała trwać, dopóki ciało było zachowane."],
          "Ubogich chowano w piasku pustyni — piasek sam konserwował zwłoki. Ciała zamożnych przechodziły mumifikację.",
          ["Usuwano wnętrzności, balsamowano ciało, owijano bandażami — tak powstawała ", em("mumia"), ". Potem ", em("sarkofag"), " i grobowiec."]
        ],
        ua: [
          ["Після смерті людину судив ", em("Осіріс"), ". Душа мала тривати, доки тіло було збережене."],
          "Бідних ховали в піску пустелі — пісок сам консервував тіло. Тіла заможних проходили муміфікацію.",
          ["Виймали нутрощі, бальзамували тіло, обгортали бинтами — так виникала ", em("мумія"), ". Потім ", em("саркофаг"), " і гробниця."]
        ],
        ru: [
          ["После смерти человека судил ", em("Ozyrys"), " — Осирис. Душа должна была длиться, пока сохранялось тело."],
          "Бедных хоронили в песке пустыни: песок сам сохранял тело. Тела богатых проходили мумификацию.",
          "Вынимали внутренности, бальзамировали тело и обматывали его бинтами. Так получалась мумия. Потом её клали в саркофаг и в гробницу."
        ]
      }
    },
    {
      type: "check",
      module: "religia",
      track: "both",
      heading: L("Czy to politeizm?", "Чи це політеїзм?", "Это политеизм?"),
      task: {
        id: "h03-check-tf",
        type: "true-false",
        level: "B",
        coach: true,
        question: L(
          "Egipcjanie czcili wielu bogów (politeizm) — prawda czy fałsz?",
          "Єгиптяни шанували багатьох богів (політеїзм) — правда чи неправда?",
          "Египтяне чтили многих богов. Это politeizm. Правда или ложь?"
        ),
        answer: true,
        hint: L("Ra, Ozyrys — to nie jeden Bóg.", "Ра, Осіріс — це не один Бог.", "Ра и Осирис — это не один бог."),
        explanation: L(
          "Politeizm. Monoteizm poznamy w Izraelu.",
          "Політеїзм. Монотеїзм пізнаємо в Ізраїлі.",
          "Правда. Politeizm — вера во многих богов. Монотеизм будет в теме об Израиле."
        )
      }
    },

    {
      type: "goal",
      module: "grobowce",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("odróżnić mumifikację, sarkofag i piramidę", "відрізнити муміфікацію, саркофаг і піраміду", "различить мумификацию, саркофаг и пирамиду"),
        L("powiedzieć, dlaczego budowano wielkie grobowce", "сказати, чому будували великі гробниці", "сказать, зачем строили большие гробницы")
      ]
    },
    {
      type: "vocabulary",
      module: "grobowce",
      heading: L("Trzy różne rzeczy", "Три різні речі", "Три разные вещи"),
      rows: [
        { pl: "mumifikacja — zabezpieczanie ciała przed rozkładem", ua: "муміфікація — захист тіла від розкладу", ru: "защита тела от разложения" },
        { pl: "mumia — ciało zabezpieczone i owinięte bandażami", ua: "мумія — тіло, захищене і обгорнуте бинтами", ru: "тело, сохранённое и обмотанное бинтами" },
        { pl: "sarkofag — ozdobna trumna na ciało zmarłego", ua: "саркофаг — оздоблена труна для тіла", ru: "украшенный гроб для тела" },
        { pl: "piramida — wielka budowla grobowa faraona", ua: "піраміда — велика поховальна споруда фараона", ru: "огромная гробница фараона" }
      ]
    },
    {
      type: "algorithm",
      module: "grobowce",
      heading: L("Od śmierci do grobowca", "Від смерті до гробниці", "От смерти к гробнице"),
      reveal: true,
      steps: [
        { formula: "ŚMIERĆ", text: L("Człowiek umiera. Egipcjanie wierzą, że dusza potrzebuje ciała.", "Людина вмирає. Єгиптяни вірять, що душа потребує тіла.", "Человек умирает. Египтяне верят, что душе нужно тело.") },
        { formula: "MUMIFIKACJA", text: L("Ciało suszą, balsamują i owijają bandażami.", "Тіло сушать, бальзамують і обгортають бинтами.", "Тело сушат, бальзамируют и обматывают бинтами.") },
        { formula: "SARKOFAG", text: L("Mumię wkładają do ozdobnej trumny.", "Мумію кладуть у оздоблену труну.", "Мумию кладут в украшенный гроб.") },
        { formula: "PIRAMIDA", text: L("Faraona chowają w wielkim grobowcu.", "Фараона ховають у великій гробниці.", "Фараона хоронят в огромной гробнице.") }
      ]
    },
    {
      type: "visual",
      module: "grobowce",
      heading: L("Cztery kroki mumifikacji", "Чотири кроки муміфікації", "Четыре шага мумификации"),
      visual: gh("023", {
        kind: "image-placeholder",
        alt: L("Cztery etapy: ciało, natron, bandaże, mumia", "Чотири етапи: тіло, натрон, бинти, мумія", "Четыре этапа: тело, соль, бинты, мумия"),
        title: L("Od ciała do mumii", "Від тіла до мумії", "От тела к мумии")
      }),
      task: {
        id: "h03-mummy",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Dlaczego Egipcjanie mumifikowali zwłoki?", "Чому єгиптяни муміфікували тіла?", "Зачем египтяне мумифицировали тела?"),
        options: [
          { id: "a", label: L("żeby straszyć sąsiadów na wojnie", "щоб лякати сусідів на війні", "чтобы пугать соседей на войне") },
          { id: "b", label: L("bo dusza miała trwać, dopóki ciało jest zachowane", "бо душа мала тривати, доки тіло збережене", "потому что душа должна была длиться, пока тело сохранено") },
          { id: "c", label: L("żeby sprzedawać mumie jako ozdoby domu", "щоб продавати мумії як прикраси дому", "чтобы продавать мумии как украшение дома") }
        ],
        answer: "b",
        hint: L("Ozyrys i życie pozagrobowe — nie film grozy.", "Осіріс і загробне життя — не фільм жахів.", "Осирис и жизнь после смерти. Это не фильм ужасов."),
        explanation: L(
          "Ciało miało być nienaruszone, żeby dusza mogła istnieć.",
          "Тіло мало бути неторканим, щоб душа могла існувати.",
          "Тело должно было сохраниться, чтобы душа могла существовать."
        )
      }
    },
    {
      type: "check",
      module: "grobowce",
      track: "both",
      heading: L("Nie mieszaj trzech słów", "Не плутай три слова", "Не путай три слова"),
      task: {
        id: "h03-q-trzy",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Które zdanie jest prawdziwe?", "Яке речення правдиве?", "Какое предложение верное?"),
        options: [
          { id: "a", label: L("Mumifikacja, sarkofag i piramida to ta sama rzecz", "Муміфікація, саркофаг і піраміда — це те саме", "Мумификация, саркофаг и пирамида — это одно и то же") },
          { id: "b", label: L("Mumifikacja zabezpiecza ciało, sarkofag to trumna, piramida to grobowiec", "Муміфікація захищає тіло, саркофаг — це труна, піраміда — це гробниця", "Мумификация сохраняет тело, саркофаг — это гроб, пирамида — это гробница") },
          { id: "c", label: L("Piramida to bandaże na ciele", "Піраміда — це бинти на тілі", "Пирамида — это бинты на теле") }
        ],
        answer: "b",
        hint: L("Trzy słowa, trzy różne rzeczy.", "Три слова, три різні речі.", "Три слова — три разные вещи."),
        explanation: L(
          "Najpierw zabieg, potem trumna, potem budowla.",
          "Спочатку дія, потім труна, потім споруда.",
          "Сначала действие с телом, потом гроб, потом постройка. Школьные слова: mumifikacja, sarkofag, piramida."
        )
      }
    },
    {
      type: "visual",
      module: "grobowce",
      heading: L("Po co piramidy?", "Навіщо піраміди?", "Зачем пирамиды?"),
      visual: gh("024", {
        kind: "image-placeholder",
        alt: L("Robotnicy ciągną blok po rampie", "Робітники тягнуть блок по рампі", "Рабочие тянут блок по рампе"),
        title: L("Budowa trwała dziesiątki lat", "Будова тривала десятки років", "Стройка длилась десятки лет")
      }),
      text: {
        pl: ["Piramida to grobowiec faraona. Budowa mogła trwać dziesiątki lat. Bloki wieziono Nilem. Robotnicy mieszkali w „mieście piramid”. Używano prostych dźwigni — nie dźwigów."],
        ua: ["Піраміда — гробниця фараона. Будова могла тривати десятки років. Блоки везли Нілом. Робітники жили в «місті пірамід». Використовували прості важелі — не крани."],
        ru: ["Пирамида — гробница фараона. Стройка могла длиться десятки лет. Блоки везли по Нилу. Рабочие жили в «городе пирамид». Пользовались простыми рычагами, не кранами."]
      }
    },
    {
      type: "visual",
      module: "grobowce",
      heading: L("Co jest w środku?", "Що всередині?", "Что внутри?"),
      visual: gh("025", {
        kind: "image-placeholder",
        alt: L("Przekrój piramidy: korytarze i komnata", "Перетин піраміди: коридори і камера", "Разрез пирамиды: коридоры и камера"),
        title: L("Przekrój piramidy w Gizie", "Перетин піраміди в Гізі", "Разрез пирамиды в Гизе")
      }),
      text: {
        pl: [
          "Najsłynniejsze piramidy III tysiąclecia p.n.e. stoją w Gizie: Cheops (ok. 146 m) i Chefren. Wewnątrz korytarze prowadzą do komory grobowej.",
          "Wielki Sfinks — lew z ludzką głową — strzeże terenu; uczeni wiążą twarz z Chefrenem."
        ],
        ua: [
          "Найславетніші піраміди III тисячоліття до н.е. стоять у Гізі: Хеопс (бл. 146 м) і Хефрен. Усередині коридори ведуть до поховальної камери.",
          "Великий Сфінкс — лев із людською головою — стереже терен; учені пов’язують обличчя з Хефреном."
        ],
        ru: [
          "Самые известные пирамиды III тысячелетия до н. э. стоят в Гизе: Хеопса, около 146 метров, и Хефрена. Внутри коридоры ведут к погребальной камере.",
          "Большой Сфинкс — лев с человеческой головой — стережёт это место. Учёные связывают лицо с Хефреном. По-польски: Sfinks."
        ]
      }
    },
    {
      type: "example",
      module: "grobowce",
      heading: L("Warto wiedzieć: skarb Tutenchamona", "Варто знати: скарб Тутанхамона", "Стоит знать: сокровище Тутанхамона"),
      formula: "1922 · Howard Carter",
      visual: gh("026", {
        kind: "image-placeholder",
        place: "after",
        alt: L("Grobowiec Tutenchamona", "Гробниця Тутанхамона", "Гробница Тутанхамона"),
        title: L("Grobowiec Tutenchamona", "Гробниця Тутанхамона", "Гробница Тутанхамона")
      }),
      text: {
        pl: [
          "Większość grobowców ograbiono już w starożytności. W 1922 roku Howard Carter odkrył w Dolinie Królów nienaruszony grobowiec faraona Tutenchamona.",
          "Mumia, kilka sarkofagów (jeden ze złota), ponad 5 tysięcy przedmiotów — złoto, ale też rzeczy codziennego użytku, bo zmarły miał ich potrzebować po śmierci."
        ],
        ua: [
          "Більшість гробниць пограбували ще в давнину. У 1922 році Говард Картер відкрив у Долині царів неторкану гробницю фараона Тутанхамона.",
          "Мумія, кілька саркофагів (один із золота), понад 5 тисяч предметів — золото, але й речі щоденного вжитку, бо померлий мав їх потребувати після смерті."
        ],
        ru: [
          "Большинство гробниц ограбили ещё в древности. В 1922 году Говард Картер нашёл в Долине царей нетронутую гробницу фараона Тутанхамона.",
          "Там были мумия, несколько саркофагов, один из золота, и больше 5 тысяч предметов. Золото и обычные вещи: умершему они были нужны после смерти.",
          "В книгах имя пишут Tutenchamon или Tutanchamon. Это один и тот же фараон."
        ]
      },
      task: {
        id: "h03-src-carter",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Odkrycie grobowca Tutenchamona jest ważne, bo:",
          "Відкриття гробниці Тутанхамона важливе, бо:",
          "Почему важно открытие гробницы Тутанхамона?"
        ),
        options: [
          { id: "a", label: L("grobowiec był nietknięty — zachowały się mumia i tysiące przedmiotów", "гробниця була неторкана — збереглися мумія і тисячі предметів", "гробница была нетронута: сохранились мумия и тысячи предметов") },
          { id: "b", label: L("Carter znalazł pierwszy pług na świecie", "Картер знайшов перший плуг у світі", "Картер нашёл первый в мире плуг") },
          { id: "c", label: L("okazało się, że Egipcjanie nie wierzyli w życie po śmierci", "виявилося, що єгиптяни не вірили в життя після смерті", "оказалось, что египтяне не верили в жизнь после смерти") }
        ],
        answer: "a",
        hint: L("Inne groby zwykle już wcześniej ograbiono.", "Інші гроби зазвичай уже раніше пограбували.", "Другие гробницы обычно уже были ограблены."),
        explanation: L(
          "Nietknięty grób = źródło. Złoto jest widowiskowe, ale liczy się komplet przedmiotów i wiara.",
          "Неторканий гріб = джерело. Золото ефектне, але важливим є повний набір предметів і віра.",
          "Нетронутая гробница — это источник. Важны и мумия, и вещи, и вера в жизнь после смерти."
        )
      }
    },
    {
      type: "practice",
      module: "grobowce",
      heading: L("Zeszyt, strona 11, zadanie 7", "Зошит, сторінка 11, завдання 7", "Тетрадь, страница 11, задание 7"),
      text: L(
        ["To zadanie dodatkowe. Najpierw upewnij się, że odróżniasz mumię, sarkofag i piramidę."],
        ["Це додаткове завдання. Спочатку переконайся, що відрізняєш мумію, саркофаг і піраміду."],
        ["Это дополнительное задание. Сначала убедись, что различаешь мумию, саркофаг и пирамиду."]
      ),
      zeszyt: {
        id: "h03-z11-7",
        lead: L(
          ["Strona 11, zadanie 7. Wyjaśnij, dlaczego Ozyrysa pokazywano jako człowieka owiniętego w bandaże, jak mumię."],
          ["Сторінка 11, завдання 7. Поясни, чому Осіріса показували як людину, обгорнуту в бинти, наче мумію."],
          ["Страница 11, задание 7. Объясни, почему Осириса изображали человеком, обмотанным бинтами, как мумию. Сначала напиши сам."]
        ),
        answers: [
          {
            label: L("Ozyrys", "Ozyrys", "Ozyrys — Осирис"),
            text: L(
              ["Ozyrys był bogiem śmierci i zmartwychwstania. Pokazywano go w bandażach, bo Egipcjanie wierzyli, że ciało trzeba zachować, aby dusza mogła trwać — tak jak przy mumii."],
              ["Ozyrys był bogiem śmierci i zmartwychwstania. Pokazywano go w bandażach, bo Egipcjanie wierzyli, że ciało trzeba zachować, aby dusza mogła trwać — tak jak przy mumii."],
              ["Ozyrys był bogiem śmierci i zmartwychwstania. Pokazywano go w bandażach, bo Egipcjanie wierzyli, że ciało trzeba zachować, aby dusza mogła trwać — tak jak przy mumii."]
            ),
            why: L(
              ["To wyjaśnienie z tej lekcji: sąd Ozyrysa i zachowane ciało. Dłuższy mit z innej książki możesz dopisać, jeśli nauczycielka go wymaga. Nie zastępuje on słów mumifikacja, sarkofag i piramida."],
              ["Це пояснення з цього уроку: суд Осіріса і збережене тіло. Довший міф з іншої книжки можна дописати, якщо вчителька його вимагає."],
              ["Это объяснение из нашего урока: Осирис судит умерших, а душа длится, пока сохранено тело. Поэтому его рисуют в бинтах, как мумию. Более длинный миф из другой книги можно добавить, если его просит учительница. Он не заменяет слова mumifikacja, sarkofag и piramida."]
            )
          }
        ]
      }
    },
    {
      type: "example",
      module: "grobowce",
      heading: L("Warto wiedzieć: Abu Simbel", "Варто знати: Абу-Сімбел", "Стоит знать: Абу-Симбел"),
      visual: gh("028", {
        kind: "image-placeholder",
        place: "after",
        alt: L("Świątynia Abu Simbel", "Храм Абу-Сімбел", "Храм Абу-Симбел"),
        title: L("Świątynię przeniesiono wyżej", "Храм перенесли вище", "Храм перенесли выше")
      }),
      text: {
        pl: [
          "W XX wieku budowa wielkiej tamy na Nilu groziła zalaniem skalnych świątyń w Abu Simbel. Świątynię pocięto na bloki i złożono wyżej — żeby ocalić dzieło Ramzesa II.",
          "To już nie starożytność, ale pokazuje, że zabytki Egiptu nadal trzeba chronić."
        ],
        ua: [
          "У XX столітті будова великої греблі на Нілі загрожувала затопленням скельних храмів в Абу-Сімбел. Храм порізали на блоки і склали вище — щоб врятувати твір Рамзеса II.",
          "Це вже не давнину, але показує, що пам’ятки Єгипту досі треба берегти."
        ],
        ru: [
          "В XX веке большая плотина на Ниле грозила затопить скальные храмы в Абу-Симбеле. Храм разрезали на блоки и собрали выше, чтобы спасти постройку Рамзеса II.",
          "Это уже не древность. Это дополнение: памятники Египта до сих пор нужно беречь."
        ]
      },
      task: {
        id: "h03-abu",
        type: "true-false",
        level: "C",
        coach: true,
        question: L(
          "Świątynię Abu Simbel przeniesiono, bo groziło jej zalanie po budowie tamy — prawda czy fałsz?",
          "Храм Абу-Сімбел перенесли, бо йому загрожувало затоплення після будови греблі — правда чи неправда?",
          "Храм Абу-Симбел перенесли, потому что после плотины ему грозило затопление. Правда или ложь?"
        ),
        answer: true,
        hint: L("Woda z tamy zalałaby starą lokalizację.", "Вода з греблі залила б стару локацію.", "Вода плотины затопила бы старое место."),
        explanation: L(
          "Prawda. Pocięto na bloki i złożono wyżej. To ciekawostka, nie punkt obowiązkowy ze sprawdzianu.",
          "Правда. Порізали на блоки і склали вище. Це цікавинка, не обов’язковий пункт перевірки.",
          "Правда. Храм разрезали на блоки и собрали выше. Это дополнительный факт, не обязательный пункт sprawdzianu."
        )
      }
    },

    {
      type: "goal",
      module: "osiagniecia",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić, czym są hieroglify", "пояснити, чим є ієрогліфи", "объяснить, что такое hieroglify — иероглифы"),
        L("połączyć kalendarz, medycynę i matematykę z ich zastosowaniem", "поєднати календар, медицину і математику з їх застосуванням", "связать календарь, медицину и математику с их пользой")
      ]
    },
    {
      type: "visual",
      module: "osiagniecia",
      heading: L("Dorobek cywilizacyjny", "Цивілізаційний доробок", "Достижения"),
      visual: gh("027", {
        kind: "image-placeholder",
        alt: L(
          "Hieroglify, medycyna, pomiar i kalendarz",
          "Ієрогліфи, медицина, вимір і календар",
          "Иероглифы, медицина, измерение и календарь"
        ),
        title: L("Pismo, medycyna, matematyka, astronomia", "Письмо, медицина, математика, астрономія", "Письмо, медицина, математика, астрономия")
      }),
      text: {
        pl: [
          ["Pismo obrazkowe: ", em("hieroglify"), " — ok. 6 tys. znaków; teksty religijne, dokumenty, literatura."],
          "Medycyna: dzięki mumifikacji poznawano ciało. Matematyka: obliczenia przy piramidach. Astronomia i kalendarz: rok 365 dni (12 × 30 + 5) z obserwacji Nilu i gwiazdy Syriusz."
        ],
        ua: [
          ["Образотворче письмо: ", em("ієрогліфи"), " — бл. 6 тис. знаків; релігійні тексти, документи, література."],
          "Медицина: завдяки муміфікації пізнавали тіло. Математика: розрахунки при пірамідах. Астрономія і календар: рік 365 днів (12 × 30 + 5) зі спостережень Нілу і зорі Сіріус."
        ],
        ru: [
          ["Hieroglify — иероглифы, рисуночное письмо. Около 6 тысяч знаков. Ими писали религиозные тексты, документы государства и литературные произведения."],
          "Medycyna — медицина — развивалась вместе с мумификацией: люди наблюдали тело.",
          "Matematyka — математика — была нужна для измерений и стройки пирамид.",
          "Kalendarz — календарь. Год считали как 365 дней: 12 месяцев по 30 и ещё 5. Его связали с разливами Нила и звездой Сириус."
        ]
      }
    },
    {
      type: "problem",
      module: "osiagniecia",
      track: "both",
      heading: L("Odpowiedź pisemna", "Письмова відповідь", "Письменный ответ"),
      prompt: L(
        "Wpisz, ile dni liczył rok w kalendarzu egipskim.",
        "Введи, скільки днів мав рік у єгипетському календарі.",
        "Впиши, сколько дней было в египетском году."
      ),
      task: {
        id: "h03-write",
        type: "input-number",
        level: "B",
        coach: true,
        question: L(
          "Kalendarz egipski: rok = 12 × 30 + 5. Ile dni?",
          "Єгипетський календар: рік = 12 × 30 + 5. Скільки днів?",
          "Египетский календарь: год = 12 × 30 + 5. Сколько дней?"
        ),
        answer: 365,
        hint: L(
          "Dwanaście miesięcy po trzydzieści i pięć dni dodatkowych.",
          "Дванадцять місяців по тридцять і п’ять додаткових днів.",
          "Двенадцать месяцев по тридцать и ещё пять дней."
        ),
        explanation: L(
          "365. Kalendarz z obserwacji Nilu i Syriusza.",
          "365. Календар зі спостережень Нілу і Сіріуса.",
          "365. Календарь связан с наблюдениями Нила и Сириуса."
        )
      }
    },
    {
      type: "challenge",
      module: "osiagniecia",
      track: "both",
      heading: L("Osiągnięcia Egiptu", "Досягнення Єгипту", "Достижения Египта"),
      task: {
        id: "h03-dorobek",
        type: "single-choice",
        level: "C",
        coach: true,
        question: L(
          "Który zestaw to osiągnięcia cywilizacji egipskiej?",
          "Який набір — досягнення єгипетської цивілізації?",
          "Какой набор — достижения египетской цивилизации?"
        ),
        options: [
          { id: "a", label: L("pismo klinowe, koło i system 60", "клинопис, колесо і система 60", "клинопись, колесо и система 60") },
          { id: "b", label: L("hieroglify, piramidy, medycyna, matematyka, kalendarz 365 dni", "ієрогліфи, піраміди, медицина, математика, календар 365 днів", "иероглифы, пирамиды, медицина, математика, календарь из 365 дней") },
          { id: "c", label: L("alfabet łaciński i uniwersytet w Krakowie", "латинська абетка і університет у Кракові", "латинский алфавит и университет в Кракове") }
        ],
        answer: "b",
        hint: L("Oddziel Nil od Tygrysu i od średniowiecznej Polski.", "Відділи Ніл від Тигру і від середньовічної Польщі.", "Отдели Нил от Тигра и от средневековой Польши."),
        explanation: L(
          "Kliny i 60 to Sumer. Alfabet i Kraków — później.",
          "Клини і 60 — Шумер. Абетка і Краків — пізніше.",
          "Клинопись и система 60 — это Шумер. Алфавит и Краков — гораздо позже."
        )
      }
    },
    {
      type: "check",
      module: "osiagniecia",
      track: "both",
      heading: L("Do czego to służyło?", "Для чого це служило?", "Для чего это было нужно?"),
      task: {
        id: "h03-q-kalendarz",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Co Egipcjanie oparli na wylewach Nilu i gwieździe Syriusz?",
          "Що єгиптяни опели на розливах Нілу і зорі Сіріус?",
          "Что египтяне связали с разливами Нила и звездой Сириус?"
        ),
        options: [
          { id: "a", label: L("kalendarz", "календар", "kalendarz — календарь") },
          { id: "b", label: L("politeizm", "політеїзм", "politeizm — политеизм") },
          { id: "c", label: L("sarkofag", "саркофаг", "sarkofag — саркофаг") }
        ],
        answer: "a",
        hint: L("Chodzi o liczenie dni w roku.", "Ідеться про лічбу днів у році.", "Речь о счёте дней в году."),
        explanation: L(
          "Kalendarz. Politeizm to wiara, sarkofag to trumna.",
          "Календар. Політеїзм — це віра, саркофаг — це труна.",
          "Это календарь. Политеизм — вера, саркофаг — гроб."
        )
      }
    },
    {
      type: "practice",
      module: "osiagniecia",
      heading: L("Zeszyt, strona 11, zadanie 5", "Зошит, сторінка 11, завдання 5", "Тетрадь, страница 11, задание 5"),
      text: L(
        ["W ramce jest pięć słów, a zdań jest cztery. Jedno słowo jest niepotrzebne. Najpierw wybierz sam."],
        ["У рамці п’ять слів, а речень чотири. Одне слово зайве. Спочатку вибери сам."],
        ["В рамке пять слов, а предложений четыре. Одно слово лишнее. Сначала выбери сам."]
      ),
      zeszyt: {
        id: "h03-z11-5",
        lead: L(
          ["Strona 11, zadanie 5. Uzupełnij zdania słowami: matematyka, hieroglify, medycyna, kalendarz, politeizm. Jedno słowo omiń."],
          ["Сторінка 11, завдання 5. Доповни речення словами: matematyka, hieroglify, medycyna, kalendarz, politeizm. Одне слово пропусти."],
          ["Страница 11, задание 5. Вставь слова matematyka, hieroglify, medycyna, kalendarz, politeizm. Одно слово не нужно. Сначала в тетради."]
        ),
        answers: [
          {
            label: L("Kalendarz", "Kalendarz", "1. Kalendarz"),
            text: L(
              ["Starożytni Egipcjanie są twórcami kalendarza, który został opracowany na podstawie obserwacji wylewów Nilu i położenia Słońca oraz gwiazdy Syriusz."],
              ["Starożytni Egipcjanie są twórcami kalendarza, który został opracowany na podstawie obserwacji wylewów Nilu i położenia Słońca oraz gwiazdy Syriusz."],
              ["Starożytni Egipcjanie są twórcami kalendarza, który został opracowany na podstawie obserwacji wylewów Nilu i położenia Słońca oraz gwiazdy Syriusz."]
            ),
            why: L(
              ["Wylewy i Syriusz wskazują na czas, nie na wiarę."],
              ["Розливи і Сіріус указують на час, не на віру."],
              ["Разливы и Сириус говорят о времени. Это календарь, не политеизм."]
            )
          },
          {
            label: L("Hieroglify", "Hieroglify", "2. Hieroglify"),
            text: L(
              ["Egipcjanie za pomocą hieroglifów byli w stanie tworzyć pisma religijne i ważne dokumenty."],
              ["Egipcjanie za pomocą hieroglifów byli w stanie tworzyć pisma religijne i ważne dokumenty."],
              ["Egipcjanie za pomocą hieroglifów byli w stanie tworzyć pisma religijne i ważne dokumenty."]
            ),
            why: L(
              ["Pismo, którym tworzy się teksty, to hieroglify."],
              ["Письмо, яким творять тексти, — це ієрогліфи."],
              ["Тексты и документы создают письмом. Здесь это иероглифы."]
            )
          },
          {
            label: L("Medycyna", "Medycyna", "3. Medycyna"),
            text: L(
              ["Mumifikacja zwłok przyczyniła się do rozwoju medycyny."],
              ["Mumifikacja zwłok przyczyniła się do rozwoju medycyny."],
              ["Mumifikacja zwłok przyczyniła się do rozwoju medycyny."]
            ),
            why: L(
              ["Przy mumifikacji obserwowano ciało."],
              ["Під час муміфікації спостерігали тіло."],
              ["При мумификации наблюдали тело. Так развивалась медицина."]
            )
          },
          {
            label: L("Matematyka", "Matematyka", "4. Matematyka"),
            text: L(
              ["Niezbędną wiedzą do budowy piramid była znajomość matematyki."],
              ["Niezbędną wiedzą do budowy piramid była znajomość matematyki."],
              ["Niezbędną wiedzą do budowy piramid była znajomość matematyki."]
            ),
            why: L(
              ["Pomiary i budowa wymagają liczenia."],
              ["Виміри і будова потребують лічби."],
              ["Измерения и стройка требуют счёта. Это математика."]
            )
          },
          {
            label: L("Zbędne słowo", "Зайве слово", "Лишнее слово"),
            text: L(["politeizm"], ["politeizm"], ["politeizm"]),
            why: L(
              ["Politeizm jest ważny w lekcji, ale żadne z tych czterech zdań o nim nie mówi. Dlatego w tym zadaniu go nie wpisujemy."],
              ["Політеїзм важливий в уроці, але жодне з цих чотирьох речень про нього не каже. Тому в цьому завданні його не вписуємо."],
              ["Politeizm в уроке нужен, но ни одно из этих четырёх предложений о нём не говорит. В этом задании его пропускают. Одно лишнее слово — правило этого упражнения."]
            )
          }
        ]
      }
    },
    {
      type: "practice",
      module: "osiagniecia",
      heading: L("Zeszyt, strona 11, zadanie 6", "Зошит, сторінка 11, завдання 6", "Тетрадь, страница 11, задание 6"),
      visual: {
        kind: "image-placeholder",
        url: "./img/krzyzowka-zeszyt.jpg",
        alt: L("Krzyżówka z zeszytu", "Кросворд із зошита", "Кроссворд из тетради"),
        title: L("Ćwiczenie treningowe", "Тренувальна вправа", "Тренировочное упражнение")
      },
      text: L(
        ["To ćwiczenie treningowe do haseł z zeszytu. Żółtą kolumnę odczytasz sam w książce: na zdjęciu nie widać pewnie, która litera wchodzi do hasła, więc gotowego hasła tu nie ma."],
        ["Це тренувальна вправа до гасел із зошита. Жовту колонку прочитаєш сам у книжці: на фото не видно певно, яка літера входить до гасла, тож готового гасла тут немає."],
        ["Это тренировка к кроссворду тетради. Жёлтую колонку прочитай сам в книге: на фото нельзя надёжно увидеть, какая буква входит в пароль, поэтому готовый пароль здесь не дан."]
      ),
      zeszyt: {
        id: "h03-z11-6",
        lead: L(
          ["Rozwiąż pięć haseł w zeszycie. Potem porównaj znaczenia. Hasło z żółtych kratek przepisz z własnej krzyżówki."],
          ["Розв’яжи п’ять гасел у зошиті. Потім порівняй значення. Гасло з жовтих клітинок перепиши зі свого кросворду."],
          ["Реши пять слов в тетради. Потом сравни значения. Пароль из жёлтых клеток перепиши из своего кроссворда."]
        ),
        answers: [
          {
            label: L("1. Grobowiec władców", "1. Гробниця володарів", "1. Гробница правителей"),
            text: L(["piramida"], ["piramida"], ["piramida"]),
            why: L(
              ["Wielka budowla, w której chowano faraonów. Jeśli kratek jest inna liczba, zostań przy słowie z książki."],
              ["Велика споруда, в якій ховали фараонів. Якщо клітинок інша кількість, лишися при слові з книжки."],
              ["Большая постройка, где хоронили фараонов. Если клеток другое число, оставь слово, которое входит в твою сетку."]
            )
          },
          {
            label: L("2. Odkrycie z 1922 roku", "2. Відкриття 1922 року", "2. Открытие 1922 года"),
            text: L(["Tutenchamon"], ["Tutenchamon"], ["Tutenchamon"]),
            why: L(
              ["Grobowiec odkrył Howard Carter. W niektórych książkach ta sama osoba nazywa się Tutanchamon."],
              ["Гробницю відкрив Говард Картер. У деяких книжках та сама особа зветься Tutanchamon."],
              ["Гробницу нашёл Говард Картер. В некоторых книгах того же фараона пишут Tutanchamon. Это одно имя."]
            )
          },
          {
            label: L("3. Materiał", "3. Матеріал", "3. Материал"),
            text: L(["kamień"], ["kamień"], ["kamień"]),
            why: L(
              ["W tej lekcji bloki piramid są z kamienia. Wpisz formę, która mieści się w kratkach."],
              ["У цьому уроці блоки пірамід із каменю. Впиши форму, яка вміщається в клітинки."],
              ["В этом уроке блоки пирамид каменные. Впиши форму, которая входит в клетки."]
            )
          },
          {
            label: L("4. Lew z ludzką głową", "4. Лев із людською головою", "4. Лев с человеческой головой"),
            text: L(["Sfinks"], ["Sfinks"], ["Sfinks"]),
            why: L(
              ["Wielki Sfinks stoi przy piramidach w Gizie."],
              ["Великий Сфінкс стоїть біля пірамід у Гізі."],
              ["Большой Сфинкс стоит у пирамид в Гизе."]
            )
          },
          {
            label: L("5. Ozdobna trumna", "5. Оздоблена труна", "5. Украшенный гроб"),
            text: L(["sarkofag"], ["sarkofag"], ["sarkofag"]),
            why: L(
              ["Sarkofag to nie piramida i nie sama mumifikacja."],
              ["Саркофаг — це не піраміда і не сама муміфікація."],
              ["Саркофаг — это не пирамида и не сама мумификация."]
            )
          }
        ]
      }
    },

    {
      type: "vocabulary",
      module: "powtorka",
      track: "both",
      heading: L("Słownik na sprawdzian", "Словник на перевірку", "Словарь к sprawdzian"),
      rows: [
        { pl: "Nil — rzeka, która dawała wodę i muł", ua: "Ніл — річка, що давала воду і мул", ru: "река, которая давала воду и ил" },
        { pl: "Egipt darem Nilu — bez rzeki nie byłoby państwa", ua: "Єгипет — дар Нілу — без річки не було б держави", ru: "без реки не было бы государства" },
        { pl: "faraon — władca o nieograniczonej władzy", ua: "фараон — володар з необмеженою владою", ru: "правитель с неограниченной властью" },
        { pl: "politeizm — wiara w wielu bogów", ua: "політеїзм — віра в багатьох богів", ru: "вера во многих богов" },
        { pl: "mumifikacja — zabezpieczanie ciała", ua: "муміфікація — захист тіла", ru: "сохранение тела" },
        { pl: "sarkofag — ozdobna trumna", ua: "саркофаг — оздоблена труна", ru: "украшенный гроб" },
        { pl: "piramida — grobowiec faraona", ua: "піраміда — гробниця фараона", ru: "гробница фараона" },
        { pl: "hieroglify — egipskie pismo obrazkowe", ua: "ієрогліфи — єгипетське образотворче письмо", ru: "египетское рисуночное письмо" }
      ]
    },
    {
      type: "mistake",
      module: "powtorka",
      heading: L("Znajdź błąd w opowieści", "Знайди помилку в оповіді", "Найди ошибку в рассказе"),
      claim: L(
        "„Egipcjanie czcili tylko jednego Boga, a piramidy stawiali Sumerowie nad Tygrysem.”",
        "«Єгиптяни шанували лише одного Бога, а піраміди ставили шумери над Тигром.»",
        "«Египтяне чтили только одного Бога, а пирамиды строили шумеры на Тигре»."
      ),
      text: {
        pl: [
          "Egipcjanie byli politeistami. Jeden Bóg to temat Izraela.",
          "Piramidy Cheopsa i Chefrena stoją w Gizie nad Nilem. Sumerowie budowali zikkuraty z cegły."
        ],
        ua: [
          "Єгиптяни були політеїстами. Один Бог — тема Ізраїлю.",
          "Піраміди Хеопса і Хефрена стоять у Гізі над Нілом. Шумери будували зикурати з цегли."
        ],
        ru: [
          "Египтяне были политеистами. Один Бог — тема Израиля.",
          "Пирамиды Хеопса и Хефрена стоят в Гизе на Ниле. Шумеры строили кирпичные зиккураты."
        ]
      }
    },
    {
      type: "challenge",
      module: "powtorka",
      track: "both",
      heading: L("Co nie pasuje do Egiptu?", "Що не пасує до Єгипту?", "Что не относится к Египту?"),
      task: {
        id: "h03-odd",
        type: "single-choice",
        level: "C",
        coach: true,
        question: L(
          "Który element NIE należy do Egiptu faraonów?",
          "Який елемент НЕ належить до Єгипту фараонів?",
          "Что НЕ относится к Египту фараонов?"
        ),
        options: [
          { id: "a", label: L("hieroglify i kalendarz 365 dni", "ієрогліфи і календар 365 днів", "иероглифы и календарь из 365 дней") },
          { id: "b", label: L("piramidy Cheopsa i Chefrena w Gizie", "піраміди Хеопса і Хефрена в Гізі", "пирамиды Хеопса и Хефрена в Гизе") },
          { id: "c", label: L("tabliczka klinowa z gliny z Uruk", "клинописна табличка з глини з Урука", "глиняная клинописная табличка из Урука") }
        ],
        answer: "c",
        hint: L("Oddziel Nil od Tygrysu.", "Відділи Ніл від Тигру.", "Отдели Нил от Тигра."),
        explanation: L(
          "Glina i kliny to Mezopotamia.",
          "Глина і клини — це Месопотамія.",
          "Глина и клинья — это Месопотамия."
        )
      }
    },
    {
      type: "check",
      module: "powtorka",
      track: "both",
      heading: L("Czy już umiem?", "Чи вже вмію?", "Уже умею?"),
      task: {
        id: "h03-check-rok",
        type: "input-number",
        level: "A",
        coach: true,
        question: L(
          "Około którego roku p.n.e. powstało państwo egipskie? Wpisz sam rok.",
          "Близько якого року до н.е. виникла єгипетська держава? Введи сам рік.",
          "Около какого года до н. э. возникло египетское государство? Впиши сам год."
        ),
        answer: 3000,
        hint: L("Około 3 tysięcy lat p.n.e.", "Близько 3 тисяч років до н.е.", "Около 3 тысяч лет до н. э."),
        explanation: L(
          "Ok. 3000 p.n.e. — powstanie państwa nad Nilem.",
          "Бл. 3000 до н.е. — виникнення держави над Нілом.",
          "Около 3000 года до н. э. — возникновение государства на Ниле."
        )
      }
    },
    {
      type: "visual",
      module: "powtorka",
      track: "review",
      heading: L("Nil w skrócie", "Ніл коротко", "Нил коротко"),
      visual: {
        kind: "flow",
        steps: [
          { title: L("Nil", "Ніл", "Нил") },
          { title: L("Woda i muł", "Вода і мул", "Вода и ил") },
          { title: L("Plony", "Урожай", "Урожай") },
          { title: L("Osady", "Поселення", "Поселения") },
          { title: L("Państwo", "Держава", "Государство") }
        ]
      }
    },
    {
      type: "summary",
      module: "powtorka",
      track: "both",
      heading: L("Zapamiętaj", "Запам’ятай", "Запомни"),
      items: [
        mark(
          "Starożytny Egipt powstał ok. 3000 p.n.e. w Afryce nad Nilem. Dzięki tej rzece możliwe było rolnictwo — „Egipt darem Nilu”.",
          ["3000 p.n.e.", "Nilem", "Egipt darem Nilu"],
          "Стародавній Єгипет виник бл. 3000 до н.е. в Африці над Нілом. Завдяки цій річці було можливе рільництво — «Єгипет — дар Нілу».",
          ["3000 до н.е.", "Нілом", "Єгипет — дар Нілу"],
          "Древний Египет возник около 3000 года до н. э. в Африке на Ниле. Благодаря реке было возможно земледелие — «Египет — дар Нила».",
          ["3000", "Ниле", "дар Нила"]
        ),
        mark(
          "Na czele stał faraon o nieograniczonej władzy. Kapłani i urzędnicy — wykształceni. Reszta: rzemieślnicy, kupcy, chłopi, żołnierze oraz nieliczni niewolnicy.",
          ["faraon", "nieograniczonej władzy", "Kapłani", "urzędnicy"],
          "На чолі стояв фараон з необмеженою владою. Жерці й урядовці — освічені. Решта: ремісники, купці, селяни, воїни та нечисленні раби.",
          ["фараон", "необмеженою владою", "Жерці", "урядовці"],
          "Во главе стоял фараон с неограниченной властью. Жрецы и чиновники были учёными. Дальше ремесленники, купцы, крестьяне, воины и немного рабов.",
          ["фараон", "неограниченной властью"]
        ),
        mark(
          "Egipcjanie byli politeistami. Wierzyli, że dusza mieszka w ciele także po śmierci — dlatego mumifikowali zwłoki i budowali piramidy.",
          ["politeistami", "mumifikowali", "piramidy"],
          "Єгиптяни були політеїстами. Вірили, що душа живе в тілі і після смерті — тому муміфікували тіла і будували піраміди.",
          ["політеїстами", "муміфікували", "піраміди"],
          "Египтяне были политеистами. Они верили, что душа остаётся с телом и после смерти, поэтому мумифицировали тела и строили пирамиды.",
          ["политеистами", "мумифицировали", "пирамиды"]
        ),
        mark(
          "Dorobek: hieroglify, medycyna, matematyka, astronomia, kalendarz 365 dni.",
          ["hieroglify", "medycyna", "matematyka", "kalendarz 365 dni"],
          "Доробок: ієрогліфи, медицина, математика, астрономія, календар 365 днів.",
          ["ієрогліфи", "медицина", "математика", "календар 365 днів"],
          "Достижения: иероглифы, медицина, математика, астрономия, календарь из 365 дней.",
          ["иероглифы", "медицина", "математика", "365 дней"]
        )
      ]
    },
    {
      type: "review",
      module: "powtorka",
      heading: L("Dodatkowe ćwiczenie H5CYGM", "Додаткова вправа H5CYGM", "Дополнительное упражнение H5CYGM"),
      text: {
        pl: [
          "Na stronie 9 jest kod dodatkowego zadania: H5CYGM.",
          "Link: https://docwiczenia.pl/kod/H5CYGM",
          "Strona pozwala pobrać plik, ale samej treści ćwiczenia tu nie otwarto. Nie ma więc jego streszczenia. Lekcja idzie dalej bez tego pliku."
        ],
        ua: [
          "На сторінці 9 є код додаткового завдання: H5CYGM.",
          "Посилання: https://docwiczenia.pl/kod/H5CYGM",
          "Сторінка дозволяє завантажити файл, але сам зміст вправи тут не відкрито. Тож немає її переказу. Урок іде далі без цього файлу."
        ],
        ru: [
          "На странице 9 есть код дополнительного задания: H5CYGM.",
          "Ссылка: https://docwiczenia.pl/kod/H5CYGM",
          "Страница предлагает скачать файл около 533 КБ. Само задание здесь не открывалось, поэтому пересказа нет. Урок из-за этого не останавливается."
        ]
      }
    },
    {
      type: "review",
      module: "powtorka",
      track: "both",
      heading: L("Wrócimy do tego", "Ми до цього повернемось", "К этому вернёмся"),
      text: {
        pl: [
          "Następny temat: Izrael — lud, który czcił jednego Boga.",
          "Porównaj: politeizm Egiptu i monoteizm Izraelitów.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Ізраїль — народ, який шанував одного Бога.",
          "Порівняй: політеїзм Єгипту і монотеїзм ізраїльтян.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ],
        ru: [
          "Следующая тема — Израиль: народ, который чтил одного Бога.",
          "Сравни политеизм Египта и монотеизм израильтян.",
          "Если хочешь услышать урок голосом учителя, открой фильм «Коротких уроков» ниже. Это не файл H5CYGM."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "lqcjlxhDpqc",
        title: L(
          "Krótkie Lekcje: W Egipcie faraonów",
          "Короткі уроки: В Єгипті фараонів",
          "Короткие уроки: В Египте фараонов"
        )
      }
    }
  ]
};
