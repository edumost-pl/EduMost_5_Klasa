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
      heading: { pl: "Średniowieczne miasto i wieś", ua: "Середньовічне місто і село" },
      formula: "gród · lokacja · cech",
      text: {
        pl: [
          "Z lekcji 22 wiesz: mieszczanie i chłopi to dwa stany. Dziś ich codzienność: jak powstawało miasto i jak orano pole.",
          "Nie nowa data na osi — XIII wiek w tekście."
        ],
        ua: [
          "З уроку 22 знаєш: міщани і селяни — два стани. Сьогодні їхня буденність: як поставало місто і як орали поле.",
          "Не нова дата на осі — XIII століття в тексті."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, gdzie i jak powstawały miasta (gród → osady → lokacja)", ua: "сказати, де і як поставали міста (городище → оселі → локація)" },
        { pl: "przedstawić organy samorządu: wójt, rada, burmistrz, ława", ua: "показати органи самоврядування: війт, рада, бурмістр, лава" },
        { pl: "scharakteryzować zajęcia mieszczan i grupy w mieście", ua: "схарактеризувати заняття міщан і групи в місті" },
        { pl: "opisać wieś, sołtysa i trójpolówkę", ua: "описати село, солтиса і трипілля" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Jak powstawały miasta?", ua: "Як поставали міста?" },
      formula: "gród → osada → miasto",
      visual: gh("200", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: gród, potem osada rzemieślników i targowa, potem miasto z murami",
          ua: "Схема: городище, потім ремісниче і торгове поселення, потім місто з мурами"
        },
        title: { pl: "Najpierw gród, potem miasto", ua: "Спочатку городище, потім місто" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy pola ze strzałkami, dzień. 1 „gród” na wzgórzu, palisada. 2 przy grodzie „osada rzemieślników” i „osada targowa”. 3 „miasto” z murami od XIII w. BEZ kopii kadru filmu, BEZ oblężenia. Styl Nowej Ery.",
          ua: "Три кроки: городище → оселі → місто. Без штурму."
        }
      }),
      text: {
        pl: [
          ["Na początku był ", em("gród"), " — w miejscu trudnym do zdobycia. Przy grodach, klasztorach i zamkach rosły ", em("osady rzemieślników"), " i ", em("osady targowe"), " (na skrzyżowaniach szlaków)."],
          ["Od ", em("XIII wieku"), " osady przekształcały się w miasta. Czasem miasto stawiano od podstaw, często nad rzeką."]
        ],
        ua: [
          ["Спочатку був ", em("город"), " (gród) — у місці, яке важко здобути. Біля городів, монастирів і замків росли ", em("ремісничі оселі"), " і ", em("торгові поселення"), " (на перехрестях шляхів)."],
          ["Від ", em("XIII століття"), " оселі ставали містами. Іноді місто ставили з нуля, часто над рікою."]
        ]
      },
      task: {
        id: "h24-grod",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ułóż drogę: najpierw… potem… na końcu miasta.",
          ua: "Склади шлях: спочатку… потім… наприкінці міста."
        },
        options: [
          { id: "a", label: { pl: "grody → osady rzemieślnicze i targowe → miasta", ua: "городи → ремісничі і торгові оселі → міста" } },
          { id: "b", label: { pl: "cechy → paź → pasowanie z lekcji 23", ua: "цехи → паж → посвята з уроку 23" } },
          { id: "c", label: { pl: "kalifat → Mekka → hidżra 622", ua: "халіфат → Мекка → хіджра 622" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta nauczycielki i KN: gród, osada targowa, miasto. Rycerz i islam = inne lekcje.",
          ua: "Картка вчительки і KN: город, торгове поселення, місто. Лицар і іслам = інші уроки."
        },
        explanation: {
          pl: "Notatki + KN. Nie mylić z drogą pazia.",
          ua: "Нотатки + KN. Не плутати зі шляхом пажа."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Czym była lokacja?", ua: "Що таке локація?" },
      formula: "XIII w.",
      visual: gh("201", {
        kind: "image-placeholder",
        alt: {
          pl: "Właściciel ziemi wręcza zasadźcy dokument lokacyjny",
          ua: "Власник землі вручає засадьці локаційний документ"
        },
        title: { pl: "Umowa, nie zdjęcie z Wiki", ua: "Угода, не фото з Вікі" },
        prompt: {
          pl: "Szkolny slajd 16:9. Właściciel w długiej szacie wręcza ZASADŹCY zwój. Podpisy PL: „lokacja”; „prawa i obowiązki”; „ulice i jarmarki”. Pergamin szkolny, BEZ zdjęcia aktu Goleniowa, BEZ kopii obrazu Bolesława Pobożnego. Styl Nowej Ery.",
          ua: "Локація: власник і засадьця, документ. Не копія Вікіпедії."
        }
      }),
      text: {
        pl: [
          ["", em("Lokacja"), " to założenie miasta lub wsi. Właściciel gruntu zawierał umowę z ", em("zasadźcą"), ". Dokument lokacyjny: ", em("prawa i obowiązki"), " mieszkańców, układ ulic i placów, dni jarmarków."],
          "Pierwsze lokacje na ziemiach polskich — początek XIII wieku. Rynek krakowski wytyczono w dokumencie z 1257 r. — rok w tekście, nie nowy punkt na osi."
        ],
        ua: [
          ["", em("Локація"), " — заснування міста або села. Власник ґрунту укладав угоду з ", em("засадьцею"), ". Документ: ", em("права і обов’язки"), " мешканців, план вулиць і площ, дні ярмарків."],
          "Перші локації на польських землях — початок XIII століття. Краківський ринок визначили в документі 1257 р. — рік у тексті, не нова точка на осі."
        ]
      },
      task: {
        id: "h24-lok",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Utworzenie miasta lub wsi to ______. Właściciel zawierał umowę z ______.",
          ua: "Створення міста або села — це ______. Власник укладав угоду з ______."
        },
        options: [
          { id: "a", label: { pl: "lokacja; z zasadźcą (dokument: prawa i obowiązki)", ua: "локація; із засадьцею (документ: права і обов’язки)" } },
          { id: "b", label: { pl: "hołd lenny; z giermkiem", ua: "ленна присяга; зі зброєносцем" } },
          { id: "c", label: { pl: "pasowanie; z papieżem w Canossie", ua: "посвята; з папою в Каноссі" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: LOKACJA, ZASADŹCA, PRAWA i OBOWIĄZKI. Hołd = lekcja 22.",
          ua: "Картка: ЛОКАЦІЯ, ЗАСАДЬЦЯ, ПРАВА і ОБОВ’ЯЗКИ. Присяга = урок 22."
        },
        explanation: {
          pl: "KN: czym była lokacja. Canossa = lekcja 20.",
          ua: "KN: що таке локація. Каносса = урок 20."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kto sprawował władzę?", ua: "Хто правив у місті?" },
      formula: "wójt · rada · ława",
      visual: gh("202", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: wójt zasadźca oraz samorząd — rada, burmistrz, ława miejska",
          ua: "Схема: війт-засадьця і самоврядування — рада, бурмістр, міська лава"
        },
        title: { pl: "Najpierw pan, potem samorząd", ua: "Спочатку пан, потім самоврядування" },
        prompt: {
          pl: "Szkolny schemat 16:9. Góra: „wójt = zasadźca, przedstawiciel właściciela”. Dół: „samorząd miejski” — trzy okna: rada (uchwala prawa), burmistrz (przestrzega), ława (sąd). Spokojna izba, dzień, BEZ kopii obrazu rady kaliskiej. Styl Nowej Ery.",
          ua: "Війт і самоврядування: рада, бурмістр, лава. Без копії картини."
        }
      }),
      text: {
        pl: [
          ["Na czele stał ", em("wójt"), " — to często ten sam ", em("zasadźca"), ". W imieniu właściciela pobierał daniny i pilnował porządku."],
          ["Potem mieszczanie uzyskali ", em("samorząd"), ": ", em("rada miejska"), " uchwalała prawa, ", em("burmistrz"), " dbał, by ich przestrzegano, ", em("ława miejska"), " była sądem. We władzach zasiadali najbogatsi."]
        ],
        ua: [
          ["На чолі стояв ", em("війт"), " — часто той самий ", em("засадьця"), ". Від імені власника збирав данини і пильнував лад."],
          ["Потім міщани здобули ", em("самоврядування"), ": ", em("міська рада"), " ухвалювала права, ", em("бурмістр"), " дбав, щоб їх дотримувались, ", em("міська лава"), " була судом. У владі сиділи найбагатші."]
        ]
      },
      task: {
        id: "h24-wladza",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który zestaw zgadza się ze schematem z podręcznika (s. 143)?",
          ua: "Який набір згідний зі схемою з підручника (с. 143)?"
        },
        options: [
          { id: "a", label: { pl: "wójt (= zasadźca); samorząd: rada i burmistrz; sąd = ława miejska", ua: "війт (= засадьця); самоврядування: рада і бурмістр; суд = міська лава" } },
          { id: "b", label: { pl: "kalif, sułtan i Urban II z lekcji 21", ua: "халіф, султан і Урбан II з уроку 21" } },
          { id: "c", label: { pl: "senior, wasal i hołd zamiast rady", ua: "сеньйор, васал і присяга замість ради" } }
        ],
        answer: "a",
        hint: {
          pl: "Prezentacja: wójt, zasadźca, samorząd, rada, burmistrz, ława.",
          ua: "Презентація: війт, засадьця, самоврядування, рада, бурмістр, лава."
        },
        explanation: {
          pl: "KN: organy samorządu. Feudalizm = lekcja 22, nie ten schemat.",
          ua: "KN: органи самоврядування. Феодалізм = урок 22, не ця схема."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mieszkańcy miasta", ua: "Мешканці міста" },
      formula: "patrycjat · pospólstwo · plebs",
      visual: gh("203", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy pary mieszczan: bogaci patrycjusze, pospólstwo przy warsztacie, plebs przy pracy najemnej",
          ua: "Три пари міщан: багаті патриції, поспільство біля майстерні, плебс на найманій роботі"
        },
        title: { pl: "Trzy grupy, nie trzy wojny", ua: "Три групи, не три війни" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy pary dzień. LEWA patrycjusze: bogate szaty, „najmniej liczni, urzędy”. ŚRODEK pospólstwo: warsztat, „najliczniejsi, drobni kupcy i rzemieślnicy”. PRAWA plebs: skromne stroje, dzban, „praca najemna”. BEZ głodu, BEZ kopii miniatur z filmu. Styl Nowej Ery.",
          ua: "Патриції, поспільство, плебс. Без злиднів-gore."
        }
      }),
      text: {
        pl: [
          ["", em("Patrycjusze"), " — najbogatsi i najmniej liczni (kupcy, rzemieślnicy, kamienice); oni zasiadali w urzędach."],
          ["", em("Pospólstwo"), " — najliczniejsi: drobni kupcy i rzemieślnicy z własnym warsztatem. ", em("Plebs"), " — najbiedniejsi, praca najemna."]
        ],
        ua: [
          ["", em("Патриції"), " — найбагатші й найменш численні (купці, ремісники, кам’яниці); вони сиділи в урядах."],
          ["", em("Поспільство"), " — найчисленніші: дрібні купці й ремісники з власною майстернею. ", em("Плебс"), " — найбідніші, наймана праця."]
        ]
      },
      task: {
        id: "h24-grupy",
        type: "true-false",
        level: "B",
        question: {
          pl: "We władzach miasta zasiadali głównie najbogatsi mieszczanie — prawda czy fałsz?",
          ua: "У владі міста сиділи здебільшого найбагатші міщани — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Notatki: uprawnieni do najwyższych urzędów = najbogatsi. Plebs = najemna praca.",
          ua: "Нотатки: допущені до найвищих урядів = найбагатші. Плебс = наймана праця."
        },
        explanation: {
          pl: "Prawda. KN: rozróżnić grupy mieszczan.",
          ua: "Правда. KN: розрізняти групи міщан."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jak wyglądało miasto?", ua: "Як виглядало місто?" },
      formula: "rynek · ratusz · mury",
      visual: gh("204", {
        kind: "image-placeholder",
        alt: {
          pl: "Plan średniowiecznego miasta z murami, rynkiem, ratuszem i kościołem",
          ua: "План середньовічного міста з мурами, ринком, ратушею і церквою"
        },
        title: { pl: "Środek to rynek, nie pole", ua: "Середина — ринок, не поле" },
        prompt: {
          pl: "Szkolny plan 16:9 z góry, dzień. Podpisy PL: mury obronne, rynek, ratusz, kościół, ulica, kamienica; za murami chaty. BEZ kopii makiety z filmu, BEZ zdjęcia Krakowa, BEZ Carcassonne, BEZ chłosty przy pręgierzu. Styl Nowej Ery.",
          ua: "План: мури, ринок, ратуша, церква. Не Краків і не Каркассон."
        }
      }),
      text: {
        pl: [
          ["Na środku ", em("rynek"), ": ", em("ratusz"), " (władze), kościół, targi. Bogatsi mieszkali w ", em("kamienicach"), ". Miasto często otaczały ", em("mury"), "; bramę na noc zamykano."],
          "Mało bruku i kanalizacji — odpadki na ulicę, pożary drewnianych domów. To fakt, nie scena zarazy. Po pracy: gospody, kości, karty, aktorzy."
        ],
        ua: [
          ["У центрі ", em("ринок"), ": ", em("ратуша"), " (влада), церква, торги. Багатші жили в ", em("кам’яницях"), ". Місто часто оточували ", em("мури"), "; браму на ніч зачиняли."],
          "Мало бруку й каналізації — відходи на вулицю, пожежі дерев’яних хат. Це факт, не сцена пошесті. Після роботи: корчми, кості, карти, актори."
        ]
      },
      task: {
        id: "h24-rynek",
        type: "true-false",
        level: "B",
        question: {
          pl: "Centrum nowo zaplanowanego miasta był rynek z ratuszem — prawda czy fałsz?",
          ua: "Центром новозапланованого міста був ринок із ратушею — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: wygląd miasta. Ratusz = siedziba władz, nie zamek rycerza z lekcji 23.",
          ua: "KN: вигляд міста. Ратуша = осідок влади, не замок лицаря з уроку 23."
        },
        explanation: {
          pl: "Prawda. Zamek rycerski = lekcja 23.",
          ua: "Правда. Лицарський замок = урок 23."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzemiosło i cech", ua: "Ремісництво і цех" },
      formula: "cech · handel",
      visual: gh("205", {
        kind: "image-placeholder",
        alt: {
          pl: "Warsztat rzemieślniczy i tablica cechowa: wielkość produkcji, ceny, jakość",
          ua: "Реміснича майстерня і цехова таблиця: обсяг, ціни, якість"
        },
        title: { pl: "Szewc nie orał pola", ua: "Швець не орав поле" },
        prompt: {
          pl: "Szkolny slajd 16:9. Warsztat: szewc przy bucie, kowal przy podkowie. Tablica CECH: „wielkość produkcji, ceny, jakość; pomoc wzajemna”. Obok kupiec. Dzień, BEZ kopii pięciu miniatur z filmu. Styl Nowej Ery.",
          ua: "Цех: обсяг, ціни, якість. Швець і коваль. Без копії мініатюр."
        }
      }),
      text: {
        pl: [
          ["Główne zajęcia mieszczan: ", em("rzemiosło"), " i ", em("handel"), ". ", em("Cech"), " skupiał rzemieślników jednej specjalności (szewcy, tkacze, krawcy, rzeźnicy): wielkość produkcji, ceny, jakość; członkowie wspierali się."],
          "Kupcy sprzedawali sukno, skóry, zboże. Szewc naprawia obuwie, kowal — podkowy, piekarz piecze chleb, garncarz lepi garnki, bednarz — beczki."
        ],
        ua: [
          ["Головні заняття міщан: ", em("ремесло"), " і ", em("торгівля"), ". ", em("Цех"), " єднав ремісників однієї спеціальності (шевці, ткачі, кравці, різники): обсяг, ціни, якість; члени підтримували себе."],
          "Купці продавали сукно, шкіри, збіжжя. Швець лагодить взуття, коваль — підкови, пекар пече хліб, гончар ліпить горщики, бондар — бочки."
        ]
      },
      task: {
        id: "h24-cech",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto do czego? (karta nauczycielki)",
          ua: "Хто до чого? (картка вчительки)"
        },
        options: [
          { id: "a", label: { pl: "szewc — obuwie; kowal — podkowy; piekarz — chleb; bednarz — beczki", ua: "швець — взуття; коваль — підкови; пекар — хліб; бондар — бочки" } },
          { id: "b", label: { pl: "szewc orał ugór, kowal pasował na rycerza", ua: "швець орав переліг, коваль посвячував на лицаря" } },
          { id: "c", label: { pl: "wszystkich rzemieślników zrzeszał zakon templariuszy", ua: "усіх ремісників єднав орден тамплієрів" } }
        ],
        answer: "a",
        hint: {
          pl: "Cech = jedna specjalność. Templariusze = lekcja 21.",
          ua: "Цех = одна спеціальність. Тамплієри = урок 21."
        },
        explanation: {
          pl: "KN: cechy. Garncarz = glina, rzeźnik = mięso — ta sama zasada.",
          ua: "KN: цехи. Гончар = глина, різник = м’ясо — той самий принцип."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wieś i sołtys", ua: "Село і солтис" },
      formula: "sołtys · ława wiejska",
      visual: gh("206", {
        kind: "image-placeholder",
        alt: {
          pl: "Wieś ze słomianymi chatami, sołtys i woły przy radle",
          ua: "Село із солом’яними хатами, солтис і воли біля рала"
        },
        title: { pl: "Tu żyła większość ludzi", ua: "Тут жила більшість людей" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Chatki ze słomą, płot, ogródek. SOŁTYS z dokumentem, podpis „ława wiejska”. Woły i radło. BEZ nędzy-gore, BEZ kopii miniatury 1300 z filmu, BEZ obrazu Morgensterna. Mała etykieta „wolnizna = ulga na start”. Styl Nowej Ery.",
          ua: "Село, солтис, рало. Без злиднів-gore і без копії мініатюри."
        }
      }),
      text: {
        pl: [
          ["Na wsi żyła ", em("większość"), " ludności. ", em("Zasadźca wsi"), " zostawał ", em("sołtysem"), " i przewodniczył ", em("ławie wiejskiej"), " (sąd sporów)."],
          ["Chłopi mieli najmniej praw. Orali i hodowali zwierzęta; za ziemię oddawali ", em("daninę"), " (część plonów). Nowi osadnicy bywali zwolnieni na start — ", em("wolnizna"), "."]
        ],
        ua: [
          ["У селі жила ", em("більшість"), " людей. ", em("Засадьця села"), " ставав ", em("солтисом"), " і очолював ", em("сільську лаву"), " (суд суперечок)."],
          ["Селяни мали найменше прав. Орали й тримали тварин; за землю віддавали ", em("данину"), " (частину врожаю). Нові осілі інколи мали пільгу на старт — ", em("вольнизну"), "."]
        ]
      },
      task: {
        id: "h24-soltys",
        type: "true-false",
        level: "B",
        question: {
          pl: "Sołtys na wsi to często zasadźca wsi, a ława wiejska to sąd — prawda czy fałsz?",
          ua: "Солтис на селі — часто засадьця села, а сільська лава — суд — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: organy samorządu wiejskiego. Nie myl sołtysa z burmistrzem.",
          ua: "KN: органи сільського самоврядування. Не плутай солтиса з бурмістром."
        },
        explanation: {
          pl: "Prawda. Burmistrz = miasto. Sołtys = wieś.",
          ua: "Правда. Бурмістр = місто. Солтис = село."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Trójpolówka i narzędzia", ua: "Трипілля і знаряддя" },
      formula: "ozime · jare · ugór",
      visual: gh("207", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat trójpolówki przez trzy lata oraz radło, pług i brona",
          ua: "Схема трипілля за три роки та рало, плуг і борона"
        },
        title: { pl: "Trzy pola, żeby ziemia odpoczęła", ua: "Три поля, щоб земля відпочила" },
        prompt: {
          pl: "Szkolny schemat 16:9. Trzy prostokąty × trzy lata: zboże ozime (żółte), jare (jasnozielone), ugór (trawa). Strzałki rotacji. Obok: radło, pług, brona z podpisami PL. Tytuł: „trójpolówka — ochrona ziemi, większe plony”. BEZ kopii slajdu z filmu 1:1. Styl Nowej Ery.",
          ua: "Трипілля: озимі, ярі, переліг. Рало, плуг, борона. Не копія кадру."
        }
      }),
      text: {
        pl: [
          ["", em("Trójpolówka"), ": jedno pole ", em("zboże ozime"), ", drugie ", em("jare"), ", trzecie ", em("ugór"), " (odpoczywa). Co roku zamiana — ziemia się nie wyjaławia, plony większe."],
          ["Siła pociągowa: zwykle ", em("woły"), ". ", em("Radło"), " ustąpiło ", em("pługowi"), " (orał głębiej). Ziarno przysypywano ", em("broną"), "; żęto sierpem, młócono cepem."]
        ],
        ua: [
          ["", em("Трипілля"), ": одне поле ", em("озиме збіжжя"), ", друге ", em("яре"), ", третє ", em("переліг"), " (відпочиває). Щороку зміна — земля не виснажується, врожай більший."],
          ["Тягло: зазвичай ", em("воли"), ". ", em("Рало"), " поступилося ", em("плугу"), " (орав глибше). Зерно присипали ", em("бороною"), "; жали серпом, молотили ціпом."]
        ]
      },
      task: {
        id: "h24-troj",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co to trójpolówka?",
          ua: "Що таке трипілля?"
        },
        options: [
          { id: "a", label: { pl: "trzy pola: ozime, jare i ugór na zmianę — ziemia odpoczywa, plony rosną", ua: "три поля: озимі, ярі і переліг по черзі — земля відпочиває, врожай росте" } },
          { id: "b", label: { pl: "trzy stany z lekcji 22 zamiast czterech", ua: "три стани з уроку 22 замість чотирьох" } },
          { id: "c", label: { pl: "trzy krucjaty Urbana II", ua: "три походи Урбана II" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: wyjaśnić trójpolówkę. Ugór = pole bez siewu.",
          ua: "KN: пояснити трипілля. Переліг = поле без сівби."
        },
        explanation: {
          pl: "KN podstawowe. Krucjaty = lekcja 21.",
          ua: "KN базове. Походи = урок 21."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "gród / osada targowa — warownia; osada przy szlaku, gdzie regularnie handlowano", ua: "город / торгове поселення — твердиня; оселя при шляху, де регулярно торгували" },
        { pl: "lokacja / zasadźca — założenie miasta lub wsi; organizator, często potem wójt lub sołtys", ua: "локація / засадьця — заснування міста або села; організатор, часто потім війт або солтис" },
        { pl: "wójt, rada, burmistrz, ława, ratusz — władza w mieście i jej siedziba", ua: "війт, рада, бурмістр, лава, ратуша — влада в місті і її осідок" },
        { pl: "cech / kupcy, rzemieślnicy — organizacja jednej specjalności; handel i rzemiosło", ua: "цех / купці, ремісники — організація однієї спеціальності; торгівля і ремесло" },
        { pl: "rynek, targi — plac w centrum; dni handlu", ua: "ринок, торги — площа в центрі; дні торгівлі" },
        { pl: "sołtys / ława wiejska — zwierzchnik wsi i sąd wiejski", ua: "солтис / сільська лава — очільник села і сільський суд" },
        { pl: "trójpolówka; radło, pług, brona — trzy pola (ozime, jare, ugór); narzędzia orki", ua: "трипілля; рало, плуг, борона — три поля (озимі, ярі, переліг); знаряддя оранки" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Lokacja to hołd lenny z 1122. Wójt był kalifem. Cech orał ugór. Sołtys pasował giermków. Trójpolówka to trzy krucjaty. Patrycjusze mieszkali w kurnej chacie za murami.”",
        ua: "«Локація — це ленна присяга з 1122. Війт був халіфом. Цех орав переліг. Солтис посвячував зброєносців. Трипілля — три походи. Патриції жили в курній хаті за мурами.»"
      },
      text: {
        pl: [
          "Lokacja = założenie osady. Wójt = przedstawiciel właściciela. Cech = rzemiosło. Sołtys = wieś. Trójpolówka = trzy pola. Patrycjusze = kamienice przy rynku."
        ],
        ua: [
          "Локація = заснування оселі. Війт = представник власника. Цех = ремесло. Солтис = село. Трипілля = три поля. Патриції = кам’яниці біля ринку."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, czym różniło się życie mieszczanina i chłopa. Potem wybierz zdanie, które to ujmuje.",
        ua: "Скажи в 3–4 реченнях, чим відрізнялося життя міщанина і селянина. Потім вибери речення, яке це охоплює."
      },
      text: {
        pl: [
          "Podpowiedź: miasto — handel i rzemiosło, rynek, mury. Wieś — uprawa i hodowla, sołtys, trójpolówka."
        ],
        ua: [
          "Підказка: місто — торгівля і ремесло, ринок, мури. Село — обробіток і худоба, солтис, трипілля."
        ]
      },
      task: {
        id: "h24-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie porównuje miasto i wieś?",
          ua: "Яке речення порівнює місто і село?"
        },
        options: [
          { id: "a", label: { pl: "Mieszczanie: rzemiosło i handel; chłopi: uprawa i hodowla — i tych było najwięcej", ua: "Міщани: ремесло і торгівля; селяни: обробіток і худоба — і тих було найбільше" } },
          { id: "b", label: { pl: "Chłopi wybierali burmistrza, a szewc orał lenno papieża", ua: "Селяни обирали бурмістра, а швець орав лен папи" } },
          { id: "c", label: { pl: "Wieś to tylko zamek Zawiszy z lekcji 23", ua: "Село — лише замок Завіші з уроку 23" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: porównać życie. Karta: miasto vs wieś — handel/rzemiosło vs uprawa/hodowla.",
          ua: "KN: порівняти життя. Картка: місто vs село — торгівля/ремесло vs обробіток/худоба."
        },
        explanation: {
          pl: "Cele nauczycielki + KN porównanie.",
          ua: "Цілі вчительки + KN порівняння."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Najstarsze miasta", ua: "Найдавніші міста" },
      task: {
        id: "h24-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zgodne z notatką i KN ponadpodstawowym?",
          ua: "Яке речення згідне з нотаткою і KN понад базовим?"
        },
        options: [
          { id: "a", label: { pl: "Do najstarszych miast na ziemiach polskich należą m.in. Złotoryja, Cieszyn, Toruń; wiele średniowiecznych miast istnieje do dziś", ua: "До найдавніших міст на польських землях належать зокрема Злотория, Цешин, Торунь; багато середньовічних міст існує досі" } },
          { id: "b", label: { pl: "najstarszym polskim miastem była Mekka w 622", ua: "найдавнішим польським містом була Мекка 622 року" } },
          { id: "c", label: { pl: "Toruń założył Urban II na krucjacie", ua: "Торунь заснував Урбан II у поході" } }
        ],
        answer: "a",
        hint: {
          pl: "Lista z notatek nauczycielki. Własne miasto — opowiedz w klasie, nie tu.",
          ua: "Список із нотаток вчительки. Власне місто — розкажи в класі, не тут."
        },
        explanation: {
          pl: "KN ponadpodstawowe: najstarsze miasta regionu. Film: miasta średniowieczne nadal są ośrodkami.",
          ua: "KN понад базове: найдавніші міста регіону. Фільм: середньовічні міста досі є осередками."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h24-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Lokacja, władza, zajęcia — co jest prawdą?",
          ua: "Локація, влада, заняття — що правда?"
        },
        options: [
          { id: "a", label: { pl: "lokacja = założenie miasta/wsi z zasadźcą; samorząd: rada, burmistrz, ława; miasto = rzemiosło i handel, wieś = rola i hodowla, trójpolówka", ua: "локація = заснування міста/села із засадьцею; самоврядування: рада, бурмістр, лава; місто = ремесло і торгівля, село = рілля і худоба, трипілля" } },
          { id: "b", label: { pl: "lokacja = pasowanie; władzę sprawował tylko giermek", ua: "локація = посвята; владу мав лише зброєносець" } },
          { id: "c", label: { pl: "trójpolówka to schizma z 1054", ua: "трипілля — це схизма 1054 року" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe + cele: skąd miasta, samorząd, zajęcia miasta i wsi.",
          ua: "KN базове + цілі: звідки міста, самоврядування, заняття міста і села."
        },
        explanation: {
          pl: "1054 = lekcja 20. Pasowanie = lekcja 23.",
          ua: "1054 = урок 20. Посвята = урок 23."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Miasta rosły z osad rzemieślniczych i targowych. Wiele miast i wsi powstało przez lokację.",
          ["osad", "lokację"],
          "Міста росли з ремісничих і торгових осель. Багато міст і сіл постало через локацію.",
          ["осель", "локацію"]
        ),
        mark(
          "Najpierw wójt (zasadźca). Potem samorząd: rada, burmistrz i ława miejska.",
          ["wójt", "rada", "ława"],
          "Спочатку війт (засадьця). Потім самоврядування: рада, бурмістр і міська лава.",
          ["війт", "рада", "лава"]
        ),
        mark(
          "Mieszczanie: rzemiosło i handel. Cech dbał o rzemieślników jednej specjalności.",
          ["rzemiosło", "Cech"],
          "Міщани: ремесло і торгівля. Цех дбав про ремісників однієї спеціальності.",
          ["ремесло", "Цех"]
        ),
        mark(
          "Na wsi żyła większość ludzi. Chłopi orali i hodowali; trójpolówka i pług pomagały w polu.",
          ["większość", "trójpolówka"],
          "У селі жила більшість людей. Селяни орали й тримали худобу; трипілля і плуг допомагали в полі.",
          ["більшість", "трипілля"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Kościół w średniowieczu — zakony i szkoła, nie rynek.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Церква в середньовіччі — ордени і школа, не ринок.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "7TluSmz9U2Y",
        title: {
          pl: "Krótkie Lekcje: Średniowieczne miasto i wieś",
          ua: "Короткі уроки: Середньовічне місто і село"
        }
      }
    }
  ]
};
