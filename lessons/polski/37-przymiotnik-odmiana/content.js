function emT37(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T37 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT37(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T37 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 70–71  ·  Lekcja 37  ·  odmiana",
    promptPlace: "before",
    prompt: {
      pl: "Wczoraj: pytania, e-mail, pary, zasada zgody. Dziś *nie* powtarzamy definicji od zera — *używasz* jej. Nowe: tabela odmiany s. 70 (*podstępny, wielka, ciężkie*), mnoga *męskoosobowa / niemęskoosobowa*, zad. 3–5, zaproszenie na *Bal z Przymiotnikiem*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Учора: питання, e-mail, пари, принцип узгодження. Сьогодні *не* повторюємо означення з нуля — *застосовуєш* його. Нове: таблиця відміни с. 70 (*podstępny, wielka, ciężkie*), множина *чоловічоособна / нечоловічоособна*, завд. 3–5, запрошення на *Bal z Przymiotnikiem*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "odmienię przymiotnik przez przypadki, liczby i rodzaje;", ua: "відміню прикметник за відмінками, числами і родами;" },
      { pl: "rozróżnię mnogą *męskoosobową* i *niemęskoosobową*;", ua: "розрізню множину *чоловічоособну* і *нечоловічоособну*;" },
      { pl: "dobiorę formę przymiotnika do rzeczownika (zgoda);", ua: "узгоджу форму прикметника з іменником;" },
      { pl: "określę formę wyróżnionego przymiotnika (zad. 4);", ua: "визначу форму виділеного прикметника (завд. 4);" },
      { pl: "poprawię błędne formy (zad. 5) i zaplanuję zaproszenie na Bal.", ua: "виправлю помилкові форми (завд. 5) і спланую запрошення на бал." }
    ],
    task: {
      id: "t37-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Odmienić przymiotnik i uzgodnić go z rzeczownikiem.", ua: "Відмінити прикметник і узгодити його з іменником." } },
        { id: "b", label: { pl: "Rozpoznać formę (przypadek, liczba, rodzaj) i poprawić błąd.", ua: "Розпізнати форму (відмінок, число, рід) і виправити помилку." } },
        { id: "c", label: { pl: "Jeszcze raz tylko przepisać definicję z lekcji 36 — bez tabeli.", ua: "Ще раз лише переписати означення з уроку 36 — без таблиці." } },
        { id: "d", label: { pl: "Wiedzieć, co musi być w zaproszeniu na Bal z Przymiotnikiem.", ua: "Знати, що має бути в запрошенні на Бал із Прикметником." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Definicję już masz. Co jest na s. 70–71?",
        ua: "Означення вже маєш. Що на с. 70–71?"
      },
      explanation: {
        pl: "Dziś: tabela, zgoda, formy, błędy, Bal. Sama definicja była wczoraj.",
        ua: "Сьогодні: таблиця, узгодження, форми, помилки, бал. Саме означення було вчора."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Rozgrzewka · forma z wczoraj", ua: "Розминка · форма з учора" },
    formula: "zastosuj  ·  nie druga definicja",
    promptPlace: "before",
    prompt: {
      pl: "To *nie* druga kopia pigułki. Wczoraj w e-mailu: *opowiadał o niezwykłych przygodach*. Użyj siedmiu przypadków rzeczownika (lekcje 29–31) i zgody. Pytanie: *o jakich przygodach?*",
      ua: "Це *не* друга копія пігулки. Учора в e-mail: *opowiadał o niezwykłych przygodach*. Уживай сім відмінків іменника (уроки 29–31) і узгодження. Питання: *про які пригоди?*"
    },
    items: [
      { pl: "*o* + miejscownik (o kim? o czym?).", ua: "*o* + місцевий (про кого? про що?)." },
      { pl: "*przygodach* — liczba mnoga; *przygoda* jest rodzaju żeńskiego → mnoga *niemęskoosobowa*.", ua: "*przygodach* — множина; *przygoda* жіночого роду → множина *нечоловічоособна*." },
      { pl: "Przymiotnik: *niezwykłych* (nie *niezwykłym*, nie *niezwykłe*).", ua: "Прикметник: *niezwykłych* (не *niezwykłym*, не *niezwykłe*)." }
    ],
    task: {
      id: "t37-s02-rozgrzewka",
      type: "single-choice",
      question: {
        pl: "Jaka jest forma *niezwykłych* w zwrocie *o niezwykłych przygodach*?",
        ua: "Яка форма *niezwykłych* у звороті *o niezwykłych przygodach*?"
      },
      options: [
        { id: "a", label: { pl: "Miejscownik, liczba mnoga, rodzaj niemęskoosobowy (Ms. lm. r.nmos.)", ua: "Місцевий, множина, нечоловічоособний (Ms. lm. r.nmos.)" } },
        { id: "b", label: { pl: "Mianownik, liczba pojedyncza, rodzaj męski", ua: "Називний, однина, чоловічий рід" } },
        { id: "c", label: { pl: "Czas przyszły, 1. osoba (jak czasownik)", ua: "Майбутній час, 1. особа (як дієслово)" } }
      ],
      answer: "a",
      hint: {
        pl: "Przyimek *o* + *przygodach*. Czy to mianownik *niezwykłe przygody*?",
        ua: "Прийменник *o* + *przygodach*. Чи це називний *niezwykłe przygody*?"
      },
      explanation: {
        pl: "o (kim? czym?) = miejscownik. Mnoga, przygody nie są mężczyznami → nmos. *niezwykłych*.",
        ua: "про (кого? що?) = місцевий. Множина, пригоди не чоловіки → nmos. *niezwykłych*."
      }
    }
  },
  {
    type: "concept",
    heading: { pl: "Odmiana · rodzaj męski", ua: "Відміна · чоловічий рід" },
    formula: "s. 70  ·  podstępny (brat)",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw zdanie z ramki. Potem wzorzec męski: *podstępny brat*. Końcówki idą *w parze* z rzeczownikiem. Biernik osób męskich = dopełniacz: *widzę podstępnego brata*.",
      ua: "Спочатку речення з рамки. Потім зразок чоловічого: *podstępny brat*. Закінчення йдуть *парою* з іменником. Знахідний чоловічих осіб = родовий: *widzę podstępnego brata*."
    },
    text: {
      pl: "**Przymiotnik odmienia się przez przypadki, liczby i rodzaje.**",
      ua: "**Прикметник відмінюється за відмінками, числами і родами.**"
    },
    items: [
      { pl: "M. *podstępny* (brat)", ua: "Н. *podstępny* (брат)" },
      { pl: "D. *podstępnego* (brata)", ua: "Р. *podstępnego* (брата)" },
      { pl: "C. *podstępnemu* (bratu)", ua: "Д. *podstępnemu* (братові)" },
      { pl: "B. *podstępnego* (brata) — jak dopełniacz przy osobie", ua: "Зн. *podstępnego* (брата) — як родовий при особі" },
      { pl: "N. (z) *podstępnym* (bratem)", ua: "Ор. (з) *podstępnym* (братом)" },
      { pl: "Ms. (o) *podstępnym* (bracie)", ua: "М. (про) *podstępnym* (братові)" },
      { pl: "W. *podstępny!* (bracie!)", ua: "Кл. *podstępny!* (брате!)" }
    ],
    task: {
      id: "t37-s03-meski",
      type: "single-choice",
      question: {
        pl: "Dopełniacz lp. r.m.: która forma jest zgodna z *podstępny brat*?",
        ua: "Родовий одн. ч. р.: яка форма узгоджена з *podstępny brat*?"
      },
      options: [
        { id: "a", label: { pl: "podstępnego brata", ua: "podstępnego brata" } },
        { id: "b", label: { pl: "podstępna brat", ua: "podstępna brat" } },
        { id: "c", label: { pl: "podstępnymi bracia", ua: "podstępnymi bracia" } }
      ],
      answer: "a",
      hint: {
        pl: "Kogo? czego? *brata*. Jaka końcówka przymiotnika męskiego w D. lp.?",
        ua: "Кого? чого? *brata*. Яке закінчення чоловічого прикметника в Р. одн.?"
      },
      explanation: {
        pl: "D. lp.: *podstępnego brata*. *Podstępna* to rodzaj żeński. *Podstępnymi* — narzędnik mnogiej.",
        ua: "Р. одн.: *podstępnego brata*. *Podstępna* — жіночий рід. *Podstępnymi* — орудний множини."
      }
    }
  },
  {
    type: "vocabulary",
    heading: { pl: "Odmiana · żeński i nijaki", ua: "Відміна · жіночий і середній" },
    formula: "s. 70  ·  wielka uczta  ·  ciężkie wieko",
    promptPlace: "before",
    prompt: {
      pl: "Żeński wzorzec: *wielka uczta*. Nijaki: *ciężkie wieko*. W nijakim mianownik = biernik: *widzę ciężkie wieko* (nie *ciężkiego wieka* jak przy osobie). Porównaj z ukraińskim: *велика учта*, *важке віко* — końcówki inne, zasada zgody ta sama.",
      ua: "Жіночий зразок: *wielka uczta*. Середній: *ciężkie wieko*. У середньому називний = знахідний: *widzę ciężkie wieko* (не як при особі). Порівняй з українською: *велика учта*, *важке віко* — закінчення інші, принцип узгодження той самий."
    },
    rows: [
      { pl: "ż. M. wielka (uczta)  ·  n. M. ciężkie (wieko)", ua: "ж. Н. wielka  ·  с. Н. ciężkie" },
      { pl: "ż. D. wielkiej  ·  n. D. ciężkiego", ua: "ж. Р. wielkiej  ·  с. Р. ciężkiego" },
      { pl: "ż. C. wielkiej  ·  n. C. ciężkiemu", ua: "ж. Д. wielkiej  ·  с. Д. ciężkiemu" },
      { pl: "ż. B. wielką  ·  n. B. ciężkie", ua: "ж. Зн. wielką  ·  с. Зн. ciężkie (= Н.)" },
      { pl: "ż. N. (z) wielką  ·  n. N. (z) ciężkim", ua: "ж. Ор. (z) wielką  ·  с. Ор. (z) ciężkim" },
      { pl: "ż. Ms. (o) wielkiej  ·  n. Ms. (o) ciężkim", ua: "ж. М. (o) wielkiej  ·  с. М. (o) ciężkim" },
      { pl: "ż. W. wielka!  ·  n. W. ciężkie!", ua: "ж. Кл. wielka!  ·  с. Кл. ciężkie!" }
    ],
    task: {
      id: "t37-s04-zen-nij",
      type: "single-choice",
      question: {
        pl: "Celownik lp.: która para jest zgodna?",
        ua: "Давальний одн.: яка пара узгоджена?"
      },
      options: [
        { id: "a", label: { pl: "wielkiej uczcie  ·  ciężkiemu wieku", ua: "wielkiej uczcie  ·  ciężkiemu wieku" } },
        { id: "b", label: { pl: "wielki uczcie  ·  ciężka wieku", ua: "wielki uczcie  ·  ciężka wieku" } },
        { id: "c", label: { pl: "wielką uczcie  ·  ciężkie wieku", ua: "wielką uczcie  ·  ciężkie wieku" } }
      ],
      answer: "a",
      hint: {
        pl: "Komu? czemu? *uczcie*, *wieku*. Żeński C. lp. = *-ej*. Nijaki C. lp. = *-emu*.",
        ua: "Кому? чому? *uczcie*, *wieku*. Жіночий Д. одн. = *-ej*. Середній Д. одн. = *-emu*."
      },
      explanation: {
        pl: "C. lp.: *wielkiej uczcie*, *ciężkiemu wieku*. *Wielką* to biernik żeński.",
        ua: "Д. одн.: *wielkiej uczcie*, *ciężkiemu wieku*. *Wielką* — знахідний жіночого."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Mnoga · mos i nmos", ua: "Множина · mos і nmos" },
    formula: "s. 70  ·  pułapka UA",
    promptPlace: "before",
    prompt: {
      pl: "To najtrudniejszy kawałek dla ucznia z Ukrainy. Po ukraińsku *добрі брати* i *добрі сестри* — to samo *добрі*. Po polsku: osoby męskie → *męskoosobowy* (*podstępni bracia*). Reszta (kobiety, rzeczy, dzieci, zwierzęta) → *niemęskoosobowy* (*wielkie uczty, ciężkie wieka*).",
      ua: "Це найскладніший шматок для учня з України. Українською *добрі брати* і *добрі сестри* — те саме *добрі*. Польською: чоловічі особи → *чоловічоособний* (*podstępni bracia*). Решта (жінки, речі, діти, тварини) → *нечоловічоособний* (*wielkie uczty, ciężkie wieka*)."
    },
    visual: vizGhT37("t37-zgoda.png", {
      prompt: "Dwa elementy układanki: zgoda form.",
      alt: { pl: "Dwa pasujące elementy: rzeczownik i przymiotnik tworzą parę.", ua: "Два елементи, що пасують: іменник і прикметник творять пару." }
    }),
    items: [
      { pl: "mos M.: *podstępni bracia*  ·  nmos M.: *wielkie uczty / ciężkie wieka*", ua: "mos Н.: *podstępni bracia*  ·  nmos Н.: *wielkie uczty / ciężkie wieka*" },
      { pl: "mos D. B. Ms.: *podstępnych*  ·  nmos D. Ms.: *wielkich, ciężkich*", ua: "mos Р. Зн. М.: *podstępnych*  ·  nmos Р. М.: *wielkich, ciężkich*" },
      { pl: "Nie: *dobre bracia*, *podstępne bracia* — to błąd zgody mos.", ua: "Не: *dobre bracia*, *podstępne bracia* — помилка узгодження mos." }
    ],
    task: {
      id: "t37-s05-mos",
      type: "single-choice",
      question: {
        pl: "Która forma mianownika mnogiej jest zgodna?",
        ua: "Яка форма називного множини узгоджена?"
      },
      options: [
        { id: "a", label: { pl: "podstępni bracia  ·  wielkie uczty", ua: "podstępni bracia  ·  wielkie uczty" } },
        { id: "b", label: { pl: "podstępne bracia  ·  wielcy uczty", ua: "podstępne bracia  ·  wielcy uczty" } },
        { id: "c", label: { pl: "podstępni uczty  ·  wielkie bracia", ua: "podstępni uczty  ·  wielkie bracia" } }
      ],
      answer: "a",
      hint: {
        pl: "Bracia = mężczyźni → *-i / -y* mos. Uczty = rzeczy → *-e* nmos.",
        ua: "Брати = чоловіки → *-i / -y* mos. Учти = речі → *-e* nmos."
      },
      explanation: {
        pl: "*podstępni bracia* (mos), *wielkie uczty* (nmos). *Podstępne bracia* brzmi po ukraińsku, ale po polsku jest błędem.",
        ua: "*podstępni bracia* (mos), *wielkie uczty* (nmos). *Podstępne bracia* звучить по-українськи, але польською це помилка."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Ćwiczymy zgodę", ua: "Вправляємо узгодження" },
    formula: "żywa gramatyka  ·  pary",
    promptPlace: "before",
    prompt: {
      pl: "Dobierz formę. Wzorzec z wczoraj: *wielka uczta* → Celownik, lp. → *wielkiej uczcie*. Teraz trzy nowe pary z tabeli. W zeszycie: forma podstawowa → polecenie → wynik.",
      ua: "Добери форму. Зразок з учора: *wielka uczta* → давальний, одн. → *wielkiej uczcie*. Тепер три нові пари з таблиці. У зошиті: форма основна → завдання → результат."
    },
    items: [
      { pl: "*podstępny brat* → D. lp. → *podstępnego brata*", ua: "*podstępny brat* → Р. одн. → *podstępnego brata*" },
      { pl: "*ciężkie wieko* → B. lp. → *ciężkie wieko* (M = B w nijakim)", ua: "*ciężkie wieko* → Зн. одн. → *ciężkie wieko* (Н = Зн. у середньому)" },
      { pl: "*podstępni bracia* → N. lm. → *(z) podstępnymi braćmi*", ua: "*podstępni bracia* → Ор. мн. → *(z) podstępnymi braćmi*" }
    ],
    task: {
      id: "t37-s06-pary-zgoda",
      type: "single-choice",
      question: {
        pl: "*wielka uczta* w narzędniku lp. — która forma?",
        ua: "*wielka uczta* в орудному однини — яка форма?"
      },
      options: [
        { id: "a", label: { pl: "(z) wielką ucztą", ua: "(z) wielką ucztą" } },
        { id: "b", label: { pl: "(z) wielkiej uczcie", ua: "(z) wielkiej uczcie" } },
        { id: "c", label: { pl: "(z) wielkimi ucztami", ua: "(z) wielkimi ucztami" } }
      ],
      answer: "a",
      hint: {
        pl: "Z kim? z czym? lp. żeński. Czy *uczcie* to narzędnik?",
        ua: "З ким? з чим? одн. жіночий. Чи *uczcie* — орудний?"
      },
      explanation: {
        pl: "N. lp. r.ż.: *(z) wielką ucztą*. *Uczcie* to celownik. *Ucztami* — mnoga.",
        ua: "Ор. одн. ж. р.: *(z) wielką ucztą*. *Uczcie* — давальний. *Ucztami* — множина."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Zad. 3 · pięć par", ua: "Завд. 3 · п’ять пар" },
    formula: "s. 70",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz z e-maila Wiktora *pięć* przymiotników wraz z określanymi rzeczownikami. Określ formę: przypadek, liczbę, rodzaj. Najpierw zeszyt — potem klucz EduMost (nie jedyny zestaw).",
      ua: "Вибери з e-mail Віктора *п’ять* прикметників разом з іменниками. Визнач форму: відмінок, число, рід. Спочатку зошит — потім ключ EduMost (не єдиний набір)."
    },
    items: [
      { pl: "*o niezwykłych przygodach* — Ms. lm. r.nmos.", ua: "*o niezwykłych przygodach* — М. мн. nmos." },
      { pl: "*potężnej piramidy* — D. lp. r.ż.", ua: "*potężnej piramidy* — Р. одн. ж. р." },
      { pl: "*wielką ucztę* — B. lp. r.ż.", ua: "*wielką ucztę* — Зн. одн. ж. р." },
      { pl: "*nieszczęsnym bogiem* — N. lp. r.m.", ua: "*nieszczęsnym bogiem* — Ор. одн. ч. р." },
      { pl: "*wierna żona* — M. lp. r.ż.", ua: "*wierna żona* — Н. одн. ж. р." }
    ],
    task: {
      id: "t37-s07-zad3",
      type: "multiple-choice",
      question: {
        pl: "Które opisy form są pewne? Zaznacz wszystkie pewne.",
        ua: "Які описи форм певні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "potężnej piramidy — D. lp. r.ż.", ua: "potężnej piramidy — Р. одн. ж. р." } },
        { id: "b", label: { pl: "wielką ucztę — B. lp. r.ż.", ua: "wielką ucztę — Зн. одн. ж. р." } },
        { id: "c", label: { pl: "wierna żona — czas przeszły, 3. osoba", ua: "wierna żona — минулий час, 3. особа" } },
        { id: "d", label: { pl: "nieszczęsnym bogiem — N. lp. r.m.", ua: "nieszczęsnym bogiem — Ор. одн. ч. р." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Przymiotnik nie ma osób. *U stóp* (kogo? czego?) *piramidy*.",
        ua: "Прикметник не має осіб. *Біля підніжжя* (кого? чого?) *piramidy*."
      },
      explanation: {
        pl: "D., B., N. — tak. *Wierna żona* to mianownik, nie czasownik.",
        ua: "Р., Зн., Ор. — так. *Wierna żona* — називний, не дієслово."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 4 · rozpoznaj formę", ua: "Завд. 4 · розпізнай форму" },
    formula: "s. 71",
    promptPlace: "before",
    prompt: {
      pl: "Rozpoznaj formę wyróżnionych przymiotników. Zdania o piramidach. Wybierasz przypadek, liczbę i rodzaj — tak jak w tesście wielokrotnego wyboru w książce.",
      ua: "Розпізнай форму виділених прикметників. Речення про піраміди. Обираєш відмінок, число і рід — як у тесті в книжці."
    },
    visual: vizGhT37("t37-giza.png", {
      prompt: "Piramida Cheopsa.",
      alt: { pl: "Piramida w Gizie.", ua: "Піраміда в Гізі." }
    }),
    items: [
      { pl: "*królewskiego* grobu — D. lp. r.m. (grobowca jakiego?)", ua: "*królewskiego* grobu — Р. одн. ч. р." },
      { pl: "*Typowa* piramida — M. lp. r.ż.", ua: "*Typowa* piramida — Н. одн. ж. р." },
      { pl: "*granitowymi* płytami — N. lm. r.nmos.", ua: "*granitowymi* płytami — Ор. мн. nmos." },
      { pl: "*ciężkie kamienne* bloki (podnosić co?) — B. lm. r.nmos.", ua: "*ciężkie kamienne* bloki — Зн. мн. nmos." },
      { pl: "*Średniego* Państwa — D. lp. r.n. (*państwo* = nijaki)", ua: "*Średniego* Państwa — Р. одн. с. р. (*państwo* = середній)" },
      { pl: "*najstarszą* budowlą — N. lp. r.ż.", ua: "*najstarszą* budowlą — Ор. одн. ж. р." }
    ],
    task: {
      id: "t37-s08-zad4",
      type: "multiple-choice",
      question: {
        pl: "Które rozpoznania form są pewne? Zaznacz wszystkie pewne.",
        ua: "Які розпізнавання форм певні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "królewskiego grobu — D. lp. r.m.", ua: "królewskiego grobu — Р. одн. ч. р." } },
        { id: "b", label: { pl: "Typowa piramida — M. lp. r.ż.", ua: "Typowa piramida — Н. одн. ж. р." } },
        { id: "c", label: { pl: "granitowymi płytami — M. lp. r.m. (jak *podstępny brat*)", ua: "granitowymi płytami — Н. одн. ч. р. (як *podstępny brat*)" } },
        { id: "d", label: { pl: "najstarszą budowlą — N. lp. r.ż.", ua: "najstarszą budowlą — Ор. одн. ж. р." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Płytami* = z czym? liczba mnoga. Czy to mianownik *podstępny*?",
        ua: "*Płytami* = з чим? множина. Чи це називний *podstępny*?"
      },
      explanation: {
        pl: "*granitowymi płytami* = N. lm. nmos, nie mianownik męski. Reszta z klucza s. 71.",
        ua: "*granitowymi płytami* = Ор. мн. nmos, не називний чоловічого. Решта з ключа с. 71."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Zad. 5 · poprawiamy formy", ua: "Завд. 5 · виправляємо форми" },
    formula: "s. 71",
    promptPlace: "before",
    prompt: {
      pl: "Tekst o Nilu ma przymiotniki w *błędnej* formie. Znajdź i popraw. Potem (5b) zapisz poprawione pary z rzeczownikiem oraz przypadek, liczbę, rodzaj. Poniżej zrekonstruowany fragment ze s. 71 — błędy podkreślone.",
      ua: "Текст про Ніл має прикметники в *помилковій* формі. Знайди і виправ. Потім (5б) запиши виправлені пари з іменником та відмінок, число, рід. Нижче реконструйований уривок зі с. 71 — помилки підкреслені."
    },
    items: [
      { pl: "Mieszkańcy Egiptu od *zamierzchłą* przeszłości wykorzystywali *corocznemu* wylewy Nilu.", ua: "Від *zamierzchłą* przeszłości → *zamierzchłej*; *corocznemu* wylewy → *coroczne*." },
      { pl: "Opady w *środkowa* Afryce; śniegi na *etiopski* płaskowyżu.", ua: "w *środkowej* Afryce; na *etiopskim* płaskowyżu." },
      { pl: "*gwałtownym* przybór; w *północny* biegu; *okolicznych* pola; warstwa *żyzny* mułu; cywilizacja *starożytnym* Egiptu.", ua: "*gwałtowny* przybór; w *północnym* biegu; *okoliczne* pola; *żyznego* mułu; *starożytnego* Egiptu." }
    ],
    task: {
      id: "t37-s09-zad5",
      type: "multiple-choice",
      question: {
        pl: "Które poprawki są pewne? Zaznacz wszystkie pewne.",
        ua: "Які виправлення певні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "od zamierzchłej przeszłości (D. lp. r.ż.)", ua: "od zamierzchłej przeszłości (Р. одн. ж. р.)" } },
        { id: "b", label: { pl: "w środkowej Afryce (Ms. lp. r.ż.)", ua: "w środkowej Afryce (М. одн. ж. р.)" } },
        { id: "c", label: { pl: "warstwa żyzny mułu — zostawiamy, bo brzmi „mocniej”", ua: "warstwa żyzny mułu — залишаємо, бо «звучить сильніше»" } },
        { id: "d", label: { pl: "cywilizacja starożytnego Egiptu (D. lp. r.m.)", ua: "cywilizacja starożytnego Egiptu (Р. одн. ч. р.)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Warstwa (czego?) mułu* — dopełniacz. Jaka forma *żyzny*?",
        ua: "*Шар (чого?) mułu* — родовий. Яка форма *żyzny*?"
      },
      explanation: {
        pl: "*żyznego mułu* (D.), nie *żyzny*. *zamierzchłej*, *środkowej*, *starożytnego* — zgoda z rzeczownikiem.",
        ua: "*żyznego mułu* (Р.), не *żyzny*. *zamierzchłej*, *środkowej*, *starożytnego* — узгодження з іменником."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Bal z Przymiotnikiem", ua: "Бал із Прикметником" },
    formula: "program  ·  zaproszenie",
    promptPlace: "before",
    prompt: {
      pl: "Wyższy próg programu: *redagujesz zaproszenie* (ogłoszenie albo list oficjalny) na *Bal z Przymiotnikiem*. W tekście wykorzystaj wiadomości o tej części mowy: zgoda, cechy, mała litera od nazw własnych. W zeszycie pełny tekst. Tu sprawdzamy, *czego nie może brakować*.",
      ua: "Вищий поріг програми: *редагуєш запрошення* (оголошення або офіційний лист) на *Бал із Прикметником*. У тексті використайте відомості про цю частину мови: узгодження, ознаки, мала літера від власних назв. У зошиті повний текст. Тут перевіряємо, *чого не може бракувати*."
    },
    items: [
      { pl: "Kto zaprasza, kogo, gdzie, kiedy, z jakiej okazji.", ua: "Хто запрошує, кого, де, коли, з якої нагоди." },
      { pl: "Przymiotniki *uzgodnione*: *wielka sala, uroczyste zaproszenie, polski bal* (małą).", ua: "Прикметники *узгоджені*: *wielka sala, uroczyste zaproszenie, polski bal* (з малої)." },
      { pl: "Przykład: *Klasa 5a zaprasza na uroczysty Bal z Przymiotnikiem w szkolnej sali w piątek o 17.00.*", ua: "Приклад: *Klasa 5a zaprasza na uroczysty Bal z Przymiotnikiem w szkolnej sali w piątek o 17.00.*" }
    ],
    task: {
      id: "t37-s10-bal",
      type: "multiple-choice",
      question: {
        pl: "Czego NA PEWNO nie może brakować w zaproszeniu na Bal? Zaznacz wszystkie pewne.",
        ua: "Чого НАПЕВНО не може бракувати в запрошенні на бал? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Kto zaprasza i kogo; gdzie, kiedy, z jakiej okazji.", ua: "Хто запрошує і кого; де, коли, з якої нагоди." } },
        { id: "b", label: { pl: "Przymiotniki w związku zgody (nie *wielki sala*).", ua: "Прикметники в зв’язку узгодження (не *wielki sala*)." } },
        { id: "c", label: { pl: "Tylko zdanie „Bal.” bez miejsca, daty i cech.", ua: "Лише речення «Bal.» без місця, дати і ознак." } },
        { id: "d", label: { pl: "Mała litera w *polski, szkolny, uroczysty*.", ua: "Мала літера в *polski, szkolny, uroczysty*." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Jak w zaproszeniu Amfitryty (lekcja 25): kto, kogo, gdzie, kiedy. Plus zgoda.",
        ua: "Як у запрошенні Амфітріти (урок 25): хто, кого, де, коли. Плюс узгодження."
      },
      explanation: {
        pl: "Pięć informacji + zgoda + mała litera. Samo słowo *Bal* to nie zaproszenie.",
        ua: "П’ять відомостей + узгодження + мала літера. Саме слово *Bal* — не запрошення."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 70–71  ·  lekcja 37",
    promptPlace: "before",
    prompt: {
      pl: "Zamykamy tematy 36–37. Stopniowanie przymiotnika i *nie* z przymiotnikiem — to *inne* godziny (T42–T43), dziś ich nie mieszamy. W zeszycie: tabela + 5 par + 3 poprawki z Nilu + szkic zaproszenia.",
      ua: "Закриваємо теми 36–37. Ступені прикметника і *nie* з прикметником — це *інші* години (T42–T43), сьогодні їх не змішуємо. У зошиті: таблиця + 5 пар + 3 виправлення з Нілу + ескіз запрошення."
    },
    items: [
      { pl: "36: pytania, e-mail, pary, zasada zgody, *polski* małą.", ua: "36: питання, e-mail, пари, принцип узгодження, *polski* з малої." },
      { pl: "37: tabela, mos/nmos, formy, błędy, Bal.", ua: "37: таблиця, mos/nmos, форми, помилки, бал." },
      { pl: "Zgoda = rodzaj + liczba + przypadek. *dobrzy bracia* ≠ *dobre siostry*.", ua: "Узгодження = рід + число + відмінок. *dobrzy bracia* ≠ *dobre siostry*." }
    ],
    task: {
      id: "t37-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Umiem odmienić przymiotnik, uzgodnić formę, poprawić błąd i zaplanować zaproszenie.", ua: "Умію відмінити прикметник, узгодити форму, виправити помилку і спланувати запрошення." } },
        { id: "b", label: { pl: "Tylko jeszcze raz przepisałem pigułkę z lekcji 36 — bez tabeli i bez Nilu.", ua: "Лише ще раз переписав пігулку з уроку 36 — без таблиці і без Нілу." } },
        { id: "c", label: { pl: "Już stopniuję przymiotnik i piszę nie z przymiotnikiem (to T42–T43).", ua: "Уже ступенюю прикметник і пишу nie з прикметником (це T42–T43)." } }
      ],
      answer: "a",
      hint: {
        pl: "Stopnie = później. Sama pigułka = wczoraj. Co było na s. 70–71?",
        ua: "Ступені = пізніше. Сама пігулка = учора. Що було на с. 70–71?"
      },
      explanation: {
        pl: "Lekcja 37 = odmiana, zgoda, zad. 4–5, Bal. Definicja — 36. Stopnie — później.",
        ua: "Урок 37 = відміна, узгодження, завд. 4–5, бал. Означення — 36. Ступені — пізніше."
      }
    }
  }
] };
