function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_CRANE = "Styl: olej XIX w. jak Walter Crane «Los Persefony» (1877) — akademicki realizm, czarne konie, rydwan, Demeter w pomarańczowej szacie, Kora w jasnym chitonie, łąka z makami i narcyzem. Zero napisów na kadrze, zero znaku wodnego. PNG poziomy.";
var IMG_STYLE_LAKA = "Styl: akwarela podręcznikowa GWO «Między nami» klasa 5 — brzeg morza, kwiecista łąka (maki, dzwonki, jaskry), jeden biały narcyz po prawej, Kora i tańczące nimfy, rusałka Kyane. Miękki kontur tuszu, płaskie cienie, zero napisów, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 40–45  ·  Anna Murdzek  ·  lekcja 19 + 20",
      promptPlace: "before",
      prompt: {
        pl: "Jedna sztuka, dwie części pod rząd. Część 1 (s. 40–43): mit na scenie, bohaterowie, Eleusis. Część 2 (kolejne ekrany, s. 44–45): akt, scena, didaskalia, plan, role. Polski tekst pierwszy. Włącz 🇺🇦 — pod repliką tłumaczenie. Klucze schowane.",
        ua: "Одна п’єса, дві частини підряд. Частина 1 (с. 40–43): міф на сцені, герої, Eleusis. Частина 2 (наступні екрани, с. 44–45): акт, сцена, дидаскалії, план, ролі. Польський текст перший. Увімкни 🇺🇦 — під реплікою переклад. Ключі сховані."
      },
      items: [
        { pl: "odróżnię *naukową* przyczynę pór roku od *mitycznej*;", ua: "розрізню *наукову* причину пір року від *міфічної*;" },
        { pl: "wymyślę fantastyczną przyczynę zmian pór roku;", ua: "вигадаю фантастичну причину зміни пір року;" },
        { pl: "zrelacjonuję sztukę Anny Murdzek *Demeter i Kora* (czas, miejsce, wydarzenia);", ua: "перекажу п’єсу Анни Мурджек *Demeter i Kora* (час, місце, події);" },
        { pl: "wymienię najważniejszych *bohaterów*;", ua: "назву найважливіших *героїв*;" },
        { pl: "wyjaśnię glosę *Eleusis* i trudne słowa z tekstu.", ua: "поясню глосу *Eleusis* і важкі слова з тексту." }
      ],
      task: {
        id: "t19-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Opowiedzieć, co dzieje się w sztuce (Kora, Hades, Demeter, Zeus).", ua: "Розповісти, що діється в п’єсі (Кора, Аїд, Деметра, Зевс)." } },
          { id: "b", label: { pl: "Wymienić najważniejszych bohaterów.", ua: "Назвати найважливіших героїв." } },
          { id: "c", label: { pl: "Tylko dyktando z rz — i zamykam lekcję przed planem.", ua: "Лише диктант з rz — і закриваю урок перед планом." } },
          { id: "d", label: { pl: "Wyjaśnić Eleusis i trudne słowa (woń, jałowa, pieczara…).", ua: "Пояснити Eleusis і важкі слова (woń, jałowa, pieczara…)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę części 1. Plan i didaskalia są w części 2 — na kolejnych ekranach, nie zamiast mitu.",
          ua: "Подивись на список частини 1. План і дидаскалії — в частині 2, на наступних екранах, не замість міфу."
        },
        explanation: {
          pl: "Część 1: mit na scenie, treść, bohaterowie, słownictwo. Część 2 (dalej w tej lekcji): plan, akt, didaskalia. Rz było na lekcjach 7–8.",
          ua: "Частина 1: міф на сцені, зміст, герої, словництво. Частина 2 (далі в цьому уроці): план, акт, дидаскалії."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Mit na scenie — nie wiersz i nie Biblia", ua: "Міф на сцені — не вірш і не Біблія" },
      formula: "s. 40  ·  Jak starożytni tłumaczyli pory roku?",
      promptPlace: "before",
      prompt: {
        pl: "Dział w podręczniku: *Jak starożytni tłumaczyli pory roku?* To już nie Twardowski i nie Księga Rodzaju — to *sztuka teatralna* według mitu. Autor: Anna Murdzek. Na podstawie opracowania Wandy Markowskiej.",
        ua: "Розділ підручника: *Jak starożytni tłumaczyli pory roku?* Це вже не Твардовський і не Книга Буття — це *театральна п’єса* за міфом. Авторка: Анна Мурджек. За опрацюванням Ванди Марковської."
      },
      text: {
        pl: [
          "Lekcja 17–18: wiersz. Lekcja 15–16: Biblia. Lekcja 14: mit o początku świata. Dziś *inny gatunek*: utwór przeznaczony do *wystawienia na scenie*.",
          "Tytuł: *Demeter i Kora*. To mit grecki o matce (bogini urodzaju) i córce (Korze / Persefonie).",
          "Nauka: pory roku zależą od *nachylenia osi Ziemi* względem Słońca. Mit: starożytni tłumaczyli to historią bogów. Dziś czytamy tę historię w dialogach."
        ],
        ua: [
          "Уроки 17–18: вірш. Уроки 15–16: Біблія. Урок 14: міф про початок світу. Сьогодні *інший жанр*: твір для *постановки на сцені*.",
          "Назва: *Demeter i Kora*. Грецький міф про матір (богиню врожаю) і доньку (Кору / Персефону).",
          "Наука: пори року залежать від *нахилу осі Землі* щодо Сонця. Міф: давні пояснювали це історією богів. Сьогодні читаємо цю історію в діалогах."
        ]
      },
      task: {
        id: "t19-s02-gatunek",
        type: "single-choice",
        question: {
          pl: "Czym jest utwór z tej lekcji?",
          ua: "Чим є твір з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Sztuką teatralną Anny Murdzek według mitu o Demeter i Korze.", ua: "Театральною п’єсою Анни Мурджек за міфом про Деметру і Кору." } },
          { id: "b", label: { pl: "Wierszem Twardowskiego *Który stwarzasz jagody*.", ua: "Віршем Твардовського *Który stwarzasz jagody*." } },
          { id: "c", label: { pl: "Fragmentem Księgi Rodzaju z lekcji 15.", ua: "Уривком Книги Буття з уроку 15." } }
        ],
        answer: "a",
        hint: {
          pl: "Na s. 40 stoi: ANNA MURDZEK i *Demeter i Kora*, AKT I, Scena 1. Czy to kolumna Biblii?",
          ua: "На с. 40: ANNA MURDZEK і *Demeter i Kora*, AKT I, Scena 1. Чи це колонка Біблії?"
        },
        explanation: {
          pl: "To sztuka do wystawienia na scenie. Wiersz i Biblia były wcześniej — tu mit w dialogach i didaskaliach.",
          ua: "Це п’єса для сцени. Вірш і Біблія були раніше — тут міф у діалогах і дидаскаліях."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zadanie wstępne · pory roku", ua: "Вступне · пори року" },
      formula: "s. 40  ·  USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Wymyślcie, a następnie podajcie fantastyczne, niezwykłe przyczyny zmian pór roku. Program: podaj też *naukową* przyczynę. Najpierw zeszyt, potem wskazówki.",
        ua: "Вигадайте, а потім подайте фантастичні, незвичайні причини зміни пір року. Програма: подай також *наукову* причину. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie trzy linijki: 1) naukowa przyczyna (jedno zdanie). 2) twoja *fantastyczna* przyczyna (mogą być smoki, sny, kolory…). 3) jedno zdanie: czym mit różni się od nauki.",
            ua: "У зошиті три рядки: 1) наукова причина. 2) твоя *фантастична* причина. 3) чим міф відрізняється від науки."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna dobra odpowiedź",
          text: {
            pl: [
              "Nauka: oś Ziemi jest nachylona — raz półkula jest bliżej Słońca (lato), raz dalej (zima).",
              "Fantazja (przykład): pory roku zmienia ktoś, kto maluje niebo wielkim pędzlem: zieleń, złoto, szarość, biel. Albo: drzewa śpią, kiedy Księżyc im szepcze.",
              "Mit (ten utwór) też jest *opowieścią*, nie lekcją geografii: zima, gdy Kora jest u Hadesa; wiosna, gdy wraca do matki. Twoja fantazja ma być twoja — nie kopiuj wzoru."
            ],
            ua: [
              "Наука: вісь Землі нахилена — раз півкуля ближче до Сонця (літо), раз далі (зима).",
              "Фантазія (приклад): пори року змінює хтось, хто фарбує небо великим пензлем. Або: дерева сплять, коли Місяць їм шепоче.",
              "Міф (цей твір) теж *оповідь*, не урок географії: зима, коли Кора в Аїда; весна, коли вертається до матері. Твоя фантазія має бути твоя."
            ]
          }
        }
      ],
      task: {
        id: "t19-s03-wstepne",
        type: "true-false",
        question: {
          pl: "Czy do tego zadania wystarczy napisać samo «bo tak jest» — bez naukowej przyczyny i bez żadnej fantazji?",
          ua: "Чи для цього завдання досить написати лише «бо так є» — без наукової причини і без жодної фантазії?"
        },
        answer: false,
        hint: {
          pl: "Polecenie: *fantastyczne, niezwykłe* przyczyny. Program dodaje przyczynę naukową.",
          ua: "Завдання: *фантастичні, незвичайні* причини. Програма додає наукову причину."
        },
        explanation: {
          pl: "Nie. Trzeba: naukowa przyczyna (oś Ziemi) + twoja niezwykła historia. «Bo tak jest» to za mało.",
          ua: "Ні. Потрібні: наукова причина (вісь Землі) + твоя незвичайна історія. «Бо так є» — замало."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Obraz · Los Persefony", ua: "Образ · Los Persefony" },
      formula: "s. 41  ·  Walter Crane",
      visual: vizGh("t19-crane.png", {
        alt: {
          pl: "Walter Crane, Los Persefony: czarne konie, Hades porywa Korę, Demeter wyciąga ręce",
          ua: "Волтер Крейн, Доля Персефони: чорні коні, Аїд викрадає Кору, Деметра простягає руки"
        },
        title: { pl: "Slajd · Walter Crane, Los Persefony", ua: "Слайд · Волтер Крейн, Доля Персефони" },
        prompt: {
          pl: IMG_STYLE_CRANE + " Wstaw kadr ze s. 41: po lewej Demeter w pomarańczowo-czerwonej szacie wyciąga ramiona; po prawej Hades w ciemnym drapowaniu na rydwanie chwyta Korę w jasnym chitonie; dwa czarne konie rwą w prawo; łąka z makami, narcyzami, dzwonkami; w tle wzgórza i jezioro; dwie nimfy w bieli. Przytnij znak wodny. PNG 16:9.",
          ua: "Кадр зі с. 41: Деметра простягає руки, Аїд на колісниці з чорними кіньми хапає Кору, квіткова лука. Без водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Podpis podręcznika: Walter Crane (czyt. *Lolter Krejn*), „Los Persefony”, 1877, 122,5 cm × 265 cm, kolekcja prywatna. To nie fotografia ze spektaklu — to obraz z XIX wieku. Palcem: kto jest matką, kto córką, kto porywa?",
        ua: "Підпис підручника: Walter Crane (чит. *Лолтер Крейн*), «Доля Персефони», 1877, 122,5 см × 265 см, приватна колекція. Це не фото зі спектаклю — образ XIX ст. Пальцем: хто мати, хто донька, хто викрадає?"
      },
      text: {
        pl: [
          "Na obrazie widać *chwilę porwania*: Kora (Persefona) jest ciągnięta ku rydwanowi, Demeter nie zdąża.",
          "W sztuce Murdzek ta chwila jest w *Akcie I, scenie 2*. Najpierw jednak łąka i kwiat narcyza."
        ],
        ua: [
          "На образі видно *мить викрадення*: Кору (Персефону) тягнуть до колісниці, Деметра не встигає.",
          "У п’єсі Мурджек ця мить — в *акті I, сцені 2*. Спочатку однак лука і квітка нарциса."
        ]
      },
      task: {
        id: "t19-s04-crane",
        type: "single-choice",
        question: {
          pl: "Kto według podpisu namalował «Los Persefony»?",
          ua: "Хто за підписом намалював «Долю Персефони»?"
        },
        options: [
          { id: "a", label: { pl: "Walter Crane (czyt. Lolter Krejn), 1877.", ua: "Волтер Крейн (чит. Лолтер Крейн), 1877." } },
          { id: "b", label: { pl: "Jan Twardowski w 1990 roku.", ua: "Ян Твардовський у 1990 році." } },
          { id: "c", label: { pl: "Autor miniatury Omne Bonum z XIV wieku.", ua: "Автор мініатюри Omne Bonum з XIV століття." } }
        ],
        answer: "a",
        hint: {
          pl: "Podpis pod obrazem na s. 41. Czy tam stoi Twardowski?",
          ua: "Підпис під образом на с. 41. Чи там Твардовський?"
        },
        explanation: {
          pl: "Walter Crane, 1877. Twardowski — wiersz. Omne Bonum — lekcja 16.",
          ua: "Волтер Крейн, 1877. Твардовський — вірш. Omne Bonum — урок 16."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt I · scena 1 · łąka", ua: "Акт I · сцена 1 · лука" },
      formula: "s. 40  ·  didaskalia + Kora",
      visual: vizGh("t19-laka.png", {
        alt: {
          pl: "Kora i nimfy na kwiecistej łące nad morzem, po prawej biały narcyz",
          ua: "Кора і німфи на квітковій луці над морем, праворуч білий нарцис"
        },
        title: { pl: "Slajd · łąka Kory", ua: "Слайд · лука Кори" },
        prompt: {
          pl: IMG_STYLE_LAKA + " Kadr ze s. 40: brzeg morza, kwiecista łąka, maki, dzwonki, jaskry. Po prawej jeden piękny biały narcyz. Kora w jasnym chitonie, wokół tańczące nimfy, wśród nich rusałka wodna Kyane. Śmiech, radosna zabawa. PNG 16:9.",
          ua: "Кадр зі с. 40: морський берег, квіткова лука, Кора, німфи, Киана, самотній білий нарцис. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj po polsku. Kursywa to wskazówki dla teatru (miejsce, nastrój). Potem mówią postacie. Włącz 🇺🇦 — tłumaczenie jest *pod* każdą repliką, nie zamiast polskiego.",
        ua: "Читай польською. Курсив — вказівки для театру (місце, настрій). Потім говорять постаті. Увімкни 🇺🇦 — переклад *під* кожною реплікою, не замість польської."
      },
      text: {
        pl: [
          "ANNA MURDZEK  ·  *Demeter i Kora*",
          "*AKT I*  ·  *Scena 1*",
          "*Brzeg morza. Kwiecista łąka. Maki, dzwonki, jaskry. Po prawej stronie sceny piękny biały narcyz. Kora i tańczące wokół niej nimfy, wśród nich rusałka wodna Kyane. Śmiech, radosna atmosfera beztroskiej zabawy.*",
          "**KORA:** O matko całej ziemi, Demeter! Wszystkie stworzenia śpiewają na twoją cześć pieśń radości! Kwiaty, ptaki, motyle i dzikie zwierzęta dziękują ci za twoją opiekę!",
          "**KORA:** *(do nimf)* Tyle tu kwiatów! A jeden piękniejszy od drugiego! Uplećcie mi wianek. Popatrzcie, tam samotnie rośnie narcyz… Wydaje się taki smutny, ale jakże wyjątkowy… Jego woń po prostu zniewala."
        ],
        ua: [
          "АННА МУРДЖЕК  ·  *Деметра і Кора*",
          "*АКТ I*  ·  *Сцена 1*",
          "*Берег моря. Квіткова лука. Маки, дзвоники, жовтець. Праворуч на сцені гарний білий нарцис. Кора і німфи, що танцюють навколо неї, серед них водяна русалка Киана. Сміх, радісна атмосфера безтурботної забави.*",
          "**КОРА:** О мати всієї землі, Деметро! Усі створіння співають на твою честь пісню радості! Квіти, птахи, метелики і дикі звірі дякують тобі за твою опіку!",
          "**КОРА:** *(до німф)* Стільки тут квітів! А один кращий за другий! Сплетіть мені вінок. Подивіться, там самотньо росте нарцис… Здається такий сумний, але який винятковий… Його пахощі просто полонять."
        ]
      },
      task: {
        id: "t19-s05-laka",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO widać / słychać na początku sztuki? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО видно / чути на початку п’єси? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Łąkę nad morzem, maki, dzwonki, jaskry i biały narcyz.", ua: "Луку над морем, маки, дзвоники, жовтець і білий нарцис." } },
          { id: "b", label: { pl: "Korę, która chwali Demeter i prosi nimfy o wianek.", ua: "Кору, яка хвалить Деметру і просить німф про вінок." } },
          { id: "c", label: { pl: "Hadesa już na tronie Olimpu.", ua: "Аїда вже на троні Олімпу." } },
          { id: "d", label: { pl: "Rusałkę wodną Kyane wśród nimf.", ua: "Водяну русалку Киану серед німф." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czytaj didaskalia i dwie pierwsze repliki Kory. Czy Hades już wszedł?",
          ua: "Читай дидаскалії і дві перші репліки Кори. Чи Аїд уже ввійшов?"
        },
        explanation: {
          pl: "Scena 1: łąka, kwiaty, Kora, nimfy, Kyane. Hades wejdzie w scenie 2.",
          ua: "Сцена 1: лука, квіти, Кора, німфи, Киана. Аїд увійде в сцені 2."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt I · scena 1 · narcyz", ua: "Акт I · сцена 1 · нарцис" },
      formula: "s. 41  ·  Echo, Afrodyta, zerwanie",
      promptPlace: "before",
      prompt: {
        pl: "Nimfy ostrzegają. W tle jest inna opowieść: Narcyz i Echo. Kora *wydaje się nie słuchać*. Czytaj do zerwania kwiatu.",
        ua: "Німфи попереджають. У тлі інша оповідь: Нарцис і Ехо. Кора *здається, не слухає*. Читай до зривання квітки."
      },
      text: {
        pl: [
          "**PIERWSZA NIMFA:** Nie zbliżaj się do niego! Przecież wiesz, że to kwiat nieszczęśliwego myśliwego Narcyza, który odrzucił miłość nimfy Echo.",
          "**KYANE:** Ileż jej żałosnych skarg rozbrzmiewało wśród lasów i skał Hellady!",
          "**DRUGA NIMFA:** Ileż łez wylałyśmy z naszą siostrą, której sercem wzgardził nieczuły młodzieniec!",
          "**KORA:** *(wydaje się nie słuchać, podchodzi do kwiatu)* Jego woń jest cudowna. Żaden kwiat tak nie pachnie…",
          "**TRZECIA NIMFA:** Ale wysłuchała nas Afrodyta. Sprawiła, że Narcyz zakochał się w sobie, ujrzawszy swoje odbicie w leśnym źródle. Odtąd żył w udręczeniu. Zapomniał o całym świecie, a niespełniona miłość sprawiła, że umarł z tęsknoty. Nie zbliżaj się, pani, do kwiatu, przypomnij sobie, co mówiła ci matka!",
          "**KORA:** *(coraz bliżej kwiatu)* Tak, opowiadała mi tę nieszczęsną historię. Na grobie Narcyza wyrósł piękny kwiat… który nosi jego imię… Wydaje mi się, że spogląda na mnie oczami pełnymi smutku i żalu.",
          "**NIMFY, KYANE:** Koro! Pani nasza! Nie zrywaj tego kwiatu! Nie!",
          "*Kora się pochyla, zrywa kwiat.*"
        ],
        ua: [
          "**ПЕРША НІМФА:** Не наближайся до нього! Адже знаєш, що це квітка нещасного мисливця Нарциса, який відкинув любов німфи Ехо.",
          "**КИАНА:** Скільки її жалісних скарг лунало серед лісів і скель Еллади!",
          "**ДРУГА НІМФА:** Скільки сліз ми пролили з нашою сестрою, серцем якої знехтував черствий юнак!",
          "**КОРА:** *(здається, не слухає, підходить до квітки)* Його пахощі чудові. Жодна квітка так не пахне…",
          "**ТРЕТЯ НІМФА:** Але нас вислухала Афродіта. Зробила так, що Нарцис закохався в себе, побачивши свій відбиток у лісовому джерелі. Відтоді жив у муці. Забув про весь світ, а нездійснене кохання зробило так, що він помер із туги. Не наближайся, пані, до квітки, згадай, що казала тобі мати!",
          "**КОРА:** *(дедалі ближче до квітки)* Так, розповідала мені цю нещасну історію. На могилі Нарциса виросла гарна квітка… що носить його ім’я… Здається мені, що дивиться на мене очима, повними смутку і жалю.",
          "**НІМФИ, КИАНА:** Коро! Пані наша! Не зривай цієї квітки! Ні!",
          "*Кора нахиляється, зриває квітку.*"
        ]
      },
      task: {
        id: "t19-s06-narcyz",
        type: "single-choice",
        question: {
          pl: "Co Kora robi mimo ostrzeżeń nimf i Kyane?",
          ua: "Що Кора робить попри попередження німф і Киани?"
        },
        options: [
          { id: "a", label: { pl: "Pochyla się i zrywa narcyz.", ua: "Нахиляється і зриває нарцис." } },
          { id: "b", label: { pl: "Ucieka na Olimp do Zeusa.", ua: "Тікає на Олімп до Зевса." } },
          { id: "c", label: { pl: "Sadzi now kwiat w Eleusis.", ua: "Садить нову квітку в Елевсіні." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatnia linia sceny 1 jest kursywą. Co tam stoi?",
          ua: "Останній рядок сцени 1 — курсивом. Що там стоїть?"
        },
        explanation: {
          pl: "Didaskalia: *Kora się pochyla, zrywa kwiat.* To otwiera scenę 2.",
          ua: "Дидаскалії: *Кора нахиляється, зриває квітку.* Це відкриває сцену 2."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt I · scena 2 · Hades", ua: "Акт I · сцена 2 · Аїд" },
      formula: "s. 41–42  ·  porwanie",
      promptPlace: "before",
      prompt: {
        pl: "Nagle gaśnie światło. Wchodzi Hades. Zwróć uwagę: kto woła o ratunek, kto próbuje bronić Kory, czym kończy się akt (kurtyna).",
        ua: "Раптом гасне світло. Входить Аїд. Зверни увагу: хто кличе на допомогу, хто намагається боронити Кору, чим кінчається акт (завіса)."
      },
      text: {
        pl: [
          "*Scena 2*",
          "*Nagle gaśnie światło. Wśród strasznych dźwięków spod ziemi wyłania się Hades w czarnym stroju. Okrzyki przerażenia nimf. Kora znieruchomiała na jego widok.*",
          "**KORA:** Matko! Ratuj swą nieszczęsną córkę!",
          "**NIMFY:** *(rozbiegają się na różne strony)* Uciekaj, pani! Ratuj się! Biegnij!",
          "**KYANE:** *(z przerażeniem)* Koro, to Hades – władca podziemia!",
          "**HADES:** Daremno wzywasz pomocy. Dusza młodzieńca, którego imieniem nazwano ten kwiat *(wskazuje na zerwaną roślinę)*, należy do mnie. Tyś także moja…",
          "**KYANE:** O, panie, zlituj się! Co pocznie jej matka Demeter?!",
          "*Hades chwyta Korę za rękę, opuszczają scenę. Płacz Kyane. Kurtyna.*"
        ],
        ua: [
          "*Сцена 2*",
          "*Раптом гасне світло. Серед страшних звуків з-під землі з’являється Аїд у чорному строї. Окрики жаху німф. Кора закам’яніла на його вид.*",
          "**КОРА:** Мати! Рятуй свою нещасну доньку!",
          "**НІМФИ:** *(розбігаються на різні боки)* Тікай, пані! Рятуйся! Біжи!",
          "**КИАНА:** *(з жахом)* Коро, це Аїд — володар підземного світу!",
          "**АЇД:** Даремно кличеш допомоги. Душа юнака, чиїм ім’ям названо цю квітку *(вказує на зірвану рослину)*, належить мені. Ти теж моя…",
          "**КИАНА:** О, пане, змилуйся! Що вдіє її мати Деметра?!",
          "*Аїд хапає Кору за руку, вони залишають сцену. Плач Киани. Завіса.*"
        ]
      },
      task: {
        id: "t19-s07-hades",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO dzieje się w scenie 2 aktu I? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО діється в сцені 2 акту I? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Hades wychodzi spod ziemi w czarnym stroju.", ua: "Аїд виходить з-під землі в чорному строї." } },
          { id: "b", label: { pl: "Kyane próbuje prosić Hadesa o litość.", ua: "Киана намагається просити Аїда про милість." } },
          { id: "c", label: { pl: "Demeter już klęczy przed Heliosem.", ua: "Деметра вже клячить перед Геліосом." } },
          { id: "d", label: { pl: "Hades chwyta Korę i opuszczają scenę; kurtyna.", ua: "Аїд хапає Кору і вони залишають сцену; завіса." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Akt I kończy się porwaniem. Helios jest w akcie II.",
          ua: "Акт I кінчається викраденням. Геліос — в акті II."
        },
        explanation: {
          pl: "Scena 2: Hades, krzyk Kory, próba Kyane, uprowadzenie, kurtyna. Demeter i Helios — akt II.",
          ua: "Сцена 2: Аїд, крик Кори, спроба Киани, викрадення, завіса. Деметра і Геліос — акт II."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt II · scena 1 · Demeter i Hekate", ua: "Акт II · сцена 1 · Деметра і Геката" },
      formula: "s. 42  ·  pola",
      promptPlace: "before",
      prompt: {
        pl: "Zmiana miejsca: zamiast łąki — suche pola. Demeter szuka córki. Hekate wskazuje drogę do Heliosa.",
        ua: "Зміна місця: замість луки — сухі поля. Деметра шукає доньку. Геката вказує шлях до Геліоса."
      },
      text: {
        pl: [
          "*AKT II*  ·  *Scena 1*",
          "*Pola. Czarne suche kłosy. Demeter w płóciennej szacie z poczerniałym kłosem w dłoni. Poszukuje córki.*",
          "**DEMETER:** *(płacze)* Gdzie się podziałaś, córeczko?! Odkąd zniknęłaś, moje serce nie zaznało spokoju. Tak bardzo się lękam, że stało się coś złego. Przecież nie opuściłabyś swojej matki z własnej woli! Tak, musiało się zdarzyć jakieś nieszczęście.",
          "**HEKATE:** *(wychodzi naprzeciw Demeter; w czarnej sukni)* Bądź pozdrowiona, matko Demeter! Twój płacz słychać na całej ziemi.",
          "**DEMETER:** *(nieco zmieszana, kłania się Hekate)* Witaj, boska Hekate!",
          "**HEKATE:** Bardzo mnie porusza twój ból. Idź i pokłoń się bogu słońca, Heliosowi. On z pewnością wie, gdzie szukać Kory.",
          "**DEMETER:** Masz rację. Pójdę! Padnę mu do stóp. Nie odmówi pomocy zbolałej matce…",
          "*Hekate odchodzi.*",
          "**DEMETER:** Tak, w Heliosie jedyna nadzieja! Nie wiem, jak długo przyjdzie mi go prosić o pomoc, ale zrobię wszystko, by poruszyć jego serce."
        ],
        ua: [
          "*АКТ II*  ·  *Сцена 1*",
          "*Поля. Чорні сухі колоски. Деметра в полотняній шаті з почорнілим колосом у долоні. Шукає доньку.*",
          "**ДЕМЕТРА:** *(плаче)* Де ти поділася, донечко?! Відколи зникла, моє серце не знало спокою. Так боюся, що сталося щось лихе. Адже ти не покинула б своєї матері з власної волі! Так, малося статися якесь нещастя.",
          "**ГЕКАТА:** *(виходить назустріч Деметрі; у чорній сукні)* Будь привітана, мати Деметро! Твій плач чути по всій землі.",
          "**ДЕМЕТРА:** *(трохи збентежена, кланяється Гекаті)* Вітай, божественна Гекато!",
          "**ГЕКАТА:** Дуже мене порушує твій біль. Іди і вклонися богові сонця, Геліосу. Він напевно знає, де шукати Кору.",
          "**ДЕМЕТРА:** Маєш рацію. Піду! Упаду йому до ніг. Не відмовить допомоги зболеній матері…",
          "*Геката відходить.*",
          "**ДЕМЕТРА:** Так, у Геліосі єдина надія! Не знаю, як довго доведеться просити його про допомогу, але зроблю все, щоб порушити його серце."
        ]
      },
      task: {
        id: "t19-s08-hekate",
        type: "single-choice",
        question: {
          pl: "Co radzi Hekate zbolałej Demeter?",
          ua: "Що радить Геката зболеній Деметрі?"
        },
        options: [
          { id: "a", label: { pl: "Iść i pokłonić się Heliosowi — bóg słońca wie, gdzie szukać Kory.", ua: "Піти і вклонитися Геліосу — бог сонця знає, де шукати Кору." } },
          { id: "b", label: { pl: "Od razu przekląć ziemię, nie pytając nikogo.", ua: "Одразу проклясти землю, нікого не питаючи." } },
          { id: "c", label: { pl: "Zostać na łące i czekać na narcyz.", ua: "Залишитися на луці і чекати на нарцис." } }
        ],
        answer: "a",
        hint: {
          pl: "Replika Hekate: «Idź i pokłoń się bogu słońca…»",
          ua: "Репліка Гекати: «Іди і вклонися богові сонця…»"
        },
        explanation: {
          pl: "Hekate wskazuje Heliosa. Klątwa ziemi będzie *po* prawdzie od Heliosa.",
          ua: "Геката вказує на Геліоса. Прокляття землі буде *після* правди від Геліоса."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt II · scena 2 · Helios i klątwa", ua: "Акт II · сцена 2 · Геліос і прокляття" },
      formula: "s. 42–43  ·  głos Heliosa",
      promptPlace: "before",
      prompt: {
        pl: "Demeter woła do Heliosa. On *nie wychodzi na scenę* — słychać głos. Potem Demeter wyrzeka się Olimpu i przeklina ziemię. To wyjaśnia, dlaczego świat staje się jałowy.",
        ua: "Деметра кличе Геліоса. Він *не виходить на сцену* — чути голос. Потім Деметра зрікається Олімпу і проклинає землю. Це пояснює, чому світ стає неродючим."
      },
      text: {
        pl: [
          "*Scena 2*",
          "**DEMETER:** *(klęczy pośrodku sceny i wznosi ręce ku niebu)* Wszechwidny Heliosie, który przemierzasz niebo ognistym rydwanem! Błagam cię! Nie możesz odmówić mi ty, który zdejmujesz z głowy diadem z promieni, kiedy sadasz na kolanach swojego syna Faetona. Widzisz, jak cierpię z tęsknoty… Wysłuchaj moich skarg! Ulżyj w cierpieniu zbolałej matce!",
          "**GŁOS HELIOSA:** Demeter, pani urodzaju! Nie mogę patrzeć na twe łzy i twarz poszarzałą od smutku. Zeus już dawno obiecał Korę Hadesowi. Szukaj jej w królestwie zmarłych.",
          "**DEMETER:** *(załamuje ręce)* A więc to Zeus zadecydował o losie Kory… Bez mojej wiedzy! *(wstaje)* Skoro moje dziecko jest skazane na wieczne ciemności, moja noga nigdy nie postanie na Olimpie! Wyrzekam się jego wygód! Brzydzę się zdradą Zeusa! A ty, ziemio, staniesz się jałowa! Nie będziesz więcej rodzić plonów! Żadne stworzenie nie znajdzie tu pożywienia! Bądź pusta i samotna jak ja!",
          "*Wychodzi. Kurtyna.*"
        ],
        ua: [
          "*Сцена 2*",
          "**ДЕМЕТРА:** *(клячить посеред сцени і зводить руки до неба)* Всевидющий Геліосе, що проминаєш небо вогняною колісницею! Благаю тебе! Не можеш відмовити мені ти, що знімаєш з голови діадему з променів, коли садиш на колінах свого сина Фаетона. Бачиш, як я страждаю з туги… Вислухай мої скарги! Полегши в стражданні зболеній матері!",
          "**ГОЛОС ГЕЛІОСА:** Деметро, пані врожаю! Не можу дивитися на твої сльози і обличчя, посіріле від смутку. Зевс уже давно обіцяв Кору Аїдові. Шукай її в царстві мертвих.",
          "**ДЕМЕТРА:** *(заламує руки)* Отже, це Зевс вирішив про долю Кори… Без мого відома! *(встає)* Якщо моя дитина засуджена на вічну темряву, моя нога ніколи не стане на Олімпі! Зрікаюся його вигод! Гидую зрадою Зевса! А ти, земле, станеш неродючою! Не будеш більше родити плодів! Жодне створіння не знайде тут поживи! Будь порожня і самотня, як я!",
          "*Виходить. Завіса.*"
        ]
      },
      task: {
        id: "t19-s09-klatwa",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO mówi Helios i co robi potem Demeter? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО каже Геліос і що робить потім Деметра? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Zeus obiecał Korę Hadesowi; trzeba szukać jej w królestwie zmarłych.", ua: "Зевс обіцяв Кору Аїдові; треба шукати її в царстві мертвих." } },
          { id: "b", label: { pl: "Demeter wyrzeka się Olimpu i sprawia, że ziemia staje się jałowa.", ua: "Деметра зрікається Олімпу і робить так, що земля стає неродючою." } },
          { id: "c", label: { pl: "Helios mówi, że Kora sama uciekła na wagary.", ua: "Геліос каже, що Кора сама втекла на прогул." } },
          { id: "d", label: { pl: "Demeter wychodzi; kurtyna zamyka akt II.", ua: "Деметра виходить; завіса закриває акт II." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Głos Heliosa + długa replika Demeter o ziemi jałowej. Czy jest słowo «wagary»?",
          ua: "Голос Геліоса + довга репліка Деметри про неродючу землю. Чи є слово «прогул»?"
        },
        explanation: {
          pl: "Prawda od Heliosa: wyrok Zeusa. Demeter: nigdy na Olimp + ziemia jałowa. To mityczna zima.",
          ua: "Правда від Геліоса: вирок Зевса. Деметра: ніколи на Олімп + неродюча земля. Це міфічна зима."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Akt III · Eleusis i Olimp", ua: "Акт III · Елевсін і Олімп" },
      formula: "s. 43  ·  glosa Eleusis",
      promptPlace: "before",
      prompt: {
        pl: "Pole podręcznika: *Eleusis – ośrodek kultu Demeter i Kory w Grecji.* Hermes przyprowadza Demeter na Olimp. Zeus nie cofa wyroku — ale dzieli rok. Kora wraca jako Persefona.",
        ua: "Поле підручника: *Eleusis – осередок культу Деметри і Кори в Греції.* Гермес приводить Деметру на Олімп. Зевс не скасовує вироку — але ділить рік. Кора вертається як Персефона."
      },
      text: {
        pl: [
          "*AKT III*  ·  *Scena 1*",
          "*Eleusis. Kryjówka Demeter. Bogini siedzi przed pieczarą. Wygląda jak zwyczajna kobieta.*",
          "**DEMETER:** *(lamentuje)* Koro, moje dziecko… Koro, moja córeczko…",
          "**HERMES:** *(niedostrzeżony staje przed Demeter)* Witaj, Demeter! Bądź dobrej myśli. Twój płacz usłyszała matka Rea. Udaj się ze mną na Olimp.",
          "**DEMETER:** Boski posłańcu. Przysięgłam, że nigdy więcej nie pojawię się na Olimpie. Ale skoro wspominasz dobrą Reę, posłucham cię.",
          "*Wstaje i idzie za Hermesem.*",
          "*Scena 2*",
          "*Sala tronowa na Olimpie. Na tronie siedzi Zeus, w ręku trzyma piorun.*",
          "**DEMETER:** *(wchodzi, rozgląda się, jakby szukała Kory)* Koro? Jesteś tu?",
          "**ZEUS:** Oto jesteś, bogini Demeter! Kora została żoną Hadesa, królową świata podziemnego. Nie mogę cofnąć wyroków, ale niech w twoim sercu zagości pokój! Postanawiam, że odtąd – jako Persefona – będzie spędzać z mężem trzecią część roku, a na dwie trzecie będzie wracać do ciebie.",
          "**DEMETER:** *(wstaje, rozgląda się z nadzieją, dostrzega nadchodzącą Korę)* Koro, moja córko! Nareszcie! *(padają sobie w objęcia)* Niech cała ziemia cieszy się ze mną, że odzyskałam córkę! Niech nastanie wiosna! Niech na nowo świat się zazieleni i rozkwitnie! Niech oliwki i winorośl wydadzą owoce! Niech rozbrzmi śpiew ptaków! Niech cały świat ożyje!",
          "*Kurtyna.*",
          "Na podstawie mitu według opracowania Wandy Markowskiej."
        ],
        ua: [
          "*АКТ III*  ·  *Сцена 1*",
          "*Елевсін. Криївка Деметри. Богиня сидить перед печерою. Виглядає як звичайна жінка.*",
          "**ДЕМЕТРА:** *(голосить)* Коро, моя дитино… Коро, моя донечко…",
          "**ГЕРМЕС:** *(непомічений стає перед Деметрою)* Вітай, Деметро! Будь доброї думки. Твій плач почула мати Рея. Іди зі мною на Олімп.",
          "**ДЕМЕТРА:** Божественний посланцю. Присягла, що більше ніколи не з’явлюся на Олімпі. Але якщо згадуєш добру Рею, послухаю тебе.",
          "*Встає і йде за Гермесом.*",
          "*Сцена 2*",
          "*Тронна зала на Олімпі. На троні сидить Зевс, у руці тримає блискавку.*",
          "**ДЕМЕТРА:** *(входить, озирається, наче шукає Кору)* Коро? Ти тут?",
          "**ЗЕВС:** Ось ти, богине Деметро! Кора стала дружиною Аїда, королевою підземного світу. Не можу скасувати вироків, але хай у твоєму серці запанує мир! Постановляю, що відтепер — як Персефона — проводитиме з чоловіком третину року, а на дві третини вертатиметься до тебе.",
          "**ДЕМЕТРА:** *(встає, озирається з надією, помічає Кору, що надходить)* Коро, моя донько! Нарешті! *(падають одна одній в обійми)* Хай уся земля радіє зі мною, що я повернула доньку! Хай настане весна! Хай знову світ зазеленіє і розквітне! Хай оливи і виноград видадуть плоди! Хай залунає спів птахів! Хай увесь світ оживе!",
          "*Завіса.*",
          "На основі міфу за опрацюванням Ванди Марковської."
        ]
      },
      task: {
        id: "t19-s10-olimp",
        type: "single-choice",
        question: {
          pl: "Jaki wyrok ogłasza Zeus o Korze / Persefonie?",
          ua: "Який вирок оголошує Зевс про Кору / Персефону?"
        },
        options: [
          { id: "a", label: { pl: "Trzecią część roku spędzi z mężem, dwie trzecie wróci do matki.", ua: "Третину року проведе з чоловіком, дві третини вернеться до матері." } },
          { id: "b", label: { pl: "Zostanie na Olimpie przez cały rok i nigdy nie zejdzie.", ua: "Залишиться на Олімпі весь рік і ніколи не зійде." } },
          { id: "c", label: { pl: "Hades musi oddać Korę natychmiast i na zawsze.", ua: "Аїд мусить віддати Кору негайно і назавжди." } }
        ],
        answer: "a",
        hint: {
          pl: "Replika Zeusa: «trzecią część roku» + «na dwie trzecie».",
          ua: "Репліка Зевса: «третину року» + «на дві третини»."
        },
        explanation: {
          pl: "Persefona: 1/3 u Hadesa (ziemia jałowa / zima), 2/3 u Demeter (wiosna, plony). Zeus nie cofa małżeństwa.",
          ua: "Персефона: 1/3 в Аїда (неродюча земля / зима), 2/3 у Деметри (весна, плоди). Зевс не скасовує шлюбу."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól i trudne słowa", ua: "Слова з полів і важкі слова" },
      promptPlace: "before",
      prompt: {
        pl: "Jedna glosa z pola s. 43 (*Eleusis*) i słowa, które w klasie 5 często zatrzymują czytanie. Znaczenie *w tym tekście*.",
        ua: "Одна глоса з поля с. 43 (*Eleusis*) і слова, які в 5 класі часто зупиняють читання. Значення *в цьому тексті*."
      },
      rows: [
        { pl: "Eleusis — ośrodek kultu Demeter i Kory w Grecji", ua: "Eleusis — осередок культу Деметри і Кори в Греції" },
        { pl: "woń — zapach (tu: kwiatu narcyza)", ua: "woń — запах (тут: квітки нарциса)" },
        { pl: "zniewala — tu: bardzo mocno przyciąga, nie daje odejść", ua: "zniewala — тут: дуже сильно притягує, не дає відійти" },
        { pl: "wzgardził — odrzucił z pogardą (Narcyz serce Echo)", ua: "wzgardził — відкинув із погордою (Нарцис серце Ехо)" },
        { pl: "udręczenie — wielkie cierpienie, męka", ua: "udręczenie — велике страждання, мука" },
        { pl: "daremno — na próżno, bez skutku", ua: "daremno — марно, без наслідку" },
        { pl: "jałowa — tu: ziemia, która nie rodzi plonów", ua: "jałowa — тут: земля, яка не родить плодів" },
        { pl: "pieczara — jaskinia (kryjówka Demeter w Eleusis)", ua: "pieczara — печера (криївка Деметри в Елевсіні)" },
        { pl: "Persefona — imię Kory jako żony Hadesa / królowej podziemia", ua: "Persefona — ім’я Кори як дружини Аїда / королеви підземного світу" },
        { pl: "Hellada — Grecja (lasy i skały Hellady)", ua: "Hellada — Греція (ліси і скелі Еллади)" }
      ],
      task: {
        id: "t19-s11-glosy",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna *w tym tekście*?",
          ua: "Яка пара правильна *в цьому тексті*?"
        },
        options: [
          { id: "a", label: { pl: "Eleusis = ośrodek kultu Demeter i Kory; jałowa = ziemia bez plonów.", ua: "Eleusis = осередок культу Деметри і Кори; jałowa = земля без плодів." } },
          { id: "b", label: { pl: "Eleusis = Cerber; jałowa = jagoda z wiersza Twardowskiego.", ua: "Eleusis = Цербер; jałowa = ягода з вірша Твардовського." } },
          { id: "c", label: { pl: "Persefona = imię Heliosa; pieczara = rydwan.", ua: "Persefona = ім’я Геліоса; pieczara = колісниця." } }
        ],
        answer: "a",
        hint: {
          pl: "Pomarańczowe pole na s. 43: Eleusis. Klątwa Demeter: ziemia jałowa.",
          ua: "Помаранчеве поле на с. 43: Eleusis. Прокляття Деметри: земля jałowa."
        },
        explanation: {
          pl: "Pole: Eleusis – kult Demeter i Kory. Jałowa ziemia = bez plonów. Persefona to Kora u Hadesa. Cerber i jagody — inne lekcje.",
          ua: "Поле: Eleusis – культ Деметри і Кори. Неродюча земля = без плодів. Персефона — Кора в Аїда."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · bohaterowie", ua: "Завд. 1 · герої" },
      formula: "s. 43  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Wymieńcie najważniejszych bohaterów utworu. Najpierw sami w zeszycie — potem klucz. Szukaj imion po dwukropku (KORA:, HADES:…) i w didaskaliach.",
        ua: "Назвіть найважливіших героїв твору. Спочатку самі в зошиті — потім ключ. Шукай імена після двокрапки (KORA:, HADES:…) і в дидаскаліях."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie dwie grupy: 1) kto *mówi* na scenie (osoby dramatu). 2) kto jest tylko *w opowieści* nimf (Narcyz, Echo, Afrodyta) albo tylko wspomniany (Rea, Faeton).",
            ua: "У зошиті дві групи: 1) хто *говорить* на сцені. 2) хто лише *в оповіді* німф або лише згаданий."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z tekstu",
          text: {
            pl: [
              "Najważniejsi (akcja mitu): Demeter, Kora (później Persefona), Hades, Zeus.",
              "Także na scenie: Kyane, nimfy, Hekate, Głos Heliosa, Hermes.",
              "Wspomniani / w historii narcyza: Rea (matka Zeusa, usłyszała płacz), Narcyz, Echo, Afrodyta, Faeton (syn Heliosa).",
              "To nie lista z lekcji 14 (olbrzymi, Cerber) i nie Twardowski."
            ],
            ua: [
              "Найважливіші (дія міфу): Деметра, Кора (пізніше Персефона), Аїд, Зевс.",
              "Також на сцені: Киана, німфи, Геката, Голос Геліоса, Гермес.",
              "Згадані / в історії нарциса: Рея, Нарцис, Ехо, Афродіта, Фаетон.",
              "Це не список з уроку 14 і не Твардовський."
            ]
          }
        }
      ],
      task: {
        id: "t19-s12-bohaterowie",
        type: "multiple-choice",
        question: {
          pl: "Którzy NA PEWNO są ważnymi bohaterami *tej* sztuki? Zaznacz wszystkie pewne.",
          ua: "Хто НАПЕВНО є важливими героями *цієї* п’єси? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Demeter, Kora / Persefona, Hades, Zeus.", ua: "Деметра, Кора / Персефона, Аїд, Зевс." } },
          { id: "b", label: { pl: "Kyane, Hekate, Helios (głos), Hermes.", ua: "Киана, Геката, Геліос (голос), Гермес." } },
          { id: "c", label: { pl: "Tylko Jan Twardowski i zawilec.", ua: "Лише Ян Твардовський і zawilec." } },
          { id: "d", label: { pl: "Cerber i olbrzymi z lekcji 14 — jako główne osoby dramatu tu.", ua: "Цербер і велетні з уроку 14 — як головні особи драми тут." } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Kto ma replikę po dwukropku? Czy Twardowski wchodzi na scenę?",
          ua: "Хто має репліку після двокрапки? Чи Твардовський виходить на сцену?"
        },
        explanation: {
          pl: "Osoby dramatu z tego tekstu: Demeter, Kora, Hades, Zeus, Kyane, nimfy, Hekate, Helios, Hermes. Twardowski i Cerber — inne lekcje.",
          ua: "Особи драми з цього тексту: Деметра, Кора, Аїд, Зевс, Киана, німфи, Геката, Геліос, Гермес."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czas, miejsce, pory roku", ua: "Час, місце, пори року" },
      formula: "program  ·  relacja",
      promptPlace: "before",
      prompt: {
        pl: "Program: określ czas i miejsce akcji, opowiedz o wydarzeniach. Mit *tłumaczy* pory roku — nauka tłumaczy je inaczej.",
        ua: "Програма: визнач час і місце дії, розкажи про події. Міф *пояснює* пори року — наука пояснює їх інакше."
      },
      text: {
        pl: [
          "Akt I: brzeg morza, kwiecista łąka, zabawa — czas «wiosny / lata» w micie (kwiaty, wianek).",
          "Akt II: pola, czarne suche kłosy — ziemia już cierpi; Demeter szuka, Helios mówi prawdę, pada klątwa.",
          "Akt III: Eleusis (kryjówka, pieczara), potem sala tronowa na Olimpie — wyrok i powrót Kory, wezwanie wiosny.",
          "Mit: gdy Persefona jest u Hadesa (1/3 roku), ziemia jałowa; gdy wraca do matki (2/3), świat się zazielenia.",
          "Nauka: nachylenie osi Ziemi, nie kłótnia bogów. Oba wyjaśnienia wolno znać — nie mylić gatunków."
        ],
        ua: [
          "Акт I: берег моря, квіткова лука, забава — час «весни / літа» в міфі (квіти, вінок).",
          "Акт II: поля, чорні сухі колоски — земля вже страждає; Деметра шукає, Геліос каже правду, падає прокляття.",
          "Акт III: Елевсін (криївка, печера), потім тронна зала на Олімпі — вирок і повернення Кори, заклик весни.",
          "Міф: коли Персефона в Аїда (1/3 року), земля неродюча; коли вертається до матері (2/3), світ зеленіє.",
          "Наука: нахил осі Землі, не сварка богів. Обидва пояснення можна знати — не плутати жанри."
        ]
      },
      task: {
        id: "t19-s13-pory",
        type: "true-false",
        question: {
          pl: "Czy według *tego mitu* zima / jałowa ziemia wiąże się z pobytem Persefony u Hadesa, a wiosna z jej powrotem do Demeter?",
          ua: "Чи за *цим міфом* зима / неродюча земля пов’язана з перебуванням Персефони в Аїда, а весна — з її поверненням до Деметри?"
        },
        answer: true,
        hint: {
          pl: "Klątwa w akcie II + słowa Demeter w akcie III: «Niech nastanie wiosna!» + podział roku u Zeusa.",
          ua: "Прокляття в акті II + слова Деметри в акті III: «Хай настане весна!» + поділ року в Зевса."
        },
        explanation: {
          pl: "Tak — tak mit tłumaczy pory roku. Nauka mówi o osi Ziemi. Dalej: akt, scena, tekst główny i poboczny, plan.",
          ua: "Так — так міф пояснює пори року. Наука каже про вісь Землі. Далі: акт, сцена, головний і побічний текст, план."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To notatka z części 1 (s. 40–43). Nie zamykaj lekcji: na kolejnych ekranach ciąg dalszy — lekcja 20 (s. 44–45).",
        ua: "Це нотатка з частини 1 (с. 40–43). Не закривай урок: на наступних екранах продовження — урок 20 (с. 44–45)."
      },
      items: [
        { pl: "Anna Murdzek, *Demeter i Kora* — sztuka teatralna według mitu (oprac. Wanda Markowska).", ua: "Анна Мурджек, *Demeter i Kora* — театральна п’єса за міфом (опр. Ванда Марковська)." },
        { pl: "Akcja: łąka → porwanie przez Hadesa → poszukiwanie → klątwa ziemi → Eleusis → wyrok Zeusa → powrót Kory i wiosna.", ua: "Дія: лука → викрадення Аїдом → пошуки → прокляття землі → Елевсін → вирок Зевса → повернення Кори і весна." },
        { pl: "Bohaterowie: Demeter, Kora/Persefona, Hades, Zeus; także Kyane, nimfy, Hekate, Helios, Hermes.", ua: "Герої: Деметра, Кора/Персефона, Аїд, Зевс; також Киана, німфи, Геката, Геліос, Гермес." },
        { pl: "Eleusis = ośrodek kultu Demeter i Kory. Nauka: oś Ziemi. Mit: 1/3 roku u Hadesa, 2/3 u matki.", ua: "Eleusis = осередок культу. Наука: вісь Землі. Міф: 1/3 року в Аїда, 2/3 у матері." },
        { pl: "Dalej (kolejne ekrany) = lekcja 20: tekst główny / poboczny, akt, scena, plan, role (s. 44–45).", ua: "Далі (наступні екрани) = урок 20: головний / побічний текст, акт, сцена, план, ролі (с. 44–45)." }
      ],
      task: {
        id: "t19-s14-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz to, czego wymaga lekcja 19?",
          ua: "Яка нотатка показує, що вмієш те, чого вимагає урок 19?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Sztuka Murdzek. Treść mitu na scenie, bohaterowie, Eleusis, mit vs nauka o porach roku. Plan i teatr — na kolejnych ekranach.",
              ua: "П’єса Мурджек. Зміст міфу на сцені, герої, Eleusis, міф vs наука про пори року. План і театр — на наступних екранах."
            }
          },
          { id: "b", label: { pl: "Tylko «serce choćby na chwilę» i zawilec — nic więcej.", ua: "Лише «serce choćby na chwilę» і zawilec — більше нічого." } },
          { id: "c", label: { pl: "Sześć dni stwarzania z Księgi Rodzaju — i zamykam zeszyt.", ua: "Шість днів творення з Книги Буття — і закриваю зошит." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 40–43? Sztuka, zad. wstępne, zad. 1. Gdzie są zad. 2–5?",
          ua: "Що на с. 40–43? П’єса, вступне, завд. 1. Де завд. 2–5?"
        },
        explanation: {
          pl: "Część 1 = s. 40–43: czytanie sztuki i bohaterowie. Ćwiczenia teatralne są na kolejnych ekranach (lekcja 20).",
          ua: "Частина 1 = с. 40–43. Театральні вправи — на наступних екранах (урок 20)."
        }
      }
    }
  ]
};
