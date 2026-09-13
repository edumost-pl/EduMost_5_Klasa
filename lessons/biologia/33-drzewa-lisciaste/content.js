function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L33_Drzewa_lisciaste/images/";

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
        { pl: "Rozpoznasz dąb: liść klapowany, żołądź.", ua: "Розпізнаєш дуб: листок лопатевий, жолудь." },
        { pl: "Rozpoznasz buk: gładka, szara kora.", ua: "Розпізнаєш бук: гладка сіра кора." },
        { pl: "Rozpoznasz brzozę: biała kora.", ua: "Розпізнаєш березу: біла кора." },
        { pl: "Rozpoznasz klon (skrzydełka) i lipę (liść sercowaty).", ua: "Розпізнаєш клен (крильця) і липу (серцеподібний листок)." },
        { pl: "Podasz znaczenie okrytonasiennych: pokarm, tlen, drewno.", ua: "Назвеш значення покритонасінних: пожива, кисень, деревина." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "drzewo liściaste", ua: "листяне дерево" },
        { pl: "dąb", ua: "дуб" },
        { pl: "żołądź", ua: "жолудь" },
        { pl: "buk", ua: "бук" },
        { pl: "brzoza", ua: "береза" },
        { pl: "klon", ua: "клен" },
        { pl: "lipa", ua: "липа" },
        { pl: "drewno", ua: "деревина" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l33-zacznijmy.png", {
        alt: { pl: "Las liściasty z koronami dębu, brzozy, klonu", ua: "Листяний ліс із кронами дуба, берези, клена" },
        title: { pl: "Lekcja 28: iglaki. Dziś szkolny zestaw liściastych.", ua: "Урок 28: хвойні. Сьогодні шкільний набір листяних." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 lasu liściastego latem lub wczesną jesienią. Etykieta PL: drzewa liściaste. Bez szyszek sosny jako głównego motywu. Bez kiełkującej fasoli. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Sosna i świerk — lekcja 28. Dziś rodzime drzewa z płaskimi liśćmi: dąb, buk, brzoza, klon, lipa.",
          "To okrytonasienne (lekcja 29): kwiaty i owoce, nie szyszki. Mchy, paprocie i iglaki razem — lekcja 34. Kiełkowanie — już było (32)."
        ],
        ua: [
          "Сосна і ялина — урок 28. Сьогодні місцеві дерева з плоским листям: дуб, бук, береза, клен, липа.",
          "Це покритонасінні (урок 29): квітки і плоди, не шишки. Мохи, папороті і хвойні разом — урок 34. Проростання — уже було (32)."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Liść albo igła", ua: "Листок або хвоя" },
      visual: tree({
        layout: "fork",
        root: { pl: "drzewo", ua: "дерево" },
        items: [
          { pl: "liściaste", ua: "листяні" },
          { pl: "iglaste L28", ua: "хвойні 28" }
        ]
      }),
      items: [
        { pl: "dziś: dąb, buk, brzoza, klon, lipa", ua: "сьогодні: дуб, бук, береза, клен, липа" },
        { pl: "igły — lekcja 28", ua: "хвоя — урок 28" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Dąb", ua: "Дуб" },
      visual: vizGh("l33-dab.png", {
        alt: { pl: "Liść dębu z klapami i żołądź w miseczce", ua: "Листок дуба з лопатями і жолудь у плюсці" },
        title: { pl: "Klapowany liść. Żołądź. Szorstka kora.", ua: "Лопатевий листок. Жолудь. Шорстка кора." },
        prompt: { pl: "Edukacyjna infografika 16:9 dębu. Etykiety PL: liść klapowany (zaokrąglone zatoki); żołądź w miseczce; spękana kora. Napis: dąb. Bez skrzydełek klonu na tym kadrze. Bez szyszki. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Dąb"), ": liść ", em("klapowany"), " — zatoki zaokrąglone. Owoc to ", em("żołądź"), " w miseczce."],
          "Kora starych dębów jest gruba i spękana. Korona bywa szeroka.",
          "Nie myl z klonem: u klonu brzeg liścia jest ząbkowany, a owoc to skrzydełka, nie żołądź."
        ],
        ua: [
          ["", em("Дуб"), ": листок ", em("лопатевий"), " — вирізи заокруглені. Плід — ", em("жолудь"), " у плюсці."],
          "Кора старих дубів товста і потріскана. Крона буває широка.",
          "Не плутати з кленом: у клена край листка зубчастий, а плід — крильця, не жолудь."
        ]
      },
      task: {
        id: "l33-e1",
        type: "single-choice",
        question: { pl: "Po czym poznasz dąb?", ua: "По чому впізнаєш дуб?" },
        options: [
          { id: "a", label: { pl: "klapowany liść i żołądź", ua: "лопатевий листок і жолудь" } },
          { id: "b", label: { pl: "dwie igły w pęczku", ua: "дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "biała kora jak u brzozy", ua: "біла кора як у берези" } }
        ],
        answer: "a",
        explanation: { pl: "Żołądź + klapy. Pęczek = sosna (L28). Biel = brzoza.", ua: "Жолудь + лопаті." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Żołądź to nie szyszka", ua: "Жолудь — не шишка" },
      visual: tree({
        layout: "fork",
        root: { pl: "dąb", ua: "дуб" },
        items: [
          { pl: "liść — klapy", ua: "листок — лопаті" },
          { pl: "owoc — żołądź", ua: "плід — жолудь" }
        ]
      }),
      items: [
        { pl: "żołądź = owoc okrytonasiennych", ua: "жолудь = плід покритонасінних" },
        { pl: "szyszka sosny = lekcja 27–28", ua: "шишка сосни = уроки 27–28" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Buk", ua: "Бук" },
      visual: vizGh("l33-buk.png", {
        alt: { pl: "Gładka szara kora buka i jajowate liście", ua: "Гладка сіра кора бука і яйцеподібне листя" },
        title: { pl: "Pień jak słoniowa skóra. Gładko, szaro.", ua: "Стовбур як слонова шкіра. Гладко, сіро." },
        prompt: { pl: "Edukacyjna infografika 16:9 buka. Etykiety PL: gładka szara kora; jajowaty liść. Napis: buk. Bez białej kory brzozy. Bez żołędzi. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Buk"), " poznasz z daleka po ", em("gładkiej, szarej korze"), " — jak słoniowa skóra. Nie zrywamy jej."],
          "Liście jajowate, brzeg prawie cały. Jesienią brązowieją. W kolczastej okrywie siedzą orzeszki (bukiew) — to owoc, nie szyszka.",
          "Nie myl z brzozą: brzoza jest biała, nie szara i gładka jak buk."
        ],
        ua: [
          ["", em("Бук"), " впізнаєш здалеку по ", em("гладкій сірій корі"), " — як слонова шкіра. Не зриваємо її."],
          "Листки яйцеподібні, край майже суцільний. Восени буріють. У колючій обгортці сидять горішки — це плід, не шишка.",
          "Не плутати з березою: береза біла, не сіра і гладка як бук."
        ]
      },
      task: {
        id: "l33-e2",
        type: "true-false",
        question: { pl: "Buk rozpoznasz po gładkiej, szarej korze.", ua: "Бук розпізнаєш по гладкій сірій корі." },
        answer: true,
        explanation: { pl: "Gładka i szara. Biel = brzoza.", ua: "Гладка і сіра. Біла = береза." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Brzoza", ua: "Береза" },
      visual: vizGh("l33-brzoza.png", {
        alt: { pl: "Biała kora brzozy z czarnymi kreskami", ua: "Біла кора берези з чорними рисками" },
        title: { pl: "Biała kora. Czarne kreski. Drobne liście.", ua: "Біла кора. Чорні риски. Дрібне листя." },
        prompt: { pl: "Edukacyjna infografika 16:9 brzozy brodawkowatej. Etykiety PL: biała kora; czarne kreski; drobny liść. Napis: brzoza. Bez gładkiej szarej kory buka. Bez igieł. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Brzoza"), ": ", em("biała kora"), " z czarnymi kreskami. Gałązki często zwisają. Liście drobne, ząbkowane."],
          "Kory żywego drzewa nie obdzieramy „na pamiątkę”.",
          "Nie myl z bukiem (szary, gładki pień) ani z sosną (igły, lekcja 28)."
        ],
        ua: [
          ["", em("Береза"), ": ", em("біла кора"), " з чорними рисками. Гілки часто звисають. Листки дрібні, зубчасті."],
          "Кору живого дерева не обдираємо «на пам’ять».",
          "Не плутати з буком (сірий гладкий стовбур) і з сосною (хвоя, урок 28)."
        ]
      },
      task: {
        id: "l33-e3",
        type: "single-choice",
        question: { pl: "Biała kora z czarnymi kreskami to cecha:", ua: "Біла кора з чорними рисками — ознака:" },
        options: [
          { id: "a", label: { pl: "brzozy", ua: "берези" } },
          { id: "b", label: { pl: "buka", ua: "бука" } },
          { id: "c", label: { pl: "świerka", ua: "ялини" } }
        ],
        answer: "a",
        explanation: { pl: "Brzoza = biel. Buk = szary gładki. Świerk = L28.", ua: "Береза = біла кора." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Kora: szara albo biała", ua: "Кора: сіра або біла" },
      visual: tree({
        layout: "fork",
        root: { pl: "kora", ua: "кора" },
        items: [
          { pl: "gładka, szara — buk", ua: "гладка, сіра — бук" },
          { pl: "biała — brzoza", ua: "біла — береза" }
        ]
      }),
      items: [
        { pl: "buk — szary pień", ua: "бук — сірий стовбур" },
        { pl: "brzoza — biała kora", ua: "береза — біла кора" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Klon i lipa", ua: "Клен і липа" },
      visual: vizGh("l33-klon-lipa.png", {
        alt: { pl: "Liść i skrzydełka klonu obok sercowatego liścia lipy", ua: "Листок і крильця клена поряд із серцеподібним листком липи" },
        title: { pl: "Klon: ząbkowane klapy i skrzydełka. Lipa: liść jak serce.", ua: "Клен: зубчасті лопаті і крильця. Липа: листок як серце." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: liść klonu z ząbkowanym brzegiem i para skrzydełek, napis: klon. PRAWA: sercowaty liść lipy, napis: lipa. Bez żołędzia. Bez pszczoły jako tematu zapylenia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Klon"), ": liść klapowany, brzeg ", em("ząbkowany"), ". Owoc — para ", em("skrzydełek"), " (z lekcji 31 wiesz, że wiatr je niesie — dziś to cecha rozpoznawcza)."],
          ["", em("Lipa"), ": liść ", em("sercowaty"), ", u nasady często nierówny. Kwiaty pachną; z nektaru bywa miód lipowy — bez rozbierania pręcików (lekcja 30)."],
          "Dąb też ma klapy, ale zaokrąglone i żołądź. Klon ma ząbki i skrzydełka."
        ],
        ua: [
          ["", em("Клен"), ": листок лопатевий, край ", em("зубчастий"), ". Плід — пара ", em("крилець"), " (з уроку 31 знаєш, що вітер їх несе — сьогодні це ознака розпізнавання)."],
          ["", em("Липа"), ": листок ", em("серцеподібний"), ", біля основи часто нерівний. Квітки пахнуть; з нектару буває липовий мед — без розбору тичинок (урок 30)."],
          "Дуб теж має лопаті, але заокруглені і жолудь. Клен має зубці і крильця."
        ]
      },
      task: {
        id: "l33-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz cechy z tej pary drzew.", ua: "Познач ознаки цієї пари дерев." },
        options: [
          { id: "a", label: { pl: "klon — skrzydełka i ząbkowany liść", ua: "клен — крильця і зубчастий листок" } },
          { id: "b", label: { pl: "lipa — liść sercowaty", ua: "липа — серцеподібний листок" } },
          { id: "c", label: { pl: "oba mają żołędzie jak dąb", ua: "обидва мають жолуді як дуб" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Klon = skrzydełka. Lipa = serce. Żołądź = dąb.", ua: "Клен = крильця. Липа = серце." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Szkolna piątka", ua: "Шкільна п’ятірка" },
      visual: tree({
        layout: "nested",
        root: { pl: "liściaste", ua: "листяні" },
        groups: [
          {
            title: { pl: "dąb", ua: "дуб" },
            items: [{ pl: "żołądź", ua: "жолудь" }]
          },
          {
            title: { pl: "buk", ua: "бук" },
            items: [{ pl: "gładka kora", ua: "гладка кора" }]
          },
          {
            title: { pl: "brzoza", ua: "береза" },
            items: [{ pl: "biała kora", ua: "біла кора" }]
          },
          {
            title: { pl: "klon, lipa", ua: "клен, липа" },
            items: [{ pl: "skrzydełka / serce", ua: "крильця / серце" }]
          }
        ]
      }),
      items: [
        { pl: "dąb — żołądź, klapy zaokrąglone", ua: "дуб — жолудь, лопаті заокруглені" },
        { pl: "buk — gładka szara kora", ua: "бук — гладка сіра кора" },
        { pl: "brzoza — biała kora", ua: "береза — біла кора" },
        { pl: "klon — skrzydełka; lipa — serce", ua: "клен — крильця; липа — серце" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Pokarm, tlen, drewno", ua: "Пожива, кисень, деревина" },
      visual: vizGh("l33-znaczenie.png", {
        alt: { pl: "Owoce i zboże, las, belki drewna", ua: "Плоди і збіжжя, ліс, балки деревини" },
        title: { pl: "Jemy, oddychamy, budujemy. To okrytonasienne.", ua: "Їмо, дихаємо, будуємо. Це покритонасінні." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 jabłko / kłos / warzywo — pokarm. 2 las liściasty — tlen. 3 deski / belki — drewno. Napis: znaczenie okrytonasiennych. Bez wycinki jako grozy. Bez szyszki sosny. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Okrytonasienne dają ", em("pokarm"), ": owoce, warzywa, zboża. Drzewa liściaste dają też ", em("drewno"), " (meble, budulec)."],
          ["Z fotosyntezy (lekcja 9) jest ", em("tlen"), ". Las trzyma glebę i daje schronienie — jak iglaki, tylko dziś ta grupa."],
          "Nie atlas wszystkich krzewów i nie doświadczenie ze słoikiem. Klucz drzew + trzy słowa: pokarm, tlen, drewno."
        ],
        ua: [
          ["Покритонасінні дають ", em("поживу"), ": плоди, овочі, злаки. Листяні дерева дають також ", em("деревину"), " (меблі, будівництво)."],
          ["З фотосинтезу (урок 9) є ", em("кисень"), ". Ліс тримає ґрунт і дає сховок — як хвойні, лише сьогодні ця група."],
          "Не атлас усіх кущів і не дослід із банкою. Ключ дерев + три слова: пожива, кисень, деревина."
        ]
      },
      task: {
        id: "l33-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz znaczenie roślin okrytonasiennych z tej lekcji.", ua: "Познач значення покритонасінних рослин з цього уроку." },
        options: [
          { id: "a", label: { pl: "pokarm (owoce, zboża, warzywa)", ua: "пожива (плоди, злаки, овочі)" } },
          { id: "b", label: { pl: "tlen", ua: "кисень" } },
          { id: "c", label: { pl: "drewno", ua: "деревина" } },
          { id: "d", label: { pl: "nasiona tylko na łusce szyszki", ua: "насіння лише на лусці шишки" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pokarm, tlen, drewno. Szyszka = nagonasienne (L27).", ua: "Пожива, кисень, деревина." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy pożytki", ua: "Три користі" },
      visual: tree({
        layout: "fork",
        root: { pl: "okrytonasienne", ua: "покритонасінні" },
        items: [
          { pl: "pokarm", ua: "пожива" },
          { pl: "tlen", ua: "кисень" },
          { pl: "drewno", ua: "деревина" }
        ]
      }),
      items: [
        { pl: "pokarm — owoce, zboża, warzywa", ua: "пожива — плоди, злаки, овочі" },
        { pl: "tlen — fotosynteza", ua: "кисень — фотосинтез" },
        { pl: "drewno — budulec", ua: "деревина — будівництво" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Dąb", ua: "Практика. Дуб" },
      task: {
        id: "l33-p1",
        type: "single-choice",
        question: { pl: "Żołądź i klapowany liść z zaokrąglonymi zatokami to:", ua: "Жолудь і лопатевий листок із заокругленими вирізами — це:" },
        options: [
          { id: "a", label: { pl: "dąb", ua: "дуб" } },
          { id: "b", label: { pl: "klon", ua: "клен" } },
          { id: "c", label: { pl: "sosna", ua: "сосна" } }
        ],
        answer: "a",
        explanation: { pl: "Dąb = żołądź. Klon = skrzydełka. Sosna = L28.", ua: "Дуб = жолудь." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Buk", ua: "Бук" },
      task: {
        id: "l33-p2",
        type: "true-false",
        question: { pl: "Buk ma gładką, szarą korę.", ua: "Бук має гладку сіру кору." },
        answer: true,
        explanation: { pl: "Szary gładki pień. Biel = brzoza.", ua: "Сірий гладкий стовбур." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Brzoza", ua: "Береза" },
      task: {
        id: "l33-p3",
        type: "single-choice",
        question: { pl: "Białą korę z czarnymi kreskami ma:", ua: "Білу кору з чорними рисками має:" },
        options: [
          { id: "a", label: { pl: "brzoza", ua: "береза" } },
          { id: "b", label: { pl: "buk", ua: "бук" } },
          { id: "c", label: { pl: "jodła", ua: "ялиця" } }
        ],
        answer: "a",
        explanation: { pl: "Brzoza. Buk szary. Jodła = L28.", ua: "Береза." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Klon i lipa", ua: "Клен і липа" },
      task: {
        id: "l33-p4",
        type: "single-choice",
        question: { pl: "Skrzydełka i ząbkowany liść to klon. Sercowaty liść to:", ua: "Крильця і зубчастий листок — клен. Серцеподібний листок — це:" },
        options: [
          { id: "a", label: { pl: "lipa", ua: "липа" } },
          { id: "b", label: { pl: "dąb", ua: "дуб" } },
          { id: "c", label: { pl: "mech", ua: "мох" } }
        ],
        answer: "a",
        explanation: { pl: "Lipa = serce. Dąb = żołądź. Mech = L25.", ua: "Липа = серце." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znaczenie", ua: "Значення" },
      task: {
        id: "l33-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz znaczenie okrytonasiennych z paszportu.", ua: "Познач значення покритонасінних з паспорта." },
        options: [
          { id: "a", label: { pl: "pokarm", ua: "пожива" } },
          { id: "b", label: { pl: "tlen", ua: "кисень" } },
          { id: "c", label: { pl: "drewno", ua: "деревина" } },
          { id: "d", label: { pl: "zarodniki z puszki mchu", ua: "спори з коробочки моху" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pokarm, tlen, drewno. Puszka = L25.", ua: "Пожива, кисень, деревина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Dąb", ua: "Перевірка 1. Дуб" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l33-s1",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz dąb?", ua: "Як розпізнаєш дуб?" },
        options: [
          { id: "a", label: { pl: "liść klapowany i żołądź", ua: "лопатевий листок і жолудь" } },
          { id: "b", label: { pl: "biała kora", ua: "біла кора" } },
          { id: "c", label: { pl: "igły po dwie w pęczku", ua: "хвоя по дві в пучку" } }
        ],
        answer: "a",
        explanation: { pl: "Klapy + żołądź.", ua: "Лопаті + жолудь." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Buk", ua: "Перевірка 2. Бук" },
      task: {
        id: "l33-s2",
        type: "true-false",
        question: { pl: "Buk rozpoznasz po gładkiej, szarej korze.", ua: "Бук розпізнаєш по гладкій сірій корі." },
        answer: true,
        explanation: { pl: "Gładka i szara.", ua: "Гладка і сіра." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Brzoza", ua: "Перевірка 3. Береза" },
      task: {
        id: "l33-s3",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz brzozę?", ua: "Як розпізнаєш березу?" },
        options: [
          { id: "a", label: { pl: "biała kora z czarnymi kreskami", ua: "біла кора з чорними рисками" } },
          { id: "b", label: { pl: "żołądź w miseczce", ua: "жолудь у плюсці" } },
          { id: "c", label: { pl: "szyszki zwisają i kłują", ua: "шишки звисають і колють" } }
        ],
        answer: "a",
        explanation: { pl: "Biel kory. Żołądź = dąb. Szyszki = świerk.", ua: "Біла кора." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Klon i lipa", ua: "Перевірка 4. Клен і липа" },
      task: {
        id: "l33-s4",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz klon i lipę?", ua: "Як розпізнаєш клен і липу?" },
        options: [
          { id: "a", label: { pl: "klon — skrzydełka; lipa — liść sercowaty", ua: "клен — крильця; липа — серцеподібний листок" } },
          { id: "b", label: { pl: "oba mają żołędzie", ua: "обидва мають жолуді" } },
          { id: "c", label: { pl: "oba to mchy z chwytnikami", ua: "обидва — мохи з ризоїдами" } }
        ],
        answer: "a",
        explanation: { pl: "Skrzydełka i serce. Żołądź = dąb.", ua: "Крильця і серце." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Znaczenie", ua: "Перевірка 5. Значення" },
      task: {
        id: "l33-s5",
        type: "multiple-choice",
        question: { pl: "Jakie znaczenie okrytonasiennych podasz?", ua: "Яке значення покритонасінних назвеш?" },
        options: [
          { id: "a", label: { pl: "pokarm", ua: "пожива" } },
          { id: "b", label: { pl: "tlen", ua: "кисень" } },
          { id: "c", label: { pl: "drewno", ua: "деревина" } },
          { id: "d", label: { pl: "tylko szyszki i żywica", ua: "лише шишки і живиця" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pokarm, tlen, drewno. Żywica = iglaki L28.", ua: "Пожива, кисень, деревина." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "liściaste", ua: "листяні" },
        items: [
          { pl: "dąb, buk, brzoza", ua: "дуб, бук, береза" },
          { pl: "klon, lipa", ua: "клен, липа" },
          { pl: "pokarm, tlen, drewno", ua: "пожива, кисень, деревина" }
        ]
      }),
      text: {
        pl: [
          "Dąb: klapy, żołądź.",
          "Buk: gładka szara kora.",
          "Brzoza: biała kora.",
          "Klon: skrzydełka. Lipa: serce.",
          "Okrytonasienne: pokarm, tlen, drewno.",
          "Cztery grupy roślin — lekcja 34."
        ],
        ua: [
          "Дуб: лопаті, жолудь.",
          "Бук: гладка сіра кора.",
          "Береза: біла кора.",
          "Клен: крильця. Липа: серце.",
          "Покритонасінні: пожива, кисень, деревина.",
          "Чотири групи рослин — урок 34."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię rozpoznać dąb.", ua: "Можу розпізнати дуб." },
        { pl: "Potrafię rozpoznać buk.", ua: "Можу розпізнати бук." },
        { pl: "Potrafię rozpoznać brzozę.", ua: "Можу розпізнати березу." },
        { pl: "Potrafię rozpoznać klon i lipę.", ua: "Можу розпізнати клен і липу." },
        { pl: "Potrafię podać znaczenie: pokarm, tlen, drewno.", ua: "Можу назвати значення: пожива, кисень, деревина." }
      ]
    }
  ]
};
