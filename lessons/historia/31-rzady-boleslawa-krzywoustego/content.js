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
      heading: { pl: "Rządy Bolesława Krzywoustego", ua: "Правління Болеслава Кривоустого" },
      formula: "1109 · 1138",
      text: {
        pl: [
          "Po wygnaniu Śmiałego (1079) władzę wziął brat Władysław Herman. Potem synowie: Zbigniew i Bolesław.",
          "Na osi KN: 1109 — najazd i Głogów, 1138 — testament. Społeczeństwo grodów — następna lekcja. Rozbicie szerzej — 33."
        ],
        ua: [
          "Після вигнання Сміливого (1079) владу взяв брат Владислав Герман. Потім сини: Збігнєв і Болеслав.",
          "На осі KN: 1109 — напад і Глогув, 1138 — заповіт. Суспільство городів — наступний урок. Розбиття ширше — 33."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać spór Bolesława ze Zbigniewem", ua: "описати спір Болеслава зі Збігнєвом" },
        { pl: "opisać najazd 1109 i obronę Głogowa", ua: "описати напад 1109 і оборону Глогува" },
        { pl: "wskazać na mapie państwo Krzywoustego i Pomorze", ua: "вказати на карті державу Кривоустого і Помор’я" },
        { pl: "wyjaśnić zasadę senioratu i podać datę testamentu 1138", ua: "пояснити принцип сеньйорату і назвати дату заповіту 1138" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Władysław Herman", ua: "Владислав Герман" },
      formula: "książę",
      visual: gh("256", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Władysława Hermana: brat Śmiałego, książę, palatyn Sieciech",
          ua: "Картка Владислава Германа: брат Сміливого, князь, палатин Сецех"
        },
        title: { pl: "Książę, nie Matejko", ua: "Князь, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny książę w płaszczu, bez korony królewskiej, dzień. BEZ Matejki. Cztery punkty PL: „kto — Władysław Herman”; „skąd — brat Bolesława Śmiałego”; „lata — po 1079”; „wsławił się — został księciem, nie królem”. Styl Nowej Ery.",
          ua: "Картка Германа. Князь, не король. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Władysław Herman"), ": kto — młodszy brat ", em("Bolesława Śmiałego"), "; skąd — dwór Piastów; lata — po 1079; wsławił się — wziął władzę, ale ", em("nie koronował się"), " (został księciem)."],
          ["W jego imieniu rządził ", em("palatyn Sieciech"), " — urzędnik z wielką władzą. KN: palatyn to pojęcie tej lekcji."]
        ],
        ua: [
          ["", em("Владислав Герман"), ": хто — молодший брат ", em("Болеслава Сміливого"), "; звідки — двір П’ястів; роки — після 1079; уславився — взяв владу, але ", em("не коронувався"), " (лишився князем)."],
          ["Від його імені правив ", em("палатин Сецех"), " — урядовець із великою владою. KN: палатин — поняття цього уроку."]
        ]
      },
      task: {
        id: "h31-herman",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Władysław Herman po Śmiałym?",
          ua: "Ким був Владислав Герман після Сміливого?"
        },
        options: [
          { id: "a", label: { pl: "bratem Śmiałego; księciem bez koronacji; przy nim silny palatyn Sieciech", ua: "братом Сміливого; князем без коронації; при ньому сильний палатин Сецех" } },
          { id: "b", label: { pl: "to Kazimierz Odnowiciel z lekcji 30", ua: "це Казимир Відновитель з уроку 30" } },
          { id: "c", label: { pl: "papież Grzegorz VII z lekcji 20", ua: "папа Григорій VII з уроку 20" } }
        ],
        answer: "a",
        hint: {
          pl: "Film Zapamiętaj: brat Śmiałego, Sieciech. Nie koronował się.",
          ua: "Фільм Запам’ятай: брат Сміливого, Сецех. Не коронувався."
        },
        explanation: {
          pl: "Odnowiciel = 30. Grzegorz = 20.",
          ua: "Відновитель = 30. Григорій = 20."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dwóch synów", ua: "Два сини" },
      formula: "Zbigniew · Bolesław",
      visual: gh("257", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa za życia Hermana: Zbigniew Wielkopolska i Kujawy, Bolesław Małopolska i Śląsk, ojciec Mazowsze",
          ua: "Карта за життя Германа: Збігнєв Великопольща і Куяви, Болеслав Малопольща і Сілезія, батько Мазовія"
        },
        title: { pl: "Trzy barwy, nie bitwa braci", ua: "Три барви, не битва братів" },
        prompt: {
          pl: "Szkolna mapa 16:9. Podpisy PL: Zbigniew — Wielkopolska, Kujawy; Bolesław — Małopolska, Śląsk; Herman — Mazowsze. Strzałka „bracia usuwają Sieciecha”. BEZ mieczy. Styl Nowej Ery.",
          ua: "Три землі. Збігнєв, Болеслав, Герман. Без бою."
        }
      }),
      text: {
        pl: [
          ["Synowie Hermana to przyrodni bracia: starszy ", em("Zbigniew"), " i młodszy ", em("Bolesław Krzywousty"), ". Razem wypędzili Sieciecha."],
          "Ojciec podzielił ziemie za życia: Zbigniew — Wielkopolska i Kujawy; Bolesław — Małopolska i Śląsk; Herman zatrzymał Mazowsze."
        ],
        ua: [
          ["Сини Германа — зведені брати: старший ", em("Збігнєв"), " і молодший ", em("Болеслав Кривоустий"), ". Разом вигнали Сецеха."],
          "Батько поділив землі за життя: Збігнєв — Великопольща і Куяви; Болеслав — Малопольща і Сілезія; Герман залишив собі Мазовію."
        ]
      },
      task: {
        id: "h31-synowie",
        type: "true-false",
        level: "A",
        question: {
          pl: "Zbigniew i Bolesław razem pokonali palatyna Sieciecha — prawda czy fałsz?",
          ua: "Збігнєв і Болеслав разом перемогли палатина Сецеха — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Film Zapamiętaj. Wojna między braćmi zacznie się po śmierci ojca.",
          ua: "Фільм Запам’ятай. Війна між братами почнеться після смерті батька."
        },
        explanation: {
          pl: "Prawda. Potem stali się rywalami.",
          ua: "Правда. Потім стали суперниками."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Bolesław Krzywousty", ua: "Болеслав Кривоустий" },
      formula: "1102–1138",
      visual: gh("258", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Bolesława Krzywoustego: syn Hermana, przydomek, lata 1102–1138",
          ua: "Картка Болеслава Кривоустого: син Германа, прізвисько, 1102–1138"
        },
        title: { pl: "Spokojny książę, nie karykatura", ua: "Спокійний князь, не карикатура" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny młody książę w płaszczu, dzień. BEZ Matejki, BEZ krzywej twarzy-kpi. Cztery punkty PL: „kto — Bolesław Krzywousty”; „skąd — syn Władysława Hermana”; „lata — 1102–1138”; „wsławił się — Głogów 1109, Pomorze, testament”. Styl Nowej Ery.",
          ua: "Картка Кривоустого. 1102–1138. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Bolesław Krzywousty"), ": kto — młodszy syn Hermana; skąd — Małopolska i Śląsk; lata — władza ", em("1102–1138"), "; przydomek od kształtu ust (bez drwiny)."],
          "Chciał być jedynym władcą i odzyskać ziemie utracone przez Polskę — zwłaszcza drogę do morza."
        ],
        ua: [
          ["", em("Болеслав Кривоустий"), ": хто — молодший син Германа; звідки — Малопольща і Сілезія; роки — влада ", em("1102–1138"), "; прізвисько від форми уст (без насмішки)."],
          "Хотів бути єдиним володарем і повернути землі, втрачені Польщею, — особливо шлях до моря."
        ]
      },
      task: {
        id: "h31-kto",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak brzmi przydomek Bolesława, syna Hermana? Wpisz samo słowo.",
          ua: "Яке прізвисько Болеслава, сина Германа? Введи саме слово."
        },
        answer: ["krzywousty", "krzywoustego", "кривоустий", "кривоустого"],
        hint: {
          pl: "Karta nauczycielki: przydomek. Nie Śmiały (to stryj, lekcja 30).",
          ua: "Картка вчительки: прізвисько. Не Сміливий (то дядько, урок 30)."
        },
        explanation: {
          pl: "Krzywousty. Śmiały = 30. Chrobry = 29.",
          ua: "Кривоустий. Сміливий = 30. Хоробрий = 29."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wojna i Głogów", ua: "Війна і Глогув" },
      formula: "1109",
      timelineYear: 1109,
      visual: gh("259", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa 1109: strzałki Niemiec i Czech na Głogów, Wrocław i Bytom; gród, bez szturmu",
          ua: "Карта 1109: стрілки Німеччини і Чехії на Глогув, Вроцлав і Битом; город, без штурму"
        },
        title: { pl: "Trzy grody, nie dzieci na murze", ua: "Три городи, не діти на мурі" },
        prompt: {
          pl: "Szkolna mapa 16:9. Tytuł: „wojna 1109”. Strzałki z zachodu i południa. Podpisy PL: Głogów, Wrocław, Bytom. Gród z palisadą, dzień. BEZ szturmu, BEZ krwi, BEZ dzieci na murach. Styl Nowej Ery.",
          ua: "1109: Глогув, Вроцлав, Битом. Без штурму і без дітей."
        }
      }),
      text: {
        pl: [
          ["Herman zmarł w ", em("1102"), ". Zaczęła się wojna braci. Bolesław zmusił Zbigniewa do opuszczenia kraju."],
          ["", em("1109"), ": Zbigniew wrócił z królem niemieckim ", em("Henrykiem V"), ". Niemcy i Czesi uderzyli. Obroniono grody: ", em("Głogów"), ", Wrocław, Bytom. Najazd się cofnął. KN: ta data na osi. Na ekranie nie ma sceny oblężenia."]
        ],
        ua: [
          ["Герман помер ", em("1102"), " року. Почалася війна братів. Болеслав змусив Збігнєва покинути край."],
          ["", em("1109"), ": Збігнєв повернувся з німецьким королем ", em("Генріхом V"), ". Німці і чехи вдарили. Оборонили городи: ", em("Глогув"), ", Вроцлав, Битом. Напад відступив. KN: ця дата на осі. На екрані немає сцени облоги."]
        ]
      },
      task: {
        id: "h31-1109",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Niemcy uderzyli na Polskę, a Głogów się obronił? Wpisz tylko liczbę.",
          ua: "У якому році німці вдарили на Польщу, а Глогув оборонили? Введи лише число."
        },
        answer: 1109,
        hint: {
          pl: "Tysiąc sto dziewięć. Karta: oś — data najazdu. Po śmierci Hermana 1102.",
          ua: "Тисяча сто дев’ять. Картка: вісь — дата нападу. Після смерті Германа 1102."
        },
        explanation: {
          pl: "1109. 1138 to testament, nie najazd.",
          ua: "1109. 1138 — заповіт, не напад."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pomorze i Bałtyk", ua: "Помор’я і Балтика" },
      formula: "1116 · 1122",
      visual: gh("260", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Pomorze Gdańskie i Pomorze Zachodnie przyłączone, dostęp do Bałtyku",
          ua: "Карта: Гданське і Західне Помор’я приєднані, доступ до Балтики"
        },
        title: { pl: "Dwa Pomorza, nie porty XXI wieku", ua: "Два Помор’я, не порти XXI століття" },
        prompt: {
          pl: "Szkolna mapa 16:9, Polska 1102–1138. Podpisy PL: Pomorze Gdańskie (ok. 1116), Pomorze Zachodnie (1122), Gdańsk, Szczecin, Bałtyk. Różowy pas do morza. BEZ listy portów 2026 jako głównego rysunku. Styl Nowej Ery.",
          ua: "Помор’я 1116 і 1122. Балтика. Не сучасні порти як головна карта."
        }
      }),
      text: {
        pl: [
          ["Ok. ", em("1116"), " — Pomorze Gdańskie. W ", em("1122"), " — Pomorze Zachodnie. Polska znów miała ", em("dostęp do Bałtyku"), ". Wprowadzano chrześcijaństwo, zakładano grody i miasta."],
          "WSPÓŁCZEŚNIE: brzeg morski znów jest długi (Gdańsk, Gdynia, Szczecin). To ciekawostka, nie KN. 1122 na osi świata to Wormacja z lekcji 20 — tu rok Pomorza."
        ],
        ua: [
          ["Бл. ", em("1116"), " — Гданське Помор’я. ", em("1122"), " — Західне Помор’я. Польща знову мала ", em("доступ до Балтики"), ". Вводили християнство, закладали городи й міста."],
          "СЬОГОДНІ: морський берег знову довгий (Гданськ, Гдиня, Щецин). Це цікавинка, не KN. 1122 на осі світу — Вормс з уроку 20; тут рік Помор’я."
        ]
      },
      task: {
        id: "h31-pomorze",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co było ważnym skutkiem rządów Krzywoustego na północy?",
          ua: "Що було важливим наслідком правління Кривоустого на півночі?"
        },
        options: [
          { id: "a", label: { pl: "przyłączenie Pomorza Gdańskiego i Zachodniego — dostęp do Bałtyku", ua: "приєднання Гданського і Західного Помор’я — доступ до Балтики" } },
          { id: "b", label: { pl: "tylko utrata Milska jak w 1031", ua: "лише втрата Мильська як 1031 року" } },
          { id: "c", label: { pl: "sprowadzenie Krzyżaków w 1226", ua: "запрошення хрестоносців 1226 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Film + karta: dwa Pomorza. Krzyżacy = lekcja 33.",
          ua: "Фільм + картка: два Помор’я. Хрестоносці = урок 33."
        },
        explanation: {
          pl: "1031 = lekcja 30. 1226 = 33.",
          ua: "1031 = урок 30. 1226 = 33."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Testament", ua: "Заповіт" },
      formula: "seniorat",
      visual: gh("261", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa dzielnic testamentu: senioralna z Gnieznem i Krakowem, Śląsk, Wielkopolska, Mazowsze, Sandomierz",
          ua: "Карта уділів заповіту: сеньйоральна з Гнєзном і Краковом, Сілезія, Великопольща, Мазовія, Сандомир"
        },
        title: { pl: "Dzielnice kolorami, nie wojna synów", ua: "Уділи кольорами, не війна синів" },
        prompt: {
          pl: "Szkolna mapa 16:9. Tytuł: „testament Krzywoustego”. Pas senioralny Gniezno–Kraków; Śląsk, Wielkopolska, Mazowsze, ziemia sandomierska, Pomorze. Legenda PL. BEZ bitew. Styl Nowej Ery.",
          ua: "Заповіт: уділи. Сеньйоральна смуга. Без бою."
        }
      }),
      text: {
        pl: [
          ["Krzywousty pamiętał wojnę z bratem. Ustanowił ", em("statut"), " — testament. Synowie mieli wziąć ", em("dzielnice"), ". Najstarszy miał być ", em("seniorem"), ", młodsi — juniorami. To ", em("zasada senioratu"), "."],
          "Chciał uniknąć nowej wojny w rodzinie. Skutek na dłużej — lekcja 33, nie ta godzina."
        ],
        ua: [
          ["Кривоустий пам’ятав війну з братом. Встановив ", em("статут"), " — заповіт. Сини мали взяти ", em("уділи"), ". Найстарший мав бути ", em("сеньйором"), ", молодші — юніорами. Це ", em("принцип сеньйорату"), "."],
          "Хотів уникнути нової війни в родині. Наслідок надовше — урок 33, не ця година."
        ]
      },
      task: {
        id: "h31-senior",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Karta: wymień uprawnienia seniora. Który zestaw jest prawdziwy?",
          ua: "Картка: назви права сеньйора. Який набір правдивий?"
        },
        options: [
          { id: "a", label: { pl: "zwierzchność nad juniorami, prawo wypowiadania wojen, reprezentacja państwa za granicą", ua: "зверхність над юніорами, право оголошувати війни, представництво держави за кордоном" } },
          { id: "b", label: { pl: "tylko koronacja jak w 1025 i 1076", ua: "лише коронація як 1025 і 1076" } },
          { id: "c", label: { pl: "władza palatyna Sieciecha nad Kościołem", ua: "влада палатина Сецеха над Церквою" } }
        ],
        answer: "a",
        hint: {
          pl: "Film: trzy uprawnienia seniora. Sieciech to wcześniejszy palatyn.",
          ua: "Фільм: три права сеньйора. Сецех — раніший палатин."
        },
        explanation: {
          pl: "Korony 1025/1076 = lekcje 29–30.",
          ua: "Корони 1025/1076 = уроки 29–30."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rok 1138", ua: "1138 рік" },
      formula: "1138",
      timelineYear: 1138,
      visual: gh("262", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolny rysunek: statut na stole, synowie stoją ubrani, rok 1138, bez łoża śmierci",
          ua: "Шкільний рисунок: статут на столі, сини стоять вбрані, 1138 рік, без смертного ложа"
        },
        title: { pl: "Zwój, nie łoże Peszki", ua: "Сувій, не ложе Пешки" },
        prompt: {
          pl: "Szkolny rysunek 16:9, dzień. Zwój na stole, kilku synów w szatach, spokój. Napis: „1138”. BEZ łoża śmierci, BEZ Peszki, BEZ żałoby. Styl Nowej Ery.",
          ua: "1138. Статут. Постаті в шатах. Не смертне ложе."
        }
      }),
      text: {
        pl: [
          ["W ", em("1138"), " Bolesław Krzywousty zmarł. Testament zaczął obowiązywać. Podział Polski — w ", em("pierwszej połowie XII wieku"), "."],
          "Między synami szybko wrócił spór. To początek drogi do rozbicia dzielnicowego — szerzej lekcja 33. Tu zapamiętaj datę i zasadę senioratu."
        ],
        ua: [
          ["", em("1138"), " року Болеслав Кривоустий помер. Заповіт почав діяти. Поділ Польщі — у ", em("першій половині XII століття"), "."],
          "Між синами швидко повернувся спір. Це початок шляху до удільного розбиття — ширше урок 33. Тут запам’ятай дату і принцип сеньйорату."
        ]
      },
      task: {
        id: "h31-1138",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku ogłoszono testament Krzywoustego? Wpisz tylko liczbę.",
          ua: "У якому році оголосили заповіт Кривоустого? Введи лише число."
        },
        answer: 1138,
        hint: {
          pl: "Tysiąc sto trzydzieści osiem. KN i karta: ta data na osi. Nie 1109.",
          ua: "Тисяча сто тридцять вісім. KN і картка: ця дата на осі. Не 1109."
        },
        explanation: {
          pl: "1138. 1109 = Głogów. 1226 = Krzyżacy (33).",
          ua: "1138. 1109 = Глогув. 1226 = хрестоносці (33)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Senior", ua: "Сеньйор" },
      formula: "trzy uprawnienia",
      visual: gh("263", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat trzech uprawnień seniora: zwierzchność, wojny, zagranica",
          ua: "Схема трьох прав сеньйора: зверхність, війни, закордон"
        },
        title: { pl: "Trzy ikony, nie bitwa juniorów", ua: "Три ікони, не битва юніорів" },
        prompt: {
          pl: "Szkolny schemat 16:9. Trzy pola z ikonami i podpisami PL: „zwierzchność nad juniorami”; „prawo wypowiadania wojen”; „reprezentacja za granicą”. Korona-książęca nad pasem senioralnym. Dzień. BEZ bitwy. Styl Nowej Ery.",
          ua: "Три права сеньйора. Без бою."
        }
      }),
      text: {
        pl: [
          "Senior miał władzę zwierzchnią, mógł wypowiadać wojny i reprezentował Polskę za granicą. Juniorzy rządzili w swoich dzielnicach.",
          "Hasło z karty nauczycielki to właśnie seniorat: jeden najstarszy nad braćmi, nie nowy król jak w 1025."
        ],
        ua: [
          "Сеньйор мав зверхню владу, міг оголошувати війни і представляв Польщу за кордоном. Юніори правили у своїх уділах.",
          "Ключ із картки вчительки — саме сеньйорат: один найстарший над братами, не новий король як 1025-го."
        ]
      },
      task: {
        id: "h31-wiek",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dokończ: podział Polski przeprowadzono w…",
          ua: "Докінчи: поділ Польщі проведено в…"
        },
        options: [
          { id: "a", label: { pl: "pierwszej połowie XII wieku", ua: "першій половині XII століття" } },
          { id: "b", label: { pl: "X wieku, razem z chrztem 966", ua: "X столітті, разом із хрещенням 966" } },
          { id: "c", label: { pl: "XV wieku, razem z 1453", ua: "XV столітті, разом із 1453" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: 1100–1150 na osi. 1138 to XII wiek, pierwsza połowa.",
          ua: "Картка: 1100–1150 на осі. 1138 — XII століття, перша половина."
        },
        explanation: {
          pl: "1138 = pierwsza połowa XII w. 966 = 28. 1453 = 17.",
          ua: "1138 = перша половина XII ст. 966 = 28. 1453 = 17."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Władysław Herman — brat Śmiałego, książę (bez korony), ojciec Zbigniewa i Bolesława", ua: "Владислав Герман — брат Сміливого, князь (без корони), батько Збігнєва і Болеслава" },
        { pl: "palatyn Sieciech — urzędnik, który rządził w imieniu Hermana, aż synowie go wypędzili", ua: "палатин Сецех — урядовець, який правив від імені Германа, доки сини його не вигнали" },
        { pl: "Zbigniew — starszy przyrodni brat; wojna z Bolesławem; 1109 z Henrykiem V", ua: "Збігнєв — старший зведений брат; війна з Болеславом; 1109 з Генріхом V" },
        { pl: "Bolesław Krzywousty — panował 1102–1138; Głogów, Pomorze, testament", ua: "Болеслав Кривоустий — правив 1102–1138; Глогув, Помор’я, заповіт" },
        { pl: "1109 / Głogów — najazd niemiecki; obrona grodów, wycofanie wroga", ua: "1109 / Глогув — німецький напад; оборона городів, відступ ворога" },
        { pl: "statut / zasada senioratu — testament: dzielnice synom, najstarszy = senior", ua: "статут / принцип сеньйорату — заповіт: уділи синам, найстарший = сеньйор" },
        { pl: "1138 — śmierć Krzywoustego i początek obowiązywania testamentu", ua: "1138 — смерть Кривоустого і початок дії заповіту" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Herman koronował się w 1025. Sieciech to biskup Stanisław. Głogów był w 1138. Testament napisał Mieszko I. Krzyżacy przyszli z Krzywoustym.”",
        ua: "«Герман коронувався 1025 року. Сецех — єпископ Станіслав. Глогув був 1138-го. Заповіт написав Мешко I. Хрестоносці прийшли з Кривоустим.»"
      },
      text: {
        pl: [
          "1025 = Chrobry. Stanisław = 30. Głogów = 1109. Testament = 1138 Krzywousty. Krzyżacy = 33."
        ],
        ua: [
          "1025 = Хоробрий. Станіслав = 30. Глогув = 1109. Заповіт = 1138 Кривоустий. Хрестоносці = 33."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: bracia, 1109, testament. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: брати, 1109, заповіт. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: Zbigniew; Głogów; senior 1138."
        ],
        ua: [
          "Підказка: Збігнєв; Глогув; сеньйор 1138."
        ]
      },
      task: {
        id: "h31-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje spór braci, Głogów i testament?",
          ua: "Яке речення охоплює спір братів, Глогув і заповіт?"
        },
        options: [
          { id: "a", label: { pl: "Po 1102 Bolesław wygrał ze Zbigniewem; 1109 obronił Głogów; 1138 podzielił Polskę testamentem (seniorat)", ua: "Після 1102 Болеслав переміг Збігнєва; 1109 оборонив Глогув; 1138 поділив Польщу заповітом (сеньйорат)" } },
          { id: "b", label: { pl: "To ta sama korona co 1076 u Śmiałego", ua: "Це та сама корона, що 1076 у Сміливого" } },
          { id: "c", label: { pl: "Głogów to bitwa pod Cedynią z 972", ua: "Глогув — битва під Цедінею 972 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele KN i karty: bracia, 1109, 1138.",
          ua: "Цілі KN і картки: брати, 1109, 1138."
        },
        explanation: {
          pl: "1076 = 30. Cedynia = 28.",
          ua: "1076 = 30. Цедіня = 28."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Legenda i ocena", ua: "Легенда і оцінка" },
      task: {
        id: "h31-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Zadanie dodatkowe z karty (Psie Pole) i KN ponadpodstawowe — bez lekcji 33?",
          ua: "Додаткове з картки (Пся Поля) і KN понад базове — без уроку 33?"
        },
        options: [
          { id: "a", label: { pl: "Psie Pole we Wrocławiu wiążą z ucieczką Niemców w 1109 (legenda, nie fakt na osi); testament chciał pokoju, a wyszedł podział — oceniamy zamiar i skutek", ua: "Пся Поля у Вроцлаві пов’язують із втечею німців 1109 (легенда, не факт на осі); заповіт хотів миру, а вийшов поділ — оцінюємо намір і наслідок" } },
          { id: "b", label: { pl: "Gall i Kadłubek to cała ta lekcja, nie Tajemnice sprzed wieków", ua: "Галл і Кадлубек — увесь цей урок, не «Таємниці з віків»" } },
          { id: "c", label: { pl: "trzeba narysować dzieci na murze Głogowa jako KN podstawowe", ua: "треба намалювати дітей на мурі Глогува як KN базове" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: Psie Pole kilkoma zdaniami. KN: oceń statut. Kronikarze — wstawka podręcznika.",
          ua: "Картка: Пся Поля кількома реченнями. KN: оціни статут. Літописці — вставка підручника."
        },
        explanation: {
          pl: "Gall opisuje Głogów — źródło, nie obrazek gore. Krzyżówka z karty nie wchodzi do playera.",
          ua: "Галл описує Глогув — джерело, не рисунок gore. Кросворд з картки не входить у плеєр."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h31-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "1109 i 1138 — co jest prawdą?",
          ua: "1109 і 1138 — що правда?"
        },
        options: [
          { id: "a", label: { pl: "1109 najazd i obrona Głogowa; 1138 testament — podział między synów, zasada senioratu", ua: "1109 напад і оборона Глогува; 1138 заповіт — поділ між синами, принцип сеньйорату" } },
          { id: "b", label: { pl: "1109 to chrzest Mieszka; 1138 to zjazd gnieźnieński", ua: "1109 — хрещення Мешка; 1138 — з’їзд у Гнєзні" } },
          { id: "c", label: { pl: "obie daty należą do Bolesława Śmiałego", ua: "обидві дати належать Болеславу Сміливому" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: te dwie daty na osi. Karta nauczycielki: to samo.",
          ua: "KN: ці дві дати на осі. Картка вчительки: те саме."
        },
        explanation: {
          pl: "966 i 1000 = wcześniej. Śmiały = 30.",
          ua: "966 і 1000 = раніше. Сміливий = 30."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Po Śmiałym rządził brat Władysław Herman. Silny był palatyn Sieciech; synowie Zbigniew i Bolesław go pokonali.",
          ["Władysław Herman", "Sieciech"],
          "Після Сміливого правив брат Владислав Герман. Сильним був палатин Сецех; сини Збігнєв і Болеслав його перемогли.",
          ["Владислав Герман", "Сецех"]
        ),
        mark(
          "Po 1102 była wojna braci. Bolesław zwyciężył. W 1109 obronił Głogów przed najazdem niemieckim.",
          ["1109", "Głogów"],
          "Після 1102 була війна братів. Болеслав переміг. 1109 року оборонив Глогув від німецького нападу.",
          ["1109", "Глогув"]
        ),
        mark(
          "Krzywousty przyłączył Pomorze Gdańskie i Zachodnie. Polska znów sięgnęła Bałtyku.",
          ["Pomorze", "Bałtyku"],
          "Кривоустий приєднав Гданське і Західне Помор’я. Польща знову сягнула Балтики.",
          ["Помор’я", "Балтики"]
        ),
        mark(
          "Zmarł w 1138. Testament podzielił Polskę między synów: najstarszy miał być seniorem.",
          ["1138", "seniorem"],
          "Помер 1138 року. Заповіт поділив Польщу між синами: найстарший мав бути сеньйором.",
          ["1138", "сеньйором"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: społeczeństwo pierwszych Piastów — gród i danina, nie 1138 na nowo. Rozbicie dzielnicowe szerzej — lekcja 33.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: суспільство перших П’ястів — город і данина, не 1138 наново. Удільне розбиття ширше — урок 33.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "VvcTDOmld2M",
        title: {
          pl: "Krótkie Lekcje: Rządy Bolesława Krzywoustego",
          ua: "Короткі уроки: Правління Болеслава Кривоустого"
        }
      }
    }
  ]
};
