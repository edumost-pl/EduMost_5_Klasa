function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L24_Lisc/images/";

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
        { pl: "Wskażesz blaszkę i ogonek liścia.", ua: "Вкажеш пластинку і черешок листка." },
        { pl: "Odróżnisz liść pojedynczy od złożonego.", ua: "Відрізниш простий листок від складного." },
        { pl: "Porównasz unerwienie siatkowate i równoległe.", ua: "Порівняєш сітчасте і паралельне жилкування." },
        { pl: "Opiszesz warstwy przekroju blaszki.", ua: "Опишеш шари перерізу пластинки." },
        { pl: "Wyjaśnisz trzy funkcje liścia: fotosyntezę, wymianę gazów i transpirację.", ua: "Поясниш три функції листка: фотосинтез, обмін газів і транспірацію." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "blaszka liściowa", ua: "пластинка листка" },
        { pl: "ogonek", ua: "черешок" },
        { pl: "liść pojedynczy", ua: "простий листок" },
        { pl: "liść złożony", ua: "складний листок" },
        { pl: "unerwienie", ua: "жилкування" },
        { pl: "miękisz palisadowy", ua: "палісадна паренхіма" },
        { pl: "miękisz gąbczasty", ua: "губчаста паренхіма" },
        { pl: "transpiracja", ua: "транспірація" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l24-zacznijmy.png", {
        alt: { pl: "Zielone liście na świetle", ua: "Зелені листки на світлі" },
        title: { pl: "Liść to wytwórnia pokarmu. Dziś jego budowa i trzy prace.", ua: "Листок — фабрика поживи. Сьогодні його будова і три роботи." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 liści lipy lub dębu w słońcu. Etykieta PL: liść — wytwórnia pokarmu. Bez kwiatu, owocu, nasion. Bez przekroju jeszcze. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 23 liść wyrastał z węzła pędu. Dziś sam organ: części, unerwienie, warstwy w środku i trzy funkcje.",
          "Równanie fotosyntezy znasz z lekcji 9. Doświadczenia z jodyną nie powtarzamy (lekcja 10). Kwiatu, owocu i nasion tu nie ma."
        ],
        ua: [
          "На уроці 23 листок виростав з вузла пагона. Сьогодні сам орган: частини, жилкування, шари всередині і три функції.",
          "Рівняння фотосинтезу знаєш з уроку 9. Досліду з йодом не повторюємо (урок 10). Квітки, плоду і насінини тут немає."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Blaszka i ogonek", ua: "Пластинка і черешок" },
      visual: vizGh("l24-czesci.png", {
        alt: { pl: "Liść z blaszką, ogonkiem i nasadą", ua: "Листок із пластинкою, черешком і основою" },
        title: { pl: "Blaszka łapie światło. Ogonek łączy liść z łodygą.", ua: "Пластинка ловить світло. Черешок з’єднує листок зі стеблом." },
        prompt: { pl: "Edukacyjny schemat 16:9 liścia. Etykiety PL: blaszka liściowa; ogonek; nasada (przy łodydze). Brzeg blaszki spokojny, bez kwiatu. Bez warstw wewnętrznych na tym kadrze. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Blaszka liściowa"), " to płaska, zwykle zielona część. Ma dużą powierzchnię, więc łapie światło do fotosyntezy."],
          ["", em("Ogonek"), " łączy blaszkę z łodygą. Ustawia blaszkę do słońca. Niektóre liście (np. traw) prawie nie mają ogonka — blaszka siedzi na łodydze."],
          "Nasada to miejsce połączenia z pędem. Liść wyrasta z węzła (lekcja 23). Nie rozbieramy tu pąka ani kwiatu."
        ],
        ua: [
          ["", em("Пластинка листка"), " — плоска, зазвичай зелена частина. Має велику поверхню, тож ловить світло для фотосинтезу."],
          ["", em("Черешок"), " з’єднує пластинку зі стеблом. Наставляє пластинку до сонця. Деякі листки (напр. трав) майже не мають черешка."],
          "Основа — місце з’єднання з пагоном. Листок виростає з вузла (урок 23). Бруньку і квітку тут не розбираємо."
        ]
      },
      task: {
        id: "l24-e1",
        type: "single-choice",
        question: { pl: "Do czego służy blaszka, a do czego ogonek?", ua: "Для чого пластинка, а для чого черешок?" },
        options: [
          { id: "a", label: { pl: "blaszka — powierzchnia do światła; ogonek — łączy liść z łodygą", ua: "пластинка — поверхня до світла; черешок — з’єднує листок зі стеблом" } },
          { id: "b", label: { pl: "ogonek to czepiec korzenia", ua: "черешок — чохлик кореня" } },
          { id: "c", label: { pl: "blaszka to słoje pnia", ua: "пластинка — річні кільця стовбура" } }
        ],
        answer: "a",
        explanation: { pl: "Blaszka łapie światło. Ogonek łączy z pędem. Czepiec i słoje to L22–23.", ua: "Пластинка ловить світло. Черешок з’єднує з пагоном." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Części liścia", ua: "Частини листка" },
      visual: tree({
        layout: "nested",
        root: { pl: "liść", ua: "листок" },
        groups: [
          {
            title: { pl: "blaszka", ua: "пластинка" },
            items: [{ pl: "łapie światło", ua: "ловить світло" }]
          },
          {
            title: { pl: "ogonek", ua: "черешок" },
            items: [{ pl: "łączy z łodygą", ua: "з’єднує зі стеблом" }]
          },
          {
            title: { pl: "nasada", ua: "основа" },
            items: [{ pl: "przy węźle", ua: "біля вузла" }]
          }
        ]
      }),
      items: [
        { pl: "blaszka — płaska, zielona", ua: "пластинка — плоска, зелена" },
        { pl: "ogonek — most do łodygi", ua: "черешок — місток до стебла" },
        { pl: "nasada — przy węźle pędu", ua: "основа — біля вузла пагона" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Pojedynczy i złożony", ua: "Простий і складний" },
      visual: vizGh("l24-pojedynczy-zlozony.png", {
        alt: { pl: "Jedna blaszka obok liścia złożonego z listków", ua: "Одна пластинка поряд зі складним листком із листочків" },
        title: { pl: "Jedna blaszka albo kilka listków na wspólnym ogonku.", ua: "Одна пластинка або кілька листочків на спільному черешку." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: liść dębu / lipy, etykieta PL: liść pojedynczy — jedna blaszka. PRAWA: liść kasztanowca lub robinii, etykieta: liść złożony — listki na wspólnym ogonku. Bez kwiatów. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Liść pojedynczy"), " ma jedną blaszkę. Tak jest u dębu, lipy, jabłoni."],
          ["", em("Liść złożony"), " ma kilka listków na wspólnym ogonku. Tak jest u kasztanowca, robinii, koniczyny."],
          "Listki liścia złożonego to nie osobne liście: razem opadają z jednym ogonkiem. Nie myl listka z całym pędem."
        ],
        ua: [
          ["", em("Простий листок"), " має одну пластинку. Так у дуба, липи, яблуні."],
          ["", em("Складний листок"), " має кілька листочків на спільному черешку. Так у каштана, робінії, конюшини."],
          "Листочки складного листка — не окремі листки: разом опадають з одним черешком. Не плутати листочок із цілим пагоном."
        ]
      },
      task: {
        id: "l24-e2",
        type: "true-false",
        question: { pl: "Liść złożony ma kilka listków na wspólnym ogonku. Liść pojedynczy ma jedną blaszkę.", ua: "Складний листок має кілька листочків на спільному черешку. Простий має одну пластинку." },
        answer: true,
        explanation: { pl: "Jedna blaszka vs listki na jednym ogonku.", ua: "Одна пластинка проти листочків на одному черешку." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa typy liści", ua: "Два типи листків" },
      visual: tree({
        layout: "fork",
        root: { pl: "liście", ua: "листки" },
        items: [
          { pl: "pojedynczy — jedna blaszka", ua: "простий — одна пластинка" },
          { pl: "złożony — listki", ua: "складний — листочки" }
        ]
      }),
      items: [
        { pl: "pojedynczy — np. dąb, lipa", ua: "простий — напр. дуб, липа" },
        { pl: "złożony — np. kasztanowiec, koniczyna", ua: "складний — напр. каштан, конюшина" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Unerwienie", ua: "Жилкування" },
      visual: vizGh("l24-unerwienie.png", {
        alt: { pl: "Siatka nerwów i nerwy równoległe", ua: "Сітка жилок і паралельні жилки" },
        title: { pl: "Nerwy to wiązki. Siatka albo linie obok siebie.", ua: "Жилки — пучки. Сітка або лінії поряд." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: liść lipy, etykieta PL: unerwienie siatkowate. PRAWA: liść trawy / kukurydzy, etykieta: unerwienie równoległe. Napis: nerwy = wiązki przewodzące. Bez nazw okrytonasienne / nagonasienne. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Unerwienie"), " to układ nerwów w blaszce. Nerwy to wiązki przewodzące z lekcji 21 i 23: drewno i łyko w liściu."],
          ["", em("Unerwienie siatkowate"), " wygląda jak siatka. Tak bywa u dębu, lipy, jabłoni."],
          ["", em("Unerwienie równoległe"), " to linie biegnące obok siebie. Tak bywa u traw i kukurydzy."],
          "Grupy roślin poznasz w dziale V. Dziś wystarczy odróżnić siatkę od linii."
        ],
        ua: [
          ["", em("Жилкування"), " — уклад жилок у пластинці. Жилки — провідні пучки з уроків 21 і 23: деревина і луб у листку."],
          ["", em("Сітчасте жилкування"), " виглядає як сітка. Так у дуба, липи, яблуні."],
          ["", em("Паралельне жилкування"), " — лінії поряд. Так у трав і кукурудзи."],
          "Групи рослин пізнаєш у розділі V. Сьогодні досить відрізнити сітку від ліній."
        ]
      },
      task: {
        id: "l24-e3",
        type: "single-choice",
        question: { pl: "Czym unerwienie siatkowate różni się od równoległego?", ua: "Чим сітчасте жилкування відрізняється від паралельного?" },
        options: [
          { id: "a", label: { pl: "siatkowate — siatka (np. lipa); równoległe — linie obok siebie (np. trawa)", ua: "сітчасте — сітка (напр. липа); паралельне — лінії поряд (напр. трава)" } },
          { id: "b", label: { pl: "siatkowate to czepiec, równoległe to słoje", ua: "сітчасте — чохлик, паралельне — кільця" } },
          { id: "c", label: { pl: "oba są tylko w korzeniu", ua: "обидва є лише в корені" } }
        ],
        answer: "a",
        explanation: { pl: "Siatka vs linie. Nerwy = wiązki, nie korzeń.", ua: "Сітка проти ліній. Жилки = пучки, не корінь." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa unerwienia", ua: "Два жилкування" },
      visual: tree({
        layout: "fork",
        root: { pl: "unerwienie", ua: "жилкування" },
        items: [
          { pl: "siatkowate", ua: "сітчасте" },
          { pl: "równoległe", ua: "паралельне" }
        ]
      }),
      items: [
        { pl: "siatkowate — siatka nerwów", ua: "сітчасте — сітка жилок" },
        { pl: "równoległe — linie obok siebie", ua: "паралельне — лінії поряд" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Warstwy blaszki", ua: "Шари пластинки" },
      visual: vizGh("l24-przekroj.png", {
        alt: { pl: "Przekrój liścia: skórka, palisadowy, gąbczasty, szparki", ua: "Переріз листка: шкірка, палісадна, губчаста, продихи" },
        title: { pl: "Góra — palisada przy świetle. Dół — gąbka i szparki.", ua: "Гора — палісада до світла. Низ — губка і продихи." },
        prompt: { pl: "Edukacyjny przekrój 16:9 blaszki. Etykiety PL od góry: skórka górna; miękisz palisadowy (chloroplasty); miękisz gąbczasty (przestrzenie powietrzne); wiązka w nerwie; skórka dolna; szparka. Napis: tkanki z lekcji 21 w organie liść. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na przekroju blaszki widać tkanki z lekcji 21, ułożone warstwami.",
          ["Górna ", em("skórka"), " chroni. Pod nią ", em("miękisz palisadowy"), " — wydłużone komórki pełne chloroplastów, blisko światła."],
          ["Niżej ", em("miękisz gąbczasty"), " — luźniejszy, z przestrzeniami na powietrze. W nerwach biegną wiązki (drewno i łyko)."],
          ["Dolna skórka ma ", em("szparki"), " (lekcje 7 i 21). Tędy gazy i para wodna. Nie myl tych warstw ze słojami pnia ani z walcem korzenia."]
        ],
        ua: [
          "На перерізі пластинки тканини з уроку 21, укладені шарами.",
          ["Верхня ", em("шкірка"), " захищає. Під нею ", em("палісадна паренхіма"), " — видовжені клітини повні хлоропластів, близько до світла."],
          ["Нижче ", em("губчаста паренхіма"), " — рихліша, з просторами на повітря. У жилках ідуть пучки (деревина і луб)."],
          ["Нижня шкірка має ", em("продихи"), " (уроки 7 і 21). Туди гази і водяна пара. Не плутати ці шари з кільцями стовбура і з циліндром кореня."]
        ]
      },
      task: {
        id: "l24-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz warstwy przekroju blaszki.", ua: "Познач шари перерізу пластинки." },
        options: [
          { id: "a", label: { pl: "miękisz palisadowy", ua: "палісадна паренхіма" } },
          { id: "b", label: { pl: "miękisz gąbczasty", ua: "губчаста паренхіма" } },
          { id: "c", label: { pl: "skórka ze szparkami", ua: "шкірка з продихами" } },
          { id: "d", label: { pl: "czepiec korzenia", ua: "чохлик кореня" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Palisada, gąbka, skórka. Czepiec = korzeń (L22).", ua: "Палісада, губка, шкірка. Чохлик = корінь." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od góry na dół", ua: "Згори вниз" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Warstwy liścia od skórki górnej do szparek", ua: "Шари листка від верхньої шкірки до продихів" },
        items: [
          { pl: "skórka górna", ua: "верхня шкірка" },
          { pl: "miękisz palisadowy", ua: "палісадна паренхіма" },
          { pl: "miękisz gąbczasty", ua: "губчаста паренхіма" },
          { pl: "skórka dolna + szparki", ua: "нижня шкірка + продихи" }
        ],
        caption: { pl: "w nerwach: wiązki (drewno i łyko)", ua: "у жилках: пучки (деревина і луб)" }
      }),
      items: [
        { pl: "palisadowy — chloroplasty, światło", ua: "палісадна — хлоропласти, світло" },
        { pl: "gąbczasty — powietrze w przestrzeniach", ua: "губчаста — повітря в просторах" },
        { pl: "szparki — zwykle na spodzie blaszki", ua: "продихи — зазвичай на споді пластинки" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Trzy funkcje liścia", ua: "Три функції листка" },
      visual: vizGh("l24-funkcje.png", {
        alt: { pl: "Fotosynteza, szparki i transpiracja", ua: "Фотосинтез, продихи і транспірація" },
        title: { pl: "Cukier. Gazy. Para wodna.", ua: "Цукор. Гази. Водяна пара." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 słońce + liść: dwutlenek węgla + woda → glukoza + tlen (przypomnienie L9). 2 szparka — wymiana gazów. 3 kropelki / para ze szparki — transpiracja. Bez wzoru chemicznego jako wymagania. Bez jodyny. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Fotosynteza"), " — z lekcji 9: dwutlenek węgla + woda → glukoza + tlen, przy świetle i chlorofilu. Głównie w miękiszu palisadowym."],
          "Szparki wpuszczają dwutlenek węgla i wypuszczają tlen. To wymiana gazów.",
          ["", em("Transpiracja"), " to parowanie wody ze szparek. Dzięki niej woda z korzenia (drewno, lekcja 21–22) jest „ciągniona” w górę, a liść się trochę chłodzi. Za dużo transpiracji w upale suszy roślinę — dlatego szparki potrafią się zamykać."]
        ],
        ua: [
          ["", em("Фотосинтез"), " — з уроку 9: вуглекислий газ + вода → глюкоза + кисень, при світлі і хлорофілі. Здебільшого в палісадній паренхімі."],
          "Продихи впускають вуглекислий газ і випускають кисень. Це обмін газів.",
          ["", em("Транспірація"), " — випаровування води з продихів. Завдяки їй вода з кореня (деревина, уроки 21–22) «тягнеться» вгору, а листок трохи охолоджується. Надто багато транспірації в спеку сушить рослину — тому продихи вміють закриватися."]
        ]
      },
      task: {
        id: "l24-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy funkcje liścia z tej lekcji.", ua: "Познач три функції листка з цього уроку." },
        options: [
          { id: "a", label: { pl: "fotosynteza", ua: "фотосинтез" } },
          { id: "b", label: { pl: "wymiana gazów", ua: "обмін газів" } },
          { id: "c", label: { pl: "transpiracja", ua: "транспірація" } },
          { id: "d", label: { pl: "umocowanie rośliny w glebie", ua: "закріплення рослини в ґрунті" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy prace liścia. Umocowanie = korzeń (L22).", ua: "Три роботи листка. Закріплення = корінь." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Po co liść", ua: "Навіщо листок" },
      visual: tree({
        layout: "fork",
        root: { pl: "liść", ua: "листок" },
        items: [
          { pl: "fotosynteza", ua: "фотосинтез" },
          { pl: "wymiana gazów", ua: "обмін газів" },
          { pl: "transpiracja", ua: "транспірація" }
        ]
      }),
      items: [
        { pl: "fotosynteza — cukier i tlen (L9)", ua: "фотосинтез — цукор і кисень (урок 9)" },
        { pl: "wymiana gazów — szparki", ua: "обмін газів — продихи" },
        { pl: "transpiracja — para wodna, ciąg wody w górę", ua: "транспірація — водяна пара, тяга води вгору" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Części", ua: "Практика. Частини" },
      task: {
        id: "l24-p1",
        type: "single-choice",
        question: { pl: "Blaszka i ogonek to:", ua: "Пластинка і черешок — це:" },
        options: [
          { id: "a", label: { pl: "płaska część do światła i most łączący liść z łodygą", ua: "плоска частина до світла і місток, що з’єднує листок зі стеблом" } },
          { id: "b", label: { pl: "czepiec i włośniki", ua: "чохлик і волоски" } },
          { id: "c", label: { pl: "słoje pnia", ua: "річні кільця стовбура" } }
        ],
        answer: "a",
        explanation: { pl: "Blaszka łapie światło. Ogonek łączy z pędem.", ua: "Пластинка ловить світло. Черешок з’єднує з пагоном." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Pojedynczy czy złożony", ua: "Простий чи складний" },
      task: {
        id: "l24-p2",
        type: "true-false",
        question: { pl: "Kasztanowiec ma liść złożony: kilka listków na wspólnym ogonku. Dąb ma liść pojedynczy.", ua: "Каштан має складний листок: кілька листочків на спільному черешку. Дуб має простий листок." },
        answer: true,
        explanation: { pl: "Jedna blaszka vs listki.", ua: "Одна пластинка проти листочків." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Unerwienie", ua: "Жилкування" },
      task: {
        id: "l24-p3",
        type: "single-choice",
        question: { pl: "Liść trawy ma zwykle:", ua: "Листок трави має зазвичай:" },
        options: [
          { id: "a", label: { pl: "unerwienie równoległe", ua: "паралельне жилкування" } },
          { id: "b", label: { pl: "unerwienie siatkowate jak lipa", ua: "сітчасте жилкування як липа" } },
          { id: "c", label: { pl: "tylko czepiec", ua: "лише чохлик" } }
        ],
        answer: "a",
        explanation: { pl: "Trawy — linie obok siebie. Lipa — siatka.", ua: "Трави — лінії поряд. Липа — сітка." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Przekrój", ua: "Переріз" },
      task: {
        id: "l24-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o przekroju liścia.", ua: "Познач правдиві речення про переріз листка." },
        options: [
          { id: "a", label: { pl: "miękisz palisadowy jest blisko światła i ma dużo chloroplastów", ua: "палісадна паренхіма близько до світла і має багато хлоропластів" } },
          { id: "b", label: { pl: "szparki są zwykle w dolnej skórce", ua: "продихи зазвичай у нижній шкірці" } },
          { id: "c", label: { pl: "miękisz gąbczasty to to samo co słoje pnia", ua: "губчаста паренхіма — те саме, що річні кільця" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Palisada + szparki na spodzie. Słoje = łodyga drzewa (L23).", ua: "Палісада + продихи на споді. Кільця = стебло дерева." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Funkcje", ua: "Функції" },
      task: {
        id: "l24-p5",
        type: "single-choice",
        question: { pl: "Transpiracja to:", ua: "Транспірація — це:" },
        options: [
          { id: "a", label: { pl: "parowanie wody ze szparek (ciąg wody w górę, chłód liścia)", ua: "випаровування води з продихів (тяга води вгору, прохолода листка)" } },
          { id: "b", label: { pl: "to samo co czepiec", ua: "те саме, що чохлик" } },
          { id: "c", label: { pl: "nazwa kapelusza grzyba", ua: "назва шапинки гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Para ze szparek. Nie korzeń i nie grzyb.", ua: "Пара з продихів." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Części", ua: "Перевірка 1. Частини" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l24-s1",
        type: "single-choice",
        question: { pl: "Co wskażesz na liściu jako blaszkę i ogonek?", ua: "Що вкажеш на листку як пластинку і черешок?" },
        options: [
          { id: "a", label: { pl: "blaszka — płaska zielona część; ogonek — łączy ją z łodygą", ua: "пластинка — плоска зелена частина; черешок — з’єднує її зі стеблом" } },
          { id: "b", label: { pl: "blaszka to walec osiowy korzenia", ua: "пластинка — центральний циліндр кореня" } },
          { id: "c", label: { pl: "ogonek to słoje", ua: "черешок — річні кільця" } }
        ],
        answer: "a",
        explanation: { pl: "Dwie główne części liścia.", ua: "Дві головні частини листка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Pojedynczy i złożony", ua: "Перевірка 2. Простий і складний" },
      task: {
        id: "l24-s2",
        type: "true-false",
        question: { pl: "Liść pojedynczy ma jedną blaszkę. Liść złożony ma listki na wspólnym ogonku.", ua: "Простий листок має одну пластинку. Складний має листочки на спільному черешку." },
        answer: true,
        explanation: { pl: "Dąb vs kasztanowiec.", ua: "Дуб проти каштана." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Unerwienie", ua: "Перевірка 3. Жилкування" },
      task: {
        id: "l24-s3",
        type: "single-choice",
        question: { pl: "Jak porównasz dwa unerwienia?", ua: "Як порівняєш два жилкування?" },
        options: [
          { id: "a", label: { pl: "siatkowate — siatka (lipa); równoległe — linie (trawa)", ua: "сітчасте — сітка (липа); паралельне — лінії (трава)" } },
          { id: "b", label: { pl: "oba są tylko w drewnie pnia", ua: "обидва є лише в деревині стовбура" } },
          { id: "c", label: { pl: "równoległe to nazwa szparki", ua: "паралельне — назва продиху" } }
        ],
        answer: "a",
        explanation: { pl: "Siatka vs linie. Nerwy = wiązki w blaszce.", ua: "Сітка проти ліній." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Warstwy", ua: "Перевірка 4. Шари" },
      task: {
        id: "l24-s4",
        type: "single-choice",
        question: { pl: "Kolejność warstw od góry blaszki to:", ua: "Послідовність шарів згори пластинки:" },
        options: [
          { id: "a", label: { pl: "skórka górna → miękisz palisadowy → miękisz gąbczasty → skórka dolna ze szparkami", ua: "верхня шкірка → палісадна паренхіма → губчаста паренхіма → нижня шкірка з продихами" } },
          { id: "b", label: { pl: "czepiec → włośniki → słoje", ua: "чохлик → волоски → кільця" } },
          { id: "c", label: { pl: "kapelusz → blaszki → trzon", ua: "шапинка → пластинки → ніжка" } }
        ],
        answer: "a",
        explanation: { pl: "Od światła do spodu. Nie korzeń, nie pień, nie grzyb.", ua: "Від світла до споду." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Funkcje", ua: "Перевірка 5. Функції" },
      task: {
        id: "l24-s5",
        type: "multiple-choice",
        question: { pl: "Które trzy funkcje ma liść?", ua: "Які три функції має листок?" },
        options: [
          { id: "a", label: { pl: "fotosynteza", ua: "фотосинтез" } },
          { id: "b", label: { pl: "wymiana gazów", ua: "обмін газів" } },
          { id: "c", label: { pl: "transpiracja", ua: "транспірація" } },
          { id: "d", label: { pl: "pobieranie wody włośnikami", ua: "вбирання води волосками" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Cukier, gazy, para. Włośniki = korzeń.", ua: "Цукор, гази, пара. Волоски = корінь." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "liść", ua: "листок" },
        items: [
          { pl: "fotosynteza", ua: "фотосинтез" },
          { pl: "wymiana gazów", ua: "обмін газів" },
          { pl: "transpiracja", ua: "транспірація" }
        ]
      }),
      text: {
        pl: [
          "Blaszka i ogonek.",
          "Pojedynczy vs złożony.",
          "Unerwienie: siatkowate lub równoległe.",
          "Palisadowy, gąbczasty, szparki.",
          "Fotosynteza (L9), gazy, transpiracja.",
          "Kwiat, owoc, nasiono — później. Mchy i dalsze grupy — dział V."
        ],
        ua: [
          "Пластинка і черешок.",
          "Простий проти складного.",
          "Жилкування: сітчасте або паралельне.",
          "Палісадна, губчаста, продихи.",
          "Фотосинтез (урок 9), гази, транспірація.",
          "Квітка, плід, насінина — пізніше. Мохи і дальші групи — розділ V."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać blaszkę i ogonek.", ua: "Можу вказати пластинку і черешок." },
        { pl: "Potrafię odróżnić liść pojedynczy od złożonego.", ua: "Можу відрізнити простий листок від складного." },
        { pl: "Potrafię porównać dwa unerwienia.", ua: "Можу порівняти два жилкування." },
        { pl: "Potrafię opisać warstwy przekroju.", ua: "Можу описати шари перерізу." },
        { pl: "Potrafię wyjaśnić fotosyntezę, wymianę gazów i transpirację.", ua: "Можу пояснити фотосинтез, обмін газів і транспірацію." }
      ]
    }
  ]
};
