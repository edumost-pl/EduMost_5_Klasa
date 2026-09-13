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
  timeline: (window.EduMostHistoriaAxis && window.EduMostHistoriaAxis.forSection) ? window.EduMostHistoriaAxis.forSection(12, 16) : null,
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      formula: "lekcje 12–16",
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz rozdział III: od założenia Rzymu do chrześcijaństwa.",
          "Najpierw synteza, potem pytania. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ III: від заснування Риму до християнства.",
          "Спочатку синтез, потім запитання. Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym rozdziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "podać 753, 509, 44 i wyjaśnić różnicę: królestwo → republika → cesarstwo", ua: "назвати 753, 509, 44 і пояснити різницю: царство → республіка → імперія" },
        { pl: "wskazać limes (Ren–Dunaj, północ), 146 Kartagina, 395 i 476", ua: "вказати лімес (Рейн–Дунай, північ), 146 Карфаген, 395 і 476" },
        { pl: "nazwać akwedukt, amfiteatr, Spartakusa (73–71) i Pompeje (79)", ua: "назвати акведук, амфітеатр, Спартака (73–71) і Помпеї (79)" },
        { pl: "powiedzieć o Jezusie (ok. 33) i edykcie mediolańskim 313", ua: "сказати про Ісуса (бл. 33) і Міланський едикт 313" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Od miasta do cesarstwa", ua: "Від міста до імперії" },
      visual: gh("099", {
        kind: "map-placeholder",
        alt: { pl: "Mapa Imperium Rzymskiego — lekcja 13", ua: "Карта Римської імперії — урок 13" },
        title: { pl: "Morze Śródziemne i limes", ua: "Середземне море і лімес" },
        prompt: { pl: "Istniejąca mapa lekcji 13.", ua: "Існуюча карта уроку 13." }
      }),
      text: {
        pl: [
          ["Tradycja: Rzym ", em("753 p.n.e."), ". Republika od ", em("509"), ". ", em("Cezar"), " zginął w ", em("44 p.n.e."), " — potem cesarstwo. W ", em("146 p.n.e."), " Rzym zburzył Kartaginę."],
          ["Granica lądowa to ", em("limes"), " (Ren i Dunaj, na północy). W ", em("395"), " cesarstwo podzielono. W ", em("476"), " upadł Rzym zachodni."]
        ],
        ua: [
          ["Традиція: Рим ", em("753 до н.е."), ". Республіка від ", em("509"), ". ", em("Цезар"), " загинув у ", em("44 до н.е."), " — потім імперія. У ", em("146 до н.е."), " Рим зруйнував Карфаген."],
          ["Сухопутний кордон — ", em("лімес"), " (Рейн і Дунай, на півночі). У ", em("395"), " імперію поділили. У ", em("476"), " упав західний Рим."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Miasto, budowle, nowa wiara", ua: "Місто, будівлі, нова віра" },
      visual: gh("120", {
        kind: "image-placeholder",
        alt: { pl: "Akwedukt i amfiteatr — recap lekcji 15", ua: "Акведук і амфітеатр — recap уроку 15" },
        title: { pl: "Woda, widowiska, chrześcijaństwo", ua: "Вода, видовища, християнство" },
        prompt: { pl: "Istniejący slajd lekcji 15.", ua: "Існуючий слайд уроку 15." }
      }),
      text: {
        pl: [
          ["Rzymianie budowali drogi, ", em("akwedukty"), " i ", em("amfiteatry"), " (nie teatr grecki). Spartakus powstał w ", em("73–71 p.n.e."), ". Wezuwiusz zasypał Pompeje w ", em("79"), "."],
          ["Jezus umarł ok. ", em("33"), ". Chrześcijanie byli prześladowani, aż ", em("edykt mediolański 313"), " dał wolność religii."]
        ],
        ua: [
          ["Римляни будували дороги, ", em("акведуки"), " і ", em("амфітеатри"), " (не грецький театр). Спартак повстав у ", em("73–71 до н.е."), ". Везувій засипав Помпеї в ", em("79"), "."],
          ["Ісус помер бл. ", em("33"), ". Християн переслідували, аж ", em("Міланський едикт 313"), " дав свободу релігії."]
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa rozdziału", ua: "Слова розділу" },
      rows: [
        { pl: "republika — ustrój bez króla; władzę mają urzędnicy i senat", ua: "республіка — устрій без царя; владу мають урядники і сенат" },
        { pl: "limes — umocniona granica cesarstwa (Ren–Dunaj)", ua: "лімес — укріплений кордон імперії (Рейн–Дунай)" },
        { pl: "akwedukt — most-rurociąg z wodą do miasta", ua: "акведук — міст-водогін з водою до міста" },
        { pl: "edykt mediolański — akt 313, wolność chrześcijaństwa", ua: "Міланський едикт — акт 313, свобода християнства" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "753 p.n.e.",
      timelineYear: 753,
      task: {
        id: "r3-pam-753",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. według tradycji założono Rzym? Wpisz rok (np. 753).",
          ua: "В якому році до н.е. за традицією заснували Рим? Введи рік (напр. 753)."
        },
        answer: 753,
        hint: { pl: "Romulus. Na osi: Rzym.", ua: "Ромул. На осі: Рим." },
        explanation: { pl: "753 p.n.e. Republika 509. Cezar 44.", ua: "753 до н.е. Республіка 509. Цезар 44." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      task: {
        id: "r3-pam-limes",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie przebiegał limes rzymski w Europie?",
          ua: "Де проходив римський лімес у Європі?"
        },
        options: [
          { id: "a", label: { pl: "wzdłuż Renu i Dunaju, na północy cesarstwa", ua: "вздовж Рейну і Дунаю, на півночі імперії" } },
          { id: "b", label: { pl: "wzdłuż Nilu, w Afryce", ua: "вздовж Нілу, в Африці" } },
          { id: "c", label: { pl: "wzdłuż Wisły", ua: "вздовж Вісли" } }
        ],
        answer: "a",
        hint: { pl: "Dwie rzeki Europy Środkowej. Nie Wisła.", ua: "Дві ріки Центральної Європи. Не Вісла." },
        explanation: { pl: "Ren i Dunaj. To KN z lekcji 13.", ua: "Рейн і Дунай. Це KN з уроку 13." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy pamiętasz", ua: "Перевір, чи пам’ятаєш" },
      formula: "313",
      timelineYear: 313,
      task: {
        id: "r3-pam-313",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku cesarz wydał edykt mediolański? Wpisz rok (np. 313).",
          ua: "В якому році імператор видав Міланський едикт? Введи рік (напр. 313)."
        },
        answer: 313,
        hint: { pl: "Wolność chrześcijaństwa. Nie 476.", ua: "Свобода християнства. Не 476." },
        explanation: { pl: "313. Jezus ok. 33. Upadek Zachodu 476.", ua: "313. Ісус бл. 33. Упадок Заходу 476." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r3-roz-cezar",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego śmierć Cezara (44 p.n.e.) jest ważna?",
          ua: "Чому смерть Цезаря (44 до н.е.) важлива?"
        },
        options: [
          { id: "a", label: { pl: "kończy się republika, zaczyna droga do cesarstwa", ua: "кінчається республіка, починається шлях до імперії" } },
          { id: "b", label: { pl: "wtedy upadł Rzym zachodni", ua: "тоді упав західний Рим" } },
          { id: "c", label: { pl: "wtedy zbudowano pierwszy akwedukt", ua: "тоді збудували перший акведук" } }
        ],
        answer: "a",
        hint: { pl: "Ustrój, nie budowle. Upadek Zachodu = 476.", ua: "Устрій, не будівлі. Упадок Заходу = 476." },
        explanation: { pl: "44 = przełom ustroju. 476 = koniec cesarstwa zachodniego.", ua: "44 = перелом устрою. 476 = кінець західної імперії." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź, czy rozumiesz", ua: "Перевір, чи розумієш" },
      task: {
        id: "r3-roz-395",
        type: "true-false",
        level: "B",
        question: {
          pl: "Podział cesarstwa w 395 i upadek Zachodu w 476 to dwa różne wydarzenia — prawda czy fałsz?",
          ua: "Поділ імперії в 395 і упадок Заходу в 476 — дві різні події — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Najpierw podział, potem upadek tylko Zachodu. Wschód trwa dalej (Bizancjum).", ua: "Спочатку поділ, потім упадок лише Заходу. Схід триває далі (Візантія)." },
        explanation: { pl: "Prawda. 395 = dwa cesarstwa. 476 = koniec Zachodu. Wschód = rozdział IV.", ua: "Правда. 395 = дві імперії. 476 = кінець Заходу. Схід = розділ IV." }
      }
    },
    {
      type: "check",
      heading: { pl: "Chronologia", ua: "Хронологія" },
      task: {
        id: "r3-chrono",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która kolejność jest poprawna?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "753 Rzym → 509 republika → 146 Kartagina → 44 Cezar → 79 Pompeje → 313 edykt → 395 podział → 476 upadek Zachodu", ua: "753 Рим → 509 республіка → 146 Карфаген → 44 Цезар → 79 Помпеї → 313 едикт → 395 поділ → 476 упадок Заходу" } },
          { id: "b", label: { pl: "476 → 753 → 313", ua: "476 → 753 → 313" } },
          { id: "c", label: { pl: "edykt 313 → założenie Rzymu → Cezar", ua: "едикт 313 → заснування Риму → Цезар" } }
        ],
        answer: "a",
        hint: { pl: "Od miasta do cesarstwa, potem chrześcijaństwo i upadek Zachodu.", ua: "Від міста до імперії, потім християнство і упадок Заходу." },
        explanation: { pl: "Spartakus 73–71 p.n.e. jest między Cezarem a Pompejami.", ua: "Спартак 73–71 до н.е. є між Цезарем і Помпеями." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      formula: "476",
      timelineYear: 476,
      task: {
        id: "r3-sp-476",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku upadło cesarstwo zachodniorzymskie? Wpisz rok (np. 476).",
          ua: "В якому році впала Західна Римська імперія? Введи рік (напр. 476)."
        },
        answer: 476,
        hint: { pl: "Po podziale 395. Na osi: upadek Zachodu.", ua: "Після поділу 395. На осі: упадок Заходу." },
        explanation: { pl: "476. To umowny początek średniowiecza.", ua: "476. Це умовний початок середньовіччя." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian", ua: "Перевірка" },
      task: {
        id: "r3-sp-akwedukt",
        type: "true-false",
        level: "A",
        question: {
          pl: "Akwedukt dostarczał wodę do miasta, a amfiteatr służył widowiskom — prawda czy fałsz?",
          ua: "Акведук постачав воду до міста, а амфітеатр служив видовищам — правда чи неправда?"
        },
        answer: true,
        hint: { pl: "Dwie budowle rzymskie z lekcji 15.", ua: "Дві римські будівлі з уроку 15." },
        explanation: { pl: "Prawda. Teatr = Grecja (rozdział II).", ua: "Правда. Театр = Греція (розділ II)." }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz krótko", ua: "Скажи коротко" },
      prompt: {
        pl: "W 3 zdaniach: ustrój → cesarstwo → chrześcijaństwo. Potem wybierz streszczenie.",
        ua: "У 3 реченнях: устрій → імперія → християнство. Потім вибери стислий виклад."
      },
      task: {
        id: "r3-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka rozdział III?",
          ua: "Яке речення замикає розділ III?"
        },
        options: [
          { id: "a", label: { pl: "Rzym z miasta stał się cesarstwem; zbudował drogi i akwedukty; chrześcijaństwo z prześladowanej wiary stało się dozwolone (313), a Zachód upadł w 476", ua: "Рим з міста став імперією; збудував дороги і акведуки; християнство з переслідуваної віри стало дозволеним (313), а Захід упав у 476" } },
          { id: "b", label: { pl: "To rozdział o Sparcie i Maratonie", ua: "Це розділ про Спарту і Марафон" } },
          { id: "c", label: { pl: "To rozdział o Mieszku i 966", ua: "Це розділ про Мешка і 966" } }
        ],
        answer: "a",
        hint: { pl: "Rzym, nie Grecja i nie Piastowie.", ua: "Рим, не Греція і не П’ясти." },
        explanation: { pl: "Maraton = II. 966 = VI.", ua: "Марафон = II. 966 = VI." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Mini-notatka rozdziału", ua: "Міні-нотатка розділу" },
      items: [
        mark(
          "Muszę wiedzieć: królestwo → republika → cesarstwo; limes; akwedukt i amfiteatr; chrześcijaństwo.",
          ["republika", "limes", "akwedukt"],
          "Мушу знати: царство → республіка → імперія; лімес; акведук і амфітеатр; християнство.",
          ["республіка", "лімес", "акведук"]
        ),
        mark(
          "Muszę znać: Cezar, Spartakus; 753, 509, 146, 44, 73–71, 79, 33, 313, 395, 476.",
          ["Cezar", "753", "476"],
          "Мушу знати: Цезар, Спартак; 753, 509, 146, 44, 73–71, 79, 33, 313, 395, 476.",
          ["Цезар", "753", "476"]
        ),
        mark(
          "Potrafię powiedzieć: Rzym podbił Morze Śródziemne, dał prawo i budowle, a chrześcijaństwo zmieniło religię cesarstwa.",
          ["Rzym", "chrześcijaństwo"],
          "Можу сказати: Рим підкорив Середземне море, дав право і будівлі, а християнство змінило релігію імперії.",
          ["Рим", "християнство"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      text: {
        pl: [
          "Jeśli coś było trudne — wróć do lekcji 12–16. Rozdział IV to już średniowiecze i Bizancjum.",
          "Mini-notatka powyżej wystarczy, by powiedzieć 3–4 zdania nauczycielowi."
        ],
        ua: [
          "Якщо щось було важко — повернись до уроків 12–16. Розділ IV — уже середньовіччя і Візантія.",
          "Міні-нотатки вище досить, щоб сказати 3–4 речення вчителю."
        ]
      }
    }
  ]
};
