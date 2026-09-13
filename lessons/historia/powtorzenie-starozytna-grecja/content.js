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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(7, 11) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 07–11",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział II: Grecja — polis, wojny z Persami, kultura i Aleksander.",
          "Najpierw synteza, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ II: Греція — поліс, війни з персами, культура і Александр.",
          "Спочатку синтез, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "wyjaśnić, czym była polis i demokracja ateńska (Perykles)", ua: "пояснити, чим був поліс і афінська демократія (Перикл)" },
        { pl: "porównać Spartę z Atenami i wskazać wojny z Persami (490, 480)", ua: "порівняти Спарту з Афінами і вказати війни з персами (490, 480)" },
        { pl: "odróżnić teatr grecki od amfiteatru i podać 776 p.n.e.", ua: "відрізнити грецький театр від амфітеатру і назвати 776 до н.е." },
        { pl: "opowiedzieć o Aleksandrze: Issos 333, Gaugamela 331, śmierć 323", ua: "розповісти про Александра: Ісс 333, Гавгамели 331, смерть 323" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Polis, Ateny, Sparta", ua: "Поліс, Афіни, Спарта" },
      visual: gh("055", {
        kind: "image-placeholder",
        alt: { pl: "Ateny — recap lekcji 07", ua: "Афіни — recap уроку 07" },
        title: { pl: "Miasto-państwo i dwa ustroje", ua: "Місто-держава і два устрої" },
        prompt: { pl: "Istniejący slajd lekcji 07.", ua: "Існуючий слайд уроку 07." }
      }),
      text: {
        pl: [
          ["Grecy żyli w ", em("polis"), " — małych państwach-miastach. W Atenach lud (wolni mężczyźni) głosował na zgromadzeniu. Twarzą demokracji był ", em("Perykles"), "."],
          "Sparta to inna polis: wychowanie wojownika, mało praw zwykłych ludzi. Oba państwa umiały się zjednoczyć, gdy groził wróg z Azji."
        ],
        ua: [
          ["Греки жили в ", em("полісах"), " — малих державах-містах. В Афінах народ (вільні чоловіки) голосував на зборах. Обличчям демократії був ", em("Перикл"), "."],
          "Спарта — інший поліс: виховання воїна, мало прав звичайних людей. Обидві держави вміли єднатися, коли загрожував ворог з Азії."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Wojny, Olimp, Aleksander", ua: "Війни, Олімп, Александр" },
      visual: gh("083", {
        kind: "map-placeholder",
        alt: { pl: "Mapa wyprawy Aleksandra — lekcja 11", ua: "Карта походу Александра — урок 11" },
        title: { pl: "Od Maratonu do Gaugameli", ua: "Від Марафону до Гавгамел" },
        prompt: { pl: "Istniejąca mapa lekcji 11.", ua: "Існуюча карта уроку 11." }
      }),
      text: {
        pl: [
          ["", em("490"), " — Maraton. ", em("480"), " — Termopile i Salamina. Bogowie mieszkali na Olimpie; mity uczyły, kim są Grecy. Igrzyska od ", em("776 p.n.e."), ". Teatr grecki to nie amfiteatr rzymski."],
          ["", em("Aleksander"), " z Macedonii pobił Persów pod Issos (", em("333"), ") i Gaugamelą (", em("331"), "). Zmarł w ", em("323"), ". Po nim hellenizm — kultura grecka na Wschodzie."]
        ],
        ua: [
          ["", em("490"), " — Марафон. ", em("480"), " — Фермопіли і Саламін. Боги жили на Олімпі; міфи вчили, ким є греки. Ігри з ", em("776 до н.е."), ". Грецький театр — не римський амфітеатр."],
          ["", em("Александр"), " з Македонії побив персів під Іссом (", em("333"), ") і Гавгамелами (", em("331"), "). Помер у ", em("323"), ". Після нього еллінізм — грецька культура на Сході."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "polis — greckie miasto-państwo z własnymi prawami", ua: "поліс — грецька місто-держава з власними правами" },
        { pl: "demokracja — władza ludu (w Atenach: wolnych mężczyzn)", ua: "демократія — влада народу (в Афінах: вільних чоловіків)" },
        { pl: "hellenizm — kultura grecka poza Grecją po Aleksandrze", ua: "еллінізм — грецька культура поза Грецією після Александра" },
        { pl: "teatr — grecka scena (nie mylić z amfiteatrem Rzymu)", ua: "театр — грецька сцена (не плутати з амфітеатром Риму)" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r2-pam-polis",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak Grecy nazywali swoje miasto-państwo? Wpisz jedno słowo.",
          ua: "Як греки називали свою місто-державу? Введи одне слово."
        },
        answer: ["polis", "polisa", "поліс", "поліса"],
        hint: { pl: "Nie „imperium”. Małe państwo-miasto.", ua: "Не «імперія». Мала держава-місто." },
        explanation: { pl: "Polis. Ateny i Sparta to dwie polis.", ua: "Поліс. Афіни і Спарта — два поліси." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "490 p.n.e.",
      timelineYear: 490,
      task: {
        id: "r2-pam-490",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. Grecy pokonali Persów pod Maratonem? Wpisz rok (np. 490).",
          ua: "В якому році до н.е. греки перемогли персів під Марафоном? Введи рік (напр. 490)."
        },
        answer: 490,
        hint: { pl: "Przed Termopilami. Na osi: Maraton.", ua: "Перед Фермопілами. На осі: Марафон." },
        explanation: { pl: "490 p.n.e. Termopile i Salamina = 480.", ua: "490 до н.е. Фермопіли і Саламін = 480." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "776 p.n.e.",
      timelineYear: 776,
      task: {
        id: "r2-pam-776",
        type: "input-number",
        level: "A",
        question: {
          pl: "Od którego roku p.n.e. tradycja datuje igrzyska olimpijskie? Wpisz rok (np. 776).",
          ua: "Від якого року до н.е. традиція датує олімпійські ігри? Введи рік (напр. 776)."
        },
        answer: 776,
        hint: { pl: "Olimpia. Kultura Grecji, lekcja 10.", ua: "Олімпія. Культура Греції, урок 10." },
        explanation: { pl: "776 p.n.e. To data KN z tego rozdziału.", ua: "776 до н.е. Це дата KN з цього розділу." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r2-roz-ateny-sparta",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym Ateny różniły się od Sparty?",
          ua: "Чим Афіни відрізнялися від Спарти?"
        },
        options: [
          { id: "a", label: { pl: "w Atenach obywatele głosowali; w Sparcie najważniejsze było wojsko i surowa dyscyplina", ua: "в Афінах громадяни голосували; у Спарті найважливішим було військо і сувора дисципліна" } },
          { id: "b", label: { pl: "Sparta miała demokrację, Ateny — tylko króla", ua: "Спарта мала демократію, Афіни — лише царя" } },
          { id: "c", label: { pl: "obie były prowincjami Rzymu", ua: "обидві були провінціями Риму" } }
        ],
        answer: "a",
        hint: { pl: "Dwa polis, dwa ustroje. Rzym = następny rozdział.", ua: "Два поліси, два устрої. Рим = наступний розділ." },
        explanation: { pl: "Ateny = demokracja (ograniczona). Sparta = wychowanie wojownika.", ua: "Афіни = демократія (обмежена). Спарта = виховання воїна." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r2-roz-teatr",
        type: "true-false",
        level: "B",
        question: {
          pl: "Grecki teatr i rzymski amfiteatr to to samo miejsce widowisk — prawda czy fałsz?",
          ua: "Грецький театр і римський амфітеатр — те саме місце видовищ — правда чи неправда?"
        },
        answer: false,
        hint: { pl: "KN: nie mylić. Teatr = Grecja. Amfiteatr = Rzym (rozdział III).", ua: "KN: не плутати. Театр = Греція. Амфітеатр = Рим (розділ III)." },
        explanation: { pl: "Fałsz. Teatr grecki (tragedia, komedia) ≠ amfiteatr (walki, igrzyska).", ua: "Неправда. Грецький театр (трагедія, комедія) ≠ амфітеатр (бої, ігри)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r2-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "igrzyska 776 → Maraton 490 → Termopile 480 → Issos 333 → Gaugamela 331 → śmierć Aleksandra 323", ua: "ігри 776 → Марафон 490 → Фермопіли 480 → Ісс 333 → Гавгамели 331 → смерть Александра 323" } },
          { id: "b", label: { pl: "Aleksander 323 → Maraton 490 → igrzyska 776", ua: "Александр 323 → Марафон 490 → ігри 776" } },
          { id: "c", label: { pl: "Gaugamela → Maraton → igrzyska", ua: "Гавгамели → Марафон → ігри" } }
        ],
        answer: "a",
        hint: { pl: "Najpierw kultura i igrzyska, potem wojny z Persami, na końcu Aleksander.", ua: "Спочатку культура і ігри, потім війни з персами, наприкінці Александр." },
        explanation: { pl: "Oś rozdziału II kończy się 323 p.n.e.", ua: "Вісь розділу II кінчається 323 до н.е." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "333 p.n.e.",
      timelineYear: 333,
      task: {
        id: "r2-sp-333",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. Aleksander pokonał Persów pod Issos? Wpisz rok (np. 333).",
          ua: "В якому році до н.е. Александр переміг персів під Іссом? Введи рік (напр. 333)."
        },
        answer: 333,
        hint: { pl: "Przed Gaugamelą (331). Na osi: Issos.", ua: "Перед Гавгамелами (331). На осі: Ісс." },
        explanation: { pl: "333 p.n.e. Gaugamela 331. Śmierć 323.", ua: "333 до н.е. Гавгамели 331. Смерть 323." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r2-sp-perykles",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto był twarzą demokracji ateńskiej?",
          ua: "Хто був обличчям афінської демократії?"
        },
        options: [
          { id: "a", label: { pl: "Perykles", ua: "Перикл" } },
          { id: "b", label: { pl: "Cezar", ua: "Цезар" } },
          { id: "c", label: { pl: "Hammurabi", ua: "Хаммурапі" } }
        ],
        answer: "a",
        hint: { pl: "Mówca z Aten. Nie Rzym i nie Babilon.", ua: "Промовець з Афін. Не Рим і не Вавилон." },
        explanation: { pl: "Perykles. Cezar = Rzym. Hammurabi = Mezopotamia.", ua: "Перикл. Цезар = Рим. Хаммурапі = Месопотамія." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 3 zdaniach: polis → wojny z Persami → Aleksander. Potem wybierz streszczenie.",
        ua: "У 3 реченнях: поліс → війни з персами → Александр. Потім вибери стислий виклад."
      },
      task: {
        id: "r2-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział II?",
          ua: "Яке речення замикає розділ II?"
        },
        options: [
          { id: "a", label: { pl: "Grecy żyli w polis; Ateny miały demokrację, Sparta — wojsko; po wojnach z Persami Aleksander rozniósł kulturę grecką na Wschód", ua: "Греки жили в полісах; Афіни мали демократію, Спарта — військо; після війн з персами Александр розніс грецьку культуру на Схід" } },
          { id: "b", label: { pl: "To rozdział o faraonie i Nilu", ua: "Це розділ про фараона і Ніл" } },
          { id: "c", label: { pl: "To rozdział o Piastach i 966", ua: "Це розділ про П’ястів і 966" } }
        ],
        answer: "a",
        hint: { pl: "Grecja, nie Egipt i nie Polska.", ua: "Греція, не Єгипет і не Польща." },
        explanation: { pl: "Nil = I. Piastowie = VI.", ua: "Ніл = I. П’ясти = VI." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę wiedzieć: polis; demokracja Aten (Perykles); Sparta; mity i Olimp; teatr ≠ amfiteatr; hellenizm.",
          ["polis", "Perykles", "teatr"],
          "Мушу знати: поліс; демократія Афін (Перикл); Спарта; міфи і Олімп; театр ≠ амфітеатр; еллінізм.",
          ["поліс", "Перикл", "театр"]
        ),
        mark(
          "Muszę pamiętać: 776 igrzyska; 490 Maraton; 480 Termopile i Salamina; 333 Issos; 331 Gaugamela; 323 śmierć Aleksandra.",
          ["776", "490", "323"],
          "Мушу пам’ятати: 776 ігри; 490 Марафон; 480 Фермопіли і Саламін; 333 Ісс; 331 Гавгамели; 323 смерть Александра.",
          ["776", "490", "323"]
        ),
        mark(
          "Potrafię powiedzieć: Grecy żyli w polis; Ateny głosowały, Sparta ćwiczyła wojsko; Aleksander otworzył Wschód na kulturę grecką.",
          ["polis", "Aleksander"],
          "Можу сказати: греки жили в полісах; Афіни голосували, Спарта тренувала військо; Александр відкрив Схід для грецької культури.",
          ["полісах", "Александр"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 07–11. Rozdział III to Rzym, nie Grecja.",
          "Mini-notatka powyżej wystarczy, by powiedzieć 3–4 zdania nauczycielowi."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 07–11. Розділ III — Рим, не Греція.",
          "Міні-нотатки вище досить, щоб сказати 3–4 речення вчителю."
        ]
      }
    }
  ]
};
