function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L31_Rozsiewanie_nasion/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: droga nasiona", ua: "Місія: шлях насінини" },
      visual: vizGh("l31-zacznijmy.png", {
        alt: { pl: "Nasiona w drodze: puch, skrzydełko, haczyki, ptak z owocem", ua: "Насіння в дорозі: пух, крильце, гачки, птах із плодом" },
        title: { pl: "Owoc już jest. Dziś nasiono jedzie dalej.", ua: "Плід уже є. Сьогодні насінина їде далі." },
        prompt: { pl: "Plansza lekcji 31: nasiono w drodze." }
      }),
      text: {
        pl: [
          "To lekcja 31. Na lekcji 30 z kwiatu powstał owoc z nasionami. Dziś nasiono oddala się od rośliny, która je wydała.",
          ["To ", em("rozsiewanie nasion"), ". Zapylenie przenosi pyłek na kwiat. Kiełkowanie zostaje na lekcję 32."],
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 31. На уроці 30 з квітки виник плід із насінням. Сьогодні насінина віддаляється від рослини, яка її видала.",
          ["Це ", em("поширення насіння"), ". Запилення переносить пилок на квітку. Проростання лишається на урок 32."],
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "rozsiewanie", ua: "поширення — насінина їде далі від матері" },
        { pl: "roślina mateczna", ua: "материнська рослина — та, що видала насіння" },
        { pl: "skrzydełko", ua: "крильце — на вітер, наприклад у клена" },
        { pl: "puch", ua: "пух — як парашут у кульбаби" },
        { pl: "haczyki", ua: "гачки — чіпляються до шерсті" },
        { pl: "owoc soczysty", ua: "соковитий плід — тварина з’їдає, насіння їде далі" },
        { pl: "pękający owoc", ua: "плід, що розтріскується — насіння відскакує саме" },
        { pl: "zapylenie", ua: "запилення — пилок на квітку, не насінина" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co ta podróż", ua: "Поняття. Навіщо ця подорож" },
      visual: vizGh("l31-po-co.png", {
        alt: { pl: "Gęsty krzak obok rozsianych siewek w otwartej przestrzeni", ua: "Густий кущ поряд із розсіяними сходами на відкритому місці" },
        title: { pl: "Pod matką jest tłok. Dalej jest miejsce.", ua: "Під матір’ю тиснява. Далі є місце." },
        prompt: { pl: "Plansza lekcji 31: po co nasiono odjeżdża." }
      }),
      text: {
        pl: [
          ["", em("Roślina mateczna"), " to ta, która wydała nasiona. Gdy wszystkie spadną pod nią, młode walczą o światło, wodę i miejsce."],
          "Rozsiew oddala nasiona. Tłoku jest mniej, a gatunek może zająć nowe miejsca. Atlasu wszystkich owoców nie trzeba. Ważny jest sposób podróży."
        ],
        ua: [
          ["", em("Материнська рослина"), " — та, що видала насіння. Коли все впаде під нею, молоді боротимуться за світло, воду і місце."],
          "Поширення віддаляє насіння. Тисняви менше, і вид може зайняти нові місця. Атласу всіх плодів не треба. Важливий спосіб подорожі."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Ciasno i dalej", ua: "Приклад. Тісно і далі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pod rośliną mateczną siewki stoją jedna przy drugiej. Światła i miejsca jest mało."],
            ua: ["Під материнською рослиною сходи стоять один біля одного. Світла і місця мало."]
          }
        },
        {
          text: {
            pl: ["Dalej od matki jest luźniej. Młode nie walczą wszystkie o tę samą wodę."],
            ua: ["Далі від матері вільніше. Молоді не борються всі за ту саму воду."]
          }
        },
        {
          text: {
            pl: ["Pszczoła z pyłkiem tego nie załatwia. Pyłek nie szuka miejsca dla siewki."],
            ua: ["Бджола з пилком цього не вирішує. Пилок не шукає місця для паростка."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co odjeżdża", ua: "Коротке питання. Навіщо від’їжджає" },
      task: {
        id: "l31-g1",
        type: "single-choice",
        question: {
          pl: "Po co nasiona oddalają się od rośliny matecznej?",
          ua: "Навіщо насіння віддаляється від материнської рослини?"
        },
        options: [
          { id: "a", label: { pl: "żeby młode nie walczyły tak mocno o światło, wodę i miejsce", ua: "щоб молоді не боролися так сильно за світло, воду і місце" } },
          { id: "b", label: { pl: "żeby kwiat dostał pyłek", ua: "щоб квітка дістала пилок" } },
          { id: "c", label: { pl: "żeby namoczyć nasiono w słoiku", ua: "щоб намочити насінину в банці" } }
        ],
        answer: "a",
        hint: {
          pl: "Pod matką jest tłok. Dalej jest miejsce.",
          ua: "Під матір’ю тиснява. Далі є місце."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pyłek na kwiecie to zapylenie z lekcji 30. Wróć do rośliny matecznej: nasiono odjeżdża, żeby młode miały światło, wodę i miejsce.",
              ua: "Пилок на квітці — це запилення з уроку 30. Повернися до материнської рослини: насінина від’їжджає, щоб молоді мали світло, воду і місце."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoik z wodą to kiełkowanie, lekcja 32. Tu krok jest wcześniejszy: nasiono odjeżdża od matki, bo pod nią młode walczą o światło, wodę i miejsce.",
              ua: "Банка з водою — це проростання, урок 32. Тут крок раніший: насінина від’їжджає від матері, бо під нею молоді борються за світло, воду і місце."
            }
          }
        ],
        explanation: {
          pl: "Mniej tłoku o światło, wodę i miejsce. Pyłek i słoik to inne lekcje.",
          ua: "Менше тисняви за світло, воду і місце. Пилок і банка — інші уроки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Cień matki", ua: "Типова помилка. Тінь матері" },
      claim: {
        pl: "„Nasiona mają zostać pod matką. W jej cieniu młodym jest najlepiej.”",
        ua: "«Насіння має лишитися під матір’ю. У її тіні молодим найкраще.»"
      },
      text: {
        pl: [
          "Cień nie rozdziela siewek. W tłoku walczą o światło, wodę i miejsce.",
          "Rozsiew właśnie po to oddala nasiona od rośliny matecznej."
        ],
        ua: [
          "Тінь не розсаджує сходи. У тисняві вони борються за світло, воду і місце.",
          "Поширення саме для того віддаляє насіння від материнської рослини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kępa pod jabłonią", ua: "Сам. Купка під яблунею" },
      task: {
        id: "l31-p1",
        type: "single-choice",
        question: {
          pl: "Pod jabłonią siewki stoją ściśnięte, a kawałek dalej łąka jest pusta. Uczeń mówi, że tak ma być: cień jabłoni wystarcza młodym. Co poprawić?",
          ua: "Під яблунею сходи стоять стиснуто, а трохи далі лука порожня. Учень каже, що так і треба: тіні яблуні молодим досить. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "ściśnięte siewki walczą o światło, wodę i miejsce; rozsiew oddala nasiona od jabłoni", ua: "стиснуті сходи борються за світло, воду і місце; поширення віддаляє насіння від яблуні" } },
          { id: "b", label: { pl: "tak — cień matki daje im i światło, i miejsce", ua: "так — тінь матері дає їм і світло, і місце" } },
          { id: "c", label: { pl: "tak — im więcej siewek w jednym miejscu, tym więcej wody dla każdej", ua: "так — що більше сходів в одному місці, то більше води для кожного" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cień nie daje światła ani miejsca. Wróć do tłoku: siewki pod jabłonią walczą o światło, wodę i miejsce, dlatego nasiono odjeżdża.",
              ua: "Тінь не дає світла ані місця. Повернися до тисняви: сходи під яблунею борються за світло, воду і місце, тому насінина від’їжджає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Większy tłok nie dodaje wody. Młode pod rośliną mateczną dzielą światło, wodę i miejsce. Rozsiew je rozdziela.",
              ua: "Більша тиснява не додає води. Молоді під материнською рослиною ділять світло, воду і місце. Поширення їх розсаджує."
            }
          }
        ],
        explanation: {
          pl: "Siewki pod jabłonią są w tłoku. Rozsiew oddala nasiona.",
          ua: "Сходи під яблунею в тисняві. Поширення віддаляє насіння."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wiatr", ua: "Поняття. Вітер" },
      visual: vizGh("l31-wiatr.png", {
        alt: { pl: "Skrzydełko klonu i puch mniszka na wietrze", ua: "Крильце клена і пух кульбаби на вітрі" },
        title: { pl: "Śmigło albo spadochron. Wiatr niesie nasiono.", ua: "Гвинт або парашут. Вітер несе насінину." },
        prompt: { pl: "Plansza lekcji 31: wiatr." }
      }),
      text: {
        pl: [
          ["Wiatr unosi lekkie nasiona. ", em("Skrzydełko"), " klonu kręci się jak śmigło. ", em("Puch"), " mniszka działa jak spadochron."],
          "U zbóż wiatr niesie pyłek do kwiatu. To zapylenie z lekcji 30. Tu wiatr niesie już nasiono dalej od rośliny matecznej."
        ],
        ua: [
          ["Вітер підхоплює легке насіння. ", em("Крильце"), " клена крутиться як гвинт. ", em("Пух"), " кульбаби діє як парашут."],
          "У злаків вітер несе пилок до квітки. Це запилення з уроку 30. Тут вітер несе вже насінину далі від материнської рослини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Klon i mniszek", ua: "Приклад. Клен і кульбаба" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Z klonu spada nasiono ze skrzydełkiem. Kręci się, a wiatr odnosi je dalej."],
            ua: ["З клена падає насінина з крильцем. Крутиться, а вітер відносить її далі."]
          }
        },
        {
          text: {
            pl: ["Mniszek ma puch. Puch działa jak spadochron i też jedzie z wiatrem."],
            ua: ["Кульбаба має пух. Пух діє як парашут і теж їде з вітром."]
          }
        },
        {
          text: {
            pl: ["Pyłek z kłosa leci do kwiatu. Nie szuka miejsca dla nowej rośliny."],
            ua: ["Пилок із колоска летить до квітки. Не шукає місця для нової рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa kształty", ua: "Коротке питання. Дві форми" },
      task: {
        id: "l31-g2",
        type: "single-choice",
        question: {
          pl: "Skrzydełko klonu i puch mniszka poznasz jako rozsiew przez:",
          ua: "Крильце клена і пух кульбаби впізнаєш як поширення:"
        },
        options: [
          { id: "a", label: { pl: "wiatr", ua: "вітром" } },
          { id: "b", label: { pl: "zwierzę, bo puch czepia się sierści", ua: "твариною, бо пух чіпляється до шерсті" } },
          { id: "c", label: { pl: "pszczołę, bo owad siada na mniszku", ua: "бджолою, бо комаха сідає на кульбабу" } }
        ],
        answer: "a",
        hint: {
          pl: "Lekkie nasiono: śmigło albo spadochron.",
          ua: "Легка насінина: гвинт або парашут."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Haczyki trzymają się sierści. Wróć do kształtu na wiatr: skrzydełko kręci się jak śmigło, a puch działa jak spadochron.",
              ua: "Гачки тримаються шерсті. Повернися до форми на вітер: крильце крутиться як гвинт, а пух діє як парашут."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owad na kwiecie może nieść pyłek. To zapylenie. Puch mniszka i skrzydełko klonu niosą już nasiono, a łapie je wiatr.",
              ua: "Комаха на квітці може нести пилок. Це запилення. Пух кульбаби і крильце клена несуть уже насінину, а підхоплює їх вітер."
            }
          }
        ],
        explanation: {
          pl: "Skrzydełko i puch niesie wiatr. To już nasiono, nie pyłek.",
          ua: "Крильце і пух несе вітер. Це вже насінина, не пилок."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Lekkie jak pyłek", ua: "Типова помилка. Легке як пилок" },
      claim: {
        pl: "„Puch mniszka to pyłek zboża, bo jedno i drugie leci z wiatrem.”",
        ua: "«Пух кульбаби — це пилок злаку, бо і те, і те летить із вітром.»"
      },
      text: {
        pl: [
          "Pyłek zboża ląduje na kwiecie. To zapylenie.",
          "Puch niesie nasiono mniszka dalej od rośliny matecznej. Skrzydełko klonu robi to samo dla swojego nasiona."
        ],
        ua: [
          "Пилок злаку сідає на квітку. Це запилення.",
          "Пух несе насінину кульбаби далі від материнської рослини. Крильце клена робить те саме для своєї насінини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Skrzydełko na ścieżce", ua: "Сам. Крильце на стежці" },
      task: {
        id: "l31-p2",
        type: "single-choice",
        question: {
          pl: "Na ścieżce leży nasiono klonu i kręci się, gdy wieje. Uczeń mówi, że skrzydełko przyczepiło się do buta jak łopian, więc nasiono wiozło zwierzę. Co poprawić?",
          ua: "На стежці лежить насінина клена і крутиться, коли віє. Учень каже, що крильце причепилося до черевика як лопух, тож насінину везла тварина. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kręcące się skrzydełko niesie wiatr; haczyki łopianu trzymają się sierści", ua: "крильце, що крутиться, несе вітер; гачки лопуха тримаються шерсті" } },
          { id: "b", label: { pl: "tak — but jest jak sierść, więc każde nasiono na ścieżce jedzie na zwierzęciu", ua: "так — черевик як шерсть, тож кожна насінина на стежці їде на тварині" } },
          { id: "c", label: { pl: "tak — skrzydełko to płatek korony i wabi pszczołę", ua: "так — крильце це пелюстка віночка і вабить бджолу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "But nie łapie nasiona haczykami. Wróć do wiatru: skrzydełko klonu kręci się jak śmigło. Haczyki są u łopianu i trzymają się sierści.",
              ua: "Черевик не ловить насінину гачками. Повернися до вітру: крильце клена крутиться як гвинт. Гачки є в лопуха і тримаються шерсті."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Płatek korony jest częścią kwiatu i często wabi owady. Skrzydełko jest przy nasionie klonu. Wiatr niesie to nasiono.",
              ua: "Пелюстка віночка є частиною квітки і часто вабить комах. Крильце є при насінині клена. Вітер несе цю насінину."
            }
          }
        ],
        explanation: {
          pl: "Skrzydełko klonu niesie wiatr. Haczyki łopianu trzymają się sierści.",
          ua: "Крильце клена несе вітер. Гачки лопуха тримаються шерсті."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Zwierzęta", ua: "Поняття. Тварини" },
      visual: vizGh("l31-zwierzeta.png", {
        alt: { pl: "Haczyki łopianu na sierści i ptak z jagodą", ua: "Гачки лопуха на шерсті і птах із ягодою" },
        title: { pl: "Sierść albo zjedzony owoc. Nasiono jedzie dalej.", ua: "Шерсть або з’їдений плід. Насінина їде далі." },
        prompt: { pl: "Plansza lekcji 31: zwierzęta." }
      }),
      text: {
        pl: [
          ["", em("Haczyki"), " łopianu czepiają się sierści. Zwierzę idzie, a nasiono jedzie z nim."],
          ["", em("Owoc soczysty"), ", na przykład jarzębina albo czereśnia, smakuje ptakom i ssakom. Nasiona wychodzą z odchodami daleko od drzewa."],
          "Pszczoła na płatku przenosi pyłek. To zapylenie. Listy wszystkich jagód dziś nie ma."
        ],
        ua: [
          ["", em("Гачки"), " лопуха чіпляються до шерсті. Тварина йде, а насінина їде з нею."],
          ["", em("Соковитий плід"), ", наприклад горобина чи черешня, смакує птахам і ссавцям. Насіння виходить із послідом далеко від дерева."],
          "Бджола на пелюстці переносить пилок. Це запилення. Списку всіх ягід сьогодні немає."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pies i ptak", ua: "Приклад. Собака і птах" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na sierści psa wiszą owoce łopianu. Haczyki trzymają, pies idzie dalej."],
            ua: ["На шерсті собаки висять плоди лопуха. Гачки тримають, собака йде далі."]
          }
        },
        {
          text: {
            pl: ["Ptak zjada jarzębinę. Nasiona wychodzą z odchodami daleko od drzewa."],
            ua: ["Птах з’їдає горобину. Насіння виходить із послідом далеко від дерева."]
          }
        },
        {
          text: {
            pl: ["Pszczoła na płatku niesie pyłek. Haczyków przy niej nie ma i owocu jeszcze nie zjada."],
            ua: ["Бджола на пелюстці несе пилок. Гачків при ній немає, і плід вона ще не з’їдає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwie jazdy", ua: "Коротке питання. Дві поїздки" },
      task: {
        id: "l31-g3",
        type: "single-choice",
        question: {
          pl: "Który opis to rozsiew przez zwierzęta?",
          ua: "Який опис — це поширення тваринами?"
        },
        options: [
          { id: "a", label: { pl: "haczyki na sierści albo zjedzony owoc, po którym nasiona są daleko od drzewa", ua: "гачки на шерсті або з’їдений плід, після якого насіння далеко від дерева" } },
          { id: "b", label: { pl: "puch mniszka leci nad łąką", ua: "пух кульбаби летить над лукою" } },
          { id: "c", label: { pl: "pszczoła siada na płatku po nektar", ua: "бджола сідає на пелюстку по нектар" } }
        ],
        answer: "a",
        hint: {
          pl: "Albo sierść, albo zjedzony owoc.",
          ua: "Або шерсть, або з’їдений плід."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puch leci sam. To wiatr. Wróć do zwierząt: haczyki trzymają się sierści, a owoc soczysty zostaje zjedzony i nasiona są daleko.",
              ua: "Пух летить сам. Це вітер. Повернися до тварин: гачки тримаються шерсті, а соковитий плід з’їдають і насіння є далеко."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nektar i płatek to zapylenie z lekcji 30. Pszczoła niesie pyłek. Nasiono wiozą haczyki na sierści albo zjedzony owoc.",
              ua: "Нектар і пелюстка — це запилення з уроку 30. Бджола несе пилок. Насінину везуть гачки на шерсті або з’їдений плід."
            }
          }
        ],
        explanation: {
          pl: "Haczyki jadą na sierści. Zjedzony owoc zostawia nasiona daleko od drzewa.",
          ua: "Гачки їдуть на шерсті. З’їдений плід лишає насіння далеко від дерева."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pszczoła wiezie nasiono", ua: "Типова помилка. Бджола везе насінину" },
      claim: {
        pl: "„Pszczoła rozsiewa nasiona, bo lata od kwiatu do kwiatu.”",
        ua: "«Бджола поширює насіння, бо літає від квітки до квітки.»"
      },
      text: {
        pl: [
          "Pszczoła przenosi pyłek na kwiat. To zapylenie.",
          "Zwierzę rozsiewa nasiono inaczej. Haczyki trzymają się sierści, a owoc soczysty zostaje zjedzony i nasiona są daleko od drzewa."
        ],
        ua: [
          "Бджола переносить пилок на квітку. Це запилення.",
          "Тварина поширює насінину інакше. Гачки тримаються шерсті, а соковитий плід з’їдають і насіння є далеко від дерева."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Lis z łąki", ua: "Сам. Лис із луки" },
      task: {
        id: "l31-p3",
        type: "single-choice",
        question: {
          pl: "Lis wraca z łąki, a na sierści ma owoce łopianu z haczykami. Uczeń mówi, że to puch: łopian jest lekki, więc niesie go wiatr, a lis tylko przebiegł obok. Co poprawić?",
          ua: "Лис повертається з луки, а на шерсті має плоди лопуха з гачками. Учень каже, що це пух: лопух легкий, тож його несе вітер, а лис лише пробіг поруч. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "haczyki trzymają się sierści, więc nasiono wiezie lis; puch leci sam na wietrze", ua: "гачки тримаються шерсті, тож насінину везе лис; пух летить сам на вітрі" } },
          { id: "b", label: { pl: "tak — sierść działa jak skrzydełko", ua: "так — шерсть діє як крильце" } },
          { id: "c", label: { pl: "tak — lis pije nektar i zapyla łopian", ua: "так — лис п’є нектар і запилює лопух" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzydełko leci na wietrze bez zwierzęcia. Tu owoc trzyma się sierści lisa haczykami. Zwierzę idzie, nasiono jedzie.",
              ua: "Крильце летить на вітрі без тварини. Тут плід тримається шерсті лиса гачками. Тварина йде, насінина їде."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nektar wabi owady do pyłku. To zapylenie. Lis nie zapyla łopianu. Na jego sierści jadą haczyki.",
              ua: "Нектар вабить комах до пилку. Це запилення. Лис не запилює лопух. На його шерсті їдуть гачки."
            }
          }
        ],
        explanation: {
          pl: "Haczyki na sierści lisa wiozą nasiono. Puch leci sam.",
          ua: "Гачки на шерсті лиса везуть насінину. Пух летить сам."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Woda", ua: "Поняття. Вода" },
      visual: vizGh("l31-woda.png", {
        alt: { pl: "Owoc pływający na wodzie", ua: "Плід пливе по воді" },
        title: { pl: "Pływa. Prąd odsuwa go od matki.", ua: "Пливе. Течія відсуває його від матері." },
        prompt: { pl: "Plansza lekcji 31: woda." }
      }),
      text: {
        pl: [
          ["Niektóre owoce i nasiona ", em("pływają"), ". Woda rzeki, deszczowy spływ albo morze odsuwa je od rośliny matecznej. Szkolny przykład to kokos."],
          "W słoiku z lekcji 32 woda ma namoczyć nasiono, które nigdzie nie płynie. Tu woda jest pojazdem."
        ],
        ua: [
          ["Деякі плоди і насіння ", em("плавають"), ". Вода річки, дощовий стік або море відсуває їх від материнської рослини. Шкільний приклад — кокос."],
          "У банці з уроку 32 вода має намочити насінину, яка нікуди не пливе. Тут вода — транспорт."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kokos i słoik", ua: "Приклад. Кокос і банка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kokos unosi się na wodzie. Prąd odnosi go od rośliny, która go wydała."],
            ua: ["Кокос тримається на воді. Течія відносить його від рослини, яка його видала."]
          }
        },
        {
          text: {
            pl: ["Rzeka albo woda po deszczu robi to samo z owocem, który pływa."],
            ua: ["Річка або вода після дощу робить те саме з плодом, який пливе."]
          }
        },
        {
          text: {
            pl: ["Fasola w słoiku stoi w miejscu. Sama woda jeszcze nie jest podróżą."],
            ua: ["Квасоля в банці стоїть на місці. Сама вода ще не є подорожжю."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co płynie", ua: "Коротке питання. Що пливе" },
      task: {
        id: "l31-g4",
        type: "single-choice",
        question: {
          pl: "Owoc płynie z prądem i oddala się od rośliny matecznej. Jaki to rozsiew?",
          ua: "Плід пливе за течією і віддаляється від материнської рослини. Яке це поширення?"
        },
        options: [
          { id: "a", label: { pl: "przez wodę, bo owoc się unosi i prąd go niesie", ua: "водою, бо плід тримається на воді і течія його несе" } },
          { id: "b", label: { pl: "przez wiatr, bo kokos jest lekki jak puch", ua: "вітром, бо кокос легкий як пух" } },
          { id: "c", label: { pl: "przez kiełkowanie, bo kokos jest mokry", ua: "проростанням, бо кокос мокрий" } }
        ],
        answer: "a",
        hint: {
          pl: "Pływa, a prąd go niesie. Słoik stoi.",
          ua: "Пливе, а течія його несе. Банка стоїть."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puch i skrzydełko łapie powietrze. Kokos unosi się na wodzie, a prąd go odnosi. Wróć do pojazdu: woda.",
              ua: "Пух і крильце ловить повітря. Кокос тримається на воді, а течія його відносить. Повернися до транспорту: вода."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mokre nasiono w słoiku to lekcja 32. Kokos na wodzie jedzie dalej od rośliny matecznej. To rozsiew, a woda jest pojazdem.",
              ua: "Мокра насінина в банці — це урок 32. Кокос на воді їде далі від материнської рослини. Це поширення, а вода — транспорт."
            }
          }
        ],
        explanation: {
          pl: "Owoc, który pływa, niesie woda. Słoik z fasolą stoi w miejscu.",
          ua: "Плід, який пливе, несе вода. Банка з квасолею стоїть на місці."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Mokry kokos", ua: "Типова помилка. Мокрий кокос" },
      claim: {
        pl: "„Kokos w morzu kiełkuje jak fasola w słoiku, bo jest mokry.”",
        ua: "«Кокос у морі проростає як квасоля в банці, бо мокрий.»"
      },
      text: {
        pl: [
          "W słoiku nasiono stoi, a woda służy kiełkowaniu. To lekcja 32.",
          "Kokos pływa. Prąd morza, rzeki albo wody po deszczu odsuwa go od rośliny matecznej."
        ],
        ua: [
          "У банці насінина стоїть, а вода служить проростанню. Це урок 32.",
          "Кокос пливе. Течія моря, річки або води після дощу відсуває його від материнської рослини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Owoc w rowie", ua: "Сам. Плід у рівчаку" },
      task: {
        id: "l31-p4",
        type: "single-choice",
        question: {
          pl: "Po deszczu owoc płynie rowem daleko od rośliny. Uczeń mówi, że to haczyki, bo rów jest przy ścieżce i chodzą tamtędy psy. Co poprawić?",
          ua: "Після дощу плід пливе рівчаком далеко від рослини. Учень каже, що це гачки, бо рівчак біля стежки і там ходять собаки. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "owoc płynie, więc niesie go woda; haczyki czepiają się sierści, a w rowie zwierzęcia nie ma", ua: "плід пливе, тож його несе вода; гачки чіпляються до шерсті, а в рівчаку тварини немає" } },
          { id: "b", label: { pl: "tak — każdy owoc przy ścieżce jedzie na psie", ua: "так — кожен плід біля стежки їде на собаці" } },
          { id: "c", label: { pl: "tak — woda w rowie namacza owoc jak fasolę w słoiku", ua: "так — вода в рівчаку намочує плід як квасолю в банці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ścieżka sama nie przyczepia haczyków. Owoc w rowie płynie. Wróć do wody: prąd odsuwa od matki to, co się unosi.",
              ua: "Стежка сама не чіпляє гачків. Плід у рівчаку пливе. Повернися до води: течія відсуває від матері те, що тримається на воді."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoik stoi, a woda ma namoczyć fasolę do kiełkowania. To lekcja 32. Tu owoc jedzie rowem dalej od rośliny. Woda jest pojazdem.",
              ua: "Банка стоїть, а вода має намочити квасолю для проростання. Це урок 32. Тут плід їде рівчаком далі від рослини. Вода — транспорт."
            }
          }
        ],
        explanation: {
          pl: "Płynący rów niesie owoc wodą. Haczyki i słoik to inne kroki.",
          ua: "Рівчак, що тече, несе плід водою. Гачки і банка — інші кроки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Sam pęka", ua: "Поняття. Сам тріскає" },
      visual: vizGh("l31-samodzielnie.png", {
        alt: { pl: "Strąk pęka i wyrzuca nasiona", ua: "Стручок тріскає і викидає насіння" },
        title: { pl: "Owoc sam wyrzuca nasiona.", ua: "Плід сам викидає насіння." },
        prompt: { pl: "Plansza lekcji 31: rozsiew samodzielny." }
      }),
      text: {
        pl: [
          ["Niektóre owoce ", em("pękają"), " i same wyrzucają nasiona. Tak robi strąk grochu i niecierpek. To rozsiew ", em("samodzielny"), ": bez wiatru, bez wody i bez zwierzęcia."],
          "Z puszki mchu wylatują zarodniki. Mech nie ma nasion ani owocu. Tu pęka owoc rośliny okrytonasiennej."
        ],
        ua: [
          ["Деякі плоди ", em("розтріскуються"), " і самі викидають насіння. Так робить стручок гороху і недоторка. Це ", em("самостійне"), " поширення: без вітру, без води і без тварини."],
          "З коробочки моху вилітають спори. Мох не має насіння ані плоду. Тут тріскає плід покритонасінної рослини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Groch i mech", ua: "Приклад. Горох і мох" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Suchy strąk grochu pęka. Nasiona odskakują od rośliny."],
            ua: ["Сухий стручок гороху тріскає. Насіння відскакує від рослини."]
          }
        },
        {
          text: {
            pl: ["Niecierpek też pęka sam. Wiatr, rzeka i lis nie są mu do tego potrzebne."],
            ua: ["Недоторка теж тріскає сама. Вітер, річка і лис їй для цього не потрібні."]
          }
        },
        {
          text: {
            pl: ["Puszka mchu wypuszcza zarodniki. To nie nasiona grochu."],
            ua: ["Коробочка моху випускає спори. Це не насіння гороху."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto wyrzuca", ua: "Коротке питання. Хто викидає" },
      task: {
        id: "l31-g5",
        type: "single-choice",
        question: {
          pl: "Pękający strąk sam wyrzuca nasiona. Jaki to rozsiew?",
          ua: "Стручок, що тріскає, сам викидає насіння. Яке це поширення?"
        },
        options: [
          { id: "a", label: { pl: "samodzielny", ua: "самостійне" } },
          { id: "b", label: { pl: "przez wiatr, bo nasiona chwilę lecą", ua: "вітром, бо насіння мить летить" } },
          { id: "c", label: { pl: "przez mech, bo z puszki też coś wylatuje", ua: "мохом, бо з коробочки теж щось вилітає" } }
        ],
        answer: "a",
        hint: {
          pl: "Owoc sam pęka. Nikt nasiona nie wiezie.",
          ua: "Плід сам тріскає. Ніхто насінину не везе."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lot na wietrze ma skrzydełko albo puch. Tu owoc sam wyrzuca nasiona. Wróć do pękania: wiatru do tego nie trzeba.",
              ua: "Політ на вітрі має крильце або пух. Тут плід сам викидає насіння. Повернися до розтріскування: вітру для цього не треба."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu daje zarodniki, a mech nie ma nasion. Strąk grochu jest owocem i sam wyrzuca nasiona. To rozsiew samodzielny.",
              ua: "Коробочка моху дає спори, а мох не має насіння. Стручок гороху є плодом і сам викидає насіння. Це самостійне поширення."
            }
          }
        ],
        explanation: {
          pl: "Strąk sam pęka i wyrzuca nasiona. Wiatr, woda i zwierzę nie są potrzebne.",
          ua: "Стручок сам тріскає і викидає насіння. Вітер, вода і тварина не потрібні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Puszka i strąk", ua: "Типова помилка. Коробочка і стручок" },
      claim: {
        pl: "„Pękający strąk to puszka mchu, bo z obu coś wylatuje.”",
        ua: "«Стручок, що тріскає, — це коробочка моху, бо з обох щось вилітає.»"
      },
      text: {
        pl: [
          "Z puszki mchu wylatują zarodniki. Mech nie ma owocu ani nasion.",
          "Strąk jest owocem. Pęka i wyrzuca nasiona. To rozsiew samodzielny."
        ],
        ua: [
          "З коробочки моху вилітають спори. Мох не має плоду ані насіння.",
          "Стручок є плодом. Тріскає і викидає насіння. Це самостійне поширення."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Niecierpek na rabacie", ua: "Сам. Недоторка на грядці" },
      task: {
        id: "l31-p5",
        type: "single-choice",
        question: {
          pl: "Owoc niecierpka pęka na rabacie i nasiona odskakują na ziemię obok. Uczeń mówi, że to woda, bo rano padało, a nasiona są wilgotne. Co poprawić?",
          ua: "Плід недоторки тріскає на грядці і насіння відскакує на землю поруч. Учень каже, що це вода, бо вранці падав дощ, а насіння вологе. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "owoc sam wyrzucił nasiona, więc to rozsiew samodzielny; woda niesie to, co pływa", ua: "плід сам викинув насіння, тож це самостійне поширення; вода несе те, що пливе" } },
          { id: "b", label: { pl: "tak — deszcz zamienia każde pęknięcie w podróż kokosa", ua: "так — дощ перетворює кожне розтріскування на подорож кокоса" } },
          { id: "c", label: { pl: "tak — skoro nasiona leżą dalej niż łodyga, przyczepił je lis", ua: "так — якщо насіння лежить далі за стебло, його причепив лис" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kokos pływa, a prąd go niesie. Niecierpek sam pęka i wyrzuca nasiona. Sam deszcz ich nie wiezie, jeśli nie płyną.",
              ua: "Кокос пливе, а течія його несе. Недоторка сама тріскає і викидає насіння. Сам дощ їх не везе, якщо вони не пливуть."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Lis wozi haczyki na sierści. Tu owoc niecierpka pękł sam i nasiona odskoczyły. Zwierzęcia przy tym nie ma.",
              ua: "Лис возить гачки на шерсті. Тут плід недоторки тріснув сам і насіння відскочило. Тварини при цьому немає."
            }
          }
        ],
        explanation: {
          pl: "Niecierpek sam wyrzuca nasiona. Deszcz i lis to inne drogi.",
          ua: "Недоторка сама викидає насіння. Дощ і лис — інші шляхи."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Kępa na łące", ua: "Перевірка 1. Купка на луці" },
      task: {
        id: "l31-t1",
        type: "single-choice",
        question: {
          pl: "Na łące pod jedną wysoką rośliną siewki stoją w gęstej kępie. Uczeń mówi, że rozsiew jest po to, by sprawdzić kiełkowanie w słoiku. Co pasuje do lekcji?",
          ua: "На луці під однією високою рослиною сходи стоять густою купкою. Учень каже, що поширення для того, щоб перевірити проростання в банці. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "gęsta kępa to tłok o światło, wodę i miejsce; słoik z kiełkowaniem jest na lekcji 32", ua: "густа купка — це тиснява за світло, воду і місце; банка з проростанням є на уроці 32" } },
          { id: "b", label: { pl: "tak — im gęściej pod matką, tym więcej światła dla każdej siewki", ua: "так — що густіше під матір’ю, то більше світла для кожного паростка" } },
          { id: "c", label: { pl: "tak — celem podróży jest pyłek na znamieniu", ua: "так — мета подорожі це пилок на приймочці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gęstsza kępa nie dodaje światła. Wróć do rośliny matecznej: młode w tłoku walczą o światło, wodę i miejsce, dlatego nasiono odjeżdża.",
              ua: "Густіша купка не додає світла. Повернися до материнської рослини: молоді в тисняві борються за світло, воду і місце, тому насінина від’їжджає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek na znamieniu to zapylenie z lekcji 30. Rozsiew oddala nasiono od rośliny, która je wydała, żeby było mniej tłoku.",
              ua: "Пилок на приймочці — це запилення з уроку 30. Поширення віддаляє насінину від рослини, яка її видала, щоб було менше тисняви."
            }
          }
        ],
        explanation: {
          pl: "Gęsta kępa to tłok. Rozsiew oddala nasiona. Słoik to lekcja 32.",
          ua: "Густа купка — це тиснява. Поширення віддаляє насіння. Банка — це урок 32."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Puch na dłoni", ua: "Перевірка 2. Пух на долоні" },
      task: {
        id: "l31-t2",
        type: "single-choice",
        question: {
          pl: "Na dłoni został puch mniszka. Uczeń mówi, że to zarodniki z puszki mchu, bo są lekkie i było je widać w powietrzu. Co pasuje do lekcji?",
          ua: "На долоні лишився пух кульбаби. Учень каже, що це спори з коробочки моху, бо вони легкі і їх було видно в повітрі. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "puch niesie nasiono mniszka na wietrze; z puszki mchu wylatują zarodniki, a mech nie ma nasion", ua: "пух несе насінину кульбаби на вітрі; з коробочки моху вилітають спори, а мох не має насіння" } },
          { id: "b", label: { pl: "tak — każdy lekki lot to zarodnik mchu", ua: "так — кожен легкий політ це спора моху" } },
          { id: "c", label: { pl: "tak — puch to haczyk, bo został na dłoni", ua: "так — пух це гачок, бо лишився на долоні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Z puszki mchu wylatują zarodniki, a mech nie ma nasion. Puch mniszka niesie nasiono. Wróć do wiatru: puch działa jak spadochron.",
              ua: "З коробочки моху вилітають спори, а мох не має насіння. Пух кульбаби несе насінину. Повернися до вітру: пух діє як парашут."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Haczyki łopianu czepiają się sierści. Puch, który został na dłoni, i tak jest spadochronem nasiona mniszka. Niesie go wiatr.",
              ua: "Гачки лопуха чіпляються до шерсті. Пух, що лишився на долоні, все одно є парашутом насінини кульбаби. Його несе вітер."
            }
          }
        ],
        explanation: {
          pl: "Puch niesie nasiono mniszka na wietrze. Zarodniki mchu to nie nasiona.",
          ua: "Пух несе насінину кульбаби на вітрі. Спори моху — це не насіння."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Ptak i czereśnie", ua: "Перевірка 3. Птах і черешні" },
      task: {
        id: "l31-t3",
        type: "single-choice",
        question: {
          pl: "Ptak zjada czereśnie, a nasiona są potem daleko od drzewa. Uczeń mówi, że owoc sam pękł, bo nasiona nie zostały na gałęzi. Co pasuje do lekcji?",
          ua: "Птах з’їдає черешні, а насіння потім далеко від дерева. Учень каже, що плід сам тріснув, бо насіння не лишилося на гілці. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "zjedzona czereśnia to owoc soczysty, więc nasiono wiezie zwierzę; samodzielnie owoc sam wyrzuca nasiona", ua: "з’їдена черешня — це соковитий плід, тож насінину везе тварина; самостійно плід сам викидає насіння" } },
          { id: "b", label: { pl: "tak — ptak tylko zapyla czereśnię, a nasiono zostaje na gałęzi", ua: "так — птах лише запилює черешню, а насінина лишається на гілці" } },
          { id: "c", label: { pl: "tak — czereśnia ma skrzydełko, więc nasiono zabrał wiatr", ua: "так — черешня має крильце, тож насінину забрав вітер" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapylenie niesie pyłek na kwiat. Tu ptak zjada owoc soczysty, a nasiona są daleko od drzewa. To rozsiew przez zwierzę.",
              ua: "Запилення несе пилок на квітку. Тут птах з’їдає соковитий плід, а насіння далеко від дерева. Це поширення твариною."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrzydełko ma nasiono klonu i niesie je wiatr. Czereśnię zjada ptak. Nasiona są potem daleko od drzewa, bo owoc był soczysty.",
              ua: "Крильце має насінина клена, і її несе вітер. Черешню з’їдає птах. Насіння потім далеко від дерева, бо плід був соковитий."
            }
          }
        ],
        explanation: {
          pl: "Zjedzony owoc soczysty to rozsiew przez zwierzę. Owoc, który sam pęka, wyrzuca nasiona bez ptaka.",
          ua: "З’їдений соковитий плід — це поширення твариною. Плід, що сам тріскає, викидає насіння без птаха."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Kokos na brzegu", ua: "Перевірка 4. Кокос на березі" },
      task: {
        id: "l31-t4",
        type: "single-choice",
        question: {
          pl: "Na brzegu morza leży kokos. Uczeń mówi, że przypłynął na skrzydełku, bo jest daleko od rośliny. Co pasuje do lekcji?",
          ua: "На березі моря лежить кокос. Учень каже, що він приплив на крильці, бо далеко від рослини. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "kokos pływa, więc odsunęła go woda; skrzydełko kręci się w powietrzu", ua: "кокос пливе, тож його відсунула вода; крильце крутиться в повітрі" } },
          { id: "b", label: { pl: "tak — wszystko, co leży daleko, miało skrzydełko", ua: "так — усе, що лежить далеко, мало крильце" } },
          { id: "c", label: { pl: "tak — kokos pękł jak strąk i dlatego leży na piasku", ua: "так — кокос тріснув як стручок і тому лежить на піску" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzydełko kręci się w powietrzu jak śmigło. Kokos unosi się na wodzie. Wróć do pojazdu: prąd morza odsunął go od rośliny matecznej.",
              ua: "Крильце крутиться в повітрі як гвинт. Кокос тримається на воді. Повернися до транспорту: течія моря відсунула його від материнської рослини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Strąk sam pęka i wyrzuca nasiona na miejscu. Kokos pływa. Na brzegu leży, bo niosła go woda, nie dlatego, że owoc pękł.",
              ua: "Стручок сам тріскає і викидає насіння на місці. Кокос пливе. На березі він лежить, бо його несла вода, не тому, що плід тріснув."
            }
          }
        ],
        explanation: {
          pl: "Kokos pływa, więc niesie go woda. Skrzydełko jest na wiatr.",
          ua: "Кокос пливе, тож його несе вода. Крильце — на вітер."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Mokry strąk", ua: "Перевірка 5. Мокрий стручок" },
      task: {
        id: "l31-t5",
        type: "single-choice",
        question: {
          pl: "Na grządce pęka strąk grochu i nasiona odskakują. Uczeń mówi, że groch rozsiewa się jak kokos, bo strąk jest mokry od deszczu. Co pasuje do lekcji?",
          ua: "На грядці тріскає стручок гороху і насіння відскакує. Учень каже, що горох поширюється як кокос, бо стручок мокрий від дощу. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "mokry strąk, który sam pęka i wyrzuca nasiona, to rozsiew samodzielny; kokos pływa", ua: "мокрий стручок, що сам тріскає і викидає насіння, — це самостійне поширення; кокос пливе" } },
          { id: "b", label: { pl: "tak — każde mokre nasiono jest kokosem na fali", ua: "так — кожна мокра насінина є кокосом на хвилі" } },
          { id: "c", label: { pl: "tak — pęknięcie wypuszcza pyłek z pręcików", ua: "так — розтріскування випускає пилок із тичинок" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kokos pływa i niesie go woda. Strąk grochu sam pęka i wyrzuca nasiona. Sama wilgoć nie zamienia go w podróż po morzu.",
              ua: "Кокос пливе, і його несе вода. Стручок гороху сам тріскає і викидає насіння. Сама волога не перетворює його на подорож морем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek wypuszczają pręciki. To zapylenie z lekcji 30. Pękający strąk jest owocem i sam wyrzuca nasiona. To rozsiew samodzielny.",
              ua: "Пилок випускають тичинки. Це запилення з уроку 30. Стручок, що тріскає, є плодом і сам викидає насіння. Це самостійне поширення."
            }
          }
        ],
        explanation: {
          pl: "Strąk, który sam pęka, rozsiewa nasiona samodzielnie. Kokos pływa.",
          ua: "Стручок, що сам тріскає, поширює насіння самостійно. Кокос пливе."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l31-zacznijmy.png", {
        alt: { pl: "Nasiona w drodze: puch, skrzydełko, haczyki, ptak z owocem", ua: "Насіння в дорозі: пух, крильце, гачки, птах із плодом" },
        title: { pl: "Puch, skrzydełko, haczyki i ptak.", ua: "Пух, крильце, гачки і птах." },
        prompt: { pl: "Ta sama plansza początku: drogi nasiona." }
      }),
      text: {
        pl: [
          "Nasiona oddalają się od rośliny matecznej, żeby młode nie walczyły o światło, wodę i miejsce.",
          "Wiatr niesie skrzydełko i puch. To już nasiono, nie pyłek do kwiatu.",
          "Zwierzę wiezie nasiono na haczykach albo w zjedzonym owocu soczystym.",
          "Woda niesie to, co pływa. Samodzielnie owoc pęka i sam wyrzuca nasiona."
        ],
        ua: [
          "Насіння віддаляється від материнської рослини, щоб молоді не боролися за світло, воду і місце.",
          "Вітер несе крильце і пух. Це вже насінина, не пилок до квітки.",
          "Тварина везе насінину на гачках або в з’їденому соковитому плоді.",
          "Вода несе те, що пливе. Самостійно плід тріскає і сам викидає насіння."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, po co nasiona oddalają się od rośliny matecznej.", ua: "Поясню, навіщо насіння віддаляється від материнської рослини." },
        { pl: "Rozpoznam rozsiew przez wiatr: skrzydełko i puch.", ua: "Впізнаю поширення вітром: крильце і пух." },
        { pl: "Rozpoznam rozsiew przez zwierzęta: haczyki albo zjedzony owoc.", ua: "Впізнаю поширення тваринами: гачки або з’їдений плід." },
        { pl: "Rozpoznam rozsiew przez wodę.", ua: "Впізнаю поширення водою." },
        { pl: "Rozpoznam rozsiew samodzielny: pękający owoc.", ua: "Впізнаю самостійне поширення: плід, що розтріскується." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
