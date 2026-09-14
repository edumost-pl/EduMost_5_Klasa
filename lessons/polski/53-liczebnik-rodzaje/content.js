function emT53(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T53 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT53(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T53 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 97  ·  Lekcja 53  ·  liczebnik",
    promptPlace: "before",
    prompt: {
      pl: "Temat podręcznika: *Liczebnik; nie z liczebnikiem* — dziś **pierwsza część**: definicja, e-mail Wiktora, wniosek *ile? / który z kolei?*, podział na **główne** i **porządkowe**. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Тема підручника: *Liczebnik; nie z liczebnikiem* — сьогодні **перша частина**: означення, e-mail Віктора, висновок *ile? / który z kolei?*, поділ на **główne** і **porządkowe**. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "powiem, czym jest *liczebnik*;", ua: "скажу, що таке *liczebnik*;" },
      { pl: "wyróżnię liczebniki w e-mailu Wiktora;", ua: "виділю числівники в e-mail Віктора;" },
      { pl: "uzupełnię wniosek: *ile?* vs *który z kolei?*;", ua: "доповню висновок: *ile?* vs *który z kolei?*;" },
      { pl: "rozróżnię liczebniki główne i porządkowe.", ua: "розрізню головні й порядкові числівники." }
    ],
    task: {
      id: "t53-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest celem dzisiejszej lekcji? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО є метою сьогоднішнього уроку? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Definicja liczebnika i pytania *ile? / który z kolei?*", ua: "Означення числівника і питання *ile? / który z kolei?*" } },
        { id: "b", label: { pl: "Podział: główne vs porządkowe", ua: "Поділ: główні vs порядкові" } },
        { id: "c", label: { pl: "Już dziś cała ortografia *nie* z liczebnikiem", ua: "Уже сьогодні вся орфографія *nie* з числівником" } },
        { id: "d", label: { pl: "Praca z e-mailem Wiktora z Egiptu", ua: "Робота з e-mail Віктора з Єгипту" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Nie* z liczebnikiem = lekcja 55.",
        ua: "*Nie* з числівником = урок 55."
      },
      explanation: {
        pl: "Dziś A, B, D. Ortografia *nie* — T55; ćwiczenia z hieroglifami/oazą — T54.",
        ua: "Сьогодні A, B, D. Орфографія *nie* — T55; вправи з ієрогліфами/оазою — T54."
      }
    }
  },

  // 2 — burza mózgów
  {
    type: "observe",
    heading: { pl: "Burza mózgów · co to za wyrazy?", ua: "Мозковий штурм · що це за слова?" },
    formula: "s. 97  ·  start",
    promptPlace: "before",
    prompt: {
      pl: "Pomyśl: *dwa*, *piętnaście*, *trzeci*, *setny*. Co one mają wspólnego? Na jakie pytania odpowiadają?",
      ua: "Подумай: *dwa*, *piętnaście*, *trzeci*, *setny*. Що спільного? На які питання відповідають?"
    },
    items: [
      { pl: "Jedne mówią **ile** czegoś jest.", ua: "Одні кажуть **скільки** чогось є." },
      { pl: "Inne mówią **który z kolei**.", ua: "Інші кажуть **який за порядком**." },
      { pl: "Razem należą do części mowy: **liczebnik**.", ua: "Разом належать до частини мови: **числівник**." }
    ],
    task: {
      id: "t53-s02-burza",
      type: "single-choice",
      question: {
        pl: "Która para NA PEWNO należy do tej samej „rodziny” co *dwa* i *trzeci*?",
        ua: "Яка пара НАПЕВНО з тієї ж «родини», що *dwa* і *trzeci*?"
      },
      options: [
        { id: "a", label: { pl: "pięć · piąty", ua: "pięć · piąty" } },
        { id: "b", label: { pl: "biegać · biegnący", ua: "biegać · biegnący" } },
        { id: "c", label: { pl: "stół · stołowy", ua: "stół · stołowy" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj liczby / kolejności.",
        ua: "Шукай числа / порядку."
      },
      explanation: {
        pl: "*pięć* (ile?) i *piąty* (który z kolei?) = liczebniki. B = czasownik/imiesłów, C = rzeczownik/przymiotnik.",
        ua: "*pięć* (скільки?) і *piąty* (який за порядком?) = числівники. B = дієслово/дієприкметник, C = іменник/прикметник."
      }
    }
  },

  // 3 — e-mail
  {
    type: "observe",
    heading: { pl: "Czytamy · e-mail Wiktora", ua: "Читаємо · e-mail Віктора" },
    formula: "s. 97  ·  Hieroglify",
    promptPlace: "before",
    prompt: {
      pl: "Wiktor pisze z Egiptu. Przeczytaj e-mail (kliknij skan, by powiększyć). Zaznacz w myślach wyrazy oznaczające **liczbę** lub **kolejność**.",
      ua: "Віктор пише з Єгипту. Прочитай e-mail (клікни скан, щоб збільшити). Познач у думках слова зі значенням **числа** або **порядку**."
    },
    visual: vizGhT53("t53-email.png", {
      alt: { pl: "E-mail Wiktora: Hieroglify", ua: "E-mail Віктора: Hieroglify" },
      place: "after"
    }),
    items: [
      { pl: "Szukaj wyrazów o **liczbie** i o **kolejności**.", ua: "Шукай слова про **число** і про **порядок**." },
      { pl: "Nazwy miejsc i rzeczy (piramida, muzeum…) to nie liczebniki.", ua: "Назви місць і речей (piramida, muzeum…) — не числівники." },
      { pl: "Pełna lista — po *Sprawdź*.", ua: "Повний список — після *Перевірити*." }
    ],
    task: {
      id: "t53-s03-email-find",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy z e-maila NA PEWNO są liczebnikami? Zaznacz wszystkie.",
        ua: "Які слова з e-mail НАПЕВНО числівники? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "dwudziesty · pierwsze · czwarty", ua: "dwudziesty · pierwsze · czwarty" } },
        { id: "b", label: { pl: "dwa · trzydzieści · trzy", ua: "dwa · trzydzieści · trzy" } },
        { id: "c", label: { pl: "piramida · muzeum · Egipt", ua: "piramida · muzeum · Egipt" } },
        { id: "d", label: { pl: "piętnastu · czterystu… · tysiąc…", ua: "piętnastu · czterystu… · tysiąc…" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Liczebnik = liczba lub kolejność. Nazwy miejsc / rzeczy odpadają.",
        ua: "Числівник = число або порядок. Назви місць / речей відпадають."
      },
      explanation: {
        pl: "Klucz: dwudziesty, pierwsze, czwarty, dwa, trzydzieści, trzy, piętnastu, czterystu…, tysiąc… = liczebniki. C (piramida, muzeum, Egipt) — nie.",
        ua: "Ключ: dwudziesty, pierwsze, czwarty, dwa, trzydzieści, trzy, piętnastu, czterystu…, tysiąc… = числівники. C — ні."
      }
    }
  },

  // 4 — klasyfikacja z e-maila
  {
    type: "practice",
    heading: { pl: "Główne czy porządkowe?", ua: "Головні чи порядкові?" },
    formula: "s. 97  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Podziel liczebniki z e-maila: **główne** (*ile?*) i **porządkowe** (*który z kolei?*).",
      ua: "Поділи числівники з e-mail: **головні** (*ile?*) і **порядкові** (*który z kolei?*)."
    },
    items: [
      { pl: "Podziel liczebniki z e-maila na dwie grupy: *ile?* vs *który z kolei?*", ua: "Поділи числівники з e-mail на дві групи: *ile?* vs *który z kolei?*" },
      { pl: "Klucz — po *Sprawdź*.", ua: "Ключ — після *Перевірити*." }
    ],
    task: {
      id: "t53-s04-podzial",
      type: "single-choice",
      question: {
        pl: "Który zestaw jest poprawny?",
        ua: "Який набір правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Porządkowe: *dwudziesty, pierwsze, czwarty* · główne: *dwa, trzydzieści, trzy…*",
            ua: "Порядкові: *dwudziesty, pierwsze, czwarty* · головні: *dwa, trzydzieści, trzy…*"
          }
        },
        {
          id: "b",
          label: {
            pl: "Wszystkie wyrazy z e-maila to liczebniki porządkowe.",
            ua: "Усі слова з e-mail — порядкові числівники."
          }
        },
        {
          id: "c",
          label: {
            pl: "*dwudziesty* i *czwarty* to główne, bo mówią o dniach.",
            ua: "*dwudziesty* і *czwarty* — головні, бо про дні."
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "*dwudziesty dzień* = który z kolei? Nie: ile dni.",
        ua: "*dwudziesty dzień* = який за порядком? Не: скільки днів."
      },
      explanation: {
        pl: "Klucz — porządkowe: *dwudziesty, pierwsze, czwarty*. Główne: *dwa, trzydzieści, piętnastu, trzy, czterystu…, tysiąc…*.",
        ua: "Ключ — порядкові: *dwudziesty, pierwsze, czwarty*. Головні: *dwa, trzydzieści, piętnastu, trzy, czterystu…, tysiąc…*."
      }
    }
  },

  // 5 — wniosek
  {
    type: "practice",
    heading: { pl: "Uzupełnij wniosek", ua: "Доповни висновок" },
    formula: "s. 97  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Wzorzec z podręcznika (niebieski zapis). Uzupełnij luki w myślach, potem sprawdź.",
      ua: "Зразок із підручника (синій запис). Доповни пропуски в думках, потім перевір."
    },
    visual: vizGhT53("t53-wniosek.png", {
      alt: { pl: "Zad. 1b — uzupełnij wniosek", ua: "Завд. 1b — доповни висновок" },
      place: "after"
    }),
    items: [
      { pl: "Wyrazy oznaczające **liczbę** → pytanie ***ile?***", ua: "Слова зі значенням **числа** → питання ***ile?***" },
      { pl: "Wyrazy oznaczające **kolejność** → pytanie ***który (która, które) z kolei?***", ua: "Слова зі значенням **порядку** → питання ***który … z kolei?***" }
    ],
    task: {
      id: "t53-s05-wniosek",
      type: "single-choice",
      question: {
        pl: "Które uzupełnienie wniosku jest poprawne?",
        ua: "Яке доповнення висновку правильне?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "liczbę → *ile?* · kolejność → *który z kolei?*",
            ua: "число → *ile?* · порядок → *który z kolei?*"
          }
        },
        {
          id: "b",
          label: {
            pl: "liczbę → *który z kolei?* · kolejność → *ile?*",
            ua: "число → *który z kolei?* · порядок → *ile?*"
          }
        },
        {
          id: "c",
          label: {
            pl: "oba typy odpowiadają tylko na *co?*",
            ua: "обидва типи відповідають лише на *co?*"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "*dwa stoły* — ile? · *drugi uczeń* — który z kolei?",
        ua: "*dwa stoły* — ile? · *drugi uczeń* — który z kolei?"
      },
      explanation: {
        pl: "Liczba → *ile?* Kolejność → *który z kolei?*",
        ua: "Число → *ile?* Порядок → *który z kolei?*"
      }
    }
  },

  // 6 — definicja (concept)
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · liczebnik", ua: "Zapamiętaj · числівник" },
    formula: "s. 97  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Ramka do zeszytu. Przeczytaj PL, potem UA. Skan — kliknij, by powiększyć.",
      ua: "Рамка в зошит. Прочитай PL, потім UA. Скан — клікни, щоб збільшити."
    },
    visual: vizGhT53("t53-definicja.png", {
      alt: { pl: "Ramka: definicja liczebnika", ua: "Рамка: означення числівника" },
      place: "after"
    }),
    text: {
      pl: "**Liczebnik** to odmienna część mowy oznaczająca **liczbę** lub **kolejność**. Odpowiada na pytania: *ile? który (która, które) z kolei?* Przykłady: *dwa* (stoły), *sześćset* (stołów), *pół* (bułki), *dwoje* (dzieci), *kilka* (samochodów); *drugi*, *czwarty* (uczeń). Liczebnik **tworzy związki wyrazowe z rzeczownikiem**.",
      ua: "**Числівник** (*liczebnik*) — змінна частина мови, що означає **число** або **порядок**. Питання: *скільки? який (яка, яке) за порядком?* Приклади: *dwa, sześćset, pół, dwoje, kilka*; *drugi, czwarty*. Числівник **утворює словосполучення з іменником**."
    },
    items: [
      { pl: "Odmienna część mowy → jak rzeczownik / przymiotnik — zmienia formę.", ua: "Змінна частина мови → як іменник / прикметник — змінює форму." },
      { pl: "Dwa sensy: **ile?** albo **który z kolei?**", ua: "Два сенси: **скільки?** або **який за порядком?**" },
      { pl: "Zawsze w związku z rzeczownikiem: *dwa stoły*, *czwarty uczeń*.", ua: "Завжди в сполученні з іменником: *dwa stoły*, *czwarty uczeń*." }
    ],
    task: {
      id: "t53-s06-definicja",
      type: "single-choice",
      question: {
        pl: "Liczebnik NA PEWNO:",
        ua: "Числівник НАПЕВНО:"
      },
      options: [
        { id: "a", label: { pl: "oznacza liczbę lub kolejność i łączy się z rzeczownikiem", ua: "означає число або порядок і сполучається з іменником" } },
        { id: "b", label: { pl: "opisuje tylko cechy (jak przymiotnik)", ua: "описує лише ознаки (як прикметник)" } },
        { id: "c", label: { pl: "nigdy się nie odmienia", ua: "ніколи не відмінюється" } }
      ],
      answer: "a",
      hint: {
        pl: "Patrz pierwsza i ostatnia linia ramki.",
        ua: "Дивись перший і останній рядок рамки."
      },
      explanation: {
        pl: "Definicja: liczba/kolejność + związki z rzeczownikiem. To część odmienna (z wyjątkami jak *pół* — o tym w ramce rodzajów).",
        ua: "Означення: число/порядок + сполучення з іменником. Це змінна частина (з винятками як *pół* — у рамці видів)."
      }
    }
  },

  // 7 — główne / porządkowe ramka
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · główne i porządkowe", ua: "Zapamiętaj · головні й порядкові" },
    formula: "s. 97  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Druga ramka: podział + uwagi o *tysiąc / milion / miliard / pół*.",
      ua: "Друга рамка: поділ + уваги про *tysiąc / milion / miliard / pół*."
    },
    visual: vizGhT53("t53-rodzaje.png", {
      alt: { pl: "Ramka: liczebniki główne i porządkowe", ua: "Рамка: головні й порядкові числівники" },
      place: "after"
    }),
    text: {
      pl: "Wśród liczebników wyróżniamy m.in.: **liczebniki główne** — konkretna liczba całkowita, pytanie ***ile?***, odmiana przez przypadki i rodzaje; **liczebniki porządkowe** — kolejność, pytanie ***który (która, które) z kolei?***, odmiana przez przypadki, liczby i rodzaje. **Uwaga.** *tysiąc, milion, miliard* nie odmieniają się przez rodzaje. *pół* w ogóle się nie odmienia.",
      ua: "Серед числівників вирізняємо зокрема: **головні** — конкретне ціле число, питання ***ile?***, відміна за відмінками й родами; **порядкові** — порядок, питання ***który … z kolei?***, відміна за відмінками, числами й родами. **Увага.** *tysiąc, milion, miliard* не змінюються за родами. *pół* узагалі не відмінюється."
    },
    items: [
      { pl: "Główne ≈ українські кількісні (*два, п’ятнадцять*).", ua: "Головні ≈ кількісні (*два, п’ятнадцять*)." },
      { pl: "Porządkowe ≈ порядкові (*другий, четвертий*).", ua: "Порядкові ≈ порядкові (*другий, четвертий*)." },
      { pl: "*pół* — wyjątek: nieodmienny.", ua: "*pół* — виняток: невідмінюваний." }
    ],
    task: {
      id: "t53-s07-rodzaje",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: liczebnik *pół* odmienia się przez rodzaje jak *dwa*.",
        ua: "Правда чи ні: числівник *pół* відмінюється за родами як *dwa*."
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Неправда" } }
      ],
      answer: false,
      hint: {
        pl: "Ostatnie zdanie ramki: *Uwaga*.",
        ua: "Останнє речення рамки: *Uwaga*."
      },
      explanation: {
        pl: "Fałsz. *pół* w ogóle się nie odmienia. *tysiąc / milion / miliard* — bez rodzajów.",
        ua: "Неправда. *pół* узагалі не відмінюється. *tysiąc / milion / miliard* — без родів."
      }
    }
  },

  // 8 — szybki quiz
  {
    type: "practice",
    heading: { pl: "Szybki quiz", ua: "Швидкий квіз" },
    formula: "s. 97  ·  sprawdzenie",
    promptPlace: "before",
    prompt: {
      pl: "Zastosuj obie ramki. Jedna poprawna odpowiedź w każdym pytaniu — tu zestaw.",
      ua: "Застосуй обидві рамки. Одна правильна відповідь у кожному питанні — тут набір."
    },
    task: {
      id: "t53-s08-quiz",
      type: "multiple-choice",
      question: {
        pl: "Które stwierdzenia są prawdziwe? Zaznacz wszystkie.",
        ua: "Які твердження правдиві? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "*sześćset stołów* — liczebnik główny (*ile?*)", ua: "*sześćset stołów* — головний (*ile?*)" } },
        { id: "b", label: { pl: "*czwarty uczeń* — liczebnik porządkowy", ua: "*czwarty uczeń* — порядковий" } },
        { id: "c", label: { pl: "*ładny stół* — też liczebnik, bo opisuje stół", ua: "*ładny stół* — теж числівник, бо описує стіл" } },
        { id: "d", label: { pl: "Liczebnik tworzy związek z rzeczownikiem", ua: "Числівник утворює сполучення з іменником" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*ładny* = przymiotnik (cecha), nie liczba.",
        ua: "*ładny* = прикметник (ознака), не число."
      },
      explanation: {
        pl: "A, B, D zgodne z ramkami. C to przymiotnik.",
        ua: "A, B, D згідно з рамками. C — прикметник."
      }
    }
  },

  // 9 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T53", ua: "Підсумок · T53" },
    formula: "s. 97  ·  dalej T54",
    promptPlace: "before",
    prompt: {
      pl: "Dziś masz definicję i podział. Jutro (T54): hieroglify, oaza, zapis słowny, odmiana.",
      ua: "Сьогодні маєш означення і поділ. Далі (T54): ієрогліфи, оаза, запис словами, відмінювання."
    },
    items: [
      { pl: "**Liczebnik** = liczba lub kolejność; pytania *ile?* / *który z kolei?*", ua: "**Числівник** = число або порядок; *ile?* / *który z kolei?*" },
      { pl: "**Główne** vs **porządkowe**; uwagi: *tysiąc, milion, miliard, pół*.", ua: "**Головні** vs **порядкові**; уваги: *tysiąc, milion, miliard, pół*." },
      { pl: "E-mail Wiktora = bank przykładów do zeszytu.", ua: "E-mail Віктора = банк прикладів у зошит." }
    ],
    task: {
      id: "t53-s09-dalej",
      type: "single-choice",
      question: {
        pl: "Co robisz w lekcji 54?",
        ua: "Що робиш у уроці 54?"
      },
      options: [
        { id: "a", label: { pl: "Ćwiczenia: hieroglify, oaza, zapis słowny, odmiana", ua: "Вправи: ієрогліфи, оаза, запис словами, відмінювання" } },
        { id: "b", label: { pl: "Tylko ortografię *nie* z liczebnikiem", ua: "Лише орфографію *nie* з числівником" } },
        { id: "c", label: { pl: "Czytanie *Pana Tadeusza*", ua: "Читання *Пана Тадеуша*" } }
      ],
      answer: "a",
      hint: {
        pl: "Jump: T54.",
        ua: "Jump: T54."
      },
      explanation: {
        pl: "T54 = ćwiczenia i odmiana. *Nie* = T55.",
        ua: "T54 = вправи і відмінювання. *Nie* = T55."
      }
    }
  }
]};
