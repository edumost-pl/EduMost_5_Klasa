function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L18_Bakterie_znaczenie_i_zdrowie/images/";

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
      heading: { pl: "Misja: pożytek i ostrożność", ua: "Місія: користь і обережність" },
      visual: vizGh("l18-zacznijmy.png", {
        alt: { pl: "Jogurt, korzenie w glebie i mycie rąk", ua: "Йогурт, корені в ґрунті і миття рук" },
        title: { pl: "Nie każde bakterie są wrogiem.", ua: "Не кожні бактерії є ворогом." },
        prompt: { pl: "Plansza lekcji 18: jogurt, gleba, mycie rąk." }
      }),
      text: {
        pl: [
          "To lekcja 18: znaczenie bakterii i zdrowie. Na lekcji 17 było, jak bakterie żyją. Dziś: co z tego wynika dla człowieka, gleby i jedzenia.",
          "Większość bakterii nie jest wrogiem. Część pomaga. Część może wywołać chorobę. Wtedy liczą się higiena i lekarz, nie panika.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 18: значення бактерій і здоров’я. На уроці 17 було, як бактерії живуть. Сьогодні: що з цього випливає для людини, ґрунту і їжі.",
          "Більшість бактерій не є ворогом. Частина допомагає. Частина може викликати хворобу. Тоді важать гігієна і лікар, не паніка.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "bakterie pożyteczne", ua: "корисні бактерії — допомагають" },
        { pl: "bakterie chorobotwórcze", ua: "хвороботворні бактерії — не всі такі" },
        { pl: "flora jelitowa", ua: "кишкова мікрофлора — бактерії в кишках, допомагають травленню" },
        { pl: "higiena", ua: "гігієна — менше хвороботворних, не стерильний світ" },
        { pl: "pasteryzacja", ua: "пастеризація — підігрів їжі, багато мікробів гине" },
        { pl: "antybiotyk", ua: "антибіотик — на бактерії, не на віруси" },
        { pl: "antybiotykooporność", ua: "стійкість бактерій до ліків" },
        { pl: "saprobiont", ua: "сапробіонт — розкладає рештки" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pożyteczne", ua: "Поняття. Корисні" },
      visual: vizGh("l18-pozyteczne.png", {
        alt: { pl: "Jogurt, azot przy korzeniu, saprobionty i flora jelitowa", ua: "Йогурт, азот біля кореня, сапробіонти і кишкова мікрофлора" },
        title: { pl: "Jedzenie, gleba, jelita.", ua: "Їжа, ґрунт, кишки." },
        prompt: { pl: "Plansza lekcji 18: pożyteczne bakterie." }
      }),
      text: {
        pl: [
          [em("Bakterie pożyteczne"), " pomagają nam i przyrodzie. Bakteria nie znaczy automatycznie choroby."],
          "Są w jogurcie i serze. Przy korzeniach roślin motylkowych wiążą azot. Saprobionty rozkładają szczątki w glebie — bez nich świat zapełniałby się resztkami.",
          [em("Flora jelitowa"), " to bakterie w jelitach, które pomagają trawić."]
        ],
        ua: [
          [em("Корисні бактерії"), " допомагають нам і природі. Бактерія не означає автоматично хворобу."],
          "Вони є в йогурті і сирі. Біля коренів бобових рослин зв’язують азот. Сапробіонти розкладають рештки в ґрунті — без них світ заповнювався б залишками.",
          [em("Кишкова мікрофлора"), " — це бактерії в кишках, які допомагають травленню."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Cztery kafelki", ua: "Приклад. Чотири плитки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jogurt i ser: bakterie pomagają powstać tym produktom."],
            ua: ["Йогурт і сир: бактерії допомагають цим продуктам постати."]
          }
        },
        {
          text: {
            pl: ["Przy korzeniu rośliny motylkowej bakterie wiążą azot. Obok liść w glebie rozkładają saprobionty."],
            ua: ["Біля кореня бобової рослини бактерії зв’язують азот. Поруч листок у ґрунті розкладають сапробіонти."]
          }
        },
        {
          text: {
            pl: ["Flora jelitowa zostaje w jelitach i pomaga trawić. To nie kapsyd wirusa."],
            ua: ["Кишкова мікрофлора лишається в кишках і допомагає травленню. Це не капсид вірусу."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jelita", ua: "Коротке питання. Кишки" },
      task: {
        id: "l18-g1",
        type: "single-choice",
        question: {
          pl: "Czym jest flora jelitowa?",
          ua: "Що таке кишкова мікрофлора?"
        },
        options: [
          { id: "a", label: { pl: "bakteriami w jelitach, które pomagają trawić", ua: "бактеріями в кишках, які допомагають травленню" } },
          { id: "b", label: { pl: "kapsydem wirusa grypy", ua: "капсидом вірусу грипу" } },
          { id: "c", label: { pl: "chorobą, którą niesie każdy jogurt", ua: "хворобою, яку несе кожен йогурт" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj bakterii, które pomagają w jelitach, nie wirusa.",
          ua: "Шукай бактерії, які допомагають у кишках, не вірус."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd jest osłonką wirusa. Flora jelitowa to pożyteczne bakterie w jelitach.",
              ua: "Капсид є оболонкою вірусу. Кишкова мікрофлора — це корисні бактерії в кишках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakterie jogurtu są pożyteczne. Flora jelitowa pomaga trawić, nie jest chorobą z kubka.",
              ua: "Бактерії йогурту корисні. Кишкова мікрофлора допомагає травленню, це не хвороба зі склянки."
            }
          }
        ],
        explanation: {
          pl: "Flora jelitowa to bakterie w jelitach, które pomagają trawić.",
          ua: "Кишкова мікрофлора — це бактерії в кишках, які допомагають травленню."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jogurt do kosza", ua: "Типова помилка. Йогурт у смітник" },
      claim: {
        pl: "„Każda bakteria to choroba, więc jogurt trzeba wyrzucić.”",
        ua: "«Кожна бактерія — це хвороба, тож йогурт треба викинути.»"
      },
      text: {
        pl: [
          "Bakterie jogurtu i sera są pożyteczne.",
          "Bakteria nie jest automatycznie chorobą."
        ],
        ua: [
          "Бактерії йогурту і сиру корисні.",
          "Бактерія не є автоматично хворобою."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szczątki w glebie", ua: "Сам. Рештки в ґрунті" },
      task: {
        id: "l18-p1",
        type: "single-choice",
        question: {
          pl: "Saprobionty rozkładają szczątki w glebie. Jaka to rola?",
          ua: "Сапробіонти розкладають рештки в ґрунті. Яка це роль?"
        },
        options: [
          { id: "a", label: { pl: "pożyteczna — bez nich zostawałyby same resztki", ua: "корисна — без них лишалися б самі залишки" } },
          { id: "b", label: { pl: "zawsze chorobotwórcza, bo gleba jest brudna", ua: "завжди хвороботворна, бо ґрунт брудний" } },
          { id: "c", label: { pl: "to chloroplasty liścia, nie bakterie", ua: "це хлоропласти листка, не бактерії" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Brud na obrazku nie robi z saprobionta choroby. Rozkładanie szczątków jest rolą pożyteczną.",
              ua: "Бруд на малюнку не робить із сапробіонта хворобу. Розкладання решток є корисною роллю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast jest w komórce roślinnej. Saprobiont jest bakterią, która rozkłada szczątki.",
              ua: "Хлоропласт є в рослинній клітині. Сапробіонт є бактерією, яка розкладає рештки."
            }
          }
        ],
        explanation: {
          pl: "Saprobionty są pożyteczne: rozkładają szczątki.",
          ua: "Сапробіонти корисні: розкладають рештки."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Chorobotwórcze", ua: "Поняття. Хвороботворні" },
      visual: vizGh("l18-chorobotworcze.png", {
        alt: { pl: "Termometr i lekarz, bez zbliżenia rany", ua: "Термометр і лікар, без наближення рани" },
        title: { pl: "Niektóre bakterie. Nie wszystkie.", ua: "Деякі бактерії. Не всі." },
        prompt: { pl: "Plansza lekcji 18: bakterie chorobotwórcze." }
      }),
      text: {
        pl: [
          [em("Bakterie chorobotwórcze"), " to te, które mogą wywołać chorobę. Nie wszystkie bakterie takie są."],
          "Na tę lekcję wystarczą spokojne przykłady: angina i próchnica zębów. Nie ma tu listy grozy i nie ma zbliżenia rany.",
          "Jeśli źle się czujesz, mówisz dorosłemu. Diagnozę stawia lekarz. Ta lekcja nie zastępuje wizyty."
        ],
        ua: [
          [em("Хвороботворні бактерії"), " — це ті, які можуть викликати хворобу. Не всі бактерії такі."],
          "Для цього уроку досить спокійних прикладів: ангіна і карієс зубів. Тут немає списку жаху і немає наближення рани.",
          "Якщо тобі погано, кажеш дорослому. Діагноз ставить лікар. Цей урок не замінює візиту."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa słowa, nie diagnoza", ua: "Приклад. Два слова, не діагноз" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Angina i próchnica to przykłady chorób, które mogą wiązać się z bakteriami."],
            ua: ["Ангіна і карієс — це приклади хвороб, які можуть бути пов’язані з бактеріями."]
          }
        },
        {
          text: {
            pl: ["Nazwa z planszy nie jest rozpoznaniem z ławki. Źle się czujesz — mówisz dorosłemu."],
            ua: ["Назва з плаката не є розпізнаванням з парти. Тобі погано — кажеш дорослому."]
          }
        },
        {
          text: {
            pl: ["Jogurt z poprzedniej części zostaje pożyteczny. Jedna choroba nie zamienia wszystkich bakterii we wrogów."],
            ua: ["Йогурт з попередньої частини лишається корисним. Одна хвороба не перетворює всіх бактерій на ворогів."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czy wszystkie?", ua: "Коротке питання. Чи всі?" },
      task: {
        id: "l18-g2",
        type: "single-choice",
        question: {
          pl: "Które zdanie o bakteriach chorobotwórczych jest prawdziwe?",
          ua: "Яке речення про хвороботворні бактерії правдиве?"
        },
        options: [
          { id: "a", label: { pl: "niektóre mogą wywołać chorobę, ale nie wszystkie bakterie", ua: "деякі можуть викликати хворобу, але не всі бактерії" } },
          { id: "b", label: { pl: "każda bakteria wywołuje anginę", ua: "кожна бактерія викликає ангіну" } },
          { id: "c", label: { pl: "próchnica jest wirusem, więc bakterii chorobotwórczych nie ma", ua: "карієс є вірусом, тож хвороботворних бактерій немає" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słowa „niektóre”, nie „wszystkie”.",
          ua: "Шукай слово «деякі», не «всі»."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Angina jest przykładem, nie losem każdej bakterii. Pożyteczne bakterie zostają pożyteczne.",
              ua: "Ангіна є прикладом, не долею кожної бактерії. Корисні бактерії лишаються корисними."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Próchnica na tej lekcji jest przykładem choroby bakteryjnej, nie wirusem. Chorobotwórcze bakterie istnieją, ale nie są wszystkimi.",
              ua: "Карієс на цьому уроці є прикладом бактеріальної хвороби, не вірусом. Хвороботворні бактерії існують, але вони не всі."
            }
          }
        ],
        explanation: {
          pl: "Niektóre bakterie są chorobotwórcze. Nie wszystkie.",
          ua: "Деякі бактерії хвороботворні. Не всі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wszystkie groźne", ua: "Типова помилка. Усі небезпечні" },
      claim: {
        pl: "„Wszystkie bakterie są chorobotwórcze.”",
        ua: "«Усі бактерії хвороботворні.»"
      },
      text: {
        pl: [
          "Chorobotwórcza jest część bakterii.",
          "Jogurt, gleba i flora jelitowa pokazują bakterie pożyteczne."
        ],
        ua: [
          "Хвороботворна є частина бактерій.",
          "Йогурт, ґрунт і кишкова мікрофлора показують корисних бактерій."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jogurt i angina", ua: "Сам. Йогурт і ангіна" },
      task: {
        id: "l18-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń mówi: skoro bywa angina bakteryjna, jogurt też jest chorobotwórczy. Co poprawić?",
          ua: "Учень каже: якщо буває бактеріальна ангіна, йогурт теж хвороботворний. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "angina bywa przykładem choroby, a bakterie jogurtu są pożyteczne", ua: "ангіна буває прикладом хвороби, а бактерії йогурту корисні" } },
          { id: "b", label: { pl: "tak — każdy kubek jogurtu to angina", ua: "так — кожна склянка йогурту є ангіною" } },
          { id: "c", label: { pl: "tak — lekarz jest zbędny, bo jogurt stawia diagnozę", ua: "так — лікар не потрібен, бо йогурт ставить діагноз" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jedna choroba nie przenosi nazwy na jogurt. Bakterie jogurtu są pożyteczne, angina jest osobnym przykładem.",
              ua: "Одна хвороба не переносить назву на йогурт. Бактерії йогурту корисні, ангіна є окремим прикладом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Diagnozę stawia lekarz, nie kubek jogurtu. Źle się czujesz — mówisz dorosłemu.",
              ua: "Діагноз ставить лікар, не склянка йогурту. Тобі погано — кажеш дорослому."
            }
          }
        ],
        explanation: {
          pl: "Angina nie robi z bakterii jogurtu bakterii chorobotwórczych.",
          ua: "Ангіна не робить із бактерій йогурту хвороботворних бактерій."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Higiena", ua: "Поняття. Гігієна" },
      visual: vizGh("l18-higiena.png", {
        alt: { pl: "Mycie rąk, bezpieczna woda i jedzenie w lodówce", ua: "Миття рук, безпечна вода і їжа в холодильнику" },
        title: { pl: "Ręce, woda, chłód.", ua: "Руки, вода, холод." },
        prompt: { pl: "Plansza lekcji 18: higiena." }
      }),
      text: {
        pl: [
          [em("Higiena"), " zmniejsza szansę, że bakterie chorobotwórcze trafią do ust albo rany."],
          "Ręce myje się przed jedzeniem i po toalecie. Wody z kałuży się nie pije. Jedzenie, które szybko się psuje, stoi w lodówce: zimno spowalnia podział bakterii z lekcji 17.",
          "Higiena nie znaczy „wysterylizować cały świat”. Flora jelitowa ma zostać. Chodzi o rozsądek, nie o strach."
        ],
        ua: [
          [em("Гігієна"), " зменшує шанс, що хвороботворні бактерії потраплять до рота чи рани."],
          "Руки миють перед їжею і після туалету. Воду з калюжі не п’ють. Їжа, яка швидко псується, стоїть у холодильнику: холод сповільнює поділ бактерій з уроку 17.",
          "Гігієна не означає «стерилизувати весь світ». Кишкова мікрофлора має лишитися. Ідеться про розсуд, не про страх."
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
            pl: ["Pierwszy kafelek: ręce przed jedzeniem. Mniej chorobotwórczych bakterii przy jedzeniu."],
            ua: ["Перша плитка: руки перед їжею. Менше хвороботворних бактерій біля їжі."]
          }
        },
        {
          text: {
            pl: ["Drugi: bezpieczna woda. Kałuża nie jest szklanką do picia."],
            ua: ["Друга: безпечна вода. Калюжа не є склянкою для пиття."]
          }
        },
        {
          text: {
            pl: ["Trzeci: lodówka dla jedzenia, które łatwo się psuje. Zimno spowalnia podział. Flory jelitowej to nie kasuje."],
            ua: ["Третя: холодильник для їжі, яка легко псується. Холод сповільнює поділ. Кишкову мікрофлору це не стирає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ręce", ua: "Коротке питання. Руки" },
      task: {
        id: "l18-g3",
        type: "single-choice",
        question: {
          pl: "Po co myć ręce przed jedzeniem?",
          ua: "Навіщо мити руки перед їжею?"
        },
        options: [
          { id: "a", label: { pl: "żeby mniej bakterii chorobotwórczych trafiło do ust", ua: "щоб менше хвороботворних бактерій потрапило до рота" } },
          { id: "b", label: { pl: "żeby zabić florę jelitową na zawsze", ua: "щоб назавжди вбити кишкову мікрофлору" } },
          { id: "c", label: { pl: "żeby wirus dostał chloroplasty", ua: "щоб вірус отримав хлоропласти" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj mniej chorobotwórczych przy jedzeniu, nie końca flory jelitowej.",
          ua: "Шукай менше хвороботворних біля їжі, не кінець кишкової мікрофлори."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mycie rąk nie jest po to, by usunąć florę jelitową. Ona ma zostać. Chodzi o bakterie chorobotwórcze przy jedzeniu.",
              ua: "Миття рук не для того, щоб прибрати кишкову мікрофлору. Вона має лишитися. Ідеться про хвороботворні бактерії біля їжі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie dostaje chloroplastów od mydła. Mycie rąk ogranicza drogę bakterii chorobotwórczych do ust.",
              ua: "Вірус не отримує хлоропластів від мила. Миття рук обмежує шлях хвороботворних бактерій до рота."
            }
          }
        ],
        explanation: {
          pl: "Mycie rąk przed jedzeniem ogranicza bakterie chorobotwórcze.",
          ua: "Миття рук перед їжею обмежує хвороботворні бактерії."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Sterylny świat", ua: "Типова помилка. Стерильний світ" },
      claim: {
        pl: "„Trzeba zabić wszystkie bakterie, także florę jelitową.”",
        ua: "«Треба вбити всі бактерії, також кишкову мікрофлору.»"
      },
      text: {
        pl: [
          "Higiena ogranicza chorobotwórcze, nie czyści świata ze wszystkich bakterii.",
          "Flora jelitowa jest pożyteczna i ma zostać."
        ],
        ua: [
          "Гігієна обмежує хвороботворні, не чистить світ від усіх бактерій.",
          "Кишкова мікрофлора корисна і має лишитися."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Lodówka", ua: "Сам. Холодильник" },
      task: {
        id: "l18-p3",
        type: "single-choice",
        question: {
          pl: "Dlaczego jedzenie, które szybko się psuje, trzyma się w lodówce?",
          ua: "Чому їжу, яка швидко псується, тримають у холодильнику?"
        },
        options: [
          { id: "a", label: { pl: "bo zimno spowalnia podział bakterii", ua: "бо холод сповільнює поділ бактерій" } },
          { id: "b", label: { pl: "bo zimno zamienia bakterie w wirusy", ua: "бо холод перетворює бактерії на віруси" } },
          { id: "c", label: { pl: "bo lodówka zabija florę jelitową w ciele", ua: "бо холодильник убиває кишкову мікрофлору в тілі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zimno nie robi wirusa z bakterii. Spowalnia ich podział, o czym była lekcja 17.",
              ua: "Холод не робить вірус із бактерії. Він сповільнює їхній поділ, про це був урок 17."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Lodówka dotyczy jedzenia, nie flory w jelitach. Zimno spowalnia podział bakterii w tym jedzeniu.",
              ua: "Холодильник стосується їжі, не мікрофлори в кишках. Холод сповільнює поділ бактерій у цій їжі."
            }
          }
        ],
        explanation: {
          pl: "W lodówce zimno spowalnia podział bakterii w jedzeniu, które łatwo się psuje.",
          ua: "У холодильнику холод сповільнює поділ бактерій в їжі, яка легко псується."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pasteryzacja", ua: "Поняття. Пастеризація" },
      visual: vizGh("l18-pasteryzacja.png", {
        alt: { pl: "Mleko z napisem pasteryzowane", ua: "Молоко з написом пастеризоване" },
        title: { pl: "Podgrzanie niszczy wiele bakterii.", ua: "Підігрів знищує багато бактерій." },
        prompt: { pl: "Plansza lekcji 18: pasteryzacja mleka." }
      }),
      text: {
        pl: [
          [em("Pasteryzacja"), " to podgrzanie żywności, na przykład mleka. Niszczy wiele drobnoustrojów i pozwala dłużej przechowywać produkt."],
          "To nie sterylizacja całego domu i nie przepis do zrobienia w garnku. Mleko pasteryzowane ze sklepu jest bezpieczniejsze niż surowe z nieznanego źródła.",
          "Przetrwalniki z lekcji 17 bywają odporne. Dlatego data ważności i lodówka nadal się liczą."
        ],
        ua: [
          [em("Пастеризація"), " — це підігрів їжі, наприклад молока. Вона знищує багато мікробів і дозволяє довше зберігати продукт."],
          "Це не стерилізація всього дому і не рецепт для каструлі. Пастеризоване молоко з крамниці безпечніше за сире з невідомого джерела.",
          "Спори з уроку 17 бувають стійкими. Тому термін придатності і холодильник досі важать."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Karton mleka", ua: "Приклад. Пакет молока" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na kartonie jest napis „pasteryzowane”. Produkt był podgrzany, nie jest obrazkiem gwałtownego wrzenia."],
            ua: ["На пакеті є напис «пастеризоване». Продукт був підігрітий, це не малюнок бурхливого кипіння."]
          }
        },
        {
          text: {
            pl: ["Podgrzanie niszczy wiele bakterii. Dzięki temu mleko da się dłużej przechować."],
            ua: ["Підігрів знищує багато бактерій. Завдяки цьому молоко можна довше зберігати."]
          }
        },
        {
          text: {
            pl: ["Przetrwalnik może zostać. Data i lodówka nie znikają po pasteryzacji."],
            ua: ["Спора може лишитися. Дата і холодильник не зникають після пастеризації."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co to jest?", ua: "Коротке питання. Що це?" },
      task: {
        id: "l18-g4",
        type: "single-choice",
        question: {
          pl: "Czym jest pasteryzacja?",
          ua: "Що таке пастеризація?"
        },
        options: [
          { id: "a", label: { pl: "podgrzaniem żywności, które niszczy wiele drobnoustrojów", ua: "підігрівом їжі, який знищує багато мікробів" } },
          { id: "b", label: { pl: "szczepieniem przeciw odrze", ua: "щепленням проти кору" } },
          { id: "c", label: { pl: "gotowaniem, po którym przetrwalniki na pewno giną i data jest zbędna", ua: "кип’ятінням, після якого спори напевно гинуть і дата не потрібна" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj podgrzania jedzenia, nie szczepienia i nie obietnicy, że ginie wszystko.",
          ua: "Шукай підігрів їжі, не щеплення і не обіцянку, що гине все."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szczepienie uczy organizm rozpoznawać wirusa. Pasteryzacja podgrzewa żywność i niszczy wiele drobnoustrojów.",
              ua: "Щеплення вчить організм розпізнавати вірус. Пастеризація підігріває їжу і знищує багато мікробів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Przetrwalniki bywają odporne. Pasteryzacja niszczy wiele drobnoustrojów, ale data ważności zostaje.",
              ua: "Спори бувають стійкими. Пастеризація знищує багато мікробів, але термін придатності лишається."
            }
          }
        ],
        explanation: {
          pl: "Pasteryzacja to podgrzanie żywności, które niszczy wiele drobnoustrojów.",
          ua: "Пастеризація — це підігрів їжі, який знищує багато мікробів."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Już nic nie zostanie", ua: "Типова помилка. Уже нічого не лишиться" },
      claim: {
        pl: "„Pasteryzacja zabija wszystko, więc mleko może stać w cieple bez daty.”",
        ua: "«Пастеризація вбиває все, тож молоко може стояти в теплі без дати.»"
      },
      text: {
        pl: [
          "Pasteryzacja niszczy wiele drobnoustrojów, nie daje obietnicy, że znika każdy przetrwalnik.",
          "Data ważności i lodówka nadal się liczą."
        ],
        ua: [
          "Пастеризація знищує багато мікробів і не обіцяє, що зникає кожна спора.",
          "Термін придатності і холодильник досі важать."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa mleka", ua: "Сам. Два молока" },
      task: {
        id: "l18-p4",
        type: "single-choice",
        question: {
          pl: "Które mleko jest bezpieczniejsze według tej lekcji?",
          ua: "Яке молоко безпечніше за цим уроком?"
        },
        options: [
          { id: "a", label: { pl: "pasteryzowane ze sklepu, nie surowe z nieznanego źródła", ua: "пастеризоване з крамниці, не сире з невідомого джерела" } },
          { id: "b", label: { pl: "surowe z nieznanego źródła, bo ma więcej pożytecznych wirusów", ua: "сире з невідомого джерела, бо має більше корисних вірусів" } },
          { id: "c", label: { pl: "dowolne ciepłe, bo pasteryzacja jest szczepieniem", ua: "будь-яке тепле, бо пастеризація є щепленням" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nieznane surowe mleko nie jest bezpieczniejsze. Pasteryzowane ze sklepu przeszło podgrzanie, które niszczy wiele drobnoustrojów.",
              ua: "Невідоме сире молоко не є безпечнішим. Пастеризоване з крамниці пройшло підігрів, який знищує багато мікробів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasteryzacja nie jest szczepieniem. Liczy się mleko podgrzane tak, jak na kartonie, nie każde ciepłe.",
              ua: "Пастеризація не є щепленням. Важить молоко, підігріте так, як на пакеті, не кожне тепле."
            }
          }
        ],
        explanation: {
          pl: "Pasteryzowane mleko ze sklepu jest bezpieczniejsze niż surowe z nieznanego źródła.",
          ua: "Пастеризоване молоко з крамниці безпечніше за сире з невідомого джерела."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Antybiotyk i wirus", ua: "Поняття. Антибіотик і вірус" },
      visual: vizGh("l18-antybiotyki.png", {
        alt: { pl: "Lek przy bakterii i przekreślony przy wirusie", ua: "Ліки біля бактерії і перекреслені біля вірусу" },
        title: { pl: "Na bakterie może pomóc. Na wirusa nie.", ua: "На бактерії може допомогти. На вірус ні." },
        prompt: { pl: "Plansza lekcji 18: antybiotyk i wirus." }
      }),
      text: {
        pl: [
          [em("Antybiotyki"), " to leki, które niszczą bakterie albo hamują ich wzrost. Przepisuje je lekarz."],
          ["Na wirusy — grypę i ospę wietrzną z lekcji 16 — antybiotyki ", em("nie działają"), "."],
          "Dawki nie dobiera się samemu z szafki. „Na wszelki wypadek” przy wirusie nie pomaga."
        ],
        ua: [
          [em("Антибіотики"), " — це ліки, які знищують бактерії або гальмують їхній ріст. Призначає їх лікар."],
          ["На віруси — грип і вітрянку з уроку 16 — антибіотики ", em("не діють"), "."],
          "Дозу не добирають самотужки з шафки. «Про всяк випадок» при вірусі не допомагає."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie strony", ua: "Приклад. Два боки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewa strona: bakteria i pudełko leku. Antybiotyk może pomóc, gdy lekarz go przepisze."],
            ua: ["Лівий бік: бактерія і коробка ліків. Антибіотик може допомогти, коли лікар його призначить."]
          }
        },
        {
          text: {
            pl: ["Prawa strona: wirus i przekreślone pudełko. Grypa nie jest powodem do antybiotyku z apteczki."],
            ua: ["Правий бік: вірус і перекреслена коробка. Грип не є приводом до антибіотика з аптечки."]
          }
        },
        {
          text: {
            pl: ["Angina bywa bakteryjna, grypa jest wirusowa. Która jest która, rozstrzyga lekarz, nie ławka."],
            ua: ["Ангіна буває бактеріальною, грип є вірусним. Яка є якою, вирішує лікар, не парта."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Na co lek?", ua: "Коротке питання. На що ліки?" },
      task: {
        id: "l18-g5",
        type: "single-choice",
        question: {
          pl: "Na co działają antybiotyki?",
          ua: "На що діють антибіотики?"
        },
        options: [
          { id: "a", label: { pl: "na bakterie, nie na wirusy", ua: "на бактерії, не на віруси" } },
          { id: "b", label: { pl: "na wirusy grypy i ospy wietrznej", ua: "на віруси грипу і вітрянки" } },
          { id: "c", label: { pl: "na złamanie kości", ua: "на перелом кістки" } }
        ],
        answer: "a",
        hint: {
          pl: "Plansza przekreśla lek przy wirusie. Zostaje bakteria.",
          ua: "Плакат перекреслює ліки біля вірусу. Лишається бактерія."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Grypa i ospa wietrzna są wirusowe. Antybiotyk na nie nie działa. Działa na bakterie.",
              ua: "Грип і вітрянка є вірусними. Антибіотик на них не діє. Він діє на бактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Złamanie jest urazem, nie bakterią. Antybiotyk dotyczy bakterii, nie kości.",
              ua: "Перелом є травмою, не бактерією. Антибіотик стосується бактерій, не кістки."
            }
          }
        ],
        explanation: {
          pl: "Antybiotyki działają na bakterie, nie na wirusy.",
          ua: "Антибіотики діють на бактерії, не на віруси."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Grypa tabletką", ua: "Типова помилка. Грип таблеткою" },
      claim: {
        pl: "„Antybiotyk leczy grypę, bo grypa jest bakterią.”",
        ua: "«Антибіотик лікує грип, бо грип є бактерією.»"
      },
      text: {
        pl: [
          "Grypa z lekcji 16 jest chorobą wirusową.",
          "Antybiotyk działa na bakterie. Na wirusa grypy nie."
        ],
        ua: [
          "Грип з уроку 16 є вірусною хворобою.",
          "Антибіотик діє на бактерії. На вірус грипу ні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Apteczka przy grypie", ua: "Сам. Аптечка при грипі" },
      task: {
        id: "l18-p5",
        type: "single-choice",
        question: {
          pl: "Uczeń z grypą chce wziąć antybiotyk z apteczki „na wszelki wypadek”. Co mówi lekcja?",
          ua: "Учень із грипом хоче взяти антибіотик з аптечки «про всяк випадок». Що каже урок?"
        },
        options: [
          { id: "a", label: { pl: "grypa jest wirusowa, więc ten lek na nią nie działa i nie bierze się go samemu", ua: "грип є вірусним, тож ці ліки на нього не діють і самотужки їх не беруть" } },
          { id: "b", label: { pl: "apteczka zastępuje lekarza, bo antybiotyk leczy wirusy", ua: "аптечка замінює лікаря, бо антибіотик лікує віруси" } },
          { id: "c", label: { pl: "grypa jest próchnicą, więc tabletka jest pastą do zębów", ua: "грип є карієсом, тож таблетка є зубною пастою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Antybiotyk nie leczy wirusa, a dawkę przepisuje lekarz. Apteczka nie zastępuje tej decyzji.",
              ua: "Антибіотик не лікує вірус, а дозу призначає лікар. Аптечка не замінює цього рішення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Grypa nie jest próchnicą. Grypa jest wirusowa, więc antybiotyk z apteczki jej nie załatwia.",
              ua: "Грип не є карієсом. Грип є вірусним, тож антибіотик з аптечки його не закриває."
            }
          }
        ],
        explanation: {
          pl: "Przy grypie antybiotyk z apteczki nie działa, bo grypę wywołuje wirus.",
          ua: "При грипі антибіотик з аптечки не діє, бо грип викликає вірус."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nie nadużywać", ua: "Поняття. Не зловживати" },
      visual: vizGh("l18-nie-naduzywac.png", {
        alt: { pl: "Kalendarz kuracji i przekreślone dzielenie leku", ua: "Календар курсу і перекреслене ділення ліків" },
        title: { pl: "Do końca, jak kazał lekarz.", ua: "До кінця, як сказав лікар." },
        prompt: { pl: "Plansza lekcji 18: nie nadużywać antybiotyku." }
      }),
      text: {
        pl: [
          ["Gdy antybiotyk bierze się za często, za krótko albo „bo tak”, część bakterii przeżywa. Potem lek słabiej działa. To ", em("antybiotykooporność"), ": bakterie stają się odporne."],
          "Zasady z planszy: tylko gdy lekarz każe, cała kuracja do końca, nie dzieli się tabletek z kolegą i nie bierze się ich na wirusa.",
          "Pożyteczne bakterie też mogą ucierpieć. Flora jelitowa może się rozregulować. Dlatego nie bierze się antybiotyku bez potrzeby."
        ],
        ua: [
          ["Коли антибіотик беруть занадто часто, занадто коротко або «просто так», частина бактерій виживає. Потім ліки діють слабше. Це ", em("антибіотикорезистентність"), ": бактерії стають стійкими."],
          "Правила з плаката: лише коли лікар сказав, увесь курс до кінця, таблетками не діляться з другом і не беруть їх на вірус.",
          "Корисні бактерії теж можуть постраждати. Кишкова мікрофлора може розладнатися. Тому антибіотик не беруть без потреби."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kalendarz", ua: "Приклад. Календар" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kalendarz mówi: do końca, jak kazał lekarz. Przerwa w połowie nie jest końcem kuracji."],
            ua: ["Календар каже: до кінця, як сказав лікар. Перерва посередині не є кінцем курсу."]
          }
        },
        {
          text: {
            pl: ["Przekreślone jest branie „na wszelki wypadek” i oddawanie tabletek koledze."],
            ua: ["Перекреслене є вживання «про всяк випадок» і віддавання таблеток другові."]
          }
        },
        {
          text: {
            pl: ["Bakterie, które przeżyły za krótką kurację, mogą stać się odporne. Flora jelitowa też może ucierpieć."],
            ua: ["Бактерії, які пережили занадто короткий курс, можуть стати стійкими. Кишкова мікрофлора теж може постраждати."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Odporność", ua: "Коротке питання. Стійкість" },
      task: {
        id: "l18-g6",
        type: "single-choice",
        question: {
          pl: "Dlaczego nie wolno nadużywać antybiotyków?",
          ua: "Чому не можна зловживати антибіотиками?"
        },
        options: [
          { id: "a", label: { pl: "bakterie mogą stać się odporne na lek, a flora jelitowa może ucierpieć", ua: "бактерії можуть стати стійкими до ліків, а кишкова мікрофлора може постраждати" } },
          { id: "b", label: { pl: "bo antybiotyk jest porostem i rośnie na korze", ua: "бо антибіотик є лишайником і росте на корі" } },
          { id: "c", label: { pl: "bo wtedy wirus dostaje jądro", ua: "бо тоді вірус отримує ядро" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj bakterii, które uczą się leku, i flory jelitowej.",
          ua: "Шукай бактерії, які звикають до ліків, і кишкову мікрофлору."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Antybiotyk nie jest porostem. Nadużycie sprawia, że bakterie stają się odporne na lek.",
              ua: "Антибіотик не є лишайником. Зловживання робить так, що бактерії стають стійкими до ліків."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie dostaje jądra od tabletki. Problem nadużycia dotyczy odporności bakterii i flory jelitowej.",
              ua: "Вірус не отримує ядра від таблетки. Проблема зловживання стосується стійкості бактерій і кишкової мікрофлори."
            }
          }
        ],
        explanation: {
          pl: "Nadużycie może dać bakterie odporne na lek i zaszkodzić florze jelitowej.",
          ua: "Зловживання може дати бактерії, стійкі до ліків, і зашкодити кишковій мікрофлорі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Na wszelki wypadek", ua: "Типова помилка. Про всяк випадок" },
      claim: {
        pl: "„Antybiotyk na wszelki wypadek nikomu nie szkodzi.”",
        ua: "«Антибіотик про всяк випадок нікому не шкодить.»"
      },
      text: {
        pl: [
          "Branie bez potrzeby sprzyja bakteriom odpornym na lek.",
          "Może też rozregulować florę jelitową. Decyzja należy do lekarza."
        ],
        ua: [
          "Вживання без потреби сприяє бактеріям, стійким до ліків.",
          "Може також розладнати кишкову мікрофлору. Рішення належить лікарю."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Tabletki kolegi", ua: "Сам. Таблетки друга" },
      task: {
        id: "l18-p6",
        type: "single-choice",
        question: {
          pl: "Kolega prosi o Twoje pozostałe tabletki antybiotyku. Co jest zgodne z lekcją?",
          ua: "Друг просить решту твоїх таблеток антибіотика. Що відповідає уроку?"
        },
        options: [
          { id: "a", label: { pl: "nie dzieli się lekiem; o kuracji decyduje lekarz tej osoby", ua: "ліками не діляться; про курс вирішує лікар цієї людини" } },
          { id: "b", label: { pl: "tak — dzielenie tabletek jest higieną rąk", ua: "так — ділення таблеток є гігієною рук" } },
          { id: "c", label: { pl: "tak — reszta leku jest witaminą na wirusa", ua: "так — решта ліків є вітаміном на вірус" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Higiena to ręce, woda i lodówka, nie pożyczanie antybiotyku. Leku nie oddaje się koledze.",
              ua: "Гігієна — це руки, вода і холодильник, не позичання антибіотика. Ліки не віддають другові."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Antybiotyk nie jest witaminą i nie działa na wirusa. Kurację ustala lekarz, nie podział tabletek.",
              ua: "Антибіотик не є вітаміном і не діє на вірус. Курс визначає лікар, не поділ таблеток."
            }
          }
        ],
        explanation: {
          pl: "Antybiotykiem nie dzieli się z kolegą. O leku decyduje lekarz.",
          ua: "Антибіотиком не діляться з другом. Про ліки вирішує лікар."
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
      heading: { pl: "Sprawdzian 1. Azot", ua: "Перевірка 1. Азот" },
      task: {
        id: "l18-t1",
        type: "single-choice",
        question: {
          pl: "Bakterie przy korzeniach roślin motylkowych wiążą azot. Jaka to rola?",
          ua: "Бактерії біля коренів бобових рослин зв’язують азот. Яка це роль?"
        },
        options: [
          { id: "a", label: { pl: "pożyteczna", ua: "корисна" } },
          { id: "b", label: { pl: "zawsze chorobotwórcza, bo korzeń choruje", ua: "завжди хвороботворна, бо корінь хворіє" } },
          { id: "c", label: { pl: "to fotosynteza liścia, nie praca bakterii", ua: "це фотосинтез листка, не робота бактерій" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiązanie azotu przy korzeniu nie jest chorobą. To przykład bakterii pożytecznych.",
              ua: "Зв’язування азоту біля кореня не є хворобою. Це приклад корисних бактерій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza liścia to lekcja 9. Tu bakterie przy korzeniu wiążą azot i są pożyteczne.",
              ua: "Фотосинтез листка — це урок 9. Тут бактерії біля кореня зв’язують азот і є корисними."
            }
          }
        ],
        explanation: {
          pl: "Bakterie wiążące azot przy korzeniach są pożyteczne.",
          ua: "Бактерії, що зв’язують азот біля коренів, корисні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Próchnica", ua: "Перевірка 2. Карієс" },
      task: {
        id: "l18-t2",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest zgodne z lekcją?",
          ua: "Яке речення відповідає уроку?"
        },
        options: [
          { id: "a", label: { pl: "niektóre bakterie mogą wywołać anginę albo próchnicę; diagnozę stawia lekarz", ua: "деякі бактерії можуть викликати ангіну або карієс; діагноз ставить лікар" } },
          { id: "b", label: { pl: "każda bakteria, także z jogurtu, jest próchnicą", ua: "кожна бактерія, також з йогурту, є карієсом" } },
          { id: "c", label: { pl: "próchnica jest wirusem, więc bakterie chorobotwórcze nie istnieją", ua: "карієс є вірусом, тож хвороботворні бактерії не існують" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jogurt nie staje się próchnicą. Chorobotwórcze są niektóre bakterie, a pożyteczne zostają pożyteczne.",
              ua: "Йогурт не стає карієсом. Хвороботворні є деякі бактерії, а корисні лишаються корисними."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Próchnica na tej lekcji jest przykładem choroby bakteryjnej. Wirusem jej nie nazywamy, ale nie wszystkie bakterie są chorobotwórcze.",
              ua: "Карієс на цьому уроці є прикладом бактеріальної хвороби. Вірусом його не називаємо, але не всі бактерії хвороботворні."
            }
          }
        ],
        explanation: {
          pl: "Angina i próchnica to przykłady. Nie każda bakteria je wywołuje, a diagnozę stawia lekarz.",
          ua: "Ангіна і карієс — це приклади. Не кожна бактерія їх викликає, а діагноз ставить лікар."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Ręce i mleko", ua: "Перевірка 3. Руки і молоко" },
      task: {
        id: "l18-t3",
        type: "single-choice",
        question: {
          pl: "Co łączy mycie rąk i pasteryzację mleka?",
          ua: "Що спільне в миття рук і пастеризації молока?"
        },
        options: [
          { id: "a", label: { pl: "oba ograniczają groźne drobnoustroje: ręce w codziennym życiu, podgrzanie w żywności", ua: "обидва обмежують небезпечні мікроби: руки в щоденному житті, підігрів в їжі" } },
          { id: "b", label: { pl: "oba usuwają florę jelitową na zawsze", ua: "обидва прибирають кишкову мікрофлору назавжди" } },
          { id: "c", label: { pl: "oba są szczepieniem przeciw odrze", ua: "обидва є щепленням проти кору" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Flora jelitowa ma zostać. Mycie rąk i pasteryzacja ograniczają groźne drobnoustroje, nie pożyteczne bakterie jelit.",
              ua: "Кишкова мікрофлора має лишитися. Миття рук і пастеризація обмежують небезпечні мікроби, не корисні бактерії кишок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szczepienie nie jest myciem rąk ani podgrzaniem mleka. Te dwa sposoby ograniczają drobnoustroje w życiu i w żywności.",
              ua: "Щеплення не є миттям рук чи підігрівом молока. Ці два способи обмежують мікроби в житті і в їжі."
            }
          }
        ],
        explanation: {
          pl: "Higiena i pasteryzacja ograniczają groźne drobnoustroje: jedna przy rękach, druga w żywności.",
          ua: "Гігієна і пастеризація обмежують небезпечні мікроби: одна при руках, друга в їжі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Grypa", ua: "Перевірка 4. Грип" },
      task: {
        id: "l18-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o antybiotyku jest prawdziwe?",
          ua: "Яке речення про антибіотик правдиве?"
        },
        options: [
          { id: "a", label: { pl: "może działać na bakterie, a na wirusa grypy nie działa", ua: "може діяти на бактерії, а на вірус грипу не діє" } },
          { id: "b", label: { pl: "leczy grypę i ospę wietrzną, bo to bakterie", ua: "лікує грип і вітрянку, бо це бактерії" } },
          { id: "c", label: { pl: "zastępuje mycie rąk i jest szczepionką na próchnicę", ua: "замінює миття рук і є щепленням від карієсу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Grypa i ospa wietrzna są wirusowe. Antybiotyk na wirusy nie działa.",
              ua: "Грип і вітрянка є вірусними. Антибіотик на віруси не діє."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Antybiotyk nie zastępuje mycia rąk i nie jest szczepionką. Działa na bakterie, nie na wirusa.",
              ua: "Антибіотик не замінює миття рук і не є щепленням. Він діє на бактерії, не на вірус."
            }
          }
        ],
        explanation: {
          pl: "Antybiotyk może działać na bakterie. Na wirusa grypy nie działa.",
          ua: "Антибіотик може діяти на бактерії. На вірус грипу не діє."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Połowa kuracji", ua: "Перевірка 5. Половина курсу" },
      task: {
        id: "l18-t5",
        type: "single-choice",
        question: {
          pl: "Kurację przerywasz w połowie, bo już lepiej, a resztę tabletek oddajesz koledze. Co jest nie tak?",
          ua: "Курс перериваєш на половині, бо вже краще, а решту таблеток віддаєш другові. Що не так?"
        },
        options: [
          { id: "a", label: { pl: "kuracja ma iść do końca, jak kazał lekarz; lekiem się nie dzieli, bo bakterie mogą stać się odporne", ua: "курс має йти до кінця, як сказав лікар; ліками не діляться, бо бактерії можуть стати стійкими" } },
          { id: "b", label: { pl: "tak jest lepiej — krótka kuracja chroni florę jelitową", ua: "так краще — короткий курс береже кишкову мікрофлору" } },
          { id: "c", label: { pl: "kolega może wziąć resztę na grypę, bo antybiotyk leczy wirusy", ua: "друг може взяти решту на грип, бо антибіотик лікує віруси" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Za krótka kuracja nie chroni flory. Sprzyja bakteriom odpornym na lek. Kończy się tak, jak kazał lekarz.",
              ua: "Занадто короткий курс не береже мікрофлору. Він сприяє бактеріям, стійким до ліків. Закінчують так, як сказав лікар."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Antybiotyk nie leczy wirusa grypy i nie jest do oddania koledze. O kuracji decyduje lekarz.",
              ua: "Антибіотик не лікує вірус грипу і не для того, щоб віддати другові. Про курс вирішує лікар."
            }
          }
        ],
        explanation: {
          pl: "Kurację prowadzi się do końca według lekarza. Tabletek nie oddaje się koledze.",
          ua: "Курс ведуть до кінця за лікарем. Таблетки не віддають другові."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l18-pozyteczne.png", {
        alt: { pl: "Pożyteczne bakterie", ua: "Корисні бактерії" },
        title: { pl: "Pomagają albo szkodzą. Higiena. Lekarz.", ua: "Допомагають або шкодять. Гігієна. Лікар." },
        prompt: { pl: "Ta sama plansza pożytecznych bakterii." }
      }),
      text: {
        pl: [
          "Pożyteczne: jogurt, ser, azot przy korzeniach, saprobionty, flora jelitowa.",
          "Niektóre są chorobotwórcze, na przykład przy anginie i próchnicy. Diagnozę stawia lekarz.",
          "Higiena i pasteryzacja ograniczają groźne drobnoustroje. Przetrwalnik może zostać.",
          "Antybiotyk działa na bakterie, nie na wirusy. Nie nadużywać: oporność i szkoda dla flory jelitowej."
        ],
        ua: [
          "Корисні: йогурт, сир, азот біля коренів, сапробіонти, кишкова мікрофлора.",
          "Деякі хвороботворні, наприклад при ангіні і карієсі. Діагноз ставить лікар.",
          "Гігієна і пастеризація обмежують небезпечні мікроби. Спора може лишитися.",
          "Антибіотик діє на бактерії, не на віруси. Не зловживати: стійкість і шкода для кишкової мікрофлори."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Podam przykłady pożytecznych bakterii: jedzenie, azot, saprobionty, flora jelitowa.", ua: "Наведу приклади корисних бактерій: їжа, азот, сапробіонти, кишкова мікрофлора." },
        { pl: "Powiem, że tylko niektóre bakterie są chorobotwórcze.", ua: "Скажу, що лише деякі бактерії хвороботворні." },
        { pl: "Wyjaśnię, po co higiena i pasteryzacja.", ua: "Поясню, навіщо гігієна і пастеризація." },
        { pl: "Powiem, że antybiotyki działają na bakterie, nie na wirusy.", ua: "Скажу, що антибіотики діють на бактерії, не на віруси." },
        { pl: "Uzasadnię, dlaczego kuracji nie przerywa się i nie dzieli lekiem.", ua: "Обґрунтую, чому курс не переривають і ліками не діляться." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
