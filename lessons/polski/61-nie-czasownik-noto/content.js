function emT61(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T61 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT61(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T61 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 114  ·  Lekcja 61  ·  -no/-to · nie",
    promptPlace: "before",
    prompt: {
      pl: "Druga część tematu s. 114: formy **nieosobowe** (bezokolicznik + *-no/-to*), tekst o Chinach, reguła *nie* z czasownikami **rozdzielnie**, komiks ortograficzny. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга частина теми с. 114: форми **безособові** (інфінітив + *-no/-to*), текст про Китай, правило *nie* з дієсловами **окремо**, орфографічний комікс. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "rozróżnię formy osobowe i nieosobowe;", ua: "розрізню особові і безособові форми;" },
      { pl: "utworzę formy zakończone na *-no*, *-to*;", ua: "утворю форми на *-no*, *-to*;" },
      { pl: "napiszę *nie* z czasownikiem **rozdzielnie** i zastosuję to w komiksie.", ua: "напишу *nie* з дієсловом **окремо** і застосую в коміксі." }
    ],
    task: {
      id: "t61-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Formy *-no/-to* i rozróżnienie osobowe/nieosobowe", ua: "Форми *-no/-to* і розрізнення особові/безособові" } },
        { id: "b", label: { pl: "Pisownię *nie* z czasownikiem", ua: "Правопис *nie* з дієсловом" } },
        { id: "c", label: { pl: "Tylko definicję czasownika od zera (to T60)", ua: "Лише означення дієслова з нуля (це T60)" } },
        { id: "d", label: { pl: "Ćwiczenie z komiksu (razem / osobno)", ua: "Вправу з коміксу (разом / окремо)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Definicja i odmiana osobowa — T60.",
        ua: "Означення й особова відміна — T60."
      },
      explanation: {
        pl: "A, B, D. C było w T60.",
        ua: "A, B, D. C було в T60."
      }
    }
  },

  // 2 — formy bezosobowe
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · formy nieosobowe", ua: "Zapamiętaj · безособові форми" },
    formula: "s. 114  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Dwie grupy form bezosobowych. Skan ramki — kliknij.",
      ua: "Дві групи безособових форм. Скан рамки — клікни."
    },
    visual: vizGhT61("t61-bezosobowe.png", {
      alt: { pl: "Ramka: bezokoliczniki i formy -no/-to", ua: "Рамка: інфінітиви і форми -no/-to" },
      place: "after"
    }),
    text: {
      pl: "Formami bezosobowymi (nieosobowymi) czasownika są: **bezokoliczniki** (formy zakończone na **-ć, -c**, np. *czytać, robić, piec*) oraz **formy zakończone na -no, -to** (np. *czytano, sprzątnięto*).",
      ua: "Безособові (неособові) форми дієслова: **інфінітиви** (на **-ć, -c**, напр. *czytać, robić, piec*) та **форми на -no, -to** (напр. *czytano, sprzątnięto*)."
    },
    items: [
      { pl: "Bezokolicznik: *czytać*, *robić*, *piec*.", ua: "Інфінітив: *czytać*, *robić*, *piec*." },
      { pl: "*-no / -to*: *czytano*, *sprzątnięto*.", ua: "*-no / -to*: *czytano*, *sprzątnięto*." }
    ],
    task: {
      id: "t61-s02-bezosob",
      type: "single-choice",
      question: {
        pl: "Który zestaw to formy nieosobowe?",
        ua: "Який набір — безособові форми?"
      },
      options: [
        { id: "a", label: { pl: "czytać · czytano · sprzątnięto", ua: "czytać · czytano · sprzątnięto" } },
        { id: "b", label: { pl: "czytam · czytasz · czytają", ua: "czytam · czytasz · czytają" } },
        { id: "c", label: { pl: "ładny · ładna · ładne", ua: "ładny · ładna · ładne" } }
      ],
      answer: "a",
      hint: {
        pl: "Bezokolicznik + *-no/-to*.",
        ua: "Інфінітив + *-no/-to*."
      },
      explanation: {
        pl: "A = nieosobowe. B = formy osobowe. C = przymiotnik.",
        ua: "A = безособові. B = особові. C = прикметник."
      }
    }
  },

  // 3 — kiedy -no/-to
  {
    type: "concept",
    heading: { pl: "Kiedy używamy -no / -to?", ua: "Коли вживаємо -no / -to?" },
    formula: "s. 114  ·  użycie",
    promptPlace: "before",
    prompt: {
      pl: "Porównaj: *zaplanowano* (brak osoby) vs *zaplanowali* (kto?). Skan z przykładami.",
      ua: "Порівняй: *zaplanowano* (нема особи) vs *zaplanowali* (хто?). Скан із прикладами."
    },
    visual: vizGhT61("t61-noto-uzycie.png", {
      alt: { pl: "zaplanowano vs zaplanowali", ua: "zaplanowano vs zaplanowali" },
      place: "after"
    }),
    text: {
      pl: "Form zakończonych na *-no* i *-to* używamy wtedy, gdy chcemy przekazać, że czynność jest lub będzie wykonywana przez **bliżej nieokreślone osoby**. Przykład: *Zakazane Miasto **zaplanowano**…* (brak informacji o osobie) vs *Chińscy budowniczowie **zaplanowali**…* (3. os. lm.).",
      ua: "Форми на *-no* і *-to* вживаємо, коли хочемо сказати, що дію виконують **ближче невизначені особи**. Приклад: *Zakazane Miasto **zaplanowano**…* (нема інформації про особу) vs *Chińscy budowniczowie **zaplanowali**…* (3 ос. мн.)."
    },
    items: [
      { pl: "*zaplanowano* → brak informacji o wykonawcy.", ua: "*zaplanowano* → немає інформації про виконавця." },
      { pl: "*zaplanowali* → wiadomo: budowniczowie (3. os. lm.).", ua: "*zaplanowali* → відомо: будівничі (3 ос. мн.)." }
    ],
    task: {
      id: "t61-s03-kiedy",
      type: "single-choice",
      question: {
        pl: "Kiedy wybierasz formę *-no/-to*?",
        ua: "Коли обираєш форму *-no/-to*?"
      },
      options: [
        { id: "a", label: { pl: "gdy wykonawca jest bliżej nieokreślony", ua: "коли виконавець ближче невизначений" } },
        { id: "b", label: { pl: "gdy zawsze mówisz o sobie (ja)", ua: "коли завжди говориш про себе (я)" } },
        { id: "c", label: { pl: "tylko w pytaniach do rzeczownika", ua: "лише в питаннях до іменника" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: „bliżej nieokreślone osoby”.",
        ua: "Рамка: «ближче невизначені особи»."
      },
      explanation: {
        pl: "*-no/-to* = czynność bez wskazania konkretnego wykonawcy.",
        ua: "*-no/-to* = дія без вказівки конкретного виконавця."
      }
    }
  },

  // 4 — tekst Chiny zad. 4
  {
    type: "practice",
    heading: { pl: "Zad. 4 · osobowe / bezosobowe", ua: "Завд. 4 · особові / безособові" },
    formula: "s. 114  ·  tekst · Chiny",
    promptPlace: "before",
    prompt: {
      pl: "Znajdź czasowniki i ułóż dwie kolumny: **osobowe** / **bezosobowe**. Przeczytaj tekst na skanie.",
      ua: "Знайди дієслова і склади дві колонки: **особові** / **безособові**. Прочитай текст на скані."
    },
    visual: vizGhT61("t61-tekst-chiny.jpg", {
      alt: { pl: "Tekst o wynalazkach Chin", ua: "Текст про винаходи Китаю" },
      place: "after"
    }),
    items: [
      { pl: "Tekst: pomysłowość Chin, ster, kompas, piece, mosty…", ua: "Текст: винахідливість Китаю, стерно, компас, печі, мости…" },
      { pl: "Po *Sprawdź* zobaczysz przykładowy podział — najpierw spróbuj sam.", ua: "Після *Sprawdź* побачиш приклад поділу — спочатку спробуй сам." }
    ],
    task: {
      id: "t61-s04-kolumny",
      type: "single-choice",
      question: {
        pl: "Który podział jest poprawny?",
        ua: "Який поділ правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "osobowe: górowali, wynaleźli, wytwarzali, służyły · bezosobowe: budowano, wytapiano, przerzucano, skrócić",
            ua: "особові: górowali, wynaleźli, wytwarzali, służyły · безособові: budowano, wytapiano, przerzucano, skrócić"
          }
        },
        {
          id: "b",
          label: {
            pl: "osobowe: budowano, wytapiano · bezosobowe: górowali, wynaleźli",
            ua: "особові: budowano, wytapiano · безособові: górowali, wynaleźli"
          }
        },
        {
          id: "c",
          label: {
            pl: "wszystkie formy w tekście są tylko osobowe",
            ua: "усі форми в тексті лише особові"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "*-no* = bezosobowe; *górowali* = ktoś konkretny (mieszkańcy).",
        ua: "*-no* = безособові; *górowali* = хтось конкретний (мешканці)."
      },
      explanation: {
        pl: "Osobowe: górowali, wynaleźli, wytwarzali, służyły. Bezosobowe: budowano, wytapiano, przerzucano + bezokolicznik skrócić.",
        ua: "Особові: górowali, wynaleźli, wytwarzali, służyły. Безособові: budowano, wytapiano, przerzucano + інфінітив skrócić."
      }
    }
  },

  // 5 — zad. 5 utwórz -no/-to
  {
    type: "practice",
    heading: { pl: "Zad. 5 · utwórz -no / -to", ua: "Завд. 5 · утвори -no / -to" },
    formula: "s. 114  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Od bezokoliczników utwórz nieosobowe formy *-no, -to*. Skan zdań.",
      ua: "Від інфінітивів утвори безособові форми *-no, -to*. Скан речень."
    },
    visual: vizGhT61("t61-zad5.png", {
      alt: { pl: "Zdania: zbudować, udostępnić, otworzyć", ua: "Речення: zbudować, udostępnić, otworzyć" },
      place: "after"
    }),
    items: [
      { pl: "Kompleks pałacowy (**zbudować**) w XV wieku…", ua: "Палацовий комплекс (**zbudować**) у XV ст.…" },
      { pl: "Od 1912 r. (**udostępnić**) zwiedzającym…", ua: "З 1912 р. (**udostępnić**) відвідувачам…" },
      { pl: "Ponownie (**otworzyć**) bramy…", ua: "Знову (**otworzyć**) брами…" }
    ],
    task: {
      id: "t61-s05-noto",
      type: "single-choice",
      question: {
        pl: "Które formy są poprawne?",
        ua: "Які форми правильні?"
      },
      options: [
        { id: "a", label: { pl: "zbudowano · udostępniono · otwarto", ua: "zbudowano · udostępniono · otwarto" } },
        { id: "b", label: { pl: "zbudowali · udostępnili · otworzyli", ua: "zbudowali · udostępnili · otworzyli" } },
        { id: "c", label: { pl: "zbudować · udostępnić · otworzyć", ua: "zbudować · udostępnić · otworzyć" } }
      ],
      answer: "a",
      hint: {
        pl: "Bezokolicznik → forma na *-no* / *-to* (nie 3. os. lm.).",
        ua: "Інфінітив → форма на *-no* / *-to* (не 3 ос. мн.)."
      },
      explanation: {
        pl: "zbudowano; udostępniono; otwarto.",
        ua: "zbudowano; udostępniono; otwarto."
      }
    }
  },

  // 6 — nie z czasownikiem
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · nie z czasownikiem", ua: "Zapamiętaj · nie з дієсловом" },
    formula: "s. 114  ·  ortografia",
    promptPlace: "before",
    prompt: {
      pl: "Złota reguła. Skan ramki — kliknij.",
      ua: "Золоте правило. Скан рамки — клікни."
    },
    visual: vizGhT61("t61-nie-ramka.png", {
      alt: { pl: "Ramka: nie z czasownikami rozdzielnie", ua: "Рамка: nie з дієсловами окремо" },
      place: "after"
    }),
    text: {
      pl: "Przeczenie **nie z czasownikami** piszemy **rozdzielnie**, na przykład *nie będę, nie mieli, nie zakryto.*",
      ua: "Заперечення **nie з дієсловами** пишемо **окремо**, напр. *nie będę, nie mieli, nie zakryto.*"
    },
    items: [
      { pl: "Zawsze **osobno**: *nie idę*, *nie czytali*, *nie otwarto*.", ua: "Завжди **окремо**: *nie idę*, *nie czytali*, *nie otwarto*." },
      { pl: "Uwaga: z **przymiotnikiem** często łącznie (*niebezpieczne*) — to inna część mowy.", ua: "Увага: з **прикметником** часто разом (*niebezpieczne*) — інша частина мови." }
    ],
    task: {
      id: "t61-s06-nie",
      type: "single-choice",
      question: {
        pl: "Który zapis z czasownikiem jest poprawny?",
        ua: "Який запис із дієсловом правильний?"
      },
      options: [
        { id: "a", label: { pl: "nie będę · nie mieli · nie zakryto", ua: "nie będę · nie mieli · nie zakryto" } },
        { id: "b", label: { pl: "niebędę · niemieli · niezakryto", ua: "niebędę · niemieli · niezakryto" } },
        { id: "c", label: { pl: "zawsze łącznie, jak *niedobry*", ua: "завжди разом, як *niedobry*" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: rozdzielnie.",
        ua: "Рамка: окремо."
      },
      explanation: {
        pl: "Z czasownikami (też z *-no/-to*) — **rozdzielnie**.",
        ua: "З дієсловами (також із *-no/-to*) — **окремо**."
      }
    }
  },

  // 7 — komiks intro
  {
    type: "observe",
    heading: { pl: "Komiks · Zakazane Miasto", ua: "Комікс · Заборонене місто" },
    formula: "s. 114  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Przypomnij zasady *nie* z różnymi częściami mowy. Rodzina przy Bramie Południowej — kliknij skan dialogów.",
      ua: "Пригадай правила *nie* з різними частинами мови. Родина біля Південної брами — клікни скан діалогів."
    },
    visual: vizGhT61("t61-komiks.jpg", {
      alt: { pl: "Komiks: rodzina w Zakazanym Mieście", ua: "Комікс: родина в Забороненому місті" },
      place: "after"
    }),
    items: [
      { pl: "Czasowniki → *nie* **osobno**.", ua: "Дієслова → *nie* **окремо**." },
      { pl: "Przymiotniki często → **łącznie** (*niebezpieczne*).", ua: "Прикметники часто → **разом** (*niebezpieczne*)." },
      { pl: "*nieraz* (często) vs *nie raz, nie dwa*.", ua: "*nieraz* (часто) vs *nie raz, nie dwa*." }
    ],
    task: {
      id: "t61-s07-komiks-intro",
      type: "single-choice",
      question: {
        pl: "Gdzie toczy się rozmowa w komiksie?",
        ua: "Де відбувається розмова в коміксі?"
      },
      options: [
        { id: "a", label: { pl: "przy Bramie Południowej / w Zakazanym Mieście", ua: "біля Південної брами / в Забороненому місті" } },
        { id: "b", label: { pl: "na Wielkim Murze w nocy", ua: "на Великому мурі вночі" } },
        { id: "c", label: { pl: "w klubie Fogga w Londynie", ua: "у клубі Фоґґа в Лондоні" } }
      ],
      answer: "a",
      hint: {
        pl: "Córka wymienia Bramy i salę tronową.",
        ua: "Донька називає Брами і тронну залу."
      },
      explanation: {
        pl: "Zakazane Miasto · Brama Południowa · gra „Cesarz i smoki”.",
        ua: "Заборонене місто · Південна брама · гра «Cesarz i smoki»."
      }
    }
  },

  // 8 — komiks ćwiczenie
  {
    type: "practice",
    heading: { pl: "Zad. 6 · razem czy osobno?", ua: "Завд. 6 · разом чи окремо?" },
    formula: "s. 114  ·  komiks · ortografia",
    promptPlace: "before",
    prompt: {
      pl: "Ustal zapis *nie* z podanymi wyrazami. Skan z lukami — kliknij. Odpowiedzi dopiero po *Sprawdź*.",
      ua: "Визнач запис *nie* з поданими словами. Скан із пропусками — клікни. Відповіді лише після *Sprawdź*."
    },
    visual: vizGhT61("t61-komiks-zad.jpg", {
      alt: { pl: "Komiks z lukami: nie + wyraz", ua: "Комікс із пропусками: nie + слово" },
      place: "after"
    }),
    items: [
      { pl: "Najpierw ustal **część mowy** wyrazu po *(nie)*.", ua: "Спочатку визнач **частину мови** слова після *(nie)*." },
      { pl: "Czasownik → zwykle osobno. Przymiotnik → często łącznie. Sens decyduje przy *raz*.", ua: "Дієслово → зазвичай окремо. Прикметник → часто разом. Сенс вирішує при *raz*." },
      { pl: "Pełny klucz zapisów — po *Sprawdź*.", ua: "Повний ключ записів — після *Sprawdź*." }
    ],
    task: {
      id: "t61-s08-komiks",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy są poprawne? Zaznacz wszystkie.",
        ua: "Які записи правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "nie przypuszczałam · nie odważyłem się · nie mogłem", ua: "nie przypuszczałam · nie odważyłem się · nie mogłem" } },
        { id: "b", label: { pl: "niebezpieczne (łącznie) · nieraz (= często)", ua: "niebezpieczne (разом) · nieraz (= часто)" } },
        { id: "c", label: { pl: "nieprzypuszczałam · niemogłem (łącznie z czasownikiem)", ua: "nieprzypuszczałam · niemogłem (разом із дієсловом)" } },
        { id: "d", label: { pl: "nie wiem · nie ma · nie byliśmy · nie wchodzą", ua: "nie wiem · nie ma · nie byliśmy · nie wchodzą" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czasownik = osobno. Przymiotnik *niebezpieczne* = razem.",
        ua: "Дієслово = окремо. Прикметник *niebezpieczne* = разом."
      },
      explanation: {
        pl: "A, B, D. C jest błędne — z czasownikiem zawsze rozdzielnie. Także: *nie raz, nie dwa*; *nie najlepiej*.",
        ua: "A, B, D. C хибне — з дієсловом завжди окремо. Також: *nie raz, nie dwa*; *nie najlepiej*."
      }
    }
  },

  // 9 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T61", ua: "Підсумок · T61" },
    formula: "s. 114  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Domknij temat czasownika z s. 114.",
      ua: "Закрий тему дієслова зі с. 114."
    },
    items: [
      { pl: "Nieosobowe: bezokolicznik + *-no/-to*.", ua: "Безособові: інфінітив + *-no/-to*." },
      { pl: "*-no/-to* = bliżej nieokreślony wykonawca.", ua: "*-no/-to* = ближче невизначений виконавець." },
      { pl: "*nie* + czasownik = **rozdzielnie**.", ua: "*nie* + дієслово = **окремо**." },
      emT61("T60 = formy osobowe · T61 = nieosobowe + ortografia nie")
    ],
    task: {
      id: "t61-s09-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „*nie* z czasownikami piszemy rozdzielnie.”",
        ua: "Чи твердження правильне? «*nie* з дієсловами пишемо окремо.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Ramka ortograficzna.",
        ua: "Орфографічна рамка."
      },
      explanation: {
        pl: "Prawda — *nie będę, nie mieli, nie zakryto*.",
        ua: "Правда — *nie będę, nie mieli, nie zakryto*."
      }
    }
  }
]};
