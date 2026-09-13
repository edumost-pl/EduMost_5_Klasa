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
      heading: { pl: "Czasy świetności dynastii Jagiellonów", ua: "Часи розквіту династії Ягеллонів" },
      formula: "1444 · 1454 · 1466",
      text: {
        pl: [
          "Z lekcji 36: unia z Litwą, Grunwald 1410, Horodło 1413. I pokój toruński nie oddał Pomorza.",
          "Dziś synowie Jagiełły: Warna 1444, wojna trzynastoletnia 1454–1466 i II pokój toruński — Gdańsk wraca do Polski."
        ],
        ua: [
          "З уроку 36: унія з Литвою, Грюнвальд 1410, Городло 1413. I торунський мир не віддав Помор’я.",
          "Сьогодні сини Ягайла: Варна 1444, тринадцятилітня війна 1454–1466 і II торунський мир — Гданськ повертається до Польщі."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, kim był Władysław Warneńczyk i podać bitwę pod Warną 1444", ua: "сказати, ким був Владислав Варненчик, і назвати битву під Варною 1444" },
        { pl: "wyjaśnić, kim był Kazimierz Jagiellończyk i czym był Związek Pruski", ua: "пояснити, ким був Казимир Ягеллончик і чим був Прусський союз" },
        { pl: "opisać wojnę trzynastoletnią 1454–1466 i II pokój toruński", ua: "описати тринадцятилітню війну 1454–1466 і II торунський мир" },
        { pl: "wskazać na mapie Warnę, Gdańsk, Toruń, Malbork oraz Prusy Królewskie i Zakonne", ua: "вказати на карті Варну, Гданськ, Торунь, Мальборк та Королівську і Орденську Пруссію" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Władysław Warneńczyk", ua: "Владислав Варненчик" },
      visual: gh("304", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Władysława Warneńczyka: syn Jagiełły, król Polski i Węgier",
          ua: "Картка Владислава Варненчика: син Ягайла, король Польщі і Угорщини"
        },
        title: { pl: "Syn Jagiełły, nie Matejko", ua: "Син Ягайла, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny młody król w koronie, dzień, ubrany, BEZ bitwy, BEZ łoża śmierci, BEZ Matejki. Cztery punkty PL: „kto — Władysław Warneńczyk, syn Jagiełły”; „skąd — Polska i Węgry”; „lata — król, Warna 1444”; „wsławił się — wyprawa przeciw Turkom”. Styl Nowej Ery.",
          ua: "Варненчик. Без бою і Матейка."
        }
      }),
      text: {
        pl: [
          ["Po Jagielle królem został jego syn ", em("Władysław"), ". Panował też na Węgrzech. Przydomek ", em("Warneńczyk"), " wzięła się od miejsca bitwy."],
          "Europa bała się Turków osmańskich (w lekcji 17: 1453 — zdobycie Konstantynopola). Władysław ruszył na południe, zanim to miasto padło."
        ],
        ua: [
          ["Після Ягайла королем став його син ", em("Владислав"), ". Правив також в Угорщині. Прізвисько ", em("Варненчик"), " походить від місця битви."],
          "Європа боялась османських турків (в уроці 17: 1453 — здобуття Константинополя). Владислав рушив на південь, перш ніж це місто впало."
        ]
      },
      task: {
        id: "h37-warnenczyk",
        type: "true-false",
        level: "A",
        question: {
          pl: "Władysław Warneńczyk był synem Jagiełły i królem Polski oraz Węgier — prawda czy fałsz?",
          ua: "Владислав Варненчик був сином Ягайла і королем Польщі та Угорщини — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Przydomek od Warny, nie od Grunwaldu.",
          ua: "Прізвисько від Варни, не від Грюнвальду."
        },
        explanation: {
          pl: "Prawda. Bitwa jest na następnym ekranie.",
          ua: "Правда. Битва — на наступному екрані."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Warna 1444", ua: "Варна 1444" },
      formula: "1444",
      timelineYear: 1444,
      visual: gh("305", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Warna nad Morzem Czarnym, kierunek wyprawy 1444",
          ua: "Карта: Варна над Чорним морем, напрям походу 1444"
        },
        title: { pl: "Jedna mapa, nie obraz rzezi", ua: "Одна карта, не картина різанини" },
        prompt: {
          pl: "Szkolna mapa 16:9. Polska/Węgry strzałką na południe ku Morzu Czarnemu. Krzyżyk Warna 1444. Napis PL: „klęska; król zginął”. BEZ ciał, BEZ Matejki, BEZ łoża śmierci. Styl Nowej Ery.",
          ua: "Варна 1444. Карта. Без бою."
        }
      }),
      text: {
        pl: [
          ["W ", em("1444"), " pod ", em("Warną"), " (dziś Bułgaria, Morze Czarne) wojska Władysława uległy Turkom. Król zginął."],
          "To nie Grunwald: tu Polska i Węgry przegrały. Po Warnie tron polski objął młodszy brat — Kazimierz."
        ],
        ua: [
          ["", em("1444"), " року під ", em("Варною"), " (сьогодні Болгарія, Чорне море) війська Владислава програли туркам. Король загинув."],
          "Це не Грюнвальд: тут Польща і Угорщина програли. Після Варни на польський престол сів молодший брат — Казимир."
        ]
      },
      task: {
        id: "h37-1444",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku stoczono bitwę pod Warną? Wpisz rok.",
          ua: "Якого року відбулася битва під Варною? Введи рік."
        },
        answer: 1444,
        hint: {
          pl: "Po Horodle 1413, przed wojną trzynastoletnią 1454. Nie 1410.",
          ua: "Після Городла 1413, перед тринадцятилітньою війною 1454. Не 1410."
        },
        explanation: {
          pl: "1444. 1410 = Grunwald (36). 1453 = Turcy w Konstantynopolu (17).",
          ua: "1444. 1410 = Грюнвальд (36). 1453 = турки в Константинополі (17)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kazimierz Jagiellończyk", ua: "Казимир Ягеллончик" },
      visual: gh("306", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Kazimierza Jagiellończyka: brat Warneńczyka, król Polski",
          ua: "Картка Казимира Ягеллончика: брат Варненчика, король Польщі"
        },
        title: { pl: "Nie Kazimierz Wielki", ua: "Не Казимир Великий" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny król w koronie, dzień, BEZ Matejki. Cztery punkty PL: „kto — Kazimierz Jagiellończyk”; „skąd — syn Jagiełły, brat Warneńczyka”; „lata — król po 1444; wojna 1454–1466”; „wsławił się — Gdańsk wraca do Polski”. Mała etykieta: „nie mylić z Kazimierzem Wielkim (35)”. Styl Nowej Ery.",
          ua: "Казимир Ягеллончик. Не Казимир Великий."
        }
      }),
      text: {
        pl: [
          ["", em("Kazimierz Jagiellończyk"), " — młodszy syn Jagiełły, brat Warneńczyka. To inny Kazimierz niż Wielki z lekcji 35 (ostatni Piast)."],
          "Za jego panowania Polska wróciła nad Bałtyk. Najpierw miasta pruskie poprosiły króla o pomoc przeciw zakonowi."
        ],
        ua: [
          ["", em("Казимир Ягеллончик"), " — молодший син Ягайла, брат Варненчика. Це інший Казимир, ніж Великий з уроку 35 (останній П’яст)."],
          "За його правління Польща повернулась над Балтику. Спершу прусські міста попросили короля про допомогу проти ордену."
        ]
      },
      task: {
        id: "h37-kazimierz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Kazimierz Jagiellończyk?",
          ua: "Ким був Казимир Ягеллончик?"
        },
        options: [
          { id: "a", label: { pl: "synem Jagiełły i bratem Warneńczyka", ua: "сином Ягайла і братом Варненчика" } },
          { id: "b", label: { pl: "ostatnim Piastem z lekcji 35", ua: "останнім П’ястом з уроку 35" } },
          { id: "c", label: { pl: "wielkim mistrzem Krzyżaków", ua: "великим магістром хрестоносців" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa Kazimierze: Wielki = Piast. Ten = Jagiellon.",
          ua: "Два Казимири: Великий = П’яст. Цей = Ягеллон."
        },
        explanation: {
          pl: "Kazimierz Wielki umarł w 1370. Jagiellończyk żył w XV wieku.",
          ua: "Казимир Великий помер 1370 року. Ягеллончик жив у XV столітті."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Związek Pruski", ua: "Прусський союз" },
      visual: gh("307", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: miasta pruskie proszą króla Polski przeciw zakonowi",
          ua: "Схема: прусські міста просять короля Польщі проти ордену"
        },
        title: { pl: "Miasta przeciw zakonowi", ua: "Міста проти ордену" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dzień. Po lewej: mieszczanie z dokumentem, podpis „Związek Pruski”. Po prawej: Krzyżak stoi (nie szarża). Strzałka do króla Polski. Napis: „prosimy o opiekę”. BEZ rzezi, BEZ foto Malborka. Styl Nowej Ery.",
          ua: "Прусський союз. Міста просять короля. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Związek Pruski"), " to sojusz miast i rycerzy na ziemiach zakonu. Krzyżacy rządzili ostro; miasta chciały handlu i spokoju."],
          "W 1454 Związek poddał się królowi Polski. Kazimierz przyjął Prusy. Zakon nie zgodził się — zaczęła się wojna."
        ],
        ua: [
          ["", em("Прусський союз"), " — це союз міст і лицарів на землях ордену. Хрестоносці правили жорстко; міста хотіли торгівлі і спокою."],
          "1454 року Союз піддався королю Польщі. Казимир прийняв Пруссію. Орден не погодився — почалася війна."
        ]
      },
      task: {
        id: "h37-zwiazek",
        type: "true-false",
        level: "A",
        question: {
          pl: "Związek Pruski to sojusz miast i rycerzy, który w 1454 zwrócił się do króla Polski przeciw Krzyżakom — prawda czy fałsz?",
          ua: "Прусський союз — це союз міст і лицарів, який 1454 року звернувся до короля Польщі проти хрестоносців — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z unią w Krewie (36).",
          ua: "Не плутай з унією в Креві (36)."
        },
        explanation: {
          pl: "Prawda. 1454 otwiera wojnę trzynastoletnią.",
          ua: "Правда. 1454 відкриває тринадцятилітню війну."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wojna trzynastoletnia", ua: "Тринадцятилітня війна" },
      formula: "1454–1466",
      timelineYear: 1454,
      visual: gh("308", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa wojny trzynastoletniej: Gdańsk, Toruń, Malbork, Pomorze",
          ua: "Карта тринадцятилітньої війни: Гданськ, Торунь, Мальборк, Помор’я"
        },
        title: { pl: "Jedna mapa wojny, nie szarża", ua: "Одна карта війни, не атака" },
        prompt: {
          pl: "Szkolna mapa 16:9. Pomorze Gdańskie i Prusy. Etykiety: Gdańsk, Toruń, Malbork. Napis „wojna trzynastoletnia 1454–1466”. Strzałki spokojne, BEZ bitew z ciałami, BEZ Matejki, BEZ foto zamku jako jedynego slajdu. Styl Nowej Ery.",
          ua: "1454–1466. Карта. Без бою і Матейка."
        }
      }),
      text: {
        pl: [
          ["", em("Wojna trzynastoletnia"), " trwała ", em("1454–1466"), " — trzynaście lat. Polska walczyła o powrót nad morze, utracone w 1309 (lekcja 34)."],
          "Walka była długa i kosztowna. Szlachta dostała wtedy przywileje (m.in. w Nieszawie), żeby zgodzić się na wojnę — to most do lekcji 38, nie główna data tej godziny."
        ],
        ua: [
          ["", em("Тринадцятилітня війна"), " тривала ", em("1454–1466"), " — тринадцять років. Польща билась за повернення над море, втрачене 1309 року (урок 34)."],
          "Боротьба була довгою і дорогою. Шляхта тоді дістала привілеї (зокрема в Нешаві), щоб погодитись на війну — це міст до уроку 38, не головна дата цієї години."
        ]
      },
      task: {
        id: "h37-1454",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zaczęła się wojna trzynastoletnia? Wpisz rok.",
          ua: "Якого року почалася тринадцятилітня війна? Введи рік."
        },
        answer: 1454,
        hint: {
          pl: "Związek Pruski + początek wojny. Nie 1410 i nie 1505.",
          ua: "Прусський союз + початок війни. Не 1410 і не 1505."
        },
        explanation: {
          pl: "1454. 1410 = Grunwald. 1505 = Nihil novi (38).",
          ua: "1454. 1410 = Грюнвальд. 1505 = Nihil novi (38)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "II pokój toruński 1466", ua: "II торунський мир 1466" },
      formula: "1466",
      timelineYear: 1466,
      visual: gh("309", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat II pokoju toruńskiego: dokument 1466, Gdańsk wraca",
          ua: "Схема II торунського миру: документ 1466, Гданськ повертається"
        },
        title: { pl: "Inny pokój niż 1411", ua: "Інший мир, ніж 1411" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dokument z datą 1466. Dwie kolumny: „I pokój 1411 — Pomorze zostaje przy zakonie” vs „II pokój 1466 — Gdańsk i Prusy Królewskie wracają”. BEZ foto pergaminu z Wiki jako jedynego slajdu. Styl Nowej Ery.",
          ua: "1466. Не 1411. Гданськ повертається."
        }
      }),
      text: {
        pl: [
          ["W ", em("1466"), " w Toruniu spisano ", em("II pokój toruński"), ". Polska odzyskała ", em("Pomorze Gdańskie"), " z Gdańskiem, ziemię chełmińską i Warmię."],
          "To nie I pokój z 1411 (lekcja 36): tam zakon zostawił sobie morze. Teraz Polska znów ma port."
        ],
        ua: [
          ["", em("1466"), " року в Торуні записали ", em("II торунський мир"), ". Польща повернула ", em("Гданське Помор’я"), " з Гданськом, хелмінську землю і Вармію."],
          "Це не I мир 1411 року (урок 36): тоді орден лишив собі море. Тепер Польща знову має порт."
        ]
      },
      task: {
        id: "h37-1466",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zawarto II pokój toruński? Wpisz rok.",
          ua: "Якого року укладено II торунський мир? Введи рік."
        },
        answer: 1466,
        hint: {
          pl: "Koniec wojny trzynastoletniej. 1411 to I pokój.",
          ua: "Кінець тринадцятилітньої війни. 1411 — I мир."
        },
        explanation: {
          pl: "1466. 1343 = Kalisz (35). 1411 = I Toruń (36).",
          ua: "1466. 1343 = Каліш (35). 1411 = I Торунь (36)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Prusy Królewskie i Zakonne", ua: "Королівська і Орденська Пруссія" },
      visual: gh("310", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa po 1466: Prusy Królewskie przy Polsce, Prusy Zakonne jako lenno",
          ua: "Карта після 1466: Королівська Пруссія при Польщі, Орденська як лен"
        },
        title: { pl: "Dwa Prusy po wojnie", ua: "Дві Пруссії після війни" },
        prompt: {
          pl: "Szkolna mapa 16:9 po 1466. Pole „Prusy Królewskie” przy Polsce: Gdańsk, Toruń, Elbląg, Warmia. Pole „Prusy Zakonne” wokół Królewca, podpis „lenno Polski”. Malbork w Prusach Królewskich. BEZ granic 2026, BEZ rozbiorów. Styl Nowej Ery.",
          ua: "Королівська Пруссія і Орденська. Не сучасні кордони."
        }
      }),
      text: {
        pl: [
          ["", em("Prusy Królewskie"), " weszły do Polski (Gdańsk, Toruń, Elbląg, Warmia). ", em("Prusy Zakonne"), " (wokół Królewca) zostały przy Krzyżakach, ale jako ", em("lenno"), " króla Polski."],
          "Wielki mistrz składał hołd — jak w lekcji 22, tylko tu zakon jest wasalem polskiego króla."
        ],
        ua: [
          ["", em("Королівська Пруссія"), " увійшла до Польщі (Гданськ, Торунь, Ельблонг, Вармія). ", em("Орденська Пруссія"), " (навколо Кенігсберга) лишилась за хрестоносцями, але як ", em("лен"), " короля Польщі."],
          "Великий магістр складав присягу — як в уроці 22, тільки тут орден є васалом польського короля."
        ]
      },
      task: {
        id: "h37-prusy",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co stało się z ziemiami zakonu po II pokoju toruńskim?",
          ua: "Що сталося із землями ордену після II торунського миру?"
        },
        options: [
          { id: "a", label: { pl: "Prusy Królewskie weszły do Polski; Prusy Zakonne zostały lennem króla", ua: "Королівська Пруссія увійшла до Польщі; Орденська стала леном короля" } },
          { id: "b", label: { pl: "cały zakon zniknął już w 1410", ua: "весь орден зник уже 1410 року" } },
          { id: "c", label: { pl: "Polska oddała Gdańsk Krzyżakom jak w 1309", ua: "Польща віддала Гданськ хрестоносцям, як 1309 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa Prusy. 1410 osłabił zakon, 1466 podzielił ziemie.",
          ua: "Дві Пруссії. 1410 послабив орден, 1466 поділив землі."
        },
        explanation: {
          pl: "1309 = utrata morza (34). 1466 = powrót Gdańska.",
          ua: "1309 = втрата моря (34). 1466 = повернення Гданська."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa Jagiellonów", ua: "Карта Ягеллонів" },
      visual: gh("311", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Warna, Gdańsk, Toruń, Malbork — miejsca tej lekcji",
          ua: "Карта: Варна, Гданськ, Торунь, Мальборк — місця цього уроку"
        },
        title: { pl: "Cztery nazwy do wskazania", ua: "Чотири назви, які треба вказати" },
        prompt: {
          pl: "Szkolna mapa 16:9 Europy Środkowo-Wschodniej XV w. Etykiety: Warna, Gdańsk, Toruń, Malbork. Mała strzałka „Bałtyk”. BEZ unii lubelskiej 1569, BEZ granic 2026. Styl Nowej Ery.",
          ua: "Варна, Гданськ, Торунь, Мальборк. Без Любліна 1569."
        }
      }),
      text: {
        pl: [
          "Na mapie wskaż: Warnę, Gdańsk, Toruń i Malbork.",
          "Unia lubelska 1569 nie jest klasą 5 — kończymy na XV wieku i pokoju 1466."
        ],
        ua: [
          "На карті вкажи: Варну, Гданськ, Торунь і Мальборк.",
          "Люблінська унія 1569 не є 5 класом — закінчуємо XV століттям і миром 1466."
        ]
      },
      task: {
        id: "h37-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które miejsca należą do tej lekcji?",
          ua: "Які місця належать до цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Warna, Gdańsk, Toruń, Malbork", ua: "Варна, Гданськ, Торунь, Мальборк" } },
          { id: "b", label: { pl: "Krewo, Horodło i Grunwald z lekcji 36", ua: "Крево, Городло і Грюнвальд з уроку 36" } },
          { id: "c", label: { pl: "Kalisz 1343 i Akademia 1364", ua: "Каліш 1343 і Академія 1364" } }
        ],
        answer: "a",
        hint: {
          pl: "36 = Krewo i Grunwald. 35 = Kalisz.",
          ua: "36 = Крево і Грюнвальд. 35 = Каліш."
        },
        explanation: {
          pl: "To lista KN tej godziny.",
          ua: "Це список KN цієї години."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Warneńczyk — Władysław, syn Jagiełły; przydomek od Warny 1444", ua: "Варненчик — Владислав, син Ягайла; прізвисько від Варни 1444" },
        { pl: "Kazimierz Jagiellończyk — brat Warneńczyka, nie Kazimierz Wielki", ua: "Казимир Ягеллончик — брат Варненчика, не Казимир Великий" },
        { pl: "Związek Pruski — sojusz miast i rycerzy przeciw zakonowi (1454)", ua: "Прусський союз — союз міст і лицарів проти ордену (1454)" },
        { pl: "wojna trzynastoletnia — wojna Polski z zakonem 1454–1466", ua: "тринадцятилітня війна — війна Польщі з орденом 1454–1466" },
        { pl: "Prusy Królewskie — ziemie, które w 1466 weszły do Polski", ua: "Королівська Пруссія — землі, які 1466 року увійшли до Польщі" },
        { pl: "Prusy Zakonne — reszta zakonu jako lenno króla Polski", ua: "Орденська Пруссія — решта ордену як лен короля Польщі" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Warneńczyk wygrał pod Grunwaldem w 1444. Kazimierz Jagiellończyk to ostatni Piast. II pokój toruński to 1411. Unia lubelska 1569 jest w tej lekcji.”",
        ua: "«Варненчик виграв під Грюнвальдом 1444 року. Казимир Ягеллончик — останній П’яст. II торунський мир — 1411. Люблінська унія 1569 є в цьому уроці.»"
      },
      text: {
        pl: [
          "Warna 1444 = klęska, nie Grunwald. Jagiellończyk ≠ Wielki. II Toruń = 1466; 1411 = I pokój. 1569 nie jest klasą 5."
        ],
        ua: [
          "Варна 1444 = поразка, не Грюнвальд. Ягеллончик ≠ Великий. II Торунь = 1466; 1411 = I мир. 1569 не є 5 класом."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: Warna, Kazimierz Jagiellończyk, wojna trzynastoletnia, II pokój toruński. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: Варна, Казимир Ягеллончик, тринадцятилітня війна, II торунський мир. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1444 klęska; 1454–1466; Gdańsk wraca; dwa Prusy."
        ],
        ua: [
          "Підказка: 1444 поразка; 1454–1466; Гданськ повертається; дві Пруссії."
        ]
      },
      task: {
        id: "h37-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę tej godziny?",
          ua: "Яке речення замикає нотатку цієї години?"
        },
        options: [
          { id: "a", label: { pl: "1444 Warna; 1454–1466 wojna trzynastoletnia; 1466 II pokój toruński — Gdańsk i Prusy Królewskie wracają", ua: "1444 Варна; 1454–1466 тринадцятилітня війна; 1466 II торунський мир — Гданськ і Королівська Пруссія повертаються" } },
          { id: "b", label: { pl: "To tylko Krewo 1385 z lekcji 36", ua: "Це лише Крево 1385 з уроку 36" } },
          { id: "c", label: { pl: "To Nihil novi 1505 z lekcji 38", ua: "Це Nihil novi 1505 з уроку 38" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty KN na osi.",
          ua: "Три дати KN на осі."
        },
        explanation: {
          pl: "36 = Krewo. 38 = Koszyce i Nihil novi.",
          ua: "36 = Крево. 38 = Кошице і Nihil novi."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Nieszawa i dwa pokoje", ua: "Нешава і два мири" },
      task: {
        id: "h37-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Ponadpodstawowe: przywileje nieszawskie i różnica obu pokojów toruńskich?",
          ua: "Понад базове: нешавські привілеї і різниця обох торунських мирів?"
        },
        options: [
          { id: "a", label: { pl: "W 1454 król obiecał szlachcie, że bez jej zgody nie wyda nowego prawa (Nieszawa); I pokój 1411 nie oddał morza, II pokój 1466 oddał Gdańsk", ua: "1454 року король обіцяв шляхті, що без її згоди не видасть нового права (Нешава); I мир 1411 не віддав моря, II мир 1466 віддав Гданськ" } },
          { id: "b", label: { pl: "Nieszawa zastępuje Koszyce 1374 i Nihil novi 1505", ua: "Нешава замінює Кошице 1374 і Nihil novi 1505" } },
          { id: "c", label: { pl: "oba pokoje toruńskie to ten sam rok 1343", ua: "обидва торунські мири — той самий рік 1343" } }
        ],
        answer: "a",
        hint: {
          pl: "KN tej godziny = 1444 / 1454 / 1466. Koszyce 1374 i Nihil novi 1505 = 38.",
          ua: "KN цієї години = 1444 / 1454 / 1466. Кошице 1374 і Nihil novi 1505 = 38."
        },
        explanation: {
          pl: "Nieszawa pomaga zrozumieć, dlaczego szlachta rosła w siłę — pełny ustrój w 38.",
          ua: "Нешава допомагає зрозуміти, чому шляхта зростала в силі — повний устрій у 38."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h37-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o czasach Jagiellonów w tej lekcji?",
          ua: "Що правда про часи Ягеллонів у цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "1444 Warna (klęska); 1454–1466 wojna trzynastoletnia; 1466 II pokój — Prusy Królewskie w Polsce, Zakonne jako lenno", ua: "1444 Варна (поразка); 1454–1466 тринадцятилітня війна; 1466 II мир — Королівська Пруссія в Польщі, Орденська як лен" } },
          { id: "b", label: { pl: "to samo co unia w Krewie 1385", ua: "те саме, що унія в Креві 1385" } },
          { id: "c", label: { pl: "Kazimierz Wielki odzyskał Gdańsk w 1343", ua: "Казимир Великий повернув Гданськ 1343 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty na osi. 1343 = Kujawy, nie Gdańsk.",
          ua: "Три дати на осі. 1343 = Куяви, не Гданськ."
        },
        explanation: {
          pl: "Kalisz 1343 zostawił Pomorze zakonowi. 1466 je oddał.",
          ua: "Каліш 1343 лишив Помор’я ордену. 1466 його віддав."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Władysław Warneńczyk, syn Jagiełły, zginął w 1444 pod Warną w walce z Turkami. To klęska, nie drugie Grunwald.",
          ["1444", "Warną"],
          "Владислав Варненчик, син Ягайла, загинув 1444 року під Варною в боротьбі з турками. Це поразка, не другий Грюнвальд.",
          ["1444", "Варною"]
        ),
        mark(
          "Kazimierz Jagiellończyk (nie Wielki) przyjął Związek Pruski. Wojna trzynastoletnia trwała 1454–1466.",
          ["Jagiellończyk", "1454"],
          "Казимир Ягеллончик (не Великий) прийняв Прусський союз. Тринадцятилітня війна тривала 1454–1466.",
          ["Ягеллончик", "1454"]
        ),
        mark(
          "W 1466 II pokój toruński: Prusy Królewskie (z Gdańskiem) weszły do Polski; Prusy Zakonne zostały lennem króla.",
          ["1466", "Prusy Królewskie"],
          "1466 року II торунський мир: Королівська Пруссія (з Гданськом) увійшла до Польщі; Орденська стала леном короля.",
          ["1466", "Королівська Пруссія"]
        ),
        mark(
          "Potrafię powiedzieć: po Warnie Kazimierz Jagiellończyk odzyskał morze wojną trzynastoletnią i pokojem 1466.",
          ["morze", "1466"],
          "Можу сказати: після Варни Казимир Ягеллончик повернув море тринадцятилітньою війною і миром 1466.",
          ["море", "1466"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: monarchia stanowa — przywileje szlachty, Koszyce 1374 i Nihil novi 1505, nie nowa wojna o Gdańsk.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: станова монархія — привілеї шляхти, Кошице 1374 і Nihil novi 1505, не нова війна за Гданськ.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "__r0DOKe43E",
        title: {
          pl: "Krótkie Lekcje: Czasy świetności dynastii Jagiellonów",
          ua: "Короткі уроки: Часи розквіту династії Ягеллонів"
        }
      }
    }
  ]
};
