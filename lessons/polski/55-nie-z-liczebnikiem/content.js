function emT55(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T55 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT55(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T55 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 97  ·  Lekcja 55  ·  nie z liczebnikiem",
    promptPlace: "before",
    prompt: {
      pl: "Trzecia część tematu: ortografia **nie** z liczebnikami — reguła **oddzielnie**, wyjątki (*niejeden, niewiele*), *nieraz* / *nie raz*, tekst *Nie(zwykły) przypadek*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Третя частина теми: орфографія **nie** з числівниками — правило **окремо**, винятки (*niejeden, niewiele*), *nieraz* / *nie raz*, текст *Nie(zwykły) przypadek*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "napiszę *nie* z liczebnikiem **oddzielnie**;", ua: "напишу *nie* з числівником **окремо**;" },
      { pl: "zapamiętam wyjątki *niejeden*, *niewiele*;", ua: "запам’ятаю винятки *niejeden*, *niewiele*;" },
      { pl: "rozróżnię *nieraz* (często) i *nie raz* (nie jeden raz);", ua: "розрізню *nieraz* (часто) і *nie raz* (не один раз);" },
      { pl: "posegreguję wyrazy z tekstu: łącznie / oddzielnie.", ua: "розподілю слова з тексту: разом / окремо." }
    ],
    task: {
      id: "t55-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Oddzielną pisownię *nie* + liczebnik", ua: "Окремий запис *nie* + числівник" } },
        { id: "b", label: { pl: "Wyjątki *niejeden*, *niewiele* + *nieraz/nie raz*", ua: "Винятки *niejeden*, *niewiele* + *nieraz/nie raz*" } },
        { id: "c", label: { pl: "Definicję liczebnika od zera (to było T53)", ua: "Означення числівника з нуля (це було T53)" } },
        { id: "d", label: { pl: "Segregację wyrazów w tekście zad. 6", ua: "Сегрегацію слів у тексті завд. 6" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Definicja była w T53 — dziś ortografia.",
        ua: "Означення було в T53 — сьогодні орфографія."
      },
      explanation: {
        pl: "A, B, D. C to powtórka T53, nie główny cel dziś.",
        ua: "A, B, D. C — повторення T53, не головна мета сьогодні."
      }
    }
  },

  // 2 — ramka concept
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · nie z liczebnikami", ua: "Zapamiętaj · nie з числівниками" },
    formula: "s. 97  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Złota reguła do zeszytu. Skan ramki — kliknij, by powiększyć.",
      ua: "Золоте правило в зошит. Скан рамки — клікни, щоб збільшити."
    },
    visual: vizGhT55("t55-nie-ramka.png", {
      alt: { pl: "Ramka: nie z liczebnikami", ua: "Рамка: nie з числівниками" },
      place: "after"
    }),
    text: {
      pl: "Przeczenie **nie z liczebnikami** piszemy **oddzielnie**, na przykład *nie pięć, nie osiemdziesiąty*. **Uwaga.** Wyjątkami są liczebniki *niejeden* (w znaczeniu wielu) i *niewiele*. Wyraz *raz* bywa rzeczownikiem albo liczebnikiem (= *jeden*). *nieraz* (łącznie) = często, wielokrotnie; *nie raz* (oddzielnie) = nie jeden raz (np. *nie raz, nie dwa*).",
      ua: "Заперечення **nie з числівниками** пишемо **окремо**, напр. *nie pięć, nie osiemdziesiąty*. **Увага.** Винятки: *niejeden* (у значенні «багато / не один») і *niewiele*. Слово *raz* буває іменником або числівником (= *один*). *nieraz* (разом) = часто, неодноразово; *nie raz* (окремо) = не один раз (напр. *nie raz, nie dwa*)."
    },
    items: [
      { pl: "Zasada: **oddzielnie** — *nie pięć*, *nie pierwszy*.", ua: "Правило: **окремо** — *nie pięć*, *nie pierwszy*." },
      { pl: "Wyjątki łącznie: *niejeden*, *niewiele*.", ua: "Винятки разом: *niejeden*, *niewiele*." },
      { pl: "*nieraz* ≠ *nie raz* — sens decyduje.", ua: "*nieraz* ≠ *nie raz* — сенс вирішує." }
    ],
    task: {
      id: "t55-s02-regula",
      type: "single-choice",
      question: {
        pl: "Który zapis jest poprawny według ramki?",
        ua: "Який запис правильний за рамкою?"
      },
      options: [
        { id: "a", label: { pl: "nie pięć · nie osiemdziesiąty", ua: "nie pięć · nie osiemdziesiąty" } },
        { id: "b", label: { pl: "niepięć · nieosiemdziesiąty", ua: "niepięć · nieosiemdziesiąty" } },
        { id: "c", label: { pl: "zawsze tylko łącznie, jak z przymiotnikiem", ua: "завжди лише разом, як із прикметником" } }
      ],
      answer: "a",
      hint: {
        pl: "Przeciwieństwo do *nie* z przymiotnikiem (T43).",
        ua: "Протилежність до *nie* з прикметником (T43)."
      },
      explanation: {
        pl: "Z liczebnikami — **oddzielnie**. Łącznie tylko wyjątki z uwagi.",
        ua: "З числівниками — **окремо**. Разом лише винятки з уваги."
      }
    }
  },

  // 3 — wyjątki
  {
    type: "practice",
    heading: { pl: "Wyjątki · niejeden, niewiele", ua: "Винятки · niejeden, niewiele" },
    formula: "s. 97  ·  Uwaga",
    promptPlace: "before",
    prompt: {
      pl: "*niejeden* = wielu / nie jeden (łącznie). *niewiele* = mało (łącznie). To nie zwykłe przeczenie *nie* + liczba.",
      ua: "*niejeden* = багато / не один (разом). *niewiele* = мало (разом). Це не звичайне заперечення *nie* + число."
    },
    items: [
      { pl: "*Niejeden turysta* = wielu turystów.", ua: "*Niejeden turysta* = багато туристів." },
      { pl: "*Niewiele czasu* = mało czasu.", ua: "*Niewiele czasu* = мало часу." },
      { pl: "Ale: *nie jeden, lecz dwa* → oddzielnie (przeczenie + liczenie).", ua: "Але: *nie jeden, lecz dwa* → окремо (заперечення + лічба)." }
    ],
    task: {
      id: "t55-s03-wyjatki",
      type: "single-choice",
      question: {
        pl: "Który zapis jest wyjątkiem (łącznie)?",
        ua: "Який запис є винятком (разом)?"
      },
      options: [
        { id: "a", label: { pl: "niejeden · niewiele", ua: "niejeden · niewiele" } },
        { id: "b", label: { pl: "nie pięć · nie pierwszy", ua: "nie pięć · nie pierwszy" } },
        { id: "c", label: { pl: "nie sto · nie drugi", ua: "nie sto · nie drugi" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka wymienia tylko dwa wyjątki-liczebniki.",
        ua: "Рамка називає лише два винятки-числівники."
      },
      explanation: {
        pl: "*niejeden* i *niewiele* = łącznie. B i C = zwykła reguła oddzielnie.",
        ua: "*niejeden* і *niewiele* = разом. B і C = звичайне правило окремо."
      }
    }
  },

  // 4 — nieraz / nie raz
  {
    type: "practice",
    heading: { pl: "nieraz czy nie raz?", ua: "nieraz чи nie raz?" },
    formula: "s. 97  ·  raz",
    promptPlace: "before",
    prompt: {
      pl: "*raz* może być rzeczownikiem albo liczebnikiem (= *jeden*). Sens zdania decyduje o zapisie.",
      ua: "*raz* може бути іменником або числівником (= *jeden*). Сенс речення вирішує запис."
    },
    items: [
      { pl: "**nieraz** = często, wielokrotnie → *Nieraz o tym mówiła.*", ua: "**nieraz** = часто, неодноразово → *Nieraz o tym mówiła.*" },
      { pl: "**nie raz** = nie jeden raz (liczenie) → *Mówiła o tym nie raz.* / *nie raz, nie dwa*", ua: "**nie raz** = не один раз (лічба) → *Mówiła o tym nie raz.* / *nie raz, nie dwa*" }
    ],
    task: {
      id: "t55-s04-nieraz",
      type: "single-choice",
      question: {
        pl: "W zdaniu „_____ o tym mówiła” (= często) wpiszesz:",
        ua: "У реченні «_____ o tym mówiła» (= часто) напишеш:"
      },
      options: [
        { id: "a", label: { pl: "Nieraz", ua: "Nieraz" } },
        { id: "b", label: { pl: "Nie raz", ua: "Nie raz" } },
        { id: "c", label: { pl: "NieRaz", ua: "NieRaz" } }
      ],
      answer: "a",
      hint: {
        pl: "Synonim *często* → łącznie.",
        ua: "Синонім *часто* → разом."
      },
      explanation: {
        pl: "*Nieraz* = często. *Nie raz* gdy podkreślasz „nie jeden raz”.",
        ua: "*Nieraz* = часто. *Nie raz* коли підкреслюєш «не один раз»."
      }
    }
  },

  // 5 — tekst observe
  {
    type: "observe",
    heading: { pl: "Tekst · Nie(zwykły) przypadek", ua: "Текст · Nie(zwykły) przypadek" },
    formula: "s. 97  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj tekst. Przy każdym *(nie)* zdecyduj: łącznie czy oddzielnie? Potem dwie kolumny w zeszycie.",
      ua: "Прочитай текст. Біля кожного *(nie)* виріши: разом чи окремо? Потім дві колонки в зошиті."
    },
    visual: vizGhT55("t55-tekst.png", {
      alt: { pl: "Zad. 6 — Nie(zwykły) przypadek", ua: "Завд. 6 — Nie(zwykły) przypadek" },
      place: "after"
    }),
    items: [
      { pl: "Szukaj: liczebniki, przymiotniki, czasowniki, rzeczowniki.", ua: "Шукай: числівники, прикметники, дієслова, іменники." },
      { pl: "Most: *nie* z przymiotnikiem często łącznie (T43); z liczebnikiem — oddzielnie.", ua: "Міст: *nie* з прикметником часто разом (T43); з числівником — окремо." }
    ],
    task: {
      id: "t55-s05-tekst-cel",
      type: "single-choice",
      question: {
        pl: "Cel zadania 6 to:",
        ua: "Мета завдання 6:"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "ustalić zapis *nie* i zrobić dwie kolumny: łącznie / oddzielnie",
            ua: "визначити запис *nie* і зробити дві колонки: разом / окремо"
          }
        },
        { id: "b", label: { pl: "tylko policzyć palmy na rysunku", ua: "лише порахувати пальми на малюнку" } },
        { id: "c", label: { pl: "przetłumaczyć tekst na chiński", ua: "перекласти текст китайською" } }
      ],
      answer: "a",
      hint: {
        pl: "Instrukcja nad tekstem.",
        ua: "Інструкція над текстом."
      },
      explanation: {
        pl: "Dwie kolumny: wyrazy z *nie* łącznie vs oddzielnie.",
        ua: "Дві колонки: слова з *nie* разом vs окремо."
      }
    }
  },

  // 6 — łącznie z tekstu
  {
    type: "practice",
    heading: { pl: "Kolumna · łącznie", ua: "Колонка · разом" },
    formula: "s. 97  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Z tekstu — wyrazy pisane z *nie* **łącznie** (przymiotniki, rzeczowniki, wyjątek *niejeden*…).",
      ua: "З тексту — слова з *nie* **разом** (прикметники, іменники, виняток *niejeden*…)."
    },
    items: [
      { pl: "Szukaj w tekście przymiotników / rzeczowników z *(nie)* oraz wyjątku *niejeden*.", ua: "Шукай у тексті прикметники / іменники з *(nie)* та виняток *niejeden*." },
      { pl: "Lista łącznie — po *Sprawdź*.", ua: "Список «разом» — після *Перевірити*." }
    ],
    task: {
      id: "t55-s06-lacznie",
      type: "multiple-choice",
      question: {
        pl: "Które NA PEWNO piszemy łącznie? Zaznacz wszystkie.",
        ua: "Які НАПЕВНО пишемо разом? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "niezwykły · niebezpieczeństwo · nieprzytomnego", ua: "niezwykły · niebezpieczeństwo · nieprzytomnego" } },
        { id: "b", label: { pl: "niejedna (wyjątek / „wielu”)", ua: "niejedna (виняток / «багато»)" } },
        { id: "c", label: { pl: "nie pięć · nie piętnaście", ua: "nie pięć · nie piętnaście" } },
        { id: "d", label: { pl: "nierozważni · nieszczęścia · niefrasobliwych", ua: "nierozważni · nieszczęścia · niefrasobliwych" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "C to liczebniki — reguła oddzielnie.",
        ua: "C — числівники — правило окремо."
      },
      explanation: {
        pl: "Klucz łącznie m.in.: niezwykły, nierozważni, niejedna, niebezpieczeństwo, nieprzytomnego, nierozsądny, nieświadomy, nieszczęścia, niefrasobliwych. C (*nie pięć / nie piętnaście*) = oddzielnie.",
        ua: "Ключ разом зокрема: niezwykły, nierozważni, niejedna… C (*nie pięć / nie piętnaście*) = окремо."
      }
    }
  },

  // 7 — oddzielnie z tekstu
  {
    type: "practice",
    heading: { pl: "Kolumna · oddzielnie", ua: "Колонка · окремо" },
    formula: "s. 97  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Oddzielnie: przeczenie + liczebnik **oraz** przeczenie + czasownik / stopień z *nie* w funkcji przeczenia (*nie sądził*, *nie najatrakcyjniejszym* — tu według sensu zadania).",
      ua: "Окремо: заперечення + числівник **і** заперечення + дієслово / ступінь із *nie* у функції заперечення."
    },
    items: [
      { pl: "Oddzielnie: przeczenie + liczebnik oraz przeczenie + czasownik.", ua: "Окремо: заперечення + числівник та заперечення + дієслово." },
      { pl: "Lista oddzielnie — po *Sprawdź*.", ua: "Список «окремо» — після *Перевірити*." }
    ],
    task: {
      id: "t55-s07-oddzielnie",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy z tekstu są **oddzielne**? Zaznacz wszystkie pewne.",
        ua: "Які записи з тексту **окремі**? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "nie pierwszy", ua: "nie pierwszy" } },
        { id: "b", label: { pl: "nie pięć · nie piętnaście", ua: "nie pięć · nie piętnaście" } },
        { id: "c", label: { pl: "niezwykły (tytuł)", ua: "niezwykły (заголовок)" } },
        { id: "d", label: { pl: "nie sądził", ua: "nie sądził" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*niezwykły* = przymiotnik łącznie. Liczebniki i czasownik z przeczeniem — oddzielnie.",
        ua: "*niezwykły* = прикметник разом. Числівники і дієслово із запереченням — окремо."
      },
      explanation: {
        pl: "Klucz oddzielnie: nie pierwszy, nie pięć, nie piętnaście, nie sądził (+ nie najatrakcyjniejszym). *niezwykły* = łącznie.",
        ua: "Ключ окремо: nie pierwszy, nie pięć, nie piętnaście, nie sądził. *niezwykły* = разом."
      }
    }
  },

  // 8 — quiz
  {
    type: "practice",
    heading: { pl: "Quiz · mieszanka", ua: "Квіз · мішанина" },
    formula: "s. 97  ·  sprawdzenie",
    promptPlace: "before",
    prompt: {
      pl: "Połącz regułę z T55 i most z T43 (*nie* z przymiotnikiem).",
      ua: "Поєднай правило з T55 і міст із T43 (*nie* з прикметником)."
    },
    task: {
      id: "t55-s08-quiz",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy są poprawne? Zaznacz wszystkie.",
        ua: "Які записи правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "nie drugi · nie sto", ua: "nie drugi · nie sto" } },
        { id: "b", label: { pl: "niejeden · niewiele", ua: "niejeden · niewiele" } },
        { id: "c", label: { pl: "niebezpieczny (przymiotnik łącznie)", ua: "niebezpieczny (прикметник разом)" } },
        { id: "d", label: { pl: "niepięć (zawsze łącznie z liczbą)", ua: "niepięć (завжди разом із числом)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Liczebnik ≠ przymiotnik.",
        ua: "Числівник ≠ прикметник."
      },
      explanation: {
        pl: "A oddzielnie (liczebniki). B wyjątki. C przymiotnik łącznie (T43). D błędne.",
        ua: "A окремо (числівники). B винятки. C прикметник разом (T43). D помилкове."
      }
    }
  },

  // 9 — wypowiedź / HW
  {
    type: "practice",
    heading: { pl: "Do zeszytu · dwie kolumny", ua: "У зошит · дві колонки" },
    formula: "s. 97  ·  praca własna",
    promptPlace: "before",
    prompt: {
      pl: "Przepisz z tekstu pełne listy do zeszytu. Potem napisz 2–3 zdania z *nie* + liczebnik i jedno z *niejeden* albo *nieraz*.",
      ua: "Перепиши з тексту повні списки в зошит. Потім напиши 2–3 речення з *nie* + числівник і одне з *niejeden* або *nieraz*."
    },
    items: [
      { pl: "Do zeszytu: dwie kolumny z tekstu — najpierw sam, potem porównaj z wyjaśnieniem po *Sprawdź* na poprzednich ekranach.", ua: "У зошит: дві колонки з тексту — спочатку сам, потім порівняй із поясненням після *Перевірити* на попередніх екранах." },
      { pl: "Tu napisz własne zdania (nie kopiuj klucza z góry — go nie ma).", ua: "Тут напиши власні речення." }
    ],
    task: {
      id: "t55-s09-open",
      type: "open-answer",
      question: {
        pl: "Napisz jedno zdanie z *nie* + liczebnik (oddzielnie) i jedno z *niejeden* albo *nieraz*.",
        ua: "Напиши одне речення з *nie* + числівник (окремо) і одне з *niejeden* або *nieraz*."
      },
      hint: {
        pl: "Np. *To nie pierwszy raz.* · *Niejeden uczeń to wie.* / *Nieraz o tym mówiliśmy.*",
        ua: "Напр. *To nie pierwszy raz.* · *Niejeden uczeń to wie.* / *Nieraz o tym mówiliśmy.*"
      },
      explanation: {
        pl: "Sprawdź: przy liczbie/kolejności — spacja po *nie*; przy *niejeden/nieraz* — łącznie.",
        ua: "Перевір: при числі/порядку — пробіл після *nie*; при *niejeden/nieraz* — разом."
      }
    }
  },

  // 10 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T53–T55", ua: "Підсумок · T53–T55" },
    formula: "s. 97  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Cały temat liczebnika zamknięty: definicja (T53) → ćwiczenia (T54) → *nie* (T55).",
      ua: "Уся тема числівника закрита: означення (T53) → вправи (T54) → *nie* (T55)."
    },
    items: [
      { pl: "T53: *ile?* / *który z kolei?* · główne / porządkowe", ua: "T53: *ile?* / *który z kolei?* · головні / порядкові" },
      { pl: "T54: hieroglify · oaza · zapis · odmiana", ua: "T54: ієрогліфи · оаза · запис · відміна" },
      { pl: "T55: *nie* oddzielnie · wyjątki · tekst", ua: "T55: *nie* окремо · винятки · текст" }
    ],
    task: {
      id: "t55-s10-domkniecie",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: *nie* z liczebnikiem piszemy zwykle oddzielnie, a z przymiotnikiem — zwykle łącznie.",
        ua: "Правда чи ні: *nie* з числівником пишемо зазвичай окремо, а з прикметником — зазвичай разом."
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Неправда" } }
      ],
      answer: true,
      hint: {
        pl: "T55 vs T43.",
        ua: "T55 vs T43."
      },
      explanation: {
        pl: "Prawda. Liczebnik: oddzielnie (wyjątki *niejeden, niewiele*). Przymiotnik: łącznie (wyjątki *wcale/bynajmniej*).",
        ua: "Правда. Числівник: окремо (винятки *niejeden, niewiele*). Прикметник: разом (винятки *wcale/bynajmniej*)."
      }
    }
  }
]};
