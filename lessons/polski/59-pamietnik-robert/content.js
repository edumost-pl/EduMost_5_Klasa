function emT59(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T59 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT59(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T59 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 109–111  ·  Lekcja 59  ·  pamiętnik",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Co w swoim pamiętniku napisałby Robert?* Fragment *Próba odwagi* (Paweł Beręsewicz, *Na przykład Małgośka*). Plan wydarzeń, uczucia, **pamiętnik** vs **dziennik**, własny fragment. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Тема: *Що написав би Роберт у своєму спогаді?* Уривок *Próba odwagi* (Beręsewicz). План подій, почуття, **pamiętnik** vs **dziennik**, власний уривок. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opowiem przebieg nocnej wyprawy i ułożę plan;", ua: "розкажу перебіг нічної виправи і складу план;" },
      { pl: "nazwę uczucia Roberta;", ua: "назву почуття Роберта;" },
      { pl: "rozróżnię *dziennik* i *pamiętnik* i napiszę fragment pamiętnika.", ua: "розрізню *dziennik* і *pamiętnik* і напишу уривок спогаду." }
    ],
    task: {
      id: "t59-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam fragment o Robercie", ua: "Читаю уривок про Роберта" } },
        { id: "b", label: { pl: "Układam plan i nazywam uczucia", ua: "Складаю план і називаю почуття" } },
        { id: "c", label: { pl: "Tylko słownik poprawnej polszczyzny (to T58)", ua: "Лише словник правильної польської (це T58)" } },
        { id: "d", label: { pl: "Piszę fragment pamiętnika", ua: "Пишу уривок спогаду (pamiętnik)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T58 = słownik. Dziś = lektura + pamiętnik.",
        ua: "T58 = словник. Сьогодні = лектура + pamiętnik."
      },
      explanation: {
        pl: "A, B, D. C było w T58.",
        ua: "A, B, D. C було в T58."
      }
    }
  },

  // 2 intro / świat przedstawiony
  {
    type: "observe",
    heading: { pl: "Wstęp · obóz tenisa", ua: "Вступ · тенісний табір" },
    formula: "s. 109  ·  ramka wstępna",
    promptPlace: "before",
    prompt: {
      pl: "Zanim przeczytasz — kto, gdzie, o co chodzi? (szary wstęp w podręczniku).",
      ua: "Перш ніж читати — хто, де, про що? (сірий вступ у підручнику)."
    },
    items: [
      { pl: "Robert — wakacyjny obóz **tenisa ziemnego**.", ua: "Роберт — літній табір **тенisu**." },
      { pl: "Trenera nazywają między sobą **Wampirem**.", ua: "Тренера між собою звуть **Wampirem**." },
      { pl: "Dla Roberta to „szkoła przetrwania”.", ua: "Для Роберта це «школа виживання»." }
    ],
    task: {
      id: "t59-s02-swiat",
      type: "single-choice",
      question: {
        pl: "Gdzie toczy się akcja wstępu?",
        ua: "Де відбувається дія вступу?"
      },
      options: [
        { id: "a", label: { pl: "na wakacyjnym obozie tenisa", ua: "у літньому тенісному таборі" } },
        { id: "b", label: { pl: "w piramidzie w Egipcie", ua: "у піраміді в Єгипті" } },
        { id: "c", label: { pl: "w klubie Fogga w Londynie", ua: "у клубі Фоґґа в Лондоні" } }
      ],
      answer: "a",
      hint: {
        pl: "Pierwsze zdanie szarej ramki.",
        ua: "Перше речення сірої рамки."
      },
      explanation: {
        pl: "Obóz tenisa · trener „Wampir” · Robert.",
        ua: "Тенісний табір · тренер «Wampir» · Роберт."
      }
    }
  },

  // 3 czytanie 4 skany
  {
    type: "observe",
    heading: { pl: "Czytamy · Próba odwagi", ua: "Читаємо · Próba odwagi" },
    formula: "s. 109–111  ·  fragment  ·  P. Beręsewicz",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj fragment. Cztery skany — klikaj po kolei, by powiększyć. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Прочитай уривок. Чотири скани — клікай по черзі, щоб збільшити. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź: pobudka → las → światła → ciemność → spotkanie dziewczyny.", ua: "Слідкуй: підйом → ліс → вогні → темрява → зустріч дівчини." },
      { pl: "Zwróć uwagę, czego boi się Robert.", ua: "Зверни увагу, чого боїться Роберт." }
    ],
    task: {
      id: "t59-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Co oznacza hasło „próba odwagi” w tym fragmencie?",
        ua: "Що означає «próba odwagi» в цьому уривку?"
      },
      options: [
        { id: "a", label: { pl: "nocne wyjście do lasu / bieg za światłem", ua: "нічний вихід у ліс / біг за світлом" } },
        { id: "b", label: { pl: "sprawdzian z matematyki na obozie", ua: "контрольна з математики в таборі" } },
        { id: "c", label: { pl: "mecz tenisa o puchar", ua: "матч із тенісу за кубок" } }
      ],
      answer: "a",
      hint: {
        pl: "Wampir: *Mamy próbę odwagi* → potem las i światełka.",
        ua: "Wampir: *Mamy próbę odwagi* → потім ліс і вогники."
      },
      explanation: {
        pl: "To nocna wyprawa do lasu — test odwagi, nie tenis.",
        ua: "Це нічна виправа в ліс — тест відваги, не теніс."
      }
    }
  },

  // 4 glosy
  {
    type: "example",
    heading: { pl: "Trudne słowa · rozbiór", ua: "Складні слова · розбір" },
    formula: "s. 109–111  ·  glosy UA",
    promptPlace: "before",
    prompt: {
      pl: "Szybki słowniczek z tekstu — zanim ułożysz plan.",
      ua: "Швидкий словничок з тексту — перш ніж складеш план."
    },
    text: {
      pl: "kły · wniebogłosy · na przełaj · pohukiwania · chybotliwych · rozstaj · otucha · upiorny · pożarcie",
      ua: "ікла · на все горло · навпростець · гукання · хитких · роздоріжжя · підбадьорення · моторошний · пожерти"
    },
    items: [
      { pl: "**kły** — ostre zęby; ікла (tu: zęby „Wampira”).", ua: "**kły** — ікла." },
      { pl: "**ziewać wniebogłosy** — bardzo głośno ziewać.", ua: "**wniebogłosy** — дуже голосно (позіхати)." },
      { pl: "**na przełaj** — prosto przez pole / las, nie drogą.", ua: "**na przełaj** — навпростець." },
      { pl: "**pohukiwania** — odgłosy sów / nocne krzyki.", ua: "**pohukiwania** — гукання (сов)." },
      { pl: "**chybotliwe** płomyki — chwiejące się, niestabilne.", ua: "**chybotliwe** — хиткі." },
      { pl: "**rozstaj (dróg)** — miejsce, gdzie drogi się rozchodzą.", ua: "**rozstaj** — роздоріжжя." },
      { pl: "**dodać otuchy** — dodać odwagi / pocieszyć.", ua: "**otucha** — підбадьорення." },
      { pl: "**upiorny las** — straszny, niesamowity.", ua: "**upiorny** — моторошний." }
    ],
    task: {
      id: "t59-s04-glosy",
      type: "single-choice",
      question: {
        pl: "*Na przełaj* znaczy najbliżej:",
        ua: "*Na przełaj* означає найближче:"
      },
      options: [
        { id: "a", label: { pl: "prosto przez teren, nie utartą drogą", ua: "напряму через місцевість, не дорогою" } },
        { id: "b", label: { pl: "tylko samochodem po autostradzie", ua: "лише автомобілем трасою" } },
        { id: "c", label: { pl: "do tyłu, cofając się", ua: "назад, задкуючи" } }
      ],
      answer: "a",
      hint: {
        pl: "Szli przez łąkę do lasu — nie szosą.",
        ua: "Йшли лугом до лісу — не шосе."
      },
      explanation: {
        pl: "*Na przełaj* = w poprzek / na skróty przez teren.",
        ua: "*Na przełaj* = навпростець / наскорочення."
      }
    }
  },

  // 5 plan
  {
    type: "practice",
    heading: { pl: "Plan szczegółowy", ua: "Детальний план" },
    formula: "s. 111  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Uporządkuj punkty. Główne (żółte): najpierw **opuszczenie ośrodka**, potem **start biegu**, na końcu **przygody w lesie**. Klucz — po *Sprawdź*.",
      ua: "Упорядкуй пункти. Головні (жовті): спочатку **вихід із центру**, потім **старт бігу**, наприкінці **пригоди в лісі**. Ключ — після *Перевірити*."
    },
    visual: vizGhT59("t59-plan.png", {
      alt: { pl: "Zad. 1 — punkty planu", ua: "Завд. 1 — пункти плану" },
      place: "after"
    }),
    items: [
      { pl: "Najpierw ułóż trzy punkty główne w czasie.", ua: "Спочатку розстав три головні пункти в часі." },
      { pl: "Potem dopasuj punkty szczegółowe — bez podglądania klucza.", ua: "Потім підбери детальні — без підглядання ключа." }
    ],
    task: {
      id: "t59-s05-plan",
      type: "single-choice",
      question: {
        pl: "Która kolejność punktów GŁÓWNYCH jest poprawna?",
        ua: "Який порядок ГОЛОВНИХ пунктів правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "1. Nocne opuszczenie ośrodka → 2. Rozpoczęcie nocnego biegu → 3. Przygody chłopca w lesie",
            ua: "1. Nocne opuszczenie ośrodka → 2. Rozpoczęcie nocnego biegu → 3. Przygody w lesie"
          }
        },
        {
          id: "b",
          label: {
            pl: "1. Przygody w lesie → 2. Opuszczenie ośrodka → 3. Start biegu",
            ua: "1. Пригоди в лісі → 2. Вихід → 3. Старт"
          }
        },
        {
          id: "c",
          label: {
            pl: "Tylko tenis rano, bez nocy",
            ua: "Лише теніс уранці, без ночі"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Najpierw pobudka w ośrodku, potem las i bieg, na końcu przygody Roberta.",
        ua: "Спочатку підйом у центрі, потім ліс і біг, наприкінці пригоди Роберта."
      },
      explanation: {
        pl: "Klucz główny: opuszczenie ośrodka → rozpoczęcie biegu → przygody w lesie. Szczegóły: pobudka → pokoje → przemówienie → (Adidas / wyjścia / start Roberta) → światełka → rozstaj → bieg na oślep → spotkanie dziewczyny.",
        ua: "Ключ: вихід з центру → старт бігу → пригоди в лісі. Далі деталі за текстом."
      }
    }
  },

  // 6 szczegóły planu
  {
    type: "practice",
    heading: { pl: "Plan · punkty szczegółowe", ua: "План · детальні пункти" },
    formula: "s. 111  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Dopasuj szczegóły do etapów. Klucz — po *Sprawdź*.",
      ua: "Підбери деталі до етапів. Ключ — після *Перевірити*."
    },
    items: [
      { pl: "Etap A = ośrodek · Etap B = start biegu · Etap C = las.", ua: "Етап A = центр · B = старт бігу · C = ліс." }
    ],
    task: {
      id: "t59-s06-szczegoly",
      type: "multiple-choice",
      question: {
        pl: "Które przyporządkowania są poprawne? Zaznacz wszystkie.",
        ua: "Які відповідності правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Ośrodek: pobudka · opuszczenie pokojów · przemówienie Wampira", ua: "Центр: pobudka · pokoje · przemówienie" } },
        { id: "b", label: { pl: "Start biegu: ociąganie Adidasa · kolejne wyjścia · start Roberta", ua: "Старт: Adidas · wyjścia · start Roberta" } },
        { id: "c", label: { pl: "Las: światełko · rozstaj · bieg na oślep · spotkanie dziewczyny", ua: "Ліс: свiatełko · rozstaj · bieg na oślep · dziewczyna" } },
        { id: "d", label: { pl: "Najpierw spotkanie dziewczyny, potem dopiero pobudka", ua: "Спочатку зустріч дівчини, потім підйом" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Dziewczyna jest na końcu fragmentu.",
        ua: "Дівчина — наприкінці уривка."
      },
      explanation: {
        pl: "A–C zgodne z przebiegiem. D odwraca czas.",
        ua: "A–C згідно з перебігом. D перевертає час."
      }
    }
  },

  // 7 uczucia / tabela
  {
    type: "practice",
    heading: { pl: "Robert · co robi? co czuje?", ua: "Роберт · що робить? що відчуває?" },
    formula: "s. 111  ·  zad. 2a",
    promptPlace: "before",
    prompt: {
      pl: "Do trzech punktów głównych dobierz działania i uczucia. Klucz cytatów — po *Sprawdź*.",
      ua: "До трьох головних пунктів добери дії й почуття. Ключ цитат — після *Перевірити*."
    },
    visual: vizGhT59("t59-tabela.png", {
      alt: { pl: "Zad. 2a — tabela", ua: "Завд. 2a — таблиця" },
      place: "after"
    }),
    items: [
      { pl: "Kolumny 1–3 = trzy główne punkty planu.", ua: "Колонки 1–3 = три головні пункти плану." },
      { pl: "Szukaj w tekście: senność, strach, serce, ulga…", ua: "Шукай у тексті: сонність, страх, серце, полегшення…" }
    ],
    task: {
      id: "t59-s07-uczucia",
      type: "multiple-choice",
      question: {
        pl: "Które pary (etap → uczucie) NA PEWNO pasują? Zaznacz wszystkie.",
        ua: "Які пари (етап → почуття) НАПЕВНО пасують? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Opuszczenie ośrodka → senność, zimno, strach / zaskoczenie", ua: "Вихід з центру → сонність, холод, страх" } },
        { id: "b", label: { pl: "Start biegu → bicie serca, pokusa ucieczki, strach", ua: "Старт бігу → серце, спокуса втечі, страх" } },
        { id: "c", label: { pl: "Las (ciemność) → przerażenie; potem ulga przy dziewczynie", ua: "Ліс → жах; потім полегшення з дівчиною" } },
        { id: "d", label: { pl: "Cały czas tylko radość i obojętność", ua: "Увесь час лише радість і байдужість" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*Serce waliło* · *Mamusiu!* · *Boję się jak…*",
        ua: "*Serce waliło* · *Mamusiu!* · *Boję się…*"
      },
      explanation: {
        pl: "Klucz: A–C. Przykłady: sen wyparował / zęby dzwoniły; strach przed startem; zipnął ze strachu → potem wspólny strach i ulga (*trochę mniej*). D przeczy tekstowi.",
        ua: "Ключ: A–C. D суперечить тексту."
      }
    }
  },

  // 8 synonimy
  {
    type: "practice",
    heading: { pl: "Uczucia · synonimy", ua: "Почуття · синоніми" },
    formula: "s. 111  ·  zad. 2b–c",
    promptPlace: "before",
    prompt: {
      pl: "2b = głośne czytanie (intonacja) — zrób przy stoliku. 2c = dopisz synonimy uczuć. Propozycje — po *Sprawdź*.",
      ua: "2b = голосне читання (інтонація). 2c = допиши синоніми почуттів. Пропозиції — після *Перевірити*."
    },
    visual: vizGhT59("t59-bc.png", {
      alt: { pl: "Zad. 2b–c", ua: "Завд. 2b–c" },
      place: "after"
    }),
    items: [
      { pl: "Z bazy: strach, lęk, przerażenie, niepokój, ulga, zmęczenie…", ua: "З бази: страх, жах, неспокій, полегшення, втома…" },
      { pl: "Możesz użyć słownika wyrazów bliskoznacznych.", ua: "Можеш узяти словник синонімів." }
    ],
    task: {
      id: "t59-s08-synonimy",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy NA PEWNO mogą nazwać uczucia Roberta w lesie? Zaznacz wszystkie.",
        ua: "Які слова НАПЕВНО можуть назвати почуття Роберта в лісі? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "strach · lęk · przerażenie · niepokój", ua: "strach · lęk · przerażenie · niepokój" } },
        { id: "b", label: { pl: "ulga / odrobina odwagi (przy dziewczynie)", ua: "полегшення / трохи відваги (з дівчиною)" } },
        { id: "c", label: { pl: "zmęczenie · senność (na początku)", ua: "втома · сонність (на початку)" } },
        { id: "d", label: { pl: "obojętność i nuda bez strachu", ua: "байдужість і нудьга без страху" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Tekst pełen strachu; na końcu trochę lżej we dwoje.",
        ua: "Текст повний страху; наприкінці трохи легше вдвох."
      },
      explanation: {
        pl: "A–C OK. D nie pasuje do *Mamusiu!* i *Boję się*.",
        ua: "A–C OK. D не пасує до страху в тексті."
      }
    }
  },

  // 9 concept pamietnik
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · pamiętnik", ua: "Zapamiętaj · спогад (pamiętnik)" },
    formula: "s. 111  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Definicja do zeszytu. Potem porównasz z dziennikiem.",
      ua: "Означення в зошит. Потім порівняєш із dziennikiem."
    },
    visual: vizGhT59("t59-ramka.png", {
      alt: { pl: "Ramka: pamiętnik", ua: "Рамка: pamiętnik" },
      place: "after"
    }),
    text: {
      pl: "W **pamiętniku** relacjonuje się wydarzenia na podstawie **własnych obserwacji, wspomnień i przeżyć** (stosuje się **narrację pierwszoosobową**). Oprócz zdarzeń często występują **przemyślenia** autora związane z tymi zdarzeniami.",
      ua: "У **спогаді (pamiętnik)** описують події на основі **власних спостережень, спогадів і переживань** (**оповідь від 1 особи**). Окрім подій часто є **роздуми** автора."
    },
    items: [
      { pl: "**ja** widziałem / czułem / myślę…", ua: "**я** бачив / відчував / думаю…" },
      { pl: "zdarzenia + przemyślenia", ua: "події + роздуми" }
    ],
    task: {
      id: "t59-s09-definicja",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: pamiętnik pisze się zwykle w 1. osobie i może zawierać przemyślenia.",
        ua: "Правда чи ні: pamiętnik зазвичай у 1 особі і може містити роздуми."
      },
      answer: true,
      hint: {
        pl: "Ramka: narracja pierwszoosobowa + przemyślenia.",
        ua: "Рамка: оповідь від 1 особи + роздуми."
      },
      explanation: {
        pl: "Prawda. To cechy pamiętnika z ramki.",
        ua: "Правда. Це риси pamiętnika з рамки."
      }
    }
  },

  // 10 dziennik vs pamietnik
  {
    type: "concept",
    heading: { pl: "Dziennik a pamiętnik", ua: "Dziennik і pamiętnik" },
    formula: "s. 111  ·  porównanie",
    promptPlace: "before",
    prompt: {
      pl: "Dwa fragmenty-wzory. Który jest „na bieżąco”, a który „po czasie”?",
      ua: "Два зразки. Який «на ходу», а який «після часу»?"
    },
    visual: vizGhT59("t59-porownanie.png", {
      alt: { pl: "Fragment dziennika vs pamiętnika", ua: "Уривок dziennika vs pamiętnika" },
      place: "after"
    }),
    text: {
      pl: "**Dziennik** — zapiski **na bieżąco**, z dnia na dzień. **Pamiętnik** — wspomnienia **po upływie czasu** od zdarzeń.",
      ua: "**Dziennik** — записи **щодня**, на ходу. **Pamiętnik** — спогади **після часу** від подій."
    },
    items: [
      { pl: "Dziennik: *wtorek, godzina 15.00* · *godzina 20.15*…", ua: "Dziennik: дата + години дня…" },
      { pl: "Pamiętnik: *To było wtedy, gdy byłem w piątej klasie…*", ua: "Pamiętnik: *Це було тоді, коли я був у 5 класі…*" }
    ],
    task: {
      id: "t59-s10-roznica",
      type: "single-choice",
      question: {
        pl: "Robert ma opisać nocną przygodę **po powrocie z wakacji**. To bliżej:",
        ua: "Роберт має описати нічну пригоду **після повернення з канікул**. Це ближче до:"
      },
      options: [
        { id: "a", label: { pl: "pamiętnika (wspomnienie po czasie)", ua: "pamiętnika (спогад після часу)" } },
        { id: "b", label: { pl: "dziennika z tej samej nocy, godzina po godzinie", ua: "dziennika тієї ж ночі, година за годиною" } },
        { id: "c", label: { pl: "tylko przepisów tenisowych", ua: "лише правил тенісу" } }
      ],
      answer: "a",
      hint: {
        pl: "Zad. 3: *po powrocie z wakacji* = dystans czasowy.",
        ua: "Завд. 3: *після повернення з канікул* = часова дистанція."
      },
      explanation: {
        pl: "Po wakacjach = pamiętnik. Dziennik byłby tej nocy na bieżąco.",
        ua: "Після канікул = pamiętnik. Dziennik був би тієї ночі на ходу."
      }
    }
  },

  // 11 open pamietnik
  {
    type: "practice",
    heading: { pl: "Fragment pamiętnika Roberta", ua: "Уривок спогаду Роберта" },
    formula: "s. 111  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Napisz fragment pamiętnika Roberta o nocnej przygodzie. Wykorzystaj plan i uczucia z poprzednich zadań. Forma: **ja**.",
      ua: "Напиши уривок спогаду Роберта про нічну пригоду. Використай план і почуття. Форма: **я**."
    },
    visual: vizGhT59("t59-zad3.png", {
      alt: { pl: "Zad. 3 — napisz pamiętnik", ua: "Завд. 3 — напиши pamiętnik" },
      place: "after"
    }),
    items: [
      { pl: "Możesz zacząć: *Pamiętam tę noc na obozie…* / *Dopiero później zrozumiałem…*", ua: "Можеш почати: *Pamiętam tę noc…*" },
      { pl: "Wpleć: pobudka, las, światła, strach, dziewczyna.", ua: "Уплети: підйом, ліс, вогні, страх, дівчина." }
    ],
    task: {
      id: "t59-s11-open",
      type: "open-answer",
      question: {
        pl: "Napisz 6–10 zdań pamiętnika Roberta (1. os.).",
        ua: "Напиши 6–10 речень спогаду Роберта (1 ос.)."
      },
      hint: {
        pl: "Sprawdź: ja · wspomnienie · zdarzenia + uczucia/przemyślenia.",
        ua: "Перевір: я · спогад · події + почуття/роздуми."
      },
      explanation: {
        pl: "Ocena: 1. os., dystans czasowy (pamiętnik), przebieg z planu, nazwane uczucia.",
        ua: "Оцінка: 1 ос., дистанція в часі, перебіг з плану, названі почуття."
      }
    }
  },

  // 12 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T59", ua: "Підсумок · T59" },
    formula: "s. 109–111  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Masz plan, uczucia i różnicę dziennik/pamiętnik. Dalej w książce — przygody Roberta i Małgośki.",
      ua: "Маєш план, почуття і різницю dziennik/pamiętnik. Далі в книзі — пригоди Роберта й Малґоськи."
    },
    items: [
      { pl: "Próba odwagi = nocna wyprawa / bieg za światłem.", ua: "Próba odwagi = нічна виправа / біг за світлом." },
      { pl: "Pamiętnik = ja + wspomnienia po czasie + przemyślenia.", ua: "Pamiętnik = я + спогади після часу + роздуми." },
      { pl: "Dziennik = zapiski z dnia na dzień.", ua: "Dziennik = записи день у день." }
    ],
    task: {
      id: "t59-s12-domkniecie",
      type: "true-false",
      question: {
        pl: "Prawda czy fałsz: dziennik piszemy zwykle na bieżąco, a pamiętnik — często po czasie.",
        ua: "Правда чи ні: dziennik пишемо зазвичай на ходу, а pamiętnik — часто після часу."
      },
      answer: true,
      hint: {
        pl: "Plansza porównawcza z lekcji.",
        ua: "Порівняльна планшетка з уроку."
      },
      explanation: {
        pl: "Prawda. To główna różnica z podręcznika.",
        ua: "Правда. Це головна різниця з підручника."
      }
    }
  }
]};
