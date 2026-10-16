function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L16_Wirusy/images/";

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
      heading: { pl: "Misja: przepis w pudełku", ua: "Місія: рецепт у коробці" },
      visual: vizGh("l16-zacznijmy.png", {
        alt: { pl: "Model wirusa obok komórki z jądrem", ua: "Модель вірусу поряд із клітиною з ядром" },
        title: { pl: "Wirus nie jest komórką.", ua: "Вірус не є клітиною." },
        prompt: { pl: "Plansza lekcji 16: model wirusa obok komórki." }
      }),
      text: {
        pl: [
          "To lekcja 16: wirusy. Na lekcji 15 stanęły poza pięcioma królestwami. Dziś zobaczysz dlaczego i z czego są zbudowane.",
          "Wirusy istnieją. Mogą wywołać grypę albo ospę wietrzną. Nie jedzą, nie oddychają i nie mają budowy komórkowej.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 16: віруси. На уроці 15 вони стали поза п’ятьма царствами. Сьогодні побачиш чому і з чого вони збудовані.",
          "Віруси існують. Можуть викликати грип або вітрянку. Не їдять, не дихають і не мають клітинної будови.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "wirus", ua: "вірус — не клітина, поза п’ятьма царствами" },
        { pl: "kapsyd", ua: "капсид — білкова оболонка" },
        { pl: "kwas nukleinowy", ua: "нуклеїнова кислота — рецепт копій, не їжа" },
        { pl: "gospodarz", ua: "хазяїн — клітина, в якій вірус розмножується" },
        { pl: "namnażanie", ua: "розмноження вірусу — лише в клітині хазяїна" },
        { pl: "mikroskop elektronowy", ua: "електронний мікроскоп — ним видно вірус, шкільним ні" },
        { pl: "szczepienie", ua: "щеплення — організм учиться розпізнавати вірус" },
        { pl: "antybiotyk", ua: "антибіотик — на бактерії, не на віруси" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nie komórka", ua: "Поняття. Не клітина" },
      visual: vizGh("l16-nie-komorka.png", {
        alt: { pl: "Komórka zwierzęca i wirus bez jądra", ua: "Тваринна клітина і вірус без ядра" },
        title: { pl: "Komórka ma części. Wirus ma pakiet.", ua: "Клітина має частини. Вірус має пакет." },
        prompt: { pl: "Plansza lekcji 16: komórka obok wirusa." }
      }),
      text: {
        pl: [
          [em("Wirus"), " nie jest komórką. Nie ma cytozolu, mitochondriów ani jądra."],
          ["Sam nie wykonuje czynności życiowych z lekcji 14. Dlatego stoi ", em("poza pięcioma królestwami"), ": bakteriami, protistami, grzybami, roślinami i zwierzętami."],
          "Nie mówimy „wirusy nie istnieją”. To inna kategoria niż organizm z królestwa."
        ],
        ua: [
          [em("Вірус"), " не є клітиною. Не має цитозолю, мітохондрій чи ядра."],
          ["Сам не виконує життєвих функцій з уроку 14. Тому стоїть ", em("поза п’ятьма царствами"), ": бактеріями, протистами, грибами, рослинами і тваринами."],
          "Не кажемо «віруси не існують». Це інша категорія, ніж організм із царства."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Inna kategoria", ua: "Приклад. Інша категорія" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Komórka zwierzęca ma błonę, cytozol i jądro. Wirus tych części nie ma."],
            ua: ["Тваринна клітина має мембрану, цитозоль і ядро. Вірус цих частин не має."]
          }
        },
        {
          text: {
            pl: ["Pies jest w królestwie zwierząt. Wirus grypy nie jest szóstym królestwem."],
            ua: ["Пес є в царстві тварин. Вірус грипу не є шостим царством."]
          }
        },
        {
          text: {
            pl: ["Ludzie chorują na grypę. Zdanie „wirusów nie ma” jest fałszywe. Poza królestwami nie znaczy „nie istnieją”."],
            ua: ["Люди хворіють на грип. Речення «вірусів немає» хибне. Поза царствами не означає «не існують»."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Królestwa", ua: "Коротке питання. Царства" },
      task: {
        id: "l16-g1",
        type: "single-choice",
        question: {
          pl: "Dlaczego wirusa nie ma wśród pięciu królestw?",
          ua: "Чому віруса немає серед п’яти царств?"
        },
        options: [
          { id: "a", label: { pl: "bo nie jest komórką", ua: "бо не є клітиною" } },
          { id: "b", label: { pl: "bo wirusy nie istnieją", ua: "бо віруси не існують" } },
          { id: "c", label: { pl: "bo wirus jest szóstym królestwem roślin", ua: "бо вірус є шостим царством рослин" } }
        ],
        answer: "a",
        hint: {
          pl: "Sprawdź budowę: czy wirus ma jądro i cytozol jak komórka.",
          ua: "Перевір будову: чи має вірус ядро і цитозоль, як клітина."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirusy istnieją — grypa jest tego przykładem. Poza królestwami są dlatego, że nie są komórkami.",
              ua: "Віруси існують — грип є таким прикладом. Поза царствами вони тому, що не є клітинами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Królestw organizmów jest pięć. Wirus nie dokleja szóstego, bo nie jest komórką rośliny.",
              ua: "Царств організмів п’ять. Вірус не доклеює шостого, бо не є клітиною рослини."
            }
          }
        ],
        explanation: {
          pl: "Wirus nie jest komórką, więc stoi poza pięcioma królestwami.",
          ua: "Вірус не є клітиною, тож стоїть поза п’ятьма царствами."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ich nie ma", ua: "Типова помилка. Їх немає" },
      claim: {
        pl: "„Wirusy nie istnieją, więc nie należą do królestw.”",
        ua: "«Віруси не існують, тому не належать до царств.»"
      },
      text: {
        pl: [
          "Wirusy istnieją. Grypa i ospa wietrzna są tego śladem.",
          "Poza królestwami stoją z innego powodu: nie są komórkami."
        ],
        ua: [
          "Віруси існують. Грип і вітрянка є таким слідом.",
          "Поза царствами вони з іншої причини: не є клітинами."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Gospodarz i królestwo", ua: "Сам. Хазяїн і царство" },
      task: {
        id: "l16-p1",
        type: "single-choice",
        question: {
          pl: "Człowiek choruje na grypę. Uczeń wpisuje wirusa grypy do królestwa zwierząt. Co poprawić?",
          ua: "Людина хворіє на грип. Учень записує вірус грипу до царства тварин. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "gospodarz nie nadaje wirusowi królestwa — wirus nie jest komórką", ua: "хазяїн не дає вірусу царства — вірус не є клітиною" } },
          { id: "b", label: { pl: "tak — kto choruje, ten decyduje o królestwie wirusa", ua: "так — хто хворіє, той вирішує царство вірусу" } },
          { id: "c", label: { pl: "tak — wirus grypy jest gromadą ssaków", ua: "так — вірус грипу є класом ссавців" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Człowiek jest gospodarzem, nie królestwem wirusa. Wirus i tak nie jest komórką zwierzęcia.",
              ua: "Людина є хазяїном, не царством вірусу. Вірус усе одно не є клітиною тварини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gromada ssaki jest szczeblem zwierząt, nie nazwą wirusa. Wirus stoi poza królestwami.",
              ua: "Клас ссавці є щаблем тварин, не назвою вірусу. Вірус стоїть поза царствами."
            }
          }
        ],
        explanation: {
          pl: "Choroba człowieka nie wpisuje wirusa do królestwa zwierząt.",
          ua: "Хвороба людини не записує віруса до царства тварин."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa składniki", ua: "Поняття. Два складники" },
      visual: vizGh("l16-budowa.png", {
        alt: { pl: "Kwas nukleinowy w środku i kapsyd na zewnątrz", ua: "Нуклеїнова кислота всередині і капсид зовні" },
        title: { pl: "Przepis w środku. Białkowa osłonka na zewnątrz.", ua: "Рецепт усередині. Білкова оболонка зовні." },
        prompt: { pl: "Plansza lekcji 16: kwas nukleinowy i kapsyd." }
      }),
      text: {
        pl: [
          ["Wirus ma zwykle dwa składniki: ", em("kwas nukleinowy"), " (DNA albo RNA) i ", em("kapsyd"), "."],
          "Kwas nukleinowy to przepis na kopie wirusa, nie pokarm. Kapsyd to osłonka z białek.",
          "Niektóre wirusy mają jeszcze cienką osłonkę z zewnątrz. Na tę lekcję wystarczą dwa składniki. To nie jest komórka w miniaturze."
        ],
        ua: [
          ["Вірус має зазвичай два складники: ", em("нуклеїнову кислоту"), " (ДНК або РНК) і ", em("капсид"), "."],
          "Нуклеїнова кислота — це рецепт копій вірусу, не їжа. Капсид — це оболонка з білків.",
          "Деякі віруси мають ще тонку зовнішню оболонку. Для цього уроку досить двох складників. Це не клітина в мініатюрі."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pudełko z przepisem", ua: "Приклад. Коробка з рецептом" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W środku modelu jest kwas nukleinowy. To instrukcja nowych kopii, nie obiad wirusa."],
            ua: ["Усередині моделі є нуклеїнова кислота. Це інструкція нових копій, не обід вірусу."]
          }
        },
        {
          text: {
            pl: ["Na zewnątrz jest kapsyd: osłonka białkowa. To nie ściana celulozowa rośliny i nie jądro."],
            ua: ["Зовні є капсид: білкова оболонка. Це не целюлозна стінка рослини і не ядро."]
          }
        },
        {
          text: {
            pl: ["Cienka dodatkowa osłonka bywa u niektórych wirusów. Dziś nie jest trzecim obowiązkowym składnikiem."],
            ua: ["Тонка додаткова оболонка буває в деяких вірусів. Сьогодні це не третій обов’язковий складник."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Środek i osłonka", ua: "Коротке питання. Середина і оболонка" },
      task: {
        id: "l16-g2",
        type: "single-choice",
        question: {
          pl: "Co jest w środku wirusa, a co tworzy osłonkę?",
          ua: "Що є всередині вірусу, а що утворює оболонку?"
        },
        options: [
          { id: "a", label: { pl: "w środku kwas nukleinowy, osłonka to kapsyd z białek", ua: "всередині нуклеїнова кислота, оболонка — це капсид із білків" } },
          { id: "b", label: { pl: "w środku jądro, osłonka to ściana celulozowa", ua: "всередині ядро, оболонка — це целюлозна стінка" } },
          { id: "c", label: { pl: "w środku mitochondria, osłonka to chloroplast", ua: "всередині мітохондрії, оболонка — це хлоропласт" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj przepisu na kopie i białkowego pudełka, nie części komórki.",
          ua: "Шукай рецепт копій і білкову коробку, не частини клітини."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro i ściana celulozowa są częściami komórki. Wirus ma kwas nukleinowy i kapsyd.",
              ua: "Ядро і целюлозна стінка є частинами клітини. Вірус має нуклеїнову кислоту і капсид."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondria i chloroplast należą do komórek, nie do pary składników wirusa.",
              ua: "Мітохондрії і хлоропласт належать клітинам, не парі складників вірусу."
            }
          }
        ],
        explanation: {
          pl: "W środku jest kwas nukleinowy, a osłonkę białkową nazywamy kapsydem.",
          ua: "Усередині є нуклеїнова кислота, а білкову оболонку називаємо капсидом."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Komórka w miniaturze", ua: "Типова помилка. Клітина в мініатюрі" },
      claim: {
        pl: "„Wirus to mała komórka: ma jądro i mitochondria.”",
        ua: "«Вірус — це маленька клітина: має ядро і мітохондрії.»"
      },
      text: {
        pl: [
          "Na tę lekcję wirus ma dwa składniki: kwas nukleinowy i kapsyd.",
          "Nie ma jądra ani mitochondriów. Przepis w pudełku nie jest komórką."
        ],
        ua: [
          "Для цього уроку вірус має два складники: нуклеїнову кислоту і капсид.",
          "Не має ядра чи мітохондрій. Рецепт у коробці не є клітиною."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kapsyd", ua: "Сам. Капсид" },
      task: {
        id: "l16-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń mówi, że kapsyd to ściana celulozowa, a kwas nukleinowy to pokarm wirusa. Co jest trafne?",
          ua: "Учень каже, що капсид — це целюлозна стінка, а нуклеїнова кислота — їжа вірусу. Що влучне?"
        },
        options: [
          { id: "a", label: { pl: "kapsyd jest osłonką białkową, a kwas nukleinowy przepisem na kopie", ua: "капсид є білковою оболонкою, а нуклеїнова кислота — рецептом копій" } },
          { id: "b", label: { pl: "tak — wirus je swój kwas nukleinowy jak cukier", ua: "так — вірус їсть свою нуклеїнову кислоту, як цукор" } },
          { id: "c", label: { pl: "tak — kapsyd rośliny to duża wakuola", ua: "так — капсид рослини — це велика вакуоля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kwas nukleinowy nie jest posiłkiem. To przepis, według którego powstają kopie wirusa.",
              ua: "Нуклеїнова кислота не є їжею. Це рецепт, за яким постають копії вірусу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wakuola jest częścią komórki roślinnej. Kapsyd jest białkową osłonką wirusa.",
              ua: "Вакуоля є частиною рослинної клітини. Капсид є білковою оболонкою вірусу."
            }
          }
        ],
        explanation: {
          pl: "Kapsyd to osłonka białkowa, a kwas nukleinowy to przepis na kopie.",
          ua: "Капсид — це білкова оболонка, а нуклеїнова кислота — рецепт копій."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Tylko w gospodarzu", ua: "Поняття. Лише в хазяїні" },
      visual: vizGh("l16-gospodarz.png", {
        alt: { pl: "Trzy kroki: wirus na zewnątrz, wnika, powstają kopie", ua: "Три кроки: вірус зовні, входить, постають копії" },
        title: { pl: "Poza komórką nieczynny. Kopie powstają w środku.", ua: "Поза клітиною нечинний. Копії постають усередині." },
        prompt: { pl: "Plansza lekcji 16: wirus i komórka gospodarza." }
      }),
      text: {
        pl: [
          ["Wirus ", em("namnaża się"), " tylko w ", em("komórce gospodarza"), " — w komórce, którą wykorzystuje."],
          "Poza komórką nie je i nie oddycha. Jest nieczynny. Gdy wnika do środka, komórka wytwarza kopie według przepisu z kwasu nukleinowego.",
          "Gospodarzem może być komórka człowieka, zwierzęcia, rośliny, a nawet bakterii. Dziś wystarczy ta zasada, bez katalogu wirusów."
        ],
        ua: [
          ["Вірус ", em("розмножується"), " лише в ", em("клітині хазяїна"), " — у клітині, якою користується."],
          "Поза клітиною не їсть і не дихає. Він нечинний. Коли входить усередину, клітина виробляє копії за рецептом із нуклеїнової кислоти.",
          "Хазяїном може бути клітина людини, тварини, рослини чи навіть бактерії. Сьогодні досить цього правила, без каталогу вірусів."
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
            pl: ["Krok 1. Wirus jest na zewnątrz komórki. Sam kopii nie robi."],
            ua: ["Крок 1. Вірус є зовні клітини. Сам копій не робить."]
          }
        },
        {
          text: {
            pl: ["Krok 2. Wnika do komórki gospodarza."],
            ua: ["Крок 2. Входить у клітину хазяїна."]
          }
        },
        {
          text: {
            pl: ["Krok 3. Komórka wytwarza kopie wirusa. Szklanka wody nie zastępuje komórki gospodarza."],
            ua: ["Крок 3. Клітина виробляє копії вірусу. Склянка води не замінює клітину хазяїна."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie kopie?", ua: "Коротке питання. Де копії?" },
      task: {
        id: "l16-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie powstają nowe kopie wirusa?",
          ua: "Де постають нові копії вірусу?"
        },
        options: [
          { id: "a", label: { pl: "tylko w komórce gospodarza", ua: "лише в клітині хазяїна" } },
          { id: "b", label: { pl: "samodzielnie w szklance czystej wody", ua: "самостійно у склянці чистої води" } },
          { id: "c", label: { pl: "w powietrzu, bez żadnej komórki", ua: "у повітрі, без жодної клітини" } }
        ],
        answer: "a",
        hint: {
          pl: "Poza komórką wirus jest nieczynny.",
          ua: "Поза клітиною вірус нечинний."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Czysta woda nie jest gospodarzem. Kopie powstają w komórce, do której wirus wniknął.",
              ua: "Чиста вода не є хазяїном. Копії постають у клітині, в яку вірус увійшов."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Powietrze nie wytwarza kopii. Namnażanie zachodzi w komórce gospodarza.",
              ua: "Повітря не виробляє копій. Розмноження відбувається в клітині хазяїна."
            }
          }
        ],
        explanation: {
          pl: "Wirus namnaża się tylko w komórce gospodarza.",
          ua: "Вірус розмножується лише в клітині хазяїна."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szklanka wody", ua: "Типова помилка. Склянка води" },
      claim: {
        pl: "„Wirus urośnie sam w wodzie, bez komórki.”",
        ua: "«Вірус виросте сам у воді, без клітини.»"
      },
      text: {
        pl: [
          "Poza komórką wirus jest nieczynny.",
          "Nowe kopie powstają dopiero w komórce gospodarza."
        ],
        ua: [
          "Поза клітиною вірус нечинний.",
          "Нові копії постають лише в клітині хазяїна."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wirus rośliny", ua: "Сам. Вірус рослини" },
      task: {
        id: "l16-p3",
        type: "single-choice",
        question: {
          pl: "Wirus rośliny leży w doniczce z samą ziemią, bez komórki. Czy się tam namnoży?",
          ua: "Вірус рослини лежить у горщику з самою землею, без клітини. Чи він там розмножиться?"
        },
        options: [
          { id: "a", label: { pl: "nie — potrzebuje komórki rośliny, która jest gospodarzem", ua: "ні — потребує клітини рослини, яка є хазяїном" } },
          { id: "b", label: { pl: "tak — ziemia zastępuje komórkę gospodarza", ua: "так — земля замінює клітину хазяїна" } },
          { id: "c", label: { pl: "tak — namnaża się w wodzie z konewki", ua: "так — розмножується у воді з лійки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ziemia nie jest komórką. Wirus rośliny namnaża się w komórce swojego gospodarza.",
              ua: "Земля не є клітиною. Вірус рослини розмножується в клітині свого хазяїна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Woda z konewki nie wytwarza kopii. Potrzebna jest komórka rośliny.",
              ua: "Вода з лійки не виробляє копій. Потрібна клітина рослини."
            }
          }
        ],
        explanation: {
          pl: "Bez komórki gospodarza wirus rośliny się nie namnoży.",
          ua: "Без клітини хазяїна вірус рослини не розмножиться."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Za mały na szkolny mikroskop", ua: "Поняття. Замалий для шкільного мікроскопа" },
      visual: vizGh("l16-mikroskop.png", {
        alt: { pl: "Komórka, bakteria i jeszcze mniejszy wirus", ua: "Клітина, бактерія і ще менший вірус" },
        title: { pl: "Szkolny mikroskop nie pokazuje wirusa.", ua: "Шкільний мікроскоп не показує вірус." },
        prompt: { pl: "Plansza lekcji 16: skala wielkości i dwa mikroskopy." }
      }),
      text: {
        pl: [
          "Wirusy są dużo mniejsze od bakterii. Szkolnym mikroskopem z lekcji 3 ich nie zobaczysz.",
          ["Do oglądania wirusów służy ", em("mikroskop elektronowy"), "."],
          "Dlatego rysunek w podręczniku jest modelem, a nie zdjęciem z ławki."
        ],
        ua: [
          "Віруси набагато менші за бактерії. Шкільним мікроскопом з уроку 3 їх не побачиш.",
          ["Для розгляду вірусів служить ", em("електронний мікроскоп"), "."],
          "Тому малюнок у підручнику є моделлю, а не фото з парти."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy wielkości", ua: "Приклад. Три розміри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Największa na planszy jest komórka zwierzęca. Bakteria jest mniejsza."],
            ua: ["Найбільша на плакаті — тваринна клітина. Бактерія менша."]
          }
        },
        {
          text: {
            pl: ["Wirus jest najmniejszy z tej trójki. Dlatego szkolny mikroskop na niego nie wystarcza."],
            ua: ["Вірус найменший із цієї трійки. Тому шкільного мікроскопа на нього не досить."]
          }
        },
        {
          text: {
            pl: ["Model z lekcji pokazuje składniki. To nie jest widok z okularu szkolnego mikroskopu."],
            ua: ["Модель з уроку показує складники. Це не вигляд з окуляра шкільного мікроскопа."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Który mikroskop?", ua: "Коротке питання. Який мікроскоп?" },
      task: {
        id: "l16-g4",
        type: "single-choice",
        question: {
          pl: "Dlaczego wirusa nie widać w szkolnym mikroskopie?",
          ua: "Чому віруса не видно в шкільному мікроскопі?"
        },
        options: [
          { id: "a", label: { pl: "jest dużo mniejszy od bakterii — ogląda się go mikroskopem elektronowym", ua: "він набагато менший за бактерію — його розглядають електронним мікроскопом" } },
          { id: "b", label: { pl: "bo wirus jest większy od komórki zwierzęcej", ua: "бо вірус більший за тваринну клітину" } },
          { id: "c", label: { pl: "bo szkolny mikroskop pokazuje tylko wirusy, a komórek nie", ua: "бо шкільний мікроскоп показує лише віруси, а клітин ні" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj wirusa z bakterią i przypomnij lekcję 3.",
          ua: "Порівняй вірус із бактерією і пригадай урок 3."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Na planszy wirus jest najmniejszy, nie większy od komórki. Dlatego szkolny mikroskop go nie pokazuje.",
              ua: "На плакаті вірус найменший, не більший за клітину. Тому шкільний мікроскоп його не показує."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szkolny mikroskop służy do komórek i bakterii. Wirus jest za mały i wymaga mikroskopu elektronowego.",
              ua: "Шкільний мікроскоп служить для клітин і бактерій. Вірус замалий і потребує електронного мікроскопа."
            }
          }
        ],
        explanation: {
          pl: "Wirus jest mniejszy od bakterii, więc widać go mikroskopem elektronowym.",
          ua: "Вірус менший за бактерію, тож його видно електронним мікроскопом."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Obok bakterii", ua: "Типова помилка. Поряд із бактерією" },
      claim: {
        pl: "„W szkolnym mikroskopie zobaczę wirusy obok bakterii.”",
        ua: "«У шкільному мікроскопі побачу віруси поряд із бактеріями.»"
      },
      text: {
        pl: [
          "Bakterie bywają w zasięgu szkolnego mikroskopu. Wirusy są dużo mniejsze.",
          "Do wirusów potrzebny jest mikroskop elektronowy. Rysunek zostaje modelem."
        ],
        ua: [
          "Бактерії бувають у межах шкільного мікроскопа. Віруси набагато менші.",
          "Для вірусів потрібен електронний мікроскоп. Малюнок лишається моделлю."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Model, nie zdjęcie", ua: "Сам. Модель, не фото" },
      task: {
        id: "l16-p4",
        type: "single-choice",
        question: {
          pl: "Dlaczego wirus w podręczniku jest narysowany jako model?",
          ua: "Чому вірус у підручнику намальований як модель?"
        },
        options: [
          { id: "a", label: { pl: "bo szkolny mikroskop go nie pokaże — jest za mały", ua: "бо шкільний мікроскоп його не покаже — він замалий" } },
          { id: "b", label: { pl: "bo wirus ma wielkość psa i nie mieści się w okularze", ua: "бо вірус має розмір пса і не вміщається в окуляр" } },
          { id: "c", label: { pl: "bo wirus ma chlorofil, więc widać go jak liść", ua: "бо вірус має хлорофіл, тож його видно як листок" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirus nie ma wielkości psa. Jest mniejszy od bakterii, dlatego rysunek jest modelem.",
              ua: "Вірус не має розміру пса. Він менший за бактерію, тому малюнок є моделлю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie ma chlorofilu. Model jest dlatego, że szkolny mikroskop go nie widzi.",
              ua: "Вірус не має хлорофілу. Модель є тому, що шкільний мікроскоп його не бачить."
            }
          }
        ],
        explanation: {
          pl: "Podręcznik pokazuje model, bo wirus jest za mały na szkolny mikroskop.",
          ua: "Підручник показує модель, бо вірус замалий для шкільного мікроскопа."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Choroby wirusowe", ua: "Поняття. Вірусні хвороби" },
      visual: vizGh("l16-choroby.png", {
        alt: { pl: "Grypa, ospa wietrzna i odra bez zbliżenia choroby", ua: "Грип, вітрянка і кір без наближення хвороби" },
        title: { pl: "Trzy przykłady. Bez straszenia.", ua: "Три приклади. Без залякування." },
        prompt: { pl: "Plansza lekcji 16: grypa, ospa wietrzna, odra." }
      }),
      text: {
        pl: [
          ["Niektóre wirusy wywołują choroby. Z tej lekcji zapamiętaj: ", em("grypa"), ", ", em("ospa wietrzna"), " i ", em("odra"), "."],
          "Złamanie i zadrapanie to urazy, nie choroby wirusowe. Nie dokładamy listy grozy.",
          "Choroba wirusowa to nie to samo co bakteryjna, dlatego leczenie bywa inne. Jeśli źle się czujesz, mówisz dorosłemu i idziesz do lekarza. To nie jest lekcja rozpoznawania chorób."
        ],
        ua: [
          ["Деякі віруси викликають хвороби. З цього уроку запам’ятай: ", em("грип"), ", ", em("вітрянка"), " і ", em("кір"), "."],
          "Перелом і подряпина — це травми, не вірусні хвороби. Список жаху не додаємо.",
          "Вірусна хвороба — це не те саме, що бактеріальна, тому лікування буває іншим. Якщо тобі погано, кажеш дорослому і йдеш до лікаря. Це не урок розпізнавання хвороб."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy nazwy", ua: "Приклад. Три назви" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Chusteczka i termometr na planszy to grypa. Dziecko w domu to ospa wietrzna. Kalendarz to odra."],
            ua: ["Хустинка і термометр на плакаті — це грип. Дитина вдома — це вітрянка. Календар — це кір."]
          }
        },
        {
          text: {
            pl: ["Złamana ręka nie wchodzi do tej trójki. To uraz, nie wirus."],
            ua: ["Зламана рука не входить до цієї трійки. Це травма, не вірус."]
          }
        },
        {
          text: {
            pl: ["Nazwa choroby nie jest diagnozą z ławki. Źle się czujesz — mówisz dorosłemu."],
            ua: ["Назва хвороби не є діагнозом з парти. Тобі погано — кажеш дорослому."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która choroba?", ua: "Коротке питання. Яка хвороба?" },
      task: {
        id: "l16-g5",
        type: "single-choice",
        question: {
          pl: "Który przykład jest chorobą wirusową z tej lekcji?",
          ua: "Який приклад є вірусною хворобою з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "ospa wietrzna", ua: "вітрянка" } },
          { id: "b", label: { pl: "złamanie ręki", ua: "перелом руки" } },
          { id: "c", label: { pl: "zadrapanie kolana", ua: "подряпина на коліні" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj nazwy z planszy, nie urazu.",
          ua: "Шукай назву з плаката, не травму."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Złamanie jest urazem. Choroby wirusowe z lekcji to grypa, ospa wietrzna i odra.",
              ua: "Перелом є травмою. Вірусні хвороби з уроку — це грип, вітрянка і кір."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zadrapanie nie jest wirusem. Wracasz do trzech nazw: grypa, ospa wietrzna, odra.",
              ua: "Подряпина не є вірусом. Повертаєшся до трьох назв: грип, вітрянка, кір."
            }
          }
        ],
        explanation: {
          pl: "Ospa wietrzna jest chorobą wirusową z tej lekcji.",
          ua: "Вітрянка є вірусною хворобою з цього уроку."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Złamanie", ua: "Типова помилка. Перелом" },
      claim: {
        pl: "„Złamanie ręki to choroba wirusowa, jak grypa.”",
        ua: "«Перелом руки — це вірусна хвороба, як грип.»"
      },
      text: {
        pl: [
          "Złamanie jest urazem. Grypa jest chorobą wirusową.",
          "Do przykładów z lekcji należą grypa, ospa wietrzna i odra."
        ],
        ua: [
          "Перелом є травмою. Грип є вірусною хворобою.",
          "До прикладів з уроку належать грип, вітрянка і кір."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Odra", ua: "Сам. Кір" },
      task: {
        id: "l16-p5",
        type: "single-choice",
        question: {
          pl: "Uczeń nazywa odrę urazem, tak jak zadrapanie. Co poprawić?",
          ua: "Учень називає кір травмою, так само як подряпину. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "odra jest chorobą wirusową z tej lekcji, a zadrapanie jest urazem", ua: "кір є вірусною хворобою з цього уроку, а подряпина є травмою" } },
          { id: "b", label: { pl: "tak — odra to rodzaj złamania", ua: "так — кір є видом перелому" } },
          { id: "c", label: { pl: "tak — odra jest królestwem bakterii", ua: "так — кір є царством бактерій" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Odra nie jest złamaniem. Na tej lekcji stoi obok grypy i ospy wietrznej jako choroba wirusowa.",
              ua: "Кір не є переломом. На цьому уроці він стоїть поряд із грипом і вітрянкою як вірусна хвороба."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odra nie jest królestwem. To przykład choroby wirusowej, a zadrapanie zostaje urazem.",
              ua: "Кір не є царством. Це приклад вірусної хвороби, а подряпина лишається травмою."
            }
          }
        ],
        explanation: {
          pl: "Odra jest chorobą wirusową. Zadrapanie nią nie jest.",
          ua: "Кір є вірусною хворобою. Подряпина нею не є."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Higiena, nie antybiotyk", ua: "Поняття. Гігієна, не антибіотик" },
      visual: vizGh("l16-profilaktyka.png", {
        alt: { pl: "Mycie rąk, szczepienie i przekreślony antybiotyk przy wirusie", ua: "Миття рук, щеплення і перекреслений антибіотик при вірусі" },
        title: { pl: "Antybiotyk jest na bakterie.", ua: "Антибіотик є на бактерії." },
        prompt: { pl: "Plansza lekcji 16: ręce, szczepienie, antybiotyk." }
      }),
      text: {
        pl: [
          "Chronisz się tak: myjesz ręce, kichasz w chusteczkę albo zgięcie łokcia i zostajesz w domu, gdy chorujesz.",
          [em("Szczepienie"), " uczy organizm rozpoznawać wirusa, zanim choroba będzie ciężka. O szczepieniu decydują dorośli i lekarz."],
          [em("Antybiotyki nie działają na wirusy"), ". Działają na bakterie — o tym będzie lekcja 18. Branie ich „na wszelki wypadek” przy grypie nie pomaga i może zaszkodzić."]
        ],
        ua: [
          "Захищаєшся так: миєш руки, чхаєш у хустинку або згин ліктя і лишаєшся вдома, коли хворієш.",
          [em("Щеплення"), " вчить організм розпізнавати вірус, перш ніж хвороба стане тяжкою. Про щеплення вирішують дорослі і лікар."],
          [em("Антибіотики не діють на віруси"), ". Діють на бактерії — про це буде урок 18. Приймання їх «про всяк випадок» при грипі не допомагає і може зашкодити."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kafelki", ua: "Приклад. Три плитки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pierwszy kafelek: ręce, chusteczka albo łokieć, dom w czasie choroby."],
            ua: ["Перша плитка: руки, хустинка або лікоть, дім під час хвороби."]
          }
        },
        {
          text: {
            pl: ["Drugi kafelek: szczepienie. Pomysł znasz. Decyzję podejmują dorośli i lekarz."],
            ua: ["Друга плитка: щеплення. Ідею знаєш. Рішення приймають дорослі і лікар."]
          }
        },
        {
          text: {
            pl: ["Trzeci kafelek: antybiotyk przy wirusie jest przekreślony. Na bakterie działa, ale to już lekcja 18."],
            ua: ["Третя плитка: антибіотик при вірусі перекреслений. На бактерії він діє, але це вже урок 18."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Grypa i antybiotyk", ua: "Коротке питання. Грип і антибіотик" },
      task: {
        id: "l16-g6",
        type: "single-choice",
        question: {
          pl: "Uczeń z grypą ma dostać antybiotyk „na wszelki wypadek”. Co mówi ta lekcja?",
          ua: "Учень із грипом має одержати антибіотик «про всяк випадок». Що каже цей урок?"
        },
        options: [
          { id: "a", label: { pl: "antybiotyk nie działa na wirusy, więc przy grypie tak się nie robi", ua: "антибіотик не діє на віруси, тож при грипі так не роблять" } },
          { id: "b", label: { pl: "antybiotyk leczy wirusa grypy, więc to lek z tej planszy", ua: "антибіотик лікує вірус грипу, тож це ліки з цього плаката" } },
          { id: "c", label: { pl: "grypa jest bakterią, więc wirusa w tej historii nie ma", ua: "грип є бактерією, тож віруса в цій історії немає" } }
        ],
        answer: "a",
        hint: {
          pl: "Sprawdź, na kogo działa antybiotyk: na wirusa czy na bakterię.",
          ua: "Перевір, на кого діє антибіотик: на вірус чи на бактерію."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Plansza przekreśla antybiotyk przy wirusie. Grypa jest wirusowa, więc ten lek jej nie załatwia.",
              ua: "Плакат перекреслює антибіотик при вірусі. Грип є вірусним, тож ці ліки його не закривають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Grypa z tej lekcji jest chorobą wirusową, nie bakterią. Antybiotyk działa na bakterie.",
              ua: "Грип із цього уроку є вірусною хворобою, не бактерією. Антибіотик діє на бактерії."
            }
          }
        ],
        explanation: {
          pl: "Przy grypie antybiotyk „na wszelki wypadek” nie działa, bo grypę wywołuje wirus.",
          ua: "При грипі антибіотик «про всяк випадок» не діє, бо грип викликає вірус."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Antybiotyk na grypę", ua: "Типова помилка. Антибіотик на грип" },
      claim: {
        pl: "„Antybiotyk leczy grypę, bo działa na wirusy.”",
        ua: "«Антибіотик лікує грип, бо діє на віруси.»"
      },
      text: {
        pl: [
          "Antybiotyki działają na bakterie, nie na wirusy.",
          "Przy wirusie zostają higiena i szczepienie. Lekarz i dorośli decydują o leczeniu."
        ],
        ua: [
          "Антибіотики діють на бактерії, не на віруси.",
          "При вірусі лишаються гігієна і щеплення. Лікар і дорослі вирішують про лікування."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ospa i apteczka", ua: "Сам. Вітрянка і аптечка" },
      task: {
        id: "l16-p6",
        type: "single-choice",
        question: {
          pl: "Które działanie z tej lekcji pasuje do ochrony przed wirusem, a nie do leczenia bakterii?",
          ua: "Яка дія з цього уроку пасує до захисту від вірусу, а не до лікування бактерій?"
        },
        options: [
          { id: "a", label: { pl: "mycie rąk, chusteczka albo łokieć, dom w chorobie i szczepienie według lekarza", ua: "миття рук, хустинка або лікоть, дім під час хвороби і щеплення за лікарем" } },
          { id: "b", label: { pl: "antybiotyk z apteczki na ospę wietrzną", ua: "антибіотик з аптечки на вітрянку" } },
          { id: "c", label: { pl: "zostawienie wirusa, żeby urósł w szklance wody", ua: "залишити вірус, щоб він виріс у склянці води" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ospa wietrzna jest wirusowa. Antybiotyk z apteczki nie jest ochroną przed wirusem.",
              ua: "Вітрянка є вірусною. Антибіотик з аптечки не є захистом від вірусу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W szklance wody wirus się nie namnaża. Ochrona z lekcji to higiena i szczepienie, nie hodowla.",
              ua: "У склянці води вірус не розмножується. Захист з уроку — це гігієна і щеплення, не вирощування."
            }
          }
        ],
        explanation: {
          pl: "Przed wirusem pomagają higiena i szczepienie. Antybiotyk jest na bakterie.",
          ua: "Від вірусу допомагають гігієна і щеплення. Антибіотик є на бактерії."
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
      heading: { pl: "Sprawdzian 1. Poza królestwami", ua: "Перевірка 1. Поза царствами" },
      task: {
        id: "l16-t1",
        type: "single-choice",
        question: {
          pl: "Które zdanie o wirusie jest zgodne z lekcją?",
          ua: "Яке речення про вірус відповідає уроку?"
        },
        options: [
          { id: "a", label: { pl: "nie jest komórką i nie należy do pięciu królestw, choć istnieje", ua: "не є клітиною і не належить до п’яти царств, хоча існує" } },
          { id: "b", label: { pl: "to gatunek wilka, tylko bez sierści", ua: "це вид вовка, лише без шерсті" } },
          { id: "c", label: { pl: "nie istnieje, dlatego pomijamy go w biologii", ua: "не існує, тому пропускаємо його в біології" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wilk jest gatunkiem w królestwie zwierząt. Wirus nie jest komórką, więc do tego królestwa nie wchodzi.",
              ua: "Вовк є видом у царстві тварин. Вірус не є клітиною, тож до цього царства не входить."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus istnieje. Pomijamy go wśród królestw z innego powodu: brak budowy komórkowej.",
              ua: "Вірус існує. Серед царств його пропускаємо з іншої причини: немає клітинної будови."
            }
          }
        ],
        explanation: {
          pl: "Wirus istnieje, nie jest komórką i stoi poza pięcioma królestwami.",
          ua: "Вірус існує, не є клітиною і стоїть поза п’ятьма царствами."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Składniki", ua: "Перевірка 2. Складники" },
      task: {
        id: "l16-t2",
        type: "single-choice",
        question: {
          pl: "Na modelu podpisujesz wnętrze i osłonkę. Która para jest z tej lekcji?",
          ua: "На моделі підписуєш середину і оболонку. Яка пара з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "wnętrze: kwas nukleinowy, osłonka: kapsyd", ua: "середина: нуклеїнова кислота, оболонка: капсид" } },
          { id: "b", label: { pl: "wnętrze: jądro, osłonka: ściana celulozowa", ua: "середина: ядро, оболонка: целюлозна стінка" } },
          { id: "c", label: { pl: "wnętrze: chloroplast, osłonka: duża wakuola", ua: "середина: хлоропласт, оболонка: велика вакуоля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro i ściana celulozowa opisują komórkę, nie dwa składniki wirusa.",
              ua: "Ядро і целюлозна стінка описують клітину, не два складники вірусу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast i wakuola są częściami komórki roślinnej. U wirusa szukasz kwasu nukleinowego i kapsydu.",
              ua: "Хлоропласт і вакуоля є частинами рослинної клітини. У віруса шукаєш нуклеїнову кислоту і капсид."
            }
          }
        ],
        explanation: {
          pl: "Dwa składniki: kwas nukleinowy w środku i kapsyd jako osłonka.",
          ua: "Два складники: нуклеїнова кислота всередині і капсид як оболонка."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Gospodarz", ua: "Перевірка 3. Хазяїн" },
      task: {
        id: "l16-t3",
        type: "single-choice",
        question: {
          pl: "Wirus, którego gospodarzem jest bakteria, namnaża się:",
          ua: "Вірус, хазяїном якого є бактерія, розмножується:"
        },
        options: [
          { id: "a", label: { pl: "w komórce tej bakterii", ua: "у клітині цієї бактерії" } },
          { id: "b", label: { pl: "w czystej wodzie, bo bakteria jest mała", ua: "у чистій воді, бо бактерія мала" } },
          { id: "c", label: { pl: "w jądrze dębu, bo każdy wirus jest rośliną", ua: "у ядрі дуба, бо кожен вірус є рослиною" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mały rozmiar bakterii nie zamienia wody w gospodarza. Kopie powstają w komórce bakterii.",
              ua: "Малий розмір бактерії не перетворює воду на хазяїна. Копії постають у клітині бактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ten wirus nie jest rośliną i nie szuka jądra dębu. Gospodarzem jest komórka bakterii.",
              ua: "Цей вірус не є рослиною і не шукає ядра дуба. Хазяїном є клітина бактерії."
            }
          }
        ],
        explanation: {
          pl: "Gdy gospodarzem jest bakteria, wirus namnaża się w jej komórce.",
          ua: "Коли хазяїном є бактерія, вірус розмножується в її клітині."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Przykłady", ua: "Перевірка 4. Приклади" },
      task: {
        id: "l16-t4",
        type: "single-choice",
        question: {
          pl: "Który zestaw to choroby wirusowe z tej lekcji?",
          ua: "Який набір — це вірусні хвороби з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "grypa, ospa wietrzna, odra", ua: "грип, вітрянка, кір" } },
          { id: "b", label: { pl: "złamanie ręki, zadrapanie kolana, złamanie nogi", ua: "перелом руки, подряпина на коліні, перелом ноги" } },
          { id: "c", label: { pl: "grypa, złamanie ręki, królestwo roślin", ua: "грип, перелом руки, царство рослин" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To urazy, nie choroby wirusowe. Z lekcji zostają grypa, ospa wietrzna i odra.",
              ua: "Це травми, не вірусні хвороби. З уроку лишаються грип, вітрянка і кір."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Grypa pasuje, ale złamanie jest urazem, a królestwo roślin nie jest chorobą.",
              ua: "Грип пасує, але перелом є травмою, а царство рослин не є хворобою."
            }
          }
        ],
        explanation: {
          pl: "Z tej lekcji: grypa, ospa wietrzna i odra.",
          ua: "З цього уроку: грип, вітрянка і кір."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Antybiotyk", ua: "Перевірка 5. Антибіотик" },
      task: {
        id: "l16-t5",
        type: "single-choice",
        question: {
          pl: "Co jest zgodne z lekcją o wirusach?",
          ua: "Що відповідає уроку про віруси?"
        },
        options: [
          { id: "a", label: { pl: "antybiotyki nie działają na wirusy; pomagają higiena i szczepienia", ua: "антибіотики не діють на віруси; допомагають гігієна і щеплення" } },
          { id: "b", label: { pl: "antybiotyk zastępuje mycie rąk przy odrze", ua: "антибіотик замінює миття рук при кору" } },
          { id: "c", label: { pl: "szczepienie jest antybiotykiem na złamanie kości", ua: "щеплення є антибіотиком на перелом кістки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Odra jest wirusowa. Antybiotyk nie zastępuje mycia rąk i nie działa na wirusa.",
              ua: "Кір є вірусним. Антибіотик не замінює миття рук і не діє на вірус."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szczepienie nie jest antybiotykiem, a złamanie nie jest chorobą wirusową. Antybiotyk działa na bakterie.",
              ua: "Щеплення не є антибіотиком, а перелом не є вірусною хворобою. Антибіотик діє на бактерії."
            }
          }
        ],
        explanation: {
          pl: "Na wirusy antybiotyk nie działa. Zostają higiena i szczepienia.",
          ua: "На віруси антибіотик не діє. Лишаються гігієна і щеплення."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l16-budowa.png", {
        alt: { pl: "Kwas nukleinowy i kapsyd", ua: "Нуклеїнова кислота і капсид" },
        title: { pl: "Nie komórka. Przepis i kapsyd. Tylko w gospodarzu.", ua: "Не клітина. Рецепт і капсид. Лише в хазяїні." },
        prompt: { pl: "Ten sam schemat budowy wirusa." }
      }),
      text: {
        pl: [
          "Wirus istnieje, ale nie jest komórką i nie należy do pięciu królestw.",
          "Dwa składniki: kwas nukleinowy i kapsyd. Namnaża się tylko w komórce gospodarza.",
          "Jest mniejszy od bakterii. Widać go mikroskopem elektronowym, nie szkolnym.",
          "Przykłady chorób: grypa, ospa wietrzna, odra. Antybiotyki nie działają na wirusy. Pomagają higiena i szczepienia."
        ],
        ua: [
          "Вірус існує, але не є клітиною і не належить до п’яти царств.",
          "Два складники: нуклеїнова кислота і капсид. Розмножується лише в клітині хазяїна.",
          "Він менший за бактерію. Видно його електронним мікроскопом, не шкільним.",
          "Приклади хвороб: грип, вітрянка, кір. Антибіотики не діють на віруси. Допомагають гігієна і щеплення."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Powiem, że wirus nie jest komórką i nie należy do królestw, choć istnieje.", ua: "Скажу, що вірус не є клітиною і не належить до царств, хоча існує." },
        { pl: "Wskażę kwas nukleinowy i kapsyd.", ua: "Вкажу нуклеїнову кислоту і капсид." },
        { pl: "Wyjaśnię, że wirus namnaża się tylko w komórce gospodarza.", ua: "Поясню, що вірус розмножується лише в клітині хазяїна." },
        { pl: "Powiem, że wirusa nie widać szkolnym mikroskopem.", ua: "Скажу, що віруса не видно шкільним мікроскопом." },
        { pl: "Podam przykłady: grypa, ospa wietrzna, odra.", ua: "Наведу приклади: грип, вітрянка, кір." },
        { pl: "Powiem, że antybiotyki nie działają na wirusy.", ua: "Скажу, що антибіотики не діють на віруси." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
