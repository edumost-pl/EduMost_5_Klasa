function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L05_Hierarchiczna_budowa_organizmow/images/";

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
      heading: { pl: "Misja: jak zbudowane jest ciało", ua: "Місія: як побудоване тіло" },
      visual: vizGh("l05-zacznijmy.png", {
        alt: { pl: "Jajo strusia obok jaja kury", ua: "Яйце страуса поруч із яйцем курки" },
        title: { pl: "Jedna komórka bywa mniejsza niż kropka. Inna — wielka jak jajo.", ua: "Одна клітина буває менша за крапку. Інша — велика, як яйце." },
        prompt: { pl: "Zdjęcie lekcji 5: jajo strusia obok jaja kury." }
      }),
      text: {
        pl: [
          "To lekcja 5: hierarchiczna budowa organizmów. Wnętrza komórki dziś nie rozbieramy — to następna lekcja.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 5: ієрархічна будова організмів. Середину клітини сьогодні не розбираємо — це наступний урок.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "komórka", ua: "клітина — найменша жива частина" },
        { pl: "podstawowa jednostka życia", ua: "основна одиниця життя" },
        { pl: "jednokomórkowy", ua: "одноклітинний — усе тіло це одна клітина" },
        { pl: "wielokomórkowy", ua: "багатоклітинний — клітин дуже багато" },
        { pl: "tkanka", ua: "тканина — подібні клітини зі спільною роботою" },
        { pl: "narząd", ua: "орган — частина з тканин, наприклад головний мозок" },
        { pl: "organ", ua: "орган у рослини, наприклад листок" },
        { pl: "układ narządów", ua: "система органів" },
        { pl: "wić", ua: "джгутик — довгий виріст для руху" },
        { pl: "wypustki", ua: "відростки — ними нервова клітина передає інформацію" },
        { pl: "nabłonek", ua: "епітелій — клітини-кубики, захисний шар" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Podstawowa jednostka życia", ua: "Поняття. Основна одиниця життя" },
      visual: vizGh("l05-jednostka.png", {
        alt: { pl: "Komórka wykonuje czynności życiowe", ua: "Клітина виконує життєві функції" },
        title: { pl: "Najmniejsza część, która sama żyje.", ua: "Найменша частина, яка сама живе." },
        prompt: { pl: "Plansza lekcji 5: komórka i czynności życiowe, bez nazw organelli." }
      }),
      text: {
        pl: [
          "Wszystkie organizmy są zbudowane z komórek.",
          [em("Komórka"), " to najmniejsza część organizmu, która potrafi wykonywać czynności życiowe: pobiera substancje, oddycha, rośnie."],
          "Dlatego jest ", em("podstawową jednostką życia"), ". Narząd jest większy, bo składa się z wielu komórek.",
          "Jak komórka wygląda w środku, zobaczysz na następnej lekcji."
        ],
        ua: [
          "Усі організми побудовані з клітин.",
          [em("Клітина"), " — найменша частина організму, яка вміє виконувати життєві функції: бере речовини, дихає, росте."],
          "Тому вона є ", em("основною одиницею життя"), ". Орган більший, бо складається з багатьох клітин.",
          "Як клітина виглядає всередині, побачиш на наступному уроці."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mała, a żyje", ua: "Приклад. Мала, а живе" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Większość komórek jest tak mała, że na kropce na końcu zdania zmieściłoby się ich nawet około 500."],
            ua: ["Більшість клітин такі малі, що на крапці в кінці речення вмістилося б навіть близько 500."]
          }
        },
        {
          text: {
            pl: ["Mimo to taka część pobiera substancje, oddycha i rośnie. To już życie."],
            ua: ["Попри це така частина бере речовини, дихає і росте. Це вже життя."]
          }
        },
        {
          text: {
            pl: ["Narząd, na przykład mózgowie, nie jest jedną komórką. To wiele komórek zebrane wyżej."],
            ua: ["Орган, наприклад головний мозок, не є однією клітиною. Це багато клітин, зібраних вище."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dlaczego jednostka życia?", ua: "Коротке питання. Чому одиниця життя?" },
      task: {
        id: "l05-g1",
        type: "single-choice",
        question: {
          pl: "Dlaczego komórka jest podstawową jednostką życia?",
          ua: "Чому клітина є основною одиницею життя?"
        },
        options: [
          { id: "a", label: { pl: "bo to najmniejsza część organizmu zdolna do czynności życiowych", ua: "бо це найменша частина організму, здатна до життєвих функцій" } },
          { id: "b", label: { pl: "bo komórka to to samo co cały narząd", ua: "бо клітина — те саме, що цілий орган" } },
          { id: "c", label: { pl: "bo komórki nie rosną i nie oddychają", ua: "бо клітини не ростуть і не дихають" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj najmniejszej części, która sama pobiera substancje, oddycha i rośnie.",
          ua: "Шукай найменшу частину, яка сама бере речовини, дихає і росте."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Narząd składa się z wielu komórek. Komórka jest mniejsza od narządu.",
              ua: "Орган складається з багатьох клітин. Клітина менша за орган."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórka właśnie rośnie i oddycha. Dlatego w ogóle nazywamy ją żywą częścią.",
              ua: "Клітина якраз росте і дихає. Тому ми й називаємо її живою частиною."
            }
          }
        ],
        explanation: {
          pl: "Komórka jest najmniejsza, a mimo to wykonuje czynności życiowe.",
          ua: "Клітина найменша, але виконує життєві функції."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Za mała, żeby żyć", ua: "Типова помилка. Замала, щоб жити" },
      claim: {
        pl: "„Komórka jest za mała, więc nie wykonuje żadnych czynności życiowych.”",
        ua: "«Клітина занадто мала, тож не виконує жодних життєвих функцій.»"
      },
      text: {
        pl: [
          "Rozmiar nie odbiera jej życia.",
          "Nawet bardzo mała komórka pobiera substancje, oddycha i rośnie. Dlatego jest podstawową jednostką życia."
        ],
        ua: [
          "Розмір не забирає в неї життя.",
          "Навіть дуже мала клітина бере речовини, дихає і росте. Тому вона є основною одиницею життя."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka bakterii", ua: "Сам. Клітина бактерії" },
      task: {
        id: "l05-p1",
        type: "single-choice",
        question: {
          pl: "Komórka bakterii jest bardzo mała. Co potrafi?",
          ua: "Клітина бактерії дуже мала. Що вона вміє?"
        },
        options: [
          { id: "a", label: { pl: "Nic, bo jest za mała na czynności życiowe.", ua: "Нічого, бо вона замала для життєвих функцій." } },
          { id: "b", label: { pl: "Pobiera substancje, oddycha i rośnie — jak inne komórki.", ua: "Бере речовини, дихає і росте — як інші клітини." } },
          { id: "c", label: { pl: "Żyje tylko wtedy, gdy jest całym narządem.", ua: "Живе лише тоді, коли є цілим органом." } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Mały rozmiar nie wyłącza czynności życiowych. Bakteria też je wykonuje.",
              ua: "Малий розмір не вимикає життєві функції. Бактерія теж їх виконує."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Narząd jest zbudowany z wielu komórek. Jedna komórka już potrafi żyć.",
              ua: "Орган побудований із багатьох клітин. Одна клітина вже вміє жити."
            }
          }
        ],
        explanation: {
          pl: "Komórka bakterii wykonuje czynności życiowe, choć jest bardzo mała.",
          ua: "Клітина бактерії виконує життєві функції, хоча вона дуже мала."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jedna komórka albo wiele", ua: "Поняття. Одна клітина або багато" },
      visual: vizGh("l05-jedno-wielo.png", {
        alt: { pl: "Bakteria i organizm wielokomórkowy", ua: "Бактерія і багатоклітинний організм" },
        title: { pl: "Jedna komórka może być całym organizmem.", ua: "Одна клітина може бути цілим організмом." },
        prompt: { pl: "Kolaż lekcji 5: bakteria — organizm jednokomórkowy; pies lub drzewo — organizm wielokomórkowy." }
      }),
      text: {
        pl: [
          [em("Organizm jednokomórkowy"), " składa się z jednej komórki. Ta jedna komórka jest całym ciałem. Przykład: bakterie."],
          [em("Organizm wielokomórkowy"), " składa się z bardzo wielu komórek, które współpracują. Tak zbudowane są zwierzęta, rośliny i grzyby."],
          "Jednokomórkowy nie znaczy „nieważny”. Jedna komórka bakterii też wykonuje czynności życiowe."
        ],
        ua: [
          [em("Одноклітинний організм"), " складається з однієї клітини. Ця одна клітина є цілим тілом. Приклад: бактерії."],
          [em("Багатоклітинний організм"), " складається з дуже багатьох клітин, які співпрацюють. Так побудовані тварини, рослини і гриби."],
          "Одноклітинний не означає «неважливий». Одна клітина бактерії теж виконує життєві функції."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Bakteria i pies", ua: "Приклад. Бактерія і пес" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Bakteria: całe ciało to jedna komórka. To organizm jednokomórkowy."],
            ua: ["Бактерія: усе тіло — це одна клітина. Це одноклітинний організм."]
          }
        },
        {
          text: {
            pl: ["Pies ma bardzo wiele komórek. One współpracują. To organizm wielokomórkowy."],
            ua: ["У пса дуже багато клітин. Вони співпрацюють. Це багатоклітинний організм."]
          }
        },
        {
          text: {
            pl: ["Drzewo i grzyb też są wielokomórkowe. Nie tylko zwierzęta."],
            ua: ["Дерево і гриб теж багатоклітинні. Не лише тварини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto z jednej komórki?", ua: "Коротке питання. Хто з однієї клітини?" },
      task: {
        id: "l05-g2",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest prawdziwe?",
          ua: "Яке речення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Bakteria jest jednokomórkowa, pies — wielokomórkowy.", ua: "Бактерія одноклітинна, пес — багатоклітинний." } },
          { id: "b", label: { pl: "Bakteria i pies są jednokomórkowe.", ua: "Бактерія і пес одноклітинні." } },
          { id: "c", label: { pl: "Bakteria jest wielokomórkowa, a pies to jedna komórka.", ua: "Бактерія багатоклітинна, а пес — це одна клітина." } }
        ],
        answer: "a",
        hint: {
          pl: "Jedna komórka = całe ciało bakterii. Pies ma komórek bardzo wiele.",
          ua: "Одна клітина = усе тіло бактерії. У пса клітин дуже багато."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pies nie mieści się w jednej komórce. Wielokomórkowy znaczy: komórek jest bardzo wiele.",
              ua: "Пес не вміщається в одну клітину. Багатоклітинний означає: клітин дуже багато."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odwrotnie. Jedna komórka to bakteria. Pies składa się z wielu komórek.",
              ua: "Навпаки. Одна клітина — це бактерія. Пес складається з багатьох клітин."
            }
          }
        ],
        explanation: {
          pl: "Bakteria = jedna komórka. Pies = bardzo wiele komórek.",
          ua: "Бактерія = одна клітина. Пес = дуже багато клітин."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jedna komórka jest nieważna", ua: "Типова помилка. Одна клітина неважлива" },
      claim: {
        pl: "„Organizm jednokomórkowy jest nieważny, bo ma tylko jedną komórkę.”",
        ua: "«Одноклітинний організм неважливий, бо має лише одну клітину.»"
      },
      text: {
        pl: [
          "Jedna komórka bakterii jest całym organizmem i wykonuje czynności życiowe.",
          "Wielokomórkowy znaczy coś innego: komórek jest wiele i współpracują. Nie znaczy „jedyny ważny”."
        ],
        ua: [
          "Одна клітина бактерії є цілим організмом і виконує життєві функції.",
          "Багатоклітинний означає інше: клітин багато і вони співпрацюють. Не означає «єдиний важливий»."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kto jest wielokomórkowy?", ua: "Сам. Хто багатоклітинний?" },
      task: {
        id: "l05-p2",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie organizmy wielokomórkowe.",
          ua: "Познач усі багатоклітинні організми."
        },
        options: [
          { id: "a", label: { pl: "pies", ua: "пес" } },
          { id: "b", label: { pl: "bakteria", ua: "бактерія" } },
          { id: "c", label: { pl: "grzyb", ua: "гриб" } },
          { id: "d", label: { pl: "drzewo", ua: "дерево" } }
        ],
        answer: ["a", "c", "d"],
        mistakes: [
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Bakteria jest jednokomórkowa. Pies, grzyb i drzewo mają bardzo wiele komórek.",
              ua: "Бактерія одноклітинна. Пес, гриб і дерево мають дуже багато клітин."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Bakteria to jedna komórka. Wielokomórkowe są pies, grzyb i drzewo.",
              ua: "Бактерія — це одна клітина. Багатоклітинні — пес, гриб і дерево."
            }
          },
          {
            answer: "a,d",
            feedback: {
              pl: "Pies i drzewo pasują. Grzyb też jest wielokomórkowy. Bakterii nie zaznaczaj.",
              ua: "Пес і дерево пасують. Гриб теж багатоклітинний. Бактерію не позначай."
            }
          },
          {
            answer: "a,c",
            feedback: {
              pl: "Pies i grzyb pasują. Drzewo też jest wielokomórkowe.",
              ua: "Пес і гриб пасують. Дерево теж багатоклітинне."
            }
          }
        ],
        explanation: {
          pl: "Pies, grzyb i drzewo są wielokomórkowe. Bakteria — jednokomórkowa.",
          ua: "Пес, гриб і дерево багатоклітинні. Бактерія — одноклітинна."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Małe i ogromne komórki", ua: "Поняття. Малі і величезні клітини" },
      visual: vizGh("l05-wielkosc.png", {
        alt: { pl: "Bakterie i komórka jajowa strusia", ua: "Бактерії і яйцеклітина страуса" },
        title: { pl: "Najmniejsze — bakterie. Największa zwierzęca — w jaju strusia.", ua: "Найменші — бактерії. Найбільша тваринна — в яйці страуса." },
        prompt: { pl: "Plansza lekcji 5: bakterie — najmniejsze komórki; jajo strusia około 15 cm." }
      }),
      text: {
        pl: [
          "Komórki różnią się wielkością, kształtem i budową.",
          "Do najmniejszych należą komórki bakterii. Żeby je dobrze zobaczyć, często potrzebny jest bardzo mocny mikroskop.",
          "Do największych komórek zwierzęcych należy komórka jajowa w jaju strusia.",
          "Same jajo strusia ma około 15 cm długości i jest około trzech razy większe niż jajo kury."
        ],
        ua: [
          "Клітини різняться розміром, формою і будовою.",
          "До найменших належать клітини бактерій. Щоб їх добре побачити, часто потрібен дуже сильний мікроскоп.",
          "До найбільших тваринних клітин належить яйцеклітина в яйці страуса.",
          "Саме яйце страуса має близько 15 см довжини і приблизно втричі більше за яйце курки."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kropka i jajo", ua: "Приклад. Крапка і яйце" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Typowa komórka jest drobna: około 500 takich zmieściłoby się na kropce."],
            ua: ["Звичайна клітина дрібна: близько 500 таких вмістилося б на крапці."]
          }
        },
        {
          text: {
            pl: ["Bakterie są jeszcze mniejsze. Często widać je dopiero pod bardzo mocnym mikroskopem."],
            ua: ["Бактерії ще менші. Часто їх видно лише під дуже сильним мікроскопом."]
          }
        },
        {
          text: {
            pl: ["Wyjątek: komórka jajowa w jaju strusia. Jajo ma około 15 cm i jest około trzy razy większe niż jajo kury."],
            ua: ["Виняток: яйцеклітина в яйці страуса. Яйце має близько 15 см і приблизно втричі більше за яйце курки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która większa?", ua: "Коротке питання. Яка більша?" },
      task: {
        id: "l05-g3",
        type: "single-choice",
        question: {
          pl: "Które porównanie jest poprawne?",
          ua: "Яке порівняння правильне?"
        },
        options: [
          { id: "a", label: { pl: "bakterie — zwykle najmniejsze; komórka jajowa strusia — największa znana komórka zwierzęca", ua: "бактерії — зазвичай найменші; яйцеклітина страуса — найбільша відома тваринна клітина" } },
          { id: "b", label: { pl: "wszystkie komórki mają ten sam rozmiar co kropka", ua: "усі клітини мають той самий розмір, що й крапка" } },
          { id: "c", label: { pl: "jajo kury jest większe niż jajo strusia", ua: "яйце курки більше за яйце страуса" } }
        ],
        answer: "a",
        hint: {
          pl: "Najmniejsze szukaj wśród bakterii. Największą komórkę zwierzęcą — w jaju strusia, nie kury.",
          ua: "Найменші шукай серед бактерій. Найбільшу тваринну клітину — в яйці страуса, не курки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Większość komórek jest drobna, ale nie wszystkie. Komórka jajowa strusia jest wyjątkiem.",
              ua: "Більшість клітин дрібні, але не всі. Яйцеклітина страуса — виняток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odwrotnie. Jajo strusia jest około trzy razy większe niż jajo kury.",
              ua: "Навпаки. Яйце страуса приблизно втричі більше за яйце курки."
            }
          }
        ],
        explanation: {
          pl: "Bakterie są zwykle najmniejsze. Komórka jajowa strusia jest największą znaną komórką zwierzęcą.",
          ua: "Бактерії зазвичай найменші. Яйцеклітина страуса — найбільша відома тваринна клітина."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kura większa niż struś", ua: "Типова помилка. Курка більша за страуса" },
      claim: {
        pl: "„Jajo kury jest trzy razy większe niż jajo strusia.”",
        ua: "«Яйце курки втричі більше за яйце страуса.»"
      },
      text: {
        pl: [
          "Kierunek jest odwrotny.",
          "Jajo strusia ma około 15 cm i jest około trzech razy większe niż jajo kury. W środku jest ogromna komórka jajowa."
        ],
        ua: [
          "Напрям протилежний.",
          "Яйце страуса має близько 15 см і приблизно втричі більше за яйце курки. Всередині — величезна яйцеклітина."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. 15 cm", ua: "Сам. 15 см" },
      task: {
        id: "l05-p3",
        type: "single-choice",
        question: {
          pl: "Jajo strusia ma około 15 cm. Jak ma się do jaja kury?",
          ua: "Яйце страуса має близько 15 см. Як воно співвідноситься з яйцем курки?"
        },
        options: [
          { id: "a", label: { pl: "Jest około trzy razy mniejsze.", ua: "Воно приблизно втричі менше." } },
          { id: "b", label: { pl: "Jest około trzy razy większe.", ua: "Воно приблизно втричі більше." } },
          { id: "c", label: { pl: "Ma ten sam rozmiar co kropka na końcu zdania.", ua: "Має той самий розмір, що й крапка в кінці речення." } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Mniejsze jest jajo kury. Strusie jest około trzy razy większe i ma około 15 cm.",
              ua: "Менше — яйце курки. Страусине приблизно втричі більше і має близько 15 см."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kropka mieści około 500 typowych komórek. Jajo strusia jest ogromne: około 15 cm.",
              ua: "На крапці вміщається близько 500 звичайних клітин. Яйце страуса величезне: близько 15 см."
            }
          }
        ],
        explanation: {
          pl: "Jajo strusia jest około trzy razy większe niż jajo kury.",
          ua: "Яйце страуса приблизно втричі більше за яйце курки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pięć poziomów", ua: "Поняття. П’ять рівнів" },
      visual: vizGh("l05-poziomy.png", {
        alt: { pl: "Komórka, tkanka, narząd, układ, organizm", ua: "Клітина, тканина, орган, система, організм" },
        title: { pl: "Od komórki nerwowej do całego człowieka.", ua: "Від нервової клітини до цілої людини." },
        prompt: { pl: "Schemat lekcji 5: komórka nerwowa, tkanka nerwowa, mózgowie, układ nerwowy, organizm." }
      }),
      text: {
        pl: [
          [em("Komórka"), " — na przykład komórka nerwowa."],
          [em("Tkanka"), " — zespół podobnych komórek o wspólnej funkcji, na przykład tkanka nerwowa."],
          [em("Narząd"), " — część zbudowana z tkanek, na przykład mózgowie. U roślin ten poziom to organ, na przykład liść."],
          [em("Układ narządów"), " — kilka narządów współpracuje, na przykład układ nerwowy."],
          [em("Organizm"), " — całość, na przykład człowiek."],
          "Kolejność od najmniejszego: komórka → tkanka → narząd → układ narządów → organizm."
        ],
        ua: [
          [em("Клітина"), " — наприклад нервова клітина."],
          [em("Тканина"), " — група подібних клітин зі спільною функцією, наприклад нервова тканина."],
          [em("Орган"), " — частина з тканин, наприклад головний мозок. У рослин цей рівень теж називають органом, наприклад листок."],
          [em("Система органів"), " — кілька органів співпрацюють, наприклад нервова система."],
          [em("Організм"), " — ціле, наприклад людина."],
          "Порядок від найменшого: клітина → тканина → орган → система органів → організм."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Od wypustki do człowieka", ua: "Приклад. Від відростка до людини" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Start: komórka nerwowa. To najmniejszy poziom na tej liście."],
            ua: ["Старт: нервова клітина. Це найменший рівень у цьому списку."]
          }
        },
        {
          text: {
            pl: ["Wiele podobnych komórek nerwowych o tej samej pracy tworzy tkankę nerwową."],
            ua: ["Багато подібних нервових клітин з тією самою роботою утворюють нервову тканину."]
          }
        },
        {
          text: {
            pl: ["Mózgowie jest narządem. Razem z innymi narządami tworzy układ nerwowy. Cały człowiek to organizm."],
            ua: ["Головний мозок — орган. Разом з іншими органами він утворює нервову систему. Ціла людина — організм."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co jest pomiędzy?", ua: "Коротке питання. Що між ними?" },
      task: {
        id: "l05-g4",
        type: "single-choice",
        question: {
          pl: "Co jest poziomem między tkanką a układem narządów?",
          ua: "Що є рівнем між тканиною і системою органів?"
        },
        options: [
          { id: "a", label: { pl: "narząd, na przykład mózgowie", ua: "орган, наприклад головний мозок" } },
          { id: "b", label: { pl: "pierwiastek chemiczny", ua: "хімічний елемент" } },
          { id: "c", label: { pl: "cała planeta", ua: "ціла планета" } }
        ],
        answer: "a",
        hint: {
          pl: "Kolejność: komórka, tkanka, potem jeden poziom, potem układ, potem organizm.",
          ua: "Порядок: клітина, тканина, потім один рівень, потім система, потім організм."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pierwiastek jest z lekcji o składnikach. Między tkanką a układem stoi narząd.",
              ua: "Елемент — з уроку про складники. Між тканиною і системою стоїть орган."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Planeta jest poza tą listą. Po tkance jest narząd, na przykład mózgowie.",
              ua: "Планета поза цим списком. Після тканини йде орган, наприклад головний мозок."
            }
          }
        ],
        explanation: {
          pl: "Między tkanką a układem narządów jest narząd.",
          ua: "Між тканиною і системою органів є орган."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Od człowieka w dół", ua: "Типова помилка. Від людини вниз" },
      claim: {
        pl: "„Poziomy układamy od organizmu do komórki, bo człowiek jest pierwszy.”",
        ua: "«Рівні складаємо від організму до клітини, бо людина перша.»"
      },
      text: {
        pl: [
          "Na sprawdzianie kolejność jest od najmniejszego.",
          "Komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm."
        ],
        ua: [
          "На контрольній порядок — від найменшого.",
          "Нервова клітина → нервова тканина → головний мозок → нервова система → організм."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Liść", ua: "Сам. Листок" },
      task: {
        id: "l05-p4",
        type: "single-choice",
        question: {
          pl: "Liść u rośliny jest przykładem…",
          ua: "Листок у рослини є прикладом…"
        },
        options: [
          { id: "a", label: { pl: "pojedynczej komórki", ua: "окремої клітини" } },
          { id: "b", label: { pl: "narządu, u roślin zwanego też organem", ua: "органа, у рослин його теж називають органом" } },
          { id: "c", label: { pl: "układu nerwowego", ua: "нервової системи" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Liść jest większy niż jedna komórka. Zbudowany jest z tkanek, więc jest narządem.",
              ua: "Листок більший за одну клітину. Він побудований із тканин, тому є органом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Układ nerwowy jest u zwierząt. Liść to narząd rośliny.",
              ua: "Нервова система є в тварин. Листок — орган рослини."
            }
          }
        ],
        explanation: {
          pl: "U roślin liść jest narządem, czyli organem.",
          ua: "У рослин листок є органом."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kształt służy pracy", ua: "Поняття. Форма служить роботі" },
      visual: vizGh("l05-ksztalty.png", {
        alt: { pl: "Cztery kształty komórek zwierzęcych", ua: "Чотири форми тваринних клітин" },
        title: { pl: "Inna praca — inny kształt.", ua: "Інша робота — інша форма." },
        prompt: { pl: "Plansza lekcji 5: plemnik, komórka jajowa, komórka nerwowa, komórka nabłonka." }
      }),
      text: {
        pl: [
          "Komórki zwierzęce mają różne kształty, bo pełnią różne funkcje. Kształt nie jest przypadkowy.",
          ["", em("Plemnik"), " ma długą wić."],
          ["", em("Komórka jajowa"), " jest kulista."],
          ["", em("Komórka nerwowa"), " ma długie wypustki."],
          ["", em("Komórka nabłonka"), " ma kształt kostki."]
        ],
        ua: [
          "Тваринні клітини мають різні форми, бо виконують різні функції. Форма не випадкова.",
          [em("Сперматозоїд"), " має довгий джгутик."],
          [em("Яйцеклітина"), " куляста."],
          [em("Нервова клітина"), " має довгі відростки."],
          [em("Клітина епітелію"), " має форму кубика."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Cztery kształty", ua: "Приклад. Чотири форми" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wić plemnika służy do ruchu w stronę komórki jajowej."],
            ua: ["Джгутик сперматозоїда служить для руху до яйцеклітини."]
          }
        },
        {
          text: {
            pl: ["Komórka jajowa jest kulą i ma zapas substancji odżywczych dla rozwijającego się organizmu."],
            ua: ["Яйцеклітина — куля і має запас поживних речовин для організму, що розвивається."]
          }
        },
        {
          text: {
            pl: ["Wypustki komórki nerwowej łączą ją z innymi komórkami i przekazują informacje."],
            ua: ["Відростки нервової клітини з’єднують її з іншими клітинами і передають інформацію."]
          }
        },
        {
          text: {
            pl: ["Kostki nabłonka ściśle do siebie przylegają. Razem tworzą warstwę ochronną — już tkankę."],
            ua: ["Кубики епітелію щільно прилягають. Разом утворюють захисний шар — уже тканину."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co wić?", ua: "Коротке питання. Навіщо джгутик?" },
      task: {
        id: "l05-g5",
        type: "single-choice",
        question: {
          pl: "Do czego plemnikowi służy wić?",
          ua: "Для чого сперматозоїду служить джгутик?"
        },
        options: [
          { id: "a", label: { pl: "do ruchu w stronę komórki jajowej", ua: "для руху до яйцеклітини" } },
          { id: "b", label: { pl: "do zapisu cech w DNA", ua: "для запису рис у ДНК" } },
          { id: "c", label: { pl: "do fotosyntezy", ua: "для фотосинтезу" } }
        ],
        answer: "a",
        hint: {
          pl: "Wić jest długa. Plemnik dzięki niej się przemieszcza.",
          ua: "Джгутик довгий. Сперматозоїд завдяки ньому переміщується."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapis cech to DNA, nie wić. Wić służy do ruchu.",
              ua: "Запис рис — це ДНК, не джгутик. Джгутик служить для руху."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza nie jest pracą plemnika. Wić pomaga mu płynąć do komórki jajowej.",
              ua: "Фотосинтез не є роботою сперматозоїда. Джгутик допомагає йому пливти до яйцеклітини."
            }
          }
        ],
        explanation: {
          pl: "Wić służy plemnikowi do ruchu.",
          ua: "Джгутик служить сперматозоїду для руху."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kształt bez znaczenia", ua: "Типова помилка. Форма не має значення" },
      claim: {
        pl: "„Kształt komórki nie ma związku z jej pracą. Wszystkie mogą wyglądać tak samo.”",
        ua: "«Форма клітини не пов’язана з її роботою. Усі можуть виглядати однаково.»"
      },
      text: {
        pl: [
          "Kształt jest dopasowany do funkcji.",
          "Wić — ruch. Kula komórki jajowej — zapas substancji. Wypustki — przekazywanie informacji. Kostka nabłonka — szczelna warstwa ochronna."
        ],
        ua: [
          "Форма підібрана до функції.",
          "Джгутик — рух. Куля яйцеклітини — запас речовин. Відростки — передача інформації. Кубик епітелію — щільний захисний шар."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kostka nabłonka", ua: "Сам. Кубик епітелію" },
      task: {
        id: "l05-p5",
        type: "single-choice",
        question: {
          pl: "Dlaczego komórka nabłonka ma kształt kostki?",
          ua: "Чому клітина епітелію має форму кубика?"
        },
        options: [
          { id: "a", label: { pl: "Żeby komórki ściśle przylegały i tworzyły warstwę ochronną.", ua: "Щоб клітини щільно прилягали і утворювали захисний шар." } },
          { id: "b", label: { pl: "Żeby pływać jak plemnik.", ua: "Щоб плавати, як сперматозоїд." } },
          { id: "c", label: { pl: "Żeby długimi wypustkami przekazywać informacje.", ua: "Щоб довгими відростками передавати інформацію." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Do ruchu służy wić plemnika. Kostka nabłonka służy do ścisłego przylegania.",
              ua: "Для руху служить джгутик сперматозоїда. Кубик епітелію служить для щільного прилягання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Długie wypustki ma komórka nerwowa. Nabłonek tworzy warstwę ochronną.",
              ua: "Довгі відростки має нервова клітина. Епітелій утворює захисний шар."
            }
          }
        ],
        explanation: {
          pl: "Kształt kostki pozwala komórkom nabłonka ściśle przylegać i chronić.",
          ua: "Форма кубика дозволяє клітинам епітелію щільно прилягати і захищати."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który poziom albo którą funkcję kształtu sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який рівень або яку функцію форми ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Jednostka życia", ua: "Перевірка 1. Одиниця життя" },
      task: {
        id: "l05-t1",
        type: "single-choice",
        question: {
          pl: "Dlaczego komórka jest podstawową jednostką życia?",
          ua: "Чому клітина є основною одиницею життя?"
        },
        options: [
          { id: "a", label: { pl: "To najmniejsza część organizmu zdolna do czynności życiowych.", ua: "Це найменша частина організму, здатна до життєвих функцій." } },
          { id: "b", label: { pl: "Bo komórka jest zawsze większa niż człowiek.", ua: "Бо клітина завжди більша за людину." } },
          { id: "c", label: { pl: "Bo komórki nie występują u zwierząt.", ua: "Бо клітин немає в тварин." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Człowiek jest organizmem z ogromnej liczby komórek. Komórka jest od niego mniejsza.",
              ua: "Людина — організм з величезної кількості клітин. Клітина менша за неї."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zwierzęta są zbudowane z komórek. Komórka właśnie dlatego jest jednostką życia.",
              ua: "Тварини побудовані з клітин. Клітина саме тому є одиницею життя."
            }
          }
        ],
        explanation: {
          pl: "Komórka jest najmniejsza i wykonuje czynności życiowe.",
          ua: "Клітина найменша і виконує життєві функції."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Jedna czy wiele", ua: "Перевірка 2. Одна чи багато" },
      task: {
        id: "l05-t2",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe zdania.",
          ua: "Познач усі правдиві речення."
        },
        options: [
          { id: "a", label: { pl: "Organizm jednokomórkowy składa się z jednej komórki. Przykład: bakterie.", ua: "Одноклітинний організм складається з однієї клітини. Приклад: бактерії." } },
          { id: "b", label: { pl: "Organizm wielokomórkowy składa się z wielu komórek: zwierzęta, rośliny, grzyby.", ua: "Багатоклітинний організм складається з багатьох клітин: тварини, рослини, гриби." } },
          { id: "c", label: { pl: "Człowiek jest organizmem jednokomórkowym.", ua: "Людина є одноклітинним організмом." } }
        ],
        answer: ["a", "b"],
        mistakes: [
          {
            answer: "a,b,c",
            feedback: {
              pl: "Zdanie C jest fałszywe. Człowiek jest wielokomórkowy.",
              ua: "Речення C хибне. Людина багатоклітинна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Człowiek ma bardzo wiele komórek. Jednokomórkowe są bakterie.",
              ua: "У людини дуже багато клітин. Одноклітинні — бактерії."
            }
          },
          {
            answer: "a",
            feedback: {
              pl: "A jest prawdziwe. Brakuje B: zwierzęta, rośliny i grzyby są wielokomórkowe.",
              ua: "A правдиве. Бракує B: тварини, рослини і гриби багатоклітинні."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "B jest prawdziwe. Brakuje A: bakteria to jedna komórka.",
              ua: "B правдиве. Бракує A: бактерія — це одна клітина."
            }
          }
        ],
        explanation: {
          pl: "Bakterie są jednokomórkowe. Człowiek, rośliny i grzyby — wielokomórkowe.",
          ua: "Бактерії одноклітинні. Людина, рослини і гриби — багатоклітинні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Wielkość", ua: "Перевірка 3. Розмір" },
      task: {
        id: "l05-t3",
        type: "single-choice",
        question: {
          pl: "Który przykład wielkości jest poprawny?",
          ua: "Який приклад розміру правильний?"
        },
        options: [
          { id: "a", label: { pl: "bakterie — zwykle najmniejsze komórki; komórka jajowa strusia — największa znana komórka zwierzęca", ua: "бактерії — зазвичай найменші клітини; яйцеклітина страуса — найбільша відома тваринна клітина" } },
          { id: "b", label: { pl: "jajo kury jest trzy razy większe niż jajo strusia", ua: "яйце курки втричі більше за яйце страуса" } },
          { id: "c", label: { pl: "wszystkie komórki widać gołym okiem jak piłkę", ua: "усі клітини видно неозброєним оком, як м’яч" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Większe jest jajo strusia: około 15 cm, około trzy razy większe niż jajo kury.",
              ua: "Більше яйце страуса: близько 15 см, приблизно втричі більше за яйце курки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Większość komórek jest drobna. Bakterie często widać dopiero pod mocnym mikroskopem.",
              ua: "Більшість клітин дрібні. Бактерії часто видно лише під сильним мікроскопом."
            }
          }
        ],
        explanation: {
          pl: "Bakterie są zwykle najmniejsze. Komórka jajowa strusia jest największą znaną komórką zwierzęcą.",
          ua: "Бактерії зазвичай найменші. Яйцеклітина страуса — найбільша відома тваринна клітина."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Poziomy", ua: "Перевірка 4. Рівні" },
      task: {
        id: "l05-t4",
        type: "single-choice",
        question: {
          pl: "Która kolejność z przykładami jest poprawna — od najmniejszego?",
          ua: "Який порядок із прикладами правильний — від найменшого?"
        },
        options: [
          { id: "a", label: { pl: "komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm", ua: "нервова клітина → нервова тканина → головний мозок → нервова система → організм" } },
          { id: "b", label: { pl: "organizm → bakteria → tkanka → komórka", ua: "організм → бактерія → тканина → клітина" } },
          { id: "c", label: { pl: "układ nerwowy → komórka nerwowa → jajo strusia → tkanka", ua: "нервова система → нервова клітина → яйце страуса → тканина" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To nie jest kolejność od najmniejszego. Zacznij od komórki nerwowej.",
              ua: "Це не порядок від найменшого. Почни з нервової клітини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Układ nie stoi przed komórką. Jajo strusia nie jest poziomem między komórką a tkanką.",
              ua: "Система не стоїть перед клітиною. Яйце страуса не є рівнем між клітиною і тканиною."
            }
          }
        ],
        explanation: {
          pl: "Komórka → tkanka → narząd (mózgowie) → układ → organizm.",
          ua: "Клітина → тканина → орган (головний мозок) → система → організм."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Kształt i funkcja", ua: "Перевірка 5. Форма і функція" },
      task: {
        id: "l05-t5",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe zdania.",
          ua: "Познач усі правдиві речення."
        },
        options: [
          { id: "a", label: { pl: "Kształt komórki zwierzęcej zależy od jej funkcji.", ua: "Форма тваринної клітини залежить від її функції." } },
          { id: "b", label: { pl: "Plemnik ma wić do ruchu. Komórka nerwowa ma wypustki do przekazywania informacji.", ua: "Сперматозоїд має джгутик для руху. Нервова клітина має відростки для передачі інформації." } },
          { id: "c", label: { pl: "Komórka nabłonka ma kształt kostki i pomaga tworzyć warstwę ochronną.", ua: "Клітина епітелію має форму кубика і допомагає утворювати захисний шар." } },
          { id: "d", label: { pl: "Wszystkie komórki zwierzęce muszą mieć kształt wici.", ua: "Усі тваринні клітини мусять мати форму джгутика." } }
        ],
        answer: ["a", "b", "c"],
        mistakes: [
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Zdanie D jest fałszywe. Wić ma plemnik, nie każda komórka.",
              ua: "Речення D хибне. Джгутик має сперматозоїд, не кожна клітина."
            }
          },
          {
            answer: "d",
            feedback: {
              pl: "To jedyne fałszywe zdanie. Nabłonek jest kostką, komórka jajowa kulą, nerwowa ma wypustki.",
              ua: "Це єдине хибне речення. Епітелій — кубик, яйцеклітина — куля, нервова має відростки."
            }
          },
          {
            answer: "a,b",
            feedback: {
              pl: "A i B są prawdziwe. Brakuje C: nabłonek ma kształt kostki i tworzy warstwę ochronną.",
              ua: "A і B правдиві. Бракує C: епітелій має форму кубика і утворює захисний шар."
            }
          },
          {
            answer: "a,c",
            feedback: {
              pl: "A i C są prawdziwe. Brakuje B: wić służy do ruchu, wypustki — do przekazywania informacji.",
              ua: "A і C правдиві. Бракує B: джгутик служить для руху, відростки — для передачі інформації."
            }
          },
          {
            answer: "b,c",
            feedback: {
              pl: "B i C są prawdziwe. Brakuje A: kształt zależy od funkcji.",
              ua: "B і C правдиві. Бракує A: форма залежить від функції."
            }
          }
        ],
        explanation: {
          pl: "Prawdziwe są A, B i C. Nie każda komórka ma wić.",
          ua: "Правдиві A, B і C. Не кожна клітина має джгутик."
        }
      }
    },

    {
      type: "summary",
      heading: { pl: "Mini-notatka", ua: "Мініконспект" },
      visual: vizGh("l05-poziomy.png", {
        alt: { pl: "Pięć poziomów budowy", ua: "П’ять рівнів будови" },
        title: { pl: "Komórka → tkanka → narząd → układ → organizm.", ua: "Клітина → тканина → орган → система → організм." },
        prompt: { pl: "Ten sam schemat pięciu poziomów z przykładami układu nerwowego." }
      }),
      text: {
        pl: [
          "Komórka to najmniejsza część zdolna do czynności życiowych. Dlatego jest podstawową jednostką życia.",
          "Jednokomórkowe: jedna komórka, na przykład bakterie. Wielokomórkowe: zwierzęta, rośliny, grzyby.",
          "Bakterie są zwykle najmniejsze. Komórka jajowa strusia jest największą znaną komórką zwierzęcą. Jajo ma około 15 cm i jest około trzy razy większe niż jajo kury.",
          "Komórka → tkanka → narząd → układ narządów → organizm. U roślin liść jest narządem.",
          "Kształt służy funkcji: wić — ruch, kula komórki jajowej — zapas, wypustki — informacja, kostka nabłonka — ochrona."
        ],
        ua: [
          "Клітина — найменша частина, здатна до життєвих функцій. Тому вона є основною одиницею життя.",
          "Одноклітинні: одна клітина, наприклад бактерії. Багатоклітинні: тварини, рослини, гриби.",
          "Бактерії зазвичай найменші. Яйцеклітина страуса — найбільша відома тваринна клітина. Яйце має близько 15 см і приблизно втричі більше за яйце курки.",
          "Клітина → тканина → орган → система органів → організм. У рослин листок є органом.",
          "Форма служить функції: джгутик — рух, куля яйцеклітини — запас, відростки — інформація, кубик епітелію — захист."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem, a co powtórzyć", ua: "Що вже вмію, а що повторити" },
      items: [
        { pl: "Umiem powiedzieć, że mała komórka też pobiera substancje, oddycha i rośnie.", ua: "Вмію сказати, що мала клітина теж бере речовини, дихає і росте." },
        { pl: "Bakterię kładę po stronie jednokomórkowych, a psa, drzewo i grzyba — po stronie wielokomórkowych.", ua: "Бактерію кладу до одноклітинних, а пса, дерево і гриб — до багатоклітинних." },
        { pl: "Nie zamieniam jaja kury ze strusim: strusie jest około trzy razy większe.", ua: "Не міняю яйце курки зі страусовим: страусине приблизно втричі більше." },
        { pl: "Poziomy zaczynam od komórki. Liść u rośliny to narząd, nie komórka.", ua: "Рівні починаю з клітини. Листок у рослини — орган, не клітина." },
        { pl: "Wić, wypustki i kostka nabłonka mają różne prace. Nie każda komórka ma wić.", ua: "Джгутик, відростки і кубик епітелію мають різну роботу. Не кожна клітина має джгутик." }
      ]
    }
  ]
};
