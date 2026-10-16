function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L27_Nagonasienne/images/";

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
      heading: { pl: "Misja: nasiono bez owocu", ua: "Місія: насінина без плоду" },
      visual: vizGh("l27-zacznijmy.png", {
        alt: { pl: "Drzewo z szyszkami w lesie", ua: "Дерево з шишками в лісі" },
        title: { pl: "Po zarodnikach — nasiona.", ua: "Після спор — насіння." },
        prompt: { pl: "Plansza lekcji 27: drzewo z szyszkami." }
      }),
      text: {
        pl: [
          "To lekcja 27. Mchy i paprocie rozsiewają się zarodnikami. Dziś rośliny, które mają nasiona, ale jeszcze nie mają kwiatu i owocu.",
          "Sosnę, świerk i jodłę rozpoznasz na lekcji 28. Dziś tylko grupa: rośliny nagonasienne.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 27. Мохи і папороті поширюються спорами. Сьогодні рослини, які мають насіння, але ще не мають квітки і плоду.",
          "Сосну, ялину і ялицю розпізнаєш на уроці 28. Сьогодні лише група: голонасінні рослини.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "nagonasienne", ua: "голонасінні — насіння на лусці, не в плоді" },
        { pl: "nasiono / zarodnik", ua: "насінина має оболонку і запас; спора — одна клітина" },
        { pl: "szyszka / kwiat", ua: "шишка — не квітка" },
        { pl: "szyszka męska", ua: "чоловіча шишка — менша, дає пилок" },
        { pl: "szyszka żeńska", ua: "жіноча шишка — дерев’яніє, на лусках насіння" },
        { pl: "pyłek", ua: "пилок — жовтий порошок" },
        { pl: "zapylenie", ua: "запилення — вітер несе пилок на жіночу шишку" },
        { pl: "igła", ua: "хвоя — вузький листок; види дерев — урок 28" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nagie nasiono", ua: "Поняття. Гола насінина" },
      visual: vizGh("l27-nasiona.png", {
        alt: { pl: "Nasiono na łusce otwartej szyszki", ua: "Насінина на лусці відкритої шишки" },
        title: { pl: "Na łusce. Nie w owocu.", ua: "На лусці. Не в плоді." },
        prompt: { pl: "Plansza lekcji 27: nasiono na łusce." }
      }),
      text: {
        pl: [
          ["", em("Rośliny nagonasienne"), " wytwarzają ", em("nasiona"), ". „Nago” znaczy: nasiono nie jest schowane w owocu. Leży na łusce szyszki, często ze skrzydełkiem."],
          "Jabłko i śliwka to owoce. Poznasz je później, u okrytonasiennych.",
          "Nasiono ma osłonę i zapas dla siewki. Zarodnik mchu i paproci jest jedną komórką do rozsiewu i tego zapasu nie ma."
        ],
        ua: [
          ["", em("Голонасінні рослини"), " виробляють ", em("насіння"), ". «Голо» означає: насінина не схована в плоді. Лежить на лусці шишки, часто з крильцем."],
          "Яблуко і слива — це плоди. Пізнаєш їх пізніше, у покритонасінних.",
          "Насінина має оболонку і запас для сіянця. Спора моху і папороті є однією клітиною для поширення і цього запасу не має."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Otwarta szyszka", ua: "Приклад. Відкрита шишка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Łuska się odchyla. Na niej leży nasiono."],
            ua: ["Луска відхиляється. На ній лежить насінина."]
          }
        },
        {
          text: {
            pl: ["Wokół nasiona nie ma miąższu jabłka."],
            ua: ["Навколо насінини немає м’якоті яблука."]
          }
        },
        {
          text: {
            pl: ["W nasionie jest zapas. Z niego wyrośnie siewka."],
            ua: ["У насінині є запас. З нього виросте сіянець."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co znaczy nago", ua: "Коротке питання. Що означає голо" },
      task: {
        id: "l27-g1",
        type: "single-choice",
        question: {
          pl: "Co znaczy, że nasiona nagonasiennych są nagie?",
          ua: "Що означає, що насіння голонасінних голе?"
        },
        options: [
          { id: "a", label: { pl: "leżą na łusce szyszki i nie są schowane w owocu", ua: "лежать на лусці шишки і не сховані в плоді" } },
          { id: "b", label: { pl: "są zarodnikami w puszce mchu", ua: "є спорами в коробочці моху" } },
          { id: "c", label: { pl: "zawsze siedzą w jabłku", ua: "завжди сидять у яблуці" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj łuski. Owoc jest później.",
          ua: "Шукай луску. Плід є пізніше."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka i zarodniki należą do mchu. Nagie nasiono leży na łusce szyszki, nie w owocu.",
              ua: "Коробочка і спори належать моху. Гола насінина лежить на лусці шишки, не в плоді."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jabłko jest owocem. To późniejsza grupa roślin. U nagonasiennych nasiono leży na łusce.",
              ua: "Яблуко є плодом. Це пізніша група рослин. У голонасінних насінина лежить на лусці."
            }
          }
        ],
        explanation: {
          pl: "Nagie nasiono leży na łusce szyszki, nie w owocu.",
          ua: "Гола насінина лежить на лусці шишки, не в плоді."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szyszka-jabłko", ua: "Типова помилка. Шишка-яблуко" },
      claim: {
        pl: "„W szyszce jest nasiono, więc szyszka jest owocem jak jabłko.”",
        ua: "«У шишці є насінина, тож шишка є плодом, як яблуко.»"
      },
      text: {
        pl: [
          "Owoc osłania nasiona. Jabłko poznasz później.",
          "Tu nasiono leży nago na łusce. Szyszki nie zrywasz jako jabłka."
        ],
        ua: [
          "Плід вкриває насіння. Яблуко пізнаєш пізніше.",
          "Тут насінина лежить голо на лусці. Шишку не зриваєш як яблуко."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Łuska i miąższ", ua: "Сам. Луска і м’якоть" },
      task: {
        id: "l27-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń otwiera szyszkę i widzi nasiono na łusce. Mówi, że to śliwka, bo w środku jest nasiono. Co poprawić?",
          ua: "Учень відкриває шишку і бачить насінину на лусці. Каже, що це слива, бо всередині є насінина. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to nasiono nagie: leży na łusce, nie w owocu; śliwka jest później", ua: "це гола насінина: лежить на лусці, не в плоді; слива є пізніше" } },
          { id: "b", label: { pl: "tak — każda łuska jest miąższem owocu", ua: "так — кожна луска є м’якоттю плоду" } },
          { id: "c", label: { pl: "tak — nasiono na łusce jest zarodnikiem paproci", ua: "так — насінина на лусці є спорою папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Miąższ owocu osłania nasiona. Łuska szyszki ich nie owija jak śliwka. Nasiono leży nago.",
              ua: "М’якоть плоду вкриває насіння. Луска шишки не обгортає його, як слива. Насінина лежить голо."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodniki paproci są w kupkach na liściu. Na łusce leży nasiono: ma osłonę i zapas.",
              ua: "Спори папороті є в купках на листку. На лусці лежить насінина: має оболонку і запас."
            }
          }
        ],
        explanation: {
          pl: "Nasiono na łusce jest nagie. Śliwka jest owocem z późniejszej lekcji.",
          ua: "Насінина на лусці є голою. Слива є плодом із пізнішого уроку."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie szyszki", ua: "Поняття. Дві шишки" },
      visual: vizGh("l27-szyszki.png", {
        alt: { pl: "Małe szyszki męskie i większa szyszka żeńska", ua: "Малі чоловічі шишки і більша жіноча шишка" },
        title: { pl: "Pyłek albo nasiona. Nie kwiat.", ua: "Пилок або насіння. Не квітка." },
        prompt: { pl: "Plansza lekcji 27: dwie szyszki." }
      }),
      text: {
        pl: [
          ["", em("Szyszka męska"), " jest zwykle mniejsza i miękka. Wytwarza ", em("pyłek"), ", żółty proszek."],
          ["", em("Szyszka żeńska"), " drewnieje. Na łuskach leżą zalążki. Po zapyleniu powstają z nich nasiona."],
          "To nie kwiat. Kwiatu dziś nie rozbieramy. Nie myl też szyszki z kłosem skrzypu z lekcji 26."
        ],
        ua: [
          ["", em("Чоловіча шишка"), " зазвичай менша і м’яка. Виробляє ", em("пилок"), ", жовтий порошок."],
          ["", em("Жіноча шишка"), " дерев’яніє. На лусках лежать насінні зачатки. Після запилення з них виникає насіння."],
          "Це не квітка. Квітку сьогодні не розбираємо. Не плутай також шишку з колоском хвоща з уроку 26."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mała i duża", ua: "Приклад. Мала і велика" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wiosną przy pędzie widać skupisko małych, miękkich szyszek. Sypią pyłek."],
            ua: ["Навесні біля пагона видно скупчення малих м’яких шишок. Сиплють пилок."]
          }
        },
        {
          text: {
            pl: ["Większa szyszka twardnieje. Na łuskach zostaną nasiona."],
            ua: ["Більша шишка твердне. На лусках лишаться насінини."]
          }
        },
        {
          text: {
            pl: ["Żadna z nich nie ma płatków kwiatu."],
            ua: ["Жодна з них не має пелюсток квітки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która która", ua: "Коротке питання. Яка яка" },
      task: {
        id: "l27-g2",
        type: "single-choice",
        question: {
          pl: "Czym szyszka męska różni się od żeńskiej?",
          ua: "Чим чоловіча шишка відрізняється від жіночої?"
        },
        options: [
          { id: "a", label: { pl: "męska jest zwykle mniejsza i daje pyłek; żeńska drewnieje i ma nasiona na łuskach", ua: "чоловіча зазвичай менша і дає пилок; жіноча дерев’яніє і має насіння на лусках" } },
          { id: "b", label: { pl: "męska jest kwiatem, a żeńska jabłkiem", ua: "чоловіча є квіткою, а жіноча яблуком" } },
          { id: "c", label: { pl: "obie są kłosem skrzypu", ua: "обидві є колоском хвоща" } }
        ],
        answer: "a",
        hint: {
          pl: "Mniejsza sypie żółty proszek. Większa trzyma nasiona.",
          ua: "Менша сипле жовтий порошок. Більша тримає насіння."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka nie jest kwiatem ani owocem. Męska daje pyłek, żeńska ma nasiona na łuskach.",
              ua: "Шишка не є квіткою і не є плодом. Чоловіча дає пилок, жіноча має насіння на лусках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kłos skrzypu jest z lekcji 26 i ma zarodniki. Szyszka męska daje pyłek, a żeńska nasiona.",
              ua: "Колосок хвоща є з уроку 26 і має спори. Чоловіча шишка дає пилок, а жіноча — насіння."
            }
          }
        ],
        explanation: {
          pl: "Szyszka męska daje pyłek. Żeńska drewnieje i ma nasiona na łuskach.",
          ua: "Чоловіча шишка дає пилок. Жіноча дерев’яніє і має насіння на лусках."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Płatki szyszki", ua: "Типова помилка. Пелюстки шишки" },
      claim: {
        pl: "„Szyszka jest kwiatem, tylko bez barwnych płatków.”",
        ua: "«Шишка є квіткою, лише без барвистих пелюсток.»"
      },
      text: {
        pl: [
          "Brak płatków nie robi z szyszki kwiatu.",
          "Kwiat jest później. Dziś są dwie szyszki: pyłek albo nasiona."
        ],
        ua: [
          "Брак пелюсток не робить із шишки квітку.",
          "Квітка є пізніше. Сьогодні є дві шишки: пилок або насіння."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Żółty proszek", ua: "Сам. Жовтий порошок" },
      task: {
        id: "l27-p2",
        type: "single-choice",
        question: {
          pl: "Przy gałązce widać małe miękkie szyszki, a niżej jedną dużą, twardą. Uczeń nazywa małe kwiatem, a dużą kłosem skrzypu. Co poprawić?",
          ua: "Біля гілочки видно малі м’які шишки, а нижче одну велику, тверду. Учень називає малі квіткою, а велику колоском хвоща. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "małe to szyszki męskie z pyłkiem; duża żeńska drewnieje i trzyma nasiona", ua: "малі — це чоловічі шишки з пилком; велика жіноча дерев’яніє і тримає насіння" } },
          { id: "b", label: { pl: "tak — miękka szyszka otwiera się w płatek", ua: "так — м’яка шишка розкривається в пелюстку" } },
          { id: "c", label: { pl: "tak — twarda szyszka jest puszką mchu", ua: "так — тверда шишка є коробочкою моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Płatek należy do kwiatu, a kwiatu tu nie ma. Mała miękka szyszka wytwarza pyłek.",
              ua: "Пелюстка належить до квітки, а квітки тут немає. Мала м’яка шишка виробляє пилок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu stoi na trzonku i ma zarodniki. Duża twarda szyszka jest żeńska: na łuskach powstają nasiona.",
              ua: "Коробочка моху стоїть на ніжці і має спори. Велика тверда шишка є жіночою: на лусках виникає насіння."
            }
          }
        ],
        explanation: {
          pl: "Małe szyszki dają pyłek. Duża żeńska ma nasiona na łuskach. To nie kwiat.",
          ua: "Малі шишки дають пилок. Велика жіноча має насіння на лусках. Це не квітка."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wiatr", ua: "Поняття. Вітер" },
      visual: vizGh("l27-wiatr.png", {
        alt: { pl: "Wiatr niesie pyłek do szyszki żeńskiej", ua: "Вітер несе пилок до жіночої шишки" },
        title: { pl: "Pyłek leci. Nie pływa.", ua: "Пилок летить. Не плаває." },
        prompt: { pl: "Plansza lekcji 27: zapylenie wiatrem." }
      }),
      text: {
        pl: [
          ["", em("Zapylenie"), " to przeniesienie pyłku na szyszkę żeńską. U nagonasiennych robi to zwykle ", em("wiatr"), "."],
          "Mchy i paprocie potrzebowały kropli wody do zapłodnienia. Tu pyłek nie pływa, tylko leci. Dlatego las iglasty może być suchszy niż wąwóz z paprociami.",
          "Pszczoła i barwny kwiat są później. Dziś wiosną przy drzewie widać żółtą chmurę pyłku."
        ],
        ua: [
          ["", em("Запилення"), " — це перенесення пилку на жіночу шишку. У голонасінних це зазвичай робить ", em("вітер"), "."],
          "Мохи і папороті потребували краплі води для запліднення. Тут пилок не плаває, а летить. Тому хвойний ліс може бути сухішим за яр із папоротями.",
          "Бджола і барвиста квітка є пізніше. Сьогодні навесні біля дерева видно жовту хмару пилку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Żółta chmura", ua: "Приклад. Жовта хмара" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wiatr strąca pyłek z małych szyszek."],
            ua: ["Вітер струшує пилок із малих шишок."]
          }
        },
        {
          text: {
            pl: ["Pyłek leci do większej szyszki. To zapylenie."],
            ua: ["Пилок летить до більшої шишки. Це запилення."]
          }
        },
        {
          text: {
            pl: ["Kropla wody nie jest tu potrzebna, jak u mchu."],
            ua: ["Крапля води тут не потрібна, як у моху."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto niesie", ua: "Коротке питання. Хто несе" },
      task: {
        id: "l27-g3",
        type: "single-choice",
        question: {
          pl: "Co przenosi pyłek u nagonasiennych?",
          ua: "Що переносить пилок у голонасінних?"
        },
        options: [
          { id: "a", label: { pl: "wiatr, z szyszki męskiej na żeńską", ua: "вітер, із чоловічої шишки на жіночу" } },
          { id: "b", label: { pl: "kropla wody, jak u mchu i paproci", ua: "крапля води, як у моху і папороті" } },
          { id: "c", label: { pl: "pszczoła w barwnym kwiecie", ua: "бджола в барвистій квітці" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj żółtej chmury, nie owada i nie kropli.",
          ua: "Шукай жовту хмару, не комаху і не краплю."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kropla wody jest potrzebna mchom i paprociom. Pyłek nagonasiennych leci z wiatrem.",
              ua: "Крапля води потрібна мохам і папоротям. Пилок голонасінних летить із вітром."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pszczoła i barwny kwiat są później. Dziś zapylenie robi wiatr.",
              ua: "Бджола і барвиста квітка є пізніше. Сьогодні запилення робить вітер."
            }
          }
        ],
        explanation: {
          pl: "Wiatr przenosi pyłek z szyszki męskiej na żeńską.",
          ua: "Вітер переносить пилок із чоловічої шишки на жіночу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pyłek pływa", ua: "Типова помилка. Пилок плаває" },
      claim: {
        pl: "„Skoro mech potrzebuje kropli, szyszka też czeka na deszcz.”",
        ua: "«Якщо мох потребує краплі, шишка теж чекає на дощ.»"
      },
      text: {
        pl: [
          "Kropla wody służy zapłodnieniu mchu i paproci.",
          "Pyłek nagonasiennych niesie wiatr. Dlatego te drzewa znoszą suchszy las."
        ],
        ua: [
          "Крапля води служить заплідненню моху і папороті.",
          "Пилок голонасінних несе вітер. Тому ці дерева зносять сухіший ліс."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wiosna przy pniu", ua: "Сам. Весна біля стовбура" },
      task: {
        id: "l27-p3",
        type: "single-choice",
        question: {
          pl: "W suchym lesie wiosną z drzewa leci żółta chmura. Uczeń mówi, że to pszczoły niosą pyłek do kwiatu. Co poprawić?",
          ua: "У сухому лісі навесні з дерева летить жовта хмара. Учень каже, що це бджоли несуть пилок до квітки. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to pyłek: niesie go wiatr na szyszkę żeńską; kwiatu i pszczoły tu nie ma", ua: "це пилок: його несе вітер на жіночу шишку; квітки і бджоли тут немає" } },
          { id: "b", label: { pl: "tak — żółta chmura jest barwnym kwiatem", ua: "так — жовта хмара є барвистою квіткою" } },
          { id: "c", label: { pl: "tak — w suchym lesie pyłek i tak płynie w kropli jak u paproci", ua: "так — у сухому лісі пилок усе одно пливе в краплі, як у папороті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żółta chmura to pyłek, nie kwiat. Zapylenie u nagonasiennych robi wiatr.",
              ua: "Жовта хмара — це пилок, не квітка. Запилення у голонасінних робить вітер."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kropla wody jest u mchu i paproci. W suchym lesie pyłek leci z wiatrem na szyszkę żeńską.",
              ua: "Крапля води є в моху і папороті. У сухому лісі пилок летить із вітром на жіночу шишку."
            }
          }
        ],
        explanation: {
          pl: "Żółta chmura to pyłek. Niesie go wiatr.",
          ua: "Жовта хмара — це пилок. Його несе вітер."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Igła", ua: "Поняття. Хвоя" },
      visual: vizGh("l27-igly.png", {
        alt: { pl: "Igły na pędzie", ua: "Хвоя на пагоні" },
        title: { pl: "Wąski liść. Gatunek później.", ua: "Вузький листок. Вид пізніше." },
        prompt: { pl: "Plansza lekcji 27: igły." }
      }),
      text: {
        pl: [
          ["", em("Igły"), " to liście: wąskie, często twarde, z grubą skórką. Zachodzi w nich fotosynteza, jak w liściu z lekcji 24, tylko kształt jest inny niż u dębu."],
          "Taki liść mniej paruje. Drzewo lepiej znosi mróz i suszę niż paproć w wąwozie.",
          "Nie liczysz dziś igieł w pęczku i nie sprawdzasz, czy szyszka zwisa. Sosna, świerk i jodła są lekcją 28."
        ],
        ua: [
          ["", em("Хвоя"), " — це листки: вузькі, часто тверді, з товстою шкіркою. У них відбувається фотосинтез, як у листку з уроку 24, лише форма інша, ніж у дуба."],
          "Такий листок менше випаровує. Дерево краще зносить мороз і посуху, ніж папороть у яру.",
          "Не рахуєш сьогодні хвоїнок у пучку і не перевіряєш, чи шишка звисає. Сосна, ялина і ялиця — урок 28."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Wąski liść", ua: "Приклад. Вузький листок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na pędzie siedzą wąskie, twarde igły."],
            ua: ["На пагоні сидять вузькі тверді хвоїнки."]
          }
        },
        {
          text: {
            pl: ["Gruba skórka ogranicza parowanie. Drzewo znosi mróz."],
            ua: ["Товста шкірка обмежує випаровування. Дерево зносить мороз."]
          }
        },
        {
          text: {
            pl: ["Nazwy sosny i świerka jeszcze nie wybierasz."],
            ua: ["Назви сосни і ялини ще не вибираєш."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co to za organ", ua: "Коротке питання. Що це за орган" },
      task: {
        id: "l27-g4",
        type: "single-choice",
        question: {
          pl: "Czym jest igła?",
          ua: "Чим є хвоя?"
        },
        options: [
          { id: "a", label: { pl: "liściem: wąskim, często twardym; gatunek drzewa jest na lekcji 28", ua: "листком: вузьким, часто твердим; вид дерева є на уроці 28" } },
          { id: "b", label: { pl: "kwiatem, bo jest zielona", ua: "квіткою, бо зелена" } },
          { id: "c", label: { pl: "nasieniem w owocu", ua: "насіниною в плоді" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj liścia o innym kształcie niż blaszka dębu.",
          ua: "Шукай листок іншої форми, ніж пластинка дуба."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie robi kwiatu. Igła jest liściem. Kwiat jest później.",
              ua: "Зелений колір не робить квітку. Хвоя є листком. Квітка є пізніше."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nasiono leży na łusce szyszki. Igła jest liściem na pędzie, nie owocem.",
              ua: "Насінина лежить на лусці шишки. Хвоя є листком на пагоні, не плодом."
            }
          }
        ],
        explanation: {
          pl: "Igła jest liściem. Rozpoznawanie gatunków jest na lekcji 28.",
          ua: "Хвоя є листком. Розпізнавання видів є на уроці 28."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Dwie igły to sosna", ua: "Типова помилка. Дві хвоїнки — це сосна" },
      claim: {
        pl: "„Liczą się igły w pęczku, więc od razu nazywam drzewo.”",
        ua: "«Рахуються хвоїнки в пучку, тож я одразу називаю дерево.»"
      },
      text: {
        pl: [
          "Dziś igła jest liściem. Tyle.",
          "Sosna, świerk i jodła mają osobną lekcję. Nie zgadujesz gatunku po pęczku."
        ],
        ua: [
          "Сьогодні хвоя є листком. І все.",
          "Сосна, ялина і ялиця мають окремий урок. Не вгадуєш вид за пучком."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Twarde i wąskie", ua: "Сам. Тверді і вузькі" },
      task: {
        id: "l27-p4",
        type: "single-choice",
        question: {
          pl: "Na pędzie są wąskie twarde liście z grubą skórką. Uczeń liczy je po dwie i mówi: „to już na pewno sosna, a nie liść”. Co poprawić?",
          ua: "На пагоні є вузькі тверді листки з товстою шкіркою. Учень рахує їх по дві і каже: «це вже точно сосна, а не листок». Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to igły, czyli liście; gatunku dziś nie nazywasz, to lekcja 28", ua: "це хвоя, тобто листки; вид сьогодні не називаєш, це урок 28" } },
          { id: "b", label: { pl: "tak — liczba igieł od razu jest nazwą gatunku", ua: "так — кількість хвоїнок одразу є назвою виду" } },
          { id: "c", label: { pl: "tak — twardy liść jest kupką zarodni", ua: "так — твердий листок є купкою спорангіїв" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Liczba igieł w pęczku jest na lekcji 28. Dziś wąski twardy organ to liść, czyli igła.",
              ua: "Кількість хвоїнок у пучку є на уроці 28. Сьогодні вузький твердий орган — це листок, тобто хвоя."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kupki zarodni są brązowymi punkcikami na spodzie liścia paproci. Igła jest liściem nagonasiennych.",
              ua: "Купки спорангіїв є коричневими крапками на споді листка папороті. Хвоя є листком голонасінних."
            }
          }
        ],
        explanation: {
          pl: "Igły są liśćmi. Gatunek drzewa rozpoznasz na lekcji 28.",
          ua: "Хвоя є листками. Вид дерева розпізнаєш на уроці 28."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy sposoby", ua: "Поняття. Три способи" },
      visual: vizGh("l27-vs-zarodniki.png", {
        alt: { pl: "Puszka mchu, kupki paproci i szyszka z nasionami", ua: "Коробочка моху, купки папороті і шишка з насінням" },
        title: { pl: "Zarodniki albo nasiona na łusce.", ua: "Спори або насіння на лусці." },
        prompt: { pl: "Plansza lekcji 27: trzy sposoby rozsiewu." }
      }),
      text: {
        pl: [
          "Mech ma chwytniki i puszkę z zarodnikami. Paproć ma kłącze, korzenie i kupki zarodni na liściu.",
          "Nagonasienne to drzewo albo krzew: igły, szyszki i nasiona na łusce. Nie potrzebują kropli wody do zapłodnienia.",
          "Szyszka nie jest owocem. Owoc osłania nasiona i należy do następnej grupy."
        ],
        ua: [
          "Мох має ризоїди і коробочку зі спорами. Папороть має кореневище, корені і купки спорангіїв на листку.",
          "Голонасінні — це дерево або кущ: хвоя, шишки і насіння на лусці. Не потребують краплі води для запліднення.",
          "Шишка не є плодом. Плід вкриває насіння і належить до наступної групи."
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
            pl: ["Mech: proszek z puszki. To zarodniki."],
            ua: ["Мох: порошок із коробочки. Це спори."]
          }
        },
        {
          text: {
            pl: ["Paproć: brązowe kupki na spodzie liścia. Też zarodniki."],
            ua: ["Папороть: коричневі купки на споді листка. Теж спори."]
          }
        },
        {
          text: {
            pl: ["Szyszka: nasiono na łusce. Ma osłonę i zapas."],
            ua: ["Шишка: насінина на лусці. Має оболонку і запас."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co się sypie", ua: "Коротке питання. Що сиплеться" },
      task: {
        id: "l27-g5",
        type: "single-choice",
        question: {
          pl: "Czym rozsiew nagonasiennych różni się od mchu i paproci?",
          ua: "Чим поширення голонасінних відрізняється від моху і папороті?"
        },
        options: [
          { id: "a", label: { pl: "nagonasienne mają nasiona; mech i paproć mają zarodniki", ua: "голонасінні мають насіння; мох і папороть мають спори" } },
          { id: "b", label: { pl: "wszystkie trzy mają nasiona w owocu", ua: "усі три мають насіння в плоді" } },
          { id: "c", label: { pl: "nagonasienne mają tylko zarodniki w puszce", ua: "голонасінні мають лише спори в коробочці" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj nasiona na łusce. Puszka i kupki dają zarodniki.",
          ua: "Шукай насінину на лусці. Коробочка і купки дають спори."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Owoc jest później. Mech i paproć rozsiewają zarodniki. Nagonasienne mają nasiona na łusce.",
              ua: "Плід є пізніше. Мох і папороть поширюють спори. Голонасінні мають насіння на лусці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka należy do mchu. Nagonasienne nie sypią zarodników z puszki. Mają nasiona.",
              ua: "Коробочка належить моху. Голонасінні не сиплють спори з коробочки. Мають насіння."
            }
          }
        ],
        explanation: {
          pl: "Nagonasienne mają nasiona. Mech i paproć rozsiewają się zarodnikami.",
          ua: "Голонасінні мають насіння. Мох і папороть поширюються спорами."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Trzy proszki", ua: "Типова помилка. Три порошки" },
      claim: {
        pl: "„Z szyszki też sypie się proszek, więc to zarodniki jak u mchu.”",
        ua: "«З шишки теж сиплеться порошок, тож це спори, як у моху.»"
      },
      text: {
        pl: [
          "Żółty proszek z małej szyszki to pyłek, nie zarodnik.",
          "Na łusce dużej szyszki leży nasiono. Zarodniki są w puszce mchu i w kupkach paproci."
        ],
        ua: [
          "Жовтий порошок із малої шишки — це пилок, не спора.",
          "На лусці великої шишки лежить насінина. Спори є в коробочці моху і в купках папороті."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Trzy proszki", ua: "Сам. Три порошки" },
      task: {
        id: "l27-p5",
        type: "single-choice",
        question: {
          pl: "Na stole leżą: puszka mchu, liść paproci z kupkami i łuska z nasionem. Uczeń mówi, że wszystkie trzy proszki są tym samym zarodnikiem. Co poprawić?",
          ua: "На столі лежать: коробочка моху, листок папороті з купками і луска з насіниною. Учень каже, що всі три порошки є тією самою спорою. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "puszka i kupki dają zarodniki; na łusce jest nasiono z osłoną i zapasem", ua: "коробочка і купки дають спори; на лусці є насінина з оболонкою і запасом" } },
          { id: "b", label: { pl: "tak — nasiono na łusce jest puszką mchu", ua: "так — насінина на лусці є коробочкою моху" } },
          { id: "c", label: { pl: "tak — wszystkie trzy są już owocem jabłoni", ua: "так — усі три вже є плодом яблуні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka jest u mchu i ma zarodniki. Na łusce leży nasiono. Ma osłonę i zapas, których zarodnik nie ma.",
              ua: "Коробочка є в моху і має спори. На лусці лежить насінина. Має оболонку і запас, яких спора не має."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Owoc jabłoni jest później i osłania nasiona. Dziś puszka i kupki to zarodniki, a łuska trzyma nagie nasiono.",
              ua: "Плід яблуні є пізніше і вкриває насіння. Сьогодні коробочка і купки — це спори, а луска тримає голу насінину."
            }
          }
        ],
        explanation: {
          pl: "Mech i paproć mają zarodniki. Na łusce jest nasiono.",
          ua: "Мох і папороть мають спори. На лусці є насінина."
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
      heading: { pl: "Sprawdzian 1. Łuska", ua: "Перевірка 1. Луска" },
      task: {
        id: "l27-t1",
        type: "single-choice",
        question: {
          pl: "Na łusce otwartej szyszki leży nasiono ze skrzydełkiem. Uczeń wkłada je do rysunku jabłka, „bo każde nasiono mieszka w owocu”. Co pasuje do lekcji?",
          ua: "На лусці відкритої шишки лежить насінина з крильцем. Учень кладе її на малюнок яблука, «бо кожна насінина живе в плоді». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "zostaje na łusce: nasiono jest nagie, owoc jest później", ua: "лишається на лусці: насінина гола, плід є пізніше" } },
          { id: "b", label: { pl: "tak — skrzydełko zamienia łuskę w miąższ jabłka", ua: "так — крильце перетворює луску на м’якоть яблука" } },
          { id: "c", label: { pl: "tak — nasiono na łusce jest zarodnikiem z puszki", ua: "так — насінина на лусці є спорою з коробочки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzydełko nie robi owocu. Nasiono leży nago na łusce. Jabłko osłania nasiona i jest późniejszą grupą.",
              ua: "Крильце не робить плід. Насінина лежить голо на лусці. Яблуко вкриває насіння і є пізнішою групою."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zarodnik z puszki nie ma osłony i zapasu nasiona. Na łusce leży nasiono nagonasiennych.",
              ua: "Спора з коробочки не має оболонки і запасу насінини. На лусці лежить насінина голонасінних."
            }
          }
        ],
        explanation: {
          pl: "Nasiono na łusce jest nagie. Nie mieszka w jabłku.",
          ua: "Насінина на лусці є голою. Не живе в яблуці."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Dwie wielkości", ua: "Перевірка 2. Два розміри" },
      task: {
        id: "l27-t2",
        type: "single-choice",
        question: {
          pl: "Na jednym drzewie są małe miękkie szyszki z żółtym pyłkiem i jedna duża, zdrewniała. Uczeń mówi, że małe to kwiat, a duża to owoc. Co pasuje do lekcji?",
          ua: "На одному дереві є малі м’які шишки з жовтим пилком і одна велика, здерев’яніла. Учень каже, що малі — це квітка, а велика — це плід. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "małe są męskie i dają pyłek; duża jest żeńska i ma nasiona na łuskach; to nie kwiat i nie owoc", ua: "малі є чоловічими і дають пилок; велика є жіночою і має насіння на лусках; це не квітка і не плід" } },
          { id: "b", label: { pl: "tak — miękka szyszka zawsze jest kwiatem jabłoni", ua: "так — м’яка шишка завжди є квіткою яблуні" } },
          { id: "c", label: { pl: "tak — zdrewniała szyszka jest kłosem zboża", ua: "так — здерев’яніла шишка є колоском збіжжя" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kwiatu na tej lekcji nie ma. Mała szyszka wytwarza pyłek. Duża żeńska trzyma nasiona na łuskach.",
              ua: "Квітки на цьому уроці немає. Мала шишка виробляє пилок. Велика жіноча тримає насіння на лусках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kłos zboża nie jest szyszką. Zdrewniała szyszka jest żeńska. Nasiona leżą na łuskach, nie w owocu.",
              ua: "Колосок збіжжя не є шишкою. Здерев’яніла шишка є жіночою. Насіння лежить на лусках, не в плоді."
            }
          }
        ],
        explanation: {
          pl: "Są dwie szyszki: pyłek albo nasiona. Żadna nie jest kwiatem ani owocem.",
          ua: "Є дві шишки: пилок або насіння. Жодна не є квіткою і не є плодом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Suchy las", ua: "Перевірка 3. Сухий ліс" },
      task: {
        id: "l27-t3",
        type: "single-choice",
        question: {
          pl: "W suchym lesie wiatr niesie żółty pyłek na dużą szyszkę. Uczeń czeka na kroplę wody, „bo bez niej nie ma zapłodnienia, jak u paproci”. Co pasuje do lekcji?",
          ua: "У сухому лісі вітер несе жовтий пилок на велику шишку. Учень чекає на краплю води, «бо без неї немає запліднення, як у папороті». Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "tu zapylenie robi wiatr; kropla wody jest u mchu i paproci", ua: "тут запилення робить вітер; крапля води є в моху і папороті" } },
          { id: "b", label: { pl: "tak — pyłek musi popłynąć w deszczu", ua: "так — пилок мусить поплисти в дощі" } },
          { id: "c", label: { pl: "tak — w suchym lesie pyłek niesie pszczoła do kwiatu", ua: "так — у сухому лісі пилок несе бджола до квітки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Deszcz nie jest tu przenośnikiem. Pyłek leci z wiatrem na szyszkę żeńską. Kropla wody służy mchom i paprociom.",
              ua: "Дощ тут не є перевізником. Пилок летить із вітром на жіночу шишку. Крапля води служить мохам і папоротям."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pszczoła i kwiat są później. W suchym lesie zapylenie nagonasiennych robi wiatr.",
              ua: "Бджола і квітка є пізніше. У сухому лісі запилення голонасінних робить вітер."
            }
          }
        ],
        explanation: {
          pl: "Wiatr przenosi pyłek. Kropla wody nie jest do tego potrzebna.",
          ua: "Вітер переносить пилок. Крапля води для цього не потрібна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Wąskie liście", ua: "Перевірка 4. Вузькі листки" },
      task: {
        id: "l27-t4",
        type: "single-choice",
        question: {
          pl: "Drzewo ma wąskie twarde liście i zimą zostaje zielone. Uczeń mówi, że to nie liście, tylko młode szyszki, i od razu nazywa drzewo świerkiem. Co pasuje do lekcji?",
          ua: "Дерево має вузькі тверді листки і взимку лишається зеленим. Учень каже, що це не листки, лише молоді шишки, і одразу називає дерево ялиною. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to igły, czyli liście; gatunku nie nazywasz, to lekcja 28", ua: "це хвоя, тобто листки; вид не називаєш, це урок 28" } },
          { id: "b", label: { pl: "tak — każda zielona igła jest szyszką żeńską", ua: "так — кожна зелена хвоїнка є жіночою шишкою" } },
          { id: "c", label: { pl: "tak — zimowa zieleń znaczy, że to paproć z pastorałem", ua: "так — зимова зелень означає, що це папороть із патерицею" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka żeńska drewnieje i ma nasiona na łuskach. Wąski zielony organ na pędzie to liść, czyli igła.",
              ua: "Жіноча шишка дерев’яніє і має насіння на лусках. Вузький зелений орган на пагоні — це листок, тобто хвоя."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pastorał to młody zwinięty liść paproci. Igła jest liściem nagonasiennych. Nazwę świerka zostawiasz na lekcję 28.",
              ua: "Патериця — це молодий згорнутий листок папороті. Хвоя є листком голонасінних. Назву ялини лишаєш на урок 28."
            }
          }
        ],
        explanation: {
          pl: "Igły są liśćmi. Gatunek drzewa jest na lekcji 28.",
          ua: "Хвоя є листками. Вид дерева є на уроці 28."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Trzy rośliny", ua: "Перевірка 5. Три рослини" },
      task: {
        id: "l27-t5",
        type: "single-choice",
        question: {
          pl: "Obok siebie stoją mech z puszką, paproć z kupkami i drzewo z szyszką. Uczeń mówi, że drzewo też rozsiewa się zarodnikami i czeka na kroplę wody. Co pasuje do lekcji?",
          ua: "Поруч стоять мох із коробочкою, папороть із купками і дерево з шишкою. Учень каже, що дерево теж поширюється спорами і чекає на краплю води. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "mech i paproć mają zarodniki; drzewo ma nasiona na łusce, a pyłek niesie wiatr", ua: "мох і папороть мають спори; дерево має насіння на лусці, а пилок несе вітер" } },
          { id: "b", label: { pl: "tak — szyszka jest puszką, więc drzewo jest mchem", ua: "так — шишка є коробочкою, тож дерево є мохом" } },
          { id: "c", label: { pl: "tak — wszystkie trzy chowają nasiona w jabłku", ua: "так — усі три ховають насіння в яблуці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Puszka należy do mchu i ma zarodniki. Szyszka ma nasiona na łuskach. Pyłek niesie wiatr, nie kropla wody.",
              ua: "Коробочка належить моху і має спори. Шишка має насіння на лусках. Пилок несе вітер, не крапля води."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jabłko jest owocem z późniejszej grupy. Mech i paproć mają zarodniki. Nagonasienne mają nagie nasiona.",
              ua: "Яблуко є плодом із пізнішої групи. Мох і папороть мають спори. Голонасінні мають голе насіння."
            }
          }
        ],
        explanation: {
          pl: "Mech i paproć rozsiewają zarodniki. Drzewo ma nasiona, a pyłek niesie wiatr.",
          ua: "Мох і папороть поширюють спори. Дерево має насіння, а пилок несе вітер."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l27-vs-zarodniki.png", {
        alt: { pl: "Puszka, kupki i szyszka z nasionami", ua: "Коробочка, купки і шишка з насінням" },
        title: { pl: "Nasiona na łusce.", ua: "Насіння на лусці." },
        prompt: { pl: "Ta sama plansza trzech sposobów rozsiewu." }
      }),
      text: {
        pl: [
          "Nasiona nagonasiennych leżą nago na łusce szyszki, nie w owocu. Mają osłonę i zapas.",
          "Szyszka męska daje pyłek, żeńska ma nasiona. To nie kwiat.",
          "Pyłek niesie wiatr. Kropla wody jest u mchu i paproci.",
          "Igły to liście. Gatunki drzew są na lekcji 28. Kwiat i owoc przyjdą później."
        ],
        ua: [
          "Насіння голонасінних лежить голо на лусці шишки, не в плоді. Має оболонку і запас.",
          "Чоловіча шишка дає пилок, жіноча має насіння. Це не квітка.",
          "Пилок несе вітер. Крапля води є в моху і папороті.",
          "Хвоя — це листки. Види дерев є на уроці 28. Квітка і плід прийдуть пізніше."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, że nasiono leży nago na łusce, nie w owocu.", ua: "Поясню, що насінина лежить голо на лусці, не в плоді." },
        { pl: "Odróżnię szyszkę męską od żeńskiej i nie nazwę ich kwiatem.", ua: "Відрізню чоловічу шишку від жіночої і не назву їх квіткою." },
        { pl: "Powiem, że pyłek niesie wiatr.", ua: "Скажу, що пилок несе вітер." },
        { pl: "Powiem, że igły to liście, a gatunki są na lekcji 28.", ua: "Скажу, що хвоя — це листки, а види є на уроці 28." },
        { pl: "Porównam nasiona z zarodnikami mchu i paproci.", ua: "Порівняю насіння зі спорами моху і папороті." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
