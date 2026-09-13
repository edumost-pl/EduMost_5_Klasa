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
      heading: { pl: "Unia polsko-litewska", ua: "Польсько-литовська унія" },
      formula: "1385 · 1410 · 1413",
      text: {
        pl: [
          "Z lekcji 35: Kazimierz nie zostawił syna. Koronę wzięli Andegawenowie, potem Jadwiga.",
          "Dziś związek Polski i Litwy: Krewo 1385, wielka wojna i Grunwald 1410, Horodło 1413."
        ],
        ua: [
          "З уроку 35: Казимир не залишив сина. Корону взяли Анжуйці, потім Ядвіга.",
          "Сьогодні зв’язок Польщі і Литви: Крево 1385, велика війна і Грюнвальд 1410, Городло 1413."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić, jak Jadwiga objęła tron i podać unię w Krewie 1385", ua: "пояснити, як Ядвіга сіла на престол, і назвати унію в Креві 1385" },
        { pl: "powiedzieć, kim byli Jadwiga i Władysław Jagiełło, i czym jest unia personalna", ua: "сказати, ким були Ядвіга і Владислав Ягайло, і що таке персональна унія" },
        { pl: "opisać wielką wojnę z zakonem i Grunwald 1410", ua: "описати велику війну з орденом і Грюнвальд 1410" },
        { pl: "podać unię w Horodle 1413 i wskazać Litwę, Krewo, Grunwald, Horodło na mapie", ua: "назвати унію в Городлі 1413 і вказати Литву, Крево, Грюнвальд, Городло на карті" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Jadwiga", ua: "Ядвіга" },
      visual: gh("296", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Jadwigi Andegaweńskiej: córka Ludwika, król Polski",
          ua: "Картка Ядвіги Анжуйської: донька Людовика, король Польщі"
        },
        title: { pl: "Córka Ludwika, nie bajka", ua: "Донька Людовика, не казка" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojna młoda królowa w koronie, dzień, ubrana, BEZ Matejki, BEZ ślubu jako romansu. Cztery punkty PL: „kto — Jadwiga Andegaweńska”; „skąd — córka Ludwika Węgierskiego”; „lata — koronacja 1384”; „wsławiła się — tron Polski, unia z Litwą”. Styl Nowej Ery.",
          ua: "Ядвіга. 1384. Без романсу і Матейка."
        }
      }),
      text: {
        pl: [
          ["Po Kazimierzu królem Polski został ", em("Ludwik Węgierski"), " (Andegawenowie). Polacy nie chcieli unii z Węgrami na stałe."],
          ["Na tron powołano córkę Ludwika — ", em("Jadwigę"), " (koronacja 1384). W klasie 5 mówimy: dziewczynka została królem Polski, bo tak brzmiał tytuł."]
        ],
        ua: [
          ["Після Казимира королем Польщі став ", em("Людовик Угорський"), " (Анжуйці). Поляки не хотіли унії з Угорщиною назавжди."],
          ["На престол покликали доньку Людовика — ", em("Ядвігу"), " (коронація 1384). У 5 класі кажемо: дівчинка стала королем Польщі, бо так звучав титул."]
        ]
      },
      task: {
        id: "h36-jadwiga",
        type: "true-false",
        level: "A",
        question: {
          pl: "Jadwiga była córką Ludwika Węgierskiego i objęła tron Polski po Andegawenach — prawda czy fałsz?",
          ua: "Ядвіга була донькою Людовика Угорського і сіла на престол Польщі після Анжуйців — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Most z lekcji 35: brak syna Kazimierza → Ludwik → Jadwiga.",
          ua: "Міст з уроку 35: немає сина Казимира → Людовик → Ядвіга."
        },
        explanation: {
          pl: "Prawda. Jagiełło jest następnym ekranem.",
          ua: "Правда. Ягайло — наступний екран."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jagiełło", ua: "Ягайло" },
      visual: gh("297", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Władysława Jagiełły: wielki książę Litwy, potem król Polski",
          ua: "Картка Владислава Ягайла: великий князь Литви, потім король Польщі"
        },
        title: { pl: "Litwa, nie Krzyżak", ua: "Литва, не хрестоносець" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny władca, dzień, BEZ bitwy, BEZ Matejki. Cztery punkty PL: „kto — Jagiełło, potem Władysław”; „skąd — Wielkie Księstwo Litewskie”; „lata — unia 1385, chrzest 1386”; „wsławił się — król Polski, początek Jagiellonów”. Styl Nowej Ery.",
          ua: "Ягайло. Литва. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Jagiełło"), " był wielkim księciem ", em("Litwy"), " — ostatniego wielkiego państwa pogańskiego w Europie."],
          "Chrzest otwierał mu drogę do korony polskiej i sojuszu przeciw Krzyżakom. Na chrzcie przyjął imię Władysław. Zaczyna się dynastia Jagiellonów."
        ],
        ua: [
          ["", em("Ягайло"), " був великим князем ", em("Литви"), " — останньої великої язичницької держави в Європі."],
          "Хрещення відчиняло йому шлях до польської корони і союзу проти хрестоносців. На хрещенні прийняв ім’я Владислав. Починається династія Ягеллонів."
        ]
      },
      task: {
        id: "h36-jagiello",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Jagiełło, zanim został królem Polski?",
          ua: "Ким був Ягайло, перш ніж став королем Польщі?"
        },
        options: [
          { id: "a", label: { pl: "wielkim księciem Litwy", ua: "великим князем Литви" } },
          { id: "b", label: { pl: "wielkim mistrzem Krzyżaków", ua: "великим магістром хрестоносців" } },
          { id: "c", label: { pl: "synem Kazimierza Wielkiego", ua: "сином Казимира Великого" } }
        ],
        answer: "a",
        hint: {
          pl: "Pogańska Litwa. Nie zakon i nie Piast.",
          ua: "Язичницька Литва. Не орден і не П’яст."
        },
        explanation: {
          pl: "Syn Kazimierza nie istniał — stąd Andegawenowie (35).",
          ua: "Сина Казимира не було — звідси Анжуйці (35)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Unia w Krewie 1385", ua: "Унія в Креві 1385" },
      formula: "1385",
      timelineYear: 1385,
      visual: gh("298", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Polska, Litwa, Krewo; unia personalna",
          ua: "Карта: Польща, Литва, Крево; персональна унія"
        },
        title: { pl: "Dwa państwa, jeden władca", ua: "Дві держави, один володар" },
        prompt: {
          pl: "Szkolna mapa 16:9. Korona Polska i Wielkie Księstwo Litewskie jako dwa pola. Kropka Krewo 1385. Napis PL: „unia personalna — wspólny władca, dwa państwa”. BEZ unii lubelskiej 1569, BEZ współczesnych granic. Styl Nowej Ery.",
          ua: "Крево 1385. Дві держави. Не Люблін 1569."
        }
      }),
      text: {
        pl: [
          ["W ", em("1385"), " w ", em("Krewie"), " umówiono unię: Jagiełło poślubi Jadwigę, ochrzci Litwę i zostanie królem Polski."],
          ["", em("Unia personalna"), " znaczy: dwa państwa, wspólny władca. Litwa nie „zniknęła”. Warunek: chrzest Litwy."]
        ],
        ua: [
          ["", em("1385"), " року в ", em("Креві"), " домовилися про унію: Ягайло одружиться з Ядвігою, охрестить Литву і стане королем Польщі."],
          ["", em("Персональна унія"), " означає: дві держави, спільний володар. Литва не «зникла». Умова: хрещення Литви."]
        ]
      },
      task: {
        id: "h36-1385",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zawarto unię w Krewie? Wpisz rok.",
          ua: "Якого року укладено унію в Креві? Введи рік."
        },
        answer: 1385,
        hint: {
          pl: "Po Akademii 1364, przed Grunwaldem 1410.",
          ua: "Після Академії 1364, перед Грюнвальдом 1410."
        },
        explanation: {
          pl: "1385. 1569 (Lublin) nie jest klasą 5.",
          ua: "1385. 1569 (Люблін) не є 5 класом."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Grunwald 1410", ua: "Грюнвальд 1410" },
      formula: "1409–1411 · 1410",
      timelineYear: 1410,
      visual: gh("299", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa wielkiej wojny: Grunwald 1410, Malbork, I pokój toruński",
          ua: "Карта великої війни: Грюнвальд 1410, Мальборк, I торунський мир"
        },
        title: { pl: "Jedna mapa kampanii, nie Matejko", ua: "Одна карта кампанії, не Матейко" },
        prompt: {
          pl: "Szkolna mapa 16:9. Polska + Litwa strzałkami na ziemie zakonu. Krzyżyk Grunwald 1410. Malbork kropką „nie zdobyto”. Napis: „wielka wojna 1409–1411”. BEZ szarży, BEZ ciał, BEZ Matejki. Styl Nowej Ery.",
          ua: "Грюнвальд 1410. Карта. Без бою і Матейка."
        }
      }),
      text: {
        pl: [
          ["Wielka wojna z zakonem: ", em("1409–1411"), ". 15 lipca ", em("1410"), " wojska polsko-litewskie (Jagiełło i Witold) pokonały Krzyżaków pod ", em("Grunwaldem"), ". Wielki mistrz Ulrich von Jungingen zginął — to fakt, nie obraz rzezi."],
          "Malborka nie zdobyto. I pokój toruński (1411) nie oddał Polsce Pomorza. Zakon osłabł, ale wojna o morze trwała dalej (lekcja 37)."
        ],
        ua: [
          ["Велика війна з орденом: ", em("1409–1411"), ". 15 липня ", em("1410"), " польсько-литовські війська (Ягайло і Вітовт) перемогли хрестоносців під ", em("Грюнвальдом"), ". Великий магістр Ульріх фон Юнгінген загинув — це факт, не картина різанини."],
          "Мальборка не здобули. I торунський мир (1411) не віддав Польщі Помор’я. Орден ослаб, але війна за море тривала (урок 37)."
        ]
      },
      task: {
        id: "h36-1410",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku stoczono bitwę pod Grunwaldem? Wpisz rok.",
          ua: "Якого року відбулася битва під Грюнвальдом? Введи рік."
        },
        answer: 1410,
        hint: {
          pl: "Między Krewem 1385 a Horodłem 1413. Nie 1331 (Płowce = 34) i nie 1466 (37).",
          ua: "Між Кревом 1385 і Городлом 1413. Не 1331 (Пловці = 34) і не 1466 (37)."
        },
        explanation: {
          pl: "1410. Płowce = 34. II pokój toruński = 37.",
          ua: "1410. Пловці = 34. II торунський мир = 37."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Witold", ua: "Вітовт" },
      visual: gh("300", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Witolda: kuzyn Jagiełły, wielki książę Litwy",
          ua: "Картка Вітовта: двоюрідний брат Ягайла, великий князь Литви"
        },
        title: { pl: "Współwładca Litwy", ua: "Співволодар Литви" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny książę, dzień, BEZ bitwy. Cztery punkty PL: „kto — Witold”; „skąd — Litwa, kuzyn Jagiełły”; „lata — wielki książę, Grunwald 1410”; „wsławił się — współdowodził pod Grunwaldem, umocnił Litwę”. Styl Nowej Ery.",
          ua: "Вітовт. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Witold"), " — kuzyn Jagiełły, wielki książę Litwy. Pod Grunwaldem współdowodził wojskami litewskimi."],
          "Unia nie znaczyła, że Litwa znika: miał zostać silny wielki książę obok króla Polski."
        ],
        ua: [
          ["", em("Вітовт"), " — двоюрідний брат Ягайла, великий князь Литви. Під Грюнвальдом співкомандував литовським військом."],
          "Унія не означала, що Литва зникає: мав лишитись сильний великий князь поряд із королем Польщі."
        ]
      },
      task: {
        id: "h36-witold",
        type: "true-false",
        level: "A",
        question: {
          pl: "Witold był kuzynem Jagiełły i wielkim księciem Litwy — prawda czy fałsz?",
          ua: "Вітовт був двоюрідним братом Ягайла і великим князем Литви — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z Jungingenem (mistrz zakonu).",
          ua: "Не плутай з Юнгінгеном (магістр ордену)."
        },
        explanation: {
          pl: "Prawda. Horodło potwierdzi więź obu elit.",
          ua: "Правда. Городло підтвердить зв’язок обох еліт."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Unia w Horodle 1413", ua: "Унія в Городлі 1413" },
      formula: "1413",
      timelineYear: 1413,
      visual: gh("301", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Horodło nad Bugiem, współpraca elit Polski i Litwy",
          ua: "Карта: Городло над Бугом, співпраця еліт Польщі і Литви"
        },
        title: { pl: "Współpraca, nie zniknięcie Litwy", ua: "Співпраця, не зникнення Литви" },
        prompt: {
          pl: "Szkolna mapa 16:9. Kropka Horodło 1413 nad Bugiem. Dwa herby spokojnie obok siebie, napis PL: „współpraca elit; Witold wielkim księciem”. BEZ unii lubelskiej, BEZ bitew. Styl Nowej Ery.",
          ua: "Городло 1413. Без Любліна 1569."
        }
      }),
      text: {
        pl: [
          ["W ", em("1413"), " w ", em("Horodle"), " spisano zasady współpracy: Litwa zachowuje wielkiego księcia (Witold), elity zbliżają się (m.in. herby)."],
          "To umocnienie unii personalnej, nie połączenie w jedno państwo z XVI wieku."
        ],
        ua: [
          ["", em("1413"), " року в ", em("Городлі"), " записали засади співпраці: Литва зберігає великого князя (Вітовт), еліти зближуються (зокрема герби)."],
          "Це зміцнення персональної унії, не злиття в одну державу XVI століття."
        ]
      },
      task: {
        id: "h36-1413",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku zawarto unię w Horodle? Wpisz rok.",
          ua: "Якого року укладено унію в Городлі? Введи рік."
        },
        answer: 1413,
        hint: {
          pl: "Trzy lata po Grunwaldzie.",
          ua: "Три роки після Грюнвальду."
        },
        explanation: {
          pl: "1413. 1385 = Krewo. 1444 = Warna (37).",
          ua: "1413. 1385 = Крево. 1444 = Варна (37)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa unii", ua: "Карта унії" },
      visual: gh("302", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Wielkie Księstwo Litewskie, Krewo, Horodło, Grunwald, Toruń",
          ua: "Карта: Велике князівство Литовське, Крево, Городло, Грюнвальд, Торунь"
        },
        title: { pl: "Pięć nazw, które musisz umieć wskazać", ua: "П’ять назв, які мусиш уміти вказати" },
        prompt: {
          pl: "Szkolna mapa 16:9 Europy Środkowo-Wschodniej ok. 1413. Pola: Korona, Litwa. Etykiety: Krewo, Horodło, Grunwald, Toruń, Wilno. BEZ granic 2026, BEZ Moskwy jako wroga XVI w. Styl Nowej Ery.",
          ua: "Литва, Крево, Городло, Грюнвальд, Торунь. Без сучасних кордонів."
        }
      }),
      text: {
        pl: [
          "Na mapie wskaż: Wielkie Księstwo Litewskie, Krewo, Horodło, Grunwald i Toruń.",
          "I pokój toruński (1411) zamyka wielką wojnę — Pomorze wróci dopiero w lekcji 37."
        ],
        ua: [
          "На карті вкажи: Велике князівство Литовське, Крево, Городло, Грюнвальд і Торунь.",
          "I торунський мир (1411) замикає велику війну — Помор’я повернеться щойно в уроці 37."
        ]
      },
      task: {
        id: "h36-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które miejsca należą do tej lekcji?",
          ua: "Які місця належать до цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Litwa, Krewo, Grunwald, Horodło, Toruń", ua: "Литва, Крево, Грюнвальд, Городло, Торунь" } },
          { id: "b", label: { pl: "Kalisz 1343 i Akademia 1364", ua: "Каліш 1343 і Академія 1364" } },
          { id: "c", label: { pl: "Warna 1444 i Gdańsk 1466", ua: "Варна 1444 і Гданськ 1466" } }
        ],
        answer: "a",
        hint: {
          pl: "35 = Kalisz. 37 = Warna i II Toruń.",
          ua: "35 = Каліш. 37 = Варна і II Торунь."
        },
        explanation: {
          pl: "To lista KN tej godziny.",
          ua: "Це список KN цієї години."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "I pokój toruński 1411", ua: "I торунський мир 1411" },
      formula: "1411",
      visual: gh("303", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat I pokoju toruńskiego: zakon osłabł, Pomorze zostaje przy Krzyżakach",
          ua: "Схема I торунського миру: орден ослаб, Помор’я лишається за хрестоносцями"
        },
        title: { pl: "Zwycięstwo bez morza", ua: "Перемога без моря" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dwie kolumny. LEWA: Grunwald 1410, podpis „zwycięstwo”. PRAWA: dokument 1411, podpis „Pomorze zostaje przy zakonie”. Strzałka do 37: „Gdańsk wróci w 1466”. BEZ foto pergaminu z Wiki. Styl Nowej Ery.",
          ua: "1411. Помор’я ще в ордену. 1466 = урок 37."
        }
      }),
      text: {
        pl: [
          ["", em("I pokój toruński"), " (", em("1411"), ") zamyka wielką wojnę. Zakon osłabł, ale ", em("Pomorze Gdańskie"), " zostało przy Krzyżakach."],
          "Dziecko ma zapamiętać różnicę: 1410 to bitwa, 1411 to pokój bez morza. Powrót Gdańska — lekcja 37 (1466)."
        ],
        ua: [
          ["", em("I торунський мир"), " (", em("1411"), ") замикає велику війну. Орден ослаб, але ", em("Гданське Помор’я"), " лишилось за хрестоносцями."],
          "Дитина має запам’ятати різницю: 1410 — битва, 1411 — мир без моря. Повернення Гданська — урок 37 (1466)."
        ]
      },
      task: {
        id: "h36-1411",
        type: "true-false",
        level: "A",
        question: {
          pl: "I pokój toruński (1411) nie oddał Polsce Pomorza Gdańskiego — prawda czy fałsz?",
          ua: "I торунський мир (1411) не віддав Польщі Гданського Помор’я — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Morze wraca w 1466, nie w 1411.",
          ua: "Море повертається 1466 року, не 1411."
        },
        explanation: {
          pl: "Prawda. II pokój toruński = lekcja 37.",
          ua: "Правда. II торунський мир = урок 37."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Andegawenowie — dynastia Ludwika i Jadwigi po Piaście", ua: "Анжуйці — династія Людовика і Ядвіги після П’яста" },
        { pl: "unia personalna — dwa państwa, wspólny władca", ua: "персональна унія — дві держави, спільний володар" },
        { pl: "Wielkie Księstwo Litewskie — państwo Jagiełły i Witolda", ua: "Велике князівство Литовське — держава Ягайла і Вітовта" },
        { pl: "Jagiellonowie — dynastia od Władysława Jagiełły", ua: "Ягеллони — династія від Владислава Ягайла" },
        { pl: "1385 / 1410 / 1413 — Krewo; Grunwald; Horodło", ua: "1385 / 1410 / 1413 — Крево; Грюнвальд; Городло" },
        { pl: "Witold — wielki książę Litwy, kuzyn Jagiełły", ua: "Вітовт — великий князь Литви, двоюрідний брат Ягайла" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Jadwiga była córką Kazimierza Wielkiego. Unia w Krewie to 1364. Litwa zniknęła. Grunwald to 1331. Horodło to Nihil novi.”",
        ua: "«Ядвіга була донькою Казимира Великого. Унія в Креві — 1364. Литва зникла. Грюнвальд — 1331. Городло — Nihil novi.»"
      },
      text: {
        pl: [
          "Jadwiga = córka Ludwika, nie Kazimierza. Krewo = 1385. Dwa państwa. Grunwald = 1410, nie Płowce. Horodło = 1413. Nihil novi = 38."
        ],
        ua: [
          "Ядвіга = донька Людовика, не Казимира. Крево = 1385. Дві держави. Грюнвальд = 1410, не Пловці. Городло = 1413. Nihil novi = 38."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: Jadwiga i Jagiełło, Krewo, Grunwald, Horodło. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: Ядвіга і Ягайло, Крево, Грюнвальд, Городло. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: chrzest Litwy; dwa państwa; 1410; współpraca elit 1413."
        ],
        ua: [
          "Підказка: хрещення Литви; дві держави; 1410; співпраця еліт 1413."
        ]
      },
      task: {
        id: "h36-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę tej godziny?",
          ua: "Яке речення замикає нотатку цієї години?"
        },
        options: [
          { id: "a", label: { pl: "Jadwiga i Jagiełło; 1385 Krewo (chrzest Litwy, unia personalna); 1410 Grunwald; 1413 Horodło", ua: "Ядвіга і Ягайло; 1385 Крево (хрещення Литви, персональна унія); 1410 Грюнвальд; 1413 Городло" } },
          { id: "b", label: { pl: "To tylko Akademia 1364 z lekcji 35", ua: "Це лише Академія 1364 з уроку 35" } },
          { id: "c", label: { pl: "To Warna i wojna trzynastoletnia z lekcji 37", ua: "Це Варна і тринадцятилітня війна з уроку 37" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty KN na osi.",
          ua: "Три дати KN на осі."
        },
        explanation: {
          pl: "35 = Kazimierz. 37 = Warna i 1466.",
          ua: "35 = Казимир. 37 = Варна і 1466."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Konstancja i nazwa uczelni", ua: "Констанц і назва школи" },
      task: {
        id: "h36-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Ponadpodstawowe: sobór, Włodkowic, nazwa Akademii — bez Matejki i bez 1569?",
          ua: "Понад базове: собор, Влодковіц, назва Академії — без Матейка і без 1569?"
        },
        options: [
          { id: "a", label: { pl: "Na soborze w Konstancji Polacy bronili praw Litwy; Paweł Włodkowic pisał, że nie wolno nawracać mieczem; Akademię później nazwano Jagiellońską", ua: "На соборі в Констанці поляки боронили права Литви; Павло Влодковіц писав, що не можна навертати мечем; Академію пізніше назвали Ягеллонською" } },
          { id: "b", label: { pl: "trzeba wkuć unię lubelską i rozbiory", ua: "треба зубрити люблінську унію і поділи" } },
          { id: "c", label: { pl: "I i II pokój toruński to ta sama data 1343", ua: "I і II торунський мир — та сама дата 1343" } }
        ],
        answer: "a",
        hint: {
          pl: "KN ponadpodstawowe. 1343 = Kalisz (35). II Toruń = 37.",
          ua: "KN понад базове. 1343 = Каліш (35). II Торунь = 37."
        },
        explanation: {
          pl: "Porównanie obu pokojów toruńskich = 37.",
          ua: "Порівняння обох торунських мирів = 37."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h36-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o unii polsko-litewskiej?",
          ua: "Що правда про польсько-литовську унію?"
        },
        options: [
          { id: "a", label: { pl: "1385 Krewo (chrzest Litwy, unia personalna); 1410 Grunwald; 1413 Horodło; dwa państwa, Jagiellonowie", ua: "1385 Крево (хрещення Литви, персональна унія); 1410 Грюнвальд; 1413 Городло; дві держави, Ягеллони" } },
          { id: "b", label: { pl: "to samo co pokój w Kaliszu 1343", ua: "те саме, що мир у Каліші 1343" } },
          { id: "c", label: { pl: "Litwa zniknęła, a Pomorze wróciło już w 1411", ua: "Литва зникла, а Помор’я повернулось уже 1411 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty na osi. Pomorze = 37.",
          ua: "Три дати на осі. Помор’я = 37."
        },
        explanation: {
          pl: "I pokój toruński nie oddał Pomorza. 37 odda Gdańsk.",
          ua: "I торунський мир не віддав Помор’я. 37 віддасть Гданськ."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Po Piaście koronę wzięli Andegawenowie, potem Jadwiga. W 1385 w Krewie Jagiełło obiecał chrzest Litwy, małżeństwo z Jadwigą i unię — dwa państwa, wspólny władca (unia personalna).",
          ["1385", "Krewie", "unia personalna"],
          "Після П’яста корону взяли Анжуйці, потім Ядвіга. 1385 року в Креві Ягайло обіцяв хрещення Литви, шлюб з Ядвігою і унію — дві держави, спільний володар (персональна унія).",
          ["1385", "Креві", "персональна унія"]
        ),
        mark(
          "W 1410 pod Grunwaldem Polska i Litwa pokonały Krzyżaków. Malborka nie zdobyto; I pokój toruński (1411) nie zwrócił Pomorza.",
          ["1410", "Grunwaldem"],
          "1410 року під Грюнвальдом Польща і Литва перемогли хрестоносців. Мальборка не здобули; I торунський мир (1411) не повернув Помор’я.",
          ["1410", "Грюнвальдом"]
        ),
        mark(
          "W 1413 unia w Horodle umocniła współpracę elit; Witold pozostał wielkim księciem Litwy. Zaczęła się dynastia Jagiellonów.",
          ["1413", "Horodle", "Jagiellonów"],
          "1413 року унія в Городлі зміцнила співпрацю еліт; Вітовт лишився великим князем Литви. Почалася династія Ягеллонів.",
          ["1413", "Городлі", "Ягеллонів"]
        ),
        mark(
          "Potrafię powiedzieć: Jadwiga i Jagiełło połączyli Polskę z Litwą przeciw zakonowi; po Grunwaldzie unię spisano też w Horodle.",
          ["Jadwiga", "Jagiełło", "Horodle"],
          "Можу сказати: Ядвіга і Ягайло поєднали Польщу з Литвою проти ордену; після Грюнвальду унію записали також у Городлі.",
          ["Ядвіга", "Ягайло", "Городлі"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: świetność Jagiellonów — Warna, wojna trzynastoletnia i powrót Gdańska, nie nowa unia w Krewie.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: розквіт Ягеллонів — Варна, тринадцятилітня війна і повернення Гданська, не нова унія в Креві.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "90UY7Xw3fhw",
        title: {
          pl: "Krótkie Lekcje: Unia polsko-litewska",
          ua: "Короткі уроки: Польсько-литовська унія"
        }
      }
    }
  ]
};
