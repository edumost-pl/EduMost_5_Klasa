function emT30(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T30 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT30(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T30 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 61  ·  Lekcja 30  ·  N Ms W  ·  e-mail",
    promptPlace: "before",
    prompt: {
      pl: "To sprawdzian na koniec. Polski pierwszy. Włącz 🇺🇦. Wczorajsze M D C B *nie* tłumaczymy od nowa — na rozgrzewce *użyjesz* ich w zdaniach Wiktora. Dziś nowe: *Narzędnik, Miejscownik, Wołacz*, tabela *piasek*, zad. 1–3. *Nie* z rzeczownikami — lekcja 31.",
      ua: "Це перевірка наприкінці. Польська перша. Увімкни 🇺🇦. Вчорашні M D C B *не* пояснюємо знову — на розминці *використаєш* їх у реченнях Віктора. Сьогодні нове: *Narzędnik, Miejscownik, Wołacz*, таблиця *piasek*, завд. 1–3. *Nie* з іменниками — урок 31."
    },
    items: [
      { pl: "dobiorę pytania do *Narzędnika, Miejscownika, Wołacza*;", ua: "підберу питання до *орудного, місцевого, кличного*;" },
      { pl: "odczytam tabelę *piasek* w lp. i lm.;", ua: "прочитаю таблицю *piasek* в однині і множині;" },
      { pl: "wstawię rzeczowniki w e-mail Wiktora (zad. 1);", ua: "вставлю іменники в e-mail Віктора (завд. 1);" },
      { pl: "określę przypadek, liczbę i rodzaj (zad. 2) i odmienię *pamiątka* (zad. 3).", ua: "визначу відмінок, число і рід (завд. 2) і відміню *pamiątka* (завд. 3)." }
    ],
    task: {
      id: "t30-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Pytania: (z) kim? czym?  ·  (o) kim? czym?  ·  o!", ua: "Питання: (z) kim? czym?  ·  (o) kim? czym?  ·  o!" } },
        { id: "b", label: { pl: "Wstawić formy z banku do e-maila Wiktora.", ua: "Вставити форми з банку в e-mail Віктора." } },
        { id: "c", label: { pl: "Napisać dyktando nie z rzeczownikami.", ua: "Написати диктант nie з іменниками." } },
        { id: "d", label: { pl: "Odmienić pamiątka i powiedzieć, która część się zmienia.", ua: "Відмінити pamiątka і сказати, яка частина змінюється." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "nie z rzeczownikami — s. 63, lekcja 31.",
        ua: "nie з іменниками — с. 63, урок 31."
      },
      explanation: {
        pl: "Dziś: rozgrzewka na zdaniach, trzy nowe przypadki, tabela, e-mail, pamiątka. Nie — 31.",
        ua: "Сьогодні: розминка на реченнях, три нові відмінки, таблиця, e-mail, pamiątka. Nie — 31."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · wczorajsze 4 w nowym zdaniu", ua: "Розминка · вчорашні 4 в новому реченні" },
    formula: "powtórka  ·  inne zadanie niż lekcja 29",
    promptPlace: "before",
    prompt: {
      pl: "To *nie* druga kopia lekcji 29 i nie obrazek z piaskiem. Definicji nie powtarzamy. Wczoraj: pytania *M D C B*. Dziś te same pytania, ale na *zdaniach z e-maila Wiktora*. Banku jeszcze *nie* wstawiamy — tylko rozpoznajesz przypadek. Potem dokładamy trzy *nowe*.",
      ua: "Це *не* друга копія уроку 29 і не малюнок із піском. Визначень не повторюємо. Учора: питання *M D C B*. Сьогодні ті самі питання, але на *реченнях з e-mail Віктора*. Банк ще *не* вставляємо — лише впізнаєш відмінок. Потім додамо три *нові*."
    },
    items: [
      { pl: "*Widziałem burzę.* (co?) → *biernik* (nie: *burza*).", ua: "*Widziałem burzę.* (co?) → *знахідний* (не: *burza*)." },
      { pl: "*Nie było ludzi.* (kogo?) → *dopełniacz* (po *nie było*).", ua: "*Nie było ludzi.* (kogo?) → *родовий* (після *nie było*)." },
      { pl: "*Nie dziwiłem się handlarzom.* (komu?) → *celownik*.", ua: "*Nie dziwiłem się handlarzom.* (komu?) → *давальний*." },
      { pl: "*Po Nilu nie pływały statki.* (co?) → *mianownik* lm.", ua: "*Po Nilu nie pływały statki.* (co?) → *називний* множини." }
    ],
    task: {
      id: "t30-s01b-rozgrzewka",
      type: "multiple-choice",
      question: {
        pl: "Które rozpoznania NA PEWNO są poprawne? Zaznacz wszystkie pewne.",
        ua: "Які розпізнання НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "burzę — biernik", ua: "burzę — знахідний" } },
        { id: "b", label: { pl: "ludzi — dopełniacz", ua: "ludzi — родовий" } },
        { id: "c", label: { pl: "handlarzom — mianownik", ua: "handlarzom — називний" } },
        { id: "d", label: { pl: "statki — mianownik lm.", ua: "statki — називний множини" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "handlarzom: pytanie w liście to komu? To nie mianownik.",
        ua: "handlarzom: питання в листі — komu? Це не називний."
      },
      explanation: {
        pl: "*burzę* = B, *ludzi* = D, *statki* = M lm. *handlarzom* = celownik, nie mianownik. Teraz nowe trzy przypadki.",
        ua: "*burzę* = знахідний, *ludzi* = родовий, *statki* = називний множини. *handlarzom* = давальний, не називний. Тепер три нові відмінки."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Narzędnik · (z) kim? (z) czym?", ua: "Орудний · (z) kim? (z) czym?" },
    formula: "s. 61",
    promptPlace: "before",
    prompt: {
      pl: "Narzędnik to *z kim idziesz* i *czym robisz*. Pytania: *(z) kim? (z) czym?* Most: український *орудний* — *ким? чим?* Często stoi przyimek *z / ze*. Końcówki polskie: *piaskiem, piaskami* — nie *піском*.",
      ua: "Орудний — *з ким ідеш* і *чим робиш*. Питання: *(z) kim? (z) czym?* Міст: український *орудний* — *ким? чим?* Часто стоїть прийменник *z / ze*. Закінчення польські: *piaskiem, piaskami* — не *піском*."
    },
    visual: vizGhT30("t30-narzednik.png", {
      prompt: "Dziecko sypie piasek do wiaderka. Etykieta: z kim? z czym?",
      alt: { pl: "Dziecko sypie piasek. Pytanie: z kim? z czym?", ua: "Дитина сипле пісок. Питання: z kim? z czym?" }
    }),
    items: [
      { pl: "Bawię się (z czym?) *piaskiem*.", ua: "Граюсь (чим?) *piaskiem*." },
      { pl: "Idę (z kim?) *kolegą*.", ua: "Іду (з ким?) *kolegą*." },
      { pl: "nad (czym?) *Kanałem* Sueskim — to też narzędnik (e-mail Wiktora).", ua: "над (чим?) *Kanałem* Sueskim — теж орудний (e-mail Віктора)." }
    ],
    task: {
      id: "t30-s02-narzednik",
      type: "single-choice",
      question: {
        pl: "Nad (czym?) Kanałem Sueskim. Jaki to przypadek?",
        ua: "Nad (czym?) Kanałem Sueskim. Який це відмінок?"
      },
      options: [
        { id: "a", label: { pl: "Biernik (kogo? co?)", ua: "Знахідний (kogo? co?)" } },
        { id: "b", label: { pl: "Narzędnik ((z) kim? czym?)", ua: "Орудний ((z) kim? czym?)" } },
        { id: "c", label: { pl: "Mianownik (kto? co?)", ua: "Називний (kto? co?)" } }
      ],
      answer: "b",
      hint: {
        pl: "Pytanie w nawiasie podręcznika: czym?",
        ua: "Питання в дужках підручника: czym?"
      },
      explanation: {
        pl: "*Kanałem* = narzędnik lp. Przyimek *nad* + narzędnik. Nie myl z biernikiem *Kanał*.",
        ua: "*Kanałem* = орудний однини. Прийменник *nad* + орудний. Не плутай зі знахідним *Kanał*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Miejscownik · (o) kim? (o) czym?", ua: "Місцевий · (o) kim? (o) czym?" },
    formula: "s. 61  ·  zawsze z przyimkiem",
    promptPlace: "before",
    prompt: {
      pl: "Miejscownik *nigdy nie stoi sam*. Zawsze ma przyimek: *o, na, w, przy, po…* Pytania szkolne: *(o) kim? (o) czym?* Most: *місцевий*. Pułapka: po ukraińsku często pytamy *на кому? на чому? / у кому? у чому?* — w polskim klasie uczymy pytań z *o*.",
      ua: "Місцевий *ніколи не стоїть сам*. Завжди має прийменник: *o, na, w, przy, po…* Шкільні питання: *(o) kim? (o) czym?* Міст: *місцевий*. Пастка: українською часто питаємо *на кому? на чому?* — у польському класі вчимо питання з *o*."
    },
    visual: vizGhT30("t30-miejscownik.png", {
      prompt: "Dwoje dzieci rozmawia o misce piasku. Etykieta: o kim? o czym?",
      alt: { pl: "Dzieci mówią o piasku. Pytanie: o kim? o czym?", ua: "Діти говорять про пісок. Питання: o kim? o czym?" }
    }),
    items: [
      { pl: "Mówimy (o czym?) *o piasku*.", ua: "Говоримо (про що?) *o piasku*." },
      { pl: "schować się (w czym?) *w hotelu*.", ua: "сховатися (в чому?) *w hotelu*." },
      { pl: "Na (czym?) *ulicach* nie było ludzi.", ua: "На (чому?) *ulicach* не було людей." }
    ],
    task: {
      id: "t30-s03-miejscownik",
      type: "true-false",
      question: {
        pl: "Miejscownik w polskim może stać bez przyimka, np. samo *hotelu*. Prawda czy fałsz?",
        ua: "Місцевий у польській може стояти без прийменника, наприклад саме *hotelu*. Правда чи ні?"
      },
      answer: false,
      hint: {
        pl: "Zawsze: w hotelu, o hotelu, przy hotelu…",
        ua: "Завжди: w hotelu, o hotelu, przy hotelu…"
      },
      explanation: {
        pl: "Fałsz. Miejscownik = przyimek + forma. *w hotelu*, *na ulicach*, *o piasku*.",
        ua: "Ні. Місцевий = прийменник + форма. *w hotelu*, *на ulicach*, *o piasku*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Wołacz · o!", ua: "Кличний · o!" },
    formula: "s. 61",
    promptPlace: "before",
    prompt: {
      pl: "Wołacz to *wołanie*. Pytanie szkolne: *o!* Most: *кличний* (мамо! друже!). W e-mailu: *Cześć Wam!* — to pozdrowienie, nie pełna odmiana. W tabeli *piasek*: *piasku!* (lp.), *piaski!* (lm.). Często wołacz = mianownik, ale nie zawsze (*kolega* → *kolego!*).",
      ua: "Кличний — *звертання*. Шкільне питання: *o!* Міст: *кличний* (мамо! друже!). В e-mail: *Cześć Wam!* — привітання, не повна відміна. У таблиці *piasek*: *piasku!* (однина), *piaski!* (множина). Часто кличний = називний, але не завжди (*kolega* → *kolego!*)."
    },
    visual: vizGhT30("t30-wolacz.png", {
      prompt: "Dziecko woła do zamku z piasku. Etykieta: o!",
      alt: { pl: "Dziecko woła. Pytanie szkolne: o!", ua: "Дитина кличе. Шкільне питання: o!" }
    }),
    items: [
      { pl: "*Kolego!* Chodź tu. (wołacz ≠ mianownik *kolega*)", ua: "*Kolego!* Ходи сюди. (кличний ≠ називний *kolega*)" },
      { pl: "*Mamo!* (jak ukraińskie *мамо!*)", ua: "*Mamo!* (як українське *мамо!*)" },
      { pl: "W tabeli: *piasku!* — rzadkie, ale w podręczniku jest.", ua: "У таблиці: *piasku!* — рідко, але в підручнику є." }
    ],
    task: {
      id: "t30-s04-wolacz",
      type: "single-choice",
      question: {
        pl: "Forma *kolego!* to który przypadek?",
        ua: "Форма *kolego!* — який відмінок?"
      },
      options: [
        { id: "a", label: { pl: "Mianownik", ua: "Називний" } },
        { id: "b", label: { pl: "Wołacz", ua: "Кличний" } },
        { id: "c", label: { pl: "Celownik", ua: "Давальний" } }
      ],
      answer: "b",
      hint: {
        pl: "Wykrzyknik i wołanie osoby.",
        ua: "Вигук і звертання до особи."
      },
      explanation: {
        pl: "*kolego!* = wołacz. Mianownik: *kolega*. Celownik: *koledze*.",
        ua: "*kolego!* = кличний. Називний: *kolega*. Давальний: *koledze*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Tabela · piasek", ua: "Таблиця · piasek" },
    formula: "s. 61  ·  lp. i lm.",
    promptPlace: "before",
    prompt: {
      pl: "To serce lekcji. Jeden rzeczownik, *dwie kolumny*, *siedem pytań*. Obrazek pomaga zobaczyć układ — *dokładne formy* masz w liście (na infografice bywają literówki). Przeczytaj na głos lp., potem lm.",
      ua: "Це серце уроку. Один іменник, *дві колонки*, *сім питань*. Малюнок показує уклад — *точні форми* в списку (на інфографіці інколи є друкарські помилки). Прочитай вголос однину, потім множину."
    },
    visual: vizGhT30("t30-tabela.png", {
      prompt: "Tabela odmiany: piasek w liczbie pojedynczej i mnogiej.",
      alt: { pl: "Tabela odmiany rzeczownika piasek.", ua: "Таблиця відмінювання іменника piasek." }
    }),
    items: [
      { pl: "lp. M *piasek*  ·  D *piasku*  ·  C *piaskowi*  ·  B *piasek*  ·  N *(z) piaskiem*  ·  Ms *(o) piasku*  ·  W *piasku!*", ua: "однина: M piasek · D piasku · C piaskowi · B piasek · N piaskiem · Ms piasku · W piasku!" },
      { pl: "lm. M *piaski*  ·  D *piasków*  ·  C *piaskom*  ·  B *piaski*  ·  N *(z) piaskami*  ·  Ms *(o) piaskach*  ·  W *piaski!*", ua: "множина: M piaski · D piasków · C piaskom · B piaski · N piaskami · Ms piaskach · W piaski!" },
      { pl: "Zauważ: B lp. = M lp. (*piasek*), bo męski nieżywotny.", ua: "Зауваж: B однини = M однини (*piasek*), бо чоловічий неістота." }
    ],
    task: {
      id: "t30-s05-tabela",
      type: "single-choice",
      question: {
        pl: "Jaka jest forma narzędnika liczby mnogiej wyrazu *piasek*?",
        ua: "Яка форма орудного множини слова *piasek*?"
      },
      options: [
        { id: "a", label: { pl: "(z) piaskiem", ua: "(z) piaskiem" } },
        { id: "b", label: { pl: "(z) piaskami", ua: "(z) piaskami" } },
        { id: "c", label: { pl: "(o) piaskach", ua: "(o) piaskach" } }
      ],
      answer: "b",
      hint: {
        pl: "lm. + pytanie (z) czym?",
        ua: "множина + питання (z) czym?"
      },
      explanation: {
        pl: "N lm. = *piaskami*. *piaskiem* to N lp. *piaskach* to Ms lm.",
        ua: "Орудний множини = *piaskami*. *piaskiem* — орудний однини. *piaskach* — місцевий множини."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1 · e-mail Wiktora (1)", ua: "Завд. 1 · e-mail Віктора (1)" },
    formula: "s. 60  ·  bank form",
    promptPlace: "before",
    prompt: {
      pl: "Wiktor pisze z Egiptu. Wstaw rzeczowniki z banku. Pytania w nawiasie *pomagają* — to te same pytania przypadków. Bank: *Kanałem · handlarzom · ludzi · plusy · hotelu · statki · ulicach · wiatr · burzę*.",
      ua: "Віктор пише з Єгипту. Встав іменники з банку. Питання в дужках *допомагають* — це ті самі питання відмінків. Банк: *Kanałem · handlarzom · ludzi · plusy · hotelu · statki · ulicach · wiatr · burzę*."
    },
    visual: vizGhT30("t30-email.png", {
      prompt: "Chłopiec pisze e-mail Egipt na laptopie.",
      alt: { pl: "Wiktor pisze e-mail z Egiptu.", ua: "Віктор пише e-mail з Єгипту." }
    }),
    text: {
      pl: [
        "Cześć Wam!",
        "W Egipcie widziałem prawdziwą (co?) … piaskową! Właśnie gdy pisałem do Was ostatniego e-maila, zaczął wiać (co?) … . Ale wtedy jeszcze nie sądziłem, że zobaczę piaskową zamieć nad (czym?) … Sueskim.",
        "Nic nie było widać. Po Nilu nie pływały (co?) … ."
      ],
      ua: [
        "Привіт вам!",
        "В Єгипті я бачив справжню (co?) … піщану! Саме коли писав вам останнього e-mail, почав віяти (co?) … . Але тоді я ще не думав, що побачу піщану завірюху над (czym?) … Суецьким.",
        "Нічого не було видно. Нілом не плавали (co?) … ."
      ]
    },
    task: {
      id: "t30-s06-email-a",
      type: "multiple-choice",
      question: {
        pl: "Które wstawienia NA PEWNO pasują do tej części listu? Zaznacz wszystkie pewne.",
        ua: "Які вставки НАПЕВНО пасують до цієї частини листа? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "widziałem prawdziwą burzę piaskową", ua: "widziałem prawdziwą burzę piaskową" } },
        { id: "b", label: { pl: "zaczął wiać wiatr", ua: "zaczął wiać wiatr" } },
        { id: "c", label: { pl: "nad Kanałem Sueskim", ua: "nad Kanałem Sueskim" } },
        { id: "d", label: { pl: "Po Nilu nie pływały statki", ua: "Po Nilu nie pływały statki" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "Pytania: co? co? czym? co? Formy z banku, nie z głowy.",
        ua: "Питання: co? co? czym? co? Форми з банку, не з голови."
      },
      explanation: {
        pl: "*burzę* (B ż.), *wiatr* (B = M), *Kanałem* (N), *statki* (M lm.). Wszystkie cztery są w banku.",
        ua: "*burzę* (знахідний ж.), *wiatr* (B = M), *Kanałem* (орудний), *statki* (називний множини). Усі чотири є в банку."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1 · e-mail Wiktora (2)", ua: "Завд. 1 · e-mail Віктора (2)" },
    formula: "s. 60",
    promptPlace: "before",
    prompt: {
      pl: "Dalszy ciąg listu. Znowu: najpierw *pytanie w nawiasie*, potem forma z banku.",
      ua: "Продовження листа. Знову: спочатку *питання в дужках*, потім форма з банку."
    },
    text: {
      pl: [
        "Na (czym?) … nie było (kogo?) … . Nie dziwiłem się ulicznym (komu?) … , którzy pospiesznie składali swoje kramy z pamiątkami.",
        "Ja też musiałem się schować w (czym?) … , bo z powodu unoszącego się piasku nie można było oddychać. Jednak nawet burza piaskowa ma swoje (co?) … . Nareszcie zrobiło się chłodniej.",
        "Przesyłam pozdrowienia — Wiktor"
      ],
      ua: [
        "На (czym?) … не було (kogo?) … . Я не дивувався вуличним (komu?) … , які поспіхом згортали свої лотки з сувенірами.",
        "Я теж мусив сховатися в (czym?) … , бо через пісок не можна було дихати. Однак навіть піщана буря має свої (co?) … . Нарешті стало прохолодніше.",
        "Передаю вітання — Віктор"
      ]
    },
    items: [
      { pl: "Na *ulicach* (Ms lm.) nie było *ludzi* (D lm.).", ua: "На *ulicach* (місцевий множини) не було *ludzi* (родовий множини)." },
      { pl: "ulicznym *handlarzom* (C lm.).", ua: "вуличним *handlarzom* (давальний множини)." },
      { pl: "w *hotelu* (Ms lp.). swoje *plusy* (B lm.).", ua: "в *hotelu* (місцевий однини). свої *plusy* (знахідний множини)." }
    ],
    task: {
      id: "t30-s07-email-b",
      type: "multiple-choice",
      question: {
        pl: "Które wstawienia NA PEWNO pasują? Zaznacz wszystkie pewne.",
        ua: "Які вставки НАПЕВНО пасують? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Na ulicach nie było ludzi", ua: "Na ulicach nie było ludzi" } },
        { id: "b", label: { pl: "Nie dziwiłem się ulicznym handlarzom", ua: "Nie dziwiłem się ulicznym handlarzom" } },
        { id: "c", label: { pl: "schować się w hotelu", ua: "schować się w hotelu" } },
        { id: "d", label: { pl: "burza ma swoje plusy", ua: "burza ma swoje plusy" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "czym? kogo? komu? czym? co?",
        ua: "czym? kogo? komu? czym? co?"
      },
      explanation: {
        pl: "Klucz podręcznika: *ulicach, ludzi, handlarzom, hotelu, plusy*.",
        ua: "Ключ підручника: *ulicach, ludzi, handlarzom, hotelu, plusy*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 2 · forma gramatyczna", ua: "Завд. 2 · граматична форма" },
    formula: "s. 61",
    promptPlace: "before",
    prompt: {
      pl: "Dla rzeczowników z zad. 1 podaj: *przypadek + liczbę + rodzaj*. Rodzaj bierz z *mianownika lp.* (*ten / ta / to*), nie z formy w zdaniu.",
      ua: "Для іменників із завд. 1 подай: *відмінок + число + рід*. Рід бери з *називного однини* (*ten / ta / to*), не з форми в реченні."
    },
    items: [
      { pl: "*burzę* — B, lp., r.ż. (*ta burza*)", ua: "*burzę* — знахідний, однина, ж. (*ta burza*)" },
      { pl: "*wiatr* — B, lp., r.m. (*ten wiatr*)", ua: "*wiatr* — знахідний, однина, ч. (*ten wiatr*)" },
      { pl: "*Kanałem* — N, lp., r.m. (*ten kanał*)", ua: "*Kanałem* — орудний, однина, ч. (*ten kanał*)" },
      { pl: "*statki* — M, lm., r.m. (*ten statek*)", ua: "*statki* — називний, множина, ч. (*ten statek*)" },
      { pl: "*ulicach* — Ms, lm., r.ż. (*ta ulica*)", ua: "*ulicach* — місцевий, множина, ж. (*ta ulica*)" },
      { pl: "*ludzi* — D, lm., r.m. (*ten człowiek / ludzie*)", ua: "*ludzi* — родовий, множина, ч." },
      { pl: "*handlarzom* — C, lm., r.m. (*ten handlarz*)", ua: "*handlarzom* — давальний, множина, ч. (*ten handlarz*)" },
      { pl: "*hotelu* — Ms, lp., r.m. (*ten hotel*)", ua: "*hotelu* — місцевий, однина, ч. (*ten hotel*)" },
      { pl: "*plusy* — B, lm., r.m. (*ten plus*)", ua: "*plusy* — знахідний, множина, ч. (*ten plus*)" }
    ],
    task: {
      id: "t30-s08-forma",
      type: "single-choice",
      question: {
        pl: "Jaka jest forma gramatyczna wyrazu *handlarzom* z e-maila?",
        ua: "Яка граматична форма слова *handlarzom* з e-mail?"
      },
      options: [
        { id: "a", label: { pl: "celownik, liczba mnoga, rodzaj męski", ua: "давальний, множина, чоловічий рід" } },
        { id: "b", label: { pl: "mianownik, liczba pojedyncza, rodzaj męski", ua: "називний, однина, чоловічий рід" } },
        { id: "c", label: { pl: "biernik, liczba mnoga, rodzaj żeński", ua: "знахідний, множина, жіночий рід" } }
      ],
      answer: "a",
      hint: {
        pl: "Pytanie w liście: komu?",
        ua: "Питання в листі: komu?"
      },
      explanation: {
        pl: "*handlarzom* = C lm. r.m. Hasło: *ten handlarz*.",
        ua: "*handlarzom* = давальний множини, ч.р. Словник: *ten handlarz*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 3 · pamiątka", ua: "Завд. 3 · pamiątka" },
    formula: "s. 61",
    promptPlace: "before",
    prompt: {
      pl: "Odmień przez przypadki i liczby wyraz *pamiątka*. Potem: czym różnią się formy? Która część stoi, a która się zmienia? (To już *temat i końcówka* — jutro narysujemy to na *burza*.)",
      ua: "Відміни через відмінки і числа слово *pamiątka*. Потім: чим різняться форми? Яка частина стоїть, а яка змінюється? (Це вже *основа і закінчення* — завтра намалюємо це на *burza*.)"
    },
    items: [
      { pl: "lp. M *pamiątka*  D *pamiątki*  C *pamiątce*  B *pamiątkę*  N *pamiątką*  Ms *pamiątce*  W *pamiątko!*", ua: "однина: pamiątka, pamiątki, pamiątce, pamiątkę, pamiątką, pamiątce, pamiątko!" },
      { pl: "lm. M *pamiątki*  D *pamiątek*  C *pamiątkom*  B *pamiątki*  N *pamiątkami*  Ms *pamiątkach*  W *pamiątki!*", ua: "множина: pamiątki, pamiątek, pamiątkom, pamiątki, pamiątkami, pamiątkach, pamiątki!" },
      { pl: "Widać kawałek stały *pamiątk-* i kawałek, który skacze: *-a, -i, -e, -ę, -ą…* W *pamiątce* k → c.", ua: "Видно сталий шматок *pamiątk-* і шматок, який скаче: *-a, -i, -e, -ę, -ą…* У *pamiątce* k → c." }
    ],
    task: {
      id: "t30-s09-pamiatka",
      type: "single-choice",
      question: {
        pl: "Biernik liczby pojedynczej wyrazu *pamiątka* to:",
        ua: "Знахідний однини слова *pamiątka* це:"
      },
      options: [
        { id: "a", label: { pl: "pamiątka", ua: "pamiątka" } },
        { id: "b", label: { pl: "pamiątkę", ua: "pamiątkę" } },
        { id: "c", label: { pl: "pamiątek", ua: "pamiątek" } }
      ],
      answer: "b",
      hint: {
        pl: "Widzę (co?) pamiątkę. Żeński biernik często -ę.",
        ua: "Бачу (що?) pamiątkę. Жіночий знахідний часто -ę."
      },
      explanation: {
        pl: "*pamiątkę* = B lp. *pamiątka* = M lp. *pamiątek* = D lm.",
        ua: "*pamiątkę* = знахідний однини. *pamiątka* = називний однини. *pamiątek* = родовий множини."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Siedem pytań · komplet", ua: "Сім питань · комплект" },
    formula: "lekcja 30  ·  koniec godziny",
    promptPlace: "before",
    prompt: {
      pl: "Koniec *tej* godziny. Masz pełną siódemkę i e-mail Wiktora. Lekcja 31 jest *osobna*: temat, końcówka, oboczność, *nie* z rzeczownikami. Dziś tego *nie* robimy.",
      ua: "Кінець *цієї* години. Маєш повну сімку і e-mail Віктора. Урок 31 — *окремий*: основа, закінчення, чергування, *nie* з іменниками. Сьогодні цього *не* робимо."
    },
    items: [
      { pl: "N (z) kim? czym?  ·  Ms (o) kim? czym? — *zawsze z przyimkiem*  ·  W o!", ua: "N (z) kim? czym?  ·  Ms (o) kim? czym? — *завжди з прийменником*  ·  W o!" },
      { pl: "E-mail: *burzę, wiatr, Kanałem, statki, ulicach, ludzi, handlarzom, hotelu, plusy*.", ua: "E-mail: *burzę, wiatr, Kanałem, statki, ulicach, ludzi, handlarzom, hotelu, plusy*." }
    ],
    task: {
      id: "t30-s11-karta",
      type: "true-false",
      question: {
        pl: "Forma *w hotelu* to miejscownik, bo miejscownik w polskim zawsze stoi z przyimkiem. Prawda czy fałsz?",
        ua: "Форма *w hotelu* — місцевий, бо місцевий у польській завжди стоїть із прийменником. Правда чи ні?"
      },
      answer: true,
      hint: {
        pl: "w, na, o, przy + miejscownik. Samo *hotelu* nie wystarczy.",
        ua: "w, na, o, przy + місцевий. Саме *hotelu* не досить."
      },
      explanation: {
        pl: "Prawda. *w hotelu* = Ms. To pewna z dzisiejszej lekcji. Temat i *nie* — lekcja 31.",
        ua: "Так. *w hotelu* = місцевий. Це певна з сьогоднішнього уроку. Основа і *nie* — урок 31."
      }
    }
  }
  ]
};
