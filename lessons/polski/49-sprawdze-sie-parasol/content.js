function emT49(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T49 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT49(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T49 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 89  ·  Lekcja 49  ·  Sprawdzę się! · wiersz",
    promptPlace: "before",
    prompt: {
      pl: "Powtórzenie cyklu *Z wielkiej chmury*. Tematy 49 i 50 = strona *Sprawdzę się!* (s. 89), ale *dwie* godziny. Dziś: wiersz Józefa Ratajczaka *Parasol* — bohater / osoba mówiąca / autor, test rozumienia, epitety, porównania, synonimy *niepogody*. Ortografia, dyktando i opowiadanie — lekcja 50. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Повторення циклу *Z wielkiej chmury*. Теми 49 і 50 = сторінка *Sprawdzę się!* (с. 89), але *дві* години. Сьогодні: вірш Юзефа Ратайчака *Parasol* — герой / мовець / автор, тест розуміння, епітети, порівняння, синоніми *niepogody*. Орфографія, диктант і оповідання — урок 50. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wskażę *bohatera*, *osobę mówiącą* i *autora* wiersza;", ua: "вкажу *героя*, *мовця* і *автора* вірша;" },
      { pl: "odpowiem na pytania zgodne z tekstem;", ua: "відповім на питання згідно з текстом;" },
      { pl: "wskażę *epitety* i *porównanie*;", ua: "вкажу *епітети* і *порівняння*;" },
      { pl: "podam synonimy słowa *niepogoda* z wiersza.", ua: "назву синоніми слова *niepogoda* з вірша." }
    ],
    task: {
      id: "t49-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Rozróżnić bohatera, osobę mówiącą i autora.", ua: "Розрізнити героя, мовця і автора." } },
        { id: "b", label: { pl: "Wskazać epitety i porównanie w *Parasolu*.", ua: "Вказати епітети і порівняння в *Parasolu*." } },
        { id: "c", label: { pl: "Już dziś napisać pełne dyktando z lukami ó/u, rz/ż, ch/h.", ua: "Уже сьогодні написати повний диктант із пропусками ó/u, rz/ż, ch/h." } },
        { id: "d", label: { pl: "Podać synonimy *niepogody* z wiersza.", ua: "Назвати синоніми *niepogody* з вірша." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Dyktando, *nie* z rzeczownikami i opowiadanie o gradzie są w temacie 50.",
        ua: "Диктант, *nie* з іменниками і оповідання про град — тема 50."
      },
      explanation: {
        pl: "Dziś: wiersz, role w tekście, test, środki, synonimy. Dyktando i opowiadanie — lekcja 50.",
        ua: "Сьогодні: вірш, ролі в тексті, тест, засоби, синоніми. Диктант і оповідання — урок 50."
      }
    }
  },

  // 2 — poem + audio
  {
    type: "observe",
    heading: { pl: "Czytamy · Parasol", ua: "Читаємо · Parasol" },
    formula: "s. 89  ·  Józef Ratajczak",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj wiersz na głos (sam / sama) i spójrz na ilustrację (kliknij, by powiększyć). Glosa: *wszak* = przecież. Wiersza nie tłumaczymy słowo w słowo.",
      ua: "Прочитай вірш уголос (сам / сама) і глянь на ілюстрацію (клікни, щоб збільшити). Глоса: *wszak* = przecież / адже. Вірш не перекладаємо дослівно."
    },
    visual: vizGhT49("t49-parasol.jpg", {
      alt: { pl: "Józef Ratajczak — Parasol, s. 89", ua: "Юзеф Ратайчак — Parasol, с. 89" }
    }),
    text: {
      pl: [
        emT49("Józef Ratajczak"),
        emT49("Parasol"),
        " ",
        "Kiedy na dworze",
        "deszcz, burza, grad, śnieg",
        "i gorzej",
        "być nie może,",
        "wyprowadzam parasol na spacer.",
        "Na czarnej smyczy go wiodę,",
        "bo wszak zwyczaje parasola znacie",
        "i jego ciągłą skłonność do niepogody.",
        " ",
        "Wtedy dopiero rozpina aksamitne skrzydła",
        "jak ptak.",
        "Podobny do kawki, bo czarny,",
        "do orła, ze względu na szerokie pióra,",
        "chociaż można go również pomylić z urzędnikiem,",
        "gdy wraca ze mną z biura."
      ],
      ua: [
        "Юзеф Ратайчак — *Parasol*. Польський текст вище.",
        "Образ: парасолька на «повідку» → розкриває «аксамітні крила» як птах."
      ]
    },
    task: {
      id: "t49-s02-glosa",
      type: "single-choice",
      question: {
        pl: "*Wszak* w wierszu znaczy mniej więcej:",
        ua: "*Wszak* у вірші означає приблизно:"
      },
      options: [
        { id: "a", label: { pl: "przecież / a przecież", ua: "адже / przecież" } },
        { id: "b", label: { pl: "jutro rano", ua: "завтра вранці" } },
        { id: "c", label: { pl: "nazwę parasola", ua: "назву парасольки" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa w podręczniku: *wszak* – przecież.",
        ua: "Глоса в підручнику: *wszak* – przecież."
      },
      explanation: {
        pl: "*Wszak* = przecież. Most UA: *адже*.",
        ua: "*Wszak* = przecież. Міст UA: *адже*."
      }
    }
  },

  // 3 — roles
  {
    type: "practice",
    heading: { pl: "Bohater · osoba mówiąca · autor", ua: "Герой · мовець · автор" },
    formula: "s. 89  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj uważnie i odpowiedz. To trzy *różne* role — nie myl ich!",
      ua: "Прочитай уважно і відповідай. Це три *різні* ролі — не плутай!"
    },
    visual: vizGhT49("t49-pytania.png", {
      alt: { pl: "Zadanie 1 — pytania o role", ua: "Завдання 1 — питання про ролі" }
    }),
    items: [
      { pl: "**Bohater** — kto / co jest w centrum obrazu? (*parasol*)", ua: "**Герой** — хто / що в центрі образу? (*parasol*)" },
      { pl: "**Osoba mówiąca** — kto mówi «wyprowadzam…»? (podmiot liryczny / «ja»)", ua: "**Мовець** — хто каже «wyprowadzam…»? (ліричний суб’єкт / «я»)" },
      { pl: "**Autor** — kto napisał wiersz? (*Józef Ratajczak*)", ua: "**Автор** — хто написав вірш? (*Józef Ratajczak*)" }
    ],
    task: {
      id: "t49-s03-role",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz wszystkie prawdziwe.",
        ua: "Познач усі правдиві."
      },
      options: [
        { id: "a", label: { pl: "Bohaterem wiersza jest *parasol*.", ua: "Герой вірша — *parasol*." } },
        { id: "b", label: { pl: "Osoba mówiąca to «ja», które wyprowadza parasol.", ua: "Мовець — «я», що виводить парасольку." } },
        { id: "c", label: { pl: "Autorem jest Józef Ratajczak.", ua: "Автор — Юзеф Ратайчак." } },
        { id: "d", label: { pl: "Autorem jest parasol z biura.", ua: "Автор — парасолька з офісу." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Autor = człowiek z imieniem i nazwiskiem pod tytułem.",
        ua: "Автор = людина з ім’ям і прізвищем під заголовком."
      },
      explanation: {
        pl: "Bohater = parasol. Osoba mówiąca = «ja» w wierszu. Autor = Ratajczak. Parasol nie jest autorem.",
        ua: "Герой = парасолька. Мовець = «я» у вірші. Автор = Ратайчак. Парасолька не автор."
      }
    }
  },

  // 4 — Q1
  {
    type: "practice",
    heading: { pl: "Test · pytanie 1", ua: "Тест · питання 1" },
    formula: "s. 89  ·  zad. 2  ·  pyt. 1",
    promptPlace: "before",
    prompt: {
      pl: "Wskaż właściwą odpowiedź (A–D). Po sprawdzeniu przejdź do kolejnych pytań testu.",
      ua: "Вкажи правильну відповідь (A–D). Після перевірки перейди до наступних питань тесту."
    },
    task: {
      id: "t49-s04-q1",
      type: "single-choice",
      question: {
        pl: "1. Otwieranie parasola kojarzy się osobie mówiącej z:",
        ua: "1. Розкриття парасольки асоціюється в мовця з:"
      },
      options: [
        { id: "a", label: { pl: "A. burzowym niebem", ua: "A. грозовим небом" } },
        { id: "b", label: { pl: "B. stadem czarnych ptaków", ua: "B. зграєю чорних птахів" } },
        { id: "c", label: { pl: "C. rozpostartymi skrzydłami ptaka", ua: "C. розпростертими крилами птаха" } },
        { id: "d", label: { pl: "D. deszczowymi ciemnymi chmurami", ua: "D. дощовими темними хмарами" } }
      ],
      answer: "c",
      hint: {
        pl: "Szukaj w wierszu: *rozpina aksamitne skrzydła / jak ptak*.",
        ua: "Шукай у вірші: *rozpina aksamitne skrzydła / jak ptak*."
      },
      explanation: {
        pl: "Prawidłowa odpowiedź: **C**. Otwieranie = rozpostarte skrzydła ptaka.",
        ua: "Правильна відповідь: **C**. Розкриття = розпростерті крила птаха."
      }
    }
  },

  // 5 — Q2
  {
    type: "practice",
    heading: { pl: "Test · pytanie 2", ua: "Тест · питання 2" },
    formula: "s. 89  ·  zad. 2  ·  pyt. 2",
    promptPlace: "before",
    prompt: {
      pl: "Co znaczy *wyprowadzam parasol na spacer / na czarnej smyczy*?",
      ua: "Що означає *wyprowadzam parasol na spacer / na czarnej smyczy*?"
    },
    task: {
      id: "t49-s05-q2",
      type: "single-choice",
      question: {
        pl: "2. Słowa te oznaczają, że podmiot liryczny:",
        ua: "2. Ці слова означають, що ліричний суб’єкт:"
      },
      options: [
        { id: "a", label: { pl: "A. idzie na spacer pod parasolem", ua: "A. іде на прогулянку під парасолькою" } },
        { id: "b", label: { pl: "B. wyprowadza pod parasolem psa na spacer", ua: "B. виводить під парасолькою пса" } },
        { id: "c", label: { pl: "C. ciągnie za sobą zamknięty czarny parasol", ua: "C. тягне за собою закриту чорну парасольку" } },
        { id: "d", label: { pl: "D. idzie z psem o imieniu Parasol", ua: "D. іде з псом на ім’я Parasol" } }
      ],
      answer: "c",
      hint: {
        pl: "Najpierw parasol jest na smyczy (zamknięty), *dopiero potem* rozpina skrzydła.",
        ua: "Спочатку парасолька на повідку (закрита), *лише потім* розкриває крила."
      },
      explanation: {
        pl: "Prawidłowa odpowiedź: **C**. To zamknięty parasol na «smyczy», nie pies.",
        ua: "Правильна відповідь: **C**. Це закрита парасолька на «повідку», не пес."
      }
    }
  },

  // 6 — Q3
  {
    type: "practice",
    heading: { pl: "Test · pytanie 3", ua: "Тест · питання 3" },
    formula: "s. 89  ·  zad. 2  ·  pyt. 3",
    promptPlace: "before",
    prompt: {
      pl: "Parasol ma *zwyczaje* i *skłonność* — jak poeta o nim mówi?",
      ua: "Парасолька має *zwyczaje* і *skłonność* — як поет про неї говорить?"
    },
    task: {
      id: "t49-s06-q3",
      type: "single-choice",
      question: {
        pl: "3. Podmiot liryczny mówi o parasolu jak o:",
        ua: "3. Ліричний суб’єкт говорить про парасольку як про:"
      },
      options: [
        { id: "a", label: { pl: "A. zwyczajnym przedmiocie", ua: "A. звичайний предмет" } },
        { id: "b", label: { pl: "B. zjawisku pogody", ua: "B. погодне явище" } },
        { id: "c", label: { pl: "C. żywej istocie", ua: "C. живу істоту" } },
        { id: "d", label: { pl: "D. roślinie", ua: "D. рослину" } }
      ],
      answer: "c",
      hint: {
        pl: "Uosobienie: zwyczaje, skłonność, smycz — jak przy kimś żywym.",
        ua: "Уособлення: zwyczaje, skłonność, smycz — як при живій істоті."
      },
      explanation: {
        pl: "Prawidłowa odpowiedź: **C** — jak o żywej istocie (uosobienie).",
        ua: "Правильна відповідь: **C** — як про живу істоту (уособлення)."
      }
    }
  },

  // 7 — Q4
  {
    type: "practice",
    heading: { pl: "Test · pytanie 4", ua: "Тест · питання 4" },
    formula: "s. 89  ·  zad. 2  ·  pyt. 4",
    promptPlace: "before",
    prompt: {
      pl: "Co o *osobie mówiącej* wynika z wiersza?",
      ua: "Що про *мовця* випливає з вірша?"
    },
    task: {
      id: "t49-s07-q4",
      type: "single-choice",
      question: {
        pl: "4. O osobie mówiącej można powiedzieć, że:",
        ua: "4. Про мовця можна сказати, що:"
      },
      options: [
        { id: "a", label: { pl: "A. w niepogodę spaceruje pod parasolem", ua: "A. у негоду гуляє під парасолькою" } },
        { id: "b", label: { pl: "B. myli parasol z urzędnikiem", ua: "B. плутає парасольку з чиновником" } },
        { id: "c", label: { pl: "C. opiekuje się psem", ua: "C. доглядає пса" } },
        { id: "d", label: { pl: "D. lubi ptaki", ua: "D. любить птахів" } }
      ],
      answer: "a",
      hint: {
        pl: "*Można pomylić z urzędnikiem* to żart / porównanie, nie dosłowna pomyłka. Psa nie ma.",
        ua: "*Можна сплутати з чиновником* — жарт / порівняння, не дослівна плутанина. Пса немає."
      },
      explanation: {
        pl: "Prawidłowa odpowiedź: **A**. B to tylko obraz poetycki; C i D nie wynikają z tekstu.",
        ua: "Правильна відповідь: **A**. B — лише поетичний образ; C і D з тексту не випливають."
      }
    }
  },

  // 8 — Q5 + Q6
  {
    type: "practice",
    heading: { pl: "Test · pytania 5–6", ua: "Тест · питання 5–6" },
    formula: "s. 89  ·  zad. 2  ·  pyt. 5–6",
    promptPlace: "before",
    prompt: {
      pl: "Przypomnij: *epitet* = określenie; *porównanie* często z *jak*. Zaznacz *obie* poprawne odpowiedzi z podręcznika.",
      ua: "Пригадай: *епітет* = означення; *порівняння* часто з *jak*. Познач *обидві* правильні відповіді з підручника."
    },
    visual: vizGhT49("t49-parasol-ptak.jpg", {
      alt: { pl: "Parasol-ptak — ilustracja", ua: "Парасолька-птах — ілюстрація" },
      place: "after"
    }),
    task: {
      id: "t49-s08-q56",
      type: "multiple-choice",
      question: {
        pl: "Zaznacz prawidłowe (pyt. 5 i 6):",
        ua: "Познач правильні (пит. 5 і 6):"
      },
      options: [
        { id: "a", label: { pl: "5 → D: *na czarnej smyczy, aksamitne skrzydła, szerokie pióra* (epitety)", ua: "5 → D: *na czarnej smyczy, aksamitne skrzydła, szerokie pióra* (епітети)" } },
        { id: "b", label: { pl: "6 → B: *rozpina aksamitne skrzydła jak ptak* (porównanie)", ua: "6 → B: *rozpina aksamitne skrzydła jak ptak* (порівняння)" } },
        { id: "c", label: { pl: "5 → A: *deszcz, burza, grad* to epitety", ua: "5 → A: *deszcz, burza, grad* — епітети" } },
        { id: "d", label: { pl: "6 → D: samo *jak ptak* to pełna odpowiedź z klucza", ua: "6 → D: лише *jak ptak* — повна відповідь з ключа" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Epitety to określenia (*czarnej, aksamitne, szerokie*). Porównanie = pełne *rozpina… jak ptak* (B).",
        ua: "Епітети — означення (*czarnej, aksamitne, szerokie*). Порівняння = повне *rozpina… jak ptak* (B)."
      },
      explanation: {
        pl: "Klucz: **5D** i **6B**. *Deszcz, burza, grad* to rzeczowniki, nie epitety.",
        ua: "Ключ: **5D** і **6B**. *Deszcz, burza, grad* — іменники, не епітети."
      }
    }
  },

  // 9 — synonyms niepogoda
  {
    type: "practice",
    heading: { pl: "Synonimy «niepogody»", ua: "Синоніми «niepogody»" },
    formula: "s. 89  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Wypisz z wiersza co najmniej dwa rzeczowniki podobne do *niepogoda*.",
      ua: "Випиши з вірша принаймні два іменники, подібні до *niepogoda*."
    },
    items: [
      { pl: "Z początku wiersza: *deszcz, burza, grad, śnieg*.", ua: "З початку вірша: *deszcz, burza, grad, śnieg*." },
      { pl: "Most UA: *niepogoda* ≈ *негода / непогода*.", ua: "Міст UA: *niepogoda* ≈ *негода / непогода*." }
    ],
    task: {
      id: "t49-s09-syn",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy z wiersza PASUJĄ jako synonimy / bliskoznaczne do *niepogoda*? Zaznacz wszystkie.",
        ua: "Які слова з вірша ПІДХОДЯТЬ як синоніми / близькі до *niepogoda*? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "deszcz", ua: "deszcz" } },
        { id: "b", label: { pl: "burza", ua: "burza" } },
        { id: "c", label: { pl: "grad", ua: "grad" } },
        { id: "d", label: { pl: "biuro", ua: "biuro" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Pierwsze wersy: *deszcz, burza, grad, śnieg*. *Biuro* to miejsce pracy.",
        ua: "Перші рядки: *deszcz, burza, grad, śnieg*. *Biuro* — місце роботи."
      },
      explanation: {
        pl: "Deszcz, burza, grad (i śnieg) = rodzaje niepogody. Biuro nie.",
        ua: "Deszcz, burza, grad (і śnieg) = види негоди. Biuro — ні."
      }
    }
  },

  // 10 — interpret + most
  {
    type: "summary",
    heading: { pl: "Interpretacja + most do T50", ua: "Інтерпретація + міст до T50" },
    formula: "s. 89  ·  zad. 4  ·  koniec T49",
    promptPlace: "before",
    prompt: {
      pl: "Jak rozumiesz: *«bo wszak zwyczaje parasola znacie / i jego ciągłą skłonność do niepogody»*? Potem: na lekcji 50 — *nie* z rzeczownikami, synonimy, *pióro*, dyktando, opowiadanie o gradzie.",
      ua: "Як розумієш: *«bo wszak zwyczaje parasola znacie / i jego ciągłą skłonność do niepogody»*? Далі: на уроці 50 — *nie* з іменниками, синоніми, *pióro*, диктант, оповідання про град."
    },
    items: [
      { pl: "Parasol «lubi» złą pogodę — pojawia się, gdy pada (żart + uosobienie).", ua: "Парасолька «любить» негоду — з’являється, коли йде дощ (жарт + уособлення)." },
      { pl: "Klucz testu zad. 2: **1C, 2C, 3C, 4A, 5D, 6B**.", ua: "Ключ тесту зад. 2: **1C, 2C, 3C, 4A, 5D, 6B**." }
    ],
    task: {
      id: "t49-s10-interpret",
      type: "open-answer",
      question: {
        pl: "W 2–4 zdaniach (po polsku) wyjaśnij fragment o *skłonności do niepogody*.",
        ua: "У 2–4 реченнях (польською) поясни уривок про *склонність до негоди*."
      },
      hint: {
        pl: "Wzór: Parasol jest potrzebny przy deszczu. Poeta żartuje, że parasol «ciągnie» do niepogody.",
        ua: "Зразок: Парасолька потрібна під час дощу. Поет жартує, що вона «тягнеться» до негоди."
      },
      explanation: {
        pl: "Sens: parasol kojarzy się z niepogodą; poeta mówi o tym jak o skłonności żywej istoty.",
        ua: "Сенс: парасолька асоціюється з негодою; поет говорить про це як про схильність живої істоти."
      }
    }
  }
]};
