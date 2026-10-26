function em(text) {
  return { text: text, emphasis: true };
}

function L(pl, ua, ru) {
  return { pl: pl, ua: ua, ru: ru };
}

function mark(pl, plMarks, ua, uaMarks, ru, ruMarks) {
  const row = {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
  if (ru) row.ru = { t: ru, mark: ruMarks || [] };
  return row;
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

window.EduMostLessonContent = {
  intro: {
    image: "./img/mapa-bliski-wschod-zeszyt.jpg",
    alt: L(
      "Mapa Bliskiego Wschodu: Palestyna, Jordan, Jerozolima",
      "Карта Близького Сходу: Палестина, Йордан, Єрусалим",
      "Карта Ближнего Востока: Палестина, Иордан, Иерусалим"
    ),
    title: L(
      "W starożytnym Izraelu",
      "W starożytnym Izraelu — У стародавньому Ізраїлі",
      "Древний Израиль — один Бог, Тора и цари"
    ),
    text: {
      pl: [
        "Wyobraź sobie lud, który wierzył w jednego Boga, a nie w wielu. Jego święta księga to Tora, a najważniejsze zasady — Dekalog.",
        "Taką tradycję mają Izraelici, nazywani też Żydami.",
        "Dziś zobaczymy, gdzie leżała Palestyna, kim byli Abraham, Mojżesz, Dawid i Salomon, i jakie symbole judaizmu trzeba znać na sprawdzianie.",
        "Zanim zaczniemy: jak myślisz, czym wiara w jednego Boga różni się od wiary Egipcjan w wielu bogów? Pomyśl chwilę. Poprawnej odpowiedzi jeszcze nie trzeba znać."
      ],
      ua: [
        "Уяви народ, який вірив в одного Бога, а не в багатьох. Його священна книга — Тора, а найважливіші правила — Декалог.",
        "Таку традицію мають ізраїльтяни, яких називають також євреями.",
        "Сьогодні побачимо, де лежала Палестина, ким були Авраам, Мойсей, Давид і Соломон, і які символи юдаїзму треба знати на перевірку.",
        "Перш ніж почнемо: як гадаєш, чим віра в одного Бога відрізняється від віри єгиптян у багатьох богів? Подумай хвилину. Правильної відповіді ще не треба знати."
      ],
      ru: [
        "Представь народ, который верил в одного Бога, а не во многих. Его священная книга — Тора, а главные правила — Декалог.",
        "Такую традицию имеют израильтяне, которых называют также евреями.",
        "Сегодня мы узнаем, где лежала Палестина, кем были Авраам, Моисей, Давид и Соломон, и какие символы иудаизма нужно знать на sprawdzian.",
        "Как ты думаешь, чем вера в одного Бога отличается от веры египтян во многих богов? Подумай немного. Правильный ответ пока знать не нужно."
      ]
    },
    missionLabel: L(
      "W tej lekcji poznasz 5 rzeczy",
      "У цьому уроці дізнаєшся 5 речей",
      "В этом уроке мы узнаем 5 главных вещей"
    ),
    mission: L(
      "1. Gdzie leżała Palestyna i jak znaleźć Jerozolimę oraz Jordan. 2. Abraham, niewola egipska i Mojżesz. 3. Dawid, Salomon i kolejność wydarzeń. 4. Monoteizm, Tora, Dekalog, prorok. 5. Symbole: Gwiazda Dawida, Tora, menora.",
      "1. Де лежала Палестина і як знайти Єрусалим та Йордан. 2. Авраам, єгипетська неволя і Мойсей. 3. Давид, Соломон і порядок подій. 4. Монотеїзм, Тора, Декалог, пророк. 5. Символи: зірка Давида, Тора, менора.",
      "1. Где лежала Палестина и как найти Иерусалим и Иордан. 2. Авраам, египетский плен и Моисей. 3. Давид, Соломон и порядок событий. 4. Монотеизм, Тора, Декалог, пророк. 5. Символы: звезда Давида, Тора, менора."
    ),
    ready: L("Gotów? Ruszamy.", "Готовий? Рушаємо.", "Готов? Начинаем."),
    button: L("Zaczynamy podróż →", "Почати подорож →", "Начать путешествие →"),
    short: L(
      "Krótka powtórka: Palestyna, monoteizm, Tora, Dekalog, menora, prorok, Dawid, Salomon.",
      "Коротке повторення: Палестина, монотеїзм, Тора, Декалог, менора, пророк, Давид, Соломон.",
      "Короткое повторение: Палестина, монотеизм, Тора, Декалог, менора, пророк, Давид, Соломон."
    )
  },

  modules: [
    { id: "mapa", title: L("1. Mapa", "1. Карта", "1. Карта") },
    { id: "abraham", title: L("2. Abraham", "2. Авраам", "2. Авраам") },
    { id: "mojzesz", title: L("3. Mojżesz", "3. Мойсей", "3. Моисей") },
    { id: "krolowie", title: L("4. Królowie", "4. Царі", "4. Цари") },
    { id: "monoteizm", title: L("5. Monoteizm", "5. Монотеїзм", "5. Монотеизм") },
    { id: "tora", title: L("6. Tora", "6. Тора", "6. Тора") },
    { id: "symbole", title: L("7. Symbole", "7. Символи", "7. Символы") },
    { id: "powtorka", title: L("8. Powtórka", "8. Повторення", "8. Повторение") }
  ],

  blocks: [
    /* ========== 1. MAPA ========== */
    {
      type: "intro",
      module: "mapa",
      timelineYear: 1000,
      timelineId: "izrael",
      heading: L("W starożytnym Izraelu", "У стародавньому Ізраїлі", "В древнем Израиле"),
      formula: "Palestyna · monoteizm",
      text: {
        pl: [
          "W Egipcie pełno było bogów. U Izraelitów brzmiało inne zdanie: jest jeden Bóg.",
          "Dziś: początki ludu, Dawid i Salomon, judaizm, Tora i Dekalog — oraz zadania z zeszytu."
        ],
        ua: [
          "У Єгипті було багато богів. В ізраїльтян звучало інше речення: є один Бог.",
          "Сьогодні: початки народу, Давид і Соломон, юдаїзм, Тора і Декалог — та завдання із зошита."
        ],
        ru: [
          "В Египте было много богов. У израильтян звучало другое: есть один Бог.",
          "Дальше по очереди: начало народа, Давид и Соломон, иудаизм, Тора и Декалог — и задания из тетради."
        ]
      }
    },
    {
      type: "goal",
      module: "mapa",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("pokazać Palestynę, Jerozolimę i Jordan na mapie", "показати Палестину, Єрусалим і Йордан на карті", "показать Палестину, Иерусалим и Иордан на карте"),
        L("rozpoznać Morze Śródziemne i Morze Martwe", "розпізнати Середземне і Мертве моря", "узнать Средиземное и Мёртвое моря")
      ]
    },
    {
      type: "concept",
      module: "mapa",
      heading: L("Gdzie leżał starożytny Izrael?", "Де лежав стародавній Ізраїль?", "Где лежал древний Израиль?"),
      formula: "Palestyna / Kanaan",
      text: {
        pl: [
          ["Ziemię Izraelitów nazywa się ", em("Palestyną"), " albo ", em("Kanaanem"), " — wąski pas przy wschodnim brzegu Morza Śródziemnego, między Egiptem a pustynią."],
          ["Przez tę krainę płynie rzeka ", em("Jordan"), ". Wpada do ", em("Morza Martwego"), ". Na zachód jest ", em("Morze Śródziemne"), "."],
          ["Najważniejsze miasto tego tematu: ", em("Jerozolima"), " — późniejsza stolica za Dawida."]
        ],
        ua: [
          ["Землю ізраїльтян називають ", em("Палестиною"), " або ", em("Ханааном"), " — вузька смуга при східному березі Середземного моря, між Єгиптом і пустелею."],
          ["Через цей край тече річка ", em("Йордан"), ". Впадає в ", em("Мертве море"), ". На заході — ", em("Середземне море"), "."],
          ["Найважливіше місто теми: ", em("Єрусалим"), " — пізніша столиця за Давида."]
        ],
        ru: [
          ["Землю израильтян называют ", em("Palestyna"), " или ", em("Kanaan"), " — узкая полоса у восточного берега Средиземного моря, между Египтом и пустыней."],
          ["Через эту землю течёт река ", em("Jordan"), ". Она впадает в ", em("Morze Martwe"), " — Мёртвое море. На западе — ", em("Morze Śródziemne"), "."],
          ["Главный город темы: ", em("Jerozolima"), " — позже столица при Давиде."]
        ]
      }
    },
    {
      type: "visual",
      module: "mapa",
      track: "both",
      heading: L("Mapa: od Mezopotamii do Kanaanu", "Карта: від Месопотамії до Ханаану", "Карта: от Месопотамии до Ханаана"),
      visual: gh("029", {
        kind: "map-placeholder",
        alt: L(
          "Mapa: Morze Śródziemne, Synaj, Kanaan, Jerozolima, Eufrat",
          "Карта: Середземне море, Синай, Ханаан, Єрусалим, Євфрат",
          "Карта: Средиземное море, Синай, Ханаан, Иерусалим"
        ),
        title: L("Ziemia Kanaan między Egiptem a pustynią", "Земля Ханаан між Єгиптом і пустелею", "Ханаан между Египтом и пустыней")
      }),
      text: {
        pl: [
          "Znajdź morze, Synaj, Jerozolimę. To nie dolina Nilu i nie Sumer — wąski pas między wodą a pustynią."
        ],
        ua: [
          "Знайди море, Синай, Єрусалим. Це не долина Нілу і не Шумер — вузька смуга між водою і пустелею."
        ],
        ru: [
          "Найди море, Синай и Иерусалим. Это не долина Нила и не Шумер — узкая полоса между водой и пустыней."
        ]
      },
      task: {
        id: "h04-map",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Gdzie osiedlili się Izraelici po wędrówce z Mezopotamii?",
          "Де оселилися ізраїльтяни після мандрівки з Месопотамії?",
          "Где поселились израильтяне после пути из Месопотамии?"
        ),
        options: [
          { id: "a", label: L("w wąskiej dolinie Nilu, między pustyniami", "у вузькій долині Нілу, між пустелями", "в узкой долине Нила, между пустынями") },
          { id: "b", label: L("w Kanaanie (Palestynie), przy wschodnim brzegu Morza Śródziemnego", "у Ханаані (Палестині), при східному березі Середземного моря", "в Ханаане (Палестине), у восточного берега Средиземного моря") },
          { id: "c", label: L("nad Wisłą, ze stolicą w Gnieźnie", "над Віслою, зі столицею в Гнєзно", "на Висле, со столицей в Гнезно") }
        ],
        answer: "b",
        hint: L(
          "Między Egiptem a pustynią syryjską, przy Morzu Śródziemnym.",
          "Між Єгиптом і сирійською пустелею, біля Середземного моря.",
          "Между Египтом и сирийской пустыней, у Средиземного моря."
        ),
        explanation: L(
          "Kanaan / Palestyna. Nil to Egipt. Wisła — Polska, dużo później.",
          "Ханаан / Палестина. Ніл — Єгипет. Вісла — Польща, набагато пізніше.",
          "Kanaan / Palestyna. Нил — это Египет. Висла — Польша, намного позже."
        )
      }
    },
    {
      type: "visual",
      module: "mapa",
      track: "both",
      heading: L("Ćwiczenie: mapa z zeszytu", "Вправа: карта із зошита", "Упражнение: карта из тетради"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-bliski-wschod-zeszyt.jpg",
        alt: L(
          "Mapa Bliskiego Wschodu z zeszytu: Jerozolima, Jordan, morza",
          "Карта Близького Сходу із зошита",
          "Карта Ближнего Востока из тетради"
        ),
        title: L("Bliski Wschód w starożytności", "Близький Схід у давнину", "Ближний Восток в древности")
      },
      text: {
        pl: [
          "Na mapie z zeszytu najpierw znajdź Orientiry: Morze Śródziemne na zachodzie, Morze Czerwone na południu, Morze Martwe w środku lądu.",
          "Rzeka łącząca Jezioro Genezaret z Morzem Martwym to Jordan. Stolica Dawida leży niedaleko Morza Martwego — na mapie jest już podpisana."
        ],
        ua: [
          "На карті із зошита спочатку знайди орієнтири: Середземне море на заході, Червоне на півдні, Мертве всередині суходолу.",
          "Річка, що з’єднує Генісарет із Мертвим морем, — Йордан. Столиця Давида лежить недалеко від Мертвого моря — на карті вже підписана."
        ],
        ru: [
          "На карте из тетради сначала найди ориентиры: Средиземное море на западе, Красное на юге, Мёртвое внутри суши.",
          "Река, которая соединяет Галилейское озеро с Мёртвым морем, — Jordan. Столица Давида лежит недалеко от Мёртвого моря — её имя уже написано на карте."
        ]
      },
      task: {
        id: "h04-q-jordan",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Która rzeka przepływa przez Palestynę i wpada do Morza Martwego?",
          "Яка річка тече через Палестину і впадає в Мертве море?",
          "Какая река течёт через Палестину и впадает в Мёртвое море?"
        ),
        options: [
          { id: "a", label: L("Nil", "Ніл", "Нил") },
          { id: "b", label: L("Jordan", "Йордан", "Иордан") },
          { id: "c", label: L("Wisła", "Вісла", "Висла") }
        ],
        answer: "b",
        hint: L(
          "Szukaj rzeki między Jeziorem Genezaret a Morzem Martwym.",
          "Шукай річку між Генісаретом і Мертвим морем.",
          "Ищи реку между Галилейским озером и Мёртвым морем."
        ),
        explanation: L(
          "Jordan. Nil jest w Egipcie. Wisła — w Polsce.",
          "Йордан. Ніл — в Єгипті. Вісла — у Польщі.",
          "Jordan. Нил — в Египте. Висла — в Польше."
        )
      }
    },
    {
      type: "visual",
      module: "mapa",
      heading: L("Zeszyt, strona 12, zadanie 2", "Зошит, сторінка 12, завдання 2", "Тетрадь, страница 12, задание 2"),
      visual: {
        kind: "map-placeholder",
        url: "./img/mapa-bliski-wschod-zeszyt.jpg",
        alt: L("Mapa z zeszytu do zadania 2", "Карта із зошита до завдання 2", "Карта из тетради к заданию 2"),
        title: L("Praca z mapą", "Робота з картою", "Работа с картой")
      },
      text: {
        pl: [
          "Zrób najpierw w zeszycie: podkreśl stolicę Dawida, zamaluj obszar państwa za Salomona, wpisz rzekę Palestyny.",
          "Orientiry masz już z lekcji. Odpowiedzi otwórz dopiero po swojej próbie."
        ],
        ua: [
          "Зроби спочатку в зошиті: підкресли столицю Давида, замалюй територію держави за Соломона, впиши річку Палестини.",
          "Орієнтири вже маєш з уроку. Відповіді відкрий лише після своєї спроби."
        ],
        ru: [
          "Сначала сделай в тетради: подчеркни столицу Давида, закрась область государства при Соломоне, впиши реку Палестины.",
          "Ориентиры уже есть из урока. Ответы открой только после своей попытки."
        ]
      },
      zeszyt: {
        id: "h04-z12-2",
        lead: L(
          ["Strona 12, zadanie 2a–c. Stolica Dawida, obszar za Salomona, rzeka Palestyny."],
          ["Сторінка 12, завдання 2a–c. Столиця Давида, територія за Соломона, річка Палестини."],
          ["Страница 12, задание 2a–c. Столица Давида, область при Соломоне, река Палестины. Сначала в тетради."]
        ),
        answers: [
          {
            label: L("2a. Stolica Dawida", "2a. Столиця Давида", "2a. Столица Давида"),
            text: L(["Jerozolima"], ["Jerozolima"], ["Jerozolima"]),
            why: L(
              ["Dawid uczynił stolicą Jerozolimę. Na mapie leży niedaleko Morza Martwego."],
              ["Давид зробив столицею Єрусалим. На карті лежить недалеко від Мертвого моря."],
              ["Давид сделал столицей Jerozolima. На карте она лежит недалеко от Мёртвого моря."]
            )
          },
          {
            label: L("2b. Obszar za Salomona", "2b. Територія за Соломона", "2b. Область при Соломоне"),
            text: L(
              ["Zamaluj obszar państwa żydowskiego zaznaczony na mapie wokół Jordanu i Jerozolimy (granica królestwa)."],
              ["Замалюй територію єврейської держави, позначену на карті навколо Йордану і Єрусалима."],
              ["Закрась область еврейского государства на карте вокруг Jordan и Jerozolima (контур царства)."]
            ),
            why: L(
              ["Salomon rządził po Dawidzie. Na mapie zeszytu obszar jest już obrysowany linią — zamaluj go dowolnym kolorem."],
              ["Соломон правив після Давида. На карті зошита область уже обведена лінією — замалюй її будь-яким кольором."],
              ["Соломон правил после Давида. На карте тетради область уже обведена линией — закрась её любым цветом."]
            )
          },
          {
            label: L("2c. Rzeka", "2c. Річка", "2c. Река"),
            text: L(["Jordan"], ["Jordan"], ["Jordan"]),
            why: L(
              ["Jordan płynie przez Palestynę i wpada do Morza Martwego. Nil jest w Egipcie."],
              ["Йордан тече через Палестину і впадає в Мертве море. Ніл — в Єгипті."],
              ["Jordan течёт через Палестину и впадает в Мёртвое море. Нил — в Египте."]
            )
          }
        ]
      }
    },

    /* ========== 2. ABRAHAM ========== */
    {
      type: "goal",
      module: "abraham",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("powiedzieć, kim był Abraham według Biblii", "сказати, ким був Авраам за Біблією", "сказать, кем был Abraham по Библии"),
        L("umieścić przybycie do Palestyny na początku chronologii", "поставити прибуття до Палестини на початок хронології", "поставить приход в Палестину в начало хронологии")
      ]
    },
    {
      type: "concept",
      module: "abraham",
      heading: L("Początki dziejów Izraelitów", "Початки історії ізраїльтян", "Начало истории израильтян"),
      formula: "koczownicy z Mezopotamii",
      text: {
        pl: [
          ["Izraelici (nazywani też ", em("Żydami"), ") byli na początku koczowniczym plemieniem z ", em("Mezopotamii"), "."],
          ["Według Biblii prowadził ich ", em("Abraham"), ". Dotarli do ", em("Ziemi Kanaan"), " — krainy przy wschodnim brzegu Morza Śródziemnego. Tę ziemię zwie się też Palestyną albo Ziemią Obiecaną."],
          "To początek tradycji biblijnej tego ludu. Historyk mówi „według Biblii”, bo nie wszystko da się sprawdzić wykopaliskami."
        ],
        ua: [
          ["Ізраїльтяни (їх називають також ", em("євреями"), ") спочатку були кочовим племенем з ", em("Месопотамії"), "."],
          ["За Біблією їх вів ", em("Авраам"), ". Вони дісталися ", em("землі Ханаан"), " — краю при східному березі Середземного моря. Цю землю звуть також Палестиною або Обітованою землею."],
          "Це початок біблійної традиції цього народу. Історик каже «за Біблією», бо не все можна перевірити розкопками."
        ],
        ru: [
          ["Израильтяне (их называют также ", em("Żydami"), ") сначала были кочевым племенем из ", em("Mezopotamii"), "."],
          ["По Библии их вёл ", em("Abraham"), ". Они пришли в ", em("Ziemię Kanaan"), " — край у восточного берега Средиземного моря. Эту землю называют также Палестиной."],
          "Это начало библейской традиции народа. Историк говорит «według Biblii», потому что не всё можно проверить раскопками."
        ]
      }
    },
    {
      type: "example",
      module: "abraham",
      heading: L("Odpowiedź na sprawdzian", "Відповідь на перевірку", "Ответ на sprawdzian"),
      text: {
        pl: [
          "Pytanie: Skąd przybyli Izraelici i kto ich prowadził według Biblii?",
          "Przykładowa odpowiedź: Izraelici przybyli z Mezopotamii pod wodzą Abrahama do Palestyny (Kanaanu)."
        ],
        ua: [
          "Питання: Звідки прийшли ізраїльтяни і хто їх вів за Біблією?",
          "Зразкова відповідь: Ізраїльтяни прийшли з Месопотамії під проводом Авраама до Палестини (Ханаану)."
        ],
        ru: [
          "Вопрос: Откуда пришли израильтяне и кто их вёл по Библии?",
          "Образец по-польски: Izraelici przybyli z Mezopotamii pod wodzą Abrahama do Palestyny (Kanaanu)."
        ]
      }
    },

    /* ========== 3. MOJŻESZ ========== */
    {
      type: "goal",
      module: "mojzesz",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić niewolę egipską i rolę Mojżesza", "пояснити єгипетську неволю і роль Мойсея", "объяснить египетский плен и роль Моисея"),
        L("rozpoznać Mojżesza z tablicami Dekalogu", "розпізнати Мойсея з таблицями Декалогу", "узнать Моисея с таблицами Декалога")
      ]
    },
    {
      type: "visual",
      module: "mojzesz",
      track: "both",
      heading: L("Wyjście z Egiptu", "Вихід з Єгипту", "Исход из Египта"),
      formula: "XIII w. p.n.e. · Mojżesz",
      visual: gh("030", {
        kind: "map-placeholder",
        alt: L(
          "Mapa drogi Izraelitów z Egiptu przez Synaj do Kanaanu",
          "Карта шляху ізраїльтян з Єгипту через Синай до Ханаану",
          "Карта пути израильтян из Египта через Синай"
        ),
        title: L("Szlak Mojżesza przez Synaj", "Шлях Мойсея через Синай", "Путь Моисея через Синай")
      }),
      text: {
        pl: [
          ["Z czasem Izraelici trafili do Egiptu i — według Biblii — popadli w ", em("niewolę egipską"), "."],
          ["Około ", em("XIII wieku p.n.e."), " pod wodzą ", em("Mojżesza"), " wrócili do Palestyny. Droga wiodła przez pustynię Synaj."],
          "To ważne wydarzenie w pamięci religijnej narodu. Na osi czasu: najpierw niewola, potem ucieczka z Mojżeszem."
        ],
        ua: [
          ["З часом ізраїльтяни потрапили до Єгипту і — за Біблією — потрапили в ", em("єгипетську неволю"), "."],
          ["Близько ", em("XIII століття до н.е."), " під проводом ", em("Мойсея"), " вони повернулися до Палестини. Шлях вів через пустелю Синай."],
          "Це важлива подія в релігійній пам’яті народу. На осі часу: спочатку неволя, потім втеча з Мойсеєм."
        ],
        ru: [
          ["Со временем израильтяне оказались в Египте и — по Библии — попали в ", em("niewola egipska"), " — египетский плен."],
          ["Около ", em("XIII века до н. э."), " под руководством ", em("Mojżesz"), " они вернулись в Палестину. Путь шёл через пустыню Синай."],
          "Это важное событие в религиозной памяти народа. На оси времени: сначала плен, потом исход с Моисеем."
        ]
      },
      task: {
        id: "h04-check-mojzesz",
        type: "true-false",
        level: "A",
        coach: true,
        question: L(
          "Według Biblii Mojżesz wyprowadził Izraelitów z Egiptu i przekazał Dziesięć Przykazań — prawda czy fałsz?",
          "За Біблією Мойсей вивів ізраїльтян з Єгипту і передав Десять заповідей — правда чи неправда?",
          "По Библии Моисей вывел израильтян из Египта и передал Десять заповедей — правда или ложь?"
        ),
        answer: true,
        hint: L(
          "Synaj, tablice, wyjście z niewoli.",
          "Синай, таблиці, вихід з неволі.",
          "Синай, таблицы, исход из плена."
        ),
        explanation: L(
          "To kanon tematu. Mówimy „według Biblii”.",
          "Це канон теми. Кажемо «за Біблією».",
          "Это канон темы. Говорим «według Biblii»."
        )
      }
    },
    {
      type: "visual",
      module: "mojzesz",
      heading: L("Zeszyt, strona 12, zadanie 1", "Зошит, сторінка 12, завдання 1", "Тетрадь, страница 12, задание 1"),
      visual: {
        kind: "image-placeholder",
        url: "./img/obraz-strona12.jpg",
        alt: L(
          "Obraz z zeszytu: mężczyzna z tablicami nad głową",
          "Картина із зошита: чоловік із таблицями над головою",
          "Картина из тетради: человек с таблицами над головой"
        ),
        title: L("Praca z ilustracją", "Робота з ілюстрацією", "Работа с иллюстрацией")
      },
      text: {
        pl: [
          "Na obrazie widać brodatego mężczyznę, który unosi nad głową dwie kamienne tablice.",
          "Pomyśl: kto według Biblii otrzymał Dekalog na górze Synaj? Najpierw podkreśl w zeszycie, potem porównaj ze wzorem."
        ],
        ua: [
          "На картині видно бородатого чоловіка, який піднімає над головою дві кам’яні таблиці.",
          "Подумай: хто за Біблією отримав Декалог на горі Синай? Спочатку підкресли в зошиті, потім порівняй зі зразком."
        ],
        ru: [
          "На картине бородатый мужчина поднимает над головой две каменные таблицы.",
          "Подумай: кто по Библии получил Декалог на горе Синай? Сначала подчеркни в тетради, потом сравни с образцом."
        ]
      },
      zeszyt: {
        id: "h04-z12-1",
        lead: L(
          ["Strona 12, zadanie 1a–b. Kim jest postać na obrazie i co unosi nad głową?"],
          ["Сторінка 12, завдання 1a–b. Хто на картині і що піднімає над головою?"],
          ["Страница 12, задание 1a–b. Кто на картине и что он поднимает над головой? Сначала сам."]
        ),
        answers: [
          {
            label: L("1a. Postać", "1a. Постать", "1a. Персонаж"),
            text: L(["B) Mojżesz"], ["B) Mojżesz"], ["B) Mojżesz"]),
            why: L(
              ["Tablice z przykazaniami wiążą się z Mojżeszem na Synaju. Dawid i Salomon to królowie, Abraham — wcześniejszy patriarcha."],
              ["Таблиці з заповідями пов’язані з Мойсеєм на Синаї. Давид і Соломон — царі, Авраам — раніший патріарх."],
              ["Таблицы заповедей связаны с Моисеем на Синае. Давид и Соломон — цари, Авраам — более ранний патриарх."]
            )
          },
          {
            label: L("1b. Co unosi?", "1b. Що піднімає?", "1b. Что поднимает?"),
            text: L(
              ["Tablice z Dekalogiem (kamienne tablice z przykazaniami)."],
              ["Таблиці з Декалогом (кам’яні таблиці з заповідями)."],
              ["Tablice z Dekalogiem (kamienne tablice z przykazaniami)."]
            ),
            why: L(
              ["Widać dwie prostokątne tablice. To tablice przykazań — Dekalog. Inna poprawna forma: „tablice Przymierza”."],
              ["Видно дві прямокутні таблиці. Це таблиці заповідей — Декалог."],
              ["Видны две прямоугольные таблицы. Это таблицы заповедей — Dekalog. Подойдёт и «tablice Przymierza»."]
            )
          }
        ]
      }
    },

    /* ========== 4. KRÓLOWIE ========== */
    {
      type: "goal",
      module: "krolowie",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("opisać Dawida i Salomona", "описати Давида і Соломона", "описать Давида и Соломона"),
        L("ułożyć 6 wydarzeń w kolejności", "розставити 6 подій у порядку", "расставить 6 событий по порядку")
      ]
    },
    {
      type: "concept",
      module: "krolowie",
      heading: L("Własne państwo", "Власна держава", "Собственное государство"),
      timelineId: "izrael",
      formula: "początek X w. p.n.e.",
      text: {
        pl: [
          "Na początku X wieku p.n.e. Izraelici utworzyli własne państwo w Kanaanie.",
          "To już nie tylko wędrowne plemiona — stolica, król, wojsko. Najpierw Saul, potem Dawid i Salomon."
        ],
        ua: [
          "На початку X століття до н.е. ізраїльтяни створили власну державу в Ханаані.",
          "Це вже не лише мандрівні племена — столиця, цар, військо. Спочатку Саул, потім Давид і Соломон."
        ],
        ru: [
          "В начале X века до н. э. израильтяне создали собственное государство в Ханаане.",
          "Это уже не только кочевые племена — столица, царь, войско. Сначала Саул, потом Давид и Соломон."
        ]
      }
    },
    {
      type: "visual",
      module: "krolowie",
      track: "both",
      heading: L("Mapa: królestwo w X wieku", "Карта: царство в X столітті", "Карта: царство в X веке"),
      timelineId: "izrael",
      visual: gh("031", {
        kind: "map-placeholder",
        alt: L(
          "Mapa zjednoczonego królestwa: Jerozolima, Jordan, Morze Martwe",
          "Карта об’єднаного царства: Єрусалим, Йордан, Мертве море",
          "Карта объединённого царства: Иерусалим, Иордан, Мёртвое море"
        ),
        title: L("Państwo Dawida i Salomona", "Держава Давида і Соломона", "Государство Давида и Соломона")
      }),
      task: {
        id: "h04-krolestwo",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Kiedy — według tego tematu — Izraelici utworzyli własne państwo?",
          "Коли — за цією темою — ізраїльтяни створили власну державу?",
          "Когда — по этой теме — израильтяне создали собственное государство?"
        ),
        options: [
          { id: "a", label: L("na początku X wieku p.n.e.", "на початку X століття до н.е.", "в начале X века до н. э.") },
          { id: "b", label: L("w 1948 roku n.e., razem z Unią Europejską", "у 1948 році н.е., разом з Європейським Союзом", "в 1948 году н. э., вместе с ЕС") },
          { id: "c", label: L("za Cheopsa, przy budowie piramidy w Gizie", "за Хеопса, під час будови піраміди в Гізі", "при Хеопсе, во время строительства пирамиды в Гизе") }
        ],
        answer: "a",
        hint: L(
          "To początek tysiąclecia przed naszą erą — czasy Dawida i Salomona.",
          "Це початок тисячоліття до нашої ери — часи Давида і Соломона.",
          "Это начало тысячелетия до нашей эры — времена Давида и Соломона."
        ),
        explanation: L(
          "X w. p.n.e. 1948 to współczesne państwo. Cheops — Egipt.",
          "X ст. до н.е. 1948 — сучасна держава. Хеопс — Єгипет.",
          "X в. до н. э. 1948 — современное государство. Хеопс — Египет."
        )
      }
    },
    {
      type: "visual",
      module: "krolowie",
      track: "both",
      heading: L("Okres świetności", "Доба розквіту", "Период расцвета"),
      visual: gh("032", {
        kind: "image-placeholder",
        alt: L(
          "Król Dawid i król Salomon — dwa spokojne portrety",
          "Цар Давид і цар Соломон — два спокійні портрети",
          "Царь Давид и царь Соломон — два портрета"
        ),
        title: L("Dawid i Salomon", "Давид і Соломон", "Давид и Соломон")
      }),
      text: {
        pl: [
          [em("Dawid"), " zjednoczył plemiona izraelskie i zdobył ", em("Jerozolimę"), " — stolicę."],
          [em("Salomon"), ", jego syn, słynął z mądrości. W Jerozolimie wzniósł ", em("Świątynię"), " — centrum kultu jednego Boga."]
        ],
        ua: [
          [em("Давид"), " об’єднав ізраїльські племена і здобув ", em("Єрусалим"), " — столицю."],
          [em("Соломон"), ", його син, славився мудрістю. У Єрусалимі звів ", em("Храм"), " — осереддя культу одного Бога."]
        ],
        ru: [
          [em("Dawid"), " объединил израильские племена и сделал столицей ", em("Jerozolima"), "."],
          [em("Salomon"), ", его сын, славился мудростью. В Иерусалиме он построил ", em("Świątynię"), " — центр культа одного Бога."]
        ]
      },
      task: {
        id: "h04-jerozolima",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Które miasto Dawid uczynił stolicą, a Salomon zbudował w nim świątynię?",
          "Яке місто Давид зробив столицею, а Соломон збудував у ньому храм?",
          "Какой город Давид сделал столицей, а Соломон построил в нём храм?"
        ),
        options: [
          { id: "a", label: L("Memfis", "Мемфіс", "Мемфис") },
          { id: "b", label: L("Jerozolima", "Єрусалим", "Иерусалим") },
          { id: "c", label: L("Uruk", "Урук", "Урук") }
        ],
        answer: "b",
        hint: L(
          "Święte miasto Izraela, nie Egiptu i nie Sumeru.",
          "Святе місто Ізраїлю, не Єгипту і не Шумеру.",
          "Святой город Израиля, не Египта и не Шумера."
        ),
        explanation: L(
          "Jerozolima. Memfis — Egipt. Uruk — Sumer.",
          "Єрусалим. Мемфіс — Єгипет. Урук — Шумер.",
          "Jerozolima. Мемфис — Египет. Урук — Шумер."
        )
      }
    },
    {
      type: "algorithm",
      module: "krolowie",
      heading: L("Chronologia: 6 wydarzeń", "Хронологія: 6 подій", "Хронология: 6 событий"),
      reveal: true,
      text: L(
        ["Otwieraj po jednym kroku. To kolejność z zeszytu (strona 13, zadanie 3)."],
        ["Відкривай по одному кроку. Це порядок із зошита (сторінка 13, завдання 3)."],
        ["Открывай по одному шагу. Это порядок из тетради (страница 13, задание 3)."]
      ),
      steps: [
        {
          formula: "1",
          text: L(
            "Przybycie Izraelitów pod wodzą Abrahama do Palestyny.",
            "Прибуття ізраїльтян під проводом Авраама до Палестини.",
            "Приход израильтян под руководством Авраама в Палестину."
          )
        },
        {
          formula: "2",
          text: L(
            "Niewola egipska.",
            "Єгипетська неволя.",
            "Египетский плен (niewola egipska)."
          )
        },
        {
          formula: "3",
          text: L(
            "Ucieczka z Egiptu pod wodzą Mojżesza.",
            "Втеча з Єгипту під проводом Мойсея.",
            "Исход из Египта под руководством Моисея."
          )
        },
        {
          formula: "4",
          text: L(
            "Zjednoczenie przez Dawida plemion izraelskich.",
            "Об’єднання Давидом ізраїльських племен.",
            "Объединение израильских племён Давидом."
          )
        },
        {
          formula: "5",
          text: L(
            "Początek rządów króla Salomona.",
            "Початок правління царя Соломона.",
            "Начало правления царя Соломона."
          )
        },
        {
          formula: "6",
          text: L(
            "Podbicie Palestyny przez Rzymian.",
            "Підкорення Палестини римлянами.",
            "Подчинение Палестины римлянами."
          )
        }
      ]
    },
    {
      type: "observe",
      module: "krolowie",
      heading: L("Później: Rzym i rozproszenie", "Пізніше: Рим і розсіяння", "Позже: Рим и рассеяние"),
      text: {
        pl: [
          "Na końcu chronologii z zeszytu stoi podbicie Palestyny przez Rzymian.",
          "W I i II wieku n.e. Żydzi wielokrotnie powstawali przeciwko okupantom. Po klęskach wielu wypędzono z Palestyny — lud rozproszył się po świecie.",
          "Na tej lekcji zapamiętaj przede wszystkim: Abraham → niewola egipska → Mojżesz → Dawid → Salomon → Rzym."
        ],
        ua: [
          "Наприкінці хронології із зошита стоїть підкорення Палестини римлянами.",
          "У I і II століттях н.е. євреї неодноразово повставали проти окупантів. Після поразок багатьох вигнали з Палестини — народ розсіявся світом.",
          "На цьому уроці запам’ятай передусім: Авраам → єгипетська неволя → Мойсей → Давид → Соломон → Рим."
        ],
        ru: [
          "В конце хронологии из тетради стоит подчинение Палестины римлянами.",
          "В I и II веках н. э. евреи неоднократно восставали против оккупантов. После поражений многих изгнали из Палестины — народ рассеялся по миру.",
          "На этом уроке запомни прежде всего: Abraham → niewola egipska → Mojżesz → Dawid → Salomon → Rzym."
        ]
      }
    },
    {
      type: "visual",
      module: "krolowie",
      track: "both",
      heading: L("Okres upadku: niewola babilońska", "Доба занепаду: вавилонська неволя", "Упадок: вавилонский плен"),
      visual: gh("033", {
        kind: "image-placeholder",
        alt: L(
          "Ludzie z tobołkami odchodzą od murów miasta — niewola babilońska",
          "Люди з клунками відходять від мурів міста — вавилонська неволя",
          "Люди с пожитками уходят от стен города — вавилонский плен"
        ),
        title: L("Niewola babilońska", "Вавилонська неволя", "Вавилонский плен")
      }),
      text: {
        pl: [
          "Po Salomonie państwo się podzieliło i słabło.",
          ["Na początku ", em("VI wieku p.n.e."), " Babilończycy zdobyli Jerozolimę i uprowadzili Izraelitów — to ", em("niewola babilońska"), ". Po upadku Babilonu lud wrócił do Palestyny."],
          "Uwaga: niewola egipska (wcześniej, za Mojżesza) i niewola babilońska (później, VI w.) to dwa różne wydarzenia."
        ],
        ua: [
          "Після Соломона держава поділилася і слабшала.",
          ["На початку ", em("VI століття до н.е."), " вавилоняни здобули Єрусалим і вивели ізраїльтян — це ", em("вавилонська неволя"), ". Після падіння Вавилона народ повернувся до Палестини."],
          "Увага: єгипетська неволя (раніше, за Мойсея) і вавилонська неволя (пізніше, VI ст.) — дві різні події."
        ],
        ru: [
          "После Соломона государство разделилось и ослабело.",
          ["В начале ", em("VI века до н. э."), " вавилоняне взяли Иерусалим и увели израильтян — это ", em("niewola babilońska"), ". После падения Вавилона народ вернулся в Палестину."],
          "Важно: niewola egipska (раньше, при Моисее) и niewola babilońska (позже, VI в.) — два разных события."
        ]
      },
      task: {
        id: "h04-niewola",
        type: "true-false",
        level: "B",
        coach: true,
        question: L(
          "Niewola babilońska to uprowadzenie Izraelitów z Jerozolimy przez Babilończyków na początku VI w. p.n.e. — prawda czy fałsz?",
          "Вавилонська неволя — це виведення ізраїльтян з Єрусалима вавилонянами на початку VI ст. до н.е. — правда чи неправда?",
          "Вавилонский плен — это угон израильтян из Иерусалима вавилонянами в начале VI в. до н. э. — правда или ложь?"
        ),
        answer: true,
        hint: L(
          "Babilon, VI wiek, Jerozolima — nie myl z niewolą egipską.",
          "Вавилон, VI століття, Єрусалим — не плутай з єгипетською неволею.",
          "Вавилон, VI век, Иерусалим — не путай с египетским пленом."
        ),
        explanation: L(
          "Prawda. Potem, gdy Babilon upadł, część ludu wróciła.",
          "Правда. Потім, коли Вавилон упав, частина народу повернулася.",
          "Правда. Потом, когда Вавилон пал, часть народа вернулась."
        )
      }
    },
    {
      type: "check",
      module: "krolowie",
      track: "both",
      heading: L("Które wydarzenie było pierwsze?", "Яка подія була першою?", "Какое событие было первым?"),
      task: {
        id: "h04-q-chronologia",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Które wydarzenie było wcześniejsze: niewola egipska czy zjednoczenie plemion przez Dawida?",
          "Яка подія була раніше: єгипетська неволя чи об’єднання племен Давидом?",
          "Что было раньше: египетский плен или объединение племён Давидом?"
        ),
        options: [
          { id: "a", label: L("najpierw Dawid, potem niewola egipska", "спочатку Давид, потім єгипетська неволя", "сначала Давид, потом египетский плен") },
          { id: "b", label: L("najpierw niewola egipska, potem Dawid", "спочатку єгипетська неволя, потім Давид", "сначала египетский плен, потом Давид") },
          { id: "c", label: L("oba wydarzenia były w tym samym roku", "обидві події були того самого року", "оба события были в одном году") }
        ],
        answer: "b",
        hint: L(
          "Najpierw Abraham, potem Egipt i Mojżesz, dopiero potem królowie.",
          "Спочатку Авраам, потім Єгипет і Мойсей, лише потім царі.",
          "Сначала Авраам, потом Египет и Моисей, только потом цари."
        ),
        explanation: L(
          "Kolejność: Abraham → niewola egipska → Mojżesz → Dawid → Salomon → Rzym.",
          "Порядок: Авраам → єгипетська неволя → Мойсей → Давид → Соломон → Рим.",
          "Порядок: Abraham → niewola egipska → Mojżesz → Dawid → Salomon → Rzym."
        )
      }
    },
    {
      type: "visual",
      module: "krolowie",
      heading: L("Zeszyt, strona 13, zadanie 3", "Зошит, сторінка 13, завдання 3", "Тетрадь, страница 13, задание 3"),
      text: {
        pl: [
          "W zeszycie numerujesz 6 wydarzeń od 1 do 6. Najpierw zrób sam — bez podglądania wzoru.",
          "Pamiętaj: niewola egipska jest przed ucieczką Mojżesza. Dawid jest przed Salomonem. Rzymianie są na końcu."
        ],
        ua: [
          "У зошиті нумеруєш 6 подій від 1 до 6. Спочатку зроби сам — без підглядання.",
          "Пам’ятай: єгипетська неволя перед втечею Мойсея. Давид перед Соломоном. Римляни — в кінці."
        ],
        ru: [
          "В тетради ты нумеруешь 6 событий от 1 до 6. Сначала сделай сам — без подглядывания.",
          "Помни: египетский плен раньше исхода Моисея. Давид раньше Соломона. Римляне — в конце."
        ]
      },
      zeszyt: {
        id: "h04-z13-3",
        lead: L(
          ["Strona 13, zadanie 3. Uporządkuj wydarzenia od 1 do 6."],
          ["Сторінка 13, завдання 3. Упорядкуй події від 1 до 6."],
          ["Страница 13, задание 3. Расставь события от 1 до 6. Сначала сам."]
        ),
        answers: [
          {
            label: L("Kolejność 1–6", "Порядок 1–6", "Порядок 1–6"),
            text: L(
              [
                "1. przybycie Izraelitów pod wodzą Abrahama do Palestyny",
                "2. niewola egipska",
                "3. ucieczka z Egiptu pod wodzą Mojżesza",
                "4. zjednoczenie przez Dawida plemion izraelskich",
                "5. początek rządów króla Salomona",
                "6. podbicie Palestyny przez Rzymian"
              ],
              [
                "1. przybycie Izraelitów pod wodzą Abrahama do Palestyny",
                "2. niewola egipska",
                "3. ucieczka z Egiptu pod wodzą Mojżesza",
                "4. zjednoczenie przez Dawida plemion izraelskich",
                "5. początek rządów króla Salomona",
                "6. podbicie Palestyny przez Rzymian"
              ],
              [
                "1. przybycie Izraelitów pod wodzą Abrahama do Palestyny",
                "2. niewola egipska",
                "3. ucieczka z Egiptu pod wodzą Mojżesza",
                "4. zjednoczenie przez Dawida plemion izraelskich",
                "5. początek rządów króla Salomona",
                "6. podbicie Palestyny przez Rzymian"
              ]
            ),
            why: L(
              ["Abraham na początku. Egipt przed Mojżeszem. Dawid przed Salomonem. Rzym na końcu."],
              ["Авраам на початку. Єгипет перед Мойсеєм. Давид перед Соломоном. Рим наприкінці."],
              ["Авраам в начале. Египет раньше Моисея. Давид раньше Соломона. Рим в конце."]
            )
          }
        ]
      }
    },

    /* ========== 5. MONOTEIZM ========== */
    {
      type: "goal",
      module: "monoteizm",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("wyjaśnić monoteizm i imię Jahwe", "пояснити монотеїзм і ім’я Ягве", "объяснить монотеизм и имя Jahwe"),
        L("porównać z politeizmem Egiptu", "порівняти з політеїзмом Єгипту", "сравнить с политеизмом Египта")
      ]
    },
    {
      type: "concept",
      module: "monoteizm",
      heading: L("Wierzenia Izraelitów", "Вірування ізраїльтян", "Верования израильтян"),
      formula: "judaizm · monoteizm",
      text: {
        pl: [
          ["Religia Izraelitów to ", em("judaizm"), ". To religia ", em("monoteistyczna"), " (mono — jeden, theos — bóg)."],
          ["Jednego Boga nazywali ", em("Jahwe"), "."],
          "Przykładowa odpowiedź na sprawdzian: Monoteizm to wiara w jednego Boga."
        ],
        ua: [
          ["Релігія ізраїльтян — ", em("юдаїзм"), ". Це релігія ", em("монотеїстична"), " (моно — один, теос — бог)."],
          ["Єдиного Бога називали ", em("Ягве"), "."],
          "Зразкова відповідь: Монотеїзм — це віра в одного Бога."
        ],
        ru: [
          ["Религия израильтян — ", em("judaizm"), ". Это ", em("monoteizm"), " — вера в одного Бога (mono — один, theos — бог)."],
          ["Единого Бога называли ", em("Jahwe"), "."],
          "Ответ на sprawdzian по-польски: Monoteizm to wiara w jednego Boga."
        ]
      }
    },
    {
      type: "guided-practice",
      module: "monoteizm",
      track: "both",
      heading: L("Zrób razem ze mną", "Зроби разом зі мною", "Сделаем вместе"),
      text: {
        pl: ["Porównaj Egipt i Izrael: ilu bogów? Co spina społeczność — rzeka czy przymierze?"],
        ua: ["Порівняй Єгипет і Ізраїль: скільки богів? Що єднає спільноту — річка чи заповіт?"],
        ru: ["Сравни Египет и Израиль: сколько богов? Что соединяет народ — река или союз с Богом?"]
      },
      task: {
        id: "h04-guided",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Czym religia Izraelitów różniła się od religii Egiptu?",
          "Чим релігія ізраїльтян відрізнялася від релігії Єгипту?",
          "Чем религия израильтян отличалась от религии Египта?"
        ),
        options: [
          { id: "a", label: L("Izraelici czcili wielu bogów, Egipcjanie — jednego", "Ізраїльтяни шанували багатьох богів, єгиптяни — одного", "Израильтяне чтили многих богов, египтяне — одного") },
          { id: "b", label: L("Izraelici czcili jednego Boga (judaizm), Egipcjanie wielu (politeizm)", "Ізраїльтяни шанували одного Бога (юдаїзм), єгиптяни багатьох (політеїзм)", "Израильтяне чтили одного Бога (иудаизм), египтяне многих (политеизм)") },
          { id: "c", label: L("Nikt w starożytności nie miał żadnych bogów", "Ніхто в давнину не мав жодних богів", "В древности ни у кого не было богов") }
        ],
        answer: "b",
        hint: L(
          "Mono = jeden. Poli = wiele.",
          "Моно = один. Полі = багато.",
          "Mono = один. Poli = много."
        ),
        explanation: L(
          "Judaizm = monoteizm. Egipt = politeizm.",
          "Юдаїзм = монотеїзм. Єгипет = політеїзм.",
          "Judaizm = monoteizm. Египет = politeizm."
        )
      }
    },
    {
      type: "problem",
      module: "monoteizm",
      track: "both",
      heading: L("Odpowiedź ustna", "Усна відповідь", "Устный ответ"),
      prompt: L(
        "Wyjaśnij, czym jest monoteizm i podaj przykład z tej lekcji.",
        "Поясни, що таке монотеїзм, і наведи приклад з цього уроку.",
        "Объясни, что такое монотеизм, и приведи пример из этого урока."
      ),
      text: {
        pl: [
          "Podpowiedź: jeden Bóg Jahwe, judaizm, nie Ra i Ozyrys.",
          "Powiedz 2–3 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: один Бог Ягве, юдаїзм, не Ра і Осіріс.",
          "Скажи 2–3 речення. Потім вибери найкращий підсумок."
        ],
        ru: [
          "Подсказка: один Бог Jahwe, иудаизм, не Ра и Осирис.",
          "Скажи 2–3 предложения. Потом выбери лучшее резюме."
        ]
      },
      task: {
        id: "h04-oral",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Które zdanie najlepiej wyjaśnia wiarę Izraelitów?",
          "Яке речення найкраще пояснює віру ізраїльтян?",
          "Какое предложение лучше всего объясняет веру израильтян?"
        ),
        options: [
          { id: "a", label: L("Wiara, że każdy kamień jest osobnym bogiem wojny", "Віра, що кожен камінь є окремим богом війни", "Вера, что каждый камень — отдельный бог войны") },
          { id: "b", label: L("Judaizm: wiara w jednego Boga Jahwe i przymierze z ludem", "Юдаїзм: віра в одного Бога Ягве і заповіт з народом", "Иудаизм: вера в одного Бога Jahwe и союз с народом") },
          { id: "c", label: L("Brak jakiejkolwiek religii", "Відсутність будь-якої релігії", "Отсутствие какой-либо религии") }
        ],
        answer: "b",
        hint: L(
          "Mono = jeden. Jahwe, Tora.",
          "Моно = один. Ягве, Тора.",
          "Mono = один. Jahwe, Tora."
        ),
        explanation: L(
          "Jeden Bóg + przymierze. To kanon klasy 5.",
          "Один Бог + заповіт. Це канон 5 класу.",
          "Один Бог + союз. Это канон 5 класса."
        )
      }
    },
    {
      type: "problem",
      module: "monoteizm",
      track: "both",
      heading: L("Odpowiedź pisemna", "Письмова відповідь", "Письменный ответ"),
      prompt: L(
        "Wpisz słowo oznaczające wiarę w jednego Boga.",
        "Введи слово, що означає віру в одного Бога.",
        "Впиши слово, означающее веру в одного Бога."
      ),
      task: {
        id: "h04-write",
        type: "input-text",
        level: "B",
        coach: true,
        question: L(
          "Wiara w jednego Boga to… (jedno słowo)",
          "Віра в одного Бога — це… (одне слово)",
          "Вера в одного Бога — это… (одно слово)"
        ),
        answer: ["monoteizm", "монотеїзм", "монотеизм", "judaizm", "юдаїзм", "иудаизм"],
        hint: L(
          "Przeciwieństwo politeizmu. Albo nazwa religii Izraelitów.",
          "Протилежність політеїзму. Або назва релігії ізраїльтян.",
          "Противоположность политеизма. Или название религии израильтян."
        ),
        explanation: L(
          "Monoteizm (religia: judaizm).",
          "Монотеїзм (релігія: юдаїзм).",
          "Monoteizm (религия: judaizm)."
        )
      }
    },

    /* ========== 6. TORA ========== */
    {
      type: "goal",
      module: "tora",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("odróżnić Torę od Dekalogu", "відрізнити Тору від Декалогу", "отличить Тору от Декалога"),
        L("wyjaśnić, kim byli prorocy i kim jest Mesjasz", "пояснити, ким були пророки і ким є Месія", "объяснить, кто такие пророки и кто такой Мессия")
      ]
    },
    {
      type: "visual",
      module: "tora",
      heading: L("Tora, przymierze, Dekalog", "Тора, заповіт, Декалог", "Тора, союз, Декалог"),
      visual: gh("034", {
        kind: "image-placeholder",
        alt: L(
          "Zwój Tory, tablice przykazań i Arka Przymierza",
          "Сувій Тори, таблиці заповідей і Ковчег Завіту",
          "Свиток Торы, таблицы заповедей и Ковчег Завета"
        ),
        title: L("Święta księga i prawo przymierza", "Священна книга і право завіту", "Священная книга и закон союза")
      }),
      text: {
        pl: [
          ["Święta księga judaizmu: ", em("Tora"), " (Pięcioksiąg) — pierwsze pięć ksiąg Biblii hebrajskiej."],
          [em("Dekalog"), " to dziesięć przykazań. Według Biblii Mojżesz otrzymał je na górze Synaj, spisane na tablicach i złożone w ", em("Arce Przymierza"), "."],
          "Nie mieszaj: Tora = święta księga. Dekalog = 10 przykazań."
        ],
        ua: [
          ["Священна книга юдаїзму: ", em("Тора"), " (П’ятикнижжя) — перші п’ять книг єврейської Біблії."],
          [em("Декалог"), " — десять заповідей. За Біблією Мойсей отримав їх на горі Синай, записані на таблицях і покладені в ", em("Ковчег Завіту"), "."],
          "Не плутай: Тора = священна книга. Декалог = 10 заповідей."
        ],
        ru: [
          ["Священная книга иудаизма: ", em("Tora"), " (Пятикнижие) — первые пять книг еврейской Библии."],
          [em("Dekalog"), " — десять заповедей. По Библии Моисей получил их на горе Синай; они записаны на таблицах и положены в ", em("Arkę Przymierza"), "."],
          "Не путай: Tora = священная книга. Dekalog = 10 заповедей."
        ]
      }
    },
    {
      type: "check",
      module: "tora",
      track: "both",
      heading: L("Tora czy Dekalog?", "Тора чи Декалог?", "Тора или Декалог?"),
      task: {
        id: "h04-q-dekalog",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Czym jest Dekalog?",
          "Що таке Декалог?",
          "Что такое Декалог?"
        ),
        options: [
          { id: "a", label: L("święta księga judaizmu — pierwsze pięć ksiąg Biblii", "священна книга юдаїзму — перші п’ять книг Біблії", "священная книга иудаизма — первые пять книг Библии") },
          { id: "b", label: L("dziesięć przykazań", "десять заповідей", "десять заповедей") },
          { id: "c", label: L("siedmioramienny świecznik", "семисвічник", "семисвечник") }
        ],
        answer: "b",
        hint: L(
          "Tora to księga. Dekalog to przykazania. Menora to świecznik.",
          "Тора — книга. Декалог — заповіді. Менора — свічник.",
          "Тора — книга. Декалог — заповеди. Менора — светильник."
        ),
        explanation: L(
          "Dekalog to dziesięć przykazań. Tora to święta księga.",
          "Декалог — десять заповідей. Тора — священна книга.",
          "Dekalog — десять заповедей. Tora — священная книга."
        )
      }
    },
    {
      type: "example",
      module: "tora",
      track: "both",
      heading: L("Źródło: Biblia", "Джерело: Біблія", "Источник: Библия"),
      formula: "ŹRÓDŁO (ostrożnie)",
      text: {
        pl: [
          "Biblia (dla Żydów — Tanach / Biblia hebrajska) to zbiór świętych ksiąg. Opowiada o Bogu, przymierzu i dziejach Izraela.",
          "Historyk czyta ją inaczej niż wierzący: pyta, co tekst mówi o wierzeniach i pamięci ludu. Nie wszystko da się sprawdzić wykopaliskami. Dlatego mówimy „według Biblii”."
        ],
        ua: [
          "Біблія (для євреїв — Танах / єврейська Біблія) — збірка священних книг. Оповідає про Бога, заповіт і діє Ізраїлю.",
          "Історик читає її інакше, ніж вірянин: питає, що текст каже про вірування і пам’ять народу. Не все можна перевірити розкопками. Тому кажемо «за Біблією»."
        ],
        ru: [
          "Библия (для евреев — Танах / еврейская Библия) — собрание священных книг. Она рассказывает о Боге, союзе и истории Израиля.",
          "Историк читает её иначе, чем верующий: спрашивает, что текст говорит о верованиях и памяти народа. Не всё можно проверить раскопками. Поэтому говорим «według Biblii»."
        ]
      },
      task: {
        id: "h04-src-biblia",
        type: "single-choice",
        level: "B",
        coach: true,
        question: L(
          "Jak historyk powinien czytać Biblię na lekcji historii?",
          "Як історик має читати Біблію на уроці історії?",
          "Как историк должен читать Библию на уроке истории?"
        ),
        options: [
          { id: "a", label: L("jako źródło o wierzeniach i pamięci Izraelitów — ostrożnie, nie jak dowód każdej daty", "як джерело про вірування і пам’ять ізраїльтян — обережно, не як доказ кожної дати", "как источник о верованиях и памяти израильтян — осторожно, не как доказательство каждой даты") },
          { id: "b", label: L("jako listę zakupów faraona Cheopsa", "як список покупок фараона Хеопса", "как список покупок фараона Хеопса") },
          { id: "c", label: L("w ogóle jej nie czytać, bo nie jest żadnym źródłem", "взагалі її не читати, бо це не джерело", "вообще не читать, потому что это не источник") }
        ],
        answer: "a",
        hint: L(
          "Źródło ważne, ale innego typu niż tabliczka z Uruk.",
          "Джерело важливе, але іншого типу, ніж табличка з Урука.",
          "Источник важный, но другого типа, чем табличка из Урука."
        ),
        explanation: L(
          "Biblia jest źródłem. Historyk oddziela wiarę od tego, co da się potwierdzić inaczej.",
          "Біблія є джерелом. Історик відділяє віру від того, що можна підтвердити інакше.",
          "Библия — источник. Историк отделяет веру от того, что можно подтвердить иначе."
        )
      }
    },
    {
      type: "concept",
      module: "tora",
      heading: L("Prorocy i Mesjasz", "Пророки і Месія", "Пророки и Мессия"),
      text: {
        pl: [
          [em("Prorok"), " to przywódca religijny, który — według tradycji — przekazuje ludziom słowo Boga."],
          "Prorocy podtrzymywali wiarę, także w czasie niewoli babilońskiej. Przepowiadali nadejście Mesjasza — oczekiwanego wybawiciela.",
          "Przykładowa odpowiedź: Prorok to osoba, która przekazuje ludziom słowo Boga."
        ],
        ua: [
          [em("Пророк"), " — релігійний провідник, який — за традицією — передає людям слово Бога."],
          "Пророки підтримували віру, також у час вавилонської неволі. Передвіщали прихід Месії — очікуваного визволителя.",
          "Зразкова відповідь: Пророк — особа, яка передає людям слово Бога."
        ],
        ru: [
          [em("Prorok"), " — религиозный наставник, который — по традиции — передаёт людям слово Бога."],
          "Пророки поддерживали веру, в том числе во время вавилонского плена. Они предсказывали приход Mesjasza — ожидаемого избавителя.",
          "Ответ на sprawdzian: Prorok to osoba, która przekazuje ludziom słowo Boga."
        ]
      }
    },
    {
      type: "visual",
      module: "tora",
      heading: L("Zeszyt, strona 13, zadanie 4", "Зошит, сторінка 13, завдання 4", "Тетрадь, страница 13, задание 4"),
      text: {
        pl: [
          "W zeszycie uzupełniasz tekst wyrazami: prorocy, monoteizm, Abraham, Mesjasz, Jahwe. Jeden wyraz jest zbędny.",
          "Najpierw przypomnij znaczenia: Jahwe = imię Boga; monoteizm = wiara w jednego Boga; prorocy = nauczyciele wiary; Mesjasz = oczekiwany wybawiciel; Abraham = patriarcha na początku dziejów (tu nie pasuje do luk)."
        ],
        ua: [
          "У зошиті доповнюєш текст словами: prorocy, monoteizm, Abraham, Mesjasz, Jahwe. Одне слово зайве.",
          "Спочатку пригадай значення: Jahwe = ім’я Бога; monoteizm = віра в одного Бога; prorocy = вчителі віри; Mesjasz = очікуваний визволитель; Abraham = патріарх на початку (тут не пасує до пропусків)."
        ],
        ru: [
          "В тетради ты заполняешь текст словами: prorocy, monoteizm, Abraham, Mesjasz, Jahwe. Одно слово лишнее.",
          "Сначала вспомни значения: Jahwe = имя Бога; monoteizm = вера в одного Бога; prorocy = наставники веры; Mesjasz = ожидаемый избавитель; Abraham = патриарх в начале (сюда в пропуски не подходит)."
        ]
      },
      zeszyt: {
        id: "h04-z13-4",
        lead: L(
          ["Strona 13, zadanie 4. Uzupełnij tekst. Jeden wyraz zbędny."],
          ["Сторінка 13, завдання 4. Доповни текст. Одне слово зайве."],
          ["Страница 13, задание 4. Заполни текст. Одно слово лишнее. Сначала сам."]
        ),
        answers: [
          {
            label: L("Luki w tekście", "Пропуски в тексті", "Пропуски в тексте"),
            text: L(
              [
                "Jahwe · monoteizm · prorocy · Mesjasza",
                "Zbędne: Abraham"
              ],
              [
                "Jahwe · monoteizm · prorocy · Mesjasza",
                "Зайве: Abraham"
              ],
              [
                "Jahwe · monoteizm · prorocy · Mesjasza",
                "Лишнее: Abraham"
              ]
            ),
            why: L(
              [
                "Żydzi wierzą w jednego Boga, którego nazywają Jahwe. Ich religia to monoteizm. W niewoli babilońskiej prorocy podtrzymywali wiarę i przepowiadali Mesjasza. Abraham nie pasuje do żadnej luki w tym tekście. Forma „Mesjasza” jest odmieniona."
              ],
              [
                "Євреї вірять в одного Бога, якого називають Jahwe. Їхня релігія — монотеїзм. У вавилонській неволі пророки підтримували віру і передвіщали Месію. Abraham не пасує до жодного пропуску. Форма «Mesjasza» відмінена."
              ],
              [
                "Евреи веруют в одного Бога, которого называют Jahwe. Их религия — monoteizm. Во время вавилонского плена prorocy поддерживали веру и предсказывали Mesjasza. Abraham не подходит ни к одному пропуску. Форма «Mesjasza» — с польским окончанием."
              ]
            )
          }
        ]
      }
    },
    {
      type: "challenge",
      module: "tora",
      track: "both",
      heading: L("Przymierze a kodeks", "Заповіт і кодекс", "Союз и кодекс"),
      task: {
        id: "h04-przymierze",
        type: "single-choice",
        level: "C",
        coach: true,
        question: L(
          "Czym przymierze Izraelitów różni się od Kodeksu Hammurabiego?",
          "Чим заповіт ізраїльтян відрізняється від Кодексу Хаммурапі?",
          "Чем союз израильтян отличается от Кодекса Хаммурапи?"
        ),
        options: [
          { id: "a", label: L("przymierze to umowa z Bogiem i zasady wiary; kodeks to surowe prawo króla Babilonu", "заповіт — угода з Богом і правила віри; кодекс — суворе право царя Вавилона", "союз — договор с Богом и правила веры; кодекс — суровый закон царя Вавилона") },
          { id: "b", label: L("to jedno i to samo, tylko inne imię faraona", "це одне й те саме, лише інше ім’я фараона", "это одно и то же, только другое имя фараона") },
          { id: "c", label: L("Hammurabi spisał Dziesięć Przykazań na Synaju", "Хаммурапі записав Десять заповідей на Синаї", "Хаммурапи записал Десять заповедей на Синае") }
        ],
        answer: "a",
        hint: L(
          "Inna kraina, inna władza, inny rodzaj tekstu.",
          "Інший край, інша влада, інший тип тексту.",
          "Другая страна, другая власть, другой тип текста."
        ),
        explanation: L(
          "Nie mieszaj Babilonu z Synajem.",
          "Не змішуй Вавилон із Синаєм.",
          "Не путай Вавилон с Синаем."
        )
      }
    },

    /* ========== 7. SYMBOLE ========== */
    {
      type: "goal",
      module: "symbole",
      heading: L("Czego się nauczysz w tym bloku?", "Чого навчишся в цьому блоці?", "Чему научишься в этом блоке?"),
      items: [
        L("nazwać Gwiazdę Dawida, Torę i menorę", "назвати зірку Давида, Тору і менору", "назвать звезду Давида, Тору и менору"),
        L("wskazać symbol na fladze Izraela", "вказати символ на прапорі Ізраїлю", "указать символ на флаге Израиля")
      ]
    },
    {
      type: "visual",
      module: "symbole",
      heading: L("Trzy symbole judaizmu", "Три символи юдаїзму", "Три символа иудаизма"),
      visual: {
        kind: "image-placeholder",
        url: "./img/symbole-zeszyt.jpg",
        alt: L(
          "Gwiazda Dawida, Tora, menora",
          "Зірка Давида, Тора, менора",
          "Звезда Давида, Тора, менора"
        ),
        title: L("Symbole narodu żydowskiego", "Символи єврейського народу", "Символы еврейского народа")
      },
      text: {
        pl: [
          ["Od lewej: ", em("Gwiazda Dawida"), " (sześcioramienna), ", em("Tora"), " (święty zwój), ", em("menora"), " (siedmioramienny świecznik)."],
          "Na fladze współczesnego Izraela jest Gwiazda Dawida — nie menora.",
          "Przykładowa odpowiedź: Menora to tradycyjny siedmioramienny świecznik, symbol judaizmu."
        ],
        ua: [
          ["Зліва: ", em("зірка Давида"), " (шестикутна), ", em("Тора"), " (святий сувій), ", em("менора"), " (семисвічник)."],
          "На прапорі сучасного Ізраїлю — зірка Давида, не менора.",
          "Зразкова відповідь: Менора — традиційний семисвічник, символ юдаїзму."
        ],
        ru: [
          ["Слева направо: ", em("Gwiazda Dawida"), " (шестиконечная), ", em("Tora"), " (святой свиток), ", em("menora"), " (семисвечник)."],
          "На флаге современного Израиля — Gwiazda Dawida, не менора.",
          "Ответ на sprawdzian: Menora to tradycyjny siedmioramienny świecznik, symbol judaizmu."
        ]
      }
    },
    {
      type: "visual",
      module: "symbole",
      track: "both",
      heading: L("Świątynia i menora", "Храм і менора", "Храм и менора"),
      visual: gh("035", {
        kind: "image-placeholder",
        alt: L(
          "Przekrój świątyni: sanktuarium, menora, ołtarz",
          "Перетин храму: святилище, менора, жертовник",
          "Разрез храма: святилище, менора, жертвенник"
        ),
        title: L("Sanktuarium, menora, ołtarz", "Святилище, менора, жертовник", "Святилище, менора, жертвенник")
      }),
      text: {
        pl: [
          "Świątynia w Jerozolimie była centrum kultu. Wewnątrz: sanktuarium, menora, ołtarz na dziedzińcu.",
          "Dziś z dawnej świątyni zachował się m.in. Mur Zachodni (Ściana Płaczu) — miejsce modlitwy."
        ],
        ua: [
          "Храм у Єрусалимі був осереддям культу. Всередині: святилище, менора, жертовник на подвір’ї.",
          "Сьогодні від давнього храму зберігся зокрема Західний мур (Стіна Плачу) — місце молитви."
        ],
        ru: [
          "Храм в Иерусалиме был центром культа. Внутри: святилище, менора, жертвенник во дворе.",
          "Сегодня от древнего храма сохранилась в том числе Западная стена (Стена Плача) — место молитвы."
        ]
      },
      task: {
        id: "h04-q-menora",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Czym jest menora?",
          "Що таке менора?",
          "Что такое менора?"
        ),
        options: [
          { id: "a", label: L("sześcioramienna gwiazda na fladze Izraela", "шестикутна зірка на прапорі Ізраїлю", "шестиконечная звезда на флаге Израиля") },
          { id: "b", label: L("tradycyjny siedmioramienny świecznik, symbol judaizmu", "традиційний семисвічник, символ юдаїзму", "традиционный семисвечник, символ иудаизма") },
          { id: "c", label: L("pierwsze pięć ksiąg Biblii hebrajskiej", "перші п’ять книг єврейської Біблії", "первые пять книг еврейской Библии") }
        ],
        answer: "b",
        hint: L(
          "Policz ramiona: menora ma siedem. Gwiazda Dawida ma sześć.",
          "Порахуй промені: менора має сім. Зірка Давида має шість.",
          "Посчитай ветви: у меноры семь. У звезды Давида шесть."
        ),
        explanation: L(
          "Menora = siedmioramienny świecznik. Gwiazda Dawida = flaga. Tora = księga.",
          "Менора = семисвічник. Зірка Давида = прапор. Тора = книга.",
          "Menora = семисвечник. Gwiazda Dawida = флаг. Tora = книга."
        )
      }
    },
    {
      type: "visual",
      module: "symbole",
      heading: L("Współczesny Izrael", "Сучасний Ізраїль", "Современный Израиль"),
      visual: gh("036", {
        kind: "image-placeholder",
        alt: L(
          "Flaga, menora, mapa Izraela, panorama Jerozolimy",
          "Прапор, менора, карта Ізраїлю, панорама Єрусалима",
          "Флаг, менора, карта Израиля, панорама Иерусалима"
        ),
        title: L("1948 · symbole · miasta", "1948 · символи · міста", "1948 · символы · города")
      }),
      text: {
        pl: [
          "W 1948 roku powstało niepodległe państwo Izrael. Symbole: gwiazda Dawida i menora. Ważne miasta: Jerozolima, Tel Awiw-Jafa, Hajfa.",
          "Na fladze jest Gwiazda Dawida. Menora jest m.in. w herbie."
        ],
        ua: [
          "У 1948 році виникла незалежна держава Ізраїль. Символи: зірка Давида і менора. Важливі міста: Єрусалим, Тель-Авів-Яфо, Хайфа.",
          "На прапорі — зірка Давида. Менора є зокрема в гербі."
        ],
        ru: [
          "В 1948 году возникло независимое государство Израиль. Символы: звезда Давида и менора. Важные города: Иерусалим, Тель-Авив-Яффа, Хайфа.",
          "На флаге — Gwiazda Dawida. Менора есть в том числе в гербе."
        ]
      }
    },
    {
      type: "visual",
      module: "symbole",
      heading: L("Zeszyt, strona 13, zadanie 5", "Зошит, сторінка 13, завдання 5", "Тетрадь, страница 13, задание 5"),
      visual: {
        kind: "image-placeholder",
        url: "./img/symbole-zeszyt.jpg",
        alt: L("Trzy symbole z zeszytu", "Три символи із зошита", "Три символа из тетради"),
        title: L("Nazwij i otoczkuj", "Назви і обведи", "Назови и обведи")
      },
      text: {
        pl: [
          "Podpisz trzy symbole. Potem otocz ramką ten, który jest na fladze Izraela.",
          "Najpierw sam w zeszycie."
        ],
        ua: [
          "Підпиши три символи. Потім обведи рамкою той, що на прапорі Ізраїлю.",
          "Спочатку сам у зошиті."
        ],
        ru: [
          "Подпиши три символа. Потом обведи рамкой тот, что на флаге Израиля.",
          "Сначала сам в тетради."
        ]
      },
      zeszyt: {
        id: "h04-z13-5",
        lead: L(
          ["Strona 13, zadanie 5a–b. Nazwij symbole i otocz ten z flagi Izraela."],
          ["Сторінка 13, завдання 5a–b. Назви символи і обведи той з прапора Ізраїлю."],
          ["Страница 13, задание 5a–b. Назови символы и обведи тот, что на флаге Израиля."]
        ),
        answers: [
          {
            label: L("5a. Od lewej", "5a. Зліва", "5a. Слева направо"),
            text: L(
              ["Gwiazda Dawida · Tora · menora"],
              ["Gwiazda Dawida · Tora · menora"],
              ["Gwiazda Dawida · Tora · menora"]
            ),
            why: L(
              ["Sześcioramienna gwiazda, święty zwój, siedmioramienny świecznik."],
              ["Шестикутна зірка, святий сувій, семисвічник."],
              ["Шестиконечная звезда, святой свиток, семисвечник."]
            )
          },
          {
            label: L("5b. Flaga Izraela", "5b. Прапор Ізраїлю", "5b. Флаг Израиля"),
            text: L(["Gwiazda Dawida"], ["Gwiazda Dawida"], ["Gwiazda Dawida"]),
            why: L(
              ["Na fladze Izraela jest Gwiazda Dawida. Menora jest w herbie, nie na fladze."],
              ["На прапорі Ізраїлю — зірка Давида. Менора в гербі, не на прапорі."],
              ["На флаге Израиля — Gwiazda Dawida. Менора в гербе, не на флаге."]
            )
          }
        ]
      }
    },

    /* ========== 8. POWTÓRKA ========== */
    {
      type: "goal",
      module: "powtorka",
      track: "learn",
      heading: L("Czego sprawdzisz w powtórce?", "Що перевіриш у повторенні?", "Что проверишь в повторении?"),
      items: [
        L("terminy: monoteizm, Tora, Dekalog, menora, prorok", "терміни: монотеїзм, Тора, Декалог, менора, пророк", "термины: монотеизм, Тора, Декалог, менора, пророк"),
        L("mapę, chronologię i symbole", "карту, хронологію і символи", "карту, хронологию и символы")
      ]
    },
    {
      type: "vocabulary",
      module: "powtorka",
      track: "both",
      heading: L("Słownik historyczny", "Історичний словник", "Исторический словарь"),
      rows: [
        {
          pl: "monoteizm — wiara w jednego Boga",
          ua: "монотеїзм — віра в одного Бога",
          ru: "монотеизм — вера в одного Бога"
        },
        {
          pl: "Tora — Pięcioksiąg, święta księga judaizmu",
          ua: "Тора — П’ятикнижжя, священна книга юдаїзму",
          ru: "Тора — Пятикнижие, священная книга иудаизма"
        },
        {
          pl: "Dekalog — Dziesięć Przykazań z góry Synaj",
          ua: "Декалог — Десять заповідей з гори Синай",
          ru: "Декалог — Десять заповедей с горы Синай"
        },
        {
          pl: "menora — siedmioramienny świecznik, symbol judaizmu",
          ua: "менора — семисвічник, символ юдаїзму",
          ru: "менора — семисвечник, символ иудаизма"
        },
        {
          pl: "prorok — przekazuje ludziom słowo Boga",
          ua: "пророк — передає людям слово Бога",
          ru: "пророк — передаёт людям слово Бога"
        },
        {
          pl: "Kanaan / Palestyna — kraina Izraelitów przy Morzu Śródziemnym",
          ua: "Ханаан / Палестина — край ізраїльтян при Середземному морі",
          ru: "Ханаан / Палестина — земля израильтян у Средиземного моря"
        },
        {
          pl: "niewola babilońska — uprowadzenie z Jerozolimy w VI w. p.n.e.",
          ua: "вавилонська неволя — виведення з Єрусалима в VI ст. до н.е.",
          ru: "вавилонский плен — угон из Иерусалима в VI в. до н. э."
        }
      ]
    },
    {
      type: "mistake",
      module: "powtorka",
      track: "learn",
      heading: L("Znajdź błąd w opowieści", "Знайди помилку в оповіді", "Найди ошибку в рассказе"),
      claim: L(
        "„Izraelici czcili Ra i Ozyrysa, a Mojżesz spisał Kodeks Hammurabiego w Babilonie.”",
        "«Ізраїльтяни шанували Ра і Осіріса, а Мойсей записав Кодекс Хаммурапі у Вавилоні.»",
        "«Израильтяне чтили Ра и Осириса, а Моисей записал Кодекс Хаммурапи в Вавилоне.»"
      ),
      text: {
        pl: [
          "Ra i Ozyrys to Egipt. Kodeks Hammurabiego to Babilonia.",
          "Izrael: Jahwe, Mojżesz, Dekalog, Tora."
        ],
        ua: [
          "Ра і Осіріс — Єгипет. Кодекс Хаммурапі — Вавилонія.",
          "Ізраїль: Ягве, Мойсей, Декалог, Тора."
        ],
        ru: [
          "Ра и Осирис — Египет. Кодекс Хаммурапи — Вавилония.",
          "Израиль: Jahwe, Mojżesz, Dekalog, Tora."
        ]
      }
    },
    {
      type: "check",
      module: "powtorka",
      track: "both",
      heading: L("Czy już umiem? Stolica", "Чи вже вмію? Столиця", "Уже умею? Столица"),
      task: {
        id: "h04-check-stolica",
        type: "input-text",
        level: "B",
        coach: true,
        question: L(
          "Wpisz nazwę stolicy królestwa Dawida.",
          "Введи назву столиці царства Давида.",
          "Впиши название столицы царства Давида."
        ),
        answer: ["jerozolima", "єрусалим", "jerusalem", "иерусалим"],
        hint: L(
          "Tam Salomon zbudował świątynię.",
          "Там Соломон збудував храм.",
          "Там Соломон построил храм."
        ),
        explanation: L(
          "Jerozolima.",
          "Єрусалим.",
          "Jerozolima."
        )
      }
    },
    {
      type: "check",
      module: "powtorka",
      track: "both",
      heading: L("Czy już umiem? Flaga", "Чи вже вмію? Прапор", "Уже умею? Флаг"),
      task: {
        id: "h04-q-flaga",
        type: "single-choice",
        level: "A",
        coach: true,
        question: L(
          "Który symbol jest na fladze państwa Izrael?",
          "Який символ на прапорі держави Ізраїль?",
          "Какой символ на флаге государства Израиль?"
        ),
        options: [
          { id: "a", label: L("menora", "менора", "менора") },
          { id: "b", label: L("Gwiazda Dawida", "зірка Давида", "звезда Давида") },
          { id: "c", label: L("piramida", "піраміда", "пирамида") }
        ],
        answer: "b",
        hint: L(
          "Sześcioramienna gwiazda. Menora jest w herbie.",
          "Шестикутна зірка. Менора в гербі.",
          "Шестиконечная звезда. Менора в гербе."
        ),
        explanation: L(
          "Na fladze Izraela jest Gwiazda Dawida.",
          "На прапорі Ізраїлю — зірка Давида.",
          "На флаге Израиля — Gwiazda Dawida."
        )
      }
    },
    {
      type: "visual",
      module: "powtorka",
      track: "review",
      heading: L("Szybka oś czasu", "Швидка вісь часу", "Быстрая ось времени"),
      visual: {
        kind: "flow",
        steps: [
          { title: L("Abraham → Palestyna", "Авраам → Палестина", "Авраам → Палестина") },
          { title: L("niewola egipska", "єгипетська неволя", "египетский плен") },
          { title: L("Mojżesz → wyjście", "Мойсей → вихід", "Моисей → исход") },
          { title: L("Dawid → Jerozolima", "Давид → Єрусалим", "Давид → Иерусалим") },
          { title: L("Salomon → Świątynia", "Соломон → Храм", "Соломон → Храм") },
          { title: L("Rzymianie → Palestyna", "Римляни → Палестина", "Римляне → Палестина") }
        ]
      }
    },
    {
      type: "review",
      module: "powtorka",
      track: "learn",
      heading: L("Dodatkowe ćwiczenie Nowa Era", "Додаткова вправа Nowa Era", "Дополнительное упражнение Nowa Era"),
      text: {
        pl: [
          "W zeszycie jest kod QR: H5VEY8 (docwiczenia.pl).",
          "Strona otwiera się jako „Dodatkowe ćwiczenie” (ok. 504 KB do pobrania). Treści pliku nie otwieraliśmy tutaj — jeśli nauczycielka każe, pobierzcie sami i porównajcie z lekcją.",
          "Link: https://docwiczenia.pl/kod/H5VEY8"
        ],
        ua: [
          "У зошиті є код QR: H5VEY8 (docwiczenia.pl).",
          "Сторінка відкривається як «Dodatkowe ćwiczenie» (бл. 504 KB). Вміст файлу тут не відкривали — якщо вчителька скаже, завантажте самі.",
          "Посилання: https://docwiczenia.pl/kod/H5VEY8"
        ],
        ru: [
          "В тетради есть QR-код: H5VEY8 (docwiczenia.pl).",
          "Страница открывается как «Dodatkowe ćwiczenie» (около 504 KB). Содержимое файла мы здесь не открывали — если учительница попросит, скачайте сами и сравните с уроком.",
          "Ссылка: https://docwiczenia.pl/kod/H5VEY8"
        ]
      }
    },
    {
      type: "summary",
      module: "powtorka",
      track: "both",
      heading: L("Zapamiętaj", "Запам’ятай", "Запомни"),
      items: [
        mark(
          "Izraelici, zwani także Żydami, zamieszkiwali Palestynę. Przybyli tu z Mezopotamii pod wodzą Abrahama.",
          ["Żydami", "Palestynę", "Mezopotamii", "Abrahama"],
          "Ізраїльтяни, яких називають також євреями, жили в Палестині. Прийшли сюди з Месопотамії під проводом Авраама.",
          ["євреями", "Палестині", "Месопотамії", "Авраама"],
          "Израильтяне, которых называют также евреями, жили в Палестине. Они пришли сюда из Месопотамии под руководством Авраама.",
          ["евреями", "Палестине", "Месопотамии", "Авраама"]
        ),
        mark(
          "Z czasem udali się do Egiptu, gdzie popadli w niewolę. Około XIII wieku p.n.e. pod wodzą Mojżesza powrócili do Palestyny.",
          ["Egiptu", "XIII wieku p.n.e.", "Mojżesza"],
          "З часом пішли до Єгипту, де потрапили в неволю. Близько XIII століття до н.е. під проводом Мойсея повернулися до Палестини.",
          ["Єгипту", "XIII століття до н.е.", "Мойсея"],
          "Со временем они оказались в Египте и попали в плен. Около XIII века до н. э. под руководством Моисея вернулись в Палестину.",
          ["Египте", "XIII века", "Моисея"]
        ),
        mark(
          "Izraelici oddawali cześć jedynemu Bogu, którego nazwali Jahwe. Ich monoteistyczna religia nazywana jest judaizmem. Święta księga: Tora. Dekalog to dziesięć przykazań.",
          ["Jahwe", "monoteistyczna", "judaizmem", "Tora", "Dekalog"],
          "Ізраїльтяни шанували єдиного Бога, якого назвали Ягве. Їхня монотеїстична релігія називається юдаїзмом. Священна книга: Тора. Декалог — десять заповідей.",
          ["Ягве", "монотеїстична", "юдаїзмом", "Тора", "Декалог"],
          "Израильтяне чтили единого Бога, которого назвали Jahwe. Их монотеистическая религия называется иудаизмом. Священная книга: Tora. Dekalog — десять заповедей.",
          ["Jahwe", "монотеистическая", "иудаизмом", "Tora", "Dekalog"]
        ),
        mark(
          "Okres największej potęgi — według Biblii — to rządy króla Dawida i jego syna Salomona (ok. X wieku p.n.e.). Dawid uczynił stolicą Jerozolimę, Salomon wzniósł Świątynię.",
          ["Dawida", "Salomona", "X wieku p.n.e.", "Jerozolimę", "Świątynię"],
          "Доба найбільшої потуги — за Біблією — правління царя Давида і його сина Соломона (бл. X століття до н.е.). Давид зробив столицею Єрусалим, Соломон звів Храм.",
          ["Давида", "Соломона", "X століття до н.е.", "Єрусалим", "Храм"],
          "Период наибольшей силы — по Библии — правление царя Давида и его сына Соломона (ок. X века до н. э.). Давид сделал столицей Иерусалим, Соломон построил Храм.",
          ["Давида", "Соломона", "X века", "Иерусалим", "Храм"]
        ),
        mark(
          "Symbole: Gwiazda Dawida (na fladze Izraela), Tora, menora. Prorok przekazuje słowo Boga; oczekiwano Mesjasza.",
          ["Gwiazda Dawida", "Tora", "menora", "Prorok", "Mesjasza"],
          "Символи: зірка Давида (на прапорі Ізраїлю), Тора, менора. Пророк передає слово Бога; очікували Месію.",
          ["зірка Давида", "Тора", "менора", "Пророк", "Месію"],
          "Символы: Gwiazda Dawida (на флаге Израиля), Tora, menora. Пророк передаёт слово Бога; ожидали Мессию.",
          ["Gwiazda Dawida", "Tora", "menora", "Пророк", "Мессию"]
        ),
        mark(
          "Na początku VI w. p.n.e. Babilończycy zdobyli Jerozolimę — niewola babilońska. Później Palestynę podbili Rzymianie.",
          ["VI w. p.n.e.", "niewola babilońska", "Rzymianie"],
          "На початку VI ст. до н.е. вавилоняни здобули Єрусалим — вавилонська неволя. Пізніше Палестину підкорили римляни.",
          ["VI ст. до н.е.", "вавилонська неволя", "римляни"],
          "В начале VI в. до н. э. вавилоняне взяли Иерусалим — вавилонский плен. Позже Палестину подчинили римляне.",
          ["VI в.", "вавилонский плен", "римляне"]
        )
      ]
    },
    {
      type: "review",
      module: "powtorka",
      track: "both",
      heading: L("Wrócimy do tego", "Ми до цього повернемось", "Мы к этому вернёмся"),
      text: {
        pl: [
          "Następny temat: Indie i Chiny — znowu wielkie rzeki, ale inne religie i inna władza.",
          "Alfabet Fenicjan (sąsiedzi Izraela) wróci przy piśmie.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Індія і Китай — знову великі річки, але інші релігії і інша влада.",
          "Абетка фінікійців (сусіди Ізраїлю) повернеться при письмі.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ],
        ru: [
          "Следующая тема: Индия и Китай — снова большие реки, но другие религии и другая власть.",
          "Алфавит финикийцев (соседи Израиля) вернётся при теме письма.",
          "Если хочешь повторить урок голосом учителя — посмотри фильм «Krótkie Lekcje»."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "KTCY17id5oA",
        title: L(
          "Krótkie Lekcje: W starożytnym Izraelu",
          "Короткі уроки: У стародавньому Ізраїлі",
          "Краткие уроки: В древнем Израиле"
        )
      }
    }
  ]
};
