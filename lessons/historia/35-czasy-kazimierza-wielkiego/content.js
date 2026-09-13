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
      heading: { pl: "Czasy Kazimierza Wielkiego", ua: "Часи Казимира Великого" },
      formula: "1333 · 1343 · 1364",
      text: {
        pl: [
          "Z lekcji 34 wiesz: Łokietek zjednoczył część Polski i zmarł w 1333. Dziś jego syn — ostatni Piast na tronie.",
          "Trzy daty na osi: koronacja 1333, pokój w Kaliszu 1343, Akademia Krakowska 1364."
        ],
        ua: [
          "З уроку 34 знаєш: Локетек об’єднав частину Польщі і помер 1333 року. Сьогодні його син — останній П’яст на престолі.",
          "Три дати на осі: коронація 1333, мир у Каліші 1343, Краківська академія 1364."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, że Kazimierz Wielki był ostatnim Piastem na tronie (1333–1370)", ua: "сказати, що Казимир Великий був останнім П’ястом на престолі (1333–1370)" },
        { pl: "podać pokój w Kaliszu 1343 i wyjaśnić, co Polska odzyskała, a czego nie", ua: "назвати мир у Каліші 1343 і пояснити, що Польща повернула, а чого ні" },
        { pl: "wyjaśnić przysłowie o drewnie i kamieniu oraz podać Akademię 1364", ua: "пояснити прислів’я про дерево і камінь та назвати Академію 1364" },
        { pl: "wskazać, że brak syna otworzył drogę Andegawenom i Jadwidze (lekcja 36)", ua: "вказати, що відсутність сина відкрила шлях Анжуйцям і Ядвізі (урок 36)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Kazimierz Wielki", ua: "Казимир Великий" },
      formula: "1333–1370",
      timelineYear: 1333,
      visual: gh("288", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Kazimierza Wielkiego: ostatni Piast, syn Łokietka",
          ua: "Картка Казимира Великого: останній П’яст, син Локетека"
        },
        title: { pl: "Ostatni Piast, nie lista bitew", ua: "Останній П’яст, не список битв" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Spokojny król w koronie, dzień, BEZ Matejki, BEZ pola bitwy. Cztery punkty PL: „kto — Kazimierz Wielki, syn Łokietka”; „skąd — Kraków, Królestwo Polskie”; „lata — król 1333–1370, ostatni Piast na tronie”; „wsławił się — dyplomacja, prawo, zamki, Akademia”. Podpis: „Kazimierz Wielki”. Styl Nowej Ery.",
          ua: "Казимир Великий. 1333–1370. Без Матейка і бою."
        }
      }),
      text: {
        pl: [
          ["", em("Kazimierz Wielki"), " — syn Łokietka. Koronacja: ", em("1333"), " w Krakowie. Panował do 1370. To ", em("ostatni Piast"), " na polskim tronie."],
          "„Wielki” w klasie 5 znaczy: układy zamiast ciągłej wojny, prawo, murowane grody, miasta i szkoła — nie dwadzieścia bitew do wkuwania."
        ],
        ua: [
          ["", em("Казимир Великий"), " — син Локетека. Коронація: ", em("1333"), " у Кракові. Правив до 1370. Це ", em("останній П’яст"), " на польському престолі."],
          "«Великий» у 5 класі означає: угоди замість суцільної війни, право, муровані городи, міста і школа — не двадцять битв напам’ять."
        ]
      },
      task: {
        id: "h35-1333",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Kazimierz Wielki został koronowany? Wpisz rok.",
          ua: "Якого року Казимира Великого коронували? Введи рік."
        },
        answer: 1333,
        hint: {
          pl: "Rok śmierci Łokietka i start syna. 1320 = korona ojca.",
          ua: "Рік смерті Локетека і старт сина. 1320 = корона батька."
        },
        explanation: {
          pl: "1333. 1320 to Łokietek (34). 1364 to Akademia.",
          ua: "1333. 1320 — Локетек (34). 1364 — Академія."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Sąsiedzi i dyplomacja", ua: "Сусіди і дипломатія" },
      formula: "układy, nie każda piędź",
      visual: gh("289", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Krzyżacy, Czechy, Brandenburgia, sojusz z Węgrami",
          ua: "Карта: хрестоносці, Чехія, Бранденбург, союз з Угорщиною"
        },
        title: { pl: "Kto groził, kto pomagał", ua: "Хто загрожував, хто допомагав" },
        prompt: {
          pl: "Szkolna mapa 16:9 Polski ok. 1333. Północ: Zakon Krzyżacki (Pomorze Gdańskie poza). Południe: Czechy / Śląsk. Zachód: Brandenburgia. Południowy wschód strzałka „Węgry — sojusznik”. BEZ bitew, BEZ ciał. Styl Nowej Ery.",
          ua: "Мапа сусідів бл. 1333. Без бою."
        }
      }),
      text: {
        pl: [
          "Polska była w trudnym położeniu: Krzyżacy trzymali Pomorze Gdańskie, Czechy rościły sobie koronę i Śląsk, od zachodu groziła Brandenburgia.",
          "Sojusznikiem były Węgry. Kazimierz wolał układy: Jan Luksemburski zrzekł się praw do korony polskiej, a Kazimierz uznał czeskie zwierzchnictwo na większości Śląska."
        ],
        ua: [
          "Польща була в скруті: хрестоносці тримали Гданське Помор’я, Чехія претендувала на корону і Сілезію, із заходу загрожував Бранденбург.",
          "Союзником була Угорщина. Казимир волів угоди: Ян Люксембурзький зрікся прав на польську корону, а Казимир визнав чеське зверхництво на більшості Сілезії."
        ]
      },
      task: {
        id: "h35-sasiedzi",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz wolał układy z sąsiadami niż wojnę o każdą piędź — prawda czy fałsz?",
          ua: "Казимир волів угоди з сусідами, ніж війну за кожну п’ядь — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Stąd „Wielki”: dyplomacja. Grunwald = 36.",
          ua: "Звідси «Великий»: дипломатія. Грюнвальд = 36."
        },
        explanation: {
          pl: "Prawda. Śląsk w większości pozostał przy Czechach — to cena układu, nie temat 36.",
          ua: "Правда. Сілезія здебільшого лишилась при Чехії — це ціна угоди, не тема 36."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pokój w Kaliszu 1343", ua: "Мир у Каліші 1343" },
      formula: "1343",
      timelineYear: 1343,
      visual: gh("290", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa pokoju w Kaliszu: Kujawy i Dobrzyń wracają, Pomorze zostaje przy Krzyżakach",
          ua: "Карта миру в Каліші: Куяви і Добжинь повертаються, Помор’я лишається за хрестоносцями"
        },
        title: { pl: "Co wróciło, co nie", ua: "Що повернулось, що ні" },
        prompt: {
          pl: "Szkolna mapa 16:9. Kalisz kropką 1343. Kujawy i ziemia dobrzyńska zielone „odzyskane”. Pomorze Gdańskie szare „zostaje przy Krzyżakach”. BEZ bitwy. Styl Nowej Ery.",
          ua: "1343 Каліш. Куяви так, Помор’я ні. Без бою."
        }
      }),
      text: {
        pl: [
          ["W ", em("1343"), " Kazimierz zawarł z Krzyżakami ", em("pokój w Kaliszu"), "."],
          "Polska odzyskała Kujawy i ziemię dobrzyńską. Pomorze Gdańskie zostało przy zakonie — morza wciąż nie było. To nie Grunwald (lekcja 36)."
        ],
        ua: [
          ["", em("1343"), " року Казимир уклав із хрестоносцями ", em("мир у Каліші"), "."],
          "Польща повернула Куяви і добжинську землю. Гданське Помор’я лишилось за орденом — моря ще не було. Це не Грюнвальд (урок 36)."
        ]
      },
      task: {
        id: "h35-1343",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zawarto pokój w Kaliszu? Wpisz rok.",
          ua: "Якого року укладено мир у Каліші? Введи рік."
        },
        answer: 1343,
        hint: {
          pl: "Między koronacją 1333 a Akademią 1364. Nie 1309 (utrata Pomorza = 34) i nie 1466 (37).",
          ua: "Між коронацією 1333 і Академією 1364. Не 1309 (втрата Помор’я = 34) і не 1466 (37)."
        },
        explanation: {
          pl: "1343. Kujawy tak, Pomorze nie.",
          ua: "1343. Куяви так, Помор’я ні."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Ruś Halicka", ua: "Галицька Русь" },
      visual: gh("291", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: przyłączenie Rusi Halickiej na wschodzie",
          ua: "Карта: приєднання Галицької Русі на сході"
        },
        title: { pl: "Wschód, nie Pomorze", ua: "Схід, не Помор’я" },
        prompt: {
          pl: "Szkolna mapa 16:9. Polska Kazimierza i strzałka na wschód do Rusi Halickiej (Lwów jako kropka, bez współczesnych granic). Tytuł: „przyłączenie Rusi Halickiej”. BEZ bitwy, BEZ ciał. Styl Nowej Ery.",
          ua: "Галицька Русь. Без бою і сучасних кордонів."
        }
      }),
      text: {
        pl: [
          "Na wschodzie Kazimierz przyłączył Ruś Halicką. Kraj rósł tam, gdzie dyplomacja i okazja pozwalały — nie tam, gdzie stał zakon.",
          "Mazowsze uznało zwierzchnictwo króla. To nie unia z Litwą (lekcja 36)."
        ],
        ua: [
          "На сході Казимир приєднав Галицьку Русь. Край ріс там, де дозволяли угоди і нагода — не там, де стояв орден.",
          "Мазовія визнала зверхність короля. Це не унія з Литвою (урок 36)."
        ]
      },
      task: {
        id: "h35-rus",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz przyłączył Ruś Halicką i tym samym odzyskał Pomorze Gdańskie — prawda czy fałsz?",
          ua: "Казимир приєднав Галицьку Русь і тим самим повернув Гданське Помор’я — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Wschód ≠ morze. Pomorze po Kaliszu zostaje przy Krzyżakach.",
          ua: "Схід ≠ море. Помор’я після Каліша лишається за хрестоносцями."
        },
        explanation: {
          pl: "Fałsz. Ruś Halicka to wschód. Pomorze wróci w lekcji 37.",
          ua: "Неправда. Галицька Русь — схід. Помор’я повернеться в уроці 37."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drewno i kamień", ua: "Дерево і камінь" },
      visual: gh("292", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: drewniany gród i murowany zamek Orlich Gniazd",
          ua: "Схема: дерев’яний город і мурований замок Орлиних гнізд"
        },
        title: { pl: "Idea trwałości, nie inwentarz chat", ua: "Ідея тривалості, не інвентар хат" },
        prompt: {
          pl: "Szkolny slajd 16:9. Lewa: drewniany gród. Prawa: murowany zamek na skale (Orle Gniazda). Napis PL: „zastał Polskę drewnianą, zostawił murowaną — idea, nie każda chata”. BEZ pożaru, BEZ foto zamku z Wiki jako jedynego kadru. Styl Nowej Ery.",
          ua: "Дерево → камінь. Орлині гнізда. Без пожежі."
        }
      }),
      text: {
        pl: [
          ["Przysłowie: ", em("„zastał Polskę drewnianą, a zostawił murowaną”"), " to idea trwałości państwa, nie spis każdego domu."],
          ["Kazimierz budował i umacniał zamki — m.in. szlak ", em("Orlich Gniazd"), " na południu. Więcej cegły i kamienia, mocniejsze grody."]
        ],
        ua: [
          ["Прислів’я: ", em("«застав Польщу дерев’яною, а залишив мурованою»"), " — ідея тривалості держави, не список кожної хати."],
          ["Казимир будував і зміцнював замки — зокрема шлях ", em("Орлиних гнізд"), " на півдні. Більше цегли і каменю, міцніші городи."]
        ]
      },
      task: {
        id: "h35-mur",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co znaczy przysłowie o drewnie i kamieniu?",
          ua: "Що означає прислів’я про дерево і камінь?"
        },
        options: [
          { id: "a", label: { pl: "Więcej murowanych grodów i trwalsze państwo — nie że zniknęły wszystkie chaty", ua: "Більше мурованих городів і триваліша держава — не те, що зникли всі хати" } },
          { id: "b", label: { pl: "Kazimierz zakazał drewna w całej Europie", ua: "Казимир заборонив дерево в усій Європі" } },
          { id: "c", label: { pl: "To opis chrztu Mieszka z lekcji 28", ua: "Це опис хрещення Мешка з уроку 28" } }
        ],
        answer: "a",
        hint: {
          pl: "Idea, nie inwentarz.",
          ua: "Ідея, не інвентар."
        },
        explanation: {
          pl: "Chaty zostały. Państwo stało się mocniejsze.",
          ua: "Хати лишились. Держава стала міцнішою."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Prawo i miasta", ua: "Право і міста" },
      visual: gh("293", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: statut, sąd, lokacja miasta",
          ua: "Схема: статут, суд, локація міста"
        },
        title: { pl: "Sąd nie kaprys", ua: "Суд не примха" },
        prompt: {
          pl: "Szkolny slajd 16:9. Trzy ikony: zwój „statut / prawo”; waga „sąd”; mury miasta „lokacje”. Tytuł: „porządek w państwie”. BEZ sejmu z lekcji 38. Styl Nowej Ery.",
          ua: "Право, суд, міста. Не сейм з 38."
        }
      }),
      text: {
        pl: [
          "Kazimierz spisał i porządkował prawo (statuty), żeby sądy nie były tylko kaprysem. Wspierał lokacje miast i handel — m.in. sól z Wieliczki.",
          "To nadal monarchia, w której król jest mocny. Przywileje szlachty i sejm — lekcja 38, nie ta godzina."
        ],
        ua: [
          "Казимир записав і впорядкував право (статути), щоб суди не були лише примхою. Підтримував локації міст і торгівлю — зокрема сіль із Велички.",
          "Це ще монархія, в якій король сильний. Привілеї шляхти і сейм — урок 38, не ця година."
        ]
      },
      task: {
        id: "h35-prawo",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz porządkował prawo i wspierał miasta — prawda czy fałsz?",
          ua: "Казимир впорядковував право і підтримував міста — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Statuty i lokacje. Nihil novi = 38.",
          ua: "Статути і локації. Nihil novi = 38."
        },
        explanation: {
          pl: "Prawda. Sejm walny i Nihil novi są w 38.",
          ua: "Правда. Вальний сейм і Nihil novi — у 38."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Akademia Krakowska 1364", ua: "Краківська академія 1364" },
      formula: "1364",
      timelineYear: 1364,
      visual: gh("294", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkoła w Krakowie 1364: uczeni, nie współczesny uniwersytet",
          ua: "Школа в Кракові 1364: вчені, не сучасний університет"
        },
        title: { pl: "Szkoła dla królestwa", ua: "Школа для королівства" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Spokojna sala: nauczyciel i kilku żaków przy pulpitach, księgi. Data 1364. Napis PL: „Akademia Krakowska”. BEZ zdjęcia dzisiejszego UJ, BEZ herbu z Wiki. Styl Nowej Ery.",
          ua: "1364 Академія. Не фото сучасного університету."
        }
      }),
      text: {
        pl: [
          ["W ", em("1364"), " powstała ", em("Akademia Krakowska"), " (późniejszy uniwersytet). Państwu potrzebni byli prawnicy, lekarze i urzędnicy."],
          "W tym samym roku Kazimierz podejmował władców Europy w Krakowie — uczta u Wierzynka to ciekawostka, nie data do wkuwania obok 1343."
        ],
        ua: [
          ["", em("1364"), " року виникла ", em("Краківська академія"), " (пізніший університет). Державі потрібні були правники, лікарі і урядники."],
          "Того ж року Казимир приймав володарів Європи в Кракові — бенкет у Вежинка це цікавинка, не дата напам’ять поряд із 1343."
        ]
      },
      task: {
        id: "h35-1364",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku założono Akademię Krakowską? Wpisz rok.",
          ua: "Якого року засновано Краківську академію? Введи рік."
        },
        answer: 1364,
        hint: {
          pl: "Ta data na osi. 1343 = Kalisz. 1385 = Krewo (36).",
          ua: "Ця дата на осі. 1343 = Каліш. 1385 = Крево (36)."
        },
        explanation: {
          pl: "1364. Nazwa „Uniwersytet Jagielloński” — później, challenge w 36.",
          ua: "1364. Назва «Ягеллонський університет» — пізніше, challenge у 36."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Brak syna", ua: "Відсутність сина" },
      visual: gh("295", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: Piastowie kończą się, korona idzie do Andegawenów i Jadwigi",
          ua: "Схема: П’ясти кінчаються, корона йде до Анжуйців і Ядвіги"
        },
        title: { pl: "Dynastia się zamyka, państwo nie", ua: "Династія закривається, держава ні" },
        prompt: {
          pl: "Szkolny schemat 16:9. Lewa: korona Piastów „ostatni — Kazimierz”. Strzałka do „Andegawenowie (Ludwik Węgierski)”, potem „Jadwiga — lekcja 36”. BEZ pogrzebu, BEZ grobu. Styl Nowej Ery.",
          ua: "П’ясти → Анжуйці → Ядвіга. Без похорону."
        }
      }),
      text: {
        pl: [
          "Kazimierz nie zostawił syna, który odziedziczyłby koronę. Tron przeszedł do Andegawenów — król ", em("Ludwik Węgierski"), ".",
          "Potem koronę Polski trzymała ", em("Jadwiga"), ". Unia z Litwą — lekcja 36, nie nowa koronacja 1333."
        ],
        ua: [
          "Казимир не залишив сина, який успадкував би корону. Престол перейшов до Анжуйців — король ", em("Людовик Угорський"), ".",
          "Потім корону Польщі тримала ", em("Ядвіга"), ". Унія з Литвою — урок 36, не нова коронація 1333."
        ]
      },
      task: {
        id: "h35-syn",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz był ostatnim Piastem na polskim tronie, a po nim koronę wzięli Andegawenowie — prawda czy fałsz?",
          ua: "Казимир був останнім П’ястом на польському престолі, а після нього корону взяли Анжуйці — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Dynastia się kończy, państwo trwa. Jadwiga = 36.",
          ua: "Династія кінчається, держава триває. Ядвіга = 36."
        },
        explanation: {
          pl: "Prawda. Jagiełło i Krewo są w 36.",
          ua: "Правда. Ягайло і Крево — у 36."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Kazimierz Wielki — syn Łokietka, król 1333–1370, ostatni Piast na tronie", ua: "Казимир Великий — син Локетека, король 1333–1370, останній П’яст на престолі" },
        { pl: "pokój w Kaliszu 1343 — Kujawy i Dobrzyń wracają; Pomorze zostaje przy Krzyżakach", ua: "мир у Каліші 1343 — Куяви і Добжинь повертаються; Помор’я лишається за хрестоносцями" },
        { pl: "Orle Gniazda — murowane zamki obronne na południu Polski", ua: "Орлині гнізда — муровані оборонні замки на півдні Польщі" },
        { pl: "Akademia Krakowska — szkoła założona w 1364; później uniwersytet", ua: "Краківська академія — школа, заснована 1364; пізніше університет" },
        { pl: "Andegawenowie — dynastia z Węgier; po Kazimierzu Ludwik, potem Jadwiga", ua: "Анжуйці — династія з Угорщини; після Казимира Людовик, потім Ядвіга" },
        { pl: "Ruś Halicka — ziemie na wschodzie przyłączone za Kazimierza", ua: "Галицька Русь — землі на сході, приєднані за Казимира" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Kazimierz to pierwszy Piast. W 1320 założył Akademię. Pokój w Kaliszu oddał Polsce całe Pomorze. Drewniana/murowana znaczy, że zniknęły chaty. Po nim od razu Jagiełło i Grunwald.”",
        ua: "«Казимир — перший П’яст. 1320 року заснував Академію. Мир у Каліші віддав Польщі все Помор’я. Дерев’яна/мурована означає, що зникли хати. Після нього одразу Ягайло і Грюнвальд.»"
      },
      text: {
        pl: [
          "Ostatni Piast, nie pierwszy (Mieszko = 28). Akademia = 1364, nie 1320. Kalisz: Kujawy tak, Pomorze nie. Przysłowie = idea. Jagiełło i Grunwald = 36."
        ],
        ua: [
          "Останній П’яст, не перший (Мешко = 28). Академія = 1364, не 1320. Каліш: Куяви так, Помор’я ні. Прислів’я = ідея. Ягайло і Грюнвальд = 36."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: kim był Kazimierz, co dał pokój w Kaliszu, co znaczy drewno i kamień, czym jest 1364. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: ким був Казимир, що дав мир у Каліші, що означає дерево і камінь, чим є 1364. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: ostatni Piast; 1343 Kujawy nie Pomorze; idea murów; Akademia."
        ],
        ua: [
          "Підказка: останній П’яст; 1343 Куяви не Помор’я; ідея мурів; Академія."
        ]
      },
      task: {
        id: "h35-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę tej godziny?",
          ua: "Яке речення замикає нотатку цієї години?"
        },
        options: [
          { id: "a", label: { pl: "Ostatni Piast (1333–1370); 1343 Kalisz — Kujawy tak, Pomorze nie; mury i prawo; 1364 Akademia; potem Andegawenowie", ua: "Останній П’яст (1333–1370); 1343 Каліш — Куяви так, Помор’я ні; мури і право; 1364 Академія; потім Анжуйці" } },
          { id: "b", label: { pl: "To tylko 1320 i Płowce z lekcji 34", ua: "Це лише 1320 і Пловці з уроку 34" } },
          { id: "c", label: { pl: "To Krewo, Grunwald i Horodło z lekcji 36", ua: "Це Крево, Грюнвальд і Городло з уроку 36" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty KN + przysłowie + most do 36.",
          ua: "Три дати KN + прислів’я + міст до 36."
        },
        explanation: {
          pl: "34 = Łokietek. 36 = unia.",
          ua: "34 = Локетек. 36 = унія."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Wierzynek i sól", ua: "Вежинек і сіль" },
      task: {
        id: "h35-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Ponadpodstawowe tej godziny — bez Grunwaldu i bez sejmu?",
          ua: "Понад базове цієї години — без Грюнвальду і без сейму?"
        },
        options: [
          { id: "a", label: { pl: "1364 zjazd monarchów w Krakowie i uczta u Wierzynka; sól z Wieliczki jako dochód; Orle Gniazda to zamki, nie ptaki", ua: "1364 з’їзд монархів у Кракові і бенкет у Вежинка; сіль із Велички як дохід; Орлині гнізда — замки, не птахи" } },
          { id: "b", label: { pl: "trzeba pokazać Matejkę i wojnę trzynastoletnią", ua: "треба показати Матейка і тринадцятилітню війну" } },
          { id: "c", label: { pl: "Nihil novi 1505 jest datą tej lekcji", ua: "Nihil novi 1505 — дата цього уроку" } }
        ],
        answer: "a",
        hint: {
          pl: "Uczta i sól = film/challenge. 1466 = 37. 1505 = 38.",
          ua: "Бенкет і сіль = фільм/challenge. 1466 = 37. 1505 = 38."
        },
        explanation: {
          pl: "Wojna 13-letnia = 37. Sejm = 38.",
          ua: "13-літня війна = 37. Сейм = 38."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h35-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o czasach Kazimierza Wielkiego?",
          ua: "Що правда про часи Казимира Великого?"
        },
        options: [
          { id: "a", label: { pl: "1333 koronacja; 1343 Kalisz (Kujawy tak, Pomorze nie); mury i prawo; 1364 Akademia; ostatni Piast", ua: "1333 коронація; 1343 Каліш (Куяви так, Помор’я ні); мури і право; 1364 Академія; останній П’яст" } },
          { id: "b", label: { pl: "to samo co 1320 Łokietka z lekcji 34", ua: "те саме, що 1320 Локетека з уроку 34" } },
          { id: "c", label: { pl: "Kazimierz odzyskał całe Pomorze i pokonał Krzyżaków pod Grunwaldem", ua: "Казимир повернув усе Помор’я і переміг хрестоносців під Грюнвальдом" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty na osi. Grunwald = 36.",
          ua: "Три дати на осі. Грюнвальд = 36."
        },
        explanation: {
          pl: "Pomorze wraca w 37. Grunwald = 36.",
          ua: "Помор’я повертається в 37. Грюнвальд = 36."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Kazimierz Wielki, syn Łokietka, był ostatnim Piastem na tronie (1333–1370). Wolał układy, prawo i budowę niż wojnę o każdą piędź.",
          ["Kazimierz Wielki", "1333", "ostatnim Piastem"],
          "Казимир Великий, син Локетека, був останнім П’ястом на престолі (1333–1370). Волів угоди, право і будівництво, ніж війну за кожну п’ядь.",
          ["Казимир Великий", "1333", "останнім П’ястом"]
        ),
        mark(
          "W 1343 pokój w Kaliszu: Polska odzyskała Kujawy i ziemię dobrzyńską. Pomorze Gdańskie zostało przy Krzyżakach.",
          ["1343", "Kaliszu"],
          "1343 року мир у Каліші: Польща повернула Куяви і добжинську землю. Гданське Помор’я лишилось за хрестоносцями.",
          ["1343", "Каліші"]
        ),
        mark(
          "„Zastał Polskę drewnianą, zostawił murowaną” to idea trwałości (zamki, Orle Gniazda). W 1364 powstała Akademia Krakowska.",
          ["murowaną", "1364", "Akademia"],
          "«Застав Польщу дерев’яною, залишив мурованою» — ідея тривалості (замки, Орлині гнізда). 1364 року виникла Краківська академія.",
          ["мурованою", "1364", "Академія"]
        ),
        mark(
          "Potrafię powiedzieć: Kazimierz umocnił królestwo pokojem i budową; nie miał syna, więc po Piaście przyszli Andegawenowie i Jadwiga.",
          ["Andegawenowie", "Jadwiga"],
          "Можу сказати: Казимир зміцнив королівство миром і будівництвом; не мав сина, тож після П’яста прийшли Анжуйці і Ядвіга.",
          ["Анжуйці", "Ядвіга"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: unia polsko-litewska — Jadwiga, Jagiełło, Krewo i Grunwald, nie nowa Akademia 1364.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: польсько-литовська унія — Ядвіга, Ягайло, Крево і Грюнвальд, не нова Академія 1364.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "HJK9YxS9W0o",
        title: {
          pl: "Krótkie Lekcje: Czasy Kazimierza Wielkiego",
          ua: "Короткі уроки: Часи Казимира Великого"
        }
      }
    }
  ]
};
