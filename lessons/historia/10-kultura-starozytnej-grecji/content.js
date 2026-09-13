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
      heading: { pl: "Kultura starożytnej Grecji", ua: "Культура стародавньої Греції" },
      timelineYear: 776,
      formula: "776 p.n.e.",
      text: {
        pl: [
          "Grecy mieszkali w osobnych polis, ale łączył ich język, bogowie, obyczaje — i kultura.",
          "Dziś spokojnie, jak przy opowieści: malarstwo na wazach, rzeźba, narodziny teatru, filozofowie i igrzyska w Olimpii."
        ],
        ua: [
          "Греки жили в окремих полісах, але їх єднала мова, боги, звичаї — і культура.",
          "Сьогодні спокійно, як при оповіді: малярство на вазах, скульптура, народження театру, філософи і ігри в Олімпії."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać dziedziny sztuki: malarstwo wazowe i rzeźbę (Fidiasz, Myron)", ua: "вказати галузі мистецтва: вазовий живопис і скульптуру (Фідій, Мірон)" },
        { pl: "powiedzieć, skąd wziął się teatr grecki i czym różni się tragedia od komedii", ua: "сказати, звідки взявся грецький театр і чим трагедія відрізняється від комедії" },
        { pl: "wyjaśnić, czym jest filozofia, i wymienić Sokratesa, Platona i Arystotelesa", ua: "пояснити, що таке філософія, і назвати Сократа, Платона і Аристотеля" },
        { pl: "opisać igrzyska olimpijskie, pięciobój i datę 776 p.n.e.", ua: "описати Олімпійські ігри, п’ятиборство і дату 776 до н.е." }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Wspólna kultura polis", ua: "Спільна культура полісів" },
      text: {
        pl: [
          "Starożytni Grecy nie tworzyli jednego państwa. Łączyły ich język, wierzenia, obyczaje, kultura i sztuka.",
          "Dlatego mówimy o kulturze starożytnych Greków. Stała się ona fundamentem kultury europejskiej i światowej."
        ],
        ua: [
          "Стародавні греки не творили однієї держави. Їх єднали мова, вірування, звичаї, культура і мистецтво.",
          "Тому говоримо про культуру стародавніх греків. Вона стала підґрунтям європейської і світової культури."
        ]
      },
      task: {
        id: "h10-check1",
        type: "true-false",
        level: "A",
        question: {
          pl: "Starożytni Grecy tworzyli jedno wielkie państwo jak Egipt faraonów — prawda czy fałsz?",
          ua: "Стародавні греки творили одну велику державу, як Єгипет фараонів — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Były osobne polis. Łączyła je kultura, nie jeden król.",
          ua: "Були окремі поліси. Їх єднала культура, не один цар."
        },
        explanation: {
          pl: "Fałsz. Osobne polis, wspólna kultura.",
          ua: "Неправда. Окремі поліси, спільна культура."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Malarstwo", ua: "Малярство" },
      visual: gh("076", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery greckie wazy i amfory na drewnianej desce",
          ua: "Чотири грецькі вази і амфори на дерев’яній дошці"
        },
        title: { pl: "Pięknie dekorowane wazy i amfory", ua: "Гарно декоровані вази і амфори" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, 16:9, ciemna tablica, bez grozy. Na górze na środku białe słowo „malarstwo”. Po lewej pomarańczowa strzałka i tekst: „pięknie dekorowane wazy i amfory”. Po prawej cztery greckie wazy / amfory (czarnofigurowe i czerwonofigurowe, terakota i czerń) stoją na jasnej drewnianej desce przy jasnoszarej ścianie. Na wazach sceny z mitów, życia codziennego, muzycy z lirą, rośliny i zwierzęta, meander przy krawędziach. Nie pokazuj posągów, teatru ani stadionu. Nie dopisuj innych haseł.",
          ua: "Шкільний слайд для 5 класу, темна дошка, без жаху. Напис «malarstwo». Стрілка: «pięknie dekorowane wazy i amfory». Чотири грецькі вази на дерев’яній дошці: міфи, побут, ліра, рослини і тварини. Без статуй, театру і стадіону."
        }
      }),
      text: {
        pl: [
          ["Malarstwo Greków znamy głównie z ", em("waz i amfor"), " — naczyń na wino albo oliwę."],
          "Malowano motywy z mitów, z życia codziennego oraz ze świata roślin i zwierząt."
        ],
        ua: [
          ["Малярство греків знаємо переважно з ", em("ваз і амфор"), " — посудин на вино або олію."],
          "Малювали мотиви з міфів, з повсякденного життя та зі світу рослин і тварин."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzeźba", ua: "Скульптура" },
      visual: gh("077", {
        kind: "image-placeholder",
        alt: {
          pl: "Dyskobol Myrona, Atena Fidiasza, Zeus w Olimpii",
          ua: "Дискобол Мірона, Афіна Фідія, Зевс в Олімпії"
        },
        title: { pl: "Myron i Fidiasz", ua: "Мірон і Фідій" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, ciemna tablica, bez grozy. Na górze: „rzeźba”. Po lewej strzałki i tekst DOKŁADNIE: „początkowo” → „w kamieniu”, „nieruchome postacie”; „od V wieku p.n.e.” → „postacie w ruchu”; „materiały”: „marmur”, „brąz”, „drewno”; „rzeźbiarze”: „Myron”, „Fidiasz”. Po prawej trzy obrazy z numerami 1) 2) 3): (1) muzealny Dyskobol Myrona — sportowiec w ruchu z dyskiem, jak w podręczniku Nowej Ery; (2) wielki spokojny posąg Ateny Fidiasza na Akropolu: hełm, peplos, włócznia i tarcza, małe ludziki u stóp, dzień; (3) rekonstrukcja posągu Zeusa w Olimpii: Zeus siedzi na tronie w świątyni, w ręku Nike i berło. Nie pokazuj waz ani teatru. Nie dopisuj innych rzeźbiarzy.",
          ua: "Шкільний слайд для 5 класу, темна дошка, без жаху. Напис «rzeźba». Текст: спочатку камінь і нерухомі постаті; від V ст. до н.е. постаті в русі; мармур, бронза, дерево; Мирон, Фідій. Три зображення: Дискобол; Афіна Фідія; Зевс в Олімпії. Без ваз і театру."
        }
      }),
      text: {
        pl: [
          "Dawniejsze rzeźby były z kamienia i pokazywały nieruchome postacie. Od V wieku p.n.e. rzeźbiono ludzi w ruchu — na przykład sportowców.",
          ["Materiały: marmur, brąz, drewno. Najsłynniejsi rzeźbiarze: ", em("Myron"), " (Dyskobol) i ", em("Fidiasz"), " (posąg Ateny na Akropolu i posąg Zeusa w Olimpii)."]
        ],
        ua: [
          "Давніші скульптури були з каменю і показували нерухомі постаті. Від V століття до н.е. різьбили людей у русі — наприклад спортсменів.",
          ["Матеріали: мармур, бронза, дерево. Найславетніші скульптори: ", em("Мірон"), " (Дискобол) і ", em("Фідій"), " (статуя Афіни на Акрополі і статуя Зевса в Олімпії)."]
        ]
      },
      task: {
        id: "h10-practice",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto wyrzeźbił posąg Ateny na Akropolu i posąg Zeusa w Olimpii?",
          ua: "Хто вирізьбив статую Афіни на Акрополі і статую Зевса в Олімпії?"
        },
        options: [
          { id: "a", label: { pl: "Fidiasz", ua: "Фідій" } },
          { id: "b", label: { pl: "Myron", ua: "Мірон" } },
          { id: "c", label: { pl: "Homer", ua: "Гомер" } }
        ],
        answer: "a",
        hint: {
          pl: "Myron = Dyskobol. Homer pisał pieśni, nie kuł marmuru.",
          ua: "Мірон = Дискобол. Гомер писав пісні, не тесав мармур."
        },
        explanation: {
          pl: "Fidiasz. Myron jest autorem Dyskobola.",
          ua: "Фідій. Мірон — автор Дискобола."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Narodziny teatru", ua: "Народження театру" },
      formula: "VI w. p.n.e.",
      visual: gh("078", {
        kind: "image-placeholder",
        alt: {
          pl: "Święto ku czci Dionizosa — chór i pierwsi aktorzy",
          ua: "Свято на честь Діоніса — хор і перші актори"
        },
        title: { pl: "Wielkie Dionizje", ua: "Великі Діонісії" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, ciemna tablica, bez grozy. Tytuł: „narodziny teatru”. Po lewej strzałki i tekst DOKŁADNIE: „coroczne obchody religijne na cześć boga wina, Dionizosa”; w owalu „WIELKIE DIONIZJE”; „chóry złożone z chłopców i mężczyzn śpiewały pieśni”; „osoby prowadzące dialogi”; „pierwsi aktorzy” → „mężczyźni”; „grali role męskie i kobiece”; na dole owal „w VI wieku p.n.e. powstał teatr”. Po prawej spokojna ilustracja święta: procesja i ludzie przy stole między kolumnami, dzień, nikt nie walczy. Nie pisz „amfiteatr”. Nie pokazuj kobiet-aktorek na scenie.",
          ua: "Шкільний слайд для 5 класу, темна дошка, без жаху. Напис «narodziny teatru». Текст: свято Діоніса, Великі Діонісії, хори хлопців і чоловіків, діалоги, перші актори — лише чоловіки, ролі чоловічі й жіночі, VI ст. до н.е. Праворуч процесія, день. Без амфітеатру. Без акторок."
        }
      }),
      text: {
        pl: [
          ["Teatr wywodzi się z uroczystości ku czci ", em("Dionizosa"), ", boga wina. Święto w Atenach nazywano ", em("Wielkimi Dionizjami"), "."],
          ["Chóry chłopców i mężczyzn śpiewały pieśni. Potem pojawiły się dialogi — i ", em("pierwsi aktorzy"), ": wyłącznie mężczyźni, także w rolach kobiecych. Około ", em("VI wieku p.n.e."), " powstał teatr."]
        ],
        ua: [
          ["Театр походить зі свят на честь ", em("Діоніса"), ", бога вина. Свято в Афінах називали ", em("Великими Діонісіями"), "."],
          ["Хори хлопців і чоловіків співали пісні. Потім з’явилися діалоги — і ", em("перші актори"), ": лише чоловіки, також у жіночих ролях. Близько ", em("VI століття до н.е."), " виник театр."]
        ]
      },
      task: {
        id: "h10-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Skąd wziął się teatr grecki?",
          ua: "Звідки взявся грецький театр?"
        },
        options: [
          { id: "a", label: { pl: "z uroczystości ku czci Dionizosa (Wielkie Dionizje)", ua: "зі свят на честь Діоніса (Великі Діонісії)" } },
          { id: "b", label: { pl: "z igrzysk w Olimpii ku czci Zeusa", ua: "з ігор в Олімпії на честь Зевса" } },
          { id: "c", label: { pl: "z piramid nad Nilem", ua: "з пірамід над Нілом" } }
        ],
        answer: "a",
        hint: {
          pl: "Bóg wina, chór, dialog.",
          ua: "Бог вина, хор, діалог."
        },
        explanation: {
          pl: "Wielkie Dionizje. Igrzyska to sport, nie scena.",
          ua: "Великі Діонісії. Ігри — спорт, не сцена."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tragedie i komedie", ua: "Трагедії і комедії" },
      text: {
        pl: [
          ["Widowiska opowiadały przygody bohaterów oraz wydarzenia bogów i ludzi. ", em("Tragedie"), " — o ważnych problemach: nieposłuszeństwo wobec bogów, konflikty, nadużywanie władzy."],
          [em("Komedie"), " miały żartobliwy charakter: aktualne wydarzenia, ośmieszanie wad — żeby motywować do poprawy. Funkcja teatru była ", em("wychowawcza"), ": jak postępować i jakie decyzje podejmować."]
        ],
        ua: [
          ["Видовища розповідали пригоди героїв та події богів і людей. ", em("Трагедії"), " — про важливі проблеми: непослух богам, конфлікти, зловживання владою."],
          [em("Комедії"), " мали жартівливий характер: актуальні події, висміювання вад — щоб спонукати до виправлення. Функція театру була ", em("виховна"), ": як чинити і які рішення ухвалювати."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Teatr grecki", ua: "Грецький театр" },
      visual: gh("079", {
        kind: "image-placeholder",
        alt: {
          pl: "Grecki teatr: widownia, chór, scena, garderoba",
          ua: "Грецький театр: глядачі, хор, сцена, гримерка"
        },
        title: { pl: "Widownia, scena, chór", ua: "Глядачі, сцена, хор" },
        prompt: {
          pl: "Szkolna 3D-rekonstrukcja greckiego teatru na zboczu góry dla klasy 5, dzień, jasne niebo, bez grozy. Kamienne półkole. Białe ramki z czarnym tekstem i kreskami DOKŁADNIE: „teatr” (całość); „widownia” (stopnie); „chór” (kilkanaście osób w białych chitonach na okrągłej orchestrze); „scena” (podwyższenie z dwoma aktorami w maskach); na budynku skene: „garderoba”; „rekwizytornia”. Aktorzy w maskach, perukach, koturnach. Nie pisz „amfiteatr” (to budowla rzymska). Nie pisz „agora”. Nie rysuj rzymskiego owalnego Koloseum z areną do walk.",
          ua: "Шкільна 3D-реконструкція грецького театру на схилі для 5 класу, день, без жаху. Підписи: teatr, widownia, chór, scena, garderoba, rekwizytornia. Не пиши amfiteatr. Актори в масках. Не Колізей."
        }
      }),
      text: {
        pl: [
          ["Najpierw grano na agorze. Potem budowano ", em("teatry"), " na zboczu góry: widownia ze stopni, scena na podwyższeniu, chór na orchestrze. (Słowo amfiteatr zostawiamy Rzymowi — lekcja 14.)"],
          "W budynku za sceną była garderoba i rekwizytornia. Aktorzy nosili maski, peruki i koturny — żeby było ich lepiej widać i słychać."
        ],
        ua: [
          ["Спочатку грали на агорі. Потім будували ", em("театри"), " на схилі гори: глядачі на ступенях, сцена на підвищенні, хор на орхестрі. (Слово амфітеатр лишаємо Риму — урок 14.)"],
          "У будинку за сценою були гримерка і реквізит. Актори носили маски, перуки і котурни — щоб їх було краще видно і чути."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Zawody dramatopisarzy", ua: "Змагання драматургів" },
      text: {
        pl: [
          "Wielkie Dionizje trwały około tygodnia: procesja, ofiary, potem zawody. Każdy autor: trzy tragedie i jedną komedię.",
          ["Sędziowie: 10 losowo wybranych obywateli Aten. Nagroda: wieniec z bluszczu. Najsłynniejsi: tragicy ", em("Ajschylos"), ", ", em("Sofokles"), ", ", em("Eurypides"), " i komediopisarz ", em("Arystofanes"), "."]
        ],
        ua: [
          "Великі Діонісії тривали близько тижня: процесія, жертви, потім змагання. Кожен автор: три трагедії і одну комедію.",
          ["Судді: 10 випадково обраних громадян Афін. Нагорода: вінок з плюща. Найславетніші: трагіки ", em("Есхіл"), ", ", em("Софокл"), ", ", em("Евріпід"), " і комедіограф ", em("Аристофан"), "."]
        ]
      },
      task: {
        id: "h10-src",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Ile sztuk przedstawiał autor na zawodach dramatopisarzy?",
          ua: "Скільки п’єс представляв автор на змаганнях драматургів?"
        },
        options: [
          { id: "a", label: { pl: "3 tragedie i 1 komedię", ua: "3 трагедії і 1 комедію" } },
          { id: "b", label: { pl: "tylko jedną tragedię", ua: "лише одну трагедію" } },
          { id: "c", label: { pl: "pięć biegów stadionu", ua: "п’ять бігів стадіону" } }
        ],
        answer: "a",
        hint: {
          pl: "Cztery utwory: trzy poważne i jeden żartobliwy.",
          ua: "Чотири твори: три серйозні і один жартівливий."
        },
        explanation: {
          pl: "3 + 1. Pięciobój to sport, nie teatr.",
          ua: "3 + 1. П’ятиборство — спорт, не театр."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Filozofia", ua: "Філософія" },
      visual: gh("080", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzej filozofowie: Sokrates, Platon, Arystoteles",
          ua: "Три філософи: Сократ, Платон, Аристотель"
        },
        title: { pl: "Sokrates, Platon, Arystoteles", ua: "Сократ, Платон, Аристотель" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, ciemna tablica, bez grozy. Tytuł: „filozofia”. Po lewej strzałki: „ważny był rozum”; „greccy uczeni — filozofowie”; pod spodem: „ważne pytania o powstanie i funkcjonowanie świata”; „postępowanie człowieka”. Trzy kolumny. 16) popiersie łysiejącego brodatego mężczyzny, podpis „Sokrates”: „ważne by dobrze żyć”; „ważne by zdobywać wiedzę”; „dążenie do doskonałości ciała i umysłu”. 17) Platon w czerwonym płaszczu, podpis „Platon”: „uczeń Sokratesa”; „świat z materii i idei”. 18) Arystoteles, podpis „Arystoteles”: „jego badania dały podstawy biologii, fizyki i logiki”; „dzięki niemu zachowała się wiedza dotycząca greckich polis”. Nie pokazuj Pitagorasa, Talesa, Hipokratesa ani stadionu.",
          ua: "Шкільний слайд для 5 класу, темна дошка. Напис «filozofia». Три колонки: Сократ, Платон, Аристотель — з тими самими польськими пунктами, що в блоці. Без Піфагора, Фалеса, Гіппократа і стадіону."
        }
      }),
      text: {
        pl: [
          ["Naukę o budowie świata i celu ludzkiego życia Grecy nazywali ", em("filozofią"), " — umiłowaniem mądrości. Ważny był rozum."],
          [em("Sokrates"), " uczył, by dobrze żyć i zdobywać wiedzę, zamiast gonić za zaszczytami. ", em("Platon"), " był jego uczniem: świat z materii i idei. ", em("Arystoteles"), " — uczeń Platona; jego badania dały podstawy biologii, fizyki i logiki."]
        ],
        ua: [
          ["Науку про будову світу і мету людського життя греки називали ", em("філософією"), " — любов’ю до мудрості. Важливим був розум."],
          [em("Сократ"), " учив добре жити і здобувати знання, а не гнатися за почестями. ", em("Платон"), " був його учнем: світ з матерії та ідей. ", em("Аристотель"), " — учень Платона; його дослідження дали основи біології, фізики і логіки."]
        ]
      },
      task: {
        id: "h10-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zestawienie jest poprawne?",
          ua: "Яке поєднання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "Sokrates — pytania o dobre życie; Platon — uczeń Sokratesa; Arystoteles — uczeń Platona", ua: "Сократ — питання про добре життя; Платон — учень Сократа; Аристотель — учень Платона" } },
          { id: "b", label: { pl: "Sokrates wyrzeźbił Dyskobola, Platon biegał w Olimpii", ua: "Сократ вирізьбив Дискобола, Платон бігав в Олімпії" } },
          { id: "c", label: { pl: "Arystoteles był bogiem wina Dionizosem", ua: "Аристотель був богом вина Діонісом" } }
        ],
        answer: "a",
        hint: {
          pl: "Łańcuch uczniów: Sokrates → Platon → Arystoteles.",
          ua: "Ланцюг учнів: Сократ → Платон → Аристотель."
        },
        explanation: {
          pl: "Trzej filozofowie, nie rzeźbiarze i nie bogowie.",
          ua: "Три філософи, не скульптори і не боги."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Matematyka i medycyna", ua: "Математика і медицина" },
      text: {
        pl: [
          ["Z greckich uczonych warto jeszcze znać matematyków: ", em("Pitagorasa"), " i ", em("Talesa z Miletu"), ". Ich reguły są aktualne do dziś."],
          [em("Hipokrates"), " — ojciec współczesnej medycyny: najpierw określał stan pacjenta, potem dobierał leczenie."]
        ],
        ua: [
          ["З грецьких учених варто ще знати математиків: ", em("Піфагора"), " і ", em("Фалеса з Мілета"), ". Їхні правила чинні досі."],
          [em("Гіппократ"), " — батько сучасної медицини: спочатку визначав стан пацієнта, потім добирав лікування."]
        ]
      },
      task: {
        id: "h10-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Kogo nazywamy ojcem współczesnej medycyny?",
          ua: "Кого називаємо батьком сучасної медицини?"
        },
        answer: ["hipokrates", "hipokratesa", "hipokratesowi", "гіппократ", "гіппократа", "гіппократові", "hippocrates"],
        hint: {
          pl: "Najpierw stan pacjenta, potem leczenie. Nie Pitagoras.",
          ua: "Спочатку стан пацієнта, потім лікування. Не Піфагор."
        },
        explanation: {
          pl: "Hipokrates. Pitagoras i Tales to matematyka.",
          ua: "Гіппократ. Піфагор і Фалес — математика."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Sport i igrzyska", ua: "Спорт і ігри" },
      timelineYear: 776,
      visual: gh("081", {
        kind: "image-placeholder",
        alt: {
          pl: "Pięciobój: biegi, skok w dal, oszczep, dysk, zapasy",
          ua: "П’ятиборство: біг, стрибок, спис, диск, боротьба"
        },
        title: { pl: "Pięciobój olimpijski", ua: "Олімпійське п’ятиборство" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, ciemna tablica, bez grozy, BEZ krwi. Na środku u góry: „pięciobój”. Szeroki pomarańczowy pas jak malarstwo czarnofigurowe. Pięć czarnych sylwetek z podpisami DOKŁADNIE: „biegi”; „skok w dal”; „rzut oszczepem”; „rzut dyskiem”; „zapasy”. Biegacz w hełmie z okrągłą tarczą; skoczek z ciężarkami (halteres) w locie; oszczepnik po krótkim rozbiegu; dyskobol z zamachem BEZ obrotu; dwaj zapaśnicy w chwycie, nikt nie rani. Tylko mężczyźni. Nie dodawaj pływania, kolarstwa, kobiet-zawodniczek ani napisu 1896.",
          ua: "Шкільний слайд для 5 класу, темна дошка, БЕЗ крові. Напис «pięciobój». П’ять чорних силуетів: biegi, skok w dal, rzut oszczepem, rzut dyskiem, zapasy. Лише чоловіки. Без плавання, велоспорту, жінок і 1896."
        }
      }),
      text: {
        pl: [
          ["Dla Greków sport kształtował ciało i cechy: wytrwałość, uczciwość. Najważniejsze zawody — ", em("igrzyska"), " w ", em("Olimpii"), " ku czci Zeusa. Co cztery lata; okres między nimi to ", em("olimpiada"), "."],
          ["Według tradycji pierwsze igrzyska: ", em("776 p.n.e."), " Na ten czas zawieszano wojny. Tylko mężczyźni — na stadionie i na trybunach. W ", em("pięcioboju"), ": biegi, skok w dal, rzut oszczepem, rzut dyskiem, zapasy."]
        ],
        ua: [
          ["Для греків спорт формував тіло і риси: витривалість, чесність. Найважливіші змагання — ", em("ігри"), " в ", em("Олімпії"), " на честь Зевса. Щочотири роки; період між ними — ", em("олімпіада"), "."],
          ["За традицією перші ігри: ", em("776 до н.е."), " На цей час зупиняли війни. Лише чоловіки — на стадіоні і на трибунах. У ", em("п’ятиборстві"), ": біг, стрибок у довжину, метання списа, метання диска, боротьба."]
        ]
      },
      task: {
        id: "h10-oral",
        type: "input-number",
        level: "A",
        question: {
          pl: [
            "Tradycyjny rok pierwszych igrzysk olimpijskich p.n.e.: ",
            em("776"),
            "."
          ],
          ua: [
            "Традиційний рік перших Олімпійських ігор до н.е.: ",
            em("776"),
            "."
          ]
        },
        answer: 776,
        hint: {
          pl: "Siódemka, siódemka, szóstka. Nie VI wiek teatru.",
          ua: "Сім, сім, шість. Не VI століття театру."
        },
        explanation: {
          pl: "776 p.n.e. — początek rachuby czasu u Greków.",
          ua: "776 до н.е. — початок лічби часу в греків."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Odrodzenie igrzysk", ua: "Відродження ігор" },
      visual: gh("082", {
        kind: "image-placeholder",
        alt: {
          pl: "Nowożytne igrzyska: znicz, sztafeta, defilada Grecji",
          ua: "Новочасні ігри: вогонь, естафета, парад Греції"
        },
        title: { pl: "Od 1896 roku znowu co cztery lata", ua: "Від 1896 року знову щочотири роки" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, ciemna tablica, bez grozy. Tytuł: „odrodzenie igrzysk olimpijskich”. Po lewej strzałki DOKŁADNIE: „w IV wieku n.e. zakazano igrzysk”; „od 1896 roku zaczęto je ponownie organizować”; „od 1924 roku także igrzyska zimowe”; „różnice” → „mężczyźni i kobiety”; „sportowcy z całego świata”. „odwołania do tradycji”: zapalenie ognia w ruinach świątyni w Olimpii; sztafeta; znicz do końca igrzysk; Grecja zaczyna defiladę. Po prawej kolaż 2×2: kapłanka w peplos zapala ogień wśród ruin w Olimpii; dwaj sportowcy stykają pochodnie; nocny znicz z płomieniem; delegacja Grecji z niebiesko-białą flagą prowadzi pochód. Nie pokazuj czarnofigurowego pięcioboju ani waz.",
          ua: "Шкільний слайд для 5 класу. Напис «odrodzenie igrzysk olimpijskich». Текст: заборона в IV ст. н.е.; від 1896; зимові від 1924; жінки і чоловіки; увесь світ; вогонь в Олімпії, естафета, олімпійський вогонь, парад Греції. Колаж 2×2. Без вазового п’ятиборства."
        }
      }),
      text: {
        pl: [
          "W IV wieku n.e. igrzyska zakazano. Od 1896 roku organizuje się je znowu, od 1924 — także zimowe.",
          "Dziś startują kobiety i mężczyźni, sportowcy z całego świata. Z tradycji: ogień w ruinach świątyni w Olimpii, sztafeta, znicz i defilada zaczynana przez Grecję."
        ],
        ua: [
          "У IV столітті н.е. ігри заборонили. Від 1896 року їх знову організовують, від 1924 — також зимові.",
          "Сьогодні стартують жінки і чоловіки, спортсмени з усього світу. З традиції: вогонь у руїнах святині в Олімпії, естафета, олімпійський вогонь і парад, який починає Греція."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Wielkie Dionizje — święto ku czci Dionizosa, z którego powstał teatr", ua: "Великі Діонісії — свято на честь Діоніса, з якого виник театр" },
        { pl: "teatr — grecka budowla na zboczu: widownia, orchestra, scena (amfiteatr to budowla rzymska)", ua: "театр — грецька будівля на схилі: глядачі, орхестра, сцена (амфітеатр — римська будівля)" },
        { pl: "tragedia / komedia — sztuka poważna / żartobliwa", ua: "трагедія / комедія — серйозна / жартівлива п’єса" },
        { pl: "filozofia — umiłowanie mądrości; pytania o świat i życie człowieka", ua: "філософія — любов до мудрості; питання про світ і життя людини" },
        { pl: "igrzyska / olimpiada — zawody w Olimpii / cztery lata między nimi", ua: "ігри / олімпіада — змагання в Олімпії / чотири роки між ними" },
        { pl: "pięciobój olimpijski — biegi, skok w dal, oszczep, dysk, zapasy", ua: "олімпійське п’ятиборство — біг, стрибок, спис, диск, боротьба" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Teatr wymyślono na igrzyskach ku czci Zeusa, Fidiasz malował tylko wazy, a w Olimpii mogły biegać kobiety już w 776 p.n.e.”",
        ua: "«Театр вигадали на іграх на честь Зевса, Фідій малював лише вази, а в Олімпії жінки могли бігати вже 776 до н.е.»"
      },
      text: {
        pl: [
          "Teatr = Dionizos i Wielkie Dionizje, nie Zeus i stadion. Fidiasz = rzeźba (Atena, Zeus), malarstwo znamy z waz. W starożytności igrzyska były tylko dla mężczyzn."
        ],
        ua: [
          "Театр = Діоніс і Великі Діонісії, не Зевс і стадіон. Фідій = скульптура (Афіна, Зевс), малярство знаємо з ваз. У давнину ігри були лише для чоловіків."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, czym teatr grecki różnił się od „oglądania dla zabicia czasu”. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, чим грецький театр відрізнявся від «перегляду, щоб убивати час». Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: Wielkie Dionizje, tragedia i komedia, funkcja wychowawcza."
        ],
        ua: [
          "Підказка: Великі Діонісії, трагедія і комедія, виховна функція."
        ]
      },
      task: {
        id: "h10-logic",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje teatr grecki?",
          ua: "Яке речення найкраще передає грецький театр?"
        },
        options: [
          { id: "a", label: { pl: "Był częścią święta i uczył, jak postępować", ua: "Був частиною свята і вчив, як чинити" } },
          { id: "b", label: { pl: "Był tylko reklamą oliwy na agorze", ua: "Був лише рекламою олії на агорі" } },
          { id: "c", label: { pl: "Grano go wyłącznie w nocy w jaskiniach", ua: "Його грали лише вночі в печерах" } }
        ],
        answer: "a",
        hint: {
          pl: "Funkcja wychowawcza ze slajdu.",
          ua: "Виховна функція зі слайда."
        },
        explanation: {
          pl: "Święto + opowieść + nauka, jak żyć.",
          ua: "Свято + оповідь + наука, як жити."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co zostało do dziś?", ua: "Що лишилося досі?" },
      task: {
        id: "h10-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który przykład najlepiej pokazuje wpływ Greków na kulturę dziś?",
          ua: "Який приклад найкраще показує вплив греків на культуру сьогодні?"
        },
        options: [
          { id: "a", label: { pl: "nowożytne igrzyska, teatr (tragedia i komedia), pytania filozofów, twierdzenia matematyków", ua: "новочасні ігри, театр (трагедія і комедія), питання філософів, теореми математиків" } },
          { id: "b", label: { pl: "tylko hieroglify i piramidy Egiptu", ua: "лише ієрогліфи і піраміди Єгипту" } },
          { id: "c", label: { pl: "tylko pismo klinowe Sumerów", ua: "лише клинопис шумерів" } }
        ],
        answer: "a",
        hint: {
          pl: "To wymaganie ponadpodstawowe z książki nauczyciela: wpływ na kulturę i naukę.",
          ua: "Це вимога понадбазова з книги вчителя: вплив на культуру і науку."
        },
        explanation: {
          pl: "Igrzyska, scena, filozofia, matematyka — nie Egipt i nie Sumer.",
          ua: "Ігри, сцена, філософія, математика — не Єгипет і не Шумер."
        }
      },
      text: {
        pl: [
          "Ponadpodstawowo: Grecy zostawili wzory, z których Europa korzysta do dziś. Archimedes (dźwignia, prawo wyporu) też należy do tej nauki — na razie wystarczy imię obok Pitagorasa i Talesa."
        ],
        ua: [
          "Понадбазово: греки лишили зразки, з яких Європа користає досі. Архімед (важіль, закон виштовхування) теж належить до цієї науки — поки досить імені поруч із Піфагором і Фалесом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h10-check2",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zestawienie jest poprawne?",
          ua: "Яке поєднання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "Myron — Dyskobol; Fidiasz — Atena i Zeus; igrzyska — 776 p.n.e. w Olimpii", ua: "Мірон — Дискобол; Фідій — Афіна і Зевс; ігри — 776 до н.е. в Олімпії" } },
          { id: "b", label: { pl: "Fidiasz pisał komedie, Myron był sędzią 10 obywateli", ua: "Фідій писав комедії, Мірон був суддею 10 громадян" } },
          { id: "c", label: { pl: "776 p.n.e. to data narodzin teatru w VI wieku", ua: "776 до н.е. — це дата народження театру в VI столітті" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty: teatr ≈ VI w. p.n.e.; igrzyska 776 p.n.e.",
          ua: "Дві дати: театр ≈ VI ст. до н.е.; ігри 776 до н.е."
        },
        explanation: {
          pl: "Rzeźbiarze + data igrzysk. Teatr to inny wiek.",
          ua: "Скульптори + дата ігор. Театр — інше століття."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Do dziedzin sztuki rozwijających się w starożytnej Grecji należą malarstwo wazowe i rzeźba. Najsłynniejszymi greckimi rzeźbiarzami byli Fidiasz i Myron.",
          ["malarstwo wazowe", "rzeźba", "Fidiasz", "Myron"],
          "До галузей мистецтва, що розвивалися в стародавній Греції, належать вазовий живопис і скульптура. Найславетнішими грецькими скульпторами були Фідій і Мірон.",
          ["вазовий живопис", "скульптура", "Фідій", "Мірон"]
        ),
        mark(
          "W starożytnej Grecji narodził się teatr. Wywodzi się on z uroczystości ku czci Dionizosa. Sztuki o tematyce poważnej zwane były tragediami, a przedstawienia żartobliwe — komediami. Aby prezentować sztuki, Grecy budowali teatry na zboczu góry.",
          ["teatr", "Dionizosa", "tragediami", "komediami", "teatry"],
          "У стародавній Греції народився театр. Він походить зі свят на честь Діоніса. П’єси на серйозні теми називали трагедіями, а жартівливі вистави — комедіями. Щоб показувати п’єси, греки будували театри на схилі гори.",
          ["театр", "Діоніса", "трагедіями", "комедіями", "театри"]
        ),
        mark(
          "Naukę zajmującą się rozważaniem nad budową świata i celem ludzkiego życia Grecy nazywali filozofią. Najsłynniejsi filozofowie starożytnej Grecji to Sokrates, Platon i Arystoteles.",
          ["filozofią", "Sokrates", "Platon", "Arystoteles"],
          "Науку, що міркує про будову світу і мету людського життя, греки називали філософією. Найславетніші філософи стародавньої Греції — Сократ, Платон і Аристотель.",
          ["філософією", "Сократ", "Платон", "Аристотель"]
        ),
        mark(
          "Niezwykle ważny dla Greków był sport. Co cztery lata organizowali oni w Olimpii igrzyska ku czci Zeusa. W czasie tych zawodów rozgrywano między innymi pięciobój olimpijski.",
          ["sport", "Olimpii", "igrzyska", "Zeusa", "pięciobój olimpijski"],
          "Надзвичайно важливим для греків був спорт. Щочотири роки вони організовували в Олімпії ігри на честь Зевса. Під час цих змагань відбувалося між іншим олімпійське п’ятиборство.",
          ["спорт", "Олімпії", "ігри", "Зевса", "олімпійське п’ятиборство"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Imperium Aleksandra Wielkiego. Kultura grecka pójdzie z armią daleko na wschód.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Імперія Александра Великого. Грецька культура піде з армією далеко на схід.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "Gc94esAKRoY",
        title: {
          pl: "Krótkie Lekcje: Kultura starożytnej Grecji",
          ua: "Короткі уроки: Культура стародавньої Греції"
        }
      }
    }
  ]
};
