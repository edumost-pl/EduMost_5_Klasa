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
      heading: { pl: "Cywilizacje Indii i Chin", ua: "Цивілізації Індії і Китаю" },
      formula: "Indus · Huang He",
      text: {
        pl: [
          "Daleko na wschód od Nilu i Eufratu też powstały cywilizacje przy wielkich rzekach.",
          "Dziś: dolina Indusu, Ariowie i kasty, hinduizm, starożytne Chiny, Wielki Mur, jedwabny szlak i terakotowa armia."
        ],
        ua: [
          "Далеко на схід від Нілу і Євфрату теж виникли цивілізації біля великих річок.",
          "Сьогодні: долина Інду, арії і касти, індуїзм, стародавній Китай, Великий мур, шовковий шлях і теракотова армія."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, gdzie powstała cywilizacja doliny Indusu", ua: "сказати, де виникла цивілізація долини Інду" },
        { pl: "wyjaśnić, kim byli Ariowie i czym są kasty", ua: "пояснити, ким були арії і що таке касти" },
        { pl: "krótko opisać hinduizm (bogowie, reinkarnacja)", ua: "коротко описати індуїзм (боги, реінкарнація)" },
        { pl: "wymienić rzeki Chin, Wielki Mur, jedwabny szlak i dokonania Chińczyków", ua: "назвати ріки Китаю, Великий мур, шовковий шлях і досягнення китайців" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Najstarsza cywilizacja Azji Południowej", ua: "Найдавніша цивілізація Південної Азії" },
      timelineId: "indus",
      formula: "III tys. p.n.e. · Indus",
      text: {
        pl: [
          ["W ", em("III tysiącleciu p.n.e."), " w dolinie rzeki ", em("Indus"), " powstała cywilizacja. Ludzie budowali ", em("kanały nawadniające"), ", potem coraz większe osady, wreszcie potężne miasta."],
          "Jak w Mezopotamii i Egipcie: woda na pola → plony → miasta."
        ],
        ua: [
          ["У ", em("III тисячолітті до н.е."), " в долині річки ", em("Інд"), " виникла цивілізація. Люди будували ", em("зрошувальні канали"), ", потім дедалі більші оселі, нарешті могутні міста."],
          "Як у Месопотамії і Єгипті: вода на поля → урожаї → міста."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: dolina Indusu", ua: "Карта: долина Інду" },
      visual: gh("037", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Indus, Pakistan, Indie, Morze Arabskie, Himalaje",
          ua: "Карта: Інд, Пакистан, Індія, Аравійське море, Гімалаї"
        },
        title: { pl: "Indus spływa z Himalajów do Morza Arabskiego", ua: "Інд тече з Гімалаїв до Аравійського моря" },
        prompt: {
          pl: "Szkolna mapa atlasowa południowej Azji dla klasy 5, jasne tło, czytelne polskie podpisy, bez spornych granic politycznych jako tematu lekcji. Pokaż Półwysep Indyjski, Himalaje na północy, rzekę Indus od gór do Morza Arabskiego (pogrubiona niebieska linia), Zatokę Bengalską na wschodzie. Etykiety: Indus, Himalaje, Morze Arabskie, Zatoka Bengalska, Indie, Pakistan (tylko jako orientacja na mapie, bez flag i herbów). Dolina Indusu zaznaczona ciepłym zielonym pasem. Róża wiatrów. W małej wstawce z lewej: rekonstrukcja miasta z suszonej cegły, płaskie dachy, wąskie ulice, targ ze zbożem, kanał na pierwszym planie, góry w tle — dzień, ludzie w jasnych tunikach, bez wojny. Styl podręcznika Nowej Ery.",
          ua: "Шкільна атласна карта Південної Азії для 5 класу, світле тло, читабельні польські підписи. Покажи Індійський півострів, Гімалаї на півночі, річку Інд від гір до Аравійського моря, Бенгальську затоку на сході. Підписи: Інд, Гімалаї, Аравійське море, Бенгальська затока, Індія, Пакистан (лише орієнтація). Долина Інду теплим зеленим пасом. Троянда вітрів. Мала вставка: реконструкція міста з висушеної цегли, плоскі дахи, вузькі вулиці, торг, канал, гори — день, без війни. Стиль підручника."
        }
      }),
      text: {
        pl: ["Dolina Indusu leży głównie tam, gdzie dziś Pakistan — nie nad Nilem i nie nad Huang He."],
        ua: ["Долина Інду лежить здебільшого там, де нині Пакистан — не над Нілом і не над Хуанхе."]
      },
      task: {
        id: "h05-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Gdzie w III tysiącleciu p.n.e. powstała cywilizacja z kanałami i miastami z tej lekcji?",
          ua: "Де в III тисячолітті до н.е. виникла цивілізація з каналами і містами з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "w dolinie Indusu", ua: "в долині Інду" } },
          { id: "b", label: { pl: "nad Wisłą, w Gnieźnie", ua: "над Віслою, у Гнєзно" } },
          { id: "c", label: { pl: "tylko w delcie Nilu, przy piramidach", ua: "лише в дельті Нілу, біля пірамід" } }
        ],
        answer: "a",
        hint: {
          pl: "Rzeka spływa z Himalajów do Morza Arabskiego.",
          ua: "Річка тече з Гімалаїв до Аравійського моря."
        },
        explanation: {
          pl: "Indus. Nil to Egipt. Wisła — Polska.",
          ua: "Інд. Ніл — Єгипет. Вісла — Польща."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mohendżo Daro", ua: "Мохенджо-Даро" },
      visual: gh("038", {
        kind: "image-placeholder",
        alt: {
          pl: "Ruiny ceglanych ulic i cytadela Mohendżo Daro",
          ua: "Руїни цегляних вулиць і цитадель Мохенджо-Даро"
        },
        title: { pl: "Uporządkowana struktura, przemyślana zabudowa", ua: "Упорядкована структура, продумана забудова" },
        prompt: {
          pl: "Szeroki dzienny widok stanowiska archeologicznego Mohendżo Daro dla klasy 5: siatka czerwonawo-brązowych ceglanych murów i fundamentów, prostokątne dziedzińce, uporządkowane ulice jak szachownica. W tle wzniesienie cytadeli z zaokrągloną budowlą. Zielona równina i jasne niebo. Polskie etykiety z żółtymi strzałkami jak w filmie Krótkich Lekcji: „uporządkowana struktura”, „przemyślana zabudowa”, „cytadela — twierdza i siedziba władcy”. Bez szkieletów, bez grozy, styl atlasu / zdjęcia edukacyjnego. Czytelny plan miasta z lotu ptaka lub z niewielkiego wzniesienia.",
          ua: "Широкий денний вид археологічної ділянки Мохенджо-Даро для 5 класу: сітка червонувато-коричневих цегляних мурів і фундаментів, прямокутні двори, вулиці як шахівниця. У тлі підвищення цитаделі. Зелена рівнина, ясне небо. Підписи: «упорядкована структура», «продумана забудова», «цитадель — фортеця і оселя володаря». Без скелетів і жаху. Читабельний план міста."
        }
      }),
      text: {
        pl: [
          "Miasta doliny Indusu miały prostą siatkę ulic i cytadelę — twierdzę i siedzibę władcy. To nie przypadkowa wioska."
        ],
        ua: [
          "Міста долини Інду мали просту сітку вулиць і цитадель — фортецю і оселю володаря. Це не випадкове село."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Rządy Ariów", ua: "Правління аріїв" },
      formula: "ok. 1500 p.n.e.",
      text: {
        pl: [
          ["Około 1500 p.n.e. ludność doliny Indusu została podbita przez ", em("Ariów"), "."],
          ["Najeźdźcy zapoczątkowali podział społeczeństwa na ", em("kasty"), " — zamknięte grupy ludzi."]
        ],
        ua: [
          ["Близько 1500 до н.е. населення долини Інду підкорили ", em("арії"), "."],
          ["Завойовники започаткували поділ суспільства на ", em("касти"), " — закриті групи людей."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Czym jest kasta?", ua: "Що таке каста?" },
      visual: gh("039", {
        kind: "image-placeholder",
        alt: {
          pl: "Infografika kasty: zawód, obyczaje, dziedziczenie",
          ua: "Інфографіка касти: професія, звичаї, успадкування"
        },
        title: { pl: "Zamknięte grupy społeczeństwa", ua: "Закриті групи суспільства" },
        prompt: {
          pl: "Spokojna infografika szkolna dla klasy 5, jasne tło, BEZ scen podboju, bez broni i bez krwi. Cztery równe kadry z polskimi podpisami. 1) Rybaczka w sari przy koszach z rybami — „ten sam zawód”. 2) Szeregi suszącego się prania na słońcu — „to samo miejsce pracy / terytorium”. 3) Kapłan w białych szatach przy ceglanym palenisku ofiarnym (mały kontrolowany ogień, bez zwierząt) — „odrębne obyczaje”. 4) Prosta ikona rodziny z strzałką w dół do kolejnego pokolenia — „przynależność dziedziczna; zakaz małżeństw między kastami”. Na górze definicja: „kasta = zamknięta grupa ludzi”. Styl podręcznika, godny, bez karykatur.",
          ua: "Спокійна шкільна інфографіка для 5 класу, світле тло, БЕЗ сцен завоювання, без зброї і крові. Чотири кадри. 1) Рибалка в сарі біля кошиків — «та сама професія». 2) Ряди білизни на сонці — «те саме місце праці / територія». 3) Священик у білому біля цегляного вогнища (малий контрольований вогонь, без тварин) — «окремі звичаї». 4) Іконка родини зі стрілкою вниз — «належність спадкова; заборона шлюбів між кастами». Вгорі: «каста = закрита група людей». Стиль підручника, без карикатур."
        }
      }),
      text: {
        pl: [
          "Kasta: własne obyczaje, ten sam zawód, to samo terytorium. Przynależność była dziedziczna. Małżeństw między kastami nie zawierano."
        ],
        ua: [
          "Каста: власні звичаї, та сама професія, та сама територія. Належність була спадкова. Шлюбів між кастами не укладали."
        ]
      },
      task: {
        id: "h05-kasty",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co oznacza, że kasta jest zamknięta i dziedziczna?",
          ua: "Що означає, що каста закрита і спадкова?"
        },
        options: [
          { id: "a", label: { pl: "każdy co roku wybiera sobie nową kastę jak klasę w szkole", ua: "кожен щороку обирає собі нову касту, як клас у школі" } },
          { id: "b", label: { pl: "człowiek rodzi się w grupie o stałym zawodzie i obyczajach; nie przechodzi dowolnie do innej", ua: "людина народжується в групі зі сталим фахом і звичаями; не переходить довільно до іншої" } },
          { id: "c", label: { pl: "kasta to nazwa chińskiego cesarza", ua: "каста — назва китайського імператора" } }
        ],
        answer: "b",
        hint: {
          pl: "Dziedziczna = z rodziców na dzieci. Zamknięta = trudno wyjść.",
          ua: "Спадкова = від батьків до дітей. Закрита = важко вийти."
        },
        explanation: {
          pl: "To podział społeczny Indii po przyjściu Ariów — nie wybory i nie cesarz Chin.",
          ua: "Це суспільний поділ Індії після приходу аріїв — не вибори і не імператор Китаю."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hinduizm", ua: "Індуїзм" },
      visual: gh("040", {
        kind: "image-placeholder",
        alt: {
          pl: "Brahma, Wisznu i Śiwa — trzy bóstwa hinduizmu",
          ua: "Брахма, Вішну і Шива — три божества індуїзму"
        },
        title: { pl: "Politeistyczny system wierzeń", ua: "Політеїстична система вірувань" },
        prompt: {
          pl: "Infografika dla klasy 5, jasne tło, trzy równe muzealne kadry bóstw hinduizmu, spokojne, bez grozy i bez karykatur. LEWY: złoty posąg Brahmy o kilku twarzach i ramionach — podpis „Brahma — stwórca świata”. ŚRODEK: kamienny relief siedzącego Wisznu — „Wisznu — utrzymujący świat przy życiu”. PRAWY: jasnoniebieska figura Śiwy w pozie lotosu na cokole — „Śiwa — bóg śmierci i zagłady” (cykl świata, nie horror). Nad trójką polski nagłówek: „hinduizm — politeizm”. Krótka etykieta: „Ariowie połączyli własne bóstwa z miejscowymi”. Oświetlenie jak w muzeum, czytelne polskie podpisy.",
          ua: "Інфографіка для 5 класу, три рівні музейні кадри божеств індуїзму, спокійно, без жаху. ЛІВОРУЧ: золота статуя Брахми з кількома обличчями — «Брахма — творець світу». ЦЕНТР: кам’яний рельєф Вішну — «Вішну — той, хто підтримує світ». ПРАВОРУЧ: блакитна постать Шиви в позі лотоса — «Шива — бог смерті і знищення» (цикл світу, не жах). Над трійкою: «індуїзм — політеїзм». Коротка етикетка: «арії поєднали власні божества з місцевими». Музейне світло."
        }
      }),
      text: {
        pl: [
          ["Ariowie przejęli miejscowe bóstwa i połączyli je z własnymi. Powstał politeistyczny system — ", em("hinduizm"), "."],
          ["Brahma stwarza świat, Wisznu go utrzymuje, Śiwa zamyka cykl. To nie jeden Bóg Izraela."]
        ],
        ua: [
          ["Арії перейняли місцеві божества і поєднали їх із власними. Виникла політеїстична система — ", em("індуїзм"), "."],
          ["Брахма творить світ, Вішну його підтримує, Шива замикає цикл. Це не один Бог Ізраїлю."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Reinkarnacja", ua: "Реінкарнація" },
      visual: gh("041", {
        kind: "image-placeholder",
        alt: {
          pl: "Medytujący człowiek i ścieżki kolejnych wcieleń",
          ua: "Людина в медитації і шляхи наступних втілень"
        },
        title: { pl: "Dusza przechodzi do innego ciała", ua: "Душа переходить в інше тіло" },
        prompt: {
          pl: "Kolorowa, spokojna ilustracja edukacyjna reinkarnacji dla klasy 5, bez grozy i bez karcianych „horrorów”. Na dole brodaty mężczyzna w pomarańczowo-czerwonych szatach siedzi w lotosie. Od niego rozchodzą się cienkie białe linie do kilku małych scenek życia: para w strojach dworskich, wojownik z koroną (bez walki), skryba przy stoliku, kobieta w zielonym sari przy pracy. Podpis: „zobrazowanie kolejnych inkarnacji”. Polskie etykiety: „uczciwy i pobożny → wyższa kasta”; „zły → niższa kasta lub zwierzę” (zwierzę pokazać jako spokojną sarenkę, nie jako karę). Jasne tło, styl podręcznika.",
          ua: "Кольорова спокійна ілюстрація реінкарнації для 5 класу, без жаху. Внизу бородатий чоловік у помаранчево-червоному сидить у лотосі. Від нього тонкі білі лінії до малих сценок життя: пара в шатах двору, воїн із короною (без бою), писар, жінка в зеленому сарі. Підпис: «зображення наступних втілень». Етикетки: «чесний і побожний → вища каста»; «поганий → нижча каста або тварина» (тварина — спокійна сарна). Світле тло."
        }
      }),
      text: {
        pl: [
          [em("Reinkarnacja"), ": po śmierci dusza przechodzi do innego ciała. W tej wierze uczciwe życie miało prowadzić do wyższej kasty, złe — do niższej albo do zwierzęcia."]
        ],
        ua: [
          [em("Реінкарнація"), ": після смерті душа переходить в інше тіло. У цій вірі чесне життя мало вести до вищої касти, погане — до нижчої або до тварини."]
        ]
      },
      task: {
        id: "h05-reinkarnacja",
        type: "true-false",
        level: "A",
        question: {
          pl: "W hinduizmie dusza po śmierci może wrócić w nowym ciele (reinkarnacja) — prawda czy fałsz?",
          ua: "В індуїзмі душа після смерті може повернутися в новому тілі (реінкарнація) — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To nie mumia Egiptu i nie jedno życie.",
          ua: "Це не мумія Єгипту і не одне життя."
        },
        explanation: {
          pl: "Reinkarnacja należy do hinduizmu. Egipt chronił jedno ciało dla jednej duszy.",
          ua: "Реінкарнація належить до індуїзму. Єгипет беріг одне тіло для однієї душі."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dokonania Indii: matematyka", ua: "Досягнення Індії: математика" },
      text: {
        pl: [
          ["W Indiach rozwinęła się matematyka. Opracowano ", em("system dziesiętny"), " — ten, którym liczymy na co dzień (0–9)."]
        ],
        ua: [
          ["В Індії розвинулася математика. Опрацювали ", em("десяткову систему"), " — ту, якою лічимо щодня (0–9)."]
        ]
      }
    },
    {
      type: "observe",
      heading: { pl: "Warto wiedzieć: Budda", ua: "Варто знати: Будда" },
      text: {
        pl: [
          ["W VI–V w. p.n.e. nauczał Siddhartha Gautama — ", em("Budda"), " („przebudzony”). Uczył drogi środka i dobroci. Z jego nauk powstał buddyzm. To osobna droga obok hinduizmu."]
        ],
        ua: [
          ["У VI–V ст. до н.е. навчав Сіддгартга Ґаутама — ", em("Будда"), " («пробуджений»). Вчив середнього шляху і доброти. З його наук виник буддизм. Це окремий шлях поруч з індуїзмом."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Starożytne Chiny", ua: "Стародавній Китай" },
      visual: gh("042", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Chin: Huang He i Jangcy, tarasy ryżowe",
          ua: "Карта Китаю: Хуанхе і Янцзи, рисові тераси"
        },
        title: { pl: "Dwie rzeki, klimat, kanały, pożywienie", ua: "Дві ріки, клімат, канали, пожива" },
        prompt: {
          pl: "Infografika „starożytne Chiny” dla klasy 5. LEWY GÓRA: uproszczona mapa Azji Wschodniej, terytorium starożytnych Chin ciepłym różem, dwie pogrubione rzeki z polskimi podpisami Huang He (Żółta) i Jangcy (Błękitna), wybrzeże Pacyfiku. PRAWY DÓŁ: zdjęcie tarasów ryżowych na zboczu wzgórza o zachodzie słońca, woda w tarasach odbija złote niebo. ŚRODEK DÓŁ: zbliżenie dłoni z ziarnami białego ryżu nad drewnianą misą. Polskie etykiety: „III tysiąclecie p.n.e.”; „sprzyjający klimat”; „kanały nawadniające” → strzałka „wystarczająca ilość pożywienia”. Bez współczesnych granic spornych, styl atlasu, dzień / złoty zmierzch, bez wojny.",
          ua: "Інфографіка «стародавній Китай» для 5 класу. ВГОРІ ЛІВОРУЧ: спрощена карта Східної Азії, територія стародавнього Китаю теплим рожевим, дві ріки Хуанхе (Жовта) і Янцзи (Блакитна). ВНИЗУ ПРАВОРУЧ: рисові тераси на схилі на заході сонця. ВНИЗУ В ЦЕНТРІ: долоні з білим рисом над дерев’яною мискою. Підписи: «III тисячоліття до н.е.»; «сприятливий клімат»; «зрошувальні канали» → «достатньо поживи». Без війни, стиль атласу."
        }
      }),
      text: {
        pl: [
          ["W ", em("III tysiącleciu p.n.e."), " nad rzekami ", em("Huang He"), " i ", em("Jangcy"), " narodziła się cywilizacja chińska."],
          "Sprzyjający klimat + kanały nawadniające → wystarczająco dużo pożywienia."
        ],
        ua: [
          ["У ", em("III тисячолітті до н.е."), " над ріками ", em("Хуанхе"), " і ", em("Янцзи"), " народилася китайська цивілізація."],
          "Сприятливий клімат + зрошувальні канали → достатньо поживи."
        ]
      },
      task: {
        id: "h05-chiny-rzeki",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Nad którymi rzekami powstała cywilizacja chińska?",
          ua: "Над якими ріками виникла китайська цивілізація?"
        },
        options: [
          { id: "a", label: { pl: "Huang He i Jangcy", ua: "Хуанхе і Янцзи" } },
          { id: "b", label: { pl: "Indus i Ganges", ua: "Інд і Ганг" } },
          { id: "c", label: { pl: "Nil i Eufrat", ua: "Ніл і Євфрат" } }
        ],
        answer: "a",
        hint: {
          pl: "Żółta i Błękitna — wschodnia Azja.",
          ua: "Жовта і Блакитна — Східна Азія."
        },
        explanation: {
          pl: "Huang He i Jangcy. Indus/Ganges to Indie. Nil i Eufrat — wcześniejsze lekcje.",
          ua: "Хуанхе і Янцзи. Інд/Ганг — Індія. Ніл і Євфрат — попередні уроки."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Od królestw do cesarza", ua: "Від царств до імператора" },
      formula: "III w. p.n.e.",
      text: {
        pl: [
          "Najpierw wiele rywalizujących królestw. W III wieku p.n.e. ziemie chińskie zjednoczono pod rządami cesarza.",
          "Z północy napadali koczownicy. Dlatego podjęto decyzję o budowie fortyfikacji — zarodka Wielkiego Muru."
        ],
        ua: [
          "Спочатку багато царств, що суперничали. У III столітті до н.е. китайські землі об’єднали під владою імператора.",
          "З півночі нападали кочівники. Тому вирішили будувати укріплення — зародок Великого муру."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Wielki Mur Chiński", ua: "Великий Китайський мур" },
      visual: gh("043", {
        kind: "image-placeholder",
        alt: {
          pl: "Wielki Mur wijący się po zielonych grzbietach gór",
          ua: "Великий мур в’ється зеленими хребтами гір"
        },
        title: { pl: "Jedna z największych budowli na Ziemi", ua: "Одна з найбільших будов на Землі" },
        prompt: {
          pl: "Fotograficzna, dzienna ilustracja Wielkiego Muru Chińskiego dla klasy 5: kamienny mur z prostokątnymi basztami wije się stromą, zieloną granią pod błękitnym niebem. Ludzie mali, dla skali, idą po drodze na koronie muru — bez walki. Po lewej ciemne tło tablicy z polskimi punktami: „początek budowy: VI w. p.n.e.”; „rozbudowywany do XVII w. n.e.”; „w XV w. obudowano cegłą i kamieniem, baszty, droga szerokości 5 m”; „ponad 2400 km”; logo UNESCO. Styl podręcznika, ostry, czytelny, bez mgły-horroru.",
          ua: "Фотографічна денна ілюстрація Великого Китайського муру для 5 класу: кам’яний мур із прямокутними вежами в’ється стрімким зеленим хребтом під блакитним небом. Малі фігурки людей на короні муру — без бою. Ліворуч пункти: «початок будови: VI ст. до н.е.»; «розбудовували до XVII ст. н.е.»; «у XV ст. обклали цеглою і каменем, вежі, дорога 5 м»; «понад 2400 км»; логотип ЮНЕСКО. Стиль підручника."
        }
      }),
      text: {
        pl: [
          ["Wielki Mur: początek w ", em("VI w. p.n.e."), ", rozbudowa aż do XVII w. n.e. Obecny wygląd (cegła, kamień, baszty, droga 5 m) — głównie XV wiek. Ponad 2400 km. Lista UNESCO."]
        ],
        ua: [
          ["Великий мур: початок у ", em("VI ст. до н.е."), ", розбудова до XVII ст. н.е. Нинішній вигляд (цегла, камінь, вежі, дорога 5 м) — здебільшого XV століття. Понад 2400 км. Список ЮНЕСКО."]
        ]
      },
      task: {
        id: "h05-mur",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Główny cel Wielkiego Muru to:",
          ua: "Головна мета Великого муру:"
        },
        options: [
          { id: "a", label: { pl: "obrona cesarstwa od koczowników z północy", ua: "оборона імперії від кочівників з півночі" } },
          { id: "b", label: { pl: "tama na Nilu koło piramid", ua: "дамба на Нілі біля пірамід" } },
          { id: "c", label: { pl: "mur miasta Uruk nad Eufratem", ua: "мур міста Урук над Євфратом" } }
        ],
        answer: "a",
        hint: {
          pl: "Północ Chin, nie Afryka i nie Sumer.",
          ua: "Північ Китаю, не Африка і не Шумер."
        },
        explanation: {
          pl: "Mur = obrona od stepu. Nil i Uruk to inne lekcje.",
          ua: "Мур = оборона від степу. Ніл і Урук — інші уроки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dokonania Chińczyków", ua: "Досягнення китайців" },
      visual: gh("044", {
        kind: "image-placeholder",
        alt: {
          pl: "Papier, porcelana, jedwab, druk, kompas, proch",
          ua: "Папір, порцеляна, шовк, друк, компас, порох"
        },
        title: { pl: "Kalendarz, papier, porcelana, jedwab, druk…", ua: "Календар, папір, порцеляна, шовк, друк…" },
        prompt: {
          pl: "Infografika „dokonania Chińczyków” dla klasy 5, jasne tło, siedem czytelnych ikon z polskimi podpisami, bez scen bitwy. 1 kalendarz (tarcza z cyklami). 2 arkusz papieru i pędzel. 3 niebiesko-biały wazon porcelanowy (kwiaty, bez smoków-horroru). 4 igła magnetyczna / figurka z tarczą kompasu. 5 proch — mała rakietka na ramie jako wynalazek, NIE eksplozja i NIE pole bitwy. 6 jedwab: kobiety w hanfu naciągają białą tkaninę + rolki kolorowych tkanin. 7 druk: zbliżenie klocka z chińskimi znakami. Duże etykiety: kalendarz, papier, porcelana, igła magnetyczna, proch strzelniczy, jedwab, druk. Styl muzealny, dużo powietrza.",
          ua: "Інфографіка «досягнення китайців» для 5 класу, сім ікон, без битви. 1 календар. 2 папір і пензель. 3 синьо-біла порцелянова ваза. 4 магнітна голка / компас. 5 порох — мала ракетка як винахід, НЕ вибух і НЕ поле бою. 6 шовк: жінки натягують тканину. 7 друк: кліше з ієрогліфами. Підписи: календар, папір, порцеляна, магнітна голка, порох, шовк, друк. Музейний стиль."
        }
      }),
      text: {
        pl: [
          "Chińczycy stworzyli własne pismo i kalendarz. Do dokonań należą też: papier, porcelana, proch, jedwab, metody druku i receptury lecznicze używane do dziś."
        ],
        ua: [
          "Китайці створили власне письмо і календар. До досягнень належать також: папір, порцеляна, порох, шовк, методи друку і лікувальні рецепти, якими користуються досі."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Jedwabny szlak", ua: "Шовковий шлях" },
      visual: gh("045", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa jedwabnego szlaku od Chin do Morza Śródziemnego",
          ua: "Карта шовкового шляху від Китаю до Середземного моря"
        },
        title: { pl: "Od Chang’an po Morze Śródziemne", ua: "Від Чан’аня до Середземного моря" },
        prompt: {
          pl: "Szkolna mapa fizyczna Eurazji dla klasy 5 zatytułowana „Jedwabny szlak”. Od wschodnich Chin po Morze Śródziemne i północną Afrykę. Żółte grube linie lądowych i morskich dróg handlu. Miasta: Chang’an (Xi’an), Nankin, Pekin, przez pustynię Takla Makan i Pamir do Bagdadu, Damaszku, Petry, Kairu, Antiochii, Konstantynopola, Aten. Himalaje, Wyżyna Tybetańska, Gobi, Indus podpisane drobno. Legenda: szlak lądowy, szlak morski, góry, pustynia. Bez współczesnych flag, jasny atlas, czytelne polskie nazwy. Żadnych scen rozboju.",
          ua: "Шкільна фізична карта Євразії для 5 класу «Шовковий шлях». Від східного Китаю до Середземного моря. Жовті товсті лінії сухопутних і морських шляхів. Міста: Чан’ань (Сіань), Нанкін, Пекін, через Такла-Макан і Памір до Багдада, Дамаска, Петри, Каїра, Антіохії, Константинополя, Афін. Гімалаї, Тибет, Гобі, Інд. Легенда: суходіл, море, гори, пустеля. Без сучасних прапорів, світлий атлас. Без розбою."
        }
      }),
      text: {
        pl: [
          [em("Jedwabny szlak"), " — sieć dróg, którą z Chin na zachód wędrowały jedwab, porcelana i pomysły. Kupcy łączą cywilizacje mocniej niż mury."]
        ],
        ua: [
          [em("Шовковий шлях"), " — мережа доріг, якою з Китаю на захід ішли шовк, порцеляна і ідеї. Купці єднають цивілізації сильніше, ніж мури."]
        ]
      },
      task: {
        id: "h05-szlak",
        type: "true-false",
        level: "B",
        question: {
          pl: "Jedwabny szlak to sieć dróg handlowych łączących Chiny z Bliskim Wschodem i Morzem Śródziemnym — prawda czy fałsz?",
          ua: "Шовковий шлях — мережа торгових доріг, що з’єднувала Китай із Близьким Сходом і Середземним морем — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Jedwab szedł z Chin na zachód, nie z Gniezna do Memfis.",
          ua: "Шовк ішов з Китаю на захід, не з Гнєзно до Мемфіса."
        },
        explanation: {
          pl: "Prawda. To handel i kontakt kultur, nie jedna ulica w jednym mieście.",
          ua: "Правда. Це торгівля і контакт культур, не одна вулиця в одному місті."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Terakotowa armia", ua: "Теракотова армія" },
      visual: gh("046", {
        kind: "image-placeholder",
        alt: {
          pl: "Rzędy glinianych żołnierzy w wykopalisku koło Xi’an",
          ua: "Ряди глиняних воїнів на розкопках біля Сіаня"
        },
        title: { pl: "Gliniana straż cesarza", ua: "Глиняна варта імператора" },
        prompt: {
          pl: "Realistyczne zdjęcie edukacyjne terakotowej armii w Xi’an dla klasy 5: rzędy naturalnej wielkości glinianych żołnierzy w ziemnym wykopie, zróżnicowane twarze i zbroje, miękkie muzealne światło. Żołnierze stoją spokojnie w szeregach — to grób, nie scena bitwy; bez broni skierowanej w widza, bez krwi. W prawym górnym rogu mała mapka Chin z czerwoną kropką „Xi’an”. Polski podpis: „terakotowa armia — gliniani strażnicy grobowca cesarza”. Styl muzealny, szacunek do stanowiska archeologicznego.",
          ua: "Реалістичне освітнє фото теракотової армії в Сіані для 5 класу: ряди глиняних воїнів у земляному розкопі, різні обличчя і обладунки, м’яке музейне світло. Воїни стоять спокійно — це гробниця, не битва; без крові. Праворуч мала мапка Китаю з точкою «Сіань». Підпис: «теракотова армія — глиняні охоронці гробниці імператора». Музейний стиль."
        }
      }),
      text: {
        pl: [
          "Przy grobowcu cesarza ustawiono tysiące glinianych żołnierzy naturalnej wielkości. Każda twarz jest inna. To źródło o armii i wierzeniach Chin — nie zabawka."
        ],
        ua: [
          "Біля гробниці імператора поставили тисячі глиняних воїнів натуральної величини. Кожне обличчя інше. Це джерело про військо і вірування Китаю — не іграшка."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "dolina Indusu — cywilizacja III tys. p.n.e. z kanałami i miastami", ua: "долина Інду — цивілізація III тис. до н.е. з каналами і містами" },
        { pl: "kasta — zamknięta, dziedziczna grupa (zawód, obyczaje)", ua: "каста — закрита, спадкова група (фах, звичаї)" },
        { pl: "hinduizm — politeizm Indii; reinkarnacja", ua: "індуїзм — політеїзм Індії; реінкарнація" },
        { pl: "Huang He, Jangcy — rzeki cywilizacji chińskiej", ua: "Хуанхе, Янцзи — ріки китайської цивілізації" },
        { pl: "jedwabny szlak / Wielki Mur / terakota — handel, obrona, grób cesarza", ua: "шовковий шлях / Великий мур / теракота — торгівля, оборона, гріб імператора" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Oddziel Indie od Chin: rzeka, społeczeństwo, władca."],
        ua: ["Відділи Індію від Китаю: річка, суспільство, володар."]
      },
      task: {
        id: "h05-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który zestaw jest poprawny?",
          ua: "Який набір правильний?"
        },
        options: [
          { id: "a", label: { pl: "Indie: Indus, kasty, hinduizm; Chiny: Huang He, cesarz, Wielki Mur", ua: "Індія: Інд, касти, індуїзм; Китай: Хуанхе, імператор, Великий мур" } },
          { id: "b", label: { pl: "Indie: piramidy Cheopsa; Chiny: Kodeks Hammurabiego", ua: "Індія: піраміди Хеопса; Китай: Кодекс Хаммурапі" } },
          { id: "c", label: { pl: "obie cywilizacje czciły tylko Jahwe", ua: "обидві цивілізації шанували лише Ягве" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie mieszaj Nilu, Babilonu i Izraela z tą lekcją.",
          ua: "Не змішуй Ніл, Вавилон і Ізраїль із цим уроком."
        },
        explanation: {
          pl: "Dwie osobne cywilizacje — nie jedna „Azja”.",
          ua: "Дві окремі цивілізації — не одна «Азія»."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Wielki Mur stanął nad Gangesem, a Ariowie zbudowali piramidy w Gizie.”",
        ua: "«Великий мур став над Гангом, а арії збудували піраміди в Гізі.»"
      },
      text: {
        pl: [
          "Wielki Mur to Chiny, obrona od północy. Ganges jest rzeką Indii.",
          "Piramidy w Gizie budowali Egipcjanie, nie Ariowie."
        ],
        ua: [
          "Великий мур — Китай, оборона від півночі. Ганг — ріка Індії.",
          "Піраміди в Гізі будували єгиптяни, не арії."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wymień trzy dokonania Chińczyków i powiedz, po co powstał Wielki Mur.",
        ua: "Назви три досягнення китайців і скажи, навіщо виник Великий мур."
      },
      text: {
        pl: [
          "Podpowiedź: papier, jedwab, porcelana, proch, druk… Mur — koczownicy z północy.",
          "Powiedz 3–4 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: папір, шовк, порцеляна, порох, друк… Мур — кочівники з півночі.",
          "Скажи 3–4 речення. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h05-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje dokonania Chin z tej lekcji?",
          ua: "Яке речення найкраще передає досягнення Китаю з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Chińczycy zbudowali piramidy Cheopsa i spisali Kodeks Hammurabiego", ua: "Китайці збудували піраміди Хеопса і записали Кодекс Хаммурапі" } },
          { id: "b", label: { pl: "Własne pismo i kalendarz; papier, porcelana, proch, jedwab, druk; Mur od koczowników", ua: "Власне письмо і календар; папір, порцеляна, порох, шовк, друк; мур від кочівників" } },
          { id: "c", label: { pl: "Chińczycy czcili tylko Jahwe i mieszkali w Kanaanie", ua: "Китайці шанували лише Ягве і жили в Ханаані" } }
        ],
        answer: "b",
        hint: {
          pl: "Nie mylić z Egiptem, Babilonem i Izraelem.",
          ua: "Не плутати з Єгиптом, Вавилоном і Ізраїлем."
        },
        explanation: {
          pl: "To kanon filmu i podręcznika. Piramidy i Jahwe — inne lekcje.",
          ua: "Це канон фільму і підручника. Піраміди і Ягве — інші уроки."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wpisz chińską nazwę Żółtej Rzeki (tak jak w lekcji).",
        ua: "Введи китайську назву Жовтої ріки (як у уроці)."
      },
      task: {
        id: "h05-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Żółta Rzeka w Chinach to…",
          ua: "Жовта ріка в Китаї — це…"
        },
        answer: ["huang he", "хуанхе", "huang-he", "żółta rzeka", "жолта ріка"],
        hint: {
          pl: "Dwa człony: Huang He.",
          ua: "Два члени: Хуанхе."
        },
        explanation: {
          pl: "Huang He (Żółta Rzeka). Druga wielka rzeka to Jangcy.",
          ua: "Хуанхе (Жовта ріка). Друга велика ріка — Янцзи."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h05-check-hinduizm",
        type: "true-false",
        level: "A",
        question: {
          pl: "Hinduizm to religia Indii z wieloma bogami — prawda czy fałsz?",
          ua: "Індуїзм — релігія Індії з багатьма богами — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Politeizm Indii, nie monoteizm Izraela.",
          ua: "Політеїзм Індії, не монотеїзм Ізраїлю."
        },
        explanation: {
          pl: "Hinduizm. Monoteizm był w lekcji o Izraelu.",
          ua: "Індуїзм. Монотеїзм був у уроці про Ізраїль."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h05-check-jedwab",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywa się cenna tkanina, którą wytwarzano w Chinach?",
          ua: "Як називається цінна тканина, яку виробляли в Китаї?"
        },
        answer: ["jedwab", "шовк", "silk"],
        hint: {
          pl: "Jedwabniki na morwie. Szlak nosi tę nazwę.",
          ua: "Шовкопряди на шовковиці. Шлях носить цю назву."
        },
        explanation: {
          pl: "Jedwab.",
          ua: "Шовк."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Cywilizacja doliny Indusu powstała w III tysiącleciu p.n.e. nad rzeką Indus. Ludność budowała kanały nawadniające, zakładała osady, a z czasem potężne miasta.",
          ["III tysiącleciu p.n.e.", "Indus", "kanały nawadniające"],
          "Цивілізація долини Інду виникла в III тисячолітті до н.е. над річкою Інд. Населення будувало зрошувальні канали, закладало оселі, а згодом могутні міста.",
          ["III тисячолітті до н.е.", "Інд", "зрошувальні канали"]
        ),
        mark(
          "W II tysiącleciu p.n.e. mieszkańców doliny Indusu podbili Ariowie. Zapoczątkowali podział społeczeństwa na kasty — grupy różne obyczajami i zawodem.",
          ["II tysiącleciu p.n.e.", "Ariowie", "kasty"],
          "У II тисячолітті до н.е. мешканців долини Інду підкорили арії. Вони започаткували поділ суспільства на касти — групи різні звичаями і фахом.",
          ["II тисячолітті до н.е.", "арії", "касти"]
        ),
        mark(
          "W III tysiącleciu p.n.e. nad rzekami Huang He i Jangcy narodziła się cywilizacja chińska. Od III wieku p.n.e. Chiny były zjednoczonym cesarstwem.",
          ["Huang He", "Jangcy", "III wieku p.n.e.", "cesarstwem"],
          "У III тисячолітті до н.е. над ріками Хуанхе і Янцзи народилася китайська цивілізація. Від III століття до н.е. Китай був об’єднаною імперією.",
          ["Хуанхе", "Янцзи", "III століття до н.е.", "імперією"]
        ),
        mark(
          "Chińczycy stworzyli własne pismo i kalendarz. Do ich dokonań należą papier, porcelana, proch strzelniczy i jedwab, a także metody druku i receptury lecznicze.",
          ["pismo", "papier", "porcelana", "proch strzelniczy", "jedwab"],
          "Китайці створили власне письмо і календар. До їхніх досягнень належать папір, порцеляна, порох і шовк, а також методи друку і лікувальні рецепти.",
          ["письмо", "папір", "порцеляна", "порох", "шовк"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następny temat: pismo — od obrazka do alfabetu. Chińskie znaki zostawiamy z boku; wracamy do Egiptu, Sumeru i Fenicjan.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: письмо — від малюнка до абетки. Китайські знаки лишаємо осторонь; повертаємось до Єгипту, Шумеру і фінікійців.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "0J7U824c0Bk",
        title: {
          pl: "Krótkie Lekcje: Cywilizacje Indii i Chin",
          ua: "Короткі уроки: Цивілізації Індії і Китаю"
        }
      }
    }
  ]
};
