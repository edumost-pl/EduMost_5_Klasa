function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L13_Doswiadczenie_fermentacja/images/";

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
      heading: { pl: "Misja: kto nadyma balon", ua: "Місія: хто надуває кульку" },
      visual: vizGh("l13-zacznijmy.png", {
        alt: { pl: "Butelka z drożdżami i cukrem, na szyjce balon", ua: "Пляшка з дріжджами і цукром, на шийці кулька" },
        title: { pl: "Nikt w balon nie dmucha.", ua: "Ніхто в кульку не дмухає." },
        prompt: { pl: "Zdjęcie lekcji 13: butelka z balonem na szyjce." }
      }),
      text: {
        pl: [
          "To lekcja 13: doświadczenie z fermentacją drożdży. Ciasto rośnie, a balon na butelce puchnie, bo powstaje gaz.",
          "Ułożysz je jak na lekcji 2 i 10: jedno pytanie, jedna zmiana, wniosek. Mieszaniny nie pijesz. To szkolny test, nie napój.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 13: дослід бродіння дріжджів. Тісто росте, а кулька на пляшці пухне, бо виникає газ.",
          "Складеш його як на уроках 2 і 10: одне питання, одна зміна, висновок. Мішанину не п’єш. Це шкільний тест, не напій.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "problem", ua: "проблема — питання досліду" },
        { pl: "hipoteza", ua: "гіпотеза — очікувана відповідь" },
        { pl: "próba badawcza", ua: "дослідна проба — з цукром" },
        { pl: "próba kontrolna", ua: "контрольна проба — без цього чинника" },
        { pl: "dwutlenek węgla", ua: "вуглекислий газ — газ у кульці" },
        { pl: "wniosek", ua: "висновок — що з результату випливає" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Problem i hipoteza", ua: "Поняття. Проблема і гіпотеза" },
      visual: vizGh("l13-hipoteza.png", {
        alt: { pl: "Pytanie i przypuszczenie o gazie z drożdży", ua: "Питання і припущення про газ із дріжджів" },
        title: { pl: "Najpierw pytanie. Potem przypuszczenie.", ua: "Спочатку питання. Потім припущення." },
        prompt: { pl: "Tablica lekcji 13: problem i hipoteza." }
      }),
      text: {
        pl: [
          [em("Problem"), " to pytanie: czy drożdże z cukrem w ciepłej wodzie wytwarzają gaz, który napełnia balon?"],
          [em("Hipoteza"), " to przypuszczenie: tak — jeśli drożdże są żywe i mają cukier, balon się nadmie, bo powstaje dwutlenek węgla."],
          "Balon na szyjce ogranicza dopływ powietrza z zewnątrz. Fermentacja i tak może iść: nie potrzebuje tlenu tak jak oddychanie tlenowe."
        ],
        ua: [
          [em("Проблема"), " — це питання: чи дріжджі з цукром у теплій воді виробляють газ, який наповнює кульку?"],
          [em("Гіпотеза"), " — це припущення: так — якщо дріжджі живі і мають цукор, кулька надується, бо виникає вуглекислий газ."],
          "Кулька на шийці обмежує доступ повітря ззовні. Бродіння все одно може йти: воно не потребує кисню так, як аеробне дихання."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pytanie i przypuszczenie", ua: "Приклад. Питання і припущення" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Problem brzmi jak pytanie: czy powstanie gaz?"],
            ua: ["Проблема звучить як питання: чи виникне газ?"]
          }
        },
        {
          text: {
            pl: ["Hipoteza brzmi jak odpowiedź przed próbą: tak, balon się nadmie."],
            ua: ["Гіпотеза звучить як відповідь до проби: так, кулька надується."]
          }
        },
        {
          text: {
            pl: ["Kolor balonu nie jest tym pytaniem. Pytanie dotyczy gazu z drożdży."],
            ua: ["Колір кульки не є цим питанням. Питання стосується газу з дріжджів."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co jest hipotezą?", ua: "Коротке питання. Що є гіпотезою?" },
      task: {
        id: "l13-g1",
        type: "single-choice",
        question: {
          pl: "Co jest hipotezą tego doświadczenia?",
          ua: "Що є гіпотезою цього досліду?"
        },
        options: [
          { id: "a", label: { pl: "żywe drożdże z cukrem wytworzą dwutlenek węgla i balon się nadmie", ua: "живі дріжджі з цукром вироблять вуглекислий газ і кулька надується" } },
          { id: "b", label: { pl: "balon nadyma się, bo ktoś w klasie w niego dmucha", ua: "кулька надувається, бо хтось у класі в неї дмухає" } },
          { id: "c", label: { pl: "drożdże prowadzą fotosyntezę i wypuszczają tlen", ua: "дріжджі ведуть фотосинтез і випускають кисень" } }
        ],
        answer: "a",
        hint: {
          pl: "Hipoteza mówi, czego się spodziewasz: żywe drożdże, cukier, gaz.",
          ua: "Гіпотеза каже, чого ти очікуєш: живі дріжджі, цукор, газ."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nikt nie dmucha. Hipoteza dotyczy gazu, który wytworzą drożdże.",
              ua: "Ніхто не дмухає. Гіпотеза стосується газу, який вироблять дріжджі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drożdże są grzybami i nie mają chloroplastów. Hipoteza mówi o dwutlenku węgla z fermentacji, nie o tlenie.",
              ua: "Дріжджі є грибами і не мають хлоропластів. Гіпотеза каже про вуглекислий газ із бродіння, не про кисень."
            }
          }
        ],
        explanation: {
          pl: "Hipoteza: żywe drożdże z cukrem wytworzą dwutlenek węgla i balon się nadmie.",
          ua: "Гіпотеза: живі дріжджі з цукром вироблять вуглекислий газ і кулька надується."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ktoś dmucha", ua: "Типова помилка. Хтось дмухає" },
      claim: {
        pl: "„Balon jest duży, bo ktoś dmuchnął w butelkę.”",
        ua: "«Кулька велика, бо хтось дмухнув у пляшку.»"
      },
      text: {
        pl: [
          "Usta nie są źródłem tego gazu.",
          "Gaz powstaje w butelce, gdy żywe drożdże mają cukier."
        ],
        ua: [
          "Рот не є джерелом цього газу.",
          "Газ виникає в пляшці, коли живі дріжджі мають цукор."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Które zdanie jest pytaniem?", ua: "Сам. Яке речення є питанням?" },
      task: {
        id: "l13-p1",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest problemem tego doświadczenia?",
          ua: "Яке речення є проблемою цього досліду?"
        },
        options: [
          { id: "a", label: { pl: "Czy drożdże z cukrem w ciepłej wodzie wytwarzają gaz, który napełnia balon?", ua: "Чи дріжджі з цукром у теплій воді виробляють газ, який наповнює кульку?" } },
          { id: "b", label: { pl: "Balon się nadmie, bo powstanie dwutlenek węgla.", ua: "Кулька надується, бо виникне вуглекислий газ." } },
          { id: "c", label: { pl: "Czy drożdże mają chloroplasty jak liść?", ua: "Чи дріжджі мають хлоропласти, як листок?" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To już hipoteza: odpowiedź przed próbą. Problem jest pytaniem o gaz.",
              ua: "Це вже гіпотеза: відповідь до проби. Проблема є питанням про газ."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty drożdży nie są pytaniem tej lekcji. Problem dotyczy gazu, który napełnia balon.",
              ua: "Хлоропласти дріжджів не є питанням цього уроку. Проблема стосується газу, який наповнює кульку."
            }
          }
        ],
        explanation: {
          pl: "Problem to pytanie, czy drożdże z cukrem wytwarzają gaz do balonu.",
          ua: "Проблема — це питання, чи дріжджі з цукром виробляють газ до кульки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie próby", ua: "Поняття. Дві проби" },
      visual: vizGh("l13-proby.png", {
        alt: { pl: "Dwie butelki: z cukrem i bez cukru", ua: "Дві пляшки: з цукром і без цукру" },
        title: { pl: "Jedna zmiana: cukier.", ua: "Одна зміна: цукор." },
        prompt: { pl: "Zdjęcie lekcji 13: próba badawcza i kontrolna." }
      }),
      text: {
        pl: [
          [em("Próba badawcza"), ": ciepła woda, drożdże i cukier. Balon na szyjce."],
          [em("Próba kontrolna"), " na tym rysunku: tak samo, ale ", em("bez cukru"), ". Balon zostaje wiotki."],
          "Nauczyciel może zamiast tego wziąć drożdże zabite wrzątkiem. Wtedy czynnikiem jest to, czy drożdże żyją. Nie zmieniasz cukru i wrzątku naraz.",
          "Temperatura, ilość wody i butelka zostają takie same."
        ],
        ua: [
          [em("Дослідна проба"), ": тепла вода, дріжджі і цукор. Кулька на шийці."],
          [em("Контрольна проба"), " на цьому малюнку: так само, але ", em("без цукру"), ". Кулька лишається млявою."],
          "Учитель може натомість узяти дріжджі, вбиті кип’ятком. Тоді чинником є те, чи дріжджі живі. Не змінюєш цукор і кип’яток водночас.",
          "Температура, кількість води і пляшка лишаються такими самими."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Lewa i prawa", ua: "Приклад. Ліва і права" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewa butelka ma cukier. To próba badawcza. Balon rośnie."],
            ua: ["Ліва пляшка має цукор. Це дослідна проба. Кулька росте."]
          }
        },
        {
          text: {
            pl: ["Prawa ma drożdże i ciepłą wodę, ale nie ma cukru. To kontrola."],
            ua: ["Права має дріжджі і теплу воду, але не має цукру. Це контроль."]
          }
        },
        {
          text: {
            pl: ["Różni je tylko cukier. Dlatego wiadomo, co zmieniło wynik."],
            ua: ["Їх різниться лише цукор. Тому відомо, що змінило результат."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która kontrola?", ua: "Коротке питання. Який контроль?" },
      task: {
        id: "l13-g2",
        type: "single-choice",
        question: {
          pl: "Która butelka na rysunku jest próbą kontrolną?",
          ua: "Яка пляшка на малюнку є контрольною пробою?"
        },
        options: [
          { id: "a", label: { pl: "drożdże i ciepła woda bez cukru, balon wiotki", ua: "дріжджі і тепла вода без цукру, кулька млява" } },
          { id: "b", label: { pl: "drożdże, cukier i ciepła woda, balon duży", ua: "дріжджі, цукор і тепла вода, кулька велика" } },
          { id: "c", label: { pl: "obie butelki z wrzątkiem i z cukrem", ua: "обидві пляшки з кип’ятком і з цукром" } }
        ],
        answer: "a",
        hint: {
          pl: "Kontrola nie ma badanego czynnika. Na rysunku tym czynnikiem jest cukier.",
          ua: "Контроль не має досліджуваного чинника. На малюнку цим чинником є цукор."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Butelka z cukrem i dużym balonem to próba badawcza. Kontrola jest bez cukru.",
              ua: "Пляшка з цукром і великою кулькою — це дослідна проба. Контроль без цукру."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wrzątek w obu butelkach zmienia drugi czynnik naraz. Na rysunku kontrola różni się tylko brakiem cukru.",
              ua: "Кип’яток в обох пляшках змінює другий чинник водночас. На малюнку контроль різниться лише браком цукру."
            }
          }
        ],
        explanation: {
          pl: "Próba kontrolna na rysunku nie ma cukru.",
          ua: "Контрольна проба на малюнку не має цукру."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Więcej cukru w kontroli", ua: "Типова помилка. Більше цукру в контролі" },
      claim: {
        pl: "„Kontrola musi mieć więcej cukru niż próba badawcza.”",
        ua: "«Контроль мусить мати більше цукру, ніж дослідна проба.»"
      },
      text: {
        pl: [
          "Kontrola nie dokłada czynnika. Ona go nie ma.",
          "Na rysunku brakuje cukru. Reszta zostaje taka sama."
        ],
        ua: [
          "Контроль не додає чинника. Він його не має.",
          "На малюнку бракує цукру. Решта лишається такою самою."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jedna zmiana", ua: "Сам. Одна зміна" },
      task: {
        id: "l13-p2",
        type: "single-choice",
        question: {
          pl: "Co jest jedyną zmianą między dwiema butelkami na rysunku?",
          ua: "Що є єдиною зміною між двома пляшками на малюнку?"
        },
        options: [
          { id: "a", label: { pl: "obecność cukru", ua: "наявність цукру" } },
          { id: "b", label: { pl: "naraz cukier, temperatura i rodzaj butelki", ua: "водночас цукор, температура і вид пляшки" } },
          { id: "c", label: { pl: "światło, bo drożdże fotosyntetyzują", ua: "світло, бо дріжджі фотосинтезують" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kilka zmian naraz nie wiadomo, która zadziałała. Tu zmienia się tylko cukier.",
              ua: "Кілька змін водночас — невідомо, яка подіяла. Тут змінюється лише цукор."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drożdże nie fotosyntetyzują. Butelki różni cukier, nie światło.",
              ua: "Дріжджі не фотосинтезують. Пляшки різнить цукор, не світло."
            }
          }
        ],
        explanation: {
          pl: "Jedyną zmianą jest cukier.",
          ua: "Єдиною зміною є цукор."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Co jest w balonie", ua: "Поняття. Що є в кульці" },
      visual: vizGh("l13-balon.png", {
        alt: { pl: "Balon wypełniony gazem z fermentacji", ua: "Кулька, наповнена газом із бродіння" },
        title: { pl: "Gaz to dwutlenek węgla.", ua: "Газ — це вуглекислий газ." },
        prompt: { pl: "Zbliżenie lekcji 13: balon i dwutlenek węgla." }
      }),
      text: {
        pl: [
          ["Balon rośnie, bo w butelce przybywa gazu. Ten gaz to głównie ", em("dwutlenek węgla"), " — produkt fermentacji drożdży."],
          "To nie jest tlen z fotosyntezy. Drożdże nie mają chloroplastów.",
          "W pracowni czasem sprawdza się ten gaz wodą wapienną: mętnieje. Dziś wystarczy balon."
        ],
        ua: [
          ["Кулька росте, бо в пляшці більшає газу. Цей газ — здебільшого ", em("вуглекислий газ"), ", продукт бродіння дріжджів."],
          "Це не кисень із фотосинтезу. Дріжджі не мають хлоропластів.",
          "У лабораторії іноді цей газ перевіряють вапняною водою: вона мутніє. Сьогодні досить кульки."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Skąd gaz", ua: "Приклад. Звідки газ" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Butelka jest zamknięta balonem. Powietrze z klasy nie wchodzi do środka, żeby go napełnić."],
            ua: ["Пляшка закрита кулькою. Повітря з класу не входить усередину, щоб її наповнити."]
          }
        },
        {
          text: {
            pl: ["Gaz powstaje w cieczy: drożdże zużywają cukier."],
            ua: ["Газ виникає в рідині: дріжджі споживають цукор."]
          }
        },
        {
          text: {
            pl: ["To dwutlenek węgla, nie tlen z liścia."],
            ua: ["Це вуглекислий газ, не кисень із листка."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co pokazuje balon?", ua: "Коротке питання. Що показує кулька?" },
      task: {
        id: "l13-g3",
        type: "single-choice",
        question: {
          pl: "Co pokazuje nadmuchany balon w tym doświadczeniu?",
          ua: "Що показує надута кулька в цьому досліді?"
        },
        options: [
          { id: "a", label: { pl: "powstaje dwutlenek węgla z fermentacji drożdży", ua: "виникає вуглекислий газ із бродіння дріжджів" } },
          { id: "b", label: { pl: "powstaje tlen z chloroplastów drożdży", ua: "виникає кисень із хлоропластів дріжджів" } },
          { id: "c", label: { pl: "balon sam wciąga powietrze z klasy", ua: "кулька сама втягує повітря з класу" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj gazu z fermentacji, nie tlenu z liścia i nie powietrza z klasy.",
          ua: "Шукай газ із бродіння, не кисень із листка і не повітря з класу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Drożdże nie mają chloroplastów. Gaz w balonie to dwutlenek węgla z fermentacji.",
              ua: "Дріжджі не мають хлоропластів. Газ у кульці — це вуглекислий газ із бродіння."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Balon nie wciąga powietrza z klasy. Gaz powstaje w butelce.",
              ua: "Кулька не втягує повітря з класу. Газ виникає в пляшці."
            }
          }
        ],
        explanation: {
          pl: "Nadmuchany balon pokazuje dwutlenek węgla z fermentacji.",
          ua: "Надута кулька показує вуглекислий газ із бродіння."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tlen z drożdży", ua: "Типова помилка. Кисень із дріжджів" },
      claim: {
        pl: "„Balon nadyma tlen, bo drożdże mają chlorofil.”",
        ua: "«Кульку надуває кисень, бо дріжджі мають хлорофіл.»"
      },
      text: {
        pl: [
          "Drożdże są grzybami. Chlorofilu i chloroplastów nie mają.",
          "Gaz fermentacji to dwutlenek węgla."
        ],
        ua: [
          "Дріжджі є грибами. Хлорофілу і хлоропластів не мають.",
          "Газ бродіння — це вуглекислий газ."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wiotki balon", ua: "Сам. Млява кулька" },
      task: {
        id: "l13-p3",
        type: "single-choice",
        question: {
          pl: "Butelka bez cukru ma wiotki balon. Co z tego wynika?",
          ua: "Пляшка без цукру має мляву кульку. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "bez cukru gaz z fermentacji nie powstał", ua: "без цукру газ із бродіння не виник" } },
          { id: "b", label: { pl: "wiotki balon znaczy, że dwutlenku węgla jest bardzo dużo", ua: "млява кулька означає, що вуглекислого газу дуже багато" } },
          { id: "c", label: { pl: "drożdże wypuściły tlen, ale balon go nie trzyma", ua: "дріжджі випустили кисень, але кулька його не тримає" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dużo gazu nadyma balon. Wiotki balon znaczy, że gazu prawie nie przybyło.",
              ua: "Багато газу надуває кульку. Млява кулька означає, що газу майже не прибуло."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drożdże nie wypuszczają tlenu z fotosyntezy. Bez cukru nie ma gazu fermentacji.",
              ua: "Дріжджі не випускають кисень із фотосинтезу. Без цукру немає газу бродіння."
            }
          }
        ],
        explanation: {
          pl: "Bez cukru fermentacja nie wytworzyła gazu, więc balon został wiotki.",
          ua: "Без цукру бродіння не виробило газу, тож кулька лишилася млявою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Warunki", ua: "Поняття. Умови" },
      visual: vizGh("l13-warunki.png", {
        alt: { pl: "Żywe drożdże, cukier i ciepła woda", ua: "Живі дріжджі, цукор і тепла вода" },
        title: { pl: "Żywe drożdże, cukier, ciepło. Nie wrzątek.", ua: "Живі дріжджі, цукор, тепло. Не кип’яток." },
        prompt: { pl: "Plansza lekcji 13: trzy warunki fermentacji." }
      }),
      text: {
        pl: [
          ["Drożdże muszą być ", em("żywe"), ". To grzyby. Wrzątek je zabija i wtedy balon się nie nadmie."],
          [em("Cukier"), " jest pokarmem do fermentacji."],
          "Ciepła, nie wrząca woda przyspiesza proces. Lodówka go spowalnia, ale nie zastępuje wrzątku.",
          "Doświadczenie oglądasz w szkole. Zawartości butelki nie pijesz."
        ],
        ua: [
          ["Дріжджі мають бути ", em("живими"), ". Це гриби. Кип’яток їх убиває, і тоді кулька не надувається."],
          [em("Цукор"), " є поживою для бродіння."],
          "Тепла, не кипляча вода прискорює процес. Холодильник його сповільнює, але не замінює кип’яток.",
          "Дослід дивишся в школі. Вміст пляшки не п’єш."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy karty", ua: "Приклад. Три картки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Żywe drożdże pracują. Ugotowane już nie."],
            ua: ["Живі дріжджі працюють. Зварені вже ні."]
          }
        },
        {
          text: {
            pl: ["Bez cukru nie mają pokarmu do fermentacji."],
            ua: ["Без цукру не мають поживи для бродіння."]
          }
        },
        {
          text: {
            pl: ["Ciepła woda pomaga. Wrzątek niszczy komórki."],
            ua: ["Тепла вода допомагає. Кип’яток руйнує клітини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Który zestaw?", ua: "Коротке питання. Який набір?" },
      task: {
        id: "l13-g4",
        type: "single-choice",
        question: {
          pl: "Który zestaw sprzyja fermentacji w tej butelce?",
          ua: "Який набір сприяє бродінню в цій пляшці?"
        },
        options: [
          { id: "a", label: { pl: "żywe drożdże, cukier, ciepła woda", ua: "живі дріжджі, цукор, тепла вода" } },
          { id: "b", label: { pl: "wrzątek, który zabija drożdże", ua: "кип’яток, який убиває дріжджі" } },
          { id: "c", label: { pl: "lodówka i brak cukru", ua: "холодильник і відсутність цукру" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj żywych drożdży i pokarmu. Wrzątek i brak cukru zatrzymują próbę.",
          ua: "Шукай живих дріжджів і поживу. Кип’яток і брак цукру зупиняють пробу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wrzątek zabija drożdże. Fermentacji wtedy nie ma, więc balon się nie nadmie.",
              ua: "Кип’яток убиває дріжджі. Бродіння тоді немає, тож кулька не надувається."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chłód spowalnia, a brak cukru zabiera pokarm. Do fermentacji potrzebne są żywe drożdże, cukier i ciepło.",
              ua: "Холод сповільнює, а брак цукру забирає поживу. Для бродіння потрібні живі дріжджі, цукор і тепло."
            }
          }
        ],
        explanation: {
          pl: "Fermentacji sprzyjają żywe drożdże, cukier i ciepła woda.",
          ua: "Бродінню сприяють живі дріжджі, цукор і тепла вода."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Im goręcej, tym lepiej", ua: "Типова помилка. Що гарячіше, то краще" },
      claim: {
        pl: "„Wrzątek jest najlepszy, bo jest najcieplejszy.”",
        ua: "«Кип’яток найкращий, бо він найгарячіший.»"
      },
      text: {
        pl: [
          "Ciepło przyspiesza fermentację tylko wtedy, gdy drożdże żyją.",
          "Wrzątek niszczy komórki. Balon zostaje wiotki."
        ],
        ua: [
          "Тепло прискорює бродіння лише тоді, коли дріжджі живі.",
          "Кип’яток руйнує клітини. Кулька лишається млявою."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Butelka w lodówce", ua: "Сам. Пляшка в холодильнику" },
      task: {
        id: "l13-p4",
        type: "single-choice",
        question: {
          pl: "Butelkę z żywymi drożdżami i cukrem wstawiono do lodówki. Co stanie się z gazem?",
          ua: "Пляшку з живими дріжджами і цукром поставили в холодильник. Що станеться з газом?"
        },
        options: [
          { id: "a", label: { pl: "będzie powstawał wolniej, bo chłód spowalnia fermentację", ua: "виникатиме повільніше, бо холод сповільнює бродіння" } },
          { id: "b", label: { pl: "drożdże zginą tak samo jak we wrzątku", ua: "дріжджі загинуть так само, як у кип’ятку" } },
          { id: "c", label: { pl: "drożdże przejdą na fotosyntezę", ua: "дріжджі перейдуть на фотосинтез" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lodówka spowalnia fermentację. Zabija drożdże wrzątek, nie chłód.",
              ua: "Холодильник сповільнює бродіння. Убиває дріжджі кип’яток, не холод."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chłód nie dodaje chloroplastów. Drożdże dalej są grzybami, tylko pracują wolniej.",
              ua: "Холод не додає хлоропластів. Дріжджі й далі є грибами, лише працюють повільніше."
            }
          }
        ],
        explanation: {
          pl: "W lodówce gaz powstaje wolniej. Drożdże pozostają żywe.",
          ua: "У холодильнику газ виникає повільніше. Дріжджі лишаються живими."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wniosek", ua: "Поняття. Висновок" },
      visual: vizGh("l13-wynik.png", {
        alt: { pl: "Duży balon przy cukrze, wiotki bez cukru", ua: "Велика кулька при цукрі, млява без цукру" },
        title: { pl: "Wynik widać. Wniosek się z niego czyta.", ua: "Результат видно. Висновок із нього читають." },
        prompt: { pl: "Plansza lekcji 13: wniosek o dwutlenku węgla." }
      }),
      text: {
        pl: [
          "Wynik: balon przy cukrze i żywych drożdżach jest duży. Przy kontroli bez cukru — nie.",
          [em("Wniosek"), ": drożdże z cukrem prowadzą fermentację i wytwarzają dwutlenek węgla, nawet gdy balon ogranicza dopływ powietrza."],
          "To zgadza się z lekcją 12. Fermentacja nie wymaga tlenu tak jak oddychanie tlenowe w mitochondriach."
        ],
        ua: [
          "Результат: кулька при цукрі і живих дріжджах велика. При контролі без цукру — ні.",
          [em("Висновок"), ": дріжджі з цукром ведуть бродіння і виробляють вуглекислий газ, навіть коли кулька обмежує доступ повітря."],
          "Це сходиться з уроком 12. Бродіння не потребує кисню так, як аеробне дихання в мітохондріях."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Co widać, co z tego wynika", ua: "Приклад. Що видно, що з цього випливає" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wynik opisuje butelki: jeden balon duży, drugi wiotki."],
            ua: ["Результат описує пляшки: одна кулька велика, друга млява."]
          }
        },
        {
          text: {
            pl: ["Wniosek mówi, dlaczego: cukier pozwolił drożdżom wytworzyć dwutlenek węgla."],
            ua: ["Висновок каже, чому: цукор дав дріжджам виробити вуглекислий газ."]
          }
        },
        {
          text: {
            pl: ["Wniosek nie jest nową hipotezą. Wynik już jest."],
            ua: ["Висновок не є новою гіпотезою. Результат уже є."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jaki wniosek?", ua: "Коротке питання. Який висновок?" },
      task: {
        id: "l13-g5",
        type: "single-choice",
        question: {
          pl: "Jaki wniosek wynika z dużego balonu przy cukrze i wiotkiego bez cukru?",
          ua: "Який висновок випливає з великої кульки при цукрі і млявої без цукру?"
        },
        options: [
          { id: "a", label: { pl: "drożdże z cukrem prowadzą fermentację i wytwarzają dwutlenek węgla", ua: "дріжджі з цукром ведуть бродіння і виробляють вуглекислий газ" } },
          { id: "b", label: { pl: "drożdże potrzebują tlenu tak jak mitochondrium, żeby napełnić balon", ua: "дріжджі потребують кисню так, як мітохондрія, щоб наповнити кульку" } },
          { id: "c", label: { pl: "balon nadyma tlen z liścia obok butelki", ua: "кульку надуває кисень із листка біля пляшки" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj butelki. Gaz pojawił się tam, gdzie był cukier.",
          ua: "Порівняй пляшки. Газ з’явився там, де був цукор."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Balon właśnie ogranicza powietrze, a gaz i tak powstał. To fermentacja, nie oddychanie tlenowe w mitochondrium.",
              ua: "Кулька якраз обмежує повітря, а газ усе одно виник. Це бродіння, не аеробне дихання в мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Liść obok butelki nie nadyma balonu. Gaz powstał z cukru w butelce z drożdżami.",
              ua: "Листок біля пляшки не надуває кульку. Газ виник із цукру в пляшці з дріжджами."
            }
          }
        ],
        explanation: {
          pl: "Drożdże z cukrem wytwarzają dwutlenek węgla w fermentacji.",
          ua: "Дріжджі з цукром виробляють вуглекислий газ у бродінні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Balon potrzebuje tlenu", ua: "Типова помилка. Кульці потрібен кисень" },
      claim: {
        pl: "„Skoro balon jest pełny, drożdże musiały oddychać tlenowo.”",
        ua: "«Раз кулька повна, дріжджі мусили дихати аеробно.»"
      },
      text: {
        pl: [
          "Oddychanie tlenowe zużywa tlen w mitochondrium.",
          "Tu balon ogranicza powietrze, a dwutlenek węgla i tak powstaje. To fermentacja."
        ],
        ua: [
          "Аеробне дихання споживає кисень у мітохондрії.",
          "Тут кулька обмежує повітря, а вуглекислий газ усе одно виникає. Це бродіння."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wynik czy wniosek?", ua: "Сам. Результат чи висновок?" },
      task: {
        id: "l13-p5",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest wynikiem, a nie wnioskiem?",
          ua: "Яке речення є результатом, а не висновком?"
        },
        options: [
          { id: "a", label: { pl: "balon przy cukrze jest duży, a przy kontroli wiotki", ua: "кулька при цукрі велика, а при контролі млява" } },
          { id: "b", label: { pl: "fermentacja bez tlenu wytwarza dwutlenek węgla", ua: "бродіння без кисню виробляє вуглекислий газ" } },
          { id: "c", label: { pl: "drożdże są roślinami, bo butelka stoi przy oknie", ua: "дріжджі є рослинами, бо пляшка стоїть біля вікна" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To już wniosek: co wynik znaczy. Wynik opisuje tylko to, co widać na butelkach.",
              ua: "Це вже висновок: що результат означає. Результат описує лише те, що видно на пляшках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Okno nie robi z drożdży rośliny. Wynik to porównanie balonów, nie nazwa królestwa.",
              ua: "Вікно не робить із дріжджів рослину. Результат — це порівняння кульок, не назва царства."
            }
          }
        ],
        explanation: {
          pl: "Wynik to duży balon przy cukrze i wiotki przy kontroli.",
          ua: "Результат — це велика кулька при цукрі і млява при контролі."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok doświadczenia sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок досліду ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Problem i hipoteza", ua: "Перевірка 1. Проблема і гіпотеза" },
      task: {
        id: "l13-t1",
        type: "single-choice",
        question: {
          pl: "Która para pasuje do doświadczenia z drożdżami?",
          ua: "Яка пара пасує до досліду з дріжджами?"
        },
        options: [
          { id: "a", label: { pl: "problem: czy powstaje gaz do balonu?; hipoteza: tak, gdy drożdże są żywe i mają cukier", ua: "проблема: чи виникає газ до кульки?; гіпотеза: так, коли дріжджі живі і мають цукор" } },
          { id: "b", label: { pl: "problem i hipoteza to jedno zdanie o kolorze balonu", ua: "проблема і гіпотеза — це одне речення про колір кульки" } },
          { id: "c", label: { pl: "hipoteza: ktoś dmucha; problem: czy drożdże mają chlorofil", ua: "гіпотеза: хтось дмухає; проблема: чи дріжджі мають хлорофіл" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Problem jest pytaniem, hipoteza odpowiedzią. Kolor balonu nie jest żadnym z nich.",
              ua: "Проблема є питанням, гіпотеза — відповіддю. Колір кульки не є жодним із них."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nikt nie dmucha, a drożdże nie mają chlorofilu. Para dotyczy gazu z żywych drożdży i cukru.",
              ua: "Ніхто не дмухає, а дріжджі не мають хлорофілу. Пара стосується газу з живих дріжджів і цукру."
            }
          }
        ],
        explanation: {
          pl: "Problem pyta o gaz. Hipoteza mówi, że balon się nadmie przy żywych drożdżach i cukrze.",
          ua: "Проблема питає про газ. Гіпотеза каже, що кулька надується при живих дріжджах і цукрі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Próby", ua: "Перевірка 2. Проби" },
      task: {
        id: "l13-t2",
        type: "single-choice",
        question: {
          pl: "Które zestawienie prób jest prawdziwe?",
          ua: "Яке зіставлення проб правдиве?"
        },
        options: [
          { id: "a", label: { pl: "badawcza — drożdże i cukier; kontrolna — tak samo, ale bez cukru", ua: "дослідна — дріжджі і цукор; контрольна — так само, але без цукру" } },
          { id: "b", label: { pl: "kontrolna ma więcej cukru niż badawcza", ua: "контрольна має більше цукру, ніж дослідна" } },
          { id: "c", label: { pl: "badawcza jest wrzątkiem, który zabija drożdże", ua: "дослідна є кип’ятком, який убиває дріжджі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kontrola nie dokłada cukru. Na rysunku właśnie go nie ma.",
              ua: "Контроль не додає цукру. На малюнку його якраз немає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wrzątek zabija drożdże, więc nie jest próbą badawczą z cukrem. Badawcza ma żywe drożdże i cukier.",
              ua: "Кип’яток убиває дріжджі, тож він не є дослідною пробою з цукром. Дослідна має живих дріжджів і цукор."
            }
          }
        ],
        explanation: {
          pl: "Badawcza ma cukier. Kontrolna jest bez cukru.",
          ua: "Дослідна має цукор. Контрольна без цукру."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Balon", ua: "Перевірка 3. Кулька" },
      task: {
        id: "l13-t3",
        type: "single-choice",
        question: {
          pl: "Co pokazuje nadmuchany balon przy cukrze?",
          ua: "Що показує надута кулька при цукрі?"
        },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla z fermentacji drożdży", ua: "вуглекислий газ із бродіння дріжджів" } },
          { id: "b", label: { pl: "tlen z liścia, który stoi obok", ua: "кисень із листка, який стоїть поруч" } },
          { id: "c", label: { pl: "parę wodną z fotosyntezy drożdży", ua: "водяну пару з фотосинтезу дріжджів" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liść obok nie nadyma balonu. Gaz powstał w butelce z drożdżami i cukrem.",
              ua: "Листок поруч не надуває кульку. Газ виник у пляшці з дріжджами і цукром."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drożdże nie prowadzą fotosyntezy. Nadmuchany balon pokazuje dwutlenek węgla z fermentacji.",
              ua: "Дріжджі не ведуть фотосинтез. Надута кулька показує вуглекислий газ із бродіння."
            }
          }
        ],
        explanation: {
          pl: "Nadmuchany balon pokazuje dwutlenek węgla z fermentacji.",
          ua: "Надута кулька показує вуглекислий газ із бродіння."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Warunki", ua: "Перевірка 4. Умови" },
      task: {
        id: "l13-t4",
        type: "single-choice",
        question: {
          pl: "Które warunki są potrzebne w tym doświadczeniu?",
          ua: "Які умови потрібні в цьому досліді?"
        },
        options: [
          { id: "a", label: { pl: "żywe drożdże, cukier i umiarkowane ciepło", ua: "живі дріжджі, цукор і помірне тепло" } },
          { id: "b", label: { pl: "koniecznie wrzątek", ua: "обов’язково кип’яток" } },
          { id: "c", label: { pl: "chloroplasty i pełne słońce", ua: "хлоропласти і повне сонце" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wrzątek zabija drożdże. Potrzebne jest umiarkowane ciepło, nie wrzątek.",
              ua: "Кип’яток убиває дріжджі. Потрібне помірне тепло, не кип’яток."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty i słońce są do fotosyntezy. Drożdże potrzebują życia, cukru i ciepła.",
              ua: "Хлоропласти і сонце є для фотосинтезу. Дріжджам потрібні життя, цукор і тепло."
            }
          }
        ],
        explanation: {
          pl: "Potrzebne są żywe drożdże, cukier i umiarkowane ciepło.",
          ua: "Потрібні живі дріжджі, цукор і помірне тепло."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wniosek", ua: "Перевірка 5. Висновок" },
      task: {
        id: "l13-t5",
        type: "single-choice",
        question: {
          pl: "Który wniosek jest poprawny?",
          ua: "Який висновок правильний?"
        },
        options: [
          { id: "a", label: { pl: "drożdże z cukrem wytwarzają dwutlenek węgla podczas fermentacji, nawet gdy balon ogranicza powietrze", ua: "дріжджі з цукром виробляють вуглекислий газ під час бродіння, навіть коли кулька обмежує повітря" } },
          { id: "b", label: { pl: "gaz w balonie to tlen, więc drożdże oddychają tylko tlenowo", ua: "газ у кульці — це кисень, тож дріжджі дихають лише аеробно" } },
          { id: "c", label: { pl: "bez cukru balon jest większy, więc cukier hamuje fermentację", ua: "без цукру кулька більша, тож цукор гальмує бродіння" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gaz to dwutlenek węgla, a balon ogranicza powietrze. To fermentacja, nie oddychanie tlenowe.",
              ua: "Газ — це вуглекислий газ, а кулька обмежує повітря. Це бродіння, не аеробне дихання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Większy jest balon przy cukrze. Cukier umożliwia fermentację, nie ją hamuje.",
              ua: "Більшою є кулька при цукрі. Цукор уможливлює бродіння, не гальмує його."
            }
          }
        ],
        explanation: {
          pl: "Drożdże z cukrem wytwarzają dwutlenek węgla w fermentacji, także przy ograniczonym powietrzu.",
          ua: "Дріжджі з цукром виробляють вуглекислий газ у бродінні, також при обмеженому повітрі."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l13-szkola.png", {
        alt: { pl: "Szkolny stół z butelkami — nie do picia", ua: "Шкільний стіл із пляшками — не для пиття" },
        title: { pl: "Oglądasz. Nie pijesz.", ua: "Дивишся. Не п’єш." },
        prompt: { pl: "Zdjęcie lekcji 13: pracownia, kartka nie pić." }
      }),
      text: {
        pl: [
          "Problem pyta o gaz. Hipoteza: żywe drożdże z cukrem nadmą balon dwutlenkiem węgla.",
          "Badawcza ma cukier. Kontrolna jest bez cukru. Jeden czynnik.",
          "Balon pokazuje dwutlenek węgla, nie tlen.",
          "Warunki: żywe drożdże, cukier, ciepła woda. Wrzątek zabija. Lodówka spowalnia.",
          "Wniosek: fermentacja bez tlenu wytwarza dwutlenek węgla. Mieszaniny nie pijesz."
        ],
        ua: [
          "Проблема питає про газ. Гіпотеза: живі дріжджі з цукром надують кульку вуглекислим газом.",
          "Дослідна має цукор. Контрольна без цукру. Один чинник.",
          "Кулька показує вуглекислий газ, не кисень.",
          "Умови: живі дріжджі, цукор, тепла вода. Кип’яток убиває. Холодильник сповільнює.",
          "Висновок: бродіння без кисню виробляє вуглекислий газ. Мішанину не п’єш."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Sformułuję problem i hipotezę doświadczenia z drożdżami.", ua: "Сформулюю проблему і гіпотезу досліду з дріжджами." },
        { pl: "Wskażę próbę badawczą i kontrolną.", ua: "Вкажу дослідну і контрольну пробу." },
        { pl: "Powiem, że balon pokazuje dwutlenek węgla.", ua: "Скажу, що кулька показує вуглекислий газ." },
        { pl: "Wymienię warunki: żywe drożdże, cukier, umiarkowane ciepło.", ua: "Назву умови: живі дріжджі, цукор, помірне тепло." },
        { pl: "Sformułuję wniosek: fermentacja bez tlenu wytwarza dwutlenek węgla.", ua: "Сформулюю висновок: бродіння без кисню виробляє вуглекислий газ." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
