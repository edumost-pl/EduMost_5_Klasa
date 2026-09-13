function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Przypowieść o maku", ua: "Притча про мак" },
      formula: "Czesław Miłosz  ·  s. 26  ·  lekcja 10 z 11",
      promptPlace: "before",
      prompt: {
        pl: "Dwa tematy, jeden wiersz. Dziś czytamy i nazywamy: przypowieść, strofa, wers, rym, znaczenie słów. Ilustracja i wystawa — następna lekcja (s. 27).",
        ua: "Два уроки, один вірш. Сьогодні читаємо і називаємо терміни. Ілюстрація і виставка — наступний урок (с. 27)."
      },
      items: [
        { pl: "wskażę cechy przypowieści z rysunku na s. 26;", ua: "вкажу риси притчі з малюнка на с. 26;" },
        { pl: "zrelacjonuję treść wiersza;", ua: "перекажу зміст вірша;" },
        { pl: "użyję słów: strofa, wers, rym;", ua: "вживатиму слова: strofa, wers, rym;" },
        { pl: "odczytam, co w wierszu mogą znaczyć ogród, makówka, ziarnko.", ua: "прочитаю, що можуть означати ogród, makówka, ziarnko." }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Zadanie wstępne · cechy przypowieści", ua: "Вступне · риси притчі" },
      formula: "s. 26  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Podręcznik: na podstawie wypowiedzi przedstawionych osób zapisz w zeszycie cechy przypowieści. Najpierw sam. Potem klucz.",
        ua: "Підручник: на основі висловлювань осіб запиши в зошит риси притчі. Спочатку сам, потім ключ."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t10-zad-wstepne.png", {
            alt: {
              pl: "Dwoje osób na kocu z dymkami o krótkiej historii i pouczeniu; schemat: przypowieść",
              ua: "Двоє на пледі з хмарками про коротку історію; схема: przypowieść"
            },
            title: { pl: "Slajd · zadanie wstępne", ua: "Слайд · вступне завдання" },
            prompt: {
              pl: "Wstaw kadr ze s. 26: dwoje na kocu, popcorn, dymki, schemat «przypowieść» z trzema znakami zapytania. PNG, kadr szeroki. Przytnij znak wodny.",
              ua: "Встав малюнок зі с. 26: двоє на пледі, хмарки, схема przypowieść."
            }
          }),
          text: {
            pl: "Przeczytaj dymki na rysunku. W zeszycie: 2–3 cechy. Nie zgaduj z pamięci — z tego, co mówią osoby.",
            ua: "Прочитай хмарки. У зошит: 2–3 риси з того, що кажуть особи."
          }
        },
        {
          formula: "KLUCZ  ·  z dymków na s. 26",
          text: {
            pl: [
              "Utwór nie jest zbyt długi — krótka historia.",
              "Kto chce powiedzieć coś ważnego, opowiada historię; z niej wynika pouczenie albo uniwersalna prawda o życiu.",
              "Takie historie nazywamy przypowieściami."
            ],
            ua: [
              "Твір не надто довгий — коротка історія.",
              "Хто хоче сказати щось важливе, розповідає історію; з неї випливає повчання або універсальна правда про життя.",
              "Такі історії називаємо притчами (przypowieści)."
            ]
          }
        }
      ],
      task: {
        id: "t10-s02-cechy",
        type: "multiple-choice",
        question: {
          pl: "Które cechy NA PEWNO pasują do przypowieści z tego rysunku? Zaznacz wszystkie pewne.",
          ua: "Які риси НАПЕВНО пасують до притчі з цього малюнка? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Krótka historia.", ua: "Коротка історія." } },
          { id: "b", label: { pl: "Pouczenie albo uniwersalna prawda o życiu.", ua: "Повчання або універсальна правда про життя." } },
          { id: "c", label: { pl: "Musi mieć tysiąc stron i słownik na końcu.", ua: "Має мати тисячу сторінок і словник наприкінці." } },
          { id: "d", label: { pl: "To tylko przepis na makowiec.", ua: "Це лише рецепт маковника." } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Co osoby lubią w utworze? Co wynika z historii?",
          ua: "Що особи люблять у творі? Що випливає з історії?"
        },
        explanation: {
          pl: "Z dymków: krótki utwór i pouczenie / uniwersalna prawda. Nie powieść-cegła i nie przepis kuchenny.",
          ua: "З хмарок: короткий твір і повчання / правда про життя."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
      formula: "Czesław Miłosz  ·  Przypowieść o maku",
      visual: {
        kind: "youtube",
        id: "CnHYwRzfd-I",
        title: {
          pl: "Posłuchaj: Czesław Miłosz „Przypowieść o maku”",
          ua: "Послухай: Czesław Miłosz «Przypowieść o maku»"
        }
      },
      promptPlace: "before",
      prompt: {
        pl: "Najpierw posłuchaj nagrania. Potem przeczytaj wiersz dwa razy. 1) Co się dzieje? 2) Co jest małe, a co ogromne? Wiersza nie tłumaczymy na ukraiński.",
        ua: "Спочатку послухай запис. Потім прочитай вірш двічі. 1) Що діється? 2) Що мале, а що величезне? Вірш не перекладаємо."
      },
      text: {
        pl: [
          "Na ziarnku maku stoi mały dom,",
          "Pieski szczekają na księżyc makowy",
          "I nigdy jeszcze tym makowym psom,",
          "Że jest świat większy, nie przyszło do głowy.",
          " ",
          "Ziemia to ziarnko – naprawdę nie więcej,",
          "A inne ziarnka – planety i gwiazdy,",
          "A choć ich będzie chyba sto tysięcy,",
          "Domek z ogrodem może stać na każdej.",
          " ",
          "Wszystko w makówce. Mak rośnie w ogrodzie,",
          "Dzieci biegają i mak się kołysze.",
          "A wieczorami, o księżyca wschodzie",
          "Psy gdzieś szczekają, to głośniej, to ciszej."
        ]
      },
      task: {
        id: "t10-s03-gdzie",
        type: "single-choice",
        question: {
          pl: "Gdzie — według pierwszej strofy — stoi mały dom?",
          ua: "Де — за першою строфою — стоїть маленький дім?"
        },
        options: [
          { id: "a", label: { pl: "Na ziarnku maku.", ua: "На зерні маку." } },
          { id: "b", label: { pl: "Na dachu szkoły Jerzego.", ua: "На даху школи Єжи." } },
          { id: "c", label: { pl: "Na Księżycu, w kraterze.", ua: "На Місяці, в кратері." } }
        ],
        answer: "a",
        hint: {
          pl: "Pierwszy wers. Palcem w tekście.",
          ua: "Перший рядок. Пальцем у тексті."
        },
        explanation: {
          pl: "„Na ziarnku maku stoi mały dom”. Księżyc jest makowy — psy na niego szczekają — ale dom stoi na ziarnku.",
          ua: "«На ziarnku maku стоїть малий дім»."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Relacja · o czym jest wiersz?", ua: "Переказ · про що вірш?" },
      formula: "USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Zrelacjonuj treść: powiedz krótko, co się dzieje w każdej strofie. Potem zaznacz, co jest w tekście.",
        ua: "Перекажи зміст: що діється в кожній строфі. Потім познач, що є в тексті."
      },
      text: {
        pl: [
          "Strofa 1: domek na ziarnku, pieski i księżyc makowy — psy nie wiedzą, że świat jest większy.",
          "Strofa 2: Ziemia to ziarnko; inne ziarnka to planety i gwiazdy.",
          "Strofa 3: wszystko w makówce; mak w ogrodzie, dzieci, wieczorne szczekanie."
        ],
        ua: [
          "Строфа 1: хатинка на зерні, песики і маковий місяць.",
          "Строфа 2: Земля — зерня; інші зернята — планети й зірки.",
          "Строфа 3: усе в маківці; мак у саду, діти, вечірнє гавкання."
        ]
      },
      task: {
        id: "t10-s04-tresc",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest w wierszu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є у вірші? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ziemia porównana do ziarnka maku.", ua: "Земля порівняна до зерна маку." } },
          { id: "b", label: { pl: "Dzieci biegają, mak się kołysze.", ua: "Діти бігають, мак хитається." } },
          { id: "c", label: { pl: "Rakieta Apollo i komputer Kosmos.", ua: "Ракета Apollo і комп’ютер Космос." } },
          { id: "d", label: { pl: "Psy szczekają — to głośniej, to ciszej.", ua: "Пси гавкають — то гучніше, то тихіше." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Kosmos i Apollo były w innych lekcjach. Co jest palcem w tym wierszu?",
          ua: "Космос і Apollo були на інших уроках. Що є пальцем у цьому вірші?"
        },
        explanation: {
          pl: "W wierszu: Ziemia = ziarnko, dzieci i mak, psy. Komputer Kosmos to fragment Hawkingów, nie Miłosz.",
          ua: "У вірші: Земля = зерня, діти і мак, пси. Комп’ютер Космос — з Гокінгів."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Strofa, wers, rym", ua: "Строфа, рядок, рима" },
      formula: "3 strofy  ·  4 wersy  ·  rym co drugi wers",
      promptPlace: "before",
      prompt: {
        pl: "Te trzy słowa są w programie. Nie zgaduj — policz w wierszu.",
        ua: "Ці три слова в програмі. Не вгадуй — полічи у вірші."
      },
      text: {
        pl: [
          ["", em("Wers"), " — jeden wierszowy wiersz, jedna linijka. Pierwszy wers: „Na ziarnku maku stoi mały dom,”"],
          ["", em("Strofa"), " — grupa wersów oddzielona pustą linią. Tu są trzy strofy, każda ma cztery wersy."],
          ["", em("Rym"), " — podobne brzmienie końcówek. W 1. strofie: *dom* — *psom*; *makowy* — *głowy*."]
        ],
        ua: [
          [em("Wers"), " — один рядок вірша."],
          [em("Strofa"), " — група рядків. Тут три строфи по чотири рядки."],
          [em("Rym"), " — схожі закінчення: dom — psom; makowy — głowy."]
        ]
      },
      task: {
        id: "t10-s05-terminy",
        type: "single-choice",
        question: {
          pl: "Ile strof ma ten wiersz i ile wersów ma każda strofa?",
          ua: "Скільки строф у цьому вірші і скільки рядків у кожній?"
        },
        options: [
          { id: "a", label: { pl: "Trzy strofy po cztery wersy.", ua: "Три строфи по чотири рядки." } },
          { id: "b", label: { pl: "Jedna strofa i dwadzieścia wersów.", ua: "Одна строфа і двадцять рядків." } },
          { id: "c", label: { pl: "Nie ma strof, bo to proza o maku.", ua: "Немає строф, бо це проза про мак." } }
        ],
        answer: "a",
        hint: {
          pl: "Policz puste linie między grupami. Potem policz linijki w jednej grupie.",
          ua: "Полічи порожні рядки між групами. Потім рядки в одній групі."
        },
        explanation: {
          pl: "Trzy zwrotki, w każdej cztery linijki. To nie opowiadanie w prozie.",
          ua: "Три строфи, у кожній чотири рядки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Strofa 1 · mały świat", ua: "Строфа 1 · малий світ" },
      formula: "wersy 1–4",
      promptPlace: "before",
      prompt: {
        pl: "Pieski, domek, księżyc makowy. Kto nie wie, że świat jest większy?",
        ua: "Песики, хатинка, маковий місяць. Хто не знає, що світ більший?"
      },
      text: {
        pl: [
          "Na ziarnku maku stoi mały dom,",
          "Pieski szczekają na księżyc makowy",
          "I nigdy jeszcze tym makowym psom,",
          "Że jest świat większy, nie przyszło do głowy."
        ]
      },
      task: {
        id: "t10-s06-psy",
        type: "true-false",
        question: {
          pl: "Czy makowym psom przyszło do głowy, że świat jest większy?",
          ua: "Чи маковим псам спало на думку, що світ більший?"
        },
        answer: false,
        hint: {
          pl: "Przeczytaj wersy 3–4: „nigdy jeszcze … nie przyszło do głowy”.",
          ua: "Прочитай рядки 3–4: «nigdy jeszcze … nie przyszło do głowy»."
        },
        explanation: {
          pl: "Tekst: nigdy jeszcze tym psom nie przyszło do głowy, że świat jest większy.",
          ua: "Текст: псам ніколи не спадало на думку, що світ більший."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Strofa 2 · Ziemia to ziarnko", ua: "Строфа 2 · Земля — зерня" },
      formula: "wersy 5–8  ·  Porównać kosmos do…",
      promptPlace: "before",
      prompt: {
        pl: "Tytuł rozdziału: *Porównać kosmos do…* Tu Miłosz porównuje kosmos do maku.",
        ua: "Заголовок розділу: *Porównać kosmos do…* Тут Мілош порівнює космос із маком."
      },
      text: {
        pl: [
          "Ziemia to ziarnko – naprawdę nie więcej,",
          "A inne ziarnka – planety i gwiazdy,",
          "A choć ich będzie chyba sto tysięcy,",
          "Domek z ogrodem może stać na każdej."
        ]
      },
      task: {
        id: "t10-s07-ziemia",
        type: "single-choice",
        question: {
          pl: "Czym — według tej strofy — jest Ziemia?",
          ua: "Чим — за цією строфою — є Земля?"
        },
        options: [
          { id: "a", label: { pl: "Ziarnkiem maku (naprawdę nie więcej); inne ziarnka to planety i gwiazdy.", ua: "Зерням маку (справді не більше); інші зернята — планети й зірки." } },
          { id: "b", label: { pl: "Największą gwiazdą we Wszechświecie.", ua: "Найбільшою зіркою у Всесвіті." } },
          { id: "c", label: { pl: "Tylko makówką bez ziaren.", ua: "Лише маківкою без зерен." } }
        ],
        answer: "a",
        hint: {
          pl: "Pierwszy wers tej strofy. Potem: inne ziarnka.",
          ua: "Перший рядок цієї строфи. Потім: inne ziarnka."
        },
        explanation: {
          pl: "„Ziemia to ziarnko – naprawdę nie więcej”. Inne ziarnka: planety i gwiazdy. Na każdej może stać domek z ogrodem.",
          ua: "«Ziemia to ziarnko». Інші зернята: планети й зірки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Strofa 3 · ogród i makówka", ua: "Строфа 3 · сад і маківка" },
      formula: "wersy 9–12",
      promptPlace: "before",
      prompt: {
        pl: "Tu wracamy do ogrodu, w którym rośnie mak. „Wszystko w makówce.”",
        ua: "Тут повертаємось до саду, де росте мак. «Wszystko w makówce»."
      },
      text: {
        pl: [
          "Wszystko w makówce. Mak rośnie w ogrodzie,",
          "Dzieci biegają i mak się kołysze.",
          "A wieczorami, o księżyca wschodzie",
          "Psy gdzieś szczekają, to głośniej, to ciszej."
        ]
      },
      task: {
        id: "t10-s08-makowka",
        type: "single-choice",
        question: {
          pl: "Gdzie — według tej strofy — jest „wszystko”?",
          ua: "Де — за цією строфою — є «все»?"
        },
        options: [
          { id: "a", label: { pl: "W makówce.", ua: "У маківці." } },
          { id: "b", label: { pl: "Tylko w plecaku Jerzego.", ua: "Лише в рюкзаку Єжи." } },
          { id: "c", label: { pl: "Poza ogrodem, w supermarkecie.", ua: "Поза садом, у супермаркеті." } }
        ],
        answer: "a",
        hint: {
          pl: "Pierwsze dwa słowa strofy.",
          ua: "Перші два слова строфи."
        },
        explanation: {
          pl: "„Wszystko w makówce.” Potem: mak w ogrodzie, dzieci, psy wieczorem.",
          ua: "«Wszystko w makówce». Потім: мак у саду, діти, пси ввечері."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znaczenie: ogród, makówka, ziarnko", ua: "Значення: ogród, makówka, ziarnko" },
      formula: "sens przenośny  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Program: odczytaj symboliczne znaczenie słów. Najpierw twoja notatka. Klucz — przykład z tekstu, nie jedyna poezja-egzamin.",
        ua: "Програма: прочитай символічне значення слів. Спочатку твоя нотатка. Ключ — приклад з тексту."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie trzy hasła: ogród / makówka / ziarnko maku. Przy każdym: cytat + co to może znaczyć.",
            ua: "У зошиті три слова. Біля кожного: цитата + що може означати."
          }
        },
        {
          formula: "PRZYKŁAD  ·  z wiersza, nie jedyna dobra odpowiedź",
          text: {
            pl: [
              "ziarnko — w strofie 2: Ziemia (i inne światy: planety, gwiazdy);",
              "makówka — „Wszystko w makówce”: całość, jak Wszechświat, w którym mieszczą się ziarnka;",
              "ogród — miejsce, gdzie mak rośnie i biegają dzieci: bliski, codzienny świat."
            ],
            ua: [
              "ziarnko — Земля (і інші світи);",
              "makówka — ціле, як Всесвіт;",
              "ogród — близький щоденний світ."
            ]
          }
        }
      ],
      task: {
        id: "t10-s09-symbol",
        type: "single-choice",
        question: {
          pl: "Które wyjaśnienie trzyma się wiersza?",
          ua: "Яке пояснення тримається вірша?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ziarnko może być Ziemią; inne ziarnka — planetami i gwiazdami; makówka mieści „wszystko”.",
              ua: "Зерня може бути Землею; інші зернята — планетами й зірками; маківка вміщає «все»."
            }
          },
          { id: "b", label: { pl: "Ziarnko to na pewno tylko ciasto drożdżowe.", ua: "Зерня — це напевно лише дріжджове тісто." } },
          { id: "c", label: { pl: "Ogród w tym wierszu to dworzec kolejowy.", ua: "Сад у цьому вірші — залізничний вокзал." } }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do strofy 2 i do słów „Wszystko w makówce”.",
          ua: "Повернися до строфи 2 і до слів «Wszystko w makówce»."
        },
        explanation: {
          pl: "Sens bierzemy z tekstu: Ziemia = ziarnko; planety i gwiazdy = inne ziarnka; wszystko w makówce. Nie ciasto i nie dworzec.",
          ua: "Сенс із тексту: Земля = зерня; все в маківці."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Środki, które już widać", ua: "Засоби, які вже видно" },
      formula: "zdrobnienie  ·  porównanie",
      promptPlace: "before",
      prompt: {
        pl: "Program: wskaż poznane środki stylistyczne. Nie wymyślamy listy z liceum — tylko to, co widać w tekście.",
        ua: "Програма: вкажи відомі стилістичні засоби. Лише те, що видно в тексті."
      },
      text: {
        pl: [
          ["", em("Zdrobnienie"), " — *pieski*, *domek*: świat wygląda jak zabawka, bliski dziecku."],
          ["", em("Porównanie / utożsamienie"), " — *Ziemia to ziarnko*: kosmos jak mak."]
        ],
        ua: [
          [em("Зменшувальна форма"), " — pieski, domek."],
          [em("Порівняння"), " — Ziemia to ziarnko: космос як мак."]
        ]
      },
      task: {
        id: "t10-s10-srodki",
        type: "multiple-choice",
        question: {
          pl: "Które przykłady NA PEWNO są w tym wierszu? Zaznacz wszystkie pewne.",
          ua: "Які приклади НАПЕВНО є в цьому вірші? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Zdrobnienia: pieski, domek.", ua: "Зменшувальні: pieski, domek." } },
          { id: "b", label: { pl: "Ziemia to ziarnko (porównanie kosmosu do maku).", ua: "Ziemia to ziarnko (порівняння космосу з маком)." } },
          { id: "c", label: { pl: "Apostrofa do kasztanów jak w „Preludium”.", ua: "Апострофа до каштанів, як у «Preludium»." } },
          { id: "d", label: { pl: "Słowo makówka w ostatniej strofie.", ua: "Слово makówka в останній строфі." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy Miłosz woła „kasztany”? Gdzie jest słowo makówka?",
          ua: "Чи Мілош кличе «kasztany»? Де слово makówka?"
        },
        explanation: {
          pl: "Są pieski i domek, Ziemia = ziarnko, makówka. Apostrofa do kasztanów to Lechoń, inna lekcja.",
          ua: "Є pieski і domek, Земля = зерня, makówka. Апострофа до каштанів — Лехонь."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Krótko. Czesław Miłosz, Przypowieść o maku (Świat, Ocalenie, 1945). Przypowieść: krótka historia + pouczenie. 3 strofy × 4 wersy. Ziemia = ziarnko; wszystko w makówce. Jutro: ilustracja i wystawa (s. 27).",
        ua: "Коротко. Мілош, притча. Коротка історія + повчання. 3×4 рядки. Земля = зерня. Завтра: ілюстрація (с. 27)."
      },
      items: [
        { pl: "Przypowieść = krótka historia z pouczeniem / uniwersalną prawdą.", ua: "Притча = коротка історія з повчанням." },
        { pl: "Wers · strofa · rym — policzone w tym wierszu.", ua: "Wers · strofa · rym — полічені в цьому вірші." },
        { pl: "Ziarnko / makówka / ogród — znaczenie z tekstu, nie z zgadywania.", ua: "Ziarnko / makówka / ogród — значення з тексту." }
      ],
      task: {
        id: "t10-s11-notatka",
        type: "single-choice",
        question: {
          pl: "Jaką notatkę zostawiasz po tej lekcji?",
          ua: "Яку нотатку лишаєш після цього уроку?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Miłosz, trzy strofy. Przypowieść: krótka historia + pouczenie. Ziemia jak ziarnko maku.",
              ua: "Мілош, три строфи. Притча: коротка історія + повчання. Земля як зерня маку."
            }
          },
          { id: "b", label: { pl: "To była tylko lekcja o rz niewymiennym.", ua: "Це був лише урок про rz незмінне." } },
          { id: "c", label: { pl: "Miłosz napisał instrukcję sadzenia maku na Marsie.", ua: "Мілош написав інструкцію садіння маку на Марсі." } }
        ],
        answer: "a",
        hint: {
          pl: "Co było tematem? Wiersz czy ortografia?",
          ua: "Яка була тема? Вірш чи орфографія?"
        },
        explanation: {
          pl: "Dziś: wiersz, przypowieść, budowa, znaczenie. Ćwiczenia plastyczne — lekcja 11.",
          ua: "Сьогодні: вірш і терміни. Пластичні вправи — урок 11."
        }
      }
    }
  ]
};
