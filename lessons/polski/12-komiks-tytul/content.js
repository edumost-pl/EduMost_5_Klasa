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
      heading: { pl: "Dziwne spotkanie · o komiksie", ua: "Дивна зустріч · про комікс" },
      formula: "s. 28–29  ·  lekcja 12 z 13",
      promptPlace: "before",
      prompt: {
        pl: "Dwa tematy, jeden rozdział. Dziś czytamy komiksy i nazywamy: wydarzenia, uczucia, cechy komiksu. Pisanie (przybysz, dalszy ciąg) — następna lekcja, s. 30.",
        ua: "Два уроки, один розділ. Сьогодні читаємо комікси: події, почуття, риси коміксу. Писання — наступний урок, с. 30."
      },
      items: [
        { pl: "opowiem, co się dzieje w komiksie *Tytuł?*;", ua: "розкажу, що діється в коміксі *Tytuł?*;" },
        { pl: "nazwę przeżycia bohaterów;", ua: "назву пережиття героїв;" },
        { pl: "wskażę cechy komiksu (obrazki, dymki, PYK!);", ua: "вкажу риси коміксу (кадри, хмарки, PYK!);" },
        { pl: "powiem, co pomaga odczytać uczucia.", ua: "скажу, що допомагає зчитати почуття." }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Tytuł? (1)", ua: "Читаємо · Tytuł? (1)" },
      formula: "Tomasz Kaczkowski  ·  fragment",
      visual: vizGh("t12-tytul-1.png", {
        alt: {
          pl: "Dziewczyna w NASA przy monitorze z planetą; wchodzi blondynka; rozmowa o Hawkingu i Proxima B",
          ua: "Дівчина в NASA біля монітора; заходить блондинка; розмова про Гокінга і Proxima B"
        },
        title: { pl: "Slajd · Tytuł? kadr 1", ua: "Слайд · Tytuł? кадр 1" },
        prompt: {
          pl: "Wstaw stronę komiksu Tomasza Kaczkowskiego «Tytuł?»: monitor z planetą, dziewczyna w koszulce NASA, blondynka w drzwiach («Hej, co porabiasz?»), dymki o Hawkingu i Proxima B. PNG. Przytnij znak wodny.",
          ua: "Встав сторінку коміксу: монітор, NASA, блондинка, Hawking, Proxima B."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj dymki na głos. Dwie bohaterki: dziewczyna w koszulce NASA i dziewczyna z blond włosami. Komiksu nie tłumaczymy na ukraiński.",
        ua: "Читай хмарки вголос. Дві героїні: дівчина в NASA і блондинка. Комікс не перекладаємо."
      },
      text: {
        pl: [
          "Blondynka: «Hej, co porabiasz?»",
          "NASA: «Słyszałaś, że Stephen Hawking mówi, że ludzie mają jedynie 100 lat na skolonizowanie innych planet?»",
          "NASA: «Według profesora planeta o nazwie Proxima B może być drugim domem ludzkości.»",
          "Blondynka: «Taaaa… Czytałam o tym. Jest oddalona od Ziemi o około 4 lata świetlne. Jest ponoć skalista i może tam występować woda w stanie ciekłym.»"
        ]
      },
      task: {
        id: "t12-s02-proxima",
        type: "single-choice",
        question: {
          pl: "O jakiej planecie mówi dziewczyna w koszulce NASA?",
          ua: "Про яку планету каже дівчина в NASA?"
        },
        options: [
          { id: "a", label: { pl: "Proxima B — według Hawkinga może być drugim domem ludzkości.", ua: "Proxima B — за Гокінгом може бути другим домом людства." } },
          { id: "b", label: { pl: "Mars jako jedyna planeta w komiksie.", ua: "Марс як єдина планета в коміксі." } },
          { id: "c", label: { pl: "Ziemia we Wszechświecie z lekcji 4 — bez Proximy.", ua: "Земля з уроку 4 — без Proximy." } }
        ],
        answer: "a",
        hint: {
          pl: "Drugi dymek dziewczyny w NASA. Jaka nazwa?",
          ua: "Друга хмарка дівчини в NASA. Яка назва?"
        },
        explanation: {
          pl: "W dymku: planeta o nazwie Proxima B. Hawking i 100 lat na kolonizację — też tam są.",
          ua: "У хмарці: Proxima B. Гокінг і 100 років — теж там."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Tytuł? (2)", ua: "Читаємо · Tytuł? (2)" },
      formula: "marzenie  ·  «daj spokój»",
      visual: vizGh("t12-tytul-2.png", {
        alt: {
          pl: "Dziewczyna NASA w fotelu wyobraża sobie Proksimasów; blondynka: daj spokój, to się nigdy nie uda",
          ua: "Дівчина NASA в кріслі уявляє Proksimasów; блондинка: ніколи не вдасться"
        },
        title: { pl: "Slajd · Tytuł? kadr 2", ua: "Слайд · Tytuł? кадр 2" },
        prompt: {
          pl: "Wstaw dwa kadry: NASA w fotelu, słońce i planety nad nią, dymek o Proksimasach; blondynka z grymasem: «Daj spokój, to się nigdy nie uda». PNG. Przytnij znak wodny.",
          ua: "Встав два кадри: мрія NASA і скепсис блондинки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Porównaj nastroje. Jedna marzy, druga nie wierzy.",
        ua: "Порівняй настрої. Одна мріє, друга не вірить."
      },
      text: {
        pl: [
          "NASA: «Może tam już ktoś mieszka? Wyobraź sobie, jak byłoby niesamowicie… Jedziesz na wycieczkę i poznajesz takich Proksimasów, a może nawet tam zostajesz…»",
          "Blondynka: «Daj spokój, to się nigdy nie uda.»"
        ]
      },
      task: {
        id: "t12-s03-nastroj",
        type: "single-choice",
        question: {
          pl: "Kto w tych kadrach marzy, a kto nie wierzy?",
          ua: "Хто в цих кадрах мріє, а хто не вірить?"
        },
        options: [
          { id: "a", label: { pl: "NASA marzy o Proksimasach; blondynka mówi, że to się nigdy nie uda.", ua: "NASA мріє про Proksimasów; блондинка каже, що ніколи не вдасться." } },
          { id: "b", label: { pl: "Blondynka chce lecieć, NASA się boi.", ua: "Блондинка хоче летіти, NASA боїться." } },
          { id: "c", label: { pl: "Obie śpiewają kołysankę jak w wierszu „Noc”.", ua: "Обидві співають колискову, як у «Noc»." } }
        ],
        answer: "a",
        hint: {
          pl: "Kto siedzi w fotelu z planetami nad głową? Co mówi druga?",
          ua: "Хто сидить у кріслі з планетами над головою? Що каже друга?"
        },
        explanation: {
          pl: "NASA wyobraża wycieczkę do Proksimasów. Blondynka: daj spokój, nigdy się nie uda.",
          ua: "NASA мріє. Блондинка: ніколи не вдасться."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Tytuł? (3)", ua: "Читаємо · Tytuł? (3)" },
      formula: "statek  ·  spójrz, jak pięknie",
      visual: vizGh("t12-tytul-3.png", {
        alt: {
          pl: "Blondynka nie chce lecieć; obie patrzą na monitor z planetą",
          ua: "Блондинка не хоче летіти; обидві дивляться на монітор"
        },
        title: { pl: "Slajd · Tytuł? kadr 3", ua: "Слайд · Tytuł? кадр 3" },
        prompt: {
          pl: "Wstaw dwa kadry: blondynka przy fotelu NASA (nie poleciałabym; niech sami przylecą); obie pochylone nad monitorem, NASA: «Ale tylko spójrz, jak tam musi być pięknie». PNG. Przytnij znak wodny.",
          ua: "Встав два кадри: відмова летіти і спільний погляд на монітор."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Blondynka nie chce lecieć. NASA i tak pokazuje ekran.",
        ua: "Блондинка не хоче летіти. NASA все одно показує екран."
      },
      text: {
        pl: [
          "Blondynka: «Nawet jeśli zbudują statek, to w życiu bym tam nie poleciała. Niech sobie sami do mnie przylecą. Mogą się nawet wprowadzić. Rodzice i tak cały czas siedzą w pracy.»",
          "NASA: «Ale tylko spójrz, jak tam musi być pięknie.»"
        ]
      },
      task: {
        id: "t12-s04-statek",
        type: "true-false",
        question: {
          pl: "Czy blondynka chce polecieć na Proxima B, gdy zbudują statek?",
          ua: "Чи блондинка хоче полетіти на Proxima B, коли збудують корабель?"
        },
        answer: false,
        hint: {
          pl: "Przeczytaj: «w życiu bym tam nie poleciała».",
          ua: "Прочитай: «в житті б туди не полетіла»."
        },
        explanation: {
          pl: "Tekst: w życiu bym tam nie poleciała. Niech sami przylecą — nawet mogą się wprowadzić.",
          ua: "Текст: в житті не полетіла б. Нехай самі прилетять."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Tytuł? (4)", ua: "Читаємо · Tytuł? (4)" },
      formula: "O jejku!  ·  PYK!",
      visual: vizGh("t12-tytul-4.png", {
        alt: {
          pl: "Blondynka krzyczy; na ekranie niebieski stwór; PYK — stwór wychodzi z monitora",
          ua: "Блондинка кричить; на екрані синя істота; PYK — виходить з монітора"
        },
        title: { pl: "Slajd · Tytuł? kadr 4", ua: "Слайд · Tytuł? кадр 4" },
        prompt: {
          pl: "Wstaw kadry końcowe: «O jejku! Tam się coś rusza!!!»; niebieski stwór na planecie «Zobacz!»; «Idzie tu!!!»; stwór wyskakuje z monitora, napis PYK!; twarze: szok i spokój w fotelu. PNG. Przytnij znak wodny.",
          ua: "Встав фінал: щось рухається, PYK!, істота з монітора."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Zwróć uwagę na wielkie litery, wykrzykniki i napis *PYK!* — to też język komiksu.",
        ua: "Зверни увагу на великі літери, знаки оклику і *PYK!* — це теж мова коміксу."
      },
      text: {
        pl: [
          "Blondynka: «O jejku! Tam się coś rusza!!!»",
          "«Zobacz!» — na ekranie widać niebieskiego stwora.",
          "«Idzie tu!!!» Potem: *PYK!* — stwór wychodzi z monitora."
        ]
      },
      task: {
        id: "t12-s05-pyk",
        type: "single-choice",
        question: {
          pl: "Co oznacza napis PYK! w ostatnim kadrze?",
          ua: "Що означає напис PYK! в останньому кадрі?"
        },
        options: [
          { id: "a", label: { pl: "Dźwięk / ruch: stwór wyskakuje z monitora.", ua: "Звук / рух: істота вискакує з монітора." } },
          { id: "b", label: { pl: "Imię blondynki.", ua: "Ім’я блондинки." } },
          { id: "c", label: { pl: "Tytuł wiersza Miłosza.", ua: "Назва вірша Мілоша." } }
        ],
        answer: "a",
        hint: {
          pl: "Czy PYK! jest w dymku jak zdanie, czy obok obrazka jak dźwięk?",
          ua: "PYK! у хмарці як речення чи біля малюнка як звук?"
        },
        explanation: {
          pl: "PYK! to informacja graficzna o dźwięku i ruchu — stwór wypada z ekranu. Nie imię i nie Miłosz.",
          ua: "PYK! — звук і рух. Істота випадає з екрана."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Relacja · co się wydarzyło?", ua: "Переказ · що сталося?" },
      formula: "USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Opowiedz krótko bieg zdarzeń w *Tytuł?*. Potem zaznacz, co NA PEWNO jest w komiksie.",
        ua: "Коротко розкажи події в *Tytuł?*. Потім познач, що НАПЕВНО є в коміксі."
      },
      text: {
        pl: [
          "Dziewczyna w NASA ogląda planetę i mówi o Hawkingu oraz Proxima B.",
          "Marzy o Proksimasach. Koleżanka nie wierzy i nie chce lecieć.",
          "Na ekranie coś się rusza — i niebieski stwór wychodzi z monitora (PYK!)."
        ],
        ua: [
          "Дівчина в NASA дивиться планету і каже про Гокінга та Proxima B.",
          "Мріє про Proksimasów. Подруга не вірить і не хоче летіти.",
          "На екрані щось рухається — синя істота виходить з монітора (PYK!)."
        ]
      },
      task: {
        id: "t12-s06-wydarzenia",
        type: "multiple-choice",
        question: {
          pl: "Które wydarzenia NA PEWNO są w tym fragmencie? Zaznacz wszystkie pewne.",
          ua: "Які події НАПЕВНО є в цьому фрагменті? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Rozmowa o Proxima B i Hawkingu.", ua: "Розмова про Proxima B і Гокінга." } },
          { id: "b", label: { pl: "Stwór wychodzi z monitora (PYK!).", ua: "Істота виходить з монітора (PYK!)." } },
          { id: "c", label: { pl: "Asteriks bije się z Obelixem o makowiec.", ua: "Астерікс б’ється з Обеліксом за маковник." } },
          { id: "d", label: { pl: "Blondynka nie chce lecieć statkiem.", ua: "Блондинка не хоче летіти кораблем." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Asteriks jest w INNYM komiksie na sąsiedniej stronie. Co jest w *Tytuł?*?",
          ua: "Астерікс — в ІНШОМУ коміксі. Що є в *Tytuł?*?"
        },
        explanation: {
          pl: "W *Tytuł?*: Hawking, Proxima B, odmowa lotu, PYK! Asteriks to osobny komiks (zad. 1).",
          ua: "У *Tytuł?*: Гокінг, Proxima B, відмова летіти, PYK! Астерікс — інший комікс."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Przeżycia bohaterek", ua: "Пережиття героїнь" },
      formula: "nazywamy uczucia",
      promptPlace: "before",
      prompt: {
        pl: "Program: nazywa przeżycia bohaterów. Patrz na twarze i dymki w *Tytuł?*. Najpierw zeszyt, potem przykład.",
        ua: "Програма: назви пережиття героїв. Дивись на обличчя і хмарки. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Dwie kolumny: NASA / blondynka. Na początku · gdy mówią o locie · gdy coś się rusza · po PYK!",
            ua: "Дві колонки: NASA / блондинка. На початку · про політ · коли щось рухається · після PYK!"
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  sprawdź z kadrami",
          text: {
            pl: [
              "NASA: zaciekawienie, zachwyt, spokój (nawet po PYK! siedzi w fotelu).",
              "Blondynka: sceptycyzm («daj spokój»), potem strach / szok («O jejku!», «Idzie tu!!!»)."
            ],
            ua: [
              "NASA: цікавість, захват, спокій.",
              "Блондинка: скепсис, потім страх / шок."
            ]
          }
        }
      ],
      task: {
        id: "t12-s07-uczucia-tytul",
        type: "single-choice",
        question: {
          pl: "Jakie uczucie NA PEWNO widać u blondynki, gdy krzyczy «O jejku! Tam się coś rusza!!!»?",
          ua: "Яке почуття НАПЕВНО видно в блондинки, коли кричить «O jejku!»?"
        },
        options: [
          { id: "a", label: { pl: "Strach / szok (otwarte usta, wykrzykniki, czerwone tło).", ua: "Страх / шок (відкритий рот, знаки оклику, червоний фон)." } },
          { id: "b", label: { pl: "Nudę jak na lekcji ortografii.", ua: "Нудьгу як на уроці орфографії." } },
          { id: "c", label: { pl: "Radość z dyktanda.", ua: "Радість від диктанту." } }
        ],
        answer: "a",
        hint: {
          pl: "Kolor kadru, usta, wykrzykniki. Czy to nuda?",
          ua: "Колір кадру, рот, знаки оклику. Чи це нудьга?"
        },
        explanation: {
          pl: "Czerwone tło, «O jejku!!!», ręce przy twarzy — szok / strach, nie nuda.",
          ua: "Червоний фон, «O jejku!!!» — шок / страх."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · Asteriks, Obeliks, Łodislanin", ua: "Завд. 1 · Астерікс, Обелікс, Łodislanin" },
      formula: "s. 28–29  ·  podręcznik",
      promptPlace: "before",
      prompt: {
        pl: "W rozdziale jest też komiks o Asteriksie. Zad. 1: na pierwszym obrazku od lewej: Panoramiks, Asteriks i Obeliks. Nazwij uczucia: zanim Łodislanin wylądował (2. obrazek) oraz podczas sprzeczki (ostatni obrazek). Otwórz podręcznik — tu wstawimy kadr.",
        ua: "У розділі є також комікс про Астерікса. Завд. 1: назви почуття до приземлення Łodislanina і під час сварки. Відкрий підручник."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t12-asteriks.png", {
            alt: {
              pl: "Komiks: Panoramiks, Asteriks i Obeliks; lądowanie Łodislanina; sprzeczka",
              ua: "Комікс: Панорамікс, Астерікс і Обелікс; прибуття Łodislanina; сварка"
            },
            title: { pl: "Slajd · Asteriks (podręcznik)", ua: "Слайд · Астерікс (підручник)" },
            prompt: {
              pl: "Wstaw stronę komiksu Goscinny / Uderzo z podręcznika (s. 28–29): od lewej Panoramiks, Asteriks, Obeliks; kadr przed lądowaniem Łodislanina; ostatni kadr — sprzeczka. PNG. Przytnij znak wodny.",
              ua: "Встав сторінку Астерікса з підручника: троє героїв, прибуття, сварка."
            }
          }),
          text: {
            pl: "Najpierw sam z podręcznika: 2. obrazek i ostatni. Potem przykład — sprawdź, czy zgadza się z twarzami.",
            ua: "Спочатку сам із підручника. Потім приклад — звір з обличчями."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  porównaj z kadrami",
          text: {
            pl: [
              "Zanim Łodislanin wylądował: zdziwienie, ciekawość, niepokój (coś spada z nieba).",
              "Podczas sprzeczki: złość, irytacja, krzyk — spór, nie spokojna rozmowa."
            ],
            ua: [
              "До приземлення: здивування, цікавість, тривога.",
              "Під час сварки: злість, роздратування."
            ]
          }
        }
      ],
      task: {
        id: "t12-s08-asteriks",
        type: "single-choice",
        question: {
          pl: "Która para uczuć pasuje do polecenia z zad. 1?",
          ua: "Яка пара почуттів пасує до завд. 1?"
        },
        options: [
          { id: "a", label: { pl: "Przed lądowaniem: zdziwienie / ciekawość. W sprzeczce: złość / irytacja.", ua: "Перед приземленням: здивування / цікавість. У сварці: злість / роздратування." } },
          { id: "b", label: { pl: "W obu kadrach tylko senna nuda.", ua: "В обох кадрах лише сонна нудьга." } },
          { id: "c", label: { pl: "Sprzeczka to na pewno radość z recytacji wiersza.", ua: "Сварка — це радість від декламації вірша." } }
        ],
        answer: "a",
        hint: {
          pl: "Co czujesz, gdy coś ląduje? A gdy jest sprzeczka?",
          ua: "Що відчуваєш, коли щось сідає? А коли сварка?"
        },
        explanation: {
          pl: "Zad. 1 każe nazwać uczucia w dwóch momentach. Lądowanie ≠ nuda. Sprzeczka ≠ recytacja.",
          ua: "Завд. 1: два моменти. Приземлення ≠ нудьга. Сварка ≠ декламація."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Co to jest komiks?", ua: "Що таке комікс?" },
      formula: "s. 30  ·  ramka",
      promptPlace: "before",
      prompt: {
        pl: "Ramka z podręcznika. Znajdź w *Tytuł?* przykłady: dymki i PYK!",
        ua: "Рамка з підручника. Знайди в *Tytuł?* приклади: хмарки і PYK!"
      },
      text: {
        pl: [
          "Komiks to historia opowiedziana za pomocą serii obrazków. Wypowiedzi bohaterów czy narratora są umieszczone w dymkach. Ponadto w komiksach pojawiają się informacje wyróżnione graficznie, na przykład o dźwiękach, ruchu, emocjach bohaterów."
        ],
        ua: [
          "Комікс — історія серією малюнків. Репліки — в хмарках. Окремо графічно виділяють звук, рух, емоції."
        ]
      },
      task: {
        id: "t12-s09-definicja",
        type: "multiple-choice",
        question: {
          pl: "Co — według ramki — należy do komiksu? Zaznacz wszystkie pewne.",
          ua: "Що — за рамкою — належить до коміксу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Seria obrazków, która opowiada historię.", ua: "Серія малюнків, яка розповідає історію." } },
          { id: "b", label: { pl: "Dymki z wypowiedziami.", ua: "Хмарки з репліками." } },
          { id: "c", label: { pl: "Tylko wypracowanie bez rysunków.", ua: "Лише твір без малюнків." } },
          { id: "d", label: { pl: "Graficzne znaki dźwięku, ruchu, emocji (np. PYK!).", ua: "Графічні знаки звуку, руху, емоцій (напр. PYK!)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Trzy zdania ramki. Czy komiks to samo wypracowanie?",
          ua: "Три речення рамки. Чи комікс — це сам твір?"
        },
        explanation: {
          pl: "Ramka: obrazki + dymki + informacje graficzne (dźwięk, ruch, emocje). Nie samo wypracowanie.",
          ua: "Рамка: малюнки + хмарки + графіка. Не сам твір."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · co pokazuje uczucia?", ua: "Завд. 2 · що показує почуття?" },
      formula: "s. 30",
      promptPlace: "before",
      prompt: {
        pl: "Powiedz, które elementy komiksu pomagają odczytać uczucia bohaterów. Najpierw wskaż w *Tytuł?* i u Asteriksa.",
        ua: "Скажи, які елементи коміксу допомагають зчитати почуття. Спочатку вкажи в *Tytuł?* і в Астерікса."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Lista w zeszycie. Potem porównaj.",
            ua: "Список у зошиті. Потім порівняй."
          }
        },
        {
          formula: "KLUCZ  ·  z ramki + kadry",
          text: {
            pl: [
              "Twarz i mimika (otwarte usta, zmarszczone brwi).",
              "Poza i gest (ręce przy twarzy, palec do góry, fotel).",
              "Dymki (słowa + wykrzykniki, wielkie litery).",
              "Kolor tła (czerwony kadr strachu).",
              "Napis graficzny: PYK! — dźwięk i ruch."
            ],
            ua: [
              "Обличчя і міміка.",
              "Поза і жест.",
              "Хмарки (слова, знаки оклику).",
              "Колір тла.",
              "PYK! — звук і рух."
            ]
          }
        }
      ],
      task: {
        id: "t12-s10-elementy",
        type: "multiple-choice",
        question: {
          pl: "Które elementy NA PEWNO pomagają odczytać uczucia w tych komiksach? Zaznacz wszystkie pewne.",
          ua: "Які елементи НАПЕВНО допомагають зчитати почуття? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Mimika i gesty na obrazku.", ua: "Міміка і жести на малюнку." } },
          { id: "b", label: { pl: "Dymki: słowa i wykrzykniki.", ua: "Хмарки: слова і знаки оклику." } },
          { id: "c", label: { pl: "Tylko numer strony podręcznika.", ua: "Лише номер сторінки підручника." } },
          { id: "d", label: { pl: "Napis PYK! i kolor kadru.", ua: "Напис PYK! і колір кадру." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Ramka mówi o dymkach i informacjach graficznych. Czy numer strony pokazuje strach?",
          ua: "Рамка: хмарки і графіка. Чи номер сторінки показує страх?"
        },
        explanation: {
          pl: "Uczucia: twarz, gest, dymek, kolor, PYK! Numer strony niczego nie opowiada.",
          ua: "Почуття: обличчя, жест, хмарка, колір, PYK! Номер сторінки — ні."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Komiks = historia obrazkami + dymki + znaki dźwięku/ruchu/emocji. *Tytuł?*: Proxima B, spór o lot, PYK! Asteriks: uczucia przed lądowaniem i w sprzeczce. Jutro: wypowiedź przybysza i dalszy ciąg (s. 30).",
        ua: "Комікс = історія малюнками + хмарки + звук/рух. *Tytuł?*: Proxima B, PYK! Завтра: висловлювання прибульця (с. 30)."
      },
      items: [
        { pl: "Komiks: seria obrazków, dymki, PYK! i mimika.", ua: "Комікс: серія кадрів, хмарки, PYK! і міміка." },
        { pl: "Tytuł?: rozmowa o planecie → stwór z monitora.", ua: "Tytuł?: розмова про планету → істота з монітора." },
        { pl: "Uczucia czytamy z twarzy, dymka i grafiki.", ua: "Почуття читаємо з обличчя, хмарки і графіки." }
      ],
      task: {
        id: "t12-s11-notatka",
        type: "single-choice",
        question: {
          pl: "Jaką notatkę zostawiasz po lekcji 12?",
          ua: "Яку нотатку лишаєш після уроку 12?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Komiks opowiada obrazkami i dymkami. W Tytuł? stwór wychodzi z ekranu. Uczucia widać na twarzy i w PYK!",
              ua: "Комікс розповідає малюнками й хмарками. У Tytuł? істота виходить з екрана. Почуття — на обличчі і в PYK!"
            }
          },
          { id: "b", label: { pl: "To była tylko lekcja o rz niewymiennym.", ua: "Це був лише урок про rz незмінне." } },
          { id: "c", label: { pl: "Miłosz napisał ten komiks w 1945 roku.", ua: "Мілош написав цей комікс 1945 року." } }
        ],
        answer: "a",
        hint: {
          pl: "Kto narysował *Tytuł?*? Co było tematem?",
          ua: "Хто намалював *Tytuł?*? Яка була тема?"
        },
        explanation: {
          pl: "Dziś: komiks Kaczkowskiego i cechy komiksu. Miłosz i rz — inne lekcje.",
          ua: "Сьогодні: комікс Качковського. Мілош і rz — інші уроки."
        }
      }
    }
  ]
};
