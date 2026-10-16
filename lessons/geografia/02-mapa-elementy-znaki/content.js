function em(text) {
  return { text: text, emphasis: true };
}

function img(file, altPl, altUa, titlePl, titleUa) {
  return {
    kind: "image",
    file: "./img/" + file,
    alt: { pl: altPl, ua: altUa },
    title: { pl: titlePl, ua: titleUa }
  };
}

var creditFoto = {
  pl: "Źródło: MOs810, „Iława, Mały Jeziorak”, 22.03.2025, Wikimedia Commons, CC BY 4.0. https://commons.wikimedia.org/wiki/File:Iława,_Mały_Jeziorak.jpg · https://creativecommons.org/licenses/by/4.0 Zmiana: zmniejszono szerokość do 1600 px, kadru nie zmieniano.",
  ua: "Автор фото: MOs810, 22.03.2025. Ліцензія CC BY 4.0. Зміна: лише зменшено ширину."
};

var creditJezioro = {
  pl: "Źródło: MARCIN N, „Mapa Małego Jezioraka w Iławie”, Wikimedia Commons. Wybrano licencję CC BY-SA 3.0. https://commons.wikimedia.org/wiki/File:Image-Jezioro_Mały_Jeziorak_w_Iławie3.svg · http://creativecommons.org/licenses/by-sa/3.0/ Zmiana: plik SVG zapisany jako PNG, treść mapy bez zmian.",
  ua: "Автор карти: MARCIN N. Обрано ліцензію CC BY-SA 3.0. Зміна: SVG збережено як PNG, зміст карти той самий."
};

