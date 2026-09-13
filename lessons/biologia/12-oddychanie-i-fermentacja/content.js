function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L12_Oddychanie_tlenowe_i_fermentacja/images/";

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
        { pl: "Odróżnisz wymianę gazów od oddychania komórkowego.", ua: "Відрізниш обмін газів від клітинного дихання." },
        { pl: "Podasz równanie słowne oddychania tlenowego.", ua: "Назвеш словесне рівняння аеробного дихання." },
        { pl: "Wskażesz mitochondrium jako miejsce uwalniania energii.", ua: "Вкажеш мітохондрію як місце вивільнення енергії." },
        { pl: "Wyjaśnisz, że fermentacja zachodzi bez tlenu.", ua: "Поясниш, що бродіння відбувається без кисню." },
        { pl: "Podasz przykład fermentacji u drożdży i w mięśniach.", ua: "Наведеш приклад бродіння в дріжджів і в м’язах." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "oddychanie tlenowe", ua: "аеробне дихання" },
        { pl: "wymiana gazów", ua: "обмін газів" },
        { pl: "mitochondrium", ua: "мітохондрія" },
        { pl: "energia", ua: "енергія" },
        { pl: "fermentacja", ua: "бродіння" },
        { pl: "drożdże", ua: "дріжджі" },
        { pl: "kwas mlekowy", ua: "молочна кислота" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l12-zacznijmy.png", {
        alt: { pl: "Dziecko biegnie — potrzebuje energii", ua: "Дитина біжить — потребує енергії" },
        title: { pl: "Skąd komórki biorą energię do pracy?", ua: "Звідки клітини беруть енергію до роботи?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Dziecko ok. 11 lat biegnie po boisku szkolnym, twarz nie w zbliżeniu, dzień. Etykieta PL: komórki potrzebują energii. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 1 oddychanie znaczyło: pobieranie tlenu i oddawanie dwutlenku węgla (wymiana gazów).",
          "Dziś schodzimy do komórki. Pokarm (cukier) + tlen dają energię. To dzieje się w mitochondriach — „centrum energetyczne” z lekcji 6."
        ],
        ua: [
          "На уроці 1 дихання означало: вбирання кисню і віддавання вуглекислого газу (обмін газів).",
          "Сьогодні спускаємося до клітини. Пожива (цукор) + кисень дають енергію. Це діється в мітохондріях."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa znaczenia słowa „oddychanie”", ua: "Два значення слова «дихання»" },
      visual: tree({
        layout: "fork",
        root: { pl: "oddychanie", ua: "дихання" },
        items: [
          { pl: "wymiana gazów", ua: "обмін газів" },
          { pl: "oddychanie tlenowe", ua: "аеробне дихання" }
        ]
      }),
      items: [
        { pl: "wymiana gazów — tlen w, CO₂ na zewnątrz (płuca, skrzela, szparki)", ua: "обмін газів — кисень всередину, CO₂ назовні" },
        { pl: "oddychanie tlenowe — cukier + tlen → energia w komórce", ua: "аеробне дихання — цукор + кисень → енергія в клітині" }
      ],
      text: {
        pl: [
          ["", em("Wymiana gazów"), " — organizm pobiera tlen i oddaje dwutlenek węgla. U Ciebie: płuca. U ryb: skrzela. U roślin: szparki w liściu."],
          ["", em("Oddychanie tlenowe"), " (komórkowe) — w komórce z cukru i tlenu uwalniana jest energia. Produkty: dwutlenek węgla i woda."],
          "Wymiana gazów dostarcza tlen do komórek i wynosi CO₂. Sama energia powstaje wewnątrz komórki."
        ],
        ua: [
          ["", em("Обмін газів"), " — організм бере кисень і віддає вуглекислий газ. У тебе: легені."],
          ["", em("Аеробне дихання"), " (клітинне) — у клітині з цукру і кисню вивільняється енергія. Продукти: вуглекислий газ і вода."],
          "Обмін газів постачає кисень до клітин. Сама енергія виникає всередині клітини."
        ]
      },
      task: {
        id: "l12-e1",
        type: "single-choice",
        question: { pl: "Co jest oddychaniem komórkowym (tlenowym)?", ua: "Що є клітинним (аеробним) диханням?" },
        options: [
          { id: "a", label: { pl: "uwalnianie energii z cukru przy udziale tlenu — w komórce", ua: "вивільнення енергії з цукру за участю кисню — у клітині" } },
          { id: "b", label: { pl: "tylko poruszanie klatką piersiową bez żadnej roli cukru", ua: "лише рух грудної клітки без жодної ролі цукру" } },
          { id: "c", label: { pl: "fotosynteza w chloroplastach", ua: "фотосинтез у хлоропластах" } }
        ],
        answer: "a",
        explanation: { pl: "Ruch klatki to mechanizm wymiany gazów. Fotosynteza to odwrotny kierunek związków.", ua: "Рух грудної клітки — механізм обміну газів. Фотосинтез — протилежний напрям." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Równanie słowne oddychania tlenowego", ua: "Словесне рівняння аеробного дихання" },
      visual: vizGh("l12-rownanie.png", {
        alt: { pl: "Glukoza i tlen dają dwutlenek węgla, wodę i energię", ua: "Глюкоза і кисень дають вуглекислий газ, воду і енергію" },
        title: { pl: "Cukier + tlen → dwutlenek węgla + woda + energia.", ua: "Цукор + кисень → вуглекислий газ + вода + енергія." },
        prompt: { pl: "Czysty edukacyjny schemat 16:9. Polskie równanie: glukoza + tlen → dwutlenek węgla + woda + energia. Porównanie małą czcionką: fotosynteza idzie odwrotnie (bez wymagania wzorów). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Równanie słowne, które zapamiętaj:",
          "glukoza + tlen → dwutlenek węgla + woda + energia",
          "To prawie odwrotność fotosyntezy. Fotosynteza składa cukier i tlen. Oddychanie tlenowe rozkłada cukier przy tlenie i uwalnia energię.",
          "Rośliny też oddychają! W nocy nie fotosyntetyzują, a oddychanie komórkowe trwa. W dzień mogą robić oba procesy."
        ],
        ua: [
          "Словесне рівняння:",
          "глюкоза + кисень → вуглекислий газ + вода + енергія",
          "Це майже протилежність фотосинтезу.",
          "Рослини теж дихають! Уночі не фотосинтезують, а клітинне дихання триває."
        ]
      },
      task: {
        id: "l12-e2",
        type: "single-choice",
        question: { pl: "Które równanie jest oddychaniem tlenowym?", ua: "Яке рівняння є аеробним диханням?" },
        options: [
          { id: "a", label: { pl: "glukoza + tlen → dwutlenek węgla + woda + energia", ua: "глюкоза + кисень → вуглекислий газ + вода + енергія" } },
          { id: "b", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "c", label: { pl: "jodyna + skrobia → chlorofil", ua: "йод + крохмаль → хлорофіл" } }
        ],
        answer: "a",
        explanation: { pl: "b to fotosynteza. Nie myl kierunku.", ua: "b — фотосинтез." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Mitochondrium", ua: "Мітохондрія" },
      visual: vizGh("l12-mitochondrium.png", {
        alt: { pl: "Mitochondrium — centrum energetyczne komórki", ua: "Мітохондрія — енергетичний центр клітини" },
        title: { pl: "Tu uwalniana jest energia z cukru przy tlenie.", ua: "Тут вивільняється енергія з цукру при кисні." },
        prompt: { pl: "Edukacyjny schemat 16:9. Owalne mitochondrium z fałdami, etykiety PL: mitochondrium; oddychanie tlenowe; energia. Komórka zwierzęca lub roślinna bez chloroplastu na pierwszym planie. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Oddychanie tlenowe zachodzi w ", em("mitochondriach"), ". Dlatego na lekcji 6 mówiliśmy: mitochondrium to centrum energetyczne komórki."],
          "Komórki zwierzęce, roślinne i grzybowe mają mitochondria. Bakterie — według lekcji 8 — mitochondriów nie mają; uwalniają energię inaczej, w cytozolu. Dziś paszport dotyczy komórek jądrowych i równania z tlenem."
        ],
        ua: [
          ["Аеробне дихання відбувається в ", em("мітохондріях"), "."],
          "Тваринні, рослинні і грибні клітини мають мітохондрії. Бактерії з уроку 8 мітохондрій не мають."
        ]
      },
      task: {
        id: "l12-e3",
        type: "true-false",
        question: { pl: "Oddychanie tlenowe u zwierząt, roślin i grzybów zachodzi w mitochondriach.", ua: "Аеробне дихання в тварин, рослин і грибів відбувається в мітохондріях." },
        answer: true,
        explanation: { pl: "Centrum energetyczne = mitochondrium.", ua: "Енергетичний центр = мітохондрія." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Fermentacja — bez tlenu", ua: "Бродіння — без кисню" },
      visual: tree({
        layout: "fork",
        root: { pl: "energia z cukru", ua: "енергія з цукру" },
        items: [
          { pl: "z tlenem — oddychanie tlenowe", ua: "з киснем — аеробне дихання" },
          { pl: "bez tlenu — fermentacja", ua: "без кисню — бродіння" }
        ]
      }),
      items: [
        { pl: "oddychanie tlenowe — więcej energii, mitochondrium", ua: "аеробне дихання — більше енергії, мітохондрія" },
        { pl: "fermentacja — bez tlenu, mniej energii (drożdże, zmęczone mięśnie)", ua: "бродіння — без кисню, менше енергії" }
      ],
      text: {
        pl: [
          ["", em("Fermentacja"), " to uwalnianie energii z cukru ", em("bez tlenu"), ". Energii jest mniej niż przy oddychaniu tlenowym."],
          "Drożdże (grzyby) przy fermentacji alkoholowej wytwarzają m.in. dwutlenek węgla — ciasto rośnie, a na lekcji 13 zobaczysz balon. Powstaje też alkohol — w szkole nie pijemy produktów fermentacji.",
          "W mięśniach przy bardzo intensywnym wysiłku, gdy tlenu chwilowo brakuje, powstaje ", em("kwas mlekowy"), ". Dlatego mięśnie „pieką”. To fermentacja mlekowa."
        ],
        ua: [
          ["", em("Бродіння"), " — вивільнення енергії з цукру ", em("без кисню"), ". Енергії менше, ніж при аеробному диханні."],
          "Дріжджі при спиртовому бродінні виробляють зокрема вуглекислий газ.",
          "У м’язах при дуже інтенсивному зусиллі виникає ", em("молочна кислота"), "."
        ]
      },
      task: {
        id: "l12-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania o fermentacji.", ua: "Познач усі правдиві речення про бродіння." },
        options: [
          { id: "a", label: { pl: "Zachodzi bez tlenu.", ua: "Відбувається без кисню." } },
          { id: "b", label: { pl: "Daje mniej energii niż oddychanie tlenowe.", ua: "Дає менше енергії, ніж аеробне дихання." } },
          { id: "c", label: { pl: "Drożdże mogą prowadzić fermentację; w mięśniach bywa kwas mlekowy.", ua: "Дріжджі можуть вести бродіння; у м’язах буває молочна кислота." } },
          { id: "d", label: { pl: "Fermentacja to to samo co fotosynteza.", ua: "Бродіння — те саме, що фотосинтез." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Fotosynteza składa cukier przy świetle. Fermentacja rozkłada cukier bez tlenu.", ua: "Фотосинтез складає цукор. Бродіння розкладає цукор без кисню." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Roślina oddycha i fotosyntetyzuje", ua: "Рослина дихає і фотосинтезує" },
      visual: vizGh("l12-roslina.png", {
        alt: { pl: "Liść: w dzień fotosynteza i oddychanie, w nocy głównie oddychanie", ua: "Листок: удень фотосинтез і дихання, уночі здебільшого дихання" },
        title: { pl: "Dwa procesy. Nie wykluczają się.", ua: "Два процеси. Не виключають одне одного." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA dzień: liść, słońce, strzałki fotosyntezy i mniejsza strzałka oddychania. PRAWA noc: tylko oddychanie (CO2 na zewnątrz, O2 do komórki). Polskie etykiety. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Nie mów: „roślina w dzień oddycha tlenem na zewnątrz, a w nocy dwutlenkiem i już”. Upraszczając dla klasy 5:",
          "Fotosynteza (przy świetle) produkuje tlen i cukier. Oddychanie tlenowe w mitochondriach zużywa cukier i tlen przez całą dobę.",
          "W dzień fotosynteza zwykle „przykrywa” oddychanie — netto liść oddaje tlen. W nocy zostaje oddychanie."
        ],
        ua: [
          "Фотосинтез (при світлі) виробляє кисень і цукор. Аеробне дихання в мітохондріях споживає цукор і кисень цілу добу.",
          "Удень фотосинтез зазвичай «перекриває» дихання — листок віддає кисень. Уночі лишається дихання."
        ]
      },
      task: {
        id: "l12-e5",
        type: "true-false",
        question: { pl: "Rośliny też prowadzą oddychanie tlenowe w mitochondriach — nie tylko fotosyntezę.", ua: "Рослини теж ведуть аеробне дихання в мітохондріях — не лише фотосинтез." },
        answer: true,
        explanation: { pl: "Komórka roślinna ma mitochondria i chloroplasty. Dwa procesy.", ua: "Рослинна клітина має мітохондрії і хлоропласти." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Po co to komórce?", ua: "Навіщо це клітині?" },
      visual: vizGh("l12-energia.png", {
        alt: { pl: "Energia do ruchu, wzrostu i ciepła", ua: "Енергія для руху, росту і тепла" },
        title: { pl: "Bez energii nie ma czynności życiowych.", ua: "Без енергії немає життєвих функцій." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy ikony z etykietami PL: ruch; wzrost; ciepło ciała. Źródło: energia z oddychania tlenowego lub fermentacji. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Energia z oddychania (albo fermentacji) służy do ruchu, wzrostu, utrzymania ciepła, pracy narządów.",
          "Na lekcji 14 zbierzemy wszystkie czynności życiowe. Dziś: odżywianie dostarcza cukru, oddychanie komórkowe uwalnia z niego energię."
        ],
        ua: [
          "Енергія з дихання (або бродіння) служить для руху, росту, тепла, роботи органів.",
          "Живлення дає цукор, клітинне дихання вивільняє з нього енергію."
        ]
      },
      task: {
        id: "l12-e6",
        type: "single-choice",
        question: { pl: "Po co komórce oddychanie tlenowe?", ua: "Навіщо клітині аеробне дихання?" },
        options: [
          { id: "a", label: { pl: "żeby uwolnić energię z cukru przy udziale tlenu", ua: "щоб вивільнити енергію з цукру за участю кисню" } },
          { id: "b", label: { pl: "żeby wytworzyć chlorofil z jodyny", ua: "щоб виробити хлорофіл з йоду" } },
          { id: "c", label: { pl: "żeby stać się pasożytem", ua: "щоб стати паразитом" } }
        ],
        answer: "a",
        explanation: { pl: "Energia. Reszta nie jest celem oddychania komórkowego.", ua: "Енергія." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Dwa znaczenia", ua: "Практика. Два значення" },
      task: {
        id: "l12-p1",
        type: "single-choice",
        question: { pl: "Które zdanie jest prawdziwe?", ua: "Яке речення правдиве?" },
        options: [
          { id: "a", label: { pl: "Wymiana gazów dostarcza tlen; oddychanie tlenowe w komórce uwalnia energię z cukru.", ua: "Обмін газів постачає кисень; аеробне дихання в клітині вивільняє енергію з цукру." } },
          { id: "b", label: { pl: "Oddychanie komórkowe to tylko ziewanie.", ua: "Клітинне дихання — лише позіхання." } },
          { id: "c", label: { pl: "Mitochondrium służy wyłącznie do fotosyntezy.", ua: "Мітохондрія служить виключно для фотосинтезу." } }
        ],
        answer: "a",
        explanation: { pl: "Fotosynteza = chloroplast. Energia z cukru = mitochondrium.", ua: "Фотосинтез = хлоропласт." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Równanie", ua: "Рівняння" },
      task: {
        id: "l12-p2",
        type: "true-false",
        question: { pl: "Glukoza + tlen → dwutlenek węgla + woda + energia — to oddychanie tlenowe.", ua: "Глюкоза + кисень → вуглекислий газ + вода + енергія — це аеробне дихання." },
        answer: true,
        explanation: { pl: "Zapamiętaj kierunek: cukier się zużywa, energia się uwalnia.", ua: "Цукор споживається, енергія вивільняється." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Miejsce", ua: "Місце" },
      task: {
        id: "l12-p3",
        type: "single-choice",
        question: { pl: "Gdzie w komórce jądrowej zachodzi oddychanie tlenowe?", ua: "Де в ядерній клітині відбувається аеробне дихання?" },
        options: [
          { id: "a", label: { pl: "w mitochondrium", ua: "у мітохондрії" } },
          { id: "b", label: { pl: "w chloroplaście (to fotosynteza)", ua: "у хлоропласті (це фотосинтез)" } },
          { id: "c", label: { pl: "w ścianie z celulozy", ua: "у стінці з целюлози" } }
        ],
        answer: "a",
        explanation: { pl: "Mitochondrium = energia. Chloroplast = fotosynteza.", ua: "Мітохондрія = енергія." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Fermentacja", ua: "Бродіння" },
      task: {
        id: "l12-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz cechy fermentacji.", ua: "Познач риси бродіння." },
        options: [
          { id: "a", label: { pl: "bez tlenu", ua: "без кисню" } },
          { id: "b", label: { pl: "mniej energii niż przy tlenie", ua: "менше енергії, ніж при кисні" } },
          { id: "c", label: { pl: "drożdże; w mięśniach kwas mlekowy", ua: "дріжджі; у м’язах молочна кислота" } },
          { id: "d", label: { pl: "wymaga chlorofilu i słońca jak liść", ua: "потребує хлорофілу і сонця як листок" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Chlorofil to fotosynteza, nie fermentacja.", ua: "Хлорофіл — фотосинтез, не бродіння." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Roślina", ua: "Рослина" },
      task: {
        id: "l12-p5",
        type: "true-false",
        question: { pl: "Roślina może fotosyntetyzować i jednocześnie jej komórki prowadzą oddychanie tlenowe.", ua: "Рослина може фотосинтезувати і водночас її клітини ведуть аеробне дихання." },
        answer: true,
        explanation: { pl: "Chloroplasty i mitochondria w jednej komórce roślinnej.", ua: "Хлоропласти і мітохондрії в одній рослинній клітині." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Wymiana gazów vs komórka", ua: "Перевірка 1. Обмін газів vs клітина" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l12-s1",
        type: "single-choice",
        question: { pl: "Jak odróżnić wymianę gazów od oddychania komórkowego?", ua: "Як відрізнити обмін газів від клітинного дихання?" },
        options: [
          { id: "a", label: { pl: "wymiana gazów — tlen i CO₂ między organizmem a otoczeniem; komórkowe — energia z cukru i tlenu w komórce", ua: "обмін газів — кисень і CO₂ між організмом і оточенням; клітинне — енергія з цукру і кисню в клітині" } },
          { id: "b", label: { pl: "to zawsze to samo słowo bez różnicy", ua: "це завжди те саме слово без різниці" } },
          { id: "c", label: { pl: "wymiana gazów zachodzi tylko w chloroplastach", ua: "обмін газів відбувається лише в хлоропластах" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa poziomy: organizm ↔ powietrze oraz cukier w mitochondrium.", ua: "Два рівні." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Równanie", ua: "Перевірка 2. Рівняння" },
      task: {
        id: "l12-s2",
        type: "single-choice",
        question: { pl: "Podaj równanie słowne oddychania tlenowego.", ua: "Назви словесне рівняння аеробного дихання." },
        options: [
          { id: "a", label: { pl: "glukoza + tlen → dwutlenek węgla + woda + energia", ua: "глюкоза + кисень → вуглекислий газ + вода + енергія" } },
          { id: "b", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "c", label: { pl: "nić DNA + rzęska → pasożyt", ua: "нитка ДНК + війка → паразит" } }
        ],
        answer: "a",
        explanation: { pl: "b to fotosynteza.", ua: "b — фотосинтез." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Mitochondrium", ua: "Перевірка 3. Мітохондрія" },
      task: {
        id: "l12-s3",
        type: "true-false",
        question: { pl: "Mitochondrium to miejsce oddychania tlenowego — uwalniania energii z cukru przy tlenie.", ua: "Мітохондрія — місце аеробного дихання, вивільнення енергії з цукру при кисні." },
        answer: true,
        explanation: { pl: "Centrum energetyczne komórki.", ua: "Енергетичний центр клітини." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Fermentacja", ua: "Перевірка 4. Бродіння" },
      task: {
        id: "l12-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Fermentacja zachodzi bez tlenu.", ua: "Бродіння відбувається без кисню." } },
          { id: "b", label: { pl: "Daje mniej energii niż oddychanie tlenowe.", ua: "Дає менше енергії, ніж аеробне дихання." } },
          { id: "c", label: { pl: "Fermentacja wymaga pełnego słońca i chlorofilu.", ua: "Бродіння потребує повного сонця і хлорофілу." } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Bez tlenu, mniej energii. Chlorofil nie jest warunkiem fermentacji.", ua: "Без кисню, менше енергії." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Przykłady", ua: "Перевірка 5. Приклади" },
      task: {
        id: "l12-s5",
        type: "single-choice",
        question: { pl: "Które przykłady fermentacji są poprawne?", ua: "Які приклади бродіння правильні?" },
        options: [
          { id: "a", label: { pl: "drożdże (m.in. CO₂, alkohol); mięśnie — kwas mlekowy przy niedoborze tlenu", ua: "дріжджі (зокрема CO₂, спирт); м’язи — молочна кислота при нестачі кисню" } },
          { id: "b", label: { pl: "tylko pelargonia w pełnym słońcu", ua: "лише пеларгонія в повному сонці" } },
          { id: "c", label: { pl: "tylko jodyna na skrobi", ua: "лише йод на крохмалі" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa klasyczne przykłady podręcznikowe.", ua: "Два класичні підручникові приклади." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l12-rownanie.png", {
        alt: { pl: "Równanie oddychania tlenowego", ua: "Рівняння аеробного дихання" },
        title: { pl: "Cukier + tlen → energia. Bez tlenu — fermentacja.", ua: "Цукор + кисень → енергія. Без кисню — бродіння." },
        prompt: { pl: "To samo równanie słowne oddychania tlenowego." }
      }),
      text: {
        pl: [
          "Wymiana gazów ≠ uwalnianie energii w komórce.",
          "Oddychanie tlenowe: glukoza + tlen → CO₂ + woda + energia. Miejsce: mitochondrium.",
          "Rośliny też oddychają.",
          "Fermentacja: bez tlenu, mniej energii. Drożdże; mięśnie — kwas mlekowy."
        ],
        ua: [
          "Обмін газів ≠ вивільнення енергії в клітині.",
          "Аеробне дихання: глюкоза + кисень → CO₂ + вода + енергія. Місце: мітохондрія.",
          "Рослини теж дихають.",
          "Бродіння: без кисню, менше енергії. Дріжджі; м’язи — молочна кислота."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię odróżnić wymianę gazów od oddychania komórkowego.", ua: "Можу відрізнити обмін газів від клітинного дихання." },
        { pl: "Potrafię podać równanie słowne oddychania tlenowego.", ua: "Можу назвати словесне рівняння аеробного дихання." },
        { pl: "Potrafię wskazać mitochondrium.", ua: "Можу вказати мітохондрію." },
        { pl: "Potrafię wyjaśnić fermentację (bez tlenu).", ua: "Можу пояснити бродіння (без кисню)." },
        { pl: "Potrafię podać przykład drożdży i mięśni.", ua: "Можу навести приклад дріжджів і м’язів." }
      ]
    }
  ]
};
