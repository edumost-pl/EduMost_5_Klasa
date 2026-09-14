function emT3(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T3 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT3(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T3 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 12  ·  Lekcja 3  ·  opis i pytania",
    promptPlace: "before",
    prompt: {
      pl: "Dział *Zachwycający kosmos*. Wczoraj w *Preludium* osoba mówiła do kasztanów o świcie. Dziś patrzymy na *zdjęcia* kosmosu — to lekcja *języka polskiego*, nie astronomii. Uczymy się *opisu* i *pytań*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *Zachwycający kosmos*. Учора в *Preludium* особа говорила до каштанів на світанку. Сьогодні дивимось на *світлини* космосу — це урок *польської мови*, не астрономії. Вчимо *опис* і *питання*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "opiszę wybrane zdjęcie słowami z ramki;", ua: "опишу вибрану світлину словами з рамки;" },
      { pl: "powiem, dlaczego ludzie patrzą w niebo — z czasownikami z ramki;", ua: "скажу, чому люди дивляться в небо — з дієсловами з рамки;" },
      { pl: "odtworzę pytanie prowadzącego w studiu;", ua: "відновлю питання ведучого в студії;" },
      { pl: "sformułuję pytania, na które wciąż nie ma odpowiedzi;", ua: "сформулюю питання, на які досі немає відповіді;" },
      { pl: "napiszę, czy interesuje mnie Kosmos.", ua: "напишу, чи цікавить мене космос." }
    ],
    task: {
      id: "t3-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opisać zdjęcie i sformułować pytania.", ua: "Описати світлину і сформулювати питання." } },
        { id: "b", label: { pl: "Nazwać zawody ludzi w studiu i odtworzyć pytanie prowadzącego.", ua: "Назвати професії людей у студії і відновити питання ведучого." } },
        { id: "c", label: { pl: "Policzyć gwiazdy i narysować mapę Układu Słonecznego.", ua: "Порахувати зірки і намалювати мапу Сонячної системи." } },
        { id: "d", label: { pl: "Napisać, czy Kosmos mnie interesuje.", ua: "Написати, чи космос мене цікавить." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "To język polski: opis, pytania, studio. Co odpada jako lekcja astronomii?",
        ua: "Це польська мова: опис, питання, студія. Що відпадає як урок астрономії?"
      },
      explanation: {
        pl: "Dziś: opis zdjęcia, czasowniki, studio, pytania, własna wypowiedź. Mapy Układu Słonecznego nie rysujemy.",
        ua: "Сьогодні: опис світлини, дієслова, студія, питання, власне висловлювання. Мапу Сонячної системи не малюємо."
      }
    }
  },
  // 2
  {
    type: "observe",
    heading: { pl: "Trzy zdjęcia kosmosu", ua: "Три світлини космосу" },
    formula: "s. 12  ·  trzy zdjęcia  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: *wybierz jedną fotografię i ją opisz*. Najpierw *zobacz wszystkie trzy*. Kliknij, żeby powiększyć. Nie zgaduj nazw z astronomii — mów, *co widać*: kształt, kolor, podobieństwo.",
      ua: "Підручник: *вибери одну світлину і опиши її*. Спочатку *подивись на всі три*. Клацни, щоб збільшити. Не вгадуй астрономічні назви — кажи, *що видно*: форму, колір, подібність."
    },
    items: [
      { pl: "*A.* Pierścień świateł — *przypomina oko*. To *mgławica* (obłok gazu i pyłu w kosmosie).", ua: "*A.* Кільце світла — *нагадує око*. Це *mgławica* (туманність: хмара газу і пилу в космосі)." },
      { pl: "*B.* Ramiona kręcą się wokół jasnego środka — *ma kształt spirali*. To *galaktyka*.", ua: "*B.* Рукави крутяться довкола яскравого центру — *має форму спіралі*. Це *galaktyka* (галактика)." },
      { pl: "*C.* Duża błękitna *kula ziemska* i mniejsze *ciała niebieskie* (m.in. *księżyc*).", ua: "*C.* Велика блакитна *kula ziemska* (земна куля) і менші *ciała niebieskie* (небесні тіла, зокрема *księżyc* — місяць)." }
    ],
    task: {
      id: "t3-s02-foto",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO widać na zdjęciach? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО видно на світлинах? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "A przypomina oko; B ma kształt spirali; C pokazuje kulę ziemską.", ua: "A нагадує око; B має форму спіралі; C показує земну кулю." } },
        { id: "b", label: { pl: "Na C jest szkolna klasa i tablica.", ua: "На C — шкільний клас і дошка." } },
        { id: "c", label: { pl: "To trzy zdjęcia lasu o świcie z lekcji 2.", ua: "Це три світлини лісу на світанку з уроку 2." } },
        { id: "d", label: { pl: "Najpierw patrzymy, potem dobieramy słowa z ramki — nie na odwrót.", ua: "Спочатку дивимось, потім добираємо слова з рамки — не навпаки." } }
      ],
      answer: ["a", "d"],
      hint: {
        pl: "A — pierścień jak oko. B — spirala. C — błękitna kula. Las był w Preludium, nie tu.",
        ua: "A — кільце як око. B — спіраль. C — блакитна куля. Ліс був у Preludium, не тут."
      },
      explanation: {
        pl: "A mgławica (oko), B galaktyka (spirala), C Ziemia i inne ciała. Opis zaczyna się od tego, co widać.",
        ua: "A туманність (око), B галактика (спіраль), C Земля й інші тіла. Опис починається з того, що видно."
      }
    }
  },
  // 3
  {
    type: "example",
    heading: { pl: "Słowa do opisu", ua: "Слова до опису" },
    formula: "s. 12  ·  zad. 1  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Ramka z podręcznika. Zapisz w zeszycie te, których użyjesz przy *jednym* zdjęciu. Najpierw znaczenie, potem zdanie.",
      ua: "Рамка з підручника. Запиши в зошит ті, яких ужиєш при *одній* світлині. Спочатку значення, потім речення."
    },
    text: {
      pl: "niebo  ·  czerń  ·  otchłań  ·  Wszechświat  ·  Kosmos  ·  ciało niebieskie  ·  kula ziemska  ·  planeta  ·  księżyc  ·  wyłania się  ·  pojawia się  ·  ukazuje się  ·  rozświetla  ·  widnieje  ·  rozpościera się  ·  otacza  ·  wyróżnia się  ·  przypomina  ·  jest podobna do  ·  ma kształt  ·  wygląda jak",
      ua: "niebo — небо  ·  czerń — чорнота  ·  otchłań — безодня  ·  Wszechświat — Всесвіт  ·  Kosmos — космос  ·  ciało niebieskie — небесне тіло  ·  kula ziemska — земна куля  ·  planeta — планета  ·  księżyc — місяць  ·  wyłania się — виринає  ·  pojawia się — з’являється  ·  ukazuje się — показується  ·  rozświetla — освітлює  ·  widnieje — видніється  ·  rozpościera się — простягається  ·  otacza — оточує  ·  wyróżnia się — виділяється  ·  przypomina — нагадує  ·  jest podobna do — подібна до  ·  ma kształt — має форму  ·  wygląda jak — виглядає як"
    },
    items: [
      { pl: "*niebo* — przestrzeń nad nami. *czerń* — bardzo głęboki czarny kolor. *otchłań* — ogromna przestrzeń bez widocznego końca. *Kosmos* — przestrzeń poza Ziemią. *Wszechświat* — wszystko, co istnieje (jeszcze szerzej niż kosmos).", ua: "*niebo* — небо. *czerń* — глибока чорнота. *otchłań* — безодня, простір без видимого кінця. *Kosmos* — космос. *Wszechświat* — Всесвіт (ще ширше, ніж космос)." },
      { pl: "*ciało niebieskie* — ogólna nazwa: gwiazda, planeta, księżyc. *planeta* — krąży wokół gwiazdy. *kula ziemska* — Ziemia jako kula. *księżyc* — satelita (nasz Księżyc krąży wokół Ziemi).", ua: "*ciało niebieskie* — небесне тіло (загальна назва). *planeta* — планета. *kula ziemska* — земна куля. *księżyc* — місяць, супутник." },
      { pl: "*widnieje* — już jest widoczne. *wyłania się / pojawia się / ukazuje się* — dopiero staje się widoczne (*wyłania się* = powoli). *rozświetla* — daje światło. *rozpościera się* — zajmuje dużą przestrzeń. *otacza* — jest dookoła. *wyróżnia się* — zwraca uwagę.", ua: "*widnieje* — уже видніється. *wyłania się / pojawia się / ukazuje się* — щойно стає видимим (*wyłania się* = повільно). *rozświetla* — освітлює. *rozpościera się* — простягається. *otacza* — оточує. *wyróżnia się* — виділяється." },
      { pl: "*przypomina* / *wygląda jak* — jest podobne, gdy patrzymy. *jest podobna do* — z *do*. *ma kształt* + dopełniacz: *ma kształt spirali / kuli / oka*.", ua: "*przypomina* / *wygląda jak* — нагадує, виглядає як. *jest podobna do* — подібна до (з *do*). *ma kształt* — має форму (спіралі, кулі, ока)." }
    ],
    task: {
      id: "t3-s03-ramka",
      type: "single-choice",
      question: {
        pl: "Zdjęcie B (spirala). Które sformułowania NA PEWNO pasują?",
        ua: "Світлина B (спіраль). Які формулювання НАПЕВНО пасують?"
      },
      options: [
        { id: "a", label: { pl: "ma kształt spirali; wyróżnia się na tle czerni; wygląda jak wir", ua: "ma kształt spirali — має форму спіралі; wyróżnia się — виділяється; wygląda jak wir — виглядає як вир" } },
        { id: "b", label: { pl: "kula ziemska; księżyc; otacza szkolną tablicę", ua: "kula ziemska / księżyc — це світлина C, не B" } },
        { id: "c", label: { pl: "wyłania się zza chmur nad lasem", ua: "виринає з-за хмар над лісом — це niebo z Preludium, nie to zdjęcie" } }
      ],
      answer: "a",
      hint: {
        pl: "B to spirala w czerni kosmosu. Kula ziemska jest na C.",
        ua: "B — спіраль у чорноті космосу. Земна куля — на C."
      },
      explanation: {
        pl: "B: kształt spirali, czerń tła, podobieństwo do wiru. Kula ziemska i księżyc — zdjęcie C. Las — lekcja 2.",
        ua: "B: форма спіралі, чорнота тла, схожість на вир. Земна куля і місяць — світлина C. Ліс — урок 2."
      }
    }
  },
  // 4
  {
    type: "practice",
    heading: { pl: "Opisz jedno zdjęcie", ua: "Опиши одну світлину" },
    formula: "s. 12  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "W zeszycie: *jedna* fotografia + zdania z ramki. Wzór (zdjęcie A): *Na zdjęciu widnieje mgławica. Na tle czerni kosmosu wyróżnia się jasny pierścień. Przypomina oko / ma kształt oka.*",
      ua: "У зошиті: *одна* світлина + речення з рамки. Зразок (світлина A): *Na zdjęciu widnieje mgławica. На тлі чорноти космосу виділяється світле кільце. Нагадує око / має форму ока.*"
    },
    items: [
      { pl: "Pytania do opisu: *co* widnieje? *gdzie*? *jaki kształt*? *do czego* jest podobne?", ua: "Питання до опису: *що* видніється? *де*? *яка форма*? *на що* схоже?" },
      { pl: "Nie układaj stosu słów. Każde słowo z ramki ma być w *pełnym zdaniu*.", ua: "Не складай купу слів. Кожне слово з рамки має бути в *повному реченні*." }
    ],
    task: {
      id: "t3-s04-opis",
      type: "single-choice",
      question: {
        pl: "Który opis NA PEWNO jest poprawny (pełne zdania + ramka)?",
        ua: "Який опис НАПЕВНО правильний (повні речення + рамка)?"
      },
      options: [
        { id: "a", label: { pl: "Na zdjęciu C widnieje kula ziemska. Otacza ją czerń kosmosu. Wyróżniają się mniejsze ciała niebieskie.", ua: "На світлині C видніється земна куля. Її оточує чорнота космосу. Виділяються менші небесні тіла." } },
        { id: "b", label: { pl: "widnieje otchłań kula ziemska wygląda jak ma kształt", ua: "Слова з рамки звалені докупи, без речень." } },
        { id: "c", label: { pl: "Na zdjęciu widać kota na kanapie.", ua: "На світлині видно кота на дивані." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj pełnych zdań i słów z ramki: widnieje, kula ziemska, otacza, czerń, wyróżniają się.",
        ua: "Шукай повні речення і слова з рамки: widnieje, kula ziemska, otacza, czerń, wyróżniają się."
      },
      explanation: {
        pl: "Opis = zdania. W zeszycie zrób to samo dla A albo B. Stos słów z ramki to nie opis.",
        ua: "Опис = речення. У зошиті зроби те саме для A або B. Купа слів з рамки — не опис."
      }
    }
  },
  // 5
  {
    type: "example",
    heading: { pl: "Dlaczego ludzie patrzą w niebo", ua: "Чому люди дивляться в небо" },
    formula: "s. 12  ·  zad. 2  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: porozmawiajcie, *dlaczego* ludzie patrzą w niebo. W wypowiedzi użyj *czasowników z ramki*. Tu znaczenie — potem wybór.",
      ua: "Підручник: поговоріть, *чому* люди дивляться в небо. У висловлюванні вживай *дієслова з рамки*. Тут значення — потім вибір."
    },
    text: {
      pl: "zastanawiają się  ·  marzą  ·  badają  ·  obserwują  ·  przewidują  ·  planują  ·  rozpamiętują  ·  wspominają  ·  rozmawiają  ·  uśmiechają się  ·  martwią się  ·  smucą się  ·  szukają  ·  dziwią się  ·  podziwiają  ·  modlą się  ·  liczą  ·  pytają  ·  odkrywają  ·  orientują się  ·  dowiadują się  ·  wpatrują się",
      ua: "zastanawiają się — міркують  ·  marzą — мріють  ·  badają — досліджують  ·  obserwują — спостерігають  ·  przewidują — передбачають  ·  planują — планують  ·  rozpamiętują — довго згадують  ·  wspominają — згадують  ·  rozmawiają — розмовляють  ·  uśmiechają się — усміхаються  ·  martwią się — хвилюються  ·  smucą się — сумують  ·  szukają — шукають  ·  dziwią się — дивуються  ·  podziwiają — захоплюються  ·  modlą się — моляться  ·  liczą — рахують  ·  pytają — питають  ·  odkrywają — відкривають  ·  orientują się — орієнтуються  ·  dowiadują się — дізнаються  ·  wpatrują się — вдивляються"
    },
    items: [
      { pl: "MYŚLĄ: *zastanawiają się* (szukają odpowiedzi w głowie), *przewidują*, *planują*, *rozpamiętują* (długo wracają myślą).", ua: "ДУМАЮТЬ: *zastanawiają się* — міркують; *przewidują* — передбачають; *planują* — планують; *rozpamiętują* — довго згадують." },
      { pl: "MÓWIĄ / UCZĄ SIĘ: *rozmawiają, pytają, dowiadują się, orientują się, wspominają*.", ua: "ГОВОРЯТЬ / ДІЗНАЮТЬСЯ: *rozmawiają* — розмовляють; *pytają* — питають; *dowiadują się* — дізнаються; *orientują się* — орієнтуються; *wspominają* — згадують." },
      { pl: "CZUJĄ: *marzą, uśmiechają się, martwią się, smucą się, dziwią się, podziwiają, modlą się*.", ua: "ПОЧУТТЯ: *marzą* — мріють; *uśmiechają się* — усміхаються; *martwią się* — хвилюються; *smucą się* — сумують; *dziwią się* — дивуються; *podziwiają* — захоплюються; *modlą się* — моляться." },
      { pl: "PATRZĄ / SZUKAJĄ: *badają* (prowadzą badania), *obserwują* (uważnie patrzą), *szukają, odkrywają, wpatrują się* (długo, nieruchomo), *liczą*.", ua: "ДИВЛЯТЬСЯ / ШУКАЮТЬ: *badają* — досліджують; *obserwują* — спостерігають; *szukają* — шукають; *odkrywają* — відкривають; *wpatrują się* — вдивляються; *liczą* — рахують." }
    ],
    task: {
      id: "t3-s05-czas",
      type: "single-choice",
      question: {
        pl: "Naukowiec patrzy przez teleskop i szuka odpowiedzi. Która para NA PEWNO pasuje?",
        ua: "Науковець дивиться в телескоп і шукає відповідь. Яка пара НАПЕВНО пасує?"
      },
      options: [
        { id: "a", label: { pl: "obserwuje i bada", ua: "obserwuje — спостерігає; bada — досліджує" } },
        { id: "b", label: { pl: "smuci się i uśmiecha kosmos", ua: "smuci się — сумує (немає dowodu); «uśmiecha kosmos» — так не mówimy" } },
        { id: "c", label: { pl: "rozpamiętuje tablicę w klasie", ua: "розпamiętuje — довго згадує шкільну дошку — не ten obraz" } }
      ],
      answer: "a",
      hint: {
        pl: "Teleskop = uważne patrzenie. Szuka odpowiedzi = bada. Smucić się nie wynika z teleskopu.",
        ua: "Телескоп = уважний погляд. Шукає відповідь = bada. Сум з телескопа не випливає."
      },
      explanation: {
        pl: "Obserwuje (teleskop) i bada (pytania). W zeszycie: 1–2 zdania, dlaczego *ty* patrzysz w niebo — z czasownikiem z ramki.",
        ua: "Obserwuje (телескоп) і bada (питання). У зошиті: 1–2 речення, чому *ти* дивишся в небо — з дієсловом з рамки."
      }
    }
  },
  // 6
  {
    type: "practice",
    heading: { pl: "Nasze powody", ua: "Наші причини" },
    formula: "s. 12  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Wzór: *Ludzie patrzą w niebo, ponieważ podziwiają gwiazdy i zadają pytania.* Most z lekcji 2: osoba w *Preludium* też *wita świt* — to zachwyt, nie lekcja fizyki.",
      ua: "Зразок: *Ludzie patrzą w niebo, ponieważ podziwiają gwiazdy i zadają pytania.* Міст з уроку 2: особа в *Preludium* теж *вітає світанок* — це захват, не урок фізики."
    },
    items: [
      { pl: "Można *podziwiać*, *marzyć*, *pytać*, *obserwować*, *modlić się* — różne osoby, różne powody.", ua: "Можна *podziwiać* — захоплюватися; *marzyć* — мріяти; *pytać* — питати; *obserwować* — спостерігати; *modlić się* — молитися. Різні люди, різні причини." },
      { pl: "Nie musisz wybrać *wszystkich* czasowników. Wybierz *pasujące* do twojego zdania.", ua: "Не треба всіх дієслів. Вибери *ті*, що пасують до твого речення." }
    ],
    task: {
      id: "t3-s06-dlaczego",
      type: "multiple-choice",
      question: {
        pl: "Które zdania NA PEWNO pasują do zadania 2? Zaznacz wszystkie pewne.",
        ua: "Які речення НАПЕВНО пасують до завдання 2? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Ludzie wpatrują się w niebo i podziwiają gwiazdy.", ua: "Люди вдивляються в небо і захоплюються зірками." } },
        { id: "b", label: { pl: "Naukowcy badają Kosmos i odkrywają nowe ciała niebieskie.", ua: "Науковці досліджують космос і відкривають нові небесні тіла." } },
        { id: "c", label: { pl: "Ludzie uśmiechają kosmos przez teleskop.", ua: "Так не говорим: uśmiechają się (з się), а не «усміхають космос»." } },
        { id: "d", label: { pl: "Dzieci pytają i dziwią się, gdy widzą spadającą gwiazdę.", ua: "Діти питають і дивуються, коли бачать падучу зірку." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Uśmiechają się* ma się. Nie mówimy «uśmiechają kosmos». Reszta używa ramki poprawnie.",
        ua: "*Uśmiechają się* має się. Не кажемо «усміхають космос». Решта вживає рамку правильно."
      },
      explanation: {
        pl: "a, b, d: czasowniki z ramki w dobrym zdaniu. c jest błędem gramatycznym. W zeszycie dopisz własne zdanie.",
        ua: "a, b, d: дієслова з рамки в доброму реченні. c — граматична помилка. У зошиті допиши своє речення."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Pytanie prowadzącego", ua: "Питання ведучого" },
    formula: "s. 12  ·  zad. 3a  ·  studio",
    promptPlace: "before",
    prompt: {
      pl: "Studio telewizyjne. Trzy osoby *odpowiadają*. Prowadzący ma w dymku tylko wielokropek. Zadanie: na podstawie *wszystkich* odpowiedzi podaj, *jak mogło brzmieć jego pytanie*.",
      ua: "Телестудія. Троє *відповідають*. У ведучого в бульбашці лише три крапки. Завдання: з *усіх* відповідей скажи, *яким могло бути його питання*."
    },
    visual: vizGhT3("t3-studio.jpg", {
      prompt: "Studio: trzech gości i prowadzący.",
      alt: {
        pl: "Studio: trzech rozmówców przy stole i prowadzący z dymkiem wielokropka.",
        ua: "Студія: троє гостей за столом і ведучий з трикрапкою в бульбашці."
      }
    }),
    items: [
      { pl: "Gość 1: *Zdobycie nowych surowców pozwoli stworzyć nowoczesne technologie. Właśnie jesteśmy na etapie konstruowania maszyn, które będą pracowały w nowych warunkach, znacznie trudniejszych niż na Ziemi.*", ua: "Гість 1: здобуття нової *сировини* (*surowce*) дасть сучасні технології. Будують *машини* для умов важчих, ніж на Землі. *surowce* — сировина; *konstruowania* — конструювання." },
      { pl: "Gość 2: *Najpierw planujemy osiedlić w Kosmosie ochotników, którzy sprawdzą reakcje ludzkiego organizmu w nowym środowisku.*", ua: "Гостя 2: спочатку *оселити* в космосі *добровольців* (*ochotników*), які перевірять *реакції організму* в новому середовищі." },
      { pl: "Gość 3: *Wycieczki w Kosmos to wielka atrakcja. Zainteresowanych – mimo wysokich cen – na pewno nie zabraknie.*", ua: "Гість 3: *подорожі* (*wycieczki*) в космос — велика атракція. Зацікавлених — попри високі *ціни* — не бракуватиме." }
    ],
    task: {
      id: "t3-s07-pytanie",
      type: "single-choice",
      question: {
        pl: "Jak NA PEWNO mogło brzmieć pytanie prowadzącego?",
        ua: "Яким НАПЕВНО могло бути питання ведучого?"
      },
      options: [
        { id: "a", label: { pl: "Jak ludzie mogą wykorzystać Kosmos? / Jakie plany mają wobec Kosmosu?", ua: "Як люди можуть використати космос? / Які плани щодо космосу?" } },
        { id: "b", label: { pl: "Kto napisał wiersz Preludium i do kogo jest apostrofa?", ua: "Хто написав вірш Preludium і до кого апострофа? — це урок 2, не studio." } },
        { id: "c", label: { pl: "Jaka będzie pogoda w Warszawie jutro rano?", ua: "Яка погода у Варшаві завтра вранці? — nikt o pogodzie nie mówi." } }
      ],
      answer: "a",
      hint: {
        pl: "Surowce, osiedlenie, wycieczki — trzy *różne* plany wobec Kosmosu. Co łączy odpowiedzi?",
        ua: "Сировина, оселення, подорожі — три *різні* плани щодо космосу. Що спільне у відповідях?"
      },
      explanation: {
        pl: "Wszyscy mówią, *co ludzie mogą robić w Kosmosie* (przemysł, badania organizmu, turystyka). Nie pytano o wiersz ani o pogodę.",
        ua: "Усі кажуть, *що люди можуть робити в космосі* (промисловість, дослідження організму, туризм). Не питали про вірш і не про погоду."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Kim są rozmówcy", ua: "Ким є співрозмовники" },
    formula: "s. 12  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: powiedz, *kim są z zawodu* i *czym się prawdopodobnie zajmują*. Dowód bierz z *wypowiedzi*, nie z fryzury na rysunku.",
      ua: "Підручник: скажи, *ким вони є за професією* і *чим імовірно займаються*. Доказ бери з *висловлювань*, не з зачіски на малюнку."
    },
    items: [
      { pl: "Gość 1: *surowce, technologie, konstruowanie maszyn* → inżynier / konstruktor / naukowiec od techniki.", ua: "Гість 1: *сировина, технології, конструювання машин* → інженер / конструктор / науковець техніки." },
      { pl: "Gość 2: *osiedlić ochotników, reakcje organizmu, środowisko* → lekarz / biolog / badacz organizmu człowieka w kosmosie.", ua: "Гостя 2: *оселити добровольців, реакції організму* → лікар / біолог / дослідник організму людини в космосі." },
      { pl: "Gość 3: *wycieczki, atrakcja, ceny* → organizator turystyki / przedsiębiorca turystyczny.", ua: "Гість 3: *подорожі, атракція, ціни* → організатор туризму / підприємець." }
    ],
    task: {
      id: "t3-s08-zawod",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO wynika z wypowiedzi? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО випливає з висловлювань? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Pierwszy: inżynier / konstruktor (maszyny, surowce).", ua: "Перший: інженер / конструктор (машини, сировина)." } },
        { id: "b", label: { pl: "Druga: badaczka organizmu / biolożka lub lekarka.", ua: "Друга: дослідниця організму / біологиня або лікарка." } },
        { id: "c", label: { pl: "Trzeci: organizator turystyki kosmicznej.", ua: "Третій: організатор космічного туризму." } },
        { id: "d", label: { pl: "Wszyscy trzej są poetami, bo mówią o gwiazdach jak w Preludium.", ua: "Усі троє поети, бо говорять про зірки як у Preludium." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Zawód z tego, *co kto robi w zdaniu*. Poeta był w lekcji 2. Czy tu ktoś recytuje wiersz?",
        ua: "Професія з того, *що хто робить у реченні*. Поет був на уроці 2. Чи тут хтось читає вірш?"
      },
      explanation: {
        pl: "Trzy głosy = trzy zawody z tekstu. To nie poeci. W zeszycie zapisz: zawód + cytat-dowód.",
        ua: "Три голоси = три професії з тексту. Це не поети. У зошиті: професія + цитата-доказ."
      }
    }
  },
  // 9
  {
    type: "example",
    heading: { pl: "Pytania bez odpowiedzi", ua: "Питання без відповіді" },
    formula: "s. 12  ·  zad. 4  ·  pytajniki",
    promptPlace: "before",
    prompt: {
      pl: "Ludzie patrzą w niebo i zadają pytania, na które *wciąż nikt nie znalazł odpowiedzi*. Sformułuj kilka. Możesz zacząć podanymi wyrazami. Pytanie: wielka litera i znak *?*.",
      ua: "Люди дивляться в небо і ставлять питання, на які *досі ніхто не знайшов відповіді*. Сформулюй кілька. Можеш почати поданими словами. Питання: велика літера і знак *?*."
    },
    text: {
      pl: "Kto …   Co …   Gdzie …   Jak …   Jaka …   Ile …   Kiedy …   Dlaczego …   Czy …",
      ua: "Kto — хто  ·  Co — що  ·  Gdzie — де  ·  Jak — як  ·  Jaka — яка  ·  Ile — скільки  ·  Kiedy — коли  ·  Dlaczego — чому  ·  Czy — чи (так / ні)"
    },
    items: [
      { pl: "*Kto?* osoba. *Co?* rzecz / zjawisko. *Gdzie?* miejsce. *Kiedy?* czas. *Jak?* sposób. *Jaka?* cecha. *Ile?* liczba. *Dlaczego?* powód. *Czy?* tak albo nie.", ua: "*Kto?* — хто. *Co?* — що. *Gdzie?* — де. *Kiedy?* — коли. *Jak?* — як. *Jaka?* — яка. *Ile?* — скільки. *Dlaczego?* — чому. *Czy?* — чи (так / ні)." },
      { pl: "Wzory: *Czy istnieje życie poza Ziemią? Dlaczego Wszechświat się rozszerza? Ile jest galaktyk?*", ua: "Зразки: *Czy istnieje życie poza Ziemią?* Чи існує життя поза Землею? *Dlaczego Wszechświat się rozszerza?* Чому Всесвіт розширюється?" }
    ],
    task: {
      id: "t3-s09-pytajnik",
      type: "open-answer",
      question: {
        pl: "Napisz po polsku jedno pytanie o Kosmosie od Czy albo Dlaczego (ze znakiem ?).",
        ua: "Напиши польською одне питання про космос від Czy або Dlaczego (зі знаком ?)."
      },
      answer: [
        "Czy istnieje życie poza Ziemią?",
        "Czy istnieje życie na innych planetach?",
        "Czy na innych planetach jest życie?",
        "Czy ludzie polecą na Marsa?",
        "Czy kosmos ma koniec?",
        "Czy Wszechświat ma koniec?",
        "Czy na Księżycu jest woda?",
        "Czy warto badać kosmos?",
        "Dlaczego ludzie badają kosmos?",
        "Dlaczego Wszechświat się rozszerza?",
        "Dlaczego gwiazdy świecą?",
        "Dlaczego nocne niebo jest czarne?",
        "Dlaczego ludzie patrzą w niebo?"
      ],
      hint: {
        pl: "Zacznij od Czy albo Dlaczego, dokończ o Kosmosie, postaw ?.",
        ua: "Почни з Czy або Dlaczego, докінчи про космос, постав ?."
      },
      explanation: {
        pl: "Silnik zna kilka wzorów. Sprawdź sam: wielka litera, pytajnik, temat kosmos, znak ?. W zeszycie dopisz jeszcze Co / Gdzie / Kiedy.",
        ua: "Рушій знає кілька зразків. Сам: велика літера, питальне слово, тема космосу, знак ?. У зошиті допиши ще Co / Gdzie / Kiedy."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Czy ciekawi cię Kosmos?", ua: "Чи цікавить тебе космос?" },
    formula: "s. 12  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Napisz wypowiedź z kilku zdań. Możesz zacząć tak jak w podręczniku. Pisz *po polsku*, o sobie (*mnie / lubię*).",
      ua: "Напиши висловлювання з кількох речень. Можеш почати як у підручнику. Пиши *польською*, про себе (*mnie / lubię*)."
    },
    items: [
      { pl: "*Interesuje / Nie interesuje mnie Kosmos, ponieważ…*", ua: "*Interesuje mnie* — мене цікавить; *Nie interesuje mnie* — мене не цікавить; *ponieważ* — тому що." },
      { pl: "*Lubię / Nie lubię się wpatrywać w niebo…*", ua: "*Lubię się wpatrywać* — люблю вдивлятися; *Nie lubię się wpatrywać* — не люблю вдивлятися; *w niebo* — в небо." },
      { pl: "Potem jedno zdanie z ramki czasowników: *podziwiam / pytam / marzę / obserwuję…*", ua: "Потім одне речення з рамки дієслів: *podziwiam* — захоплююся; *pytam* — питаю; *marzę* — мрію; *obserwuję* — спостерігаю." }
    ],
    task: {
      id: "t3-s10-ja",
      type: "open-answer",
      question: {
        pl: "Dokończ po polsku: «Interesuje mnie Kosmos, ponieważ…» albo «Nie interesuje mnie Kosmos, ponieważ…»",
        ua: "Докінчи польською: «Interesuje mnie Kosmos, ponieważ…» або «Nie interesuje mnie Kosmos, ponieważ…»"
      },
      answer: [
        "Interesuje mnie Kosmos, ponieważ lubię się wpatrywać w niebo.",
        "Interesuje mnie Kosmos, ponieważ podziwiam gwiazdy.",
        "Interesuje mnie Kosmos, ponieważ chcę odkrywać tajemnice.",
        "Interesuje mnie Kosmos, ponieważ zadaję pytania.",
        "Nie interesuje mnie Kosmos, ponieważ wolę morze.",
        "Nie interesuje mnie Kosmos, ponieważ wolę książki o Ziemi.",
        "Interesuje mnie Kosmos, ponieważ marzę o podróży.",
        "Lubię się wpatrywać w niebo."
      ],
      hint: {
        pl: "Zacznij jak w książce. Potem ponieważ + powód. Polski, o sobie.",
        ua: "Почни як у книжці. Потім ponieważ + причина. Польська, про себе."
      },
      explanation: {
        pl: "Silnik nie ocenia gustu. Sprawdź: 1) po polsku; 2) interesuje / nie interesuje mnie; 3) ponieważ + powód. W zeszycie dopisz drugie zdanie z lubię / nie lubię się wpatrywać.",
        ua: "Рушій не оцінює смак. Сам: 1) польською; 2) interesuje / nie interesuje mnie; 3) ponieważ + причина. У зошиті допиши друге речення з lubię / nie lubię się wpatrywać."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 12  ·  lekcja 3",
    promptPlace: "before",
    prompt: {
      pl: "Do zeszytu: opis *jednego* zdjęcia (zad. 1) + 2–3 pytania bez odpowiedzi (zad. 4) + wypowiedź *czy ciekawi cię Kosmos* (zad. 5). Jutro: czytanie s. 14.",
      ua: "У зошит: опис *однієї* світлини (завд. 1) + 2–3 питання без відповіді (завд. 4) + висловлювання *чи цікавить тебе космос* (завд. 5). Завтра: читання с. 14."
    },
    items: [
      { pl: "Opis: *widnieje, wyróżnia się, ma kształt, przypomina / wygląda jak*.", ua: "Опис: *видніється, виділяється, має форму, нагадує / виглядає як*." },
      { pl: "Ludzie patrzą w niebo, bo *podziwiają, pytają, badają, marzą*…", ua: "Люди дивляться в небо, бо *захоплюються, питають, досліджують, мріють*…" },
      { pl: "Studio: pytanie o *plany wobec Kosmosu*; trzy zawody z wypowiedzi.", ua: "Студія: питання про *плани щодо космосу*; три професії з висловлювань." },
      { pl: "Pytajniki: *Kto, Co, Gdzie, Jak, Jaka, Ile, Kiedy, Dlaczego, Czy*.", ua: "Питальні слова: хто, що, де, як, яка, скільки, коли, чому, чи." }
    ],
    task: {
      id: "t3-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem tej lekcji?",
        ua: "Що є певним підсумком цього уроку?"
      },
      options: [
        { id: "a", label: { pl: "Umiem opisać zdjęcie, sformułować pytania i powiedzieć, czy Kosmos mnie interesuje.", ua: "Умію описати світлину, сформулювати питання і сказати, чи космос мене цікавить." } },
        { id: "b", label: { pl: "Nazwałem już apostrofę i podmiot liryczny w Preludium.", ua: "Уже назвав апострофу і ліричний суб’єкт у Preludium." } },
        { id: "c", label: { pl: "Zrobiłem notatkę z artykułu na s. 14 i czytałem głośno.", ua: "Зробив нотатку зі статті на с. 14 і читав уголос." } }
      ],
      answer: "a",
      hint: {
        pl: "Apostrofa = lekcja 2. Czytanie s. 14 = lekcja 4. Co było dziś na s. 12?",
        ua: "Апострофа = урок 2. Читання с. 14 = урок 4. Що було сьогодні на с. 12?"
      },
      explanation: {
        pl: "Lekcja 3 = opis + pytania + studio + własna wypowiedź. Preludium było wczoraj. Artykuł s. 14 — jutro.",
        ua: "Урок 3 = опис + питання + студія + власне висловлювання. Preludium було вчора. Стаття с. 14 — завтра."
      }
    }
  }
] };
