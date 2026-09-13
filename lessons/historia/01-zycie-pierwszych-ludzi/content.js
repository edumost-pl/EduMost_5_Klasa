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
      heading: {
        pl: "Od myśliwego do rolnika",
        ua: "Від мисливця до рільника"
      },
      formula: "koczownicy → osiadli rolnicy",
      text: {
        pl: [
          "Dawni ludzie żywili się tym, co uzbierali albo upolowali. Szukając pożywienia, wędrowali.",
          "Potem nauczyli się siać zboże i hodować zwierzęta. Zostali przy swoich polach.",
          "Dziś jak w podręczniku: jak wyglądali przodkowie, dokąd wędrowali, czym jest życie koczownicze, rewolucja neolityczna i droga od kamienia do żelaza."
        ],
        ua: [
          "Давні люди живилися тим, що зібрали або вполювали. Шукаючи поживу, мандрували.",
          "Потім навчилися сіяти збіжжя і розводити тварин. Залишилися біля своїх полів.",
          "Сьогодні як у підручнику: як виглядали предки, куди мандрували, що таке кочове життя, неолітична революція і шлях від каменю до заліза."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, kiedy, gdzie i jak wyglądali przodkowie człowieka", ua: "сказати, коли, де і як виглядали предки людини" },
        { pl: "wymienić trzy wielkie odkrycia praludzi: narzędzia, ogień, mowa", ua: "назвати три великі відкриття пралюдей: знаряддя, вогонь, мова" },
        { pl: "porównać koczowniczy i osiadły tryb życia oraz podać skutki rewolucji neolitycznej", ua: "порівняти кочовий і осілий спосіб життя та назвати наслідки неолітичної революції" },
        { pl: "odróżnić epokę kamienia, brązu i żelaza oraz opisać dymarkę", ua: "відрізнити добу каменю, бронзи і заліза та описати димарку" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Przodkowie człowieka", ua: "Предки людини" },
      timelineId: "praludzie",
      formula: "Afryka · ok. 4 mln lat temu",
      text: {
        pl: [
          ["Najstarsi przodkowie — ", em("praludzie"), " — żyli około 4 milionów lat temu w ", em("Afryce"), ". Chodzili pochyleni, mózg był mniejszy niż nasz."],
          "Nie ucz się wszystkich łacińskich nazw na pamięć. Zapamiętaj porządek: coraz większy mózg, coraz bardziej wyprostowana postawa — aż do człowieka rozumnego."
        ],
        ua: [
          ["Найдавніші предки — ", em("пралюди"), " — жили близько 4 мільйонів років тому в ", em("Африці"), ". Ходили похило, мозок був менший, ніж наш."],
          "Не вчи всі латинські назви напам’ять. Запам’ятай порядок: щораз більший мозок, щораз пряміша постава — аж до людини розумної."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Cztery kroki do nas", ua: "Чотири кроки до нас" },
      formula: "4 mln → 200 tys. lat temu",
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/008.png",
        file: "./img/cztery-kroki-ewolucja.jpg",
        alt: { pl: "Cztery etapy: australopitek, człowiek zręczny, wyprostowany, rozumny", ua: "Чотири етапи: австралопітек, людина вміла, прямоходяча, розумна" },
        title: { pl: "Cztery kroki do człowieka rozumnego", ua: "Чотири кроки до людини розумної" },
        prompt: {
          pl: "Szkolna infografika dla klasy 5: cztery sylwetki od lewej do prawej (australopitek → człowiek zręczny → wyprostowany → rozumny), mózg coraz większy, postawa coraz bardziej wyprostowana, daty pod spodem, bez grozy, styl tablicy.",
          ua: "Шкільна інфографіка для 5 класу: чотири постаті зліва направо, мозок щораз більший, постава пряміша, дати внизу, без жаху, стиль таблиці."
        }
      },
      text: {
        pl: [
          ["Kierunki ", em("ewolucji"), " na rysunku szkolnym: mózg „rośnie” od lewej do prawej, postawa jest coraz bardziej wyprostowana. To uproszczenie, ale porządek jest ważny."]
        ],
        ua: [
          ["Напрями ", em("еволюції"), " на шкільному рисунку: мозок «росте» зліва направо, постава щораз пряміша. Це спрощення, але порядок важливий."]
        ]
      },
      items: [
        { pl: "australopitek — ok. 4 mln lat temu, chód pochylony, mały mózg", ua: "австралопітек — бл. 4 млн років тому, хода похила, малий мозок" },
        { pl: "człowiek zręczny — ok. 2,5 mln lat temu, pierwsze proste narzędzia", ua: "людина вміла — бл. 2,5 млн років тому, перші прості знаряддя" },
        { pl: "człowiek wyprostowany — ok. 1,9 mln lat temu, wyższy i bardziej wyprostowany", ua: "людина прямоходяча — бл. 1,9 млн років тому, вища і пряміша" },
        { pl: "człowiek rozumny (Homo sapiens) — ok. 200 tys. lat temu; to my, potem wędrówki po świecie", ua: "людина розумна (Homo sapiens) — бл. 200 тис. років тому; це ми, потім мандрівки світом" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Trzy wielkie odkrycia praludzi", ua: "Три великі відкриття пралюдей" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/009.png",
        file: "./img/piesciak.jpg",
        alt: { pl: "Pięściak: jak powstawał i do czego służył", ua: "Рубило: як виникало і навіщо служило" },
        title: { pl: "Pięściak — pierwsze uniwersalne narzędzie", ua: "Рубило — перше універсальне знаряддя" },
        prompt: {
          pl: "Czytelny rysunek pięściaka dla klasy 5: owalny kamień z ostrymi krawędziami w dłoni, skala, podpis Pięściak / ok. 1,5 mln lat, białe tło, styl podręcznika, bez przemocy.",
          ua: "Читабельний рисунок рубила для 5 класу: овальний камінь з гострими краями в долоні, масштаб, підпис Рубило / бл. 1,5 млн років, білий фон, стиль підручника, без насильства."
        }
      },
      text: {
        pl: [
          ["Proste narzędzie: ", em("pięściak"), " z kamienia — ostre krawędzie, mieści się w dłoni, służył m.in. do cięcia skór (ok. 1,5 mln lat)."],
          ["Ogień: ciepło, pieczenie mięsa i odstraszanie zwierząt."],
          [em("Mowa"), ": sprawne porozumiewanie się i szybka wymiana informacji w grupie."]
        ],
        ua: [
          ["Просте знаряддя: ", em("рубило"), " з каменю — гострі краї, вміщається в долоні, служило зокрема, щоб різати шкіри (бл. 1,5 млн років)."],
          ["Вогонь: тепло, печення м’яса і відлякування звірів."],
          [em("Мова"), ": вправне порозуміння і швидкий обмін відомостями в групі."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Mapa myśli: praludzie", ua: "Мапа думок: пралюди" },
      text: {
        pl: ["Z karty pracy: cztery gałęzie wokół słowa PRALUDZIE. Tak porządkujemy lekcję."],
        ua: ["З картки праці: чотири гілки навколо слова «пралюди». Так упорядковуємо урок."]
      },
      items: [
        { pl: "pożywienie: zbieractwo i myślistwo", ua: "їжа: збиральництво і мисливство" },
        { pl: "umiejętności: ogień i mowa", ua: "вміння: вогонь і мова" },
        { pl: "wygląd: pochylony chód, mniejszy mózg, potem człowiek rozumny", ua: "вигляд: похила хода, менший мозок, потім людина розумна" },
        { pl: "narzędzia: pięściak i oszczep z kamiennym grotem", ua: "знаряддя: рубило і спис із кам’яним наконечником" }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Koczowniczy tryb życia", ua: "Кочовий спосіб життя" },
      text: {
        pl: [
          "Wyobraź sobie grupę liczącą kilkadziesiąt osób. Nie ma sklepu. Jest trop zwierzyny i sezon na jagody.",
          "Zbierali leśne owoce, korzonki, ślimaki i ptasie jaja. Polowali w grupach — zasadzka albo osaczenie zwierzęcia, które odłączyło się od stada. Broń: oszczep z kamiennym grotem.",
          ["Taki wędrowny tryb życia nazywamy ", em("koczowniczym"), ". Nie budowali stałych domów: ", em("szałasy"), " z gałęzi albo ", em("jaskinie"), "."]
        ],
        ua: [
          "Уяви групу з кількох десятків осіб. Немає крамниці. Є слід звіра і сезон ягід.",
          "Збирали лісові плоди, корінці, равликів і пташині яйця. Полювали групами — засідка або оточення звіра, що відбився від стада. Зброя: спис із кам’яним наконечником.",
          ["Такий мандрівний спосіб життя називаємо ", em("кочовим"), ". Не будували сталих хат: ", em("курені"), " з гілок або ", em("печери"), "."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Polowanie i zbieractwo", ua: "Полювання і збиральництво" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/001.png",
        file: "./img/koczownicy-polowanie.jpg",
        alt: { pl: "Grupa myśliwych i zbieraczy", ua: "Група мисливців і збирачів" },
        title: { pl: "Grupa myśliwych i zbieraczy", ua: "Група мисливців і збирачів" },
        prompt: {
          pl: "Ilustracja edukacyjna dla klasy 5: kilkanaście osób w otwartym krajobrazie, ktoś z oszczepem o kamiennym grocie, ktoś zbiera rośliny, bez krwi i bez grozy, rekonstrukcja, styl podręcznika.",
          ua: "Освітня ілюстрація для 5 класу: півтора десятка людей у відкритому краєвиді, хтось зі списом із кам’яним наконечником, хтось збирає рослини, без крові і жаху, реконструкція, стиль підручника."
        }
      },
      text: {
        pl: [
          "Jedzenie zależy od pory roku i szczęścia na polowaniu. Dlatego grupa stale wędrowała: gdy zwierzyna i jagody się kończyły, szła dalej."
        ],
        ua: [
          "Їжа залежить від пори року і вдачі на полюванні. Тому група постійно мандрувала: коли звірина і ягоди кінчалися, йшла далі."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Ogień zmieniał świat", ua: "Вогонь змінював світ" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/002.png",
        file: "./img/ogien-jaskinia.jpg",
        title: {
          pl: "Ognisko w jaskini",
          ua: "Вогнище в печері"
        },
        prompt: {
          pl: "Edukacyjna ilustracja dla klasy 5: niewielka grupa ludzi przy ognisku u wylotu jaskini, wieczór, bez horroru i bez przemocy, czytelne twarze, podręcznikowy spokojny styl, podpis że to rekonstrukcja.",
          ua: "Освітня ілюстрація для 5 класу: невелика група людей біля вогнища при вході в печеру, вечір, без жаху і без насильства, читабельні обличчя, спокійний підручниковий стиль, підпис що це реконструкція."
        }
      },
      text: {
        pl: [
          ["Umiejętność rozpalania ", em("ognia"), " dała trzy konkretne korzyści."],
          "Ciepło — można było mieszkać w chłodniejszych stronach świata. Pieczenie mięsa — łatwiej zjeść i bezpieczniej niż surowe. Ogień odstraszał drapieżniki przy jaskini.",
          "To nie magia. To narzędzie przetrwania."
        ],
        ua: [
          ["Вміння розпалювати ", em("вогонь"), " дало три конкретні користі."],
          "Тепло — можна було жити в холодніших краях. Печення м’яса — легше з’їсти і безпечніше, ніж сире. Вогонь відлякував хижаків біля печери.",
          "Це не магія. Це знаряддя виживання."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Rewolucja neolityczna", ua: "Неолітична революція" },
      timelineYear: 10000,
      formula: "ok. 10 000 p.n.e.",
      text: {
        pl: [
          "Z czasem ludzie zauważyli: z ziaren dzikiego zboża wyrastają nowe rośliny. Nauczyli się je siać i zbierać plony. Tak narodziło się rolnictwo.",
          "Żeby doglądać pola, trzeba zostać. Koczownicy stają się osadnikami.",
          ["To przejście z trybu koczowniczego na ", em("osiadły"), " dzięki uprawie ziemi i hodowli zwierząt nazywamy ", em("rewolucją neolityczną"), "."],
          "Około 9–10 tysięcy lat temu łapano i oswajano m.in. kozy, owce, osły, bydło i konie. ",
          [em("Hodowla"), " dawała mięso, skóry, wełnę i pomoc w pracy — nie trzeba było polować za każdym posiłkiem."],
          ["Na polach siano proso, pszenicę i jęczmień. Ziarna rozcierano dwoma kamieniami — pierwsze żarna. Z mąki i wody pieczono placek na rozgrzanym głazie."]
        ],
        ua: [
          "З часом люди помітили: із зерен дикого збіжжя виростають нові рослини. Навчилися їх сіяти і збирати врожай. Так народилося рільництво.",
          "Щоб доглядати поле, треба лишитися. Кочівники стають осілими.",
          ["Цей перехід від кочового способу до ", em("осілого"), " завдяки обробітку землі і тваринництву називаємо ", em("неолітичною революцією"), "."],
          "Близько 9–10 тисяч років тому ловили і приручали зокрема кіз, овець, віслюків, худобу і коней. ",
          [em("Тваринництво"), " давало м’ясо, шкіри, вовну і допомогу в праці — не треба було полювати на кожну їжу."],
          ["На полях сіяли просо, пшеницю і ячмінь. Зерна розтирали двома каменями — перші жорна. З борошна і води пекли корж на розпеченому камені."]
        ]
      }
    },
    {
      type: "comparison",
      heading: { pl: "Koczownicy i osadnicy", ua: "Кочівники і осілі" },
      text: {
        pl: ["To nie dwa „lepsi i gorsi ludzie”. To dwa sposoby zdobycia jedzenia."],
        ua: ["Це не «кращі і гірші люди». Це два способи здобути їжу."]
      },
      items: [
        { pl: "Koczowniczy: zbieractwo i myślistwo → wędrowka za pożywieniem → szałas lub jaskinia", ua: "Кочовий: збиральництво і мисливство → мандрівка за поживою → курінь або печера" },
        { pl: "Osiadły: uprawa zbóż i hodowla → jedzenie przez rok przy polu → stała osada (np. ziemianki z drewna i gliny)", ua: "Осілий: рільництво і тваринництво → їжа впродовж року біля поля → стале поселення (напр. землянки з дерева і глини)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Jak wyglądała pierwsza osada?", ua: "Як виглядало перше поселення?" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/003.png",
        file: "./img/osada-ziemianki.jpg",
        title: { pl: "Ziemianki nad rzeką", ua: "Землянки над річкою" },
        prompt: {
          pl: "Rekonstrukcja edukacyjna małej neolitycznej osady dla klasy 5: kilka ziemianek z drewna i gliny, dachy ze słomy, pole zboża, kozy i owce, rzeka lub jezioro w tle, dzień, bez ozdobników fantasy, styl podręcznika.",
          ua: "Освітня реконструкція малого неолітичного поселення для 5 класу: кілька землянок з дерева і глини, дахи із соломи, поле збіжжя, кози і вівці, річка або озеро, день, без фентезі, стиль підручника."
        }
      },
      text: {
        pl: [
          ["Pierwsze chaty to często ", em("ziemianki"), ": częściowo wykopane w ziemi, ściany z drewna i gliny, dach ze słomy albo trzciny. Warunki były trudne, ale dawały stałe schronienie."],
          "Osady stawiano nad rzeką albo jeziorem — woda do picia i do pól. Jaskinia to schronienie koczowników; ziemianka należy do trybu osiadłego.",
          "Ciekawostka z Polski: w jaskini niedaleko Nowego Targu znaleziono bumerang z kła mamuta sprzed ok. 30 tysięcy lat."
        ],
        ua: [
          ["Перші хати — часто ", em("землянки"), ": частково вкопані в землю, стіни з дерева і глини, дах із соломи або очерету. Умови були важкі, але давали сталий прихисток."],
          "Поселення ставили над річкою або озером — вода пити і поливати поле. Печера — сховок кочівників; землянка належить до осілого способу.",
          "Цікавинка з Польщі: у печері недалеко Нового Таргу знайшли бумеранг з ікла мамонта віком бл. 30 тисяч років."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: skąd przyszedł człowiek rozumny", ua: "Карта: звідки прийшла розумна людина" },
      visual: {
        kind: "map-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/004.png",
        file: "./img/mapa-wedrowki-czlowieka.jpg",
        title: {
          pl: "Kierunki wędrówek przodków człowieka",
          ua: "Напрями мандрівок предків людини"
        },
        prompt: {
          pl: "Szkolna mapa świata dla klasy 5: Afryka jako kolebka praludzi ok. 4 mln lat temu, strzałki rozprzestrzeniania się człowieka rozumnego, daty osiedlania w tysiącach lat p.n.e. jak w podręczniku (m.in. Australia ok. 40 000, Ameryka Północna ok. 13 000, Ameryka Południowa ok. 10 000), legenda czytelna, bez współczesnych granic państw, jasny styl atlasu szkolnego.",
          ua: "Шкільна карта світу для 5 класу: Африка як колиска пралюдей бл. 4 млн років тому, стрілки розселення людини розумної, дати оселення тисячами років до н.е. як у підручнику (зокрема Австралія бл. 40 000, Північна Америка бл. 13 000, Південна Америка бл. 10 000), читабельна легенда, без сучасних державних кордонів, світлий стиль шкільного атласу."
        }
      },
      text: {
        pl: [
          ["Najdawniejsi przodkowie człowieka żyli w ", em("Afryce"), " około ", em("4 milionów"), " lat temu. Stamtąd człowiek rozumny rozchodził się po świecie."],
          "Szkolne daty osiedlenia (lata p.n.e.): Europa ok. 40–35 tys., Azja ok. 60 tys., Australia ok. 40 tys., Ameryka Północna ok. 13 tys., Ameryka Południowa ok. 10 tys. — ostatnia."
        ],
        ua: [
          ["Найдавніші предки людини жили в ", em("Африці"), " близько ", em("4 мільйонів"), " років тому. Звідти людина розумна розходилася світом."],
          "Шкільні дати оселення (роки до н.е.): Європа бл. 40–35 тис., Азія бл. 60 тис., Австралія бл. 40 тис., Північна Америка бл. 13 тис., Південна Америка бл. 10 тис. — остання."
        ]
      },
      task: {
        id: "h01-map-australia",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Według mapy z lekcji: kiedy człowiek rozumny dotarł do Australii?",
          ua: "За картою з уроку: коли людина розумна дісталася Австралії?"
        },
        options: [
          { id: "a", label: { pl: "ok. 200 000 p.n.e.", ua: "бл. 200 000 до н.е." } },
          { id: "b", label: { pl: "ok. 40 000 p.n.e.", ua: "бл. 40 000 до н.е." } },
          { id: "c", label: { pl: "ok. 10 000 p.n.e.", ua: "бл. 10 000 до н.е." } }
        ],
        answer: "b",
        hint: {
          pl: "Znajdź na mapie Australię i liczbę przy strzałce. To nie data rolnictwa.",
          ua: "Знайди на карті Австралію і число біля стрілки. Це не дата рільництва."
        },
        explanation: {
          pl: "W tym atlasie szkolnym przyjmujemy ok. 40 000 p.n.e. jako czas osiedlenia Australii.",
          ua: "У цьому шкільному атласі приймаємо бл. 40 000 до н.е. як час оселення Австралії."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praca z mapą", ua: "Робота з картою" },
      prompt: {
        pl: "Który kontynent został zasiedlony jako ostatni?",
        ua: "Який континент заселили останнім?"
      },
      task: {
        id: "h01-map-ostatni",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Który kontynent na mapie z lekcji został zasiedlony jako ostatni?",
          ua: "Який континент на карті з уроку заселили останнім?"
        },
        options: [
          { id: "a", label: { pl: "ostatni zasiedlony kontynent to Afryka", ua: "останній заселений континент — Африка" } },
          { id: "b", label: { pl: "ostatni zasiedlony kontynent to Ameryka (Południowa)", ua: "останній заселений континент — Америка (Південна)" } },
          { id: "c", label: { pl: "wszystkie kontynenty zasiedlono w tym samym roku", ua: "усі континенти заселили того самого року" } }
        ],
        answer: "b",
        hint: {
          pl: "Porównaj liczby: mniejsza liczba p.n.e. oznacza czas bliższy nam, czyli później.",
          ua: "Порівняй числа: менше число до н.е. означає час ближчий до нас, тобто пізніше."
        },
        explanation: {
          pl: "10 000 jest później niż 40 000 czy 13 000. Afryka była pierwsza, nie ostatnia.",
          ua: "10 000 пізніше, ніж 40 000 чи 13 000. Африка була першою, не останньою."
        }
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Przyczyna → wydarzenie → skutek", ua: "Причина → подія → наслідок" },
      reveal: true,
      text: {
        pl: ["Rewolucja neolityczna to nie „lepszy charakter ludzi”. To zmiana sposobu życia."],
        ua: ["Неолітична революція — не «кращий характер людей». Це зміна способу життя."]
      },
      steps: [
        {
          formula: "PRZYCZYNA",
          text: {
            pl: "Ludzie nauczyli się uprawiać ziemię i hodować zwierzęta.",
            ua: "Люди навчилися обробляти землю і розводити тварин."
          }
        },
        {
          formula: "WYDARZENIE",
          text: {
            pl: "Powstają stałe osady przy polach (tryb osiadły).",
            ua: "Виникають сталі поселення біля полів (осілий спосіб життя)."
          }
        },
        {
          formula: "SKUTEK",
          text: {
            pl: "Jedzenie jest bardziej przewidywalne przez rok. Można budować trwalsze chaty i żyć większymi grupami.",
            ua: "Їжа передбачуваніша впродовж року. Можна будувати тривкіші хати і жити більшими групами."
          }
        }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Od kamienia do żelaza", ua: "Від каменю до заліза" },
      timelineYear: 1200,
      text: {
        pl: [
          "Najpierw broń i narzędzia robiono z kamienia — ",
          ["to ", em("epoka kamienia"), ". Kamień trudno obrabiać, ostrze szybko się tępi."],
          "Potem wytapiano miedź, a z miedzi i cyny — twardszy ",
          [em("brąz"), ". To epoka brązu: lepsze siekiery, groty, ozdoby."],
          ["Około ", em("1200 p.n.e."), " opanowano wytop ", em("żelaza"), " — twardszego od brązu. Epoka żelaza trwa do dziś: wciąż używamy żelaza i stali."]
        ],
        ua: [
          "Спочатку зброю і знаряддя робили з каменю — ",
          ["це ", em("доба каменю"), ". Камінь важко обробляти, лезо швидко тупиться."],
          "Потім виплавляли мідь, а з міді і олова — твердішу ",
          [em("бронзу"), ". Це доба бронзи: кращі сокири, наконечники, прикраси."],
          ["Близько ", em("1200 до н.е."), " опанували виплавку ", em("заліза"), " — твердішого за бронзу. Доба заліза триває досі: ми досі використовуємо залізо і сталь."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Trzy siekiery — trzy epoki", ua: "Три сокири — три доби" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/005.png",
        file: "./img/siekiery-trzy-epoki.jpg",
        title: { pl: "Siekiera kamienna, brązowa i żelazna", ua: "Сокира кам’яна, бронзова і залізна" },
        prompt: {
          pl: "Trzy czytelne rysunki siekier obok siebie dla klasy 5: kamienna (otoczak/krzemień), brązowa, żelazna; jednakowa skala, podpisy Epoka kamienia / brązu / żelaza, białe tło, styl tablicy szkolnej, bez ozdób.",
          ua: "Три читабельні рисунки сокир поруч для 5 класу: кам’яна, бронзова, залізна; однаковий масштаб, підписи Доба каменю / бронзи / заліза, білий фон, стиль шкільної таблиці, без прикрас."
        }
      },
      text: {
        pl: ["Nazwa epoki bierze się od materiału, z którego najczęściej robiono narzędzia i broń — nie od „charakteru ludu”."],
        ua: ["Назва доби походить від матеріалу, з якого найчастіше робили знаряддя і зброю — не від «характеру народу»."]
      }
    },
    {
      type: "example",
      heading: { pl: "Źródło: jak wytapiano żelazo", ua: "Джерело: як виплавляли залізо" },
      formula: "ŹRÓDŁO: dymarka (schemat)",
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/006.png",
        file: "./img/dymarka.jpg",
        title: { pl: "Dymarka — piec z kamienia i gliny", ua: "Димарка — піч з каменю і глини" },
        prompt: {
          pl: "Prosty schemat edukacyjny dymarki dla klasy 5: piec z kamienia i gliny, wsad ruda + węgiel drzewny, temperatura ok. 1200°C, bryła żelaza po rozbiciu pieca, kowal kuje ostrze; trzy ponumerowane kroki, bez przemocy, czytelne podpisy PL.",
          ua: "Проста освітня схема димарки для 5 класу: піч з каменю і глини, руда + деревне вугілля, близько 1200°C, криця після розбиття печі, коваль кує лезо; три пронумеровані кроки, без насильства, читабельні підписи."
        }
      },
      text: {
        pl: [
          "Trzy kroki z podręcznika: 1) budowa pieca z kamienia i gliny; 2) wsad: ruda żelaza + węgiel drzewny, ok. 1200°C, potem piec rozbijano i wyjmowano bryłę; 3) kowal kuł np. nóż albo siekierę.",
          "To źródło-schemat: pokazuje czynność, nie imię kowala."
        ],
        ua: [
          "Три кроки з підручника: 1) будова печі з каменю і глини; 2) шихта: руда заліза + деревне вугілля, бл. 1200°C, потім піч розбивали і виймали крицю; 3) коваль кував, напр. ніж або сокиру.",
          "Це джерело-схема: показує дію, не ім’я коваля."
        ]
      },
      prompt: {
        pl: "Co źródło mówi? Czego się dowiadujemy? Jaki wniosek?",
        ua: "Що каже джерело? Чого дізнаємося? Який висновок?"
      },
      task: {
        id: "h01-src-dymarka",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czego uczciwie uczy nas schemat dymarki?",
          ua: "Чого чесно вчить нас схема димарки?"
        },
        options: [
          { id: "a", label: { pl: "nazwiska i daty urodzenia hutnika", ua: "прізвища і дати народження металурга" } },
          { id: "b", label: { pl: "że żelazo otrzymywano z rudy w piecu, potem je kuto", ua: "що залізо отримували з руди в печі, потім кували" } },
          { id: "c", label: { pl: "że dymarka działała na prąd jak dzisiejsza huta", ua: "що димарка працювала від струму, як сучасний завод" } }
        ],
        answer: "b",
        hint: {
          pl: "Schemat pokazuje kroki pracy, nie życiorys.",
          ua: "Схема показує кроки праці, не життєпис."
        },
        explanation: {
          pl: "Widzimy technologię: ruda → ogień → metal → kucie. Nie zgadujemy imion.",
          ua: "Бачимо технологію: руда → вогонь → метал → кування. Не вигадуємо імен."
        }
      }
    },
    {
      type: "comparison",
      heading: { pl: "Dymarka i współczesna huta", ua: "Димарка і сучасний завод" },
      visual: {
        kind: "image-placeholder",
        url: "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/007.png",
        file: "./img/huta-wspolczesna.jpg",
        title: { pl: "Współczesny piec hutniczy", ua: "Сучасна металургійна піч" },
        prompt: {
          pl: "Spokojna edukacyjna fotografia lub rysunek wnętrza huty dla klasy 5: wielki piec, hutnicy w ognioodpornych kombinezonach, bez poparzeń i grozy, podpis że temperatura jest wyższa niż w dymarce i piec nie jest niszczony po każdym wytopie.",
          ua: "Спокійна освітня світлина або рисунок цеху для 5 класу: велика піч, металурги в вогнетривкому одязі, без опіків і жаху, підпис що температура вища ніж у димарці і піч не нищать після кожної плавки."
        }
      },
      items: [
        { pl: "Dymarka: kamień i glina, węgiel drzewny, ok. 1200°C, piec rozbijano", ua: "Димарка: камінь і глина, деревне вугілля, бл. 1200°C, піч розбивали" },
        { pl: "Huta dziś: wielki piec wielokrotnego użytku, prąd, ok. 1500°C, kontrola temperatury, odzież ochronna", ua: "Завод нині: велика піч багаторазова, струм, бл. 1500°C, контроль температури, захисний одяг" }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "prehistoria — dzieje ludzi przed wynalezieniem pisma", ua: "доісторія — історія людей до винаходу письма" },
        { pl: "pięściak — proste kamienne narzędzie mieszczące się w dłoni", ua: "рубило — просте кам’яне знаряддя, що вміщається в долоні" },
        { pl: "hodowla — oswajanie zwierząt, by mieć pożywienie i pomoc przy pracy", ua: "тваринництво — приручення звірів, щоб мати їжу і допомогу в праці" },
        { pl: "koczowniczy tryb życia — wędrowanie za pożywieniem, bez stałego domu", ua: "кочовий спосіб життя — мандрівка за поживою, без сталої хати" },
        { pl: "osiadły tryb życia — stałe mieszkanie przy polach i stadach", ua: "осілий спосіб життя — постійне життя біля полів і худоби" },
        { pl: "rewolucja neolityczna — przejście do rolnictwa, hodowli i osad", ua: "неолітична революція — перехід до рільництва, тваринництва і поселень" },
        { pl: "epoka kamienia / brązu / żelaza — okres nazwany od materiału narzędzi", ua: "доба каменю / бронзи / заліза — період, названий за матеріалом знарядь" },
        { pl: "dymarka — dawny piec do wytopu żelaza z rudy", ua: "димарка — давня піч для виплавки заліза з руди" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Pytanie z podręcznika: dzięki czemu ludzie zaczęli prowadzić osiadły tryb życia?"],
        ua: ["Питання з підручника: завдяки чому люди почали вести осілий спосіб життя?"]
      },
      task: {
        id: "h01-guided-osiadly",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co pozwoliło ludziom zostać w jednym miejscu?",
          ua: "Що дозволило людям лишитися в одному місці?"
        },
        options: [
          { id: "a", label: { pl: "wynalezienie alfabetu i szkół", ua: "винайдення алфавіту і шкіл" } },
          { id: "b", label: { pl: "uprawa ziemi i hodowla zwierząt", ua: "обробіток землі і тваринництво" } },
          { id: "c", label: { pl: "wyłącznie polowanie na mamuty", ua: "лише полювання на мамонтів" } }
        ],
        answer: "b",
        hint: {
          pl: "Pole i stado trzeba doglądać przez sezony — nie da się ich zabrać w ciągłą wędrówkę tak jak łuk.",
          ua: "Поле і стадо треба доглядати сезонами — їх не забереш у постійну мандрівку так, як лук."
        },
        explanation: {
          pl: "Rolnictwo i hodowla = rewolucja neolityczna = tryb osiadły.",
          ua: "Рільництво і тваринництво = неолітична революція = осілий спосіб."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Rewolucja neolityczna to moment, gdy ludzie wynaleźli żelazo i zbudowali huty.”",
        ua: "«Неолітична революція — це момент, коли люди винайшли залізо і збудували заводи.»"
      },
      text: {
        pl: [
          "Nie. Rewolucja neolityczna to rolnictwo, hodowla i osiadły tryb życia (ok. 10 000 p.n.e.).",
          "Żelazo i dymarki to dużo później (ok. 1200 p.n.e.). Huta elektryczna — czasy współczesne."
        ],
        ua: [
          "Ні. Неолітична революція — це рільництво, тваринництво і осілий спосіб життя (бл. 10 000 до н.е.).",
          "Залізо і димарки — набагато пізніше (бл. 1200 до н.е.). Електричний завод — сучасність."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Po co był ogień?", ua: "Навіщо був вогонь?" },
      task: {
        id: "h01-ogien",
        type: "true-false",
        level: "A",
        question: {
          pl: "Ogień pomógł ludziom mieszkać w chłodniejszych stronach świata i piec mięso — prawda czy fałsz?",
          ua: "Вогонь допоміг людям жити в холодніших краях і пекти м’ясо — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Pomyśl o cieple i o jedzeniu.",
          ua: "Подумай про тепло і про їжу."
        },
        explanation: {
          pl: "To dwie korzyści z podręcznika: ciepło (zasięg osadnictwa) i pieczenie mięsa. Trzecia: ogień odstraszał zwierzęta.",
          ua: "Це дві користі з підручника: тепло (дальше розселення) і печення м’яса. Третя: вогонь відлякував звірів."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Skreśl błędne — jak na karcie", ua: "Викресли помилкове — як на картці" },
      task: {
        id: "h01-kn-ziemianki",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Ludzie prowadzący osiadły tryb życia zamieszkiwali głównie:",
          ua: "Люди з осілим способом життя жили переважно:"
        },
        options: [
          { id: "a", label: { pl: "jaskinie", ua: "печери" } },
          { id: "b", label: { pl: "ziemianki", ua: "землянки" } },
          { id: "c", label: { pl: "piramidy", ua: "піраміди" } }
        ],
        answer: "b",
        hint: {
          pl: "Jaskinia chroni koczowników. Osadnicy budują chaty częściowo wkopane w ziemię.",
          ua: "Печера ховає кочівників. Осілі будують хати, частково вкопані в землю."
        },
        explanation: {
          pl: "Karta pracy: osiadły tryb = ziemianki. Jaskinie to schronienie wędrowców.",
          ua: "Картка праці: осілий спосіб = землянки. Печери — сховок мандрівників."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Z czego powstaje brąz?", ua: "З чого виникає бронза?" },
      task: {
        id: "h01-kn-braz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po połączeniu miedzi z cyną powstaje:",
          ua: "Після поєднання міді з оловом виникає:"
        },
        options: [
          { id: "a", label: { pl: "żelazo", ua: "залізо" } },
          { id: "b", label: { pl: "brąz", ua: "бронза" } },
          { id: "c", label: { pl: "glina", ua: "глина" } }
        ],
        answer: "b",
        hint: {
          pl: "Żelazo wytapia się z rudy w dymarce. Tu chodzi o stop dwóch metali.",
          ua: "Залізо виплавляють з руди в димарці. Тут ідеться про сплав двох металів."
        },
        explanation: {
          pl: "Miedź + cyna = brąz (twardszy niż sama miedź). To epoka brązu.",
          ua: "Мідь + олово = бронза (твердіша за саму мідь). Це доба бронзи."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz na głos: jakie korzyści dała człowiekowi umiejętność wykorzystania ognia?",
        ua: "Скажи вголос: яку користь дало людині вміння користуватися вогнем?"
      },
      text: {
        pl: [
          "Podpowiedź: pomyśl o zimnie, o mięsie i o tym, czy jaskinia bez ognia jest przyjemna.",
          "Powiedz 2–4 zdania. Potem wybierz zdanie, które najlepiej to ujmuje."
        ],
        ua: [
          "Підказка: подумай про холод, про м’ясо і про те, чи печера без вогню приємна.",
          "Скажи 2–4 речення. Потім вибери речення, яке це найкраще передає."
        ]
      },
      task: {
        id: "h01-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej zbiera korzyści ognia?",
          ua: "Яке речення найкраще збирає користь вогню?"
        },
        options: [
          { id: "a", label: { pl: "Ogień służył tylko do ozdoby jaskini", ua: "Вогонь служив лише окрасою печери" } },
          { id: "b", label: { pl: "Dawał ciepło, pozwalał piec mięso i odstraszał zwierzęta", ua: "Давав тепло, дозволяв пекти м’ясо і відлякував звірів" } },
          { id: "c", label: { pl: "Zastąpił rolnictwo i hodowlę", ua: "Замінив рільництво і тваринництво" } }
        ],
        answer: "b",
        hint: {
          pl: "Trzy korzyści z infografiki: ciepło, pieczenie, ochrona przed zwierzętami.",
          ua: "Три користі з інфографіки: тепло, печення, захист від звірів."
        },
        explanation: {
          pl: "Ogień = ciepło + pieczone jedzenie (+ ochrona). Nie mylić z rewolucją neolityczną.",
          ua: "Вогонь = тепло + печена їжа (+ захист). Не плутати з неолітичною революцією."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wyjaśnij krótko, na czym polegała rewolucja neolityczna.",
        ua: "Поясни коротко, у чому полягала неолітична революція."
      },
      task: {
        id: "h01-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wpisz dwa słowa-klucze po polsku, połączone spójnikiem i: uprawa i …",
          ua: "Введи два ключові слова польською, зі сполучником i: uprawa i …"
        },
        answer: [
          "uprawa i hodowla",
          "hodowla i uprawa",
          "rolnictwo i hodowla",
          "hodowla i rolnictwo",
          "рільництво і тваринництво",
          "тваринництво і рільництво"
        ],
        hint: {
          pl: "To nie żelazo. To to, co je się z pola i ze stada.",
          ua: "Це не залізо. Це те, що їдять з поля і зі стада."
        },
        explanation: {
          pl: "Rewolucja neolityczna = uprawa ziemi i hodowla zwierząt → osiadły tryb życia.",
          ua: "Неолітична революція = обробіток землі і тваринництво → осілий спосіб життя."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co było wcześniej?", ua: "Що було раніше?" },
      task: {
        id: "h01-order",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która kolejność jest prawdziwa?",
          ua: "Який порядок правильний?"
        },
        options: [
          { id: "a", label: { pl: "najpierw epoka żelaza, potem rolnictwo, potem ogień", ua: "спочатку доба заліза, потім рільництво, потім вогонь" } },
          { id: "b", label: { pl: "najpierw ogień i koczownicy, potem rewolucja neolityczna, potem brąz i żelazo", ua: "спочатку вогонь і кочівники, потім неолітична революція, потім бронза і залізо" } },
          { id: "c", label: { pl: "najpierw huty na Śląsku, potem jaskinie", ua: "спочатку заводи на Сілезії, потім печери" } }
        ],
        answer: "b",
        hint: {
          pl: "Nie myl neolitu z epoką żelaza.",
          ua: "Не плутай неоліт із добою заліза."
        },
        explanation: {
          pl: "Ogień i wędrówka są dawniejsze. Rolnictwo ok. 10 000 p.n.e. Żelazo ok. 1200 p.n.e.",
          ua: "Вогонь і мандрівка давніші. Рільництво бл. 10 000 до н.е. Залізо бл. 1200 до н.е."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Kamień, brąz, żelazo — zaleta i wada", ua: "Камінь, бронза, залізо — перевага і вада" },
      task: {
        id: "h01-material",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest uczciwe?",
          ua: "Яке речення чесне?"
        },
        options: [
          { id: "a", label: { pl: "kamień zawsze był najlepszy, bo leży wszędzie i nigdy się nie tępi", ua: "камінь завжди найкращий, бо лежить усюди і ніколи не тупиться" } },
          { id: "b", label: { pl: "brąz i żelazo dają twardsze narzędzia, ale trzeba umieć wytopić metal z rudy", ua: "бронза і залізо дають твердіші знаряддя, але треба вміти виплавити метал з руди" } },
          { id: "c", label: { pl: "żelazo jest gorsze od kamienia, dlatego epoka żelaza już się skończyła", ua: "залізо гірше за камінь, тому доба заліза вже скінчилася" } }
        ],
        answer: "b",
        hint: {
          pl: "Podręcznik pyta o zalety i wady materiałów — nie o „magiczny postęp”.",
          ua: "Підручник питає про переваги і вади матеріалів — не про «магічний прогрес»."
        },
        explanation: {
          pl: "Kamień: dostępny, ale kruchy/tępy. Metale: twardsze, ale trudniejsza technologia. Epoka żelaza trwa.",
          ua: "Камінь: доступний, але крихкий/тупий. Метали: твердіші, але складніша технологія. Доба заліза триває."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h01-check-afryka",
        type: "true-false",
        level: "A",
        question: {
          pl: "Najdawniejsi przodkowie człowieka żyli w Afryce około 4 milionów lat temu — prawda czy fałsz?",
          ua: "Найдавніші предки людини жили в Африці близько 4 мільйонів років тому — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To pierwsze zdanie podsumowania w podręczniku.",
          ua: "Це перше речення підсумку в підручнику."
        },
        explanation: {
          pl: "Afryka jest kolebką. Potem wędrówki na inne kontynenty.",
          ua: "Африка — колиска. Потім мандрівки на інші континенти."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h01-check-neolit",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Około którego roku p.n.e. narodziło się rolnictwo? Wpisz liczbę: ", em("10000"), "."],
          ua: ["Близько якого року до н.е. народилося рільництво? Введи число: ", em("10000"), "."]
        },
        answer: 10000,
        hint: {
          pl: "W podręczniku: około 10 tysięcy lat p.n.e.",
          ua: "У підручнику: близько 10 тисяч років до н.е."
        },
        explanation: {
          pl: "Ok. 10 000 p.n.e. — początek rolnictwa i rewolucji neolitycznej (data umowna, szkolna).",
          ua: "Бл. 10 000 до н.е. — початок рільництва і неолітичної революції (умовна шкільна дата)."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Przodkowie człowieka żyli w Afryce ok. 4 mln lat temu. Ważne umiejętności: ogień i mowa.",
          ["Afryce", "ogień", "mowa"],
          "Предки людини жили в Африці бл. 4 млн років тому. Важливі вміння: вогонь і мова.",
          ["Африці", "вогонь", "мова"]
        ),
        mark(
          "Prehistoria: zbieractwo i myślistwo, koczowniczy tryb życia.",
          ["Prehistoria", "zbieractwo", "myślistwo", "koczowniczy"],
          "Доісторія: збиральництво і мисливство, кочовий спосіб життя.",
          ["Доісторія", "збиральництво", "мисливство", "кочовий"]
        ),
        mark(
          "Rewolucja neolityczna: uprawa i hodowla → osiadły tryb życia.",
          ["Rewolucja neolityczna", "uprawa", "hodowla", "osiadły"],
          "Неолітична революція: рільництво і тваринництво → осілий спосіб життя.",
          ["Неолітична революція", "рільництво", "тваринництво", "осілий"]
        ),
        mark(
          "Dzieje narzędzi: epoka kamienia, brązu i żelaza (nazwa od materiału).",
          ["epoka kamienia", "brązu", "żelaza"],
          "Історія знарядь: доба каменю, бронзи і заліза (назва від матеріалу).",
          ["доба каменю", "бронзи", "заліза"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następny temat: miasta nad Tygrysem i Eufratem. Tam rolnictwo nad rzeką staje się podstawą miast-państw.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: міста над Тигром і Євфратом. Там рільництво над річкою стає основою міст-держав.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "Dt7GjntKSTs",
        title: {
          pl: "Krótkie Lekcje: Życie pierwszych ludzi",
          ua: "Короткі уроки: Життя перших людей"
        }
      }
    }
  ]
};
