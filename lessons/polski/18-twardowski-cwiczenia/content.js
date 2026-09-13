function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE = "Styl: akwarela podręcznikowa GWO «Między nami» klasa 5 — ciepła zieleń, jagody, miękki kontur tuszu, zero napisów na kadrze, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 40  ·  po przeczytaniu wiersza  ·  lekcja 18",
      promptPlace: "before",
      prompt: {
        pl: "Wiersz znasz (lekcja 17). Dziś s. 40: przenośnia, prośba z końcówki, prostszy utwór, opowiadanie. Wiersza nadal nie tłumaczymy. Klucze schowane.",
        ua: "Вірш уже є (урок 17). Сьогодні с. 40: переносний смисл, прохання з кінця, простіший твір, оповідання. Вірш не перекладаємо. Ключі сховані."
      },
      items: [
        { pl: "wyjaśnię przenośnię *serce choćby na chwilę*;", ua: "поясню переносний смисл *serce choćby na chwilę*;" },
        { pl: "powiem, czego ludzie by nie doświadczyli bez takiego serca;", ua: "скажу, чого люди б не зазнали без такого серця;" },
        { pl: "odczytam *prośbę* z dwóch ostatnich wersów;", ua: "прочитаю *прохання* з двох останніх рядків;" },
        { pl: "wskażę utwór *prostszy* od wspaniałej poezji i uzasadnię;", ua: "вкажу твір *простіший* за прекрасну поезію і обґрунтую;" },
        { pl: "napiszę opowiadanie «Serce choćby na chwilę».", ua: "напишу оповідання «Serce choćby na chwilę»." }
      ],
      task: {
        id: "t18-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Wyjaśnić «serce choćby na chwilę» (nie tylko mięsień w klatce).", ua: "Пояснити «serce choćby na chwilę» (не лише м’яз у грудях)." } },
          { id: "b", label: { pl: "Powiedzieć, o co poeta prosi w dwóch ostatnich wersach.", ua: "Сказати, про що поет просить у двох останніх рядках." } },
          { id: "c", label: { pl: "Tylko na nowo uzupełnić schemat adresata z lekcji 17 — i nic więcej.", ua: "Лише знову заповнити схему адресата з уроку 17 — і більше нічого." } },
          { id: "d", label: { pl: "Napisać opowiadanie pod tym tytułem, nawiązując do wiersza.", ua: "Написати оповідання під цією назвою, нав’язавши до вірша." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Zadania 2, 3 i 5 są na s. 40. Schemat adresata był wczoraj.",
          ua: "Завдання 2, 3 і 5 на с. 40. Схема адресата була вчора."
        },
        explanation: {
          pl: "Dziś: przenośnia, prośba, opowiadanie (i zad. 4). Adresat był na lekcji 17 — wolno przypomnieć, ale to nie jedyny cel.",
          ua: "Сьогодні: переносний смисл, прохання, оповідання. Адресат був на уроці 17."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Przypomnienie · końcówka", ua: "Нагадування · кінцівка" },
      formula: "s. 39  ·  cytat  ·  bez tłumaczenia wiersza",
      promptPlace: "before",
      prompt: {
        pl: "Z lekcji 17: adresat = Stwórca. Dziś trzy linijki, które wracają w zadaniach 2 i 3. Czytaj po polsku.",
        ua: "З уроку 17: адресат = Творець. Сьогодні три рядки, які вертаються в завданнях 2 і 3. Читай польською."
      },
      text: {
        pl: [
          "serce choćby na chwilę",
          " ",
          "spraw",
          "niech poeci piszą wiersze prostsze od wspaniałej poezji"
        ]
      },
      task: {
        id: "t18-s02-koncowka",
        type: "single-choice",
        question: {
          pl: "Które dwa wersy to *prośba* do adresata?",
          ua: "Які два рядки — це *прохання* до адресата?"
        },
        options: [
          { id: "a", label: { pl: "«spraw / niech poeci piszą wiersze prostsze od wspaniałej poezji»", ua: "«spraw / niech poeci piszą wiersze prostsze od wspaniałej poezji»" } },
          { id: "b", label: { pl: "«królika z marchewką» i «lato chrabąszczowe»", ua: "«królika z marchewką» і «lato chrabąszczowe»" } },
          { id: "c", label: { pl: "«Niechaj się stanie światłość!» z lekcji 15", ua: "«Niechaj się stanie światłość!» з уроку 15" } }
        ],
        answer: "a",
        hint: {
          pl: "Słowo «spraw» = poproś, uczyń. Gdzie stoi w wierszu?",
          ua: "Слово «spraw» = вчини, прошу. Де воно у вірші?"
        },
        explanation: {
          pl: "Prośba to dwa ostatnie wersy. Królik i lato to wyliczenie stworzeń. «Niechaj się stanie» — Księga Rodzaju.",
          ua: "Прохання — два останні рядки. Кролик і літо — перелік. «Niechaj się stanie» — Книга Буття."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2a · serce choćby na chwilę", ua: "Завд. 2а · serce choćby na chwilę" },
      formula: "s. 40  ·  USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Wyjaśnijcie, jak rozumiecie fragment utworu *serce choćby na chwilę*. Spiszcie swoje propozycje. Najpierw sami — potem wzór (nie jedyna dobra myśl).",
        ua: "Поясніть, як розумієте фрагмент *serce choćby na chwilę*. Запишіть свої пропозиції. Спочатку самі."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie: 1) czy to tylko mięsień? 2) co znaczy «choćby na chwilę»? 3) jedno zdanie: po co to serce w liście jagód, ślimaka i śniegu?",
            ua: "У зошиті: 1) чи це лише м’яз? 2) що значить «choćby na chwilę»? 3) навіщо це серце в списку ягід, слимака і снігу?"
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyny sens",
          text: {
            pl: [
              "To nie lekcja anatomii. *Serce* tu znaczy: wrażliwość, życzliwość, umiejętność zauważenia małego świata — miłość choć na moment.",
              "«Choćby na chwilę» = nawet krótko. Nie trzeba być świętym przez całe życie: wystarczy chwila uwagi.",
              "Bez takiego serca lista jagód i ślimaka byłaby tylko spisem. Z sercem — to zachwyt i troska."
            ],
            ua: [
              "Це не урок анатомії. *Serce* тут: чуйність, доброта, вміння помітити малий світ — любов хоч на мить.",
              "«Choćby na chwilę» = навіть коротко.",
              "Без такого серця список ягід і слимака був би лише переліком. Із серцем — це захват і турбота."
            ]
          }
        }
      ],
      task: {
        id: "t18-s03-serce",
        type: "true-false",
        question: {
          pl: "Czy w tym wierszu «serce choćby na chwilę» znaczy tylko «mięsień, który pompując krew, pracuje 60 sekund»?",
          ua: "Чи в цьому вірші «serce choćby na chwilę» означає лише «м’яз, який, качаючи кров, працює 60 секунд»?"
        },
        answer: false,
        hint: {
          pl: "Fragment stoi obok jagód, zawilca i śniegu. Czy Twardowski zdaje egzamin z biologii?",
          ua: "Фрагмент стоїть поруч із ягодами, zawilec і снігом. Чи Твардовський складає іспит з біології?"
        },
        explanation: {
          pl: "Nie: to przenośnia. Serce = wrażliwość / miłość, choćby krótka. Anatomia tu nie wystarcza.",
          ua: "Ні: це переносний смисл. Серце = чуйність / любов, хоч коротка."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2b · bez tego serca", ua: "Завд. 2б · без цього серця" },
      formula: "s. 40  ·  przykłady z życia",
      promptPlace: "before",
      prompt: {
        pl: "Przedyskutujcie, czego ludzie nigdy by nie doświadczyli, gdyby zabrakło *serca choćby na chwilę*. Podajcie różne przykłady znanych wam sytuacji.",
        ua: "Обговоріть, чого люди ніколи б не зазнали, якби не було *serca choćby na chwilę*. Дайте різні приклади відомих вам ситуацій."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Dwa przykłady w zeszycie: jeden z przyrody (jak w wierszu), jeden ze szkoły / domu. Potem wzór.",
            ua: "Два приклади в зошиті: один з природи (як у вірші), один зі школи / дому."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  z wiersza + z życia",
          text: {
            pl: [
              "Z wiersza: nie zauważylibyśmy, że zawilec więdnie, zanim doniesie się go do domu; że śnieg ma wdzięk, zanim «zatańczy».",
              "Ze szkoły: nikt nie pocieszy kolegi, któremu spadły kanapki; nikt nie zatrzyma się przy ślimaku na chodniku.",
              "Bez chwili serca zostaje pośpiech i «wspaniałe» wielkie sprawy — a mały świat znika."
            ],
            ua: [
              "З вірша: не помітили б, що zawilec в’яне, доки його донесуть додому; що сніг має грацію.",
              "Зі школи: ніхто не потішить однокласника; ніхто не зупиниться біля слимака.",
              "Без миті серця лишається поспіх і «великі» справи — малий світ зникає."
            ]
          }
        }
      ],
      task: {
        id: "t18-s04-bez-serca",
        type: "multiple-choice",
        question: {
          pl: "Czego — według logiki tego wiersza — ludzie mogliby NIE doświadczyć bez «serca choćby na chwilę»? Zaznacz wszystkie pewne.",
          ua: "Чого — за логікою цього вірша — люди могли б НЕ зазнати без «serca choćby na chwilę»? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Zachwytu nad drobiazgiem: ślimak, zawilec, cień liści.", ua: "Захвату дрібницею: слимак, zawilec, тінь листя." } },
          { id: "b", label: { pl: "Troski o kogoś słabszego — choć na moment.", ua: "Турботи про когось слабшого — хоч на мить." } },
          { id: "c", label: { pl: "Tylko recytacji tabliczki mnożenia na ocenę.", ua: "Лише декламації таблиці множення на оцінку." } },
          { id: "d", label: { pl: "Wdzięczności za «niezgrabny śnieg», zanim stanie się groźny.", ua: "Вдячності за «незграбний сніг», поки він не став грізним." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Co jest w katalogu Twardowskiego? Czy tabliczka mnożenia tam stoi?",
          ua: "Що в каталозі Твардовського? Чи таблиця множення там стоїть?"
        },
        explanation: {
          pl: "Bez serca ginie uwaga na małe i troska. Tabliczka mnożenia nie jest tematem tego wiersza.",
          ua: "Без серця гине увага до малого і турбота. Таблиця множення — не тема вірша."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Przenośnia", ua: "Переносний смисл" },
      formula: "program  ·  sens przenośny",
      promptPlace: "before",
      prompt: {
        pl: "Program każe wyjaśnić *przenośne* znaczenie. Słowo znaczy więcej niż w słowniku dosłownym.",
        ua: "Програма: пояснити *переносне* значення. Слово означає більше, ніж у буквальному словнику."
      },
      text: {
        pl: [
          "Dosłownie: serce to narząd. Przenośnie w tym wierszu: czucie, miłość, uwaga na stworzenie.",
          "Inne przenośnie obok: «lato chrabąszczowe» (lato pełne chrabąszczy, nie «lato zrobione z chrabąszcza»); «cień wielki małych liści».",
          "Nie mieszaj z mitem: tu nie ma Cerbera. Nie mieszaj z Biblią: tu nie ma numeru wersetu."
        ],
        ua: [
          "Буквально: серце — орган. Переносно в цьому вірші: чуття, любов, увага до творіння.",
          "Інші переносні образи: «lato chrabąszczowe»; «cień wielki małych liści».",
          "Не змішуй з міфом: тут немає Цербера. Не змішуй з Біблією: тут немає номера вірша."
        ]
      },
      task: {
        id: "t18-s05-przenosnia",
        type: "single-choice",
        question: {
          pl: "Które zdanie poprawnie nazywa przenośnię w «serce choćby na chwilę»?",
          ua: "Яке речення правильно називає переносний смисл у «serce choćby na chwilę»?"
        },
        options: [
          { id: "a", label: { pl: "Serce = wrażliwość / miłość, nawet krótka — nie sam mięsień.", ua: "Серце = чуйність / любов, навіть коротка — не сам м’яз." } },
          { id: "b", label: { pl: "Serce = sklepienie nieba z lekcji 15.", ua: "Серце = склепіння неба з уроку 15." } },
          { id: "c", label: { pl: "Serce = piorun Zeusa.", ua: "Серце = блискавка Зевса." } }
        ],
        answer: "a",
        hint: {
          pl: "Przenośnia zostaje przy uczuciach. Czy sklepienie i piorun są w tym wierszu?",
          ua: "Переносний смисл лишається при почуттях. Чи склепіння і блискавка є в цьому вірші?"
        },
        explanation: {
          pl: "Przenośnia: serce jako czucie. Sklepienie — Biblia. Piorun — mit.",
          ua: "Переносний смисл: серце як чуття. Склепіння — Біблія. Блискавка — міф."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · prośba na końcu", ua: "Завд. 3 · прохання в кінці" },
      formula: "s. 40  ·  dwa ostatnie wersy",
      promptPlace: "before",
      prompt: {
        pl: "Porozmawiajcie o tym, jak rozumiecie prośbę wyrażoną w dwóch ostatnich wersach utworu. Podajcie swoje propozycje.",
        ua: "Поговоріть про те, як розумієте прохання в двох останніх рядках твору. Дайте свої пропозиції."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie: 1) do kogo jest «spraw»? 2) co mają robić poeci? 3) czym «wiersze prostsze» różnią się od «wspaniałej poezji»?",
            ua: "У зошиті: 1) до кого «spraw»? 2) що мають робити поети? 3) чим «простіші вірші» відрізняються від «прекрасної поезії»?"
          }
        },
        {
          formula: "KLUCZ  ·  EduMost",
          text: {
            pl: [
              "Prośba do adresata (Stwórcy): spraw = uczyń, pozwól, zrządź.",
              "Niech poeci piszą *prościej* niż «wspaniała poezja»: bez ozdób, które zasłaniają jagodę i ślimaka.",
              "Sam ten wiersz jest przykładem: katalog drobiazgów zamiast pałacu i pioruna. Twardowski prosi o taką poezję."
            ],
            ua: [
              "Прохання до адресата (Творця): spraw = вчини, дозволь.",
              "Хай поети пишуть *простіше*, ніж «прекрасна поезія»: без оздоб, що закривають ягоду і слимака.",
              "Сам цей вірш — приклад: каталог дрібниць замість палацу і блискавки."
            ]
          }
        }
      ],
      task: {
        id: "t18-s06-prosba",
        type: "single-choice",
        question: {
          pl: "O co — według końcówki — prosi podmiot?",
          ua: "Про що — за кінцівкою — просить суб’єкт?"
        },
        options: [
          { id: "a", label: { pl: "Żeby poeci pisali wiersze prostsze od wspaniałej poezji.", ua: "Щоб поети писали вірші простіші за прекрасну поезію." } },
          { id: "b", label: { pl: "Żeby Zeus zniszczył Olimp piorunem.", ua: "Щоб Зевс знищив Олімп блискавкою." } },
          { id: "c", label: { pl: "Żeby nikt nigdy więcej nie czytał na głos.", ua: "Щоб ніхто більше ніколи не читав уголос." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatni wers: niech poeci piszą… Co dalej?",
          ua: "Останній рядок: niech poeci piszą… Що далі?"
        },
        explanation: {
          pl: "Prośba jest w tekście: prostsze wiersze. Nie Olimp i nie zakaz recytacji.",
          ua: "Прохання в тексті: простіші вірші."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · prostszy utwór", ua: "Завд. 4 · простіший твір" },
      formula: "s. 40  ·  prezentacja",
      promptPlace: "before",
      prompt: {
        pl: "Wyszukaj i zaprezentuj utwór poetycki, który — twoim zdaniem — jest prostszy od wspaniałej poezji. Program: zgodny z kryteriami polecenia. Nie wklejaj całego cudzego wiersza do zeszytu — krótki fragment + uzasadnienie.",
        ua: "Знайди і презентуй поетичний твір, який — на твою думку — простіший за прекрасну поезію. Короткий фрагмент + обґрунтування, не весь чужий вірш у зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Kryteria (zeszyt): 1) krótki / konkretny obraz. 2) język bliski codziennemu. 3) widać rzecz z przyrody albo zwykłą chwilę. 4) potrafisz powiedzieć, DLACZEGO jest prostszy niż «wspaniała poezja».",
            ua: "Критерії: 1) короткий / конкретний образ. 2) мова близька до щоденної. 3) річ з природи або звичайна мить. 4) ЧОМУ простіший."
          }
        },
        {
          formula: "WZÓR prezentacji  ·  EduMost",
          text: {
            pl: [
              "Wstęp: tytuł, autor (jeśli znasz), skąd utwór (antologia, lekcja, dom).",
              "Rozwinięcie: 4–8 wersów na głos + trzy zdania: jaki obraz, jakie słowa, czemu to *prostsze* (konkret zamiast ozdób).",
              "Zakończenie: ten utwór pasuje do prośby Twardowskiego, bo… (jedno zdanie). Nie recytuj całego *Pana Tadeusza* jako «prostszego»."
            ],
            ua: [
              "Вступ: назва, автор, звідки твір.",
              "Розвиток: 4–8 рядків уголос + три речення: який образ, які слова, чому *простіше*.",
              "Закінчення: цей твір пасує до прохання Твардовського, бо… Не декламуй усього «Пана Тадеуша» як «простіший»."
            ]
          }
        }
      ],
      task: {
        id: "t18-s07-prostszy",
        type: "multiple-choice",
        question: {
          pl: "Co MUSI być w tej prezentacji, żeby zgadzała się z poleceniem? Zaznacz wszystkie pewne.",
          ua: "Що МАЄ бути в цій презентації, щоб вона пасувала до завдання? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Wskazany utwór poetycki i uzasadnienie, czemu jest prostszy.", ua: "Вказаний поетичний твір і обґрунтування, чому він простіший." } },
          { id: "b", label: { pl: "Krótki fragment na głos (niekoniecznie cały epos).", ua: "Короткий фрагмент уголос (не обов’язково весь епос)." } },
          { id: "c", label: { pl: "Tylko dyktando z rz niewymiennym, bez wiersza.", ua: "Лише диктант з rz незмінним, без вірша." } },
          { id: "d", label: { pl: "Związek z prośbą Twardowskiego o prostsze wiersze.", ua: "Зв’язок із проханням Твардовського про простіші вірші." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Polecenie: wyszukaj i zaprezentuj utwór poetycki. Czy dyktando jest utworem poetyckim?",
          ua: "Завдання: знайди і презентуй поетичний твір. Чи диктант є поетичним твором?"
        },
        explanation: {
          pl: "Trzeba wiersza (lub piosenki poetyckiej), fragmentu, uzasadnienia prostoty. Dyktando z rz — inna lekcja.",
          ua: "Потрібен вірш, фрагмент, обґрунтування простоти. Диктант — інший урок."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 5 · opowiadanie", ua: "Завд. 5 · оповідання" },
      formula: "s. 40  ·  «Serce choćby na chwilę»",
      visual: vizGh("t18-serce.png", {
        alt: {
          pl: "Dziecko kuca przy ślimaku / zawilcu w trawie — chwila uwagi",
          ua: "Дитина присідає біля слимака / квітки в траві — мить уваги"
        },
        title: { pl: "Slajd · chwila serca", ua: "Слайд · мить серця" },
        prompt: {
          pl: IMG_STYLE + " Kadr poziomy: dziecko w kurtce kuca na leśnej ścieżce, patrzy na ślimaka albo biały zawilec w trawie; w tle jagody i miękkie światło. Spokój, bez buziaków-emotek, bez napisów. Przytnij znak wodny. PNG.",
          ua: "Дитина на стежці дивиться на слимака або квітку. Акварель, без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Napisz opowiadanie pod tytułem «Serce choćby na chwilę». Program: nawiąż do treści utworu (mały świat, uwaga, nie pałac Zeusa). Najpierw plan, potem wzór — nie jedyny tekst.",
        ua: "Напиши оповідання під назвою «Serce choćby na chwilę». Нав’яжи до змісту твору (малий світ, увага). Спочатку план, потім зразок."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Plan: 1) kto i gdzie. 2) co małego zobaczył/zobaczyła. 3) chwila, gdy «serce» zadziałało. 4) co by było bez tej chwili. 8–12 zdań.",
            ua: "План: 1) хто і де. 2) що малого побачив/побачила. 3) мить, коли «серце» спрацювало. 4) що було б без цієї миті. 8–12 речень."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyne opowiadanie",
          text: {
            pl: [
              "Szłam przez park i prawie nadepnęłam na ślimaka. Zatrzymałam się choćby na chwilę.",
              "Pomyślałam o wierszu Twardowskiego: ktoś stwarza i ślimaka, i jagody. Nie potrzebowałam wspaniałej mowy — wystarczyło nie zgnieść.",
              "Gdybym nie miała tej chwili serca, byłby tylko pośpiech. A tak zapamiętałam cień liścia i to, że świat jest też mały."
            ],
            ua: [
              "Йшла через парк і мало не наступила на слимака. Зупинилася хоч на мить.",
              "Згадала вірш Твардовського: хтось творить і слимака, і ягоди. Не потрібна була прекрасна промова — досить було не розчавити.",
              "Без цієї миті серця був би лише поспіх."
            ]
          }
        }
      ],
      task: {
        id: "t18-s08-opowiadanie",
        type: "true-false",
        question: {
          pl: "Czy to opowiadanie może być wyłącznie o walce Zeusa z Cerberem — bez żadnej «chwili serca» i bez nawiązania do Twardowskiego?",
          ua: "Чи це оповідання може бути лише про боротьбу Зевса з Цербером — без жодної «миті серця» і без зв’язку з Твардовським?"
        },
        answer: false,
        hint: {
          pl: "Tytuł i program: nawiązanie do treści utworu. Czy Zeus jest w tym wierszu?",
          ua: "Назва і програма: зв’язок зі змістом твору. Чи Зевс є в цьому вірші?"
        },
        explanation: {
          pl: "Nie. Tytuł i wiersz wymagają chwili uwagi / wrażliwości. Mit z lekcji 14 to inna historia.",
          ua: "Ні. Назва і вірш вимагають миті уваги. Міф з уроку 14 — інша історія."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Prezentacja w klasie", ua: "Презентація в класі" },
      formula: "program  ·  wybrany wiersz",
      promptPlace: "before",
      prompt: {
        pl: "Program: prezentujecie wybrany wiersz zgodnie z kryteriami. Możesz przeczytać Twardowskiego albo utwór z zad. 4. Ktoś pilnuje czasu (max. 2 minuty).",
        ua: "Програма: презентуєте вибраний вірш за критеріями. Можна Твардовського або твір із завд. 4. Хтось пильнує час (макс. 2 хвилини)."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Kolejność na głos: tytuł i autor → 4–8 wersów → jedno zdanie «dlaczego ten utwór / ta końcówka». Klasa nie przerywa recytacji.",
            ua: "Порядок: назва і автор → 4–8 рядків → одне речення «чому цей твір». Клас не перебиває."
          }
        },
        {
          formula: "KRYTERIA  ·  EduMost",
          text: {
            pl: [
              "Słychać wyliczenie albo obraz (nie mamrotanie).",
              "Jest uzasadnienie prostoty albo prośby Twardowskiego — nie samo «bo lubię».",
              "Czas: nie dłużej niż dwie minuty. Zero PYK! i zero pioruna Zeusa «dla żartu»."
            ],
            ua: [
              "Чути перелік або образ (не бурмотіння).",
              "Є обґрунтування простоти або прохання Твардовського — не лише «бо люблю».",
              "Час: не довше ніж дві хвилини."
            ]
          }
        }
      ],
      task: {
        id: "t18-s09-prezentacja",
        type: "single-choice",
        question: {
          pl: "Która prezentacja spełnia kryteria tej lekcji?",
          ua: "Яка презентація виконує критерії цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Tytuł, krótki fragment na głos, zdanie dlaczego to prostsze / związane z «sercem».", ua: "Назва, короткий фрагмент уголос, речення чому це простіше / пов’язане з «серцем»." } },
          { id: "b", label: { pl: "Tylko krzyk «PYK!» i ucieczka z klasy.", ua: "Лише крик «PYK!» і втеча з класу." } },
          { id: "c", label: { pl: "Piętnastominutowy wykład o Olimpie bez żadnego wiersza.", ua: "П’ятнадцятихвилинна лекція про Олімп без жодного вірша." } }
        ],
        answer: "a",
        hint: {
          pl: "Polecenie: utwór poetycki + kryteria. Czy PYK! jest wierszem Twardowskiego?",
          ua: "Завдання: поетичний твір + критерії. Чи PYK! є віршем Твардовського?"
        },
        explanation: {
          pl: "Prezentacja = wiersz + uzasadnienie, krótko. Komiks i mit — inne lekcje.",
          ua: "Презентація = вірш + обґрунтування, коротко."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu z lekcji 17 i 18 razem.",
        ua: "Це забираєш у зошит з уроків 17 і 18 разом."
      },
      items: [
        { pl: "«Serce choćby na chwilę» — przenośnia: wrażliwość / miłość, nawet krótka.", ua: "«Serce choćby na chwilę» — переносний смисл: чуйність / любов, навіть коротка." },
        { pl: "Bez tego serca trudno zauważyć drobny świat (zawilec, ślimak, śnieg).", ua: "Без цього серця важко помітити дрібний світ." },
        { pl: "Prośba: spraw, niech poeci piszą wiersze prostsze od wspaniałej poezji.", ua: "Прохання: вчини, хай поети пишуть вірші простіші за прекрасну поезію." },
        { pl: "Opowiadanie i prezentacja nawiązują do tego wiersza — nie do Olimpu i nie do dyktanda.", ua: "Оповідання і презентація нав’язують до цього вірша — не до Олімпу і не до диктанту." }
      ],
      task: {
        id: "t18-s10-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz lekcję 18?",
          ua: "Яка нотатка показує, що вмієш урок 18?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Przenośnia serca, prośba o prostsze wiersze, opowiadanie «Serce choćby na chwilę», prezentacja z uzasadnieniem.",
              ua: "Переносний смисл серця, прохання простіших віршів, оповідання, презентація з обґрунтуванням."
            }
          },
          { id: "b", label: { pl: "Tylko glosy zawilec i czosnek — i zamykam zeszyt na zawsze.", ua: "Лише глоси zawilec і czosnek — і закриваю зошит назавжди." } },
          { id: "c", label: { pl: "Świat stworzyli olbrzymi i Cerber, a poeci mają milczeć.", ua: "Світ створили велетні і Цербер, а поети мають мовчати." } }
        ],
        answer: "a",
        hint: {
          pl: "Glosy były wczoraj. Co jest na s. 40?",
          ua: "Глоси були вчора. Що на с. 40?"
        },
        explanation: {
          pl: "Lekcja 18 = s. 40: przenośnia, prośba, zad. 4–5. Glosy — 17. Olbrzymi — 14.",
          ua: "Урок 18 = с. 40. Глоси — 17. Велетні — 14."
        }
      }
    }
  ]
};
