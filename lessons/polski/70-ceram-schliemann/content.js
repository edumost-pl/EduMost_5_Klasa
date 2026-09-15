function emT70(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T70 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT70(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T70 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 143  ·  Lekcja 70  ·  Troja",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Opowieść o człowieku, który uwierzył mitom* — C.W. Ceram, *Bajka o biednym chłopcu, który znalazł skarb*. **Notatka biograficzna**, oś czasu, skarb Priama. Polski pierwszy. Dla 🇺🇦: wyjaśnimy skróty (*ur.*, *zm.*) i glosy.",
      ua: "Тема: *Оповідь про людину, що повірила міфам* — C.W. Ceram. **Біографічна нотатка**, вісь часу, скарб Пріама. Польська перша. Пояснимо скорочення (*ur.*, *zm.*) і глоси."
    },
    items: [
      { pl: "opowiem o Schliemannie z tekstu i przypisów;", ua: "розповім про Шлімана з тексту й виносок;" },
      { pl: "ułożę fakty na osi czasu;", ua: "розкладу факти на вісі часу;" },
      { pl: "napiszę zwięzłą notatkę biograficzną (jak w słowniku).", ua: "напишу стислу біографічну нотатку (як у словнику)." }
    ],
    task: {
      id: "t70-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam fragment Cerama o Schliemannie", ua: "Читаю уривок Ceramа про Шлімана" } },
        { id: "b", label: { pl: "Układam oś czasu i notatkę biograficzną", ua: "Складаю вісь часу і біографічну нотатку" } },
        { id: "c", label: { pl: "Tylko analizę wiersza o słońcu (to T69)", ua: "Лише аналіз вірша про сонце (це T69)" } },
        { id: "d", label: { pl: "Szukam wiadomości o skarbie Priama", ua: "Шукаю відомості про скарб Пріама" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T69 = góry i wiersz. Dziś = archeologia + notatka.",
        ua: "T69 = гори і вірш. Сьогодні = археологія + нотатка."
      },
      explanation: {
        pl: "A, B, D. C było w T69.",
        ua: "A, B, D. C було в T69."
      }
    }
  },

  // 2 intro
  {
    type: "observe",
    heading: { pl: "Kto to Schliemann?", ua: "Хто такий Шліман?" },
    formula: "s. 143  ·  wstęp",
    promptPlace: "before",
    prompt: {
      pl: "Zanim czytasz: Troja to mit z Homera — a Schliemann uwierzył, że miasto istniało naprawdę.",
      ua: "Перш ніж читати: Троя — міф із Гомера — а Шліман повірив, що місто існувало насправді."
    },
    items: [
      { pl: "**Henryk Schliemann** (czyt. *Szliman*) — amator-archeolog, który szukał Troi.", ua: "**Henryk Schliemann** (чит. *Шліман*) — аматор-археолог, який шукав Трою." },
      { pl: "**C.W. Ceram** — autor opowieści o odkryciach (tu: „bajka” o chłopcu i skarbie).", ua: "**C.W. Ceram** — автор оповідей про відкриття (тут: «казка» про хлопця і скарб)." },
      { pl: "Dla 🇺🇦: *mit* ≠ kłamstwo tu — to dawna opowieść; Schliemann sprawdził ją wykopaliskami.", ua: "UA: *міф* тут ≠ брехня — давня оповідь; Шліман перевірив її розкопками." },
      emT70("Marzenie z dzieciństwa → upór → odkrycie")
    ],
    task: {
      id: "t70-s02-kto",
      type: "single-choice",
      question: {
        pl: "O czym jest dzisiejszy tekst Cerama?",
        ua: "Про що сьогоднішній текст Ceramа?"
      },
      options: [
        { id: "a", label: { pl: "o chłopcu, który marzył znaleźć Troję — i o drodze Schliemanna", ua: "про хлопця, що мріяв знайти Трою — і про шлях Шлімана" } },
        { id: "b", label: { pl: "o wspinaczce w upał do schroniska", ua: "про сходження в спеку до притулку" } },
        { id: "c", label: { pl: "o podróżach palcem po mapie w piątek na Mazury", ua: "про подорожі пальцем по мапі в п’ятницю на Мазури" } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł: *Bajka o biednym chłopcu, który znalazł skarb*.",
        ua: "Заголовок: *Bajka o biednym chłopcu…*."
      },
      explanation: {
        pl: "To biograficzna „bajka” o Schliemannie i Troi.",
        ua: "Це біографічна «казка» про Шлімана і Трою."
      }
    }
  },

  // 3 reading with scroll
  {
    type: "observe",
    heading: { pl: "Czytamy · Bajka o biednym chłopcu…", ua: "Читаємо · Bajka o biednym chłopcu…" },
    formula: "s. 143–146  ·  fragment  ·  C.W. Ceram",
    promptPlace: "before",
    prompt: {
      pl: "Pełny tekst: **4 strony** (+ zdjęcie ruin). Każda strona osobno w jednym bloku. **Najpierw kliknij / ↗ = powiększenie**, potem **przewijaj** strony. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Повний текст: **4 сторінки** (+ фото руїн). Кожна сторінка окремо в одному блоці. **Спочатку клік / ↗ = збільшення**, потім **прокручуй** сторінки. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "s. 143–144: marzenie, języki, fortuny, droga do Grecji / Bunarbaszi.", ua: "с. 143–144: мрія, мови, статок, шлях до Греції / Bunarbaszi." },
      { pl: "s. 145–146: Hissarlik, Zofia, wykopaliska, **9 miast**, skarb Priama (1873).", ua: "с. 145–146: Hissarlik, Зофія, розкопки, **9 міст**, скарб Пріама (1873)." },
      { pl: "Czytaj glosy i przypisy¹–⁴ na stronach.", ua: "Читай глоси й виноски¹–⁴ на сторінках." }
    ],
    task: {
      id: "t70-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Co mały Henryk obiecał sobie po rozmowie z ojcem?",
        ua: "Що маленький Генрик пообіцяв собі після розмови з батьком?"
      },
      options: [
        { id: "a", label: { pl: "że znajdzie Troję i skarb króla", ua: "що знайде Трою і скарб короля" } },
        { id: "b", label: { pl: "że zostanie nauczycielem trybów czasownika", ua: "що стане вчителем способів дієслова" } },
        { id: "c", label: { pl: "że pojedzie tylko na Mazury z mapą", ua: "що поїде лише на Мазури з мапою" } }
      ],
      answer: "a",
      hint: {
        pl: "Cytat: *kiedy dorosnę, znajdę Troję i skarb króla!*",
        ua: "Цитата: *kiedy dorosnę, znajdę Troję i skarb króla!*"
      },
      explanation: {
        pl: "To kluczowe marzenie — motyw całego tekstu.",
        ua: "Це ключова мрія — мотив усього тексту."
      }
    }
  },

  // 4 glosses
  {
    type: "example",
    heading: { pl: "Słownictwo · glosy i przypis", ua: "Словник · глоси й виноска" },
    formula: "s. 143  ·  margines + ¹",
    promptPlace: "before",
    prompt: {
      pl: "Trudne wyrazy z boku tekstu + przypis o Schliemannie.",
      ua: "Складні слова з поля тексту + виноска про Шлімана."
    },
    text: {
      pl: "**klechdy** — opowieści ludowe. **rycina** — rysunek w książce. **niwa** — dziedzina działalności. **Achajowie** — Grecy u Homera. **febra** — groźna choroba (tu: malaria). **Pergamos** — zamek / wzgórze w Troi. **UA:** *klechdy* ≈ перекази; *niwa* ≈ нива / галузь.",
      ua: "**klechdy** — народні оповіді. **rycina** — малюнок у книзі. **niwa** — галузь діяльності. **Achajowie** — греки в Гомера. **febra** — тяжка хвороба. **Pergamos** — замок / пагорб у Трої."
    },
    items: [
      { pl: "Przypisy: ¹ Schliemann 1822–1890 · ⁴ skarb Priama 14 VI 1873 · 9 warstw Troi.", ua: "Виноски: ¹ Шліман 1822–1890 · ⁴ скарб Пріама 14 VI 1873 · 9 шарів Трої." },
      { pl: "Inne: *rekomendacja*, *krnąbrność*, *opieszałość*, *epitet* (tu: obraźliwe określenie).", ua: "Інше: *rekomendacja*, *krnąbrność*, *opieszałość*, *epitet* (образливе означення)." }
    ],
    task: {
      id: "t70-s04-glosy",
      type: "single-choice",
      question: {
        pl: "Co to jest *rycina*?",
        ua: "Що таке *rycina*?"
      },
      options: [
        { id: "a", label: { pl: "rysunek / ilustracja w książce", ua: "малюнок / ілюстрація в книзі" } },
        { id: "b", label: { pl: "rodzaj żlebu w górach", ua: "вид жолоба в горах" } },
        { id: "c", label: { pl: "nazwa statku do Wenezueli", ua: "назва корабля до Венесуели" } }
      ],
      answer: "a",
      hint: {
        pl: "Margines przy scenie z książką Jerrera.",
        ua: "Поле біля сцени з книгою Jerrera."
      },
      explanation: {
        pl: "Rycina = obrazek w książce — tu Eneasz uchodzi z Troi.",
        ua: "Rycina = малюнок у книзі — тут Еней тікає з Трої."
      }
    }
  },

  // 5 zad 1 ocena
  {
    type: "practice",
    heading: { pl: "Zad. 1 · jak oceniano marzenie?", ua: "Завд. 1 · як оцінювали мрію?" },
    formula: "s. 143  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Porozmawiajcie: jak oceniano Henryka Schliemanna i jego marzenie odkrycia Troi?",
      ua: "Поговоріть: як оцінювали Генрика Шлімана і його мрію відкрити Трою?"
    },
    visual: vizGhT70("t70-zad1.png", {
      alt: { pl: "Zad. 1: ocena Schliemanna i marzenia o Troi", ua: "Завд. 1: оцінка Шлімана і мрії про Трою" },
      place: "after"
    }),
    items: [
      { pl: "W tekście: zdumiewająca postać · gorący wyznawca nauki · „nie wierzę” ojcu.", ua: "У тексті: дивовижна постать · палкий прихильник науки · «не вірю» батькові." },
      { pl: "Możesz: podziw / sceptycyzm innych / Twoja ocena uporu.", ua: "Можна: захоплення / скепсис інших / твоя оцінка завзяття." },
      { pl: "Fakt vs opinia: daty = fakt; „szaleniec/geniusz” = opinia.", ua: "Факт vs думка: дати = факт; «божевільний/геній» = думка." }
    ],
    task: {
      id: "t70-s05-ocena",
      type: "open-answer",
      question: {
        pl: "Napisz 4–6 zdań: jak TY oceniasz marzenie Schliemanna? Odwołaj się do tekstu LUB do opinii innych.",
        ua: "Напиши 4–6 речень: як ТИ оцінюєш мрію Шлімана? Посилайся на текст АБО на думки інших."
      },
      hint: {
        pl: "Np. odważne · nierealne wtedy · upór · wiara w mity…",
        ua: "Напр. сміливе · нереальне тоді · завзяття · віра в міфи…"
      },
      explanation: {
        pl: "Ocena: własne zdanie + 1–2 argumenty (cytat / fakt z życia).",
        ua: "Оцінка: власна думка + 1–2 аргументи (цитата / факт із життя)."
      }
    }
  },

  // 6 concept notatka
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · notatka biograficzna", ua: "Zapamiętaj · notatka biograficzna" },
    formula: "s. 143  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Notatka biograficzna = zwięzłe fakty z życia. Spójrz na przykład o Carterze Howardzie.",
      ua: "Біографічна нотатка = стислі факти з життя. Подивись на приклад про Картера Говарда."
    },
    visual: vizGhT70("t70-ramka.png", {
      alt: { pl: "Definicja notatki biograficznej + przykład Carter Howard", ua: "Означення біографічної нотатки + приклад Carter Howard" },
      place: "after"
    }),
    text: {
      pl: "**Notatka biograficzna** informuje o **najważniejszych faktach i dokonaniach** osoby. Jest **zwięzła** i **precyzyjna**. Często: skróty (*ur.*, *zm.*, *hrab.*), informacje rozdzielone przecinkami/średnikami, **czas przeszły**. **UA:** *ur.* = нар.; *zm.* = пом.; *czyt.* = чит.",
      ua: "**Notatka biograficzna** повідомляє про **найважливіші факти й досягнення**. Вона **стисла** і **точна**. Часто: скорочення (*ur.*, *zm.*), коми/крапки з комою, **минулий час**."
    },
    items: [
      { pl: "Wzór: imię · daty · miejsca · zawód · najważniejsze odkrycia.", ua: "Зразок: ім’я · дати · місця · професія · найважливіші відкриття." },
      emT70("Nie opowiadanie przygodowe — tylko fakty w skrócie")
    ],
    task: {
      id: "t70-s06-notatka-cechy",
      type: "multiple-choice",
      question: {
        pl: "Które cechy MA notatka biograficzna? Zaznacz wszystkie.",
        ua: "Які риси МАЄ біографічна нотатка? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "zwięzłość i precyzja", ua: "стислість і точність" } },
        { id: "b", label: { pl: "często skróty i czas przeszły", ua: "часто скорочення і минулий час" } },
        { id: "c", label: { pl: "musi mieć 20 stron dialogów", ua: "має мати 20 сторінок діалогів" } },
        { id: "d", label: { pl: "fakty z życia + dokonania", ua: "факти з життя + досягнення" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ramka: zwięzła, precyzyjna, skróty…",
        ua: "Рамка: стисла, точна, скорочення…"
      },
      explanation: {
        pl: "A, B, D. C to powieść, nie notatka słownikowa.",
        ua: "A, B, D. C — роман, не словникова нотатка."
      }
    }
  },

  // 7 oś czasu
  {
    type: "practice",
    heading: { pl: "Zad. 2a · oś czasu", ua: "Завд. 2a · вісь часу" },
    formula: "s. 143  ·  oś",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz najważniejsze fakty z życia Schliemanna i zapisz je na osi czasu (w zeszycie przy obrazkach).",
      ua: "Обери найважливіші факти з життя Шлімана і запиши їх на вісі часу (в зошиті біля малюнків)."
    },
    visual: vizGhT70("t70-zad2.png", {
      alt: { pl: "Oś czasu z 8 punktami życia Schliemanna", ua: "Вісь часу з 8 точками життя Шлімана" },
      place: "after"
    }),
    items: [
      { pl: "Obrazki-podpowiedzi: narodziny · książka · statek · handel · Grecja · ślub · łopata · skarb.", ua: "Малюнки-підказки: народження · книга · корабель · торгівля · Греція · шлюб · лопата · скарб." },
      { pl: "Korzystaj z tekstu + przypisu. Pełny klucz dat — po *Sprawdź*.", ua: "Користуйся текстом + виноскою. Повний ключ дат — після *Sprawdź*." }
    ],
    task: {
      id: "t70-s07-os",
      type: "multiple-choice",
      question: {
        pl: "Które fakty PASUJĄ do osi (z tekstu/przypisu)? Zaznacz wszystkie.",
        ua: "Які факти ПАСУЮТЬ до вісі (з тексту/виноски)? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "1822 — urodziny Schliemanna", ua: "1822 — народження Шлімана" } },
        { id: "b", label: { pl: "1829 — książka Jerrera i marzenie o Troi", ua: "1829 — книга Jerrera і мрія про Трою" } },
        { id: "c", label: { pl: "1841 — wyjazd do Hamburga / praca na statku", ua: "1841 — виїзд до Гамбурга / робота на кораблі" } },
        { id: "d", label: { pl: "2004 — wyprawa Kamińskiego na biegun z Jasiem Melą", ua: "2004 — виправа Камінського на полюс із Ясем Мелою" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Daty w tekście i przypisie¹ — nie z T67.",
        ua: "Дати в тексті й виносці¹ — не з T67."
      },
      explanation: {
        pl: "A–C z lekcji. D = T67. Dalej: fortuny (~1864) · Grecja 1868 · ślub 1869 · Hissarlik 1870+ · skarb Priama 14 VI 1873 · 9 miast.",
        ua: "A–C з уроку. D = T67. Далі: статок (~1864) · Греція 1868 · шлюб 1869 · Hissarlik 1870+ · скарб Пріама 14 VI 1873 · 9 міст."
      }
    }
  },

  // 8 zad 2b co pomogło
  {
    type: "practice",
    heading: { pl: "Zad. 2b · co pomogło spełnić marzenie?", ua: "Завд. 2b · що допомогло здійснити мрію?" },
    formula: "s. 143  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Ustal i zapisz: co pomogło Schliemannowi zrealizować marzenie — odkrycie Troi.",
      ua: "Визнач і запиши: що допомогло Шліману здійснити мрію — відкриття Трої."
    },
    items: [
      { pl: "Szukaj w tekście: wiara · upór · nauka języków / praca · podróże · wykopaliska…", ua: "Шукай у тексті: віра · завзяття · мови / праця · подорожі · розкопки…" },
      { pl: "Najpierw własne zdanie — klucz po *Sprawdź*.", ua: "Спочатку власна думка — ключ після *Sprawdź*." }
    ],
    task: {
      id: "t70-s08-pomoc",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO pomogło (zgodnie z sensem tekstu)? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО допомогло (за змістом тексту)? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "silne marzenie z dzieciństwa i wiara, że Troja istniała", ua: "сильна мрія з дитинства і віра, що Троя існувала" } },
        { id: "b", label: { pl: "wytrwałość / praca i droga życiowa prowadząca do wykopalisk", ua: "витривалість / праця і життєвий шлях до розкопок" } },
        { id: "c", label: { pl: "natychmiastowe znalezienie Troi w wieku 7 lat bez nauki", ua: "миттєве знаходження Трої в 7 років без навчання" } },
        { id: "d", label: { pl: "ciekawość wzbudzona klechdami ojca i ryciną w książce", ua: "цікавість від klechd батька і ryciny в книзі" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "7-latek dopiero marzy — spełnienie przychodzi później.",
        ua: "7-річний лише мріє — здійснення приходить пізніше."
      },
      explanation: {
        pl: "A, B, D. C fałsz — droga była długa (praca, podróże, wykopaliska).",
        ua: "A, B, D. C хиба — шлях був довгий."
      }
    }
  },

  // 9 zad 2c write note
  {
    type: "practice",
    heading: { pl: "Zad. 2c · notatka o Schliemannie", ua: "Завд. 2c · нотатка про Шлімана" },
    formula: "s. 143  ·  słownik archeologów",
    promptPlace: "before",
    prompt: {
      pl: "Na wzór notatki o Carterze Howardzie zapisz notatkę biograficzną o Henryku Schliemannie.",
      ua: "За зразком нотатки про Картера Говарда напиши біографічну нотатку про Генрика Шлімана."
    },
    items: [
      { pl: "Użyj: imię · *czyt.* · *ur.* / *zm.* · kim był · co odkrył.", ua: "Використай: ім’я · *czyt.* · *ur.* / *zm.* · ким був · що відкрив." },
      { pl: "Styl słownika: przecinki, średniki, czas przeszły, skróty.", ua: "Стиль словника: коми, крапки з комою, минулий час, скорочення." },
      { pl: "UA: możesz najpierw plan po ukraińsku, tekst końcowy po polsku.", ua: "UA: можна спочатку план українською, кінцевий текст польською." }
    ],
    task: {
      id: "t70-s09-notatka",
      type: "open-answer",
      question: {
        pl: "Napisz notatkę biograficzną (6–10 krótkich zdań / segmentów jak u Cartera) o Schliemannie.",
        ua: "Напиши біографічну нотатку (6–10 коротких речень / сегментів як у Картера) про Шлімана."
      },
      hint: {
        pl: "Wzór startu: *Schliemann Henryk (czyt. Szliman), ur. 1822…*",
        ua: "Зразок початку: *Schliemann Henryk (czyt. Szliman), ur. 1822…*"
      },
      explanation: {
        pl: "Ocena: skróty · daty · zawód/rola · Troja / skarb · styl zwięzły (nie opowiadanie).",
        ua: "Оцінка: скорочення · дати · роль · Троя / скарб · стислий стиль."
      }
    }
  },

  // 10 zad 3 skarb Priama
  {
    type: "practice",
    heading: { pl: "Zad. 3 · skarb króla Priama", ua: "Завд. 3 · скарб царя Пріама" },
    formula: "s. 143  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Wyszukaj w dostępnych źródłach wiadomości o tzw. skarbie króla Priama (z dorosłym).",
      ua: "Пошукай у доступних джерелах відомості про т.зв. скарб царя Пріама (з дорослим)."
    },
    visual: vizGhT70("t70-zad3.png", {
      alt: { pl: "Zad. 3: skarb Priama", ua: "Завд. 3: скарб Пріама" },
      place: "after"
    }),
    items: [
      { pl: "Ściąga: zbiór złotych ozdób odkryty przez Schliemanna przy wykopaliskach Troi; nazwa od mitycznego króla Priama.", ua: "Шпаргалка: збірка золотих прикрас, відкрита Шліманом біля розкопок Трої; назва від міфічного царя Пріама." },
      { pl: "Dziś: debata, czy to naprawdę „skarb Priama” — warto wspomnieć, że nazwa jest umowna.", ua: "Сьогодні: дискусія, чи це справді «скарб Пріама» — назва умовна." },
      { pl: "Zapisz 4–5 zdań własnymi słowami (nie kopiuj Wikipedii w całości).", ua: "Запиши 4–5 речень своїми словами (не копіюй Вікіпедію цілком)." }
    ],
    task: {
      id: "t70-s10-skarb",
      type: "open-answer",
      question: {
        pl: "Napisz 5–7 zdań: czym jest skarb Priama, kto go odkrył, dlaczego nazwa jest „tak zwana”.",
        ua: "Напиши 5–7 речень: що таке скарб Пріама, хто відкрив, чому назва «так звана»."
      },
      hint: {
        pl: "Schliemann · Troja / Hissarlik · złoto · mit vs archeologia.",
        ua: "Шліман · Троя / Гіссарлик · золото · міф vs археологія."
      },
      explanation: {
        pl: "Ocena: odkrywca · miejsce · co znaleziono · ostrożność wobec nazwy mitycznej.",
        ua: "Оцінка: відкривач · місце · що знайдено · обережність щодо міфічної назви."
      }
    }
  },

  // 11 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T70", ua: "Підсумок · T70" },
    formula: "s. 143  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Zapamiętaj: marzenie + upór · notatka biograficzna · oś czasu · skarb Priama.",
      ua: "Запам’ятай: мрія + завзяття · біографічна нотатка · вісь часу · скарб Пріама."
    },
    items: [
      { pl: "Ceram opowiada o Schliemannie, który uwierzył mitom Homera.", ua: "Ceram розповідає про Шлімана, що повірив міфам Гомера." },
      { pl: "Notatka biograficzna = fakty, skróty, zwięzłość (wzór: Carter).", ua: "Біографічна нотатка = факти, скорочення, стислість (зразок: Carter)." },
      { pl: "Oś czasu porządkuje życie od marzenia do odkrycia.", ua: "Вісь часу впорядковує життя від мрії до відкриття." },
      emT70("Fakt (data, odkrycie) ≠ opinia („geniusz” / „szaleniec\")")
    ],
    task: {
      id: "t70-s11-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Notatka biograficzna powinna być zwięzła, precyzyjna i oparta na faktach (często ze skrótami).”",
        ua: "Чи твердження правильне? «Біографічна нотатка має бути стислою, точною і на фактах (часто зі скороченнями).»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Ramka z lekcji o notatce.",
        ua: "Рамка з уроку про нотатку."
      },
      explanation: {
        pl: "Prawda — to definicja z podręcznika.",
        ua: "Правда — це означення з підручника."
      }
    }
  }
]};
