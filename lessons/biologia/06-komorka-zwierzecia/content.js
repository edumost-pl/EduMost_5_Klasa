function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L06_Komorka_zwierzecia/images/";

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


function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}


window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wskażesz błonę, cytozol i jądro na schemacie komórki zwierzęcej.", ua: "Вкажеш мембрану, цитозоль і ядро на схемі тваринної клітини." },
        { pl: "Powiesz, do czego służy błona komórkowa.", ua: "Скажеш, для чого служить клітинна мембрана." },
        { pl: "Powiesz, do czego służy jądro komórkowe.", ua: "Скажеш, для чого служить клітинне ядро." },
        { pl: "Wyjaśnisz funkcje mitochondrium, rybosomów i wakuoli.", ua: "Поясниш функції мітохондрії, рибосом і вакуолей." },
        { pl: "Powiesz, co widać w komórce nabłonka jamy ustnej pod mikroskopem optycznym.", ua: "Скажеш, що видно в клітині епітелію ротової порожнини під оптичним мікроскопом." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "błona komórkowa", ua: "клітинна мембрана" },
        { pl: "cytozol", ua: "цитозоль" },
        { pl: "cytoplazma", ua: "цитоплазма" },
        { pl: "jądro komórkowe", ua: "клітинне ядро" },
        { pl: "mitochondrium", ua: "мітохондрія" },
        { pl: "rybosomy", ua: "рибосоми" },
        { pl: "wakuola", ua: "вакуоля" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l06-zacznijmy.png", {
        alt: { pl: "Komórki nabłonka jamy ustnej pod mikroskopem", ua: "Клітини епітелію ротової порожнини під мікроскопом" },
        title: { pl: "Tak wyglądają komórki z wewnętrznej strony policzka.", ua: "Так виглядають клітини з внутрішнього боку щоки." },
        prompt: { pl: "Fotorealistyczna mikrofotografia 16:9. Komórki nabłonka jamy ustnej pod mikroskopem optycznym, jasny fiolet, ciemniejsze jądra. Polskie etykiety ze strzałkami: błona komórkowa, cytoplazma, jądro komórkowe. Bez angielskiego, bez logotypów, bez twarzy." }
      }),
      text: {
        pl: [
          "Na poprzedniej lekcji komórka była „jednostką życia”. Dziś zaglądamy do środka komórki zwierzęcej.",
          "Pod mikroskopem optycznym w komórce nabłonka jamy ustnej widać już trzy rzeczy: cienką granicę, wypełnienie i ciemniejsze jądro. Resztę elementów pokażemy na schemacie."
        ],
        ua: [
          "На попередньому уроці клітина була «одиницею життя». Сьогодні заглядаємо всередину тваринної клітини.",
          "Під оптичним мікроскопом у клітині епітелію ротової порожнини вже видно три речі: тонку межу, наповнення і темніше ядро. Решту елементів покажемо на схемі."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Co widać pod mikroskopem optycznym?", ua: "Що видно під оптичним мікроскопом?" },
      visual: vizGh("l06-zacznijmy.png", {
        alt: { pl: "Błona, cytoplazma i jądro w komórce nabłonka", ua: "Мембрана, цитоплазма і ядро в клітині епітелію" },
        title: { pl: "Błona, cytoplazma, jądro.", ua: "Мембрана, цитоплазма, ядро." },
        prompt: { pl: "Ta sama mikrofotografia nabłonka jamy ustnej z polskimi etykietami: błona komórkowa, cytoplazma, jądro komórkowe." }
      }),
      text: {
        pl: [
          "Szkolnym mikroskopem optycznym w komórce zwierzęcej najłatwiej zobaczyć:",
          ["", em("błonę komórkową"), " — cienką granicę komórki;"],
          ["", em("cytoplazmę"), " — wnętrze komórki;"],
          ["", em("jądro komórkowe"), " — zwykle ciemniejszą, okrągławą strukturę."],
          "Mitochondria i rybosomy na takim zdjęciu zwykle nie są czytelne. Ich kształt i funkcje poznasz na schemacie."
        ],
        ua: [
          "Шкільним оптичним мікроскопом у тваринній клітині найлегше побачити:",
          ["", em("клітинну мембрану"), " — тонку межу клітини;"],
          ["", em("цитоплазму"), " — нутро клітини;"],
          ["", em("клітинне ядро"), " — зазвичай темнішу, округлу структуру."],
          "Мітохондрії і рибосоми на такому знімку зазвичай нечитабельні. Їхню форму і функції пізнаєш на схемі."
        ]
      },
      task: {
        id: "l06-e1",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy elementy, które widać w komórce nabłonka pod mikroskopem optycznym.", ua: "Познач три елементи, які видно в клітині епітелію під оптичним мікроскопом." },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "cytoplazma", ua: "цитоплазма" } },
          { id: "c", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "d", label: { pl: "ściana komórkowa z celulozy", ua: "клітинна стінка з целюлози" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Ściana z celulozy jest w komórce roślinnej, nie w nabłonku jamy ustnej.", ua: "Стінка з целюлози є в рослинній клітині, не в епітелії рота." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Co widać, a co na schemacie", ua: "Що видно, а що на схемі" },
      visual: tree({
        layout: "nested",
        root: { pl: "komórka zwierzęca", ua: "тваринна клітина" },
        groups: [
          {
            title: { pl: "mikroskop optyczny", ua: "оптичний мікроскоп" },
            items: [
              { pl: "błona komórkowa", ua: "клітинна мембрана" },
              { pl: "cytoplazma", ua: "цитоплазма" },
              { pl: "jądro", ua: "ядро" }
            ]
          },
          {
            title: { pl: "schemat", ua: "схема" },
            items: [
              { pl: "mitochondrium", ua: "мітохондрія" },
              { pl: "rybosomy", ua: "рибосоми" },
              { pl: "wakuola", ua: "вакуоля" }
            ]
          }
        ]
      }),
      items: [
        { pl: "pod mikroskopem optycznym: błona, cytoplazma, jądro", ua: "під оптичним мікроскопом: мембрана, цитоплазма, ядро" },
        { pl: "na schemacie dopisujemy: mitochondrium, rybosomy, wakuola", ua: "на схемі дописуємо: мітохондрія, рибосоми, вакуоля" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Schemat komórki zwierzęcej", ua: "Схема тваринної клітини" },
      visual: vizGh("l06-schemat.png", {
        alt: { pl: "Schemat budowy komórki zwierzęcej", ua: "Схема будови тваринної клітини" },
        title: { pl: "Sześć elementów do zapamiętania.", ua: "Шість елементів, які треба запам’ятати." },
        prompt: { pl: "Edukacyjny schemat 16:9, przekrój okrągłej komórki zwierzęcej, numerowane polskie etykiety: 1 błona komórkowa, 2 cytozol, 3 jądro komórkowe, 4 wakuola (wodniczka), 5 mitochondrium, 6 rybosomy. Jasne tło, płaski styl podręcznikowy, bez angielskiego, bez logotypów, bez ściany komórkowej i chloroplastów." }
      }),
      text: {
        pl: [
          "Na schemacie komórki zwierzęcej zapamiętaj sześć elementów:",
          "1. błona komórkowa — granica komórki;",
          "2. cytozol — galaretowate wypełnienie;",
          "3. jądro komórkowe;",
          "4. wakuola (inaczej wodniczka) — mały pęcherzyk;",
          "5. mitochondrium;",
          "6. rybosomy — drobne ziarenka.",
          ["", em("Cytoplazma"), " to cytozol razem z tymi strukturami wewnątrz komórki (oprócz jądra)."]
        ],
        ua: [
          "На схемі тваринної клітини запам’ятай шість елементів:",
          "1. клітинна мембрана — межа клітини;",
          "2. цитозоль — желеподібне наповнення;",
          "3. клітинне ядро;",
          "4. вакуоля (водничка) — маленький пухирець;",
          "5. мітохондрія;",
          "6. рибосоми — дрібні зернятка.",
          ["", em("Цитоплазма"), " — це цитозоль разом із цими структурами всередині клітини (крім ядра)."]
        ]
      },
      task: {
        id: "l06-e2",
        type: "single-choice",
        question: { pl: "Czym cytozol różni się od cytoplazmy?", ua: "Чим цитозоль відрізняється від цитоплазми?" },
        options: [
          { id: "a", label: { pl: "cytozol to galaretowate wypełnienie; cytoplazma to cytozol plus struktury wewnątrz komórki (bez jądra)", ua: "цитозоль — желеподібне наповнення; цитоплазма — цитозоль плюс структури всередині (без ядра)" } },
          { id: "b", label: { pl: "cytozol to to samo co jądro", ua: "цитозоль — те саме, що ядро" } },
          { id: "c", label: { pl: "cytoplazma jest tylko u roślin", ua: "цитоплазма є лише в рослин" } }
        ],
        answer: "a",
        explanation: { pl: "Cytozol wypełnia komórkę. Cytoplazma = cytozol + mitochondria, rybosomy, wakuole…", ua: "Цитозоль наповнює клітину. Цитоплазма = цитозоль + мітохондрії, рибосоми, вакуолі…" }
      }
    },
    {
      type: "concept",
      heading: { pl: "Błona komórkowa i cytozol", ua: "Клітинна мембрана і цитозоль" },
      visual: vizGh("l06-blona.png", {
        alt: { pl: "Błona oddziela wnętrze komórki od otoczenia", ua: "Мембрана відокремлює нутро клітини від оточення" },
        title: { pl: "Błona strzeże granicy. Cytozol wypełnia wnętrze.", ua: "Мембрана стереже межу. Цитозоль наповнює нутро." },
        prompt: { pl: "Edukacyjna infografika 16:9. Zbliżenie na obrzeże komórki zwierzęcej: cienka błona komórkowa ze strzałkami „do środka / na zewnątrz”. Wewnątrz jasny cytozol. Polskie etykiety. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Błona komórkowa"), " oddziela wnętrze komórki od otoczenia. Przepuszcza wybrane substancje do środka i na zewnątrz."],
          ["", em("Cytozol"), " to galaretowata substancja. Składa się głównie z wody, soli mineralnych i innych związków — przede wszystkim białek. Wypełnia komórkę."]
        ],
        ua: [
          ["", em("Клітинна мембрана"), " відокремлює нутро клітини від оточення. Пропускає вибрані речовини всередину і назовні."],
          ["", em("Цитозоль"), " — желеподібна речовина. Складається здебільшого з води, мінеральних солей та інших сполук — передусім білків. Наповнює клітину."]
        ]
      },
      task: {
        id: "l06-e3",
        type: "single-choice",
        question: { pl: "Do czego służy błona komórkowa?", ua: "Для чого служить клітинна мембрана?" },
        options: [
          { id: "a", label: { pl: "oddziela wnętrze od otoczenia i transportuje substancje do komórki i z komórki", ua: "відокремлює нутро від оточення і транспортує речовини до клітини і з клітини" } },
          { id: "b", label: { pl: "zapisuje cechy organizmu jak DNA w jądrze", ua: "записує риси організму як ДНК у ядрі" } },
          { id: "c", label: { pl: "daje komórce zwierzęcej twardą ścianę z celulozy", ua: "дає тваринній клітині тверду стінку з целюлози" } }
        ],
        answer: "a",
        explanation: { pl: "Błona to granica i transport. DNA jest w jądrze. Ściana z celulozy — u roślin (następna lekcja).", ua: "Мембрана — межа і транспорт. ДНК у ядрі. Стінка з целюлози — у рослин." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jądro komórkowe", ua: "Клітинне ядро" },
      visual: vizGh("l06-jadro.png", {
        alt: { pl: "Jądro komórkowe w centrum komórki", ua: "Клітинне ядро в центрі клітини" },
        title: { pl: "Jądro kieruje pracą komórki. W środku jest DNA.", ua: "Ядро керує роботою клітини. Всередині ДНК." },
        prompt: { pl: "Edukacyjny schemat 16:9. Duże fioletowe kuliste jądro komórkowe z porami, w centrum komórki zwierzęcej. Etykiety PL: jądro komórkowe; DNA — informacja o cechach; kieruje procesami w komórce. Bez helisy w zbliżeniu, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Jądro komórkowe"), " leży zwykle w środkowej części komórki i ma kształt zbliżony do kuli."],
          "Kieruje wszystkimi procesami w komórce. Zawiera DNA — zapis informacji o cechach organizmu, który poznałeś na lekcji o składnikach chemicznych.",
          "Bez jądra komórka zwierzęca nie potrafiłaby sterować swoją pracą."
        ],
        ua: [
          ["", em("Клітинне ядро"), " лежить зазвичай у середній частині клітини і має форму, близьку до кулі."],
          "Керує всіма процесами в клітині. Містить ДНК — запис інформації про риси організму, який ти пізнав на уроці про хімічні складники.",
          "Без ядра тваринна клітина не вміла б керувати своєю роботою."
        ]
      },
      task: {
        id: "l06-e4",
        type: "true-false",
        question: { pl: "Jądro komórkowe zawiera DNA i kieruje procesami w komórce.", ua: "Клітинне ядро містить ДНК і керує процесами в клітині." },
        answer: true,
        explanation: { pl: "Tak. Jądro to „centrum dowodzenia”. DNA jest w jądrze.", ua: "Так. Ядро — «центр керування». ДНК у ядрі." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Mitochondrium, rybosomy, wakuola", ua: "Мітохондрія, рибосоми, вакуоля" },
      visual: vizGh("l06-organelle.png", {
        alt: { pl: "Mitochondrium, rybosomy i mała wakuola", ua: "Мітохондрія, рибосоми і мала вакуоля" },
        title: { pl: "Energia, białka, pęcherzyki.", ua: "Енергія, білки, пухирці." },
        prompt: { pl: "Edukacyjna plansza 16:9, trzy kadry z polskimi etykietami. 1 mitochondrium — owal z wewnętrznymi fałdami, podpis: centrum energetyczne. 2 rybosomy — drobne ziarenka, produkcja białek. 3 wakuola (wodniczka) — mały pęcherzyk, wchłanianie, trawienie, usuwanie substancji. Komórka zwierzęca, bez chloroplastów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Mitochondrium"), " jest zwykle owalne. Dostarcza komórce energii — nazywamy je centrum energetycznym komórki."],
          ["", em("Rybosomy"), " wyglądają jak drobne ziarenka. Odpowiadają za wytwarzanie białek."],
          ["", em("Wakuola"), " (wodniczka) ma kształt małego pęcherzyka. Bierze udział we wchłanianiu, trawieniu i usuwaniu różnych substancji. W komórce zwierzęcej wakuole są drobne; u roślin bywa jedna duża — to na następnej lekcji."],
          "W komórce są też inne struktury, na przykład siateczka śródplazmatyczna i aparat Golgiego. Pomagają wytwarzać, przetwarzać i transportować białka oraz tłuszcze. Dziś wystarczy wiedzieć, że istnieją — nie wchodzą do Paszportu."
        ],
        ua: [
          ["", em("Мітохондрія"), " зазвичай овальна. Дає клітині енергію — називаємо її енергетичним центром клітини."],
          ["", em("Рибосоми"), " виглядають як дрібні зернятка. Відповідають за вироблення білків."],
          ["", em("Вакуоля"), " (водничка) має форму маленького пухирця. Бере участь у всмоктуванні, травленні і видаленні різних речовин. У тваринній клітині вакуолі дрібні; у рослин буває одна велика — це на наступному уроці."],
          "У клітині є також інші структури, наприклад ендоплазматична сітка і комплекс Гольджі. Допомагають виробляти, перетворювати і транспортувати білки та жири. Сьогодні досить знати, що вони є — до Паспорта не входять."
        ]
      },
      task: {
        id: "l06-e5",
        type: "single-choice",
        question: { pl: "Połącz struktury z funkcjami.", ua: "Поєднай структури з функціями." },
        options: [
          { id: "a", label: { pl: "mitochondrium — energia; rybosomy — białka; wakuola — wchłanianie, trawienie, usuwanie substancji", ua: "мітохондрія — енергія; рибосоми — білки; вакуоля — всмоктування, травлення, видалення речовин" } },
          { id: "b", label: { pl: "mitochondrium — ściana z celulozy; rybosomy — wić plemnika; wakuola — DNA", ua: "мітохондрія — стінка з целюлози; рибосоми — джгутик сперматозоїда; вакуоля — ДНК" } },
          { id: "c", label: { pl: "wszystkie trzy zapisują cechy potomstwu zamiast jądra", ua: "усі три записують риси потомству замість ядра" } }
        ],
        answer: "a",
        explanation: { pl: "Centrum energetyczne, fabryka białek, małe pęcherzyki. DNA jest w jądrze.", ua: "Енергетичний центр, фабрика білків, малі пухирці. ДНК у ядрі." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Obserwacja nabłonka jamy ustnej", ua: "Спостереження епітелію ротової порожнини" },
      visual: vizGh("l06-preparat.png", {
        alt: { pl: "Jedna komórka nabłonka jamy ustnej spod mikroskopu", ua: "Одна клітина епітелію ротової порожнини з-під мікроскопа" },
        title: { pl: "W klasie ogląda się preparat — nie robi się tego w domu.", ua: "У класі розглядають препарат — цього не роблять удома." },
        prompt: { pl: "Fotorealistyczna mikrofotografia 16:9, zielonkawy odcień. Jedna nieregularna, okrągława komórka nabłonka jamy ustnej, widoczne jądro. Czyste tło preparatu. Bez twarzy, bez patyczków przy ustach dziecka, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "W szkole, pod opieką nauczyciela, przygotowuje się preparat z komórek nabłonka jamy ustnej. Używa się czystych szkiełek i patyczka. Tego ćwiczenia nie wykonujesz sam w domu — śluzówka jamy ustnej wymaga higieny i nadzoru.",
          "Obserwację zaczyna się od najmniejszego powiększenia — tak jak na lekcji o mikroskopie.",
          "Na zdjęciu spod mikroskopu widać nieregularny kształt komórki i jądro. To ta sama komórka nabłonka, której kształt kostki poznałeś wcześniej — na preparacie komórki często są spłaszczone i nieco rozciągnięte."
        ],
        ua: [
          "У школі, під наглядом учителя, готують препарат із клітин епітелію ротової порожнини. Використовують чисті скельця і паличку. Цю вправу не виконуєш сам удома — слизова рота потребує гігієни і нагляду.",
          "Спостереження починають з найменшого збільшення — як на уроці про мікроскоп.",
          "На знімку з-під мікроскопа видно нерівну форму клітини і ядро. Це та сама клітина епітелію, чию форму кубика ти пізнав раніше — на препараті клітини часто сплющені і трохи розтягнені."
        ]
      },
      task: {
        id: "l06-e6",
        type: "true-false",
        question: { pl: "W komórce nabłonka jamy ustnej pod mikroskopem optycznym widać m.in. błonę, cytoplazmę i jądro.", ua: "У клітині епітелію ротової порожнини під оптичним мікроскопом видно зокрема мембрану, цитоплазму і ядро." },
        answer: true,
        explanation: { pl: "Tak. To trzy elementy widoczne na szkolnym preparacie.", ua: "Так. Це три елементи, видимі на шкільному препараті." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Co widać na schemacie?", ua: "Практика. Що видно на схемі?" },
      task: {
        id: "l06-p1",
        type: "multiple-choice",
        question: { pl: "Zaznacz elementy komórki zwierzęcej z tej lekcji.", ua: "Познач елементи тваринної клітини з цього уроку." },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "cytozol", ua: "цитозоль" } },
          { id: "c", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "d", label: { pl: "chloroplast", ua: "хлоропласт" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Chloroplast jest w komórce roślinnej. Dziś: błona, cytozol, jądro (oraz mitochondria, rybosomy, wakuole).", ua: "Хлоропласт є в рослинній клітині." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Błona", ua: "Мембрана" },
      task: {
        id: "l06-p2",
        type: "single-choice",
        question: { pl: "Które zdanie o błonie komórkowej jest prawdziwe?", ua: "Яке речення про клітинну мембрану правдиве?" },
        options: [
          { id: "a", label: { pl: "Oddziela wnętrze komórki od otoczenia i transportuje substancje.", ua: "Відокремлює нутро клітини від оточення і транспортує речовини." } },
          { id: "b", label: { pl: "To twarda ściana z celulozy wokół komórki zwierzęcej.", ua: "Це тверда стінка з целюлози навколо тваринної клітини." } },
          { id: "c", label: { pl: "Błona wytwarza białka zamiast rybosomów.", ua: "Мембрана виробляє білки замість рибосом." } }
        ],
        answer: "a",
        explanation: { pl: "Błona = granica + transport. Ściana celulozowa — rośliny. Białka — rybosomy.", ua: "Мембрана = межа + транспорт." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jądro", ua: "Ядро" },
      task: {
        id: "l06-p3",
        type: "single-choice",
        question: { pl: "Gdzie w komórce zwierzęcej jest DNA i co robi jądro?", ua: "Де в тваринній клітині ДНК і що робить ядро?" },
        options: [
          { id: "a", label: { pl: "DNA jest w jądrze; jądro kieruje procesami w komórce", ua: "ДНК є в ядрі; ядро керує процесами в клітині" } },
          { id: "b", label: { pl: "DNA jest tylko w wakuoli; jądro służy wyłącznie do ruchu", ua: "ДНК є лише у вакуолі; ядро служить лише для руху" } },
          { id: "c", label: { pl: "Komórka zwierzęca nie ma jądra", ua: "Тваринна клітина не має ядра" } }
        ],
        answer: "a",
        explanation: { pl: "Jądro = DNA + kierowanie pracą komórki.", ua: "Ядро = ДНК + керування роботою клітини." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Trzy struktury w cytoplazmie", ua: "Три структури в цитоплазмі" },
      task: {
        id: "l06-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe pary.", ua: "Познач усі правдиві пари." },
        options: [
          { id: "a", label: { pl: "mitochondrium — centrum energetyczne", ua: "мітохондрія — енергетичний центр" } },
          { id: "b", label: { pl: "rybosomy — wytwarzanie białek", ua: "рибосоми — вироблення білків" } },
          { id: "c", label: { pl: "wakuola — mały pęcherzyk; wchłanianie, trawienie, usuwanie substancji", ua: "вакуоля — малий пухирець; всмоктування, травлення, видалення речовин" } },
          { id: "d", label: { pl: "mitochondrium — zapis cech potomstwu zamiast DNA", ua: "мітохондрія — запис рис потомству замість ДНК" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Zapis cech to DNA w jądrze, nie mitochondrium.", ua: "Запис рис — ДНК у ядрі, не мітохондрія." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Preparat szkolny", ua: "Шкільний препарат" },
      task: {
        id: "l06-p5",
        type: "true-false",
        question: { pl: "Preparat z nabłonka jamy ustnej ogląda się w szkole pod opieką nauczyciela; obserwację zaczyna się od najmniejszego powiększenia.", ua: "Препарат з епітелію ротової порожнини розглядають у школі під наглядом учителя; спостереження починають з найменшого збільшення." },
        answer: true,
        explanation: { pl: "Higiena i nadzór są ważne. Zasada mikroskopu: od najmniejszego powiększenia.", ua: "Гігієна і нагляд важливі. Правило мікроскопа: з найменшого збільшення." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Schemat", ua: "Перевірка 1. Схема" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l06-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy elementy, które wskażesz na schemacie komórki zwierzęcej w pierwszej kolejności.", ua: "Познач три елементи, які вкажеш на схемі тваринної клітини в першу чергу." },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "cytozol", ua: "цитозоль" } },
          { id: "c", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "d", label: { pl: "ściana komórkowa", ua: "клітинна стінка" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Komórka zwierzęca ma błonę, cytozol i jądro. Ściany komórkowej nie ma.", ua: "Тваринна клітина має мембрану, цитозоль і ядро. Клітинної стінки немає." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Błona komórkowa", ua: "Перевірка 2. Клітинна мембрана" },
      task: {
        id: "l06-s2",
        type: "single-choice",
        question: { pl: "Do czego służy błona komórkowa?", ua: "Для чого служить клітинна мембрана?" },
        options: [
          { id: "a", label: { pl: "oddziela wnętrze komórki od otoczenia i transportuje substancje do komórki i z komórki", ua: "відокремлює нутро клітини від оточення і транспортує речовини до клітини і з клітини" } },
          { id: "b", label: { pl: "wytwarza zielony barwnik liści", ua: "виробляє зелений барвник листків" } },
          { id: "c", label: { pl: "jest twardą rurą do transportu wody w korzeniu", ua: "є твердою трубою для транспорту води в корені" } }
        ],
        answer: "a",
        explanation: { pl: "Błona = granica i transport substancji.", ua: "Мембрана = межа і транспорт речовин." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Jądro komórkowe", ua: "Перевірка 3. Клітинне ядро" },
      task: {
        id: "l06-s3",
        type: "single-choice",
        question: { pl: "Do czego służy jądro komórkowe?", ua: "Для чого служить клітинне ядро?" },
        options: [
          { id: "a", label: { pl: "zawiera DNA i kieruje procesami w komórce", ua: "містить ДНК і керує процесами в клітині" } },
          { id: "b", label: { pl: "to to samo co pot", ua: "це те саме, що піт" } },
          { id: "c", label: { pl: "buduje muszlę z wapnia", ua: "будує мушлю з кальцію" } }
        ],
        answer: "a",
        explanation: { pl: "Jądro = DNA + sterowanie pracą komórki.", ua: "Ядро = ДНК + керування роботою клітини." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Mitochondrium, rybosomy, wakuola", ua: "Перевірка 4. Мітохондрія, рибосоми, вакуоля" },
      task: {
        id: "l06-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Mitochondrium dostarcza energii — centrum energetyczne komórki.", ua: "Мітохондрія дає енергію — енергетичний центр клітини." } },
          { id: "b", label: { pl: "Rybosomy wytwarzają białka.", ua: "Рибосоми виробляють білки." } },
          { id: "c", label: { pl: "Wakuola (wodniczka) to mały pęcherzyk; bierze udział we wchłanianiu, trawieniu i usuwaniu substancji.", ua: "Вакуоля (водничка) — малий пухирець; бере участь у всмоктуванні, травленні і видаленні речовин." } },
          { id: "d", label: { pl: "Rybosomy to to samo co jądro komórkowe.", ua: "Рибосоми — те саме, що клітинне ядро." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Rybosomy ≠ jądro. Jądro ma DNA. Rybosomy robią białka.", ua: "Рибосоми ≠ ядро." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Nabłonek pod mikroskopem", ua: "Перевірка 5. Епітелій під мікроскопом" },
      task: {
        id: "l06-s5",
        type: "single-choice",
        question: { pl: "Co widać w komórce nabłonka jamy ustnej pod mikroskopem optycznym?", ua: "Що видно в клітині епітелію ротової порожнини під оптичним мікроскопом?" },
        options: [
          { id: "a", label: { pl: "m.in. błonę komórkową, cytoplazmę i jądro komórkowe", ua: "зокрема клітинну мембрану, цитоплазму і клітинне ядро" } },
          { id: "b", label: { pl: "tylko chloroplasty i twardą ścianę z celulozy", ua: "лише хлоропласти і тверду стінку з целюлози" } },
          { id: "c", label: { pl: "nic — komórki nabłonka nie istnieją", ua: "нічого — клітин епітелію не існує" } }
        ],
        answer: "a",
        explanation: { pl: "To klasyczny szkolny obraz komórki zwierzęcej. Chloroplasty i ściana — komórka roślinna.", ua: "Це класичний шкільний образ тваринної клітини." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l06-schemat.png", {
        alt: { pl: "Schemat komórki zwierzęcej", ua: "Схема тваринної клітини" },
        title: { pl: "Błona, cytozol, jądro, mitochondria, rybosomy, wakuole.", ua: "Мембрана, цитозоль, ядро, мітохондрії, рибосоми, вакуолі." },
        prompt: { pl: "Ten sam schemat sześciu elementów komórki zwierzęcej z polskimi etykietami." }
      }),
      text: {
        pl: [
          "Komórka zwierzęca jest oddzielona błoną komórkową. Wewnątrz jest cytoplazma: cytozol i struktury.",
          "Błona oddziela wnętrze od otoczenia i transportuje substancje.",
          "Jądro zawiera DNA i kieruje procesami w komórce.",
          "Mitochondrium — energia. Rybosomy — białka. Wakuole (wodniczki) — drobne pęcherzyki.",
          "Pod mikroskopem optycznym w nabłonku jamy ustnej widać błonę, cytoplazmę i jądro."
        ],
        ua: [
          "Тваринна клітина відокремлена клітинною мембраною. Всередині цитоплазма: цитозоль і структури.",
          "Мембрана відокремлює нутро від оточення і транспортує речовини.",
          "Ядро містить ДНК і керує процесами в клітині.",
          "Мітохондрія — енергія. Рибосоми — білки. Вакуолі (воднички) — дрібні пухирці.",
          "Під оптичним мікроскопом в епітелії рота видно мембрану, цитоплазму і ядро."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać błonę, cytozol i jądro na schemacie komórki zwierzęcej.", ua: "Можу вказати мембрану, цитозоль і ядро на схемі тваринної клітини." },
        { pl: "Potrafię powiedzieć, do czego służy błona komórkowa.", ua: "Можу сказати, для чого служить клітинна мембрана." },
        { pl: "Potrafię powiedzieć, do czego służy jądro komórkowe.", ua: "Можу сказати, для чого служить клітинне ядро." },
        { pl: "Potrafię wyjaśnić funkcje mitochondrium, rybosomów i wakuoli.", ua: "Можу пояснити функції мітохондрії, рибосом і вакуолей." },
        { pl: "Potrafię powiedzieć, co widać w komórce nabłonka pod mikroskopem optycznym.", ua: "Можу сказати, що видно в клітині епітелію під оптичним мікроскопом." }
      ]
    }
  ]
};
