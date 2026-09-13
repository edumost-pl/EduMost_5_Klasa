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
      heading: { pl: "Bizancjum w czasach świetności", ua: "Візантія в часи розквіту" },
      formula: "395 n.e. · 1453 n.e.",
      text: {
        pl: [
          "Zachód upadł w 476 (lekcja 13). Wschód trwał — to Bizancjum, ze stolicą w Konstantynopolu.",
          "Trzy pytania: kiedy i gdzie istniało Bizancjum, jakie były zasługi Justyniana, jakie osiągnięcia nauki i kultury. Na osi nowa data: 1453."
        ],
        ua: [
          "Захід упав 476 (урок 13). Схід тривав — це Візантія, зі столицею в Константинополі.",
          "Три питання: коли і де існувала Візантія, які були заслуги Юстиніана, які досягнення науки і культури. На осі нова дата: 1453."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, kiedy i gdzie istniało cesarstwo bizantyjskie (395–1453, stolica Konstantynopol)", ua: "сказати, коли і де існувала візантійська імперія (395–1453, столиця Константинополь)" },
        { pl: "opisać władzę cesarza i zasługi Justyniana I Wielkiego", ua: "описати владу імператора і заслуги Юстиніана I Великого" },
        { pl: "wyjaśnić, czemu Konstantynopol był bogaty i czemu zwano go Nowym Rzymem", ua: "пояснити, чому Константинополь був багатий і чому його звали Новим Римом" },
        { pl: "scharakteryzować styl bizantyjski oraz podać przyczyny i skutki upadku w 1453", ua: "схарактеризувати візантійський стиль і подати причини та наслідки падіння 1453" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Wschód = Bizancjum", ua: "Схід = Візантія" },
      formula: "395 n.e.",
      timelineYear: 395,
      visual: gh("139", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa podziału cesarstwa: Zachód czerwony, Wschód fioletowy = Bizancjum",
          ua: "Мапа поділу імперії: Захід червоний, Схід фіолетовий = Візантія"
        },
        title: { pl: "Dwa cesarstwa, jedna data", ua: "Дві імперії, одна дата" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Basen Śródziemny. Czerwony cień: „cesarstwo zachodniorzymskie” (Italia, Galia, Hiszpania, Brytania, NW Afryka). Fioletowy cień: „cesarstwo wschodniorzymskie = Bizancjum” (Bałkany, Grecja, Azja Mniejsza, Syria, Egipt). Kropki: Rzym, Konstantynopol. Tytuł PL: „w 395 n.e. podzielono cesarstwo”. Mała etykieta: „Bizancjum — od dawnej kolonii greckiej”. BEZ żołnierzy. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа 395: Захід червоний, Схід фіолетовий = Візантія. Рим і Константинополь."
        }
      }),
      text: {
        pl: [
          ["W ", em("395 roku n.e."), " podzielono Imperium Rzymskie. Zachód miał stolicę w ", em("Rzymie"), " i upadł w 476."],
          ["Wschód — ", em("cesarstwo wschodniorzymskie"), " = ", em("cesarstwo bizantyjskie"), " = ", em("Bizancjum"), " (nazwa od dawnej kolonii greckiej). Stolica: ", em("Konstantynopol"), ". Trwało do ", em("1453"), "."]
        ],
        ua: [
          ["Року ", em("395 н.е."), " поділили Римську імперію. Захід мав столицю в ", em("Римі"), " і впав 476."],
          ["Схід — ", em("східноримська імперія"), " = ", em("візантійська імперія"), " = ", em("Візантія"), " (назва від давньої грецької колонії). Столиця: ", em("Константинополь"), ". Тривала до ", em("1453"), "."]
        ]
      },
      task: {
        id: "h17-395",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym jest Bizancjum i od kiedy istnieje jako osobne cesarstwo wschodnie?",
          ua: "Чим є Візантія і відколи існує як окрема східна імперія?"
        },
        options: [
          { id: "a", label: { pl: "cesarstwo wschodniorzymskie od podziału w 395 n.e.", ua: "східноримська імперія від поділу 395 н.е." } },
          { id: "b", label: { pl: "państwo faraonów od 3000 p.n.e.", ua: "держава фараонів від 3000 до н.е." } },
          { id: "c", label: { pl: "polis ateńska z czasów Peryklesa", ua: "афінський поліс часів Перікла" } }
        ],
        answer: "a",
        hint: {
          pl: "Lekcja 13 dała podział. Tu Wschód dostaje nazwę Bizancjum.",
          ua: "Урок 13 дав поділ. Тут Схід дістає назву Візантія."
        },
        explanation: {
          pl: "KN: 395 na osi. Nie myl z 476 (upadek Zachodu) ani z 1453 (koniec Wschodu).",
          ua: "KN: 395 на осі. Не плутай з 476 (падіння Заходу) і 1453 (кінець Сходу)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Cesarz na czele", ua: "Імператор на чолі" },
      formula: "władza nieograniczona",
      visual: gh("140", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: cesarz w koronie, wokół urzędnicy, armia, prawo, Bóg",
          ua: "Схема: імператор у короні, довкола урядники, армія, право, Бог"
        },
        title: { pl: "Jeden człowiek — całe państwo", ua: "Одна людина — вся держава" },
        prompt: {
          pl: "Szkolna infografika 16:9, jasne tło. Na środku spokojna figura cesarza w koronie i purpurze, STOI, nie walczy. Cztery strzałki PL: „ustanawiał prawa”; „najwyższy wódz / armia”; „liczni urzędnicy”; „reprezentant Boga na ziemi”. Tytuł: „cesarz bizantyjski”. BEZ bitwy, BEZ klękania-horroru, BEZ drugiej mozaiki Justyniana (ta była w lekcji 15). Styl Nowej Ery.",
          ua: "Схема імператора: закони, військо, урядники, представник Бога. Без битви."
        }
      }),
      text: {
        pl: [
          ["Na czele stał ", em("cesarz"), ": władza ", em("nieograniczona"), ", najwyższy wódz, ustanawiał prawa i mógł je zmieniać."],
          ["Uważano, że reprezentuje ", em("Boga na ziemi"), ". Rządy opierał na urzędnikach i armii."]
        ],
        ua: [
          ["На чолі стояв ", em("імператор"), ": влада ", em("необмежена"), ", найвищий вождь, встановлював закони і міг їх змінювати."],
          ["Вважали, що він представляє ", em("Бога на землі"), ". Правління опирав на урядників і армію."]
        ]
      },
      task: {
        id: "h17-cesarz",
        type: "true-false",
        level: "A",
        question: {
          pl: "Cesarz bizantyjski miał nieograniczoną władzę i był uważany za reprezentanta Boga na ziemi — prawda czy fałsz?",
          ua: "Візантійський імператор мав необмежену владу і вважався представником Бога на землі — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie konsulowie z republiki (lekcja 12). Tu jeden cesarz.",
          ua: "Не консули з республіки (урок 12). Тут один імператор."
        },
        explanation: {
          pl: "Prawda. KN: zakres władzy cesarza. Republika to dawny Rzym.",
          ua: "Правда. KN: обсяг влади імператора. Республіка — давній Рим."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Justynian I Wielki", ua: "Юстиніан I Великий" },
      formula: "VI w. n.e.",
      timelineId: "justynian",
      visual: gh("141", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa cesarstwa Justyniana ok. 550: Italia, Afryka, Hiszpania, Sycylia",
          ua: "Мапа імперії Юстиніана бл. 550: Італія, Африка, Іспанія, Сицилія"
        },
        title: { pl: "Świetność: ziemie dawnego Rzymu", ua: "Розквіт: землі давнього Риму" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Morze Śródziemne, różowy cień „cesarstwo Justyniana ok. 550”: Bałkany, Azja Mniejsza, Syria, Egipt PLUS Italia, Sycylia, wybrzeże północnej Afryki, południowa Hiszpania. Podpisy PL tych krain. Tytuł: „VI wiek — Justynian I Wielki”. Mała etykieta: „kodeks — lekcja 15”. BEZ bitew, BEZ mozaiki-portretu (już 126.png). Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа бл. 550: Італія, Північна Африка, південна Іспанія, Сицилія. Без портрета."
        }
      }),
      text: {
        pl: [
          ["Największa świetność przypadła na ", em("VI wiek"), ", za ", em("Justyniana I Wielkiego"), " (kartę znasz z lekcji 15). Odzyskał część dawnego Rzymu: ", em("Italię"), ", północną ", em("Afrykę"), ", południową ", em("Hiszpanię"), ", ", em("Sycylię"), "."],
          ["Kazał spisać prawo — ", em("Kodeks Justyniana"), " — i wzniósł Hagia Sophia. Rozwijało się chrześcijaństwo."]
        ],
        ua: [
          ["Найбільший розквіт припав на ", em("VI століття"), ", за ", em("Юстиніана I Великого"), " (картку знаєш з уроку 15). Повернув частину давнього Риму: ", em("Італію"), ", північну ", em("Африку"), ", південну ", em("Іспанію"), ", ", em("Сицилію"), "."],
          ["Велів записати право — ", em("Кодекс Юстиніана"), " — і звів Ая-Софію. Розвивалося християнство."]
        ]
      },
      task: {
        id: "h17-just",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jakie były główne zasługi Justyniana I Wielkiego?",
          ua: "Які були головні заслуги Юстиніана I Великого?"
        },
        options: [
          { id: "a", label: { pl: "rozszerzył cesarstwo, spisał kodeks, wzniósł Hagia Sophia", ua: "розширив імперію, записав кодекс, звів Ая-Софію" } },
          { id: "b", label: { pl: "założył Rzym w 753 p.n.e. i napisał Eneidę", ua: "заснував Рим 753 до н.е. і написав Енеїду" } },
          { id: "c", label: { pl: "ogłosił edykt mediolański w 313", ua: "оголосив Міланський едикт 313" } }
        ],
        answer: "a",
        hint: {
          pl: "VI wiek na osi. 313 to Konstantyn. 753 to Romulus.",
          ua: "VI століття на осі. 313 — Костянтин. 753 — Ромул."
        },
        explanation: {
          pl: "KN: zasługi Justyniana. Edykt = lekcja 16. Eneida = lekcja 15.",
          ua: "KN: заслуги Юстиніана. Едикт = урок 16. Енеїда = урок 15."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Konstantynopol — Nowy Rzym", ua: "Константинополь — Новий Рим" },
      formula: "Bosfor · Europa i Azja",
      visual: gh("142", {
        kind: "map-placeholder",
        alt: {
          pl: "Konstantynopol na półwyspie: Bosfor, Złoty Róg, Europa i Azja",
          ua: "Константинополь на півострові: Босфор, Золотий Ріг, Європа і Азія"
        },
        title: { pl: "Styk dwóch kontynentów", ua: "Стик двох континентів" },
        prompt: {
          pl: "Szkolny widok z lotu ptaka 16:9, atlas. Półwysep miasta, woda z trzech stron. Podpisy PL: „BOSFOR”; „ZŁOTY RÓG”; „PROPONTYDA / Morze Marmara”; „Europa”; „Azja”. Tytuł: „Konstantynopol — Nowy Rzym”. Mała etykieta: „handel między Morzem Czarnym a Śródziemnym”. Gęsta zabudowa, mury, BEZ bitwy na wodzie. Styl Nowej Ery.",
          ua: "Півострів: Босфор, Золотий Ріг, Європа і Азія. Підпис: Новий Рим."
        }
      }),
      text: {
        pl: [
          ["", em("Konstantynopol"), " leżał na styku ", em("Europy i Azji"), ", nad cieśniną ", em("Bosfor"), " — z Morza Czarnego na Śródziemne. Dlatego był ogromnym centrum ", em("handlu i rzemiosła"), " i słynął z bogactwa."],
          ["Zowano go ", em("Nowym Rzymem"), ": tu siedział cesarz, dwór, Kościół i handel — jak dawniej w Rzymie, tylko na Wschodzie."]
        ],
        ua: [
          ["", em("Константинополь"), " лежав на стику ", em("Європи і Азії"), ", над протокою ", em("Босфор"), " — з Чорного моря в Середземне. Тому був величезним осередком ", em("торгівлі і ремесла"), " і славився багатством."],
          ["Його звали ", em("Новим Римом"), ": тут сидів імператор, двір, Церква і торгівля — як колись у Римі, лише на Сході."]
        ]
      },
      task: {
        id: "h17-bosfor",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego Konstantynopol był bogaty i dlaczego zwano go Nowym Rzymem?",
          ua: "Чому Константинополь був багатий і чому його звали Новим Римом?"
        },
        options: [
          { id: "a", label: { pl: "leżał na Bosforze (handel Europa–Azja); tu był dwór cesarza jak dawniej w Rzymie", ua: "лежав на Босфорі (торгівля Європа–Азія); тут був двір імператора, як колись у Римі" } },
          { id: "b", label: { pl: "bo stał na Forum Romanum nad Tybrem", ua: "бо стояв на Forum Romanum над Тибром" } },
          { id: "c", label: { pl: "bo Justynian przeniósł stolicę do Kartaginy", ua: "бо Юстиніан переніс столицю до Карфагена" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie rzeczy: cieśnina + cesarz. Nie myl z Rzymem z lekcji 14.",
          ua: "Дві речі: протока + імператор. Не плутай з Римом з уроку 14."
        },
        explanation: {
          pl: "KN: położenie → bogactwo; Nowy Rzym. Kartagina to lekcja 13.",
          ua: "KN: положення → багатство; Новий Рим. Карфаген — урок 13."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Miasto murów i hipodromu", ua: "Місто мурів і іподрому" },
      formula: "ok. 500 000 mieszkańców",
      visual: gh("143", {
        kind: "image-placeholder",
        alt: {
          pl: "Rekonstrukcja Konstantynopola: podwójne mury, hipodrom, kopuła świątyni",
          ua: "Реконструкція Константинополя: подвійні мури, іподром, купол храму"
        },
        title: { pl: "Jak Rzym, tylko nad Bosforem", ua: "Як Рим, лише над Босфором" },
        prompt: {
          pl: "Szkolna rekonstrukcja 16:9, dzień. Konstantynopol z lotu ptaka: PODWÓJNE MURY od strony lądu, woda z trzech stron, długi HIPODROM (tor), forum, akwedukt, pałac, kopuła Hagia Sophia w centrum. Podpisy PL: „podwójne mury”; „hipodrom”; „forum”; „akwedukty”. Tytuł: „czasy Justyniana — ok. pół miliona mieszkańców”. Statki spokojnie w porcie. BEZ szturmu, BEZ ognia. Styl Nowej Ery.",
          ua: "Реконструкція: подвійні мури, іподром, форум, акведук, купол. Без штурму."
        }
      }),
      text: {
        pl: [
          ["Miasto otaczały ", em("podwójne mury"), " i wody morza z trzech stron. Za Justyniana liczyło około ", em("pół miliona"), " mieszkańców."],
          ["Na wzór Rzymu: forum, akwedukty, ", em("hipodrom"), " (wyścigi koni), pałac cesarski i liczne kościoły."]
        ],
        ua: [
          ["Місто оточували ", em("подвійні мури"), " і води моря з трьох боків. За Юстиніана мало близько ", em("пів мільйона"), " мешканців."],
          ["На зразок Риму: форум, акведуки, ", em("іподром"), " (кінні перегони), імператорський палац і численні церкви."]
        ]
      },
      task: {
        id: "h17-miasto",
        type: "true-false",
        level: "A",
        question: {
          pl: "Konstantynopol miał podwójne mury, hipodrom i około pół miliona mieszkańców — prawda czy fałsz?",
          ua: "Константинополь мав подвійні мури, іподром і близько пів мільйона мешканців — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Jak Wieczne Miasto z lekcji 14, tylko większe mury i cieśnina.",
          ua: "Як Вічне Місто з уроку 14, лише більші мури і протока."
        },
        explanation: {
          pl: "Prawda. Hipodrom ≠ Koloseum (owal na gladiatorów). Tu tor wyścigów.",
          ua: "Правда. Іподром ≠ Колізей (овал для гладіаторів). Тут трек перегонів."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hagia Sophia", ua: "Ая-Софія" },
      formula: "kościół Mądrości Bożej · aja sofja",
      visual: gh("144", {
        kind: "image-placeholder",
        alt: {
          pl: "Hagia Sophia z wielką kopułą, plan krzyża greckiego, bez minaretów",
          ua: "Ая-Софія з великим куполом, план грецького хреста, без мінаретів"
        },
        title: { pl: "Kopuła Justyniana", ua: "Купол Юстиніана" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie połówki. LEWA: rekonstrukcja VI wieku — Hagia Sophia z OGROMNĄ kopułą, BEZ minaretów (minarety są późniejsze, lekcja „dziś”). Podpis „kopuła”. PRAWA: prosty plan krzyża greckiego (równoramiennego) z kopułą na skrzyżowaniu, etykiety „bęben”; „filary”. Tytuł: „Hagia Sophia — kościół Mądrości Bożej, VI w.”. Mała linia: „przez niemal 1000 lat największa świątynia chrześcijańska”. BEZ wnętrza-tłumu. Styl Nowej Ery.",
          ua: "Ліворуч храм VI ст. з куполом, БЕЗ мінаретів. Праворуч план грецького хреста."
        }
      }),
      text: {
        pl: [
          ["", em("Hagia Sophia"), " (czytaj: ", em("aja sofja"), ") — kościół Mądrości Bożej. Wzniesiona w ", em("VI wieku"), " na rozkaz Justyniana, na planie ", em("krzyża greckiego"), " (równoramiennego), zwieńczona ogromną ", em("kopułą"), "."],
          ["Przez niemal tysiąc lat była największą świątynią chrześcijańską."]
        ],
        ua: [
          ["", em("Ая-Софія"), " — церква Премудрості Божої. Зведена в ", em("VI столітті"), " на наказ Юстиніана, на плані ", em("грецького хреста"), " (рівнораменного), увінчана величезним ", em("куполом"), "."],
          ["Майже тисячу років була найбільшим християнським храмом."]
        ]
      },
      task: {
        id: "h17-hagia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym jest Hagia Sophia?",
          ua: "Чим є Ая-Софія?"
        },
        options: [
          { id: "a", label: { pl: "kościołem Mądrości Bożej z kopułą, wzniesionym w VI w. przez Justyniana", ua: "церквою Премудрості Божої з куполом, зведеною в VI ст. Юстиніаном" } },
          { id: "b", label: { pl: "akweduktem nad Dunajem z lekcji 15", ua: "акведуком над Дунаєм з уроку 15" } },
          { id: "c", label: { pl: "Panteonem wszystkich bogów w Rzymie", ua: "Пантеоном усіх богів у Римі" } }
        ],
        answer: "a",
        hint: {
          pl: "Aja sofja. Kopuła. Nie Panteon (Rzym).",
          ua: "Ая-Софія. Купол. Не Пантеон (Рим)."
        },
        explanation: {
          pl: "Minarety zobaczysz na ekranie „dziś” — dodał je islam, nie Justynian.",
          ua: "Мінарети побачиш на екрані «сьогодні» — їх додав іслам, не Юстиніан."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Styl bizantyjski", ua: "Візантійський стиль" },
      formula: "mozaika · ikona · kopuła",
      visual: gh("145", {
        kind: "image-placeholder",
        alt: {
          pl: "Kolaż: arkady, mozaika, ikona ze złotym tłem",
          ua: "Колаж: аркади, мозаїка, ікона із золотим тлом"
        },
        title: { pl: "Kolor, złoto, drobne kamyki", ua: "Колір, золото, дрібні камінці" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy CZYTELNE pola. 1) arkady — rząd łuków na kolumnach, kościół z zewnątrz. 2) mozaika — Chrystus na tronie, spokojny, ODZIANY, złote tło, z drobnych kamyków (typ Hagia Sophia), BEZ scen kaźni. 3) ikona na desce — Matka Boża z Dzieciątkiem, złote tło, podpis „ikona”. Etykiety PL: „arkady”; „mozaika”; „freski”; „ikona / złote tło”; „kopuły”. Tytuł: „styl bizantyjski”. Styl Nowej Ery.",
          ua: "Три поля: аркади, мозаїка, ікона на золоті. Спокійні, одягнені постаті."
        }
      }),
      text: {
        pl: [
          ["Styl bizantyjski: wspaniałe dekoracje, bogactwo kolorów, ", em("kopuły"), ", ", em("arkady"), " (kolumny połączone łukami), ", em("freski"), " i ", em("mozaiki"), " z tysięcy kamyków."],
          ["", em("Ikona"), " to obraz religijny zwykle na desce: Chrystus, Matka Boża, święci. Cecha: ", em("złote tło"), "."]
        ],
        ua: [
          ["Візантійський стиль: пишні декорації, багатство барв, ", em("куполи"), ", ", em("аркади"), " (колони, з’єднані арками), ", em("фрески"), " і ", em("мозаїки"), " з тисяч камінців."],
          ["", em("Ікона"), " — релігійний образ зазвичай на дошці: Христос, Богородиця, святі. Ознака: ", em("золоте тло"), "."]
        ]
      },
      task: {
        id: "h17-styl",
        type: "true-false",
        level: "A",
        question: {
          pl: "Ikonę poznasz po złotym tle; mozaikę układano z drobnych kamyków — prawda czy fałsz?",
          ua: "Ікону впізнаєш за золотим тлом; мозаїку складали з дрібних камінців — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Dwa słowa z KN: ikona i mozaika.",
          ua: "Два слова з KN: ікона і мозаїка."
        },
        explanation: {
          pl: "Prawda. Fresk = malowidło na ścianie. Nie myl z rzymskim betonem z lekcji 15.",
          ua: "Правда. Фреска = розпис на стіні. Не плутай з римським бетоном з уроку 15."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Nauka i Kodeks", ua: "Наука і Кодекс" },
      formula: "12 ksiąg · spadkobiercy Rzymu",
      visual: gh("146", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta tytułowa Kodeksu oraz cztery dziedziny nauki",
          ua: "Титульна картка Кодексу та чотири галузі науки"
        },
        title: { pl: "Czytali starożytnych, spisali prawo", ua: "Читали давніх, записали право" },
        prompt: {
          pl: "Szkolny slajd 16:9. LEWA: stara karta tytułowa „Corpus Iuris Civilis” / Kodeks Justyniana, podpis „12 ksiąg, ponad 4600 przepisów”. PRAWA: cztery ikony-dziedziny z podpisami PL: „matematyka”; „geografia”; „historia”; „astronomia”. Tytuł: „kontynuowali pracę Greków i Rzymian”. Etykieta: „sami nazywali się Rzymianami”. BEZ sali tortur, BEZ bitwy. Styl Nowej Ery.",
          ua: "Ліворуч кодекс (12 книг). Праворуч: математика, географія, історія, астрономія."
        }
      }),
      text: {
        pl: [
          ["Uczeni kontynuowali pracę ", em("Greków i Rzymian"), ". Czytano dzieła antycznych autorów. Rozwijały się matematyka, geografia, historia, astronomia."],
          ["Na polecenie Justyniana spisano prawo: ", em("Kodeks Justyniana"), " — 12 ksiąg, ponad 4600 przepisów (znasz go z lekcji 15). Sami nazywali się ", em("Rzymianami"), " — spadkobiercami imperium."]
        ],
        ua: [
          ["Учені продовжували працю ", em("греків і римлян"), ". Читали твори античних авторів. Розвивалися математика, географія, історія, астрономія."],
          ["На наказ Юстиніана записали право: ", em("Кодекс Юстиніана"), " — 12 книг, понад 4600 приписів (знаєш з уроку 15). Самі називали себе ", em("римлянами"), " — спадкоємцями імперії."]
        ]
      },
      task: {
        id: "h17-nauka",
        type: "true-false",
        level: "B",
        question: {
          pl: "Bizantyjczycy uważali się za Rzymian i łączyli tradycję grecką z rzymskim prawem — prawda czy fałsz?",
          ua: "Візантійці вважали себе римлянами і поєднували грецьку традицію з римським правом — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: nauka łączyła Rzym i Grecję. Kodeks z lekcji 15.",
          ua: "KN: наука єднала Рим і Грецію. Кодекс з уроку 15."
        },
        explanation: {
          pl: "Prawda. Nie „nowy lud znikąd”. To Wschód tego samego imperium.",
          ua: "Правда. Не «новий народ знікуди». Це Схід тієї самої імперії."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "1453 — koniec Bizancjum", ua: "1453 — кінець Візантії" },
      formula: "1453 n.e.",
      timelineYear: 1453,
      visual: gh("147", {
        kind: "map-placeholder",
        alt: {
          pl: "Schemat oblężenia: strzałki od lądu i morza wokół murów, bez rzezi",
          ua: "Схема облоги: стрілки з суходолу і моря довкола мурів, без різанини"
        },
        title: { pl: "Przyczyna → wydarzenie → skutek", ua: "Причина → подія → наслідок" },
        prompt: {
          pl: "Szkolna mapa-schemat 16:9, NIE obraz bitewny. Półwysep Konstantynopola, mury. Pomarańczowe strzałki „od lądu” i niebieskie „od morza”. Mała ikona armaty ZA murami (nie wybuch). Tytuł: „1453 — Turcy zdobywają miasto”. Trzy ramki PL: „przyczyna — osłabienie + napór Turków”; „wydarzenie — zdobycie 1453”; „skutek — koniec cesarstwa / granica średniowiecza”. BEZ wjazdu sułtana, BEZ ciał, BEZ ognia w mieście. Styl Nowej Ery.",
          ua: "Схема 1453: стрілки з суходолу і моря. Три рамки: причина, подія, наслідок. Без різанини."
        }
      }),
      text: {
        pl: [
          ["Miasto kusiło bogactwem. Przez wieki odpierało ", em("Słowian"), ", ", em("Arabów"), " i ", em("Turków"), ". W końcu cesarz trzymał już głównie stolicę za murami."],
          ["W ", em("1453"), " Turcy oblegli miasto od lądu i morza. Po 53 dniach zdobyli stolicę — ostatni cesarz zginął. To koniec Bizancjum i jedna z dat granicy ", em("średniowiecza"), " i czasów nowożytnych."]
        ],
        ua: [
          ["Місто вабило багатством. Століттями відбивало ", em("слов’ян"), ", ", em("арабів"), " і ", em("турків"), ". Зрештою імператор тримав уже головно столицю за мурами."],
          ["Року ", em("1453"), " турки облягли місто з суходолу і моря. За 53 дні здобули столицю — останній імператор загинув. Це кінець Візантії і одна з дат межі ", em("середньовіччя"), " і нового часу."]
        ]
      },
      task: {
        id: "h17-1453",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Ułóż: przyczyna · wydarzenie 1453 · skutek",
          ua: "Уклади: причина · подія 1453 · наслідок"
        },
        options: [
          { id: "a", label: { pl: "osłabienie i napór Turków · zdobycie Konstantynopola · koniec cesarstwa i symboliczny kres średniowiecza", ua: "ослаблення і натиск турків · здобуття Константинополя · кінець імперії і символічний край середньовіччя" } },
          { id: "b", label: { pl: "edikt mediolański · budowa Panteonu · 753 p.n.e.", ua: "Міланський едикт · будова Пантеону · 753 до н.е." } },
          { id: "c", label: { pl: "wyścigi na hipodromie · 395 · powstanie Aten", ua: "перегони на іподромі · 395 · постання Афін" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: przyczyny i skutki upadku. Rok na osi.",
          ua: "KN: причини і наслідки падіння. Рік на осі."
        },
        explanation: {
          pl: "476 = Zachód. 1453 = Wschód. Nie myl tych dwóch końców.",
          ua: "476 = Захід. 1453 = Схід. Не плутай ці два кінці."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Konstantynopol współcześnie", ua: "Константинополь сьогодні" },
      formula: "Stambuł",
      visual: gh("148", {
        kind: "image-placeholder",
        alt: {
          pl: "Stambuł nad Bosforem: most, miasto po obu stronach, Hagia Sophia z minaretami",
          ua: "Стамбул над Босфором: міст, місто з обох боків, Ая-Софія з мінаретами"
        },
        title: { pl: "To samo miejsce, inna nazwa", ua: "Те саме місце, інша назва" },
        prompt: {
          pl: "Szkolny slajd 16:9, WSPÓŁCZEŚNIE. LEWA: panorama Stambułu nad Bosforem, most, miasto po DWÓCH stronach cieśniny. PRAWA: Hagia Sophia DZISIAJ — z czterema minaretami, podpis „dziś meczet”. Mała mapka Europa/Azja z pinezką. Etykiety PL: „Turcy zmienili nazwę na Stambuł”; „styka się Europa i Bliski Wschód”. BEZ tłumu-chaosu, BEZ flag-agitacji. Styl Nowej Ery.",
          ua: "Ліворуч Стамбул над Босфором. Праворуч Ая-Софія з мінаретами: сьогодні мечеть."
        }
      }),
      text: {
        pl: [
          ["Turcy zmienili nazwę na ", em("Stambuł"), ". Dziś to największe miasto Turcji, po obu stronach Bosforu — spotkanie Europy i Bliskiego Wschodu."],
          ["Hagia Sophia jest obecnie ", em("meczetem"), ". Minarety przy kopule dodał islam — Justynian budował kościół."]
        ],
        ua: [
          ["Турки змінили назву на ", em("Стамбул"), ". Сьогодні це найбільше місто Туреччини, по обидва боки Босфору — зустріч Європи і Близького Сходу."],
          ["Ая-Софія нині ", em("мечеть"), ". Мінарети біля купола додав іслам — Юстиніан будував церкву."]
        ]
      },
      task: {
        id: "h17-dzis",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe: co muzułmanie zmienili w Hagia Sophia?",
          ua: "KN понадбазове: що мусульмани змінили в Ая-Софії?"
        },
        options: [
          { id: "a", label: { pl: "świątynia stała się meczetem; dobudowano minarety", ua: "храм став мечеттю; добудували мінарети" } },
          { id: "b", label: { pl: "zburzono kopułę i przeniesiono budynek do Aten", ua: "зруйнували купол і перенесли будівлю до Афін" } },
          { id: "c", label: { pl: "zamieniono ją w Prawo XII tablic", ua: "перетворили її на Закон XII таблиць" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj zdjęcie bez minaretów (VI w.) i ze minaretami (dziś).",
          ua: "Порівняй світлину без мінаретів (VI ст.) і з мінаретами (сьогодні)."
        },
        explanation: {
          pl: "To WSPÓŁCZEŚNIE. Islam jako religia — lekcja 18, tu tylko los budynku.",
          ua: "Це WSPÓŁCZEŚNIE. Іслам як релігія — урок 18, тут лише доля будівлі."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Bizancjum — cesarstwo wschodniorzymskie, 395–1453", ua: "Візантія — східноримська імперія, 395–1453" },
        { pl: "Konstantynopol / Nowy Rzym — stolica nad Bosforem", ua: "Константинополь / Новий Рим — столиця над Босфором" },
        { pl: "Hagia Sophia (aja sofja) — kościół Mądrości Bożej, kopuła, VI w.", ua: "Ая-Софія — церква Премудрості Божої, купол, VI ст." },
        { pl: "hipodrom — tor wyścigów konnych w Konstantynopolu", ua: "іподром — трек кінних перегонів у Константинополі" },
        { pl: "mozaika / fresk / arkady — kamyki / malowidło na ścianie / rzędy łuków", ua: "мозаїка / фреска / аркади — камінці / розпис на стіні / ряди арок" },
        { pl: "ikona — obraz religijny na desce, zwykle złote tło", ua: "ікона — релігійний образ на дошці, зазвичай золоте тло" },
        { pl: "Kodeks Justyniana — 12 ksiąg prawa rzymskiego", ua: "Кодекс Юстиніана — 12 книг римського права" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Bizancjum to cesarstwo zachodnie ze stolicą w Rzymie. Justynian zbudował Panteon w 753 p.n.e. W 476 Turcy zdobyli Ateny, a Hagia Sophia to akwedukt bez kopuły.”",
        ua: "«Візантія — західна імперія зі столицею в Римі. Юстиніан збудував Пантеон 753 до н.е. Року 476 турки здобули Афіни, а Ая-Софія — акведук без купола.»"
      },
      text: {
        pl: [
          "Bizancjum = Wschód, Konstantynopol, 395–1453. Panteon to Rzym, lekcja 15. Justynian = VI w. 476 = upadek Zachodu. Turcy = 1453. Hagia Sophia = kościół z kopułą."
        ],
        ua: [
          "Візантія = Схід, Константинополь, 395–1453. Пантеон — Рим, урок 15. Юстиніан = VI ст. 476 = падіння Заходу. Турки = 1453. Ая-Софія = церква з куполом."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, kiedy i gdzie istniało Bizancjum oraz jakie były zasługi Justyniana. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, коли і де існувала Візантія та які були заслуги Юстиніана. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: 395–1453, Konstantynopol, Bosfor; VI w., kodeks, Hagia Sophia, Italia i Afryka."
        ],
        ua: [
          "Підказка: 395–1453, Константинополь, Босфор; VI ст., кодекс, Ая-Софія, Італія і Африка."
        ]
      },
      task: {
        id: "h17-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje Bizancjum i Justyniana?",
          ua: "Яке речення найкраще охоплює Візантію і Юстиніана?"
        },
        options: [
          { id: "a", label: { pl: "Wschód od 395 do 1453, stolica nad Bosforem; w VI w. Justynian rozszerzył ziemie, spisał prawo i wzniósł Hagia Sophia", ua: "Схід від 395 до 1453, столиця над Босфором; у VI ст. Юстиніан розширив землі, записав право і звів Ая-Софію" } },
          { id: "b", label: { pl: "Zachód trwał do 1453, a Justynian napisał Eneidę w Sparcie", ua: "Захід тривав до 1453, а Юстиніан написав Енеїду в Спарті" } },
          { id: "c", label: { pl: "Bizancjum to Egipt faraonów z piramidami", ua: "Візантія — це Єгипет фараонів з пірамідами" } }
        ],
        answer: "a",
        hint: {
          pl: "NACOBEZU: kiedy/gdzie + zasługi. Dwie daty z osi.",
          ua: "NACOBEZU: коли/де + заслуги. Дві дати з осі."
        },
        explanation: {
          pl: "Zachód skończył się w 476. Eneida to Wergiliusz.",
          ua: "Захід скінчився 476. Енеїда — Вергілій."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Podział a chrześcijaństwo", ua: "Поділ і християнство" },
      task: {
        id: "h17-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe: jaki skutek miał podział cesarstwa dla chrześcijaństwa?",
          ua: "KN понадбазове: який наслідок мав поділ імперії для християнства?"
        },
        options: [
          { id: "a", label: { pl: "na Wschodzie cesarz w Konstantynopolu był też zwierzchnikiem Kościoła; na Zachodzie rósł autorytet papieża w Rzymie", ua: "на Сході імператор у Константинополі був також предстоятелем Церкви; на Заході зростав авторитет папи в Римі" } },
          { id: "b", label: { pl: "wszyscy natychmiast przeszli na islam w 395", ua: "усі миттєво перейшли на іслам 395 року" } },
          { id: "c", label: { pl: "zniesiono Biblię i wrócono do Zeusa", ua: "скасували Біблію і повернулися до Зевса" } }
        ],
        answer: "a",
        hint: {
          pl: "Cesarz = reprezentant Boga (ten ekran). Papież = lekcja 16, Rzym.",
          ua: "Імператор = представник Бога (цей екран). Папа = урок 16, Рим."
        },
        explanation: {
          pl: "Islam to lekcja 18. 395 nie zmienia religii z dnia na dzień — rozchodzą się drogi Wschodu i Zachodu.",
          ua: "Іслам — урок 18. 395 не змінює релігію за день — розходяться шляхи Сходу і Заходу."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h17-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 395 · Justynian · 1453",
          ua: "Добери: 395 · Юстиніан · 1453"
        },
        options: [
          { id: "a", label: { pl: "395 — podział, powstaje Bizancjum; Justynian — VI w., kodeks i Hagia Sophia; 1453 — Turcy zdobywają Konstantynopol", ua: "395 — поділ, постає Візантія; Юстиніан — VI ст., кодекс і Ая-Софія; 1453 — турки здобувають Константинополь" } },
          { id: "b", label: { pl: "395 — Wezuwiusz; Justynian — Horacy; 1453 — Prawo XII tablic", ua: "395 — Везувій; Юстиніан — Горацій; 1453 — Закон XII таблиць" } },
          { id: "c", label: { pl: "395 — 753 p.n.e.; Justynian — Spartakus; 1453 — edykt mediolański", ua: "395 — 753 до н.е.; Юстиніан — Спартак; 1453 — Міланський едикт" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty z KN na osi i cesarz z VI wieku.",
          ua: "Дві дати з KN на осі й імператор VI століття."
        },
        explanation: {
          pl: "313 = edykt. 79 = Pompeje. 476 = Zachód. To KN.",
          ua: "313 = едикт. 79 = Помпеї. 476 = Захід. Це KN."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Cesarstwo wschodniorzymskie, zwane bizantyjskim, istniało w latach 395–1453. Czasy największej świetności to VI wiek, gdy Justynian I Wielki rozszerzył terytorium i nakazał spisanie praw.",
          ["395–1453", "VI wiek", "Justynian I Wielki"],
          "Східноримська імперія, звана візантійською, існувала в 395–1453 роках. Часи найбільшого розквіту — VI століття, коли Юстиніан I Великий розширив територію і велів записати закони.",
          ["395–1453", "VI століття", "Юстиніан I Великий"]
        ),
        mark(
          "Stolicą był Konstantynopol nad Bosforem: dwór cesarski, centrum religijne i handlowe. Najsławniejsza budowla — Hagia Sophia, kościół Mądrości Bożej z kopułą. Styl bizantyjski: dekoracje, mozaiki, ikony.",
          ["Konstantynopol", "Hagia Sophia", "ikony"],
          "Столицею був Константинополь над Босфором: двір імператора, релігійний і торговельний осередок. Найславетніша споруда — Ая-Софія, церква Премудрості Божої з куполом. Візантійський стиль: декорації, мозаїки, ікони.",
          ["Константинополь", "Ая-Софія", "ікони"]
        ),
        mark(
          "W 1453 Turcy zdobyli Konstantynopol. To koniec cesarstwa bizantyjskiego i jedna z dat uznawanych za kres średniowiecza. Dziś miasto nazywa się Stambuł.",
          ["1453", "Turcy", "Stambuł"],
          "Року 1453 турки здобули Константинополь. Це кінець візантійської імперії і одна з дат, які вважають кінцем середньовіччя. Сьогодні місто називається Стамбул.",
          ["1453", "турки", "Стамбул"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Arabowie i początki islamu — nowa religia i nowa cywilizacja na południe od Bizancjum.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: араби і початки ісламу — нова релігія і нова цивілізація на південь від Візантії.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "F1-1iHSFizw",
        title: {
          pl: "Krótkie Lekcje: Bizancjum w czasach świetności",
          ua: "Короткі уроки: Візантія в часи розквіту"
        }
      }
    }
  ]
};
