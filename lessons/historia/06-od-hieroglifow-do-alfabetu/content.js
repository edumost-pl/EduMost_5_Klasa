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
      heading: { pl: "Od hieroglifów do alfabetu", ua: "Від ієрогліфів до алфавіту" },
      formula: "obrazek → głoska",
      text: {
        pl: [
          "Najpierw ludzie mówili i rysowali na ścianach jaskiń. Potem pojawiło się pismo — i skończyła się prehistoria.",
          "Dziś: po co powstało pismo, Sumerowie i Egipcjanie, alfabet Fenicjan, Grecy, Rzymianie i nasze litery."
        ],
        ua: [
          "Спочатку люди говорили і малювали на стінах печер. Потім з’явилося письмо — і скінчилася доісторія.",
          "Сьогодні: навіщо виникло письмо, шумери і єгиптяни, абетка фінікійців, греки, римляни і наші літери."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, dlaczego powstało pismo i co kończy prehistorię", ua: "сказати, чому виникло письмо і що кінчає доісторію" },
        { pl: "odróżnić pismo obrazkowe, klinowe i alfabet", ua: "відрізнити образотворче письмо, клинопис і абетку" },
        { pl: "powiedzieć, jak Fenicjanie, Grecy i Rzymianie zmienili pismo", ua: "сказати, як фінікійці, греки і римляни змінили письмо" },
        { pl: "wskazać, skąd wziął się alfabet polski", ua: "вказати, звідки взялася польська абетка" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Zanim powstało pismo", ua: "Перш ніж виникло письмо" },
      visual: gh("047", {
        kind: "image-placeholder",
        alt: {
          pl: "Malowidła zwierząt w jaskini Lascaux",
          ua: "Малюнки тварин у печері Ласко"
        },
        title: { pl: "Lascaux: myśli na ścianie", ua: "Ласко: думки на стіні" },
        prompt: {
          pl: "Szkolna ilustracja dla klasy 5: fragment ściany jaskini Lascaux (Francja), ciepłe światło pochodni, bez grozy. Duże malowidła zwierząt na ochrowo-brązowym tle skały: wyraźny jasny byk po lewej, ciemniejsze rogate zwierzę po prawej, mniejsze jelenie w środku. Styl paleolityczny, jak zdjęcie jaskini, nie komiks. Polski podpis na dole: „zwierzęta namalowane na ścianie jaskini w Lascaux (Francja)”. Nad obrazem krótka etykieta: „rozwój mowy → wyrażanie myśli, uczyć, doświadczeń”. Ciemne tło tablicy wokół zdjęcia, czytelne, muzealne.",
          ua: "Шкільна ілюстрація для 5 класу: фрагмент стіни печери Ласко (Франція), тепле світло смолоскипа, без жаху. Великі малюнки тварин на охрасто-коричневому камені: світлий бик ліворуч, темніша рогата тварина праворуч, менші олені в центрі. Стиль палеоліту, як фото печери. Підпис: «тварини намальовані на стіні печери в Ласко (Франція)». Етикетка: «розвиток мови → вираження думок, навчання, досвід». Музейне світло."
        }
      }),
      text: {
        pl: [
          "Zanim powstało pismo, ludzie wyrażali myśli mową. Rysowali też na ścianach jaskiń — jak w Lascaux we Francji."
        ],
        ua: [
          "Перш ніж виникло письмо, люди виражали думки мовою. Малювали також на стінах печер — як у Ласко у Франції."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Wynalezienie pisma", ua: "Винайдення письма" },
      timelineYear: 3500,
      formula: "IV tys. p.n.e.",
      visual: gh("048", {
        kind: "image-placeholder",
        alt: {
          pl: "Gliniana tabliczka z piktogramami",
          ua: "Глиняна табличка з піктограмами"
        },
        title: { pl: "Koniec prehistorii, początek starożytności", ua: "Кінець доісторії, початок давнини" },
        prompt: {
          pl: "Zbliżenie muzealne prostokątnej, jasnobrązowej glinianej tabliczki z IV tysiąclecia p.n.e. dla klasy 5. Na powierzchni w polach wyryte wczesne piktogramy / proto-kliny: ziarno, zwierzę, naczynie — czytelne jako „obrazki rzeczy”, nie mikroskopijny druk. Miękkie światło gabloty, faktura gliny. Wokół na ciemnym tle tablicy polskie punkty: „IV tysiąclecie p.n.e.”; „koniec prehistorii → początek starożytności”; „pismo umożliwiało zapis: bydło i plony, bitwy, panowanie władców, mity o bogach”. Bez krwi i bez scen bitew — tylko zabytek.",
          ua: "Музейне наближення прямокутної світло-коричневої глиняної таблички з IV тисячоліття до н.е. для 5 класу. На поверхні ранні піктограми: збіжжя, тварина, посудина. М’яке світло вітрини. Підписи: «IV тисячоліття до н.е.»; «кінець доісторії → початок давнини»; «письмо давало запис: худоба і врожаї, битви, правління, міфи». Без крові — лише пам’ятка."
        }
      }),
      text: {
        pl: [
          ["Pismo wynaleziono w ", em("IV tysiącleciu p.n.e."), " To ", em("koniec prehistorii"), " i początek ", em("starożytności"), "."],
          "Dzięki pismu zapisywano bydło i plony, bitwy, panowanie władców, legendy o bogach."
        ],
        ua: [
          ["Письмо винайшли в ", em("IV тисячолітті до н.е."), " Це ", em("кінець доісторії"), " і початок ", em("давнини"), "."],
          "Завдяки письму записували худобу і врожаї, битви, правління володарів, легенди про богів."
        ]
      },
      task: {
        id: "h06-prehistoria",
        type: "true-false",
        level: "A",
        question: {
          pl: "Wynalezienie pisma kończy prehistorię i zaczyna starożytność — prawda czy fałsz?",
          ua: "Винайдення письма кінчає доісторію і починає давнину — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Gdy pojawia się zapis, historyk ma źródło pisane.",
          ua: "Коли з’являється запис, історик має писане джерело."
        },
        explanation: {
          pl: "Prawda. Prehistoria = bez pisma. Starożytność zaczyna się wraz z pismem.",
          ua: "Правда. Доісторія = без письма. Давнина починається разом із письмом."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Sumerowie: ewolucja znaków", ua: "Шумери: еволюція знаків" },
      visual: gh("049", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy kolumny: obrazek, uproszczenie, pismo klinowe",
          ua: "Три колонки: малюнок, спрощення, клинопис"
        },
        title: { pl: "Od rybki do klina", ua: "Від рибки до клина" },
        prompt: {
          pl: "Infografika szkolna dla klasy 5, jasne tło, trzy pionowe kolumny ze strzałkami w prawo. Nagłówki po polsku: „pismo obrazkowe”, „uproszczone pismo obrazkowe”, „pismo klinowe”. Wiersze znaków: stopa, głowa, ptak, ryba, fale wody. Kolumna 1: czytelne rysunki przedmiotów. Kolumna 2: te same znaki obrócone o 90° i uproszczone do kilku kresek. Kolumna 3: wyłącznie kliny odciskane rylcem — trójkątne odciski. Dużo powietrza, czarne linie na kremie, styl tablicy podręcznikowej. Żadnych scen wojny. Krótka etykieta: „Sumerowie — pierwsi wynaleźli pismo; ok. 2000 lat klinów w Mezopotamii”.",
          ua: "Шкільна інфографіка для 5 класу, три вертикальні колонки. Заголовки: «образотворче письмо», «спрощене образотворче», «клинопис». Рядки: стопа, голова, птах, риба, хвилі. Колонка 1: зрозумілі малюнки. Колонка 2: ті самі знаки повернуті на 90° і спрощені. Колонка 3: лише клини від стилуса. Багато повітря. Етикетка: «шумери — перші винайшли письмо; бл. 2000 років клинів у Месопотамії»."
        }
      }),
      text: {
        pl: [
          ["Sumerowie ", em("jako pierwsi wynaleźli pismo"), ". Usprawniło to państwo: prawa, czyny bohaterskie, handel, modlitwy."],
          ["Ewolucja: pismo obrazkowe → uproszczone → ", em("pismo klinowe"), " (znaki jak kliny). Używano go w Mezopotamii ok. 2000 lat."]
        ],
        ua: [
          ["Шумери ", em("першими винайшли письмо"), ". Воно впорядкувало державу: закони, героїчні вчинки, торгівля, молитви."],
          ["Еволюція: образотворче письмо → спрощене → ", em("клинопис"), " (знаки як клини). У Месопотамії ним користувалися бл. 2000 років."]
        ]
      },
      task: {
        id: "h06-check-klinowe",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywa się pismo Sumerów odciskane trzciną na glinie?",
          ua: "Як називається письмо шумерів, відтиснуте очеретом на глині?"
        },
        answer: ["pismo klinowe", "klinowe", "клинопис", "pismo klinow"],
        hint: {
          pl: "Znaki wyglądają jak kliny.",
          ua: "Знаки виглядають як клини."
        },
        explanation: {
          pl: "Pismo klinowe — trzeci krok po obrazku i uproszczeniu.",
          ua: "Клинопис — третій крок після малюнка і спрощення."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Egipcjanie: hieroglify i papirus", ua: "Єгиптяни: ієрогліфи і папірус" },
      visual: gh("050", {
        kind: "image-placeholder",
        alt: {
          pl: "Hieroglify, pismo demotyczne i zwój papirusu",
          ua: "Ієрогліфи, демотичне письмо і сувій папірусу"
        },
        title: { pl: "Uproszczenie i materiał do pisania", ua: "Спрощення і матеріал для письма" },
        prompt: {
          pl: "Infografika Egiptu dla klasy 5, jasne tło, trzy kadry w poziomie. LEWY: zbliżenie hieroglifów wykutych w jasnym kamieniu (ptak, oko, trzcina) — podpis „hieroglify — teksty religijne na ścianach świątyń, pałaców, grobowców; dokumenty państwa”. ŚRODEK: duża strzałka „UPROSZCZENIE” i ciemna tabliczka z pismem demotycznym (bardziej kursywa, mniej obrazków) — „pismo demotyczne (ludowe)”. PRAWY: stos żółtawych arkuszy papirusu i zwój przewiązany sznurkiem + żywa roślina papirusu (Cyperus) z parasolowatym czubkiem. Podpis: „do zapisu używano papirusu”. Muzealne światło, bez grozy, czytelne polskie etykiety.",
          ua: "Інфографіка Єгипту для 5 класу, три кадри. ЛІВОРУЧ: ієрогліфи в світлому камені — «ієрогліфи — релігійні тексти на стінах храмів, палаців, гробниць; державні документи». ЦЕНТР: стрілка «СПРОЩЕННЯ» і демотичне письмо. ПРАВОРУЧ: аркуші папірусу, сувій і жива рослина папірусу. Підпис: «для запису використовували папірус». Музейне світло, без жаху."
        }
      }),
      text: {
        pl: [
          ["Egipskie pismo obrazkowe to ", em("hieroglify"), " — na ścianach świątyń i w dokumentach. Z czasem uproszczono je do pisma demotycznego."],
          "Pisano na ", em("papirusie"), " — z rośliny rosnącej nad Nilem."
        ],
        ua: [
          ["Єгипетське образотворче письмо — ", em("ієрогліфи"), " — на стінах храмів і в документах. З часом їх спростили до демотичного письма."],
          "Писали на ", em("папірусі"), " — з рослини над Нілом."
        ]
      },
      task: {
        id: "h06-piktogram",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co to jest piktogram / pismo obrazkowe?",
          ua: "Що таке піктограма / образотворче письмо?"
        },
        options: [
          { id: "a", label: { pl: "znak-obrazek, który wygląda jak rzecz", ua: "знак-малюнок, який виглядає як річ" } },
          { id: "b", label: { pl: "nazwa faraona Cheopsa", ua: "ім’я фараона Хеопса" } },
          { id: "c", label: { pl: "22 litery Fenicjan", ua: "22 літери фінікійців" } }
        ],
        answer: "a",
        hint: {
          pl: "Picto = obrazek. Hieroglif i najstarsze pismo sumeryjskie.",
          ua: "Пікто = малюнок. Ієрогліф і найдавніше шумерське письмо."
        },
        explanation: {
          pl: "Obrazek rzeczy. Alfabet to już dźwięk, nie rysunek ryby.",
          ua: "Малюнок речі. Абетка — це вже звук, не рисунок риби."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Fenicjanie i alfabet", ua: "Фінікійці і абетка" },
      timelineId: "alfabet",
      formula: "XI w. p.n.e. · 22 znaki",
      visual: gh("051", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Fenicji i szlaków na Morzu Śródziemnym; galera",
          ua: "Карта Фінікії і шляхів на Середземному морі; галера"
        },
        title: { pl: "Żeglarze ze wschodniego brzegu", ua: "Мореплавці зі східного берега" },
        prompt: {
          pl: "Szkolna mapa Morza Śródziemnego dla klasy 5, jasny atlas. Fenicja zaznaczona małym pomarańczowym pasem na wschodnim brzegu (dzisiejszy Liban/Syria). Czerwone linie szlaków handlowych przez całe morze: Afryka Północna, Hiszpania, Italia, Grecja. Legenda: „szlaki handlowe Fenicjan”, „Fenicja”. Miasta Tyr, Sydon. Bez współczesnych granic państw. Wstawka u góry: spokojna rycina fenickiej galery z głową konia na dziobie, żaglem i wiosłami, miasto z basztami na brzegu — bez bitwy. Druga mała wstawka: tabela ewolucji kilku liter (ox-head → fenicka → grecka → łacińska A/B), czytelna, 4–5 rzędów. Styl podręcznika.",
          ua: "Шкільна карта Середземного моря для 5 класу. Фінікія малим помаранчевим пасом на східному березі. Червоні лінії торгових шляхів через усе море. Легенда: «торгові шляхи фінікійців», «Фінікія». Міста Тир, Сидон. Вставка: спокійна гравюра фінікійської галери з головою коня на носі — без битви. Друга вставка: таблиця еволюції літер A/B. Стиль підручника."
        }
      }),
      text: {
        pl: [
          [em("Fenicjanie"), " — lud żeglarzy ze wschodniego brzegu Morza Śródziemnego."],
          ["Każdej spółgłosce przyporządkowali literę. W ", em("XI wieku p.n.e."), " powstało ", em("pismo alfabetyczne"), ": 22 znaki, wygodne w użyciu. Dzięki podróżom rozpowszechnili je po morzu."]
        ],
        ua: [
          [em("Фінікійці"), " — народ мореплавців зі східного берега Середземного моря."],
          ["Кожній приголосні вони дали літеру. В ", em("XI столітті до н.е."), " виникло ", em("алфавітне письмо"), ": 22 знаки, зручні. Завдяки подорожам поширили його морем."]
        ]
      },
      task: {
        id: "h06-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Skąd pochodzili twórcy alfabetu z tej lekcji?",
          ua: "Звідки походили творці абетки з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "z Chin nad Huang He", ua: "з Китаю над Хуанхе" } },
          { id: "b", label: { pl: "z Fenicji, przy wschodnim brzegu Morza Śródziemnego", ua: "з Фінікії, при східному березі Середземного моря" } },
          { id: "c", label: { pl: "z Gniezna nad Wartą", ua: "з Гнєзна над Вартою" } }
        ],
        answer: "b",
        hint: {
          pl: "Kupcy-żeglarze z Tyru i Sydonu.",
          ua: "Купці-мореплавці з Тиру і Сидону."
        },
        explanation: {
          pl: "Fenicja. Chińskie znaki to inna droga. Gniezno — Polska.",
          ua: "Фінікія. Китайські знаки — інший шлях. Гнєзно — Польща."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Grecy", ua: "Греки" },
      visual: gh("052", {
        kind: "image-placeholder",
        alt: {
          pl: "Kamienna tablica z literami greckimi",
          ua: "Кам’яна таблиця з грецькими літерами"
        },
        title: { pl: "Samogłoski i zapis od lewej", ua: "Голосні і запис зліва" },
        prompt: {
          pl: "Zbliżenie zwietrzałej, jasnobrązowej kamiennej steli z wyrytymi wielkimi literami greckimi (theta, eta, beta, alfa, sigma, omikron…) dla klasy 5. Głębokie litery, boczne światło, faktura kamienia, bez nowoczesnych napisów. Na ciemnym pasku tablicy po lewej polskie punkty: „przejęli pismo Fenicjan”; „dodali znaki na samogłoski”; „zasada: pisać od lewej strony”. Muzealne, czytelne, bez ruin-horroru.",
          ua: "Наближення вивітрілої світло-коричневої стели з великими грецькими літерами для 5 класу. Глибокі літери, бічне світло. Підписи: «перейняли письмо фінікійців»; «додали знаки на голосні»; «правило: писати зліва». Музейно, без жаху."
        }
      }),
      text: {
        pl: [
          "Grecy przejęli pismo Fenicjan i wprowadzili zmiany: znaki na ", em("samogłoski"), " oraz zasadę pisania ", em("od lewej strony"), "."
        ],
        ua: [
          "Греки перейняли письмо фінікійців і внесли зміни: знаки на ", em("голосні"), " і правило писати ", em("зліва"), "."
        ]
      },
      task: {
        id: "h06-check-tf",
        type: "true-false",
        level: "A",
        question: {
          pl: "Grecy dodali do alfabetu fenickiego znaki na samogłoski — prawda czy fałsz?",
          ua: "Греки додали до фінікійської абетки знаки на голосні — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Fenicjanie zapisywali głównie spółgłoski.",
          ua: "Фінікійці записували головно приголосні."
        },
        explanation: {
          pl: "Prawda. Potem Rzymianie wezmą grecki wzór i zmienią kształt liter.",
          ua: "Правда. Потім римляни візьмуть грецький зразок і змінять форму літер."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzymianie: alfabet łaciński", ua: "Римляни: латинська абетка" },
      visual: gh("053", {
        kind: "image-placeholder",
        alt: {
          pl: "Rzymski napis kapitałami w kamieniu",
          ua: "Римський напис капітелями в камені"
        },
        title: { pl: "21 znaków, potem 5 dodatkowych", ua: "21 знак, потім 5 додаткових" },
        prompt: {
          pl: "Zbliżenie rzymskiej inskrypcji w jasnym wapieniu dla klasy 5: klasyczne kapitały kwadratowe (A, V, O, M, N, E…), głęboko wyryte, boczne światło podkreśla cień liter. Żadnych współczesnych tabliczek. Na ciemnym tle po lewej polskie punkty: „przejęli pismo alfabetyczne od Greków”; „zmienili kształt liter”; „alfabet łaciński (rzymski) — 21 znaków + 5 dodatkowych”. Styl muzealny, czytelny, bez scen walki.",
          ua: "Наближення римського напису в світлому вапняку для 5 класу: класичні капіталі (A, V, O, M…). Підписи: «перейняли алфавітне письмо від греків»; «змінили форму літер»; «латинська (римська) абетка — 21 знак + 5 додаткових». Музейний стиль, без бою."
        }
      }),
      text: {
        pl: [
          ["Rzymianie przejęli alfabet od Greków, zmienili kształt liter i wprowadzili ", em("alfabet łaciński"), " (rzymski): najpierw 21 znaków, potem 5 dodatkowych."]
        ],
        ua: [
          ["Римляни перейняли абетку від греків, змінили форму літер і запровадили ", em("латинську абетку"), " (римську): спочатку 21 знак, потім 5 додаткових."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Współcześnie", ua: "Сьогодні" },
      visual: gh("054", {
        kind: "map-placeholder",
        alt: {
          pl: "Dwie mapy: cyrylica w Eurazji i alfabet łaciński na świecie",
          ua: "Дві карти: кирилиця в Євразії і латинська абетка у світі"
        },
        title: { pl: "Grecki trop i łacina", ua: "Грецький слід і латина" },
        prompt: {
          pl: "Dwie szkolne mapy dla klasy 5, jasne tło. GÓRA: mapa Eurazji, ciemnozielonym kolorem kraje używające cyrylicy / pisma z greckiego pnia (m.in. Rosja, Ukraina, Białoruś, Bułgaria, Serbia) — reszta szara. Podpis: „alfabet grecki → cyrylica — część narodów słowiańskich”. DÓŁ: mapa świata, zielenie tam, gdzie dominuje alfabet łaciński (obie Ameryki, większość Europy, duża część Afryki, Australia). Podpis: „alfabet łaciński — bardzo rozpowszechniony; polski alfabet powstał na jego bazie (dodano znaki na polskie dźwięki: ą, ć, ę, ł…)”. Bez sporów politycznych w legendzie, atlas szkolny, czytelna legenda.",
          ua: "Дві шкільні карти для 5 класу. ВГОРІ: Євразія, темно-зеленим країни кирилиці / грецького пня. Підпис: «грецька абетка → кирилиця — частина слов’янських народів». ВНИЗУ: карта світу, зелень там, де панує латиниця. Підпис: «латинська абетка — дуже поширена; польська абетка виникла на її основі (додано знаки на польські звуки)». Шкільний атлас."
        }
      }),
      text: {
        pl: [
          "Alfabet grecki dał cyrylicę — używa jej część narodów słowiańskich.",
          ["Alfabet ", em("łaciński"), " jest bardzo rozpowszechniony. ", em("Polski alfabet"), " powstał na jego bazie: dodano litery na polskie dźwięki."]
        ],
        ua: [
          "Грецька абетка дала кирилицю — нею користується частина слов’янських народів.",
          ["Абетка ", em("латинська"), " дуже поширена. ", em("Польська абетка"), " виникла на її основі: додали літери на польські звуки."]
        ]
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Od obrazka do naszych liter", ua: "Від малюнка до наших літер" },
      reveal: true,
      steps: [
        {
          formula: "1. OBRAZEK",
          text: {
            pl: "Jaskinia i piktogram: znak wygląda jak rzecz.",
            ua: "Печера і піктограма: знак виглядає як річ."
          }
        },
        {
          formula: "2. UPROSZCZENIE",
          text: {
            pl: "Hieroglify i pismo klinowe: dużo znaków, piszą wykształceni.",
            ua: "Ієрогліфи і клинопис: багато знаків, пишуть освічені."
          }
        },
        {
          formula: "3. GŁOSKA",
          text: {
            pl: "Alfabet Fenicjan (22 spółgłoski) → Grecy dodają samogłoski → Rzymianie: alfabet łaciński → polskie litery.",
            ua: "Абетка фінікійців (22 приголосні) → греки додають голосні → римляни: латинська абетка → польські літери."
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "pismo obrazkowe / piktogram — znak wygląda jak rzecz", ua: "образотворче письмо / піктограма — знак виглядає як річ" },
        { pl: "hieroglify — pismo Egiptu na ścianach i papirusie", ua: "ієрогліфи — письмо Єгипту на стінах і папірусі" },
        { pl: "pismo klinowe — znaki-kliny Sumerów na glinie", ua: "клинопис — знаки-клини шумерів на глині" },
        { pl: "pismo alfabetyczne — znak = głoska (Fenicjanie, XI w. p.n.e.)", ua: "алфавітне письмо — знак = звук (фінікійці, XI ст. до н.е.)" },
        { pl: "alfabet łaciński — od Rzymian; baza polskiego alfabetu", ua: "латинська абетка — від римлян; основа польської абетки" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Dlaczego alfabet jest łatwiejszy od hieroglifów? Policz znaki w głowie."],
        ua: ["Чому абетка легша за ієрогліфи? Полічи знаки в голові."]
      },
      task: {
        id: "h06-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dlaczego alfabet Fenicjan był łatwiejszy do nauki niż hieroglify?",
          ua: "Чому абетка фінікійців була легша для навчання, ніж ієрогліфи?"
        },
        options: [
          { id: "a", label: { pl: "bo miał kilkadziesiąt znaków-głosek zamiast tysięcy obrazków", ua: "бо мала кілька десятків знаків-звуків замість тисяч малюнків" } },
          { id: "b", label: { pl: "bo Fenicjanie zabronili komukolwiek pisać", ua: "бо фінікійці заборонили будь-кому писати" } },
          { id: "c", label: { pl: "bo alfabet miał więcej znaków niż hieroglify", ua: "бо абетка мала більше знаків, ніж ієрогліфи" } }
        ],
        answer: "a",
        hint: {
          pl: "22 litery kontra tysiące hieroglifów.",
          ua: "22 літери проти тисяч ієрогліфів."
        },
        explanation: {
          pl: "Mniej znaków = więcej ludzi może się nauczyć pisać.",
          ua: "Менше знаків = більше людей може навчитися писати."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Alfabet wymyślili Egipcjanie, a każdy hieroglif to jedna polska litera.”",
        ua: "«Абетку вигадали єгиптяни, а кожен ієрогліф — одна польська літера.»"
      },
      text: {
        pl: [
          "Alfabet — Fenicjanie (XI w. p.n.e.). Hieroglif to znak obrazkowy, nie „jedna litera A”."
        ],
        ua: [
          "Абетка — фінікійці (XI ст. до н.е.). Ієрогліф — образотворчий знак, не «одна літера А»."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wyjaśnij, jakie znaczenie miało wynalezienie alfabetu.",
        ua: "Поясни, яке значення мало винайдення абетки."
      },
      text: {
        pl: [
          "Podpowiedź: mniej znaków, szybsza nauka, handel, pismo dla większej liczby ludzi.",
          "Powiedz 2–4 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: менше знаків, швидше навчання, торгівля, письмо для більшої кількості людей.",
          "Скажи 2–4 речення. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h06-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje znaczenie alfabetu?",
          ua: "Яке речення найкраще передає значення абетки?"
        },
        options: [
          { id: "a", label: { pl: "Alfabet utrudnił życie, bo dodał 6 tysięcy nowych znaków", ua: "Абетка ускладнила життя, бо додала 6 тисяч нових знаків" } },
          { id: "b", label: { pl: "Prostszy zapis dźwięków ułatwił naukę, handel i przekazywanie myśli", ua: "Простіший запис звуків полегшив навчання, торгівлю і передавання думок" } },
          { id: "c", label: { pl: "Alfabet służył tylko do ozdabiania piramid", ua: "Абетка служила лише для оздоблення пірамід" } }
        ],
        answer: "b",
        hint: {
          pl: "Fenicjanie byli kupcami — pismo miało być praktyczne.",
          ua: "Фінікійці були купцями — письмо мало бути практичним."
        },
        explanation: {
          pl: "Alfabet = narzędzie cywilizacji, nie ozdoba grobowca.",
          ua: "Абетка = знаряддя цивілізації, не прикраса гробниці."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wpisz nazwę ludu, który stworzył alfabet.",
        ua: "Введи назву народу, який створив абетку."
      },
      task: {
        id: "h06-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Twórcy alfabetu z tej lekcji to…",
          ua: "Творці абетки з цього уроку — це…"
        },
        answer: ["fenicjanie", "fenicjan", "фінікійці", "фінікійців", "fenicja"],
        hint: {
          pl: "Kupcy z Tyru i Sydonu, XI wiek p.n.e.",
          ua: "Купці з Тиру і Сидону, XI століття до н.е."
        },
        explanation: {
          pl: "Fenicjanie.",
          ua: "Фінікійці."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Co nie jest alfabetem?", ua: "Що не є абеткою?" },
      task: {
        id: "h06-odd",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Który zapis NIE jest alfabetem?",
          ua: "Який запис НЕ є абеткою?"
        },
        options: [
          { id: "a", label: { pl: "litery fenickie (znak = głoska)", ua: "фінікійські літери (знак = звук)" } },
          { id: "b", label: { pl: "alfabet grecki i łaciński", ua: "грецька і латинська абетка" } },
          { id: "c", label: { pl: "hieroglify egipskie (tysiące znaków-obrazków)", ua: "єгипетські ієрогліфи (тисячі знаків-малюнків)" } }
        ],
        answer: "c",
        hint: {
          pl: "Alfabet = mało znaków na dźwięki.",
          ua: "Абетка = мало знаків на звуки."
        },
        explanation: {
          pl: "Hieroglify to pismo obrazkowe. Alfabet przyszedł od Fenicjan.",
          ua: "Ієрогліфи — образотворче письмо. Абетка прийшла від фінікійців."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Zanim powstało pismo, ludzie wyrażali myśli rysunkami — na przykład na ścianach jaskiń.",
          ["pismo", "rysunkami", "jaskiń"],
          "Перш ніж виникло письмо, люди виражали думки малюнками — наприклад на стінах печер.",
          ["письмо", "малюнками", "печер"]
        ),
        mark(
          "Pismo jest niezbędnym elementem cywilizacji. Władcy łatwiej zarządzali państwem, spisywali dokonania i prawa, a kupcy prowadzili transakcje. Wynaleziono je w IV tysiącleciu p.n.e. — koniec prehistorii, początek starożytności.",
          ["cywilizacji", "IV tysiącleciu p.n.e.", "prehistorii", "starożytności"],
          "Письмо — необхідний елемент цивілізації. Володарі легше керували державою, записували вчинки і закони, а купці вели угоди. Винайшли його в IV тисячолітті до н.е. — кінець доісторії, початок давнини.",
          ["цивілізації", "IV тисячолітті до н.е.", "доісторії", "давнини"]
        ),
        mark(
          "Hieroglify egipskie i najstarsze pismo sumeryjskie to przykłady pisma obrazkowego. Z uproszczenia pisma obrazkowego powstało pismo klinowe.",
          ["Hieroglify", "pisma obrazkowego", "pismo klinowe"],
          "Єгипетські ієрогліфи і найдавніше шумерське письмо — приклади образотворчого письма. Зі спрощення образотворчого письма виник клинопис.",
          ["ієрогліфи", "образотворчого письма", "клинопис"]
        ),
        mark(
          "Od czasów Fenicjan w Europie rozwinęło się pismo alfabetyczne. W Europie stosuje się alfabety oparte na greckim i łacińskim. Alfabet polski jest oparty na alfabecie łacińskim.",
          ["Fenicjan", "pismo alfabetyczne", "łacińskim", "Alfabet polski"],
          "Від часів фінікійців у Європі розвинулося алфавітне письмо. У Європі вживають абетки на основі грецької і латинської. Польська абетка спирається на латинську.",
          ["фінікійців", "алфавітне письмо", "латинської", "Польська абетка"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Rozdział II: Grecja. Tam alfabet ożyje w teatrze, na agorze i w igrzyskach.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Розділ II: Греція. Там абетка оживе в театрі, на агорі і в іграх.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "syLP2UeWk48",
        title: {
          pl: "Krótkie Lekcje: Od hieroglifów do alfabetu",
          ua: "Короткі уроки: Від ієрогліфів до алфавіту"
        }
      }
    }
  ]
};
