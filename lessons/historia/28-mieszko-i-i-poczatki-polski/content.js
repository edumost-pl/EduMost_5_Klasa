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
      heading: { pl: "Mieszko I i początki Polski", ua: "Мешко I і початки Польщі" },
      formula: "966 · 972",
      text: {
        pl: [
          "Z lekcji 27 znasz Polan i Gniezno. Dziś pierwszy władca, o którym piszą sąsiedzi: Mieszko I.",
          "Na osi dwie daty: 966 — chrzest, 972 — Cedynia. Zjazd w Gnieźnie 1000 — następna lekcja."
        ],
        ua: [
          "З уроку 27 знаєш полян і Гнєзно. Сьогодні перший володар, про якого пишуть сусіди: Мешко I.",
          "На осі дві дати: 966 — хрещення, 972 — Цедіня. З’їзд у Гнєзні 1000 — наступний урок."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić, dlaczego Mieszko I to pierwszy historyczny władca", ua: "пояснити, чому Мешко I — перший історичний володар" },
        { pl: "powiedzieć, skąd nazwa Polska, i wskazać Gniezno, Poznań, Wielkopolskę", ua: "сказати, звідки назва Польща, і вказати Гнєзно, Познань, Великопольщу" },
        { pl: "opisać chrzest 966 (Dobrawa) oraz skutki", ua: "описати хрещення 966 (Добрава) і наслідки" },
        { pl: "umieścić na osi 966 i 972 (Cedynia)", ua: "поставити на вісь 966 і 972 (Цедіня)" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Państwo Polan", ua: "Держава полян" },
      formula: "Wielkopolska",
      visual: gh("232", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa państwa Mieszka: Gniezno, Poznań, Ostrów Lednicki, granice bez Warmii i Mazur",
          ua: "Карта держави Мешка: Гнєзно, Познань, Острів Ледницький, кордони без Вармії і Мазур"
        },
        title: { pl: "Grody nad Wartą, nie mapa 2026", ua: "Городи над Вартою, не карта 2026" },
        prompt: {
          pl: "Szkolna mapa 16:9, ok. 960–992. Podpisy PL: Gniezno, Poznań, Ostrów Lednicki, Giecz; Wielkopolska (rdzeń). Granica bez Warmii i Mazur (Prusowie). Sąsiedzi: Czechy, Niemcy, Ruś. BEZ skrzyżowanych mieczy Cedyni (to osobny slajd), BEZ mapy z Wiki. Styl Nowej Ery.",
          ua: "Карта Мешка. Гнєзно, Познань. Без Вармії-Мазур."
        }
      }),
      text: {
        pl: [
          ["W X w. najsilniejsi byli ", em("Polanie"), " wokół ", em("Gniezna"), " (także Ostrów Lednicki, Giecz). Od pola / Polan — nazwa ", em("Polska"), ". KN: umieć wskazać Gniezno, Poznań i Wielkopolskę."],
          "Kraj Mieszka przypominał dzisiejszą Polskę — bez Warmii i Mazur (plemiona Prusów). Pomorze, Śląsk i część Małopolski dołączyły za jego rządów."
        ],
        ua: [
          ["У X ст. найсильнішими були ", em("поляни"), " довкола ", em("Гнєзна"), " (також Острів Ледницький, Геч). Від поля / полян — назва ", em("Польща"), ". KN: вміти вказати Гнєзно, Познань і Великопольщу."],
          "Край Мешка нагадував сьогоднішню Польщу — без Вармії і Мазур (племена пруссів). Помор’я, Сілезія і частина Малопольщі долучилися за його правління."
        ]
      },
      task: {
        id: "h28-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leżał rdzeń państwa Polan i skąd nazwa Polska?",
          ua: "Де лежав осередок держави полян і звідки назва Польща?"
        },
        options: [
          { id: "a", label: { pl: "Wielkopolska (Gniezno, Poznań); nazwa od plemienia Polan", ua: "Великопольща (Гнєзно, Познань); назва від племені полян" } },
          { id: "b", label: { pl: "tylko Mekka z lekcji 18", ua: "лише Мекка з уроку 18" } },
          { id: "c", label: { pl: "rdzeń to Notre Dame z lekcji 26", ua: "осередок — Нотр-Дам з уроку 26" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: Gniezno, Poznań, Wielkopolska. Film: pole = otwarta przestrzeń.",
          ua: "KN: Гнєзно, Познань, Великопольща. Фільм: поле = відкритий простір."
        },
        explanation: {
          pl: "Słowo na monecie Bolesława (princes Polonie) — lekcja 29, nie ten denar tu.",
          ua: "Слово на монеті Болеслава (princes Polonie) — урок 29, не цей денарій тут."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mieszko I", ua: "Мешко I" },
      formula: "ok. 960–992",
      visual: gh("233", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Mieszka I: cztery punkty i spokojny portret księcia",
          ua: "Картка Мешка I: чотири пункти і спокійний портрет князя"
        },
        title: { pl: "Książę stoi, nie Matejko", ua: "Князь стоїть, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret księcia w płaszczu, krzyż w dłoni, dzień. BEZ Matejki, BEZ bitwy. Cztery punkty PL: „kto — Mieszko I”; „skąd — Polanie, Gniezno”; „lata — ok. 960–992”; „wsławił się — pierwszy historyczny władca, chrzest 966”. Styl Nowej Ery.",
          ua: "Картка Мешка: поляни, 960–992, хрещення. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Mieszko I"), " (ok. 960–992): kto — książę Polan; skąd — Gniezno / Wielkopolska; czym się wsławił — ", em("pierwszy historyczny"), " władca Polski (piszą o nim sąsiedzi) i chrzest."],
          ["Utrzymywał ", em("drużynę"), " wojów. Sojusze i podboje — nie sama mapa z lekcji 27."]
        ],
        ua: [
          ["", em("Мешко I"), " (бл. 960–992): хто — князь полян; звідки — Гнєзно / Великопольща; чим уславився — ", em("перший історичний"), " володар Польщі (про нього пишуть сусіди) і хрещення."],
          ["Утримував ", em("дружину"), " воїв. Союзи і підбої — не лише карта з уроку 27."]
        ]
      },
      task: {
        id: "h28-hist",
        type: "true-false",
        level: "A",
        question: {
          pl: "Mieszko I jest pierwszym historycznym władcą Polski, bo znamy go z przekazów źródłowych — prawda czy fałsz?",
          ua: "Мешко I є першим історичним володарем Польщі, бо знаємо його з джерел — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: dlaczego pierwszy historyczny. Dziadkowie są w legendzie i u Galla.",
          ua: "KN: чому перший історичний. Діди — в легенді і в Галла."
        },
        explanation: {
          pl: "Prawda. Siemowit, Lestek i Siemomysł — imiona u Galla, nie osobne karty.",
          ua: "Правда. Семовит, Лестек і Семомисл — імена в Галла, не окремі картки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pierwsi Piastowie", ua: "Перші П’ясти" },
      formula: "dynastia",
      visual: gh("234", {
        kind: "image-placeholder",
        alt: {
          pl: "Linia: Siemowit, Lestek, Siemomysł, Mieszko — tylko Mieszko podpisany „źródła”",
          ua: "Лінія: Семовит, Лестек, Семомисл, Мешко — лише Мешко підписаний «джерела»"
        },
        title: { pl: "Imiona, nie myszy", ua: "Імена, не миші" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Pas imion: Siemowit → Lestek → Siemomysł → Mieszko I (ramka „źródła”). Ikona drużyny. Tytuł: „dynastia Piastów”. BEZ rysunku myszy zjadających Popiela, BEZ gore. Styl Nowej Ery.",
          ua: "Лінія П’ястів. Без мишей і Попеля на рисунку."
        }
      }),
      text: {
        pl: [
          ["Ród ", em("Piastów"), ": Siemowit, Lestek, Siemomysł — potem Mieszko. O wszystkich pisze ", em("Gall Anonim"), " (XII w.). Mieszko jako jedyny z tej czwórki jest pewny w źródłach sąsiadów."],
          "Legenda o okrutnym Popielu (myszy) zostaje opowieścią, nie faktem z osi. Siła księcia: drużyna."
        ],
        ua: [
          ["Рід ", em("П’ястів"), ": Семовит, Лестек, Семомисл — потім Мешко. Про всіх пише ", em("Галл Анонім"), " (XII ст.). Мешко як єдиний із цієї четвірки певний у джерелах сусідів."],
          "Легенда про жорстокого Попеля (миші) лишається оповіддю, не фактом з осі. Сила князя: дружина."
        ]
      },
      task: {
        id: "h28-piast",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto z tej listy jest pierwszym historycznym Piastem?",
          ua: "Хто з цього списку — перший історичний П’яст?"
        },
        options: [
          { id: "a", label: { pl: "Mieszko I — znamy go ze źródeł; dziadkowie głównie z Galla i legend", ua: "Мешко I — знаємо зі джерел; діди головно з Галла і легенд" } },
          { id: "b", label: { pl: "Popiel, bo myszy to dokument z 966", ua: "Попель, бо миші — документ з 966" } },
          { id: "c", label: { pl: "Urban II z 1095", ua: "Урбан II з 1095" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: pierwszy historyczny władca. Film: Siemowit → Lestek → Siemomysł → Mieszko.",
          ua: "KN: перший історичний володар. Фільм: Семовит → Лестек → Семомисл → Мешко."
        },
        explanation: {
          pl: "Popiel = legenda. Urban = lekcja 21.",
          ua: "Попель = легенда. Урбан = урок 21."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dobrawa i sojusz", ua: "Добрава і союз" },
      formula: "965",
      visual: gh("235", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Dobrawy: czeska księżniczka, ślub 965, księga i świeca",
          ua: "Картка Добрави: чеська князівна, шлюб 965, книга і свічка"
        },
        title: { pl: "Czeska żona, nie wojna na obrazie", ua: "Чеська дружина, не війна на образі" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret księżniczki z księgą, dzień. Cztery punkty PL: „kto — Dobrawa (Dąbrówka)”; „skąd — Czechy”; „lata — ślub 965”; „wsławiła się — sojusz i droga do chrztu”. BEZ kadru filmu, BEZ Matejki. Styl Nowej Ery.",
          ua: "Картка Добрави: Чехія, 965, союз. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Dobrawa"), " (Dąbrówka): kto — księżniczka; skąd — ", em("Czechy"), " (córka Bolesława Srogiego); lata — ślub ", em("965"), "; wsławiła się — sojusz i chrześcijaństwo na dworze."],
          "Mieszko szukał sojuszników przeciw Wieletom. Ślub z Czechami rozbił ich sojusz z Wieletami. W tle też cesarz Otton I (na osi: 962)."
        ],
        ua: [
          ["", em("Добрава"), " (Домбровка): хто — князівна; звідки — ", em("Чехія"), " (донька Болеслава Лютого); роки — шлюб ", em("965"), "; уславилася — союз і християнство на дворі."],
          "Мешко шукав союзників проти велетів. Шлюб із чехами розбив їхній союз із велетами. У тлі також імператор Оттон I (на осі: 962)."
        ]
      },
      task: {
        id: "h28-dob",
        type: "true-false",
        level: "A",
        question: {
          pl: "Mieszko ożenił się z Dobrawą z Czech, żeby m.in. mieć sojusznika i przyjąć chrzest — prawda czy fałsz?",
          ua: "Мешко одружився з Добравою з Чехії, щоб зокрема мати союзника і прийняти хрещення — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: Dobrawa. Film: Czechy zamiast Wieletów.",
          ua: "KN: Добрава. Фільм: Чехія замість велетів."
        },
        explanation: {
          pl: "Prawda. Druga żona Oda — przy Dagome iudex, nie osobna karta.",
          ua: "Правда. Друга дружина Ода — при Dagome iudex, не окрема картка."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Chrzest Polski", ua: "Хрещення Польщі" },
      formula: "966",
      timelineYear: 966,
      visual: gh("236", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolny rysunek chrztu przy chrzcielnicy, ubrane postacie, rok 966",
          ua: "Шкільний рисунок хрещення біля купільні, вбрані постаті, рік 966"
        },
        title: { pl: "Woda i krzyż, nie obraz Matejki", ua: "Вода і хрест, не картина Матейка" },
        prompt: {
          pl: "Szkolny rysunek 16:9, dzień. Książę klęczy przy chrzcielnicy w tunice, biskup w szatach polewa wodę. Ubrane postacie. Napis: „966”. Podpis: „Poznań albo Ostrów Lednicki (baptysterium)”. BEZ Matejki, BEZ nagiego chrztu, BEZ św. Wojciecha (to lekcja 29). Styl Nowej Ery.",
          ua: "Хрещення-схема 966. Постаті в шатах. Не Матейко і не Войцех."
        }
      }),
      text: {
        pl: [
          ["", em("966"), " — chrzest Mieszka (często wiązany z Wielkanocą). Miejsce: ", em("Poznań"), " albo ", em("Ostrów Lednicki"), " (ślady baptysterium — budowli do chrztu)."],
          "Przyczyny: sojusz z Czechami, uniknąć „nawracania” mieczem, umocnić władzę, wejść do grona chrześcijańskich książąt przy Ottonie I."
        ],
        ua: [
          ["", em("966"), " — хрещення Мешка (часто пов’язують із Великоднем). Місце: ", em("Познань"), " або ", em("Острів Ледницький"), " (сліди баптистерію — будівлі для хрещення)."],
          "Причини: союз із Чехією, уникнути «навернення» мечем, зміцнити владу, увійти до кола християнських князів при Оттоні I."
        ]
      },
      task: {
        id: "h28-966",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Mieszko I przyjął chrzest? Wpisz tylko liczbę.",
          ua: "У якому році Мешко I прийняв хрещення? Введи лише число."
        },
        answer: 966,
        hint: {
          pl: "Dziewięć, sześć, sześć. Po ślubie 965. KN: ta data na osi.",
          ua: "Дев’ять, шість, шість. Після шлюбу 965. KN: ця дата на осі."
        },
        explanation: {
          pl: "966. Wojciech i rok 1000 = lekcja 29.",
          ua: "966. Войцех і рік 1000 = урок 29."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Skutki chrztu", ua: "Наслідки хрещення" },
      formula: "968 · Poznań",
      visual: gh("237", {
        kind: "image-placeholder",
        alt: {
          pl: "Ikony skutków: kościół, szkoła, biskup Jordan, Europa chrześcijańska",
          ua: "Іконки наслідків: церква, школа, єпископ Йордан, християнська Європа"
        },
        title: { pl: "Kościół i szkoła, nie epitafium z Wiki", ua: "Церква і школа, не епітафія з Вікі" },
        prompt: {
          pl: "Szkolny slajd 16:9, cztery ikony PL: „władza od Boga”; „biskupstwo Poznań 968, bp Jordan”; „kościoły i szkoły”; „miejsce w Europie”. Dzień. BEZ zdjęcia epitafium, BEZ rotundy z Cieszyna jako „chrzest 966”. Styl Nowej Ery.",
          ua: "Наслідки: Познань 968, школи, Європа. Не фото Вікіпедії."
        }
      }),
      text: {
        pl: [
          ["Skutki: Polska w gronie państw chrześcijańskich; władza księcia „od Boga”; duchowni (łacina, szkoły, chorzy); murowane kościoły. W ", em("968"), " — biskupstwo w ", em("Poznaniu"), " (", em("Jordan"), ")."],
          "Poddani długo jeszcze czcili starych bogów w ukryciu. Arcybiskupstwo w Gnieźnie (1000) — lekcja 29."
        ],
        ua: [
          ["Наслідки: Польща в колі християнських держав; влада князя «від Бога»; духівники (латина, школи, хворі); муровані церкви. У ", em("968"), " — єпископство в ", em("Познані"), " (", em("Йордан"), ")."],
          "Піддані довго ще шанували старих богів потай. Архієпископство в Гнєзні (1000) — урок 29."
        ]
      },
      task: {
        id: "h28-skutki",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co jest skutkiem chrztu z tej lekcji (nie zjazd 1000)?",
          ua: "Що є наслідком хрещення з цього уроку (не з’їзд 1000)?"
        },
        options: [
          { id: "a", label: { pl: "miejsce w Europie, umocnienie władzy, biskupstwo w Poznaniu (968, Jordan), kościoły i szkoły", ua: "місце в Європі, зміцнення влади, єпископство в Познані (968, Йордан), церкви і школи" } },
          { id: "b", label: { pl: "korona Bolesława w 1025 i drzwi gnieźnieńskie", ua: "корона Болеслава 1025 і гнєзненські двері" } },
          { id: "c", label: { pl: "tylko hołd z 1122", ua: "лише присяга 1122" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: okoliczności i skutki chrztu. 1000 i Wojciech = 29.",
          ua: "KN: обставини і наслідки хрещення. 1000 і Войцех = 29."
        },
        explanation: {
          pl: "Film: Jordan 968. Rotunda w Cieszynie zostaje ilustracją, nie datą KN.",
          ua: "Фільм: Йордан 968. Ротонда в Цешині лишається ілюстрацією, не датою KN."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Cedynia", ua: "Цедіня" },
      formula: "972",
      timelineYear: 972,
      visual: gh("238", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa zachodniej granicy: Cedynia nad Odrą, znak X, Hodon od Niemiec",
          ua: "Карта західного кордону: Цедіня над Одрою, знак X, Годон від Німеччини"
        },
        title: { pl: "Krzyżyk na mapie, nie rzeź", ua: "Хрестик на карті, не різанина" },
        prompt: {
          pl: "Szkolna mapa 16:9 zachodniej Polski, dzień. Rzeka Odra, czerwony X „Cedynia 972”, strzałka „Hodon / Marchia”. Podpis: „zwycięstwo, Pomorze”. BEZ bitwy wręcz, BEZ ciał, BEZ kopii ryciny. Styl Nowej Ery.",
          ua: "Карта Цедіні 972. Хрестик, не битва."
        }
      }),
      text: {
        pl: [
          ["", em("972"), " — bitwa pod ", em("Cedynią"), " nad Odrą. Margrabia ", em("Hodon"), " uderzył od zachodu (wyprawa możnych, nie rozkaz cesarza). Mieszko wygrał i utrwalił władzę na Pomorzu."],
          "Ta data stoi na osi obok 966. Cesarz wezwał potem strony do pokoju."
        ],
        ua: [
          ["", em("972"), " — битва під ", em("Цедінею"), " над Одрою. Маркграф ", em("Годон"), " вдарив із заходу (виправа можновладців, не наказ імператора). Мешко переміг і закріпив владу на Помор’ї."],
          "Ця дата стоїть на осі поряд із 966. Імператор потім закликав сторони до миру."
        ]
      },
      task: {
        id: "h28-972",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku była bitwa pod Cedynią? Wpisz tylko liczbę.",
          ua: "У якому році була битва під Цедінею? Введи лише число."
        },
        answer: 972,
        hint: {
          pl: "Dziewięć, siedem, dwa. Hodon, Odra, Pomorze.",
          ua: "Дев’ять, сім, два. Годон, Одра, Помор’я."
        },
        explanation: {
          pl: "972. Konflikt dotyczył pogranicza / Pomorza, nie Mekki.",
          ua: "972. Конфлікт стосувався пограниччя / Помор’я, не Мекки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dagome iudex", ua: "Dagome iudex" },
      formula: "opiekun: papież",
      visual: gh("239", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat dokumentu Dagome iudex: cztery punkty, rysunek karty, nie foto pergaminu",
          ua: "Схема документа Dagome iudex: чотири пункти, рисунок аркуша, не фото пергаменту"
        },
        title: { pl: "Rysunek karty, nie foto z gabloty", ua: "Рисунок аркуша, не фото з вітрини" },
        prompt: {
          pl: "Szkolny slajd 16:9. Rysunek otwartej karty (nie zdjęcie rękopisu). Cztery punkty PL: „najstarszy opis granic”; „Dagome = Mieszko”; „państwo pod opieką papieża”; „zachowało się streszczenie”. Dzień. Styl Nowej Ery.",
          ua: "Схема документа. Не фото пергаменту."
        }
      }),
      text: {
        pl: [
          ["", em("Dagome iudex"), " — najstarszy dokument o państwie (łacina). ", em("Dagome"), " to Mieszko: oddaje „państwo gnieźnieńskie” pod opiekę papieża i opisuje granice."],
          "Zachowało się tylko późniejsze streszczenie. Druga żona Mieszka to Oda (z Niemiec); Dobrawa była z Czech — to karta nauczycielki."
        ],
        ua: [
          ["", em("Dagome iudex"), " — найстарший документ про державу (латина). ", em("Dagome"), " — це Мешко: віддає «гнєзненську державу» під опіку папи і описує кордони."],
          "Збереглося лише пізніше резюме. Друга дружина Мешка — Ода (з Німеччини); Добрава була з Чехії — це картка вчительки."
        ]
      },
      task: {
        id: "h28-dagome",
        type: "true-false",
        level: "B",
        question: {
          pl: "W Dagome iudex Mieszko oddaje państwo pod opiekę papieża — prawda czy fałsz?",
          ua: "У Dagome iudex Мешко віддає державу під опіку папи — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: pojęcie Dagome iudex. Film: najstarszy opis granic.",
          ua: "KN: поняття Dagome iudex. Фільм: найстарший опис кордонів."
        },
        explanation: {
          pl: "Prawda. To nie Biblia pauperum z lekcji 26.",
          ua: "Правда. Це не Biblia pauperum з уроку 26."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "książę / dynastia Piastów — władca; ród od Siemowita do Mieszka i dalej", ua: "князь / династія П’ястів — володар; рід від Семовита до Мешка і далі" },
        { pl: "Mieszko I — pierwszy historyczny władca Polski (ok. 960–992)", ua: "Мешко I — перший історичний володар Польщі (бл. 960–992)" },
        { pl: "Dobrawa — księżniczka czeska, żona Mieszka, ślub 965", ua: "Добрава — чеська князівна, дружина Мешка, шлюб 965" },
        { pl: "chrzest 966 / baptysterium — przyjęcie chrześcijaństwa; miejsce chrztu (Poznań lub Ostrów Lednicki)", ua: "хрещення 966 / баптистерій — прийняття християнства; місце хрещення (Познань або Острів Ледницький)" },
        { pl: "biskupstwo / dyplomacja / pogaństwo — diecezja (Poznań 968, Jordan); sojusze; stara wiara", ua: "єпископство / дипломатія / поганство — дієцезія (Познань 968, Йордан); союзи; стара віра" },
        { pl: "Cedynia 972 — zwycięstwo nad Hodonem, utrwalenie Pomorza", ua: "Цедіня 972 — перемога над Годоном, закріплення Помор’я" },
        { pl: "Dagome iudex — dokument: Mieszko oddaje państwo pod opiekę papieża", ua: "Dagome iudex — документ: Мешко віддає державу під опіку папи" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Mieszka ochrzcił św. Wojciech w 1000. Dobrawa była z Mekki. Cedynia to 622. Dagome iudex to hołd lenny z 1122. Popiel to jedyne źródło o 966. Matejko malował w X wieku.”",
        ua: "«Мешка охрестив св. Войцех 1000 року. Добрава була з Мекки. Цедіня — 622. Dagome iudex — ленна присяга 1122. Попель — єдине джерело про 966. Матейко малював у X столітті.»"
      },
      text: {
        pl: [
          "966 i Jordan, nie Wojciech (29). Dobrawa = Czechy. Cedynia = 972. Dagome = papież. Popiel = legenda. Matejko = XIX w., nie nasz slajd."
        ],
        ua: [
          "966 і Йордан, не Войцех (29). Добрава = Чехія. Цедіня = 972. Dagome = папа. Попель = легенда. Матейко = XIX ст., не наш слайд."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: kim był Mieszko, dlaczego przyjął chrzest i co było w 972. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: ким був Мешко, чому прийняв хрещення і що було 972 року. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: pierwszy historyczny Piast; Dobrawa 965 i 966; Cedynia — Hodon."
        ],
        ua: [
          "Підказка: перший історичний П’яст; Добрава 965 і 966; Цедіня — Годон."
        ]
      },
      task: {
        id: "h28-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje Mieszka, chrzest i Cedynię?",
          ua: "Яке речення охоплює Мешка, хрещення і Цедіню?"
        },
        options: [
          { id: "a", label: { pl: "Mieszko — pierwszy historyczny Piast; 966 chrzest dzięki Dobrawie; 972 wygrał pod Cedynią z Hodonem", ua: "Мешко — перший історичний П’яст; 966 хрещення завдяки Добраві; 972 переміг під Цедінею Годона" } },
          { id: "b", label: { pl: "Mieszko to tylko kopista z lekcji 25", ua: "Мешко — лише переписувач з уроку 25" } },
          { id: "c", label: { pl: "Cedynia to krucjata Urbana II", ua: "Цедіня — круціата Урбана II" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe: władca, chrzest, 966 i 972.",
          ua: "KN базове: володар, хрещення, 966 і 972."
        },
        explanation: {
          pl: "Kopista = 25. Clermont = 21.",
          ua: "Переписувач = 25. Клермон = 21."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Źródło i wybór", ua: "Джерело і вибір" },
      task: {
        id: "h28-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest KN ponadpodstawowe i zgodne z kartą (żony, źródło, pogaństwo)?",
          ua: "Що є KN понад базове і згідне з карткою (дружини, джерело, поганство)?"
        },
        options: [
          { id: "a", label: { pl: "żony: Dobrawa z Czech i później Oda z Niemiec; Dagome to streszczenie źródła, nie oryginał z 966; chrzest dał sojusze, ale lud długo był pogański", ua: "дружини: Добрава з Чехії і пізніше Ода з Німеччини; Dagome — резюме джерела, не оригінал з 966; хрещення дало союзи, але люд довго був поганським" } },
          { id: "b", label: { pl: "zjazd gnieźnieński 1000 i korona 1025 to ta godzina", ua: "з’їзд у Гнєзні 1000 і корона 1025 — ця година" } },
          { id: "c", label: { pl: "wszystkie bitwy z Wikipedii (Wichman, 963) trzeba wykuć jako KN podstawowe", ua: "усі битви з Вікіпедії (Віхман, 963) треба вивчити як KN базове" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: Dagome jako źródło + po co chrzest, a nie pogaństwo. 1000 = 29.",
          ua: "KN: Dagome як джерело + навіщо хрещення, а не поганство. 1000 = 29."
        },
        explanation: {
          pl: "Świętosława (córka) zostaje w filmie. Kahoot i drugi film — nie w playerze.",
          ua: "Свентослава (донька) лишається у фільмі. Kahoot і другий фільм — не в плеєрі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h28-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "960, 965, 966, 972 — co pasuje?",
          ua: "960, 965, 966, 972 — що пасує?"
        },
        options: [
          { id: "a", label: { pl: "ok. 960 władza Mieszka; 965 Dobrawa; 966 chrzest; 972 Cedynia (Hodon)", ua: "бл. 960 влада Мешка; 965 Добрава; 966 хрещення; 972 Цедіня (Годон)" } },
          { id: "b", label: { pl: "966 to hidżra; 972 to Canossa", ua: "966 — хіджра; 972 — Каносса" } },
          { id: "c", label: { pl: "wszystkie te lata to tylko Biskupin", ua: "усі ці роки — лише Біскупін" } }
        ],
        answer: "a",
        hint: {
          pl: "Zadanie z karty + KN: 966 i 972 na osi.",
          ua: "Завдання з картки + KN: 966 і 972 на осі."
        },
        explanation: {
          pl: "Hidżra = 622 (18). Canossa = 1077 (20). Biskupin = 27.",
          ua: "Хіджра = 622 (18). Каносса = 1077 (20). Біскупін = 27."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Mieszko I — pierwszy historyczny Piast (ok. 960). Od Polan nazwa Polska. Rdzeń: Gniezno i Poznań.",
          ["Mieszko I", "Polan"],
          "Мешко I — перший історичний П’яст (бл. 960). Від полян назва Польща. Осередок: Гнєзно і Познань.",
          ["Мешко I", "полян"]
        ),
        mark(
          "W 966 przyjął chrzest dzięki małżeństwu z Dobrawą z Czech. Polska weszła do chrześcijańskiej Europy.",
          ["966", "Dobrawą"],
          "966 року прийняв хрещення завдяки шлюбу з Добравою з Чехії. Польща ввійшла до християнської Європи.",
          ["966", "Добравою"]
        ),
        mark(
          "Skutki: umocnienie władzy, biskupstwo w Poznaniu (968, Jordan), kościoły i szkoły. Lud długo jeszcze pogański.",
          ["Poznaniu", "Jordan"],
          "Наслідки: зміцнення влади, єпископство в Познані (968, Йордан), церкви і школи. Люд довго ще поганський.",
          ["Познані", "Йордан"]
        ),
        mark(
          "W 972 Mieszko wygrał pod Cedynią z Hodonem. Dagome iudex: państwo pod opieką papieża.",
          ["972", "Dagome iudex"],
          "972 року Мешко переміг під Цедінею Годона. Dagome iudex: держава під опікою папи.",
          ["972", "Dagome iudex"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Polska Bolesława Chrobrego — Wojciech, zjazd 1000 i korona, nie chrzest 966.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Польща Болеслава Хороброго — Войцех, з’їзд 1000 і корона, не хрещення 966.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "vKHCRtgf5pE",
        title: {
          pl: "Krótkie Lekcje: Mieszko I i początki Polski",
          ua: "Короткі уроки: Мешко I і початки Польщі"
        }
      }
    }
  ]
};
