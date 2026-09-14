function emT32(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T32 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT32(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T32 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 64–65  ·  Lekcja 32  ·  Dwa wiatry",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Tematy 32–33 to *jeden* wiersz Tuwima, ale *dwa* osobne godziny. Dziś: antonimy, glosy z pól, nagranie, treść i *dwóch bohaterów*. Recytacja, przysłowie i obrazy sadu — lekcja 33. Wiersza nie tłumaczymy. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Теми 32–33 — *один* вірш Тувіма, але *дві* окремі години. Сьогодні: антоніми, глоси з полів, запис, зміст і *два герої*. Декламація, прислів’я і образи саду — урок 33. Вірш не перекладаємо. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "podam pary wyrazów *przeciwstawnych* (antonimy);", ua: "назву пари *протилежних* слів (антоніми);" },
      { pl: "zrelacjonuję treść wiersza *Dwa wiatry*;", ua: "перекажу зміст вірша *Dwa wiatry*;" },
      { pl: "wskażę *dwóch bohaterów* i ich odmienne zachowanie;", ua: "вкажу *двох героїв* і їхню різну поведінку;" },
      { pl: "wyjaśnię glosy z pól: *kamrat, śmiga, pal je licho*;", ua: "поясню глоси з полів: *kamrat, śmiga, pal je licho*;" },
      { pl: "odróżnię *bohatera wiersza* od autora i od podmiotu lirycznego.", ua: "відрізню *героя вірша* від автора і від ліричного суб’єкта." }
    ],
    task: {
      id: "t32-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Podać antonimy i opowiedzieć, o czym jest wiersz.", ua: "Назвати антоніми і розповісти, про що вірш." } },
        { id: "b", label: { pl: "Wskazać dwóch wiatrów i powiedzieć, jak się różnią.", ua: "Вказати двох вітрів і сказати, чим вони відрізняються." } },
        { id: "c", label: { pl: "Już dziś wzorowo wyrecytować cały wiersz z pamięci na konkurs.", ua: "Уже сьогодні зразково продекламувати весь вірш напам’ять на конкурс." } },
        { id: "d", label: { pl: "Wyjaśnić słowa z pomarańczowych pól podręcznika.", ua: "Пояснити слова з помаранчевих полів підручника." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Recytacja i konkurs są w temacie 33. Co zostaje na dziś?",
        ua: "Декламація і конкурс — тема 33. Що лишається на сьогодні?"
      },
      explanation: {
        pl: "Dziś: antonimy, treść, dwaj bohaterowie, glosy. Recytacja, przysłowie, obrazy sadu — lekcja 33.",
        ua: "Сьогодні: антоніми, зміст, два герої, глоси. Декламація, прислів’я, образи саду — урок 33."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Zadanie wstępne · antonimy", ua: "Вступне · антоніми" },
    formula: "s. 64  ·  przed wierszem",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: podaj jak najwięcej wyrazów o *przeciwstawnym* znaczeniu, na przykład *jasny – ciemny*, *wąsko – szeroko*. To *antonimy*. Most: українські *антоніми*. W zeszycie zapisz 4 pary. Potem sprawdź, czy rozumiesz zasadę.",
      ua: "Підручник: назви якомога більше слів із *протилежним* значенням, наприклад *jasny – ciemny*, *wąsko – szeroko*. Це *антоніми*. Міст: українські *антоніми*. У зошиті запиши 4 пари. Потім перевір правило."
    },
    items: [
      { pl: "Wzór z pól: *mały – duży*, *dobry – zły*, *biały – czarny*, *gruby – chudy*.", ua: "Зразок із полів: *mały – duży*, *dobry – zły*, *biały – czarny*, *gruby – chudy*." },
      { pl: "Stopień wyższy też bywa parą: *mniejszy – większy*, *lepszy – gorszy*.", ua: "Вищий ступінь теж буває парою: *mniejszy – większy*, *lepszy – gorszy*." },
      { pl: "W wierszu Tuwim lubi takie pary: *cichuteńko* kontra *pędziwiatr*, *cicho* kontra *świst*.", ua: "У вірші Тувім любить такі пари: *cichuteńko* проти *pędziwiatr*, *cicho* проти *świst*." }
    ],
    task: {
      id: "t32-s02-antonimy",
      type: "single-choice",
      question: {
        pl: "Która para to NA PEWNO antonimy?",
        ua: "Яка пара НАПЕВНО антоніми?"
      },
      options: [
        { id: "a", label: { pl: "jasny – ciemny", ua: "jasny – ciemny" } },
        { id: "b", label: { pl: "jasny – szeroko", ua: "jasny – szeroko" } },
        { id: "c", label: { pl: "wiatr – sad", ua: "wiatr – sad" } }
      ],
      answer: "a",
      hint: {
        pl: "Antonimy = przeciwne znaczenie tego *samego* rodzaju cechy. Jasny i szeroko to różne cechy.",
        ua: "Антоніми = протилежне значення тієї *самої* ознаки. Jasny і szeroko — різні ознаки."
      },
      explanation: {
        pl: "*jasny – ciemny* to antonimy. *jasny – szeroko* miesza jasność z szerokością. *wiatr – sad* to miejsca/zjawiska, nie para przeciwstawna.",
        ua: "*jasny – ciemny* — антоніми. *jasny – szeroko* змішує різні ознаки. *wiatr – sad* — не протилежності."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
    formula: "s. 64–65  ·  nagranie  ·  Julian Tuwim",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw *posłuchaj* nagrania. Potem przeczytaj cały wiersz. Wiersza nie tłumaczymy. Pytania w głowie: ilu jest wiatrów? gdzie który? co się zmienia na końcu?",
      ua: "Спочатку *послухай* запис. Потім прочитай увесь вірш. Вірш не перекладаємо. Питання: скільки вітрів? де який? що змінюється в кінці?"
    },
    text: {
      pl: [
        "Julian Tuwim",
        "Dwa wiatry",
        " ",
        "Jeden wiatr – w polu wiał,",
        "Drugi wiatr – w sadzie grał:",
        "Cichuteńko, leciuteńko,",
        "Liście pieścił i szeleścił,",
        "Mdlał…",
        " ",
        "Jeden wiatr – pędziwiatr!",
        "Piknął kozła, płackiem spadł,",
        "Skoczył, zawiał, zaszybował,",
        "Świdrem w górę zakołował",
        "I przewrócił się, i wpadł",
        "Na szumiący senny sad,",
        "Gdzie cichutko i leciutko",
        "Liście pieścił i szeleścił",
        "Drugi wiatr…",
        " ",
        "Sfrunął śniegiem z wiśni kwiat,",
        "Parsknął śmiechem cały sad,",
        "Wziął wiatr brata za kamrata,",
        "Teraz z nim po polu lata,",
        "Gonią obaj chmury, ptaki,",
        "Mkną, wplątują się w wiatraki,",
        "Głupkowate mylą śmigi,",
        "W prawo, w lewo, świst, podrygi,",
        "Dmą płucami ile sił,",
        "Łobuzują, pal je licho!…",
        "A w sadzie cicho, cicho…"
      ]
    },
    task: {
      id: "t32-s03-w-wierszu",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest w tym wierszu? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО є в цьому вірші? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Dwa wiatry: jeden w polu, drugi w sadzie.", ua: "Два вітри: один у полі, другий у саду." } },
        { id: "b", label: { pl: "Wiatr z pola wpada do sadu, potem latają razem.", ua: "Вітер з поля вривається в сад, потім літають разом." } },
        { id: "c", label: { pl: "Zeus, Helios i Faeton z lekcji 27.", ua: "Зевс, Геліос і Фаетон з уроку 27." } },
        { id: "d", label: { pl: "Na końcu sad zostaje cichy, a wiatry łobuzują w polu.", ua: "Наприкінці сад лишається тихим, а вітри бешкетують у полі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj cały tekst. Czy w wierszu jest Helios?",
        ua: "Читай увесь текст. Чи є у вірші Геліос?"
      },
      explanation: {
        pl: "Dwa wiatry, pole i sad, potem wspólna zabawa w polu, sad znowu cichy. Helios — inne lekcje.",
        ua: "Два вітри, поле і сад, потім спільна забава в полі, сад знову тихий. Геліос — інші уроки."
      }
    }
  },
  {
    type: "example",
    heading: { pl: "Słowa z pól", ua: "Слова з полів" },
    promptPlace: "before",
    prompt: {
      pl: "Cztery glosy z pól s. 65. Najpierw ramka, potem rozbiór: znaczenie *w tym wierszu*.",
      ua: "Чотири глоси з полів с. 65. Спочатку рамка, потім розбір: значення *в цьому вірші*."
    },
    text: {
      pl: "parsknąć śmiechem  ·  kamrat  ·  śmiga  ·  pal je licho",
      ua: "parsknąć śmiechem  ·  kamrat  ·  śmiga  ·  pal je licho"
    },
    items: [
      { pl: "**parsknąć śmiechem** — niespodziewanie zacząć się śmiać.", ua: "**parsknąć śmiechem** — раптом почати сміятися." },
      { pl: "**kamrat** — przyjaciel, towarzysz.", ua: "**kamrat** — друг, товариш." },
      { pl: "**śmiga** — skrzydło wiatraka.", ua: "**śmiga** — крило вітряка." },
      { pl: "**pal je licho** — mniejsza o nie, niech tam, wszystko jedno.", ua: "**pal je licho** — хай там, байдуже, менша з тим." }
    ],
    task: {
      id: "t32-s04-glosy",
      type: "single-choice",
      question: {
        pl: "«Wziął wiatr brata za kamrata». Kamrat to:",
        ua: "«Wziął wiatr brata za kamrata». Kamrat це:"
      },
      options: [
        { id: "a", label: { pl: "przyjaciel, towarzysz", ua: "друг, товариш" } },
        { id: "b", label: { pl: "skrzydło wiatraka", ua: "крило вітряка" } },
        { id: "c", label: { pl: "burza z piorunami", ua: "гроза з блискавками" } }
      ],
      answer: "a",
      hint: {
        pl: "Pomarańczowe pole obok wersu. Śmiga to coś innego.",
        ua: "Помаранчеве поле біля рядка. Śmiga — інше."
      },
      explanation: {
        pl: "*kamrat* = przyjaciel. *śmiga* = skrzydło wiatraka. *pal je licho* = mniejsza o nie.",
        ua: "*kamrat* = друг. *śmiga* = крило вітряка. *pal je licho* = байдуже."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "O czym jest wiersz", ua: "Про що вірш" },
    formula: "s. 64–65  ·  treść",
    promptPlace: "before",
    prompt: {
      pl: "Program: *analizujesz treść*. Krótko, po kolei — bez ozdób. To jeszcze nie recytacja.",
      ua: "Програма: *аналізуєш зміст*. Коротко, по черзі — без прикрас. Це ще не декламація."
    },
    text: {
      pl: [
        "Na początku dwa wiatry żyją osobno: jeden *wieje w polu*, drugi *gra w sadzie* cichuteńko.",
        "Wiatr z pola to *pędziwiatr*: skacze, szybuje, wpada do sadu.",
        "Sad *parska śmiechem*, kwiat wiśni fruwa jak śnieg. Wiatr z sadu bierze brata *za kamrata*.",
        "Razem gonią chmury i ptaki, mylą śmigi wiatraków. Sad zostaje *cichy*."
      ],
      ua: [
        "На початку два вітри живуть окремо: один *віє в полі*, другий *грає в саду* тихенько.",
        "Вітер з поля — *pędziwiatr*: скаче, ширяє, вривається в сад.",
        "Сад *вибухає сміхом*, цвіт вишні летить як сніг. Вітер із саду бере брата *за kamrata*.",
        "Разом гонять хмари й птахів, плутають крила вітряків. Сад лишається *тихим*."
      ]
    },
    task: {
      id: "t32-s05-tresc",
      type: "single-choice",
      question: {
        pl: "Co się dzieje NA KOŃCU wiersza?",
        ua: "Що діється НАПРИКІНЦІ вірша?"
      },
      options: [
        { id: "a", label: { pl: "Oba wiatry łobuzują w polu, a w sadzie jest cicho.", ua: "Обидва вітри бешкетують у полі, а в саду тихо." } },
        { id: "b", label: { pl: "Oba wiatry na zawsze zostają w cichym sadzie i mdleją.", ua: "Обидва вітри назавжди лишаються в тихому саду і мліють." } },
        { id: "c", label: { pl: "Wiatr z sadu znika, zostaje tylko pędziwiatr.", ua: "Вітер із саду зникає, лишається лише pędziwiatr." } }
      ],
      answer: "a",
      hint: {
        pl: "Ostatni wers: «A w sadzie cicho, cicho…». Gdzie wtedy są wiatry?",
        ua: "Останній рядок: «A w sadzie cicho, cicho…». Де тоді вітри?"
      },
      explanation: {
        pl: "Wiatry lecą *po polu*. Sad jest znowu cichy. Wiatr z sadu nie znika — zmienia towarzystwo.",
        ua: "Вітри летять *полем*. Сад знову тихий. Вітер із саду не зникає — змінює товариство."
      }
    }
  },
  {
    type: "concept",
    heading: { pl: "Bohater wiersza", ua: "Герой вірша" },
    formula: "s. 65  ·  ramka podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "Zapisz ramkę. Most z lekcji 6: podmiot liryczny = kto mówi w wierszu. Tu ktoś *opowiada* o wiatrach.",
      ua: "Запиши рамку. Міст з уроку 6: ліричний суб’єкт = хто говорить у вірші. Тут хтось *розповідає* про вітри."
    },
    text: {
      pl: "**Bohater wiersza** to postać w utworze lirycznym, najczęściej **różna** od osoby mówiącej (podmiotu lirycznego).",
      ua: "**Герой вірша** — постать у ліричному творі, найчастіше **інша**, ніж особа, що говорить (ліричний суб’єкт)."
    },
    items: [
      { pl: "Autor: *Julian Tuwim*. To człowiek z okładki / podręcznika, nie postać w sadzie.", ua: "Автор: *Julian Tuwim*. Це людина з підручника, не постать у саду." },
      { pl: "Podmiot liryczny: ten, który *widzi i opowiada* (wiał, grał, wpadł…). Nie mówi «ja, wiatr».", ua: "Ліричний суб’єкт: той, хто *бачить і розповідає*. Не каже «я, вітер»." },
      { pl: "Bohaterowie: *wiatr w polu* i *wiatr w sadzie*. To oni działają.", ua: "Герої: *вітер у полі* і *вітер у саду*. Це вони діють." }
    ],
    task: {
      id: "t32-s06-bohater",
      type: "true-false",
      question: {
        pl: "Czy Julian Tuwim jest bohaterem tego wiersza — postacią, która wieje w polu i pieści liście?",
        ua: "Чи Юліан Тувім є героєм цього вірша — постаттю, яка віє в полі і пестить листя?"
      },
      answer: false,
      hint: {
        pl: "Kto skacze, pieści liście i bierze brata za kamrata — Tuwim czy wiatry?",
        ua: "Хто скаче, пестить листя і бере брата за kamrata — Тувім чи вітри?"
      },
      explanation: {
        pl: "Nie. Tuwim = autor. Bohaterowie = dwa wiatry. Podmiot liryczny opowiada o nich.",
        ua: "Ні. Тувім = автор. Герої = два вітри. Ліричний суб’єкт про них розповідає."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Dwa portrety", ua: "Два портрети" },
    formula: "s. 65  ·  zad. 2  ·  tabela",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: na podstawie dwóch pierwszych zwrotek przedstaw cechy tytułowych bohaterów. W zeszycie tabela: *Co robił? / Co się z nim działo?* oraz *Jaki jest?* — osobno *wiatr w polu* i *wiatr w sadzie*.",
      ua: "Підручник: на основі двох перших строф покажи риси титульних героїв. У зошиті таблиця: *Що робив? / Що з ним діялося?* і *Який він?* — окремо *вітер у полі* і *вітер у саду*."
    },
    visual: vizGhT32("t32-portret.png", {
      prompt: "Dwa wiatry: pole i sad.",
      alt: { pl: "Dwa wiatry: pędziwiatr nad polem i cichy wiatr w sadzie.", ua: "Два вітри: pędziwiatr над полем і тихий вітер у саду." }
    }),
    items: [
      { pl: "Wiatr w polu: *wiał*, *pędziwiatr*, piknął kozła, skoczył, zawiał, zaszybował. Jaki? gwałtowny, hałaśliwy, ruchliwy.", ua: "Вітер у полі: *wiał*, *pędziwiatr*, сальто, стрибав, дув. Який? стрімкий, галасливий, рухливий." },
      { pl: "Wiatr w sadzie: *grał*, pieścił liście, szeleścił, mdlał. Jaki? cichy, łagodny, delikatny.", ua: "Вітер у саду: *grał*, пестив листя, шелестів, млів. Який? тихий, лагідний, ніжний." }
    ],
    task: {
      id: "t32-s07-portret",
      type: "single-choice",
      question: {
        pl: "Który opis pasuje do wiatru *w sadzie* w dwóch pierwszych zwrotkach?",
        ua: "Який опис пасує до вітру *в саду* в двох перших строфах?"
      },
      options: [
        { id: "a", label: { pl: "Grał cichuteńko, pieścił liście, mdlał — łagodny.", ua: "Гра́в тихенько, пестив листя, млів — лагідний." } },
        { id: "b", label: { pl: "Piknął kozła, zakołował świdrem — pędziwiatr.", ua: "Зробив сальто, закрутився свердлом — pędziwiatr." } },
        { id: "c", label: { pl: "Gonił Heliosa po niebie.", ua: "Гонив Геліоса небом." } }
      ],
      answer: "a",
      hint: {
        pl: "Zwrotka 1: «w sadzie grał: Cichuteńko… Mdlał». Który to wiatr?",
        ua: "Строфа 1: «w sadzie grał: Cichuteńko… Mdlał». Який це вітер?"
      },
      explanation: {
        pl: "Sad = cichy, pieści, mdleje. Pole = pędziwiatr. Helios tu nie występuje.",
        ua: "Сад = тихий, пестить, мліє. Поле = pędziwiatr. Геліоса тут немає."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Czasowniki · liczba", ua: "Дієслова · число" },
    formula: "s. 65  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: porównajcie, jak się zachowywały wiatry. Zwróćcie uwagę na *liczbę gramatyczną* czasowników oraz na to, *jakie czynności* nazywają. Most: українська *однина / множина*.",
      ua: "Підручник: порівняйте, як поводились вітри. Зверніть увагу на *граматичне число* дієслів і на те, *які дії* вони називають. Міст: українська *однина / множина*."
    },
    items: [
      { pl: "Osobno, liczba pojedyncza: *wiał, grał, pieścił, mdlał, piknął, wpadł*.", ua: "Окремо, однина: *wiał, grał, pieścił, mdlał, piknął, wpadł*." },
      { pl: "Razem, liczba mnoga: *gonią, mkną, wplątują się, mylą, dmą, łobuzują*.", ua: "Разом, множина: *gonią, mkną, wplątują się, mylą, dmą, łobuzują*." },
      { pl: "Zmiana liczby = zmiana historii: najpierw każdy sam, potem *obaj*.", ua: "Зміна числа = зміна історії: спочатку кожен сам, потім *обидва*." }
    ],
    task: {
      id: "t32-s08-liczba",
      type: "single-choice",
      question: {
        pl: "Formy *gonią, mkną, łobuzują* mówią, że wiatry działają:",
        ua: "Форми *gonią, mkną, łobuzują* кажуть, що вітри діють:"
      },
      options: [
        { id: "a", label: { pl: "razem (liczba mnoga)", ua: "разом (множина)" } },
        { id: "b", label: { pl: "każdy osobno, jak na początku (liczba pojedyncza)", ua: "кожен окремо, як на початку (однина)" } },
        { id: "c", label: { pl: "tylko wiatr z sadu, bo mdleje", ua: "лише вітер із саду, бо мліє" } }
      ],
      answer: "a",
      hint: {
        pl: "Porównaj *wiał* (on) i *gonią* (oni). Które jest «obaj»?",
        ua: "Порівняй *wiał* (він) і *gonią* (вони). Де «обидва»?"
      },
      explanation: {
        pl: "*gonią / mkną / łobuzują* = liczba mnoga = obaj wiatry razem. *wiał / grał* = każdy sam.",
        ua: "*gonią / mkną / łobuzują* = множина = обидва разом. *wiał / grał* = кожен сам."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Wiatry razem", ua: "Вітри разом" },
    formula: "s. 66  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Na podstawie dwóch następnych zwrotek: *Wiatry razem* — co robią? co się z nimi dzieje? Potem: co się *zmieniło* w zachowaniu i *dlaczego*.",
      ua: "На основі двох наступних строф: *Вітри разом* — що роблять? що з ними діється? Потім: що *змінилося* в поведінці і *чому*."
    },
    visual: vizGhT32("t32-sad-cichy.png", {
      prompt: "Senny sad, do którego wpada pędziwiatr.",
      alt: { pl: "Cichy, senny sad, zanim wiatry zaczną łobuzować razem.", ua: "Тихий сонний сад, перш ніж вітри почнуть бешкетувати разом." }
    }),
    items: [
      { pl: "Pędziwiatr *wpada* na senny sad. Kwiat wiśni sfruwa. Sad parska śmiechem.", ua: "Pędziwiatr *вривається* в сонний сад. Цвіт вишні опадає. Сад вибухає сміхом." },
      { pl: "Wiatr z sadu *bierze brata za kamrata* i leci z nim *po polu*.", ua: "Вітер із саду *бере брата за kamrata* і летить з ним *полем*." },
      { pl: "Dlaczego zmiana? Bo *kto z kim przestaje* — cichy wiatr zaczyna łobuzować jak pędziwiatr. To domkniemy przysłowiem na lekcji 33.", ua: "Чому зміна? Бо *з ким водишся* — тихий вітер починає бешкетувати як pędziwiatr. Прислів’ям це закриємо на уроці 33." }
    ],
    task: {
      id: "t32-s09-razem",
      type: "true-false",
      question: {
        pl: "Czy po spotkaniu wiatr z sadu zostaje taki sam — tylko pieści liście i mdleje, a pędziwiatr wraca sam na pole?",
        ua: "Чи після зустрічі вітер із саду лишається таким самим — лише пестить листя і мліє, а pędziwiatr сам вертається в поле?"
      },
      answer: false,
      hint: {
        pl: "«Wziął wiatr brata za kamrata, Teraz z nim po polu lata». Kto z kim leci?",
        ua: "«Wziął wiatr brata za kamrata, Teraz z nim po polu lata». Хто з ким летить?"
      },
      explanation: {
        pl: "Nie. Wiatr z sadu zmienia zachowanie: leci na pole i łobuzuje razem z bratem. Dlatego w sadzie znowu cicho.",
        ua: "Ні. Вітер із саду змінює поведінку: летить у поле і бешкетує разом із братом. Тому в саду знову тихо."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Dwa wiatry to…", ua: "Dwa wiatry to…" },
    formula: "s. 66  ·  zad. 3c",
    promptPlace: "before",
    prompt: {
      pl: "Podaj określenia nazywające oba wiatry. W zeszycie: *Dwa wiatry to: ?. ?.* Szukaj w tekście i w swoim słowniku cech.",
      ua: "Назви означення обох вітрів. У зошиті: *Dwa wiatry to: ?. ?.* Шукай у тексті і у своєму словнику рис."
    },
    items: [
      { pl: "Z tekstu wprost: jeden to *pędziwiatr*.", ua: "З тексту прямо: один — *pędziwiatr*." },
      { pl: "Drugi nie ma takiego jednego słowa-etykiety — nazywasz go cechą: *cichy / łagodny / delikatny*.", ua: "Другий не має такого одного слова-етикетки — називаєш його рисою: *тихий / лагідний / ніжний*." },
      { pl: "Po spotkaniu obaj są *kamratami* i *łobuzami*. To już nowy portret — na jutro w notatce.", ua: "Після зустрічі обидва — *kamraci* і *бешкетники*. Це вже новий портрет — завтра в нотатці." }
    ],
    task: {
      id: "t32-s10-okreslenia",
      type: "multiple-choice",
      question: {
        pl: "Które określenia NA PEWNO pasują na początku wiersza? Zaznacz wszystkie pewne.",
        ua: "Які означення НАПЕВНО пасують на початку вірша? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "wiatr z pola = pędziwiatr, gwałtowny", ua: "вітер з поля = pędziwiatr, стрімкий" } },
        { id: "b", label: { pl: "wiatr z sadu = cichy, łagodny", ua: "вітер із саду = тихий, лагідний" } },
        { id: "c", label: { pl: "wiatr z sadu = Helios", ua: "вітер із саду = Геліос" } },
        { id: "d", label: { pl: "oba na starcie = już łobuzy w wiatrakach", ua: "обидва на старті = уже бешкетники у вітряках" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Łobuzowanie w wiatrakach jest *po* spotkaniu. Helios — inna lekcja.",
        ua: "Бешкет у вітряках — *після* зустрічі. Геліос — інший урок."
      },
      explanation: {
        pl: "Na początku: pędziwiatr kontra cichy. Razem łobuzują dopiero później. Helios odpada.",
        ua: "На початку: pędziwiatr проти тихого. Разом бешкетують лише пізніше. Геліос відпадає."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 64–65  ·  lekcja 32",
    promptPlace: "before",
    prompt: {
      pl: "Zamykamy godzinę 32. Nie ma tu recytacji ani przysłów — to osobna lekcja 33. Sprawdź, czy umiesz cztery rzeczy z listy.",
      ua: "Закриваємо годину 32. Тут немає декламації і прислів’їв — це окремий урок 33. Перевір, чи вмієш чотири речі зі списку."
    },
    items: [
      { pl: "Antonimy: jasny – ciemny, wąsko – szeroko.", ua: "Антоніми: jasny – ciemny, wąsko – szeroko." },
      { pl: "Glosy: kamrat, śmiga, pal je licho, parsknąć śmiechem.", ua: "Глоси: kamrat, śmiga, pal je licho, parsknąć śmiechem." },
      { pl: "Bohaterowie = dwa wiatry, nie Tuwim.", ua: "Герої = два вітри, не Тувім." },
      { pl: "Na początku różni; po spotkaniu wiatr z sadu zmienia zachowanie.", ua: "На початку різні; після зустрічі вітер із саду змінює поведінку." }
    ],
    task: {
      id: "t32-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Znam treść, antonimy, glosy i dwóch różnych bohaterów.", ua: "Знаю зміст, антоніми, глоси і двох різних героїв." } },
        { id: "b", label: { pl: "Już wygłosiłem cały wiersz z pamięci i wybrałem przysłowie.", ua: "Уже продекламував увесь вірш напам’ять і вибрав прислів’я." } },
        { id: "c", label: { pl: "Odmieniłem rzeczownik piasek przez siedem przypadków.", ua: "Відмінив іменник piasek через сім відмінків." } }
      ],
      answer: "a",
      hint: {
        pl: "Przysłowie i recytacja = lekcja 33. Piasek = lekcje 29–31.",
        ua: "Прислів’я і декламація = урок 33. Piasek = уроки 29–31."
      },
      explanation: {
        pl: "Lekcja 32 = treść + antonimy + glosy + portrety wiatrów. Recytacja — 33. Przypadki — 29–31.",
        ua: "Урок 32 = зміст + антоніми + глоси + портрети вітрів. Декламація — 33. Відмінки — 29–31."
      }
    }
  }
] };
