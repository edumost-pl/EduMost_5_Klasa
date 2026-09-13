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
      heading: { pl: "Życie w Wiecznym Mieście", ua: "Життя у Вічному Місті" },
      formula: "73 p.n.e. · 79 n.e.",
      text: {
        pl: [
          "Z lekcji 13 znasz mapę imperium. Dziś wchodzimy do stolicy: bruk, woda, forum, bogowie i pewien wulkan.",
          "Trzy pytania: jak wyglądał Rzym w I wieku n.e., w jakich warunkach żyli Rzymianie, w jakich bogów wierzyli. Na osi nowe daty: 73 p.n.e. (Spartakus) i 79 n.e. (Pompeje)."
        ],
        ua: [
          "З уроку 13 знаєш мапу імперії. Сьогодні заходимо до столиці: брук, вода, форум, боги і один вулкан.",
          "Три питання: як виглядав Рим у I столітті н.е., в яких умовах жили римляни, в яких богів вірили. На осі нові дати: 73 до н.е. (Спартак) і 79 н.е. (Помпеї)."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać Rzym w I–II w. n.e.: milion mieszkańców, Forum Romanum, budowle", ua: "описати Рим у I–II ст. н.е.: мільйон мешканців, Forum Romanum, будівлі" },
        { pl: "porównać życie patrycjuszy, plebejuszy i niewolników oraz powiedzieć, po co były akwedukty", ua: "порівняти життя патриціїв, плебеїв і невільників та сказати, навіщо були акведуки" },
        { pl: "wymienić głównych bogów rzymskich i ich greckie odpowiedniki", ua: "назвати головних римських богів і їхні грецькі відповідники" },
        { pl: "podać 73 p.n.e. (Spartakus) i 79 n.e. (Pompeje, Wezuwiusz)", ua: "подати 73 до н.е. (Спартак) і 79 н.е. (Помпеї, Везувій)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Rzym — Wieczne Miasto", ua: "Рим — Вічне Місто" },
      formula: "I–II w. n.e. · ≈ 1 mln",
      visual: gh("106", {
        kind: "image-placeholder",
        alt: {
          pl: "Ruiny Forum Romanum dziś: kolumny, kapitele, Palatyn w tle",
          ua: "Руїни Forum Romanum сьогодні: колони, капітелі, Палатин на тлі"
        },
        title: { pl: "Stolica, która miała trwać zawsze", ua: "Столиця, що мала тривати завжди" },
        prompt: {
          pl: "Szkolne zdjęcie/rysunek 16:9, dzień, jasne niebo, styl Nowej Ery. Ruiny Forum Romanum: złamane kolumny, duży rzeźbiony kapitel na kamiennych blokach, trawa między kamieniami, w tle wzgórze Palatyn z ceglanymi łukami. BEZ turystów-tłumu jako tematu, BEZ rusztowań. Duży podpis PL: „Rzym — Wieczne Miasto”. Mała etykieta: „I–II w. n.e. ≈ 1 milion mieszkańców — największe miasto starożytności”. Spokojna archeologia, nie bitwa.",
          ua: "Руїни Форуму вдень, колони, Палатин. Підпис: Рим — Вічне Місто; I–II ст. н.е., близько мільйона мешканців."
        }
      }),
      text: {
        pl: [
          ["W ", em("I i II wieku n.e."), " Rzym przeżywał świetność. Stolica liczyła około ", em("miliona"), " mieszkańców — największe miasto starożytnego świata."],
          ["Rzymianie byli dumni: wierzyli, że ich miasto będzie trwać zawsze. Stąd nazwa ", em("Wieczne Miasto"), "."]
        ],
        ua: [
          ["У ", em("I і II століттях н.е."), " Рим переживав розквіт. Столиця мала близько ", em("мільйона"), " мешканців — найбільше місто стародавнього світу."],
          ["Римляни пишалися: вірили, що їхнє місто триватиме завжди. Звідси назва ", em("Вічне Місто"), "."]
        ]
      },
      task: {
        id: "h14-mln",
        type: "true-false",
        level: "A",
        question: {
          pl: "W I–II w. n.e. Rzym był największym miastem starożytności i liczył około miliona mieszkańców — prawda czy fałsz?",
          ua: "У I–II ст. н.е. Рим був найбільшим містом античності і мав близько мільйона мешканців — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Dwa pierwsze wieki naszej ery, nie p.n.e.",
          ua: "Два перші століття нашої ери, не до н.е."
        },
        explanation: {
          pl: "Prawda. To NACOBEZU: jak wyglądał Rzym w I wieku n.e.",
          ua: "Правда. Це NACOBEZU: як виглядав Рим у I столітті н.е."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Forum Romanum", ua: "Forum Romanum" },
      formula: "forum = plac w centrum",
      visual: gh("107", {
        kind: "image-placeholder",
        alt: {
          pl: "Rekonstrukcja Forum: Kuria, Rostra, bazylika, świątynie Westy i Cezara",
          ua: "Реконструкція Форуму: курія, ростра, базиліка, храми Вести і Цезаря"
        },
        title: { pl: "Tu spotykało się całe miasto", ua: "Тут зустрічалося все місто" },
        prompt: {
          pl: "Szkolna rekonstrukcja 16:9, dzień, białe budowle, dachy z czerwonej dachówki, brukowany plac, styl Nowej Ery. Model Forum Romanum z CZYTELNYMI podpisami PL i strzałkami: Kuria (siedziba senatu), Rostra (mównica), Bazylika Julia, Świątynia Westy (mała, okrągła, stożkowy dach), Świątynia Cezara, Świątynia Zgody. Kilku ludzi w togach idzie spokojnie — nie bitwa. Tytuł: „Forum Romanum — główny plac”. BEZ walki, BEZ krwi. Każdy podpis duży, jak w atlasie.",
          ua: "Реконструкція Форуму з підписами: курія, ростра, базиліка, храм Вести (круглий), храм Цезаря. Люди в тогах ідуть спокійно."
        }
      }),
      text: {
        pl: [
          ["", em("Forum Romanum"), " to główny plac starożytnego Rzymu: centrum życia politycznego, towarzyskiego i religijnego."],
          ["Tu ogłaszano zarządzenia, kupowano, rozmawiano. Stały ", em("Kuria"), " (senat), ", em("Rostra"), " (mównica), bazyliki i świątynie — m.in. okrągła ", em("świątynia Westy"), "."]
        ],
        ua: [
          ["", em("Forum Romanum"), " — головна площа стародавнього Риму: центр політичного, товариського і релігійного життя."],
          ["Тут оголошували розпорядження, купували, розмовляли. Стояли ", em("курія"), " (сенат), ", em("ростра"), " (трибуна), базиліки і храми — м.ін. круглий ", em("храм Вести"), "."]
        ]
      },
      task: {
        id: "h14-forum",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym było Forum Romanum?",
          ua: "Чим було Forum Romanum?"
        },
        options: [
          { id: "a", label: { pl: "głównym placem: spotkania, handel, zarządzenia, świątynie i senat", ua: "головною площею: зустрічі, торгівля, розпорядження, храми і сенат" } },
          { id: "b", label: { pl: "tylko koszarami legionów nad Renem", ua: "лише казармами легіонів над Рейном" } },
          { id: "c", label: { pl: "portem Kartaginy", ua: "портом Карфагена" } }
        ],
        answer: "a",
        hint: {
          pl: "Słowo forum = plac. Nie myl z limes z lekcji 13.",
          ua: "Слово forum = площа. Не плутай з лімесом з уроку 13."
        },
        explanation: {
          pl: "To najważniejszy plac miasta z filmu i zeszytu.",
          ua: "Це найважливіша площа міста з фільму і зошита."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Termy, teatry, świątynie, bazyliki", ua: "Терми, театри, храми, базиліки" },
      formula: "termy = łaźnie publiczne",
      visual: gh("108", {
        kind: "image-placeholder",
        alt: {
          pl: "Wnętrze rzymskich term: basen, kolumny, ludzie w tunikach",
          ua: "Інтер’єр римських терм: басейн, колони, люди в туніках"
        },
        title: { pl: "Woda, sport i rozmowa", ua: "Вода, спорт і розмова" },
        prompt: {
          pl: "Szkolna ilustracja 16:9, jasne wnętrze term: duży basen, korynckie kolumny, nisze ze statuami, sklepienie. Kilka osób w BIAŁYCH TUNIKACH / ręcznikach do kolan rozmawia przy wodzie, ktoś nalewa dzban — BEZ nagości, BEZ erotyki, jak podręcznik 5 klasy. Podpisy PL: „termy — publiczne łaźnie”; „basen”; „sala do ćwiczeń”. W rogu małe piktogramy: teatr, świątynia, bazylika. Styl Nowej Ery.",
          ua: "Терми: басейн, колони, люди в туніках (не нагі). Підписи: терми — громадські лазні."
        }
      }),
      text: {
        pl: [
          ["W Rzymie rosły ", em("teatry"), ", ", em("świątynie"), ", ", em("bazyliki"), " i rozległe ", em("termy"), " — publiczne łaźnie z basenami i salami do ćwiczeń."],
          ["Termy to nie tylko kąpiel: tu spotykano znajomych, jak dziś na basenie lub stadionie."]
        ],
        ua: [
          ["У Римі росли ", em("театри"), ", ", em("храми"), ", ", em("базиліки"), " і великі ", em("терми"), " — громадські лазні з басейнами і залами для вправ."],
          ["Терми — не лише купання: тут зустрічали знайомих, як сьогодні в басейні чи на стадіоні."]
        ]
      },
      task: {
        id: "h14-termy",
        type: "true-false",
        level: "A",
        question: {
          pl: "Termy to publiczne łaźnie z basenami i salami do ćwiczeń — prawda czy fałsz?",
          ua: "Терми — громадські лазні з басейнами і залами для вправ — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z forum: forum to plac, termy to łaźnie.",
          ua: "Не плутай з форумом: форум — площа, терми — лазні."
        },
        explanation: {
          pl: "Prawda. Bazylika w starożytności to wielki budynek publiczny, nie kościół z lekcji o chrześcijaństwie.",
          ua: "Правда. Базиліка в античності — велика громадська будівля, не церква з уроку про християнство."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drogi, akwedukty, kanały", ua: "Дороги, акведуки, канали" },
      formula: "Mille viae ducunt… Romam",
      visual: gh("110", {
        kind: "image-placeholder",
        alt: {
          pl: "Akwedukt na łukach oraz brukowana ulica z wystającymi kamieniami do przejścia",
          ua: "Акведук на арках і брукована вулиця з виступаючим камінням для переходу"
        },
        title: { pl: "Woda do miasta, sucha noga przez ściek", ua: "Вода до міста, суха нога через стік" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie wyraźne połówki, styl Nowej Ery. LEWA: kamienny akwedukt na wysokich łukach w krajobrazie (typ Pont du Gard), woda w korycie na górze, podpis PL „akwedukt — woda pitna do miasta”. PRAWA: brukowana ulica, brudna woda w rynsztoku, trzy duże wystające kamienie w poprzek jezdni jak stopnie, osoba w tunice przechodzi po kamieniach, podpis „kanalizacja / kamienie do przejścia”. BEZ odchodów jako zbliżenia, BEZ wstydu. Na dole cytat: „Mille viae ducunt hominem per saecula Romam”.",
          ua: "Ліворуч акведук на арках. Праворуч вулиця з каменями-сходинками над стоком. Підписи українською/польською як у слайді."
        }
      }),
      text: {
        pl: [
          ["Rzym był świetnie skomunikowany: gęsta ", em("sieć dróg"), ". Łacińskie powiedzenie: ", em("Mille viae ducunt hominem per saecula Romam"), " — wszystkie drogi prowadzą do Rzymu."],
          ["", em("Akwedukty"), " niosły wodę pitną. ", em("Kanalizacja"), " odprowadzała nieczystości; na ulicach kładziono kamienie, by przejść suchą nogą."]
        ],
        ua: [
          ["Рим був добре сполучений: густа ", em("мережа доріг"), ". Латинський вислів: ", em("Mille viae ducunt hominem per saecula Romam"), " — усі дороги ведуть до Риму."],
          ["", em("Акведуки"), " несли питну воду. ", em("Каналізація"), " відводила нечистоти; на вулицях клали камені, щоб перейти сухою ногою."]
        ]
      },
      task: {
        id: "h14-woda",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po co Rzymianom były akwedukty?",
          ua: "Навіщо римлянам були акведуки?"
        },
        options: [
          { id: "a", label: { pl: "żeby doprowadzić wodę pitną do miasta", ua: "щоб провести питну воду до міста" } },
          { id: "b", label: { pl: "żeby strzelać z katapulty do Kartaginy", ua: "щоб стріляти з катапульти по Карфагену" } },
          { id: "c", label: { pl: "żeby zastąpić forum", ua: "щоб замінити форум" } }
        ],
        answer: "a",
        hint: {
          pl: "Aqua = woda. Łuki niosą koryto.",
          ua: "Aqua = вода. Арки несуть корито."
        },
        explanation: {
          pl: "Akwedukt = woda. Kanalizacja to osobna sprawa: ścieki i kamienie na ulicy.",
          ua: "Акведук = вода. Каналізація — окрема справа: стоки і камені на вулиці."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Społeczeństwo Rzymu", ua: "Суспільство Риму" },
      formula: "patrycjusze · plebejusze · niewolnicy",
      visual: gh("109", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy spokojne sceny: willa patrycjuszy, targ plebejuszy, praca na wsi",
          ua: "Три спокійні сцени: вілла патриціїв, ринок плебеїв, праця на селі"
        },
        title: { pl: "Trzy grupy, jeden forum", ua: "Три групи, один форум" },
        prompt: {
          pl: "Szkolny tryptyk 16:9, trzy równe panele, jasne, styl Nowej Ery. 1) PATRYCJUSZE: dziedziniec willi, togi, niski stół z misami (uczta bez pijaństwa-horroru), podpis „wille, urzędy, uczty”. 2) PLEBEJUSZE: ulica z budkami, ludzie w tunikach, handel, podpis „rzemiosło, handel, wynajem w kamienicy”. 3) NIEWOLNICY: kosze z winogronami przy domu wiejskim, praca, BEZ bata, BEZ kajdan jako głównego motywu, podpis „bez praw, praca w domu i na roli”. Tytuł: „Społeczeństwo Rzymu”.",
          ua: "Три панелі: вілла патриціїв; ринок плебеїв; праця невільників без батога."
        }
      }),
      text: {
        pl: [
          ["Na forum spotykali się wszyscy. ", em("Patrycjusze"), ": wille z dziedzińcem, majątki na wsi, urzędy, uczty na sofach. Służbą byli ", em("niewolnicy"), "."],
          ["", em("Plebejusze"), ": wolni, rzemiosło i handel, często wynajem w kamienicy (bywało zimno i ciasno). Niewolnicy nie mieli wolności ani praw."]
        ],
        ua: [
          ["На форумі зустрічалися всі. ", em("Патриції"), ": вілли з двором, маєтки на селі, уряди, бенкети на софах. Службою були ", em("невільники"), "."],
          ["", em("Плебеї"), ": вільні, ремесло і торгівля, часто винаймання в кам’яниці (бувало холодно і тісно). Невільники не мали свободи ні прав."]
        ]
      },
      task: {
        id: "h14-spol",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto w Rzymie wynajmował zwykle mieszkanie w kamienicy, a kto miał willę?",
          ua: "Хто в Римі зазвичай винаймав житло в кам’яниці, а хто мав віллу?"
        },
        options: [
          { id: "a", label: { pl: "kamienica — plebejusze; willa — patrycjusze", ua: "кам’яниця — плебеї; вілла — патриції" } },
          { id: "b", label: { pl: "kamienica — cesarz; willa — tylko Hunowie", ua: "кам’яниця — імператор; вілла — лише гуни" } },
          { id: "c", label: { pl: "wszyscy mieszkali w Koloseum", ua: "усі жили в Колізеї" } }
        ],
        answer: "a",
        hint: {
          pl: "Zamożność decyduje o domu. Plebejusze = wolni, nie zawsze bogaci.",
          ua: "Заможність вирішує про дім. Плебеї = вільні, не завжди багаті."
        },
        explanation: {
          pl: "Ustrój patrycjuszy i plebejuszy znasz z lekcji 12. Tu chodzi o warunki życia.",
          ua: "Устрій патриціїв і плебеїв знаєш з уроку 12. Тут ідеться про умови життя."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Chleb i igrzyska", ua: "Хліб і видовища" },
      formula: "panem et circenses",
      visual: gh("111", {
        kind: "image-placeholder",
        alt: {
          pl: "Koloseum w całości, ludzie idą do wejścia, bez walki na arenie",
          ua: "Колізей цілий, люди йдуть до входу, без бою на арені"
        },
        title: { pl: "Amfiteatr, nie pole bitwy na obrazie", ua: "Амфітеатр, не поле бою на картині" },
        prompt: {
          pl: "Szkolna rekonstrukcja 16:9, dzień, błękitne niebo. Koloseum W CAŁOŚCI (owal, arkady, cegła/kamień), szeroki plac, ludzie w tunikach i togach IDĄ do wejścia. BEZ walki gladiatorów, BEZ krwi, BEZ leżącego przeciwnika, BEZ kciuka w dół. Podpisy PL: „amfiteatr (Koloseum)”; „igrzyska — widowiska”; „gladiatorzy — zwykle niewolnicy, jeńcy, skazańcy”. Mała etykieta: „panem et circenses — chleb i igrzyska”. Styl Nowej Ery.",
          ua: "Колізей зовні, натовп іде всередину. Без бою. Підписи: амфітеатр, гладіатори, panem et circenses."
        }
      }),
      text: {
        pl: [
          ["Ulubiona rozrywka — ", em("igrzyska"), " w ", em("amfiteatrach"), ". ", em("Gladiatorzy"), " to najczęściej niewolnicy, jeńcy lub skazańcy szkoleni do walki. Walki bywały brutalne — tego nie rysujemy."],
          ["Łacina: ", em("panem et circenses"), " — chleb i igrzyska. Władza karmiła lud i dawała widowiska."]
        ],
        ua: [
          ["Улюблена розвага — ", em("ігри"), " в ", em("амфітеатрах"), ". ", em("Гладіатори"), " — найчастіше невільники, полонені або засуджені, навчені до бою. Бої бували жорстокі — цього не малюємо."],
          ["Латина: ", em("panem et circenses"), " — хліб і видовища. Влада годувала люд і давала вистави."]
        ]
      },
      task: {
        id: "h14-igrz",
        type: "true-false",
        level: "A",
        question: {
          pl: "Gladiatorzy byli najczęściej niewolnikami, jeńcami lub skazańcami — prawda czy fałsz?",
          ua: "Гладіатори були найчастіше невільниками, полоненими або засудженими — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z konsulami z lekcji 12.",
          ua: "Не плутай з консулами з уроку 12."
        },
        explanation: {
          pl: "Prawda. Amfiteatr = budynek. Gladiator = człowiek na arenie.",
          ua: "Правда. Амфітеатр = будівля. Гладіатор = людина на арені."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Spartakus", ua: "Спартак" },
      formula: "73 p.n.e.",
      timelineYear: 73,
      visual: gh("112", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojny muzealny portret Spartakusa w tunice",
          ua: "Спокійний музейний портрет Спартака в туніці"
        },
        title: { pl: "Powstanie gladiatorów", ua: "Повстання гладіаторів" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Popiersie lub stojąca postać MĘŻCZYZNY W TUNICE (BEZ nagości, BEZ łańcuchów-horroru, BEZ pola bitwy, BEZ „Śmierci Spartakusa”). Cztery punkty PL: „kto — Spartakus, gladiator”; „skąd — szkoła gladiatorów, niewolnik”; „lata — 73–71 p.n.e.”; „wsławił się — powstanie gladiatorów, niewolników i biedoty przeciw Rzymowi”. Podpis: „Spartakus”. Styl Nowej Ery.",
          ua: "Портрет Спартака в туніці. Пункти: гладіатор; невільник; 73 до н.е., 2 роки; повстання невільників і бідноти."
        }
      }),
      text: {
        pl: [
          ["W ", em("73 p.n.e."), " wybuchło powstanie gladiatorów. Na czele stanął ", em("Spartakus"), ". Pomagali niewolnicy i biedota. Trwało do ", em("71 p.n.e."), " (ok. dwóch lat)."],
          ["To nie lekcja o bitwie na obrazie — zapamiętaj datę, imię i to, że gladiatorzy potrafili się zbuntować."]
        ],
        ua: [
          ["У ", em("73 до н.е."), " спалахнуло повстання гладіаторів. На чолі став ", em("Спартак"), ". Допомагали невільники і біднота. Тривало до ", em("71 до н.е."), " (бл. двох років)."],
          ["Це не урок про битву на картині — запам’ятай дату, ім’я і те, що гладіатори вміли повстати."]
        ]
      },
      task: {
        id: "h14-73",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku p.n.e. wybuchło powstanie Spartakusa? Wpisz tylko liczbę.",
          ua: "У якому році до н.е. спалахнуло повстання Спартака? Введи лише число."
        },
        answer: 73,
        hint: {
          pl: "Siedem i trzy. Jeszcze republika, przed 44 Cezara.",
          ua: "Сім і три. Ще республіка, перед 44 Цезаря."
        },
        explanation: {
          pl: "73 p.n.e. Na osi ta data stoi między Kartaginą 146 a Cezarem 44.",
          ua: "73 до н.е. На осі ця дата стоїть між Карфагеном 146 і Цезарем 44."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Bogowie Rzymu i Grecji", ua: "Боги Риму і Греції" },
      formula: "politeizm",
      visual: gh("113", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat par: Jowisz–Zeus, Junona–Hera, Minerwa–Atena, Mars–Ares, Neptun–Posejdon, Wenus–Afrodyta",
          ua: "Схема пар: Юпітер–Зевс, Юнона–Гера, Мінерва–Афіна, Марс–Арес, Нептун–Посейдон, Венера–Афродіта"
        },
        title: { pl: "Ci sami bogowie, inne imiona", ua: "Ті самі боги, інші імена" },
        prompt: {
          pl: "Szkolny schemat 16:9, jasne tło, sześć KARTEK-par, czytelne imiona. Każda karta: spokojna klasyczna figura W UBRANIU (tunika/himation), BEZ nagości Wenus, BEZ robota-demona Marsa. Pary PL: Jowisz = Zeus (grom, niebo); Junona = Hera (małżeństwo); Minerwa = Atena (mądrość); Mars = Ares (wojna); Neptun = Posejdon (morze); Wenus = Afrodyta (miłość). Tytuł: „od III w. p.n.e. bogowie rzymscy ≈ greccy”. Styl Nowej Ery, jak tablica w klasie 5.",
          ua: "Шість карток-пар римське=грецьке ім’я. Одягнені фігури, без наготи."
        }
      }),
      text: {
        pl: [
          ["Rzymianie wyznawali ", em("politeizm"), ". Najpierw ", em("lary"), " (dom) i ", em("penaty"), " (spiżarnia). Od VI w. p.n.e. na ", em("Kapitolu"), ": ", em("Jowisz"), ", ", em("Junona"), ", ", em("Minerwa"), "."],
          ["Od III w. p.n.e. wyobrażenia zbliżyły się do greckich: Jowisz–Zeus, Junona–Hera, Minerwa–Atena, Mars–Ares, Neptun–Posejdon, Wenus–Afrodyta."]
        ],
        ua: [
          ["Римляни сповідували ", em("політеїзм"), ". Спочатку ", em("лари"), " (дім) і ", em("пенати"), " (комора). Від VI ст. до н.е. на ", em("Капітолії"), ": ", em("Юпітер"), ", ", em("Юнона"), ", ", em("Мінерва"), "."],
          ["Від III ст. до н.е. уявлення наблизились до грецьких: Юпітер–Зевс, Юнона–Гера, Мінерва–Афіна, Марс–Арес, Нептун–Посейдон, Венера–Афродіта."]
        ]
      },
      task: {
        id: "h14-bogowie",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które pary rzymski bóg = grecki bóg są poprawne?",
          ua: "Які пари римський бог = грецький бог правильні?"
        },
        options: [
          { id: "a", label: { pl: "Jowisz–Zeus, Junona–Hera, Minerwa–Atena, Mars–Ares, Neptun–Posejdon, Wenus–Afrodyta", ua: "Юпітер–Зевс, Юнона–Гера, Мінерва–Афіна, Марс–Арес, Нептун–Посейдон, Венера–Афродіта" } },
          { id: "b", label: { pl: "Jowisz–Atena, Junona–Posejdon, Minerwa–Ares", ua: "Юпітер–Афіна, Юнона–Посейдон, Мінерва–Арес" } },
          { id: "c", label: { pl: "wszyscy równają się tylko Wezuwiuszowi", ua: "усі дорівнюють лише Везувію" } }
        ],
        answer: "a",
        hint: {
          pl: "To zadanie ze stron 88–89: imię, zajęcie, grecki odpowiednik.",
          ua: "Це завдання зі сторінок 88–89: ім’я, заняття, грецький відповідник."
        },
        explanation: {
          pl: "Jowisz — niebo i grom; Junona — małżeństwo; Minerwa — mądrość. Planety Wenus i Mars biorą imiona stąd.",
          ua: "Юпітер — небо і грім; Юнона — шлюб; Мінерва — мудрість. Планети Венера і Марс беруть імена звідси."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Westa i westalki", ua: "Веста і весталки" },
      formula: "ognisko domu",
      visual: gh("114", {
        kind: "image-placeholder",
        alt: {
          pl: "Okrągła świątynia Westy oraz westalki w białych szatach przy ognisku",
          ua: "Круглий храм Вести та весталки в білому біля вогнища"
        },
        title: { pl: "Ogień, który nie miał zgasnąć", ua: "Вогонь, що не мав згаснути" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie części. LEWA: spokojny rytuał — kobiety w długich BIAŁYCH szatach i welonach (westalki) przy małym ołtarzu z ogniem, jedna nalewa z dzbana, podpis „westalki — kapłanki Westy”. BEZ erotyki, BEZ „dziewic” jako tematu seksualnego — to kapłanki ogniska. PRAWA: ruiny okrągłej świątyni z korynckimi kolumnami na Forum, podpis „świątynia Westy na Forum Romanum”. Tytuł: „Westa — opiekunka domowego ogniska”. Styl Nowej Ery.",
          ua: "Ліворуч весталки в білому біля вогню. Праворуч круглий храм Вести. Без еротики."
        }
      }),
      text: {
        pl: [
          ["", em("Westa"), " — opiekunka ", em("domowego ogniska"), ". Jej kapłanki to ", em("westalki"), "."],
          ["Okrągła świątynia Westy stała na Forum. Ogień w domu i w świątyni oznaczał trwanie rodziny i miasta."]
        ],
        ua: [
          ["", em("Веста"), " — опікунка ", em("домашнього вогнища"), ". Її жриці — ", em("весталки"), "."],
          ["Круглий храм Вести стояв на Форумі. Вогонь у домі і в храмі означав тривання родини і міста."]
        ]
      },
      task: {
        id: "h14-westa",
        type: "true-false",
        level: "A",
        question: {
          pl: "Westa to bogini domowego ogniska, a westalki były jej kapłankami — prawda czy fałsz?",
          ua: "Веста — богиня домашнього вогнища, а весталки були її жрицями — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Okrągła świątynia na forum z rekonstrukcji.",
          ua: "Круглий храм на форумі з реконструкції."
        },
        explanation: {
          pl: "Prawda. Nie myl Westy z Wenus (miłość) ani z Minerwą (mądrość).",
          ua: "Правда. Не плутай Весту з Венерою (любов) і Мінервою (мудрість)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Świątynie w całym imperium", ua: "Храми по всій імперії" },
      formula: "Maison Carrée · I w. p.n.e.",
      visual: gh("115", {
        kind: "image-placeholder",
        alt: {
          pl: "Zachowana rzymska świątynia Maison Carrée w Nîmes we Francji",
          ua: "Збережений римський храм Maison Carrée в Німі у Франції"
        },
        title: { pl: "Rzymski wzór stoi do dziś", ua: "Римський зразок стоїть досі" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9, złote światło wieczoru. Świątynia Maison Carrée w Nîmes: podium, sześć korynckich kolumn w fasadzie, trójkątny fronton, jasny kamień, brukowany plac, współczesne kamienice w tle (widać, że to DZISIAJ). Podpis PL: „Świątynia Maison Carrée we Francji — wzniesiona przez Rzymian w I w. p.n.e., niemal idealnie zachowana”. BEZ turystycznego chaosu. Widać grecki wzór architektury przeniesiony przez Rzym.",
          ua: "Храм Maison Carrée у Франції, колони, фронтон, сучасна площа. Підпис: I ст. до н.е., майже ідеально збережений."
        }
      }),
      text: {
        pl: [
          ["Świątynie stawiano na wzór grecki — w Rzymie i w odległych prowincjach."],
          ["", em("Maison Carrée"), " we Francji (I w. p.n.e.) przetrwała niemal w idealnym stanie. Dziś widać, jak wyglądała rzymska świątynia."]
        ],
        ua: [
          ["Храми ставили на грецький зразок — у Римі і в далеких провінціях."],
          ["", em("Maison Carrée"), " у Франції (I ст. до н.е.) збереглася майже ідеально. Сьогодні видно, як виглядав римський храм."]
        ]
      },
      task: {
        id: "h14-maison",
        type: "true-false",
        level: "B",
        question: {
          pl: "Maison Carrée we Francji pokazuje, że Rzymianie budowali świątynie także poza Italią — prawda czy fałsz?",
          ua: "Maison Carrée у Франції показує, що римляни будували храми також поза Італією — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To Galia z lekcji 13, tylko budynek stoi do dziś.",
          ua: "Це Галлія з уроку 13, лише будівля стоїть досі."
        },
        explanation: {
          pl: "Prawda. Romanizacja z lekcji 13: rzymski styl budowli w prowincji.",
          ua: "Правда. Романізація з уроку 13: римський стиль будівель у провінції."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pompeje — 79 n.e.", ua: "Помпеї — 79 н.е." },
      formula: "24 VIII 79 n.e.",
      timelineYear: 79,
      visual: gh("116", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Italii z kropką Pompeje, Wezuwiusz w tle ruin świątyni, bez ofiar",
          ua: "Мапа Італії з крапкою Помпеї, Везувій на тлі руїн храму, без жертв"
        },
        title: { pl: "Wulkan zakonserwował miasto", ua: "Вулкан законсервував місто" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy czytelne części, styl Nowej Ery. 1) Mała mapa Półwyspu Apenińskiego, czerwona kropka „Pompeje” na południowym zachodzie. 2) Widok: stożek Wezuwiusza z BIAŁYM pióropuszem dymu DALEKO, miasto-siatka ulic u stóp, amfiteatr jako owal — BEZ lawy zalewającej ludzi, BEZ ciał, BEZ gipsowych odlewów ofiar. 3) Zdjęcie ruin: schody i kolumny świątyni Jowisza, w tle sylwetka wulkanu; podpis „ruiny świątyni Jowisza”. Duża data: „24 sierpnia 79 n.e.”. Tytuł: „Pompeje”.",
          ua: "Мапа: Помпеї. Везувій з димом далеко, місто-сітка. Руїни храму. Дата 79 н.е. БЕЗ тіл і БЕЗ гіпсових мумій."
        }
      }),
      text: {
        pl: [
          ["", em("Pompeje"), " na południu Italii: około 20 tysięcy mieszkańców. ", em("24 sierpnia 79 n.e."), " wulkan ", em("Wezuwiusz"), " zasypał miasto pyłem."],
          ["Pył zakonserwował ulice, termy, amfiteatr i domy. Od XVIII w. trwa odkopywanie — dlatego wiemy, jak wyglądało życie w imperium."]
        ],
        ua: [
          ["", em("Помпеї"), " на півдні Італії: близько 20 тисяч мешканців. ", em("24 серпня 79 н.е."), " вулкан ", em("Везувій"), " засипав місто попелом."],
          ["Попіл законсервував вулиці, терми, амфітеатр і доми. Від XVIII ст. триває розкоп — тому знаємо, як виглядало життя в імперії."]
        ]
      },
      task: {
        id: "h14-79",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku n.e. Wezuwiusz zniszczył Pompeje? Wpisz tylko liczbę.",
          ua: "У якому році н.е. Везувій знищив Помпеї? Введи лише число."
        },
        answer: 79,
        hint: {
          pl: "Siedem, dziewięć. Już nasza era, długo przed 395.",
          ua: "Сім, дев’ять. Уже наша ера, задовго до 395."
        },
        explanation: {
          pl: "79 n.e. Na osi ta data stoi zaraz po bramce „nasza era”, przed podziałem 395.",
          ua: "79 н.е. На осі ця дата стоїть одразу після брами «наша ера», перед поділом 395."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Wieczne Miasto — nazwa Rzymu: miało trwać zawsze", ua: "Вічне Місто — назва Риму: мало тривати завжди" },
        { pl: "Forum Romanum — główny plac: polityka, handel, świątynie", ua: "Forum Romanum — головна площа: політика, торгівля, храми" },
        { pl: "termy — publiczne łaźnie z basenami i salami ćwiczeń", ua: "терми — громадські лазні з басейнами і залами вправ" },
        { pl: "akwedukt — budowla, która niesie wodę pitną do miasta", ua: "акведук — споруда, що несе питну воду до міста" },
        { pl: "panem et circenses — chleb i igrzyska", ua: "panem et circenses — хліб і видовища" },
        { pl: "gladiator — zwykle niewolnik / jeniec / skazaniec na arenie", ua: "гладіатор — зазвичай невільник / полонений / засуджений на арені" },
        { pl: "politeizm — wiara w wielu bogów; lary i penaty — bóstwa domu", ua: "політеїзм — віра в багатьох богів; лари і пенати — божества дому" },
        { pl: "westalki — kapłanki Westy, strażniczki ogniska", ua: "весталки — жриці Вести, охоронниці вогнища" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„W I wieku p.n.e. Rzym liczył stu mieszkańców. Forum to były tylko termy. Spartakus zbuntował się w 79 n.e., a Wezuwiusz zasypał Kartaginę w 73 p.n.e. Jowisz to to samo co Atena.”",
        ua: "«У I столітті до н.е. Рим мав сто мешканців. Форум — це лише терми. Спартак повстав у 79 н.е., а Везувій засипав Карфаген у 73 до н.е. Юпітер — це те саме, що Афіна.»"
      },
      text: {
        pl: [
          "Świetność i milion: I–II w. n.e. Forum = plac, termy = łaźnie. Spartakus: 73 p.n.e. Pompeje: 79 n.e., Wezuwiusz, nie Kartagina. Jowisz = Zeus, Minerwa = Atena."
        ],
        ua: [
          "Розквіт і мільйон: I–II ст. н.е. Форум = площа, терми = лазні. Спартак: 73 до н.е. Помпеї: 79 н.е., Везувій, не Карфаген. Юпітер = Зевс, Мінерва = Афіна."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, w jakich warunkach żyli Rzymianie. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, в яких умовах жили римляни. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: patrycjusze / wille / uczty; plebejusze / kamienice; niewolnicy; woda z akweduktu; igrzyska. Nie opowiadaj o 146 p.n.e."
        ],
        ua: [
          "Підказка: патриції / вілли / бенкети; плебеї / кам’яниці; невільники; вода з акведука; ігри. Не розповідай про 146 до н.е."
        ]
      },
      task: {
        id: "h14-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej opisuje warunki życia w Rzymie?",
          ua: "Яке речення найкраще описує умови життя в Римі?"
        },
        options: [
          { id: "a", label: { pl: "Zamożność dzieliła domy i czas wolny: wille i uczty versus kamienice; miasto żyło dzięki wodzie, drogom i widowiskom", ua: "Заможність ділила домівки і дозвілля: вілли і бенкети проти кам’яниць; місто жило завдяки воді, дорогам і видовищам" } },
          { id: "b", label: { pl: "Wszyscy mieszkali jak faraonowie w piramidach nad Nilem", ua: "Усі жили як фараони в пірамідах над Нілом" } },
          { id: "c", label: { pl: "Rzymianie nie budowali nic, bo limes wystarczał", ua: "Римляни нічого не будували, бо лімесу вистачало" } }
        ],
        answer: "a",
        hint: {
          pl: "NACOBEZU: w jakich warunkach żyli. Trzy grupy + woda.",
          ua: "NACOBEZU: в яких умовах жили. Три групи + вода."
        },
        explanation: {
          pl: "Egipt i limes to inne lekcje. Tu stolica i codzienność.",
          ua: "Єгипет і лімес — інші уроки. Тут столиця і повсякдення."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Planety noszą ich imiona", ua: "Планети носять їхні імена" },
      task: {
        id: "h14-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dlaczego planety Wenus i Mars mają takie nazwy?",
          ua: "Чому планети Венера і Марс мають такі назви?"
        },
        options: [
          { id: "a", label: { pl: "od rzymskich bogów: Wenus (miłość) i Mars (wojna); dziś widać te imiona na mapie nieba", ua: "від римських богів: Венера (любов) і Марс (війна); сьогодні ці імена на мапі неба" } },
          { id: "b", label: { pl: "od nazw legionów nad Dunajem", ua: "від назв легіонів над Дунаєм" } },
          { id: "c", label: { pl: "od imion Romulusa Augustulusa", ua: "від імен Ромула Августула" } }
        ],
        answer: "a",
        hint: {
          pl: "Film pokazuje Układ Słoneczny przy bogach, nie przy 476.",
          ua: "Фільм показує Сонячну систему при богах, не при 476."
        },
        explanation: {
          pl: "To most do dziś. Jowisz też jest planetą — ten sam zwyczaj nazywania.",
          ua: "Це місток до сьогодні. Юпітер теж планета — той самий звичай називання."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h14-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: Forum Romanum · 73 p.n.e. · 79 n.e.",
          ua: "Добери: Forum Romanum · 73 до н.е. · 79 н.е."
        },
        options: [
          { id: "a", label: { pl: "Forum — główny plac; 73 — powstanie Spartakusa; 79 — Wezuwiusz niszczy Pompeje", ua: "Форум — головна площа; 73 — повстання Спартака; 79 — Везувій нищить Помпеї" } },
          { id: "b", label: { pl: "Forum — limes; 73 — Kartagina; 79 — podział cesarstwa", ua: "Форум — лімес; 73 — Карфаген; 79 — поділ імперії" } },
          { id: "c", label: { pl: "Forum — igrzyska 776; 73 — Issos; 79 — Cezar", ua: "Форум — ігри 776; 73 — Ісс; 79 — Цезар" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie nowe daty z osi tej lekcji plus plac z rekonstrukcji.",
          ua: "Дві нові дати з осі цього уроку плюс площа з реконструкції."
        },
        explanation: {
          pl: "395 i 146 zostaw w lekcji 13. Tu miasto, Spartakus i wulkan.",
          ua: "395 і 146 лиши в уроці 13. Тут місто, Спартак і вулкан."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W pierwszych wiekach naszej ery Rzym był największym miastem świata. Zamieszkiwało go około miliona mieszkańców. Centrum stanowiło Forum Romanum — plac z budynkami publicznymi i świątyniami.",
          ["miliona", "Forum Romanum"],
          "У перших століттях нашої ери Рим був найбільшим містом світу. У ньому жило близько мільйона мешканців. Центром було Forum Romanum — площа з громадськими будівлями і храмами.",
          ["мільйона", "Forum Romanum"]
        ),
        mark(
          "Społeczeństwo tworzyli patrycjusze, plebejusze i niewolnicy. Patrycjusze sprawowali urzędy i mieszkali w willach; plebejusze trudnili się rzemiosłem i handlem; niewolnicy byli pozbawieni wolności i praw.",
          ["patrycjusze", "plebejusze", "niewolnicy"],
          "Суспільство творили патриції, плебеї і невільники. Патриції обіймали уряди і жили у віллах; плебеї займалися ремеслом і торгівлею; невільники були позбавлені свободи і прав.",
          ["патриції", "плебеї", "невільники"]
        ),
        mark(
          "Rzymianie wyznawali wielobóstwo. Do najważniejszych bóstw zalicza się Jowisza, Junonę, Minerwę, Neptuna i Marsa. Z czasem utożsamiali ich z bogami greckimi. W 79 n.e. Wezuwiusz zniszczył Pompeje.",
          ["wielobóstwo", "Jowisza", "79 n.e.", "Pompeje"],
          "Римляни сповідували багатобожжя. До найважливіших божеств належать Юпітер, Юнона, Мінерва, Нептун і Марс. З часом ототожнювали їх із грецькими богами. У 79 н.е. Везувій знищив Помпеї.",
          ["багатобожжя", "Юпітер", "79 н.е.", "Помпеї"]
        ),
        mark(
          "W 73–71 p.n.e. wybuchło powstanie gladiatorów. Na czele stanął Spartakus. Trwało około dwóch lat.",
          ["73–71 p.n.e.", "Spartakus"],
          "У 73–71 до н.е. вибухнуло повстання гладіаторів. На чолі став Спартак. Тривало близько двох років.",
          ["73–71 до н.е.", "Спартак"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: dokonania starożytnych Rzymian — prawo, budownictwo i to, co zostało po łacinie, nie kolejny spacer po forum.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: досягнення стародавніх римлян — право, будівництво і те, що лишилось після латини, не ще одна прогулянка форумом.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "r9x1powmMqo",
        title: {
          pl: "Krótkie Lekcje: Życie w Wiecznym Mieście",
          ua: "Короткі уроки: Життя у Вічному Місті"
        }
      }
    }
  ]
};
