function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L06_Komorka_zwierzecia/images/";

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
      heading: { pl: "Misja: wnętrze komórki zwierzęcej", ua: "Місія: середина тваринної клітини" },
      visual: vizGh("l06-zacznijmy.png", {
        alt: { pl: "Komórki nabłonka jamy ustnej pod mikroskopem", ua: "Клітини епітелію ротової порожнини під мікроскопом" },
        title: { pl: "Tak wyglądają komórki z wewnętrznej strony policzka.", ua: "Так виглядають клітини з внутрішнього боку щоки." },
        prompt: { pl: "Mikrofotografia lekcji 6: nabłonek jamy ustnej, błona, cytoplazma, jądro." }
      }),
      text: {
        pl: [
          "To lekcja 6: komórka zwierzęca. Na poprzedniej lekcji komórka była jednostką życia. Dziś zaglądamy do środka.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 6: тваринна клітина. На попередньому уроці клітина була одиницею життя. Сьогодні заглядаємо всередину.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "błona komórkowa", ua: "клітинна мембрана — тонка межа, пропускає вибрані речовини" },
        { pl: "cytozol", ua: "цитозоль — желеподібне наповнення" },
        { pl: "cytoplazma", ua: "цитоплазма — цитозоль плюс структури, без ядра" },
        { pl: "jądro komórkowe", ua: "клітинне ядро — ДНК і керування процесами" },
        { pl: "mitochondrium", ua: "мітохондрія — енергетичний центр" },
        { pl: "rybosomy", ua: "рибосоми — дрібні зернятка, виробляють білки" },
        { pl: "wakuola (wodniczka)", ua: "вакуоля — малий пухирець" },
        { pl: "ściana komórkowa", ua: "клітинна стінка — у тваринної клітини її немає" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Sześć elementów na schemacie", ua: "Поняття. Шість елементів на схемі" },
      visual: vizGh("l06-schemat.png", {
        alt: { pl: "Schemat budowy komórki zwierzęcej", ua: "Схема будови тваринної клітини" },
        title: { pl: "Sześć elementów do wskazania.", ua: "Шість елементів, які треба вказати." },
        prompt: { pl: "Schemat lekcji 6: błona, cytozol, jądro, wakuola, mitochondrium, rybosomy." }
      }),
      text: {
        pl: [
          "Na schemacie komórki zwierzęcej wskażesz sześć elementów: błonę komórkową, cytozol, jądro komórkowe, wakuolę, mitochondrium i rybosomy.",
          "Ściany komórkowej z celulozy i chloroplastów na tym schemacie nie ma. To części komórki roślinnej — następna lekcja."
        ],
        ua: [
          "На схемі тваринної клітини вкажеш шість елементів: клітинну мембрану, цитозоль, клітинне ядро, вакуолю, мітохондрію і рибосоми.",
          "Клітинної стінки з целюлози і хлоропластів на цій схемі немає. Це частини рослинної клітини — наступний урок."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Palec po schemacie", ua: "Приклад. Палець по схемі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["1. Błona komórkowa — cienka granica komórki."],
            ua: ["1. Клітинна мембрана — тонка межа клітини."]
          }
        },
        {
          text: {
            pl: ["2. Cytozol — galaretowate wypełnienie."],
            ua: ["2. Цитозоль — желеподібне наповнення."]
          }
        },
        {
          text: {
            pl: ["3. Jądro komórkowe — zwykle w środku, kształt zbliżony do kuli."],
            ua: ["3. Клітинне ядро — зазвичай усередині, форма близька до кулі."]
          }
        },
        {
          text: {
            pl: ["4. Wakuola, inaczej wodniczka — mały pęcherzyk."],
            ua: ["4. Вакуоля, інакше водничка — маленький пухирець."]
          }
        },
        {
          text: {
            pl: ["5. Mitochondrium. 6. Rybosomy — drobne ziarenka."],
            ua: ["5. Мітохондрія. 6. Рибосоми — дрібні зернятка."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czego nie ma na schemacie?", ua: "Коротке питання. Чого немає на схемі?" },
      task: {
        id: "l06-g1",
        type: "single-choice",
        question: {
          pl: "Którego elementu nie ma na schemacie komórki zwierzęcej?",
          ua: "Якого елемента немає на схемі тваринної клітини?"
        },
        options: [
          { id: "a", label: { pl: "ściany komórkowej z celulozy", ua: "клітинної стінки з целюлози" } },
          { id: "b", label: { pl: "błony komórkowej", ua: "клітинної мембрани" } },
          { id: "c", label: { pl: "jądra komórkowego", ua: "клітинного ядра" } }
        ],
        answer: "a",
        hint: {
          pl: "Ściana z celulozy jest u roślin. Zwierzę ma błonę i jądro.",
          ua: "Стінка з целюлози є в рослин. Тварина має мембрану і ядро."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błona jest na schemacie: to granica komórki zwierzęcej. Szukaj części, która należy do komórki roślinnej.",
              ua: "Мембрана є на схемі: це межа тваринної клітини. Шукай частину, яка належить рослинній клітині."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jądro jest na schemacie, zwykle w środku. Roślinna część, której tu nie rysujemy, to ściana z celulozy.",
              ua: "Ядро є на схемі, зазвичай усередині. Рослинна частина, яку тут не малюємо, — стінка з целюлози."
            }
          }
        ],
        explanation: {
          pl: "Komórka zwierzęca nie ma ściany z celulozy. Ma błonę, cytozol, jądro, wakuolę, mitochondrium i rybosomy.",
          ua: "Тваринна клітина не має стінки з целюлози. Має мембрану, цитозоль, ядро, вакуолю, мітохондрію і рибосоми."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ściana jak u rośliny", ua: "Типова помилка. Стінка як у рослини" },
      claim: {
        pl: "„Komórka zwierzęca ma twardą ścianę z celulozy.”",
        ua: "«Тваринна клітина має тверду стінку з целюлози.»"
      },
      text: {
        pl: [
          "Ściana z celulozy jest w komórce roślinnej.",
          "Komórkę zwierzęcą oddziela błona komórkowa. Na schemacie szukaj błony, nie ściany."
        ],
        ua: [
          "Стінка з целюлози є в рослинній клітині.",
          "Тваринну клітину відокремлює клітинна мембрана. На схемі шукай мембрану, не стінку."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka mięśnia psa", ua: "Сам. Клітина м’яза пса" },
      task: {
        id: "l06-p1",
        type: "single-choice",
        question: {
          pl: "Który zestaw pasuje do schematu komórki mięśnia psa?",
          ua: "Який набір пасує до схеми клітини м’яза пса?"
        },
        options: [
          { id: "a", label: { pl: "błona, cytozol, jądro, wakuola, mitochondrium, rybosomy", ua: "мембрана, цитозоль, ядро, вакуоля, мітохондрія, рибосоми" } },
          { id: "b", label: { pl: "ściana z celulozy, chloroplast i brak jądra", ua: "стінка з целюлози, хлоропласт і немає ядра" } },
          { id: "c", label: { pl: "tylko jądro, bez błony i bez cytozolu", ua: "лише ядро, без мембрани і без цитозолю" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pies jest zwierzęciem. Ściana z celulozy i chloroplast należą do komórki roślinnej. Jądro w komórce zwierzęcej jest.",
              ua: "Пес — тварина. Стінка з целюлози і хлоропласт належать рослинній клітині. Ядро в тваринній клітині є."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jądro jest jednym z sześciu elementów. Brakuje błony i cytozolu — one też są na schemacie.",
              ua: "Ядро — один із шести елементів. Бракує мембрани і цитозолю — вони теж є на схемі."
            }
          }
        ],
        explanation: {
          pl: "Komórka mięśnia psa ma te same sześć elementów co inne komórki zwierzęce z tej lekcji.",
          ua: "Клітина м’яза пса має ті самі шість елементів, що й інші тваринні клітини з цього уроку."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cytozol i cytoplazma", ua: "Поняття. Цитозоль і цитоплазма" },
      visual: vizGh("l06-schemat.png", {
        alt: { pl: "Cytozol i struktury wewnątrz komórki zwierzęcej", ua: "Цитозоль і структури всередині тваринної клітини" },
        title: { pl: "Cytozol wypełnia. Cytoplazma to cytozol plus struktury.", ua: "Цитозоль наповнює. Цитоплазма — це цитозоль плюс структури." },
        prompt: { pl: "Ten sam schemat komórki zwierzęcej: cytozol i struktury w cytoplazmie." }
      }),
      text: {
        pl: [
          [em("Cytozol"), " to galaretowata substancja. Składa się głównie z wody, soli mineralnych i innych związków — przede wszystkim białek. Wypełnia komórkę."],
          [em("Cytoplazma"), " to cytozol razem ze strukturami wewnątrz komórki, na przykład mitochondriami, rybosomami i wakuolami. Jądra do cytoplazmy nie wliczamy."]
        ],
        ua: [
          [em("Цитозоль"), " — желеподібна речовина. Складається здебільшого з води, мінеральних солей та інших сполук — передусім білків. Наповнює клітину."],
          [em("Цитоплазма"), " — це цитозоль разом зі структурами всередині клітини, наприклад мітохондріями, рибосомами і вакуолями. Ядро до цитоплазми не зараховуємо."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mitochondrium w cytoplazmie", ua: "Приклад. Мітохондрія в цитоплазмі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Mitochondrium leży wewnątrz komórki, ale nie jest jądrem."],
            ua: ["Мітохондрія лежить усередині клітини, але не є ядром."]
          }
        },
        {
          text: {
            pl: ["Wokół niego jest galaretowaty cytozol. Samo mitochondrium nie jest cytozolem — to osobna struktura."],
            ua: ["Навколо неї желеподібний цитозоль. Сама мітохондрія не є цитозолем — це окрема структура."]
          }
        },
        {
          text: {
            pl: ["Cytozol plus takie struktury, bez jądra, nazywamy cytoplazmą."],
            ua: ["Цитозоль плюс такі структури, без ядра, називаємо цитоплазмою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa podobne słowa", ua: "Коротке питання. Два схожі слова" },
      task: {
        id: "l06-g2",
        type: "single-choice",
        question: {
          pl: "Czym cytozol różni się od cytoplazmy?",
          ua: "Чим цитозоль відрізняється від цитоплазми?"
        },
        options: [
          { id: "a", label: { pl: "cytozol to galaretowate wypełnienie; cytoplazma to cytozol plus struktury wewnątrz, bez jądra", ua: "цитозоль — желеподібне наповнення; цитоплазма — цитозоль плюс структури всередині, без ядра" } },
          { id: "b", label: { pl: "cytozol to to samo co jądro", ua: "цитозоль — те саме, що ядро" } },
          { id: "c", label: { pl: "cytoplazma jest tylko u roślin", ua: "цитоплазма є лише в рослин" } }
        ],
        answer: "a",
        hint: {
          pl: "Cytozol wypełnia. Struktury w nim są już częścią cytoplazmy. Jądro zostaje osobno.",
          ua: "Цитозоль наповнює. Структури в ньому вже частина цитоплазми. Ядро лишається окремо."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro to osobna kulista struktura z DNA. Cytozol jest galaretowatym wypełnieniem wokół struktur.",
              ua: "Ядро — окрема куляста структура з ДНК. Цитозоль — желеподібне наповнення навколо структур."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cytoplazma jest też w komórce zwierzęcej. To cytozol razem ze strukturami, bez jądra.",
              ua: "Цитоплазма є і в тваринній клітині. Це цитозоль разом зі структурами, без ядра."
            }
          }
        ],
        explanation: {
          pl: "Cytozol wypełnia komórkę. Cytoplazma = cytozol + mitochondria, rybosomy, wakuole. Bez jądra.",
          ua: "Цитозоль наповнює клітину. Цитоплазма = цитозоль + мітохондрії, рибосоми, вакуолі. Без ядра."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Cytozol to jądro", ua: "Типова помилка. Цитозоль — це ядро" },
      claim: {
        pl: "„Cytozol i cytoplazma to dwie nazwy jądra.”",
        ua: "«Цитозоль і цитоплазма — це дві назви ядра.»"
      },
      text: {
        pl: [
          "Jądro jest osobno. Nie wliczamy go do cytoplazmy.",
          "Cytozol to galareta z wody, soli i białek. Cytoplazma to ta galareta plus struktury wewnątrz komórki."
        ],
        ua: [
          "Ядро окремо. Ми не зараховуємо його до цитоплазми.",
          "Цитозоль — желе з води, солей і білків. Цитоплазма — це желе плюс структури всередині клітини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Rybosom i cytozol", ua: "Сам. Рибосома і цитозоль" },
      task: {
        id: "l06-p2",
        type: "single-choice",
        question: {
          pl: "Rybosom leży w komórce zwierzęcej i nie jest jądrem. Czy rybosom jest cytozolem?",
          ua: "Рибосома лежить у тваринній клітині і не є ядром. Чи рибосома є цитозолем?"
        },
        options: [
          { id: "a", label: { pl: "Nie. Rybosom to struktura w cytoplazmie. Cytozol to galaretowate wypełnienie wokół niego.", ua: "Ні. Рибосома — структура в цитоплазмі. Цитозоль — желеподібне наповнення навколо неї." } },
          { id: "b", label: { pl: "Tak. Rybosom to inna nazwa cytozolu.", ua: "Так. Рибосома — інша назва цитозолю." } },
          { id: "c", label: { pl: "Cytoplazmy u zwierząt nie ma, więc rybosom nie ma gdzie leżeć.", ua: "Цитоплазми в тварин немає, тож рибосомі ніде лежати." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rybosom jest drobnym ziarenkiem, czyli strukturą. Cytozol jest wypełnieniem, nie ziarenkiem.",
              ua: "Рибосома — дрібне зернятко, тобто структура. Цитозоль — наповнення, не зернятко."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cytoplazma jest w komórce zwierzęcej. Rybosom leży w niej, w galaretowatym cytozolu, poza jądrem.",
              ua: "Цитоплазма є в тваринній клітині. Рибосома лежить у ній, у желеподібному цитозолі, поза ядром."
            }
          }
        ],
        explanation: {
          pl: "Rybosom należy do cytoplazmy, ale sam nie jest cytozolem.",
          ua: "Рибосома належить до цитоплазми, але сама не є цитозолем."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Błona komórkowa", ua: "Поняття. Клітинна мембрана" },
      visual: vizGh("l06-blona.png", {
        alt: { pl: "Błona oddziela wnętrze komórki od otoczenia", ua: "Мембрана відокремлює нутро клітини від оточення" },
        title: { pl: "Błona strzeże granicy.", ua: "Мембрана стереже межу." },
        prompt: { pl: "Plansza lekcji 6: błona komórkowa i ruch wybranych substancji." }
      }),
      text: {
        pl: [
          [em("Błona komórkowa"), " oddziela wnętrze komórki od otoczenia."],
          "Przepuszcza wybrane substancje do środka i na zewnątrz.",
          "Nie zapisuje cech organizmu. Zapis jest w DNA, a DNA jest w jądrze."
        ],
        ua: [
          [em("Клітинна мембрана"), " відокремлює нутро клітини від оточення."],
          "Пропускає вибрані речовини всередину і назовні.",
          "Не записує риси організму. Запис є в ДНК, а ДНК — у ядрі."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Granica i przejście", ua: "Приклад. Межа і прохід" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Błona jest granicą z przejściem. To nie twarda skorupa z celulozy."],
            ua: ["Мембрана — межа з проходом. Це не тверда шкаралупа з целюлози."]
          }
        },
        {
          text: {
            pl: ["Wybrane substancje wchodzą do środka. Inne wychodzą na zewnątrz."],
            ua: ["Вибрані речовини входять усередину. Інші виходять назовні."]
          }
        },
        {
          text: {
            pl: ["Cechy organizmu zostają w jądrze. Błona ich nie zapisuje."],
            ua: ["Риси організму лишаються в ядрі. Мембрана їх не записує."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co błona?", ua: "Коротке питання. Навіщо мембрана?" },
      task: {
        id: "l06-g3",
        type: "single-choice",
        question: {
          pl: "Do czego służy błona komórkowa?",
          ua: "Для чого служить клітинна мембрана?"
        },
        options: [
          { id: "a", label: { pl: "oddziela wnętrze od otoczenia i przepuszcza wybrane substancje do komórki i z komórki", ua: "відокремлює нутро від оточення і пропускає вибрані речовини до клітини і з клітини" } },
          { id: "b", label: { pl: "zapisuje cechy organizmu jak DNA w jądrze", ua: "записує риси організму, як ДНК у ядрі" } },
          { id: "c", label: { pl: "daje komórce zwierzęcej twardą ścianę z celulozy", ua: "дає тваринній клітині тверду стінку з целюлози" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie prace błony: granica i przejście wybranych substancji.",
          ua: "Дві роботи мембрани: межа і прохід вибраних речовин."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapis cech to DNA w jądrze. Błona jest granicą i przepuszcza wybrane substancje.",
              ua: "Запис рис — це ДНК у ядрі. Мембрана є межею і пропускає вибрані речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Twarda ściana z celulozy jest u roślin. Komórka zwierzęca ma błonę, nie tę ścianę.",
              ua: "Тверда стінка з целюлози є в рослин. Тваринна клітина має мембрану, не цю стінку."
            }
          }
        ],
        explanation: {
          pl: "Błona oddziela wnętrze od otoczenia i przepuszcza wybrane substancje.",
          ua: "Мембрана відокремлює нутро від оточення і пропускає вибрані речовини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Błona zapisuje cechy", ua: "Типова помилка. Мембрана записує риси" },
      claim: {
        pl: "„Błona komórkowa zapisuje cechy organizmu.”",
        ua: "«Клітинна мембрана записує риси організму.»"
      },
      text: {
        pl: [
          "Zapis cech to DNA. DNA jest w jądrze.",
          "Błona tylko oddziela wnętrze od otoczenia i przepuszcza wybrane substancje."
        ],
        ua: [
          "Запис рис — це ДНК. ДНК є в ядрі.",
          "Мембрана лише відокремлює нутро від оточення і пропускає вибрані речовини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Substancja przy granicy", ua: "Сам. Речовина біля межі" },
      task: {
        id: "l06-p3",
        type: "single-choice",
        question: {
          pl: "Wybrana substancja ma wejść do komórki mięśnia albo z niej wyjść. Która część o tym decyduje na granicy?",
          ua: "Вибрана речовина має увійти в клітину м’яза або вийти з неї. Яка частина вирішує це на межі?"
        },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "jądro, bo tam jest zapis cech", ua: "ядро, бо там запис рис" } },
          { id: "c", label: { pl: "ściana z celulozy, którą ma każda komórka psa", ua: "стінка з целюлози, яку має кожна клітина пса" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro trzyma DNA i kieruje procesami. Przejście substancji przez granicę to praca błony.",
              ua: "Ядро тримає ДНК і керує процесами. Прохід речовин через межу — робота мембрани."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórka psa nie ma ściany z celulozy. Granicą jest błona komórkowa.",
              ua: "Клітина пса не має стінки з целюлози. Межею є клітинна мембрана."
            }
          }
        ],
        explanation: {
          pl: "Na granicy komórki zwierzęcej substancje przepuszcza błona komórkowa.",
          ua: "На межі тваринної клітини речовини пропускає клітинна мембрана."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jądro komórkowe", ua: "Поняття. Клітинне ядро" },
      visual: vizGh("l06-jadro.png", {
        alt: { pl: "Jądro komórkowe w centrum komórki", ua: "Клітинне ядро в центрі клітини" },
        title: { pl: "Jądro kieruje pracą komórki. W środku jest DNA.", ua: "Ядро керує роботою клітини. Всередині — ДНК." },
        prompt: { pl: "Schemat lekcji 6: jądro komórkowe, DNA i kierowanie procesami." }
      }),
      text: {
        pl: [
          [em("Jądro komórkowe"), " leży zwykle w środkowej części komórki i ma kształt zbliżony do kuli."],
          "Kieruje procesami w komórce. Zawiera DNA — zapis informacji o cechach organizmu z lekcji o składnikach.",
          "Bez jądra komórka zwierzęca nie potrafiłaby sterować swoją pracą."
        ],
        ua: [
          [em("Клітинне ядро"), " лежить зазвичай у середній частині клітини і має форму, близьку до кулі."],
          "Керує процесами в клітині. Містить ДНК — запис інформації про риси організму з уроку про складники.",
          "Без ядра тваринна клітина не вміла б керувати своєю роботою."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Centrum dowodzenia", ua: "Приклад. Центр керування" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W środku komórki jest kuliste jądro."],
            ua: ["Усередині клітини є кулясте ядро."]
          }
        },
        {
          text: {
            pl: ["W jądrze leży DNA. To zapis cech, który komórka przekazuje dalej."],
            ua: ["У ядрі лежить ДНК. Це запис рис, який клітина передає далі."]
          }
        },
        {
          text: {
            pl: ["Jądro kieruje procesami w komórce. Wakuola tego zapisu nie trzyma."],
            ua: ["Ядро керує процесами в клітині. Вакуоля цього запису не тримає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co jądro?", ua: "Коротке питання. Навіщо ядро?" },
      task: {
        id: "l06-g4",
        type: "single-choice",
        question: {
          pl: "Do czego służy jądro komórkowe?",
          ua: "Для чого служить клітинне ядро?"
        },
        options: [
          { id: "a", label: { pl: "zawiera DNA i kieruje procesami w komórce", ua: "містить ДНК і керує процесами в клітині" } },
          { id: "b", label: { pl: "DNA jest w wakuoli, a jądro służy tylko do ruchu", ua: "ДНК є у вакуолі, а ядро служить лише для руху" } },
          { id: "c", label: { pl: "komórka zwierzęca nie ma jądra", ua: "тваринна клітина не має ядра" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj kulistej struktury w środku: zapis cech i sterowanie.",
          ua: "Шукай кулясту структуру всередині: запис рис і керування."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wakuola to mały pęcherzyk do wchłaniania, trawienia i usuwania substancji. DNA i sterowanie są w jądrze.",
              ua: "Вакуоля — малий пухирець для всмоктування, травлення і видалення речовин. ДНК і керування — в ядрі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na schemacie komórki zwierzęcej jądro jest. Leży zwykle w środku.",
              ua: "На схемі тваринної клітини ядро є. Лежить зазвичай усередині."
            }
          }
        ],
        explanation: {
          pl: "Jądro zawiera DNA i kieruje procesami w komórce.",
          ua: "Ядро містить ДНК і керує процесами в клітині."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. DNA w pęcherzyku", ua: "Типова помилка. ДНК у пухирці" },
      claim: {
        pl: "„DNA leży w wakuoli, a jądro tylko porusza komórką.”",
        ua: "«ДНК лежить у вакуолі, а ядро лише рухає клітиною.»"
      },
      text: {
        pl: [
          "DNA jest w jądrze. Jądro kieruje procesami w komórce.",
          "Wakuola nie trzyma zapisu cech. To mały pęcherzyk o innej pracy."
        ],
        ua: [
          "ДНК є в ядрі. Ядро керує процесами в клітині.",
          "Вакуоля не тримає запису рис. Це малий пухирець з іншою роботою."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka bez jądra", ua: "Сам. Клітина без ядра" },
      task: {
        id: "l06-p4",
        type: "single-choice",
        question: {
          pl: "Komórka nabłonka straciła jądro. Czego jej brakuje?",
          ua: "Клітина епітелію втратила ядро. Чого їй бракує?"
        },
        options: [
          { id: "a", label: { pl: "DNA i sterowania procesami w komórce", ua: "ДНК і керування процесами в клітині" } },
          { id: "b", label: { pl: "tylko ruchu, bo jądro było wicią", ua: "лише руху, бо ядро було джгутиком" } },
          { id: "c", label: { pl: "niczego, bo jądro było puste", ua: "нічого, бо ядро було порожнє" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro nie jest wicią. Wić służyła ruchowi plemnika na poprzedniej lekcji. Tu jądro trzyma DNA i kieruje pracą.",
              ua: "Ядро не є джгутиком. Джгутик служив руху сперматозоїда на попередньому уроці. Тут ядро тримає ДНК і керує роботою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jądro nie jest puste. W środku jest DNA, a jądro kieruje procesami.",
              ua: "Ядро не порожнє. Усередині є ДНК, а ядро керує процесами."
            }
          }
        ],
        explanation: {
          pl: "Bez jądra komórce brakuje DNA i sterowania swoją pracą.",
          ua: "Без ядра клітині бракує ДНК і керування своєю роботою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Energia, białka, pęcherzyk", ua: "Поняття. Енергія, білки, пухирець" },
      visual: vizGh("l06-organelle.png", {
        alt: { pl: "Mitochondrium, rybosomy i mała wakuola", ua: "Мітохондрія, рибосоми і мала вакуоля" },
        title: { pl: "Trzy struktury, trzy prace.", ua: "Три структури, три роботи." },
        prompt: { pl: "Plansza lekcji 6: mitochondrium, rybosomy, wakuola." }
      }),
      text: {
        pl: [
          [em("Mitochondrium"), " jest zwykle owalne. Dostarcza komórce energii — to centrum energetyczne komórki."],
          [em("Rybosomy"), " wyglądają jak drobne ziarenka. Wytwarzają białka."],
          [em("Wakuola"), " (wodniczka) to mały pęcherzyk. Bierze udział we wchłanianiu, trawieniu i usuwaniu różnych substancji. W komórce zwierzęcej wakuole są drobne. U roślin bywa jedna duża — to na następnej lekcji."],
          "Są też inne struktury, na przykład siateczka śródplazmatyczna i aparat Golgiego. Pomagają wytwarzać, przetwarzać i transportować białka oraz tłuszcze. Dziś wystarczy wiedzieć, że istnieją. Do paszportu nie wchodzą."
        ],
        ua: [
          [em("Мітохондрія"), " зазвичай овальна. Дає клітині енергію — це енергетичний центр клітини."],
          [em("Рибосоми"), " виглядають як дрібні зернятка. Виробляють білки."],
          [em("Вакуоля"), " (водничка) — малий пухирець. Бере участь у всмоктуванні, травленні і видаленні різних речовин. У тваринній клітині вакуолі дрібні. У рослин буває одна велика — це на наступному уроці."],
          "Є також інші структури, наприклад ендоплазматична сітка і комплекс Гольджі. Допомагають виробляти, перетворювати і транспортувати білки та жири. Сьогодні досить знати, що вони є. До паспорта не входять."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy podpisy", ua: "Приклад. Три підписи" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Owalne mitochondrium: energia."],
            ua: ["Овальна мітохондрія: енергія."]
          }
        },
        {
          text: {
            pl: ["Drobne ziarenka, rybosomy: białka."],
            ua: ["Дрібні зернятка, рибосоми: білки."]
          }
        },
        {
          text: {
            pl: ["Mały pęcherzyk, wakuola: wchłanianie, trawienie, usuwanie substancji."],
            ua: ["Малий пухирець, вакуоля: всмоктування, травлення, видалення речовин."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto co robi?", ua: "Коротке питання. Хто що робить?" },
      task: {
        id: "l06-g5",
        type: "single-choice",
        question: {
          pl: "Które przypisanie jest prawdziwe?",
          ua: "Яке зіставлення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "mitochondrium — energia; rybosomy — białka; wakuola — wchłanianie, trawienie, usuwanie", ua: "мітохондрія — енергія; рибосоми — білки; вакуоля — всмоктування, травлення, видалення" } },
          { id: "b", label: { pl: "mitochondrium — białka; rybosomy — energia; wakuola — DNA", ua: "мітохондрія — білки; рибосоми — енергія; вакуоля — ДНК" } },
          { id: "c", label: { pl: "wszystkie trzy to aparat Golgiego i trzeba je znać na paszport", ua: "усі три — це комплекс Гольджі, і їх треба знати на паспорт" } }
        ],
        answer: "a",
        hint: {
          pl: "Owal — energia. Ziarenka — białka. Pęcherzyk — wchłanianie, trawienie, usuwanie.",
          ua: "Овал — енергія. Зернятка — білки. Пухирець — всмоктування, травлення, видалення."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Prace mitochondrium i rybosomów są zamienione. DNA nie leży w wakuoli — jest w jądrze.",
              ua: "Роботи мітохондрії і рибосом переплутані. ДНК не лежить у вакуолі — вона в ядрі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Aparat Golgiego istnieje, ale dziś nie wchodzi do paszportu. Trzy prace to mitochondrium, rybosomy i wakuola.",
              ua: "Комплекс Гольджі існує, але сьогодні не входить до паспорта. Три роботи — це мітохондрія, рибосоми і вакуоля."
            }
          }
        ],
        explanation: {
          pl: "Mitochondrium daje energię, rybosomy wytwarzają białka, wakuola uczestniczy we wchłanianiu, trawieniu i usuwaniu.",
          ua: "Мітохондрія дає енергію, рибосоми виробляють білки, вакуоля бере участь у всмоктуванні, травленні і видаленні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zamienione prace", ua: "Типова помилка. Переплутані роботи" },
      claim: {
        pl: "„Mitochondrium wytwarza białka, a rybosomy dają energię.”",
        ua: "«Мітохондрія виробляє білки, а рибосоми дають енергію.»"
      },
      text: {
        pl: [
          "Odwrotnie.",
          "Mitochondrium jest centrum energetycznym. Rybosomy, drobne ziarenka, wytwarzają białka."
        ],
        ua: [
          "Навпаки.",
          "Мітохондрія — енергетичний центр. Рибосоми, дрібні зернятка, виробляють білки."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Drobne ziarenka", ua: "Сам. Дрібні зернятка" },
      task: {
        id: "l06-p5",
        type: "single-choice",
        question: {
          pl: "W cytoplazmie widać drobne ziarenka, które wytwarzają białka. Co to jest?",
          ua: "У цитоплазмі видно дрібні зернятка, які виробляють білки. Що це?"
        },
        options: [
          { id: "a", label: { pl: "rybosomy", ua: "рибосоми" } },
          { id: "b", label: { pl: "mitochondrium", ua: "мітохондрія" } },
          { id: "c", label: { pl: "wakuola", ua: "вакуоля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mitochondrium jest zwykle owalne i dostarcza energii. Ziarenka, które robią białka, to rybosomy.",
              ua: "Мітохондрія зазвичай овальна і дає енергію. Зернятка, які роблять білки, — це рибосоми."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wakuola to mały pęcherzyk: wchłanianie, trawienie, usuwanie. Białka wytwarzają ziarenka — rybosomy.",
              ua: "Вакуоля — малий пухирець: всмоктування, травлення, видалення. Білки виробляють зернятка — рибосоми."
            }
          }
        ],
        explanation: {
          pl: "Drobne ziarenka wytwarzające białka to rybosomy.",
          ua: "Дрібні зернятка, що виробляють білки, — це рибосоми."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Co widać pod mikroskopem", ua: "Поняття. Що видно під мікроскопом" },
      visual: vizGh("l06-preparat.png", {
        alt: { pl: "Jedna komórka nabłonka jamy ustnej spod mikroskopu", ua: "Одна клітина епітелію ротової порожнини з-під мікроскопа" },
        title: { pl: "Preparat ogląda się w szkole, nie w domu.", ua: "Препарат розглядають у школі, не вдома." },
        prompt: { pl: "Mikrofotografia lekcji 6: jedna komórka nabłonka, widoczne jądro." }
      }),
      text: {
        pl: [
          "Szkolnym mikroskopem optycznym w komórce nabłonka jamy ustnej widać błonę komórkową, cytoplazmę i jądro komórkowe.",
          "Mitochondria i rybosomy na takim zdjęciu zwykle nie są czytelne. Ich kształt i funkcje są na schemacie.",
          "Preparat przygotowuje się w szkole, pod opieką nauczyciela, na czystych szkiełkach. Sam w domu tego nie robisz. Obserwację zaczyna się od najmniejszego powiększenia.",
          "Na preparacie komórka często jest spłaszczona. To ta sama komórka nabłonka, której kształt kostki poznałeś wcześniej."
        ],
        ua: [
          "Шкільним оптичним мікроскопом у клітині епітелію ротової порожнини видно клітинну мембрану, цитоплазму і клітинне ядро.",
          "Мітохондрії і рибосоми на такому знімку зазвичай нечитабельні. Їхня форма і функції є на схемі.",
          "Препарат готують у школі, під наглядом учителя, на чистих скельцях. Сам удома цього не робиш. Спостереження починають з найменшого збільшення.",
          "На препараті клітина часто сплющена. Це та сама клітина епітелію, чию форму кубика ти пізнав раніше."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zdjęcie i schemat", ua: "Приклад. Знімок і схема" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na zdjęciu nabłonka widać cienką granicę, wypełnienie i ciemniejsze jądro."],
            ua: ["На знімку епітелію видно тонку межу, наповнення і темніше ядро."]
          }
        },
        {
          text: {
            pl: ["Mitochondrium i rybosomów na tym zdjęciu zwykle nie odczytasz. One są na schemacie."],
            ua: ["Мітохондрію і рибосоми на цьому знімку зазвичай не прочитаєш. Вони є на схемі."]
          }
        },
        {
          text: {
            pl: ["Zaczynasz od najmniejszego powiększenia i tylko w szkole, z nauczycielem."],
            ua: ["Починаєш із найменшого збільшення і лише в школі, з учителем."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czego nie odczytasz?", ua: "Коротке питання. Чого не прочитаєш?" },
      task: {
        id: "l06-g6",
        type: "single-choice",
        question: {
          pl: "Czego zwykle nie odczytasz na zdjęciu nabłonka spod mikroskopu optycznego?",
          ua: "Чого зазвичай не прочитаєш на знімку епітелію з-під оптичного мікроскопа?"
        },
        options: [
          { id: "a", label: { pl: "mitochondriów i rybosomów — są na schemacie, na zdjęciu nieczytelne", ua: "мітохондрій і рибосом — вони на схемі, на знімку нечитабельні" } },
          { id: "b", label: { pl: "jądra — ono jest niewidoczne", ua: "ядра — воно невидиме" } },
          { id: "c", label: { pl: "błony — komórka zwierzęca jej nie ma", ua: "мембрани — тваринна клітина її не має" } }
        ],
        answer: "a",
        hint: {
          pl: "Na zdjęciu widać granicę, wypełnienie i jądro. Drobne struktury zostają na schemacie.",
          ua: "На знімку видно межу, наповнення і ядро. Дрібні структури лишаються на схемі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro właśnie widać: zwykle ciemniejsza, okrągława struktura. Nieczytelne są mitochondria i rybosomy.",
              ua: "Ядро якраз видно: зазвичай темніша, округла структура. Нечитабельні мітохондрії і рибосоми."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Błona jest granicą komórki zwierzęcej i na preparacie ją widać. Brakuje czytelności mitochondriów i rybosomów.",
              ua: "Мембрана є межею тваринної клітини, і на препараті її видно. Бракує чіткості мітохондрій і рибосом."
            }
          }
        ],
        explanation: {
          pl: "Pod mikroskopem optycznym widać błonę, cytoplazmę i jądro. Mitochondria i rybosomy zwykle nie są czytelne.",
          ua: "Під оптичним мікроскопом видно мембрану, цитоплазму і ядро. Мітохондрії і рибосоми зазвичай нечитабельні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Na zdjęciu widać wszystko", ua: "Типова помилка. На знімку видно все" },
      claim: {
        pl: "„Pod szkolnym mikroskopem widać mitochondria i rybosomy tak samo wyraźnie jak na schemacie.”",
        ua: "«Під шкільним мікроскопом мітохондрії і рибосоми видно так само чітко, як на схемі.»"
      },
      text: {
        pl: [
          "Schemat dorysowuje to, czego zdjęcie nie pokazuje.",
          "Na preparacie nabłonka czytasz błonę, cytoplazmę i jądro. Mitochondria i rybosomy zwykle zostają nieczytelne."
        ],
        ua: [
          "Схема домальовує те, чого знімок не показує.",
          "На препараті епітелію читаєш мембрану, цитоплазму і ядро. Мітохондрії і рибосоми зазвичай лишаються нечитабельними."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Gdzie i od czego zacząć", ua: "Сам. Де і з чого почати" },
      task: {
        id: "l06-p6",
        type: "single-choice",
        question: {
          pl: "Gdzie oglądasz preparat nabłonka jamy ustnej i od jakiego powiększenia zaczynasz?",
          ua: "Де ти розглядаєш препарат епітелію ротової порожнини і з якого збільшення починаєш?"
        },
        options: [
          { id: "a", label: { pl: "w szkole, z nauczycielem, od najmniejszego powiększenia", ua: "у школі, з учителем, з найменшого збільшення" } },
          { id: "b", label: { pl: "sam w domu, od największego powiększenia", ua: "сам удома, з найбільшого збільшення" } },
          { id: "c", label: { pl: "nigdzie, bo komórki nabłonka nie istnieją", ua: "ніде, бо клітин епітелію не існує" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Śluzówki nie przygotowujesz sam w domu. W szkole zaczynasz od najmniejszego powiększenia.",
              ua: "Слизову не готуєш сам удома. У школі починаєш із найменшого збільшення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórki nabłonka są. Na preparacie widać ich błonę, cytoplazmę i jądro.",
              ua: "Клітини епітелію є. На препараті видно їхню мембрану, цитоплазму і ядро."
            }
          }
        ],
        explanation: {
          pl: "Preparat oglądasz w szkole pod opieką nauczyciela i zaczynasz od najmniejszego powiększenia.",
          ua: "Препарат розглядаєш у школі під наглядом учителя і починаєш із найменшого збільшення."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą część komórki sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку частину клітини ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Trzy nazwy na schemacie", ua: "Перевірка 1. Три назви на схемі" },
      task: {
        id: "l06-t1",
        type: "single-choice",
        question: {
          pl: "Na schemacie wskazujesz granicę, galaretowate wypełnienie i kulistą strukturę z DNA. Jakie to nazwy?",
          ua: "На схемі ти вказуєш межу, желеподібне наповнення і кулясту структуру з ДНК. Які це назви?"
        },
        options: [
          { id: "a", label: { pl: "błona komórkowa, cytozol, jądro komórkowe", ua: "клітинна мембрана, цитозоль, клітинне ядро" } },
          { id: "b", label: { pl: "błona komórkowa, cytoplazma, jądro komórkowe", ua: "клітинна мембрана, цитоплазма, клітинне ядро" } },
          { id: "c", label: { pl: "ściana komórkowa, chloroplast, wakuola", ua: "клітинна стінка, хлоропласт, вакуоля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Galaretowate wypełnienie to cytozol. Cytoplazma jest szersza: cytozol plus struktury, bez jądra.",
              ua: "Желеподібне наповнення — це цитозоль. Цитоплазма ширша: цитозоль плюс структури, без ядра."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana i chloroplast są u roślin. Wakuola jest pęcherzykiem, nie granicą, nie wypełnieniem i nie jądrem.",
              ua: "Стінка і хлоропласт є в рослин. Вакуоля — пухирець, не межа, не наповнення і не ядро."
            }
          }
        ],
        explanation: {
          pl: "Granica to błona, galareta to cytozol, kulista struktura z DNA to jądro.",
          ua: "Межа — мембрана, желе — цитозоль, куляста структура з ДНК — ядро."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Błona komórkowa", ua: "Перевірка 2. Клітинна мембрана" },
      task: {
        id: "l06-t2",
        type: "single-choice",
        question: {
          pl: "Które zdanie o błonie komórkowej jest prawdziwe?",
          ua: "Яке речення про клітинну мембрану правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Oddziela wnętrze komórki od otoczenia i przepuszcza wybrane substancje.", ua: "Відокремлює нутро клітини від оточення і пропускає вибрані речовини." } },
          { id: "b", label: { pl: "Wytwarza białka zamiast rybosomów.", ua: "Виробляє білки замість рибосом." } },
          { id: "c", label: { pl: "Jest twardą ścianą z celulozy wokół komórki zwierzęcej.", ua: "Є твердою стінкою з целюлози навколо тваринної клітини." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Białka wytwarzają rybosomy. Błona jest granicą i przepuszcza wybrane substancje.",
              ua: "Білки виробляють рибосоми. Мембрана є межею і пропускає вибрані речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana z celulozy jest u roślin. Komórkę zwierzęcą oddziela błona.",
              ua: "Стінка з целюлози є в рослин. Тваринну клітину відокремлює мембрана."
            }
          }
        ],
        explanation: {
          pl: "Błona oddziela wnętrze od otoczenia i przepuszcza wybrane substancje.",
          ua: "Мембрана відокремлює нутро від оточення і пропускає вибрані речовини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Jądro komórkowe", ua: "Перевірка 3. Клітинне ядро" },
      task: {
        id: "l06-t3",
        type: "single-choice",
        question: {
          pl: "Gdzie jest zapis cech i co kieruje procesami w komórce zwierzęcej?",
          ua: "Де запис рис і що керує процесами в тваринній клітині?"
        },
        options: [
          { id: "a", label: { pl: "DNA jest w jądrze; jądro kieruje procesami", ua: "ДНК є в ядрі; ядро керує процесами" } },
          { id: "b", label: { pl: "DNA jest w wakuoli; wakuola kieruje procesami", ua: "ДНК є у вакуолі; вакуоля керує процесами" } },
          { id: "c", label: { pl: "zapis cech jest w błonie; jądro tylko wypełnia komórkę jak cytozol", ua: "запис рис є в мембрані; ядро лише наповнює клітину, як цитозоль" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wakuola wchłania, trawi i usuwa substancje. Zapis cech i sterowanie są w jądrze.",
              ua: "Вакуоля бере участь у всмоктуванні, травленні і видаленні речовин. Запис рис і керування — в ядрі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Błona nie trzyma DNA. Cytozol wypełnia komórkę. Jądro zawiera DNA i kieruje procesami.",
              ua: "Мембрана не тримає ДНК. Цитозоль наповнює клітину. Ядро містить ДНК і керує процесами."
            }
          }
        ],
        explanation: {
          pl: "DNA jest w jądrze, a jądro kieruje procesami w komórce.",
          ua: "ДНК є в ядрі, а ядро керує процесами в клітині."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Trzy struktury", ua: "Перевірка 4. Три структури" },
      task: {
        id: "l06-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o mitochondrium, rybosomach i wakuoli jest prawdziwe?",
          ua: "Яке речення про мітохондрію, рибосоми і вакуолю правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Mitochondrium dostarcza energii, rybosomy wytwarzają białka, wakuola uczestniczy we wchłanianiu, trawieniu i usuwaniu substancji.", ua: "Мітохондрія дає енергію, рибосоми виробляють білки, вакуоля бере участь у всмоктуванні, травленні і видаленні речовин." } },
          { id: "b", label: { pl: "Mitochondrium zapisuje cechy potomstwu, rybosomy są jądrem, wakuola jest ścianą z celulozy.", ua: "Мітохондрія записує риси потомству, рибосоми є ядром, вакуоля є стінкою з целюлози." } },
          { id: "c", label: { pl: "W komórce zwierzęcej wakuola jest zawsze jedną wielką bańką, a rybosomów nie ma.", ua: "У тваринній клітині вакуоля завжди одна велика бульбашка, а рибосом немає." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapis cech jest w DNA w jądrze. Rybosomy to ziarenka, nie jądro. Ściana z celulozy nie jest wakuolą.",
              ua: "Запис рис є в ДНК у ядрі. Рибосоми — зернятка, не ядро. Стінка з целюлози не є вакуолею."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W komórce zwierzęcej wakuole są drobne. Jedna duża bywa u roślin. Rybosomy w komórce są i wytwarzają białka.",
              ua: "У тваринній клітині вакуолі дрібні. Одна велика буває в рослин. Рибосоми в клітині є і виробляють білки."
            }
          }
        ],
        explanation: {
          pl: "Energia, białka i mały pęcherzyk — to trzy prace z paszportu.",
          ua: "Енергія, білки і малий пухирець — це три роботи з паспорта."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Nabłonek pod mikroskopem", ua: "Перевірка 5. Епітелій під мікроскопом" },
      task: {
        id: "l06-t5",
        type: "single-choice",
        question: {
          pl: "Co widać w komórce nabłonka jamy ustnej pod mikroskopem optycznym?",
          ua: "Що видно в клітині епітелію ротової порожнини під оптичним мікроскопом?"
        },
        options: [
          { id: "a", label: { pl: "błonę komórkową, cytoplazmę i jądro; mitochondria i rybosomy zwykle nie są czytelne", ua: "клітинну мембрану, цитоплазму і ядро; мітохондрії і рибосоми зазвичай нечитабельні" } },
          { id: "b", label: { pl: "tylko chloroplasty i twardą ścianę z celulozy", ua: "лише хлоропласти і тверду стінку з целюлози" } },
          { id: "c", label: { pl: "nic — komórki nabłonka nie istnieją", ua: "нічого — клітин епітелію не існує" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplasty i ściana z celulozy są w komórce roślinnej. W nabłonku widać błonę, cytoplazmę i jądro.",
              ua: "Хлоропласти і стінка з целюлози є в рослинній клітині. В епітелії видно мембрану, цитоплазму і ядро."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórki nabłonka są. Na szkolnym preparacie widać ich granicę, wypełnienie i jądro.",
              ua: "Клітини епітелію є. На шкільному препараті видно їхню межу, наповнення і ядро."
            }
          }
        ],
        explanation: {
          pl: "Pod mikroskopem optycznym widać błonę, cytoplazmę i jądro. Reszta jest na schemacie.",
          ua: "Під оптичним мікроскопом видно мембрану, цитоплазму і ядро. Решта є на схемі."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l06-schemat.png", {
        alt: { pl: "Schemat komórki zwierzęcej", ua: "Схема тваринної клітини" },
        title: { pl: "Błona, cytozol, jądro, wakuola, mitochondrium, rybosomy.", ua: "Мембрана, цитозоль, ядро, вакуоля, мітохондрія, рибосоми." },
        prompt: { pl: "Ten sam schemat sześciu elementów komórki zwierzęcej." }
      }),
      text: {
        pl: [
          "Na schemacie: błona, cytozol, jądro, wakuola, mitochondrium, rybosomy. Ściany z celulozy nie ma.",
          "Cytozol to galaretowate wypełnienie. Cytoplazma to cytozol plus struktury, bez jądra.",
          "Błona oddziela wnętrze od otoczenia i przepuszcza wybrane substancje.",
          "Jądro zawiera DNA i kieruje procesami.",
          "Mitochondrium — energia. Rybosomy — białka. Wakuola — mały pęcherzyk.",
          "Pod mikroskopem optycznym w nabłonku widać błonę, cytoplazmę i jądro."
        ],
        ua: [
          "На схемі: мембрана, цитозоль, ядро, вакуоля, мітохондрія, рибосоми. Стінки з целюлози немає.",
          "Цитозоль — желеподібне наповнення. Цитоплазма — цитозоль плюс структури, без ядра.",
          "Мембрана відокремлює нутро від оточення і пропускає вибрані речовини.",
          "Ядро містить ДНК і керує процесами.",
          "Мітохондрія — енергія. Рибосоми — білки. Вакуоля — малий пухирець.",
          "Під оптичним мікроскопом в епітелії видно мембрану, цитоплазму і ядро."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wskażę błonę, cytozol i jądro na schemacie komórki zwierzęcej.", ua: "Вкажу мембрану, цитозоль і ядро на схемі тваринної клітини." },
        { pl: "Powiem, do czego służy błona komórkowa.", ua: "Скажу, для чого служить клітинна мембрана." },
        { pl: "Powiem, do czego służy jądro komórkowe.", ua: "Скажу, для чого служить клітинне ядро." },
        { pl: "Wyjaśnię funkcje mitochondrium, rybosomów i wakuoli.", ua: "Поясню функції мітохондрії, рибосом і вакуолі." },
        { pl: "Powiem, co widać w komórce nabłonka pod mikroskopem optycznym.", ua: "Скажу, що видно в клітині епітелію під оптичним мікроскопом." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
