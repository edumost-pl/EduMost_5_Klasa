function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L14_Czynnosci_zyciowe_organizmow/images/";
var BIO_IMG_L01 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L01_Biologia_jako_nauka/images/";

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


function vizL01(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG_L01 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wymienisz siedem czynności życiowych organizmu.", ua: "Назвеш сім життєвих функцій організму." },
        { pl: "Powiesz, jak odżywianie łączy samożywność i cudzożywność.", ua: "Скажеш, як живлення поєднує саможивлення і гетеротрофне живлення." },
        { pl: "Powiesz, jak oddychanie łączy wymianę gazów i mitochondria.", ua: "Скажеш, як дихання поєднує обмін газів і мітохондрії." },
        { pl: "Wyjaśnisz zależność roślin i zwierząt (pokarm i tlen).", ua: "Поясниш залежність рослин і тварин (пожива і кисень)." },
        { pl: "Uzasadnisz, że organizm potrzebuje wszystkich czynności życiowych.", ua: "Обґрунтуєш, що організм потребує всіх життєвих функцій." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "czynności życiowe", ua: "життєві функції" },
        { pl: "odżywianie się", ua: "живлення" },
        { pl: "samożywność", ua: "саможивлення" },
        { pl: "cudzożywność", ua: "гетеротрофне живлення" },
        { pl: "oddychanie", ua: "дихання" },
        { pl: "oddychanie tlenowe", ua: "аеробне дихання" },
        { pl: "wydalanie", ua: "виділення" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Dział II składa się w te siedem punktów z lekcji 1.", ua: "Розділ II складається в ці сім пунктів з уроку 1." },
        prompt: { pl: "Istniejąca infografika lekcji 1: siedem piktogramów z polskimi etykietami czynności życiowych." }
      }),
      text: {
        pl: [
          "Na początku roku poznałeś siedem czynności życiowych. Potem zaglądałeś do komórki, do fotosyntezy i do mitochondrium.",
          "Ta lekcja nic nie dodaje z działu III (wirusy, królestwa). Składa w całość to, co już umiesz — żebyś widział, po co było każde z tych tematów."
        ],
        ua: [
          "На початку року ти пізнав сім життєвих функцій. Потім заглядав у клітину, у фотосинтез і в мітохондрію.",
          "Цей урок нічого не додає з розділу III. Складає докупи те, що вже вмієш."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Siedem czynności — lista", ua: "Сім функцій — список" },
      visual: tree({
        layout: "fork",
        root: { pl: "czynności życiowe", ua: "життєві функції" },
        items: [
          { pl: "odżywianie", ua: "живлення" },
          { pl: "oddychanie", ua: "дихання" },
          { pl: "wydalanie", ua: "виділення" },
          { pl: "ruch", ua: "рух" },
          { pl: "wzrost", ua: "ріст" },
          { pl: "rozmnażanie", ua: "розмноження" },
          { pl: "bodźce", ua: "подразники" }
        ]
      }),
      items: [
        { pl: "odżywianie, oddychanie, wydalanie", ua: "живлення, дихання, виділення" },
        { pl: "ruch, wzrost i rozwój, rozmnażanie, reakcja na bodźce", ua: "рух, ріст і розвиток, розмноження, реакція на подразники" }
      ],
      text: {
        pl: [
          "1. odżywianie się — 2. oddychanie — 3. wydalanie — 4. ruch — 5. wzrost i rozwój — 6. rozmnażanie się — 7. reakcja na bodźce.",
          "Samochód się rusza, ale nie odżywia się jak organizm i nie jest zbudowany z komórek. Ruch nie wystarcza, żeby uznać coś za żywe."
        ],
        ua: [
          "1. живлення — 2. дихання — 3. виділення — 4. рух — 5. ріст і розвиток — 6. розмноження — 7. реакція на подразники.",
          "Автомобіль рухається, але не живиться як організм."
        ]
      },
      task: {
        id: "l14-e1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie czynności życiowe z lekcji 1.", ua: "Познач усі життєві функції з уроку 1." },
        options: [
          { id: "a", label: { pl: "odżywianie się", ua: "живлення" } },
          { id: "b", label: { pl: "oddychanie", ua: "дихання" } },
          { id: "c", label: { pl: "wydalanie", ua: "виділення" } },
          { id: "d", label: { pl: "ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce", ua: "рух, ріст і розвиток, розмноження, реакція на подразники" } },
          { id: "e", label: { pl: "jazda na kołach jak samochód", ua: "їзда на колесах як автомобіль" } }
        ],
        answer: ["a", "b", "c", "d"],
        explanation: { pl: "Siedem czynności. Samochód nie jest organizmem.", ua: "Сім функцій. Автомобіль не є організмом." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Odżywianie się = dwa sposoby", ua: "Живлення = два способи" },
      visual: tree({
        layout: "fork",
        root: { pl: "odżywianie się", ua: "живлення" },
        items: [
          { pl: "samożywność", ua: "саможивлення" },
          { pl: "cudzożywność", ua: "гетеротрофність" }
        ]
      }),
      items: [
        { pl: "samożywność — organizm wytwarza pokarm (fotosynteza)", ua: "саможивлення — організм виробляє поживу (фотосинтез)" },
        { pl: "cudzożywność — gotowy pokarm (zwierzęta, grzyby, saprobionty)", ua: "гетеротрофність — готова пожива" }
      ],
      text: {
        pl: [
          "Odżywianie się znaczy: organizm pobiera lub wytwarza substancje potrzebne do życia.",
          ["", em("Samożywność"), " — sam wytwarza (fotosynteza w chloroplastach)."],
          ["", em("Cudzożywność"), " — bierze gotowy pokarm (diety zwierząt, saprobiont, pasożyt)."],
          "Oba sposoby to odżywianie. Nie są siódmą i ósmą czynnością — to warianty tej samej."
        ],
        ua: [
          "Живлення означає: організм бере або виробляє речовини, потрібні до життя.",
          ["", em("Саможивлення"), " — сам виробляє."],
          ["", em("Гетеротрофне живлення"), " — бере готову поживу."],
          "Обидва способи — живлення."
        ]
      },
      task: {
        id: "l14-e2",
        type: "single-choice",
        question: { pl: "Jak odżywianie łączy samożywność i cudzożywność?", ua: "Як живлення поєднує саможивлення і гетеротрофне живлення?" },
        options: [
          { id: "a", label: { pl: "to dwa sposoby tej samej czynności życiowej: zdobywania substancji odżywczych", ua: "це два способи тієї самої життєвої функції: здобування поживних речовин" } },
          { id: "b", label: { pl: "samożywność to wydalanie, cudzożywność to ruch", ua: "саможивлення — виділення, гетеротрофне — рух" } },
          { id: "c", label: { pl: "żadne nie ma związku z pokarmem", ua: "жоден не має зв’язку з поживою" } }
        ],
        answer: "a",
        explanation: { pl: "Jedna czynność, dwa źródła pokarmu.", ua: "Одна функція, два джерела поживи." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Oddychanie = gazy + energia", ua: "Дихання = гази + енергія" },
      visual: vizGh("l14-oddychanie.png", {
        alt: { pl: "Płuca i mitochondrium jako jedno oddychanie", ua: "Легені і мітохондрія як одне дихання" },
        title: { pl: "Najpierw tlen do organizmu. Potem energia w komórce.", ua: "Спочатку кисень до організму. Потім енергія в клітині." },
        prompt: { pl: "Edukacyjna infografika 16:9. Strzałka 1: tlen z powietrza do organizmu (wymiana gazów). Strzałka 2: cukier + tlen w mitochondrium → energia. Polskie etykiety. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 1 oddychanie było wymianą gazów. To nadal prawda.",
          "Na lekcji 12 dodałeś: w mitochondrium cukier + tlen dają energię (i CO₂ oraz wodę).",
          "Bez wymiany gazów komórka nie dostałaby tlenu. Bez oddychania tlenowego tlen w płucach nic by nie „napędzał”. Oba poziomy należą do oddychania jako czynności życiowej."
        ],
        ua: [
          "На уроці 1 дихання було обміном газів. Це й далі правда.",
          "На уроці 12 ти додав: у мітохондрії цукор + кисень дають енергію.",
          "Обидва рівні належать до дихання як життєвої функції."
        ]
      },
      task: {
        id: "l14-e3",
        type: "true-false",
        question: { pl: "Oddychanie jako czynność życiowa obejmuje wymianę gazów i uwalnianie energii w mitochondriach.", ua: "Дихання як життєва функція охоплює обмін газів і вивільнення енергії в мітохондріях." },
        answer: true,
        explanation: { pl: "Dwa poziomy jednej czynności.", ua: "Два рівні однієї функції." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Rośliny i zwierzęta są zależne", ua: "Рослини і тварини залежні" },
      visual: vizGh("l14-zaleznosc.png", {
        alt: { pl: "Obieg: tlen, dwutlenek węgla, pokarm", ua: "Обіг: кисень, вуглекислий газ, пожива" },
        title: { pl: "Fotosynteza i oddychanie spotykają się w powietrzu i w pokarmie.", ua: "Фотосинтез і дихання зустрічаються в повітрі і в поживі." },
        prompt: { pl: "Edukacyjny schemat 16:9. Roślina i zwierzę. Strzałki PL: tlen z rośliny do zwierzęcia; CO₂ ze zwierzęcia do rośliny; pokarm z rośliny do zwierzęcia. Bez skomplikowanego obiegu węgla, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Roślina: fotosynteza daje cukier i tlen. Sama też oddycha w mitochondriach.",
          "Zwierzę: je gotowy pokarm (często zaczyna się od rośliny) i oddycha tlenem z powietrza — ten tlen w dużej mierze pochodzi z fotosyntezy.",
          "Dwutlenek węgla z oddychania zwierząt (i roślin) może znów wejść do liścia. To nie jest pełny obieg węgla z liceum — na klasę 5 wystarczy: pokarm i tlen łączą rośliny ze zwierzętami."
        ],
        ua: [
          "Рослина дає цукор і кисень. Тварина їсть готову поживу і дихає киснем.",
          "Вуглекислий газ з дихання може знову ввійти в листок.",
          "Для 5 класу досить: пожива і кисень з’єднують рослини зі тваринами."
        ]
      },
      task: {
        id: "l14-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz prawdziwe zależności.", ua: "Познач правдиві залежності." },
        options: [
          { id: "a", label: { pl: "zwierzęta korzystają z tlenu pochodzącego z fotosyntezy", ua: "тварини користуються киснем, що походить із фотосинтезу" } },
          { id: "b", label: { pl: "pokarm wielu zwierząt zaczyna się od samożywnych roślin", ua: "пожива багатьох тварин починається від саможивних рослин" } },
          { id: "c", label: { pl: "rośliny nigdy nie oddychają", ua: "рослини ніколи не дихають" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Rośliny oddychają. Zwierzęta zależą od tlenu i pokarmu z roślin.", ua: "Рослини дихають. Тварини залежать від кисню і поживи рослин." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pozostałe czynności też są potrzebne", ua: "Решта функцій теж потрібні" },
      visual: vizGh("l14-pozostale.png", {
        alt: { pl: "Wydalanie, ruch, wzrost, rozmnażanie, bodźce", ua: "Виділення, рух, ріст, розмноження, подразники" },
        title: { pl: "Nie wystarczy jeść i oddychać.", ua: "Не досить їсти і дихати." },
        prompt: { pl: "Edukacyjna plansza 16:9, pięć ikon z etykietami PL: wydalanie; ruch; wzrost i rozwój; rozmnażanie się; reakcja na bodźce. Bez angielskiego, bez logotypów, bez grozy." }
      }),
      text: {
        pl: [
          ["", em("Wydalanie"), " — usuwanie zbędnych i szkodliwych substancji (np. mocz, pot). Woda w tym pomaga — lekcja 4."],
          "Ruch, wzrost, rozmnażanie, reakcja na bodźce — bez nich organizm nie funkcjonuje jako całość. Dział II ich nie „kasuje”; tylko głębiej wyjaśnia odżywianie i oddychanie.",
          "Komórka jest podstawą (L5–L8): te czynności dzieją się w komórkach albo dzięki współpracy komórek."
        ],
        ua: [
          ["", em("Виділення"), " — видалення зайвих і шкідливих речовин."],
          "Рух, ріст, розмноження, реакція на подразники — без них організм не є цілим.",
          "Клітина є основою: ці функції діються в клітинах або завдяки співпраці клітин."
        ]
      },
      task: {
        id: "l14-e5",
        type: "true-false",
        question: { pl: "Organizm potrzebuje też wydalania, ruchu, wzrostu, rozmnażania i reakcji na bodźce — nie tylko jedzenia i oddychania.", ua: "Організм потребує також виділення, руху, росту, розмноження і реакції на подразники." },
        answer: true,
        explanation: { pl: "Siedem czynności, nie dwie.", ua: "Сім функцій, не дві." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Życie to pakiet, nie jedna sztuczka", ua: "Життя — пакет, не один трюк" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności razem", ua: "Сім функцій разом" },
        title: { pl: "Wszystkie siedem. Potem dział III — inne grupy organizmów.", ua: "Усі сім. Потім розділ III — інші групи організмів." },
        prompt: { pl: "Ta sama infografika siedmiu czynności." }
      }),
      text: {
        pl: [
          "Jeśli zabraknie odżywiania — nie ma paliwa. Jeśli zabraknie oddychania komórkowego — nie ma energii z paliwa. Jeśli zabraknie wydalania — zbędne substancje zostają w organizmie.",
          "Dlatego mówimy o czynnościach życiowych w liczbie mnogiej. Następny dział: wirusy, bakterie, protisty, grzyby — inne ciała, te same pytania o życie."
        ],
        ua: [
          "Якщо бракує живлення — немає палива. Якщо бракує клітинного дихання — немає енергії.",
          "Тому життєві функції в множині. Наступний розділ: віруси, бактерії, протисти, гриби."
        ]
      },
      task: {
        id: "l14-e6",
        type: "single-choice",
        question: { pl: "Dlaczego organizm potrzebuje wszystkich czynności życiowych?", ua: "Чому організм потребує всіх життєвих функцій?" },
        options: [
          { id: "a", label: { pl: "każda z nich jest potrzebna do utrzymania życia; jedna nie zastępuje reszty", ua: "кожна з них потрібна для підтримання життя; одна не замінює решти" } },
          { id: "b", label: { pl: "wystarczy sam ruch, jak w samochodzie", ua: "достатньо самого руху, як в автомобілі" } },
          { id: "c", label: { pl: "wystarczy sama jodyna", ua: "достатньо самого йоду" } }
        ],
        answer: "a",
        explanation: { pl: "Pakiet siedmiu. Samochód się rusza i nie żyje.", ua: "Пакет семи. Автомобіль рухається і не живе." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Siódemka", ua: "Практика. Сімка" },
      task: {
        id: "l14-p1",
        type: "single-choice",
        question: { pl: "Ile czynności życiowych wymieniamy na tej lekcji (z lekcji 1)?", ua: "Скільки життєвих функцій називаємо на цьому уроці (з уроку 1)?" },
        options: [
          { id: "a", label: { pl: "siedem", ua: "сім" } },
          { id: "b", label: { pl: "jedną: tylko fotosyntezę", ua: "одну: лише фотосинтез" } },
          { id: "c", label: { pl: "zero", ua: "нуль" } }
        ],
        answer: "a",
        explanation: { pl: "Odżywianie, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie, reakcja na bodźce.", ua: "Сім пунктів." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Odżywianie", ua: "Живлення" },
      task: {
        id: "l14-p2",
        type: "true-false",
        question: { pl: "Samożywność i cudzożywność to dwa sposoby odżywiania się.", ua: "Саможивлення і гетеротрофне живлення — два способи живлення." },
        answer: true,
        explanation: { pl: "Jedna czynność życiowa, dwa warianty.", ua: "Одна життєва функція, два варіанти." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Oddychanie", ua: "Дихання" },
      task: {
        id: "l14-p3",
        type: "single-choice",
        question: { pl: "Które zdanie łączy poziomy oddychania?", ua: "Яке речення поєднує рівні дихання?" },
        options: [
          { id: "a", label: { pl: "wymiana gazów dostarcza tlen; mitochondria uwalniają z cukru energię", ua: "обмін газів постачає кисень; мітохондрії вивільняють із цукру енергію" } },
          { id: "b", label: { pl: "oddychanie to tylko chlorofil", ua: "дихання — лише хлорофіл" } },
          { id: "c", label: { pl: "mitochondrium służy wyłącznie do szparek w liściu", ua: "мітохондрія служить виключно для продихів у листку" } }
        ],
        answer: "a",
        explanation: { pl: "Gazy + komórka. Chlorofil to fotosynteza.", ua: "Гази + клітина." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zależność", ua: "Залежність" },
      task: {
        id: "l14-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz, czym rośliny i zwierzęta są powiązane.", ua: "Познач, чим рослини і тварини пов’язані." },
        options: [
          { id: "a", label: { pl: "tlen z fotosyntezy", ua: "кисень із фотосинтезу" } },
          { id: "b", label: { pl: "pokarm zaczynający się od roślin", ua: "пожива, що починається від рослин" } },
          { id: "c", label: { pl: "zwierzęta mają chloroplasty w mięśniach", ua: "тварини мають хлоропласти в м’язах" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Tlen i pokarm. Nie chloroplasty w mięśniach.", ua: "Кисень і пожива." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Pakiet", ua: "Пакет" },
      task: {
        id: "l14-p5",
        type: "single-choice",
        question: { pl: "Które uzasadnienie jest poprawne?", ua: "Яке обґрунтування правильне?" },
        options: [
          { id: "a", label: { pl: "wszystkie czynności życiowe są potrzebne; brak jednej zagraża życiu; ruch sam nie wystarcza (samochód)", ua: "усі життєві функції потрібні; брак однієї загрожує життю; самого руху не досить (автомобіль)" } },
          { id: "b", label: { pl: "wystarczy tylko fermentacja drożdży", ua: "достатньо лише бродіння дріжджів" } },
          { id: "c", label: { pl: "wystarczy tylko jodyna", ua: "достатньо лише йоду" } }
        ],
        answer: "a",
        explanation: { pl: "Siódemka jako całość.", ua: "Сімка як ціле." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Siedem czynności", ua: "Перевірка 1. Сім функцій" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l14-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz czynności życiowe.", ua: "Познач життєві функції." },
        options: [
          { id: "a", label: { pl: "odżywianie się, oddychanie, wydalanie", ua: "живлення, дихання, виділення" } },
          { id: "b", label: { pl: "ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce", ua: "рух, ріст і розвиток, розмноження, реакція на подразники" } },
          { id: "c", label: { pl: "posiadanie silnika spalinowego", ua: "наявність двигуна внутрішнього згоряння" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Siedem z lekcji 1. Silnik to nie czynność organizmu.", ua: "Сім з уроку 1." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Odżywianie", ua: "Перевірка 2. Живлення" },
      task: {
        id: "l14-s2",
        type: "single-choice",
        question: { pl: "Jak odżywianie łączy samożywność i cudzożywność?", ua: "Як живлення поєднує саможивлення і гетеротрофне живлення?" },
        options: [
          { id: "a", label: { pl: "to dwa sposoby zdobywania substancji odżywczych — jedna czynność życiowa", ua: "це два способи здобування поживних речовин — одна життєва функція" } },
          { id: "b", label: { pl: "samożywność to mitochondrium, cudzożywność to jodyna", ua: "саможивлення — мітохондрія, гетеротрофне — йод" } },
          { id: "c", label: { pl: "oba znaczą „brak pokarmu”", ua: "обидва означають «відсутність поживи»" } }
        ],
        answer: "a",
        explanation: { pl: "Wytwarzanie vs pobieranie gotowego pokarmu.", ua: "Вироблення vs вбирання готової поживи." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Oddychanie", ua: "Перевірка 3. Дихання" },
      task: {
        id: "l14-s3",
        type: "true-false",
        question: { pl: "Oddychanie łączy wymianę gazów (tlen, CO₂) z oddychaniem tlenowym w mitochondriach (energia z cukru).", ua: "Дихання поєднує обмін газів із аеробним диханням у мітохондріях." },
        answer: true,
        explanation: { pl: "Dwa poziomy z L1 i L12.", ua: "Два рівні з уроків 1 і 12." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Rośliny i zwierzęta", ua: "Перевірка 4. Рослини і тварини" },
      task: {
        id: "l14-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz poprawne zdania o zależności roślin i zwierząt.", ua: "Познач правильні речення про залежність рослин і тварин." },
        options: [
          { id: "a", label: { pl: "tlen z fotosyntezy służy zwierzętom", ua: "кисень із фотосинтезу служить тваринам" } },
          { id: "b", label: { pl: "pokarm wielu zwierząt zaczyna się od roślin", ua: "пожива багатьох тварин починається від рослин" } },
          { id: "c", label: { pl: "rośliny nie mają mitochondriów i nigdy nie oddychają", ua: "рослини не мають мітохондрій і ніколи не дихають" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Rośliny mają mitochondria i oddychają.", ua: "Рослини мають мітохондрії і дихають." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wszystkie czynności", ua: "Перевірка 5. Усі функції" },
      task: {
        id: "l14-s5",
        type: "single-choice",
        question: { pl: "Dlaczego potrzebne są wszystkie czynności życiowe?", ua: "Чому потрібні всі життєві функції?" },
        options: [
          { id: "a", label: { pl: "każda jest niezbędna do życia; jedna nie zastępuje pozostałych; sam ruch (jak w aucie) nie wystarcza", ua: "кожна необхідна для життя; одна не замінює інших; самого руху (як в авто) не досить" } },
          { id: "b", label: { pl: "wystarczy wyłącznie fermentacja w balonie", ua: "достатньо виключно бродіння в кульці" } },
          { id: "c", label: { pl: "wystarczy wyłącznie ściana z chityny", ua: "достатньо виключно стінки з хітину" } }
        ],
        answer: "a",
        explanation: { pl: "Pakiet siedmiu czynności.", ua: "Пакет семи функцій." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Siódemka z działu I + komórka, pokarm i energia z działu II.", ua: "Сімка з розділу I + клітина, пожива і енергія з розділу II." },
        prompt: { pl: "Infografika siedmiu czynności z lekcji 1." }
      }),
      text: {
        pl: [
          "Siedem czynności: odżywianie, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie, reakcja na bodźce.",
          "Odżywianie: samożywność (fotosynteza) albo cudzożywność.",
          "Oddychanie: wymiana gazów + energia w mitochondriach (albo fermentacja bez tlenu).",
          "Rośliny i zwierzęta łączy tlen i pokarm.",
          "Wszystkie czynności są potrzebne — życie to pakiet, nie jedna sztuczka."
        ],
        ua: [
          "Сім функцій: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники.",
          "Живлення: саможивлення або гетеротрофне.",
          "Дихання: обмін газів + енергія в мітохондріях.",
          "Рослини і тварини з’єднує кисень і пожива.",
          "Усі функції потрібні."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wymienić siedem czynności życiowych.", ua: "Можу назвати сім життєвих функцій." },
        { pl: "Potrafię połączyć odżywianie z samożywnością i cudzożywnością.", ua: "Можу поєднати живлення із саможивленням і гетеротрофним живленням." },
        { pl: "Potrafię połączyć oddychanie z gazami i mitochondriami.", ua: "Можу поєднати дихання з газами і мітохондріями." },
        { pl: "Potrafię wyjaśnić zależność roślin i zwierząt.", ua: "Можу пояснити залежність рослин і тварин." },
        { pl: "Potrafię uzasadnić, że potrzebne są wszystkie czynności życiowe.", ua: "Можу обґрунтувати, що потрібні всі життєві функції." }
      ]
    }
  ]
};
