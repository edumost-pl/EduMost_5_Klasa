function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_SCH = "Styl: infografika szkolna, etykiety po polsku. Zero znaku wodnego. PNG 16:9.";
var IMG_STYLE_MAK = "Styl: zdjęcie szkolnej makiety, tekturowy pałac, muszle, kwiaty. Zero napisów, zero znaku wodnego. PNG 16:9.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "../25-list-amfitryty/" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostT25Blocks = [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 55  ·  ciąg dalszy  ·  lekcja 25",
    promptPlace: "before",
    prompt: {
      pl: "Ciąg dalszy Parandowskiego. Teraz *piszemy*: opis siedziby, zaproszenie, życie Amfitryty, list do Okeanosa, makieta. Słów szukaj w lekcji 24, nie w Egipcie i nie u Prometeusza.",
      ua: "Продовження Парандовського. Тепер *пишемо*: опис оселі, запрошення, життя Амфітріти, лист до Океана, макет."
    },
    items: [
      { pl: "zredaguję *opis* pałacu ze zgromadzonego słownictwa;", ua: "зредагую *опис* палацу зі зібраного словництва;" },
      { pl: "napiszę *zaproszenie* na ucztę (kto, kogo, kiedy, gdzie, okazja);", ua: "напишу *запрошення* на учту (хто, кого, коли, де, нагода);" },
      { pl: "napiszę *list* w imieniu Amfitryty z elementami gatunku;", ua: "напишу *лист* від імені Амфітріти з елементами жанру;" },
      { pl: "zaplanuję *makietę* pałacu (albo prezentację flory i fauny).", ua: "запланую *макет* палацу (або презентацію флори і фауни)." }
    ],
    task: {
      id: "t25-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Zbudować opis siedziby związkami: znajduje się, rośnie, kołysze się…", ua: "Побудувати опис оселі зв’язками: znajduje się, rośnie, kołysze się…" } },
        { id: "b", label: { pl: "Napisać zaproszenie i list z nagłówkiem, formułą i podpisem.", ua: "Написати запрошення і лист із заголовком, формулою і підписом." } },
        { id: "c", label: { pl: "Na nowo od pierwszej linijki streszczać Prometeusza.", ua: "Наново з першого рядка переказувати Прометея." } },
        { id: "d", label: { pl: "Zaplanować makietę z muszli, kartonu, korali.", ua: "Запланувати макет із мушель, картону, коралів." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "s. 55: zadania 3–7. Mit był wczoraj.",
        ua: "с. 55: завдання 3–7. Міф був учора."
      },
      explanation: {
        pl: "Dziś redagujemy. Treść mitu — lekcja 24.",
        ua: "Сьогодні редагуємо. Зміст міфу — урок 24."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 3 · opis siedziby Posejdona", ua: "Завд. 3 · опис оселі Посейдона" },
    formula: "s. 55",
    promptPlace: "before",
    prompt: {
      pl: "Opisz siedzibę Posejdona, w której zamieszkała córka Okeanosa. a) Dopisz jak najwięcej *określeń*. b) Utwórz związki z podanymi wyrazami. Najpierw zeszyt.",
      ua: "Опиши оселю Посейдона, де оселилась донька Океана. a) Допиши *означення*. b) Утвори словосполучення. Спочатку зошит."
    },
    text: {
      pl: [
        "*Siedziba króla mórz jest (jaka?)*  ?.  ?.  ?.",
        "Czasowniki do związków: *znajduje się · rośnie · kołysze się · przepływa · oświetla · unosi się · przenika · wygląda · można podziwiać · zachwyca · olśniewa · zaprasza · zachęca*."
      ],
      ua: [
        "*Оселя короля морів є (яка?)*  ?.  ?.  ?.",
        "Дієслова: *znajduje się · rośnie · kołysze się · przepływa · oświetla · unosi się · przenika · wygląda · można podziwiać · zachwyca · olśniewa · zaprasza · zachęca*."
      ]
    },
    reveal: true,
    steps: [
      {
        formula: "PRZYKŁAD EduMost  ·  nie jedyny",
        text: {
          pl: "Siedziba jest błękitna, olśniewająca, pełna blasku. Dach z muszli *znajduje się* nad komnatami. Algi *kołyszą się* na falach. Orszak głowonogów *przepływa* obok okien. Światło *przenika* przez algi i *mieni się* tęczą. Pałac *zachwyca* i *zaprasza* do podziwu.",
          ua: "Оселя блакитна, сліпуча. Дах із мушель *міститься* над кімнатами. Водорості *колишуться*. Почет *пропливає*. Світло *пронизує* водорості. Палац *захоплює*."
        }
      }
    ],
    task: {
      id: "t25-s02-opis",
      type: "multiple-choice",
      question: {
        pl: "Który opis korzysta ze słownictwa *tego* pałacu? Zaznacz wszystkie pewne.",
        ua: "Який опис бере словництво *цього* палацу? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Siedziba jest błękitna; dach z muszli znajduje się nad komnatami.", ua: "Оселя блакитна; дах із мушель — над кімнатами." } },
        { id: "b", label: { pl: "Algi kołyszą się; orszak głowonogów przepływa; światło przenika fale.", ua: "Водорості колишуться; почет пропливає; світло пронизує хвилі." } },
        { id: "c", label: { pl: "Pałac stoi na piasku Gizy obok piramidy Cheopsa.", ua: "Палац стоїть на піску Гізи біля піраміди Хеопса." } },
        { id: "d", label: { pl: "Okna z bursztynu olśniewają; perły zachwycają przy odpływie.", ua: "Вікна з бурштину сліпучі; перли захоплюють при відпливі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Giza to lekcja 22. Bierz muszle, algi, bursztyn.",
        ua: "Гіза — урок 22. Бери мушлі, водорості, бурштин."
      },
      explanation: {
        pl: "Związki z ramki + słowa delfina. Egipt odpada.",
        ua: "Зв’язки з рамки + слова дельфіна."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 4 · zaproszenie na ucztę", ua: "Завд. 4 · запрошення на учту" },
    formula: "s. 55",
    promptPlace: "before",
    prompt: {
      pl: "Napisz zaproszenie na ucztę w pałacu Posejdona. Pamiętaj, by poinformować o tym, *kto i kogo* zaprasza oraz *gdzie, kiedy i z jakiej okazji* odbędzie się przyjęcie.",
      ua: "Напиши запрошення на учту в палаці Посейдона. Хто і кого, де, коли, з якої нагоди."
    },
    items: [
      { pl: "Kto zaprasza? (Posejdon / Amfitryta / oboje)", ua: "Хто запрошує?" },
      { pl: "Kogo? (Okeanos, okeanidy, nereidy…)", ua: "Кого?" },
      { pl: "Gdzie? (pałac błękitny w głębinach)", ua: "Де?" },
      { pl: "Kiedy? (np. nazajutrz po pełni / w dzień ślubu)", ua: "Коли?" },
      { pl: "Z jakiej okazji? (ślub, intronizacja królowej)", ua: "З якої нагоди?" }
    ],
    reveal: true,
    steps: [
      {
        formula: "PRZYKŁAD EduMost",
        text: {
          pl: "Posejdon, władca mórz, i Amfitryta, królowa głębin, zapraszają Okeanosa oraz okeanidy na ucztę weselną w błękitnym pałacu o dachu z muszli. Przyjęcie: nazajutrz po nastaniu spokoju fal, gdy słońce widać jak kielich purpurowego kwiatu.",
          ua: "Посейдон і Амфітріта запрошують Океана та океанід на весільну учту в блакитному палаці. Прийняття: коли море спокійне і сонце видно як чашечку пурпурової квітки."
        }
      }
    ],
    task: {
      id: "t25-s03-zapros",
      type: "multiple-choice",
      question: {
        pl: "Czego NA PEWNO nie może brakować w zaproszeniu? Zaznacz wszystkie pewne.",
        ua: "Чого НАПЕВНО не може бракувати в запрошенні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Kto zaprasza i kogo.", ua: "Хто запрошує і кого." } },
        { id: "b", label: { pl: "Gdzie, kiedy i z jakiej okazji.", ua: "Де, коли і з якої нагоди." } },
        { id: "c", label: { pl: "Tylko podpis Wiktora z Kairu — bez miejsca i daty.", ua: "Лише підпис Віктора з Каїра — без місця і дати." } },
        { id: "d", label: { pl: "Związek z tym pałacem (głębiny, muszle), nie z Gizą.", ua: "Зв’язок із цим палацом (глибини, мушлі), не з Гізою." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Dosłownie polecenie s. 55: kto, kogo, gdzie, kiedy, okazja.",
        ua: "Дослівно завдання с. 55."
      },
      explanation: {
        pl: "Pięć informacji. Wiktor nie jest gospodarzem tej uczty.",
        ua: "П’ять відомостей. Віктор не господар цієї учти."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 5 · życie Amfitryty po ślubie", ua: "Завд. 5 · життя Амфітріти після шлюбу" },
    formula: "s. 55",
    promptPlace: "before",
    prompt: {
      pl: "Przedstaw życie Amfitryty po ślubie z władcą mórz. a) Wyszukaj informacje w tekście. b) Dopisz określenia. *Życie Amfitryty po ślubie z Posejdonem okazało się (jakie?)*.",
      ua: "Покажи життя Амфітріти після шлюбу. a) З тексту. b) Означення. *Життя… виявилося (яким?)*."
    },
    reveal: true,
    steps: [
      {
        formula: "KLUCZ EduMost  ·  z s. 54",
        text: {
          pl: "Okazało się rozkoszne, wspaniałe, pełne dworu. 3000 okeanid, 50 nereid, śpiew i taniec u stóp, zielone włosy czesane na skale. Dwór wspanialszy niż u Hery. Królowej nie wypada tańczyć — siada w gronie na skale.",
          ua: "Виявилося розкішним. 3000 океанід, 50 нереїд, спів і танець біля ніг. Двір пишніший, ніж у Гери. Королеві танцювати не личить."
        }
      }
    ],
    task: {
      id: "t25-s04-zycie",
      type: "single-choice",
      question: {
        pl: "Które określenia życia po ślubie są z tekstu?",
        ua: "Які означення життя після шлюбу з тексту?"
      },
      options: [
        { id: "a", label: { pl: "rozkoszne, wspaniałe; dwór jakiego nie miała Hera; pełne śpiewu nereid", ua: "розкішне, пишне; двір, якого не мала Гера; повне співу нереїд" } },
        { id: "b", label: { pl: "nędzne jak życie termitów w jaskini Prometeusza", ua: "нужденне, як життя термітів у печері Прометея" } },
        { id: "c", label: { pl: "gorące jak wylewy Nilu i muł na polach", ua: "гаряче, як розливи Нілу і мул на полях" } }
      ],
      answer: "a",
      hint: {
        pl: "Zdanie: «Życie Amfitryty było naprawdę rozkoszne.»",
        ua: "Речення: «Życie Amfitryty było naprawdę rozkoszne.»"
      },
      explanation: {
        pl: "Rozkoszne + dwór + nereidy. Termity i Nil — inne lekcje.",
        ua: "Розкішне + двір + нереїди."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 6 · elementy listu", ua: "Завд. 6 · елементи листа" },
    formula: "s. 55  ·  gatunek",
    visual: vizGh("t25-list.png", {
      alt: {
        pl: "Schemat listu: miejsce i czas, nagłówek, treść, pożegnanie, podpis",
        ua: "Схема листа: місце і час, заголовок, зміст, прощання, підпис"
      },
      title: { pl: "Slajd · budowa listu", ua: "Слайд · будова листа" },
      prompt: {
        pl: IMG_STYLE_SCH + " IMAGE PROMPT: karta z morską ramką. Cztery pola po polsku: miejsce i czas (prawy górny róg), nagłówek ze zwrotem, treść, formuła kończąca i podpis.",
        ua: "Схема листа. Польські етикетки."
      }
    }),
    promptPlace: "before",
    prompt: {
      pl: "W imieniu Amfitryty napisz w zeszycie list do Okeanosa. Nie zapomnij o elementach. Wykorzystaj podany schemat (niebieska ramka w podręczniku).",
      ua: "Від імені Амфітріти напиши в зошиті лист до Океана. Елементи жанру + схема з підручника."
    },
    items: [
      { pl: "informacja o *miejscu i czasie* napisania — prawy górny róg kartki;", ua: "відомості про *місце і час* — правий верхній кут;" },
      { pl: "*nagłówek* ze zwrotem grzecznościowym w pierwszej linijce;", ua: "*заголовок* чемним звертанням у першому рядку;" },
      { pl: "*formuła kończąca* (pożegnanie i zwrot grzecznościowy);", ua: "*завершальна формула* (прощання і чемне звертання);" },
      { pl: "*podpis*.", ua: "*підпис*." }
    ],
    text: {
      pl: [
        "Schemat z ramki: *Od kiedy poślubiłam Posejdona, jeszcze do Ciebie nie pisałam.* ?  *Zapraszam Cię* ?  *Pałac, w którym mieszkam, jest* ?  *Wokół roztacza się* ?  *W królestwie mojego męża nie można się nudzić.* ?  *Na koniec mojego listu* ?"
      ],
      ua: [
        "Схема з рамки: *Відколи вийшла заміж за Посейдона, ще до Тебе не писала.* ?  *Запрошую Тебе* ?  *Палац, у якому живу, є* ?  *Навколо простягається* ?  *У царстві мого чоловіка не можна нудьгувати.* ?  *Наприкінці мого листа* ?"
      ]
    },
    task: {
      id: "t25-s05-elementy",
      type: "multiple-choice",
      question: {
        pl: "Które elementy muszą być w tym liście? Zaznacz wszystkie pewne.",
        ua: "Які елементи мають бути в цьому листі? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Miejsce i czas w prawym górnym rogu.", ua: "Місце і час у правому верхньому куті." } },
        { id: "b", label: { pl: "Nagłówek ze zwrotem, pożegnanie, podpis Amfitryty.", ua: "Заголовок зі звертанням, прощання, підпис Амфітріти." } },
        { id: "c", label: { pl: "Tylko trzy zdania bez zwrotu i bez podpisu.", ua: "Лише три речення без звертання і без підпису." } },
        { id: "d", label: { pl: "Treść: życie królowej albo opis królestwa (nie Kair).", ua: "Зміст: життя королеви або опис царства (не Каїр)." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Wypunktowanie s. 55: miejsce/czas, nagłówek, formuła, podpis, schemat.",
        ua: "Пункти с. 55."
      },
      explanation: {
        pl: "Gatunek listu + temat z mitu. Bez tego to nie jest zadanie 6.",
        ua: "Жанр листа + тема з міфу."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 6b · piszemy list", ua: "Завд. 6б · пишемо лист" },
    formula: "s. 55  ·  w zeszycie",
    promptPlace: "before",
    prompt: {
      pl: "Napisz cały list. Nadawca: Amfitryta. Odbiorca: Okeanos (ojciec). Polski szkolny. Potem sprawdź, czy nic nie umknęło.",
      ua: "Напиши весь лист. Адресант: Амфітріта. Адресат: Океан (батько). Потім перевір елементи."
    },
    reveal: true,
    steps: [
      {
        formula: "PRZYKŁAD EduMost  ·  skrót (twój list ma być dłuższy)",
        text: {
          pl: "Głębiny morza, po ślubie\n\nDrogi Ojcze!\n\nOd kiedy poślubiłam Posejdona, jeszcze do Ciebie nie pisałam. Zapraszam Cię do naszego błękitnego pałacu. Pałac, w którym mieszkam, jest pełen pereł i bursztynowych okien. Wokół roztacza się sad szafirowych drzew. W królestwie mojego męża nie można się nudzić: nereidy śpiewają, a trójząb uspokaja burze.\n\nŚciskam Cię serdecznie.\nTwoja córka Amfitryta",
          ua: "Глибини моря, після шлюбу\n\nДорогий Батьку!\n\nВідколи вийшла заміж, ще не писала. Запрошую до блакитного палацу з перлами і бурштиновими вікнами. У царстві не нудно: нереїди співають, тризуб тишить бурі.\n\nОбіймаю.\nТвоя донька Амфітріта"
        }
      }
    ],
    task: {
      id: "t25-s06-list",
      type: "single-choice",
      question: {
        pl: "Który list spełnia polecenie?",
        ua: "Який лист виконує завдання?"
      },
      options: [
        { id: "a", label: { pl: "Amfitryta do Okeanosa: miejsce/czas, Drogi Ojcze, pałac i dwór z tekstu, pożegnanie, podpis.", ua: "Амфітріта до Океана: місце/час, Дорогий Батьку, палац і двір з тексту, прощання, підпис." } },
        { id: "b", label: { pl: "Wiktor do klasy: Cześć wszystkim, jesteśmy w Kairze.", ua: "Віктор до класу: Привіт усім, ми в Каїрі." } },
        { id: "c", label: { pl: "Prometeusz do Dzeusa: oddajcie ogień, Kaukaz boli.", ua: "Прометей до Дзевса: віддайте вогонь, Кавказ болить." } }
      ],
      answer: "a",
      hint: {
        pl: "Imię nadawczyni jest w poleceniu. Do kogo pisze córka?",
        ua: "Ім’я адресантки в завданні. До кого пише донька?"
      },
      explanation: {
        pl: "Nadawca Amfitryta, odbiorca Okeanos, treść z mitu, elementy listu.",
        ua: "Адресант Амфітріта, адресат Океан, зміст з міфу, елементи листа."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 7 · makieta pałacu", ua: "Завд. 7 · макет палацу" },
    formula: "s. 55  ·  praca plastyczna",
    visual: vizGh("t25-makieta.png", {
      alt: {
        pl: "Szkolna makieta błękitnego pałacu z muszli i koralu",
        ua: "Шкільний макет блакитного палацу з мушель і коралу"
      },
      title: { pl: "Slajd · makieta", ua: "Слайд · макет" },
      prompt: {
        pl: IMG_STYLE_MAK + " IMAGE PROMPT: tekturowy błękitny pałac, dach z muszli, suszone kwiaty, patyki, guziki-perły, korale, gąbka, brokat. Zero liter.",
        ua: "Макет палацу. Без напису."
      }
    }),
    promptPlace: "before",
    prompt: {
      pl: "Na podstawie tekstu wykonajcie makietę pałacu Posejdona. Wykorzystajcie różne materiały, na przykład: włóczkę, nić, wstążkę, karton, papier, muszle, zasuszone kwiaty, patyki, liście, guziki, korale, brokat, gąbkę.",
      ua: "За текстом зробіть макет палацу Посейдона. Матеріали з підручника."
    },
    items: [
      { pl: "Najpierw szkic w zeszycie: dach z muszli, okna, sad, dno z liliami.", ua: "Спочатку ескіз у зошиті: дах із мушель, вікна, сад, дно з ліліями." },
      { pl: "Każdy element ma mieć *podpis z tekstu* (nie «niebieska rzecz»).", ua: "Кожен елемент — *підпис із тексту* (не «синя річ»)." },
      { pl: "Program dodaje też prezentację o *faunie i florze morskiej* z opisu (algi, gąbki, głowonogi, lilie, korale).", ua: "Програма додає презентацію про *фауну і флору* з опису." }
    ],
    task: {
      id: "t25-s07-makieta",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ma być na makiecie z *tego* tekstu? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО має бути на макеті з *цього* тексту? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Dach z muszli / perły, bursztynowe okna, korale albo lilie.", ua: "Дах із мушель / перли, бурштинові вікна, корали або лілії." } },
        { id: "b", label: { pl: "Piramida Cheopsa i feluka na Nilu jako główny motyw.", ua: "Піраміда Хеопса і фелука на Нілі як головний мотив." } },
        { id: "c", label: { pl: "Materiały z listy podręcznika (muszle, gąbka, brokat…).", ua: "Матеріали зі списку підручника (мушлі, губка, брокат…)." } },
        { id: "d", label: { pl: "Podpisy słowami Parandowskiego, nie luźny «ocean z filmu».", ua: "Підписи словами Парандовського, не «океан із фільму»." } }
      ],
      answer: ["a", "c", "d"],
      hint: {
        pl: "Lista materiałów jest na s. 55. Motyw — pałac Posejdona.",
        ua: "Список матеріалів на с. 55. Мотив — палац Посейдона."
      },
      explanation: {
        pl: "Makieta ilustruje *ten* opis. Nil i Cheops zostają w lekcji 22.",
        ua: "Макет ілюструє *цей* опис."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
    promptPlace: "after",
    prompt: {
      pl: "To zabierasz do zeszytu razem z lekcją 24.",
      ua: "Це забираєш у зошит разом з уроком 24."
    },
    items: [
      { pl: "Opis pałacu: określenia + związki (znajduje się, kołysze się, olśniewa…). Środki: porównanie, epitet, ożywienie.", ua: "Опис палацу: означення + зв’язки. Засоби: порівняння, епітет, оживлення." },
      { pl: "Zaproszenie: kto, kogo, gdzie, kiedy, okazja.", ua: "Запрошення: хто, кого, де, коли, нагода." },
      { pl: "List: miejsce/czas, nagłówek, treść z mitu, formuła, podpis Amfitryty do Okeanosa.", ua: "Лист: місце/час, заголовок, зміст з міфу, формула, підпис Амфітріти до Океана." },
      { pl: "Makieta / prezentacja flory i fauny — z tekstu Parandowskiego, nie z innego mitu.", ua: "Макет / презентація флори і фауни — з тексту Парандовського." }
    ],
    task: {
      id: "t25-s08-notatka",
      type: "single-choice",
      question: {
        pl: "Która notatka pokazuje, że umiesz lekcje 24–25?",
        ua: "Яка нотатка показує, що вмієш уроки 24–25?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Mit Parandowskiego; świat i Amfitryta; opis ze środków; zaproszenie; list z elementami; makieta z muszli.",
            ua: "Міф Парандовського; світ і Амфітріта; опис із засобів; запрошення; лист з елементами; макет із мушель."
          }
        },
        { id: "b", label: { pl: "Tylko e-mail Wiktora i podział rzeczowników.", ua: "Лише e-mail Віктора і поділ іменників." } },
        { id: "c", label: { pl: "Tylko kaukaz i orzeł — bez pałacu i bez listu.", ua: "Лише Кавказ і орел — без палацу і без листа." } }
      ],
      answer: "a",
      hint: {
        pl: "Tematy 24–25 w planie: pałac władcy mórz + list w imieniu Amfitryty.",
        ua: "Теми 24–25: палац володаря морів + лист від Амфітріти."
      },
      explanation: {
        pl: "24 = mit i materiał. 25 = opis, zaproszenie, list, makieta. Rzeczownik — 22–23. Prometeusz — 21.",
        ua: "24 = міф і матеріал. 25 = опис, запрошення, лист, макет."
      }
    }
  }
];

(function () {
  var part = window.EduMostT25Blocks || [];
  var prev = window.EduMostLessonContent && window.EduMostLessonContent.blocks;
  if (prev && prev.length) {
    window.EduMostLessonContent = { blocks: prev.concat(part) };
  } else {
    window.EduMostLessonContent = { blocks: part };
  }
})();
