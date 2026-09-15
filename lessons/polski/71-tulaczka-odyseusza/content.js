function emT71(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T71 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT71(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T71 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 148–156  ·  Lekcja 71  ·  Odyseusz",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Gdyby nie gniew Posejdona…* — mit o tułaczce Odyseusza (J. Parandowski). Czytanie, mapa wędrówki, kolejność miejsc. Polski pierwszy. **T72** = akcja / wątek + list.",
      ua: "Тема: *Якби не гнів Посейдона…* — міф про мандри Одіссея. Читання, мапа, порядок місць. Польська перша. **T72** = akcja / wątek + лист."
    },
    items: [
      { pl: "opowiem wybrane przygody Odyseusza;", ua: "розповім вибрані пригоди Одіссея;" },
      { pl: "wskażę przyczynę tułaczki (gniew Posejdona);", ua: "вкажу причину мандрів (гнів Посейдона);" },
      { pl: "ułożę miejsca wędrówki w kolejności (mapa).", ua: "розкладу місця мандрівки по порядку (мапа)." }
    ],
    task: {
      id: "t71-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś (T71)? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні (T71)? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam mit Parandowskiego o Odyseuszu", ua: "Читаю міф Парандовського про Одіссея" } },
        { id: "b", label: { pl: "Pracuję z mapą miejsc wędrówki", ua: "Працюю з мапою місць мандрівки" } },
        { id: "c", label: { pl: "Tylko list do Penelopy i definicję wątku (to T72)", ua: "Лише лист до Пенелопи і означення wątku (це T72)" } },
        { id: "d", label: { pl: "Ustalam przyczynę tułaczki", ua: "Визначаю причину мандрів" } }
      ],
      answer: ["a", "b", "d"],
      hint: { pl: "List + akcja/wątek = jutro (T72).", ua: "Лист + akcja/wątek = завтра (T72)." },
      explanation: { pl: "A, B, D. C = T72.", ua: "A, B, D. C = T72." }
    }
  },

  {
    type: "observe",
    heading: { pl: "Bohater i gniew boga", ua: "Герой і гнів бога" },
    formula: "s. 148  ·  wstęp",
    promptPlace: "before",
    prompt: {
      pl: "Kim jest Odyseusz? Dlaczego wraca do domu tak długo?",
      ua: "Хто такий Одіссей? Чому так довго повертається додому?"
    },
    items: [
      { pl: "**Odyseusz** — król **Itaki**, mąż Penelopy, ojciec Telemacha.", ua: "**Одіссей** — цар **Ітаки**, чоловік Пенелопи, батько Телемаха." },
      { pl: "Walczył pod **Troją**; po wojnie chce wrócić — los mówi inaczej.", ua: "Воював під **Троєю**; після війни хоче повернутися — доля інша." },
      { pl: "Kluczowa przyczyna tułaczki: **gniew Posejdona** (po oślepieniu Polifema).", ua: "Ключова причина: **гнів Посейдона** (після осліплення Поліфема)." },
      emT71("Mit = opowieść o bogach i herosach · tu: droga do domu")
    ],
    task: {
      id: "t71-s02-kto",
      type: "single-choice",
      question: {
        pl: "Gdzie Odyseusz chce wrócić po wojnie trojańskiej?",
        ua: "Куди Одіссей хоче повернутися після троянської війни?"
      },
      options: [
        { id: "a", label: { pl: "na Itakę — do żony i syna", ua: "на Ітаку — до дружини й сина" } },
        { id: "b", label: { pl: "na biegun z Kamińskim", ua: "на полюс із Камінським" } },
        { id: "c", label: { pl: "tylko do jaskini Polifema na zawsze", ua: "лише до печери Поліфема назавжди" } }
      ],
      answer: "a",
      hint: { pl: "Penelopa, Telemach, Itaka.", ua: "Пенелопа, Телемах, Ітака." },
      explanation: { pl: "Dom = Itaka.", ua: "Дім = Ітака." }
    }
  },

  {
    type: "observe",
    heading: { pl: "Czytamy · Tułaczka Odyseusza", ua: "Читаємо · Tułaczka Odyseusza" },
    formula: "s. 148–156  ·  fragment  ·  J. Parandowski",
    promptPlace: "before",
    prompt: {
      pl: "**9 stron** podręcznika. Każda osobno. **Klik / ↗ = powiększenie**, potem **przewijaj**. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "**9 сторінок** підручника. Кожна окремо. **Клік / ↗ = збільшення**, потім **прокручуй**. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź: Troja → Lotofagowie → Polifem → Aiolos → Lajstrygonowie → Kirke…", ua: "Слідкуй: Троя → Лотофаги → Поліфем → Айол → Лаістригони → Кірка…" },
      { pl: "…Skylla/Charybda → Helios → Kalipso → Feakowie → Itaka.", ua: "…Сцілла/Харібда → Геліос → Каліпсо → Феаки → Ітака." },
      { pl: "Glosy na marginesie pomagają (UA: trudne słowa).", ua: "Глоси на полі допомагають." }
    ],
    task: {
      id: "t71-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Jak Odyseusz ocalał siebie i załogę przed śpiewem syren?",
        ua: "Як Одіссей урятував себе й команду від співу сирен?"
      },
      options: [
        { id: "a", label: { pl: "załodze zalepił uszy woskiem, siebie kazał przywiązać do masztu", ua: "команді заліпив вуха воском, себе наказав прив’язати до щогли" } },
        { id: "b", label: { pl: "zjadł lotos i zapomniał o domu", ua: "з’їв лотос і забув про дім" } },
        { id: "c", label: { pl: "oddął miech wiatrów Lajstrygonom", ua: "віддав міх вітрів Лаістригонам" } }
      ],
      answer: "a",
      hint: { pl: "s. 152 — syreny, wosk, maszt.", ua: "с. 152 — сирени, віск, щогла." },
      explanation: { pl: "Klasyczny fortel: wosk + powrozy przy maszcie.", ua: "Класичний фортель: віск + мотузки біля щогли." }
    }
  },

  {
    type: "example",
    heading: { pl: "Słownictwo · wybrane glosy", ua: "Словник · вибрані глоси" },
    formula: "s. 148–156  ·  margines",
    promptPlace: "before",
    prompt: {
      pl: "Kilka trudnych słów z tekstu — z UA.",
      ua: "Кілька складних слів з тексту — з UA."
    },
    text: {
      pl: "**bukłak** — skórzane naczynie. **miech** — wór (tu: z wiatrami Ajolosa). **powróz** — gruba lina. **wiszar** — skała / urwisko. **nektar / ambrozja** — napój i pokarm bogów. **UA:** *miech* ≈ міх; *powróz* ≈ мотуз / линва.",
      ua: "**bukłak** — шкіряна посудина. **miech** — мішок (з вітрами). **powróz** — товста линва. **wiszar** — скеля. **nektar / ambrozja** — напій і їжа богів."
    },
    items: [
      { pl: "*Lotofagowie* — lud lotosu · *cyklop* — olbrzym z jednym okiem · *syreny* — pół panny, pół ptaki.", ua: "*Лотофаги* · *циклоп* · *сирени*." },
      { pl: "*Kirke* zamienia ludzi w świnie · *Kalipso* zatrzymuje Odyseusza na Ogigii.", ua: "*Кірка* перетворює на свиней · *Каліпсо* тримає на Огігії." }
    ],
    task: {
      id: "t71-s04-glosy",
      type: "single-choice",
      question: {
        pl: "Co to jest *miech* u Ajolosa?",
        ua: "Що таке *miech* в Айола?"
      },
      options: [
        { id: "a", label: { pl: "wór z zamkniętymi wiatrami", ua: "мішок із замкненими вітрами" } },
        { id: "b", label: { pl: "łuk Penelopy", ua: "лук Пенелопи" } },
        { id: "c", label: { pl: "statek Feaków", ua: "корабель Феаків" } }
      ],
      answer: "a",
      hint: { pl: "Towarzysze rozwiązują worek — burza.", ua: "Товариші розв’язують мішок — буря." },
      explanation: { pl: "Miech Ajolosa = wiatry; otwarcie = nowa tułaczka.", ua: "Міх Айола = вітри; відкриття = нова мандрівка." }
    }
  },

  {
    type: "practice",
    heading: { pl: "Zad. 1 · mapa wędrówki", ua: "Завд. 1 · мапа мандрівки" },
    formula: "s. 156  ·  mapa",
    promptPlace: "before",
    prompt: {
      pl: "Na mapie numery = miejsca Odyseusza. Wpisz, kogo spotkał / nazwy miejsc (w zeszycie).",
      ua: "На мапі номери = місця Одіссея. Впиши, кого зустрів / назви місць (у зошиті)."
    },
    visual: vizGhT71("t71-zad1-mapa.jpg", {
      alt: { pl: "Mapa tułaczki Odyseusza z numerami 1–15", ua: "Мапа мандрівки Одіссея з номерами 1–15" },
      place: "after"
    }),
    items: [
      { pl: "1 = Troja · 15 = Itaka. Resztę odczytaj z tekstu.", ua: "1 = Троя · 15 = Ітака. Решту — з тексту." },
      { pl: "Uwaga: *Kikonowie — epizod pominięty u Parandowskiego (przypis *).", ua: "Увага: *Кікони — епізод пропущений у Парандовського (*)." },
      { pl: "Pełniejszy klucz — po *Sprawdź*.", ua: "Повніший ключ — після *Sprawdź*." }
    ],
    task: {
      id: "t71-s05-mapa",
      type: "multiple-choice",
      question: {
        pl: "Które pary numer → miejsce/postać są poprawne? Zaznacz wszystkie.",
        ua: "Які пари номер → місце/постать правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "1 → Troja (start po wojnie)", ua: "1 → Троя (старт після війни)" } },
        { id: "b", label: { pl: "3 → Lotofagowie", ua: "3 → Лотофаги" } },
        { id: "c", label: { pl: "15 → Itaka (dom)", ua: "15 → Ітака (дім)" } },
        { id: "d", label: { pl: "15 → jaskinia Polifema", ua: "15 → печера Поліфема" } }
      ],
      answer: ["a", "b", "c"],
      hint: { pl: "Koniec drogi = Itaka, nie cyklop.", ua: "Кінець шляху = Ітака, не циклоп." },
      explanation: {
        pl: "A–C. Dalej m.in.: cyklopi/Polifem · Ajolos · Lajstrygonowie · Kirke · kraina zmarłych · Skylla/Charybda · Helios · Kalipso · Feakowie. D fałsz.",
        ua: "A–C. Далі: циклопи · Айол · Лаістригони · Кірка · царство мертвих · Сцілла · Геліос · Каліпсо · Феаки. D хиба."
      }
    }
  },

  {
    type: "practice",
    heading: { pl: "Kolejność przygód", ua: "Порядок пригод" },
    formula: "s. 148–156  ·  chronologia",
    promptPlace: "before",
    prompt: {
      pl: "Ułóż w czasie: co było wcześniej, co później?",
      ua: "Розклади в часі: що раніше, що пізніше?"
    },
    items: [
      { pl: "Najpierw sam ułóż w zeszycie 5–6 etapów.", ua: "Спочатку сам у зошиті 5–6 етапів." },
      { pl: "Klucz kolejności — po *Sprawdź*.", ua: "Ключ порядку — після *Sprawdź*." }
    ],
    task: {
      id: "t71-s06-kolejnosc",
      type: "multiple-choice",
      question: {
        pl: "Która kolejność jest poprawna?",
        ua: "Який порядок правильний?"
      },
      options: [
        { id: "a", label: { pl: "Polifem → Ajolos (miech) → Lajstrygonowie → Kirke", ua: "Поліфем → Айол (міх) → Лаістригони → Кірка" } },
        { id: "b", label: { pl: "Itaka (łuk) → Troja → Lotofagowie", ua: "Ітака (лук) → Троя → Лотофаги" } },
        { id: "c", label: { pl: "Kalipso → tylko przed Troją", ua: "Каліпсо → лише перед Троєю" } }
      ],
      answer: "a",
      hint: { pl: "Po cyklopie: wiatry Ajolosa, potem olbrzymy-ludożercy.", ua: "Після циклопа: вітри Айола, потім велетні." },
      explanation: {
        pl: "A. Dom (Itaka) jest na końcu; Kalipso — późny etap przed Feakami.",
        ua: "A. Дім (Ітака) в кінці; Каліпсо — пізній етап перед Феаками."
      }
    }
  },

  {
    type: "practice",
    heading: { pl: "Przyczyna tułaczki", ua: "Причина мандрів" },
    formula: "s. 149  ·  Posejdon",
    promptPlace: "before",
    prompt: {
      pl: "Co wywołało gniew Posejdona i długą drogę do domu?",
      ua: "Що викликало гнів Посейдона і довгий шлях додому?"
    },
    items: [
      { pl: "Szukaj w tekście: Polifem, imię „Nikt”, modlitwa do ojca-boga morza.", ua: "Шукай: Поліфем, ім’я «Ніхто», молитва до батька-бога моря." },
      { pl: "Wniosek — po *Sprawdź*.", ua: "Висновок — після *Sprawdź*." }
    ],
    task: {
      id: "t71-s07-przyczyna",
      type: "single-choice",
      question: {
        pl: "Główna przyczyna tułaczki Odyseusza to…",
        ua: "Головна причина мандрів Одіссея —…"
      },
      options: [
        { id: "a", label: { pl: "gniew Posejdona po oślepieniu jego syna Polifema", ua: "гнів Посейдона після осліплення сина Поліфема" } },
        { id: "b", label: { pl: "chęć zostania na zawsze u Kalipso", ua: "бажання лишитися назавжди в Каліпсо" } },
        { id: "c", label: { pl: "brak mapy Beszczyńskiej z T68", ua: "відсутність мапи Бещинської з T68" } }
      ],
      answer: "a",
      hint: { pl: "Temat lekcji: *Gdyby nie gniew Posejdona…*", ua: "Тема уроку: *Gdyby nie gniew Posejdona…*" },
      explanation: { pl: "Polifem → Posejdon → burze i przeszkody na morzu.", ua: "Поліфем → Посейдон → бурі й перешкоди на морі." }
    }
  },

  {
    type: "summary",
    heading: { pl: "Podsumowanie · T71", ua: "Підсумок · T71" },
    formula: "s. 148–156  ·  most do T72",
    promptPlace: "before",
    prompt: {
      pl: "Zapamiętaj mit i mapę. W **T72**: akcja, wątek, przyczyna–skutek, list do Penelopy.",
      ua: "Запам’ятай міф і мапу. У **T72**: akcja, wątek, причина–наслідок, лист до Пенелопи."
    },
    items: [
      { pl: "Odyseusz wraca z Troi na Itakę mimo przeszkód bogów i potworów.", ua: "Одіссей повертається з Трої на Ітаку попри перешкоди." },
      { pl: "Przyczyna długiej drogi: gniew Posejdona.", ua: "Причина довгого шляху: гнів Посейдона." },
      { pl: "Mapa + kolejność miejsc = plan wędrówki.", ua: "Мапа + порядок місць = план мандрівки." },
      emT71("Następna lekcja T72 → akcja / wątek + list")
    ],
    task: {
      id: "t71-s08-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Odyseusz wraca na Itakę; ważną przyczyną tułaczki jest gniew Posejdona.”",
        ua: "Чи твердження правильне? «Одіссей повертається на Ітаку; важлива причина мандрів — гнів Посейдона.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: { pl: "Temat + finał mitu.", ua: "Тема + фінал міфу." },
      explanation: { pl: "Prawda.", ua: "Правда." }
    }
  }
]};
