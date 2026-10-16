function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L29_Okrytonasienne/images/";

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
      heading: { pl: "Misja: nasiono w owocu", ua: "Місія: насінина в плоді" },
      visual: vizGh("l29-zacznijmy.png", {
        alt: { pl: "Łąka z kwiatami i jabłoń z jabłkami", ua: "Лука з квітками і яблуня з яблуками" },
        title: { pl: "Nasiono schowane w owocu.", ua: "Насінина схована в плоді." },
        prompt: { pl: "Plansza lekcji 29: łąka i jabłoń." }
      }),
      text: {
        pl: [
          "To lekcja 29. Nagie nasiona na łusce i cztery drzewa iglaste znasz z lekcji 27 i 28. Dziś grupa, u której nasiono leży w owocu i która ma kwiaty.",
          "Części kwiatu są na lekcji 30. Jak nasiona podróżują — na lekcji 31. Nazwy drzew liściastych — na lekcji 33.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 29. Голе насіння на лусці і чотири хвойні дерева знаєш з уроків 27 і 28. Сьогодні група, у якої насінина лежить у плоді і яка має квітки.",
          "Частини квітки є на уроці 30. Як насіння подорожує — на уроці 31. Назви листяних дерев — на уроці 33.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "okrytonasienne", ua: "покритонасінні — насіння в плоді, не на лусці" },
        { pl: "owoc", ua: "плід — вкриває насіння" },
        { pl: "strąk i ziarniak", ua: "стручок і зернівка — теж плоди" },
        { pl: "kwiat", ua: "квітка є; частини — урок 30" },
        { pl: "drzewo / krzew", ua: "дерево — один стовбур; кущ — кілька пагонів від землі" },
        { pl: "roślina zielna", ua: "трав’яниста — пагін не дерев’яніє як стовбур" },
        { pl: "liścień", ua: "сім’ядоля — перший листок у насінині" },
        { pl: "jednoliścienne", ua: "однодольні — одна сім’ядоля, часто паралельні жилки" },
        { pl: "dwuliścienne", ua: "дводольні — дві сім’ядолі, часто сітка жилок" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Okryte nasiono", ua: "Поняття. Покрита насінина" },
      visual: vizGh("l29-owoc.png", {
        alt: { pl: "Przekrój jabłka z nasionami i łuska szyszki z nagim nasionem", ua: "Переріз яблука з насінням і луска шишки з голим насінням" },
        title: { pl: "Owoc okrywa. Łuska zostawia nasiono nagie.", ua: "Плід вкриває. Луска лишає насінину голою." },
        prompt: { pl: "Plansza lekcji 29: owoc i łuska." }
      }),
      text: {
        pl: [
          ["", em("Rośliny okrytonasienne"), " wytwarzają ", em("owoce"), ". Nasiono leży w środku. Owoc je osłania — stąd słowo „okryte”."],
          "Jabłko, śliwka, strąk grochu i ziarniak pszenicy wyglądają różnie. Każde z nich jest owocem: nasiono nie leży nago.",
          "Na łusce szyszki nasiono leży nago. To nagonasienne z lekcji 27. Szyszkojagoda jałowca też nie jest jabłkiem."
        ],
        ua: [
          ["", em("Покритонасінні рослини"), " виробляють ", em("плоди"), ". Насінина лежить усередині. Плід її вкриває — звідси слово «покриті»."],
          "Яблуко, слива, стручок гороху і зернівка пшениці виглядають по-різному. Кожне з них є плодом: насінина не лежить голою.",
          "На лусці шишки насінина лежить голою. Це голонасінні з уроку 27. Шишкоягода ялівцю теж не є яблуком."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy owoce", ua: "Приклад. Три плоди" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Przekrój jabłka: nasiona siedzą w środku. Miąższ je okrywa."],
            ua: ["Переріз яблука: насіння сидить усередині. М’якоть його вкриває."]
          }
        },
        {
          text: {
            pl: ["Strąk grochu też trzyma nasiona w środku. Ziarniak pszenicy jest małym owocem."],
            ua: ["Стручок гороху теж тримає насіння всередині. Зернівка пшениці є малим плодом."]
          }
        },
        {
          text: {
            pl: ["Na łusce szyszki nasiono leży bez osłony owocu."],
            ua: ["На лусці шишки насінина лежить без покриву плоду."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co znaczy okryte", ua: "Коротке питання. Що означає покрите" },
      task: {
        id: "l29-g1",
        type: "single-choice",
        question: {
          pl: "Co znaczy, że nasiona okrytonasiennych są okryte?",
          ua: "Що означає, що насіння покритонасінних покрите?"
        },
        options: [
          { id: "a", label: { pl: "leżą w owocu, nie nago na łusce szyszki", ua: "лежать у плоді, не голо на лусці шишки" } },
          { id: "b", label: { pl: "to zarodniki w puszce mchu", ua: "це спори в коробочці моху" } },
          { id: "c", label: { pl: "to igły sosny", ua: "це хвоя сосни" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj nasiona w środku owocu.",
          ua: "Шукай насінину всередині плоду."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka z zarodnikami należy do mchu. Okryte nasiono leży w owocu, nie na łusce szyszki.",
              ua: "Коробочка зі спорами належить моху. Покрита насінина лежить у плоді, не на лусці шишки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igła jest liściem sosny. Okryte nasiono leży w owocu. Na łusce szyszki nasiono jest nagie.",
              ua: "Хвоя є листком сосни. Покрита насінина лежить у плоді. На лусці шишки насінина є голою."
            }
          }
        ],
        explanation: {
          pl: "Okryte nasiono leży w owocu. Na łusce szyszki leży nago.",
          ua: "Покрита насінина лежить у плоді. На лусці шишки лежить голою."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szyszka-owoc", ua: "Типова помилка. Шишка-плід" },
      claim: {
        pl: "„W szyszce jest nasiono, więc szyszka jest owocem jak jabłko.”",
        ua: "«У шишці є насінина, тож шишка є плодом, як яблуко.»"
      },
      text: {
        pl: [
          "Samo nasiono nie robi z łuski owocu.",
          "Owoc osłania nasiono. Na łusce leży ono nago. Szyszkojagoda jałowca też nie jest jabłkiem."
        ],
        ua: [
          "Сама насінина не робить із луски плід.",
          "Плід вкриває насінину. На лусці вона лежить голою. Шишкоягода ялівцю теж не є яблуком."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Mały ziarniak", ua: "Сам. Мала зернівка" },
      task: {
        id: "l29-p1",
        type: "single-choice",
        question: {
          pl: "Ziarniak pszenicy jest mały i suchy. Uczeń mówi, że to nagie nasiono z łuski, bo nie wygląda jak jabłko. Co poprawić?",
          ua: "Зернівка пшениці мала і суха. Учень каже, що це гола насінина з луски, бо вона не схожа на яблуко. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "ziarniak jest owocem: nasiono jest okryte, choć owoc jest mały; nagie nasiono leży na łusce szyszki", ua: "зернівка є плодом: насінина покрита, хоч плід малий; гола насінина лежить на лусці шишки" } },
          { id: "b", label: { pl: "tak — owocem jest tylko duże soczyste jabłko", ua: "так — плодом є лише велике соковите яблуко" } },
          { id: "c", label: { pl: "tak — ziarniak pszenicy jest igłą sosny", ua: "так — зернівка пшениці є хвоєю сосни" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owoc nie musi być duży i soczysty. Ziarniak pszenicy okrywa nasiono. Nagie nasiono leży na łusce szyszki.",
              ua: "Плід не мусить бути великим і соковитим. Зернівка пшениці вкриває насінину. Гола насінина лежить на лусці шишки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igła jest liściem sosny. Ziarniak jest małym owocem pszenicy. Nasiono w nim jest okryte.",
              ua: "Хвоя є листком сосни. Зернівка є малим плодом пшениці. Насінина в ній покрита."
            }
          }
        ],
        explanation: {
          pl: "Ziarniak jest owocem. Nasiono jest okryte, choć owoc jest mały.",
          ua: "Зернівка є плодом. Насінина покрита, хоч плід малий."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kwiat bez części", ua: "Поняття. Квітка без частин" },
      visual: vizGh("l29-kwiat.png", {
        alt: { pl: "Barwny kwiat bez podpisanych części", ua: "Барвиста квітка без підписаних частин" },
        title: { pl: "Kwiat jest. Części — lekcja 30.", ua: "Квітка є. Частини — урок 30." },
        prompt: { pl: "Plansza lekcji 29: kwiat." }
      }),
      text: {
        pl: [
          ["Okrytonasienne mają ", em("kwiaty"), ". Z kwiatu po zapyleniu powstaje owoc z nasionami."],
          "Pyłek niosą owady albo wiatr, jak u zbóż. Kto go niesie i z jakich części składa się kwiat — lekcja 30.",
          "Dziś nie nazywasz płatków, pręcików ani słupka. Kwiatu nie bierz za szyszkę ani za kłos skrzypa."
        ],
        ua: [
          ["Покритонасінні мають ", em("квітки"), ". З квітки після запилення виникає плід із насінням."],
          "Пилок несуть комахи або вітер, як у злаків. Хто його несе і з яких частин складається квітка — урок 30.",
          "Сьогодні не називаєш пелюсток, тичинок і маточки. Квітку не бери за шишку і не бери за колосок хвоща."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kolor na łące", ua: "Приклад. Барва на луці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na łące widać kolorowy kwiat. To cecha okrytonasiennych."],
            ua: ["На луці видно барвисту квітку. Це ознака покритонасінних."]
          }
        },
        {
          text: {
            pl: ["Plansza nie podpisuje części. Zostawiasz je na lekcję 30."],
            ua: ["Дошка не підписує частини. Лишаєш їх на урок 30."]
          }
        },
        {
          text: {
            pl: ["Szyszka i kłos skrzypa nie są tym kwiatem."],
            ua: ["Шишка і колосок хвоща не є цією квіткою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co dziś o kwiecie", ua: "Коротке питання. Що сьогодні про квітку" },
      task: {
        id: "l29-g2",
        type: "single-choice",
        question: {
          pl: "Co powiesz o kwiecie na tej lekcji?",
          ua: "Що скажеш про квітку на цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "okrytonasienne mają kwiaty; części kwiatu poznasz na lekcji 30", ua: "покритонасінні мають квітки; частини квітки пізнаєш на уроці 30" } },
          { id: "b", label: { pl: "dziś rozbieramy pręcik i słupek", ua: "сьогодні розбираємо тичинку і маточку" } },
          { id: "c", label: { pl: "kwiat to szyszka sosny", ua: "квітка — це шишка сосни" } }
        ],
        answer: "a",
        hint: {
          pl: "Kwiat jest. Części są na następnej lekcji.",
          ua: "Квітка є. Частини є на наступному уроці."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pręcika i słupka dziś nie rozbierasz. Okrytonasienne mają kwiaty. Części poznasz na lekcji 30.",
              ua: "Тичинку і маточку сьогодні не розбираєш. Покритонасінні мають квітки. Частини пізнаєш на уроці 30."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka sosny nie jest kwiatem. Kwiat mają okrytonasienne. Jego części są na lekcji 30.",
              ua: "Шишка сосни не є квіткою. Квітку мають покритонасінні. Її частини є на уроці 30."
            }
          }
        ],
        explanation: {
          pl: "Kwiat jest cechą grupy. Części poznasz na lekcji 30.",
          ua: "Квітка є ознакою групи. Частини пізнаєш на уроці 30."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Podpisz pręcik", ua: "Типова помилка. Підпиши тичинку" },
      claim: {
        pl: "„Kwiat jest kolorowy, więc dziś podpisuję pręciki i słupek. Inaczej to szyszka.”",
        ua: "«Квітка барвиста, тож сьогодні підписую тичинки і маточку. Інакше це шишка.»"
      },
      text: {
        pl: [
          "Kolor nie każe rysować części.",
          "Okrytonasienne mają kwiat. Części są na lekcji 30. Szyszka kwiatem nie jest."
        ],
        ua: [
          "Барва не змушує малювати частини.",
          "Покритонасінні мають квітку. Частини є на уроці 30. Шишка квіткою не є."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Żółty mniszek", ua: "Сам. Жовта кульбаба" },
      task: {
        id: "l29-p2",
        type: "single-choice",
        question: {
          pl: "Na trawniku rośnie żółty mniszek. Uczeń mówi, że to szyszka świerka, i od razu podpisuje pręciki. Co poprawić?",
          ua: "На газоні росте жовта кульбаба. Учень каже, що це шишка ялини, і одразу підписує тичинки. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to kwiat okrytonasiennych; części są na lekcji 30; szyszka nie jest kwiatem", ua: "це квітка покритонасінних; частини є на уроці 30; шишка не є квіткою" } },
          { id: "b", label: { pl: "tak — żółta główka zawsze jest szyszką", ua: "так — жовта голівка завжди є шишкою" } },
          { id: "c", label: { pl: "tak — mniszek to kłos skrzypa, więc nie ma nasion w owocu", ua: "так — кульбаба це колосок хвоща, тож не має насіння в плоді" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka należy do nagonasiennych i nie jest kwiatem. Mniszek ma kwiat. Części kwiatu zostawiasz na lekcję 30.",
              ua: "Шишка належить голонасінним і не є квіткою. Кульбаба має квітку. Частини квітки лишаєш на урок 30."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kłos skrzypa znasz z lekcji 26. Mniszek jest okrytonasienny i ma kwiat. Części kwiatu są na lekcji 30.",
              ua: "Колосок хвоща знаєш з уроку 26. Кульбаба є покритонасінною і має квітку. Частини квітки є на уроці 30."
            }
          }
        ],
        explanation: {
          pl: "Mniszek ma kwiat. Części poznasz na lekcji 30. Szyszka nie jest kwiatem.",
          ua: "Кульбаба має квітку. Частини пізнаєш на уроці 30. Шишка не є квіткою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy sylwetki", ua: "Поняття. Три силуети" },
      visual: vizGh("l29-formy.png", {
        alt: { pl: "Drzewo, krzew i roślina zielna", ua: "Дерево, кущ і трав’яниста рослина" },
        title: { pl: "Ta sama grupa. Trzy kształty.", ua: "Та сама група. Три форми." },
        prompt: { pl: "Plansza lekcji 29: drzewo, krzew, zielna." }
      }),
      text: {
        pl: [
          ["", em("Drzewo"), " ma zwykle jeden zdrewniały pień. ", em("Krzew"), " ma kilka zdrewniałych pędów od ziemi."],
          ["", em("Roślina zielna"), " nie buduje pnia jak dąb. Pęd jest miękki albo zimuje w glebie. Tak rosną trawa, tulipan i pokrzywa."],
          "Wszystkie trzy mogą być okrytonasiennymi. Jałowiec bywa krzewem, ale to nagonasienne z lekcji 28."
        ],
        ua: [
          ["", em("Дерево"), " зазвичай має один здерев’янілий стовбур. ", em("Кущ"), " має кілька здерев’янілих пагонів від землі."],
          ["", em("Трав’яниста рослина"), " не будує стовбура як дуб. Пагін м’який або зимує в ґрунті. Так ростуть трава, тюльпан і кропива."],
          "Усі три можуть бути покритонасінними. Ялівець буває кущем, але це голонасінні з уроку 28."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pień, pędy, trawa", ua: "Приклад. Стовбур, пагони, трава" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jabłoń ma jeden zdrewniały pień. To drzewo."],
            ua: ["Яблуня має один здерев’янілий стовбур. Це дерево."]
          }
        },
        {
          text: {
            pl: ["Porzeczka i leszczyna na planszy puszczają kilka zdrewniałych pędów od ziemi. To krzew."],
            ua: ["Смородина і ліщина на дошці пускають кілька здерев’янілих пагонів від землі. Це кущ."]
          }
        },
        {
          text: {
            pl: ["Trawa, tulipan i pokrzywa nie mają takiego pnia. To rośliny zielne."],
            ua: ["Трава, тюльпан і кропива не мають такого стовбура. Це трав’янисті рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kilka pędów", ua: "Коротке питання. Кілька пагонів" },
      task: {
        id: "l29-g3",
        type: "single-choice",
        question: {
          pl: "Czym krzew różni się od drzewa?",
          ua: "Чим кущ відрізняється від дерева?"
        },
        options: [
          { id: "a", label: { pl: "krzew ma kilka zdrewniałych pędów od ziemi; drzewo zwykle jeden pień", ua: "кущ має кілька здерев’янілих пагонів від землі; дерево зазвичай один стовбур" } },
          { id: "b", label: { pl: "krzew nie ma owocu, a drzewo ma tylko szyszki", ua: "кущ не має плоду, а дерево має лише шишки" } },
          { id: "c", label: { pl: "drzewo to mech z chwytnikami", ua: "дерево — це мох із ризоїдами" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz zdrewniałe pędy od ziemi.",
          ua: "Полічи здерев’янілі пагони від землі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "I krzew, i drzewo mogą mieć owoc. Różnica jest w pędzie: kilka zdrewniałych od ziemi albo zwykle jeden pień. Szyszki są u nagonasiennych.",
              ua: "І кущ, і дерево можуть мати плід. Різниця в пагоні: кілька здерев’янілих від землі або зазвичай один стовбур. Шишки є в голонасінних."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chwytniki należą do mchu. Drzewo ma zwykle jeden zdrewniały pień. Krzew ma kilka zdrewniałych pędów od ziemi.",
              ua: "Ризоїди належать моху. Дерево зазвичай має один здерев’янілий стовбур. Кущ має кілька здерев’янілих пагонів від землі."
            }
          }
        ],
        explanation: {
          pl: "Krzew ma kilka zdrewniałych pędów od ziemi. Drzewo ma zwykle jeden pień.",
          ua: "Кущ має кілька здерев’янілих пагонів від землі. Дерево має зазвичай один стовбур."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielona kępa", ua: "Типова помилка. Зелена купина" },
      claim: {
        pl: "„Trawa rośnie w kępie i jest zielona, więc jest krzewem.”",
        ua: "«Трава росте купиною і є зеленою, тож є кущем.»"
      },
      text: {
        pl: [
          "Zielona kępa nie jest zdrewniałym pędem.",
          "Trawa jest rośliną zielną. Krzew ma kilka zdrewniałych pędów od ziemi."
        ],
        ua: [
          "Зелена купина не є здерев’янілим пагоном.",
          "Трава є трав’янистою рослиною. Кущ має кілька здерев’янілих пагонів від землі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Tulipan w doniczce", ua: "Сам. Тюльпан у горщику" },
      task: {
        id: "l29-p3",
        type: "single-choice",
        question: {
          pl: "Tulipan po kwitnieniu traci liście. Pęd nie jest pniem i zimuje w glebie. Uczeń mówi, że to krzew, bo miał kwiat. Co poprawić?",
          ua: "Тюльпан після цвітіння втрачає листки. Пагін не є стовбуром і зимує в ґрунті. Учень каже, що це кущ, бо мав квітку. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "tulipan jest rośliną zielną; kwiat mają też drzewa i krzewy; krzew ma zdrewniałe pędy", ua: "тюльпан є трав’янистою рослиною; квітку мають також дерева і кущі; кущ має здерев’янілі пагони" } },
          { id: "b", label: { pl: "tak — każdy kwiat zamienia roślinę w krzew", ua: "так — кожна квітка перетворює рослину на кущ" } },
          { id: "c", label: { pl: "tak — tulipan ma jeden pień jak dąb", ua: "так — тюльпан має один стовбур як дуб" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kwiat nie wybiera sylwetki. Tulipan jest zielny: pęd nie drewnieje jak pień. Krzew ma kilka zdrewniałych pędów od ziemi.",
              ua: "Квітка не вибирає силует. Тюльпан трав’янистий: пагін не дерев’яніє як стовбур. Кущ має кілька здерев’янілих пагонів від землі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dąb ma jeden zdrewniały pień, więc jest drzewem. Tulipan pnia nie buduje. To roślina zielna.",
              ua: "Дуб має один здерев’янілий стовбур, тож є деревом. Тюльпан стовбура не будує. Це трав’яниста рослина."
            }
          }
        ],
        explanation: {
          pl: "Tulipan jest rośliną zielną. Kwiat nie robi z niego krzewu.",
          ua: "Тюльпан є трав’янистою рослиною. Квітка не робить із нього кущ."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie szufladki", ua: "Поняття. Дві шухлядки" },
      visual: vizGh("l29-jedno-dwu.png", {
        alt: { pl: "Liść z siatką nerwów i liść z nerwami równoległymi", ua: "Листок із сіткою жилок і листок із паралельними жилками" },
        title: { pl: "Dwa liścienie albo jeden.", ua: "Дві сім’ядолі або одна." },
        prompt: { pl: "Plansza lekcji 29: jedno- i dwuliścienne." }
      }),
      text: {
        pl: [
          ["", em("Liścień"), " to pierwszy liść w nasionie. ", em("Dwuliścienne"), " mają dwa: fasola, dąb, jabłoń. ", em("Jednoliścienne"), " mają jeden: trawy, lilia, kukurydza."],
          "Często pomaga unerwienie z lekcji 24: siatka u dwuliściennych, linie równoległe u jednoliściennych. Często korzeń palowy jest u dwuliściennych, a wiązkowy u jednoliściennych — to z lekcji 22.",
          "Listy drzew w parku dziś nie uczysz. To lekcja 33. Tu są tylko dwie szufladki."
        ],
        ua: [
          ["", em("Сім’ядоля"), " — це перший листок у насінині. ", em("Дводольні"), " мають дві: квасоля, дуб, яблуня. ", em("Однодольні"), " мають одну: трави, лілія, кукурудза."],
          "Часто допомагає жилкування з уроку 24: сітка в дводольних, паралельні лінії в однодольних. Часто стрижневий корінь є в дводольних, а мичкуватий в однодольних — це з уроку 22.",
          "Список дерев у парку сьогодні не вчиш. Це урок 33. Тут лише дві шухлядки."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Fasola i trawa", ua: "Приклад. Квасоля і трава" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W nasionie fasoli są dwa liścienie. Liść często ma siatkę nerwów."],
            ua: ["У насінині квасолі є дві сім’ядолі. Листок часто має сітку жилок."]
          }
        },
        {
          text: {
            pl: ["Trawa ma jeden liścień. Liść często ma nerwy równoległe."],
            ua: ["Трава має одну сім’ядолю. Листок часто має паралельні жилки."]
          }
        },
        {
          text: {
            pl: ["Obie są okrytonasienne. Szufladka jest inna."],
            ua: ["Обидві покритонасінні. Шухляда інша."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jeden liścień", ua: "Коротке питання. Одна сім’ядоля" },
      task: {
        id: "l29-g4",
        type: "single-choice",
        question: {
          pl: "Trawa ma jeden liścień i zwykle unerwienie równoległe. Do której szufladki należy?",
          ua: "Трава має одну сім’ядолю і зазвичай паралельне жилкування. До якої шухлядки належить?"
        },
        options: [
          { id: "a", label: { pl: "do jednoliściennych", ua: "до однодольних" } },
          { id: "b", label: { pl: "do dwuliściennych jak fasola", ua: "до дводольних як квасоля" } },
          { id: "c", label: { pl: "do mchów, bo liść jest wąski", ua: "до мохів, бо листок вузький" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz liścienie: jeden albo dwa.",
          ua: "Полічи сім’ядолі: одна або дві."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fasola ma dwa liścienie i często siatkę nerwów. Trawa ma jeden liścień i zwykle unerwienie równoległe. To jednoliścienne.",
              ua: "Квасоля має дві сім’ядолі і часто сітку жилок. Трава має одну сім’ядолю і зазвичай паралельне жилкування. Це однодольні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech nie ma owocu ani liścieni w nasionie. Wąski liść trawy z jednym liścieniem to jednoliścienne.",
              ua: "Мох не має плоду і сім’ядоль у насінині. Вузький листок трави з однією сім’ядолею — це однодольні."
            }
          }
        ],
        explanation: {
          pl: "Jeden liścień i zwykle unerwienie równoległe: to jednoliścienne.",
          ua: "Одна сім’ядоля і зазвичай паралельне жилкування: це однодольні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Oba zielone", ua: "Типова помилка. Обидва зелені" },
      claim: {
        pl: "„Dąb i kukurydza są w jednej szufladce, bo oba są zielone.”",
        ua: "«Дуб і кукурудза в одній шухлядці, бо обидва зелені.»"
      },
      text: {
        pl: [
          "Zielony liść mają obie szufladki.",
          "Dąb ma dwa liścienie i często siatkę. Kukurydza ma jeden liścień i często nerwy równoległe."
        ],
        ua: [
          "Зелений листок мають обидві шухлядки.",
          "Дуб має дві сім’ядолі і часто сітку. Кукурудза має одну сім’ядолю і часто паралельні жилки."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Rozłupana fasola", ua: "Сам. Розколота квасоля" },
      task: {
        id: "l29-p4",
        type: "single-choice",
        question: {
          pl: "Nasiono fasoli rozpada się na dwie grube połówki, a liść ma siatkę nerwów. Uczeń mówi, że to jednoliścienna jak pszenica, bo nasiono da się zjeść. Co poprawić?",
          ua: "Насінина квасолі розпадається на дві товсті половинки, а листок має сітку жилок. Учень каже, що це однодольна як пшениця, бо насінину можна з’їсти. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "dwa liścienie i siatka: dwuliścienna; pszenica ma jeden liścień i zwykle nerwy równoległe", ua: "дві сім’ядолі і сітка: дводольна; пшениця має одну сім’ядолю і зазвичай паралельні жилки" } },
          { id: "b", label: { pl: "tak — jadalne nasiono zawsze ma jeden liścień", ua: "так — їстівна насінина завжди має одну сім’ядолю" } },
          { id: "c", label: { pl: "tak — dwie połówki to chwytniki mchu", ua: "так — дві половинки це ризоїди моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To, że nasiono jest jadalne, nie liczy liścieni. Dwie połówki fasoli to dwa liścienie. Pszenica ma jeden i zwykle unerwienie równoległe.",
              ua: "Те, що насінина їстівна, не рахує сім’ядолі. Дві половинки квасолі — це дві сім’ядолі. Пшениця має одну і зазвичай паралельне жилкування."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chwytniki są u mchu. Dwie grube połówki nasiona fasoli to liścienie. Siatka nerwów pasuje do dwuliściennych.",
              ua: "Ризоїди є в моху. Дві товсті половинки насінини квасолі — це сім’ядолі. Сітка жилок пасує до дводольних."
            }
          }
        ],
        explanation: {
          pl: "Dwa liścienie i siatka nerwów: fasola jest dwuliścienna.",
          ua: "Дві сім’ядолі і сітка жилок: квасоля дводольна."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Łąka, pole, sad", ua: "Поняття. Лука, поле, сад" },
      visual: vizGh("l29-liczba.png", {
        alt: { pl: "Łąka, pole zbóż i sad", ua: "Лука, поле злаків і сад" },
        title: { pl: "Tę grupę widzisz najczęściej.", ua: "Цю групу бачиш найчастіше." },
        prompt: { pl: "Plansza lekcji 29: łąka, pole, sad." }
      }),
      text: {
        pl: [
          ["", em("Okrytonasienne"), " to najliczniejsza grupa roślin lądowych, które widzisz na co dzień: łąka, pole zbóż, sad i warzywnik."],
          "Dają pokarm, tkaniny (len, bawełna), drewno liściaste i ozdoby. Nazw drzew i dokładnego pokarmu nie uczysz dziś — to lekcja 33.",
          "Kiełkowanie nasiona jest na lekcji 32. Mchy i paprocie owocu nie mają, więc nie są tą grupą."
        ],
        ua: [
          ["", em("Покритонасінні"), " — найчисленніша група наземних рослин, які бачиш щодня: лука, поле злаків, сад і город."],
          "Дають поживу, тканини (льон, бавовна), листяну деревину і прикраси. Назви дерев і докладної поживи сьогодні не вчиш — це урок 33.",
          "Проростання насінини є на уроці 32. Мохи і папороті плоду не мають, тож не є цією групою."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy miejsca", ua: "Приклад. Три місця" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na łące stoją rośliny zielne z kwiatami."],
            ua: ["На луці стоять трав’янисті рослини з квітками."]
          }
        },
        {
          text: {
            pl: ["Na polu rosną zboża. To często jednoliścienne."],
            ua: ["На полі ростуть злаки. Це часто однодольні."]
          }
        },
        {
          text: {
            pl: ["W sadzie jabłoń daje owoce. Mech i paproć takiego owocu nie robią."],
            ua: ["У саду яблуня дає плоди. Мох і папороть такого плоду не роблять."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Codziennie", ua: "Коротке питання. Щодня" },
      task: {
        id: "l29-g5",
        type: "single-choice",
        question: {
          pl: "Która grupa wypełnia łąkę, pole zbóż i sad?",
          ua: "Яка група заповнює луку, поле злаків і сад?"
        },
        options: [
          { id: "a", label: { pl: "okrytonasienne", ua: "покритонасінні" } },
          { id: "b", label: { pl: "mchy, bo łąka jest niska i zielona", ua: "мохи, бо лука низька і зелена" } },
          { id: "c", label: { pl: "tylko nagonasienne, bo w sadzie bywa wysokie drzewo", ua: "лише голонасінні, бо в саду буває високе дерево" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj kwiatów i owoców, nie szyszki i nie puszki.",
          ua: "Шукай квітки і плоди, не шишку і не коробочку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie ma owocu. Niska zieleń łąki to często rośliny zielne okrytonasienne. Ta grupa jest najliczniejsza wśród roślin, które widzisz.",
              ua: "Мох не має плоду. Низька зелень луки — це часто трав’янисті покритонасінні. Ця група найчисленніша серед рослин, які бачиш."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wysokie drzewo w sadzie bywa jabłonią: ma kwiat i owoc. Nagonasienne mają nasiona na łusce. Łąkę, pole i sad wypełniają okrytonasienne.",
              ua: "Високе дерево в саду буває яблунею: має квітку і плід. Голонасінні мають насіння на лусці. Луку, поле і сад заповнюють покритонасінні."
            }
          }
        ],
        explanation: {
          pl: "Łąka, pole zbóż i sad to okrytonasienne. To najliczniejsza grupa, którą widzisz.",
          ua: "Лука, поле злаків і сад — це покритонасінні. Це найчисленніша група, яку бачиш."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tkanina ze sklepu", ua: "Типова помилка. Тканина з крамниці" },
      claim: {
        pl: "„Len i bawełna to nie rośliny, tylko tkaniny ze sklepu.”",
        ua: "«Льон і бавовна — це не рослини, лише тканини з крамниці.»"
      },
      text: {
        pl: [
          "Tkanina powstaje z roślin tej grupy.",
          "Len i bawełna są okrytonasienne. Nazw drzew i listy pokarmu uczysz się później."
        ],
        ua: [
          "Тканина виникає з рослин цієї групи.",
          "Льон і бавовна є покритонасінними. Назви дерев і список поживи вчиш пізніше."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Grządka i zboże", ua: "Сам. Грядка і збіжжя" },
      task: {
        id: "l29-p5",
        type: "single-choice",
        question: {
          pl: "Na grządce rosną warzywa, a obok pole pszenicy. Uczeń mówi, że niskie zboże to mech, a jabłoń za płotem to sosna, bo jest wysoka. Co poprawić?",
          ua: "На грядці ростуть овочі, а поруч поле пшениці. Учень каже, що низьке збіжжя — це мох, а яблуня за парканом — це сосна, бо висока. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "warzywa, pszenica i jabłoń są okrytonasienne; mech nie ma owocu, a sosna ma nasiona na łusce", ua: "овочі, пшениця і яблуня є покритонасінними; мох не має плоду, а сосна має насіння на лусці" } },
          { id: "b", label: { pl: "tak — każda niska zieleń jest mchem", ua: "так — кожна низька зелень є мохом" } },
          { id: "c", label: { pl: "tak — każda jabłoń jest sosną, bo ma pień", ua: "так — кожна яблуня є сосною, бо має стовбур" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie ma owocu. Niskie zboże jest okrytonasienne. Warzywa i jabłoń też. To najliczniejsza grupa, którą widzisz.",
              ua: "Мох не має плоду. Низьке збіжжя є покритонасінним. Овочі і яблуня теж. Це найчисленніша група, яку бачиш."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pień nie robi z jabłoni sosny. Jabłoń ma kwiat i owoc. Sosna ma nasiona na łusce. Jabłoń jest okrytonasienna.",
              ua: "Стовбур не робить із яблуні сосну. Яблуня має квітку і плід. Сосна має насіння на лусці. Яблуня покритонасінна."
            }
          }
        ],
        explanation: {
          pl: "Warzywa, pszenica i jabłoń są okrytonasienne. Mech i sosna to inne grupy.",
          ua: "Овочі, пшениця і яблуня є покритонасінними. Мох і сосна — це інші групи."
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
      heading: { pl: "Sprawdzian 1. Strąk", ua: "Перевірка 1. Стручок" },
      task: {
        id: "l29-t1",
        type: "single-choice",
        question: {
          pl: "Na talerzu leży zamknięty strąk grochu. W środku są nasiona. Uczeń mówi, że to łuska sosny, bo nasiono da się wyjąć. Co pasuje do lekcji?",
          ua: "На тарілці лежить закритий стручок гороху. Усередині є насіння. Учень каже, що це луска сосни, бо насінину можна вийняти. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "strąk jest owocem i okrywa nasiona; na łusce szyszki nasiono leży nago", ua: "стручок є плодом і вкриває насіння; на лусці шишки насінина лежить голою" } },
          { id: "b", label: { pl: "tak — każdy strąk jest szyszką", ua: "так — кожен стручок є шишкою" } },
          { id: "c", label: { pl: "tak — groch to zarodnik z kupki paproci", ua: "так — горох це спора з купки папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka trzyma nagie nasiono na łusce. Strąk grochu jest owocem: nasiona są w środku, okryte.",
              ua: "Шишка тримає голу насінину на лусці. Стручок гороху є плодом: насіння всередині, покрите."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodniki paproci są w kupkach na liściu. Groch ma nasiona w strąku. Strąk jest owocem.",
              ua: "Спори папороті є в купках на листку. Горох має насіння в стручку. Стручок є плодом."
            }
          }
        ],
        explanation: {
          pl: "Strąk grochu jest owocem. Nasiona są okryte.",
          ua: "Стручок гороху є плодом. Насіння покрите."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Trzy kulki", ua: "Перевірка 2. Три кульки" },
      task: {
        id: "l29-t2",
        type: "single-choice",
        question: {
          pl: "Na stole leżą śliwka, szyszka świerka i niebieska kulka jałowca. Uczeń mówi, że wszystkie trzy są owocami, bo w każdym jest nasiono. Co pasuje do lekcji?",
          ua: "На столі лежать слива, шишка ялини і синя кулька ялівцю. Учень каже, що всі три є плодами, бо в кожному є насінина. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "śliwka jest owocem; nasiono świerka leży nago na łusce; kulka jałowca jest szyszkojagodą", ua: "слива є плодом; насінина ялини лежить голо на лусці; кулька ялівцю є шишкоягодою" } },
          { id: "b", label: { pl: "tak — każda szyszka jest śliwką", ua: "так — кожна шишка є сливою" } },
          { id: "c", label: { pl: "tak — śliwka jest puszką mchu", ua: "так — слива є коробочкою моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nasiono w szyszce leży nago na łusce. Śliwka okrywa nasiono owocem. Kulka jałowca jest szyszkojagodą, nie śliwką.",
              ua: "Насінина в шишці лежить голо на лусці. Слива вкриває насінину плодом. Кулька ялівцю є шишкоягодою, не сливою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka należy do mchu i ma zarodniki. Śliwka jest owocem. Szyszka i szyszkojagoda nasiona okrywają inaczej: nago albo jako przekształcona szyszka.",
              ua: "Коробочка належить моху і має спори. Слива є плодом. Шишка і шишкоягода вкривають насіння інакше: голо або як видозмінена шишка."
            }
          }
        ],
        explanation: {
          pl: "Śliwka okrywa nasiono. Na łusce świerka nasiono jest nagie. Kulka jałowca nie jest owocem.",
          ua: "Слива вкриває насінину. На лусці ялини насінина гола. Кулька ялівцю не є плодом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Ogród", ua: "Перевірка 3. Сад" },
      task: {
        id: "l29-t3",
        type: "single-choice",
        question: {
          pl: "Jabłoń ma jeden zdrewniały pień. Obok kilka zdrewniałych pędów wyrasta od ziemi. Pokrzywa ma miękki pęd. Uczeń nazywa wszystkie trzy trawą, bo to nie sosny. Co pasuje do lekcji?",
          ua: "Яблуня має один здерев’янілий стовбур. Поруч кілька здерев’янілих пагонів виростає від землі. Кропива має м’який пагін. Учень називає всі три травою, бо це не сосни. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "jabłoń to drzewo, pędy od ziemi to krzew, pokrzywa to roślina zielna", ua: "яблуня — це дерево, пагони від землі — це кущ, кропива — це трав’яниста рослина" } },
          { id: "b", label: { pl: "tak — drzewem jest tylko sosna", ua: "так — деревом є лише сосна" } },
          { id: "c", label: { pl: "tak — miękki pęd pokrzywy jest pniem dębu", ua: "так — м’який пагін кропиви є стовбуром дуба" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sosna jest nagonasienna. Jabłoń ma jeden pień, więc jest drzewem. Kilka zdrewniałych pędów od ziemi to krzew. Miękki pęd pokrzywy to roślina zielna.",
              ua: "Сосна є голонасінною. Яблуня має один стовбур, тож є деревом. Кілька здерев’янілих пагонів від землі — це кущ. М’який пагін кропиви — це трав’яниста рослина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pień dębu jest zdrewniały. Pokrzywa ma miękki pęd, więc jest zielna. Jabłoń jest drzewem, a pędy od ziemi krzewem.",
              ua: "Стовбур дуба здерев’янілий. Кропива має м’який пагін, тож є трав’янистою. Яблуня є деревом, а пагони від землі — кущем."
            }
          }
        ],
        explanation: {
          pl: "Są trzy formy: drzewo, krzew i roślina zielna.",
          ua: "Є три форми: дерево, кущ і трав’яниста рослина."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Pole kukurydzy", ua: "Перевірка 4. Поле кукурудзи" },
      task: {
        id: "l29-t4",
        type: "single-choice",
        question: {
          pl: "W nasionie kukurydzy jest jeden liścień, a liść ma unerwienie równoległe. Uczeń mówi, że to dwuliścienna jak fasola, bo obie rosną na polu. Co pasuje do lekcji?",
          ua: "У насінині кукурудзи є одна сім’ядоля, а листок має паралельне жилкування. Учень каже, що це дводольна як квасоля, бо обидві ростуть на полі. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "jeden liścień i unerwienie równoległe: zwykle jednoliścienna; fasola ma dwa liścienie", ua: "одна сім’ядоля і паралельне жилкування: зазвичай однодольна; квасоля має дві сім’ядолі" } },
          { id: "b", label: { pl: "tak — pole zawsze znaczy dwa liścienie", ua: "так — поле завжди означає дві сім’ядолі" } },
          { id: "c", label: { pl: "tak — kukurydza jest mchem, bo liść jest długi", ua: "так — кукурудза є мохом, бо листок довгий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pole nie liczy liścieni. Kukurydza ma jeden liścień i unerwienie równoległe, więc zwykle jest jednoliścienna. Fasola ma dwa liścienie.",
              ua: "Поле не рахує сім’ядолі. Кукурудза має одну сім’ядолю і паралельне жилкування, тож зазвичай однодольна. Квасоля має дві сім’ядолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Długi liść nie robi mchu. Mech nie ma owocu ani liścienia. Jeden liścień i nerwy równoległe wskazują jednoliścienne.",
              ua: "Довгий листок не робить мох. Мох не має плоду і сім’ядолі. Одна сім’ядоля і паралельні жилки вказують на однодольні."
            }
          }
        ],
        explanation: {
          pl: "Jeden liścień i unerwienie równoległe: kukurydza jest jednoliścienna.",
          ua: "Одна сім’ядоля і паралельне жилкування: кукурудза однодольна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Kwiat jabłoni", ua: "Перевірка 5. Квітка яблуні" },
      task: {
        id: "l29-t5",
        type: "single-choice",
        question: {
          pl: "Na jabłoni jest barwny kwiat. Uczeń chce dziś podpisać pręciki i słupek, a bez tych nazw mówi, że to szyszka. Co pasuje do lekcji?",
          ua: "На яблуні є барвиста квітка. Учень хоче сьогодні підписати тичинки і маточку, а без цих назв каже, що це шишка. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to kwiat okrytonasiennych; części podpiszesz na lekcji 30", ua: "це квітка покритонасінних; частини підпишеш на уроці 30" } },
          { id: "b", label: { pl: "tak — bez nazwy pręcika kwiat jest szyszką", ua: "так — без назви тичинки квітка є шишкою" } },
          { id: "c", label: { pl: "tak — kwiat jabłoni to kłos skrzypa", ua: "так — квітка яблуні це колосок хвоща" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Brak podpisu nie zamienia kwiatu w szyszkę. Jabłoń ma kwiat. Pręciki i słupek poznasz na lekcji 30.",
              ua: "Брак підпису не перетворює квітку на шишку. Яблуня має квітку. Тичинки і маточку пізнаєш на уроці 30."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kłos skrzypa nie jest kwiatem jabłoni. Jabłoń jest okrytonasienna i ma kwiat. Części kwiatu są na lekcji 30.",
              ua: "Колосок хвоща не є квіткою яблуні. Яблуня покритонасінна і має квітку. Частини квітки є на уроці 30."
            }
          }
        ],
        explanation: {
          pl: "Jabłoń ma kwiat. Części poznasz na lekcji 30.",
          ua: "Яблуня має квітку. Частини пізнаєш на уроці 30."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l29-liczba.png", {
        alt: { pl: "Łąka, pole zbóż i sad", ua: "Лука, поле злаків і сад" },
        title: { pl: "Owoc, kwiat i dwie szufladki.", ua: "Плід, квітка і дві шухлядки." },
        prompt: { pl: "Ta sama plansza łąki, pola i sadu." }
      }),
      text: {
        pl: [
          "Nasiono okrytonasiennych leży w owocu. Na łusce szyszki leży nago.",
          "Mają kwiaty. Części kwiatu są na lekcji 30.",
          "Trzy formy: drzewo, krzew, roślina zielna.",
          "Jeden liścień albo dwa. Często pomagają unerwienie i korzeń.",
          "To najliczniejsza grupa, którą widzisz. Podróż nasion, kiełkowanie i nazwy drzew są później."
        ],
        ua: [
          "Насінина покритонасінних лежить у плоді. На лусці шишки лежить голою.",
          "Мають квітки. Частини квітки є на уроці 30.",
          "Три форми: дерево, кущ, трав’яниста рослина.",
          "Одна сім’ядоля або дві. Часто допомагають жилкування і корінь.",
          "Це найчисленніша група, яку бачиш. Подорож насіння, проростання і назви дерев є пізніше."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, że nasiono leży w owocu.", ua: "Поясню, що насінина лежить у плоді." },
        { pl: "Porównam z nagonasiennymi: owoc, nie naga łuska.", ua: "Порівняю з голонасінними: плід, не гола луска." },
        { pl: "Wymienię drzewo, krzew i roślinę zielną.", ua: "Назву дерево, кущ і трав’янисту рослину." },
        { pl: "Odróżnię jednoliścienne od dwuliściennych.", ua: "Відрізню однодольні від дводольних." },
        { pl: "Powiem, że budowę kwiatu poznam na lekcji 30.", ua: "Скажу, що будову квітки пізнаю на уроці 30." },
        { pl: "Powiem, że okrytonasienne widzę najczęściej: łąka, pole, sad.", ua: "Скажу, що покритонасінні бачу найчастіше: лука, поле, сад." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
