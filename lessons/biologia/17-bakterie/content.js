function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L17_Jak_zyja_bakterie/images/";

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
      heading: { pl: "Misja: komórka bez jądra", ua: "Місія: клітина без ядра" },
      visual: vizGh("l17-zacznijmy.png", {
        alt: { pl: "Bakterie kilku kształtów", ua: "Бактерії кількох форм" },
        title: { pl: "Królestwo bakterii. Dziś: jak żyją.", ua: "Царство бактерій. Сьогодні: як живуть." },
        prompt: { pl: "Plansza lekcji 17: bakterie kilku kształtów." }
      }),
      text: {
        pl: [
          "To lekcja 17: jak żyją bakterie. Bakterie są jednym z pięciu królestw z lekcji 15. Komórkę bakteryjną porównywałeś już na lekcji 8.",
          "Dziś kształty, odżywianie, podział, przetrwalniki, rzęski i otoczka. Choroby i antybiotyki zostają na lekcję 18.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 17: як живуть бактерії. Бактерії є одним із п’яти царств з уроку 15. Бактерійну клітину ти вже порівнював на уроці 8.",
          "Сьогодні форми, живлення, поділ, спори, джгутики і оболонка. Хвороби й антибіотики лишаються на урок 18.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "komórka bezjądrowa", ua: "без’ядерна клітина — нитка ДНК у цитозолі, не ядро" },
        { pl: "ziarenkowce", ua: "коки — кульки" },
        { pl: "pałeczki", ua: "палички — видовжені" },
        { pl: "przecinki", ua: "вібріони — зігнуті, як кома" },
        { pl: "krętki", ua: "спірили — спіраль" },
        { pl: "samożywne", ua: "саможивні — самі утворюють органічні сполуки" },
        { pl: "cudzożywne", ua: "гетеротрофні — готова пожива" },
        { pl: "przetrwalnik", ua: "спора бактерії — погані умови" },
        { pl: "rzęska", ua: "джгутик — рух" },
        { pl: "otoczka śluzowa", ua: "слизова оболонка — захист і прикріплення" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nić DNA zamiast jądra", ua: "Поняття. Нитка ДНК замість ядра" },
      visual: vizGh("l17-nic-dna.png", {
        alt: { pl: "Bakteria z nicią DNA w cytozolu", ua: "Бактерія з ниткою ДНК у цитозолі" },
        title: { pl: "Jądra nie ma. Nić DNA leży w cytozolu.", ua: "Ядра немає. Нитка ДНК лежить у цитозолі." },
        prompt: { pl: "Plansza lekcji 17: komórka bakteryjna i nić DNA." }
      }),
      text: {
        pl: [
          [em("Bakteria"), " to ", em("komórka bezjądrowa"), ". Zamiast jądra w cytozolu leży ", em("nić DNA"), "."],
          "Ma błonę, cytozol i rybosomy. Na modelu widać też ścianę komórkową. Nie ma mitochondriów ani chloroplastów jak komórka roślinna z lekcji 7.",
          "To komórka z królestwa bakterii, nie wirus z lekcji 16."
        ],
        ua: [
          [em("Бактерія"), " — це ", em("без’ядерна клітина"), ". Замість ядра в цитозолі лежить ", em("нитка ДНК"), "."],
          "Має мембрану, цитозоль і рибосоми. На моделі видно також клітинну стінку. Немає мітохондрій чи хлоропластів, як у рослинної клітини з уроку 7.",
          "Це клітина з царства бактерій, не вірус з уроку 16."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Gdzie jest DNA", ua: "Приклад. Де є ДНК" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W komórce zwierzęcej DNA jest w jądrze. U bakterii nić DNA leży luzem w cytozolu."],
            ua: ["У тваринній клітині ДНК є в ядрі. У бактерії нитка ДНК лежить вільно в цитозолі."]
          }
        },
        {
          text: {
            pl: ["Błona, cytozol i rybosomy są. Jądra na modelu nie szukasz."],
            ua: ["Мембрана, цитозоль і рибосоми є. Ядра на моделі не шукаєш."]
          }
        },
        {
          text: {
            pl: ["Mitochondrium i chloroplast rośliny to nie części tej komórki."],
            ua: ["Мітохондрія і хлоропласт рослини — це не частини цієї клітини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie DNA?", ua: "Коротке питання. Де ДНК?" },
      task: {
        id: "l17-g1",
        type: "single-choice",
        question: {
          pl: "Gdzie u bakterii jest materiał genetyczny?",
          ua: "Де в бактерії генетичний матеріал?"
        },
        options: [
          { id: "a", label: { pl: "nić DNA leży w cytozolu, jądra nie ma", ua: "нитка ДНК лежить у цитозолі, ядра немає" } },
          { id: "b", label: { pl: "w jądrze, jak w komórce zwierzęcej", ua: "в ядрі, як у тваринній клітині" } },
          { id: "c", label: { pl: "w kapsydzie, bo bakteria jest wirusem", ua: "у капсиді, бо бактерія є вірусом" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj nici w cytozolu, nie worka z jądrem i nie wirusa.",
          ua: "Шукай нитку в цитозолі, не мішок із ядром і не вірус."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro jest u komórki zwierzęcej i roślinnej. Bakteria jest bezjądrowa: nić DNA leży w cytozolu.",
              ua: "Ядро є в тваринної і рослинної клітини. Бактерія без’ядерна: нитка ДНК лежить у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd jest osłonką wirusa. Bakteria jest komórką, a jej DNA to nić w cytozolu.",
              ua: "Капсид є оболонкою вірусу. Бактерія є клітиною, а її ДНК — це нитка в цитозолі."
            }
          }
        ],
        explanation: {
          pl: "Bakteria nie ma jądra. Materiał genetyczny to nić DNA w cytozolu.",
          ua: "Бактерія не має ядра. Генетичний матеріал — це нитка ДНК у цитозолі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jednak jest jądro", ua: "Типова помилка. Ядро все ж є" },
      claim: {
        pl: "„Bakteria ma jądro, a nić DNA leży w tym jądrze.”",
        ua: "«Бактерія має ядро, а нитка ДНК лежить у цьому ядрі.»"
      },
      text: {
        pl: [
          "Bakteria jest komórką bezjądrową.",
          "Nić DNA leży w cytozolu. Jądra tu nie ma."
        ],
        ua: [
          "Бактерія є без’ядерною клітиною.",
          "Нитка ДНК лежить у цитозолі. Ядра тут немає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Podpis na modelu", ua: "Сам. Підпис на моделі" },
      task: {
        id: "l17-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń podpisuje nić w cytozolu jako chloroplast. Co poprawić?",
          ua: "Учень підписує нитку в цитозолі як хлоропласт. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to nić DNA; chloroplastów i jądra bakteria nie ma", ua: "це нитка ДНК; хлоропластів і ядра бактерія не має" } },
          { id: "b", label: { pl: "tak — nić DNA bakterii jest chloroplastem liścia", ua: "так — нитка ДНК бактерії є хлоропластом листка" } },
          { id: "c", label: { pl: "tak — ta nić jest mitochondrium z jądrem w środku", ua: "так — ця нитка є мітохондрією з ядром усередині" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplast jest w komórce roślinnej. U bakterii nić w cytozolu to DNA, nie chloroplast.",
              ua: "Хлоропласт є в рослинній клітині. У бактерії нитка в цитозолі — це ДНК, не хлоропласт."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondrium i jądro nie są planem tej komórki. Nić w cytozolu to DNA.",
              ua: "Мітохондрія і ядро не є планом цієї клітини. Нитка в цитозолі — це ДНК."
            }
          }
        ],
        explanation: {
          pl: "Nić w cytozolu to DNA. Bakteria nie ma chloroplastu ani jądra.",
          ua: "Нитка в цитозолі — це ДНК. Бактерія не має хлоропласта чи ядра."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cztery kształty", ua: "Поняття. Чотири форми" },
      visual: vizGh("l17-ksztalty.png", {
        alt: { pl: "Ziarenkowce, pałeczki, przecinki i krętki", ua: "Коки, палички, вібріони і спірили" },
        title: { pl: "Kulki, walce, przecinek, spirala.", ua: "Кульки, циліндри, кома, спіраль." },
        prompt: { pl: "Plansza lekcji 17: cztery kształty bakterii." }
      }),
      text: {
        pl: [
          ["Bakterie różnią się kształtem. ", em("Ziarenkowce"), " są kuliste. ", em("Pałeczki"), " są wydłużone, jak walce."],
          [em("Przecinki"), " są wygięte jak przecinek. ", em("Krętki"), " są spiralne."],
          "Kształt pomaga bakterię opisać. To nie ocena „ładna albo brzydka” i nie lista chorób."
        ],
        ua: [
          ["Бактерії різняться формою. ", em("Коки"), " кулясті. ", em("Палички"), " видовжені, як циліндри."],
          [em("Вібріони"), " зігнуті, як кома. ", em("Спірили"), " спіральні."],
          "Форма допомагає бактерію описати. Це не оцінка «гарна чи бридка» і не список хвороб."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Cztery rzędy", ua: "Приклад. Чотири ряди" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kulki na planszy to ziarenkowce. Wydłużone walce to pałeczki."],
            ua: ["Кульки на плакаті — це коки. Видовжені циліндри — це палички."]
          }
        },
        {
          text: {
            pl: ["Kształt przecinka to przecinki. Spirala to krętki."],
            ua: ["Форма коми — це вібріони. Спіраль — це спірили."]
          }
        },
        {
          text: {
            pl: ["Nazwa kształtu nie mówi, czy bakteria jest groźna. O zdrowiu jest lekcja 18."],
            ua: ["Назва форми не каже, чи бактерія небезпечна. Про здоров’я є урок 18."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kulki", ua: "Коротке питання. Кульки" },
      task: {
        id: "l17-g2",
        type: "single-choice",
        question: {
          pl: "Jak nazywają się bakterie o kształcie kulek?",
          ua: "Як називаються бактерії у формі кульок?"
        },
        options: [
          { id: "a", label: { pl: "ziarenkowce", ua: "коки" } },
          { id: "b", label: { pl: "przecinki", ua: "вібріони" } },
          { id: "c", label: { pl: "krętki", ua: "спірили" } }
        ],
        answer: "a",
        hint: {
          pl: "Kulka nie jest przecinkiem i nie jest spiralą.",
          ua: "Кулька не є комою і не є спіраллю."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Przecinki są wygięte jak przecinek. Kuliste bakterie to ziarenkowce.",
              ua: "Вібріони зігнуті, як кома. Кулясті бактерії — це коки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krętki są spiralne. Kulki mają inną nazwę: ziarenkowce.",
              ua: "Спірили спіральні. Кульки мають іншу назву: коки."
            }
          }
        ],
        explanation: {
          pl: "Kuliste bakterie to ziarenkowce.",
          ua: "Кулясті бактерії — це коки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Spirala to kulka", ua: "Типова помилка. Спіраль — це кулька" },
      claim: {
        pl: "„Krętki są kuliste, a ziarenkowce są spiralne.”",
        ua: "«Спірили кулясті, а коки спіральні.»"
      },
      text: {
        pl: [
          "Ziarenkowce są kuliste. Krętki są spiralne.",
          "Pałeczki są wydłużone, a przecinki wygięte. Nazw nie zamieniamy."
        ],
        ua: [
          "Коки кулясті. Спірили спіральні.",
          "Палички видовжені, а вібріони зігнуті. Назви не міняємо місцями."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Walce", ua: "Сам. Циліндри" },
      task: {
        id: "l17-p2",
        type: "single-choice",
        question: {
          pl: "Bakterie wydłużone, o kształcie walca, to:",
          ua: "Бактерії видовжені, у формі циліндра, — це:"
        },
        options: [
          { id: "a", label: { pl: "pałeczki", ua: "палички" } },
          { id: "b", label: { pl: "ziarenkowce", ua: "коки" } },
          { id: "c", label: { pl: "przecinki", ua: "вібріони" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ziarenkowce są kuliste, nie wydłużone. Walec opisuje pałeczki.",
              ua: "Коки кулясті, не видовжені. Циліндр описує палички."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Przecinki są wygięte jak przecinek. Wydłużony walec to pałeczka.",
              ua: "Вібріони зігнуті, як кома. Видовжений циліндр — це паличка."
            }
          }
        ],
        explanation: {
          pl: "Wydłużone bakterie to pałeczki.",
          ua: "Видовжені бактерії — це палички."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa sposoby odżywiania", ua: "Поняття. Два способи живлення" },
      visual: vizGh("l17-odzywianie.png", {
        alt: { pl: "Bakterie samożywne i cudzożywne", ua: "Саможивні і гетеротрофні бактерії" },
        title: { pl: "Jedne wytwarzają pokarm. Drugie biorą gotowy.", ua: "Одні утворюють поживу. Другі беруть готову." },
        prompt: { pl: "Plansza lekcji 17: samożywne i cudzożywne bakterie." }
      }),
      text: {
        pl: [
          ["Są bakterie ", em("samożywne"), " i ", em("cudzożywne"), "."],
          "Samożywne wytwarzają związki organiczne. Niektóre potrafią fotosyntetyzować, ale nie tak jak liść z chloroplastami z lekcji 9.",
          "Cudzożywne korzystają z gotowego pokarmu. Bywają wśród nich saprobionty: rozkładają szczątki, co ma znaczenie w glebie. Choroby bakteryjne zostają na lekcję 18."
        ],
        ua: [
          ["Є бактерії ", em("саможивні"), " і ", em("гетеротрофні"), "."],
          "Саможивні утворюють органічні сполуки. Деякі вміють фотосинтезувати, але не так, як листок із хлоропластами з уроку 9.",
          "Гетеротрофні користуються готовою поживою. Серед них бувають сапробіонти: розкладають рештки, що має значення в ґрунті. Бактеріальні хвороби лишаються на урок 18."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie strony planszy", ua: "Приклад. Два боки плаката" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewa strona: samożywne. Same wytwarzają związki organiczne. To nie liść dębu."],
            ua: ["Лівий бік: саможивні. Самі утворюють органічні сполуки. Це не листок дуба."]
          }
        },
        {
          text: {
            pl: ["Prawa strona: cudzożywne przy szczątkach. Saprobiont rozkłada resztki, nie jest przez to rośliną."],
            ua: ["Правий бік: гетеротрофні біля решток. Сапробіонт розкладає рештки і не стає через це рослиною."]
          }
        },
        {
          text: {
            pl: ["Dwa sposoby dotyczą bakterii. Wirus z lekcji 16 sam się tak nie odżywia."],
            ua: ["Два способи стосуються бактерій. Вірус з уроку 16 сам так не живиться."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jakie odżywianie?", ua: "Коротке питання. Яке живлення?" },
      task: {
        id: "l17-g3",
        type: "single-choice",
        question: {
          pl: "Które zdanie o odżywianiu bakterii jest prawdziwe?",
          ua: "Яке речення про живлення бактерій правдиве?"
        },
        options: [
          { id: "a", label: { pl: "są bakterie samożywne i cudzożywne", ua: "є бактерії саможивні і гетеротрофні" } },
          { id: "b", label: { pl: "każda bakteria ma chloroplasty jak liść", ua: "кожна бактерія має хлоропласти, як листок" } },
          { id: "c", label: { pl: "bakterie nie odżywiają się, bo są wirusami", ua: "бактерії не живляться, бо є вірусами" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch sposobów, nie jednego planu liścia.",
          ua: "Шукай два способи, не один план листка."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplasty są w komórce roślinnej. Bakterie bywają samożywne albo cudzożywne, ale to inny plan komórki.",
              ua: "Хлоропласти є в рослинній клітині. Бактерії бувають саможивними або гетеротрофними, але це інший план клітини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakteria jest komórką i się odżywia. Wirus z lekcji 16 nie jest bakterią.",
              ua: "Бактерія є клітиною і живиться. Вірус з уроку 16 не є бактерією."
            }
          }
        ],
        explanation: {
          pl: "Wśród bakterii są samożywne i cudzożywne.",
          ua: "Серед бактерій є саможивні і гетеротрофні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jak liść", ua: "Типова помилка. Як листок" },
      claim: {
        pl: "„Każda bakteria ma chloroplast i odżywia się jak liść dębu.”",
        ua: "«Кожна бактерія має хлоропласт і живиться, як листок дуба.»"
      },
      text: {
        pl: [
          "Bakteria nie ma chloroplastów rośliny.",
          "Są bakterie samożywne i cudzożywne. To nie jeden sposób liścia."
        ],
        ua: [
          "Бактерія не має хлоропластів рослини.",
          "Є бактерії саможивні і гетеротрофні. Це не один спосіб листка."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szczątki w glebie", ua: "Сам. Рештки в ґрунті" },
      task: {
        id: "l17-p3",
        type: "single-choice",
        question: {
          pl: "Bakterie rozkładają szczątki w glebie. Jaki to sposób odżywiania?",
          ua: "Бактерії розкладають рештки в ґрунті. Який це спосіб живлення?"
        },
        options: [
          { id: "a", label: { pl: "cudzożywny — saprobionty biorą gotowy pokarm", ua: "гетеротрофний — сапробіонти беруть готову поживу" } },
          { id: "b", label: { pl: "samożywny — szczątki są chloroplastem bakterii", ua: "саможивний — рештки є хлоропластом бактерії" } },
          { id: "c", label: { pl: "żaden — gleba zastępuje jądro i pokarm jest zbędny", ua: "жодний — ґрунт замінює ядро, і пожива не потрібна" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szczątki to gotowy pokarm, nie chloroplast. Rozkładanie resztek jest odżywianiem cudzożywnym.",
              ua: "Рештки — це готова пожива, не хлоропласт. Розкладання решток є гетеротрофним живленням."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gleba nie jest jądrem. Te bakterie są cudzożywne: korzystają ze szczątków.",
              ua: "Ґрунт не є ядром. Ці бактерії гетеротрофні: користуються рештками."
            }
          }
        ],
        explanation: {
          pl: "Bakterie rozkładające szczątki są cudzożywne. To saprobionty.",
          ua: "Бактерії, що розкладають рештки, гетеротрофні. Це сапробіонти."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Podział komórki", ua: "Поняття. Поділ клітини" },
      visual: vizGh("l17-podzial.png", {
        alt: { pl: "Jedna pałeczka dzieli się na dwie", ua: "Одна паличка ділиться на дві" },
        title: { pl: "Jedna komórka daje dwie podobne.", ua: "Одна клітина дає дві подібні." },
        prompt: { pl: "Plansza lekcji 17: podział bakterii." }
      }),
      text: {
        pl: [
          ["Bakterie rozmnażają się przez ", em("podział komórki"), ": jedna komórka dzieli się na dwie podobne."],
          "Gdy jest ciepło, wilgotno i jest pokarm, podziały idą szybko. Dlatego w ciepłym mleku bakterie mnożą się szybciej niż w lodówce.",
          "To nie kwiat i nasiona. To podział komórki bakteryjnej."
        ],
        ua: [
          ["Бактерії розмножуються ", em("поділом клітини"), ": одна клітина ділиться на дві подібні."],
          "Коли тепло, волого і є пожива, поділи йдуть швидко. Тому в теплому молоці бактерії множаться швидше, ніж у холодильнику.",
          "Це не квітка і насіння. Це поділ бактерійної клітини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy klatki", ua: "Приклад. Три кадри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Najpierw jest jedna pałeczka."],
            ua: ["Спочатку є одна паличка."]
          }
        },
        {
          text: {
            pl: ["Potem widać przewężenie. Komórka zaczyna się dzielić."],
            ua: ["Потім видно перетяжку. Клітина починає ділитися."]
          }
        },
        {
          text: {
            pl: ["Na końcu są dwie podobne pałeczki. To nie dwa nasiona."],
            ua: ["Наприкінці є дві подібні палички. Це не дві насінини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna i dwie", ua: "Коротке питання. Одна і дві" },
      task: {
        id: "l17-g4",
        type: "single-choice",
        question: {
          pl: "Jak z jednej bakterii powstają dwie podobne?",
          ua: "Як з однієї бактерії постають дві подібні?"
        },
        options: [
          { id: "a", label: { pl: "przez podział komórki", ua: "поділом клітини" } },
          { id: "b", label: { pl: "przez kwiat i nasiona", ua: "квіткою і насінням" } },
          { id: "c", label: { pl: "przez kapsyd, bo bakteria jest wirusem", ua: "капсидом, бо бактерія є вірусом" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz na przewężenie na schemacie, nie na kwiat.",
          ua: "Дивись на перетяжку на схемі, не на квітку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kwiat i nasiona nie są sposobem bakterii. Jedna komórka dzieli się na dwie.",
              ua: "Квітка і насіння не є способом бактерії. Одна клітина ділиться на дві."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd należy do wirusa. Bakteria jest komórką i rozmnaża się przez podział.",
              ua: "Капсид належить вірусу. Бактерія є клітиною і розмножується поділом."
            }
          }
        ],
        explanation: {
          pl: "Bakterie rozmnażają się przez podział komórki.",
          ua: "Бактерії розмножуються поділом клітини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kwiat bakterii", ua: "Типова помилка. Квітка бактерії" },
      claim: {
        pl: "„Bakteria rozmnaża się kwiatem i nasionami.”",
        ua: "«Бактерія розмножується квіткою і насінням.»"
      },
      text: {
        pl: [
          "Bakteria nie ma kwiatu.",
          "Z jednej komórki przez podział powstają dwie podobne."
        ],
        ua: [
          "Бактерія не має квітки.",
          "З однієї клітини через поділ постають дві подібні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ciepło i lodówka", ua: "Сам. Тепло і холодильник" },
      task: {
        id: "l17-p4",
        type: "single-choice",
        question: {
          pl: "Dlaczego w ciepłym mleku bakterie mnożą się szybciej niż w lodówce?",
          ua: "Чому в теплому молоці бактерії множаться швидше, ніж у холодильнику?"
        },
        options: [
          { id: "a", label: { pl: "bo ciepło, wilgoć i pokarm przyspieszają podziały", ua: "бо тепло, волога і пожива прискорюють поділи" } },
          { id: "b", label: { pl: "bo zimno w lodówce przyspiesza podział", ua: "бо холод у холодильнику прискорює поділ" } },
          { id: "c", label: { pl: "bo ciepłe mleko dokłada bakterii jądro", ua: "бо тепле молоко додає бактерії ядро" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zimno spowalnia podziały. Szybciej jest w cieple, gdy jest wilgotno i jest pokarm.",
              ua: "Холод сповільнює поділи. Швидше є в теплі, коли волого і є пожива."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mleko nie dokłada jądra. Szybsze mnożenie bierze się z ciepła, wilgoci i pokarmu.",
              ua: "Молоко не додає ядра. Швидше розмноження береться з тепла, вологи і поживи."
            }
          }
        ],
        explanation: {
          pl: "W cieple, przy wilgoci i pokarmie, bakterie dzielą się szybciej niż w lodówce.",
          ua: "У теплі, за вологи і поживи, бактерії діляться швидше, ніж у холодильнику."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Przetrwalnik", ua: "Поняття. Спора" },
      visual: vizGh("l17-przetrwalniki.png", {
        alt: { pl: "Zwykła komórka, przetrwalnik i znów komórka", ua: "Звичайна клітина, спора і знову клітина" },
        title: { pl: "Grubsza ściana na złe warunki.", ua: "Товща стінка на погані умови." },
        prompt: { pl: "Plansza lekcji 17: przetrwalnik bakterii." }
      }),
      text: {
        pl: [
          ["Niektóre bakterie tworzą ", em("przetrwalniki"), ": formy o grubej ścianie na suszę, gorąco albo brak pokarmu."],
          "Gdy warunki wrócą, z przetrwalnika znów powstaje zwykła komórka bakteryjna.",
          "Sam krótki czas gotowania nie zawsze je niszczy. O pasteryzacji i higienie będzie lekcja 18. Dziś wystarczy: przetrwalnik służy przetrwaniu."
        ],
        ua: [
          ["Деякі бактерії утворюють ", em("спори"), ": форми з товстою стінкою на посуху, спеку або брак поживи."],
          "Коли умови повертаються, зі спори знову постає звичайна бактерійна клітина.",
          "Саме коротке кип’ятіння не завжди їх знищує. Про пастеризацію і гігієну буде урок 18. Сьогодні досить: спора служить виживанню."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy stany", ua: "Приклад. Три стани" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej jest zwykła komórka, gdy warunki są dobre."],
            ua: ["Ліворуч є звичайна клітина, коли умови добрі."]
          }
        },
        {
          text: {
            pl: ["W środku jest przetrwalnik. Grubsza ściana znosi suszę, gorąco albo brak pokarmu."],
            ua: ["Посередині є спора. Товща стінка зносить посуху, спеку або брак поживи."]
          }
        },
        {
          text: {
            pl: ["Po prawej, gdy warunki wrócą, znów jest zwykła komórka. To nie nasiono rośliny."],
            ua: ["Праворуч, коли умови повернуться, знову є звичайна клітина. Це не насінина рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co przetrwalnik?", ua: "Коротке питання. Навіщо спора?" },
      task: {
        id: "l17-g5",
        type: "single-choice",
        question: {
          pl: "Do czego bakterii służy przetrwalnik?",
          ua: "Навіщо бактерії спора?"
        },
        options: [
          { id: "a", label: { pl: "żeby przetrwać suszę, gorąco albo brak pokarmu", ua: "щоб пережити посуху, спеку або брак поживи" } },
          { id: "b", label: { pl: "żeby wytwarzać chlorofil w liściu dębu", ua: "щоб утворювати хлорофіл у листку дуба" } },
          { id: "c", label: { pl: "żeby wirus dostał jądro", ua: "щоб вірус отримав ядро" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj złych warunków, nie chlorofilu.",
          ua: "Шукай погані умови, не хлорофіл."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chlorofil liścia nie jest rolą przetrwalnika. Przetrwalnik pomaga przetrwać złe warunki.",
              ua: "Хлорофіл листка не є роллю спори. Спора допомагає пережити погані умови."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie dostaje jądra od bakterii. Przetrwalnik jest formą przetrwania bakterii.",
              ua: "Вірус не отримує ядра від бактерії. Спора є формою виживання бактерії."
            }
          }
        ],
        explanation: {
          pl: "Przetrwalnik pomaga przetrwać suszę, gorąco albo brak pokarmu.",
          ua: "Спора допомагає пережити посуху, спеку або брак поживи."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zawsze ginie", ua: "Типова помилка. Завжди гине" },
      claim: {
        pl: "„Krótkie gotowanie zawsze niszczy przetrwalniki, więc nic nie przetrwa.”",
        ua: "«Коротке кип’ятіння завжди знищує спори, тож ніщо не переживе.»"
      },
      text: {
        pl: [
          "Przetrwalnik znosi złe warunki, także gorąco.",
          "Krótki czas gotowania nie zawsze go niszczy. Pasteryzacja jest tematem lekcji 18."
        ],
        ua: [
          "Спора зносить погані умови, також спеку.",
          "Короткий час кип’ятіння не завжди її знищує. Пастеризація є темою уроку 18."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wróciła woda", ua: "Сам. Повернулася вода" },
      task: {
        id: "l17-p5",
        type: "single-choice",
        question: {
          pl: "Była susza. Potem wróciły woda i pokarm. Co powstaje z przetrwalnika?",
          ua: "Була посуха. Потім повернулися вода і пожива. Що постає зі спори?"
        },
        options: [
          { id: "a", label: { pl: "znów zwykła komórka bakteryjna", ua: "знову звичайна бактерійна клітина" } },
          { id: "b", label: { pl: "nasiono rośliny, które zostaje nasionem", ua: "насінина рослини, яка лишається насіниною" } },
          { id: "c", label: { pl: "jądro komórki zwierzęcej", ua: "ядро тваринної клітини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Przetrwalnik nie jest nasionem rośliny. Gdy warunki wrócą, powstaje zwykła komórka bakteryjna.",
              ua: "Спора не є насіниною рослини. Коли умови повернуться, постає звичайна бактерійна клітина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Z przetrwalnika nie powstaje jądro. Wraca zwykła komórka bakterii, nadal bez jądra.",
              ua: "Зі спори не постає ядро. Повертається звичайна клітина бактерії, і далі без ядра."
            }
          }
        ],
        explanation: {
          pl: "Po powrocie dobrych warunków z przetrwalnika powstaje zwykła komórka bakteryjna.",
          ua: "Після повернення добрих умов зі спори постає звичайна бактерійна клітина."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Rzęska i otoczka", ua: "Поняття. Джгутик і оболонка" },
      visual: vizGh("l17-rzeski.png", {
        alt: { pl: "Rzęska i otoczka śluzowa bakterii", ua: "Джгутик і слизова оболонка бактерії" },
        title: { pl: "Rzęska porusza. Otoczka chroni.", ua: "Джгутик рухає. Оболонка захищає." },
        prompt: { pl: "Plansza lekcji 17: rzęska i otoczka." }
      }),
      text: {
        pl: [
          ["Niektóre bakterie mają ", em("rzęski"), " (wici). Dzięki nim poruszają się w wodzie albo w śluzie."],
          [em("Otoczka śluzowa"), " chroni komórkę i pomaga przyczepiać się do powierzchni. Ściana komórkowa na modelu to osobna część."],
          "Nie każda bakteria ma rzęski. Rzęska bakterii to nie rzęska pantofelka: pantofelek jest protistem, o nim będzie lekcja 19."
        ],
        ua: [
          ["Деякі бактерії мають ", em("джгутики"), ". Завдяки ним рухаються у воді або в слизі."],
          [em("Слизова оболонка"), " захищає клітину і допомагає прикріплятися до поверхні. Клітинна стінка на моделі — це окрема частина."],
          "Не кожна бактерія має джгутики. Джгутик бактерії — це не війки інфузорії: інфузорія є протистом, про неї буде урок 19."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa dodatki", ua: "Приклад. Два додатки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Rzęska sterczy z komórki i służy do ruchu. Część bakterii jej nie ma."],
            ua: ["Джгутик стирчить із клітини і служить для руху. Частина бактерій його не має."]
          }
        },
        {
          text: {
            pl: ["Otoczka śluzowa otula komórkę. Chroni ją i pomaga się przyczepić."],
            ua: ["Слизова оболонка огортає клітину. Захищає її і допомагає прикріпитися."]
          }
        },
        {
          text: {
            pl: ["Ściana komórkowa zostaje ścianą. Otoczka nie jest chloroplastem."],
            ua: ["Клітинна стінка лишається стінкою. Оболонка не є хлоропластом."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ruch", ua: "Коротке питання. Рух" },
      task: {
        id: "l17-g6",
        type: "single-choice",
        question: {
          pl: "Do czego służy rzęska bakterii?",
          ua: "Для чого служить джгутик бактерії?"
        },
        options: [
          { id: "a", label: { pl: "do ruchu w wodzie albo w śluzie", ua: "для руху у воді або в слизі" } },
          { id: "b", label: { pl: "do przechowywania nici DNA zamiast cytozolu", ua: "для зберігання нитки ДНК замість цитозолю" } },
          { id: "c", label: { pl: "to rzęska pantofelka, więc bakteria jest protistem", ua: "це війки інфузорії, тож бактерія є протистом" } }
        ],
        answer: "a",
        hint: {
          pl: "Rzęska sterczy i porusza komórkę. Nie każda bakteria ją ma.",
          ua: "Джгутик стирчить і рухає клітину. Не кожна бактерія його має."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nić DNA leży w cytozolu. Rzęska służy do ruchu, nie do przechowywania DNA.",
              ua: "Нитка ДНК лежить у цитозолі. Джгутик служить для руху, не для зберігання ДНК."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pantofelek jest protistem z lekcji 19. Rzęska bakterii porusza komórkę bakteryjną.",
              ua: "Інфузорія є протистом з уроку 19. Джгутик бактерії рухає бактерійну клітину."
            }
          }
        ],
        explanation: {
          pl: "Rzęska służy bakterii do ruchu. Nie każda bakteria ją ma.",
          ua: "Джгутик служить бактерії для руху. Не кожна бактерія його має."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każda ma rzęskę", ua: "Типова помилка. Кожна має джгутик" },
      claim: {
        pl: "„Każda bakteria ma rzęski, a otoczka robi fotosyntezę.”",
        ua: "«Кожна бактерія має джгутики, а оболонка робить фотосинтез.»"
      },
      text: {
        pl: [
          "Rzęski ma tylko część bakterii. Służą do ruchu.",
          "Otoczka śluzowa chroni i pomaga się przyczepić. Fotosyntezy liścia nie prowadzi."
        ],
        ua: [
          "Джгутики має лише частина бактерій. Вони служать для руху.",
          "Слизова оболонка захищає і допомагає прикріпитися. Фотосинтезу листка не веде."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Otoczka", ua: "Сам. Оболонка" },
      task: {
        id: "l17-p6",
        type: "single-choice",
        question: {
          pl: "Do czego służy otoczka śluzowa bakterii?",
          ua: "Для чого служить слизова оболонка бактерії?"
        },
        options: [
          { id: "a", label: { pl: "chroni komórkę i pomaga się przyczepić", ua: "захищає клітину і допомагає прикріпитися" } },
          { id: "b", label: { pl: "zastępuje rzęskę, więc służy tylko do pływania", ua: "замінює джгутик, тож служить лише для плавання" } },
          { id: "c", label: { pl: "jest jądrem, w którym leży nić DNA", ua: "є ядром, у якому лежить нитка ДНК" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Do ruchu służy rzęska. Otoczka chroni komórkę i pomaga się przyczepić.",
              ua: "Для руху служить джгутик. Оболонка захищає клітину і допомагає прикріпитися."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakteria nie ma jądra. Otoczka śluzowa jest ochroną, a nić DNA leży w cytozolu.",
              ua: "Бактерія не має ядра. Слизова оболонка є захистом, а нитка ДНК лежить у цитозолі."
            }
          }
        ],
        explanation: {
          pl: "Otoczka śluzowa chroni bakterię i pomaga jej się przyczepić.",
          ua: "Слизова оболонка захищає бактерію і допомагає їй прикріпитися."
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
      heading: { pl: "Sprawdzian 1. Bez jądra", ua: "Перевірка 1. Без ядра" },
      task: {
        id: "l17-t1",
        type: "single-choice",
        question: {
          pl: "Które zdanie opisuje bakterię?",
          ua: "Яке речення описує бактерію?"
        },
        options: [
          { id: "a", label: { pl: "to komórka bez jądra, z nicią DNA w cytozolu", ua: "це клітина без ядра, з ниткою ДНК у цитозолі" } },
          { id: "b", label: { pl: "ma jądro, mitochondria i chloroplasty rośliny", ua: "має ядро, мітохондрії і хлоропласти рослини" } },
          { id: "c", label: { pl: "nie jest komórką i stoi poza królestwami jak wirus", ua: "не є клітиною і стоїть поза царствами, як вірус" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro, mitochondria i chloroplasty nie są planem bakterii. Zostaje komórka bezjądrowa i nić DNA w cytozolu.",
              ua: "Ядро, мітохондрії і хлоропласти не є планом бактерії. Лишається без’ядерна клітина і нитка ДНК у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Poza królestwami stoi wirus, bo nie jest komórką. Bakteria jest komórką i należy do królestwa bakterii.",
              ua: "Поза царствами стоїть вірус, бо не є клітиною. Бактерія є клітиною і належить до царства бактерій."
            }
          }
        ],
        explanation: {
          pl: "Bakteria to komórka bezjądrowa z nicią DNA w cytozolu.",
          ua: "Бактерія — це без’ядерна клітина з ниткою ДНК у цитозолі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Przecinek", ua: "Перевірка 2. Кома" },
      task: {
        id: "l17-t2",
        type: "single-choice",
        question: {
          pl: "Bakterie wygięte jak przecinek nazywamy:",
          ua: "Бактерії, зігнуті як кома, називаємо:"
        },
        options: [
          { id: "a", label: { pl: "przecinkami", ua: "вібріонами" } },
          { id: "b", label: { pl: "pałeczkami", ua: "паличками" } },
          { id: "c", label: { pl: "krętkami", ua: "спірилами" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pałeczki są wydłużone jak walce. Wygięcie jak przecinek należy do przecinków.",
              ua: "Палички видовжені, як циліндри. Згин, як кома, належить вібріонам."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krętki są spiralne. Kształt przecinka to przecinki.",
              ua: "Спірили спіральні. Форма коми — це вібріони."
            }
          }
        ],
        explanation: {
          pl: "Bakterie wygięte jak przecinek to przecinki.",
          ua: "Бактерії, зігнуті як кома, — це вібріони."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Samożywna", ua: "Перевірка 3. Саможивна" },
      task: {
        id: "l17-t3",
        type: "single-choice",
        question: {
          pl: "Bakteria sama wytwarza związki organiczne i nie bierze gotowego pokarmu. Jakie to odżywianie?",
          ua: "Бактерія сама утворює органічні сполуки і не бере готової поживи. Яке це живлення?"
        },
        options: [
          { id: "a", label: { pl: "samożywne", ua: "саможивне" } },
          { id: "b", label: { pl: "cudzożywne", ua: "гетеротрофне" } },
          { id: "c", label: { pl: "żadne — tak żyje tylko wirus, a bakteria nie je", ua: "жодне — так живе лише вірус, а бактерія не їсть" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cudzożywna bakteria bierze gotowy pokarm. Ta wytwarza związki organiczne sama, więc jest samożywna.",
              ua: "Гетеротрофна бактерія бере готову поживу. Ця утворює органічні сполуки сама, тож вона саможивна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie jest bakterią i sam się tak nie odżywia. Wytwarzanie związków organicznych to odżywianie samożywne.",
              ua: "Вірус не є бактерією і сам так не живиться. Утворення органічних сполук — це саможивне живлення."
            }
          }
        ],
        explanation: {
          pl: "Bakteria, która sama wytwarza związki organiczne, jest samożywna.",
          ua: "Бактерія, яка сама утворює органічні сполуки, саможивна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Dwie pałeczki", ua: "Перевірка 4. Дві палички" },
      task: {
        id: "l17-t4",
        type: "single-choice",
        question: {
          pl: "Na schemacie z jednej pałeczki powstały dwie takie same. Co to jest?",
          ua: "На схемі з однієї палички постали дві такі самі. Що це?"
        },
        options: [
          { id: "a", label: { pl: "podział komórki", ua: "поділ клітини" } },
          { id: "b", label: { pl: "dwa nasiona w owocu", ua: "дві насінини в плоді" } },
          { id: "c", label: { pl: "dwa kapsydy wirusa", ua: "два капсиди вірусу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nasiona nie są sposobem bakterii. Dwie pałeczki z jednej to podział komórki.",
              ua: "Насіння не є способом бактерії. Дві палички з однієї — це поділ клітини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd jest częścią wirusa. Pałeczka jest komórką i dzieli się na dwie.",
              ua: "Капсид є частиною вірусу. Паличка є клітиною і ділиться на дві."
            }
          }
        ],
        explanation: {
          pl: "Dwie takie same pałeczki z jednej powstały przez podział komórki.",
          ua: "Дві такі самі палички з однієї постали через поділ клітини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Trzy dodatki", ua: "Перевірка 5. Три додатки" },
      task: {
        id: "l17-t5",
        type: "single-choice",
        question: {
          pl: "Które przypisanie jest prawdziwe?",
          ua: "Яке зіставлення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "przetrwalnik — złe warunki; rzęska — ruch; otoczka — ochrona i przyczepianie", ua: "спора — погані умови; джгутик — рух; оболонка — захист і прикріплення" } },
          { id: "b", label: { pl: "przetrwalnik — ruch; rzęska — chlorofil; otoczka — jądro", ua: "спора — рух; джгутик — хлорофіл; оболонка — ядро" } },
          { id: "c", label: { pl: "wszystkie trzy są kapsydem wirusa", ua: "усі три є капсидом вірусу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Role są pomieszane. Przetrwalnik znosi złe warunki, rzęska służy do ruchu, otoczka chroni i pomaga się przyczepić.",
              ua: "Ролі перемішані. Спора зносить погані умови, джгутик служить для руху, оболонка захищає і допомагає прикріпитися."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd należy do wirusa. Przetrwalnik, rzęska i otoczka są dodatkami komórki bakteryjnej.",
              ua: "Капсид належить вірусу. Спора, джгутик і оболонка є додатками бактерійної клітини."
            }
          }
        ],
        explanation: {
          pl: "Przetrwalnik służy przetrwaniu, rzęska ruchowi, a otoczka ochronie i przyczepianiu.",
          ua: "Спора служить виживанню, джгутик — руху, а оболонка — захисту і прикріпленню."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l17-ksztalty.png", {
        alt: { pl: "Cztery kształty bakterii", ua: "Чотири форми бактерій" },
        title: { pl: "Bez jądra. Cztery kształty. Podział.", ua: "Без ядра. Чотири форми. Поділ." },
        prompt: { pl: "Ta sama plansza kształtów bakterii." }
      }),
      text: {
        pl: [
          "Bakteria to komórka bezjądrowa. Nić DNA leży w cytozolu.",
          "Kształty: ziarenkowce, pałeczki, przecinki, krętki.",
          "Odżywianie: samożywne albo cudzożywne. Rozmnażanie: podział komórki.",
          "Przetrwalnik znosi złe warunki. Rzęska służy do ruchu, otoczka do ochrony. Zdrowie — lekcja 18."
        ],
        ua: [
          "Бактерія — це без’ядерна клітина. Нитка ДНК лежить у цитозолі.",
          "Форми: коки, палички, вібріони, спірили.",
          "Живлення: саможивне або гетеротрофне. Розмноження: поділ клітини.",
          "Спора зносить погані умови. Джгутик служить для руху, оболонка — для захисту. Здоров’я — урок 18."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Powiem, że bakteria jest komórką bezjądrową z nicią DNA w cytozolu.", ua: "Скажу, що бактерія є без’ядерною клітиною з ниткою ДНК у цитозолі." },
        { pl: "Rozpoznam ziarenkowce, pałeczki, przecinki i krętki.", ua: "Розпізнаю коки, палички, вібріони і спірили." },
        { pl: "Powiem, że bakterie bywają samożywne albo cudzożywne.", ua: "Скажу, що бактерії бувають саможивними або гетеротрофними." },
        { pl: "Wyjaśnię podział komórki na dwie.", ua: "Поясню поділ клітини на дві." },
        { pl: "Powiem, po co jest przetrwalnik.", ua: "Скажу, навіщо спора." },
        { pl: "Powiem, po co są rzęska i otoczka śluzowa.", ua: "Скажу, навіщо джгутик і слизова оболонка." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
