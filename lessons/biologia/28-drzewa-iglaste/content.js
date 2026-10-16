function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L28_Drzewa_iglaste/images/";

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
      heading: { pl: "Misja: które drzewo", ua: "Місія: яке дерево" },
      visual: vizGh("l28-zacznijmy.png", {
        alt: { pl: "Las iglasty z różnymi koronami drzew", ua: "Хвойний ліс із різними кронами дерев" },
        title: { pl: "Grupa była wczoraj. Dziś klucz.", ua: "Група була вчора. Сьогодні ключ." },
        prompt: { pl: "Plansza lekcji 28: las iglasty." }
      }),
      text: {
        pl: [
          "To lekcja 28. Nagie nasiona, szyszki i wiatr znasz z lekcji 27. Dziś rozpoznajesz sosnę, świerk, jodłę i modrzew.",
          "Kwiatu i owocu nie rozbieramy. Drzewa liściaste są później.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 28. Голе насіння, шишки і вітер знаєш з уроку 27. Сьогодні розпізнаєш сосну, ялину, ялицю і модрину.",
          "Квітку і плід не розбираємо. Листяні дерева є пізніше.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "sosna", ua: "сосна — дві хвоїнки в пучку" },
        { pl: "świerk", ua: "ялина — колюча хвоя по одній, шишки звисають" },
        { pl: "jodła", ua: "ялиця — м’яка хвоя, шишки стоять" },
        { pl: "modrzew", ua: "модрина — восени скидає хвою" },
        { pl: "pęczek igieł", ua: "пучок хвої" },
        { pl: "jałowiec — szyszkojagoda", ua: "ялівець — шишкоягода, не слива" },
        { pl: "cis — osnówka", ua: "тис — червона шишечка, отруйний, не зриваємо" },
        { pl: "żywica", ua: "живиця — заліплює рану стовбура" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie igły", ua: "Поняття. Дві хвоїнки" },
      visual: vizGh("l28-sosna.png", {
        alt: { pl: "Dwie igły sosny w pęczku i zwisająca szyszka", ua: "Дві хвоїнки сосни в пучку і звисла шишка" },
        title: { pl: "Dwie razem. To klucz sosny.", ua: "Дві разом. Це ключ сосни." },
        prompt: { pl: "Plansza lekcji 28: sosna." }
      }),
      text: {
        pl: [
          ["U ", em("sosny"), " igły siedzą po ", em("dwie w pęczku"), ". Są długie i trochę twarde."],
          "Szyszki sosny zwisają. Pień bywa krzywy, a kora odchodzi płatami. Sosna lubi piaszczyste, jaśniejsze lasy.",
          "Sama zwisająca szyszka jeszcze nie nazywa drzewa. U świerka każda igła rośnie osobno. To następna część."
        ],
        ua: [
          ["У ", em("сосни"), " хвоя сидить по ", em("дві в пучку"), ". Довга і трохи тверда."],
          "Шишки сосни звисають. Стовбур буває кривий, а кора відходить пластами. Сосна любить піщані, світліші ліси.",
          "Сама звисла шишка ще не називає дерево. У ялини кожна хвоїнка росте окремо. Це наступна частина."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pęczek na gałązce", ua: "Приклад. Пучок на гілці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Patrzysz na krótki pęd. Igły są spięte po dwie."],
            ua: ["Дивишся на короткий пагін. Хвоїнки зчеплені по дві."]
          }
        },
        {
          text: {
            pl: ["Są długie. Palec czuje, że są trochę twarde."],
            ua: ["Вони довгі. Палець відчуває, що вони трохи тверді."]
          }
        },
        {
          text: {
            pl: ["Szyszka wisi. Do nazwy sosny wystarczą dwie igły w pęczku."],
            ua: ["Шишка висить. Для назви сосни достатньо двох хвоїнок у пучку."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pęczek", ua: "Коротке питання. Пучок" },
      task: {
        id: "l28-g1",
        type: "single-choice",
        question: {
          pl: "Po czym poznasz sosnę?",
          ua: "По чому впізнаєш сосну?"
        },
        options: [
          { id: "a", label: { pl: "po dwóch igłach w pęczku", ua: "по двох хвоїнках у пучку" } },
          { id: "b", label: { pl: "po szyszkach, które stoją i rozpadają się na drzewie", ua: "по шишках, які стоять і розпадаються на дереві" } },
          { id: "c", label: { pl: "po tym, że zrzuca wszystkie igły co jesień", ua: "по тому, що скидає всю хвою щоосені" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz igły w jednym pęczku.",
          ua: "Полічи хвоїнки в одному пучку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Stojące szyszki, które rozpadają się na drzewie, należą do jodły. Sosnę poznajesz po dwóch igłach w pęczku.",
              ua: "Стоячі шишки, які розпадаються на дереві, належать ялиці. Сосну впізнаєш по двох хвоїнках у пучку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igły co jesień zrzuca modrzew. Sosna zostaje zielona, a jej klucz to dwie igły w pęczku.",
              ua: "Хвою щоосені скидає модрина. Сосна лишається зеленою, а її ключ — дві хвоїнки в пучку."
            }
          }
        ],
        explanation: {
          pl: "Sosna ma dwie igły w pęczku.",
          ua: "Сосна має дві хвоїнки в пучку."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jedna igła", ua: "Типова помилка. Одна хвоїнка" },
      claim: {
        pl: "„Wszystkie iglaki mają igły pojedynczo, więc sosna też.”",
        ua: "«Усі хвойні мають хвою по одній, тож сосна теж.»"
      },
      text: {
        pl: [
          "Pojedynczo, dookoła pędu, rosną igły świerka.",
          "U sosny liczysz pęczek: zawsze dwie igły razem."
        ],
        ua: [
          "По одній, довкола пагона, росте хвоя ялини.",
          "У сосни рахуєш пучок: завжди дві хвоїнки разом."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Piasek i kora", ua: "Сам. Пісок і кора" },
      task: {
        id: "l28-p1",
        type: "single-choice",
        question: {
          pl: "Na piaszczystej polanie gałązka ma długie igły, zawsze po dwie. Kora pnia odchodzi płatami. Uczeń podpisuje ją „jodła”, bo obok leży szyszka. Co poprawić?",
          ua: "На піщаній галявині гілка має довгі хвоїнки, завжди по дві. Кора стовбура відходить пластами. Учень підписує її «ялиця», бо поруч лежить шишка. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "dwie igły w pęczku to sosna; stojące szyszki, które się rozpadają, to jodła", ua: "дві хвоїнки в пучку — це сосна; стоячі шишки, які розпадаються, — це ялиця" } },
          { id: "b", label: { pl: "tak — każda szyszka na ziemi zamienia sosnę w jodłę", ua: "так — кожна шишка на землі перетворює сосну на ялицю" } },
          { id: "c", label: { pl: "tak — pęczek po dwie znaczy, że drzewo zrzuca igły jak modrzew", ua: "так — пучок по дві означає, що дерево скидає хвою як модрина" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka na ziemi nie zmienia klucza. Sosnę trzymaj przy dwóch igłach w pęczku. Jodła ma miękkie igły i szyszki, które stoją.",
              ua: "Шишка на землі не змінює ключ. Сосну тримай при двох хвоїнках у пучку. Ялиця має м’яку хвою і шишки, які стоять."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Modrzew żółknie i gubi igły jesienią. Dwie igły, które zostają na gałązce, to klucz sosny.",
              ua: "Модрина жовтіє і губить хвою восени. Дві хвоїнки, які лишаються на гілці, — це ключ сосни."
            }
          }
        ],
        explanation: {
          pl: "Dwie igły w pęczku nazywają sosnę. Szyszka obok tego nie zmienia.",
          ua: "Дві хвоїнки в пучку називають сосну. Шишка поруч цього не змінює."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kłuje i zwisa", ua: "Поняття. Коле і звисає" },
      visual: vizGh("l28-swierk.png", {
        alt: { pl: "Kłujące igły świerka i zwisające szyszki", ua: "Колюча хвоя ялини і звислі шишки" },
        title: { pl: "Osobno i kłują. Szyszka spada cała.", ua: "Окремо і колють. Шишка падає ціла." },
        prompt: { pl: "Plansza lekcji 28: świerk." }
      }),
      text: {
        pl: [
          ["U ", em("świerka"), " igły wyrastają ", em("pojedynczo"), ", dookoła pędu. Są krótkie i kłujące."],
          "Szyszki zwisają i spadają w całości. Korona często jest stożkowata, a gałęzie układają się piętrami. Świerk lubi chłodniej i wilgotniej niż sosna.",
          "Stożek korony nie jest kluczem. U jodły igły są miękkie, a szyszki stoją."
        ],
        ua: [
          ["У ", em("ялини"), " хвоя виростає ", em("по одній"), ", довкола пагона. Коротка і колюча."],
          "Шишки звисають і падають цілими. Крона часто конусоподібна, а гілки лягають ярусами. Ялина любить прохолодніше і вологіше, ніж сосна.",
          "Конус крони не є ключем. У ялиці хвоя м’яка, а шишки стоять."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Palec i szyszka", ua: "Приклад. Палець і шишка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Każda igła siedzi osobno, dookoła pędu."],
            ua: ["Кожна хвоїнка сидить окремо, довкола пагона."]
          }
        },
        {
          text: {
            pl: ["Igła kłuje. Szyszka wisi i na ziemi leży cała."],
            ua: ["Хвоя коле. Шишка висить і на землі лежить ціла."]
          }
        },
        {
          text: {
            pl: ["Miękka igła i szyszka, która stoi, to jodła, nie świerk."],
            ua: ["М’яка хвоя і шишка, яка стоїть, — це ялиця, не ялина."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ukłucie", ua: "Коротке питання. Укол" },
      task: {
        id: "l28-g2",
        type: "single-choice",
        question: {
          pl: "Jak rozpoznasz świerk?",
          ua: "Як розпізнаєш ялину?"
        },
        options: [
          { id: "a", label: { pl: "igły pojedynczo i kłujące, szyszki zwisają i spadają w całości", ua: "хвоя по одній і колюча, шишки звисають і падають цілими" } },
          { id: "b", label: { pl: "zawsze dwie igły w pęczku", ua: "завжди дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "igły miękkie, a szyszki stoją", ua: "хвоя м’яка, а шишки стоять" } }
        ],
        answer: "a",
        hint: {
          pl: "Sprawdź, czy igła kłuje i czy szyszka wisi.",
          ua: "Перевір, чи хвоя коле і чи шишка висить."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dwie igły w pęczku to klucz sosny. Świerk ma igły pojedynczo. Są kłujące, a szyszki zwisają.",
              ua: "Дві хвоїнки в пучку — це ключ сосни. Ялина має хвою по одній. Вона колюча, а шишки звисають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Miękkie igły i stojące szyszki należą do jodły. Świerk kłuje, a jego szyszki zwisają.",
              ua: "М’яка хвоя і стоячі шишки належать ялиці. Ялина коле, а її шишки звисають."
            }
          }
        ],
        explanation: {
          pl: "Świerk kłuje. Igły rosną pojedynczo, a szyszki zwisają.",
          ua: "Ялина коле. Хвоя росте по одній, а шишки звисають."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielone zimą", ua: "Типова помилка. Зелені взимку" },
      claim: {
        pl: "„Świerk i jodła to to samo drzewo, bo oba są zielone zimą.”",
        ua: "«Ялина і ялиця — це те саме дерево, бо обидва зелені взимку.»"
      },
      text: {
        pl: [
          "Zimą zielone zostają sosna, świerk i jodła. To za mało na nazwę.",
          "Świerk kłuje, a szyszki zwisają. Jodła jest miękka, a szyszki stoją."
        ],
        ua: [
          "Взимку зеленими лишаються сосна, ялина і ялиця. Цього замало для назви.",
          "Ялина коле, а шишки звисають. Ялиця м’яка, а шишки стоять."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Chłodny las", ua: "Сам. Прохолодний ліс" },
      task: {
        id: "l28-p2",
        type: "single-choice",
        question: {
          pl: "W chłodnym wilgotnym lesie gałązka kłuje palec. Igły siedzą pojedynczo, a na mchu leży cała zwisająca szyszka. Uczeń mówi, że to sosna, bo szyszka wisiała. Co poprawić?",
          ua: "У прохолодному вологому лісі гілка коле палець. Хвоїнки сидять по одній, а на моху лежить ціла звисла шишка. Учень каже, що це сосна, бо шишка висіла. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kłujące igły pojedynczo i cała zwisająca szyszka to świerk; sosna ma dwie igły w pęczku", ua: "колюча хвоя по одній і ціла звисла шишка — це ялина; сосна має дві хвоїнки в пучку" } },
          { id: "b", label: { pl: "tak — każde ukłucie znaczy dwie igły sosny", ua: "так — кожен укол означає дві хвоїнки сосни" } },
          { id: "c", label: { pl: "tak — cała szyszka na mchu to stojąca szyszka jodły", ua: "так — ціла шишка на моху це стояча шишка ялиці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ukłucie nie składa dwóch igieł w pęczek. Sosna ma dwie igły razem. Tu igły są pojedynczo i kłują, a szyszka zwisa: to świerk.",
              ua: "Укол не складає дві хвоїнки в пучок. Сосна має дві хвоїнки разом. Тут хвоя по одній і коле, а шишка звисає: це ялина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodła rzadko zostawia całą szyszkę na ziemi: jej szyszki stoją i rozpadają się na drzewie. Cała zwisająca szyszka i kłujące igły to świerk.",
              ua: "Ялиця рідко лишає цілу шишку на землі: її шишки стоять і розпадаються на дереві. Ціла звисла шишка і колюча хвоя — це ялина."
            }
          }
        ],
        explanation: {
          pl: "Pojedyncze kłujące igły i cała zwisająca szyszka należą do świerka.",
          ua: "Окремі колючі хвоїнки і ціла звисла шишка належать ялині."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Miękko i stoi", ua: "Поняття. М’яко і стоїть" },
      visual: vizGh("l28-jodla.png", {
        alt: { pl: "Miękkie igły jodły i szyszki stojące na gałęzi", ua: "М’яка хвоя ялиці і шишки, що стоять на гілці" },
        title: { pl: "Nie kłuje. Szyszka rozpada się na drzewie.", ua: "Не коле. Шишка розпадається на дереві." },
        prompt: { pl: "Plansza lekcji 28: jodła." }
      }),
      text: {
        pl: [
          ["U ", em("jodły"), " igły są ", em("miękkie"), " i spłaszczone. Od spodu często widać dwa jasne paski. Nie kłują jak u świerka."],
          ["Szyszki ", em("stoją"), " na gałęzi i rozpadają się na drzewie. Całej szyszki jodły na ziemi prawie nie znajdziesz."],
          "To nadal szyszka z lekcji 27, nie kwiat i nie owoc. Inaczej trzyma się gałęzi niż u świerka."
        ],
        ua: [
          ["У ", em("ялиці"), " хвоя ", em("м’яка"), " і сплющена. Зі споду часто видно дві світлі смужки. Не коле, як у ялини."],
          ["Шишки ", em("стоять"), " на гілці і розпадаються на дереві. Цілу шишку ялиці на землі майже не знайдеш."],
          "Це все ще шишка з уроку 27, не квітка і не плід. Інакше тримається гілки, ніж у ялини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Paski i łuski", ua: "Приклад. Смужки і луски" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Igła jest płaska i miękka. Od spodu ma dwa jasne paski."],
            ua: ["Хвоя пласка і м’яка. Зі споду має дві світлі смужки."]
          }
        },
        {
          text: {
            pl: ["Szyszka stoi. Na drzewie rozpada się, więc na ziemi zostają łuski."],
            ua: ["Шишка стоїть. На дереві розпадається, тож на землі лишаються луски."]
          }
        },
        {
          text: {
            pl: ["Igły, które kłują, i szyszka, która wisi i spada cała, to świerk."],
            ua: ["Хвоя, яка коле, і шишка, яка висить і падає ціла, — це ялина."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa drzewa", ua: "Коротке питання. Два дерева" },
      task: {
        id: "l28-g3",
        type: "single-choice",
        question: {
          pl: "Po czym odróżnisz jodłę od świerka?",
          ua: "По чому відрізниш ялицю від ялини?"
        },
        options: [
          { id: "a", label: { pl: "jodła ma igły miękkie i szyszki, które stoją; świerk kłuje, a szyszki zwisają", ua: "ялиця має м’яку хвою і шишки, які стоять; ялина коле, а шишки звисають" } },
          { id: "b", label: { pl: "jodła ma zawsze dwie igły w pęczku", ua: "ялиця завжди має дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "świerk zrzuca igły co jesień, a jodła nie", ua: "ялина скидає хвою щоосені, а ялиця ні" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj miękkiej igły i szyszki, która stoi.",
          ua: "Шукай м’яку хвою і шишку, яка стоїть."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dwie igły w pęczku to sosna. Jodła ma igły miękkie, pojedynczo, a szyszki stoją. Świerk kłuje i ma szyszki zwisające.",
              ua: "Дві хвоїнки в пучку — це сосна. Ялиця має м’яку хвою, по одній, а шишки стоять. Ялина коле і має звислі шишки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igły zrzuca modrzew, nie świerk. Świerk zostaje zielony, kłuje, a szyszki zwisają. Jodła jest miękka, a szyszki stoją.",
              ua: "Хвою скидає модрина, не ялина. Ялина лишається зеленою, коле, а шишки звисають. Ялиця м’яка, а шишки стоять."
            }
          }
        ],
        explanation: {
          pl: "Jodła jest miękka, a szyszki stoją. Świerk kłuje, a szyszki zwisają.",
          ua: "Ялиця м’яка, а шишки стоять. Ялина коле, а шишки звисають."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pusta ziemia", ua: "Типова помилка. Порожня земля" },
      claim: {
        pl: "„Na ziemi nie ma całej szyszki, więc to drzewo w ogóle nie ma szyszek.”",
        ua: "«На землі немає цілої шишки, тож це дерево взагалі не має шишок.»"
      },
      text: {
        pl: [
          "U jodły szyszki stoją i rozpadają się na gałęzi.",
          "Na ziemi zostają łuski. Szyszka była. To nie kwiat i nie zgubione igły modrzewia."
        ],
        ua: [
          "У ялиці шишки стоять і розпадаються на гілці.",
          "На землі лишаються луски. Шишка була. Це не квітка і не загублені хвоїнки модрини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jasne paski", ua: "Сам. Світлі смужки" },
      task: {
        id: "l28-p3",
        type: "single-choice",
        question: {
          pl: "Igły są płaskie i miękkie, od spodu mają dwa jasne paski. Na górze gałęzi szyszki stoją, a na gałęzi leżą łuski. Uczeń mówi, że to świerk, a stojąca szyszka jest kwiatem. Co poprawić?",
          ua: "Хвоїнки пласкі і м’які, зі споду мають дві світлі смужки. Нагорі гілки шишки стоять, а на гілці лежать луски. Учень каже, що це ялина, а шишка, що стоїть, є квіткою. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "miękkie igły i stojące szyszki, które się rozpadają, to jodła; to nie kwiat i nie świerk", ua: "м’яка хвоя і стоячі шишки, які розпадаються, — це ялиця; це не квітка і не ялина" } },
          { id: "b", label: { pl: "tak — jasne paski zamieniają igłę w pyłek świerka", ua: "так — світлі смужки перетворюють хвою на пилок ялини" } },
          { id: "c", label: { pl: "tak — stojąca szyszka jest kłosem skrzypu", ua: "так — стояча шишка є колоском хвоща" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jasne paski są pod miękką igłą jodły. Pyłek pochodzi z szyszki męskiej, z lekcji 27. Świerk kłuje, a jego szyszki zwisają.",
              ua: "Світлі смужки є під м’якою хвоєю ялиці. Пилок походить із чоловічої шишки, з уроку 27. Ялина коле, а її шишки звисають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kłos skrzypu znasz z lekcji 26. Tu szyszka stoi na jodle i rozpada się na drzewie. Igły są miękkie. To nie kwiat.",
              ua: "Колосок хвоща знаєш з уроку 26. Тут шишка стоїть на ялиці і розпадається на дереві. Хвоя м’яка. Це не квітка."
            }
          }
        ],
        explanation: {
          pl: "Miękkie igły i stojące szyszki nazywają jodłę. To nie kwiat.",
          ua: "М’яка хвоя і стоячі шишки називають ялицю. Це не квітка."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Złote igły", ua: "Поняття. Золота хвоя" },
      visual: vizGh("l28-modrzew.png", {
        alt: { pl: "Zielone pęczki modrzewia i złote igły, które opadają", ua: "Зелені пучки модрини і золота хвоя, що опадає" },
        title: { pl: "Z tej czwórki tylko modrzew gubi igły.", ua: "З цієї четвірки лише модрина губить хвою." },
        prompt: { pl: "Plansza lekcji 28: modrzew." }
      }),
      text: {
        pl: [
          ["", em("Modrzew"), " ma miękkie igły w pęczkach, więcej niż dwie. Jesienią żółkną i ", em("opadają"), "."],
          "Sosna, świerk i jodła zimą zostają zielone. Modrzew jest wtedy goły, ale na gałęziach zostają szyszki. To nadal drzewo iglaste, nie dąb.",
          "Opadających igieł nie bierz za liście klonu. Klon jest później."
        ],
        ua: [
          ["", em("Модрина"), " має м’яку хвою в пучках, більше ніж дві. Восени жовтіє і ", em("опадає"), "."],
          "Сосна, ялина і ялиця взимку лишаються зеленими. Модрина тоді гола, але на гілках лишаються шишки. Це все ще хвойне дерево, не дуб.",
          "Опалу хвою не бери за листки клена. Клен є пізніше."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy pory", ua: "Приклад. Три пори" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Latem igły są miękkie i siedzą w pęczkach, więcej niż dwie."],
            ua: ["Улітку хвоя м’яка і сидить у пучках, більше ніж дві."]
          }
        },
        {
          text: {
            pl: ["Jesienią żółkną i leżą pod drzewem."],
            ua: ["Восени жовтіють і лежать під деревом."]
          }
        },
        {
          text: {
            pl: ["Zimą gałązka jest goła, a szyszki zostają. To nie dąb."],
            ua: ["Взимку гілка гола, а шишки лишаються. Це не дуб."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jesień", ua: "Коротке питання. Осінь" },
      task: {
        id: "l28-g4",
        type: "single-choice",
        question: {
          pl: "Co z tej czwórki robi jesienią tylko modrzew?",
          ua: "Що з цієї четвірки восени робить лише модрина?"
        },
        options: [
          { id: "a", label: { pl: "żółknie i zrzuca igły, a szyszki zostają", ua: "жовтіє і скидає хвою, а шишки лишаються" } },
          { id: "b", label: { pl: "zostaje zielony i kłuje jak świerk", ua: "лишається зеленою і коле як ялина" } },
          { id: "c", label: { pl: "zamienia szyszki w jabłka", ua: "перетворює шишки на яблука" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj drzewa, które żółknie i gubi igły.",
          ua: "Шукай дерево, яке жовтіє і губить хвою."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony i kłujący zimą zostaje świerk. Modrzew z tej czwórki żółknie i zrzuca igły. Szyszki na nim zostają.",
              ua: "Зеленою і колючою взимку лишається ялина. Модрина з цієї четвірки жовтіє і скидає хвою. Шишки на ній лишаються."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jabłko jest owocem z późniejszej lekcji. Modrzew zostaje drzewem iglastym: gubi igły, a szyszki trzyma.",
              ua: "Яблуко є плодом із пізнішого уроку. Модрина лишається хвойним деревом: губить хвою, а шишки тримає."
            }
          }
        ],
        explanation: {
          pl: "Modrzew żółknie i zrzuca igły. Szyszki zostają, więc to nadal iglak.",
          ua: "Модрина жовтіє і скидає хвою. Шишки лишаються, тож це все ще хвойне дерево."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Goły dąb", ua: "Типова помилка. Голий дуб" },
      claim: {
        pl: "„Skoro gubi igły, to nie jest drzewo iglaste, tylko dąb.”",
        ua: "«Щойно губить хвою, то це не хвойне дерево, лише дуб.»"
      },
      text: {
        pl: [
          "Dąb i klon poznasz później. One nie mają szyszek.",
          "Modrzew gubi igły, ale zostaje iglakiem. Sosna, świerk i jodła zimą są zielone."
        ],
        ua: [
          "Дуб і клен пізнаєш пізніше. Вони не мають шишок.",
          "Модрина губить хвою, але лишається хвойним деревом. Сосна, ялина і ялиця взимку зелені."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Listopad w parku", ua: "Сам. Листопад у парку" },
      task: {
        id: "l28-p4",
        type: "single-choice",
        question: {
          pl: "W listopadzie drzewo w parku ma gołe gałązki i małe szyszki. Na ziemi leżą złote igły w pęczkach. Uczeń mówi, że świerk zachorował i zgubił igły, więc trzeba go wyciąć. Co poprawić?",
          ua: "У листопаді дерево в парку має голі гілки і малі шишки. На землі лежать золоті хвоїнки в пучках. Учень каже, що ялина захворіла і загубила хвою, тож її треба спиляти. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to modrzew: co jesień zrzuca igły i zostaje iglakiem z szyszkami; świerk zostaje zielony", ua: "це модрина: щоосені скидає хвою і лишається хвойним деревом із шишками; ялина лишається зеленою" } },
          { id: "b", label: { pl: "tak — każda goła gałązka z szyszką to chory świerk", ua: "так — кожна гола гілка з шишкою це хвора ялина" } },
          { id: "c", label: { pl: "tak — złote igły na ziemi to liście klonu", ua: "так — золоті хвоїнки на землі це листки клена" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Świerk zimą zostaje zielony, a igły ma pojedynczo i kłujące. Gołe gałązki, złote igły w pęczkach i szyszki to modrzew. Nie jest chory tylko dlatego, że zgubił igły.",
              ua: "Ялина взимку лишається зеленою, а хвою має по одній і колючу. Голі гілки, золоті хвоїнки в пучках і шишки — це модрина. Вона не хвора лише тому, що загубила хвою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Liście klonu są później. Tu na ziemi leżą igły w pęczkach, a na gałązce są szyszki. To modrzew.",
              ua: "Листки клена є пізніше. Тут на землі лежать хвоїнки в пучках, а на гілці є шишки. Це модрина."
            }
          }
        ],
        explanation: {
          pl: "Modrzew co jesień zrzuca igły. Szyszki zostają. Świerk zostaje zielony.",
          ua: "Модрина щоосені скидає хвою. Шишки лишаються. Ялина лишається зеленою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kulka i czerwień", ua: "Поняття. Кулька і червоне" },
      visual: vizGh("l28-jalowiec-cis.png", {
        alt: { pl: "Jałowiec z niebieskawymi szyszkojagodami i cis z czerwoną osnówką", ua: "Ялівець із синюватими шишкоягодами і тис із червоною шишечкою" },
        title: { pl: "To nie śliwka. Cisa nie zrywamy.", ua: "Це не слива. Тис не зриваємо." },
        prompt: { pl: "Plansza lekcji 28: jałowiec i cis." }
      }),
      text: {
        pl: [
          ["", em("Jałowiec"), " bywa krzewem. Ma igły albo łuski. Niebieskawe kulki to ", em("szyszkojagody"), ": przekształcone szyszki, nie śliwki."],
          ["", em("Cis"), " ma czerwoną ", em("osnówkę"), ". Prawie całe ciało cisa jest trujące. Nie zrywamy i nie jemy. Jeśli ktoś już zerwał, mówisz dorosłemu."],
          "Oba są nagonasienne, jak sosna z lekcji 27. Wygląd jest inny. Czerwonej osnówki nie bierzesz za owoc."
        ],
        ua: [
          ["", em("Ялівець"), " буває кущем. Має хвою або луски. Синюваті кульки — це ", em("шишкоягоди"), ": видозмінені шишки, не сливи."],
          ["", em("Тис"), " має червону ", em("шишечку"), ". Майже все тіло тиса отруйне. Не зриваємо і не їмо. Якщо хтось уже зірвав, кажеш дорослому."],
          "Обидва голонасінні, як сосна з уроку 27. Вигляд інший. Червону шишечку не береш за плід."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa krzewy", ua: "Приклад. Два кущі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Niebieskawa kulka jałowca jest szyszką, nie miąższem śliwki."],
            ua: ["Синювата кулька ялівцю є шишкою, не м’якоттю сливи."]
          }
        },
        {
          text: {
            pl: ["Czerwona osnówka cisa zostaje na gałęzi. Nie zrywasz jej."],
            ua: ["Червона шишечка тиса лишається на гілці. Не зриваєш її."]
          }
        },
        {
          text: {
            pl: ["To nie kwiat jabłoni i nie puszka mchu."],
            ua: ["Це не квітка яблуні і не коробочка моху."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Niebieska kulka", ua: "Коротке питання. Синювата кулька" },
      task: {
        id: "l28-g5",
        type: "single-choice",
        question: {
          pl: "Czym jest niebieskawa kulka na jałowcu?",
          ua: "Чим є синювата кулька на ялівці?"
        },
        options: [
          { id: "a", label: { pl: "szyszkojagodą, czyli przekształconą szyszką, nie śliwką", ua: "шишкоягодою, тобто видозміненою шишкою, не сливою" } },
          { id: "b", label: { pl: "owocem jabłoni", ua: "плодом яблуні" } },
          { id: "c", label: { pl: "puszką zarodnioną mchu", ua: "коробочкою зі спорами моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Kulka jest szyszką. Śliwka jest później.",
          ua: "Кулька є шишкою. Слива є пізніше."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owoc jabłoni jest później i osłania nasiona. Niebieskawa kulka jałowca jest szyszkojagodą: przekształconą szyszką.",
              ua: "Плід яблуні є пізніше і вкриває насіння. Синювата кулька ялівцю є шишкоягодою: видозміненою шишкою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka z zarodnikami należy do mchu. Na jałowcu kulka jest szyszkojagodą, nie owocem.",
              ua: "Коробочка зі спорами належить моху. На ялівці кулька є шишкоягодою, не плодом."
            }
          }
        ],
        explanation: {
          pl: "Szyszkojagoda jałowca jest przekształconą szyszką, nie śliwką.",
          ua: "Шишкоягода ялівцю є видозміненою шишкою, не сливою."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Czerwony owoc", ua: "Типова помилка. Червоний плід" },
      claim: {
        pl: "„Czerwona osnówka wygląda jak owoc, więc cisa można zerwać i zjeść.”",
        ua: "«Червона шишечка виглядає як плід, тож тис можна зірвати і з’їсти.»"
      },
      text: {
        pl: [
          "Wygląd nie robi z osnówki jabłka.",
          "Prawie całe ciało cisa jest trujące. Nie zrywasz i nie jesz. Jeśli ktoś już zerwał, mówisz dorosłemu."
        ],
        ua: [
          "Вигляд не робить із шишечки яблуко.",
          "Майже все тіло тиса отруйне. Не зриваєш і не їси. Зірване кажеш дорослому."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Parkowa alejka", ua: "Сам. Паркова доріжка" },
      task: {
        id: "l28-p5",
        type: "single-choice",
        question: {
          pl: "Przy alejce krzew ma niebieskawe kulki, a obok drzewo ma czerwone osnówki. Uczeń chce zebrać czerwone „jak jagody” i mówi, że niebieskie to śliwki. Co poprawić?",
          ua: "Біля доріжки кущ має синюваті кульки, а поруч дерево має червоні шишечки. Учень хоче зібрати червоні «як ягоди» і каже, що сині — це сливи. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "niebieskie to szyszkojagody jałowca, nie śliwki; czerwonej osnówki cisa nie zrywamy, bo cis jest trujący", ua: "сині — це шишкоягоди ялівцю, не сливи; червону шишечку тиса не зриваємо, бо тис отруйний" } },
          { id: "b", label: { pl: "tak — czerwone zawsze jest jabłkiem do jedzenia", ua: "так — червоне завжди є яблуком для їжі" } },
          { id: "c", label: { pl: "tak — cis to mech, a czerwone to puszka z zarodnikami", ua: "так — тис це мох, а червоне це коробочка зі спорами" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jabłko jest owocem z późniejszej lekcji. Czerwona osnówka należy do cisa. Prawie całe ciało cisa jest trujące: nie zrywasz i nie jesz.",
              ua: "Яблуко є плодом із пізнішого уроку. Червона шишечка належить тису. Майже все тіло тиса отруйне: не зриваєш і не їси."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka z zarodnikami należy do mchu. Cis jest drzewem iglastym z czerwoną osnówką. Niebieskie kulki jałowca są szyszkojagodami, nie śliwkami.",
              ua: "Коробочка зі спорами належить моху. Тис є хвойним деревом із червоною шишечкою. Синюваті кульки ялівцю є шишкоягодами, не сливами."
            }
          }
        ],
        explanation: {
          pl: "Szyszkojagoda nie jest śliwką. Cisa nie zrywasz, bo jest trujący.",
          ua: "Шишкоягода не є сливою. Тис не зриваєш, бо він отруйний."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Deska, kropla, las", ua: "Поняття. Дошка, крапля, ліс" },
      visual: vizGh("l28-znaczenie.png", {
        alt: { pl: "Deski, krople żywicy na pniu i las iglasty", ua: "Дошки, краплі живиці на стовбурі і хвойний ліс" },
        title: { pl: "Drewno, żywica, las. Kory nie zdzieramy.", ua: "Деревина, живиця, ліс. Кору не здираємо." },
        prompt: { pl: "Plansza lekcji 28: drewno, żywica, las." }
      }),
      text: {
        pl: [
          ["Drewno iglaste idzie na belki, deski i papier. Z pnia sączy się ", em("żywica"), ". Zakleja ranę drzewa."],
          "Las iglasty trzyma glebę na stoku, daje zwierzętom schronienie i tlen z fotosyntezy, jak na lekcji 9.",
          "Kory nie zdzierasz dla zabawy. Dębu i lipy dziś nie przeglądasz. One są później."
        ],
        ua: [
          ["Хвойна деревина йде на балки, дошки і папір. Зі стовбура сочиться ", em("живиця"), ". Заліплює рану дерева."],
          "Хвойний ліс тримає ґрунт на схилі, дає тваринам сховок і кисень із фотосинтезу, як на уроці 9.",
          "Кору не здираєш для забави. Дуб і липу сьогодні не оглядаєш. Вони є пізніше."
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
            pl: ["Z pnia powstają deski i papier."],
            ua: ["Зі стовбура виходять дошки і папір."]
          }
        },
        {
          text: {
            pl: ["Na ranie widać kroplę żywicy. Kora zostaje na drzewie."],
            ua: ["На рані видно краплю живиці. Кора лишається на дереві."]
          }
        },
        {
          text: {
            pl: ["Las na stoku trzyma glebę i daje schronienie."],
            ua: ["Ліс на схилі тримає ґрунт і дає сховок."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Trzy słowa", ua: "Коротке питання. Три слова" },
      task: {
        id: "l28-g6",
        type: "single-choice",
        question: {
          pl: "Które znaczenie drzew iglastych jest z tej lekcji?",
          ua: "Яке значення хвойних дерев є з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "drewno, żywica i las", ua: "деревина, живиця і ліс" } },
          { id: "b", label: { pl: "kwiat jabłoni", ua: "квітка яблуні" } },
          { id: "c", label: { pl: "puszka zarodniona mchu", ua: "коробочка моху зі спорами" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj deski, kropli na pniu i lasu na stoku.",
          ua: "Шукай дошку, краплю на стовбурі і ліс на схилі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kwiat jabłoni jest później. Z tej lekcji drzewa iglaste dają drewno, żywicę i las.",
              ua: "Квітка яблуні є пізніше. З цього уроку хвойні дерева дають деревину, живицю і ліс."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka z zarodnikami należy do mchu. Drewno, żywica i las to znaczenie drzew iglastych.",
              ua: "Коробочка зі спорами належить моху. Деревина, живиця і ліс — це значення хвойних дерев."
            }
          }
        ],
        explanation: {
          pl: "Drzewa iglaste dają drewno, żywicę i las.",
          ua: "Хвойні дерева дають деревину, живицю і ліс."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kora dla zabawy", ua: "Типова помилка. Кора для забави" },
      claim: {
        pl: "„Korę można zdzierać dla zabawy, bo żywica to tylko lepki brud.”",
        ua: "«Кору можна здирати для забави, бо живиця — це лише липкий бруд.»"
      },
      text: {
        pl: [
          "Żywica zakleja ranę pnia. Kora zostaje na drzewie.",
          "Drewno idzie na deski i papier. Las trzyma glebę i daje schronienie."
        ],
        ua: [
          "Живиця заліплює рану стовбура. Кора лишається на дереві.",
          "Деревина йде на дошки і папір. Ліс тримає ґрунт і дає сховок."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Po wichurze", ua: "Сам. Після бурі" },
      task: {
        id: "l28-p6",
        type: "single-choice",
        question: {
          pl: "Po wichurze na złamanej gałęzi wisi lepka kropla, a stolarz bierze z takich pni deski. Uczeń mówi, że kropla to sok z liścia dębu, a deski to torf. Co poprawić?",
          ua: "Після бурі на зламаній гілці висить липка крапля, а столяр бере з таких стовбурів дошки. Учень каже, що крапля — це сік із листка дуба, а дошки — це торф. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kropla to żywica i zakleja ranę; deski to drewno; torf powstaje z mchów", ua: "крапля — це живиця і заліплює рану; дошки — це деревина; торф виникає з мохів" } },
          { id: "b", label: { pl: "tak — każda lepka kropla na iglaku jest pyłkiem", ua: "так — кожна липка крапля на хвойному є пилком" } },
          { id: "c", label: { pl: "tak — deski powstają z szyszkojagód jałowca", ua: "так — дошки виникають із шишкоягід ялівцю" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pyłek jest żółtym proszkiem z szyszki męskiej. Lepka kropla na ranie pnia to żywica. Deski są z drewna, nie z torfu.",
              ua: "Пилок є жовтим порошком із чоловічої шишки. Липка крапля на рані стовбура — це живиця. Дошки є з деревини, не з торфу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszkojagoda jest przekształconą szyszką jałowca, nie deską. Deski są z drewna. Kropla na ranie to żywica. Torf powstaje z mchów.",
              ua: "Шишкоягода є видозміненою шишкою ялівцю, не дошкою. Дошки є з деревини. Крапля на рані — це живиця. Торф виникає з мохів."
            }
          }
        ],
        explanation: {
          pl: "Żywica zakleja ranę. Deski są z drewna. Torf powstaje z mchów.",
          ua: "Живиця заліплює рану. Дошки є з деревини. Торф виникає з мохів."
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
      heading: { pl: "Sprawdzian 1. Zielnik", ua: "Перевірка 1. Гербарій" },
      task: {
        id: "l28-t1",
        type: "single-choice",
        question: {
          pl: "W szkolnym zielniku gałązka ma dwie długie igły spięte razem. Obok leżą płaty kory. Uczeń podpisuje kartkę „jodła”, bo igły są zielone. Co pasuje do lekcji?",
          ua: "У шкільному гербарії гілка має дві довгі хвоїнки, зчеплені разом. Поруч лежать пласти кори. Учень підписує картку «ялиця», бо хвоя зелена. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "dwie igły w pęczku to sosna; zielona barwa nie wybiera jodły", ua: "дві хвоїнки в пучку — це сосна; зелений колір не вибирає ялицю" } },
          { id: "b", label: { pl: "tak — zielona igła zawsze jest miękką igłą jodły", ua: "так — зелена хвоя завжди є м’якою хвоєю ялиці" } },
          { id: "c", label: { pl: "tak — pęczek znaczy, że to modrzew, który już zrzucił igły", ua: "так — пучок означає, що це модрина, яка вже скинула хвою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielone zimą są sosna, świerk i jodła. Jodła ma igły miękkie, a szyszki stoją. Dwie igły w pęczku to sosna.",
              ua: "Зеленими взимку є сосна, ялина і ялиця. Ялиця має м’яку хвою, а шишки стоять. Дві хвоїнки в пучку — це сосна."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Modrzew igły zrzuca, więc w zielniku nie zostałyby spięte po dwie na gałązce. Dwie igły razem to sosna.",
              ua: "Модрина хвою скидає, тож у гербарії вона не лишилася б зчепленою по дві на гілці. Дві хвоїнки разом — це сосна."
            }
          }
        ],
        explanation: {
          pl: "Dwie igły w pęczku nazywają sosnę.",
          ua: "Дві хвоїнки в пучку називають сосну."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Drzewko w klasie", ua: "Перевірка 2. Деревце в класі" },
      task: {
        id: "l28-t2",
        type: "single-choice",
        question: {
          pl: "Na drzewku w klasie igły kłują palec i siedzą pojedynczo, a szyszki wiszą. Uczeń mówi, że to jodła, bo korona jest stożkiem. Co pasuje do lekcji?",
          ua: "На деревці в класі хвоя коле палець і сидить по одній, а шишки висять. Учень каже, що це ялиця, бо крона є конусом. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "kłujące igły pojedynczo i zwisające szyszki to świerk; stożek korony nie jest kluczem", ua: "колюча хвоя по одній і звислі шишки — це ялина; конус крони не є ключем" } },
          { id: "b", label: { pl: "tak — każdy stożek korony ma miękkie igły jodły", ua: "так — кожен конус крони має м’яку хвою ялиці" } },
          { id: "c", label: { pl: "tak — wisząca szyszka jest owocem jabłoni", ua: "так — висяча шишка є плодом яблуні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Stożek korony bywa u świerka i nie nazywa jodły. Jodła ma igły miękkie, a szyszki stoją. Tu igły kłują i wiszą szyszki: to świerk.",
              ua: "Конус крони буває в ялини і не називає ялицю. Ялиця має м’яку хвою, а шишки стоять. Тут хвоя коле і висять шишки: це ялина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owoc jabłoni jest później. Wisząca szyszka świerka nie osłania nasion jak jabłko. Igły kłują i rosną pojedynczo.",
              ua: "Плід яблуні є пізніше. Звисла шишка ялини не вкриває насіння, як яблуко. Хвоя коле і росте по одній."
            }
          }
        ],
        explanation: {
          pl: "Świerk kłuje, igły ma pojedynczo, a szyszki zwisają.",
          ua: "Ялина коле, хвою має по одній, а шишки звисають."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Łuski pod drzewem", ua: "Перевірка 3. Луски під деревом" },
      task: {
        id: "l28-t3",
        type: "single-choice",
        question: {
          pl: "Pod górskim drzewem nie ma całych szyszek, tylko łuski. Na gałęzi igły są miękkie, a szyszki stoją. Uczeń mówi, że drzewo zachorowało, bo zgubiło szyszki jak modrzew igły. Co pasuje do lekcji?",
          ua: "Під гірським деревом немає цілих шишок, лише луски. На гілці хвоя м’яка, а шишки стоять. Учень каже, що дерево захворіло, бо загубило шишки, як модрина хвою. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to jodła: szyszki stoją i rozpadają się na drzewie, a igły zostają miękkie", ua: "це ялиця: шишки стоять і розпадаються на дереві, а хвоя лишається м’якою" } },
          { id: "b", label: { pl: "tak — łuski na ziemi znaczą, że modrzew zgubił igły", ua: "так — луски на землі означають, що модрина загубила хвою" } },
          { id: "c", label: { pl: "tak — miękkie igły to zawsze dwie igły sosny w pęczku", ua: "так — м’яка хвоя це завжди дві хвоїнки сосни в пучку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Modrzew gubi igły, a szyszki zostają na gałęzi. Tu igły są miękkie i zostały, a szyszki stoją i rozpadają się. To jodła, nie choroba.",
              ua: "Модрина губить хвою, а шишки лишаються на гілці. Тут хвоя м’яка і лишилася, а шишки стоять і розпадаються. Це ялиця, не хвороба."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dwie igły w pęczku to sosna. Miękka igła i stojąca szyszka, która rozpada się na drzewie, to jodła.",
              ua: "Дві хвоїнки в пучку — це сосна. М’яка хвоя і стояча шишка, яка розпадається на дереві, — це ялиця."
            }
          }
        ],
        explanation: {
          pl: "Jodła ma miękkie igły. Szyszki stoją i rozpadają się na drzewie.",
          ua: "Ялиця має м’яку хвою. Шишки стоять і розпадаються на дереві."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Styczeń", ua: "Перевірка 4. Січень" },
      task: {
        id: "l28-t4",
        type: "single-choice",
        question: {
          pl: "W styczniu drzewo jest gołe, ale na gałęziach są małe szyszki. Latem miało miękkie igły w pęczkach. Uczeń podpisuje je „dąb”. Co pasuje do lekcji?",
          ua: "У січні дерево голе, але на гілках є малі шишки. Улітку мало м’яку хвою в пучках. Учень підписує його «дуб». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to modrzew: zrzuca igły, zostaje iglakiem z szyszkami; dąb jest później", ua: "це модрина: скидає хвою, лишається хвойним деревом із шишками; дуб є пізніше" } },
          { id: "b", label: { pl: "tak — gołe zimą zawsze jest dębem", ua: "так — голе взимку завжди є дубом" } },
          { id: "c", label: { pl: "tak — szyszki na gołym drzewie to kwiaty jabłoni", ua: "так — шишки на голому дереві це квітки яблуні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gołe gałęzie z szyszkami to modrzew, nie dąb. Dąb poznasz później i nie ma on szyszek. Sosna, świerk i jodła zimą są zielone.",
              ua: "Голі гілки з шишками — це модрина, не дуб. Дуб пізнаєш пізніше, і шишок він не має. Сосна, ялина і ялиця взимку зелені."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kwiat jabłoni jest później. Na gołych gałązkach zostały szyszki modrzewia. Igły opadły jesienią, a drzewo zostało iglakiem.",
              ua: "Квітка яблуні є пізніше. На голих гілках лишилися шишки модрини. Хвоя опала восени, а дерево лишилося хвойним."
            }
          }
        ],
        explanation: {
          pl: "Modrzew zrzuca igły i zostaje drzewem iglastym z szyszkami.",
          ua: "Модрина скидає хвою і лишається хвойним деревом із шишками."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Stok", ua: "Перевірка 5. Схил" },
      task: {
        id: "l28-t5",
        type: "single-choice",
        question: {
          pl: "Z iglastego pnia zrobiono deski, na ranie widać żywicę, a las na stoku trzyma glebę. Uczeń mówi, że to znaczenie mchu, bo z mchu jest torf. Co pasuje do lekcji?",
          ua: "З хвойного стовбура зробили дошки, на рані видно живицю, а ліс на схилі тримає ґрунт. Учень каже, що це значення моху, бо з моху є торф. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "drewno, żywica i las to znaczenie drzew iglastych; torf powstaje z mchów", ua: "деревина, живиця і ліс — це значення хвойних дерев; торф виникає з мохів" } },
          { id: "b", label: { pl: "tak — deski powstają z puszki mchu", ua: "так — дошки виникають із коробочки моху" } },
          { id: "c", label: { pl: "tak — żywica na ranie jest kwiatem", ua: "так — живиця на рані є квіткою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka mchu ma zarodniki, nie deski. Deski są z drewna iglastego. Żywica zakleja ranę, a las trzyma glebę. Torf powstaje z mchów.",
              ua: "Коробочка моху має спори, не дошки. Дошки є з хвойної деревини. Живиця заліплює рану, а ліс тримає ґрунт. Торф виникає з мохів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kwiat jest później. Kropla na ranie pnia to żywica: zakleja drzewo. Deski są z drewna, a las na stoku trzyma glebę.",
              ua: "Квітка є пізніше. Крапля на рані стовбура — це живиця: заліплює дерево. Дошки є з деревини, а ліс на схилі тримає ґрунт."
            }
          }
        ],
        explanation: {
          pl: "Drewno, żywica i las to znaczenie drzew iglastych. Torf powstaje z mchów.",
          ua: "Деревина, живиця і ліс — це значення хвойних дерев. Торф виникає з мохів."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l28-znaczenie.png", {
        alt: { pl: "Deski, żywica i las iglasty", ua: "Дошки, живиця і хвойний ліс" },
        title: { pl: "Cztery klucze. I las.", ua: "Чотири ключі. І ліс." },
        prompt: { pl: "Ta sama plansza drewna, żywicy i lasu." }
      }),
      text: {
        pl: [
          "Sosna — dwie igły w pęczku.",
          "Świerk — igły kłujące, pojedynczo, szyszki zwisają.",
          "Jodła — igły miękkie, szyszki stoją i rozpadają się na drzewie.",
          "Modrzew — zrzuca igły, zostaje iglakiem z szyszkami.",
          "Szyszkojagoda jałowca nie jest śliwką. Cisa nie zrywasz. Drewno, żywica, las."
        ],
        ua: [
          "Сосна — дві хвоїнки в пучку.",
          "Ялина — хвоя колюча, по одній, шишки звисають.",
          "Ялиця — хвоя м’яка, шишки стоять і розпадаються на дереві.",
          "Модрина — скидає хвою, лишається хвойним деревом із шишками.",
          "Шишкоягода ялівцю не є сливою. Тис не зриваєш. Деревина, живиця, ліс."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Rozpoznam sosnę po dwóch igłach w pęczku.", ua: "Розпізнаю сосну по двох хвоїнках у пучку." },
        { pl: "Rozpoznam świerk: igły kłujące pojedynczo, szyszki zwisają.", ua: "Розпізнаю ялину: хвоя колюча по одній, шишки звисають." },
        { pl: "Rozpoznam jodłę: igły miękkie, szyszki stoją.", ua: "Розпізнаю ялицю: хвоя м’яка, шишки стоять." },
        { pl: "Powiem, że modrzew zrzuca igły jesienią i zostaje iglakiem.", ua: "Скажу, що модрина скидає хвою восени і лишається хвойним деревом." },
        { pl: "Podam znaczenie: drewno, żywica, las.", ua: "Назву значення: деревина, живиця, ліс." },
        { pl: "Nie nazwę szyszkojagody śliwką i nie zerwę cisa.", ua: "Не назву шишкоягоду сливою і не зірву тис." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
