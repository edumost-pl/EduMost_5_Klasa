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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(1, 6) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 01–06",
      text: {
        pl: [
          "To nie nowa lekcja historii. Powtarzasz rozdział I: od pierwszych ludzi do pisma.",
          "Najpierw krótka opowieść, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок історії. Ти повторюєш розділ I: від перших людей до письма.",
          "Спочатку коротка оповідь, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "opowiedzieć, jak ludzie przeszli od zbieractwa do osiadłego życia", ua: "розповісти, як люди перейшли від збиральництва до осілого життя" },
        { pl: "wskazać wielkie rzeki i cywilizacje: Mezopotamia, Egipt, Izrael, Indus, Chiny", ua: "вказати великі ріки і цивілізації: Месопотамія, Єгипет, Ізраїль, Інд, Китай" },
        { pl: "nazwać faraona, Hammurabiego, Abrahama, Mojżesza, Dawida i Salomona", ua: "назвати фараона, Хаммурапі, Авраама, Мойсея, Давида і Соломона" },
        { pl: "wyjaśnić, po co powstało pismo i czym alfabet różni się od hieroglifów", ua: "пояснити, навіщо виникло письмо і чим абетка відрізняється від ієрогліфів" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Od koczowników do cywilizacji", ua: "Від кочівників до цивілізації" },
      visual: gh("001", {
        kind: "image-placeholder",
        alt: { pl: "Przodkowie człowieka — recap z lekcji 01", ua: "Предки людини — recap з уроку 01" },
        title: { pl: "Najpierw ogień i osiadłość", ua: "Спочатку вогонь і осілість" },
        prompt: { pl: "Istniejący slajd lekcji 01.", ua: "Існуючий слайд уроку 01." }
      }),
      text: {
        pl: [
          ["Przodkowie człowieka żyli w ", em("Afryce"), ". Prehistoria to zbieractwo i myślistwo. ", em("Rewolucja neolityczna"), " (ok. 10 000 p.n.e.) dała uprawę, hodowlę i osiadłe życie."],
          "Narzędzia: epoka kamienia, potem brązu, potem żelaza. Cywilizacja zaczyna się tam, gdzie rolnictwo przy wielkiej rzece i — wkrótce — pismo."
        ],
        ua: [
          ["Предки людини жили в ", em("Африці"), ". Доісторія — збиральництво і мисливство. ", em("Неолітична революція"), " (бл. 10 000 до н.е.) дала рільництво, тваринництво і осіле життя."],
          "Знаряддя: доба каменю, потім бронзи, потім заліза. Цивілізація починається там, де рільництво біля великої ріки і — невдовзі — письмо."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzeki i państwa", ua: "Ріки і держави" },
      visual: gh("010", {
        kind: "map-placeholder",
        alt: { pl: "Mapa Mezopotamii — Tygrys i Eufrat", ua: "Карта Месопотамії — Тигр і Євфрат" },
        title: { pl: "Cywilizacje nad wodą", ua: "Цивілізації над водою" },
        prompt: { pl: "Istniejąca mapa lekcji 02.", ua: "Існуюча карта уроку 02." }
      }),
      text: {
        pl: [
          ["", em("Mezopotamia"), " leży między ", em("Tygrysem"), " i ", em("Eufratem"), ". Sumerowie (ok. 3500 p.n.e.) tworzyli miasta-państwa i pismo. Hammurabi spisał surowy kodeks."],
          ["", em("Egipt"), " (ok. 3000 p.n.e.) jest „darem Nilu”. Rządzi ", em("faraon"), ". Izraelici w Palestynie czcili jednego Boga ", em("Jahwe"), " (judaizm). Nad ", em("Indusem"), " (Azja Południowa) i nad Huang He oraz Jangcy powstały Indie i Chiny."]
        ],
        ua: [
          ["", em("Месопотамія"), " лежить між ", em("Тигром"), " і ", em("Євфратом"), ". Шумеры (бл. 3500 до н.е.) творили міста-держави і письмо. Хаммурапі записав суворий кодекс."],
          ["", em("Єгипет"), " (бл. 3000 до н.е.) — «дар Нілу». Править ", em("фараон"), ". Ізраїльтяни в Палестині шанували єдиного Бога ", em("Ягве"), " (юдаїзм). Над ", em("Індом"), " (Південна Азія) і над Хуанхе та Янцзи виникли Індія і Китай."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Po co pismo?", ua: "Навіщо письмо?" },
      visual: gh("047", {
        kind: "image-placeholder",
        alt: { pl: "Od hieroglifów do alfabetu — recap lekcji 06", ua: "Від ієрогліфів до абетки — recap уроку 06" },
        title: { pl: "Obrazki, kliny, litery", ua: "Малюнки, клини, літери" },
        prompt: { pl: "Istniejący slajd lekcji 06.", ua: "Існуючий слайд уроку 06." }
      }),
      text: {
        pl: [
          "Pismo (IV tys. p.n.e.) kończy prehistorię. Władca spisuje prawo, kupiec — transakcje.",
          ["Hieroglify i pismo klinowe to pismo obrazkowe (lub z niego wyrosłe). Fenicjanie dali ", em("alfabet"), ". Polski alfabet opiera się na ", em("łacińskim"), "."]
        ],
        ua: [
          "Письмо (IV тис. до н.е.) кінчає доісторію. Володар записує право, купець — угоди.",
          ["Ієрогліфи і клинопис — образотворче письмо (або з нього виросле). Фінікійці дали ", em("абетку"), ". Польська абетка спирається на ", em("латинську"), "."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "rewolucja neolityczna — uprawa i hodowla, osiadłe życie", ua: "неолітична революція — рільництво і тваринництво, осіле життя" },
        { pl: "miasta-państwa — miasto i najbliższa okolica (Sumerowie)", ua: "міста-держави — місто і найближча околиця (шумери)" },
        { pl: "faraon — władca Egiptu o bardzo silnej władzy", ua: "фараон — володар Єгипту з дуже сильною владою" },
        { pl: "monoteizm — wiara w jednego Boga (Jahwe, judaizm)", ua: "монотеїзм — віра в єдиного Бога (Ягве, юдаїзм)" },
        { pl: "hieroglify / alfabet — pismo obrazkowe vs litery dźwięków", ua: "ієрогліфи / абетка — образотворче письмо vs літери звуків" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r1-pam-nil",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dzięki której rzece powstał starożytny Egipt?",
          ua: "Завдяки якій річці виник стародавній Єгипет?"
        },
        options: [
          { id: "a", label: { pl: "Nil", ua: "Ніл" } },
          { id: "b", label: { pl: "Indus", ua: "Інд" } },
          { id: "c", label: { pl: "Tygrys", ua: "Тигр" } }
        ],
        answer: "a",
        hint: { pl: "Afryka. „Egipt darem…”", ua: "Африка. «Єгипет — дар…»" },
        explanation: { pl: "Nil. Tygrys i Eufrat = Mezopotamia. Indus = Azja Południowa.", ua: "Ніл. Тигр і Євфрат = Месопотамія. Інд = Південна Азія." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "ok. 3500 p.n.e.",
      timelineYear: 3500,
      task: {
        id: "r1-pam-3500",
        type: "input-number",
        level: "A",
        question: {
          pl: "Około którego roku p.n.e. Sumerowie zakładali miasta-państwa? Wpisz rok (np. 3500).",
          ua: "Близько якого року до н.е. шумери засновували міста-держави? Введи рік (напр. 3500)."
        },
        answer: 3500,
        hint: { pl: "IV tysiąclecie. Na osi: Sumer. 3000 to Egipt.", ua: "IV тисячоліття. На осі: Шумер. 3000 — це Єгипет." },
        explanation: { pl: "Ok. 3500 p.n.e. Egipt ok. 3000.", ua: "Бл. 3500 до н.е. Єгипет бл. 3000." },
        mistakes: [
          { answer: 3000, feedback: { pl: "3000 p.n.e. to Egipt nad Nilem. Sumerowie (miasta-państwa) — ok. 3500.", ua: "3000 до н.е. — це Єгипет над Нілом. Шумери (міста-держави) — бл. 3500." } }
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r1-pam-jahwe",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak Izraelici nazywali jedynego Boga? Wpisz imię.",
          ua: "Як ізраїльтяни називали єдиного Бога? Введи ім’я."
        },
        answer: ["Jahwe", "Jahwe.", "Ягве", "Яхве", "Yahweh"],
        hint: { pl: "Judaizm. Nie Amon i nie Zeus.", ua: "Юдаїзм. Не Амон і не Зевс." },
        explanation: { pl: "Jahwe. To monoteizm — lekcja 04.", ua: "Ягве. Це монотеїзм — урок 04." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r1-roz-neolit",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego rewolucja neolityczna zmieniła życie ludzi?",
          ua: "Чому неолітична революція змінила життя людей?"
        },
        options: [
          { id: "a", label: { pl: "bo uprawa i hodowla pozwoliły osiąść i budować osady", ua: "бо рільництво і тваринництво дозволили осісти і будувати оселі" } },
          { id: "b", label: { pl: "bo wtedy wynaleziono alfabet łaciński", ua: "бо тоді винайшли латинську абетку" } },
          { id: "c", label: { pl: "bo faraon podbił Afrykę", ua: "бо фараон підкорив Африку" } }
        ],
        answer: "a",
        hint: { pl: "Od koczowników do osiadłych. Alfabet jest dużo później.", ua: "Від кочівників до осілих. Абетка набагато пізніше." },
        explanation: { pl: "Osiadłość = warunek cywilizacji nad rzekami.", ua: "Осілість = умова цивілізації над ріками." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r1-roz-pismo",
        type: "true-false",
        level: "B",
        question: {
          pl: "Pismo pomagało władcom rządzić i kupcom handlować — prawda czy fałsz?",
          ua: "Письмо допомагало володарям правити і купцям торгувати — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Prawo, podatki, umowy — nie tylko ozdoba.", ua: "Право, податки, угоди — не лише прикраса." },
        explanation: { pl: "Prawda. Dlatego pismo jest elementem cywilizacji.", ua: "Правда. Тому письмо — елемент цивілізації." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r1-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "neolit → Sumerowie (ok. 3500) → Egipt (ok. 3000) → alfabet Fenicjan", ua: "неоліт → шумери (бл. 3500) → Єгипет (бл. 3000) → абетка фінікійців" } },
          { id: "b", label: { pl: "alfabet → Egipt → neolit → Sumerowie", ua: "абетка → Єгипет → неоліт → шумери" } },
          { id: "c", label: { pl: "Hammurabi → praludzie w Afryce → Nil", ua: "Хаммурапі → пралюди в Африці → Ніл" } }
        ],
        answer: "a",
        hint: { pl: "Najpierw osiadłość, potem miasta i pismo, alfabet na końcu tego rozdziału.", ua: "Спочатку осілість, потім міста і письмо, абетка наприкінці цього розділу." },
        explanation: { pl: "Oś: praludzie → neolit → Sumer → Egipt → alfabet.", ua: "Вісь: пралюди → неоліт → Шумер → Єгипет → абетка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Mapa", ua: "Карта" },
      visual: gh("018", {
        kind: "map-placeholder",
        alt: { pl: "Mapa Egiptu nad Nilem", ua: "Карта Єгипту над Нілом" },
        title: { pl: "Gdzie jest co?", ua: "Де що є?" },
        prompt: { pl: "Istniejąca mapa lekcji 03.", ua: "Існуюча карта уроку 03." }
      }),
      task: {
        id: "r1-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które zestawienie miejsca i rzeki jest prawdziwe?",
          ua: "Яке поєднання місця і ріки правильне?"
        },
        options: [
          { id: "a", label: { pl: "Egipt — Nil (Afryka); Mezopotamia — Tygrys i Eufrat; dolina Indusu — Azja Południowa", ua: "Єгипет — Ніл (Африка); Месопотамія — Тигр і Євфрат; долина Інду — Південна Азія" } },
          { id: "b", label: { pl: "Egipt — Huang He; Chiny — Nil", ua: "Єгипет — Хуанхе; Китай — Ніл" } },
          { id: "c", label: { pl: "Indus to rzeka w Europie", ua: "Інд — ріка в Європі" } }
        ],
        answer: "a",
        hint: { pl: "Indus nie jest w Europie. Chiny = Huang He i Jangcy.", ua: "Інд не в Європі. Китай = Хуанхе і Янцзи." },
        explanation: { pl: "To mapa całego rozdziału I.", ua: "Це карта всього розділу I." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r1-sp-ham",
        type: "true-false",
        level: "A",
        question: {
          pl: "Hammurabi kazał spisać kodeks praw w Babilonii — prawda czy fałsz?",
          ua: "Хаммурапі наказав записати кодекс прав у Вавилонії — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Mezopotamia, nie Egipt.", ua: "Месопотамія, не Єгипет." },
        explanation: { pl: "Prawda. Faraon = Egipt.", ua: "Правда. Фараон = Єгипет." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r1-sp-3000",
        type: "input-number",
        level: "A",
        question: {
          pl: "Około którego roku p.n.e. powstał starożytny Egipt? Wpisz rok (np. 3000).",
          ua: "Близько якого року до н.е. виник стародавній Єгипет? Введи рік (напр. 3000)."
        },
        answer: 3000,
        hint: { pl: "Po Sumerze, nad Nilem. Na osi: Egipt.", ua: "Після Шумера, над Нілом. На осі: Єгипет." },
        explanation: { pl: "Ok. 3000 p.n.e.", ua: "Бл. 3000 до н.е." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 3 zdaniach: rzeka → cywilizacja → pismo. Potem wybierz zdanie, które to streszcza.",
        ua: "У 3 реченнях: ріка → цивілізація → письмо. Потім вибери речення, яке це стисло каже."
      },
      task: {
        id: "r1-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział I?",
          ua: "Яке речення замикає розділ I?"
        },
        options: [
          { id: "a", label: { pl: "Ludzie osiedli przy rzekach, powstały państwa (Sumer, Egipt, Izrael, Indie, Chiny), a pismo pozwoliło rządzić i handlować", ua: "Люди осіли біля рік, виникли держави (Шумер, Єгипет, Ізраїль, Індія, Китай), а письмо дозволило правити і торгувати" } },
          { id: "b", label: { pl: "To lekcja o Aleksandrze i Grecji", ua: "Це урок про Александра і Грецію" } },
          { id: "c", label: { pl: "To tylko średniowiecze i Piastowie", ua: "Це лише середньовіччя і П’ясти" } }
        ],
        answer: "a",
        hint: { pl: "Rozdział I kończy się pismem, nie Grecją.", ua: "Розділ I кінчається письмом, не Грецією." },
        explanation: { pl: "Grecja = rozdział II.", ua: "Греція = розділ II." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę wiedzieć: od zbieraczy do rolników (neolit); cywilizacje przy rzekach; pismo kończy prehistorię.",
          ["neolit", "rzekach", "pismo"],
          "Мушу знати: від збирачів до рільників (неоліт); цивілізації біля рік; письмо кінчає доісторію.",
          ["неоліт", "рік", "письмо"]
        ),
        mark(
          "Muszę znać: Sumerowie, Hammurabi, faraon, Abraham, Mojżesz, Dawid, Salomon; Nil, Tygrys, Eufrat, Indus.",
          ["Hammurabi", "faraon", "Nil"],
          "Мушу знати: шумери, Хаммурапі, фараон, Авраам, Мойсей, Давид, Соломон; Ніл, Тигр, Євфрат, Інд.",
          ["Хаммурапі", "фараон", "Ніл"]
        ),
        mark(
          "Muszę pamiętać: ok. 3500 p.n.e. Sumer; ok. 3000 p.n.e. Egipt; IV tys. p.n.e. pismo.",
          ["3500", "3000"],
          "Мушу пам’ятати: бл. 3500 до н.е. Шумер; бл. 3000 до н.е. Єгипет; IV тис. до н.е. письмо.",
          ["3500", "3000"]
        ),
        mark(
          "Potrafię powiedzieć: ludzie osiedli nad rzekami, zbudowali państwa i wymyślili pismo, żeby rządzić i handlować.",
          ["osiedli", "pismo"],
          "Можу сказати: люди осіли над ріками, збудували держави і вигадали письмо, щоб правити і торгувати.",
          ["осіли", "письмо"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 01–06. Rozdział II to już Grecja, nie Egipt.",
          "Mini-notatka powyżej wystarczy, by powiedzieć 3–4 zdania nauczycielowi."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 01–06. Розділ II — уже Греція, не Єгипет.",
          "Міні-нотатки вище досить, щоб сказати 3–4 речення вчителю."
        ]
      }
    }
  ]
};
