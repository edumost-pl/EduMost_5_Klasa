function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: składam dział III", ua: "Місія: складаю розділ III" },
      text: {
        pl: [
          "To powtórzenie działu: wirusy, bakterie, protisty i grzyby. Nie nowy temat. Składasz lekcje 15–20.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Błąd pokazuje, który krok wrócić, a nie cały dział od nowa."
        ],
        ua: [
          "Це повторення розділу: віруси, бактерії, протисти і гриби. Не нова тема. Складаєш уроки 15–20.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Помилка показує, який крок повернути, а не весь розділ спочатку."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "królestwo / wirus", ua: "царство — клітина; вірус стоїть поза п’ятьма царствами" },
        { pl: "rodzaj / gatunek", ua: "рід — перше слово; вид — друге, як у Canis lupus" },
        { pl: "kapsyd", ua: "капсид — білкова оболонка віруса, не ядро" },
        { pl: "komórka bezjądrowa", ua: "без’ядерна клітина — нитка ДНК у цитозолі" },
        { pl: "antybiotyk", ua: "антибіотик — на бактерії, не на віруси; призначає лікар" },
        { pl: "protisty", ua: "протисти — ядерні, зазвичай одна клітина" },
        { pl: "grzybnia / owocnik", ua: "грибниця зі гіфів; плодове тіло — шапинка над нею" },
        { pl: "porost", ua: "лишайник — гриб і водорість або ціанобактерії, не мох" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pięć królestw", ua: "Поняття. П’ять царств" },
      visual: vizGh("L15_Klasyfikacja_organizmow", "l15-wirusy.png", {
        alt: { pl: "Wirusy poza pięcioma królestwami", ua: "Віруси поза п’ятьма царствами" },
        title: { pl: "Nie są komórkami. Stoją poza królestwami.", ua: "Не є клітинами. Стоять поза царствами." },
        prompt: { pl: "Plansza lekcji 15: wirusy poza królestwami." }
      }),
      text: {
        pl: [
          ["", em("Klasyfikacja"), " grupuje organizmy według budowy i pokrewieństwa, nie według gustu."],
          ["", em("Gatunek"), " to podobne organizmy, które mogą dać płodne potomstwo. ", em("Nazwa dwuczłonowa"), ": najpierw rodzaj, potem gatunek. Wilk szary to Canis lupus."],
          "Od najwęższej jednostki: gatunek, rodzaj, rodzina, rząd, gromada, typ, królestwo.",
          ["W tym kursie jest ", em("pięć królestw"), ": bakterie, protisty, grzyby, rośliny, zwierzęta. Wirusy nie są komórkami, więc stoją poza nimi."]
        ],
        ua: [
          ["", em("Класифікація"), " групує організми за будовою і спорідненістю, не за смаком."],
          ["", em("Вид"), " — це подібні організми, які можуть дати плодюче потомство. ", em("Двочленна назва"), ": спочатку рід, потім вид. Вовк сірий — це Canis lupus."],
          "Від найвужчої одиниці: вид, рід, родина, ряд, клас, тип, царство.",
          ["У цьому курсі є ", em("п’ять царств"), ": бактерії, протисти, гриби, рослини, тварини. Віруси не є клітинами, тож стоять поза ними."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pięć kafelków", ua: "Приклад. П’ять плиток" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dąb jest rośliną. Sarna jest zwierzęciem."],
            ua: ["Дуб є рослиною. Сарна є твариною."]
          }
        },
        {
          text: {
            pl: ["Muchomor jest grzybem. Bakterie i protisty też są królestwami."],
            ua: ["Мухомор є грибом. Бактерії і протисти теж є царствами."]
          }
        },
        {
          text: {
            pl: ["Wirus nie dostaje szóstej szufladki. Stoi obok, bo nie jest komórką."],
            ua: ["Вірус не дістає шостої шухлядки. Стоїть поруч, бо не є клітиною."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pięć nazw", ua: "Коротке питання. П’ять назв" },
      task: {
        id: "r3-g1",
        type: "single-choice",
        question: {
          pl: "Który zestaw to pięć królestw tego kursu?",
          ua: "Який набір — п’ять царств цього курсу?"
        },
        options: [
          { id: "a", label: { pl: "bakterie, protisty, grzyby, rośliny, zwierzęta; wirusy stoją poza nimi", ua: "бактерії, протисти, гриби, рослини, тварини; віруси стоять поза ними" } },
          { id: "b", label: { pl: "wirusy, bakterie, protisty, grzyby, rośliny", ua: "віруси, бактерії, протисти, гриби, рослини" } },
          { id: "c", label: { pl: "tylko rośliny i zwierzęta, bo reszta jest za mała", ua: "лише рослини і тварини, бо решта замала" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj pięciu grup o budowie komórkowej. Wirus nie jest komórką.",
          ua: "Шукай п’ять груп із клітинною будовою. Вірус не є клітиною."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirusy nie dostają królestwa. W zestawie brakuje zwierząt, a wirusy stoją poza pięcioma królestwami.",
              ua: "Віруси не дістають царства. У наборі бракує тварин, а віруси стоять поза п’ятьма царствами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rozmiar nie skreśla królestwa. Bakterie, protisty i grzyby też są królestwami.",
              ua: "Розмір не викреслює царство. Бактерії, протисти і гриби теж є царствами."
            }
          }
        ],
        explanation: {
          pl: "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta. Wirusy stoją poza nimi.",
          ua: "П’ять царств: бактерії, протисти, гриби, рослини, тварини. Віруси стоять поза ними."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szósta szufladka", ua: "Типова помилка. Шоста шухляда" },
      claim: {
        pl: "„Wirusy wywołują choroby, więc są szóstym królestwem.”",
        ua: "«Віруси викликають хвороби, тож є шостим царством.»"
      },
      text: {
        pl: [
          "Choroba nie daje królestwa.",
          "Wirus nie jest komórką. Dlatego stoi poza pięcioma królestwami."
        ],
        ua: [
          "Хвороба не дає царства.",
          "Вірус не є клітиною. Тому стоїть поза п’ятьма царствами."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa słowa", ua: "Сам. Два слова" },
      task: {
        id: "r3-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń czyta Canis lupus i mówi, że lupus to rodzaj, bo jest drugim słowem. Co poprawić?",
          ua: "Учень читає Canis lupus і каже, що lupus — це рід, бо це друге слово. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "Canis to rodzaj, lupus to gatunek; pierwsze słowo jest szersze", ua: "Canis — це рід, lupus — це вид; перше слово ширше" } },
          { id: "b", label: { pl: "tak — drugie słowo zawsze nazywa królestwo", ua: "так — друге слово завжди називає царство" } },
          { id: "c", label: { pl: "tak — łacina skleja wilka z wirusem", ua: "так — латина склеює вовка з вірусом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo jest najszerszą szufladką, nie drugim słowem. W nazwie dwuczłonowej pierwsze słowo to rodzaj, drugie to gatunek.",
              ua: "Царство є найширшою шухлядкою, не другим словом. У двочленній назві перше слово — це рід, друге — вид."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Canis lupus to wilk szary, zwierzę. Wirus nie dostaje takiej nazwy królestwa, bo stoi poza nimi.",
              ua: "Canis lupus — це вовк сірий, тварина. Вірус не дістає такої назви царства, бо стоїть поза ними."
            }
          }
        ],
        explanation: {
          pl: "Canis to rodzaj. Lupus to gatunek.",
          ua: "Canis — це рід. Lupus — це вид."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wirus", ua: "Поняття. Вірус" },
      visual: vizGh("L16_Wirusy", "l16-budowa.png", {
        alt: { pl: "Kwas nukleinowy w kapsydzie", ua: "Нуклеїнова кислота в капсиді" },
        title: { pl: "Przepis i płaszcz. Bez komórki.", ua: "Рецепт і оболонка. Без клітини." },
        prompt: { pl: "Plansza lekcji 16: budowa wirusa." }
      }),
      text: {
        pl: [
          ["", em("Wirus"), " nie jest komórką. Nie ma cytozolu, mitochondriów ani jądra. Sam nie odżywia się i nie oddycha."],
          ["Ma dwa składniki: ", em("kwas nukleinowy"), " i ", em("kapsyd"), ", czyli płaszcz białkowy. Namnaża się tylko w komórce gospodarza."],
          "Jest mniejszy od bakterii. Widać go mikroskopem elektronowym, nie szkolnym. Przykłady: grypa, ospa wietrzna, odra. Antybiotyki na wirusy nie działają."
        ],
        ua: [
          ["", em("Вірус"), " не є клітиною. Не має цитозолю, мітохондрій чи ядра. Сам не живиться і не дихає."],
          ["Має два складники: ", em("нуклеїнову кислоту"), " і ", em("капсид"), ", тобто білкову оболонку. Розмножується лише в клітині хазяїна."],
          "Він менший за бактерію. Видно його електронним мікроскопом, не шкільним. Приклади: грип, вітрянка, кір. Антибіотики на віруси не діють."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pakiet, nie komórka", ua: "Приклад. Пакет, не клітина" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W środku jest kwas nukleinowy. Na zewnątrz kapsyd."],
            ua: ["Усередині є нуклеїнова кислота. Ззовні капсид."]
          }
        },
        {
          text: {
            pl: ["Na klamce wirus sam się nie karmi. Kopie powstają w komórce gospodarza."],
            ua: ["На ручці вірус сам не їсть. Копії постають у клітині хазяїна."]
          }
        },
        {
          text: {
            pl: ["Szkolny mikroskop go nie pokaże. Grypa zostaje chorobą wirusową."],
            ua: ["Шкільний мікроскоп його не покаже. Грип лишається вірусною хворобою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa składniki", ua: "Коротке питання. Два складники" },
      task: {
        id: "r3-g2",
        type: "single-choice",
        question: {
          pl: "Z czego jest zbudowany wirus i gdzie się namnaża?",
          ua: "З чого збудований вірус і де він розмножується?"
        },
        options: [
          { id: "a", label: { pl: "kwas nukleinowy i kapsyd; tylko w komórce gospodarza", ua: "нуклеїнова кислота і капсид; лише в клітині хазяїна" } },
          { id: "b", label: { pl: "jądro i mitochondria; sam na klamce", ua: "ядро і мітохондрії; сам на ручці" } },
          { id: "c", label: { pl: "ściana komórkowa i chloroplasty; w glebie", ua: "клітинна стінка і хлоропласти; у ґрунті" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj przepisu i białkowego płaszcza, nie części komórki.",
          ua: "Шукай рецепт і білкову оболонку, не частини клітини."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro i mitochondria ma komórka. Wirus ich nie ma. Namnaża się w komórce gospodarza, nie sam na klamce.",
              ua: "Ядро і мітохондрії має клітина. Вірус їх не має. Розмножується в клітині хазяїна, не сам на ручці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana i chloroplasty to części niektórych komórek. Wirus ma kwas nukleinowy i kapsyd.",
              ua: "Стінка і хлоропласти — це частини деяких клітин. Вірус має нуклеїнову кислоту і капсид."
            }
          }
        ],
        explanation: {
          pl: "Wirus ma kwas nukleinowy i kapsyd. Namnaża się tylko w komórce gospodarza.",
          ua: "Вірус має нуклеїнову кислоту і капсид. Розмножується лише в клітині хазяїна."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Mała bakteria", ua: "Типова помилка. Мала бактерія" },
      claim: {
        pl: "„Wirus to bardzo mała bakteria, tylko bez ściany.”",
        ua: "«Вірус — це дуже мала бактерія, лише без стінки.»"
      },
      text: {
        pl: [
          "Bakteria jest komórką. Wirus nią nie jest.",
          "Ma kwas nukleinowy i kapsyd. Nie ma jądra ani cytozolu."
        ],
        ua: [
          "Бактерія є клітиною. Вірус нею не є.",
          "Має нуклеїнову кислоту і капсид. Не має ядра чи цитозолю."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Puste szkiełko", ua: "Сам. Порожнє скельце" },
      task: {
        id: "r3-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń patrzy w szkolny mikroskop i nie widzi wirusa grypy. Mówi, że wirusów nie ma. Co poprawić?",
          ua: "Учень дивиться в шкільний мікроскоп і не бачить вірусу грипу. Каже, що вірусів немає. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "wirus istnieje, ale jest mniejszy od bakterii; widać go mikroskopem elektronowym", ua: "вірус існує, але він менший за бактерію; видно його електронним мікроскопом" } },
          { id: "b", label: { pl: "tak — czego nie widać w szkole, tego nie ma w biologii", ua: "так — чого не видно в школі, того немає в біології" } },
          { id: "c", label: { pl: "tak — grypa jest bakterią, więc kapsyd jest zbędny", ua: "так — грип є бактерією, тож капсид зайвий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szkolny mikroskop nie pokazuje wirusa. Wirus istnieje i jest mniejszy od bakterii. Widać go mikroskopem elektronowym.",
              ua: "Шкільний мікроскоп не показує вірус. Вірус існує і є меншим за бактерію. Видно його електронним мікроскопом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Grypa jest chorobą wirusową. Wirus nie jest bakterią. Ma kwas nukleinowy i kapsyd.",
              ua: "Грип є вірусною хворобою. Вірус не є бактерією. Має нуклеїнову кислоту і капсид."
            }
          }
        ],
        explanation: {
          pl: "Wirus istnieje. Szkolny mikroskop go nie pokazuje, bo jest mniejszy od bakterii.",
          ua: "Вірус існує. Шкільний мікроскоп його не показує, бо він менший за бактерію."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Bakteria", ua: "Поняття. Бактерія" },
      visual: vizGh("L17_Jak_zyja_bakterie", "l17-nic-dna.png", {
        alt: { pl: "Bakteria z nicią DNA w cytozolu", ua: "Бактерія з ниткою ДНК у цитозолі" },
        title: { pl: "Jądra nie ma. Nić DNA jest w cytozolu.", ua: "Ядра немає. Нитка ДНК є в цитозолі." },
        prompt: { pl: "Plansza lekcji 17: komórka bakteryjna." }
      }),
      text: {
        pl: [
          ["", em("Bakteria"), " to ", em("komórka bezjądrowa"), ". Zamiast jądra w cytozolu leży nić DNA. Ma błonę, rybosomy i ścianę komórkową."],
          "Kształty: ziarenkowce, pałeczki, przecinki i krętki. Bywają samożywne albo cudzożywne. Rozmnażają się przez podział komórki.",
          ["", em("Przetrwalnik"), " znosi złe warunki. Rzęska służy do ruchu, otoczka śluzowa do ochrony."]
        ],
        ua: [
          ["", em("Бактерія"), " — це ", em("без’ядерна клітина"), ". Замість ядра в цитозолі лежить нитка ДНК. Має мембрану, рибосоми і клітинну стінку."],
          "Форми: коки, палички, вібріони і спірили. Бувають саможивними або гетеротрофними. Розмножуються поділом клітини.",
          ["", em("Спора"), " зносить погані умови. Джгутик служить для руху, слизова оболонка — для захисту."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Nić, nie kapsyd", ua: "Приклад. Нитка, не капсид" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W cytozolu leży nić DNA. Jądra nie ma, ale komórka jest."],
            ua: ["У цитозолі лежить нитка ДНК. Ядра немає, але клітина є."]
          }
        },
        {
          text: {
            pl: ["Kulka, pałeczka, przecinek albo spirala to kształty, nie osobne królestwa."],
            ua: ["Кулька, паличка, вібріон або спіраль — це форми, не окремі царства."]
          }
        },
        {
          text: {
            pl: ["Gdy jest sucho, przetrwalnik czeka. Rzęska w tym czasie nie jest schronem."],
            ua: ["Коли сухо, спора чекає. Джгутик у цей час не є схованкою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie DNA", ua: "Коротке питання. Де ДНК" },
      task: {
        id: "r3-g3",
        type: "single-choice",
        question: {
          pl: "Czym komórka bakterii różni się od komórki z jądrem?",
          ua: "Чим клітина бактерії відрізняється від клітини з ядром?"
        },
        options: [
          { id: "a", label: { pl: "nie ma jądra; nić DNA leży w cytozolu", ua: "не має ядра; нитка ДНК лежить у цитозолі" } },
          { id: "b", label: { pl: "to nie komórka, tylko kapsyd z kwasem nukleinowym", ua: "це не клітина, лише капсид із нуклеїновою кислотою" } },
          { id: "c", label: { pl: "ma jądro i chloroplasty jak liść", ua: "має ядро і хлоропласти, як листок" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj komórki, w której nie ma jądra.",
          ua: "Шукай клітину, в якій немає ядра."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd należy do wirusa. Bakteria jest komórką. Nie ma jądra, a nić DNA leży w cytozolu.",
              ua: "Капсид належить вірусу. Бактерія є клітиною. Не має ядра, а нитка ДНК лежить у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty i jądro opisują inne komórki. Bakteria jądra nie ma. Nić DNA leży w cytozolu.",
              ua: "Хлоропласти і ядро описують інші клітини. Бактерія ядра не має. Нитка ДНК лежить у цитозолі."
            }
          }
        ],
        explanation: {
          pl: "Bakteria jest komórką bezjądrową. Nić DNA leży w cytozolu.",
          ua: "Бактерія є без’ядерною клітиною. Нитка ДНК лежить у цитозолі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Za mała na komórkę", ua: "Типова помилка. Замала на клітину" },
      claim: {
        pl: "„Bakteria nie ma jądra, więc nie jest komórką, tylko wirusem.”",
        ua: "«Бактерія не має ядра, тож не є клітиною, лише вірусом.»"
      },
      text: {
        pl: [
          "Brak jądra nie skreśla komórki.",
          "Bakteria ma cytozol i nić DNA. Wirus nie jest komórką."
        ],
        ua: [
          "Брак ядра не викреслює клітину.",
          "Бактерія має цитозоль і нитку ДНК. Вірус не є клітиною."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Sucha kałuża", ua: "Сам. Суха калюжа" },
      task: {
        id: "r3-p3",
        type: "single-choice",
        question: {
          pl: "Kałuża wyschła. Uczeń mówi, że bakteria zginęła, bo rzęska nie umie czekać. Co poprawić?",
          ua: "Калюжа висохла. Учень каже, що бактерія загинула, бо джгутик не вміє чекати. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "złe warunki znosi przetrwalnik; rzęska służy do ruchu", ua: "погані умови зносить спора; джгутик служить для руху" } },
          { id: "b", label: { pl: "tak — bez wody każda bakteria staje się wirusem", ua: "так — без води кожна бактерія стає вірусом" } },
          { id: "c", label: { pl: "tak — otoczka śluzowa jest jądrem i ginie pierwsza", ua: "так — слизова оболонка є ядром і гине першою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sucho nie zamienia bakterii w wirusa. Przetrwalnik znosi złe warunki. Rzęska służy do ruchu.",
              ua: "Сухість не перетворює бактерію на вірус. Спора зносить погані умови. Джгутик служить для руху."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Otoczka śluzowa chroni i pomaga się przyczepić. Jądra bakteria nie ma. Na złe warunki jest przetrwalnik.",
              ua: "Слизова оболонка захищає і допомагає прикріпитися. Ядра бактерія не має. На погані умови є спора."
            }
          }
        ],
        explanation: {
          pl: "Przetrwalnik znosi złe warunki. Rzęska służy do ruchu.",
          ua: "Спора зносить погані умови. Джгутик служить для руху."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pożytek i lek", ua: "Поняття. Користь і ліки" },
      visual: vizGh("L18_Bakterie_znaczenie_i_zdrowie", "l18-antybiotyki.png", {
        alt: { pl: "Antybiotyk przy bakterii i przekreślony przy wirusie", ua: "Антибіотик біля бактерії і перекреслений біля вірусу" },
        title: { pl: "Lek na bakterie. Nie na wirusa.", ua: "Ліки на бактерії. Не на вірус." },
        prompt: { pl: "Plansza lekcji 18: antybiotyk i wirus." }
      }),
      text: {
        pl: [
          "Pożyteczne bakterie są w jogurcie i serze, wiążą azot przy korzeniach, rozkładają szczątki jako saprobionty i żyją we florze jelitowej.",
          "Tylko niektóre są chorobotwórcze, na przykład przy anginie i próchnicy. Diagnozę stawia lekarz. Higiena i pasteryzacja ograniczają groźne drobnoustroje. Przetrwalnik może zostać.",
          ["", em("Antybiotyki"), " niszczą bakterie albo hamują ich wzrost. Na wirusy nie działają. Bierze się je, gdy lekarz każe, do końca kuracji. Nie dzieli się ich z kolegą."]
        ],
        ua: [
          "Корисні бактерії є в йогурті і сирі, зв’язують азот біля коренів, розкладають рештки як сапробіонти і живуть у кишковій мікрофлорі.",
          "Лише деякі хвороботворні, наприклад при ангіні і карієсі. Діагноз ставить лікар. Гігієна і пастеризація обмежують небезпечні мікроби. Спора може лишитися.",
          ["", em("Антибіотики"), " знищують бактерії або гальмують їхній ріст. На віруси не діють. Їх беруть, коли лікар сказав, до кінця курсу. Ними не діляться з другом."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie strony pudełka", ua: "Приклад. Два боки коробки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jogurt i flora jelitowa to bakterie, które pomagają."],
            ua: ["Йогурт і кишкова мікрофлора — це бактерії, які допомагають."]
          }
        },
        {
          text: {
            pl: ["Angina bywa bakteryjna. O tym mówi lekarz, nie szafka."],
            ua: ["Ангіна буває бактеріальною. Про це каже лікар, не шафка."]
          }
        },
        {
          text: {
            pl: ["Grypa jest wirusem. Antybiotyk z apteczki jej nie leczy."],
            ua: ["Грип є вірусом. Антибіотик з аптечки його не лікує."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Na kogo lek", ua: "Коротке питання. На кого ліки" },
      task: {
        id: "r3-g4",
        type: "single-choice",
        question: {
          pl: "Na co działają antybiotyki?",
          ua: "На що діють антибіотики?"
        },
        options: [
          { id: "a", label: { pl: "na bakterie; na wirusy nie, i przepisuje je lekarz", ua: "на бактерії; на віруси ні, і призначає їх лікар" } },
          { id: "b", label: { pl: "na grypę, ospę i odrę, bo to też choroby", ua: "на грип, вітрянку і кір, бо це теж хвороби" } },
          { id: "c", label: { pl: "na wszystkie bakterie w jogurcie, więc jogurtu się nie je", ua: "на всі бактерії в йогурті, тож йогурт не їдять" } }
        ],
        answer: "a",
        hint: {
          pl: "Lek z lekcji 18 celuje w bakterie, nie w wirusa.",
          ua: "Ліки з уроку 18 цілять у бактерії, не у вірус."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Grypa, ospa wietrzna i odra są wirusowe. Antybiotyk na wirusy nie działa. Przepisuje go lekarz na bakterie.",
              ua: "Грип, вітрянка і кір є вірусними. Антибіотик на віруси не діє. Призначає його лікар на бактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakterie jogurtu są pożyteczne. Antybiotyk nie jest powodem, by nie jeść jogurtu. Lek działa na bakterie, gdy lekarz go przepisze.",
              ua: "Бактерії йогурту корисні. Антибіотик не є причиною не їсти йогурт. Ліки діють на бактерії, коли лікар їх призначив."
            }
          }
        ],
        explanation: {
          pl: "Antybiotyki działają na bakterie, nie na wirusy. Przepisuje je lekarz.",
          ua: "Антибіотики діють на бактерії, не на віруси. Призначає їх лікар."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Grypa z szafki", ua: "Типова помилка. Грип із шафки" },
      claim: {
        pl: "„Przy grypie biorę antybiotyk na wszelki wypadek.”",
        ua: "«При грипі беру антибіотик про всяк випадок.»"
      },
      text: {
        pl: [
          "Grypa jest chorobą wirusową. Antybiotyk na wirusy nie działa.",
          "Dawki nie dobiera się samemu. Lekarz decyduje, czy to zakażenie bakteryjne."
        ],
        ua: [
          "Грип є вірусною хворобою. Антибіотик на віруси не діє.",
          "Дозу не добирають самотужки. Лікар вирішує, чи це бактеріальне зараження."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Połowa kalendarza", ua: "Сам. Половина календаря" },
      task: {
        id: "r3-p4",
        type: "single-choice",
        question: {
          pl: "Lekarz kazał dokończyć antybiotyk. Uczeń czuje się lepiej i oddaje resztę koledze z kaszlem. Co poprawić?",
          ua: "Лікар сказав докінчити антибіотик. Учень почувається краще і віддає решту другу з кашлем. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kurację kończy się do końca i nie dzieli leku; kaszel kolegi może być wirusem", ua: "курс закінчують до кінця і ліками не діляться; кашель друга може бути вірусом" } },
          { id: "b", label: { pl: "tak — krótsza kuracja jest bezpieczniejsza dla wszystkich bakterii", ua: "так — коротший курс безпечніший для всіх бактерій" } },
          { id: "c", label: { pl: "tak — kolega z kaszlem dostaje kapsyd, więc lek pasuje", ua: "так — друг із кашлем дістає капсид, тож ліки пасують" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Przerwana kuracja zostawia część bakterii. Potem lek słabiej działa. To antybiotykooporność. Kurację kończy się tak, jak kazał lekarz.",
              ua: "Перерваний курс лишає частину бактерій. Потім ліки діють слабше. Це антибіотикорезистентність. Курс закінчують так, як сказав лікар."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd należy do wirusa. Antybiotyk na wirusy nie działa. Lekiem się nie dzieli, a kurację kończy do końca.",
              ua: "Капсид належить вірусу. Антибіотик на віруси не діє. Ліками не діляться, а курс закінчують до кінця."
            }
          }
        ],
        explanation: {
          pl: "Kurację kończy się do końca i nie dzieli leku. Antybiotyk nie leczy wirusa.",
          ua: "Курс закінчують до кінця і ліками не діляться. Антибіотик не лікує вірус."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Protisty", ua: "Поняття. Протисти" },
      visual: vizGh("L19_Protisty", "l19-zacznijmy.png", {
        alt: { pl: "Euglena, pantofelek i pełzak w kropli", ua: "Евглена, туфелька і амеба в краплі" },
        title: { pl: "Jądro. Trzy sposoby ruchu.", ua: "Ядро. Три способи руху." },
        prompt: { pl: "Plansza lekcji 19: trzy protisty." }
      }),
      text: {
        pl: [
          "Protisty są jądrowe i zwykle jednokomórkowe. To nie bakterie i nie wirusy.",
          ["", em("Euglena"), " ma jedną wić, chloroplasty i plamkę oczną. Na świetle fotosyntetyzuje, w ciemności może brać gotowy pokarm. To odżywianie mieszane. Zielony kolor nie robi z niej rośliny."],
          ["", em("Pantofelek"), " ma wiele rzęsek i jest cudzożywny. ", em("Pełzak"), " nie ma stałego kształtu: nibynóżkami pełza i otacza pokarm. Też jest cudzożywny."],
          "Glony są samożywne. W wodzie dają tlen i pokarm."
        ],
        ua: [
          "Протисти є ядерними і зазвичай одноклітинними. Це не бактерії і не віруси.",
          ["", em("Евглена"), " має один джгутик, хлоропласти і вічко. На світлі фотосинтезує, в темряві може брати готову поживу. Це змішане живлення. Зелений колір не робить із неї рослину."],
          ["", em("Інфузорія-туфелька"), " має багато війок і є гетеротрофом. ", em("Амеба"), " не має сталої форми: несправжніми ніжками повзе і оточує поживу. Теж є гетеротрофом."],
          "Водорості саможивні. У воді дають кисень і поживу."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy ruchy", ua: "Приклад. Три рухи" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Euglena płynie jedną wicią ku światłu. Ma chloroplasty i jądro."],
            ua: ["Евглена пливе одним джгутиком до світла. Має хлоропласти і ядро."]
          }
        },
        {
          text: {
            pl: ["Pantofelek nagania pokarm wieloma rzęskami."],
            ua: ["Туфелька наганяє поживу багатьма війками."]
          }
        },
        {
          text: {
            pl: ["Pełzak zmienia kształt i otacza pokarm nibynóżkami."],
            ua: ["Амеба змінює форму і оточує поживу несправжніми ніжками."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Zielona, ale nie roślina", ua: "Коротке питання. Зелена, але не рослина" },
      task: {
        id: "r3-g5",
        type: "single-choice",
        question: {
          pl: "Czym euglena różni się od pantofelka?",
          ua: "Чим евглена відрізняється від туфельки?"
        },
        options: [
          { id: "a", label: { pl: "euglena ma wić i chloroplasty, odżywianie mieszane; pantofelek ma rzęski i jest cudzożywny", ua: "евглена має джгутик і хлоропласти, змішане живлення; туфелька має війки і є гетеротрофом" } },
          { id: "b", label: { pl: "obie są bakteriami, bo żyją w wodzie", ua: "обидві є бактеріями, бо живуть у воді" } },
          { id: "c", label: { pl: "euglena jest rośliną, bo jest zielona", ua: "евглена є рослиною, бо зелена" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedna ma chloroplasty i jedną wić. Druga ma wiele rzęsek.",
          ua: "Одна має хлоропласти і один джгутик. Друга має багато війок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda nie robi bakterii. Euglena i pantofelek mają jądro. Bakteria jądra nie ma.",
              ua: "Вода не робить бактерію. Евглена і туфелька мають ядро. Бактерія ядра не має."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielony kolor nie przenosi eugleny do roślin. Zostaje protistem. Ma odżywianie mieszane.",
              ua: "Зелений колір не переносить евглену до рослин. Вона лишається протистом. Має змішане живлення."
            }
          }
        ],
        explanation: {
          pl: "Euglena ma wić, chloroplasty i odżywianie mieszane. Pantofelek ma rzęski i jest cudzożywny.",
          ua: "Евглена має джгутик, хлоропласти і змішане живлення. Туфелька має війки і є гетеротрофом."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Bez jądra", ua: "Типова помилка. Без ядра" },
      claim: {
        pl: "„Protisty są małe jak bakterie, więc też nie mają jądra.”",
        ua: "«Протисти малі, як бактерії, тож теж не мають ядра.»"
      },
      text: {
        pl: [
          "Rozmiar nie zabiera jądra.",
          "Protisty są jądrowe. Bakteria jądra nie ma."
        ],
        ua: [
          "Розмір не забирає ядро.",
          "Протисти є ядерними. Бактерія ядра не має."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Trzy podpisy", ua: "Сам. Три підписи" },
      task: {
        id: "r3-p5",
        type: "single-choice",
        question: {
          pl: "W kropli widać organizm bez stałego kształtu. Otacza pokarm wypustkami i ma jądro. Uczeń podpisuje go jako wirusa. Co poprawić?",
          ua: "У краплі видно організм без сталої форми. Оточує поживу виростами і має ядро. Учень підписує його як вірус. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to pełzak: protist z nibynóżkami i jądrem, cudzożywny", ua: "це амеба: протист із несправжніми ніжками і ядром, гетеротроф" } },
          { id: "b", label: { pl: "tak — brak stałego kształtu znaczy kapsyd", ua: "так — брак сталої форми означає капсид" } },
          { id: "c", label: { pl: "tak — to euglena, bo każda komórka w wodzie jest zielona", ua: "так — це евглена, бо кожна клітина у воді зелена" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd jest płaszczem wirusa, a wirus nie ma jądra. Zmiana kształtu i nibynóżki pasują do pełzaka.",
              ua: "Капсид є оболонкою віруса, а вірус не має ядра. Зміна форми і несправжні ніжки пасують до амеби."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Euglena ma wić i chloroplasty. Organizm bez stałego kształtu, który otacza pokarm, to pełzak.",
              ua: "Евглена має джгутик і хлоропласти. Організм без сталої форми, який оточує поживу, — це амеба."
            }
          }
        ],
        explanation: {
          pl: "Pełzak jest protistem. Ma jądro i nibynóżki. Jest cudzożywny.",
          ua: "Амеба є протистом. Має ядро і несправжні ніжки. Є гетеротрофом."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Grzyb i porost", ua: "Поняття. Гриб і лишайник" },
      visual: vizGh("L20_Grzyby_i_porosty", "l20-porost.png", {
        alt: { pl: "Porost na korze: grzyb i glon", ua: "Лишайник на корі: гриб і водорість" },
        title: { pl: "Dwaj partnerzy. Nie mech.", ua: "Два партнери. Не мох." },
        prompt: { pl: "Plansza lekcji 20: porost." }
      }),
      text: {
        pl: [
          ["Ciało grzyba budują ", em("strzępki"), ". Tworzą ", em("grzybnię"), ". ", em("Owocnik"), " to kapelusz, trzon i blaszki. Zarodniki sypią się spod kapelusza."],
          "Drożdże są jednokomórkowymi grzybami. Grzyby są cudzożywne: saprobiont bierze szczątki, pasożyt żywego gospodarza, a mikoryza jest współpracą strzępek z korzeniem.",
          ["", em("Porost"), " to grzyb oraz glon albo sinice. Bywa bioindykatorem powietrza. To nie mech i nie roślina. Nieznanego grzyba się nie je."]
        ],
        ua: [
          ["Тіло гриба будують ", em("гіфи"), ". Вони утворюють ", em("грибницю"), ". ", em("Плодове тіло"), " — це шапинка, ніжка і пластинки. Спори сиплються з-під шапинки."],
          "Дріжджі є одноклітинними грибами. Гриби гетеротрофні: сапробіонт бере рештки, паразит — живого хазяїна, а мікориза є співпрацею гіфів із коренем.",
          ["", em("Лишайник"), " — це гриб і водорість або ціанобактерії. Буває біоіндикатором повітря. Це не мох і не рослина. Невідомого гриба не їдять."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kapelusz i kora", ua: "Приклад. Шапинка і кора" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pod ziemią pracuje grzybnia. Nad nią widać owocnik."],
            ua: ["Під землею працює грибниця. Над нею видно плодове тіло."]
          }
        },
        {
          text: {
            pl: ["Grzyb na martwym pniu jest saprobiontem. Przy korzeniu mikoryza pomaga obu stronom."],
            ua: ["Гриб на мертвому пні є сапробіонтом. Біля кореня мікориза допомагає обом сторонам."]
          }
        },
        {
          text: {
            pl: ["Szara skorupa na korze może być porostem. Nieznanego kapelusza nie zjesz."],
            ua: ["Сіра кірка на корі може бути лишайником. Невідомої шапинки не з’їси."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwaj partnerzy", ua: "Коротке питання. Два партнери" },
      task: {
        id: "r3-g6",
        type: "single-choice",
        question: {
          pl: "Czym porost różni się od samego grzyba?",
          ua: "Чим лишайник відрізняється від самого гриба?"
        },
        options: [
          { id: "a", label: { pl: "porost to grzyb oraz glon albo sinice; grzyb sam buduje grzybnię ze strzępek", ua: "лишайник — це гриб і водорість або ціанобактерії; гриб сам будує грибницю з гіфів" } },
          { id: "b", label: { pl: "to samo: każdy kapelusz jest porostem", ua: "те саме: кожна шапинка є лишайником" } },
          { id: "c", label: { pl: "porost jest mchem, bo rośnie na korze", ua: "лишайник є мохом, бо росте на корі" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch partnerów, nie samej szarej plamy.",
          ua: "Шукай двох партнерів, не саму сіру пляму."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapelusz jest owocnikiem grzyba. Porost ma dwóch partnerów: grzyb oraz glon albo sinice.",
              ua: "Шапинка є плодовим тілом гриба. Лишайник має двох партнерів: гриб і водорість або ціанобактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech jest rośliną z późniejszego działu. Porost nie należy do roślin. To grzyb z glonem albo sinicami.",
              ua: "Мох є рослиною з пізнішого розділу. Лишайник не належить до рослин. Це гриб із водорістю або ціанобактеріями."
            }
          }
        ],
        explanation: {
          pl: "Porost to grzyb oraz glon albo sinice. Grzyb sam buduje grzybnię ze strzępek.",
          ua: "Лишайник — це гриб і водорість або ціанобактерії. Гриб сам будує грибницю з гіфів."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kapelusz to cały grzyb", ua: "Типова помилка. Шапинка — це весь гриб" },
      claim: {
        pl: "„Grzyb to kapelusz. Pod ziemią jest korzeń.”",
        ua: "«Гриб — це шапинка. Під землею є корінь.»"
      },
      text: {
        pl: [
          "Kapelusz należy do owocnika.",
          "Pod ziemią jest grzybnia ze strzępek, nie korzeń rośliny."
        ],
        ua: [
          "Шапинка належить до плодового тіла.",
          "Під землею є грибниця з гіфів, не корінь рослини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cukier przy korzeniu", ua: "Сам. Цукор біля кореня" },
      task: {
        id: "r3-p6",
        type: "single-choice",
        question: {
          pl: "Strzępki oplatają korzeń. Grzyb dostaje cukry, roślina wodę i sole. Uczeń nazywa to pasożytem, bo grzyb dotyka żywej rośliny. Co poprawić?",
          ua: "Гіфи оплітають корінь. Гриб дістає цукри, рослина — воду і солі. Учень називає це паразитом, бо гриб торкається живої рослини. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to mikoryza: obie strony zyskują; pasożyt bierze pokarm i żywy gospodarz traci", ua: "це мікориза: обидві сторони виграють; паразит бере поживу, і живий хазяїн втрачає" } },
          { id: "b", label: { pl: "tak — każdy kontakt z korzeniem jest pasożytnictwem", ua: "так — кожен дотик до кореня є паразитизмом" } },
          { id: "c", label: { pl: "tak — to porost, bo przy korzeniu jest glon", ua: "так — це лишайник, бо біля кореня є водорість" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dotyk nie wybiera pasożyta. W mikoryzie obie strony zyskują. Pasożyt bierze pokarm z żywego gospodarza.",
              ua: "Дотик не вибирає паразита. У мікоризі обидві сторони виграють. Паразит бере поживу з живого хазяїна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost to grzyb oraz glon albo sinice, często na korze albo kamieniu. Współpraca strzępek z korzeniem to mikoryza.",
              ua: "Лишайник — це гриб і водорість або ціанобактерії, часто на корі чи камені. Співпраця гіфів із коренем — це мікориза."
            }
          }
        ],
        explanation: {
          pl: "Mikoryza jest współpracą. Obie strony zyskują. Pasożyt bierze pokarm z żywego gospodarza.",
          ua: "Мікориза є співпрацею. Обидві сторони виграють. Паразит бере поживу з живого хазяїна."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Sześć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "Шість питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Sześć kafelków", ua: "Перевірка 1. Шість плиток" },
      task: {
        id: "r3-t1",
        type: "single-choice",
        question: {
          pl: "Uczeń dopisuje wirusy jako szóste królestwo i wykreśla protisty. Zostają: bakterie, wirusy, grzyby, rośliny, zwierzęta. Co pasuje do lekcji?",
          ua: "Учень дописує віруси як шосте царство і викреслює протистів. Лишаються: бактерії, віруси, гриби, рослини, тварини. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "protisty wracają do piątki; wirusy zostają poza królestwami, bo nie są komórkami", ua: "протисти повертаються до п’ятірки; віруси лишаються поза царствами, бо не є клітинами" } },
          { id: "b", label: { pl: "tak — wirusy zastępują protisty, bo oba są małe", ua: "так — віруси замінюють протистів, бо обидва малі" } },
          { id: "c", label: { pl: "tak — zostają tylko rośliny i zwierzęta", ua: "так — лишаються лише рослини і тварини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rozmiar nie zamienia królestw. Protisty są królestwem. Wirusy nie są komórkami i stoją poza pięcioma królestwami.",
              ua: "Розмір не замінює царства. Протисти є царством. Віруси не є клітинами і стоять поза п’ятьма царствами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rośliny i zwierzęta to dwa z pięciu królestw. Zostają też bakterie, protisty i grzyby. Wirusy stoją poza nimi.",
              ua: "Рослини і тварини — це два з п’яти царств. Лишаються також бактерії, протисти і гриби. Віруси стоять поза ними."
            }
          }
        ],
        explanation: {
          pl: "Pięć królestw obejmuje protisty. Wirusy stoją poza nimi.",
          ua: "П’ять царств охоплюють протистів. Віруси стоять поза ними."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Klamka", ua: "Перевірка 2. Ручка" },
      task: {
        id: "r3-t2",
        type: "single-choice",
        question: {
          pl: "Wirus grypy leży na klamce. Uczeń mówi, że tam je i oddycha, aż urośnie w bakterię. Co pasuje do lekcji?",
          ua: "Вірус грипу лежить на ручці. Учень каже, що там він їсть і дихає, аж виросте в бактерію. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "sam nie je i nie oddycha; namnaża się tylko w komórce gospodarza i nie staje się bakterią", ua: "сам не їсть і не дихає; розмножується лише в клітині хазяїна і не стає бактерією" } },
          { id: "b", label: { pl: "tak — na klamce rośnie mu jądro", ua: "так — на ручці в нього росте ядро" } },
          { id: "c", label: { pl: "tak — kapsyd jest ścianą komórkową bakterii", ua: "так — капсид є клітинною стінкою бактерії" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirus nie ma jądra. Na klamce sam nie wykonuje czynności życiowych. Namnaża się w komórce gospodarza.",
              ua: "Вірус не має ядра. На ручці сам не виконує життєвих функцій. Розмножується в клітині хазяїна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd jest płaszczem białkowym wirusa. Ściana komórkowa należy do komórki bakterii. Wirus nie staje się bakterią.",
              ua: "Капсид є білковою оболонкою віруса. Клітинна стінка належить клітині бактерії. Вірус не стає бактерією."
            }
          }
        ],
        explanation: {
          pl: "Wirus sam nie je i nie oddycha. Namnaża się tylko w komórce gospodarza.",
          ua: "Вірус сам не їсть і не дихає. Розмножується лише в клітині хазяїна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Przecinek", ua: "Перевірка 3. Кома" },
      task: {
        id: "r3-t3",
        type: "single-choice",
        question: {
          pl: "Pod mikroskopem widać komórkę zgiętą jak przecinek. Nie ma jądra, a nić DNA leży w cytozolu. Uczeń nazywa ją krętkiem i wirusem naraz. Co pasuje do lekcji?",
          ua: "Під мікроскопом видно клітину, зігнуту як кома. Немає ядра, а нитка ДНК лежить у цитозолі. Учень називає її спірилою і вірусом одразу. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to bakteria o kształcie przecinka; krętki są spiralą, a wirus nie jest komórką", ua: "це бактерія форми вібріона; спірили є спіраллю, а вірус не є клітиною" } },
          { id: "b", label: { pl: "tak — każdy kształt bez jądra jest wirusem", ua: "так — кожна форма без ядра є вірусом" } },
          { id: "c", label: { pl: "tak — przecinek i spirala to ten sam kształt", ua: "так — кома і спіраль — це та сама форма" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Brak jądra nie robi wirusa. To komórka bakterii, a nić DNA leży w cytozolu. Kształt przecinka to przecinki.",
              ua: "Брак ядра не робить вірус. Це клітина бактерії, а нитка ДНК лежить у цитозолі. Форма коми — це вібріони."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Przecinki są zgięte jak przecinek. Krętki są spiralą. To dwa kształty bakterii.",
              ua: "Вібріони зігнуті, як кома. Спірили є спіраллю. Це дві форми бактерій."
            }
          }
        ],
        explanation: {
          pl: "Zgięta komórka bez jądra to przecinek, czyli bakteria. Krętki są spiralą. Wirus nie jest komórką.",
          ua: "Зігнута клітина без ядра — це вібріон, тобто бактерія. Спірили є спіраллю. Вірус не є клітиною."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Jogurt i grypa", ua: "Перевірка 4. Йогурт і грип" },
      task: {
        id: "r3-t4",
        type: "single-choice",
        question: {
          pl: "W domu jest jogurt i ktoś z grypą. Uczeń wyrzuca jogurt, „bo tam bakterie”, i bierze antybiotyk z szafki. Co pasuje do lekcji?",
          ua: "Вдома є йогурт і хтось із грипом. Учень викидає йогурт, «бо там бактерії», і бере антибіотик із шафки. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "bakterie jogurtu są pożyteczne; grypa jest wirusem, więc antybiotyk z szafki jej nie leczy", ua: "бактерії йогурту корисні; грип є вірусом, тож антибіотик із шафки його не лікує" } },
          { id: "b", label: { pl: "tak — każda bakteria jest chorobotwórcza, a grypę leczy antybiotyk", ua: "так — кожна бактерія хвороботворна, а грип лікує антибіотик" } },
          { id: "c", label: { pl: "tak — jogurt jest porostem, więc nie jest jedzeniem", ua: "так — йогурт є лишайником, тож не є їжею" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tylko niektóre bakterie są chorobotwórcze. Jogurtowe są pożyteczne. Grypa jest wirusowa, a antybiotyk na wirusy nie działa. Lekarz decyduje o leku.",
              ua: "Лише деякі бактерії хвороботворні. Йогуртові корисні. Грип є вірусним, а антибіотик на віруси не діє. Лікар вирішує про ліки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost to grzyb z glonem albo sinicami. Jogurt zawdzięcza smak pożytecznym bakteriom. Antybiotyk nie leczy grypy.",
              ua: "Лишайник — це гриб із водорістю або ціанобактеріями. Йогурт завдячує смаком корисним бактеріям. Антибіотик не лікує грип."
            }
          }
        ],
        explanation: {
          pl: "Bakterie jogurtu są pożyteczne. Antybiotyk nie leczy grypy i nie bierze się go z szafki.",
          ua: "Бактерії йогурту корисні. Антибіотик не лікує грип і не беруть його з шафки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wiele rzęsek", ua: "Перевірка 5. Багато війок" },
      task: {
        id: "r3-t5",
        type: "single-choice",
        question: {
          pl: "Organizm w kropli ma kształt pantofla, wiele rzęsek i jądro. Nagania nimi bakterie. Uczeń mówi, że to bakteria, bo je bakterie. Co pasuje do lekcji?",
          ua: "Організм у краплі має форму туфлі, багато війок і ядро. Наганяє ними бактерії. Учень каже, що це бактерія, бо їсть бактерії. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to pantofelek: protist z jądrem i rzęskami, cudzożywny", ua: "це інфузорія-туфелька: протист із ядром і війками, гетеротроф" } },
          { id: "b", label: { pl: "tak — kto zjada bakterie, sam jest bakterią", ua: "так — хто їсть бактерії, сам є бактерією" } },
          { id: "c", label: { pl: "tak — wiele rzęsek znaczy jedną wić eugleny", ua: "так — багато війок означає один джгутик евглени" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pokarm nie zmienia królestwa. Pantofelek ma jądro i jest protistem. Bakteria jądra nie ma.",
              ua: "Пожива не змінює царство. Туфелька має ядро і є протистом. Бактерія ядра не має."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Euglena ma jedną wić i chloroplasty. Wiele rzęsek i kształt pantofla pasują do pantofelka.",
              ua: "Евглена має один джгутик і хлоропласти. Багато війок і форма туфлі пасують до туфельки."
            }
          }
        ],
        explanation: {
          pl: "Pantofelek jest protistem. Ma jądro i wiele rzęsek. Jest cudzożywny.",
          ua: "Інфузорія-туфелька є протистом. Має ядро і багато війок. Є гетеротрофом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. Szara skorupa", ua: "Перевірка 6. Сіра кірка" },
      task: {
        id: "r3-t6",
        type: "single-choice",
        question: {
          pl: "Na kamieniu rośnie szara skorupa. Obok w lesie leży nieznany kapelusz. Uczeń zrywa kapelusz „bo to roślina” i nazywa skorupę mchem. Co pasuje do lekcji?",
          ua: "На камені росте сіра кірка. Поруч у лісі лежить невідома шапинка. Учень зриває шапинку, «бо це рослина», і називає кірку мохом. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "skorupa może być porostem, nie mchem; nieznanego grzyba się nie je, bo kapelusz to owocnik, nie roślina", ua: "кірка може бути лишайником, не мохом; невідомого гриба не їдять, бо шапинка — це плодове тіло, не рослина" } },
          { id: "b", label: { pl: "tak — każda skorupa na kamieniu jest mchem, a kapelusz jest liściem", ua: "так — кожна кірка на камені є мохом, а шапинка є листком" } },
          { id: "c", label: { pl: "tak — porost jest wirusem, więc kapelusz jest bezpieczny", ua: "так — лишайник є вірусом, тож шапинка безпечна" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech jest rośliną z późniejszego działu. Szara skorupa na kamieniu może być porostem: grzyb oraz glon albo sinice. Kapelusz jest owocnikiem, nie liściem. Nieznanego grzyba się nie je.",
              ua: "Мох є рослиною з пізнішого розділу. Сіра кірка на камені може бути лишайником: гриб і водорість або ціанобактерії. Шапинка є плодовим тілом, не листком. Невідомого гриба не їдять."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost nie jest wirusem. To grzyb z glonem albo sinicami. Nieznany kapelusz zostaje owocnikiem i się go nie je.",
              ua: "Лишайник не є вірусом. Це гриб із водорістю або ціанобактеріями. Невідома шапинка лишається плодовим тілом, і її не їдять."
            }
          }
        ],
        explanation: {
          pl: "Porost to grzyb oraz glon albo sinice, nie mech. Nieznanego grzyba się nie je.",
          ua: "Лишайник — це гриб і водорість або ціанобактерії, не мох. Невідомого гриба не їдять."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L20_Grzyby_i_porosty", "l20-owocnik.png", {
        alt: { pl: "Owocnik z kapeluszem, trzonem i blaszkami", ua: "Плодове тіло з шапинкою, ніжкою і пластинками" },
        title: { pl: "Grzybnia w glebie. Owocnik nad nią.", ua: "Грибниця в ґрунті. Плодове тіло над нею." },
        prompt: { pl: "Plansza lekcji 20: owocnik." }
      }),
      text: {
        pl: [
          "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta. Wirusy poza nimi. Nazwa dwuczłonowa: rodzaj, potem gatunek.",
          "Wirus: kwas nukleinowy i kapsyd, tylko w komórce gospodarza. Bakteria: komórka bez jądra, nić DNA w cytozolu.",
          "Część bakterii jest pożyteczna. Antybiotyk działa na bakterie, nie na wirusy. Przepisuje go lekarz.",
          "Protisty mają jądro. Grzyb: strzępki i grzybnia. Porost to grzyb oraz glon albo sinice. Nieznanego grzyba się nie je. Następny dział to tkanki i organy roślin."
        ],
        ua: [
          "П’ять царств: бактерії, протисти, гриби, рослини, тварини. Віруси поза ними. Двочленна назва: рід, потім вид.",
          "Вірус: нуклеїнова кислота і капсид, лише в клітині хазяїна. Бактерія: клітина без ядра, нитка ДНК у цитозолі.",
          "Частина бактерій корисна. Антибіотик діє на бактерії, не на віруси. Призначає його лікар.",
          "Протисти мають ядро. Гриб: гіфи і грибниця. Лишайник — це гриб і водорість або ціанобактерії. Невідомого гриба не їдять. Наступний розділ — тканини і органи рослин."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wymienię pięć królestw i odłożę wirusy na bok.", ua: "Назву п’ять царств і відкладу віруси набік." },
        { pl: "Powiem, że wirus ma kwas nukleinowy i kapsyd oraz namnaża się tylko w gospodarzu.", ua: "Скажу, що вірус має нуклеїнову кислоту і капсид та розмножується лише в хазяїні." },
        { pl: "Powiem, że bakteria jest komórką bez jądra.", ua: "Скажу, що бактерія є клітиною без ядра." },
        { pl: "Odróżnię bakterie pożyteczne od chorobotwórczych i powiem, kiedy antybiotyk.", ua: "Відрізню корисні бактерії від хвороботворних і скажу, коли антибіотик." },
        { pl: "Poznam euglenę, pantofelka i pełzaka.", ua: "Впізнаю евглену, туфельку і амебу." },
        { pl: "Złożę grzybnię, owocnik i porost oraz nie zjem nieznanego grzyba.", ua: "Зберу грибницю, плодове тіло і лишайник та не з’їм невідомого гриба." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
