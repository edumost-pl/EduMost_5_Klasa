function emT57(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T57 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT57(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T57 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 105–106  ·  Lekcja 57  ·  dziennik",
    promptPlace: "before",
    prompt: {
      pl: "Druga godzina o Foggu: reakcja Obieżyświata (wykrzyknik / pytanie / wielokropek), uczucia z ramki, **plan wydarzeń**, definicja **dziennika**, fragment dziennika i opowieść z planu podróży. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга година про Фоґґа: реакція Паспарту (оклик / питання / три крапки), почуття з рамки, **план подій**, означення **щоденника**, уривок щоденника й оповідь із плану подорожі. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "rozbiorę słowa z ramki uczuć i opiszę reakcję Obieżyświata;", ua: "розберу слова з рамки почуттів і опишу реакцію Паспарту;" },
      { pl: "uzupełnię plan wydarzeń według godzin;", ua: "доповню план подій за годинами;" },
      { pl: "wyjaśnię, czym jest *dziennik*, i napiszę krótki fragment.", ua: "поясню, що таке *dziennik*, і напишу короткий уривок." }
    ],
    task: {
      id: "t57-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest celem dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО є метою сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Uczucia Obieżyświata + interpunkcja wypowiedzi", ua: "Почуття Паспарту + пунктуація реплік" } },
        { id: "b", label: { pl: "Plan wydarzeń i ramka *dziennik*", ua: "План подій і рамка *dziennik*" } },
        { id: "c", label: { pl: "Ponowne wybieranie bagażu z T56 jako jedyny cel", ua: "Повторний вибір багажу з T56 як єдина мета" } },
        { id: "d", label: { pl: "Wypowiedź: dziennik / dzień z planu podróży", ua: "Висловлювання: щоденник / день із плану подорожі" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Bagaż był w T56.",
        ua: "Багаж був у T56."
      },
      explanation: {
        pl: "A, B, D. C to powtórka T56, nie główny cel dziś.",
        ua: "A, B, D. C — повторення T56, не головна мета сьогодні."
      }
    }
  },

  // 2 — opcjonalne nagranie
  {
    type: "observe",
    heading: { pl: "Przypomnij fragment (opcjonalnie)", ua: "Пригадай уривок (за бажанням)" },
    formula: "s. 101–103  ·  nagranie",
    promptPlace: "before",
    prompt: {
      pl: "Jeśli trzeba — włącz nagranie jeszcze raz. Potem przechodzimy do analizy reakcji Obieżyświata.",
      ua: "Якщо треба — увімкни запис ще раз. Потім переходимо до аналізу реакції Паспарту."
    },
    items: [
      { pl: "Fogg: wyjazd za 10 minut · dookoła świata w 80 dni.", ua: "Фоґґ: виїзд за 10 хв · навколо світу за 80 днів." },
      { pl: "Obieżyświat: szok, pytania, wykrzykniki…", ua: "Паспарту: шок, питання, оклики…" }
    ],
    task: {
      id: "t57-s02-przypomnij",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: Obieżyświat od razu spokojnie cieszy się z podróży, bez zdziwienia.",
        ua: "Правда чи ні: Паспарту одразу спокійно радіє з подорожі, без здивування."
      },
      answer: false,
      hint: {
        pl: "Dialog pełen „?!” i niedowierzania.",
        ua: "Діалог повний «?!» і недовіри."
      },
      explanation: {
        pl: "Fałsz. Najpierw szok i niedowierzanie — stąd zad. 2.",
        ua: "Неправда. Спочатку шок і недовіра — звідси завд. 2."
      }
    }
  },

  // 3 — interpunkcja 2a
  {
    type: "practice",
    heading: { pl: "Reakcja · wykrzyknik, pytanie, …", ua: "Реакція · оклик, питання, …" },
    formula: "s. 105  ·  zad. 2a",
    promptPlace: "before",
    prompt: {
      pl: "Prześledź zapis wypowiedzi Obieżyświata. Co dają **!** · **?** · **…**?",
      ua: "Простеж запис реплік Паспарту. Що дають **!** · **?** · **…**?"
    },
    visual: vizGhT57("t57-reakcja.png", {
      alt: { pl: "Zad. 2 — reakcja Obieżyświata", ua: "Завд. 2 — реакція Паспарту" },
      place: "after"
    }),
    items: [
      { pl: "Znajdź w tekście wypowiedzi z **!** · **?** · **…**.", ua: "Знайди в тексті репліки з **!** · **?** · **…**." },
      { pl: "Porównaj, co czujesz przy każdym znaku — potem sprawdź w teście.", ua: "Порівняй, що відчуваєш при кожному знаку — потім перевір у тесті." },
      { pl: "Klucz znaczeń — po *Sprawdź*.", ua: "Ключ значень — після *Перевірити*." }
    ],
    task: {
      id: "t57-s03-interpunkcja",
      type: "single-choice",
      question: {
        pl: "Wielokropek (…) w reakcji Obieżyświata najczęściej oznacza:",
        ua: "Три крапки (…) у реакції Паспарту найчастіше означають:"
      },
      options: [
        { id: "a", label: { pl: "zawahanie / urwanie myśli", ua: "вагання / обрив думки" } },
        { id: "b", label: { pl: "koniec powieści Verne’a", ua: "кінець роману Верна" } },
        { id: "c", label: { pl: "znak, że bohater śpi", ua: "знак, що герой спить" } }
      ],
      answer: "a",
      hint: {
        pl: "Bohater nie dokończa spokojnie zdania — myśli „uciekają”.",
        ua: "Герой не завершує спокійно речення — думки «тікають»."
      },
      explanation: {
        pl: "Klucz: **…** = zawahanie / urwanie myśli; **!** = silne uczucie; **?** = pytanie / niepewność.",
        ua: "Ключ: **…** = вагання / обрив думки; **!** = сильне почуття; **?** = питання / непевність."
      }
    }
  },

  // 4 — rozbiór ramki uczuć
  {
    type: "example",
    heading: { pl: "Ramka · rozbiór uczuć", ua: "Рамка · розбір почуттів" },
    formula: "s. 105  ·  zad. 2b  ·  słownictwo",
    promptPlace: "before",
    prompt: {
      pl: "Żółta ramka z podręcznika. Najpierw poznaj słowa (PL + UA), potem w następnym ekranie wybierzesz, co czuł Obieżyświat. Które pasują do startu podróży — **jeszcze nie mówimy** (klucz w zadaniu).",
      ua: "Жовта рамка з підручника. Спочатку вивчи слова (PL + UA), потім на наступному екрані обереш, що відчував Паспарту. Які пасують до старту — **ще не кажемо** (ключ у завданні)."
    },
    visual: vizGhT57("t57-reakcja.png", {
      alt: { pl: "Ramka uczuć · zad. 2", ua: "Рамка почуттів · завд. 2" },
      place: "after"
    }),
    text: {
      pl: "obojętność · zdziwienie · podziw · radość · zaskoczenie · złość · niedowierzanie · lekceważenie · wdzięczność · odpowiedzialność · zazdrość · przerażenie · oburzenie · niepewność · pewność siebie",
      ua: "байдужість · здивування · захоплення · радість · здивування/шок · злість · недовіра · зневага · вдячність · відповідальність · заздрість · жах · обурення · непевність · впевненість у собі"
    },
    items: [
      { pl: "**obojętność** — brak zainteresowania; байдужість.", ua: "**obojętność** — байдужість." },
      { pl: "**zdziwienie** — że coś jest inne niż myślałeś; здивування.", ua: "**zdziwienie** — здивування." },
      { pl: "**podziw** — uznanie dla kogoś / czegoś; захоплення / подив з повагою.", ua: "**podziw** — захоплення." },
      { pl: "**radość** — wesołe, pozytywne uczucie; радість.", ua: "**radość** — радість." },
      { pl: "**zaskoczenie** — nagłe „nie spodziewałem się”; здивування / шок.", ua: "**zaskoczenie** — здивування, шок." },
      { pl: "**złość** — gniew; злість.", ua: "**złość** — злість." },
      { pl: "**niedowierzanie** — „nie mogę w to uwierzyć”; недовіра / невіра.", ua: "**niedowierzanie** — недовіра, невіра." },
      { pl: "**lekceważenie** — lekki stosunek, brak szacunku; зневага / легковаження.", ua: "**lekceważenie** — зневага." },
      { pl: "**wdzięczność** — dziękuję w sercu; вдячність.", ua: "**wdzięczność** — вдячність." },
      { pl: "**odpowiedzialność** — poczucie obowiązku; відповідальність.", ua: "**odpowiedzialność** — відповідальність." },
      { pl: "**zazdrość** — że ktoś ma coś „lepszego”; заздрість.", ua: "**zazdrość** — заздрість." },
      { pl: "**przerażenie** — silny strach; жах / переляк.", ua: "**przerażenie** — жах, переляк." },
      { pl: "**oburzenie** — moralny gniew („to niesprawiedliwe!”); обурення.", ua: "**oburzenie** — обурення." },
      { pl: "**niepewność** — wahanie, brak pewności; непевність.", ua: "**niepewność** — непевність." },
      { pl: "**pewność siebie** — wiara w siebie; впевненість у собі.", ua: "**pewność siebie** — впевненість у собі." }
    ],
    task: {
      id: "t57-s04-ramka-glosy",
      type: "single-choice",
      question: {
        pl: "*Niedowierzanie* oznacza najbliżej:",
        ua: "*Niedowierzanie* означає найближче:"
      },
      options: [
        { id: "a", label: { pl: "„nie mogę w to uwierzyć”", ua: "«не можу в це повірити»" } },
        { id: "b", label: { pl: "spokojną radość bez emocji", ua: "спокійну радість без емоцій" } },
        { id: "c", label: { pl: "tylko zazdrość o pieniądze", ua: "лише заздрість через гроші" } }
      ],
      answer: "a",
      hint: {
        pl: "Rozbiór: *nie* + *dowierzać* (wierzyć).",
        ua: "Розбір: *nie* + *dowierzać* (вірити)."
      },
      explanation: {
        pl: "*Niedowierzanie* = nie mogę uwierzyć. To nie radość i nie zazdrość.",
        ua: "*Niedowierzanie* = не можу повірити. Це не радість і не заздрість."
      }
    }
  },

  // 5 — uczucia 2b (wybór — klucz ukryty)
  {
    type: "practice",
    heading: { pl: "Co czuł Obieżyświat?", ua: "Що відчував Паспарту?" },
    formula: "s. 105  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Teraz wybór: które słowa z ramki pasują do **pierwszej** reakcji (start podróży), a które raczej później (żebraczka)? Klucz — po *Sprawdź*.",
      ua: "Тепер вибір: які слова з рамки пасують до **першої** реакції (старт подорожі), а які радше пізніше (жебрачка)? Ключ — після *Перевірити*."
    },
    items: [
      { pl: "Użyj rozbioru z poprzedniego ekranu.", ua: "Використай розбір з попереднього екрана." },
      { pl: "Nie zaglądaj do klucza zanim klikniesz *Sprawdź*.", ua: "Не заглядай у ключ, доки не натиснеш *Перевірити*." }
    ],
    task: {
      id: "t57-s05-uczucia",
      type: "multiple-choice",
      question: {
        pl: "Które uczucia NA PEWNO pasują do pierwszej reakcji Obieżyświata? Zaznacz wszystkie.",
        ua: "Які почуття НАПЕВНО пасують до першої реакції Паспарту? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "zdziwienie · zaskoczenie · niedowierzanie", ua: "zdziwienie · zaskoczenie · niedowierzanie" } },
        { id: "b", label: { pl: "niepewność", ua: "niepewność" } },
        { id: "c", label: { pl: "obojętność · lekceważenie", ua: "obojętność · lekceważenie" } },
        { id: "d", label: { pl: "później też wdzięczność (scena z żebraczką)", ua: "пізніше також wdzięczność (сцена з жебрачкою)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Na początku nie jest obojętny — wręcz przeciwnie.",
        ua: "На початку він не байдужий — навпаки."
      },
      explanation: {
        pl: "Klucz na start: zdziwienie, zaskoczenie, niedowierzanie, niepewność (+ czasem przerażenie). Po geście Fogga: wdzięczność / podziw. Nie na start: obojętność, lekceważenie.",
        ua: "Ключ на старт: zdziwienie, zaskoczenie, niedowierzanie, niepewność. Після жесту Фоґґа: wdzięczność / podziw. Не на старт: obojętność, lekceważenie."
      }
    }
  },

  // 6 — tabela / plan wydarzeń
  {
    type: "practice",
    heading: { pl: "Plan wydarzeń · kiedy?", ua: "План подій · коли?" },
    formula: "s. 105  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij w myślach tabelę z podręcznika (Kiedy? / Co się wydarzyło?). Najpierw sam — bez podglądania klucza.",
      ua: "Доповни в думках таблицю з підручника (Kiedy? / Co się wydarzyło?). Спочатку сам — без підглядання ключа."
    },
    items: [
      { pl: "Przypomnij sobie kolejność: dom → dworzec → pociąg.", ua: "Пригадай порядок: дім → вокзал → потяг." },
      { pl: "Godziny: 7.50–8.00 · 8.00–8.20 · 8.20–8.40 · 8.45–8.50 — dopasuj zdarzenia sam.", ua: "Години: 7.50–8.00 · 8.00–8.20 · 8.20–8.40 · 8.45–8.50 — підбери події сам." },
      { pl: "Pełny klucz tabeli — po *Sprawdź* (oraz na skanie-kluczu poniżej w wyjaśnieniu mentalnie).", ua: "Повний ключ таблиці — після *Перевірити*." }
    ],
    task: {
      id: "t57-s06-plan",
      type: "single-choice",
      question: {
        pl: "Co dzieje się w przedziale **8.20–8.40**?",
        ua: "Що відбувається в проміжку **8.20–8.40**?"
      },
      options: [
        { id: "a", label: { pl: "spotkanie przyjaciół przez pana Fogga", ua: "зустріч друзів пана Фоґґа" } },
        { id: "b", label: { pl: "zamknięcie pokoju Obieżyświata", ua: "закриття кімнати Паспарту" } },
        { id: "c", label: { pl: "koniec podróży w Londynie po 80 dniach", ua: "кінець подорожі в Лондоні після 80 днів" } }
      ],
      answer: "a",
      hint: {
        pl: "Między wyjściem z domu a zajęciem przedziału Fogg spotyka przyjaciół na dworcu.",
        ua: "Між виходом з дому і місцем у купе Фоґґ зустрічає друзів на вокзалі."
      },
      explanation: {
        pl: "Klucz tabeli: 7.50–8.00 zamknięcie pokoju Obieżyświata · 8.00–8.20 opuszczenie domu · 8.20–8.40 spotkanie przyjaciół przez pana Fogga · 8.45–8.50 zajęcie miejsca w przedziale.",
        ua: "Ключ таблиці: 7.50–8.00 закриття кімнати · 8.00–8.20 вихід з дому · 8.20–8.40 зустріч друзів · 8.45–8.50 місце в купе."
      }
    }
  },

  // 7 — ramka dziennik
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · dziennik", ua: "Zapamiętaj · щоденник" },
    formula: "s. 106  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Definicja do zeszytu. Potem napiszesz fragment „ja” Obieżyświata.",
      ua: "Означення в зошит. Потім напишеш уривок «я» Паспарту."
    },
    visual: vizGhT57("t57-dziennik-ramka.png", {
      alt: { pl: "Ramka: dziennik", ua: "Рамка: щоденник" },
      place: "after"
    }),
    text: {
      pl: "**Dziennik** to zbiór czyichś **notatek robionych codziennie** i opatrzonych datą. Najczęściej zawiera opis zdarzeń, spostrzeżenia i przemyślenia jego autora.",
      ua: "**Щоденник** (*dziennik*) — збір чиїхось **нотаток, які роблять щодня** і датують. Найчастіше містить опис подій, спостереження й роздуми автора."
    },
    items: [
      { pl: "Cecha 1: **codziennie** + **data**.", ua: "Риса 1: **щодня** + **дата**." },
      { pl: "Cecha 2: zdarzenia + spostrzeżenia + przemyślenia (**ja**).", ua: "Риса 2: події + спостереження + роздуми (**я**)." },
      { pl: "≠ opowiadanie 3. osoby — tu mówisz jako bohater.", ua: "≠ оповідання від 3 особи — тут говориш як герой." }
    ],
    task: {
      id: "t57-s07-definicja",
      type: "single-choice",
      question: {
        pl: "Dziennik NA PEWNO:",
        ua: "Щоденник НАПЕВНО:"
      },
      options: [
        { id: "a", label: { pl: "to codzienne notatki z datą (zdarzenia + myśli autora)", ua: "це щоденні нотатки з датою (події + думки автора)" } },
        { id: "b", label: { pl: "to tylko lista zakupów bez daty", ua: "це лише список покупок без дати" } },
        { id: "c", label: { pl: "to rozkład jazdy pociągów", ua: "це розклад руху поїздів" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: notatki robione codziennie + data.",
        ua: "Рамка: нотатки щодня + дата."
      },
      explanation: {
        pl: "Definicja: codzienne notatki z datą — zdarzenia, spostrzeżenia, przemyślenia.",
        ua: "Означення: щоденні нотатки з датою — події, спостереження, роздуми."
      }
    }
  },

  // 8 — dziennik
  {
    type: "practice",
    heading: { pl: "Fragment dziennika Obieżyświata", ua: "Уривок щоденника Паспарту" },
    formula: "s. 106  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Napisz krótki fragment: co i o której godzinie robił (liczebniki **słownie**), oraz co myślał / czuł (wnioski z zad. 2).",
      ua: "Напиши короткий уривок: що і о котрій годині робив (числівники **словами**) і що думав / відчував (висновки з завд. 2)."
    },
    visual: vizGhT57("t57-zad4.png", {
      alt: { pl: "Zad. 4 — dziennik", ua: "Завд. 4 — щоденник" },
      place: "after"
    }),
    items: [
      { pl: "Wzór godziny: *o siódmej pięćdziesiąt* · *o ósmej czterdzieści pięć*.", ua: "Зразок години: *o siódmej pięćdziesiąt* · *o ósmej czterdzieści pięć*." },
      { pl: "Weź wydarzenia z tabeli (zad. 3) + uczucia z ramki (zad. 2).", ua: "Візьми події з таблиці (завд. 3) + почуття з рамки (завд. 2)." }
    ],
    task: {
      id: "t57-s08-dziennik",
      type: "open-answer",
      question: {
        pl: "Napisz 4–6 zdań dziennika Obieżyświata (data + godziny słownie + uczucia).",
        ua: "Напиши 4–6 речень щоденника Паспарту (дата + години словами + почуття)."
      },
      hint: {
        pl: "Np. *Londyn, … O siódmej pięćdziesiąt zamknąłem pokój. Byłem pełen niedowierzania…*",
        ua: "Напр. *Londyn, … O siódmej pięćdziesiąt zamknąłem pokój. Byłem pełen niedowierzania…*"
      },
      explanation: {
        pl: "Sprawdź: 1. os. (*zamknąłem*), data, liczebniki słownie, przynajmniej jedno uczucie z ramki.",
        ua: "Перевір: 1 ос. (*zamknąłem*), дата, числівники словами, хоча б одне почуття з рамки."
      }
    }
  },

  // 9 — plan podróży + wypowiedź Fogga
  {
    type: "practice",
    heading: { pl: "Plan podróży · dzień Fogga", ua: "План подорожі · день Фоґґа" },
    formula: "s. 106  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Spójrz na plan 80 dni. Wybierz **jeden dzień** jednego odcinka i opowiedz go jako **Fileas Fogg** (narrator *ja*).",
      ua: "Подивись на план 80 днів. Обери **один день** одного відрізка й розкажи його як **Fileas Fogg** (оповідач *я*)."
    },
    visual: vizGhT57("t57-plan.jpg", {
      alt: { pl: "Zad. 5 — plan podróży 80 dni", ua: "Завд. 5 — план подорожі 80 днів" },
      place: "after"
    }),
    items: [
      { pl: "Londyn→Suez 7 · Suez→Bombaj 13 · Bombaj→Kalkuta 3 · Kalkuta→Hongkong 13…", ua: "Лондон→Суец 7 · Суец→Бомбей 13 · … Разом 80." },
      { pl: "Razem: **80 dni**. Fogg mówi spokojnie, konkretnie (czas, środek transportu).", ua: "Разом: **80 днів**. Фоґґ говорить спокійно, конкретно." }
    ],
    task: {
      id: "t57-s09-fogg",
      type: "open-answer",
      question: {
        pl: "Napisz 3–5 zdań jako Fileas Fogg o jednym dniu z wybranego odcinka planu.",
        ua: "Напиши 3–5 речень як Fileas Fogg про один день з обраного відрізка плану."
      },
      hint: {
        pl: "Np. *Dziś płyniemy parostatkiem z Suezu… Według rozkładu mamy jeszcze dwanaście dni…*",
        ua: "Напр. *Dziś płyniemy parostatkiem z Suezu… Według rozkładu mamy jeszcze dwanaście dni…*"
      },
      explanation: {
        pl: "Ocena: 1. os., miejsce z planu, środek transportu, spokojny ton Fogga.",
        ua: "Оцінка: 1 ос., місце з плану, транспорт, спокійний тон Фоґґа."
      }
    }
  },

  // 10 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T56–T57", ua: "Підсумок · T56–T57" },
    formula: "s. 100–106  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Verne: świat przedstawiony → emocje → plan → dziennik. Masz narzędzia do lektury przygody.",
      ua: "Верн: зображений світ → емоції → план → щоденник. Маєш інструменти до читання пригоди."
    },
    items: [
      { pl: "T56: notatka, glosy, nagranie, miejsca / ludzie / bagaż.", ua: "T56: нотатка, глоси, запис, місця / люди / багаж." },
      { pl: "T57: reakcja, tabela godzin, *dziennik*, wypowiedzi.", ua: "T57: реакція, таблиця годин, *dziennik*, висловлювання." }
    ],
    task: {
      id: "t57-s10-domkniecie",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: dziennik to codzienne notatki z datą, często w 1. osobie.",
        ua: "Правда чи ні: щоденник — щоденні нотатки з датою, часто в 1 особі."
      },
      answer: true,
      hint: {
        pl: "Ramka z tej lekcji.",
        ua: "Рамка з цього уроку."
      },
      explanation: {
        pl: "Prawda. Data + codzienność + spostrzeżenia / przemyślenia autora.",
        ua: "Правда. Дата + щоденність + спостереження / роздуми автора."
      }
    }
  }
]};
