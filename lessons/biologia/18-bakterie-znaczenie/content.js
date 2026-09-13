function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L18_Bakterie_znaczenie_i_zdrowie/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}


function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}


window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Podasz przykłady pożytecznych bakterii.", ua: "Наведеш приклади корисних бактерій." },
        { pl: "Powiesz, że niektóre bakterie są chorobotwórcze.", ua: "Скажеш, що деякі бактерії є хвороботворними." },
        { pl: "Wyjaśnisz, po co higiena i pasteryzacja.", ua: "Поясниш, навіщо гігієна і пастеризація." },
        { pl: "Powiesz, że antybiotyki działają na bakterie, nie na wirusy.", ua: "Скажеш, що антибіотики діють на бактерії, не на віруси." },
        { pl: "Uzasadnisz, dlaczego nie wolno nadużywać antybiotyków.", ua: "Обґрунтуєш, чому не можна зловживати антибіотиками." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "bakterie pożyteczne", ua: "корисні бактерії" },
        { pl: "bakterie chorobotwórcze", ua: "хвороботворні бактерії" },
        { pl: "flora jelitowa", ua: "кишкова мікрофлора" },
        { pl: "pasteryzacja", ua: "пастеризація" },
        { pl: "higiena", ua: "гігієна" },
        { pl: "antybiotyk", ua: "антибіотик" },
        { pl: "saprobiont", ua: "сапробіонт" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l18-zacznijmy.png", {
        alt: { pl: "Jogurt, gleba i mycie rąk", ua: "Йогурт, ґрунт і миття рук" },
        title: { pl: "Bakterie nie są „złem”. Są pożyteczne albo szkodliwe — zależy które.", ua: "Бактерії не є «злом». Корисні або шкідливі — залежить які." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9: kubek jogurtu, korzenie rośliny w glebie, dziecko myje ręce. Etykiety PL: pożyteczne; gleba; higiena. Bez grozy, bez ran, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 17 bakterie umiały żyć. Dziś: co z tego wynika dla człowieka, gleby i zdrowia.",
          "Większość bakterii nie jest Twoim wrogiem. Część pomaga w jedzeniu i w jelitach. Część wywołuje choroby — wtedy liczy się higiena i lekarz, nie panika."
        ],
        ua: [
          "На уроці 17 бактерії вміли жити. Сьогодні: що з цього для людини, ґрунту і здоров’я.",
          "Більшість бактерій не ворог. Частина допомагає. Частина викликає хвороби — тоді гігієна і лікар, не паніка."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Pożyteczne i chorobotwórcze", ua: "Корисні і хвороботворні" },
      visual: tree({
        layout: "fork",
        root: { pl: "bakterie a człowiek", ua: "бактерії і людина" },
        items: [
          { pl: "pożyteczne", ua: "корисні" },
          { pl: "chorobotwórcze", ua: "хвороботворні" }
        ]
      }),
      items: [
        { pl: "pożyteczne — jogurt, gleba, flora jelitowa", ua: "корисні — йогурт, ґрунт, мікрофлора кишок" },
        { pl: "chorobotwórcze — część bakterii może wywołać chorobę", ua: "хвороботворні — частина може викликати хворобу" }
      ],
      text: {
        pl: [
          ["", em("Bakterie pożyteczne"), " pomagają nam i przyrodzie."],
          "Przykłady: bakterie w jogurcie i serze; bakterie glebowe wiążące azot przy korzeniach; saprobionty rozkładające szczątki (lekcja 11); ", em("flora jelitowa"), " — bakterie w jelitach, które pomagają trawić.",
          "Bez saprobiontów świat zapełniłby się resztkami. Bakteria ≠ automatycznie choroba."
        ],
        ua: [
          ["", em("Корисні бактерії"), " допомагають нам і природі."],
          "Приклади: йогурт і сир; ґрунтові бактерії азоту; сапробіонти; ", em("мікрофлора кишок"), ".",
          "Бактерія ≠ автоматично хвороба."
        ]
      },
      task: {
        id: "l18-e1",
        type: "multiple-choice",
        question: { pl: "Zaznacz przykłady pożytecznych bakterii / ich roli.", ua: "Познач приклади корисних бактерій / їхньої ролі." },
        options: [
          { id: "a", label: { pl: "bakterie w jogurcie i serze", ua: "бактерії в йогурті і сирі" } },
          { id: "b", label: { pl: "saprobionty w glebie", ua: "сапробіонти в ґрунті" } },
          { id: "c", label: { pl: "flora jelitowa", ua: "мікрофлора кишок" } },
          { id: "d", label: { pl: "kapsyd wirusa grypy", ua: "капсид вірусу грипу" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Jedzenie, gleba, jelita. Kapsyd to wirus (L16).", ua: "Їжа, ґрунт, кишки. Капсид — вірус." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Chorobotwórcze — bez grozy", ua: "Хвороботворні — без жаху" },
      visual: vizGh("l18-chorobotworcze.png", {
        alt: { pl: "Spokojna infografika: bakterie chorobotwórcze", ua: "Спокійна інфографіка: хвороботворні бактерії" },
        title: { pl: "Niektóre bakterie wywołują choroby. Lekarz, nie internetowa groza.", ua: "Деякі бактерії викликають хвороби. Лікар, не інтернетний жах." },
        prompt: { pl: "Edukacyjna infografika 16:9. Spokojna ikona termometru i lekarza. Etykiety PL: niektóre bakterie są chorobotwórcze; przykłady na klasę 5: angina, próchnica — bez ran w zbliżeniu, bez sepsy, bez grozy. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Bakterie chorobotwórcze"), " to te, które mogą wywołać chorobę."],
          "Na klasę 5 wystarczą spokojne przykłady: angina, próchnica zębów. Nie recytujemy listy grozy i nie oglądamy ran.",
          "Objawy zgłaszasz doroślemu. Diagnozę stawia lekarz. Ta lekcja nie zastępuje wizyty."
        ],
        ua: [
          ["", em("Хвороботворні бактерії"), " можуть викликати хворобу."],
          "Для 5 класу спокійні приклади: ангіна, карієс. Без списку жаху.",
          "Симптоми — дорослому. Діагноз — лікар."
        ]
      },
      task: {
        id: "l18-e2",
        type: "true-false",
        question: { pl: "Niektóre bakterie są chorobotwórcze, ale nie wszystkie bakterie wywołują choroby.", ua: "Деякі бактерії хвороботворні, але не всі бактерії викликають хвороби." },
        answer: true,
        explanation: { pl: "Są pożyteczne i chorobotwórcze. Nie malujemy wszystkich na czarno.", ua: "Є корисні і хвороботворні." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Higiena", ua: "Гігієна" },
      visual: vizGh("l18-higiena.png", {
        alt: { pl: "Mycie rąk, czysta woda, jedzenie w lodówce", ua: "Миття рук, чиста вода, їжа в холодильнику" },
        title: { pl: "Mniej bakterii chorobotwórczych tam, gdzie myjesz i chłodzisz.", ua: "Менше хвороботворних бактерій там, де миєш і охолоджуєш." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kafelki PL: myj ręce przed jedzeniem; pij bezpieczną wodę; trzymaj łatwo psujące się jedzenie w lodówce. Uśmiechnięte dziecko, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Higiena"), " zmniejsza szansę, że chorobotwórcze bakterie trafią do ust albo rany."],
          "Myjesz ręce przed jedzeniem i po toalecie. Nie pijesz wody z kałuży. Szybko psujące się jedzenie trzymasz w lodówce — zimno spowalnia podział bakterii (lekcja 17).",
          "Higiena nie znaczy „wysterylizować cały świat”. Flora jelitowa ma zostać. Chodzi o rozsądek, nie o strach."
        ],
        ua: [
          ["", em("Гігієна"), " зменшує шанс, що хвороботворні бактерії потраплять до рота чи рани."],
          "Миєш руки. Не п’єш воду з калюжі. Їжа, що псується, — у холодильнику.",
          "Гігієна ≠ стерилізувати весь світ. Мікрофлора кишок має лишитися."
        ]
      },
      task: {
        id: "l18-e3",
        type: "single-choice",
        question: { pl: "Po co myć ręce przed jedzeniem?", ua: "Навіщо мити руки перед їжею?" },
        options: [
          { id: "a", label: { pl: "żeby mniej bakterii chorobotwórczych trafiło do ust", ua: "щоб менше хвороботворних бактерій потрапило до рота" } },
          { id: "b", label: { pl: "żeby zabić florę jelitową na zawsze", ua: "щоб назавжди вбити мікрофлору кишок" } },
          { id: "c", label: { pl: "żeby wirus dostał chloroplasty", ua: "щоб вірус дістав хлоропласти" } }
        ],
        answer: "a",
        explanation: { pl: "Higiena ogranicza chorobotwórcze. Flory jelitowej nie „wymywamy z życia”.", ua: "Гігієна обмежує хвороботворні." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pasteryzacja", ua: "Пастеризація" },
      visual: vizGh("l18-pasteryzacja.png", {
        alt: { pl: "Mleko pasteryzowane", ua: "Пастеризоване молоко" },
        title: { pl: "Podgrzanie, które niszczy wiele drobnoustrojów, ale nie gotuje na śmierć smaku.", ua: "Підігрів, який нищить багато мікробів, але не вбиває смак." },
        prompt: { pl: "Edukacyjna infografika 16:9. Karton mleka z etykietą PL: pasteryzowane. Termometr / ciepła kąpiel, nie wrzątek w kłębach. Napis: podgrzanie niszczy wiele bakterii. Bez marek, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pasteryzacja"), " to podgrzanie żywności (np. mleka), które niszczy wiele drobnoustrojów i pozwala dłużej przechowywać produkt."],
          "To nie to samo co sterylizacja wszystkiego w domu. W sklepie mleko pasteryzowane jest bezpieczniejsze niż surowe z nieznanego źródła.",
          "Przetrwalniki (lekcja 17) bywają odporne — dlatego daty ważności i lodówka nadal się liczą."
        ],
        ua: [
          ["", em("Пастеризація"), " — підігрів їжі (напр. молока), який нищить багато мікробів і дозволяє довше зберігати продукт."],
          "Це не стерилізація всього вдома. Пастеризоване молоко безпечніше за сире з невідомого джерела.",
          "Спори (урок 17) бувають стійкі — тому термін придатності і холодильник важливі."
        ]
      },
      task: {
        id: "l18-e4",
        type: "single-choice",
        question: { pl: "Czym jest pasteryzacja?", ua: "Що таке пастеризація?" },
        options: [
          { id: "a", label: { pl: "podgrzanie żywności, które niszczy wiele drobnoustrojów", ua: "підігрів їжі, який нищить багато мікробів" } },
          { id: "b", label: { pl: "szczepienie przeciw odrze", ua: "щеплення проти кору" } },
          { id: "c", label: { pl: "nazwa kapelusza grzyba", ua: "назва шапинки гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Ciepło niszczy wiele bakterii w mleku i soku. Nie mylić ze szczepieniem.", ua: "Тепло нищить багато бактерій." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Antybiotyki ≠ wirusy", ua: "Антибіотики ≠ віруси" },
      visual: vizGh("l18-antybiotyki.png", {
        alt: { pl: "Antybiotyk działa na bakterię, nie na wirus", ua: "Антибіотик діє на бактерію, не на вірус" },
        title: { pl: "Lek na bakterie. Na grypę — nie.", ua: "Ліки на бактерії. На грип — ні." },
        prompt: { pl: "Edukacyjne porównanie 16:9. LEWA: bakteria + pudełko leku, etykieta PL: antybiotyk może pomóc. PRAWA: wirus + przekreślone pudełko, etykieta: antybiotyk nie działa na wirusy. Bez nazw marek, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Antybiotyki"), " to leki, które niszczą bakterie albo hamują ich wzrost. Przepisuje je lekarz."],
          "Na wirusy (grypa, ospa wietrzna) antybiotyki ", em("nie działają"), " — to już było na lekcji 16.",
          "Sam nie dobierasz dawki z szafki. Niedokończona kuracja albo „na wszelki wypadek” szkodzi."
        ],
        ua: [
          ["", em("Антибіотики"), " — ліки, які нищать бактерії або гальмують їхній ріст. Призначає лікар."],
          "На віруси антибіотики ", em("не діють"), " — урок 16.",
          "Сам не добираєш дозу з шафки."
        ]
      },
      task: {
        id: "l18-e5",
        type: "true-false",
        question: { pl: "Antybiotyki działają na bakterie, a nie na wirusy.", ua: "Антибіотики діють на бактерії, а не на віруси." },
        answer: true,
        explanation: { pl: "Grypa wirusowa ≠ angina bakteryjna. Lekarz rozróżnia.", ua: "Грип вірусний ≠ ангіна бактеріальна." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Nie nadużywać", ua: "Не зловживати" },
      visual: vizGh("l18-nie-naduzywac.png", {
        alt: { pl: "Kuracja według lekarza do końca", ua: "Курс за лікарем до кінця" },
        title: { pl: "Złe użycie sprawia, że bakterie stają się odporne na lek.", ua: "Погане вживання робить бактерії стійкими до ліків." },
        prompt: { pl: "Edukacyjna infografika 16:9. Kalendarz tabletek z etykietą PL: do końca, jak kazał lekarz. Przekreślone: branie „na wszelki wypadek”; dzielenie się lekiem z kolegą. Napis: odporność bakterii na antybiotyk. Bez grozy, bez marek, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Gdy bierze się antybiotyki za często, za krótko albo „bo tak”, część bakterii przeżywa i uczy się leku. Potem lek słabiej działa. To ", em("antybiotykooporność"), " — na klasę 5: bakterie robią się odporne.",
          "Zasady: tylko gdy lekarz każe; cała kuracja; nie leczysz kolegi swoimi tabletkami; nie na wirusa.",
          "Pożyteczne bakterie też bywają ofiarą antybiotyku — dlatego flora jelitowa może się rozregulować. Kolejny powód, by nie brać ich bez potrzeby."
        ],
        ua: [
          "Коли антибіотики беруть зачасто, закоротко або «про всяк випадок», частина бактерій виживає і звикає до ліків. Це ", em("антибіотикорезистентність"), ".",
          "Правила: лише як лікар сказав; увесь курс; не лікуєш друга своїми таблетками; не на вірус.",
          "Корисні бактерії теж страждають — мікрофлора може розладнатися."
        ]
      },
      task: {
        id: "l18-e6",
        type: "single-choice",
        question: { pl: "Dlaczego nie wolno nadużywać antybiotyków?", ua: "Чому не можна зловживати антибіотиками?" },
        options: [
          { id: "a", label: { pl: "bakterie mogą stać się odporne na lek, a flora jelitowa ucierpieć", ua: "бактерії можуть стати стійкими до ліків, а мікрофлора кишок постраждати" } },
          { id: "b", label: { pl: "bo antybiotyki to nazwa porostu", ua: "бо антибіотики — назва лишайника" } },
          { id: "c", label: { pl: "bo wirusy wtedy dostają jądro", ua: "бо віруси тоді дістають ядро" } }
        ],
        answer: "a",
        explanation: { pl: "Oporność + szkoda dla pożytecznych bakterii. Tylko z lekarzem.", ua: "Стійкість + шкода корисним бактеріям." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Pożyteczne", ua: "Практика. Корисні" },
      task: {
        id: "l18-p1",
        type: "multiple-choice",
        question: { pl: "Gdzie spotkasz pożyteczne bakterie?", ua: "Де зустрінеш корисних бактерій?" },
        options: [
          { id: "a", label: { pl: "w jogurcie", ua: "у йогурті" } },
          { id: "b", label: { pl: "w glebie (saprobionty, azot)", ua: "у ґрунті (сапробіонти, азот)" } },
          { id: "c", label: { pl: "we florze jelitowej", ua: "у мікрофлорі кишок" } },
          { id: "d", label: { pl: "w kapsydzie wirusa", ua: "у капсиді вірусу" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Jedzenie, gleba, jelita.", ua: "Їжа, ґрунт, кишки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Chorobotwórcze", ua: "Хвороботворні" },
      task: {
        id: "l18-p2",
        type: "true-false",
        question: { pl: "Wszystkie bakterie są chorobotwórcze.", ua: "Усі бактерії є хвороботворними." },
        answer: false,
        explanation: { pl: "Wiele jest pożytecznych. Chorobotwórcze to część.", ua: "Багато корисних. Хвороботворні — частина." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Higiena i pasteryzacja", ua: "Гігієна і пастеризація" },
      task: {
        id: "l18-p3",
        type: "single-choice",
        question: { pl: "Co łączy mycie rąk i pasteryzację mleka?", ua: "Що спільне в миття рук і пастеризації молока?" },
        options: [
          { id: "a", label: { pl: "ograniczają liczbę groźnych drobnoustrojów", ua: "обмежують кількість небезпечних мікробів" } },
          { id: "b", label: { pl: "to nazwy królestw", ua: "це назви царств" } },
          { id: "c", label: { pl: "zastępują fotosyntezę", ua: "замінюють фотосинтез" } }
        ],
        answer: "a",
        explanation: { pl: "Higiena i ciepło (pasteryzacja) zmniejszają ryzyko.", ua: "Гігієна і тепло зменшують ризик." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Antybiotyk i grypa", ua: "Антибіотик і грип" },
      task: {
        id: "l18-p4",
        type: "single-choice",
        question: { pl: "Na co działają antybiotyki?", ua: "На що діють антибіотики?" },
        options: [
          { id: "a", label: { pl: "na bakterie, nie na wirusy", ua: "на бактерії, не на віруси" } },
          { id: "b", label: { pl: "tylko na wirusy grypy", ua: "лише на віруси грипу" } },
          { id: "c", label: { pl: "na złamania kości", ua: "на переломи кісток" } }
        ],
        answer: "a",
        explanation: { pl: "L16 + L18. Grypa = wirus.", ua: "Урок 16 + 18. Грип = вірус." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Nadużywanie", ua: "Зловживання" },
      task: {
        id: "l18-p5",
        type: "true-false",
        question: { pl: "Antybiotyk bierze się tylko według zalecenia lekarza i całą kurację.", ua: "Антибіотик беруть лише за призначенням лікаря і весь курс." },
        answer: true,
        explanation: { pl: "Inaczej bakterie mogą stać się odporne, a flora jelitowa ucierpi.", ua: "Інакше бактерії стають стійкими." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Pożyteczne", ua: "Перевірка 1. Корисні" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l18-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz przykłady pożytecznych bakterii / ról.", ua: "Познач приклади корисних бактерій / ролей." },
        options: [
          { id: "a", label: { pl: "jogurt i ser", ua: "йогурт і сир" } },
          { id: "b", label: { pl: "saprobionty i azot w glebie", ua: "сапробіонти і азот у ґрунті" } },
          { id: "c", label: { pl: "flora jelitowa", ua: "мікрофлора кишок" } },
          { id: "d", label: { pl: "kapsyd", ua: "капсид" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Jedzenie, gleba, jelita. Kapsyd = wirus.", ua: "Їжа, ґрунт, кишки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Chorobotwórcze", ua: "Перевірка 2. Хвороботворні" },
      task: {
        id: "l18-s2",
        type: "true-false",
        question: { pl: "Niektóre bakterie są chorobotwórcze.", ua: "Деякі бактерії є хвороботворними." },
        answer: true,
        explanation: { pl: "Część — tak. Nie wszystkie.", ua: "Частина — так. Не всі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Higiena i pasteryzacja", ua: "Перевірка 3. Гігієна і пастеризація" },
      task: {
        id: "l18-s3",
        type: "single-choice",
        question: { pl: "Po co higiena i pasteryzacja?", ua: "Навіщо гігієна і пастеризація?" },
        options: [
          { id: "a", label: { pl: "żeby ograniczyć groźne drobnoustroje w codziennym życiu i w żywności", ua: "щоб обмежити небезпечні мікроби в щоденному житті і в їжі" } },
          { id: "b", label: { pl: "żeby zastąpić królestwo roślin", ua: "щоб замінити царство рослин" } },
          { id: "c", label: { pl: "żeby namnażać wirusy w kapsydzie", ua: "щоб розмножувати віруси в капсиді" } }
        ],
        answer: "a",
        explanation: { pl: "Mycie rąk + podgrzanie żywności.", ua: "Миття рук + підігрів їжі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Antybiotyki i wirusy", ua: "Перевірка 4. Антибіотики і віруси" },
      task: {
        id: "l18-s4",
        type: "true-false",
        question: { pl: "Antybiotyki działają na bakterie, nie na wirusy.", ua: "Антибіотики діють на бактерії, не на віруси." },
        answer: true,
        explanation: { pl: "Grypa ≠ lek antybiotykowy „na wszelki wypadek”.", ua: "Грип ≠ антибіотик про всяк випадок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Nadużywanie", ua: "Перевірка 5. Зловживання" },
      task: {
        id: "l18-s5",
        type: "single-choice",
        question: { pl: "Dlaczego nie wolno nadużywać antybiotyków?", ua: "Чому не можна зловживати антибіотиками?" },
        options: [
          { id: "a", label: { pl: "bakterie mogą stać się odporne na lek; cierpi też flora jelitowa", ua: "бактерії можуть стати стійкими до ліків; страждає і мікрофлора кишок" } },
          { id: "b", label: { pl: "bo wtedy liść traci chlorofil", ua: "бо тоді листок втрачає хлорофіл" } },
          { id: "c", label: { pl: "bo pasteryzacja przestaje istnieć", ua: "бо пастеризація перестає існувати" } }
        ],
        answer: "a",
        explanation: { pl: "Oporność + szkoda pożytecznym bakteriom. Tylko lekarz.", ua: "Стійкість + шкода корисним." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l18-pozyteczne.png", {
        alt: { pl: "Pożyteczne bakterie", ua: "Корисні бактерії" },
        title: { pl: "Pomagają albo szkodzą. Higiena. Antybiotyk tylko z lekarzem.", ua: "Допомагають або шкодять. Гігієна. Антибіотик лише з лікарем." },
        prompt: { pl: "Ta sama plansza pożytecznych." }
      }),
      text: {
        pl: [
          "Pożyteczne: jogurt, ser, azot, saprobionty, flora jelitowa.",
          "Niektóre są chorobotwórcze — bez grozy, z lekarzem.",
          "Higiena i pasteryzacja ograniczają ryzyko.",
          "Antybiotyki: bakterie tak, wirusy nie.",
          "Nie nadużywać — oporność i szkoda dla flory jelitowej."
        ],
        ua: [
          "Корисні: йогурт, сир, азот, сапробіонти, мікрофлора кишок.",
          "Деякі хвороботворні — без жаху, з лікарем.",
          "Гігієна і пастеризація зменшують ризик.",
          "Антибіотики: бактерії так, віруси ні.",
          "Не зловживати — стійкість і шкода мікрофлорі."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię podać przykłady pożytecznych bakterii.", ua: "Можу навести приклади корисних бактерій." },
        { pl: "Potrafię powiedzieć, że niektóre bakterie są chorobotwórcze.", ua: "Можу сказати, що деякі бактерії хвороботворні." },
        { pl: "Potrafię wyjaśnić higienę i pasteryzację.", ua: "Можу пояснити гігієну і пастеризацію." },
        { pl: "Potrafię powiedzieć, że antybiotyki nie działają na wirusy.", ua: "Можу сказати, що антибіотики не діють на віруси." },
        { pl: "Potrafię uzasadnić, czemu nie nadużywa się antybiotyków.", ua: "Можу обґрунтувати, чому не зловживають антибіотиками." }
      ]
    }
  ]
};
