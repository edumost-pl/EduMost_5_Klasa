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
      heading: { pl: "Misja: składam dział II", ua: "Місія: складаю розділ II" },
      text: {
        pl: [
          "To powtórzenie działu: budowa i czynności życiowe organizmów. Nie nowy temat. Składasz lekcje 4–14.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Błąd pokazuje, który krok wrócić, a nie cały dział od nowa."
        ],
        ua: [
          "Це повторення розділу: будова і життєві функції організмів. Не нова тема. Складаєш уроки 4–14.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Помилка показує, який крок повернути, а не весь розділ спочатку."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "woda", ua: "вода — транспорт речовин, не запис рис" },
        { pl: "DNA", ua: "ДНК — інформація про риси, не запас енергії" },
        { pl: "chloroplast", ua: "хлоропласт — фотосинтез" },
        { pl: "mitochondrium", ua: "мітохондрія — енергія з цукру при кисні" },
        { pl: "samożywność", ua: "саможивлення — організм сам виробляє поживу" },
        { pl: "cudzożywność", ua: "гетеротрофне живлення — готова пожива" },
        { pl: "fermentacja", ua: "бродіння — енергія з цукру без кисню" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Składniki i woda", ua: "Поняття. Складники і вода" },
      visual: vizGh("L04_Skladniki_chemiczne_organizmow", "l04-sklad-czlowieka.png", {
        alt: { pl: "Skład chemiczny organizmu człowieka", ua: "Хімічний склад організму людини" },
        title: { pl: "Najwięcej jest wody.", ua: "Найбільше води." },
        prompt: { pl: "Infografika lekcji 4: skład organizmu człowieka." }
      }),
      text: {
        pl: [
          [em("Woda"), " jest głównym składnikiem. U człowieka to około 65% masy ciała. Transportuje substancje w komórce i między komórkami oraz pomaga usuwać zbędne substancje."],
          "Białka głównie budują ciało. Tłuszcze magazynują i chronią. Cukry dają energię, bywają zapasem (skrobia) albo budują (celuloza w ścianie roślinnej).",
          [em("DNA"), " niesie informację o cechach i przekazuje ją potomstwu. Nie jest zapasem energii."]
        ],
        ua: [
          [em("Вода"), " — головний складник. У людини це близько 65% маси тіла. Транспортує речовини в клітині і між клітинами та допомагає виводити зайві речовини."],
          "Білки здебільшого будують тіло. Жири запасають і захищають. Цукри дають енергію, бувають запасом (крохмаль) або будують (целюлоза в стінці рослини).",
          [em("ДНК"), " несе інформацію про риси і передає її потомству. Не є запасом енергії."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy role", ua: "Приклад. Три ролі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Woda wozi substancje. Nie zapisuje koloru oczu."],
            ua: ["Вода возить речовини. Не записує колір очей."]
          }
        },
        {
          text: {
            pl: ["Białko mleka buduje ciało. Tłuszcz je magazynuje."],
            ua: ["Білок молока будує тіло. Жир його запасає."]
          }
        },
        {
          text: {
            pl: ["DNA niesie cechy do potomstwa. Energię dają cukry, nie DNA."],
            ua: ["ДНК несе риси до потомства. Енергію дають цукри, не ДНК."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co woda?", ua: "Коротке питання. Навіщо вода?" },
      task: {
        id: "bio-r2-g1",
        type: "single-choice",
        question: {
          pl: "Jaka jest główna rola wody w organizmie?",
          ua: "Яка головна роль води в організмі?"
        },
        options: [
          { id: "a", label: { pl: "transportuje substancje w komórce i między komórkami", ua: "транспортує речовини в клітині і між клітинами" } },
          { id: "b", label: { pl: "niesie informację o cechach jak DNA", ua: "несе інформацію про риси, як ДНК" } },
          { id: "c", label: { pl: "buduje kości", ua: "будує кістки" } }
        ],
        answer: "a",
        hint: {
          pl: "Woda wozi. Zapis cech i twarde kości to inne składniki.",
          ua: "Вода возить. Запис рис і тверді кістки — це інші складники."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Informację o cechach niesie DNA. Woda transportuje substancje.",
              ua: "Інформацію про риси несе ДНК. Вода транспортує речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kości buduje wapń. Woda transportuje substancje i pomaga usuwać zbędne.",
              ua: "Кістки будує кальцій. Вода транспортує речовини і допомагає виводити зайві."
            }
          }
        ],
        explanation: {
          pl: "Woda transportuje substancje w komórce i między komórkami.",
          ua: "Вода транспортує речовини в клітині і між клітинами."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. DNA jak tłuszcz", ua: "Типова помилка. ДНК як жир" },
      claim: {
        pl: "„DNA jest zapasem energii, tak jak tłuszcz.”",
        ua: "«ДНК є запасом енергії, так само як жир.»"
      },
      text: {
        pl: [
          "Tłuszcze magazynują. DNA niesie informację o cechach do potomstwa.",
          "Energię organizm bierze z cukrów, nie z zapisu cech."
        ],
        ua: [
          "Жири запасають. ДНК несе інформацію про риси до потомства.",
          "Енергію організм бере з цукрів, не із запису рис."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Co niesie DNA?", ua: "Сам. Що несе ДНК?" },
      task: {
        id: "bio-r2-p1",
        type: "single-choice",
        question: {
          pl: "Co robi DNA w organizmie?",
          ua: "Що робить ДНК в організмі?"
        },
        options: [
          { id: "a", label: { pl: "niesie informację o cechach i przekazuje ją potomstwu", ua: "несе інформацію про риси і передає її потомству" } },
          { id: "b", label: { pl: "jest głównym zapasem energii", ua: "є головним запасом енергії" } },
          { id: "c", label: { pl: "zastępuje wodę w transporcie moczu", ua: "замінює воду в транспорті сечі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapas energii to nie rola DNA. DNA niesie informację o cechach.",
              ua: "Запас енергії — не роль ДНК. ДНК несе інформацію про риси."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mocz i transport to rola wody. DNA przekazuje cechy potomstwu.",
              ua: "Сеча і транспорт — це роль води. ДНК передає риси потомству."
            }
          }
        ],
        explanation: {
          pl: "DNA niesie informację o cechach i przekazuje ją potomstwu.",
          ua: "ДНК несе інформацію про риси і передає її потомству."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie komórki", ua: "Поняття. Дві клітини" },
      visual: vizGh("L08_Porownujemy_komorki", "l08-zwierze-roslina.png", {
        alt: { pl: "Komórka zwierzęca obok roślinnej", ua: "Тваринна клітина поруч із рослинною" },
        title: { pl: "Wspólne części i trzy dodatki rośliny.", ua: "Спільні частини і три додатки рослини." },
        prompt: { pl: "Schemat lekcji 8: komórka zwierzęca i roślinna." }
      }),
      text: {
        pl: [
          "Obie komórki mają błonę, cytoplazmę, jądro i mitochondria. W mitochondriach uwalnia się energia z cukru przy tlenie.",
          ["Komórka roślinna ma dodatkowo ", em("ścianę komórkową"), " z celulozy, ", em("chloroplasty"), " i zwykle dużą ", em("wakuolę"), ". Błona zostaje pod ścianą."],
          "Fotosynteza zachodzi w chloroplastach. U zwierzęcia wakuole są małe i jest ich wiele. Bakterii tu nie porównujemy — nie mają jądra, to następny dział."
        ],
        ua: [
          "Обидві клітини мають мембрану, цитоплазму, ядро і мітохондрії. У мітохондріях вивільняється енергія з цукру при кисні.",
          ["Рослинна клітина має додатково ", em("клітинну стінку"), " з целюлози, ", em("хлоропласти"), " і зазвичай велику ", em("вакуолю"), ". Мембрана лишається під стінкою."],
          "Фотосинтез відбувається в хлоропластах. У тварини вакуолі малі і їх багато. Бактерій тут не порівнюємо — вони не мають ядра, це наступний розділ."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Liść i policzek", ua: "Приклад. Листок і щока" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Komórka policzka ma błonę, cytoplazmę, jądro i mitochondria."],
            ua: ["Клітина щоки має мембрану, цитоплазму, ядро і мітохондрії."]
          }
        },
        {
          text: {
            pl: ["Komórka liścia ma to samo i jeszcze ścianę, chloroplasty oraz dużą wakuolę."],
            ua: ["Клітина листка має те саме і ще стінку, хлоропласти та велику вакуолю."]
          }
        },
        {
          text: {
            pl: ["Zielony barwnik jest w chloroplaście. Energii z cukru przy tlenie szukaj w mitochondrium."],
            ua: ["Зелений барвник є в хлоропласті. Енергію з цукру при кисні шукай у мітохондрії."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co dodaje roślina?", ua: "Коротке питання. Що додає рослина?" },
      task: {
        id: "bio-r2-g2",
        type: "single-choice",
        question: {
          pl: "Co ma komórka roślinna, a zwierzęca nie?",
          ua: "Що має рослинна клітина, а тваринна ні?"
        },
        options: [
          { id: "a", label: { pl: "ścianę komórkową, chloroplasty i dużą wakuolę", ua: "клітинну стінку, хлоропласти і велику вакуолю" } },
          { id: "b", label: { pl: "błonę i jądro, których zwierzę nie ma", ua: "мембрану і ядро, яких тварина не має" } },
          { id: "c", label: { pl: "mitochondria zamiast błony", ua: "мітохондрії замість мембрани" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj trzech dodatków rośliny. Błona i jądro są w obu.",
          ua: "Шукай три додатки рослини. Мембрана і ядро є в обох."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błona i jądro są w obu komórkach. Roślina dodaje ścianę, chloroplasty i dużą wakuolę.",
              ua: "Мембрана і ядро є в обох клітинах. Рослина додає стінку, хлоропласти і велику вакуолю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondria nie zastępują błony. Są w obu komórkach. Dodatki rośliny to ściana, chloroplasty i duża wakuola.",
              ua: "Мітохондрії не замінюють мембрану. Вони є в обох клітинах. Додатки рослини — стінка, хлоропласти і велика вакуоля."
            }
          }
        ],
        explanation: {
          pl: "Roślina dodaje ścianę, chloroplasty i dużą wakuolę.",
          ua: "Рослина додає стінку, хлоропласти і велику вакуолю."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Energia w chloroplaście", ua: "Типова помилка. Енергія в хлоропласті" },
      claim: {
        pl: "„Mitochondrium składa cukier, a chloroplast uwalnia energię.”",
        ua: "«Мітохондрія складає цукор, а хлоропласт вивільняє енергію.»"
      },
      text: {
        pl: [
          "Chloroplast prowadzi fotosyntezę.",
          "Mitochondrium uwalnia energię z gotowego cukru przy tlenie."
        ],
        ua: [
          "Хлоропласт веде фотосинтез.",
          "Мітохондрія вивільняє енергію з готового цукру при кисні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa miejsca", ua: "Сам. Два місця" },
      task: {
        id: "bio-r2-p2",
        type: "single-choice",
        question: {
          pl: "Gdzie w komórce roślinnej jest fotosynteza, a gdzie energia z cukru przy tlenie?",
          ua: "Де в рослинній клітині фотосинтез, а де енергія з цукру при кисні?"
        },
        options: [
          { id: "a", label: { pl: "fotosynteza w chloroplaście; energia w mitochondrium", ua: "фотосинтез у хлоропласті; енергія в мітохондрії" } },
          { id: "b", label: { pl: "obie w ścianie z celulozy", ua: "обидва в стінці з целюлози" } },
          { id: "c", label: { pl: "fotosynteza w mitochondrium; energia w dużej wakuoli", ua: "фотосинтез у мітохондрії; енергія у великій вакуолі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ściana z celulozy chroni i nadaje kształt. Fotosynteza jest w chloroplaście, energia przy tlenie w mitochondrium.",
              ua: "Стінка з целюлози захищає і надає форму. Фотосинтез є в хлоропласті, енергія при кисні в мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Miejsca są zamienione. Cukier powstaje w chloroplaście. Energię przy tlenie uwalnia mitochondrium, nie wakuola.",
              ua: "Місця переплутані. Цукор виникає в хлоропласті. Енергію при кисні вивільняє мітохондрія, не вакуоля."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza jest w chloroplaście. Energia z cukru przy tlenie — w mitochondrium.",
          ua: "Фотосинтез є в хлоропласті. Енергія з цукру при кисні — в мітохондрії."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Fotosynteza", ua: "Поняття. Фотосинтез" },
      visual: vizGh("L09_Samozywnosc_i_fotosynteza", "l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Dwutlenek węgla + woda → glukoza + tlen.", ua: "Вуглекислий газ + вода → глюкоза + кисень." },
        prompt: { pl: "Plansza lekcji 9: równanie słowne fotosyntezy." }
      }),
      text: {
        pl: [
          [em("Samożywność"), " znaczy, że organizm sam wytwarza pokarm. U roślin zielonych robi to ", em("fotosynteza"), " w chloroplastach."],
          "Równanie słowne: dwutlenek węgla + woda → glukoza + tlen. Przy strzałce są światło i chlorofil. Światła nie wpisujemy jako substratu.",
          "Część glukozy roślina magazynuje jako skrobię. W doświadczeniu zmieniasz tylko światło. Jodyna barwi skrobię na ciemnoniebiesko, granatowo. Bez skrobi plama zostaje żółtawa."
        ],
        ua: [
          [em("Саможивлення"), " означає, що організм сам виробляє поживу. У зелених рослин це робить ", em("фотосинтез"), " у хлоропластах."],
          "Словесне рівняння: вуглекислий газ + вода → глюкоза + кисень. Біля стрілки є світло і хлорофіл. Світло не вписуємо як речовину зліва.",
          "Частину глюкози рослина запасає як крохмаль. У досліді змінюєш лише світло. Йод забарвлює крохмаль у темно-синій. Без крохмалю пляма лишається жовтуватою."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kierunek strzałki", ua: "Приклад. Напрям стрілки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej: dwutlenek węgla i woda. Z nich powstaje cukier."],
            ua: ["Ліворуч: вуглекислий газ і вода. З них виникає цукор."]
          }
        },
        {
          text: {
            pl: ["Po prawej: glukoza i tlen. Światło i chlorofil stoją przy strzałce."],
            ua: ["Праворуч: глюкоза і кисень. Світло і хлорофіл стоять біля стрілки."]
          }
        },
        {
          text: {
            pl: ["Odwrotna strzałka, z energią po prawej, to oddychanie tlenowe, nie fotosynteza."],
            ua: ["Зворотна стрілка, з енергією праворуч, — це аеробне дихання, не фотосинтез."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które równanie?", ua: "Коротке питання. Яке рівняння?" },
      task: {
        id: "bio-r2-g3",
        type: "single-choice",
        question: {
          pl: "Które równanie słowne jest fotosyntezą?",
          ua: "Яке словесне рівняння є фотосинтезом?"
        },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "b", label: { pl: "glukoza + tlen → dwutlenek węgla + woda + energia", ua: "глюкоза + кисень → вуглекислий газ + вода + енергія" } },
          { id: "c", label: { pl: "światło + tlen → glukoza, bez wody", ua: "світло + кисень → глюкоза, без води" } }
        ],
        answer: "a",
        hint: {
          pl: "Cukier powstaje. Energia po prawej należy do oddychania.",
          ua: "Цукор виникає. Енергія праворуч належить диханню."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To oddychanie tlenowe: cukier się zużywa, energia się uwalnia. W fotosyntezie cukier powstaje.",
              ua: "Це аеробне дихання: цукор споживається, енергія вивільняється. У фотосинтезі цукор виникає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Światło stoi przy strzałce, nie zamiast dwutlenku węgla i wody. Po lewej są dwutlenek węgla i woda.",
              ua: "Світло стоїть біля стрілки, не замість вуглекислого газу і води. Ліворуч є вуглекислий газ і вода."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza: dwutlenek węgla + woda → glukoza + tlen.",
          ua: "Фотосинтез: вуглекислий газ + вода → глюкоза + кисень."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jodyna jest chlorofilem", ua: "Типова помилка. Йод є хлорофілом" },
      claim: {
        pl: "„Granatowa plama to chlorofil, który powstał z jodyny.”",
        ua: "«Гранатова пляма — це хлорофіл, який виник із йоду.»"
      },
      text: {
        pl: [
          "Jodyna tylko pokazuje skrobię. Sama jej nie wytwarza i nie jest chlorofilem.",
          "Ciemnoniebieski kolor znaczy: w tym miejscu liścia była skrobia."
        ],
        ua: [
          "Йод лише показує крохмаль. Сам його не виробляє і не є хлорофілом.",
          "Темно-синій колір означає: у цьому місці листка був крохмаль."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zakryty pasek liścia", ua: "Сам. Закрита смужка листка" },
      task: {
        id: "bio-r2-p3",
        type: "single-choice",
        question: {
          pl: "Część liścia była zakryta, część miała światło. Po jodynie zakryty pasek zostaje żółtawy. Co z tego wynika?",
          ua: "Частина листка була закрита, частина мала світло. Після йоду закрита смужка лишається жовтуватою. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "bez światła skrobia w tym pasku nie powstała", ua: "без світла крохмаль у цій смужці не виник" } },
          { id: "b", label: { pl: "żółty kolor znaczy, że skrobi jest bardzo dużo", ua: "жовтий колір означає, що крохмалю дуже багато" } },
          { id: "c", label: { pl: "jodyna zamieniła pasek w chlorofil", ua: "йод перетворив смужку на хлорофіл" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dużo skrobi daje ciemnoniebieski kolor. Żółtawa plama znaczy, że skrobi nie było.",
              ua: "Багато крохмалю дає темно-синій колір. Жовтувата пляма означає, що крохмалю не було."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna nie wytwarza chlorofilu. Żółtawy pasek pokazuje brak skrobi tam, gdzie nie było światła.",
              ua: "Йод не виробляє хлорофіл. Жовтувата смужка показує брак крохмалю там, де не було світла."
            }
          }
        ],
        explanation: {
          pl: "Bez światła skrobia nie powstała, więc jodyna nie zabarwiła paska na granatowo.",
          ua: "Без світла крохмаль не виник, тож йод не забарвив смужку в темно-синій."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cudzożywność", ua: "Поняття. Гетеротрофне живлення" },
      visual: vizGh("L11_Cudzozywnosc", "l11-cudzo.png", {
        alt: { pl: "Roślina wytwarza pokarm, zwierzęta i grzyb go pobierają", ua: "Рослина виробляє поживу, тварини і гриб її беруть" },
        title: { pl: "Gotowy pokarm. Jedna czynność, drugi sposób.", ua: "Готова пожива. Одна функція, другий спосіб." },
        prompt: { pl: "Plansza lekcji 11: samożywność i cudzożywność." }
      }),
      text: {
        pl: [
          [em("Cudzożywność"), " to pobieranie gotowego pokarmu od innych organizmów albo z ich szczątków."],
          "Tak żyją zwierzęta, grzyby, wiele bakterii i człowiek. Zając je rośliny, lis je zwierzęta, grzyb na pniu bierze szczątki.",
          "To nadal odżywianie się, nie ósma czynność. Samożywność wytwarza pokarm. Cudzożywność go bierze."
        ],
        ua: [
          [em("Гетеротрофне живлення"), " — це вбирання готової поживи від інших організмів або з їхніх решток."],
          "Так живуть тварини, гриби, багато бактерій і людина. Заєць їсть рослини, лисиця їсть тварин, гриб на пні бере рештки.",
          "Це й далі живлення, не восьма функція. Саможивлення виробляє поживу. Гетеротрофне її бере."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trawa, zając, lis", ua: "Приклад. Трава, заєць, лисиця" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trawa sama robi cukier. Jest samożywna."],
            ua: ["Трава сама робить цукор. Вона саможивна."]
          }
        },
        {
          text: {
            pl: ["Zając zjada trawę. Nie dostaje przez to chloroplastów."],
            ua: ["Заєць з’їдає траву. Не отримує через це хлоропластів."]
          }
        },
        {
          text: {
            pl: ["Lis zjada zająca. Jego pokarm też zaczął się od rośliny."],
            ua: ["Лисиця з’їдає зайця. Її пожива теж почалася від рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa sposoby", ua: "Коротке питання. Два способи" },
      task: {
        id: "bio-r2-g4",
        type: "single-choice",
        question: {
          pl: "Czym cudzożywność różni się od samożywności?",
          ua: "Чим гетеротрофне живлення відрізняється від саможивлення?"
        },
        options: [
          { id: "a", label: { pl: "cudzożywny bierze gotowy pokarm; samożywny sam go wytwarza", ua: "гетеротроф бере готову поживу; саможивний сам її виробляє" } },
          { id: "b", label: { pl: "oba wytwarzają glukozę w chloroplastach", ua: "обидва виробляють глюкозу в хлоропластах" } },
          { id: "c", label: { pl: "cudzożywność to oddychanie bez mitochondrium", ua: "гетеротрофне живлення — це дихання без мітохондрії" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz, skąd jest pokarm: z własnej fotosyntezy czy już gotowy.",
          ua: "Дивись, звідки пожива: із власного фотосинтезу чи вже готова."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukozę w chloroplastach wytwarza samożywna roślina. Cudzożywny bierze gotowy pokarm.",
              ua: "Глюкозу в хлоропластах виробляє саможивна рослина. Гетеротроф бере готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Oddychanie uwalnia energię. Cudzożywność jest sposobem zdobywania pokarmu, nie zamianą mitochondrium.",
              ua: "Дихання вивільняє енергію. Гетеротрофне живлення є способом здобувати поживу, не заміною мітохондрії."
            }
          }
        ],
        explanation: {
          pl: "Cudzożywny bierze gotowy pokarm. Samożywny sam go wytwarza.",
          ua: "Гетеротроф бере готову поживу. Саможивний сам її виробляє."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zając staje się rośliną", ua: "Типова помилка. Заєць стає рослиною" },
      claim: {
        pl: "„Zając, który je trawę, sam prowadzi fotosyntezę.”",
        ua: "«Заєць, який їсть траву, сам веде фотосинтез.»"
      },
      text: {
        pl: [
          "Jedzenie rośliny nie przenosi chloroplastów.",
          "Zając zostaje cudzożywny. Trawa zostaje samożywna."
        ],
        ua: [
          "Їжа рослини не переносить хлоропласти.",
          "Заєць лишається гетеротрофним. Трава лишається саможивною."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Grzyb na pniu", ua: "Сам. Гриб на пні" },
      task: {
        id: "bio-r2-p4",
        type: "single-choice",
        question: {
          pl: "Grzyb bierze pokarm z martwego pnia. Jaki to sposób odżywiania?",
          ua: "Гриб бере поживу з мертвого пня. Який це спосіб живлення?"
        },
        options: [
          { id: "a", label: { pl: "cudzożywność — gotowy pokarm ze szczątków", ua: "гетеротрофне живлення — готова пожива з решток" } },
          { id: "b", label: { pl: "samożywność — fotosynteza w pniu", ua: "саможивлення — фотосинтез у пні" } },
          { id: "c", label: { pl: "ósma czynność, obok odżywiania", ua: "восьма функція, поруч із живленням" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pień nie prowadzi fotosyntezy dla grzyba. Grzyb bierze gotowy pokarm ze szczątków.",
              ua: "Пень не веде фотосинтез для гриба. Гриб бере готову поживу з решток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Saprobiont mieści się w odżywianiu. Nie dodajemy ósmej czynności.",
              ua: "Сапробіонт вміщається в живленні. Не додаємо восьмої функції."
            }
          }
        ],
        explanation: {
          pl: "Grzyb na pniu jest cudzożywny: bierze gotowy pokarm ze szczątków.",
          ua: "Гриб на пні гетеротрофний: бере готову поживу з решток."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Oddychanie i fermentacja", ua: "Поняття. Дихання і бродіння" },
      visual: vizGh("L12_Oddychanie_tlenowe_i_fermentacja", "l12-fermentacja.png", {
        alt: { pl: "Drożdże i fermentacja w mięśniu", ua: "Дріжджі і бродіння в м’язі" },
        title: { pl: "Bez tlenu energii jest mniej.", ua: "Без кисню енергії менше." },
        prompt: { pl: "Plansza lekcji 12: drożdże i kwas mlekowy." }
      }),
      text: {
        pl: [
          "Oddychanie jako czynność ma dwa piętra. Wymiana gazów dostarcza tlen. W mitochondrium: glukoza + tlen → dwutlenek węgla + woda + energia.",
          [em("Fermentacja"), " uwalnia energię z cukru ", em("bez tlenu"), " i daje jej mniej. Drożdże wytwarzają dwutlenek węgla i alkohol. W mięśniu przy braku tlenu powstaje kwas mlekowy."],
          "W doświadczeniu z drożdżami zmieniasz jeden czynnik, na przykład cukier. Balon pokazuje dwutlenek węgla. Mieszaniny nie pijesz. Roślina też oddycha, nie tylko fotosyntetyzuje."
        ],
        ua: [
          "Дихання як функція має два поверхи. Обмін газів постачає кисень. У мітохондрії: глюкоза + кисень → вуглекислий газ + вода + енергія.",
          [em("Бродіння"), " вивільняє енергію з цукру ", em("без кисню"), " і дає її менше. Дріжджі виробляють вуглекислий газ і спирт. У м’язі при нестачі кисню виникає молочна кислота."],
          "У досліді з дріжджами змінюєш один чинник, наприклад цукор. Кулька показує вуглекислий газ. Мішанину не п’єш. Рослина теж дихає, не лише фотосинтезує."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa równania", ua: "Приклад. Два рівняння" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Przy tlenie cukier się zużywa. Powstają dwutlenek węgla, woda i energia."],
            ua: ["При кисні цукор споживається. Виникають вуглекислий газ, вода і енергія."]
          }
        },
        {
          text: {
            pl: ["Bez tlenu drożdże dają dwutlenek węgla i alkohol. Energii jest mniej."],
            ua: ["Без кисню дріжджі дають вуглекислий газ і спирт. Енергії менше."]
          }
        },
        {
          text: {
            pl: ["Mięsień nie robi alkoholu. Przy braku tlenu powstaje w nim kwas mlekowy."],
            ua: ["М’яз не робить спирт. При нестачі кисню в ньому виникає молочна кислота."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Z tlenem czy bez?", ua: "Коротке питання. З киснем чи без?" },
      task: {
        id: "bio-r2-g5",
        type: "single-choice",
        question: {
          pl: "Czym fermentacja różni się od oddychania tlenowego?",
          ua: "Чим бродіння відрізняється від аеробного дихання?"
        },
        options: [
          { id: "a", label: { pl: "zachodzi bez tlenu i daje mniej energii", ua: "відбувається без кисню і дає менше енергії" } },
          { id: "b", label: { pl: "to fotosynteza w chloroplastach drożdży", ua: "це фотосинтез у хлоропластах дріжджів" } },
          { id: "c", label: { pl: "daje więcej energii, bo tlen nie jest zużywany", ua: "дає більше енергії, бо кисень не споживається" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj braku tlenu i mniejszej energii, nie chloroplastów.",
          ua: "Шукай брак кисню і меншу енергію, не хлоропласти."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Drożdże nie mają chloroplastów. Fermentacja uwalnia energię z gotowego cukru bez tlenu.",
              ua: "Дріжджі не мають хлоропластів. Бродіння вивільняє енергію з готового цукру без кисню."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez tlenu energii jest mniej. Więcej daje oddychanie tlenowe w mitochondrium.",
              ua: "Без кисню енергії менше. Більше дає аеробне дихання в мітохондрії."
            }
          }
        ],
        explanation: {
          pl: "Fermentacja zachodzi bez tlenu i daje mniej energii.",
          ua: "Бродіння відбувається без кисню і дає менше енергії."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Balon to tlen", ua: "Типова помилка. Кулька — це кисень" },
      claim: {
        pl: "„Balon nad drożdżami nadyma tlen z fotosyntezy.”",
        ua: "«Кульку над дріжджами надуває кисень із фотосинтезу.»"
      },
      text: {
        pl: [
          "Drożdże nie fotosyntetyzują.",
          "Gaz w balonie to dwutlenek węgla z fermentacji."
        ],
        ua: [
          "Дріжджі не фотосинтезують.",
          "Газ у кульці — це вуглекислий газ із бродіння."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pieczenie mięśni", ua: "Сам. Печіння м’язів" },
      task: {
        id: "bio-r2-p5",
        type: "single-choice",
        question: {
          pl: "Po bardzo szybkim biegu mięśnie pieką, bo tlenu chwilowo zabrakło. Co wtedy powstaje?",
          ua: "Після дуже швидкого бігу м’язи печуть, бо кисню на мить забракло. Що тоді виникає?"
        },
        options: [
          { id: "a", label: { pl: "kwas mlekowy", ua: "молочна кислота" } },
          { id: "b", label: { pl: "alkohol, jak u drożdży", ua: "спирт, як у дріжджів" } },
          { id: "c", label: { pl: "glukoza w chloroplastach mięśnia", ua: "глюкоза в хлоропластах м’яза" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Alkohol powstaje u drożdży. W mięśniu przy braku tlenu powstaje kwas mlekowy.",
              ua: "Спирт виникає в дріжджів. У м’язі при нестачі кисню виникає молочна кислота."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mięsień nie ma chloroplastów. Przy braku tlenu powstaje kwas mlekowy, nie glukoza.",
              ua: "М’яз не має хлоропластів. При нестачі кисню виникає молочна кислота, не глюкоза."
            }
          }
        ],
        explanation: {
          pl: "Przy chwilowym braku tlenu w mięśniach powstaje kwas mlekowy.",
          ua: "При короткій нестачі кисню в м’язах виникає молочна кислота."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Siedem czynności", ua: "Поняття. Сім функцій" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Jedna nie zastępuje reszty.", ua: "Одна не замінює решти." },
        prompt: { pl: "Infografika lekcji 1: siedem czynności." }
      }),
      text: {
        pl: [
          "Siedem: odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce.",
          "Samożywność i cudzożywność mieszczą się w odżywianiu. Wymiana gazów i energia w mitochondrium mieszczą się w oddychaniu.",
          "Bez odżywiania nie ma paliwa. Bez oddychania nie ma energii. Bez wydalania zbędne substancje zostają. Sam ruch, jak w samochodzie, nie wystarcza."
        ],
        ua: [
          "Сім: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники.",
          "Саможивлення і гетеротрофне живлення вміщаються в живленні. Обмін газів і енергія в мітохондрії вміщаються в диханні.",
          "Без живлення немає палива. Без дихання немає енергії. Без виділення зайві речовини лишаються. Самого руху, як в автомобілі, не досить."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pies i samochód", ua: "Приклад. Пес і автомобіль" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pies je, oddycha, wydala, rusza się, rośnie, może mieć szczenięta i reaguje na dźwięk."],
            ua: ["Пес їсть, дихає, виділяє, рухається, росте, може мати цуценят і реагує на звук."]
          }
        },
        {
          text: {
            pl: ["Samochód tylko jedzie. Nie jest z komórek i nie wykonuje reszty czynności."],
            ua: ["Автомобіль лише їде. Не є з клітин і не виконує решти функцій."]
          }
        },
        {
          text: {
            pl: ["Drzewo nie biega, a jest organizmem. Brak biegu nie skreśla odżywiania i oddychania."],
            ua: ["Дерево не бігає, а є організмом. Брак бігу не скасовує живлення і дихання."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dlaczego wszystkie?", ua: "Коротке питання. Чому всі?" },
      task: {
        id: "bio-r2-g6",
        type: "single-choice",
        question: {
          pl: "Dlaczego organizm potrzebuje wszystkich siedmiu czynności?",
          ua: "Чому організм потребує всіх семи функцій?"
        },
        options: [
          { id: "a", label: { pl: "każda jest potrzebna; jedna nie zastępuje reszty", ua: "кожна потрібна; одна не замінює решти" } },
          { id: "b", label: { pl: "wystarczy sam ruch, jak w samochodzie", ua: "достатньо самого руху, як в автомобілі" } },
          { id: "c", label: { pl: "wystarczy sama fotosynteza, nawet u lisa", ua: "достатньо самого фотосинтезу, навіть у лисиці" } }
        ],
        answer: "a",
        hint: {
          pl: "Pomyśl, co zostaje bez paliwa, bez energii albo bez wydalania.",
          ua: "Подумай, що лишається без палива, без енергії або без виділення."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Samochód się rusza i nie żyje. Organizm potrzebuje też odżywiania, oddychania i wydalania.",
              ua: "Автомобіль рухається і не живе. Організм потребує також живлення, дихання і виділення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza jest sposobem odżywiania rośliny. Lis jej nie prowadzi, a i roślinie nie zastępuje oddychania.",
              ua: "Фотосинтез є способом живлення рослини. Лисиця його не веде, а й рослині він не замінює дихання."
            }
          }
        ],
        explanation: {
          pl: "Każda z siedmiu czynności jest potrzebna. Jedna nie zastępuje reszty.",
          ua: "Кожна з семи функцій потрібна. Одна не замінює решти."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kolor liścia", ua: "Типова помилка. Колір листка" },
      claim: {
        pl: "„Ładny zielony kolor jest ósmą czynnością życiową.”",
        ua: "«Гарний зелений колір є восьмою життєвою функцією.»"
      },
      text: {
        pl: [
          "Kolor nie jest czynnością. Chlorofil tylko pomaga w fotosyntezie.",
          "Lista zostaje przy siedmiu."
        ],
        ua: [
          "Колір не є функцією. Хлорофіл лише допомагає у фотосинтезі.",
          "Список лишається при семи."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Brak wydalania", ua: "Сам. Брак виділення" },
      task: {
        id: "bio-r2-p6",
        type: "single-choice",
        question: {
          pl: "Organizm je i oddycha, ale nie wydala. Co z tego wynika?",
          ua: "Організм їсть і дихає, але не виділяє. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "zbędne substancje zostają w organizmie", ua: "зайві речовини лишаються в організмі" } },
          { id: "b", label: { pl: "nic, bo oddychanie zastępuje wydalanie", ua: "нічого, бо дихання замінює виділення" } },
          { id: "c", label: { pl: "wystarczy, jeśli organizm jest zielony", ua: "досить, якщо організм зелений" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Oddychanie uwalnia energię. Nie usuwa zbędnych substancji. Do tego jest wydalanie.",
              ua: "Дихання вивільняє енергію. Не виводить зайвих речовин. Для цього є виділення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielony kolor nie zastępuje wydalania. Zbędne substancje zostają w organizmie.",
              ua: "Зелений колір не замінює виділення. Зайві речовини лишаються в організмі."
            }
          }
        ],
        explanation: {
          pl: "Bez wydalania zbędne substancje zostają w organizmie.",
          ua: "Без виділення зайві речовини лишаються в організмі."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Siedem pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok działu sprawdziłeś nie tym słowem."
        ],
        ua: [
          "Сім питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок розділу ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Składniki", ua: "Перевірка 1. Складники" },
      task: {
        id: "bio-r2-t1",
        type: "single-choice",
        question: {
          pl: "Które zestawienie jest prawdziwe?",
          ua: "Яке зіставлення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "woda transportuje substancje; białka głównie budują; DNA niesie informację o cechach", ua: "вода транспортує речовини; білки здебільшого будують; ДНК несе інформацію про риси" } },
          { id: "b", label: { pl: "DNA jest zapasem energii; woda buduje kości", ua: "ДНК є запасом енергії; вода будує кістки" } },
          { id: "c", label: { pl: "białka barwią liść na zielono; tłuszcze zapisują cechy", ua: "білки забарвлюють листок у зелений; жири записують риси" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "DNA niesie informację, nie energię. Kości buduje wapń, a woda transportuje substancje.",
              ua: "ДНК несе інформацію, не енергію. Кістки будує кальцій, а вода транспортує речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Liść barwi chlorofil. Cechy zapisuje DNA. Białka głównie budują ciało.",
              ua: "Листок забарвлює хлорофіл. Риси записує ДНК. Білки здебільшого будують тіло."
            }
          }
        ],
        explanation: {
          pl: "Woda transportuje, białka budują, DNA niesie informację o cechach.",
          ua: "Вода транспортує, білки будують, ДНК несе інформацію про риси."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Komórki", ua: "Перевірка 2. Клітини" },
      task: {
        id: "bio-r2-t2",
        type: "single-choice",
        question: {
          pl: "Które zdanie porównuje komórkę zwierzęcą i roślinną?",
          ua: "Яке речення порівнює тваринну і рослинну клітину?"
        },
        options: [
          { id: "a", label: { pl: "obie mają błonę, cytoplazmę, jądro i mitochondria; roślinna dodaje ścianę, chloroplasty i dużą wakuolę", ua: "обидві мають мембрану, цитоплазму, ядро і мітохондрії; рослинна додає стінку, хлоропласти і велику вакуолю" } },
          { id: "b", label: { pl: "jądro ma tylko roślina", ua: "ядро має лише рослина" } },
          { id: "c", label: { pl: "chloroplasty ma komórka policzka, nie liścia", ua: "хлоропласти має клітина щоки, не листка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro jest w obu komórkach. Roślina dodaje ścianę, chloroplasty i dużą wakuolę.",
              ua: "Ядро є в обох клітинах. Рослина додає стінку, хлоропласти і велику вакуолю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty są w komórce liścia. Komórka policzka ich nie ma.",
              ua: "Хлоропласти є в клітині листка. Клітина щоки їх не має."
            }
          }
        ],
        explanation: {
          pl: "Wspólne są błona, cytoplazma, jądro i mitochondria. Roślina dodaje ścianę, chloroplasty i dużą wakuolę.",
          ua: "Спільні — мембрана, цитоплазма, ядро і мітохондрії. Рослина додає стінку, хлоропласти і велику вакуолю."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Fotosynteza", ua: "Перевірка 3. Фотосинтез" },
      task: {
        id: "bio-r2-t3",
        type: "single-choice",
        question: {
          pl: "Czego potrzebuje fotosynteza w chloroplastach?",
          ua: "Чого потребує фотосинтез у хлоропластах?"
        },
        options: [
          { id: "a", label: { pl: "światła, wody, dwutlenku węgla i chlorofilu", ua: "світла, води, вуглекислого газу і хлорофілу" } },
          { id: "b", label: { pl: "tylko tlenu, bo cukier już jest w liściu", ua: "лише кисню, бо цукор уже є в листку" } },
          { id: "c", label: { pl: "jodyny, która wytwarza glukozę", ua: "йоду, який виробляє глюкозу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tlen w fotosyntezie powstaje, nie jest substratem. Potrzeba światła, wody, dwutlenku węgla i chlorofilu.",
              ua: "Кисень у фотосинтезі виникає, не є речовиною зліва. Потрібні світло, вода, вуглекислий газ і хлорофіл."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna tylko pokazuje skrobię. Glukozę wytwarza fotosynteza ze światła, wody, dwutlenku węgla i chlorofilu.",
              ua: "Йод лише показує крохмаль. Глюкозу виробляє фотосинтез зі світла, води, вуглекислого газу і хлорофілу."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza potrzebuje światła, wody, dwutlenku węgla i chlorofilu.",
          ua: "Фотосинтез потребує світла, води, вуглекислого газу і хлорофілу."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Cudzożywność", ua: "Перевірка 4. Гетеротрофне живлення" },
      task: {
        id: "bio-r2-t4",
        type: "single-choice",
        question: {
          pl: "Krowa je trawę. Trawa sama robi cukier. Co to jest?",
          ua: "Корова їсть траву. Трава сама робить цукор. Що це?"
        },
        options: [
          { id: "a", label: { pl: "krowa jest cudzożywna, trawa samożywna", ua: "корова гетеротрофна, трава саможивна" } },
          { id: "b", label: { pl: "obie prowadzą fotosyntezę", ua: "обидві ведуть фотосинтез" } },
          { id: "c", label: { pl: "krowa jest pasożytem trawy, bo ją zjada", ua: "корова є паразитом трави, бо її з’їдає" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosyntezę prowadzi trawa. Krowa bierze gotowy pokarm, więc jest cudzożywna.",
              ua: "Фотосинтез веде трава. Корова бере готову поживу, тож вона гетеротрофна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zjadanie rośliny to roślinożerność, nie pasożytnictwo. Krowa jest cudzożywna.",
              ua: "З’їдання рослини — це рослиноїдність, не паразитизм. Корова гетеротрофна."
            }
          }
        ],
        explanation: {
          pl: "Trawa sama wytwarza pokarm. Krowa bierze gotowy.",
          ua: "Трава сама виробляє поживу. Корова бере готову."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Fermentacja", ua: "Перевірка 5. Бродіння" },
      task: {
        id: "bio-r2-t5",
        type: "single-choice",
        question: {
          pl: "Które zdanie o drożdżach jest prawdziwe?",
          ua: "Яке речення про дріжджі правдиве?"
        },
        options: [
          { id: "a", label: { pl: "bez tlenu wytwarzają dwutlenek węgla i alkohol; energii jest mniej niż przy oddychaniu tlenowym", ua: "без кисню виробляють вуглекислий газ і спирт; енергії менше, ніж при аеробному диханні" } },
          { id: "b", label: { pl: "robią fotosyntezę i nadymają balon tlenem", ua: "роблять фотосинтез і надувають кульку киснем" } },
          { id: "c", label: { pl: "w mitochondrium przy tlenie dają kwas mlekowy zamiast energii", ua: "у мітохондрії при кисні дають молочну кислоту замість енергії" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Drożdże nie fotosyntetyzują. Balon nadyma dwutlenek węgla z fermentacji.",
              ua: "Дріжджі не фотосинтезують. Кульку надуває вуглекислий газ із бродіння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kwas mlekowy powstaje w mięśniu przy braku tlenu. Drożdże bez tlenu dają dwutlenek węgla i alkohol.",
              ua: "Молочна кислота виникає в м’язі при нестачі кисню. Дріжджі без кисню дають вуглекислий газ і спирт."
            }
          }
        ],
        explanation: {
          pl: "Drożdże bez tlenu wytwarzają dwutlenek węgla i alkohol. Energii jest mniej.",
          ua: "Дріжджі без кисню виробляють вуглекислий газ і спирт. Енергії менше."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. Jeden czynnik", ua: "Перевірка 6. Один чинник" },
      task: {
        id: "bio-r2-t6",
        type: "single-choice",
        question: {
          pl: "Które doświadczenie zmienia tylko jeden czynnik?",
          ua: "Який дослід змінює лише один чинник?"
        },
        options: [
          { id: "a", label: { pl: "dwie butelki drożdży: jedna z cukrem, druga bez cukru, reszta taka sama", ua: "дві пляшки дріжджів: одна з цукром, друга без цукру, решта така сама" } },
          { id: "b", label: { pl: "naraz inny cukier, wrzątek i inna butelka", ua: "водночас інший цукор, кип’яток і інша пляшка" } },
          { id: "c", label: { pl: "jodyna mierzy temperaturę liścia, próba kontrolna nie jest potrzebna", ua: "йод вимірює температуру листка, контрольна проба не потрібна" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kilka zmian naraz nie wiadomo, która zadziałała. W tym doświadczeniu różni się tylko cukier.",
              ua: "Кілька змін водночас — невідомо, яка подіяла. У цьому досліді різниться лише цукор."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna pokazuje skrobię, nie mierzy temperatury. Próba kontrolna jest potrzebna, żeby porównać jeden czynnik.",
              ua: "Йод показує крохмаль, не вимірює температуру. Контрольна проба потрібна, щоб порівняти один чинник."
            }
          }
        ],
        explanation: {
          pl: "Jedna zmiana to cukier. Reszta w obu butelkach zostaje taka sama.",
          ua: "Одна зміна — це цукор. Решта в обох пляшках лишається такою самою."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 7. Czynności życiowe", ua: "Перевірка 7. Життєві функції" },
      task: {
        id: "bio-r2-t7",
        type: "single-choice",
        question: {
          pl: "Na liście są: odżywianie się, oddychanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce. Czego brakuje?",
          ua: "У списку є: живлення, дихання, рух, ріст і розвиток, розмноження, реакція на подразники. Чого бракує?"
        },
        options: [
          { id: "a", label: { pl: "wydalania", ua: "виділення" } },
          { id: "b", label: { pl: "fotosyntezy jako ósmej czynności", ua: "фотосинтезу як восьмої функції" } },
          { id: "c", label: { pl: "ładnego koloru liścia", ua: "гарного кольору листка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza mieści się w odżywianiu. Na liście brakuje wydalania.",
              ua: "Фотосинтез вміщається в живленні. У списку бракує виділення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor nie jest czynnością życiową. Brakuje wydalania.",
              ua: "Колір не є життєвою функцією. Бракує виділення."
            }
          }
        ],
        explanation: {
          pl: "Brakuje wydalania. Z nim lista ma siedem czynności.",
          ua: "Бракує виділення. З ним список має сім функцій."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Dział II składa się w te siedem punktów.", ua: "Розділ II складається в ці сім пунктів." },
        prompt: { pl: "Ta sama infografika siedmiu czynności." }
      }),
      text: {
        pl: [
          "Woda transportuje substancje. Białka budują. DNA niesie informację, nie energię.",
          "Roślinna komórka dodaje ścianę, chloroplasty i dużą wakuolę. Energia jest w mitochondriach.",
          "Fotosynteza: dwutlenek węgla + woda → glukoza + tlen. Cudzożywne biorą gotowy pokarm.",
          "Oddychanie tlenowe zużywa cukier przy tlenie. Fermentacja jest bez tlenu i daje mniej energii.",
          "Siedem czynności. Jedna nie zastępuje reszty. Następny dział to wirusy, bakterie, protisty i grzyby."
        ],
        ua: [
          "Вода транспортує речовини. Білки будують. ДНК несе інформацію, не енергію.",
          "Рослинна клітина додає стінку, хлоропласти і велику вакуолю. Енергія є в мітохондріях.",
          "Фотосинтез: вуглекислий газ + вода → глюкоза + кисень. Гетеротрофні беруть готову поживу.",
          "Аеробне дихання споживає цукор при кисні. Бродіння є без кисню і дає менше енергії.",
          "Сім функцій. Одна не замінює решти. Наступний розділ — віруси, бактерії, протисти і гриби."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wymienię składniki organizmu i powiem, po co jest woda.", ua: "Назву складники організму і скажу, навіщо вода." },
        { pl: "Porównam komórkę zwierzęcą z roślinną.", ua: "Порівняю тваринну клітину з рослинною." },
        { pl: "Odróżnię samożywność od cudzożywności i podam równanie fotosyntezy.", ua: "Відрізню саможивлення від гетеротрофного і назву рівняння фотосинтезу." },
        { pl: "Odróżnię oddychanie tlenowe od fermentacji.", ua: "Відрізню аеробне дихання від бродіння." },
        { pl: "Złożę siedem czynności życiowych i wiem, że doświadczenie zmienia jeden czynnik.", ua: "Зберу сім життєвих функцій і знаю, що дослід змінює один чинник." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
