function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L31_Rozsiewanie_nasion/images/";

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
        { pl: "Wyjaśnisz, po co nasiona oddalają się od rośliny matecznej.", ua: "Поясниш, навіщо насіння віддаляється від материнської рослини." },
        { pl: "Rozpoznasz rozsiew przez wiatr (skrzydełko, puch).", ua: "Розпізнаєш поширення вітром (крильце, пух)." },
        { pl: "Rozpoznasz rozsiew przez zwierzęta (haczyki albo zjedzony owoc).", ua: "Розпізнаєш поширення тваринами (гачки або з’їдений плід)." },
        { pl: "Rozpoznasz rozsiew przez wodę.", ua: "Розпізнаєш поширення водою." },
        { pl: "Rozpoznasz rozsiew samodzielny (pękający owoc).", ua: "Розпізнаєш самостійне поширення (плід, що розтріскується)." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "rozsiewanie nasion", ua: "поширення насіння" },
        { pl: "roślina mateczna", ua: "материнська рослина" },
        { pl: "skrzydełko", ua: "крильце" },
        { pl: "puch", ua: "пух" },
        { pl: "haczyki", ua: "гачки" },
        { pl: "owoc soczysty", ua: "соковитий плід" },
        { pl: "pękający owoc", ua: "плід, що розтріскується" },
        { pl: "zapylenie (nie mylić)", ua: "запилення (не плутати)" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l31-zacznijmy.png", {
        alt: { pl: "Nasiona w drodze: puch, skrzydełko, haczyki, ptak z owocem", ua: "Насіння в дорозі: пух, крильце, гачки, птах із плодом" },
        title: { pl: "Kwiat dał owoc (lekcja 30). Dziś nasiona podróżują.", ua: "Квітка дала плід (урок 30). Сьогодні насіння подорожує." },
        prompt: { pl: "Edukacyjny kolaż 16:9, cztery małe kadry, etykiety PL: puch mniszka; skrzydełko klonu; haczyki łopianu; ptak z jagodą. Napis: rozsiew nasion. Bez części kwiatu (kielich, pręciki). Bez kiełkującej fasoli. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Z kwiatu powstał owoc z nasionami (lekcje 29–30). Dziś pytanie: jak nasiono trafia dalej od rośliny, która je wydała?",
          ["To ", em("rozsiewanie nasion"), ". Nie myl z zapyleniem: pszczoła na kwiecie przenosi pyłek, nie nasiono. Kiełkowanie — lekcja 32."]
        ],
        ua: [
          "З квітки виник плід із насінням (уроки 29–30). Сьогодні питання: як насінина потрапляє далі від рослини, яка її видала?",
          ["Це ", em("поширення насіння"), ". Не плутати із запиленням: бджола на квітці несе пилок, не насінину. Проростання — урок 32."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Po co ta podróż?", ua: "Навіщо ця подорож?" },
      visual: vizGh("l31-po-co.png", {
        alt: { pl: "Gęsty krzak obok rozsianych siewek w otwartej przestrzeni", ua: "Густий кущ поряд із розсіяними сходами на відкритому місці" },
        title: { pl: "Blisko matki jest ciasno. Dalej — światło i miejsce.", ua: "Біля матері тісно. Далі — світло і місце." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: młode rośliny stłoczone pod rośliną mateczną, mało światła. PRAWA: nasiona daleko, więcej miejsca. Napis: rozsiew = mniej konkurencji. Bez kiełkującej fasoli w słoiku (L32). Bez atlasu owoców. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Roślina mateczna"), " to ta, która wydała nasiona. Jeśli wszystkie spadną pod nią, młode będą walczyć o światło, wodę i miejsce."],
          "Rozsiew oddala nasiona. Gatunek może zająć nowe miejsca. Nie musisz znać atlasu wszystkich owoców — ważne, jaki to sposób podróży."
        ],
        ua: [
          ["", em("Материнська рослина"), " — та, що видала насіння. Якщо все впаде під нею, молоді боротимуться за світло, воду і місце."],
          "Поширення віддаляє насіння. Вид може зайняти нові місця. Не треба атласу всіх плодів — важливо, який це спосіб подорожі."
        ]
      },
      task: {
        id: "l31-e1",
        type: "single-choice",
        question: { pl: "Po co nasiona oddalają się od rośliny matecznej?", ua: "Навіщо насіння віддаляється від материнської рослини?" },
        options: [
          { id: "a", label: { pl: "żeby młode nie konkurowały tak mocno o światło, wodę i miejsce", ua: "щоб молоді не конкурували так сильно за світло, воду і місце" } },
          { id: "b", label: { pl: "żeby kwiat dostał pyłek (to zapylenie, lekcja 30)", ua: "щоб квітка дістала пилок (це запилення, урок 30)" } },
          { id: "c", label: { pl: "żeby zmierzyć temperaturę kiełkowania (lekcja 32)", ua: "щоб виміряти температуру проростання (урок 32)" } }
        ],
        answer: "a",
        explanation: { pl: "Mniej tłoku. Zapylenie = pyłek. Kiełkowanie = L32.", ua: "Менше тисняви. Запилення = пилок." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Cztery drogi", ua: "Чотири шляхи" },
      visual: tree({
        layout: "nested",
        root: { pl: "rozsiew", ua: "поширення" },
        groups: [
          {
            title: { pl: "wiatr", ua: "вітер" },
            items: [{ pl: "skrzydełko, puch", ua: "крильце, пух" }]
          },
          {
            title: { pl: "zwierzęta", ua: "тварини" },
            items: [{ pl: "haczyki, owoce", ua: "гачки, плоди" }]
          },
          {
            title: { pl: "woda", ua: "вода" },
            items: [{ pl: "pływa", ua: "пливе" }]
          },
          {
            title: { pl: "same", ua: "самі" },
            items: [{ pl: "pęka owoc", ua: "плід тріскає" }]
          }
        ]
      }),
      items: [
        { pl: "wiatr — lekkie, ze skrzydełkiem albo puchem", ua: "вітер — легке, з крильцем або пухом" },
        { pl: "zwierzęta — haczyki albo zjedzony owoc", ua: "тварини — гачки або з’їдений плід" },
        { pl: "woda — unosi się", ua: "вода — тримається на поверхні" },
        { pl: "samodzielnie — owoc pęka i wyrzuca nasiona", ua: "самостійно — плід тріскає і викидає насіння" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Wiatr: skrzydełko i puch", ua: "Вітер: крильце і пух" },
      visual: vizGh("l31-wiatr.png", {
        alt: { pl: "Skrzydełko klonu i puch mniszka na wietrze", ua: "Крильце клена і пух кульбаби на вітрі" },
        title: { pl: "Lekkie nasiono. Wiatr je niesie. To nie pyłek zbóż.", ua: "Легка насінина. Вітер її несе. Це не пилок злаків." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: nasiono klonu ze skrzydełkiem, strzałka wiatru. PRAWA: mniszek, puch jak spadochron. Napis: rozsiew przez wiatr. Bez pszczoły na kwiecie (zapylenie L30). Bez kiełkującej fasoli. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Wiatr unosi lekkie nasiona. ", em("Skrzydełko"), " (np. klon) kręci się jak śmigło. ", em("Puch"), " (mniszek) działa jak spadochron."],
          "To nie zapylenie zbóż z lekcji 30: tam wiatr niesie pyłek do kwiatu. Tu wiatr niesie już nasiono z owocu."
        ],
        ua: [
          ["Вітер підхоплює легке насіння. ", em("Крильце"), " (наприклад клен) крутиться як гвинт. ", em("Пух"), " (кульбаба) діє як парашут."],
          "Це не запилення злаків з уроку 30: там вітер несе пилок до квітки. Тут вітер несе вже насінину з плоду."
        ]
      },
      task: {
        id: "l31-e2",
        type: "single-choice",
        question: { pl: "Skrzydełko klonu i puch mniszka to przystosowanie do rozsiewu przez:", ua: "Крильце клена і пух кульбаби — пристосування до поширення:" },
        options: [
          { id: "a", label: { pl: "wiatr", ua: "вітром" } },
          { id: "b", label: { pl: "pszczołę z pyłkiem (zapylenie)", ua: "бджолу з пилком (запилення)" } },
          { id: "c", label: { pl: "kłącze paproci", ua: "кореневище папороті" } }
        ],
        answer: "a",
        explanation: { pl: "Wiatr niesie nasiono. Pyłek = L30.", ua: "Вітер несе насінину. Пилок = урок 30." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa kształty na wiatr", ua: "Дві форми на вітер" },
      visual: tree({
        layout: "fork",
        root: { pl: "wiatr", ua: "вітер" },
        items: [
          { pl: "skrzydełko", ua: "крильце" },
          { pl: "puch", ua: "пух" }
        ]
      }),
      items: [
        { pl: "skrzydełko — np. klon", ua: "крильце — наприклад клен" },
        { pl: "puch — np. mniszek", ua: "пух — наприклад кульбаба" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Zwierzęta: haczyki i owoce", ua: "Тварини: гачки і плоди" },
      visual: vizGh("l31-zwierzeta.png", {
        alt: { pl: "Haczyki łopianu na sierści i ptak z jagodą", ua: "Гачки лопуха на шерсті і птах із ягодою" },
        title: { pl: "Przylepi się albo zostanie zjedzone. Nasiono jedzie dalej.", ua: "Прилипне або буде з’їдене. Насінина їде далі." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: owoc łopianu z haczykami na sierści psa / lisa (bez grozy, bez krwi). PRAWA: ptak dziobie jarzębinę / czereśnię, nasiona w tle. Napis: rozsiew przez zwierzęta. Bez pszczoły na kwiecie. Bez atlasu pestkowców. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Haczyki"), " (łopian) czepiają się sierści. Zwierzę idzie — nasiono jedzie."],
          ["", em("Owoc soczysty"), " (jarzębina, czereśnia) smakuje ptakom i ssakom. Nasiona wychodzą z odchodami daleko od drzewa."],
          "Pszczoła na płatku to zapylenie, nie haczyki. Nie uczysz się dziś listy wszystkich jagód."
        ],
        ua: [
          ["", em("Гачки"), " (лопух) чіпляються до шерсті. Тварина йде — насінина їде."],
          ["", em("Соковитий плід"), " (горобина, черешня) смакує птахам і ссавцям. Насіння виходить із послідом далеко від дерева."],
          "Бджола на пелюстці — це запилення, не гачки. Сьогодні не вчиш список усіх ягід."
        ]
      },
      task: {
        id: "l31-e3",
        type: "multiple-choice",
        question: { pl: "Zaznacz dwa sposoby rozsiewu przez zwierzęta.", ua: "Познач два способи поширення тваринами." },
        options: [
          { id: "a", label: { pl: "haczyki na sierści", ua: "гачки на шерсті" } },
          { id: "b", label: { pl: "zjedzony owoc, nasiona dalej z odchodami", ua: "з’їдений плід, насіння далі з послідом" } },
          { id: "c", label: { pl: "pszczoła niesie pyłek (zapylenie, L30)", ua: "бджола несе пилок (запилення, урок 30)" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Haczyki i owoce. Pyłek = zapylenie.", ua: "Гачки і плоди. Пилок = запилення." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwie jazdy ze zwierzęciem", ua: "Дві поїздки з твариною" },
      visual: tree({
        layout: "fork",
        root: { pl: "zwierzęta", ua: "тварини" },
        items: [
          { pl: "haczyki", ua: "гачки" },
          { pl: "owoce", ua: "плоди" }
        ]
      }),
      items: [
        { pl: "haczyki — czepiają się sierści", ua: "гачки — чіпляються до шерсті" },
        { pl: "owoce — zjadane, nasiona dalej", ua: "плоди — з’їдені, насіння далі" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Woda unosi", ua: "Вода несе" },
      visual: vizGh("l31-woda.png", {
        alt: { pl: "Owoc lub nasiono pływające na wodzie", ua: "Плід або насінина пливе по воді" },
        title: { pl: "Lekki, nie nasiąka od razu. Rzeka albo morze niesie.", ua: "Легкий, не намокає одразу. Річка або море несе." },
        prompt: { pl: "Edukacyjny kadr 16:9. Owoc / nasiono unosi się na wodzie (np. kokos przy brzegu albo owoc rośliny nadwodnej), etykieta PL: rozsiew przez wodę. Strzałka prądu. Bez słoika z fasolą i wodą (kiełkowanie L32). Bez pszczoły. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Niektóre owoce i nasiona ", em("pływają"), ". Woda (rzeka, deszczowy spływ, morze) odsuwa je od rośliny matecznej. Klasyczny szkolny przykład: kokos."],
          "Nie myl z doświadczeniem kiełkowania: tam woda ma namoczyć nasiono w słoiku (lekcja 32). Tu woda jest pojazdem."
        ],
        ua: [
          ["Деякі плоди і насіння ", em("плавають"), ". Вода (річка, дощовий стік, море) відсуває їх від материнської рослини. Класичний шкільний приклад: кокос."],
          "Не плутати з дослідом проростання: там вода має намочити насінину в банці (урок 32). Тут вода — транспорт."
        ]
      },
      task: {
        id: "l31-e4",
        type: "true-false",
        question: { pl: "Niektóre nasiona i owoce unoszą się na wodzie i tak oddalają się od rośliny matecznej.", ua: "Деяке насіння і плоди тримаються на воді і так віддаляються від материнської рослини." },
        answer: true,
        explanation: { pl: "Woda = pojazd. Namaczanie fasoli = L32.", ua: "Вода = транспорт. Замочування квасолі = урок 32." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Woda to nie słoik", ua: "Вода — це не банка" },
      visual: tree({
        layout: "fork",
        root: { pl: "woda", ua: "вода" },
        items: [
          { pl: "rozsiew — pływa", ua: "поширення — пливе" },
          { pl: "kiełkowanie L32", ua: "проростання 32" }
        ]
      }),
      items: [
        { pl: "dziś: woda unosi nasiono", ua: "сьогодні: вода несе насінину" },
        { pl: "lekcja 32: woda potrzebna do kiełkowania", ua: "урок 32: вода потрібна для проростання" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Samo pęka", ua: "Саме тріскає" },
      visual: vizGh("l31-samodzielnie.png", {
        alt: { pl: "Strąk lub torebka pęka i wyrzuca nasiona", ua: "Стручок або коробочка тріскає і викидає насіння" },
        title: { pl: "Owoc pęka. Nasiona odskakują. Bez wiatru i bez lisa.", ua: "Плід тріскає. Насіння відскакує. Без вітру і без лиса." },
        prompt: { pl: "Edukacyjny schemat 16:9. Pękający strąk / torebka (groch albo niecierpek), etykiety PL: pękający owoc; nasiona w locie. Napis: rozsiew samodzielny. Bez psa z haczykami. Bez skrzydełka klonu jako głównego motywu. Bez kiełkującej fasoli. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Niektóre owoce ", em("pękają"), " i wyrzucają nasiona (strąk grochu, niecierpek). To rozsiew ", em("samodzielny"), " — bez wiatru, wody i zwierząt."],
          "Zarodniki z puszki mchu (lekcja 25) to inna historia: mech nie ma nasion. Tu pęka owoc okrytonasiennych."
        ],
        ua: [
          ["Деякі плоди ", em("розтріскуються"), " і викидають насіння (стручок гороху, недоторка). Це ", em("самостійне"), " поширення — без вітру, води і тварин."],
          "Спори з коробочки моху (урок 25) — інша історія: мох не має насіння. Тут тріскає плід покритонасінних."
        ]
      },
      task: {
        id: "l31-e5",
        type: "single-choice",
        question: { pl: "Pękający strąk, który wyrzuca nasiona, to rozsiew:", ua: "Стручок, що тріскає і викидає насіння, — це поширення:" },
        options: [
          { id: "a", label: { pl: "samodzielny", ua: "самостійне" } },
          { id: "b", label: { pl: "przez pszczołę z nektarem", ua: "бджолою з нектаром" } },
          { id: "c", label: { pl: "przez puszkę mchu", ua: "коробочкою моху" } }
        ],
        answer: "a",
        explanation: { pl: "Owoc pęka. Mech = zarodniki, nie nasiona.", ua: "Плід тріскає. Мох = спори." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od owocu do nowego miejsca", ua: "Від плоду до нового місця" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Owoc, podróż nasiona, nowe miejsce", ua: "Плід, подорож насінини, нове місце" },
        items: [
          { pl: "owoc z nasionami", ua: "плід із насінням" },
          { pl: "podróż (wiatr, zwierzę…)", ua: "подорож (вітер, тварина…)" },
          { pl: "daleko od matki", ua: "далеко від матері" },
          { pl: "nowe miejsce", ua: "нове місце" }
        ],
        caption: { pl: "czy nasiono kiełkuje — lekcja 32", ua: "чи насінина проростає — урок 32" }
      }),
      items: [
        { pl: "najpierw owoc (lekcja 30)", ua: "спочатку плід (урок 30)" },
        { pl: "potem podróż nasiona", ua: "потім подорож насінини" },
        { pl: "kiełkowanie — następna lekcja", ua: "проростання — наступний урок" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Po co rozsiew?", ua: "Практика. Навіщо поширення?" },
      task: {
        id: "l31-p1",
        type: "single-choice",
        question: { pl: "Rozsiew nasion pomaga głównie temu, żeby:", ua: "Поширення насіння допомагає здебільшого тому, щоб:" },
        options: [
          { id: "a", label: { pl: "młode nie rosły wszystkie pod matką", ua: "молоді не росли всі під матір’ю" } },
          { id: "b", label: { pl: "kielich chronił pąk", ua: "чашечка захищала бутон" } },
          { id: "c", label: { pl: "igły sosny kłuły", ua: "хвоя сосни колола" } }
        ],
        answer: "a",
        explanation: { pl: "Mniej konkurencji. Kielich = L30. Igły = L27–28.", ua: "Менше конкуренції." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wiatr", ua: "Вітер" },
      task: {
        id: "l31-p2",
        type: "true-false",
        question: { pl: "Skrzydełko klonu i puch mniszka służą rozsiewowi przez wiatr.", ua: "Крильце клена і пух кульбаби служать поширенню вітром." },
        answer: true,
        explanation: { pl: "Lekkie + kształt = wiatr.", ua: "Легке + форма = вітер." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zwierzęta", ua: "Тварини" },
      task: {
        id: "l31-p3",
        type: "single-choice",
        question: { pl: "Haczyki łopianu na sierści psa to rozsiew przez:", ua: "Гачки лопуха на шерсті собаки — поширення:" },
        options: [
          { id: "a", label: { pl: "zwierzęta", ua: "тваринами" } },
          { id: "b", label: { pl: "wiatr ze skrzydełkiem", ua: "вітром із крильцем" } },
          { id: "c", label: { pl: "zapylenie pręcików", ua: "запилення тичинок" } }
        ],
        answer: "a",
        explanation: { pl: "Haczyki = zwierzę. Skrzydełko = wiatr. Pręcik = L30.", ua: "Гачки = тварина." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Woda", ua: "Вода" },
      task: {
        id: "l31-p4",
        type: "single-choice",
        question: { pl: "Owoc, który pływa rzeką, rozsiewa nasiona przez:", ua: "Плід, що пливе річкою, поширює насіння:" },
        options: [
          { id: "a", label: { pl: "wodę", ua: "водою" } },
          { id: "b", label: { pl: "doświadczenie w słoiku (L32)", ua: "дослід у банці (урок 32)" } },
          { id: "c", label: { pl: "szyszkę sosny", ua: "шишкою сосни" } }
        ],
        answer: "a",
        explanation: { pl: "Pływa = woda. Słoik = kiełkowanie.", ua: "Плаве = вода." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Samodzielnie", ua: "Самостійно" },
      task: {
        id: "l31-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o rozsiewie samodzielnym.", ua: "Познач правдиві речення про самостійне поширення." },
        options: [
          { id: "a", label: { pl: "owoc pęka i wyrzuca nasiona", ua: "плід тріскає і викидає насіння" } },
          { id: "b", label: { pl: "nie potrzeba wiatru ani lisa", ua: "не треба вітру ані лиса" } },
          { id: "c", label: { pl: "to to samo co puszka mchu z zarodnikami", ua: "це те саме, що коробочка моху зі спорами" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Pęka owoc. Mech nie ma nasion.", ua: "Тріскає плід. Мох не має насіння." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Po co?", ua: "Перевірка 1. Навіщо?" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l31-s1",
        type: "single-choice",
        question: { pl: "Dlaczego nasiona oddalają się od rośliny matecznej?", ua: "Чому насіння віддаляється від материнської рослини?" },
        options: [
          { id: "a", label: { pl: "żeby młode miały więcej miejsca, światła i wody", ua: "щоб молоді мали більше місця, світла і води" } },
          { id: "b", label: { pl: "żeby pręciki dały pyłek", ua: "щоб тичинки дали пилок" } },
          { id: "c", label: { pl: "żeby zmierzyć słoje drewna", ua: "щоб виміряти річні кільця деревини" } }
        ],
        answer: "a",
        explanation: { pl: "Mniej konkurencji z matką.", ua: "Менше конкуренції з матір’ю." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Wiatr", ua: "Перевірка 2. Вітер" },
      task: {
        id: "l31-s2",
        type: "single-choice",
        question: { pl: "Co rozpoznasz jako rozsiew przez wiatr?", ua: "Що розпізнаєш як поширення вітром?" },
        options: [
          { id: "a", label: { pl: "skrzydełko klonu albo puch mniszka", ua: "крильце клена або пух кульбаби" } },
          { id: "b", label: { pl: "haczyki łopianu na sierści", ua: "гачки лопуха на шерсті" } },
          { id: "c", label: { pl: "kłos zboża z pyłkiem (zapylenie)", ua: "колосок злаку з пилком (запилення)" } }
        ],
        answer: "a",
        explanation: { pl: "Skrzydełko i puch. Haczyki = zwierzęta. Pyłek = L30.", ua: "Крильце і пух." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Zwierzęta", ua: "Перевірка 3. Тварини" },
      task: {
        id: "l31-s3",
        type: "single-choice",
        question: { pl: "Co rozpoznasz jako rozsiew przez zwierzęta?", ua: "Що розпізнаєш як поширення тваринами?" },
        options: [
          { id: "a", label: { pl: "haczyki na sierści albo zjedzony owoc z nasionami w odchodach", ua: "гачки на шерсті або з’їдений плід із насінням у посліді" } },
          { id: "b", label: { pl: "puch mniszka na wietrze", ua: "пух кульбаби на вітрі" } },
          { id: "c", label: { pl: "pszczoła z nektarem na płatku", ua: "бджола з нектаром на пелюстці" } }
        ],
        answer: "a",
        explanation: { pl: "Haczyki lub owoce. Puch = wiatr. Pszczoła = zapylenie.", ua: "Гачки або плоди." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Woda", ua: "Перевірка 4. Вода" },
      task: {
        id: "l31-s4",
        type: "true-false",
        question: { pl: "Rozsiew przez wodę to unoszenie nasion lub owoców przez rzekę albo morze, nie namaczanie fasoli w słoiku.", ua: "Поширення водою — це перенесення насіння або плодів річкою чи морем, не замочування квасолі в банці." },
        answer: true,
        explanation: { pl: "Pojazd = woda. Słoik = L32.", ua: "Транспорт = вода. Банка = урок 32." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Samodzielnie", ua: "Перевірка 5. Самостійно" },
      task: {
        id: "l31-s5",
        type: "single-choice",
        question: { pl: "Który przykład to rozsiew samodzielny?", ua: "Який приклад — самостійне поширення?" },
        options: [
          { id: "a", label: { pl: "strąk pęka i wyrzuca nasiona", ua: "стручок тріскає і викидає насіння" } },
          { id: "b", label: { pl: "kokos płynie na fali", ua: "кокос пливе на хвилі" } },
          { id: "c", label: { pl: "nasiono ze skrzydełkiem kręci się na wietrze", ua: "насінина з крильцем крутиться на вітрі" } }
        ],
        answer: "a",
        explanation: { pl: "Pęka = samodzielnie. Kokos = woda. Skrzydełko = wiatr.", ua: "Тріскає = самостійно." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "rozsiew", ua: "поширення" },
        items: [
          { pl: "wiatr", ua: "вітер" },
          { pl: "zwierzęta", ua: "тварини" },
          { pl: "woda / same", ua: "вода / самі" }
        ]
      }),
      text: {
        pl: [
          "Nasiona oddalają się od matki — mniej tłoku.",
          "Wiatr: skrzydełko, puch.",
          "Zwierzęta: haczyki, zjedzony owoc.",
          "Woda: pływa.",
          "Samodzielnie: owoc pęka.",
          "Zapylenie ≠ rozsiew. Kiełkowanie — lekcja 32."
        ],
        ua: [
          "Насіння віддаляється від матері — менше тисняви.",
          "Вітер: крильце, пух.",
          "Тварини: гачки, з’їдений плід.",
          "Вода: пливе.",
          "Самостійно: плід тріскає.",
          "Запилення ≠ поширення. Проростання — урок 32."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, po co nasiona oddalają się od matki.", ua: "Можу пояснити, навіщо насіння віддаляється від матері." },
        { pl: "Potrafię rozpoznać rozsiew przez wiatr.", ua: "Можу розпізнати поширення вітром." },
        { pl: "Potrafię rozpoznać rozsiew przez zwierzęta.", ua: "Можу розпізнати поширення тваринами." },
        { pl: "Potrafię rozpoznać rozsiew przez wodę.", ua: "Можу розпізнати поширення водою." },
        { pl: "Potrafię rozpoznać rozsiew samodzielny.", ua: "Можу розпізнати самостійне поширення." }
      ]
    }
  ]
};
