function emT56(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T56 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT56(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T56 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 100–103  ·  Lekcja 56  ·  Verne",
    promptPlace: "before",
    prompt: {
      pl: "Tematy 56–57: *Początek niezwykłej podróży Fileasa Fogga* (Juliusz Verne, *W 80 dni dookoła świata*). **Dziś:** notatka wstępna, glosy, **nagranie + trzy strony tekstu**, miejsca, bohaterowie, bagaż. Dziennik i plan wydarzeń — lekcja 57. Fragmentu nie tłumaczymy słowo w słowo. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Теми 56–57: *Початок незвичайної подорожі Філеаса Фоґґа* (Жюль Верн). **Сьогодні:** вступна нотатка, глоси, **запис + три сторінки тексту**, місця, герої, багаж. Щоденник і план подій — урок 57. Уривок не перекладаємо дослівно. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "odpowiem na pytania do notatki o Foggu;", ua: "відповім на питання до нотатки про Фоґґа;" },
      { pl: "zrozumiem glosy z pól tekstu;", ua: "зрозумію глоси з полів тексту;" },
      { pl: "wskażę miejsca, bohaterów i bagaż ze świata przedstawionego.", ua: "вкажу місця, героїв і багаж зі світу зображеного." }
    ],
    task: {
      id: "t56-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam / słucham fragmentu Verne’a", ua: "Читаю / слухаю уривок Верна" } },
        { id: "b", label: { pl: "Wskazuję miejsca, bohaterów i bagaż", ua: "Вказую місця, героїв і багаж" } },
        { id: "c", label: { pl: "Już dziś piszę cały dziennik Obieżyświata (to T57)", ua: "Уже сьогодні пишу весь щоденник Паспарту (це T57)" } },
        { id: "d", label: { pl: "Rozbieram trudne słowa z glos", ua: "Розбираю складні слова з глос" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Dziennik = lekcja 57.",
        ua: "Щоденник = урок 57."
      },
      explanation: {
        pl: "A, B, D dziś. Pełny dziennik i plan — T57.",
        ua: "A, B, D сьогодні. Повний щоденник і план — T57."
      }
    }
  },

  // 2 — notatka wstępna
  {
    type: "observe",
    heading: { pl: "Zadanie wstępne · Podjąć decyzję", ua: "Вступне завдання · Podjąć decyzję" },
    formula: "s. 100  ·  notatka",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj notatkę i odszukaj odpowiedzi na cztery pytania. Skan — kliknij, by powiększyć.",
      ua: "Прочитай нотатку і знайди відповіді на чотири питання. Скан — клікни, щоб збільшити."
    },
    visual: vizGhT56("t56-notatka.png", {
      alt: { pl: "Notatka: Podjąć decyzję", ua: "Нотатка: Podjąć decyzję" },
      place: "after"
    }),
    items: [
      { pl: "Kto jest bohaterem historii?", ua: "Хто герой історії?" },
      { pl: "W jakim celu bohater opuszcza Londyn?", ua: "З якою метою герой покидає Лондон?" },
      { pl: "Ile czasu przeznacza na cel? Gdzie zaczyna się przygoda?", ua: "Скільки часу дає на мету? Де починається пригода?" },
      { pl: "Najpierw sam znajdź odpowiedzi w notatce — klucz po *Sprawdź*.", ua: "Спочатку сам знайди відповіді в нотатці — ключ після *Перевірити*." }
    ],
    task: {
      id: "t56-s02-notatka",
      type: "multiple-choice",
      question: {
        pl: "Które odpowiedzi z notatki są poprawne? Zaznacz wszystkie.",
        ua: "Які відповіді з нотатки правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Bohater: Fileas Fogg (z Obieżyświatem)", ua: "Герой: Fileas Fogg (з Obieżyświatem)" } },
        { id: "b", label: { pl: "Cel: okrążyć świat w 80 dni / wygrać zakład", ua: "Мета: об’їхати світ за 80 днів / виграти парі" } },
        { id: "c", label: { pl: "Start: XIX-wieczny Londyn · czas: 80 dni", ua: "Старт: Лондон XIX ст. · час: 80 днів" } },
        { id: "d", label: { pl: "Fogg wyjeżdża, bo szuka rodziny w Chinach", ua: "Фоґґ їде, бо шукає родину в Китаї" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Ostatni akapit: zakład i wyliczenia gazety.",
        ua: "Останній абзац: парі й підрахунки газети."
      },
      explanation: {
        pl: "Klucz: bohater = Fileas Fogg (+ Obieżyświat); cel = okrążyć świat w 80 dni / zakład; start = XIX-wieczny Londyn, czas = 80 dni. D nie ma w notatce.",
        ua: "Ключ: герой = Fileas Fogg (+ Obieżyświat); мета = об’їхати світ за 80 днів / парі; старт = Лондон XIX ст., час = 80 днів. D немає в нотатці."
      }
    }
  },

  // 3 — glosy / trudne słowa
  {
    type: "example",
    heading: { pl: "Glosy · trudne słowa", ua: "Глоси · складні слова" },
    formula: "s. 101–103  ·  pola",
    promptPlace: "before",
    prompt: {
      pl: "Zanim włączysz nagranie — szybki słowniczek z pól podręcznika + most UA.",
      ua: "Перш ніж увімкнеш запис — швидкий словничок з полів підручника + міст UA."
    },
    text: {
      pl: "Fileas Fogg · Obieżyświat · neseser · pled · piecuch · domator · pryncypał · funt · gwinea · wist · magistrala · stangret",
      ua: "Філеас Фоґґ · Паспарту · несесер · плед · домосід · хатній · принципал · фунт · гінея · віст · магістраль · кучер"
    },
    items: [
      { pl: "**Obieżyświat** — służący Fogga (fr. *Passepartout*); „ктось, хто об’їздить світ”.", ua: "**Obieżyświat** — слуга Фоґґа (*Passepartout*)." },
      { pl: "**neseser** — mała walizeczka na drobiazgi; **pled** — koc.", ua: "**neseser** — несесер; **pled** — плед / ковдра." },
      { pl: "**piecuch / domator** — kto lubi wygodne życie w domu.", ua: "**piecuch / domator** — домосід." },
      { pl: "**pryncypał** — szef · **funt / gwinea** — pieniądze · **wist** — gra w karty.", ua: "**pryncypał** — шеф · **funt / gwinea** — гроші · **wist** — карти." },
      { pl: "**Dover / Calais** — porty (GB / FR) · **Saville Row**, **Charing-Cross** — Londyn.", ua: "**Dover / Calais** — порти · адреси в Лондоні." },
      { pl: "**do diaska** ≈ *do licha* · **zdrożny** — godny nagany.", ua: "**do diaska** ≈ *чорт забирай* · **zdrożny** — вартий осуду." }
    ],
    task: {
      id: "t56-s03-glosy",
      type: "single-choice",
      question: {
        pl: "*Neseser* w glosie to:",
        ua: "*Neseser* у глосі — це:"
      },
      options: [
        { id: "a", label: { pl: "walizeczka na podręczne drobiazgi", ua: "валізка на дрібниці" } },
        { id: "b", label: { pl: "duży parowiec oceaniczny", ua: "великий океанський пароплав" } },
        { id: "c", label: { pl: "nazwa klubu Fogga", ua: "назва клубу Фоґґа" } }
      ],
      answer: "a",
      hint: {
        pl: "Pole przy tekście: walizeczka…",
        ua: "Поле біля тексту: валізка…"
      },
      explanation: {
        pl: "*Neseser* = mała walizka. UA: *несесер*.",
        ua: "*Neseser* = мала валізка. UA: *несесер*."
      }
    }
  },

  // 4 — czytanie: audio + 3 skany (assets.js)
  {
    type: "observe",
    heading: { pl: "Czytamy i słuchamy · s. 101–103", ua: "Читаємо і слухаємо · с. 101–103" },
    formula: "s. 101–103  ·  nagranie  ·  Juliusz Verne",
    promptPlace: "before",
    prompt: {
      pl: "Włącz **nagranie**. Pod spodem trzy skany tekstu — klikaj **po kolei**, by powiększyć. Audio **nie zatrzymuje się** przy powiększeniu. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Увімкни **запис**. Нижче три скани тексту — клікай **по черзі**, щоб збільшити. Аудіо **не зупиняється** при збільшенні. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Słuchaj dialogu Fogga z Obieżyświatem na początku nagrania.", ua: "Слухай діалог Фоґґа з Паспарту на початку запису." },
      { pl: "Możesz powiększać skany po kolei — audio gra dalej.", ua: "Можеш збільшувати скани по черзі — аудіо грає далі." },
      { pl: "Odpowiedź do pytania — dopiero po *Sprawdź*.", ua: "Відповідь на питання — лише після *Перевірити*." }
    ],
    task: {
      id: "t56-s04-sluch",
      type: "single-choice",
      question: {
        pl: "Dokąd Fogg każe jechać najpierw (w dialogu z Obieżyświatem)?",
        ua: "Куди Фоґґ каже їхати спочатку (у діалозі з Паспарту)?"
      },
      options: [
        { id: "a", label: { pl: "do Dover i Calais", ua: "до Dover і Calais" } },
        { id: "b", label: { pl: "od razu do Tokio", ua: "одразу до Токіо" } },
        { id: "c", label: { pl: "tylko do klubu na wist", ua: "лише до клубу на віст" } }
      ],
      answer: "a",
      hint: {
        pl: "Pierwsza strona tekstu: Dover… Calais…",
        ua: "Перша сторінка тексту: Dover… Calais…"
      },
      explanation: {
        pl: "Pierwszy etap: Dover (GB) → Calais (FR), a potem dookoła świata w 80 dni.",
        ua: "Перший етап: Dover (GB) → Calais (FR), а далі навколо світу за 80 днів."
      }
    }
  },

  // 5 — miejsca
  {
    type: "practice",
    heading: { pl: "Świat przedstawiony · miejsca", ua: "Зображений світ · місця" },
    formula: "s. 104  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "Wskaż miejsca związane z tekstem / nagraniem. Skan planszy — kliknij.",
      ua: "Вкажи місця, пов’язані з текстом / записом. Скан планшету — клікни."
    },
    visual: vizGhT56("t56-miejsca-bohaterowie.jpg", {
      alt: { pl: "Zad. 1a–b — miejsca i bohaterowie", ua: "Завд. 1a–b — місця і герої" },
      place: "after"
    }),
    items: [
      { pl: "Porównaj rysunki z planszy z tym, co słyszałeś / czytałeś.", ua: "Порівняй малюнки з планшета з тим, що чув / читав." },
      { pl: "Zaznacz w teście tylko miejsca z fragmentu — klucz po *Sprawdź*.", ua: "Познач у тесті лише місця з уривка — ключ після *Перевірити*." }
    ],
    task: {
      id: "t56-s05-miejsca",
      type: "multiple-choice",
      question: {
        pl: "Które miejsca NA PEWNO wiążą się z fragmentem? Zaznacz wszystkie.",
        ua: "Які місця НАПЕВНО пов’язані з уривком? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "pokój Obieżyświata · dworzec · hala dworca · przedział wagonu", ua: "pokój Obieżyświata · dworzec · hala · przedział" } },
        { id: "b", label: { pl: "Dover (jako cel pierwszej drogi)", ua: "Dover (як мета першої дороги)" } },
        { id: "c", label: { pl: "kawiarnia · strych · tramwaj konny", ua: "kawiarnia · strych · tramwaj konny" } },
        { id: "d", label: { pl: "postój dorożek / droga z domu na dworzec", ua: "postój dorożek / дорога з дому на вокзал" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Śledź: dom → dorożka → Charing-Cross → przedział.",
        ua: "Слідкуй: дім → дрожки → Charing-Cross → купе."
      },
      explanation: {
        pl: "Klucz: pokój Obieżyświata, dworzec, hala dworca, przedział, Dover, postój dorożek / droga na dworzec. Nie: kawiarnia, strych, tramwaj konny.",
        ua: "Ключ: pokój Obieżyświata, dworzec, hala, przedział, Dover, postój dorożek. Ні: kawiarnia, strych, tramwaj konny."
      }
    }
  },

  // 6 — bohaterowie
  {
    type: "practice",
    heading: { pl: "Świat przedstawiony · bohaterowie", ua: "Зображений світ · герої" },
    formula: "s. 104  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Kto bierze udział w wydarzeniach fragmentu?",
      ua: "Хто бере участь у подіях уривка?"
    },
    items: [
      { pl: "Wskaż tylko osoby, które naprawdę biorą udział w wydarzeniach fragmentu.", ua: "Вкажи лише осіб, які справді беруть участь у подіях уривка." },
      { pl: "Klucz odpowiedzi — po *Sprawdź*.", ua: "Ключ відповідей — після *Перевірити*." }
    ],
    task: {
      id: "t56-s06-bohaterowie",
      type: "multiple-choice",
      question: {
        pl: "Którzy bohaterowie NA PEWNO występują? Zaznacz wszystkie.",
        ua: "Які герої НАПЕВНО є? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Fileas Fogg · Obieżyświat", ua: "Fileas Fogg · Obieżyświat" } },
        { id: "b", label: { pl: "żebraczka · dziecko", ua: "жебрачка · дитина" } },
        { id: "c", label: { pl: "przyjaciele z klubu dżentelmenów", ua: "друзі з клубу джентльменів" } },
        { id: "d", label: { pl: "matka Fogga · orkiestra na dworcu", ua: "мати Фоґґа · оркестр на вокзалі" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Matki Fogga w tekście nie ma.",
        ua: "Матері Фоґґа в тексті немає."
      },
      explanation: {
        pl: "Klucz: Fileas Fogg, Obieżyświat, żebraczka, dziecko, przyjaciele z klubu. Nie: matka Fogga, orkiestra, bileter, pokojówka.",
        ua: "Ключ: Fileas Fogg, Obieżyświat, жебрачка, дитина, друзі з клубу. Ні: мати Фоґґа, оркестр, білетер, покоївка."
      }
    }
  },

  // 7 — bagaż
  {
    type: "practice",
    heading: { pl: "Co zabrali w podróż?", ua: "Що взяли в подорож?" },
    formula: "s. 105  ·  zad. 1c",
    promptPlace: "before",
    prompt: {
      pl: "Wskaż przedmioty, które Fogg i Obieżyświat naprawdę zabrali. Skan — kliknij.",
      ua: "Вкажи речі, які Фоґґ і Паспарту справді взяли. Скан — клікни."
    },
    visual: vizGhT56("t56-bagaz.jpg", {
      alt: { pl: "Zad. 1c — bagaż", ua: "Завд. 1c — багаж" },
      place: "after"
    }),
    items: [
      { pl: "Z planszy wybierz tylko to, co Fogg i Obieżyświat naprawdę zabrali.", ua: "З планшета обери лише те, що Фоґґ і Паспарту справді взяли." },
      { pl: "Najpierw sam — pełny klucz po *Sprawdź*.", ua: "Спочатку сам — повний ключ після *Перевірити*." }
    ],
    task: {
      id: "t56-s07-bagaz",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO zabrali? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО взяли? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "neseser · dwie koszule wełniane · trzy pary pończoch", ua: "несесер · дві вовняні сорочки · три пари панчіх" } },
        { id: "b", label: { pl: "płaszcz nieprzemakalny · pled · solidne buty · rozkład jazdy", ua: "плащ · плед · міцні черевики · розклад" } },
        { id: "c", label: { pl: "paczka 20 000 funtów · paszport", ua: "пачка 20 000 фунтів · паспорт" } },
        { id: "d", label: { pl: "termos · luneta · sztućce", ua: "термос · підзорна труба · столові прибори" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Fogg: mało bagażu. Dużo pieniędzy i rozkład jazdy.",
        ua: "Фоґґ: мало багажу. Багато грошей і розклад."
      },
      explanation: {
        pl: "Klucz: neseser, dwie koszule wełniane, trzy pary pończoch, płaszcz nieprzemakalny, pled, solidne buty, rozkład jazdy, 20 000 funtów, paszport. Nie: termos, luneta, sztućce, herbata…",
        ua: "Ключ: несесер, дві вовняні сорочки, три пари панчіх, плащ, плед, міцні черевики, розклад, 20 000 фунтів, паспорт. Ні: термос, luneta, sztućce…"
      }
    }
  },

  // 8 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T56", ua: "Підсумок · T56" },
    formula: "s. 100–105  ·  dalej T57",
    promptPlace: "before",
    prompt: {
      pl: "Znasz świat przedstawiony fragmentu. Lekcja 57: reakcja Obieżyświata, plan godzinowy, ramka *dziennik*, wypowiedzi.",
      ua: "Знаєш зображений світ уривка. Урок 57: реакція Паспарту, погодинний план, рамка *dziennik*, висловлювання."
    },
    items: [
      { pl: "Fogg + Obieżyświat · zakład · 80 dni · Londyn → świat.", ua: "Фоґґ + Паспарту · парі · 80 днів · Лондон → світ." },
      { pl: "Miejsca / ludzie / bagaż = elementy świata przedstawionego.", ua: "Місця / люди / багаж = елементи зображеного світу." }
    ],
    task: {
      id: "t56-s08-dalej",
      type: "single-choice",
      question: {
        pl: "W lekcji 57 NA PEWNO:",
        ua: "В уроці 57 НАПЕВНО:"
      },
      options: [
        { id: "a", label: { pl: "omawiasz uczucia Obieżyświata i piszesz fragment dziennika", ua: "розбираєш почуття Паспарту і пишеш уривок щоденника" } },
        { id: "b", label: { pl: "uczysz się tylko tabliczki mnożenia", ua: "вчиш лише таблицю множення" } },
        { id: "c", label: { pl: "kończysz podręcznik na s. 50", ua: "закінчуєш підручник на с. 50" } }
      ],
      answer: "a",
      hint: {
        pl: "Jump: T57.",
        ua: "Jump: T57."
      },
      explanation: {
        pl: "T57 = emocje, tabela wydarzeń, dziennik, plan podróży.",
        ua: "T57 = емоції, таблиця подій, щоденник, план подорожі."
      }
    }
  }
]};
