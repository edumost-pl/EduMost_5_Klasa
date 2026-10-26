function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks, ru, ruMarks) {
  const row = {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
  if (ru) row.ru = { t: ru, mark: ruMarks || [] };
  return row;
}

function L(pl, ua, ru) {
  return { pl: pl, ua: ua, ru: ru };
}

const IMG = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/";

function pic(file, title, alt, prompt) {
  return {
    kind: "image-placeholder",
    url: IMG + file,
    file: "Historia/" + file,
    alt: alt || title,
    title: title,
    prompt: prompt
  };
}

window.EduMostLessonContent = {
  intro: {
    image: IMG + "012.png",
    alt: L(
      "Miasto w murach z zikkuratem nad rzeką",
      "Місто в мурах із зикуратом над річкою",
      "Город у реки: стены, глиняные дома и зиккурат"
    ),
    title: L(
      "Podróż do Mezopotamii",
      "Podróż do Mezopotamii — Подорож до Месопотамії",
      "Podróż do Mezopotamii — Путешествие в Месопотамию"
    ),
    text: {
      pl: [
        "Wyobraź sobie świat, w którym nie ma jeszcze współczesnych miast, sklepów i dróg. Ludzie mieszkają przy wielkich rzekach, uprawiają rośliny, budują domy i wymieniają się towarami.",
        "Stopniowo niektóre osady rosną i stają się miastami. Pojawiają się nowe zawody, władcy i zasady, według których trzeba żyć.",
        "Jak rzeki pomogły powstać pierwszym cywilizacjom? Dlaczego Sumerowie budowali miasta-państwa? I po co królowi Hammurabiemu były potrzebne prawa?",
        "Dziś wyruszymy do starożytnej Mezopotamii i zobaczymy, jak ludzie nauczyli się organizować życie w pierwszych miastach."
      ],
      ua: [
        "Уяви світ, у якому ще немає сучасних міст, крамниць і доріг. Люди живуть біля великих річок, вирощують рослини, будують домівки й обмінюються товарами.",
        "Поступово деякі поселення ростуть і стають містами. З’являються нові заняття, правителі і правила, за якими треба жити.",
        "Як річки допомогли з’явитися першим цивілізаціям? Чому шумери будували міста-держави? І навіщо царю Хаммурапі були потрібні закони?",
        "Сьогодні вирушимо до давньої Месопотамії і дізнаємося, як люди навчилися організовувати життя в перших містах."
      ],
      ru: [
        "Представь, что ты оказался в мире, где ещё нет современных городов, магазинов и дорог. Люди живут возле больших рек, выращивают растения, строят дома и обмениваются товарами.",
        "Постепенно некоторые поселения становятся большими и превращаются в города. У людей появляются новые профессии, правители и правила, по которым нужно жить.",
        "Как реки помогли появиться первым цивилизациям? Почему шумеры строили города-государства? И зачем царю Хаммурапи понадобились законы?",
        "Сегодня мы отправимся в древнюю Месопотамию и узнаем, как люди научились организовывать жизнь в первых городах."
      ]
    },
    missionLabel: L("Twoja misja", "Твоя місія", "Твоя миссия"),
    mission: L(
      "Zrozumieć, dlaczego pierwsze miasta powstawały nad rzekami, z czego słynęli Sumerowie i po co były prawa Hammurabiego.",
      "Зрозуміти, чому перші міста виникали біля річок, чим уславилися шумери і навіщо були потрібні закони Хаммурапі.",
      "Понять, почему первые города возникали у рек, чем прославились шумеры и зачем нужны были законы Хаммурапи."
    ),
    ready: L(
      "Gotów? Ruszamy.",
      "Готовий? Рушаємо.",
      "Готов? Начинаем."
    ),
    button: L("Zaczynamy podróż →", "Почати подорож →", "Начать путешествие →"),
    short: L(
      "Krótka powtórka: Mezopotamia, Tygrys i Eufrat, miasta-państwa, koło, żagiel, Kodeks Hammurabiego.",
      "Коротке повторення: Месопотамія, Тигр і Євфрат, міста-держави, колесо, вітрило, Кодекс Хаммурапі.",
      "Короткое повторение: Месопотамия, Тигр и Евфрат, города-государства, колесо, парус и законы Хаммурапи."
    )
  },
  modules: [
    { id: "gdzie", title: L("1. Gdzie?", "1. Де?", "1. Где Месопотамия?") },
    { id: "rzeki", title: L("2. Rzeki", "2. Річки", "2. Почему у рек?") },
    { id: "miasta", title: L("3. Miasta-państwa", "3. Міста-держави", "3. Города-государства") },
    { id: "sumerowie", title: L("4. Sumerowie", "4. Шумери", "4. Чем прославились") },
    { id: "hammurabi", title: L("5. Hammurabi", "5. Хаммурапі", "5. Хаммурапи") },
    { id: "zeszyt", title: L("6. Zeszyt s. 7", "6. Зошит с. 7", "6. Тетрадь, с. 7") },
    { id: "powtorka", title: L("7. Powtórka", "7. Повторення", "7. Повторение") }
  ],
  blocks: [
    {
      type: "goal",
      module: "gdzie",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("pokazać Mezopotamię na mapie", "показати Месопотамію на карті", "показать Месопотамию на карте"),
        L("nazwać dwie rzeki: Tygrys i Eufrat", "назвати дві річки: Тигр і Євфрат", "назвать две реки: Tygrys — Тигр и Eufrat — Евфрат")
      ]
    },
    {
      type: "concept",
      module: "gdzie",
      heading: L("Między dwiema rzekami", "Між двома річками", "Между двумя реками"),
      formula: "Mezopotamia = „między rzekami”",
      text: {
        pl: [
          ["Mezopotamia to starożytna kraina na ", em("Bliskim Wschodzie"), ". Nazwa znaczy „między rzekami”."],
          ["Przez tę krainę płynęły dwie wielkie rzeki: ", em("Tygrys"), " i ", em("Eufrat"), "."],
          "Po polsku kraina nazywa się Mezopotamia."
        ],
        ua: [
          ["Месопотамія — давній край на ", em("Близькому Сході"), ". Назва означає «між річками»."],
          ["Через цей край текли дві великі річки: ", em("Тигр"), " і ", em("Євфрат"), "."],
          "Польською край називається Mezopotamia."
        ],
        ru: [
          ["Месопотамия — древняя область на Ближнем Востоке. Её название значит «Междуречье», то есть земля между реками."],
          ["Через эту область протекали две большие реки: ", em("Tygrys"), " — Тигр и ", em("Eufrat"), " — Евфрат."],
          "На польском языке область называется Mezopotamia."
        ]
      }
    },
    {
      type: "visual",
      module: "gdzie",
      heading: L("Najpierw sama mapa", "Спочатку сама карта", "Сначала карта почти без подписей"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-zeszyt.jpg",
        alt: L(
          "Mapa Bliskiego Wschodu z zeszytu: puste prostokąty na rzeki i cyfry 1–4",
          "Карта Близького Сходу із зошита: порожні прямокутники на річки і цифри 1–4",
          "Карта Ближнего Востока из тетради: пустые прямоугольники для рек и цифры 1–4"
        ),
        title: L("Bliski Wschód w starożytności", "Близький Схід у давнину", "Ближний Восток в древности")
      },
      text: {
        pl: [
          "To mapa z zeszytu, strona 7. Dwa puste prostokąty to miejsca na nazwy rzek. Nie wpisuj ich jeszcze.",
          "Morze na dole po prawej to Zatoka Perska. Miasta sumeryjskie leżą na południu, bliżej tej zatoki."
        ],
        ua: [
          "Це карта із зошита, сторінка 7. Два порожні прямокутники — місця на назви річок. Ще їх не вписуй.",
          "Море внизу праворуч — Перська затока. Шумерські міста лежать на півдні, ближче до цієї затоки."
        ],
        ru: [
          "Это карта из тетради, страница 7. Два пустых прямоугольника — места для названий рек. Пока ничего туда не пиши.",
          "Море внизу справа — Персидский залив. Шумерские города лежат на юге, ближе к этому заливу."
        ]
      }
    },
    {
      type: "algorithm",
      module: "gdzie",
      heading: L("Otwieraj podpisy po kolei", "Відкривай підписи по черзі", "Открывай подписи по одному"),
      reveal: true,
      steps: [
        {
          formula: "1. MEZOPOTAMIA",
          text: L(
            "Kraina między dwiema rzekami, na Bliskim Wschodzie.",
            "Край між двома річками, на Близькому Сході.",
            "Область между двумя реками, на Ближнем Востоке. По-польски: Mezopotamia."
          )
        },
        {
          formula: "2. EUFRAT",
          text: L(
            "Rzeka zachodnia. Przy niej leży Mari.",
            "Західна річка. Біля неї лежить Марі.",
            "Западная река. Рядом с ней на карте написано Mari. По-польски: Eufrat."
          )
        },
        {
          formula: "3. TYGRYS",
          text: L(
            "Rzeka wschodnia. Przy niej, na północy, leży Niniwa.",
            "Східна річка. Біля неї, на півночі, лежить Ніневія.",
            "Восточная река. На севере рядом с ней написано Niniwa. По-польски: Tygrys."
          )
        },
        {
          formula: "4. ZATOKA I MIASTA",
          text: L(
            "Na południu, przy Zatoce Perskiej: Uruk, Ur i Lagasz. Babilon leży dalej na północ, nad Eufratem.",
            "На півдні, біля Перської затоки: Урук, Ур і Лагаш. Вавилон лежить далі на північ, над Євфратом.",
            "На юге, у Персидского залива: Uruk, Ur и Lagasz. Babilon стоит севернее, на Евфрате. Какая цифра означает Ur, решишь сам в тетради."
          )
        }
      ]
    },
    {
      type: "visual",
      module: "gdzie",
      heading: L("Mapa z nazwami", "Карта з назвами", "Карта с названиями"),
      visual: pic(
        "013.png",
        L("Tygrys, Eufrat, Sumer, Babilonia", "Тигр, Євфрат, Шумер, Вавилонія", "Тигр, Евфрат, Шумер, Вавилония"),
        L("Mapa: Tygrys, Eufrat, Uruk, Ur, Babilon", "Карта: Тигр, Євфрат, Урук, Ур, Вавилон", "Карта: Тигр, Евфрат, Урук, Ур, Вавилон"),
        L(
          "Szkolna mapa Mezopotamii dla klasy 5: Eufrat i Tygrys, Zatoka Perska, miasta Uruk, Ur, Lagasz, Babilon.",
          "Шкільна карта Месопотамії для 5 класу: Євфрат і Тигр, Перська затока, міста Урук, Ур, Лагаш, Вавилон.",
          "Школьная карта Месопотамии: Евфрат и Тигр, Персидский залив, города Урук, Ур, Лагаш, Вавилон."
        )
      ),
      text: {
        pl: [
          "Praca z mapą jak w podręczniku: Mezopotamia, dwie rzeki, Ur i Babilon.",
          "Rzeki = woda dla pól i szlak dla statków."
        ],
        ua: [
          "Робота з картою як у підручнику: Месопотамія, дві річки, Ур і Вавилон.",
          "Річки = вода для полів і шлях для човнів."
        ],
        ru: [
          "Теперь названия на месте. Сравни со своей картой в тетради.",
          "Eufrat — западная река. Tygrys — восточная. Ur — на юге, у залива. Babilon — севернее, на Евфрате."
        ]
      },
      task: {
        id: "h02-map-uruk",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L("Nad którą rzeką założono miasto Uruk?", "Над якою річкою засновано місто Урук?", "На какой реке стоит город Uruk?"),
        options: [
          { id: "a", label: L("Nil", "Ніл", "Nil — Нил") },
          { id: "b", label: L("Eufrat", "Євфрат", "Eufrat — Евфрат") },
          { id: "c", label: L("Wisła", "Вісла", "Wisła — Висла") }
        ],
        answer: "b",
        hint: L(
          "Uruk leży w Sumerze, bliżej Eufratu niż Nilu.",
          "Урук лежить у Шумері, ближче до Євфрату, ніж до Нілу.",
          "Uruk на юге Месопотамии, не в Египте и не в Польше."
        ),
        explanation: L(
          "Uruk — miasto sumeryjskie nad Eufratem. Nil to Egipt.",
          "Урук — шумерське місто над Євфратом. Ніл — це Єгипет.",
          "Uruk — шумерский город на Евфрате. Нил — это Египет."
        )
      }
    },
    {
      type: "check",
      module: "gdzie",
      track: "both",
      heading: L("Jak nazywa się ta kraina?", "Як називається цей край?", "Как называется эта область?"),
      task: {
        id: "h02-q-nazwa",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Jak nazywa się obszar między Tygrysem i Eufratem?",
          "Як називається область між Тигром і Євфратом?",
          "Как называется область между двумя реками?"
        ),
        options: [
          { id: "a", label: L("Mezopotamia", "Месопотамія", "Mezopotamia — Месопотамия") },
          { id: "b", label: L("Egipt", "Єгипет", "Egipt — Египет") },
          { id: "c", label: L("Grecja", "Греція", "Grecja — Греция") }
        ],
        answer: "a",
        hint: L("Nazwa znaczy „między rzekami”.", "Назва означає «між річками».", "Название значит «между реками»."),
        explanation: L(
          "Mezopotamia — kraina między Tygrysem i Eufratem.",
          "Месопотамія — край між Тигром і Євфратом.",
          "По-польски: Mezopotamia. Это земля между Тигром и Евфратом."
        )
      }
    },
    {
      type: "check",
      module: "gdzie",
      track: "both",
      heading: L("Dwie rzeki", "Дві річки", "Две реки"),
      task: {
        id: "h02-check-rzeki",
        type: "input-text",
        level: "A",
        coach: true,
        question: L(
          "Wpisz nazwy dwóch rzek Mezopotamii, połączone spójnikiem i.",
          "Введи назви двох річок Месопотамії, зі сполучником i.",
          "Напиши по-польски названия двух рек через слово i."
        ),
        answer: [
          "tygrys i eufrat", "eufrat i tygrys",
          "тигр і євфрат", "євфрат і тигр",
          "тигр и евфрат", "евфрат и тигр"
        ],
        hint: L("Nazwa krainy znaczy „między rzekami”.", "Назва краю означає «між річками».", "По-польски: Tygrys и Eufrat."),
        explanation: L("Tygrys i Eufrat.", "Тигр і Євфрат.", "Школьная запись: Tygrys i Eufrat.")
      }
    },
    {
      type: "check",
      module: "gdzie",
      heading: L("Po co jest mapa?", "Навіщо карта?", "Зачем карта?"),
      task: {
        id: "h02-q-mapa",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Dlaczego mapa pomaga zrozumieć, gdzie powstała cywilizacja?",
          "Чому карта допомагає зрозуміти, де виникла цивілізація?",
          "Почему карта помогает понять, где возникла цивилизация?"
        ),
        options: [
          { id: "a", label: L("Bo widać rzeki, zatokę i miasta obok siebie", "Бо видно річки, затоку і міста поруч", "Потому что видно реки, залив и города рядом") },
          { id: "b", label: L("Bo mapa podaje imiona wszystkich królów", "Бо карта подає імена всіх царів", "Потому что на карте написаны имена всех царей") },
          { id: "c", label: L("Bo bez mapy nie ma żadnych rzek", "Бо без карти немає жодних річок", "Потому что без карты рек не существует") }
        ],
        answer: "a",
        hint: L("Szukaj dwóch rzek i Zatoki Perskiej.", "Шукай дві річки і Перську затоку.", "Смотри, где реки и где города."),
        explanation: L(
          "Mapa pokazuje, że miasta wyrosły między rzekami, blisko wody.",
          "Карта показує, що міста виросли між річками, біля води.",
          "На карте видно, что города стоят между реками, рядом с водой. Поэтому цивилизация возникла именно здесь."
        )
      }
    },
    {
      type: "visual",
      module: "gdzie",
      heading: L("Rzeka, muł, plony", "Річка, мул, урожаї", "Река, ил, урожай"),
      visual: pic(
        "010.png",
        L("Kraina między Eufratem i Tygrysem", "Край між Євфратом і Тигром", "Земля между Евфратом и Тигром"),
        L("Dolina między rzekami: pola przy wodzie, suche wzgórza dalej", "Долина між річками: поля біля води, сухі пагорби далі", "Долина между реками: поля у воды, дальше сухие холмы")
      ),
      text: {
        pl: ["Początkowo pod uprawy nadawała się tylko ziemia leżąca blisko rzek. Dalej — sucho."],
        ua: ["Спочатку під посіви надавалася лише земля біля річок. Далі — сухо."],
        ru: ["Сначала для полей годилась только земля у реки. Дальше было сухо. Разливы оставляли плодородный ил."]
      }
    },

    {
      type: "goal",
      module: "rzeki",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić, dlaczego pierwsze cywilizacje powstały nad wielkimi rzekami", "пояснити, чому перші цивілізації виникли над великими річками", "объяснить, почему первые цивилизации возникали у больших рек"),
        L("powiedzieć to po polsku w zeszycie, strona 8, zadanie 3", "сказати це польською в зошиті, сторінка 8, завдання 3", "записать это по-польски в тетради, страница 8, задание 3")
      ]
    },
    {
      type: "concept",
      module: "rzeki",
      heading: L("Dlaczego nad rzekami?", "Чому над річками?", "Почему у рек?"),
      text: {
        pl: [
          "Rzeki dawały wodę do picia, pomagały uprawiać rośliny i zostawiały żyzną ziemię. Ludzie zbierali plony, hodowali zwierzęta, budowali stałe osady i wymieniali towary.",
          "Gdy ludzi przybywało, osady zamieniały się w duże miasta.",
          ["W tym temacie ", em("cywilizacja"), " to społeczeństwo, które budowało miasta, posługiwało się pismem i stworzyło własne państwo."]
        ],
        ua: [
          "Річки давали воду до пиття, допомагали вирощувати рослини і лишали родючу землю. Люди збирали врожай, розводили тварин, будували постійні поселення й обмінювалися товарами.",
          "Коли людей більшало, поселення ставали великими містами.",
          ["У цій темі ", em("цивілізація"), " — суспільство, яке будувало міста, користувалося письмом і створило власну державу."]
        ],
        ru: [
          "Реки давали людям воду для питья, помогали выращивать растения и обеспечивали плодородную землю. Люди могли собирать урожай, разводить животных, строить постоянные поселения и обмениваться товарами.",
          "Когда население росло, поселения постепенно превращались в большие города.",
          ["В этой теме ", em("cywilizacja"), " — цивилизация: общество, которое строило города, пользовалось письменностью и создало своё государство."]
        ]
      }
    },
    {
      type: "vocabulary",
      module: "rzeki",
      heading: L("Słowa do tej historii", "Слова до цієї історії", "Слова к этой истории"),
      rows: [
        { pl: "rzeka — woda, która płynie", ua: "річка", ru: "река" },
        { pl: "żyzna ziemia — ziemia, na której dobrze rosną rośliny", ua: "родюча земля", ru: "плодородная земля" },
        { pl: "uprawa ziemi — uprawianie roślin", ua: "обробіток землі", ru: "земледелие" },
        { pl: "osada — miejsce, gdzie ludzie mieszkają na stałe", ua: "поселення", ru: "поселение" },
        { pl: "miasto — duża osada", ua: "місто", ru: "город" },
        { pl: "cywilizacja — miasta, pismo i własne państwo", ua: "цивілізація — міста, письмо і власна держава", ru: "цивилизация — города, письменность и своё государство" }
      ]
    },
    {
      type: "algorithm",
      module: "rzeki",
      heading: L("Jedno prowadzi do drugiego", "Одне веде до другого", "Одно ведёт к другому"),
      reveal: true,
      text: L(
        ["Otwieraj po jednym kroku."],
        ["Відкривай по одному кроку."],
        ["Открывай по одному шагу и смотри, как одно событие вело к следующему."]
      ),
      steps: [
        { formula: "RZEKI", text: L("Tygrys i Eufrat.", "Тигр і Євфрат.", "Реки: Tygrys и Eufrat.") },
        { formula: "WODA I ŻYZNA ZIEMIA", text: L("Woda do picia i muł na polach.", "Вода для пиття і мул на полях.", "Вода и плодородная земля.") },
        { formula: "PLONY", text: L("Ludzie uprawiają rośliny i mają żywność.", "Люди вирощують рослини і мають поживу.", "Урожай: есть еда.") },
        { formula: "OSADY", text: L("Można mieszkać w jednym miejscu.", "Можна жити в одному місці.", "Постоянные поселения.") },
        { formula: "MIASTA", text: L("Osady rosną.", "Поселення ростуть.", "Поселения вырастают в города.") },
        { formula: "CYWILIZACJA", text: L("Miasta, pismo i własne państwo.", "Міста, письмо і власна держава.", "Города, письменность и своё государство.") }
      ]
    },
    {
      type: "algorithm",
      module: "rzeki",
      heading: L("Od kanału do władzy", "Від каналу до влади", "От канала к власти"),
      reveal: true,
      text: L(
        ["To nie magia korony. To organizacja wody."],
        ["Це не магія корони. Це організація води."],
        ["Это не волшебная корона. Людям пришлось вместе управлять водой."]
      ),
      steps: [
        {
          formula: "1. ZIEMIA PRZY RZECE",
          text: L(
            "Uprawa tylko blisko koryta. Żeby mieć więcej pól — trzeba doprowadzić wodę dalej.",
            "Обробіток лише біля русла. Щоб мати більше полів — треба провести воду далі.",
            "Сначала поля были только у русла. Чтобы полей было больше, воду нужно отвести дальше."
          )
        },
        {
          formula: "2. KANAŁY",
          text: L(
            "Budowa i czyszczenie kanałów nawadniających. Pracuje wielu ludzi.",
            "Будова і чищення зрошувальних каналів. Працює багато людей.",
            "Люди строили и чистили оросительные каналы. Рабочих было много."
          )
        },
        {
          formula: "3. NADZORCA",
          text: L(
            "Wyznaczono nadzorców. Ich władza rosła. Robotnicy stawali się poddanymi.",
            "Призначили наглядачів. Їхня влада росла. Робітники ставали підданими.",
            "Назначили надзирателей. Их власть росла. Работники становились подданными."
          )
        },
        {
          formula: "4. CYWILIZACJA",
          text: L(
            "Z nadzoru nad wodą wyrosły miasta i państwa — cywilizacja.",
            "З нагляду за водою виросли міста і держави — цивілізація.",
            "Из надзора за водой выросли города и государства — цивилизация."
          )
        }
      ]
    },
    {
      type: "visual",
      module: "rzeki",
      heading: L("Kanały nawadniające", "Зрошувальні канали", "Оросительные каналы"),
      visual: pic(
        "011.png",
        L("Woda idzie na pola", "Вода йде на поля", "Вода идёт на поля"),
        L("Osada nad rzeką: kanały, palmy, pług z wołami", "Поселення над річкою: канали, пальми, плуг з волами", "Поселение у реки: каналы, пальмы, плуг с волами")
      ),
      text: {
        pl: ["Rzeki to także drogi: łodzie wiozły zboże i towary. Handel i rzemiosło rosną tam, gdzie jest woda."],
        ua: ["Річки — також дороги: човни везли збіжжя і товари. Торгівля і ремесло ростуть там, де є вода."],
        ru: ["Реки были ещё и дорогами: лодки возили зерно и товары. Торговля и ремёсла росли там, где была вода."]
      }
    },
    {
      type: "guided-practice",
      module: "rzeki",
      track: "both",
      heading: L("Krótka kontrola", "Коротка перевірка", "Короткая проверка"),
      task: {
        id: "h02-guided-rzeki",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Co rzeka dawała rolnikom Mezopotamii?", "Що річка давала рільникам Месопотамії?", "Что река давала земледельцам Месопотамии?"),
        options: [
          { id: "a", label: L("tylko ładny widok bez plonów", "лише гарний краєвид без урожаю", "только красивый вид, без урожая") },
          { id: "b", label: L("wodę, żyzny muł i drogę dla handlu", "воду, родючий мул і шлях для торгівлі", "воду, плодородный ил и путь для торговли") },
          { id: "c", label: L("śnieg do sanek", "сніг для санок", "снег для санок") }
        ],
        answer: "b",
        hint: L("Pomyśl o wylewie, mule i łodziach.", "Подумай про розлив, мул і човни.", "Вспомни разливы, ил и лодки."),
        explanation: L(
          "Woda + muł = plony. Rzeka = także szlak. Stąd miasta.",
          "Вода + мул = урожаї. Річка = також шлях. Звідси міста.",
          "Вода и ил давали урожай, река была ещё и дорогой. Поэтому здесь выросли города."
        )
      }
    },
    {
      type: "practice",
      module: "rzeki",
      heading: L("Zeszyt, strona 8, zadanie 3", "Зошит, сторінка 8, завдання 3", "Тетрадь, страница 8, задание 3"),
      text: L(
        ["Najpierw napisz odpowiedź sam. Potem porównaj ją ze wzorem."],
        ["Спочатку напиши відповідь сам. Потім порівняй її зі зразком."],
        ["Сначала напиши ответ сам. Готовое предложение откроется только после кнопки."]
      ),
      zeszyt: {
        id: "h02-z8-3",
        lead: L(
          ["Otwórz zeszyt, strona 8, zadanie 3: wyjaśnij, dlaczego pierwsze cywilizacje powstawały nad wielkimi rzekami."],
          ["Відкрий зошит, сторінка 8, завдання 3: поясни, чому перші цивілізації виникали над великими річками."],
          ["Теперь открой рабочую тетрадь на странице 8 и выполни задание 3: объясни, почему первые цивилизации возникали возле больших рек."]
        ),
        answers: [
          {
            label: L("Wzór", "Зразок", "Образец"),
            text: L(
              ["Pierwsze cywilizacje powstawały nad wielkimi rzekami, ponieważ zapewniały one wodę i żyzną ziemię. Dzięki temu ludzie mogli uprawiać rośliny, zdobywać żywność i zakładać osady."],
              ["Pierwsze cywilizacje powstawały nad wielkimi rzekami, ponieważ zapewniały one wodę i żyzną ziemię. Dzięki temu ludzie mogli uprawiać rośliny, zdobywać żywność i zakładać osady."],
              ["Pierwsze cywilizacje powstawały nad wielkimi rzekami, ponieważ zapewniały one wodę i żyzną ziemię. Dzięki temu ludzie mogli uprawiać rośliny, zdobywać żywność i zakładać osady."]
            ),
            why: L(
              ["Liczy się związek: rzeka → woda i żyzna ziemia → uprawa → osady. Inne poprawne zdanie z tym samym sensem też jest dobre."],
              ["Важливий зв’язок: річка → вода і родюча земля → обробіток → поселення. Інше правильне речення з тим самим змістом теж добре."],
              ["Приложение не видит почерк. Сравни смысл. Подойдёт и другое предложение, если в нём есть связь: река → вода и плодородная земля → земледелие → поселения."]
            )
          }
        ]
      }
    },

    {
      type: "goal",
      module: "miasta",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić, czym było miasto-państwo", "пояснити, чим було місто-держава", "объяснить, что такое miasto-państwo — город-государство"),
        L("wskazać Uruk, Ur i Lagasz", "вказати Урук, Ур і Лагаш", "показать на карте Uruk, Ur и Lagasz")
      ]
    },
    {
      type: "vocabulary",
      module: "miasta",
      heading: L("Słowa o Sumerze", "Слова про Шумер", "Слова о Шумере"),
      rows: [
        { pl: "Sumerowie", ua: "шумери", ru: "шумеры" },
        { pl: "Sumer", ua: "Шумер", ru: "Шумер" },
        { pl: "miasto-państwo", ua: "місто-держава", ru: "город-государство" },
        { pl: "władca", ua: "правитель", ru: "правитель" },
        { pl: "świątynia", ua: "храм", ru: "храм" },
        { pl: "rolnictwo", ua: "рільництво", ru: "сельское хозяйство" }
      ]
    },
    {
      type: "concept",
      module: "miasta",
      heading: L("Cywilizacja Sumerów", "Цивілізація шумерів", "Цивилизация шумеров"),
      timelineYear: 3500,
      formula: "połowa IV tysiąclecia p.n.e. · ok. 3500 p.n.e.",
      text: {
        pl: [
          "Pierwszą cywilizację w Mezopotamii stworzyli Sumerowie. Mieszkali w południowej części krainy.",
          [em("Miasto-państwo"), " to niewielkie państwo: miasto otoczone murami i najbliższa okolica."],
          "Na czele król. Urzędnicy pobierali podatki i nadzorowali pracę. Rolnicy uprawiali ziemię i kopali kanały. Rzemieślnicy robili naczynia, broń i tkaniny. Kupcy handlowali z innymi miastami.",
          "To nie była jedna świątynia ani sama wieś. To był ośrodek życia: rolnictwo, rzemiosło, handel i władza."
        ],
        ua: [
          "Першу цивілізацію в Месопотамії створили шумери. Вони жили в південній частині краю.",
          [em("Місто-держава"), " — невелика держава: місто в мурах і найближча околиця."],
          "На чолі цар. Урядовці збирали податки і наглядали за працею. Рільники обробляли землю і копали канали. Ремісники робили посуд, зброю і тканини. Купці торгували з іншими містами.",
          "Це не був один храм і не саме село. Це був осередок життя: рільництво, ремесло, торгівля і влада."
        ],
        ru: [
          "В южной части Месопотамии жили шумеры. Они создали здесь первую цивилизацию.",
          ["Каждый город мог иметь своего правителя, свои земли и храмы. Такой город вместе с окружающей территорией назывался ", em("miasto-państwo"), " — город-государство."],
          "Это были не отдельные здания и не деревни, а центры жизни: земледелие, ремёсла, торговля и управление.",
          "В учебнике дата первых городов-государств — около 3500 года до нашей эры, IV тысячелетие. По-польски: połowa IV tysiąclecia p.n.e., około 3500 roku p.n.e."
        ]
      }
    },
    {
      type: "visual",
      module: "miasta",
      heading: L("Tak wygląda miasto-państwo", "Так виглядає місто-держава", "Так выглядел город-государство"),
      visual: pic(
        "012.png",
        L("Miasto-państwo Sumerów", "Місто-держава шумерів", "Шумерский город-государство"),
        L("Miasto w murach z zikkuratem nad rzeką", "Місто в мурах із зикуратом над річкою", "Город в стенах, зиккурат и река")
      ),
      text: {
        pl: ["Miasto w murach + pola wokół. To już nie obóz koczowników."],
        ua: ["Місто в мурах + поля довкола. Це вже не табір кочівників."],
        ru: ["На рисунке: поля и канал, глиняные дома, стены и храм-зиккурат. Вокруг города — его земля. Вместе это и есть город-государство."]
      }
    },
    {
      type: "visual",
      module: "miasta",
      heading: L("W sumeryjskim mieście: Ur", "У шумерському місті: Ур", "В шумерском городе Ур"),
      visual: pic(
        "014.png",
        L("Zikkurat, pałac, targ, spichlerz, żuraw", "Зикурат, палац, ринок, зерносховище, журавель", "Зиккурат, дворец, рынок, амбар, журавль"),
        L("Ur: zikkurat, pałac, targ, spichlerz, kanały, żuraw", "Ур: зикурат, палац, ринок, зерносховище, канали, журавель", "Ур: зиккурат, дворец, рынок, амбар, каналы, журавль")
      ),
      text: {
        pl: [
          ["Ur — port przy ujściu Eufratu. W szczycie (XXI w. p.n.e.) ok. 65 tysięcy mieszkańców."],
          [em("Zikkurat"), " — schodkowa świątynia; na szczycie kaplica boga; przy wielkiej powodzi — schronienie."],
          "Spichlerz: zapas zboża na nieurodzaj, powódź albo wojnę. Król był też kapłanem. Pałac stał przy świątyni.",
          "Na targu: żywność, wełna, skóry, tkaniny. Z zewnątrz sprowadzano metale, kamień i drewno — tego w Mezopotamii brakowało.",
          ["Gdy rzeka opadała, kanały napełniano przy pomocy ", em("żurawi"), " (dźwignia z wiadrem i przeciwwagą)."]
        ],
        ua: [
          ["Ур — порт біля гирла Євфрату. У розквіті (XXI ст. до н.е.) бл. 65 тисяч мешканців."],
          [em("Зикурат"), " — ступінчастий храм; на вершині каплиця бога; при великій повені — сховок."],
          "Зерносховище: запас збіжжя на неврожай, повінь або війну. Цар був також жерцем. Палац стояв біля храму.",
          "На ринку: їжа, вовна, шкіри, тканини. Ззовні везли метали, камінь і дерево — цього в Месопотамії бракувало.",
          ["Коли річка спадала, канали наповнювали ", em("журавлями"), " (важіль із відром і противагою)."]
        ],
        ru: [
          "Ur — порт у устья Евфрата. В расцвете, в XXI веке до н. э., здесь жило около 65 тысяч человек.",
          [em("Zikkurat"), " — зиккурат, ступенчатый храм. Наверху — часовня бога. При большом наводнении он был убежищем."],
          "Spichlerz — амбар с запасом зерна. Царь был и жрецом, дворец стоял у храма.",
          "На рынке меняли еду, шерсть, кожи и ткани. Металл, камень и дерево привозили: своего не хватало.",
          [em("Żuraw"), " — журавль: рычаг с ведром, которым поднимали воду в канал, когда река спадала."]
        ]
      }
    },
    {
      type: "practice",
      module: "miasta",
      track: "both",
      heading: L("Czym jest miasto-państwo?", "Що таке місто-держава?", "Что такое город-государство?"),
      text: L(
        ["Powiedz to najpierw własnymi słowami. Potem wybierz zdanie najbliższe szkolnemu."],
        ["Скажи це спочатку своїми словами. Потім вибери речення, найближче до шкільного."],
        ["Сначала скажи своими словами. Потом выбери смысл, близкий к школьному предложению. Дословно заучивать не нужно."]
      ),
      task: {
        id: "h02-q-miasto",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Miasto-państwo to:", "Місто-держава — це:", "Miasto-państwo — это:"),
        options: [
          { id: "a", label: L("tylko jedna świątynia bez ziemi i władcy", "лише один храм без землі і правителя", "только один храм, без земли и правителя") },
          { id: "b", label: L("miasto wraz z otaczającym je obszarem, które miało własnego władcę", "місто разом із навколишньою територією, яке мало власного правителя", "город вместе с окрестной землёй и со своим правителем") },
          { id: "c", label: L("cały dzisiejszy świat", "увесь сьогоднішній світ", "весь сегодняшний мир") }
        ],
        answer: "b",
        hint: L("Miasto + okolica + własny władca.", "Місто + околиця + власний правитель.", "Город, земля вокруг и свой правитель."),
        explanation: L(
          "Miasto-państwo było miastem wraz z otaczającym je obszarem, które miało własnego władcę.",
          "Місто-держава було містом разом із навколишньою територією і мало власного правителя.",
          "Школьное предложение: „Miasto-państwo było miastem wraz z otaczającym je obszarem, które miało własnego władcę”. Важен смысл: город, его земля и своя власть."
        )
      }
    },
    {
      type: "practice",
      module: "miasta",
      track: "both",
      heading: L("Miasta na mapie", "Міста на карті", "Города на карте"),
      task: {
        id: "h02-map-miasta",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Który zestaw to sumeryjskie miasta z mapy lekcji?", "Який набір — шумерські міста з карти уроку?", "Какой набор — шумерские города с карты урока?"),
        options: [
          { id: "a", label: L("Gniezno, Kraków, Poznań", "Гнєзно, Краків, Познань", "Gniezno, Kraków, Poznań") },
          { id: "b", label: L("Uruk, Ur, Lagasz", "Урук, Ур, Лагаш", "Uruk, Ur, Lagasz") },
          { id: "c", label: L("Ateny, Sparta, Rzym", "Афіни, Спарта, Рим", "Ateny, Sparta, Rzym") }
        ],
        answer: "b",
        hint: L(
          "Szukaj nazw przy ujściu Eufratu i Tygrysu do Zatoki Perskiej.",
          "Шукай назви біля гирла Євфрату і Тигру в Перську затоку.",
          "Ищи названия у Персидского залива."
        ),
        explanation: L(
          "Uruk, Ur, Lagasz — miasta Sumeru. Babilon jest później stolicą Babilonii.",
          "Урук, Ур, Лагаш — міста Шумеру. Вавилон пізніше столиця Вавилонії.",
          "Uruk, Ur, Lagasz — города Шумера на юге. Babilon позже стал столицей Вавилонии."
        )
      }
    },
    {
      type: "practice",
      module: "miasta",
      heading: L("Ur i Babilon", "Ур і Вавилон", "Ур и Вавилон"),
      task: {
        id: "h02-map-babilon",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L("Które zdanie o mapie jest prawdziwe?", "Яке речення про карту правдиве?", "Какое предложение о карте верное?"),
        options: [
          { id: "a", label: L("Ur to miasto Sumeru; Babilon — stolica Babilonii w II tys. p.n.e.", "Ур — місто Шумеру; Вавилон — столиця Вавилонії в II тис. до н.е.", "Ur — город Шумера; Babilon — столица Вавилонии во II тыс. до н. э.") },
          { id: "b", label: L("Babilon leży nad Nilem, a Ur w Grecji", "Вавилон лежить над Нілом, а Ур у Греції", "Вавилон на Ниле, а Ур в Греции") },
          { id: "c", label: L("Na mapie nie ma rzek", "На карті немає річок", "На карте нет рек") }
        ],
        answer: "a",
        hint: L("Książka nauczyciela każe wskazać Ur i Babilon.", "Книжка вчителя каже вказати Ур і Вавилон.", "Ur на юге, Babilon — столица позже."),
        explanation: L(
          "Ur — port Sumeru przy ujściu Eufratu. Babilon — stolica później, w II tysiącleciu p.n.e.",
          "Ур — порт Шумеру біля гирла Євфрату. Вавилон — столиця пізніше, в II тисячолітті до н.е.",
          "Ur — порт Шумера у устья Евфрата. Babilon — столица позже, во II тысячелетии до н. э."
        )
      }
    },
    {
      type: "example",
      module: "miasta",
      heading: L("Źródło: Sztandar z Ur", "Джерело: Штандарт з Ура", "Источник: штандарт из Ура"),
      formula: "ŹRÓDŁO: zabytkowa skrzynia",
      visual: pic(
        "015.png",
        L("Sztandar z Ur", "Штандарт з Ура", "Штандарт из Ура"),
        L("Sztandar z Ur: uczta, zwierzęta, mieszkańcy", "Штандарт з Ура: бенкет, тварини, мешканці", "Штандарт из Ура: пир, животные, жители")
      ),
      text: {
        pl: [
          "Bogato zdobiona skrzynia z Ur. Pokazuje mieszkańców, uczty i hodowane zwierzęta.",
          "To źródło obrazkowe: mówi o życiu w mieście, nie o imionach biesiadników."
        ],
        ua: [
          "Багато оздоблена скриня з Ура. Показує мешканців, бенкети і свійських тварин.",
          "Це образне джерело: каже про життя в місті, не про імена гостей."
        ],
        ru: [
          "Это украшенный ящик из Ура. На нём жители, пир и домашние животные.",
          "Источник показывает жизнь города, а не имена гостей."
        ]
      },
      task: {
        id: "h02-sztandar",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L("Sztandar z Ur jest źródłem przede wszystkim do pytania:", "Штандарт з Ура є джерелом передусім до питання:", "Штандарт из Ура помогает ответить прежде всего на вопрос:"),
        options: [
          { id: "a", label: L("jak wyglądało życie i zwyczaje mieszkańców Ur", "як виглядало життя і звичаї мешканців Ура", "как жили и какие обычаи были у жителей Ура") },
          { id: "b", label: L("jaka była dokładna data urodzenia każdego króla", "яка була точна дата народження кожного царя", "точная дата рождения каждого царя") },
          { id: "c", label: L("jakie hasła nosiła dzisiejsza prasa w Iraku", "які гасла мала сьогоднішня преса в Іраку", "какие заголовки у сегодняшних газет Ирака") }
        ],
        answer: "a",
        hint: L("Podręcznik: mieszkańcy, uczty, zwierzęta.", "Підручник: мешканці, бенкети, тварини.", "На рисунке жители, пир и животные."),
        explanation: L(
          "Widzimy stroje, uczty, hodowlę. Nie zgadujemy PESEL-i królów.",
          "Бачимо строї, бенкети, худобу. Не вигадуємо паспортів царів.",
          "Мы видим одежду, пир и скот. Точные даты рождения царей по этому ящику не восстановить."
        )
      }
    },
    {
      type: "concept",
      module: "miasta",
      heading: L("Jak czytać oś czasu", "Як читати вісь часу", "Как читать ось времени"),
      visual: {
        kind: "image-placeholder",
        url: "./img/os-czasu-zeszyt.jpg",
        alt: L("Oś czasu: 3800, 3300 i 2800 rok p.n.e.", "Вісь часу: 3800, 3300 і 2800 рік до н.е.", "Ось: 3800, 3300 и 2800 год до н. э."),
        title: L("Oś z zeszytu, strona 7", "Вісь із зошита, сторінка 7", "Ось из тетради, страница 7")
      },
      text: {
        pl: [
          "Napis p.n.e. znaczy „przed naszą erą”: im mniejsza liczba, tym bliżej naszych czasów.",
          "Na osi czas idzie od lewej do prawej, od dat wcześniejszych do późniejszych: 3800, potem 3300, potem 2800.",
          "Podręcznik podaje powstanie pierwszych sumeryjskich miast-państw około 3500 roku p.n.e., w IV tysiącleciu. Tej daty nie ma wśród trzech podpisów na osi. 3500 leży między 3800 a 3300."
        ],
        ua: [
          "Напис p.n.e. означає «до нашої ери»: чим менше число, тим ближче до нашого часу.",
          "На осі час іде зліва направо, від раніших дат до пізніших: 3800, потім 3300, потім 2800.",
          "Підручник подає виникнення перших шумерських міст-держав близько 3500 року до н.е., у IV тисячолітті. Цієї дати немає серед трьох підписів на осі. 3500 лежить між 3800 і 3300."
        ],
        ru: [
          "Надпись p.n.e. значит «до нашей эры». Чем меньше число, тем дата позже и ближе к нашему времени.",
          "На оси время идёт слева направо: от более ранних дат к более поздним. 3800 раньше, чем 3300, а 3300 раньше, чем 2800. Не путай годы с веками.",
          "В учебнике первые шумерские города-государства — около 3500 года до н. э., IV тысячелетие. Этого года нет среди трёх подписей на оси. 3500 лежит между 3800 и 3300."
        ]
      }
    },
    {
      type: "practice",
      module: "miasta",
      heading: L("Zeszyt, strona 7, zadanie 1", "Зошит, сторінка 7, завдання 1", "Тетрадь, страница 7, задание 1"),
      zeszyt: {
        id: "h02-z7-1",
        lead: L(
          ["Otwórz stronę 7, zadanie 1a–b. Nad osią napisz nazwę epoki. Na osi zaznacz rok pierwszych sumeryjskich miast-państw. Najpierw zrób to sam."],
          ["Відкрий сторінку 7, завдання 1a–b. Над віссю напиши назву епохи. На осі познач рік перших шумерських міст-держав. Спочатку зроби це сам."],
          ["Открой страницу 7, задание 1a–b. Над осью напиши название эпохи. На оси отметь год возникновения первых шумерских городов-государств. Сначала сделай это сам."]
        ),
        answers: [
          {
            label: L("1a. Epoka", "1a. Епоха", "1a. Эпоха"),
            text: L(
              ["epoka brązu"],
              ["epoka brązu"],
              ["epoka brązu"]
            ),
            why: L(
              ["W szkolnym podziale po epoce kamienia przychodzi epoka brązu. To nazwa, którą wpisujemy nad tą osią. Jeśli nauczycielka podała inne słowo z podręcznika, wpisz je."],
              ["У шкільному поділі після доби каменю йде доба бронзи. Це назва над цією віссю. Якщо вчителька дала інше слово з підручника, запиши його."],
              ["В школьной последовательности после каменного века идёт бронзовый. Над осью пишем: epoka brązu. Если учительница дала другое слово со страницы учебника, запиши его."]
            )
          },
          {
            label: L("1b. Rok", "1b. Рік", "1b. Год"),
            text: L(
              ["Około 3500 roku p.n.e. Na tej osi najbliższy podpisany rok to 3300 rok p.n.e."],
              ["Близько 3500 року до н.е. На цій осі найближчий підписаний рік — 3300 рік до н.е."],
              ["Около 3500 года до н. э. На этой оси ближайший подписанный год — 3300 rok p.n.e."]
            ),
            why: L(
              ["Podręcznik nie podaje jednego z trzech podpisów jako jedynej daty. Data lekcji to około 3500 roku p.n.e. (IV tysiąclecie). 3500 nie jest napisane na osi: leży między 3800 a 3300, bliżej 3300. Zaznacz 3300 i dopisz „ok. 3500”, żeby było widać datę z lekcji."],
              ["Підручник не подає один із трьох підписів як єдину дату. Дата уроку — близько 3500 року до н.е. (IV тисячоліття). 3500 не написано на осі: воно між 3800 і 3300, ближче до 3300. Познач 3300 і допиши «ok. 3500»."],
              ["Учебник не называет одну из трёх подписей единственно верным годом. Школьная дата урока — около 3500 года до н. э. (IV tysiąclecie). На оси её нет: она между 3800 и 3300, ближе к 3300. Отметь 3300 и рядом допиши «ok. 3500», чтобы было видно дату из урока. 2800 — уже заметно позже."]
            )
          }
        ]
      }
    },

    {
      type: "goal",
      module: "sumerowie",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("powiedzieć, do czego służyły koło i żagiel", "сказати, для чого служили колесо і вітрило", "сказать, какую пользу приносили колесо и парус"),
        L("pamiętać, że najważniejszym dokonaniem było pismo", "пам’ятати, що найважливішим досягненням було письмо", "помнить, что самым важным достижением было письмо")
      ]
    },
    {
      type: "concept",
      module: "sumerowie",
      heading: L("Pismo i liczba 60", "Письмо і число 60", "Письмо и число 60"),
      text: {
        pl: [
          ["Najważniejsze dokonanie: ", em("pismo klinowe"), " — znaki odciskane trzciną na glinianych tabliczkach."],
          "Matematyka: liczenie o podstawie 60. Do dziś godzina ma 60 minut, minuta 60 sekund. Tym systemem liczymy też kąty.",
          ["Przypisuje im się też ", em("koło garncarskie"), ". O kole i żaglu — na następnych kartach, bo tego dotyczy zeszyt."]
        ],
        ua: [
          ["Найважливіше досягнення: ", em("клинопис"), " — знаки, відтиснуті очеретом на глиняних табличках."],
          "Математика: лічба з основою 60. Досі година має 60 хвилин, хвилина 60 секунд. Цією системою рахуємо і кути.",
          ["Їм приписують також ", em("гончарне коло"), ". Про колесо і вітрило — на наступних картках, бо цього стосується зошит."]
        ],
        ru: [
          ["Самое важное достижение: ", em("pismo klinowe"), " — клинопись. Знаки вдавливали тростинкой в глиняные таблички."],
          "Счёт с основанием 60. До сих пор в часе 60 минут, в минуте 60 секунд. Так же считают углы.",
          ["Им приписывают и ", em("koło garncarskie"), " — гончарный круг. Колесо и парус разберём отдельно: они нужны для тетради."]
        ]
      }
    },
    {
      type: "visual",
      module: "sumerowie",
      heading: L("Koło", "Колесо", "Колесо"),
      visual: pic(
        "016.png",
        L("Dokonania Sumerów", "Досягнення шумерів", "Достижения шумеров"),
        L("Pismo, żagiel, koło, koło garncarskie, system 60", "Письмо, вітрило, колесо, гончарне коло, система 60", "Письмо, парус, колесо, гончарный круг и система 60")
      ),
      text: {
        pl: [
          [em("Koło"), " — ułatwiało przewożenie ludzi i towarów po lądzie. Wóz z kołami był lżejszy w drodze niż sam ciężar na plecach."]
        ],
        ua: [
          [em("Колесо"), " — полегшувало перевезення людей і товарів суходолом. Віз із колесами був легший у дорозі, ніж самий тягар на плечах."]
        ],
        ru: [
          [em("Koło"), " — колесо. Оно облегчило перевозку грузов и помогло развитию транспорта. Повозка на колёсах везла то, что раньше несли на себе."],
          "На общем рисунке есть и колесо, и парус. Польское название колеса — koło.",
          "Готовое предложение для тетради откроется после твоей попытки."
        ]
      }
    },
    {
      type: "concept",
      module: "sumerowie",
      heading: L("Żagiel", "Вітрило", "Парус"),
      text: {
        pl: [
          [em("Żagiel"), " pozwalał użyć siły wiatru. Łodzie płynęły po rzekach i woziły towary łatwiej niż sama siła wioseł."]
        ],
        ua: [
          [em("Вітрило"), " давало змогу використати силу вітру. Човни пливли річками і везли товари легше, ніж самою силою весел."]
        ],
        ru: [
          [em("Żagiel"), " — парус. Он позволял использовать силу ветра, чтобы двигать лодки и корабли. Так было легче передвигаться и возить товары по воде."],
          "Колесо помогало на суше, парус — на воде. Готовые фразы для тетради пока спрятаны."
        ]
      }
    },
    {
      type: "practice",
      module: "sumerowie",
      track: "both",
      heading: L("Co wynaleźli Sumerowie?", "Що винайшли шумери?", "Что создали шумеры?"),
      task: {
        id: "h02-dokonania",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L("Które dokonania podręcznik przypisuje Sumerom?", "Які досягнення підручник приписує шумерам?", "Какие достижения учебник приписывает шумерам?"),
        options: [
          { id: "a", label: L("pismo, koło, żagiel i koło garncarskie", "письмо, колесо, вітрило і гончарне коло", "письмо, колесо, парус и гончарный круг") },
          { id: "b", label: L("proch i kompas", "порох і компас", "порох и компас") },
          { id: "c", label: L("drukarnię Gutenberga", "друкарню Гутенберга", "печатный станок Гутенберга") }
        ],
        answer: "a",
        hint: L("Najważniejsze było pismo. Reszta: transport i rzemiosło.", "Найважливішим було письмо. Решта: транспорт і ремесло.", "Самое важное — письмо. Дальше транспорт и ремесло."),
        explanation: L(
          "To lista z podsumowania tematu. System 60 też jest ich pomysłem.",
          "Це список із підсумку теми. Система 60 теж їхня думка.",
          "Письмо, колесо, парус и гончарный круг. Система счёта 60 — тоже их идея."
        )
      }
    },
    {
      type: "problem",
      module: "sumerowie",
      track: "both",
      heading: L("Odpowiedź pisemna", "Письмова відповідь", "Письменный ответ"),
      prompt: L(
        "Wymień najważniejsze dokonania cywilizacji Sumerów (krótko).",
        "Назви найважливіші досягнення цивілізації шумерів (коротко).",
        "Назови самое важное достижение шумеров одним польским словом."
      ),
      task: {
        id: "h02-write",
        type: "input-text",
        level: "B",
        coach: true,
        question: L(
          "Wpisz najważniejsze słowo-dokonanie Sumerów (to, od którego zaczyna się historia zapisana).",
          "Введи найважливіше слово-досягнення шумерів (те, від якого починається записана історія).",
          "Впиши по-польски главное достижение, с которого начинается записанная история."
        ),
        answer: ["pismo", "pismo klinowe", "klinowe", "письмо", "клинопис", "клинопись"],
        hint: L(
          "Podręcznik mówi: najważniejsze było stworzenie pisma.",
          "Підручник каже: найважливішим було створення письма.",
          "По-польски это pismo."
        ),
        explanation: L(
          "Pismo. Potem: koło, żagiel, koło garncarskie, system 60.",
          "Письмо. Потім: колесо, вітрило, гончарне коло, система 60.",
          "Pismo — письмо. Дальше: koło, żagiel, koło garncarskie и счёт с основанием 60."
        )
      }
    },
    {
      type: "practice",
      module: "sumerowie",
      heading: L("Zeszyt, strona 8, zadanie 4", "Зошит, сторінка 8, завдання 4", "Тетрадь, страница 8, задание 4"),
      zeszyt: {
        id: "h02-z8-4",
        lead: L(
          ["Otwórz stronę 8, zadanie 4. Napisz, jaką korzyść przynosiły koło i żagiel. Najpierw sam."],
          ["Відкрий сторінку 8, завдання 4. Напиши, яку користь приносили колесо і вітрило. Спочатку сам."],
          ["Открой рабочую тетрадь на странице 8 и выполни задание 4. Напиши, какую пользу людям приносили изобретения шумеров: колесо и парус. Сначала сам."]
        ),
        answers: [
          {
            label: L("Koło", "Koło", "Koło — колесо"),
            text: L(
              ["Ułatwiało transport ludzi i przewożenie towarów."],
              ["Ułatwiało transport ludzi i przewożenie towarów."],
              ["Ułatwiało transport ludzi i przewożenie towarów."]
            ),
            why: L(
              ["Sens: łatwiejszy transport lądem. Inne zdanie z tym samym sensem jest dobre."],
              ["Зміст: легший транспорт суходолом. Інше речення з тим самим змістом добре."],
              ["Колесо облегчало перевозки по суше. Подойдёт и другая фраза, если смысл тот же."]
            )
          },
          {
            label: L("Żagiel", "Żagiel", "Żagiel — парус"),
            text: L(
              ["Umożliwiał poruszanie się łodzi dzięki sile wiatru."],
              ["Umożliwiał poruszanie się łodzi dzięki sile wiatru."],
              ["Umożliwiał poruszanie się łodzi dzięki sile wiatru."]
            ),
            why: L(
              ["Sens: łódź płynie dzięki wiatrowi. Nie trzeba kopiować wzoru słowo w słowo."],
              ["Зміст: човен пливе завдяки вітру. Не треба копіювати зразок слово в слово."],
              ["Парус двигал лодку силой ветра. Дословное совпадение не обязательно, если смысл сохранён."]
            )
          }
        ]
      }
    },
    {
      type: "check",
      module: "sumerowie",
      track: "both",
      heading: L("Co zostało do dziś?", "Що лишилося досі?", "Что осталось до сих пор?"),
      task: {
        id: "h02-60",
        type: "true-false",
        level: "C",
        coach: true,
        question: L(
          "Podział godziny na 60 minut ma korzenie w matematyce Sumerów — prawda czy fałsz?",
          "Поділ години на 60 хвилин має коріння в математиці шумерів — правда чи неправда?",
          "Деление часа на 60 минут связано с математикой шумеров. Правда или ложь?"
        ),
        answer: true,
        hint: L("Podstawa 60. Spójrz na zegarek.", "Основа 60. Подивись на годинник.", "Основа их счёта — 60."),
        explanation: L(
          "System sześćdziesiątkowy Sumerów żyje w czasie i w kątach (360°).",
          "Шістдесяткова система шумерів живе в часі і в кутах (360°).",
          "Правда. Их система с основанием 60 живёт в часах и в углах (360°)."
        )
      }
    },

    {
      type: "goal",
      module: "hammurabi",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("powiedzieć, kim był Hammurabi i po co spisano prawa", "сказати, ким був Хаммурапі і навіщо записали закони", "сказать, кем был Хаммурапи и зачем записали законы"),
        L("odpowiedzieć na zadanie 5 w zeszycie ze źródła, nie z pamięci o współczesnym prawie", "відповісти на завдання 5 в зошиті з джерела, не з пам’яті про сучасне право", "ответить на задание 5 по тексту источника, а не по современным законам")
      ]
    },
    {
      type: "vocabulary",
      module: "hammurabi",
      heading: L("Słowa o prawie", "Слова про право", "Слова о законе"),
      rows: [
        { pl: "Hammurabi", ua: "Хаммурапі", ru: "Хаммурапи" },
        { pl: "król", ua: "цар", ru: "царь" },
        { pl: "Kodeks Hammurabiego", ua: "Кодекс Хаммурапі", ru: "Кодекс Хаммурапи" },
        { pl: "prawo", ua: "закон", ru: "закон" },
        { pl: "kara", ua: "кара", ru: "наказание" }
      ]
    },
    {
      type: "concept",
      module: "hammurabi",
      heading: L("W Babilonii: Hammurabi", "У Вавилонії: Хаммурапі", "В Вавилонии: Хаммурапи"),
      formula: "II tys. p.n.e. · szczyt: XVIII wiek p.n.e.",
      text: {
        pl: [
          "W II tysiącleciu p.n.e. nad tymi samymi rzekami wyrosła Babilonia. Stolica: Babilon — mury, świątynie, pałace, handel.",
          ["Szczyt potęgi: XVIII wiek p.n.e., król ", em("Hammurabi"), ". Podbił dużą część Mezopotamii, także miasta Sumerów."],
          ["Kazał spisać ", em("Kodeks Hammurabiego"), " — jeden z najstarszych zbiorów praw. Kary surowe (np. „oko za oko, ząb za ząb”)."],
          "Babilończycy przejęli wynalazki Sumerów. Sami: duże liczby i ułamki, astronomia, kalendarz 12 miesięcy i tydzień z 7 dni — bliski naszemu.",
          "Prawa ustalają zasady i skutki ich złamania. W tym państwie kary bywały bardzo surowe, a ludzie o różnej pozycji nie zawsze mieli taką samą ochronę."
        ],
        ua: [
          "У II тисячолітті до н.е. над тими самими річками виросла Вавилонія. Столиця: Вавилон — мури, храми, палаци, торгівля.",
          ["Вершина могутності: XVIII століття до н.е., цар ", em("Хаммурапі"), ". Підкорив велику частину Месопотамії, також міста шумерів."],
          ["Наказав записати ", em("Кодекс Хаммурапі"), " — одну з найдавніших збірок законів. Кари суворі (напр. «око за око, зуб за зуб»)."],
          "Вавилоняни перейняли винаходи шумерів. Самі: великі числа і дроби, астрономія, календар 12 місяців і тиждень із 7 днів — близький до нашого.",
          "Закони встановлюють правила і наслідки їх порушення. У цій державі кари бували дуже суворі, а люди різного становища не завжди мали однаковий захист."
        ],
        ru: [
          "Хаммурапи был царём Вавилона. Вавилония выросла во II тысячелетии до н. э. у тех же рек. Столица — Babilon.",
          "Вершина его власти — XVIII век до н. э. Он подчинил большую часть Месопотамии, в том числе шумерские города.",
          ["Он приказал записать ", em("Kodeks Hammurabiego"), " — кодекс Хаммурапи, один из древнейших сборников законов. Наказания были суровыми."],
          "Законы нужны, чтобы были правила поведения и было понятно, что будет за нарушение.",
          "В древности наказания могли быть очень суровыми. Люди разных групп не всегда имели одинаковую защиту. Не переноси сюда современные законы.",
          "Вавилоняне переняли изобретения шумеров. Сами они считали большие числа и дроби, наблюдали небо и пользовались календарём из 12 месяцев и недели из 7 дней."
        ]
      }
    },
    {
      type: "visual",
      module: "hammurabi",
      heading: L("Kodeks w kamieniu", "Кодекс у камені", "Кодекс на камне"),
      visual: pic(
        "017.png",
        L("Kodeks Hammurabiego", "Кодекс Хаммурапі", "Кодекс Хаммурапи"),
        L("Stela Hammurabiego: król, bóg, pismo klinowe", "Стела Хаммурапі: цар, бог, клинопис", "Стела Хаммурапи: царь, бог и клинопись")
      ),
      text: {
        pl: ["Źródło obrazkowe: władza (król) i bóg, a pod spodem prawo wyryte w kamieniu — żeby było wiadomo, jaka kara."],
        ua: ["Образне джерело: влада (цар) і бог, а внизу право, вибите в камені — щоб було відомо, яка кара."],
        ru: ["Это стела: наверху царь и бог, внизу законы, вырезанные в камне. Так все могли узнать правило и наказание."]
      }
    },
    {
      type: "algorithm",
      module: "hammurabi",
      heading: L("Postępek, reguła, kara", "Вчинок, правило, кара", "Поступок, правило, наказание"),
      reveal: true,
      steps: [
        { formula: "POSTĘPEK", text: L("Ktoś coś zrobił.", "Хтось щось зробив.", "Человек что-то сделал.") },
        { formula: "REGUŁA", text: L("W kodeksie jest zapis, co wolno, a czego nie.", "У кодексі є запис, що можна, а чого ні.", "В кодексе записано, как поступать.") },
        { formula: "KARA", text: L("Za złamanie reguły jest znana kara. W tym kodeksie często surowa.", "За порушення є відома кара. У цьому кодексі часто сувора.", "За нарушение было известное наказание. В этом кодексе оно часто очень суровое.") }
      ]
    },
    {
      type: "example",
      module: "hammurabi",
      heading: L("Tekst z zeszytu, strona 8", "Текст із зошита, сторінка 8", "Текст из тетради, страница 8"),
      text: {
        pl: [
          "195. Jeżeli syn ojca swego uderzył, rękę utną mu.",
          "196. Jeśli obywatel oko obywatelowi wybił, oko wybiją mu.",
          "199. Jeśli oko niewolnika obywatela wybił lub kość niewolnika obywatela złamał, połowę ceny jego zapłaci.",
          "229. Jeśli murarz obywatelowi dom zbudował, a pracy swej nie umocnił i dom zawalił się i spowodował śmierć właściciela domu, murarz ten zostanie zabity.",
          "Przeczytaj te cztery zdania. Jeszcze nie zaznaczaj odpowiedzi w zeszycie na pamięć. Szukaj w tekście."
        ],
        ua: [
          "195. Якщо син ударив свого батька, руку йому відрубають.",
          "196. Якщо громадянин вибив око громадянину, йому виб’ють око.",
          "199. Якщо вибив око рабу громадянина або зламав кістку рабу громадянина, заплатить половину його ціни.",
          "229. Якщо муляр збудував громадянину дім, не укріпив роботу, дім завалився і спричинив смерть власника, цього муляра вб’ють.",
          "Прочитай ці чотири речення. Ще не позначай відповідь у зошиті з пам’яті. Шукай у тексті."
        ],
        ru: [
          "195. Если сын ударил своего отца, ему отрубят руку.",
          "196. Если гражданин выбил глаз гражданину, ему выбьют глаз.",
          "199. Если он выбил глаз рабу гражданина или сломал рабу кость, он заплатит половину его цены.",
          "229. Если строитель плохо построил дом, дом рухнул и хозяин погиб, строителя убьют.",
          "Это тот самый фрагмент со страницы 8. Прочитай его в тетради. Букву ответа пока не выбирай по догадке: ищи слова в тексте. Готовый вариант откроется после твоей попытки."
        ]
      }
    },
    {
      type: "concept",
      module: "hammurabi",
      heading: L("Nie wszyscy tak samo", "Не всі однаково", "Не все одинаково"),
      text: {
        pl: [
          "Porównaj zdanie 196 i zdanie 199. W obu ktoś traci oko.",
          "Przy obywatelu kara jest taka sama jak szkoda. Przy niewolniku sprawca płaci część ceny.",
          "To nie jest dzisiejsze prawo. W tym źródle pozycja człowieka zmienia karę."
        ],
        ua: [
          "Порівняй речення 196 і речення 199. В обох хтось втрачає око.",
          "Для громадянина кара така сама, як шкода. Для раба винний платить частину ціни.",
          "Це не сьогоднішнє право. У цьому джерелі становище людини змінює кару."
        ],
        ru: [
          "Сравни строки 196 и 199. В обеих кто-то лишается глаза.",
          "Если пострадал гражданин, наказание повторяет вред. Если пострадал раб, виновный платит часть цены.",
          "Это не современные правила. В этом источнике положение человека меняло наказание. Не говори, что перед законом Хаммурапи все были равны."
        ]
      }
    },
    {
      type: "practice",
      module: "hammurabi",
      heading: L("Zeszyt, strona 8, zadanie 5", "Зошит, сторінка 8, завдання 5", "Тетрадь, страница 8, задание 5"),
      zeszyt: {
        id: "h02-z8-5",
        lead: L(
          ["Zadanie 5a: podkreśl dokończenie, które pasuje do fragmentu. Zadanie 5b: napisz, czy wszyscy ludzie byli traktowani tak samo, i uzasadnij tekstem. Najpierw sam."],
          ["Завдання 5a: підкресли закінчення, яке пасує до фрагмента. Завдання 5b: напиши, чи всіх людей трактували однаково, і обґрунтуй текстом. Спочатку сам."],
          ["Открой страницу 8. Задание 5a: выбери вариант, который соответствует фрагменту кодекса. Задание 5b: определи, одинаково ли обращались со всеми людьми, и обоснуй ответ текстом. Сначала сам."]
        ),
        answers: [
          {
            label: L("5a", "5a", "5a"),
            text: L(
              ["D. złe traktowanie rodziców, okaleczenie drugiego człowieka, źle wykonaną pracę."],
              ["D. złe traktowanie rodziców, okaleczenie drugiego człowieka, źle wykonaną pracę."],
              ["D. złe traktowanie rodziców, okaleczenie drugiego człowieka, źle wykonaną pracę."]
            ),
            why: L(
              ["195 mówi o synu, który uderzył ojca — złe traktowanie rodziców. 196 i 199 mówią o uszkodzeniu ciała — okaleczenie. 229 mówi o domu, który się zawalił — źle wykonana praca. W tekście nie ma bitwy, kradzieży pieniędzy ani traktowania żony, więc nie A, nie B i nie C."],
              ["195 — про сина, який ударив батька. 196 і 199 — про ушкодження тіла. 229 — про погано збудований дім. У тексті немає битви, крадіжки грошей і трактування дружини, тому не A, не B і не C."],
              ["Почему D. Строка 195 — удар отца, это плохое обращение с родителями. Строки 196 и 199 — увечье. Строка 229 — плохо построенный дом. В тексте нет проигранной битвы, кражи денег и обращения с женой, поэтому не A, не B и не C. Найди эти строки в тетради ещё раз."]
            )
          },
          {
            label: L("5b", "5b", "5b"),
            text: L(
              ["Nie wszyscy ludzie byli traktowani tak samo. Kary zależały między innymi od pozycji społecznej poszkodowanego. Świadczy o tym fragment kodeksu dotyczący uszkodzenia ciała obywatela i niewolnika."],
              ["Nie wszyscy ludzie byli traktowani tak samo. Kary zależały między innymi od pozycji społecznej poszkodowanego. Świadczy o tym fragment kodeksu dotyczący uszkodzenia ciała obywatela i niewolnika."],
              ["Nie wszyscy ludzie byli traktowani tak samo. Kary zależały między innymi od pozycji społecznej poszkodowanego. Świadczy o tym fragment kodeksu dotyczący uszkodzenia ciała obywatela i niewolnika."]
            ),
            why: L(
              ["Oko obywatela: oko za oko. Oko niewolnika: zapłata połowy ceny. To dowód z tekstu, nie z dzisiejszego prawa. Inne zdanie jest dobre, jeśli powołuje się na obywatela i niewolnika."],
              ["Око громадянина: око за око. Око раба: плата половини ціни. Це доказ із тексту. Інше речення добре, якщо посилається на громадянина і раба."],
              ["Ответ «нет». За глаз гражданина — глаз за глаз (строка 196). За глаз раба — половина цены (строка 199). Положение человека меняло наказание. Другая фраза подойдёт, если в ней есть это доказательство из текста. Приложение не проверяет почерк: сравни сам."]
            )
          }
        ]
      }
    },
    {
      type: "check",
      module: "hammurabi",
      heading: L("Jedno zdanie na koniec", "Одне речення наприкінці", "Одно предложение на закрепление"),
      task: {
        id: "h02-z8-5-check",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Dlaczego kara za oko niewolnika była inna niż za oko obywatela?",
          "Чому кара за око раба була інша, ніж за око громадянина?",
          "Почему наказание за глаз раба отличалось от наказания за глаз гражданина?"
        ),
        options: [
          { id: "a", label: L("bo kodeks nie widział żadnej różnicy", "бо кодекс не бачив жодної різниці", "потому что кодекс не видел никакой разницы") },
          { id: "b", label: L("bo pozycja społeczna poszkodowanego zmieniała karę", "бо соціальне становище потерпілого змінювало кару", "потому что положение пострадавшего меняло наказание") },
          { id: "c", label: L("bo w Babilonie nie było niewolników", "бо у Вавилоні не було рабів", "потому что в Вавилоне не было рабов") }
        ],
        answer: "b",
        hint: L("Porównaj zdanie 196 i 199.", "Порівняй речення 196 і 199.", "Сравни строки 196 и 199."),
        explanation: L(
          "Obywatel i niewolnik nie mieli tej samej ochrony. Tekst to pokazuje wprost.",
          "Громадянин і раб не мали однакового захисту. Текст показує це прямо.",
          "Верно B. Строка 199 говорит о рабе и о плате, строка 196 — о гражданине и о том же вреде. Это и есть доказательство."
        )
      }
    },
    {
      type: "challenge",
      module: "hammurabi",
      track: "both",
      heading: L("Oko za oko", "Око за око", "Око за око"),
      task: {
        id: "h02-kodeks",
        type: "single-choice",
        level: "C",
        coach: true,
        question: L(
          "Zasada „oko za oko, ząb za ząb” w Kodeksie Hammurabiego oznacza głównie:",
          "Засада «око за око, зуб за зуб» у Кодексі Хаммурапі означає головно:",
          "Правило «око за око» в кодексе Хаммурапи значит прежде всего:"
        ),
        options: [
          { id: "a", label: L("że kara ma być podobna do szkody — prawo jest surowe i jasne", "що кара має бути подібна до шкоди — право суворе і ясне", "наказание похоже на вред: закон суровый и ясный") },
          { id: "b", label: L("że w Babilonie nie było żadnych praw", "що у Вавилоні не було жодних законів", "что в Вавилоне не было никаких законов") },
          { id: "c", label: L("że każdy mógł wybaczyć wszystko bez sądu", "що кожен міг усе вибачити без суду", "что каждый мог всё простить без суда") }
        ],
        answer: "a",
        hint: L("To nie żart. To surowe, spisane prawo.", "Це не жарт. Це суворе, записане право.", "Это не шутка. Это записанный суровый закон."),
        explanation: L(
          "Kodeks pokazuje, że państwo chce ładu przez znane kary. Dla nas dziś wiele z nich jest okrutnych — to też wniosek historyka.",
          "Кодекс показує, що держава хоче ладу через відомі кари. Для нас сьогодні багато з них жорстокі — це теж висновок історика.",
          "Кодекс задаёт известное наказание, часто такое же тяжёлое, как вред. Для нас многие кары жестоки — это тоже вывод."
        )
      }
    },
    {
      type: "check",
      module: "hammurabi",
      track: "both",
      heading: L("Czy już umiem?", "Чи вже вмію?", "Уже умею?"),
      task: {
        id: "h02-check-hammurabi",
        type: "true-false",
        level: "B",
        coach: true,
        question: L(
          "Hammurabi, król Babilonu w XVIII w. p.n.e., kazał spisać surowy kodeks praw — prawda czy fałsz?",
          "Хаммурапі, цар Вавилона в XVIII ст. до н.е., наказав записати суворий кодекс законів — правда чи неправда?",
          "Хаммурапи, царь Вавилона в XVIII веке до н. э., приказал записать суровый кодекс. Правда или ложь?"
        ),
        answer: true,
        hint: L("To punkt z podsumowania w podręczniku.", "Це пункт із підсумку в підручнику.", "Это пункт из итога учебника."),
        explanation: L(
          "Babilonia, Hammurabi, Kodeks — kanon klasy 5.",
          "Вавилонія, Хаммурапі, Кодекс — канон 5 класу.",
          "Правда. Babilonia, Hammurabi, Kodeks — это школьный канон 5 класса."
        )
      }
    },
    {
      type: "example",
      module: "hammurabi",
      heading: L("Źródło: Herodot o Babilonie", "Джерело: Геродот про Вавилон", "Источник: Геродот о Вавилоне"),
      formula: "ŹRÓDŁO (adaptacja)",
      text: {
        pl: [
          "Grecki historyk Herodot (V w. p.n.e.) opisał Babilon: głęboki rów z wodą, wysoki mur z wieżami, droga na murze tak szeroka, że mogła jechać czwórka koni, sto bram, w świątyni wieża na wieży — aż do ośmiu.",
          "To relacja cudzoziemca, spisana później. Mówi o wyglądzie i obronie miasta — nie o imionach strażników."
        ],
        ua: [
          "Грецький історик Геродот (V ст. до н.е.) описав Вавилон: глибокий рів із водою, високий мур із вежами, дорога на мурі така широка, що могла їхати четвірка коней, сто брам, у храмі вежа на вежі — аж до восьми.",
          "Це розповідь чужинця, записана пізніше. Каже про вигляд і захист міста — не про імена вартових."
        ],
        ru: [
          "Греческий историк Геродот (V век до н. э.) описал Вавилон: глубокий ров с водой, высокая стена с башнями, дорога по стене такая широкая, что могла проехать четвёрка лошадей, сто ворот, в храме башня на башне — до восьми.",
          "Это рассказ чужеземца, записанный позже. Он говорит о виде и защите города, а не об именах стражи."
        ]
      },
      task: {
        id: "h02-src-herodot",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Według opisu Herodota Babilon bronił się głównie dzięki:",
          "За описом Геродота Вавилон захищався головно завдяки:",
          "По описанию Геродота Вавилон защищали прежде всего:"
        ),
        options: [
          { id: "a", label: L("rowowi z wodą, wysokiemu murowi, wieżom i bramom", "рову з водою, високому муру, вежам і брамам", "ров с водой, высокая стена, башни и ворота") },
          { id: "b", label: L("wielkiej flocie na Wiśle", "великому флоту на Віслі", "большой флот на Висле") },
          { id: "c", label: L("temu, że nie miał żadnych murów", "тому, що не мав жодних мурів", "тому, что у него не было стен") }
        ],
        answer: "a",
        hint: L("W tekście są: rów, mur, wieże, bramy.", "У тексті є: рів, мур, вежі, брами.", "В тексте есть ров, стена, башни и ворота."),
        explanation: L(
          "Herodot podkreśla fortyfikacje. Nie mylić z opisem Warszawy.",
          "Геродот підкреслює укріплення. Не плутати з описом Варшави.",
          "Геродот подчёркивает укрепления. Это не описание Варшавы."
        )
      }
    },

    {
      type: "goal",
      module: "zeszyt",
      heading: L("Zeszyt, strona 7, zadanie 2", "Зошит, сторінка 7, завдання 2", "Тетрадь, страница 7, задание 2"),
      items: [
        L("wpisać nazwy Tygrysu i Eufratu", "вписати назви Тигру і Євфрату", "вписать Tygrys и Eufrat"),
        L("zaznaczyć cyfrę miasta Ur", "позначити цифру міста Ур", "выбрать цифру города Ur"),
        L("podkreślić stolicę państwa Hammurabiego", "підкреслити столицю держави Хаммурапі", "подчеркнуть столицу государства Хаммурапи")
      ]
    },
    {
      type: "visual",
      module: "zeszyt",
      heading: L("Jeszcze raz ta sama mapa", "Ще раз та сама карта", "Ещё раз та же карта"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-zeszyt.jpg",
        alt: L("Mapa z zeszytu, strona 7", "Карта із зошита, сторінка 7", "Карта из тетради, страница 7"),
        title: L("Zadanie 2", "Завдання 2", "Задание 2")
      },
      text: {
        pl: [
          "Eufrat to rzeka zachodnia, przy Mari. Tygrys to rzeka wschodnia, przy Niniwie.",
          "Ur leży na południu, przy Zatoce Perskiej, na południe od Uruk. Na mapie zeszytu Ur nie ma nazwy — jest cyfrą. Wybierz ją sam.",
          "Stolica Hammurabiego jest podpisana słowem. Szukaj Babilonu."
        ],
        ua: [
          "Євфрат — західна річка, біля Марі. Тигр — східна річка, біля Ніневії.",
          "Ур лежить на півдні, біля Перської затоки, на південь від Урука. На карті зошита Ур не підписаний словом — він є цифрою. Вибери її сам.",
          "Столиця Хаммурапі підписана словом. Шукай Вавилон."
        ],
        ru: [
          "Eufrat — западная река, рядом с ней Mari. Tygrys — восточная река, рядом Niniwa. Левый прямоугольник — Евфрат, верхний — Тигр.",
          "Ur стоит на юге, у Персидского залива, южнее Uruk. На карте тетради его имя не написано: город обозначен цифрой. Посмотри, какая цифра ближе всего к заливу, и выбери сам.",
          "Столицу Хаммурапи на карте уже подписали словом. Это Babilon. Подчеркни это название. Букву и цифру сверь после своей попытки."
        ]
      }
    },
    {
      type: "practice",
      module: "zeszyt",
      heading: L("Zeszyt, strona 7, zadanie 2a–c", "Зошит, сторінка 7, завдання 2a–c", "Тетрадь, страница 7, задание 2a–c"),
      zeszyt: {
        id: "h02-z7-2",
        lead: L(
          ["Wykonaj w zeszycie punkty 2a, 2b i 2c. Potem porównaj."],
          ["Виконай в зошиті пункти 2a, 2b і 2c. Потім порівняй."],
          ["Открой страницу 7 и выполни задание 2a–c: подпиши две реки, выбери цифру города Ur и подчеркни столицу государства Хаммурапи. Сначала в тетради."]
        ),
        answers: [
          {
            label: L("2a. Rzeki", "2a. Річки", "2a. Реки"),
            text: L(
              ["Zachodni prostokąt, przy Mari: Eufrat. Górny, przy Niniwie: Tygrys."],
              ["Західний прямокутник, біля Марі: Eufrat. Верхній, біля Ніневії: Tygrys."],
              ["Западный прямоугольник, у Mari: Eufrat. Верхний, у Niniwa: Tygrys."]
            ),
            why: L(
              ["Eufrat płynie bardziej na zachód, Tygrys bardziej na wschód. Mari leży przy Eufracie, Niniwa przy Tygrysie."],
              ["Євфрат тече західніше, Тигр — східніше. Марі лежить біля Євфрату, Ніневія — біля Тигру."],
              ["Евфрат западнее, Тигр восточнее. Mari стоит у Евфрата, Niniwa — у Тигра. Поэтому левая рамка — Eufrat, верхняя — Tygrys."]
            )
          },
          {
            label: L("2b. Ur", "2b. Ur", "2b. Ur"),
            text: L(["D. 4."], ["D. 4."], ["D. 4."]),
            why: L(
              ["Cyfra 4 jest najdalej na południu, przy Zatoce Perskiej, poniżej Uruk i Larsy. Tam leżał Ur. Cyfra 2 jest przy Niniwie, 1 przy Morzu Śródziemnym, 3 na wschodzie — to nie Ur."],
              ["Цифра 4 найдалі на півдні, біля Перської затоки, нижче Урука і Ларси. Там лежав Ур. Цифра 2 біля Ніневії, 1 біля Середземного моря, 3 на сході — це не Ур."],
              ["Цифра 4 — самая южная, у Персидского залива, ниже Uruk и Larsy. Именно там стоял Ur. Цифра 2 рядом с Niniwa, 1 у Средиземного моря, 3 на востоке. Если на твоём отпечатке цифра читается иначе, сверься с книгой, а не с догадкой."]
            )
          },
          {
            label: L("2c. Stolica", "2c. Столиця", "2c. Столица"),
            text: L(["Babilon"], ["Babilon"], ["Babilon"]),
            why: L(
              ["Hammurabi był królem Babilonu. Na mapie ta nazwa już jest. Podkreśl Babilon, nie Ur i nie Lagasz."],
              ["Хаммурапі був царем Вавилона. На карті ця назва вже є. Підкресли Babilon, не Ur і не Lagasz."],
              ["Хаммурапи правил в Вавилоне. На карте это слово уже написано: Babilon. Подчеркни его, не Ur и не Lagasz."]
            )
          }
        ]
      }
    },
    {
      type: "challenge",
      module: "zeszyt",
      heading: L("Mezopotamia dziś", "Месопотамія нині", "Месопотамия сегодня"),
      text: L(
        ["Książka nauczyciela (poziom wyższy): wskaż współczesne państwa na tym obszarze."],
        ["Книжка вчителя (вищий рівень): вкажи сучасні держави на цій території."],
        ["Это дополнительный вопрос из книги учителя, не из тетради."]
      ),
      task: {
        id: "h02-map-dzis",
        type: "single-choice",
        level: "C",
        coach: true,
        question: L("Na terenie dawnej Mezopotamii leżą dziś m.in.:", "На терені давньої Месопотамії лежать нині зокрема:", "На земле древней Месопотамии сегодня лежат, среди прочих:"),
        options: [
          { id: "a", label: L("Irak, a także m.in. Syria i Turcja", "Ірак, а також зокрема Сирія і Туреччина", "Ирак, а также Сирия и Турция") },
          { id: "b", label: L("tylko Polska i Litwa", "лише Польща і Литва", "только Польша и Литва") },
          { id: "c", label: L("Japonia i Australia", "Японія і Австралія", "Япония и Австралия") }
        ],
        answer: "a",
        hint: L(
          "Podręcznik we „Współcześnie”: Irak, Turcja, Syria; stolica Iraku — Bagdad.",
          "Підручник у «Сучасності»: Ірак, Туреччина, Сирія; столиця Іраку — Багдад.",
          "В учебнике в рубрике «сегодня»: Ирак, Турция, Сирия. Столица Ирака — Багдад."
        ),
        explanation: L(
          "To nie „zamiast” starożytności. To ta sama ziemia, inne państwa.",
          "Це не «замість» давнини. Це та сама земля, інші держави.",
          "Это не «вместо» древности. Та же земля, другие государства: Ирак, Сирия, Турция."
        )
      }
    },
    {
      type: "mistake",
      module: "zeszyt",
      heading: L("Znajdź błąd w opowieści", "Знайди помилку в оповіді", "Найди ошибку в рассказе"),
      claim: L(
        "„Mezopotamia leżała nad Nilem, Sumerowie budowali piramidy, a koło wynaleźli Rzymianie.”",
        "«Месопотамія лежала над Нілом, шумери будували піраміди, а колесо винайшли римляни.»",
        "«Месопотамия была на Ниле, шумеры строили пирамиды, а колесо изобрели римляне»."
      ),
      text: {
        pl: [
          "Nil to Egipt. Mezopotamia to Eufrat i Tygrys.",
          "Sumerowie stawiali zikkuraty z cegły. Piramidy kamienne — Egipt. Koło — dokonanie Sumerów (w tym temacie podręcznika)."
        ],
        ua: [
          "Ніл — це Єгипет. Месопотамія — Євфрат і Тигр.",
          "Шумери ставили зикурати з цегли. Кам’яні піраміди — Єгипет. Колесо — досягнення шумерів (у цій темі підручника)."
        ],
        ru: [
          "Нил — это Египет. Месопотамия — Евфрат и Тигр.",
          "Шумеры строили кирпичные зиккураты. Каменные пирамиды — Египет. Колесо в этой теме учебника — достижение шумеров."
        ]
      }
    },
    {
      type: "problem",
      module: "zeszyt",
      track: "both",
      heading: L("Odpowiedź ustna", "Усна відповідь", "Устный ответ"),
      prompt: L(
        "Wyjaśnij własnymi słowami, w jaki sposób doszło do powstania pierwszych państw sumeryjskich.",
        "Поясни своїми словами, як виникли перші шумерські держави.",
        "Объясни своими словами, как появились первые шумерские государства."
      ),
      text: L(
        ["Podpowiedź: rzeka → kanały → wielu robotników → nadzorca → król i miasto-państwo.", "Powiedz 3–4 zdania. Potem wybierz najlepsze podsumowanie."],
        ["Підказка: річка → канали → багато робітників → наглядач → цар і місто-держава.", "Скажи 3–4 речення. Потім вибери найкращий підсумок."],
        ["Подсказка: река → каналы → много работников → надзиратель → царь и город-государство.", "Скажи 3–4 предложения. Потом выбери лучший итог."]
      ),
      task: {
        id: "h02-oral",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Które zdanie najlepiej ujmuje powstanie państw Sumerów?",
          "Яке речення найкраще передає виникнення держав шумерів?",
          "Какое предложение лучше всего передаёт появление государств шумеров?"
        ),
        options: [
          { id: "a", label: L("Państwa powstały, bo ktoś znalazł gotową koronę na pustyni", "Держави виникли, бо хтось знайшов готову корону в пустелі", "Государства появились, потому что кто-то нашёл готовую корону в пустыне") },
          { id: "b", label: L("Wspólna praca przy kanałach wymagała władzy — z niej wyrosły miasta-państwa", "Спільна праця біля каналів потребувала влади — з неї виросли міста-держави", "Общая работа на каналах требовала власти — из неё выросли города-государства") },
          { id: "c", label: L("Sumerowie skopiowali ustrój Aten", "Шумери скопіювали устрій Афін", "Шумеры скопировали устройство Афин") }
        ],
        answer: "b",
        hint: L("Podręcznik łączy kanały, nadzór i władzę.", "Підручник єднає канали, нагляд і владу.", "Учебник связывает каналы, надзор и власть."),
        explanation: L(
          "Nie magia korony. Organizacja wody → państwo.",
          "Не магія корони. Організація води → держава.",
          "Не корона из пустыни. Организация воды привела к власти и к городу-государству."
        )
      }
    },
    {
      type: "review",
      module: "zeszyt",
      heading: L("Film z zeszytu: H583KQ", "Фільм із зошита: H583KQ", "Фильм из тетради: H583KQ"),
      text: {
        pl: [
          "Na stronie 7 jest kod „Obejrzyj film”: H583KQ. Strona nazywa się „Cywilizacja narodziła się w Mezopotamii”.",
          "Link: https://docwiczenia.pl/kod/H583KQ",
          "Samego filmu nie udało się tu odtworzyć, więc nie ma pytań o jego sceny. Obejrzyj go, jeśli masz dostęp. Lekcja idzie dalej bez filmu."
        ],
        ua: [
          "На сторінці 7 є код «Obejrzyj film»: H583KQ. Сторінка називається «Cywilizacja narodziła się w Mezopotamii».",
          "Посилання: https://docwiczenia.pl/kod/H583KQ",
          "Сам фільм тут не вдалося відтворити, тому немає питань про його сцени. Подивись його, якщо є доступ. Урок іде далі без фільму."
        ],
        ru: [
          "На странице 7 есть код «Obejrzyj film»: H583KQ. Страница называется «Cywilizacja narodziła się w Mezopotamii».",
          "Ссылка: https://docwiczenia.pl/kod/H583KQ",
          "Само видео здесь открыть не удалось, поэтому пересказа и вопросов по сценам нет. Посмотри фильм, если страница откроется у тебя. Урок из-за этого не останавливается."
        ]
      }
    },

    {
      type: "vocabulary",
      module: "powtorka",
      track: "both",
      heading: L("Słownik na sprawdzian", "Словник на перевірку", "Словарь к sprawdzian"),
      rows: [
        { pl: "Mezopotamia — kraina między rzekami", ua: "Месопотамія — край між річками", ru: "Месопотамия — земля между реками" },
        { pl: "Tygrys i Eufrat", ua: "Тигр і Євфрат", ru: "Тигр и Евфрат" },
        { pl: "miasto-państwo — miasto z okolicą i własnym władcą", ua: "місто-держава — місто з околицею і власним правителем", ru: "город-государство — город с округой и своим правителем" },
        { pl: "Sumerowie — Uruk, Ur, Lagasz; ok. 3500 p.n.e.", ua: "шумери — Урук, Ур, Лагаш; бл. 3500 до н.е.", ru: "шумеры — Uruk, Ur, Lagasz; около 3500 до н. э." },
        { pl: "koło — łatwiejszy transport lądem", ua: "колесо — легший транспорт суходолом", ru: "колесо — легче возить по суше" },
        { pl: "żagiel — łódź płynie dzięki wiatrowi", ua: "вітрило — човен пливе завдяки вітру", ru: "парус — лодка идёт благодаря ветру" },
        { pl: "pismo klinowe — znaki na glinie", ua: "клинопис — знаки на глині", ru: "клинопись — знаки на глине" },
        { pl: "Hammurabi — król Babilonu, XVIII w. p.n.e., surowy kodeks", ua: "Хаммурапі — цар Вавилона, XVIII ст. до н.е., суворий кодекс", ru: "Хаммурапи — царь Вавилона, XVIII в. до н. э., суровый кодекс" },
        { pl: "zikkurat — schodkowa świątynia", ua: "зикурат — ступінчастий храм", ru: "зиккурат — ступенчатый храм" }
      ]
    },
    {
      type: "visual",
      module: "powtorka",
      track: "review",
      heading: L("Łańcuch w skrócie", "Ланцюг коротко", "Цепочка коротко"),
      visual: {
        kind: "flow",
        steps: [
          { title: L("Rzeki", "Річки", "Реки") },
          { title: L("Woda i żyzna ziemia", "Вода і родюча земля", "Вода и земля") },
          { title: L("Plony", "Урожай", "Урожай") },
          { title: L("Osady", "Поселення", "Поселения") },
          { title: L("Miasta", "Міста", "Города") },
          { title: L("Cywilizacja", "Цивілізація", "Цивилизация") }
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
          "Najstarsze cywilizacje powstawały nad wielkimi rzekami — wylewy dawały warunki do rolnictwa. Jedna z nich: Mezopotamia na Bliskim Wschodzie, między Tygrysem i Eufratem.",
          ["wielkimi rzekami", "Mezopotamia", "Tygrysem", "Eufratem"],
          "Найдавніші цивілізації виникали над великими річками — розливи давали умови для рільництва. Одна з них: Месопотамія на Близькому Сході, між Тигром і Євфратом.",
          ["великими річками", "Месопотамія", "Тигром", "Євфратом"],
          "Древнейшие цивилизации возникали у больших рек. Одна из них — Месопотамия на Ближнем Востоке, между Тигром и Евфратом.",
          ["Месопотамия", "Тигром", "Евфратом"]
        ),
        mark(
          "Najstarsze państwa założyli w IV tysiącleciu p.n.e. Sumerowie. Były to miasta-państwa: miasto + najbliższa okolica.",
          ["IV tysiącleciu p.n.e.", "Sumerowie", "miasta-państwa"],
          "Найдавніші держави заснували в IV тисячолітті до н.е. шумери. Це були міста-держави: місто + найближча околиця.",
          ["IV тисячолітті до н.е.", "шумери", "міста-держави"],
          "Древнейшие государства основали в IV тысячелетии до н. э. шумеры. Это были города-государства: город и ближайшая округа.",
          ["IV тысячелетии", "шумеры", "города-государства"]
        ),
        mark(
          "Najważniejsze dokonanie Sumerów: pismo. Przypisuje im się też koło, żagiel i koło garncarskie.",
          ["pismo", "koło garncarskie", "żagiel", "koło"],
          "Найважливіше досягнення шумерів: письмо. Їм приписують також колесо, вітрило і гончарне коло.",
          ["письмо", "колесо", "вітрило", "гончарне коло"],
          "Главное достижение шумеров — письмо. Им приписывают также колесо, парус и гончарный круг.",
          ["письмо", "колесо", "парус", "гончарный круг"]
        ),
        mark(
          "W II tys. p.n.e. powstała Babilonia. Hammurabi (XVIII w. p.n.e.) kazał spisać surowy Kodeks. Babilończycy — matematycy i astronomowie; kalendarz bliski naszemu (12 miesięcy, 7-dniowy tydzień).",
          ["Babilonia", "Hammurabi", "Kodeks", "kalendarz"],
          "У II тис. до н.е. виникла Вавилонія. Хаммурапі (XVIII ст. до н.е.) наказав записати суворий Кодекс. Вавилоняни — математики й астрономи; календар близький до нашого (12 місяців, 7-денний тиждень).",
          ["Вавилонія", "Хаммурапі", "Кодекс", "календар"],
          "Во II тыс. до н. э. возникла Вавилония. Хаммурапи (XVIII в. до н. э.) приказал записать суровый кодекс. Вавилоняне занимались математикой и астрономией; их календарь близок к нашему.",
          ["Вавилония", "Хаммурапи", "кодекс", "календарь"]
        )
      ]
    },
    {
      type: "review",
      module: "powtorka",
      track: "both",
      heading: L("Wrócimy do tego", "Ми до цього повернемось", "К этому вернёмся"),
      text: {
        pl: [
          "Następny temat: Egipt — też cywilizacja wielkiej rzeki, ale Nil, faraon i piramidy.",
          "Porównaj: ta sama potrzeba wody, inna rzeka, inna władza.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Єгипет — теж цивілізація великої річки, але Ніл, фараон і піраміди.",
          "Порівняй: та сама потреба води, інша річка, інша влада.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ],
        ru: [
          "Следующая тема — Египет: тоже цивилизация великой реки, но это Нил, фараон и пирамиды.",
          "Сравни: та же нужда в воде, другая река, другая власть.",
          "Если хочешь услышать урок голосом учителя, открой фильм «Коротких уроков» ниже. Это не фильм H583KQ из тетради."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "5rJapXuLulg",
        title: L(
          "Krótkie Lekcje: Miasta-państwa Mezopotamii",
          "Короткі уроки: Міста-держави Месопотамії",
          "Короткие уроки: города-государства Месопотамии"
        )
      }
    }
  ]
};
