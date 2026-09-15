function emT66(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T66 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT66(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T66 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 132–133  ·  Lekcja 66  ·  cząstki by",
    promptPlace: "before",
    prompt: {
      pl: "Druga część bloku: **ruchome** cząstki *-bym, -byś, -by, -byśmy, -byście* — **łącznie** lub **rozdzielnie**. Tryby znałeś z T65. Dla 🇺🇦: w ukraińskim *би/б* **zawsze osobno** — w polskim często **doklejone**!",
      ua: "Друга частина блоку: **рухомі** частки *-bym, -byś, -by…* — **разом** або **окремо**. Способи — з T65. У українській *би/б* **завжди окремо** — у польській часто **приклеєні**!"
    },
    items: [
      { pl: "rozpoznam, kiedy *by* jest ruchome;", ua: "впізнаю, коли *by* рухоме;" },
      { pl: "zapiszę łącznie z formą osobową;", ua: "запишу разом з особовою формою;" },
      { pl: "zapiszę rozdzielnie z *można/trzeba/warto*, bezokolicznikiem i *-no/-to*.", ua: "запишу окремо з *można/trzeba/warto*, інфінітивом і *-no/-to*." }
    ],
    task: {
      id: "t66-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Pisownię łącznie: *zrobiłbym*", ua: "Правопис разом: *zrobiłbym*" } },
        { id: "b", label: { pl: "Pisownię rozdzielnie: *warto by*, *czytać by*", ua: "Правопис окремо: *warto by*, *czytać by*" } },
        { id: "c", label: { pl: "Tylko definicję trzech trybów od zera (to T65)", ua: "Лише означення трьох способів з нуля (це T65)" } },
        { id: "d", label: { pl: "Dialog z poprawnymi formami czasowników", ua: "Діалог із правильними формами дієслів" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T65 = nazwy trybów. Dziś = ortografia *by*.",
        ua: "T65 = назви способів. Сьогодні = орфографія *by*."
      },
      explanation: {
        pl: "A, B, D. C było w T65.",
        ua: "A, B, D. C було в T65."
      }
    }
  },

  // 2 UA contrast bridge
  {
    type: "observe",
    heading: { pl: "Mostek UA · dlaczego to trudne?", ua: "Місток UA · чому це складно?" },
    formula: "s. 132  ·  porównanie PL–UA",
    promptPlace: "before",
    prompt: {
      pl: "W ukraińskim: *я б написав*, *вона б читала* — *б/би* **zawsze osobno**. W polskim często: *napisałbym*, *czytałaby*.",
      ua: "Українською: *я б написав*, *вона б читала* — *б/би* **завжди окремо**. Польською часто: *napisałbym*, *czytałaby*."
    },
    items: [
      { pl: "PL *poszedłbym* ≈ UA *я б пішов* (nie *poszedł bym* przy formie osobowej po czasowniku).", ua: "PL *poszedłbym* ≈ UA *я б пішов*." },
      { pl: "Ale: *Ja bym to zrobił* — *by* **przed** czasownikiem → **rozdzielnie**.", ua: "Але: *Ja bym to zrobił* — *by* **перед** дієсловом → **окремо**." },
      { pl: "*można by* ≈ UA *можна б* — w obu językach osobno.", ua: "*można by* ≈ *можна б* — в обох мовах окремо." }
    ],
    task: {
      id: "t66-s02-mostek",
      type: "single-choice",
      question: {
        pl: "Który zapis jest typowy dla polszczyzny (forma osobowa + *by* zaraz po czasowniku)?",
        ua: "Який запис типовий для польської (особова форма + *by* одразу після дієслова)?"
      },
      options: [
        { id: "a", label: { pl: "napisałbym", ua: "napisałbym" } },
        { id: "b", label: { pl: "napisał bym (jak zawsze w UA)", ua: "napisał bym (як завжди в UA)" } },
        { id: "c", label: { pl: "napisaćbym (z bezokolicznikiem łącznie)", ua: "napisaćbym (з інфінітивом разом)" } }
      ],
      answer: "a",
      hint: {
        pl: "Osobowa forma + cząstka zaraz po niej = łącznie.",
        ua: "Особова форма + частка одразу після неї = разом."
      },
      explanation: {
        pl: "*napisałbym* łącznie. *napisać by* rozdzielnie. Nie kopiuj ślepo UA *написав би* → literówka *napisał bym*.",
        ua: "*napisałbym* разом. Не копіюй сліпо UA *написав би* як *napisał bym*."
      }
    }
  },

  // 3 concept ramka
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · ruchome cząstki by", ua: "Zapamiętaj · рухомі частки by" },
    formula: "s. 132  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Cząstki są **ruchome**: *czytałbyś* albo *byś czytał*. Skan reguł — kliknij.",
      ua: "Частки **рухомі**: *czytałbyś* або *byś czytał*. Скан правил — клікни."
    },
    visual: vizGhT66("t66-by-ramka.jpg", {
      alt: { pl: "Ramka: łącznie / rozdzielnie z by", ua: "Рамка: разом / окремо з by" },
      place: "after"
    }),
    text: {
      pl: "Cząstki **-bym, -byś, -by, -byśmy, -byście** są **ruchome**. Piszemy je **łącznie** z osobowymi formami czasownika (*czytałaby, mówiłbym*). **Rozdzielnie** z bezokolicznikiem (*czytać by*), z *można, trzeba, warto* (*można by*) oraz z formami *-no/-to* (*czytano by*). Także gdy *by* stoi **przed** formą osobową (*byś czytał*).",
      ua: "Частки **-bym, -byś, -by…** **рухомі**. **Разом** з особовими формами (*czytałaby, mówiłbym*). **Окремо** з інфінітивом (*czytać by*), з *można, trzeba, warto* і з *-no/-to* (*czytano by*). Також коли *by* стоїть **перед** особовою формою (*byś czytał*)."
    },
    items: [
      { pl: "🟢 Łącznie: *zrobiłbym, napisałabyś, poszlibyśmy*.", ua: "🟢 Разом: *zrobiłbym, napisałabyś…*." },
      { pl: "🔴 Rozdzielnie: *pójść by · warto by · zrobiono by · Ja bym…*.", ua: "🔴 Окремо: *pójść by · warto by · zrobiono by · Ja bym…*." },
      { pl: "Spójniki: *gdyby, żeby, aby* — łącznie (to inne wyrazy).", ua: "Сполучники: *gdyby, żeby, aby* — разом (інші слова)." }
    ],
    task: {
      id: "t66-s03-regula",
      type: "single-choice",
      question: {
        pl: "Który zapis jest poprawny?",
        ua: "Який запис правильний?"
      },
      options: [
        { id: "a", label: { pl: "warto by · można by · trzeba by", ua: "warto by · można by · trzeba by" } },
        { id: "b", label: { pl: "wartoby · możnaby · trzebaby", ua: "wartoby · możnaby · trzebaby" } },
        { id: "c", label: { pl: "zrobił bym (przy *zrobił* + *bym* zaraz po nim)", ua: "zrobił bym (коли *bym* одразу після *zrobił*)" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: *można, trzeba, warto* → rozdzielnie.",
        ua: "Рамка: *można, trzeba, warto* → окремо."
      },
      explanation: {
        pl: "A poprawne. C błędne: ma być *zrobiłbym* łącznie.",
        ua: "A правильне. C хибне: має бути *zrobiłbym* разом."
      }
    }
  },

  // 4 tabela quick
  {
    type: "practice",
    heading: { pl: "Trening · łącznie czy rozdzielnie?", ua: "Тренування · разом чи окремо?" },
    formula: "s. 132  ·  ortografia",
    promptPlace: "before",
    prompt: {
      pl: "Szybki wybór. Pamiętaj o pułapce UA (*би* osobno ≠ zawsze tak w PL).",
      ua: "Швидкий вибір. Пам’ятай пастку UA (*би* окремо ≠ завжди так у PL)."
    },
    items: [
      { pl: "*poszlibyśmy* · *gdyby* · *aby* → łącznie.", ua: "*poszlibyśmy* · *gdyby* · *aby* → разом." },
      { pl: "*sprzątnięto by* · *przeczytać by* → rozdzielnie.", ua: "*sprzątnięto by* · *przeczytać by* → окремо." }
    ],
    task: {
      id: "t66-s04-quiz",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy są poprawne? Zaznacz wszystkie.",
        ua: "Які записи правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "czytałaby · mówiłbym", ua: "czytałaby · mówiłbym" } },
        { id: "b", label: { pl: "czytać by · czytano by", ua: "czytać by · czytano by" } },
        { id: "c", label: { pl: "czytał by (gdy *by* zaraz po *czytał*)", ua: "czytał by (коли *by* одразу після *czytał*)" } },
        { id: "d", label: { pl: "byś czytał (cząstka przed czasownikiem)", ua: "byś czytał (частка перед дієсловом)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Po osobowej formie łącznie; przed nią / z *-no* osobno.",
        ua: "Після особової — разом; перед нею / з *-no* — окремо."
      },
      explanation: {
        pl: "A, B, D. C błędne → *czytałby*.",
        ua: "A, B, D. C хибне → *czytałby*."
      }
    }
  },

  // 5 zad 5
  {
    type: "practice",
    heading: { pl: "Zad. 5 · przepisz z by", ua: "Завд. 5 · перепиши з by" },
    formula: "s. 132–133  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Przepisz tekst, zapisując *(bym)/(by)* łącznie lub rozdzielnie. Skan — kliknij.",
      ua: "Перепиши текст, записуючи *(bym)/(by)* разом або окремо. Скан — клікни."
    },
    visual: vizGhT66("t66-zad5.png", {
      alt: { pl: "Tekst: Chciał (bym)… dokładnie (bym)…", ua: "Текст: Chciał (bym)… dokładnie (bym)…" },
      place: "after"
    }),
    items: [
      { pl: "Patrz: czy *by* stoi **zaraz po** formie osobowej, czy po przysłówku / przed czasownikiem.", ua: "Дивись: чи *by* стоїть **одразу після** особової форми, чи після прислівника / перед дієсловом." },
      { pl: "Klucz — po *Sprawdź*; najpierw sam w zeszycie.", ua: "Ключ — після *Sprawdź*; спочатку сам у зошиті." }
    ],
    task: {
      id: "t66-s05-tekst",
      type: "single-choice",
      question: {
        pl: "Który komplet zapisów jest poprawny?",
        ua: "Який комплект записів правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Chciałbym · przenosiłoby · przyjrzałbym · dokładnie bym prześledził",
            ua: "Chciałbym · przenosiłoby · przyjrzałbym · dokładnie bym prześledził"
          }
        },
        {
          id: "b",
          label: {
            pl: "Chciał bym · przenosiło by · przyjrzał bym · dokładniebym",
            ua: "Chciał bym · przenosiło by · przyjrzał bym · dokładniebym"
          }
        },
        {
          id: "c",
          label: {
            pl: "Chciałbym · przenosiłoby · przyjrzałbym · dokładniebym prześledził",
            ua: "Chciałbym · przenosiłoby · przyjrzałbym · dokładniebym prześledził"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "*dokładnie* = przysłówek → *by* osobno: *dokładnie bym*.",
        ua: "*dokładnie* = прислівник → *by* окремо: *dokładnie bym*."
      },
      explanation: {
        pl: "Po osobowej: *Chciałbym, przenosiłoby, przyjrzałbym*. Po przysłówku: *dokładnie bym* (nie *dokładniebym*).",
        ua: "Після особової — разом. Після прислівника — *dokładnie bym* окремо."
      }
    }
  },

  // 6 zad 6a forms
  {
    type: "practice",
    heading: { pl: "Zad. 6a · poprawne formy", ua: "Завд. 6a · правильні форми" },
    formula: "s. 133  ·  zad. 6a",
    promptPlace: "before",
    prompt: {
      pl: "Sprawdź w źródłach i zapisz formy (kelner + kucharz). Skan — kliknij.",
      ua: "Перевір у джерелах і запиши форми (офіціант + кухар). Скан — клікни."
    },
    visual: vizGhT66("t66-zad6.jpg", {
      alt: { pl: "Zad. 6: formy czasowników + dialog", ua: "Завд. 6: форми дієслів + діалог" },
      place: "after"
    }),
    items: [
      { pl: "1. os. lp. męski przeszły: *wziąć, iść, pójść, wejść* → …", ua: "1 ос. одн. чол. минулий: *wziąć, iść…* → …" },
      { pl: "3. os. lm. teraźniejszy: *umieć, rozumieć* → …", ua: "3 ос. мн. теперішній: *umieć, rozumieć* → …" },
      { pl: "2. os. lp. rozkazujący: *przyjrzeć się, płukać, trzymać, solić, ukroić* → …", ua: "2 ос. одн. наказовий: *przyjrzeć się…* → …" }
    ],
    task: {
      id: "t66-s06-formy",
      type: "single-choice",
      question: {
        pl: "Który komplet form jest poprawny?",
        ua: "Який комплект форм правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "wziąłem, szedłem, poszedłem, wszedłem · umieją, rozumieją · przyjrzyj się, płucz, trzymaj, sól, ukrój",
            ua: "wziąłem, szedłem, poszedłem, wszedłem · umieją, rozumieją · przyjrzyj się, płucz, trzymaj, sól, ukrój"
          }
        },
        {
          id: "b",
          label: {
            pl: "wzięłem, idłem, pójłem · umią, rozumią · przyjrzeć, płukać",
            ua: "wzięłem, idłem, pójłem · umią, rozumią · przyjrzeć, płukać"
          }
        },
        {
          id: "c",
          label: {
            pl: "wziąćbym, iśćby · umiećcie · płuczmy się",
            ua: "wziąćbym, iśćby · umiećcie · płuczmy się"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Uwaga na *iść → szedłem*; *umieć → umieją*.",
        ua: "Увага: *iść → szedłem*; *umieć → umieją*."
      },
      explanation: {
        pl: "A. B/C mają typowe błędy. UA: *я пішов* ≠ PL *poszedłem* (nie *pójłem*).",
        ua: "A. B/C — типові помилки. UA *я пішов* ≠ *pójłem*."
      }
    }
  },

  // 7 zad 6b dialog
  {
    type: "practice",
    heading: { pl: "Zad. 6b · dialog", ua: "Завд. 6b · діалог" },
    formula: "s. 133  ·  zad. 6b",
    promptPlace: "before",
    prompt: {
      pl: "Ułóż dialog (kuchnia/restauracja). Użyj **co najmniej 6** form z zad. 6a.",
      ua: "Склади діалог (кухня/ресторан). Використай **щонайменше 6** форм із завд. 6a."
    },
    items: [
      { pl: "Przykład ról: kelner ↔ kucharz.", ua: "Приклад ролей: офіціант ↔ кухар." },
      { pl: "Wpleć: *wziąłem, poszedłem, umieją, trzymaj, sól, ukrój…*", ua: "Встав: *wziąłem, poszedłem, umieją, trzymaj, sól, ukrój…*" }
    ],
    task: {
      id: "t66-s07-dialog",
      type: "open-answer",
      question: {
        pl: "Napisz krótki dialog (8–12 kwestii) z min. 6 wymaganymi formami. Podkreśl je.",
        ua: "Напиши короткий діалог (8–12 реплік) із мін. 6 потрібними формами. Підкресли їх."
      },
      hint: {
        pl: "Zacznij: *— Wziąłem zamówienie… — Trzymaj patelnię…*",
        ua: "Почни: *— Wziąłem zamówienie… — Trzymaj patelnię…*"
      },
      explanation: {
        pl: "Ocena: ≥6 form · sensowny dialog · poprawna ortografia.",
        ua: "Оцінка: ≥6 форм · зрозумілий діалог · правильний правопис."
      }
    }
  },

  // 8 contest / Co by było
  {
    type: "practice",
    heading: { pl: "Co by było, gdyby…?", ua: "Що було б, якби…?" },
    formula: "s. 133  ·  konkurs",
    promptPlace: "before",
    prompt: {
      pl: "Mini-konkurs: dokończ zdania w trybie przypuszczającym. Ćwicz *by* łącznie!",
      ua: "Міні-конкурс: докінчи речення в умовному способі. Тренуй *by* разом!"
    },
    items: [
      { pl: "*Gdybym był/a w Pekinie, …*", ua: "*Gdybym był/a w Pekinie, …*" },
      { pl: "*Warto by…* / *Można by…* (rozdzielnie!).", ua: "*Warto by…* / *Można by…* (окремо!)." }
    ],
    task: {
      id: "t66-s08-gdyby",
      type: "open-answer",
      question: {
        pl: "Napisz 4 zdania: 2 z *gdybym/gdyby* + forma łącznie oraz 2 z *warto by / można by*.",
        ua: "Напиши 4 речення: 2 з *gdybym/gdyby* + форма разом та 2 з *warto by / można by*."
      },
      hint: {
        pl: "Np. *Gdybym miał czas, odwiedziłbym… Warto by zobaczyć…*",
        ua: "Напр. *Gdybym miał czas, odwiedziłbym… Warto by zobaczyć…*"
      },
      explanation: {
        pl: "Sprawdź: po osobowej — łącznie; *warto/można/trzeba* — rozdzielnie.",
        ua: "Перевір: після особової — разом; *warto/można/trzeba* — окремо."
      }
    }
  },

  // 9 summary quiz
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T66", ua: "Підсумок · T66" },
    formula: "s. 132–133  ·  prawda/fałsz",
    promptPlace: "before",
    prompt: {
      pl: "Domknij ortografię *by*. Pamiętaj mostek UA!",
      ua: "Закрий орфографію *by*. Пам’ятай місток UA!"
    },
    items: [
      { pl: "Osobowa + *by* zaraz po niej → **łącznie** (*zrobiłbym*).", ua: "Особова + *by* одразу після → **разом**." },
      { pl: "*można/trzeba/warto* + *by* → **rozdzielnie**.", ua: "*można/trzeba/warto* + *by* → **окремо**." },
      { pl: "UA *би* osobno ≠ automatycznie tak w PL.", ua: "UA *би* окремо ≠ автоматично так у PL." },
      emT66("T65 = tryby · T66 = pisownia by")
    ],
    task: {
      id: "t66-s09-pf",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Wyrażenie *warto by* piszemy rozdzielnie.”",
        ua: "Чи твердження правильне? «Вираз *warto by* пишемо окремо.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Jak *można by*, *trzeba by*.",
        ua: "Як *można by*, *trzeba by*."
      },
      explanation: {
        pl: "Prawda — rozdzielnie. Fałszem byłoby *wartoby*.",
        ua: "Правда — окремо. Хиба було б *wartoby*."
      }
    }
  }
]};
