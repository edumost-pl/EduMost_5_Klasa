var POL_IMG_T51 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT51(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T51 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 92  ·  Lekcja 51  ·  precyzyjna informacja",
    promptPlace: "before",
    prompt: {
      pl: "Nowy dział: *Gdzie stopy nasze*. Temat: *Jak precyzyjnie udzielać informacji?* Plansza górskiego szlaku, znaki PTTK, komunikacja i ramka słownictwa do wskazówek. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Новий розділ: *Gdzie stopy nasze*. Тема: *Як точно надавати інформацію?* Плакат гірського маршруту, знаки PTTK, комунікація і рамка словника для підказок. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opiszę sytuację na planszy i wskażę osoby;", ua: "опишу ситуацію на плакаті і вкажу осіб;" },
      { pl: "odczytam znaki szlaków (kierunek, czas, kolor);", ua: "прочитаю знаки стежок (напрям, час, колір);" },
      { pl: "wskażę, co pomaga, a co psuje komunikat;", ua: "вкажу, що допомагає, а що псує повідомлення;" },
      { pl: "ułożę krótką wypowiedź ze słownictwem z ramki.", ua: "складу коротку репліку зі словником із рамки." }
    ],
    task: {
      id: "t51-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opisać planszę i odczytać drogowskazy.", ua: "Описати плакат і прочитати вказівники." } },
        { id: "b", label: { pl: "Powiedzieć, co pomaga i co utrudnia zdobycie informacji.", ua: "Сказати, що допомагає і що ускладнює здобуття інформації." } },
        { id: "c", label: { pl: "Już dziś napisać cały mit o Heraklesie z pamięci.", ua: "Уже сьогодні написати весь міф про Геракла напам’ять." } },
        { id: "d", label: { pl: "Użyć słów z ramki w krótkiej wskazówce dla turystów.", ua: "Використати слова з рамки в короткій підказці для туристів." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Herakles jest w innym temacie działu. Co jest na s. 92?",
        ua: "Геракл — в іншій темі розділу. Що на с. 92?"
      },
      explanation: {
        pl: "Dziś: plansza, szlaki, komunikacja, ramka. Mit o Heraklesie — później.",
        ua: "Сьогодні: плакат, стежки, комунікація, рамка. Міф про Геракла — пізніше."
      }
    }
  },

  // 2 — plansza describe
  {
    type: "observe",
    heading: { pl: "Plansza · sytuacja", ua: "Плакат · ситуація" },
    formula: "s. 92  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Przyjrzyj się planszy (kliknij, by powiększyć). Nazwij sytuację i powiedz, kim są osoby.",
      ua: "Приглянься до плаката (клікни, щоб збільшити). Назви ситуацію і скажи, хто ці люди."
    },
    visual: vizGhT51("t51-plansza.jpg", {
      alt: { pl: "Plansza — rozdroże szlaków w górach", ua: "Плакат — роздоріжжя стежок у горах" },
      place: "after"
    }),
    items: [
      { pl: "Miejsce: rozdroże szlaków turystycznych w górach (mapa, drogowskaz PTTK).", ua: "Місце: роздоріжжя туристичних стежок у горах (карта, вказівник PTTK)." },
      { pl: "Osoby: turyści / wędrowcy z plecakami (mapa papierowa, telefon, kijki).", ua: "Особи: туристи / мандрівники з наплічниками (паперова карта, телефон, палиці)." },
      { pl: "Sytuacja: szukają drogi / sprawdzają, którędy iść.", ua: "Ситуація: шукають дорогу / перевіряють, куди йти." }
    ],
    task: {
      id: "t51-s02-sytuacja",
      type: "single-choice",
      question: {
        pl: "Najtrafniejszy opis sytuacji na planszy:",
        ua: "Найточніший опис ситуації на плакаті:"
      },
      options: [
        { id: "a", label: { pl: "Turyści na rozdrożu szlaków sprawdzają drogę (mapa, drogowskaz, telefon).", ua: "Туристи на роздоріжжі стежок перевіряють дорогу (карта, вказівник, телефон)." } },
        { id: "b", label: { pl: "Dzieci grają w piłkę na boisku szkolnym.", ua: "Діти грають у м’яч на шкільному полі." } },
        { id: "c", label: { pl: "Kucharze gotują zupę w restauracji.", ua: "Кухарі варять суп у ресторані." } }
      ],
      answer: "a",
      hint: {
        pl: "Spójrz na drogowskaz, mapę i ludzi z plecakami.",
        ua: "Глянь на вказівник, карту і людей з наплічниками."
      },
      explanation: {
        pl: "To górskie rozdroże: turyści orientują się w terenie.",
        ua: "Це гірське роздоріжжя: туристи орієнтуються на місцевості."
      }
    }
  },

  // 3 — ways of getting info
  {
    type: "practice",
    heading: { pl: "Skąd biorą informacje?", ua: "Звідки беруть інформацію?" },
    formula: "s. 92  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Pomówcie o sposobach zdobywania informacji. Na planszy widać kilka źródeł — wskaż je.",
      ua: "Поговоріть про способи здобуття інформації. На плакаті видно кілька джерел — вкажи їх."
    },
    visual: vizGhT51("t51-plansza.jpg", {
      alt: { pl: "Plansza — źródła informacji", ua: "Плакат — джерела інформації" },
      place: "after"
    }),
    items: [
      { pl: "mapa papierowa · drogowskaz / tablica · znaki na drzewach i kamieniach · telefon / GPS · pytanie innych turystów", ua: "паперова карта · вказівник / табло · знаки на деревах і камінні · телефон / GPS · питання іншим туристам" }
    ],
    task: {
      id: "t51-s03-zrodla",
      type: "multiple-choice",
      question: {
        pl: "Które źródła informacji widać NA PEWNO na planszy? Zaznacz wszystkie.",
        ua: "Які джерела інформації НАПЕВНО видно на плакаті? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "papierowa mapa (kobieta w czerwonym)", ua: "паперова карта (жінка в червоному)" } },
        { id: "b", label: { pl: "smartfon (mężczyzna w fioletowym)", ua: "смартфон (чоловік у фіолетовому)" } },
        { id: "c", label: { pl: "drogowskaz PTTK z czasami przejścia", ua: "вказівник PTTK з часом переходу" } },
        { id: "d", label: { pl: "telewizor w schronisku (nie ma go na planszy)", ua: "телевізор у притулку (його немає на плакаті)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Szukaj: mapa w ręku, telefon, duży słup ze strzałkami.",
        ua: "Шукай: карта в руках, телефон, великий стовп зі стрілками."
      },
      explanation: {
        pl: "A–C widać. Telewizora na planszy nie ma.",
        ua: "A–C видно. Телевізора на плакаті немає."
      }
    }
  },

  // 4 — read trail signs
  {
    type: "practice",
    heading: { pl: "Czytamy drogowskaz", ua: "Читаємо вказівник" },
    formula: "s. 92  ·  znaki PTTK",
    promptPlace: "before",
    prompt: {
      pl: "Odczytaj strzałki: cel · czas · kolor szlaku. Kliknij planszę, jeśli trzeba.",
      ua: "Прочитай стрілки: мета · час · колір стежки. Клікни плакат, якщо треба."
    },
    visual: vizGhT51("t51-plansza.jpg", {
      alt: { pl: "Drogowskaz: Rabka, Luboń, Turbacz, Rdzawka", ua: "Вказівник: Rabka, Luboń, Turbacz, Rdzawka" },
      place: "after"
    }),
    items: [
      { pl: "**Rabka** — 1h 30′ — szlak **niebieski** (w lewo).", ua: "**Rabka** — 1h 30′ — стежка **синя** (ліворуч)." },
      { pl: "**Luboń Wielki** — 3h 30′ — szlak **żółty** (w lewo).", ua: "**Luboń Wielki** — 3h 30′ — стежка **жовта** (ліворуч)." },
      { pl: "**Turbacz** — ok. 4h — szlak **czerwony** (w prawo).", ua: "**Turbacz** — бл. 4h — стежка **червона** (праворуч)." },
      { pl: "**Rdzawka** — 1h 15′ — szlak **niebieski** (w prawo).", ua: "**Rdzawka** — 1h 15′ — стежка **синя** (праворуч)." }
    ],
    task: {
      id: "t51-s04-szlaki",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie prawdziwe według drogowskazu.",
        ua: "Познач усі правдиві згідно з вказівником."
      },
      options: [
        { id: "a", label: { pl: "Do Turbacza: ok. 4h, szlak czerwony, w prawo.", ua: "До Turbacza: бл. 4h, червона стежка, праворуч." } },
        { id: "b", label: { pl: "Do Rabki: 1h 30′, szlak niebieski.", ua: "До Rabki: 1h 30′, синя стежка." } },
        { id: "c", label: { pl: "Do Lubonia Wielkiego: 3h 30′, szlak żółty.", ua: "До Lubonia Wielkiego: 3h 30′, жовта стежка." } },
        { id: "d", label: { pl: "Do Turbacza idzie się 15 minut żółtym szlakiem w lewo.", ua: "До Turbacza йдуть 15 хвилин жовтою стежкою ліворуч." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Czerwona strzałka = Turbacz ok. 4h. Żółta = Luboń 3h 30′.",
        ua: "Червона стрілка = Turbacz бл. 4h. Жовта = Luboń 3h 30′."
      },
      explanation: {
        pl: "A–C zgodne z planszą. D jest fałszywe.",
        ua: "A–C згідно з плакатом. D хибне."
      }
    }
  },

  // 5 — trail markers safety
  {
    type: "practice",
    heading: { pl: "Znaki na szlaku · bezpieczeństwo", ua: "Знаки на стежці · безпека" },
    formula: "s. 92  ·  oznaczenia",
    promptPlace: "before",
    prompt: {
      pl: "W Polsce szlak to zwykle *biały–kolor–biały* pasek. Na planszy: czerwony na drzewie, żółty i niebieski na kamieniach. Bezpieczeństwo = trzymać się znaków i sprawdzać czas.",
      ua: "У Польщі стежка — зазвичай смужка *білий–колір–білий*. На плакаті: червоний на дереві, жовтий і синій на камінні. Безпека = триматися знаків і перевіряти час."
    },
    visual: vizGhT51("t51-plansza.jpg", {
      alt: { pl: "Znaki kolorowe na drzewie i kamieniach", ua: "Кольорові знаки на дереві і камінні" },
      place: "after"
    }),
    items: [
      { pl: "Zasady: idź oznaczonym szlakiem · sprawdzaj mapę/drogowskaz · nie skracaj na oślep · uważaj przy wodzie / moście.", ua: "Правила: йди позначеною стежкою · перевіряй карту/вказівник · не скорочуй наосліп · обережно біля води / мосту." }
    ],
    task: {
      id: "t51-s05-bezpieczenstwo",
      type: "single-choice",
      question: {
        pl: "Która rada jest NAJLEPSZA na szlaku?",
        ua: "Яка порада НАЙКРАЩА на стежці?"
      },
      options: [
        { id: "a", label: { pl: "Trzymać się znaków szlaku i sprawdzać drogowskaz / mapę.", ua: "Триматися знаків стежки і перевіряти вказівник / карту." } },
        { id: "b", label: { pl: "Iść zawsze najkrótszą ścieżką bez znaków.", ua: "Йти завжди найкоротшою стежкою без знаків." } },
        { id: "c", label: { pl: "Ignorować kolory — wszystkie szlaki są takie same.", ua: "Ігнорувати кольори — усі стежки однакові." } }
      ],
      answer: "a",
      hint: {
        pl: "Kolor szlaku = konkretny kierunek. Znaki pomagają nie zgubić drogi.",
        ua: "Колір стежки = конкретний напрям. Знаки допомагають не заблукати."
      },
      explanation: {
        pl: "Bezpieczeństwo = znaki + sprawdzanie informacji. Nie idziemy «na oślep».",
        ua: "Безпека = знаки + перевірка інформації. Не йдемо «наосліп»."
      }
    }
  },

  // 6 — communication helps/hurts
  {
    type: "practice",
    heading: { pl: "Co pomaga, co psuje komunikat", ua: "Що допомагає, що псує повідомлення" },
    formula: "s. 92  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Spójrz na rysunki (kliknij). Lewy: chaotyczny «klębek» zamiast słów. Prawy: *yyy / hmm* — wypełniacze. Co pomaga, a co utrudnia zdobycie informacji?",
      ua: "Глянь на малюнки (клікни). Лівий: хаотичний «клубок» замість слів. Правий: *yyy / hmm* — слова-паразити. Що допомагає, а що ускладнює здобуття інформації?"
    },
    visual: vizGhT51("t51-komunikacja.png", {
      alt: { pl: "Rysunki: chaos w mowie i yyy/hmm", ua: "Малюнки: хаос у мові і yyy/hmm" },
      place: "after"
    }),
    items: [
      { pl: "**Pomaga:** jasny cel, kolejność (*najpierw… potem…*), konkretne słowa, sprawdzanie, czy odbiorca rozumie.", ua: "**Допомагає:** чітка мета, порядок (*najpierw… potem…*), конкретні слова, перевірка, чи слухач розуміє." },
      { pl: "**Utrudnia:** chaos / za dużo naraz, *yyy hmm*, brak faktów, mówienie «obok» tematu.", ua: "**Ускладнює:** хаос / занадто багато одразу, *yyy hmm*, брак фактів, говорити «мимо» теми." }
    ],
    task: {
      id: "t51-s06-komunikat",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie prawdziwe.",
        ua: "Познач усі правдиві."
      },
      options: [
        { id: "a", label: { pl: "Lewy rysunek: komunikat zbyt zagmatwany — utrudnia zrozumienie.", ua: "Лівий малюнок: повідомлення занадто заплутане — ускладнює розуміння." } },
        { id: "b", label: { pl: "Prawy rysunek: za dużo *yyy/hmm* — odbiorca się gubi.", ua: "Правий малюнок: забагато *yyy/hmm* — слухач губиться." } },
        { id: "c", label: { pl: "Precyzyjne wskazówki i kolejność kroków POMAGAJĄ.", ua: "Точні підказки і порядок кроків ДОПОМАГАЮТЬ." } },
        { id: "d", label: { pl: "Im więcej *yyy*, tym lepsza informacja.", ua: "Чим більше *yyy*, тим краща інформація." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Rysunki pokazują problemy. Dobre info = jasne i konkretne.",
        ua: "Малюнки показують проблеми. Хороша інфо = ясна і конкретна."
      },
      explanation: {
        pl: "A–C prawdziwe. D fałszywe — wypełniacze psują komunikat.",
        ua: "A–C правдиві. D хибне — слова-паразити псують повідомлення."
      }
    }
  },

  // 7 — avoid misunderstandings
  {
    type: "practice",
    heading: { pl: "Jak uniknąć nieporozumień", ua: "Як уникнути непорозумінь" },
    formula: "s. 92  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Co można zrobić, by uniknąć nieporozumień? Odwołaj się do planszy i rysunków.",
      ua: "Що можна зробити, щоб уникнути непорозумінь? Посилайся на плакат і малюнки."
    },
    items: [
      { pl: "Mów krótko i konkretnie · podawaj kolejność · sprawdzaj znak / mapę · pytaj: *Czy to jasne?*", ua: "Кажи коротко і конкретно · давай порядок · перевіряй знак / карту · питай: *Czy to jasne?*" },
      { pl: "Unikaj: klębka myśli, samego *yyy*, sprzecznych wskazówek.", ua: "Уникай: клубка думок, самих *yyy*, суперечливих підказок." }
    ],
    task: {
      id: "t51-s07-nieporozumienia",
      type: "single-choice",
      question: {
        pl: "Najlepszy sposób, by uniknąć nieporozumień przy wskazywaniu drogi:",
        ua: "Найкращий спосіб уникнути непорозумінь при вказівці дороги:"
      },
      options: [
        { id: "a", label: { pl: "Podawać jasne kroki po kolei i odwołać się do znaku / mapy.", ua: "Давати ясні кроки по черзі і посилатися на знак / карту." } },
        { id: "b", label: { pl: "Mówić samym *yyy hmm* przez minutę.", ua: "Говорити самими *yyy hmm* хвилину." } },
        { id: "c", label: { pl: "Wskazać trzy różne kierunki naraz bez kolorów szlaku.", ua: "Вказати три різні напрями одразу без кольорів стежки." } }
      ],
      answer: "a",
      hint: {
        pl: "Precyzja = kolejność + konkret (kolor, czas, kierunek).",
        ua: "Точність = порядок + конкретика (колір, час, напрям)."
      },
      explanation: {
        pl: "A — precyzyjna informacja. B i C psują komunikat.",
        ua: "A — точна інформація. B і C псують повідомлення."
      }
    }
  },

  // 8 — ramka vocab (example = yellow frame style)
  {
    type: "example",
    heading: { pl: "Słowa z ramki · kolejność", ua: "Слова з рамки · порядок" },
    formula: "s. 92  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw sama ramka. Dziś pracujemy słowa *osobno*, potem użyjesz ich w wypowiedzi.",
      ua: "Спочатку сама рамка. Сьогодні опрацьовуємо слова *окремо*, потім використаєш їх у репліці."
    },
    visual: vizGhT51("t51-ramka.png", {
      alt: { pl: "Ramka słownictwa do wskazówek", ua: "Рамка словника для підказок" }
    }),
    text: {
      pl: "najpierw  ·  następnie  ·  potem  ·  później  ·  na koniec  ·  wreszcie",
      ua: "najpierw  ·  następnie  ·  potem  ·  później  ·  na koniec  ·  wreszcie"
    },
    items: [
      { pl: "**najpierw** — na początku (спочатку).", ua: "**najpierw** — на початку (*спочатку*)." },
      { pl: "**następnie / potem / później** — kolejny krok (потім / далі).", ua: "**następnie / potem / później** — наступний крок (*потім / далі*)." },
      { pl: "**na koniec / wreszcie** — ostatni krok (нарешті / наприкінці).", ua: "**na koniec / wreszcie** — останній крок (*нарешті / наприкінці*)." }
    ],
    task: {
      id: "t51-s08-kolejnosc",
      type: "single-choice",
      question: {
        pl: "Która kolejność słów z ramki jest logiczna?",
        ua: "Який порядок слів із рамки логічний?"
      },
      options: [
        { id: "a", label: { pl: "najpierw → następnie → potem → na koniec", ua: "najpierw → następnie → potem → na koniec" } },
        { id: "b", label: { pl: "na koniec → najpierw → następnie", ua: "na koniec → najpierw → następnie" } },
        { id: "c", label: { pl: "wreszcie → najpierw → potem (od końca do początku)", ua: "wreszcie → najpierw → potem (з кінця до початку)" } }
      ],
      answer: "a",
      hint: {
        pl: "*Najpierw* = start. *Na koniec / wreszcie* = finisz.",
        ua: "*Najpierw* = старт. *Na koniec / wreszcie* = фініш."
      },
      explanation: {
        pl: "Logiczna oś czasu: najpierw → potem → na koniec.",
        ua: "Логічна вісь часу: najpierw → potem → na koniec."
      }
    }
  },

  // 9 — ramka verbs and place
  {
    type: "example",
    heading: { pl: "Słowa z ramki · kierunek i miejsce", ua: "Слова з рамки · напрям і місце" },
    formula: "s. 92  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Czasowniki wskazówek + przyimki miejsca. To narzędzia do precyzyjnej informacji.",
      ua: "Дієслова підказок + прийменники місця. Це інструменти для точної інформації."
    },
    text: {
      pl: "idź · przejdź · kieruj się · trzymaj się · zwracaj uwagę · uważaj · na prawo / na lewo · obok · przed · po kilku metrach",
      ua: "idź · przejdź · kieruj się · trzymaj się · zwracaj uwagę · uważaj · na prawo / na lewo · obok · przed · po kilku metrach"
    },
    items: [
      { pl: "**idź / przejdź / kieruj się** — ruch w określonym kierunku.", ua: "**idź / przejdź / kieruj się** — рух у певному напрямі." },
      { pl: "**trzymaj się szlaku · śledź znaki · sprawdzaj** — bezpieczeństwo.", ua: "**trzymaj się szlaku · śledź znaki · sprawdzaj** — безпека." },
      { pl: "**na prawo / na lewo · po prawej stronie · obok · przed · pomiędzy** — miejsce.", ua: "**na prawo / na lewo · po prawej stronie · obok · przed · pomiędzy** — місце." },
      { pl: "**uważaj na / pamiętaj o / bądź ostrożny, gdy…** — ostrzeżenie.", ua: "**uważaj na / pamiętaj o / bądź ostrożny, gdy…** — попередження." }
    ],
    task: {
      id: "t51-s09-kierunek",
      type: "multiple-choice",
      question: {
        pl: "Które wyrażenia z ramki pasują do precyzyjnej wskazówki? Zaznacz wszystkie.",
        ua: "Які вирази з рамки пасують до точної підказки? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "kieruj się czerwonym szlakiem na prawo", ua: "kieruj się czerwonym szlakiem na prawo" } },
        { id: "b", label: { pl: "trzymaj się znaków; po kilku metrach sprawdź drogowskaz", ua: "trzymaj się znaków; po kilku metrach sprawdź drogowskaz" } },
        { id: "c", label: { pl: "uważaj na most / strumień", ua: "uważaj na most / strumień" } },
        { id: "d", label: { pl: "yyy hmm jako jedyna treść komunikatu", ua: "yyy hmm як єдина зміст повідомлення" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Ramka daje konkret. *Yyy* to problem z rysunku, nie narzędzie.",
        ua: "Рамка дає конкретику. *Yyy* — проблема з малюнка, не інструмент."
      },
      explanation: {
        pl: "A–C to słowa z ramki w użyciu. D psuje komunikat.",
        ua: "A–C — слова з рамки у вжитку. D псує повідомлення."
      }
    }
  },

  // 10 — wypowiedź with plansza + ramka
  {
    type: "practice",
    heading: { pl: "Wypowiedź dla turystów", ua: "Репліка для туристів" },
    formula: "s. 92  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Przygotuj krótką wypowiedź osoby, która udziela informacji turystom z planszy. Użyj słów z ramki. Najpierw wybierz dobry wzór, potem napisz swój.",
      ua: "Підготуй коротку репліку особи, що дає інформацію туристам із плаката. Використай слова з рамки. Спочатку вибери добрий зразок, потім напиши свій."
    },
    visual: vizGhT51("t51-plansza.jpg", {
      alt: { pl: "Plansza — turyści potrzebują wskazówki", ua: "Плакат — туристам потрібна підказка" },
      place: "after"
    }),
    items: [
      { pl: "Wzór: *Najpierw rozejrzyjcie się na drogowskaz. Następnie kierujcie się czerwonym szlakiem na prawo do Turbacza (ok. 4h). Trzymajcie się znaków na drzewach. Uważajcie na most przy strumieniu.*", ua: "Зразок: *Najpierw rozejrzyjcie się… czerwonym szlakiem na prawo do Turbacza… Trzymajcie się znaków… Uważajcie na most…*" }
    ],
    task: {
      id: "t51-s10-wzor",
      type: "single-choice",
      question: {
        pl: "Która wypowiedź jest precyzyjna i używa słów z ramki?",
        ua: "Яка репліка точна і використовує слова з рамки?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Najpierw sprawdźcie drogowskaz. Potem kierujcie się niebieskim szlakiem na lewo do Rabki (1h 30′). Trzymajcie się znaków.",
            ua: "Najpierw sprawdźcie drogowskaz. Potem kierujcie się niebieskim szlakiem na lewo do Rabki (1h 30′). Trzymajcie się znaków."
          }
        },
        {
          id: "b",
          label: {
            pl: "Yyy hmm no idźcie jakoś tam, może będzie OK.",
            ua: "Yyy hmm no idźcie jakoś tam, może będzie OK."
          }
        },
        {
          id: "c",
          label: {
            pl: "Idźcie wszędzie naraz: i w lewo, i w prawo, bez kolorów.",
            ua: "Idźcie wszędzie naraz: i w lewo, i w prawo, bez kolorów."
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj: kolejność (*najpierw/potem*) + kolor + cel + czas.",
        ua: "Шукай: порядок (*najpierw/potem*) + колір + мета + час."
      },
      explanation: {
        pl: "A = precyzyjna informacja ze słów ramki. B = rysunek z *yyy*. C = chaos.",
        ua: "A = точна інформація зі слів рамки. B = малюнок з *yyy*. C = хаос."
      }
    }
  },

  // 11 — open + summary
  {
    type: "summary",
    heading: { pl: "Twoja wskazówka + co zabieram", ua: "Твоя підказка + що забираю" },
    formula: "s. 92  ·  zad. 3  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Napisz 4–6 zdań po polsku: wskazówka do *jednego* celu z drogowskazu (Rabka / Luboń / Turbacz / Rdzawka). Użyj min. 3 słów z ramki.",
      ua: "Напиши 4–6 речень польською: підказка до *однієї* мети з вказівника (Rabka / Luboń / Turbacz / Rdzawka). Використай мін. 3 слова з рамки."
    },
    items: [
      { pl: "Precyzyjna informacja = konkret + kolejność + sprawdzenie.", ua: "Точна інформація = конкретика + порядок + перевірка." },
      { pl: "Szlak: cel, czas, kolor; znaki biały–kolor–biały.", ua: "Стежка: мета, час, колір; знаки білий–колір–білий." },
      { pl: "Psuje komunikat: chaos i *yyy/hmm* bez treści.", ua: "Псує повідомлення: хаос і *yyy/hmm* без змісту." }
    ],
    task: {
      id: "t51-s11-open",
      type: "open-answer",
      question: {
        pl: "Twoja wypowiedź dla turystów (ze słowami z ramki):",
        ua: "Твоя репліка для туристів (зі словами з рамки):"
      },
      hint: {
        pl: "Start: Najpierw… Następnie kierujcie się… Trzymajcie się… Na koniec…",
        ua: "Старт: Najpierw… Następnie kierujcie się… Trzymajcie się… Na koniec…"
      },
      explanation: {
        pl: "Sprawdź: czy jest cel, kolor/kierunek, kolejność i ostrzeżenie?",
        ua: "Перевір: чи є мета, колір/напрям, порядок і попередження?"
      }
    }
  }
]};
