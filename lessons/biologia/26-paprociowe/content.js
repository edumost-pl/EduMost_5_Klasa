function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L26_Paprociowe/images/";

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
      heading: { pl: "Misja: większa od mchu", ua: "Місія: більша за мох" },
      visual: vizGh("l26-zacznijmy.png", {
        alt: { pl: "Duża paproć w cienistym lesie", ua: "Велика папороть у затіненому лісі" },
        title: { pl: "Po mchach — paprotniki.", ua: "Після мохів — папоротеподібні." },
        prompt: { pl: "Plansza lekcji 26: paproć w lesie." }
      }),
      text: {
        pl: [
          "To lekcja 26. Mech miał drobne listki, chwytniki i puszkę. Paproć jest większa.",
          ["Razem ze skrzypem i widłakiem to ", em("paprotniki"), ". Wszystkie rozsiewają się zarodnikami. Kwiatu, szyszki i nasion tu nie ma."],
          "Dziś: gdzie rośnie paproć, z czego się składa, gdzie ma zarodniki i czym różni się od mchu.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 26. Мох мав дрібні листочки, ризоїди і коробочку. Папороть більша.",
          ["Разом із хвощем і плауном це ", em("папоротеподібні"), ". Усі поширюються спорами. Квітки, шишки і насіння тут немає."],
          "Сьогодні: де росте папороть, з чого складається, де має спори і чим відрізняється від моху.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "paproć / mech", ua: "папороть — великі листки і корені; мох — листочки і ризоїди" },
        { pl: "kłącze", ua: "кореневище — пагін під землею, не корінь" },
        { pl: "pastorał", ua: "патериця — молодий листок, згорнутий" },
        { pl: "kupki zarodni", ua: "купки спорангіїв — на споді листка, не коробочка моху" },
        { pl: "przedrośle", ua: "заросток — маленька зелена пластинка зі спори, не насінина" },
        { pl: "skrzyp", ua: "хвощ — членистий пагін і спороносний колосок" },
        { pl: "widłak", ua: "плаун — сланкі пагони; часто під охороною, не зриваємо" },
        { pl: "paprotniki", ua: "папоротеподібні — папороть, хвощ і плаун" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cień i wilgoć", ua: "Поняття. Затінок і волога" },
      visual: vizGh("l26-srodowisko.png", {
        alt: { pl: "Paprocie w lesie, przy potoku i w doniczce", ua: "Папороті в лісі, біля струмка і в горщику" },
        title: { pl: "Wilgoć i cień.", ua: "Волога і затінок." },
        prompt: { pl: "Plansza lekcji 26: środowisko paproci." }
      }),
      text: {
        pl: [
          "Paprocie wybierają wilgoć i cień: las, wąwóz, brzeg potoku. W mieszkaniu doniczka też stoi w cieniu, nie na palącym słońcu.",
          "Do zapłodnienia, jak u mchów, potrzebna jest kropla wody. Suche otwarte pole nie jest ich miejscem.",
          "Paproć nie jest poduszką mchu na korze. Ma duże liście."
        ],
        ua: [
          "Папороті обирають вологу і затінок: ліс, яр, берег струмка. У квартирі горщик теж стоїть у затінку, не на пекучому сонці.",
          "Для запліднення, як у мохів, потрібна крапля води. Сухе відкрите поле не є їхнім місцем.",
          "Папороть не є подушкою моху на корі. Має великі листки."
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
            pl: ["W lesie paproć stoi w cieniu i w wilgoci."],
            ua: ["У лісі папороть стоїть у затінку і у волозі."]
          }
        },
        {
          text: {
            pl: ["Przy potoku i w wąwozie też jest woda."],
            ua: ["Біля струмка і в яру теж є вода."]
          }
        },
        {
          text: {
            pl: ["Doniczka w mieszkaniu zostaje w cieniu. Pustynia jej nie służy."],
            ua: ["Горщик у квартирі лишається в затінку. Пустеля їй не служить."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie stoi", ua: "Коротке питання. Де стоїть" },
      task: {
        id: "l26-g1",
        type: "single-choice",
        question: {
          pl: "Jakie miejsce wybiera paproć?",
          ua: "Яке місце обирає папороть?"
        },
        options: [
          { id: "a", label: { pl: "wilgotne i cieniste: las, wąwóz, brzeg potoku", ua: "вологе і затінене: ліс, яр, берег струмка" } },
          { id: "b", label: { pl: "tylko suchą pustynię", ua: "лише суху пустелю" } },
          { id: "c", label: { pl: "tylko słoną wodę oceanu", ua: "лише солону воду океану" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj cienia i wody. Do zapłodnienia potrzebna jest kropla.",
          ua: "Шукай затінок і воду. Для запліднення потрібна крапля."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pustynia jest sucha i otwarta. Paproć wybiera wilgoć i cień.",
              ua: "Пустеля суха і відкрита. Папороть обирає вологу і затінок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ocean nie jest miejscem paproci. To roślina lądowa wilgotnych, cienistych miejsc.",
              ua: "Океан не є місцем папороті. Це наземна рослина вологих затінених місць."
            }
          }
        ],
        explanation: {
          pl: "Paproć wybiera wilgotne i cieniste miejsca.",
          ua: "Папороть обирає вологі і затінені місця."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Słońce pustyni", ua: "Типова помилка. Сонце пустелі" },
      claim: {
        pl: "„Paproć jest duża, więc lubi palące słońce jak pustynia.”",
        ua: "«Папороть велика, тож любить пекуче сонце, як пустеля.»"
      },
      text: {
        pl: [
          "Rozmiar nie wybiera pustyni.",
          "Paproć chce wilgoci i cienia. Do zapłodnienia potrzebuje kropli wody."
        ],
        ua: [
          "Розмір не обирає пустелю.",
          "Папороть хоче вологи і затінку. Для запліднення потребує краплі води."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwie doniczki", ua: "Сам. Два горщики" },
      task: {
        id: "l26-p1",
        type: "single-choice",
        question: {
          pl: "Jedna paproć stoi w cienistym kącie i jest zielona. Druga stała na suchej, słonecznej półce i zwiędła. Uczeń przenosi zieloną na słońce, „bo duża roślina chce pustyni”. Co poprawić?",
          ua: "Одна папороть стоїть у затіненому кутку і зелена. Друга стояла на сухій сонячній полиці і зів’яла. Учень переносить зелену на сонце, «бо велика рослина хоче пустелі». Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "zostaw w cieniu i wilgoci; suche słońce nie jest miejscem paproci", ua: "залиш у затінку і волозі; сухе сонце не є місцем папороті" } },
          { id: "b", label: { pl: "tak — im większa roślina, tym suchsze miejsce", ua: "так — що більша рослина, то сухіше місце" } },
          { id: "c", label: { pl: "tak — zwiędła paproć stała się mchem, więc słońce jest dobre", ua: "так — зів’яла папороть стала мохом, тож сонце добре" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rozmiar nie przenosi paproci na pustynię. Wybiera wilgoć i cień. Do zapłodnienia potrzebna jest kropla wody.",
              ua: "Розмір не переносить папороть у пустелю. Обирає вологу і затінок. Для запліднення потрібна крапля води."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Susza nie zamienia paproci w mech. Mech to inna roślina, z listkami i chwytnikami. Paproć zostaje w wilgoci i cieniu.",
              ua: "Посуха не перетворює папороть на мох. Мох — інша рослина, з листочками і ризоїдами. Папороть лишається у волозі і затінку."
            }
          }
        ],
        explanation: {
          pl: "Paproć zostaje w wilgoci i cieniu.",
          ua: "Папороть лишається у волозі і затінку."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy części", ua: "Поняття. Три частини" },
      visual: vizGh("l26-budowa.png", {
        alt: { pl: "Liście, kłącze i korzenie paproci", ua: "Листки, кореневище і корені папороті" },
        title: { pl: "Kłącze to pęd. Korzenie są osobno.", ua: "Кореневище — це пагін. Корені окремо." },
        prompt: { pl: "Plansza lekcji 26: budowa paproci." }
      }),
      text: {
        pl: [
          ["", em("Liście"), " paproci są duże. Młody liść bywa zwinięty jak pastorał, potem się rozwija. Tu jest fotosynteza."],
          ["", em("Kłącze"), " to pęd pod ziemią, jak łodyga z lekcji 23. To nie korzeń. Z kłącza wyrastają liście i korzenie."],
          ["", em("Korzenie"), " przytwierdzają paproć i pobierają wodę. To nie chwytniki mchu. Paproć ma tkanki przewodzące, dlatego może być większa."]
        ],
        ua: [
          ["", em("Листки"), " папороті великі. Молодий листок буває згорнутий, як патериця, потім розгортається. Тут є фотосинтез."],
          ["", em("Кореневище"), " — це пагін під землею, як стебло з уроку 23. Це не корінь. З кореневища виростають листки і корені."],
          ["", em("Корені"), " прикріплюють папороть і вбирають воду. Це не ризоїди моху. Папороть має провідні тканини, тому може бути більшою."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zwitek i pęd", ua: "Приклад. Сувій і пагін" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Młody liść jest zwinięty jak pastorał. Potem robi się duży i zielony."],
            ua: ["Молодий листок згорнутий, як патериця. Потім стає великим і зеленим."]
          }
        },
        {
          text: {
            pl: ["Pod ziemią leży kłącze. To pęd, nie marchew."],
            ua: ["Під землею лежить кореневище. Це пагін, не морква."]
          }
        },
        {
          text: {
            pl: ["Z kłącza schodzą korzenie. One piją wodę. Chwytników tu nie ma."],
            ua: ["З кореневища йдуть корені. Вони п’ють воду. Ризоїдів тут немає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pod ziemią", ua: "Коротке питання. Під землею" },
      task: {
        id: "l26-g2",
        type: "single-choice",
        question: {
          pl: "Czym kłącze różni się od korzenia?",
          ua: "Чим кореневище відрізняється від кореня?"
        },
        options: [
          { id: "a", label: { pl: "kłącze to pęd pod ziemią; korzenie wyrastają z niego i pobierają wodę", ua: "кореневище — це пагін під землею; корені виростають із нього і вбирають воду" } },
          { id: "b", label: { pl: "to samo: co leży pod ziemią, jest korzeniem marchwi", ua: "те саме: те, що лежить під землею, є коренем моркви" } },
          { id: "c", label: { pl: "kłącze to chwytniki mchu", ua: "кореневище — це ризоїди моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj pędu z lekcji 23, tylko pod glebą.",
          ua: "Шукай пагін з уроку 23, лише під ґрунтом."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Miejsce pod ziemią nie robi korzenia. Kłącze jest pędem. Korzenie paproci wyrastają z niego osobno.",
              ua: "Місце під землею не робить корінь. Кореневище є пагоном. Корені папороті виростають із нього окремо."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chwytniki ma mech. Kłącze paproci jest pędem pod ziemią. Korzenie są prawdziwe i pobierają wodę.",
              ua: "Ризоїди має мох. Кореневище папороті є пагоном під землею. Корені справжні і вбирають воду."
            }
          }
        ],
        explanation: {
          pl: "Kłącze jest pędem pod ziemią. Korzenie wyrastają z niego i pobierają wodę.",
          ua: "Кореневище є пагоном під землею. Корені виростають із нього і вбирають воду."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Podziemna marchew", ua: "Типова помилка. Підземна морква" },
      claim: {
        pl: "„Kłącze leży w glebie, więc jest korzeniem.”",
        ua: "«Кореневище лежить у ґрунті, тож є коренем.»"
      },
      text: {
        pl: [
          "Gleba nie wybiera organu.",
          "Kłącze to pęd. Korzenie paproci są obok i pobierają wodę."
        ],
        ua: [
          "Ґрунт не вибирає орган.",
          "Кореневище — це пагін. Корені папороті є поруч і вбирають воду."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zwinięty liść", ua: "Сам. Згорнутий листок" },
      task: {
        id: "l26-p2",
        type: "single-choice",
        question: {
          pl: "Z gleby wychodzi zwinięty zielony zwitek, a niżej leży pęd. Uczeń mówi, że zwitek to kwiat, a pęd to korzeń marchwi. Co poprawić?",
          ua: "Із ґрунту виходить згорнутий зелений сувій, а нижче лежить пагін. Учень каже, що сувій — це квітка, а пагін — це корінь моркви. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "zwitek to młody liść, pastorał; pęd pod ziemią to kłącze, nie korzeń", ua: "сувій — це молодий листок, патериця; пагін під землею — це кореневище, не корінь" } },
          { id: "b", label: { pl: "tak — każdy zwitek otwiera się w kwiat", ua: "так — кожен сувій розкривається у квітку" } },
          { id: "c", label: { pl: "tak — zwitek jest puszką mchu na trzonku", ua: "так — сувій є коробочкою моху на ніжці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Paproć nie ma kwiatu. Zwinięty młody liść to pastorał. Potem rozwija się w duży liść.",
              ua: "Папороть не має квітки. Згорнутий молодий листок — це патериця. Потім розгортається у великий листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu stoi na trzonku i ma zarodniki. Zwitek paproci jest młodym liściem. Pęd pod nim to kłącze.",
              ua: "Коробочка моху стоїть на ніжці і має спори. Сувій папороті є молодим листком. Пагін під ним — це кореневище."
            }
          }
        ],
        explanation: {
          pl: "Pastorał to młody zwinięty liść. Kłącze to pęd pod ziemią.",
          ua: "Патериця — це молодий згорнутий листок. Кореневище — це пагін під землею."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kupki", ua: "Поняття. Купки" },
      visual: vizGh("l26-kupki.png", {
        alt: { pl: "Spód liścia z kupkami zarodni", ua: "Спід листка з купками спорангіїв" },
        title: { pl: "Brązowe punkciki to zarodnie.", ua: "Коричневі крапки — це спорангії." },
        prompt: { pl: "Plansza lekcji 26: kupki zarodni." }
      }),
      text: {
        pl: [
          ["Na spodzie liścia bywają brązowe punkciki: ", em("kupki zarodni"), ". W zarodniach powstają ", em("zarodniki"), "."],
          "To nie choroba i nie nasiona. Nasiona i kwiat przyjdą później.",
          "U mchu zarodniki były w puszce na trzonku. U paproci są na liściu."
        ],
        ua: [
          ["На споді листка бувають коричневі крапки: ", em("купки спорангіїв"), ". У спорангіях виникають ", em("спори"), "."],
          "Це не хвороба і не насіння. Насіння і квітка прийдуть пізніше.",
          "У моху спори були в коробочці на ніжці. У папороті вони на листку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Odwrócony liść", ua: "Приклад. Перевернутий листок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Z wierzchu liść jest zielony."],
            ua: ["Зверху листок зелений."]
          }
        },
        {
          text: {
            pl: ["Od spodu widać brązowe kupki. W nich zarodnie."],
            ua: ["Зі споду видно коричневі купки. У них спорангії."]
          }
        },
        {
          text: {
            pl: ["Sypie się drobny proszek: zarodniki, nie nasiona."],
            ua: ["Сиплеться дрібний порошок: спори, не насіння."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Spód liścia", ua: "Коротке питання. Спід листка" },
      task: {
        id: "l26-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie u paproci są kupki zarodni?",
          ua: "Де в папороті є купки спорангіїв?"
        },
        options: [
          { id: "a", label: { pl: "na spodzie liścia; w nich powstają zarodniki", ua: "на споді листка; у них виникають спори" } },
          { id: "b", label: { pl: "w puszce na trzonku, jak u mchu", ua: "у коробочці на ніжці, як у моху" } },
          { id: "c", label: { pl: "w kwiecie, bo punkciki są nasionami", ua: "у квітці, бо крапки є насінням" } }
        ],
        answer: "a",
        hint: {
          pl: "Odwróć duży liść. Szukaj brązowych punkcików.",
          ua: "Переверни великий листок. Шукай коричневі крапки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka na trzonku należy do mchu. Paproć ma kupki zarodni na spodzie liścia.",
              ua: "Коробочка на ніжці належить моху. Папороть має купки спорангіїв на споді листка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Paproć nie ma kwiatu ani nasion. Brązowe punkciki to kupki zarodni, a w nich zarodniki.",
              ua: "Папороть не має квітки і насіння. Коричневі крапки — це купки спорангіїв, а в них спори."
            }
          }
        ],
        explanation: {
          pl: "Kupki zarodni są na spodzie liścia. Powstają w nich zarodniki.",
          ua: "Купки спорангіїв є на споді листка. У них виникають спори."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Brązowa choroba", ua: "Типова помилка. Коричнева хвороба" },
      claim: {
        pl: "„Brązowe punkciki na liściu to choroba, więc je ścieram.”",
        ua: "«Коричневі крапки на листку — це хвороба, тож я їх стираю.»"
      },
      text: {
        pl: [
          "Regularne brązowe kupki nie są chorobą.",
          "To zarodnie. W nich powstają zarodniki."
        ],
        ua: [
          "Регулярні коричневі купки не є хворобою.",
          "Це спорангії. У них виникають спори."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Proszek od spodu", ua: "Сам. Порошок зі споду" },
      task: {
        id: "l26-p3",
        type: "single-choice",
        question: {
          pl: "Na spodzie liścia są brązowe kupki i sypie się proszek. Uczeń mówi, że to nasiona ukrytego kwiatu. Co poprawić?",
          ua: "На споді листка є коричневі купки і сиплеться порошок. Учень каже, що це насіння схованої квітки. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to zarodniki z kupek zarodni; paproć nie ma kwiatu ani nasion", ua: "це спори з купок спорангіїв; папороть не має квітки і насіння" } },
          { id: "b", label: { pl: "tak — spód liścia jest kwiatem", ua: "так — спід листка є квіткою" } },
          { id: "c", label: { pl: "tak — proszek spada z puszki mchu przyklejonej do liścia", ua: "так — порошок падає з коробочки моху, приклеєної до листка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Paproć nie ma kwiatu. Brązowe kupki na spodzie to zarodnie, a proszek to zarodniki.",
              ua: "Папороть не має квітки. Коричневі купки на споді — це спорангії, а порошок — це спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka należy do mchu i stoi na trzonku. U paproci zarodniki powstają w kupkach na spodzie liścia.",
              ua: "Коробочка належить моху і стоїть на ніжці. У папороті спори виникають у купках на споді листка."
            }
          }
        ],
        explanation: {
          pl: "Proszek z kupek to zarodniki. Paproć nie ma nasion.",
          ua: "Порошок із купок — це спори. Папороть не має насіння."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Przedrośle", ua: "Поняття. Заросток" },
      visual: vizGh("l26-przedrosle.png", {
        alt: { pl: "Zarodnik, sercowate przedrośle i młoda paproć", ua: "Спора, серцеподібний заросток і молода папороть" },
        title: { pl: "Najpierw mała płytka. Potem paproć.", ua: "Спочатку маленька пластинка. Потім папороть." },
        prompt: { pl: "Plansza lekcji 26: przedrośle." }
      }),
      text: {
        pl: [
          ["Z zarodnika wyrasta ", em("przedrośle"), ": mała, zwykle sercowata zielona płytka. To nie liść dorosłej paproci i nie nasiono."],
          "Na przedroślu, przy kropli wody, powstaje zarodek nowej paproci. Potem przedrośle zanika, a rosną kłącze i liście.",
          "Nasiono ma zapas i osłonę. To późniejsze lekcje. Tu startem jest zarodnik."
        ],
        ua: [
          ["Зі спори виростає ", em("заросток"), ": маленька, зазвичай серцеподібна зелена пластинка. Це не листок дорослої папороті і не насінина."],
          "На заростку, при краплі води, виникає зародок нової папороті. Потім заросток зникає, а ростуть кореневище і листки.",
          "Насінина має запас і оболонку. Це пізніші уроки. Тут стартом є спора."
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
            pl: ["Z kupki spada zarodnik."],
            ua: ["З купки падає спора."]
          }
        },
        {
          text: {
            pl: ["Z niego wyrasta mała zielona płytka w kształcie serca."],
            ua: ["З неї виростає маленька зелена пластинка у формі серця."]
          }
        },
        {
          text: {
            pl: ["Przy kropli wody na płytce startuje młoda paproć. Płytka potem znika."],
            ua: ["При краплі води на пластинці стартує молода папороть. Пластинка потім зникає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Mała płytka", ua: "Коротке питання. Маленька пластинка" },
      task: {
        id: "l26-g4",
        type: "single-choice",
        question: {
          pl: "Co wyrasta z zarodnika paproci, zanim pojawi się duża roślina?",
          ua: "Що виростає зі спори папороті, перш ніж з’явиться велика рослина?"
        },
        options: [
          { id: "a", label: { pl: "przedrośle: mała zielona płytka, zwykle sercowata", ua: "заросток: маленька зелена пластинка, зазвичай серцеподібна" } },
          { id: "b", label: { pl: "od razu nasiono z zapasem", ua: "одразу насінина із запасом" } },
          { id: "c", label: { pl: "od razu dorosły liść z kupkami", ua: "одразу дорослий листок із купками" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj małej płytki, nie dużego liścia i nie nasiona.",
          ua: "Шукай маленьку пластинку, не великий листок і не насінину."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zarodnik nie jest nasionem. Nasiono ma zapas i osłonę, a to późniejsza lekcja. Z zarodnika wyrasta przedrośle.",
              ua: "Спора не є насіниною. Насінина має запас і оболонку, а це пізніший урок. Зі спори виростає заросток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dorosły liść z kupkami jest później. Najpierw z zarodnika wyrasta małe przedrośle.",
              ua: "Дорослий листок із купками є пізніше. Спочатку зі спори виростає маленький заросток."
            }
          }
        ],
        explanation: {
          pl: "Z zarodnika wyrasta przedrośle: mała zielona płytka.",
          ua: "Зі спори виростає заросток: маленька зелена пластинка."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielone nasiono", ua: "Типова помилка. Зелена насінина" },
      claim: {
        pl: "„Mała zielona płytka to nasiono, bo z niej rośnie paproć.”",
        ua: "«Маленька зелена пластинка — це насінина, бо з неї росте папороть.»"
      },
      text: {
        pl: [
          "Nasiono ma zapas i osłonę. Paproć go nie ma.",
          "Płytka to przedrośle. Wyrasta z zarodnika i potem zanika."
        ],
        ua: [
          "Насінина має запас і оболонку. Папороть її не має.",
          "Пластинка — це заросток. Виростає зі спори і потім зникає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Serce w wilgoci", ua: "Сам. Серце у волозі" },
      task: {
        id: "l26-p4",
        type: "single-choice",
        question: {
          pl: "W wilgotnej glebie leży mała zielona płytka w kształcie serca. Obok niej zaczyna rosnąć paproć. Uczeń nazywa płytkę nasionem dębu. Co poprawić?",
          ua: "У вологому ґрунті лежить маленька зелена пластинка у формі серця. Поруч із нею починає рости папороть. Учень називає пластинку насіниною дуба. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to przedrośle z zarodnika; nasiono dębu ma zapas i osłonę i jest późniejszą lekcją", ua: "це заросток зі спори; насінина дуба має запас і оболонку і є пізнішим уроком" } },
          { id: "b", label: { pl: "tak — każda zielona płytka jest nasionem drzewa", ua: "так — кожна зелена пластинка є насіниною дерева" } },
          { id: "c", label: { pl: "tak — płytka jest kupką zarodni na dorosłym liściu", ua: "так — пластинка є купкою спорангіїв на дорослому листку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nasiono drzewa ma zapas i osłonę. Mała sercowata płytka paproci to przedrośle. Wyrasta z zarodnika.",
              ua: "Насінина дерева має запас і оболонку. Маленька серцеподібна пластинка папороті — це заросток. Виростає зі спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kupki zarodni są brązowymi punkcikami na spodzie dorosłego liścia. Sercowata płytka to przedrośle.",
              ua: "Купки спорангіїв є коричневими крапками на споді дорослого листка. Серцеподібна пластинка — це заросток."
            }
          }
        ],
        explanation: {
          pl: "Sercowata płytka to przedrośle. Wyrasta z zarodnika, nie jest nasionem.",
          ua: "Серцеподібна пластинка — це заросток. Виростає зі спори, не є насіниною."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy paprotniki", ua: "Поняття. Три папоротеподібні" },
      visual: vizGh("l26-paprotniki.png", {
        alt: { pl: "Paproć, skrzyp i widłak", ua: "Папороть, хвощ і плаун" },
        title: { pl: "Trzy rośliny. Wszystkie z zarodnikami.", ua: "Три рослини. Усі зі спорами." },
        prompt: { pl: "Plansza lekcji 26: paproć, skrzyp i widłak." }
      }),
      text: {
        pl: [
          ["", em("Paproć"), " ma duże liście i kłącze. ", em("Skrzyp"), " ma pęd z członów, jak rurki, i kłos zarodnionośny. To nie kłos zboża i nie kwiat."],
          ["", em("Widłak"), " ma pędy płożące i kłosy z zarodniami. Widłaki często są chronione: nie zrywamy ich."],
          "Od mchu różni je budowa: korzenie, kłącze albo człony i tkanki przewodzące. Szyszka sosny to następna lekcja."
        ],
        ua: [
          ["", em("Папороть"), " має великі листки і кореневище. ", em("Хвощ"), " має пагін із члеників, як трубки, і спороносний колосок. Це не колосок злаку і не квітка."],
          ["", em("Плаун"), " має сланкі пагони і колоски зі спорангіями. Плауни часто охороняють: не зриваємо їх."],
          "Від моху вони відрізняються будовою: корені, кореневище або членики і провідні тканини. Шишка сосни — це наступний урок."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kadry", ua: "Приклад. Три кадри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Paproć poznajesz po dużych liściach."],
            ua: ["Папороть впізнаєш за великими листками."]
          }
        },
        {
          text: {
            pl: ["Skrzyp wygląda jak zielone rurki. Na szczycie bywa kłos, nie kwiat."],
            ua: ["Хвощ виглядає як зелені трубки. На верхівці буває колосок, не квітка."]
          }
        },
        {
          text: {
            pl: ["Widłak płoży się po ziemi. Zostawiasz go na miejscu."],
            ua: ["Плаун стелеться по землі. Лишаєш його на місці."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Rurki", ua: "Коротке питання. Трубки" },
      task: {
        id: "l26-g5",
        type: "single-choice",
        question: {
          pl: "Po czym poznasz skrzyp, a po czym widłaka?",
          ua: "За чим впізнаєш хвощ, а за чим плауна?"
        },
        options: [
          { id: "a", label: { pl: "skrzyp ma członowany pęd i kłos zarodnionośny; widłak ma płożące pędy i kłosy", ua: "хвощ має членистий пагін і спороносний колосок; плаун має сланкі пагони і колоски" } },
          { id: "b", label: { pl: "skrzyp jest kłosem zboża, a widłak szyszką sosny", ua: "хвощ є колоском злаку, а плаун шишкою сосни" } },
          { id: "c", label: { pl: "oba są poduszką mchu z puszką", ua: "обидва є подушкою моху з коробочкою" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedna roślina jest z rurek. Druga płoży się i ma kłosy.",
          ua: "Одна рослина з трубок. Друга стелеться і має колоски."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kłos skrzypu nie jest kłosem zboża ani kwiatem. Widłak nie jest sosną. Sosna i szyszka są następną lekcją.",
              ua: "Колосок хвоща не є колоском злаку і не є квіткою. Плаун не є сосною. Сосна і шишка — наступний урок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Poduszka i puszka należą do mchu. Skrzyp ma członowany pęd, widłak pędy płożące.",
              ua: "Подушка і коробочка належать моху. Хвощ має членистий пагін, плаун — сланкі пагони."
            }
          }
        ],
        explanation: {
          pl: "Skrzyp ma członowany pęd i kłos. Widłak ma płożące pędy i kłosy.",
          ua: "Хвощ має членистий пагін і колосок. Плаун має сланкі пагони і колоски."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Bukiet z widłaka", ua: "Типова помилка. Букет із плауна" },
      claim: {
        pl: "„Widłak ładnie się płoży, więc zrywam go do bukietu.”",
        ua: "«Плаун гарно стелеться, тож зриваю його в букет.»"
      },
      text: {
        pl: [
          "Widłaki często są chronione.",
          "Nie zrywamy ich. Zostają na miejscu, z kłosami zarodni."
        ],
        ua: [
          "Плауни часто охороняють.",
          "Не зриваємо їх. Лишаються на місці, з колосками спорангіїв."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Trzy rośliny w rowie", ua: "Сам. Три рослини в рові" },
      task: {
        id: "l26-p5",
        type: "single-choice",
        question: {
          pl: "W wilgotnym rowie są: duża roślina z liśćmi, zielone rurki z kłosem i płożące pędy z kłosami. Uczeń nazywa rurki zbożem, a płożącą roślinę zabiera. Co poprawić?",
          ua: "У вологому рові є: велика рослина з листками, зелені трубки з колоском і сланкі пагони з колосками. Учень називає трубки збіжжям, а сланку рослину забирає. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to paproć, skrzyp i widłak; kłos skrzypu nie jest zbożem, a widłaka nie zrywamy", ua: "це папороть, хвощ і плаун; колосок хвоща не є збіжжям, а плауна не зриваємо" } },
          { id: "b", label: { pl: "tak — rurki są kłosem zboża, a płożąca roślina jest mchem do bukietu", ua: "так — трубки є колоском збіжжя, а сланка рослина є мохом для букета" } },
          { id: "c", label: { pl: "tak — wszystkie trzy mają szyszki sosny", ua: "так — усі три мають шишки сосни" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kłos skrzypu nie jest kłosem zboża. Płożące pędy z kłosami to widłak. Często jest chroniony, więc go nie zrywamy. Duże liście ma paproć.",
              ua: "Колосок хвоща не є колоском збіжжя. Сланкі пагони з колосками — це плаун. Часто його охороняють, тож не зриваємо. Великі листки має папороть."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka sosny jest następną lekcją. Tu są paprotniki: paproć, skrzyp i widłak. Rozsiewają się zarodnikami.",
              ua: "Шишка сосни — наступний урок. Тут папоротеподібні: папороть, хвощ і плаун. Поширюються спорами."
            }
          }
        ],
        explanation: {
          pl: "To paproć, skrzyp i widłak. Widłaka nie zrywamy.",
          ua: "Це папороть, хвощ і плаун. Плауна не зриваємо."
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
      heading: { pl: "Sprawdzian 1. Brzeg potoku", ua: "Перевірка 1. Берег струмка" },
      task: {
        id: "l26-t1",
        type: "single-choice",
        question: {
          pl: "Paproć rośnie nad cienistym potokiem. Na suchej łące obok jej nie ma. Uczeń mówi, że paproć uciekła z łąki, bo woli pustynię. Co pasuje do lekcji?",
          ua: "Папороть росте над затіненим струмком. На сухому лузі поруч її немає. Учень каже, що папороть утекла з лугу, бо любить пустелю. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "zostaje przy wodzie i w cieniu; suche pole nie jest jej miejscem", ua: "лишається біля води і в затінку; сухе поле не є її місцем" } },
          { id: "b", label: { pl: "tak — potok jest za mokry, więc paproć chce suszy", ua: "так — струмок занадто мокрий, тож папороть хоче посухи" } },
          { id: "c", label: { pl: "tak — nad potokiem rośnie tylko mech, paproć jest glonem", ua: "так — над струмком росте лише мох, папороть є водорістю" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Paproć nie ucieka do suszy. Wybiera wilgoć i cień. Do zapłodnienia potrzebna jest kropla wody.",
              ua: "Папороть не тікає в посуху. Обирає вологу і затінок. Для запліднення потрібна крапля води."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Paproć nie jest glonem ani poduszką mchu. To duża roślina wilgotnych, cienistych miejsc.",
              ua: "Папороть не є водорістю і не є подушкою моху. Це велика рослина вологих затінених місць."
            }
          }
        ],
        explanation: {
          pl: "Paproć rośnie w wilgoci i cieniu.",
          ua: "Папороть росте у волозі і затінку."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Pęd i zwitek", ua: "Перевірка 2. Пагін і сувій" },
      task: {
        id: "l26-t2",
        type: "single-choice",
        question: {
          pl: "Pod liśćmi paproci leży pęd, a z niego schodzą korzenie. Młody liść jest zwinięty. Uczeń podpisuje pęd jako korzeń, a zwitek jako puszkę. Co pasuje do lekcji?",
          ua: "Під листками папороті лежить пагін, а з нього йдуть корені. Молодий листок згорнутий. Учень підписує пагін як корінь, а сувій як коробочку. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "pęd to kłącze, korzenie są osobno, zwitek to pastorał", ua: "пагін — це кореневище, корені окремо, сувій — це патериця" } },
          { id: "b", label: { pl: "tak — cały spód jest jednym korzeniem marchwi", ua: "так — увесь спід є одним коренем моркви" } },
          { id: "c", label: { pl: "tak — zwitek to chwytnik, a pęd to listki mchu", ua: "так — сувій — це ризоїд, а пагін — це листочки моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Marchew jest korzeniem spichrzowym. U paproci pod ziemią leży kłącze, czyli pęd. Korzenie wyrastają z niego osobno. Zwinięty liść to pastorał.",
              ua: "Морква є запасаючим коренем. У папороті під землею лежить кореневище, тобто пагін. Корені виростають із нього окремо. Згорнутий листок — це патериця."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chwytniki i listki należą do mchu. Paproć ma kłącze, korzenie i liście. Młody zwinięty liść to pastorał.",
              ua: "Ризоїди і листочки належать моху. Папороть має кореневище, корені і листки. Молодий згорнутий листок — це патериця."
            }
          }
        ],
        explanation: {
          pl: "Kłącze to pęd. Korzenie są osobno. Pastorał to młody liść.",
          ua: "Кореневище — це пагін. Корені окремо. Патериця — це молодий листок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Brązowe punkciki", ua: "Перевірка 3. Коричневі крапки" },
      task: {
        id: "l26-t3",
        type: "single-choice",
        question: {
          pl: "Uczeń odwraca liść paproci i widzi równe brązowe punkciki. Mówi, że liść choruje, więc punkciki trzeba zetrzeć. Co pasuje do lekcji?",
          ua: "Учень перевертає листок папороті і бачить рівні коричневі крапки. Каже, що листок хворіє, тож крапки треба стерти. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to kupki zarodni; powstają w nich zarodniki, nie jest to choroba", ua: "це купки спорангіїв; у них виникають спори, це не хвороба" } },
          { id: "b", label: { pl: "tak — brąz na liściu zawsze jest chorobą", ua: "так — коричневе на листку завжди є хворобою" } },
          { id: "c", label: { pl: "tak — punkciki są nasionami w kwiecie", ua: "так — крапки є насінням у квітці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Równe brązowe kupki na spodzie nie są chorobą. To zarodnie, a w nich zarodniki.",
              ua: "Рівні коричневі купки на споді не є хворобою. Це спорангії, а в них спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Paproć nie ma kwiatu ani nasion. Punkciki na spodzie liścia to kupki zarodni.",
              ua: "Папороть не має квітки і насіння. Крапки на споді листка — це купки спорангіїв."
            }
          }
        ],
        explanation: {
          pl: "Brązowe punkciki to kupki zarodni. Powstają w nich zarodniki.",
          ua: "Коричневі крапки — це купки спорангіїв. У них виникають спори."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Obok mchu", ua: "Перевірка 4. Поруч із мохом" },
      task: {
        id: "l26-t4",
        type: "single-choice",
        question: {
          pl: "Na jednym kamieniu jest poduszka z puszką na trzonku. Obok stoi duża roślina: ma korzenie, pęd pod ziemią i brązowe kupki na spodzie liścia. Uczeń mówi, że to dwie takie same rośliny. Co pasuje do lekcji?",
          ua: "На одному камені є подушка з коробочкою на ніжці. Поруч стоїть велика рослина: має корені, пагін під землею і коричневі купки на споді листка. Учень каже, що це дві однакові рослини. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "poduszka to mech: chwytniki i puszka; duża roślina to paproć: korzenie, kłącze i kupki", ua: "подушка — це мох: ризоїди і коробочка; велика рослина — це папороть: корені, кореневище і купки" } },
          { id: "b", label: { pl: "tak — obie mają nasiona i kwiat", ua: "так — обидві мають насіння і квітку" } },
          { id: "c", label: { pl: "tak — duża roślina jest torfowcem, bo stoi przy mchu", ua: "так — велика рослина є сфагнумом, бо стоїть біля моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ani mech, ani paproć nie mają kwiatu i nasion. Mech ma chwytniki i puszkę. Paproć ma korzenie, kłącze i kupki zarodni na liściu.",
              ua: "Ані мох, ані папороть не мають квітки і насіння. Мох має ризоїди і коробочку. Папороть має корені, кореневище і купки спорангіїв на листку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Torfowiec jest mchem z lekcji 25. Duża roślina z korzeniami i kupkami na liściu to paproć.",
              ua: "Сфагнум є мохом з уроку 25. Велика рослина з коренями і купками на листку — це папороть."
            }
          }
        ],
        explanation: {
          pl: "Mech ma chwytniki i puszkę. Paproć ma korzenie, kłącze i kupki na liściu.",
          ua: "Мох має ризоїди і коробочку. Папороть має корені, кореневище і купки на листку."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Rurki i pędy", ua: "Перевірка 5. Трубки і пагони" },
      task: {
        id: "l26-t5",
        type: "single-choice",
        question: {
          pl: "W lesie są zielone rurki z kłosem i płożące pędy z kłosami. Uczeń zrywa płożącą roślinę i nazywa rurki sosną, bo widzi „szyszkę”. Co pasuje do lekcji?",
          ua: "У лісі є зелені трубки з колоском і сланкі пагони з колосками. Учень зриває сланку рослину і називає трубки сосною, бо бачить «шишку». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "rurki to skrzyp, a kłos nie jest szyszką; płożąca roślina to widłak i się go nie zrywa", ua: "трубки — це хвощ, а колосок не є шишкою; сланка рослина — це плаун, і його не зривають" } },
          { id: "b", label: { pl: "tak — kłos skrzypu jest szyszką, a widłaka wolno zabrać", ua: "так — колосок хвоща є шишкою, а плауна можна забрати" } },
          { id: "c", label: { pl: "tak — obie rośliny są torfowcem", ua: "так — обидві рослини є сфагнумом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka sosny jest następną lekcją. Kłos skrzypu jest kłosem zarodnionośnym. Widłak często jest chroniony, więc się go nie zrywa.",
              ua: "Шишка сосни — наступний урок. Колосок хвоща є спороносним колоском. Плаун часто охороняють, тож його не зривають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Torfowiec jest mchem. Członowany pęd to skrzyp, a płożące pędy z kłosami to widłak. Oba są paprotnikami.",
              ua: "Сфагнум є мохом. Членистий пагін — це хвощ, а сланкі пагони з колосками — це плаун. Обидва є папоротеподібними."
            }
          }
        ],
        explanation: {
          pl: "Skrzyp ma członowany pęd i kłos. Widłak ma płożące pędy. Nie zrywamy go.",
          ua: "Хвощ має членистий пагін і колосок. Плаун має сланкі пагони. Не зриваємо його."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l26-paprotniki.png", {
        alt: { pl: "Paproć, skrzyp i widłak", ua: "Папороть, хвощ і плаун" },
        title: { pl: "Trzy paprotniki. Bez kwiatu.", ua: "Три папоротеподібні. Без квітки." },
        prompt: { pl: "Ta sama plansza trzech paprotników." }
      }),
      text: {
        pl: [
          "Paproć rośnie w wilgoci i cieniu. Ma liście, kłącze i korzenie. Młody liść bywa pastorałem.",
          "Kupki zarodni są na spodzie liścia. Z zarodnika wyrasta przedrośle, nie nasiono.",
          "Od mchu różni ją budowa: korzenie i kłącze zamiast chwytników, kupki zamiast puszki.",
          "Paprotniki to paproć, skrzyp i widłak. Widłaka nie zrywamy. Następna lekcja to rośliny nagonasienne."
        ],
        ua: [
          "Папороть росте у волозі і затінку. Має листки, кореневище і корені. Молодий листок буває патерицею.",
          "Купки спорангіїв є на споді листка. Зі спори виростає заросток, не насінина.",
          "Від моху вона відрізняється будовою: корені і кореневище замість ризоїдів, купки замість коробочки.",
          "Папоротеподібні — це папороть, хвощ і плаун. Плауна не зриваємо. Наступний урок — голонасінні рослини."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wskażę wilgotne i cieniste miejsce paproci.", ua: "Вкажу вологе і затінене місце папороті." },
        { pl: "Nazwę liście, kłącze i korzenie oraz pastorał.", ua: "Назву листки, кореневище і корені та патерицю." },
        { pl: "Znajdę kupki zarodni na spodzie liścia.", ua: "Знайду купки спорангіїв на споді листка." },
        { pl: "Powiem, że z zarodnika wyrasta przedrośle, nie nasiono.", ua: "Скажу, що зі спори виростає заросток, не насінина." },
        { pl: "Porównam paproć z mchem.", ua: "Порівняю папороть із мохом." },
        { pl: "Odróżnię paproć, skrzyp i widłaka i nie zerwę widłaka.", ua: "Відрізню папороть, хвощ і плауна і не зірву плауна." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
