function emT42(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T42 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT42(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T42 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 78  ·  Lekcja 42  ·  stopniowanie",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Tematy 42 i 43 to *jedna* strona podręcznika (s. 78), ale *dwie* osobne godziny. Dziś: *stopniowanie* przymiotników — trzy stopnie, trzy sposoby, formy w komiksie, stragan w Egipcie i plastyczny opis rafy. Pisownia *nie* z przymiotnikiem — lekcja 43. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Теми 42 і 43 — *одна* сторінка підручника (с. 78), але *дві* окремі години. Сьогодні: *ступенювання* прикметників — три ступені, три способи, форми в коміксі, ятка в Єгипті і пластичний опис рифу. Написання *nie* з прикметником — урок 43. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "powiem, na czym polega *stopniowanie* (cecha bardziej nasilona);", ua: "скажу, у чому *ступенювання* (ознака сильніша);" },
      { pl: "utworzę formy: *równy → wyższy → najwyższy*;", ua: "утворю форми: *звичайний → вищий → найвищий*;" },
      { pl: "rozróżnię stopniowanie *proste, opisowe, nieregularne*;", ua: "розрізнятиму ступенювання *просте, описове, нерегулярне*;" },
      { pl: "wskażę przymiotniki, które *się nie stopniują*;", ua: "вкажу прикметники, які *не ступенюються*;" },
      { pl: "użyję stopni w opisie ilustracji.", ua: "використаю ступені в описі ілюстрації." }
    ],
    task: {
      id: "t42-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Tworzyć i rozpoznawać trzy stopnie przymiotnika.", ua: "Утворювати і розпізнавати три ступені прикметника." } },
        { id: "b", label: { pl: "Rozróżnić sposoby: proste, opisowe, nieregularne.", ua: "Розрізняти способи: просте, описове, нерегулярне." } },
        { id: "c", label: { pl: "Już dziś zapisać pełną regułę nie z przymiotnikiem (wcale, bynajmniej, ale).", ua: "Уже сьогодні записати повне правило nie з прикметником (wcale, bynajmniej, ale)." } },
        { id: "d", label: { pl: "Wskazać przymiotniki, które nie podlegają stopniowaniu.", ua: "Вказати прикметники, які не підлягають ступенюванню." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ramka o *nie* i komiks z Nilem są na tej samej stronie — która lekcja?",
        ua: "Рамка про *nie* і комікс із Нілом на тій самій сторінці — який урок?"
      },
      explanation: {
        pl: "Dziś: stopnie i sposoby. Pisownia *nie* — lekcja 43.",
        ua: "Сьогодні: ступені і способи. Написання *nie* — урок 43."
      }
    }
  },
  // 2
  {
    type: "observe",
    heading: { pl: "Most UA · stopniowanie ≈ ступенювання", ua: "Міст UA · stopniowanie ≈ ступенювання" },
    formula: "PL ↔ UA  ·  podobieństwa",
    promptPlace: "before",
    prompt: {
      pl: "Ukraina już zna *ступені порівняння*. W PL i UA logika jest bliska — zapisz mosty, żeby nie uczyć się od zera.",
      ua: "Українська вже знає *ступені порівняння*. У PL і UA логіка близька — запиши мости, щоб не вчити з нуля."
    },
    items: [
      { pl: "*stopień równy* ≈ звичайний ступінь: *młody* · *молодий*.", ua: "*stopień równy* ≈ звичайний: *młody* · *молодий*." },
      { pl: "*stopień wyższy* ≈ вищий: końcówka *-szy / -ejszy* ≈ *-ший / -іший* (*młodszy* · *молодший*).", ua: "*stopień wyższy* ≈ вищий: *-szy / -ejszy* ≈ *-ший / -іший* (*młodszy* · *молодший*)." },
      { pl: "*stopień najwyższy* ≈ найвищий: przedrostek *naj-* ≈ *най-* (*najmłodszy* · *наймолодший*).", ua: "*stopień najwyższy* ≈ найвищий: *naj-* ≈ *най-* (*najmłodszy* · *наймолодший*)." },
      { pl: "Opisowo: *bardziej / najbardziej* ≈ *більш / найбільш*; *mniej / najmniej* ≈ *менш / найменш*.", ua: "Описово: *bardziej / najbardziej* ≈ *більш / найбільш*; *mniej / najmniej* ≈ *менш / найменш*." },
      { pl: "Uwaga PL: w *dłuższy* jest wymiana *g → ż* (jak często w UA *довший*).", ua: "Увага PL: у *dłuższy* є чергування *g → ż* (як часто в UA *довший*)." }
    ],
    task: {
      id: "t42-s02-most",
      type: "single-choice",
      question: {
        pl: "Który most PL ↔ UA jest NA PEWNO prawdziwy?",
        ua: "Який міст PL ↔ UA НАПЕВНО правильний?"
      },
      options: [
        { id: "a", label: { pl: "naj- w polskim ≈ най- w ukraińskim", ua: "naj- у польській ≈ най- в українській" } },
        { id: "b", label: { pl: "W polskim nie ma stopnia wyższego", ua: "У польській немає вищого ступеня" } },
        { id: "c", label: { pl: "bardziej znaczy to samo co najmniej", ua: "bardziej означає те саме, що najmniej" } }
      ],
      answer: "a",
      hint: {
        pl: "Porównaj: *najpiękniejszy* · *найгарніший*.",
        ua: "Порівняй: *najpiękniejszy* · *найгарніший*."
      },
      explanation: {
        pl: "*naj-* ≈ *най-*. Stopień wyższy istnieje. *bardziej* ≠ *najmniej*.",
        ua: "*naj-* ≈ *най-*. Вищий ступінь є. *bardziej* ≠ *najmniej*."
      }
    }
  },
  // 3
  {
    type: "observe",
    heading: { pl: "Komiks · ciekawy i długi", ua: "Комікс · ciekawy і długi" },
    formula: "s. 78  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij wypowiedzi formami *ciekawy* i *długi*. Najpierw zobacz, *który stopień* pasuje: równy, wyższy (*o wiele…*) czy najwyższy (*jego … wyprawą*).",
      ua: "Доповни репліки формами *ciekawy* і *długi*. Спочатку подивись, *який ступінь* пасує: звичайний, вищий (*o wiele…*) чи найвищий (*jego … wyprawą*)."
    },
    visual: vizGhT42("t42-komiks-emaile.jpg", {
      prompt: "Komiks: e-maile Wiktora.",
      alt: {
        pl: "Chłopcy czytają e-maile o podróżach Wiktora.",
        ua: "Хлопці читають e-mailи про подорожі Віктора."
      }
    }),
    items: [
      { pl: "Glosy: *e-mail* = лист; *wyprawa* = виправа / експедиція; *Giza* = Гіза.", ua: "Глоси: *e-mail* = лист; *wyprawa* = виправа; *Giza* = Гіза." },
      { pl: "*długi → dłuższy → najdłuższy* (g→ż).", ua: "*długi → dłuższy → najdłuższy* (g→ż)." },
      { pl: "*ciekawy → ciekawszy → najciekawszy*.", ua: "*ciekawy → ciekawszy → najciekawszy*." },
      { pl: "Po *tyle* + dopełniacz liczby mnogiej: *ciekawych / długich*.", ua: "Після *tyle* + родовий множини: *ciekawych / długich*." }
    ],
    task: {
      id: "t42-s03-komiks",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienia NA PEWNO pasują do komiksu? Zaznacz wszystkie pewne.",
        ua: "Які доповнення НАПЕВНО пасують до коміксу? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "«Ostatni e-mail był długi, ale ten jest o wiele dłuższy.»", ua: "«Ostatni e-mail był długi, ale ten jest o wiele dłuższy.»" } },
        { id: "b", label: { pl: "«…tyle ciekawych podróży…» oraz «…jego najciekawszą / najdłuższą wyprawą?»", ua: "«…tyle ciekawych podróży…» і «…jego najciekawszą / najdłuższą wyprawą?»" } },
        { id: "c", label: { pl: "Wszędzie tylko stopień równy: długi, ciekawy — bez -szy i naj-.", ua: "Скрізь лише звичайний ступінь: długi, ciekawy — без -szy і naj-." } },
        { id: "d", label: { pl: "«…jedna, ale ciekawa / długa wyprawa…»", ua: "«…jedna, ale ciekawa / długa wyprawa…»" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*o wiele* → stopień wyższy. *jego … wyprawą* → często najwyższy.",
        ua: "*o wiele* → вищий ступінь. *jego … wyprawą* → часто найвищий."
      },
      explanation: {
        pl: "Równy, wyższy i najwyższy są w komiksie. Sam równy nie wystarczy.",
        ua: "Звичайний, вищий і найвищий є в коміксі. Лише звичайного мало."
      }
    }
  },
  // 4
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · stopniowanie", ua: "Zapamiętaj · ступенювання" },
    formula: "s. 78  ·  ramka podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "To *ramka z podręcznika* — przepisz do zeszytu. Trzy stopnie + trzy sposoby.",
      ua: "Це *рамка з підручника* — перепиши в зошит. Три ступені + три способи."
    },
    text: {
      pl: "**Przymiotniki mogą się stopniować**, co się wyraża tym, że **jakaś cecha jest bardziej nasilona**. Wyróżniamy trzy sposoby: **proste** (*piękny → piękniejszy → najpiękniejszy*), **opisowe** (*słone → bardziej słone → najbardziej słone*) i **nieregularne** (*zły → gorszy → najgorszy*).",
      ua: "**Прикметники можуть ступенюватися** — це означає, що **якась ознака сильніша**. Три способи: **просте** (*piękny → piękniejszy → najpiękniejszy*), **описове** (*słone → bardziej słone → najbardziej słone*) і **нерегулярне** (*zły → gorszy → najgorszy*)."
    },
    items: [
      { pl: "**Stopień równy** — cecha «tak po prostu»: *piękny*.", ua: "**Звичайний ступінь** — ознака «просто так»: *piękny*." },
      { pl: "**Stopień wyższy** — cecha *bardziej*: *piękniejszy* / *bardziej słone*.", ua: "**Вищий ступінь** — ознака *більш*: *piękniejszy* / *bardziej słone*." },
      { pl: "**Stopień najwyższy** — cecha *najbardziej*: *najpiękniejszy* / *najbardziej słone*.", ua: "**Найвищий ступінь** — ознака *найбільш*: *najpiękniejszy* / *najbardziej słone*." },
      { pl: "Mniejsze nasilenie opisowo: *mniej interesujący, najmniej interesujący*.", ua: "Менша сила описово: *mniej interesujący, najmniej interesujący*." }
    ],
    task: {
      id: "t42-s04-ramka",
      type: "single-choice",
      question: {
        pl: "Para *zły → gorszy → najgorszy* to stopniowanie:",
        ua: "Пара *zły → gorszy → najgorszy* — це ступенювання:"
      },
      options: [
        { id: "a", label: { pl: "nieregularne", ua: "нерегулярне" } },
        { id: "b", label: { pl: "opisowe (bardziej / najbardziej)", ua: "описове (bardziej / najbardziej)" } },
        { id: "c", label: { pl: "tylko równe — bez stopni", ua: "лише звичайне — без ступенів" } }
      ],
      answer: "a",
      hint: {
        pl: "Czy pień się zmienia całkowicie? Porównaj z *piękny → piękniejszy*.",
        ua: "Чи основа змінюється цілком? Порівняй із *piękny → piękniejszy*."
      },
      explanation: {
        pl: "*zły / gorszy / najgorszy* = nieregularne (jak UA *поганий / гірший / найгірший*).",
        ua: "*zły / gorszy / najgorszy* = нерегулярне (як UA *поганий / гірший / найгірший*)."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Uwaga · po p, b, k… piszemy sz", ua: "Увага · після p, b, k… пишемо sz" },
    formula: "s. 78  ·  ortografia stopni",
    promptPlace: "before",
    prompt: {
      pl: "W stopniu wyższym i najwyższym po spółgłoskach *p, b, k, t, d, ch, j, w* piszemy **sz**: *lepszy, większy, najszybszy*.",
      ua: "У вищому і найвищому ступені після приголосних *p, b, k, t, d, ch, j, w* пишемо **sz**: *lepszy, większy, najszybszy*."
    },
    items: [
      { pl: "*dobry → lepszy → najlepszy* (nie *lepszy* z *s*!).", ua: "*dobry → lepszy → najlepszy* (не *lepszy* з *s*!)." },
      { pl: "*duży → większy → największy*.", ua: "*duży → większy → największy*." },
      { pl: "Most UA: *кращий / більший* — inne litery, ta sama idea «mocniejsza cecha».", ua: "Міст UA: *кращий / більший* — інші літери, та сама ідея." }
    ],
    task: {
      id: "t42-s05-sz",
      type: "true-false",
      question: {
        pl: "Czy poprawna forma stopnia najwyższego od *szybki* to *najszybszy* (ze *sz*)?",
        ua: "Чи правильна форма найвищого ступеня від *szybki* — *najszybszy* (із *sz*)?"
      },
      answer: true,
      hint: {
        pl: "Po *b* w *szyb-* reguła każe *sz*.",
        ua: "Після *b* у *szyb-* правило каже *sz*."
      },
      explanation: {
        pl: "Tak: *szybki → szybszy → najszybszy*.",
        ua: "Так: *szybki → szybszy → najszybszy*."
      }
    }
  },
  // 6
  {
    type: "observe",
    heading: { pl: "Które się nie stopniują", ua: "Які не ступенюються" },
    formula: "s. 78  ·  cecha stała",
    promptPlace: "before",
    prompt: {
      pl: "Niektóre przymiotniki *się nie stopniują* — określają *stałą* cechę (materiał, pochodzenie surowca): *stalowy, drewniany, płócienny, złoty*.",
      ua: "Деякі прикметники *не ступенюються* — називають *сталу* ознаку (матеріал): *stalowy, drewniany, płócienny, złoty*."
    },
    items: [
      { pl: "Stopniujemy: *miły, wesoły, ciężki, kosztowny, wielki*…", ua: "Ступенюємо: *miły, wesoły, ciężki, kosztowny, wielki*…" },
      { pl: "Nie stopniujemy: *drewniany, złoty, pamiątkowy* (jako «z materiału / rodzaju»).", ua: "Не ступенюємо: *drewniany, złoty, pamiątkowy* (як «з матеріалу / типу»)." },
      { pl: "Most UA: *дерев’яний, золотий* — теж зазвичай без ступенів.", ua: "Міст UA: *дерев’яний, золотий* — теж зазвичай без ступенів." }
    ],
    task: {
      id: "t42-s06-nie-st",
      type: "multiple-choice",
      question: {
        pl: "Które przymiotniki NA PEWNO się nie stopniują? Zaznacz wszystkie pewne.",
        ua: "Які прикметники НАПЕВНО не ступенюються? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "drewniany", ua: "drewniany" } },
        { id: "b", label: { pl: "wesoły", ua: "wesoły" } },
        { id: "c", label: { pl: "stalowy", ua: "stalowy" } },
        { id: "d", label: { pl: "miły", ua: "miły" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Materiał / stała cecha vs cecha, którą można nasilić.",
        ua: "Матеріал / стала ознака vs ознака, яку можна посилити."
      },
      explanation: {
        pl: "*drewniany, stalowy* — stałe. *wesoły, miły* — stopniujemy.",
        ua: "*drewniany, stalowy* — сталі. *wesoły, miły* — ступенюємо."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Stragan w Egipcie · związki", ua: "Ятка в Єгипті · сполучення" },
    formula: "s. 78  ·  zad. 2a–b",
    promptPlace: "before",
    prompt: {
      pl: "Połącz przymiotniki z rzeczownikami z ilustracji (*sprzedawca, kot, posąg, papirus, piramida, talerz, skarabeusz…*). Potem: które się *stopniują*?",
      ua: "Поєднай прикметники з іменниками з ілюстрації (*sprzedawca, kot, posąg, papirus, piramida, talerz, skarabeusz…*). Потім: які *ступенюються*?"
    },
    visual: vizGhT42("t42-egipt-stragan.jpg", {
      prompt: "Stragan z pamiątkami.",
      alt: {
        pl: "Egipski stragan z posągami, papirusami i piramidami.",
        ua: "Єгипетська ятка з статуями, папірусами і пірамідами."
      }
    }),
    items: [
      { pl: "Przykłady: *wesoły sprzedawca, drewniany kot, złoty skarabeusz, wielka piramida*.", ua: "Приклади: *wesoły sprzedawca, drewniany kot, złoty skarabeusz, wielka piramida*." },
      { pl: "Słownik: *kosztowny* = цінний; *usłużny* = услужливий; *pamiątkowy* = сувенірний.", ua: "Словник: *kosztowny* = цінний; *usłużny* = услужливий; *pamiątkowy* = сувенірний." },
      { pl: "Stopniują się m.in.: *dobry, miły, ciężki, wielki, wesoły*.", ua: "Ступенюються зокрема: *dobry, miły, ciężki, wielki, wesoły*." },
      { pl: "Nie stopniują się m.in.: *drewniany, złoty*.", ua: "Не ступенюються зокрема: *drewniany, złoty*." }
    ],
    task: {
      id: "t42-s07-stragan",
      type: "single-choice",
      question: {
        pl: "Która para jest NAJLEPSZA: związek + decyzja o stopniowaniu?",
        ua: "Яка пара НАЙКРАЩА: сполучення + рішення про ступенювання?"
      },
      options: [
        { id: "a", label: { pl: "drewniany kot — nie stopniujemy", ua: "drewniany kot — не ступенюємо" } },
        { id: "b", label: { pl: "drewniany kot — drewniejszy, najdrewniejszy", ua: "drewniany kot — drewniejszy, najdrewniejszy" } },
        { id: "c", label: { pl: "wesoły sprzedawca — nie stopniujemy nigdy", ua: "wesoły sprzedawca — ніколи не ступенюємо" } }
      ],
      answer: "a",
      hint: {
        pl: "Materiał vs cecha człowieka.",
        ua: "Матеріал vs ознака людини."
      },
      explanation: {
        pl: "*drewniany* = materiał → bez stopni. *wesoły* się stopniuje (*weselszy*).",
        ua: "*drewniany* = матеріал → без ступенів. *wesoły* ступенюється (*weselszy*)."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Trzy sposoby · przykłady", ua: "Три способи · приклади" },
    formula: "s. 78  ·  zad. 2c",
    promptPlace: "before",
    prompt: {
      pl: "Podaj po jednym przykładzie: *prosto, opisowo, nieregularnie*. Możesz brać ze straganu lub z ramki.",
      ua: "Дай по одному прикладу: *просте, описове, нерегулярне*. Можна зі ятки або з рамки."
    },
    items: [
      { pl: "Proste: *miły → milszy → najmilszy* / *wielki → większy → największy*.", ua: "Просте: *miły → milszy → najmilszy* / *wielki → większy → największy*." },
      { pl: "Opisowe: *kosztowny → bardziej kosztowny → najbardziej kosztowny*.", ua: "Описове: *kosztowny → bardziej kosztowny → najbardziej kosztowny*." },
      { pl: "Nieregularne: *dobry → lepszy → najlepszy*.", ua: "Нерегулярне: *dobry → lepszy → najlepszy*." }
    ],
    task: {
      id: "t42-s08-sposoby",
      type: "single-choice",
      question: {
        pl: "Który zestaw poprawnie pokazuje trzy sposoby?",
        ua: "Який набір правильно показує три способи?"
      },
      options: [
        { id: "a", label: { pl: "proste: milszy · opisowe: bardziej kosztowny · nieregularne: lepszy", ua: "просте: milszy · описове: bardziej kosztowny · нерегулярне: lepszy" } },
        { id: "b", label: { pl: "wszystkie trzy: tylko bardziej / najbardziej", ua: "усі три: лише bardziej / najbardziej" } },
        { id: "c", label: { pl: "nieregularne: drewniany → drewniejszy", ua: "нерегулярне: drewniany → drewniejszy" } }
      ],
      answer: "a",
      hint: {
        pl: "Nieregularne = nowy pień (*dobry/lepszy*), nie materiał.",
        ua: "Нерегулярне = нова основа (*dobry/lepszy*), не матеріал."
      },
      explanation: {
        pl: "Trzy różne mechanizmy. *drewniany* się nie stopniuje.",
        ua: "Три різні механізми. *drewniany* не ступенюється."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Rafa · opis plastyczny", ua: "Риф · пластичний опис" },
    formula: "s. 78  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Opisz zdjęcie. Użyj *jak najwięcej* przymiotników w *różnych stopniach*. W zeszycie 4–6 zdań. Tu zaznacz, co NA PEWNO możesz wykorzystać.",
      ua: "Опиши фото. Використай *якомога більше* прикметників у *різних ступенях*. У зошиті 4–6 речень. Тут познач, що НАПЕВНО можна взяти."
    },
    visual: vizGhT42("t42-rafa.jpg", {
      prompt: "Rafa koralowa.",
      alt: {
        pl: "Podwodna rafa: korale, ryby, rozgwiazda.",
        ua: "Підводний риф: корали, риби, морська зірка."
      }
    }),
    items: [
      { pl: "Słownik: *rafa* = риф; *koral* = корал; *rozgwiazda* = морська зірка; *piasek* = пісок.", ua: "Словник: *rafa* = риф; *koral* = корал; *rozgwiazda* = морська зірка; *piasek* = пісок." },
      { pl: "Równy: *niebieska woda, pomarańczowa rozgwiazda, zielona trawa morska*.", ua: "Звичайний: *niebieska woda, pomarańczowa rozgwiazda, zielona trawa morska*." },
      { pl: "Wyższy: *większy koral, jaśniejsze ryby, bardziej kolorowa rafa*.", ua: "Вищий: *większy koral, jaśniejsze ryby, bardziej kolorowa rafa*." },
      { pl: "Najwyższy: *najjaśniejsze żółte rybki, najbardziej plastyczny opis*.", ua: "Найвищий: *najjaśniejsze żółte rybki, najbardziej plastyczny opis*." }
    ],
    task: {
      id: "t42-s09-rafa",
      type: "open-answer",
      question: {
        pl: "Napisz 2–3 zdania o rafie z co najmniej jednym stopniem wyższym lub najwyższym.",
        ua: "Напиши 2–3 речення про риф із принаймні одним вищим або найвищим ступенем."
      },
      hint: {
        pl: "Porównaj: mała ryba vs wielki koral; żółte vs fioletowe.",
        ua: "Порівняй: мала риба vs великий корал; жовті vs фіолетові."
      },
      explanation: {
        pl: "Dobry opis miesza równy + wyższy/najwyższy + ewentualnie *bardziej/najbardziej*.",
        ua: "Добрий опис мішає звичайний + вищий/найвищий + можливо *bardziej/najbardziej*."
      }
    }
  },
  // 10
  {
    type: "summary",
    heading: { pl: "Podsumowanie · most do T43", ua: "Підсумок · міст до T43" },
    formula: "s. 78  ·  co zabieram",
    promptPlace: "before",
    prompt: {
      pl: "Dziś domykamy *stopniowanie*. Jutro tytuł lekcji 43 brzmi: *Niewygodna i nienajbezpieczniejsza podróż* — zauważ *nie-* już w tytułach!",
      ua: "Сьогодні закриваємо *ступенювання*. Завтра заголовок уроку 43: *Niewygodna i nienajbezpieczniejsza podróż* — зауваж *nie-* уже в назвах!"
    },
    items: [
      { pl: "Trzy stopnie: równy, wyższy, najwyższy.", ua: "Три ступені: звичайний, вищий, найвищий." },
      { pl: "Trzy sposoby: proste, opisowe, nieregularne.", ua: "Три способи: просте, описове, нерегулярне." },
      { pl: "Niektóre cechy stałe się nie stopniują.", ua: "Деякі сталі ознаки не ступенюються." },
      { pl: "Lekcja 43: *nie* z przymiotnikiem — łącznie i wyjątki.", ua: "Урок 43: *nie* з прикметником — разом і винятки." }
    ],
    task: {
      id: "t42-s10-most",
      type: "true-false",
      question: {
        pl: "Czy formy *niewygodna* i *nienajbezpieczniejsza* już pokazują *nie* pisane łącznie z przymiotnikiem?",
        ua: "Чи форми *niewygodna* і *nienajbezpieczniejsza* уже показують *nie*, написане разом із прикметником?"
      },
      answer: true,
      hint: {
        pl: "Spójrz na tytuł lekcji 43 w spisie.",
        ua: "Подивись на назву уроку 43 у списку."
      },
      explanation: {
        pl: "Tak — to zapowiedź reguły z lekcji 43 (łącznie, także z *naj-*).",
        ua: "Так — це передвістя правила з уроку 43 (разом, також із *naj-*)."
      }
    }
  }
]};
