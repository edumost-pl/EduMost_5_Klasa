function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L16_Wirusy/images/";

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
        { pl: "Powiesz, że wirus nie jest komórką i nie należy do królestw organizmów.", ua: "Скажеш, що вірус не є клітиною і не належить до царств організмів." },
        { pl: "Wskażesz dwa składniki wirusa: kwas nukleinowy i osłonkę białkową.", ua: "Вкажеш два складники вірусу: нуклеїнову кислоту і білкову оболонку." },
        { pl: "Wyjaśnisz, że wirus namnaża się tylko w komórce gospodarza.", ua: "Поясниш, що вірус розмножується лише в клітині хазяїна." },
        { pl: "Podasz przykłady chorób wirusowych odpowiednich do wieku.", ua: "Наведеш приклади вірусних хвороб, відповідних віку." },
        { pl: "Powiesz, że antybiotyki nie działają na wirusy, a pomagają higiena i szczepienia.", ua: "Скажеш, що антибіотики не діють на віруси, а допомагають гігієна і щеплення." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "wirus", ua: "вірус" },
        { pl: "kapsyd", ua: "капсид" },
        { pl: "kwas nukleinowy", ua: "нуклеїнова кислота" },
        { pl: "gospodarz", ua: "хазяїн" },
        { pl: "namnażanie", ua: "розмноження (вірусу)" },
        { pl: "szczepienie", ua: "щеплення" },
        { pl: "antybiotyk", ua: "антибіотик" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l16-zacznijmy.png", {
        alt: { pl: "Prosty model wirusa obok komórki", ua: "Проста модель вірусу поряд із клітиною" },
        title: { pl: "Na lekcji 15 wirusy stanęły poza królestwami. Dziś zobaczysz dlaczego.", ua: "На уроці 15 віруси стали поза царствами. Сьогодні побачиш чому." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: spokojny, schematyczny model wirusa (osłonka + wnętrze), nie groźny, nie 3D GWO. PRAWA: komórka z jądrem. Etykiety PL: wirus — nie komórka; komórka — organizm z królestw. Bez choroby w zbliżeniu, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wirusy istnieją — i potrafią wywołać grypę albo ospę wietrzną. Ale nie jedzą, nie oddychają i nie mają budowy komórkowej.",
          "Dlatego nie wpisujemy ich do pięciu królestw. Dziś: z czego wirus jest zbudowany, jak się namnaża i jak się przed nim chronić — bez grozy."
        ],
        ua: [
          "Віруси існують — і можуть викликати грип чи вітрянку. Але не їдять, не дихають і не мають клітинної будови.",
          "Тому не вписуємо їх у п’ять царств. Сьогодні: з чого вірус збудований, як розмножується і як захищатися — без жаху."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Nie komórka, nie królestwo", ua: "Не клітина, не царство" },
      visual: tree({
        layout: "fork",
        root: { pl: "w przyrodzie", ua: "у природі" },
        items: [
          { pl: "organizmy — komórki", ua: "організми — клітини" },
          { pl: "wirusy — nie komórki", ua: "віруси — не клітини" }
        ],
        caption: { pl: "wirusy poza pięcioma królestwami", ua: "віруси поза п’ятьма царствами" }
      }),
      items: [
        { pl: "organizmy z królestw mają komórki", ua: "організми з царств мають клітини" },
        { pl: "wirus nie jest komórką i nie należy do królestw", ua: "вірус не є клітиною і не належить до царств" }
      ],
      text: {
        pl: [
          ["", em("Wirus"), " nie jest komórką. Nie ma cytozolu, mitochondriów ani jądra. Nie wykonuje czynności życiowych z lekcji 14 samodzielnie."],
          "Dlatego w klasyfikacji z lekcji 15 wirusy stoją ", em("poza królestwami"), " organizmów.",
          "Nie mówimy „wirusy nie istnieją”. Mówimy: to inna kategoria niż bakteria, protist, grzyb, roślina i zwierzę."
        ],
        ua: [
          ["", em("Вірус"), " не є клітиною. Не має цитозолю, мітохондрій чи ядра. Не виконує життєвих функцій з уроку 14 самостійно."],
          "Тому у класифікації з уроку 15 віруси стоять ", em("поза царствами"), " організмів.",
          "Не кажемо «віруси не існують». Кажемо: це інша категорія."
        ]
      },
      task: {
        id: "l16-e1",
        type: "true-false",
        question: { pl: "Wirus nie jest komórką i nie należy do pięciu królestw organizmów.", ua: "Вірус не є клітиною і не належить до п’яти царств організмів." },
        answer: true,
        explanation: { pl: "Poza królestwami. Inna kategoria niż bakteria czy zwierzę.", ua: "Поза царствами. Інша категорія." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dwa składniki", ua: "Два складники" },
      visual: vizGh("l16-budowa.png", {
        alt: { pl: "Kapsyd i kwas nukleinowy", ua: "Капсид і нуклеїнова кислота" },
        title: { pl: "W środku przepis (kwas nukleinowy). Na zewnątrz osłonka białkowa.", ua: "Всередині рецепт (нуклеїнова кислота). Зовні білкова оболонка." },
        prompt: { pl: "Edukacyjny przekrój 16:9, prosty schemat (nie kradzież GWO 3D). Etykiety PL: kwas nukleinowy (DNA albo RNA) — przepis; kapsyd — osłonka białkowa. Opcjonalnie cienka osłonka lipidowa u niektórych wirusów — drobnym drukiem, nie MUST. Jasne tło, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wirus ma zwykle dwa składniki: ", em("kwas nukleinowy"), " (DNA albo RNA — przepis na kopie wirusa) oraz ", em("kapsyd"), " (osłonkę z białek).",
          "Niektóre wirusy mają jeszcze cienką osłonkę z zewnątrz. Na klasę 5 wystarczą dwa składniki: przepis + białkowa osłonka.",
          "To nie jest komórka „w miniaturze”. To pakiet instrukcji w pudełku."
        ],
        ua: [
          "Вірус має зазвичай два складники: ", em("нуклеїнову кислоту"), " (ДНК або РНК — рецепт) і ", em("капсид"), " (оболонку з білків).",
          "Деякі віруси мають ще тонку зовнішню оболонку. Для 5 класу досить двох складників.",
          "Це не клітина «в мініатюрі». Це пакет інструкції в коробці."
        ]
      },
      task: {
        id: "l16-e2",
        type: "single-choice",
        question: { pl: "Z czego zbudowany jest wirus (dwa główne składniki)?", ua: "З чого збудований вірус (два головні складники)?" },
        options: [
          { id: "a", label: { pl: "kwas nukleinowy i osłonka białkowa (kapsyd)", ua: "нуклеїнова кислота і білкова оболонка (капсид)" } },
          { id: "b", label: { pl: "jądro, chloroplasty i ściana celulozowa", ua: "ядро, хлоропласти і целюлозна стінка" } },
          { id: "c", label: { pl: "tylko woda i jodyna", ua: "лише вода і йод" } }
        ],
        answer: "a",
        explanation: { pl: "Przepis (kwas nukleinowy) + pudełko (kapsyd).", ua: "Рецепт + коробка (капсид)." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tylko w gospodarzu", ua: "Лише в хазяїні" },
      visual: vizGh("l16-gospodarz.png", {
        alt: { pl: "Wirus wnika do komórki gospodarza", ua: "Вірус входить у клітину хазяїна" },
        title: { pl: "Poza komórką wirus jest nieczynny. Wewnątrz — powstają kopie.", ua: "Поза клітиною вірус нечинний. Усередині — постають копії." },
        prompt: { pl: "Edukacyjny schemat 16:9, trzy kroki z etykietami PL: 1 wirus na zewnątrz komórki — nieczynny; 2 wnika do komórki gospodarza; 3 komórka wytwarza kopie wirusa. Bez krwi, bez grozy, bez twarzy chorych, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Wirus namnaża się tylko w ", em("komórce gospodarza"), " — w komórce, którą „pożycza”."],
          "Poza komórką nie je i nie oddycha. Gdy wnika do komórki, ta wytwarza kopie wirusa według przepisu z kwasu nukleinowego.",
          "Gospodarzem może być komórka człowieka, zwierzęcia, rośliny, a nawet bakterii. Dziś nie katalogujemy wszystkich wirusów — zapamiętaj zasadę."
        ],
        ua: [
          ["Вірус розмножується лише в ", em("клітині хазяїна"), "."],
          "Поза клітиною не їсть і не дихає. Коли входить у клітину, та виробляє копії вірусу.",
          "Хазяїном може бути клітина людини, тварини, рослини чи навіть бактерії."
        ]
      },
      task: {
        id: "l16-e3",
        type: "true-false",
        question: { pl: "Wirus namnaża się tylko wewnątrz komórki gospodarza.", ua: "Вірус розмножується лише всередині клітини хазяїна." },
        answer: true,
        explanation: { pl: "Poza komórką jest nieczynny. Kopie powstają w gospodarzu.", ua: "Поза клітиною нечинний." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Zbyt mali na szkolny mikroskop", ua: "Замалі для шкільного мікроскопа" },
      visual: vizGh("l16-mikroskop.png", {
        alt: { pl: "Porównanie wielkości: bakteria i wirus", ua: "Порівняння розміру: бактерія і вірус" },
        title: { pl: "Wirusy widać pod mikroskopem elektronowym, nie szkolnym.", ua: "Віруси видно під електронним мікроскопом, не шкільним." },
        prompt: { pl: "Edukacyjna infografika 16:9. Skala wielkości: komórka zwierzęca (duża) → bakteria (mała) → wirus (najmniejszy). Etykiety PL: szkolny mikroskop (komórki, bakterie); mikroskop elektronowy (wirusy). Nawiązanie do lekcji 3. Bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wirusy są dużo mniejsze od bakterii. Szkolnym mikroskopem z lekcji 3 ich nie zobaczysz.",
          "Do oglądania wirusów służy ", em("mikroskop elektronowy"), " — ten sam typ, o którym była mowa przy limicie powiększenia.",
          "Dlatego na rysunkach w podręczniku wirus wygląda jak model, a nie jak zdjęcie z Twojej ławki."
        ],
        ua: [
          "Віруси набагато менші за бактерії. Шкільним мікроскопом з уроку 3 їх не побачиш.",
          "Для розгляду вірусів служить ", em("електронний мікроскоп"), ".",
          "Тому на малюнках вірус виглядає як модель, а не як фото з парти."
        ]
      },
      task: {
        id: "l16-e4",
        type: "single-choice",
        question: { pl: "Jakim mikroskopem ogląda się wirusy?", ua: "Яким мікроскопом розглядають віруси?" },
        options: [
          { id: "a", label: { pl: "mikroskopem elektronowym — są za małe na szkolny", ua: "електронним мікроскопом — замалі для шкільного" } },
          { id: "b", label: { pl: "lupa do znaczków", ua: "лупа для марок" } },
          { id: "c", label: { pl: "gołym okiem na liściu", ua: "неозброєним оком на листку" } }
        ],
        answer: "a",
        explanation: { pl: "Mniejsze od bakterii. Lekcja 3: elektronowy, nie szkolny.", ua: "Менші за бактерії. Електронний, не шкільний." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Choroby wirusowe — spokojnie", ua: "Вірусні хвороби — спокійно" },
      visual: vizGh("l16-choroby.png", {
        alt: { pl: "Przykłady chorób wirusowych bez grozy", ua: "Приклади вірусних хвороб без жаху" },
        title: { pl: "Grypa, ospa wietrzna, odra. Nie katalogujemy grozy.", ua: "Грип, вітрянка, кір. Не каталогізуємо жах." },
        prompt: { pl: "Edukacyjna plansza 16:9, trzy spokojne ikony z etykietami PL: grypa (chusteczka, termometr); ospa wietrzna (dziecko w domu, bez wysypki w zbliżeniu); odra (kalendarz szczepień). Nagłówek: choroby wirusowe. Bez krwi, bez HIV, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Niektóre wirusy wywołują choroby. Na klasę 5 zapamiętaj przykłady: ", em("grypa"), ", ", em("ospa wietrzna"), ", ", em("odra"), ".",
          "Nie recytujemy listy grozy i nie straszymy. Ważne: wirusowa choroba to nie to samo co bakteryjna — dlatego leczenie bywa inne (lekcja 18 o antybiotykach).",
          "Jeśli źle się czujesz, mówisz dorosłemu i idziesz do lekarza. To nie jest lekcja diagnostyki."
        ],
        ua: [
          "Деякі віруси викликають хвороби. Для 5 класу: ", em("грип"), ", ", em("вітрянка"), ", ", em("кір"), ".",
          "Не рецитуємо список жаху. Вірусна хвороба ≠ бактеріальна.",
          "Якщо погано — кажи дорослому і йди до лікаря."
        ]
      },
      task: {
        id: "l16-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz choroby wirusowe z tej lekcji.", ua: "Познач вірусні хвороби з цього уроку." },
        options: [
          { id: "a", label: { pl: "grypa", ua: "грип" } },
          { id: "b", label: { pl: "ospa wietrzna", ua: "вітрянка" } },
          { id: "c", label: { pl: "odra", ua: "кір" } },
          { id: "d", label: { pl: "złamanie ręki", ua: "перелом руки" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Grypa, ospa wietrzna, odra — wirusowe. Złamanie nie.", ua: "Грип, вітрянка, кір — вірусні." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Higiena, szczepienia, nie antybiotyki", ua: "Гігієна, щеплення, не антибіотики" },
      visual: vizGh("l16-profilaktyka.png", {
        alt: { pl: "Mycie rąk, szczepienie, przekreślony antybiotyk przy wirusie", ua: "Миття рук, щеплення, перекреслений антибіотик при вірусі" },
        title: { pl: "Antybiotyki leczą bakterie, nie wirusy.", ua: "Антибіотики лікують бактерії, не віруси." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kafelki PL: myj ręce / chusteczka; szczepienia chronią; antybiotyki NIE na wirusy (przekreślone pudełko przy ikonie wirusa, zielone OK przy bakterii). Bez marek leków, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Chronisz się: myjesz ręce, kichasz w chusteczkę albo zgięcie łokcia, zostajesz w domu, gdy jesteś chory.",
          ["", em("Szczepienia"), " uczą organizm rozpoznawać wirusa, zanim zachorujesz ciężko. Decyzje o szczepieniach podejmują dorośli i lekarz — Ty znasz ideę."],
          ["", em("Antybiotyki nie działają na wirusy"), ". Działają na bakterie (lekcja 18). Branie ich „na wszelki wypadek” przy grypie nie pomaga i może zaszkodzić."]
        ],
        ua: [
          "Захищаєшся: миєш руки, чхаєш у хустинку або згин ліктя, лишаєшся вдома, коли хворий.",
          ["", em("Щеплення"), " вчать організм розпізнавати вірус. Рішення — дорослі і лікар."],
          ["", em("Антибіотики не діють на віруси"), ". Діють на бактерії (урок 18)."]
        ]
      },
      task: {
        id: "l16-e6",
        type: "true-false",
        question: { pl: "Antybiotyki nie działają na wirusy.", ua: "Антибіотики не діють на віруси." },
        answer: true,
        explanation: { pl: "Antybiotyki — na bakterie. Na wirusy: higiena i szczepienia, leczenie według lekarza.", ua: "Антибіотики — на бактерії. На віруси — ні." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Komórka?", ua: "Практика. Клітина?" },
      task: {
        id: "l16-p1",
        type: "single-choice",
        question: { pl: "Które zdanie o wirusie jest prawdziwe?", ua: "Яке речення про вірус правдиве?" },
        options: [
          { id: "a", label: { pl: "Nie jest komórką i nie należy do pięciu królestw.", ua: "Не є клітиною і не належить до п’яти царств." } },
          { id: "b", label: { pl: "To szóste królestwo roślin.", ua: "Це шосте царство рослин." } },
          { id: "c", label: { pl: "Ma chloroplasty i ścianę z celulozy.", ua: "Має хлоропласти і стінку з целюлози." } }
        ],
        answer: "a",
        explanation: { pl: "Poza królestwami. Nie komórka.", ua: "Поза царствами. Не клітина." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Budowa", ua: "Будова" },
      task: {
        id: "l16-p2",
        type: "single-choice",
        question: { pl: "Kapsyd to:", ua: "Капсид — це:" },
        options: [
          { id: "a", label: { pl: "osłonka białkowa wirusa", ua: "білкова оболонка вірусу" } },
          { id: "b", label: { pl: "jądro komórkowe rośliny", ua: "клітинне ядро рослини" } },
          { id: "c", label: { pl: "rodzaj porostu", ua: "вид лишайника" } }
        ],
        answer: "a",
        explanation: { pl: "Kapsyd = białkowa osłonka. W środku kwas nukleinowy.", ua: "Капсид = білкова оболонка." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Gospodarz", ua: "Хазяїн" },
      task: {
        id: "l16-p3",
        type: "true-false",
        question: { pl: "Wirus może namnażać się samodzielnie w wodzie bez żadnej komórki.", ua: "Вірус може розмножуватися самостійно у воді без жодної клітини." },
        answer: false,
        explanation: { pl: "Namnaża się tylko w komórce gospodarza.", ua: "Розмножується лише в клітині хазяїна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Choroby", ua: "Хвороби" },
      task: {
        id: "l16-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz przykłady chorób wirusowych.", ua: "Познач приклади вірусних хвороб." },
        options: [
          { id: "a", label: { pl: "grypa", ua: "грип" } },
          { id: "b", label: { pl: "odra", ua: "кір" } },
          { id: "c", label: { pl: "ospa wietrzna", ua: "вітрянка" } },
          { id: "d", label: { pl: "zadrapanie kolana", ua: "подряпина на коліні" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy wirusowe. Zadrapanie — uraz, nie wirus.", ua: "Три вірусні. Подряпина — не вірус." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Antybiotyki", ua: "Антибіотики" },
      task: {
        id: "l16-p5",
        type: "single-choice",
        question: { pl: "Dlaczego przy grypie nie „leczy się antybiotykiem na wszelki wypadek”?", ua: "Чому при грипі не «лікують антибіотиком про всяк випадок»?" },
        options: [
          { id: "a", label: { pl: "bo antybiotyki nie działają na wirusy", ua: "бо антибіотики не діють на віруси" } },
          { id: "b", label: { pl: "bo grypa to złamanie kości", ua: "бо грип — це перелом кістки" } },
          { id: "c", label: { pl: "bo wirusy mają chlorofil", ua: "бо віруси мають хлорофіл" } }
        ],
        answer: "a",
        explanation: { pl: "Antybiotyki — bakterie. Wirusy: higiena, szczepienia, lekarz.", ua: "Антибіотики — бактерії." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Nie komórka", ua: "Перевірка 1. Не клітина" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l16-s1",
        type: "true-false",
        question: { pl: "Wirus nie jest komórką i nie należy do królestw organizmów.", ua: "Вірус не є клітиною і не належить до царств організмів." },
        answer: true,
        explanation: { pl: "Poza pięcioma królestwami.", ua: "Поза п’ятьма царствами." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Budowa", ua: "Перевірка 2. Будова" },
      task: {
        id: "l16-s2",
        type: "single-choice",
        question: { pl: "Dwa główne składniki wirusa to:", ua: "Два головні складники вірусу — це:" },
        options: [
          { id: "a", label: { pl: "kwas nukleinowy i osłonka białkowa (kapsyd)", ua: "нуклеїнова кислота і білкова оболонка (капсид)" } },
          { id: "b", label: { pl: "ściana celulozowa i duża wakuola", ua: "целюлозна стінка і велика вакуоля" } },
          { id: "c", label: { pl: "korzenie i liście", ua: "корені і листки" } }
        ],
        answer: "a",
        explanation: { pl: "Przepis + kapsyd.", ua: "Рецепт + капсид." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Gospodarz", ua: "Перевірка 3. Хазяїн" },
      task: {
        id: "l16-s3",
        type: "single-choice",
        question: { pl: "Gdzie wirus się namnaża?", ua: "Де вірус розмножується?" },
        options: [
          { id: "a", label: { pl: "tylko w komórce gospodarza", ua: "лише в клітині хазяїна" } },
          { id: "b", label: { pl: "samodzielnie w czystej wodzie destylowanej", ua: "самостійно в чистій дистильованій воді" } },
          { id: "c", label: { pl: "w mitochondrium bez komórki", ua: "у мітохондрії без клітини" } }
        ],
        answer: "a",
        explanation: { pl: "Poza komórką nieczynny.", ua: "Поза клітиною нечинний." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Choroby", ua: "Перевірка 4. Хвороби" },
      task: {
        id: "l16-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz choroby wirusowe z lekcji.", ua: "Познач вірусні хвороби з уроку." },
        options: [
          { id: "a", label: { pl: "grypa", ua: "грип" } },
          { id: "b", label: { pl: "ospa wietrzna", ua: "вітрянка" } },
          { id: "c", label: { pl: "odra", ua: "кір" } },
          { id: "d", label: { pl: "złamanie nogi", ua: "перелом ноги" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Grypa, ospa wietrzna, odra.", ua: "Грип, вітрянка, кір." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Antybiotyki", ua: "Перевірка 5. Антибіотики" },
      task: {
        id: "l16-s5",
        type: "true-false",
        question: { pl: "Antybiotyki nie działają na wirusy; pomagają higiena i szczepienia.", ua: "Антибіотики не діють на віруси; допомагають гігієна і щеплення." },
        answer: true,
        explanation: { pl: "Antybiotyki — bakterie (L18). Wirusy: higiena, szczepienia, lekarz.", ua: "Антибіотики — бактерії." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l16-budowa.png", {
        alt: { pl: "Budowa wirusa", ua: "Будова вірусу" },
        title: { pl: "Nie komórka. Przepis + kapsyd. Tylko w gospodarzu.", ua: "Не клітина. Рецепт + капсид. Лише в хазяїні." },
        prompt: { pl: "Ten sam schemat budowy wirusa." }
      }),
      text: {
        pl: [
          "Wirus nie jest komórką i nie należy do królestw.",
          "Składniki: kwas nukleinowy + kapsyd (osłonka białkowa).",
          "Namnaża się tylko w komórce gospodarza. Widać go pod mikroskopem elektronowym.",
          "Przykłady chorób: grypa, ospa wietrzna, odra.",
          "Antybiotyki nie działają na wirusy. Higiena i szczepienia pomagają."
        ],
        ua: [
          "Вірус не є клітиною і не належить до царств.",
          "Складники: нуклеїнова кислота + капсид.",
          "Розмножується лише в клітині хазяїна. Електронний мікроскоп.",
          "Хвороби: грип, вітрянка, кір.",
          "Антибіотики не діють на віруси. Гігієна і щеплення допомагають."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię powiedzieć, że wirus nie jest komórką i nie należy do królestw.", ua: "Можу сказати, що вірус не є клітиною і не належить до царств." },
        { pl: "Potrafię wskazać kwas nukleinowy i kapsyd.", ua: "Можу вказати нуклеїнову кислоту і капсид." },
        { pl: "Potrafię wyjaśnić namnażanie w komórce gospodarza.", ua: "Можу пояснити розмноження в клітині хазяїна." },
        { pl: "Potrafię podać przykłady chorób wirusowych.", ua: "Можу навести приклади вірусних хвороб." },
        { pl: "Potrafię powiedzieć, że antybiotyki nie działają na wirusy.", ua: "Можу сказати, що антибіотики не діють на віруси." }
      ]
    }
  ]
};
