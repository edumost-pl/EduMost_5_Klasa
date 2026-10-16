function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L30_Kwiat/images/";

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
      heading: { pl: "Misja: części kwiatu", ua: "Місія: частини квітки" },
      visual: vizGh("l30-zacznijmy.png", {
        alt: { pl: "Barwny kwiat z bliska", ua: "Барвиста квітка зблизька" },
        title: { pl: "Wczoraj była grupa. Dziś organ.", ua: "Учора була група. Сьогодні орган." },
        prompt: { pl: "Plansza lekcji 30: kwiat." }
      }),
      text: {
        pl: [
          "To lekcja 30. Na lekcji 29 okrytonasienne mają kwiaty, a części zostawiliśmy. Dziś kielich, korona, pręciki, słupek i droga do owocu.",
          "Jak nasiona potem podróżują — lekcja 31. Kiełkowanie — lekcja 32. Kwiatu nie bierz za szyszkę z lekcji 27.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 30. На уроці 29 покритонасінні мають квітки, а частини ми лишили. Сьогодні чашечка, віночок, тичинки, маточка і шлях до плоду.",
          "Як насіння потім подорожує — урок 31. Проростання — урок 32. Квітку не бери за шишку з уроку 27.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "kielich", ua: "чашечка — зелені чашолистки, захищає бутон" },
        { pl: "korona", ua: "віночок — пелюстки, часто ваблять" },
        { pl: "pręcik", ua: "тичинка — дає пилок" },
        { pl: "pyłek", ua: "пилок — дрібний, часто жовтий порошок" },
        { pl: "słupek", ua: "маточка — жіноча частина; приймочка зверху" },
        { pl: "zalążnia", ua: "зав’язь — низ маточки, усередині насінні зачатки" },
        { pl: "zapylenie", ua: "запилення — пилок із тичинки на приймочку" },
        { pl: "nektar", ua: "нектар — принада для комах" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kielich i korona", ua: "Поняття. Чашечка і віночок" },
      visual: vizGh("l30-kielich-korona.png", {
        alt: { pl: "Zielone działki kielicha i płatki korony", ua: "Зелені чашолистки чашечки і пелюстки віночка" },
        title: { pl: "Zieleń chroni pąk. Płatki często wabią.", ua: "Зелень захищає бутон. Пелюстки часто ваблять." },
        prompt: { pl: "Plansza lekcji 30: kielich i korona." }
      }),
      text: {
        pl: [
          ["", em("Kielich"), " to zwykle zielone ", em("działki"), " na zewnątrz. Chroni ", em("pąk"), ", zanim kwiat się otworzy."],
          ["", em("Korona"), " to ", em("płatki"), ". Często są barwne i wabią owady."],
          "Nie każdy kwiat jest jaskrawy. Zboże ma drobne kwiaty. Płatek to nie listek mchu, nie igła i nie liść dębu."
        ],
        ua: [
          ["", em("Чашечка"), " — це зазвичай зелені ", em("чашолистки"), " зовні. Захищає ", em("бутон"), ", поки квітка не розкриється."],
          ["", em("Віночок"), " — це ", em("пелюстки"), ". Часто вони барвисті і ваблять комах."],
          "Не кожна квітка яскрава. Злак має дрібні квітки. Пелюстка — це не листочок моху, не хвоя і не листок дуба."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pąk i płatki", ua: "Приклад. Бутон і пелюстки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pąk jest zamknięty. Zielone działki owijają go. To kielich."],
            ua: ["Бутон закритий. Зелені чашолистки обгортають його. Це чашечка."]
          }
        },
        {
          text: {
            pl: ["Kwiat się otwiera. Barwne płatki to korona."],
            ua: ["Квітка розкривається. Барвисті пелюстки — це віночок."]
          }
        },
        {
          text: {
            pl: ["Płatek nie jest liściem dębu. Działka nie jest igłą."],
            ua: ["Пелюстка не є листком дуба. Чашолисток не є хвоєю."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ochrona i wabienie", ua: "Коротке питання. Захист і принадження" },
      task: {
        id: "l30-g1",
        type: "single-choice",
        question: {
          pl: "Do czego służą kielich i korona?",
          ua: "Для чого чашечка і віночок?"
        },
        options: [
          { id: "a", label: { pl: "kielich chroni pąk; płatki korony często wabią owady", ua: "чашечка захищає бутон; пелюстки віночка часто ваблять комах" } },
          { id: "b", label: { pl: "kielich to szyszka sosny", ua: "чашечка — це шишка сосни" } },
          { id: "c", label: { pl: "płatki to chwytniki mchu", ua: "пелюстки — це ризоїди моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Zielone działki chronią pąk. Płatki często wabią.",
          ua: "Зелені чашолистки захищають бутон. Пелюстки часто ваблять."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka sosny nie jest kielichem. Kielich to zielone działki. Chronią pąk, zanim kwiat się otworzy.",
              ua: "Шишка сосни не є чашечкою. Чашечка — це зелені чашолистки. Захищають бутон, поки квітка не розкриється."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chwytniki należą do mchu. Płatki są koroną kwiatu i często wabią owady.",
              ua: "Ризоїди належать моху. Пелюстки є віночком квітки і часто ваблять комах."
            }
          }
        ],
        explanation: {
          pl: "Kielich chroni pąk. Płatki korony często wabią owady.",
          ua: "Чашечка захищає бутон. Пелюстки віночка часто ваблять комах."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Brak koloru", ua: "Типова помилка. Немає барви" },
      claim: {
        pl: "„Zboże nie ma kwiatu, bo płatki nie są barwne.”",
        ua: "«Злак не має квітки, бо пелюстки не барвисті.»"
      },
      text: {
        pl: [
          "Drobny kwiat zboża też jest kwiatem.",
          "Kielich chroni jego pąk. Barwa płatków często wabi owady. Zboże jej nie potrzebuje w ten sam sposób."
        ],
        ua: [
          "Дрібна квітка злаку теж є квіткою.",
          "Чашечка захищає його бутон. Барва пелюсток часто вабить комах. Злаку вона не потрібна в той самий спосіб."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pąk tulipana", ua: "Сам. Бутон тюльпана" },
      task: {
        id: "l30-p1",
        type: "single-choice",
        question: {
          pl: "Pąk tulipana owijają zielone części, a po otwarciu widać barwne płatki. Uczeń mówi, że zieleń to liść dębu, a czerwień to igła świerka. Co poprawić?",
          ua: "Бутон тюльпана обгортають зелені частини, а після розкриття видно барвисті пелюстки. Учень каже, що зелень — це листок дуба, а червоне — це хвоя ялини. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "zielone działki to kielich i chronią pąk; barwne płatki to korona", ua: "зелені чашолистки — це чашечка і захищають бутон; барвисті пелюстки — це віночок" } },
          { id: "b", label: { pl: "tak — każda zieleń na kwiecie jest blaszką dębu", ua: "так — кожна зелень на квітці є пластинкою дуба" } },
          { id: "c", label: { pl: "tak — barwny płatek jest igłą, bo jest wąski", ua: "так — барвиста пелюстка є хвоєю, бо вузька" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liść dębu znasz z lekcji 24. Zielone części na pąku tulipana to działki kielicha. Chronią pąk.",
              ua: "Листок дуба знаєш з уроку 24. Зелені частини на бутоні тюльпана — це чашолистки чашечки. Захищають бутон."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igła jest liściem świerka. Barwne części tulipana to płatki korony. Często wabią owady.",
              ua: "Хвоя є листком ялини. Барвисті частини тюльпана — це пелюстки віночка. Часто ваблять комах."
            }
          }
        ],
        explanation: {
          pl: "Zielone działki to kielich. Barwne płatki to korona.",
          ua: "Зелені чашолистки — це чашечка. Барвисті пелюстки — це віночок."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pręcik i pyłek", ua: "Поняття. Тичинка і пилок" },
      visual: vizGh("l30-preciki.png", {
        alt: { pl: "Pręciki z żółtym pyłkiem", ua: "Тичинки з жовтим пилком" },
        title: { pl: "Pręcik sypie pyłek.", ua: "Тичинка сипле пилок." },
        prompt: { pl: "Plansza lekcji 30: pręciki." }
      }),
      text: {
        pl: [
          ["", em("Pręciki"), " to męska część kwiatu. Na szczycie sypie się ", em("pyłek"), ": drobny, często żółty proszek."],
          "Pyłek ma trafić na słupek. Jak go niesie owad albo wiatr — przy zapyleniu.",
          "W kwiecie źródłem pyłku jest pręcik, nie szyszka męska z lekcji 27. Pyłek to nie zarodnik mchu ani paproci."
        ],
        ua: [
          ["", em("Тичинки"), " — це чоловіча частина квітки. На верхівці сиплеться ", em("пилок"), ": дрібний, часто жовтий порошок."],
          "Пилок має потрапити на маточку. Як його несе комаха або вітер — при запиленні.",
          "У квітці джерело пилку — тичинка, не чоловіча шишка з уроку 27. Пилок — це не спора моху і не спора папороті."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Żółty proszek", ua: "Приклад. Жовтий порошок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W środku kwiatu widać pręciki."],
            ua: ["Усередині квітки видно тичинки."]
          }
        },
        {
          text: {
            pl: ["Na ich szczycie leży żółty proszek. To pyłek."],
            ua: ["На їхній верхівці лежить жовтий порошок. Це пилок."]
          }
        },
        {
          text: {
            pl: ["Szyszka męska też ma pyłek, ale nie jest pręcikiem."],
            ua: ["Чоловіча шишка теж має пилок, але не є тичинкою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skąd proszek", ua: "Коротке питання. Звідки порошок" },
      task: {
        id: "l30-g2",
        type: "single-choice",
        question: {
          pl: "Co wytwarza pręcik?",
          ua: "Що виробляє тичинка?"
        },
        options: [
          { id: "a", label: { pl: "pyłek — drobny, często żółty proszek", ua: "пилок — дрібний, часто жовтий порошок" } },
          { id: "b", label: { pl: "zarodniki w puszce mchu", ua: "спори в коробочці моху" } },
          { id: "c", label: { pl: "zielone działki kielicha", ua: "зелені чашолистки чашечки" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj drobnego proszku na szczycie pręcika.",
          ua: "Шукай дрібний порошок на верхівці тичинки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zarodniki w puszce należą do mchu. Pręcik wytwarza pyłek. To drobny, często żółty proszek.",
              ua: "Спори в коробочці належать моху. Тичинка виробляє пилок. Це дрібний, часто жовтий порошок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielone działki to kielich. Chronią pąk. Pręcik jest inną częścią i sypie pyłek.",
              ua: "Зелені чашолистки — це чашечка. Захищають бутон. Тичинка є іншою частиною і сипле пилок."
            }
          }
        ],
        explanation: {
          pl: "Pręcik wytwarza pyłek.",
          ua: "Тичинка виробляє пилок."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Żółta choroba", ua: "Типова помилка. Жовта хвороба" },
      claim: {
        pl: "„Żółty proszek na kwiecie to zarodniki paproci, więc kwiat jest chory.”",
        ua: "«Жовтий порошок на квітці — це спори папороті, тож квітка хвора.»"
      },
      text: {
        pl: [
          "Zarodniki paproci siedzą w kupkach na liściu.",
          "Żółty proszek z pręcika to pyłek. Kwiat nie jest przez to chory."
        ],
        ua: [
          "Спори папороті сидять у купках на листку.",
          "Жовтий порошок із тичинки — це пилок. Квітка через це не хвора."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kurz z tulipana", ua: "Сам. Порох із тюльпана" },
      task: {
        id: "l30-p2",
        type: "single-choice",
        question: {
          pl: "Potrząśnięty tulipan sypie żółty kurz. Uczeń mówi, że to pyłek z szyszki męskiej, więc tulipan jest sosną. Co poprawić?",
          ua: "Струшений тюльпан сипле жовтий порох. Учень каже, що це пилок із чоловічої шишки, тож тюльпан є сосною. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "w kwiecie pyłek sypie pręcik; szyszka męska należy do nagonasiennych, nie do tulipana", ua: "у квітці пилок сипле тичинка; чоловіча шишка належить голонасінним, не тюльпану" } },
          { id: "b", label: { pl: "tak — każdy żółty proszek jest szyszką", ua: "так — кожен жовтий порошок є шишкою" } },
          { id: "c", label: { pl: "tak — kurz tulipana to żywica na ranie pnia", ua: "так — порох тюльпана це живиця на рані стовбура" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żółty proszek na pręciku to pyłek, nie cała szyszka. Tulipan jest kwiatem. Szyszka męska jest u nagonasiennych.",
              ua: "Жовтий порошок на тичинці — це пилок, не ціла шишка. Тюльпан є квіткою. Чоловіча шишка є в голонасінних."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Żywica zakleja ranę pnia drzewa iglastego. Żółty kurz z tulipana sypie pręcik. To pyłek.",
              ua: "Живиця заліплює рану стовбура хвойного дерева. Жовтий порох із тюльпана сипле тичинка. Це пилок."
            }
          }
        ],
        explanation: {
          pl: "Pyłek tulipana pochodzi z pręcików. Szyszka męska to inna roślina.",
          ua: "Пилок тюльпана походить із тичинок. Чоловіча шишка — це інша рослина."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Słupek", ua: "Поняття. Маточка" },
      visual: vizGh("l30-slupek.png", {
        alt: { pl: "Słupek ze znamieniem u góry i zalążnią na dole", ua: "Маточка з приймочкою зверху і зав’яззю внизу" },
        title: { pl: "U góry znamię. Na dole zalążnia.", ua: "Зверху приймочка. Внизу зав’язь." },
        prompt: { pl: "Plansza lekcji 30: słupek." }
      }),
      text: {
        pl: [
          ["", em("Słupek"), " to żeńska część kwiatu. U góry bywa klejące ", em("znamię"), ". Tu ląduje pyłek."],
          ["Na dole jest ", em("zalążnia"), ". W środku są ", em("zalążki"), ". Po zapyleniu powstają z nich nasiona."],
          "Zalążnia później urośnie w owoc. To ostatnia część lekcji. Haczyków i skrzydełek nasion dziś nie ma — to lekcja 31."
        ],
        ua: [
          ["", em("Маточка"), " — це жіноча частина квітки. Зверху буває клейка ", em("приймочка"), ". Сюди сідає пилок."],
          ["Внизу є ", em("зав’язь"), ". Усередині є ", em("насінні зачатки"), ". Після запилення з них виникає насіння."],
          "Зав’язь пізніше виросте в плід. Це остання частина уроку. Гачків і крилець насіння сьогодні немає — це урок 31."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Góra i dół", ua: "Приклад. Верх і низ" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Słupek stoi w środku kwiatu."],
            ua: ["Маточка стоїть усередині квітки."]
          }
        },
        {
          text: {
            pl: ["Lepka góra to znamię. Pyłek się do niej przykleja."],
            ua: ["Липка горішня частина — це приймочка. Пилок до неї прилипає."]
          }
        },
        {
          text: {
            pl: ["Gruby dół to zalążnia. W niej są zalążki."],
            ua: ["Товстий низ — це зав’язь. У ній є насінні зачатки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie nasiona", ua: "Коротке питання. Де насіння" },
      task: {
        id: "l30-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie w kwiecie powstaną nasiona?",
          ua: "Де в квітці виникне насіння?"
        },
        options: [
          { id: "a", label: { pl: "w zalążni słupka, z zalążków, po zapyleniu", ua: "у зав’язі маточки, із насінних зачатків, після запилення" } },
          { id: "b", label: { pl: "w zielonych działkach kielicha", ua: "у зелених чашолистках чашечки" } },
          { id: "c", label: { pl: "w puszce zarodni mchu", ua: "у коробочці зі спорами моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj grubego dołu słupka.",
          ua: "Шукай товстий низ маточки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Działki kielicha chronią pąk. Nasiona powstaną w zalążni słupka, z zalążków, po zapyleniu.",
              ua: "Чашолистки чашечки захищають бутон. Насіння виникне в зав’язі маточки, із насінних зачатків, після запилення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu ma zarodniki. W kwiecie nasiona powstaną w zalążni słupka.",
              ua: "Коробочка моху має спори. У квітці насіння виникне в зав’язі маточки."
            }
          }
        ],
        explanation: {
          pl: "Nasiona powstaną w zalążni słupka, z zalążków.",
          ua: "Насіння виникне в зав’язі маточки, із насінних зачатків."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Lepki nektar", ua: "Типова помилка. Липкий нектар" },
      claim: {
        pl: "„Lepka góra słupka to nektar, więc cały słupek jest słodkim płatkiem.”",
        ua: "«Липка горішня частина маточки — це нектар, тож уся маточка є солодкою пелюсткою.»"
      },
      text: {
        pl: [
          "Lepka góra to znamię. Tu ląduje pyłek.",
          "Nektar wabi owady. Zalążnia jest na dole słupka i trzyma zalążki."
        ],
        ua: [
          "Липка горішня частина — це приймочка. Сюди сідає пилок.",
          "Нектар вабить комах. Зав’язь є внизу маточки і тримає насінні зачатки."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Gruby dół", ua: "Сам. Товстий низ" },
      task: {
        id: "l30-p3",
        type: "single-choice",
        question: {
          pl: "W rozciętym kwiecie widać gruby dół z drobnymi zalążkami. Uczeń mówi, że to kielich, bo leży nisko. Co poprawić?",
          ua: "У розрізаній квітці видно товстий низ із дрібними насінними зачатками. Учень каже, що це чашечка, бо лежить низько. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "gruby dół to zalążnia słupka; kielich to zielone działki na zewnątrz", ua: "товстий низ — це зав’язь маточки; чашечка — це зелені чашолистки зовні" } },
          { id: "b", label: { pl: "tak — wszystko, co jest nisko, jest kielichem", ua: "так — усе, що низько, є чашечкою" } },
          { id: "c", label: { pl: "tak — zalążki w dole to pyłek na pręciku", ua: "так — зачатки внизу це пилок на тичинці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Niskie miejsce nie wybiera nazwy. Kielich to zielone działki na zewnątrz. Gruby dół w środku, z zalążkami, to zalążnia słupka.",
              ua: "Низьке місце не вибирає назву. Чашечка — це зелені чашолистки зовні. Товстий низ усередині, із зачатками, — це зав’язь маточки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek sypie się z pręcika. Drobne części w grubej zalążni to zalążki. Z nich po zapyleniu powstaną nasiona.",
              ua: "Пилок сиплеться з тичинки. Дрібні частини в товстій зав’язі — це насінні зачатки. З них після запилення виникне насіння."
            }
          }
        ],
        explanation: {
          pl: "Gruby dół z zalążkami to zalążnia słupka.",
          ua: "Товстий низ із зачатками — це зав’язь маточки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa zapylenia", ua: "Поняття. Два запилення" },
      visual: vizGh("l30-zapylenie.png", {
        alt: { pl: "Owad na barwnym kwiecie i kłos zboża na wietrze", ua: "Комаха на барвистій квітці і колосок злаку на вітрі" },
        title: { pl: "Pyłek niesie owad albo wiatr.", ua: "Пилок несе комаха або вітер." },
        prompt: { pl: "Plansza lekcji 30: owady i wiatr." }
      }),
      text: {
        pl: [
          ["", em("Zapylenie"), " to przeniesienie pyłku z pręcika na znamię słupka."],
          ["Owady lecą po ", em("nektar"), " i pyłek. Ubrudzą się pyłkiem i przeniosą go. Dlatego płatki bywają barwne i pachną."],
          "Wiatr nie potrzebuje barwy. Kwiaty zbóż są drobne, a pyłku jest dużo. To nie lot nasiona klonu ze skrzydełkiem. Tamten lot jest na lekcji 31."
        ],
        ua: [
          ["", em("Запилення"), " — це перенесення пилку з тичинки на приймочку маточки."],
          ["Комахи летять по ", em("нектар"), " і пилок. Вимащуються пилком і переносять його. Тому пелюстки бувають барвисті і пахнуть."],
          "Вітру не потрібна барва. Квітки злаків дрібні, а пилку багато. Це не політ насінини клена з крильцем. Той політ є на уроці 31."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pszczoła i kłos", ua: "Приклад. Бджола і колосок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pszczoła na kwiecie jabłoni pije nektar i zabiera pyłek na sobie."],
            ua: ["Бджола на квітці яблуні п’є нектар і забирає пилок на собі."]
          }
        },
        {
          text: {
            pl: ["Pyłek może osiąść na znamieniu. To zapylenie przez owady."],
            ua: ["Пилок може сісти на приймочку. Це запилення комахами."]
          }
        },
        {
          text: {
            pl: ["Kłos zboża ma drobne kwiaty i dużo pyłku na wietrze. To drugie zapylenie."],
            ua: ["Колосок злаку має дрібні квітки і багато пилку на вітрі. Це друге запилення."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dokąd pyłek", ua: "Коротке питання. Куди пилок" },
      task: {
        id: "l30-g4",
        type: "single-choice",
        question: {
          pl: "Czym jest zapylenie?",
          ua: "Чим є запилення?"
        },
        options: [
          { id: "a", label: { pl: "przeniesieniem pyłku z pręcika na znamię słupka", ua: "перенесенням пилку з тичинки на приймочку маточки" } },
          { id: "b", label: { pl: "lotem nasiona ze skrzydełkiem klonu", ua: "польотом насінини з крильцем клена" } },
          { id: "c", label: { pl: "wysypem zarodników z puszki mchu", ua: "висипом спор із коробочки моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Pyłek jedzie z pręcika na znamię.",
          ua: "Пилок їде з тичинки на приймочку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzydełko klonu niesie nasiono. To lekcja 31. Zapylenie niesie pyłek z pręcika na znamię słupka.",
              ua: "Крильце клена несе насінину. Це урок 31. Запилення несе пилок із тичинки на приймочку маточки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu sypie zarodniki. Zapylenie przenosi pyłek z pręcika na znamię.",
              ua: "Коробочка моху сипле спори. Запилення переносить пилок із тичинки на приймочку."
            }
          }
        ],
        explanation: {
          pl: "Zapylenie przenosi pyłek z pręcika na znamię słupka.",
          ua: "Запилення переносить пилок із тичинки на приймочку маточки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ten sam lot", ua: "Типова помилка. Той самий політ" },
      claim: {
        pl: "„Wiatr niesie pyłek zbóż i skrzydełko klonu, więc to jedno i to samo.”",
        ua: "«Вітер несе пилок злаків і крильце клена, тож це одне й те саме.»"
      },
      text: {
        pl: [
          "Wiatr przy zapyleniu niesie pyłek na znamię.",
          "Skrzydełko klonu niesie nasiono. To inna podróż, na lekcji 31."
        ],
        ua: [
          "Вітер при запиленні несе пилок на приймочку.",
          "Крильце клена несе насінину. Це інша подорож, на уроці 31."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Motyl na groszku", ua: "Сам. Метелик на горошку" },
      task: {
        id: "l30-p4",
        type: "single-choice",
        question: {
          pl: "Motyl siada na pachnącym, barwnym kwiecie grochu. Uczeń mówi, że owad zjada owoc, więc to rozsiew nasion, a zapylenia nie ma, bo nie wieje wiatr. Co poprawić?",
          ua: "Метелик сідає на запашну, барвисту квітку гороху. Учень каже, що комаха їсть плід, тож це поширення насіння, а запилення немає, бо не віє вітер. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "motyl przenosi pyłek; barwa, zapach i nektar są dla owadów; wiatr zapyla drobne kwiaty zbóż", ua: "метелик переносить пилок; барва, запах і нектар є для комах; вітер запилює дрібні квітки злаків" } },
          { id: "b", label: { pl: "tak — owad na kwiecie zawsze zjada gotowy owoc", ua: "так — комаха на квітці завжди їсть готовий плід" } },
          { id: "c", label: { pl: "tak — bez wiatru pyłek nie rusza się z pręcika", ua: "так — без вітру пилок не рушає з тичинки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owoc powstaje później, z zalążni. Motyl na barwnym kwiecie przenosi pyłek. To zapylenie przez owady, nie rozsiew nasion.",
              ua: "Плід виникає пізніше, із зав’язі. Метелик на барвистій квітці переносить пилок. Це запилення комахами, не поширення насіння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wiatr to drugi sposób: drobne kwiaty zbóż i dużo pyłku. Owady też przenoszą pyłek, gdy jest barwa, zapach i nektar.",
              ua: "Вітер — це другий спосіб: дрібні квітки злаків і багато пилку. Комахи теж переносять пилок, коли є барва, запах і нектар."
            }
          }
        ],
        explanation: {
          pl: "Motyl na barwnym kwiecie przenosi pyłek. Wiatr robi to u zbóż.",
          ua: "Метелик на барвистій квітці переносить пилок. Вітер робить це в злаків."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Z kwiatu owoc", ua: "Поняття. З квітки плід" },
      visual: vizGh("l30-owoc.png", {
        alt: { pl: "Kwiat, zalążnia i owoc z nasionami", ua: "Квітка, зав’язь і плід із насінням" },
        title: { pl: "Płatki opadają. Zalążnia staje się owocem.", ua: "Пелюстки опадають. Зав’язь стає плодом." },
        prompt: { pl: "Plansza lekcji 30: z kwiatu owoc." }
      }),
      text: {
        pl: [
          "Gdy pyłek dotrze na znamię, zalążki stają się nasionami.",
          ["", em("Zalążnia"), " rośnie i staje się ", em("owocem"), ". Nasiona są w nim okryte, jak na lekcji 29."],
          "Płatki często opadają. Zostaje owoc: jabłko, strąk, śliwka. Kto zje jabłko i jak poleci nasiono — lekcja 31."
        ],
        ua: [
          "Коли пилок дійде на приймочку, насінні зачатки стають насінням.",
          ["", em("Зав’язь"), " росте і стає ", em("плодом"), ". Насіння в ньому покрите, як на уроці 29."],
          "Пелюстки часто опадають. Лишається плід: яблуко, стручок, слива. Хто з’їсть яблуко і як полетить насінина — урок 31."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kroki", ua: "Приклад. Три кроки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pyłek jest już na znamieniu."],
            ua: ["Пилок уже на приймочці."]
          }
        },
        {
          text: {
            pl: ["Płatki opadają. Zalążnia zostaje i puchnie."],
            ua: ["Пелюстки опадають. Зав’язь лишається і пухне."]
          }
        },
        {
          text: {
            pl: ["Spuchnięta zalążnia to owoc. Nasiona są w środku."],
            ua: ["Набрякла зав’язь — це плід. Насіння є всередині."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co puchnie", ua: "Коротке питання. Що пухне" },
      task: {
        id: "l30-g5",
        type: "single-choice",
        question: {
          pl: "Co dzieje się z zalążnią po zapyleniu?",
          ua: "Що діється із зав’яззю після запилення?"
        },
        options: [
          { id: "a", label: { pl: "rośnie w owoc, a zalążki stają się nasionami", ua: "росте в плід, а насінні зачатки стають насінням" } },
          { id: "b", label: { pl: "zamienia się w szyszkę męską", ua: "перетворюється на чоловічу шишку" } },
          { id: "c", label: { pl: "zostaje zieloną działką kielicha", ua: "лишається зеленим чашолистком чашечки" } }
        ],
        answer: "a",
        hint: {
          pl: "Zostaje zalążnia, nie opadłe płatki.",
          ua: "Лишається зав’язь, не опалі пелюстки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka męska daje pyłek u nagonasiennych. Zalążnia po zapyleniu rośnie w owoc, a zalążki stają się nasionami.",
              ua: "Чоловіча шишка дає пилок у голонасінних. Зав’язь після запилення росте в плід, а насінні зачатки стають насінням."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Działka kielicha chroni pąk. Po zapyleniu w owoc rośnie zalążnia słupka.",
              ua: "Чашолисток чашечки захищає бутон. Після запилення в плід росте зав’язь маточки."
            }
          }
        ],
        explanation: {
          pl: "Zalążnia rośnie w owoc. Zalążki stają się nasionami.",
          ua: "Зав’язь росте в плід. Насінні зачатки стають насінням."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Owoc z płatków", ua: "Типова помилка. Плід із пелюсток" },
      claim: {
        pl: "„Owocem są płatki, które opadły na ziemię.”",
        ua: "«Плодом є пелюстки, які опали на землю.»"
      },
      text: {
        pl: [
          "Opadłe płatki nie okrywają nasion.",
          "Owoc rośnie z zalążni. Nasiona są w środku."
        ],
        ua: [
          "Опалі пелюстки не вкривають насіння.",
          "Плід росте із зав’язі. Насіння є всередині."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zwiędły groch", ua: "Сам. Зів’ялий горох" },
      task: {
        id: "l30-p5",
        type: "single-choice",
        question: {
          pl: "Kwiat grochu zwiędł, a na jego miejscu jest strąk. Uczeń mówi, że strąk to suchy płatek, więc nasion w nim nie ma. Co poprawić?",
          ua: "Квітка гороху зів’яла, а на її місці є стручок. Учень каже, що стручок — це суха пелюстка, тож насіння в ньому немає. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "strąk jest owocem z zalążni; nasiona są w środku; płatki często opadają i owocem nie są", ua: "стручок є плодом із зав’язі; насіння є всередині; пелюстки часто опадають і плодом не є" } },
          { id: "b", label: { pl: "tak — suchy strąk to tylko opadły płatek", ua: "так — сухий стручок це лише опала пелюстка" } },
          { id: "c", label: { pl: "tak — strąk grochu jest szyszką świerka", ua: "так — стручок гороху є шишкою ялини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Płatki często opadają i nie okrywają nasion. Strąk rośnie z zalążni. To owoc, a nasiona są w środku.",
              ua: "Пелюстки часто опадають і не вкривають насіння. Стручок росте із зав’язі. Це плід, а насіння є всередині."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka świerka trzyma nasiono nago na łusce. Strąk grochu jest owocem z zalążni. Nasiona są okryte.",
              ua: "Шишка ялини тримає насінину голо на лусці. Стручок гороху є плодом із зав’язі. Насіння покрите."
            }
          }
        ],
        explanation: {
          pl: "Strąk jest owocem z zalążni. Płatki owocem nie są.",
          ua: "Стручок є плодом із зав’язі. Пелюстки плодом не є."
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
      heading: { pl: "Sprawdzian 1. Jabłoń", ua: "Перевірка 1. Яблуня" },
      task: {
        id: "l30-t1",
        type: "single-choice",
        question: {
          pl: "Na kwiecie jabłoni na zewnątrz są zielone działki, a dalej różowe płatki. Uczeń podpisuje zieleń jako płatki, a róż jako łuski szyszki. Co pasuje do lekcji?",
          ua: "На квітці яблуні зовні є зелені чашолистки, а далі рожеві пелюстки. Учень підписує зелень як пелюстки, а рожеве як луски шишки. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "zielone działki to kielich i chronią pąk; różowe płatki to korona", ua: "зелені чашолистки — це чашечка і захищають бутон; рожеві пелюстки — це віночок" } },
          { id: "b", label: { pl: "tak — zieleń na kwiecie zawsze jest koroną", ua: "так — зелень на квітці завжди є віночком" } },
          { id: "c", label: { pl: "tak — różowy płatek jest łuską szyszki świerka", ua: "так — рожева пелюстка є лускою шишки ялини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Korona to płatki, często barwne. Zielone działki na zewnątrz to kielich. Chronią pąk.",
              ua: "Віночок — це пелюстки, часто барвисті. Зелені чашолистки зовні — це чашечка. Захищають бутон."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Łuska szyszki trzyma nagie nasiono. Różowe części jabłoni to płatki korony. Zielone działki to kielich.",
              ua: "Луска шишки тримає голу насінину. Рожеві частини яблуні — це пелюстки віночка. Зелені чашолистки — це чашечка."
            }
          }
        ],
        explanation: {
          pl: "Kielich to zielone działki. Korona to płatki.",
          ua: "Чашечка — це зелені чашолистки. Віночок — це пелюстки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Kwiat grochu", ua: "Перевірка 2. Квітка гороху" },
      task: {
        id: "l30-t2",
        type: "single-choice",
        question: {
          pl: "W kwiecie grochu, wśród płatków, widać pręciki z żółtym pyłkiem. Uczeń nazywa je płatkami, bo są w środku barwnego kwiatu i tylko wabią. Co pasuje do lekcji?",
          ua: "У квітці гороху, серед пелюсток, видно тичинки з жовтим пилком. Учень називає їх пелюстками, бо вони всередині барвистої квітки і лише ваблять. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "pręciki wytwarzają pyłek; płatki to korona i często wabią", ua: "тичинки виробляють пилок; пелюстки — це віночок і часто ваблять" } },
          { id: "b", label: { pl: "tak — wszystko wśród płatków jest kielichem", ua: "так — усе серед пелюсток є чашечкою" } },
          { id: "c", label: { pl: "tak — żółty pyłek grochu jest zarodnikiem paproci", ua: "так — жовтий пилок гороху є спорою папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kielich to zielone działki na zewnątrz. Pręciki stoją wśród płatków i wytwarzają pyłek. Płatki są koroną.",
              ua: "Чашечка — це зелені чашолистки зовні. Тичинки стоять серед пелюсток і виробляють пилок. Пелюстки є віночком."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodniki paproci są w kupkach na liściu. Żółty proszek na pręciku grochu to pyłek.",
              ua: "Спори папороті є в купках на листку. Жовтий порошок на тичинці гороху — це пилок."
            }
          }
        ],
        explanation: {
          pl: "Pręciki wytwarzają pyłek. Płatki są koroną.",
          ua: "Тичинки виробляють пилок. Пелюстки є віночком."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Lepka góra", ua: "Перевірка 3. Липка горішня частина" },
      task: {
        id: "l30-t3",
        type: "single-choice",
        question: {
          pl: "Na schemacie słupek ma lepką górę i gruby dół. Uczeń podpisuje gruby dół jako pręcik, bo jest w środku i „robi pyłek”. Co pasuje do lekcji?",
          ua: "На схемі маточка має липку горішню частину і товстий низ. Учень підписує товстий низ як тичинку, бо він усередині і «робить пилок». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "lepka góra to znamię, gruby dół to zalążnia; pyłek robi pręcik", ua: "липка горішня частина — це приймочка, товстий низ — це зав’язь; пилок робить тичинка" } },
          { id: "b", label: { pl: "tak — gruby dół sypie pyłek", ua: "так — товстий низ сипле пилок" } },
          { id: "c", label: { pl: "tak — zalążnia to łuska szyszki", ua: "так — зав’язь це луска шишки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pyłek sypie pręcik. Gruby dół słupka to zalążnia. Lepka góra to znamię, tu ląduje pyłek.",
              ua: "Пилок сипле тичинка. Товстий низ маточки — це зав’язь. Липка горішня частина — це приймочка, сюди сідає пилок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Łuska szyszki trzyma nagie nasiono. Zalążnia jest dołem słupka i ma w środku zalążki.",
              ua: "Луска шишки тримає голу насінину. Зав’язь є низом маточки і має всередині насінні зачатки."
            }
          }
        ],
        explanation: {
          pl: "Znamię jest u góry słupka. Zalążnia jest na dole. Pyłek robi pręcik.",
          ua: "Приймочка є зверху маточки. Зав’язь є внизу. Пилок робить тичинка."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Dwa rabaty", ua: "Перевірка 4. Дві грядки" },
      task: {
        id: "l30-t4",
        type: "single-choice",
        question: {
          pl: "Na jednej grządce pszczoła siada na barwnym grochu z nektarem. Obok kłos zboża jest drobny, bez barwnych płatków, i sypie dużo pyłku na wietrze. Uczeń mówi, że oba to haczyki nasion na sierści. Co pasuje do lekcji?",
          ua: "На одній грядці бджола сідає на барвистий горох із нектаром. Поруч колосок злаку дрібний, без барвистих пелюсток, і сипле багато пилку на вітрі. Учень каже, що обидва — це гачки насіння на шерсті. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "pszczoła, barwa i nektar to zapylenie przez owady; drobny kłos i dużo pyłku to wiatr; haczyki nasion są na lekcji 31", ua: "бджола, барва і нектар — це запилення комахами; дрібний колосок і багато пилку — це вітер; гачки насіння є на уроці 31" } },
          { id: "b", label: { pl: "tak — oba sposoby zaczepiają nasiono o sierść", ua: "так — обидва способи чіпляють насінину за шерсть" } },
          { id: "c", label: { pl: "tak — pszczoła zapyla szyszki, a wiatr zapyla mchy", ua: "так — бджола запилює шишки, а вітер запилює мохи" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Haczyki na nasionach to rozsiew, lekcja 31. Tu pyłek jedzie na znamię: owady przy barwie i nektarze, wiatr przy drobnych kwiatach zbóż.",
              ua: "Гачки на насінні — це поширення, урок 31. Тут пилок їде на приймочку: комахи при барві і нектарі, вітер при дрібних квітках злаків."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka nie jest kwiatem, a mech nie ma pręcików. Pszczoła zapyla barwny kwiat. Wiatr niesie pyłek drobnych kwiatów zbóż.",
              ua: "Шишка не є квіткою, а мох не має тичинок. Бджола запилює барвисту квітку. Вітер несе пилок дрібних квіток злаків."
            }
          }
        ],
        explanation: {
          pl: "Barwa i nektar wabią owady. Wiatr niesie pyłek drobnych kwiatów zbóż.",
          ua: "Барва і нектар ваблять комах. Вітер несе пилок дрібних квіток злаків."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Jabłko na gałęzi", ua: "Перевірка 5. Яблуко на гілці" },
      task: {
        id: "l30-t5",
        type: "single-choice",
        question: {
          pl: "Na jabłoni zostały jabłka, a płatki już opadły. Uczeń mówi, że jabłko jest szyszką, bo wisi, więc nasiona leżą nago na łusce. Co pasuje do lekcji?",
          ua: "На яблуні лишилися яблука, а пелюстки вже опали. Учень каже, що яблуко є шишкою, бо висить, тож насіння лежить голо на лусці. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "jabłko jest owocem z zalążni; nasiona są w środku okryte; płatki często opadają", ua: "яблуко є плодом із зав’язі; насіння всередині покрите; пелюстки часто опадають" } },
          { id: "b", label: { pl: "tak — wszystko, co wisi na gałęzi, jest szyszką", ua: "так — усе, що висить на гілці, є шишкою" } },
          { id: "c", label: { pl: "tak — jabłko jest opadłym płatkiem", ua: "так — яблуко є опалою пелюсткою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka trzyma nasiono nago na łusce. Jabłko wyrosło z zalążni i okrywa nasiona. To owoc.",
              ua: "Шишка тримає насінину голо на лусці. Яблуко виросло із зав’язі і вкриває насіння. Це плід."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Płatki często opadają i nie są owocem. Jabłko rośnie z zalążni. Nasiona są w środku.",
              ua: "Пелюстки часто опадають і не є плодом. Яблуко росте із зав’язі. Насіння є всередині."
            }
          }
        ],
        explanation: {
          pl: "Jabłko jest owocem z zalążni. Nasiona są okryte. Płatki często opadają.",
          ua: "Яблуко є плодом із зав’язі. Насіння покрите. Пелюстки часто опадають."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l30-owoc.png", {
        alt: { pl: "Kwiat, zalążnia i owoc z nasionami", ua: "Квітка, зав’язь і плід із насінням" },
        title: { pl: "Od kielicha do owocu.", ua: "Від чашечки до плоду." },
        prompt: { pl: "Ta sama plansza drogi od kwiatu do owocu." }
      }),
      text: {
        pl: [
          "Kielich to zielone działki i chroni pąk. Korona to płatki i często wabi.",
          "Pręciki dają pyłek. Słupek ma znamię u góry i zalążnię z zalążkami na dole.",
          "Zapylenie niesie pyłek na znamię: owady albo wiatr. To nie lot nasiona.",
          "Zalążnia staje się owocem. Płatki często opadają. Rozsiew nasion jest na lekcji 31."
        ],
        ua: [
          "Чашечка — це зелені чашолистки і захищає бутон. Віночок — це пелюстки і часто вабить.",
          "Тичинки дають пилок. Маточка має приймочку зверху і зав’язь із зачатками внизу.",
          "Запилення несе пилок на приймочку: комахи або вітер. Це не політ насінини.",
          "Зав’язь стає плодом. Пелюстки часто опадають. Поширення насіння є на уроці 31."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wskażę kielich i koronę.", ua: "Вкажу чашечку і віночок." },
        { pl: "Wskażę pręciki i powiem, że dają pyłek.", ua: "Вкажу тичинки і скажу, що дають пилок." },
        { pl: "Wskażę słupek: znamię i zalążnię.", ua: "Вкажу маточку: приймочку і зав’язь." },
        { pl: "Porównam zapylenie przez owady i przez wiatr.", ua: "Порівняю запилення комахами і вітром." },
        { pl: "Wyjaśnię, że z zalążni powstaje owoc.", ua: "Поясню, що із зав’язі виникає плід." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
