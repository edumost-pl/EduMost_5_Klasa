function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L11_Cudzozywnosc/images/";

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
      heading: { pl: "Misja: gotowy pokarm", ua: "Місія: готова пожива" },
      visual: vizGh("l11-zacznijmy.png", {
        alt: { pl: "Zając je trawę", ua: "Заєць їсть траву" },
        title: { pl: "Trawa robi pokarm. Zając musi go zjeść.", ua: "Трава робить поживу. Заєць мусить її з’їсти." },
        prompt: { pl: "Zdjęcie lekcji 11: zając je trawę." }
      }),
      text: {
        pl: [
          "To lekcja 11: cudzożywność. Zielona trawa sama robi pokarm w chloroplastach. Zając chloroplastów nie ma, więc zjada roślinę.",
          "Dziś zobaczysz główne sposoby pobierania gotowego pokarmu. Katalogu królestw nie robimy — to lekcja 15.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 11: гетеротрофне живлення. Зелена трава сама робить поживу в хлоропластах. Заєць хлоропластів не має, тож з’їдає рослину.",
          "Сьогодні побачиш головні способи брати готову поживу. Каталогу царств не робимо — це урок 15.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "cudzożywność", ua: "гетеротрофне живлення — готова пожива від інших" },
        { pl: "samożywność", ua: "саможивлення — організм сам виробляє поживу" },
        { pl: "roślinożerca", ua: "рослиноїдний — їсть рослини" },
        { pl: "mięsożerca", ua: "м’ясоїдний — їсть інших тварин" },
        { pl: "wszystkożerca", ua: "всеїдний — їсть і рослини, і тварин" },
        { pl: "saprobiont", ua: "сапробіонт — живиться мертвими рештками" },
        { pl: "pasożyt", ua: "паразит — бере поживу з живого хазяїна" },
        { pl: "gospodarz", ua: "хазяїн — живий організм, на якому живе паразит" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cudzożywność", ua: "Поняття. Гетеротрофне живлення" },
      visual: vizGh("l11-cudzo.png", {
        alt: { pl: "Roślina wytwarza pokarm, zwierzęta i grzyb go pobierają", ua: "Рослина виробляє поживу, тварини і гриб її беруть" },
        title: { pl: "Pokarm jest gotowy. Pochodzi od innych organizmów.", ua: "Пожива готова. Походить від інших організмів." },
        prompt: { pl: "Plansza lekcji 11: samożywność i cudzożywność." }
      }),
      text: {
        pl: [
          [em("Cudzożywność"), " to odżywianie się gotowymi substancjami odżywczymi, które wytworzyły inne organizmy albo które zostały w ich szczątkach."],
          "Cudzożywne są zwierzęta, grzyby i wiele bakterii. Człowiek też.",
          "Samożywna roślina sama wytwarza pokarm, na przykład w fotosyntezie. Bez takich organizmów cudzożywne nie miałyby źródła pokarmu na dłuższą metę."
        ],
        ua: [
          [em("Гетеротрофне живлення"), " — це живлення готовими поживними речовинами, які виробили інші організми або які лишилися в їхніх рештках."],
          "Гетеротрофні — тварини, гриби і багато бактерій. Людина теж.",
          "Саможивна рослина сама виробляє поживу, наприклад у фотосинтезі. Без таких організмів гетеротрофам бракувало б джерела поживи надовго."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trawa i zając", ua: "Приклад. Трава і заєць" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trawa ma chloroplasty. Sama robi pokarm. Jest samożywna."],
            ua: ["Трава має хлоропласти. Сама робить поживу. Вона саможивна."]
          }
        },
        {
          text: {
            pl: ["Zając zjada trawę. Bierze gotowe substancje. Jest cudzożywny."],
            ua: ["Заєць з’їдає траву. Бере готові речовини. Він гетеротрофний."]
          }
        },
        {
          text: {
            pl: ["Zjedzenie trawy nie zamienia zająca w roślinę i nie daje mu chloroplastów."],
            ua: ["З’їдання трави не перетворює зайця на рослину і не дає йому хлоропластів."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jaka różnica?", ua: "Коротке питання. Яка різниця?" },
      task: {
        id: "l11-g1",
        type: "single-choice",
        question: {
          pl: "Czym cudzożywność różni się od samożywności?",
          ua: "Чим гетеротрофне живлення відрізняється від саможивлення?"
        },
        options: [
          { id: "a", label: { pl: "cudzożywny pobiera gotowy pokarm; samożywny sam go wytwarza", ua: "гетеротроф бере готову поживу; саможивний сам її виробляє" } },
          { id: "b", label: { pl: "cudzożywny ma chloroplasty, samożywny ich nie ma", ua: "гетеротроф має хлоропласти, саможивний їх не має" } },
          { id: "c", label: { pl: "to dwa słowa na tę samą fotosyntezę", ua: "це два слова на той самий фотосинтез" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj gotowego pokarmu po jednej stronie i wytwarzania po drugiej.",
          ua: "Шукай готову поживу з одного боку і вироблення з другого."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplasty są u samożywnej rośliny. Cudzożywny ich nie używa do wytwarzania pokarmu.",
              ua: "Хлоропласти є в саможивної рослини. Гетеротроф не використовує їх, щоб виробляти поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza to samożywność. Cudzożywność zaczyna się od gotowego pokarmu, nie od chloroplastu.",
              ua: "Фотосинтез — це саможивлення. Гетеротрофне живлення починається з готової поживи, не з хлоропласта."
            }
          }
        ],
        explanation: {
          pl: "Cudzożywny pobiera gotowy pokarm. Samożywny sam go wytwarza.",
          ua: "Гетеротроф бере готову поживу. Саможивний сам її виробляє."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zając z chloroplastami", ua: "Типова помилка. Заєць із хлоропластами" },
      claim: {
        pl: "„Cudzożywny ma chloroplasty, bo je rośliny.”",
        ua: "«Гетеротроф має хлоропласти, бо їсть рослини.»"
      },
      text: {
        pl: [
          "Jedzenie rośliny nie przenosi chloroplastów do zająca.",
          "Chloroplasty zostają u samożywnej trawy. Zając tylko pobiera gotowy pokarm."
        ],
        ua: [
          "Їжа рослини не переносить хлоропласти до зайця.",
          "Хлоропласти лишаються в саможивної трави. Заєць лише бере готову поживу."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Niedźwiedź i dąb", ua: "Сам. Ведмідь і дуб" },
      task: {
        id: "l11-p1",
        type: "single-choice",
        question: {
          pl: "Który organizm jest cudzożywny?",
          ua: "Який організм гетеротрофний?"
        },
        options: [
          { id: "a", label: { pl: "niedźwiedź", ua: "ведмідь" } },
          { id: "b", label: { pl: "dąb prowadzący fotosyntezę", ua: "дуб, що веде фотосинтез" } },
          { id: "c", label: { pl: "oba, bo oba są zielone", ua: "обидва, бо обидва зелені" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dąb sam wytwarza pokarm w fotosyntezie. To samożywność. Cudzożywny jest niedźwiedź, bo pobiera gotowy pokarm.",
              ua: "Дуб сам виробляє поживу у фотосинтезі. Це саможивлення. Гетеротрофним є ведмідь, бо бере готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielony jest dąb, nie niedźwiedź. Kolor liścia nie robi ze zwierzęcia rośliny samożywnej.",
              ua: "Зеленим є дуб, не ведмідь. Колір листка не робить із тварини саможивну рослину."
            }
          }
        ],
        explanation: {
          pl: "Niedźwiedź pobiera gotowy pokarm. Dąb sam go wytwarza.",
          ua: "Ведмідь бере готову поживу. Дуб сам її виробляє."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy diety zwierząt", ua: "Поняття. Три дієти тварин" },
      visual: vizGh("l11-diety.png", {
        alt: { pl: "Roślinożerca, mięsożerca i wszystkożerca", ua: "Рослиноїдний, м’ясоїдний і всеїдний" },
        title: { pl: "To sposoby jedzenia, nie królestwa.", ua: "Це способи їжі, не царства." },
        prompt: { pl: "Kolaż lekcji 11: trzy diety zwierząt." }
      }),
      text: {
        pl: [
          [em("Roślinożerca"), " je rośliny lub ich części. Przykład: zając, krowa, gąsienica."],
          [em("Mięsożerca"), " je inne zwierzęta. Przykład: lis, jaskółka, która łapie owady, szczupak."],
          [em("Wszystkożerca"), " je i pokarm roślinny, i zwierzęcy. Przykład: dzik, człowiek, niedźwiedź."],
          "To sposoby odżywiania zwierząt. Wszystkie trzy grupy są cudzożywne."
        ],
        ua: [
          [em("Рослиноїдний"), " їсть рослини або їхні частини. Приклад: заєць, корова, гусінь."],
          [em("М’ясоїдний"), " їсть інших тварин. Приклад: лисиця, ластівка, що ловить комах, щука."],
          [em("Всеїдний"), " їсть і рослинну, і тваринну поживу. Приклад: кабан, людина, ведмідь."],
          "Це способи живлення тварин. Усі три групи гетеротрофні."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Łąka", ua: "Приклад. Лука" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Zając je trawę. Roślinożerca."],
            ua: ["Заєць їсть траву. Рослиноїдний."]
          }
        },
        {
          text: {
            pl: ["Lis zjada zająca. Mięsożerca."],
            ua: ["Лисиця з’їдає зайця. М’ясоїдна."]
          }
        },
        {
          text: {
            pl: ["Człowiek je i chleb, i ser. Wszystkożerca. Żadne z nich nie robi fotosyntezy."],
            ua: ["Людина їсть і хліб, і сир. Всеїдна. Жоден із них не робить фотосинтез."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto co je?", ua: "Коротке питання. Хто що їсть?" },
      task: {
        id: "l11-g2",
        type: "single-choice",
        question: {
          pl: "Które połączenie jest poprawne?",
          ua: "Яке поєднання правильне?"
        },
        options: [
          { id: "a", label: { pl: "zając — roślinożerca; lis — mięsożerca; człowiek — wszystkożerca", ua: "заєць — рослиноїдний; лисиця — м’ясоїдна; людина — всеїдна" } },
          { id: "b", label: { pl: "lis — samożywny; zając — mięsożerca; człowiek — roślina", ua: "лисиця — саможивна; заєць — м’ясоїдний; людина — рослина" } },
          { id: "c", label: { pl: "wszystkie trzy wytwarzają glukozę w chloroplastach", ua: "усі три виробляють глюкозу в хлоропластах" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz, co jedzą: rośliny, inne zwierzęta albo i to, i to.",
          ua: "Дивись, що їдять: рослини, інших тварин або і те, і те."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lis je inne zwierzęta, więc jest mięsożercą, nie rośliną samożywną. Zając je rośliny.",
              ua: "Лисиця їсть інших тварин, тож вона м’ясоїдна, не саможивна рослина. Заєць їсть рослини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Glukozę w chloroplastach wytwarza samożywna roślina. Te trzy organizmy pobierają gotowy pokarm.",
              ua: "Глюкозу в хлоропластах виробляє саможивна рослина. Ці три організми беруть готову поживу."
            }
          }
        ],
        explanation: {
          pl: "Zając je rośliny, lis je zwierzęta, człowiek je jedne i drugie.",
          ua: "Заєць їсть рослини, лисиця їсть тварин, людина їсть і те, і те."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Dieta to królestwo", ua: "Типова помилка. Дієта — це царство" },
      claim: {
        pl: "„Roślinożerca, mięsożerca i wszystkożerca to trzy królestwa organizmów.”",
        ua: "«Рослиноїдний, м’ясоїдний і всеїдний — це три царства організмів.»"
      },
      text: {
        pl: [
          "To tylko sposoby jedzenia zwierząt.",
          "Królestwa uporządkujesz później. Dziś liczy się, co zwierzę zjada."
        ],
        ua: [
          "Це лише способи їжі тварин.",
          "Царства впорядкуєш пізніше. Сьогодні важливе те, що тварина з’їдає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Gąsienica na liściu", ua: "Сам. Гусінь на листку" },
      task: {
        id: "l11-p2",
        type: "single-choice",
        question: {
          pl: "Gąsienica zjada liście. Jaki to sposób odżywiania?",
          ua: "Гусінь з’їдає листки. Який це спосіб живлення?"
        },
        options: [
          { id: "a", label: { pl: "roślinożerca", ua: "рослиноїдний" } },
          { id: "b", label: { pl: "mięsożerca", ua: "м’ясоїдний" } },
          { id: "c", label: { pl: "saprobiont, bo liść jest rośliną", ua: "сапробіонт, бо листок є рослиною" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mięsożerca je inne zwierzęta. Gąsienica je liście, więc jest roślinożercą.",
              ua: "М’ясоїдний їсть інших тварин. Гусінь їсть листки, тож вона рослиноїдна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Saprobiont bierze martwe szczątki. Gąsienica zjada części żywej rośliny. To roślinożerność.",
              ua: "Сапробіонт бере мертві рештки. Гусінь з’їдає частини живої рослини. Це рослиноїдність."
            }
          }
        ],
        explanation: {
          pl: "Gąsienica je rośliny, więc jest roślinożercą.",
          ua: "Гусінь їсть рослини, тож вона рослиноїдна."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Saprobiont", ua: "Поняття. Сапробіонт" },
      visual: vizGh("l11-saprobiont.png", {
        alt: { pl: "Grzyby na martwym pniu", ua: "Гриби на мертвому пні" },
        title: { pl: "Pokarm ze szczątków.", ua: "Пожива з решток." },
        prompt: { pl: "Zdjęcie lekcji 11: grzyby na spróchniałym pniu." }
      }),
      text: {
        pl: [
          [em("Saprobiont"), " odżywia się martwymi szczątkami organizmów: opadłymi liśćmi, drewnem, resztkami jedzenia."],
          "Tak żyje wiele grzybów i bakterii. Rozkładają szczątki, więc substancje wracają do gleby.",
          "To nadal cudzożywność. Pokarm jest gotowy, tylko pochodzi ze szczątków, nie z polowania."
        ],
        ua: [
          [em("Сапробіонт"), " живиться мертвими рештками організмів: опалим листям, деревиною, залишками їжі."],
          "Так живуть багато грибів і бактерій. Розкладають рештки, тож речовини повертаються в ґрунт.",
          "Це й далі гетеротрофне живлення. Пожива готова, лише походить із решток, не з полювання."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Grzyb na pniu", ua: "Приклад. Гриб на пні" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pień jest martwy. Grzyb nie goni zwierzęcia i nie ma chloroplastów."],
            ua: ["Пень мертвий. Гриб не женеться за твариною і не має хлоропластів."]
          }
        },
        {
          text: {
            pl: ["Bierze pokarm z drewna. To saprobiont."],
            ua: ["Бере поживу з деревини. Це сапробіонт."]
          }
        },
        {
          text: {
            pl: ["Rozkład wraca substancje do gleby. To nadal gotowy pokarm, nie fotosynteza."],
            ua: ["Розклад повертає речовини в ґрунт. Це й далі готова пожива, не фотосинтез."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czym się żywi?", ua: "Коротке питання. Чим живиться?" },
      task: {
        id: "l11-g3",
        type: "single-choice",
        question: {
          pl: "Czym odżywia się saprobiont?",
          ua: "Чим живиться сапробіонт?"
        },
        options: [
          { id: "a", label: { pl: "martwymi szczątkami organizmów", ua: "мертвими рештками організмів" } },
          { id: "b", label: { pl: "światłem w chloroplastach, jak trawa", ua: "світлом у хлоропластах, як трава" } },
          { id: "c", label: { pl: "tylko żywego lisa, którego goni", ua: "лише живу лисицю, за якою женеться" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj martwego pnia, opadłych liści albo resztek, nie polowania.",
          ua: "Шукай мертвий пень, опале листя або рештки, не полювання."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Światło i chloroplasty to samożywność trawy. Saprobiont bierze gotowy pokarm ze szczątków.",
              ua: "Світло і хлоропласти — це саможивлення трави. Сапробіонт бере готову поживу з решток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gonienie żywego zwierzęcia to mięsożerność. Saprobiont zostaje przy martwych szczątkach.",
              ua: "Погоня за живою твариною — це м’ясоїдність. Сапробіонт лишається при мертвих рештках."
            }
          }
        ],
        explanation: {
          pl: "Saprobiont odżywia się martwymi szczątkami.",
          ua: "Сапробіонт живиться мертвими рештками."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Grzyb poluje", ua: "Типова помилка. Гриб полює" },
      claim: {
        pl: "„Grzyb na pniu jest mięsożercą, bo zjada pień jak lis zająca.”",
        ua: "«Гриб на пні м’ясоїдний, бо з’їдає пень, як лисиця зайця.»"
      },
      text: {
        pl: [
          "Pień nie jest żywym zwierzęciem. Jest szczątkiem.",
          "Grzyb jest saprobiontem. Lis, który zjada zająca, jest mięsożercą."
        ],
        ua: [
          "Пень не є живою твариною. Це рештка.",
          "Гриб є сапробіонтом. Лисиця, яка з’їдає зайця, є м’ясоїдною."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Bakterie na liściach", ua: "Сам. Бактерії на листі" },
      task: {
        id: "l11-p3",
        type: "single-choice",
        question: {
          pl: "Bakterie rozkładają opadłe liście w lesie. Jaki to sposób odżywiania?",
          ua: "Бактерії розкладають опале листя в лісі. Який це спосіб живлення?"
        },
        options: [
          { id: "a", label: { pl: "saprobiontyczny — martwe szczątki", ua: "сапробіонтний — мертві рештки" } },
          { id: "b", label: { pl: "pasożytniczy — żywy gospodarz", ua: "паразитичний — живий хазяїн" } },
          { id: "c", label: { pl: "samożywny — fotosynteza w tych liściach", ua: "саможивний — фотосинтез у цьому листі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pasożyt bierze pokarm z żywego gospodarza. Opadłe liście są już szczątkami, więc to saprobiont.",
              ua: "Паразит бере поживу з живого хазяїна. Опале листя вже є рештками, тож це сапробіонт."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosyntezę prowadził żywy liść. Opadłe liście bakterie rozkładają. To pokarm ze szczątków.",
              ua: "Фотосинтез вів живий листок. Опале листя бактерії розкладають. Це пожива з решток."
            }
          }
        ],
        explanation: {
          pl: "Bakterie na opadłych liściach są saprobiontami.",
          ua: "Бактерії на опалому листі є сапробіонтами."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pasożyt", ua: "Поняття. Паразит" },
      visual: vizGh("l11-pasozyt.png", {
        alt: { pl: "Kleszcz na źdźble trawy", ua: "Кліщ на стеблі трави" },
        title: { pl: "Pokarm z żywego gospodarza.", ua: "Пожива з живого хазяїна." },
        prompt: { pl: "Zdjęcie lekcji 11: kleszcz na źdźble, bez grozy." }
      }),
      text: {
        pl: [
          [em("Pasożyt"), " pobiera pokarm z żywego organizmu. Ten organizm nazywamy ", em("gospodarzem"), ". Gospodarz na tym traci."],
          "Przykłady: kleszcz na ssaku, tasiemiec w jelicie, kanianka — roślina bez chlorofilu — na innych roślinach.",
          "To nadal cudzożywność. Saprobiont bierze szczątki, pasożyt bierze pokarm z żywego gospodarza. Zając, który zjada trawę, jest roślinożercą, nie pasożytem trawy.",
          "Wirusów dziś nie rysujemy. Wrócą na lekcji 16."
        ],
        ua: [
          [em("Паразит"), " бере поживу з живого організму. Цей організм називаємо ", em("хазяїном"), ". Хазяїн на цьому втрачає."],
          "Приклади: кліщ на ссавці, стьожковий черв у кишці, повитиця — рослина без хлорофілу — на інших рослинах.",
          "Це й далі гетеротрофне живлення. Сапробіонт бере рештки, паразит бере поживу з живого хазяїна. Заєць, який з’їдає траву, є рослиноїдним, не паразитом трави.",
          "Вірусів сьогодні не малюємо. Повернуться на уроці 16."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kleszcz i pień", ua: "Приклад. Кліщ і пень" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kleszcz pobiera pokarm z żywego ssaka. Ssak jest gospodarzem."],
            ua: ["Кліщ бере поживу з живого ссавця. Ссавець є хазяїном."]
          }
        },
        {
          text: {
            pl: ["Grzyb na martwym pniu nie ma żywego gospodarza. To saprobiont."],
            ua: ["Гриб на мертвому пні не має живого хазяїна. Це сапробіонт."]
          }
        },
        {
          text: {
            pl: ["Kanianka jest rośliną, ale bez chlorofilu bierze pokarm z innej żywej rośliny. Wtedy roślina też jest pasożytem."],
            ua: ["Повитиця є рослиною, але без хлорофілу бере поживу з іншої живої рослини. Тоді рослина теж є паразитом."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Żywy czy martwy?", ua: "Коротке питання. Живий чи мертвий?" },
      task: {
        id: "l11-g4",
        type: "single-choice",
        question: {
          pl: "Czym pasożyt różni się od saprobionta?",
          ua: "Чим паразит відрізняється від сапробіонта?"
        },
        options: [
          { id: "a", label: { pl: "pasożyt pobiera pokarm z żywego gospodarza; saprobiont — z martwych szczątków", ua: "паразит бере поживу з живого хазяїна; сапробіонт — з мертвих решток" } },
          { id: "b", label: { pl: "oba wytwarzają glukozę w liściu moczarki", ua: "обидва виробляють глюкозу в листку елодеї" } },
          { id: "c", label: { pl: "nie ma różnicy: zając na trawie też jest pasożytem", ua: "немає різниці: заєць на траві теж є паразитом" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedno słowo rozdziela te sposoby: żywy gospodarz albo martwe szczątki.",
          ua: "Одне слово розділяє ці способи: живий хазяїн або мертві рештки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukoza w liściu moczarki to fotosynteza. I pasożyt, i saprobiont pobierają gotowy pokarm.",
              ua: "Глюкоза в листку елодеї — це фотосинтез. І паразит, і сапробіонт беруть готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zając zjada roślinę jako roślinożerca. Pasożyt żyje kosztem żywego gospodarza, saprobiont bierze szczątki.",
              ua: "Заєць з’їдає рослину як рослиноїдний. Паразит живе коштом живого хазяїна, сапробіонт бере рештки."
            }
          }
        ],
        explanation: {
          pl: "Pasożyt — żywy gospodarz. Saprobiont — martwe szczątki.",
          ua: "Паразит — живий хазяїн. Сапробіонт — мертві рештки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zając jest pasożytem trawy", ua: "Типова помилка. Заєць є паразитом трави" },
      claim: {
        pl: "„Zając, który zjada trawę, jest jej pasożytem.”",
        ua: "«Заєць, який з’їдає траву, є її паразитом.»"
      },
      text: {
        pl: [
          "Zając jest roślinożercą. Zjada roślinę, ale nie żyje na niej jako pasożyt.",
          "Pasożytem jest na przykład kleszcz, który pobiera pokarm z żywego gospodarza."
        ],
        ua: [
          "Заєць є рослиноїдним. З’їдає рослину, але не живе на ній як паразит.",
          "Паразитом є, наприклад, кліщ, який бере поживу з живого хазяїна."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kanianka", ua: "Сам. Повитиця" },
      task: {
        id: "l11-p4",
        type: "single-choice",
        question: {
          pl: "Kanianka nie ma chlorofilu i pobiera pokarm z innej żywej rośliny. Czym jest?",
          ua: "Повитиця не має хлорофілу і бере поживу з іншої живої рослини. Чим вона є?"
        },
        options: [
          { id: "a", label: { pl: "pasożytem — gospodarzem jest żywa roślina", ua: "паразитом — хазяїном є жива рослина" } },
          { id: "b", label: { pl: "saprobiontem — bo każda roślina to szczątek", ua: "сапробіонтом — бо кожна рослина є решткою" } },
          { id: "c", label: { pl: "samożywną, bo jest rośliną", ua: "саможивною, бо є рослиною" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żywa roślina nie jest szczątkiem. Kanianka pobiera pokarm z żywego gospodarza, więc jest pasożytem.",
              ua: "Жива рослина не є решткою. Повитиця бере поживу з живого хазяїна, тож вона паразит."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Samożywność potrzebuje wytwarzania pokarmu, zwykle z chlorofilem. Kanianka chlorofilu nie ma i bierze gotowy pokarm.",
              ua: "Саможивленню потрібне вироблення поживи, зазвичай із хлорофілом. Повитиця хлорофілу не має і бере готову поживу."
            }
          }
        ],
        explanation: {
          pl: "Kanianka jest pasożytem. Żywa roślina jest jej gospodarzem.",
          ua: "Повитиця є паразитом. Жива рослина є її хазяїном."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Skąd jest pokarm", ua: "Поняття. Звідки пожива" },
      visual: vizGh("l11-lancuch.png", {
        alt: { pl: "Trawa, zając i lis w prostym łańcuchu", ua: "Трава, заєць і лисиця в простому ланцюзі" },
        title: { pl: "Na początku jest samożywna roślina.", ua: "На початку є саможивна рослина." },
        prompt: { pl: "Schemat lekcji 11: trawa, zając, lis." }
      }),
      text: {
        pl: [
          "Cudzożywny organizm nie wytwarza cukru z dwutlenku węgla i wody tak jak liść.",
          "Bierze gotowe związki: z rośliny, ze zwierzęcia albo ze szczątków. Energia zapisana w tym pokarmie pochodzi wcześniej z fotosyntezy.",
          "Prosty łańcuch: trawa (samożywna) → zając (roślinożerca) → lis (mięsożerca). Na lekcji 12 zobaczysz, jak komórka uwalnia energię z pokarmu. Dziś zapamiętaj źródło pokarmu."
        ],
        ua: [
          "Гетеротрофний організм не виробляє цукор із вуглекислого газу і води так, як листок.",
          "Бере готові сполуки: з рослини, з тварини або з решток. Енергія, записана в цій поживі, походить раніше з фотосинтезу.",
          "Простий ланцюг: трава (саможивна) → заєць (рослиноїдний) → лисиця (м’ясоїдна). На уроці 12 побачиш, як клітина вивільняє енергію з поживи. Сьогодні запам’ятай джерело поживи."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy ogniwa", ua: "Приклад. Три ланки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trawa robi pokarm w fotosyntezie."],
            ua: ["Трава робить поживу у фотосинтезі."]
          }
        },
        {
          text: {
            pl: ["Zając zjada trawę. Pokarm jest już gotowy."],
            ua: ["Заєць з’їдає траву. Пожива вже готова."]
          }
        },
        {
          text: {
            pl: ["Lis zjada zająca. Jego pokarm też zaczyna się od rośliny, nie od chloroplastów lisa."],
            ua: ["Лисиця з’їдає зайця. Її пожива теж починається від рослини, не від хлоропластів лисиці."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skąd pokarm zająca?", ua: "Коротке питання. Звідки пожива зайця?" },
      task: {
        id: "l11-g5",
        type: "single-choice",
        question: {
          pl: "Skąd zając bierze pokarm?",
          ua: "Звідки заєць бере поживу?"
        },
        options: [
          { id: "a", label: { pl: "z rośliny, która sama go wytworzyła", ua: "з рослини, яка сама його виробила" } },
          { id: "b", label: { pl: "z własnych chloroplastów w futrze", ua: "із власних хлоропластів у хутрі" } },
          { id: "c", label: { pl: "z powietrza, bez żadnych związków z innych organizmów", ua: "з повітря, без жодних сполук з інших організмів" } }
        ],
        answer: "a",
        hint: {
          pl: "Zając nie ma chloroplastów. Szukaj gotowego pokarmu rośliny.",
          ua: "Заєць не має хлоропластів. Шукай готову поживу рослини."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Futro nie ma chloroplastów. Pokarm zająca pochodzi z rośliny, którą zjada.",
              ua: "Хутро не має хлоропластів. Пожива зайця походить із рослини, яку він з’їдає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Samo powietrze nie jest obiadem zająca. Zając pobiera gotowe substancje z rośliny.",
              ua: "Саме повітря не є вечерею зайця. Заєць бере готові речовини з рослини."
            }
          }
        ],
        explanation: {
          pl: "Zając bierze gotowy pokarm z rośliny.",
          ua: "Заєць бере готову поживу з рослини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Lis ma liście", ua: "Типова помилка. Лисиця має листки" },
      claim: {
        pl: "„Lis wytwarza glukozę we własnych liściach.”",
        ua: "«Лисиця виробляє глюкозу у власних листках.»"
      },
      text: {
        pl: [
          "Lis nie ma liści ani chloroplastów.",
          "Jego pokarm jest gotowy. Wcześniej zaczął się od samożywnej rośliny."
        ],
        ua: [
          "Лисиця не має листків і хлоропластів.",
          "Її пожива готова. Раніше вона почалася від саможивної рослини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szczupak", ua: "Сам. Щука" },
      task: {
        id: "l11-p5",
        type: "single-choice",
        question: {
          pl: "Szczupak zjadł mniejszą rybę. Skąd wcześniej wzięła się energia zapisana w tym pokarmie?",
          ua: "Щука з’їла меншу рибу. Звідки раніше взялася енергія, записана в цій поживі?"
        },
        options: [
          { id: "a", label: { pl: "z fotosyntezy na początku łańcucha, nie z chloroplastów szczupaka", ua: "з фотосинтезу на початку ланцюга, не з хлоропластів щуки" } },
          { id: "b", label: { pl: "szczupak sam zrobił cukier z dwutlenku węgla w łuskach", ua: "щука сама зробила цукор із вуглекислого газу в лусці" } },
          { id: "c", label: { pl: "energia powstała w jodynie na liściu", ua: "енергія виникла в йоді на листку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szczupak nie prowadzi fotosyntezy. Cukier na początku zrobiła samożywna roślina, a dalej pokarm szedł przez inne organizmy.",
              ua: "Щука не веде фотосинтез. Цукор на початку зробила саможивна рослина, а далі пожива йшла через інші організми."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna tylko pokazuje skrobię w doświadczeniu. Energii w pokarmie szczupaka nie wytwarza.",
              ua: "Йод лише показує крохмаль у досліді. Енергії в поживі щуки він не виробляє."
            }
          }
        ],
        explanation: {
          pl: "Energia w pokarmie szczupaka pochodzi wcześniej z fotosyntezy.",
          ua: "Енергія в поживі щуки походить раніше з фотосинтезу."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który sposób odżywiania sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який спосіб живлення ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Cudzożywność", ua: "Перевірка 1. Гетеротрофне живлення" },
      task: {
        id: "l11-t1",
        type: "single-choice",
        question: {
          pl: "Czym jest cudzożywność?",
          ua: "Що таке гетеротрофне живлення?"
        },
        options: [
          { id: "a", label: { pl: "pobieranie gotowych substancji odżywczych z innych organizmów lub ze szczątków", ua: "вбирання готових поживних речовин з інших організмів або з решток" } },
          { id: "b", label: { pl: "wytwarzanie glukozy w chloroplastach", ua: "вироблення глюкози в хлоропластах" } },
          { id: "c", label: { pl: "brak pokarmu, bo organizm niczego nie potrzebuje", ua: "відсутність поживи, бо організм нічого не потребує" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukoza w chloroplastach to samożywność. Cudzożywność zaczyna się od gotowego pokarmu.",
              ua: "Глюкоза в хлоропластах — це саможивлення. Гетеротрофне живлення починається з готової поживи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pokarm jest potrzebny. Cudzożywny go pobiera, samożywny go wytwarza.",
              ua: "Пожива потрібна. Гетеротроф її бере, саможивний її виробляє."
            }
          }
        ],
        explanation: {
          pl: "Cudzożywność to pobieranie gotowego pokarmu z innych organizmów lub ze szczątków.",
          ua: "Гетеротрофне живлення — це вбирання готової поживи з інших організмів або з решток."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Diety", ua: "Перевірка 2. Дієти" },
      task: {
        id: "l11-t2",
        type: "single-choice",
        question: {
          pl: "Który zestaw przykładów jest prawdziwy?",
          ua: "Який набір прикладів правдивий?"
        },
        options: [
          { id: "a", label: { pl: "krowa — roślinożerca; szczupak — mięsożerca; niedźwiedź — wszystkożerca", ua: "корова — рослиноїдна; щука — м’ясоїдна; ведмідь — всеїдний" } },
          { id: "b", label: { pl: "krowa — samożywna; szczupak — roślinożerca; niedźwiedź — saprobiont", ua: "корова — саможивна; щука — рослиноїдна; ведмідь — сапробіонт" } },
          { id: "c", label: { pl: "wszystkie trzy są pasożytami trawy", ua: "усі три є паразитами трави" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Krowa je rośliny, ale ich nie wytwarza. Szczupak je inne zwierzęta. Niedźwiedź je i rośliny, i zwierzęta.",
              ua: "Корова їсть рослини, але їх не виробляє. Щука їсть інших тварин. Ведмідь їсть і рослини, і тварин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasożyt żyje kosztem żywego gospodarza. Krowa, szczupak i niedźwiedź mają diety, nie są pasożytami trawy.",
              ua: "Паразит живе коштом живого хазяїна. Корова, щука і ведмідь мають дієти, не є паразитами трави."
            }
          }
        ],
        explanation: {
          pl: "Krowa je rośliny, szczupak je zwierzęta, niedźwiedź je jedne i drugie.",
          ua: "Корова їсть рослини, щука їсть тварин, ведмідь їсть і те, і те."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Saprobiont", ua: "Перевірка 3. Сапробіонт" },
      task: {
        id: "l11-t3",
        type: "single-choice",
        question: {
          pl: "Czym jest odżywianie saprobiontyczne?",
          ua: "Що таке сапробіонтне живлення?"
        },
        options: [
          { id: "a", label: { pl: "odżywianie się martwymi szczątkami, na przykład grzyb na pniu", ua: "живлення мертвими рештками, наприклад гриб на пні" } },
          { id: "b", label: { pl: "fotosynteza w chloroplastach trawy", ua: "фотосинтез у хлоропластах трави" } },
          { id: "c", label: { pl: "lis zjada żywego zająca", ua: "лисиця з’їдає живого зайця" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza to samożywność. Saprobiont bierze gotowy pokarm z martwych szczątków.",
              ua: "Фотосинтез — це саможивлення. Сапробіонт бере готову поживу з мертвих решток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Lis, który zjada zająca, jest mięsożercą. Saprobiont zostaje przy szczątkach, nie przy żywym zwierzęciu.",
              ua: "Лисиця, яка з’їдає зайця, є м’ясоїдною. Сапробіонт лишається при рештках, не при живій тварині."
            }
          }
        ],
        explanation: {
          pl: "Saprobiont odżywia się martwymi szczątkami.",
          ua: "Сапробіонт живиться мертвими рештками."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Pasożyt", ua: "Перевірка 4. Паразит" },
      task: {
        id: "l11-t4",
        type: "single-choice",
        question: {
          pl: "Czym jest pasożytnictwo?",
          ua: "Що таке паразитизм?"
        },
        options: [
          { id: "a", label: { pl: "pobieranie pokarmu z żywego gospodarza, a gospodarz na tym traci", ua: "вбирання поживи з живого хазяїна, а хазяїн на цьому втрачає" } },
          { id: "b", label: { pl: "rozkładanie opadłych liści", ua: "розкладання опалого листя" } },
          { id: "c", label: { pl: "wytwarzanie tlenu w liściu", ua: "вироблення кисню в листку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Opadłe liście to szczątki. Tak żyje saprobiont. Pasożyt pobiera pokarm z żywego gospodarza.",
              ua: "Опале листя — це рештки. Так живе сапробіонт. Паразит бере поживу з живого хазяїна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tlen w liściu powstaje w fotosyntezie. Pasożytnictwo jest pobieraniem gotowego pokarmu z żywego gospodarza.",
              ua: "Кисень у листку виникає у фотосинтезі. Паразитизм є вбиранням готової поживи з живого хазяїна."
            }
          }
        ],
        explanation: {
          pl: "Pasożyt pobiera pokarm z żywego gospodarza. Gospodarz na tym traci.",
          ua: "Паразит бере поживу з живого хазяїна. Хазяїн на цьому втрачає."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Źródło pokarmu", ua: "Перевірка 5. Джерело поживи" },
      task: {
        id: "l11-t5",
        type: "single-choice",
        question: {
          pl: "Skąd cudzożywne organizmy biorą pokarm?",
          ua: "Звідки гетеротрофні організми беруть поживу?"
        },
        options: [
          { id: "a", label: { pl: "z innych organizmów albo z ich szczątków; nie wytwarzają go własną fotosyntezą", ua: "з інших організмів або з їхніх решток; не виробляють її власним фотосинтезом" } },
          { id: "b", label: { pl: "wyłącznie z dwutlenku węgla we własnych liściach", ua: "виключно з вуглекислого газу у власних листках" } },
          { id: "c", label: { pl: "z jodyny, która wytwarza glukozę", ua: "з йоду, який виробляє глюкозу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dwutlenek węgla i liście to fotosynteza samożywnej rośliny. Cudzożywny bierze gotowy pokarm.",
              ua: "Вуглекислий газ і листки — це фотосинтез саможивної рослини. Гетеротроф бере готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna nie wytwarza glukozy. Pokarm cudzożywnych pochodzi od innych organizmów albo z ich szczątków.",
              ua: "Йод не виробляє глюкозу. Пожива гетеротрофів походить від інших організмів або з їхніх решток."
            }
          }
        ],
        explanation: {
          pl: "Cudzożywne biorą gotowy pokarm z innych organizmów albo ze szczątków.",
          ua: "Гетеротрофні беруть готову поживу з інших організмів або з решток."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l11-lancuch.png", {
        alt: { pl: "Łańcuch: trawa, zając, lis", ua: "Ланцюг: трава, заєць, лисиця" },
        title: { pl: "Gotowy pokarm. Na początku jest roślina.", ua: "Готова пожива. На початку є рослина." },
        prompt: { pl: "Ten sam łańcuch trawa–zając–lis." }
      }),
      text: {
        pl: [
          "Cudzożywność: gotowy pokarm z innych organizmów lub ze szczątków. Samożywność: wytwarzanie, na przykład fotosynteza.",
          "Zwierzęta: roślinożerca, mięsożerca, wszystkożerca. To diety, nie królestwa.",
          "Saprobiont — martwe szczątki. Pasożyt — żywy gospodarz.",
          "Na początku łańcucha trawa → zając → lis jest samożywna roślina."
        ],
        ua: [
          "Гетеротрофне живлення: готова пожива з інших організмів або з решток. Саможивлення: вироблення, наприклад фотосинтез.",
          "Тварини: рослиноїдний, м’ясоїдний, всеїдний. Це дієти, не царства.",
          "Сапробіонт — мертві рештки. Паразит — живий хазяїн.",
          "На початку ланцюга трава → заєць → лисиця є саможивна рослина."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, czym cudzożywność różni się od samożywności.", ua: "Поясню, чим гетеротрофне живлення відрізняється від саможивлення." },
        { pl: "Podam przykłady roślinożercy, mięsożercy i wszystkożercy.", ua: "Наведу приклади рослиноїдного, м’ясоїдного і всеїдного." },
        { pl: "Powiem, czym jest odżywianie saprobiontyczne.", ua: "Скажу, що таке сапробіонтне живлення." },
        { pl: "Powiem, czym jest pasożytnictwo.", ua: "Скажу, що таке паразитизм." },
        { pl: "Wyjaśnię, skąd cudzożywne organizmy biorą pokarm.", ua: "Поясню, звідки гетеротрофні організми беруть поживу." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
