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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(17, 21) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 17–21",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział IV: Bizancjum, islam, państwo Franków, spór papieża z cesarzem, krucjaty.",
          "Najpierw synteza, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ IV: Візантія, іслам, держава франків, спір папи з імператором, хрестові походи.",
          "Спочатку синтез, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "wskazać Bizancjum (395–1453) i islam (hidżra 622, Allah)", ua: "вказати Візантію (395–1453) і іслам (хиджра 622, Аллах)" },
        { pl: "podać 732, 751, 800, 843, 962 — od Franków do Ottona", ua: "назвати 732, 751, 800, 843, 962 — від франків до Оттона" },
        { pl: "wyjaśnić 1054, Canossę 1077 i konkordat wormacki 1122", ua: "пояснити 1054, Каноссу 1077 і Вормський конкордат 1122" },
        { pl: "powiedzieć, czym była krucjata (Clermont 1095, 1096–1099)", ua: "сказати, чим був хрестовий похід (Клермон 1095, 1096–1099)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Wschód i islam", ua: "Схід і іслам" },
      visual: gh("140", {
        kind: "image-placeholder",
        alt: { pl: "Bizancjum — recap lekcji 17", ua: "Візантія — recap уроку 17" },
        title: { pl: "Konstantynopol i Mekka", ua: "Константинополь і Мекка" },
        prompt: { pl: "Istniejący slajd lekcji 17.", ua: "Існуючий слайд уроку 17." }
      }),
      text: {
        pl: [
          ["Po 395 Wschód to ", em("Bizancjum"), " ze stolicą w Konstantynopolu. Trwa do ", em("1453"), ". Cesarz Justynian spisał prawo."],
          ["Na Półwyspie Arabskim Mahomet głosi islam. Bóg muzułmanów to ", em("Allah"), ". ", em("Hidżra 622"), " zaczyna erę islamu."]
        ],
        ua: [
          ["Після 395 Схід — це ", em("Візантія"), " зі столицею в Константинополі. Триває до ", em("1453"), ". Імператор Юстиніан записав право."],
          ["На Аравійському півострові Мухаммад проголошує іслам. Бог мусульман — ", em("Аллах"), ". ", em("Хиджра 622"), " починає еру ісламу."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Frankowie, papież, krucjaty", ua: "Франки, папа, хрестові походи" },
      visual: gh("177", {
        kind: "map-placeholder",
        alt: { pl: "Mapa Europy Karola Wielkiego — lekcja 19", ua: "Карта Європи Карла Великого — урок 19" },
        title: { pl: "Korona, spór, Jerozolima", ua: "Корона, спір, Єрусалим" },
        prompt: { pl: "Istniejąca mapa lekcji 19.", ua: "Існуюча карта уроку 19." }
      }),
      text: {
        pl: [
          ["", em("732"), " — Poitiers. ", em("751"), " — Pepin królem. ", em("800"), " — Karol Wielki cesarzem. ", em("843"), " — Verdun. ", em("962"), " — Otton I."],
          ["", em("1054"), " — schizma. ", em("1077"), " — Canossa. ", em("1122"), " — Wormacja. Papież Urban II w Clermont (", em("1095"), ") wezwał do krucjaty; pierwsza ", em("1096–1099"), "."]
        ],
        ua: [
          ["", em("732"), " — Пуатьє. ", em("751"), " — Піпін королем. ", em("800"), " — Карл Великий імператором. ", em("843"), " — Верден. ", em("962"), " — Оттон I."],
          ["", em("1054"), " — схизма. ", em("1077"), " — Каносса. ", em("1122"), " — Вормс. Папа Урбан II у Клермоні (", em("1095"), ") закликав до хрестового походу; перший ", em("1096–1099"), "."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "hidżra — wyjście Mahometa z Mekki do Medyny (622)", ua: "хиджра — вихід Мухаммада з Мекки до Медини (622)" },
        { pl: "schizma wschodnia — rozłam Kościoła (1054)", ua: "східна схизма — розкол Церкви (1054)" },
        { pl: "inwestytura — kto nadaje biskupom władzę (spór papież–cesarz)", ua: "інвеститура — хто надає єпископам владу (спір папа–імператор)" },
        { pl: "krucjata — wyprawa rycerzy do Ziemi Świętej", ua: "хрестовий похід — похід лицарів до Святої Землі" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "622",
      timelineYear: 622,
      task: {
        id: "r4-pam-622",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku nastąpiła hidżra? Wpisz rok (np. 622).",
          ua: "В якому році сталася хиджра? Введи рік (напр. 622)."
        },
        answer: 622,
        hint: { pl: "Mahomet. Początek ery islamu.", ua: "Мухаммад. Початок ери ісламу." },
        explanation: { pl: "622. Bóg muzułmanów: Allah (nie „Allach”).", ua: "622. Бог мусульман: Аллах." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "800",
      timelineYear: 800,
      task: {
        id: "r4-pam-800",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku koronowano Karola Wielkiego na cesarza? Wpisz rok (np. 800).",
          ua: "В якому році коронували Карла Великого на імператора? Введи рік (напр. 800)."
        },
        answer: 800,
        hint: { pl: "Boże Narodzenie w Rzymie. Na osi: Karol.", ua: "Різдво в Римі. На осі: Карл." },
        explanation: { pl: "800. Pepin 751. Verdun 843. Otton 962.", ua: "800. Піпін 751. Верден 843. Оттон 962." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "1095",
      timelineYear: 1095,
      task: {
        id: "r4-pam-1095",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku papież Urban II wezwał do krucjaty w Clermont? Wpisz rok (np. 1095).",
          ua: "В якому році папа Урбан II закликав до хрестового походу в Клермоні? Введи рік (напр. 1095)."
        },
        answer: 1095,
        hint: { pl: "Przed pierwszą krucjatą 1096–1099. Nie 1054.", ua: "Перед першим походом 1096–1099. Не 1054." },
        explanation: { pl: "1095 Clermont. Pierwsza krucjata 1096–1099.", ua: "1095 Клермон. Перший похід 1096–1099." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r4-pam-allah",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak muzułmanie nazywają Boga? Wpisz jedno słowo.",
          ua: "Як мусульмани називають Бога? Введи одне слово."
        },
        answer: ["Allah", "Allah.", "Аллах", "Allach"],
        hint: { pl: "Islam. Nie Jahwe i nie Zeus.", ua: "Іслам. Не Ягве і не Зевс." },
        explanation: { pl: "Allah. Jahwe = judaizm (rozdział I).", ua: "Аллах. Ягве = юдаїзм (розділ I)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r4-roz-canossa",
        type: "single-choice",
        level: "B",
        question: {
          pl: "O co toczył się spór, który doprowadził do Canossy (1077)?",
          ua: "Про що була суперечка, яка призвела до Каносси (1077)?"
        },
        options: [
          { id: "a", label: { pl: "o to, kto nadaje biskupom władzę — papież czy cesarz", ua: "про те, хто надає єпископам владу — папа чи імператор" } },
          { id: "b", label: { pl: "o to, kto założył Rzym", ua: "про те, хто заснував Рим" } },
          { id: "c", label: { pl: "o igrzyska olimpijskie", ua: "про олімпійські ігри" } }
        ],
        answer: "a",
        hint: { pl: "Inwestytura. Konkordat wormacki 1122 kończy spór.", ua: "Інвеститура. Вормський конкордат 1122 кінчає спір." },
        explanation: { pl: "Papież vs cesarz. 1054 to inna sprawa: rozłam Kościoła.", ua: "Папа vs імператор. 1054 — інша справа: розкол Церкви." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r4-roz-krucjata",
        type: "true-false",
        level: "B",
        question: {
          pl: "Krucjaty miały odzyskać Ziemię Świętą — prawda czy fałsz?",
          ua: "Хрестові походи мали повернути Святу Землю — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Clermont 1095. Cel: Jerozolima.", ua: "Клермон 1095. Мета: Єрусалим." },
        explanation: { pl: "Prawda. Pierwsza krucjata 1096–1099.", ua: "Правда. Перший похід 1096–1099." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r4-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "622 hidżra → 732 Poitiers → 800 Karol → 962 Otton → 1054 schizma → 1077 Canossa → 1095 Clermont → 1122 Wormacja", ua: "622 хиджра → 732 Пуатьє → 800 Карл → 962 Оттон → 1054 схизма → 1077 Каносса → 1095 Клермон → 1122 Вормс" } },
          { id: "b", label: { pl: "Clermont → hidżra → Karol Wielki", ua: "Клермон → хиджра → Карл Великий" } },
          { id: "c", label: { pl: "1453 → 622 → 800", ua: "1453 → 622 → 800" } }
        ],
        answer: "a",
        hint: { pl: "Islam, potem Frankowie, potem spór Kościoła i krucjaty. 1453 to koniec Bizancjum — daleko później.", ua: "Іслам, потім франки, потім спір Церкви і хрестові походи. 1453 — кінець Візантії, набагато пізніше." },
        explanation: { pl: "751 i 843 też są na osi, między 732 a 962.", ua: "751 і 843 теж на осі, між 732 і 962." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1054",
      timelineYear: 1054,
      task: {
        id: "r4-sp-1054",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku nastąpiła schizma wschodnia? Wpisz rok (np. 1054).",
          ua: "В якому році сталася східна схизма? Введи рік (напр. 1054)."
        },
        answer: 1054,
        hint: { pl: "Rozłam Kościoła. Nie Canossa.", ua: "Розкол Церкви. Не Каносса." },
        explanation: { pl: "1054. Canossa 1077. Wormacja 1122.", ua: "1054. Каносса 1077. Вормс 1122." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r4-sp-732",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co stało się pod Poitiers w 732?",
          ua: "Що сталося під Пуатьє в 732?"
        },
        options: [
          { id: "a", label: { pl: "Frankowie zatrzymali ekspansję Arabów w Europie Zachodniej", ua: "Франки зупинили експансію арабів у Західній Європі" } },
          { id: "b", label: { pl: "Karol Wielki został cesarzem", ua: "Карл Великий став імператором" } },
          { id: "c", label: { pl: "upadł Konstantynopol", ua: "упав Константинополь" } }
        ],
        answer: "a",
        hint: { pl: "Karol Młot. Korona Karola = 800. Konstantynopol = 1453.", ua: "Карл Мартел. Корона Карла = 800. Константинополь = 1453." },
        explanation: { pl: "732 = Poitiers. 800 = koronacja. 1453 = koniec Bizancjum.", ua: "732 = Пуатьє. 800 = коронація. 1453 = кінець Візантії." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 3 zdaniach: Bizancjum i islam → Frankowie → papież i krucjaty. Potem wybierz streszczenie.",
        ua: "У 3 реченнях: Візантія і іслам → франки → папа і хрестові походи. Потім вибери стислий виклад."
      },
      task: {
        id: "r4-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział IV?",
          ua: "Яке речення замикає розділ IV?"
        },
        options: [
          { id: "a", label: { pl: "Wschód trwał jako Bizancjum, Arabowie dali islam, Frankowie odbudowali cesarstwo na Zachodzie, a papież spierał się z cesarzem i wzywał do krucjat", ua: "Схід тривав як Візантія, араби дали іслам, франки відбудували імперію на Заході, а папа сперечався з імператором і кликав до хрестових походів" } },
          { id: "b", label: { pl: "To rozdział o Atenach i Peryklesie", ua: "Це розділ про Афіни і Перикла" } },
          { id: "c", label: { pl: "To rozdział o Kazimierzu Wielkim", ua: "Це розділ про Казимира Великого" } }
        ],
        answer: "a",
        hint: { pl: "Średniowiecze Europy, nie Grecja i nie Polska XIV w.", ua: "Середньовіччя Європи, не Греція і не Польща XIV ст." },
        explanation: { pl: "Perykles = II. Kazimierz = VII.", ua: "Перикл = II. Казимир = VII." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę wiedzieć: Bizancjum; islam (Allah, hidżra); cesarstwo Karola i Ottona; schizma; inwestytura; krucjata.",
          ["Bizancjum", "hidżra", "krucjata"],
          "Мушу знати: Візантія; іслам (Аллах, хиджра); імперія Карла і Оттона; схизма; інвеститура; хрестовий похід.",
          ["Візантія", "хиджра", "хрестовий похід"]
        ),
        mark(
          "Muszę pamiętać: 622, 732, 751, 800, 843, 962, 1054, 1077, 1095, 1096–1099, 1122, 1453.",
          ["800", "1054", "1095"],
          "Мушу пам’ятати: 622, 732, 751, 800, 843, 962, 1054, 1077, 1095, 1096–1099, 1122, 1453.",
          ["800", "1054", "1095"]
        ),
        mark(
          "Potrafię powiedzieć: po Rzymie Europa ma trzy siły — Bizancjum, islam i cesarstwo Zachodu — oraz Kościół, który spiera się o władzę i wzywa do Ziemi Świętej.",
          ["Bizancjum", "Kościół"],
          "Можу сказати: після Риму Європа має три сили — Візантію, іслам і імперію Заходу — та Церкву, яка сперечається про владу і кличе до Святої Землі.",
          ["Візантію", "Церкву"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 17–21. Rozdział V to społeczeństwo: feudalizm, rycerz, miasto — mniej dat, więcej pojęć.",
          "Mini-notatka powyżej wystarczy, by powiedzieć 3–4 zdania nauczycielowi."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 17–21. Розділ V — суспільство: феодалізм, лицар, місто — менше дат, більше понять.",
          "Міні-нотатки вище досить, щоб сказати 3–4 речення вчителю."
        ]
      }
    }
  ]
};
