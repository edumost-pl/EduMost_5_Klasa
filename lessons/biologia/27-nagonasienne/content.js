function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L27_Nagonasienne/images/";

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
        { pl: "Wyjaśnisz, że nasiona nagonasiennych leżą „nago”, nie w owocu.", ua: "Поясниш, що насіння голонасінних лежить «голим», не в плоді." },
        { pl: "Porównasz nagonasienne z mchami i paprociami: nasiona, nie zarodniki.", ua: "Порівняєш голонасінні з мохами і папоротями: насіння, не спори." },
        { pl: "Wskażesz szyszkę i powiesz, że to nie kwiat.", ua: "Вкажеш шишку і скажеш, що це не квітка." },
        { pl: "Wyjaśnisz, że pyłek przenosi wiatr.", ua: "Поясниш, що пилок переносить вітер." },
        { pl: "Powiesz, że liście bywają igłami; gatunki — na lekcji 28.", ua: "Скажеш, що листки бувають хвоєю; види — на уроці 28." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "nagonasienne", ua: "голонасінні" },
        { pl: "nasiono", ua: "насінина" },
        { pl: "szyszka", ua: "шишка" },
        { pl: "igła", ua: "хвоя" },
        { pl: "pyłek", ua: "пилок" },
        { pl: "zapylenie", ua: "запилення" },
        { pl: "szyszka męska", ua: "чоловіча шишка" },
        { pl: "szyszka żeńska", ua: "жіноча шишка" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l27-zacznijmy.png", {
        alt: { pl: "Drzewo z szyszkami, bez kwiatów", ua: "Дерево з шишками, без квіток" },
        title: { pl: "Po zarodnikach — nasiona. Dziś grupa, nie lista gatunków.", ua: "Після спор — насіння. Сьогодні група, не список видів." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 sosny lub świerka z szyszkami, dzień, las. Etykieta PL: rośliny nagonasienne. Bez kwiatu, bez owocu, bez kupek zarodni paproci. Bez tabliczki gatunków (sosna vs świerk). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mchy i paprocie (lekcje 25–26) rozsiewają się zarodnikami. Dziś rośliny, które wytwarzają nasiona — ale jeszcze bez kwiatu i owocu.",
          "Jak rozpoznać sosnę, świerk i jodłę — lekcja 28. Kwiat i owoc — lekcje 29–30."
        ],
        ua: [
          "Мохи і папороті (уроки 25–26) поширюються спорами. Сьогодні рослини, що виробляють насіння — але ще без квітки і плоду.",
          "Як розпізнати сосну, ялину і ялицю — урок 28. Квітка і плід — уроки 29–30."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Nasiona „nagie”", ua: "Насіння «голе»" },
      visual: vizGh("l27-nasiona.png", {
        alt: { pl: "Łuska szyszki z nasionami bez owocu", ua: "Луска шишки з насінням без плоду" },
        title: { pl: "Nasiono leży na łusce. Nie jest schowane w owocu.", ua: "Насінина лежить на лусці. Не схована в плоді." },
        prompt: { pl: "Edukacyjny schemat 16:9. Otwarta szyszka, etykiety PL: łuska; nasiono (skrzydełko OK). Napis: nago = nie w owocu. Przekreślony jabłko / owoc z etykietą: to później (okrytonasienne). Bez kwiatu. Bez tablicy gatunków. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Rośliny nagonasienne"), " wytwarzają ", em("nasiona"), ". „Nago” znaczy: nasiono nie jest schowane w owocu — leży na łusce szyszki."],
          "Owoc (jabłko, śliwka) poznasz przy okrytonasiennych. Dziś zapamiętaj przeciwieństwo: nago ≠ w owocu.",
          "Nasiono ma osłonę i zapas pokarmu dla siewki. Zarodnik mchu i paproci tego nie ma — to jedna komórka do rozsiewu."
        ],
        ua: [
          ["", em("Голонасінні рослини"), " виробляють ", em("насіння"), ". «Голо» означає: насінина не схована в плоді — лежить на лусці шишки."],
          "Плід (яблуко, слива) пізнаєш у покритонасінних. Сьогодні запам’ятай протилежність: голе ≠ у плоді.",
          "Насінина має оболонку і запас поживи для сіяння. Спора моху і папороті цього не має — це одна клітина для поширення."
        ]
      },
      task: {
        id: "l27-e1",
        type: "single-choice",
        question: { pl: "Co znaczy, że nasiona są „nagie”?", ua: "Що означає, що насіння «голе»?" },
        options: [
          { id: "a", label: { pl: "leżą na łusce szyszki, nie w owocu", ua: "лежать на лусці шишки, не в плоді" } },
          { id: "b", label: { pl: "to zarodniki w puszce mchu", ua: "це спори в коробочці моху" } },
          { id: "c", label: { pl: "to nasiona w jabłku", ua: "це насіння в яблуці" } }
        ],
        answer: "a",
        explanation: { pl: "Nago = nie w owocu. Jabłko = później. Puszka = mech.", ua: "Голе = не в плоді." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Zarodniki albo nasiona", ua: "Спори або насіння" },
      visual: tree({
        layout: "fork",
        root: { pl: "rozsiew", ua: "поширення" },
        items: [
          { pl: "zarodniki — mech, paproć", ua: "спори — мох, папороть" },
          { pl: "nasiona — nagonasienne", ua: "насіння — голонасінні" }
        ]
      }),
      items: [
        { pl: "zarodnik — jedna komórka (L25–26)", ua: "спора — одна клітина (уроки 25–26)" },
        { pl: "nasiono — osłona i zapas", ua: "насінина — оболонка і запас" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Szyszka to nie kwiat", ua: "Шишка — не квітка" },
      visual: vizGh("l27-szyszki.png", {
        alt: { pl: "Małe szyszki męskie i większa szyszka żeńska", ua: "Малі чоловічі шишки і більша жіноча шишка" },
        title: { pl: "Dwa rodzaje szyszek. Żadna nie jest kwiatem.", ua: "Два види шишок. Жодна не є квіткою." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: skupisko małych żółtawych szyszek męskich — pyłek. PRAWA: większa drewniejąca szyszka żeńska — nasiona na łuskach. Napis: szyszka ≠ kwiat. Bez przekroju kwiatu (pręciki, słupek). Bez owocu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Szyszka męska"), " jest zwykle mniejsza i miękka. Wytwarza ", em("pyłek"), " — żółty „proszek”."],
          ["", em("Szyszka żeńska"), " drewnieje. Na jej łuskach leżą zalążki, z których po zapyleniu powstają nasiona."],
          "Kwiatu tu nie rozbieramy (lekcja 30). Nie myl szyszki z kłosem skrzypa (lekcja 26) ani z pękiem liści."
        ],
        ua: [
          ["", em("Чоловіча шишка"), " зазвичай менша і м’яка. Виробляє ", em("пилок"), " — жовтий «порошок»."],
          ["", em("Жіноча шишка"), " дерев’яніє. На її лусках лежать насінні зачатки, з яких після запилення виникає насіння."],
          "Квітку тут не розбираємо (урок 30). Не плутати шишку з колоском хвоща (урок 26) і з пучком листків."
        ]
      },
      task: {
        id: "l27-e2",
        type: "true-false",
        question: { pl: "Szyszka nagonasiennych to nie kwiat. Męska daje pyłek, żeńska — miejsce na nasiona.", ua: "Шишка голонасінних — не квітка. Чоловіча дає пилок, жіноча — місце для насіння." },
        answer: true,
        explanation: { pl: "Dwie szyszki, zero kwiatu na tej lekcji.", ua: "Дві шишки, квітки на цьому уроці немає." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwie szyszki", ua: "Дві шишки" },
      visual: tree({
        layout: "fork",
        root: { pl: "szyszki", ua: "шишки" },
        items: [
          { pl: "męska — pyłek", ua: "чоловіча — пилок" },
          { pl: "żeńska — nasiona", ua: "жіноча — насіння" }
        ]
      }),
      items: [
        { pl: "męska — zwykle mniejsza, pyłek", ua: "чоловіча — зазвичай менша, пилок" },
        { pl: "żeńska — łuski i nasiona", ua: "жіноча — луски і насіння" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Wiatr przenosi pyłek", ua: "Вітер несе пилок" },
      visual: vizGh("l27-wiatr.png", {
        alt: { pl: "Pyłek niesiony wiatrem od szyszki męskiej do żeńskiej", ua: "Пилок, що його несе вітер від чоловічої шишки до жіночої" },
        title: { pl: "Nie kropla wody jak u mchu. Pyłek leci z wiatrem.", ua: "Не крапля води як у моху. Пилок летить із вітром." },
        prompt: { pl: "Edukacyjna infografika 16:9. Strzałki wiatru niosą żółty pyłek od szyszek męskich do szyszki żeńskiej. Etykiety PL: pyłek; wiatr; zapylenie. Mały napis: mech i paproć potrzebują kropli wody — tu nie. Bez pszczoły i kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Zapylenie"), " to przeniesienie pyłku na szyszkę żeńską. U nagonasiennych robi to zwykle ", em("wiatr"), "."],
          "Mchy i paprocie potrzebowały kropli wody, żeby się zapłodnić. Nagonasienne mogą żyć w suchszym lesie — pyłek nie pływa, tylko leci.",
          "Pszczoły i barwny kwiat — to okrytonasienne, później. Dziś: chmura pyłku wiosną przy drzewie iglastym."
        ],
        ua: [
          ["", em("Запилення"), " — перенесення пилку на жіночу шишку. У голонасінних це зазвичай робить ", em("вітер"), "."],
          "Мохи і папороті потребували краплі води, щоб запліднитися. Голонасінні можуть жити в сухішому лісі — пилок не плаває, а летить.",
          "Бджоли і барвиста квітка — це покритонасінні, пізніше. Сьогодні: хмара пилку навесні біля хвойного дерева."
        ]
      },
      task: {
        id: "l27-e3",
        type: "single-choice",
        question: { pl: "Co przenosi pyłek u typowych nagonasiennych?", ua: "Що переносить пилок у типових голонасінних?" },
        options: [
          { id: "a", label: { pl: "wiatr", ua: "вітер" } },
          { id: "b", label: { pl: "kropla wody jak u mchu", ua: "крапля води як у моху" } },
          { id: "c", label: { pl: "pszczoła w kwiecie jabłoni", ua: "бджола у квітці яблуні" } }
        ],
        answer: "a",
        explanation: { pl: "Wiatr. Nie kropla mchu i nie kwiat.", ua: "Вітер. Не крапля моху і не квітка." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od pyłku do siewki", ua: "Від пилку до сіяння" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Pyłek, zapylenie, nasiono, siewka", ua: "Пилок, запилення, насінина, сіянець" },
        items: [
          { pl: "pyłek", ua: "пилок" },
          { pl: "zapylenie wiatrem", ua: "запилення вітром" },
          { pl: "nasiono", ua: "насінина" },
          { pl: "siewka", ua: "сіянець" }
        ],
        caption: { pl: "bez kropli wody jak u mchu", ua: "без краплі води як у моху" }
      }),
      items: [
        { pl: "pyłek — ze szyszki męskiej", ua: "пилок — з чоловічої шишки" },
        { pl: "nasiono — na łusce żeńskiej", ua: "насінина — на лусці жіночої" },
        { pl: "siewka — młoda roślina z nasiona", ua: "сіянець — молода рослина з насінини" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Igły to liście", ua: "Хвоя — це листки" },
      visual: vizGh("l27-igly.png", {
        alt: { pl: "Igły na pędzie, bez rozpoznawania gatunku", ua: "Хвоя на пагоні, без розпізнавання виду" },
        title: { pl: "Wąskie liście. Które drzewo — lekcja 28.", ua: "Вузькі листки. Яке дерево — урок 28." },
        prompt: { pl: "Edukacyjny zbliżenie 16:9 pędu z igłami. Etykiety PL: igła = liść; skórka chroni przed suszą. Bez porównania sosna 2 igły / świerk pojedynczo / jodła miękka — to lekcja 28. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Igły"), " to liście: wąskie, często twarde, z grubą skórką. Fotosynteza jak na lekcji 9 i 24, tylko inny kształt niż blaszka dębu."],
          "Taki liść mniej paruje — drzewo lepiej znosi mróz i suszę niż paproć w wąwozie.",
          "Nie liczymy dziś, po ile igieł w pęczku i czy szyszka zwisa. To rozpoznawanie drzew — lekcja 28."
        ],
        ua: [
          ["", em("Хвоя"), " — листки: вузькі, часто тверді, з товстою шкіркою. Фотосинтез як на уроках 9 і 24, лише інша форма, ніж пластинка дуба."],
          "Такий листок менше випаровує — дерево краще зносить мороз і посуху, ніж папороть у яру.",
          "Не рахуємо сьогодні, по скільки хвоїнок у пучку і чи шишка звисає. Це розпізнавання дерев — урок 28."
        ]
      },
      task: {
        id: "l27-e4",
        type: "true-false",
        question: { pl: "Igły nagonasiennych to liście. Gatunków (sosna, świerk, jodła) na tej lekcji nie rozpoznajemy.", ua: "Хвоя голонасінних — листки. Видів (сосна, ялина, ялиця) на цьому уроці не розпізнаємо." },
        answer: true,
        explanation: { pl: "Igła = liść. Klucz gatunków = L28.", ua: "Хвоя = листок. Ключ видів = урок 28." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Organy drzewa", ua: "Органи дерева" },
      visual: tree({
        layout: "nested",
        root: { pl: "nagonasienne", ua: "голонасінні" },
        groups: [
          {
            title: { pl: "igły", ua: "хвоя" },
            items: [{ pl: "liście", ua: "листки" }]
          },
          {
            title: { pl: "szyszki", ua: "шишки" },
            items: [{ pl: "pyłek i nasiona", ua: "пилок і насіння" }]
          },
          {
            title: { pl: "pień i korzeń", ua: "стовбур і корінь" },
            items: [{ pl: "z lekcji 22–23", ua: "з уроків 22–23" }]
          }
        ]
      }),
      items: [
        { pl: "igły — liście, nie kwiat", ua: "хвоя — листки, не квітка" },
        { pl: "szyszki — nie owoc", ua: "шишки — не плід" },
        { pl: "pień i korzeń — jak u innych drzew", ua: "стовбур і корінь — як в інших дерев" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Nie mech i nie paproć", ua: "Не мох і не папороть" },
      visual: vizGh("l27-vs-zarodniki.png", {
        alt: { pl: "Porównanie: puszka, kupki, szyszka z nasionami", ua: "Порівняння: коробочка, купки, шишка з насінням" },
        title: { pl: "Trzy sposoby. Dziś tylko nasiona na łusce.", ua: "Три способи. Сьогодні лише насіння на лусці." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 mech — puszka, zarodniki. 2 paproć — kupki na liściu. 3 szyszka — nasiona nagie. Napis: nagonasienne. Bez kwiatu jabłoni. Bez klucza sosna/świerk. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mech: chwytniki i puszka. Paproć: kłącze, korzenie, kupki zarodni. Nagonasienne: drzewo (lub krzew), igły, szyszki, nasiona.",
          "Nie potrzebują kropli wody do zapłodnienia jak mech i paproć. Dlatego las iglasty może być suchszy niż wąwóz z paprociami.",
          "Nie myl szyszki z owocem i nie zrywaj jej jako „jabłka”. Owoc osłania nasiona — to następna grupa roślin."
        ],
        ua: [
          "Мох: ризоїди і коробочка. Папороть: кореневище, корені, купки спорангіїв. Голонасінні: дерево (або кущ), хвоя, шишки, насіння.",
          "Не потребують краплі води для запліднення як мох і папороть. Тому хвойний ліс може бути сухішим за яр із папоротями.",
          "Не плутати шишку з плодом і не зривати її як «яблуко». Плід вкриває насіння — це наступна група рослин."
        ]
      },
      task: {
        id: "l27-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz cechy nagonasiennych z tej lekcji.", ua: "Познач ознаки голонасінних з цього уроку." },
        options: [
          { id: "a", label: { pl: "nasiona na łusce szyszki, nie w owocu", ua: "насіння на лусці шишки, не в плоді" } },
          { id: "b", label: { pl: "pyłek niesie wiatr", ua: "пилок несе вітер" } },
          { id: "c", label: { pl: "igły to liście", ua: "хвоя — листки" } },
          { id: "d", label: { pl: "zarodniki w puszce mchu", ua: "спори в коробочці моху" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Nasiona, wiatr, igły. Puszka = mech.", ua: "Насіння, вітер, хвоя. Коробочка = мох." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy grupy", ua: "Три групи" },
      visual: tree({
        layout: "fork",
        root: { pl: "rośliny", ua: "рослини" },
        items: [
          { pl: "mchy", ua: "мохи" },
          { pl: "paprotniki", ua: "папоротеподібні" },
          { pl: "nagonasienne", ua: "голонасінні" }
        ]
      }),
      items: [
        { pl: "mchy — zarodniki, chwytniki", ua: "мохи — спори, ризоїди" },
        { pl: "paprotniki — zarodniki, korzenie", ua: "папоротеподібні — спори, корені" },
        { pl: "nagonasienne — nasiona, szyszki", ua: "голонасінні — насіння, шишки" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Nagie nasiona", ua: "Практика. Голе насіння" },
      task: {
        id: "l27-p1",
        type: "single-choice",
        question: { pl: "Nasiona nagonasiennych leżą:", ua: "Насіння голонасінних лежить:" },
        options: [
          { id: "a", label: { pl: "na łusce szyszki, nie w owocu", ua: "на лусці шишки, не в плоді" } },
          { id: "b", label: { pl: "w jabłku", ua: "в яблуці" } },
          { id: "c", label: { pl: "w puszce mchu", ua: "у коробочці моху" } }
        ],
        answer: "a",
        explanation: { pl: "Nago = na łusce. Owoc i puszka to inne lekcje.", ua: "Голе = на лусці." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Nasiona czy zarodniki", ua: "Насіння чи спори" },
      task: {
        id: "l27-p2",
        type: "true-false",
        question: { pl: "Nagonasienne mają nasiona. Mchy i paprocie rozsiewają się zarodnikami.", ua: "Голонасінні мають насіння. Мохи і папороті поширюються спорами." },
        answer: true,
        explanation: { pl: "Nasiono vs zarodnik (L25–26).", ua: "Насінина проти спори." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Szyszka", ua: "Шишка" },
      task: {
        id: "l27-p3",
        type: "single-choice",
        question: { pl: "Szyszka nagonasiennych to:", ua: "Шишка голонасінних — це:" },
        options: [
          { id: "a", label: { pl: "organ z łuskami (pyłek albo nasiona), nie kwiat", ua: "орган із лусками (пилок або насіння), не квітка" } },
          { id: "b", label: { pl: "kwiat jabłoni", ua: "квітка яблуні" } },
          { id: "c", label: { pl: "kupki zarodni paproci", ua: "купки спорангіїв папороті" } }
        ],
        answer: "a",
        explanation: { pl: "Szyszka ≠ kwiat ≠ kupki.", ua: "Шишка ≠ квітка ≠ купки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wiatr", ua: "Вітер" },
      task: {
        id: "l27-p4",
        type: "single-choice",
        question: { pl: "Zapylenie u typowych nagonasiennych odbywa się przez:", ua: "Запилення в типових голонасінних відбувається через:" },
        options: [
          { id: "a", label: { pl: "wiatr, który niesie pyłek", ua: "вітер, що несе пилок" } },
          { id: "b", label: { pl: "kroplę wody na przedroślu paproci", ua: "краплю води на заростку папороті" } },
          { id: "c", label: { pl: "pszczołę w barwnym kwiecie", ua: "бджолу в барвистій квітці" } }
        ],
        answer: "a",
        explanation: { pl: "Wiatr. Woda = mech/paproć. Pszczoła = później.", ua: "Вітер." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Igły", ua: "Хвоя" },
      task: {
        id: "l27-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "igły to liście nagonasiennych", ua: "хвоя — листки голонасінних" } },
          { id: "b", label: { pl: "rozpoznawanie sosny i świerka jest na lekcji 28", ua: "розпізнавання сосни і ялини — на уроці 28" } },
          { id: "c", label: { pl: "igła to to samo co puszka mchu", ua: "хвоя — те саме, що коробочка моху" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Igła = liść. Gatunki = L28. Puszka = mech.", ua: "Хвоя = листок. Види = урок 28." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Nagie nasiona", ua: "Перевірка 1. Голе насіння" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l27-s1",
        type: "single-choice",
        question: { pl: "Dlaczego nasiona nagonasiennych nazywamy nagimi?", ua: "Чому насіння голонасінних називаємо голим?" },
        options: [
          { id: "a", label: { pl: "leżą na łusce szyszki, nie są schowane w owocu", ua: "лежать на лусці шишки, не сховані в плоді" } },
          { id: "b", label: { pl: "to zarodniki w kupkach paproci", ua: "це спори в купках папороті" } },
          { id: "c", label: { pl: "są zawsze w jabłku", ua: "завжди є в яблуці" } }
        ],
        answer: "a",
        explanation: { pl: "Nago = nie w owocu.", ua: "Голе = не в плоді." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Nasiona vs zarodniki", ua: "Перевірка 2. Насіння проти спор" },
      task: {
        id: "l27-s2",
        type: "true-false",
        question: { pl: "Nagonasienne mają nasiona. Mchy i paprocie — zarodniki, nie nasiona.", ua: "Голонасінні мають насіння. Мохи і папороті — спори, не насіння." },
        answer: true,
        explanation: { pl: "Dwie strategie rozsiewu.", ua: "Дві стратегії поширення." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Szyszka", ua: "Перевірка 3. Шишка" },
      task: {
        id: "l27-s3",
        type: "single-choice",
        question: { pl: "Co wskażesz jako szyszkę?", ua: "Що вкажеш як шишку?" },
        options: [
          { id: "a", label: { pl: "organ z łuskami: męska — pyłek, żeńska — nasiona; to nie kwiat", ua: "орган із лусками: чоловіча — пилок, жіноча — насіння; це не квітка" } },
          { id: "b", label: { pl: "kwiat z płatkami", ua: "квітку з пелюстками" } },
          { id: "c", label: { pl: "puszkę mchu na trzonku", ua: "коробочку моху на ніжці" } }
        ],
        answer: "a",
        explanation: { pl: "Szyszka ≠ kwiat ≠ puszka.", ua: "Шишка ≠ квітка ≠ коробочка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Wiatr", ua: "Перевірка 4. Вітер" },
      task: {
        id: "l27-s4",
        type: "single-choice",
        question: { pl: "Jak pyłek dociera do szyszki żeńskiej?", ua: "Як пилок доходить до жіночої шишки?" },
        options: [
          { id: "a", label: { pl: "wiatr go przenosi (zapylenie)", ua: "вітер його переносить (запилення)" } },
          { id: "b", label: { pl: "kropla wody jak u mchu i paproci", ua: "крапля води як у моху і папороті" } },
          { id: "c", label: { pl: "pszczoła wchodzi do kwiatu", ua: "бджола заходить у квітку" } }
        ],
        answer: "a",
        explanation: { pl: "Zapylenie wiatrem.", ua: "Запилення вітром." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Igły", ua: "Перевірка 5. Хвоя" },
      task: {
        id: "l27-s5",
        type: "multiple-choice",
        question: { pl: "Które zdania są prawdziwe o igłach?", ua: "Які речення правдиві про хвою?" },
        options: [
          { id: "a", label: { pl: "igły to liście", ua: "хвоя — листки" } },
          { id: "b", label: { pl: "gatunki drzew iglastych rozpoznamy na lekcji 28", ua: "види хвойних дерев розпізнаємо на уроці 28" } },
          { id: "c", label: { pl: "igła to nasiono w owocu", ua: "хвоя — насінина в плоді" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Liście. Klucz gatunków = następna lekcja.", ua: "Листки. Ключ видів = наступний урок." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "nagonasienne", ua: "голонасінні" },
        items: [
          { pl: "nasiona nagie", ua: "голе насіння" },
          { pl: "szyszki", ua: "шишки" },
          { pl: "wiatr", ua: "вітер" }
        ]
      }),
      text: {
        pl: [
          "Nasiona na łusce, nie w owocu.",
          "Nie zarodniki mchu i paproci.",
          "Szyszka ≠ kwiat.",
          "Pyłek niesie wiatr.",
          "Igły = liście; gatunki — lekcja 28.",
          "Kwiat i owoc — lekcje 29–30."
        ],
        ua: [
          "Насіння на лусці, не в плоді.",
          "Не спори моху і папороті.",
          "Шишка ≠ квітка.",
          "Пилок несе вітер.",
          "Хвоя = листки; види — урок 28.",
          "Квітка і плід — уроки 29–30."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić nagie nasiona.", ua: "Можу пояснити голе насіння." },
        { pl: "Potrafię porównać je z zarodnikami.", ua: "Можу порівняти їх зі спорами." },
        { pl: "Potrafię wskazać szyszkę (nie kwiat).", ua: "Можу вказати шишку (не квітку)." },
        { pl: "Potrafię wyjaśnić zapylenie wiatrem.", ua: "Можу пояснити запилення вітром." },
        { pl: "Wiem, że igły to liście, a gatunki są na lekcji 28.", ua: "Знаю, що хвоя — листки, а види — на уроці 28." }
      ]
    }
  ]
};
