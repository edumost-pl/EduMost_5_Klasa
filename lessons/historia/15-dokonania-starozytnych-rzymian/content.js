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
      heading: { pl: "Dokonania starożytnych Rzymian", ua: "Досягнення стародавніх римлян" },
      formula: "V w. p.n.e. · VI w. n.e.",
      text: {
        pl: [
          "Z lekcji 14 znasz forum i igrzyska. Dziś nie spacer — dokonania: budowle, drogi, wiersze i prawo.",
          "Trzy pytania: jakie były największe osiągnięcia architektów, jak Grecy wpłynęli na Rzymian, jaki był dorobek prawa. Na osi nowa data n.e.: VI wiek — Justynian."
        ],
        ua: [
          "З уроку 14 знаєш форум і ігри. Сьогодні не прогулянка — досягнення: будівлі, дороги, вірші і право.",
          "Три питання: які були найбільші досягнення архітекторів, як греки вплинули на римлян, який був доробок права. На осі нова дата н.е.: VI століття — Юстиніан."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać wielkie budowle: akwedukt, Panteon, Koloseum, łuk triumfalny, kolumnę Trajana", ua: "вказати великі будівлі: акведук, Пантеон, Колізей, тріумфальну арку, колону Траяна" },
        { pl: "wyjaśnić, po co Rzymianom były drogi, beton, łuki i kopuły", ua: "пояснити, навіщо римлянам були дороги, бетон, арки і куполи" },
        { pl: "powiedzieć, kim byli Wergiliusz i Horacy oraz jak Grecy wpłynęli na literaturę", ua: "сказати, ким були Вергілій і Горацій та як греки вплинули на літературу" },
        { pl: "podać Prawo XII tablic (V w. p.n.e.) i Kodeks Justyniana (VI w. n.e.) oraz dwie zasady żywe dziś", ua: "подати Закон XII таблиць (V ст. до н.е.) і Кодекс Юстиніана (VI ст. н.е.) та дві засади, живі сьогодні" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Akwedukty — woda z gór", ua: "Акведуки — вода з гір" },
      formula: "akwedukt = wodociąg",
      visual: gh("117", {
        kind: "image-placeholder",
        alt: {
          pl: "Pont du Gard: trzypiętrowy akwedukt na łukach nad rzeką",
          ua: "Пон-дю-Гар: триповерховий акведук на арках над річкою"
        },
        title: { pl: "Łuki jak most, w środku woda", ua: "Арки як міст, усередині вода" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9, dzień, styl Nowej Ery. Pont du Gard we Francji: TRZY poziomy kamiennych łuków nad błękitną rzeką, zieleń na brzegach. Duży podpis PL: „akwedukt — wodociąg”. Małe etykiety: „łuki”; „woda z górskich źródeł”; „jak most + rura”. BEZ turystów-chaosu. Widać od razu: to nie świątynia i nie arena, to most na wodę.",
          ua: "Пон-дю-Гар: три яруси арок над річкою. Підпис: акведук — водогін."
        }
      }),
      text: {
        pl: [
          ["Rzymianie byli doskonałymi ", em("budowniczymi"), ". ", em("Akwedukty"), " sprowadzały wodę z górskich źródeł na wysokich ", em("łukach"), " — wyglądały jak mosty, a pełniły funkcję wodociągu."],
          ["Takie budowle stały nie tylko w Italii: Pont du Gard we Francji stoi do dziś."]
        ],
        ua: [
          ["Римляни були досконалими ", em("будівничими"), ". ", em("Акведуки"), " вели воду з гірських джерел на високих ", em("арках"), " — виглядали як мости, а були водогоном."],
          ["Такі споруди стояли не лише в Італії: Пон-дю-Гар у Франції стоїть досі."]
        ]
      },
      task: {
        id: "h15-akw",
        type: "true-false",
        level: "A",
        question: {
          pl: "Akwedukt to wodociąg na łukach, który niesie wodę z gór — prawda czy fałsz?",
          ua: "Акведук — водогін на арках, що несе воду з гір — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Z lekcji 14 znasz słowo. Tu widać, JAK to wygląda.",
          ua: "З уроку 14 знаєш слово. Тут видно, ЯК це виглядає."
        },
        explanation: {
          pl: "Prawda. Łuk niesie ciężar. To nie Koloseum.",
          ua: "Правда. Арка несе вагу. Це не Колізей."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Beton, łuk, kopuła — Panteon", ua: "Бетон, арка, купол — Пантеон" },
      formula: "Panteon · świątynia wszystkich bogów",
      visual: gh("118", {
        kind: "image-placeholder",
        alt: {
          pl: "Panteon: kolumnowy portyk oraz wnętrze kopuły z okrągłym otworem",
          ua: "Пантеон: колонний портик і середина купола з круглим отвором"
        },
        title: { pl: "Kopuła z dziurą na niebo", ua: "Купол із дірою на небо" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie CZYTELNE połówki. LEWA: Panteon w Rzymie — portyk z korynckimi kolumnami i trójkątnym frontonem, podpis „Panteon — świątynia wszystkich bogów”. PRAWA: wnętrze kopuły, kwadratowe kasetony, okrągły oculus ze snopem światła, podpis „kopuła + beton”. BEZ tłumu, BEZ ołtarza chrześcijańskiego jako tematu lekcji. Widać od razu: okrągła świątynia z dziurą w dachu. Styl Nowej Ery.",
          ua: "Ліворуч портик Пантеону. Праворуч купол з окулусом. Підписи: храм усіх богів; купол і бетон."
        }
      }),
      text: {
        pl: [
          ["Rzymianie wynaleźli ", em("beton"), ". Dzięki niemu stawiali ", em("łuki"), " i ", em("kopuły"), "."],
          ["", em("Panteon"), " („świątynia wszystkich bogów”) to okrągła świątynia z ogromną kopułą i otworem na szczycie. Wpływ Greków widać w kolumnach; kopuła to już rzymski pomysł."]
        ],
        ua: [
          ["Римляни винайшли ", em("бетон"), ". Завдяки йому ставили ", em("арки"), " і ", em("куполи"), "."],
          ["", em("Пантеон"), " («храм усіх богів») — круглий храм з величезним куполом і отвором нагорі. Вплив греків видно в колонах; купол — уже римська думка."]
        ]
      },
      task: {
        id: "h15-beton",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co pozwoliło Rzymianom budować kopuły takie jak w Panteonie?",
          ua: "Що дозволило римлянам будувати куполи, як у Пантеоні?"
        },
        options: [
          { id: "a", label: { pl: "beton oraz łuk", ua: "бетон і арка" } },
          { id: "b", label: { pl: "tylko papirus z Egiptu", ua: "лише папірус з Єгипту" } },
          { id: "c", label: { pl: "brak jakichkolwiek fundamentów", ua: "відсутність будь-яких фундаментів" } }
        ],
        answer: "a",
        hint: {
          pl: "Nowy materiał + kształt z filmu.",
          ua: "Новий матеріал + форма з фільму."
        },
        explanation: {
          pl: "Kolumny są z greckiej szkoły. Kopuła i beton — rzymskie.",
          ua: "Колони — з грецької школи. Купол і бетон — римські."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Koloseum — amfiteatr", ua: "Колізей — амфітеатр" },
      formula: "amfiteatr Flawiuszów",
      visual: gh("119", {
        kind: "image-placeholder",
        alt: {
          pl: "Koloseum z zewnątrz: owal, arkady, bez walki na arenie",
          ua: "Колізей зовні: овал, аркади, без бою на арені"
        },
        title: { pl: "Owal na igrzyska, nie na mieszkanie", ua: "Овал для ігор, не для житла" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9, Koloseum W CAŁOŚCI o zachodzie lub w dzień: owal, rzędy łuków, ciepły kamień. Pusty pierwszy plan albo ludzie IDĄ obok, nie walczą. Podpis PL: „Koloseum — amfiteatr Flawiuszów”. Mała etykieta: „igrzyska (zapasy, widowiska)”. BEZ gladiatorów w walce, BEZ zwierząt, BEZ bitwy morskiej, BEZ krwi. Inny kadr niż lekcja 14: tu widać BUDOWLĘ jako osiągnięcie, nie chleb i igrzyska.",
          ua: "Колізей-овал, аркади. Без бою. Підпис: амфітеатр Флавіїв."
        }
      }),
      text: {
        pl: [
          ["", em("Koloseum"), " (amfiteatr Flawiuszów) to owalna budowla na igrzyska. W środku bywały zapasy i widowiska — tego nie rysujemy."],
          ["Inny wielki gmach widowisk to ", em("Circus Maximus"), ": wyścigi rydwanów, nie amfiteatr. Zapamiętaj kształt: Koloseum = owal z arkadami."]
        ],
        ua: [
          ["", em("Колізей"), " (амфітеатр Флавіїв) — овальна споруда для ігор. Усередині бували змагання і видовища — цього не малюємо."],
          ["Інша велика споруда видовищ — ", em("Circus Maximus"), ": перегони колісниць, не амфітеатр. Запам’ятай форму: Колізей = овал з аркадами."]
        ]
      },
      task: {
        id: "h15-kol",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym jest Koloseum?",
          ua: "Чим є Колізей?"
        },
        options: [
          { id: "a", label: { pl: "amfiteatrem: owalna budowla na igrzyska", ua: "амфітеатром: овальна споруда для ігор" } },
          { id: "b", label: { pl: "akweduktem nad rzeką", ua: "акведуком над річкою" } },
          { id: "c", label: { pl: "świątynią z kopułą i oculusem", ua: "храмом з куполом і окулусом" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie myl z Panteonem (dziura w dachu) ani z Pont du Gard (woda).",
          ua: "Не плутай з Пантеоном (діра в даху) і Пон-дю-Гар (вода)."
        },
        explanation: {
          pl: "To zadanie „co to za budowla?”. Panteon = kopuła. Akwedukt = łuki nad wodą.",
          ua: "Це завдання «що це за будівля?». Пантеон = купол. Акведук = арки над водою."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Łuk triumfalny", ua: "Тріумфальна арка" },
      formula: "łuk Konstantyna",
      visual: gh("120", {
        kind: "image-placeholder",
        alt: {
          pl: "Łuk triumfalny Konstantyna: trzy przęsła, kolumny, reliefy",
          ua: "Тріумфальна арка Костянтина: три прольоти, колони, рельєфи"
        },
        title: { pl: "Brama zwycięstwa, nie dom", ua: "Брама перемоги, не дім" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9, dzień. Łuk triumfalny Konstantyna w Rzymie: TRZY przęsła, korynckie kolumny, rzeźbione płyciny, niebo. Podpis PL: „Łuk triumfalny Konstantyna Wielkiego”. Mała etykieta: „wznoszony dla zwycięskiego wodza”. BEZ wojska w ataku, BEZ krwi. Konstantyna znasz z lekcji 13 — tu budowla, nie nowa biografia. Styl Nowej Ery.",
          ua: "Арка Костянтина, три прольоти. Підпис: тріумфальна арка. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Łuki triumfalne"), " to charakterystyczne budowle Rzymu: kamienna „brama” stawiana na cześć zwycięskiego wodza."],
          ["Do najsławniejszych należy ", em("łuk Konstantyna Wielkiego"), " przy Koloseum. Konstantyna znasz z lekcji 13."]
        ],
        ua: [
          ["", em("Тріумфальні арки"), " — характерні споруди Риму: кам’яна «брама» на честь переможного вождя."],
          ["До найславетніших належить ", em("арка Костянтина Великого"), " біля Колізею. Костянтина знаєш з уроку 13."]
        ]
      },
      task: {
        id: "h15-luk",
        type: "true-false",
        level: "A",
        question: {
          pl: "Łuk triumfalny stawiano na cześć zwycięskiego wodza — prawda czy fałsz?",
          ua: "Тріумфальну арку ставили на честь переможного вождя — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To nie akwedukt i nie kopuła.",
          ua: "Це не акведук і не купол."
        },
        explanation: {
          pl: "Prawda. W Zapamiętaj: akwedukty, bazyliki, świątynie, łuki, amfiteatry.",
          ua: "Правда. У Запам’ятай: акведуки, базиліки, храми, арки, амфітеатри."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kolumna Trajana", ua: "Колона Траяна" },
      formula: "wstęga rzeźb · ≈ 40 m",
      visual: gh("121", {
        kind: "image-placeholder",
        alt: {
          pl: "Kolumna Trajana na placu: wysoki trzon ze spiralną wstęgą, bez scen walki",
          ua: "Колона Траяна на площі: високий стовбур зі спіральною стрічкою, без сцен бою"
        },
        title: { pl: "Książka historii nawinięta na słup", ua: "Книга історії, намотана на стовп" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9, dzień. Kolumna Trajana w Rzymie: wysoki marmurowy słup ze SPIRALNĄ wstęgą reliefu (widać wzór taśmy, NIE zbliżenie żołnierzy w rzezi), baza, w tle gmachy. Podpis PL: „Kolumna Trajana”. Etykiety: „ok. 40 m”; „wstęga płaskorzeźb — historia wyprawy”. BEZ krwi, BEZ ściętych głów, BEZ bitwy jako głównego kadru. Styl Nowej Ery.",
          ua: "Колона Траяна, спіральна стрічка як візерунок, без бою зблизька."
        }
      }),
      text: {
        pl: [
          ["", em("Kolumna Trajana"), " ma około 40 metrów. Owija ją wstęga płaskorzeźb — jak ilustrowany podręcznik wyprawy cesarza Trajana."],
          ["Patrzymy na kolumnę jako dzieło sztuki i pamięci, nie na sceny boju."]
        ],
        ua: [
          ["", em("Колона Траяна"), " має близько 40 метрів. Її обвиває стрічка рельєфів — як ілюстрований підручник походу імператора Траяна."],
          ["Дивимось на колону як на твір мистецтва і пам’яті, не на сцени бою."]
        ]
      },
      task: {
        id: "h15-traj",
        type: "true-false",
        level: "B",
        question: {
          pl: "Kolumna Trajana to akwedukt doprowadzający wodę do Forum — prawda czy fałsz?",
          ua: "Колона Траяна — акведук, що веде воду на Форум — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Wstęga rzeźb na słupie, nie koryto na łukach.",
          ua: "Стрічка різьб на стовпі, не корито на арках."
        },
        explanation: {
          pl: "Fałsz. To pomnik-opowieść. Wodę niosą akwedukty.",
          ua: "Неправда. Це пам’ятник-оповідь. Воду несуть акведуки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wszystkie drogi prowadzą do Rzymu", ua: "Усі дороги ведуть до Риму" },
      formula: "kamień milowy",
      visual: gh("122", {
        kind: "image-placeholder",
        alt: {
          pl: "Przekrój drogi rzymskiej warstwami oraz biały kamień milowy przy trakcie",
          ua: "Переріз римської дороги шарами та білий мільний камінь біля тракту"
        },
        title: { pl: "Warstwy kamienia i słupek z odległością", ua: "Шари каменя і стовпчик з відстанню" },
        prompt: {
          pl: "Szkolna ilustracja 16:9, dzień, styl Nowej Ery. LEWA: przekrój drogi jak schemat: na dole duże kamienie, potem żwir, na wierzchu płaskie płyty; podpis „warstwy — żeby droga nie pękała”. PRAWA: prosta kamienna droga w krajobrazie, przy krawędzi biały walcowaty kamień milowy z napisem „RZYM”, podpis „kamień milowy — odległość od Rzymu”. Ludzie w tunikach układają płyty (praca, nie bitwa). Tytuł: „Wszystkie drogi prowadzą do Rzymu”. BEZ bata, BEZ wojska w szarży.",
          ua: "Переріз дороги шарами. Мільний камінь «Рим». Підпис: усі дороги ведуть до Риму."
        }
      }),
      text: {
        pl: [
          ["Ziemię usuwano, kamienie kładziono ", em("warstwami"), " — droga była trwała. Przy trakcie stał ", em("kamień milowy"), ": odległość od Rzymu."],
          ["Sieć liczyła tysiące kilometrów: wojsko i handel. Najważniejsze szlaki zbiegały się w stolicy. Stąd: ", em("wszystkie drogi prowadzą do Rzymu"), "."]
        ],
        ua: [
          ["Землю знімали, камінь клали ", em("шарами"), " — дорога була тривка. Біля тракту стояв ", em("мільний камінь"), ": відстань від Риму."],
          ["Мережа мала тисячі кілометрів: військо і торгівля. Найважливіші шляхи збігалися в столиці. Звідси: ", em("усі дороги ведуть до Риму"), "."]
        ]
      },
      task: {
        id: "h15-drogi",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po co stawiano kamienie milowe?",
          ua: "Навіщо ставили мільні камені?"
        },
        options: [
          { id: "a", label: { pl: "żeby podać odległość od Rzymu", ua: "щоб подати відстань від Риму" } },
          { id: "b", label: { pl: "żeby zastąpić kopułę Panteonu", ua: "щоб замінити купол Пантеону" } },
          { id: "c", label: { pl: "żeby spisać Prawo XII tablic", ua: "щоб записати Закон XII таблиць" } }
        ],
        answer: "a",
        hint: {
          pl: "Mila = miara drogi. Strzałka do Rzymu.",
          ua: "Міля = міра дороги. Стрілка до Риму."
        },
        explanation: {
          pl: "Drogi służyły wojsku i kupcom. Prawo to osobny temat.",
          ua: "Дороги служили війську і купцям. Право — окрема тема."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wergiliusz", ua: "Вергілій" },
      formula: "Eneida",
      visual: gh("123", {
        kind: "image-placeholder",
        alt: {
          pl: "Mozaika lub popiersie Wergiliusza z zwojem",
          ua: "Мозаїка або погруддя Вергілія зі звоєм"
        },
        title: { pl: "Poeta Eneidy", ua: "Поет Енеїди" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Spokojna mozaika/popiersie mężczyzny w TODZE z zwojem (Wergiliusz). BEZ bitwy o Troję, BEZ nagości muz jako tematu — jeśli muzy, to stojące w długich szatach z boku. Cztery punkty PL: „kto — Wergiliusz, poeta”; „skąd — Italia, kultura pod wpływem Greków”; „lata — przełom I w. p.n.e. i I w. n.e.”; „wsławił się — Eneida: losy Eneasza, przodka założycieli Rzymu”. Podpis: „Wergiliusz”. Styl Nowej Ery.",
          ua: "Портрет Вергілія зі звоєм. Пункти: поет; Італія, вплив греків; рубіж ер; Енеїда, Еней."
        }
      }),
      text: {
        pl: [
          ["Literatura rzymska rosła pod silnym wpływem ", em("Greków"), ". Rozkwit: przełom I w. p.n.e. i I w. n.e."],
          ["", em("Wergiliusz"), " napisał ", em("Eneidę"), ": losy Eneasza, uciekiniera z Troi, przodka legendarnych założycieli Rzymu (Romulusa z lekcji 12)."]
        ],
        ua: [
          ["Римська література росла під сильним впливом ", em("греків"), ". Розквіт: рубіж I ст. до н.е. і I ст. н.е."],
          ["", em("Вергілій"), " написав ", em("Енеїду"), ": долю Енея, втікача з Трої, предка легендарних засновників Риму (Ромула з уроку 12)."]
        ]
      },
      task: {
        id: "h15-wer",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się najważniejszy utwór Wergiliusza? Wpisz tytuł.",
          ua: "Як називається найважливіший твір Вергілія? Введи назву."
        },
        answer: ["eneida", "eneidę", "енеїда", "енеїду", "aeneis", "aeneid"],
        hint: {
          pl: "Od imienia Eneasza.",
          ua: "Від імені Енея."
        },
        explanation: {
          pl: "Eneida. To most do mitu o początku Rzymu, nie nowa data na osi.",
          ua: "Енеїда. Це місток до міту про початок Риму, не нова дата на осі."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Horacy", ua: "Горацій" },
      formula: "ody",
      visual: gh("124", {
        kind: "image-placeholder",
        alt: {
          pl: "Rzymski relief z portretem Horacego",
          ua: "Римський рельєф із портретом Горація"
        },
        title: { pl: "Pieśni zwane odami", ua: "Пісні, звані одами" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Kamienny relief: profil mężczyzny w tunice/todze, zwój lub małe naczynie (Horacy, typ Museum of Fine Arts — spokojny, ODZIANY). Cztery punkty PL: „kto — Horacy, poeta”; „skąd — Rzym, szkoła grecka”; „lata — I w. p.n.e. / I w. n.e.”; „wsławił się — ody: wiersze biesiadne, religijne, okolicznościowe”. Podpis: „Horacy”. BEZ pijackiej orgii. Styl Nowej Ery.",
          ua: "Рельєф Горація. Пункти: поет; Рим, грецька школа; I ст.; оди."
        }
      }),
      text: {
        pl: [
          ["", em("Horacy"), " pisał ", em("ody"), " — wiersze o uczcie, religii albo ważnej chwili."],
          ["Razem z Wergiliuszem to dwaj najwybitniejsi poeci, których wymaga zeszyt. Wpływ Greków: gatunki i wzory, rzymskie imiona i tematy."]
        ],
        ua: [
          ["", em("Горацій"), " писав ", em("оди"), " — вірші про бенкет, релігію або важливу мить."],
          ["Разом із Вергілієм це двоє найвидатніших поетів, яких вимагає зошит. Вплив греків: жанри і зразки, римські імена і теми."]
        ]
      },
      task: {
        id: "h15-hor",
        type: "true-false",
        level: "A",
        question: {
          pl: "Horacy zasłynął jako autor ód — prawda czy fałsz?",
          ua: "Горацій уславився як автор од — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Wergiliusz = Eneida. Horacy = ody.",
          ua: "Вергілій = Енеїда. Горацій = оди."
        },
        explanation: {
          pl: "Prawda. Nie myl z Justynianem (prawo) ani z Trajanem (kolumna).",
          ua: "Правда. Не плутай з Юстиніаном (право) і Траяном (колона)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Prawo XII tablic", ua: "Закон XII таблиць" },
      formula: "V w. p.n.e.",
      visual: gh("125", {
        kind: "image-placeholder",
        alt: {
          pl: "Brązowe tablice prawa na Forum oraz posąg Iustitii z wagą",
          ua: "Бронзові таблиці права на Форумі та статуя Юстиції з терезами"
        },
        title: { pl: "Prawo widać na tablicy", ua: "Право видно на таблиці" },
        prompt: {
          pl: "Szkolny slajd 16:9. LEWA: Forum, kilka dużych BRĄZOWYCH tablic z rzymskimi literami na postumencie, ludzie w togach czytają, podpis „Prawo XII tablic — V w. p.n.e. na Forum Romanum”. PRAWA: spokojny posąg Iustitii — kobieta z WAGĄ i opuszczonym mieczem, nie w ataku, podpis „Iustitia — sprawiedliwość”. BEZ egzekucji, BEZ sądu-horroru. Styl Nowej Ery.",
          ua: "Ліворуч XII таблиць на Форумі. Праворуч Юстиція з терезами. Підпис: V ст. до н.е."
        }
      }),
      text: {
        pl: [
          ["Najpierw obowiązywało ", em("prawo zwyczajowe"), " — tradycja, niespisana. W ", em("V wieku p.n.e."), " spisano ", em("Prawo XII tablic"), " i wystawiono je na ", em("Forum Romanum"), "."],
          ["Silne państwo miało mieć mądre, widoczne prawo. Tablice zawierały przepisy cywilne, karne i inne — na klasę 5 wystarczy: pierwszy spisany zbiór."]
        ],
        ua: [
          ["Спочатку діяло ", em("звичаєве право"), " — традиція, незаписана. У ", em("V столітті до н.е."), " записали ", em("Закон XII таблиць"), " і виставили на ", em("Forum Romanum"), "."],
          ["Сильна держава мала мати мудре, видиме право. Таблиці мали приписи цивільні, карні та інші — для 5 класу досить: перший записаний збір."]
        ]
      },
      task: {
        id: "h15-xii",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kiedy spisano Prawo XII tablic i gdzie je wystawiono?",
          ua: "Коли записали Закон XII таблиць і де його виставили?"
        },
        options: [
          { id: "a", label: { pl: "w V w. p.n.e. na Forum Romanum", ua: "у V ст. до н.е. на Forum Romanum" } },
          { id: "b", label: { pl: "w VI w. n.e. w Panteonie", ua: "у VI ст. н.е. в Пантеоні" } },
          { id: "c", label: { pl: "w 79 n.e. w Pompejach", ua: "у 79 н.е. в Помпеях" } }
        ],
        answer: "a",
        hint: {
          pl: "Wiek piąty przed naszą erą. Plac z lekcji 14.",
          ua: "П’яте століття до нашої ери. Площа з уроку 14."
        },
        explanation: {
          pl: "VI w. n.e. to Justynian, nie tablice. To punkt z zeszytu.",
          ua: "VI ст. н.е. — Юстиніан, не таблиці. Це пункт із зошита."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Justynian I Wielki", ua: "Юстиніан I Великий" },
      formula: "VI w. n.e.",
      timelineId: "justynian",
      visual: gh("126", {
        kind: "image-placeholder",
        alt: {
          pl: "Mozaikowy portret cesarza Justyniana w koronie i płaszczu",
          ua: "Мозаїчний портрет імператора Юстиніана в короні і плащі"
        },
        title: { pl: "Zbiór praw Wschodu", ua: "Збір законів Сходу" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Mozaika Justyniana: cesarz w koronie i ciężkim płaszczu, spokojne spojrzenie, złote tło (typ San Vitale) — BEZ bitwy, BEZ korony zdzieranej. Cztery punkty PL: „kto — Justynian I Wielki, cesarz wschodniorzymski”; „skąd — Konstantynopol / cesarstwo wschodnie”; „lata — VI wiek n.e.”; „wsławił się — zebrał prawa w Kodeks Justyniana”. Podpis: „Justynian I Wielki”. Styl Nowej Ery.",
          ua: "Мозаїка Юстиніана. Пункти: імператор Сходу; Константинополь; VI ст. н.е.; Кодекс Юстиніана."
        }
      }),
      text: {
        pl: [
          ["Przez wieki dodawano kolejne prawa. W ", em("VI wieku n.e."), " cesarz wschodniorzymski ", em("Justynian I Wielki"), " zebrał je w ", em("Kodeksie Justyniana"), "."],
          ["Zachód upadł w 476 (lekcja 13). Wschód trwał — i spisał prawo, z którego Europa korzysta do dziś."]
        ],
        ua: [
          ["Протягом віків додавали нові закони. У ", em("VI столітті н.е."), " східноримський імператор ", em("Юстиніан I Великий"), " зібрав їх у ", em("Кодексі Юстиніана"), "."],
          ["Захід упав 476 (урок 13). Схід тривав — і записав право, з якого Європа користає досі."]
        ]
      },
      task: {
        id: "h15-just",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kodeks Justyniana spisano w VI w. n.e. we wschodnim cesarstwie — prawda czy fałsz?",
          ua: "Кодекс Юстиніана записали в VI ст. н.е. у східній імперії — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Na osi ta data stoi już po 476.",
          ua: "На осі ця дата стоїть уже після 476."
        },
        explanation: {
          pl: "Prawda. V w. p.n.e. = XII tablic. VI w. n.e. = kodeks. Nie myl wieków i er.",
          ua: "Правда. V ст. до н.е. = XII таблиць. VI ст. н.е. = кодекс. Не плутай століття і ери."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Prawo rzymskie dziś", ua: "Римське право сьогодні" },
      formula: "współcześnie",
      visual: gh("127", {
        kind: "image-placeholder",
        alt: {
          pl: "Gmach Sądu Najwyższego w Warszawie oraz dwie zasady na tabliczkach",
          ua: "Будинок Верховного Суду у Варшаві та дві засади на табличках"
        },
        title: { pl: "Dwie zasady, które znasz ze szkoły", ua: "Дві засади, які знаєш зі школи" },
        prompt: {
          pl: "Szkolny slajd 16:9. PRAWA: zdjęcie gmachu Sądu Najwyższego w Warszawie (szkło, zielone kolumny, flagi Polski), podpis „WSPÓŁCZEŚNIE”. LEWA: dwie duże tabliczki PL: „prawo nie działa wstecz”; „należy wysłuchać obydwu stron”. Tytuł: „wiele przepisów ma korzenie w prawie rzymskim”. BEZ sali rozpraw z oskarżonym. Styl Nowej Ery.",
          ua: "Будинок суду. Дві таблички: право не діє назад; треба вислухати обидві сторони."
        }
      }),
      text: {
        pl: [
          ["Wiele dzisiejszych przepisów ma korzenie w prawie rzymskim."],
          ["Dwie zasady do zeszytu: ", em("prawo nie działa wstecz"), " oraz ", em("należy wysłuchać obydwu stron"), "."]
        ],
        ua: [
          ["Багато сьогоднішніх приписів має коріння в римському праві."],
          ["Дві засади до зошита: ", em("право не діє назад"), " і ", em("треба вислухати обидві сторони"), "."]
        ]
      },
      task: {
        id: "h15-dzis",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zasady z prawa rzymskiego żyją we współczesnym prawie?",
          ua: "Які засади з римського права живуть у сучасному праві?"
        },
        options: [
          { id: "a", label: { pl: "prawo nie działa wstecz; należy wysłuchać obydwu stron", ua: "право не діє назад; треба вислухати обидві сторони" } },
          { id: "b", label: { pl: "tylko panem et circenses", ua: "лише panem et circenses" } },
          { id: "c", label: { pl: "tylko kamień milowy na autostradzie A2", ua: "лише мільний камінь на автостраді A2" } }
        ],
        answer: "a",
        hint: {
          pl: "Film: dwie sentencje, nie igrzyska.",
          ua: "Фільм: дві сентенції, не ігри."
        },
        explanation: {
          pl: "To WSPÓŁCZEŚNIE z podręcznika. Igrzyska i drogi to inne ekrany.",
          ua: "Це WSPÓŁCZEŚNIE з підручника. Ігри і дороги — інші екрани."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "akwedukt — wodociąg na łukach, woda z gór", ua: "акведук — водогін на арках, вода з гір" },
        { pl: "beton · łuk · kopuła — materiał i kształty rzymskich budowli", ua: "бетон · арка · купол — матеріал і форми римських будівель" },
        { pl: "Panteon — świątynia wszystkich bogów, kopuła z otworem", ua: "Пантеон — храм усіх богів, купол з отвором" },
        { pl: "amfiteatr / łuk triumfalny — igrzyska / brama zwycięstwa", ua: "амфітеатр / тріумфальна арка — ігри / брама перемоги" },
        { pl: "kamień milowy — odległość od Rzymu przy drodze", ua: "мільний камінь — відстань від Риму біля дороги" },
        { pl: "Eneida / ody — epos Wergiliusza / pieśni Horacego", ua: "Енеїда / оди — епос Вергілія / пісні Горація" },
        { pl: "Prawo XII tablic — V w. p.n.e., spis na Forum", ua: "Закон XII таблиць — V ст. до н.е., запис на Форумі" },
        { pl: "Kodeks Justyniana — VI w. n.e., zbiór praw Wschodu", ua: "Кодекс Юстиніана — VI ст. н.е., збір законів Сходу" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Panteon to akwedukt nad Dunajem. Wergiliusz napisał ody, a Horacy Eneidę. Prawo XII tablic spisał Justynian w 79 n.e. w Pompejach.”",
        ua: "«Пантеон — акведук над Дунаєм. Вергілій написав оди, а Горацій Енеїду. Закон XII таблиць записав Юстиніан у 79 н.е. в Помпеях.»"
      },
      text: {
        pl: [
          "Panteon = świątynia z kopułą. Akwedukt = woda na łukach. Wergiliusz = Eneida; Horacy = ody. XII tablic: V w. p.n.e., Forum. Justynian: VI w. n.e., Wschód. 79 to Wezuwiusz."
        ],
        ua: [
          "Пантеон = храм з куполом. Акведук = вода на арках. Вергілій = Енеїда; Горацій = оди. XII таблиць: V ст. до н.е., Форум. Юстиніан: VI ст. н.е., Схід. 79 — Везувій."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, jakie były największe osiągnięcia architektoniczne Rzymian. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, які були найбільші архітектурні досягнення римлян. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: beton, łuk, kopuła, akwedukt, Koloseum, Panteon, łuk triumfalny, drogi. Nie opowiadaj samego Spartakusa."
        ],
        ua: [
          "Підказка: бетон, арка, купол, акведук, Колізей, Пантеон, тріумфальна арка, дороги. Не розповідай самого Спартака."
        ]
      },
      task: {
        id: "h15-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje dokonania budowniczych?",
          ua: "Яке речення найкраще охоплює досягнення будівничих?"
        },
        options: [
          { id: "a", label: { pl: "Rzymianie stawiali akwedukty, amfiteatry, świątynie z kopułą, łuki triumfalne i trwałe drogi dzięki łukowi i betonowi", ua: "Римляни ставили акведуки, амфітеатри, храми з куполом, тріумфальні арки і тривкі дороги завдяки арці і бетону" } },
          { id: "b", label: { pl: "Rzymianie budowali tylko piramidy nad Nilem", ua: "Римляни будували лише піраміди над Нілом" } },
          { id: "c", label: { pl: "Nie budowali nic, bo Grecy zabronili kopuł", ua: "Нічого не будували, бо греки заборонили куполи" } }
        ],
        answer: "a",
        hint: {
          pl: "NACOBEZU: architektura. Lista z Zapamiętaj.",
          ua: "NACOBEZU: архітектура. Список із Запам’ятай."
        },
        explanation: {
          pl: "Grecy dali wzór kolumn i literatury, nie zakaz kopuł. Piramidy to Egipt.",
          ua: "Греки дали зразок колон і літератури, не заборону куполів. Піраміди — Єгипет."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co to za budowla?", ua: "Що це за будівля?" },
      task: {
        id: "h15-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dopasuj: dziura w kopule · owal z arkadami · trzy przęsła bramy · łuki nad rzeką z wodą",
          ua: "Добери: діра в куполі · овал з аркадами · три прольоти брами · арки над річкою з водою"
        },
        options: [
          { id: "a", label: { pl: "Panteon · Koloseum · łuk triumfalny · akwedukt", ua: "Пантеон · Колізей · тріумфальна арка · акведук" } },
          { id: "b", label: { pl: "Forum · willa · kamienica · termy", ua: "Форум · вілла · кам’яниця · терми" } },
          { id: "c", label: { pl: "Eneida · oda · XII tablic · kodeks", ua: "Енеїда · ода · XII таблиць · кодекс" } }
        ],
        answer: "a",
        hint: {
          pl: "Cztery zdjęcia tej lekcji, nie poezja.",
          ua: "Чотири світлини цього уроку, не поезія."
        },
        explanation: {
          pl: "To ćwiczenie z prezentacji. Termy i kamienice były w lekcji 14.",
          ua: "Це вправа з презентації. Терми і кам’яниці були в уроці 14."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h15-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: V w. p.n.e. · Wergiliusz · VI w. n.e.",
          ua: "Добери: V ст. до н.е. · Вергілій · VI ст. н.е."
        },
        options: [
          { id: "a", label: { pl: "V w. — Prawo XII tablic; Wergiliusz — Eneida; VI w. — Kodeks Justyniana", ua: "V ст. — Закон XII таблиць; Вергілій — Енеїда; VI ст. — Кодекс Юстиніана" } },
          { id: "b", label: { pl: "V w. — Koloseum; Wergiliusz — ody; VI w. — Spartakus", ua: "V ст. — Колізей; Вергілій — оди; VI ст. — Спартак" } },
          { id: "c", label: { pl: "V w. — Wezuwiusz; Wergiliusz — akwedukt; VI w. — 753 p.n.e.", ua: "V ст. — Везувій; Вергілій — акведук; VI ст. — 753 до н.е." } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy punkty z notatki do zeszytu.",
          ua: "Три пункти з нотатки до зошита."
        },
        explanation: {
          pl: "Horacy = ody. Justynian = Wschód, VI w. n.e. To KN.",
          ua: "Горацій = оди. Юстиніан = Схід, VI ст. н.е. Це KN."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Rzymianie byli doskonałymi budowniczymi. Tworzyli akwedukty (wodociągi), bazyliki, świątynie, łuki triumfalne i amfiteatry. Do najwspanialszych budowli należą Koloseum, Panteon i łuk Konstantyna. Sieć dróg była bardzo trwała — także w prowincjach.",
          ["akwedukty", "Koloseum", "Panteon", "łuk Konstantyna"],
          "Римляни були досконалими будівничими. Творили акведуки (водогони), базиліки, храми, тріумфальні арки і амфітеатри. До найпишніших споруд належать Колізей, Пантеон і арка Костянтина. Мережа доріг була дуже тривкою — також у провінціях.",
          ["акведуки", "Колізей", "Пантеон", "арка Костянтина"]
        ),
        mark(
          "Architektura i literatura rzymska kształtowały się pod silnym wpływem twórców greckich. Do najwybitniejszych pisarzy należą Wergiliusz (Eneida) i Horacy (ody).",
          ["wpływem", "Wergiliusz", "Horacy"],
          "Архітектура і література римська формувалися під сильним впливом грецьких творців. До найвидатніших письменників належать Вергілій (Енеїда) і Горацій (оди).",
          ["впливом", "Вергілій", "Горацій"]
        ),
        mark(
          "Rzymianie zasłynęli jako twórcy prawa. W V w. p.n.e. powstało Prawo XII tablic, w VI w. n.e. — Kodeks Justyniana. Wiele zasad (prawo nie działa wstecz, wysłuchać obu stron) obowiązuje do dziś.",
          ["V w. p.n.e.", "XII tablic", "VI w. n.e.", "Kodeks Justyniana"],
          "Римляни уславилися як творці права. У V ст. до н.е. постав Закон XII таблиць, у VI ст. н.е. — Кодекс Юстиніана. Багато засад (право не діє назад, вислухати обидві сторони) чинні досі.",
          ["V ст. до н.е.", "XII таблиць", "VI ст. н.е.", "Кодекс Юстиніана"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: początki chrześcijaństwa — nowa wiara w tym samym imperium, nie kolejny akwedukt.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: початки християнства — нова віра в тій самій імперії, не ще один акведук.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "KtoNJ2on3rA",
        title: {
          pl: "Krótkie Lekcje: Dokonania starożytnych Rzymian",
          ua: "Короткі уроки: Досягнення стародавніх римлян"
        }
      }
    }
  ]
};
