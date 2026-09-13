function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_AKW = "Styl: akwarela podręcznikowa GWO klasa 5, mit grecki, podwodne światło. Zero napisów na kadrze, zero znaku wodnego. PNG 16:9.";
var IMG_STYLE_SCH = "Styl: infografika szkolna, etykiety po polsku ze strzałkami. Zero znaku wodnego. PNG.";

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
      formula: "s. 53–54  ·  Jan Parandowski  ·  Królestwo morza",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec. Polski mit jest pierwszy. Włącz 🇺🇦 — pod akapitem tłumaczenie. Dziś czytamy i zbieramy materiał. *List i opis* piszemy na lekcji 25. Glosy z pól i klucze są schowane. […] zostawiamy.",
        ua: "Це перевірка наприкінці. Польський міф перший. Увімкни 🇺🇦. Сьогодні читаємо і збираємо матеріал. *Лист і опис* — урок 25. Глоси і ключі сховані. […] залишаємо."
      },
      items: [
        { pl: "opowiem treść mitu *Królestwo morza*;", ua: "розкажу зміст міфу *Królestwo morza*;" },
        { pl: "wskażę elementy *świata przedstawionego*;", ua: "вкажу елементи *зображеного світу*;" },
        { pl: "zbiorę informacje o *Amfitrycie*;", ua: "зберу відомості про *Амфітріту*;" },
        { pl: "wyszukam fragment o pałacu i dobiorę *określenia* do schematu.", ua: "знайду уривок про палац і доберу *означення* до схеми." }
      ],
      task: {
        id: "t24-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Opowiedzieć, kto, gdzie i jak przekonał Amfitrytę.", ua: "Розповісти, хто, де і як переконав Амфітріту." } },
          { id: "b", label: { pl: "Nazwać elementy świata przedstawionego (miejsce, czas, bohaterowie).", ua: "Назвати елементи зображеного світу (місце, час, герої)." } },
          { id: "c", label: { pl: "Od razu napisać cały list do Okeanosa bez schematu.", ua: "Одразу написати весь лист до Океана без схеми." } },
          { id: "d", label: { pl: "Zebrać określenia pałacu ze słów delfina.", ua: "Зібрати означення палацу зі слів дельфіна." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "List jest zadaniem 6 na s. 55 — jutro.",
          ua: "Лист — завдання 6 на с. 55, завтра."
        },
        explanation: {
          pl: "Dziś: mit, świat, Amfitryta, pałac. List, zaproszenie i makieta — lekcja 25.",
          ua: "Сьогодні: міф, світ, Амфітріта, палац. Лист, запрошення і макет — урок 25."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Wyobrażenia o głębinach mórz", ua: "Уявлення про морські глибини" },
      formula: "s. 53  ·  po rzeczowniku",
      promptPlace: "before",
      prompt: {
        pl: "To *nie* mit Markowskiej o Prometeuszu i nie e-mail Wiktora. Autor: *Jan Parandowski*. Tytuł: *Królestwo morza*. Źródło: *Mitologia. Wierzenia i podania Greków i Rzymian*.",
        ua: "Це *не* міф Марковської про Прометея і не e-mail Віктора. Автор: *Ян Парандовський*. Назва: *Królestwo morza*. Джерело: *Mitologia…*"
      },
      text: {
        pl: [
          "Dział podręcznika: *Wyobrażenia o głębinach mórz.* Program: *Jak wygląda pałac władcy mórz?*",
          "Czytamy, żeby jutro *opisać* pałac i *napisać list* w imieniu Amfitryty. Bez tego tekstu nie ma czego wkładać do listu.",
          "W podręczniku imię bywa rozstrzelone: A m f i t r y t a. U nas: *Amfitryta*."
        ],
        ua: [
          "Розділ підручника: *Wyobrażenia o głębinach mórz.* Програма: *Який вигляд має палац володаря морів?*",
          "Читаємо, щоб завтра *описати* палац і *написати лист* від імені Амфітріти.",
          "У підручнику ім’я інколи розряджене. У нас: *Amfitryta*."
        ]
      },
      task: {
        id: "t24-s02-autor",
        type: "single-choice",
        question: {
          pl: "Kto napisał *Królestwo morza* z tej lekcji?",
          ua: "Хто написав *Królestwo morza* з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Jan Parandowski (fragment *Mitologii*).", ua: "Ян Парандовський (уривок *Міфології*)." } },
          { id: "b", label: { pl: "Wanda Markowska (*Prometeusz*).", ua: "Ванда Марковська (*Prometeusz*)." } },
          { id: "c", label: { pl: "Anna Murdzek (*Demeter i Kora*).", ua: "Анна Мурджек (*Demeter i Kora*)." } }
        ],
        answer: "a",
        hint: {
          pl: "Nagłówek s. 53: JAN PARANDOWSKI.",
          ua: "Заголовок с. 53: JAN PARANDOWSKI."
        },
        explanation: {
          pl: "Parandowski. Markowska — lekcja 21. Murdzek — 19–20.",
          ua: "Парандовський. Марковська — урок 21. Мурджек — 19–20."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Naksos, odraza", ua: "Читаємо · Наксос, огида" },
      formula: "s. 53  ·  początek",
      visual: vizGh("t24-naksos.png", {
        alt: {
          pl: "Uczta na Naksos: Posejdon patrzy na tańczącą Amfitrytę",
          ua: "Бенкет на Наксосі: Посейдон дивиться на Амфітріту"
        },
        title: { pl: "Slajd · Naksos", ua: "Слайд · Наксос" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: uczta na Naksos. Posejdon z ciemną brodą. Amfitryta o jasnych warkoczach tańczy z okeanidami. Stary Okeanos. Zero liter.",
          ua: "Бенкет на Наксосі. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj po polsku. Szukaj: *kto się zakochał, gdzie, kogo panna nie chciała i dlaczego*. Włącz 🇺🇦.",
        ua: "Читай польською. Шукай: *хто закохався, де, кого панночка не хотіла і чому*. Увімкни 🇺🇦."
      },
      text: {
        pl: [
          "Posejdon mógł się teraz ożenić. Chciał nawet tego bardzo, albowiem się zakochał. Razu pewnego był na wyspie *Naksos*, na przyjęciu, które wydawał stary bóg wodny *Okeanos*. Po uczcie tańczyły jego córki, a z nich najpiękniejsza była *Amfitryta* o jasnych warkoczach. Posejdon oświadczył się ojcu o jej rękę i został przyjęty. Lecz panna go nie chciała. Czuła doń po prostu odrazę.",
          "Posejdon nie był brzydki, ale pomimo potężnej budowy ciała nie mógł uchodzić za ideał piękności. Miał śniadą cerę, włosy zwichrzone i nadmiernie bujne, brodę wiecznie wilgotną i pełną mułu, a oczy jego, palące się złowrogo pod krzaczastymi brwiami, budziły przestrach w lękliwym sercu dziewczyny."
        ],
        ua: [
          "Посейдон міг тепер одружитися. Дуже цього хотів, бо закохався. Якось був на острові *Наксос*, на прийнятті, яке давав старий водний бог *Океан*. Після учти танцювали його доньки, а з них найвродливішою була *Амфітріта* зі світлими косами. Посейдон посватався до батька і був прийнятий. Але панночка його не хотіла. Просто відчувала огиду.",
          "Посейдон не був потворним, але попри могутню статуру не міг бути ідеалом вроди. Мав смагляву шкіру, кучеряве буйне волосся, бороду завжди вологу і повну мулу, а очі, що зловісно горіли під кущистими бровами, будили жах у полохливому серці дівчини."
        ]
      },
      task: {
        id: "t24-s03-odraza",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest na początku fragmentu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є на початку уривка? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Posejdon zakochał się w Amfitrycie na Naksos, na uczcie Okeanosa.", ua: "Посейдон закохався в Амфітріту на Наксосі, на учті Океана." } },
          { id: "b", label: { pl: "Ojciec przyjął oświadczyny, ale panna czuła odrazę.", ua: "Батько прийняв сватанки, але панночка відчувала огиду." } },
          { id: "c", label: { pl: "Amfitryta od razu usiadła na tronie obok Prometeusza.", ua: "Амфітріта одразу сіла на трон поруч із Прометеєм." } },
          { id: "d", label: { pl: "Broda pełna mułu i złowrogie oczy płoszyły dziewczynę.", ua: "Борода повна мулу і зловісні очі лякали дівчину." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Prometeusz jest z lekcji 21. Kto tu stoi obok Amfitryty?",
          ua: "Прометей з уроку 21. Хто тут стоїть біля Амфітріти?"
        },
        explanation: {
          pl: "Naksos, Okeanos, odraza, muł w brodzie. Prometeusz — inna lekcja.",
          ua: "Наксос, Океан, огида, мул у бороді. Прометей — інший урок."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · delfin posłańcem", ua: "Читаємо · дельфін посланцем" },
      formula: "s. 53  ·  glosa lec u stóp",
      visual: vizGh("t24-delfin.png", {
        alt: {
          pl: "Delfin podpływa do smutnego Posejdona w pustym pałacu",
          ua: "Дельфін підпливає до сумного Посейдона в порожньому палаці"
        },
        title: { pl: "Slajd · delfin", ua: "Слайд · дельфін" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: pod wodą smutny Posejdon na kamiennym tronie. Mądry delfin podpływa. Zero liter.",
          ua: "Дельфін і Посейдон. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Pole: *lec u stóp – okazać pokorę, uległość wobec kogoś.* W tekście: *co legnie całe u jej stóp*. Kto obiecuje załatwić ślub?",
        ua: "Поле: *lec u stóp – виявити покірність.* У тексті: *co legnie całe u jej stóp*. Хто обіцяє влаштувати шлюб?"
      },
      text: {
        pl: [
          "Smutny wrócił Posejdon do swego samotnego pałacu w głębinach morza. Wówczas podpłynął ku niemu *delfin*, najmądrzejsze ze stworzeń zamieszkujących przestworza wód, i obiecał Posejdonowi, że sam wszystko pomyślnie załatwi.",
          "Nazajutrz był u Amfitryty i opowiadał jej o niezmiernych bogactwach wszechwładnego pana wodnego żywiołu, o jego posiadłościach, które zdają się nie mieć granic, o dziwnych mieszkańcach morza, co *legnie całe u jej stóp* i będzie jej cześć oddawało jako swej królowej:"
        ],
        ua: [
          "Сумний повернувся Посейдон до свого самотнього палацу в морських глибинах. Тоді до нього підплив *дельфін*, наймудріша зі істот водних просторів, і пообіцяв, що сам усе щасливо владнає.",
          "Наступного дня був у Амфітріти і розповідав про незмірні багатства всевладного пана водної стихії, про володіння без меж, про дивних мешканців моря, що *ляжуть усіма до її ніг* і віддаватимуть їй шану як своїй королеві:"
        ]
      },
      task: {
        id: "t24-s04-delfin",
        type: "single-choice",
        question: {
          pl: "Kto i jak pomaga przekonać Amfitrytę?",
          ua: "Хто і як допомагає переконати Амфітріту?"
        },
        options: [
          { id: "a", label: { pl: "Delfin: idzie do niej i opowiada o bogactwach, posiadłościach i czci królowej.", ua: "Дельфін: іде до неї і розповідає про багатства, володіння і шану королеви." } },
          { id: "b", label: { pl: "Hera zsyła piorun, a Wiktor pisze e-mail z Kairu.", ua: "Гера шле блискавку, а Віктор пише e-mail з Каїра." } },
          { id: "c", label: { pl: "Prometeusz kradnie ogień z rydwanu Heliosa.", ua: "Прометей краде вогонь з колісниці Геліоса." } }
        ],
        answer: "a",
        hint: {
          pl: "Najmądrzejsze ze stworzeń wód. Co obiecał?",
          ua: "Наймудріша зі водних істот. Що пообіцяв?"
        },
        explanation: {
          pl: "Delfin jest posłańcem i mówcą. Hera, Wiktor, Prometeusz — inne lekcje.",
          ua: "Дельфін — посланець і промовець. Гера, Віктор, Прометей — інші уроки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · pałac błękitny", ua: "Читаємо · блакитний палац" },
      formula: "s. 53  ·  słowa delfina",
      visual: vizGh("t24-palac.png", {
        alt: {
          pl: "Podwodny pałac: muszle, perły, korale, światło",
          ua: "Підводний палац: мушлі, перли, корали, світло"
        },
        title: { pl: "Slajd · pałac Posejdona", ua: "Слайд · палац Посейдона" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: błękitny pałac, dach z muszli i pereł, bursztynowe okna, żywe kwiaty, korale, gwiazdy morskie, gąbki jak karły, deszcz kolorowych kulek. Zero liter.",
          ua: "Підводний палац. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "To najważniejszy opis w lekcji — jutro z niego zrobisz *opis i list*. Pola: *odpływ, szafirowe, alga, gąbki, karzeł, głowonóg, purpurowy*. Zaznacz w głowie rzeczownik + określenie.",
        ua: "Це найважливіший опис — завтра з нього буде *опис і лист*. Поля: *odpływ, szafirowe, alga, gąbki, karzeł, głowonóg, purpurowy*. Шукай іменник + означення."
      },
      text: {
        pl: [
          "„Mieszka on w pałacu *błękitnym*, który ma dach z muszli, a one w czasie *odpływu* otwierają się, ukazując wewnątrz cudne *perły*. Ze ścian wyrastają żywe *kwiaty*, a przez okna z *bursztynu* zaglądają ryby. W sadzie pałacowym drzewa *szafirowe* i czerwone rodzą złote owoce. *Algi* układają się na powierzchni fal, aby światło, przechodząc przez nie, mieniło się barwami tęczy.",
          "Wśród gałęzi korali zabłąkane *gwiazdy morskie* rozniecają słabe, migotliwe światełka. Pająki mkną szybko na szczudłowatych nogach, lilie morskie wyrastają z dna jak drobne palmy o wielolistnej koronie. *Gąbki* szkliście wyglądają jak małe *karły* o wielkich siwych brodach, a gdy przepłynie orszak świecących *głowonogów*, w prześlicznej grze barw sypią się z góry błękitne, czerwone i białe skrzące się kulki, które opadają jak deszcz gwiazd różnokolorowych. Kiedy morze jest spokojne, widać z głębi słońce niby otwarty kielich wielkiego *purpurowego* kwiatu”."
        ],
        ua: [
          "«Живе він у палаці *блакитному*, що має дах із мушель, а вони під час *відпливу* розкриваються, показуючи всередині чудові *перли*. Зі стін виростають живі *квіти*, а крізь вікна з *бурштину* заглядають риби. У палацовому саду дерева *сапфірові* і червоні родють золоті плоди. *Водорості* лягають на поверхні хвиль, щоб світло, проходячи крізь них, грало барвами райдуги.",
          "Серед гілок коралів заблукалі *морські зірки* запалюють слабке мерехтливе світло. Павуки мчать на ходульних ногах, морські лілії ростуть з дна як маленькі пальми з багатолистою кроною. *Губки* скляно виглядають як малі *карлики* з великими сивими бородами, а коли пропливе почет сяючих *головоногих*, у грі барв сиплються згори блакитні, червоні і білі іскристі кульки, що падають як дощ різнобарвних зірок. Коли море спокійне, з глибини видно сонце наче розкриту чашечку великої *пурпурової* квітки»."
        ]
      },
      task: {
        id: "t24-s05-palac",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO należy do pałacu w słowach delfina? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО належить до палацу в словах дельфіна? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Dach z muszli i perły przy odpływie; okna z bursztynu.", ua: "Дах із мушель і перли при відпливі; вікна з бурштину." } },
          { id: "b", label: { pl: "Drzewa szafirowe i czerwone ze złotymi owocami.", ua: "Сапфірові і червоні дерева із золотими плодами." } },
          { id: "c", label: { pl: "Piramida Cheopsa i żaglówka na Nilu.", ua: "Піраміда Хеопса і вітрильник на Нілі." } },
          { id: "d", label: { pl: "Słońce z głębi jak kielich purpurowego kwiatu.", ua: "Сонце з глибини як чашечка пурпурової квітки." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Cheops był w e-mailu Wiktora, lekcja 22.",
          ua: "Хеопс був в e-mail Віктора, урок 22."
        },
        explanation: {
          pl: "Cały opis jest w cudzysłowie — to mowa delfina. Egipt to inna lekcja.",
          ua: "Весь опис у лапках — мова дельфіна. Єгипет — інший урок."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · królowa i trójząb", ua: "Читаємо · королева і тризуб" },
      formula: "s. 53–54  ·  zostaw […]",
      promptPlace: "before",
      prompt: {
        pl: "Pola: *nimfa, szmaragdowy, rydwan, nieopatrznie, uśmierzać, trójząb, wartki.* Znak […] = podręcznik opuścił kawałek — nic nie dopisujemy.",
        ua: "Поля: *nimfa, szmaragdowy, rydwan, nieopatrznie, uśmierzać, trójząb, wartki.* Знак […] = підручник пропустив шматок."
      },
      text: {
        pl: [
          "*Nimfa* zamyśliła się, potem zapytała jeszcze o to i owo, a w kilka dni później zasiadła na *szmaragdowym* tronie obok Posejdona jako królowa morza.",
          "[…] Delfin nie kłamał. Życie Amfitryty było naprawdę rozkoszne. Otaczał ją dwór tak wspaniały, jakiego nie miała Hera, królowa nieba. Zbiegły się do niej wszystkie siostry, *okeanidy*, córki starca morskiego Okeanosa. A było ich trzy tysiące. Gdy płynęły dokoła jej *rydwany*, fale okrywały się białą pianą, jak gdyby wszystkie srebrne obłoki spadły z nieba na wodę. Służyło jej pięćdziesiąt *nereid*. Było to boginki wesołe, które witały swą panią śpiewem i zapraszały do tańca. Lecz Amfitrycie nie wypadało tańczyć, więc tylko siadała w lekkim gronie na jakiejś skale, a one, rozłożywszy się u jej stóp, czesały swe zielone włosy.",
          "[…]",
          "Nad morzem panuje wszechwładna wola Posejdona. W głębi swego podmorskiego pałacu wie wszystko, co się dzieje na ruchliwej powierzchni. Gdy wiatry *nieopatrznie* wzburzają fale, zjawia się Posejdon i jednym spojrzeniem ciemnych oczu *uśmierza* bałwany, a burze niesforne przegania. *Trójząb* dźwiga okręty uwięzione wśród skał lub osiadłe na mieliznach, a rozbitkom posyła *wartkie* prądy, które ich niosą do bezpiecznych brzegów.",
          "Fragment książki *Mitologia. Wierzenia i podania Greków i Rzymian*."
        ],
        ua: [
          "*Німфа* замислилась, потім ще про дещо запитала, а за кілька днів сіла на *смарагдовий* трон поруч із Посейдоном як королева моря.",
          "[…] Дельфін не брехав. Життя Амфітріти було справді розкішне. Двір був пишніший, ніж у Гери, королеви неба. Збіглися всі сестри, *океаніди*, доньки морського старця Океана. Їх було три тисячі. Коли пливли довкола її *колісниць*, хвилі вкривалися білою піною, наче всі срібні хмари впали з неба на воду. Служили їй п’ятдесят *нереїд*. Це були веселі богині, що вітали пані співом і кликали до танцю. Але Амфітріті танцювати не личило, тож лише сиділа в легкому колі на скелі, а вони, розлігшись біля ніг, чесали зелене волосся.",
          "[…]",
          "Над морем панує всевладна воля Посейдона. У глибині підводного палацу він знає все, що діється на рухливій поверхні. Коли вітри *необережно* збурюють хвилі, з’являється Посейдон і одним поглядом темних очей *утихомирює* вали, а норовливі бурі проганяє. *Тризуб* підіймає кораблі, ув’язнені серед скель або на мілині, а потерпілих несе *прудкими* течіями до безпечних берегів.",
          "Уривок книжки *Mitologia. Wierzenia i podania Greków i Rzymian*."
        ]
      },
      task: {
        id: "t24-s06-krolowa",
        type: "multiple-choice",
        question: {
          pl: "Jakie jest życie Amfitryty po ślubie według *tego* fragmentu? Zaznacz wszystkie pewne.",
          ua: "Яке життя Амфітріти після шлюбу за *цим* уривком? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Rozkoszne; dwór wspanialszy niż u Hery; 3000 okeanid i 50 nereid.", ua: "Розкішне; двір пишніший, ніж у Гери; 3000 океанід і 50 нереїд." } },
          { id: "b", label: { pl: "Nereidy czeszą zielone włosy u jej stóp; królowej nie wypada tańczyć.", ua: "Нереїди чешуть зелене волосся біля ніг; королеві танцювати не личить." } },
          { id: "c", label: { pl: "Amfitryta kradnie ogień i zostaje przykuta do Kaukazu.", ua: "Амфітріта краде вогонь і її приковують до Кавказу." } },
          { id: "d", label: { pl: "Posejdon trójzębem ratuje okręty i rozbitków.", ua: "Посейдон тризубом рятує кораблі і потерпілих." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Kaukaz to Prometeusz. Co jest po [… ] o dworze i trójzębie?",
          ua: "Кавказ — Прометей. Що є після […] про двір і тризуб?"
        },
        explanation: {
          pl: "Dwór, okeanidy, nereidy, trójząb. Ognia i Kaukazu tu nie ma.",
          ua: "Двір, океаніди, нереїди, тризуб. Вогню і Кавказу тут немає."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól · z przykładem z tekstu", ua: "Слова з полів · з прикладом з тексту" },
      formula: "s. 53–54",
      promptPlace: "before",
      prompt: {
        pl: "Lewa kolumna: polski + krótki przykład z *tego* fragmentu. Nie z Prometeusza.",
        ua: "Ліва колонка: польська + короткий приклад з *цього* уривка."
      },
      rows: [
        { pl: "lec u stóp  ·  co legnie całe u jej stóp", ua: "лягти до ніг; виявити покірність" },
        { pl: "odpływ  ·  dach z muszli w czasie odpływu", ua: "відплив моря від берега" },
        { pl: "szafirowe  ·  drzewa szafirowe", ua: "темно-блакитні, сапфірові" },
        { pl: "alga  ·  Algi układają się na falach", ua: "морська рослина, водорість" },
        { pl: "gąbki  ·  Gąbki … jak małe karły", ua: "примітивні морські тварини" },
        { pl: "karzeł  ·  jak małe karły o siwych brodach", ua: "казкова істота маленького зросту" },
        { pl: "głowonóg  ·  orszak świecących głowonogów", ua: "морська істота (кальмар / восьминіг)" },
        { pl: "purpurowy  ·  kielich purpurowego kwiatu", ua: "темно-червоний із фіолетовим" },
        { pl: "nimfa  ·  Nimfa zamyśliła się", ua: "богиня в подобі вродливої дівчини" },
        { pl: "szmaragdowy  ·  szmaragdowy tron", ua: "синьо-зелений, смарагдовий" },
        { pl: "rydwan  ·  dokoła jej rydwany", ua: "двоколісний візок у давнину" },
        { pl: "nieopatrznie  ·  wiatry nieopatrznie wzburzają fale", ua: "необережно" },
        { pl: "uśmierzać  ·  uśmierza bałwany", ua: "заспокоювати" },
        { pl: "trójząb  ·  Trójząb dźwiga okręty", ua: "зброя з трьома зубцями; знак Посейдона" },
        { pl: "wartki  ·  wartkie prądy", ua: "прудкий, швидкий" }
      ],
      task: {
        id: "t24-s07-glosa",
        type: "single-choice",
        question: {
          pl: "Co oznacza *trójząb* w tym micie?",
          ua: "Що означає *trójząb* у цьому міфі?"
        },
        options: [
          { id: "a", label: { pl: "Broń o trzech zębach; znak Posejdona; dźwiga okręty ze skał.", ua: "Зброя з трьома зубцями; знак Посейдона; підіймає кораблі зі скель." } },
          { id: "b", label: { pl: "E-mail Wiktora z piramidą Cheopsa.", ua: "E-mail Віктора з пірамідою Хеопса." } },
          { id: "c", label: { pl: "Kajdany Prometeusza na Kaukazie.", ua: "Кайдани Прометея на Кавказі." } }
        ],
        answer: "a",
        hint: {
          pl: "Pole s. 54: trzy metalowe zęby; znak rozpoznawczy Posejdona.",
          ua: "Поле с. 54: три металеві зуби; розпізнавальний знак Посейдона."
        },
        explanation: {
          pl: "Trójząb = atrybut władcy mórz, nie piramida i nie kajdany.",
          ua: "Тризуб = атрибут володаря морів."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Świat przedstawiony w micie", ua: "Зображений світ у міфі" },
      formula: "program GWO  ·  tematy 24 i 25",
      promptPlace: "before",
      prompt: {
        pl: "Zanim piszesz, nazwij *gdzie, kiedy, kto*. To elementy świata przedstawionego — nie streszczenie „było ładnie”.",
        ua: "Перш ніж писати, назви *де, коли, хто*. Це елементи зображеного світу."
      },
      items: [
        { pl: "Miejsce: wyspa *Naksos*; samotny pałac *w głębinach*; powierzchnia morza; skała, na której siada królowa.", ua: "Місце: острів *Наксос*; самотній палац *у глибинах*; поверхня моря; скеля королеви." },
        { pl: "Czas: po uczcie; *nazajutrz*; *w kilka dni później*; chwile burzy na powierzchni.", ua: "Час: після учти; *наступного дня*; *за кілька днів*; хвилі бурі на поверхні." },
        { pl: "Bohaterowie: Posejdon, Amfitryta, Okeanos, delfin, okeanidy, nereidy; w tle Hera (porównanie dworu).", ua: "Герої: Посейдон, Амфітріта, Океан, дельфін, океаніди, нереїди; Гера (порівняння двору)." }
      ],
      task: {
        id: "t24-s08-swiat",
        type: "true-false",
        question: {
          pl: "Czy świat przedstawiony w tym micie to Kair, Nil i piramida Cheopsa?",
          ua: "Чи зображений світ цього міфу — Каїр, Ніл і піраміда Хеопса?"
        },
        answer: false,
        hint: {
          pl: "To był e-mail Wiktora. Gdzie tańczy Amfitryta?",
          ua: "Це був e-mail Віктора. Де танцює Амфітріта?"
        },
        explanation: {
          pl: "Tu: Naksos, głębiny, pałac błękitny. Egipt — lekcja 22.",
          ua: "Тут: Наксос, глибини, блакитний палац. Єгипет — урок 22."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 1 · trzy pytania do tekstu", ua: "Завд. 1 · три питання до тексту" },
      formula: "s. 54",
      promptPlace: "before",
      prompt: {
        pl: "Wyszukaj odpowiednie informacje w tekście i odpowiedz krótko. Najpierw zeszyt — potem klucz.",
        ua: "Знайди відповідні відомості в тексті і відповідай коротко. Спочатку зошит."
      },
      items: [
        { pl: "Kim była Amfitryta?", ua: "Ким була Амфітріта?" },
        { pl: "Kiedy i gdzie po raz pierwszy zobaczył ją Posejdon?", ua: "Коли і де Посейдон уперше її побачив?" },
        { pl: "Kto i w jaki sposób pomógł przekonać Amfitrytę do ślubu z władcą mórz?", ua: "Хто і як допоміг переконати Амфітріту вийти заміж за володаря морів?" }
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "Odpowiedzi *z tekstu*, nie z Wikipedii i nie z lekcji 21.",
            ua: "Відповіді *з тексту*, не з Вікіпедії і не з уроку 21."
          }
        },
        {
          formula: "KLUCZ EduMost",
          text: {
            pl: "1. Najpiękniejsza córka Okeanosa / nimfa o jasnych warkoczach (potem królowa morza). 2. Na wyspie Naksos, na przyjęciu / po uczcie, gdy tańczyły córki Okeanosa. 3. Delfin: nazajutrz opowiedział o bogactwach, posiadłościach i czci, jaką oddadzą jej mieszkańcy morza.",
            ua: "1. Найвродливіша донька Океана / німфа зі світлими косами (потім королева моря). 2. На острові Наксос, на прийнятті / після учти. 3. Дельфін наступного дня розповів про багатства, володіння і шану мешканців моря."
          }
        }
      ],
      task: {
        id: "t24-s09-zad1",
        type: "multiple-choice",
        question: {
          pl: "Które odpowiedzi zgadzają się z tekstem? Zaznacz wszystkie pewne.",
          ua: "Які відповіді збігаються з текстом? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Amfitryta: córka Okeanosa, nimfa o jasnych warkoczach.", ua: "Амфітріта: донька Океана, німфа зі світлими косами." } },
          { id: "b", label: { pl: "Pierwsze spotkanie: Naksos, uczta Okeanosa.", ua: "Перша зустріч: Наксос, учта Океана." } },
          { id: "c", label: { pl: "Przekonał ją Set, brat Osyrysa, e-mailem z Gizy.", ua: "Переконав Сет, брат Осіріса, e-mail з Гізи." } },
          { id: "d", label: { pl: "Pomógł delfin opowieścią o pałacu i czci królowej.", ua: "Допоміг дельфін оповіддю про палац і шану королеви." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Set i Giza — lekcja 22. Kto podpłynął do Posejdona?",
          ua: "Сет і Гіза — урок 22. Хто підплив до Посейдона?"
        },
        explanation: {
          pl: "Córka Okeanosa, Naksos, delfin. Egipt odpada.",
          ua: "Донька Океана, Наксос, дельфін."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 2 · określenia na schemacie", ua: "Завд. 2 · означення на схемі" },
      formula: "s. 54",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie fragmentu o podwodnym pałacu określ określenia rzeczowników ze schematu. Potem: jakich *środków artystycznych* użyto, by pokazać piękno królestwa.",
        ua: "За уривком про підводний палац добери означення іменників зі схеми. Потім: які *художні засоби* показують красу царства."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t24-schemat.png", {
            alt: {
              pl: "Schemat podwodnego pałacu z etykietami: perły, okna, lilie, gąbki…",
              ua: "Схема підводного палацу з етикетками"
            },
            title: { pl: "Slajd · schemat jak s. 54", ua: "Слайд · схема як с. 54" },
            prompt: {
              pl: IMG_STYLE_SCH + " IMAGE PROMPT: podwodny pałac z polskimi etykietami: dach z muszli, perły, okna z bursztynu, kwiaty, drzewa, gwiazdy morskie, lilie, gąbki, orszak, kulki, słońce.",
              ua: "Схема палацу з польськими етикетками."
            }
          }),
          text: {
            pl: "W zeszycie: rzeczownik + określenie z tekstu delfina (nie wymyślaj piramid).",
            ua: "У зошиті: іменник + означення з тексту дельфіна."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  określenia (nie jedyne słowa)",
          text: {
            pl: "dach z muszli; cudne perły; okna z bursztynu; żywe kwiaty; drzewa szafirowe i czerwone / złote owoce; zabłąkane gwiazdy morskie / migotliwe światełka; lilie jak drobne palmy o wielolistnej koronie; gąbki jak małe karły o siwych brodach; orszak świecących głowonogów; kulki jak deszcz gwiazd; słońce niby kielich purpurowego kwiatu.",
            ua: "дах із мушель; чудові перли; вікна з бурштину; живі квіти; сапфірові дерева; морські зірки; лілії як пальми; губки як карлики; почет головоногих; кульки як дощ зірок; сонце наче чашечка пурпурової квітки."
          }
        }
      ],
      task: {
        id: "t24-s10-okreslenia",
        type: "multiple-choice",
        question: {
          pl: "Które określenia są z *tego* opisu pałacu? Zaznacz wszystkie pewne.",
          ua: "Які означення з *цього* опису палацу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "okna z bursztynu; dach z muszli; perły przy odpływie", ua: "вікна з бурштину; дах із мушель; перли при відпливі" } },
          { id: "b", label: { pl: "lilie jak palmy; gąbki jak karły; słońce niby kielich kwiatu", ua: "лілії як пальми; губки як карлики; сонце наче чашечка" } },
          { id: "c", label: { pl: "żyzny muł Nilu i piramida Cheopsa", ua: "родючий мул Нілу і піраміда Хеопса" } },
          { id: "d", label: { pl: "orszak świecących głowonogów; deszcz gwiazd różnokolorowych", ua: "почет сяючих головоногих; дощ різнобарвних зірок" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Bierz epitety i porównania z cudzysłowu delfina.",
          ua: "Бери епітети і порівняння з лапок дельфіна."
        },
        explanation: {
          pl: "Wszystko z mowy delfina. Nil — lekcja 22.",
          ua: "Усе з мови дельфіна. Ніл — урок 22."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 2b · środki artystyczne", ua: "Завд. 2б · художні засоби" },
      formula: "s. 54  ·  piękno królestwa",
      promptPlace: "before",
      prompt: {
        pl: "Program: powiedz, jakich środków użyto, *aby pokazać piękno*. Nie wystarczy „jest ładnie”.",
        ua: "Програма: скажи, якими засобами показано *красу*. Мало сказати «гарно»."
      },
      text: {
        pl: [
          "*Porównanie* (jak / niby): lilie *jak* palmy; gąbki *jak* karły; kulki *jak deszcz gwiazd*; słońce *niby* kielich kwiatu; piana *jak gdyby* srebrne obłoki.",
          "*Epitet* (jaki?): pałac *błękitny*, *cudne* perły, *żywe* kwiaty, *szafirowe* drzewa, *migotliwe* światełka, *szmaragdowy* tron.",
          "*Ożywienie*: ze ścian *wyrastają* kwiaty; okna, przez które ryby *zaglądają*; gwiazdy morskie *rozniecają* światełka."
        ],
        ua: [
          "*Порівняння* (як / наче): лілії *як* пальми; губки *як* карлики; кульки *як дощ зірок*; сонце *наче* чашечка.",
          "*Епітет* (який?): палац *блакитний*, *чудові* перли, *живі* квіти, *сапфірові* дерева, *смарагдовий* трон.",
          "*Оживлення*: зі стін *виростають* квіти; риби *заглядають* у вікна; зірки *запалюють* світло."
        ]
      },
      task: {
        id: "t24-s11-srodki",
        type: "single-choice",
        question: {
          pl: "Która notatka dobrze nazywa środki z opisu pałacu?",
          ua: "Яка нотатка добре називає засоби з опису палацу?"
        },
        options: [
          { id: "a", label: { pl: "Porównania (jak / niby), epitety (błękitny, cudne) i ożywienie (kwiaty wyrastają, ryby zaglądają).", ua: "Порівняння, епітети і оживлення." } },
          { id: "b", label: { pl: "Tylko „ładny pałac” — bez przykładu z tekstu.", ua: "Лише «гарний палац» — без прикладу з тексту." } },
          { id: "c", label: { pl: "Apostrofa do nocy z wiersza Lechonia.", ua: "Апострофа до ночі з вірша Лехоня." } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słów jak / niby oraz przymiotników przy rzeczownikach pałacu.",
          ua: "Шукай слова jak / niby і прикметники при іменниках палацу."
        },
        explanation: {
          pl: "Piękno budują porównania, epitety i ożywienie z *tego* cudzysłowu. Lechoń — lekcja 2.",
          ua: "Красу будують порівняння, епітети і оживлення з *цих* лапок."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zeszyt · co biorę na lekcję 25", ua: "Зошит · що беру на урок 25" },
      promptPlace: "after",
      prompt: {
        pl: "To nie koniec tematu. Jutro: opis siedziby, zaproszenie, list, makieta.",
        ua: "Це не кінець теми. Завтра: опис оселі, запрошення, лист, макет."
      },
      items: [
        { pl: "Amfitryta: córka Okeanosa → królowa morza dzięki delfinowi.", ua: "Амфітріта: донька Океана → королева моря завдяки дельфіну." },
        { pl: "Pałac: błękitny, dach z muszli, perły, bursztynowe okna, szafirowe drzewa, porównania (jak karły, niby kielich).", ua: "Палац: блакитний, дах із мушель, перли, бурштинові вікна, порівняння." },
        { pl: "Do listu: dwór (okeanidy, nereidy), tron szmaragdowy, trójząb Posejdona.", ua: "До листа: двір (океаніди, нереїди), смарагдовий трон, тризуб." }
      ],
      task: {
        id: "t24-s12-most",
        type: "single-choice",
        question: {
          pl: "Co zostawiasz na lekcję 25?",
          ua: "Що залишаєш на урок 25?"
        },
        options: [
          { id: "a", label: { pl: "Opis pałacu, zaproszenie na ucztę, list do Okeanosa, makietę.", ua: "Опис палацу, запрошення на учту, лист до Океана, макет." } },
          { id: "b", label: { pl: "Tylko odmianę rzeczownika przez 7 przypadków.", ua: "Лише відмінювання іменника через 7 відмінків." } },
          { id: "c", label: { pl: "Nowy mit o Prometeuszu od pierwszej linijki.", ua: "Новий міф про Прометея з першого рядка." } }
        ],
        answer: "a",
        hint: {
          pl: "s. 55: zadania 3–7.",
          ua: "с. 55: завдання 3–7."
        },
        explanation: {
          pl: "3 opis, 4 zaproszenie, 5 życie, 6 list, 7 makieta. Przypadki — T29. Prometeusz — 21.",
          ua: "3 опис, 4 запрошення, 5 життя, 6 лист, 7 макет."
        }
      }
    }
  ]
};
