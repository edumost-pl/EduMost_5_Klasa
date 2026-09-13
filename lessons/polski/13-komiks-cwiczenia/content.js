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
      heading: { pl: "Wypowiedź i dalszy ciąg", ua: "Висловлювання і продовження" },
      formula: "s. 30  ·  lekcja 13  ·  po komiksach",
      promptPlace: "before",
      prompt: {
        pl: "Komiksy już znasz (lekcja 12). Dziś: wypowiedź Łodislanina, dalszy ciąg komiksu, krótka prezentacja. Klucze schowane.",
        ua: "Комікси вже є (урок 12). Сьогодні: висловлювання Łodislanina, продовження коміксу, презентація. Ключі сховані."
      },
      items: [
        { pl: "napiszę, jak przybysz opisuje swoją planetę (słownik z ramki);", ua: "напишу, як прибулець описує свою планету (словник з рамки);" },
        { pl: "wymyślę dalszy ciąg i wskazówki dla rysownika;", ua: "придумаю продовження і вказівки для художника;" },
        { pl: "powiem kolegom, co narysowaliśmy;", ua: "скажу однокласникам, що намалювали;" },
        { pl: "krótko: uczucia w internecie, konkurs i informacje o przybyszach.", ua: "коротко: почуття в інтернеті, конкурс і відомості про прибульців." }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Zad. 3 · ramka słownictwa", ua: "Завд. 3 · рамка словника" },
      formula: "s. 30",
      promptPlace: "before",
      prompt: {
        pl: "Wyobraź sobie, że Asteriks pozwolił dłużej opowiadać Łodislaninowi o planecie, z której przybył. Napisz tę wypowiedź. Wykorzystaj wybrane słownictwo z ramki.",
        ua: "Уяви: Астерікс дав Łodislaninowi довше розповісти про планету. Напиши висловлювання. Візьми слова з рамки."
      },
      text: {
        pl: [
          "planeta · tam, skąd przybyłem · miejsce, z którego wyruszyłem · mój dom · moja ojczyzna",
          "leży · znajduje się · wyłania się · ukazuje się · pojawia się · obraca się · krąży wokół",
          "kształtem przypomina · wygląda jak · jest niewiele mniejsza od · jej powierzchnia jest",
          "ma wielkość podobną do · gdy się na nią patrzy, można mieć wrażenie, że",
          "wydaje się podobna / niepodobna do · od waszej planety różni ją"
        ]
      },
      task: {
        id: "t13-s02-ramka",
        type: "single-choice",
        question: {
          pl: "Kto ma mówić w zadaniu 3 i o czym?",
          ua: "Хто має говорити в завданні 3 і про що?"
        },
        options: [
          { id: "a", label: { pl: "Łodislanin — o planecie, z której przybył (pierwsza osoba: przybyłem, mój dom).", ua: "Łodislanin — про планету, з якої прибув (я прибув, мій дім)." } },
          { id: "b", label: { pl: "Miłosz — o makówce.", ua: "Мілош — про маківку." } },
          { id: "c", label: { pl: "Nauczyciel — o rz niewymiennym.", ua: "Учитель — про rz незмінне." } }
        ],
        answer: "a",
        hint: {
          pl: "W ramce jest: tam, skąd przybyłem · mój dom. Kto tak mówi?",
          ua: "У рамці: tam, skąd przybyłem · mój dom. Хто так каже?"
        },
        explanation: {
          pl: "To wypowiedź przybysza z innej planety. Ja: przybyłem, moja ojczyzna.",
          ua: "Це висловлювання прибульця. Я: przybyłem, moja ojczyzna."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · napisz wypowiedź", ua: "Завд. 3 · напиши висловлювання" },
      formula: "ZESZYT  ·  5–8 zdań",
      promptPlace: "before",
      prompt: {
        pl: "Pisz w pierwszej osobie, jak Łodislanin. Wpleć co najmniej 6 wyrażeń z ramki. Najpierw sam. Potem wzór — nie jedyna dobra wersja.",
        ua: "Пиши від першої особи, як Łodislanin. Візьми щонайменше 6 виразів з рамки. Спочатку сам."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szkic: skąd przybyłem → jak wygląda planeta → czym różni się od Ziemi. Nie otwieraj wzoru za wcześnie.",
            ua: "Ескіз: звідки прибув → як виглядає планета → чим відрізняється від Землі."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna wersja",
          text: {
            pl: [
              "Przybyłem tam, skąd wyruszyłem — z planety, która jest moim domem i moją ojczyzną.",
              "Leży daleko; krąży wokół swojego słońca. Kształtem przypomina kulę, jest niewiele mniejsza od waszej Ziemi.",
              "Gdy się na nią patrzy, można mieć wrażenie, że jej powierzchnia jest skalista. Od waszej planety różni ją to, że…"
            ],
            ua: [
              "Я прибув з планети — мій дім, моя батьківщина.",
              "Крутиться навколо свого сонця, формою як куля.",
              "Поверхня скеляста. Від вашої планети відрізняє її…"
            ]
          }
        }
      ],
      task: {
        id: "t13-s03-tekst",
        type: "multiple-choice",
        question: {
          pl: "Które zwroty z ramki PASUJĄ do wypowiedzi przybysza? Zaznacz wszystkie pewne.",
          ua: "Які звороти з рамки ПАСУЮТЬ до висловлювання прибульця? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "tam, skąd przybyłem / moja ojczyzna", ua: "tam, skąd przybyłem / moja ojczyzna" } },
          { id: "b", label: { pl: "kształtem przypomina / krąży wokół", ua: "kształtem przypomina / krąży wokół" } },
          { id: "c", label: { pl: "rz niewymienne w Rzeszowie", ua: "rz незмінне в Жешуві" } },
          { id: "d", label: { pl: "od waszej planety różni ją", ua: "od waszej planety różni ją" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy w ramce na s. 30 jest Rzeszów?",
          ua: "Чи в рамці на с. 30 є Rzeszów?"
        },
        explanation: {
          pl: "Ramka: planeta, dom, kształt, różnice. Rzeszów to inna lekcja.",
          ua: "Рамка: планета, дім, форма, відмінності. Жешув — інший урок."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · dwa obrazki", ua: "Завд. 4 · два малюнки" },
      formula: "s. 30",
      visual: vizGh("t13-zad4.png", {
        alt: {
          pl: "Noc, UFO, zielony stwór, dwie dziewczyny z pytajnikami",
          ua: "Ніч, НЛО, зелена істота, дві дівчини зі знаками питання"
        },
        title: { pl: "Slajd · zadanie 4", ua: "Слайд · завдання 4" },
        prompt: {
          pl: "Wstaw ilustrację ze s. 30 zad. 4: nocne niebo, srebrny spodek, zielony stwór z czarnymi oczami, dwie dziewczyny (NASA i blondynka) z dymkami «?». PNG. Przytnij znak wodny.",
          ua: "Встав малюнок завд. 4: НЛО, істота, дві дівчини, «?»."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Wyobraź sobie, że z dalszej części opowieści zostały tylko dwa obrazki. Wymyśl i opisz własną wersję brakujących części komiksu oraz opracuj wskazówki dla rysownika.",
        ua: "Уяви: з продовження лишилося лише два малюнки. Придумай свою версію і вказівки для художника."
      },
      text: {
        pl: [
          "Na rysunku widać: spodek, stwór, dwie dziewczyny, dymki ze znakiem zapytania.",
          "Twoja praca: co było PRZED tym kadrem i co będzie PO nim? To łączy *Tytuł?* (PYK!) z tym spotkaniem."
        ],
        ua: [
          "На малюнку: тарілка, істота, дві дівчини, «?».",
          "Твоя робота: що було ДО і що буде ПІСЛЯ? Це зв’язок з *Tytuł?* (PYK!)."
        ]
      },
      task: {
        id: "t13-s04-kadr",
        type: "single-choice",
        question: {
          pl: "Co NA PEWNO widać na rysunku z zad. 4?",
          ua: "Що НАПЕВНО видно на малюнку з завд. 4?"
        },
        options: [
          { id: "a", label: { pl: "Spodek, zielony stwór i dwie dziewczyny z «?».", ua: "Тарілка, зелена істота і дві дівчини з «?»." } },
          { id: "b", label: { pl: "Tylko makówkę Miłosza.", ua: "Лише маківку Мілоша." } },
          { id: "c", label: { pl: "Panoramiksa przy tablicy ortograficznej.", ua: "Панорамікса біля орфографічної дошки." } }
        ],
        answer: "a",
        hint: {
          pl: "Palcem w ilustracji na s. 30.",
          ua: "Пальцем в ілюстрації на с. 30."
        },
        explanation: {
          pl: "Na obrazku: UFO, stwór, dwie dziewczyny, pytajniki. Nie makówka i nie dyktando.",
          ua: "На малюнку: НЛО, істота, дві дівчини. Не маківка."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · wskazówki dla rysownika", ua: "Завд. 4 · вказівки для художника" },
      formula: "co się wydarzy  ·  kto  ·  emocje, ruch, dźwięk",
      promptPlace: "before",
      prompt: {
        pl: "W tym celu napisz: co się wydarzy; kto i co będzie się znajdować na rysunkach; w jaki sposób pokazać emocje, ruch, dźwięk — wykorzystaj wiedzę o komiksie.",
        ua: "Напиши: що станеться; хто буде на малюнках; як показати емоції, рух, звук — як у коміксі."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Trzy punkty w zeszycie. Potem wzór — twoja historia może być inna.",
            ua: "Три пункти в зошиті. Потім зразок — твоя історія може бути інша."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna fabuła",
          text: {
            pl: [
              "Co się wydarzy: stwór z PYK! wita dziewczyny; spodek zawisa nad ogrodem; blondynka chce uciekać, NASA wyciąga rękę.",
              "Kto na rysunkach: stwór, dwie dziewczyny, spodek, może pies albo rodzic w oknie.",
              "Emocje / ruch / dźwięk: czerwone tło strachu; dymek «O jejku!»; napis WHOOSH! albo PYK!; linie ruchu przy spodku."
            ],
            ua: [
              "Що станеться: істота вітається; тарілка над садом.",
              "Хто: істота, дві дівчини, тарілка.",
              "Емоції / рух / звук: червоне тло, «O jejku!», WHOOSH! / PYK!"
            ]
          }
        }
      ],
      task: {
        id: "t13-s05-wskazowki",
        type: "multiple-choice",
        question: {
          pl: "Co MUSI być we wskazówkach według zad. 4? Zaznacz wszystkie pewne.",
          ua: "Що МАЄ бути у вказівках за завд. 4? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Co się wydarzy.", ua: "Що станеться." } },
          { id: "b", label: { pl: "Kto i co będzie na rysunkach.", ua: "Хто і що буде на малюнках." } },
          { id: "c", label: { pl: "Tylko przepis na makowiec.", ua: "Лише рецепт маковника." } },
          { id: "d", label: { pl: "Jak pokazać emocje, ruch, dźwięk (jak w komiksie).", ua: "Як показати емоції, рух, звук (як у коміксі)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Trzy kropki w zadaniu 4. Czego tam nie ma?",
          ua: "Три пункти в завданні 4. Чого там немає?"
        },
        explanation: {
          pl: "Podręcznik: wydarzenie, kto na rysunku, emocje/ruch/dźwięk. Nie ciasto.",
          ua: "Підручник: подія, хто на малюнку, емоції/рух/звук."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Prezentacja pracy", ua: "Презентація роботи" },
      formula: "USTNIE",
      promptPlace: "before",
      prompt: {
        pl: "Program: prezentuje swoją pracę koleżankom i kolegom. Powiedz: którą scenę wybrałeś, jaki dymek, jaki dźwięk (PYK, WHOOSH…).",
        ua: "Програма: представити роботу. Скажи: яку сцену, яку хмарку, який звук."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Trzy zdania na głos. Potem wzór.",
            ua: "Три речення вголос. Потім зразок."
          }
        },
        {
          formula: "WZÓR  ·  EduMost",
          text: {
            pl: [
              "Narysowaliśmy chwilę po PYK! Stwór wita dziewczyny.",
              "Dymek NASA: «To Proksimas?» Blondynka: «O jejku!»",
              "Dźwięk: WHOOSH! przy spodku. Tło: fiolet jak w monitorze."
            ],
            ua: [
              "Намалювали мить після PYK!",
              "Хмарки: «Це Proksimas?» / «O jejku!»",
              "Звук WHOOSH! при тарілці."
            ]
          }
        }
      ],
      task: {
        id: "t13-s06-prezentacja",
        type: "true-false",
        question: {
          pl: "Czy przy prezentacji warto powiedzieć, JAK pokazaliście emocję i dźwięk (nie tylko «jest ładnie»)?",
          ua: "Чи під час презентації варто сказати, ЯК ви показали емоцію і звук (не лише «гарно»)?"
        },
        answer: true,
        hint: {
          pl: "Lekcja 12: mimika, dymek, PYK! To samo dziś w twojej pracy.",
          ua: "Урок 12: міміка, хмарка, PYK! Те саме сьогодні в твоїй роботі."
        },
        explanation: {
          pl: "Tak: kolegom mówisz, gdzie na rysunku widać strach, ruch i dźwięk. Samo «ładnie» to za mało.",
          ua: "Так: де на малюнку страх, рух і звук. Саме «гарно» замало."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Uczucia w sieci i w telefonie", ua: "Почуття в мережі і в телефоні" },
      formula: "program  ·  USTNIE",
      promptPlace: "before",
      prompt: {
        pl: "Program: opowiedz o różnych sposobach wyrażania uczuć i emocji podczas korzystania z internetu czy telefonu. Porównaj z komiksem: tam mimika i PYK!, tu — emotikony, wykrzykniki, CAPS LOCK, naklejki.",
        ua: "Програма: розкажи, як виражаємо почуття в інтернеті чи телефоні. Порівняй з коміксом: міміка і PYK! тут — емодзі, КАПС."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Dwie–trzy przykłady z życia (bez hejtu, bez danych osobowych). Potem lista.",
            ua: "Два–три приклади з життя (без хейту, без особистих даних)."
          }
        },
        {
          formula: "PRZYKŁADY  ·  EduMost",
          text: {
            pl: [
              "Emotikona / naklejka = szybka mina, jak rysunek twarzy w komiksie.",
              "Wielkie litery i «!!!» = krzyk, jak «IDZIE TU!!!».",
              "Cisza (długie «…» albo brak odpowiedzi) też jest komunikatem — jak pusty kadr."
            ],
            ua: [
              "Емодзі = міміка коміксу.",
              "КАПС і «!!!» = крик.",
              "Тиша / «…» теж повідомлення."
            ]
          }
        }
      ],
      task: {
        id: "t13-s07-internet",
        type: "single-choice",
        question: {
          pl: "Co jest NAJBLIŻSZE dymkowi z wykrzyknikami w komiksie?",
          ua: "Що НАЙБЛИЖЧЕ до хмарки зі знаками оклику в коміксі?"
        },
        options: [
          { id: "a", label: { pl: "Wiadomość WIELKIMI LITERAMI z «!!!».", ua: "Повідомлення ВЕЛИКИМИ ЛІТЕРАМИ з «!!!»." } },
          { id: "b", label: { pl: "Ciche zamknięcie książki bez słowa.", ua: "Тихе закриття книжки без слова." } },
          { id: "c", label: { pl: "Numer strony 30.", ua: "Номер сторінки 30." } }
        ],
        answer: "a",
        hint: {
          pl: "W komiksie «O jejku!!!» — jak to wygląda na czacie?",
          ua: "У коміксі «O jejku!!!» — як це в чаті?"
        },
        explanation: {
          pl: "Wykrzykniki i wielkie litery w dymku ≈ CAPS i «!!!» w wiadomości.",
          ua: "Знаки оклику в хмарці ≈ КАПС і «!!!» в повідомленні."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Konkurs: Zgadnij, co czuję, myślę…", ua: "Конкурс: Здогадайся, що відчуваю…" },
      formula: "program  ·  klasa",
      promptPlace: "before",
      prompt: {
        pl: "Program: przygotujcie konkurs dla rówieśników. Jedna osoba pokazuje minę / gest / dymek bez słów — klasa zgaduje uczucie. Zasady krótko w zeszycie.",
        ua: "Програма: підготуйте конкурс. Один показує міміку / жест / хмарку без слів — клас здогадується."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Napisz 3 zasady. Potem możesz porównać.",
            ua: "Напиши 3 правила. Потім можна порівняти."
          }
        },
        {
          formula: "PRZYKŁAD zasad  ·  EduMost",
          text: {
            pl: [
              "1. Pokazujesz BEZ nazywania uczucia (twarz albo kartka z dymkiem «???»).",
              "2. Klasa ma 10 sekund i jeden strzał: «to strach / złość / radość…».",
              "3. Punkt za trafienie. Żadnych kpin z miny kolegi."
            ],
            ua: [
              "1. Показуєш БЕЗ назви почуття.",
              "2. Клас: 10 секунд, одна спроба.",
              "3. Бал за влучання. Без кпинів."
            ]
          }
        }
      ],
      task: {
        id: "t13-s08-konkurs",
        type: "true-false",
        question: {
          pl: "Czy w konkursie «Zgadnij, co czuję» wolno od razu powiedzieć na głos: «jestem wściekły», zanim klasa zgadnie?",
          ua: "Чи в конкурсі можна одразу сказати вголос «я злий», доки клас не вгадав?"
        },
        answer: false,
        hint: {
          pl: "Tytuł: ZGADNIJ. Czy zgadujemy, gdy już powiedziano?",
          ua: "Назва: ЗДОГАДАЙСЯ. Чи вгадуємо, коли вже сказано?"
        },
        explanation: {
          pl: "Najpierw mina / dymek, potem zgadywanie. Jeśli powiesz uczucie, nie ma co zgadywać.",
          ua: "Спочатку міміка / хмарка, потім здогад."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Informacje o przybyszach", ua: "Відомості про прибульців" },
      formula: "program  ·  USTNIE",
      promptPlace: "before",
      prompt: {
        pl: "Program: przedstaw informacje na temat przybyszów z innej planety. Możesz oprzeć się na *Tytuł?* (Proksimasi) albo na wypowiedzi Łodislanina. 4–5 zdań: skąd, jak wyglądają, czego chcą. Nie zmyślaj faktów spoza komiksu i ramki — reszta to twoja wersja, oznaczona jako pomysł.",
        ua: "Програма: розкажи про прибульців з іншої планети. Можеш опертися на *Tytuł?* (Proksimasi) або на висловлювання Łodislanina. 4–5 речень."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Najpierw sam: co NA PEWNO wiemy z komiksu, a co jest twoim pomysłem. Potem wzór.",
            ua: "Спочатку сам: що НАПЕВНО з коміксу, а що твій задум. Потім зразок."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna wersja",
          text: {
            pl: [
              "Z komiksu: na ekranie widać niebieskiego stwora; NASA mówi o Proksimasach i Proxima B.",
              "Pomysł: przybysz ma wielkie oczy i czułki; przyszedł, bo usłyszał rozmowę o kolonizacji.",
              "Chce powitania, nie wojny — dlatego PYK! z monitora, a nie atak."
            ],
            ua: [
              "З коміксу: синя істота, Proksimasi, Proxima B.",
              "Задум: великі очі, вусики; почув розмову про колонізацію.",
              "Хоче вітання, не війни."
            ]
          }
        }
      ],
      task: {
        id: "t13-s09-przybysze",
        type: "true-false",
        question: {
          pl: "Czy w *Tytuł?* jest podane imię niebieskiego stwora i dokładny opis jego planety (oceany, stolice, język)?",
          ua: "Чи в *Tytuł?* є ім’я синьої істоти і точний опис її планети (океани, столиці, мова)?"
        },
        answer: false,
        hint: {
          pl: "Co naprawdę jest w dymkach, a czego komiks nie mówi?",
          ua: "Що справді є в хмарках, а чого комікс не каже?"
        },
        explanation: {
          pl: "W komiksie nie ma imienia stwora ani pełnego opisu planety. NASA zgaduje Proksimasów. Reszta — twój pomysł, nie fakt z podręcznika.",
          ua: "У коміксі немає імені істоти. NASA здогадується про Proksimasów. Решта — твій задум."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Zad. 3: ja = przybysz, ramka ze s. 30. Zad. 4: co / kto / emocje-ruch-dźwięk. Komiks z lekcji 12: dymki i PYK! W sieci podobnie: emotikony i «!!!».",
        ua: "Завд. 3: я = прибулець, рамка. Завд. 4: що / хто / емоції-рух-звук. Комікс: хмарки і PYK!"
      },
      items: [
        { pl: "Wypowiedź Łodislanina — pierwsza osoba + słownik z ramki.", ua: "Висловлювання Łodislanina — перша особа + словник з рамки." },
        { pl: "Dalszy ciąg: wydarzenie, kto na kadrze, jak pokazać dźwięk.", ua: "Продовження: подія, хто в кадрі, як показати звук." },
        { pl: "Uczucia: w komiksie i na czacie — grafika, nie tylko słowa.", ua: "Почуття: в коміксі і в чаті — графіка, не лише слова." }
      ],
      task: {
        id: "t13-s10-notatka",
        type: "single-choice",
        question: {
          pl: "Co zostawiasz po lekcji 13?",
          ua: "Що лишаєш після уроку 13?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Napisałem, skąd przybył Łodislanin, i zaplanowałem dalszy ciąg z dymkiem i dźwiękiem.",
              ua: "Написав, звідки прибув Łodislanin, і спланував продовження з хмаркою і звуком."
            }
          },
          { id: "b", label: { pl: "Tylko dyktando z ch.", ua: "Лише диктант з ch." } },
          { id: "c", label: { pl: "Nic nie było o komiksie.", ua: "Нічого не було про комікс." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 30? Wypowiedź i dalszy ciąg.",
          ua: "Що на с. 30? Висловлювання і продовження."
        },
        explanation: {
          pl: "Lekcja 13 to zadania 3–4 i prezentacja. Ortografia była wcześniej.",
          ua: "Урок 13 — завдання 3–4 і презентація."
        }
      }
    }
  ]
};
