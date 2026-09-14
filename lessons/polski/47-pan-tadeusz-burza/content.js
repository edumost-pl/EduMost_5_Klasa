function emT47(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T47 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT47(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T47 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1 — goal
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 87  ·  Lekcja 47  ·  przebieg burzy",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Cykl: *Z wielkiej chmury*. Tematy 47 i 48 to *jeden* fragment *Pana Tadeusza* Adama Mickiewicza (*burza*, Księga X), ale *dwie* godziny. Dziś: glosy, nagranie, plan zdarzeń i opowiadanie przebiegu. Środki stylistyczne, zmysły i recytacja — lekcja 48. Fragmentu nie tłumaczymy słowo w słowo. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Цикл: *Z wielkiej chmury*. Теми 47 і 48 — *один* уривок *Пана Тадеуша* Адама Міцкевича (*буря*, Книга X), але *дві* години. Сьогодні: глоси, запис, план подій і розповідь про перебіг. Стилістичні засоби, органи чуття і декламація — урок 48. Уривок не перекладаємо дослівно. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wyjaśnię glosy z pól: *pluszczy, rykły, widnokrąg, całun, nawalna*;", ua: "поясню глоси з полів: *pluszczy, rykły, widnokrąg, całun, nawalna*;" },
      { pl: "uporządkuję plan burzy i podzielę tekst na części;", ua: "упорядкую план бурі і поділю текст на частини;" },
      { pl: "opowiem przebieg burzy ze słownictwem z ramki;", ua: "розповім перебіг бурі зі словником із рамки;" },
      { pl: "powiem, kim jest Adam Mickiewicz i skąd pochodzi fragment.", ua: "скажу, хто такий Адам Міцкевич і звідки уривок." }
    ],
    task: {
      id: "t47-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Ułożyć plan i opowiedzieć przebieg burzy.", ua: "Скласти план і розповісти перебіг бурі." } },
        { id: "b", label: { pl: "Wyjaśnić trudne słowa z pól podręcznika.", ua: "Пояснити важкі слова з полів підручника." } },
        { id: "c", label: { pl: "Już dziś nazwać wszystkie środki stylistyczne i przygotować pełną recytację konkursową.", ua: "Уже сьогодні назвати всі стилістичні засоби і підготувати повну конкурсну декламацію." } },
        { id: "d", label: { pl: "Wiedzieć, że fragment pochodzi z *Pana Tadeusza* Adama Mickiewicza.", ua: "Знати, що уривок — з *Пана Тадеуша* Адама Міцкевича." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Środki stylistyczne, zmysły i głosowa interpretacja są w temacie 48.",
        ua: "Стилістичні засоби, органи чуття і голосова інтерпретація — тема 48."
      },
      explanation: {
        pl: "Dziś: glosy, plan, opowiadanie. Środki, zmysły, recytacja — lekcja 48.",
        ua: "Сьогодні: глоси, план, розповідь. Засоби, чуття, декламація — урок 48."
      }
    }
  },

  // 2 — hook / author
  {
    type: "observe",
    heading: { pl: "Film w głowie", ua: "Фільм у голові" },
    formula: "s. 87  ·  przed tekstem",
    promptPlace: "before",
    prompt: {
      pl: "Wyobraź sobie: nie ma radaru ani kamery — jest tylko *słowo*. Mickiewicz maluje burzę tak, że słyszysz deszcz i widzisz piorun. To nie raport pogodowy («padało 20 minut»). To *poetycki obraz* — burza jak scena z filmu.",
      ua: "Уяви: немає радара й камери — є лише *слово*. Міцкевич малює бурю так, що чуєш дощ і бачиш блискавку. Це не прогноз погоди («йшло 20 хвилин»). Це *поетичний образ* — буря як сцена з фільму."
    },
    items: [
      { pl: "**Adam Mickiewicz** — polski poeta; *Pan Tadeusz* to epopeja narodowa (1834).", ua: "**Адам Міцкевич** — польський поет; *Pan Tadeusz* — національна епопея (1834)." },
      { pl: "Fragment z **Księgi X**. Temat strony: *Poetycki obraz burzy*.", ua: "Уривок із **Книги X**. Тема сторінки: *Поетичний образ бурі*." },
      { pl: "Most UA: *niebiosa* ≈ *небеса*, *ziemia* ≈ *земля*, *piorun* ≈ *перун / грім*.", ua: "Міст UA: *niebiosa* ≈ *небеса*, *ziemia* ≈ *земля*, *piorun* ≈ *перун / грім*." },
      { pl: "Ciekawostka: Mickiewicz żył też w Odessie i na Krymie — blisko Ukrainy.", ua: "Цікаво: Міцкевич жив також в Одесі та в Криму — близько до України." }
    ],
    task: {
      id: "t47-s02-hook",
      type: "single-choice",
      question: {
        pl: "Fragment burzy pochodzi z:",
        ua: "Уривок про бурю походить із:"
      },
      options: [
        { id: "a", label: { pl: "*Pana Tadeusza* Adama Mickiewicza (Księga X)", ua: "*Пана Тадеуша* Адама Міцкевича (Книга X)" } },
        { id: "b", label: { pl: "wiersza Tuwima *Deszczyk*", ua: "вірша Тувіма *Deszczyk*" } },
        { id: "c", label: { pl: "raportu meteorologicznego z radia", ua: "метеорологічного звіту з радіо" } }
      ],
      answer: "a",
      hint: {
        pl: "Na stronie zielony pasek: *Poetycki obraz burzy* — Adam Mickiewicz, *Pan Tadeusz*.",
        ua: "На сторінці зелена смужка: *Poetycki obraz burzy* — Адам Міцкевич, *Pan Tadeusz*."
      },
      explanation: {
        pl: "To fragment epopei *Pan Tadeusz*, Księga X — nie Tuwim i nie prognoza pogody.",
        ua: "Це уривок епопеї *Pan Tadeusz*, Книга X — не Тувім і не прогноз погоди."
      }
    }
  },

  // 3 — glosses
  {
    type: "example",
    heading: { pl: "Słowa z pól", ua: "Слова з полів" },
    promptPlace: "before",
    prompt: {
      pl: "Glosy z pomarańczowych pól s. 87. Najpierw ramka, potem znaczenie *w tym tekście*. Bez nich trudno usłyszeć burzę Mickiewicza.",
      ua: "Глоси з помаранчевих полів с. 87. Спочатку рамка, потім значення *в цьому тексті*. Без них важко почути бурю Міцкевича."
    },
    text: {
      pl: "pluszczy  ·  rykły  ·  całemi  ·  zaciemia  ·  widnokrąg  ·  całun  ·  nawalna",
      ua: "pluszczy  ·  rykły  ·  całemi  ·  zaciemia  ·  widnokrąg  ·  całun  ·  nawalna"
    },
    items: [
      { pl: "**pluszczy** — dziś: *pluszcze*; rozpryskuje się, chlapie.", ua: "**pluszczy** — сьогодні: *pluszcze*; розбризкується, хлюпає." },
      { pl: "**rykły** — dziś: *ryknęły*; uderzyły, odezwały się (o piorunach).", ua: "**rykły** — сьогодні: *ryknęły*; ударили, озвалися (про громи)." },
      { pl: "**całemi** — dziś: *całymi* (stara pisownia).", ua: "**całemi** — сьогодні: *całymi* (старий правопис)." },
      { pl: "**zaciemia** — dziś: *zaciemnia*; robi ciemniej.", ua: "**zaciemia** — сьогодні: *zaciemnia*; робить темніше." },
      { pl: "**widnokrąg** — linia, gdzie niebo styka się z ziemią lub wodą (горизонт).", ua: "**widnokrąg** — лінія, де небо стикається із землею чи водою (горизонт / виднокруг)." },
      { pl: "**całun** — tu: tkanina, zasłona (покривало / завіса).", ua: "**całun** — тут: тканина, завіса (покривало)." },
      { pl: "**nawalna** — burzliwa, gwałtowna (злива / бурхлива).", ua: "**nawalna** — бурхлива, раптова (злива / навальна)." }
    ],
    task: {
      id: "t47-s03-glosy",
      type: "single-choice",
      question: {
        pl: "«Czasem widnokrąg pęka…». *Widnokrąg* to:",
        ua: "«Czasem widnokrąg pęka…». *Widnokrąg* — це:"
      },
      options: [
        { id: "a", label: { pl: "linia styku nieba z ziemią (горизонт)", ua: "лінія стику неба із землею (горизонт)" } },
        { id: "b", label: { pl: "nazwa anioła burzy", ua: "ім’я ангела бурі" } },
        { id: "c", label: { pl: "rodzaj parasola", ua: "вид парасольки" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa w podręczniku: linia, wzdłuż której niebo wydaje się dotykać ziemi.",
        ua: "Глоса в підручнику: лінія, уздовж якої небо ніби торкається землі."
      },
      explanation: {
        pl: "*Widnokrąg* = horyzont. UA: *виднокруг / горизонт*.",
        ua: "*Widnokrąg* = горизонт. UA: *виднокруг / горизонт*."
      }
    }
  },

  // 4 — poem + audio + image
  {
    type: "observe",
    heading: { pl: "Czytamy fragment", ua: "Читаємо уривок" },
    formula: "s. 87  ·  nagranie  ·  Adam Mickiewicz",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw *posłuchaj* nagrania. Potem przeczytaj cały fragment i spójrz na skan strony (kliknij, żeby powiększyć). Tekstu nie tłumaczymy. Pytania: jak zaczyna się burza? co robi *anioł burzy*? jak się kończy?",
      ua: "Спочатку *послухай* запис. Потім прочитай увесь уривок і глянь на скан сторінки (клікни, щоб збільшити). Текст не перекладаємо. Питання: як починається буря? що робить *anioł burzy*? як закінчується?"
    },
    visual: vizGhT47("t47-pan-tadeusz-burza.jpg", {
      alt: { pl: "Poetycki obraz burzy — Pan Tadeusz, s. 87", ua: "Поетичний образ бурі — Pan Tadeusz, с. 87" }
    }),
    text: {
      pl: [
        emT47("Adam Mickiewicz"),
        emT47("Pan Tadeusz · Księga X (fragment)"),
        " ",
        "A już deszcz wciąż pluszczy,",
        "Jak z sita, w gęstych kroplach; wtem rykły pioruny,",
        "Krople zlały się razem: to jak proste struny",
        "Długim warkoczem wiążą niebiosa do ziemi,",
        "To jak z wiader buchają warstwami całemi.",
        "Już zakryły się całkiem niebiosa i ziemia,",
        "Noc je z burzą od nocy czarniejszą zaciemia.",
        "Czasem widnokrąg pęka od końca do końca",
        "I anioł burzy na kształt niezmiernego słońca",
        "Rozświeci twarz, i znowu okryty całunem",
        "Uciekł w niebo i drzwi chmur zatrzasnął piorunem.",
        "Znowu wzmaga się burza, ulewa nawalna",
        "I ciemność gruba, gęsta, prawie dotykalna.",
        "Znowu deszcz ciszej szumi, grom na chwilę uśnie.",
        "Znowu wzbudzi się, ryknie i znów wodą chluśnie.",
        "Aż się uspokoiło wszystko; tylko drzewa",
        "Szumią około domu i szemrze ulewa."
      ],
      ua: [
        "Адам Міцкевич — *Pan Tadeusz*, Книга X (уривок). Польський текст вище — читаємо оригінал.",
        "Слухай звуки: *pluszczy, rykły, szumi, szemrze* — слова самі «шурхотять»."
      ]
    },
    task: {
      id: "t47-s04-koniec",
      type: "single-choice",
      question: {
        pl: "Jak kończy się burza w fragmencie?",
        ua: "Як закінчується буря в уривку?"
      },
      options: [
        { id: "a", label: { pl: "Wszystko się uspokaja; szumią drzewa i szemrze ulewa.", ua: "Усе заспокоюється; шумлять дерева і шелестить злива." } },
        { id: "b", label: { pl: "Anioł burzy zostaje na zawsze na niebie.", ua: "Ангел бурі лишається назавжди на небі." } },
        { id: "c", label: { pl: "Dom spada od pioruna.", ua: "Будинок падає від грому." } }
      ],
      answer: "a",
      hint: {
        pl: "Ostatnie wersy: *Aż się uspokoiło wszystko; tylko drzewa…*",
        ua: "Останні рядки: *Aż się uspokoiło wszystko; tylko drzewa…*"
      },
      explanation: {
        pl: "Burza cichnie: uspokojenie, szum drzew i szemrząca ulewa — nie katastrofa domu.",
        ua: "Буря стихає: заспокоєння, шум дерев і шелест зливи — не катастрофа будинку."
      }
    }
  },

  // 5 — plan order
  {
    type: "practice",
    heading: { pl: "Plan burzy · kolejność", ua: "План бурі · порядок" },
    formula: "s. 87  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: *Uporządkuj punkty planu*. Punkty są pomieszane jak karteczki. Ułóż je w kolejności, w jakiej burza *dzieje się w tekście*.",
      ua: "Підручник: *Упорядкуй пункти плану*. Пункти перемішані, як картки. Розклади їх у порядку, в якому буря *відбувається в тексті*."
    },
    visual: vizGhT47("t47-plan.png", {
      alt: { pl: "Zadanie 1a — punkty planu", ua: "Завдання 1a — пункти плану" }
    }),
    items: [
      { pl: "① Gęsty, nasilający się deszcz", ua: "① Густий, що посилюється дощ" },
      { pl: "② Deszcz i pioruny", ua: "② Дощ і громи" },
      { pl: "③ Ciemność i jasność", ua: "③ Темрява і світло" },
      { pl: "④ Wzmaganie i uciszanie się żywiołu", ua: "④ Посилення і стихання стихії" },
      { pl: "⑤ Ulewa – uspokojenie", ua: "⑤ Злива – заспокоєння" }
    ],
    task: {
      id: "t47-s05-plan",
      type: "single-choice",
      question: {
        pl: "Która kolejność planu jest poprawna?",
        ua: "Який порядок плану правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Gęsty deszcz → Deszcz i pioruny → Ciemność i jasność → Wzmaganie/uciszanie → Ulewa–uspokojenie",
            ua: "Густий дощ → Дощ і громи → Темрява і світло → Посилення/стихання → Злива–заспокоєння"
          }
        },
        {
          id: "b",
          label: {
            pl: "Ulewa–uspokojenie → Ciemność i jasność → Gęsty deszcz → Deszcz i pioruny → Wzmaganie",
            ua: "Злива–заспокоєння → Темрява і світло → Густий дощ → Дощ і громи → Посилення"
          }
        },
        {
          id: "c",
          label: {
            pl: "Ciemność i jasność → Gęsty deszcz → Ulewa → Deszcz i pioruny → Wzmaganie",
            ua: "Темрява і світло → Густий дощ → Злива → Дощ і громи → Посилення"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Zaczyna się od gęstego deszczu (*pluszczy*), potem pioruny, potem ciemność i *anioł burzy*, potem *znowu wzmaga / ciszej*, na końcu uspokojenie.",
        ua: "Починається з густого дощу (*pluszczy*), потім громи, потім темрява і *anioł burzy*, потім *znowu wzmaga / ciszej*, наприкінці заспокоєння."
      },
      explanation: {
        pl: "Kolejność idzie za tekstem: deszcz → pioruny → ciemność/jasność → fale żywiołu → uspokojenie.",
        ua: "Порядок іде за текстом: дощ → громи → темрява/світло → хвилі стихії → заспокоєння."
      }
    }
  },

  // 6 — divide text
  {
    type: "practice",
    heading: { pl: "Pięć części tekstu", ua: "П’ять частин тексту" },
    formula: "s. 87  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "*Podziel tekst na pięć części zgodnie z planem.* Dopasuj cytat do punktu planu.",
      ua: "*Поділи текст на п’ять частин згідно з планом.* Добери цитату до пункту плану."
    },
    items: [
      { pl: "**Gęsty deszcz:** *A już deszcz… warstwami całemi.*", ua: "**Густий дощ:** *A już deszcz… warstwami całemi.*" },
      { pl: "**Ciemność i jasność:** *Noc… zatrzasnął piorunem.* (anioł burzy)", ua: "**Темрява і світло:** *Noc… zatrzasnął piorunem.* (ангел бурі)" },
      { pl: "**Wzmaganie/uciszanie:** *Znowu wzmaga… wodą chluśnie.*", ua: "**Посилення/стихання:** *Znowu wzmaga… wodą chluśnie.*" },
      { pl: "**Uspokojenie:** *Aż się uspokoiło… szemrze ulewa.*", ua: "**Заспокоєння:** *Aż się uspokoiło… szemrze ulewa.*" }
    ],
    task: {
      id: "t47-s06-czesci",
      type: "single-choice",
      question: {
        pl: "Fragment o *aniele burzy*, który rozświetla twarz i ucieka w niebo, należy do punktu:",
        ua: "Уривок про *ангела бурі*, що освітлює обличчя і тікає в небо, належить до пункту:"
      },
      options: [
        { id: "a", label: { pl: "Ciemność i jasność", ua: "Темрява і світло" } },
        { id: "b", label: { pl: "Ulewa – uspokojenie", ua: "Злива – заспокоєння" } },
        { id: "c", label: { pl: "Gęsty, nasilający się deszcz", ua: "Густий, що посилюється дощ" } }
      ],
      answer: "a",
      hint: {
        pl: "Anioł burzy = błyskawica / jasność wśród ciemności burzy.",
        ua: "Ангел бурі = блискавка / світло серед темряви бурі."
      },
      explanation: {
        pl: "Widnokrąg pęka, anioł burzy świeci jak słońce, potem znów całun — to kontrast ciemności i jasności.",
        ua: "Виднокруг тріскає, ангел бурі світить як сонце, потім знову покривало — контраст темряви і світла."
      }
    }
  },

  // 7 — vocabulary frame for retelling
  {
    type: "example",
    heading: { pl: "Słownictwo do opowiadania", ua: "Словник для розповіді" },
    formula: "s. 87  ·  zad. 2  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Zadanie 2: *Opowiedz, jak przebiegała burza.* Użyj słów z ramki — jak klocków LEGO do historii.",
      ua: "Завдання 2: *Розкажи, як проходила буря.* Використовуй слова з рамки — як кубики LEGO для історії."
    },
    visual: vizGhT47("t47-slownictwo.png", {
      alt: { pl: "Ramka słownictwa do opowiadania burzy", ua: "Рамка словника для розповіді про бурю" }
    }),
    text: {
      pl: "czas: następnie · wtem · nagle · po chwili · potem",
      ua: "час: następnie · wtem · nagle · po chwili · potem"
    },
    items: [
      { pl: "**Dźwięki / ruch:** rozległ się, dało się słyszeć, rozdzierał, nasilała się, słabła, ogarniała…", ua: "**Звуки / рух:** rozległ się, dało się słyszeć, rozdzierał, nasilała się, słabła, ogarniała…" },
      { pl: "**Czas:** następnie, wtem, nagle, po chwili, wówczas, później, potem.", ua: "**Час:** następnie, wtem, nagle, po chwili, wówczas, później, potem." },
      { pl: "Most UA: *potem* ≈ *потім*, *nagle* ≈ *раптово*, *zaczęła się* ≈ *почалася*.", ua: "Міст UA: *potem* ≈ *потім*, *nagle* ≈ *раптово*, *zaczęła się* ≈ *почалася*." }
    ],
    task: {
      id: "t47-s07-ramka",
      type: "single-choice",
      question: {
        pl: "Które słowo najlepiej wprowadza *nagły* zwrot wydarzeń?",
        ua: "Яке слово найкраще вводить *раптовий* поворот подій?"
      },
      options: [
        { id: "a", label: { pl: "wtem / nagle", ua: "wtem / nagle" } },
        { id: "b", label: { pl: "później / potem (tylko spokojne «później»)", ua: "później / potem (лише спокійне «потім»)" } },
        { id: "c", label: { pl: "całemi (to nie łącznik czasu)", ua: "całemi (це не часовий сполучник)" } }
      ],
      answer: "a",
      hint: {
        pl: "W tekście Mickiewicza: *wtem rykły pioruny* — nagle.",
        ua: "У тексті Міцкевича: *wtem rykły pioruny* — раптово."
      },
      explanation: {
        pl: "*Wtem* i *nagle* oznaczają nagły zwrot. *Później/potem* to spokojniejsza kolejność. *Całemi* to stara forma *całymi*.",
        ua: "*Wtem* і *nagle* — раптовий поворот. *Później/potem* — спокійніша послідовність. *Całemi* — стара форма *całymi*."
      }
    }
  },

  // 8 — retell practice
  {
    type: "practice",
    heading: { pl: "Opowiadam burzę", ua: "Розповідаю бурю" },
    formula: "s. 87  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Ułóż w głowie (lub w zeszycie) 4–5 zdań. Wzorzec poniżej. Potem wybierz najlepszą wersję opowiadania.",
      ua: "Склади в голові (або в зошиті) 4–5 речень. Зразок нижче. Потім вибери найкращу версію розповіді."
    },
    items: [
      { pl: "Najpierw deszcz *pluszczał* jak z sita…", ua: "Спочатку дощ *плющав* як із сита…" },
      { pl: "*Wtem* rozległy się pioruny…", ua: "*Wtem* пролунали громи…" },
      { pl: "Potem ogarnęła ciemność, a czasem błyskał *anioł burzy*…", ua: "Потім охопила темрява, а часом блискав *ангел бурі*…" },
      { pl: "Burza *nasilała się* i *słabła* na przemian…", ua: "Буря *посилювалася* і *слабшала* по черзі…" },
      { pl: "Na koniec wszystko *się uspokoiło* — tylko drzewa szumiały.", ua: "Наприкінці все *заспокоїлося* — лише дерева шумівли." }
    ],
    task: {
      id: "t47-s08-opowiedz",
      type: "single-choice",
      question: {
        pl: "Które opowiadanie najlepiej oddaje przebieg z planu?",
        ua: "Яка розповідь найкраще передає перебіг за планом?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "Deszcz gęstniał → wtem pioruny → ciemność i błyski anioła → burza wzmagała się i cichła → wreszcie uspokojenie.",
            ua: "Дощ густів → раптом громи → темрява і спалахи ангела → буря посилювалась і стихала → нарешті заспокоєння."
          }
        },
        {
          id: "b",
          label: {
            pl: "Najpierw uspokojenie, potem anioł burzy, na końcu dopiero deszcz.",
            ua: "Спочатку заспокоєння, потім ангел бурі, наприкінці лише дощ."
          }
        },
        {
          id: "c",
          label: {
            pl: "Padał tylko drobny deszczyk jak u Tuwima — bez piorunów.",
            ua: "Йшов лише дрібний дощик як у Тувіма — без громів."
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Trzymaj się planu z zadania 1: od gęstego deszczu do uspokojenia.",
        ua: "Тримай план із завдання 1: від густого дощу до заспокоєння."
      },
      explanation: {
        pl: "Wersja A idzie za tekstem Mickiewicza. B odwraca kolejność. C myli z *Deszczykiem* Tuwima.",
        ua: "Версія A йде за текстом Міцкевича. B перевертає порядок. C плутає з *Deszczykiem* Тувіма."
      }
    }
  },

  // 9 — open answer retell
  {
    type: "practice",
    heading: { pl: "Twoja relacja", ua: "Твоя розповідь" },
    formula: "s. 87  ·  zad. 2  ·  twój głos",
    promptPlace: "before",
    prompt: {
      pl: "Napisz *krótko* (3–6 zdań po polsku), jak przebiegała burza. Użyj przynajmniej dwóch słów z ramki (*wtem, nagle, potem, nasilała się…*). To ćwiczenie otwarte — nie ma jednej «jednej poprawnej» odpowiedzi.",
      ua: "Напиши *коротко* (3–6 речень польською), як проходила буря. Використай принаймні два слова з рамки (*wtem, nagle, potem, nasilała się…*). Це відкрите завдання — немає однієї «єдиної правильної» відповіді."
    },
    items: [
      { pl: "Możesz zacząć: *Najpierw… Wtem… Potem… Na koniec…*", ua: "Можеш почати: *Najpierw… Wtem… Potem… Na koniec…*" },
      { pl: "Wróć do planu, jeśli utkniesz.", ua: "Повернись до плану, якщо застрягнеш." }
    ],
    task: {
      id: "t47-s09-open",
      type: "open-answer",
      question: {
        pl: "Opisz przebieg burzy (po polsku). Użyj słów z ramki.",
        ua: "Опиши перебіг бурі (польською). Використай слова з рамки."
      },
      hint: {
        pl: "Wzór: Najpierw deszcz pluszczał. Wtem rykły pioruny. Potem ogarnęła ciemność… Na koniec wszystko się uspokoiło.",
        ua: "Зразок: Najpierw deszcz pluszczał. Wtem rykły pioruny. Potem ogarnęła ciemność… Na koniec wszystko się uspokoiło."
      },
      explanation: {
        pl: "Sprawdź: czy masz początek (deszcz), środek (pioruny / ciemność / fale) i koniec (uspokojenie)?",
        ua: "Перевір: чи є початок (дощ), середина (громи / темрява / хвилі) і кінець (заспокоєння)?"
      }
    }
  },

  // 10 — summary bridge
  {
    type: "summary",
    heading: { pl: "Co zabieram · most do T48", ua: "Що забираю · міст до T48" },
    formula: "s. 87  ·  koniec lekcji 47",
    promptPlace: "before",
    prompt: {
      pl: "Dziś: zrozumieliśmy *co się dzieje* w burzy. Jutro (lekcja 48): *jak* Mickiewicz to maluje — zmysły, środki stylistyczne, głos i pomysł na film / balet / słuchowisko.",
      ua: "Сьогодні: зрозуміли *що діється* в бурі. Завтра (урок 48): *як* Міцкевич це малює — органи чуття, стилістичні засоби, голос і ідея для фільму / балету / радіоп’єси."
    },
    items: [
      { pl: "Plan: deszcz → pioruny → ciemność/jasność → fale żywiołu → uspokojenie.", ua: "План: дощ → громи → темрява/світло → хвилі стихії → заспокоєння." },
      { pl: "Glosy: *pluszczy, rykły, widnokrąg, całun, nawalna*.", ua: "Глоси: *pluszczy, rykły, widnokrąg, całun, nawalna*." },
      { pl: "Następna lekcja: obrazy zmysłowe + środki + recytacja.", ua: "Наступний урок: чуттєві образи + засоби + декламація." }
    ],
    task: {
      id: "t47-s10-most",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: na lekcji 48 zajmiemy się środkami stylistycznymi i głosową interpretacją tego samego fragmentu.",
        ua: "Правда чи ні: на уроці 48 займемося стилістичними засобами і голосовою інтерпретацією того самого уривка."
      },
      answer: true,
      hint: {
        pl: "Tematy 47 i 48 = jeden tekst, dwie godziny.",
        ua: "Теми 47 і 48 = один текст, дві години."
      },
      explanation: {
        pl: "Tak — ten sam fragment *Pana Tadeusza*, inne cele: środki, zmysły, głos, adaptacja.",
        ua: "Так — той самий уривок *Пана Тадеуша*, інші цілі: засоби, чуття, голос, адаптація."
      }
    }
  }
]};
