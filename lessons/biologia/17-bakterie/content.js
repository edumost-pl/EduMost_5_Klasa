function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L17_Jak_zyja_bakterie/images/";

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
        { pl: "Przypomnisz, że bakteria to komórka bezjądrowa z nicią DNA.", ua: "Пригадаєш, що бактерія — без’ядерна клітина з ниткою ДНК." },
        { pl: "Rozpoznasz kształty: ziarenkowce, pałeczki, przecinki, krętki.", ua: "Розпізнаєш форми: коки, палички, вібріони, спірили." },
        { pl: "Powiesz krótko, jak bakterie się odżywiają.", ua: "Коротко скажеш, як бактерії живляться." },
        { pl: "Wyjaśnisz, że bakterie rozmnażają się przez podział komórki.", ua: "Поясниш, що бактерії розмножуються поділом клітини." },
        { pl: "Powiesz, do czego służą przetrwalniki, rzęski i otoczka.", ua: "Скажеш, навіщо спори, джгутики і оболонка." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "bakteria", ua: "бактерія" },
        { pl: "nić DNA", ua: "нитка ДНК" },
        { pl: "ziarenkowce", ua: "коки" },
        { pl: "pałeczki", ua: "палички" },
        { pl: "przetrwalniki", ua: "спори (бактерій)" },
        { pl: "rzęska", ua: "джгутик" },
        { pl: "otoczka śluzowa", ua: "слизова оболонка" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l17-zacznijmy.png", {
        alt: { pl: "Bakterie różnych kształtów", ua: "Бактерії різних форм" },
        title: { pl: "Królestwo bakterii. Dziś: jak są zbudowane i jak żyją.", ua: "Царство бактерій. Сьогодні: як збудовані і як живуть." },
        prompt: { pl: "Fotorealistyczny / edukacyjny kadr 16:9: schematyczne bakterie kilku kształtów w cytozolu-tle, nie groza. Etykieta PL: królestwo bakterii. Bez chorób, bez antybiotyków, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Bakterie to jedno z pięciu królestw (lekcja 15). Komórkę bakteryjną już porównywałeś na lekcji 8.",
          "Dziś dokładamy życie bakterii: kształty, odżywianie, podział, przetrwalniki. Znaczenie dla zdrowia i antybiotyki zostawiamy na lekcję 18."
        ],
        ua: [
          "Бактерії — одне з п’яти царств (урок 15). Клітину вже порівнював на уроці 8.",
          "Сьогодні життя бактерій: форми, живлення, поділ, спори. Здоров’я і антибіотики — урок 18."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórka bez jądra", ua: "Клітина без ядра" },
      visual: vizGh("l17-nic-dna.png", {
        alt: { pl: "Bakteria z nicią DNA w cytozolu", ua: "Бактерія з ниткою ДНК у цитозолі" },
        title: { pl: "Brak jądra. Nić DNA pływa w cytozolu.", ua: "Немає ядра. Нитка ДНК плаває в цитозолі." },
        prompt: { pl: "Edukacyjny model 16:9 komórki bakteryjnej z etykietami PL: błona, cytozol, nić DNA (nie jądro), ściana komórkowa, rybosomy. Bez jądra. Nawiązanie do lekcji 8. Bez wirusów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Bakteria to ", em("komórka bezjądrowa"), ". Zamiast jądra w cytozolu leży ", em("nić DNA"), "."],
          "Ma błonę, cytozol i rybosomy — jak inne komórki. Nie ma mitochondriów ani chloroplastów jak w komórce roślinnej z lekcji 7.",
          "Niektóre bakterie potrafią fotosyntetyzować inaczej niż rośliny — na klasę 5: są bakterie samożywne i cudzożywne. Szczegóły chlorofilu roślin zostaw w L9."
        ],
        ua: [
          ["Бактерія — ", em("без’ядерна клітина"), ". Замість ядра в цитозолі ", em("нитка ДНК"), "."],
          "Має мембрану, цитозоль і рибосоми. Немає мітохондрій чи хлоропластів як у рослинній клітині.",
          "Є бактерії саможивні і гетеротрофні."
        ]
      },
      task: {
        id: "l17-e1",
        type: "true-false",
        question: { pl: "Bakteria nie ma jądra — materiał genetyczny to nić DNA w cytozolu.", ua: "Бактерія не має ядра — генетичний матеріал це нитка ДНК у цитозолі." },
        answer: true,
        explanation: { pl: "Komórka bezjądrowa. Lekcja 8.", ua: "Без’ядерна клітина. Урок 8." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Kształty bakterii", ua: "Форми бактерій" },
      visual: tree({
        layout: "fork",
        root: { pl: "kształty bakterii", ua: "форми бактерій" },
        items: [
          { pl: "ziarenkowce", ua: "коки" },
          { pl: "pałeczki", ua: "палички" },
          { pl: "przecinki", ua: "вібріони" },
          { pl: "krętki", ua: "спірили" }
        ]
      }),
      items: [
        { pl: "ziarenkowce — kulki", ua: "коки — кульки" },
        { pl: "pałeczki — walce", ua: "палички — циліндри" },
        { pl: "przecinki — wygięte", ua: "вібріони — зігнуті" },
        { pl: "krętki — spirale", ua: "спірили — спіралі" }
      ],
      text: {
        pl: [
          "Bakterie różnią się kształtem. Zapamiętaj cztery nazwy:",
          ["", em("ziarenkowce"), " — kuliste; ", em("pałeczki"), " — wydłużone; ", em("przecinki"), " — wygięte jak przecinek; ", em("krętki"), " — spiralne."],
          "Kształt pomaga opisywać bakterie. Nie ocena „ładna / brzydka” i nie lista chorób — to lekcja 18."
        ],
        ua: [
          "Бактерії різняться формою. Чотири назви:",
          ["", em("коки"), " — кулясті; ", em("палички"), " — видовжені; ", em("вібріони"), " — зігнуті; ", em("спірили / спірохети"), " — спіральні."],
          "Форма допомагає описувати. Хвороби — урок 18."
        ]
      },
      task: {
        id: "l17-e2",
        type: "single-choice",
        question: { pl: "Jak nazywają się bakterie o kształcie kulek?", ua: "Як називаються бактерії форми кульок?" },
        options: [
          { id: "a", label: { pl: "ziarenkowce", ua: "коки" } },
          { id: "b", label: { pl: "krętki", ua: "спірили" } },
          { id: "c", label: { pl: "porosty", ua: "лишайники" } }
        ],
        answer: "a",
        explanation: { pl: "Ziarenkowce = kuliste. Pałeczki = walce. Przecinki = wygięte. Krętki = spirale.", ua: "Коки = кулясті." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Jak się odżywiają", ua: "Як живляться" },
      visual: tree({
        layout: "fork",
        root: { pl: "bakterie", ua: "бактерії" },
        items: [
          { pl: "samożywne", ua: "саможивні" },
          { pl: "cudzożywne", ua: "гетеротрофні" }
        ]
      }),
      items: [
        { pl: "samożywne — wytwarzają związki organiczne", ua: "саможивні — виробляють органічні сполуки" },
        { pl: "cudzożywne — gotowy pokarm (w tym saprobionty)", ua: "гетеротрофні — готова пожива (зокрема сапробіонти)" }
      ],
      text: {
        pl: [
          "Wśród bakterii są ", em("samożywne"), " (wytwarzają związki organiczne) i ", em("cudzożywne"), " (korzystają z gotowego pokarmu).",
          "Cudzożywne bakterie bywają saprobiontami — rozkładają szczątki. To ważne w glebie i w obiegu materii. Pasożyty bakteryjne i choroby — lekcja 18.",
          "Nie mieszamy tego z fotosyntezą liścia z lekcji 9. Roślina ma chloroplasty. Bakteria ma inny plan komórki."
        ],
        ua: [
          "Серед бактерій є ", em("саможивні"), " і ", em("гетеротрофні"), ".",
          "Гетеротрофні бувають сапробіонтами — розкладають рештки. Паразити і хвороби — урок 18.",
          "Не плутати з фотосинтезом листка з уроку 9."
        ]
      },
      task: {
        id: "l17-e3",
        type: "single-choice",
        question: { pl: "Które zdanie o odżywianiu bakterii jest prawdziwe?", ua: "Яке речення про живлення бактерій правдиве?" },
        options: [
          { id: "a", label: { pl: "są bakterie samożywne i cudzożywne", ua: "є бактерії саможивні і гетеротрофні" } },
          { id: "b", label: { pl: "wszystkie bakterie mają chloroplasty jak liść", ua: "усі бактерії мають хлоропласти як листок" } },
          { id: "c", label: { pl: "bakterie odżywiają się tylko antybiotykami", ua: "бактерії живляться лише антибіотиками" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa sposoby. Chloroplasty liścia to L7/L9, nie plan bakterii.", ua: "Два способи живлення." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Podział komórki", ua: "Поділ клітини" },
      visual: vizGh("l17-podzial.png", {
        alt: { pl: "Bakteria dzieli się na dwie", ua: "Бактерія ділиться на дві" },
        title: { pl: "Jedna komórka → dwie. Szybko, gdy jest ciepło i pokarm.", ua: "Одна клітина → дві. Швидко, коли тепло і є пожива." },
        prompt: { pl: "Edukacyjny schemat 16:9, trzy klatki: jedna pałeczka; przewężenie; dwie pałeczki. Etykiety PL: podział komórki; dwie identyczne bakterie. Bez chorób, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Bakterie rozmnażają się przez ", em("podział komórki"), ": jedna komórka dzieli się na dwie podobne.",
          "Gdy jest ciepło, wilgotno i jest pokarm, podziały idą szybko. Dlatego w ciepłym mleku bakterie mnożą się szybciej niż w lodówce.",
          "To nie kwiat i nasiona z późniejszych lekcji o roślinach. To najprostszy podział komórki."
        ],
        ua: [
          "Бактерії розмножуються ", em("поділом клітини"), ": одна клітина → дві подібні.",
          "Коли тепло, волого і є пожива — поділи швидкі. У теплому молоці швидше, ніж у холодильнику.",
          "Це не квітка і насіння."
        ]
      },
      task: {
        id: "l17-e4",
        type: "true-false",
        question: { pl: "Bakterie rozmnażają się przez podział komórki na dwie.", ua: "Бактерії розмножуються поділом клітини на дві." },
        answer: true,
        explanation: { pl: "Jedna → dwie. Szybciej w cieple i przy pokarmie.", ua: "Одна → дві." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Przetrwalniki", ua: "Спори" },
      visual: vizGh("l17-przetrwalniki.png", {
        alt: { pl: "Przetrwalnik bakterii", ua: "Спора бактерії" },
        title: { pl: "Twarda forma na suszę i brak pokarmu. Potem znów komórka.", ua: "Тверда форма на посуху і брак поживи. Потім знову клітина." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: bakteria w dobrych warunkach. ŚRODEK: przetrwalnik (grubsza ściana), etykieta PL: przetrwalnik — przetrwa suszę / gorąco. PRAWA: znów zwykła komórka, gdy wrócą dobre warunki. Bez chorób, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Niektóre bakterie tworzą ", em("przetrwalniki"), " — formy o grubej ścianie, które znoszą suszę, gorąco albo brak pokarmu."],
          "Gdy warunki wrócą, z przetrwalnika znów powstaje zwykła komórka bakteryjna.",
          "Dlatego samo „przegotowanie na chwilę” nie zawsze niszczy wszystko — stąd pasteryzacja i higiena na lekcji 18. Dziś zapamiętaj: przetrwalnik = przetrwanie."
        ],
        ua: [
          ["Деякі бактерії утворюють ", em("спори"), " — форми з товстою стінкою, що зносять посуху, спеку чи брак поживи."],
          "Коли умови повернуться, знову постає звичайна клітина.",
          "Тому коротке кип’ятіння не завжди все нищить — пастеризація на уроці 18."
        ]
      },
      task: {
        id: "l17-e5",
        type: "single-choice",
        question: { pl: "Do czego służą przetrwalniki bakterii?", ua: "Навіщо спори бактерій?" },
        options: [
          { id: "a", label: { pl: "żeby przetrwać złe warunki (susza, gorąco, brak pokarmu)", ua: "щоб пережити погані умови (посуха, спека, брак поживи)" } },
          { id: "b", label: { pl: "żeby robić chlorofil w liściu dębu", ua: "щоб робити хлорофіл у листку дуба" } },
          { id: "c", label: { pl: "żeby wirus dostał jądro", ua: "щоб вірус дістав ядро" } }
        ],
        answer: "a",
        explanation: { pl: "Forma przetrwalna. Potem znów zwykła komórka.", ua: "Форма виживання." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Rzęski i otoczka", ua: "Джгутики і оболонка" },
      visual: vizGh("l17-rzeski.png", {
        alt: { pl: "Bakteria z rzęską i otoczką śluzową", ua: "Бактерія з джгутиком і слизовою оболонкою" },
        title: { pl: "Rzęska — ruch. Otoczka — ochrona.", ua: "Джгутик — рух. Оболонка — захист." },
        prompt: { pl: "Edukacyjny model 16:9 bakterii z etykietami PL: rzęska (lub kilka) — ruch; otoczka śluzowa — ochrona. Ściana komórkowa osobno. Bez chorób, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Niektóre bakterie mają ", em("rzęski"), " (wici) — dzięki nim poruszają się w wodzie lub śluzie."],
          ["", em("Otoczka śluzowa"), " chroni komórkę i pomaga przyczepiać się do powierzchni."],
          "To dodatki do planu z lekcji 8. Nie wszystkie bakterie mają rzęski. Nie myl rzęski bakterii z rzęskami pantofelka — pantofelek jest protistem (lekcja 19)."
        ],
        ua: [
          ["Деякі бактерії мають ", em("джгутики"), " — завдяки ним рухаються."],
          ["", em("Слизова оболонка"), " захищає клітину і допомагає прикріплятися."],
          "Не всі бактерії мають джгутики. Не плутати з війками інфузорії (урок 19)."
        ]
      },
      task: {
        id: "l17-e6",
        type: "multiple-choice",
        question: { pl: "Zaznacz, do czego służą rzęska i otoczka bakterii.", ua: "Познач, навіщо джгутик і оболонка бактерії." },
        options: [
          { id: "a", label: { pl: "rzęska — do ruchu", ua: "джгутик — для руху" } },
          { id: "b", label: { pl: "otoczka śluzowa — do ochrony i przyczepiania", ua: "слизова оболонка — для захисту і прикріплення" } },
          { id: "c", label: { pl: "otoczka — do fotosyntezy liścia", ua: "оболонка — для фотосинтезу листка" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Rzęska = ruch. Otoczka = ochrona / przyczepianie. Fotosynteza liścia to L9.", ua: "Джгутик = рух. Оболонка = захист." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. DNA", ua: "Практика. ДНК" },
      task: {
        id: "l17-p1",
        type: "single-choice",
        question: { pl: "Gdzie u bakterii jest materiał genetyczny?", ua: "Де в бактерії генетичний матеріал?" },
        options: [
          { id: "a", label: { pl: "nić DNA w cytozolu — nie ma jądra", ua: "нитка ДНК у цитозолі — немає ядра" } },
          { id: "b", label: { pl: "w chloroplastach dębu", ua: "у хлоропластах дуба" } },
          { id: "c", label: { pl: "tylko w kapsydzie wirusa", ua: "лише в капсиді вірусу" } }
        ],
        answer: "a",
        explanation: { pl: "Komórka bezjądrowa.", ua: "Без’ядерна клітина." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Kształty", ua: "Форми" },
      task: {
        id: "l17-p2",
        type: "single-choice",
        question: { pl: "Pałeczki to bakterie o kształcie:", ua: "Палички — бактерії форми:" },
        options: [
          { id: "a", label: { pl: "wydłużonym (walcowatym)", ua: "видовженій (циліндричній)" } },
          { id: "b", label: { pl: "wyłącznie kapelusza grzyba", ua: "виключно шапинки гриба" } },
          { id: "c", label: { pl: "kwadratu", ua: "квадрата" } }
        ],
        answer: "a",
        explanation: { pl: "Pałeczki = wydłużone. Ziarenkowce = kulki. Krętki = spirale.", ua: "Палички = видовжені." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Odżywianie", ua: "Живлення" },
      task: {
        id: "l17-p3",
        type: "true-false",
        question: { pl: "Wśród bakterii są zarówno samożywne, jak i cudzożywne.", ua: "Серед бактерій є і саможивні, і гетеротрофні." },
        answer: true,
        explanation: { pl: "Nie wszystkie bakterie „jedzą gotowe”. Nie wszystkie fotosyntetyzują jak liść.", ua: "Не всі однакові." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Podział", ua: "Поділ" },
      task: {
        id: "l17-p4",
        type: "single-choice",
        question: { pl: "Jak bakterie się rozmnażają?", ua: "Як бактерії розмножуються?" },
        options: [
          { id: "a", label: { pl: "przez podział komórki na dwie", ua: "поділом клітини на дві" } },
          { id: "b", label: { pl: "przez kwiaty i nasiona", ua: "квітами і насінням" } },
          { id: "c", label: { pl: "tylko jako wirus w kapsydzie", ua: "лише як вірус у капсиді" } }
        ],
        answer: "a",
        explanation: { pl: "Jedna komórka → dwie.", ua: "Одна клітина → дві." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Przetrwalniki i rzęski", ua: "Спори і джгутики" },
      task: {
        id: "l17-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "Przetrwalniki pomagają przetrwać złe warunki.", ua: "Спори допомагають пережити погані умови." } },
          { id: "b", label: { pl: "Rzęski służą do ruchu.", ua: "Джгутики служать для руху." } },
          { id: "c", label: { pl: "Otoczka śluzowa to to samo co chloroplast.", ua: "Слизова оболонка — те саме, що хлоропласт." } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Przetrwalnik = przetrwanie. Rzęska = ruch. Otoczka ≠ chloroplast.", ua: "Спора = виживання. Джгутик = рух." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Bezjądrowa", ua: "Перевірка 1. Без’ядерна" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l17-s1",
        type: "true-false",
        question: { pl: "Bakteria to komórka bezjądrowa z nicią DNA w cytozolu.", ua: "Бактерія — без’ядерна клітина з ниткою ДНК у цитозолі." },
        answer: true,
        explanation: { pl: "Lekcja 8 + 17.", ua: "Урок 8 + 17." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Kształty", ua: "Перевірка 2. Форми" },
      task: {
        id: "l17-s2",
        type: "single-choice",
        question: { pl: "Który zestaw kształtów bakterii jest poprawny?", ua: "Який набір форм бактерій правильний?" },
        options: [
          { id: "a", label: { pl: "ziarenkowce, pałeczki, przecinki, krętki", ua: "коки, палички, вібріони, спірили" } },
          { id: "b", label: { pl: "kapelusz, trzon, blaszki", ua: "шапинка, ніжка, пластинки" } },
          { id: "c", label: { pl: "okular, obiektyw, tubus", ua: "окуляр, об’єктив, тубус" } }
        ],
        answer: "a",
        explanation: { pl: "Kulka, pałeczka, przecinek, spirala.", ua: "Кулька, паличка, кома, спіраль." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Odżywianie", ua: "Перевірка 3. Живлення" },
      task: {
        id: "l17-s3",
        type: "single-choice",
        question: { pl: "Jak bakterie się odżywiają?", ua: "Як бактерії живляться?" },
        options: [
          { id: "a", label: { pl: "są wśród nich samożywne i cudzożywne", ua: "серед них є саможивні і гетеротрофні" } },
          { id: "b", label: { pl: "wszystkie jedzą wyłącznie liście dębu", ua: "усі їдять виключно листки дуба" } },
          { id: "c", label: { pl: "nie odżywiają się, bo to wirusy", ua: "не живляться, бо це віруси" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa sposoby. Bakteria ≠ wirus.", ua: "Два способи. Бактерія ≠ вірус." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Podział", ua: "Перевірка 4. Поділ" },
      task: {
        id: "l17-s4",
        type: "single-choice",
        question: { pl: "Jak bakterie się rozmnażają?", ua: "Як бактерії розмножуються?" },
        options: [
          { id: "a", label: { pl: "przez podział komórki", ua: "поділом клітини" } },
          { id: "b", label: { pl: "przez namnażanie wyłącznie w kapsydzie", ua: "розмноженням виключно в капсиді" } },
          { id: "c", label: { pl: "przez nasiona w owocu", ua: "насінням у плоді" } }
        ],
        answer: "a",
        explanation: { pl: "Jedna komórka → dwie.", ua: "Одна клітина → дві." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Przetrwalniki i rzęski", ua: "Перевірка 5. Спори і джгутики" },
      task: {
        id: "l17-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz poprawne funkcje.", ua: "Познач правильні функції." },
        options: [
          { id: "a", label: { pl: "przetrwalniki — przetrwanie złych warunków", ua: "спори — пережиття поганих умов" } },
          { id: "b", label: { pl: "rzęski — ruch", ua: "джгутики — рух" } },
          { id: "c", label: { pl: "otoczka śluzowa — ochrona", ua: "слизова оболонка — захист" } },
          { id: "d", label: { pl: "przetrwalniki — to samo co chlorofil", ua: "спори — те саме, що хлорофіл" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Przetrwanie, ruch, ochrona. Nie chlorofil.", ua: "Виживання, рух, захист." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l17-ksztalty.png", {
        alt: { pl: "Kształty bakterii", ua: "Форми бактерій" },
        title: { pl: "Bez jądra. Kształty. Podział. Przetrwalniki.", ua: "Без ядра. Форми. Поділ. Спори." },
        prompt: { pl: "Ta sama plansza kształtów." }
      }),
      text: {
        pl: [
          "Bakteria: komórka bezjądrowa, nić DNA w cytozolu.",
          "Kształty: ziarenkowce, pałeczki, przecinki, krętki.",
          "Odżywianie: samożywne albo cudzożywne.",
          "Rozmnażanie: podział komórki. Przetrwalniki = złe warunki.",
          "Rzęski = ruch. Otoczka = ochrona. Zdrowie i antybiotyki — lekcja 18."
        ],
        ua: [
          "Бактерія: без’ядерна клітина, нитка ДНК у цитозолі.",
          "Форми: коки, палички, вібріони, спірили.",
          "Живлення: саможивні або гетеротрофні.",
          "Розмноження: поділ. Спори = погані умови.",
          "Джгутики = рух. Оболонка = захист. Здоров’я — урок 18."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię przypomnieć komórkę bezjądrową z nicią DNA.", ua: "Можу пригадати без’ядерну клітину з ниткою ДНК." },
        { pl: "Potrafię rozpoznać kształty bakterii.", ua: "Можу розпізнати форми бактерій." },
        { pl: "Potrafię krótko powiedzieć o odżywianiu bakterii.", ua: "Можу коротко сказати про живлення бактерій." },
        { pl: "Potrafię wyjaśnić podział komórki.", ua: "Можу пояснити поділ клітини." },
        { pl: "Potrafię powiedzieć o przetrwalnikach, rzęskach i otoczce.", ua: "Можу сказати про спори, джгутики і оболонку." }
      ]
    }
  ]
};
