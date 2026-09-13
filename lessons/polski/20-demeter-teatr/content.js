function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_SCH = "Styl: infografika szkolna, białe tło, karta z fragmentem dramatu. Czytelne etykiety po polsku: numer aktu, numer sceny, tekst poboczny, osoby dramatu, tekst główny. Zero znaku wodnego. PNG.";
var IMG_STYLE_PLAN = "Styl: czarnofigurowa waza grecka na tle terakoty, Demeter i Kora po bokach, pięć pustych tarcz z numerami 1–5, meander. Zero zdań na kadrze, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "../20-demeter-teatr/" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostT20Blocks = [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 44–45  ·  ciąg dalszy  ·  lekcja 20",
      promptPlace: "before",
      prompt: {
        pl: "Ciąg dalszy sztuki z lekcji 19. Teraz s. 44–45: tekst główny i poboczny, akt, scena, dialog, monolog, plan szczegółowy, czytanie ról. Imiona ról: *WIELKIE LITERY kursywą*. Klucze schowane.",
        ua: "Продовження п’єси з уроку 19. Тепер с. 44–45: головний і побічний текст, акт, сцена, діалог, монолог, докладний план, читання ролей. Імена ролей: *ВЕЛИКІ ЛІТЕРИ курсивом*. Ключі сховані."
      },
      items: [
        { pl: "wskażę *akt, scenę, osoby dramatu*;", ua: "вкажу *акт, сцену, особи драми*;" },
        { pl: "odróżnię *tekst główny* (po dwukropku) od *pobocznego* (kursywa / didaskalia);", ua: "розрізню *головний текст* (після двокрапки) від *побічного* (курсив / дидаскалії);" },
        { pl: "odróżnię *dialog* od *monologu*;", ua: "розрізню *діалог* від *монологу*;" },
        { pl: "uzupełnię *plan szczegółowy* wydarzeń;", ua: "доповню *докладний план* подій;" },
        { pl: "przygotuję scenkę albo czytanie z podziałem na role.", ua: "підготую сценку або читання з поділом на ролі." }
      ],
      task: {
        id: "t20-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Odróżnić tekst główny od pobocznego (didaskalia).", ua: "Розрізнити головний текст від побічного (дидаскалії)." } },
          { id: "b", label: { pl: "Uzupełnić plan szczegółowy ze s. 44.", ua: "Доповнити докладний план зі с. 44." } },
          { id: "c", label: { pl: "Tylko na nowo wymienić glosę Eleusis — i nic więcej.", ua: "Лише знову назвати глосу Eleusis — і більше нічого." } },
          { id: "d", label: { pl: "Przygotować czytanie ról albo milczącą scenkę z planu.", ua: "Підготувати читання ролей або німу сценку з плану." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Zadania 2–5 są na s. 44–45. Eleusis była wczoraj.",
          ua: "Завдання 2–5 на с. 44–45. Eleusis була вчора."
        },
        explanation: {
          pl: "Dziś: budowa sztuki, plan, inscenizacja. Eleusis i treść mitu — lekcja 19.",
          ua: "Сьогодні: будова п’єси, план, інсценізація. Eleusis і зміст міфу — урок 19."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Ramka · jak zbudowana jest sztuka", ua: "Рамка · як збудована п’єса" },
      formula: "s. 44  ·  definicje",
      promptPlace: "before",
      prompt: {
        pl: "To ramka z podręcznika. Polski tekst pierwszy. Włącz 🇺🇦 — tłumaczenie pod akapitem. Zapamiętaj sześć haseł.",
        ua: "Це рамка з підручника. Польський текст перший. Увімкни 🇺🇦 — переклад під абзацом. Запам’ятай шість термінів."
      },
      text: {
        pl: [
          "W utworze przeznaczonym do wystawienia na scenie wypowiedzi bohaterów (dialogi i monologi) stanowią *tekst główny*, a wskazówki dla wszystkich twórców przedstawienia, informacje o miejscu i czasie zdarzeń to *tekst poboczny* (didaskalia).",
          "*Akt* to część sztuki teatralnej wydzielona ze względu na zmianę miejsca lub czasu akcji.",
          "*Scena* to część aktu, wydzielona ze względu na pojawienie się na scenie jakiejś postaci lub jej zejście ze sceny.",
          "*Dialog* to rozmowa co najmniej dwóch osób. *Monolog* to wypowiedź jednej osoby kierowana do siebie lub do widza czy czytelnika."
        ],
        ua: [
          "У творі для постановки на сцені висловлювання героїв (діалоги і монологи) становлять *головний текст*, а вказівки для творців вистави, відомості про місце і час подій — це *побічний текст* (дидаскалії).",
          "*Акт* — частина театральної п’єси, виокремлена через зміну місця або часу дії.",
          "*Сцена* — частина акту, виокремлена через появу на сцені якоїсь постаті або її сходження зі сцени.",
          "*Діалог* — розмова щонайменше двох осіб. *Монолог* — висловлювання однієї особи до себе або до глядача / читача."
        ]
      },
      task: {
        id: "t20-s02-ramka",
        type: "single-choice",
        question: {
          pl: "Czym są didaskalia w tej ramce?",
          ua: "Чим є дидаскалії в цій рамці?"
        },
        options: [
          { id: "a", label: { pl: "Tekstem pobocznym: wskazówki o miejscu, czasie, ruchu — często kursywą.", ua: "Побічним текстом: вказівки про місце, час, рух — часто курсивом." } },
          { id: "b", label: { pl: "Tylko dialogiem Kory z Hadesem.", ua: "Лише діалогом Кори з Аїдом." } },
          { id: "c", label: { pl: "Tytułem wiersza Twardowskiego.", ua: "Назвою вірша Твардовського." } }
        ],
        answer: "a",
        hint: {
          pl: "Ramka: «wskazówki… miejsce i czas… tekst poboczny (didaskalia)».",
          ua: "Рамка: «вказівки… місце і час… побічний текст (дидаскалії)»."
        },
        explanation: {
          pl: "Didaskalia = tekst poboczny. Tekst główny to to, co mówią postacie po dwukropku.",
          ua: "Дидаскалії = побічний текст. Головний текст — те, що говорять постаті після двокрапки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Schemat · akt, scena, role", ua: "Схема · акт, сцена, ролі" },
      formula: "s. 44  ·  osoby dramatu",
      visual: vizGh("t20-schemat.png", {
        alt: {
          pl: "Schemat fragmentu sztuki: numer aktu, numer sceny, tekst poboczny, osoby dramatu, tekst główny",
          ua: "Схема уривка п’єси: номер акту, номер сцени, побічний текст, особи драми, головний текст"
        },
        title: { pl: "Slajd · schemat dramatu", ua: "Слайд · схема драми" },
        prompt: {
          pl: IMG_STYLE_SCH + " Karta ze s. 44: fragment Akt III Scena 1, strzałki: numer aktu, numer sceny, tekst poboczny, osoby dramatu, tekst główny. Imiona ról WIELKIMI LITERAMI. PNG 4:3.",
          ua: "Картка зі с. 44: акт, сцена, побічний і головний текст, особи драми. Без водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "W podręczniku strzałki wskazują części. *Osoby dramatu* to imiona ról — u nas zawsze WIELKIMI LITERAMI i kursywą, jak w teatrze. Przeczytaj fragment.",
        ua: "У підручнику стрілки вказують частини. *Особи драми* — імена ролей: у нас завжди ВЕЛИКИМИ літерами і курсивом. Прочитай уривок."
      },
      text: {
        pl: [
          "*Akt III*",
          "*Scena 1*",
          "*Eleusis. Kryjówka Demeter. Bogini siedzi przed pieczarą. Wygląda jak zwyczajna kobieta.*",
          "**DEMETER:** *(lamentuje)* Koro, moje dziecko… Koro, moja córeczko…",
          "**HERMES:** *(niedostrzeżony staje przed Demeter)* Witaj, Demeter!",
          "Imię roli (DEMETER, HERMES) = *osoby dramatu*. To, co po dwukropku, bez nawiasu = *tekst główny*. Kursywa w nawiasie i opis miejsca = *tekst poboczny*."
        ],
        ua: [
          "*Акт III*",
          "*Сцена 1*",
          "*Елевсін. Криївка Деметри. Богиня сидить перед печерою. Виглядає як звичайна жінка.*",
          "**ДЕМЕТРА:** *(голосить)* Коро, моя дитино… Коро, моя донечко…",
          "**ГЕРМЕС:** *(непомічений стає перед Деметрою)* Вітай, Деметро!",
          "Ім’я ролі (ДЕМЕТРА, ГЕРМЕС) = *особи драми*. Те, що після двокрапки, без дужок = *головний текст*. Курсив у дужках і опис місця = *побічний текст*."
        ]
      },
      task: {
        id: "t20-s03-schemat",
        type: "single-choice",
        question: {
          pl: "Co w tym fragmencie jest *osobą dramatu*?",
          ua: "Що в цьому уривку є *особою драми*?"
        },
        options: [
          { id: "a", label: { pl: "Imiona ról: DEMETER, HERMES (wielkie litery przed dwukropkiem).", ua: "Імена ролей: ДЕМЕТРА, ГЕРМЕС (великі літери перед двокрапкою)." } },
          { id: "b", label: { pl: "Tylko zdanie «Eleusis. Kryjówka Demeter.»", ua: "Лише речення «Елевсін. Криївка Деметри.»" } },
          { id: "c", label: { pl: "Autor Anna Murdzek jako postać na scenie.", ua: "Авторка Анна Мурджек як постать на сцені." } }
        ],
        answer: "a",
        hint: {
          pl: "Schemat: strzałka «osoby dramatu» idzie do imienia przed dwukropkiem.",
          ua: "Схема: стрілка «особи драми» йде до імені перед двокрапкою."
        },
        explanation: {
          pl: "Osoby dramatu = nazwy ról wielkimi literami. Eleusis to didaskalia (miejsce). Murdzek napisała sztukę, nie wchodzi na scenę.",
          ua: "Особи драми = назви ролей великими літерами. Елевсін — дидаскалії (місце)."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Role · wielkie litery i kursywa", ua: "Ролі · великі літери і курсив" },
      formula: "s. 41  ·  osoby dramatu",
      promptPlace: "before",
      prompt: {
        pl: "Tak zapisujemy *każdą* rolę w lekcjach 19–20: WIELKIE LITERY + kursywa, potem dwukropek, potem replika. Didaskalia w nawiasie zostają zwykłą kursywą.",
        ua: "Так записуємо *кожну* роль на уроках 19–20: ВЕЛИКІ ЛІТЕРИ + курсив, потім двокрапка, потім репліка. Дидаскалії в дужках лишаються звичайним курсивом."
      },
      text: {
        pl: [
          "**PIERWSZA NIMFA:** Nie zbliżaj się do niego! Przecież wiesz, że to kwiat nieszczęśliwego myśliwego Narcyza, który odrzucił miłość nimfy Echo.",
          "**KYANE:** Ileż jej żałosnych skarg rozbrzmiewało wśród lasów i skał Hellady!",
          "**DRUGA NIMFA:** Ileż łez wylałyśmy z naszą siostrą, której sercem wzgardził nieczuły młodzieniec!",
          "Trzy różne *osoby dramatu*, trzy repliki. To dialog (mówi więcej niż jedna osoba), nie monolog."
        ],
        ua: [
          "**ПЕРША НІМФА:** Не наближайся до нього! Адже знаєш, що це квітка нещасного мисливця Нарциса, який відкинув любов німфи Ехо.",
          "**КИАНА:** Скільки її жалісних скарг лунало серед лісів і скель Еллади!",
          "**ДРУГА НІМФА:** Скільки сліз ми пролили з нашою сестрою, серцем якої знехтував черствий юнак!",
          "Три різні *особи драми*, три репліки. Це діалог (говорить більше ніж одна особа), не монолог."
        ]
      },
      task: {
        id: "t20-s04-role",
        type: "true-false",
        question: {
          pl: "Czy te trzy repliki (PIERWSZA NIMFA, KYANE, DRUGA NIMFA) to dialog — rozmowa więcej niż jednej osoby?",
          ua: "Чи ці три репліки (ПЕРША НІМФА, КИАНА, ДРУГА НІМФА) — діалог: розмова більше ніж однієї особи?"
        },
        answer: true,
        hint: {
          pl: "Definicja: dialog = co najmniej dwie osoby. Ile imion ról tu stoi?",
          ua: "Означення: діалог = щонайменше дві особи. Скільки імен ролей тут стоїть?"
        },
        explanation: {
          pl: "Tak: trzy osoby dramatu odpowiadają sobie. Monolog byłby jedną osobą (np. długa skarga Demeter do Heliosa — blisko monologu, choć woła boga).",
          ua: "Так: три особи драми відповідають одна одній. Монолог був би однією особою."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2a · części utworu", ua: "Завд. 2а · частини твору" },
      formula: "s. 44  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Powiedzcie, z jakich części jest zbudowany tekst i co zawierają te części. Najpierw zeszyt — potem klucz.",
        ua: "Скажіть, з яких частин збудований текст і що містять ці частини. Спочатку зошит — потім ключ."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Policz nagłówki AKT i Scena w sztuce (lekcja 19). W zeszycie: ile aktów? ile scen w każdym? czym akt różni się od sceny?",
            ua: "Полічи заголовки AKT і Scena в п’єсі (урок 19). У зошиті: скільки актів? скільки сцен у кожному? чим акт відрізняється від сцени?"
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z tekstu",
          text: {
            pl: [
              "Trzy akty, w każdym po dwie sceny (I.1 łąka; I.2 Hades; II.1 Hekate; II.2 Helios; III.1 Eleusis; III.2 Olimp).",
              "Akt: zmiana miejsca / czasu (łąka → pola → Eleusis / Olimp) i kurtyna.",
              "Scena: wejście lub zejście postaci (Hades wychodzi spod ziemi; Hekate odchodzi; Hermes się pojawia)."
            ],
            ua: [
              "Три акти, у кожному по дві сцени (I.1 лука; I.2 Аїд; II.1 Геката; II.2 Геліос; III.1 Елевсін; III.2 Олімп).",
              "Акт: зміна місця / часу і завіса.",
              "Сцена: поява або сходження постаті."
            ]
          }
        }
      ],
      task: {
        id: "t20-s05-czesci",
        type: "single-choice",
        question: {
          pl: "Z ilu aktów i scen zbudowana jest ta sztuka?",
          ua: "Зі скількох актів і сцен збудована ця п’єса?"
        },
        options: [
          { id: "a", label: { pl: "3 akty × 2 sceny.", ua: "3 акти × 2 сцени." } },
          { id: "b", label: { pl: "Jeden akt i dwanaście strof jak w wierszu.", ua: "Один акт і дванадцять строф як у вірші." } },
          { id: "c", label: { pl: "Sześć dni stwarzania z Księgi Rodzaju.", ua: "Шість днів творення з Книги Буття." } }
        ],
        answer: "a",
        hint: {
          pl: "Kartkuj s. 40–43: AKT I, II, III; pod każdym Scena 1 i Scena 2.",
          ua: "Гортай с. 40–43: AKT I, II, III; під кожним Scena 1 і Scena 2."
        },
        explanation: {
          pl: "3 × 2. To nie wiersz i nie sześć dni Biblii.",
          ua: "3 × 2. Це не вірш і не шість днів Біблії."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2b · kursywa i dwukropek", ua: "Завд. 2б · курсив і двокрапка" },
      formula: "s. 44  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Ustalcie, jakie informacje zapisano kursywą, a czym jest tekst po dwukropku. Najpierw sami.",
        ua: "Установіть, які відомості записано курсивом, а чим є текст після двокрапки. Спочатку самі."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Weź jedną replikę, np. **KYANE:** *(z przerażeniem)* Koro, to Hades… W zeszycie dwie kolumny: kursywa / po dwukropku.",
            ua: "Візьми одну репліку, напр. **КИАНА:** *(з жахом)* Коро, це Аїд… У зошиті дві колонки: курсив / після двокрапки."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z ramki",
          text: {
            pl: [
              "Kursywa + nawiasy = *tekst poboczny* (didaskalia): miejsce («Brzeg morza…»), ruch («Kora się pochyla…»), jak mówić («z przerażeniem»).",
              "Po dwukropku, przy imieniu roli = *tekst główny*: to, co aktor ma powiedzieć na głos.",
              "Imię roli: WIELKIE LITERY, kursywa, dwukropek — to nie didaskalia, to *osoba dramatu*."
            ],
            ua: [
              "Курсив + дужки = *побічний текст* (дидаскалії): місце, рух, як говорити.",
              "Після двокрапки = *головний текст*: те, що актор має сказати вголос.",
              "Ім’я ролі: ВЕЛИКІ ЛІТЕРИ, курсив, двокрапка — це не дидаскалії, це *особа драми*."
            ]
          }
        }
      ],
      task: {
        id: "t20-s06-kursywa",
        type: "multiple-choice",
        question: {
          pl: "Co jest prawdą? Zaznacz wszystkie pewne.",
          ua: "Що є правдою? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kursywa w didaskaliach to tekst poboczny (miejsce, gest, nastrój).", ua: "Курсив у дидаскаліях — побічний текст (місце, жест, настрій)." } },
          { id: "b", label: { pl: "Zdania po dwukropku przy roli to tekst główny (dialog / monolog).", ua: "Речення після двокрапки біля ролі — головний текст (діалог / монолог)." } },
          { id: "c", label: { pl: "Kursywa «Brzeg morza…» to tekst główny, bo jest długa.", ua: "Курсив «Берег моря…» — головний текст, бо він довгий." } },
          { id: "d", label: { pl: "Imię **PIERWSZA NIMFA:** oznacza osobę dramatu, nie didaskalia.", ua: "Ім’я **ПЕРША НІМФА:** означає особу драми, не дидаскалії." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Ramka s. 44: wypowiedzi = główny; wskazówki = poboczny. Gdzie stoi imię roli?",
          ua: "Рамка с. 44: висловлювання = головний; вказівки = побічний. Де стоїть ім’я ролі?"
        },
        explanation: {
          pl: "Długość nic nie zmienia. «Brzeg morza» jest kursywą = poboczny. Role wielkimi literami = osoby dramatu.",
          ua: "Довжина нічого не змінює. «Берег моря» курсивом = побічний. Ролі великими літерами = особи драми."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Plan szczegółowy", ua: "Докладний план" },
      formula: "s. 45  ·  ramka",
      visual: vizGh("t20-plan.png", {
        alt: {
          pl: "Demeter i Kora w stylu wazy greckiej, pięć numerowanych pól planu",
          ua: "Деметра і Кора в стилі грецької вази, п’ять пронумерованих полів плану"
        },
        title: { pl: "Slajd · pięć punktów planu", ua: "Слайд · п’ять пунктів плану" },
        prompt: {
          pl: IMG_STYLE_PLAN + " Kadr ze s. 44–45: czarnofigurowe sylwetki Demeter (kłos) i Kory, pięć tarcz 1–5, ornament meander, tło terakota. Bez zdań na obrazie. PNG 4:3.",
          ua: "Чорнофігурні Деметра і Кора, п’ять номерів плану, меандр. Без написів-речень."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Ramka s. 45: w *planie szczegółowym*, oprócz głównych wydarzeń, w podpunktach umieszczamy wydarzenia bardziej szczegółowe. Podręcznik już zaczął plan — ty dopiszesz luki.",
        ua: "Рамка с. 45: у *докладному плані* крім головних подій у підпунктах ставимо події детальніші. Підручник уже почав план — ти допишеш пропуски."
      },
      text: {
        pl: [
          "1. Zabawa Kory na łące. a) Zrywanie kwiatów i plecenie wianków. b) Podziwianie kwiatu narcyza. c) Zerwanie rośliny.",
          "2. Spotkanie z Hadesem. a) Przybycie Hadesa. b) Daremna próba uratowania Kory przez Kyane. c) ?  d) Uprowadzenie Kory do Tartaru.",
          "3. Poszukiwanie córki przez Demeter. a) Otrzymanie wskazówki od Hekate. b) Poznanie prawdy dzięki Heliosowi. c) ?",
          "4. Życie Demeter w osamotnieniu. a) Rozpacz matki. b) ?  c) ?",
          "5. Przybycie Demeter na Olimp. a) ?  b) Radosne spotkanie matki i córki. c) ?"
        ],
        ua: [
          "1. Забава Кори на луці. a) Зривання квітів і плетіння вінків. b) Милування квіткою нарциса. c) Зірвання рослини.",
          "2. Зустріч з Аїдом. a) Прибуття Аїда. b) Даремна спроба врятувати Кору Кианою. c) ?  d) Викрадення Кори до Тартару.",
          "3. Пошуки доньки Деметрою. a) Вказівка від Гекати. b) Правда завдяки Геліосу. c) ?",
          "4. Життя Деметри в самотності. a) Відчай матері. b) ?  c) ?",
          "5. Прибуття Деметри на Олімп. a) ?  b) Радісна зустріч матері і доньки. c) ?"
        ]
      },
      task: {
        id: "t20-s07-plan-co",
        type: "true-false",
        question: {
          pl: "Czy w planie szczegółowym w podpunktach (a, b, c…) umieszczamy wydarzenia *bardziej szczegółowe* niż główny numer?",
          ua: "Чи в докладному плані в підпунктах (a, b, c…) ставимо події *детальніші*, ніж головний номер?"
        },
        answer: true,
        hint: {
          pl: "Dosłownie ramka s. 45.",
          ua: "Дослівно рамка с. 45."
        },
        explanation: {
          pl: "Tak. 1. to główne wydarzenie; 1.a, 1.b, 1.c to szczegóły. Luki (?) uzupełnisz w następnym zadaniu.",
          ua: "Так. 1. — головна подія; 1.a, 1.b, 1.c — деталі. Пропуски (?) допишеш у наступному завданні."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · uzupełnij plan", ua: "Завд. 3 · доповни план" },
      formula: "s. 44  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Korzystając z tekstu głównego i tekstu pobocznego, uzupełnij plan wydarzeń szczegółowymi. Najpierw sam — luki z podręcznika. Potem klucz.",
        ua: "Користуючись головним і побічним текстом, доповни план подій деталями. Спочатку сам — пропуски з підручника. Потім ключ."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szukaj w sztuce (lekcja 19): krzyk Kory i słowa Hadesa; klątwa ziemi; Eleusis; Hermes / Rea; wyrok Zeusa; wiosna.",
            ua: "Шукай у п’єсі (урок 19): крик Кори і слова Аїда; прокляття землі; Елевсін; Гермес / Рея; вирок Зевса; весна."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z tekstu sztuki",
          text: {
            pl: [
              "2.c) Wezwanie Kory o ratunek i słowa Hadesa: «Tyś także moja».",
              "3.c) Klątwa Demeter: ziemia jałowa; wyrzeczenie się Olimpu.",
              "4.b) Kryjówka w Eleusis; Demeter wygląda jak zwyczajna kobieta.",
              "4.c) Hermes / wieść od Rei; Demeter idzie na Olimp.",
              "5.a) Wyrok Zeusa: jako Persefona 1/3 roku u męża, 2/3 u matki.",
              "5.c) Powrót wiosny: ziemia zazielenia się, plony, śpiew ptaków."
            ],
            ua: [
              "2.c) Заклик Кори про порятунок і слова Аїда: «Ти теж моя».",
              "3.c) Прокляття Деметри: неродюча земля; зрікання Олімпу.",
              "4.b) Криївка в Елевсіні; Деметра виглядає як звичайна жінка.",
              "4.c) Гермес / вість від Реї; Деметра йде на Олімп.",
              "5.a) Вирок Зевса: як Персефона 1/3 року в чоловіка, 2/3 у матері.",
              "5.c) Повернення весни: земля зеленіє, плоди, спів птахів."
            ]
          }
        }
      ],
      task: {
        id: "t20-s08-luki",
        type: "multiple-choice",
        question: {
          pl: "Które uzupełnienia NA PEWNO pasują do luk w planie? Zaznacz wszystkie pewne.",
          ua: "Які доповнення НАПЕВНО пасують до пропусків у плані? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "3.c = klątwa: ziemia jałowa, Demeter nie wraca na Olimp.", ua: "3.c = прокляття: неродюча земля, Деметра не вертається на Олімп." } },
          { id: "b", label: { pl: "5.a = wyrok Zeusa: 1/3 roku u Hadesa, 2/3 u Demeter.", ua: "5.a = вирок Зевса: 1/3 року в Аїда, 2/3 у Деметри." } },
          { id: "c", label: { pl: "2.c = Kora idzie na wagary do szkoły.", ua: "2.c = Кора йде на прогул до школи." } },
          { id: "d", label: { pl: "5.c = wezwanie wiosny / świat się zazielenia.", ua: "5.c = заклик весни / світ зеленіє." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Luki muszą być *w tej sztuce*. Czy Kora chodzi do szkoły?",
          ua: "Пропуски мають бути *у цій п’єсі*. Чи Кора ходить до школи?"
        },
        explanation: {
          pl: "Z tekstu: klątwa, wyrok 1/3 i 2/3, wiosna. Wagary — nie ma w utworze.",
          ua: "З тексту: прокляття, вирок 1/3 і 2/3, весна. Прогулу в творі немає."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · scenka bez słów", ua: "Завд. 4 · сценка без слів" },
      formula: "s. 45  ·  grupy",
      promptPlace: "before",
      prompt: {
        pl: "Dobierzcie się w grupy. Zadaniem każdej grupy będzie przygotowanie i przedstawienie scenki ilustrującej wybrany punkt szczegółowy planu (lub kilka punktów) za pomocą ruchu ciała, gestów i mimiki. Reszta klasy powinna rozpoznać, o którą sytuację chodzi.",
        ua: "Об’єднайтесь у групи. Завдання кожної групи: підготувати і показати сценку до вибраного пункту плану (або кількох) рухом тіла, жестами і мімікою. Решта класу має впізнати, про яку ситуацію йдеться."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Wybierzcie numer z planu (np. 1.c zerwanie narcyza; 2.d uprowadzenie; 5.b objęcia). Zero słów. 30–45 sekund. Klasa zgaduje numer.",
            ua: "Оберіть номер з плану (напр. 1.c зірвання нарциса; 2.d викрадення; 5.b обійми). Без слів. 30–45 секунд. Клас здогадується номер."
          }
        },
        {
          formula: "KRYTERIA  ·  EduMost",
          text: {
            pl: [
              "Widać gest z didaskaliów (pochylenie, chwyt za rękę, ręce ku niebu) — nie chaotyczny taniec «bo ładnie».",
              "Klasa potrafi powiedzieć numer planu, nie zgaduje «jakiś mit».",
              "Słownictwo po pokazie: akt, scena, didaskalia, mimika — nie «PYK!»."
            ],
            ua: [
              "Видно жест з дидаскалій (нахил, хапання за руку, руки до неба).",
              "Клас може сказати номер плану.",
              "Словництво після показу: акт, сцена, дидаскалії, міміка."
            ]
          }
        }
      ],
      task: {
        id: "t20-s09-scenka",
        type: "single-choice",
        question: {
          pl: "Która scenka spełnia polecenie zadania 4?",
          ua: "Яка сценка виконує завдання 4?"
        },
        options: [
          { id: "a", label: { pl: "Grupa milczy, gestami pokazuje zerwanie kwiatu / porwanie; klasa zgaduje punkt planu.", ua: "Група мовчить, жестами показує зірвання квітки / викрадення; клас здогадується пункт плану." } },
          { id: "b", label: { pl: "Ktoś czyta cały Akt III na głos, bez gestu.", ua: "Хтось читає вголос увесь акт III, без жесту." } },
          { id: "c", label: { pl: "Klasa recytuje wiersz Twardowskiego.", ua: "Клас декламує вірш Твардовського." } }
        ],
        answer: "a",
        hint: {
          pl: "Polecenie: ruch, gesty, mimika + klasa rozpoznaje sytuację z planu.",
          ua: "Завдання: рух, жести, міміка + клас упізнає ситуацію з плану."
        },
        explanation: {
          pl: "To pantomima do punktu planu. Czytanie ról jest zadaniem 5. Twardowski — lekcje 17–18.",
          ua: "Це пантоміма до пункту плану. Читання ролей — завдання 5."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 5 · TO NASZ PROJEKT! Czytanie ról", ua: "Завд. 5 · ЦЕ НАШ ПРОЄКТ! Читання ролей" },
      formula: "s. 45  ·  zespoły",
      promptPlace: "before",
      prompt: {
        pl: "W zespołach przygotujcie czytanie tekstu «Demeter i Kora» z podziałem na role. Imiona ról mówcie / zapisujcie WIELKIMI LITERAMI. Potem próba i rozmowa, na ile udało się osiągnąć cele.",
        ua: "У командах підготуйте читання тексту «Demeter i Kora» з поділом на ролі. Імена ролей кажіть / записуйте ВЕЛИКИМИ літерами. Потім проба і розмова, наскільки вдалося досягти цілей."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Checklista z podręcznika: 1) przydzielcie role postaci biorących udział w zdarzeniach; 2) ustalcie emocje i nastrój przy wypowiedziach; 3) czytajcie sceny z odpowiednim natężeniem głosu; 4) przeprowadźcie próbę; 5) porozmawiajcie, na ile się udało.",
            ua: "Чекліст з підручника: 1) розподіліть ролі; 2) емоції і настрій; 3) читайте з відповідною силою голосу; 4) зробіть пробу; 5) обговоріть, наскільки вдалося."
          }
        },
        {
          formula: "PRZYKŁAD  ·  podział ról",
          text: {
            pl: [
              "Ktoś czyta didaskalia (kursywa). Osobno: **KORA**, **PIERWSZA / DRUGA / TRZECIA NIMFA**, **KYANE**, **HADES**, **DEMETER**, **HEKATE**, **GŁOS HELIOSA**, **HERMES**, **ZEUS**.",
              "Emocja: łąka = radość; scena 2 = strach; akt II = żal; akt III scena 2 = nadzieja.",
              "Po próbie jedno zdanie słownictwem teatralnym: didaskalia, kurtyna, akt, scena, dialog, monolog."
            ],
            ua: [
              "Хтось читає дидаскалії (курсив). Окремо: **КОРА**, **НІМФИ**, **КИАНА**, **АЇД**, **ДЕМЕТРА**, **ГЕКАТА**, **ГОЛОС ГЕЛІОСА**, **ГЕРМЕС**, **ЗЕВС**.",
              "Емоція: лука = радість; сцена 2 = страх; акт II = жаль; акт III сцена 2 = надія.",
              "Після проби одне речення театральним словництвом: дидаскалії, завіса, акт, сцена, діалог, монолог."
            ]
          }
        }
      ],
      task: {
        id: "t20-s10-projekt",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO trzeba zrobić w tym projekcie? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО треба зробити в цьому проєкті? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Przydzielić role i ustalić emocje / natężenie głosu.", ua: "Розподілити ролі і встановити емоції / силу голосу." } },
          { id: "b", label: { pl: "Zrobić próbę czytania i omówić, czy cele się udały.", ua: "Зробити пробу читання і обговорити, чи цілі вдалися." } },
          { id: "c", label: { pl: "Zastąpić sztukę wierszem o jagodach.", ua: "Замінити п’єсу віршем про ягоди." } },
          { id: "d", label: { pl: "Czytać kolejne sceny, nie tylko jedną linijkę «na odczepnego».", ua: "Читати наступні сцени, не лише один рядок «для галочки»." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pięć punktów wypunktowania na s. 45. Czy Twardowski tam stoi?",
          ua: "П’ять пунктів на с. 45. Чи Твардовський там стоїть?"
        },
        explanation: {
          pl: "Projekt = role, emocje, głos, próba, omówienie, kolejne sceny. Jagody — inna lekcja.",
          ua: "Проєкт = ролі, емоції, голос, проба, обговорення, наступні сцени."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu razem z lekcją 19.",
        ua: "Це забираєш у зошит разом з уроком 19."
      },
      items: [
        { pl: "Tekst główny = wypowiedzi po dwukropku (dialog / monolog). Tekst poboczny = didaskalia (kursywa).", ua: "Головний текст = висловлювання після двокрапки. Побічний = дидаскалії (курсив)." },
        { pl: "Akt: zmiana miejsca/czasu. Scena: wejście lub zejście postaci. 3 akty × 2 sceny.", ua: "Акт: зміна місця/часу. Сцена: поява або сходження постаті. 3 акти × 2 сцени." },
        { pl: "Osoby dramatu zapisujemy WIELKIMI LITERAMI kursywą: **PIERWSZA NIMFA:**, **KYANE:**, **DEMETER:**…", ua: "Особи драми записуємо ВЕЛИКИМИ літерами курсивом: **ПЕРША НІМФА:**, **КИАНА:**, **ДЕМЕТРА:**…" },
        { pl: "Plan szczegółowy: główne punkty + podpunkty. Inscenizacja: gest albo czytanie ról.", ua: "Докладний план: головні пункти + підпункти. Інсценізація: жест або читання ролей." }
      ],
      task: {
        id: "t20-s11-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz lekcję 20?",
          ua: "Яка нотатка показує, що вмієш урок 20?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Główny vs poboczny, akt i scena, plan z lukami, czytanie ról. Imiona ról wielkimi literami kursywą.",
              ua: "Головний vs побічний, акт і сцена, план з пропусками, читання ролей. Імена ролей великими літерами курсивом."
            }
          },
          { id: "b", label: { pl: "Tylko glosa Eleusis — i zamykam zeszyt na zawsze.", ua: "Лише глоса Eleusis — і закриваю зошит назавжди." } },
          { id: "c", label: { pl: "Świat stworzyli olbrzymi, a Kora napisała wiersz o jagodach.", ua: "Світ створили велетні, а Кора написала вірш про ягоди." } }
        ],
        answer: "a",
        hint: {
          pl: "Eleusis była wczoraj. Co jest na s. 44–45?",
          ua: "Eleusis була вчора. Що на с. 44–45?"
        },
        explanation: {
          pl: "Lekcja 20 = s. 44–45: teatr i plan. Eleusis — 19. Olbrzymi — 14. Jagody — 17–18.",
          ua: "Урок 20 = с. 44–45. Eleusis — 19. Велетні — 14. Ягоди — 17–18."
        }
      }
    }
  ];

(function () {
  var part = window.EduMostT20Blocks || [];
  var prev = window.EduMostLessonContent && window.EduMostLessonContent.blocks;
  if (prev && prev.length) {
    window.EduMostLessonContent = { blocks: prev.concat(part) };
  } else {
    window.EduMostLessonContent = { blocks: part };
  }
})();