var creditPlan = {
  pl: "Źródło: MARCIN N, „Iława mapa” oraz „Legenda do mapy Iławy”, Wikimedia Commons, CC BY-SA 3.0. https://commons.wikimedia.org/wiki/File:Iława_mapa.svg · https://commons.wikimedia.org/wiki/File:Legenda_do_mapy_Iławy.svg · http://creativecommons.org/licenses/by-sa/3.0/ Na legendzie jest podpis Made by Marcin n. Zmiana: oba pliki SVG zapisano jako PNG i zestawiono jeden pod drugim. Znaków nie zmieniano.",
  ua: "Автор плану і легенди: MARCIN N, CC BY-SA 3.0. Зміна: два файли поставлено один під одним, знаки ті самі."
};

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Brzeg jeziora Mały Jeziorak", ua: "Берег озера Mały Jeziorak" },
      visual: img(
        "foto-jeziorko.jpg",
        "Panorama Iławy: woda jeziora Mały Jeziorak i zabudowa z wysoką wieżą",
        "Панорама Ілави: вода озера Mały Jeziorak і забудова з високою вежею",
        "To prawdziwe jezioro w Iławie. Widok z brzegu.",
        "Це справжнє озеро в Ілаві. Вид з берега."
      ),
      text: {
        pl: [
          "Na zdjęciu jest prawdziwe miejsce: jezioro Mały Jeziorak w Iławie.",
          "Widać wodę i miasto na brzegu, w tym wysoką wieżę. To widok z boku, nie z góry.",
          creditFoto.pl
        ],
        ua: [
          "На фото справжнє місце: озеро Mały Jeziorak в Ілаві.",
          "Видно воду і місто на березі, зокрема високу вежу. Це вид збоку, не згори.",
          creditFoto.ua
        ]
      },
      task: {
        id: "g02-foto",
        type: "multiple-choice",
        level: "A",
        question: {
          pl: "Zaznacz wszystko, co widać na tym zdjęciu.",
          ua: "Познач усе, що видно на цьому фото."
        },
        options: [
          { id: "woda", label: { pl: "woda jeziora", ua: "woda jeziora — вода озера" } },
          { id: "wieza", label: { pl: "wysoka wieża wśród zabudowy", ua: "wysoka wieża — висока вежа серед будинків" } },
          { id: "krzyz", label: { pl: "krzyż z legendy mapy", ua: "krzyż z legendy — хрест із легенди карти" } }
        ],
        answer: ["woda", "wieza"],
        hint: {
          pl: "Zdjęcie pokazuje wodę i wieżę. Krzyż z legendy jest rysunkiem na mapie, nie na tym zdjęciu.",
          ua: "На фото є вода і вежа. Хрест із легенди — це малюнок на карті, не на цьому фото."
        },
        explanation: {
          pl: "Widać wodę i wysoką wieżę. Krzyż pojawi się dopiero w legendzie mapy.",
          ua: "Видно воду і високу вежу. Хрест з’явиться лише в легенді карти."
        }
      }
    },
    {
      type: "comparison",
      heading: { pl: "To samo jezioro na mapie", ua: "Те саме озеро на карті" },
      visual: img(
        "mapa-jeziorko.png",
        "Mapa Iławy z jeziorem Mały Jeziorak, legendą i znakami",
        "Карта Ілави з озером Mały Jeziorak, легендою і знаками",
        "Iława. Jezioro Mały Jeziorak.",
        "Iława. Озеро Mały Jeziorak."
      ),
      text: {
        pl: [
          "To mapa tej samej Iławy, widziana z góry.",
          ["Woda jeziora nie jest już fotografią. W legendzie niebieska plama ma nazwę ", em("Jeziora, rzeki"), "."],
          "Wieży ze zdjęcia nie szukaj palcem jako tego samego kadru. Na mapie kościół jest małym znakiem, a jego znaczenie jest w legendzie.",
          creditJezioro.pl
        ],
        ua: [
          "Це карта тієї самої Ілави, вигляд згори.",
          ["Вода озера вже не фотографія. У легенді блакитна пляма називається ", em("Jeziora, rzeki"), "."],
          "Вежу з фото не шукай як той самий кадр. На карті костел — це маленький знак, а його значення є в легенді.",
          creditJezioro.ua
        ]
      },
      task: {
        id: "g02-niebieska-plama",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Odczytaj legendę. Czym na tej mapie oznaczono jezioro?",
          ua: "Прочитай легенду. Чим на цій карті позначено озеро?"
        },
        options: [
          { id: "plama", label: { pl: "niebieską plamą: Jeziora, rzeki", ua: "блакитною плямою: Jeziora, rzeki" } },
          { id: "krzyz", label: { pl: "krzyżem: Kościoły", ua: "хрестом: Kościoły" } },
          { id: "zaglowka", label: { pl: "żaglówką: Przystań żeglarska", ua: "вітрильником: Przystań żeglarska" } }
        ],
        answer: "plama",
        hint: {
          pl: "W legendzie, po lewej, niebieski prostokąt stoi przy słowach Jeziora, rzeki.",
          ua: "У легенді ліворуч блакитний прямокутник стоїть біля слів Jeziora, rzeki."
        },
        explanation: {
          pl: "Jezioro to niebieska plama. Krzyż oznacza kościoły, żaglówka — przystań żeglarską.",
          ua: "Озеро — це блакитна пляма. Хрест означає костели, вітрильник — яхтову пристань."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Czym jest mapa?", ua: "Що таке карта?" },
      text: {
        pl: [
          ["", em("Mapa"), " to obraz powierzchni Ziemi albo jej fragmentu, widziany z góry i przeniesiony na płaszczyznę."],
          "Na zdjęciu widać kolory tak, jak wyglądają z brzegu. Na mapie umawiamy się na znaki.",
          "Rysunek jest mniejszy niż prawdziwe miasto, dlatego całe jezioro mieści się na kartce."
        ],
        ua: [
          ["", em("Mapa"), " — це зображення поверхні Землі або її частини, побачене згори і перенесене на площину."],
          "На фото видно кольори так, як вони виглядають з берега. На карті ми домовляємося про знаки.",
          "Малюнок менший за справжнє місто, тому все озеро вміщається на аркуші."
        ]
      },
      task: {
        id: "g02-czym-jest-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wybierz poprawną odpowiedź. Czym jest mapa?",
          ua: "Вибери правильну відповідь. Що таке карта?"
        },
        options: [
          { id: "a", label: { pl: "Obraz okolicy z góry, na płaszczyźnie, pokazany znakami.", ua: "Зображення околиці згори, на площині, показане знаками." } },
          { id: "b", label: { pl: "Zwykłe zdjęcie z brzegu, bez znaków.", ua: "Звичайне фото з берега, без знаків." } },
          { id: "c", label: { pl: "Lista zakupów.", ua: "Список покупок." } }
        ],
        answer: "a",
        hint: {
          pl: "Mapa jest rysunkiem z góry. Zdjęcie z brzegu zostaje zdjęciem.",
          ua: "Карта — це малюнок згори. Фото з берега лишається фото."
        },
        explanation: {
          pl: "Mapa pokazuje okolicę z góry i za pomocą znaków. Zdjęcie ich nie zastępuje.",
          ua: "Карта показує околицю згори і за допомогою знаків. Фото їх не замінює."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tytuł i treść mapy", ua: "Назва і зміст карти" },
      visual: img(
        "mapa-jeziorko.png",
        "Mapa Iławy: tytuł Iława i treść ze znakami",
        "Карта Ілави: назва Iława і зміст зі знаками",
        "Tytuł jest przy legendzie: Iława.",
        "Назва біля легенди: Iława."
      ),
      text: {
        pl: [
          ["", em("Tytuł"), " to nazwa obszaru. Na tej mapie, przy legendzie, jest napis Iława, Jez. Mały Jeziorak."],
          ["", em("Treść mapy"), " to ważne obiekty terenu pokazane znakami: jezioro, kościoły, szkoły, przystanie, ulice."],
          "Niebieski napis Jezioro Mały Jeziorak leży na wodzie. To nazwa obiektu w treści, a tytuł mapy stoi przy legendzie."
        ],
        ua: [
          ["", em("Tytuł"), " — це назва території. На цій карті біля легенди написано Iława, Jez. Mały Jeziorak."],
          ["", em("Treść mapy"), " — це важливі об’єкти місцевості, показані знаками: озеро, костели, школи, пристані, вулиці."],
          "Синій напис Jezioro Mały Jeziorak лежить на воді. Це назва об’єкта в змісті, а назва карти стоїть біля легенди."
        ]
      },
      task: {
        id: "g02-tytul",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Wskaż tytuł tej mapy.",
          ua: "Вкажи назву цієї карти."
        },
        options: [
          { id: "a", label: { pl: "Iława, Jez. Mały Jeziorak", ua: "Iława, Jez. Mały Jeziorak" } },
          { id: "b", label: { pl: "Kościoły", ua: "Kościoły — костели" } },
          { id: "c", label: { pl: "Mickiewicza", ua: "Mickiewicza — назва вулиці" } }
        ],
        answer: "a",
        hint: {
          pl: "Tytuł nazywa cały obszar. Kościoły to wiersz legendy, Mickiewicza to ulica.",
          ua: "Назва називає всю територію. Kościoły — рядок легенди, Mickiewicza — вулиця."
        },
        explanation: {
          pl: "Tytuł to Iława, Jez. Mały Jeziorak. Kościoły objaśniają znak, a Mickiewicza jest nazwą ulicy w treści.",
          ua: "Назва — Iława, Jez. Mały Jeziorak. Kościoły пояснюють знак, а Mickiewicza — назва вулиці у змісті."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Legenda", ua: "Легенда" },
      visual: img(
        "mapa-jeziorko.png",
        "Legenda mapy Iławy w lewym dolnym rogu",
        "Легенда карти Ілави в лівому нижньому куті",
        "Legenda stoi na dole po lewej.",
        "Легенда стоїть унизу ліворуч."
      ),
      text: {
        pl: [
          ["", em("Legenda"), " zestawia znak z jego nazwą. Bez niej zgadujesz. Z nią czytasz."],
          "Na tej mapie legenda jest na dole po lewej. Jeden wiersz: krzyż i słowo Kościoły."
        ],
        ua: [
          ["", em("Legenda"), " ставить знак поруч із його назвою. Без неї ти вгадуєш. З нею — читаєш."],
          "На цій карті легенда внизу ліворуч. Один рядок: хрест і слово Kościoły."
        ]
      },
      task: {
        id: "g02-krzyz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Odczytaj legendę. Co oznacza krzyż?",
          ua: "Прочитай легенду. Що означає хрест?"
        },
        options: [
          { id: "a", label: { pl: "Kościoły", ua: "Kościoły — костели" } },
          { id: "b", label: { pl: "Jeziora, rzeki", ua: "Jeziora, rzeki — озера і річки" } },
          { id: "c", label: { pl: "Przystań żeglarska", ua: "Przystań żeglarska — яхтова пристань" } }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź w legendzie rysunek krzyża. Słowo stoi tuż obok niego.",
          ua: "Знайди в легенді малюнок хреста. Слово стоїть одразу біля нього."
        },
        explanation: {
          pl: "Krzyż oznacza kościoły. Niebieska plama to jeziora i rzeki, żaglówka to przystań żeglarska.",
          ua: "Хрест означає костели. Блакитна пляма — озера і річки, вітрильник — яхтова пристань."
        }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy grupy znaków", ua: "Три групи знаків" },
      visual: img(
        "schemat-znaki.png",
        "Schemat trzech grup znaków, podpisany: schemat, nie mapa",
        "Схема трьох груп знаків із підписом: schemat, nie mapa",
        "Schemat, nie mapa.",
        "Схема, не карта."
      ),
      text: {
        pl: [
          "Ramka powyżej to schemat zasady. To nie jest mapa Iławy.",
          ["", em("Znak punktowy"), " oznacza jedno miejsce. Na mapie jeziora krzyż przy słowie Kościoły jest punktowy. Żaglówka przystani też."],
          ["", em("Znak powierzchniowy"), " zajmuje obszar. Niebieska plama przy słowach Jeziora, rzeki jest powierzchniowa."],
          ["", em("Znak liniowy"), " ma długość. Na legendzie jeziora nie ma osobnej nazwy dla pomarańczowej linii ulic. Linię drogi krajowej odczytasz na planie Starego Miasta: pomarańczowa linia z numerem 16 to DROGI KRAJOWE."]
        ],
        ua: [
          "Рамка вище — схема принципу. Це не карта Ілави.",
          ["", em("Znak punktowy"), " означає одне місце. На карті озера хрест біля слова Kościoły — точковий. Вітрильник пристані теж."],
          ["", em("Znak powierzchniowy"), " займає площу. Блакитна пляма біля слів Jeziora, rzeki — площинна."],
          ["", em("Znak liniowy"), " має довжину. У легенді озера немає окремої назви для помаранчевої лінії вулиць. Лінію національної дороги прочитаєш на плані Старого міста: помаранчева лінія з номером 16 — це DROGI KRAJOWE."]
        ]
      },
      task: {
        id: "g02-grupa-punkt",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Który znak na mapie jeziora jest punktowy?",
          ua: "Який знак на карті озера є точковим?"
        },
        options: [
          { id: "a", label: { pl: "krzyż przy słowie Kościoły", ua: "хрест біля слова Kościoły" } },
          { id: "b", label: { pl: "niebieska plama przy słowach Jeziora, rzeki", ua: "блакитна пляма біля слів Jeziora, rzeki" } },
          { id: "c", label: { pl: "zielona plama terenów zielonych", ua: "зелена пляма зелених територій" } }
        ],
        answer: "a",
        hint: {
          pl: "Punktowy znak to jedno miejsce. Plama koloru zajmuje obszar.",
          ua: "Точковий знак — це одне місце. Кольорова пляма займає площу."
        },
        explanation: {
          pl: "Krzyż to jedno miejsce, więc znak punktowy. Niebieska i zielona plama zajmują obszar.",
          ua: "Хрест — це одне місце, тож знак точковий. Блакитна і зелена плями займають площу."
        }
      }
    },
    {
      type: "example",
      heading: { pl: "Odczytaj legendę. Wskaż kościół", ua: "Прочитай легенду. Вкажи костел" },
      reveal: true,
      steps: [
        {
          visual: img(
            "mapa-jeziorko.png",
            "Mapa Iławy do odczytania legendy kościoła",
            "Карта Ілави, щоб прочитати легенду костелу",
            "Najpierw legenda, potem taki sam znak na mapie.",
            "Спочатку легенда, потім такий самий знак на карті."
          ),
          text: {
            pl: "1. Co jest napisane? Polecenie: Odczytaj legendę. Wskaż kościół.",
            ua: "1. Що написано? Завдання: Odczytaj legendę. Wskaż kościół."
          }
        },
        {
          text: {
            pl: "2. Wskaż znaczy: pokaż właściwy znak, nie zgaduj budynku po zdjęciu.",
            ua: "2. Wskaż означає: покажи правильний знак, не вгадуй будівлю з фото."
          }
        },
        {
          text: {
            pl: "3. Odczytaj legendę: znajdź słowo Kościoły.",
            ua: "3. Odczytaj legendę: знайди слово Kościoły."
          }
        },
        {
          text: {
            pl: "4. Obok słowa Kościoły jest krzyż. Zapamiętaj ten kształt.",
            ua: "4. Біля слова Kościoły є хрест. Запам’ятай цю форму."
          }
        },
        {
          text: {
            pl: "5. Na mapie szukasz takiego samego krzyża. Nazwa w legendzie mówi, że to kościół.",
            ua: "5. На карті шукаєш такий самий хрест. Назва в легенді каже, що це костел."
          }
        }
      ],
      task: {
        id: "g02-od-czego",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Polecenie brzmi: Wskaż kościół. Od czego zaczynasz?",
          ua: "Завдання: Wskaż kościół. З чого ти починаєш?"
        },
        options: [
          { id: "a", label: { pl: "Od legendy, od słowa Kościoły.", ua: "З легенди, зі слова Kościoły." } },
          { id: "b", label: { pl: "Od nazwy jednej ulicy.", ua: "З назви однієї вулиці." } },
          { id: "c", label: { pl: "Od koloru nieba na zdjęciu.", ua: "З кольору неба на фото." } }
        ],
        answer: "a",
        hint: {
          pl: "Słowo kościół samo nie leży na ulicy. Najpierw legenda mówi, jaki kształt go oznacza.",
          ua: "Слово kościół саме не лежить на вулиці. Спочатку легенда каже, яка форма його означає."
        },
        explanation: {
          pl: "Zaczynasz od legendy. Przy Kościoły jest krzyż, więc na mapie szukasz krzyża.",
          ua: "Починаєш із легенди. Біля Kościoły є хрест, тож на карті шукаєш хрест."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Plan Starego Miasta: hala", ua: "План Старого міста: зал" },
      visual: img(
        "praktyka-plan-legenda.png",
        "Legenda i plan Starego Miasta w Iławie, bez zaznaczonej odpowiedzi",
        "Легенда і план Старого міста в Ілаві, без позначеної відповіді",
        "Najpierw legenda u góry, potem plan.",
        "Спочатку легенда зверху, потім план."
      ),
      text: {
        pl: [
          "To inny rysunek tej samej Iławy: plan Starego Miasta. Legenda jest osobno, u góry. Odpowiedź nie jest zakreślona.",
          "Odczytaj legendę. Szukaj wiersza Hala Widowiskowo-Sportowa.",
          creditPlan.pl
        ],
        ua: [
          "Це інший малюнок тієї самої Ілави: план Старого міста. Легенда окремо, зверху. Відповідь не обведена.",
          "Прочитай легенду. Шукай рядок Hala Widowiskowo-Sportowa.",
          creditPlan.ua
        ]
      },
      task: {
        id: "g02-hala",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Odczytaj legendę. Wskaż znak hali widowiskowo-sportowej.",
          ua: "Прочитай легенду. Вкажи знак спортивно-видовищного залу."
        },
        options: [
          { id: "a", label: { pl: "piłka", ua: "piłka — м’яч" } },
          { id: "b", label: { pl: "klaps filmowy", ua: "klaps — хлопавка" } },
          { id: "c", label: { pl: "krzyż", ua: "krzyż — хрест" } }
        ],
        answer: "a",
        hint: {
          pl: "W legendzie przy hali jest piłka, nie klaps i nie krzyż.",
          ua: "У легенді біля залу є м’яч, не хлопавка і не хрест."
        },
        explanation: {
          pl: "Hala widowiskowo-sportowa to piłka. Klaps to kino, krzyż to kościół.",
          ua: "Зал — це м’яч. Хлопавка — це кіно, хрест — це костел."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Plan Starego Miasta: kino", ua: "План Старого міста: кіно" },
      visual: img(
        "praktyka-plan-legenda.png",
        "Ta sama legenda i plan Iławy do odczytania znaku kina",
        "Та сама легенда і план Ілави, щоб прочитати знак кіно",
        "Znak klapsa jest w legendzie.",
        "Знак хлопавки є в легенді."
      ),
      text: {
        pl: [
          "Zostań przy tej samej legendzie. Znajdź rysunek klapsa filmowego i przeczytaj słowo obok.",
          creditPlan.pl
        ],
        ua: [
          "Залишся при тій самій легенді. Знайди малюнок кінохлопавки і прочитай слово поруч.",
          creditPlan.ua
        ]
      },
      task: {
        id: "g02-kino",
        type: "input-text",
        level: "B",
        question: {
          pl: "Odczytaj legendę. Wpisz słowo przy znaku klapsa.",
          ua: "Прочитай легенду. Впиши слово біля знака хлопавки."
        },
        answer: ["kino"],
        hint: {
          pl: "Wpisz jedno słowo z legendy, małymi literami: kino.",
          ua: "Впиши одне слово з легенди малими літерами: kino."
        },
        explanation: {
          pl: "Przy klapsie w legendzie jest słowo kino.",
          ua: "Біля хлопавки в легенді є слово kino."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Plan Starego Miasta: droga 16", ua: "План Старого міста: дорога 16" },
      visual: img(
        "praktyka-plan-legenda.png",
        "Legenda planu Iławy z wierszem drogi krajowej i plan bez zaznaczonej odpowiedzi",
        "Легенда плану Ілави з рядком національної дороги і план без позначеної відповіді",
        "Droga krajowa jest w legendzie pomarańczową linią.",
        "Національна дорога в легенді — помаранчева лінія."
      ),
      text: {
        pl: [
          "Znak liniowy ma długość. W legendzie planu znajdź wiersz DROGI KRAJOWE.",
          creditPlan.pl
        ],
        ua: [
          "Лінійний знак має довжину. У легенді плану знайди рядок DROGI KRAJOWE.",
          creditPlan.ua
        ]
      },
      task: {
        id: "g02-droga16",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Odczytaj legendę. Który znak oznacza drogę krajową?",
          ua: "Прочитай легенду. Який знак означає національну дорогу?"
        },
        options: [
          { id: "a", label: { pl: "pomarańczowa linia z numerem 16", ua: "помаранчева лінія з номером 16" } },
          { id: "b", label: { pl: "niebieska plama jeziora", ua: "блакитна пляма озера" } },
          { id: "c", label: { pl: "krzyż kościoła", ua: "хрест костелу" } }
        ],
        answer: "a",
        hint: {
          pl: "W legendzie DROGI KRAJOWE to pomarańczowa linia. Na próbce jest numer 16.",
          ua: "У легенді DROGI KRAJOWE — це помаранчева лінія. На зразку є номер 16."
        },
        explanation: {
          pl: "Droga krajowa to pomarańczowa linia. Ma długość, więc jest znakiem liniowym. Niebieska plama to jezioro, krzyż to kościół.",
          ua: "Національна дорога — це помаранчева лінія. Вона має довжину, тож це лінійний знак. Блакитна пляма — озеро, хрест — костел."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Co zostaje z lekcji", ua: "Що залишається з уроку" },
      items: [
        { pl: "Mapa to obraz okolicy z góry, na płaszczyźnie, za pomocą znaków.", ua: "Карта — це зображення околиці згори, на площині, за допомогою знаків." },
        { pl: "Tytuł nazywa obszar. Treść to obiekty pokazane znakami. Legenda tłumaczy znaki.", ua: "Назва називає територію. Зміст — це об’єкти, показані знаками. Легенда пояснює знаки." },
        { pl: "Punkt — jedno miejsce. Linia — długość. Obszar — powierzchnia.", ua: "Точка — одне місце. Лінія — довжина. Площа — поверхня." }
      ],
      task: {
        id: "g02-swoimi-slowami",
        type: "open-answer",
        level: "B",
        question: {
          pl: "Napisz krótko po polsku: skąd wiesz, że krzyż oznacza kościół?",
          ua: "Напиши коротко польською: звідки ти знаєш, що хрест означає костел?"
        },
        answer: [
          "w legendzie",
          "z legendy",
          "bo w legendzie",
          "bo tak jest w legendzie",
          "tak jest w legendzie",
          "bo legenda",
          "legenda",
          "w legendzie krzyż oznacza kościół",
          "w legendzie krzyz oznacza kosciol",
          "w legendzie krzyż to kościół",
          "bo w legendzie krzyż oznacza kościoły",
          "bo w legendzie krzyż oznacza kościół"
        ],
        hint: {
          pl: "Napisz: W legendzie krzyż oznacza kościół.",
          ua: "Напиши: W legendzie krzyż oznacza kościół."
        },
        explanation: {
          pl: "Wystarczy krótkie zdanie: w legendzie krzyż oznacza kościół.",
          ua: "Досить короткого речення: w legendzie krzyż oznacza kościół."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Gra: mapa i jej elementy", ua: "Гра: карта і її елементи" },
      text: {
        pl: ["Przeciągnij podpisy na właściwe miejsca na obrazie."],
        ua: ["Перетягни підписи на правильні місця на зображенні."]
      },
      visual: {
        kind: "wordwall",
        place: "after",
        url: "https://wordwall.net/uk/embed/3fe4ea77caf4421a9fae38eb416d3d7e?themeId=1&templateId=22&fontStackId=0",
        width: 500,
        height: 380,
        title: { pl: "Gra Wordwall: mapa i jej elementy", ua: "Гра Wordwall: карта і її елементи" }
      }
    }
  ]
};
