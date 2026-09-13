function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L29_Okrytonasienne/images/";

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
        { pl: "Wyjaśnisz, że nasiona okrytonasiennych są w owocu.", ua: "Поясниш, що насіння покритонасінних є в плоді." },
        { pl: "Porównasz je z nagonasiennymi: owoc, nie naga łuska.", ua: "Порівняєш їх із голонасінними: плід, не гола луска." },
        { pl: "Wymienisz trzy formy: drzewo, krzew, roślinę zielną.", ua: "Назвеш три форми: дерево, кущ, трав’янисту рослину." },
        { pl: "Odróżnisz jednoliścienne od dwuliściennych.", ua: "Відрізниш однодольні від дводольних." },
        { pl: "Powiesz, że budowę kwiatu poznasz na lekcji 30.", ua: "Скажеш, що будову квітки пізнаєш на уроці 30." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "okrytonasienne", ua: "покритонасінні" },
        { pl: "owoc", ua: "плід" },
        { pl: "kwiat", ua: "квітка" },
        { pl: "roślina zielna", ua: "трав’яниста рослина" },
        { pl: "krzew", ua: "кущ" },
        { pl: "jednoliścienne", ua: "однодольні" },
        { pl: "dwuliścienne", ua: "дводольні" },
        { pl: "liścień", ua: "сім’ядоля" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l29-zacznijmy.png", {
        alt: { pl: "Łąka i sad: kwiaty i owoce", ua: "Лука і сад: квітки і плоди" },
        title: { pl: "Najliczniejsza grupa roślin. Dziś grupa, nie części kwiatu.", ua: "Найчисленніша група рослин. Сьогодні група, не частини квітки." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9: łąka z kwiatami i jabłoń z jabłkami, dzień. Etykieta PL: rośliny okrytonasienne. Bez przekroju kwiatu (pręciki, słupek). Bez szyszki jako głównego motywu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Nagonasienne miały nasiona na łusce szyszki (lekcja 27). Dziś grupa, u której nasiono jest schowane w owocu — i która ma kwiaty.",
          "Części kwiatu (płatki, pręciki…) — lekcja 30. Jak nasiona podróżują — lekcja 31. Drzewa liściaste z nazwy — lekcja 33."
        ],
        ua: [
          "Голонасінні мали насіння на лусці шишки (урок 27). Сьогодні група, у якої насінина схована в плоді — і яка має квітки.",
          "Частини квітки (пелюстки, тичинки…) — урок 30. Як насіння подорожує — урок 31. Листяні дерева з назви — урок 33."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Nasiona w owocu", ua: "Насіння в плоді" },
      visual: vizGh("l29-owoc.png", {
        alt: { pl: "Przekrój jabłka z nasionami obok otwartej szyszki", ua: "Переріз яблука з насінням поряд із відкритою шишкою" },
        title: { pl: "Owoc okrywa nasiona. Szyszka ich nie chowa w miąższu.", ua: "Плід вкриває насіння. Шишка не ховає його в м’якуші." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA: przekrój jabłka, etykiety PL: owoc; nasiona w środku. PRAWA: łuska szyszki z nagim nasionem, etykieta: nagonasienne (L27). Napis: okryte = w owocu. Bez części kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Rośliny okrytonasienne"), " wytwarzają ", em("owoce"), ". Wewnątrz leżą nasiona — stąd „okryte”: owoc je osłania."],
          "Jabłko, śliwka, strąk grochu, ziarniak pszenicy — to różne owoce. Dziś wystarczy: nasiono nie leży nago na łusce.",
          "Nie myl owocu z szyszkojagodą jałowca (lekcja 28): tam to przekształcona szyszka, nie jabłko."
        ],
        ua: [
          ["", em("Покритонасінні рослини"), " виробляють ", em("плоди"), ". Всередині лежить насіння — звідси «покриті»: плід його захищає."],
          "Яблуко, слива, стручок гороху, зернівка пшениці — різні плоди. Сьогодні досить: насінина не лежить голою на лусці.",
          "Не плутати плід із шишкоягодою ялівцю (урок 28): там видозмінена шишка, не яблуко."
        ]
      },
      task: {
        id: "l29-e1",
        type: "single-choice",
        question: { pl: "Co znaczy, że nasiona są okryte?", ua: "Що означає, що насіння покрите?" },
        options: [
          { id: "a", label: { pl: "leżą w owocu, nie nago na łusce szyszki", ua: "лежать у плоді, не голо на лусці шишки" } },
          { id: "b", label: { pl: "to zarodniki w puszce mchu", ua: "це спори в коробочці моху" } },
          { id: "c", label: { pl: "to igły sosny", ua: "це хвоя сосни" } }
        ],
        answer: "a",
        explanation: { pl: "Okryte = w owocu. Nie mech i nie igła.", ua: "Покриті = у плоді." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Naga łuska albo owoc", ua: "Гола луска або плід" },
      visual: tree({
        layout: "fork",
        root: { pl: "nasiona", ua: "насіння" },
        items: [
          { pl: "nagie — szyszka", ua: "голі — шишка" },
          { pl: "okryte — owoc", ua: "покриті — плід" }
        ]
      }),
      items: [
        { pl: "nagonasienne — na łusce (L27)", ua: "голонасінні — на лусці (урок 27)" },
        { pl: "okrytonasienne — w owocu", ua: "покритонасінні — у плоді" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Mają kwiaty", ua: "Мають квітки" },
      visual: vizGh("l29-kwiat.png", {
        alt: { pl: "Kwiat na łące bez podpisanych części", ua: "Квітка на луці без підписаних частин" },
        title: { pl: "Kwiat jest. Jego części — następna lekcja.", ua: "Квітка є. Її частини — наступний урок." },
        prompt: { pl: "Fotorealistyczne zbliżenie 16:9 barwnego kwiatu (np. jabłoń lub mniszek), dzień. Etykieta PL: kwiat. Bez podpisów: kielich, korona, pręciki, słupek. Napis: budowa — lekcja 30. Bez pszczoły jako jedynego tematu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Okrytonasienne mają ", em("kwiaty"), ". Z kwiatu, po zapyleniu, powstaje owoc z nasionami."],
          "Często pyłek przenoszą owady — barwa i zapach je wabią. Bywa też wiatr, jak u zbóż. Szczegóły zapylenia i części kwiatu: lekcja 30.",
          "Nie rozbieramy dziś płatków ani słupka. Nie myl kwiatu z kłosem skrzypa ani z szyszką."
        ],
        ua: [
          ["Покритонасінні мають ", em("квітки"), ". З квітки після запилення виникає плід із насінням."],
          "Часто пилок переносять комахи — барва і запах їх ваблять. Буває й вітер, як у злаків. Деталі запилення і частини квітки: урок 30.",
          "Сьогодні не розбираємо пелюсток і маточки. Не плутати квітку з колоском хвоща і з шишкою."
        ]
      },
      task: {
        id: "l29-e2",
        type: "true-false",
        question: { pl: "Okrytonasienne mają kwiaty. Budowy kwiatu (płatki, pręciki…) na tej lekcji nie rozbieramy — to lekcja 30.", ua: "Покритонасінні мають квітки. Будови квітки (пелюстки, тичинки…) на цьому уроці не розбираємо — це урок 30." },
        answer: true,
        explanation: { pl: "Kwiat jest cechą grupy. Anatomia = L30.", ua: "Квітка — ознака групи. Анатомія = урок 30." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Szyszka czy kwiat", ua: "Шишка чи квітка" },
      visual: tree({
        layout: "fork",
        root: { pl: "organy", ua: "органи" },
        items: [
          { pl: "szyszka — nagonasienne", ua: "шишка — голонасінні" },
          { pl: "kwiat — okrytonasienne", ua: "квітка — покритонасінні" }
        ]
      }),
      items: [
        { pl: "szyszka — pyłek i nasiona na łuskach", ua: "шишка — пилок і насіння на лусках" },
        { pl: "kwiat — potem owoc (L30)", ua: "квітка — потім плід (урок 30)" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Drzewo, krzew, zielna", ua: "Дерево, кущ, трав’яниста" },
      visual: vizGh("l29-formy.png", {
        alt: { pl: "Drzewo, krzew i roślina zielna obok siebie", ua: "Дерево, кущ і трав’яниста рослина поряд" },
        title: { pl: "Ta sama grupa — trzy sylwetki.", ua: "Та сама група — три силуети." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 drzewo (np. jabłoń) — jeden pień zdrewniały. 2 krzew (np. porzeczka, leszczyna) — kilka pędów od ziemi. 3 roślina zielna (np. trawa, mniszek) — pęd nie drewnieje jak pień. Bez przekroju kwiatu. Bez klucza dąb vs lipa (L33). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Drzewo"), " ma zwykle jeden zdrewniały pień (lekcja 23). ", em("Krzew"), " — kilka zdrewniałych pędów od ziemi."],
          ["", em("Roślina zielna"), " nie buduje pnia jak dąb: pęd jest miękki albo zimuje w glebie (trawa, tulipan, pokrzywa)."],
          "Wszystkie trzy mogą być okrytonasiennymi. Nie myl krzewu z jałowcem z lekcji 28: jałowiec to nagonasienne."
        ],
        ua: [
          ["", em("Дерево"), " зазвичай має один здерев’янілий стовбур (урок 23). ", em("Кущ"), " — кілька здерев’янілих пагонів від землі."],
          ["", em("Трав’яниста рослина"), " не будує стовбура як дуб: пагін м’який або зимує в ґрунті (трава, тюльпан, кропива)."],
          "Усі три можуть бути покритонасінними. Не плутати кущ із ялівцем з уроку 28: ялівець — голонасінні."
        ]
      },
      task: {
        id: "l29-e3",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy formy okrytonasiennych z tej lekcji.", ua: "Познач три форми покритонасінних з цього уроку." },
        options: [
          { id: "a", label: { pl: "drzewo", ua: "дерево" } },
          { id: "b", label: { pl: "krzew", ua: "кущ" } },
          { id: "c", label: { pl: "roślina zielna", ua: "трав’яниста рослина" } },
          { id: "d", label: { pl: "mech z chwytnikami", ua: "мох із ризоїдами" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy sylwetki. Mech = L25.", ua: "Три силуети. Мох = урок 25." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy sylwetki", ua: "Три силуети" },
      visual: tree({
        layout: "nested",
        root: { pl: "okrytonasienne", ua: "покритонасінні" },
        groups: [
          {
            title: { pl: "drzewo", ua: "дерево" },
            items: [{ pl: "pień", ua: "стовбур" }]
          },
          {
            title: { pl: "krzew", ua: "кущ" },
            items: [{ pl: "pędy od ziemi", ua: "пагони від землі" }]
          },
          {
            title: { pl: "zielna", ua: "трав’яниста" },
            items: [{ pl: "bez pnia", ua: "без стовбура" }]
          }
        ]
      }),
      items: [
        { pl: "drzewo — jeden pień", ua: "дерево — один стовбур" },
        { pl: "krzew — kilka pędów", ua: "кущ — кілька пагонів" },
        { pl: "zielna — nie drewnieje jak pień", ua: "трав’яниста — не дерев’яніє як стовбур" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Jedno- i dwuliścienne", ua: "Одно- і дводольні" },
      visual: vizGh("l29-jedno-dwu.png", {
        alt: { pl: "Trawa z nerwami równoległymi i liść dębu z siatką", ua: "Трава з паралельними жилками і листок дуба із сіткою" },
        title: { pl: "Dwa liścienie albo jeden. Unerwienie z lekcji 24 pomaga.", ua: "Дві сім’ядолі або одна. Жилкування з уроку 24 допомагає." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: fasola / dąb — dwa liścienie, unerwienie siatkowate, napis: dwuliścienne. PRAWA: trawa / kukurydza — jeden liścień, unerwienie równoległe, napis: jednoliścienne. Bez podpisów części kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Liścień"), " to pierwszy liść w nasionie. ", em("Dwuliścienne"), " mają dwa (fasola, dąb, jabłoń). ", em("Jednoliścienne"), " — jeden (trawy, lilia, kukurydza)."],
          "Przypomnienie lekcji 24: siatka nerwów często u dwuliściennych, linie równoległe — u jednoliściennych. Korzeń palowy bywa u dwuliściennych, wiązkowy — u jednoliściennych (lekcja 22).",
          "Nie ucz się dziś listy gatunków parku — to lekcja 33. Tu tylko dwie szufladki."
        ],
        ua: [
          ["", em("Сім’ядоля"), " — перший листок у насінині. ", em("Дводольні"), " мають дві (квасоля, дуб, яблуня). ", em("Однодольні"), " — одну (трави, лілія, кукурудза)."],
          "Нагадування уроку 24: сітка жилок часто в дводольних, паралельні лінії — в однодольних. Стрижневий корінь буває в дводольних, мичкуватий — в однодольних (урок 22).",
          "Не вчи сьогодні список видів парку — це урок 33. Тут лише дві шухлядки."
        ]
      },
      task: {
        id: "l29-e4",
        type: "single-choice",
        question: { pl: "Czym jednoliścienne różnią się od dwuliściennych?", ua: "Чим однодольні відрізняються від дводольних?" },
        options: [
          { id: "a", label: { pl: "jeden liścień i często unerwienie równoległe; dwa liścienie i często siatka", ua: "одна сім’ядоля і часто паралельне жилкування; дві сім’ядолі і часто сітка" } },
          { id: "b", label: { pl: "jednoliścienne to mchy, dwuliścienne to paprocie", ua: "однодольні — мохи, дводольні — папороті" } },
          { id: "c", label: { pl: "oba mają tylko szyszki, nigdy owocu", ua: "обидва мають лише шишки, ніколи плоду" } }
        ],
        answer: "a",
        explanation: { pl: "Liścienie + unerwienie (L24). Nie mech i nie szyszka.", ua: "Сім’ядолі + жилкування." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwie szufladki", ua: "Дві шухлядки" },
      visual: tree({
        layout: "fork",
        root: { pl: "okrytonasienne", ua: "покритонасінні" },
        items: [
          { pl: "jednoliścienne", ua: "однодольні" },
          { pl: "dwuliścienne", ua: "дводольні" }
        ]
      }),
      items: [
        { pl: "jednoliścienne — 1 liścień, często trawy", ua: "однодольні — 1 сім’ядоля, часто трави" },
        { pl: "dwuliścienne — 2 liścienie, np. fasola, dąb", ua: "дводольні — 2 сім’ядолі, напр. квасоля, дуб" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Najliczniejsza grupa", ua: "Найчисленніша група" },
      visual: vizGh("l29-liczba.png", {
        alt: { pl: "Wiele okrytonasiennych: łąka, sad, pole", ua: "Багато покритонасінних: лука, сад, поле" },
        title: { pl: "Łąka, pole, sad, park — prawie wszystko stąd.", ua: "Лука, поле, сад, парк — майже все звідси." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 łąka — rośliny zielne. 2 pole zbóż — jednoliścienne. 3 sad / warzywnik. Napis: okrytonasienne. Bez listy dąb-lipa-klon jako klucza (L33). Bez przekroju kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Okrytonasienne to najliczniejsza grupa roślin lądowych, które widzisz na co dzień: pokarm, tkaniny (len, bawełna), drewno liściaste, ozdoby.",
          "Pokarm i przegląd drzew — lekcja 33. Kiełkowanie nasiona — lekcja 32. Dziś zapamiętaj grupę i dwie szufladki.",
          "Nie wracamy do mchów i paproci jako tematu: one nie mają owocu."
        ],
        ua: [
          "Покритонасінні — найчисленніша група наземних рослин, які бачиш щодня: пожива, тканини (льон, бавовна), листяна деревина, прикраси.",
          "Пожива і огляд дерев — урок 33. Проростання насінини — урок 32. Сьогодні запам’ятай групу і дві шухлядки.",
          "Не повертаємось до мохів і папоротей як теми: вони не мають плоду."
        ]
      },
      task: {
        id: "l29-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz cechy okrytonasiennych z tej lekcji.", ua: "Познач ознаки покритонасінних з цього уроку." },
        options: [
          { id: "a", label: { pl: "nasiona w owocu", ua: "насіння в плоді" } },
          { id: "b", label: { pl: "mają kwiaty (budowa — L30)", ua: "мають квітки (будова — урок 30)" } },
          { id: "c", label: { pl: "drzewo, krzew albo zielna", ua: "дерево, кущ або трав’яниста" } },
          { id: "d", label: { pl: "nasiona tylko na łusce szyszki", ua: "насіння лише на лусці шишки" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Owoc, kwiat, trzy formy. Szyszka = L27.", ua: "Плід, квітка, три форми. Шишка = урок 27." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Cechy grupy", ua: "Ознаки групи" },
      visual: tree({
        layout: "fork",
        root: { pl: "okrytonasienne", ua: "покритонасінні" },
        items: [
          { pl: "owoc", ua: "плід" },
          { pl: "kwiat", ua: "квітка" },
          { pl: "dwie szufladki", ua: "дві шухлядки" }
        ]
      }),
      items: [
        { pl: "owoc okrywa nasiona", ua: "плід вкриває насіння" },
        { pl: "kwiat — szczegóły L30", ua: "квітка — деталі урок 30" },
        { pl: "jedno- i dwuliścienne", ua: "одно- і дводольні" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Owoc", ua: "Практика. Плід" },
      task: {
        id: "l29-p1",
        type: "single-choice",
        question: { pl: "Nasiona okrytonasiennych leżą:", ua: "Насіння покритонасінних лежить:" },
        options: [
          { id: "a", label: { pl: "w owocu", ua: "у плоді" } },
          { id: "b", label: { pl: "nago na łusce szyszki", ua: "голо на лусці шишки" } },
          { id: "c", label: { pl: "w puszce mchu", ua: "у коробочці моху" } }
        ],
        answer: "a",
        explanation: { pl: "W owocu. Szyszka = nagonasienne. Puszka = mech.", ua: "У плоді." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Porównanie", ua: "Порівняння" },
      task: {
        id: "l29-p2",
        type: "true-false",
        question: { pl: "U nagonasiennych nasiono leży na łusce. U okrytonasiennych jest w owocu.", ua: "У голонасінних насінина лежить на лусці. У покритонасінних — у плоді." },
        answer: true,
        explanation: { pl: "Naga łuska vs owoc.", ua: "Гола луска проти плоду." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Formy", ua: "Форми" },
      task: {
        id: "l29-p3",
        type: "single-choice",
        question: { pl: "Trawa i mniszek to przykłady:", ua: "Трава і кульбаба — приклади:" },
        options: [
          { id: "a", label: { pl: "roślin zielnych", ua: "трав’янистих рослин" } },
          { id: "b", label: { pl: "jednego pnia jak dąb", ua: "одного стовбура як дуб" } },
          { id: "c", label: { pl: "szyszek świerka", ua: "шишок ялини" } }
        ],
        answer: "a",
        explanation: { pl: "Zielne: bez pnia drzewa. Nie świerk.", ua: "Трав’янисті: без стовбура дерева." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Liścienie", ua: "Сім’ядолі" },
      task: {
        id: "l29-p4",
        type: "single-choice",
        question: { pl: "Trawy z unerwieniem równoległym to zwykle:", ua: "Трави з паралельним жилкуванням — зазвичай:" },
        options: [
          { id: "a", label: { pl: "jednoliścienne", ua: "однодольні" } },
          { id: "b", label: { pl: "dwuliścienne jak fasola", ua: "дводольні як квасоля" } },
          { id: "c", label: { pl: "mchy", ua: "мохи" } }
        ],
        answer: "a",
        explanation: { pl: "Jeden liścień + często linie (L24).", ua: "Одна сім’ядоля + часто лінії." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Kwiat", ua: "Квітка" },
      task: {
        id: "l29-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "okrytonasienne mają kwiaty", ua: "покритонасінні мають квітки" } },
          { id: "b", label: { pl: "budowę kwiatu poznamy na lekcji 30", ua: "будову квітки пізнаємо на уроці 30" } },
          { id: "c", label: { pl: "kwiat to to samo co szyszka sosny", ua: "квітка — те саме, що шишка сосни" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Kwiat jest, anatomia później. Szyszka ≠ kwiat.", ua: "Квітка є, анатомія пізніше." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Owoc", ua: "Перевірка 1. Плід" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l29-s1",
        type: "single-choice",
        question: { pl: "Gdzie leżą nasiona okrytonasiennych?", ua: "Де лежить насіння покритонасінних?" },
        options: [
          { id: "a", label: { pl: "w owocu", ua: "у плоді" } },
          { id: "b", label: { pl: "nago na łusce szyszki", ua: "голо на лусці шишки" } },
          { id: "c", label: { pl: "w kupkach zarodni paproci", ua: "у купках спорангіїв папороті" } }
        ],
        answer: "a",
        explanation: { pl: "W owocu.", ua: "У плоді." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Porównanie", ua: "Перевірка 2. Порівняння" },
      task: {
        id: "l29-s2",
        type: "true-false",
        question: { pl: "Okrytonasienne chowają nasiona w owocu. Nagonasienne mają je na łusce szyszki.", ua: "Покритонасінні ховають насіння в плоді. Голонасінні мають його на лусці шишки." },
        answer: true,
        explanation: { pl: "Owoc vs naga łuska.", ua: "Плід проти голої луски." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Formy", ua: "Перевірка 3. Форми" },
      task: {
        id: "l29-s3",
        type: "multiple-choice",
        question: { pl: "Które trzy formy wymienisz?", ua: "Які три форми назвеш?" },
        options: [
          { id: "a", label: { pl: "drzewo", ua: "дерево" } },
          { id: "b", label: { pl: "krzew", ua: "кущ" } },
          { id: "c", label: { pl: "roślina zielna", ua: "трав’яниста рослина" } },
          { id: "d", label: { pl: "wirus", ua: "вірус" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Drzewo, krzew, zielna. Wirus = L16.", ua: "Дерево, кущ, трав’яниста." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Jedno- i dwuliścienne", ua: "Перевірка 4. Одно- і дводольні" },
      task: {
        id: "l29-s4",
        type: "single-choice",
        question: { pl: "Jak odróżnisz jednoliścienne od dwuliściennych?", ua: "Як відрізниш однодольні від дводольних?" },
        options: [
          { id: "a", label: { pl: "liczba liścieni (1 albo 2) i często unerwienie (równoległe albo siatka)", ua: "число сім’ядолей (1 або 2) і часто жилкування (паралельне або сітка)" } },
          { id: "b", label: { pl: "tylko po szyszce sosny", ua: "лише по шишці сосни" } },
          { id: "c", label: { pl: "jednoliścienne nie mają nasion", ua: "однодольні не мають насіння" } }
        ],
        answer: "a",
        explanation: { pl: "Liścienie + unerwienie.", ua: "Сім’ядолі + жилкування." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Kwiat", ua: "Перевірка 5. Квітка" },
      task: {
        id: "l29-s5",
        type: "true-false",
        question: { pl: "Budowę kwiatu (płatki, pręciki, słupek) poznasz na lekcji 30. Dziś wystarczy: okrytonasienne mają kwiaty.", ua: "Будову квітки (пелюстки, тичинки, маточка) пізнаєш на уроці 30. Сьогодні досить: покритонасінні мають квітки." },
        answer: true,
        explanation: { pl: "Grupa dziś, anatomia jutro.", ua: "Група сьогодні, анатомія завтра." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "okrytonasienne", ua: "покритонасінні" },
        items: [
          { pl: "owoc", ua: "плід" },
          { pl: "kwiat", ua: "квітка" },
          { pl: "jedno- / dwuliścienne", ua: "одно- / дводольні" }
        ]
      }),
      text: {
        pl: [
          "Nasiona w owocu, nie na łusce.",
          "Mają kwiaty — części na lekcji 30.",
          "Drzewo, krzew, zielna.",
          "Jednoliścienne i dwuliścienne.",
          "Rozsiew i kiełkowanie — lekcje 31–32.",
          "Przegląd drzew liściastych — lekcja 33."
        ],
        ua: [
          "Насіння в плоді, не на лусці.",
          "Мають квітки — частини на уроці 30.",
          "Дерево, кущ, трав’яниста.",
          "Однодольні і дводольні.",
          "Поширення і проростання — уроки 31–32.",
          "Огляд листяних дерев — урок 33."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić nasiona w owocu.", ua: "Можу пояснити насіння в плоді." },
        { pl: "Potrafię porównać z nagonasiennymi.", ua: "Можу порівняти з голонасінними." },
        { pl: "Potrafię wymienić drzewo, krzew i roślinę zielną.", ua: "Можу назвати дерево, кущ і трав’янисту рослину." },
        { pl: "Potrafię odróżnić jednoliścienne od dwuliściennych.", ua: "Можу відрізнити однодольні від дводольних." },
        { pl: "Wiem, że kwiat rozbieramy na lekcji 30.", ua: "Знаю, що квітку розбираємо на уроці 30." }
      ]
    }
  ]
};
