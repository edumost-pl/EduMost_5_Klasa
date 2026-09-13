function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L05_Hierarchiczna_budowa_organizmow/images/";

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
        { pl: "Wyjaśnisz, dlaczego komórka jest podstawową jednostką życia.", ua: "Поясниш, чому клітина є основною одиницею життя." },
        { pl: "Odróżnisz organizmy jednokomórkowe od wielokomórkowych.", ua: "Відрізниш одноклітинні організми від багатоклітинних." },
        { pl: "Podasz przykład bardzo małej i bardzo dużej komórki.", ua: "Наведеш приклад дуже малої і дуже великої клітини." },
        { pl: "Uporządkujesz poziomy budowy organizmu wielokomórkowego i podasz przykłady.", ua: "Упорядкуєш рівні будови багатоклітинного організму і наведеш приклади." },
        { pl: "Wyjaśnisz, że kształt komórki zwierzęcej zależy od jej funkcji.", ua: "Поясниш, що форма тваринної клітини залежить від її функції." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "komórka", ua: "клітина" },
        { pl: "organizm jednokomórkowy", ua: "одноклітинний організм" },
        { pl: "organizm wielokomórkowy", ua: "багатоклітинний організм" },
        { pl: "tkanka", ua: "тканина" },
        { pl: "narząd", ua: "орган" },
        { pl: "układ narządów", ua: "система органів" },
        { pl: "funkcja komórki", ua: "функція клітини" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l05-zacznijmy.png", {
        alt: { pl: "Jajo strusia obok jaja kury", ua: "Яйце страуса поруч із яйцем курки" },
        title: { pl: "Czy komórka może być tak duża jak to jajo?", ua: "Чи може клітина бути такою великою, як це яйце?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Dwie dłonie dorosłego trzymają duże białe jajo strusia obok dużo mniejszego brązowego jaja kury. Jasne tło, bez twarzy, bez angielskiego, bez logotypów. Etykiety PL: jajo strusia ≈ 15 cm; jajo kury." }
      }),
      text: {
        pl: [
          "Większość komórek jest tak mała, że na kropce na końcu zdania zmieściłoby się ich nawet około 500.",
          "A jednak wewnątrz jaja strusia jest komórka jajowa — największa znana komórka zwierzęca. Na tej lekcji zobaczysz, że komórki różnią się wielkością i kształtem, ale wszystkie są podstawą życia."
        ],
        ua: [
          "Більшість клітин такі малі, що на крапці в кінці речення вмістилося б навіть близько 500.",
          "А всередині яйця страуса є яйцеклітина — найбільша відома тваринна клітина. На цьому уроці побачиш, що клітини різняться розміром і формою, але всі є основою життя."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórka — podstawowa jednostka życia", ua: "Клітина — основна одиниця життя" },
      visual: vizGh("l05-jednostka.png", {
        alt: { pl: "Jedna komórka jako najmniejsza żywa część organizmu", ua: "Одна клітина як найменша жива частина організму" },
        title: { pl: "Najmniejsza część, która sama wykonuje czynności życiowe.", ua: "Найменша частина, яка сама виконує життєві функції." },
        prompt: { pl: "Edukacyjna infografika 16:9 dla klasy 5. Po lewej jedna prosta komórka zwierzęca bez nazw organelli (tylko obrys i jądro jako plamka). Po prawej strzałki do ikon: odżywianie, oddychanie, wzrost. Duży polski napis: komórka — podstawowa jednostka życia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wszystkie organizmy są zbudowane z komórek. ", em("Komórka"), " to najmniejsza część organizmu, która potrafi wykonywać czynności życiowe.",
          "Mimo że jest malutka, w środku dzieje się życie: komórka pobiera substancje, oddycha, rośnie. Budowy wnętrza komórki nauczysz się na następnej lekcji.",
          "Dlatego mówimy: komórka to ", em("podstawowa jednostka życia"), "."
        ],
        ua: [
          "Усі організми побудовані з клітин. ", em("Клітина"), " — найменша частина організму, яка вміє виконувати життєві функції.",
          "Хоч вона крихітна, всередині відбувається життя: клітина бере речовини, дихає, росте. Будову середини клітини вивчиш на наступному уроці.",
          "Тому кажемо: клітина — ", em("основна одиниця життя"), "."
        ]
      },
      task: {
        id: "l05-e1",
        type: "single-choice",
        question: { pl: "Dlaczego komórka jest podstawową jednostką życia?", ua: "Чому клітина є основною одиницею життя?" },
        options: [
          { id: "a", label: { pl: "bo to najmniejsza część organizmu zdolna do czynności życiowych", ua: "бо це найменша частина організму, здатна до життєвих функцій" } },
          { id: "b", label: { pl: "bo komórka to to samo co cały narząd", ua: "бо клітина — те саме, що цілий орган" } },
          { id: "c", label: { pl: "bo komórki nie rosną i nie oddychają", ua: "бо клітини не ростуть і не дихають" } }
        ],
        answer: "a",
        explanation: { pl: "Komórka jest najmniejsza, a mimo to wykonuje czynności życiowe. Narząd składa się z wielu komórek.", ua: "Клітина найменша, але виконує життєві функції. Орган складається з багатьох клітин." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Jedna komórka albo wiele", ua: "Одна клітина або багато" },
      visual: tree({
        layout: "fork",
        root: { pl: "organizmy", ua: "організми" },
        items: [
          { pl: "jednokomórkowe", ua: "одноклітинні" },
          { pl: "wielokomórkowe", ua: "багатоклітинні" }
        ]
      }),
      items: [
        { pl: "jednokomórkowe — całe ciało to jedna komórka (bakterie)", ua: "одноклітинні — усе тіло це одна клітина (бактерії)" },
        { pl: "wielokomórkowe — bardzo wiele komórek (zwierzęta, rośliny, grzyby)", ua: "багатоклітинні — дуже багато клітин (тварини, рослини, гриби)" }
      ],
      text: {
        pl: [
          ["", em("Organizm jednokomórkowy"), " składa się z jednej komórki. Ta jedna komórka jest całym organizmem. Przykład: bakterie."],
          ["", em("Organizm wielokomórkowy"), " składa się z bardzo wielu komórek. Tak zbudowane są zwierzęta, a także rośliny i grzyby."],
          "Jednokomórkowy nie znaczy „prostszy i nieważny”. Jedna komórka bakterii też wykonuje czynności życiowe. Wielokomórkowy znaczy: komórki współpracują."
        ],
        ua: [
          ["", em("Одноклітинний організм"), " складається з однієї клітини. Ця одна клітина є цілим організмом. Приклад: бактерії."],
          ["", em("Багатоклітинний організм"), " складається з дуже багатьох клітин. Так побудовані тварини, а також рослини і гриби."],
          "Одноклітинний не означає «простіший і неважливий». Одна клітина бактерії теж виконує життєві функції. Багатоклітинний означає: клітини співпрацюють."
        ]
      },
      task: {
        id: "l05-e2",
        type: "true-false",
        question: { pl: "Bakteria to organizm jednokomórkowy, a pies — wielokomórkowy.", ua: "Бактерія — одноклітинний організм, а пес — багатоклітинний." },
        answer: true,
        explanation: { pl: "Tak. Bakteria = jedna komórka. Pies, drzewo, grzyb — wiele komórek.", ua: "Так. Бактерія = одна клітина. Пес, дерево, гриб — багато клітин." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórki bywają malutkie i ogromne", ua: "Клітини бувають крихітні і величезні" },
      visual: vizGh("l05-wielkosc.png", {
        alt: { pl: "Porównanie wielkości: bakterie i komórka jajowa strusia", ua: "Порівняння розміру: бактерії і яйцеклітина страуса" },
        title: { pl: "Najmniejsze — bakterie. Największa zwierzęca — w jaju strusia.", ua: "Найменші — бактерії. Найбільша тваринна — в яйці страуса." },
        prompt: { pl: "Edukacyjna infografika 16:9. Po lewej skupisko bardzo drobnych bakterii z etykietą PL: bakterie — najmniejsze komórki. Po prawej jajo strusia z etykietą: komórka jajowa strusia — największa znana komórka zwierzęca, jajo ok. 15 cm, około 3 razy większe niż jajo kury. Bez organelli, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Komórki różnią się wielkością, kształtem i budową.",
          "Do najmniejszych należą komórki bakterii. Żeby je dobrze zobaczyć, często potrzebny jest bardzo mocny mikroskop.",
          "Do największych komórek zwierzęcych należy komórka jajowa w jaju strusia. Same jajo ma około 15 cm długości i jest około trzech razy większe niż jajo kury."
        ],
        ua: [
          "Клітини різняться розміром, формою і будовою.",
          "До найменших належать клітини бактерій. Щоб їх добре побачити, часто потрібен дуже сильний мікроскоп.",
          "До найбільших тваринних клітин належить яйцеклітина в яйці страуса. Саме яйце має близько 15 см довжини і приблизно втричі більше за яйце курки."
        ]
      },
      task: {
        id: "l05-e3",
        type: "single-choice",
        question: { pl: "Które porównanie wielkości komórek jest poprawne?", ua: "Яке порівняння розміру клітин правильне?" },
        options: [
          { id: "a", label: { pl: "bakterie — zwykle najmniejsze; komórka jajowa strusia — największa znana komórka zwierzęca", ua: "бактерії — зазвичай найменші; яйцеклітина страуса — найбільша відома тваринна клітина" } },
          { id: "b", label: { pl: "wszystkie komórki mają identyczny rozmiar kropki", ua: "усі клітини мають однаковий розмір крапки" } },
          { id: "c", label: { pl: "jajo kury jest większe niż jajo strusia", ua: "яйце курки більше за яйце страуса" } }
        ],
        answer: "a",
        explanation: { pl: "Bakterie są drobne. Jajo strusia jest większe niż kury; w środku jest ogromna komórka jajowa.", ua: "Бактерії дрібні. Яйце страуса більше за куряче; всередині величезна яйцеклітина." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od komórki do organizmu", ua: "Від клітини до організму" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Poziomy budowy: komórka do organizmu", ua: "Рівні будови: клітина до організму" },
        items: [
          { pl: "komórka", ua: "клітина" },
          { pl: "tkanka", ua: "тканина" },
          { pl: "narząd", ua: "орган" },
          { pl: "układ narządów", ua: "система органів" },
          { pl: "organizm", ua: "організм" }
        ]
      }),
      items: [
        { pl: "komórka nerwowa → tkanka nerwowa", ua: "нервова клітина → нервова тканина" },
        { pl: "mózgowie → układ nerwowy → organizm", ua: "головний мозок → нервова система → організм" }
      ],
      text: {
        pl: [
          "W lekcji 1 poznałeś kolejność poziomów. Teraz dopiszemy przykłady.",
          ["", em("Komórka"), " — np. komórka nerwowa."],
          ["", em("Tkanka"), " — zespół podobnych komórek o wspólnej funkcji, np. tkanka nerwowa."],
          ["", em("Narząd"), " — część z tkanek, np. mózgowie. U roślin organem jest liść."],
          ["", em("Układ narządów"), " — kilka narządów współpracuje, np. układ nerwowy."],
          ["", em("Organizm"), " — całość, np. człowiek."],
          "Kolejność: komórka → tkanka → narząd → układ narządów → organizm."
        ],
        ua: [
          "На уроці 1 ти пізнав послідовність рівнів. Тепер допишемо приклади.",
          ["", em("Клітина"), " — напр. нервова клітина."],
          ["", em("Тканина"), " — група подібних клітин зі спільною функцією, напр. нервова тканина."],
          ["", em("Орган"), " — частина з тканин, напр. головний мозок. У рослин органом є листок."],
          ["", em("Система органів"), " — кілька органів співпрацюють, напр. нервова система."],
          ["", em("Організм"), " — ціле, напр. людина."],
          "Послідовність: клітина → тканина → орган → система органів → організм."
        ]
      },
      task: {
        id: "l05-e4",
        type: "single-choice",
        question: { pl: "Który zestaw przykładów jest ułożony od komórki do organizmu?", ua: "Який набір прикладів укладено від клітини до організму?" },
        options: [
          { id: "a", label: { pl: "komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm", ua: "нервова клітина → нервова тканина → головний мозок → нервова система → організм" } },
          { id: "b", label: { pl: "organizm → komórka → tkanka → bakteria", ua: "організм → клітина → тканина → бактерія" } },
          { id: "c", label: { pl: "układ narządów → komórka → tkanka", ua: "система органів → клітина → тканина" } }
        ],
        answer: "a",
        explanation: { pl: "Od najmniejszej części do całości: komórka, tkanka, narząd, układ, organizm.", ua: "Від найменшої частини до цілого: клітина, тканина, орган, система, організм." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Kształt komórki zależy od funkcji", ua: "Форма клітини залежить від функції" },
      visual: vizGh("l05-ksztalty.png", {
        alt: { pl: "Cztery kształty komórek zwierzęcych", ua: "Чотири форми тваринних клітин" },
        title: { pl: "Inna praca — inny kształt.", ua: "Інша робота — інша форма." },
        prompt: { pl: "Edukacyjna plansza 16:9, cztery równe kadry, polskie etykiety, schematy komórek (nie zdjęcia anatomiczne). 1 plemnik — główka i długa wić, podpis: wić do ruchu. 2 komórka jajowa — duża kula, zapas substancji odżywczych. 3 komórka nerwowa — ciało i długie wypustki, przekazywanie informacji. 4 komórka nabłonka — kształt kostki, szczelna warstwa ochronna. Jasne tło, bez angielskiego, bez logotypów, bez nagości." }
      }),
      text: {
        pl: [
          "Komórki zwierzęce mają różne kształty, bo pełnią różne funkcje.",
          ["", em("Plemnik"), " ma długą ", em("wić"), ". Dzięki niej porusza się w stronę komórki jajowej."],
          ["", em("Komórka jajowa"), " jest kulista i zawiera zapas substancji odżywczych dla rozwijającego się organizmu."],
          ["", em("Komórka nerwowa"), " ma długie ", em("wypustki"), ". Łączy się z innymi komórkami i przekazuje informacje."],
          ["", em("Komórka nabłonka"), " ma kształt kostki. Dzięki temu komórki ściśle do siebie przylegają i tworzą warstwę ochronną."]
        ],
        ua: [
          "Тваринні клітини мають різні форми, бо виконують різні функції.",
          ["", em("Сперматозоїд"), " має довгий ", em("джгутик"), ". Завдяки ньому рухається до яйцеклітини."],
          ["", em("Яйцеклітина"), " куляста і містить запас поживних речовин для організму, що розвивається."],
          ["", em("Нервова клітина"), " має довгі ", em("відростки"), ". З’єднується з іншими клітинами і передає інформацію."],
          ["", em("Клітина епітелію"), " має форму кубика. Завдяки цьому клітини щільно прилягають і утворюють захисний шар."]
        ]
      },
      task: {
        id: "l05-e5",
        type: "single-choice",
        question: { pl: "Dlaczego komórka nabłonka ma kształt kostki, a komórka nerwowa — długie wypustki?", ua: "Чому клітина епітелію має форму кубика, а нервова — довгі відростки?" },
        options: [
          { id: "a", label: { pl: "kostka pozwala szczelnie przylegać (ochrona); wypustki łączą komórki i przekazują informacje", ua: "кубик дає щільно прилягати (захист); відростки з’єднують клітини і передають інформацію" } },
          { id: "b", label: { pl: "wszystkie komórki zwierzęce muszą być kuliste", ua: "усі тваринні клітини мають бути кулястими" } },
          { id: "c", label: { pl: "kształt komórki nie ma związku z jej pracą", ua: "форма клітини не пов’язана з її роботою" } }
        ],
        answer: "a",
        explanation: { pl: "Kształt służy funkcji: ochrona warstwą albo przekazywanie sygnałów wypustkami.", ua: "Форма служить функції: захист шаром або передача сигналів відростками." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Od kształtu do tkanki", ua: "Від форми до тканини" },
      visual: vizGh("l05-ksztalty.png", {
        alt: { pl: "Komórki nabłonka tworzą warstwę", ua: "Клітини епітелію утворюють шар" },
        title: { pl: "Podobne komórki razem = tkanka.", ua: "Подібні клітини разом = тканина." },
        prompt: { pl: "Ten sam schemat czterech kształtów komórek zwierzęcych z polskimi etykietami." }
      }),
      text: {
        pl: [
          "Gdy wiele podobnych komórek nabłonka układa się jak kostki, powstaje tkanka — warstwa ochronna.",
          "Gdy wiele komórek nerwowych łączy wypustki, powstaje tkanka, która przekazuje informacje. Z tkanek powstają narządy, z narządów — układy, z układów — organizm.",
          "Na następnej lekcji zajrzymy do środka komórki zwierzęcej. Dziś zapamiętaj: komórka żyje, bywa jedna albo jest ich miliardy, a kształt mówi o funkcji."
        ],
        ua: [
          "Коли багато подібних клітин епітелію кладуться як кубики, виникає тканина — захисний шар.",
          "Коли багато нервових клітин з’єднують відростки, виникає тканина, яка передає інформацію. З тканин — органи, з органів — системи, із систем — організм.",
          "На наступному уроці заглянемо всередину тваринної клітини. Сьогодні запам’ятай: клітина живе, буває одна або їх мільярди, а форма говорить про функцію."
        ]
      },
      task: {
        id: "l05-e6",
        type: "true-false",
        question: { pl: "Podobne komórki o wspólnej funkcji tworzą tkankę.", ua: "Подібні клітини зі спільною функцією утворюють тканину." },
        answer: true,
        explanation: { pl: "Tak. To definicja tkanki z lekcji 1 — tu widać ją na przykładzie nabłonka i komórek nerwowych.", ua: "Так. Це визначення тканини з уроку 1." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Jednostka życia", ua: "Практика. Одиниця життя" },
      task: {
        id: "l05-p1",
        type: "single-choice",
        question: { pl: "Które zdanie jest prawdziwe?", ua: "Яке речення правдиве?" },
        options: [
          { id: "a", label: { pl: "Komórka jest za mała, żeby wykonywać jakiekolwiek czynności życiowe.", ua: "Клітина занадто мала, щоб виконувати будь-які життєві функції." } },
          { id: "b", label: { pl: "Komórka to najmniejsza część organizmu zdolna do życia — dlatego jest podstawową jednostką życia.", ua: "Клітина — найменша частина організму, здатна до життя, тому є основною одиницею життя." } },
          { id: "c", label: { pl: "Tylko narządy potrafią żyć, komórki nie.", ua: "Лише органи вміють жити, клітини ні." } }
        ],
        answer: "b",
        explanation: { pl: "Nawet malutka komórka wykonuje czynności życiowe. Narząd składa się z komórek.", ua: "Навіть крихітна клітина виконує життєві функції." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jednokomórkowe czy wielokomórkowe?", ua: "Одноклітинні чи багатоклітинні?" },
      task: {
        id: "l05-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie organizmy wielokomórkowe.", ua: "Познач усі багатоклітинні організми." },
        options: [
          { id: "a", label: { pl: "pies", ua: "пес" } },
          { id: "b", label: { pl: "bakteria", ua: "бактерія" } },
          { id: "c", label: { pl: "drzewo", ua: "дерево" } },
          { id: "d", label: { pl: "człowiek", ua: "людина" } }
        ],
        answer: ["a", "c", "d"],
        explanation: { pl: "Bakteria = jedna komórka. Pies, drzewo i człowiek składają się z wielu komórek.", ua: "Бактерія = одна клітина. Пес, дерево і людина — багато клітин." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wielkość", ua: "Розмір" },
      task: {
        id: "l05-p3",
        type: "true-false",
        question: { pl: "Komórka jajowa strusia jest przykładem bardzo dużej komórki zwierzęcej, a bakterie — zwykle bardzo małych komórek.", ua: "Яйцеклітина страуса — приклад дуже великої тваринної клітини, а бактерії — зазвичай дуже малих." },
        answer: true,
        explanation: { pl: "Tak. Jajo strusia ma ok. 15 cm; bakterie należą do najmniejszych komórek.", ua: "Так. Яйце страуса близько 15 см; бактерії з найменших." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Poziomy budowy", ua: "Рівні будови" },
      task: {
        id: "l05-p4",
        type: "single-choice",
        question: { pl: "Co jest poziomem między tkanką a układem narządów?", ua: "Що є рівнем між тканиною і системою органів?" },
        options: [
          { id: "a", label: { pl: "narząd (np. mózgowie)", ua: "орган (напр. головний мозок)" } },
          { id: "b", label: { pl: "pierwiastek chemiczny", ua: "хімічний елемент" } },
          { id: "c", label: { pl: "cała planeta", ua: "ціла планета" } }
        ],
        answer: "a",
        explanation: { pl: "Kolejność: komórka → tkanka → narząd → układ → organizm.", ua: "Послідовність: клітина → тканина → орган → система → організм." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Kształt i funkcja", ua: "Форма і функція" },
      task: {
        id: "l05-p5",
        type: "single-choice",
        question: { pl: "Które połączenie jest poprawne?", ua: "Яке поєднання правильне?" },
        options: [
          { id: "a", label: { pl: "plemnik — wić do ruchu; komórka jajowa — zapas substancji; komórka nerwowa — wypustki; nabłonek — kształt kostki i ochrona", ua: "сперматозоїд — джгутик для руху; яйцеклітина — запас речовин; нервова — відростки; епітелій — кубик і захист" } },
          { id: "b", label: { pl: "wszystkie te komórki mają identyczny kształt kostki", ua: "усі ці клітини мають однакову форму кубика" } },
          { id: "c", label: { pl: "wić służy do zapisu DNA, a wypustki — do fotosyntezy", ua: "джгутик служить для запису ДНК, а відростки — для фотосинтезу" } }
        ],
        answer: "a",
        explanation: { pl: "Kształt jest dopasowany do pracy komórki.", ua: "Форма підібрана до роботи клітини." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Jednostka życia", ua: "Перевірка 1. Одиниця життя" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l05-s1",
        type: "single-choice",
        question: { pl: "Dlaczego komórka jest podstawową jednostką życia?", ua: "Чому клітина є основною одиницею життя?" },
        options: [
          { id: "a", label: { pl: "To najmniejsza część organizmu zdolna do czynności życiowych.", ua: "Це найменша частина організму, здатна до життєвих функцій." } },
          { id: "b", label: { pl: "Bo komórka jest zawsze większa niż człowiek.", ua: "Бо клітина завжди більша за людину." } },
          { id: "c", label: { pl: "Bo komórki nie występują u zwierząt.", ua: "Бо клітин немає в тварин." } }
        ],
        answer: "a",
        explanation: { pl: "Komórka jest najmniejsza i jednocześnie żywa — wykonuje czynności życiowe.", ua: "Клітина найменша і водночас жива." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Jedno- i wielokomórkowe", ua: "Перевірка 2. Одно- і багатоклітинні" },
      task: {
        id: "l05-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Organizm jednokomórkowy składa się z jednej komórki — przykładem są bakterie.", ua: "Одноклітинний організм складається з однієї клітини — приклад: бактерії." } },
          { id: "b", label: { pl: "Organizm wielokomórkowy składa się z wielu komórek — zwierzęta, rośliny, grzyby.", ua: "Багатоклітинний організм складається з багатьох клітин — тварини, рослини, гриби." } },
          { id: "c", label: { pl: "Człowiek jest organizmem jednokomórkowym.", ua: "Людина є одноклітинним організмом." } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Człowiek jest wielokomórkowy. Bakterie — jednokomórkowe.", ua: "Людина багатоклітинна. Бактерії — одноклітинні." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Wielkość komórek", ua: "Перевірка 3. Розмір клітин" },
      task: {
        id: "l05-s3",
        type: "single-choice",
        question: { pl: "Który przykład wielkości jest poprawny?", ua: "Який приклад розміру правильний?" },
        options: [
          { id: "a", label: { pl: "bakterie — zwykle najmniejsze komórki; komórka jajowa strusia — największa znana komórka zwierzęca", ua: "бактерії — зазвичай найменші; яйцеклітина страуса — найбільша відома тваринна клітина" } },
          { id: "b", label: { pl: "jajo kury jest trzy razy większe niż jajo strusia", ua: "яйце курки втричі більше за яйце страуса" } },
          { id: "c", label: { pl: "wszystkie komórki widać gołym okiem jak piłkę", ua: "усі клітини видно неозброєним оком як м’яч" } }
        ],
        answer: "a",
        explanation: { pl: "Jajo strusia ≈ 15 cm i jest około 3 razy większe niż jajo kury. Bakterie są drobne.", ua: "Яйце страуса ≈ 15 см і приблизно втричі більше за куряче." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Poziomy budowy", ua: "Перевірка 4. Рівні будови" },
      task: {
        id: "l05-s4",
        type: "single-choice",
        question: { pl: "Ułóż poziomy z przykładami.", ua: "Уклади рівні з прикладами." },
        options: [
          { id: "a", label: { pl: "komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm", ua: "нервова клітина → нервова тканина → головний мозок → нервова система → організм" } },
          { id: "b", label: { pl: "organizm → bakteria → tkanka → komórka", ua: "організм → бактерія → тканина → клітина" } },
          { id: "c", label: { pl: "układ → komórka → jajo strusia → tkanka", ua: "система → клітина → яйце страуса → тканина" } }
        ],
        answer: "a",
        explanation: { pl: "Komórka → tkanka → narząd → układ narządów → organizm.", ua: "Клітина → тканина → орган → система органів → організм." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Kształt i funkcja", ua: "Перевірка 5. Форма і функція" },
      task: {
        id: "l05-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Kształt komórki zwierzęcej zależy od jej funkcji.", ua: "Форма тваринної клітини залежить від її функції." } },
          { id: "b", label: { pl: "Plemnik ma wić do ruchu; komórka nerwowa ma wypustki do przekazywania informacji.", ua: "Сперматозоїд має джгутик для руху; нервова клітина має відростки для передачі інформації." } },
          { id: "c", label: { pl: "Komórka nabłonka ma kształt kostki i pomaga tworzyć warstwę ochronną.", ua: "Клітина епітелію має форму кубика і допомагає утворювати захисний шар." } },
          { id: "d", label: { pl: "Wszystkie komórki zwierzęce muszą mieć kształt wici.", ua: "Усі тваринні клітини мусять мати форму джгутика." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Nie wszystkie komórki są jak plemnik. Kształt jest dopasowany do pracy.", ua: "Не всі клітини як сперматозоїд. Форма підібрана до роботи." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l05-poziomy.png", {
        alt: { pl: "Poziomy budowy organizmu", ua: "Рівні будови організму" },
        title: { pl: "Komórka → tkanka → narząd → układ → organizm.", ua: "Клітина → тканина → орган → система → організм." },
        prompt: { pl: "Ten sam schemat pięciu poziomów z przykładami układu nerwowego." }
      }),
      text: {
        pl: [
          "Komórka to najmniejsza część organizmu zdolna do czynności życiowych — podstawowa jednostka życia.",
          "Organizmy jednokomórkowe (np. bakterie) mają jedną komórkę. Wielokomórkowe (zwierzęta, rośliny, grzyby) — bardzo wiele.",
          "Bakterie są zwykle najmniejsze. Komórka jajowa strusia — największa znana komórka zwierzęca.",
          "Poziomy: komórka → tkanka → narząd → układ narządów → organizm.",
          "Kształt komórki zwierzęcej zależy od funkcji: wić, kula z zapasem, wypustki, kostka nabłonka."
        ],
        ua: [
          "Клітина — найменша частина організму, здатна до життєвих функцій — основна одиниця життя.",
          "Одноклітинні (напр. бактерії) мають одну клітину. Багатоклітинні (тварини, рослини, гриби) — дуже багато.",
          "Бактерії зазвичай найменші. Яйцеклітина страуса — найбільша відома тваринна клітина.",
          "Рівні: клітина → тканина → орган → система органів → організм.",
          "Форма тваринної клітини залежить від функції: джгутик, куля із запасом, відростки, кубик епітелію."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, dlaczego komórka jest podstawową jednostką życia.", ua: "Можу пояснити, чому клітина є основною одиницею життя." },
        { pl: "Potrafię odróżnić organizmy jednokomórkowe od wielokomórkowych.", ua: "Можу відрізнити одноклітинні організми від багатоклітинних." },
        { pl: "Potrafię podać przykład bardzo małej i bardzo dużej komórki.", ua: "Можу навести приклад дуже малої і дуже великої клітини." },
        { pl: "Potrafię uporządkować poziomy budowy i podać przykłady.", ua: "Можу упорядкувати рівні будови і навести приклади." },
        { pl: "Potrafię wyjaśnić, że kształt komórki zwierzęcej zależy od funkcji.", ua: "Можу пояснити, що форма тваринної клітини залежить від функції." }
      ]
    }
  ]
};
