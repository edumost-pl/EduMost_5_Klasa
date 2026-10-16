function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L10_Doswiadczenie_fotosynteza/images/";

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
      heading: { pl: "Misja: sprawdzić światło i skrobię", ua: "Місія: перевірити світло і крохмаль" },
      visual: vizGh("l10-zacznijmy.png", {
        alt: { pl: "Liść częściowo zaklejony paskiem papieru", ua: "Листок частково заклеєний смужкою паперу" },
        title: { pl: "Czy w zasłoniętej części liścia powstanie skrobia?", ua: "Чи в затуленій частині листка виникне крохмаль?" },
        prompt: { pl: "Zdjęcie lekcji 10: liść z paskiem papieru." }
      }),
      text: {
        pl: [
          "To lekcja 10: doświadczenie o fotosyntezie. Na poprzedniej lekcji było: bez światła nie ma nowego cukru, a cukier bywa zapisywany jako skrobia.",
          "Dziś sprawdzamy to doświadczeniem. Zmieniamy jeden czynnik: dostęp światła do części liścia. Reszta zostaje taka sama.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Etapu z alkoholem i ogniem nie robisz w domu."
        ],
        ua: [
          "Це урок 10: дослід про фотосинтез. На попередньому уроці було: без світла немає нового цукру, а цукор інколи записується як крохмаль.",
          "Сьогодні перевіряємо це дослідом. Змінюємо один чинник: доступ світла до частини листка. Решта лишається такою самою.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Етап зі спиртом і вогнем удома не робиш."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "problem badawczy", ua: "дослідницька проблема — питання досліду" },
        { pl: "hipoteza", ua: "гіпотеза — припущення, яке перевіримо" },
        { pl: "próba badawcza", ua: "дослідна проба — частина, на яку падає світло" },
        { pl: "próba kontrolna", ua: "контрольна проба — затулена частина, без світла" },
        { pl: "jodyna", ua: "йод — забарвлює крохмаль у темно-синій" },
        { pl: "skrobia", ua: "крохмаль — запас цукру з фотосинтезу" },
        { pl: "wniosek", ua: "висновок — відповідь після результату" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Problem i hipoteza", ua: "Поняття. Проблема і гіпотеза" },
      visual: vizGh("l10-hipoteza.png", {
        alt: { pl: "Pytanie badawcze i hipoteza na tablicy", ua: "Дослідницьке питання і гіпотеза на дошці" },
        title: { pl: "Najpierw pytanie. Potem przypuszczenie. Potem test.", ua: "Спочатку питання. Потім припущення. Потім перевірка." },
        prompt: { pl: "Plansza lekcji 10: problem i hipoteza o skrobi." }
      }),
      text: {
        pl: [
          [em("Problem badawczy"), " to pytanie: Czy do powstania skrobi w liściu potrzebne jest światło?"],
          [em("Hipoteza"), " to przypuszczenie, które sprawdzimy: Skrobia powstanie tylko w tej części liścia, do której dochodziło światło."],
          "Hipoteza może okazać się prawdziwa albo nie. Doświadczenie nie jest po to, żeby z góry wpisać pewny wniosek."
        ],
        ua: [
          [em("Дослідницька проблема"), " — це питання: Чи для виникнення крохмалю в листку потрібне світло?"],
          [em("Гіпотеза"), " — припущення, яке перевіримо: Крохмаль виникне лише в тій частині листка, до якої доходило світло."],
          "Гіпотеза може виявитися правдивою або ні. Дослід не для того, щоб заздалегідь вписати певний висновок."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa zdania na tablicy", ua: "Приклад. Два речення на дошці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pytanie ma znak zapytania: czy światło jest potrzebne do skrobi?"],
            ua: ["Питання має знак питання: чи світло потрібне для крохмалю?"]
          }
        },
        {
          text: {
            pl: ["Hipoteza odpowiada z wyprzedzeniem, ale jeszcze bez wyniku: skrobia tylko tam, gdzie było światło."],
            ua: ["Гіпотеза відповідає наперед, але ще без результату: крохмаль лише там, де було світло."]
          }
        },
        {
          text: {
            pl: ["Wniosek zapiszesz dopiero po barwie liścia. Hipoteza nim nie jest."],
            ua: ["Висновок запишеш лише після барви листка. Гіпотеза ним не є."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które jest które?", ua: "Коротке питання. Що є чим?" },
      task: {
        id: "l10-g1",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna?",
          ua: "Яка пара правильна?"
        },
        options: [
          { id: "a", label: { pl: "problem — pytanie; hipoteza — przypuszczenie do sprawdzenia", ua: "проблема — питання; гіпотеза — припущення для перевірки" } },
          { id: "b", label: { pl: "hipoteza — pewny wniosek zapisany przed doświadczeniem", ua: "гіпотеза — певний висновок, записаний перед дослідом" } },
          { id: "c", label: { pl: "problem — nazwa jodyny", ua: "проблема — назва йоду" } }
        ],
        answer: "a",
        hint: {
          pl: "Pytanie ma znak zapytania. Przypuszczenie jeszcze czeka na wynik.",
          ua: "Питання має знак питання. Припущення ще чекає на результат."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Przed doświadczeniem nie ma jeszcze wniosku. Hipoteza jest przypuszczeniem, które wynik może potwierdzić albo nie.",
              ua: "Перед дослідом ще немає висновку. Гіпотеза є припущенням, яке результат може підтвердити або ні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna jest odczynnikiem na końcu. Problem tego doświadczenia jest pytaniem o światło i skrobię.",
              ua: "Йод є реактивом наприкінці. Проблема цього досліду — питання про світло і крохмаль."
            }
          }
        ],
        explanation: {
          pl: "Problem to pytanie. Hipoteza to przypuszczenie do sprawdzenia.",
          ua: "Проблема — це питання. Гіпотеза — припущення для перевірки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Hipoteza już jest wnioskiem", ua: "Типова помилка. Гіпотеза вже є висновком" },
      claim: {
        pl: "„Hipotezę zapisuję jako pewnik, zanim zobaczę liść.”",
        ua: "«Гіпотезу записую як певність, ще не побачивши листок.»"
      },
      text: {
        pl: [
          "Hipoteza jest do sprawdzenia, nie do ogłoszenia z góry.",
          "Wniosek powstanie po wyniku: tam, gdzie barwa pokaże skrobię."
        ],
        ua: [
          "Гіпотеза є для перевірки, не для оголошення заздалегідь.",
          "Висновок виникне після результату: там, де барва покаже крохмаль."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Które zdanie jest hipotezą?", ua: "Сам. Яке речення є гіпотезою?" },
      task: {
        id: "l10-p1",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest hipotezą tego doświadczenia?",
          ua: "Яке речення є гіпотезою цього досліду?"
        },
        options: [
          { id: "a", label: { pl: "Skrobia powstanie tylko w oświetlonej części liścia.", ua: "Крохмаль виникне лише в освітленій частині листка." } },
          { id: "b", label: { pl: "Czy do powstania skrobi potrzebne jest światło?", ua: "Чи для виникнення крохмалю потрібне світло?" } },
          { id: "c", label: { pl: "Jodyna w butelce jest brązowa.", ua: "Йод у пляшці коричневий." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To pytanie, czyli problem badawczy. Hipoteza jest przypuszczeniem bez znaku zapytania.",
              ua: "Це питання, тобто дослідницька проблема. Гіпотеза є припущенням без знака питання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor jodyny w butelce nie jest przypuszczeniem o skrobi. Hipoteza mówi, gdzie powstanie skrobia.",
              ua: "Колір йоду в пляшці не є припущенням про крохмаль. Гіпотеза каже, де виникне крохмаль."
            }
          }
        ],
        explanation: {
          pl: "Hipoteza: skrobia powstanie tylko tam, gdzie dochodziło światło.",
          ua: "Гіпотеза: крохмаль виникне лише там, де доходило світло."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie próby, jeden czynnik", ua: "Поняття. Дві проби, один чинник" },
      visual: vizGh("l10-proby.png", {
        alt: { pl: "Oświetlona i zasłonięta część tego samego liścia", ua: "Освітлена і затулена частина того самого листка" },
        title: { pl: "Próba badawcza i kontrolna na jednym liściu.", ua: "Дослідна і контрольна проба на одному листку." },
        prompt: { pl: "Plansza lekcji 10: dwie próby na jednym liściu." }
      }),
      text: {
        pl: [
          ["Zmieniamy ", em("jeden"), " czynnik: dostęp światła."],
          [em("Próba badawcza"), " — część liścia odkryta, światło pada."],
          [em("Próba kontrolna"), " — część zasłonięta paskiem papieru lub folii, światło nie pada."],
          "To ta sama roślina, ta sama woda, to samo powietrze. Jeśli wynik będzie inny, wiemy, że poszło o światło."
        ],
        ua: [
          ["Змінюємо ", em("один"), " чинник: доступ світла."],
          [em("Дослідна проба"), " — частина листка відкрита, світло падає."],
          [em("Контрольна проба"), " — частина затулена смужкою паперу або плівки, світло не падає."],
          "Це та сама рослина, та сама вода, те саме повітря. Якщо результат інший, знаємо, що річ у світлі."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Lewa i prawa strona", ua: "Приклад. Лівий і правий бік" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Odkryta część dostaje światło. To próba badawcza."],
            ua: ["Відкрита частина дістає світло. Це дослідна проба."]
          }
        },
        {
          text: {
            pl: ["Pasek odcina światło. To próba kontrolna."],
            ua: ["Смужка відтинає світло. Це контрольна проба."]
          }
        },
        {
          text: {
            pl: ["Doniczka, woda i powietrze są wspólne. Nie dokładamy drugiego gatunku rośliny."],
            ua: ["Горщик, вода і повітря спільні. Не додаємо другий вид рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która próba?", ua: "Коротке питання. Яка проба?" },
      task: {
        id: "l10-g2",
        type: "single-choice",
        question: {
          pl: "Które połączenie jest poprawne?",
          ua: "Яке поєднання правильне?"
        },
        options: [
          { id: "a", label: { pl: "odkryta część — próba badawcza; zasłonięta — próba kontrolna", ua: "відкрита частина — дослідна проба; затулена — контрольна проба" } },
          { id: "b", label: { pl: "zasłonięta część to próba badawcza, bo jest ciekawsza", ua: "затулена частина — дослідна проба, бо вона цікавіша" } },
          { id: "c", label: { pl: "kontroli nie potrzeba, wystarczy jeden liść na słońcu", ua: "контролю не треба, досить одного листка на сонці" } }
        ],
        answer: "a",
        hint: {
          pl: "Badawcza ma czynnik, czyli światło. Kontrolna tego czynnika na swoim fragmencie nie ma.",
          ua: "Дослідна має чинник, тобто світло. Контрольна цього чинника на своєму фрагменті не має."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ciekawość nie nazywa próby. Badawcza jest tam, gdzie światło pada. Zasłonięta jest kontrolą.",
              ua: "Цікавість не називає пробу. Дослідна є там, де світло падає. Затулена є контролем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez części bez światła nie masz z czym porównać. Kontrola jest na zasłoniętym fragmencie tego samego liścia.",
              ua: "Без частини без світла немає з чим порівняти. Контроль є на затуленому фрагменті того самого листка."
            }
          }
        ],
        explanation: {
          pl: "Odkryta część to próba badawcza. Zasłonięta to próba kontrolna.",
          ua: "Відкрита частина — дослідна проба. Затулена — контрольна проба."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zmieniamy wszystko naraz", ua: "Типова помилка. Змінюємо все водночас" },
      claim: {
        pl: "„Jedna roślina stoi w szafie, druga jest innym gatunkiem na balkonie. I tak wyjdzie, czy chodzi o światło.”",
        ua: "«Одна рослина стоїть у шафі, друга — інший вид на балконі. І так вийде, чи річ у світлі.»"
      },
      text: {
        pl: [
          "Wtedy nie wiadomo, co zmieniło wynik: światło, gatunek czy miejsce.",
          "Tu zostaje jedna blaszka. Różni się tylko dostęp światła."
        ],
        ua: [
          "Тоді невідомо, що змінило результат: світло, вид чи місце.",
          "Тут лишається одна пластинка. Різниться лише доступ світла."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Po co pasek na pelargonii?", ua: "Сам. Навіщо смужка на пеларгонії?" },
      task: {
        id: "l10-p2",
        type: "single-choice",
        question: {
          pl: "Po co na liściu pelargonii zasłaniasz pasek, a reszty nie?",
          ua: "Навіщо на листку пеларгонії затуляєш смужку, а решту ні?"
        },
        options: [
          { id: "a", label: { pl: "żeby porównać miejsce ze światłem i bez światła na tej samej blaszce", ua: "щоб порівняти місце зі світлом і без світла на тій самій пластинці" } },
          { id: "b", label: { pl: "żeby naraz zmienić gatunek, wodę i światło", ua: "щоб водночас змінити вид, воду і світло" } },
          { id: "c", label: { pl: "żeby zasłonięta część dostała więcej światła niż odkryta", ua: "щоб затулена частина дістала більше світла, ніж відкрита" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W tym doświadczeniu zmieniasz jeden czynnik. Pasek odcina światło, roślina i woda zostają te same.",
              ua: "У цьому досліді змінюєш один чинник. Смужка відтинає світло, рослина і вода лишаються ті самі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasek odcina światło, nie dodaje go. Odkryta część dostaje światło, zasłonięta nie.",
              ua: "Смужка відтинає світло, не додає його. Відкрита частина дістає світло, затулена ні."
            }
          }
        ],
        explanation: {
          pl: "Pasek daje fragment bez światła na tym samym liściu.",
          ua: "Смужка дає фрагмент без світла на тому самому листку."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co jodyna", ua: "Поняття. Навіщо йод" },
      visual: vizGh("l10-jodyna.png", {
        alt: { pl: "Kropla jodyny na skrobi — ciemnoniebieska plama", ua: "Крапля йоду на крохмалі — темно-синя пляма" },
        title: { pl: "Jodyna i skrobia dają ciemnoniebieski kolor.", ua: "Йод і крохмаль дають темно-синій колір." },
        prompt: { pl: "Zdjęcie lekcji 10: jodyna na skrobi." }
      }),
      text: {
        pl: [
          "Gołym okiem nie widać, czy w liściu jest skrobia. Potrzebny jest test.",
          [em("Jodyna"), " barwi skrobię na kolor ciemnoniebieski, granatowy. Jeśli skrobi nie ma, plama zostaje żółtawa lub brązowa, jak sama jodyna."],
          "Ciemny kolor znaczy: skrobia była. Brak ciemnego koloru znaczy: skrobi nie wykryto. Jodyna nie jest chlorofilem i nie jest produktem fotosyntezy."
        ],
        ua: [
          "Неозброєним оком не видно, чи в листку є крохмаль. Потрібен тест.",
          [em("Йод"), " забарвлює крохмаль у темно-синій колір. Якщо крохмалю немає, пляма лишається жовтуватою або коричневою, як сам йод."],
          "Темний колір означає: крохмаль був. Немає темного кольору означає: крохмалю не виявлено. Йод не є хлорофілом і не є продуктом фотосинтезу."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Plama na talerzyku", ua: "Приклад. Пляма на тарілці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na skrobię ziemniaczaną kapie jodyna. Plama robi się granatowa."],
            ua: ["На картопляний крохмаль капає йод. Пляма стає темно-синьою."]
          }
        },
        {
          text: {
            pl: ["Tam, gdzie skrobi nie ma, zostaje żółtawy lub brązowy kolor jodyny."],
            ua: ["Там, де крохмалю немає, лишається жовтуватий або коричневий колір йоду."]
          }
        },
        {
          text: {
            pl: ["Ten sam test czytasz później na liściu. Jodyna niczego w fotosyntezie nie wytwarza."],
            ua: ["Той самий тест читаєш пізніше на листку. Йод нічого у фотосинтезі не виробляє."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co kropla?", ua: "Коротке питання. Навіщо крапля?" },
      task: {
        id: "l10-g3",
        type: "single-choice",
        question: {
          pl: "Po co w tym doświadczeniu jodyna?",
          ua: "Навіщо в цьому досліді йод?"
        },
        options: [
          { id: "a", label: { pl: "wykrywa skrobię — ciemnoniebieski kolor oznacza, że skrobia jest", ua: "виявляє крохмаль — темно-синій колір означає, що крохмаль є" } },
          { id: "b", label: { pl: "zastępuje chlorofil w chloroplastach", ua: "замінює хлорофіл у хлоропластах" } },
          { id: "c", label: { pl: "jest produktem fotosyntezy zamiast tlenu", ua: "є продуктом фотосинтезу замість кисню" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj wskaźnika. Granatowy kolor mówi o skrobi, nie o chlorofilu.",
          ua: "Шукай індикатор. Темно-синій колір каже про крохмаль, не про хлорофіл."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chlorofil pochłania światło w chloroplastach. Jodyna tylko barwi skrobię po doświadczeniu.",
              ua: "Хлорофіл поглинає світло в хлоропластах. Йод лише забарвлює крохмаль після досліду."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Produktami fotosyntezy są glukoza i tlen. Jodyna jest odczynnikiem, który pokazuje skrobię.",
              ua: "Продуктами фотосинтезу є глюкоза і кисень. Йод є реактивом, який показує крохмаль."
            }
          }
        ],
        explanation: {
          pl: "Jodyna wykrywa skrobię. Ciemnoniebieski kolor znaczy, że skrobia jest.",
          ua: "Йод виявляє крохмаль. Темно-синій колір означає, що крохмаль є."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jodyna robi fotosyntezę", ua: "Типова помилка. Йод робить фотосинтез" },
      claim: {
        pl: "„Jodyna wytwarza skrobię i chlorofil.”",
        ua: "«Йод виробляє крохмаль і хлорофіл.»"
      },
      text: {
        pl: [
          "Jodyna niczego nie wytwarza. Tylko barwi to, co już jest.",
          "Skrobia powstaje w liściu przy świetle. Ciemny kolor jest znakiem, nie przyczyną."
        ],
        ua: [
          "Йод нічого не виробляє. Лише забарвлює те, що вже є.",
          "Крохмаль виникає в листку при світлі. Темний колір є знаком, не причиною."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa kolory na liściu", ua: "Сам. Два кольори на листку" },
      task: {
        id: "l10-p3",
        type: "single-choice",
        question: {
          pl: "Po jodynie odkryta część liścia jest granatowa, a zasłonięta żółtawa. Co to znaczy?",
          ua: "Після йоду відкрита частина листка темно-синя, а затулена жовтувата. Що це означає?"
        },
        options: [
          { id: "a", label: { pl: "w odkrytej części jest skrobia; w zasłoniętej skrobi nie wykryto", ua: "у відкритій частині є крохмаль; у затуленій крохмалю не виявлено" } },
          { id: "b", label: { pl: "granatowy kolor znaczy, że skrobi nie ma", ua: "темно-синій колір означає, що крохмалю немає" } },
          { id: "c", label: { pl: "żółtawa część ma więcej skrobi niż granatowa", ua: "жовтувата частина має більше крохмалю, ніж темно-синя" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Odwrotnie. Granatowy, ciemnoniebieski kolor jest znakiem skrobi. Żółtawy zostaje tam, gdzie skrobi nie wykryto.",
              ua: "Навпаки. Темно-синій колір є знаком крохмалю. Жовтуватий лишається там, де крохмалю не виявлено."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Żółtawa barwa jest bliska samej jodynie. To nie jest więcej skrobi. Skrobię pokazuje kolor ciemnoniebieski.",
              ua: "Жовтувата барва близька до самого йоду. Це не більше крохмалю. Крохмаль показує темно-синій колір."
            }
          }
        ],
        explanation: {
          pl: "Granatowo jest tam, gdzie jest skrobia. Żółtawo — tam, gdzie jej nie wykryto.",
          ua: "Темно-синьо там, де є крохмаль. Жовтувато — там, де його не виявлено."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jak to robi szkoła", ua: "Поняття. Як це робить школа" },
      visual: vizGh("l10-szkola.png", {
        alt: { pl: "Etapy szkolnego doświadczenia ze skrobią w liściu", ua: "Етапи шкільного досліду з крохмалем у листку" },
        title: { pl: "Ciemność, pasek, światło, potem jodyna. Alkohol zostaje w szkole.", ua: "Темрява, смужка, світло, потім йод. Спирт лишається в школі." },
        prompt: { pl: "Plansza lekcji 10: etapy doświadczenia w szkole." }
      }),
      text: {
        pl: [
          "Nauczyciel często najpierw trzyma roślinę kilka dni w ciemności, żeby zużyła zapas skrobi. Potem zasłania część liścia i wystawia roślinę na światło.",
          ["Żeby jodyna pokazała skrobię, liść trzeba przygotować, między innymi usunąć zielony barwnik. Tego etapu ", em("nie wykonujesz w domu"), ": bywa alkohol i podgrzewanie. To pracownia i nadzór dorosłego."],
          "Jodyna nie jest zabawką. Wynik oglądasz na lekcji albo na zdjęciu."
        ],
        ua: [
          "Учитель часто спочатку тримає рослину кілька днів у темряві, щоб вона витратила запас крохмалю. Потім затуляють частину листка і виставляють рослину на світло.",
          ["Щоб йод показав крохмаль, листок треба підготувати, зокрема прибрати зелений барвник. Цей етап ", em("не виконуєш удома"), ": буває спирт і нагрівання. Це кабінет і нагляд дорослого."],
          "Йод не іграшка. Результат дивишся на уроці або на фото."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Cztery kroki", ua: "Приклад. Чотири кроки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kilka dni ciemności: roślina zużywa starą skrobię."],
            ua: ["Кілька днів темряви: рослина витрачає старий крохмаль."]
          }
        },
        {
          text: {
            pl: ["Pasek na liść, potem światło. Nowa skrobia może powstać tylko na odkrytej części."],
            ua: ["Смужка на листок, потім світло. Новий крохмаль може виникнути лише на відкритій частині."]
          }
        },
        {
          text: {
            pl: ["Nauczyciel przygotowuje liść. Ty tego nie podgrzewasz w domu. Na końcu jodyna pokazuje barwę."],
            ua: ["Учитель готує листок. Ти цього не нагріваєш удома. Наприкінці йод показує барву."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie alkohol?", ua: "Коротке питання. Де спирт?" },
      task: {
        id: "l10-g4",
        type: "single-choice",
        question: {
          pl: "Gdzie wykonuje się etap z alkoholem i podgrzewaniem liścia?",
          ua: "Де виконують етап зі спиртом і нагріванням листка?"
        },
        options: [
          { id: "a", label: { pl: "w szkole, pod opieką nauczyciela", ua: "у школі, під наглядом учителя" } },
          { id: "b", label: { pl: "sam w domu, w kuchni", ua: "сам удома, на кухні" } },
          { id: "c", label: { pl: "nigdzie, bo jodyna sama usuwa zielony barwnik i jest produktem fotosyntezy", ua: "ніде, бо йод сам прибирає зелений барвник і є продуктом фотосинтезу" } }
        ],
        answer: "a",
        hint: {
          pl: "Alkohol i ogień zostają w pracowni. W domu oglądasz zdjęcie wyniku.",
          ua: "Спирт і вогонь лишаються в кабінеті. Удома дивишся фото результату."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Alkohol i podgrzewanie są niebezpieczne. Ten etap robi szkoła, nie kuchnia.",
              ua: "Спирт і нагрівання небезпечні. Цей етап робить школа, не кухня."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna barwi skrobię. Nie usuwa zieleni i nie jest produktem fotosyntezy. Przygotowanie liścia zostaje u nauczyciela.",
              ua: "Йод забарвлює крохмаль. Не прибирає зелень і не є продуктом фотосинтезу. Підготовка листка лишається в учителя."
            }
          }
        ],
        explanation: {
          pl: "Liść przygotowuje się w szkole pod opieką nauczyciela.",
          ua: "Листок готують у школі під наглядом учителя."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zrobię to w kuchni", ua: "Типова помилка. Зроблю це на кухні" },
      claim: {
        pl: "„Sam odbarwię liść alkoholem na kuchence, a potem poleję jodyną.”",
        ua: "«Сам знебарвлю листок спиртом на плиті, а потім полию йодом.»"
      },
      text: {
        pl: [
          "Tego nie robisz w domu.",
          "Ogień, alkohol i jodyna zostają w pracowni. Wynik możesz obejrzeć na lekcji albo na zdjęciu."
        ],
        ua: [
          "Цього не робиш удома.",
          "Вогонь, спирт і йод лишаються в кабінеті. Результат можеш подивитися на уроці або на фото."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kilka dni ciemności", ua: "Сам. Кілька днів темряви" },
      task: {
        id: "l10-p4",
        type: "single-choice",
        question: {
          pl: "Po co pelargonia stoi kilka dni w ciemności, zanim nakleisz pasek i dasz światło?",
          ua: "Навіщо пеларгонія стоїть кілька днів у темряві, перш ніж наклеїш смужку і даси світло?"
        },
        options: [
          { id: "a", label: { pl: "żeby zużyła zapas skrobi; późniejsza skrobia będzie ze świeżego światła", ua: "щоб витратила запас крохмалю; пізніший крохмаль буде зі свіжого світла" } },
          { id: "b", label: { pl: "bo w ciemności fotosynteza jest szybsza", ua: "бо в темряві фотосинтез швидший" } },
          { id: "c", label: { pl: "żeby w domu podgrzać liść z alkoholem", ua: "щоб удома нагріти листок зі спиртом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W ciemności nowa fotosynteza nie przyspiesza. Ciemność na początku ma zużyć starą skrobię.",
              ua: "У темряві новий фотосинтез не прискорюється. Темрява на початку має витратити старий крохмаль."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Alkohol i podgrzewanie zostają w szkole. Dni w ciemności są po to, by roślina zużyła zapas skrobi.",
              ua: "Спирт і нагрівання лишаються в школі. Дні в темряві для того, щоб рослина витратила запас крохмалю."
            }
          }
        ],
        explanation: {
          pl: "Ciemność na początku zużywa zapas skrobi. Potem widać skrobię z nowego światła.",
          ua: "Темрява на початку витрачає запас крохмалю. Потім видно крохмаль із нового світла."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wynik i wniosek", ua: "Поняття. Результат і висновок" },
      visual: vizGh("l10-wynik.png", {
        alt: { pl: "Liść po jodynie: odkryta część ciemna, zasłonięta jasna", ua: "Листок після йоду: відкрита частина темна, затулена світла" },
        title: { pl: "Ciemno tam, gdzie było światło.", ua: "Темно там, де було світло." },
        prompt: { pl: "Zdjęcie lekcji 10: liść po jodynie." }
      }),
      text: {
        pl: [
          "Typowy wynik: część, na którą padało światło, barwi się na ciemnoniebiesko. Jest skrobia. Część zasłonięta zostaje bez tej barwy.",
          [em("Wniosek"), ": skrobia powstaje w liściu tam, gdzie było światło. To zgadza się z hipotezą i z tym, że fotosynteza wymaga światła."],
          "Skrobia jest zapasem cukru z fotosyntezy. Test jodyną nie pokazuje tlenu. Dziś paszport to skrobia i światło."
        ],
        ua: [
          "Типовий результат: частина, на яку падало світло, забарвлюється в темно-синій. Є крохмаль. Затулена частина лишається без цієї барви.",
          [em("Висновок"), ": крохмаль виникає в листку там, де було світло. Це збігається з гіпотезою і з тим, що фотосинтез потребує світла."],
          "Крохмаль — запас цукру з фотосинтезу. Тест йодом не показує кисень. Сьогодні паспорт — крохмаль і світло."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Czytanie liścia", ua: "Приклад. Читання листка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Granatowa część była na świetle. Tam jest skrobia."],
            ua: ["Темно-синя частина була на світлі. Там є крохмаль."]
          }
        },
        {
          text: {
            pl: ["Żółtawy pasek był zasłonięty. Skrobi tam nie wykryto."],
            ua: ["Жовтувата смужка була затулена. Крохмалю там не виявлено."]
          }
        },
        {
          text: {
            pl: ["Wniosek: skrobia powstaje tam, gdzie było światło."],
            ua: ["Висновок: крохмаль виникає там, де було світло."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jaki wniosek?", ua: "Коротке питання. Який висновок?" },
      task: {
        id: "l10-g5",
        type: "single-choice",
        question: {
          pl: "Jaki wniosek wynika z ciemnej barwy tylko na oświetlonej części liścia?",
          ua: "Який висновок випливає з темної барви лише на освітленій частині листка?"
        },
        options: [
          { id: "a", label: { pl: "skrobia powstaje tam, gdzie było światło", ua: "крохмаль виникає там, де було світло" } },
          { id: "b", label: { pl: "światło przeszkadza powstawaniu skrobi", ua: "світло заважає виникненню крохмалю" } },
          { id: "c", label: { pl: "jodyna wytwarza chloroplasty", ua: "йод виробляє хлоропласти" } }
        ],
        answer: "a",
        hint: {
          pl: "Ciemna barwa jest tam, gdzie światło padało. To znak skrobi.",
          ua: "Темна барва є там, де падало світло. Це знак крохмалю."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Odwrotnie. Ciemna barwa, czyli skrobia, jest po stronie światła. Zasłonięta część jej nie ma.",
              ua: "Навпаки. Темна барва, тобто крохмаль, є з боку світла. Затулена частина його не має."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna nie wytwarza chloroplastów. Barwa pokazuje skrobię, która powstała przy świetle.",
              ua: "Йод не виробляє хлоропластів. Барва показує крохмаль, який виник при світлі."
            }
          }
        ],
        explanation: {
          pl: "Skrobia powstaje tam, gdzie było światło.",
          ua: "Крохмаль виникає там, де було світло."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Światło przeszkadza", ua: "Типова помилка. Світло заважає" },
      claim: {
        pl: "„Skoro pasek jest jasny, światło przeszkadza fotosyntezie.”",
        ua: "«Якщо смужка світла, світло заважає фотосинтезу.»"
      },
      text: {
        pl: [
          "Jasny pasek nie miał światła i nie ma skrobi.",
          "Ciemna część miała światło i ma skrobię. Światło jest potrzebne, nie przeszkadza."
        ],
        ua: [
          "Світла смужка не мала світла і не має крохмалю.",
          "Темна частина мала світло і має крохмаль. Світло потрібне, не заважає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Liść po teście", ua: "Сам. Листок після тесту" },
      task: {
        id: "l10-p5",
        type: "single-choice",
        question: {
          pl: "Na liściu pelargonii pasek został żółtawy, a reszta blaszki granatowa. Gdzie powstała skrobia?",
          ua: "На листку пеларгонії смужка лишилася жовтуватою, а решта пластинки темно-синя. Де виник крохмаль?"
        },
        options: [
          { id: "a", label: { pl: "w granatowej, odkrytej części, gdzie było światło", ua: "у темно-синій, відкритій частині, де було світло" } },
          { id: "b", label: { pl: "w żółtawym pasku, bo był zasłonięty", ua: "у жовтуватій смужці, бо вона була затулена" } },
          { id: "c", label: { pl: "nigdzie — jodyna pokazuje tlen, nie skrobię", ua: "ніде — йод показує кисень, не крохмаль" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żółtawy pasek nie ma barwy skrobi. Skrobia jest w granatowej części, która miała światło.",
              ua: "Жовтувата смужка не має барви крохмалю. Крохмаль є в темно-синій частині, яка мала світло."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna nie pokazuje tlenu. Granatowy kolor oznacza skrobię.",
              ua: "Йод не показує кисень. Темно-синій колір означає крохмаль."
            }
          }
        ],
        explanation: {
          pl: "Skrobia powstała w odkrytej, granatowej części. Tam było światło.",
          ua: "Крохмаль виник у відкритій, темно-синій частині. Там було світло."
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
        id: "l10-t1",
        type: "single-choice",
        question: {
          pl: "Która para pasuje do tego doświadczenia?",
          ua: "Яка пара пасує до цього досліду?"
        },
        options: [
          { id: "a", label: { pl: "problem: czy światło jest potrzebne do powstania skrobi?; hipoteza: skrobia powstanie tylko w oświetlonej części", ua: "проблема: чи світло потрібне для виникнення крохмалю?; гіпотеза: крохмаль виникне лише в освітленій частині" } },
          { id: "b", label: { pl: "problem: jak smakuje jodyna?; hipoteza: liść będzie cały żółty niezależnie od światła", ua: "проблема: який смак йоду?; гіпотеза: листок буде весь жовтий незалежно від світла" } },
          { id: "c", label: { pl: "problem i hipoteza to ten sam pewny wniosek sprzed doświadczenia", ua: "проблема і гіпотеза — це той самий певний висновок до досліду" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Smak jodyny nie jest pytaniem tego doświadczenia. Pytanie jest o światło i skrobię w liściu.",
              ua: "Смак йоду не є питанням цього досліду. Питання є про світло і крохмаль у листку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Problem jest pytaniem, hipoteza przypuszczeniem. Wniosek zapisuje się po barwie liścia.",
              ua: "Проблема є питанням, гіпотеза — припущенням. Висновок записують після барви листка."
            }
          }
        ],
        explanation: {
          pl: "Problem pyta o światło i skrobię. Hipoteza mówi, że skrobia powstanie tylko w oświetlonej części.",
          ua: "Проблема питає про світло і крохмаль. Гіпотеза каже, що крохмаль виникне лише в освітленій частині."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Dwie próby", ua: "Перевірка 2. Дві проби" },
      task: {
        id: "l10-t2",
        type: "single-choice",
        question: {
          pl: "Który opis prób jest prawdziwy?",
          ua: "Який опис проб правдивий?"
        },
        options: [
          { id: "a", label: { pl: "Badawcza: światło dochodzi. Kontrolna: część zasłonięta. Roślina, woda i powietrze są te same.", ua: "Дослідна: світло доходить. Контрольна: частина затулена. Рослина, вода і повітря ті самі." } },
          { id: "b", label: { pl: "Badawcza jest zasłonięta, kontrolna stoi w innej doniczce i jest innym gatunkiem.", ua: "Дослідна затулена, контрольна стоїть в іншому горщику і є іншим видом." } },
          { id: "c", label: { pl: "Zmieniamy naraz gatunek, wodę, temperaturę i światło.", ua: "Змінюємо водночас вид, воду, температуру і світло." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zasłonięta część jest kontrolą, nie próbą badawczą. Druga doniczka i inny gatunek dokładają czynniki, których tu nie zmieniamy.",
              ua: "Затулена частина є контролем, не дослідною пробою. Другий горщик і інший вид додають чинники, яких тут не змінюємо."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wtedy nie wiadomo, co zmieniło wynik. Tu zmieniasz tylko dostęp światła na jednej blaszce.",
              ua: "Тоді невідомо, що змінило результат. Тут змінюєш лише доступ світла на одній пластинці."
            }
          }
        ],
        explanation: {
          pl: "Jedna zmiana: światło. Odkryte to próba badawcza, zasłonięte to kontrolna.",
          ua: "Одна зміна: світло. Відкрите — дослідна проба, затулене — контрольна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Jodyna", ua: "Перевірка 3. Йод" },
      task: {
        id: "l10-t3",
        type: "single-choice",
        question: {
          pl: "Po co jodyna w tym doświadczeniu?",
          ua: "Навіщо йод у цьому досліді?"
        },
        options: [
          { id: "a", label: { pl: "wykrywa skrobię: ciemnoniebieski kolor znaczy, że skrobia jest", ua: "виявляє крохмаль: темно-синій колір означає, що крохмаль є" } },
          { id: "b", label: { pl: "jest chlorofilem i pochłania światło", ua: "є хлорофілом і поглинає світло" } },
          { id: "c", label: { pl: "zastępuje dwutlenek węgla w równaniu fotosyntezy", ua: "замінює вуглекислий газ у рівнянні фотосинтезу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Światło pochłania chlorofil. Jodyna jest wskaźnikiem skrobi po doświadczeniu.",
              ua: "Світло поглинає хлорофіл. Йод є індикатором крохмалю після досліду."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dwutlenek węgla wchodzi do fotosyntezy z powietrza. Jodyna nie wchodzi do równania. Pokazuje skrobię.",
              ua: "Вуглекислий газ входить у фотосинтез із повітря. Йод не входить у рівняння. Показує крохмаль."
            }
          }
        ],
        explanation: {
          pl: "Jodyna wykrywa skrobię ciemnoniebieskim kolorem.",
          ua: "Йод виявляє крохмаль темно-синім кольором."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Po co zasłona", ua: "Перевірка 4. Навіщо затулення" },
      task: {
        id: "l10-t4",
        type: "single-choice",
        question: {
          pl: "Po co zasłania się część liścia?",
          ua: "Навіщо затуляють частину листка?"
        },
        options: [
          { id: "a", label: { pl: "żeby mieć fragment bez światła i porównać go z oświetloną częścią tej samej blaszki", ua: "щоб мати фрагмент без світла і порівняти його з освітленою частиною тієї самої пластинки" } },
          { id: "b", label: { pl: "żeby liść stał się komórką bakteryjną", ua: "щоб листок став бактеріальною клітиною" } },
          { id: "c", label: { pl: "żeby jodyna nie działała na żadnej części", ua: "щоб йод не діяв на жодній частині" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liść zostaje liściem rośliny. Zasłona tylko odcina światło na fragmencie blaszki.",
              ua: "Листок лишається листком рослини. Затулення лише відтинає світло на фрагменті пластинки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna ma działać na całym przygotowanym liściu. Zasłona zmienia dostęp światła, nie wyłącza jodyny.",
              ua: "Йод має діяти на всьому підготовленому листку. Затулення змінює доступ світла, не вимикає йод."
            }
          }
        ],
        explanation: {
          pl: "Zasłona daje kontrolę: fragment bez światła na tym samym liściu.",
          ua: "Затулення дає контроль: фрагмент без світла на тому самому листку."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wniosek", ua: "Перевірка 5. Висновок" },
      task: {
        id: "l10-t5",
        type: "single-choice",
        question: {
          pl: "Który wniosek jest poprawny?",
          ua: "Який висновок правильний?"
        },
        options: [
          { id: "a", label: { pl: "Skrobia powstaje w liściu tam, gdzie było światło. Fotosynteza wymaga światła.", ua: "Крохмаль виникає в листку там, де було світло. Фотосинтез потребує світла." } },
          { id: "b", label: { pl: "Światło przeszkadza fotosyntezie, bo zasłonięta część jest jaśniejsza.", ua: "Світло заважає фотосинтезу, бо затулена частина світліша." } },
          { id: "c", label: { pl: "Jodyna jest produktem fotosyntezy zamiast tlenu.", ua: "Йод є продуктом фотосинтезу замість кисню." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jaśniejsza część nie miała światła i nie ma skrobi. Skrobia jest po stronie światła.",
              ua: "Світліша частина не мала світла і не має крохмалю. Крохмаль є з боку світла."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jodyna nie jest produktem. Test nie pokazuje tlenu. Wniosek dotyczy skrobi i światła.",
              ua: "Йод не є продуктом. Тест не показує кисень. Висновок стосується крохмалю і світла."
            }
          }
        ],
        explanation: {
          pl: "Wniosek: skrobia powstaje tam, gdzie było światło.",
          ua: "Висновок: крохмаль виникає там, де було світло."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l10-wynik.png", {
        alt: { pl: "Wynik testu jodyną na liściu", ua: "Результат тесту йодом на листку" },
        title: { pl: "Światło daje skrobię. Jodyna tylko ją pokazuje.", ua: "Світло дає крохмаль. Йод лише його показує." },
        prompt: { pl: "To samo zdjęcie liścia po jodynie." }
      }),
      text: {
        pl: [
          "Problem: czy światło jest potrzebne do skrobi? Hipoteza: skrobia powstanie tylko w oświetlonej części.",
          "Jedna zmiana. Odkryte = próba badawcza. Zasłonięte = próba kontrolna.",
          "Jodyna barwi skrobię na ciemnoniebiesko.",
          "Kilka dni ciemności zużywa zapas. Alkohol i podgrzewanie — tylko szkoła.",
          "Wniosek: skrobia tam, gdzie było światło."
        ],
        ua: [
          "Проблема: чи світло потрібне для крохмалю? Гіпотеза: крохмаль виникне лише в освітленій частині.",
          "Одна зміна. Відкрите = дослідна проба. Затулене = контрольна проба.",
          "Йод забарвлює крохмаль у темно-синій.",
          "Кілька днів темряви витрачає запас. Спирт і нагрівання — лише школа.",
          "Висновок: крохмаль там, де було світло."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Sformułuję problem i hipotezę tego doświadczenia.", ua: "Сформулюю проблему і гіпотезу цього досліду." },
        { pl: "Wskażę próbę badawczą i kontrolną.", ua: "Вкажу дослідну і контрольну пробу." },
        { pl: "Powiem, po co jodyna.", ua: "Скажу, навіщо йод." },
        { pl: "Wyjaśnię, po co zasłania się część liścia.", ua: "Поясню, навіщо затуляють частину листка." },
        { pl: "Sformułuję wniosek: skrobia powstaje tam, gdzie było światło.", ua: "Сформулюю висновок: крохмаль виникає там, де було світло." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
