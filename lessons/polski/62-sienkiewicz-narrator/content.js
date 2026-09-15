function emT62(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T62 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT62(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T62 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 117–120  ·  Lekcja 62  ·  narrator",
    promptPlace: "before",
    prompt: {
      pl: "Lektura: Henryk Sienkiewicz, *W pustyni i w puszczy* (fragment). Kim jest **narrator**, jak działa **narracja trzecioosobowa**, co wiemy o Stasiu. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Лектура: Генрик Сенкевич, *W pustyni i w puszczy* (уривок). Хто такий **оповідач (narrator)**, як працює **третьособова оповідь**, що знаємо про Стася. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opowiem o wydarzeniach i świecie przedstawionym;", ua: "розкажу про події і зображений світ;" },
      { pl: "rozpoznam narratora trzecioosobowego wszechwiedzącego;", ua: "впізнаю третьособового всезнаючого оповідача;" },
      { pl: "zbiorę informacje o Stasiu i napiszę krótkie opowiadanie w 3. os.", ua: "зберу відомості про Стася і напишу коротке оповідання в 3 ос." }
    ],
    task: {
      id: "t62-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam fragment o porwaniu Stasia i Nel", ua: "Читаю уривок про викрадення Стася і Нел" } },
        { id: "b", label: { pl: "Uczę się o narratorze i narracji 3. os.", ua: "Вчуся про оповідача і оповідь у 3 ос." } },
        { id: "c", label: { pl: "Tylko ortografię *nie* z czasownikiem (to T61)", ua: "Лише орфографію *nie* з дієсловом (це T61)" } },
        { id: "d", label: { pl: "Piszę opowiadanie z narratorem trzecioosobowym", ua: "Пишу оповідання з третьособовим оповідачем" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T61 = gramatyka. Dziś = lektura + narrator.",
        ua: "T61 = граматика. Сьогодні = лектура + оповідач."
      },
      explanation: {
        pl: "A, B, D. C było w T61.",
        ua: "A, B, D. C було в T61."
      }
    }
  },

  // 2 — wstęp / świat
  {
    type: "observe",
    heading: { pl: "Wstęp · Afryka XIX w.", ua: "Вступ · Африка XIX ст." },
    formula: "s. 117  ·  ramka wstępna",
    promptPlace: "before",
    prompt: {
      pl: "Zanim czytasz — kto, gdzie, o co chodzi? (szary wstęp w podręczniku).",
      ua: "Перш ніж читати — хто, де, про що? (сірий вступ у підручнику)."
    },
    items: [
      { pl: "**Staś Tarkowski** (14 lat) i **Nel Rawlison** (8 lat).", ua: "**Стась Тарковський** (14) і **Нел Ровлісон** (8)." },
      { pl: "Ojcowie pracują przy Kanale Sueskim w Egipcie.", ua: "Батьки працюють на Суецькому каналі в Єгипті." },
      { pl: "Dzieci jadą do ojców pod opieką **Idrisa** i **Gebhra** (Sudańczycy).", ua: "Діти їдуть до батьків під опікою **Ідріса** і **Гебгра** (суданці)." }
    ],
    task: {
      id: "t62-s02-wstep",
      type: "single-choice",
      question: {
        pl: "Dokąd mają jechać dzieci według wstępu?",
        ua: "Куди мають їхати діти за вступом?"
      },
      options: [
        { id: "a", label: { pl: "spotkać ojców (inspekcja kanału koło Medinet)", ua: "зустріти батьків (інспекція каналу біля Medinet)" } },
        { id: "b", label: { pl: "na wakacyjny obóz tenisa", ua: "на літній тенісний табір" } },
        { id: "c", label: { pl: "do Londynu, do klubu Fogga", ua: "до Лондона, до клубу Фоґґа" } }
      ],
      answer: "a",
      hint: {
        pl: "Szara ramka: ojcowie wyjechali na inspekcję.",
        ua: "Сіра рамка: батьки виїхали на інспекцію."
      },
      explanation: {
        pl: "Mają dołączyć do ojców przy kanale — pod opieką Idrisa i Gebhra.",
        ua: "Мають приєднатися до батьків біля каналу — під опікою Ідріса і Гебгра."
      }
    }
  },

  // 3 — czytanie 4 skany
  {
    type: "observe",
    heading: { pl: "Czytamy · porwanie", ua: "Читаємо · викрадення" },
    formula: "s. 117–120  ·  fragment  ·  H. Sienkiewicz",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj fragment. Cztery skany — klikaj, by powiększyć. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Прочитай уривок. Чотири скани — клікай, щоб збільшити. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź: stacja → wielbłądy → cwał → brak obozu → rękawiczki → nocna jazda.", ua: "Слідкуй: станція → верблюди → галоп → немає табору → рукавички → нічна їзда." },
      { pl: "Kiedy Staś rozumie, że ich **porwano**?", ua: "Коли Стась розуміє, що їх **викрали**?" }
    ],
    task: {
      id: "t62-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "W którą stronę jadą dzieci na końcu pierwszego etapu (stacja)?",
        ua: "У який бік їдуть діти наприкінці першого етапу (станція)?"
      },
      options: [
        { id: "a", label: { pl: "w stronę Talei — przeciwnie do miejsca ojców", ua: "у бік Талеї — протилежно до місця батьків" } },
        { id: "b", label: { pl: "prosto do namiotów ojców przy kanale", ua: "просто до наметів батьків біля каналу" } },
        { id: "c", label: { pl: "wracają pociągiem do Port Said", ua: "повертаються потягом до Порт-Саїду" } }
      ],
      answer: "a",
      hint: {
        pl: "Narrator: kierunek Talei — inaczej niż mieli jechać ojcowie.",
        ua: "Оповідач: напрямок Талеї — інакше, ніж мали їхати батьки."
      },
      explanation: {
        pl: "Jadą ku Talei — odwrotnie niż sugerowano. To sygnał oszustwa.",
        ua: "Їдуть до Талеї — навпаки, ніж казали. Сигнал обману."
      }
    }
  },

  // 4 — słownictwo z marginesu
  {
    type: "example",
    heading: { pl: "Słownictwo z ramki · glosy", ua: "Словник з рамки · глоси" },
    formula: "s. 117–120  ·  margines",
    promptPlace: "before",
    prompt: {
      pl: "Wyrazy z pomarańczowych trójkątów na marginesie — ucz się w kontekście.",
      ua: "Слова з помаранчевих трикутників на полі — вчи в контексті."
    },
    text: {
      pl: "**Beduin** — Arab koczownik na pustyni. **objuczyć** — obciążyć zwierzę ładunkiem. **fez** — męska czapka. **Inglezi** — Anglicy. **kłus, cwał** — biegi zwierzęcia. **ćmić** — tracić ostrość widzenia. **łajać** — strofować. **muślin** — lekka tkanina (też przenośnie: delikatny). **chełpliwość** — zarozumiałość. **junak** — odważny młody mężczyzna.",
      ua: "**Beduin** — араб-кочівник у пустелі. **objuczyć** — навантажити тварину. **fez** — чоловіча шапка. **Inglezi** — англійці. **kłus, cwał** — алюри тварини. **ćmić** — втрачати чіткість зору. **łajać** — лаяти / робити зауваження. **muślin** — легка тканина (і переносно: ніжний). **chełpliwość** — зарозумілість. **junak** — відважний юнак."
    },
    items: [
      { pl: "*Yalla! yalla!* — okrzyk poganiający wielbłądy.", ua: "*Yalla! yalla!* — оклик, що підганяє верблюдів." },
      { pl: "*ouskout* (czyt. uskut) — komenda sudańska w tekście.", ua: "*ouskout* (чит. uskut) — суданська команда в тексті." }
    ],
    task: {
      id: "t62-s04-glosy",
      type: "single-choice",
      question: {
        pl: "Co znaczy *cwał* w tym fragmencie?",
        ua: "Що означає *cwał* у цьому уривку?"
      },
      options: [
        { id: "a", label: { pl: "szybki bieg wielbłąda / galop", ua: "швидкий біг верблюда / галоп" } },
        { id: "b", label: { pl: "rodzaj kapelusza (fez)", ua: "вид капелюха (fez)" } },
        { id: "c", label: { pl: "nazwę miasta nad Nilem", ua: "назву міста над Нілом" } }
      ],
      answer: "a",
      hint: {
        pl: "Margines: *kłus, cwał* = bieg zwierzęcia.",
        ua: "Поле: *kłus, cwał* = біг тварини."
      },
      explanation: {
        pl: "Od kłusa do cwału — coraz szybciej; Nel ma zawroty głowy.",
        ua: "Від рисі до галопу — дедалі швидше; у Нел паморочиться."
      }
    }
  },

  // 5 — wrażenia
  {
    type: "practice",
    heading: { pl: "Zad. 1 · wrażenia", ua: "Завд. 1 · враження" },
    formula: "s. 120  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Porozmawiajcie o wrażeniach po lekturze. Wykorzystajcie sformułowania z ramki.",
      ua: "Поговоріть про враження після читання. Використайте формулювання з рамки."
    },
    visual: vizGhT62("t62-wrazenia.png", {
      alt: { pl: "Ramka: sformułowania wrażeń", ua: "Рамка: формулювання вражень" },
      place: "after"
    }),
    items: [
      { pl: "*zaskoczyło mnie* · *nie spodziewałam/em się* · *robi wrażenie to, że…*", ua: "*zaskoczyło mnie* · *nie spodziewałam/em się* · *robi wrażenie to, że…*" },
      { pl: "*dało mi do myślenia* · *zaimponowało mi* · *zapamiętałam/em*", ua: "*dało mi do myślenia* · *zaimponowało mi* · *zapamiętałam/em*" }
    ],
    task: {
      id: "t62-s05-wrazenia",
      type: "open-answer",
      question: {
        pl: "Napisz 2–3 zdania o swoich wrażeniach. Użyj co najmniej **dwóch** sformułowań z ramki.",
        ua: "Напиши 2–3 речення про свої враження. Використай щонайменше **два** формулювання з рамки."
      },
      hint: {
        pl: "Np. *Zaskoczyło mnie, że… Dało mi do myślenia to, że…*",
        ua: "Напр. *Zaskoczyło mnie, że… Dało mi do myślenia to, że…*"
      },
      explanation: {
        pl: "Sprawdź, czy użyłeś/aś zwrotów z ramki i mówisz o fragmencie (porwanie, Staś, Nel, pustynia).",
        ua: "Перевір, чи використав(ла) звороти з рамки і говориш про уривок (викрадення, Стась, Нел, пустеля)."
      }
    }
  },

  // 6 — sytuacja / świat przedstawiony
  {
    type: "practice",
    heading: { pl: "Zad. 2 · sytuacja w tekście", ua: "Завд. 2 · ситуація в тексті" },
    formula: "s. 120  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Na podstawie wypowiedzi narratora: uczestnicy, plan zdarzeń, czas i miejsce.",
      ua: "На основі висловлювань оповідача: учасники, план подій, час і місце."
    },
    visual: vizGhT62("t62-narrator-def.png", {
      alt: { pl: "Zad. 2 i definicja narratora", ua: "Завд. 2 і означення оповідача" },
      place: "after"
    }),
    items: [
      { pl: "Wypisz uczestników i ułóż plan w zeszycie — klucz po *Sprawdź*.", ua: "Випиши учасників і склади план у зошит — ключ після *Sprawdź*." },
      { pl: "Czas / miejsce: XIX w., Egipt / pustynia, stacja → nocna jazda.", ua: "Час / місце: XIX ст., Єгипет / пустеля, станція → нічна їзда." }
    ],
    task: {
      id: "t62-s06-sytuacja",
      type: "multiple-choice",
      question: {
        pl: "Które elementy świata przedstawionego są poprawne? Zaznacz wszystkie.",
        ua: "Які елементи зображеного світу правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Uczestnicy m.in.: Staś, Nel, Idris, Gebhr, Dinah, Beduin", ua: "Учасники зокрема: Стась, Нел, Ідріс, Гебгр, Діна, бедуїн" } },
        { id: "b", label: { pl: "Plan: stacja → oszustwo → cwał → zrozumienie porwania → rękawiczki", ua: "План: станція → обман → галоп → розуміння викрадення → рукавички" } },
        { id: "c", label: { pl: "Akcja dzieje się w klubie Fogga w Londynie", ua: "Дія відбувається в клубі Фоґґа в Лондоні" } },
        { id: "d", label: { pl: "Miejsce: Egipt / pustynia (stacja, Nil, kierunek Talei)", ua: "Місце: Єгипет / пустеля (станція, Ніл, напрямок Талеї)" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "To Afryka / Egipt, nie Londyn Fogga.",
        ua: "Це Африка / Єгипет, не Лондон Фоґґа."
      },
      explanation: {
        pl: "A, B, D. C myli z Verne’m (T56). Klucz planu: przyjazd → brak ojców → jazda → cwał → porwanie → ślad rękawiczek → noc.",
        ua: "A, B, D. C плутає з Верном (T56). Ключ плану: прибуття → немає батьків → їзда → галоп → викрадення → слід рукавичок → ніч."
      }
    }
  },

  // 7 — definicja narratora
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · narrator", ua: "Zapamiętaj · оповідач" },
    formula: "s. 120  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Złota definicja do zeszytu.",
      ua: "Золоте означення в зошит."
    },
    text: {
      pl: "**Narrator** to stworzona przez autora **postać opowiadająca o zdarzeniach i opisująca świat przedstawiony** w dziele literackim.",
      ua: "**Оповідач (narrator)** — створена автором **постать, що розповідає про події і описує зображений світ** у літературному творі."
    },
    items: [
      { pl: "Narrator ≠ autor (choć autor go tworzy).", ua: "Оповідач ≠ автор (хоча автор його створює)." },
      { pl: "Opowiada o zdarzeniach i opisuje świat przedstawiony.", ua: "Розповідає про події і описує зображений світ." }
    ],
    task: {
      id: "t62-s07-narrator",
      type: "single-choice",
      question: {
        pl: "Narrator to…",
        ua: "Оповідач — це…"
      },
      options: [
        { id: "a", label: { pl: "postać stworzona przez autora, która opowiada o zdarzeniach", ua: "постать, створена автором, що розповідає про події" } },
        { id: "b", label: { pl: "zawsze ten sam człowiek co autor w realnym życiu", ua: "завжди та сама людина, що й автор у реальному житті" } },
        { id: "c", label: { pl: "tylko bohater mówiący „ja” w każdym tekście", ua: "лише герой, що каже «я» в кожному тексті" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: postać opowiadająca…",
        ua: "Рамка: постать, що розповідає…"
      },
      explanation: {
        pl: "Narrator = postać opowiadająca i opisująca świat — nie musi być autorem.",
        ua: "Оповідач = постать, що розповідає й описує світ — не обов’язково автор."
      }
    }
  },

  // 8 — Staś schemat
  {
    type: "practice",
    heading: { pl: "Zad. 3 · co wiemy o Stasiu", ua: "Завд. 3 · що знаємо про Стася" },
    formula: "s. 120  ·  schemat",
    promptPlace: "before",
    prompt: {
      pl: "Narrator zna i ukazuje bohatera → czytelnik poznaje świat zewnętrzny (działania) i wewnętrzny (myśli).",
      ua: "Оповідач знає й показує героя → читач пізнає зовнішній світ (дії) і внутрішній (думки)."
    },
    visual: vizGhT62("t62-stas-schemat.png", {
      alt: { pl: "Schemat: narrator → Staś → odbiorca", ua: "Схема: оповідач → Стась → читач" },
      place: "after"
    }),
    items: [
      { pl: "Do zeszytu: przykłady **działań** Stasia i jego **myśli/uczuć**.", ua: "У зошит: приклади **вчинків** Стася і його **думок/почуттів**." },
      { pl: "Potem: jaki jest bohater? (wniosek czytelnika).", ua: "Потім: який герой? (висновок читача)." },
      { pl: "Propozycje przykładów — po *Sprawdź*.", ua: "Пропозиції прикладів — після *Sprawdź*." }
    ],
    task: {
      id: "t62-s08-stas",
      type: "multiple-choice",
      question: {
        pl: "Co narrator pozwala czytelnikowi wnioskować o Stasiu? Zaznacz wszystkie poprawne.",
        ua: "Що оповідач дозволяє читачеві висновувати про Стася? Познач усі правильні."
      },
      options: [
        { id: "a", label: { pl: "Jest odważny i troskliwy wobec Nel", ua: "Він відважний і турботливий щодо Нел" } },
        { id: "b", label: { pl: "Rozumie niebezpieczeństwo i działa (ślad rękawiczek)", ua: "Розуміє небезпеку і діє (слід рукавичок)" } },
        { id: "c", label: { pl: "Wcale nie martwi się o Nel — tylko o wielbłądy", ua: "Зовсім не хвилюється за Нел — лише за верблюдів" } },
        { id: "d", label: { pl: "Traci dawną chełpliwość — czuje się „małym chłopcem” wobec porywaczy", ua: "Втрачає давну зарозумілість — почувається «маленьким хлопцем» перед викрадачами" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Patrz: działania + myśli / uczucia (litość, strach).",
        ua: "Дивись: дії + думки / почуття (жалість, страх)."
      },
      explanation: {
        pl: "A, B, D. C przeczy tekstowi — Staś chroni Nel. Narrator ukazuje i czyny, i serce (*wielka litość*).",
        ua: "A, B, D. C суперечить тексту — Стась захищає Нел. Оповідач показує і вчинки, і серце (*wielka litość*)."
      }
    }
  },

  // 9 — narrator 3. os. wszechwiedzący
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · narrator 3. os. wszechwiedzący", ua: "Zapamiętaj · оповідач 3 ос. всезнаючий" },
    formula: "s. 120  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Trzy cechy. Skan ramki z przykładem Sienkiewicza — kliknij.",
      ua: "Три ознаки. Скан рамки з прикладом Сенкевича — клікни."
    },
    visual: vizGhT62("t62-3os-ramka.png", {
      alt: { pl: "Ramka: narrator trzecioosobowy wszechwiedzący", ua: "Рамка: третьособовий всезнаючий оповідач" },
      place: "after"
    }),
    text: {
      pl: "Jeżeli narrator **wypowiada się w trzeciej osobie liczby pojedynczej**, ma pełną wiedzę o świecie przedstawionym, ale **nie uczestniczy w zdarzeniach**, to nazywamy go **narratorem trzecioosobowym i wszechwiedzącym**. Przykład: *A w jego sercu wezbrała wielka litość* — narrator zna myśli i uczucia; *poczuł* — 3. os. lp.",
      ua: "Якщо оповідач **говорить у третій особі однини**, має повне знання про зображений світ, але **не бере участі в подіях**, його звемо **третьособовим і всезнаючим оповідачем**. Приклад: *A w jego sercu wezbrała wielka litość* — оповідач знає думки й почуття; *poczuł* — 3 ос. одн."
    },
    items: [
      { pl: "3. osoba (*on/ona* — *poczuł*, *jechał*).", ua: "3 особа (*він/вона* — *poczuł*, *jechał*)." },
      { pl: "Wszechwiedza: myśli, uczucia, fakty poza bohaterem.", ua: "Всезнання: думки, почуття, факти поза героєм." },
      { pl: "Nie jest uczestnikiem zdarzeń.", ua: "Не є учасником подій." }
    ],
    task: {
      id: "t62-s09-3os",
      type: "single-choice",
      question: {
        pl: "Które zdanie opisuje narratora trzecioosobowego wszechwiedzącego?",
        ua: "Яке речення описує третьособового всезнаючого оповідача?"
      },
      options: [
        { id: "a", label: { pl: "Mówi w 3. os., zna myśli bohaterów, nie bierze udziału w akcji", ua: "Говорить у 3 ос., знає думки героїв, не бере участі в дії" } },
        { id: "b", label: { pl: "Zawsze mówi „ja” i jest jednym z bohaterów", ua: "Завжди каже «я» і є одним із героїв" } },
        { id: "c", label: { pl: "Tylko wymienia daty, bez opisu uczuć", ua: "Лише називає дати, без опису почуттів" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: 3. os. + wiedza + brak udziału.",
        ua: "Рамка: 3 ос. + знання + відсутність участі."
      },
      explanation: {
        pl: "W tym fragmencie Sienkiewicza — właśnie taki narrator.",
        ua: "У цьому уривку Сенкевича — саме такий оповідач."
      }
    }
  },

  // 10 — zad. 4 pisanie
  {
    type: "practice",
    heading: { pl: "Zad. 4 · opowiadanie", ua: "Завд. 4 · оповідання" },
    formula: "s. 120  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Napisz opowiadanie: bohater podejmuje ważną decyzję. Narrator = trzecioosobowy wszechwiedzący.",
      ua: "Напиши оповідання: герой ухвалює важливе рішення. Оповідач = третьособовий всезнаючий."
    },
    visual: vizGhT62("t62-zad4.png", {
      alt: { pl: "Polecenie: opowiadanie z narratorem 3. os.", ua: "Завдання: оповідання з оповідачем 3 ос." },
      place: "after"
    }),
    items: [
      { pl: "Pisz *on/ona* — nie *ja*.", ua: "Пиши *він/вона* — не *я*." },
      { pl: "Pokaż myśl lub uczucie bohatera (wszechwiedza).", ua: "Покажи думку або почуття героя (всезнання)." },
      { pl: "Decyzja ma być wyraźna w zakończeniu.", ua: "Рішення має бути чітким у фіналі." }
    ],
    task: {
      id: "t62-s10-pisanie",
      type: "open-answer",
      question: {
        pl: "Napisz krótkie opowiadanie (ok. 8–12 zdań) z narratorem trzecioosobowym wszechwiedzącym. Bohater musi podjąć ważną decyzję.",
        ua: "Напиши коротке оповідання (бл. 8–12 речень) з третьособовим всезнаючим оповідачем. Герой має ухвалити важливе рішення."
      },
      hint: {
        pl: "Wzór: *W jego sercu… Postanowił…* Unikaj *ja poszedłem*.",
        ua: "Зразок: *W jego sercu… Postanowił…* Уникай *ja poszedłem*."
      },
      explanation: {
        pl: "Sprawdź: 3. os. · wgląd w myśli/uczucia · decyzja bohatera · narrator poza akcją.",
        ua: "Перевір: 3 ос. · доступ до думок/почуттів · рішення героя · оповідач поза дією."
      }
    }
  },

  // 11 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T62", ua: "Підсумок · T62" },
    formula: "s. 117–120  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Domknij lekturę o narratorze.",
      ua: "Закрий лектуру про оповідача."
    },
    items: [
      { pl: "Fragment: porwanie Stasia i Nel na pustyni.", ua: "Уривок: викрадення Стася і Нел у пустелі." },
      { pl: "Narrator = postać opowiadająca o świecie przedstawionym.", ua: "Оповідач = постать, що розповідає про зображений світ." },
      { pl: "Tu: narrator **trzecioosobowy wszechwiedzący**.", ua: "Тут: оповідач **третьособовий всезнаючий**." },
      emT62("Czytelnik poznaje Stasia przez czyny i myśli")
    ],
    task: {
      id: "t62-s11-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „W tym fragmencie narrator wypowiada się w 3. osobie i zna uczucia Stasia.”",
        ua: "Чи твердження правильне? «У цьому уривку оповідач говорить у 3 особі і знає почуття Стася.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Ramka + przykład *w jego sercu wezbrała litość*.",
        ua: "Рамка + приклад *w jego sercu wezbrała litość*."
      },
      explanation: {
        pl: "Prawda — narracja trzecioosobowa wszechwiedząca.",
        ua: "Правда — третьособова всезнаюча оповідь."
      }
    }
  }
]};
