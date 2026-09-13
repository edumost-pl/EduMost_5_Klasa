function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L01_Typical_day/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}
function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = ENG_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Nazwiesz po angielsku czynności dnia codziennego (get up, have breakfast, go to sleep…).", ua: "Назвеш англійською щоденні дії (get up, have breakfast, go to sleep…)." },
        { pl: "Ułożysz swój typowy dzień: rano — południe — wieczór.", ua: "Укладеш свій типовий день: ранок — день — вечір." },
        { pl: "Powiesz godzinę po angielsku na dwa sposoby (half past six / six thirty).", ua: "Скажеш годину англійською двома способами (half past six / six thirty)." },
        { pl: "Ułożysz krótkie zdanie: I get up at… Then I…", ua: "Складеш коротке речення: I get up at… Then I…" },
        { pl: "Porównasz dwie rutyny: Anna gets up at… I get up at…", ua: "Порівняєш дві рутини: Anna gets up at… I get up at…" }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "get up", ua: "wstawać · вставати" },
        { pl: "get dressed", ua: "ubierać się · одягатися" },
        { pl: "have breakfast / lunch / dinner", ua: "jeść śniadanie / obiad / kolację · снідати / обідати / вечеряти" },
        { pl: "catch the bus", ua: "łapać autobus · сідати на автобус" },
        { pl: "have lessons", ua: "mieć lekcje · мати уроки" },
        { pl: "hang out with friends", ua: "spędzać czas z przyjaciółmi · тусуватися з друзями" },
        { pl: "come back home", ua: "wracać do domu · повертатися додому" },
        { pl: "do homework", ua: "odrabiać lekcje · робити домашнє" },
        { pl: "have a shower", ua: "brać prysznic · приймати душ" },
        { pl: "go to sleep", ua: "iść spać · лягати спати" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l01-typical-day.png", {
        alt: { pl: "Komiks dnia: rano, szkoła, wieczór", ua: "Комікс дня: ранок, школа, вечір" },
        title: { pl: "What's your typical day?", ua: "What's your typical day?" },
        prompt: { pl: "Edukacyjny kolaż 16:9, trzy kadry dnia 11-latka: 1 budzik i wstawanie; 2 autobus szkolny; 3 kolacja i sen. Etykiety EN: morning; afternoon; evening. Jasny, przyjazny styl, bez logotypów, bez twarzy marek." }
      }),
      text: {
        pl: [
          "To pierwsza lekcja z podręcznika *Flash* — moduł **My World**.",
          "Dziś nie uczymy się długiego tekstu. Uczymy się mówić, **co robisz w typowym dniu**: rano, w szkole, po południu i wieczorem.",
          "Pytanie na całą lekcję: **What's your typical day?**"
        ],
        ua: [
          "Це перший урок із підручника *Flash* — модуль **My World**.",
          "Сьогодні не вчимо довгий текст. Вчимося казати, **що ти робиш типового дня**: вранці, в школі, по обіді й увечері.",
          "Питання на весь урок: **What's your typical day?**"
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Rano · In the morning", ua: "Ранок · In the morning" },
      visual: vizGh("l01-morning.png", {
        alt: { pl: "Kolejność rano: get up, get dressed, have breakfast, catch the bus", ua: "Порядок вранці: get up, get dressed, have breakfast, catch the bus" },
        title: { pl: "I get up at seven. Then I get dressed.", ua: "I get up at seven. Then I get dressed." },
        prompt: { pl: "Edukacyjna infografika 16:9, cztery ikony w rzędzie ze strzałkami, etykiety EN: get up; get dressed; have breakfast; catch the bus. Dziecko 11 lat, poranek, bez logotypów." }
      }),
      text: {
        pl: [
          ["Typowy poranek po angielsku to łańcuch czasowników: ", em("get up"), ", ", em("get dressed"), ", ", em("have breakfast"), ", ", em("catch the bus"), "."],
          "Szablon: **I get up at seven.** Potem: **Then I get dressed.** **After that I have breakfast.**",
          "Have breakfast / have lunch / have dinner — po angielsku „have” + posiłek, nie „eat breakfast” na pierwszej lekcji (to też bywa poprawne, ale Flash uczy *have*)."
        ],
        ua: [
          ["Типовий ранок англійською — ланцюжок дієслів: ", em("get up"), ", ", em("get dressed"), ", ", em("have breakfast"), ", ", em("catch the bus"), "."],
          "Шаблон: **I get up at seven.** Далі: **Then I get dressed.** **After that I have breakfast.**",
          "Have breakfast / have lunch / have dinner — англійською „have” + прийом їжі."
        ]
      },
      task: {
        id: "eng01-e1",
        type: "single-choice",
        question: { pl: "Co robisz NAJPIERW rano?", ua: "Що ти робиш НАЙПЕРШЕ вранці?" },
        options: [
          { id: "a", label: { pl: "I catch the bus.", ua: "I catch the bus." } },
          { id: "b", label: { pl: "I get up.", ua: "I get up." } },
          { id: "c", label: { pl: "I do homework.", ua: "I do homework." } }
        ],
        answer: "b",
        explanation: { pl: "Najpierw wstajesz: I get up. Autobus i lekcje są później.", ua: "Спочатку встаєш: I get up." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Godzina · What time?", ua: "Година · What time?" },
      visual: vizGh("l01-clock.png", {
        alt: { pl: "Trzy zegary: 7:15, 7:30, 7:45", ua: "Три годинники: 7:15, 7:30, 7:45" },
        title: { pl: "quarter past · half past · quarter to", ua: "quarter past · half past · quarter to" },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy analogowe zegary: 7:15, 7:30, 7:45. Etykiety EN: (a) quarter past seven / seven fifteen; half past seven / seven thirty; (a) quarter to eight / seven forty-five. Bez logotypów." }
      }),
      text: {
        pl: [
          "Po angielsku godzinę możesz powiedzieć na dwa sposoby.",
          "**7:15** — *(a) quarter past seven* albo *seven fifteen*.",
          "**7:30** — *half past seven* albo *seven thirty*.",
          "**7:45** — *(a) quarter to eight* albo *seven forty-five*.",
          "Flash lubi obie wersje. W szkole często słyszysz *half past* i *quarter past / quarter to*."
        ],
        ua: [
          "Англійською годину можна сказати двома способами.",
          "**7:15** — *(a) quarter past seven* або *seven fifteen*.",
          "**7:30** — *half past seven* або *seven thirty*.",
          "**7:45** — *(a) quarter to eight* або *seven forty-five*.",
          "У школі часто чути *half past* і *quarter past / quarter to*."
        ]
      },
      task: {
        id: "eng01-e2",
        type: "single-choice",
        question: { pl: "Które zdanie pasuje do godziny 7:30?", ua: "Яке речення пасує до 7:30?" },
        options: [
          { id: "a", label: { pl: "I get up at quarter to seven.", ua: "I get up at quarter to seven." } },
          { id: "b", label: { pl: "I get up at half past seven.", ua: "I get up at half past seven." } },
          { id: "c", label: { pl: "I get up at quarter past eight.", ua: "I get up at quarter past eight." } }
        ],
        answer: "b",
        explanation: { pl: "7:30 = half past seven (albo seven thirty).", ua: "7:30 = half past seven (або seven thirty)." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Południe i wieczór", ua: "День і вечір" },
      visual: vizGh("l01-evening.png", {
        alt: { pl: "Po szkole: hang out, do homework, have dinner, go to sleep", ua: "Після школи: hang out, do homework, have dinner, go to sleep" },
        title: { pl: "In the afternoon · In the evening", ua: "In the afternoon · In the evening" },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa rzędy. Góra afternoon: have lunch, hang out with friends, come back home, do homework. Dół evening: have a shower, have dinner, chat with friends, go to sleep. Etykiety EN. Bez logotypów." }
      }),
      text: {
        pl: [
          "**In the afternoon** (po południu): *have lunch*, *have lessons*, *hang out with friends*, *come back home*, *do homework*, *have a snack*.",
          "**In the evening** (wieczorem): *have a shower*, *have dinner*, *chat with friends*, *go to sleep*.",
          "Możesz dodać hobby: *have swimming practice* — mam trening pływania."
        ],
        ua: [
          "**In the afternoon** (по обіді): *have lunch*, *have lessons*, *hang out with friends*, *come back home*, *do homework*, *have a snack*.",
          "**In the evening** (ввечері): *have a shower*, *have dinner*, *chat with friends*, *go to sleep*.",
          "Можна додати хобі: *have swimming practice* — маю тренування з плавання."
        ]
      },
      task: {
        id: "eng01-e3",
        type: "multiple-choice",
        question: { pl: "Które czynności są raczej wieczorne? Zaznacz WSZYSTKIE.", ua: "Які дії радше вечірні? Познач УСІ." },
        options: [
          { id: "a", label: { pl: "go to sleep", ua: "go to sleep" } },
          { id: "b", label: { pl: "get up", ua: "get up" } },
          { id: "c", label: { pl: "have dinner", ua: "have dinner" } },
          { id: "d", label: { pl: "have breakfast", ua: "have breakfast" } }
        ],
        answer: ["a", "c"],
        explanation: { pl: "Wieczorem: have dinner, go to sleep. Get up i have breakfast to ranek.", ua: "Увечері: have dinner, go to sleep." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Powiedz o sobie i porównaj", ua: "Скажи про себе і порівняй" },
      text: {
        pl: [
          "O sobie: **I get up at 7:15 in the morning. Then I get dressed and have breakfast.**",
          "O koleżance: **Anna gets up at 7:45.** Zauważ **-s** przy *gets* — to będzie następna lekcja gramatyki (Present Simple).",
          "Porównanie z Flash: **Anna gets up at 7:45. I get up at 7:15.**"
        ],
        ua: [
          "Про себе: **I get up at 7:15 in the morning. Then I get dressed and have breakfast.**",
          "Про подругу: **Anna gets up at 7:45.** Зверни увагу на **-s** у *gets* — це наступний урок граматики (Present Simple).",
          "Порівняння: **Anna gets up at 7:45. I get up at 7:15.**"
        ]
      },
      task: {
        id: "eng01-e4",
        type: "input-text",
        question: { pl: "Wpisz po angielsku czasownik: wstaję. Dwa słowa, tak jak w podręczniku.", ua: "Впиши англійською дієслово: встаю. Два слова, як у підручнику." },
        answer: "get up",
        explanation: { pl: "I get up. Dwa słowa: get + up.", ua: "I get up. Два слова: get + up." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng01-c1",
        type: "true-false",
        question: { pl: "„Have lunch” to śniadanie.", ua: "«Have lunch» — це сніданок." },
        answer: false,
        explanation: { pl: "Have lunch = obiad (w środku dnia). Śniadanie to have breakfast.", ua: "Have lunch = обід. Сніданок — have breakfast." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng01-c2",
        type: "single-choice",
        question: { pl: "Które zdanie jest o autobusie do szkoły?", ua: "Яке речення про автобус до школи?" },
        options: [
          { id: "a", label: { pl: "I catch the bus.", ua: "I catch the bus." } },
          { id: "b", label: { pl: "I have a shower.", ua: "I have a shower." } },
          { id: "c", label: { pl: "I hang out with friends.", ua: "I hang out with friends." } }
        ],
        answer: "a",
        explanation: { pl: "Catch the bus = łapać / jechać autobusem.", ua: "Catch the bus = сідати на автобус." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Typical day = czynności + pory dnia: *in the morning / in the afternoon / in the evening*.",
          "Kolejność: get up → get dressed → have breakfast → catch the bus → have lessons → come back home → do homework → have dinner → go to sleep.",
          "Godzina: *half past*, *quarter past*, *quarter to* — albo same liczby: *seven thirty*."
        ],
        ua: [
          "Typical day = дії + частини дня: *in the morning / in the afternoon / in the evening*.",
          "Порядок: get up → get dressed → have breakfast → catch the bus → have lessons → come back home → do homework → have dinner → go to sleep.",
          "Година: *half past*, *quarter past*, *quarter to* — або числа: *seven thirty*."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "Powiedz 4 zdania o SOBIE, na przykład:",
          "I get up at … in the morning. Then I … After school I … In the evening I …",
          "Następna lekcja: **1a Teen World** — Ross, Dure, Sámi i *I like / I don’t mind / I dislike*."
        ],
        ua: [
          "Скажи 4 речення про СЕБЕ, наприклад:",
          "I get up at … in the morning. Then I … After school I … In the evening I …",
          "Наступний урок: **1a Teen World** — Ross, Dure, Sámi і *I like / I don’t mind / I dislike*."
        ]
      }
    }
  ]
};
