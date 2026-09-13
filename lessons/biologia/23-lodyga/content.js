function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L23_Lodyga/images/";

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
        { pl: "Powiesz, czym pęd różni się od samej łodygi.", ua: "Скажеш, чим пагін відрізняється від самого стебла." },
        { pl: "Wymienisz funkcje łodygi.", ua: "Назвеш функції стебла." },
        { pl: "Wskażesz węzeł, międzywęźle i pąki.", ua: "Вкажеш вузол, міжвузля і бруньки." },
        { pl: "Opiszesz przekrój łodygi: skórkę, korę, wiązki i rdzeń.", ua: "Опишеш переріз стебла: шкірку, кору, пучки і серцевину." },
        { pl: "Wyjaśnisz, skąd biorą się słoje roczne.", ua: "Поясниш, звідки беруться річні кільця." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "pęd", ua: "пагін" },
        { pl: "łodyga", ua: "стебло" },
        { pl: "węzeł", ua: "вузол" },
        { pl: "międzywęźle", ua: "міжвузля" },
        { pl: "pąk", ua: "брунька" },
        { pl: "wiązka przewodząca", ua: "провідний пучок" },
        { pl: "rdzeń", ua: "серцевина" },
        { pl: "słoje roczne", ua: "річні кільця" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l23-zacznijmy.png", {
        alt: { pl: "Pęd: łodyga z liśćmi i pąkami nad ziemią", ua: "Пагін: стебло з листками і бруньками над землею" },
        title: { pl: "Nad ziemią widać pęd. Łodyga to jego „oś”.", ua: "Над землею видно пагін. Стебло — його «вісь»." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 młodej rośliny (fasola lub pelargonia). Etykiety PL: pęd; łodyga; liście; pąk. Korzeń w doniczce bez stref z lekcji 22. Bez kwiatu, owocu, nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Korzeń był pod ziemią (lekcja 22). Dziś część nadziemna: pęd i jego oś — łodyga.",
          "Liścia nie rozbieramy warstwami — to lekcja 24. Kwiatu, owocu i nasion tu nie ma."
        ],
        ua: [
          "Корінь був під землею (урок 22). Сьогодні надземна частина: пагін і його вісь — стебло.",
          "Листок не розбираємо шарами — урок 24. Квітки, плоду і насінини тут немає."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Pęd i łodyga", ua: "Пагін і стебло" },
      visual: vizGh("l23-ped.png", {
        alt: { pl: "Pęd składa się z łodygi, liści i pąków", ua: "Пагін складається зі стебла, листків і бруньок" },
        title: { pl: "Pęd = łodyga + liście + pąki. Łodyga sama nie jest całym pędem.", ua: "Пагін = стебло + листки + бруньки. Стебло саме не є цілим пагоном." },
        prompt: { pl: "Edukacyjna infografika 16:9. Schemat pędu z etykietami PL: łodyga (oś); liście; pąk szczytowy; pąk boczny. Napis: pęd. Liście bez przekroju blaszki. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pęd"), " to zwykle nadziemna część rośliny: łodyga, liście i pąki."],
          ["", em("Łodyga"), " jest osią pędu. Na niej siedzą liście i pąki. Nie mów: „pęd to to samo co łodyga” — łodyga jest częścią pędu."],
          "Na czubku łodygi jest stożek wzrostu pędu (tkanka twórcza, lekcja 21). Dzięki niemu pęd wydłuża się."
        ],
        ua: [
          ["", em("Пагін"), " — зазвичай надземна частина рослини: стебло, листки і бруньки."],
          ["", em("Стебло"), " — вісь пагона. На ньому сидять листки і бруньки. Не кажи: «пагін — те саме, що стебло» — стебло є частиною пагона."],
          "На верхівці стебла є конус наростання пагона (твірна тканина, урок 21). Завдяки йому пагін видовжується."
        ]
      },
      task: {
        id: "l23-e1",
        type: "single-choice",
        question: { pl: "Czym pęd różni się od łodygi?", ua: "Чим пагін відрізняється від стебла?" },
        options: [
          { id: "a", label: { pl: "pęd = łodyga + liście + pąki; łodyga to oś pędu", ua: "пагін = стебло + листки + бруньки; стебло — вісь пагона" } },
          { id: "b", label: { pl: "pęd to to samo co korzeń palowy", ua: "пагін — те саме, що стрижневий корінь" } },
          { id: "c", label: { pl: "łodyga to czepiec korzenia", ua: "стебло — чохлик кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Pęd jest szerszy. Łodyga jest jego osią. Czepiec był na lekcji 22.", ua: "Пагін ширший. Стебло — його вісь. Чохлик був на уроці 22." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Co wchodzi w skład pędu", ua: "Що входить до пагона" },
      visual: tree({
        layout: "nested",
        root: { pl: "pęd", ua: "пагін" },
        groups: [
          {
            title: { pl: "łodyga", ua: "стебло" },
            items: [{ pl: "oś pędu", ua: "вісь пагона" }]
          },
          {
            title: { pl: "liście", ua: "листки" },
            items: [{ pl: "lekcja 24", ua: "урок 24" }]
          },
          {
            title: { pl: "pąki", ua: "бруньки" },
            items: [
              { pl: "szczytowy", ua: "верхівкова" },
              { pl: "boczne", ua: "бічні" }
            ]
          }
        ]
      }),
      items: [
        { pl: "łodyga — oś", ua: "стебло — вісь" },
        { pl: "liście — osobna lekcja", ua: "листки — окремий урок" },
        { pl: "pąki — szczytowy i boczne", ua: "бруньки — верхівкова і бічні" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Funkcje łodygi", ua: "Функції стебла" },
      visual: vizGh("l23-funkcje.png", {
        alt: { pl: "Łodyga podpiera, transportuje i bywa magazynem", ua: "Стебло підпирає, транспортує і буває запасом" },
        title: { pl: "Stelaż. Rury. Czasem zapas albo trochę zieleni.", ua: "Каркас. Труби. Інколи запас або трохи зелені." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 łodyga trzyma liście do światła — podpora. 2 strzałki: drewno w górę, łyko w dół — transport. 3 zielona łodyga / zgrubienie — zapas lub fotosynteza. Bez warstw liścia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Łodyga unosi liście do światła i usztywnia pęd (tkanka wzmacniająca, lekcja 21).",
          "Prowadzi wodę i sole drewnem z korzenia w górę oraz cukry łykiem z liści do reszty rośliny.",
          "U niektórych roślin magazynuje zapas. Zielona łodyga może trochę fotosyntetyzować — ale „fabryka cukru” to głównie liść (lekcja 24)."
        ],
        ua: [
          "Стебло підносить листки до світла і надає пагону жорсткості (механічна тканина, урок 21).",
          "Веде воду і солі деревиною з кореня вгору та цукри лубом із листків до решти рослини.",
          "У деяких рослин запасає. Зелене стебло може трохи фотосинтезувати — але «фабрика цукру» здебільшого листок (урок 24)."
        ]
      },
      task: {
        id: "l23-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz funkcje łodygi.", ua: "Познач функції стебла." },
        options: [
          { id: "a", label: { pl: "podpora pędu i liści", ua: "опора пагона і листків" } },
          { id: "b", label: { pl: "transport wody, soli i cukrów", ua: "транспорт води, солей і цукрів" } },
          { id: "c", label: { pl: "u niektórych — zapas", ua: "у деяких — запас" } },
          { id: "d", label: { pl: "czepiec na czubku korzenia", ua: "чохлик на кінчику кореня" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Podpora, transport, czasem zapas. Czepiec = korzeń (L22).", ua: "Опора, транспорт, інколи запас. Чохлик = корінь." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Po co łodyga", ua: "Навіщо стебло" },
      visual: tree({
        layout: "fork",
        root: { pl: "łodyga", ua: "стебло" },
        items: [
          { pl: "podpora", ua: "опора" },
          { pl: "transport", ua: "транспорт" },
          { pl: "zapas (nie u wszystkich)", ua: "запас (не в усіх)" }
        ]
      }),
      items: [
        { pl: "podpora — liście bliżej światła", ua: "опора — листки ближче до світла" },
        { pl: "transport — drewno w górę, łyko z liści", ua: "транспорт — деревина вгору, луб із листків" },
        { pl: "zapas — nie każda łodyga", ua: "запас — не кожне стебло" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Węzły, międzywęźla, pąki", ua: "Вузли, міжвузля, бруньки" },
      visual: vizGh("l23-wezly.png", {
        alt: { pl: "Węzeł z liściem i pąkiem bocznym, międzywęźle, pąk szczytowy", ua: "Вузол із листком і бічною брунькою, міжвузля, верхівкова брунька" },
        title: { pl: "Liść wyrasta z węzła. Między węzłami jest międzywęźle.", ua: "Листок виростає з вузла. Між вузлами — міжвузля." },
        prompt: { pl: "Edukacyjny schemat 16:9 łodygi. Etykiety PL: pąk szczytowy; międzywęźle; węzeł; liść; pąk boczny (w kącie liścia). Bez przekroju blaszki liścia. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Węzeł"), " to miejsce na łodydze, z którego wyrasta liść. Odcinek między dwoma węzłami to ", em("międzywęźle"), "."],
          ["", em("Pąk szczytowy"), " jest na czubku pędu — tam stożek wzrostu. ", em("Pąki boczne"), " siedzą zwykle w kącie liścia (między ogonkiem a łodygą). Z nich może wyrosnąć gałązka."],
          "Nie uczysz się dziś nerwacji liścia ani szparek w blaszce — lekcja 24."
        ],
        ua: [
          ["", em("Вузол"), " — місце на стеблі, з якого виростає листок. Відрізок між двома вузлами — ", em("міжвузля"), "."],
          ["", em("Верхівкова брунька"), " на кінчику пагона — там конус наростання. ", em("Бічні бруньки"), " сидять зазвичай у пазусі листка. З них може вирости гілочка."],
          "Сьогодні не вчиш жилкування листка і продихів у пластинці — урок 24."
        ]
      },
      task: {
        id: "l23-e3",
        type: "true-false",
        question: { pl: "Liść wyrasta z węzła. Pąk szczytowy jest na czubku pędu, pąki boczne — zwykle w kącie liścia.", ua: "Листок виростає з вузла. Верхівкова брунька на кінчику пагона, бічні — зазвичай у пазусі листка." },
        answer: true,
        explanation: { pl: "Węzeł + międzywęźle + dwa rodzaje pąków.", ua: "Вузол + міжвузля + два види бруньок." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa rodzaje pąków", ua: "Два види бруньок" },
      visual: tree({
        layout: "fork",
        root: { pl: "pąki", ua: "бруньки" },
        items: [
          { pl: "szczytowy — czubek pędu", ua: "верхівкова — кінчик пагона" },
          { pl: "boczny — kąt liścia", ua: "бічна — пазуха листка" }
        ]
      }),
      items: [
        { pl: "szczytowy — wzrost na długość", ua: "верхівкова — ріст у довжину" },
        { pl: "boczny — nowa gałązka", ua: "бічна — нова гілочка" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Przekrój łodygi", ua: "Переріз стебла" },
      visual: vizGh("l23-przekroj.png", {
        alt: { pl: "Przekrój łodygi: skórka, kora, wiązki, rdzeń", ua: "Переріз стебла: шкірка, кора, пучки, серцевина" },
        title: { pl: "Na zewnątrz skórka. W środku rdzeń. Między nimi wiązki.", ua: "Ззовні шкірка. Всередині серцевина. Між ними пучки." },
        prompt: { pl: "Edukacyjny przekrój poprzeczny 16:9 zielonej łodygi (np. słonecznik). Etykiety PL od zewnątrz: skórka; kora; wiązka przewodząca (drewno + łyko); rdzeń. Napis: wiązki jak rury w kręgu. Bez słojów drzewa na tym kadrze. Bez walca osiowego korzenia jako jedynej etykiety. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na przekroju młodej łodygi widać tkanki z lekcji 21, ułożone inaczej niż w korzeniu.",
          ["Na zewnątrz ", em("skórka"), " (okrywająca). Pod nią ", em("kora"), " — głównie miękisz i wzmocnienie."],
          ["", em("Wiązki przewodzące"), " stoją jak rury w kręgu: w każdej jest drewno (woda w górę) i łyko (cukry). W korzeniu transport był w walcu osiowym — tu wiązki są osobnymi „kablami”."],
          ["W samym środku bywa ", em("rdzeń"), " — miękisz. Nie myl przekroju łodygi z przekrojem korzenia z lekcji 22."]
        ],
        ua: [
          "На перерізі молодого стебла тканини з уроку 21, укладені інакше, ніж у корені.",
          ["Ззовні ", em("шкірка"), " (покривна). Під нею ", em("кора"), " — здебільшого паренхіма і механічна тканина."],
          ["", em("Провідні пучки"), " стоять як труби в колі: в кожному деревина (вода вгору) і луб (цукри). У корені транспорт був у центральному циліндрі — тут пучки окремі «кабелі»."],
          ["У самому центрі буває ", em("серцевина"), " — паренхіма. Не плутати переріз стебла з перерізом кореня з уроку 22."]
        ]
      },
      task: {
        id: "l23-e4",
        type: "single-choice",
        question: { pl: "Gdzie w przekroju łodygi są drewno i łyko?", ua: "Де в перерізі стебла деревина і луб?" },
        options: [
          { id: "a", label: { pl: "w wiązkach przewodzących (krąg rur), nie w czepcu", ua: "у провідних пучках (коло труб), не в чохлику" } },
          { id: "b", label: { pl: "tylko w kapeluszu grzyba", ua: "лише в шапинці гриба" } },
          { id: "c", label: { pl: "w szparkach blaszki liścia", ua: "у продихах пластинки листка" } }
        ],
        answer: "a",
        explanation: { pl: "Wiązki = drewno + łyko. Szparki = liść (L24). Czepiec = korzeń.", ua: "Пучки = деревина + луб." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Warstwy na przekroju", ua: "Шари на перерізі" },
      visual: tree({
        layout: "nested",
        root: { pl: "przekrój łodygi", ua: "переріз стебла" },
        groups: [
          {
            title: { pl: "skórka", ua: "шкірка" },
            items: [{ pl: "okrywa", ua: "вкриває" }]
          },
          {
            title: { pl: "kora", ua: "кора" },
            items: [{ pl: "miękisz, wzmocnienie", ua: "паренхіма, каркас" }]
          },
          {
            title: { pl: "wiązki", ua: "пучки" },
            items: [
              { pl: "drewno", ua: "деревина" },
              { pl: "łyko", ua: "луб" }
            ]
          },
          {
            title: { pl: "rdzeń", ua: "серцевина" },
            items: [{ pl: "środek", ua: "середина" }]
          }
        ]
      }),
      items: [
        { pl: "skórka — okrywa", ua: "шкірка — вкриває" },
        { pl: "kora — miękisz i wzmocnienie", ua: "кора — паренхіма і каркас" },
        { pl: "wiązki — drewno i łyko", ua: "пучки — деревина і луб" },
        { pl: "rdzeń — środek", ua: "серцевина — середина" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Słoje roczne", ua: "Річні кільця" },
      visual: vizGh("l23-sloje.png", {
        alt: { pl: "Pień z widocznymi słojami przyrostu", ua: "Стовбур із видимими річними кільцями" },
        title: { pl: "Jeden jasno-ciemny pierścień ≈ jeden rok.", ua: "Одне світло-темне кільце ≈ один рік." },
        prompt: { pl: "Fotorealistyczny przekrój 16:9 pnia drzewa. Etykiety PL: kora; słoje roczne (drewno); rdzeń. Mała strzałka: jasne drewno wiosenne, ciemniejsze letnie. Napis: przyrost na grubość. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Drzewo grubieje. Między łykiem a drewnem pracuje cienka warstwa tkanki twórczej (kambium). Co roku dodaje nowy pierścień drewna.",
          ["", em("Słoje roczne"), " to te pierścienie. Jasny prążek powstaje wiosną (szerokie naczynia), ciemniejszy — latem. Jeden jasny + jeden ciemny ≈ jeden rok."],
          "Po liczbie słojów szacujesz wiek ściętego pnia. Nie liczysz słojów na korzeniu z lekcji 22 i nie szukasz ich w blaszce liścia."
        ],
        ua: [
          "Дерево товстішає. Між лубом і деревиною працює тонкий шар твірної тканини (камбій). Щороку додає нове кільце деревини.",
          ["", em("Річні кільця"), " — ці кільця. Світла смуга навесні (ширші судини), темніша — влітку. Одна світла + одна темна ≈ один рік."],
          "За числом кілець оцінюєш вік зрізаного стовбура. Не лічиш кілець на корені з уроку 22 і не шукаєш їх у пластинці листка."
        ]
      },
      task: {
        id: "l23-e5",
        type: "true-false",
        question: { pl: "Słoje roczne to pierścienie drewna: jeden jasny i jeden ciemny prążek to zwykle jeden rok.", ua: "Річні кільця — кільця деревини: одна світла і одна темна смуга — зазвичай один рік." },
        answer: true,
        explanation: { pl: "Przyrost na grubość. Tkanka twórcza między łykiem a drewnem.", ua: "Приріст у товщину. Твірна тканина між лубом і деревиною." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pęd bywa pod ziemią", ua: "Пагін буває під землею" },
      visual: vizGh("l23-przeksztalcenia.png", {
        alt: { pl: "Bulwa ziemniaka to pęd; marchew to korzeń", ua: "Бульба картоплі — пагін; морква — корінь" },
        title: { pl: "Ziemniak to zgrubiały pęd. Marchew to korzeń. Nie myl ich.", ua: "Картопля — потовщений пагін. Морква — корінь. Не плутай їх." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA: bulwa ziemniaka z oczkami (pąki), etykieta PL: pęd spichrzowy (bulwa). PRAWA: marchew, etykieta: korzeń spichrzowy (lekcja 22). Napis: zapas w różnym organie. Bez kwiatu, bez nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Nie każdy pęd sterczy nad ziemią. Rozłogi poziomek pełzają po glebie. Kłącze irysa jest pędem pod ziemią. Bulwa ziemniaka to zgrubiały pęd z pąkami („oczka”).",
          "Marchew z lekcji 22 to korzeń spichrzowy. Ziemniak to pęd spichrzowy. Oba trzymają zapas — ale to różne organy.",
          "Nie rozbieramy tu kwiatu. Nie nazywamy ziemniaka owocem."
        ],
        ua: [
          "Не кожен пагін стирчить над землею. Столони суниць повзуть по ґрунту. Кореневище півників — пагін під землею. Бульба картоплі — потовщений пагін із бруньками («вічка»).",
          "Морква з уроку 22 — запасаючий корінь. Картопля — запасаючий пагін. Обидва тримають запас — але це різні органи.",
          "Квітки тут не розбираємо. Картоплю не називаємо плодом."
        ]
      },
      task: {
        id: "l23-e6",
        type: "single-choice",
        question: { pl: "Czym bulwa ziemniaka różni się od marchwi?", ua: "Чим бульба картоплі відрізняється від моркви?" },
        options: [
          { id: "a", label: { pl: "ziemniak — zgrubiały pęd (ma pąki); marchew — korzeń spichrzowy", ua: "картопля — потовщений пагін (має бруньки); морква — запасаючий корінь" } },
          { id: "b", label: { pl: "oba to kwiaty", ua: "обидва — квітки" } },
          { id: "c", label: { pl: "ziemniak to czepiec korzenia", ua: "картопля — чохлик кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Zapas w pędzie vs zapas w korzeniu. Oczka = pąki.", ua: "Запас у пагоні проти запасу в корені. Вічка = бруньки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Pęd", ua: "Практика. Пагін" },
      task: {
        id: "l23-p1",
        type: "single-choice",
        question: { pl: "Pęd to:", ua: "Пагін — це:" },
        options: [
          { id: "a", label: { pl: "łodyga razem z liśćmi i pąkami", ua: "стебло разом із листками і бруньками" } },
          { id: "b", label: { pl: "tylko czepiec", ua: "лише чохлик" } },
          { id: "c", label: { pl: "to samo co owocnik grzyba", ua: "те саме, що плодове тіло гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Pęd ≠ sama łodyga.", ua: "Пагін ≠ саме стебло." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Funkcje", ua: "Функції" },
      task: {
        id: "l23-p2",
        type: "true-false",
        question: { pl: "Łodyga podpiera pęd i transportuje wodę, sole oraz cukry.", ua: "Стебло підпирає пагін і транспортує воду, солі та цукри." },
        answer: true,
        explanation: { pl: "Podpora + drewno i łyko. Główna fotosynteza — liść.", ua: "Опора + деревина і луб." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Węzeł i pąk", ua: "Вузол і брунька" },
      task: {
        id: "l23-p3",
        type: "single-choice",
        question: { pl: "Gdzie wyrasta liść i gdzie jest pąk szczytowy?", ua: "Де виростає листок і де верхівкова брунька?" },
        options: [
          { id: "a", label: { pl: "liść z węzła; pąk szczytowy na czubku pędu", ua: "листок з вузла; верхівкова брунька на кінчику пагона" } },
          { id: "b", label: { pl: "liść ze stożka korzenia", ua: "листок із конуса кореня" } },
          { id: "c", label: { pl: "pąk szczytowy to szparka", ua: "верхівкова брунька — продих" } }
        ],
        answer: "a",
        explanation: { pl: "Węzeł = liść. Czubek = pąk szczytowy.", ua: "Вузол = листок. Кінчик = верхівкова брунька." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Przekrój", ua: "Переріз" },
      task: {
        id: "l23-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz elementy przekroju łodygi.", ua: "Познач елементи перерізу стебла." },
        options: [
          { id: "a", label: { pl: "skórka", ua: "шкірка" } },
          { id: "b", label: { pl: "wiązki przewodzące", ua: "провідні пучки" } },
          { id: "c", label: { pl: "rdzeń", ua: "серцевина" } },
          { id: "d", label: { pl: "czepiec", ua: "чохлик" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Skórka, kora, wiązki, rdzeń. Czepiec = korzeń.", ua: "Шкірка, кора, пучки, серцевина. Чохлик = корінь." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Słoje", ua: "Кільця" },
      task: {
        id: "l23-p5",
        type: "single-choice",
        question: { pl: "Słoje roczne to:", ua: "Річні кільця — це:" },
        options: [
          { id: "a", label: { pl: "pierścienie drewna; jasny + ciemny prążek ≈ rok", ua: "кільця деревини; світла + темна смуга ≈ рік" } },
          { id: "b", label: { pl: "włośniki korzenia", ua: "кореневі волоски" } },
          { id: "c", label: { pl: "blaszki kapelusza", ua: "пластинки шапинки" } }
        ],
        answer: "a",
        explanation: { pl: "Przyrost pnia na grubość.", ua: "Приріст стовбура в товщину." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Pęd", ua: "Перевірка 1. Пагін" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l23-s1",
        type: "single-choice",
        question: { pl: "Czym pęd różni się od samej łodygi?", ua: "Чим пагін відрізняється від самого стебла?" },
        options: [
          { id: "a", label: { pl: "pęd obejmuje łodygę, liście i pąki; łodyga jest osią pędu", ua: "пагін охоплює стебло, листки і бруньки; стебло — вісь пагона" } },
          { id: "b", label: { pl: "pęd to korzeń wiązkowy", ua: "пагін — мичкуватий корінь" } },
          { id: "c", label: { pl: "łodyga to owoc", ua: "стебло — плід" } }
        ],
        answer: "a",
        explanation: { pl: "Pęd jest całością. Łodyga jest częścią.", ua: "Пагін — ціле. Стебло — частина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Funkcje", ua: "Перевірка 2. Функції" },
      task: {
        id: "l23-s2",
        type: "multiple-choice",
        question: { pl: "Które funkcje ma łodyga?", ua: "Які функції має стебло?" },
        options: [
          { id: "a", label: { pl: "podpora", ua: "опора" } },
          { id: "b", label: { pl: "transport wody, soli i cukrów", ua: "транспорт води, солей і цукрів" } },
          { id: "c", label: { pl: "u niektórych — zapas", ua: "у деяких — запас" } },
          { id: "d", label: { pl: "pobieranie wody włośnikami korzenia", ua: "вбирання води волосками кореня" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Włośniki = korzeń (L22).", ua: "Волоски = корінь." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Węzły i pąki", ua: "Перевірка 3. Вузли і бруньки" },
      task: {
        id: "l23-s3",
        type: "true-false",
        question: { pl: "Węzeł to miejsce wyrastania liścia. Międzywęźle leży między węzłami. Pąk szczytowy jest na czubku.", ua: "Вузол — місце виростання листка. Міжвузля лежить між вузлами. Верхівкова брунька на кінчику." },
        answer: true,
        explanation: { pl: "Budowa zewnętrzna łodygi.", ua: "Зовнішня будова стебла." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Przekrój", ua: "Перевірка 4. Переріз" },
      task: {
        id: "l23-s4",
        type: "single-choice",
        question: { pl: "Kolejność od zewnątrz na przekroju łodygi to:", ua: "Послідовність ззовні на перерізі стебла:" },
        options: [
          { id: "a", label: { pl: "skórka → kora → wiązki przewodzące → rdzeń", ua: "шкірка → кора → провідні пучки → серцевина" } },
          { id: "b", label: { pl: "czepiec → włośniki → kapelusz", ua: "чохлик → волоски → шапинка" } },
          { id: "c", label: { pl: "tylko szparki blaszki", ua: "лише продихи пластинки" } }
        ],
        answer: "a",
        explanation: { pl: "Inny układ niż walec osiowy korzenia.", ua: "Інший уклад, ніж центральний циліндр кореня." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Słoje", ua: "Перевірка 5. Кільця" },
      task: {
        id: "l23-s5",
        type: "single-choice",
        question: { pl: "Skąd biorą się słoje roczne?", ua: "Звідки беруться річні кільця?" },
        options: [
          { id: "a", label: { pl: "tkanka twórcza dodaje co roku nowy pierścień drewna (jasny + ciemny prążek ≈ rok)", ua: "твірна тканина щороку додає нове кільце деревини (світла + темна смуга ≈ рік)" } },
          { id: "b", label: { pl: "to włośniki na czubku korzenia", ua: "це волоски на кінчику кореня" } },
          { id: "c", label: { pl: "to warstwy liścia z lekcji 24", ua: "це шари листка з уроку 24" } }
        ],
        answer: "a",
        explanation: { pl: "Przyrost pnia na grubość. Nie liść i nie korzeń.", ua: "Приріст стовбура в товщину." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "pęd", ua: "пагін" },
        items: [
          { pl: "łodyga", ua: "стебло" },
          { pl: "liście (L24)", ua: "листки (урок 24)" },
          { pl: "pąki", ua: "бруньки" }
        ]
      }),
      text: {
        pl: [
          "Pęd = łodyga + liście + pąki.",
          "Łodyga: podpora i transport (drewno, łyko).",
          "Węzeł, międzywęźle, pąk szczytowy i boczny.",
          "Przekrój: skórka, kora, wiązki, rdzeń.",
          "Słoje ≈ lata pnia.",
          "Ziemniak = pęd. Marchew = korzeń.",
          "Liść — lekcja 24."
        ],
        ua: [
          "Пагін = стебло + листки + бруньки.",
          "Стебло: опора і транспорт (деревина, луб).",
          "Вузол, міжвузля, верхівкова і бічна брунька.",
          "Переріз: шкірка, кора, пучки, серцевина.",
          "Кільця ≈ роки стовбура.",
          "Картопля = пагін. Морква = корінь.",
          "Листок — урок 24."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię powiedzieć, czym pęd różni się od łodygi.", ua: "Можу сказати, чим пагін відрізняється від стебла." },
        { pl: "Potrafię wymienić funkcje łodygi.", ua: "Можу назвати функції стебла." },
        { pl: "Potrafię wskazać węzeł, międzywęźle i pąki.", ua: "Можу вказати вузол, міжвузля і бруньки." },
        { pl: "Potrafię opisać przekrój łodygi.", ua: "Можу описати переріз стебла." },
        { pl: "Potrafię wyjaśnić słoje roczne.", ua: "Можу пояснити річні кільця." }
      ]
    }
  ]
};
