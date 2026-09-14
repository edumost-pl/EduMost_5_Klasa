function emT54(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T54 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT54(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T54 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 97  ·  Lekcja 54  ·  ćwiczenia",
    promptPlace: "before",
    prompt: {
      pl: "Druga część tematu *Liczebnik*: hieroglify Wiktora, oaza (związki główne → porządkowe), zapis słowny i krótka odmiana. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга частина теми *Liczebnik*: ієрогліфи Віктора, оаза (сполучення головні → порядкові), запис словами і коротка відміна. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "odczytam hieroglify według wzoru *ile? / który z kolei?*;", ua: "прочитаю ієрогліфи за зразком *ile? / który z kolei?*;" },
      { pl: "utworzę związki liczebnik + rzeczownik z ilustracji;", ua: "утворю сполучення числівник + іменник з ілюстрації;" },
      { pl: "przekształcę główne w porządkowe;", ua: "перетворю головні на порядкові;" },
      { pl: "zapiszę liczebniki słownie i zacznę odmianę.", ua: "запишу числівники словами і почну відмінювання." }
    ],
    task: {
      id: "t54-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Hieroglify: ile? / który z kolei?", ua: "Ієрогліфи: ile? / który z kolei?" } },
        { id: "b", label: { pl: "Oaza: związki i przekształcenia", ua: "Оаза: сполучення і перетворення" } },
        { id: "c", label: { pl: "Cała ramka *nie* z liczebnikiem", ua: "Уся рамка *nie* з числівником" } },
        { id: "d", label: { pl: "Zapis słowny + start odmiany", ua: "Запис словами + старт відміни" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Nie* = lekcja 55.",
        ua: "*Nie* = урок 55."
      },
      explanation: {
        pl: "A, B, D dziś. Ortografia *nie* — T55.",
        ua: "A, B, D сьогодні. Орфографія *nie* — T55."
      }
    }
  },

  // 2 — hieroglify wzór
  {
    type: "observe",
    heading: { pl: "Hieroglify · wzór", ua: "Ієрогліфи · зразок" },
    formula: "s. 97  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Wiktor przysłał rysunki. Najpierw wzór z podręcznika: *jeden król / pierwszy król*. Potem cztery zestawy.",
      ua: "Віктор надіслав малюнки. Спочатку зразок із підручника: *jeden król / pierwszy król*. Потім чотири набори."
    },
    visual: vizGhT54("t54-hieroglify.png", {
      alt: { pl: "Zad. 2 — hieroglify według wzoru", ua: "Завд. 2 — ієрогліфи за зразком" },
      place: "after"
    }),
    items: [
      { pl: "Wzór: *(ile?) **jeden** król, (który z kolei?) **pierwszy** król*", ua: "Зразок: *(ile?) **jeden** król, (który z kolei?) **pierwszy** król*" },
      { pl: "∩ = 10 · | = 1 · symbol rzeczownika z legendy e-maila", ua: "∩ = 10 · | = 1 · символ іменника з легенди e-mail" }
    ],
    task: {
      id: "t54-s02-wzor",
      type: "single-choice",
      question: {
        pl: "Według wzoru zapisujesz NA PEWNO:",
        ua: "За зразком записуєш НАПЕВНО:"
      },
      options: [
        { id: "a", label: { pl: "obie formy: główną (*ile?*) i porządkową (*który z kolei?*)", ua: "обидві форми: головну (*ile?*) і порядкову (*który z kolei?*)" } },
        { id: "b", label: { pl: "tylko cyfrę arabską, bez słów", ua: "лише арабську цифру, без слів" } },
        { id: "c", label: { pl: "tylko tłumaczenie na ukraiński", ua: "лише переклад українською" } }
      ],
      answer: "a",
      hint: {
        pl: "Niebieski zapis przy wzorze ma dwa pytania.",
        ua: "Синій запис біля зразка має два питання."
      },
      explanation: {
        pl: "Wzór zawsze: ile? + który z kolei?",
        ua: "Зразок завжди: ile? + który z kolei?"
      }
    }
  },

  // 3 — hieroglify odpowiedzi
  {
    type: "practice",
    heading: { pl: "Odczytaj hieroglify", ua: "Прочитай ієрогліфи" },
    formula: "s. 97  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Policz kreski / łuki i dobierz rzeczownik. Odpowiedzi ukryte w teście — najpierw spróbuj sam.",
      ua: "Порахуй риски / дуги і добери іменник. Відповіді в тесті — спочатку спробуй сам."
    },
    items: [
      { pl: "Policz łuki (∩ = 10) i kreski (| = 1), dobierz rzeczownik z legendy.", ua: "Порахуй дуги (∩ = 10) і риски (| = 1), добери іменник з легенди." },
      { pl: "Dla każdego zestawu: *ile?* oraz *który z kolei?*", ua: "Для кожного набору: *ile?* і *który z kolei?*" },
      { pl: "Odczyty — po *Sprawdź*.", ua: "Прочитання — після *Перевірити*." }
    ],
    task: {
      id: "t54-s03-hieroglify",
      type: "multiple-choice",
      question: {
        pl: "Które odczyty są poprawne? Zaznacz wszystkie.",
        ua: "Які прочитання правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "dziesięć domów / dziesiąty dom", ua: "dziesięć domów / dziesiąty dom" } },
        { id: "b", label: { pl: "trzech królów / trzeci król", ua: "trzech królów / trzeci król" } },
        { id: "c", label: { pl: "sto miast / setne miasto (bo dwa łuki = 100)", ua: "сто міст / соте місто (бо дві дуги = 100)" } },
        { id: "d", label: { pl: "dwadzieścia cztery miasta / dwudzieste czwarte miasto", ua: "dwadzieścia cztery miasta / dwudzieste czwarte miasto" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "∩ = dziesięć, nie sto. Sto to inny znak (zwój).",
        ua: "∩ = десять, не сто. Сто — інший знак (сувій)."
      },
      explanation: {
        pl: "Klucz: dziesięć domów / dziesiąty dom; trzech królów / trzeci król; dwadzieścia cztery miasta / dwudzieste czwarte miasto. C błędne (∩≠100).",
        ua: "Ключ: dziesięć domów / dziesiąty dom; trzech królów / trzeci król; 24 miasta / dwudzieste czwarte miasto. C помилкове."
      }
    }
  },

  // 4 — oaza ilustracja
  {
    type: "observe",
    heading: { pl: "Oaza · policz elementy", ua: "Оаза · порахуй елементи" },
    formula: "s. 97  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Przyjrzyj się ilustracji (kliknij, by powiększyć). Policz: palmy, wielbłądy, studnie, książki, leżak.",
      ua: "Розглянь ілюстрацію (клікни, щоб збільшити). Порахуй: пальми, верблюди, криниці, книжки, шезлонг."
    },
    visual: vizGhT54("t54-oaza.jpg", {
      alt: { pl: "Ilustracja oazy", ua: "Ілюстрація оази" },
      place: "after"
    }),
    items: [
      { pl: "palmy · wielbłądy · studnie · książki · leżak", ua: "пальми · верблюди · криниці · книжки · шезлонг" },
      { pl: "Przykład z podręcznika: *dwie studnie*", ua: "Приклад із підручника: *dwie studnie*" }
    ],
    task: {
      id: "t54-s04-policz",
      type: "single-choice",
      question: {
        pl: "Ile studni i ile wielbłądów widać na ilustracji?",
        ua: "Скільки криниць і скільки верблюдів видно на ілюстрації?"
      },
      options: [
        { id: "a", label: { pl: "2 studnie · 3 wielbłądy", ua: "2 криниці · 3 верблюди" } },
        { id: "b", label: { pl: "5 studni · 1 wielbłąd", ua: "5 криниць · 1 верблюд" } },
        { id: "c", label: { pl: "0 studni · 10 wielbłądów", ua: "0 криниць · 10 верблюдів" } }
      ],
      answer: "a",
      hint: {
        pl: "Przykład w zadaniu: *dwie studnie*. Wielbłądy: jeden z siodłem + dwa w tle.",
        ua: "Приклад у завданні: *dwie studnie*. Верблюди: один із сідлом + два на тлі."
      },
      explanation: {
        pl: "2 studnie, 3 wielbłądy. Palmy = 5, leżak = 1; książki policz na skanie.",
        ua: "2 криниці, 3 верблюди. Пальми = 5, шезлонг = 1; книжки порахуй на скані."
      }
    }
  },

  // 5 — 3a związki główne
  {
    type: "practice",
    heading: { pl: "Związki · liczebniki główne", ua: "Сполучення · головні числівники" },
    formula: "s. 97  ·  zad. 3a",
    promptPlace: "before",
    prompt: {
      pl: "Utwórz związki: liczebnik główny + rzeczownik. Instrukcja podręcznika na skanie.",
      ua: "Утвори сполучення: головний числівник + іменник. Інструкція підручника на скані."
    },
    visual: vizGhT54("t54-oaza-zad.png", {
      alt: { pl: "Zad. 3a–b — oaza", ua: "Завд. 3a–b — оаза" },
      place: "after"
    }),
    items: [
      { pl: "Policz na ilustracji: palmy, wielbłądy, studnie, książki, leżak.", ua: "Порахуй на ілюстрації: пальми, верблюди, криниці, книжки, шезлонг." },
      { pl: "Utwórz związki *liczebnik główny + rzeczownik*. Klucz po *Sprawdź*.", ua: "Утвори сполучення *головний числівник + іменник*. Ключ після *Перевірити*." }
    ],
    task: {
      id: "t54-s05-glowne",
      type: "multiple-choice",
      question: {
        pl: "Które związki NA PEWNO pasują do ilustracji? Zaznacz wszystkie.",
        ua: "Які сполучення НАПЕВНО пасують до ілюстрації? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "pięć palm · trzy wielbłądy · dwie studnie", ua: "pięć palm · trzy wielbłądy · dwie studnie" } },
        { id: "b", label: { pl: "jeden leżak", ua: "jeden leżak" } },
        { id: "c", label: { pl: "sto palm · zero wielbłądów", ua: "сто пальм · нуль верблюдів" } },
        { id: "d", label: { pl: "dziewięć książek (ok. — policz na skanie)", ua: "dziewięć książek (орієнт. — порахуй на скані)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Wzór: *dwie studnie*. Palmy = 5.",
        ua: "Зразок: *dwie studnie*. Пальми = 5."
      },
      explanation: {
        pl: "Klucz: pięć palm, trzy wielbłądy, dwie studnie, dziewięć książek, jeden leżak.",
        ua: "Ключ: pięć palm, trzy wielbłądy, dwie studnie, dziewięć książek, jeden leżak."
      }
    }
  },

  // 6 — 3b porządkowe
  {
    type: "practice",
    heading: { pl: "Przekształć w porządkowe", ua: "Перетвори на порядкові" },
    formula: "s. 97  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "Z głównych zrób porządkowe + rzeczownik w odpowiednim rodzaju: *dwie studnie* → *druga studnia*.",
      ua: "З головних зроби порядкові + іменник у відповідному роді: *dwie studnie* → *druga studnia*."
    },
    items: [
      { pl: "Z głównego zrób porządkowy + rzeczownik w liczbie pojedynczej i właściwym rodzaju.", ua: "З головного зроби порядковий + іменник в однині й правильному роді." },
      { pl: "Przykład wzorca formy: *dwie …* → *druga …* (rodzaj!). Klucz po *Sprawdź*.", ua: "Зразок форми: *dwie …* → *druga …* (рід!). Ключ після *Перевірити*." }
    ],
    task: {
      id: "t54-s06-porzadkowe",
      type: "single-choice",
      question: {
        pl: "Poprawne przekształcenie *dwie studnie* to:",
        ua: "Правильне перетворення *dwie studnie*:"
      },
      options: [
        { id: "a", label: { pl: "druga studnia", ua: "druga studnia" } },
        { id: "b", label: { pl: "drugi studnie", ua: "drugi studnie" } },
        { id: "c", label: { pl: "dwudziesta studnia", ua: "dwudziesta studnia" } }
      ],
      answer: "a",
      hint: {
        pl: "*studnia* = rodzaj żeński → *druga*.",
        ua: "*studnia* = жіночий рід → *druga*."
      },
      explanation: {
        pl: "Klucz: *dwie studnie* → **druga studnia**. Dalej: piąta palma, trzeci wielbłąd, dziewiąta książka, pierwszy leżak.",
        ua: "Ключ: *dwie studnie* → **druga studnia**. Далі: piąta palma, trzeci wielbłąd, dziewiąta książka, pierwszy leżak."
      }
    }
  },

  // 7 — 4a zapis słowny
  {
    type: "practice",
    heading: { pl: "Zapis słowny", ua: "Запис словами" },
    formula: "s. 97  ·  zad. 4a",
    promptPlace: "before",
    prompt: {
      pl: "Zapisz słownie liczebniki z nawiasów. Najpierw sprawdź pytanie: *ile?* czy *który z kolei?*",
      ua: "Запиши словами числівники з дужок. Спочатку перевір питання: *ile?* чи *który z kolei?*"
    },
    visual: vizGhT54("t54-zapis.png", {
      alt: { pl: "Zad. 4a — zapis słowny", ua: "Завд. 4a — запис словами" },
      place: "after"
    }),
    items: [
      { pl: "Najpierw patrz na pytanie: *ile?* czy *który / która / które z kolei?*", ua: "Спочатку дивись на питання: *ile?* чи *który / która / które z kolei?*" },
      { pl: "Zapisz słownie w zeszycie, potem sprawdź w teście.", ua: "Запиши словами в зошит, потім перевір у тесті." },
      { pl: "Pełny klucz — po *Sprawdź*.", ua: "Повний ключ — після *Перевірити*." }
    ],
    task: {
      id: "t54-s07-zapis",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy są poprawne? Zaznacz wszystkie.",
        ua: "Які записи правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "trzynaście godzin · czwarty turysta", ua: "trzynaście godzin · czwarty turysta" } },
        { id: "b", label: { pl: "dziewiętnaście kilogramów · jedenasta minuta", ua: "dziewiętnaście kilogramów · jedenasta minuta" } },
        { id: "c", label: { pl: "sześćdziesiąt cztery namioty · szóste muzeum", ua: "sześćdziesiąt cztery namioty · szóste muzeum" } },
        { id: "d", label: { pl: "trzynasty godzin · cztery turysta", ua: "trzynasty godzin · cztery turysta" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Patrz na pytanie nad nawiasem — *ile?* ≠ *który?*",
        ua: "Дивись на питання над дужками — *ile?* ≠ *który?*"
      },
      explanation: {
        pl: "Klucz: trzynaście godzin; czwarty turysta; dziewiętnaście kilogramów; jedenasta minuta; sześćdziesiąt cztery namioty; szóste muzeum.",
        ua: "Ключ: trzynaście godzin; czwarty turysta; dziewiętnaście kilogramów; jedenasta minuta; sześćdziesiąt cztery namioty; szóste muzeum."
      }
    }
  },

  // 8 — 4b odmiana
  {
    type: "practice",
    heading: { pl: "Odmiana · start", ua: "Відмінювання · старт" },
    formula: "s. 97  ·  zad. 4b",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: odmień przez przypadki **dwa** liczebniki główne i **dwa** porządkowe. Tu — wzór na *dwa* i *drugi* (m. os.).",
      ua: "Підручник: відміни за відмінками **два** головні і **два** порядкові. Тут — зразок на *dwa* і *drugi* (чол.)."
    },
    items: [
      { pl: "Główny *dwa* (m.): M *dwa*, D *dwóch*, C *dwóm*, B *dwóch/dwa*, N *dwoma*, Ms *dwóch*", ua: "Головний *dwa*: М *dwa*, Р *dwóch*, Д *dwóm*, З *dwóch/dwa*, О *dwoma*, Мс *dwóch*" },
      { pl: "Porządkowy *drugi*: jak przymiotnik — *drugi, drugiego, drugiemu…*", ua: "Порядковий *drugi*: як прикметник — *drugi, drugiego, drugiemu…*" },
      { pl: "Do zeszytu wybierz np. *trzy / trzeci* i *pięć / piąty*.", ua: "У зошит обери напр. *trzy / trzeci* і *pięć / piąty*." }
    ],
    task: {
      id: "t54-s08-odmiana",
      type: "single-choice",
      question: {
        pl: "Dopełniacz od *dwa* (o osobach / męskożywotne) to najczęściej:",
        ua: "Родовий від *dwa* (про осіб / чол. істоти) найчастіше:"
      },
      options: [
        { id: "a", label: { pl: "dwóch", ua: "dwóch" } },
        { id: "b", label: { pl: "dwami", ua: "dwami" } },
        { id: "c", label: { pl: "dwudziestu", ua: "dwudziestu" } }
      ],
      answer: "a",
      hint: {
        pl: "Nie myl z *dwudziestu* (20).",
        ua: "Не плутай із *dwudziestu* (20)."
      },
      explanation: {
        pl: "*dwóch* = D (i często B) od *dwa*. *dwudziestu* należy do 20.",
        ua: "*dwóch* = Р (і часто З) від *dwa*. *dwudziestu* — від 20."
      }
    }
  },

  // 9 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T54", ua: "Підсумок · T54" },
    formula: "s. 97  ·  dalej T55",
    promptPlace: "before",
    prompt: {
      pl: "Masz ćwiczenia z związków i zapisu. Lekcja 55: *nie* z liczebnikiem + tekst *Nie(zwykły) przypadek*.",
      ua: "Маєш вправи зі сполучень і запису. Урок 55: *nie* з числівником + текст *Nie(zwykły) przypadek*."
    },
    items: [
      { pl: "Hieroglify = trening *ile?* / *który z kolei?*", ua: "Ієрогліфи = тренування *ile?* / *który z kolei?*" },
      { pl: "Oaza: główne → porządkowe (*druga studnia*).", ua: "Оаза: головні → порядкові (*druga studnia*)." },
      { pl: "Zapis słowny + odmiana w zeszycie (4b).", ua: "Запис словами + відміна в зошиті (4b)." }
    ],
    task: {
      id: "t54-s09-dalej",
      type: "single-choice",
      question: {
        pl: "Temat lekcji 55 to:",
        ua: "Тема уроку 55:"
      },
      options: [
        { id: "a", label: { pl: "*nie* z liczebnikiem (oddzielnie + wyjątki)", ua: "*nie* з числівником (окремо + винятки)" } },
        { id: "b", label: { pl: "tylko hieroglify jeszcze raz", ua: "лише ієрогліфи ще раз" } },
        { id: "c", label: { pl: "podmiot zbiorowy", ua: "збірний суб’єкт" } }
      ],
      answer: "a",
      hint: {
        pl: "Jump: T55.",
        ua: "Jump: T55."
      },
      explanation: {
        pl: "T55 = ortografia *nie* + tekst.",
        ua: "T55 = орфографія *nie* + текст."
      }
    }
  }
]};
