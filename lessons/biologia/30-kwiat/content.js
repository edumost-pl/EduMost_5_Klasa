function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L30_Kwiat/images/";

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
        { pl: "Wskażesz kielich i koronę (płatki).", ua: "Вкажеш чашечку і віночок (пелюстки)." },
        { pl: "Wskażesz pręciki i powiesz, że dają pyłek.", ua: "Вкажеш тичинки і скажеш, що дають пилок." },
        { pl: "Wskażesz słupek i zalążnię.", ua: "Вкажеш маточку і зав’язь." },
        { pl: "Porównasz zapylenie przez owady i przez wiatr.", ua: "Порівняєш запилення комахами і вітром." },
        { pl: "Wyjaśnisz, że z kwiatu powstaje owoc.", ua: "Поясниш, що з квітки виникає плід." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "kielich", ua: "чашечка" },
        { pl: "korona (płatki)", ua: "віночок (пелюстки)" },
        { pl: "pręcik", ua: "тичинка" },
        { pl: "słupek", ua: "маточка" },
        { pl: "zalążnia", ua: "зав’язь" },
        { pl: "pyłek", ua: "пилок" },
        { pl: "zapylenie", ua: "запилення" },
        { pl: "nektar", ua: "нектар" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l30-zacznijmy.png", {
        alt: { pl: "Barwny kwiat z owadami w tle", ua: "Барвиста квітка з комахами в тлі" },
        title: { pl: "Lekcja 29: grupa ma kwiaty. Dziś rozbieramy ten organ.", ua: "Урок 29: група має квітки. Сьогодні розбираємо цей орган." },
        prompt: { pl: "Fotorealistyczne zbliżenie 16:9 kwiatu (np. jabłoń, groszek, tulipan), dzień. Etykieta PL: kwiat. Bez podpisów części jeszcze. Bez szyszki. Bez sposobów rozsiewu nasion (haczyki, skrzydełka). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Okrytonasienne mają kwiaty i owoce (lekcja 29). Dziś części kwiatu, pyłek i droga do owocu.",
          "Jak nasiona potem podróżują — lekcja 31. Kiełkowanie — lekcja 32. Nie myl kwiatu z szyszką (lekcja 27)."
        ],
        ua: [
          "Покритонасінні мають квітки і плоди (урок 29). Сьогодні частини квітки, пилок і шлях до плоду.",
          "Як насіння потім подорожує — урок 31. Проростання — урок 32. Не плутати квітку з шишкою (урок 27)."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Kielich i korona", ua: "Чашечка і віночок" },
      visual: vizGh("l30-kielich-korona.png", {
        alt: { pl: "Kwiat z kielichem i płatkami korony", ua: "Квітка з чашечкою і пелюстками віночка" },
        title: { pl: "Zielenie na zewnątrz chronią. Płatki wabią.", ua: "Зелень зовні захищає. Пелюстки ваблять." },
        prompt: { pl: "Edukacyjny schemat 16:9 kwiatu. Etykiety PL: kielich (zielone działki); korona / płatki. Napis: kielich chroni pąk; płatki wabią. Bez pręcików i słupka na tym kadrze (albo szare, niepodpisane). Bez pszczoły jeszcze. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Kielich"), " to zwykle zielone działki na zewnątrz. Chroni pąk, zanim kwiat się otworzy."],
          ["", em("Korona"), " to ", em("płatki"), " — często barwne. Wabią owady. Nie każdy kwiat jest jaskrawy: zboża mają drobne kwiaty, bo pyłek niesie wiatr."],
          "Nie myl płatka z listkiem mchu ani z igłą. To część kwiatu, nie liść dębu z lekcji 24."
        ],
        ua: [
          ["", em("Чашечка"), " — зазвичай зелені чашолистки зовні. Захищає бутон, поки квітка не розкриється."],
          ["", em("Віночок"), " — це ", em("пелюстки"), ", часто барвисті. Ваблять комах. Не кожна квітка яскрава: злаки мають дрібні квітки, бо пилок несе вітер."],
          "Не плутати пелюстку з листочком моху і з хвоєю. Це частина квітки, не листок дуба з уроку 24."
        ]
      },
      task: {
        id: "l30-e1",
        type: "single-choice",
        question: { pl: "Do czego służą kielich i korona?", ua: "Для чого чашечка і віночок?" },
        options: [
          { id: "a", label: { pl: "kielich chroni pąk; płatki korony często wabią owady", ua: "чашечка захищає бутон; пелюстки віночка часто ваблять комах" } },
          { id: "b", label: { pl: "kielich to szyszka sosny", ua: "чашечка — шишка сосни" } },
          { id: "c", label: { pl: "płatki to chwytniki mchu", ua: "пелюстки — ризоїди моху" } }
        ],
        answer: "a",
        explanation: { pl: "Ochrona i wabienie. Nie szyszka i nie mech.", ua: "Захист і принадження." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Osłona i wabik", ua: "Оборона і принада" },
      visual: tree({
        layout: "fork",
        root: { pl: "kwiat", ua: "квітка" },
        items: [
          { pl: "kielich — chroni", ua: "чашечка — захищає" },
          { pl: "korona — wabi", ua: "віночок — вабить" }
        ]
      }),
      items: [
        { pl: "kielich — zwykle zielone działki", ua: "чашечка — зазвичай зелені чашолистки" },
        { pl: "korona — płatki, często barwne", ua: "віночок — пелюстки, часто барвисті" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Pręciki i pyłek", ua: "Тичинки і пилок" },
      visual: vizGh("l30-preciki.png", {
        alt: { pl: "Pręciki z pyłkiem w kwiecie", ua: "Тичинки з пилком у квітці" },
        title: { pl: "Pręcik wytwarza pyłek. To nie pszczoła i nie wiatr — to organ.", ua: "Тичинка виробляє пилок. Це не бджола і не вітер — це орган." },
        prompt: { pl: "Edukacyjny schemat 16:9. Pręciki w środku kwiatu, etykiety PL: pręcik; pyłek (żółty proszek, nie groza). Napis: pręciki = pyłek. Płatki w tle, słupek jeszcze nie podpisany albo szary. Bez anatomii owada. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pręciki"), " to męska część kwiatu. Na szczycie sypie się ", em("pyłek"), " — drobny, często żółty proszek."],
          "Pyłek musi trafić na słupek (następny ekran). Niesie go owad albo wiatr — jak u nagonasiennych wiatr niósł pyłek ze szyszki (lekcja 27), ale tu źródłem jest pręcik, nie szyszka męska.",
          "Nie myl pyłku z zarodnikami mchu i paproci: tu droga do nasiona w owocu."
        ],
        ua: [
          ["", em("Тичинки"), " — чоловіча частина квітки. На верхівці сиплеться ", em("пилок"), " — дрібний, часто жовтий порошок."],
          "Пилок має потрапити на маточку (наступний екран). Несе його комаха або вітер — як у голонасінних вітер ніс пилок із шишки (урок 27), але тут джерело — тичинка, не чоловіча шишка.",
          "Не плутати пилок зі спорами моху і папороті: тут шлях до насінини в плоді."
        ]
      },
      task: {
        id: "l30-e2",
        type: "true-false",
        question: { pl: "Pręciki wytwarzają pyłek. Pyłek to nie zarodnik mchu.", ua: "Тичинки виробляють пилок. Пилок — не спора моху." },
        answer: true,
        explanation: { pl: "Pręcik → pyłek. Zarodnik = L25–26.", ua: "Тичинка → пилок." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Słupek i zalążnia", ua: "Маточка і зав’язь" },
      visual: vizGh("l30-slupek.png", {
        alt: { pl: "Słupek z zalążnią w środku kwiatu", ua: "Маточка із зав’яззю в середині квітки" },
        title: { pl: "W zalążni są zalążki. Z nich — nasiona.", ua: "У зав’язі є насінні зачатки. З них — насіння." },
        prompt: { pl: "Edukacyjny przekrój 16:9 kwiatu. Etykiety PL: słupek; znamię (góra); zalążnia (dół, pogrubiona); zalążki w środku. Napis: tu powstaną nasiona. Pręciki w tle. Bez owocu jabłka jeszcze. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Słupek"), " to żeńska część kwiatu. Na górze bywa klejące znamię — tu ląduje pyłek."],
          ["Na dole jest ", em("zalążnia"), ". W środku zalążki. Po zapyleniu z zalążków powstają nasiona, a zalążnia rośnie w owoc."],
          "Nie rozbieramy dziś, jak nasiono odleci (haczyk, skrzydełko) — lekcja 31. Nie kiełkujemy fasoli — lekcja 32."
        ],
        ua: [
          ["", em("Маточка"), " — жіноча частина квітки. Зверху буває клейка приймочка — сюди сідає пилок."],
          ["Внизу ", em("зав’язь"), ". Всередині насінні зачатки. Після запилення з них виникає насіння, а зав’язь росте в плід."],
          "Сьогодні не розбираємо, як насінина відлетить (гачок, крильце) — урок 31. Не пророщуємо квасолю — урок 32."
        ]
      },
      task: {
        id: "l30-e3",
        type: "single-choice",
        question: { pl: "Gdzie w kwiecie powstają nasiona?", ua: "Де в квітці виникає насіння?" },
        options: [
          { id: "a", label: { pl: "w zalążni słupka (z zalążków, po zapyleniu)", ua: "у зав’язі маточки (із насінних зачатків, після запилення)" } },
          { id: "b", label: { pl: "w kielichu na zewnątrz", ua: "у чашечці зовні" } },
          { id: "c", label: { pl: "w puszce mchu", ua: "у коробочці моху" } }
        ],
        answer: "a",
        explanation: { pl: "Zalążnia → nasiona. Kielich chroni. Puszka = mech.", ua: "Зав’язь → насіння." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Cztery części kwiatu", ua: "Чотири частини квітки" },
      visual: tree({
        layout: "nested",
        root: { pl: "kwiat", ua: "квітка" },
        groups: [
          {
            title: { pl: "kielich", ua: "чашечка" },
            items: [{ pl: "chroni pąk", ua: "захищає бутон" }]
          },
          {
            title: { pl: "korona", ua: "віночок" },
            items: [{ pl: "płatki, wabi", ua: "пелюстки, вабить" }]
          },
          {
            title: { pl: "pręciki", ua: "тичинки" },
            items: [{ pl: "pyłek", ua: "пилок" }]
          },
          {
            title: { pl: "słupek", ua: "маточка" },
            items: [{ pl: "zalążnia", ua: "зав’язь" }]
          }
        ]
      }),
      items: [
        { pl: "kielich i korona — osłona i wabik", ua: "чашечка і віночок — оборона і принада" },
        { pl: "pręciki — pyłek", ua: "тичинки — пилок" },
        { pl: "słupek — zalążnia i nasiona", ua: "маточка — зав’язь і насіння" }
      ]
    },
    {
      type: "classification",
      heading: { pl: "Pyłek i zalążki", ua: "Пилок і зачатки" },
      visual: tree({
        layout: "fork",
        root: { pl: "kwiat", ua: "квітка" },
        items: [
          { pl: "pręcik — pyłek", ua: "тичинка — пилок" },
          { pl: "słupek — zalążnia", ua: "маточка — зав’язь" }
        ]
      }),
      items: [
        { pl: "pręcik — męska część", ua: "тичинка — чоловіча частина" },
        { pl: "słupek — żeńska część", ua: "маточка — жіноча частина" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Owady albo wiatr", ua: "Комахи або вітер" },
      visual: vizGh("l30-zapylenie.png", {
        alt: { pl: "Pszczoła na barwnym kwiecie i kłos zboża na wietrze", ua: "Бджола на барвистій квітці і колосок злаку на вітрі" },
        title: { pl: "Barwa i nektar — owad. Drobny kwiat zbóż — wiatr.", ua: "Барва і нектар — комаха. Дрібна квітка злаків — вітер." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry, etykiety PL. LEWA: pszczoła / motyl na barwnym kwiecie, nektar, napis: zapylenie przez owady. PRAWA: kłos zboża, strzałki wiatru, pyłek, napis: zapylenie przez wiatr. Bez haków i skrzydełek nasion (L31). Bez grozy użądlenia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Zapylenie"), " to przeniesienie pyłku z pręcika na znamię słupka."],
          "Owady lecą po ", em("nektar"), " i pyłek — przy okazji ubrudzą się pyłkiem i przeniosą go. Dlatego płatki bywają barwne i pachną.",
          "Wiatr nie potrzebuje reklamy: kwiaty zbóż są drobne, pyłku jest dużo. To nie to samo co rozsiew nasion wiatrem (skrzydełko klonu) — to lekcja 31."
        ],
        ua: [
          ["", em("Запилення"), " — перенесення пилку з тичинки на приймочку маточки."],
          "Комахи летять по ", em("нектар"), " і пилок — заодно вимащуються пилком і переносять його. Тому пелюстки бувають барвисті і пахнуть.",
          "Вітру не потрібна реклама: квітки злаків дрібні, пилку багато. Це не те саме, що поширення насіння вітром (крильце клена) — це урок 31."
        ]
      },
      task: {
        id: "l30-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz dwa typowe sposoby zapylenia kwiatu.", ua: "Познач два типові способи запилення квітки." },
        options: [
          { id: "a", label: { pl: "owady (barwa, nektar)", ua: "комахи (барва, нектар)" } },
          { id: "b", label: { pl: "wiatr (drobne kwiaty zbóż)", ua: "вітер (дрібні квітки злаків)" } },
          { id: "c", label: { pl: "haczyki na sierści — to rozsiew nasion (L31)", ua: "гачки на шерсті — це поширення насіння (урок 31)" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Owady i wiatr = zapylenie. Haczyki = L31.", ua: "Комахи і вітер = запилення. Гачки = урок 31." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Kto niesie pyłek", ua: "Хто несе пилок" },
      visual: tree({
        layout: "fork",
        root: { pl: "zapylenie", ua: "запилення" },
        items: [
          { pl: "owady", ua: "комахи" },
          { pl: "wiatr", ua: "вітер" }
        ]
      }),
      items: [
        { pl: "owady — barwa, zapach, nektar", ua: "комахи — барва, запах, нектар" },
        { pl: "wiatr — dużo pyłku, drobny kwiat", ua: "вітер — багато пилку, дрібна квітка" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Z kwiatu owoc", ua: "З квітки плід" },
      visual: vizGh("l30-owoc.png", {
        alt: { pl: "Kwiat, zalążnia i owoc z nasionami", ua: "Квітка, зав’язь і плід із насінням" },
        title: { pl: "Płatki opadają. Zalążnia puchnie. To owoc z lekcji 29.", ua: "Пелюстки опадають. Зав’язь пухне. Це плід з уроку 29." },
        prompt: { pl: "Edukacyjny schemat 16:9, trzy kroki, etykiety PL: kwiat; zalążnia po zapyleniu; owoc z nasionami (np. jabłko albo strąk). Napis: z kwiatu → owoc. Bez skrzydełek, haczyków, zwierząt zjadających owoce jako tematu rozsiewu (L31). Bez kiełkującej fasoli (L32). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Gdy pyłek dotrze na słupek, zalążki stają się nasionami. Zalążnia rośnie — powstaje ", em("owoc"), " (lekcja 29: nasiona są okryte).",
          "Płatki często opadają. Zostaje to, co osłania nasiona: jabłko, strąk, pestka w śliwce.",
          "Nie śledzimy dziś, kto zje jabłko albo jak poleci skrzydlate nasiono klonu. To rozsiew — lekcja 31."
        ],
        ua: [
          "Коли пилок дійде до маточки, зачатки стають насінням. Зав’язь росте — виникає ", em("плід"), " (урок 29: насіння покрите).",
          "Пелюстки часто опадають. Лишається те, що вкриває насіння: яблуко, стручок, кісточка в сливі.",
          "Сьогодні не стежимо, хто з’їсть яблуко або як полетить крилате насіння клена. Це поширення — урок 31."
        ]
      },
      task: {
        id: "l30-e5",
        type: "true-false",
        question: { pl: "Po zapyleniu z zalążni słupka powstaje owoc z nasionami. Płatki często opadają.", ua: "Після запилення із зав’язі маточки виникає плід із насінням. Пелюстки часто опадають." },
        answer: true,
        explanation: { pl: "Kwiat → owoc. Rozsiew nasion = L31.", ua: "Квітка → плід." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od pyłku do owocu", ua: "Від пилку до плоду" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Pyłek, zapylenie, nasiona, owoc", ua: "Пилок, запилення, насіння, плід" },
        items: [
          { pl: "pyłek z pręcika", ua: "пилок з тичинки" },
          { pl: "zapylenie słupka", ua: "запилення маточки" },
          { pl: "nasiona w zalążni", ua: "насіння в зав’язі" },
          { pl: "owoc", ua: "плід" }
        ],
        caption: { pl: "jak nasiona potem podróżują — lekcja 31", ua: "як насіння потім подорожує — урок 31" }
      }),
      items: [
        { pl: "pyłek — z pręcika", ua: "пилок — з тичинки" },
        { pl: "owoc — z zalążni", ua: "плід — із зав’язі" },
        { pl: "nasiona okryte — lekcja 29", ua: "покрите насіння — урок 29" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Kielich i korona", ua: "Практика. Чашечка і віночок" },
      task: {
        id: "l30-p1",
        type: "single-choice",
        question: { pl: "Zielone działki na zewnątrz kwiatu to zwykle:", ua: "Зелені чашолистки зовні квітки — зазвичай:" },
        options: [
          { id: "a", label: { pl: "kielich", ua: "чашечка" } },
          { id: "b", label: { pl: "szyszka świerka", ua: "шишка ялини" } },
          { id: "c", label: { pl: "chwytniki", ua: "ризоїди" } }
        ],
        answer: "a",
        explanation: { pl: "Kielich chroni pąk. Płatki = korona.", ua: "Чашечка захищає бутон." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Pręciki", ua: "Тичинки" },
      task: {
        id: "l30-p2",
        type: "true-false",
        question: { pl: "Pręciki dają pyłek. Pyłek musi trafić na słupek.", ua: "Тичинки дають пилок. Пилок має потрапити на маточку." },
        answer: true,
        explanation: { pl: "Pręcik → pyłek → słupek.", ua: "Тичинка → пилок → маточка." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Słupek", ua: "Маточка" },
      task: {
        id: "l30-p3",
        type: "single-choice",
        question: { pl: "Zalążnia to część:", ua: "Зав’язь — частина:" },
        options: [
          { id: "a", label: { pl: "słupka — tu powstaną nasiona i owoc", ua: "маточки — тут виникнуть насіння і плід" } },
          { id: "b", label: { pl: "kielicha na zewnątrz", ua: "чашечки зовні" } },
          { id: "c", label: { pl: "igły sosny", ua: "хвої сосни" } }
        ],
        answer: "a",
        explanation: { pl: "Zalążnia = dół słupka.", ua: "Зав’язь = низ маточки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zapylenie", ua: "Запилення" },
      task: {
        id: "l30-p4",
        type: "single-choice",
        question: { pl: "Barwne płatki i nektar służą głównie zapyleniu przez:", ua: "Барвисті пелюстки і нектар служать здебільшого запиленню:" },
        options: [
          { id: "a", label: { pl: "owady", ua: "комахами" } },
          { id: "b", label: { pl: "haczyki na sierści lisa (rozsiew nasion)", ua: "гачками на шерсті лиса (поширення насіння)" } },
          { id: "c", label: { pl: "czepiec korzenia", ua: "чохлик кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Owady. Haczyki = L31. Czepiec = L22.", ua: "Комахи. Гачки = урок 31." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Owoc", ua: "Плід" },
      task: {
        id: "l30-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o drodze od kwiatu.", ua: "Познач правдиві речення про шлях від квітки." },
        options: [
          { id: "a", label: { pl: "po zapyleniu z zalążni powstaje owoc", ua: "після запилення із зав’язі виникає плід" } },
          { id: "b", label: { pl: "nasiona są w owocu (lekcja 29)", ua: "насіння є в плоді (урок 29)" } },
          { id: "c", label: { pl: "owoc to to samo co szyszka sosny", ua: "плід — те саме, що шишка сосни" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Kwiat → owoc. Szyszka = nagonasienne.", ua: "Квітка → плід. Шишка = голонасінні." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Kielich i korona", ua: "Перевірка 1. Чашечка і віночок" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l30-s1",
        type: "single-choice",
        question: { pl: "Co wskażesz jako kielich i koronę?", ua: "Що вкажеш як чашечку і віночок?" },
        options: [
          { id: "a", label: { pl: "kielich — zwykle zielone działki; korona — płatki", ua: "чашечка — зазвичай зелені чашолистки; віночок — пелюстки" } },
          { id: "b", label: { pl: "kielich to kłącze paproci", ua: "чашечка — кореневище папороті" } },
          { id: "c", label: { pl: "korona to puszka mchu", ua: "віночок — коробочка моху" } }
        ],
        answer: "a",
        explanation: { pl: "Działki i płatki.", ua: "Чашолистки і пелюстки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Pręciki", ua: "Перевірка 2. Тичинки" },
      task: {
        id: "l30-s2",
        type: "true-false",
        question: { pl: "Pręciki wytwarzają pyłek.", ua: "Тичинки виробляють пилок." },
        answer: true,
        explanation: { pl: "Pręcik = pyłek.", ua: "Тичинка = пилок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Słupek", ua: "Перевірка 3. Маточка" },
      task: {
        id: "l30-s3",
        type: "single-choice",
        question: { pl: "Gdzie wskażesz zalążnię?", ua: "Де вкажеш зав’язь?" },
        options: [
          { id: "a", label: { pl: "w dolnej części słupka — tam powstaną nasiona", ua: "у нижній частині маточки — там виникне насіння" } },
          { id: "b", label: { pl: "w szyszce męskiej sosny", ua: "у чоловічій шишці сосни" } },
          { id: "c", label: { pl: "w czepcu korzenia", ua: "у чохлику кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Zalążnia = dół słupka.", ua: "Зав’язь = низ маточки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Zapylenie", ua: "Перевірка 4. Запилення" },
      task: {
        id: "l30-s4",
        type: "single-choice",
        question: { pl: "Jak porównasz dwa zapylenia?", ua: "Як порівняєш два запилення?" },
        options: [
          { id: "a", label: { pl: "owady — barwa i nektar; wiatr — drobne kwiaty, dużo pyłku", ua: "комахи — барва і нектар; вітер — дрібні квітки, багато пилку" } },
          { id: "b", label: { pl: "oba to to samo co haczyki na nasionach", ua: "обидва — те саме, що гачки на насінні" } },
          { id: "c", label: { pl: "owady zapylają szyszki, wiatr — mchy", ua: "комахи запилюють шишки, вітер — мохи" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa wektory pyłku. Haczyki = L31.", ua: "Два вектори пилку." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Owoc", ua: "Перевірка 5. Плід" },
      task: {
        id: "l30-s5",
        type: "true-false",
        question: { pl: "Z kwiatu, po zapyleniu, powstaje owoc. Nasiona są w owocu, nie nago na łusce szyszki.", ua: "З квітки після запилення виникає плід. Насіння є в плоді, не голо на лусці шишки." },
        answer: true,
        explanation: { pl: "Kwiat → owoc (L29). Szyszka = L27.", ua: "Квітка → плід." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "kwiat", ua: "квітка" },
        items: [
          { pl: "kielich + korona", ua: "чашечка + віночок" },
          { pl: "pręciki — pyłek", ua: "тичинки — пилок" },
          { pl: "słupek — owoc", ua: "маточка — плід" }
        ]
      }),
      text: {
        pl: [
          "Kielich chroni, płatki wabią.",
          "Pręciki → pyłek.",
          "Słupek → zalążnia → nasiona.",
          "Zapylenie: owady albo wiatr.",
          "Z kwiatu owoc.",
          "Rozsiew nasion — lekcja 31."
        ],
        ua: [
          "Чашечка захищає, пелюстки ваблять.",
          "Тичинки → пилок.",
          "Маточка → зав’язь → насіння.",
          "Запилення: комахи або вітер.",
          "З квітки плід.",
          "Поширення насіння — урок 31."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać kielich i koronę.", ua: "Можу вказати чашечку і віночок." },
        { pl: "Potrafię wskazać pręciki i pyłek.", ua: "Можу вказати тичинки і пилок." },
        { pl: "Potrafię wskazać słupek i zalążnię.", ua: "Можу вказати маточку і зав’язь." },
        { pl: "Potrafię porównać zapylenie owadami i wiatrem.", ua: "Можу порівняти запилення комахами і вітром." },
        { pl: "Potrafię wyjaśnić drogę od kwiatu do owocu.", ua: "Можу пояснити шлях від квітки до плоду." }
      ]
    }
  ]
};
