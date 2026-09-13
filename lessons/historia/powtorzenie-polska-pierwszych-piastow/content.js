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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(27, 32) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 27–32",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział VI: od plemion do testamentu Krzywoustego i życia przy grodzie.",
          "Najpierw synteza, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ VI: від племен до заповіту Кривоустого і життя біля города.",
          "Спочатку синтез, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "wskazać Polan, Mieszka, chrzest 966 i Cedynię 972", ua: "вказати полян, Мешка, хрещення 966 і Цединю 972" },
        { pl: "opowiedzieć o Wojciechu 997, zjeździe 1000 i koronie 1025", ua: "розповісти про Войцеха 997, з’їзд 1000 і корону 1025" },
        { pl: "wyjaśnić kryzys 1038, Śmiałego 1076/1079 i Głogów 1109", ua: "пояснити кризу 1038, Сміливого 1076/1079 і Глогув 1109" },
        { pl: "powiedzieć, czym jest testament 1138, gród i prawo książęce", ua: "сказати, чим є заповіт 1138, город і князівське право" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Od Polan do korony", ua: "Від полян до корони" },
      visual: gh("232", {
        kind: "map-placeholder",
        alt: { pl: "Państwo Mieszka — lekcja 28", ua: "Держава Мешка — урок 28" },
        title: { pl: "966, 972, 1000, 1025", ua: "966, 972, 1000, 1025" },
        prompt: { pl: "Istniejąca mapa lekcji 28.", ua: "Існуюча карта уроку 28." }
      }),
      text: {
        pl: [
          ["", em("Polanie"), " wokół Gniezna. ", em("Mieszko I"), " chrzci kraj w ", em("966"), " i broni go pod ", em("Cedynią 972"), "."],
          ["", em("Wojciech"), " ginie w ", em("997"), ". Zjazd gnieźnieński ", em("1000"), " daje metropolię. ", em("Bolesław Chrobry"), " koronuje się w ", em("1025"), "."]
        ],
        ua: [
          ["", em("Поляни"), " навколо Гнєзна. ", em("Мешко I"), " хрестить край у ", em("966"), " і захищає його під ", em("Цединею 972"), "."],
          ["", em("Войцех"), " гине в ", em("997"), ". Гнєзненський з’їзд ", em("1000"), " дає митрополію. ", em("Болеслав Хоробрий"), " коронується в ", em("1025"), "."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Kryzys, odbudowa, rozbicie", ua: "Криза, відбудова, роздробленість" },
      visual: gh("264", {
        kind: "image-placeholder",
        alt: { pl: "Gród i podgrodzie — lekcja 32", ua: "Город і підгороддя — урок 32" },
        title: { pl: "1038–1138 i życie przy grodzie", ua: "1038–1138 і життя біля города" },
        prompt: { pl: "Istniejący slajd lekcji 32.", ua: "Існуючий слайд уроку 32." }
      }),
      text: {
        pl: [
          ["Po Chrobrym kryzys (najazd ", em("1038"), "). Odbudowa Kazimierza Odnowiciela. ", em("Bolesław Śmiały"), " koronowany ", em("1076"), ", konflikt ze Stanisławem ", em("1079"), "."],
          ["", em("Krzywousty"), ": obrona ", em("Głogowa 1109"), ", ", em("testament 1138"), " — początek rozbicia. Ludzie żyją przy ", em("grodzie"), " i podgrodziu. Władza: ", em("prawo książęce"), " (nie kopia feudalizmu z 22)."]
        ],
        ua: [
          ["Після Хороброго криза (напад ", em("1038"), "). Відбудова Казимира Відновителя. ", em("Болеслав Сміливий"), " коронований ", em("1076"), ", конфлікт зі Станіславом ", em("1079"), "."],
          ["", em("Кривоустий"), ": оборона ", em("Глогува 1109"), ", ", em("заповіт 1138"), " — початок роздробленості. Люди живуть біля ", em("города"), " і підгороддя. Влада: ", em("князівське право"), " (не копія феодалізму з 22)."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "chrzest Polski — 966, Mieszko I, związek z Kościołem łacińskim", ua: "хрещення Польщі — 966, Мешко I, зв’язок з латинською Церквою" },
        { pl: "zjazd gnieźnieński — 1000, Otton III i Chrobry, arcybiskupstwo", ua: "гнєзненський з’їзд — 1000, Оттон III і Хоробрий, архієпископство" },
        { pl: "testament Krzywoustego — 1138, podział między synów", ua: "заповіт Кривоустого — 1138, поділ між синів" },
        { pl: "gród / podgrodzie — siedziba władzy i osada warsztatów", ua: "город / підгороддя — оселя влади і оселя майстерень" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "966",
      timelineYear: 966,
      task: {
        id: "r6-pam-966",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Mieszko I przyjął chrzest? Wpisz rok (np. 966).",
          ua: "В якому році Мешко I прийняв хрещення? Введи рік (напр. 966)."
        },
        answer: 966,
        hint: { pl: "Najważniejsza data rozdziału. Na osi: chrzest.", ua: "Найважливіша дата розділу. На осі: хрещення." },
        explanation: { pl: "966. Cedynia 972.", ua: "966. Цединя 972." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "1025",
      timelineYear: 1025,
      task: {
        id: "r6-pam-1025",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Bolesław Chrobry koronował się na króla? Wpisz rok (np. 1025).",
          ua: "В якому році Болеслав Хоробрий коронувався на короля? Введи рік (напр. 1025)."
        },
        answer: 1025,
        hint: { pl: "Po zjeździe 1000. Na osi: korona.", ua: "Після з’їзду 1000. На осі: корона." },
        explanation: { pl: "1025. Wojciech 997. Zjazd 1000.", ua: "1025. Войцех 997. З’їзд 1000." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r6-pam-polanie",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywało się plemię, od którego wzięła nazwę Polska? Wpisz jedną nazwę.",
          ua: "Як називалося плем’я, від якого Польща взяла назву? Введи одну назву."
        },
        answer: ["Polanie", "polanie", "Поляни", "поляни"],
        hint: { pl: "Gniezno. Nie Wiślanie jako nazwa kraju.", ua: "Гнєзно. Не вісляни як назва країни." },
        explanation: { pl: "Polanie. Lekcja 27.", ua: "Поляни. Урок 27." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r6-roz-chrzest",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego chrzest 966 był ważny dla państwa Mieszka?",
          ua: "Чому хрещення 966 було важливим для держави Мешка?"
        },
        options: [
          { id: "a", label: { pl: "wszedł do grona państw chrześcijańskich Europy i związał się z Kościołem łacińskim", ua: "увійшов до кола християнських держав Європи і зв’язався з латинською Церквою" } },
          { id: "b", label: { pl: "bo wtedy koronowano Chrobrego", ua: "бо тоді коронували Хороброго" } },
          { id: "c", label: { pl: "bo wtedy podpisano testament 1138", ua: "бо тоді підписали заповіт 1138" } }
        ],
        answer: "a",
        hint: { pl: "Polityka i wiara. Korona = 1025. Testament = 1138.", ua: "Політика і віра. Корона = 1025. Заповіт = 1138." },
        explanation: { pl: "966 otwiera Polskę na Zachód. 1025 to już korona syna.", ua: "966 відкриває Польщу на Захід. 1025 — уже корона сина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r6-roz-1138",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jaki był skutek testamentu Krzywoustego (1138)?",
          ua: "Яким був наслідок заповіту Кривоустого (1138)?"
        },
        options: [
          { id: "a", label: { pl: "kraj podzielono między synów — początek rozbicia dzielnicowego", ua: "край поділили між синів — початок удільної роздробленості" } },
          { id: "b", label: { pl: "Polska od razu dostała unię z Litwą", ua: "Польща одразу отримала унію з Литвою" } },
          { id: "c", label: { pl: "Mieszko przyjął chrzest", ua: "Мешко прийняв хрещення" } }
        ],
        answer: "a",
        hint: { pl: "Rozbicie = rozdział VII. Unia = 1385. Chrzest = 966.", ua: "Роздробленість = розділ VII. Унія = 1385. Хрещення = 966." },
        explanation: { pl: "1138 otwiera rozdział VII. To przyczyna, nie „koniec Polski”.", ua: "1138 відкриває розділ VII. Це причина, не «кінець Польщі»." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r6-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "966 chrzest → 972 Cedynia → 997 Wojciech → 1000 zjazd → 1025 korona → 1038 kryzys → 1076/1079 Śmiały → 1109 Głogów → 1138 testament", ua: "966 хрещення → 972 Цединя → 997 Войцех → 1000 з’їзд → 1025 корона → 1038 криза → 1076/1079 Сміливий → 1109 Глогув → 1138 заповіт" } },
          { id: "b", label: { pl: "1138 → 966 → 1025", ua: "1138 → 966 → 1025" } },
          { id: "c", label: { pl: "korona Chrobrego → chrzest Mieszka → zjazd gnieźnieński", ua: "корона Хороброго → хрещення Мешка → гнєзненський з’їзд" } }
        ],
        answer: "a",
        hint: { pl: "Od chrztu do testamentu. Korona jest po zjeździe, nie przed chrztem.", ua: "Від хрещення до заповіту. Корона після з’їзду, не перед хрещенням." },
        explanation: { pl: "To oś całego rozdziału VI.", ua: "Це вісь усього розділу VI." }
      }
    },
    {
      type: "check",
      heading: { pl: "Mapa", ua: "Карта" },
      visual: gh("232", {
        kind: "map-placeholder",
        alt: { pl: "Ziemie Mieszka", ua: "Землі Мешка" },
        title: { pl: "Gniezno, Cedynia", ua: "Гнєзно, Цединя" },
        prompt: { pl: "Istniejąca mapa lekcji 28.", ua: "Існуюча карта уроку 28." }
      }),
      task: {
        id: "r6-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leżało centrum państwa pierwszych Piastów?",
          ua: "Де лежало осереддя держави перших П’ястів?"
        },
        options: [
          { id: "a", label: { pl: "wokół Gniezna (Polanie); Cedynia na zachodzie — obrona 972", ua: "навколо Гнєзна (поляни); Цединя на заході — оборона 972" } },
          { id: "b", label: { pl: "w Atenach", ua: "в Афінах" } },
          { id: "c", label: { pl: "nad Nilem", ua: "над Нілом" } }
        ],
        answer: "a",
        hint: { pl: "Wielkopolska. Nie Grecja i nie Egipt.", ua: "Великопольща. Не Греція і не Єгипет." },
        explanation: { pl: "Gniezno = stolica ideowa. Kraków później (Odnowiciel / rozbicie).", ua: "Гнєзно = ідейна столиця. Краків пізніше (Відновитель / роздробленість)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1000",
      timelineYear: 1000,
      task: {
        id: "r6-sp-1000",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku odbył się zjazd gnieźnieński? Wpisz rok (np. 1000).",
          ua: "В якому році відбувся гнєзненський з’їзд? Введи рік (напр. 1000)."
        },
        answer: 1000,
        hint: { pl: "Otton III i Chrobry. Między Wojciechem a koroną.", ua: "Оттон III і Хоробрий. Між Войцехом і короною." },
        explanation: { pl: "1000. Metropolia gnieźnieńska.", ua: "1000. Гнєзненська митрополія." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "1138",
      timelineYear: 1138,
      task: {
        id: "r6-sp-1138",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Bolesław Krzywousty wydał testament? Wpisz rok (np. 1138).",
          ua: "В якому році Болеслав Кривоустий видав заповіт? Введи рік (напр. 1138)."
        },
        answer: 1138,
        hint: { pl: "Po Głogowie 1109. Na osi: testament.", ua: "Після Глогува 1109. На осі: заповіт." },
        explanation: { pl: "1138. To most do rozdziału VII.", ua: "1138. Це місток до розділу VII." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r6-sp-grod",
        type: "true-false",
        level: "A",
        question: {
          pl: "Przy grodzie było podgrodzie z warsztatami; ludność świadczyła daniny i posługi z prawa książęcego — prawda czy fałsz?",
          ua: "Біля города було підгороддя з майстернями; людність несла данини і повинності з князівського права — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Lekcja 32. Nie lokacja z 24.", ua: "Урок 32. Не локація з 24." },
        explanation: { pl: "Prawda. Lokacyjne miasto = rozdział V.", ua: "Правда. Локаційне місто = розділ V." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 4 zdaniach: chrzest → korona → kryzys → testament. Potem wybierz streszczenie.",
        ua: "У 4 реченнях: хрещення → корона → криза → заповіт. Потім вибери стислий виклад."
      },
      task: {
        id: "r6-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział VI?",
          ua: "Яке речення замикає розділ VI?"
        },
        options: [
          { id: "a", label: { pl: "Mieszko ochrzcił Polskę, Chrobry wziął koronę, po kryzysie państwo odbudowano, a testament 1138 otworzył rozbicie; ludzie żyli przy grodzie pod prawem książęcym", ua: "Мешко охрестив Польщу, Хоробрий узяв корону, після кризи державу відбудували, а заповіт 1138 відкрив роздробленість; люди жили біля города під князівським правом" } },
          { id: "b", label: { pl: "To rozdział o Grunwaldzie i Jagielle", ua: "Це розділ про Грюнвальд і Ягайла" } },
          { id: "c", label: { pl: "To rozdział o Cezarze i 44 p.n.e.", ua: "Це розділ про Цезаря і 44 до н.е." } }
        ],
        answer: "a",
        hint: { pl: "Piastowie do 1138. Grunwald = VII. Cezar = III.", ua: "П’ясти до 1138. Грюнвальд = VII. Цезар = III." },
        explanation: { pl: "1385/1410 = następny dział.", ua: "1385/1410 = наступний розділ." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę znać ludzi: Mieszko I, Dobrawa, Wojciech, Bolesław Chrobry, Kazimierz Odnowiciel, Bolesław Śmiały, Stanisław, Bolesław Krzywousty.",
          ["Mieszko I", "Chrobry", "Krzywousty"],
          "Мушу знати людей: Мешко I, Добрава, Войцех, Болеслав Хоробрий, Казимир Відновитель, Болеслав Сміливий, Станіслав, Болеслав Кривоустий.",
          ["Мешко I", "Хоробрий", "Кривоустий"]
        ),
        mark(
          "Muszę pamiętać daty: 966, 972, 997, 1000, 1025, 1038, 1076, 1079, 1109, 1138.",
          ["966", "1025", "1138"],
          "Мушу пам’ятати дати: 966, 972, 997, 1000, 1025, 1038, 1076, 1079, 1109, 1138.",
          ["966", "1025", "1138"]
        ),
        mark(
          "Potrafię powiedzieć: Polanie zbudowali państwo, chrzest i korona wciągnęły je do Europy, a podział 1138 osłabił kraj; życie toczyło się przy grodzie.",
          ["chrzest", "1138"],
          "Можу сказати: поляни збудували державу, хрещення і корона втягнули її в Європу, а поділ 1138 послабив край; життя точилося біля города.",
          ["хрещення", "1138"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 27–32. Rozdział VII zaczyna się od rozbicia i Krzyżaków.",
          "Mini-notatka powyżej to konspekt na 4 zdania przy tablicy."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 27–32. Розділ VII починається від роздробленості і хрестоносців.",
          "Міні-нотатка вище — конспект на 4 речення біля дошки."
        ]
      }
    }
  ]
};
