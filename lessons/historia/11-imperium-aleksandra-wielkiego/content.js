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
      heading: { pl: "Imperium Aleksandra Wielkiego", ua: "Імперія Александра Великого" },
      formula: "333 · 331 · 323 p.n.e.",
      text: {
        pl: [
          "Po wojnach z Persami greckie polis kłóciły się o dominację. Na północy rosła Macedonia.",
          "Dziś: Filip II, falanga, wyprawa Aleksandra, rozpad imperium i kultura hellenistyczna. Na osi: Issos 333, Gaugamela 331 i śmierć Aleksandra 323."
        ],
        ua: [
          "Після воєн з персами грецькі поліси сварилися за першість. На півночі росла Македонія.",
          "Сьогодні: Філіпп II, фаланга, похід Александра, розпад імперії і елліністична культура. На осі: Ісс 333, Гавгамела 331 і смерть Александра 323."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać na mapie Macedonię, Persję, Indie i Aleksandrię", ua: "вказати на мапі Македонію, Персію, Індію і Александрію" },
        { pl: "powiedzieć, kim byli Filip II i Aleksander oraz czym jest falanga macedońska", ua: "сказати, ким були Філіпп II і Александр та що таке македонська фаланга" },
        { pl: "podać datę bitwy pod Issos (333 p.n.e.), Gaugameli (331 p.n.e.) i rok śmierci Aleksandra (323 p.n.e.)", ua: "подати дату битви під Іссом (333 до н.е.), Гавгамели (331 до н.е.) і рік смерті Александра (323 до н.е.)" },
        { pl: "wyjaśnić hellenizację i kulturę hellenistyczną", ua: "пояснити еллінізацію і елліністичну культуру" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Grecja po wojnach z Persami", ua: "Греція після воєн з персами" },
      timelineYear: 480,
      visual: gh("083", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Macedonia na północ od Grecji, na wschodzie wielkie Imperium Perskie",
          ua: "Мапа: Македонія на північ від Греції, на сході велика Перська імперія"
        },
        title: { pl: "Trzy światy: polis, Macedonia, Persja", ua: "Три світи: поліси, Македонія, Персія" },
        prompt: {
          pl: "Szkolna atlasowa mapa wschodniej części Morza Śródziemnego dla klasy 5, jasne tło, bez armii i bez grozy. Po lewej Grecja i wyspy: podpisz Ateny, Spartę, Peloponez, Morze Egejskie. Na północy Grecji wyraźnie zakreśl Macedonię (ciepły kolor) i stolicę Pellę. Na wschodzie ogromne Imperium Perskie innym kolorem, od Azji Mniejszej po Mezopotamię; podpisz Persja. Morza niebieskie. Róża wiatrów. Krótka legenda: „greckie polis”; „Macedonia”; „Imperium Perskie”. Nie rysuj bitew, krwi ani granic spornych państw współczesnych. Styl podręcznika Nowej Ery.",
          ua: "Шкільна атласна мапа східного Середземномор’я для 5 класу, світле тло, без армій і жаху. Греція: Афіни, Спарта. На півночі Македонія і Пелла. На сході велика Перська імперія. Легенда трьох кольорів. Без битв і крові."
        }
      }),
      text: {
        pl: [
          "Po zwycięstwie nad Persami Ateny i Sparta walczyły o dominację. Polis były zmęczone.",
          ["Na północy leżała ", em("Macedonia"), " — królestwo, nie demokratyczne Ateny. W ", em("IV wieku p.n.e."), " jej król ", em("Filip II"), " zbudował świetnie wyszkolone wojsko."]
        ],
        ua: [
          "Після перемоги над персами Афіни і Спарта воювали за першість. Поліси були втомлені.",
          ["На півночі лежала ", em("Македонія"), " — царство, не демократичні Афіни. У ", em("IV столітті до н.е."), " її цар ", em("Філіпп II"), " збудував добре вишколене військо."]
        ]
      },
      task: {
        id: "h11-map",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leżała Macedonia względem greckich polis?",
          ua: "Де лежала Македонія щодо грецьких полісів?"
        },
        options: [
          { id: "a", label: { pl: "na północ od Grecji", ua: "на північ від Греції" } },
          { id: "b", label: { pl: "w Egipcie, nad Nilem", ua: "в Єгипті, над Нілом" } },
          { id: "c", label: { pl: "za Indusem, w Indiach", ua: "за Індом, в Індії" } }
        ],
        answer: "a",
        hint: {
          pl: "Spójrz na mapę: Macedonia jest nad Grecją, nie nad Nilem.",
          ua: "Подивись на мапу: Македонія над Грецією, не над Нілом."
        },
        explanation: {
          pl: "Macedonia — królestwo na północ od Hellady. Persja leży na wschodzie.",
          ua: "Македонія — царство на північ від Еллади. Персія на сході."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Filip II", ua: "Філіпп II" },
      formula: "Macedonia · IV w. p.n.e.",
      visual: gh("090", {
        kind: "image-placeholder",
        alt: {
          pl: "Muzealne popiersie Filipa II, króla Macedonii",
          ua: "Музейне погруддя Філіппа II, царя Македонії"
        },
        title: { pl: "Król z Pelli", ua: "Цар із Пелли" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, 16:9, jasne muzealne światło, BEZ bitwy, BEZ krwi, BEZ rany oka jako tematu. Na środku białe marmurowe popiersie dojrzałego mężczyzny w krótkiej brodzie i diademie (Filip II) na cokołe; podpis na cokołe: „Filip II”. Tło: spokojna sala muzeum, nie pole bitwy. Po lewej cztery krótkie polskie punkty DOKŁADNIE: „kto — król Macedonii”; „skąd — Pella, na północ od Grecji”; „lata — IV wiek p.n.e.”; „wsławił się — falanga i zjednoczenie Grecji; ojciec Aleksandra”. Polski podpis pod spodem: „Filip II — popiersie muzealne”. Styl podręcznika Nowej Ery, czytelne etykiety.",
          ua: "Шкільний слайд для 5 класу, музейне світло, БЕЗ битви і крові. Мармурове погруддя Філіппа II на цоколі. Ліворуч чотири пункти: хто — цар Македонії; звідки — Пелла, на північ від Греції; роки — IV ст. до н.е.; чим уславився — фаланга і об’єднання Греції; батько Александра."
        }
      }),
      text: {
        pl: [
          [em("Filip II"), " — król ", em("Macedonii"), " w ", em("IV wieku p.n.e."), " Stolica: ", em("Pella"), ", na północ od greckich polis."],
          "Wsławił się falangą i tym, że podbił niemal całą Grecję. Ojciec Aleksandra."
        ],
        ua: [
          [em("Філіпп II"), " — цар ", em("Македонії"), " у ", em("IV столітті до н.е."), " Столиця: ", em("Пелла"), ", на північ від грецьких полісів."],
          "Уславився фалангою і тим, що підкорив майже всю Грецію. Батько Александра."
        ]
      },
      task: {
        id: "h11-filip-kto",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Filip II?",
          ua: "Ким був Філіпп II?"
        },
        options: [
          { id: "a", label: { pl: "królem Macedonii, ojcem Aleksandra", ua: "царем Македонії, батьком Александра" } },
          { id: "b", label: { pl: "faraonem Egiptu nad Nilem", ua: "фараоном Єгипту над Нілом" } },
          { id: "c", label: { pl: "konsulem republiki w Rzymie", ua: "консулом республіки в Римі" } }
        ],
        answer: "a",
        hint: {
          pl: "Pella, północ Grecji — nie Nil i nie Tyber.",
          ua: "Пелла, північ Греції — не Ніл і не Тибр."
        },
        explanation: {
          pl: "Filip II rządził Macedonią. Rzym i faraon to inne lekcje.",
          ua: "Філіпп II правив Македонією. Рим і фараон — інші уроки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Falanga macedońska", ua: "Македонська фаланга" },
      visual: gh("084", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat falangi: żołnierze w rzędach z bardzo długimi włóczniami",
          ua: "Схема фаланги: воїни в рядах із дуже довгими списами"
        },
        title: { pl: "Długa sarissa, zwarty szyk", ua: "Довга сариса, щільний стрій" },
        prompt: {
          pl: "Szkolny schemat dla klasy 5, jasne tło, BEZ grozy i BEZ przeciwnika. Widok z ukosa na prostokątny szyk: 8–16 rzędów spokojnych żołnierzy w hełmach i krótkich tunikach, bark przy barku. Z pierwszych rzędów wystają bardzo długie włócznie (sarissy, 5–6 m) do przodu i lekko w górę — gęsty „las” drzewców. Podpisy DOKŁADNIE: „falanga macedońska”; „sarissa (długa włócznia)”; „zwarty szyk”. Nikt nie pada, nie ma krwi, koni w szarży ani ściętych głów. Styl infografiki podręcznikowej.",
          ua: "Шкільна схема для 5 класу, світле тло, БЕЗ жаху і БЕЗ ворога. Прямокутний стрій воїнів із дуже довгими списами (сариса) вперед. Підписи: falanga macedońska; sarissa; zwarty szyk. Ніхто не падає, немає крові."
        }
      }),
      text: {
        pl: [
          ["To wyróżniało Macedonię: ", em("falanga macedońska"), " — zwarty szyk z bardzo długimi włóczniami (", em("sarissa"), "). Trudno było się do niej zbliżyć."],
          "Filip II podbił niemal całą Grecję. Polis straciły samodzielność — ale zachowały swoją kulturę."
        ],
        ua: [
          ["Це вирізняло Македонію: ", em("македонська фаланга"), " — щільний стрій із дуже довгими списами (", em("сариса"), "). Важко було до нього наблизитися."],
          "Філіпп II підкорив майже всю Грецію. Поліси втратили самостійність — але зберегли свою культуру."
        ]
      },
      task: {
        id: "h11-falanga",
        type: "true-false",
        level: "A",
        question: {
          pl: "Falanga macedońska to szyk z bardzo długimi włóczniami — prawda czy fałsz?",
          ua: "Македонська фаланга — це стрій із дуже довгими списами — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Sarissa jest dłuższa niż zwykła włócznia hoplity z lekcji o Sparcie.",
          ua: "Сариса довша за звичайний спис гопліта з уроку про Спарту."
        },
        explanation: {
          pl: "Prawda. Długa włócznia + zwarty szyk = siła Macedonii.",
          ua: "Правда. Довгий спис + щільний стрій = сила Македонії."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Plany Filipa II", ua: "Плани Філіппа II" },
      text: {
        pl: [
          ["Filip chciał wraz z Grekami podbić ", em("Imperium Perskie"), ": zemsta za dawne najazdy Persów i bogactwo Wschodu."],
          "Liczył też, że miejscowa ludność zbuntuje się przeciw Persom. Sam nie zdążył wyruszyć — zginął. Wyprawę poprowadził syn."
        ],
        ua: [
          ["Філіпп хотів разом із греками підкорити ", em("Перську імперію"), ": помста за давні напади персів і багатство Сходу."],
          "Також розраховував, що місцеве населення повстане проти персів. Сам не встиг виступити — загинув. Похід повів син."
        ]
      },
      task: {
        id: "h11-filip",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Po co Filip II planował wyprawę na Persję?",
          ua: "Навіщо Філіпп II планував похід на Персію?"
        },
        options: [
          { id: "a", label: { pl: "zemsta za najazdy perskie i bogactwo Wschodu", ua: "помста за перські напади і багатство Сходу" } },
          { id: "b", label: { pl: "chciał zbudować piramidy w Egipcie", ua: "хотів збудувати піраміди в Єгипті" } },
          { id: "c", label: { pl: "szukał nowego stadionu w Olimpii", ua: "шукав новий стадіон в Олімпії" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa motywy ze slajdu: pomszczenie i bogactwo.",
          ua: "Два мотиви: помста і багатство."
        },
        explanation: {
          pl: "Persja = dawny wróg i wielkie bogactwo. Nie piramidy i nie stadion.",
          ua: "Персія = давній ворог і велике багатство. Не піраміди і не стадіон."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Aleksander Wielki", ua: "Александр Великий" },
      formula: "Macedonia · 323 p.n.e.",
      timelineYear: 323,
      visual: gh("091", {
        kind: "image-placeholder",
        alt: {
          pl: "Muzealne popiersie Aleksandra Wielkiego",
          ua: "Музейне погруддя Александра Великого"
        },
        title: { pl: "Syn Filipa, uczeń Arystotelesa", ua: "Син Філіппа, учень Аристотеля" },
        prompt: {
          pl: "Szkolny slajd dla klasy 5, 16:9, jasne muzealne światło, BEZ bitwy pod Issos, BEZ mozaiki z Dariuszem, BEZ łoża śmierci, BEZ słoni. Na środku białe marmurowe popiersie młodego mężczyzny z krótkimi falowanymi włosami (typ Lizypa / Aleksander Wielki) na cokołe; podpis: „Aleksander Wielki”. Tło: sala muzeum. Po lewej cztery krótkie polskie punkty DOKŁADNIE: „kto — król Macedonii, syn Filipa II”; „skąd — Pella, Macedonia”; „lata — IV wiek p.n.e., śmierć 323 p.n.e.”; „wsławił się — wyprawa na Persję i kultura grecka na Wschodzie”. Polski podpis pod spodem: „Aleksander Wielki — popiersie muzealne”. Styl podręcznika Nowej Ery.",
          ua: "Шкільний слайд для 5 класу, музейне світло, БЕЗ битви, БЕЗ мозаїки з Дарієм, БЕЗ ложа смерті. Мармурове погруддя молодого Александра. Ліворуч чотири пункти: хто — цар Македонії, син Філіппа II; звідки — Пелла; роки — IV ст. до н.е., смерть 323; чим уславився — похід на Персію і грецька культура на Сході."
        }
      }),
      text: {
        pl: [
          [em("Aleksander Wielki"), " — syn ", em("Filipa II"), ", z ", em("Macedonii"), " (Pella). Żył w IV wieku p.n.e.; zmarł w ", em("323 p.n.e."), "."],
          ["Uczył się u ", em("Arystotelesa"), ". Wsławił się wyprawą na Persję i tym, że język i kultura grecka poszły daleko na wschód."]
        ],
        ua: [
          [em("Александр Великий"), " — син ", em("Філіппа II"), ", з ", em("Македонії"), " (Пелла). Жив у IV столітті до н.е.; помер ", em("323 до н.е."), "."],
          ["Учився в ", em("Аристотеля"), ". Уславився походом на Персію і тим, що грецька мова і культура пішли далеко на схід."]
        ]
      },
      task: {
        id: "h11-aleksander-kto",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Skąd pochodził Aleksander Wielki i czyim był synem?",
          ua: "Звідки походив Александр Великий і чиїм був сином?"
        },
        options: [
          { id: "a", label: { pl: "z Macedonii; syn Filipa II", ua: "з Македонії; син Філіппа II" } },
          { id: "b", label: { pl: "z Aten; syn Peryklesa", ua: "з Афін; син Перикла" } },
          { id: "c", label: { pl: "z Rzymu; syn Romulusa", ua: "з Риму; син Ромула" } }
        ],
        answer: "a",
        hint: {
          pl: "Ojciec z poprzedniego ekranu. Stolica — Pella.",
          ua: "Батько з попереднього екрана. Столиця — Пелла."
        },
        explanation: {
          pl: "Aleksander = Macedonia, syn Filipa. Perykles i Romulus to inne tematy.",
          ua: "Александр = Македонія, син Філіппа. Перикл і Ромул — інші теми."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Aleksander wyrusza", ua: "Александр вирушає" },
      formula: "Granik · Azja Mniejsza",
      text: {
        pl: [
          ["Aleksander objął dowództwo nad armią grecko-macedońską i wyruszył na Persję."],
          ["Pierwsze zwycięstwo: nad rzeką ", em("Granik"), " w Azji Mniejszej — to miejsce na mapie, nie data do wkuwania."]
        ],
        ua: [
          ["Александр очолив греко-македонську армію і вирушив на Персію."],
          ["Перша перемога: над річкою ", em("Гранік"), " у Малій Азії — це місце на мапі, не дата напам’ять."]
        ]
      },
      task: {
        id: "h11-granik",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie Aleksander odniósł pierwsze zwycięstwo w Azji Mniejszej?",
          ua: "Де Александр здобув першу перемогу в Малій Азії?"
        },
        options: [
          { id: "a", label: { pl: "nad rzeką Granik", ua: "над річкою Гранік" } },
          { id: "b", label: { pl: "pod Salaminą w 480 p.n.e.", ua: "під Саламіном 480 до н.е." } },
          { id: "c", label: { pl: "w Olimpii w 776 p.n.e.", ua: "в Олімпії 776 до н.е." } }
        ],
        answer: "a",
        hint: {
          pl: "Salamina i igrzyska już znasz z osi. Granik to początek wyprawy.",
          ua: "Саламін і ігри вже знаєш з осі. Гранік — початок походу."
        },
        explanation: {
          pl: "Granik = pierwsze starcie na wschodzie. Datę na osi zapamiętaj przy Issos (333).",
          ua: "Гранік = перша сутичка на сході. Дату на осі запам’ятай при Іссі (333)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wyprawa na wschód", ua: "Похід на схід" },
      visual: gh("085", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa drogi Aleksandra od Macedonii po Indus; na osi lekcji ważny jest Issos 333",
          ua: "Мапа шляху Александра від Македонії по Інд; на осі уроку важливий Ісс 333"
        },
        title: { pl: "Od Macedonii po Indus", ua: "Від Македонії по Інд" },
        prompt: {
          pl: "Szkolna atlasowa mapa wyprawy Aleksandra dla klasy 5, jasne tło, BEZ walki i BEZ krwi. Od Macedonii przez Egipt i Mezopotamię po rzekę Indus. Linia marszu ze strzałkami. Przy Issos duży znak X i data 333 p.n.e. — to jedyna data bitewna na mapie. Inne miejsca tylko nazwą, bez roku: Granik, Gaugamela, Indus. Podpisz: Macedonia, Egipt, Babilonia, Persja, Indie, morza. Czerwone kropki „Aleksandria”. Nie maluj szarży ani słoni bojowych.",
          ua: "Шкільна атласна мапа походу для 5 класу, БЕЗ битв. Від Македонії по Інд. Єдиний рік на мапі: Ісс 333. Інші місця лише назвами: Гранік, Гавгамела, Інд. Без солдатів і слонів."
        }
      }),
      text: {
        pl: [
          "Zamiast czterech dat bitew — jedna mapa. Na osi pod kropkami z tej wyprawy zapamiętaj Issos 333. Reszta to droga na wschód: Azja Mniejsza, wybrzeże, Persja, Indus.",
          "Na podbitych ziemiach Aleksander zakładał miasta. Wiele nazywał ", em("Aleksandrią"), "."
        ],
        ua: [
          "Замість чотирьох дат битв — одна мапа. На осі під крапками з цього походу запам’ятай Ісс 333. Решта — шлях на схід: Мала Азія, узбережжя, Персія, Інд.",
          "На підкорених землях Александр закладав міста. Багато називав ", em("Александрією"), "."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Issos, 333 p.n.e.", ua: "Ісс, 333 до н.е." },
      timelineYear: 333,
      formula: "333 p.n.e.",
      text: {
        pl: [
          ["Pod ", em("Issos"), " Aleksander spotkał króla Persów ", em("Dariusza III"), ". Persów było więcej, ale szyk Aleksandra przerwał ich linie. Dariusz uciekł."],
          "Po tym zwycięstwie Aleksander zajął Syrię, Fenicję, Palestynę i Egipt. Część miejscowej ludności witała go jak wyzwoliciela spod perskiej władzy."
        ],
        ua: [
          ["Під ", em("Іссом"), " Александр зустрів царя персів ", em("Дарія III"), ". Персів було більше, але стрій Александра прорвав їхні лінії. Дарій утік."],
          "Після цієї перемоги Александр зайняв Сирію, Фінікію, Палестину і Єгипет. Частина місцевого населення вітала його як визволителя з-під перської влади."
        ]
      },
      task: {
        id: "h11-issos",
        type: "input-number",
        level: "A",
        question: {
          pl: "Bitwa pod Issos — który rok p.n.e.? Wpisz tylko liczbę. (ta data jest na osi)",
          ua: "Битва під Іссом — який рік до н.е.? Впиши лише число. (ця дата є на осі)"
        },
        answer: 333,
        hint: {
          pl: "Trzy trójki. Na osi między Salaminą 480 a śmiercią 323.",
          ua: "Три трійки. На осі між Саламіном 480 і смертю 323."
        },
        explanation: {
          pl: "333 p.n.e. Po Issos: Syria, Fenicja, Palestyna, Egipt.",
          ua: "333 до н.е. Після Іссу: Сирія, Фінікія, Палестина, Єгипет."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Węzeł gordyjski", ua: "Гордіїв вузол" },
      visual: gh("086", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojna scena: jarzmo wozu z ogromnym węzłem, Aleksander obok z mieczem opuszczonym",
          ua: "Спокійна сцена: ярмо воза з величезним вузлом, Александр поруч з опущеним мечем"
        },
        title: { pl: "Rozciąć, zamiast rozwiązywać", ua: "Розрубати замість розв’язувати" },
        prompt: {
          pl: "Szkolna ilustracja legendy dla klasy 5, dzień, jasne niebo, BEZ grozy. Na pierwszym planie drewniany wóz z jarzmem, na którym ogromny skomplikowany węzeł ze sznura. Młody Aleksander w prostym pancerzu stoi obok, miecz opuszczony w dół (nie zamach, nie cios w człowieka). Kilkoro spokojnych świadków w tunikach. W tle kolumny i mała mapa-wstawka z podpisem „Gordion” w Azji Mniejszej. Tytuł na obrazie: „węzeł gordyjski”. Nikt nie krwawi, nikt nie pada. Styl podręcznika, nie barokowa bitwa.",
          ua: "Шкільна ілюстрація легенди для 5 класу, день, БЕЗ жаху. Віз із величезним вузлом на ярмі. Молодий Александр стоїть поруч, меч опущений, не замах на людину. Підпис Gordion. Без крові."
        }
      }),
      text: {
        pl: [
          ["W frygijskim ", em("Gordion"), " była wróżba: kto rozwiąże niemożliwy węzeł, zdobędzie Azję. Aleksander ", em("rozciął"), " go mieczem."],
          "To opowieść, nie lekcja fechtunku. Zapamiętaj pojęcie: czasem trudny problem rozwiązuje się prostym cięciem — i idzie się dalej na wschód."
        ],
        ua: [
          ["У фригійському ", em("Гордіоні"), " була ворожба: хто розв’яже неможливий вузол, здобуде Азію. Александр ", em("розрубав"), " його мечем."],
          "Це оповідь, не урок фехтування. Запам’ятай поняття: інколи важку проблему розв’язують простим різом — і йдуть далі на схід."
        ]
      },
      task: {
        id: "h11-wezel",
        type: "true-false",
        level: "B",
        question: {
          pl: "Węzeł gordyjski Aleksander rozwiązał palcami, nitka po nitce — prawda czy fałsz?",
          ua: "Гордіїв вузол Александр розв’язав пальцями, нитка за ниткою — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Legenda mówi o mieczu, nie o cierpliwości krawca.",
          ua: "Легенда каже про меч, не про терпіння кравця."
        },
        explanation: {
          pl: "Fałsz. Rozciął. Stąd powiedzenie „rozciąć węzeł gordyjski”.",
          ua: "Неправда. Розрубав. Звідси вислів «розрубати гордіїв вузол»."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Gaugamela i upadek Persji", ua: "Гавгамела і падіння Персії" },
      formula: "331 p.n.e.",
      timelineYear: 331,
      text: {
        pl: [
          "Dariusz proponował pokój i oddanie połowy ziem. Aleksander odmówił.",
          ["W ", em("331 p.n.e."), " pod ", em("Gaugamelą"), " armia perska została pokonana. Dariusz znów uciekł; później zginął. Imperium perskie upadło."]
        ],
        ua: [
          "Дарій пропонував мир і віддати половину земель. Александр відмовив.",
          ["У ", em("331 до н.е."), " під ", em("Гавгамелою"), " перську армію розбили. Дарій знову втік; пізніше загинув. Перська імперія впала."]
        ]
      },
      task: {
        id: "h11-gaugamela",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Którą datę bitwy z wyprawy Aleksandra zapisujemy na osi obok Issos 333?",
          ua: "Яку дату битви з походу Александра записуємо на осі поряд з Іссом 333?"
        },
        options: [
          { id: "a", label: { pl: "Gaugamela, 331 p.n.e.", ua: "Гавгамела, 331 до н.е." } },
          { id: "b", label: { pl: "Granik, 334 p.n.e.", ua: "Гранік, 334 до н.е." } },
          { id: "c", label: { pl: "Indus — rok, którego nie wkuwamy", ua: "Інд — рік, якого не вчимо напам’ять" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: 333 Issos i 331 Gaugamela. Granik jest na mapie, nie jako osobna data do wkuwania.",
          ua: "KN: 333 Ісс і 331 Гавгамела. Гранік на мапі, не як окрема дата напам’ять."
        },
        explanation: {
          pl: "Na osi: Issos 333 i Gaugamela 331. Śmierć Aleksandra 323 — osobny tik.",
          ua: "На осі: Ісс 333 і Гавгамела 331. Смерть Александра 323 — окремий тик."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Indus i odwrót", ua: "Інд і відступ" },
      text: {
        pl: [
          ["Armia doszła nad rzekę ", em("Indus"), " (dziś tereny Pakistanu i Indii). Dalej było ciężko: upał, ulewy, zmęczenie żołnierzy."],
          ["Zapadła ", em("decyzja o odwrocie"), ". Imperium i tak było jednym z największych w dziejach: od Macedonii po Indus."]
        ],
        ua: [
          ["Армія дійшла до річки ", em("Інд"), " (нині землі Пакистану й Індії). Далі було важко: спека, зливи, втома воїнів."],
          ["Ухвалили ", em("рішення про відступ"), ". Імперія і так була однією з найбільших в історії: від Македонії по Інд."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "323 p.n.e.: śmierć i podział", ua: "323 до н.е.: смерть і поділ" },
      timelineYear: 323,
      visual: gh("087", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa imperium w 323 p.n.e. i strzałki podziału na mniejsze państwa",
          ua: "Мапа імперії 323 до н.е. і стрілки поділу на менші держави"
        },
        title: { pl: "Jedno państwo, potem kilka", ua: "Одна держава, потім кілька" },
        prompt: {
          pl: "Szkolna atlasowa mapa dla klasy 5, jasne tło, bez grozy i bez łoża śmierci. Jeden duży obszar w ciepłym kolorze: Imperium Aleksandra w 323 p.n.e., od Macedonii po Indus. Białe kółka: główne miasta założone przez Aleksandra (kilka z podpisem Aleksandria, plus Babilon). Czerwone kropki: miasta podbite. Pod mapą trzy–cztery spokojne strzałki rozchodzące się na mniejsze pola z podpisem „państwo podzielono na kilka mniejszych”. Tytuł: „323 p.n.e.”. Nie pokazuj umierającego króla, żałoby ani walk diadochów.",
          ua: "Шкільна атласна мапа для 5 класу, без жаху і без смертного ложа. Імперія 323 до н.е. від Македонії по Інд. Міста Александрія, Вавилон. Стрілки: державу поділено на кілька менших. Без похорону і битв наступників."
        }
      }),
      text: {
        pl: [
          ["W ", em("323 p.n.e."), " Aleksander zmarł (w Babilonie). Nie zostawił trwałego planu następstwa. Państwo ", em("podzielono"), " na kilka mniejszych."],
          ["Za ten krótki, ogromny podbój dostał przydomek ", em("Wielki"), "."]
        ],
        ua: [
          ["У ", em("323 до н.е."), " Александр помер (у Вавилоні). Не лишив тривалого плану спадкоємства. Державу ", em("поділили"), " на кілька менших."],
          ["За цей короткий, величезний підбій дістав прізвисько ", em("Великий"), "."]
        ]
      },
      task: {
        id: "h11-smierc",
        type: "input-number",
        level: "A",
        question: {
          pl: "Rok śmierci Aleksandra p.n.e. — wpisz tylko liczbę.",
          ua: "Рік смерті Александра до н.е. — впиши лише число."
        },
        answer: 323,
        hint: {
          pl: "Ostatni punkt osi pod kropkami.",
          ua: "Остання риска на осі під крапками."
        },
        explanation: {
          pl: "323 p.n.e. Potem podział, nie wieczne jedno państwo.",
          ua: "323 до н.е. Потім поділ, не вічна одна держава."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hellenizacja", ua: "Еллінізація" },
      visual: gh("088", {
        kind: "image-placeholder",
        alt: {
          pl: "Wschodnie miasto z grecką świątynią, teatrem i stadionem",
          ua: "Східне місто з грецьким храмом, театром і стадіоном"
        },
        title: { pl: "Grecy osiedlają się na Wschodzie", ua: "Греки оселяються на Сході" },
        prompt: {
          pl: "Szkolna spokojna rekonstrukcja miasta hellenistycznego dla klasy 5, dzień, bez grozy. Szeroka prosta ulica, palmy, ludzie w tunikach idą spokojnie. Trzy podpisane budowle greckie w krajobrazie Wschodu: „świątynia” z kolumnami; „teatr” na zboczu; „stadion”. W tle port i morze. Strzałka-napis: „rozpowszechnienie kultury i języka → hellenizacja”. Nie kopiuj kadru filmu z lotu ptaka jeden do jednego; nie dodawaj bitew. Styl podręcznika.",
          ua: "Шкільна спокійна реконструкція елліністичного міста для 5 класу, день. Пряма вулиця, пальми. Три підписані будівлі: świątynia, teatr, stadion. Стрілка: hellenizacja. Без битв."
        }
      }),
      text: {
        pl: [
          ["Na terenie imperium osiedlali się ", em("Grecy"), ": stawiali świątynie, teatry, stadiony, nowe miasta (np. Aleksandria). Szerzył się język i kultura grecka — to ", em("hellenizacja"), "."],
          ["Grecy przejęli też osiągnięcia Wschodu (astronomia, matematyka). Sztuka grecka stała się ozdobniejsza. Mieszanka kultur greckiej i Wschodu to ", em("kultura hellenistyczna"), "."]
        ],
        ua: [
          ["На терені імперії оселялися ", em("греки"), ": ставили храми, театри, стадіони, нові міста (напр. Александрія). Ширилася мова і культура грецька — це ", em("еллінізація"), "."],
          ["Греки перейняли також здобутки Сходу (астрономія, математика). Мистецтво стало оздобнішим. Суміш грецької культури і Сходу — ", em("елліністична культура"), "."]
        ]
      },
      task: {
        id: "h11-hellen",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym jest kultura hellenistyczna?",
          ua: "Що таке елліністична культура?"
        },
        options: [
          { id: "a", label: { pl: "połączenie kultury greckiej z kulturami Wschodu", ua: "поєднання грецької культури з культурами Сходу" } },
          { id: "b", label: { pl: "tylko religia Egiptu faraonów", ua: "лише релігія Єгипту фараонів" } },
          { id: "c", label: { pl: "pismo klinowe Sumerów", ua: "клинопис шумерів" } }
        ],
        answer: "a",
        hint: {
          pl: "Mieszanka, nie czysty Egipt i nie Sumer.",
          ua: "Суміш, не чистий Єгипет і не Шумер."
        },
        explanation: {
          pl: "Hellenistyczna = grecka + wschodnia. Hellenizacja to rozpowszechnianie wzorów greckich.",
          ua: "Елліністична = грецька + східна. Еллінізація — поширення грецьких зразків."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Biblioteka Aleksandryjska", ua: "Александрійська бібліотека" },
      visual: gh("089", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa obrazy: starożytna biblioteka ze zwojami i współczesna Bibliotheca Alexandrina",
          ua: "Два зображення: давня бібліотека зі сувоями і сучасна Bibliotheca Alexandrina"
        },
        title: { pl: "Dawniej i teraz", ua: "Колись і тепер" },
        prompt: {
          pl: "Szkolny slajd porównawczy dla klasy 5, jasne tło, bez grozy. DWA równe obrazy obok siebie. LEWY, podpis „dawniej”: jasna sala z półkami pełnymi zwojów papirusu, kolumny, uczeni w tunikach przy stołach, spokojne światło; to rekonstrukcja starożytnej Biblioteki Aleksandryjskiej, NIE kopia kadru z filmu. PRAWY, podpis „teraz”: współczesna Bibliotheca Alexandrina w Egipcie — wielki pochylony gmach przy morzu, jasny kamień, dzień, ludzie jak turyści, bez tłumów-chaosu. Tytuł u góry: „Biblioteka Aleksandryjska”. Nie maluj pożaru biblioteki ani ruin z dymem.",
          ua: "Шкільний порівняльний слайд для 5 класу. Ліворуч «dawniej»: зала зі сувоями папірусу. Праворуч «teraz»: сучасна Бібліотека Александріна біля моря. Без пожежі."
        }
      }),
      text: {
        pl: [
          ["W egipskiej ", em("Aleksandrii"), " powstała słynna biblioteka: zwoje wiedzy z całego świata hellenistycznego."],
          "Dziś w tym mieście stoi nowa biblioteka. To most z lekcji: kultura, którą Grecy ponieśli na Wschód, wciąż ma adres na mapie."
        ],
        ua: [
          ["В єгипетській ", em("Александрії"), " постала славетна бібліотека: сувої знань з усього елліністичного світу."],
          "Сьогодні в цьому місті стоїть нова бібліотека. Це міст з уроку: культура, яку греки понесли на Схід, досі має адресу на мапі."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "imperium — wielkie państwo złożone z wielu ziem i ludów", ua: "імперія — велика держава з багатьох земель і народів" },
        { pl: "falanga macedońska — zwarty szyk z bardzo długimi włóczniami (sarissa)", ua: "македонська фаланга — щільний стрій із дуже довгими списами (сариса)" },
        { pl: "węzeł gordyjski — legenda: Aleksander rozciął niemożliwy węzeł", ua: "гордіїв вузол — легенда: Александр розрубав неможливий вузол" },
        { pl: "hellenizacja — rozpowszechnianie języka i kultury greckiej na Wschodzie", ua: "еллінізація — поширення грецької мови і культури на Сході" },
        { pl: "kultura hellenistyczna — mieszanka kultury greckiej i kultur Wschodu", ua: "елліністична культура — суміш грецької культури і культур Сходу" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Filip II doszedł nad Indus w 323 p.n.e., a kultura hellenistyczna to tylko piramidy Egiptu bez Greków.”",
        ua: "«Філіпп II дійшов до Інду 323 до н.е., а елліністична культура — це лише піраміди Єгипту без греків.»"
      },
      text: {
        pl: [
          "Nad Indus i do 323 p.n.e. — to Aleksander, nie ojciec. Filip zjednoczył Grecję i planował Persję, ale wyprawę poprowadził syn. Kultura hellenistyczna = Grecy + Wschód, nie same piramidy."
        ],
        ua: [
          "До Інду і до 323 до н.е. — це Александр, не батько. Філіпп об’єднав Грецію і планував Персію, але похід повів син. Елліністична культура = греки + Схід, не самі піраміди."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, dlaczego wielkie imperium Aleksandra nie przetrwało długo po jego śmierci. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, чому велика імперія Александра не протрималася довго після його смерті. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: brak trwałego następcy, wiele ziem i ludów, wodzowie podzielili państwo."
        ],
        ua: [
          "Підказка: немає тривалого наступника, багато земель і народів, вожді поділили державу."
        ]
      },
      task: {
        id: "h11-logic",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej tłumaczy rozpad imperium?",
          ua: "Яке речення найкраще пояснює розпад імперії?"
        },
        options: [
          { id: "a", label: { pl: "Po śmierci króla państwo podzielono na mniejsze — nie było jednego trwałego następcy", ua: "Після смерті царя державу поділили на менші — не було одного тривалого наступника" } },
          { id: "b", label: { pl: "Grecy nigdy nie wyszli z Macedonii", ua: "Греки ніколи не вийшли з Македонії" } },
          { id: "c", label: { pl: "Imperium zniszczył Wielki Mur Chiński", ua: "Імперію зруйнував Великий китайський мур" } }
        ],
        answer: "a",
        hint: {
          pl: "Mapa z 323: jedno pole, potem strzałki w kilka stron.",
          ua: "Мапа 323: одне поле, потім стрілки в кілька боків."
        },
        explanation: {
          pl: "Wielkość bez planu dziedziczenia = podział. Kultura grecka została dłużej niż granice.",
          ua: "Велич без плану спадщини = поділ. Грецька культура лишилася довше за кордони."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Aleksandria na mapie świata", ua: "Александрія на мапі світу" },
      task: {
        id: "h11-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co najlepiej pokazuje, że podboje zostawiły coś więcej niż granice na mapie?",
          ua: "Що найкраще показує, що підбої лишили щось більше за кордони на мапі?"
        },
        options: [
          { id: "a", label: { pl: "hellenizacja, kultura hellenistyczna i ośrodki wiedzy jak Biblioteka Aleksandryjska (oraz latarnia na Faros — jeden z siedmiu cudów)", ua: "еллінізація, елліністична культура і осередки знання як Александрійська бібліотека (і маяк на Фаросі — один із семи чудес)" } },
          { id: "b", label: { pl: "tylko to, że Filip II malował wazy w Atenach", ua: "лише те, що Філіпп II малював вази в Афінах" } },
          { id: "c", label: { pl: "to, że Grecy zapomnieli alfabetu", ua: "те, що греки забули абетку" } }
        ],
        answer: "a",
        hint: {
          pl: "KN ponadpodstawowo: skutki kultury i „Tajemnice sprzed wieków” — Faros.",
          ua: "Книга вчителя, понадбазово: наслідки культури і «Таємниці» — Фарос."
        },
        explanation: {
          pl: "Granice pękły w 323. Język, miasta, biblioteka i latarnia zostały w pamięci świata.",
          ua: "Кордони тріснули 323. Мова, міста, бібліотека і маяк лишилися в пам’яті світу."
        }
      },
      text: {
        pl: [
          "Ponadpodstawowo: w Aleksandrii stała też latarnia morska na wyspie Faros — jeden z siedmiu cudów świata. To już ciekawostka, nie nowa bitwa."
        ],
        ua: [
          "Понадбазово: в Александрії стояв також маяк на острові Фарос — одне з семи чудес світу. Це вже цікавинка, не нова битва."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h11-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które zestawienie jest poprawne?",
          ua: "Яке поєднання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "Filip II — Macedonia; Aleksander — wyprawa na Persję; 323 p.n.e. — śmierć i podział; skutek — kultura hellenistyczna", ua: "Філіпп II — Македонія; Александр — похід на Персію; 323 до н.е. — смерть і поділ; наслідок — елліністична культура" } },
          { id: "b", label: { pl: "Filip II założył Rzym w 753 p.n.e.", ua: "Філіпп II заснував Рим 753 до н.е." } },
          { id: "c", label: { pl: "Aleksander przegrał wszystkie bitwy z Dariuszem", ua: "Александр програв усі битви Дарію" } }
        ],
        answer: "a",
        hint: {
          pl: "Ojciec jednoczy Grecję, syn idzie na wschód, po śmierci podział, zostaje mieszanka kultur.",
          ua: "Батько єднає Грецію, син іде на схід, після смерті поділ, лишається суміш культур."
        },
        explanation: {
          pl: "To szkielet lekcji. Rzym i 753 to następny rozdział.",
          ua: "Це кістяк уроку. Рим і 753 — наступний розділ."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W IV wieku p.n.e. Filip II, władca Macedonii, podbił niemal całą Grecję.",
          ["IV wieku p.n.e.", "Filip II", "Macedonii"],
          "У IV столітті до н.е. Філіпп II, володар Македонії, підкорив майже всю Грецію.",
          ["IV столітті до н.е.", "Філіпп II", "Македонії"]
        ),
        mark(
          "Następcą Filipa II był Aleksander Wielki. W drugiej połowie IV wieku p.n.e. jego armia wyruszyła na podbój imperium perskiego.",
          ["Aleksander Wielki", "imperium perskiego"],
          "Наступником Філіппа II був Александр Великий. У другій половині IV століття до н.е. його армія вирушила на підкорення перської імперії.",
          ["Александр Великий", "перської імперії"]
        ),
        mark(
          "Aleksander odniósł zwycięstwa nad Persami między innymi pod Issos (333 p.n.e.) i Gaugamelą (331 p.n.e.). Wojska podbiły m.in. Babilonię, Egipt i Persję. Imperium sięgało od Macedonii po rzekę Indus.",
          ["Issos", "333", "Gaugamelą", "331", "Indus"],
          "Александр здобув перемоги над персами між іншим під Іссом (333 до н.е.) і Гавгамелою (331 до н.е.). Війська підкорили між іншим Вавилонію, Єгипет і Персію. Імперія сягала від Македонії по річку Інд.",
          ["Іссом", "333", "Гавгамелою", "331", "Інд"]
        ),
        mark(
          "Skutkiem podbojów było powstanie kultury hellenistycznej z połączenia kultury greckiej i wpływów kultur Wschodu.",
          ["kultury hellenistycznej"],
          "Наслідком підбоїв стало постання елліністичної культури з поєднання грецької культури і впливів культур Сходу.",
          ["елліністичної культури"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Ustrój starożytnego Rzymu. Inne morze, inna republika — ale pytanie to samo: jak rządzić wielkim państwem.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Устрій стародавнього Риму. Інше море, інша республіка — але питання те саме: як правити великою державою.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "4eaFQIE7za0",
        title: {
          pl: "Krótkie Lekcje: Imperium Aleksandra Wielkiego",
          ua: "Короткі уроки: Імперія Александра Великого"
        }
      }
    }
  ]
};
