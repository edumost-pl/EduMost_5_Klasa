function emT72(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T72 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT72(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T72 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 148–156  ·  Lekcja 72  ·  akcja / wątek",
    promptPlace: "before",
    prompt: {
      pl: "Kontynuacja mitu o Odyseuszu: **akcja**, **wątek**, łańcuch przyczyna–skutek, list do Penelopy. Polski pierwszy. Tekst z T71 możesz znów powiększyć poniżej.",
      ua: "Продовження міфу: **akcja**, **wątek**, ланцюг причина–наслідок, лист до Пенелопи. Польська перша. Текст з T71 можна знову збільшити нижче."
    },
    items: [
      { pl: "wyjaśnię różnicę: akcja vs wątek;", ua: "поясню різницю: akcja vs wątek;" },
      { pl: "ułożę zdarzenia w łańcuch przyczyna → skutek;", ua: "складу події в ланцюг причина → наслідок;" },
      { pl: "napiszę list Odyseusza do Penelopy (1. os.).", ua: "напишу лист Одіссея до Пенелопи (1 ос.)." }
    ],
    task: {
      id: "t72-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś (T72)? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні (T72)? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Ćwiczę terminy akcja / wątek", ua: "Вправляю терміни akcja / wątek" } },
        { id: "b", label: { pl: "Buduję łańcuch przyczyna–skutek", ua: "Будую ланцюг причина–наслідок" } },
        { id: "c", label: { pl: "Tylko pierwszą mapę bez listu (to głównie T71)", ua: "Лише першу мапу без листа (це переважно T71)" } },
        { id: "d", label: { pl: "Piszę list do Penelopy", ua: "Пишу лист до Пенелопи" } }
      ],
      answer: ["a", "b", "d"],
      hint: { pl: "T71 = mit + mapa. T72 = pojęcia + list.", ua: "T71 = міф + мапа. T72 = поняття + лист." },
      explanation: { pl: "A, B, D.", ua: "A, B, D." }
    }
  },

  {
    type: "observe",
    heading: { pl: "Przypomnienie tekstu", ua: "Нагадування тексту" },
    formula: "s. 148–156  ·  fragment  ·  Parandowski",
    promptPlace: "before",
    prompt: {
      pl: "Te same **9 stron** — każda osobno. Klik / ↗ = powiększenie, potem przewijaj.",
      ua: "Ті самі **9 сторінок** — кожна окремо. Клік / ↗ = збільшення, потім прокручуй."
    },
    items: [
      { pl: "Przypomnij sobie: Polifem → Posejdon · syreny · powrót na Itakę.", ua: "Пригадай: Поліфем → Посейдон · сирени · повернення на Ітаку." },
      { pl: "Mapa z T71 pomoże przy zadaniu 2.", ua: "Мапа з T71 допоможе при завданні 2." }
    ],
    task: {
      id: "t72-s02-przypomnij",
      type: "single-choice",
      question: {
        pl: "Kogo Odyseusz oślepia, wywołując gniew Posejdona?",
        ua: "Кого Одіссей осліплює, викликаючи гнів Посейдона?"
      },
      options: [
        { id: "a", label: { pl: "cyklopa Polifema", ua: "циклопа Поліфема" } },
        { id: "b", label: { pl: "Penelopę", ua: "Пенелопу" } },
        { id: "c", label: { pl: "Feaka Alkinoosa", ua: "Феака Алкіноя" } }
      ],
      answer: "a",
      hint: { pl: "Jaskinia, wino, imię „Nikt”.", ua: "Печера, вино, ім’я «Ніхто»." },
      explanation: { pl: "Polifem = syn Posejdona.", ua: "Поліфем = син Посейдона." }
    }
  },

  {
    type: "concept",
    heading: { pl: "Zapamiętaj · akcja i wątek", ua: "Zapamiętaj · akcja і wątek" },
    formula: "s. 156  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Dwa ważne słowa do notatki — przeczytaj ramkę.",
      ua: "Два важливі слова до нотатки — прочитай рамку."
    },
    visual: vizGhT72("t72-ramka.png", {
      alt: { pl: "Definicje: akcja i wątek", ua: "Означення: akcja і wątek" },
      place: "after"
    }),
    text: {
      pl: "**Akcja** — ciąg **wszystkich zdarzeń** w utworze, zwykle powiązanych przyczynowo-skutkowo. **Wątek** — dający się wyodrębnić ciąg zdarzeń o **jednym temacie** / bohaterze (np. wątek powrotu do domu). Utwór może być **jednowątkowy** lub **wielowątkowy**. **UA:** *akcja* ≈ дія / сюжетна лінія подій; *wątek* ≈ сюжетна нитка.",
      ua: "**Akcja** — ланцюг **усіх подій**. **Wątek** — окрема лінія подій про **одну тему** / героя. Твір може бути **однонитковим** або **багатонитковим**."
    },
    items: [
      { pl: "Tułaczka Odyseusza: wiele przygód = akcja; np. wątek „powrót do Penelopy”.", ua: "Мандри Одіссея: багато пригод = akcja; напр. wątek «повернення до Пенелопи»." },
      emT72("Akcja = całość · wątek = wybrana nić")
    ],
    task: {
      id: "t72-s03-definicje",
      type: "multiple-choice",
      question: {
        pl: "Co jest prawdą? Zaznacz wszystkie.",
        ua: "Що правда? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "akcja = wszystkie powiązane zdarzenia utworu", ua: "akcja = усі пов’язані події твору" } },
        { id: "b", label: { pl: "wątek = wyodrębniony ciąg zdarzeń (temat / bohater)", ua: "wątek = виокремлений ланцюг подій (тема / герой)" } },
        { id: "c", label: { pl: "wątek i akcja to zawsze to samo słowo bez różnicy", ua: "wątek і akcja — завжди те саме без різниці" } },
        { id: "d", label: { pl: "akcja może składać się z wielu wątków", ua: "akcja може складатися з багатьох wątkів" } }
      ],
      answer: ["a", "b", "d"],
      hint: { pl: "Ramka: jednowątkowy / wielowątkowy.", ua: "Рамка: jednowątkowy / wielowątkowy." },
      explanation: { pl: "A, B, D. C fałsz — to różne pojęcia.", ua: "A, B, D. C хиба — різні поняття." }
    }
  },

  {
    type: "practice",
    heading: { pl: "Zad. 2a · przyczyna → skutek", ua: "Завд. 2a · причина → наслідок" },
    formula: "s. 156  ·  łańcuch",
    promptPlace: "before",
    prompt: {
      pl: "Na podstawie tekstu i mapy zapisz zdarzenia według wzoru (przyczyna / skutek).",
      ua: "На основі тексту й мапи запиши події за зразком (причина / наслідок)."
    },
    visual: vizGhT72("t72-zad2.png", {
      alt: { pl: "Schemat łańcucha: przyczyna – skutek", ua: "Схема ланцюга: причина – наслідок" },
      place: "after"
    }),
    items: [
      { pl: "Wzór w schemacie: burza → naprawa okrętów · wiatr → Lotofagowie · ciekawość → wyspa cyklopów…", ua: "Зразок: буря → ремонт · вітер → Лотофаги · цікавість → циклопи…" },
      { pl: "Dopisz kolejne ogniwa w zeszycie. Klucz — po *Sprawdź*.", ua: "Допиши наступні ланки в зошиті. Ключ — після *Sprawdź*." }
    ],
    task: {
      id: "t72-s04-lancuch",
      type: "multiple-choice",
      question: {
        pl: "Które pary przyczyna → skutek są zgodne ze wzorem / tekstem? Zaznacz wszystkie.",
        ua: "Які пари причина → наслідок відповідають зразку / тексту? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "burza na morzu → naprawa okrętów w przystani", ua: "буря на морі → ремонт кораблів у пристані" } },
        { id: "b", label: { pl: "silny wiatr → przybycie do Lotofagów", ua: "сильний вітер → прибуття до Лотофагів" } },
        { id: "c", label: { pl: "oślepienie Polifema → gniew Posejdona / dalsze burze", ua: "осліплення Поліфема → гнів Посейдона / подальші бурі" } },
        { id: "d", label: { pl: "rozwiązanie miecha → natychmiastowy spokojny powrót bez burzy", ua: "розв’язання міха → миттєве спокійне повернення без бурі" } }
      ],
      answer: ["a", "b", "c"],
      hint: { pl: "Otwarcie miecha = burza, nie spokój.", ua: "Відкриття міха = буря, не спокій." },
      explanation: { pl: "A–C. D przeczy tekstowi — wiatry porywają okręty.", ua: "A–C. D суперечить тексту." }
    }
  },

  {
    type: "practice",
    heading: { pl: "Zad. 2b · zaznacz wątek", ua: "Завд. 2b · познач wątek" },
    formula: "s. 156  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Na schemacie (2a) zaznacz kilka wydarzeń tworzących **jeden wątek** utworu.",
      ua: "На схемі (2a) познач кілька подій, що творять **один wątek** твору."
    },
    items: [
      { pl: "Przykład wątku: „walka o powrót do domu” albo „konflikt z Posejdonem”.", ua: "Приклад: «боротьба за повернення додому» або «конфлікт із Посейдоном»." },
      { pl: "Wątkiem NIE jest przypadkowa lista bez wspólnego tematu.", ua: "Wątkiem НЕ є випадковий список без спільної теми." }
    ],
    task: {
      id: "t72-s05-watek",
      type: "single-choice",
      question: {
        pl: "Który zestaw najlepiej tworzy JEDEN wątek?",
        ua: "Який набір найкраще творить ОДИН wątek?"
      },
      options: [
        { id: "a", label: { pl: "oślepienie Polifema → gniew Posejdona → burze na drodze do Itaki", ua: "осліплення Поліфема → гнів Посейдона → бурі на шляху до Ітаки" } },
        { id: "b", label: { pl: "lotos + syreny + łuk Penelopy bez żadnego wspólnego sensu", ua: "лотос + сирени + лук Пенелопи без спільного сенсу" } },
        { id: "c", label: { pl: "tylko numer strony podręcznika", ua: "лише номер сторінки підручника" } }
      ],
      answer: "a",
      hint: { pl: "Jeden temat: Posejdon / zemsta / droga do domu.", ua: "Одна тема: Посейдон / помста / шлях додому." },
      explanation: { pl: "A = spójny wątek przyczynowo-skutkowy.", ua: "A = цілісний wątek причина–наслідок." }
    }
  },

  {
    type: "practice",
    heading: { pl: "Portret Odyseusza", ua: "Портрет Одіссея" },
    formula: "s. 148–156  ·  bohater",
    promptPlace: "before",
    prompt: {
      pl: "Jakim człowiekiem jest Odyseusz? Cechy + przykłady z tekstu.",
      ua: "Якою людиною є Одіссей? Риси + приклади з тексту."
    },
    items: [
      { pl: "Szukaj: przebiegłość, tęsknota za domem, odwaga, odpowiedzialność za załogę…", ua: "Шукай: хитрість, туга за домом, відвага, відповідальність за команду…" },
      { pl: "Najpierw własna lista — przykłady po *Sprawdź*.", ua: "Спочатку свій список — приклади після *Sprawdź*." }
    ],
    task: {
      id: "t72-s06-bohater",
      type: "multiple-choice",
      question: {
        pl: "Które cechy + przykłady pasują? Zaznacz wszystkie.",
        ua: "Які риси + приклади пасують? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "przebiegły — fortel „Nikt”, wosk i maszt przy syrenach", ua: "хитрий — фортель «Ніхто», віск і щогла біля сирен" } },
        { id: "b", label: { pl: "tęskni za domem — odmawia nieśmiertelności u Kalipso", ua: "тужить за домом — відмовляється від безсмертя в Каліпсо" } },
        { id: "c", label: { pl: "obojętny na los załogi — zawsze zostawia wszystkich bez próby ratunku", ua: "байдужий до команди — завжди всіх кидає без спроби рятувати" } },
        { id: "d", label: { pl: "wytrwały — mimo lat wraca na Itakę", ua: "витривалий — попри роки повертається на Ітаку" } }
      ],
      answer: ["a", "b", "d"],
      hint: { pl: "Ratuje towarzyszy (lotos, świnie u Kirke…).", ua: "Рятує товаришів (лотос, свині в Кірки…)." },
      explanation: { pl: "A, B, D. C przeczy tekstowi.", ua: "A, B, D. C суперечить тексту." }
    }
  },

  {
    type: "practice",
    heading: { pl: "Zad. 3 · list do Penelopy", ua: "Завд. 3 · лист до Пенелопи" },
    formula: "s. 156  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Napisz list Odyseusza do Penelopy — relacja z wybranego etapu podróży.",
      ua: "Напиши лист Одіссея до Пенелопи — реляція з обраного етапу подорожі."
    },
    visual: vizGhT72("t72-zad3.png", {
      alt: { pl: "Kryteria listu Odyseusza do Penelopy", ua: "Критерії листа Одіссея до Пенелопи" },
      place: "after"
    }),
    items: [
      { pl: "Musi być: relacja z wydarzeń · **1. osoba** · nadawca/odbiorca · miejsce i czas · wstęp–rozwinięcie–zakończenie.", ua: "Має бути: реляція · **1 особа** · адресант/адресат · місце й час · вступ–розвиток–закінчення." },
      { pl: "Wybierz JEDEN etap (np. Polifem, syreny, Kalipso, powrót).", ua: "Обери ОДИН етап (напр. Поліфем, сирени, Каліпсо, повернення)." },
      { pl: "UA: plan możesz ułożyć po ukraińsku, list napisz po polsku.", ua: "UA: план можна українською, лист — польською." }
    ],
    task: {
      id: "t72-s07-list",
      type: "open-answer",
      question: {
        pl: "Napisz list (10–16 zdań) od Odyseusza do Penelopy z jednego etapu podróży.",
        ua: "Напиши лист (10–16 речень) від Одіссея до Пенелопи з одного етапу подорожі."
      },
      hint: {
        pl: "Wzór: *Itaka / na morzu, dnia… Penelopo! … Twój Odyseusz*",
        ua: "Зразок: *Itaka / na morzu, dnia… Penelopo! … Twój Odyseusz*"
      },
      explanation: {
        pl: "Ocena: 1. os. · nagłówek/podpis · czas/miejsce · 3 części · fakty z mitu.",
        ua: "Оцінка: 1 ос. · звернення/підпис · час/місце · 3 частини · факти з міфу."
      }
    }
  },

  {
    type: "summary",
    heading: { pl: "Podsumowanie · T71–T72", ua: "Підсумок · T71–T72" },
    formula: "s. 148–156  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Mit + mapa + akcja/wątek + list.",
      ua: "Міф + мапа + akcja/wątek + лист."
    },
    items: [
      { pl: "**Akcja** = wszystkie zdarzenia · **wątek** = wybrana nić (np. powrót do domu).", ua: "**Akcja** = усі події · **wątek** = окрема нитка (напр. повернення додому)." },
      { pl: "Przyczyna–skutek łączy przygody w łańcuch.", ua: "Причина–наслідок єднає пригоди в ланцюг." },
      { pl: "List: 1. os. + kryteria z zad. 3.", ua: "Лист: 1 ос. + критерії з завд. 3." },
      emT72("Gniew Posejdona → długa droga → Itaka")
    ],
    task: {
      id: "t72-s08-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Wątek to wyodrębniony ciąg zdarzeń o jednym temacie/bohaterze; akcja może składać się z wielu wątków.”",
        ua: "Чи твердження правильне? «Wątek — виокремлений ланцюг подій про одну тему/героя; akcja може складатися з багатьох wątkів.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: { pl: "Ramka z lekcji.", ua: "Рамка з уроку." },
      explanation: { pl: "Prawda — definicja z podręcznika.", ua: "Правда — означення з підручника." }
    }
  }
]};
