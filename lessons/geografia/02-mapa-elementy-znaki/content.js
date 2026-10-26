function em(text) {
  return { text: text, emphasis: true };
}

function img(file, altPl, altUa, titlePl, titleUa) {
  return {
    kind: "image",
    file: "./img/" + file,
    alt: { pl: altPl, ua: altUa },
    title: { pl: titlePl, ua: titleUa }
  };
}

function ph(titlePl, titleUa, promptPl, promptUa) {
  return {
    kind: "image-placeholder",
    title: { pl: titlePl, ua: titleUa },
    alt: { pl: titlePl, ua: titleUa },
    prompt: { pl: promptPl, ua: promptUa }
  };
}

window.EduMostLessonContent = {
  blocks: [
    // 01
    {
      type: "guided-practice",
      heading: { pl: "1. Fotografia i mapa", ua: "1. Фотографія і карта" },
      visual: img(
        "para-brzeg-gora.png",
        "Zdjęcie brzegu jeziora obok mapy tej samej okolicy z góry",
        "Фото берега озера поруч із картою тієї самої околиці згори",
        "To samo miejsce: z brzegu i z góry.",
        "Те саме місце: з берега і згори."
      ),
      text: {
        pl: [
          "Popatrz na dwa obrazy. Przedstawiają tę samą okolicę, ale wyglądają inaczej.",
          "Na fotografii widzisz prawdziwe obiekty tak, jak wyglądają z brzegu.",
          "Na mapie patrzysz z góry. Zamiast wszystkich szczegółów są umowne znaki."
        ],
        ua: [
          "Подивись на два зображення. Вони показують ту саму місцевість, але виглядають по-різному.",
          "На фотографії ти бачиш справжні об’єкти такими, якими вони є з берега.",
          "На карті ти дивишся згори. Замість усіх деталей є умовні знаки."
        ]
      },
      task: {
        id: "g02-s1",
        type: "single-choice",
        question: { pl: "Co przedstawia mapa?", ua: "Що зображує карта?" },
        options: [
          {
            id: "a",
            label: {
              pl: "To samo miejsce z góry, przedstawione znakami.",
              ua: "Те саме місце згори, показане знаками."
            }
          },
          {
            id: "b",
            label: { pl: "Zdjęcie zrobione z brzegu jeziora.", ua: "Фотографію, зроблену з берега озера." }
          },
          {
            id: "c",
            label: { pl: "Tylko budynki widziane z boku.", ua: "Лише будівлі, побачені збоку." }
          }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj strony obrazka. Z brzegu jest prawdziwa woda. Na kartce z góry są znaki.",
          ua: "Порівняй боки зображення. З берега є справжня вода. На аркуші згори є знаки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zdjęcie z brzegu zostaje widokiem z jednego miejsca. Wróć do prawej kartki: z której strony patrzysz.",
              ua: "Фото з берега лишається виглядом з одного місця. Повернися до правого аркуша: з якого боку ти дивишся."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na mapie jest nie tylko zabudowa z boku. Wróć do jeziora i drogi: są na kartce jako znaki.",
              ua: "На карті є не лише забудова збоку. Повернися до озера і дороги: вони є на аркуші як знаки."
            }
          }
        ],
        explanation: {
          pl: "Mapa pokazuje rozmieszczenie obiektów z góry, a nie wygląd z jednego miejsca.",
          ua: "Карта показує розташування об’єктів згори, а не вигляд з одного місця."
        }
      }
    },
    // 02
    {
      type: "guided-practice",
      heading: { pl: "2. Co to jest mapa?", ua: "2. Що таке карта?" },
      visual: img(
        "cztery-części-definicji-mapy.png"
      ),
      text: {
        pl: [[
          "",
          em("Mapa"),
          " to pomniejszony obraz powierzchni Ziemi lub jej fragmentu, przedstawiony na płaszczyźnie za pomocą umownych znaków."
        ]],
        ua: [[
          "",
          em("Карта"),
          " — це зменшене зображення поверхні Землі або її частини, представлене на площині за допомогою умовних знаків."
        ]]
      },
      items: [
        {
          pl: [[em("Pomniejszony obraz"), " — cała okolica mieści się na kartce, choć w terenie jest znacznie większa."]],
          ua: [[em("Зменшене зображення"), " — уся місцевість уміщується на аркуші, хоча на місцевості вона значно більша."]]
        },
        {
          pl: [[em("Powierzchnia Ziemi lub jej fragment"), " — mapa może pokazywać świat, kraj, region albo niewielką okolicę."]],
          ua: [[em("Поверхня Землі або її частина"), " — карта може показувати світ, країну, регіон або невелику місцевість."]]
        },
        {
          pl: [[em("Na płaszczyźnie"), " — rysunek leży na płaskiej kartce albo na ekranie."]],
          ua: [[em("На площині"), " — малюнок лежить на плоскому аркуші або на екрані."]]
        },
        {
          pl: [[em("Umowne znaki"), " — zamiast zdjęcia są ustalone symbole, linie i kolory."]],
          ua: [[em("Умовні знаки"), " — замість фотографії є усталені символи, лінії і кольори."]]
        }
      ],
      task: {
        id: "g02-s2",
        type: "single-choice",
        question: {
          pl: "Kolega mówi: „Mapa to zwykłe zdjęcie, tylko mniejsze”. Czy ma rację?",
          ua: "Товариш каже: «Карта — це звичайна фотографія, тільки менша». Чи має він рацію?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Nie. Mapa jest pomniejszona, leży na płaszczyźnie i używa znaków.",
              ua: "Ні. Карта зменшена, лежить на площині і використовує знаки."
            }
          },
          {
            id: "b",
            label: { pl: "Tak, bo każda mapa jest fotografią.", ua: "Так, бо кожна карта є фотографією." }
          },
          {
            id: "c",
            label: { pl: "Tak, bo na mapie widać wszystkie szczegóły.", ua: "Так, бо на карті видно всі деталі." }
          }
        ],
        answer: "a",
        hint: {
          pl: "Sprawdź cztery części definicji. Samo pomniejszenie nie robi ze zdjęcia mapy.",
          ua: "Перевір чотири частини визначення. Саме зменшення не робить із фотографії карту."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotografia zostaje widokiem z jednego miejsca. Wróć do znaków i do płaszczyzny.",
              ua: "Фотографія лишається виглядом з одного місця. Повернися до знаків і до площини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na mapie szczegółów jest mniej. Wróć do umownych znaków: kolor i linia zamiast prawdziwego wyglądu.",
              ua: "На карті деталей менше. Повернися до умовних знаків: колір і лінія замість справжнього вигляду."
            }
          }
        ],
        explanation: {
          pl: "Mapa nie jest fotografią. Jest pomniejszona, narysowana na płaszczyźnie i czyta się ją znakami.",
          ua: "Карта не є фотографією. Вона зменшена, намальована на площині, і її читають знаками."
        }
      }
    },
    // 03
    {
      type: "guided-practice",
      heading: { pl: "3. Tytuł, treść i legenda", ua: "3. Заголовок, зміст і легенда" },
      visual: img(
        "mapa-jeziorko.png",
        "Mapa z tytułem przy legendzie, jeziorem i znakami",
        "Карта із заголовком біля легенди, озером і знаками",
        "Szukaj nazwy całego obszaru, obiektów i objaśnienia znaków.",
        "Шукай назву всієї території, об’єкти і пояснення знаків."
      ),
      text: {
        pl: [
          ["", em("Tytuł"), " nazywa cały obszar. Na tej mapie stoi przy legendzie."],
          ["", em("Treść mapy"), " to ważne obiekty pokazane znakami: jezioro, ulice, kościoły, szkoły."],
          ["", em("Legenda"), " zestawia znak z jego nazwą. Bez niej zgadujesz. Z nią czytasz."],
          "Napis na wodzie to nazwa jednego obiektu. To jeszcze nie tytuł całej mapy.",
          "Pasek z metrami na dole to skala. Dziś go nie liczymy. Skala będzie następną lekcją."
        ],
        ua: [
          ["", em("Заголовок"), " називає всю територію. На цій карті він стоїть біля легенди."],
          ["", em("Зміст карти"), " — це важливі об’єкти, показані знаками: озеро, вулиці, костели, школи."],
          ["", em("Легенда"), " ставить знак поруч із його назвою. Без неї ти вгадуєш. З нею читаєш."],
          "Напис на воді — це назва одного об’єкта. Це ще не заголовок усієї карти.",
          "Смужка з метрами внизу — це масштаб. Сьогодні її не рахуємо. Масштаб буде наступним уроком."
        ]
      },
      task: {
        id: "g02-s3",
        type: "single-choice",
        question: { pl: "Co jest tytułem tej mapy?", ua: "Що є заголовком цієї карти?" },
        options: [
          {
            id: "a",
            label: {
              pl: "Napis przy legendzie, który nazywa cały obszar.",
              ua: "Напис біля легенди, який називає всю територію."
            }
          },
          {
            id: "b",
            label: { pl: "Wiersz legendy przy krzyżu.", ua: "Рядок легенди біля хреста." }
          },
          {
            id: "c",
            label: { pl: "Nazwa jednej ulicy na mapie.", ua: "Назва однієї вулиці на карті." }
          }
        ],
        answer: "a",
        hint: {
          pl: "Tytuł nazywa cały obszar. Jeden wiersz legendy tłumaczy tylko jeden znak.",
          ua: "Заголовок називає всю територію. Один рядок легенди пояснює лише один знак."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiersz przy krzyżu tłumaczy jeden znak. Wróć do napisu, który nazywa całą okolicę.",
              ua: "Рядок біля хреста пояснює один знак. Повернися до напису, який називає всю околицю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ulica jest obiektem w treści mapy. Wróć do nazwy całego obszaru przy legendzie.",
              ua: "Вулиця є об’єктом у змісті карти. Повернися до назви всієї території біля легенди."
            }
          }
        ],
        explanation: {
          pl: "Tytuł nazywa cały obszar i stoi przy legendzie. Krzyż i ulica należą do treści albo do legendy.",
          ua: "Заголовок називає всю територію і стоїть біля легенди. Хрест і вулиця належать до змісту або до легенди."
        }
      }
    },
    // 04   
    {
      type: "guided-practice",
      heading: { pl: "4. Trzy grupy znaków", ua: "4. Три групи знаків" },
      visual: img(
        "schemat-znaki.png",
        "Schemat trzech grup: punkt, linia i plama",
        "Схема трьох груп: точка, лінія і пляма",
        "To zasada, nie mapa miasta.",
        "Це правило, не карта міста."
      ),
      text: {
        pl: [
          "Ramka to schemat zasady. To nie jest mapa miasta.",
          ["", em("Znak punktowy"), " oznacza jedno miejsce. Krzyż kościoła jest punktowy."],
          ["", em("Znak liniowy"), " ma długość. Droga jest liniowa."],
          ["", em("Znak powierzchniowy"), " zajmuje obszar. Jezioro jest niebieską plamą."],
          "Najpierw czytasz słowo w legendzie. Potem szukasz takiego samego znaku na mapie."
        ],
        ua: [
          "Рамка — це схема правила. Це не карта міста.",
          ["", em("Точковий знак"), " означає одне місце. Хрест костелу є точковим."],
          ["", em("Лінійний знак"), " має довжину. Дорога є лінійною."],
          ["", em("Площинний знак"), " займає площу. Озеро є блакитною плямою."],
          "Спочатку читаєш слово в легенді. Потім шукаєш такий самий знак на карті."
        ]
      },
      task: {
        id: "g02-s4",
        type: "single-choice",
        question: {
          pl: "Który znak jest punktowy i dlaczego?",
          ua: "Який знак є точковим і чому?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Krzyż, bo oznacza jedno miejsce.", ua: "Хрест, бо означає одне місце." }
          },
          {
            id: "b",
            label: { pl: "Niebieska plama, bo jest szeroka.", ua: "Блакитна пляма, бо вона широка." }
          },
          {
            id: "c",
            label: { pl: "Pomarańczowa kreska, bo leży na kartce.", ua: "Помаранчева риса, бо лежить на аркуші." }
          }
        ],
        answer: "a",
        hint: {
          pl: "Punkt to jedno miejsce. Plama zajmuje obszar. Kreska ma długość.",
          ua: "Точка — це одне місце. Пляма займає площу. Риса має довжину."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szeroka plama zajmuje obszar. Wróć do znaku, który wskazuje jedno miejsce.",
              ua: "Широка пляма займає площу. Повернися до знака, який вказує одне місце."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kreska ma długość, więc jest liniowa. Wróć do znaku jednego miejsca.",
              ua: "Риса має довжину, тож вона лінійна. Повернися до знака одного місця."
            }
          }
        ],
        explanation: {
          pl: "Krzyż oznacza jedno miejsce, więc jest znakiem punktowym. Plama to obszar, kreska to linia.",
          ua: "Хрест означає одне місце, тож це точковий знак. Пляма — це площа, риса — це лінія."
        }
      }
    },
    // 05
    {
      type: "summary",
      heading: { pl: "5. Co zapamiętuję", ua: "5. Що я запам’ятовую" },
      visual: img(
        "mapa-elementy-trzy_grupy_ znaków.png"
      ),
      
      items: [
        {
          pl: "**`Mapa** to pomniejszony obraz terenu na płaszczyźnie, narysowany znakami.",
          ua: "Карта — це зменшене зображення місцевості на площині, намальоване знаками."
        },
        {
          pl: "*Tytuł* nazywa obszar. *Treść* to obiekty. *Legenda* tłumaczy znaki.",
          ua: "Заголовок називає територію. Зміст — це об’єкти. Легенда пояснює знаки."
        },
        {
          pl: "*Punkt* — jedno miejsce. *Linia* — długość. *Plama* — obszar.",
          ua: "Точка — одне місце. Лінія — довжина. Пляма — площа."
        },
        {
          pl: "Najpierw słowo w legendzie, potem taki sam znak na mapie.",
          ua: "Спочатку слово в легенді, потім такий самий знак на карті."
        }
      ]
    },
     // 06
    {
      type: "practice",
      heading: { pl: "6. Nowy plan: tytuł, treść, legenda", ua: "6. Новий план: заголовок, зміст, легенда" },
      visual: img(
        "praktyka-plan-legenda.png",
        "Plan starego miasta: tytuł u góry, legenda i rysunek ulic",
        "План старого міста: заголовок згори, легенда і малюнок вулиць",
        "Najpierw nazwa u góry, potem znaki, potem ulice.",
        "Спочатку назва згори, потім знаки, потім вулиці."
      ),
      text: {
        pl: [
          "To nowy rysunek tej samej okolicy: plan starego miasta. Odpowiedź nie jest zakreślona.",
          "Znajdź tytuł u góry, legendę ze znakami i treść: ulice oraz budynki na planie.",
          "Pasek 0–400 m to skala. Dziś nie liczysz metrów.",
          "Plan i legendę narysował Marcin N."
        ],
        ua: [
          "Це новий малюнок тієї самої околиці: план старого міста. Відповідь не обведена.",
          "Знайди заголовок згори, легенду зі знаками і зміст: вулиці та будівлі на плані.",
          "Смужка від нуля до чотирьохсот метрів — це масштаб. Сьогодні ти не рахуєш метри.",
          "План і легенду намалював інший автор."
        ]
      },
      task: {
        id: "g02-s6",
        type: "single-choice",
        question: {
          pl: "Co jest tytułem tego planu i po co jest legenda?",
          ua: "Що є заголовком цього плану і навіщо легенда?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Tytuł to nazwa miasta i starego miasta u góry. Legenda mówi, co oznacza każdy znak.",
              ua: "Заголовок — це назва міста і старого міста згори. Легенда каже, що означає кожен знак."
            }
          },
          {
            id: "b",
            label: { pl: "Tytuł to piłka, bo stoi w legendzie.", ua: "Заголовок — це м’яч, бо він стоїть у легенді." }
          },
          {
            id: "c",
            label: { pl: "Tytuł to pasek z metrami.", ua: "Заголовок — це смужка з метрами." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Piłka jest jednym znakiem w legendzie. Wróć do dużego napisu u góry: on nazywa cały plan.",
              ua: "М’яч є одним знаком у легенді. Повернися до великого напису згори: він називає весь план."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasek z metrami to skala. Dziś go nie liczysz. Wróć do napisu, który nazywa obszar.",
              ua: "Смужка з метрами — це масштаб. Сьогодні ти її не рахуєш. Повернися до напису, який називає територію."
            }
          }
        ],
        explanation: {
          pl: "Tytuł nazywa plan. Legenda tłumaczy znaki, więc nie trzeba zgadywać, co oznacza piłka albo krzyż.",
          ua: "Заголовок називає план. Легенда пояснює знаки, тож не треба вгадувати, що означає м’яч або хрест."
        }
      }
    },
    
    {
      type: "practice",
      heading: { pl: "7. Podziel znaki na grupy", ua: "7. Розподіли знаки на групи" },
      visual: img(
        "plan-miasto.png",
        "Plan z pomarańczową linią oznaczoną numerem 16",
        "План із помаранчевою лінією, позначеною номером 16",
        "Popatrz na pomarańczową linię.",
        "Подивись на помаранчеву лінію."
      ),
      text: {
        pl: ["Na planie jest pomarańczowa linia z numerem 16. Nie patrz na kolor. Patrz, jaki kształt ma znak."],
        ua: ["На плані є помаранчева лінія з номером 16. Не дивись на колір. Дивись, яку форму має знак."]
      },
      task: {
        id: "g02-s7",
        type: "single-choice",
        question: {
          pl: "Dlaczego ta linia jest znakiem liniowym?",
          ua: "Чому ця лінія є лінійним знаком?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Bo ma długość i łączy miejsca na planie.", ua: "Бо має довжину і з’єднує місця на плані." }
          },
          {
            id: "b",
            label: { pl: "Bo numer 16 jest jednym punktem.", ua: "Бо номер 16 є однією точкою." }
          },
          {
            id: "c",
            label: { pl: "Bo pomarańczowy kolor zajmuje obszar jak jezioro.", ua: "Бо помаранчевий колір займає площу, як озеро." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Numer leży na linii, ale znakiem jest sama linia. Wróć do tego, czy znak ma długość.",
              ua: "Номер лежить на лінії, але знаком є сама лінія. Повернися до того, чи знак має довжину."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor nie robi z linii jeziora. Wróć do kształtu: kreska ma długość, plama zajmuje obszar.",
              ua: "Колір не робить із лінії озеро. Повернися до форми: риса має довжину, пляма займає площу."
            }
          }
        ],
        explanation: {
          pl: "Linia ma długość, więc jest znakiem liniowym. Numer tylko ją nazywa.",
          ua: "Лінія має довжину, тож це лінійний знак. Номер лише її називає."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "8. Legenda z zeszytu", ua: "8. Легенда із зошита" },
      visual: img(
        "legenda-znaki.png",
        "Siedem znaków: jezioro, kanał, bagno, rzeka, granica, przełęcz i miasto",
        "Сім знаків: озеро, канал, болото, річка, кордон, перевал і місто",
        "Porównaj kształty, nie tylko kolor.",
        "Порівняй форми, не лише колір."
      ),
      text: {
        pl: [
          "To legenda z zeszytu, nie mapa miasta. Są tu: jezioro, kanał, bagno, rzeka, granica państwa, przełęcz i miasto.",
          "Dwa znaki są niebieskie. Odczytaj ich kształt."
        ],
        ua: [
          "Це легенда із зошита, не карта міста. Тут є: озеро, канал, болото, річка, державний кордон, перевал і місто.",
          "Два знаки блакитні. Прочитай їхню форму."
        ]
      },
      task: {
        id: "g02-s8",
        type: "single-choice",
        question: {
          pl: "Czym znak kanału różni się od znaku rzeki?",
          ua: "Чим знак каналу відрізняється від знака річки?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Kanał jest prostą kreską, rzeka jest łamaną.", ua: "Канал є прямою рискою, річка є ламаною." }
          },
          {
            id: "b",
            label: { pl: "Kanał jest plamą, rzeka jest kółkiem miasta.", ua: "Канал є плямою, річка є кружечком міста." }
          },
          {
            id: "c",
            label: { pl: "To ten sam znak.", ua: "Це той самий знак." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Plama to jezioro, kółko to miasto. Wróć do dwóch niebieskich linii i porównaj, która jest prosta.",
              ua: "Пляма — це озеро, кружечок — це місто. Повернися до двох блакитних ліній і порівняй, яка пряма."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor jest podobny, kształt nie. Wróć do legendy i porównaj prostą kreskę z łamaną.",
              ua: "Колір схожий, форма ні. Повернися до легенди і порівняй пряму риску з ламаною."
            }
          }
        ],
        explanation: {
          pl: "Kanał jest prostą kreską. Rzeka jest łamaną. Ten sam kolor nie znaczy tego samego obiektu.",
          ua: "Канал є прямою рискою. Річка є ламаною. Той самий колір не означає той самий об’єкт."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "9. Odczytaj plan", ua: "9. Прочитай план" },
      visual: img(
        "praktyka-plan-legenda.png",
        "Legenda planu i rysunek miasta bez zaznaczonej odpowiedzi",
        "Легенда плану і малюнок міста без позначеної відповіді",
        "Najpierw wiersz legendy, potem ten sam znak na planie.",
        "Спочатку рядок легенди, потім той самий знак на плані."
      ),
      text: {
        pl: ["Szukasz hali widowiskowo-sportowej. Nie zgaduj budynku. Zacznij od legendy."],
        ua: ["Ти шукаєш спортивно-видовищний зал. Не вгадуй будівлю. Почни з легенди."]
      },
      task: {
        id: "g02-s9",
        type: "single-choice",
        question: {
          pl: "Którego znaku szukasz na planie?",
          ua: "Який знак ти шукаєш на плані?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Piłki, bo ten wiersz legendy nazywa halę.", ua: "М’яча, бо цей рядок легенди називає зал." }
          },
          {
            id: "b",
            label: { pl: "Klapsa, bo stoi przy kinie.", ua: "Хлопавки, бо вона стоїть біля кіно." }
          },
          {
            id: "c",
            label: { pl: "Krzyża, bo stoi przy kościołach.", ua: "Хреста, бо він стоїть біля костелів." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Klaps jest w innym wierszu. Wróć do słowa hala i zobacz, jaki rysunek stoi obok.",
              ua: "Хлопавка є в іншому рядку. Повернися до слова зал і подивись, який малюнок стоїть поруч."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krzyż oznacza kościoły. Wróć do wiersza, w którym jest hala.",
              ua: "Хрест означає костели. Повернися до рядка, у якому є зал."
            }
          }
        ],
        explanation: {
          pl: "Przy hali w legendzie jest piłka. Na planie szukasz takiej samej piłki.",
          ua: "Біля залу в легенді є м’яч. На плані шукаєш такий самий м’яч."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "10. Od znaku do obiektu", ua: "10. Від знака до об’єкта" },
      visual: img(
        "plan-legenda.png",
        "Legenda planu: żaglówka, klaps, krzyż i piłka przy swoich nazwach",
        "Легенда плану: вітрильник, хлопавка, хрест і м’яч біля своїх назв",
        "Czytaj słowo obok znaku.",
        "Читай слово біля знака."
      ),
      text: {
        pl: ["Teraz odwrotnie. Widzisz znak i masz powiedzieć, jaki to obiekt."],
        ua: ["Тепер навпаки. Ти бачиш знак і маєш сказати, який це об’єкт."]
      },
      task: {
        id: "g02-s10",
        type: "single-choice",
        question: { pl: "Co oznacza żaglówka w tej legendzie?", ua: "Що означає вітрильник у цій легенді?" },
        options: [
          {
            id: "a",
            label: { pl: "Przystań żeglarską i statków pasażerskich.", ua: "Пристань для яхт і пасажирських суден." }
          },
          {
            id: "b",
            label: { pl: "Kino.", ua: "Кіно." }
          },
          {
            id: "c",
            label: { pl: "Kościół.", ua: "Костел." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kino stoi przy klapsie. Wróć do żaglówki i przeczytaj słowa w tym samym wierszu.",
              ua: "Кіно стоїть біля хлопавки. Повернися до вітрильника і прочитай слова в тому самому рядку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kościół stoi przy krzyżu. Wróć do wiersza, w którym narysowana jest żaglówka.",
              ua: "Костел стоїть біля хреста. Повернися до рядка, у якому намальований вітрильник."
            }
          }
        ],
        explanation: {
          pl: "Żaglówka oznacza przystań. Klaps to kino, krzyż to kościół.",
          ua: "Вітрильник означає пристань. Хлопавка — це кіно, хрест — це костел."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "11. Mieszane pytanie", ua: "11. Змішане запитання" },
      visual: img(
        "mapa-jeziorko.png",
        "Mapa z niebieską plamą jeziora, tytułem i legendą",
        "Карта з блакитною плямою озера, заголовком і легендою",
        "Niebieska plama jest na mapie i w legendzie.",
        "Блакитна пляма є на карті і в легенді."
      ),
      text: {
        pl: ["Wróć do mapy jeziora. Niebieska plama jest i na wodzie, i w legendzie."],
        ua: ["Повернися до карти озера. Блакитна пляма є і на воді, і в легенді."]
      },
      task: {
        id: "g02-s11",
        type: "single-choice",
        question: {
          pl: "Czym jest niebieska plama?",
          ua: "Чим є блакитна пляма?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Fragmentem treści mapy i znakiem powierzchniowym jeziora.",
              ua: "Частиною змісту карти і площинним знаком озера."
            }
          },
          {
            id: "b",
            label: { pl: "Tytułem całej mapy.", ua: "Заголовком усієї карти." }
          },
          {
            id: "c",
            label: { pl: "Znakiem punktowym kościoła.", ua: "Точковим знаком костелу." }
          }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tytuł nazywa cały obszar i stoi przy legendzie. Wróć do plamy: ona pokazuje jeden obiekt.",
              ua: "Заголовок називає всю територію і стоїть біля легенди. Повернися до плями: вона показує один об’єкт."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kościół to krzyż, jedno miejsce. Wróć do plamy: ona zajmuje obszar.",
              ua: "Костел — це хрест, одне місце. Повернися до плями: вона займає площу."
            }
          }
        ],
        explanation: {
          pl: "Niebieska plama należy do treści mapy. Zajmuje obszar, więc jest znakiem powierzchniowym.",
          ua: "Блакитна пляма належить до змісту карти. Вона займає площу, тож це площинний знак."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "12. Sprawdź się po polsku", ua: "12. Перевір себе польською" },
      visual: img(
        "mapa-jeziorko.png",
        "Legenda mapy, w której krzyż stoi przy kościołach",
        "Легенда карти, у якій хрест стоїть біля костелів",
        "Napisz zdanie po polsku. Podpowiedzi nie ma.",
        "Напиши речення польською. Підказки немає."
      ),
      text: {
        pl: ["Jedno zdanie po polsku. Nie ma podpowiedzi."],
        ua: ["Одне речення польською. Підказки немає."]
      },
      task: {
        id: "g02-s12",
        type: "open-answer",
        question: {
          pl: "Napisz po polsku: skąd wiesz, że krzyż oznacza kościół?",
          ua: "Напиши польською: звідки ти знаєш, що хрест означає костел?"
        },
        answer: [
          "w legendzie krzyż oznacza kościół",
          "w legendzie krzyż oznacza kościoły",
          "bo w legendzie krzyż oznacza kościół",
          "bo w legendzie krzyż oznacza kościoły",
          "z legendy",
          "z legendy mapy",
          "bo tak jest w legendzie",
          "bo legenda tak mówi",
          "legenda mówi, że krzyż to kościół",
          "w legendzie przy krzyżu jest słowo kościoły",
          "w legendzie przy krzyżu jest napis kościoły",
          "w legendzie krzyz oznacza kosciol",
          "w legendzie krzyz oznacza koscioly",
          "bo w legendzie krzyz oznacza kosciol",
          "bo tak jest w legendzie."
        ],
        mistakes: [
          {
            answer: "bo kościół ma wieżę",
            feedback: {
              pl: "Wieża jest na zdjęciu, nie w legendzie. Wróć do wiersza, w którym narysowany jest krzyż.",
              ua: "Вежа є на фотографії, не в легенді. Повернися до рядка, у якому намальований хрест."
            }
          },
          {
            answer: "bo tak wygląda",
            feedback: {
              pl: "Wygląd budynku nie nazywa znaku. Wróć do legendy: tam znak stoi obok słowa.",
              ua: "Вигляд будівлі не називає знак. Повернися до легенди: там знак стоїть біля слова."
            }
          }
        ],
        explanation: {
          pl: "Wystarczy: w legendzie krzyż oznacza kościół.",
          ua: "Досить короткого польського речення: знак стоїть біля свого слова в легенді."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "13. Słowniczek", ua: "13. Словарик" },
      rows: [
        { pl: "mapa", ua: "Рисунок местности сверху. Он меньше настоящей местности, лежит на листе и нарисован условными знаками. Это не фотография." },
        { pl: "tytuł", ua: "Название всей карты, а не одной улицы и не строчки легенды." },
        { pl: "treść mapy", ua: "Объекты на карте: озеро, дороги, здания. Их показывают знаками." },
        { pl: "legenda", ua: "Табличка: рядом со знаком написано, что он значит. Сначала смотри сюда." },
        { pl: "znak punktowy", ua: "Знак одного места. Крест костёла — точка." },
        { pl: "znak liniowy", ua: "Знак, у которого есть длина. Дорога — линия." },
        { pl: "znak powierzchniowy", ua: "Знак, который занимает площадь. Озеро — пятно." },
        { pl: "skala", ua: "Надпись или полоска: сколько местности в одном сантиметре карты. В этом уроке её не считаем." },
        { pl: "plan", ua: "Карта маленького куска города, например старого города." }
      ]
    }
  ]
};
