function em(text) {
  return { text: text, emphasis: true };
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
      heading: { pl: "Miasta-państwa Mezopotamii", ua: "Міста-держави Месопотамії" },
      timelineYear: 3500,
      formula: "ok. 3500 p.n.e. · Sumerowie",
      text: {
        pl: [
          "Ludzie osiedlali się przy wielkich rzekach. Jednym z takich miejsc była Mezopotamia na Bliskim Wschodzie — kraina między Eufratem i Tygrysem.",
          "Dziś trzy pytania z podręcznika: dlaczego cywilizacje rodzą się nad rzekami, kiedy i gdzie powstały pierwsze państwa, jakie są największe dokonania ludów Mezopotamii."
        ],
        ua: [
          "Люди оселялися біля великих річок. Одним із таких місць була Месопотамія на Близькому Сході — край між Євфратом і Тигром.",
          "Сьогодні три питання з підручника: чому цивілізації народжуються над річками, коли і де виникли перші держави, які найбільші досягнення народів Месопотамії."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić, dlaczego pierwsze cywilizacje powstały nad wielkimi rzekami", ua: "пояснити, чому перші цивілізації виникли над великими річками" },
        { pl: "pokazać na mapie Mezopotamię, Tygrys, Eufrat, Ur i Babilon", ua: "показати на карті Месопотамію, Тигр, Євфрат, Ур і Вавилон" },
        { pl: "powiedzieć, jak z kanałów i nadzoru wyrosły miasta-państwa Sumerów", ua: "сказати, як із каналів і нагляду виросли міста-держави шумерів" },
        { pl: "wymienić dokonania Sumerów i powiedzieć, kim był Hammurabi", ua: "назвати досягнення шумерів і сказати, ким був Хаммурапі" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Cywilizacje wielkich rzek", ua: "Цивілізації великих річок" },
      formula: "Mezopotamia = „między rzekami”",
      text: {
        pl: [
          ["Mezopotamia leży na ", em("Bliskim Wschodzie"), " — między ", em("Eufratem"), " i ", em("Tygrysem"), "."],
          "Rzeki regularnie wylewały, nawadniały pola i zostawiały żyzny muł. Gorący klimat + muł = wysokie plony, czasem kilka razy w roku.",
          "Szybki rozwój rolnictwa → dużo pożywienia → można wyżywić wielu ludzi.",
          ["W tym temacie ", em("cywilizacja"), " to społeczeństwo, które budowało miasta, posługiwało się pismem i stworzyło własne państwo."]
        ],
        ua: [
          ["Месопотамія лежить на ", em("Близькому Сході"), " — між ", em("Євфратом"), " і ", em("Тигром"), "."],
          "Річки регулярно розливалися, напували поля і лишали родючий мул. Спекотний клімат + мул = високі врожаї, інколи кілька разів на рік.",
          "Швидкий розвиток рільництва → багато поживи → можна прогодувати багатьох людей.",
          ["У цій темі ", em("цивілізація"), " — суспільство, яке будувало міста, користувалося письмом і створило власну державу."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzeka, muł, plony", ua: "Річка, мул, урожаї" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/010.png",
        file: "Historia/010.png",
        alt: { pl: "Dolina między rzekami: pola przy wodzie, suche wzgórza dalej", ua: "Долина між річками: поля біля води, сухі пагорби далі" },
        title: { pl: "Kraina między Eufratem i Tygrysem", ua: "Край між Євфратом і Тигром" },
        prompt: {
          pl: "Infografika dla klasy 5: kręta rzeka, zielone pola i palmy przy wodzie, suche wzgórza w tle, podpis żyzny muł / wylewy / gorący klimat; bez grozy, styl szkolnej tablicy + zdjęcie doliny.",
          ua: "Інфографіка для 5 класу: звивиста річка, зелені поля і пальми біля води, сухі пагорби, підпис родючий мул / розливи / спекотний клімат; без жаху, стиль шкільної таблиці."
        }
      },
      text: {
        pl: ["Początkowo pod uprawy nadawała się tylko ziemia leżąca blisko rzek. Dalej — sucho."],
        ua: ["Спочатку під посіви надавалася лише земля біля річок. Далі — сухо."]
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Od kanału do cywilizacji", ua: "Від каналу до цивілізації" },
      reveal: true,
      text: {
        pl: ["To nie magia korony. To organizacja wody."],
        ua: ["Це не магія корони. Це організація води."]
      },
      steps: [
        {
          formula: "1. ZIEMIA PRZY RZECE",
          text: {
            pl: "Uprawa tylko blisko koryta. Żeby mieć więcej pól — trzeba doprowadzić wodę dalej.",
            ua: "Обробіток лише біля русла. Щоб мати більше полів — треба провести воду далі."
          }
        },
        {
          formula: "2. KANAŁY",
          text: {
            pl: "Budowa i czyszczenie kanałów nawadniających. Pracuje wielu ludzi.",
            ua: "Будова і чищення зрошувальних каналів. Працює багато людей."
          }
        },
        {
          formula: "3. NADZORCA",
          text: {
            pl: "Wyznaczono nadzorców. Ich władza rosła. Robotnicy stawali się poddanymi.",
            ua: "Призначили наглядачів. Їхня влада росла. Робітники ставали підданими."
          }
        },
        {
          formula: "4. CYWILIZACJA",
          text: {
            pl: "Z nadzoru nad wodą wyrosły miasta i państwa — cywilizacja.",
            ua: "З нагляду за водою виросли міста і держави — цивілізація."
          }
        }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Kanały nawadniające", ua: "Зрошувальні канали" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/011.png",
        file: "Historia/011.png",
        alt: { pl: "Osada nad rzeką: kanały, palmy, pług z wołami", ua: "Поселення над річкою: канали, пальми, плуг з волами" },
        title: { pl: "Woda idzie na pola", ua: "Вода йде на поля" },
        prompt: {
          pl: "Rekonstrukcja edukacyjna dla klasy 5: rzeka, odgałęzione kanały, pola zbóż, palmy daktylowe, woły przy pługu, domy z suszonej cegły, okrągłe łódki z trzciny; dzień, bez grozy.",
          ua: "Освітня реконструкція для 5 класу: річка, відгалужені канали, поля збіжжя, фінікові пальми, воли біля плуга, хати з висушеної цегли; день, без жаху."
        }
      },
      text: {
        pl: ["Rzeki to także drogi: łodzie wiozły zboże i towary. Handel i rzemiosło rosną tam, gdzie jest woda."],
        ua: ["Річки — також дороги: човни везли збіжжя і товари. Торгівля і ремесло ростуть там, де є вода."]
      }
    },
    {
      type: "visual",
      heading: { pl: "Tak wygląda cywilizacja", ua: "Так виглядає цивілізація" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/012.png",
        file: "Historia/012.png",
        alt: { pl: "Miasto w murach z zikkuratem nad rzeką", ua: "Місто в мурах із зикуратом над річкою" },
        title: { pl: "Miasto-państwo Sumerów", ua: "Місто-держава шумерів" },
        prompt: {
          pl: "Rekonstrukcja sumeryjskiego miasta-państwa dla klasy 5: mury z blankami, brama, schodkowy zikkurat, płaskie dachy z cegły, palmy i kanał na pierwszym planie, pustynia w tle; czytelna, bez wojny.",
          ua: "Реконструкція шумерського міста-держави для 5 класу: мури, брама, ступінчастий зикурат, плоскі дахи, пальми і канал, пустеля в тлі; без війни."
        }
      },
      text: {
        pl: ["Miasto w murach + pola wokół. To już nie obóz koczowników."],
        ua: ["Місто в мурах + поля довкола. Це вже не табір кочівників."]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: Mezopotamia w starożytności", ua: "Карта: Месопотамія в давнину" },
      visual: {
        kind: "map-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/013.png",
        file: "Historia/013.png",
        alt: { pl: "Mapa: Tygrys, Eufrat, Uruk, Ur, Babilon", ua: "Карта: Тигр, Євфрат, Урук, Ур, Вавилон" },
        title: { pl: "Tygrys, Eufrat, Sumer, Babilonia", ua: "Тигр, Євфрат, Шумер, Вавилонія" },
        prompt: {
          pl: "Szkolna mapa Mezopotamii dla klasy 5: Eufrat i Tygrys, Zatoka Perska, Morze Śródziemne, Egipt i Nil z lewej, miasta Uruk, Ur, Lagasz, Babilon, Aszur, Niniwa; legenda: miasta sumeryjskie, Babilonia w II tys. p.n.e., pola i pustynie; bez współczesnych granic, jasny atlas.",
          ua: "Шкільна карта Месопотамії для 5 класу: Євфрат і Тигр, Перська затока, Середземне море, Єгипет і Ніл ліворуч, міста Урук, Ур, Лагаш, Вавилон, Ашшур, Ніневія; легенда: шумерські міста, Вавилонія в II тис. до н.е.; без сучасних кордонів."
        }
      },
      text: {
        pl: [
          "Praca z mapą jak w podręczniku i w książce nauczyciela: Mezopotamia, dwie rzeki, Ur i Babilon.",
          "Rzeki = woda dla pól i szlak dla statków."
        ],
        ua: [
          "Робота з картою як у підручнику і в книжці вчителя: Месопотамія, дві річки, Ур і Вавилон.",
          "Річки = вода для полів і шлях для човнів."
        ]
      },
      task: {
        id: "h02-map-uruk",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Nad którą rzeką założono miasto Uruk?",
          ua: "Над якою річкою засновано місто Урук?"
        },
        options: [
          { id: "a", label: { pl: "Nil", ua: "Ніл" } },
          { id: "b", label: { pl: "Eufrat", ua: "Євфрат" } },
          { id: "c", label: { pl: "Wisła", ua: "Вісла" } }
        ],
        answer: "b",
        hint: {
          pl: "Uruk leży w Sumerze, bliżej Eufratu niż Nilu.",
          ua: "Урук лежить у Шумері, ближче до Євфрату, ніж до Нілу."
        },
        explanation: {
          pl: "Uruk — miasto sumeryjskie nad Eufratem. Nil to Egipt.",
          ua: "Урук — шумерське місто над Євфратом. Ніл — це Єгипет."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Miasta na mapie", ua: "Міста на карті" },
      task: {
        id: "h02-map-miasta",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który zestaw to sumeryjskie miasta z mapy lekcji?",
          ua: "Який набір — шумерські міста з карти уроку?"
        },
        options: [
          { id: "a", label: { pl: "Gniezno, Kraków, Poznań", ua: "Гнєзно, Краків, Познань" } },
          { id: "b", label: { pl: "Uruk, Ur, Lagasz", ua: "Урук, Ур, Лагаш" } },
          { id: "c", label: { pl: "Ateny, Sparta, Rzym", ua: "Афіни, Спарта, Рим" } }
        ],
        answer: "b",
        hint: {
          pl: "Szukaj nazw przy ujściu Eufratu i Tygrysu do Zatoki Perskiej.",
          ua: "Шукай назви біля гирла Євфрату і Тигру в Перську затоку."
        },
        explanation: {
          pl: "Uruk, Ur, Lagasz — miasta Sumeru. Babilon jest później stolicą Babilonii.",
          ua: "Урук, Ур, Лагаш — міста Шумеру. Вавилон пізніше столиця Вавилонії."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ur i Babilon", ua: "Ур і Вавилон" },
      task: {
        id: "h02-map-babilon",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które zdanie o mapie jest prawdziwe?",
          ua: "Яке речення про карту правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Ur to miasto Sumeru; Babilon — stolica Babilonii w II tys. p.n.e.", ua: "Ур — місто Шумеру; Вавилон — столиця Вавилонії в II тис. до н.е." } },
          { id: "b", label: { pl: "Babilon leży nad Nilem, a Ur w Grecji", ua: "Вавилон лежить над Нілом, а Ур у Греції" } },
          { id: "c", label: { pl: "Na mapie nie ma rzek", ua: "На карті немає річок" } }
        ],
        answer: "a",
        hint: {
          pl: "Książka nauczyciela każe wskazać Ur i Babilon.",
          ua: "Книжка вчителя каже вказати Ур і Вавилон."
        },
        explanation: {
          pl: "Ur — port Sumeru przy ujściu Eufratu. Babilon — stolica później, w II tysiącleciu p.n.e.",
          ua: "Ур — порт Шумеру біля гирла Євфрату. Вавилон — столиця пізніше, в II тисячолітті до н.е."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Cywilizacja Sumerów", ua: "Цивілізація шумерів" },
      timelineYear: 3500,
      formula: "połowa IV tysiąclecia p.n.e. · ok. 3500 p.n.e.",
      text: {
        pl: [
          "Pierwszą cywilizację w Mezopotamii stworzyli Sumerowie.",
          [em("Miasto-państwo"), " to niewielkie państwo: miasto otoczone murami i najbliższa okolica."],
          "Na czele król. Urzędnicy pobierali podatki i nadzorowali pracę. Rolnicy uprawiali ziemię i kopali kanały. Rzemieślnicy robili naczynia, broń i tkaniny. Kupcy handlowali z innymi miastami."
        ],
        ua: [
          "Першу цивілізацію в Месопотамії створили шумери.",
          [em("Місто-держава"), " — невелика держава: місто в мурах і найближча околиця."],
          "На чолі цар. Урядовці збирали податки і наглядали за працею. Рільники обробляли землю і копали канали. Ремісники робили посуд, зброю і тканини. Купці торгували з іншими містами."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "W sumeryjskim mieście: Ur", ua: "У шумерському місті: Ур" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/014.png",
        file: "Historia/014.png",
        alt: { pl: "Ur: zikkurat, pałac, targ, spichlerz, kanały, żuraw", ua: "Ур: зикурат, палац, ринок, зерносховище, канали, журавель" },
        title: { pl: "Zikkurat, pałac, targ, spichlerz, żuraw", ua: "Зикурат, палац, ринок, зерносховище, журавель" },
        prompt: {
          pl: "Podpisana rekonstrukcja Ur dla klasy 5: zikkurat ze schodami, pałac przy świątyni, targowisko, spichlerz, kanały, żuraw (shaduf) przy kanale; strzałki z etykietami PL, dzień, styl podręcznika.",
          ua: "Підписана реконструкція Ура для 5 класу: зикурат, палац, ринок, зерносховище, канали, журавель (шадуф); стрілки з підписами, день, стиль підручника."
        }
      },
      text: {
        pl: [
          ["Ur — port przy ujściu Eufratu. W szczycie (XXI w. p.n.e.) ok. 65 tysięcy mieszkańców."],
          [em("Zikkurat"), " — schodkowa świątynia; na szczycie kaplica boga; przy wielkiej powodzi — schronienie."],
          "Spichlerz: zapas zboża na nieurodzaj, powódź albo wojnę. Król był też kapłanem. Pałac stał przy świątyni.",
          "Na targu: żywność, wełna, skóry, tkaniny. Z zewnątrz sprowadzano metale, kamień i drewno — tego w Mezopotamii brakowało.",
          ["Gdy rzeka opadała, kanały napełniano przy pomocy ", em("żurawi"), " (dźwignia z wiadrem i przeciwwagą)."]
        ],
        ua: [
          ["Ур — порт біля гирла Євфрату. У розквіті (XXI ст. до н.е.) бл. 65 тисяч мешканців."],
          [em("Зикурат"), " — ступінчастий храм; на вершині каплиця бога; при великій повені — сховок."],
          "Зерносховище: запас збіжжя на неврожай, повінь або війну. Цар був також жерцем. Палац стояв біля храму.",
          "На ринку: їжа, вовна, шкіри, тканини. Ззовні везли метали, камінь і дерево — цього в Месопотамії бракувало.",
          ["Коли річка спадала, канали наповнювали ", em("журавлями"), " (важіль із відром і противагою)."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Źródło: Sztandar z Ur", ua: "Джерело: Штандарт з Ура" },
      formula: "ŹRÓDŁO: zabytkowa skrzynia",
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/015.png",
        file: "Historia/015.png",
        alt: { pl: "Sztandar z Ur: uczta, zwierzęta, mieszkańcy", ua: "Штандарт з Ура: бенкет, тварини, мешканці" },
        title: { pl: "Sztandar z Ur", ua: "Штандарт з Ура" },
        prompt: {
          pl: "Zbliżenie Sztandaru z Ur dla klasy 5: mozaika z muszli i kamienia, trzy pasy — uczta, zwierzęta, ludzie; muzealne światło, bez scen okrucieństwa na pierwszym planie, podpis zabytek sumeryjski.",
          ua: "Наближення Штандарта з Ура для 5 класу: мозаїка, три смуги — бенкет, тварини, люди; музейне світло, без жорстокості на першому плані."
        }
      },
      text: {
        pl: [
          "Bogato zdobiona skrzynia z Ur. Pokazuje mieszkańców, uczty i hodowane zwierzęta.",
          "To źródło obrazkowe: mówi o życiu w mieście, nie o imionach biesiadników."
        ],
        ua: [
          "Багато оздоблена скриня з Ура. Показує мешканців, бенкети і свійських тварин.",
          "Це образне джерело: каже про життя в місті, не про імена гостей."
        ]
      },
      prompt: {
        pl: "Czego uczciwie uczy nas ten zabytek?",
        ua: "Чого чесно вчить нас ця пам’ятка?"
      },
      task: {
        id: "h02-sztandar",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Sztandar z Ur jest źródłem przede wszystkim do pytania:",
          ua: "Штандарт з Ура є джерелом передусім до питання:"
        },
        options: [
          { id: "a", label: { pl: "jak wyglądało życie i zwyczaje mieszkańców Ur", ua: "як виглядало життя і звичаї мешканців Ура" } },
          { id: "b", label: { pl: "jaka była dokładna data urodzenia każdego króla", ua: "яка була точна дата народження кожного царя" } },
          { id: "c", label: { pl: "jakie hasła nosiła dzisiejsza prasa w Iraku", ua: "які гасла мала сьогоднішня преса в Іраку" } }
        ],
        answer: "a",
        hint: {
          pl: "Podręcznik: mieszkańcy, uczty, zwierzęta.",
          ua: "Підручник: мешканці, бенкети, тварини."
        },
        explanation: {
          pl: "Widzimy stroje, uczty, hodowlę. Nie zgadujemy PESEL-i królów.",
          ua: "Бачимо строї, бенкети, худобу. Не вигадуємо паспортів царів."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dokonania Sumerów", ua: "Досягнення шумерів" },
      text: {
        pl: [
          ["Najważniejsze: ", em("pismo klinowe"), " — znaki odciskane trzciną na glinianych tabliczkach."],
          ["Przypisuje im się też ", em("żagiel"), ", ", em("koło"), " (wozy) i ", em("koło garncarskie"), "."],
          "Matematyka: liczenie o podstawie 60. Do dziś godzina ma 60 minut, minuta 60 sekund. Tym systemem liczymy też kąty."
        ],
        ua: [
          ["Найважливіше: ", em("клинопис"), " — знаки, відтиснуті очеретом на глиняних табличках."],
          ["Їм приписують також ", em("вітрило"), ", ", em("колесо"), " (вози) і ", em("гончарне коло"), "."],
          "Математика: лічба з основою 60. Досі година має 60 хвилин, хвилина 60 секунд. Цією системою рахуємо і кути."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Pięć wynalazków, które zostały", ua: "П’ять винаходів, що лишилися" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/016.png",
        file: "Historia/016.png",
        alt: { pl: "Pismo, żagiel, koło, koło garncarskie, system 60", ua: "Письмо, вітрило, колесо, гончарне коло, система 60" },
        title: { pl: "Dokonania Sumerów", ua: "Досягнення шумерів" },
        prompt: {
          pl: "Infografika dla klasy 5, pięć ikon: tabliczka klinowa, łódka z żaglem, wóz z kołami, ręce przy kole garncarskim, zegar z liczbą 60; białe tło, podpisy PL, styl szkolny.",
          ua: "Інфографіка для 5 класу, п’ять іконок: табличка клинопису, човен з вітрилом, віз, гончарне коло, годинник із 60; білий фон, підписи, шкільний стиль."
        }
      },
      text: {
        pl: ["Najpierw liczono zboże i stada. Potem spisano opowieści i prawa."],
        ua: ["Спочатку рахували збіжжя і стада. Потім записали оповіді і закони."]
      }
    },
    {
      type: "concept",
      heading: { pl: "W Babilonii: Hammurabi", ua: "У Вавилонії: Хаммурапі" },
      formula: "II tys. p.n.e. · szczyt: XVIII wiek p.n.e.",
      text: {
        pl: [
          "W II tysiącleciu p.n.e. nad tymi samymi rzekami wyrosła Babilonia. Stolica: Babilon — mury, świątynie, pałace, handel.",
          ["Szczyt potęgi: XVIII wiek p.n.e., król ", em("Hammurabi"), ". Podbił dużą część Mezopotamii, także miasta Sumerów."],
          ["Kazał spisać ", em("Kodeks Hammurabiego"), " — jeden z najstarszych zbiorów praw. Kary surowe (np. „oko za oko, ząb za ząb”)."],
          "Babilończycy przejęli wynalazki Sumerów. Sami: duże liczby i ułamki, astronomia, kalendarz 12 miesięcy i tydzień z 7 dni — bliski naszemu."
        ],
        ua: [
          "У II тисячолітті до н.е. над тими самими річками виросла Вавилонія. Столиця: Вавилон — мури, храми, палаци, торгівля.",
          ["Вершина могутності: XVIII століття до н.е., цар ", em("Хаммурапі"), ". Підкорив велику частину Месопотамії, також міста шумерів."],
          ["Наказав записати ", em("Кодекс Хаммурапі"), " — одну з найдавніших збірок законів. Кари суворі (напр. «око за око, зуб за зуб»)."],
          "Вавилоняни перейняли винаходи шумерів. Самі: великі числа і дроби, астрономія, календар 12 місяців і тиждень із 7 днів — близький до нашого."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Kodeks w kamieniu", ua: "Кодекс у камені" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/017.png",
        file: "Historia/017.png",
        alt: { pl: "Stele Hammurabiego: król, bóg, pismo klinowe", ua: "Стела Хаммурапі: цар, бог, клинопис" },
        title: { pl: "Kodeks Hammurabiego", ua: "Кодекс Хаммурапі" },
        prompt: {
          pl: "Trzy czytelne ujęcia dla klasy 5: cała stela, zbliżenie pisma klinowego, płaskorzeźba król + bóg wręcza symbole władzy; muzealne światło, bez przemocy, podpisy PL.",
          ua: "Три читабельні кадри для 5 класу: ціла стела, клинопис зблизька, рельєф цар + бог; музейне світло, без насильства, підписи."
        }
      },
      text: {
        pl: ["Źródło obrazkowe: władza (król) i bóg, a pod spodem prawo wyryte w kamieniu — żeby było wiadomo, jaka kara."],
        ua: ["Образне джерело: влада (цар) і бог, а внизу право, вибите в камені — щоб було відомо, яка кара."]
      }
    },
    {
      type: "example",
      heading: { pl: "Źródło: Herodot o Babilonie", ua: "Джерело: Геродот про Вавилон" },
      formula: "ŹRÓDŁO (adaptacja)",
      text: {
        pl: [
          "Grecki historyk Herodot (V w. p.n.e.) opisał Babilon: głęboki rów z wodą, wysoki mur z wieżami, droga na murze tak szeroka, że mogła jechać czwórka koni, sto bram, w świątyni wieża na wieży — aż do ośmiu.",
          "To relacja cudzoziemca, spisana później. Mówi o wyglądzie i obronie miasta — nie o imionach strażników."
        ],
        ua: [
          "Грецький історик Геродот (V ст. до н.е.) описав Вавилон: глибокий рів із водою, високий мур із вежами, дорога на мурі така широка, що могла їхати четвірка коней, сто брам, у храмі вежа на вежі — аж до восьми.",
          "Це розповідь чужинця, записана пізніше. Каже про вигляд і захист міста — не про імена вартових."
        ]
      },
      prompt: {
        pl: "Co źródło mówi? Jak miasto było zabezpieczone?",
        ua: "Що каже джерело? Як місто було захищене?"
      },
      task: {
        id: "h02-src-herodot",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Według opisu Herodota Babilon bronił się głównie dzięki:",
          ua: "За описом Геродота Вавилон захищався головно завдяки:"
        },
        options: [
          { id: "a", label: { pl: "rowowi z wodą, wysokiemu murowi, wieżom i bramom", ua: "рову з водою, високому муру, вежам і брамам" } },
          { id: "b", label: { pl: "wielkiej flocie na Wiśle", ua: "великому флоту на Віслі" } },
          { id: "c", label: { pl: "temu, że nie miał żadnych murów", ua: "тому, що не мав жодних мурів" } }
        ],
        answer: "a",
        hint: {
          pl: "W tekście są: rów, mur, wieże, bramy.",
          ua: "У тексті є: рів, мур, вежі, брами."
        },
        explanation: {
          pl: "Herodot podkreśla fortyfikacje. Nie mylić z opisem Warszawy.",
          ua: "Геродот підкреслює укріплення. Не плутати з описом Варшави."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Mezopotamia dziś (mapa)", ua: "Месопотамія нині (карта)" },
      text: {
        pl: ["Książka nauczyciela (poziom wyższy): wskaż współczesne państwa na tym obszarze."],
        ua: ["Книжка вчителя (вищий рівень): вкажи сучасні держави на цій території."]
      },
      task: {
        id: "h02-map-dzis",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Na terenie dawnej Mezopotamii leżą dziś m.in.:",
          ua: "На терені давньої Месопотамії лежать нині зокрема:"
        },
        options: [
          { id: "a", label: { pl: "Irak, a także m.in. Syria i Turcja", ua: "Ірак, а також зокрема Сирія і Туреччина" } },
          { id: "b", label: { pl: "tylko Polska i Litwa", ua: "лише Польща і Литва" } },
          { id: "c", label: { pl: "Japonia i Australia", ua: "Японія і Австралія" } }
        ],
        answer: "a",
        hint: {
          pl: "Podręcznik we „Współcześnie”: Irak, Turcja, Syria; stolica Iraku — Bagdad.",
          ua: "Підручник у «Сучасності»: Ірак, Туреччина, Сирія; столиця Іраку — Багдад."
        },
        explanation: {
          pl: "To nie „zamiast” starożytności. To ta sama ziemia, inne państwa.",
          ua: "Це не «замість» давнини. Це та сама земля, інші держави."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Bliski Wschód — styk Europy, Azji i Afryki", ua: "Близький Схід — стик Європи, Азії і Африки" },
        { pl: "cywilizacja — miasta, pismo i własne państwo", ua: "цивілізація — міста, письмо і власна держава" },
        { pl: "kanały nawadniające — rowy, którymi woda idzie na pola", ua: "зрошувальні канали — рови, якими вода йде на поля" },
        { pl: "miasto-państwo — miasto z okolicą, rządzone przez króla", ua: "місто-держава — місто з околицею, яким править цар" },
        { pl: "pismo klinowe — znaki na glinie, odciskane trzciną", ua: "клинопис — знаки на глині, відтиснуті очеретом" },
        { pl: "zikkurat — schodkowa świątynia w Mezopotamii", ua: "зикурат — ступінчастий храм у Месопотамії" },
        { pl: "żuraw — dźwignia do podnoszenia wody do kanału", ua: "журавель — важіль, щоб піднімати воду в канал" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Dlaczego pierwsze cywilizacje powstały nad wielkimi rzekami?"],
        ua: ["Чому перші цивілізації виникли над великими річками?"]
      },
      task: {
        id: "h02-guided-rzeki",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co rzeka dawała rolnikom Mezopotamii?",
          ua: "Що річка давала рільникам Месопотамії?"
        },
        options: [
          { id: "a", label: { pl: "tylko ładny widok bez plonów", ua: "лише гарний краєвид без урожаю" } },
          { id: "b", label: { pl: "wodę, żyzny muł i drogę dla handlu", ua: "воду, родючий мул і шлях для торгівлі" } },
          { id: "c", label: { pl: "śnieg do sanek", ua: "сніг для санок" } }
        ],
        answer: "b",
        hint: {
          pl: "Pomyśl o wylewie, mule i łodziach.",
          ua: "Подумай про розлив, мул і човни."
        },
        explanation: {
          pl: "Woda + muł = plony. Rzeka = także szlak. Stąd miasta.",
          ua: "Вода + мул = урожаї. Річка = також шлях. Звідси міста."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Mezopotamia leżała nad Nilem, Sumerowie budowali piramidy, a koło wynaleźli Rzymianie.”",
        ua: "«Месопотамія лежала над Нілом, шумери будували піраміди, а колесо винайшли римляни.»"
      },
      text: {
        pl: [
          "Nil to Egipt. Mezopotamia to Eufrat i Tygrys.",
          "Sumerowie stawiali zikkuraty z cegły. Piramidy kamienne — Egipt. Koło — dokonanie Sumerów (w tym temacie podręcznika)."
        ],
        ua: [
          "Ніл — це Єгипет. Месопотамія — Євфрат і Тигр.",
          "Шумери ставили зикурати з цегли. Кам’яні піраміди — Єгипет. Колесо — досягнення шумерів (у цій темі підручника)."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Co wynaleźli Sumerowie?", ua: "Що винайшли шумери?" },
      task: {
        id: "h02-dokonania",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które dokonania podręcznik przypisuje Sumerom?",
          ua: "Які досягнення підручник приписує шумерам?"
        },
        options: [
          { id: "a", label: { pl: "pismo, koło, żagiel i koło garncarskie", ua: "письмо, колесо, вітрило і гончарне коло" } },
          { id: "b", label: { pl: "proch i kompas", ua: "порох і компас" } },
          { id: "c", label: { pl: "drukarnię Gutenberga", ua: "друкарню Гутенберга" } }
        ],
        answer: "a",
        hint: {
          pl: "Najważniejsze było pismo. Reszta: transport i rzemiosło.",
          ua: "Найважливішим було письмо. Решта: транспорт і ремесло."
        },
        explanation: {
          pl: "To lista z podsumowania tematu. System 60 też jest ich pomysłem.",
          ua: "Це список із підсумку теми. Система 60 теж їхня думка."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wyjaśnij własnymi słowami, w jaki sposób doszło do powstania pierwszych państw sumeryjskich.",
        ua: "Поясни своїми словами, як виникли перші шумерські держави."
      },
      text: {
        pl: [
          "Podpowiedź: rzeka → kanały → wielu robotników → nadzorca → król i miasto-państwo.",
          "Powiedz 3–4 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: річка → канали → багато робітників → наглядач → цар і місто-держава.",
          "Скажи 3–4 речення. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h02-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje powstanie państw Sumerów?",
          ua: "Яке речення найкраще передає виникнення держав шумерів?"
        },
        options: [
          { id: "a", label: { pl: "Państwa powstały, bo ktoś znalazł gotową koronę na pustyni", ua: "Держави виникли, бо хтось знайшов готову корону в пустелі" } },
          { id: "b", label: { pl: "Wspólna praca przy kanałach wymagała władzy — z niej wyrosły miasta-państwa", ua: "Спільна праця біля каналів потребувала влади — з неї виросли міста-держави" } },
          { id: "c", label: { pl: "Sumerowie skopiowali ustrój Aten", ua: "Шумери скопіювали устрій Афін" } }
        ],
        answer: "b",
        hint: {
          pl: "Podręcznik łączy kanały, nadzór i władzę.",
          ua: "Підручник єднає канали, нагляд і владу."
        },
        explanation: {
          pl: "Nie magia korony. Organizacja wody → państwo.",
          ua: "Не магія корони. Організація води → держава."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wymień najważniejsze dokonania cywilizacji Sumerów (krótko).",
        ua: "Назви найважливіші досягнення цивілізації шумерів (коротко)."
      },
      task: {
        id: "h02-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wpisz najważniejsze słowo-dokonanie Sumerów (to, od którego zaczyna się historia zapisana).",
          ua: "Введи найважливіше слово-досягнення шумерів (те, від якого починається записана історія)."
        },
        answer: ["pismo", "pismo klinowe", "klinowe", "письмо", "клинопис"],
        hint: {
          pl: "Podręcznik mówi: najważniejsze było stworzenie pisma.",
          ua: "Підручник каже: найважливішим було створення письма."
        },
        explanation: {
          pl: "Pismo. Potem: koło, żagiel, koło garncarskie, system 60.",
          ua: "Письмо. Потім: колесо, вітрило, гончарне коло, система 60."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Oko za oko", ua: "Око за око" },
      task: {
        id: "h02-kodeks",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Zasada „oko za oko, ząb za ząb” w Kodeksie Hammurabiego oznacza głównie:",
          ua: "Засада «око за око, зуб за зуб» у Кодексі Хаммурапі означає головно:"
        },
        options: [
          { id: "a", label: { pl: "że kara ma być podobna do szkody — prawo jest surowe i jasne", ua: "що кара має бути подібна до шкоди — право суворе і ясне" } },
          { id: "b", label: { pl: "że w Babilonie nie było żadnych praw", ua: "що у Вавилоні не було жодних законів" } },
          { id: "c", label: { pl: "że każdy mógł wybaczyć wszystko bez sądu", ua: "що кожен міг усе вибачити без суду" } }
        ],
        answer: "a",
        hint: {
          pl: "To nie żart. To surowe, spisane prawo.",
          ua: "Це не жарт. Це суворе, записане право."
        },
        explanation: {
          pl: "Kodeks pokazuje, że państwo chce ładu przez znane kary. Dla nas dziś wiele z nich jest okrutnych — to też wniosek historyka.",
          ua: "Кодекс показує, що держава хоче ладу через відомі кари. Для нас сьогодні багато з них жорстокі — це теж висновок історика."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co zostało do dziś?", ua: "Що лишилося досі?" },
      task: {
        id: "h02-60",
        type: "true-false",
        level: "C",
        question: {
          pl: "Podział godziny na 60 minut ma korzenie w matematyce Sumerów — prawda czy fałsz?",
          ua: "Поділ години на 60 хвилин має коріння в математиці шумерів — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Podstawa 60. Spójrz na zegarek.",
          ua: "Основа 60. Подивись на годинник."
        },
        explanation: {
          pl: "System sześćdziesiątkowy Sumerów żyje w czasie i w kątach (360°).",
          ua: "Шістдесяткова система шумерів живе в часі і в кутах (360°)."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h02-check-rzeki",
        type: "input-text",
        level: "A",
        question: {
          pl: "Wpisz nazwy dwóch rzek Mezopotamii, połączone spójnikiem i.",
          ua: "Введи назви двох річок Месопотамії, зі сполучником i."
        },
        answer: [
          "tygrys i eufrat", "eufrat i tygrys",
          "тигр і євфрат", "євфрат і тигр"
        ],
        hint: {
          pl: "Nazwa krainy znaczy „między rzekami”.",
          ua: "Назва краю означає «між річками»."
        },
        explanation: {
          pl: "Tygrys i Eufrat.",
          ua: "Тигр і Євфрат."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h02-check-hammurabi",
        type: "true-false",
        level: "B",
        question: {
          pl: "Hammurabi, król Babilonu w XVIII w. p.n.e., kazał spisać surowy kodeks praw — prawda czy fałsz?",
          ua: "Хаммурапі, цар Вавилона в XVIII ст. до н.е., наказав записати суворий кодекс законів — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To punkt z podsumowania w podręczniku.",
          ua: "Це пункт із підсумку в підручнику."
        },
        explanation: {
          pl: "Babilonia, Hammurabi, Kodeks — kanon klasy 5.",
          ua: "Вавилонія, Хаммурапі, Кодекс — канон 5 класу."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Najstarsze cywilizacje powstawały nad wielkimi rzekami — wylewy dawały warunki do rolnictwa. Jedna z nich: Mezopotamia na Bliskim Wschodzie, między Tygrysem i Eufratem.",
          ["wielkimi rzekami", "Mezopotamia", "Tygrysem", "Eufratem"],
          "Найдавніші цивілізації виникали над великими річками — розливи давали умови для рільництва. Одна з них: Месопотамія на Близькому Сході, між Тигром і Євфратом.",
          ["великими річками", "Месопотамія", "Тигром", "Євфратом"]
        ),
        mark(
          "Najstarsze państwa założyli w IV tysiącleciu p.n.e. Sumerowie. Były to miasta-państwa: miasto + najbliższa okolica.",
          ["IV tysiącleciu p.n.e.", "Sumerowie", "miasta-państwa"],
          "Найдавніші держави заснували в IV тисячолітті до н.е. шумери. Це були міста-держави: місто + найближча околиця.",
          ["IV тисячолітті до н.е.", "шумери", "міста-держави"]
        ),
        mark(
          "Najważniejsze dokonanie Sumerów: pismo. Przypisuje im się też koło, żagiel i koło garncarskie.",
          ["pismo", "koło garncarskie", "żagiel", "koło"],
          "Найважливіше досягнення шумерів: письмо. Їм приписують також колесо, вітрило і гончарне коло.",
          ["письмо", "колесо", "вітрило", "гончарне коло"]
        ),
        mark(
          "W II tys. p.n.e. powstała Babilonia. Hammurabi (XVIII w. p.n.e.) kazał spisać surowy Kodeks. Babilończycy — matematycy i astronomowie; kalendarz bliski naszemu (12 miesięcy, 7-dniowy tydzień).",
          ["Babilonia", "Hammurabi", "Kodeks", "kalendarz"],
          "У II тис. до н.е. виникла Вавилонія. Хаммурапі (XVIII ст. до н.е.) наказав записати суворий Кодекс. Вавилоняни — математики й астрономи; календар близький до нашого (12 місяців, 7-денний тиждень).",
          ["Вавилонія", "Хаммурапі", "Кодекс", "календар"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następny temat: Egipt — też cywilizacja wielkiej rzeki, ale Nil, faraon i piramidy.",
          "Porównaj: ta sama potrzeba wody, inna rzeka, inna władza.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Єгипет — теж цивілізація великої річки, але Ніл, фараон і піраміди.",
          "Порівняй: та сама потреба води, інша річка, інша влада.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "5rJapXuLulg",
        title: {
          pl: "Krótkie Lekcje: Miasta-państwa Mezopotamii",
          ua: "Короткі уроки: Міста-держави Месопотамії"
        }
      }
    }
  ]
};
