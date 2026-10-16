function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L23_Lodyga/images/";

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
      heading: { pl: "Misja: oś nad ziemią", ua: "Місія: вісь над землею" },
      visual: vizGh("l23-zacznijmy.png", {
        alt: { pl: "Młoda roślina: pęd, łodyga, liście i pąk", ua: "Молода рослина: пагін, стебло, листки і брунька" },
        title: { pl: "Nad ziemią widać pęd.", ua: "Над землею видно пагін." },
        prompt: { pl: "Plansza lekcji 23: pęd nad ziemią." }
      }),
      text: {
        pl: [
          "To lekcja 23: łodyga. Korzeń został pod ziemią na lekcji 22. Dziś część nadziemna: czym pęd różni się od łodygi, po co łodyga jest, jak wygląda z zewnątrz i na przekroju.",
          "Liść warstwami otworzysz na lekcji 24.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 23: стебло. Корінь лишився під землею на уроці 22. Сьогодні надземна частина: чим пагін відрізняється від стебла, навіщо стебло, як виглядає зовні і на перерізі.",
          "Листок шарами відкриєш на уроці 24.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "pęd", ua: "пагін — стебло, листки і бруньки" },
        { pl: "łodyga", ua: "стебло — вісь пагона, не весь пагін" },
        { pl: "węzeł", ua: "вузол — звідси виростає листок" },
        { pl: "międzywęźle", ua: "міжвузля — відрізок між вузлами" },
        { pl: "pąk boczny", ua: "бічна брунька — у пазусі листка" },
        { pl: "wiązka przewodząca", ua: "провідний пучок — деревина і луб" },
        { pl: "rdzeń", ua: "серцевина — середина стебла" },
        { pl: "słoje roczne", ua: "річні кільця — світла і темна смуга ≈ рік" },
        { pl: "bulwa", ua: "бульба — запасаючий пагін, не морква" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pęd i łodyga", ua: "Поняття. Пагін і стебло" },
      visual: vizGh("l23-ped.png", {
        alt: { pl: "Łodyga, liście, pąk szczytowy i pąk boczny", ua: "Стебло, листки, верхівкова і бічна брунька" },
        title: { pl: "Pęd jest szerszy niż sama oś.", ua: "Пагін ширший за саму вісь." },
        prompt: { pl: "Plansza lekcji 23: pęd." }
      }),
      text: {
        pl: [
          ["", em("Pęd"), " to zwykle nadziemna część rośliny: łodyga, liście i pąki."],
          ["", em("Łodyga"), " jest osią pędu. Na niej siedzą liście i pąki."],
          "Na czubku łodygi jest stożek wzrostu pędu, tkanka twórcza z lekcji 21. Dzięki niemu pęd wydłuża się."
        ],
        ua: [
          ["", em("Пагін"), " — зазвичай надземна частина рослини: стебло, листки і бруньки."],
          ["", em("Стебло"), " є віссю пагона. На ньому сидять листки і бруньки."],
          "На верхівці стебла є конус наростання пагона, твірна тканина з уроку 21. Завдяки йому пагін видовжується."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Fasola nad doniczką", ua: "Приклад. Квасоля над горщиком" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Zielona oś trzyma liście. Ta oś to łodyga."],
            ua: ["Зелена вісь тримає листки. Ця вісь — стебло."]
          }
        },
        {
          text: {
            pl: ["Na czubku jest pąk. Liść obok nie jest łodygą."],
            ua: ["На кінчику є брунька. Листок поряд не є стеблом."]
          }
        },
        {
          text: {
            pl: ["Łodyga, liście i pąki razem tworzą pęd."],
            ua: ["Стебло, листки і бруньки разом утворюють пагін."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Oś czy całość", ua: "Коротке питання. Вісь чи ціле" },
      task: {
        id: "l23-g1",
        type: "single-choice",
        question: {
          pl: "Czym pęd różni się od łodygi?",
          ua: "Чим пагін відрізняється від стебла?"
        },
        options: [
          { id: "a", label: { pl: "pęd to łodyga, liście i pąki; łodyga jest osią pędu", ua: "пагін — це стебло, листки і бруньки; стебло є віссю пагона" } },
          { id: "b", label: { pl: "to dwa słowa na samą oś, bez liści", ua: "це два слова на саму вісь, без листків" } },
          { id: "c", label: { pl: "pęd to czepiec korzenia z lekcji 22", ua: "пагін — це кореневий чохлик з уроку 22" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj osi razem z liśćmi i pąkami.",
          ua: "Шукай вісь разом із листками і бруньками."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sama oś to łodyga. Pęd obejmuje też liście i pąki.",
              ua: "Сама вісь — це стебло. Пагін охоплює ще листки і бруньки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec osłania czubek korzenia. Pęd jest nad ziemią: łodyga, liście i pąki.",
              ua: "Чохлик захищає кінчик кореня. Пагін є над землею: стебло, листки і бруньки."
            }
          }
        ],
        explanation: {
          pl: "Pęd to łodyga, liście i pąki. Łodyga jest osią pędu.",
          ua: "Пагін — це стебло, листки і бруньки. Стебло є віссю пагона."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Sama oś", ua: "Типова помилка. Сама вісь" },
      claim: {
        pl: "„Pęd to sama łodyga. Liście są już inną rośliną.”",
        ua: "«Пагін — це саме стебло. Листки вже є іншою рослиною.»"
      },
      text: {
        pl: [
          "Liść siedzi na łodydze i należy do tego samego pędu.",
          "Łodyga jest osią. Bez liści i pąków nie jest całym pędem."
        ],
        ua: [
          "Листок сидить на стеблі і належить до того самого пагона.",
          "Стебло є віссю. Без листків і бруньок воно не є цілим пагоном."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zielony liść", ua: "Сам. Зелений листок" },
      task: {
        id: "l23-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń wskazuje liść fasoli i mówi, że to łodyga, bo jest zielone i nad ziemią. Co poprawić?",
          ua: "Учень показує на листок квасолі і каже, що це стебло, бо він зелений і над землею. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "liść jest częścią pędu; łodyga jest osią; pęd to oś, liście i pąki", ua: "листок є частиною пагона; стебло є віссю; пагін — це вісь, листки і бруньки" } },
          { id: "b", label: { pl: "tak — każda zielona część nad ziemią jest łodygą", ua: "так — кожна зелена частина над землею є стеблом" } },
          { id: "c", label: { pl: "tak — liść jest korzeniem, bo jest organem", ua: "так — листок є коренем, бо він орган" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie robi łodygi. Liść należy do pędu, a łodyga jest jego osią.",
              ua: "Зелений колір не робить стебло. Листок належить до пагона, а стебло є його віссю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Korzeń jest organem podziemnym. Liść jest częścią pędu, a oś tego pędu to łodyga.",
              ua: "Корінь є підземним органом. Листок є частиною пагона, а вісь цього пагона — стебло."
            }
          }
        ],
        explanation: {
          pl: "Liść należy do pędu. Łodyga jest osią, a pęd to oś razem z liśćmi i pąkami.",
          ua: "Листок належить до пагона. Стебло є віссю, а пагін — це вісь разом із листками і бруньками."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co łodyga", ua: "Поняття. Навіщо стебло" },
      visual: vizGh("l23-funkcje.png", {
        alt: { pl: "Łodyga podpiera liście, transportuje i bywa magazynem", ua: "Стебло підпирає листки, транспортує і буває сховищем" },
        title: { pl: "Podpora. Transport. Czasem zapas.", ua: "Опора. Транспорт. Інколи запас." },
        prompt: { pl: "Plansza lekcji 23: funkcje łodygi." }
      }),
      text: {
        pl: [
          "Łodyga unosi liście do światła i usztywnia pęd. Sztywność daje tkanka wzmacniająca z lekcji 21.",
          "Drewno prowadzi wodę i sole z korzenia w górę. Łyko prowadzi cukry z liści do reszty rośliny.",
          "U niektórych roślin łodyga magazynuje zapas. Zielona łodyga może trochę fotosyntetyzować. Główna fabryka cukru jest w liściu, na lekcji 24."
        ],
        ua: [
          "Стебло підносить листки до світла і надає пагону жорсткості. Жорсткість дає механічна тканина з уроку 21.",
          "Деревина веде воду і солі з кореня вгору. Луб веде цукри з листків до решти рослини.",
          "У деяких рослин стебло запасає. Зелене стебло може трохи фотосинтезувати. Головна фабрика цукру є в листку, на уроці 24."
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
            pl: ["Łodyga trzyma liście bliżej światła. To podpora."],
            ua: ["Стебло тримає листки ближче до світла. Це опора."]
          }
        },
        {
          text: {
            pl: ["Strzałka w górę to woda w drewnie. Strzałka z liści to cukry w łyku."],
            ua: ["Стрілка вгору — це вода в деревині. Стрілка з листків — це цукри в лубі."]
          }
        },
        {
          text: {
            pl: ["Zielona łodyga może trochę robić cukier. Główna fabryka cukru zostaje w liściu."],
            ua: ["Зелене стебло може трохи робити цукор. Головна фабрика цукру лишається в листку."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Trzy prace", ua: "Коротке питання. Три роботи" },
      task: {
        id: "l23-g2",
        type: "single-choice",
        question: {
          pl: "Jakie funkcje ma łodyga?",
          ua: "Які функції має стебло?"
        },
        options: [
          { id: "a", label: { pl: "podpiera liście, transportuje wodę, sole i cukry, a u niektórych magazynuje zapas", ua: "підпирає листки, транспортує воду, солі і цукри, а в деяких запасає" } },
          { id: "b", label: { pl: "pobiera wodę włośnikami, jak korzeń", ua: "вбирає воду волосками, як корінь" } },
          { id: "c", label: { pl: "zastępuje liść, bo cała fotosynteza jest w łodydze", ua: "замінює листок, бо весь фотосинтез є в стеблі" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj podpory, dwóch strzałek i zapasu u niektórych.",
          ua: "Шукай опору, дві стрілки і запас у деяких."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki pobierają wodę na korzeniu. Łodyga podpiera liście i transportuje to, co już jest w drewnie i łyku.",
              ua: "Кореневі волоски вбирають воду на корені. Стебло підпирає листки і транспортує те, що вже є в деревині і лубі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielona łodyga może fotosyntetyzować tylko trochę. Główna fabryka cukru jest w liściu. Łodyga przede wszystkim podpiera i transportuje.",
              ua: "Зелене стебло може фотосинтезувати лише трохи. Головна фабрика цукру є в листку. Стебло передусім підпирає і транспортує."
            }
          }
        ],
        explanation: {
          pl: "Łodyga podpiera liście i transportuje wodę, sole oraz cukry. U niektórych magazynuje zapas.",
          ua: "Стебло підпирає листки і транспортує воду, солі та цукри. У деяких запасає."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielona zamiast liścia", ua: "Типова помилка. Зелена замість листка" },
      claim: {
        pl: "„Łodyga zastępuje liść, bo bywa zielona.”",
        ua: "«Стебло замінює листок, бо буває зеленим.»"
      },
      text: {
        pl: [
          "Zielona łodyga może trochę fotosyntetyzować.",
          "Główna fabryka cukru jest w liściu. Łodyga podpiera pęd i prowadzi wodę, sole oraz cukry."
        ],
        ua: [
          "Зелене стебло може трохи фотосинтезувати.",
          "Головна фабрика цукру є в листку. Стебло підпирає пагін і веде воду, солі та цукри."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa ładunki", ua: "Сам. Два вантажі" },
      task: {
        id: "l23-p2",
        type: "single-choice",
        question: {
          pl: "Woda z korzenia dochodzi do liści, a cukier z liści dochodzi do pąka. Uczeń mówi, że oba ładunki idą drewnem, bo drewno jest twarde. Co poprawić?",
          ua: "Вода з кореня доходить до листків, а цукор із листків доходить до бруньки. Учень каже, що обидва вантажі йдуть деревиною, бо деревина тверда. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "drewno niesie wodę i sole w górę; łyko niesie cukry z liści; twardość to podpora", ua: "деревина несе воду і солі вгору; луб несе цукри з листків; твердість — це опора" } },
          { id: "b", label: { pl: "tak — jedna twarda rura niesie wodę i cukier w tę samą stronę", ua: "так — одна тверда труба несе воду і цукор в той самий бік" } },
          { id: "c", label: { pl: "tak — cukier niosą włośniki na łodydze", ua: "так — цукор несуть волоски на стеблі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Twardość nie skleja dwóch ładunków. Wodę i sole w górę niesie drewno. Cukry z liści niesie łyko.",
              ua: "Твердість не склеює два вантажі. Воду і солі вгору несе деревина. Цукри з листків несе луб."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki są na korzeniu i pobierają wodę z gleby. Cukry w łodydze niesie łyko.",
              ua: "Кореневі волоски є на корені і вбирають воду з ґрунту. Цукри в стеблі несе луб."
            }
          }
        ],
        explanation: {
          pl: "Drewno niesie wodę i sole w górę. Łyko niesie cukry z liści.",
          ua: "Деревина несе воду і солі вгору. Луб несе цукри з листків."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Węzeł i pąki", ua: "Поняття. Вузол і бруньки" },
      visual: vizGh("l23-wezly.png", {
        alt: { pl: "Węzeł, międzywęźle, pąk szczytowy i pąk boczny", ua: "Вузол, міжвузля, верхівкова і бічна брунька" },
        title: { pl: "Liść wyrasta z węzła.", ua: "Листок виростає з вузла." },
        prompt: { pl: "Plansza lekcji 23: węzły i pąki." }
      }),
      text: {
        pl: [
          ["", em("Węzeł"), " to miejsce na łodydze, z którego wyrasta liść. Odcinek między dwoma węzłami to ", em("międzywęźle"), "."],
          ["", em("Pąk szczytowy"), " jest na czubku pędu. Tam jest stożek wzrostu."],
          ["", em("Pąk boczny"), " siedzi zwykle w kącie liścia, między ogonkiem a łodygą. Z niego może wyrosnąć gałązka."]
        ],
        ua: [
          ["", em("Вузол"), " — місце на стеблі, з якого виростає листок. Відрізок між двома вузлами — це ", em("міжвузля"), "."],
          ["", em("Верхівкова брунька"), " є на кінчику пагона. Там є конус наростання."],
          ["", em("Бічна брунька"), " сидить зазвичай у пазусі листка, між черешком і стеблом. З неї може вирости гілочка."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa liście", ua: "Приклад. Два листки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Liść wyrasta z węzła. Kawałek gołej łodygi do następnego liścia to międzywęźle."],
            ua: ["Листок виростає з вузла. Шматок голого стебла до наступного листка — це міжвузля."]
          }
        },
        {
          text: {
            pl: ["Na czubku siedzi pąk szczytowy. Pęd wydłuża się stamtąd."],
            ua: ["На кінчику сидить верхівкова брунька. Пагін видовжується звідти."]
          }
        },
        {
          text: {
            pl: ["W kącie liścia, przy ogonku, jest pąk boczny. Z niego może wyrosnąć gałązka."],
            ua: ["У пазусі листка, біля черешка, є бічна брунька. З неї може вирости гілочка."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skąd liść", ua: "Коротке питання. Звідки листок" },
      task: {
        id: "l23-g3",
        type: "single-choice",
        question: {
          pl: "Skąd wyrasta liść i gdzie jest pąk szczytowy?",
          ua: "Звідки виростає листок і де є верхівкова брунька?"
        },
        options: [
          { id: "a", label: { pl: "liść z węzła; pąk szczytowy na czubku pędu", ua: "листок із вузла; верхівкова брунька на кінчику пагона" } },
          { id: "b", label: { pl: "liść ze środka międzywęźla; pąk szczytowy na korzeniu", ua: "листок із середини міжвузля; верхівкова брунька на корені" } },
          { id: "c", label: { pl: "liść z czepca; pąk szczytowy to włośnik", ua: "листок із чохлика; верхівкова брунька — це волосок" } }
        ],
        answer: "a",
        hint: {
          pl: "Liść siedzi na węźle. Pąk na samym czubku jest szczytowy.",
          ua: "Листок сидить на вузлі. Брунька на самому кінчику є верхівковою."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Międzywęźle jest gołym odcinkiem między węzłami. Liść wyrasta z węzła, a pąk szczytowy jest na czubku pędu.",
              ua: "Міжвузля є голим відрізком між вузлами. Листок виростає з вузла, а верхівкова брунька є на кінчику пагона."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec i włośnik należą do korzenia. Liść wyrasta z węzła łodygi, a pąk szczytowy jest na czubku pędu.",
              ua: "Чохлик і волосок належать до кореня. Листок виростає з вузла стебла, а верхівкова брунька є на кінчику пагона."
            }
          }
        ],
        explanation: {
          pl: "Liść wyrasta z węzła. Pąk szczytowy jest na czubku pędu.",
          ua: "Листок виростає з вузла. Верхівкова брунька є на кінчику пагона."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zamiana pąków", ua: "Типова помилка. Заміна бруньок" },
      claim: {
        pl: "„Pąk boczny jest na czubku, a szczytowy w kącie liścia.”",
        ua: "«Бічна брунька є на кінчику, а верхівкова — в пазусі листка.»"
      },
      text: {
        pl: [
          "Pąk szczytowy jest na czubku pędu. Tam pęd wydłuża się.",
          "Pąk boczny siedzi w kącie liścia. Z niego może wyrosnąć gałązka."
        ],
        ua: [
          "Верхівкова брунька є на кінчику пагона. Там пагін видовжується.",
          "Бічна брунька сидить у пазусі листка. З неї може вирости гілочка."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pąk przy ogonku", ua: "Сам. Брунька біля черешка" },
      task: {
        id: "l23-p3",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi pąk między ogonkiem liścia a łodygą i nazywa go szczytowym, bo to pąk. Co poprawić?",
          ua: "Учень бачить бруньку між черешком листка і стеблом і називає її верхівковою, бо це брунька. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "pąk w kącie liścia jest boczny; szczytowy jest na czubku pędu", ua: "брунька в пазусі листка є бічною; верхівкова є на кінчику пагона" } },
          { id: "b", label: { pl: "tak — każdy pąk jest szczytowy", ua: "так — кожна брунька є верхівковою" } },
          { id: "c", label: { pl: "tak — to miejsce to międzywęźle, więc pąk jest węzłem", ua: "так — це місце є міжвузлям, тож брунька є вузлом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nazwa zależy od miejsca. W kącie liścia jest pąk boczny. Na czubku pędu jest pąk szczytowy.",
              ua: "Назва залежить від місця. У пазусі листка є бічна брунька. На кінчику пагона є верхівкова брунька."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kąt liścia jest przy węźle. Międzywęźle jest gołym odcinkiem między węzłami. Pąk przy ogonku jest boczny.",
              ua: "Пазуха листка є біля вузла. Міжвузля є голим відрізком між вузлами. Брунька біля черешка є бічною."
            }
          }
        ],
        explanation: {
          pl: "Pąk w kącie liścia jest boczny. Pąk szczytowy jest na czubku pędu.",
          ua: "Брунька в пазусі листка є бічною. Верхівкова брунька є на кінчику пагона."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Przekrój łodygi", ua: "Поняття. Переріз стебла" },
      visual: vizGh("l23-przekroj.png", {
        alt: { pl: "Skórka, kora, wiązki i rdzeń na przekroju łodygi", ua: "Шкірка, кора, пучки і серцевина на перерізі стебла" },
        title: { pl: "Rury stoją w kręgu. Środek to rdzeń.", ua: "Труби стоять у колі. Середина — серцевина." },
        prompt: { pl: "Plansza lekcji 23: przekrój łodygi." }
      }),
      text: {
        pl: [
          "Na przekroju młodej łodygi widać tkanki z lekcji 21, ułożone inaczej niż w korzeniu.",
          ["Na zewnątrz jest ", em("skórka"), ". Pod nią ", em("kora"), ": głównie miękisz i tkanka wzmacniająca."],
          ["", em("Wiązki przewodzące"), " stoją jak rury w kręgu. W każdej jest drewno, woda w górę, i łyko, cukry z liści."],
          ["W samym środku bywa ", em("rdzeń"), ", miękisz. W korzeniu transport był w jednym walcu osiowym. Tu wiązki są osobno, w kręgu."]
        ],
        ua: [
          "На перерізі молодого стебла видно тканини з уроку 21, укладені інакше, ніж у корені.",
          ["Ззовні є ", em("шкірка"), ". Під нею ", em("кора"), ": здебільшого паренхіма і механічна тканина."],
          ["", em("Провідні пучки"), " стоять як труби в колі. У кожному є деревина, вода вгору, і луб, цукри з листків."],
          ["У самому центрі буває ", em("серцевина"), ", паренхіма. У корені транспорт був в одному центральному циліндрі. Тут пучки є окремо, в колі."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Od skórki do środka", ua: "Приклад. Від шкірки до середини" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Zewnętrzne koło to skórka. Pod nią leży kora."],
            ua: ["Зовнішнє коло — це шкірка. Під нею лежить кора."]
          }
        },
        {
          text: {
            pl: ["W kręgu widać wiązki. W każdej są drewno i łyko."],
            ua: ["У колі видно пучки. У кожному є деревина і луб."]
          }
        },
        {
          text: {
            pl: ["Sam środek to rdzeń. To nie jest walec osiowy korzenia."],
            ua: ["Сама середина — це серцевина. Це не центральний циліндр кореня."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie rury", ua: "Коротке питання. Де труби" },
      task: {
        id: "l23-g4",
        type: "single-choice",
        question: {
          pl: "Gdzie na przekroju łodygi są drewno i łyko?",
          ua: "Де на перерізі стебла є деревина і луб?"
        },
        options: [
          { id: "a", label: { pl: "w wiązkach przewodzących, ustawionych w kręgu", ua: "у провідних пучках, поставлених у коло" } },
          { id: "b", label: { pl: "tylko w rdzeniu, bo środek niesie wodę", ua: "лише в серцевині, бо середина несе воду" } },
          { id: "c", label: { pl: "w czepcu, bo środek łodygi jest czubkiem korzenia", ua: "у чохлику, бо середина стебла є кінчиком кореня" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj kręgu rur, nie samego środka.",
          ua: "Шукай коло труб, не саму середину."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rdzeń jest miękiszem w środku. Drewno i łyko są w wiązkach przewodzących wokół niego.",
              ua: "Серцевина є паренхімою всередині. Деревина і луб є в провідних пучках навколо неї."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec jest na czubku korzenia. W łodydze drewno i łyko leżą w wiązkach w kręgu.",
              ua: "Чохлик є на кінчику кореня. У стеблі деревина і луб лежать у пучках у колі."
            }
          }
        ],
        explanation: {
          pl: "Drewno i łyko są w wiązkach przewodzących, ustawionych w kręgu.",
          ua: "Деревина і луб є в провідних пучках, поставлених у коло."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ten sam przekrój", ua: "Типова помилка. Той самий переріз" },
      claim: {
        pl: "„Przekrój łodygi to ten sam rysunek co korzeń: w środku jeden walec osiowy.”",
        ua: "«Переріз стебла — це той самий малюнок, що корінь: усередині один центральний циліндр.»"
      },
      text: {
        pl: [
          "W korzeniu transport jest w walcu osiowym.",
          "W młodej łodydze wiązki stoją osobno, w kręgu. Środek zajmuje rdzeń."
        ],
        ua: [
          "У корені транспорт є в центральному циліндрі.",
          "У молодому стеблі пучки стоять окремо, в колі. Середину займає серцевина."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Środek i krąg", ua: "Сам. Середина і коло" },
      task: {
        id: "l23-p4",
        type: "single-choice",
        question: {
          pl: "Uczeń nazywa środek łodygi drewnem, a krąg rur rdzeniem. Co poprawić?",
          ua: "Учень називає середину стебла деревиною, а коло труб серцевиною. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "środek to rdzeń; drewno i łyko są w wiązkach w kręgu; na zewnątrz skórka i kora", ua: "середина — це серцевина; деревина і луб є в пучках у колі; ззовні шкірка і кора" } },
          { id: "b", label: { pl: "tak — środek łodygi jest walcem osiowym korzenia", ua: "так — середина стебла є центральним циліндром кореня" } },
          { id: "c", label: { pl: "tak — skórka to słoje roczne, więc krąg rur jest czepcem", ua: "так — шкірка це річні кільця, тож коло труб є чохликом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Walec osiowy jest w korzeniu. W łodydze środek to rdzeń, a drewno leży w wiązkach w kręgu.",
              ua: "Центральний циліндр є в корені. У стеблі середина — це серцевина, а деревина лежить у пучках у колі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje są w pniu drzewa, a czepiec na korzeniu. Na tym przekroju z zewnątrz są skórka i kora, potem wiązki, w środku rdzeń.",
              ua: "Кільця є в стовбурі дерева, а чохлик на корені. На цьому перерізі ззовні є шкірка і кора, потім пучки, всередині серцевина."
            }
          }
        ],
        explanation: {
          pl: "Środek to rdzeń. Drewno i łyko są w wiązkach w kręgu.",
          ua: "Середина — це серцевина. Деревина і луб є в пучках у колі."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Słoje roczne", ua: "Поняття. Річні кільця" },
      visual: vizGh("l23-sloje.png", {
        alt: { pl: "Pień z korą, słojami drewna i rdzeniem", ua: "Стовбур із корою, кільцями деревини і серцевиною" },
        title: { pl: "Jasna i ciemna smuga to jeden rok.", ua: "Світла і темна смуга — це один рік." },
        prompt: { pl: "Plansza lekcji 23: słoje roczne." }
      }),
      text: {
        pl: [
          "Drzewo grubieje. Wydłużanie zostaje przy stożku wzrostu na czubku. Grubość przybywa w pniu.",
          ["Między łykiem a drewnem pracuje cienka warstwa tkanki twórczej, ", em("kambium"), ". Co roku dodaje nowy pierścień drewna."],
          ["", em("Słoje roczne"), " to te pierścienie. Jasny prążek powstaje wiosną, gdy naczynia są szersze. Ciemniejszy powstaje latem. Jeden jasny i jeden ciemny to zwykle jeden rok."],
          "Po liczbie takich par szacujesz wiek ściętego pnia."
        ],
        ua: [
          "Дерево товстішає. Видовження лишається при конусі наростання на кінчику. Товщина прибуває в стовбурі.",
          ["Між лубом і деревиною працює тонкий шар твірної тканини, ", em("камбій"), ". Щороку він додає нове кільце деревини."],
          ["", em("Річні кільця"), " — це ці кільця. Світла смуга постає навесні, коли судини ширші. Темніша постає влітку. Одна світла і одна темна — зазвичай один рік."],
          "За числом таких пар оцінюєш вік зрізаного стовбура."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Ścięty pień", ua: "Приклад. Зрізаний стовбур" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na zewnątrz pnia jest kora. W środku bywa rdzeń. Między nimi leżą pierścienie drewna."],
            ua: ["Ззовні стовбура є кора. Всередині буває серцевина. Між ними лежать кільця деревини."]
          }
        },
        {
          text: {
            pl: ["Jasne drewno przybyło wiosną. Ciemniejsze przybyło latem."],
            ua: ["Світла деревина прибула навесні. Темніша прибула влітку."]
          }
        },
        {
          text: {
            pl: ["Ta para to jeden słój roczny. Liczysz pary na ściętym pniu."],
            ua: ["Ця пара — це одне річне кільце. Рахуєш пари на зрізаному стовбурі."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skąd pierścień", ua: "Коротке питання. Звідки кільце" },
      task: {
        id: "l23-g5",
        type: "single-choice",
        question: {
          pl: "Skąd biorą się słoje roczne?",
          ua: "Звідки беруться річні кільця?"
        },
        options: [
          { id: "a", label: { pl: "kambium między łykiem a drewnem co roku dodaje pierścień drewna; jasny i ciemny prążek to zwykle jeden rok", ua: "камбій між лубом і деревиною щороку додає кільце деревини; світла і темна смуга — зазвичай один рік" } },
          { id: "b", label: { pl: "włośniki co roku dodają pierścień na czubku korzenia", ua: "кореневі волоски щороку додають кільце на кінчику кореня" } },
          { id: "c", label: { pl: "każdy nerw liścia jest jednym rokiem pnia", ua: "кожна жилка листка є одним роком стовбура" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj pary: jasne drewno wiosenne i ciemniejsze letnie.",
          ua: "Шукай пару: світла весняна деревина і темніша літня."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki pobierają wodę na korzeniu. Słoje to pierścienie drewna w pniu, dodawane przez kambium.",
              ua: "Кореневі волоски вбирають воду на корені. Кільця — це кільця деревини в стовбурі, які додає камбій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nerwy liścia poznasz na lekcji 24. Słój roczny jest pierścieniem drewna w pniu.",
              ua: "Жилки листка пізнаєш на уроці 24. Річне кільце є кільцем деревини в стовбурі."
            }
          }
        ],
        explanation: {
          pl: "Kambium co roku dodaje pierścień drewna. Jasny i ciemny prążek to zwykle jeden rok.",
          ua: "Камбій щороку додає кільце деревини. Світла і темна смуга — зазвичай один рік."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każdy prążek", ua: "Типова помилка. Кожна смуга" },
      claim: {
        pl: "„Każdy prążek to osobny rok, więc jasny i ciemny to dwa lata.”",
        ua: "«Кожна смуга — це окремий рік, тож світла і темна — це два роки.»"
      },
      text: {
        pl: [
          "Jasny prążek to wiosna, ciemniejszy to lato tego samego roku.",
          "Jeden rok to para: jasne drewno i ciemniejsze drewno."
        ],
        ua: [
          "Світла смуга — це весна, темніша — літо того самого року.",
          "Один рік — це пара: світла деревина і темніша деревина."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dziesięć par", ua: "Сам. Десять пар" },
      task: {
        id: "l23-p5",
        type: "single-choice",
        question: {
          pl: "Na ściętym pniu widać 10 par jasnego i ciemnego drewna. Uczeń mówi, że drzewo ma 20 lat, bo każda smuga to rok. Co poprawić?",
          ua: "На зрізаному стовбурі видно 10 пар світлої і темної деревини. Учень каже, що дереву 20 років, бо кожна смуга — це рік. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "jeden rok to para jasnego i ciemnego drewna; 10 par to około 10 lat", ua: "один рік — це пара світлої і темної деревини; 10 пар — це близько 10 років" } },
          { id: "b", label: { pl: "tak — każda smuga jest osobnym rokiem", ua: "так — кожна смуга є окремим роком" } },
          { id: "c", label: { pl: "tak — słoje są na korzeniu, więc pień nie ma wieku", ua: "так — кільця є на корені, тож стовбур не має віку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jasna smuga i ciemna smuga należą do jednego roku. Liczysz pary, nie pojedyncze prążki.",
              ua: "Світла смуга і темна смуга належать до одного року. Рахуєш пари, не окремі смуги."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje roczne są w drewnie pnia. Wiek szacujesz po parach na ściętym pniu, nie po korzeniu.",
              ua: "Річні кільця є в деревині стовбура. Вік оцінюєш за парами на зрізаному стовбурі, не за коренем."
            }
          }
        ],
        explanation: {
          pl: "Jedna para jasnego i ciemnego drewna to zwykle jeden rok. Dziesięć par to około dziesięciu lat.",
          ua: "Одна пара світлої і темної деревини — зазвичай один рік. Десять пар — це близько десяти років."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pęd pod ziemią", ua: "Поняття. Пагін під землею" },
      visual: vizGh("l23-przeksztalcenia.png", {
        alt: { pl: "Bulwa ziemniaka z oczkami i marchew", ua: "Бульба картоплі з вічками і морква" },
        title: { pl: "Zapas bywa w pędzie albo w korzeniu.", ua: "Запас буває в пагоні або в корені." },
        prompt: { pl: "Plansza lekcji 23: bulwa i korzeń spichrzowy." }
      }),
      text: {
        pl: [
          "Nie każdy pęd sterczy nad ziemią. Rozłogi poziomek pełzają po glebie. Kłącze irysa jest pędem pod ziemią.",
          ["", em("Bulwa"), " ziemniaka to zgrubiały pęd. Ma pąki, czyli oczka."],
          "Marchew z lekcji 22 jest korzeniem spichrzowym. Ziemniak jest pędem spichrzowym. Oba trzymają zapas, a organ jest inny."
        ],
        ua: [
          "Не кожен пагін стирчить над землею. Столони суниць повзуть по ґрунту. Кореневище півників є пагоном під землею.",
          ["", em("Бульба"), " картоплі — це потовщений пагін. Має бруньки, тобто вічка."],
          "Морква з уроку 22 є запасаючим коренем. Картопля є запасаючим пагоном. Обидва тримають запас, а орган інший."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Oczka i marchew", ua: "Приклад. Вічка і морква" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na ziemniaku widać oczka. To pąki, więc bulwa jest pędem."],
            ua: ["На картоплі видно вічка. Це бруньки, тож бульба є пагоном."]
          }
        },
        {
          text: {
            pl: ["Marchew jest gruba od zapasu i nie ma pąków pędu. To korzeń spichrzowy."],
            ua: ["Морква товста від запасу і не має бруньок пагона. Це запасаючий корінь."]
          }
        },
        {
          text: {
            pl: ["Rozłog poziomki pełznie po glebie. To też pęd, tylko poziomy."],
            ua: ["Столон суниці повзе по ґрунту. Це теж пагін, лише горизонтальний."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ziemniak", ua: "Коротке питання. Картопля" },
      task: {
        id: "l23-g6",
        type: "single-choice",
        question: {
          pl: "Czym bulwa ziemniaka różni się od marchwi?",
          ua: "Чим бульба картоплі відрізняється від моркви?"
        },
        options: [
          { id: "a", label: { pl: "ziemniak jest zgrubiałym pędem z pąkami; marchew jest korzeniem spichrzowym", ua: "картопля є потовщеним пагоном із бруньками; морква є запасаючим коренем" } },
          { id: "b", label: { pl: "oba są owocami, bo da się je zjeść", ua: "обидва є плодами, бо їх можна з’їсти" } },
          { id: "c", label: { pl: "ziemniak jest czepcem, bo leży pod ziemią", ua: "картопля є чохликом, бо лежить під землею" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj oczek, czyli pąków, na ziemniaku.",
          ua: "Шукай вічка, тобто бруньки, на картоплі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To, że część jest jadalna, nie robi z niej owocu. Ziemniak jest pędem spichrzowym, marchew korzeniem spichrzowym.",
              ua: "Те, що частина їстівна, не робить із неї плід. Картопля є запасаючим пагоном, морква — запасаючим коренем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec jest czapeczką na czubku korzenia. Ziemniak jest zgrubiałym pędem, bo ma pąki.",
              ua: "Чохлик є шапочкою на кінчику кореня. Картопля є потовщеним пагоном, бо має бруньки."
            }
          }
        ],
        explanation: {
          pl: "Bulwa ziemniaka jest zgrubiałym pędem z pąkami. Marchew jest korzeniem spichrzowym.",
          ua: "Бульба картоплі є потовщеним пагоном із бруньками. Морква є запасаючим коренем."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pod ziemią znaczy korzeń", ua: "Типова помилка. Під землею означає корінь" },
      claim: {
        pl: "„Ziemniak leży pod ziemią, więc jest korzeniem jak marchew.”",
        ua: "«Картопля лежить під землею, тож є коренем, як морква.»"
      },
      text: {
        pl: [
          "Miejsce w glebie nie wybiera organu.",
          "Ziemniak ma oczka, czyli pąki, więc jest pędem. Marchew jest korzeniem spichrzowym."
        ],
        ua: [
          "Місце в ґрунті не вибирає орган.",
          "Картопля має вічка, тобто бруньки, тож є пагоном. Морква є запасаючим коренем."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kłącze irysa", ua: "Сам. Кореневище півників" },
      task: {
        id: "l23-p6",
        type: "single-choice",
        question: {
          pl: "Kłącze irysa leży pod ziemią. Uczeń mówi, że to korzeń spichrzowy jak marchew, bo jest w glebie. Co poprawić?",
          ua: "Кореневище півників лежить під землею. Учень каже, що це запасаючий корінь, як морква, бо воно в ґрунті. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kłącze jest pędem pod ziemią; marchew jest korzeniem; gleba nie nadaje nazwy organu", ua: "кореневище є пагоном під землею; морква є коренем; ґрунт не дає назви органа" } },
          { id: "b", label: { pl: "tak — wszystko pod ziemią jest korzeniem spichrzowym", ua: "так — усе під землею є запасаючим коренем" } },
          { id: "c", label: { pl: "tak — kłącze jest słojem rocznym, bo leży poziomo", ua: "так — кореневище є річним кільцем, бо лежить горизонтально" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pod ziemią bywa i korzeń, i pęd. Kłącze irysa jest pędem. Marchew jest korzeniem spichrzowym.",
              ua: "Під землею буває і корінь, і пагін. Кореневище півників є пагоном. Морква є запасаючим коренем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słój roczny jest pierścieniem drewna w pniu. Kłącze jest pędem pod ziemią.",
              ua: "Річне кільце є кільцем деревини в стовбурі. Кореневище є пагоном під землею."
            }
          }
        ],
        explanation: {
          pl: "Kłącze irysa jest pędem pod ziemią. Marchew jest korzeniem spichrzowym.",
          ua: "Кореневище півників є пагоном під землею. Морква є запасаючим коренем."
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
      heading: { pl: "Sprawdzian 1. Oś i liście", ua: "Перевірка 1. Вісь і листки" },
      task: {
        id: "l23-t1",
        type: "single-choice",
        question: {
          pl: "Pelargonia ma zieloną oś, liście i pąk na czubku. Uczeń mówi, że pędem jest tylko oś. Co pasuje do lekcji?",
          ua: "Пеларгонія має зелену вісь, листки і бруньку на кінчику. Учень каже, що пагоном є лише вісь. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "pęd to oś razem z liśćmi i pąkami; sama oś jest łodygą", ua: "пагін — це вісь разом із листками і бруньками; сама вісь є стеблом" } },
          { id: "b", label: { pl: "tak — liście są korzeniami, więc do pędu nie wchodzą", ua: "так — листки є коренями, тож до пагона не входять" } },
          { id: "c", label: { pl: "tak — pąk na czubku jest włośnikiem, więc oś jest korzeniem", ua: "так — брунька на кінчику є волоском, тож вісь є коренем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liście należą do pędu, nie do korzenia. Sama oś to łodyga. Pęd jest z łodygi, liści i pąków.",
              ua: "Листки належать до пагона, не до кореня. Сама вісь — це стебло. Пагін складається зі стебла, листків і бруньок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pąk na czubku jest pąkiem szczytowym. Włośnik jest na korzeniu. Oś z liśćmi i pąkami to pęd.",
              ua: "Брунька на кінчику є верхівковою брунькою. Волосок є на корені. Вісь із листками і бруньками — це пагін."
            }
          }
        ],
        explanation: {
          pl: "Pęd to łodyga, liście i pąki. Sama oś jest łodygą.",
          ua: "Пагін — це стебло, листки і бруньки. Сама вісь є стеблом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Po deszczu", ua: "Перевірка 2. Після дощу" },
      task: {
        id: "l23-t2",
        type: "single-choice",
        question: {
          pl: "Po deszczu łodyga fasoli trzyma liście do światła. Woda idzie z korzenia w górę, a cukry z liści do pąka. Który opis pasuje?",
          ua: "Після дощу стебло квасолі тримає листки до світла. Вода йде з кореня вгору, а цукри з листків до бруньки. Який опис пасує?"
        },
        options: [
          { id: "a", label: { pl: "łodyga podpiera i transportuje; u niektórych roślin jeszcze magazynuje zapas", ua: "стебло підпирає і транспортує; у деяких рослин ще запасає" } },
          { id: "b", label: { pl: "łodyga tylko pije włośnikami, bo woda jest w glebie", ua: "стебло лише п’є волосками, бо вода є в ґрунті" } },
          { id: "c", label: { pl: "łodyga robi cały cukier, więc liść jest zbędny", ua: "стебло робить увесь цукор, тож листок зайвий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są na korzeniu. Łodyga podpiera liście, a wodę w górę niesie drewno. Cukry niesie łyko.",
              ua: "Кореневі волоски є на корені. Стебло підпирає листки, а воду вгору несе деревина. Цукри несе луб."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Główna fabryka cukru jest w liściu. Łodyga może fotosyntetyzować tylko trochę. Jej główne prace to podpora i transport.",
              ua: "Головна фабрика цукру є в листку. Стебло може фотосинтезувати лише трохи. Його головні роботи — опора і транспорт."
            }
          }
        ],
        explanation: {
          pl: "Łodyga podpiera liście i transportuje wodę, sole oraz cukry. U niektórych magazynuje zapas.",
          ua: "Стебло підпирає листки і транспортує воду, солі та цукри. У деяких запасає."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Goły odcinek", ua: "Перевірка 3. Голий відрізок" },
      task: {
        id: "l23-t3",
        type: "single-choice",
        question: {
          pl: "Liście wyrastają w dwóch miejscach łodygi, a odcinek między nimi jest goły. Na czubku siedzi pąk. Jak nazywają się te miejsca?",
          ua: "Листки виростають у двох місцях стебла, а відрізок між ними голий. На кінчику сидить брунька. Як називаються ці місця?"
        },
        options: [
          { id: "a", label: { pl: "miejsca liści to węzły, goły odcinek to międzywęźle, pąk na czubku jest szczytowy", ua: "місця листків — це вузли, голий відрізок — міжвузля, брунька на кінчику є верхівковою" } },
          { id: "b", label: { pl: "goły odcinek to węzeł, a liście wyrastają z międzywęźla", ua: "голий відрізок — це вузол, а листки виростають із міжвузля" } },
          { id: "c", label: { pl: "pąk na czubku to strefa włośnikowa, a goły odcinek to czepiec", ua: "брунька на кінчику — це зона волосків, а голий відрізок — чохлик" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Węzeł jest miejscem, z którego wyrasta liść. Goły odcinek między węzłami to międzywęźle.",
              ua: "Вузол є місцем, з якого виростає листок. Голий відрізок між вузлами — це міжвузля."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec i włośniki są na korzeniu. Pąk na czubku pędu jest szczytowy, a goły odcinek łodygi to międzywęźle.",
              ua: "Чохлик і волоски є на корені. Брунька на кінчику пагона є верхівковою, а голий відрізок стебла — це міжвузля."
            }
          }
        ],
        explanation: {
          pl: "Liście wyrastają z węzłów. Odcinek między nimi to międzywęźle. Pąk na czubku jest szczytowy.",
          ua: "Листки виростають із вузлів. Відрізок між ними — це міжвузля. Брунька на кінчику є верхівковою."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Cztery nazwy", ua: "Перевірка 4. Чотири назви" },
      task: {
        id: "l23-t4",
        type: "single-choice",
        question: {
          pl: "Jaka jest kolejność od zewnątrz na przekroju młodej łodygi?",
          ua: "Яка послідовність ззовні на перерізі молодого стебла?"
        },
        options: [
          { id: "a", label: { pl: "skórka, kora, wiązki przewodzące, rdzeń", ua: "шкірка, кора, провідні пучки, серцевина" } },
          { id: "b", label: { pl: "rdzeń, skórka, czepiec, wiązki", ua: "серцевина, шкірка, чохлик, пучки" } },
          { id: "c", label: { pl: "włośniki, kora, walec osiowy", ua: "кореневі волоски, кора, центральний циліндр" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rdzeń jest w środku, nie na zewnątrz. Czepiec należy do korzenia. Od zewnątrz łodygi: skórka, kora, wiązki, rdzeń.",
              ua: "Серцевина є всередині, не ззовні. Чохлик належить до кореня. Ззовні стебла: шкірка, кора, пучки, серцевина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki i walec osiowy są na przekroju korzenia. Młoda łodyga ma skórkę, korę, wiązki w kręgu i rdzeń.",
              ua: "Кореневі волоски і центральний циліндр є на перерізі кореня. Молоде стебло має шкірку, кору, пучки в колі і серцевину."
            }
          }
        ],
        explanation: {
          pl: "Od zewnątrz: skórka, kora, wiązki przewodzące, rdzeń.",
          ua: "Ззовні: шкірка, кора, провідні пучки, серцевина."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Pień", ua: "Перевірка 5. Стовбур" },
      task: {
        id: "l23-t5",
        type: "single-choice",
        question: {
          pl: "Na pniu z zewnątrz jest kora, dalej pierścienie jasnego i ciemnego drewna, w środku rdzeń. Co liczysz, żeby oszacować wiek?",
          ua: "На стовбурі ззовні є кора, далі кільця світлої і темної деревини, всередині серцевина. Що рахуєш, щоб оцінити вік?"
        },
        options: [
          { id: "a", label: { pl: "pary jasnego i ciemnego drewna, które co roku dodaje kambium", ua: "пари світлої і темної деревини, які щороку додає камбій" } },
          { id: "b", label: { pl: "włośniki na korze, bo każdy włosek to rok", ua: "кореневі волоски на корі, бо кожен волосок — це рік" } },
          { id: "c", label: { pl: "sam rdzeń, bo środek jest najstarszym liściem", ua: "саму серцевину, бо середина є найстарішим листком" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są na korzeniu i pobierają wodę. Wiek pnia szacujesz po parach jasnego i ciemnego drewna.",
              ua: "Кореневі волоски є на корені і вбирають воду. Вік стовбура оцінюєш за парами світлої і темної деревини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rdzeń jest miękiszem w środku. Lata zapisują pary drewna, które dodaje kambium między łykiem a drewnem.",
              ua: "Серцевина є паренхімою всередині. Роки записують пари деревини, які додає камбій між лубом і деревиною."
            }
          }
        ],
        explanation: {
          pl: "Wiek pnia szacujesz po parach jasnego i ciemnego drewna. Dodaje je kambium.",
          ua: "Вік стовбура оцінюєш за парами світлої і темної деревини. Їх додає камбій."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l23-przekroj.png", {
        alt: { pl: "Przekrój łodygi ze skórką, korą, wiązkami i rdzeniem", ua: "Переріз стебла зі шкіркою, корою, пучками і серцевиною" },
        title: { pl: "Oś, węzły i rury w kręgu.", ua: "Вісь, вузли і труби в колі." },
        prompt: { pl: "Ta sama plansza przekroju łodygi." }
      }),
      text: {
        pl: [
          "Pęd to łodyga, liście i pąki. Łodyga jest osią.",
          "Łodyga podpiera liście, transportuje wodę, sole i cukry, a u niektórych magazynuje zapas.",
          "Liść wyrasta z węzła. Między węzłami jest międzywęźle. Pąk szczytowy jest na czubku, boczny w kącie liścia.",
          "Przekrój: skórka, kora, wiązki, rdzeń. Słoje to pary drewna w pniu. Ziemniak jest pędem, marchew korzeniem."
        ],
        ua: [
          "Пагін — це стебло, листки і бруньки. Стебло є віссю.",
          "Стебло підпирає листки, транспортує воду, солі і цукри, а в деяких запасає.",
          "Листок виростає з вузла. Між вузлами є міжвузля. Верхівкова брунька є на кінчику, бічна — в пазусі листка.",
          "Переріз: шкірка, кора, пучки, серцевина. Кільця — це пари деревини в стовбурі. Картопля є пагоном, морква — коренем."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Powiem, że pęd to łodyga, liście i pąki.", ua: "Скажу, що пагін — це стебло, листки і бруньки." },
        { pl: "Wymienię podporę, transport i zapas u niektórych jako funkcje łodygi.", ua: "Назву опору, транспорт і запас у деяких як функції стебла." },
        { pl: "Wskażę węzeł, międzywęźle oraz pąk szczytowy i boczny.", ua: "Вкажу вузол, міжвузля, верхівкову і бічну бруньку." },
        { pl: "Opiszę skórkę, korę, wiązki i rdzeń.", ua: "Опишу шкірку, кору, пучки і серцевину." },
        { pl: "Wyjaśnię, że słój roczny to para jasnego i ciemnego drewna.", ua: "Поясню, що річне кільце — це пара світлої і темної деревини." },
        { pl: "Odróżnię bulwę ziemniaka od korzenia spichrzowego.", ua: "Відрізню бульбу картоплі від запасаючого кореня." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
