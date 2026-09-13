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
      heading: { pl: "System feudalny", ua: "Феодальна система" },
      formula: "senior · wasal · lenno",
      text: {
        pl: [
          "W średniowieczu państwo było prywatną własnością władcy. Dziś: kto daje ziemię, kto służy, kto orze.",
          "Nie nowa data na osi — układ seniorów i wasali oraz cztery stany."
        ],
        ua: [
          "У середньовіччі держава була приватною власністю володаря. Сьогодні: хто дає землю, хто служить, хто оре.",
          "Не нова дата на осі — устрій сеньйорів і васалів та чотири стани."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać zależność seniora i wasala (lenno, służba, zdrada)", ua: "описати залежність сеньйора і васала (лен, служба, зрада)" },
        { pl: "powiedzieć, jak wyglądał hołd lenny", ua: "сказати, як виглядала ленна присяга" },
        { pl: "opisać drabinę feudalną (suzeren → wasale → chłopi)", ua: "описати феодальну драбину (сюзерен → васали → селяни)" },
        { pl: "nazwać i scharakteryzować cztery stany; wskazać stany uprzywilejowane", ua: "назвати і схарактеризувати чотири стани; вказати привілейовані стани" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Ziemia władcy", ua: "Земля володаря" },
      formula: "państwo = własność władcy",
      visual: gh("185", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: władca przekazuje ziemię rycerzom, dworzanom i duchownym za wierność",
          ua: "Схема: володар передає землю лицарям, придворним і духовенству за вірність"
        },
        title: { pl: "Poparcie za ziemię", ua: "Підтримка за землю" },
        prompt: {
          pl: "Szkolna infografika 16:9. Góra: król, podpis „ziemia = własność władcy”. Strzałki w dół do trzech grup: rycerz, dworzanin, duchowny. Strzałki w górę: „poparcie i wierność”. Tytuł: „społeczeństwo feudalne”. BEZ bitwy. Styl Nowej Ery.",
          ua: "Схема: король дає землю, отримує вірність. Без бою."
        }
      }),
      text: {
        pl: [
          ["W średniowieczu ziemia w państwie należała do ", em("władcy"), " (król, książę). Mógł ją przekazywać ", em("rycerzom"), ", dworzanom i duchownym."],
          ["W zamian oczekiwał ", em("poparcia i wierności"), ". Takie społeczeństwo nazywamy ", em("feudalnym"), ". To obraz Zachodu (Francja, Niemcy). W Polsce Piastów ziemia należała do księcia inaczej — ", em("prawo książęce"), " poznasz w lekcji 32."]
        ],
        ua: [
          ["У середньовіччі земля в державі належала ", em("володарю"), " (король, князь). Він міг передавати її ", em("лицарям"), ", придворним і духовенству."],
          ["Натомість чекав ", em("підтримки і вірності"), ". Таке суспільство називаємо ", em("феодальним"), ". Це образ Заходу (Франція, Німеччина). У Польщі П’ястів земля належала князю інакше — ", em("княже право"), " пізнаєш в уроці 32."]
        ]
      },
      task: {
        id: "h22-ziemia",
        type: "true-false",
        level: "A",
        question: {
          pl: "W średniowieczu ziemia w państwie była własnością władcy — prawda czy fałsz?",
          ua: "У середньовіччі земля в державі була власністю володаря — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie „ziemia wszystkich po równo”. Władca nadaje, inni służą.",
          ua: "Не «земля всіх порівну». Володар надає, інші служать."
        },
        explanation: {
          pl: "Prawda. KN: zasada feudalna. Równe prawa = dziś, challenge.",
          ua: "Правда. KN: феодальний принцип. Рівні права = сьогодні, challenge."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Senior i wasal", ua: "Сеньйор і васал" },
      formula: "lenno = feudum",
      visual: gh("186", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: senior nadaje lenno, wasal otrzymuje ziemię i służy; zdrada przekreślona",
          ua: "Схема: сеньйор надає лен, васал отримує землю і служить; зрада закреслена"
        },
        title: { pl: "Ziemia w dół, służba w górę", ua: "Земля вниз, служба вгору" },
        prompt: {
          pl: "Szkolny slajd 16:9. Góra: spokojny król „senior — nadaje ziemię”. Środek: pole „lenno (łac. feudum)”. Dół: rycerz STOI „wasal — otrzymuje ziemię”. Lista: wsparcie zbrojne, koń+zbroja, rada. Czerwony X i słowo „zdrada” przy sprzeciwie — BEZ egzekucji. Styl Nowej Ery.",
          ua: "Сеньйор дає лен, васал служить. Зрада = X, без страти."
        }
      }),
      text: {
        pl: [
          ["", em("Senior"), " (król lub książę) nadaje ziemię. Ta ziemia to ", em("lenno"), " (łac. ", em("feudum"), "). ", em("Wasal"), " ją otrzymuje."],
          ["Wasal: rada, walka zbrojna z innymi poddanymi, koń i zbroja na własny koszt. Lenno ", em("dziedziczyli"), " potomkowie. Sprzeciw wobec seniora to ", em("zdrada"), "."]
        ],
        ua: [
          ["", em("Сеньйор"), " (король або князь) надає землю. Ця земля — ", em("лен"), " (лат. ", em("feudum"), "). ", em("Васал"), " її отримує."],
          ["Васал: рада, збройна боротьба з іншими підданими, кінь і зброя власним коштом. Лен ", em("успадковували"), " нащадки. Опір сеньйору — ", em("зрада"), "."]
        ]
      },
      task: {
        id: "h22-lenno",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym jest lenno i kto je komu nadaje?",
          ua: "Що таке лен і хто його кому надає?"
        },
        options: [
          { id: "a", label: { pl: "ziemia od seniora dla wasala (łac. feudum)", ua: "земля від сеньйора для васала (лат. feudum)" } },
          { id: "b", label: { pl: "podatek, który chłop płaci papieżowi", ua: "податок, який селянин платить папі" } },
          { id: "c", label: { pl: "zakon rycerski z lekcji 21", ua: "лицарський орден з уроку 21" } }
        ],
        answer: "a",
        hint: {
          pl: "Feudum = ziemia, nie zakon. Joannici = lekcja 21.",
          ua: "Feudum = земля, не орден. Госпітальєри = урок 21."
        },
        explanation: {
          pl: "KN: lenno. Zakony = 21. Podatek kościelny = później, lekcja 25.",
          ua: "KN: лен. Ордени = 21. Церковний податок = пізніше, урок 25."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hołd lenny", ua: "Ленна присяга" },
      formula: "ceremonia nadania",
      visual: gh("187", {
        kind: "image-placeholder",
        alt: {
          pl: "Wasal klęczy przed seniorem, dłonie w dłoniach; obok włócznia, chorągiew, dokument",
          ua: "Васал клечить перед сеньйором, долоні в долонях; поряд спис, хоругва, документ"
        },
        title: { pl: "Klęczenie i przysięga, nie kara", ua: "Кліч і присяга, не кара" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojna ceremonia, dzień. Senior na tronie trzyma dłonie klęczącego wasala. BEZ szyderstwa, BEZ bicia. Trzy ikony: włócznia, chorągiew, dokument — „symbole nadania lenna”. Tytuł: „hołd lenny”. Styl Nowej Ery.",
          ua: "Присяга: васал клечить, долоні. Спис, хоругва, документ. Без наруги."
        }
      }),
      text: {
        pl: [
          ["", em("Hołd lenny"), " to uroczystość nadania lenna. Wasal klęka, chwyta lub całuje dłonie seniora i przysięga wierność."],
          ["Senior wręcza znak nadania: ", em("włócznię"), ", ", em("chorągiew"), " albo ", em("dokument"), "."]
        ],
        ua: [
          ["", em("Ленна присяга"), " (hołd lenny) — урочистість надання лену. Васал клечить, бере або цілує долоні сеньйора і присягає на вірність."],
          ["Сеньйор вручає знак надання: ", em("спис"), ", ", em("хоругву"), " або ", em("документ"), "."]
        ]
      },
      task: {
        id: "h22-hold",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co dzieje się podczas hołdu lennego?",
          ua: "Що відбувається під час ленної присяги?"
        },
        options: [
          { id: "a", label: { pl: "wasal klęka, przysięga; senior daje włócznię, chorągiew lub dokument", ua: "васал клечить, присягає; сеньйор дає спис, хоругву або документ" } },
          { id: "b", label: { pl: "wasal zostaje papieżem w Clermont", ua: "васал стає папою в Клермоні" } },
          { id: "c", label: { pl: "chłopi dzielą ziemię po równo", ua: "селяни ділять землю порівну" } }
        ],
        answer: "a",
        hint: {
          pl: "Ceremonia, nie koronacja papieska. Clermont = lekcja 21.",
          ua: "Церемонія, не папська коронація. Клермон = урок 21."
        },
        explanation: {
          pl: "KN: hołd lenny. Równy podział ziemi = nie średniowiecze.",
          ua: "KN: ленна присяга. Рівний поділ землі = не середньовіччя."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drabina feudalna", ua: "Феодальна драбина" },
      formula: "senior i wasal naraz",
      visual: gh("188", {
        kind: "image-placeholder",
        alt: {
          pl: "Piramida: suzeren, jego wasale, rycerze, na dole chłopi",
          ua: "Піраміда: сюзерен, його васали, лицарі, внизу селяни"
        },
        title: { pl: "Szczyt wąski, podstawa szeroka", ua: "Верх вузький, основа широка" },
        prompt: {
          pl: "Szkolna piramida 16:9, cztery poziomy, dzień. 1) suzeren (król na tronie). 2) możni / biskupi. 3) rycerze. 4) szeroka podstawa „CHŁOPI” przy pracy w polu, BEZ knuta. Czerwone strzałki w obie strony senior↔wasal na poziomach 1–3. Tytuł: „drabina feudalna”. Styl Nowej Ery.",
          ua: "Піраміда: король → васали → лицарі → селяни. Без батога."
        }
      }),
      text: {
        pl: [
          ["", em("Drabina feudalna"), " pokazuje, kto od kogo zależy. Na szczycie ", em("suzeren"), " (władca). Niżej jego wasale — i wasale tych wasali."],
          ["Jedna osoba może być ", em("seniorem i wasalem"), " jednocześnie. Na samym dole — ", em("chłopi"), ", najliczniejsi."]
        ],
        ua: [
          ["", em("Феодальна драбина"), " показує, хто від кого залежить. На вершині ", em("сюзерен"), " (володар). Нижче його васали — і васали тих васалів."],
          ["Одна особа може бути ", em("сеньйором і васалом"), " водночас. На самому споді — ", em("селяни"), ", найчисленніші."]
        ]
      },
      task: {
        id: "h22-drabina",
        type: "true-false",
        level: "B",
        question: {
          pl: "Wasal króla może być seniorem wobec rycerza niżej — prawda czy fałsz?",
          ua: "Васал короля може бути сеньйором для лицаря нижче — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Drabina ma kilka szczebli. Nie tylko król i jeden rycerz.",
          ua: "Драбина має кілька щаблів. Не лише король і один лицар."
        },
        explanation: {
          pl: "Prawda. KN: jedna osoba = senior i wasal. Chłopi na dole.",
          ua: "Правда. KN: одна особа = сеньйор і васал. Селяни внизу."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Cztery stany", ua: "Чотири стани" },
      formula: "inne prawa, inne obowiązki",
      visual: gh("189", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery pola: rycerstwo, duchowieństwo, mieszczaństwo, chłopi — spokojne zajęcia",
          ua: "Чотири поля: лицарство, духовенство, міщани, селяни — спокійні заняття"
        },
        title: { pl: "Grupy, nie kasta z filmu", ua: "Групи, не каста з фільму" },
        prompt: {
          pl: "Szkolny slajd 16:9, cztery ćwiartki, dzień. 1) rycerstwo/szlachta: ochrona, ziemia, urzędy. 2) duchowieństwo: kościół, rada, bez większości podatków. 3) mieszczaństwo: handel, rzemiosło, samorząd, daniny. 4) chłopi: uprawa, brak przywilejów. BEZ chłosty, BEZ pijanego kleru. Styl Nowej Ery.",
          ua: "Чотири стани, спокійні заняття. Без батога і без кпин."
        }
      }),
      text: {
        pl: [
          ["", em("Stany"), " to grupy z własnymi prawami i obowiązkami: ", em("rycerstwo"), " (potem szlachta), ", em("duchowieństwo"), ", ", em("mieszczaństwo"), ", ", em("chłopi"), "."],
          "Rycerze: obrona państwa i ziemia. Duchowni: kult i ważne funkcje na dworze. Mieszczanie: handel i rzemiosło. Chłopi: uprawa — bez przywilejów."
        ],
        ua: [
          ["", em("Стани"), " — групи з власними правами і обов’язками: ", em("лицарство"), " (потім шляхта), ", em("духовенство"), ", ", em("міщани"), ", ", em("селяни"), "."],
          "Лицарі: оборона держави і земля. Духівництво: культ і важливі функції на дворі. Міщани: торгівля і ремесло. Селяни: обробіток — без привілеїв."
        ]
      },
      task: {
        id: "h22-stany",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który stan zajmował się handlem i rzemiosłem?",
          ua: "Який стан займався торгівлею і ремеслом?"
        },
        options: [
          { id: "a", label: { pl: "mieszczaństwo", ua: "міщани" } },
          { id: "b", label: { pl: "chłopi — uprawa ziemi", ua: "селяни — обробіток землі" } },
          { id: "c", label: { pl: "rycerstwo — tylko modlitwa w klasztorze", ua: "лицарство — лише молитва в монастирі" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: mieszczanie = handel i rzemiosło. Chłopi orzą. Rycerze bronią państwa.",
          ua: "Картка: міщани = торгівля і ремесло. Селяни орють. Лицарі боронять державу."
        },
        explanation: {
          pl: "KN: scharakteryzować stany. Duchowni = kult i dwór. Chłopi = uprawa.",
          ua: "KN: схарактеризувати стани. Духівництво = культ і двір. Селяни = обробіток."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Przywileje", ua: "Привілеї" },
      formula: "wpływ na rządy",
      visual: gh("190", {
        kind: "image-placeholder",
        alt: {
          pl: "Władca nadaje przywilej; duchowny i rycerz bliżej tronu niż mieszczanin i chłop",
          ua: "Володар надає привілей; духовний і лицар ближче до трону, ніж міщанин і селянин"
        },
        title: { pl: "Nie wszystkim po równo", ua: "Не всім порівну" },
        prompt: {
          pl: "Szkolny slajd 16:9. Król wręcza dokument. Blisko tronu: biskup i rycerz, podpis „przywileje → wpływ na rządy”. Dalej: mieszczanin i chłop. Tytuł: „stany z przywilejami”. BEZ bicia. Styl Nowej Ery.",
          ua: "Привілеї для духовенства і лицарів. Без насильства."
        }
      }),
      text: {
        pl: [
          ["Władca mógł nadawać ", em("przywileje"), " osobie albo całej grupie. Dlatego powstały ", em("stany"), "."],
          ["", em("Duchowni i rycerze"), " dzięki przywilejom zdobyli wpływ na rządy w państwie."]
        ],
        ua: [
          ["Володар міг надавати ", em("привілеї"), " особі або цілій групі. Тому постали ", em("стани"), "."],
          ["", em("Духівництво і лицарі"), " завдяки привілеям здобули вплив на правління в державі."]
        ]
      },
      task: {
        id: "h22-przyw",
        type: "true-false",
        level: "B",
        question: {
          pl: "Duchowieństwo i rycerstwo przez przywileje miały wpływ na rządy — prawda czy fałsz?",
          ua: "Духовенство і лицарство через привілеї мали вплив на правління — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: stany uprzywilejowane. Chłopi — bez przywilejów.",
          ua: "KN: привілейовані стани. Селяни — без привілеїв."
        },
        explanation: {
          pl: "Prawda. KN/film. Chłopi i mieszczanie — inne obowiązki.",
          ua: "Правда. KN/фільм. Селяни і міщани — інші обов’язки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "A dziś?", ua: "А сьогодні?" },
      formula: "równe prawa",
      visual: gh("191", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: średniowieczne stany vs dziś wszyscy mają te same prawa",
          ua: "Схема: середньовічні стани проти сьогодні всі мають ті самі права"
        },
        title: { pl: "Podział trwał wieki", ua: "Поділ тривав століття" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie kolumny. LEWA: mała piramida stanów, podpis „obowiązywał przez wieki”. PRAWA: kilka jednakowych figurek obok siebie, podpis „w Polsce wszyscy mają te same prawa”. Mała linia „XVIII w. — zrównywanie praw”. BEZ zdjęcia tłumu z filmu. Styl Nowej Ery.",
          ua: "Дві колонки: стани | рівні права сьогодні. Без фото натовпу."
        }
      }),
      text: {
        pl: [
          "Podział na stany trwał wieki. W XVIII wieku zaczęto zrównywać ludzi w prawach.",
          "W Polsce dziś wszyscy mają te same prawa — to nie średniowieczna drabina."
        ],
        ua: [
          "Поділ на стани тривав століття. У XVIII столітті почали зрівнювати людей у правах.",
          "У Польщі сьогодні всі мають ті самі права — це не середньовічна драбина."
        ]
      },
      task: {
        id: "h22-dzis",
        type: "true-false",
        level: "C",
        question: {
          pl: "W Polsce dziś prawa zależą od stanu (rycerz vs chłop) — prawda czy fałsz?",
          ua: "У Польщі сьогодні права залежать від стану (лицар проти селянина) — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Film: zrównywanie od XVIII w. Dziś te same prawa.",
          ua: "Фільм: зрівняння від XVIII ст. Сьогодні ті самі права."
        },
        explanation: {
          pl: "Fałsz. Średniowiecze ≠ dziś. Challenge z filmu.",
          ua: "Неправда. Середньовіччя ≠ сьогодні. Challenge з фільму."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "feudalizm / społeczeństwo feudalne — układ seniorów i wasali wokół lenna", ua: "феодалізм / феодальне суспільство — устрій сеньйорів і васалів довкола лену" },
        { pl: "senior / wasal — kto nadaje ziemię / kto ją otrzymuje i służy", ua: "сеньйор / васал — хто надає землю / хто її отримує і служить" },
        { pl: "suzeren — władca na szczycie drabiny feudalnej", ua: "сюзерен — володар на вершині феодальної драбини" },
        { pl: "lenno (feudum) — ziemia nadana wasalowi; dziedziczona przez potomków", ua: "лен (feudum) — земля, надана васалу; її успадковують нащадки" },
        { pl: "hołd lenny — ceremonia: klęczenie, przysięga, włócznia / chorągiew / dokument", ua: "ленна присяга — церемонія: кліч, присяга, спис / хоругва / документ" },
        { pl: "drabina feudalna — hierarchia; można być seniorem i wasalem naraz", ua: "феодальна драбина — ієрархія; можна бути сеньйором і васалом водночас" },
        { pl: "stany — duchowieństwo, rycerstwo, mieszczaństwo, chłopi (inne prawa i obowiązki)", ua: "стани — духовенство, лицарство, міщани, селяни (різні права і обов’язки)" },
        { pl: "przywilej — szczególne prawo nadane przez władcę osobie lub stanowi", ua: "привілей — особливе право, надане володарем особі або стану" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Lenno to zakon joannitów. Hołd lenny odbył się w Clermont w 1095. Chłopi stali na szczycie drabiny. W Polsce dziś prawa ma tylko szlachta.”",
        ua: "«Лен — це орден госпітальєрів. Ленну присягу склали в Клермоні 1095 року. Селяни стояли на вершині драбини. У Польщі сьогодні права має лише шляхта.»"
      },
      text: {
        pl: [
          "Lenno = ziemia. Joannici i 1095 = lekcja 21. Na szczycie władca, na dole chłopi. Dziś w Polsce równe prawa."
        ],
        ua: [
          "Лен = земля. Госпітальєри і 1095 = урок 21. На вершині володар, внизу селяни. Сьогодні в Польщі рівні права."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, kim byli senior i wasal, jak wyglądał hołd i kto stał na dole drabiny. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, ким були сеньйор і васал, як виглядала присяга і хто стояв унизу драбини. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: lenno, klęczenie, włócznia; suzeren → wasale → chłopi."
        ],
        ua: [
          "Підказка: лен, кліч, спис; сюзерен → васали → селяни."
        ]
      },
      task: {
        id: "h22-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje lenno, hołd i drabinę?",
          ua: "Яке речення охоплює лен, присягу і драбину?"
        },
        options: [
          { id: "a", label: { pl: "Senior dawał wasalowi lenno; hołd to przysięga na kolanach; na dole drabiny chłopi", ua: "Сеньйор давав васалу лен; присяга — на колінах; унизу драбини селяни" } },
          { id: "b", label: { pl: "Wasal nadawał papieżowi Mekkę w 622", ua: "Васал надавав папі Мекку 622 року" } },
          { id: "c", label: { pl: "Drabina feudalna to siedem krucjat z lekcji 21", ua: "Феодальна драбина — це сім походів з уроку 21" } }
        ],
        answer: "a",
        hint: {
          pl: "Ziemia + ceremonia + piramida. Nie mieszaj z 18 i 21.",
          ua: "Земля + церемонія + піраміда. Не змішуй з 18 і 21."
        },
        explanation: {
          pl: "Hidżra i krucjaty = inne lekcje. Tu relacja senior–wasal.",
          ua: "Хіджра і походи = інші уроки. Тут стосунок сеньйор–васал."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Stany i równość", ua: "Стани і рівність" },
      task: {
        id: "h22-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które dwa stany przez przywileje wpłynęły na rządy — i co zmieniło się od XVIII wieku?",
          ua: "Які два стани через привілеї вплинули на правління — і що змінилось від XVIII століття?"
        },
        options: [
          { id: "a", label: { pl: "duchowieństwo i rycerstwo; od XVIII w. zrównywanie praw, dziś w Polsce prawa są równe", ua: "духовенство і лицарство; від XVIII ст. зрівняння прав, сьогодні в Польщі права рівні" } },
          { id: "b", label: { pl: "tylko chłopi rządzili królem od 1095", ua: "лише селяни правили королем від 1095" } },
          { id: "c", label: { pl: "mieszczanie znieśli lenno na synodzie w Wormacji", ua: "міщани скасували лен на соборі у Вормсі" } }
        ],
        answer: "a",
        hint: {
          pl: "Film: przywileje dwóch stanów + XVIII w. Wormacja = lekcja 20.",
          ua: "Фільм: привілеї двох станів + XVIII ст. Вормс = урок 20."
        },
        explanation: {
          pl: "Ponadpodstawowe z filmu. 1095 i Wormacja = inne lekcje.",
          ua: "Понад базове з фільму. 1095 і Вормс = інші уроки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h22-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co umiesz powiedzieć o seniorze, hołdzie i stanach?",
          ua: "Що вмієш сказати про сеньйора, присягу і стани?"
        },
        options: [
          { id: "a", label: { pl: "senior nadaje lenno; hołd = przysięga na kolanach; cztery stany, na dole chłopi", ua: "сеньйор надає лен; присяга = на колінах; чотири стани, внизу селяни" } },
          { id: "b", label: { pl: "senior = chłop; hołd = hidżra; stany = trzy zakony z lekcji 21", ua: "сеньйор = селянин; присяга = хіджра; стани = три ордени з уроку 21" } },
          { id: "c", label: { pl: "wszyscy w średniowieczu mieli te same prawa co dziś w Polsce", ua: "усі в середньовіччі мали ті самі права, що сьогодні в Польщі" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe: relacja, hołd, drabina, stany.",
          ua: "KN базове: стосунок, присяга, драбина, стани."
        },
        explanation: {
          pl: "To KN. Równe prawa = dziś, nie średniowiecze.",
          ua: "Це KN. Рівні права = сьогодні, не середньовіччя."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Senior dawał wasalowi lenno i ochronę. Wasal służył radą i zbrojnie; sprzeciw to zdrada.",
          ["Senior", "lenno", "zdrada"],
          "Сеньйор давав васалу лен і захист. Васал служив радою і зброєю; опір — зрада.",
          ["Сеньйор", "лен", "зрада"]
        ),
        mark(
          "Hołd lenny: wasal klęka, przysięga; senior wręcza włócznię, chorągiew lub dokument.",
          ["Hołd lenny", "włócznię"],
          "Ленна присяга: васал клечить, присягає; сеньйор вручає спис, хоругву або документ.",
          ["Ленна присяга", "спис"]
        ),
        mark(
          "Drabina feudalna: suzeren na szczycie, niżej wasale i ich wasale, na dole chłopi.",
          ["suzeren", "chłopi"],
          "Феодальна драбина: сюзерен на вершині, нижче васали і їхні васали, внизу селяни.",
          ["сюзерен", "селяни"]
        ),
        mark(
          "Stany: duchowieństwo, rycerstwo, mieszczaństwo, chłopi. Duchowni i rycerze mieli przywileje. W Polsce Piastów (lekcja 32) nie kopiujemy tej drabiny jeden do jednego.",
          ["Stany", "przywileje"],
          "Стани: духовенство, лицарство, міщани, селяни. Духівництво і лицарі мали привілеї. У Польщі П’ястів (урок 32) цю драбину не копіюємо один до одного.",
          ["Стани", "привілеї"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: epoka rycerzy — jak żył ten, kto dostał lenno i zbroję.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: епоха лицарів — як жив той, хто дістав лен і зброю.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "jBcbx55iKNA",
        title: {
          pl: "Krótkie Lekcje: System feudalny",
          ua: "Короткі уроки: Феодальна система"
        }
      }
    }
  ]
};
