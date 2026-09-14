var POL_IMG_T5 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT5(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T5 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 16  ·  Lekcja 5  ·  ortografia",
    promptPlace: "before",
    prompt: {
      pl: "Dział *Zachwycający kosmos*. Wczoraj czytaliśmy *Ziemia we Wszechświecie*. Dziś *powtórzenie*: pisownia *ó, rz, ż, ch wymienna* na komiksie *Pierwsze lądowanie na Księżycu*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *Zachwycający kosmos*. Учора читали *Ziemia we Wszechświecie*. Сьогодні *повторення*: правопис *ó, rz, ż, ch змінний* на коміксі *Pierwsze lądowanie na Księżycu*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "uzasadnię pisownię podkreślonych wyrazów przez *wymianę* w rodzinie;", ua: "обґрунтую написання підкреслених слів через *заміну* в сім’ї слів;" },
      { pl: "przypomnę schemat: *ó→o, rz→r, ż→g* (także *dz, z, ź, h*), *ch→sz*;", ua: "пригадаю схему: *ó→o, rz→r, ż→g* (також *dz, z, ź, h*), *ch→sz*;" },
      { pl: "wypiszę z dymków wyrazy z *ó, rz, ż, ch wymiennym*;", ua: "випишу з реплік слова з *ó, rz, ż, ch змінним*;" },
      { pl: "uzupełnię tekst o Denisie Tito i podkreślę wymianę.", ua: "доповню текст про Деніса Тіто і підкреслю заміну." }
    ],
    task: {
      id: "t5-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Uzasadnić pisownię parą: inna forma albo wyraz pokrewny.", ua: "Обґрунтувати написання парою: інша форма або споріднене слово." } },
        { id: "b", label: { pl: "Uzupełnić schemat: ó, rz, ż, ch — na co się wymieniają.", ua: "Доповнити схему: ó, rz, ż, ch — на що змінюються." } },
        { id: "c", label: { pl: "Samemu polecieć na Księżyc i zmierzyć Morze Spokoju.", ua: "Самому полетіти на Місяць і виміряти Море Спокою." } },
        { id: "d", label: { pl: "Wypisać z dymków wyrazy z ó, rz, ż, ch wymiennym.", ua: "Виписати з реплік слова з ó, rz, ż, ch змінним." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "To język polski: para, schemat, dymki. Czego nie robimy na lekcji?",
        ua: "Це польська мова: пара, схема, репліки. Чого не робимо на уроці?"
      },
      explanation: {
        pl: "Dziś: wymiana w rodzinie wyrazów, schemat, wypisywanie, tekst Tito. Na Księżyc nie lecimy.",
        ua: "Сьогодні: заміна в сім’ї слів, схема, виписування, текст Тіто. На Місяць не летимо."
      }
    }
  },
  // 2
  {
    type: "example",
    heading: { pl: "Słowa z pól", ua: "Слова з полів" },
    formula: "s. 16  ·  glosy  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Trzy glosy z pomarańczowego pola. Najpierw ramka, potem rozbiór. Przyda się, gdy będziesz czytać komiks.",
      ua: "Три глоси з помаранчевого поля. Спочатку рамка, потім розбір. Знадобиться, коли читатимеш комікс."
    },
    text: {
      pl: "Kennedy'ego  ·  skandować  ·  Morze Spokoju",
      ua: "Kennedy'ego — Кеннеді  ·  skandować — скандувати  ·  Morze Spokoju — Море Спокою"
    },
    items: [
      { pl: "*Kennedy'ego* — czyt. *Kenediego*. Przylądek na Florydzie, skąd w 1969 r. startowały rakiety.", ua: "*Kennedy'ego* — чит. *Kenediego*. Мис у Флориді, звідки 1969 р. стартували ракети." },
      { pl: "*skandować* — wypowiadać coś rytmicznie (np. tłum na starcie).", ua: "*skandować* — вимовляти ритмічно (наприклад натовп на старті)." },
      { pl: "*Morze Spokoju* — nazwa rozległej równiny na Księżycu (nie ocean z wodą).", ua: "*Morze Spokoju* — назва широкої рівнини на Місяці (не океан з водою)." }
    ],
    task: {
      id: "t5-s02-glosy",
      type: "single-choice",
      question: {
        pl: "Która informacja NA PEWNO zgadza się z glosą?",
        ua: "Яка інформація НАПЕВНО збігається з глосою?"
      },
      options: [
        { id: "a", label: { pl: "Morze Spokoju to równina na Księżycu.", ua: "Morze Spokoju — рівнина на Місяці." } },
        { id: "b", label: { pl: "Kennedy'ego czytamy tak, jak jest napisane: Kennediego z podwójnym n na końcu.", ua: "Kennedy'ego читаємо як Kennediego з подвійним n в кінці." } },
        { id: "c", label: { pl: "Skandować znaczy: milczeć i nie ruszać ustami.", ua: "Skandować означає: мовчати і не рухати вустами." } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa mówi: *czyt. Kenediego* i *równina na Księżycu*. Co zostaje?",
        ua: "Глоса каже: *чит. Kenediego* і *рівнина на Місяці*. Що лишається?"
      },
      explanation: {
        pl: "Morze Spokoju = równina. Kennedy'ego czyt. Kenediego. Skandować = rytmicznie wypowiadać, nie milczeć.",
        ua: "Море Спокою = рівнина. Kennedy'ego чит. Kenediego. Skandować = ритмічно вимовляти, не мовчати."
      }
    }
  },
  // 3
  {
    type: "observe",
    heading: { pl: "Czytamy komiks", ua: "Читаємо комікс" },
    formula: "s. 16  ·  16–21 lipca 1969",
    promptPlace: "before",
    prompt: {
      pl: "Tytuł: *Pierwsze lądowanie na Księżycu*. Najpierw zrozum *historię*. Ortografię weźmiemy z *podkreślonych* wyrazów — za chwilę. Kliknij obrazek, żeby powiększyć.",
      ua: "Заголовок: *Pierwsze lądowanie na Księżycu*. Спочатку зрозумій *історію*. Орфографію візьмемо з *підкреслених* слів — за хвилину. Клацни малюнок, щоб збільшити."
    },
    visual: vizGhT5("t5-komiks.png", {
      prompt: "Komiks: pierwsze lądowanie na Księżycu.",
      alt: {
        pl: "Sześć kadrów: start z Florydy, lot wokół Księżyca, lądownik Orzeł, flaga 21 lipca.",
        ua: "Шість кадрів: старт із Флориди, політ довкола Місяця, модуль Orzeł, прапор 21 липня."
      }
    }),
    items: [
      { pl: "16 lipca 1969, *Przylądek Kennedy'ego*: tłum, start o 14.32.", ua: "16 липня 1969, *мис Кеннеді*: натовп, старт о 14.32." },
      { pl: "Astronauci *krążą wokół* Księżyca, potem *obniżają* lot.", ua: "Астронавти *кружляють довкола* Місяця, потім *знижують* політ." },
      { pl: "*Orzeł* ląduje nad *Morzem Spokoju*. 21 lipca: mały krok, wielki skok.", ua: "*Orzeł* сідає над *Морем Спокою*. 21 липня: малий крок, великий стрибок." }
    ],
    task: {
      id: "t5-s03-historia",
      type: "single-choice",
      question: {
        pl: "O czym NA PEWNO jest ten komiks?",
        ua: "Про що НАПЕВНО цей комікс?"
      },
      options: [
        { id: "a", label: { pl: "O starcie w 1969 r. i pierwszym lądowaniu ludzi na Księżycu.", ua: "Про старт 1969 р. і першу посадку людей на Місяць." } },
        { id: "b", label: { pl: "O wierszu Preludium i kasztanach Jana Lechonia.", ua: "Про вірш Preludium і каштани Яна Лехоня." } },
        { id: "c", label: { pl: "O Eratostenesie, który zmierzył obwód Ziemi.", ua: "Про Ератостена, який виміряв окружність Землі." } }
      ],
      answer: "a",
      hint: {
        pl: "Daty: 16, 20, 21 lipca. Floryda, rakieta, Orzeł, flaga.",
        ua: "Дати: 16, 20, 21 липня. Флорида, ракета, Orzeł, прапор."
      },
      explanation: {
        pl: "To Apollo 11: start, krążenie, lądowanie Orła. Preludium i Eratostenes były na T2 i T4.",
        ua: "Це Apollo 11: старт, кружляння, посадка Orła. Preludium і Ератостен були на T2 і T4."
      }
    }
  },
  // 4
  {
    type: "concept",
    heading: { pl: "Wymiana w rodzinie", ua: "Заміна в сім’ї слів" },
    formula: "s. 16  ·  powtórzenie  ·  zasada",
    promptPlace: "before",
    prompt: {
      pl: "To *powtórzenie*. Nie zgadujemy z brzydoty litery. Szukamy *innej formy* albo *wyrazu pokrewnego*.",
      ua: "Це *повторення*. Не вгадуємо з «некрасивої» літери. Шукаємо *іншу форму* або *споріднене слово*."
    },
    text: {
      pl: "Piszemy **ó, rz, ż, ch**, gdy w innej formie wyrazu lub w wyrazie pokrewnym widać **wymianę**: **ó → o**, **rz → r**, **ż → g** (także **dz, z, ź, h**), **ch → sz**.",
      ua: "Пишемо **ó, rz, ż, ch**, коли в іншій формі або в спорідненому слові видно **заміну**: **ó → o**, **rz → r**, **ż → g** (також **dz, z, ź, h**), **ch → sz**."
    },
    items: [
      { pl: "Wzorzec ustny: *osób* piszemy przez *ó*, ponieważ w wyrazie *osoba* *ó* wymienia się na *o*.", ua: "Усний зразок: *osób* пишемо через *ó*, бо в слові *osoba* *ó* змінюється на *o*." },
      { pl: "Nie wystarczy: «tak mi się wydaje» albo «tłum jest głośny».", ua: "Недостатньо: «мені так здається» або «натовп гучний»." }
    ],
    task: {
      id: "t5-s04-zasada",
      type: "single-choice",
      question: {
        pl: "Jak NA PEWNO uzasadniasz pisownię wymienną?",
        ua: "Як НАПЕВНО обґрунтовуєш змінний правопис?"
      },
      options: [
        { id: "a", label: { pl: "Podaję parę (forma / wyraz pokrewny) i nazywam wymianę (np. ó → o).", ua: "Даю пару (форма / споріднене слово) і називаю заміну (напр. ó → o)." } },
        { id: "b", label: { pl: "Wybieram ładniejszą literę, bez pary.", ua: "Обираю красивішу літеру, без пари." } },
        { id: "c", label: { pl: "Patrzę tylko na obrazek rakiety i zgaduję.", ua: "Дивлюсь лише на малюнок ракети і вгадую." } }
      ],
      answer: "a",
      hint: {
        pl: "Hasło lekcji z karty: *wymiana w rodzinie wyrazów*.",
        ua: "Гасло уроку з картки: *заміна в сім’ї слів*."
      },
      explanation: {
        pl: "Para + nazwa wymiany. Sens obrazka nie uzasadnia litery.",
        ua: "Пара + назва заміни. Сенс малюнка не обґрунтовує літеру."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Uzasadnij · start", ua: "Обґрунтуй · старт" },
    formula: "s. 16  ·  zad. 1  ·  kadry 1–2",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: uzasadnij *ó, rz, ż, ch* w podkreślonych wyrazach. Kadr 1–2: *słychać, ucichnie, osób, wrócą*.",
      ua: "Підручник: обґрунтуй *ó, rz, ż, ch* у підкреслених словах. Кадри 1–2: *słychać, ucichnie, osób, wrócą*."
    },
    visual: vizGhT5("t5-k1.jpg", {
      prompt: "Kadr 1: Przylądek Kennedy'ego.",
      alt: {
        pl: "Trzej astronauci, dymki: słychać, ucichnie, osób. 16 lipca 1969, Floryda.",
        ua: "Троє астронавтів, репліки: słychać, ucichnie, osób. 16 липня 1969, Флорида."
      }
    }),
    items: [
      { pl: "*słychać* → *słyszę / słyszeć*  (*ch → sz*)", ua: "*słychać* → *słyszę / słyszeć*  (*ch → sz*)" },
      { pl: "*ucichnie* → *uciszyć / cisza*  (*ch → sz*)", ua: "*ucichnie* → *uciszyć / cisza*  (*ch → sz*)" },
      { pl: "*osób* → *osoba / osoby*  (*ó → o*)", ua: "*osób* → *osoba / osoby*  (*ó → o*)" },
      { pl: "*wrócą* (kadr 14.32) → *wracać / powrót*  (*ó → o*)", ua: "*wrócą* (кадр 14.32) → *wracać / powrót*  (*ó → o*)" }
    ],
    task: {
      id: "t5-s05-start",
      type: "single-choice",
      question: {
        pl: "Które uzasadnienie NA PEWNO jest poprawne?",
        ua: "Яке обґрунтування НАПЕВНО правильне?"
      },
      options: [
        { id: "a", label: { pl: "słychać — ch, bo słyszę (ch → sz); osób — ó, bo osoba (ó → o).", ua: "słychać — ch, бо słyszę (ch → sz); osób — ó, бо osoba (ó → o)." } },
        { id: "b", label: { pl: "słychać — ch, bo tłum jest głośny, i to wystarczy.", ua: "słychać — ch, бо натовп гучний, і цього досить." } },
        { id: "c", label: { pl: "osób piszemy przez u, bo tak jest w wyrazie ucichnie.", ua: "osób пишемо через u, бо так у слові ucichnie." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj pary, nie hałasu tłumu. osób — osoba.",
        ua: "Шукай пару, не галас натовпу. osób — osoba."
      },
      explanation: {
        pl: "słychać–słyszę (ch→sz). osób–osoba (ó→o). wrócą–wracać. Sens «głośny tłum» nie uzasadnia litery.",
        ua: "słychać–słyszę (ch→sz). osób–osoba (ó→o). wrócą–wracać. Сенс «гучний натовп» не обґрунтовує літеру."
      }
    }
  },
  // 6
  {
    type: "observe",
    heading: { pl: "Uzasadnij · lot", ua: "Обґрунтуй · політ" },
    formula: "s. 16  ·  zad. 1  ·  kadry 3–4",
    promptPlace: "before",
    prompt: {
      pl: "Kadry w kabinie i 20 lipca. Podkreślone: *krążymy, wokół, obniżyć, zagrożenie*.",
      ua: "Кадри в кабіні і 20 липня. Підкреслені: *krążymy, wokół, obniżyć, zagrożenie*."
    },
    visual: vizGhT5("t5-k3.jpg", {
      prompt: "Kadr: krążymy wokół Księżyca.",
      alt: {
        pl: "Astronauci w kabinie, Księżyc w oknie, dymek: krążymy wokół Księżyca.",
        ua: "Астронавти в кабіні, Місяць у вікні, репліка: krążymy wokół Księżyca."
      }
    }),
    items: [
      { pl: "*krążymy* → *krąg*  (*ż → g*)", ua: "*krążymy* → *krąg*  (*ż → g*)" },
      { pl: "*wokół* → *około / wokoło*  (*ó → o*)", ua: "*wokół* → *około / wokoło*  (*ó → o*)" },
      { pl: "*obniżyć* → *nisko / niżej*  (*ż* w rodzinie *niski*)", ua: "*obniżyć* → *nisko / niżej*  (*ż* у сім’ї *niski*)" },
      { pl: "*zagrożenie* → *groza / zagrozić*  (*ż → z*)", ua: "*zagrożenie* → *groza / zagrozić*  (*ż → z*)" }
    ],
    task: {
      id: "t5-s06-lot",
      type: "single-choice",
      question: {
        pl: "Która para NA PEWNO uzasadnia pisownię?",
        ua: "Яка пара НАПЕВНО обґрунтовує написання?"
      },
      options: [
        { id: "a", label: { pl: "krążymy → krąg (ż → g); wokół → około (ó → o).", ua: "krążymy → krąg (ż → g); wokół → około (ó → o)." } },
        { id: "b", label: { pl: "krążymy piszemy przez rz, bo krążymy brzmi jak morze.", ua: "krążymy пишемо через rz, бо звучить як morze." } },
        { id: "c", label: { pl: "wokół — bez pary, zgadujemy z obrazka Księżyca.", ua: "wokół — без пари, вгадуємо з малюнка Місяця." } }
      ],
      answer: "a",
      hint: {
        pl: "ż w krążymy: szukaj *krąg*. ó w wokół: *około*.",
        ua: "ż у krążymy: шукай *krąg*. ó у wokół: *około*."
      },
      explanation: {
        pl: "krążymy–krąg. wokół–około. zagrożenie–groza. Brzmienie «jak morze» to nie metoda z tej lekcji.",
        ua: "krążymy–krąg. wokół–około. zagrożenie–groza. Звук «як morze» — не метод цього уроку."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Uzasadnij · Orzeł", ua: "Обґрунтуй · Orzeł" },
    formula: "s. 16  ·  zad. 1  ·  kadry 5–6",
    promptPlace: "before",
    prompt: {
      pl: "Lądowanie: *Orzeł wylądował* nad *Morzem Spokoju*. *rz* w nazwie ptaka i morza. 21 lipca — cytat Armstronga (tu bez podkreśleń ó/rz/ż/ch).",
      ua: "Посадка: *Orzeł wylądował* над *Morzem Spokoju*. *rz* у назві птаха і моря. 21 липня — цитата Армстронга (тут без підкреслень ó/rz/ż/ch)."
    },
    visual: vizGhT5("t5-k5.jpg", {
      prompt: "Kadr: Orzeł wylądował.",
      alt: {
        pl: "Lądownik na pyłu, dymek: Orzeł wylądował. Podpis: nad Morzem Spokoju.",
        ua: "Посадковий модуль на пилу, репліка: Orzeł wylądował. Підпис: над Морем Спокою."
      }
    }),
    items: [
      { pl: "*Orzeł* → *orli / orła*  (*rz → r*)", ua: "*Orzeł* → *orli / orła*  (*rz → r*)" },
      { pl: "*Morzem* → *morski*  (*rz → r*)", ua: "*Morzem* → *morski*  (*rz → r*)" },
      { pl: "*Orzeł* to też *nazwa* modułu (Eagle). Sens nazwy nie zastępuje pary *orli*.", ua: "*Orzeł* — також *назва* модуля (Eagle). Сенс назви не замінює пару *orli*." }
    ],
    task: {
      id: "t5-s07-orzel",
      type: "single-choice",
      question: {
        pl: "Dlaczego w wyrazie Orzeł piszemy rz?",
        ua: "Чому в слові Orzeł пишемо rz?"
      },
      options: [
        { id: "a", label: { pl: "Bo orli / orła: rz → r.", ua: "Бо orli / orła: rz → r." } },
        { id: "b", label: { pl: "Bo to nazwa statku i nazwy zawsze mają rz.", ua: "Бо це назва корабля і назви завжди мають rz." } },
        { id: "c", label: { pl: "Bo w komiksie widać orła z piórami.", ua: "Бо в коміксі видно орла з пір’ям." } }
      ],
      answer: "a",
      hint: {
        pl: "Ta sama metoda co morzem → morski. Jaka para dla Orzeł?",
        ua: "Той самий метод, що morzem → morski. Яка пара для Orzeł?"
      },
      explanation: {
        pl: "Orzeł–orli (rz→r). Morzem–morski. Nazwa modułu i obrazek nie uzasadniają litery.",
        ua: "Orzeł–orli (rz→r). Morzem–morski. Назва модуля і малюнок не обґрунтовують літеру."
      }
    }
  },
  // 8
  {
    type: "observe",
    heading: { pl: "Schemat rakiety", ua: "Схема ракети" },
    formula: "s. 16  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: przypomnij zasady i uzupełnij schemat. *PISZEMY* — cztery silniki.",
      ua: "Підручник: пригадай правила і доповни схему. *PISZEMY* — чотири двигуни."
    },
    visual: vizGhT5("t5-rakieta.jpg", {
      prompt: "Rakieta: cztery zasady wymiany.",
      alt: {
        pl: "Rakieta z napisem PISZEMY i czterema lukami: ó, rz, ż, ch wymieniają się na …",
        ua: "Ракета з написом PISZEMY і чотирма пропусками: ó, rz, ż, ch змінюються на …"
      }
    }),
    items: [
      { pl: "*ó*, gdy wymiana na *o*.", ua: "*ó*, коли заміна на *o*." },
      { pl: "*rz*, gdy wymiana na *r*.", ua: "*rz*, коли заміна на *r*." },
      { pl: "*ż*, gdy wymiana na *g* (także *dz, z, ź, h*).", ua: "*ż*, коли заміна на *g* (також *dz, z, ź, h*)." },
      { pl: "*ch*, gdy wymiana na *sz*.", ua: "*ch*, коли заміна на *sz*." }
    ],
    task: {
      id: "t5-s08-schemat",
      type: "single-choice",
      question: {
        pl: "Które uzupełnienie schematu NA PEWNO jest poprawne?",
        ua: "Яке доповнення схеми НАПЕВНО правильне?"
      },
      options: [
        { id: "a", label: { pl: "ó → o; rz → r; ż → g (także dz, z, ź, h); ch → sz.", ua: "ó → o; rz → r; ż → g (також dz, z, ź, h); ch → sz." } },
        { id: "b", label: { pl: "ó → u; rz → ż; ż → sz; ch → h.", ua: "ó → u; rz → ż; ż → sz; ch → h." } },
        { id: "c", label: { pl: "Wszystkie te litery piszemy zawsze tak samo, bez pary.", ua: "Усі ці літери завжди пишемо однаково, без пари." } }
      ],
      answer: "a",
      hint: {
        pl: "Cztery luki w silnikach. Co wstawiasz po «wymienia się na»?",
        ua: "Чотири пропуски в двигунах. Що вставляєш після «wymienia się na»?"
      },
      explanation: {
        pl: "W zeszycie dopisz cztery strzałki. ż ma kilka par (g, dz, z, ź, h) — na rakiecie wystarczy g i gwiazdka.",
        ua: "У зошиті допиши чотири стрілки. ż має кілька пар (g, dz, z, ź, h) — на ракеті досить g і зірочки."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Wypisz z dymków", ua: "Випиши з реплік" },
    formula: "s. 16  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: wypisz z wypowiedzi wyrazy z *ó, rz, ż, ch wymiennym*. Najpierw przeczytaj dymki. Potem para w zeszycie.",
      ua: "Підручник: випиши з реплік слова з *ó, rz, ż, ch змінним*. Спочатку прочитай репліки. Потім пара в зошиті."
    },
    visual: vizGhT5("t5-dymki.jpg", {
      prompt: "Tłum przy starcie, siedem dymków.",
      alt: {
        pl: "Ludzie i astronauci przy rakiecie, dymki z wyrazami: Podejdźmy, może, zamierzają, Dłużej, wierzę, odważył, strachem, tworzą, dowód, możliwe, mówiła…",
        ua: "Люди й астронавти біля ракети, репліки зі словами: Podejdźmy, może, zamierzają, Dłużej, wierzę, odważył, strachem, tworzą, dowód, możliwe, mówiła…"
      }
    }),
    items: [
      { pl: "Przykład: *wierzę* → *wiara* (*rz → r*). Szukaj tak samo: *ó, rz, ż, ch* i parę.", ua: "Приклад: *wierzę* → *wiara* (*rz → r*). Шукай так само: *ó, rz, ż, ch* і пару." },
      { pl: "Odpada wyraz bez wymiany (np. *historia, domu, lepiej*). W zeszycie: wyraz + para.", ua: "Відпадає слово без заміни (напр. *historia, domu, lepiej*). У зошиті: слово + пара." }
    ],
    task: {
      id: "t5-s09-dymki",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy z dymków NA PEWNO mają ó, rz, ż lub ch wymienne? Zaznacz wszystkie pewne.",
        ua: "Які слова з реплік НАПЕВНО мають ó, rz, ż або ch змінне? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "wierzę, dowód, odważył, strachem", ua: "wierzę, dowód, odważył, strachem" } },
        { id: "b", label: { pl: "historia, pozycja, kilogramy", ua: "historia, pozycja, kilogramy" } },
        { id: "c", label: { pl: "może, mówiła, zamierzają, możliwe", ua: "może, mówiła, zamierzają, możliwe" } },
        { id: "d", label: { pl: "domu, lepiej, widać", ua: "domu, lepiej, widać" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Szukaj pary: wiara, dowody, odwaga, straszny, mogę, mowa, zamiar. Co odpada?",
        ua: "Шукай пару: wiara, dowody, odwaga, straszny, mogę, mowa, zamiar. Що відпадає?"
      },
      explanation: {
        pl: "a i c mają pary. historia, pozycja, kilogramy, domu, lepiej, widać — nie ta reguła. W zeszycie dopisz jeszcze: Podejdźmy, bliżej, Dłużej, tworzą, przyjaciółka.",
        ua: "a і c мають пари. historia, pozycja, kilogramy, domu, lepiej, widać — не це правило. У зошиті допиши ще: Podejdźmy, bliżej, Dłużej, tworzą, przyjaciółka."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Tekst · Denis Tito", ua: "Текст · Деніс Тіто" },
    formula: "s. 16  ·  zad. 4  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: przepisz do zeszytu, wstaw *ch, ó, u, rz, ż*. Podkreśl wyrazy z *wymianą*. W razie trudności — słownik.",
      ua: "Підручник: перепиши в зошит, встав *ch, ó, u, rz, ż*. Підкресли слова із *заміною*. Як важко — словник."
    },
    items: [
      { pl: "Najpierw zeszyt, potem sprawdzenie. Pytaj: *ó* czy *u*? *rz* czy *r*? Czy jest para?", ua: "Спочатку зошит, потім перевірка. Питай: *ó* чи *u*? *rz* чи *r*? Чи є пара?" },
      { pl: "Przykład metody: *mógł* — para *mogę* → *ó*. *turystą* — *turyści* nadal *u*, nie *ó*.", ua: "Приклад методу: *mógł* — пара *mogę* → *ó*. *turystą* — *turyści* далі *u*, не *ó*." }
    ],
    task: {
      id: "t5-s10-tito",
      type: "single-choice",
      question: {
        pl: "Które uzupełnienie NA PEWNO jest poprawne?",
        ua: "Яке доповнення НАПЕВНО правильне?"
      },
      options: [
        { id: "a", label: { pl: "Próbował (ó), mógł (ó), ducha (ch), musiały (u), minuty (u).", ua: "Próbował (ó), mógł (ó), ducha (ch), musiały (u), minuty (u)." } },
        { id: "b", label: { pl: "Wszędzie wstawiamy ó, także w turystą i minuty.", ua: "Скрізь ставимо ó, також у turystą і minuty." } },
        { id: "c", label: { pl: "które piszemy przez rz, bo brzmi jak morze.", ua: "które пишемо через rz, бо звучить як morze." } }
      ],
      answer: "a",
      hint: {
        pl: "próba → Próbował. mogę → mógł. dusza → ducha. turysta, minuta — u. które: r.",
        ua: "próba → Próbował. mogę → mógł. dusza → ducha. turysta, minuta — u. które: r."
      },
      explanation: {
        pl: "ó w Próbował, mógł, opór, równo. ch w ducha. u w turystą, musiały, minuty. które bez rz. W zeszycie podkreśl wymianę.",
        ua: "ó в Próbował, mógł, opór, równo. ch в ducha. u в turystą, musiały, minuty. które без rz. У зошиті підкресли заміну."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 16  ·  lekcja 5",
    promptPlace: "before",
    prompt: {
      pl: "Do zeszytu: 4 pary z zad. 1 (pełne zdanie-uzasadnienie) + schemat zad. 2 + 6 wyrazów z dymków + tekst Tito. Jutro: *podmiot liryczny*, Antoni Wic *Noc*, s. 18.",
      ua: "У зошит: 4 пари з завд. 1 (повне речення-обґрунтування) + схема завд. 2 + 6 слів з реплік + текст Тіто. Завтра: *podmiot liryczny*, Антоні Віц *Noc*, с. 18."
    },
    items: [
      { pl: "Uzasadniam: para + wymiana. Nie obrazek i nie «tak mi się wydaje».", ua: "Обґрунтовую: пара + заміна. Не малюнок і не «мені так здається»." },
      { pl: "ó→o · rz→r · ż→g (dz, z, ź, h) · ch→sz.", ua: "ó→o · rz→r · ż→g (dz, z, ź, h) · ch→sz." },
      { pl: "Praca dodatkowa: *Zeszyt ćwiczeń* cz. 1, s. 111 oraz *Ćwiczenia* s. 7 (ó, rz, ż, ch, h wymienne i niewymienne).", ua: "Додатково: *Zeszyt ćwiczeń* ч. 1, с. 111 і *Ćwiczenia* с. 7 (ó, rz, ż, ch, h змінні й незмінні)." }
    ],
    task: {
      id: "t5-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem tej lekcji?",
        ua: "Що є певним підсумком цього уроку?"
      },
      options: [
        { id: "a", label: { pl: "Umiem uzasadnić ó, rz, ż, ch parą z rodziny wyrazów.", ua: "Умію обґрунтувати ó, rz, ż, ch парою з сім’ї слів." } },
        { id: "b", label: { pl: "Znalazłem w tekście, czy Ziemia jest kulą, i napisałem notatkę o czarnej dziurze.", ua: "Знашов у тексті, чи Земля — куля, і написав нотатку про чорну діру." } },
        { id: "c", label: { pl: "Wyjaśniłem już, kim jest podmiot liryczny w wierszu Noc.", ua: "Уже пояснив, хто такий podmiot liryczny у вірші Noc." } }
      ],
      answer: "a",
      hint: {
        pl: "Czytanie s. 14 = wczoraj. Wiersz Noc = jutro. Co było na s. 16?",
        ua: "Читання с. 14 = учора. Вірш Noc = завтра. Що було на с. 16?"
      },
      explanation: {
        pl: "Lekcja 5 = wymiana. T4 = czytanie. T6 = podmiot liryczny.",
        ua: "Урок 5 = заміна. T4 = читання. T6 = podmiot liryczny."
      }
    }
  }
] };
