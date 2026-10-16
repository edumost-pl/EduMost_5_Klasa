function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L34_Rozpoznajemy_grupy_roslin/images/";

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
      heading: { pl: "Misja: cztery szufladki", ua: "Місія: чотири шухляди" },
      visual: vizGh("l34-zacznijmy.png", {
        alt: { pl: "Cztery kadry: mech, paproć, szyszka, owoc", ua: "Чотири кадри: мох, папороть, шишка, плід" },
        title: { pl: "Cztery grupy. Dziś cecha, nie nowy gatunek.", ua: "Чотири групи. Сьогодні ознака, не новий вид." },
        prompt: { pl: "Plansza lekcji 34: cztery grupy." }
      }),
      text: {
        pl: [
          "To lekcja 34. Lekcje 25–33 dały cztery grupy roślin. Dziś dostajesz nieznaną roślinę i wkładasz ją do właściwej szufladki.",
          "Sosna obok świerka została na lekcji 28. Dąb obok buka został na lekcji 33. Szukasz cechy grupy.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 34. Уроки 25–33 дали чотири групи рослин. Сьогодні дістаєш невідому рослину і кладеш її у правильну шухляду.",
          "Сосна поруч із ялиною лишилася на уроці 28. Дуб поруч із буком лишився на уроці 33. Шукаєш ознаку групи.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "mech", ua: "мох — ризоїди, облистнене стебельце і спорангій" },
        { pl: "paprotniki", ua: "папоротеві — справжні корені, стебла і листки" },
        { pl: "nagonasienne", ua: "голонасінні — голе насіння на лусці, часто хвоя" },
        { pl: "okrytonasienne", ua: "покритонасінні — квітка і насіння під оплоднем" },
        { pl: "zarodnia", ua: "спорангій — коробочка моху зі спорами" },
        { pl: "owocnia", ua: "оплодень — стінка, яка вкриває насіння" },
        { pl: "igły", ua: "хвоя — довгі цупкі листки голонасінних" },
        { pl: "blaszka", ua: "пластинка — м’який плоский листок покритонасінних" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Mech", ua: "Поняття. Мох" },
      visual: vizGh("l34-mech.png", {
        alt: { pl: "Mech z chwytnikami i puszką na trzonku", ua: "Мох із ризоїдами і коробочкою на ніжці" },
        title: { pl: "Odpowiedniki organów. Zarodnia na trzonku.", ua: "Відповідники органів. Спорангій на ніжці." },
        prompt: { pl: "Plansza lekcji 34: mech." }
      }),
      text: {
        pl: [
          ["", em("Mech"), " jest niewielki. Nie ma typowych tkanek i organów, tylko odpowiedniki: ", em("chwytniki"), ", łodyżkę i listki. Chwytniki to nie korzeń z lekcji 22."],
          ["Latem na ulistnionej łodyżce wyrasta trzonek. Na nim ", em("puszka"), ", czyli ", em("zarodnia"), ", a w niej ", em("zarodniki"), ". To nie nasiona."],
          "Przykład z podręcznika to płonnik. Korzenie i duży liść z kupkami należą już do paprotników."
        ],
        ua: [
          ["", em("Мох"), " невеликий. Немає типових тканин і органів, лише відповідники: ", em("ризоїди"), ", стебельце і листочки. Ризоїди — це не корінь з уроку 22."],
          ["Улітку на облистненому стебельці виростає ніжка. На ній ", em("коробочка"), ", тобто ", em("спорангій"), ", а в ній ", em("спори"), ". Це не насіння."],
          "Приклад із підручника — зозулин льон. Корені і великий листок із купками належать уже папоротевим."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Poduszka przy ziemi", ua: "Приклад. Подушка біля землі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["U dołu są chwytniki. Łodyżka jest cienka, listki drobne."],
            ua: ["Знизу є ризоїди. Стебельце тонке, листочки дрібні."]
          }
        },
        {
          text: {
            pl: ["Na trzonku stoi puszka, czyli zarodnia. W niej są zarodniki, nie nasiona."],
            ua: ["На ніжці стоїть коробочка, тобто спорангій. У ній спори, не насіння."]
          }
        },
        {
          text: {
            pl: ["Duży liść z kupkami na spodzie to już paproć."],
            ua: ["Великий листок із купками на споді — це вже папороть."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Puszka", ua: "Коротке питання. Коробочка" },
      task: {
        id: "l34-g1",
        type: "single-choice",
        question: {
          pl: "Roślina ma chwytniki i puszkę z zarodnikami. Jaka to grupa?",
          ua: "Рослина має ризоїди і коробочку зі спорами. Яка це група?"
        },
        options: [
          { id: "a", label: { pl: "mech", ua: "мох" } },
          { id: "b", label: { pl: "paproć", ua: "папороть" } },
          { id: "c", label: { pl: "okrytonasienne, bo jest zielona", ua: "покритонасінні, бо зелена" } }
        ],
        answer: "a",
        hint: {
          pl: "Chwytniki i puszka. W puszce zarodniki.",
          ua: "Ризоїди і коробочка. У коробочці спори."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Paproć ma korzenie i kupki na spodzie liścia. Wróć do mchu: chwytniki i puszka z zarodnikami.",
              ua: "Папороть має корені і купки на споді листка. Повернися до моху: ризоїди і коробочка зі спорами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zieleń nie jest cechą grupy. Okrytonasienne mają kwiat i nasiona w owocu. Tu są chwytniki i puszka, więc to mech.",
              ua: "Зелень не є ознакою групи. Покритонасінні мають квітку і насіння в плоді. Тут ризоїди і коробочка, тож це мох."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki i puszka z zarodnikami to mech.",
          ua: "Ризоїди і коробочка зі спорами — це мох."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zieleń w lesie", ua: "Типова помилка. Зелень у лісі" },
      claim: {
        pl: "„Zielona poduszka to paproć, bo rośnie w wilgotnym lesie.”",
        ua: "«Зелена подушка — це папороть, бо росте у вологому лісі.»"
      },
      text: {
        pl: [
          "Las i wilgoć nie nazywają grupy.",
          "Mech poznasz po chwytnikach i puszce z zarodnikami. Paproć ma korzenie i kupki na liściu."
        ],
        ua: [
          "Ліс і волога не називають групи.",
          "Мох упізнаєш по ризоїдах і коробочці зі спорами. Папороть має корені і купки на листку."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Nieznana poduszka", ua: "Сам. Невідома подушка" },
      task: {
        id: "l34-p1",
        type: "single-choice",
        question: {
          pl: "W wilgotnym miejscu rośnie niska roślina: chwytniki, listki i puszka na trzonku. Uczeń mówi, że to dąb, bo jest zielona. Co poprawić?",
          ua: "У вологому місці росте низька рослина: ризоїди, листочки і коробочка на ніжці. Учень каже, що це дуб, бо вона зелена. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "chwytniki i puszka to mech; dąb ma kwiat i owoc, a zieleń nie jest kluczem", ua: "ризоїди і коробочка — це мох; дуб має квітку і плід, а зелень не є ключем" } },
          { id: "b", label: { pl: "tak — każda zieleń w lesie jest dębem", ua: "так — кожна зелень у лісі є дубом" } },
          { id: "c", label: { pl: "tak — puszka na trzonku jest szyszką sosny", ua: "так — коробочка на ніжці є шишкою сосни" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zieleń mają tu wszystkie cztery grupy. Wróć do cechy: chwytniki i puszka z zarodnikami to mech. Dąb ma żołądź, a to lekcja 33.",
              ua: "Зелень мають тут усі чотири групи. Повернися до ознаки: ризоїди і коробочка зі спорами — це мох. Дуб має жолудь, а це урок 33."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka trzyma nasiono na łusce. To nagonasienne. Puszka na trzonku wypuszcza zarodniki. Razem z chwytnikami to mech.",
              ua: "Шишка тримає насінину на лусці. Це голонасінні. Коробочка на ніжці випускає спори. Разом із ризоїдами це мох."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki i puszka to mech. Zieleń nie wybiera grupy.",
          ua: "Ризоїди і коробочка — це мох. Зелень не вибирає групи."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Paproć", ua: "Поняття. Папороть" },
      visual: vizGh("l34-paproc.png", {
        alt: { pl: "Liść paproci z kupkami na spodzie", ua: "Листок папороті з купками на споді" },
        title: { pl: "Właściwe organy. Trzy twarze paprotników.", ua: "Справжні органи. Три обличчя папоротевих." },
        prompt: { pl: "Plansza lekcji 34: paproć." }
      }),
      text: {
        pl: [
          ["", em("Paprotniki"), " są większe od mchów. Mają właściwe tkanki i organy: ", em("korzenie"), ", łodygi i liście. Na spodzie liścia paproci są ", em("kupki zarodni"), " z zarodnikami, nie z nasionami."],
          "Odwróć liść. Regularne kupki to paproć, na przykład nerecznica samcza. Puszka na trzonku to mech.",
          "Skrzyp polny i widłak goździsty są w tej samej szufladce. Dziś nie rozbieramy ich na osobny klucz i nie zrywamy."
        ],
        ua: [
          ["", em("Папоротеві"), " більші за мохи. Мають справжні тканини й органи: ", em("корені"), ", стебла і листки. На споді листка папороті є ", em("купки спорангіїв"), " зі спорами, не з насінням."],
          "Переверни листок. Регулярні купки — це папороть, наприклад чоловіча папороть. Коробочка на ніжці — це мох.",
          "Хвощ польовий і плаун булавовидний є в тій самій шухляді. Сьогодні не розбираємо їх на окремий ключ і не зриваємо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Spód liścia", ua: "Приклад. Спід листка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Roślina ma korzenie i duży liść. To już nie mech."],
            ua: ["Рослина має корені і великий листок. Це вже не мох."]
          }
        },
        {
          text: {
            pl: ["Na spodzie liścia leżą regularne kupki. W nich są zarodniki."],
            ua: ["На споді листка лежать регулярні купки. У них спори."]
          }
        },
        {
          text: {
            pl: ["Skrzyp polny i widłak goździsty nie dostają dziś piątej grupy. Zostają przy paprotnikach."],
            ua: ["Хвощ польовий і плаун булавовидний не дістають сьогодні п’ятої групи. Лишаються при папоротевих."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kupki", ua: "Коротке питання. Купки" },
      task: {
        id: "l34-g2",
        type: "single-choice",
        question: {
          pl: "Korzenie i kupki zarodni na spodzie liścia to cecha:",
          ua: "Корені і купки спорангіїв на споді листка — ознака:"
        },
        options: [
          { id: "a", label: { pl: "paproci", ua: "папороті" } },
          { id: "b", label: { pl: "mchu z puszką", ua: "моху з коробочкою" } },
          { id: "c", label: { pl: "rośliny z nasionami w owocu", ua: "рослини з насінням у плоді" } }
        ],
        answer: "a",
        hint: {
          pl: "Odwróć liść. Regularne kupki i korzenie.",
          ua: "Переверни листок. Регулярні купки і корені."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech ma chwytniki i puszkę na trzonku. Wróć do paproci: korzenie i kupki zarodni na spodzie liścia.",
              ua: "Мох має ризоїди і коробочку на ніжці. Повернися до папороті: корені і купки спорангіїв на споді листка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nasiona w owocu to okrytonasienne. Kupki na liściu dają zarodniki. Razem z korzeniami to paproć.",
              ua: "Насіння в плоді — це покритонасінні. Купки на листку дають спори. Разом із коренями це папороть."
            }
          }
        ],
        explanation: {
          pl: "Korzenie i kupki na spodzie liścia to paproć.",
          ua: "Корені і купки на споді листка — це папороть."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kupki to nasiona", ua: "Типова помилка. Купки — це насіння" },
      claim: {
        pl: "„Brązowe kupki na liściu to nasiona, więc paproć jest drzewem owocowym.”",
        ua: "«Брунатні купки на листку — це насіння, тож папороть є плодовим деревом.»"
      },
      text: {
        pl: [
          "W kupkach są zarodniki, nie nasiona.",
          "Paproć ma korzenie i te kupki na spodzie liścia. Nasiona w owocu to inna szufladka."
        ],
        ua: [
          "У купках спори, не насіння.",
          "Папороть має корені і ці купки на споді листка. Насіння в плоді — це інша шухляда."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Odwrócony liść", ua: "Сам. Перевернутий листок" },
      task: {
        id: "l34-p2",
        type: "single-choice",
        question: {
          pl: "Duży liść ma na spodzie regularne kupki, a roślina ma korzenie. Uczeń mówi, że to mech, bo miejsce jest wilgotne. Co poprawić?",
          ua: "Великий листок має на споді регулярні купки, а рослина має корені. Учень каже, що це мох, бо місце вологе. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "korzenie i kupki to paproć; mech ma chwytniki i puszkę", ua: "корені і купки — це папороть; мох має ризоїди і коробочку" } },
          { id: "b", label: { pl: "tak — wilgoć zamienia każdy liść w mech", ua: "так — волога перетворює кожен листок на мох" } },
          { id: "c", label: { pl: "tak — kupki to łuski szyszki", ua: "так — купки це луски шишки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wilgoć nie wybiera grupy. Wróć do liścia: korzenie i regularne kupki zarodni to paproć. Mech ma chwytniki i puszkę.",
              ua: "Волога не вибирає групи. Повернися до листка: корені і регулярні купки спорангіїв — це папороть. Мох має ризоїди і коробочку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Łuska szyszki trzyma nasiono. Kupki leżą na spodzie liścia i mają zarodniki. To paproć.",
              ua: "Луска шишки тримає насінину. Купки лежать на споді листка і мають спори. Це папороть."
            }
          }
        ],
        explanation: {
          pl: "Korzenie i kupki na spodzie liścia to paproć.",
          ua: "Корені і купки на споді листка — це папороть."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nagonasienne", ua: "Поняття. Голонасінні" },
      visual: vizGh("l34-nagonasienne.png", {
        alt: { pl: "Szyszka z nasionem na łusce", ua: "Шишка з насіниною на лусці" },
        title: { pl: "Nagie nasiono. Igły, nie miękka blaszka.", ua: "Голе насіння. Хвоя, не м’яка пластинка." },
        prompt: { pl: "Plansza lekcji 34: nagonasienne." }
      }),
      text: {
        pl: [
          ["", em("Nagonasienne"), " mają ", em("nasiona"), " na łusce ", em("szyszki"), ". Nasiono jest nagie: nie okrywa go owocnia."],
          ["Podręcznik nazywa skupienia męskie i żeńskie sosny ", em("kwiatostanami"), ". Na gałęzi widzisz szyszkę. To nie jest kwiat czereśni ze słupkiem i płatkami."],
          "Liście to zwykle długie sztywne igły. Rośliny są najczęściej drzewami albo krzewami. Rozsiew idzie najczęściej z wiatrem. Sosna czy świerk zostają na lekcji 28."
        ],
        ua: [
          ["", em("Голонасінні"), " мають ", em("насіння"), " на лусці ", em("шишки"), ". Насінина гола: її не вкриває оплодень."],
          ["Підручник називає чоловічі й жіночі скупчення сосни ", em("суцвіттями"), ". На гілці ти бачиш шишку. Це не квітка черешні з маточкою і пелюстками."],
          "Листки — зазвичай довга цупка хвоя. Рослини найчастіше є деревами або кущами. Поширення йде найчастіше з вітром. Сосна чи ялина лишаються на уроці 28."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Otwarta łuska", ua: "Приклад. Відкрита луска" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na łusce leży nasiono. Nic go nie okrywa owocem. To nagonasienne."],
            ua: ["На лусці лежить насінина. Ніщо не вкриває її плодом. Це голонасінні."]
          }
        },
        {
          text: {
            pl: ["Skupienie na sośnie podręcznik nazywa kwiatostanem. Nasiono i tak leży nago na łusce, bez owocni czereśni."],
            ua: ["Скупчення на сосні підручник називає суцвіттям. Насінина все одно лежить голою на лусці, без оплодня черешні."]
          }
        },
        {
          text: {
            pl: ["Która to sosna, a który świerk, zostawiasz na lekcji 28."],
            ua: ["Яка це сосна, а яка ялина, лишаєш на уроці 28."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Nasiono na łusce", ua: "Коротке питання. Насінина на лусці" },
      task: {
        id: "l34-g3",
        type: "single-choice",
        question: {
          pl: "Nasiona leżą na łusce szyszki, owocu nie ma. Jaka to grupa?",
          ua: "Насіння лежить на лусці шишки, плоду немає. Яка це група?"
        },
        options: [
          { id: "a", label: { pl: "nagonasienne", ua: "голонасінні" } },
          { id: "b", label: { pl: "okrytonasienne, bo szyszka jest kwiatem", ua: "покритонасінні, бо шишка є квіткою" } },
          { id: "c", label: { pl: "mchy, bo nasiono jest małe jak zarodnik", ua: "мохи, бо насінина мала як спора" } }
        ],
        answer: "a",
        hint: {
          pl: "Nasiono na łusce. Owocu nie ma.",
          ua: "Насінина на лусці. Плоду немає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skupienie sosny nie jest kwiatem czereśni. Okrytonasienne chowają nasiona pod owocnią. Wróć do łuski: nasiono leży na niej nagie.",
              ua: "Скупчення сосни не є квіткою черешні. Покритонасінні ховають насіння під оплоднем. Повернися до луски: насінина лежить на ній голою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mały rozmiar nie zamienia nasiona w zarodnik. Mech ma puszkę i chwytniki. Nasiono na łusce szyszki to nagonasienne.",
              ua: "Малий розмір не перетворює насінину на спору. Мох має коробочку і ризоїди. Насінина на лусці шишки — це голонасінні."
            }
          }
        ],
        explanation: {
          pl: "Nasiono na łusce szyszki to nagonasienne.",
          ua: "Насінина на лусці шишки — це голонасінні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szyszka to kwiat", ua: "Типова помилка. Шишка — це квітка" },
      claim: {
        pl: "„Szyszka to kwiat, bo wisi na drzewie.”",
        ua: "«Шишка — це квітка, бо висить на дереві.»"
      },
      text: {
        pl: [
          "Wiszenie nie robi z szyszki kwiatu czereśni. Podręcznik nazywa skupienia sosny kwiatostanami, a nasiono i tak leży nago na łusce.",
          "Owocnię i miękką blaszkę mają okrytonasienne. Nagie nasiono na łusce to nagonasienne."
        ],
        ua: [
          "Те, що шишка висить, не робить із неї квітки черешні. Підручник називає скупчення сосни суцвіттями, а насінина все одно лежить голою на лусці.",
          "Оплодень і м’яку пластинку мають покритонасінні. Голе насіння на лусці — це голонасінні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Drzewo z igłami", ua: "Сам. Дерево з хвоєю" },
      task: {
        id: "l34-p3",
        type: "single-choice",
        question: {
          pl: "Drzewo ma igły i szyszkę. Na łusce widać nasiono, owocu nie ma. Uczeń mówi, że to jabłoń, bo jest drzewem. Co poprawić?",
          ua: "Дерево має хвою і шишку. На лусці видно насінину, плоду немає. Учень каже, що це яблуня, бо це дерево. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "nasiono na łusce szyszki to nagonasienne; jabłoń ma kwiat i owoc", ua: "насінина на лусці шишки — це голонасінні; яблуня має квітку і плід" } },
          { id: "b", label: { pl: "tak — każde drzewo jest jabłonią", ua: "так — кожне дерево є яблунею" } },
          { id: "c", label: { pl: "tak — igły to listki mchu, a szyszka to puszka", ua: "так — хвоя це листочки моху, а шишка це коробочка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Słowo «drzewo» nie wybiera grupy. Wróć do nasiona: leży na łusce szyszki, więc to nagonasienne. Jabłoń chowa nasiona w owocu.",
              ua: "Слово «дерево» не вибирає групи. Повернися до насінини: вона лежить на лусці шишки, тож це голонасінні. Яблуня ховає насіння в плоді."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech ma chwytniki i puszkę z zarodnikami. Igły i szyszka z nasionem na łusce to nagonasienne. Sosna czy świerk zostają na lekcji 28.",
              ua: "Мох має ризоїди і коробочку зі спорами. Хвоя і шишка з насіниною на лусці — це голонасінні. Сосна чи ялина лишаються на уроці 28."
            }
          }
        ],
        explanation: {
          pl: "Nasiono na łusce szyszki to nagonasienne. Jabłoń ma owoc.",
          ua: "Насінина на лусці шишки — це голонасінні. Яблуня має плід."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Okrytonasienne", ua: "Поняття. Покритонасінні" },
      visual: vizGh("l34-okrytonasienne.png", {
        alt: { pl: "Kwiat i owoc z nasionami w środku", ua: "Квітка і плід із насінням усередині" },
        title: { pl: "Kwiat. Nasiona pod owocnią.", ua: "Квітка. Насіння під оплоднем." },
        prompt: { pl: "Plansza lekcji 34: okrytonasienne." }
      }),
      text: {
        pl: [
          ["", em("Okrytonasienne"), " mają ", em("kwiat"), ". Nasiona okrywa ściana owocu, czyli ", em("owocnia"), ". Tak było na lekcji 29."],
          "Liście zwykle są miękkimi płaskimi blaszkami. Roślina bywa zielna, krzewem albo drzewem. Kwiat najczęściej jest obupłciowy.",
          "Dąb, klon, trawa i groszek są w tej samej szufladce. Rozsiew idzie najczęściej przez zwierzęta, rzadziej przez wiatr lub wodę. Części kwiatu zostały na lekcji 30."
        ],
        ua: [
          ["", em("Покритонасінні"), " мають ", em("квітку"), ". Насіння вкриває стінка плоду, тобто ", em("оплодень"), ". Так було на уроці 29."],
          "Листки зазвичай є м’якими плоскими пластинками. Рослина буває трав’яною, кущем або деревом. Квітка найчастіше двостатева.",
          "Дуб, клен, трава і горошок є в тій самій шухляді. Поширення йде найчастіше через тварин, рідше через вітер або воду. Частини квітки лишилися на уроці 30."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kwiat i środek owocu", ua: "Приклад. Квітка і середина плоду" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jest kwiat. Po nim zostaje owoc."],
            ua: ["Є квітка. Після неї лишається плід."]
          }
        },
        {
          text: {
            pl: ["W przekroju owocu widać nasiona. Okrywa je owocnia, a liść jest miękką blaszką, nie igłą."],
            ua: ["У розрізі плоду видно насіння. Його вкриває оплодень, а листок є м’якою пластинкою, не хвоєю."]
          }
        },
        {
          text: {
            pl: ["Trawa i groszek wchodzą do tej samej szufladki co jabłoń."],
            ua: ["Трава і горошок входять до тієї самої шухляди, що й яблуня."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kwiat i owoc", ua: "Коротке питання. Квітка і плід" },
      task: {
        id: "l34-g4",
        type: "single-choice",
        question: {
          pl: "Roślina ma kwiat, a nasiona leżą w owocu. Jaka to grupa?",
          ua: "Рослина має квітку, а насіння лежить у плоді. Яка це група?"
        },
        options: [
          { id: "a", label: { pl: "okrytonasienne", ua: "покритонасінні" } },
          { id: "b", label: { pl: "nagonasienne, bo nasiono jest w środku jak na łusce", ua: "голонасінні, бо насінина всередині як на лусці" } },
          { id: "c", label: { pl: "paprociowe, bo owoc wygląda jak kupka", ua: "папоротеві, бо плід виглядає як купка" } }
        ],
        answer: "a",
        hint: {
          pl: "Kwiat i nasiona w owocu.",
          ua: "Квітка і насіння в плоді."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Na łusce szyszki nasiono leży odkryte. To nagonasienne. Wróć do owocu: nasiona są w środku, a roślina ma kwiat. To okrytonasienne.",
              ua: "На лусці шишки насінина лежить відкрито. Це голонасінні. Повернися до плоду: насіння всередині, а рослина має квітку. Це покритонасінні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kupki na liściu paproci mają zarodniki. Owoc okrywa nasiona. Kwiat i owoc to okrytonasienne.",
              ua: "Купки на листку папороті мають спори. Плід укриває насіння. Квітка і плід — це покритонасінні."
            }
          }
        ],
        explanation: {
          pl: "Kwiat i nasiona w owocu to okrytonasienne.",
          ua: "Квітка і насіння в плоді — це покритонасінні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tylko duży kwiat", ua: "Типова помилка. Лише велика квітка" },
      claim: {
        pl: "„Tylko drzewo z dużym kwiatem jest okrytonasienne. Trawa to mech.”",
        ua: "«Лише дерево з великою квіткою є покритонасінним. Трава — це мох.»"
      },
      text: {
        pl: [
          "Trawa i groszek są w tej samej szufladce co dąb i jabłoń.",
          "Cechą grupy jest kwiat i nasiona w owocu. Mech poznajesz po chwytnikach i puszce."
        ],
        ua: [
          "Трава і горошок є в тій самій шухляді, що дуб і яблуня.",
          "Ознакою групи є квітка і насіння в плоді. Мох упізнаєш по ризоїдах і коробочці."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Strąk grochu", ua: "Сам. Стручок гороху" },
      task: {
        id: "l34-p4",
        type: "single-choice",
        question: {
          pl: "Groch miał kwiat, a teraz nasiona są w strąku. Uczeń mówi, że strąk to szyszka, bo wisi. Co poprawić?",
          ua: "Горох мав квітку, а тепер насіння є в стручку. Учень каже, що стручок — це шишка, бо висить. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kwiat i nasiona w strąku to okrytonasienne; szyszka trzyma nasiono na łusce", ua: "квітка і насіння в стручку — це покритонасінні; шишка тримає насінину на лусці" } },
          { id: "b", label: { pl: "tak — wszystko, co wisi, jest szyszką", ua: "так — усе, що висить, є шишкою" } },
          { id: "c", label: { pl: "tak — groch to mech, bo nasiono jest małe", ua: "так — горох це мох, бо насінина мала" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiszenie nie wybiera grupy. Wróć do pary: był kwiat, nasiona są w strąku. To owoc, więc okrytonasienne. Szyszka ma nasiono na łusce.",
              ua: "Те, що висить, не вибирає групи. Повернися до пари: була квітка, насіння є в стручку. Це плід, тож покритонасінні. Шишка має насінину на лусці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech ma chwytniki i puszkę z zarodnikami. Groch ma kwiat i nasiona w owocu. Jest w szufladce okrytonasiennych, razem z trawą.",
              ua: "Мох має ризоїди і коробочку зі спорами. Горох має квітку і насіння в плоді. Він у шухляді покритонасінних, разом із травою."
            }
          }
        ],
        explanation: {
          pl: "Kwiat i nasiona w strąku to okrytonasienne.",
          ua: "Квітка і насіння в стручку — це покритонасінні."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie grupy obok siebie", ua: "Поняття. Дві групи поруч" },
      visual: vizGh("l34-porownanie.png", {
        alt: { pl: "Mech obok paproci oraz szyszka obok owocu", ua: "Мох поряд із папороттю та шишка поряд із плодом" },
        title: { pl: "Jedna różnica wystarczy.", ua: "Однієї різниці досить." },
        prompt: { pl: "Plansza lekcji 34: porównanie." }
      }),
      text: {
        pl: [
          "Mech i paprotniki mają zarodniki. Różnica: odpowiedniki organów i zarodnia kontra prawdziwe korzenie, łodyga i liście z kupkami.",
          "Nagonasienne i okrytonasienne mają nasiona. Różnica: nagie nasiono na łusce i igły kontra owocnia i miękka blaszka.",
          "Jedna cecha różnicy wystarcza. Zieleń i las nie są kluczem. Pięć królestw było na lekcji 15. Tu są tylko rośliny."
        ],
        ua: [
          "Мох і папоротеві мають спори. Різниця: відповідники органів і спорангій проти справжніх коренів, стебла і листків із купками.",
          "Голонасінні і покритонасінні мають насіння. Різниця: голе насіння на лусці і хвоя проти оплодня і м’якої пластинки.",
          "Однієї ознаки різниці досить. Зелень і ліс не є ключем. П’ять царств були на уроці 15. Тут лише рослини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie pary", ua: "Приклад. Дві пари" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Mech: chwytniki i puszka. Paproć: korzenie i kupki. Oba mają zarodniki."],
            ua: ["Мох: ризоїди і коробочка. Папороть: корені і купки. Обидва мають спори."]
          }
        },
        {
          text: {
            pl: ["Szyszka: nasiono na łusce. Jabłko: nasiona w owocu. Oba mają nasiona."],
            ua: ["Шишка: насінина на лусці. Яблуко: насіння в плоді. Обидва мають насіння."]
          }
        },
        {
          text: {
            pl: ["Wspólna zieleń nie skleja tych par w jedną grupę."],
            ua: ["Спільна зелень не зліплює ці пари в одну групу."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna różnica", ua: "Коротке питання. Одна різниця" },
      task: {
        id: "l34-g5",
        type: "single-choice",
        question: {
          pl: "Które porównanie dwóch grup jest trafne?",
          ua: "Яке порівняння двох груп влучне?"
        },
        options: [
          { id: "a", label: { pl: "mech ma chwytniki i puszkę, paproć ma korzenie i kupki", ua: "мох має ризоїди і коробочку, папороть має корені і купки" } },
          { id: "b", label: { pl: "mech i paproć mają nasiona w owocu", ua: "мох і папороть мають насіння в плоді" } },
          { id: "c", label: { pl: "nagonasienne i mech to jedna grupa, bo oba są w lesie", ua: "голонасінні і мох — одна група, бо обидва в лісі" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedna różnica: chwytniki i puszka albo korzenie i kupki.",
          ua: "Одна різниця: ризоїди і коробочка або корені і купки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mech i paproć mają zarodniki, nie nasiona w owocu. Wróć do różnicy: chwytniki i puszka albo korzenie i kupki.",
              ua: "Мох і папороть мають спори, не насіння в плоді. Повернися до різниці: ризоїди і коробочка або корені і купки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Las nie jest cechą grupy. Mech ma puszkę i chwytniki. Nagonasienne mają nasiono na łusce szyszki.",
              ua: "Ліс не є ознакою групи. Мох має коробочку і ризоїди. Голонасінні мають насінину на лусці шишки."
            }
          }
        ],
        explanation: {
          pl: "Mech: chwytniki i puszka. Paproć: korzenie i kupki.",
          ua: "Мох: ризоїди і коробочка. Папороть: корені і купки."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jedna zieleń", ua: "Типова помилка. Одна зелень" },
      claim: {
        pl: "„Wszystko zielone w lesie to jedna grupa.”",
        ua: "«Усе зелене в лісі — це одна група.»"
      },
      text: {
        pl: [
          "Zieleń i las powtarzają się w kilku szufladkach.",
          "Porównanie bierze jedną różnicę: zarodniki w puszce albo w kupkach, nasiono na łusce albo w owocu."
        ],
        ua: [
          "Зелень і ліс повторюються в кількох шухлядах.",
          "Порівняння бере одну різницю: спори в коробочці або в купках, насінина на лусці або в плоді."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szyszka i jabłko", ua: "Сам. Шишка і яблуко" },
      task: {
        id: "l34-p5",
        type: "single-choice",
        question: {
          pl: "Na ławce leżą szyszka z nasionem na łusce i jabłko z nasionami w środku. Uczeń mówi, że obie rzeczy są nagonasienne, bo obie mają nasiona. Co poprawić?",
          ua: "На парті лежать шишка з насіниною на лусці і яблуко з насінням усередині. Учень каже, що обидві речі голонасінні, бо обидві мають насіння. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "obie mają nasiona; szyszka to nagonasienne, owoc to okrytonasienne", ua: "обидві мають насіння; шишка — це голонасінні, плід — це покритонасінні" } },
          { id: "b", label: { pl: "tak — nasiono zawsze znaczy szyszkę", ua: "так — насінина завжди означає шишку" } },
          { id: "c", label: { pl: "tak — jabłko to puszka mchu, bo jest okrągłe", ua: "так — яблуко це коробочка моху, бо кругле" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nasiono mają dwie grupy. Wróć do różnicy: na łusce szyszki są nagonasienne, w owocu są okrytonasienne.",
              ua: "Насінину мають дві групи. Повернися до різниці: на лусці шишки — голонасінні, у плоді — покритонасінні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kształt nie wybiera grupy. Puszka mchu stoi na trzonku i ma zarodniki. Jabłko jest owocem z nasionami w środku.",
              ua: "Форма не вибирає групи. Коробочка моху стоїть на ніжці і має спори. Яблуко є плодом із насінням усередині."
            }
          }
        ],
        explanation: {
          pl: "Szyszka to nagonasienne. Jabłko to okrytonasienne. Oba mają nasiona.",
          ua: "Шишка — це голонасінні. Яблуко — це покритонасінні. Обидва мають насіння."
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
      heading: { pl: "Sprawdzian 1. Trzonek", ua: "Перевірка 1. Ніжка" },
      task: {
        id: "l34-t1",
        type: "single-choice",
        question: {
          pl: "Na trzonku stoi puszka, u dołu są chwytniki. Uczeń mówi, że to szyszka, bo coś sterczy. Co pasuje do lekcji?",
          ua: "На ніжці стоїть коробочка, знизу є ризоїди. Учень каже, що це шишка, бо щось стирчить. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "chwytniki i puszka z zarodnikami to mech; szyszka ma nasiono na łusce", ua: "ризоїди і коробочка зі спорами — це мох; шишка має насінину на лусці" } },
          { id: "b", label: { pl: "tak — wszystko, co sterczy, jest szyszką", ua: "так — усе, що стирчить, є шишкою" } },
          { id: "c", label: { pl: "tak — puszka to owoc, bo jest na górze rośliny", ua: "так — коробочка це плід, бо вона зверху рослини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sterczenie nie wybiera grupy. Wróć do mchu: chwytniki i puszka z zarodnikami. Szyszka trzyma nasiono na łusce.",
              ua: "Те, що стирчить, не вибирає групи. Повернися до моху: ризоїди і коробочка зі спорами. Шишка тримає насінину на лусці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owoc okrywa nasiona i należy do okrytonasiennych. Puszka na trzonku ma zarodniki. Razem z chwytnikami to mech.",
              ua: "Плід укриває насіння і належить покритонасінним. Коробочка на ніжці має спори. Разом із ризоїдами це мох."
            }
          }
        ],
        explanation: {
          pl: "Chwytniki i puszka to mech. Szyszka ma nasiono na łusce.",
          ua: "Ризоїди і коробочка — це мох. Шишка має насінину на лусці."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Rząd kropek", ua: "Перевірка 2. Ряд цяток" },
      task: {
        id: "l34-t2",
        type: "single-choice",
        question: {
          pl: "Na spodzie dużego liścia leżą regularne kupki, roślina ma korzenie. Uczeń mówi, że to łuski szyszki, bo kropki idą rzędem. Co pasuje do lekcji?",
          ua: "На споді великого листка лежать регулярні купки, рослина має корені. Учень каже, що це луски шишки, бо цятки йдуть рядом. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "korzenie i kupki zarodni to paproć; łuska szyszki trzyma nasiono", ua: "корені і купки спорангіїв — це папороть; луска шишки тримає насінину" } },
          { id: "b", label: { pl: "tak — rząd kropek na liściu jest szyszką", ua: "так — ряд цяток на листку є шишкою" } },
          { id: "c", label: { pl: "tak — to mech, bo kupki są małe jak listki", ua: "так — це мох, бо купки малі як листочки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rząd nie zamienia kupek w łuski. Wróć do paproci: korzenie i kupki zarodni na spodzie liścia. W kupkach są zarodniki.",
              ua: "Ряд не перетворює купки на луски. Повернися до папороті: корені і купки спорангіїв на споді листка. У купках спори."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mech ma chwytniki i puszkę na trzonku. Duży liść z kupkami i korzeniami to paproć.",
              ua: "Мох має ризоїди і коробочку на ніжці. Великий листок із купками і коренями — це папороть."
            }
          }
        ],
        explanation: {
          pl: "Korzenie i kupki na spodzie liścia to paproć.",
          ua: "Корені і купки на споді листка — це папороть."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Małe nasiono", ua: "Перевірка 3. Мала насінина" },
      task: {
        id: "l34-t3",
        type: "single-choice",
        question: {
          pl: "Na łusce szyszki leży małe nasiono. Uczeń mówi, że to zarodnik mchu, bo jest drobne. Co pasuje do lekcji?",
          ua: "На лусці шишки лежить мала насінина. Учень каже, що це спора моху, бо вона дрібна. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "nasiono na łusce to nagonasienne; zarodnik mchu jest w puszce", ua: "насінина на лусці — це голонасінні; спора моху є в коробочці" } },
          { id: "b", label: { pl: "tak — wszystko drobne jest zarodnikiem", ua: "так — усе дрібне є спорою" } },
          { id: "c", label: { pl: "tak — szyszka jest owocem, bo nasiono jest w środku rośliny", ua: "так — шишка є плодом, бо насінина всередині рослини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rozmiar nie wybiera grupy. Wróć do miejsca: nasiono leży na łusce szyszki, więc to nagonasienne. Zarodnik mchu jest w puszce.",
              ua: "Розмір не вибирає групи. Повернися до місця: насінина лежить на лусці шишки, тож це голонасінні. Спора моху є в коробочці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owoc okrywa nasiona i idzie po kwiecie. Szyszka nie jest owocem. Nasiono na łusce to nagonasienne.",
              ua: "Плід укриває насіння і йде після квітки. Шишка не є плодом. Насінина на лусці — це голонасінні."
            }
          }
        ],
        explanation: {
          pl: "Nasiono na łusce szyszki to nagonasienne.",
          ua: "Насінина на лусці шишки — це голонасінні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Przekrojone jabłko", ua: "Перевірка 4. Розрізане яблуко" },
      task: {
        id: "l34-t4",
        type: "single-choice",
        question: {
          pl: "Jabłoń miała kwiat, a w przekrojonym jabłku widać nasiona. Uczeń mówi, że nasiona leżą nago na łusce, bo jabłko dało się otworzyć. Co pasuje do lekcji?",
          ua: "Яблуня мала квітку, а в розрізаному яблуці видно насіння. Учень каже, що насіння лежить голо на лусці, бо яблуко вдалося відкрити. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "kwiat i nasiona w jabłku to okrytonasienne; naga łuska jest u szyszki", ua: "квітка і насіння в яблуці — це покритонасінні; гола луска є в шишки" } },
          { id: "b", label: { pl: "tak — otwarte jabłko staje się szyszką", ua: "так — відкрите яблуко стає шишкою" } },
          { id: "c", label: { pl: "tak — nasiona w jabłku to kupki paproci", ua: "так — насіння в яблуці це купки папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Otwarcie owocu nie robi z niego szyszki. Wróć do pary: był kwiat, nasiona są w owocu. To okrytonasienne. Nasiono na łusce to nagonasienne.",
              ua: "Відкриття плоду не робить із нього шишку. Повернися до пари: була квітка, насіння є в плоді. Це покритонасінні. Насінина на лусці — це голонасінні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kupki paproci są na spodzie liścia i mają zarodniki. Jabłko jest owocem z nasionami. Kwiat i owoc to okrytonasienne.",
              ua: "Купки папороті є на споді листка і мають спори. Яблуко є плодом із насінням. Квітка і плід — це покритонасінні."
            }
          }
        ],
        explanation: {
          pl: "Kwiat i nasiona w jabłku to okrytonasienne.",
          ua: "Квітка і насіння в яблуці — це покритонасінні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wspólne zarodniki", ua: "Перевірка 5. Спільні спори" },
      task: {
        id: "l34-t5",
        type: "single-choice",
        question: {
          pl: "Jedna roślina ma puszkę i chwytniki, druga ma korzenie i kupki na liściu. Uczeń mówi, że to jedna grupa, bo obie mają zarodniki. Co pasuje do lekcji?",
          ua: "Одна рослина має коробочку і ризоїди, друга має корені і купки на листку. Учень каже, що це одна група, бо обидві мають спори. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "obie mają zarodniki, ale mech ma chwytniki i puszkę, a paproć korzenie i kupki", ua: "обидві мають спори, але мох має ризоїди і коробочку, а папороть корені і купки" } },
          { id: "b", label: { pl: "tak — zarodniki sklejają je w jedną grupę", ua: "так — спори зліплюють їх в одну групу" } },
          { id: "c", label: { pl: "tak — obie mają nasiona w jabłku", ua: "так — обидві мають насіння в яблуці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wspólne zarodniki nie kasują różnicy. Wróć do pary: mech ma chwytniki i puszkę, paproć ma korzenie i kupki.",
              ua: "Спільні спори не скасовують різниці. Повернися до пари: мох має ризоїди і коробочку, папороть має корені і купки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nasiona w jabłku to okrytonasienne. Mech i paproć mają zarodniki. Różnią się chwytnikami i puszką albo korzeniami i kupkami.",
              ua: "Насіння в яблуці — це покритонасінні. Мох і папороть мають спори. Різняться ризоїдами і коробочкою або коренями і купками."
            }
          }
        ],
        explanation: {
          pl: "Obie mają zarodniki. Mech ma puszkę i chwytniki, paproć ma kupki i korzenie.",
          ua: "Обидві мають спори. Мох має коробочку і ризоїди, папороть має купки і корені."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l34-porownanie.png", {
        alt: { pl: "Mech obok paproci oraz szyszka obok owocu", ua: "Мох поряд із папороттю та шишка поряд із плодом" },
        title: { pl: "Jedna różnica. Cztery grupy.", ua: "Одна різниця. Чотири групи." },
        prompt: { pl: "Ta sama plansza porównania." }
      }),
      text: {
        pl: [
          "Mech: niewielki, bez typowych organów. Chwytniki, ulistniona łodyżka, zarodnia z zarodnikami.",
          "Paprotniki: prawdziwe korzenie, łodygi i liście. Nerecznica samcza, skrzyp polny i widłak goździsty są w jednej szufladce.",
          "Nagonasienne: nagie nasiono na łusce, zwykle igły. Skupienia sosny to nie kwiat czereśni.",
          "Okrytonasienne: kwiat i nasiona pod owocnią, zwykle miękka blaszka. Trawa i groszek są w tej samej grupie co dąb.",
          "Porównanie bierze jedną różnicę. Zieleń i las jej nie zastępują."
        ],
        ua: [
          "Мох: невеликий, без типових органів. Ризоїди, облистнене стебельце, спорангій зі спорами.",
          "Папоротеві: справжні корені, стебла і листки. Чоловіча папороть, хвощ польовий і плаун булавовидний є в одній шухляді.",
          "Голонасінні: голе насіння на лусці, зазвичай хвоя. Скупчення сосни — це не квітка черешні.",
          "Покритонасінні: квітка і насіння під оплоднем, зазвичай м’яка пластинка. Трава і горошок є в тій самій групі, що й дуб.",
          "Порівняння бере одну різницю. Зелень і ліс її не замінюють."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Rozpoznam mech po chwytnikach i zarodni.", ua: "Розпізнаю мох по ризоїдах і спорангії." },
        { pl: "Rozpoznam paprotniki po prawdziwych organach i kupkach.", ua: "Розпізнаю папоротевих по справжніх органах і купках." },
        { pl: "Rozpoznam nagonasienne po nagim nasionie i igłach.", ua: "Розпізнаю голонасінні по голому насінні і хвої." },
        { pl: "Rozpoznam okrytonasienne po kwiecie i owocni.", ua: "Розпізнаю покритонасінні по квітці і оплодні." },
        { pl: "Porównam dwie grupy jedną różnicą.", ua: "Порівняю дві групи однією різницею." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
