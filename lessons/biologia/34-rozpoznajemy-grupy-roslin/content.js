function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L34_Rozpoznajemy_grupy_roslin/images/";

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
        { pl: "Rozpoznasz mech: chwytniki, puszka, zarodniki.", ua: "Розпізнаєш мох: ризоїди, коробочка, спори." },
        { pl: "Rozpoznasz paproć: korzenie, kupki na liściu.", ua: "Розпізнаєш папороть: корені, купки на листку." },
        { pl: "Rozpoznasz nagonasienne: nasiona na łusce szyszki.", ua: "Розпізнаєш голонасінні: насіння на лусці шишки." },
        { pl: "Rozpoznasz okrytonasienne: kwiat i nasiona w owocu.", ua: "Розпізнаєш покритонасінні: квітка і насіння в плоді." },
        { pl: "Porównasz dwie grupy, np. mech z paprocią albo nago z okrytymi.", ua: "Порівняєш дві групи, напр. мох із папороттю або голі з покритими." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "mchy", ua: "мохи" },
        { pl: "paprociowe", ua: "папоротеві" },
        { pl: "nagonasienne", ua: "голонасінні" },
        { pl: "okrytonasienne", ua: "покритонасінні" },
        { pl: "zarodniki", ua: "спори" },
        { pl: "chwytniki", ua: "ризоїди" },
        { pl: "szyszka", ua: "шишка" },
        { pl: "owoc", ua: "плід" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l34-zacznijmy.png", {
        alt: { pl: "Cztery kadry: mech, paproć, sosna, jabłoń", ua: "Чотири кадри: мох, папороть, сосна, яблуня" },
        title: { pl: "Cztery szufladki z działu V. Dziś klucz, nie nowa grupa.", ua: "Чотири шухляди з розділу V. Сьогодні ключ, не нова група." },
        prompt: { pl: "Edukacyjny kolaż 16:9, cztery kadry, etykiety PL: mech; paproć; drzewo z szyszką; drzewo z kwiatami / owocami. Napis: cztery grupy roślin. Bez szczegółów pręcików. Bez kiełkującej fasoli. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Lekcje 25–33 dały cztery grupy. Dziś: dostajesz nieznaną roślinę i wrzucasz ją do właściwej szufladki.",
          "Nie uczymy od nowa torfu, klucza sosna–świerk ani dąb–buk. Szukamy cechy grupy."
        ],
        ua: [
          "Уроки 25–33 дали чотири групи. Сьогодні: дістаєш невідому рослину і кладеш її у правильну шухляду.",
          "Не вчимо знову торфу, ключа сосна–ялина і дуб–бук. Шукаємо ознаку групи."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Cztery grupy", ua: "Чотири групи" },
      visual: tree({
        layout: "nested",
        root: { pl: "rośliny", ua: "рослини" },
        groups: [
          {
            title: { pl: "mchy", ua: "мохи" },
            items: [{ pl: "puszka", ua: "коробочка" }]
          },
          {
            title: { pl: "paprocie", ua: "папороті" },
            items: [{ pl: "kupki", ua: "купки" }]
          },
          {
            title: { pl: "nagonasienne", ua: "голонасінні" },
            items: [{ pl: "szyszka", ua: "шишка" }]
          },
          {
            title: { pl: "okrytonasienne", ua: "покритонасінні" },
            items: [{ pl: "owoc", ua: "плід" }]
          }
        ]
      }),
      items: [
        { pl: "mchy i paprocie — zarodniki", ua: "мохи і папороті — спори" },
        { pl: "nagonasienne i okrytonasienne — nasiona", ua: "голонасінні і покритонасінні — насіння" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Mech", ua: "Мох" },
      visual: vizGh("l34-mech.png", {
        alt: { pl: "Mech z chwytnikami i puszką na trzonku", ua: "Мох із ризоїдами і коробочкою на ніжці" },
        title: { pl: "Chwytniki, listki, puszka. Nie korzeń i nie nasiono.", ua: "Ризоїди, листочки, коробочка. Не корінь і не насінина." },
        prompt: { pl: "Edukacyjny schemat 16:9 mchu. Etykiety PL: chwytniki; łodyżka; listki; puszka (zarodniki). Napis: mech. Bez korzeni paproci. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Mech"), ": ", em("chwytniki"), " (nie korzeń z lekcji 22), łodyżka, listki. Na trzonku ", em("puszka"), " z ", em("zarodnikami"), " — nie nasiona."],
          "Wilgotno. Jeśli widzisz korzenie i duże liście z kupkami — to nie mech (paproć)."
        ],
        ua: [
          ["", em("Мох"), ": ", em("ризоїди"), " (не корінь з уроку 22), стебельце, листочки. На ніжці ", em("коробочка"), " зі ", em("спорами"), " — не насіння."],
          "Волого. Якщо бачиш корені і велике листя з купками — це не мох (папороть)."
        ]
      },
      task: {
        id: "l34-e1",
        type: "single-choice",
        question: { pl: "Roślina z chwytnikami i puszką zarodników to:", ua: "Рослина з ризоїдами і коробочкою спор — це:" },
        options: [
          { id: "a", label: { pl: "mech", ua: "мох" } },
          { id: "b", label: { pl: "paproć", ua: "папороть" } },
          { id: "c", label: { pl: "dąb", ua: "дуб" } }
        ],
        answer: "a",
        explanation: { pl: "Puszka + chwytniki = mech. Kupki = paproć. Dąb = L33.", ua: "Коробочка + ризоїди = мох." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Przy podłożu", ua: "Біля субстрату" },
      visual: tree({
        layout: "fork",
        root: { pl: "przyczep", ua: "прикріплення" },
        items: [
          { pl: "chwytniki — mech", ua: "ризоїди — мох" },
          { pl: "korzenie — paproć", ua: "корені — папороть" }
        ]
      }),
      items: [
        { pl: "mech — chwytniki, nie korzeń", ua: "мох — ризоїди, не корінь" },
        { pl: "paproć — prawdziwe korzenie", ua: "папороть — справжні корені" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Paproć", ua: "Папороть" },
      visual: vizGh("l34-paproc.png", {
        alt: { pl: "Liść paproci z kupkami zarodni na spodzie", ua: "Листок папороті з купками спорангіїв на споді" },
        title: { pl: "Korzenie i liść. Kupki na spodzie. To nie puszka mchu.", ua: "Корені і листок. Купки на споді. Це не коробочка моху." },
        prompt: { pl: "Edukacyjny schemat 16:9 paproci. Etykiety PL: korzenie; kłącze; liść; kupki zarodni (spód). Napis: paproć. Bez puszki mchu. Bez szyszki. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Paproć"), " ma ", em("korzenie"), ", kłącze i liście. Na spodzie liścia ", em("kupki zarodni"), " — zarodniki, nie nasiona."],
          "Odwróć liść. Regularne kupki = paproć. Puszka na trzonku = mech. Skrzyp i widłak to ta sama duża szufladka (paprociowe), bez nowego klucza dziś."
        ],
        ua: [
          ["", em("Папороть"), " має ", em("корені"), ", кореневище і листки. На споді листка ", em("купки спорангіїв"), " — спори, не насіння."],
          "Переверни листок. Регулярні купки = папороть. Коробочка на ніжці = мох. Хвощ і плаун — та сама велика шухляда (папоротеві), без нового ключа сьогодні."
        ]
      },
      task: {
        id: "l34-e2",
        type: "single-choice",
        question: { pl: "Kupki zarodni na spodzie liścia i korzenie to cecha:", ua: "Купки спорангіїв на споді листка і корені — ознака:" },
        options: [
          { id: "a", label: { pl: "paproci", ua: "папороті" } },
          { id: "b", label: { pl: "mchu z puszką", ua: "моху з коробочкою" } },
          { id: "c", label: { pl: "sosny z szyszką", ua: "сосни з шишкою" } }
        ],
        answer: "a",
        explanation: { pl: "Kupki = paproć. Puszka = mech. Szyszka = nagonasienne.", ua: "Купки = папороть." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Gdzie zarodniki", ua: "Де спори" },
      visual: tree({
        layout: "fork",
        root: { pl: "zarodniki", ua: "спори" },
        items: [
          { pl: "puszka — mech", ua: "коробочка — мох" },
          { pl: "kupki — paproć", ua: "купки — папороть" }
        ]
      }),
      items: [
        { pl: "mech — puszka na trzonku", ua: "мох — коробочка на ніжці" },
        { pl: "paproć — kupki na liściu", ua: "папороть — купки на листку" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Nagonasienne", ua: "Голонасінні" },
      visual: vizGh("l34-nagonasienne.png", {
        alt: { pl: "Otwarta szyszka z nasionami na łuskach", ua: "Відкрита шишка з насінням на лусках" },
        title: { pl: "Nasiona na łusce. Szyszka, nie kwiat. Często igły.", ua: "Насіння на лусці. Шишка, не квітка. Часто хвоя." },
        prompt: { pl: "Edukacyjny schemat 16:9. Szyszka, etykiety PL: łuska; nasiono (nago). Napis: nagonasienne. Przekreślone jabłko. Bez klucza sosna vs świerk. Bez kupek. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Nagonasienne"), " mają ", em("nasiona"), " na łusce ", em("szyszki"), " — nie w owocu. Szyszka to nie kwiat (lekcja 27)."],
          "Często igły. Sosna czy świerk — lekcja 28, dziś tylko grupa. Zarodniki mchu i paproci tu nie pasują."
        ],
        ua: [
          ["", em("Голонасінні"), " мають ", em("насіння"), " на лусці ", em("шишки"), " — не в плоді. Шишка — не квітка (урок 27)."],
          "Часто хвоя. Сосна чи ялина — урок 28, сьогодні лише група. Спори моху і папороті сюди не пасують."
        ]
      },
      task: {
        id: "l34-e3",
        type: "true-false",
        question: { pl: "Nagonasienne rozpoznasz po nasionach na łusce szyszki — nie w owocu.", ua: "Голонасінні розпізнаєш по насінню на лусці шишки — не в плоді." },
        answer: true,
        explanation: { pl: "Nago = na łusce. W owocu = okrytonasienne.", ua: "Голе = на лусці." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Zarodniki albo nasiona", ua: "Спори або насіння" },
      visual: tree({
        layout: "fork",
        root: { pl: "rozsiew", ua: "поширення" },
        items: [
          { pl: "zarodniki", ua: "спори" },
          { pl: "nasiona", ua: "насіння" }
        ]
      }),
      items: [
        { pl: "zarodniki — mchy, paprocie", ua: "спори — мохи, папороті" },
        { pl: "nasiona — nago- i okrytonasienne", ua: "насіння — голо- і покритонасінні" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Okrytonasienne", ua: "Покритонасінні" },
      visual: vizGh("l34-okrytonasienne.png", {
        alt: { pl: "Kwiat i przekrój owocu z nasionami", ua: "Квітка і переріз плоду з насінням" },
        title: { pl: "Kwiat. Nasiona schowane w owocu. Nie szyszka.", ua: "Квітка. Насіння сховане в плоді. Не шишка." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: kwiat (bez podpisów kielicha i pręcików). PRAWA: przekrój owocu, nasiona w środku. Napis: okrytonasienne. Bez szyszki. Bez haczyków rozsiewu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Okrytonasienne"), " mają ", em("kwiaty"), ". Nasiona leżą w ", em("owocu"), " (lekcja 29)."],
          "Dąb, klon, trawa, groszek — ta sama szufladka. Części kwiatu były na 30, drzewa z nazwy na 33. Dziś: kwiat + owoc = grupa, nie szyszka."
        ],
        ua: [
          ["", em("Покритонасінні"), " мають ", em("квітки"), ". Насіння лежить у ", em("плоді"), " (урок 29)."],
          "Дуб, клен, трава, горох — та сама шухляда. Частини квітки були на 30, дерева з назви на 33. Сьогодні: квітка + плід = група, не шишка."
        ]
      },
      task: {
        id: "l34-e4",
        type: "single-choice",
        question: { pl: "Kwiat i nasiona w owocu to cecha:", ua: "Квітка і насіння в плоді — ознака:" },
        options: [
          { id: "a", label: { pl: "okrytonasiennych", ua: "покритонасінних" } },
          { id: "b", label: { pl: "nagonasiennych", ua: "голонасінних" } },
          { id: "c", label: { pl: "mchów", ua: "мохів" } }
        ],
        answer: "a",
        explanation: { pl: "Owoc = okryte. Szyszka = nago. Puszka = mech.", ua: "Плід = покриті." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Szyszka albo owoc", ua: "Шишка або плід" },
      visual: tree({
        layout: "fork",
        root: { pl: "nasiona", ua: "насіння" },
        items: [
          { pl: "na łusce — nago", ua: "на лусці — голі" },
          { pl: "w owocu — okryte", ua: "у плоді — покриті" }
        ]
      }),
      items: [
        { pl: "nagonasienne — szyszka", ua: "голонасінні — шишка" },
        { pl: "okrytonasienne — owoc", ua: "покритонасінні — плід" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Porównaj dwie grupy", ua: "Порівняй дві групи" },
      visual: vizGh("l34-porownanie.png", {
        alt: { pl: "Dwie pary: mech vs paproć oraz szyszka vs owoc", ua: "Дві пари: мох проти папороті та шишка проти плоду" },
        title: { pl: "Jedna cecha różnicy wystarczy. Nie atlas gatunków.", ua: "Однієї ознаки різниці досить. Не атлас видів." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa rzędy, etykiety PL. GÓRA: mech (chwytniki, puszka) vs paproć (korzenie, kupki). DÓŁ: szyszka z nagim nasionem vs jabłko z nasionami. Napis: porównaj dwie grupy. Bez klucza dąb/buk. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mech vs paproć: chwytniki i puszka kontra korzenie i kupki. Oba mają zarodniki.",
          "Nago vs okryte: nasiona na łusce szyszki kontra nasiona w owocu. Oba mają nasiona, nie zarodniki.",
          "To domknięcie działu V. Nie mieszaj z pięcioma królestwami z lekcji 15 — tu tylko rośliny."
        ],
        ua: [
          "Мох проти папороті: ризоїди і коробочка проти коренів і купок. Обидва мають спори.",
          "Голі проти покритих: насіння на лусці шишки проти насіння в плоді. Обидва мають насіння, не спори.",
          "Це замикання розділу V. Не мішати з п’ятьма царствами з уроку 15 — тут лише рослини."
        ]
      },
      task: {
        id: "l34-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o porównaniu grup.", ua: "Познач правдиві речення про порівняння груп." },
        options: [
          { id: "a", label: { pl: "mech ma chwytniki, paproć ma korzenie", ua: "мох має ризоїди, папороть має корені" } },
          { id: "b", label: { pl: "nagonasienne: nasiona na łusce; okrytonasienne: w owocu", ua: "голонасінні: насіння на лусці; покритонасінні: у плоді" } },
          { id: "c", label: { pl: "mech i dąb to ta sama grupa, bo oba zielone", ua: "мох і дуб — та сама група, бо обидва зелені" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Dwie pary różnic. Zieleń nie jest kluczem grupy.", ua: "Дві пари відмінностей." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Mech", ua: "Практика. Мох" },
      task: {
        id: "l34-p1",
        type: "single-choice",
        question: { pl: "Nieznana roślina: chwytniki, puszka z zarodnikami. To:", ua: "Невідома рослина: ризоїди, коробочка зі спорами. Це:" },
        options: [
          { id: "a", label: { pl: "mech", ua: "мох" } },
          { id: "b", label: { pl: "okrytonasienne", ua: "покритонасінні" } },
          { id: "c", label: { pl: "nagonasienne", ua: "голонасінні" } }
        ],
        answer: "a",
        explanation: { pl: "Puszka + chwytniki.", ua: "Коробочка + ризоїди." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Paproć", ua: "Папороть" },
      task: {
        id: "l34-p2",
        type: "true-false",
        question: { pl: "Paproć rozpoznasz po korzeniach i kupkach zarodni na spodzie liścia.", ua: "Папороть розпізнаєш по коренях і купках спорангіїв на споді листка." },
        answer: true,
        explanation: { pl: "Korzenie + kupki.", ua: "Корені + купки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Nagonasienne", ua: "Голонасінні" },
      task: {
        id: "l34-p3",
        type: "single-choice",
        question: { pl: "Nasiona na łusce szyszki, bez owocu. To grupa:", ua: "Насіння на лусці шишки, без плоду. Це група:" },
        options: [
          { id: "a", label: { pl: "nagonasienne", ua: "голонасінні" } },
          { id: "b", label: { pl: "okrytonasienne", ua: "покритонасінні" } },
          { id: "c", label: { pl: "mchy", ua: "мохи" } }
        ],
        answer: "a",
        explanation: { pl: "Szyszka = nago. Owoc = okryte. Puszka = mech.", ua: "Шишка = голі." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Okrytonasienne", ua: "Покритонасінні" },
      task: {
        id: "l34-p4",
        type: "single-choice",
        question: { pl: "Roślina z kwiatem i nasionami w owocu należy do:", ua: "Рослина з квіткою і насінням у плоді належить до:" },
        options: [
          { id: "a", label: { pl: "okrytonasiennych", ua: "покритонасінних" } },
          { id: "b", label: { pl: "nagonasiennych", ua: "голонасінних" } },
          { id: "c", label: { pl: "paprociowych", ua: "папоротевих" } }
        ],
        answer: "a",
        explanation: { pl: "Kwiat + owoc.", ua: "Квітка + плід." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Porównanie", ua: "Порівняння" },
      task: {
        id: "l34-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz poprawne porównania.", ua: "Познач правильні порівняння." },
        options: [
          { id: "a", label: { pl: "mech — chwytniki; paproć — korzenie", ua: "мох — ризоїди; папороть — корені" } },
          { id: "b", label: { pl: "nago — szyszka; okryte — owoc", ua: "голі — шишка; покриті — плід" } },
          { id: "c", label: { pl: "wszystkie cztery grupy mają kwiat jabłoni", ua: "усі чотири групи мають квітку яблуні" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Dwie pary. Kwiat tylko okrytonasienne.", ua: "Дві пари. Квітка лише покритонасінні." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Mech", ua: "Перевірка 1. Мох" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l34-s1",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz mech?", ua: "Як розпізнаєш мох?" },
        options: [
          { id: "a", label: { pl: "chwytniki, puszka, zarodniki", ua: "ризоїди, коробочка, спори" } },
          { id: "b", label: { pl: "żołądź i klapowany liść", ua: "жолудь і лопатевий листок" } },
          { id: "c", label: { pl: "szyszki zwisające jak u świerka", ua: "шишки звислі як у ялини" } }
        ],
        answer: "a",
        explanation: { pl: "Chwytniki + puszka. Żołądź = dąb. Szyszka = L28.", ua: "Ризоїди + коробочка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Paproć", ua: "Перевірка 2. Папороть" },
      task: {
        id: "l34-s2",
        type: "true-false",
        question: { pl: "Paproć rozpoznasz po korzeniach i kupkach zarodni na spodzie liścia.", ua: "Папороть розпізнаєш по коренях і купках спорангіїв на споді листка." },
        answer: true,
        explanation: { pl: "Korzenie + kupki.", ua: "Корені + купки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Nagonasienne", ua: "Перевірка 3. Голонасінні" },
      task: {
        id: "l34-s3",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz nagonasienne?", ua: "Як розпізнаєш голонасінні?" },
        options: [
          { id: "a", label: { pl: "nasiona na łusce szyszki, nie w owocu", ua: "насіння на лусці шишки, не в плоді" } },
          { id: "b", label: { pl: "nasiona w jabłku", ua: "насіння в яблуці" } },
          { id: "c", label: { pl: "puszka na trzonku", ua: "коробочка на ніжці" } }
        ],
        answer: "a",
        explanation: { pl: "Nagie nasiona. Jabłko = okryte. Puszka = mech.", ua: "Голе насіння." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Okrytonasienne", ua: "Перевірка 4. Покритонасінні" },
      task: {
        id: "l34-s4",
        type: "single-choice",
        question: { pl: "Jak rozpoznasz okrytonasienne?", ua: "Як розпізнаєш покритонасінні?" },
        options: [
          { id: "a", label: { pl: "kwiat i nasiona w owocu", ua: "квітка і насіння в плоді" } },
          { id: "b", label: { pl: "tylko szyszka i igły", ua: "лише шишка і хвоя" } },
          { id: "c", label: { pl: "chwytniki zamiast korzenia", ua: "ризоїди замість кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Kwiat + owoc. Szyszka = nago. Chwytniki = mech.", ua: "Квітка + плід." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Porównanie", ua: "Перевірка 5. Порівняння" },
      task: {
        id: "l34-s5",
        type: "single-choice",
        question: { pl: "Które porównanie dwóch grup jest poprawne?", ua: "Яке порівняння двох груп правильне?" },
        options: [
          { id: "a", label: { pl: "mech — chwytniki i puszka; paproć — korzenie i kupki", ua: "мох — ризоїди і коробочка; папороть — корені і купки" } },
          { id: "b", label: { pl: "mech i paproć mają nasiona w owocu", ua: "мох і папороть мають насіння в плоді" } },
          { id: "c", label: { pl: "nagonasienne i mchy to to samo, bo oba lubią las", ua: "голонасінні і мохи — те саме, бо обом любить ліс" } }
        ],
        answer: "a",
        explanation: { pl: "Jedna para różnic. Las nie jest cechą grupy.", ua: "Одна пара відмінностей." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "cztery grupy", ua: "чотири групи" },
        items: [
          { pl: "mech, paproć", ua: "мох, папороть" },
          { pl: "nago, okryte", ua: "голі, покриті" }
        ]
      }),
      text: {
        pl: [
          "Mech: chwytniki, puszka, zarodniki.",
          "Paproć: korzenie, kupki.",
          "Nagonasienne: nasiona na łusce szyszki.",
          "Okrytonasienne: kwiat, nasiona w owocu.",
          "Porównuj jedną cechą. Dział V zamknięty."
        ],
        ua: [
          "Мох: ризоїди, коробочка, спори.",
          "Папороть: корені, купки.",
          "Голонасінні: насіння на лусці шишки.",
          "Покритонасінні: квітка, насіння в плоді.",
          "Порівнюй однією ознакою. Розділ V закрито."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię rozpoznać mech.", ua: "Можу розпізнати мох." },
        { pl: "Potrafię rozpoznać paproć.", ua: "Можу розпізнати папороть." },
        { pl: "Potrafię rozpoznać nagonasienne.", ua: "Можу розпізнати голонасінні." },
        { pl: "Potrafię rozpoznać okrytonasienne.", ua: "Можу розпізнати покритонасінні." },
        { pl: "Potrafię porównać dwie grupy.", ua: "Можу порівняти дві групи." }
      ]
    }
  ]
};
