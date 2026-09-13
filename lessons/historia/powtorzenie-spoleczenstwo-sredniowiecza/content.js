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
  timeline: null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 22–26",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział V: jak żyli ludzie w średniowieczu — nie listę dat.",
          "Tu ważne są pojęcia: feudalizm, stany, rycerz, miasto, Kościół, sztuka. Polska ma własne prawo książęce — to most do lekcji 32."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ V: як жили люди в середньовіччі — не список дат.",
          "Тут важливі поняття: феодалізм, стани, лицар, місто, Церква, мистецтво. Польща має власне князівське право — це місток до уроку 32."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "wyjaśnić senior, wasal, lenno, hołd i cztery stany", ua: "пояснити сеньйора, васала, лен, присягу і чотири стани" },
        { pl: "odróżnić feudalizm Zachodu od prawa książęcego w Polsce", ua: "відрізнити феодалізм Заходу від князівського права в Польщі" },
        { pl: "opisać rycerza, lokację miasta, cechy i trójpolówkę", ua: "описати лицаря, локацію міста, цехи і трипілля" },
        { pl: "wskazać rolę Kościoła i odróżnić romanizm od gotyku", ua: "вказати роль Церкви і відрізнити романізм від готики" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Feudalizm i stany", ua: "Феодалізм і стани" },
      visual: gh("185", {
        kind: "image-placeholder",
        alt: { pl: "Piramida feudalna — lekcja 22", ua: "Феодальна піраміда — урок 22" },
        title: { pl: "Kto komu służy?", ua: "Хто кому служить?" },
        prompt: { pl: "Istniejący slajd lekcji 22.", ua: "Існуючий слайд уроку 22." }
      }),
      text: {
        pl: [
          ["Na Zachodzie ", em("senior"), " daje ", em("lenno"), ", ", em("wasal"), " składa ", em("hołd"), " i służy wojskiem. Społeczeństwo dzieli się na ", em("cztery stany"), ": duchowieństwo, rycerstwo, mieszczaństwo, chłopi."],
          ["W Polsce Piastów długo rządzi ", em("prawo książęce"), " — to nie kopia feudalizmu Zachodu. Most do lekcji 32."]
        ],
        ua: [
          ["На Заході ", em("сеньйор"), " дає ", em("лен"), ", ", em("васал"), " складає ", em("присягу"), " і служить військом. Суспільство ділиться на ", em("чотири стани"), ": духовенство, лицарство, міщани, селяни."],
          ["У Польщі П’ястів довго править ", em("князівське право"), " — це не копія феодалізму Заходу. Місток до уроку 32."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Rycerz, miasto, Kościół, sztuka", ua: "Лицар, місто, Церква, мистецтво" },
      visual: gh("200", {
        kind: "image-placeholder",
        alt: { pl: "Miasto średniowieczne — lekcja 24", ua: "Середньовічне місто — урок 24" },
        title: { pl: "Pasowanie, rynek, klasztor, katedra", ua: "Посвята, ринок, монастир, собор" },
        prompt: { pl: "Istniejący slajd lekcji 24.", ua: "Існуючий слайд уроку 24." }
      }),
      text: {
        pl: [
          ["", em("Rycerz"), " walczy konno; ", em("pasowanie"), " czyni go rycerzem. Wieś żyje ", em("trójpolówką"), ". Miasto powstaje przez ", em("lokację"), "; rzemieślnicy łączą się w ", em("cechy"), "."],
          ["Kościół uczy, sądzi sumienie i prowadzi zakony. W sztuce: ", em("romanizm"), " (grube mury, półokrągłe łuki) i ", em("gotyk"), " (strzeliste łuki, witraże)."]
        ],
        ua: [
          ["", em("Лицар"), " воює верхи; ", em("посвята"), " робить його лицарем. Село живе ", em("трипіллям"), ". Місто виникає через ", em("локацію"), "; ремісники єднаються в ", em("цехи"), "."],
          ["Церква вчить, судить сумління і веде ордени. У мистецтві: ", em("романізм"), " (товсті мури, півкруглі арки) і ", em("готика"), " (стрілчасті арки, вітражі)."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "lenno — ziemia dana wasalowi za służbę", ua: "лен — земля, дана васалу за службу" },
        { pl: "lokacja — założenie miasta na prawie (rynek, wójt)", ua: "локація — заснування міста на праві (ринок, війт)" },
        { pl: "cech — związek rzemieślników jednego zawodu", ua: "цех — спілка ремісників одного ремесла" },
        { pl: "prawo książęce — władza księcia nad ludźmi i ziemią (Polska Piastów)", ua: "князівське право — влада князя над людьми і землею (Польща П’ястів)" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r5-pam-wasal",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto w feudalizmie składa hołd i dostaje lenno?",
          ua: "Хто у феодалізмі складає присягу і отримує лен?"
        },
        options: [
          { id: "a", label: { pl: "wasal", ua: "васал" } },
          { id: "b", label: { pl: "faraon", ua: "фараон" } },
          { id: "c", label: { pl: "konsul rzymski", ua: "римський консул" } }
        ],
        answer: "a",
        hint: { pl: "Senior daje, wasal służy.", ua: "Сеньйор дає, васал служить." },
        explanation: { pl: "Wasal. Faraon = Egipt. Konsul = Rzym.", ua: "Васал. Фараон = Єгипет. Консул = Рим." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r5-pam-stany",
        type: "true-false",
        level: "A",
        question: {
          pl: "Cztery stany średniowiecza to: duchowieństwo, rycerstwo, mieszczaństwo i chłopi — prawda czy fałsz?",
          ua: "Чотири стани середньовіччя: духовенство, лицарство, міщани і селяни — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Nie „klasy” XIX wieku. Stany = grupy z różnymi prawami.", ua: "Не «класи» XIX століття. Стани = групи з різними правами." },
        explanation: { pl: "Prawda. To KN z lekcji 22.", ua: "Правда. Це KN з уроку 22." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r5-pam-lokacja",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się założenie miasta na prawie (rynek, wójt, przywilej)? Wpisz jedno słowo.",
          ua: "Як називається заснування міста на праві (ринок, війт, привілей)? Введи одне слово."
        },
        answer: ["lokacja", "lokacji", "локація", "локації"],
        hint: { pl: "Nie „gród” z lekcji 32. To miasto średniowieczne.", ua: "Не «город» з уроку 32. Це середньовічне місто." },
        explanation: { pl: "Lokacja. Gród i podgrodzie = Polska Piastów (32).", ua: "Локація. Город і підгороддя = Польща П’ястів (32)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r5-roz-prawo",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego nie wolno kopiować feudalizmu Zachodu na Polskę Piastów?",
          ua: "Чому не можна копіювати феодалізм Заходу на Польщу П’ястів?"
        },
        options: [
          { id: "a", label: { pl: "bo w Polsce długo działało prawo książęce — książę miał władzę nad ludźmi i ziemią", ua: "бо в Польщі довго діяло князівське право — князь мав владу над людьми і землею" } },
          { id: "b", label: { pl: "bo Polska nie miała Kościoła", ua: "бо Польща не мала Церкви" } },
          { id: "c", label: { pl: "bo w Polsce nie było wsi", ua: "бо в Польщі не було сіл" } }
        ],
        answer: "a",
        hint: { pl: "Most do lekcji 32. Kościół i wieś w Polsce były.", ua: "Місток до уроку 32. Церква і село в Польщі були." },
        explanation: { pl: "Prawo książęce ≠ lenno senior–wasal. To KN, nie ozdoba.", ua: "Князівське право ≠ лен сеньйор–васал. Це KN, не прикраса." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r5-roz-gotyk",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym gotyk różni się od romanizmu?",
          ua: "Чим готика відрізняється від романізму?"
        },
        options: [
          { id: "a", label: { pl: "gotyk: strzeliste łuki i witraże; romanizm: grubsze mury i półokrągłe łuki", ua: "готика: стрілчасті арки і вітражі; романізм: товстіші мури і півкруглі арки" } },
          { id: "b", label: { pl: "gotyk to tylko malowidła w jaskiniach", ua: "готика — лише малюнки в печерах" } },
          { id: "c", label: { pl: "romanizm to amfiteatr rzymski", ua: "романізм — римський амфітеатр" } }
        ],
        answer: "a",
        hint: { pl: "Dwa style kościołów. Nie prehistoria i nie Rzym.", ua: "Два стилі церков. Не доісторія і не Рим." },
        explanation: { pl: "Lekcja 26. Amfiteatr = rozdział III.", ua: "Урок 26. Амфітеатр = розділ III." }
      }
    },
    {
      type: "check",
      heading: { pl: "Mapa / plan miasta", ua: "Карта / план міста" },
      visual: gh("216", {
        kind: "image-placeholder",
        alt: { pl: "Sztuka średniowiecza — lekcja 26", ua: "Мистецтво середньовіччя — урок 26" },
        title: { pl: "Kościół w krajobrazie", ua: "Церква в краєвиді" },
        prompt: { pl: "Istniejący slajd lekcji 26.", ua: "Існуючий слайд уроку 26." }
      }),
      task: {
        id: "r5-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co było sercem lokacyjnego miasta?",
          ua: "Що було серцем локаційного міста?"
        },
        options: [
          { id: "a", label: { pl: "rynek (często z ratuszem i kościołem w pobliżu)", ua: "ринок (часто з ратушею і церквою поряд)" } },
          { id: "b", label: { pl: "piramida faraona", ua: "піраміда фараона" } },
          { id: "c", label: { pl: "akropol ateński", ua: "афінський акрополь" } }
        ],
        answer: "a",
        hint: { pl: "Plan z lekcji 24. Nie Egipt i nie Grecja.", ua: "План з уроку 24. Не Єгипет і не Греція." },
        explanation: { pl: "Rynek + cechy + mury. Wieś = trójpolówka.", ua: "Ринок + цехи + мури. Село = трипілля." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r5-sp-cech",
        type: "true-false",
        level: "A",
        question: {
          pl: "Cech to związek rzemieślników jednego zawodu w mieście — prawda czy fałsz?",
          ua: "Цех — спілка ремісників одного ремесла в місті — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Miasto, nie wieś. Nie „cech rycerski”.", ua: "Місто, не село. Не «лицарський цех»." },
        explanation: { pl: "Prawda. Na wsi: trójpolówka i pańszczyzna / daniny.", ua: "Правда. На селі: трипілля і панщина / данини." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r5-sp-pasowanie",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się uroczystość, po której giermek stawał się rycerzem? Wpisz jedno słowo.",
          ua: "Як називається урочистість, після якої зброєносець ставав лицарем? Введи одне слово."
        },
        answer: ["pasowanie", "pasowania", "посвята", "посвячення", "pasowanie na rycerza"],
        hint: { pl: "Pas rycerski. Lekcja 23.", ua: "Пояс лицаря. Урок 23." },
        explanation: { pl: "Pasowanie. Potem: honor, służba, walka konno.", ua: "Посвята. Потім: честь, служба, бій верхи." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 3 zdaniach: stany → miasto i wieś → Kościół i sztuka. Potem wybierz streszczenie.",
        ua: "У 3 реченнях: стани → місто і село → Церква і мистецтво. Потім вибери стислий виклад."
      },
      task: {
        id: "r5-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział V?",
          ua: "Яке речення замикає розділ V?"
        },
        options: [
          { id: "a", label: { pl: "Na Zachodzie feudalizm i stany; rycerz, lokacyjne miasto i wieś z trójpolówką; Kościół i dwa style — romanizm i gotyk; Polska ma prawo książęce", ua: "На Заході феодалізм і стани; лицар, локаційне місто і село з трипіллям; Церква і два стилі — романізм і готика; Польща має князівське право" } },
          { id: "b", label: { pl: "To rozdział o Aleksandrze i Issos", ua: "Це розділ про Александра і Ісс" } },
          { id: "c", label: { pl: "To rozdział tylko o datach 966 i 1025", ua: "Це розділ лише про дати 966 і 1025" } }
        ],
        answer: "a",
        hint: { pl: "Społeczeństwo, nie lista bitew. 966 = rozdział VI.", ua: "Суспільство, не список битв. 966 = розділ VI." },
        explanation: { pl: "Aleksander = II. Korona Piastów = VI.", ua: "Александр = II. Корона П’ястів = VI." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę wiedzieć: senior–wasal–lenno–hołd; cztery stany; rycerz i pasowanie; lokacja, cech, trójpolówka; Kościół; romanizm i gotyk.",
          ["lenno", "stany", "lokacja"],
          "Мушу знати: сеньйор–васал–лен–присяга; чотири стани; лицар і посвята; локація, цех, трипілля; Церква; романізм і готика.",
          ["лен", "стани", "локація"]
        ),
        mark(
          "Muszę umieć wyjaśnić: Polska Piastów ≠ kopia feudalizmu Zachodu (prawo książęce).",
          ["prawo książęce"],
          "Мушу вміти пояснити: Польща П’ястів ≠ копія феодалізму Заходу (князівське право).",
          ["князівське право"]
        ),
        mark(
          "Potrafię powiedzieć: średniowiecze to stany i służba, miasto przy rynku, wieś przy polu i Kościół, który uczy i buduje.",
          ["stany", "Kościół"],
          "Можу сказати: середньовіччя — це стани і служба, місто біля ринку, село біля поля і Церква, яка вчить і будує.",
          ["стани", "Церква"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 22–26. Rozdział VI to już Polska Piastów i daty 966–1138.",
          "Tu sprawdzian pyta o pojęcia, nie o olimpiadę dat."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 22–26. Розділ VI — уже Польща П’ястів і дати 966–1138.",
          "Тут перевірка питає про поняття, не про олімпіаду дат."
        ]
      }
    }
  ]
};
