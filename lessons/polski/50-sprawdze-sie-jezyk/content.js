var POL_IMG_T50 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT50(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T50 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 89  ·  Lekcja 50  ·  Sprawdzę się! · język",
    promptPlace: "before",
    prompt: {
      pl: "Druga godzina *Sprawdzę się!* (s. 89). Wiersz *Parasol* był w lekcji 49. Dziś: *nie* z rzeczownikami, synonimy (tekst o zimnie), odmiana *pióra*, dyktando ó/u · rz/ż · ch/h i krótkie opowiadanie fantastyczne o *gradzie*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга година *Sprawdzę się!* (с. 89). Вірш *Parasol* був на уроці 49. Сьогодні: *nie* з іменниками, синоніми (текст про холод), відмінювання *pióra*, диктант ó/u · rz/ż · ch/h і коротке фантастичне оповідання про *град*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wyjaśnię, dlaczego *niepogoda* pisze się łącznie;", ua: "поясню, чому *niepogoda* пишеться разом;" },
      { pl: "poprawię tekst, unikając powtórzeń (*zimno*);", ua: "виправлю текст, уникаючи повторів (*zimno*);" },
      { pl: "odmienię *pióro* w liczbie pojedynczej;", ua: "відміню *pióro* в однині;" },
      { pl: "uzupełnię dyktando i napiszę mini-opowiadanie o gradzie.", ua: "доповню диктант і напишу міні-оповідання про град." }
    ],
    task: {
      id: "t50-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Zasadę *nie* z rzeczownikami (*niepogoda*).", ua: "Правило *nie* з іменниками (*niepogoda*)." } },
        { id: "b", label: { pl: "Odmianę *pióra* i ortografię w dyktandzie.", ua: "Відмінювання *pióra* і орфографію в диктанті." } },
        { id: "c", label: { pl: "Jeszcze raz rozróżnić autora i bohatera *Parasola* (to już z T49).", ua: "Ще раз розрізнити автора і героя *Parasola* (це вже з T49)." } },
        { id: "d", label: { pl: "Napisać krótkie opowiadanie fantastyczne o gradzie.", ua: "Написати коротке фантастичне оповідання про град." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Analiza wiersza była w temacie 49. Co jest nowe dziś?",
        ua: "Аналіз вірша був у темі 49. Що нове сьогодні?"
      },
      explanation: {
        pl: "Dziś: język, ortografia, twórcze pisanie. Role w wierszu — już T49.",
        ua: "Сьогодні: мова, орфографія, творче письмо. Ролі у вірші — уже T49."
      }
    }
  },

  // 2 — nie with nouns
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · nie z rzeczownikami", ua: "Запам’ятай · nie з іменниками" },
    formula: "s. 89  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Wyjaśnij, dlaczego w *niepogoda* przeczenie *nie* zapisano łącznie.",
      ua: "Поясни, чому в *niepogoda* заперечення *nie* записано разом."
    },
    text: {
      pl: "Nie z rzeczownikami piszemy łącznie: niepogoda, nieład, niepokój (wyjątki: nie + nazwa własna itp. — osobno).",
      ua: "Nie з іменниками пишемо разом: niepogoda, nieład, niepokój (винятки: nie + власна назва тощо — окремо)."
    },
    items: [
      { pl: "*nie* + *pogoda* → **niepogoda** (jeden wyraz).", ua: "*nie* + *pogoda* → **niepogoda** (одне слово)." },
      { pl: "To nie to samo co *nie* z czasownikiem (*nie pada* — osobno).", ua: "Це не те саме, що *nie* з дієсловом (*nie pada* — окремо)." },
      { pl: "Most UA: *непогода* теж разом — łatwy most!", ua: "Міст UA: *непогода* теж разом — легкий міст!" }
    ],
    task: {
      id: "t50-s02-nie",
      type: "single-choice",
      question: {
        pl: "Dlaczego *niepogoda* łącznie?",
        ua: "Чому *niepogoda* разом?"
      },
      options: [
        { id: "a", label: { pl: "Bo *nie* z rzeczownikami pisze się łącznie", ua: "Бо *nie* з іменниками пишеться разом" } },
        { id: "b", label: { pl: "Bo to czasownik w czasie przyszłym", ua: "Бо це дієслово в майбутньому часі" } },
        { id: "c", label: { pl: "Bo zawsze *nie* pisze się osobno z każdym wyrazem", ua: "Бо *nie* завжди пишеться окремо з кожним словом" } }
      ],
      answer: "a",
      hint: {
        pl: "Rzeczownik = nazwa rzeczy / zjawiska. *Pogoda* / *niepogoda*.",
        ua: "Іменник = назва речі / явища. *Pogoda* / *niepogoda*."
      },
      explanation: {
        pl: "*Niepogoda* to rzeczownik — stąd łączna pisownia *nie*.",
        ua: "*Niepogoda* — іменник, тому *nie* разом."
      }
    }
  },

  // 3 — synonym rewrite zimno
  {
    type: "practice",
    heading: { pl: "Bez powtórzeń · zimno", ua: "Без повторів · zimno" },
    formula: "s. 89  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Popraw tekst, by uniknąć powtarzania podobnych wyrazów. Skorzystaj ze synonimów.",
      ua: "Виправ текст, щоб уникнути повторення подібних слів. Скористайся синонімами."
    },
    visual: vizGhT50("t50-zimno.png", {
      alt: { pl: "Zadanie 6 — tekst z powtórzeniami zimno", ua: "Завдання 6 — текст із повторами zimno" }
    }),
    items: [
      { pl: "Oryginał powtarza: *zimno / zimny / zimnem*.", ua: "Оригінал повторює: *zimno / zimny / zimnem*." },
      { pl: "Pomocne synonimy: *chłód, mroźny, chłodno, niska temperatura, przeciąg…*", ua: "Корисні синоніми: *chłód, mroźny, chłodno, niska temperatura, przeciąg…*" },
      { pl: "Wzór: *Dzisiaj nad morzem było bardzo chłodno. Wiał mroźny wiatr…*", ua: "Зразок: *Dzisiaj nad morzem było bardzo chłodno. Wiał mroźny wiatr…*" }
    ],
    task: {
      id: "t50-s03-zimno",
      type: "single-choice",
      question: {
        pl: "Która wersja najlepiej unika powtórzeń?",
        ua: "Яка версія найкраще уникає повторів?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Było chłodno. Wiał mroźny wiatr… odczuwali chłód… uciec przed chłodem…",
            ua: "Było chłodno. Wiał mroźny wiatr… відчували chłód… втекти від chłodu…"
          }
        },
        {
          id: "b",
          label: {
            pl: "Było zimno. Wiał zimny wiatr… odczuwali zimno… uciec przed zimnem… (bez zmian)",
            ua: "Było zimno. Wiał zimny wiatr… відчували zimno… втекти від zimna… (без змін)"
          }
        },
        {
          id: "c",
          label: {
            pl: "Było gorąco. Wiał ciepły wiatr… (zmienia sens tekstu)",
            ua: "Było gorąco. Wiał ciepły wiatr… (змінює сенс тексту)"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Zamień powtórzenia, ale zostaw sens: zimno nad morzem.",
        ua: "Заміни повтори, але залиш сенс: холодно над морем."
      },
      explanation: {
        pl: "A używa synonimów (*chłodno, mroźny, chłód*). B = powtórzenia. C psuje sens.",
        ua: "A використовує синоніми (*chłodno, mroźny, chłód*). B = повтори. C псує сенс."
      }
    }
  },

  // 4 — open rewrite
  {
    type: "practice",
    heading: { pl: "Twoja poprawka", ua: "Твоє виправлення" },
    formula: "s. 89  ·  zad. 6  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Napisz *swój* poprawiony tekst (3–4 zdania). Nie powtarzaj *zimno/zimny* więcej niż raz.",
      ua: "Напиши *свій* виправлений текст (3–4 речення). Не повторюй *zimno/zimny* більше ніж раз."
    },
    task: {
      id: "t50-s04-open-zimno",
      type: "open-answer",
      question: {
        pl: "Wklej lub napisz poprawioną wersję tekstu o morzu.",
        ua: "Встав або напиши виправлену версію тексту про море."
      },
      hint: {
        pl: "Użyj: chłodno, mroźny, chłód, niska temperatura, herbata…",
        ua: "Використай: chłodno, mroźny, chłód, niska temperatura, herbata…"
      },
      explanation: {
        pl: "Sprawdź: czy sens ten sam, a wyrazy się różnią?",
        ua: "Перевір: чи сенс той самий, а слова різні?"
      }
    }
  },

  // 5 — pióro declension
  {
    type: "practice",
    heading: { pl: "Odmiana «pióro»", ua: "Відмінювання «pióro»" },
    formula: "s. 89  ·  zad. 7",
    promptPlace: "before",
    prompt: {
      pl: "Odmień przez przypadki w liczbie *pojedynczej* rzeczownik *pióro*. Oddziel temat od końcówki. Zauważ oboczność *r // rz* w miejscowniku.",
      ua: "Відміняй за відмінками в *однині* іменник *pióro*. Відокрем основу від закінчення. Зауваж чергування *r // rz* у місцевому."
    },
    items: [
      { pl: "**M** piór-o  ·  **D** piór-a  ·  **C** piór-u  ·  **B** piór-o", ua: "**Н** piór-o  ·  **Р** piór-a  ·  **Д** piór-u  ·  **З** piór-o" },
      { pl: "**N** piór-em  ·  **Msc** o piórz-e  ·  **W** piór-o!", ua: "**Ор** piór-em  ·  **Місц** o piórz-e  ·  **Кл** piór-o!" },
      { pl: "Oboczność: *r // rz* (*pióro* → *o piórze*).", ua: "Чергування: *r // rz* (*pióro* → *o piórze*)." },
      { pl: "W wierszu: *szerokie pióra* (l. mn.) — tu ćwiczysz l. pojedynczą.", ua: "У вірші: *szerokie pióra* (мн.) — тут тренуєш однину." }
    ],
    task: {
      id: "t50-s05-pioro",
      type: "single-choice",
      question: {
        pl: "Poprawna forma miejscownika l.poj. to:",
        ua: "Правильна форма місцевого одн. —:"
      },
      options: [
        { id: "a", label: { pl: "o piórze (r → rz)", ua: "o piórze (r → rz)" } },
        { id: "b", label: { pl: "o pióro", ua: "o pióro" } },
        { id: "c", label: { pl: "o piórem", ua: "o piórem" } }
      ],
      answer: "a",
      hint: {
        pl: "Miejscownik często z *o/w*: *o stole, o piórze*.",
        ua: "Місцевий часто з *o/w*: *o stole, o piórze*."
      },
      explanation: {
        pl: "*o piórze* — temat z *rz*, końcówka *-e*. To oboczność *r//rz*.",
        ua: "*o piórze* — основа з *rz*, закінчення *-e*. Чергування *r//rz*."
      }
    }
  },

  // 6 — more pióro check
  {
    type: "practice",
    heading: { pl: "Sprawdzam przypadki", ua: "Перевіряю відмінки" },
    formula: "s. 89  ·  zad. 7  ·  quiz",
    promptPlace: "before",
    prompt: {
      pl: "Dopasuj formę do przypadku.",
      ua: "Добери форму до відмінка."
    },
    task: {
      id: "t50-s06-przypadki",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie poprawne pary.",
        ua: "Познач усі правильні пари."
      },
      options: [
        { id: "a", label: { pl: "dopełniacz: nie ma pióra", ua: "родовий: nie ma pióra" } },
        { id: "b", label: { pl: "narzędnik: z piórem", ua: "орудний: z piórem" } },
        { id: "c", label: { pl: "celownik: daję piórze", ua: "давальний: daję piórze" } },
        { id: "d", label: { pl: "biernik: widzę pióro", ua: "знахідний: widzę pióro" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Celownik: *pióru* (nie *piórze*). *Piórze* = miejscownik.",
        ua: "Давальний: *pióru* (не *piórze*). *Piórze* = місцевий."
      },
      explanation: {
        pl: "A, B, D OK. Celownik = *pióru*, a *piórze* to miejscownik.",
        ua: "A, B, D OK. Давальний = *pióru*, а *piórze* — місцевий."
      }
    }
  },

  // 7 — dyktando
  {
    type: "practice",
    heading: { pl: "Dyktando z lukami", ua: "Диктант із пропусками" },
    formula: "s. 89  ·  zad. 9",
    promptPlace: "before",
    prompt: {
      pl: "Przepisz tekst, wybierając *ó/u*, *rz/ż*, *ch/h*. Spójrz na skan (kliknij). Poniżej — kluczowe wybory.",
      ua: "Перепиши текст, обираючи *ó/u*, *rz/ż*, *ch/h*. Глянь на скан (клікни). Нижче — ключові вибори."
    },
    visual: vizGhT50("t50-dyktando.png", {
      alt: { pl: "Zadanie 9 — dyktando ortograficzne", ua: "Завдання 9 — орфографічний диктант" }
    }),
    items: [
      { pl: "Bohater: **Grzegorz Porzeczka** (rz, rz).", ua: "Герой: **Grzegorz Porzeczka** (rz, rz)." },
      { pl: "*zdarzyło, górami, ogródku, później, grudniowym…*", ua: "*zdarzyło, górami, ogródku, później, grudniowym…*" },
      { pl: "*usłyszał, otworzył, lekkie, spojrzał, śnieżny, księżyca…*", ua: "*usłyszał, otworzył, lekkie, spojrzał, śnieżny, księżyca…*" },
      { pl: "Sąsiadka **Hania**; *rzodkiewki, ogórki*; *przerażenia*; *ośnieżonych drzew*.", ua: "Сусідка **Hania**; *rzodkiewki, ogórki*; *przerażenia*; *ośnieżonych drzew*." }
    ],
    task: {
      id: "t50-s07-dykt",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy są poprawne? Zaznacz wszystkie.",
        ua: "Які записи правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Grzegorz Porzeczka (nie: *Gzegoża Pożeczki*)", ua: "Grzegorz Porzeczka (не: *Gzegoża Pożeczki*)" } },
        { id: "b", label: { pl: "za górami · w ogródku · księżyca", ua: "za górami · w ogródku · księżyca" } },
        { id: "c", label: { pl: "Hania · rzodkiewki · ogórki", ua: "Hania · rzodkiewki · ogórki" } },
        { id: "d", label: { pl: "usłyszał · otwożył · śniezny (błędy!)", ua: "usłyszał · otwożył · śniezny (помилки!)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*otworzył* (rz), *śnieżny* (ż). *Hania* z *h*.",
        ua: "*otworzył* (rz), *śnieżny* (ż). *Hania* з *h*."
      },
      explanation: {
        pl: "A–C poprawne. D ma błędy: powinno być *otworzył*, *śnieżny*.",
        ua: "A–C правильні. D має помилки: має бути *otworzył*, *śnieżny*."
      }
    }
  },

  // 8 — more dyktando focus
  {
    type: "practice",
    heading: { pl: "Dyktando · trudne miejsca", ua: "Диктант · важкі місця" },
    formula: "s. 89  ·  zad. 9  ·  fokus",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz poprawną pisownię w zdaniach z historii Grzegorza.",
      ua: "Вибери правильний правопис у реченнях з історії Ґжеґожа."
    },
    task: {
      id: "t50-s08- fokus",
      type: "single-choice",
      question: {
        pl: "«…… krajobraz był rozświetlony blaskiem ……»",
        ua: "«…… krajobraz był rozświetlony blaskiem ……»"
      },
      options: [
        { id: "a", label: { pl: "Śnieżny · księżyca", ua: "Śnieżny · księżyca" } },
        { id: "b", label: { pl: "Śniezny · księżyca", ua: "Śniezny · księżyca" } },
        { id: "c", label: { pl: "Śnieżny · księzyca", ua: "Śnieżny · księzyca" } }
      ],
      answer: "a",
      hint: {
        pl: "*Śnieg* → *śnieżny* (ż). *Księżyc* → *księżyca* (ż).",
        ua: "*Śnieg* → *śnieżny* (ż). *Księżyc* → *księżyca* (ż)."
      },
      explanation: {
        pl: "Oba z *ż*: *śnieżny*, *księżyca*.",
        ua: "Обидва з *ż*: *śnieżny*, *księżyca*."
      }
    }
  },

  // 9 — fantasy story
  {
    type: "practice",
    heading: { pl: "Opowiadanie · skąd się wziął grad", ua: "Оповідання · звідки взявся град" },
    formula: "s. 89  ·  zad. 8",
    promptPlace: "before",
    prompt: {
      pl: "Napisz *opowiadanie fantastyczne*: skąd się wziął grad. Możesz połączyć z parasolem-ptakiem z ilustracji!",
      ua: "Напиши *фантастичне оповідання*: звідки взявся град. Можеш поєднати з парасолькою-птахом з ілюстрації!"
    },
    visual: vizGhT50("t50-grad-ilustracja.jpg", {
      alt: { pl: "Parasol-ptak — inspiracja do opowiadania", ua: "Парасолька-птах — натхнення для оповідання" }
    }),
    items: [
      { pl: "Plan: 1) świat przed gradem 2) magiczne zdarzenie 3) skutek = grad.", ua: "План: 1) світ до граду 2) магічна подія 3) наслідок = град." },
      { pl: "Użyj 2–3 słów z cyklu: *burza, niepogoda, piorun, ulewa…*", ua: "Використай 2–3 слова з циклу: *burza, niepogoda, piorun, ulewa…*" },
      { pl: "Długość: ok. 8–12 zdań po polsku.", ua: "Довжина: близько 8–12 речень польською." }
    ],
    task: {
      id: "t50-s09-grad",
      type: "open-answer",
      question: {
        pl: "Napisz opowiadanie fantastyczne o powstaniu gradu.",
        ua: "Напиши фантастичне оповідання про появу граду."
      },
      hint: {
        pl: "Np. Anioł burzy zgubił lodowe koraliki… / Parasol-ptak potrząsnął skrzydłami…",
        ua: "Напр. Ангел бурі загубив крижані намистини… / Парасолька-птах струсила крилами…"
      },
      explanation: {
        pl: "Nie ma jednej odpowiedzi — ważne: fantazja + jasny początek i koniec + słownictwo pogodowe.",
        ua: "Немає однієї відповіді — важливо: фантазія + зрозумілий початок і кінець + погодний словник."
      }
    }
  },

  // 10 — summary
  {
    type: "summary",
    heading: { pl: "Sprawdzę się! · domknięcie cyklu", ua: "Sprawdzę się! · закриття циклу" },
    formula: "s. 89  ·  T49–T50",
    promptPlace: "before",
    prompt: {
      pl: "Koniec bloku *Z wielkiej chmury* w podręczniku. Umiesz czytać wiersz o pogodzie *i* używać narzędzi językowych.",
      ua: "Кінець блоку *Z wielkiej chmury* в підручнику. Умієш читати вірш про погоду *і* користуватися мовними інструментами."
    },
    items: [
      { pl: "T49: *Parasol* — role, test, epitety, porównanie, synonimy niepogody.", ua: "T49: *Parasol* — ролі, тест, епітети, порівняння, синоніми негоди." },
      { pl: "T50: *nie* łącznie, synonimy, *pióro*, dyktando, opowiadanie o gradzie.", ua: "T50: *nie* разом, синоніми, *pióro*, диктант, оповідання про град." },
      { pl: "Brawo — samodzielnie używasz poznanych terminów!", ua: "Браво — самостійно використовуєш вивчені терміни!" }
    ],
    task: {
      id: "t50-s10-quiz",
      type: "multiple-choice",
      question: {
        pl: "Co jest prawdą? Zaznacz wszystkie.",
        ua: "Що правда? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "*niepogoda* — *nie* z rzeczownikiem łącznie", ua: "*niepogoda* — *nie* з іменником разом" } },
        { id: "b", label: { pl: "miejscownik: *o piórze*", ua: "місцевий: *o piórze*" } },
        { id: "c", label: { pl: "w dyktandzie: *śnieżny*, *księżyca*, *Grzegorz*", ua: "у диктанті: *śnieżny*, *księżyca*, *Grzegorz*" } },
        { id: "d", label: { pl: "*nie* z rzeczownikami zawsze osobno", ua: "*nie* з іменниками завжди окремо" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "D jest odwrotnością reguły z zad. 5.",
        ua: "D — протилежність правила із зад. 5."
      },
      explanation: {
        pl: "A–C prawdziwe. D fałszywe — z rzeczownikami *nie* zwykle łącznie.",
        ua: "A–C правдиві. D хибне — з іменниками *nie* зазвичай разом."
      }
    }
  }
]};
