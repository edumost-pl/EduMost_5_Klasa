function emT58(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T58 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT58(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T58 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1 goal
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 107  ·  Lekcja 58  ·  słownik",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Pracujemy ze słownikiem poprawnej polszczyzny*. Dowiesz się, **do czego** służy ten słownik, jak czytać **hasło**, i poprawisz typowe błędy. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Тема: *Працюємо зі словником правильної польської*. Дізнаєшся, **навіщо** цей словник, як читати **статтю (hasło)**, і виправиш типові помилки. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "powiem, czym różni się słownik poprawnej polszczyzny od „zwykłego” słownika;", ua: "скажу, чим словник правильної польської відрізняється від «звичайного»;" },
      { pl: "odczytam informacje w haśle (odmiana, znaczenie, wymowa, błędy);", ua: "прочитаю інформацію в статті (відміна, значення, вимова, помилки);" },
      { pl: "wybiorę poprawną formę i napiszę krótką kartkę z Sandomierza.", ua: "оберу правильну форму і напишу коротку листівку з Сандомира." }
    ],
    task: {
      id: "t58-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytanie hasła słownikowego", ua: "Читання словникової статті" } },
        { id: "b", label: { pl: "Szukanie poprawnej formy / odmiany", ua: "Пошук правильної форми / відміни" } },
        { id: "c", label: { pl: "Pisanie całego pamiętnika Fogga (to było T57)", ua: "Писання всього щоденника Фоґґа (це було T57)" } },
        { id: "d", label: { pl: "Poprawianie typowych błędów językowych", ua: "Виправлення типових мовних помилок" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Dziś słownik — nie lektura Verne’a.",
        ua: "Сьогодні словник — не лектура Верна."
      },
      explanation: {
        pl: "A, B, D. C = temat T57.",
        ua: "A, B, D. C = тема T57."
      }
    }
  },

  // 2 burza mózgów
  {
    type: "observe",
    heading: { pl: "Burza mózgów · które zdanie?", ua: "Мозковий штурм · яке речення?" },
    formula: "s. 107  ·  start",
    promptPlace: "before",
    prompt: {
      pl: "Które zdanie brzmi poprawniej? Skąd to wiesz? Gdzie sprawdzić, gdy masz wątpliwości?",
      ua: "Яке речення звучить правильніше? Звідки знаєш? Де перевірити, коли є сумніви?"
    },
    items: [
      { pl: "A: *Włączyłem radio i usłyszałem piękną piosenkę.*", ua: "A: *Włączyłem radio i usłyszałem piękną piosenkę.*" },
      { pl: "B: *Włączałem radio i usłyszałem piękną piosenkę.*", ua: "B: *Włączałem radio i usłyszałem piękną piosenkę.*" },
      { pl: "Gdy nie jesteś pewien — sięgasz po **słownik poprawnej polszczyzny**.", ua: "Коли не певний — звертаєшся до **словника правильної польської**." }
    ],
    task: {
      id: "t58-s02-burza",
      type: "single-choice",
      question: {
        pl: "Które zdanie jest naturalniejsze / poprawniejsze w tej parze?",
        ua: "Яке речення природніше / правильніше в цій парі?"
      },
      options: [
        { id: "a", label: { pl: "Włączyłem radio i usłyszałem…", ua: "Włączyłem radio i usłyszałem…" } },
        { id: "b", label: { pl: "Włączałem radio i usłyszałem…", ua: "Włączałem radio i usłyszałem…" } },
        { id: "c", label: { pl: "Oba jednakowo dobre zawsze", ua: "Обидва завжди однаково добрі" } }
      ],
      answer: "a",
      hint: {
        pl: "Dwa razy dokonane (*-łem*) pasują do jednej chwili: włączyłem → usłyszałem.",
        ua: "Двічі доконане (*-łem*) пасує до однієї миті."
      },
      explanation: {
        pl: "A jest naturalne. B miesza niedokonane *włączałem* z dokonanym *usłyszałem*. Wątpliwości → słownik poprawnej polszczyzny.",
        ua: "A природне. B змішує недоконане *włączałem* з доконаним *usłyszałem*. Сумніви → словник правильної польської."
      }
    }
  },

  // 3 komiks Sandomierz
  {
    type: "observe",
    heading: { pl: "Rysunki · wyjazd do Sandomierza", ua: "Малюнки · поїздка до Сандомира" },
    formula: "s. 107  ·  komiks",
    promptPlace: "before",
    prompt: {
      pl: "Przeanalizuj sytuację na rysunkach (kliknij, by powiększyć). Potem odpowiesz na pytania — **bez podglądania klucza**.",
      ua: "Проаналізуй ситуацію на малюнках (клікни, щоб збільшити). Потім відповіси на питання — **без підглядання ключа**."
    },
    visual: vizGhT58("t58-komiks.jpg", {
      alt: { pl: "Komiks: autobus do Sandomierza", ua: "Комікс: автобус до Сандомира" },
      place: "after"
    }),
    items: [
      { pl: "Bohaterowie jadą do **Sandomierza** i czytają o zabytkach / Górach Pieprzowych.", ua: "Герої їдуть до **Сандомира** і читають про пам’ятки / Góry Pieprzowe." },
      { pl: "W dymekach są fakty o mieście — przyda się do pytań.", ua: "У бульбашках факти про місто — знадобляться до питань." }
    ],
    task: {
      id: "t58-s03-sytuacja",
      type: "single-choice",
      question: {
        pl: "Gdzie jadą bohaterowie komiksu?",
        ua: "Куди їдуть герої коміксу?"
      },
      options: [
        { id: "a", label: { pl: "do Sandomierza", ua: "до Сандомира" } },
        { id: "b", label: { pl: "do Egiptu z Foggiem", ua: "до Єгипту з Фоґґом" } },
        { id: "c", label: { pl: "tylko do sklepu po kakao", ua: "лише до магазину по какао" } }
      ],
      answer: "a",
      hint: {
        pl: "Znak przy drodze i dymek: *Sandomierz*.",
        ua: "Знак біля дороги і бульбашка: *Sandomierz*."
      },
      explanation: {
        pl: "Jadą do Sandomierza — stąd dalej pytania o miasto.",
        ua: "Їдуть до Сандомира — далі питання про місто."
      }
    }
  },

  // 4 pytania do tekstu
  {
    type: "practice",
    heading: { pl: "Pytania do wypowiedzi", ua: "Питання до реплік" },
    formula: "s. 107  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Na podstawie dymków odpowiedz (w teście). Pełne zdania możesz dopisać w zeszycie. Klucz — po *Sprawdź*.",
      ua: "На основі бульбашок відповідай (у тесті). Повні речення можна дописати в зошит. Ключ — після *Перевірити*."
    },
    visual: vizGhT58("t58-pytania.png", {
      alt: { pl: "Zad. 1 — pytania", ua: "Завд. 1 — питання" },
      place: "after"
    }),
    items: [
      { pl: "Na ilu wzgórzach…? · Jak długa historia…? · Kto bywał…? · Czym zachwycać się w Górach Pieprzowych?", ua: "На скількох пагорбах…? · Яка історія…? · Хто бував…? · Чим милуватися в Góry Pieprzowe?" },
      { pl: "Najpierw sam — bez listy odpowiedzi nad pytaniem.", ua: "Спочатку сам — без списку відповідей над питанням." }
    ],
    task: {
      id: "t58-s04-pytania",
      type: "multiple-choice",
      question: {
        pl: "Które odpowiedzi NA PEWNO wynikają z dymków? Zaznacz wszystkie.",
        ua: "Які відповіді НАПЕВНО випливають із бульбашок? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Sandomierz leży na siedmiu (lessowych) wzgórzach", ua: "Сандомир лежить на семи (лесових) пагорбах" } },
        { id: "b", label: { pl: "Miasto ma ponad tysiąc lat", ua: "Місто має понад тисячу років" } },
        { id: "c", label: { pl: "Bywali tu królowie i książęta", ua: "Тут бували королі й князі" } },
        { id: "d", label: { pl: "W Górach Pieprzowych — rośliny stepowe i róże", ua: "У Góry Pieprzowe — степові рослини і троянди" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "Pierwszy dymek: *siedem lessowych wzgórz* · *ponad tysiąc lat* · *niejeden król, niejeden książę*.",
        ua: "Перша бульбашка: сім пагорбів · понад тисячу років · королі й князі."
      },
      explanation: {
        pl: "Klucz: 7 wzgórz; >1000 lat; królowie i książęta; w Górach Pieprzowych okazy roślin stepowych i gatunki róż.",
        ua: "Ключ: 7 пагорбів; >1000 років; королі й князі; степові рослини і троянди."
      }
    }
  },

  // 5 concept słownik + budowa hasła
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · słownik poprawnej polszczyzny", ua: "Zapamiętaj · словник правильної польської" },
    formula: "s. 107  ·  mini-wykład",
    promptPlace: "before",
    prompt: {
      pl: "Różnica: słownik języka polskiego ≈ **znaczenia**. Słownik poprawnej polszczyzny ≈ **norma**: pisownia, wymowa, odmiana, łączenie wyrazów. Skan hasła — kliknij.",
      ua: "Різниця: словник мови ≈ **значення**. Словник правильної польської ≈ **норма**: правопис, вимова, відміна, сполучення. Скан статті — клікни."
    },
    visual: vizGhT58("t58-haslo-budowa.jpg", {
      alt: { pl: "Budowa hasła: okaz, less", ua: "Будова статті: okaz, less" },
      place: "after"
    }),
    text: {
      pl: "**Słownik poprawnej polszczyzny** pomaga rozstrzygnąć wątpliwości językowe. Zawiera **alfabetycznie ułożone hasła**. W haśle znajdziesz m.in.: wymowę, znaczenie, odmianę, użycie i połączenia z innymi słowami. Skróty (np. *D.* = dopełniacz, *C.* = celownik, *lpoj./lmn.*) — w wykazie na początku słownika.",
      ua: "**Словник правильної польської** допомагає розв’язати мовні сумніви. Містить **алфавітні статті (hasła)**. У статті є зокрема: вимова, значення, відміна, вживання і сполучення з іншими словами. Скорочення (*D.*, *C.*, *lpoj./lmn.*) — у списку на початку словника."
    },
    items: [
      { pl: "**wyraz hasłowy** — hasło (np. *okaz*, *less*).", ua: "**вираз hasłowy** — заголовне слово." },
      { pl: "**odmiana** — np. *D. lpoj. okazu*.", ua: "**відміна** — напр. *D. lpoj. okazu*." },
      { pl: "**znaczenie** — objaśnienie w cudzysłowie / numerach 1., 2.", ua: "**значення** — пояснення." },
      { pl: "**połączenia** — np. *Okaz czego:* …", ua: "**сполучення** — напр. *Okaz czego:* …" },
      { pl: "**wymowa** — [*wym.* …] jak przy *less*.", ua: "**вимова** — [*wym.* …] як у *less*." }
    ],
    task: {
      id: "t58-s05-definicja",
      type: "single-choice",
      question: {
        pl: "Słownik poprawnej polszczyzny NA PEWNO pomaga:",
        ua: "Словник правильної польської НАПЕВНО допомагає:"
      },
      options: [
        { id: "a", label: { pl: "sprawdzić poprawną formę / odmianę / użycie", ua: "перевірити правильну форму / відміну / вживання" } },
        { id: "b", label: { pl: "tylko oglądać mapy Sandomierza", ua: "лише дивитися мапи Сандомира" } },
        { id: "c", label: { pl: "zastąpić cały podręcznik matematyki", ua: "замінити весь підручник математики" } }
      ],
      answer: "a",
      hint: {
        pl: "Patrz ramka / akapit o haśle.",
        ua: "Дивись рамку / абзац про hasło."
      },
      explanation: {
        pl: "Cel: norma językowa — forma, wymowa, odmiana, połączenia.",
        ua: "Мета: мовна норма — форма, вимова, відміна, сполучення."
      }
    }
  },

  // 6 example skróty + rozbiór
  {
    type: "example",
    heading: { pl: "Skróty w haśle · rozbiór", ua: "Скорочення в статті · розбір" },
    formula: "s. 107  ·  wykaz",
    promptPlace: "before",
    prompt: {
      pl: "Bez skrótów nie odczytasz hasła. Zapamiętaj najważniejsze.",
      ua: "Без скорочень не прочитаєш статтю. Запам’ятай найважливіші."
    },
    text: {
      pl: "D. · C. · B. · N. · Ms. · M. · lpoj. · lmn. · wym. · fraz.",
      ua: "Род. · Дав. · Знах. · Оруд. · Місц. · Наз. · одн. · мн. · вимова · фразеол."
    },
    items: [
      { pl: "**M.** — mianownik · **D.** — dopełniacz · **C.** — celownik · **B.** — biernik", ua: "**M.** — називний · **D.** — родовий · **C.** — давальний · **B.** — знахідний" },
      { pl: "**N.** — narzędnik · **Ms.** — miejscownik", ua: "**N.** — орудний · **Ms.** — місцевий" },
      { pl: "**lpoj.** — liczba pojedyncza · **lmn.** — liczba mnoga", ua: "**lpoj.** — однина · **lmn.** — множина" },
      { pl: "**wym.** — wymowa · **fraz.** — frazeologizm / zwrot", ua: "**wym.** — вимова · **fraz.** — фразеологізм" }
    ],
    task: {
      id: "t58-s06-skroty",
      type: "single-choice",
      question: {
        pl: "*D. lmn.* oznacza:",
        ua: "*D. lmn.* означає:"
      },
      options: [
        { id: "a", label: { pl: "dopełniacz liczby mnogiej", ua: "родовий відмінок множини" } },
        { id: "b", label: { pl: "tylko wymowę wyrazu", ua: "лише вимову слова" } },
        { id: "c", label: { pl: "mianownik liczby pojedynczej", ua: "називний однини" } }
      ],
      answer: "a",
      hint: {
        pl: "D. = dopełniacz, lmn. = liczba mnoga.",
        ua: "D. = родовий, lmn. = множина."
      },
      explanation: {
        pl: "*D. lmn.* = dopełniacz l. mn. (np. *królów*, *książąt*).",
        ua: "*D. lmn.* = родовий мн. (напр. *królów*, *książąt*)."
      }
    }
  },

  // 7 hasła — typy informacji
  {
    type: "practice",
    heading: { pl: "Czytamy hasła", ua: "Читаємо статті" },
    formula: "s. 107  ·  zad. 2a",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj hasła (*król, książę, tysiącletni, siedem*). Wskaż w teście, jakie typy informacji tam są. Klucz — po *Sprawdź*.",
      ua: "Прочитай статті (*król, książę, tysiącletni, siedem*). Вкажи в тесті типи інформації. Ключ — після *Перевірити*."
    },
    visual: vizGhT58("t58-hasla.png", {
      alt: { pl: "Hasła: król, książę, tysiącletni, siedem", ua: "Статті: król, książę…" },
      place: "after"
    }),
    items: [
      { pl: "Szukaj: formy odmiany · znaczenie · użycie · formy niepoprawne.", ua: "Шукай: форми відміни · значення · вживання · неправильні форми." },
      { pl: "Nie przepisuj jeszcze pełnego klucza — najpierw sam.", ua: "Не переписуй ще повний ключ — спочатку сам." }
    ],
    task: {
      id: "t58-s07-typy",
      type: "multiple-choice",
      question: {
        pl: "Które typy informacji NA PEWNO występują w podanych hasłach? Zaznacz wszystkie.",
        ua: "Які типи інформації НАПЕВНО є в поданих статтях? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "formy odmiany (np. *królowie / królów*, *książęta*)", ua: "форми відміни (напр. *królowie / królów*)" } },
        { id: "b", label: { pl: "znaczenie (*władca* / *karta do gry*)", ua: "значення (*правитель* / *карта*)" } },
        { id: "c", label: { pl: "ostrzeżenia: nie *tysiącletny*, nie *siedm*", ua: "попередження: не *tysiącletny*, не *siedm*" } },
        { id: "d", label: { pl: "tylko przepisy kuchenne bez polszczyzny", ua: "лише кулінарні рецепти без польської" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Hasło *tysiącletni* i *siedem* mają „Niepoprawnie…”.",
        ua: "Статті *tysiącletni* і *siedem* мають «Niepoprawnie…»."
      },
      explanation: {
        pl: "A–C tak. D nie. Dodatkowo: użycie / frazeologizmy przy *siedem*.",
        ua: "A–C так. D ні. Також: вживання / фразеологізми при *siedem*."
      }
    }
  },

  // 8 formy książę / król
  {
    type: "practice",
    heading: { pl: "Formy · książę i król", ua: "Форми · książę і król" },
    formula: "s. 107  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij tekst formami z nawiasów. Poniżej dwa skany: tekst z lukami + hasło *król/książę*. Klucz — po *Sprawdź*.",
      ua: "Доповни текст формами з дужок. Нижче два скани: текст із пропусками + стаття *król/książę*. Ключ — після *Перевірити*."
    },
    items: [
      { pl: "Patrz skróty: *D. lm.* · *M. lm.* · *C. lm.* · *D. lp.* · *C. lp.*", ua: "Дивись скорочення: *D. lm.* · *M. lm.* · *C. lm.* · *D. lp.* · *C. lp.*" },
      { pl: "Kliknij skany, by powiększyć.", ua: "Клікни скани, щоб збільшити." }
    ],
    steps: [
      {
        visual: vizGhT58("t58-formy-tekst.jpg", {
          alt: { pl: "Tekst Sandomierz — uzupełnij formy", ua: "Текст Сандомир — доповни форми" }
        })
      },
      {
        visual: vizGhT58("t58-slownik-popup.jpg", {
          alt: { pl: "Hasła król / książę ze słownika", ua: "Статті król / książę зі словника" }
        })
      }
    ],
    task: {
      id: "t58-s08-formy",
      type: "multiple-choice",
      question: {
        pl: "Który zestaw form jest poprawny? Zaznacz wszystkie pewne.",
        ua: "Який набір форм правильний? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "miastem książąt i królów (*D. lm.*)", ua: "miastem książąt i królów (*D. lm.*)" } },
        { id: "b", label: { pl: "tacy książęta (*M. lm.*)", ua: "tacy książęta (*M. lm.*)" } },
        { id: "c", label: { pl: "Książętom zależało (*C. lm.*) · księcia / księciu (*D./C. lp.*)", ua: "Książętom · księcia / księciu" } },
        { id: "d", label: { pl: "zasługa króla Kazimierza (*D. lp.*)", ua: "zasługa króla Kazimierza (*D. lp.*)" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "W haśle: *D.lmn. królów* · *książąt* · *książęta* · *księciu*…",
        ua: "У статті: *D.lmn. królów* · *książąt* · *książęta* · *księciu*…"
      },
      explanation: {
        pl: "Klucz: książąt, królów; książęta; Książętom; księcia; księciu; króla.",
        ua: "Ключ: książąt, królów; książęta; Książętom; księcia; księciu; króla."
      }
    }
  },

  // 9 kartka / e-mail
  {
    type: "practice",
    heading: { pl: "Kartka z Sandomierza", ua: "Листівка з Сандомира" },
    formula: "s. 107  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Napisz treść kartki / e-maila. Użyj podanych wyrazów we **wskazanych** formach. Najpierw ustal formy sam — klucz po *Sprawdź*.",
      ua: "Напиши текст листівки / e-mail. Уживай подані слова у **вказаних** формах. Спочатку форми сам — ключ після *Перевірити*."
    },
    visual: vizGhT58("t58-kartka.jpg", {
      alt: { pl: "Zad. 3 — kartka pocztowa", ua: "Завд. 3 — листівка" },
      place: "after"
    }),
    items: [
      { pl: "*muzeum* — **Ms. lm.** · *sweter* — **Ms. lp.** · *przyjaciel* — **D. lm.**", ua: "*muzeum* — **Ms. lm.** · *sweter* — **Ms. lp.** · *przyjaciel* — **D. lm.**" },
      { pl: "*album* — **D. lm.** · *mieszczanin* — **D. lm.**", ua: "*album* — **D. lm.** · *mieszczanin* — **D. lm.**" }
    ],
    task: {
      id: "t58-s09-formy-kartka",
      type: "multiple-choice",
      question: {
        pl: "Które formy są poprawne? Zaznacz wszystkie.",
        ua: "Які форми правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "w muzeach (*Ms. lm.*)", ua: "w muzeach (*Ms. lm.*)" } },
        { id: "b", label: { pl: "w swetrze (*Ms. lp.*)", ua: "w swetrze (*Ms. lp.*)" } },
        { id: "c", label: { pl: "od przyjaciół · albumów · mieszczan (*D. lm.*)", ua: "od przyjaciół · albumów · mieszczan" } },
        { id: "d", label: { pl: "w muzeumach · w sweterze · od przyjacieliów", ua: "w muzeumach · w sweterze · od przyjacieliów" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Ms. często ma *-e / -u*; D. lm. bywa bez końcówki (*mieszczan*).",
        ua: "Ms. часто *-e / -u*; D. lm. буває без закінчення (*mieszczan*)."
      },
      explanation: {
        pl: "Klucz: **muzeach**, **swetrze**, **przyjaciół**, **albumów**, **mieszczan**. D = błędy.",
        ua: "Ключ: **muzeach**, **swetrze**, **przyjaciół**, **albumów**, **mieszczan**. D = помилки."
      }
    }
  },

  // 10 open kartka
  {
    type: "practice",
    heading: { pl: "Napisz kartkę", ua: "Напиши листівку" },
    formula: "s. 107  ·  zad. 3  ·  wypowiedź",
    promptPlace: "before",
    prompt: {
      pl: "Teraz pełna treść (4–6 zdań). Wpleć formy: *muzeach, swetrze, przyjaciół, albumów, mieszczan*.",
      ua: "Тепер повний текст (4–6 речень). Уплети форми: *muzeach, swetrze, przyjaciół, albumów, mieszczan*."
    },
    items: [
      { pl: "Możesz zacząć: *Cześć! Jestem w Sandomierzu…*", ua: "Можеш почати: *Cześć! Jestem w Sandomierzu…*" },
      { pl: "W razie wątpliwości — wróć do skrótów i hasła.", ua: "Якщо сумніви — повернись до скорочень і статті." }
    ],
    task: {
      id: "t58-s10-open",
      type: "open-answer",
      question: {
        pl: "Wklej / napisz treść kartki z wymaganymi formami.",
        ua: "Встав / напиши текст листівки з потрібними формами."
      },
      hint: {
        pl: "Sprawdź, czy masz wszystkie pięć form z zad. 3.",
        ua: "Перевір, чи є всі п’ять форм із завд. 3."
      },
      explanation: {
        pl: "Ocena: są formy *muzeach, swetrze, przyjaciół, albumów, mieszczan* + sensowna treść o Sandomierzu.",
        ua: "Оцінка: є форми *muzeach, swetrze, przyjaciół, albumów, mieszczan* + сенс про Сандомир."
      }
    }
  },

  // 11 detektyw
  {
    type: "practice",
    heading: { pl: "Językowy detektyw", ua: "Мовний детектив" },
    formula: "s. 107  ·  podsumowanie",
    promptPlace: "before",
    prompt: {
      pl: "Znajdź błąd i wybierz poprawkę (jak ze słownika). Klucz — po *Sprawdź*.",
      ua: "Знайди помилку й обери виправлення (як зі словника). Ключ — після *Перевірити*."
    },
    items: [
      { pl: "1. *Kupiłem dwa kilogramy pomarańcz.*", ua: "1. *Kupiłem dwa kilogramy pomarańcz.*" },
      { pl: "2. *W każdym bądź razie musimy już iść.*", ua: "2. *W każdym bądź razie musimy już iść.*" }
    ],
    task: {
      id: "t58-s11-detektyw",
      type: "multiple-choice",
      question: {
        pl: "Które poprawki są właściwe? Zaznacz wszystkie.",
        ua: "Які виправлення правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "… kilogramy **pomarańczy** (albo *pomarańczowych*)", ua: "… **pomarańczy** (або *pomarańczowych*)" } },
        { id: "b", label: { pl: "**W każdym razie** / **Bądź co bądź** (nie: *w każdym bądź razie*)", ua: "**W każdym razie** / **Bądź co bądź**" } },
        { id: "c", label: { pl: "Zostawiam oba zdania bez zmian — tak mówi się zawsze", ua: "Лишаю обидва речення без змін" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "To klasyczne „sklejki” błędów — słownik je prostuje.",
        ua: "Це класичні «склейки» помилок — словник їх виправляє."
      },
      explanation: {
        pl: "Klucz: *pomarańcz* → *pomarańczy*; *w każdym bądź razie* → *w każdym razie* albo *bądź co bądź*.",
        ua: "Ключ: *pomarańcz* → *pomarańczy*; *w każdym bądź razie* → *w każdym razie* / *bądź co bądź*."
      }
    }
  },

  // 12 quiz mini
  {
    type: "practice",
    heading: { pl: "Mini-konkurs · poprawność", ua: "Міні-конкурс · правильність" },
    formula: "s. 107  ·  powtórka",
    promptPlace: "before",
    prompt: {
      pl: "Jak w scenariuszu: szybkie decyzje ze słownika.",
      ua: "Як у сценарії: швидкі рішення зі словника."
    },
    task: {
      id: "t58-s12-quiz",
      type: "multiple-choice",
      question: {
        pl: "Które formy / wybory są poprawne? Zaznacz wszystkie.",
        ua: "Які форми / вибори правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "*wymyślić* (nie: *wymyśleć*)", ua: "*wymyślić* (не: *wymyśleć*)" } },
        { id: "b", label: { pl: "*w cudzysłowie* (nie: *w cudzysłowiu*)", ua: "*w cudzysłowie* (не: *w cudzysłowiu*)" } },
        { id: "c", label: { pl: "*kakao* w D. zwykle nieodmienne: *filiżanka kakao*", ua: "*kakao* в род. зазвичай незмінне" } },
        { id: "d", label: { pl: "*tysiącletny dąb* — tak zaleca hasło", ua: "*tysiącletny dąb* — так радить стаття" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Hasło *tysiącletni* ostrzega przed *tysiącletny*.",
        ua: "Стаття *tysiącletni* застерігає від *tysiącletny*."
      },
      explanation: {
        pl: "A–C poprawne. D błędne: poprawnie *tysiącletni dąb*; nie *tysiącletny*.",
        ua: "A–C правильні. D помилкове: правильно *tysiącletni dąb*."
      }
    }
  },

  // 13 summary
  {
    type: "summary",
    heading: { pl: "Notatka · podsumowanie", ua: "Нотатка · підсумок" },
    formula: "s. 107  ·  do zeszytu",
    promptPlace: "before",
    prompt: {
      pl: "Przepisz do zeszytu. Potem odpowiedz: kiedy warto sięgnąć po słownik poprawnej polszczyzny?",
      ua: "Перепиши в зошит. Потім відповіси: коли варто взяти словник правильної польської?"
    },
    items: [
      { pl: "Słownik poprawnej polszczyzny = wątpliwości językowe (nie tylko „co znaczy”).", ua: "Словник правильної польської = мовні сумніви (не лише «що означає»)." },
      { pl: "W haśle: pisownia / wymowa · odmiana · łączenie wyrazów · ostrzeżenia.", ua: "У статті: правопис / вимова · відміна · сполучення · застереження." },
      { pl: "Skróty — w wykazie na początku słownika.", ua: "Скорочення — у списку на початку словника." }
    ],
    task: {
      id: "t58-s13-kiedy",
      type: "single-choice",
      question: {
        pl: "Kiedy NA PEWNO warto otworzyć słownik poprawnej polszczyzny?",
        ua: "Коли НАПЕВНО варто відкрити словник правильної польської?"
      },
      options: [
        { id: "a", label: { pl: "gdy wahasz się co do formy, odmiany lub zwrotu", ua: "коли вагаєшся щодо форми, відміни чи звороту" } },
        { id: "b", label: { pl: "tylko gdy szukasz przepisu na ciasto", ua: "лише коли шукаєш рецепт торта" } },
        { id: "c", label: { pl: "nigdy — wystarczy zgadywać", ua: "ніколи — досить здогадуватися" } }
      ],
      answer: "a",
      hint: {
        pl: "Cel słownika = rozstrzygać wątpliwości.",
        ua: "Мета словника = розв’язувати сумніви."
      },
      explanation: {
        pl: "A. Słownik = norma i poprawność, gdy masz wątpliwość.",
        ua: "A. Словник = норма і правильність, коли є сумнів."
      }
    }
  }
]};
