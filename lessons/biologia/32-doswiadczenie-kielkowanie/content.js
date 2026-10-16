function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L32_Doswiadczenie_kielkowanie/images/";

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
      heading: { pl: "Misja: kiełek z nasiona", ua: "Місія: проросток із насінини" },
      visual: vizGh("l32-zacznijmy.png", {
        alt: { pl: "Fasola w słoiku z wilgotną bibułą, widać kiełek", ua: "Квасоля в банці з вологим папером, видно проросток" },
        title: { pl: "Nasiono już dojechało. Dziś może zacząć rosnąć.", ua: "Насінина вже доїхала. Сьогодні може почати рости." },
        prompt: { pl: "Plansza lekcji 32: kiełkowanie." }
      }),
      text: {
        pl: [
          "To lekcja 32. Na lekcji 31 nasiono odjechało od rośliny matecznej. Dziś pytanie: co się dzieje, gdy z nasiona wychodzi kiełek?",
          ["To ", em("doświadczenie"), ", jak na lekcji 2 i 10. Jedno pytanie, jeden czynnik, próba kontrolna, wniosek."],
          "Drzewa liściaste są na lekcji 33. W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 32. На уроці 31 насінина від’їхала від материнської рослини. Сьогодні питання: що діється, коли з насінини виходить проросток?",
          ["Це ", em("дослід"), ", як на уроках 2 і 10. Одне питання, один чинник, контрольна проба, висновок."],
          "Листяні дерева є на уроці 33. У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "kiełkowanie", ua: "проростання — старт росту з насінини" },
        { pl: "kiełek", ua: "проросток — виходить із насінини, часто спочатку корінець" },
        { pl: "problem badawczy", ua: "дослідницька проблема — питання" },
        { pl: "hipoteza", ua: "гіпотеза — припущення для перевірки" },
        { pl: "czynnik", ua: "чинник — вода, температура або світло; в одному досліді один" },
        { pl: "próba badawcza", ua: "дослідна проба — чинник у ній є" },
        { pl: "próba kontrolna", ua: "контрольна проба — для порівняння" },
        { pl: "wniosek", ua: "висновок — відповідь на проблему після результату" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kiełkowanie", ua: "Поняття. Проростання" },
      visual: vizGh("l32-kielkowanie.png", {
        alt: { pl: "Suche nasiono fasoli i to samo nasiono z kiełkiem", ua: "Суха насінина квасолі і та сама насінина з проростком" },
        title: { pl: "Osłona pęka. Wychodzi kiełek.", ua: "Оболонка тріскає. Виходить проросток." },
        prompt: { pl: "Plansza lekcji 32: od nasiona do kiełka." }
      }),
      text: {
        pl: [
          ["", em("Kiełkowanie"), " to start wzrostu z nasiona. Pęka osłona i wychodzi ", em("kiełek"), ". Często najpierw widać korzonek."],
          "W nasionie jest zapas pokarmu na pierwsze dni. Rozsiew z lekcji 31 już się odbył. Zapylenie przenosi pyłek na kwiat."
        ],
        ua: [
          ["", em("Проростання"), " — це старт росту з насінини. Тріскає оболонка і виходить ", em("проросток"), ". Часто спочатку видно корінець."],
          "У насінині є запас поживи на перші дні. Поширення з уроку 31 уже відбулося. Запилення переносить пилок на квітку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Sucha fasola i kiełek", ua: "Приклад. Суха квасоля і проросток" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Suche nasiono fasoli leży w całości. Osłona jest zamknięta."],
            ua: ["Суха насінина квасолі лежить ціла. Оболонка закрита."]
          }
        },
        {
          text: {
            pl: ["To samo nasiono pęka. Wychodzi biały kiełek, często najpierw korzonek."],
            ua: ["Та сама насінина тріскає. Виходить білий проросток, часто спочатку корінець."]
          }
        },
        {
          text: {
            pl: ["To już kiełkowanie. Puch niesie całe nasiono, a pyłek jedzie na kwiat."],
            ua: ["Це вже проростання. Пух несе цілу насінину, а пилок їде на квітку."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co wychodzi", ua: "Коротке питання. Що виходить" },
      task: {
        id: "l32-g1",
        type: "single-choice",
        question: {
          pl: "Czym jest kiełkowanie?",
          ua: "Що таке проростання?"
        },
        options: [
          { id: "a", label: { pl: "start wzrostu z nasiona: pęka osłona i wychodzi kiełek", ua: "старт росту з насінини: тріскає оболонка і виходить проросток" } },
          { id: "b", label: { pl: "lot nasiona na puchu albo na skrzydełku", ua: "політ насінини на пуху або на крильці" } },
          { id: "c", label: { pl: "przeniesienie pyłku z pręcika na znamię", ua: "перенесення пилку з тичинки на приймочку" } }
        ],
        answer: "a",
        hint: {
          pl: "Z nasiona wychodzi kiełek. Często najpierw korzonek.",
          ua: "З насінини виходить проросток. Часто спочатку корінець."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puch i skrzydełko wiozą nasiono dalej od matki. To rozsiew z lekcji 31. Wróć do kiełkowania: osłona pęka i wychodzi kiełek.",
              ua: "Пух і крильце везуть насінину далі від матері. Це поширення з уроку 31. Повернися до проростання: оболонка тріскає і виходить проросток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek na znamieniu to zapylenie z lekcji 30. Kiełkowanie zaczyna się w nasionie: wychodzi kiełek.",
              ua: "Пилок на приймочці — це запилення з уроку 30. Проростання починається в насінині: виходить проросток."
            }
          }
        ],
        explanation: {
          pl: "Kiełkowanie to start wzrostu z nasiona. Wychodzi kiełek.",
          ua: "Проростання — це старт росту з насінини. Виходить проросток."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kiełek to podróż", ua: "Типова помилка. Проросток — це подорож" },
      claim: {
        pl: "„Kiełkowanie to lot nasiona, bo młoda roślina właśnie wtedy startuje.”",
        ua: "«Проростання — це політ насінини, бо молода рослина саме тоді стартує.»"
      },
      text: {
        pl: [
          "Lot na wietrze albo na zwierzęciu to rozsiew. Nasiono jest wtedy jeszcze całe.",
          "Kiełkowanie zaczyna się później. Osłona pęka i wychodzi kiełek."
        ],
        ua: [
          "Політ на вітрі або на тварині — це поширення. Насінина тоді ще ціла.",
          "Проростання починається пізніше. Оболонка тріскає і виходить проросток."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Korzonek grochu", ua: "Сам. Корінець гороху" },
      task: {
        id: "l32-p1",
        type: "single-choice",
        question: {
          pl: "Z nasiona grochu wychodzi biały korzonek. Uczeń mówi, że to haczyk łopianu, bo coś wystaje i może się zaczepić. Co poprawić?",
          ua: "З насінини гороху виходить білий корінець. Учень каже, що це гачок лопуха, бо щось стирчить і може зачепитися. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "biały korzonek to kiełek: nasiono grochu zaczyna rosnąć; haczyk czepia się sierści", ua: "білий корінець — це проросток: насінина гороху починає рости; гачок чіпляється до шерсті" } },
          { id: "b", label: { pl: "tak — każdy wystający kawałek nasiona jest haczykiem", ua: "так — кожен шматок, що стирчить із насінини, є гачком" } },
          { id: "c", label: { pl: "tak — korzonek to pyłek, bo jest jasny", ua: "так — корінець це пилок, бо світлий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Haczyki łopianu czepiają się sierści i wiozą nasiono. To lekcja 31. Biały korzonek grochu jest kiełkiem: osłona pękła i wzrost się zaczął.",
              ua: "Гачки лопуха чіпляються до шерсті і везуть насінину. Це урок 31. Білий корінець гороху є проростком: оболонка тріснула і ріст почався."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek jest na pręciku i jedzie na znamię. Jasny korzonek wychodzi z nasiona. To kiełkowanie, często od korzonka.",
              ua: "Пилок є на тичинці і їде на приймочку. Світлий корінець виходить із насінини. Це проростання, часто з корінця."
            }
          }
        ],
        explanation: {
          pl: "Korzonek grochu to kiełek. Nasiono zaczyna rosnąć.",
          ua: "Корінець гороху — це проросток. Насінина починає рости."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Problem i hipoteza", ua: "Поняття. Проблема і гіпотеза" },
      visual: vizGh("l32-hipoteza.png", {
        alt: { pl: "Na tablicy pytanie o wodę i hipoteza", ua: "На дошці питання про воду і гіпотеза" },
        title: { pl: "Najpierw pytanie. Potem przypuszczenie.", ua: "Спочатку питання. Потім припущення." },
        prompt: { pl: "Plansza lekcji 32: problem i hipoteza." }
      }),
      text: {
        pl: [
          ["", em("Problem badawczy"), " to pytanie. Na lekcji: czy do kiełkowania fasoli potrzebna jest woda?"],
          ["", em("Hipoteza"), " to przypuszczenie do sprawdzenia. Na lekcji: fasola kiełkuje, gdy bibuła jest wilgotna."],
          "Hipoteza czeka na wynik. Zdanie pewne przed otwarciem słoików jest już wnioskiem, a na niego za wcześnie. Temperaturę albo światło wolno wybrać zamiast wody. Wtedy pytanie jest o twoją kartę."
        ],
        ua: [
          ["", em("Дослідницька проблема"), " — це питання. На уроці: чи для проростання квасолі потрібна вода?"],
          ["", em("Гіпотеза"), " — це припущення для перевірки. На уроці: квасоля проростає, коли папір вологий."],
          "Гіпотеза чекає на результат. Певне речення до відкриття банок уже є висновком, а для нього рано. Температуру або світло можна вибрати замість води. Тоді питання про твою картку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa zdania o wodzie", ua: "Приклад. Два речення про воду" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pytanie: czy do kiełkowania fasoli potrzebna jest woda? To problem badawczy."],
            ua: ["Питання: чи для проростання квасолі потрібна вода? Це дослідницька проблема."]
          }
        },
        {
          text: {
            pl: ["Przypuszczenie: fasola kiełkuje, gdy bibuła jest wilgotna. To hipoteza. Jeszcze jej nie ogłaszasz jako pewnik."],
            ua: ["Припущення: квасоля проростає, коли папір вологий. Це гіпотеза. Ще не оголошуєш її як певність."]
          }
        },
        {
          text: {
            pl: ["«Woda na pewno jest potrzebna» przed spojrzeniem w słoiki to już wniosek. Na niego jest czas po wyniku."],
            ua: ["«Вода напевно потрібна» до погляду в банки — це вже висновок. Для нього час після результату."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pytanie i przypuszczenie", ua: "Коротке питання. Питання і припущення" },
      task: {
        id: "l32-g2",
        type: "single-choice",
        question: {
          pl: "Która para pasuje do doświadczenia?",
          ua: "Яка пара пасує до досліду?"
        },
        options: [
          { id: "a", label: { pl: "problem to pytanie; hipoteza to przypuszczenie do sprawdzenia", ua: "проблема — це питання; гіпотеза — це припущення для перевірки" } },
          { id: "b", label: { pl: "hipoteza to pewny wniosek zapisany przed doświadczeniem", ua: "гіпотеза — це певний висновок, записаний перед дослідом" } },
          { id: "c", label: { pl: "problem to nazwa skrzydełka klonu", ua: "проблема — це назва крильця клена" } }
        ],
        answer: "a",
        hint: {
          pl: "Pytanie ma znak zapytania. Hipoteza jest zdaniem do sprawdzenia.",
          ua: "Питання має знак питання. Гіпотеза є реченням для перевірки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wniosek piszesz po wyniku. Hipoteza jest wcześniej i jest przypuszczeniem. Wróć do pary: problem pyta, hipoteza czeka na sprawdzenie.",
              ua: "Висновок пишеш після результату. Гіпотеза є раніше і є припущенням. Повернися до пари: проблема питає, гіпотеза чекає на перевірку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrzydełko klonu niesie nasiono na wietrze. To lekcja 31. Problem badawczy tego doświadczenia jest pytaniem, na lekcji o wodzie.",
              ua: "Крильце клена несе насінину на вітрі. Це урок 31. Дослідницька проблема цього досліду є питанням, на уроці про воду."
            }
          }
        ],
        explanation: {
          pl: "Problem pyta. Hipoteza jest przypuszczeniem do sprawdzenia.",
          ua: "Проблема питає. Гіпотеза є припущенням для перевірки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pewnik na starcie", ua: "Типова помилка. Певність на старті" },
      claim: {
        pl: "„Hipoteza jest pewna od razu. Słoiki tylko ją potwierdzają.”",
        ua: "«Гіпотеза певна одразу. Банки лише її підтверджують.»"
      },
      text: {
        pl: [
          "Hipoteza jest przypuszczeniem. Wynik może do niej pasować albo nie.",
          "Zdanie pewne zapisujesz jako wniosek, gdy już widzisz, co wyszło w słoikach."
        ],
        ua: [
          "Гіпотеза є припущенням. Результат може їй пасувати або ні.",
          "Певне речення записуєш як висновок, коли вже бачиш, що вийшло в банках."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Karta temperatury", ua: "Сам. Картка температури" },
      task: {
        id: "l32-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń wybiera temperaturę i pisze: «Fasola w pokoju kiełkuje» jako problem, a «Czy temperatura zmienia kiełkowanie?» jako hipotezę. Co poprawić?",
          ua: "Учень вибирає температуру і пише: «Квасоля в кімнаті проростає» як проблему, а «Чи температура змінює проростання?» як гіпотезу. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "problem to pytanie o temperaturę; hipoteza to przypuszczenie, że w pokoju fasola kiełkuje", ua: "проблема — це питання про температуру; гіпотеза — це припущення, що в кімнаті квасоля проростає" } },
          { id: "b", label: { pl: "tak — krótsze zdanie jest zawsze problemem", ua: "так — коротше речення завжди є проблемою" } },
          { id: "c", label: { pl: "tak — hipoteza musi być pytaniem o nazwę drzewa", ua: "так — гіпотеза має бути питанням про назву дерева" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Długość zdania nic nie rozstrzyga. Wróć do pary: problem jest pytaniem, hipoteza jest przypuszczeniem do sprawdzenia.",
              ua: "Довжина речення нічого не вирішує. Повернися до пари: проблема є питанням, гіпотеза є припущенням для перевірки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nazwy drzew są na lekcji 33. Tu hipoteza jest przypuszczeniem o kiełkowaniu. Pytanie o temperaturę jest problemem badawczym.",
              ua: "Назви дерев є на уроці 33. Тут гіпотеза є припущенням про проростання. Питання про температуру є дослідницькою проблемою."
            }
          }
        ],
        explanation: {
          pl: "Pytanie o temperaturę jest problemem. Zdanie o kiełkowaniu w pokoju jest hipotezą.",
          ua: "Питання про температуру є проблемою. Речення про проростання в кімнаті є гіпотезою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jeden czynnik", ua: "Поняття. Один чинник" },
      visual: vizGh("l32-czynniki.png", {
        alt: { pl: "Trzy karty: woda, temperatura, światło, wybrana woda", ua: "Три картки: вода, температура, світло, вибрана вода" },
        title: { pl: "Jedna karta. Reszta zostaje taka sama.", ua: "Одна картка. Решта лишається така сама." },
        prompt: { pl: "Plansza lekcji 32: jeden czynnik." }
      }),
      text: {
        pl: [
          ["Kiełkowanie sprawdzasz wybranym ", em("czynnikiem"), ": ", em("wodą"), ", ", em("temperaturą"), " albo ", em("światłem"), "."],
          "W jednym doświadczeniu zmieniasz tylko jeden. Te same nasiona, ten sam czas, ten sam rodzaj słoika.",
          "Mokra fasola w lodówce obok suchej na oknie zmienia dwie rzeczy naraz. Wtedy nie wiadomo, co zadziałało."
        ],
        ua: [
          ["Проростання перевіряєш вибраним ", em("чинником"), ": ", em("водою"), ", ", em("температурою"), " або ", em("світлом"), "."],
          "В одному досліді змінюєш лише один. Те саме насіння, той самий час, той самий вид банки.",
          "Волога квасоля в холодильнику поруч із сухою на вікні змінює дві речі разом. Тоді невідомо, що подіяло."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy karty", ua: "Приклад. Три картки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Karta wody: jeden słoik z wilgotną bibułą, drugi z suchą. Miejsce i nasiona te same."],
            ua: ["Картка води: одна банка з вологим папером, друга з сухим. Місце і насіння ті самі."]
          }
        },
        {
          text: {
            pl: ["Karta temperatury: pokój obok lodówki. Woda w obu słoikach taka sama. Karta światła: okno obok szafy, reszta bez zmian."],
            ua: ["Картка температури: кімната поруч із холодильником. Вода в обох банках така сама. Картка світла: вікно поруч із шафою, решта без змін."]
          }
        },
        {
          text: {
            pl: ["Dwie karty naraz psują porównanie. Zostawiasz jedną."],
            ua: ["Дві картки разом псують порівняння. Лишаєш одну."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna karta", ua: "Коротке питання. Одна картка" },
      task: {
        id: "l32-g3",
        type: "single-choice",
        question: {
          pl: "W jednym doświadczeniu o kiełkowaniu zmieniasz:",
          ua: "В одному досліді про проростання змінюєш:"
        },
        options: [
          { id: "a", label: { pl: "jeden czynnik: wodę albo temperaturę albo światło", ua: "один чинник: воду або температуру або світло" } },
          { id: "b", label: { pl: "wodę i lodówkę naraz, żeby było szybciej", ua: "воду і холодильник разом, щоб було швидше" } },
          { id: "c", label: { pl: "nazwy drzew liściastych z lekcji 33", ua: "назви листяних дерев з уроку 33" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedna karta z trzech. Reszta zostaje taka sama.",
          ua: "Одна картка з трьох. Решта лишається така сама."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda i lodówka to dwa czynniki. Wtedy nie wiadomo, co zadziałało. Wróć do reguły: w jednym doświadczeniu zmieniasz jeden.",
              ua: "Вода і холодильник — це два чинники. Тоді невідомо, що подіяло. Повернися до правила: в одному досліді змінюєш один."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drzewa liściaste są na lekcji 33. Tu czynnikiem jest woda, temperatura albo światło, i w jednym teście bierzesz jeden.",
              ua: "Листяні дерева є на уроці 33. Тут чинником є вода, температура або світло, і в одному тесті береш один."
            }
          }
        ],
        explanation: {
          pl: "Jeden czynnik: woda, temperatura albo światło. Reszta zostaje taka sama.",
          ua: "Один чинник: вода, температура або світло. Решта лишається така сама."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Dwie karty naraz", ua: "Типова помилка. Дві картки разом" },
      claim: {
        pl: "„Mokra fasola w lodówce i sucha na oknie pokazują wszystko naraz.”",
        ua: "«Волога квасоля в холодильнику і суха на вікні показують усе разом.»"
      },
      text: {
        pl: [
          "Tu zmieniasz wodę i temperaturę. Kiełek albo jego brak nie wskaże jednej przyczyny.",
          "Zostawiasz jedną kartę. Drugi słoik różni się tylko nią."
        ],
        ua: [
          "Тут змінюєш воду і температуру. Проросток або його відсутність не вкаже однієї причини.",
          "Лишаєш одну картку. Друга банка відрізняється лише нею."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szafa i okno", ua: "Сам. Шафа і вікно" },
      task: {
        id: "l32-p3",
        type: "single-choice",
        question: {
          pl: "Jeden słoik jest suchy i stoi w szafie. Drugi jest mokry i stoi na oknie. Uczeń mówi, że bada tylko światło. Co poprawić?",
          ua: "Одна банка суха і стоїть у шафі. Друга волога і стоїть на вікні. Учень каже, що досліджує лише світло. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "zmienione są dwa czynniki, światło i woda; w jednym doświadczeniu zostaje jedna różnica", ua: "змінено два чинники, світло і воду; в одному досліді лишається одна різниця" } },
          { id: "b", label: { pl: "tak — im więcej różnic, tym wyraźniejszy wynik", ua: "так — що більше відмінностей, то виразніший результат" } },
          { id: "c", label: { pl: "tak — szafa i okno sprawdzają haczyki na sierści", ua: "так — шафа і вікно перевіряють гачки на шерсті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Więcej różnic zaciera przyczynę. Wróć do jednego czynnika: przy teście światła woda w obu słoikach zostaje taka sama.",
              ua: "Більше відмінностей затирає причину. Повернися до одного чинника: у тесті світла вода в обох банках лишається така сама."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Haczyki wiozą nasiono na sierści. To lekcja 31. Tu kartami są światło i woda, a w jednym doświadczeniu zostawiasz jedną.",
              ua: "Гачки везуть насінину на шерсті. Це урок 31. Тут картками є світло і вода, а в одному досліді лишаєш одну."
            }
          }
        ],
        explanation: {
          pl: "Szafa i sucha bibuła to dwie zmiany. Zostaje jeden czynnik.",
          ua: "Шафа і сухий папір — це дві зміни. Лишається один чинник."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie próby", ua: "Поняття. Дві проби" },
      visual: vizGh("l32-proby.png", {
        alt: { pl: "Dwa słoiki: wilgotna bibuła i sucha bibuła", ua: "Дві банки: вологий папір і сухий папір" },
        title: { pl: "Różni je woda. Reszta jest ta sama.", ua: "Їх різниця — вода. Решта та сама." },
        prompt: { pl: "Plansza lekcji 32: próba badawcza i kontrolna." }
      }),
      text: {
        pl: [
          ["Przy teście wody ", em("próba badawcza"), " ma wilgotną bibułę. Czynnik, czyli woda, w niej jest."],
          ["", em("Próba kontrolna"), " ma suchą bibułę. Służy do porównania. Te same nasiona fasoli, ten sam rodzaj słoika, ta sama temperatura, kilka dni."],
          "Słoika nie zakręcasz na głucho: nasiono też oddycha. Spleśniałych nasion nie jesz. Wody ze słoika nie pijesz."
        ],
        ua: [
          ["У тесті води ", em("дослідна проба"), " має вологий папір. Чинник, тобто вода, у ній є."],
          ["", em("Контрольна проба"), " має сухий папір. Служить для порівняння. Те саме насіння квасолі, той самий вид банки, та сама температура, кілька днів."],
          "Банку не закручуєш наглухо: насінина теж дихає. Запліснявіле насіння не їси. Воду з банки не п’єш."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mokry i suchy", ua: "Приклад. Вологий і сухий" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewy słoik: wilgotna bibuła i fasola. To próba badawcza, bo woda w niej jest."],
            ua: ["Ліва банка: вологий папір і квасоля. Це дослідна проба, бо вода в ній є."]
          }
        },
        {
          text: {
            pl: ["Prawy słoik: sucha bibuła i taka sama fasola. To próba kontrolna."],
            ua: ["Права банка: сухий папір і така сама квасоля. Це контрольна проба."]
          }
        },
        {
          text: {
            pl: ["Oba stoją w tym samym miejscu i zostają uchylone. Zakrętka na głucho nie jest czynnikiem."],
            ua: ["Обидві стоять у тому самому місці і лишаються прочиненими. Накривка наглухо не є чинником."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Który słoik", ua: "Коротке питання. Яка банка" },
      task: {
        id: "l32-g4",
        type: "single-choice",
        question: {
          pl: "Przy teście wody wskaż próby.",
          ua: "У тесті води вкажи проби."
        },
        options: [
          { id: "a", label: { pl: "badawcza — wilgotna bibuła; kontrolna — sucha bibuła", ua: "дослідна — вологий папір; контрольна — сухий папір" } },
          { id: "b", label: { pl: "kontrolna ma wodę, bo wodę kontrolujemy", ua: "контрольна має воду, бо воду контролюємо" } },
          { id: "c", label: { pl: "badawcza to słoik z pszczołą na płatku", ua: "дослідна — це банка з бджолою на пелюстці" } }
        ],
        answer: "a",
        hint: {
          pl: "Badawcza ma czynnik. Przy wodzie czynnikiem jest wilgotna bibuła.",
          ua: "Дослідна має чинник. При воді чинником є вологий папір."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "«Kontrolować» w nazwie nie znaczy, że woda jest w próbie kontrolnej. Wróć do czynnika: woda jest w próbie badawczej. Sucha bibuła jest do porównania.",
              ua: "«Контролювати» в назві не означає, що вода є в контрольній пробі. Повернися до чинника: вода є в дослідній пробі. Сухий папір є для порівняння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pszczoła na płatku przenosi pyłek. To zapylenie. Próba badawcza tego doświadczenia ma wilgotną bibułę i nasiona fasoli.",
              ua: "Бджола на пелюстці переносить пилок. Це запилення. Дослідна проба цього досліду має вологий папір і насіння квасолі."
            }
          }
        ],
        explanation: {
          pl: "Wilgotna bibuła to próba badawcza. Sucha to próba kontrolna.",
          ua: "Вологий папір — це дослідна проба. Сухий — це контрольна проба."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Woda w kontroli", ua: "Типова помилка. Вода в контролі" },
      claim: {
        pl: "„Próba kontrolna ma wodę, bo właśnie wodę kontrolujemy.”",
        ua: "«Контрольна проба має воду, бо саме воду контролюємо.»"
      },
      text: {
        pl: [
          "Próba badawcza ma czynnik. Przy tej karcie czynnikiem jest woda, więc bibuła jest wilgotna.",
          "Próba kontrolna jest sucha. Dzięki niej widać, co daje sama woda."
        ],
        ua: [
          "Дослідна проба має чинник. При цій картці чинником є вода, тож папір вологий.",
          "Контрольна проба суха. Завдяки їй видно, що дає сама вода."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Podpisane odwrotnie", ua: "Сам. Підписані навпаки" },
      task: {
        id: "l32-p4",
        type: "single-choice",
        question: {
          pl: "Dwa słoiki z taką samą fasolą stoją na jednym stole. W lewym bibuła jest wilgotna, w prawym sucha. Uczeń podpisuje lewy jako kontrolny, bo «pilnujemy wody», a prawy jako badawczy, bo «jest inny». Co poprawić?",
          ua: "Дві банки з тією самою квасолею стоять на одному столі. У лівій папір вологий, у правій сухий. Учень підписує ліву як контрольну, бо «пильнуємо воду», а праву як дослідну, бо «вона інша». Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "lewy, wilgotny, jest badawczy, bo woda w nim jest; prawy, suchy, jest kontrolny", ua: "ліва, волога, є дослідною, бо вода в ній є; права, суха, є контрольною" } },
          { id: "b", label: { pl: "tak — kontrolna jest ta, którą bardziej pilnujesz", ua: "так — контрольна та, яку більше пильнуєш" } },
          { id: "c", label: { pl: "tak — suchy słoik jest badawczy, bo brak wody bardziej widać", ua: "так — суха банка дослідна, бо відсутність води помітніша" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nazwa «kontrolna» oznacza porównanie, nie ulubiony słoik. Wróć do czynnika: woda jest w próbie badawczej. Sucha bibuła stoi obok do porównania.",
              ua: "Назва «контрольна» означає порівняння, не улюблену банку. Повернися до чинника: вода є в дослідній пробі. Сухий папір стоїть поруч для порівняння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To, że brak wody widać, nie zamienia suchej bibuły w próbę badawczą. Badawcza ma czynnik. Przy tej karcie jest nim wilgotna bibuła.",
              ua: "Те, що відсутність води видно, не перетворює сухий папір на дослідну пробу. Дослідна має чинник. При цій картці ним є вологий папір."
            }
          }
        ],
        explanation: {
          pl: "Wilgotny słoik jest próbą badawczą. Suchy jest próbą kontrolną.",
          ua: "Волога банка є дослідною пробою. Суха є контрольною пробою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wynik i wniosek", ua: "Поняття. Результат і висновок" },
      visual: vizGh("l32-wynik.png", {
        alt: { pl: "Mokry słoik z kiełkiem i suchy bez kiełka", ua: "Волога банка з проростком і суха без проростка" },
        title: { pl: "Najpierw to, co widać. Potem jedno zdanie.", ua: "Спочатку те, що видно. Потім одне речення." },
        prompt: { pl: "Plansza lekcji 32: wynik i wniosek." }
      }),
      text: {
        pl: [
          ["", em("Wynik"), " to to, co widać. Przy wodzie typowy przebieg szkolny jest taki: mokra fasola kiełkuje, sucha nie."],
          ["", em("Wniosek"), " odpowiada na problem. Tu: do kiełkowania fasoli potrzebna jest woda."],
          "Gdy kartą jest lodówka, wynik może brzmieć: w zimnie nasiono nie kiełkuje albo kiełkuje wolniej. Wniosek pasuje do twojego czynnika i do tego, co zobaczyłeś."
        ],
        ua: [
          ["", em("Результат"), " — це те, що видно. При воді типовий шкільний перебіг такий: волога квасоля проростає, суха ні."],
          ["", em("Висновок"), " відповідає на проблему. Тут: для проростання квасолі потрібна вода."],
          "Коли карткою є холодильник, результат може звучати: в холоді насінина не проростає або проростає повільніше. Висновок пасує до твого чинника і до того, що ти побачив."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa słoiki po dniach", ua: "Приклад. Дві банки через дні" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W wilgotnym słoiku jest kiełek. W suchym nasiono zostało całe. To wynik."],
            ua: ["У вологій банці є проросток. У сухій насінина лишилася цілою. Це результат."]
          }
        },
        {
          text: {
            pl: ["Jedno zdanie na pytanie o wodę: do kiełkowania fasoli potrzebna jest woda. To wniosek."],
            ua: ["Одне речення на питання про воду: для проростання квасолі потрібна вода. Це висновок."]
          }
        },
        {
          text: {
            pl: ["«Nasiono poleciało z wiatrem» nie odpowiada na to pytanie. Wiatr był na lekcji 31."],
            ua: ["«Насінина полетіла з вітром» не відповідає на це питання. Вітер був на уроці 31."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co napisać", ua: "Коротке питання. Що написати" },
      task: {
        id: "l32-g5",
        type: "single-choice",
        question: {
          pl: "Mokra fasola kiełkuje, sucha nie. Jaki wniosek pasuje do tego wyniku?",
          ua: "Волога квасоля проростає, суха ні. Який висновок пасує до цього результату?"
        },
        options: [
          { id: "a", label: { pl: "do kiełkowania fasoli potrzebna jest woda", ua: "для проростання квасолі потрібна вода" } },
          { id: "b", label: { pl: "nasiona rozsiewają się haczykami", ua: "насіння поширюється гачками" } },
          { id: "c", label: { pl: "jodyna pokazuje skrobię w liściu", ua: "йод показує крохмаль у листку" } }
        ],
        answer: "a",
        hint: {
          pl: "Wniosek odpowiada na pytanie o wodę. Wynik już widzisz.",
          ua: "Висновок відповідає на питання про воду. Результат уже бачиш."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Haczyki to rozsiew z lekcji 31. Wróć do wyniku w słoikach: mokra fasola kiełkuje, sucha nie. Wniosek jest o wodzie.",
              ua: "Гачки — це поширення з уроку 31. Повернися до результату в банках: волога квасоля проростає, суха ні. Висновок про воду."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna jest z doświadczenia o liściu, lekcja 10. Tu patrzysz, czy wyszedł kiełek. Wniosek z mokrego i suchego słoika jest o wodzie.",
              ua: "Йод є з досліду про листок, урок 10. Тут дивишся, чи вийшов проросток. Висновок із вологої і сухої банки є про воду."
            }
          }
        ],
        explanation: {
          pl: "Z tego wyniku wniosek jest o wodzie: fasola jej potrzebuje do kiełkowania.",
          ua: "З цього результату висновок про воду: квасолі вона потрібна для проростання."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wniosek przed wynikiem", ua: "Типова помилка. Висновок до результату" },
      claim: {
        pl: "„Wniosek zapisuję przed otwarciem słoików. Hipoteza i tak jest pewna.”",
        ua: "«Висновок записую до відкриття банок. Гіпотеза і так певна.»"
      },
      text: {
        pl: [
          "Najpierw wynik: co widać w słoikach.",
          "Wniosek piszesz potem i dopasowujesz go do tego wyniku oraz do swojego czynnika."
        ],
        ua: [
          "Спочатку результат: що видно в банках.",
          "Висновок пишеш потім і допасовуєш його до цього результату та до свого чинника."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Oba na oknie", ua: "Сам. Обидві на вікні" },
      task: {
        id: "l32-p5",
        type: "single-choice",
        question: {
          pl: "Oba słoiki stały na tym samym oknie. Kiełek jest tylko w wilgotnym. Uczeń pisze wniosek: fasola potrzebuje światła, bo okno było jasne. Co poprawić?",
          ua: "Обидві банки стояли на тому самому вікні. Проросток є лише у вологій. Учень пише висновок: квасолі потрібне світло, бо вікно було світле. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "światło było w obu takie samo; różniła je woda, więc wniosek jest o wodzie", ua: "світло в обох було таке саме; їх різнила вода, тож висновок про воду" } },
          { id: "b", label: { pl: "tak — jasne okno zamienia każdy wniosek w wniosek o świetle", ua: "так — світле вікно перетворює кожен висновок на висновок про світло" } },
          { id: "c", label: { pl: "tak — kiełek na oknie dowodzi, że nasiono przyniósł ptak", ua: "так — проросток на вікні доводить, що насінину приніс птах" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Oba słoiki miały to samo światło, więc światło nie jest różnicą. Wróć do wyniku: kiełek jest tam, gdzie bibuła była wilgotna. Wniosek jest o wodzie.",
              ua: "Обидві банки мали те саме світло, тож світло не є різницею. Повернися до результату: проросток є там, де папір був вологий. Висновок про воду."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ptak zjada owoc i tak nasiono może odjechać. To lekcja 31. Tu kiełek wyszedł w wilgotnym słoiku. Wniosek odpowiada na pytanie o wodę.",
              ua: "Птах з’їдає плід, і так насінина може від’їхати. Це урок 31. Тут проросток вийшов у вологій банці. Висновок відповідає на питання про воду."
            }
          }
        ],
        explanation: {
          pl: "Światło było wspólne. Wniosek z tej pary słoików jest o wodzie.",
          ua: "Світло було спільне. Висновок із цієї пари банок є про воду."
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
      heading: { pl: "Sprawdzian 1. Biały kiełek", ua: "Перевірка 1. Білий проросток" },
      task: {
        id: "l32-t1",
        type: "single-choice",
        question: {
          pl: "Z nasiona fasoli wychodzi biały kiełek. Uczeń mówi, że to pyłek, bo jest jasny, więc kwiat został zapylony. Co pasuje do lekcji?",
          ua: "З насінини квасолі виходить білий проросток. Учень каже, що це пилок, бо він світлий, тож квітку запилено. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "jasny kiełek to start wzrostu z nasiona; pyłek jest na pręciku", ua: "світлий проросток — це старт росту з насінини; пилок є на тичинці" } },
          { id: "b", label: { pl: "tak — wszystko jasne na roślinie jest pyłkiem", ua: "так — усе світле на рослині є пилком" } },
          { id: "c", label: { pl: "tak — kiełek to skrzydełko, bo wystaje z nasiona", ua: "так — проросток це крильце, бо стирчить із насінини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pyłek powstaje na pręciku i ląduje na znamieniu. To zapylenie. Jasny wyrostek z nasiona jest kiełkiem. Osłona pękła i wzrost się zaczął.",
              ua: "Пилок виникає на тичинці і сідає на приймочку. Це запилення. Світлий виріст із насінини є проростком. Оболонка тріснула і ріст почався."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrzydełko kręci się na wietrze i niesie całe nasiono. To rozsiew. Kiełek wychodzi, gdy osłona już pęka. To kiełkowanie.",
              ua: "Крильце крутиться на вітрі і несе цілу насінину. Це поширення. Проросток виходить, коли оболонка вже тріскає. Це проростання."
            }
          }
        ],
        explanation: {
          pl: "Biały kiełek to start wzrostu z nasiona. Pyłek i skrzydełko są z innych lekcji.",
          ua: "Білий проросток — це старт росту з насінини. Пилок і крильце є з інших уроків."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Zdanie przed słoikami", ua: "Перевірка 2. Речення до банок" },
      task: {
        id: "l32-t2",
        type: "single-choice",
        question: {
          pl: "Na tablicy jest pytanie, czy fasola potrzebuje wody. Uczeń od razu dopisuje «woda jest potrzebna» i nazywa to hipotezą, choć słoików jeszcze nie ma. Co pasuje do lekcji?",
          ua: "На дошці є питання, чи квасолі потрібна вода. Учень одразу дописує «вода потрібна» і називає це гіпотезою, хоча банок ще немає. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "hipoteza jest przypuszczeniem do sprawdzenia; pewne zdanie o wodzie jest wnioskiem po wyniku", ua: "гіпотеза є припущенням для перевірки; певне речення про воду є висновком після результату" } },
          { id: "b", label: { pl: "tak — hipoteza ma być pewna, zanim spojrzysz", ua: "так — гіпотеза має бути певною, поки не подивишся" } },
          { id: "c", label: { pl: "tak — problem badawczy to nazwa słoika", ua: "так — дослідницька проблема це назва банки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Przed słoikami masz pytanie i przypuszczenie. Pewne zdanie jest wnioskiem, a wniosek czeka na wynik. Wróć do hipotezy: to jeszcze nie pewnik.",
              ua: "До банок маєш питання і припущення. Певне речення є висновком, а висновок чекає на результат. Повернися до гіпотези: це ще не певність."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoik jest naczyniem próby. Problem badawczy jest pytaniem. Tu pytanie brzmi, czy do kiełkowania fasoli potrzebna jest woda.",
              ua: "Банка є посудиною проби. Дослідницька проблема є питанням. Тут питання звучить, чи для проростання квасолі потрібна вода."
            }
          }
        ],
        explanation: {
          pl: "Hipoteza jest przypuszczeniem. Wniosek o wodzie piszesz po wyniku.",
          ua: "Гіпотеза є припущенням. Висновок про воду пишеш після результату."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Trzecia zmiana", ua: "Перевірка 3. Третя зміна" },
      task: {
        id: "l32-t3",
        type: "single-choice",
        question: {
          pl: "Dwa słoiki stoją na oknie: jeden z wilgotną bibułą, drugi z suchą. Uczeń dla pewności wstawia suchy do lodówki. Mówi, że nadal bada tylko wodę. Co pasuje do lekcji?",
          ua: "Дві банки стоять на вікні: одна з вологим папером, друга з сухим. Учень для певності ставить суху в холодильник. Каже, що й далі досліджує лише воду. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "doszła druga zmiana, temperatura; przy teście wody zostaje jedna różnica — woda", ua: "додалася друга зміна, температура; у тесті води лишається одна різниця — вода" } },
          { id: "b", label: { pl: "tak — lodówka zawsze poprawia porównanie", ua: "так — холодильник завжди покращує порівняння" } },
          { id: "c", label: { pl: "tak — trzy karty wolno włączyć naraz, by było więcej nauki", ua: "так — три картки можна ввімкнути разом, щоб було більше науки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lodówka zmienia temperaturę. Przy teście wody oba słoiki zostają w tym samym miejscu. Wróć do jednego czynnika: różni je tylko bibuła.",
              ua: "Холодильник змінює температуру. У тесті води обидві банки лишаються в тому самому місці. Повернися до одного чинника: їх різнить лише папір."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Woda, temperatura i światło to trzy karty, ale w jednym doświadczeniu bierzesz jedną. Inaczej nie wiadomo, co zadziałało.",
              ua: "Вода, температура і світло — це три картки, але в одному досліді береш одну. Інакше невідомо, що подіяло."
            }
          }
        ],
        explanation: {
          pl: "Suchy słoik w lodówce dodaje temperaturę. Przy wodzie zostaje jedna różnica.",
          ua: "Суха банка в холодильнику додає температуру. При воді лишається одна різниця."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Dwa podpisy", ua: "Перевірка 4. Два підписи" },
      task: {
        id: "l32-t4",
        type: "single-choice",
        question: {
          pl: "Dwa uchylone słoiki z fasolą stoją obok siebie. W jednym bibuła jest wilgotna, w drugim sucha. Uczeń mówi, że oba są próbą kontrolną, bo stoją razem do porównania, i zakręca je na głucho, żeby «było równo». Co pasuje do lekcji?",
          ua: "Дві прочинені банки з квасолею стоять поруч. В одній папір вологий, у другій сухий. Учень каже, що обидві є контрольною пробою, бо стоять разом для порівняння, і закручує їх наглухо, щоб «було порівну». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "wilgotny jest badawczy, suchy jest kontrolny; słoika nie zakręcasz na głucho, bo nasiono oddycha", ua: "волога є дослідною, суха є контрольною; банку не закручуєш наглухо, бо насінина дихає" } },
          { id: "b", label: { pl: "tak — skoro porównujesz, obie próby są kontrolne", ua: "так — якщо порівнюєш, обидві проби є контрольними" } },
          { id: "c", label: { pl: "tak — badawcza jest ta, którą zakręcisz mocniej", ua: "так — дослідна та, яку закрутиш міцніше" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Porównanie potrzebuje dwóch ról. Wróć do czynnika: wilgotna bibuła jest próbą badawczą, sucha jest kontrolną. Zakrętka na głucho nie jest tą różnicą, a nasiono oddycha.",
              ua: "Порівнянню потрібні дві ролі. Повернися до чинника: вологий папір є дослідною пробою, сухий є контрольною. Накривка наглухо не є цією різницею, а насінина дихає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szczelna zakrętka nie jest czynnikiem. Nasiono oddycha, więc słoika nie zakręcasz na głucho. Próbą badawczą jest słoik z wilgotną bibułą.",
              ua: "Щільна накривка не є чинником. Насінина дихає, тож банку не закручуєш наглухо. Дослідною пробою є банка з вологим папером."
            }
          }
        ],
        explanation: {
          pl: "Wilgotny słoik jest badawczy, suchy kontrolny. Słoik zostaje uchylony. Spleśniałych nasion nie jesz i wody ze słoika nie pijesz.",
          ua: "Волога банка є дослідною, суха контрольною. Банка лишається прочиненою. Запліснявіле насіння не їси і воду з банки не п’єш."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Ciepło i lodówka", ua: "Перевірка 5. Тепло і холодильник" },
      task: {
        id: "l32-t5",
        type: "single-choice",
        question: {
          pl: "Oba słoiki były tak samo wilgotne. W pokoju jest kiełek, w lodówce nasiono zostało bez kiełka. Uczeń pisze wniosek: do kiełkowania potrzebna jest woda. Co pasuje do lekcji?",
          ua: "Обидві банки були так само вологі. У кімнаті є проросток, у холодильнику насінина лишилася без проростка. Учень пише висновок: для проростання потрібна вода. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "woda była w obu taka sama; ten wynik mówi o temperaturze", ua: "вода в обох була така сама; цей результат говорить про температуру" } },
          { id: "b", label: { pl: "tak — każdy wniosek o kiełkowaniu jest o wodzie", ua: "так — кожен висновок про проростання є про воду" } },
          { id: "c", label: { pl: "tak — brak kiełka w lodówce znaczy, że nasiono zabrał wiatr", ua: "так — відсутність проростка в холодильнику означає, що насінину забрав вітер" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wniosek o wodzie pasuje, gdy słoiki różniła woda. Tu oba były wilgotne. Wróć do swojego czynnika: różniła je temperatura, więc wniosek jest o niej.",
              ua: "Висновок про воду пасує, коли банки різнила вода. Тут обидві були вологі. Повернися до свого чинника: їх різнила температура, тож висновок про неї."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wiatr niesie lekkie nasiono. To lekcja 31. Tu nasiono zostało w słoiku. Wynik porównuje pokój i lodówkę, więc wniosek jest o temperaturze.",
              ua: "Вітер несе легку насінину. Це урок 31. Тут насінина лишилася в банці. Результат порівнює кімнату і холодильник, тож висновок про температуру."
            }
          }
        ],
        explanation: {
          pl: "Woda była wspólna. Wniosek z pokoju i lodówki jest o temperaturze.",
          ua: "Вода була спільною. Висновок із кімнати і холодильника є про температуру."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l32-wynik.png", {
        alt: { pl: "Mokry słoik z kiełkiem i suchy bez kiełka", ua: "Волога банка з проростком і суха без проростка" },
        title: { pl: "Wynik widać. Wniosek jest jednym zdaniem.", ua: "Результат видно. Висновок є одним реченням." },
        prompt: { pl: "Ta sama plansza wyniku i wniosku." }
      }),
      text: {
        pl: [
          "Kiełkowanie: osłona pęka i wychodzi kiełek, często najpierw korzonek. W nasionie jest zapas na pierwsze dni.",
          "Problem to pytanie. Hipoteza to przypuszczenie do sprawdzenia.",
          "Jeden czynnik: woda, temperatura albo światło. Reszta zostaje taka sama.",
          "Przy wodzie badawcza ma wilgotną bibułę, kontrolna suchą. Wynik to to, co widać. Wniosek odpowiada na twoje pytanie.",
          "Słoika nie zakręcasz na głucho. Spleśniałych nasion nie jesz. Wody ze słoika nie pijesz."
        ],
        ua: [
          "Проростання: оболонка тріскає і виходить проросток, часто спочатку корінець. У насінині є запас на перші дні.",
          "Проблема — це питання. Гіпотеза — це припущення для перевірки.",
          "Один чинник: вода, температура або світло. Решта лишається така сама.",
          "При воді дослідна має вологий папір, контрольна сухий. Результат — це те, що видно. Висновок відповідає на твоє питання.",
          "Банку не закручуєш наглухо. Запліснявіле насіння не їси. Воду з банки не п’єш."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, czym jest kiełkowanie.", ua: "Поясню, що таке проростання." },
        { pl: "Sformułuję problem badawczy i hipotezę.", ua: "Сформулюю дослідницьку проблему і гіпотезу." },
        { pl: "W jednym doświadczeniu zmienię jeden czynnik: wodę, temperaturę albo światło.", ua: "В одному досліді зміню один чинник: воду, температуру або світло." },
        { pl: "Wskażę próbę badawczą i kontrolną.", ua: "Вкажу дослідну і контрольну пробу." },
        { pl: "Z wyniku napiszę wniosek do swojego czynnika.", ua: "З результату напишу висновок до свого чинника." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
