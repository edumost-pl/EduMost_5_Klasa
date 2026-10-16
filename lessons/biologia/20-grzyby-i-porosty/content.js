function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L20_Grzyby_i_porosty/images/";

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
      heading: { pl: "Misja: sieć pod kapeluszem", ua: "Місія: мережа під шапинкою" },
      visual: vizGh("l20-zacznijmy.png", {
        alt: { pl: "Owocnik w mchu i grzybnia w glebie", ua: "Плодове тіло в моху і грибниця в ґрунті" },
        title: { pl: "Parasol na górze. Sieć pod spodem.", ua: "Парасолька зверху. Мережа під нею." },
        prompt: { pl: "Plansza lekcji 20: owocnik i grzybnia." }
      }),
      text: {
        pl: [
          "To lekcja 20: grzyby i porosty. Królestwo grzybów jest z lekcji 15. Ściana komórki z chityny była na lekcji 8. Drożdże fermentowały na lekcji 13.",
          "Dziś strzępki, owocnik, sposoby życia i porosty. Nieznanych grzybów się nie je. Ta zasada wróci przy ostatniej planszy.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 20: гриби і лишайники. Царство грибів є з уроку 15. Стінка клітини з хітину була на уроці 8. Дріжджі бродили на уроці 13.",
          "Сьогодні гіфи, плодове тіло, способи життя і лишайники. Невідомих грибів не їдять. Це правило повернеться на останньому плакаті.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "strzępki", ua: "гіфи — тонкі нитки тіла гриба" },
        { pl: "grzybnia", ua: "грибниця — мережа гіфів, власне тіло" },
        { pl: "owocnik", ua: "плодове тіло — шапинка, ніжка, пластинки" },
        { pl: "drożdże", ua: "дріжджі — одноклітинні гриби, без шапинки" },
        { pl: "mikoryza", ua: "мікориза — співпраця з коренем, виграють обидва" },
        { pl: "porost", ua: "лишайник — гриб + водорість, не мох" },
        { pl: "bioindykator", ua: "біоіндикатор — показує чистоту повітря" },
        { pl: "zarodniki", ua: "спори гриба — не спори бактерії з уроку 17" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Strzępki i grzybnia", ua: "Поняття. Гіфи і грибниця" },
      visual: vizGh("l20-grzybnia.png", {
        alt: { pl: "Biała sieć strzępek w glebie i mały owocnik", ua: "Біла мережа гіфів у ґрунті і маленьке плодове тіло" },
        title: { pl: "Nitki w glebie to ciało grzyba.", ua: "Нитки в ґрунті — це тіло гриба." },
        prompt: { pl: "Plansza lekcji 20: strzępki i grzybnia." }
      }),
      text: {
        pl: [
          ["Grzyb budują ", em("strzępki"), " — cienkie nitki. Ich sieć to ", em("grzybnia"), "."],
          "Grzybnia często jest w glebie albo w drewnie. To właściwe ciało grzyba. Kapelusz nad ziemią to zwykle tylko część do rozmnażania.",
          "Strzępki nie są korzeniem rośliny. Korzeń ma inną budowę. Tkanki roślin są na lekcji 21."
        ],
        ua: [
          ["Гриб будують ", em("гіфи"), " — тонкі нитки. Їхня мережа — це ", em("грибниця"), "."],
          "Грибниця часто є в ґрунті або в деревині. Це власне тіло гриба. Шапинка над землею — зазвичай лише частина для розмноження.",
          "Гіфи не є коренем рослини. Корінь має іншу будову. Тканини рослин є на уроці 21."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Co jest pod mchem", ua: "Приклад. Що є під мохом" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Nad ziemią widać owocnik. Wygląda jak parasol."],
            ua: ["Над землею видно плодове тіло. Виглядає як парасолька."]
          }
        },
        {
          text: {
            pl: ["Pod spodem biała sieć nitek to strzępki. Razem tworzą grzybnię."],
            ua: ["Під нею біла мережа ниток — це гіфи. Разом вони утворюють грибницю."]
          }
        },
        {
          text: {
            pl: ["Korzeń drzewa obok nie jest tą siecią. Inna budowa, inna lekcja."],
            ua: ["Корінь дерева поряд не є цією мережею. Інша будова, інший урок."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ciało grzyba", ua: "Коротке питання. Тіло гриба" },
      task: {
        id: "l20-g1",
        type: "single-choice",
        question: {
          pl: "Czym jest grzybnia?",
          ua: "Що таке грибниця?"
        },
        options: [
          { id: "a", label: { pl: "siecią strzępek — właściwym ciałem grzyba", ua: "мережею гіфів — власним тілом гриба" } },
          { id: "b", label: { pl: "kapsydem wirusa", ua: "капсидом вірусу" } },
          { id: "c", label: { pl: "jądrem bakterii", ua: "ядром бактерії" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj sieci nitek w glebie, nie osłonki wirusa.",
          ua: "Шукай мережу ниток у ґрунті, не оболонку вірусу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd jest osłonką wirusa. Grzybnia jest siecią strzępek i należy do grzyba.",
              ua: "Капсид є оболонкою вірусу. Грибниця є мережею гіфів і належить грибу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakteria nie ma jądra. Grzybnia nie jest jądrem: to sieć strzępek.",
              ua: "Бактерія не має ядра. Грибниця не є ядром: це мережа гіфів."
            }
          }
        ],
        explanation: {
          pl: "Grzybnia to sieć strzępek. To właściwe ciało grzyba.",
          ua: "Грибниця — це мережа гіфів. Це власне тіло гриба."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tylko parasol", ua: "Типова помилка. Лише парасолька" },
      claim: {
        pl: "„Grzyb to sam kapelusz. Pod ziemią już go nie ma.”",
        ua: "«Гриб — це сама шапинка. Під землею його вже немає.»"
      },
      text: {
        pl: [
          "Kapelusz jest zwykle tylko częścią do rozmnażania.",
          "Właściwe ciało to grzybnia ze strzępek, często w glebie albo w drewnie."
        ],
        ua: [
          "Шапинка є зазвичай лише частиною для розмноження.",
          "Власне тіло — це грибниця з гіфів, часто в ґрунті або в деревині."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Białe nitki", ua: "Сам. Білі нитки" },
      task: {
        id: "l20-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi białe nitki przy korzeniu i mówi, że to korzeń rośliny. Co poprawić?",
          ua: "Учень бачить білі нитки біля кореня і каже, що це корінь рослини. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "cienkie nitki grzyba to strzępki; korzeń ma inną budowę", ua: "тонкі нитки гриба — це гіфи; корінь має іншу будову" } },
          { id: "b", label: { pl: "tak — każda biała nitka w glebie jest liściem", ua: "так — кожна біла нитка в ґрунті є листком" } },
          { id: "c", label: { pl: "tak — strzępki są kapsydem, więc grzyb jest wirusem", ua: "так — гіфи є капсидом, тож гриб є вірусом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liść nie leży jako biała sieć w glebie. Te nitki to strzępki, a korzeń zostaje korzeniem rośliny.",
              ua: "Листок не лежить білою мережею в ґрунті. Ці нитки — гіфи, а корінь лишається коренем рослини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapsyd należy do wirusa. Strzępki są nitkami grzyba i składają się na grzybnię.",
              ua: "Капсид належить вірусу. Гіфи є нитками гриба і складаються в грибницю."
            }
          }
        ],
        explanation: {
          pl: "Białe nitki grzyba to strzępki. Korzeń rośliny ma inną budowę.",
          ua: "Білі нитки гриба — це гіфи. Корінь рослини має іншу будову."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Owocnik", ua: "Поняття. Плодове тіло" },
      visual: vizGh("l20-owocnik.png", {
        alt: { pl: "Kapelusz, trzon, blaszki i zarodniki", ua: "Шапинка, ніжка, пластинки і спори" },
        title: { pl: "Pod kapeluszem są blaszki.", ua: "Під шапинкою є пластинки." },
        prompt: { pl: "Plansza lekcji 20: owocnik." }
      }),
      text: {
        pl: [
          ["U wielu grzybów nad ziemią wyrasta ", em("owocnik"), ": kapelusz na trzonie."],
          ["Pod kapeluszem bywają ", em("blaszki"), " albo rurki. Stamtąd wysypują się zarodniki. Z zarodników może powstać nowa grzybnia."],
          "Nie każdy grzyb ma kapelusz. Pleśń na chlebie to też grzyb: strzępki bez parasola."
        ],
        ua: [
          ["У багатьох грибів над землею виростає ", em("плодове тіло"), ": шапинка на ніжці."],
          ["Під шапинкою бувають ", em("пластинки"), " або трубочки. Звідти висипаються спори. Зі спор може постати нова грибниця."],
          "Не кожен гриб має шапинку. Цвіль на хлібі — теж гриб: гіфи без парасольки."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Przekrój", ua: "Приклад. Розріз" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na górze jest kapelusz. Trzon go niesie."],
            ua: ["Зверху є шапинка. Ніжка її несе."]
          }
        },
        {
          text: {
            pl: ["Pod kapeluszem widać blaszki. Drobny wysyp to zarodniki, nie mąka."],
            ua: ["Під шапинкою видно пластинки. Дрібний висип — це спори, не борошно."]
          }
        },
        {
          text: {
            pl: ["Ten parasol nie jest całym grzybem. Grzybnia zostaje w podłożu."],
            ua: ["Ця парасолька не є цілим грибом. Грибниця лишається в основі."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pod kapeluszem", ua: "Коротке питання. Під шапинкою" },
      task: {
        id: "l20-g2",
        type: "single-choice",
        question: {
          pl: "Gdzie są blaszki i co się z nich wysypuje?",
          ua: "Де є пластинки і що з них висипається?"
        },
        options: [
          { id: "a", label: { pl: "pod kapeluszem; wysypują się zarodniki", ua: "під шапинкою; висипаються спори" } },
          { id: "b", label: { pl: "na trzonie jak liście; wysypuje się chlorofil", ua: "на ніжці, як листки; висипається хлорофіл" } },
          { id: "c", label: { pl: "w jądrze bakterii; wysypuje się nić DNA", ua: "в ядрі бактерії; висипається нитка ДНК" } }
        ],
        answer: "a",
        hint: {
          pl: "Odwróć kapelusz na rysunku. Szukaj blaszek i drobnego wysypu.",
          ua: "Переверни шапинку на малюнку. Шукай пластинки і дрібний висип."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liście i chlorofil należą do rośliny. Blaszki są pod kapeluszem, a wysyp to zarodniki.",
              ua: "Листки і хлорофіл належать рослині. Пластинки є під шапинкою, а висип — це спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakteria nie ma jądra, a nić DNA nie sypie się z blaszek. Zarodniki wychodzą spod kapelusza.",
              ua: "Бактерія не має ядра, а нитка ДНК не сиплеться з пластинок. Спори виходять з-під шапинки."
            }
          }
        ],
        explanation: {
          pl: "Blaszki są pod kapeluszem. Wysypują się z nich zarodniki.",
          ua: "Пластинки є під шапинкою. З них висипаються спори."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Przetrwalnik", ua: "Типова помилка. Спора бактерії" },
      claim: {
        pl: "„Zarodniki grzyba to przetrwalniki bakterii z lekcji 17.”",
        ua: "«Спори гриба — це спори бактерії з уроку 17.»"
      },
      text: {
        pl: [
          "Przetrwalnik bakterii pomaga przetrwać złe warunki i nie jest wysypem spod kapelusza.",
          "Zarodniki grzyba sypią się z owocnika i mogą dać nową grzybnię."
        ],
        ua: [
          "Спора бактерії допомагає пережити погані умови і не є висипом з-під шапинки.",
          "Спори гриба сиплються з плодового тіла і можуть дати нову грибницю."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pleśń na chlebie", ua: "Сам. Цвіль на хлібі" },
      task: {
        id: "l20-p2",
        type: "single-choice",
        question: {
          pl: "Na chlebie jest pleśń bez kapelusza. Czy to grzyb?",
          ua: "На хлібі є цвіль без шапинки. Чи це гриб?"
        },
        options: [
          { id: "a", label: { pl: "tak — strzępki bez owocnika też należą do grzybów", ua: "так — гіфи без плодового тіла теж належать до грибів" } },
          { id: "b", label: { pl: "nie — bez kapelusza nie ma grzyba", ua: "ні — без шапинки немає гриба" } },
          { id: "c", label: { pl: "nie — to pełzak, bo zmienia kształt plamy", ua: "ні — це амеба, бо змінює форму плями" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapelusz ma wiele grzybów, nie wszystkie. Pleśń jest grzybem ze strzępek, tylko bez parasola.",
              ua: "Шапинку має багато грибів, не всі. Цвіль є грибом із гіфів, лише без парасольки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pełzak jest protistem i rusza nibynóżkami. Pleśń na chlebie to grzyb.",
              ua: "Амеба є протистом і рухається несправжніми ніжками. Цвіль на хлібі — це гриб."
            }
          }
        ],
        explanation: {
          pl: "Pleśń jest grzybem. Brak kapelusza nie wykreśla jej z królestwa grzybów.",
          ua: "Цвіль є грибом. Відсутність шапинки не викреслює її з царства грибів."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Drożdże", ua: "Поняття. Дріжджі" },
      visual: vizGh("l20-drozdz.png", {
        alt: { pl: "Drożdże piekarskie i owalne komórki", ua: "Пекарські дріжджі й овальні клітини" },
        title: { pl: "Jedna komórka. Bez kapelusza.", ua: "Одна клітина. Без шапинки." },
        prompt: { pl: "Plansza lekcji 20: drożdże." }
      }),
      text: {
        pl: [
          [em("Drożdże"), " to grzyby jednokomórkowe. Nie budują kapelusza. Ściana komórki jest z chityny, jak na lekcji 8."],
          "Na lekcji 13 robiły fermentację: z cukru powstaje dwutlenek węgla. Gaz spulchnia ciasto. Mieszaniny z tego doświadczenia się nie pije.",
          "Grzyb nie znaczy „zawsze las”. Drożdże są w cieście i w naturze na owocach."
        ],
        ua: [
          [em("Дріжджі"), " — це одноклітинні гриби. Не будують шапинки. Стінка клітини є з хітину, як на уроці 8."],
          "На уроці 13 вони робили бродіння: з цукру постає вуглекислий газ. Газ розпушує тісто. Суміш із того досліду не п’ють.",
          "Гриб не означає «завжди ліс». Дріжджі є в тісті і в природі на плодах."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kostka i komórki", ua: "Приклад. Брусок і клітини" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej jest kostka drożdży piekarskich. To nie kapelusz."],
            ua: ["Ліворуч є брусок пекарських дріжджів. Це не шапинка."]
          }
        },
        {
          text: {
            pl: ["Po prawej mikroskop pokazuje owalne komórki. Każda jest całym grzybem."],
            ua: ["Праворуч мікроскоп показує овальні клітини. Кожна є цілим грибом."]
          }
        },
        {
          text: {
            pl: ["W cieple z cukrem powstaje gaz. Balon z lekcji 13 i rosnące ciasto biorą się z tego samego procesu."],
            ua: ["У теплі з цукром постає газ. Кулька з уроку 13 і тісто, що росте, беруться з того самого процесу."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Bez kapelusza", ua: "Коротке питання. Без шапинки" },
      task: {
        id: "l20-g3",
        type: "single-choice",
        question: {
          pl: "Drożdże to:",
          ua: "Дріжджі — це:"
        },
        options: [
          { id: "a", label: { pl: "jednokomórkowe grzyby, bez kapelusza", ua: "одноклітинні гриби, без шапинки" } },
          { id: "b", label: { pl: "protisty z nibynóżkami", ua: "протисти з несправжніми ніжками" } },
          { id: "c", label: { pl: "wirusy grypy", ua: "віруси грипу" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj jednej owalnej komórki z królestwa grzybów.",
          ua: "Шукай одну овальну клітину з царства грибів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nibynóżki ma pełzak, a to protist. Drożdże są grzybami i nie zmieniają kształtu jak ameba.",
              ua: "Несправжні ніжки має амеба, а це протист. Дріжджі є грибами і не змінюють форму, як амеба."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus grypy nie jest komórką. Drożdże są jednokomórkowymi grzybami.",
              ua: "Вірус грипу не є клітиною. Дріжджі є одноклітинними грибами."
            }
          }
        ],
        explanation: {
          pl: "Drożdże są jednokomórkowymi grzybami i nie mają kapelusza.",
          ua: "Дріжджі є одноклітинними грибами і не мають шапинки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Nie grzyb", ua: "Типова помилка. Не гриб" },
      claim: {
        pl: "„Drożdże nie są grzybami, bo nie mają kapelusza.”",
        ua: "«Дріжджі не є грибами, бо не мають шапинки.»"
      },
      text: {
        pl: [
          "Kapelusz nie jest warunkiem królestwa grzybów.",
          "Drożdże są jednokomórkowe, mają ścianę z chityny i należą do grzybów."
        ],
        ua: [
          "Шапинка не є умовою царства грибів.",
          "Дріжджі одноклітинні, мають стінку з хітину і належать до грибів."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Rosnące ciasto", ua: "Сам. Тісто, що росте" },
      task: {
        id: "l20-p3",
        type: "single-choice",
        question: {
          pl: "Dlaczego ciasto z drożdżami rośnie?",
          ua: "Чому тісто з дріжджами росте?"
        },
        options: [
          { id: "a", label: { pl: "bo w fermentacji powstaje gaz, który spulchnia ciasto", ua: "бо в бродінні постає газ, який розпушує тісто" } },
          { id: "b", label: { pl: "bo drożdże mają chloroplasty i robią tlen jak liść", ua: "бо дріжджі мають хлоропласти і роблять кисень, як листок" } },
          { id: "c", label: { pl: "bo mieszaninę z lekcji 13 trzeba wypić, żeby ciasto urosło", ua: "бо суміш з уроку 13 треба випити, щоб тісто виросло" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Drożdże nie mają chloroplastów liścia. Ciasto rośnie od gazu z fermentacji, nie od fotosyntezy.",
              ua: "Дріжджі не мають хлоропластів листка. Тісто росте від газу з бродіння, не від фотосинтезу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mieszaniny z doświadczenia się nie pije. Gaz powstaje w cieście i je spulchnia.",
              ua: "Суміш із досліду не п’ють. Газ постає в тісті і його розпушує."
            }
          }
        ],
        explanation: {
          pl: "Ciasto rośnie, bo fermentacja drożdży daje gaz.",
          ua: "Тісто росте, бо бродіння дріжджів дає газ."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy sposoby życia", ua: "Поняття. Три способи життя" },
      visual: vizGh("l20-odzywianie.png", {
        alt: { pl: "Saprobiont na pniu, pasożyt na liściu i mikoryza przy korzeniu", ua: "Сапробіонт на пні, паразит на листку і мікориза біля кореня" },
        title: { pl: "Szczątki, żywy gospodarz albo współpraca.", ua: "Рештки, живий хазяїн або співпраця." },
        prompt: { pl: "Plansza lekcji 20: trzy sposoby życia grzybów." }
      }),
      text: {
        pl: [
          "Grzyby są cudzożywne. Na planszy są trzy warianty.",
          [em("Saprobiont"), " bierze martwe szczątki, na przykład pień albo liście. ", em("Pasożyt"), " bierze pokarm z żywego gospodarza, na przykład grzyb na żywym liściu."],
          [em("Mikoryza"), " to współpraca strzępek z korzeniem. Grzyb dostaje cukry, roślina — wodę i sole. Obie strony zyskują. To nie pasożytnictwo."]
        ],
        ua: [
          "Гриби гетеротрофні. На плакаті три варіанти.",
          [em("Сапробіонт"), " бере мертві рештки, наприклад пень або листки. ", em("Паразит"), " бере поживу з живого хазяїна, наприклад гриб на живому листку."],
          [em("Мікориза"), " — це співпраця гіфів із коренем. Гриб дістає цукри, рослина — воду і солі. Обидві сторони виграють. Це не паразитизм."]
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
            pl: ["Pień, który już nie żyje: grzyb rozkłada szczątki. To saprobiont."],
            ua: ["Пень, який уже не живе: гриб розкладає рештки. Це сапробіонт."]
          }
        },
        {
          text: {
            pl: ["Żywy liść, z którego grzyb bierze pokarm: roślina traci. To pasożyt."],
            ua: ["Живий листок, з якого гриб бере поживу: рослина втрачає. Це паразит."]
          }
        },
        {
          text: {
            pl: ["Strzępki przy korzeniu i strzałki w dwie strony: cukry oraz woda i sole. To mikoryza."],
            ua: ["Гіфи біля кореня і стрілки в два боки: цукри, а також вода і солі. Це мікориза."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwie strzałki", ua: "Коротке питання. Дві стрілки" },
      task: {
        id: "l20-g4",
        type: "single-choice",
        question: {
          pl: "Czym jest mikoryza?",
          ua: "Що таке мікориза?"
        },
        options: [
          { id: "a", label: { pl: "współpracą grzyba z korzeniem: cukry w jedną stronę, woda i sole w drugą", ua: "співпрацею гриба з коренем: цукри в один бік, вода і солі в другий" } },
          { id: "b", label: { pl: "tym samym co kapsyd wirusa", ua: "тим самим, що капсид вірусу" } },
          { id: "c", label: { pl: "pasteryzacją mleka", ua: "пастеризацією молока" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch strzałek przy korzeniu. Obie strony coś dostają.",
          ua: "Шукай дві стрілки біля кореня. Обидві сторони щось дістають."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd jest osłonką wirusa. Mikoryza jest współpracą strzępek grzyba z korzeniem rośliny.",
              ua: "Капсид є оболонкою вірусу. Мікориза є співпрацею гіфів гриба з коренем рослини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasteryzacja podgrzewa mleko. Mikoryza nie jest obróbką jedzenia, tylko współpracą z korzeniem.",
              ua: "Пастеризація підігріває молоко. Мікориза не є обробкою їжі, а співпрацею з коренем."
            }
          }
        ],
        explanation: {
          pl: "Mikoryza to współpraca: grzyb dostaje cukry, roślina wodę i sole.",
          ua: "Мікориза — це співпраця: гриб дістає цукри, рослина — воду і солі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Korzeń znaczy pasożyt", ua: "Типова помилка. Корінь означає паразита" },
      claim: {
        pl: "„Mikoryza jest pasożytnictwem, bo grzyb dotyka korzenia.”",
        ua: "«Мікориза є паразитизмом, бо гриб торкається кореня.»"
      },
      text: {
        pl: [
          "Sam kontakt z korzeniem nie robi pasożyta.",
          "W mikoryzie obie strony zyskują. Pasożyt bierze pokarm, a gospodarz traci."
        ],
        ua: [
          "Сам дотик до кореня не робить паразита.",
          "У мікоризі обидві сторони виграють. Паразит бере поживу, а хазяїн втрачає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Stary pień", ua: "Сам. Старий пень" },
      task: {
        id: "l20-p4",
        type: "single-choice",
        question: {
          pl: "Grzyb rośnie na martwym pniu i rozkłada drewno. Jaki to sposób?",
          ua: "Гриб росте на мертвому пні і розкладає деревину. Який це спосіб?"
        },
        options: [
          { id: "a", label: { pl: "saprobiont — martwe szczątki", ua: "сапробіонт — мертві рештки" } },
          { id: "b", label: { pl: "mikoryza — pień dostaje cukry i oddaje wodę", ua: "мікориза — пень дістає цукри і віддає воду" } },
          { id: "c", label: { pl: "fotosynteza — pień jest liściem z chloroplastami", ua: "фотосинтез — пень є листком із хлоропластами" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mikoryza jest współpracą z korzeniem żywej rośliny. Martwy pień to szczątki, więc grzyb jest saprobiontem.",
              ua: "Мікориза є співпрацею з коренем живої рослини. Мертвий пень — це рештки, тож гриб є сапробіонтом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Grzyb nie prowadzi fotosyntezy liścia. Na martwym drewnie jest cudzożywny: to saprobiont.",
              ua: "Гриб не веде фотосинтезу листка. На мертвій деревині він гетеротроф: це сапробіонт."
            }
          }
        ],
        explanation: {
          pl: "Grzyb na martwym pniu jest saprobiontem.",
          ua: "Гриб на мертвому пні є сапробіонтом."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Porost", ua: "Поняття. Лишайник" },
      visual: vizGh("l20-porost.png", {
        alt: { pl: "Porost na korze: grzyb i glon", ua: "Лишайник на корі: гриб і водорість" },
        title: { pl: "Dwaj partnerzy na korze.", ua: "Два партнери на корі." },
        prompt: { pl: "Plansza lekcji 20: porost." }
      }),
      text: {
        pl: [
          [em("Porost"), " to organizm z dwóch partnerów: grzyb oraz glon albo sinice."],
          "Glon robi cukry w fotosyntezie. Grzyb daje wodę, sole i osłonę. Dlatego porost znosi miejsca, w których samej roślinie byłoby trudno: korę i kamienie.",
          "To nie mech. Mech jest rośliną z późniejszych lekcji. Porost nie należy do królestwa roślin."
        ],
        ua: [
          [em("Лишайник"), " — це організм із двох партнерів: гриб і водорість або ціанобактерії."],
          "Водорість робить цукри у фотосинтезі. Гриб дає воду, солі і захист. Тому лишайник зносить місця, де самій рослині було б важко: кору і каміння.",
          "Це не мох. Мох є рослиною з пізніших уроків. Лишайник не належить до царства рослин."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kto co daje", ua: "Приклад. Хто що дає" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na korze widać porost, nie liść dębu i nie kapelusz."],
            ua: ["На корі видно лишайник, не листок дуба і не шапинку."]
          }
        },
        {
          text: {
            pl: ["Mały schemat: glon oddaje cukry. Grzyb oddaje wodę, sole i ochronę."],
            ua: ["Мала схема: водорість віддає цукри. Гриб віддає воду, солі і захист."]
          }
        },
        {
          text: {
            pl: ["Mech obok byłby rośliną. Tej plamy na korze do mchu nie dopisujemy."],
            ua: ["Мох поряд був би рослиною. Цю пляму на корі до моху не дописуємо."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwaj partnerzy", ua: "Коротке питання. Два партнери" },
      task: {
        id: "l20-g5",
        type: "single-choice",
        question: {
          pl: "Z czego składa się porost?",
          ua: "З чого складається лишайник?"
        },
        options: [
          { id: "a", label: { pl: "z grzyba i glonu albo sinic", ua: "з гриба і водорості або ціанобактерій" } },
          { id: "b", label: { pl: "z samego mchu, więc jest rośliną", ua: "із самого моху, тож є рослиною" } },
          { id: "c", label: { pl: "z kapelusza i trzonu borowika", ua: "із шапинки і ніжки боровика" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch partnerów na korze, nie rośliny i nie owocnika.",
          ua: "Шукай двох партнерів на корі, не рослину і не плодове тіло."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech jest rośliną. Porost ma dwóch partnerów: grzyba oraz glon albo sinice.",
              ua: "Мох є рослиною. Лишайник має двох партнерів: гриба і водорість або ціанобактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapelusz i trzon to owocnik grzyba kapeluszowego. Porost na korze jest duetem grzyba i glonu.",
              ua: "Шапинка і ніжка — це плодове тіло шапинкового гриба. Лишайник на корі є дуетом гриба і водорості."
            }
          }
        ],
        explanation: {
          pl: "Porost składa się z grzyba i glonu albo sinic.",
          ua: "Лишайник складається з гриба і водорості або ціанобактерій."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. To mech", ua: "Типова помилка. Це мох" },
      claim: {
        pl: "„Porost na korze to mech, czyli roślina.”",
        ua: "«Лишайник на корі — це мох, тобто рослина.»"
      },
      text: {
        pl: [
          "Mech jest rośliną i przyjdzie w późniejszych lekcjach.",
          "Porost jest współżyciem grzyba z glonem albo sinicami. Do królestwa roślin go nie wpisujemy."
        ],
        ua: [
          "Мох є рослиною і прийде в пізніших уроках.",
          "Лишайник є співжиттям гриба з водорістю або ціанобактеріями. До царства рослин його не вписуємо."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kto robi cukry", ua: "Сам. Хто робить цукри" },
      task: {
        id: "l20-p5",
        type: "single-choice",
        question: {
          pl: "Który partner w poroście robi cukry, a który daje wodę i osłonę?",
          ua: "Який партнер у лишайнику робить цукри, а який дає воду і захист?"
        },
        options: [
          { id: "a", label: { pl: "glon robi cukry; grzyb daje wodę, sole i osłonę", ua: "водорість робить цукри; гриб дає воду, солі і захист" } },
          { id: "b", label: { pl: "grzyb robi fotosyntezę; glon jest kapeluszem", ua: "гриб робить фотосинтез; водорість є шапинкою" } },
          { id: "c", label: { pl: "oba są bakteriami bez jądra i nikt nie robi cukrów", ua: "обидва є бактеріями без ядра і ніхто не робить цукрів" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosyntezę w tym duecie robi glon. Grzyb nie jest liściem: daje wodę, sole i osłonę.",
              ua: "Фотосинтез у цьому дуеті робить водорість. Гриб не є листком: дає воду, солі і захист."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost nie jest parą bakterii. Glon wytwarza cukry, a grzyb daje wodę i osłonę.",
              ua: "Лишайник не є парою бактерій. Водорість утворює цукри, а гриб дає воду і захист."
            }
          }
        ],
        explanation: {
          pl: "W poroście glon robi cukry, a grzyb daje wodę, sole i osłonę.",
          ua: "У лишайнику водорість робить цукри, а гриб дає воду, солі і захист."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Powietrze i talerz", ua: "Поняття. Повітря і тарілка" },
      visual: vizGh("l20-bioindykator.png", {
        alt: { pl: "Porosty na drzewie i przekreślony talerz", ua: "Лишайники на дереві і перекреслена тарілка" },
        title: { pl: "Czyste powietrze. Nieznany grzyb zostaje w lesie.", ua: "Чисте повітря. Невідомий гриб лишається в лісі." },
        prompt: { pl: "Plansza lekcji 20: bioindykator i zakaz jedzenia." }
      }),
      text: {
        pl: [
          ["Porosty są ", em("bioindykatorami"), ". Źle znoszą zanieczyszczone powietrze. Gdzie jest ich dużo na drzewach, powietrze zwykle bywa czystsze. Gdzie ich w mieście brak, często widać ślad spalin i dymu."],
          ["", em("Nieznanych grzybów się nie je"), ". Jadalny i trujący bywają podobni. Z lasu bierze się grzyba tylko z dorosłym, który naprawdę zna gatunki. Albo nie bierze się wcale."],
          "To nie atlas grzybów i nie lista dań. To budowa, życie grzybów i jedna twarda zasada."
        ],
        ua: [
          ["Лишайники є ", em("біоіндикаторами"), ". Погано зносять забруднене повітря. Де їх багато на деревах, повітря зазвичай буває чистішим. Де їх у місті немає, часто видно слід вихлопів і диму."],
          ["", em("Невідомих грибів не їдять"), ". Їстівний і отруйний бувають схожі. З лісу гриб беруть лише з дорослим, який справді знає види. Або не беруть зовсім."],
          "Це не атлас грибів і не список страв. Це будова, життя грибів і одне тверде правило."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa kafelki", ua: "Приклад. Дві плитки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewe drzewo ma dużo porostów. To zwykle znak czystszego powietrza."],
            ua: ["Ліве дерево має багато лишайників. Це зазвичай знак чистішого повітря."]
          }
        },
        {
          text: {
            pl: ["Prawy kafelek przekreśla talerz. Nieznany grzyb nie jest obiadem."],
            ua: ["Права плитка перекреслює тарілку. Невідомий гриб не є обідом."]
          }
        },
        {
          text: {
            pl: ["Podobieństwo kapeluszy nie rozstrzyga bezpieczeństwa. Rozstrzyga dorosły, który zna gatunki."],
            ua: ["Подібність шапинок не вирішує безпеки. Вирішує дорослий, який знає види."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dużo porostów", ua: "Коротке питання. Багато лишайників" },
      task: {
        id: "l20-g6",
        type: "single-choice",
        question: {
          pl: "Na drzewach za miastem jest dużo porostów. Co z tego wynika?",
          ua: "На деревах за містом є багато лишайників. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "powietrze zwykle jest czystsze, bo porosty źle znoszą zanieczyszczenia", ua: "повітря зазвичай чистіше, бо лишайники погано зносять забруднення" } },
          { id: "b", label: { pl: "powietrze jest pełne spalin, bo porosty je lubią", ua: "повітря повне вихлопів, бо лишайники їх люблять" } },
          { id: "c", label: { pl: "porosty są antybiotykiem i leczą drzewo", ua: "лишайники є антибіотиком і лікують дерево" } }
        ],
        answer: "a",
        hint: {
          pl: "Porost źle znosi brudne powietrze. Dużo porostów czyta się w tę stronę.",
          ua: "Лишайник погано зносить брудне повітря. Багато лишайників читають у цей бік."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Spaliny porostom nie służą. Dużo porostów na drzewach zwykle znaczy czystsze powietrze.",
              ua: "Вихлопи лишайникам не служать. Багато лишайників на деревах зазвичай означає чистіше повітря."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Porost nie jest lekiem. Jest bioindykatorem: pokazuje, jak czyste bywa powietrze.",
              ua: "Лишайник не є ліками. Він є біоіндикатором: показує, наскільки чистим буває повітря."
            }
          }
        ],
        explanation: {
          pl: "Dużo porostów na drzewach zwykle znaczy czystsze powietrze.",
          ua: "Багато лишайників на деревах зазвичай означає чистіше повітря."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każdy kapelusz", ua: "Типова помилка. Кожна шапинка" },
      claim: {
        pl: "„Każdy kapelusz w lesie jest bezpieczny, skoro wygląda znajomo.”",
        ua: "«Кожна шапинка в лісі безпечна, якщо виглядає знайомо.»"
      },
      text: {
        pl: [
          "Jadalny i trujący grzyb bywają podobne.",
          "Nieznanego grzyba się nie je. Z lasu bierze go tylko dorosły, który zna gatunki."
        ],
        ua: [
          "Їстівний і отруйний гриб бувають подібні.",
          "Невідомого гриба не їдять. Із лісу його бере лише дорослий, який знає види."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Talerz", ua: "Сам. Тарілка" },
      task: {
        id: "l20-p6",
        type: "single-choice",
        question: {
          pl: "Na talerzu leży grzyb, którego nikt w domu nie zna. Co jest zgodne z lekcją?",
          ua: "На тарілці лежить гриб, якого ніхто вдома не знає. Що відповідає уроку?"
        },
        options: [
          { id: "a", label: { pl: "nie je się go; gatunki rozpoznaje tylko dorosły, który je naprawdę zna", ua: "його не їдять; види розпізнає лише дорослий, який їх справді знає" } },
          { id: "b", label: { pl: "je się go, bo kapelusz jest podobny do rysunku z lekcji", ua: "його їдять, бо шапинка подібна до малюнка з уроку" } },
          { id: "c", label: { pl: "je się go, bo pleśń na chlebie też jest grzybem i jest w kuchni", ua: "його їдять, бо цвіль на хлібі теж є грибом і є на кухні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rysunek lekcji nie jest atlasem gatunków. Podobieństwo kapelusza nie robi grzyba bezpiecznym.",
              ua: "Малюнок уроку не є атласом видів. Подібність шапинки не робить гриб безпечним."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pleśń pokazuje, że grzyb bywa bez kapelusza. Nie jest pozwoleniem, by jeść nieznany owocnik.",
              ua: "Цвіль показує, що гриб буває без шапинки. Це не дозвіл їсти невідоме плодове тіло."
            }
          }
        ],
        explanation: {
          pl: "Nieznanego grzyba się nie je. O gatunku może powiedzieć dorosły, który je zna.",
          ua: "Невідомого гриба не їдять. Про вид може сказати дорослий, який їх знає."
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
      heading: { pl: "Sprawdzian 1. Nitki", ua: "Перевірка 1. Нитки" },
      task: {
        id: "l20-t1",
        type: "single-choice",
        question: {
          pl: "Co buduje ciało grzyba?",
          ua: "Що будує тіло гриба?"
        },
        options: [
          { id: "a", label: { pl: "strzępki, które tworzą grzybnię", ua: "гіфи, які утворюють грибницю" } },
          { id: "b", label: { pl: "tylko chloroplasty liścia", ua: "лише хлоропласти листка" } },
          { id: "c", label: { pl: "kapsyd, bo grzyb nie ma komórki", ua: "капсид, бо гриб не має клітини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplasty są w komórce roślinnej i u glonu. Ciało grzyba budują strzępki.",
              ua: "Хлоропласти є в рослинній клітині і у водорості. Тіло гриба будують гіфи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez komórki jest wirus. Grzyb ma komórki, a ich nitki to strzępki grzybni.",
              ua: "Без клітини є вірус. Гриб має клітини, а їхні нитки — це гіфи грибниці."
            }
          }
        ],
        explanation: {
          pl: "Ciało grzyba budują strzępki. Ich sieć to grzybnia.",
          ua: "Тіло гриба будують гіфи. Їхня мережа — це грибниця."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Trzy części", ua: "Перевірка 2. Три частини" },
      task: {
        id: "l20-t2",
        type: "single-choice",
        question: {
          pl: "Który zestaw to owocnik grzyba kapeluszowego?",
          ua: "Який набір — це плодове тіло шапинкового гриба?"
        },
        options: [
          { id: "a", label: { pl: "kapelusz, trzon i blaszki", ua: "шапинка, ніжка і пластинки" } },
          { id: "b", label: { pl: "korzeń, łodyga i liść", ua: "корінь, стебло і листок" } },
          { id: "c", label: { pl: "okular, obiektyw i tubus", ua: "окуляр, об’єктив і тубус" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Korzeń, łodyga i liść należą do rośliny. Owocnik grzyba ma kapelusz, trzon i blaszki.",
              ua: "Корінь, стебло і листок належать рослині. Плодове тіло гриба має шапинку, ніжку і пластинки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Okular, obiektyw i tubus są częściami mikroskopu. U grzyba kapeluszowego szukasz kapelusza, trzonu i blaszek.",
              ua: "Окуляр, об’єктив і тубус є частинами мікроскопа. У шапинкового гриба шукаєш шапинку, ніжку і пластинки."
            }
          }
        ],
        explanation: {
          pl: "Owocnik grzyba kapeluszowego ma kapelusz, trzon i blaszki.",
          ua: "Плодове тіло шапинкового гриба має шапинку, ніжку і пластинки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Owalne komórki", ua: "Перевірка 3. Овальні клітини" },
      task: {
        id: "l20-t3",
        type: "single-choice",
        question: {
          pl: "Pod mikroskopem widać owalne komórki drożdży, bez kapelusza. Dlaczego to nadal grzyby?",
          ua: "Під мікроскопом видно овальні клітини дріжджів, без шапинки. Чому це все одно гриби?"
        },
        options: [
          { id: "a", label: { pl: "bo drożdże są jednokomórkowymi grzybami ze ścianą z chityny", ua: "бо дріжджі є одноклітинними грибами зі стінкою з хітину" } },
          { id: "b", label: { pl: "bo mają chloroplasty i są glonami", ua: "бо мають хлоропласти і є водоростями" } },
          { id: "c", label: { pl: "bo brak kapelusza robi z nich wirusy", ua: "бо відсутність шапинки робить із них віруси" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplasty ma glon, nie drożdże. Drożdże są grzybami, choć każdy z nich to jedna komórka.",
              ua: "Хлоропласти має водорість, не дріжджі. Дріжджі є грибами, хоча кожен із них — це одна клітина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Brak kapelusza nie robi wirusa. Drożdże mają komórkę i należą do królestwa grzybów.",
              ua: "Відсутність шапинки не робить вірус. Дріжджі мають клітину і належать до царства грибів."
            }
          }
        ],
        explanation: {
          pl: "Drożdże są jednokomórkowymi grzybami. Kapelusz nie jest do tego potrzebny.",
          ua: "Дріжджі є одноклітинними грибами. Шапинка для цього не потрібна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Żywy liść", ua: "Перевірка 4. Живий листок" },
      task: {
        id: "l20-t4",
        type: "single-choice",
        question: {
          pl: "Grzyb na żywym liściu bierze z niego pokarm, a roślina na tym traci. Co to jest?",
          ua: "Гриб на живому листку бере з нього поживу, а рослина на цьому втрачає. Що це?"
        },
        options: [
          { id: "a", label: { pl: "pasożyt", ua: "паразит" } },
          { id: "b", label: { pl: "mikoryza, bo grzyb dotyka rośliny", ua: "мікориза, бо гриб торкається рослини" } },
          { id: "c", label: { pl: "saprobiont, bo każdy liść jest już martwym pniem", ua: "сапробіонт, бо кожен листок уже є мертвим пнем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mikoryza jest przy korzeniu i obie strony zyskują. Tu żywy liść traci pokarm, więc grzyb jest pasożytem.",
              ua: "Мікориза є біля кореня і обидві сторони виграють. Тут живий листок втрачає поживу, тож гриб є паразитом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Saprobiont rozkłada martwe szczątki. Żywy liść jest gospodarzem, a grzyb, który z niego bierze pokarm, jest pasożytem.",
              ua: "Сапробіонт розкладає мертві рештки. Живий листок є хазяїном, а гриб, який із нього бере поживу, є паразитом."
            }
          }
        ],
        explanation: {
          pl: "Grzyb, który bierze pokarm z żywego liścia, jest pasożytem.",
          ua: "Гриб, який бере поживу з живого листка, є паразитом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Kora i powietrze", ua: "Перевірка 5. Кора і повітря" },
      task: {
        id: "l20-t5",
        type: "single-choice",
        question: {
          pl: "Porost znika z drzew przy ruchliwej ulicy. Które zdanie pasuje do lekcji?",
          ua: "Лишайник зникає з дерев біля жвавої вулиці. Яке речення пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to grzyb z glonem albo sinicami; źle znosi brudne powietrze, więc bywa bioindykatorem", ua: "це гриб із водорістю або ціанобактеріями; погано зносить брудне повітря, тож буває біоіндикатором" } },
          { id: "b", label: { pl: "to mech, który lubi spaliny i dlatego znika, gdy powietrze jest czyste", ua: "це мох, який любить вихлопи і тому зникає, коли повітря чисте" } },
          { id: "c", label: { pl: "to owocnik, więc zniknięcie znaczy, że grzyby z lasu są bezpieczne na talerzu", ua: "це плодове тіло, тож зникнення означає, що гриби з лісу безпечні на тарілці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Porost nie jest mchem i spalin nie lubi. Znika przy brudnym powietrzu, dlatego bywa bioindykatorem.",
              ua: "Лишайник не є мохом і вихлопів не любить. Зникає при брудному повітрі, тому буває біоіндикатором."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zniknięcie porostu nie jest zgodą na jedzenie grzybów. Porost to duet grzyba i glonu, a nieznanego owocnika się nie je.",
              ua: "Зникнення лишайника не є згодою їсти гриби. Лишайник — це дует гриба і водорості, а невідоме плодове тіло не їдять."
            }
          }
        ],
        explanation: {
          pl: "Porost to grzyb z glonem albo sinicami. Źle znosi brudne powietrze i bywa bioindykatorem.",
          ua: "Лишайник — це гриб із водорістю або ціанобактеріями. Погано зносить брудне повітря і буває біоіндикатором."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l20-owocnik.png", {
        alt: { pl: "Owocnik z kapeluszem, trzonem i blaszkami", ua: "Плодове тіло з шапинкою, ніжкою і пластинками" },
        title: { pl: "Grzybnia w glebie. Owocnik nad nią.", ua: "Грибниця в ґрунті. Плодове тіло над нею." },
        prompt: { pl: "Ten sam przekrój owocnika." }
      }),
      text: {
        pl: [
          "Strzępki tworzą grzybnię. Owocnik to kapelusz, trzon i blaszki. Zarodniki sypią się spod kapelusza.",
          "Drożdże są jednokomórkowymi grzybami. Saprobiont bierze szczątki, pasożyt żywego gospodarza, mikoryza jest współpracą z korzeniem.",
          "Porost to grzyb i glon albo sinice. Bywa bioindykatorem powietrza. Nieznanych grzybów się nie je."
        ],
        ua: [
          "Гіфи утворюють грибницю. Плодове тіло — це шапинка, ніжка і пластинки. Спори сиплються з-під шапинки.",
          "Дріжджі є одноклітинними грибами. Сапробіонт бере рештки, паразит — живого хазяїна, мікориза є співпрацею з коренем.",
          "Лишайник — це гриб і водорість або ціанобактерії. Буває біоіндикатором повітря. Невідомих грибів не їдять."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Powiem, że ciało grzyba budują strzępki i grzybnia.", ua: "Скажу, що тіло гриба будують гіфи і грибниця." },
        { pl: "Wskażę kapelusz, trzon i blaszki owocnika.", ua: "Вкажу шапинку, ніжку і пластинки плодового тіла." },
        { pl: "Przypomnę, że drożdże to jednokomórkowe grzyby.", ua: "Пригадаю, що дріжджі — це одноклітинні гриби." },
        { pl: "Rozróżnię saprobionta, pasożyta i mikoryzę.", ua: "Розрізню сапробіонта, паразита і мікоризу." },
        { pl: "Wyjaśnię, że porost to grzyb z glonem i że bywa bioindykatorem.", ua: "Поясню, що лишайник — це гриб із водорістю і що він буває біоіндикатором." },
        { pl: "Nie zjem nieznanego grzyba.", ua: "Не з’їм невідомого гриба." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
