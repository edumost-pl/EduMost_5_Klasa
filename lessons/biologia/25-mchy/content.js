function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L25_Mchy/images/";

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
      heading: { pl: "Misja: pierwsza roślina działu", ua: "Місія: перша рослина розділу" },
      visual: vizGh("l25-zacznijmy.png", {
        alt: { pl: "Zielona poduszka mchu na pniu", ua: "Зелена подушка моху на стовбурі" },
        title: { pl: "Mech to roślina. Nie porost.", ua: "Мох — це рослина. Не лишайник." },
        prompt: { pl: "Plansza lekcji 25: poduszka mchu." }
      }),
      text: {
        pl: [
          "To lekcja 25, początek działu V: różnorodność roślin. Dziś mchy.",
          "Na lekcji 20 porost nie był mchem. Mech jest rośliną. Dziś: gdzie rośnie, z czego się składa, jak się rozsiewa i po co jest w lesie.",
          "Korzeń, łodygę i liść znasz z lekcji 22–24. Mech ma drobniejsze części i inne nazwy. Kwiatu i nasion nie ma. Paprocie są następną lekcją.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 25, початок розділу V: різноманітність рослин. Сьогодні мохи.",
          "На уроці 20 лишайник не був мохом. Мох є рослиною. Сьогодні: де росте, з чого складається, як поширюється і навіщо він у лісі.",
          "Корінь, стебло і листок знаєш з уроків 22–24. Мох має дрібніші частини і інші назви. Квітки і насіння немає. Папороті — наступний урок.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "mech / porost", ua: "мох — рослина; лишайник — гриб і водорість" },
        { pl: "listki", ua: "листочки — дрібні й зелені, не пластинка дуба" },
        { pl: "łodyżka", ua: "стебельце — тонка вісь, без річних кілець" },
        { pl: "chwytniki", ua: "ризоїди — нитки, що прикріплюють, не корінь" },
        { pl: "puszka zarodniona", ua: "коробочка зі спорами — на тонкій ніжці" },
        { pl: "zarodnik / nasiono", ua: "спора — дрібна клітина; насіння буде пізніше" },
        { pl: "torfowiec", ua: "сфагнум — мох болота, тримає багато води" },
        { pl: "torf", ua: "торф — рештки рослин, не бульба" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wilgotne miejsce", ua: "Поняття. Вологе місце" },
      visual: vizGh("l25-srodowisko.png", {
        alt: { pl: "Mech w lesie, na kamieniu i na bagnie", ua: "Мох у лісі, на камені і на болоті" },
        title: { pl: "Wilgoć. Często też cień.", ua: "Волога. Часто ще й затінок." },
        prompt: { pl: "Plansza lekcji 25: środowisko mchów." }
      }),
      text: {
        pl: [
          "Mchy rosną tam, gdzie jest wilgotno: w lesie, na kamieniach, na korze, na dachu od północy, na torfowisku. Często jest tam też cień.",
          "Nie mają drewna i łyka jak drzewo. Wodę wciągają całą powierzchnią. W suszy zasychają, po deszczu znów są zielone.",
          "To roślina lądowa, nie glon z lekcji 19. Jest bardzo zależna od wody."
        ],
        ua: [
          "Мохи ростуть там, де волого: у лісі, на каменях, на корі, на даху з півночі, на болоті. Часто там є і затінок.",
          "Не мають деревини і лубу, як дерево. Воду вбирають усією поверхнею. У посуху всихають, після дощу знову зелені.",
          "Це наземна рослина, не водорість з уроку 19. Вона дуже залежить від води."
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
            pl: ["W lesie mech leży w cieniu i w wilgoci."],
            ua: ["У лісі мох лежить у затінку і у волозі."]
          }
        },
        {
          text: {
            pl: ["Na kamieniu i na korze też szuka wody, nie słońca pustyni."],
            ua: ["На камені і на корі теж шукає воду, не сонце пустелі."]
          }
        },
        {
          text: {
            pl: ["Po deszczu sucha poduszka znów zielnieje. Woda wchodzi całą powierzchnią."],
            ua: ["Після дощу суха подушка знову зеленіє. Вода входить усією поверхнею."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie rośnie", ua: "Коротке питання. Де росте" },
      task: {
        id: "l25-g1",
        type: "single-choice",
        question: {
          pl: "Jakie miejsce wybiera mech?",
          ua: "Яке місце обирає мох?"
        },
        options: [
          { id: "a", label: { pl: "wilgotne, często cieniste: las, kora, kamień, bagno", ua: "вологе, часто затінене: ліс, кора, камінь, болото" } },
          { id: "b", label: { pl: "tylko suchy piasek pustyni", ua: "лише сухий пісок пустелі" } },
          { id: "c", label: { pl: "tylko słoną wodę oceanu, bo to glon", ua: "лише солону воду океану, бо це водорість" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj wilgoci. Mech zasycha, gdy wody brakuje.",
          ua: "Шукай вологу. Мох всихає, коли води бракує."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pustynia nie jest typowym miejscem mchu. Mech wybiera wilgoć, często też cień.",
              ua: "Пустеля не є типовим місцем моху. Мох обирає вологу, часто ще й затінок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech nie jest glonem. To roślina lądowa. Żyje tam, gdzie wilgotno, nie w oceanie jako jedynym miejscu.",
              ua: "Мох не є водорістю. Це наземна рослина. Живе там, де волого, не в океані як у єдиному місці."
            }
          }
        ],
        explanation: {
          pl: "Mech wybiera wilgotne, często cieniste miejsca.",
          ua: "Мох обирає вологі, часто затінені місця."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielony glon", ua: "Типова помилка. Зелена водорість" },
      claim: {
        pl: "„Mech potrzebuje wody, więc jest glonem z kałuży.”",
        ua: "«Мох потребує води, тож є водорістю з калюжі.»"
      },
      text: {
        pl: [
          "Woda nie robi z mchu glonu.",
          "Mech jest rośliną lądową. Wodę wciąga całą powierzchnią i dlatego żyje w wilgoci."
        ],
        ua: [
          "Вода не робить із моху водорість.",
          "Мох є наземною рослиною. Воду вбирає усією поверхнею і тому живе у волозі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Po deszczu", ua: "Сам. Після дощу" },
      task: {
        id: "l25-p1",
        type: "single-choice",
        question: {
          pl: "Na kamieniu mech był suchy i brązowy. Po deszczu znów jest zielony. Uczeń mówi, że stary mech zginął, a na kamieniu wyrósł glon. Co poprawić?",
          ua: "На камені мох був сухий і коричневий. Після дощу знову зелений. Учень каже, що старий мох загинув, а на камені виросла водорість. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to ten sam mech: w suszy zasycha, po deszczu znów jest zielony", ua: "це той самий мох: у посуху всихає, після дощу знову зелений" } },
          { id: "b", label: { pl: "tak — deszcz zamienia roślinę lądową w glona", ua: "так — дощ перетворює наземну рослину на водорість" } },
          { id: "c", label: { pl: "tak — zielony kolor na kamieniu zawsze jest porostem", ua: "так — зелений колір на камені завжди є лишайником" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Deszcz nie zmienia królestwa. Mech jest rośliną. Zasycha bez wody i zielnieje, gdy woda wraca całą powierzchnią.",
              ua: "Дощ не змінює царство. Мох є рослиною. Всихає без води і зеленіє, коли вода повертається всією поверхнею."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost to grzyb i glon albo sinice. Zielona poduszka, która ożywa po deszczu, jest mchem.",
              ua: "Лишайник — це гриб і водорість або ціанобактерії. Зелена подушка, яка оживає після дощу, є мохом."
            }
          }
        ],
        explanation: {
          pl: "Mech zasycha w suszy i znów jest zielony po deszczu.",
          ua: "Мох всихає в посуху і знову зелений після дощу."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy części", ua: "Поняття. Три частини" },
      visual: vizGh("l25-budowa.png", {
        alt: { pl: "Listki, łodyżka i chwytniki mchu", ua: "Листочки, стебельце і ризоїди моху" },
        title: { pl: "Drobne części. Inne nazwy.", ua: "Дрібні частини. Інші назви." },
        prompt: { pl: "Plansza lekcji 25: budowa mchu." }
      }),
      text: {
        pl: [
          ["", em("Listki"), " są drobne i zielone. Tu zachodzi fotosynteza, jak w lekcji 9. To nie blaszka i ogonek dębu."],
          ["", em("Łodyżka"), " trzyma listki. Jest cienka i nie ma słojów pnia."],
          ["", em("Chwytniki"), " to nitki przy podłożu. Przytwierdzają mech. Nie są korzeniem."]
        ],
        ua: [
          ["", em("Листочки"), " дрібні й зелені. Тут відбувається фотосинтез, як в уроці 9. Це не пластинка і черешок дуба."],
          ["", em("Стебельце"), " тримає листочки. Воно тонке і не має річних кілець стовбура."],
          ["", em("Ризоїди"), " — це нитки біля поверхні. Прикріплюють мох. Не є коренем."]
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
            pl: ["Na górze drobne zielone listki łapią światło."],
            ua: ["Згори дрібні зелені листочки ловлять світло."]
          }
        },
        {
          text: {
            pl: ["Cienka łodyżka je trzyma. Pierścieni drewna tu nie liczysz."],
            ua: ["Тонке стебельце їх тримає. Кілець деревини тут не рахуєш."]
          }
        },
        {
          text: {
            pl: ["Przy kamieniu nitki chwytników trzymają roślinę."],
            ua: ["Біля каменя нитки ризоїдів тримають рослину."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Trzy nazwy", ua: "Коротке питання. Три назви" },
      task: {
        id: "l25-g2",
        type: "single-choice",
        question: {
          pl: "Jak nazywają się trzy części zielonego mchu?",
          ua: "Як називаються три частини зеленого моху?"
        },
        options: [
          { id: "a", label: { pl: "listki, łodyżka i chwytniki", ua: "листочки, стебельце і ризоїди" } },
          { id: "b", label: { pl: "blaszka, ogonek i nasada dębu", ua: "пластинка, черешок і основа дуба" } },
          { id: "c", label: { pl: "kapelusz, trzon i blaszki grzyba", ua: "шапинка, ніжка і пластинки гриба" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj drobnych części mchu, nie organów dębu.",
          ua: "Шукай дрібні частини моху, не органи дуба."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Blaszka i ogonek to liść z lekcji 24. Mech ma listki, łodyżkę i chwytniki.",
              ua: "Пластинка і черешок — це листок з уроку 24. Мох має листочки, стебельце і ризоїди."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapelusz, trzon i blaszki to owocnik grzyba. Zielony mech ma listki, łodyżkę i chwytniki.",
              ua: "Шапинка, ніжка і пластинки — це плодове тіло гриба. Зелений мох має листочки, стебельце і ризоїди."
            }
          }
        ],
        explanation: {
          pl: "Zielony mech ma listki, łodyżkę i chwytniki.",
          ua: "Зелений мох має листочки, стебельце і ризоїди."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Mały dąb", ua: "Типова помилка. Малий дуб" },
      claim: {
        pl: "„Zielone części są zielone, więc to blaszka liścia dębu.”",
        ua: "«Зелені частини зелені, тож це пластинка листка дуба.»"
      },
      text: {
        pl: [
          "Zielony kolor nie przenosi nazw z dębu.",
          "U mchu drobne zielone części to listki. Łodyżka je trzyma, chwytniki przytwierdzają roślinę."
        ],
        ua: [
          "Зелений колір не переносить назви з дуба.",
          "У моху дрібні зелені частини — це листочки. Стебельце їх тримає, ризоїди прикріплюють рослину."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cienka oś", ua: "Сам. Тонка вісь" },
      task: {
        id: "l25-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi cienką oś mchu i mówi, że to pień, bo da się policzyć słoje. Co poprawić?",
          ua: "Учень бачить тонку вісь моху і каже, що це стовбур, бо можна порахувати кільця. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to łodyżka: cienka oś bez słojów, trzyma listki", ua: "це стебельце: тонка вісь без кілець, тримає листочки" } },
          { id: "b", label: { pl: "tak — każdy zielony patyk ma roczne pierścienie drewna", ua: "так — кожна зелена паличка має річні кільця деревини" } },
          { id: "c", label: { pl: "tak — oś mchu jest walcem osiowym korzenia marchwi", ua: "так — вісь моху є центральним циліндром кореня моркви" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Słoje są w pniu drzewa. Łodyżka mchu jest cienka i słojów nie ma. Trzyma listki.",
              ua: "Кільця є в стовбурі дерева. Стебельце моху тонке, і кілець немає. Тримає листочки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Walec osiowy jest w korzeniu. Oś zielonego mchu to łodyżka. Nie jest korzeniem marchwi.",
              ua: "Центральний циліндр є в корені. Вісь зеленого моху — це стебельце. Не є коренем моркви."
            }
          }
        ],
        explanation: {
          pl: "Łodyżka mchu jest cienka, bez słojów, i trzyma listki.",
          ua: "Стебельце моху тонке, без кілець, і тримає листочки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nie korzeń", ua: "Поняття. Не корінь" },
      visual: vizGh("l25-nie-korzen.png", {
        alt: { pl: "Chwytniki mchu obok korzenia z włośnikami", ua: "Ризоїди моху поряд із коренем із волосками" },
        title: { pl: "Nitki trzymają. Korzeń jest inny.", ua: "Нитки тримають. Корінь інший." },
        prompt: { pl: "Plansza lekcji 25: chwytniki i korzeń." }
      }),
      text: {
        pl: [
          "Korzeń z lekcji 22 ma czepiec, włośniki i walec osiowy. Tamtędy roślina pobiera wodę i sole.",
          ["", em("Chwytniki"), " tego nie mają. To cienkie nitki. Przytwierdzają mech do podłoża. Wodę mech i tak wciąga całą powierzchnią."],
          "Listki nie mają miękiszu palisadowego i gąbczastego. Łodyżka nie ma słojów. Dlatego nazwy są inne niż u dębu."
        ],
        ua: [
          "Корінь з уроку 22 має чохлик, кореневі волоски і центральний циліндр. Туди рослина вбирає воду і солі.",
          ["", em("Ризоїди"), " цього не мають. Це тонкі нитки. Прикріплюють мох до поверхні. Воду мох усе одно вбирає всією поверхнею."],
          "Листочки не мають палісадної і губчастої паренхіми. Стебельце не має кілець. Тому назви інші, ніж у дуба."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa kadry", ua: "Приклад. Два кадри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej nitki tylko trzymają mech przy kamieniu."],
            ua: ["Ліворуч нитки лише тримають мох біля каменя."]
          }
        },
        {
          text: {
            pl: ["Po prawej korzeń ma włośniki. Tamtędy wchodzi woda z gleby."],
            ua: ["Праворуч корінь має волоски. Туди входить вода з ґрунту."]
          }
        },
        {
          text: {
            pl: ["Podobna praca: trzymać się podłoża. Inna budowa."],
            ua: ["Схожа робота: триматися поверхні. Інша будова."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Nitki", ua: "Коротке питання. Нитки" },
      task: {
        id: "l25-g3",
        type: "single-choice",
        question: {
          pl: "Czym chwytniki różnią się od korzenia?",
          ua: "Чим ризоїди відрізняються від кореня?"
        },
        options: [
          { id: "a", label: { pl: "przytwierdzają mech, ale nie mają czepca ani włośników", ua: "прикріплюють мох, але не мають чохлика і волосків" } },
          { id: "b", label: { pl: "to ten sam organ: chwytnik ma czepiec i włośniki", ua: "це той самий орган: ризоїд має чохлик і волоски" } },
          { id: "c", label: { pl: "chwytniki są listkami, bo są zielone", ua: "ризоїди є листочками, бо зелені" } }
        ],
        answer: "a",
        hint: {
          pl: "Korzeń pije włośnikami. Nitki mchu tylko trzymają.",
          ua: "Корінь п’є волосками. Нитки моху лише тримають."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Czepiec i włośniki należą do korzenia. Chwytniki są cienkimi nitkami i tylko przytwierdzają mech.",
              ua: "Чохлик і волоски належать до кореня. Ризоїди є тонкими нитками і лише прикріплюють мох."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Listki są drobnymi zielonymi częściami u góry. Chwytniki są nitkami przy podłożu i nie są korzeniem.",
              ua: "Листочки є дрібними зеленими частинами згори. Ризоїди є нитками біля поверхні і не є коренем."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki przytwierdzają mech. Nie mają czepca ani włośników.",
          ua: "Ризоїди прикріплюють мох. Не мають чохлика і волосків."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Nitka pije", ua: "Типова помилка. Нитка п’є" },
      claim: {
        pl: "„Chwytniki to włośniki, więc mech ma korzeń.”",
        ua: "«Ризоїди — це волоски, тож мох має корінь.»"
      },
      text: {
        pl: [
          "Włośniki pobierają wodę na korzeniu.",
          "Chwytniki tylko przytwierdzają mech. Wodę roślina wciąga całą powierzchnią."
        ],
        ua: [
          "Кореневі волоски вбирають воду на корені.",
          "Ризоїди лише прикріплюють мох. Воду рослина вбирає всією поверхнею."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Marchew obok mchu", ua: "Сам. Морква поряд із мохом" },
      task: {
        id: "l25-p3",
        type: "single-choice",
        question: {
          pl: "Obok poduszki mchu leży marchew. Uczeń mówi, że nitki mchu piją wodę tak jak włośniki marchwi, więc to jeden organ. Co poprawić?",
          ua: "Поруч із подушкою моху лежить морква. Учень каже, що нитки моху п’ють воду так само, як волоски моркви, тож це один орган. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "marchew ma korzeń z włośnikami; nitki mchu to chwytniki i tylko przytwierdzają", ua: "морква має корінь із волосками; нитки моху — це ризоїди, і вони лише прикріплюють" } },
          { id: "b", label: { pl: "tak — każda nitka w glebie jest włośnikiem", ua: "так — кожна нитка в ґрунті є кореневим волоском" } },
          { id: "c", label: { pl: "tak — marchew jest mchem, bo obie są zielone", ua: "так — морква є мохом, бо обидві зелені" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są na korzeniu i pobierają wodę. Chwytniki mchu są nitkami, które przytwierdzają roślinę. Wodę mech wciąga całą powierzchnią.",
              ua: "Кореневі волоски є на корені і вбирають воду. Ризоїди моху є нитками, які прикріплюють рослину. Воду мох вбирає всією поверхнею."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielony kolor nie skleja organów. Marchew jest korzeniem spichrzowym. Mech ma chwytniki, łodyżkę i listki.",
              ua: "Зелений колір не склеює органи. Морква є запасаючим коренем. Мох має ризоїди, стебельце і листочки."
            }
          }
        ],
        explanation: {
          pl: "Marchew ma korzeń. Chwytniki mchu tylko przytwierdzają roślinę.",
          ua: "Морква має корінь. Ризоїди моху лише прикріплюють рослину."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Puszka", ua: "Поняття. Коробочка" },
      visual: vizGh("l25-puszka.png", {
        alt: { pl: "Puszka zarodniona na trzonku nad mchem", ua: "Коробочка зі спорами на ніжці над мохом" },
        title: { pl: "Zarodniki sypią się z puszki.", ua: "Спори сиплються з коробочки." },
        prompt: { pl: "Plansza lekcji 25: puszka i zarodniki." }
      }),
      text: {
        pl: [
          ["Na szczycie mchu bywa ", em("puszka zarodniona"), " na cienkim trzonku. W niej powstają ", em("zarodniki"), "."],
          "Zarodnik to drobna komórka do rozsiewu. To nie nasiono i nie kwiat. Z blaszek kapelusza sypią się zarodniki grzyba, nie mchu.",
          "Do zapłodnienia mchom potrzebna jest kropla wody. Dlatego znów wraca wilgoć. Paprocie też mają zarodniki, ale inną budowę — to następna lekcja."
        ],
        ua: [
          ["На верхівці моху буває ", em("коробочка зі спорами"), " на тонкій ніжці. У ній виникають ", em("спори"), "."],
          "Спора — це дрібна клітина для поширення. Це не насіння і не квітка. З пластинок шапинки сиплються спори гриба, не моху.",
          "Для запліднення мохам потрібна крапля води. Тому знову повертається волога. Папороті теж мають спори, але іншу будову — це наступний урок."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Proszek z puszki", ua: "Приклад. Порошок із коробочки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Nad zielonym mchem stoi cienki trzonek."],
            ua: ["Над зеленим мохом стоїть тонка ніжка."]
          }
        },
        {
          text: {
            pl: ["Na nim puszka. W środku dojrzewają zarodniki."],
            ua: ["На ній коробочка. Всередині достигають спори."]
          }
        },
        {
          text: {
            pl: ["Proszek się rozsiewa. Kwiatu na tej roślinie nie ma."],
            ua: ["Порошок розсіюється. Квітки на цій рослині немає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skąd proszek", ua: "Коротке питання. Звідки порошок" },
      task: {
        id: "l25-g4",
        type: "single-choice",
        question: {
          pl: "Gdzie u mchu powstają zarodniki?",
          ua: "Де в моху виникають спори?"
        },
        options: [
          { id: "a", label: { pl: "w puszce zarodnionej na trzonku", ua: "у коробочці зі спорами на ніжці" } },
          { id: "b", label: { pl: "w kwiecie, bo zarodnik jest nasionem", ua: "у квітці, бо спора є насінням" } },
          { id: "c", label: { pl: "w blaszkach kapelusza", ua: "у пластинках шапинки" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj puszki nad mchem, nie kapelusza i nie kwiatu.",
          ua: "Шукай коробочку над мохом, не шапинку і не квітку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie ma kwiatu ani nasion. Zarodniki powstają w puszce. Nasiona przyjdą później.",
              ua: "Мох не має квітки і насіння. Спори виникають у коробочці. Насіння прийде пізніше."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Blaszki należą do owocnika grzyba. U mchu zarodniki powstają w puszce na trzonku.",
              ua: "Пластинки належать до плодового тіла гриба. У моху спори виникають у коробочці на ніжці."
            }
          }
        ],
        explanation: {
          pl: "Zarodniki mchu powstają w puszce zarodnionej.",
          ua: "Спори моху виникають у коробочці зі спорами."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Proszek z kapelusza", ua: "Типова помилка. Порошок із шапинки" },
      claim: {
        pl: "„Skoro sypie się proszek, to mech ma blaszki grzyba.”",
        ua: "«Якщо сиплеться порошок, то мох має пластинки гриба.»"
      },
      text: {
        pl: [
          "Proszek grzyba sypie się z blaszek kapelusza.",
          "U mchu zarodniki powstają w puszce. To nie nasiona."
        ],
        ua: [
          "Порошок гриба сиплеться з пластинок шапинки.",
          "У моху спори виникають у коробочці. Це не насіння."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Brązowa puszka", ua: "Сам. Коричнева коробочка" },
      task: {
        id: "l25-p4",
        type: "single-choice",
        question: {
          pl: "Nad mchem widać brązową puszkę na cienkim trzonku. Sypie się z niej drobny proszek. Uczeń mówi, że to nasiona z kwiatu, którego nie widać. Co poprawić?",
          ua: "Над мохом видно коричневу коробочку на тонкій ніжці. З неї сиплеться дрібний порошок. Учень каже, що це насіння з квітки, якої не видно. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to zarodniki z puszki; mech nie ma kwiatu ani nasion", ua: "це спори з коробочки; мох не має квітки і насіння" } },
          { id: "b", label: { pl: "tak — ukryty kwiat i tak robi nasiona w puszce", ua: "так — схована квітка все одно робить насіння в коробочці" } },
          { id: "c", label: { pl: "tak — proszek to nasiona jabłoni, więc mech ma kwiat", ua: "так — порошок є насінням яблуні, тож мох має квітку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie ma kwiatu. W puszce powstają zarodniki, drobne komórki do rozsiewu, nie nasiona.",
              ua: "Мох не має квітки. У коробочці виникають спори, дрібні клітини для поширення, не насіння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kwiat i nasiona są później. Proszek z puszki mchu to zarodniki.",
              ua: "Квітка і насіння є пізніше. Порошок із коробочки моху — це спори."
            }
          }
        ],
        explanation: {
          pl: "Z puszki sypią się zarodniki. Mech nie ma kwiatu ani nasion.",
          ua: "З коробочки сиплються спори. Мох не має квітки і насіння."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Woda i torf", ua: "Поняття. Вода і торф" },
      visual: vizGh("l25-torfowiec.png", {
        alt: { pl: "Poduszka mchu, torfowiec i warstwa torfu", ua: "Подушка моху, сфагнум і шар торфу" },
        title: { pl: "Gąbka w lesie. Torf na bagnie.", ua: "Губка в лісі. Торф на болоті." },
        prompt: { pl: "Plansza lekcji 25: znaczenie mchów." }
      }),
      text: {
        pl: [
          "Poduszka mchu działa jak gąbka: chłonie deszcz i powoli oddaje wodę. Chroni glebę przed szybkim spływem i daje schronienie drobnym zwierzętom.",
          ["", em("Torfowiec"), " żyje na torfowisku i trzyma szczególnie dużo wody."],
          ["Z obumarłych mchów, gdy brakuje powietrza, powstaje ", em("torf"), ". To zalegające szczątki roślin, nie korzeń marchwi i nie bulwa ziemniaka."]
        ],
        ua: [
          "Подушка моху діє як губка: вбирає дощ і повільно віддає воду. Захищає ґрунт від швидкого змиву і дає сховок дрібним тваринам.",
          ["", em("Сфагнум"), " живе на болоті і тримає особливо багато води."],
          ["З відмерлих мохів, коли бракує повітря, виникає ", em("торф"), ". Це покладені рештки рослин, не корінь моркви і не бульба картоплі."]
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
            pl: ["Deszcz wsiąka w poduszkę i nie spływa od razu."],
            ua: ["Дощ убирається в подушку і не стікає одразу."]
          }
        },
        {
          text: {
            pl: ["Na bagnie torfowiec trzyma jeszcze więcej wody."],
            ua: ["На болоті сфагнум тримає ще більше води."]
          }
        },
        {
          text: {
            pl: ["Pod spodem ciemna warstwa to torf: szczątki roślin, nie ziemniak."],
            ua: ["Знизу темний шар — це торф: рештки рослин, не картопля."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ciemna warstwa", ua: "Коротке питання. Темний шар" },
      task: {
        id: "l25-g5",
        type: "single-choice",
        question: {
          pl: "Czym torf różni się od torfowca?",
          ua: "Чим торф відрізняється від сфагнуму?"
        },
        options: [
          { id: "a", label: { pl: "torfowiec to żywy mech na bagnie; torf to szczątki obumarłych mchów", ua: "сфагнум — це живий мох на болоті; торф — це рештки відмерлих мохів" } },
          { id: "b", label: { pl: "to samo słowo: żywy mech jest już torfem", ua: "те саме слово: живий мох уже є торфом" } },
          { id: "c", label: { pl: "torf to bulwa, a torfowiec to nasiono", ua: "торф — це бульба, а сфагнум — це насіння" } }
        ],
        answer: "a",
        hint: {
          pl: "Jeden jest żywą poduszką. Drugi zostaje po obumarłych mchach.",
          ua: "Один є живою подушкою. Другий лишається після відмерлих мохів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Torfowiec jest żywym mchem i trzyma wodę. Torf powstaje z obumarłych mchów, gdy brakuje powietrza.",
              ua: "Сфагнум є живим мохом і тримає воду. Торф постає з відмерлих мохів, коли бракує повітря."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bulwa jest pędem, a nasiono przyjdzie później. Torfowiec jest mchem. Torf to szczątki roślin.",
              ua: "Бульба є пагоном, а насіння прийде пізніше. Сфагнум є мохом. Торф — це рештки рослин."
            }
          }
        ],
        explanation: {
          pl: "Torfowiec jest żywym mchem. Torf powstaje z obumarłych mchów.",
          ua: "Сфагнум є живим мохом. Торф постає з відмерлих мохів."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ciemna marchew", ua: "Типова помилка. Темна морква" },
      claim: {
        pl: "„Torf leży pod ziemią, więc jest korzeniem spichrzowym.”",
        ua: "«Торф лежить під землею, тож є запасаючим коренем.»"
      },
      text: {
        pl: [
          "Miejsce w glebie nie wybiera organu.",
          "Torf to zalegające szczątki roślin. Marchew jest korzeniem, ziemniak jest pędem."
        ],
        ua: [
          "Місце в ґрунті не вибирає орган.",
          "Торф — це покладені рештки рослин. Морква є коренем, картопля є пагоном."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Warstwa na bagnie", ua: "Сам. Шар на болоті" },
      task: {
        id: "l25-p5",
        type: "single-choice",
        question: {
          pl: "Na bagnie żyje mech, który trzyma bardzo dużo wody. Pod nim jest ciemna warstwa. Uczeń nazywa żywy mech torfem, a warstwę ziemniakiem. Co poprawić?",
          ua: "На болоті живе мох, який тримає дуже багато води. Під ним є темний шар. Учень називає живий мох торфом, а шар картоплею. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "żywy mech to torfowiec; ciemna warstwa to torf, szczątki roślin", ua: "живий мох — це сфагнум; темний шар — це торф, рештки рослин" } },
          { id: "b", label: { pl: "tak — co leży niżej, jest bulwą z oczkami", ua: "так — те, що лежить нижче, є бульбою з вічками" } },
          { id: "c", label: { pl: "tak — torfowiec jest porostem, więc wody nie trzyma", ua: "так — сфагнум є лишайником, тож води не тримає" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Oczka ma bulwa ziemniaka, a to pęd. Ciemna warstwa na bagnie to torf: szczątki obumarłych mchów. Żywy mech, który trzyma wodę, to torfowiec.",
              ua: "Вічка має бульба картоплі, а це пагін. Темний шар на болоті — це торф: рештки відмерлих мохів. Живий мох, який тримає воду, — це сфагнум."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost to grzyb z glonem albo sinicami. Torfowiec jest mchem i trzyma dużo wody. Torf powstaje z obumarłych mchów.",
              ua: "Лишайник — це гриб із водорістю або ціанобактеріями. Сфагнум є мохом і тримає багато води. Торф постає з відмерлих мохів."
            }
          }
        ],
        explanation: {
          pl: "Torfowiec jest żywym mchem. Torf to szczątki obumarłych mchów.",
          ua: "Сфагнум є живим мохом. Торф — це рештки відмерлих мохів."
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
      heading: { pl: "Sprawdzian 1. Dach od północy", ua: "Перевірка 1. Дах із півночі" },
      task: {
        id: "l25-t1",
        type: "single-choice",
        question: {
          pl: "Na północnej, wilgotnej stronie dachu rośnie zielona poduszka. Na suchej południowej jej nie ma. Uczeń mówi, że poduszka wybrała słońce pustyni i jest porostem. Co pasuje do lekcji?",
          ua: "На північному, вологому боці даху росте зелена подушка. На сухому південному її немає. Учень каже, що подушка обрала сонце пустелі і є лишайником. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to mech: wybiera wilgoć, często cień; porost jest innym organizmem", ua: "це мох: обирає вологу, часто затінок; лишайник є іншим організмом" } },
          { id: "b", label: { pl: "tak — mech rośnie tylko tam, gdzie jest najsuchsze", ua: "так — мох росте лише там, де найсухіше" } },
          { id: "c", label: { pl: "tak — każda zielona poduszka na dachu jest glonem oceanu", ua: "так — кожна зелена подушка на даху є водорістю океану" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie wybiera suszy. Rośnie tam, gdzie wilgotno, często w cieniu. Na suchym dachu poduszki nie ma.",
              ua: "Мох не обирає посуху. Росте там, де волого, часто в затінку. На сухому даху подушки немає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech nie jest glonem. To roślina lądowa zależna od wody. Porost też jest kimś innym: grzybem z glonem albo sinicami.",
              ua: "Мох не є водорістю. Це наземна рослина, залежна від води. Лишайник теж є іншим: грибом із водорістю або ціанобактеріями."
            }
          }
        ],
        explanation: {
          pl: "Mech wybiera wilgotne miejsce. Nie jest porostem ani glonem.",
          ua: "Мох обирає вологе місце. Не є лишайником і не є водорістю."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Zielone i nitki", ua: "Перевірка 2. Зелене і нитки" },
      task: {
        id: "l25-t2",
        type: "single-choice",
        question: {
          pl: "Na mchu widać drobne zielone części, cienką oś i nitki przy kamieniu. Uczeń podpisuje je: blaszka dębu, pień, włośniki. Co pasuje do lekcji?",
          ua: "На моху видно дрібні зелені частини, тонку вісь і нитки біля каменя. Учень підписує їх: пластинка дуба, стовбур, волоски. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "listki, łodyżka i chwytniki", ua: "листочки, стебельце і ризоїди" } },
          { id: "b", label: { pl: "tak — zielone zawsze jest blaszką, a oś zawsze ma słoje", ua: "так — зелене завжди є пластинкою, а вісь завжди має кільця" } },
          { id: "c", label: { pl: "kapelusz, trzon i blaszki", ua: "шапинка, ніжка і пластинки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Blaszka i słoje należą do drzewa. Mech ma listki, cienką łodyżkę bez słojów i chwytniki.",
              ua: "Пластинка і кільця належать до дерева. Мох має листочки, тонке стебельце без кілець і ризоїди."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapelusz, trzon i blaszki to grzyb. Na zielonym mchu podpisujesz listki, łodyżkę i chwytniki.",
              ua: "Шапинка, ніжка і пластинки — це гриб. На зеленому моху підписуєш листочки, стебельце і ризоїди."
            }
          }
        ],
        explanation: {
          pl: "Trzy części mchu to listki, łodyżka i chwytniki.",
          ua: "Три частини моху — це листочки, стебельце і ризоїди."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Nitki przy kamieniu", ua: "Перевірка 3. Нитки біля каменя" },
      task: {
        id: "l25-t3",
        type: "single-choice",
        question: {
          pl: "Nitki przy kamieniu nie mają czepca ani włośników. Uczeń i tak nazywa je korzeniem, bo mech się nimi trzyma. Co pasuje do lekcji?",
          ua: "Нитки біля каменя не мають чохлика і волосків. Учень усе одно називає їх коренем, бо мох ними тримається. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to chwytniki: przytwierdzają, a wodę mech wciąga całą powierzchnią", ua: "це ризоїди: прикріплюють, а воду мох вбирає всією поверхнею" } },
          { id: "b", label: { pl: "tak — trzymanie się kamienia zamienia nitki w korzeń z włośnikami", ua: "так — тримання каменя перетворює нитки на корінь із волосками" } },
          { id: "c", label: { pl: "tak — nitki są puszką, bo leżą nisko", ua: "так — нитки є коробочкою, бо лежать низько" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Trzymanie się podłoża nie dokłada czepca i włośników. Chwytniki tylko przytwierdzają. Wodę mech wciąga całą powierzchnią.",
              ua: "Тримання поверхні не додає чохлика і волосків. Ризоїди лише прикріплюють. Воду мох вбирає всією поверхнею."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka stoi na trzonku u szczytu i tworzy zarodniki. Nitki przy kamieniu to chwytniki.",
              ua: "Коробочка стоїть на ніжці на верхівці і утворює спори. Нитки біля каменя — це ризоїди."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki przytwierdzają mech i nie są korzeniem.",
          ua: "Ризоїди прикріплюють мох і не є коренем."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Kropla i proszek", ua: "Перевірка 4. Крапля і порошок" },
      task: {
        id: "l25-t4",
        type: "single-choice",
        question: {
          pl: "Po deszczu z puszki na trzonku sypie się proszek. Uczeń mówi, że deszcz zrobił z mchu kwiat, a proszek jest nasionami. Co pasuje do lekcji?",
          ua: "Після дощу з коробочки на ніжці сиплеться порошок. Учень каже, що дощ зробив із моху квітку, а порошок є насінням. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "proszek to zarodniki; kropla wody jest potrzebna do zapłodnienia, nie do kwiatu", ua: "порошок — це спори; крапля води потрібна для запліднення, не для квітки" } },
          { id: "b", label: { pl: "tak — każda kropla zamienia puszkę w kwiat jabłoni", ua: "так — кожна крапля перетворює коробочку на квітку яблуні" } },
          { id: "c", label: { pl: "tak — proszek spada z blaszek, więc to grzyb", ua: "так — порошок падає з пластинок, тож це гриб" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech nie ma kwiatu ani nasion. Kropla wody jest potrzebna do zapłodnienia. Proszek z puszki to zarodniki.",
              ua: "Мох не має квітки і насіння. Крапля води потрібна для запліднення. Порошок із коробочки — це спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Blaszki ma kapelusz grzyba. U mchu proszek sypie się z puszki na trzonku. To zarodniki.",
              ua: "Пластинки має шапинка гриба. У моху порошок сиплеться з коробочки на ніжці. Це спори."
            }
          }
        ],
        explanation: {
          pl: "Z puszki sypią się zarodniki. Mech nie ma kwiatu. Kropla wody służy zapłodnieniu.",
          ua: "З коробочки сиплються спори. Мох не має квітки. Крапля води служить заплідненню."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Gąbka i ciemny spód", ua: "Перевірка 5. Губка і темний спід" },
      task: {
        id: "l25-t5",
        type: "single-choice",
        question: {
          pl: "Po deszczu poduszka na bagnie długo zostaje mokra. Pod nią leży ciemna warstwa bez oczek. Uczeń mówi, że poduszka nic nie trzyma, a warstwa jest ziemniakiem. Co pasuje do lekcji?",
          ua: "Після дощу подушка на болоті довго лишається мокрою. Під нею лежить темний шар без вічок. Учень каже, що подушка нічого не тримає, а шар є картоплею. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "poduszka, często torfowiec, zatrzymuje wodę; ciemna warstwa to torf", ua: "подушка, часто сфагнум, затримує воду; темний шар — це торф" } },
          { id: "b", label: { pl: "tak — mokra poduszka jest bulwą, bo leży nisko", ua: "так — мокра подушка є бульбою, бо лежить низько" } },
          { id: "c", label: { pl: "tak — ciemna warstwa jest nasionem marchwi", ua: "так — темний шар є насінням моркви" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Niskie miejsce nie robi bulwy. Poduszka mchu zatrzymuje wodę. Ziemniak ma oczka i jest pędem. Ciemna warstwa bez oczek to torf.",
              ua: "Низьке місце не робить бульбу. Подушка моху затримує воду. Картопля має вічка і є пагоном. Темний шар без вічок — це торф."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Marchew jest korzeniem spichrzowym, a nasiona przyjdą później. Ciemna warstwa na bagnie to torf: szczątki obumarłych mchów.",
              ua: "Морква є запасаючим коренем, а насіння прийде пізніше. Темний шар на болоті — це торф: рештки відмерлих мохів."
            }
          }
        ],
        explanation: {
          pl: "Mech zatrzymuje wodę. Torf to szczątki obumarłych mchów, nie ziemniak.",
          ua: "Мох затримує воду. Торф — це рештки відмерлих мохів, не картопля."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l25-budowa.png", {
        alt: { pl: "Listki, łodyżka i chwytniki mchu", ua: "Листочки, стебельце і ризоїди моху" },
        title: { pl: "Drobna roślina. Inne nazwy.", ua: "Дрібна рослина. Інші назви." },
        prompt: { pl: "Ta sama plansza budowy mchu." }
      }),
      text: {
        pl: [
          "Mech jest rośliną wilgotnych, często cienistych miejsc. Wodę wciąga całą powierzchnią.",
          "Ma listki, łodyżkę i chwytniki. Chwytniki nie są korzeniem.",
          "Zarodniki powstają w puszce. Kwiatu i nasion nie ma. Do zapłodnienia potrzebna jest kropla wody.",
          "Poduszka zatrzymuje wodę. Z torfowca na bagnie powstaje torf. Następna lekcja to paprocie."
        ],
        ua: [
          "Мох є рослиною вологих, часто затінених місць. Воду вбирає всією поверхнею.",
          "Має листочки, стебельце і ризоїди. Ризоїди не є коренем.",
          "Спори виникають у коробочці. Квітки і насіння немає. Для запліднення потрібна крапля води.",
          "Подушка затримує воду. Зі сфагнуму на болоті постає торф. Наступний урок — папороті."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wskażę wilgotne środowisko mchów.", ua: "Вкажу вологе середовище мохів." },
        { pl: "Nazwę listki, łodyżkę i chwytniki.", ua: "Назву листочки, стебельце і ризоїди." },
        { pl: "Powiem, że chwytniki nie są korzeniem.", ua: "Скажу, що ризоїди не є коренем." },
        { pl: "Opiszę puszkę i zarodniki.", ua: "Опишу коробочку і спори." },
        { pl: "Powiem, że mchy zatrzymują wodę, a z torfowca powstaje torf.", ua: "Скажу, що мохи затримують воду, а зі сфагнуму постає торф." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
