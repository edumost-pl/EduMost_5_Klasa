function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L28_Drzewa_iglaste/images/";

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
        { pl: "Rozpoznasz sosnę: dwie igły w pęczku.", ua: "Розпізнаєш сосну: дві хвоїнки в пучку." },
        { pl: "Rozpoznasz świerk: igły kłujące, szyszki zwisają.", ua: "Розпізнаєш ялину: хвоя колюча, шишки звисають." },
        { pl: "Rozpoznasz jodłę: igły miękkie, szyszki stoją.", ua: "Розпізнаєш ялицю: хвоя м’яка, шишки стоять." },
        { pl: "Powiesz, że modrzew zrzuca igły jesienią.", ua: "Скажеш, що модрина скидає хвою восени." },
        { pl: "Podasz znaczenie drzew iglastych: drewno, żywica, las.", ua: "Назвеш значення хвойних дерев: деревина, живиця, ліс." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "sosna", ua: "сосна" },
        { pl: "świerk", ua: "ялина" },
        { pl: "jodła", ua: "ялиця" },
        { pl: "modrzew", ua: "модрина" },
        { pl: "pęczek igieł", ua: "пучок хвої" },
        { pl: "żywica", ua: "живиця" },
        { pl: "jałowiec", ua: "ялівець" },
        { pl: "cis", ua: "тис" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l28-zacznijmy.png", {
        alt: { pl: "Las iglasty z różnymi koronami drzew", ua: "Хвойний ліс із різними кронами дерев" },
        title: { pl: "Lekcja 27: grupa. Dziś: które drzewo jest które.", ua: "Урок 27: група. Сьогодні: яке дерево яке." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 lasu iglastego, dzień. Etykieta PL: drzewa iglaste. Bez kwiatów, bez owoców liściastych, bez tablicy dąb/lipa. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Nagonasienne, nagie nasiona, szyszki i wiatr — lekcja 27. Dziś klucz: sosna, świerk, jodła, modrzew.",
          "Nie rozbieramy kwiatu ani owocu (lekcje 29–30). Drzewa liściaste — lekcja 33."
        ],
        ua: [
          "Голонасінні, голе насіння, шишки і вітер — урок 27. Сьогодні ключ: сосна, ялина, ялиця, модрина.",
          "Не розбираємо квітку і плід (уроки 29–30). Листяні дерева — урок 33."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Sosna", ua: "Сосна" },
      visual: vizGh("l28-sosna.png", {
        alt: { pl: "Dwie igły w pęczku i zwisająca szyszka sosny", ua: "Дві хвоїнки в пучку і звисла шишка сосни" },
        title: { pl: "Dwie igły razem. Pień często krzywy, kora łuszczy się.", ua: "Дві хвоїнки разом. Стовбур часто кривий, кора лущиться." },
        prompt: { pl: "Edukacyjna infografika 16:9 sosny zwyczajnej. Etykiety PL: dwie igły w pęczku; szyszka zwisa; kora w łuskach. Napis: sosna. Bez świerka i jodły na tym kadrze. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["U ", em("sosny"), " igły siedzą po ", em("dwie w pęczku"), ". Są długie i trochę twarde."],
          "Szyszki zwisają. Pień bywa krzywy, kora odchodzi płatami. Sosna lubi piaszczyste, jaśniejsze lasy.",
          "Nie licz dziś igieł świerka — u niego każda igła osobno. To następny ekran."
        ],
        ua: [
          ["У ", em("сосни"), " хвоя сидить по ", em("дві в пучку"), ". Довга і трохи тверда."],
          "Шишки звисають. Стовбур буває кривий, кора відходить пластами. Сосна любить піщані, світліші ліси.",
          "Не рахуй сьогодні хвою ялини — в неї кожна хвоїнка окремо. Це наступний екран."
        ]
      },
      task: {
        id: "l28-e1",
        type: "single-choice",
        question: { pl: "Po czym poznasz sosnę?", ua: "По чому впізнаєш сосну?" },
        options: [
          { id: "a", label: { pl: "dwie igły w pęczku", ua: "дві хвоїнки в пучку" } },
          { id: "b", label: { pl: "szyszki stoją i rozpadają się na drzewie", ua: "шишки стоять і розпадаються на дереві" } },
          { id: "c", label: { pl: "zrzuca wszystkie igły co jesień jak modrzew", ua: "скидає всю хвою щоосені як модрина" } }
        ],
        answer: "a",
        explanation: { pl: "Klucz sosny: pęczek po dwie. Stojące szyszki = jodła. Zrzucanie = modrzew.", ua: "Ключ сосни: пучок по дві." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Igły: pęczek czy pojedynczo", ua: "Хвоя: пучок чи по одній" },
      visual: tree({
        layout: "fork",
        root: { pl: "igły", ua: "хвоя" },
        items: [
          { pl: "pęczek — sosna", ua: "пучок — сосна" },
          { pl: "pojedynczo — świerk, jodła", ua: "по одній — ялина, ялиця" }
        ]
      }),
      items: [
        { pl: "sosna — dwie w pęczku", ua: "сосна — дві в пучку" },
        { pl: "świerk i jodła — każda igła osobno", ua: "ялина і ялиця — кожна хвоїнка окремо" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Świerk", ua: "Ялина" },
      visual: vizGh("l28-swierk.png", {
        alt: { pl: "Kłujące igły świerka i zwisające szyszki", ua: "Колюча хвоя ялини і звислі шишки" },
        title: { pl: "Igły kłują. Szyszki wiszą jak ozdoby.", ua: "Хвоя коле. Шишки висять як прикраси." },
        prompt: { pl: "Edukacyjna infografika 16:9 świerka. Etykiety PL: igły pojedynczo, kłujące, dookoła pędu; szyszki zwisają. Korona stożkowata. Napis: świerk. Bez dwóch igieł sosny. Bez stojących szyszek jodły. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["U ", em("świerka"), " igły wyrastają ", em("pojedynczo"), ", dookoła pędu. Są krótkie i kłujące — łatwo się ukłuć."],
          "Szyszki zwisają i spadają w całości. Korona często stożkowata, gałęzie w piętrach. Świerk lubi chłodniej i wilgotniej niż sosna.",
          "Nie myl z jodłą: u jodły igły są miękkie, a szyszki stoją."
        ],
        ua: [
          ["У ", em("ялини"), " хвоя росте ", em("по одній"), ", довкола пагона. Коротка і колюча — легко вколотися."],
          "Шишки звисають і падають цілими. Крона часто конусоподібна, гілки ярусами. Ялина любить прохолодніше і вологіше, ніж сосна.",
          "Не плутати з ялицею: в ялиці хвоя м’яка, а шишки стоять."
        ]
      },
      task: {
        id: "l28-e2",
        type: "true-false",
        question: { pl: "Świerk ma kłujące igły pojedynczo i szyszki, które zwisają.", ua: "Ялина має колючу хвою по одній і шишки, що звисають." },
        answer: true,
        explanation: { pl: "Kłuje + zwisa. Jodła: miękko + stoi.", ua: "Коле + звисає. Ялиця: м’яко + стоїть." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jodła", ua: "Ялиця" },
      visual: vizGh("l28-jodla.png", {
        alt: { pl: "Miękkie igły jodły i szyszki stojące na wierzchołku", ua: "М’яка хвоя ялиці і шишки, що стоять на верхівці" },
        title: { pl: "Igły miękkie. Szyszki sterczą i rozpadają się na drzewie.", ua: "Хвоя м’яка. Шишки стирчать і розпадаються на дереві." },
        prompt: { pl: "Edukacyjna infografika 16:9 jodły. Etykiety PL: igły miękkie, spłaszczone, dwa jasne paski od spodu; szyszki stoją, rozpadają się na drzewie. Napis: jodła. Bez zwisających szyszek świerka. Bez pęczka sosny. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["U ", em("jodły"), " igły są ", em("miękkie"), ", spłaszczone. Od spodu często dwa jasne paski. Nie kłują jak świerk."],
          "Szyszki ", em("stoją"), " na gałęzi i rozpadają się na drzewie — na ziemi rzadko znajdziesz całą szyszkę jodły.",
          "To nie kwiat i nie owoc. Szyszka z lekcji 27, tylko inny sposób trzymania się gałęzi."
        ],
        ua: [
          ["У ", em("ялиці"), " хвоя ", em("м’яка"), ", сплющена. Зі споду часто дві світлі смужки. Не коле як ялина."],
          "Шишки ", em("стоять"), " на гілці і розпадаються на дереві — на землі рідко знайдеш цілу шишку ялиці.",
          "Це не квітка і не плід. Шишка з уроку 27, лише інший спосіб триматися гілки."
        ]
      },
      task: {
        id: "l28-e3",
        type: "single-choice",
        question: { pl: "Po czym odróżnisz jodłę od świerka?", ua: "По чому відрізниш ялицю від ялини?" },
        options: [
          { id: "a", label: { pl: "jodła — igły miękkie, szyszki stoją; świerk — kłuje, szyszki zwisają", ua: "ялиця — хвоя м’яка, шишки стоять; ялина — коле, шишки звисають" } },
          { id: "b", label: { pl: "jodła ma zawsze dwie igły w pęczku", ua: "ялиця завжди має дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "świerk zrzuca igły co jesień, jodła nie", ua: "ялина скидає хвою щоосені, ялиця ні" } }
        ],
        answer: "a",
        explanation: { pl: "Miękko i stoi vs kłuje i zwisa. Pęczek = sosna. Zrzucanie = modrzew.", ua: "М’яко і стоїть проти коле і звисає." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Szyszki: zwisają albo stoją", ua: "Шишки: звисають або стоять" },
      visual: tree({
        layout: "fork",
        root: { pl: "szyszki", ua: "шишки" },
        items: [
          { pl: "zwisają — sosna, świerk", ua: "звисають — сосна, ялина" },
          { pl: "stoją — jodła", ua: "стоять — ялиця" }
        ]
      }),
      items: [
        { pl: "sosna i świerk — szyszki zwisają", ua: "сосна і ялина — шишки звисають" },
        { pl: "jodła — szyszki stoją i rozpadają się", ua: "ялиця — шишки стоять і розпадаються" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Modrzew", ua: "Модрина" },
      visual: vizGh("l28-modrzew.png", {
        alt: { pl: "Pęczki miękkich igieł modrzewia i jesienne złote igły", ua: "Пучки м’якої хвої модрини і осіння золота хвоя" },
        title: { pl: "Jedyny z tej czwórki, który zrzuca igły.", ua: "Єдиний із цієї четвірки, що скидає хвою." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA: wiosna/lato — pęczki miękkich jasnozielonych igieł, etykieta PL: modrzew. PRAWA: jesień — złote igły opadają. Napis: zrzuca igły. Bez dębu i lipy. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Modrzew"), " ma miękkie igły w pęczkach (więcej niż dwie). Jesienią żółkną i ", em("opadają"), "."],
          "Sosna, świerk i jodła zimą zostają zielone. Modrzew zimą jest „goły” jak drzewo liściaste — ale to nadal drzewo iglaste z szyszkami, nie dąb.",
          "Nie myl opadających igieł z liśćmi klonu (lekcja 33)."
        ],
        ua: [
          ["", em("Модрина"), " має м’яку хвою в пучках (більше ніж дві). Восени жовтіє і ", em("опадає"), "."],
          "Сосна, ялина і ялиця взимку лишаються зеленими. Модрина взимку «гола» як листяне дерево — але це все одно хвойне дерево з шишками, не дуб.",
          "Не плутати опалу хвою з листками клена (урок 33)."
        ]
      },
      task: {
        id: "l28-e4",
        type: "true-false",
        question: { pl: "Modrzew zrzuca igły jesienią. Sosna, świerk i jodła zimą zostają zielone.", ua: "Модрина скидає хвою восени. Сосна, ялина і ялиця взимку лишаються зеленими." },
        answer: true,
        explanation: { pl: "Modrzew = jedyny z czwórki, który gubi igły.", ua: "Модрина = єдина з четвірки, що губить хвою." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Cztery drzewa", ua: "Чотири дерева" },
      visual: tree({
        layout: "fork",
        root: { pl: "iglaste", ua: "хвойні" },
        items: [
          { pl: "sosna", ua: "сосна" },
          { pl: "świerk", ua: "ялина" },
          { pl: "jodła", ua: "ялиця" },
          { pl: "modrzew", ua: "модрина" }
        ]
      }),
      items: [
        { pl: "sosna — dwie igły w pęczku", ua: "сосна — дві хвоїнки в пучку" },
        { pl: "świerk — kłuje, szyszki zwisają", ua: "ялина — коле, шишки звисають" },
        { pl: "jodła — miękka, szyszki stoją", ua: "ялиця — м’яка, шишки стоять" },
        { pl: "modrzew — zrzuca igły", ua: "модрина — скидає хвою" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Jałowiec i cis", ua: "Ялівець і тис" },
      visual: vizGh("l28-jalowiec-cis.png", {
        alt: { pl: "Jałowiec z niebieskawymi szyszkojagodami i cis z czerwoną osnówką", ua: "Ялівець із синюватими шишкоягодами і тис із червоною шишечкою" },
        title: { pl: "Też iglaste. Cis jest trujący — nie zrywamy.", ua: "Теж хвойні. Тис отруйний — не зриваємо." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: jałowiec — igły lub łuski, niebieskawe szyszkojagody, napis: to szyszka, nie owoc. PRAWA: cis — czerwona osnówka, napis: trujący, nie zrywać. Bez namawiania do jedzenia. Bez kwiatu jabłoni. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Jałowiec"), " bywa krzewem. Ma igły albo łuski. Niebieskawe kulki to ", em("szyszkojagody"), " — przekształcone szyszki, nie śliwki (owoc później)."],
          ["", em("Cis"), " ma czerwoną osnówkę. Prawie całe ciało cisa jest ", em("trujące"), " — nie zrywamy, nie jemy."],
          "To nadal nagonasienne z lekcji 27, tylko inny wygląd niż sosna."
        ],
        ua: [
          ["", em("Ялівець"), " буває кущем. Має хвою або луски. Синюваті кульки — ", em("шишкоягоди"), " — видозмінені шишки, не сливи (плід пізніше)."],
          ["", em("Тис"), " має червону шишечку. Майже все тіло тиса ", em("отруйне"), " — не зриваємо, не їмо."],
          "Це все одно голонасінні з уроку 27, лише інший вигляд, ніж сосна."
        ]
      },
      task: {
        id: "l28-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "szyszkojagoda jałowca to nie owoc śliwy", ua: "шишкоягода ялівцю — не плід сливи" } },
          { id: "b", label: { pl: "cis jest trujący — nie zrywamy", ua: "тис отруйний — не зриваємо" } },
          { id: "c", label: { pl: "cis to mech z puszki", ua: "тис — мох із коробочкою" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Szyszka, nie owoc. Cis trujący. Nie mech.", ua: "Шишка, не плід. Тис отруйний." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Drewno, żywica, las", ua: "Деревина, живиця, ліс" },
      visual: vizGh("l28-znaczenie.png", {
        alt: { pl: "Pień, krople żywicy i las iglasty", ua: "Стовбур, краплі живиці і хвойний ліс" },
        title: { pl: "Budulec, żywica, schronienie. Nie zrywamy kory dla zabawy.", ua: "Будівельний матеріал, живиця, сховок. Кору для забави не зриваємо." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 belki / deski — drewno. 2 krople żywicy na pniu. 3 las iglasty — schronienie, gleba, powietrze. Bez wycinki jako grozy. Bez kwiatu. Bez dębu jako głównego motywu (L33). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Drewno iglaste idzie na belki, deski, papier. Z pnia sączy się ", em("żywica"), " — klei rany drzewa (i pachnie lasem).",
          "Las iglasty trzyma glebę na stoku, daje schronienie zwierzętom i tlen z fotosyntezy (lekcja 9).",
          "Nie myl tego z przeglądem drzew liściastych (lekcja 33). Dziś tylko iglaki."
        ],
        ua: [
          "Хвойна деревина йде на балки, дошки, папір. Зі стовбура сочиться ", em("живиця"), " — заліплює рани дерева (і пахне лісом).",
          "Хвойний ліс тримає ґрунт на схилі, дає сховок тваринам і кисень із фотосинтезу (урок 9).",
          "Не плутати це з оглядом листяних дерев (урок 33). Сьогодні лише хвойні."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Po co iglaki", ua: "Навіщо хвойні" },
      visual: tree({
        layout: "fork",
        root: { pl: "iglaste", ua: "хвойні" },
        items: [
          { pl: "drewno", ua: "деревина" },
          { pl: "żywica", ua: "живиця" },
          { pl: "las", ua: "ліс" }
        ]
      }),
      items: [
        { pl: "drewno — belki, papier", ua: "деревина — балки, папір" },
        { pl: "żywica — chroni ranę pnia", ua: "живиця — захищає рану стовбура" },
        { pl: "las — gleba, schronienie, tlen", ua: "ліс — ґрунт, сховок, кисень" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Sosna", ua: "Практика. Сосна" },
      task: {
        id: "l28-p1",
        type: "single-choice",
        question: { pl: "Dwie igły w pęczku to cecha:", ua: "Дві хвоїнки в пучку — ознака:" },
        options: [
          { id: "a", label: { pl: "sosny", ua: "сосни" } },
          { id: "b", label: { pl: "świerka", ua: "ялини" } },
          { id: "c", label: { pl: "jodły", ua: "ялиці" } }
        ],
        answer: "a",
        explanation: { pl: "Sosna = pęczek po dwie. Świerk i jodła — pojedynczo.", ua: "Сосна = пучок по дві." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Świerk", ua: "Ялина" },
      task: {
        id: "l28-p2",
        type: "single-choice",
        question: { pl: "Kłujące igły pojedynczo i zwisające szyszki to:", ua: "Колюча хвоя по одній і звислі шишки — це:" },
        options: [
          { id: "a", label: { pl: "świerk", ua: "ялина" } },
          { id: "b", label: { pl: "jodła", ua: "ялиця" } },
          { id: "c", label: { pl: "modrzew, bo zrzuca igły", ua: "модрина, бо скидає хвою" } }
        ],
        answer: "a",
        explanation: { pl: "Świerk kłuje i zwisa. Jodła miękka i stoi.", ua: "Ялина коле і звисає." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jodła", ua: "Ялиця" },
      task: {
        id: "l28-p3",
        type: "true-false",
        question: { pl: "Jodła ma miękkie igły. Jej szyszki stoją i rozpadają się na drzewie.", ua: "Ялиця має м’яку хвою. Її шишки стоять і розпадаються на дереві." },
        answer: true,
        explanation: { pl: "Miękko + stoi. Świerk: kłuje + zwisa.", ua: "М’яко + стоїть." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Modrzew", ua: "Модрина" },
      task: {
        id: "l28-p4",
        type: "single-choice",
        question: { pl: "Które drzewo iglaste zrzuca igły jesienią?", ua: "Яке хвойне дерево скидає хвою восени?" },
        options: [
          { id: "a", label: { pl: "modrzew", ua: "модрина" } },
          { id: "b", label: { pl: "świerk", ua: "ялина" } },
          { id: "c", label: { pl: "jodła", ua: "ялиця" } }
        ],
        answer: "a",
        explanation: { pl: "Tylko modrzew z tej czwórki gubi igły zimą.", ua: "Лише модрина з цієї четвірки губить хвою." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znaczenie", ua: "Значення" },
      task: {
        id: "l28-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz znaczenie drzew iglastych z tej lekcji.", ua: "Познач значення хвойних дерев з цього уроку." },
        options: [
          { id: "a", label: { pl: "drewno (belki, papier)", ua: "деревина (балки, папір)" } },
          { id: "b", label: { pl: "żywica", ua: "живиця" } },
          { id: "c", label: { pl: "las (gleba, schronienie)", ua: "ліс (ґрунт, сховок)" } },
          { id: "d", label: { pl: "kwiat jabłoni", ua: "квітка яблуні" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Drewno, żywica, las. Kwiat = L30.", ua: "Деревина, живиця, ліс." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Sosna", ua: "Перевірка 1. Сосна" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l28-s1",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz sosnę?", ua: "Як розпізнаєш сосну?" },
        options: [
          { id: "a", label: { pl: "dwie igły w pęczku", ua: "дві хвоїнки в пучку" } },
          { id: "b", label: { pl: "szyszki wyłącznie stojące jak u jodły", ua: "шишки лише стоячі як у ялиці" } },
          { id: "c", label: { pl: "zrzuca igły co jesień", ua: "скидає хвою щоосені" } }
        ],
        answer: "a",
        explanation: { pl: "Pęczek po dwie.", ua: "Пучок по дві." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Świerk", ua: "Перевірка 2. Ялина" },
      task: {
        id: "l28-s2",
        type: "true-false",
        question: { pl: "Świerk rozpoznasz po kłujących igłach (pojedynczo) i zwisających szyszkach.", ua: "Ялину впізнаєш по колючій хвої (по одній) і звислих шишках." },
        answer: true,
        explanation: { pl: "Kłuje i zwisa.", ua: "Коле і звисає." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Jodła", ua: "Перевірка 3. Ялиця" },
      task: {
        id: "l28-s3",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz jodłę?", ua: "Як розпізнаєш ялицю?" },
        options: [
          { id: "a", label: { pl: "igły miękkie; szyszki stoją i rozpadają się na drzewie", ua: "хвоя м’яка; шишки стоять і розпадаються на дереві" } },
          { id: "b", label: { pl: "zawsze dwie igły w pęczku", ua: "завжди дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "kłuje jak świerk i ma tylko zwisające szyszki", ua: "коле як ялина і має лише звислі шишки" } }
        ],
        answer: "a",
        explanation: { pl: "Miękko i stoi.", ua: "М’яко і стоїть." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Modrzew", ua: "Перевірка 4. Модрина" },
      task: {
        id: "l28-s4",
        type: "single-choice",
        question: { pl: "Co powiesz o modrzewiu?", ua: "Що скажеш про модрину?" },
        options: [
          { id: "a", label: { pl: "zrzuca igły jesienią; zimą jest „goły”, ale to nadal iglak z szyszkami", ua: "скидає хвою восени; взимку «гола», але це все одно хвойне дерево з шишками" } },
          { id: "b", label: { pl: "to dąb z lekcji 33", ua: "це дуб з уроку 33" } },
          { id: "c", label: { pl: "nigdy nie ma szyszek, tylko kwiaty", ua: "ніколи не має шишок, лише квітки" } }
        ],
        answer: "a",
        explanation: { pl: "Jedyny z czwórki gubi igły. Nie dąb i nie kwiat.", ua: "Єдина з четвірки губить хвою." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Znaczenie", ua: "Перевірка 5. Значення" },
      task: {
        id: "l28-s5",
        type: "multiple-choice",
        question: { pl: "Które znaczenie mają drzewa iglaste?", ua: "Яке значення мають хвойні дерева?" },
        options: [
          { id: "a", label: { pl: "drewno", ua: "деревина" } },
          { id: "b", label: { pl: "żywica", ua: "живиця" } },
          { id: "c", label: { pl: "las (gleba, schronienie)", ua: "ліс (ґрунт, сховок)" } },
          { id: "d", label: { pl: "puszka zarodniona mchu", ua: "коробочка моху" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Drewno, żywica, las. Puszka = mech.", ua: "Деревина, живиця, ліс." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "iglaste", ua: "хвойні" },
        items: [
          { pl: "sosna", ua: "сосна" },
          { pl: "świerk", ua: "ялина" },
          { pl: "jodła", ua: "ялиця" },
          { pl: "modrzew", ua: "модрина" }
        ]
      }),
      text: {
        pl: [
          "Sosna — dwie igły w pęczku.",
          "Świerk — kłuje, szyszki zwisają.",
          "Jodła — miękka, szyszki stoją.",
          "Modrzew — zrzuca igły.",
          "Drewno, żywica, las. Cis trujący.",
          "Kwiat, owoc, drzewa liściaste — później."
        ],
        ua: [
          "Сосна — дві хвоїнки в пучку.",
          "Ялина — коле, шишки звисають.",
          "Ялиця — м’яка, шишки стоять.",
          "Модрина — скидає хвою.",
          "Деревина, живиця, ліс. Тис отруйний.",
          "Квітка, плід, листяні дерева — пізніше."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię rozpoznać sosnę po dwóch igłach w pęczku.", ua: "Можу розпізнати сосну по двох хвоїнках у пучку." },
        { pl: "Potrafię rozpoznać świerk (kłuje, szyszki zwisają).", ua: "Можу розпізнати ялину (коле, шишки звисають)." },
        { pl: "Potrafię rozpoznać jodłę (miękka, szyszki stoją).", ua: "Можу розпізнати ялицю (м’яка, шишки стоять)." },
        { pl: "Wiem, że modrzew zrzuca igły jesienią.", ua: "Знаю, що модрина скидає хвою восени." },
        { pl: "Potrafię podać znaczenie: drewno, żywica, las.", ua: "Можу назвати значення: деревина, живиця, ліс." }
      ]
    }
  ]
};
