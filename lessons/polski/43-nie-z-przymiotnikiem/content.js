function emT43(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T43 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT43(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T43 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 78  ·  Lekcja 43  ·  nie z przymiotnikiem",
    promptPlace: "before",
    prompt: {
      pl: "Druga godzina z s. 78. Wczoraj: *stopniowanie*. Dziś tytuł brzmi *Niewygodna i nienajbezpieczniejsza podróż* — i reguła: jak pisać *nie* z przymiotnikami. W zeszycie: ramka + wyjątki + ćwiczenia z Egiptu i komiksu. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга година з с. 78. Учора: *ступенювання*. Сьогодні заголовок *Niewygodna i nienajbezpieczniejsza podróż* — і правило: як писати *nie* з прикметниками. У зошиті: рамка + винятки + вправи з Єгипту і коміксу. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "napiszę *nie* z przymiotnikiem *łącznie* (także z *naj-*: *nienaj…*);", ua: "пишу *nie* з прикметником *разом* (також із *naj-*: *nienaj…*);" },
      { pl: "znam wyjątek po *wcale* / *bynajmniej* → *rozdzielnie*;", ua: "знаю виняток після *wcale* / *bynajmniej* → *окремо*;" },
      { pl: "rozpoznam *przeciwstawienie* (*nie …, ale …*);", ua: "розпізнаю *протиставлення* (*nie …, ale …*);" },
      { pl: "przekształcę zdania tak, by użyć przymiotnika z *nie*;", ua: "перетворю речення так, щоб був прикметник із *nie*;" },
      { pl: "zdecyduję w komiksie: razem czy osobno.", ua: "вирішу в коміксі: разом чи окремо." }
    ],
    task: {
      id: "t43-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Pisać nie z przymiotnikiem łącznie (np. niebezpieczny).", ua: "Писати nie з прикметником разом (напр. niebezpieczny)." } },
        { id: "b", label: { pl: "Znać wyjątki: wcale / bynajmniej oraz przeciwstawienie.", ua: "Знати винятки: wcale / bynajmniej і протиставлення." } },
        { id: "c", label: { pl: "Od nowa uczyć się całej odmiany przymiotnika z lekcji 37.", ua: "Знову вчити всю відміну прикметника з уроку 37." } },
        { id: "d", label: { pl: "Stosować regułę w tekście i wypowiedziach z komiksu.", ua: "Застосовувати правило в тексті і репліках з коміксу." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Odmiana była w T37. Dziś ortografia *nie*.",
        ua: "Відміна була в T37. Сьогодні орфографія *nie*."
      },
      explanation: {
        pl: "Dziś: łącznie + wyjątki + ćwiczenia. Nie wracamy do całej tabeli odmiany.",
        ua: "Сьогодні: разом + винятки + вправи. Не повертаємось до всієї таблиці відміни."
      }
    }
  },
  // 2
  {
    type: "observe",
    heading: { pl: "Tytuł lekcji · już widać regułę", ua: "Заголовок уроку · правило вже видно" },
    formula: "s. 78  ·  niewygodna · nienajbezpieczniejsza",
    promptPlace: "before",
    prompt: {
      pl: "Rozbij tytuł: *nie-wygodna* i *nie-naj-bezpieczniejsza*. Podręcznik pokazuje, że *nie* skleja się z przymiotnikiem — nawet w stopniu najwyższym.",
      ua: "Розбери заголовок: *nie-wygodna* і *nie-naj-bezpieczniejsza*. Підручник показує, що *nie* зливається з прикметником — навіть у найвищому ступені."
    },
    items: [
      { pl: "*niewygodna* = nie + wygodna (równy) → łącznie.", ua: "*niewygodna* = nie + wygodna (звичайний) → разом." },
      { pl: "*nienajbezpieczniejsza* = nie + najbezpieczniejsza → też łącznie!", ua: "*nienajbezpieczniejsza* = nie + najbezpieczniejsza → теж разом!" },
      { pl: "Most UA: *незручна, найнебезпечніша* — часто też razem; pilnuj wyjątków z *зовсім не / аж ніяк не*.", ua: "Міст UA: *незручна, найнебезпечніша* — часто теж разом; стеж за винятками з *зовсім не / аж ніяк не*." },
      { pl: "Pułapka: nie myl z *nie* przy czasowniku (*nie była*) — to inna reguła.", ua: "Пастка: не плутай із *nie* при дієслові (*nie była*) — це інше правило." }
    ],
    task: {
      id: "t43-s02-tytul",
      type: "true-false",
      question: {
        pl: "Czy według podręcznika formę *nienajbezpieczniejsza* piszemy łącznie (jednym wyrazem)?",
        ua: "Чи за підручником форму *nienajbezpieczniejsza* пишемо разом (одним словом)?"
      },
      answer: true,
      hint: {
        pl: "Spójrz na przykłady w ramce: *nienajmocniejszy, nienajwygodniejszy*.",
        ua: "Подивись на приклади в рамці: *nienajmocniejszy, nienajwygodniejszy*."
      },
      explanation: {
        pl: "Tak — łącznie. Osobno będzie po *wcale / bynajmniej* albo przy przeciwstawieniu.",
        ua: "Так — разом. Окремо буде після *wcale / bynajmniej* або при протиставленні."
      }
    }
  },
  // 3
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · nie z przymiotnikami", ua: "Zapamiętaj · nie з прикметниками" },
    formula: "s. 78  ·  ramka podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "Ramka do zeszytu. Złota reguła + wyjątek z *wcale / bynajmniej*.",
      ua: "Рамка в зошит. Золоте правило + виняток із *wcale / bynajmniej*."
    },
    text: {
      pl: "**Nie z przymiotnikami** piszemy **łącznie**, na przykład *niebezpieczny, niewygodny, nienajmocniejszy, nienajwygodniejszy*. **Wyjątek:** jeżeli *nie* stoi po słowach **bynajmniej** lub **wcale**, to przymiotnik z cząstką *nie* piszemy **rozdzielnie**, na przykład: *Wcale nie śmieszny ten żart. Aktor, bynajmniej nie młody, dobrze zagrał młodzieńca.*",
      ua: "**Nie з прикметниками** пишемо **разом**, напр. *niebezpieczny, niewygodny, nienajmocniejszy, nienajwygodniejszy*. **Виняток:** якщо *nie* стоїть після **bynajmniej** або **wcale**, то пишемо **окремо**, напр.: *Wcale nie śmieszny ten żart. Aktor, bynajmniej nie młody…*"
    },
    items: [
      { pl: "Łącznie: *niebezpieczny, niemożliwy, nieludzki, nienajlepszy* (przymiotnik).", ua: "Разом: *niebezpieczny, niemożliwy, nieludzki, nienajlepszy* (прикметник)." },
      { pl: "*wcale nie dobry* · *bynajmniej nie najwyższe* → rozdzielnie.", ua: "*wcale nie dobry* · *bynajmniej nie najwyższe* → окремо." },
      { pl: "Most UA: *зовсім не / аж ніяк не* + прикметник ≈ *wcale / bynajmniej nie*.", ua: "Міст UA: *зовсім не / аж ніяк не* + прикметник ≈ *wcale / bynajmniej nie*." }
    ],
    task: {
      id: "t43-s03-ramka",
      type: "single-choice",
      question: {
        pl: "Który zapis jest poprawny według ramki?",
        ua: "Який запис правильний за рамкою?"
      },
      options: [
        { id: "a", label: { pl: "niebezpieczny (łącznie)", ua: "niebezpieczny (разом)" } },
        { id: "b", label: { pl: "nie bezpieczny (zawsze osobno)", ua: "nie bezpieczny (завжди окремо)" } },
        { id: "c", label: { pl: "nienajmocniejszy zawsze osobno, bo ma naj-", ua: "nienajmocniejszy завжди окремо, бо є naj-" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka podaje *nienajmocniejszy* jako przykład łącznie.",
        ua: "Рамка дає *nienajmocniejszy* як приклад разом."
      },
      explanation: {
        pl: "Zasadniczo łącznie — także z *naj-*. Osobno po *wcale/bynajmniej*.",
        ua: "Зазвичай разом — також із *naj-*. Окремо після *wcale/bynajmniej*."
      }
    }
  },
  // 4
  {
    type: "observe",
    heading: { pl: "Przeciwstawienie · nie …, ale …", ua: "Протиставлення · nie …, ale …" },
    formula: "s. 78  ·  lupa podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "W stopniu *równym* *nie* z przymiotnikiem piszemy rozdzielnie tylko przy *wyraźnym lub domyślnym przeciwstawieniu*.",
      ua: "У *звичайному* ступені *nie* з прикметником пишемо окремо лише при *явному або домислюваному протиставленні*."
    },
    visual: vizGhT43("t43-przeciwstawienie.png", {
      prompt: "Uwaga: przeciwstawienie.",
      alt: {
        pl: "Ramka: To nie dobry dowcip, ale przykre zdarzenie.",
        ua: "Рамка: To nie dobry dowcip, ale przykre zdarzenie."
      }
    }),
    items: [
      { pl: "Przykład: *To **nie** dobry dowcip, **ale** przykre zdarzenie.*", ua: "Приклад: *To **nie** dobry dowcip, **ale** przykre zdarzenie.*" },
      { pl: "Sygnały: *ale, lecz, tylko, a* (przeciwstawienie).", ua: "Сигнали: *ale, lecz, tylko, a* (протиставлення)." },
      { pl: "Bez przeciwstawienia: *niedobry żart* (łącznie) — inna sytuacja.", ua: "Без протиставлення: *niedobry żart* (разом) — інша ситуація." },
      { pl: "Most UA: *Це **не** добрий жарт, **а** прикра подія.*", ua: "Міст UA: *Це **не** добрий жарт, **а** прикра подія.*" }
    ],
    task: {
      id: "t43-s04-ale",
      type: "single-choice",
      question: {
        pl: "Które zdanie wymaga zapisu *rozdzielnego* *nie* + przymiotnik?",
        ua: "Яке речення потребує *окремого* *nie* + прикметник?"
      },
      options: [
        { id: "a", label: { pl: "To nie dobry dowcip, ale przykre zdarzenie.", ua: "To nie dobry dowcip, ale przykre zdarzenie." } },
        { id: "b", label: { pl: "To niebezpieczna podróż po Nilu.", ua: "To niebezpieczna podróż po Nilu." } },
        { id: "c", label: { pl: "Film był niewiarygodny.", ua: "Film był niewiarygodny." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *ale* / przeciwstawienia.",
        ua: "Шукай *ale* / протиставлення."
      },
      explanation: {
        pl: "Tylko (a) ma przeciwstawienie → *nie dobry*. (b)(c) → łącznie.",
        ua: "Лише (a) має протиставлення → *nie dobry*. (b)(c) → разом."
      }
    }
  },
  // 5
  {
    type: "example",
    heading: { pl: "Słownictwo z pól · Egipt i film", ua: "Словництво з полів · Єгипет і фільм" },
    formula: "s. 78  ·  glosy UA",
    promptPlace: "before",
    prompt: {
      pl: "Zanim przerobisz tekst o Starym Państwie i komiks z planu filmowego — szybki słowniczek.",
      ua: "Перш ніж зробиш текст про Старе Царство і комікс із кінозйомок — швидкий словничок."
    },
    text: {
      pl: "zaświaty  ·  honorarium  ·  przewoźnik  ·  bynajmniej  ·  wcale  ·  Duad",
      ua: "засвіти / потойбіччя  ·  гонорар  ·  перевізник  ·  аж ніяк  ·  зовсім  ·  Дуат"
    },
    items: [
      { pl: "**zaświaty** — świat po śmierci; потойбіччя.", ua: "**zaświaty** — потойбіччя." },
      { pl: "**bynajmniej** — аж ніяк (wzmacnia przeczenie).", ua: "**bynajmniej** — аж ніяк (посилює заперечення)." },
      { pl: "**wcale** — зовсім / аж ніяк.", ua: "**wcale** — зовсім / аж ніяк." },
      { pl: "**honorarium** — zapłata za rolę; гонорар.", ua: "**honorarium** — гонорар." },
      { pl: "**przewoźnik** — kto wozi ludzi (tu: po Nilu); перевізник.", ua: "**przewoźnik** — перевізник (тут: Нілом)." }
    ],
    task: {
      id: "t43-s05-glosy",
      type: "single-choice",
      question: {
        pl: "Które słowo NA PEWNO zapowiada zapis *rozdzielny* *nie* + przymiotnik?",
        ua: "Яке слово НАПЕВНО віщує *окремий* запис *nie* + прикметник?"
      },
      options: [
        { id: "a", label: { pl: "wcale / bynajmniej", ua: "wcale / bynajmniej" } },
        { id: "b", label: { pl: "honorarium", ua: "honorarium" } },
        { id: "c", label: { pl: "przewoźnik", ua: "przewoźnik" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: wyjątek po dwóch słowach wzmacniających.",
        ua: "Рамка: виняток після двох підсилювальних слів."
      },
      explanation: {
        pl: "*wcale* i *bynajmniej* → rozdzielnie. Reszta to słownictwo fabularne.",
        ua: "*wcale* і *bynajmniej* → окремо. Решта — сюжетна лексика."
      }
    }
  },
  // 6
  {
    type: "practice",
    heading: { pl: "Stare Państwo · przekształć", ua: "Старе Царство · перетвори" },
    formula: "s. 78  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Fragmenty w nawiasach przekształć tak, by użyć *przymiotnika z nie* (łącznie). W zeszycie przepisz cały akapit.",
      ua: "Уривки в дужках перетвори так, щоб був *прикметник із nie* (разом). У зошиті перепиши весь абзац."
    },
    items: [
      { pl: "*(nie była łatwa)* → *była niełatwa* / *niełatwa*.", ua: "*(nie była łatwa)* → *była niełatwa* / *niełatwa*." },
      { pl: "*(Łatwiejszego zadania nie miał)* → *Niełatwiejszego zadania nie miał*.", ua: "*(Łatwiejszego zadania nie miał)* → *Niełatwiejszego zadania nie miał*." },
      { pl: "*(linia brzegowa nie była równa)* → *linia … była nierówna*.", ua: "*(linia brzegowa nie była równa)* → *linia … była nierówna*." },
      { pl: "*(nie czekało go łatwiejsze życie)* → *czekało go niełatwiejsze życie*.", ua: "*(nie czekało go łatwiejsze życie)* → *czekało go niełatwiejsze życie*." },
      { pl: "Glosa: *Stare Państwo* = Старе Царство (Єгипет); *linia brzegowa* = берегова лінія.", ua: "Глоса: *Stare Państwo* = Старе Царство; *linia brzegowa* = берегова лінія." }
    ],
    task: {
      id: "t43-s06-przeksztalc",
      type: "multiple-choice",
      question: {
        pl: "Które przekształcenia są NA PEWNO poprawne? Zaznacz wszystkie pewne.",
        ua: "Які перетворення НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "nie była łatwa → niełatwa", ua: "nie była łatwa → niełatwa" } },
        { id: "b", label: { pl: "nie była równa → nierówna", ua: "nie była równa → nierówna" } },
        { id: "c", label: { pl: "nie była łatwa → nie łatwa (zawsze osobno)", ua: "nie była łatwa → nie łatwa (завжди окремо)" } },
        { id: "d", label: { pl: "nie … łatwiejsze życie → niełatwiejsze życie", ua: "nie … łatwiejsze życie → niełatwiejsze życie" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Cel: przymiotnik z cząstką *nie* — jeden wyraz.",
        ua: "Мета: прикметник із часткою *nie* — одне слово."
      },
      explanation: {
        pl: "*niełatwa, nierówna, niełatwiejsze* — łącznie. Osobno tylko przy wyjątkach z ramki.",
        ua: "*niełatwa, nierówna, niełatwiejsze* — разом. Окремо лише при винятках із рамки."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Komiks · razem czy osobno", ua: "Комікс · разом чи окремо" },
    formula: "s. 78  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Powiedz, jak zapisać *nie* w wypowiedziach. Najpierw sprawdź: czy przed *nie* stoi *wcale* / *bynajmniej*? Czy to przymiotnik?",
      ua: "Скажи, як записати *nie* в репліках. Спочатку перевір: чи перед *nie* стоїть *wcale* / *bynajmniej*? Чи це прикметник?"
    },
    visual: vizGhT43("t43-komiks-nil.jpg", {
      prompt: "Komiks z planu filmowego nad Nilem.",
      alt: {
        pl: "Reżyser, asystent, turysta i przewoźnik — sceny «niebezpieczne».",
        ua: "Режисер, асистент, турист і перевізник — «небезпечні» сцени."
      }
    }),
    items: [
      { pl: "Łącznie: *niebezpieczne, nieodpowiedzialne, niewiarygodne, nierówna, niemożliwe, nieatrakcyjni, nieludzkie, niezwykłym*.", ua: "Разом: *niebezpieczne, nieodpowiedzialne, niewiarygodne, nierówna, niemożliwe, nieatrakcyjni, nieludzkie, niezwykłym*." },
      { pl: "Rozdzielnie: *wcale nie dobry* · *bynajmniej nie najwyższe*.", ua: "Окремо: *wcale nie dobry* · *bynajmniej nie najwyższe*." },
      { pl: "Uwaga: *najlepiej* to często *przysłówek* — dziś ćwiczysz głównie *przymiotniki*.", ua: "Увага: *najlepiej* часто *прислівник* — сьогодні тренуєш переважно *прикметники*." }
    ],
    task: {
      id: "t43-s07-komiks",
      type: "multiple-choice",
      question: {
        pl: "Które decyzje ortograficzne są NA PEWNO poprawne? Zaznacz wszystkie pewne.",
        ua: "Які орфографічні рішення НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "niebezpieczne sceny (łącznie)", ua: "niebezpieczne sceny (разом)" } },
        { id: "b", label: { pl: "wcale nie dobry moment (rozdzielnie)", ua: "wcale nie dobry moment (окремо)" } },
        { id: "c", label: { pl: "bynajmniej nie najwyższe honorarium (rozdzielnie)", ua: "bynajmniej nie najwyższe honorarium (окремо)" } },
        { id: "d", label: { pl: "nie bezpieczne bandyci (zawsze osobno, bo groźnie)", ua: "nie bezpieczne bandyci (завжди окремо, бо страшно)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Bez *wcale/bynajmniej* przymiotnik z *nie* → łącznie. *niebezpieczni bandyci*.",
        ua: "Без *wcale/bynajmniej* прикметник із *nie* → разом. *niebezpieczni bandyci*."
      },
      explanation: {
        pl: "a, b, c poprawne. d błędne: powinno być *niebezpieczni*.",
        ua: "a, b, c правильні. d хибне: має бути *niebezpieczni*."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Szybki test · razem / osobno", ua: "Швидкий тест · разом / окремо" },
    formula: "s. 78  ·  mieszanka",
    promptPlace: "before",
    prompt: {
      pl: "Na koniec — trzy pułapki obok siebie. Wybierz poprawny zapis.",
      ua: "На кінець — три пастки поруч. Вибери правильний запис."
    },
    items: [
      { pl: "1) podróż *niewygodna*", ua: "1) podróż *niewygodna*" },
      { pl: "2) *wcale nie śmieszny* żart", ua: "2) *wcale nie śmieszny* żart" },
      { pl: "3) *To nie dobry plan, ale zły pomysł.*", ua: "3) *To nie dobry plan, ale zły pomysł.*" }
    ],
    task: {
      id: "t43-s08-mix",
      type: "single-choice",
      question: {
        pl: "Który zestaw ma WSZYSTKIE trzy zapisy poprawne?",
        ua: "Який набір має УСІ три записи правильні?"
      },
      options: [
        { id: "a", label: { pl: "niewygodna · wcale nie śmieszny · nie dobry … ale", ua: "niewygodna · wcale nie śmieszny · nie dobry … ale" } },
        { id: "b", label: { pl: "nie wygodna · wcalenieśmieszny · niedobry … ale", ua: "nie wygodna · wcalenieśmieszny · niedobry … ale" } },
        { id: "c", label: { pl: "niewygodna · wcalenie śmieszny · niebezpieczny … ale", ua: "niewygodna · wcalenie śmieszny · niebezpieczny … ale" } }
      ],
      answer: "a",
      hint: {
        pl: "Zwykle łącznie; *wcale* → osobno; *ale* → przeciwstawienie osobno.",
        ua: "Зазвичай разом; *wcale* → окремо; *ale* → протиставлення окремо."
      },
      explanation: {
        pl: "Trzy reguły naraz: łącznie / wcale / przeciwstawienie.",
        ua: "Три правила разом: разом / wcale / протиставлення."
      }
    }
  },
  // 9
  {
    type: "summary",
    heading: { pl: "Podsumowanie · s. 78 domknięta", ua: "Підсумок · с. 78 закрита" },
    formula: "T42 + T43  ·  co umiem",
    promptPlace: "before",
    prompt: {
      pl: "Dwie godziny, jedna strona. W zeszycie powinny być: tabela stopni + ramka *nie* + wyjątki.",
      ua: "Дві години, одна сторінка. У зошиті мають бути: таблиця ступенів + рамка *nie* + винятки."
    },
    items: [
      { pl: "T42: stopnie i sposoby stopniowania.", ua: "T42: ступені і способи ступенювання." },
      { pl: "T43: *nie* łącznie; wyjątki *wcale/bynajmniej*; przeciwstawienie.", ua: "T43: *nie* разом; винятки *wcale/bynajmniej*; протиставлення." },
      { pl: "Tytuł-klucz: *niewygodna* · *nienajbezpieczniejsza*.", ua: "Ключ-заголовок: *niewygodna* · *nienajbezpieczniejsza*." },
      { pl: "Dalej w podręczniku: artykuł / relacja (T44) — inna umiejętność.", ua: "Далі в підручнику: artykuł / relacja (T44) — інша навичка." }
    ],
    task: {
      id: "t43-s09-koniec",
      type: "true-false",
      question: {
        pl: "Czy po T42–T43 umiesz zarówno tworzyć stopnie przymiotnika, jak i poprawnie pisać nie z przymiotnikiem?",
        ua: "Чи після T42–T43 вмієш і утворювати ступені прикметника, і правильно писати nie з прикметником?"
      },
      answer: true,
      hint: {
        pl: "To był cel obu godzin z s. 78.",
        ua: "Це була мета обох годин із с. 78."
      },
      explanation: {
        pl: "Tak — T42 = stopniowanie, T43 = pisownia nie. Razem zamykają s. 78.",
        ua: "Так — T42 = ступенювання, T43 = написання nie. Разом закривають с. 78."
      }
    }
  }
]};
