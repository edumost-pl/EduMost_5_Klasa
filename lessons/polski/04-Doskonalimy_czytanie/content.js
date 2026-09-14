function emT4(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T4 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT4(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T4 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 14  ·  Lekcja 4  ·  czytanie",
    promptPlace: "before",
    prompt: {
      pl: "Dział *Zachwycający kosmos*. Wczoraj opisywaliśmy zdjęcia i zadawaliśmy pytania. Dziś *czytamy* tekst *Ziemia we Wszechświecie*. To lekcja *czytania ze zrozumieniem*, nie astronomii. Fakty bierz z *tekstu*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *Zachwycający kosmos*. Учора описували світлини і ставили питання. Сьогодні *читаємо* текст *Ziemia we Wszechświecie*. Це урок *читання з розумінням*, не астрономії. Факти бери з *тексту*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wyjaśnię glosy: *astronom, starożytny, nawigacja, kosmologia, sfery, kres*;", ua: "поясню глоси: *astronom, starożytny, nawigacja, kosmologia, sfery, kres*;" },
      { pl: "znajdę w tekście informację i wskażę *prawdę / fałsz* z dowodem;", ua: "знайду в тексті інформацію і вкажу *правду / хибу* з доказом;" },
      { pl: "dopasuję podpisy do wyobrażeń świata (pierwotne, Eratostenes, Kopernik);", ua: "підберу підписи до уявлень світу (первісне, Ератостен, Коперник);" },
      { pl: "przygotuję *głośne czytanie* fragmentu;", ua: "підготую *голосне читання* уривка;" },
      { pl: "zapiszę krótką *notatkę*.", ua: "запишу коротку *нотатку*." }
    ],
    task: {
      id: "t4-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Znaleźć informację w tekście i odróżnić prawdę od fałszu.", ua: "Знайти інформацію в тексті і відрізнити правду від хиби." } },
        { id: "b", label: { pl: "Zrobić krótką notatkę i przygotować głośne czytanie.", ua: "Зробити коротку нотатку і підготувати голосне читання." } },
        { id: "c", label: { pl: "Samemu zmierzyć obwód Ziemi w kilometrach.", ua: "Самому виміряти окружність Землі в кілометрах." } },
        { id: "d", label: { pl: "Dopasować ilustracje: wyobrażenie pierwotne, Eratostenesa i Kopernika.", ua: "Підібрати ілюстрації: первісне уявлення, Ератостена і Коперника." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "To język polski: czytanie, podpisy, głos, notatka. Czego nie robimy na lekcji?",
        ua: "Це польська мова: читання, підписи, голос, нотатка. Чого не робимо на уроці?"
      },
      explanation: {
        pl: "Dziś: glosy, fakty z tekstu, trzy wyobrażenia świata, głośne czytanie, notatka. Obwodu Ziemi nie mierzymy.",
        ua: "Сьогодні: глоси, факти з тексту, три уявлення світу, голосне читання, нотатка. Окружність Землі не вимірюємо."
      }
    }
  },
  // 2
  {
    type: "example",
    heading: { pl: "Słowa z pól", ua: "Слова з полів" },
    formula: "s. 14  ·  glosy  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Sześć glos z pomarańczowego pola. Najpierw ramka, potem rozbiór. Te słowa zaraz usłyszysz w tekście.",
      ua: "Шість глос із помаранчевого поля. Спочатку рамка, потім розбір. Ці слова зараз почуєш у тексті."
    },
    text: {
      pl: "astronom  ·  starożytny  ·  nawigacja  ·  kosmologia  ·  sfery  ·  kres",
      ua: "astronom — астроном  ·  starożytny — давній, античний  ·  nawigacja — навігація  ·  kosmologia — космологія  ·  sfery — сфери  ·  kres — кінець, межа"
    },
    items: [
      { pl: "*astronom* — naukowiec zajmujący się *astronomią*: nauką o ciałach niebieskich, ich budowie i ruchach.", ua: "*astronom* — астроном: науковець, який займається *астрономією* — наукою про небесні тіла, їхню будову і рухи." },
      { pl: "*starożytny* — odnoszący się do czasów od około 4000 r. *p.n.e.* (przed naszą erą). *p.n.e.* ≠ *n.e.*", ua: "*starożytny* — давній / античний: стосується часів від близько 4000 р. *до н.е.* Увага: *p.n.e.* — до н.е.; *n.e.* — н.е." },
      { pl: "*nawigacja* — dział wiedzy o prowadzeniu statków morskich lub powietrznych do wyznaczonego celu oraz o określaniu ich położenia na mapie.", ua: "*nawigacja* — навігація: як вести корабель чи літак до мети і визначити місце на мапі." },
      { pl: "*kosmologia* — nauka badająca historię i budowę Wszechświata.", ua: "*kosmologia* — космологія: наука, що досліджує історію і будову Всесвіту." },
      { pl: "*sfery* — tu: wyobrażone sklepienia niebieskie, kuliste powierzchnie okalające Ziemię.", ua: "*sfery* — тут: уявні небесні склепіння, кулясті поверхні навколо Землі (не «сфера» як м’яч на уроці гімнастики)." },
      { pl: "*kres* — koniec. W tekście: kres Wszechświata = tu Wszechświat się kończy.", ua: "*kres* — кінець, межа. У тексті: kres Wszechświata = тут Всесвіт закінчується." }
    ],
    task: {
      id: "t4-s02-glosy",
      type: "single-choice",
      question: {
        pl: "Która para NA PEWNO zgadza się z glosą?",
        ua: "Яка пара НАПЕВНО збігається з глосою?"
      },
      options: [
        { id: "a", label: { pl: "nawigacja — prowadzenie statku do celu; kres — koniec", ua: "nawigacja — вести корабель до мети; kres — кінець" } },
        { id: "b", label: { pl: "astronom — poeta, który pisze o gwiazdach", ua: "астроном — поет, який пише про зірки" } },
        { id: "c", label: { pl: "starożytny — to, co zdarzyło się wczoraj w szkole", ua: "starożytny — те, що було вчора в школі" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa *nawigacja* mówi o statkach i mapie. *Kres* = koniec. Astronom to naukowiec, nie poeta z lekcji 2.",
        ua: "Глоса *nawigacja* — про кораблі і мапу. *Kres* = кінець. Астроном — науковець, не поет з уроку 2."
      },
      explanation: {
        pl: "Nawigacja i kres zgadzają się z polem. Astronom bada ciała niebieskie. Starożytny to czasy około 4000 r. p.n.e., nie wczoraj.",
        ua: "Навігація і kres збігаються з полем. Астроном досліджує небесні тіла. Starożytny — часи близько 4000 р. до н.е., не вчора."
      }
    }
  },
  // 3
  {
    type: "concept",
    heading: { pl: "Zanim przeczytasz", ua: "Перш ніж читати" },
    formula: "s. 14  ·  tytuł  ·  ilustracja",
    promptPlace: "before",
    prompt: {
      pl: "Tytuł: *Ziemia we Wszechświecie*. Ilustracja: dawny obserwator nieba. Jeszcze nie czytasz całości — najpierw gatunek i oczekiwanie.",
      ua: "Заголовок: *Ziemia we Wszechświecie*. Ілюстрація: давній спостерігач неба. Ще не читай усе — спочатку жанр і очікування."
    },
    visual: vizGhT4("t4-astronom.jpg", {
      prompt: "Obserwator nieba i Kosmos.",
      alt: {
        pl: "Dawny uczony z lunetą patrzy w Kosmos: planety i gwiazdy.",
        ua: "Давній учений із підзорною трубою дивиться в космос: планети і зірки."
      }
    }),
    text: {
      pl: "Tekst **popularnonaukowy** przekazuje **informacje** o świecie i nauce. Czytamy, żeby znaleźć **fakty** — nie zgadujemy z tytułu i nie szukamy nastroju jak w *Preludium*.",
      ua: "**Науково-популярний** текст передає **інформацію** про світ і науку. Читаємо, щоб знайти **факти** — не вгадуємо із заголовка і не шукаємо настрій, як у *Preludium*."
    },
    items: [
      { pl: "*Fakt* — informacja z tekstu, którą można sprawdzić (data, liczba, kto, co).", ua: "*Fakt* — факт: інформація з тексту, яку можна перевірити (дата, число, хто, що)." },
      { pl: "*Opinia* — twoje zdanie (*ciekawe, piękne*). W zadaniu 1 pytamy o fakty, nie o opinię.", ua: "*Opinia* — думка (*цікаво, гарно*). У завданні 1 питаємо про факти, не про думку." }
    ],
    task: {
      id: "t4-s03-gatunek",
      type: "single-choice",
      question: {
        pl: "Czym NA PEWNO jest ten tekst?",
        ua: "Чим НАПЕВНО є цей текст?"
      },
      options: [
        { id: "a", label: { pl: "Tekstem popularnonaukowym: informacje o Ziemi i Wszechświecie.", ua: "Науково-популярним текстом: інформація про Землю і Всесвіт." } },
        { id: "b", label: { pl: "Wierszem z apostrofą do kasztanów.", ua: "Віршем з апострофою до каштанів." } },
        { id: "c", label: { pl: "Bajką o smoku na tarczy w oceanie.", ua: "Казкою про дракона на щиті в океані." } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł i ilustracja zapowiadają wiedzę, nie recytację wiersza z lekcji 2.",
        ua: "Заголовок і ілюстрація обіцяють знання, не декламацію вірша з уроку 2."
      },
      explanation: {
        pl: "Popularnonaukowy = fakty o świecie. Preludium było wierszem. Tarcza w oceanie pojawi się w tekście jako dawne *wyobrażenie*, nie jako bajka.",
        ua: "Науково-популярний = факти про світ. Preludium був віршем. Щит в океані з’явиться в тексті як давнє *уявлення*, не як казка."
      }
    }
  },
  // 4
  {
    type: "observe",
    heading: { pl: "Czytamy (1)", ua: "Читаємо (1)" },
    formula: "s. 14  ·  Ziemia we Wszechświecie",
    promptPlace: "before",
    prompt: {
      pl: "Tekstu nie tłumaczymy linijka w linijkę — czytasz *po polsku*. Ukraiński pod spodem to *pomoc*. Odsłoń dwa kroki. Pytaj: *kto*? *kiedy*? *co stwierdzono*?",
      ua: "Текст не перекладаємо рядок у рядок — читаєш *польською*. Українська знизу — *допомога*. Відкрий два кроки. Питай: *хто*? *коли*? *що стверджено*?"
    },
    reveal: true,
    steps: [
      {
        formula: "niebo i kosmologia",
        text: {
          pl: [
            "Od niepamiętnych czasów ludzie uważnie obserwowali niebo. Pierwsi astronomowie pomagali w nawigacji, układali kalendarze, objaśniali wolę bogów.",
            "Filozofowie i astronomowie starożytnej Grecji na podstawie obserwacji nieba starali się wyjaśnić budowę i historię Kosmosu. Tak narodziła się kosmologia – jedna z najstarszych nauk."
          ],
          ua: [
            "Від давніх-давен люди уважно дивились у небо. Перші астрономи допомагали в навігації, складали календарі, пояснювали волю богів.",
            "Філософи й астрономи давньої Греції з спостережень неба хотіли пояснити будову й історію Космосу. Так народилася космологія — одна з найдавніших наук."
          ]
        }
      },
      {
        formula: "tarcza, kula, Eratostenes",
        text: {
          pl: [
            "Pierwotnie myślano, że mieszkamy na tarczy pływającej pośrodku olbrzymiego oceanu. Jednak już 2500 lat temu stwierdzono, że Ziemia jest kulą.",
            "Grecki uczony żyjący na przełomie III i II w. p.n.e. – Eratostenes – określił, że obwód naszej planety wynosi 39690 kilometrów. Wynik, który podał, niewiele się różni od obliczeń współczesnych naukowców."
          ],
          ua: [
            "Спочатку думали, що живемо на щиті (диску), який пливе посеред величезного океану. Але вже 2500 років тому ствердили: Земля — куля.",
            "Грецький учений на межі III і II ст. *до н.е.* — Ератостен — визначив окружність планети: 39690 км. Це майже як у сучасних науковців."
          ]
        }
      }
    ],
    task: {
      id: "t4-s04-kula",
      type: "single-choice",
      question: {
        pl: "Co NA PEWNO wynika z tej części tekstu?",
        ua: "Що НАПЕВНО випливає з цієї частини тексту?"
      },
      options: [
        { id: "a", label: { pl: "Najpierw myślano o tarczy w oceanie; już 2500 lat temu stwierdzono, że Ziemia jest kulą.", ua: "Спочатку думали про щит в океані; уже 2500 років тому ствердили, що Земля — куля." } },
        { id: "b", label: { pl: "Wszyscy starożytni uczeni do końca uważali, że Ziemia jest płaska.", ua: "Усі давні вчені до кінця вважали, що Земля плоска." } },
        { id: "c", label: { pl: "Eratostenes żył w III wieku naszej ery (n.e.).", ua: "Ератостен жив у III столітті нашої ери (н.е.)." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *pierwotnie* i *jednak już 2500 lat temu*. Potem: *p.n.e.* czy *n.e.*?",
        ua: "Шукай *pierwotnie* і *jednak już 2500 lat temu*. Потім: *p.n.e.* чи *n.e.*?"
      },
      explanation: {
        pl: "Tarcza = dawne wyobrażenie. Potem kula. Eratostenes: przełom III i II w. *p.n.e.*, nie n.e. Nie wszyscy starożytni trzymali się płaskiej Ziemi.",
        ua: "Щит = давнє уявлення. Потім куля. Ератостен: межа III і II ст. *до н.е.*, не н.е. Не всі давні тримались плоскої Землі."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Czytamy (2)", ua: "Читаємо (2)" },
    formula: "s. 14  ·  środek i Kopernik",
    promptPlace: "before",
    prompt: {
      pl: "Druga kolumna. Kto stoi w środku Wszechświata? Kto to *zburzył*? Odsłoń dwa kroki. Na końcu — źródło (skąd tekst).",
      ua: "Друга колонка. Хто в центрі Всесвіту? Хто це *зруйнував*? Відкрий два кроки. Наприкінці — джерело (звідки текст)."
    },
    reveal: true,
    steps: [
      {
        formula: "Ziemia w środku",
        text: {
          pl: [
            "Dla Eratostenesa, podobnie jak dla większości ówczesnych i późniejszych kosmologów, Ziemia stanowiła środek Wszechświata. Wokół niej po różnych sferach miały się poruszać planety. Zaliczono do nich też Słońce i Księżyc. Wszystko razem otaczała sfera zewnętrzna, do której były przymocowane gwiazdy stałe.",
            "Wierzono, że sfera ta jest kresem Wszechświata. Za nią znajdował się obszar niedostępny dla ludzi. Zamieszkiwali go bogowie."
          ],
          ua: [
            "Для Ератостена — і для більшості тодішніх і пізніших космологів — Земля була центром Всесвіту. Навколо неї по сферах мали рухатись планети. До них зараховували також Сонце і Місяць. Усе оточувала зовнішня сфера з нерухомими зірками.",
            "Вірили, що ця сфера — *kres* (кінець) Всесвіту. За нею — місце, недоступне людям. Там жили боги."
          ]
        }
      },
      {
        formula: "Kopernik",
        text: {
          pl: [
            "Takie wyobrażenie świata zburzył w XVI w. Mikołaj Kopernik. W roku śmierci astronoma opublikowano dzieło „O obrotach sfer niebieskich”, w którym polski odkrywca stwierdza, że to Słońce jest w centrum Wszechświata, a Ziemia krąży wokół tej gwiazdy.",
            "Na podstawie książki Ericha Überlackera (czyt. Iberlakera) Kosmos. U granic przestrzeni i czasu, tłumaczenie: Joachim Mader."
          ],
          ua: [
            "Таке уявлення зруйнував у XVI ст. Миколай Коперник. У рік смерті астронома видали твір «Про обертання небесних сфер»: у центрі Сонце, а Земля кружляє навколо цієї зірки.",
            "Джерело: книжка Еріха Іберлакера *Kosmos. U granic przestrzeni i czasu*, переклад Йоахіма Мадера."
          ]
        }
      }
    ],
    task: {
      id: "t4-s05-kopernik",
      type: "single-choice",
      question: {
        pl: "Kto NA PEWNO zburzył wyobrażenie, że Ziemia jest środkiem Wszechświata?",
        ua: "Хто НАПЕВНО зруйнував уявлення, що Земля є центром Всесвіту?"
      },
      options: [
        { id: "a", label: { pl: "Mikołaj Kopernik w XVI wieku: Słońce w centrum, Ziemia krąży wokół gwiazdy.", ua: "Миколай Коперник у XVI столітті: Сонце в центрі, Земля кружляє навколо зірки." } },
        { id: "b", label: { pl: "Eratostenes w XVIII wieku.", ua: "Ератостен у XVIII столітті." } },
        { id: "c", label: { pl: "Jan Lechoń w wierszu Preludium.", ua: "Ян Лехонь у вірші Preludium." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *zburzył w XVI w.* i nazwiska. XVIII i Preludium nie ma w tej kolumnie.",
        ua: "Шукай *zburzył w XVI w.* і прізвище. XVIII і Preludium у цій колонці немає."
      },
      explanation: {
        pl: "Kopernik, XVI w., Słońce w centrum. Eratostenes był wcześniej i stawiał Ziemię w środku. To nie wiersz z lekcji 2.",
        ua: "Коперник, XVI ст., Сонце в центрі. Ератостен був раніше і ставив Землю в центрі. Це не вірш з уроку 2."
      }
    }
  },
  // 6
  {
    type: "practice",
    heading: { pl: "Prawda czy fałsz", ua: "Правда чи хиба" },
    formula: "s. 14  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: na podstawie *tekstu* ustal, które zdania są prawdziwe, a które fałszywe. Dowód = cytat albo parafraza, nie pamięć z T3.",
      ua: "Підручник: на основі *тексту* визнач, які речення правдиві, а які хибні. Доказ = цитата або переказ, не пам’ять з T3."
    },
    items: [
      { pl: "Szukaj w tekście: *nawigacja* / marynarze; obwód *39690 km*; *kula* i *2500 lat*.", ua: "Шукай у тексті: *nawigacja* / моряки; окружність *39690 км*; *куля* і *2500 років*." },
      { pl: "Uważaj na pułapki: *wszyscy*; *poprzednicy* Eratostenesa; *p.n.e.* czy *n.e.*; *XVI* czy *XVIII*.", ua: "Увага на пастки: *усі*; *попередники* Ератостена; *до н.е.* чи *н.е.*; *XVI* чи *XVIII*." }
    ],
    task: {
      id: "t4-s06-pf",
      type: "multiple-choice",
      question: {
        pl: "Które zdania NA PEWNO są prawdziwe według tekstu? Zaznacz wszystkie pewne.",
        ua: "Які речення НАПЕВНО правдиві за текстом? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Wyniki obserwacji nieba pomagały marynarzom w dotarciu do celu.", ua: "Результати спостережень неба допомагали морякам дістатися мети." } },
        { id: "b", label: { pl: "Współczesne obliczenia obwodu Ziemi niewiele różnią się od wyniku Eratostenesa.", ua: "Сучасні обчислення окружності Землі мало відрізняються від результату Ератостена." } },
        { id: "c", label: { pl: "Zarówno Eratostenes, jak i jego poprzednicy uważali, że Ziemia jest centrum Kosmosu.", ua: "І Ератостен, і його попередники вважали, що Земля — центр Космосу." } },
        { id: "d", label: { pl: "Według wszystkich starożytnych uczonych Ziemia jest płaska.", ua: "За всіма давніми вченими Земля плоска." } },
        { id: "e", label: { pl: "Już ponad 1000 lat temu stwierdzono, że Ziemia jest kulą.", ua: "Уже понад 1000 років тому ствердили, що Земля — куля." } },
        { id: "f", label: { pl: "Eratostenes żył w III w. n.e.", ua: "Ератостен жив у III ст. н.е." } },
        { id: "g", label: { pl: "W XVIII w. potwierdzono, że Ziemia krąży wokół Słońca.", ua: "У XVIII ст. підтвердили, що Земля кружляє навколо Сонця." } }
      ],
      answer: ["a", "b", "e"],
      hint: {
        pl: "Trzy prawdy: nawigacja; 39690 km ≈ dziś; 2500 lat > 1000. Reszta myli p.n.e. / n.e., XVI / XVIII albo «wszyscy».",
        ua: "Три правди: навігація; 39690 км ≈ сьогодні; 2500 років > 1000. Решта плутає до н.е. / н.е., XVI / XVIII або «всі»."
      },
      explanation: {
        pl: "a, b, e — w tekście. c: poprzednicy = tarcza, nie centrum sfer. d: nie wszyscy (już kula). f: p.n.e., nie n.e. g: XVI w. Kopernik, nie XVIII.",
        ua: "a, b, e — в тексті. c: попередники = щит, не центр сфер. d: не всі (вже куля). f: до н.е., не н.е. g: XVI ст. Коперник, не XVIII."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Trzy wyobrażenia świata", ua: "Три уявлення світу" },
    formula: "s. 14  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: do ilustracji dopasuj podpisy. *A* wyobrażenie pierwotne. *B* wyobrażenie Eratostenesa. *C* wyobrażenie Kopernika. Patrz: *co jest w środku*?",
      ua: "Підручник: до ілюстрацій добери підписи. *A* первісне уявлення. *B* уявлення Ератостена. *C* уявлення Коперника. Дивись: *що в центрі*?"
    },
    visual: vizGhT4("t4-modele.png", {
      prompt: "Trzy modele świata: 1 Słońce, 2 Ziemia, 3 tarcza.",
      alt: {
        pl: "Trzy rysunki: (1) Słońce w środku i planety, (2) Ziemia w środku i sfery, (3) wyspa-tarcza w oceanie.",
        ua: "Три рисунки: (1) Сонце в центрі і планети, (2) Земля в центрі і сфери, (3) острів-щит в океані."
      }
    }),
    items: [
      { pl: "*A* wyobrażenie pierwotne — szukaj tarczy / wyspy w oceanie.", ua: "*A* первісне уявлення — шукай щит / острів в океані." },
      { pl: "*B* wyobrażenie Eratostenesa — *Ziemia* w środku, wokół sfery.", ua: "*B* уявлення Ератостена — *Земля* в центрі, навколо сфери." },
      { pl: "*C* wyobrażenie Kopernika — *Słońce* w środku, Ziemia na orbicie.", ua: "*C* уявлення Коперника — *Сонце* в центрі, Земля на орбіті." }
    ],
    task: {
      id: "t4-s07-modele",
      type: "single-choice",
      question: {
        pl: "Które dopasowanie NA PEWNO jest poprawne?",
        ua: "Яка відповідність НАПЕВНО правильна?"
      },
      options: [
        { id: "a", label: { pl: "1 = C Kopernik; 2 = B Eratostenes; 3 = A pierwotne.", ua: "1 = C Коперник; 2 = B Ератостен; 3 = A первісне." } },
        { id: "b", label: { pl: "1 = A pierwotne, bo widać Słońce.", ua: "1 = A первісне, бо видно Сонце." } },
        { id: "c", label: { pl: "3 = C Kopernik, bo to mapa Polski.", ua: "3 = C Коперник, бо це мапа Польщі." } }
      ],
      answer: "a",
      hint: {
        pl: "Środek rysunku: Słońce = Kopernik. Ziemia = Eratostenes. Wyspa w wodzie = pierwotne.",
        ua: "Центр рисунка: Сонце = Коперник. Земля = Ератостен. Острів у воді = первісне."
      },
      explanation: {
        pl: "1 Słońce → Kopernik. 2 Ziemia i sfery → Eratostenes. 3 tarcza w oceanie → pierwotne. W zeszycie zapisz: 1–C, 2–B, 3–A.",
        ua: "1 Сонце → Коперник. 2 Земля і сфери → Ератостен. 3 щит в океані → первісне. У зошиті: 1–C, 2–B, 3–A."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Głośne czytanie", ua: "Голосне читання" },
    formula: "s. 14  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: wyobraźcie sobie, że tekst jest częścią *programu telewizyjnego* o Kosmosie. W zespołach przygotujcie *głośne czytanie*.",
      ua: "Підручник: уявіть, що текст — частина *телепрограми* про космос. У командах підготуйте *голосне читання*."
    },
    items: [
      { pl: "Przydzielcie każdemu *fragment*.", ua: "Розподіліть кожному *уривок*." },
      { pl: "Wskażcie, co *wyróżnić głosem* (liczba, nazwisko, *jednak*, *zburzył*).", ua: "Вкажіть, що *виділити голосом* (число, прізвище, *jednak*, *zburzył*)." },
      { pl: "Ćwiczcie: *wymowa*, *tempo*, *głośność* — jak komunikat, nie jak wiersz z lekcji 2.", ua: "Вправа: *вимова*, *темп*, *гучність* — як комунікат, не як вірш з уроку 2." },
      { pl: "Potem krótka prezentacja przed klasą (w szkole) / w domu — rodzicowi.", ua: "Потім коротка презентація перед класом (у школі) / вдома — батькам." }
    ],
    task: {
      id: "t4-s08-glos",
      type: "single-choice",
      question: {
        pl: "Jaki jest cel głośnego czytania tego tekstu?",
        ua: "Яка мета голосного читання цього тексту?"
      },
      options: [
        { id: "a", label: { pl: "Przekazać informacje jasno: tempo, wymowa, głos na faktach (liczby, nazwiska).", ua: "Передати інформацію ясно: темп, вимова, голос на фактах (числа, прізвища)." } },
        { id: "b", label: { pl: "Czytać jak wiersz Preludium: dużo zachwytu, apostrofa do kasztanów.", ua: "Читати як вірш Preludium: багато захвату, апострофа до каштанів." } },
        { id: "c", label: { pl: "Czytać jak najciszej, żeby nikt nie usłyszał liczb.", ua: "Читати якомога тихіше, щоб ніхто не почув чисел." } }
      ],
      answer: "a",
      hint: {
        pl: "To program o Kosmosie, nie recytacja liryki. Co ma usłyszeć widz?",
        ua: "Це програма про космос, не декламація лірики. Що має почути глядач?"
      },
      explanation: {
        pl: "Głośne czytanie = komunikat. W zeszycie zaznacz swój fragment i 2–3 słowa do podkreślenia głosem.",
        ua: "Голосне читання = комунікат. У зошиті познач свій уривок і 2–3 слова, які виділиш голосом."
      }
    }
  },
  // 9
  {
    type: "practice",
    heading: { pl: "Krótka notatka", ua: "Коротка нотатка" },
    formula: "s. 14  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: wyszukaj informacje o *najnowszych odkryciach* z astronomii. Wybierz jedno i napisz *kilkuzdaniową notatkę*. Notatka ≠ opinia «jest super».",
      ua: "Підручник: знайди інформацію про *найновіші відкриття* з астрономії. Вибери одне і напиши *нотатку з кількох речень*. Нотатка ≠ думка «це супер»."
    },
    items: [
      { pl: "Wzór notatki: *Kto / co? Gdzie? Kiedy? Co z tego wynika?* Trzy zdania, fakty.", ua: "Зразок нотатки: *Хто / що? Де? Коли? Що з цього випливає?* Три речення, факти." },
      { pl: "Przykład (możesz użyć innego odkrycia): *W 2019 r. opublikowano pierwsze zdjęcie czarnej dziury. Zrobił je zespół Event Horizon Telescope. Zdjęcie pokazuje cień czarnej dziury w galaktyce M87.*", ua: "Приклад (можеш узяти інше відкриття): *У 2019 р. оприлюднили першу світлину чорної діри. Зробила її команда Event Horizon Telescope. Світлина показує тінь чорної діри в галактиці M87.*" },
      { pl: "W zeszycie: własne 2–3 zdania. Możesz wziąć news z wiarygodnej strony (np. nauka) — nie z żartu.", ua: "У зошиті: свої 2–3 речення. Можеш узяти новину з надійної сторінки (наука) — не з жарту." }
    ],
    task: {
      id: "t4-s09-notatka",
      type: "single-choice",
      question: {
        pl: "Który zapis NA PEWNO jest notatką (fakty, krótko)?",
        ua: "Який запис НАПЕВНО є нотаткою (факти, коротко)?"
      },
      options: [
        { id: "a", label: { pl: "W 2019 r. opublikowano pierwsze zdjęcie czarnej dziury (zespół Event Horizon Telescope, galaktyka M87).", ua: "У 2019 р. оприлюднили першу світлину чорної діри (команда Event Horizon Telescope, галактика M87)." } },
        { id: "b", label: { pl: "Kosmos jest super i wszyscy powinni lubić gwiazdy, bo tak uważam.", ua: "Космос супер і всі мають любити зірки, бо я так вважаю." } },
        { id: "c", label: { pl: "Ach! dzień dobry wam, kasztany — to nowa wiadomość z Kosmosu.", ua: "Ах! день добрий вам, каштани — це нова звістка з космосу." } }
      ],
      answer: "a",
      hint: {
        pl: "Notatka ma kto/co, kiedy, fakt. Opinia i cytat z wiersza odpadają.",
        ua: "Нотатка має хто/що, коли, факт. Думка і цитата з вірша відпадають."
      },
      explanation: {
        pl: "Notatka = fakty w kilku zdaniach. W zeszycie napisz własną (inne odkrycie też jest dobrze). Opinia i Preludium to nie zadanie 4.",
        ua: "Нотатка = факти в кількох реченнях. У зошиті напиши свою (інше відкриття теж добре). Думка і Preludium — не завдання 4."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Napisz notatkę", ua: "Напиши нотатку" },
    formula: "s. 14  ·  zad. 4  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Tu wpisz *jedno* zdanie-start po polsku. Resztę (2–3 zdania) dokończ w zeszycie. Możesz użyć wzoru z poprzedniego ekranu albo własnego odkrycia.",
      ua: "Тут впиши *одне* речення-початок польською. Решту (2–3 речення) докінчи в зошиті. Можеш узяти зразок з попереднього екрана або власне відкриття."
    },
    items: [
      { pl: "Startery: *W roku … opublikowano…* / *Naukowcy odkryli…* / *Nowe zdjęcie pokazuje…*", ua: "Початки: *W roku … opublikowano…* / *Naukowcy odkryli…* / *Nowe zdjęcie pokazuje…*" }
    ],
    task: {
      id: "t4-s10-zdanie",
      type: "open-answer",
      question: {
        pl: "Napisz po polsku pierwsze zdanie notatki (fakt: kto/co + kiedy albo gdzie).",
        ua: "Напиши польською перше речення нотатки (факт: хто/що + коли або де)."
      },
      answer: [
        "W 2019 r. opublikowano pierwsze zdjęcie czarnej dziury.",
        "W 2019 roku opublikowano pierwsze zdjęcie czarnej dziury.",
        "Naukowcy opublikowali pierwsze zdjęcie czarnej dziury.",
        "Naukowcy odkryli nowy księżyc Saturna.",
        "Nowe zdjęcie pokazuje czarną dziurę.",
        "W roku 2019 opublikowano zdjęcie czarnej dziury."
      ],
      hint: {
        pl: "Zacznij od roku albo od *Naukowcy…* Potem fakt, nie «jest super».",
        ua: "Почни з року або від *Naukowcy…* Потім факт, не «це супер»."
      },
      explanation: {
        pl: "Silnik zna kilka wzorów. Sprawdź: polski, fakt, bez samej opinii. W zeszycie dopisz 1–2 zdania: kto zrobił i co z tego wynika.",
        ua: "Рушій знає кілька зразків. Сам: польська, факт, не сама думка. У зошиті допиши 1–2 речення: хто зробив і що з цього випливає."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 14  ·  lekcja 4",
    promptPlace: "before",
    prompt: {
      pl: "Do zeszytu: 3 zdania prawda/fałsz z dowodem (zad. 1) + podpisy 1–C, 2–B, 3–A (zad. 2) + notatka (zad. 4). Głośne czytanie — w klasie / w domu. Jutro: pisownia *ó, rz, ż, ch* wymienna s. 16.",
      ua: "У зошит: 3 речення правда/хиба з доказом (завд. 1) + підписи 1–C, 2–B, 3–A (завд. 2) + нотатка (завд. 4). Голосне читання — у класі / вдома. Завтра: правопис *ó, rz, ż, ch* змінний с. 16."
    },
    items: [
      { pl: "Tekst popularnonaukowy = fakty. *p.n.e.* ≠ *n.e.* XVI ≠ XVIII.", ua: "Науково-популярний текст = факти. *до н.е.* ≠ *н.е.* XVI ≠ XVIII." },
      { pl: "Kula już 2500 lat temu; Eratostenes ≈ 39690 km; Kopernik: Słońce w centrum.", ua: "Куля вже 2500 років тому; Ератостен ≈ 39690 км; Коперник: Сонце в центрі." },
      { pl: "Modele: tarcza → pierwotne; Ziemia w środku → Eratostenes; Słońce w środku → Kopernik.", ua: "Моделі: щит → первісне; Земля в центрі → Ератостен; Сонце в центрі → Коперник." },
      { pl: "Notatka: kto, co, kiedy — nie opinia.", ua: "Нотатка: хто, що, коли — не думка." }
    ],
    task: {
      id: "t4-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem tej lekcji?",
        ua: "Що є певним підсумком цього уроку?"
      },
      options: [
        { id: "a", label: { pl: "Umiem znaleźć fakty w tekście, podpisać trzy wyobrażenia świata i napisać krótką notatkę.", ua: "Умію знайти факти в тексті, підписати три уявлення світу і написати коротку нотатку." } },
        { id: "b", label: { pl: "Opisałem trzy zdjęcia mgławicy, galaktyki i kuli ziemskiej ze s. 12.", ua: "Описав три світлини туманності, галактики і земної кулі зі с. 12." } },
        { id: "c", label: { pl: "Uzasadniłem już pisownię przez wymianę w rodzinie wyrazów.", ua: "Уже обґрунтував правопис через чергування в сім’ї слів." } }
      ],
      answer: "a",
      hint: {
        pl: "Zdjęcia = lekcja 3. Wymiana ó/rz = lekcja 5. Co było dziś na s. 14?",
        ua: "Світлини = урок 3. Чергування ó/rz = урок 5. Що було сьогодні на с. 14?"
      },
      explanation: {
        pl: "Lekcja 4 = czytanie, prawda/fałsz, modele, głos, notatka. Opis zdjęć był wczoraj. Ortografia wymienna — jutro.",
        ua: "Урок 4 = читання, правда/хиба, моделі, голос, нотатка. Опис світлин був учора. Правопис змінний — завтра."
      }
    }
  }
] };
