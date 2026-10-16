function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      text: {
        pl: [
          "To nie nowa lekcja. Powtarzasz dział V: różnorodność roślin, lekcje 25–34, i składasz je z podsumowaniem podręcznika.",
          "Najpierw cztery grupy. Potem kwiat, owoc, nasiono i nowa roślina bez nasiona. Na końcu sześć pytań bez podpowiedzi."
        ],
        ua: [
          "Це не новий урок. Ти повторюєш розділ V: різноманітність рослин, уроки 25–34, і складаєш їх із підсумком підручника.",
          "Спочатку чотири групи. Потім квітка, плід, насінина і нова рослина без насінини. Наприкінці шість питань без підказки."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "zarodnia", ua: "спорангій — коробочка моху зі спорами" },
        { pl: "paprotniki", ua: "папоротеві — справжні корені, стебла і листки" },
        { pl: "owocnia", ua: "оплодень — стінка, яка вкриває насіння" },
        { pl: "zapłodnienie", ua: "запліднення — з’єднання статевих клітин у зиготу" },
        { pl: "łupina nasienna", ua: "насінна шкірка — захист зародка" },
        { pl: "tkanka odżywcza", ua: "живильна тканина — пожива для молодого зародка" },
        { pl: "rozmnażanie wegetatywne", ua: "вегетативне розмноження — нова рослина з частини материнської" },
        { pl: "krzewinka", ua: "чагарничок — схожий на кущ, але менший" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Cztery grupy", ua: "Поняття. Чотири групи" },
      visual: vizGh("L34_Rozpoznajemy_grupy_roslin", "l34-zacznijmy.png", {
        alt: { pl: "Mech, paproć, szyszka i owoc obok siebie", ua: "Мох, папороть, шишка і плід поряд" },
        title: { pl: "Jedna różnica wybiera szufladkę.", ua: "Одна різниця обирає шухляду." },
        prompt: { pl: "Plansza lekcji 34: cztery grupy." }
      }),
      text: {
        pl: [
          ["", em("Mech"), " jest niewielki. Nie ma typowych tkanek i organów, tylko odpowiedniki: chwytniki, łodyżkę i listki. Latem na ulistnionej łodyżce wyrasta trzonek z ", em("zarodnią"), ". Przykład z podręcznika to płonnik."],
          ["", em("Paprotniki"), " są większe i mają prawdziwe korzenie, łodygi i liście. Paproć, na przykład nerecznica samcza, ma kupki na spodzie liścia. Skrzyp polny i widłak goździsty są w tej samej szufladce. Widłaka nie zrywamy."],
          ["Rośliny nasienne też mają prawdziwe organy. Ich cecha to kwiaty i nasiona. U nagonasiennych nasiono leży nago na łusce, liście to zwykle sztywne igły. U okrytonasiennych nasiona okrywa ", em("owocnia"), ", a liście są zwykle miękkimi blaszkami."]
        ],
        ua: [
          ["", em("Мох"), " невеликий. Немає типових тканин і органів, лише відповідники: ризоїди, стебельце і листочки. Улітку на облистненому стебельці виростає ніжка зі ", em("спорангієм"), ". Приклад із підручника — зозулин льон."],
          ["", em("Папоротеві"), " більші і мають справжні корені, стебла і листки. Папороть, наприклад чоловіча папороть, має купки на споді листка. Хвощ польовий і плаун булавовидний є в тій самій шухляді. Плаун не зриваємо."],
          ["Насінні рослини теж мають справжні органи. Їхня ознака — квітки і насіння. У голонасінних насінина лежить голою на лусці, листки — зазвичай цупка хвоя. У покритонасінних насіння вкриває ", em("оплодень"), ", а листки зазвичай є м’якими пластинками."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Sosna i czereśnia", ua: "Приклад. Сосна і черешня" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Sosna jest najczęściej drzewem. Liście to długie sztywne igły. Nasiono leży na łusce, bez owocni."],
            ua: ["Сосна найчастіше є деревом. Листки — довга цупка хвоя. Насінина лежить на лусці, без оплодня."]
          }
        },
        {
          text: {
            pl: ["Podręcznik nazywa skupienia męskie i żeńskie sosny kwiatostanami. To nie jest kwiat czereśni ze słupkiem i płatkami."],
            ua: ["Підручник називає чоловічі й жіночі скупчення сосни суцвіттями. Це не квітка черешні з маточкою і пелюстками."]
          }
        },
        {
          text: {
            pl: ["Czereśnia bywa drzewem, ale okrytonasienne są też ziołami i krzewami. Nasiona okrywa owocnia. Rozsiew idzie najczęściej przez zwierzęta."],
            ua: ["Черешня буває деревом, але покритонасінні є також травами і кущами. Насіння вкриває оплодень. Поширення йде найчастіше через тварин."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Zielona poduszka", ua: "Коротке питання. Зелена подушка" },
      task: {
        id: "r5-g1",
        type: "single-choice",
        question: {
          pl: "Roślina jest mała. Ma chwytniki i latem zarodnię na trzonku. Kolega mówi, że to paproć, bo jest zielona. Co pasuje?",
          ua: "Рослина мала. Має ризоїди і влітку спорангій на ніжці. Товариш каже, що це папороть, бо вона зелена. Що підходить?"
        },
        options: [
          { id: "a", label: { pl: "to mech: odpowiedniki organów i zarodnia; zieleń nie wybiera grupy", ua: "це мох: відповідники органів і спорангій; зелень не обирає групу" } },
          { id: "b", label: { pl: "to paproć, bo każda zieleń ma korzenie", ua: "це папороть, бо кожна зелень має корені" } },
          { id: "c", label: { pl: "to nagonasienne, bo zarodnia jest szyszką", ua: "це голонасінні, бо спорангій є шишкою" } }
        ],
        answer: "a",
        hint: {
          pl: "Chwytniki i zarodnia. Korzeni nie ma.",
          ua: "Ризоїди і спорангій. Коренів немає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zieleń nie daje korzeni. Paprotniki mają prawdziwe korzenie i liście. Wróć do chwytników i zarodni: to mech.",
              ua: "Зелень не дає коренів. Папоротеві мають справжні корені і листки. Повернися до ризоїдів і спорангія: це мох."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodnia trzyma zarodniki, nie nasiono na łusce. Szyszka jest u nagonasiennych. Tu są chwytniki, więc to mech.",
              ua: "Спорангій тримає спори, не насінину на лусці. Шишка є в голонасінних. Тут ризоїди, тож це мох."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki i zarodnia na trzonku to mech. Zieleń nie jest kluczem.",
          ua: "Ризоїди і спорангій на ніжці — це мох. Зелень не є ключем."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jedna szufladka lasu", ua: "Типова помилка. Одна шухляда лісу" },
      claim: {
        pl: "„Mech, paproć i sosna to jedna grupa, bo wszystkie są zielone w lesie.”",
        ua: "«Мох, папороть і сосна — це одна група, бо всі зелені в лісі.»"
      },
      text: {
        pl: [
          "Zieleń i las nie kasują różnicy. Mech ma zarodnię i chwytniki. Paprotniki mają prawdziwe organy i zarodniki. Sosna ma nagie nasiono na łusce.",
          "Jedna cecha wystarcza. Nie sklejasz ich samym kolorem."
        ],
        ua: [
          "Зелень і ліс не скасовують різниці. Мох має спорангій і ризоїди. Папоротеві мають справжні органи і спори. Сосна має голе насіння на лусці.",
          "Однієї ознаки досить. Ти не зліплюєш їх самим кольором."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Krzew z igłami", ua: "Сам. Кущ із хвоєю" },
      task: {
        id: "r5-p1",
        type: "single-choice",
        question: {
          pl: "Krzew ma sztywne igły. Nasiono leży na łusce, owocni nie ma. Jaką grupę zapisujesz?",
          ua: "Кущ має цупку хвою. Насінина лежить на лусці, оплодня немає. Яку групу ти записуєш?"
        },
        options: [
          { id: "a", label: { pl: "nagonasienne: nagie nasiono i igły", ua: "голонасінні: голе насіння і хвоя" } },
          { id: "b", label: { pl: "okrytonasienne, bo krzew nie może być nagonasienny", ua: "покритонасінні, бо кущ не може бути голонасінним" } },
          { id: "c", label: { pl: "mech, bo igła jest cienka jak listek", ua: "мох, бо хвоя тонка як листочок" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nagonasienne bywają krzewami i drzewami. Wróć do nasiona: leży nago na łusce, bez owocni. To ta grupa.",
              ua: "Голонасінні бувають кущами і деревами. Повернися до насінини: вона лежить голою на лусці, без оплодня. Це ця група."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech nie ma nasiona na łusce. Ma chwytniki i zarodnię. Igły i nagie nasiono wskazują nagonasienne.",
              ua: "Мох не має насінини на лусці. Має ризоїди і спорангій. Хвоя і голе насіння вказують на голонасінні."
            }
          }
        ],
        explanation: {
          pl: "Sztywne igły i nagie nasiono na łusce to nagonasienne.",
          ua: "Цупка хвоя і голе насіння на лусці — це голонасінні."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Od kwiatu do młodej rośliny", ua: "Поняття. Від квітки до молодої рослини" },
      visual: vizGh("L30_Kwiat", "l30-owoc.png", {
        alt: { pl: "Kwiat, a potem owoc z nasionami", ua: "Квітка, а потім плід із насінням" },
        title: { pl: "Sześć kroków czereśni.", ua: "Шість кроків черешні." },
        prompt: { pl: "Plansza lekcji 30: owoc." }
      }),
      text: {
        pl: [
          ["", em("Kwiat"), " to organ rozmnażania płciowego rośliny nasiennej. U okrytonasiennych zwykle są słupek, pręciki i okwiat, osadzone na dnie kwiatowym."],
          ["U czereśni kolejność z podręcznika jest taka. ", em("Kwitnienie"), ": kwiat ma pręciki i słupki. ", em("Zapylenie"), ": pyłek z pręcików jednej rośliny trafia na znamię innej. ", em("Zapłodnienie"), ": jedna komórka plemnikowa łączy się z komórką jajową w zalążku i powstaje zygota."],
          ["Potem powstaje owoc: z zalążka nasiono, ze ściany zalążni owocnia. Owoc dojrzewa. Zwierzęta go zjadają, a nasiona wychodzą z niestrawionymi resztkami. W dobrych warunkach nasiono kiełkuje."]
        ],
        ua: [
          ["", em("Квітка"), " — це орган статевого розмноження насінної рослини. У покритонасінних зазвичай є маточка, тичинки і оцвітина, посаджені на квітколожі."],
          ["У черешні порядок із підручника такий. ", em("Цвітіння"), ": квітка має тичинки і маточки. ", em("Запилення"), ": пилок із тичинок однієї рослини потрапляє на приймочку іншої. ", em("Запліднення"), ": одна чоловіча статева клітина з’єднується з яйцеклітиною в насінному зачатку і постає зигота."],
          ["Потім постає плід: із насінного зачатка насінина, зі стінки зав’язі оплодень. Плід достигає. Тварини його з’їдають, а насіння виходить із неперетравленими рештками. За добрих умов насінина проростає."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Sześć stacji czereśni", ua: "Приклад. Шість станцій черешні" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Najpierw kwiat. Potem pyłek ląduje na znamieniu. To jeszcze nie zygota."],
            ua: ["Спочатку квітка. Потім пилок сідає на приймочку. Це ще не зигота."]
          }
        },
        {
          text: {
            pl: ["Dopiero w zalążku komórka plemnikowa łączy się z komórką jajową. Powstaje zygota."],
            ua: ["Лише в насінному зачатку чоловіча статева клітина з’єднується з яйцеклітиною. Постає зигота."]
          }
        },
        {
          text: {
            pl: ["Zalążek staje się nasionem, ściana zalążni owocnią. Owoc dojrzewa, odchodzi z ptakiem, a nasiono kiełkuje."],
            ua: ["Насінний зачаток стає насіниною, стінка зав’язі — оплоднем. Плід достигає, відходить із птахом, а насінина проростає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Pyłek na znamieniu", ua: "Коротке питання. Пилок на приймочці" },
      task: {
        id: "r5-g2",
        type: "single-choice",
        question: {
          pl: "Pyłek z jednej czereśni leży na znamieniu drugiej. Kolega mówi, że zygota już jest. Który krok to naprawdę?",
          ua: "Пилок з однієї черешні лежить на приймочці другої. Товариш каже, що зигота вже є. Який це крок насправді?"
        },
        options: [
          { id: "a", label: { pl: "to zapylenie; zygota powstaje dopiero przy zapłodnieniu w zalążku", ua: "це запилення; зигота постає лише під час запліднення в насінному зачатку" } },
          { id: "b", label: { pl: "to już kiełkowanie, bo pyłek jest mokry", ua: "це вже проростання, бо пилок вологий" } },
          { id: "c", label: { pl: "to owocnia, bo znamię jest ścianą owocu", ua: "це оплодень, бо приймочка є стінкою плоду" } }
        ],
        answer: "a",
        hint: {
          pl: "Pyłek na znamieniu. Komórki jeszcze się nie połączyły.",
          ua: "Пилок на приймочці. Клітини ще не з’єдналися."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kiełkowanie jest na końcu, gdy nasiono puszcza młodą roślinę. Wróć do znamienia: pyłek dopiero na nie trafił, więc to zapylenie.",
              ua: "Проростання є наприкінці, коли насінина пускає молоду рослину. Повернися до приймочки: пилок щойно на неї потрапив, тож це запилення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owocnia powstaje ze ściany zalążni, gdy robi się owoc. Znamię przyjmuje pyłek. To krok zapylenia, nie ściana owocu.",
              ua: "Оплодень постає зі стінки зав’язі, коли робиться плід. Приймочка приймає пилок. Це крок запилення, не стінка плоду."
            }
          }
        ],
        explanation: {
          pl: "Pyłek na znamieniu to zapylenie. Zygota powstaje później, w zalążku.",
          ua: "Пилок на приймочці — це запилення. Зигота постає пізніше, в насінному зачатку."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Owoc przed kwiatem", ua: "Типова помилка. Плід перед квіткою" },
      claim: {
        pl: "„Najpierw dojrzewa owoc, a kwiat pojawia się po to, żeby go ozdobić.”",
        ua: "«Спочатку достигає плід, а квітка з’являється, щоб його прикрасити.»"
      },
      text: {
        pl: [
          "Kolejność idzie od kwiatu. Kwitnienie, zapylenie, zapłodnienie, powstawanie owocu i jego dojrzewanie, rozsiewanie, kiełkowanie.",
          "Owoc nie wyprzedza kwiatu. Dojrzewanie jest już po powstaniu owocu, zanim nasiono ruszy w drogę albo tuż przy tej drodze."
        ],
        ua: [
          "Порядок іде від квітки. Цвітіння, запилення, запліднення, утворення плоду і його достигання, поширення, проростання.",
          "Плід не випереджає квітку. Достигання є вже після утворення плоду, перш ніж насінина рушить у дорогу або просто при цій дорозі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jabłoń w sześciu krokach", ua: "Сам. Яблуня у шістьох кроках" },
      task: {
        id: "r5-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń układa jabłoń tak: kiełkowanie, potem zapłodnienie, na końcu kwiat. Co poprawić?",
          ua: "Учень укладає яблуню так: проростання, потім запліднення, наприкінці квітка. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "najpierw kwiat i zapylenie, potem zapłodnienie i owoc, kiełkowanie jest na końcu", ua: "спочатку квітка і запилення, потім запліднення і плід, проростання є наприкінці" } },
          { id: "b", label: { pl: "kiełkowanie naprawdę jest pierwsze, bo nasiono jest starsze od kwiatu", ua: "проростання справді є першим, бо насінина старша за квітку" } },
          { id: "c", label: { pl: "zapłodnienie jest przed kwitnieniem, bo zygota robi płatki", ua: "запліднення є перед цвітінням, бо зигота робить пелюстки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ta kolejność opisuje jedną czereśnię albo jabłoń od jej kwiatu. Kiełkowanie zamyka drogę nasiona. Wróć do początku: najpierw kwiat.",
              ua: "Цей порядок описує одну черешню або яблуню від її квітки. Проростання закриває дорогу насінини. Повернися до початку: спочатку квітка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zapłodnienie jest po zapyleniu, a zapylenie po kwitnieniu. Zygota nie robi płatków przed kwiatem. Ułóż od kwiatu.",
              ua: "Запліднення є після запилення, а запилення після цвітіння. Зигота не робить пелюсток перед квіткою. Уклади від квітки."
            }
          }
        ],
        explanation: {
          pl: "Od kwiatu: kwitnienie, zapylenie, zapłodnienie, owoc, rozsiew, kiełkowanie.",
          ua: "Від квітки: цвітіння, запилення, запліднення, плід, поширення, проростання."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Owoc w drogę", ua: "Поняття. Плід у дорогу" },
      visual: vizGh("L31_Rozsiewanie_nasion", "l31-zacznijmy.png", {
        alt: { pl: "Puch, skrzydełko, haczyki i ptak", ua: "Пух, крильце, гачки і птах" },
        title: { pl: "Kształt mówi, kto niesie owoc.", ua: "Форма каже, хто несе плід." },
        prompt: { pl: "Plansza lekcji 31: sposoby drogi." }
      }),
      text: {
        pl: [
          ["", em("Owoc"), " to jedno albo kilka nasion oraz owocnia. Ściana owocu nie jest nasionem."],
          ["Wiatr bierze owoce lekkie, z urządzeniami lotnymi: skrzydełko klonu, puch mniszka. Zwierzęta biorą barwę, smak i zapach, a czasem drobne haczyki. Soczysty owoc bywa zjedzony, a nasiono wychodzi dalej z odchodami."],
          ["Woda bierze owoce z tkanką, która chroni przed nasiąkaniem, i z komorami powietrza. Kokos pływa. Osobno, z lekcji 31, strąk grochu i niecierpek pękają same, bez wiatru, wody i zwierzęcia."]
        ],
        ua: [
          ["", em("Плід"), " — це одна або кілька насінин і оплодень. Стінка плоду не є насіниною."],
          ["Вітер бере плоди легкі, з пристосуваннями до польоту: крильце клена, пух кульбаби. Тварини беруть колір, смак і запах, а іноді дрібні гачки. Соковитий плід буває з’їдений, а насінина виходить далі з послідом."],
          ["Вода бере плоди з тканиною, яка захищає від промокання, і з камерами повітря. Кокос плаває. Окремо, з уроку 31, стручок гороху і недоторка лопаються самі, без вітру, води і тварини."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy pojazdy i pęknięcie", ua: "Приклад. Три перевізники і розрив" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Klon jest lekki i ma skrzydełko. To wiatr, nie haczyk."],
            ua: ["Клен легкий і має крильце. Це вітер, не гачок."]
          }
        },
        {
          text: {
            pl: ["Łopian czepia się sierści haczykami. Jarzębina smakuje ptakowi. Oba jadą ze zwierzęciem, ale inaczej."],
            ua: ["Лопух чіпляється до шерсті гачками. Горобина смакує птахові. Обидва їдуть із твариною, але інакше."]
          }
        },
        {
          text: {
            pl: ["Owoc z komorami powietrza unosi się na wodzie. Strąk grochu pęka sam i nie potrzebuje rzeki."],
            ua: ["Плід із камерами повітря тримається на воді. Стручок гороху лопається сам і не потребує річки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Komory powietrza", ua: "Коротке питання. Камери повітря" },
      task: {
        id: "r5-g3",
        type: "single-choice",
        question: {
          pl: "Owoc ma tkankę odporną na nasiąkanie i komory z powietrzem. Kolega szuka na nim haczyków. Po co ta budowa?",
          ua: "Плід має тканину, стійку до промокання, і камери з повітрям. Товариш шукає на ньому гачки. Для чого ця будова?"
        },
        options: [
          { id: "a", label: { pl: "do wody: owoc się nie przesiąka i unosi", ua: "для води: плід не промокає і тримається на поверхні" } },
          { id: "b", label: { pl: "do wiatru, bo każda komora jest skrzydełkiem klonu", ua: "для вітру, бо кожна камера є крильцем клена" } },
          { id: "c", label: { pl: "do pękania strąka, bo powietrze rozrywa groszek", ua: "для розриву стручка, бо повітря розриває горошок" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie nasiąka. W środku jest powietrze.",
          ua: "Не промокає. Усередині є повітря."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiatr bierze lekkość i urządzenia lotne, jak skrzydełko albo puch. Wróć do nasiąkania: ta budowa trzyma owoc na wodzie.",
              ua: "Вітер бере легкість і пристосування до польоту, як крильце або пух. Повернися до промокання: ця будова тримає плід на воді."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Strąk grochu pęka sam. Komory powietrza i tkanka przeciw nasiąkaniu są po to, żeby owoc płynął.",
              ua: "Стручок гороху лопається сам. Камери повітря і тканина проти промокання є для того, щоб плід плив."
            }
          }
        ],
        explanation: {
          pl: "Tkanka przeciw nasiąkaniu i komory powietrza niosą owoc wodą.",
          ua: "Тканина проти промокання і камери повітря несуть плід водою."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Haczyk dla wiatru", ua: "Типова помилка. Гачок для вітру" },
      claim: {
        pl: "„Haczyki łopianu są urządzeniem lotnym, więc niesie je wiatr.”",
        ua: "«Гачки лопуха є пристосуванням до польоту, тож їх несе вітер.»"
      },
      text: {
        pl: [
          "Haczyk czepia się sierści albo ubrania. To droga ze zwierzęciem.",
          "Do wiatru podręcznik bierze lekkość i urządzenia lotne. Do wody bierze ochronę przed nasiąkaniem i komory powietrza."
        ],
        ua: [
          "Гачок чіпляється до шерсті або одягу. Це дорога з твариною.",
          "Для вітру підручник бере легкість і пристосування до польоту. Для води бере захист від промокання і камери повітря."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Czerwony owoc i puch", ua: "Сам. Червоний плід і пух" },
      task: {
        id: "r5-p3",
        type: "single-choice",
        question: {
          pl: "Jeden owoc jest czerwony, słodki i pachnący. Drugi jest lekki i ma puch. Które zdanie jest zgodne z podręcznikiem?",
          ua: "Один плід червоний, солодкий і пахучий. Другий легкий і має пух. Яке речення згодне з підручником?"
        },
        options: [
          { id: "a", label: { pl: "czerwony jedzie ze zwierzęciem, puch z wiatrem", ua: "червоний їде з твариною, пух із вітром" } },
          { id: "b", label: { pl: "oba płyną, bo czerwień i puch to komory powietrza", ua: "обидва пливуть, бо червоний колір і пух — це камери повітря" } },
          { id: "c", label: { pl: "puch czepia się sierści, a czerwień jest skrzydełkiem", ua: "пух чіпляється до шерсті, а червоний колір є крильцем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wodę poznajesz po ochronie przed nasiąkaniem i komorach powietrza. Barwa, smak i zapach wołają zwierzę. Puch jest lekki, więc bierze go wiatr.",
              ua: "Воду ти впізнаєш по захисту від промокання і камерах повітря. Колір, смак і запах кличуть тварину. Пух легкий, тож його бере вітер."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puch nie jest haczykiem. Haczyk jest dla zwierzęcia, puch dla wiatru. Czerwień, smak i zapach też są dla zwierzęcia.",
              ua: "Пух не є гачком. Гачок є для тварини, пух для вітру. Червоний колір, смак і запах теж є для тварини."
            }
          }
        ],
        explanation: {
          pl: "Barwa, smak i zapach niosą owoc ze zwierzęciem. Lekki puch niesie wiatr.",
          ua: "Колір, смак і запах несуть плід із твариною. Легкий пух несе вітер."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nasiono i kiełkowanie", ua: "Поняття. Насінина і проростання" },
      visual: vizGh("L32_Doswiadczenie_kielkowanie", "l32-kielkowanie.png", {
        alt: { pl: "Nasiono pęka i wychodzi kiełek", ua: "Насінина тріскається і виходить проросток" },
        title: { pl: "Trzy części. Cztery warunki.", ua: "Три частини. Чотири умови." },
        prompt: { pl: "Plansza lekcji 32: kiełkowanie." }
      }),
      text: {
        pl: [
          ["", em("Nasiono"), " pozwala roślinie nasiennej przetrwać i się rozsiać. Ma trzy części. ", em("Łupina nasienna"), " chroni zarodek przed złymi warunkami. ", em("Tkanka odżywcza"), " jest pokarmem dla młodego zarodka. ", em("Zarodek"), " to zaczątek przyszłej rośliny. Zarodnik nie jest częścią nasiona."],
          ["Do kiełkowania potrzeba wody, tlenu i odpowiedniej temperatury. U niektórych roślin potrzeba też światła. Stopni i mililitrów podręcznik tu nie podaje."],
          "W doświadczeniu z lekcji 32 zmieniasz jeden czynnik. Słoika nie zakręcasz na głucho, bo nasiono oddycha. Spleśniałych nasion nie jesz. Wody ze słoika nie pijesz."
        ],
        ua: [
          ["", em("Насінина"), " дозволяє насінній рослині пережити і поширитися. Має три частини. ", em("Насінна шкірка"), " захищає зародок від поганих умов. ", em("Живильна тканина"), " є поживою для молодого зародка. ", em("Зародок"), " — це початок майбутньої рослини. Спора не є частиною насінини."],
          ["Для проростання потрібні вода, кисень і відповідна температура. У деяких рослин потрібне ще світло. Градусів і мілілітрів підручник тут не подає."],
          "У досліді з уроку 32 ти змінюєш один чинник. Банку не закручуєш наглухо, бо насінина дихає. Зацвіле насіння не їси. Воду з банки не п’єш."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy warstwy fasoli", ua: "Приклад. Три шари квасолі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Łupina jest osłoną. Nie jest pokarmem i nie jest zarodnikiem."],
            ua: ["Шкірка є покривом. Не є поживою і не є спорою."]
          }
        },
        {
          text: {
            pl: ["W środku tkanka odżywcza karmi zarodek na początku. Zarodek to przyszła roślina."],
            ua: ["Усередині живильна тканина годує зародок на початку. Зародок — це майбутня рослина."]
          }
        },
        {
          text: {
            pl: ["Sucha fasola na oknie nie dostaje wody. Światło samo jej nie zastąpi."],
            ua: ["Суха квасоля на вікні не дістає води. Світло само її не замінить."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Zarodek czy zarodnik", ua: "Коротке питання. Зародок чи спора" },
      task: {
        id: "r5-g4",
        type: "single-choice",
        question: {
          pl: "W nasionie są trzy części. Uczeń wpisuje: łupina, tkanka odżywcza i zarodnik. Co tu nie pasuje?",
          ua: "У насінині є три частини. Учень вписує: шкірка, живильна тканина і спора. Що тут не підходить?"
        },
        options: [
          { id: "a", label: { pl: "zamiast zarodnika jest zarodek, zaczątek przyszłej rośliny", ua: "замість спори є зародок, початок майбутньої рослини" } },
          { id: "b", label: { pl: "zamiast łupiny jest owocnia, bo osłona zawsze jest ścianą owocu", ua: "замість шкірки є оплодень, бо покрив завжди є стінкою плоду" } },
          { id: "c", label: { pl: "tkanka odżywcza to korzeń, więc zostaje tylko ona", ua: "живильна тканина — це корінь, тож лишається лише вона" } }
        ],
        answer: "a",
        hint: {
          pl: "Zarodnik jest u mchu i paproci. W nasionie jest zarodek.",
          ua: "Спора є в моху і папороті. У насінині є зародок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owocnia okrywa nasiono od zewnątrz owocu. Łupina jest osłoną samego nasiona. Błąd ucznia jest w trzeciej części: to zarodek, nie zarodnik.",
              ua: "Оплодень укриває насінину ззовні плоду. Шкірка є покривом самої насінини. Помилка учня є в третій частині: це зародок, не спора."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tkanka odżywcza karmi młody zarodek. Nie jest korzeniem. Wróć do listy: łupina, tkanka odżywcza i zarodek.",
              ua: "Живильна тканина годує молодий зародок. Не є коренем. Повернися до списку: шкірка, живильна тканина і зародок."
            }
          }
        ],
        explanation: {
          pl: "Trzy części to łupina nasienna, tkanka odżywcza i zarodek.",
          ua: "Три частини — це насінна шкірка, живильна тканина і зародок."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Samo światło", ua: "Типова помилка. Саме світло" },
      claim: {
        pl: "„Fasola kiełkuje, gdy stoi na słońcu. Wody i powietrza nie trzeba.”",
        ua: "«Квасоля проростає, коли стоїть на сонці. Води і повітря не треба.»"
      },
      text: {
        pl: [
          "Światło jest potrzebne tylko niektórym roślinom. Woda, tlen i odpowiednia temperatura są na liście podręcznika dla kiełkowania.",
          "W doświadczeniu i tak zmieniasz jeden czynnik naraz. Suche nasiono na oknie nie dostaje wody, więc światło samo wniosku nie robi."
        ],
        ua: [
          "Світло потрібне лише деяким рослинам. Вода, кисень і відповідна температура є в списку підручника для проростання.",
          "У досліді ти все одно змінюєш один чинник за раз. Суха насінина на вікні не дістає води, тож світло само висновку не робить."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa słoiki grochu", ua: "Сам. Дві банки гороху" },
      task: {
        id: "r5-p4",
        type: "single-choice",
        question: {
          pl: "Dwa słoiki grochu stoją tak samo ciepło. W jednym bibuła jest wilgotna, w drugim sucha. Oba są uchylone. Który wniosek pasuje, gdy kiełkuje tylko wilgotny?",
          ua: "Дві банки гороху стоять так само тепло. В одній папір вологий, у другій сухий. Обидві прочинені. Який висновок підходить, коли проростає лише вологий?"
        },
        options: [
          { id: "a", label: { pl: "do kiełkowania tego grochu potrzeba było wody", ua: "для проростання цього гороху була потрібна вода" } },
          { id: "b", label: { pl: "potrzeba było tylko światła, bo oba słoiki je miały", ua: "потрібне було лише світло, бо обидві банки його мали" } },
          { id: "c", label: { pl: "suchy groch kiełkuje zarodnikami, więc woda przeszkadza", ua: "сухий горох проростає спорами, тож вода заважає" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Światło było w obu, a różniła się woda. Wróć do jednego czynnika: kiełkował ten, który miał wilgotną bibułę.",
              ua: "Світло було в обох, а різнилася вода. Повернися до одного чинника: проріс той, який мав вологий папір."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Groch ma nasiono, nie zarodnik. Suchy słoik nie wykiełkował. Wniosek dotyczy wody, której zabrakło w próbie kontrolnej.",
              ua: "Горох має насінину, не спору. Суха банка не проросла. Висновок стосується води, якої бракувало в контрольній пробі."
            }
          }
        ],
        explanation: {
          pl: "Różniła się tylko woda. Wilgotny groch kiełkował, więc woda była potrzebna.",
          ua: "Різнилася лише вода. Вологий горох проріс, тож вода була потрібна."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nowa roślina bez nasiona", ua: "Поняття. Нова рослина без насінини" },
      visual: vizGh("L23_Lodyga", "l23-przeksztalcenia.png", {
        alt: { pl: "Bulwa ziemniaka i korzeń marchwi", ua: "Бульба картоплі і корінь моркви" },
        title: { pl: "Bulwa to pęd. Marchew to korzeń.", ua: "Бульба — це пагін. Морква — це корінь." },
        prompt: { pl: "Plansza lekcji 23: przekształcenia." }
      }),
      text: {
        pl: [
          ["", em("Rozmnażanie wegetatywne"), " jest bezpłciowe. Nowe osobniki powstają z fragmentów rośliny macierzystej, zwykle z przekształconych pędów."],
          ["Podręcznik podaje cztery. ", em("Rozłogi"), " u truskawki. ", em("Kłącza"), " u imbiru. ", em("Bulwy"), " u ziemniaka. ", em("Cebule"), " u tulipana."],
          "Ziemniak jest pędem z zapasem, tak jak na lekcji 23. Marchew jest korzeniem spichrzowym i nie stoi na tej liście. Z fragmentu nie rób przepisu na sadzenie."
        ],
        ua: [
          ["", em("Вегетативне розмноження"), " є нестатевим. Нові особини постають із фрагментів материнської рослини, зазвичай із видозмінених пагонів."],
          ["Підручник подає чотири. ", em("Вуса"), " у полуниці. ", em("Кореневища"), " в імбиру. ", em("Бульби"), " в картоплі. ", em("Цибулини"), " в тюльпана."],
          "Картопля є пагоном із запасом, як на уроці 23. Морква є запасаючим коренем і не стоїть у цьому списку. З фрагмента не роби рецепта садіння."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Cztery pędy", ua: "Приклад. Чотири пагони" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Truskawka puszcza rozłogi. Na nich wyrastają nowe rośliny, bez kwiatu i bez nasiona."],
            ua: ["Полуниця пускає вуса. На них виростають нові рослини, без квітки і без насінини."]
          }
        },
        {
          text: {
            pl: ["Imbir ma kłącze. Ziemniak ma bulwę z oczkami. Tulipan ma cebulę. To pędy."],
            ua: ["Імбир має кореневище. Картопля має бульбу з вічками. Тюльпан має цибулину. Це пагони."]
          }
        },
        {
          text: {
            pl: ["Marchew trzyma zapas w korzeniu. Nie dopisuj jej do rozłogów, kłączy, bulw i cebul."],
            ua: ["Морква тримає запас у корені. Не дописуй її до вусів, кореневищ, бульб і цибулин."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Oczko ziemniaka", ua: "Коротке питання. Вічко картоплі" },
      task: {
        id: "r5-g5",
        type: "single-choice",
        question: {
          pl: "Z oczka ziemniaka wyrasta nowa roślina. Kolega mówi, że oczko jest nasionem w owocu. Co to jest?",
          ua: "З вічка картоплі виростає нова рослина. Товариш каже, що вічко є насіниною в плоді. Що це є?"
        },
        options: [
          { id: "a", label: { pl: "bulwa to przekształcony pęd; nowe rośliny powstają wegetatywnie", ua: "бульба — це видозмінений пагін; нові рослини постають вегетативно" } },
          { id: "b", label: { pl: "oczko to zarodnik mchu, więc ziemniak jest płonnikiem", ua: "вічко — це спора моху, тож картопля є зозулиним льоном" } },
          { id: "c", label: { pl: "bulwa to naga łuska szyszki", ua: "бульба — це гола луска шишки" } }
        ],
        answer: "a",
        hint: {
          pl: "Ziemniak jest pędem. Nasiona w nim nie szukaj.",
          ua: "Картопля є пагоном. Насінини в ній не шукай."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zarodnik jest w zarodni mchu albo w kupce paproci. Oczko ziemniaka jest pąkiem na bulwie, czyli na pędzie.",
              ua: "Спора є в спорангії моху або в купці папороті. Вічко картоплі є брунькою на бульбі, тобто на пагоні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Naga łuska trzyma nasiono nagonasiennych. Bulwa ziemniaka jest pędem spichrzowym. Nowa roślina powstaje z fragmentu, nie z szyszki.",
              ua: "Гола луска тримає насінину голонасінних. Бульба картоплі є запасаючим пагоном. Нова рослина постає з фрагмента, не з шишки."
            }
          }
        ],
        explanation: {
          pl: "Bulwa ziemniaka jest przekształconym pędem. Nowa roślina powstaje wegetatywnie.",
          ua: "Бульба картоплі є видозміненим пагоном. Нова рослина постає вегетативно."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Marchew jak ziemniak", ua: "Типова помилка. Морква як картопля" },
      claim: {
        pl: "„Marchew też jest bulwą, bo jest gruba i leży w kuchni obok ziemniaka.”",
        ua: "«Морква теж є бульбою, бо вона товста і лежить на кухні біля картоплі.»"
      },
      text: {
        pl: [
          "Grubość i kuchnia nie wybierają organu. Ziemniak jest pędem. Marchew jest korzeniem spichrzowym.",
          "Lista wegetatywna z podręcznika to rozłogi, kłącza, bulwy i cebule. Marchwi na niej nie ma."
        ],
        ua: [
          "Товщина і кухня не обирають орган. Картопля є пагоном. Морква є запасаючим коренем.",
          "Вегетативний список із підручника — це вуса, кореневища, бульби і цибулини. Моркви в ньому немає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cebula tulipana", ua: "Сам. Цибулина тюльпана" },
      task: {
        id: "r5-p5",
        type: "single-choice",
        question: {
          pl: "Z cebuli tulipana wyrasta nowa roślina, bez owocu i bez szyszki. Jak to nazywa podręcznik?",
          ua: "З цибулини тюльпана виростає нова рослина, без плоду і без шишки. Як це називає підручник?"
        },
        options: [
          { id: "a", label: { pl: "rozmnażanie wegetatywne z przekształconego pędu", ua: "вегетативне розмноження з видозміненого пагона" } },
          { id: "b", label: { pl: "zapłodnienie, bo cebula jest zygotą", ua: "запліднення, бо цибулина є зиготою" } },
          { id: "c", label: { pl: "kiełkowanie zarodników paproci", ua: "проростання спор папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapłodnienie łączy komórkę plemnikową z komórką jajową w zalążku. Cebula tulipana jest pędem. Nowa roślina powstaje z fragmentu.",
              ua: "Запліднення з’єднує чоловічу статеву клітину з яйцеклітиною в насінному зачатку. Цибулина тюльпана є пагоном. Нова рослина постає з фрагмента."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodniki paproci są w kupkach na liściu. Tulipan jest rośliną nasienną, a ta droga idzie z cebuli, nie z kupki.",
              ua: "Спори папороті є в купках на листку. Тюльпан є насінною рослиною, а цей шлях іде з цибулини, не з купки."
            }
          }
        ],
        explanation: {
          pl: "Cebula tulipana jest przekształconym pędem. To rozmnażanie wegetatywne.",
          ua: "Цибулина тюльпана є видозміненим пагоном. Це вегетативне розмноження."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co te rośliny", ua: "Поняття. Для чого ці рослини" },
      visual: vizGh("L33_Drzewa_lisciaste", "l33-znaczenie.png", {
        alt: { pl: "Pokarm, tlen i drewno", ua: "Пожива, кисень і деревина" },
        title: { pl: "W lesie i dla ludzi.", ua: "У лісі і для людей." },
        prompt: { pl: "Plansza lekcji 33: znaczenie." }
      }),
      text: {
        pl: [
          ["W naturze rośliny nasienne pobierają dwutlenek węgla i wytwarzają tlen. Dają zwierzętom schronienie i pokarm, pobierają dużo wody i przez to ograniczają powodzie, tworzą siedlisko dla innych organizmów."],
          ["Dla ludzi są pokarmem, a niektóre paszą. Z nich jest drewno mebli i papier. Niektóre służą do leków i kosmetyków: bez dawek i bez przepisu. Sadzi się je na wydmach i zboczach, a ozdobne rosną w parkach."],
          ["Mchy są organizmami pionierskimi, trzymają wodę w glebie, dają schronienie i wchodzą w skład torfowisk. Dawne olbrzymie paprotniki dawały tlen i pokarm. Dziś paprotniki mają znaczenie w niektórych miejscach, na przykład w lesie. Krzew to na przykład bez czarny. Krzewinka, na przykład wrzos, jest mniejsza."]
        ],
        ua: [
          ["У природі насінні рослини поглинають вуглекислий газ і виробляють кисень. Дають тваринам прихисток і поживу, поглинають багато води і через це обмежують повені, творять середовище для інших організмів."],
          ["Для людей вони є поживою, а деякі кормом. Із них є деревина меблів і папір. Деякі служать для ліків і косметики: без доз і без рецепта. Їх садять на дюнах і схилах, а декоративні ростуть у парках."],
          ["Мохи є піонерними організмами, тримають воду в ґрунті, дають прихисток і входять до складу торфовищ. Давні велетенські папоротеві давали кисень і поживу. Сьогодні папоротеві мають значення в деяких місцях, наприклад у лісі. Кущ — це, наприклад, бузина чорна. Чагарничок, наприклад верес, є меншим."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Nazwy z listy", ua: "Приклад. Назви зі списку" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Do nagonasiennych podręcznik dopisuje sosnę zwyczajną, cisa pospolitego, jałowca pospolitego, modrzewia europejskiego i miłorząb dwuklapowy."],
            ua: ["До голонасінних підручник дописує сосну звичайну, тис ягідний, яловець звичайний, модрину європейську і гінкго дволопатеве."]
          }
        },
        {
          text: {
            pl: ["Cis jest prawie cały trujący. Nie zrywaj go i nie jedz. Jeśli już zerwano, powiedz dorosłemu. Nie szukamy, która część byłaby bezpieczna."],
            ua: ["Тис майже весь отруйний. Не зривай його і не їж. Якщо вже зірвали, скажи дорослому. Не шукаємо, яка частина була б безпечною."]
          }
        },
        {
          text: {
            pl: ["Jałowiec stoi na liście nazw. Z tej listy nie rób przekąski. Wrzos jest krzewinką, bez czarny krzewem."],
            ua: ["Яловець стоїть у списку назв. Із цього списку не роби перекусу. Верес є чагарничком, бузина чорна — кущем."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Tlen i meble", ua: "Коротке питання. Кисень і меблі" },
      task: {
        id: "r5-g6",
        type: "single-choice",
        question: {
          pl: "Kolega mówi, że rośliny nasienne są tylko po to, żeby zrobić szafę. Czego w tym zdaniu brakuje?",
          ua: "Товариш каже, що насінні рослини є лише для того, щоб зробити шафу. Чого в цьому реченні бракує?"
        },
        options: [
          { id: "a", label: { pl: "w naturze dają tlen, pokarm, schronienie i siedlisko, a drewno jest tylko jedną sprawą ludzi", ua: "у природі дають кисень, поживу, прихисток і середовище, а деревина є лише однією справою людей" } },
          { id: "b", label: { pl: "brakuje tylko torfu, bo każda sosna jest torfowiskiem", ua: "бракує лише торфу, бо кожна сосна є торфовищем" } },
          { id: "c", label: { pl: "brakuje dawki leku, bo podręcznik podaje, ile wziąć", ua: "бракує дози ліків, бо підручник подає, скільки взяти" } }
        ],
        answer: "a",
        hint: {
          pl: "Szafa jest z drewna. Las robi więcej.",
          ua: "Шафа є з деревини. Ліс робить більше."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Torfowiska dotyczą mchów, nie każdej sosny. Wróć do roślin nasiennych: tlen, pokarm, schronienie, woda i siedlisko. Drewno jest dla ludzi jedną z rzeczy.",
              ua: "Торфовища стосуються мохів, не кожної сосни. Повернися до насінних рослин: кисень, пожива, прихисток, вода і середовище. Деревина є для людей однією з речей."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Podręcznik mówi, że niektóre rośliny służą do leków i kosmetyków. Dawki nie podaje. Brak w zdaniu kolegi to rola w naturze, nie liczba.",
              ua: "Підручник каже, що деякі рослини служать для ліків і косметики. Дози не подає. Брак у реченні товариша — це роль у природі, не число."
            }
          }
        ],
        explanation: {
          pl: "Rośliny nasienne dają tlen, pokarm i schronienie. Drewno mebli jest tylko jedną sprawą ludzi.",
          ua: "Насінні рослини дають кисень, поживу і прихисток. Деревина меблів є лише однією справою людей."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Cis na przekąskę", ua: "Типова помилка. Тис на перекус" },
      claim: {
        pl: "„Cis jest na liście nagonasiennych, więc jego owoc można zjeść jak czereśnię.”",
        ua: "«Тис є в списку голонасінних, тож його плід можна з’їсти як черешню.»"
      },
      text: {
        pl: [
          "Lista nazw nie jest listą jedzenia. Cis jest prawie cały trujący. Nie zrywaj i nie jedz. Jeśli ktoś już zerwał, powiedz dorosłemu.",
          "Nie wybieramy bezpiecznej części. Jałowca też nie bierzemy z tej listy jako przekąski."
        ],
        ua: [
          "Список назв не є списком їжі. Тис майже весь отруйний. Не зривай і не їж. Якщо хтось уже зірвав, скажи дорослому.",
          "Не обираємо безпечну частину. Яловець теж не беремо з цього списку як перекус."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wrzos i bez", ua: "Сам. Верес і бузина" },
      task: {
        id: "r5-p6",
        type: "single-choice",
        question: {
          pl: "Dwie rośliny okrytonasienne. Wrzos jest niższy i przypomina maleńkie zarośla. Bez czarny jest większym krzewem. Które zdanie jest z podręcznika?",
          ua: "Дві покритонасінні рослини. Верес нижчий і нагадує крихітні зарості. Бузина чорна є більшим кущем. Яке речення є з підручника?"
        },
        options: [
          { id: "a", label: { pl: "wrzos to krzewinka, bez czarny to krzew", ua: "верес — це чагарничок, бузина чорна — це кущ" } },
          { id: "b", label: { pl: "oba są nagonasienne, bo nie są drzewami", ua: "обидва є голонасінними, бо не є деревами" } },
          { id: "c", label: { pl: "wrzos to mech, bo jest niski", ua: "верес — це мох, бо він низький" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Okrytonasienne bywają ziołami, krzewinkami, krzewami i drzewami. Brak pnia drzewa nie robi z nich sosny. Wróć do wielkości: wrzos jest mniejszy.",
              ua: "Покритонасінні бувають травами, чагарничками, кущами і деревами. Брак стовбура дерева не робить із них сосну. Повернися до розміру: верес є меншим."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Niski wzrost nie daje chwytników i zarodni. Wrzos jest krzewinką wśród okrytonasiennych. Mech poznajesz po zarodni, nie po samym wzroście.",
              ua: "Низький зріст не дає ризоїдів і спорангія. Верес є чагарничком серед покритонасінних. Мох ти впізнаєш по спорангію, не по самому зросту."
            }
          }
        ],
        explanation: {
          pl: "Krzewinka jest mniejsza od krzewu. Wrzos to krzewinka, bez czarny to krzew.",
          ua: "Чагарничок є меншим за кущ. Верес — це чагарничок, бузина чорна — це кущ."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Sześć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "Шість питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Letnia nóżka", ua: "Перевірка 1. Літня ніжка" },
      task: {
        id: "r5-t1",
        type: "single-choice",
        question: {
          pl: "Na skale rośnie mała zielona poduszka. Są chwytniki i ulistniona łodyżka, a latem trzonek z zarodnią. Korzeni nie ma. Co to jest?",
          ua: "На скелі росте мала зелена подушка. Є ризоїди і облистнене стебельце, а влітку ніжка зі спорангієм. Коренів немає. Що це є?"
        },
        options: [
          { id: "a", label: { pl: "mech; paprotniki miałyby prawdziwe korzenie i liście", ua: "мох; папоротеві мали б справжні корені і листки" } },
          { id: "b", label: { pl: "nerecznica samcza, bo zarodnia jest kupką na liściu", ua: "чоловіча папороть, бо спорангій є купкою на листку" } },
          { id: "c", label: { pl: "sosna zwyczajna, bo rośnie pierwsza na skale", ua: "сосна звичайна, бо росте першою на скелі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nerecznica jest paprocią: ma korzenie i kupki na spodzie liścia. Tu korzeni nie ma, jest zarodnia na trzonku. To mech.",
              ua: "Чоловіча папороть є папороттю: має корені і купки на споді листка. Тут коренів немає, є спорангій на ніжці. Це мох."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pionierem bywa mech, ale sosna ma igły i nasiono na łusce. Wróć do chwytników i zarodni.",
              ua: "Піонером буває мох, але сосна має хвою і насінину на лусці. Повернися до ризоїдів і спорангія."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki i zarodnia na trzonku, bez korzeni, to mech.",
          ua: "Ризоїди і спорангій на ніжці, без коренів, — це мох."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Kolejność grochu", ua: "Перевірка 2. Порядок гороху" },
      task: {
        id: "r5-t2",
        type: "single-choice",
        question: {
          pl: "Groch ma kwiat, potem pyłek na znamieniu, potem połączenie komórek w zalążku, potem strąk. Która para jest we właściwej kolejności?",
          ua: "Горох має квітку, потім пилок на приймочці, потім з’єднання клітин у насінному зачатку, потім стручок. Яка пара є в правильному порядку?"
        },
        options: [
          { id: "a", label: { pl: "najpierw zapylenie, potem zapłodnienie", ua: "спочатку запилення, потім запліднення" } },
          { id: "b", label: { pl: "najpierw owocnia, potem kwitnienie", ua: "спочатку оплодень, потім цвітіння" } },
          { id: "c", label: { pl: "najpierw kiełkowanie strąka, potem pyłek", ua: "спочатку проростання стручка, потім пилок" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owocnia powstaje ze ściany zalążni, gdy jest już owoc. Kwiat jest wcześniej. Wróć do pary pyłek i komórki: najpierw zapylenie.",
              ua: "Оплодень постає зі стінки зав’язі, коли плід уже є. Квітка є раніше. Повернися до пари пилок і клітини: спочатку запилення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kiełkowanie jest na końcu drogi nasiona. Strąk jest owocem po zapłodnieniu. Pyłek na znamieniu jest przed połączeniem komórek.",
              ua: "Проростання є наприкінці дороги насінини. Стручок є плодом після запліднення. Пилок на приймочці є перед з’єднанням клітин."
            }
          }
        ],
        explanation: {
          pl: "Pyłek na znamieniu to zapylenie. Połączenie komórek w zalążku to zapłodnienie i jest później.",
          ua: "Пилок на приймочці — це запилення. З’єднання клітин у насінному зачатку — це запліднення і є пізніше."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Owoc na rzece", ua: "Перевірка 3. Плід на річці" },
      task: {
        id: "r5-t3",
        type: "single-choice",
        question: {
          pl: "Owoc nie ma haczyków ani puchu. Ma komory powietrza i nie nasiąka. Jaką drogę zapisujesz?",
          ua: "Плід не має гачків і пуху. Має камери повітря і не промокає. Який шлях ти записуєш?"
        },
        options: [
          { id: "a", label: { pl: "wodę", ua: "воду" } },
          { id: "b", label: { pl: "wiatr, bo brak haczyków zawsze znaczy skrzydełko", ua: "вітер, бо брак гачків завжди означає крильце" } },
          { id: "c", label: { pl: "pękanie, bo powietrze rozrywa owocnię jak strąk", ua: "розрив, бо повітря розриває оплодень як стручок" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiatr potrzebuje lekkości i urządzenia lotnego. Tu są komory powietrza i ochrona przed nasiąkaniem. To woda.",
              ua: "Вітер потребує легкості і пристосування до польоту. Тут є камери повітря і захист від промокання. Це вода."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Strąk pęka sam i nie potrzebuje komór do pływania. Komory powietrza trzymają owoc na wodzie.",
              ua: "Стручок лопається сам і не потребує камер для плавання. Камери повітря тримають плід на воді."
            }
          }
        ],
        explanation: {
          pl: "Komory powietrza i tkanka odporna na nasiąkanie niosą owoc wodą.",
          ua: "Камери повітря і тканина, стійка до промокання, несуть плід водою."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Trzy części", ua: "Перевірка 4. Три частини" },
      task: {
        id: "r5-t4",
        type: "single-choice",
        question: {
          pl: "Co robi każda część nasiona: łupina, tkanka odżywcza, zarodek?",
          ua: "Що робить кожна частина насінини: шкірка, живильна тканина, зародок?"
        },
        options: [
          { id: "a", label: { pl: "łupina chroni, tkanka karmi, zarodek jest zaczątkiem rośliny", ua: "шкірка захищає, тканина годує, зародок є початком рослини" } },
          { id: "b", label: { pl: "łupina jest pokarmem, zarodek jest zarodnikiem, tkanka jest owocnią", ua: "шкірка є поживою, зародок є спорою, тканина є оплоднем" } },
          { id: "c", label: { pl: "wszystkie trzy są tym samym: nasiono to jedna komórka pyłku", ua: "усі три є тим самим: насінина — це одна клітина пилку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Łupina chroni zarodek, nie karmi go. Zarodnik nie jest częścią nasiona. Owocnia jest ścianą owocu, na zewnątrz nasiona. Wróć do trzech ról.",
              ua: "Шкірка захищає зародок, не годує його. Спора не є частиною насінини. Оплодень є стінкою плоду, зовні насінини. Повернися до трьох ролей."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pyłek niesie zapylenie. Nasiono ma trzy części o różnych rolach: osłonę, pokarm i zaczątek rośliny.",
              ua: "Пилок несе запилення. Насінина має три частини з різними ролями: покрив, поживу і початок рослини."
            }
          }
        ],
        explanation: {
          pl: "Łupina chroni, tkanka odżywcza karmi, zarodek jest zaczątkiem rośliny.",
          ua: "Шкірка захищає, живильна тканина годує, зародок є початком рослини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Imbir", ua: "Перевірка 5. Імбир" },
      task: {
        id: "r5-t5",
        type: "single-choice",
        question: {
          pl: "Nowa roślina imbiru wyrasta z kłącza, bez kwiatu i bez nasiona. Jak nazywa się ta droga?",
          ua: "Нова рослина імбиру виростає з кореневища, без квітки і без насінини. Як називається цей шлях?"
        },
        options: [
          { id: "a", label: { pl: "rozmnażanie wegetatywne", ua: "вегетативне розмноження" } },
          { id: "b", label: { pl: "zapylenie, bo kłącze przenosi pyłek", ua: "запилення, бо кореневище переносить пилок" } },
          { id: "c", label: { pl: "kiełkowanie zarodni mchu", ua: "проростання спорангія моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapylenie przenosi pyłek na znamię. Kłącze imbiru jest przekształconym pędem. Nowa roślina powstaje z fragmentu.",
              ua: "Запилення переносить пилок на приймочку. Кореневище імбиру є видозміненим пагоном. Нова рослина постає з фрагмента."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodnia mchu robi zarodniki. Imbir nie jest mchem. Jego kłącze daje nowe rośliny wegetatywnie.",
              ua: "Спорангій моху робить спори. Імбир не є мохом. Його кореневище дає нові рослини вегетативно."
            }
          }
        ],
        explanation: {
          pl: "Kłącze imbiru daje nowe rośliny bez nasiona. To rozmnażanie wegetatywne.",
          ua: "Кореневище імбиру дає нові рослини без насінини. Це вегетативне розмноження."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. Cis i tlen", ua: "Перевірка 6. Тис і кисень" },
      task: {
        id: "r5-t6",
        type: "single-choice",
        question: {
          pl: "Na liście nagonasiennych jest cis pospolity. Obok ktoś kładzie miseczkę „do zjedzenia” i mówi, że tlen robią tylko meble. Co zostawiasz?",
          ua: "У списку голонасінних є тис ягідний. Поруч хтось кладе мисочку «до їжі» і каже, що кисень роблять лише меблі. Що ти залишаєш?"
        },
        options: [
          { id: "a", label: { pl: "cisa nie jem i nie zrywam; tlen robią rośliny, a drewno mebli jest osobną sprawą ludzi", ua: "тис не їм і не зриваю; кисень роблять рослини, а деревина меблів є окремою справою людей" } },
          { id: "b", label: { pl: "jem cisa, bo nazwa na liście znaczy, że jest przekąską", ua: "їм тис, бо назва в списку означає, що це перекус" } },
          { id: "c", label: { pl: "tlen powstaje dopiero w szafie, więc lasu nie trzeba", ua: "кисень постає лише в шафі, тож лісу не треба" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lista nazw nie jest jadłospisem. Cis jest prawie cały trujący. Nie zrywaj i nie jedz. Jeśli już zerwano, powiedz dorosłemu.",
              ua: "Список назв не є меню. Тис майже весь отруйний. Не зривай і не їж. Якщо вже зірвали, скажи дорослому."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tlen powstaje w roślinach, gdy pobierają dwutlenek węgla. Meble są już z drewna. Las nie czeka na szafę.",
              ua: "Кисень постає в рослинах, коли вони поглинають вуглекислий газ. Меблі вже є з деревини. Ліс не чекає на шафу."
            }
          }
        ],
        explanation: {
          pl: "Cisa nie jesz. Tlen robią rośliny. Drewno mebli jest tylko jedną rzeczą dla ludzi.",
          ua: "Тис не їси. Кисень роблять рослини. Деревина меблів є лише однією річчю для людей."
        }
      }
    },

    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L34_Rozpoznajemy_grupy_roslin", "l34-porownanie.png", {
        alt: { pl: "Mech obok paproci oraz szyszka obok owocu", ua: "Мох поряд із папороттю та шишка поряд із плодом" },
        title: { pl: "Cztery grupy i droga nasiona.", ua: "Чотири групи і дорога насінини." },
        prompt: { pl: "Plansza lekcji 34: porównanie." }
      }),
      text: {
        pl: [
          "Mech: chwytniki i zarodnia. Paprotniki: prawdziwe organy i zarodniki. Nerecznica, skrzyp polny i widłak są w jednej szufladce.",
          "Nagonasienne: nagie nasiono, zwykle igły. Okrytonasienne: kwiat i owocnia, zwykle miękka blaszka.",
          "Czereśnia: kwiat, zapylenie, zapłodnienie, owoc i jego dojrzewanie, rozsiew, kiełkowanie. Zygota powstaje w zalążku.",
          "Owoc to nasiona i owocnia. Wiatr, zwierzęta, woda albo własne pęknięcie. Nasiono: łupina, tkanka odżywcza, zarodek.",
          "Wegetatywnie: rozłogi, kłącza, bulwy, cebule. W naturze tlen i schronienie. Dla ludzi pokarm i drewno, bez dawek. Cisa nie jesz."
        ],
        ua: [
          "Мох: ризоїди і спорангій. Папоротеві: справжні органи і спори. Чоловіча папороть, хвощ польовий і плаун є в одній шухляді.",
          "Голонасінні: голе насіння, зазвичай хвоя. Покритонасінні: квітка і оплодень, зазвичай м’яка пластинка.",
          "Черешня: квітка, запилення, запліднення, плід і його достигання, поширення, проростання. Зигота постає в насінному зачатку.",
          "Плід — це насіння і оплодень. Вітер, тварини, вода або власний розрив. Насінина: шкірка, живильна тканина, зародок.",
          "Вегетативно: вуса, кореневища, бульби, цибулини. У природі кисень і прихисток. Для людей пожива і деревина, без доз. Тис не їси."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Odróżniam mech, paprotniki, nagonasienne i okrytonasienne jedną różnicą.", ua: "Відрізняю мох, папоротевих, голонасінні і покритонасінні однією різницею." },
        { pl: "Układam czereśnię od kwiatu do kiełkowania.", ua: "Укладаю черешню від квітки до проростання." },
        { pl: "Po budowie owocu mówię, czy niesie go wiatr, zwierzę czy woda.", ua: "За будовою плоду кажу, чи несе його вітер, тварина чи вода." },
        { pl: "Nazywam trzy części nasiona i warunki kiełkowania.", ua: "Називаю три частини насінини і умови проростання." },
        { pl: "Poznaję rozłogi, kłącza, bulwy i cebule jako pędy.", ua: "Впізнаю вуса, кореневища, бульби і цибулини як пагони." },
        { pl: "Mówię, po co są rośliny, i nie biorę cisa do jedzenia.", ua: "Кажу, для чого є рослини, і не беру тис до їжі." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
