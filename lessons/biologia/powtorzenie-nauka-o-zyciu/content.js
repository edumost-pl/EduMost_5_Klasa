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
      heading: { pl: "Misja: rozumiem dział I", ua: "Місія: я розумію розділ I" },
      text: {
        pl: [
          "To powtórzenie działu I: Biologia — nauka o życiu. Nie nowy temat i nie długi konspekt.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi, podobny do szkolnego. Błąd pokazuje, który krok warto jeszcze powtórzyć."
        ],
        ua: [
          "Це повторення розділу I: Біологія — наука про життя. Не нова тема і не довгий конспект.",
          "У кожній частині один і той самий порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок, схожа на шкільну. Помилка показує, який крок ще варто повторити."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "organizm", ua: "організм — жива істота" },
        { pl: "budowa komórkowa", ua: "клітинна будова" },
        { pl: "czynności życiowe", ua: "життєві функції" },
        { pl: "zbędny", ua: "непотрібний" },
        { pl: "wydalanie", ua: "виділення — виведення непотрібного" },
        { pl: "obserwacja", ua: "спостереження — дивимося, нічого навмисно не змінюємо" },
        { pl: "doświadczenie", ua: "дослід — навмисно змінюємо один чинник" },
        { pl: "próba badawcza", ua: "дослідна проба — тут є досліджуваний чинник" },
        { pl: "próba kontrolna", ua: "контрольна проба — без цього чинника, для порівняння" },
        { pl: "problem badawczy", ua: "дослідницька проблема — запитання" },
        { pl: "hipoteza", ua: "гіпотеза — припущення, можлива відповідь" },
        { pl: "wniosek", ua: "висновок — відповідь на основі результатів" },
        { pl: "powiększenie", ua: "збільшення = окуляр × об’єктив" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Organizm", ua: "Поняття. Організм" },
      text: {
        pl: [
          [em("Biologia"), " bada budowę organizmów, ich czynności życiowe oraz zależności między organizmami a środowiskiem."],
          [em("Organizm"), " to istota żywa: człowiek, pies, drzewo, grzyb."],
          "Od rzeczy nieożywionych odróżniają go dwie cechy: budowa komórkowa i wykonywanie czynności życiowych.",
          "Kolor, wielkość i ciężar o tym nie decydują. Kamień może być ciężki, a nie jest organizmem.",
          "Mikrobiologia bada drobnoustroje — zwykle ogląda się je pod mikroskopem. Zoologia bada zwierzęta, botanika — rośliny."
        ],
        ua: [
          [em("Біологія"), " досліджує будову організмів, їхні життєві функції та зв’язки організмів із середовищем."],
          [em("Організм"), " — жива істота: людина, собака, дерево, гриб."],
          "Від неживих речей його відрізняють дві ознаки: клітинна будова і виконання життєвих функцій.",
          "Колір, розмір і вага цього не вирішують. Камінь може бути важким, але він не організм.",
          "Мікробіологія досліджує мікроорганізми — зазвичай їх розглядають під мікроскопом. Зоологія — тварин, ботаніка — рослини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pies i ławka", ua: "Приклад. Пес і лавка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pies jest zbudowany z komórek. Ławka nie."],
            ua: ["Пес складається з клітин. Лавка — ні."]
          }
        },
        {
          text: {
            pl: ["Pies je, oddycha, rośnie i reaguje. To czynności życiowe. Ławka ich nie wykonuje."],
            ua: ["Пес їсть, дихає, росте і реагує. Це життєві функції. Лавка їх не виконує."]
          }
        },
        {
          text: {
            pl: ["Wniosek: pies jest organizmem. Ławka nie jest, choć stoi w parku obok psa."],
            ua: ["Висновок: пес — організм. Лавка — ні, хоча стоїть у парку поруч із псом."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwie cechy", ua: "Коротке питання. Дві ознаки" },
      task: {
        id: "bio-rep-g1",
        type: "single-choice",
        question: {
          pl: "Co odróżnia organizm od rzeczy nieożywionej?",
          ua: "Що відрізняє організм від неживої речі?"
        },
        options: [
          { id: "a", label: { pl: "Budowa komórkowa i czynności życiowe", ua: "Клітинна будова і життєві функції" } },
          { id: "b", label: { pl: "Kolor i wielkość", ua: "Колір і розмір" } },
          { id: "c", label: { pl: "To, czy rzecz jest ciężka", ua: "Чи є річ важкою" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj psa i ławkę. Szukaj cech życia, nie wyglądu.",
          ua: "Порівняй пса і лавку. Шукай ознаки життя, не вигляд."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kolor i wielkość mają też rzeczy nieożywione. Wróć do dwóch cech psa, których nie ma ławka.",
              ua: "Колір і розмір бувають і в неживих речей. Повернись до двох ознак пса, яких немає в лавки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kamień bywa cięższy od ptaka, a nie jest organizmem. Ciężar nie jest cechą życia.",
              ua: "Камінь буває важчим за птаха, але він не організм. Вага — не ознака життя."
            }
          }
        ],
        explanation: {
          pl: "Organizm ma budowę komórkową i wykonuje czynności życiowe.",
          ua: "Організм має клітинну будову і виконує життєві функції."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Sam ruch", ua: "Типова помилка. Сам лише рух" },
      claim: {
        pl: "„Rower jest organizmem, bo się porusza.”",
        ua: "«Велосипед — організм, бо він рухається.»"
      },
      text: {
        pl: [
          "Ruch jest jedną z czynności życiowych, ale sam nie wystarcza.",
          "Rower nie ma budowy komórkowej i nie wykonuje pozostałych czynności życiowych. Dlatego nie jest organizmem."
        ],
        ua: [
          "Рух — одна з життєвих функцій, але самого руху замало.",
          "Велосипед не має клітинної будови і не виконує інших життєвих функцій. Тому він не організм."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Grzyb czy kamień?", ua: "Сам. Гриб чи камінь?" },
      task: {
        id: "bio-rep-p1",
        type: "single-choice",
        question: {
          pl: "Który obiekt jest organizmem?",
          ua: "Який об’єкт є організмом?"
        },
        options: [
          { id: "a", label: { pl: "Kamień", ua: "Камінь" } },
          { id: "b", label: { pl: "Grzyb", ua: "Гриб" } },
          { id: "c", label: { pl: "Ławka", ua: "Лавка" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Kamień nie składa się z komórek i nie wykonuje czynności życiowych. Szukaj istoty żywej.",
              ua: "Камінь не складається з клітин і не виконує життєвих функцій. Шукай живу істоту."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ławka jest rzeczą. Organizm żyje: ma komórki i czynności życiowe.",
              ua: "Лавка — річ. Організм живе: має клітини і життєві функції."
            }
          }
        ],
        explanation: {
          pl: "Grzyb jest organizmem. Kamień i ławka nie.",
          ua: "Гриб — організм. Камінь і лавка — ні."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Zbędne substancje", ua: "Поняття. Непотрібні речовини" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Siedem nazw. Dziś rozróżniamy trzy z nich.", ua: "Сім назв. Сьогодні розрізняємо три з них." },
        prompt: { pl: "Istniejąca infografika lekcji 1: siedem czynności życiowych z polskimi etykietami." }
      }),
      text: {
        pl: [
          [em("Czynności życiowe"), ": odżywianie się, oddychanie, wydalanie, ruch, reakcja na bodźce, rozmnażanie się, wzrost i rozwój."],
          "Dziś nie mieszamy trzech podobnych nazw.",
          [em("Odżywianie się"), " — organizm pobiera składniki pokarmowe."],
          [em("Oddychanie"), " — w komórkach uwalnia się energia potrzebna do życia. To nie tylko wdech i wydech."],
          [em("Zbędne substancje"), " to substancje, których organizm już nie potrzebuje. ", em("Wydalanie"), " oznacza ich usuwanie."]
        ],
        ua: [
          [em("Життєві функції"), ": живлення, дихання, виділення, рух, реакція на подразники, розмноження, ріст і розвиток."],
          "Сьогодні не плутаємо три схожі назви.",
          [em("Живлення"), " — організм бере поживні речовини."],
          [em("Дихання"), " — у клітинах вивільняється енергія, потрібна для життя. Це не лише вдих і видих."],
          [em("Непотрібні речовини"), " — речовини, яких організм уже не потребує. ", em("Виділення"), " — їхнє виведення."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Obiad, energia, pot", ua: "Приклад. Обід, енергія, піт" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Człowiek je obiad. Pobiera składniki pokarmowe. To odżywianie się."],
            ua: ["Людина їсть обід. Бере поживні речовини. Це живлення."]
          }
        },
        {
          text: {
            pl: ["W komórkach uwalnia się energia potrzebna do życia. To oddychanie, nie tylko ruch klatki piersiowej."],
            ua: ["У клітинах вивільняється енергія, потрібна для життя. Це дихання, не лише рух грудної клітки."]
          }
        },
        {
          text: {
            pl: ["Pot i mocz usuwają to, czego organizm już nie potrzebuje. To wydalanie zbędnych substancji."],
            ua: ["Піт і сеча виводять те, чого організм уже не потребує. Це виділення непотрібних речовин."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Słowo „zbędny”", ua: "Коротке питання. Слово «zbędny»" },
      task: {
        id: "bio-rep-g2",
        type: "single-choice",
        question: {
          pl: "Co oznacza słowo „zbędny” w wyrażeniu „zbędne substancje”?",
          ua: "Що означає слово «zbędny» у вислові «zbędne substancje»?"
        },
        options: [
          { id: "a", label: { pl: "Niepotrzebny", ua: "Непотрібний" } },
          { id: "b", label: { pl: "Bardzo duży", ua: "Дуже великий" } },
          { id: "c", label: { pl: "Niezwykle ważny", ua: "Надзвичайно важливий" } }
        ],
        answer: "a",
        hint: {
          pl: "To słowo mówi, czy organizm jeszcze tego potrzebuje.",
          ua: "Це слово каже, чи організм іще цього потребує."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„Zbędny” nie mówi o rozmiarze. Sprawdź, czy substancja jest organizmowi potrzebna.",
              ua: "«Zbędny» не про розмір. Перевір, чи потрібна речовина організму."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ważny znaczy potrzebny. Zbędny znaczy odwrotnie: organizm już tego nie potrzebuje.",
              ua: "Важливий означає потрібний. Zbędny — навпаки: організм уже цього не потребує."
            }
          }
        ],
        explanation: {
          pl: "Zbędny = niepotrzebny. Wydalanie usuwa takie substancje.",
          ua: "Zbędny = непотрібний. Виділення виводить такі речовини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wydalanie i oddychanie", ua: "Типова помилка. Виділення і дихання" },
      claim: {
        pl: "„Wydalanie i oddychanie to to samo, bo oba są czynnościami życiowymi.”",
        ua: "«Виділення і дихання — це те саме, бо обидва є життєвими функціями.»"
      },
      text: {
        pl: [
          "Oba należą do czynności życiowych, ale znaczą co innego.",
          "Oddychanie uwalnia energię potrzebną do życia. Wydalanie usuwa zbędne i szkodliwe substancje.",
          "Odżywianie się też jest osobno: to pobieranie składników pokarmowych, nie ich usuwanie."
        ],
        ua: [
          "Обидва належать до життєвих функцій, але означають різне.",
          "Дихання вивільняє енергію, потрібну для життя. Виділення виводить непотрібні і шкідливі речовини.",
          "Живлення теж окремо: це отримання поживних речовин, не їхнє виведення."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Który opis to wydalanie?", ua: "Сам. Який опис — це виділення?" },
      task: {
        id: "bio-rep-p2",
        type: "single-choice",
        question: {
          pl: "Który opis oznacza wydalanie?",
          ua: "Який опис означає виділення?"
        },
        options: [
          { id: "a", label: { pl: "Pobieranie składników pokarmowych", ua: "Отримання поживних речовин" } },
          { id: "b", label: { pl: "Usuwanie szkodliwych i niepotrzebnych substancji", ua: "Виведення шкідливих і непотрібних речовин" } },
          { id: "c", label: { pl: "Zwiększanie rozmiarów i masy ciała", ua: "Збільшення розмірів і маси тіла" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Pobieranie składników to odżywianie się. Wydalanie idzie w drugą stronę: coś opuszcza organizm.",
              ua: "Отримання речовин — це живлення. Виділення в інший бік: щось виходить з організму."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wzrost rozmiarów i masy to wzrost, osobna czynność. Wydalanie usuwa to, co zbędne.",
              ua: "Збільшення розмірів і маси — це ріст, окрема функція. Виділення виводить зайве."
            }
          }
        ],
        explanation: {
          pl: "Wydalanie = usuwanie szkodliwych i niepotrzebnych substancji.",
          ua: "Виділення = виведення шкідливих і непотрібних речовин."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Od komórki do organizmu", ua: "Поняття. Від клітини до організму" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-poziomy-budowy.png", {
        alt: { pl: "Poziomy budowy organizmu", ua: "Рівні будови організму" },
        title: { pl: "Komórka → tkanka → narząd → układ → organizm.", ua: "Клітина → тканина → орган → система → організм." },
        prompt: { pl: "Istniejący schemat lekcji 1: komórka, tkanka, narząd, układ narządów, organizm." }
      }),
      text: {
        pl: [
          [em("Komórka"), " — najmniejsza podstawowa część budowy organizmu."],
          [em("Tkanka"), " — grupa podobnych komórek, które robią to samo zadanie."],
          [em("Narząd"), " — część zbudowana z tkanek, na przykład serce. U roślin mówi się też organ, na przykład liść."],
          [em("Układ narządów"), " — narządy, które współpracują, na przykład układ nerwowy."],
          "Kolejność od najmniejszego: komórka → tkanka → narząd → układ narządów → organizm."
        ],
        ua: [
          [em("Клітина"), " — найменша основна частина будови організму."],
          [em("Тканина"), " — група подібних клітин, які виконують одне завдання."],
          [em("Орган"), " — частина з тканин, наприклад серце. У рослин теж кажуть орган, наприклад листок."],
          [em("Система органів"), " — органи, які працюють разом, наприклад нервова система."],
          "Порядок від найменшого: клітина → тканина → орган → система органів → організм."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Komórka nerwowa", ua: "Приклад. Нервова клітина" },
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
            pl: ["Wiele takich komórek tworzy tkankę nerwową."],
            ua: ["Багато таких клітин утворюють нервову тканину."]
          }
        },
        {
          text: {
            pl: ["Mózgowie jest narządem. Razem z innymi narządami wchodzi w układ nerwowy. Całość to organizm."],
            ua: ["Головний мозок — орган. Разом з іншими органами він входить у нервову систему. Усе разом — організм."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co jest mniejsze?", ua: "Коротке питання. Що менше?" },
      task: {
        id: "bio-rep-g3",
        type: "single-choice",
        question: {
          pl: "Co jest mniejsze: komórka czy tkanka?",
          ua: "Що менше: клітина чи тканина?"
        },
        options: [
          { id: "a", label: { pl: "Komórka", ua: "Клітина" } },
          { id: "b", label: { pl: "Tkanka", ua: "Тканина" } },
          { id: "c", label: { pl: "Są tego samego rozmiaru", ua: "Вони одного розміру" } }
        ],
        answer: "a",
        hint: {
          pl: "Tkanka jest grupą komórek. Grupa jest większa od jednej części.",
          ua: "Тканина — це група клітин. Група більша за одну частину."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tkanka składa się z wielu komórek, więc jest wyżej i jest większa. Szukaj pojedynczej części.",
              ua: "Тканина складається з багатьох клітин, тому вона вище і більша. Шукай окрему частину."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To nie ten sam poziom. Komórki łączą się w tkankę, więc komórka jest mniejsza.",
              ua: "Це не один рівень. Клітини з’єднуються в тканину, тому клітина менша."
            }
          }
        ],
        explanation: {
          pl: "Komórka jest mniejsza. Tkanka to grupa podobnych komórek.",
          ua: "Клітина менша. Тканина — група подібних клітин."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Od końca", ua: "Типова помилка. З кінця" },
      claim: {
        pl: "„Uczymy się budowy od organizmu do komórki, bo organizm jest pierwszy.”",
        ua: "«Будову вчимо від організму до клітини, бо організм перший.»"
      },
      text: {
        pl: [
          "Na sprawdzianie kolejność jest od najmniejszego.",
          "Komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm.",
          "Organizm jest na końcu tej listy, nie na początku."
        ],
        ua: [
          "На контрольній порядок — від найменшого.",
          "Нервова клітина → нервова тканина → головний мозок → нервова система → організм.",
          "Організм у кінці цього списку, не на початку."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Serce", ua: "Сам. Серце" },
      task: {
        id: "bio-rep-p3",
        type: "single-choice",
        question: {
          pl: "Ułóż od najmniejszego: serce, komórka mięśniowa, tkanka mięśniowa, układ krwionośny, organizm. Która kolejność jest poprawna?",
          ua: "Упорядкуй від найменшого: серце, м’язова клітина, м’язова тканина, кровоносна система, організм. Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "serce → komórka mięśniowa → organizm → tkanka mięśniowa → układ krwionośny", ua: "серце → м’язова клітина → організм → м’язова тканина → кровоносна система" } },
          { id: "b", label: { pl: "komórka mięśniowa → tkanka mięśniowa → serce → układ krwionośny → organizm", ua: "м’язова клітина → м’язова тканина → серце → кровоносна система → організм" } },
          { id: "c", label: { pl: "organizm → układ krwionośny → serce → tkanka mięśniowa → komórka mięśniowa", ua: "організм → кровоносна система → серце → м’язова тканина → м’язова клітина" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Serce jest narządem, więc nie może być przed komórką. Zacznij od najmniejszej części.",
              ua: "Серце — орган, тому не може бути перед клітиною. Почни з найменшої частини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To kolejność od największego. Pytanie prosi o start od komórki.",
              ua: "Це порядок від найбільшого. Питання просить почати з клітини."
            }
          }
        ],
        explanation: {
          pl: "Komórka → tkanka → narząd (serce) → układ → organizm.",
          ua: "Клітина → тканина → орган (серце) → система → організм."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Obserwacja czy doświadczenie?", ua: "Поняття. Спостереження чи дослід?" },
      text: {
        pl: [
          [em("Obserwacja"), " — uważnie patrzymy i opisujemy. Niczego celowo nie zmieniamy."],
          [em("Doświadczenie"), " — celowo zmieniamy jeden czynnik i sprawdzamy, co z tego wynika."],
          [em("Czynnik"), " to coś, co może wpływać na wynik: woda, światło, temperatura."],
          "W jednym doświadczeniu zmieniamy tylko jeden czynnik. Inaczej nie wiadomo, co wpłynęło na wynik."
        ],
        ua: [
          [em("Спостереження"), " — уважно дивимося й описуємо. Навмисно нічого не змінюємо."],
          [em("Дослід"), " — навмисно змінюємо один чинник і перевіряємо, що з цього вийшло."],
          [em("Чинник"), " — те, що може впливати на результат: вода, світло, температура."],
          "В одному досліді змінюємо лише один чинник. Інакше невідомо, що вплинуло на результат."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Sikorka i pelargonia", ua: "Приклад. Синиця і пеларгонія" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Małgosia patrzy, jak sikorka karmi pisklęta. Nic nie zmienia. To obserwacja."],
            ua: ["Малгося дивиться, як синиця годує пташенят. Нічого не змінює. Це спостереження."]
          }
        },
        {
          text: {
            pl: ["Tomek sprawdza, czy światło wpływa na wzrost pelargonii. Celowo zmienia jeden czynnik: światło."],
            ua: ["Томек перевіряє, чи світло впливає на ріст пеларгонії. Навмисно змінює один чинник: світло."]
          }
        },
        {
          text: {
            pl: ["To doświadczenie. Samo patrzenie na roślinę bez zmiany warunków byłoby obserwacją."],
            ua: ["Це дослід. Саме лише дивлення на рослину без зміни умов було б спостереженням."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co robi Tomek?", ua: "Коротке питання. Що робить Томек?" },
      task: {
        id: "bio-rep-g4",
        type: "single-choice",
        question: {
          pl: "Tomek zmienia ilość światła dla dwóch podobnych roślin i porównuje ich wzrost. Co wykonuje?",
          ua: "Томек змінює кількість світла для двох схожих рослин і порівнює їхній ріст. Що він виконує?"
        },
        options: [
          { id: "a", label: { pl: "Obserwację, bo tylko patrzy", ua: "Спостереження, бо лише дивиться" } },
          { id: "b", label: { pl: "Doświadczenie, bo celowo zmienia czynnik", ua: "Дослід, бо навмисно змінює чинник" } },
          { id: "c", label: { pl: "Wniosek", ua: "Висновок" } }
        ],
        answer: "b",
        hint: {
          pl: "Zapytaj: czy ktoś celowo coś zmienił?",
          ua: "Запитай себе: чи хтось навмисно щось змінив?"
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Tomek nie tylko patrzy. Zmienia światło. Obserwacja jest wtedy, gdy warunków nie zmieniamy.",
              ua: "Томек не лише дивиться. Він змінює світло. Спостереження — коли умови не змінюємо."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wniosek to odpowiedź po wynikach. Tomek dopiero sprawdza wpływ światła, więc wykonuje doświadczenie.",
              ua: "Висновок — відповідь після результатів. Томек ще перевіряє вплив світла, отже виконує дослід."
            }
          }
        ],
        explanation: {
          pl: "Celowa zmiana jednego czynnika to doświadczenie.",
          ua: "Навмисна зміна одного чинника — це дослід."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie próby", ua: "Поняття. Дві проби" },
      text: {
        pl: [
          "W doświadczeniu potrzebne są dwa zestawy.",
          [em("Próba badawcza"), " dostaje badany czynnik. Tu sprawdzamy jego wpływ."],
          [em("Próba kontrolna"), " tego czynnika nie dostaje. Służy do porównania."],
          "Reszta warunków ma być taka sama: miejsce, temperatura, rodzaj nasion."
        ],
        ua: [
          "У досліді потрібні два набори.",
          [em("Дослідна проба"), " отримує досліджуваний чинник. Тут перевіряємо його вплив."],
          [em("Контрольна проба"), " цього чинника не отримує. Вона для порівняння."],
          "Решта умов має бути однаковою: місце, температура, вид насіння."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Nasiona i woda", ua: "Приклад. Насіння і вода" },
      visual: vizGh("L02_Jak_poznawac_biologie", "l02-proby-banany.png", {
        alt: { pl: "Próba badawcza i próba kontrolna", ua: "Дослідна і контрольна проби" },
        title: { pl: "Jedna zmiana. Reszta warunków taka sama.", ua: "Одна зміна. Решта умов однакові." },
        prompt: { pl: "Istniejące zdjęcie lekcji 2: dwie miski — próba badawcza i kontrolna." }
      }),
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pytanie: czy nasiona potrzebują wody do kiełkowania? Badany czynnik to woda."],
            ua: ["Питання: чи потрібна насінню вода для проростання? Досліджуваний чинник — вода."]
          }
        },
        {
          text: {
            pl: ["Miska z wodą to próba badawcza. Tu czynnik jest."],
            ua: ["Миска з водою — дослідна проба. Тут чинник є."]
          }
        },
        {
          text: {
            pl: ["Miska bez wody, w tym samym miejscu i temperaturze, to próba kontrolna."],
            ua: ["Миска без води, у тому самому місці і за тієї самої температури, — контрольна проба."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która próba?", ua: "Коротке питання. Яка проба?" },
      task: {
        id: "bio-rep-g5",
        type: "single-choice",
        question: {
          pl: "Badamy wpływ wody na kiełkowanie. Które nasiona są w próbie kontrolnej?",
          ua: "Досліджуємо вплив води на проростання. Яке насіння в контрольній пробі?"
        },
        options: [
          { id: "a", label: { pl: "Nasiona podlewane wodą", ua: "Насіння, яке поливають" } },
          { id: "b", label: { pl: "Nasiona bez wody, w tych samych pozostałych warunkach", ua: "Насіння без води, за тих самих інших умов" } },
          { id: "c", label: { pl: "Nasiona w innym miejscu i w innej temperaturze", ua: "Насіння в іншому місці і за іншої температури" } }
        ],
        answer: "b",
        hint: {
          pl: "Kontrolna próba nie dostaje badanego czynnika. Reszta zostaje taka sama.",
          ua: "Контрольна проба не отримує досліджуваного чинника. Решта лишається тією самою."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Podlewane nasiona dostają wodę, czyli badany czynnik. To próba badawcza, nie kontrolna.",
              ua: "Полите насіння отримує воду — досліджуваний чинник. Це дослідна проба, не контрольна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tu zmieniono miejsce i temperaturę, nie tylko wodę. W kontroli reszta warunków ma być taka sama.",
              ua: "Тут змінили місце і температуру, не лише воду. У контролі решта умов має бути однаковою."
            }
          }
        ],
        explanation: {
          pl: "Próba kontrolna jest bez badanego czynnika. Tu bez wody.",
          ua: "Контрольна проба — без досліджуваного чинника. Тут без води."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Nazwy prób", ua: "Типова помилка. Назви проб" },
      claim: {
        pl: "„Próba badawcza to zestaw, w którym nie zmieniamy żadnego czynnika.”",
        ua: "«Дослідна проба — це набір, у якому не змінюємо жодного чинника.»"
      },
      text: {
        pl: [
          "To zdanie opisuje próbę kontrolną, nie badawczą.",
          "W próbie badawczej badany czynnik jest. W kontrolnej go nie ma, a pozostałe warunki są takie same."
        ],
        ua: [
          "Це речення описує контрольну пробу, не дослідну.",
          "У дослідній пробі досліджуваний чинник є. У контрольній його немає, а інші умови однакові."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Fasola", ua: "Сам. Квасоля" },
      task: {
        id: "bio-rep-p4",
        type: "single-choice",
        question: {
          pl: "Magda sprawdza wpływ wody na kiełkowanie fasoli. Grupa A dostaje wodę. Grupa B nie. Światło i temperatura są takie same. Która grupa jest próbą badawczą?",
          ua: "Магда перевіряє вплив води на проростання квасолі. Група A отримує воду. Група B — ні. Світло і температура однакові. Яка група є дослідною пробою?"
        },
        options: [
          { id: "a", label: { pl: "Grupa A, bo dostaje badany czynnik — wodę", ua: "Група A, бо отримує досліджуваний чинник — воду" } },
          { id: "b", label: { pl: "Grupa B, bo nie dostaje wody", ua: "Група B, бо не отримує води" } },
          { id: "c", label: { pl: "Żadna, bo Magda tylko patrzy", ua: "Жодна, бо Магда лише дивиться" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Grupa bez wody to próba kontrolna. Badawcza jest tam, gdzie czynnik — woda — jest.",
              ua: "Група без води — контрольна проба. Дослідна там, де чинник — вода — є."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Magda celowo różnicuje wodę. To doświadczenie, a grupa z wodą jest próbą badawczą.",
              ua: "Магда навмисно змінює воду. Це дослід, а група з водою — дослідна проба."
            }
          }
        ],
        explanation: {
          pl: "Próba badawcza dostaje badany czynnik. Tu jest to grupa A.",
          ua: "Дослідна проба отримує досліджуваний чинник. Тут це група A."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pytanie, hipoteza, wniosek", ua: "Поняття. Питання, гіпотеза, висновок" },
      text: {
        pl: [
          "Te trzy słowa są podobne. Rozdziel je po roli, nie po długości zdania.",
          [em("Problem badawczy"), " — pytanie, na które szukamy odpowiedzi."],
          [em("Hipoteza"), " — przypuszczenie, czyli możliwa odpowiedź. Da się ją sprawdzić."],
          [em("Wniosek"), " — odpowiedź po wynikach. Nie zgadujemy od nowa."],
          "Kolejność: obserwacja → problem badawczy → hipoteza → doświadczenie → analiza wyników → wniosek."
        ],
        ua: [
          "Ці три слова схожі. Розділяй їх за роллю, не за довжиною речення.",
          [em("Дослідницька проблема"), " — запитання, на яке шукаємо відповідь."],
          [em("Гіпотеза"), " — припущення, можлива відповідь. Її можна перевірити."],
          [em("Висновок"), " — відповідь після результатів. Не вгадуємо наново."],
          "Порядок: спостереження → дослідницька проблема → гіпотеза → дослід → аналіз результатів → висновок."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy zdania o nasionach", ua: "Приклад. Три речення про насіння" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["„Czy nasiona potrzebują wody do kiełkowania?” To pytanie. Problem badawczy."],
            ua: ["«Чи потрібна насінню вода для проростання?» Це запитання. Дослідницька проблема."]
          }
        },
        {
          text: {
            pl: ["„Myślę, że nasiona potrzebują wody.” To przypuszczenie. Hipoteza."],
            ua: ["«Я думаю, що насінню потрібна вода.» Це припущення. Гіпотеза."]
          }
        },
        {
          text: {
            pl: ["Po kilku dniach nasiona z wodą wykiełkowały, a bez wody nie. Stąd wniosek: woda była potrzebna. Wynik to opis tego, co zaszło. Wniosek z niego wynika."],
            ua: ["Через кілька днів насіння з водою проросло, а без води — ні. Звідси висновок: вода була потрібна. Результат — опис того, що сталося. Висновок із нього випливає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które zdanie?", ua: "Коротке питання. Яке речення?" },
      task: {
        id: "bio-rep-g6",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest hipotezą?",
          ua: "Яке речення є гіпотезою?"
        },
        options: [
          { id: "a", label: { pl: "Czy nasiona potrzebują wody do kiełkowania?", ua: "Чи потрібна насінню вода для проростання?" } },
          { id: "b", label: { pl: "Myślę, że nasiona potrzebują wody do kiełkowania.", ua: "Я думаю, що насінню потрібна вода для проростання." } },
          { id: "c", label: { pl: "Po kilku dniach nasiona z wodą wykiełkowały.", ua: "Через кілька днів насіння з водою проросло." } }
        ],
        answer: "b",
        hint: {
          pl: "Hipoteza jest przypuszczeniem. Pytanie ma znak zapytania. Wynik opisuje to, co już zaszło.",
          ua: "Гіпотеза — це припущення. Питання має знак питання. Результат описує те, що вже сталося."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "To pytanie. Pytanie jest problemem badawczym. Hipoteza odpowiada na nie przypuszczeniem.",
              ua: "Це запитання. Запитання — дослідницька проблема. Гіпотеза відповідає на нього припущенням."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To opis wyniku, nie przypuszczenie przed doświadczeniem. Hipoteza mówi „myślę, że…”.",
              ua: "Це опис результату, не припущення перед дослідом. Гіпотеза каже «я думаю, що…»."
            }
          }
        ],
        explanation: {
          pl: "„Myślę, że…” to hipoteza. Pytanie to problem badawczy. Opis tego, co zaszło, to wynik.",
          ua: "«Я думаю, що…» — гіпотеза. Запитання — дослідницька проблема. Опис того, що сталося, — результат."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Znak zapytania", ua: "Типова помилка. Знак питання" },
      claim: {
        pl: "„Hipoteza to każde zdanie ze znakiem zapytania.”",
        ua: "«Гіпотеза — це кожне речення зі знаком питання.»"
      },
      text: {
        pl: [
          "Znak zapytania robi z zdania problem badawczy, nie hipotezę.",
          "Hipoteza jest zdaniem oznajmującym: przypuszczamy, jaka będzie odpowiedź.",
          "Wniosek też jest zdaniem oznajmującym, ale powstaje dopiero po wynikach."
        ],
        ua: [
          "Знак питання робить речення дослідницькою проблемою, не гіпотезою.",
          "Гіпотеза — розповідне речення: ми припускаємо, якою буде відповідь.",
          "Висновок теж розповідне речення, але він з’являється лише після результатів."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pelargonia", ua: "Сам. Пеларгонія" },
      task: {
        id: "bio-rep-p5",
        type: "single-choice",
        question: {
          pl: "Tomek bada światło i pelargonie. Które zdanie jest hipotezą?",
          ua: "Томек досліджує світло і пеларгонії. Яке речення є гіпотезою?"
        },
        options: [
          { id: "a", label: { pl: "Czy światło wpływa na wzrost pelargonii?", ua: "Чи впливає світло на ріст пеларгонії?" } },
          { id: "b", label: { pl: "Pelargonie na świetle urosły wyższe.", ua: "Пеларгонії на світлі виросли вищими." } },
          { id: "c", label: { pl: "Przypuszczam, że światło pomaga pelargoniom rosnąć.", ua: "Я припускаю, що світло допомагає пеларгоніям рости." } }
        ],
        answer: "c",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "To pytanie, czyli problem badawczy. Hipoteza nie kończy się znakiem zapytania.",
              ua: "Це запитання, тобто дослідницька проблема. Гіпотеза не закінчується знаком питання."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "To już wynik: opis tego, co zaszło. Hipoteza jest przypuszczeniem przed tym opisem.",
              ua: "Це вже результат: опис того, що сталося. Гіпотеза — припущення перед цим описом."
            }
          }
        ],
        explanation: {
          pl: "„Przypuszczam, że…” to hipoteza o pelargoniach.",
          ua: "«Я припускаю, що…» — гіпотеза про пеларгонії."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Mikroskop", ua: "Поняття. Мікроскоп" },
      visual: vizGh("L03_Obserwacje_mikroskopowe", "l03-powiekszenie.png", {
        alt: { pl: "Powiększenie okularu razy powiększenie obiektywu", ua: "Збільшення окуляра помножити на збільшення об’єктива" },
        title: { pl: "Okular × obiektyw = powiększenie obrazu.", ua: "Окуляр × об’єктив = збільшення зображення." },
        prompt: { pl: "Istniejąca plansza lekcji 3: wzór powiększenia mikroskopu." }
      }),
      text: {
        pl: [
          "Mikroskop optyczny pokazuje bardzo małe obiekty, na przykład komórki. Powiększa do około tysiąca razy.",
          [em("Okular"), " — część, przez którą patrzysz. ", em("Obiektyw"), " — soczewka przy preparacie."],
          [em("Rewolwer"), " — obracana część. Dzięki niej zmieniasz obiektyw."],
          "Śruba makrometryczna ustawia ostrość wstępnie, mikrometryczna — dokładnie. Zaczynasz od najmniejszego powiększenia.",
          "Powiększenie obrazu = powiększenie okularu × powiększenie obiektywu. To mnożenie, nie dodawanie."
        ],
        ua: [
          "Оптичний мікроскоп показує дуже маленькі об’єкти, наприклад клітини. Збільшує приблизно до тисячі разів.",
          [em("Окуляр"), " — частина, через яку дивишся. ", em("Об’єктив"), " — лінза біля препарату."],
          [em("Револьвер"), " — частина, що обертається. Нею змінюєш об’єктив."],
          "Макрометричний гвинт налаштовує різкість спочатку, мікрометричний — точно. Починаєш із найменшого збільшення.",
          "Збільшення зображення = збільшення окуляра × збільшення об’єктива. Це множення, не додавання."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. 10 i 40", ua: "Приклад. 10 і 40" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Okular powiększa 10 razy. Obiektyw powiększa 40 razy."],
            ua: ["Окуляр збільшує у 10 разів. Об’єктив збільшує у 40 разів."]
          }
        },
        {
          text: {
            pl: ["Nie dodajemy: 10 + 40 = 50. To częsty błąd. Nie odejmujemy: 40 − 10 = 30."],
            ua: ["Не додаємо: 10 + 40 = 50. Це часта помилка. Не віднімаємо: 40 − 10 = 30."]
          }
        },
        {
          text: {
            pl: ["Mnożymy: 10 × 40 = 400. Obraz jest powiększony 400 razy."],
            ua: ["Множимо: 10 × 40 = 400. Зображення збільшене у 400 разів."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. 10 × 40", ua: "Коротке питання. 10 × 40" },
      task: {
        id: "bio-rep-g7",
        type: "single-choice",
        question: {
          pl: "Okular powiększa 10 razy, obiektyw 40 razy. Jakie jest powiększenie obrazu?",
          ua: "Окуляр збільшує у 10 разів, об’єктив у 40. Яке збільшення зображення?"
        },
        options: [
          { id: "a", label: { pl: "50 razy", ua: "У 50 разів" } },
          { id: "b", label: { pl: "400 razy", ua: "У 400 разів" } },
          { id: "c", label: { pl: "30 razy", ua: "У 30 разів" } }
        ],
        answer: "b",
        hint: {
          pl: "Wzór ma znak razy, nie plus.",
          ua: "У формулі знак множення, не плюс."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "50 to suma 10 + 40. Powiększeń nie dodajemy. Wróć do znaku ×.",
              ua: "50 — це сума 10 + 40. Збільшення не додаємо. Повернись до знака ×."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "30 to różnica 40 − 10. We wzorze jest mnożenie.",
              ua: "30 — це різниця 40 − 10. У формулі множення."
            }
          }
        ],
        explanation: {
          pl: "10 × 40 = 400.",
          ua: "10 × 40 = 400."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Dodawanie", ua: "Типова помилка. Додавання" },
      claim: {
        pl: "„Okular 10 i obiektyw 40 dają powiększenie 50, bo 10 + 40 = 50.”",
        ua: "«Окуляр 10 і об’єктив 40 дають збільшення 50, бо 10 + 40 = 50.»"
      },
      text: {
        pl: [
          "Rachunek 10 + 40 jest poprawny jako dodawanie, ale do mikroskopu nie pasuje.",
          "Powiększenie obrazu liczymy mnożeniem: 10 × 40 = 400."
        ],
        ua: [
          "Рахунок 10 + 40 правильний як додавання, але до мікроскопа не підходить.",
          "Збільшення зображення рахуємо множенням: 10 × 40 = 400."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. 5 i 20", ua: "Сам. 5 і 20" },
      task: {
        id: "bio-rep-p6",
        type: "single-choice",
        question: {
          pl: "Okular powiększa 5 razy, obiektyw 20 razy. Jakie jest powiększenie obrazu?",
          ua: "Окуляр збільшує у 5 разів, об’єктив у 20. Яке збільшення зображення?"
        },
        options: [
          { id: "a", label: { pl: "25 razy", ua: "У 25 разів" } },
          { id: "b", label: { pl: "100 razy", ua: "У 100 разів" } },
          { id: "c", label: { pl: "15 razy", ua: "У 15 разів" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "25 to 5 + 20. Znowu dodawanie. Potrzebny jest iloczyn.",
              ua: "25 — це 5 + 20. Знову додавання. Потрібен добуток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "15 to 20 − 5. Odejmowanie tu nie działa. Pomnóż obie liczby.",
              ua: "15 — це 20 − 5. Віднімання тут не працює. Перемнож обидва числа."
            }
          }
        ],
        explanation: {
          pl: "5 × 20 = 100.",
          ua: "5 × 20 = 100."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Osiem pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdzić. Potem możesz spróbować jeszcze raz."
        ],
        ua: [
          "Вісім питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок перевірити. Потім можна спробувати ще раз."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Dwie cechy", ua: "Перевірка 1. Дві ознаки" },
      task: {
        id: "bio-rep-t1",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz dwie cechy, dzięki którym organizmy odróżnisz od nieożywionych elementów przyrody.",
          ua: "Познач дві ознаки, за якими організми відрізниш від неживих елементів природи."
        },
        options: [
          { id: "a", label: { pl: "budowa komórkowa", ua: "клітинна будова" } },
          { id: "b", label: { pl: "wykonywanie czynności życiowych", ua: "виконання життєвих функцій" } },
          { id: "c", label: { pl: "ładny kolor", ua: "гарний колір" } },
          { id: "d", label: { pl: "twardość jak u kamienia", ua: "твердість як у каменя" } }
        ],
        answer: ["a", "b"],
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Budowa komórkowa to jedna cecha. Została jeszcze druga: czynności życiowe.",
              ua: "Клітинна будова — одна ознака. Лишилася друга: життєві функції."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Czynności życiowe to jedna cecha. Zaznacz też budowę komórkową.",
              ua: "Життєві функції — одна ознака. Познач ще клітинну будову."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor nie odróżnia organizmu. Szukaj budowy i czynności życia.",
              ua: "Колір не відрізняє організм. Шукай будову і життєві функції."
            }
          },
          {
            answer: "d",
            feedback: {
              pl: "Twardość ma też kamień. To nie cecha organizmu.",
              ua: "Твердість є і в каменя. Це не ознака організму."
            }
          },
          {
            answer: "a,b,c",
            feedback: {
              pl: "Kolor jest zbędny na tej liście. Zostaw tylko dwie cechy życia.",
              ua: "Колір у цьому списку зайвий. Залиш лише дві ознаки життя."
            }
          },
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Za dużo. Organizmu nie poznajesz po kolorze ani po twardości.",
              ua: "Забагато. Організм не впізнаєш за кольором чи твердістю."
            }
          }
        ],
        explanation: {
          pl: "Organizmy mają budowę komórkową i wykonują czynności życiowe.",
          ua: "Організми мають клітинну будову і виконують життєві функції."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Trzy czynności", ua: "Перевірка 2. Три функції" },
      task: {
        id: "bio-rep-t2",
        type: "single-choice",
        question: {
          pl: "Które połączenie jest w całości poprawne?",
          ua: "Яке поєднання повністю правильне?"
        },
        options: [
          { id: "a", label: { pl: "odżywianie się — usuwanie zbędnych substancji; oddychanie — wzrost ciała; wydalanie — składniki pokarmowe", ua: "живлення — виведення непотрібних речовин; дихання — ріст тіла; виділення — поживні речовини" } },
          { id: "b", label: { pl: "odżywianie się — dostarczanie składników pokarmowych; oddychanie — uwalnianie energii potrzebnej do życia; wydalanie — usuwanie szkodliwych i niepotrzebnych substancji", ua: "живлення — постачання поживних речовин; дихання — вивільнення енергії, потрібної для життя; виділення — виведення шкідливих і непотрібних речовин" } },
          { id: "c", label: { pl: "wszystkie trzy czynności oznaczają to samo co wzrost", ua: "усі три функції означають те саме, що ріст" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Nazwy są zamienione. Odżywianie dostarcza, wydalanie usuwa, oddychanie uwalnia energię. Wzrost to osobna czynność.",
              ua: "Назви переплутані. Живлення постачає, виділення виводить, дихання вивільняє енергію. Ріст — окрема функція."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wzrost to zwiększanie rozmiarów i masy. Nie zastępuje odżywiania, oddychania ani wydalania.",
              ua: "Ріст — збільшення розмірів і маси. Він не замінює живлення, дихання і виділення."
            }
          }
        ],
        explanation: {
          pl: "Odżywianie dostarcza, oddychanie uwalnia energię, wydalanie usuwa zbędne substancje.",
          ua: "Живлення постачає, дихання вивільняє енергію, виділення виводить непотрібне."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Poziomy budowy", ua: "Перевірка 3. Рівні будови" },
      task: {
        id: "bio-rep-t3",
        type: "single-choice",
        question: {
          pl: "Uporządkuj od najmniejszego: komórka nerwowa, tkanka nerwowa, mózgowie, układ nerwowy, organizm. Która kolejność jest poprawna?",
          ua: "Упорядкуй від найменшого: нервова клітина, нервова тканина, головний мозок, нервова система, організм. Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "organizm → mózgowie → komórka nerwowa → tkanka nerwowa → układ nerwowy", ua: "організм → головний мозок → нервова клітина → нервова тканина → нервова система" } },
          { id: "b", label: { pl: "komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm", ua: "нервова клітина → нервова тканина → головний мозок → нервова система → організм" } },
          { id: "c", label: { pl: "tkanka nerwowa → organizm → komórka nerwowa → układ nerwowy → mózgowie", ua: "нервова тканина → організм → нервова клітина → нервова система → головний мозок" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Organizm nie jest najmniejszy. Zacznij od komórki nerwowej.",
              ua: "Організм не найменший. Почни з нервової клітини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tkanka nie jest przed komórką. Komórki tworzą tkankę, nie odwrotnie.",
              ua: "Тканина не стоїть перед клітиною. Клітини утворюють тканину, не навпаки."
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
      heading: { pl: "Sprawdzian 4. Dziedzina biologii", ua: "Перевірка 4. Галузь біології" },
      task: {
        id: "bio-rep-t4",
        type: "single-choice",
        question: {
          pl: "Pani Zofia cały dzień ogląda drobnoustroje pod mikroskopem. Jaką dziedziną biologii się zajmuje?",
          ua: "Пані Зофія цілий день розглядає мікроорганізми під мікроскопом. Якою галуззю біології вона займається?"
        },
        options: [
          { id: "a", label: { pl: "zoologia", ua: "зоологія" } },
          { id: "b", label: { pl: "mikrobiologia", ua: "мікробіологія" } },
          { id: "c", label: { pl: "botanika", ua: "ботаніка" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Zoologia bada zwierzęta. Drobnoustroje pod mikroskopem to zakres mikrobiologii.",
              ua: "Зоологія досліджує тварин. Мікроорганізми під мікроскопом — це мікробіологія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Botanika bada rośliny. Tu są drobnoustroje, więc szukaj mikrobiologii.",
              ua: "Ботаніка досліджує рослини. Тут мікроорганізми, отже шукай мікробіологію."
            }
          }
        ],
        explanation: {
          pl: "Mikrobiologia bada drobnoustroje.",
          ua: "Мікробіологія досліджує мікроорганізми."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. O czy D?", ua: "Перевірка 5. С чи Д?" },
      task: {
        id: "bio-rep-t5",
        type: "single-choice",
        question: {
          pl: "Małgosia patrzy, jak sikorka karmi pisklęta. Tomek sprawdza wpływ światła na wzrost pelargonii. Ula ogląda budowę piór. Magda sprawdza wpływ wody na kiełkowanie fasoli. Które oznaczenia są poprawne? O = obserwacja, D = doświadczenie.",
          ua: "Малгося дивиться, як синиця годує пташенят. Томек перевіряє вплив світла на ріст пеларгонії. Уля розглядає будову пір’я. Магда перевіряє вплив води на проростання квасолі. Які позначення правильні? O = спостереження, D = дослід."
        },
        options: [
          { id: "a", label: { pl: "Małgosia O, Tomek D, Ula O, Magda D", ua: "Малгося O, Томек D, Уля O, Магда D" } },
          { id: "b", label: { pl: "wszystko to doświadczenia", ua: "усе це досліди" } },
          { id: "c", label: { pl: "Małgosia D, Tomek O, Ula D, Magda O", ua: "Малгося D, Томек O, Уля D, Магда O" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Doświadczenie jest tylko tam, gdzie ktoś celowo zmienia czynnik. Sikorka i pióra: nikt nic nie zmienia.",
              ua: "Дослід лише там, де хтось навмисно змінює чинник. Синиця і пір’я: ніхто нічого не змінює."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Oznaczenia są odwrotnie. Patrzenie bez zmiany to O. Światło i woda to D.",
              ua: "Позначення навпаки. Дивлення без зміни — це O. Світло і вода — це D."
            }
          }
        ],
        explanation: {
          pl: "Sikorka i pióra: obserwacja. Światło i woda: doświadczenie.",
          ua: "Синиця і пір’я: спостереження. Світло і вода: дослід."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. Metoda naukowa", ua: "Перевірка 6. Науковий метод" },
      task: {
        id: "bio-rep-t6",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe zdania.",
          ua: "Познач усі правдиві речення."
        },
        options: [
          { id: "a", label: { pl: "Hipoteza jest jedną z możliwych odpowiedzi na pytanie, które stanowi problem badawczy.", ua: "Гіпотеза — одна з можливих відповідей на питання, яке є дослідницькою проблемою." } },
          { id: "b", label: { pl: "Próba badawcza to zestaw, w którym nie zmienia się żadnego czynnika.", ua: "Дослідна проба — набір, у якому не змінюють жодного чинника." } },
          { id: "c", label: { pl: "Podczas doświadczenia sprawdzana jest hipoteza.", ua: "Під час досліду перевіряють гіпотезу." } },
          { id: "d", label: { pl: "Wynik doświadczenia pozwala potwierdzić albo odrzucić hipotezę.", ua: "Результат досліду дозволяє підтвердити або відхилити гіпотезу." } }
        ],
        answer: ["a", "c", "d"],
        mistakes: [
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Zdanie B jest fałszywe. Opisuje próbę kontrolną. W badawczej czynnik się zmienia.",
              ua: "Речення B хибне. Воно описує контрольну пробу. У дослідній чинник змінюється."
            }
          },
          {
            answer: "a,b,c",
            feedback: {
              pl: "B nie pasuje: to definicja próby kontrolnej. Sprawdź też, czy nie pominąłeś zdania o wyniku.",
              ua: "B не підходить: це визначення контрольної проби. Перевір також, чи не пропустив речення про результат."
            }
          },
          {
            answer: "a,b,d",
            feedback: {
              pl: "B jest o próbie kontrolnej, nie badawczej. Zdanie C o sprawdzaniu hipotezy jest prawdziwe.",
              ua: "B — про контрольну пробу, не дослідну. Речення C про перевірку гіпотези правдиве."
            }
          },
          {
            answer: "b,c,d",
            feedback: {
              pl: "Wyrzuć B. Zdanie A o hipotezie jest prawdziwe i też powinno być zaznaczone.",
              ua: "Прибери B. Речення A про гіпотезу правдиве і теж має бути позначене."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "To jedyne fałszywe zdanie. Próba bez zmiany czynnika jest kontrolna.",
              ua: "Це єдине хибне речення. Проба без зміни чинника — контрольна."
            }
          },
          {
            answer: "a,c",
            feedback: {
              pl: "A i C są prawdziwe. Brakuje jeszcze zdania D: wynik pozwala potwierdzić albo odrzucić hipotezę.",
              ua: "A і C правдиві. Бракує ще речення D: результат дозволяє підтвердити або відхилити гіпотезу."
            }
          },
          {
            answer: "a,d",
            feedback: {
              pl: "A i D są prawdziwe. Brakuje C: podczas doświadczenia sprawdzamy hipotezę.",
              ua: "A і D правдиві. Бракує C: під час досліду перевіряємо гіпотезу."
            }
          },
          {
            answer: "c,d",
            feedback: {
              pl: "C i D są prawdziwe. Brakuje A: hipoteza jest możliwą odpowiedzią na problem badawczy.",
              ua: "C і D правдиві. Бракує A: гіпотеза — можлива відповідь на дослідницьку проблему."
            }
          }
        ],
        explanation: {
          pl: "Prawdziwe są A, C i D. Zdanie B opisuje próbę kontrolną.",
          ua: "Правдиві A, C і D. Речення B описує контрольну пробу."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 7. Powiększenie", ua: "Перевірка 7. Збільшення" },
      task: {
        id: "bio-rep-t7",
        type: "single-choice",
        question: {
          pl: "Okular powiększa 10 razy, obiektyw 20 razy. Jakie powiększenie obrazu uzyskasz?",
          ua: "Окуляр збільшує у 10 разів, об’єктив у 20. Яке збільшення зображення отримаєш?"
        },
        options: [
          { id: "a", label: { pl: "30 razy", ua: "У 30 разів" } },
          { id: "b", label: { pl: "200 razy", ua: "У 200 разів" } },
          { id: "c", label: { pl: "10 razy", ua: "У 10 разів" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "30 to suma 10 + 20. Powiększenie liczymy mnożeniem.",
              ua: "30 — це сума 10 + 20. Збільшення рахуємо множенням."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "10 to samo powiększenie okularu. Obiektyw też wchodzi do iloczynu.",
              ua: "10 — це лише збільшення окуляра. Об’єктив теж входить у добуток."
            }
          }
        ],
        explanation: {
          pl: "10 × 20 = 200.",
          ua: "10 × 20 = 200."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 8. Część mikroskopu", ua: "Перевірка 8. Частина мікроскопа" },
      task: {
        id: "bio-rep-t8",
        type: "single-choice",
        question: {
          pl: "Która część mikroskopu pozwala zmieniać obiektywy?",
          ua: "Яка частина мікроскопа дозволяє змінювати об’єктиви?"
        },
        options: [
          { id: "a", label: { pl: "Okular", ua: "Окуляр" } },
          { id: "b", label: { pl: "Rewolwer", ua: "Револьвер" } },
          { id: "c", label: { pl: "Stolik", ua: "Столик" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Przez okular patrzysz. Obiektywy zmieniasz, obracając rewolwer.",
              ua: "Через окуляр дивишся. Об’єктиви змінюєш, обертаючи револьвер."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na stoliku leży preparat. Obiektywy zmienia rewolwer.",
              ua: "На столику лежить препарат. Об’єктиви змінює револьвер."
            }
          }
        ],
        explanation: {
          pl: "Rewolwer się obraca i pozwala wybrać inny obiektyw.",
          ua: "Револьвер обертається і дозволяє вибрати інший об’єктив."
        }
      }
    },

    {
      type: "summary",
      heading: { pl: "Mini-notatka", ua: "Мініконспект" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-poziomy-budowy.png", {
        alt: { pl: "Poziomy budowy organizmu", ua: "Рівні будови організму" },
        title: { pl: "Dział I w krótkich zdaniach.", ua: "Розділ I короткими реченнями." },
        prompt: { pl: "Istniejący schemat lekcji 1: poziomy budowy organizmu." }
      }),
      text: {
        pl: [
          "Organizm: budowa komórkowa i czynności życiowe. Sam ruch, kolor albo ciężar nie wystarczają.",
          "Odżywianie dostarcza składniki. Oddychanie uwalnia energię. Wydalanie usuwa zbędne substancje. Zbędny = niepotrzebny.",
          "Komórka → tkanka → narząd → układ narządów → organizm.",
          "Obserwacja: nic celowo nie zmieniamy. Doświadczenie: jeden czynnik.",
          "Próba badawcza ma badany czynnik. Próba kontrolna go nie ma. Reszta warunków jest taka sama.",
          "Problem badawczy = pytanie. Hipoteza = przypuszczenie. Wniosek = odpowiedź z wyników.",
          "Rewolwer zmienia obiektyw. Powiększenie = okular × obiektyw."
        ],
        ua: [
          "Організм: клітинна будова і життєві функції. Самого руху, кольору чи ваги замало.",
          "Живлення постачає речовини. Дихання вивільняє енергію. Виділення виводить непотрібне. Zbędny = непотрібний.",
          "Клітина → тканина → орган → система органів → організм.",
          "Спостереження: навмисно нічого не змінюємо. Дослід: один чинник.",
          "Дослідна проба має досліджуваний чинник. Контрольна його не має. Решта умов однакова.",
          "Дослідницька проблема = запитання. Гіпотеза = припущення. Висновок = відповідь з результатів.",
          "Револьвер змінює об’єктив. Збільшення = окуляр × об’єктив."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem, a co powtórzyć", ua: "Що вже вмію, а що повторити" },
      items: [
        { pl: "Umiem powiedzieć, że zbędny znaczy niepotrzebny, i nie mylę wydalania z oddychaniem.", ua: "Вмію сказати, що zbędny означає непотрібний, і не плутаю виділення з диханням." },
        { pl: "Umiem ułożyć poziomy od komórki do organizmu na nowym przykładzie, nie tylko na komórce nerwowej.", ua: "Вмію скласти рівні від клітини до організму на новому прикладі, не лише на нервовій клітині." },
        { pl: "Odróżniam obserwację od doświadczenia po jednym pytaniu: czy ktoś celowo zmienił czynnik?", ua: "Відрізняю спостереження від досліду одним питанням: чи хтось навмисно змінив чинник?" },
        { pl: "W próbie badawczej jest badany czynnik, w kontrolnej go nie ma.", ua: "У дослідній пробі досліджуваний чинник є, у контрольній його немає." },
        { pl: "Pytanie, „myślę, że…” i opis wyniku to trzy różne rzeczy.", ua: "Запитання, «я думаю, що…» і опис результату — три різні речі." },
        { pl: "Powiększenie mnożę. Jeśli dodałem liczby, wracam do znaku ×.", ua: "Збільшення множу. Якщо додав числа, повертаюся до знака ×." },
        { pl: "Jeśli któryś sprawdzian był trudny, wróć do lekcji 1, 2 albo 3 — nie do całego działu naraz.", ua: "Якщо якась перевірка була важкою, повернись до уроку 1, 2 або 3 — не до всього розділу відразу." }
      ]
    }
  ]
};
