function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L25_Mchy/images/";

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
        { pl: "Wskażesz wilgotne środowisko życia mchów.", ua: "Вкажеш вологе середовище життя мохів." },
        { pl: "Wskażesz chwytniki, łodyżkę i listki.", ua: "Вкажеш ризоїди, стебельце і листочки." },
        { pl: "Wyjaśnisz, czym chwytniki różnią się od korzenia.", ua: "Поясниш, чим ризоїди відрізняються від кореня." },
        { pl: "Opiszesz puszkę i rozmnażanie zarodnikami.", ua: "Опишеш коробочку і розмноження спорами." },
        { pl: "Podasz znaczenie mchów: woda i torf.", ua: "Назвеш значення мохів: вода і торф." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "mech", ua: "мох" },
        { pl: "chwytniki", ua: "ризоїди" },
        { pl: "łodyżka", ua: "стебельце" },
        { pl: "listki", ua: "листочки" },
        { pl: "puszka zarodniona", ua: "коробочка зі спорами" },
        { pl: "zarodnik", ua: "спора" },
        { pl: "torfowiec", ua: "сфагнум" },
        { pl: "torf", ua: "торф" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l25-zacznijmy.png", {
        alt: { pl: "Poduszka mchu w lesie", ua: "Подушка моху в лісі" },
        title: { pl: "Dział V: różnorodność roślin. Dziś pierwsza grupa — mchy.", ua: "Розділ V: різноманітність рослин. Сьогодні перша група — мохи." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 zielonej poduszki mchu na pniu lub kamieniu w wilgotnym lesie, dzień. Etykieta PL: mech. Bez paproci, bez kwiatu, bez szyszek, bez porostu jako jedynego motywu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 20 porost nie był mchem. Mech to roślina. Dziś jej budowa, zarodniki i po co nam mchy w lesie.",
          "Korzeń, łodygę i liść z lekcji 22–24 tu tylko porównamy: mech ma inne, drobniejsze części. Paprocie — następna lekcja. Kwiatu i nasion nie ma."
        ],
        ua: [
          "На уроці 20 лишайник не був мохом. Мох — рослина. Сьогодні його будова, спори і навіщо мохи в лісі.",
          "Корінь, стебло і листок з уроків 22–24 тут лише порівняємо: мох має інші, дрібніші частини. Папороті — наступний урок. Квітки і насіння немає."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Gdzie żyją mchy", ua: "Де живуть мохи" },
      visual: vizGh("l25-srodowisko.png", {
        alt: { pl: "Mech w cieniu i wilgoci", ua: "Мох у затінку і волозі" },
        title: { pl: "Mchy lubią wilgoć. W suszy zasychają, po deszczu znów zielone.", ua: "Мохи люблять вологу. У посуху всихають, після дощу знову зелені." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 runo leśne — cień i wilgoć. 2 mech na kamieniu / korze. 3 torfowisko / bagno. Napis: środowisko mchów. Bez paproci jako głównego motywu. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mchy rosną tam, gdzie jest wilgotno: w lesie, na kamieniach, na korze, na dachu od północy, na torfowisku.",
          "Nie mają drewna i łyka jak drzewo (lekcja 21). Wodę wciągają całą powierzchnią — dlatego susza im szkodzi, a deszcz je „budzi”.",
          "To nie znaczy, że mech jest glonem z lekcji 19. To roślina lądowa, tylko bardzo zależna od wody."
        ],
        ua: [
          "Мохи ростуть там, де волого: у лісі, на каменях, на корі, на даху з півночі, на болоті.",
          "Не мають деревини і лубу як дерево (урок 21). Воду вбирають усією поверхнею — тому посуха шкодить, а дощ їх «будить».",
          "Це не означає, що мох — водорість з уроку 19. Це наземна рослина, лише дуже залежна від води."
        ]
      },
      task: {
        id: "l25-e1",
        type: "single-choice",
        question: { pl: "Jakie środowisko wybierają mchy?", ua: "Яке середовище обирають мохи?" },
        options: [
          { id: "a", label: { pl: "wilgotne i zwykle cieniste miejsca", ua: "вологі й зазвичай затінені місця" } },
          { id: "b", label: { pl: "tylko suchą pustynię", ua: "лише суху пустелю" } },
          { id: "c", label: { pl: "tylko słoną wodę oceanu", ua: "лише солону воду океану" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgoć i cień. Nie pustynia i nie ocean jako jedyne miejsce.", ua: "Волога і затінок." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Środowisko", ua: "Середовище" },
      visual: tree({
        layout: "fork",
        root: { pl: "mchy", ua: "мохи" },
        items: [
          { pl: "wilgoć", ua: "волога" },
          { pl: "cień", ua: "затінок" },
          { pl: "las / bagno", ua: "ліс / болото" }
        ]
      }),
      items: [
        { pl: "wilgoć — woda całą powierzchnią", ua: "волога — вода всією поверхнею" },
        { pl: "cień — runo, kora, kamień", ua: "затінок — підстилка, кора, камінь" },
        { pl: "bagno — np. torfowiec", ua: "болото — напр. сфагнум" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Chwytniki, łodyżka, listki", ua: "Ризоїди, стебельце, листочки" },
      visual: vizGh("l25-budowa.png", {
        alt: { pl: "Mech z chwytnikami, łodyżką i listkami", ua: "Мох із ризоїдами, стебельцем і листочками" },
        title: { pl: "Drobne części. Inne nazwy niż u roślin z lekcji 22–24.", ua: "Дрібні частини. Інші назви, ніж у рослин з уроків 22–24." },
        prompt: { pl: "Edukacyjny schemat 16:9 jednej rośliny mchu. Etykiety PL: listki; łodyżka; chwytniki (przy podłożu). Bez puszki na tym kadrze. Bez przekroju liścia z lekcji 24. Bez korzenia z włośnikami. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Listki"), " są drobne i zielone — tu fotosynteza (równanie z lekcji 9). To nie blaszka i ogonek dębu z lekcji 24."],
          ["", em("Łodyżka"), " trzyma listki. Cienka, bez słojów pnia z lekcji 23."],
          ["", em("Chwytniki"), " przytwierdzają mech do podłoża. Wyglądają jak nitki — nie jak korzeń z włośnikami (lekcja 22)."]
        ],
        ua: [
          ["", em("Листочки"), " дрібні й зелені — тут фотосинтез (рівняння з уроку 9). Це не пластинка і черешок дуба з уроку 24."],
          ["", em("Стебельце"), " тримає листочки. Тонке, без річних кілець стовбура з уроку 23."],
          ["", em("Ризоїди"), " прикріплюють мох до підстилки. Виглядають як нитки — не як корінь із волосками (урок 22)."]
        ]
      },
      task: {
        id: "l25-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy części zielonego mchu.", ua: "Познач три частини зеленого моху." },
        options: [
          { id: "a", label: { pl: "chwytniki", ua: "ризоїди" } },
          { id: "b", label: { pl: "łodyżka", ua: "стебельце" } },
          { id: "c", label: { pl: "listki", ua: "листочки" } },
          { id: "d", label: { pl: "kapelusz grzyba", ua: "шапинка гриба" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy części ciała mchu. Kapelusz = grzyb (L20).", ua: "Три частини тіла моху. Шапинка = гриб." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Części mchu", ua: "Частини моху" },
      visual: tree({
        layout: "nested",
        root: { pl: "mech", ua: "мох" },
        groups: [
          {
            title: { pl: "listki", ua: "листочки" },
            items: [{ pl: "fotosynteza", ua: "фотосинтез" }]
          },
          {
            title: { pl: "łodyżka", ua: "стебельце" },
            items: [{ pl: "trzyma listki", ua: "тримає листочки" }]
          },
          {
            title: { pl: "chwytniki", ua: "ризоїди" },
            items: [{ pl: "przytwierdza", ua: "прикріплює" }]
          }
        ]
      }),
      items: [
        { pl: "listki — drobne, zielone", ua: "листочки — дрібні, зелені" },
        { pl: "łodyżka — oś mchu", ua: "стебельце — вісь моху" },
        { pl: "chwytniki — nitki przy podłożu", ua: "ризоїди — нитки біля підстилки" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Nie korzeń, nie liść", ua: "Не корінь, не листок" },
      visual: vizGh("l25-nie-korzen.png", {
        alt: { pl: "Chwytniki obok korzenia z włośnikami", ua: "Ризоїди поряд із коренем із волосками" },
        title: { pl: "Podobna robota, inna budowa.", ua: "Схожа робота, інша будова." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA: nitkowate chwytniki mchu, etykieta PL: chwytniki — przytwierdzają, nie są korzeniem. PRAWA: korzeń z włośnikami (przypomnienie L22), etykieta: korzeń. Bez stref czepca. Bez paproci. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Korzeń z lekcji 22 ma czepiec, włośniki i walec. Chwytniki tego nie mają — to cienkie wypustki.",
          "Listki mchu nie mają warstw palisady i gąbki z lekcji 24. Łodyżka nie ma słojów.",
          "Dlatego mówimy listki, łodyżka, chwytniki — żeby nie mylić z organami drzewa i kwiatów (kwiaty później)."
        ],
        ua: [
          "Корінь з уроку 22 має чохлик, волоски і циліндр. Ризоїди цього не мають — це тонкі вирости.",
          "Листочки моху не мають шарів палісади і губки з уроку 24. Стебельце не має кілець.",
          "Тому кажемо листочки, стебельце, ризоїди — щоб не плутати з органами дерева і квітів (квіти пізніше)."
        ]
      },
      task: {
        id: "l25-e3",
        type: "true-false",
        question: { pl: "Chwytniki przytwierdzają mech, ale nie są korzeniem z włośnikami.", ua: "Ризоїди прикріплюють мох, але не є коренем із волосками." },
        answer: true,
        explanation: { pl: "Podobna funkcja (trzymać się podłoża), inna budowa.", ua: "Схожа функція, інша будова." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Inne nazwy, inna budowa", ua: "Інші назви, інша будова" },
      visual: tree({
        layout: "fork",
        root: { pl: "mech", ua: "мох" },
        items: [
          { pl: "chwytniki ≠ korzeń", ua: "ризоїди ≠ корінь" },
          { pl: "listki ≠ liść", ua: "листочки ≠ листок" },
          { pl: "łodyżka ≠ pień", ua: "стебельце ≠ стовбур" }
        ]
      }),
      items: [
        { pl: "chwytniki — nie czepiec i nie włośniki", ua: "ризоїди — не чохлик і не волоски" },
        { pl: "listki — nie blaszka dębu", ua: "листочки — не пластинка дуба" },
        { pl: "łodyżka — nie słoje pnia", ua: "стебельце — не річні кільця" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Puszka i zarodniki", ua: "Коробочка і спори" },
      visual: vizGh("l25-puszka.png", {
        alt: { pl: "Puszka zarodniona na trzonku nad mchem", ua: "Коробочка зі спорами на ніжці над мохом" },
        title: { pl: "W puszce powstają zarodniki. Woda pomaga mchom się rozmnażać.", ua: "У коробочці виникають спори. Вода допомагає мохам розмножуватися." },
        prompt: { pl: "Edukacyjny schemat 16:9. Zielony mech, z niego cienki trzonek i puszka. Etykiety PL: łodyżka z listkami; trzonek; puszka zarodniona; zarodniki (drobny proszek, nie groza). Napis: rozmnażanie zarodnikami. Bez kwiatu, bez nasion, bez kupki zarodni paproci. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Na szczycie mchu bywa ", em("puszka zarodniona"), " na cienkim trzonku. W środku powstają ", em("zarodniki"), "."],
          "Zarodnik to drobna komórka do rozsiewu. Nie myl z zarodnikami grzyba z lekcji 20: tu puszka mchu, tam blaszki kapelusza.",
          "Mchy nie mają kwiatu ani nasion (to później). Do zapłodnienia potrzebują kropli wody — kolejny powód, by żyć w wilgoci. Paprocie też mają zarodniki, ale inną budowę — lekcja 26."
        ],
        ua: [
          ["На верхівці моху буває ", em("коробочка зі спорами"), " на тонкій ніжці. Всередині виникають ", em("спори"), "."],
          "Спора — дрібна клітина для поширення. Не плутати зі спорами гриба з уроку 20: тут коробочка моху, там пластинки шапинки.",
          "Мохи не мають квітки і насіння (це пізніше). Для запліднення потрібна крапля води — ще одна причина жити у волозі. Папороті теж мають спори, але іншу будову — урок 26."
        ]
      },
      task: {
        id: "l25-e4",
        type: "single-choice",
        question: { pl: "Gdzie u mchu powstają zarodniki?", ua: "Де в моху виникають спори?" },
        options: [
          { id: "a", label: { pl: "w puszce zarodnionej", ua: "в коробочці зі спорами" } },
          { id: "b", label: { pl: "w blaszkach kapelusza grzyba", ua: "у пластинках шапинки гриба" } },
          { id: "c", label: { pl: "w kwiecie", ua: "у квітці" } }
        ],
        answer: "a",
        explanation: { pl: "Puszka mchu. Nie grzyb (L20) i nie kwiat (później).", ua: "Коробочка моху. Не гриб і не квітка." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od zarodnika znowu mech", ua: "Від спори знову мох" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Zarodnik, młody mech, puszka, nowe zarodniki", ua: "Спора, молодий мох, коробочка, нові спори" },
        items: [
          { pl: "zarodnik", ua: "спора" },
          { pl: "młody mech", ua: "молодий мох" },
          { pl: "puszka", ua: "коробочка" },
          { pl: "nowe zarodniki", ua: "нові спори" }
        ],
        caption: { pl: "do zapłodnienia: kropla wody", ua: "для запліднення: крапля води" }
      }),
      items: [
        { pl: "zarodniki — rozsiew, nie nasiona", ua: "спори — поширення, не насіння" },
        { pl: "puszka — na trzonku nad mchem", ua: "коробочка — на ніжці над мохом" },
        { pl: "woda — potrzebna do rozmnażania", ua: "вода — потрібна для розмноження" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Torfowiec i znaczenie", ua: "Сфагнум і значення" },
      visual: vizGh("l25-torfowiec.png", {
        alt: { pl: "Torfowiec i warstwa torfu", ua: "Сфагнум і шар торфу" },
        title: { pl: "Mchy trzymają wodę. Z torfowca powstaje torf.", ua: "Мохи тримають воду. Зі сфагнуму виникає торф." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 poduszka mchu chłonie deszcz — zatrzymuje wodę. 2 torfowiec na torfowisku. 3 przekrój gleby: torf. Napis: znaczenie mchów. Bez kopalni i dymu. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Poduszka mchu działa jak gąbka: chłonie deszcz i powoli oddaje wodę. Chroni glebę przed spływem i daje schronienie drobnym zwierzętom.",
          ["", em("Torfowiec"), " żyje na torfowiskach i trzyma szczególnie dużo wody. Z obumarłych mchów, bez powietrza, powstaje ", em("torf"), "."],
          "Torf to zalegające szczątki roślin — nie myl z korzeniem spichrzowym marchwi (lekcja 22) ani z bulwą ziemniaka (lekcja 23)."
        ],
        ua: [
          "Подушка моху діє як губка: вбирає дощ і повільно віддає воду. Захищає ґрунт від змиву і дає сховок дрібним тваринам.",
          ["", em("Сфагнум"), " живе на болотах і тримає особливо багато води. З відмерлих мохів, без повітря, виникає ", em("торф"), "."],
          "Торф — покладені рештки рослин. Не плутати з запасаючим коренем моркви (урок 22) і з бульбою картоплі (урок 23)."
        ]
      },
      task: {
        id: "l25-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz znaczenie mchów z tej lekcji.", ua: "Познач значення мохів з цього уроку." },
        options: [
          { id: "a", label: { pl: "zatrzymują wodę", ua: "затримують воду" } },
          { id: "b", label: { pl: "z torfowca powstaje torf", ua: "зі сфагнуму виникає торф" } },
          { id: "c", label: { pl: "dają schronienie drobnym zwierzętom", ua: "дають сховок дрібним тваринам" } },
          { id: "d", label: { pl: "wytwarzają nasiona w kwiecie", ua: "виробляють насіння у квітці" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Woda, torf, schronienie. Kwiat i nasiona — później.", ua: "Вода, торф, сховок. Квітка і насіння — пізніше." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Po co mchy", ua: "Навіщо мохи" },
      visual: tree({
        layout: "fork",
        root: { pl: "mchy", ua: "мохи" },
        items: [
          { pl: "zatrzymują wodę", ua: "тримають воду" },
          { pl: "torf", ua: "торф" },
          { pl: "schronienie", ua: "сховок" }
        ]
      }),
      items: [
        { pl: "gąbka w lesie — wolniejszy spływ wody", ua: "губка в лісі — повільніший стік води" },
        { pl: "torfowiec → torf", ua: "сфагнум → торф" },
        { pl: "schronienie w poduszce mchu", ua: "сховок у подушці моху" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Środowisko", ua: "Практика. Середовище" },
      task: {
        id: "l25-p1",
        type: "single-choice",
        question: { pl: "Mech w runie leśnym lub na kamieniu wybiera przede wszystkim:", ua: "Мох у лісовій підстилці чи на камені обирає передусім:" },
        options: [
          { id: "a", label: { pl: "wilgoć (często też cień)", ua: "вологу (часто також затінок)" } },
          { id: "b", label: { pl: "suchy piasek pustyni jako jedyne miejsce", ua: "сухий пісок пустелі як єдине місце" } },
          { id: "c", label: { pl: "słoną wodę oceanu", ua: "солону воду океану" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgotne, zwykle cieniste miejsca.", ua: "Вологі, зазвичай затінені місця." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Części", ua: "Частини" },
      task: {
        id: "l25-p2",
        type: "single-choice",
        question: { pl: "Chwytniki, łodyżka i listki to:", ua: "Ризоїди, стебельце і листочки — це:" },
        options: [
          { id: "a", label: { pl: "trzy części zielonego mchu", ua: "три частини зеленого моху" } },
          { id: "b", label: { pl: "strefy korzenia z lekcji 22", ua: "зони кореня з уроку 22" } },
          { id: "c", label: { pl: "kapelusz, trzon i blaszki grzyba", ua: "шапинка, ніжка і пластинки гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Budowa mchu. Nie korzeń i nie grzyb.", ua: "Будова моху. Не корінь і не гриб." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Chwytniki", ua: "Ризоїди" },
      task: {
        id: "l25-p3",
        type: "true-false",
        question: { pl: "Chwytniki mchu nie są korzeniem: nie mają czepca ani włośników.", ua: "Ризоїди моху не є коренем: не мають чохлика і волосків." },
        answer: true,
        explanation: { pl: "Nitki przy podłożu ≠ korzeń (L22).", ua: "Нитки біля підстилки ≠ корінь." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zarodniki", ua: "Спори" },
      task: {
        id: "l25-p4",
        type: "single-choice",
        question: { pl: "Mchy rozsiewają się głównie przez:", ua: "Мохи поширюються здебільшого через:" },
        options: [
          { id: "a", label: { pl: "zarodniki z puszki", ua: "спори з коробочки" } },
          { id: "b", label: { pl: "nasiona z kwiatu", ua: "насіння з квітки" } },
          { id: "c", label: { pl: "słoje pnia", ua: "річні кільця стовбура" } }
        ],
        answer: "a",
        explanation: { pl: "Puszka → zarodniki. Kwiat i nasiona później. Słoje = drzewo (L23).", ua: "Коробочка → спори." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znaczenie", ua: "Значення" },
      task: {
        id: "l25-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o znaczeniu mchów.", ua: "Познач правдиві речення про значення мохів." },
        options: [
          { id: "a", label: { pl: "poduszka mchu zatrzymuje wodę", ua: "подушка моху затримує воду" } },
          { id: "b", label: { pl: "z torfowca może powstać torf", ua: "зі сфагнуму може виникнути торф" } },
          { id: "c", label: { pl: "mech to to samo co porost z lekcji 20", ua: "мох — те саме, що лишайник з уроку 20" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Woda i torf. Porost = grzyb + glon (L20), nie mech.", ua: "Вода і торф. Лишайник ≠ мох." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Środowisko", ua: "Перевірка 1. Середовище" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l25-s1",
        type: "single-choice",
        question: { pl: "Gdzie wskażesz typowe środowisko mchów?", ua: "Де вкажеш типове середовище мохів?" },
        options: [
          { id: "a", label: { pl: "wilgotne miejsca (las, kora, kamień, bagno)", ua: "вологі місця (ліс, кора, камінь, болото)" } },
          { id: "b", label: { pl: "tylko suche piaski pustyni", ua: "лише сухі піски пустелі" } },
          { id: "c", label: { pl: "tylko wnętrze komórki bakteryjnej", ua: "лише внутрішність бактеріальної клітини" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgoć. Nie pustynia jako jedyne miejsce.", ua: "Волога." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Części", ua: "Перевірка 2. Частини" },
      task: {
        id: "l25-s2",
        type: "multiple-choice",
        question: { pl: "Które trzy części wskażesz na zielonym mchu?", ua: "Які три частини вкажеш на зеленому моху?" },
        options: [
          { id: "a", label: { pl: "chwytniki", ua: "ризоїди" } },
          { id: "b", label: { pl: "łodyżkę", ua: "стебельце" } },
          { id: "c", label: { pl: "listki", ua: "листочки" } },
          { id: "d", label: { pl: "blaszkę i ogonek dębu", ua: "пластинку і черешок дуба" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy części mchu. Blaszka = liść (L24).", ua: "Три частини моху. Пластинка = листок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Chwytniki", ua: "Перевірка 3. Ризоїди" },
      task: {
        id: "l25-s3",
        type: "true-false",
        question: { pl: "Chwytniki różnią się od korzenia: przytwierdzają mech, ale nie mają czepca ani włośników.", ua: "Ризоїди відрізняються від кореня: прикріплюють мох, але не мають чохлика і волосків." },
        answer: true,
        explanation: { pl: "Funkcja podobna, budowa inna.", ua: "Функція схожа, будова інша." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Puszka", ua: "Перевірка 4. Коробочка" },
      task: {
        id: "l25-s4",
        type: "single-choice",
        question: { pl: "Jak mchy się rozmnażają i gdzie powstają zarodniki?", ua: "Як мохи розмножуються і де виникають спори?" },
        options: [
          { id: "a", label: { pl: "zarodnikami; zarodniki powstają w puszce", ua: "спорами; спори виникають у коробочці" } },
          { id: "b", label: { pl: "nasionami z kwiatu", ua: "насінням із квітки" } },
          { id: "c", label: { pl: "tylko słojami pnia", ua: "лише річними кільцями стовбура" } }
        ],
        answer: "a",
        explanation: { pl: "Puszka → zarodniki. Nie kwiat.", ua: "Коробочка → спори. Не квітка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Znaczenie", ua: "Перевірка 5. Значення" },
      task: {
        id: "l25-s5",
        type: "multiple-choice",
        question: { pl: "Które znaczenie mają mchy?", ua: "Яке значення мають мохи?" },
        options: [
          { id: "a", label: { pl: "zatrzymują wodę", ua: "затримують воду" } },
          { id: "b", label: { pl: "z torfowca powstaje torf", ua: "зі сфагнуму виникає торф" } },
          { id: "c", label: { pl: "są kwiatem jabłoni", ua: "є квіткою яблуні" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Woda i torf. Kwiat — później.", ua: "Вода і торф. Квітка — пізніше." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "mchy", ua: "мохи" },
        items: [
          { pl: "zatrzymują wodę", ua: "тримають воду" },
          { pl: "torf", ua: "торф" },
          { pl: "schronienie", ua: "сховок" }
        ]
      }),
      text: {
        pl: [
          "Wilgoć i zwykle cień.",
          "Chwytniki, łodyżka, listki.",
          "Chwytniki ≠ korzeń.",
          "Puszka → zarodniki (nie nasiona).",
          "Woda w lesie i torf.",
          "Paprocie — lekcja 26. Kwiat i nasiona — później."
        ],
        ua: [
          "Волога і зазвичай затінок.",
          "Ризоїди, стебельце, листочки.",
          "Ризоїди ≠ корінь.",
          "Коробочка → спори (не насіння).",
          "Вода в лісі і торф.",
          "Папороті — урок 26. Квітка і насіння — пізніше."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać wilgotne środowisko mchów.", ua: "Можу вказати вологе середовище мохів." },
        { pl: "Potrafię wskazać chwytniki, łodyżkę i listki.", ua: "Можу вказати ризоїди, стебельце і листочки." },
        { pl: "Potrafię wyjaśnić różnicę chwytników i korzenia.", ua: "Можу пояснити різницю ризоїдів і кореня." },
        { pl: "Potrafię opisać puszkę i zarodniki.", ua: "Можу описати коробочку і спори." },
        { pl: "Potrafię podać znaczenie: woda i torf.", ua: "Можу назвати значення: вода і торф." }
      ]
    }
  ]
};
