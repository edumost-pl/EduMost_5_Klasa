function em(text) {
  return { text: text, emphasis: true };
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "W Egipcie faraonów", ua: "В Єгипті фараонів" },
      timelineYear: 3000,
      formula: "ok. 3000 p.n.e. · Nil",
      text: {
        pl: [
          "Około 3 tysięcy lat p.n.e. na północy Afryki, w dolinie Nilu, powstało państwo egipskie.",
          "Dziś: dar rzeki, faraon i korony, piramida społeczeństwa, bogowie i mumie, piramidy, skarb Tutenchamona."
        ],
        ua: [
          "Близько 3 тисяч років до н.е. на півночі Африки, в долині Нілу, виникла єгипетська держава.",
          "Сьогодні: дар річки, фараон і корони, піраміда суспільства, боги і мумії, піраміди, скарб Тутанхамона."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, co znaczy „Egipt darem Nilu”", ua: "сказати, що означає «Єгипет — дар Нілу»" },
        { pl: "wyjaśnić, kim był faraon i co znaczyła podwójna korona", ua: "пояснити, ким був фараон і що означала подвійна корона" },
        { pl: "ustawić grupy społeczeństwa od faraona do chłopów", ua: "розставити групи суспільства від фараона до селян" },
        { pl: "powiedzieć o politeizmie, mumiach, piramidach i hieroglifach", ua: "сказати про політеїзм, мумії, піраміди й ієрогліфи" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Egipt darem Nilu", ua: "Єгипет — дар Нілу" },
      formula: "wylewy → muł → pola",
      text: {
        pl: [
          "Państwo powstało nad Nilem. Rzeka regularnie wylewała i zostawiała żyzny muł. Gdy woda opadała, zaczynały się prace polowe.",
          "Ludzie kopali kanały nawadniające, żeby woda szła dalej od koryta. Życie trzymało się rzeki — dalej była pustynia.",
          ["Starożytne powiedzenie: ", em("Egipt darem Nilu"), " — bez wylewów nie byłoby uprawy, bez uprawy nie powstałoby silne państwo."]
        ],
        ua: [
          "Держава виникла над Нілом. Річка регулярно розливалася і лишала родючий мул. Коли вода спадала, починалися польові роботи.",
          "Люди копали зрошувальні канали, щоб вода йшла далі від русла. Життя трималося річки — далі була пустеля.",
          ["Давнє прислів’я: ", em("Єгипет — дар Нілу"), " — без розливів не було б обробітку, без обробітку не виникла б сильна держава."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: starożytny Egipt", ua: "Карта: стародавній Єгипет" },
      visual: gh("018", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Egiptu: Nil, Egipt Górny i Dolny, Memfis, Teby, Abu Simbel",
          ua: "Карта Єгипту: Ніл, Верхній і Нижній Єгипет, Мемфіс, Фіви, Абу-Сімбел"
        },
        title: { pl: "Nil, dwa Egipty, dwa morza", ua: "Ніл, два Єгипти, два моря" },
        prompt: {
          pl: "Szkolna mapa atlasowa starożytnego Egiptu dla klasy 5, jasne tło, czytelne polskie podpisy, bez współczesnych granic państw. Północno-wschodnia Afryka: Nil płynie z południa na północ i rozlewa się w deltę przy Morzu Śródziemnym; na wschodzie Morze Czerwone i półwysep Synaj. Wąska zielona wstęga pól wzdłuż rzeki, po bokach żółta pustynia. Podpisz Górny Egipt na południu (dolina) i Dolny Egipt na północy (delta) — to pułapka dla uczniów, więc etykiety duże. Miasta: Memfis, Teby (Luksor, Karnak), Achetaton, Abydos, Abu Simbel przy I katarakcie; oazy Fajum i Baharija. Dwie małe mapki-wstawki w rogu: Egipt na konturze Afryki i Egipt na globie. Legenda: ziemie uprawne, pustynia, piramidy, świątynie. Styl podręcznika Nowej Ery, bez wojny i bez grozy.",
          ua: "Шкільна атласна карта стародавнього Єгипту для 5 класу, світле тло, читабельні підписи польською (як у підручнику), без сучасних кордонів. Північний схід Африки: Ніл тече з півдня на північ і розливається дельтою в Середземне море; на сході Червоне море і Синай. Вузька зелена стрічка полів уздовж річки, обабіч жовта пустеля. Підпиши Верхній Єгипет на півдні (долина) і Нижній Єгипет на півночі (дельта) — пастка для учнів, тож етикетки великі. Міста: Мемфіс, Фіви (Луксор, Карнак), Ахетатон, Абідос, Абу-Сімбел біля I порога; оази Фаюм і Бахарія. Дві малі вставки: Єгипет на контурі Африки і на глобусі. Легенда: рілля, пустеля, піраміди, храми. Стиль підручника, без війни і жаху."
        }
      }),
      text: {
        pl: [
          "Praca z mapą: dwa morza, zielona wstęga pól, pustynia dalej.",
          ["Uwaga: ", em("Egipt Dolny"), " to delta na północy, ", em("Egipt Górny"), " — dolina na południu. Rzeka płynie „w dół” do morza."]
        ],
        ua: [
          "Робота з картою: два моря, зелена стрічка полів, пустеля далі.",
          ["Увага: ", em("Нижній Єгипет"), " — дельта на півночі, ", em("Верхній Єгипет"), " — долина на півдні. Річка тече «вниз» до моря."]
        ]
      },
      task: {
        id: "h03-map-morza",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Nad brzegami których dwóch mórz leżał starożytny Egipt?",
          ua: "Над берегами яких двох морів лежав стародавній Єгипет?"
        },
        options: [
          { id: "a", label: { pl: "Morze Bałtyckie i Morze Czarne", ua: "Балтійське і Чорне моря" } },
          { id: "b", label: { pl: "Morze Śródziemne i Morze Czerwone", ua: "Середземне і Червоне моря" } },
          { id: "c", label: { pl: "Ocean Atlantycki i Morze Północne", ua: "Атлантичний океан і Північне море" } }
        ],
        answer: "b",
        hint: {
          pl: "Delta wpada do jednego morza; na wschodzie wąskie morze przy Synaju.",
          ua: "Дельта впадає в одне море; на сході вузьке море біля Синаю."
        },
        explanation: {
          pl: "Morze Śródziemne (delta) i Morze Czerwone (wschód). Bałtyk to Polska.",
          ua: "Середземне (дельта) і Червоне (схід). Балтика — це Польща."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Górny i Dolny — pułapka mapy", ua: "Верхній і Нижній — пастка карти" },
      task: {
        id: "h03-map-dolny",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Gdzie leży Egipt Dolny?",
          ua: "Де лежить Нижній Єгипет?"
        },
        options: [
          { id: "a", label: { pl: "na południu, w górnym biegu Nilu", ua: "на півдні, у верхній течії Нілу" } },
          { id: "b", label: { pl: "na północy, w delcie przy Morzu Śródziemnym", ua: "на півночі, в дельті біля Середземного моря" } },
          { id: "c", label: { pl: "w Mezopotamii, między Tygrysem i Eufratem", ua: "у Месопотамії, між Тигром і Євфратом" } }
        ],
        answer: "b",
        hint: {
          pl: "„Dolny” znaczy bliżej ujścia — woda spływa do morza na północy.",
          ua: "«Нижній» означає ближче до гирла — вода стікає в море на півночі."
        },
        explanation: {
          pl: "Dolny = delta na północy. Górny = dolina na południu. To nie „góra kartki”.",
          ua: "Нижній = дельта на півночі. Верхній = долина на півдні. Це не «верх аркуша»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Woda na pola", ua: "Вода на поля" },
      visual: gh("019", {
        kind: "image-placeholder",
        alt: {
          pl: "Egipcjanie czerpią wodę żurawiem na pola przy palmach",
          ua: "Єгиптяни черпають воду журавлем на поля біля пальм"
        },
        title: { pl: "Żuraw, kanały, palmy", ua: "Журавель, канали, пальми" },
        prompt: {
          pl: "Rekonstrukcja edukacyjna dla klasy 5, dzień, jasne słońce, bez grozy. Brzeg Nilu: szeroka błękitna rzeka, palmy daktylowe, wąskie pola zbóż podzielone siatką kanałów nawadniających. Na pierwszym planie drewniany żuraw (szaduf): długa belka na stojaku, na jednym końcu skórzany worek z wodą, na drugim kamienny ciężarek; dwóch rolników w białych spódniczkach-kilts czerpie wodę i leje do rowu. W tle osada z płaskich dachów z suszonej cegły. Mała etykieta: „kanały nawadniające”. Styl szkolnej tablicy + realistyczna ilustracja jak w filmie Krótkich Lekcji. Widok z boku, czytelny mechanizm dźwigni.",
          ua: "Освітня реконструкція для 5 класу, день, ясне сонце, без жаху. Берег Нілу: широка блакитна річка, фінікові пальми, вузькі поля збіжжя, поділені сіткою зрошувальних каналів. На передньому плані дерев’яний журавель (шадуф): довга жердина на стояку, на одному кінці шкіряний міх з водою, на другому кам’яний противаг; двоє рільників у білих спідницях черпають воду і ллють у рів. У тлі оселя з плоских дахів із висушеної цегли. Мала етикетка: «зрошувальні канали». Стиль шкільної таблиці + реалістична ілюстрація. Вигляд збоку, читабельний механізм важеля."
        }
      }),
      text: {
        pl: [
          "Jak w Mezopotamii: woda sama nie idzie na suche pola. Trzeba kanałów i dźwigni.",
          "Gdzie rosło zboże? Tylko w wąskiej dolinie i w delcie."
        ],
        ua: [
          "Як у Месопотамії: вода сама не йде на сухі поля. Потрібні канали і важіль.",
          "Де росло збіжжя? Лише у вузькій долині і в дельті."
        ]
      },
      task: {
        id: "h03-map-pola",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie w Egipcie leżały tereny uprawne?",
          ua: "Де в Єгипті лежали землі під посіви?"
        },
        options: [
          { id: "a", label: { pl: "w wąskiej dolinie i delcie Nilu", ua: "у вузькій долині і дельті Нілу" } },
          { id: "b", label: { pl: "na całej Saharze po horyzont", ua: "на всій Сахарі до обрію" } },
          { id: "c", label: { pl: "tylko w górach Europy", ua: "лише в горах Європи" } }
        ],
        answer: "a",
        hint: {
          pl: "Na mapie zieleń trzyma się rzeki.",
          ua: "На карті зелень тримається річки."
        },
        explanation: {
          pl: "Pola i pastwiska — wzdłuż Nilu. Reszta to pustynia.",
          ua: "Поля і пасовища — вздовж Нілу. Решта — пустеля."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Ciekawostka: źródła Nilu", ua: "Цікавинка: витоки Нілу" },
      text: {
        pl: [
          "Egipcjanie nie wiedzieli, skąd biorą się wylewy. Deszcze padają w górnym biegu — a do źródeł (ponad 6 tys. km) Europejczycy dotarli dopiero w XIX wieku."
        ],
        ua: [
          "Єгиптяни не знали, звідки беруться розливи. Дощі падають у верхній течії — а до витоків (понад 6 тис. км) європейці дісталися лише в XIX столітті."
        ]
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Przyczyna → wydarzenie → skutek", ua: "Причина → подія → наслідок" },
      reveal: true,
      steps: [
        {
          formula: "PRZYCZYNA",
          text: {
            pl: "Nil co roku wylewa i zostawia muł. Dalej od rzeki jest pustynia.",
            ua: "Ніл щороку розливається і лишає мул. Далі від річки — пустеля."
          }
        },
        {
          formula: "WYDARZENIE",
          text: {
            pl: "Ludzie osiadają w dolinie, kopią kanały i uprawiają pola.",
            ua: "Люди осідають у долині, копають канали і обробляють поля."
          }
        },
        {
          formula: "SKUTEK",
          text: {
            pl: "Powstaje silne państwo z faraonem, urzędnikami, świątyniami i wielkimi budowlami.",
            ua: "Виникає сильна держава з фараоном, урядовцями, храмами і великими будовами."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Kim był faraon?", ua: "Ким був фараон?" },
      formula: "władza nieograniczona",
      text: {
        pl: [
          ["Faraon — najważniejsza osoba w państwie. Miał ", em("nieograniczoną władzę"), ": stanowił prawa (sam im nie podlegał), był głównym sędzią, głównym kapłanem i zwierzchnikiem wojska."],
          "Ludzie widzieli w nim przedstawiciela bogów na ziemi. Zazwyczaj władcami byli mężczyźni. W XV wieku p.n.e. na czele państwa stanęła kobieta — królowa Hatszepsut."
        ],
        ua: [
          ["Фараон — найважливіша особа в державі. Мав ", em("необмежену владу"), ": встановлював закони (сам їм не підлягав), був головним суддею, головним жерцем і верховним воєначальником."],
          "Люди бачили в ньому представника богів на землі. Зазвичай володарями були чоловіки. У XV столітті до н.е. на чолі держави стала жінка — цариця Хатшепсут."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Trzy korony", ua: "Три корони" },
      visual: gh("020", {
        kind: "image-placeholder",
        alt: {
          pl: "Biała korona Górnego Egiptu, czerwona Dolnego i podwójna korona zjednoczenia",
          ua: "Біла корона Верхнього Єгипту, червона Нижнього і подвійна корона об’єднання"
        },
        title: { pl: "Hedżet, deszret, pschent", ua: "Геджет, дешрет, пшент" },
        prompt: {
          pl: "Infografika dla klasy 5 na ciemnym tle tablicy szkolnej, trzy duże popiersia faraona w profilu egipskim, złoty kołnierz, bez grozy. LEWA GÓRA: wysoka biała korona stożkowa (hedżet) — etykieta po polsku: „symbol władzy nad Egiptem Górnym”. LEWA DÓŁ: czerwona korona z płaskim czubkiem, wysokim tyłem i spiralnym „wąsem” (deszret) — „symbol władzy nad Egiptem Dolnym”. PRAWA, największa: podwójna korona pschent — biała włożona w czerwoną — „symbol zjednoczenia obu krain”. Twarze spokojne, rysunek jak w filmie Krótkich Lekcji. Duże, czytelne polskie podpisy, dużo powietrza, żadnych hieroglifów drobnym drukiem.",
          ua: "Інфографіка для 5 класу на темному тлі шкільної дошки, три великі погруддя фараона в єгипетському профілі, золотий нашийник, без жаху. ЛІВОРУЧ ВГОРІ: висока біла конусна корона (геджет) — підпис: «символ влади над Верхнім Єгиптом». ЛІВОРУЧ ВНИЗУ: червона корона з плоским верхом, високим задом і спіральним «вусом» (дешрет) — «символ влади над Нижнім Єгиптом». ПРАВОРУЧ, найбільша: подвійна корона пшент — біла вставлена в червону — «символ об’єднання обох земель». Спокійні обличчя, рисунок як у фільмі Коротких уроків. Великі читабельні підписи, багато повітря."
        }
      }),
      text: {
        pl: [
          ["Korona składała się z dwóch części: biała — ", em("Egipt Górny"), " (dolina), czerwona — ", em("Egipt Dolny"), " (delta). Razem = jedno państwo."]
        ],
        ua: [
          ["Корона складалася з двох частин: біла — ", em("Верхній Єгипет"), " (долина), червона — ", em("Нижній Єгипет"), " (дельта). Разом = одна держава."]
        ]
      },
      task: {
        id: "h03-korona",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co oznaczała podwójna korona faraona?",
          ua: "Що означала подвійна корона фараона?"
        },
        options: [
          { id: "a", label: { pl: "władzę tylko nad deltą Nilu", ua: "владу лише над дельтою Нілу" } },
          { id: "b", label: { pl: "zjednoczenie Egiptu Górnego i Dolnego", ua: "об’єднання Верхнього і Нижнього Єгипту" } },
          { id: "c", label: { pl: "sojusz z królami Uruk i Babilonu", ua: "союз із царями Урука і Вавилона" } }
        ],
        answer: "b",
        hint: {
          pl: "Biała + czerwona. Dwie krainy, jeden władca.",
          ua: "Біла + червона. Два краї, один володар."
        },
        explanation: {
          pl: "Pschent = zjednoczenie obu krain. Nie Mezopotamia.",
          ua: "Пшент = об’єднання обох земель. Не Месопотамія."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jaki zakres władzy?", ua: "Який обсяг влади?" },
      task: {
        id: "h03-faraon-wladza",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które zdanie najlepiej opisuje władzę faraona?",
          ua: "Яке речення найкраще описує владу фараона?"
        },
        options: [
          { id: "a", label: { pl: "wybierano go na 4 lata jak prezydenta", ua: "його обирали на 4 роки, як президента" } },
          { id: "b", label: { pl: "miał nieograniczoną władzę: prawa, sąd, kult i wojsko", ua: "мав необмежену владу: закони, суд, культ і військо" } },
          { id: "c", label: { pl: "rządził tylko jednym miastem-państwem jak król Uruk", ua: "правив лише одним містом-державою, як цар Урука" } }
        ],
        answer: "b",
        hint: {
          pl: "Faraon nie podlegał prawom, które sam ustanawiał.",
          ua: "Фараон не підлягав законам, які сам встановлював."
        },
        explanation: {
          pl: "To jedno państwo nad Nilem, nie wybory i nie suma miast-państw.",
          ua: "Це одна держава над Нілом, не вибори і не сума міст-держав."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Piramida społeczeństwa", ua: "Піраміда суспільства" },
      visual: gh("021", {
        kind: "image-placeholder",
        alt: {
          pl: "Siedem warstw: faraon, kapłani, urzędnicy, żołnierze, kupcy, rzemieślnicy, chłopi",
          ua: "Сім шарів: фараон, жерці, урядовці, воїни, купці, ремісники, селяни"
        },
        title: { pl: "Od tronu do pola", ua: "Від трону до поля" },
        prompt: {
          pl: "Infografika piramidy społecznej starożytnego Egiptu dla klasy 5, jasny piaskowy trójkąt na białym tle, siedem poziomów od wąskiego szczytu do szerokiej podstawy. Na każdym poziomie mała scenka i polski podpis po lewej + krótka lista po prawej, jak w filmie Krótkich Lekcji. 1 SZCZYT: faraon na tronie z crook i flail. 2 kapłani — funkcje religijne, doradcy faraona, najlepiej wykształceni. 3 urzędnicy-skrybowie z papirusem — umieli czytać i pisać. 4 żołnierze z łukiem i tarczą — rekrutowani spośród rzemieślników i chłopów. 5 kupcy z wagą i dzbanami — handel. 6 rzemieślnicy: warsztat tkacki, koło garncarskie, rzeźba w kamieniu — wytwarzali przedmioty. 7 PODSTAWA, najszersza: chłopi — rolnictwo, dbali o kanały; pług z wołami, siew, motyka. Kolory: piaskowiec, terakota, złoto, biel lnu. Styl czysty, szkolny, bez niewolników na rysunku (niewolników dopiszemy w tekście), bez przemocy, bez grozy. Duże litery, dużo miejsca na etykiety.",
          ua: "Інфографіка соціальної піраміди стародавнього Єгипту для 5 класу, світлий піщаний трикутник на білому тлі, сім рівнів від вузької вершини до широкої основи. На кожному рівні мала сценка і підпис ліворуч + короткий список праворуч. 1 ВЕРШИНА: фараон на троні з гаком і ціпом. 2 жерці — релігійні функції, радники фараона, найкраще освічені. 3 урядовці-писці з папірусом — вміли читати і писати. 4 воїни з луком і щитом — рекрутовані з ремісників і селян. 5 купці з терезами і глеками — торгівля. 6 ремісники: ткацький верстат, гончарне коло, різьба — виробляли предмети. 7 ОСНОВА, найширша: селяни — рільництво, дбали про канали; плуг з волами, сівба, мотика. Кольори: пісковик, теракота, золото, білий льон. Чистий шкільний стиль, без насильства і жаху. Великі літери."
        }
      }),
      text: {
        pl: [
          "Im wyżej, tym więcej praw. Na czele faraon. Kapłani i urzędnicy — wykształceni (czytać i pisać). Potem żołnierze, kupcy, rzemieślnicy. Najliczniejsi — chłopi przy kanałach.",
          "Niewolników było stosunkowo niewielu — często jeńcy w domach zamożnych. Na rysunku piramidy ich nie ma, bo nie tworzyli osobnej wielkiej warstwy."
        ],
        ua: [
          "Що вище, то більше прав. На чолі фараон. Жерці й урядовці — освічені (читати і писати). Потім воїни, купці, ремісники. Найчисленніші — селяни при каналах.",
          "Рабів було порівняно мало — часто бранці в домах заможних. На рисунку піраміди їх немає, бо вони не творили окремого великого шару."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Świat pełen bogów", ua: "Світ повний богів" },
      formula: "politeizm",
      text: {
        pl: [
          ["Egipcjanie wierzyli w wielu bogów. To ", em("politeizm"), " (poli — wiele, theos — bóg). Zjawiska przyrody uważano za dzieło bogów. Jednych czczono w całym państwie, innych — lokalnie."],
          ["Jednym z najważniejszych był ", em("Ra"), " — bóg-słońce i pan wszechświata, często z głową sokoła i tarczą słońca."],
          "Na cześć bogów stawiano świątynie. Kapłani odprawiali obrzędy."
        ],
        ua: [
          ["Єгиптяни вірили в багатьох богів. Це ", em("політеїзм"), " (полі — багато, теос — бог). Явища природи вважали ділом богів. Одних шанували в усій державі, інших — місцево."],
          ["Одним із найважливіших був ", em("Ра"), " — бог-сонце і пан всесвіту, часто з головою сокола і диском сонця."],
          "На честь богів ставили храми. Жерці правили обряди."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Ra — bóg-słońce", ua: "Ра — бог-сонце" },
      visual: gh("022", {
        kind: "image-placeholder",
        alt: {
          pl: "Posąg Ra z głową sokoła i tarczą słońca",
          ua: "Статуя Ра з головою сокола і диском сонця"
        },
        title: { pl: "Bóg-słońce i pan wszechświata", ua: "Бог-сонце і пан всесвіту" },
        prompt: {
          pl: "Edukacyjna ilustracja dla klasy 5, muzealna, bez grozy. Na ciemnym tle tablicy duże zdjęcie lub rysunek posągu boga Ra: ciało człowieka, głowa sokoła, na głowie złoty dysk słońca opleciony kobrą uraeus, w ręku laska. Spokojna, dostojna poza. Pod spodem krótki polski podpis dużą czcionką: „bóg Ra — bóg-słońce i pan wszechświata”. Po prawej mały rząd czterech bóstw w profilu egipskim (sokół, szakal) na żółtym fryzie — tylko jako tło, nie zaciemniaj głównej figury. Oświetlenie jak w gablocie muzeum, złoto i brąz, czytelny kontur.",
          ua: "Освітня ілюстрація для 5 класу, музейна, без жаху. На темному тлі дошки велике фото або рисунок статуї бога Ра: тіло людини, голова сокола, на голові золотий диск сонця з коброю урей, у руці палиця. Спокійна постава. Знизу короткий підпис великим шрифтом: «бог Ра — бог-сонце і пан всесвіту». Праворуч малий ряд чотирьох божеств у єгипетському профілі (сокіл, шакал) на жовтому фризі — лише тло, не закривай головну фігуру. Освітлення як у музейній вітрині, золото і бронза, читабельний контур."
        }
      }),
      text: {
        pl: ["Ra to jeden przykład. W kolejnym ekranie: co działo się po śmierci."],
        ua: ["Ра — один приклад. На наступному екрані: що діялося після смерті."]
      }
    },
    {
      type: "concept",
      heading: { pl: "Wiara w życie po śmierci", ua: "Віра в життя після смерті" },
      text: {
        pl: [
          ["Po śmierci człowieka osądzał ", em("Ozyrys"), ". Dusza miała trwać, dopóki ciało było zachowane."],
          "Ubogich chowano w piasku pustyni — piasek sam konserwował zwłoki. Ciała zamożnych przechodziły mumifikację.",
          ["Usuwano wnętrzności, balsamowano ciało, owijano bandażami — tak powstawała ", em("mumia"), ". Potem ", em("sarkofag"), " i grobowiec."]
        ],
        ua: [
          ["Після смерті людину судив ", em("Осіріс"), ". Душа мала тривати, доки тіло було збережене."],
          "Бідних ховали в піску пустелі — пісок сам консервував тіло. Тіла заможних проходили муміфікацію.",
          ["Виймали нутрощі, бальзамували тіло, обгортали бинтами — так виникала ", em("мумія"), ". Потім ", em("саркофаг"), " і гробниця."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Cztery kroki mumifikacji", ua: "Чотири кроки муміфікації" },
      visual: gh("023", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery etapy: ciało, natron, bandaże, mumia i naczynia",
          ua: "Чотири етапи: тіло, натрон, бинти, мумія і посудини"
        },
        title: { pl: "Od ciała do mumii", ua: "Від тіла до мумії" },
        prompt: {
          pl: "Spokojna infografika szkolna dla klasy 5, absolutnie bez grozy, bez krwi i bez otwartych ran. Cztery równe kadry w poziomie na jasnym tle, numerowane 1–4, podpisy po polsku. 1: spoczywająca postać na kamiennej ławie, ręce skrzyżowane na piersi, zamknięte oczy — „przygotowanie ciała”. 2: to samo ciało przysypane białym natronem (sól), podpis „suszenie solą (natron)”. 3: częściowe owijanie białymi lnianymi bandażami. 4: kompletna mumia w bandażach + dwa małe naczynia kanopskie przy głowie, podpis „mumia i naczynia na organy”. Kolory: piaskowiec, biel lnu, spokojny złoty akcent. Styl jak slajd Krótkich Lekcji. Żadnych narzędzi chirurgicznych w zbliżeniu.",
          ua: "Спокійна шкільна інфографіка для 5 класу, абсолютно без жаху, без крові і відкритих ран. Чотири рівні кадри горизонтально на світлому тлі, номери 1–4, підписи. 1: постать на кам’яній лаві, руки схрещені на грудях, заплющені очі — «підготовка тіла». 2: те саме тіло присипане білим натроном (сіль) — «сушіння сіллю (натрон)». 3: часткове обгортання білими лляними бинтами. 4: повна мумія в бинтах + дві малі канопи біля голови — «мумія і посудини для органів». Кольори: пісковик, білий льон, спокійний золотий акцент. Стиль слайда Коротких уроків. Жодних хірургічних інструментів крупним планом."
        }
      }),
      task: {
        id: "h03-mummy",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dlaczego Egipcjanie mumifikowali zwłoki?",
          ua: "Чому єгиптяни муміфікували тіла?"
        },
        options: [
          { id: "a", label: { pl: "żeby straszyć sąsiadów na wojnie", ua: "щоб лякати сусідів на війні" } },
          { id: "b", label: { pl: "bo dusza miała trwać, dopóki ciało jest zachowane", ua: "бо душа мала тривати, доки тіло збережене" } },
          { id: "c", label: { pl: "żeby sprzedawać mumie jako ozdoby domu", ua: "щоб продавати мумії як прикраси дому" } }
        ],
        answer: "b",
        hint: {
          pl: "Ozyrys i życie pozagrobowe — nie film grozy.",
          ua: "Осіріс і загробне життя — не фільм жахів."
        },
        explanation: {
          pl: "Ciało miało być nienaruszone, żeby dusza mogła istnieć.",
          ua: "Тіло мало бути неторканим, щоб душа могла існувати."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Po co piramidy?", ua: "Навіщо піраміди?" },
      visual: gh("024", {
        kind: "image-placeholder",
        alt: {
          pl: "Robotnicy ciągną blok po rampie; dźwignie i pomiar kamienia",
          ua: "Робітники тягнуть блок по рампі; важелі і вимір каменя"
        },
        title: { pl: "Budowa trwała dziesiątki lat", ua: "Будова тривала десятки років" },
        prompt: {
          pl: "Infografika budowy piramidy dla klasy 5, dzień na pustyni, bez bata i bez okrucieństwa — to robotnicy i architekci, nie scena kary. TRZY SCENKI z numerami jak w filmie Krótkich Lekcji. 9: dwóch rzemieślników sprawdza kamienny blok pionem i węgielnicą. 10: grupa używa lin i długich drewnianych dźwigni, żeby przechylić blok na drewniane walce. 11, największa: długi szereg ludzi ciągnie sanie z blokiem po ziemnej rampie w stronę piramidy w budowie; nadzorca z laską (nie z biczem), w tle barki na Nilu z kamieniem. Etykiety po polsku: „architekci i robotnicy”, „miasto piramid (obóz)”, „transport bloków Nilem”, „proste dźwignie”, „budowa trwała kilkadziesiąt lat”. Styl podręcznikowy, czytelny, jasne niebo.",
          ua: "Інфографіка будови піраміди для 5 класу, день у пустелі, без батога і жорстокості — робітники й архітектори, не сцена кари. ТРИ СЦЕНКИ з номерами. 9: двоє майстрів перевіряють кам’яний блок виском і косинцем. 10: група лін і довгих дерев’яних важелів нахиляє блок на дерев’яні котки. 11, найбільша: довгий ряд людей тягне сани з блоком по земляній рампі до піраміди в будові; наглядач із палицею (не з батогом), у тлі баржі на Нілі з каменем. Підписи: «архітектори і робітники», «місто пірамід (табір)», «транспорт блоків Нілом», «прості важелі», «будова тривала кілька десятків років». Підручниковий стиль, ясне небо."
        }
      }),
      text: {
        pl: [
          "Piramida to grobowiec faraona. Budowa mogła trwać dziesiątki lat. Bloki wieziono Nilem. Robotnicy mieszkali w „mieście piramid”. Używano prostych dźwigni — nie dźwigów."
        ],
        ua: [
          "Піраміда — гробниця фараона. Будова могла тривати десятки років. Блоки везли Нілом. Робітники жили в «місті пірамід». Використовували прості важелі — не крани."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Co jest w środku?", ua: "Що всередині?" },
      visual: gh("025", {
        kind: "image-placeholder",
        alt: {
          pl: "Przekrój piramidy: wejście, korytarze, komnata faraona",
          ua: "Перетин піраміди: вхід, коридори, камера фараона"
        },
        title: { pl: "Przekrój piramidy w Gizie", ua: "Перетин піраміди в Гізі" },
        prompt: {
          pl: "Szkolny przekrój wielkiej piramidy (Giza / Cheops) dla klasy 5, jasne niebo, żółty piasek u podstawy. Piramida rozcięta jak model architektoniczny: widać korytarze w kamieniu. Polskie etykiety z cienkimi liniami wskazującymi: wejście na boku; przejście w dół; komnata podziemna pod podstawą; przejście do góry; duży korytarz (Wielka Galeria); przedpokój; komnata grobowa królowej niżej w środku; wejście do komnaty grobowej faraona; komnata grobowa faraona; komory nad nią „by rozłożyć ciężar”. Bez mumii w kadrze, bez grozy, bez krwi. Kolory: piaskowiec, szare korytarze, błękit nieba. Duże, czytelne litery, dużo powietrza, styl atlasu.",
          ua: "Шкільний перетин великої піраміди (Гіза / Хеопс) для 5 класу, ясне небо, жовтий пісок. Піраміда розрізана як архітектурна модель: видно коридори в камені. Підписи з тонкими лініями: вхід збоку; прохід униз; підземна камера під основою; прохід угору; великий коридор (Велика галерея); передпокій; поховальна камера цариці нижче в центрі; вхід до камери фараона; поховальна камера фараона; камери над нею «щоб розподілити вагу». Без мумії в кадрі, без жаху. Кольори: пісковик, сірі коридори, блакитне небо. Великі літери, стиль атласу."
        }
      }),
      text: {
        pl: [
          "Najsłynniejsze piramidy III tysiąclecia p.n.e. stoją w Gizie: Cheops (ok. 146 m) i Chefren. Wewnątrz korytarze prowadzą do komory grobowej.",
          "Wielki Sfinks — lew z ludzką głową — strzeże terenu; uczeni wiążą twarz z Chefrenem."
        ],
        ua: [
          "Найславетніші піраміди III тисячоліття до н.е. стоять у Гізі: Хеопс (бл. 146 м) і Хефрен. Усередині коридори ведуть до поховальної камери.",
          "Великий Сфінкс — лев із людською головою — стереже терен; учені пов’язують обличчя з Хефреном."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Warto wiedzieć: skarb Tutenchamona", ua: "Варто знати: скарб Тутанхамона" },
      formula: "1922 · Howard Carter",
      visual: gh("026", {
        kind: "image-placeholder",
        place: "after",
        alt: {
          pl: "Przekrój grobowca: korytarz, przedsionek, komora, skarbiec",
          ua: "Перетин гробниці: коридор, передпокій, камера, скарбниця"
        },
        title: { pl: "Grobowiec Tutenchamona", ua: "Гробниця Тутанхамона" },
        prompt: {
          pl: "Trójwymiarowy przekrój grobowca Tutenchamona w Dolinie Królów dla klasy 5, jasny, muzealny, bez grozy. Pod ziemią: długi korytarz wejściowy w dół; przedsionek z dwoma rozłożonymi rydwanami, meblami i naczyniami; aneks z boku pełen sprzętów; komora grobowa z warstwowym sarkofagiem i malowidłami na ścianach; skarbiec z pozłacanym naosem i figurą Anubisa na piedestale (spokojny szakal, nie horror). Polskie etykiety: korytarz wejściowy, przedsionek, aneks, komora grobowa, skarbiec. W małym kadrze w rogu czarno-biały portret Howarda Cartera w kapeluszu fedora (1922). Widok izometryczny, dużo światła w komorach, złoto i drewno, czytelne pomieszczenia.",
          ua: "Тривимірний перетин гробниці Тутанхамона в Долині царів для 5 класу, світлий, музейний, без жаху. Під землею: довгий вхідний коридор униз; передпокій із двома розібраними колісницями, меблями і посудом; анекс збоку зі спорядженням; поховальна камера з шаровим саркофагом і розписами; скарбниця з позолоченим наосом і фігурою Анубіса на п’єдесталі (спокійний шакал, не жах). Підписи: вхідний коридор, передпокій, анекс, поховальна камера, скарбниця. У малому кадрі в куті чорно-білий портрет Говарда Картера в капелюсі федора (1922). Ізометрія, багато світла, золото і дерево, читабельні кімнати."
        }
      }),
      text: {
        pl: [
          "Większość grobowców ograbiono już w starożytności. W 1922 roku Howard Carter odkrył w Dolinie Królów nienaruszony grobowiec faraona Tutenchamona.",
          "Mumia, kilka sarkofagów (jeden ze złota), ponad 5 tysięcy przedmiotów — złoto, ale też rzeczy codziennego użytku, bo zmarły miał ich potrzebować po śmierci."
        ],
        ua: [
          "Більшість гробниць пограбували ще в давнину. У 1922 році Говард Картер відкрив у Долині царів неторкану гробницю фараона Тутанхамона.",
          "Мумія, кілька саркофагів (один із золота), понад 5 тисяч предметів — золото, але й речі щоденного вжитку, бо померлий мав їх потребувати після смерті."
        ]
      },
      task: {
        id: "h03-src-carter",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Odkrycie grobowca Tutenchamona jest ważne, bo:",
          ua: "Відкриття гробниці Тутанхамона важливе, бо:"
        },
        options: [
          { id: "a", label: { pl: "grobowiec był nietknięty — zachowały się mumia i tysiące przedmiotów", ua: "гробниця була неторкана — збереглися мумія і тисячі предметів" } },
          { id: "b", label: { pl: "Carter znalazł pierwszy pług na świecie", ua: "Картер знайшов перший плуг у світі" } },
          { id: "c", label: { pl: "okazało się, że Egipcjanie nie wierzyli w życie po śmierci", ua: "виявилося, що єгиптяни не вірили в життя після смерті" } }
        ],
        answer: "a",
        hint: {
          pl: "Inne groby zwykle już wcześniej ograbiono.",
          ua: "Інші гроби зазвичай уже раніше пограбували."
        },
        explanation: {
          pl: "Nietknięty grób = źródło. Złoto jest widowiskowe, ale liczy się komplet przedmiotów i wiara.",
          ua: "Неторканий гріб = джерело. Золото ефектне, але важливим є повний набір предметів і віра."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dorobek cywilizacyjny", ua: "Цивілізаційний доробок" },
      visual: gh("027", {
        kind: "image-placeholder",
        alt: {
          pl: "Hieroglify na kamieniu, mumia, pomiar bloku — dokonania Egipcjan",
          ua: "Ієрогліфи на камені, мумія, вимір блока — досягнення єгиптян"
        },
        title: { pl: "Pismo, medycyna, matematyka, astronomia", ua: "Письмо, медицина, математика, астрономія" },
        prompt: {
          pl: "Infografika „dokonania Egipcjan” dla klasy 5, ciemne tło tablicy, żółte strzałki jak w filmie Krótkich Lekcji, cztery bloki. 1 PISMO: zbliżenie reliefu hieroglifów (ptak, oko, trzcina) i podpis „pismo obrazkowe — hieroglify, około 6 tysięcy znaków”; mniejsze: teksty religijne, dokumenty państwa, utwory literackie. 2 MEDYCYNA: spokojny złoty sarkofag obok owiniętej mumii (bez twarzy w zbliżeniu) — mumifikacja i operacje. 3 MATEMATYKA: rzemieślnicy z pionem i węgielnicą przy kamiennym bloku. 4 ASTRONOMIA: prosty rysunek nieba / Syriusza i kalendarza 365 dni (12×30+5). Duże polskie nagłówki, dużo powietrza, styl szkolny, bez grozy.",
          ua: "Інфографіка «досягнення єгиптян» для 5 класу, темне тло дошки, жовті стрілки, чотири блоки. 1 ПИСЬМО: рельєф ієрогліфів (птах, око, очерет) і підпис «образотворче письмо — ієрогліфи, близько 6 тисяч знаків»; дрібніше: релігійні тексти, державні документи, література. 2 МЕДИЦИНА: спокійний золотий саркофаг біля обгорнутої мумії (без обличчя крупно) — муміфікація і операції. 3 МАТЕМАТИКА: майстри з виском і косинцем біля кам’яного блока. 4 АСТРОНОМІЯ: простий рисунок неба / Сіріуса і календаря 365 днів (12×30+5). Великі заголовки, багато повітря, без жаху."
        }
      }),
      text: {
        pl: [
          ["Pismo obrazkowe: ", em("hieroglify"), " — ok. 6 tys. znaków; teksty religijne, dokumenty, literatura."],
          "Medycyna: dzięki mumifikacji poznawano ciało. Matematyka: obliczenia przy piramidach. Astronomia i kalendarz: rok 365 dni (12 × 30 + 5) z obserwacji Nilu i gwiazdy Syriusz."
        ],
        ua: [
          ["Образотворче письмо: ", em("ієрогліфи"), " — бл. 6 тис. знаків; релігійні тексти, документи, література."],
          "Медицина: завдяки муміфікації пізнавали тіло. Математика: розрахунки при пірамідах. Астрономія і календар: рік 365 днів (12 × 30 + 5) зі спостережень Нілу і зорі Сіріус."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Warto wiedzieć: Abu Simbel", ua: "Варто знати: Абу-Сімбел" },
      visual: gh("028", {
        kind: "image-placeholder",
        place: "after",
        alt: {
          pl: "Świątynia Abu Simbel: cztery kolosy i przenoszenie blokami",
          ua: "Храм Абу-Сімбел: чотири колоси і перенесення блоками"
        },
        title: { pl: "Świątynię przeniesiono wyżej", ua: "Храм перенесли вище" },
        prompt: {
          pl: "Dwupanelowa infografika dla klasy 5. LEWY panel: fasada świątyni Abu Simbel wykuta w skale — cztery ogromne siedzące kolosy Ramzesa II, pustynia, błękitne niebo, małe ludziki u stóp dla skali. PRAWY panel: schemat przeniesienia z lat 60. XX w.: świątynię pocięto na ponumerowane bloki, dźwig (nowoczesny, spokojny) podnosi blok, nowa lokalizacja wyżej nad wodą; w tle linia przyszłego jeziora / tamy. Polskie etykiety: „skalna świątynia Ramzesa II”, „tama groziła zalaniem”, „pocięto na bloki i złożono wyżej”. Styl szkolny, jasny, bez paniki, bez wojny. Widok dzienny.",
          ua: "Двопанельна інфографіка для 5 класу. ЛІВА панель: фасад храму Абу-Сімбел у скелі — чотири величезні сидячі колоси Рамзеса II, пустеля, блакитне небо, маленькі фігурки людей біля ніг для масштабу. ПРАВА панель: схема перенесення 1960-х: храм порізано на пронумеровані блоки, кран піднімає блок, нова локація вище над водою; у тлі лінія майбутнього озера / греблі. Підписи: «скельний храм Рамзеса II», «гребля загрожувала затопленням», «порізали на блоки і склали вище». Шкільний стиль, ясно, без паніки. Денний вид."
        }
      }),
      text: {
        pl: [
          "W XX wieku budowa wielkiej tamy na Nilu groziła zalaniem skalnych świątyń w Abu Simbel. Świątynię pocięto na bloki i złożono wyżej — żeby ocalić dzieło Ramzesa II.",
          "To już nie starożytność, ale pokazuje, że zabytki Egiptu nadal trzeba chronić."
        ],
        ua: [
          "У XX столітті будова великої греблі на Нілі загрожувала затопленням скельних храмів в Абу-Сімбел. Храм порізали на блоки і склали вище — щоб врятувати твір Рамзеса II.",
          "Це вже не давнину, але показує, що пам’ятки Єгипту досі треба берегти."
        ]
      },
      task: {
        id: "h03-abu",
        type: "true-false",
        level: "C",
        question: {
          pl: "Świątynię Abu Simbel przeniesiono, bo groziło jej zalanie po budowie tamy — prawda czy fałsz?",
          ua: "Храм Абу-Сімбел перенесли, бо йому загрожувало затоплення після будови греблі — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Woda z tamy zalałaby starą lokalizację.",
          ua: "Вода з греблі залила б стару локацію."
        },
        explanation: {
          pl: "Prawda. Pocięto na bloki i złożono wyżej. To ciekawostka z filmu, nie punkt „to już wiem” z podręcznika.",
          ua: "Правда. Порізали на блоки і склали вище. Це цікавинка з фільму, не пункт «це вже знаю» з підручника."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Egipt darem Nilu — państwo istnieje dzięki wylewom rzeki", ua: "Єгипет — дар Нілу — держава існує завдяки розливам річки" },
        { pl: "faraon — król Egiptu o nieograniczonej władzy", ua: "фараон — цар Єгипту з необмеженою владою" },
        { pl: "politeizm — wiara w wielu bogów (Ra, Ozyrys)", ua: "політеїзм — віра в багатьох богів (Ра, Осіріс)" },
        { pl: "mumia / sarkofag — zachowane ciało / ozdobna trumna", ua: "мумія / саркофаг — збережене тіло / оздобна труна" },
        { pl: "hieroglify — egipskie pismo obrazkowe", ua: "ієрогліфи — єгипетське образотворче письмо" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Dlaczego Egipt nazywano darem Nilu? Zacznij od mułu i pustyni, skończ na państwie."],
        ua: ["Чому Єгипет називали даром Нілу? Почни з мулу і пустелі, закінчи державою."]
      },
      task: {
        id: "h03-guided-nil",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co oznacza powiedzenie „Egipt darem Nilu”?",
          ua: "Що означає прислів’я «Єгипет — дар Нілу»?"
        },
        options: [
          { id: "a", label: { pl: "że Nil był groźnym wrogiem, którego należało osuszyć", ua: "що Ніл був грізним ворогом, якого треба було висушити" } },
          { id: "b", label: { pl: "że bez wylewów nie byłoby rolnictwa ani silnego państwa", ua: "що без розливів не було б рільництва ні сильної держави" } },
          { id: "c", label: { pl: "że Egipt leżał między Tygrysem i Eufratem", ua: "що Єгипет лежав між Тигром і Євфратом" } }
        ],
        answer: "b",
        hint: {
          pl: "Bez Nilu niemożliwa uprawa, bez uprawy — silne państwo.",
          ua: "Без Нілу неможливий обробіток, без обробітку — сильна держава."
        },
        explanation: {
          pl: "Rzeka karmi pola. Pola karmią ludzi i państwo.",
          ua: "Річка годує поля. Поля годують людей і державу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Egipcjanie czcili tylko jednego Boga, a piramidy stawiali Sumerowie nad Tygrysem.”",
        ua: "«Єгиптяни шанували лише одного Бога, а піраміди ставили шумери над Тигром.»"
      },
      text: {
        pl: [
          "Egipcjanie byli politeistami. Jeden Bóg to temat Izraela.",
          "Piramidy Cheopsa i Chefrena stoją w Gizie nad Nilem. Sumerowie budowali zikkuraty z cegły."
        ],
        ua: [
          "Єгиптяни були політеїстами. Один Бог — тема Ізраїлю.",
          "Піраміди Хеопса і Хефрена стоять у Гізі над Нілом. Шумери будували зикурати з цегли."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wymień warstwy społeczeństwa od faraona do chłopów i powiedz, czym się zajmowały.",
        ua: "Назви шари суспільства від фараона до селян і скажи, чим вони займалися."
      },
      text: {
        pl: [
          "Podpowiedź: faraon → kapłani → urzędnicy → żołnierze → kupcy → rzemieślnicy → chłopi.",
          "Powiedz 4–6 zdań. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: фараон → жерці → урядовці → воїни → купці → ремісники → селяни.",
          "Скажи 4–6 речень. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h03-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej opisuje społeczeństwo Egiptu?",
          ua: "Яке речення найкраще описує суспільство Єгипту?"
        },
        options: [
          { id: "a", label: { pl: "Wszyscy Egipcjanie mieli te same prawa i co roku wybierali faraona", ua: "Усі єгиптяни мали ті самі права і щороку обирали фараона" } },
          { id: "b", label: { pl: "Faraon u szczytu; kapłani i urzędnicy wykształceni; najliczniejsi chłopi", ua: "Фараон на вершині; жерці й урядовці освічені; найчисленніші селяни" } },
          { id: "c", label: { pl: "Społeczeństwo składało się tylko z kupców z Uruk", ua: "Суспільство складалося лише з купців з Урука" } }
        ],
        answer: "b",
        hint: {
          pl: "Im wyżej, tym więcej praw — jak na piramidzie.",
          ua: "Що вище, то більше прав — як на піраміді."
        },
        explanation: {
          pl: "To piramida praw, nie równość obywateli Aten.",
          ua: "Це піраміда прав, не рівність громадян Афін."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wpisz, ile dni liczył rok w kalendarzu egipskim.",
        ua: "Введи, скільки днів мав рік у єгипетському календарі."
      },
      task: {
        id: "h03-write",
        type: "input-number",
        level: "B",
        question: {
          pl: "Kalendarz egipski: rok = 12 × 30 + 5. Ile dni?",
          ua: "Єгипетський календар: рік = 12 × 30 + 5. Скільки днів?"
        },
        answer: 365,
        hint: {
          pl: "Dwanaście miesięcy po trzydzieści i pięć dni dodatkowych.",
          ua: "Дванадцять місяців по тридцять і п’ять додаткових днів."
        },
        explanation: {
          pl: "365. Kalendarz z obserwacji Nilu i Syriusza.",
          ua: "365. Календар зі спостережень Нілу і Сіріуса."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Osiągnięcia Egiptu", ua: "Досягнення Єгипту" },
      task: {
        id: "h03-dorobek",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zestaw to osiągnięcia cywilizacji egipskiej?",
          ua: "Який набір — досягнення єгипетської цивілізації?"
        },
        options: [
          { id: "a", label: { pl: "pismo klinowe, koło i system 60", ua: "клинопис, колесо і система 60" } },
          { id: "b", label: { pl: "hieroglify, piramidy, medycyna, matematyka, kalendarz 365 dni", ua: "ієрогліфи, піраміди, медицина, математика, календар 365 днів" } },
          { id: "c", label: { pl: "alfabet łaciński i uniwersytet w Krakowie", ua: "латинська абетка і університет у Кракові" } }
        ],
        answer: "b",
        hint: {
          pl: "Oddziel Nil od Tygrysu i od średniowiecznej Polski.",
          ua: "Відділи Ніл від Тигру і від середньовічної Польщі."
        },
        explanation: {
          pl: "Kliny i 60 to Sumer. Alfabet i Kraków — później.",
          ua: "Клини і 60 — Шумер. Абетка і Краків — пізніше."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co nie pasuje do Egiptu?", ua: "Що не пасує до Єгипту?" },
      task: {
        id: "h03-odd",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który element NIE należy do Egiptu faraonów?",
          ua: "Який елемент НЕ належить до Єгипту фараонів?"
        },
        options: [
          { id: "a", label: { pl: "hieroglify i kalendarz 365 dni", ua: "ієрогліфи і календар 365 днів" } },
          { id: "b", label: { pl: "piramidy Cheopsa i Chefrena w Gizie", ua: "піраміди Хеопса і Хефрена в Гізі" } },
          { id: "c", label: { pl: "tabliczka klinowa z gliny z Uruk", ua: "клинописна табличка з глини з Урука" } }
        ],
        answer: "c",
        hint: {
          pl: "Oddziel Nil od Tygrysu.",
          ua: "Відділи Ніл від Тигру."
        },
        explanation: {
          pl: "Glina i kliny to Mezopotamia.",
          ua: "Глина і клини — це Месопотамія."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h03-check-rok",
        type: "input-number",
        level: "A",
        question: {
          pl: [
            "Około którego roku p.n.e. powstało państwo egipskie? Wpisz: ",
            em("3000"),
            "."
          ],
          ua: [
            "Близько якого року до н.е. виникла єгипетська держава? Введи: ",
            em("3000"),
            "."
          ]
        },
        answer: 3000,
        hint: {
          pl: "Około 3 tysięcy lat p.n.e.",
          ua: "Близько 3 тисяч років до н.е."
        },
        explanation: {
          pl: "Ok. 3000 p.n.e. — powstanie państwa nad Nilem.",
          ua: "Бл. 3000 до н.е. — виникнення держави над Нілом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h03-check-tf",
        type: "true-false",
        level: "B",
        question: {
          pl: "Egipcjanie czcili wielu bogów (politeizm) — prawda czy fałsz?",
          ua: "Єгиптяни шанували багатьох богів (політеїзм) — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Ra, Ozyrys — to nie jeden Bóg.",
          ua: "Ра, Осіріс — це не один Бог."
        },
        explanation: {
          pl: "Politeizm. Monoteizm poznamy w Izraelu.",
          ua: "Політеїзм. Монотеїзм пізнаємо в Ізраїлі."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Starożytny Egipt powstał ok. 3000 p.n.e. w Afryce nad Nilem. Dzięki tej rzece możliwe było rolnictwo — „Egipt darem Nilu”.",
          ["3000 p.n.e.", "Nilem", "Egipt darem Nilu"],
          "Стародавній Єгипет виник бл. 3000 до н.е. в Африці над Нілом. Завдяки цій річці було можливе рільництво — «Єгипет — дар Нілу».",
          ["3000 до н.е.", "Нілом", "Єгипет — дар Нілу"]
        ),
        mark(
          "Na czele stał faraon o nieograniczonej władzy. Kapłani i urzędnicy — wykształceni. Reszta: rzemieślnicy, kupcy, chłopi, żołnierze oraz nieliczni niewolnicy.",
          ["faraon", "nieograniczonej władzy", "Kapłani", "urzędnicy"],
          "На чолі стояв фараон з необмеженою владою. Жерці й урядовці — освічені. Решта: ремісники, купці, селяни, воїни та нечисленні раби.",
          ["фараон", "необмеженою владою", "Жерці", "урядовці"]
        ),
        mark(
          "Egipcjanie byli politeistami. Wierzyli, że dusza mieszka w ciele także po śmierci — dlatego mumifikowali zwłoki i budowali piramidy.",
          ["politeistami", "mumifikowali", "piramidy"],
          "Єгиптяни були політеїстами. Вірили, що душа живе в тілі і після смерті — тому муміфікували тіла і будували піраміди.",
          ["політеїстами", "муміфікували", "піраміди"]
        ),
        mark(
          "Dorobek: hieroglify, medycyna, matematyka, astronomia, kalendarz 365 dni.",
          ["hieroglify", "medycyna", "matematyka", "kalendarz 365 dni"],
          "Доробок: ієрогліфи, медицина, математика, астрономія, календар 365 днів.",
          ["ієрогліфи", "медицина", "математика", "календар 365 днів"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następny temat: Izrael — lud, który czcił jednego Boga.",
          "Porównaj: politeizm Egiptu i monoteizm Izraelitów.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Ізраїль — народ, який шанував одного Бога.",
          "Порівняй: політеїзм Єгипту і монотеїзм ізраїльтян.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "lqcjlxhDpqc",
        title: {
          pl: "Krótkie Lekcje: W Egipcie faraonów",
          ua: "Короткі уроки: В Єгипті фараонів"
        }
      }
    }
  ]
};
