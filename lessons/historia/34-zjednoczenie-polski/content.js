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
      heading: { pl: "Zjednoczenie Polski", ua: "Об’єднання Польщі" },
      formula: "1295 · 1320",
      text: {
        pl: [
          "Po rozbiciu dzielnicowym (lekcja 33) kraj był słaby. Tu próby spięcia ziem na nowo — aż do korony Łokietka.",
          "Poznasz: Przemysła II, Kościół, Wacława II, Łokietka, utratę Pomorza i Płowce. Syn Łokietka, Kazimierz — lekcja 35."
        ],
        ua: [
          "Після удільної роздробленості (урок 33) край був слабкий. Тут спроби знову скріпити землі — аж до корони Локетека.",
          "Пізнаєш: Пшемисла II, Церкву, Вацлава II, Локетека, втрату Помор’я і Пловці. Син Локетека, Казимир — урок 35."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wskazać próby zjednoczenia: Henryk Pobożny i Przemysł II (1295)", ua: "вказати спроби об’єднання: Генрик Побожний і Пшемисл II (1295)" },
        { pl: "wyjaśnić rolę Kościoła i arcybiskupa Jakuba Świnki", ua: "пояснити роль Церкви і архієпископа Якуба Свінки" },
        { pl: "opisać spór Łokietka z Wacławem II i koronację 1320", ua: "описати спір Локетека з Вацлавом II і коронацію 1320" },
        { pl: "pokazać na mapie utratę Pomorza 1309 i bitwę pod Płowcami 1331", ua: "показати на карті втрату Помор’я 1309 і битву під Пловцями 1331" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Dlaczego zjednoczenie?", ua: "Чому об’єднання?" },
      formula: "bezpieczeństwo · Kościół",
      visual: gh("280", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: wiele księstw i zagrożenia; obok Gniezno i wspólny Kościół",
          ua: "Схема: багато князівств і загрози; поряд Гнєзно і спільна Церква"
        },
        title: { pl: "Powody, nie osiem haseł na ścianę", ua: "Причини, не вісім гасел на стіну" },
        prompt: {
          pl: "Szkolny schemat 16:9. Lewa: małe księstwa, strzałki „Prusowie, Litwini, Tatarzy”. Prawa: kościół w Gnieźnie, napis PL „jedna metropolia”. Tytuł: „dlaczego zjednoczenie”. BEZ bitwy. Styl Nowej Ery.",
          ua: "Чому єднати. Гнєзно. Без бою."
        }
      }),
      text: {
        pl: [
          "Rozbicie osłabiało obronę. Szansą było zjednoczenie. Łączyły też: Kościół (metropolia w Gnieźnie ponad dzielnicami), Piastowie w wielu księstwach, wspólny język i wiara.",
          ["Pierwsza próba: ", em("Henryk Pobożny"), " (już z lekcji 33) — zginął pod Legnicą 1241. Tu nie druga karta, tylko start opowieści."]
        ],
        ua: [
          "Роздробленість ослаблювала оборону. Шансом було об’єднання. Єднали також: Церква (митрополія в Гнєзні понад уділами), П’ясти в багатьох князівствах, спільна мова і віра.",
          ["Перша спроба: ", em("Генрик Побожний"), " (вже з уроку 33) — загинув під Легницею 1241. Тут не друга картка, лише початок оповіді."]
        ]
      },
      task: {
        id: "h34-dlaczego",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kościół i metropolia w Gnieźnie spajały dzielnice, bo organizacja Kościoła nie pokrywała się z granicami księstw — prawda czy fałsz?",
          ua: "Церква і митрополія в Гнєзні єднали уділи, бо організація Церкви не збігалася з кордонами князівств — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Karta nauczycielki i film: rola Kościoła. Nie osiem punktów do wkuwania.",
          ua: "Картка вчительки і фільм: роль Церкви. Не вісім пунктів напам’ять."
        },
        explanation: {
          pl: "Prawda. Mieszczaństwo i rody rycerskie — ciekawostka, nie osobny rozdział.",
          ua: "Правда. Міщанство і лицарські роди — цікавинка, не окремий розділ."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Przemysł II", ua: "Пшемисл II" },
      formula: "1295",
      timelineYear: 1295,
      visual: gh("281", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Przemysła II: książę wielkopolski, koronacja 1295",
          ua: "Картка Пшемисла II: князь великопольський, коронація 1295"
        },
        title: { pl: "Korona 1295, nie Matejko i śmierć", ua: "Корона 1295, не Матейко і смерть" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny władca, dzień. Cztery punkty PL: „kto — Przemysł II”; „skąd — Wielkopolska”; „lata — koronacja 1295”; „wsławił się — król Polski, zjednoczył Wielkopolskę i Pomorze Gdańskie”. BEZ Matejki, BEZ morderstwa. Styl Nowej Ery.",
          ua: "Пшемисл II. 1295. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Przemysł II"), ": kto — książę wielkopolski; skąd — Wielkopolska; lata — korona ", em("1295"), "; wsławił się — wziął też Pomorze Gdańskie i na krótko Kraków, koronował się na króla Polski."],
          "Kilka miesięcy później, w 1296, został zabity koło Rogoźna (podejrzewano Brandenburczyków). Próba zjednoczenia się urwała. KN: koronacja i śmierć — data na osi to 1295."
        ],
        ua: [
          ["", em("Пшемисл II"), ": хто — князь великопольський; звідки — Великопольща; роки — корона ", em("1295"), "; уславився — взяв також Гданське Помор’я і ненадовго Краків, коронувався королем Польщі."],
          "За кілька місяців, 1296 року, його вбили біля Рогозьна (підозрювали бранденбуржців). Спроба об’єднання обірвалась. KN: коронація і смерть — дата на осі це 1295."
        ]
      },
      task: {
        id: "h34-1295",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Przemysł II został koronowany na króla Polski? Wpisz rok.",
          ua: "Якого року Пшемисл II був коронований королем Польщі? Введи рік."
        },
        answer: 1295,
        hint: {
          pl: "KN: ta data na osi. Nie 1320 (Łokietek) i nie 1025 (Chrobry).",
          ua: "KN: ця дата на осі. Не 1320 (Локетек) і не 1025 (Хоробрий)."
        },
        explanation: {
          pl: "1295. 1320 = Łokietek. 1025 = 29.",
          ua: "1295. 1320 = Локетек. 1025 = 29."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jakub Świnka", ua: "Якуб Свінка" },
      formula: "Gniezno",
      visual: gh("282", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta arcybiskupa Jakuba Świnki: Gniezno, język polski, korony Piastów",
          ua: "Картка архієпископа Якуба Свінки: Гнєзно, польська мова, корони П’ястів"
        },
        title: { pl: "Arcybiskup, nie kopia iluminacji", ua: "Архієпископ, не копія ілюмінації" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny arcybiskup z pastorałem, mitra, dzień. Cztery punkty PL: „kto — Jakub Świnka”; „skąd — arcybiskup gnieźnieński”; „lata — przełom XIII i XIV w.”; „wsławił się — język polski w kościele, korona Przemysła, wsparcie Łokietka”. BEZ herbu z Wiki. Styl Nowej Ery.",
          ua: "Якуб Свінка. Гнєзно. Не герб з Вікі."
        }
      }),
      text: {
        pl: [
          ["", em("Jakub Świnka"), ": kto — arcybiskup gnieźnieński; skąd — zwierzchnik Kościoła w Polsce; lata — przełom XIII/XIV w.; wsławił się — nie ulegał wpływom niemieckim, kazał głosić Ewangelię po ", em("polsku"), ", koronował Przemysła II i wspierał Łokietka."],
          "Kościół pomagał jednoczyć kraj. Jedna organizacja: Gniezno i biskupstwa w dzielnicach."
        ],
        ua: [
          ["", em("Якуб Свінка"), ": хто — архієпископ гнєзненський; звідки — зверхник Церкви в Польщі; роки — злам XIII/XIV ст.; уславився — не піддавався німецьким впливам, велів проповідувати Євангеліє ", em("польською"), ", коронував Пшемисла II і підтримав Локетека."],
          "Церква допомагала єднати країну. Одна організація: Гнєзно і єпископства в уділах."
        ]
      },
      task: {
        id: "h34-swinka",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywał się arcybiskup gnieźnieński, który koronował Przemysła II i wspierał Łokietka? Wpisz imię i przydomek.",
          ua: "Як звався архієпископ гнєзненський, який коронував Пшемисла II і підтримав Локетека? Введи ім’я і прізвисько."
        },
        answer: ["Jakub Świnka", "Jakub Swinka", "Świnka", "Swinka", "Якуб Свінка", "Свінка"],
        hint: {
          pl: "Film i prezentacja: zwierzchnik Kościoła. Nie Stanisław z lekcji 30.",
          ua: "Фільм і презентація: зверхник Церкви. Не Станіслав з уроку 30."
        },
        explanation: {
          pl: "Jakub Świnka. Stanisław = 30. Kult św. Stanisława jako patrona jedności — w challenge.",
          ua: "Якуб Свінка. Станіслав = 30. Культ св. Станіслава як патрона єдності — у challenge."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wacław II", ua: "Вацлав II" },
      formula: "1300",
      timelineYear: 1300,
      visual: gh("283", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Wacława II: król Czech koronowany w Gnieźnie, starostowie",
          ua: "Картка Вацлава II: король Чехії коронований у Гнєзні, старости"
        },
        title: { pl: "Król czeski, nie Matejko", ua: "Чеський король, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny król z koroną i berłem, dzień. Cztery punkty PL: „kto — Wacław II”; „skąd — król Czech”; „lata — koronacja w Gnieźnie 1300”; „wsławił się — król Polski, powołał starostów”. BEZ Matejki. Styl Nowej Ery.",
          ua: "Вацлав II. 1300. Старости. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["Po śmierci Przemysła o ziemie walczyli ", em("Władysław Łokietek"), " (Kujawy) i ", em("Wacław II"), " (Czechy). Wacław opanował Małopolskę, Wielkopolskę i Pomorze Gdańskie. Łokietek musiał ustąpić."],
          ["", em("Wacław II"), ": kto — król Czech; skąd — Praga; lata — koronacja w Gnieźnie ", em("1300"), ", zm. 1305; wsławił się — król Polski, poprawił rządy, powołał ", em("starostów"), " (urzędników nad dzielnicami)."]
        ],
        ua: [
          ["Після смерті Пшемисла за землі змагалися ", em("Владислав Локетек"), " (Куяви) і ", em("Вацлав II"), " (Чехія). Вацлав опанував Малопольщу, Великопольщу і Гданське Помор’я. Локетек мусив відступити."],
          ["", em("Вацлав II"), ": хто — король Чехії; звідки — Прага; роки — коронація в Гнєзні ", em("1300"), ", пом. 1305; уславився — король Польщі, поліпшив уряд, покликав ", em("старост"), " (урядників над уділами)."]
        ]
      },
      task: {
        id: "h34-starosta",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywali się urzędnicy, których Wacław II powołał do zarządzania dzielnicami? Wpisz jedno słowo.",
          ua: "Як називалися урядники, яких Вацлав II покликав управляти уділами? Введи одне слово."
        },
        answer: ["starostowie", "starosta", "starostów", "старости", "староста", "старост"],
        hint: {
          pl: "Urzędnik nad dzielnicą za Wacława II — jedno słowo w liczbie mnogiej.",
          ua: "Урядник над уділом за Вацлава II — одне слово в множині."
        },
        explanation: {
          pl: "Starosta / starostowie. 1300 jest na osi (koronacja Wacława II).",
          ua: "Староста / старости. 1300 є на осі (коронація Вацлава II)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Władysław Łokietek", ua: "Владислав Локетек" },
      formula: "Kujawy → Wawel",
      visual: gh("284", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Władysława Łokietka: książę kujawski, przydomek, powrót z Węgier",
          ua: "Картка Владислава Локетека: князь куявський, прізвисько, повернення з Угорщини"
        },
        title: { pl: "Portret spokojny, nie Gerson na skałach", ua: "Спокійний портрет, не Герсон на скелях" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny książę w płaszczu, dzień, bez drwiny ze wzrostu. Cztery punkty PL: „kto — Władysław Łokietek”; „skąd — Kujawy”; „lata — wraca 1304, korona 1320”; „wsławił się — zjednoczył część Polski”. Strzałka „Węgry → Polska”. BEZ Gersona, BEZ Ojcowa. Styl Nowej Ery.",
          ua: "Локетек. Куяви. Не Герсон."
        }
      }),
      text: {
        pl: [
          ["", em("Władysław Łokietek"), ": kto — książę kujawski, potem król; skąd — Kujawy; lata — walka o ziemie, korona ", em("1320"), ", zm. 1333; przydomek od niskiego wzrostu (bez drwiny); wsławił się — zjednoczył część ziem polskich."],
          "Wacław zmusił go do ucieczki. Łokietek szukał pomocy na Węgrzech. W 1305 zmarł Wacław II, w 1306 jego syn Wacław III. Łokietek wrócił i wziął m.in. Małopolskę i Kujawy. (Kto zabił Wacława III — KN tego nie każe rozstrzygać.)"
        ],
        ua: [
          ["", em("Владислав Локетек"), ": хто — князь куявський, потім король; звідки — Куяви; роки — боротьба за землі, корона ", em("1320"), ", пом. 1333; прізвисько від малого зросту (без насмішки); уславився — об’єднав частину польських земель."],
          "Вацлав змусив його тікати. Локетек шукав допомоги в Угорщині. 1305 року помер Вацлав II, 1306-го — його син Вацлав III. Локетек повернувся і взяв зокрема Малопольщу і Куяви. (Хто вбив Вацлава III — KN цього не каже розгадувати.)"
        ]
      },
      task: {
        id: "h34-kujawy",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Skąd wyruszył Władysław Łokietek do walki o zjednoczenie?",
          ua: "Звідки вирушив Владислав Локетек до боротьби за об’єднання?"
        },
        options: [
          { id: "a", label: { pl: "z księstwa na Kujawach", ua: "з князівства на Куявах" } },
          { id: "b", label: { pl: "był od razu królem Czech jak Wacław", ua: "був одразу королем Чехії як Вацлав" } },
          { id: "c", label: { pl: "to Kazimierz Wielki z lekcji 35", ua: "це Казимир Великий з уроку 35" } }
        ],
        answer: "a",
        hint: {
          pl: "Film i prezentacja: książę kujawski. Wielki = syn, lekcja 35.",
          ua: "Фільм і презентація: князь куявський. Великий = син, урок 35."
        },
        explanation: {
          pl: "Wacław = Czechy. Kazimierz = 35.",
          ua: "Вацлав = Чехія. Казимир = 35."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Utrata Pomorza 1309", ua: "Втрата Помор’я 1309" },
      formula: "1309",
      timelineYear: 1309,
      visual: gh("285", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa 1308–1309: Brandenburgia, Gdańsk, Krzyżacy zajmują Pomorze Gdańskie",
          ua: "Карта 1308–1309: Бранденбург, Гданськ, хрестоносці займають Гданське Помор’я"
        },
        title: { pl: "Strzałki na mapie, nie rzeź Gdańska", ua: "Стрілки на карті, не різанина Гданська" },
        prompt: {
          pl: "Szkolna mapa 16:9. Podpisy PL: Brandenburgia, Gdańsk, Pomorze Gdańskie, Krzyżacy. Tytuł: „1309 — utrata morza”. Strzałki: Brandenburgia 1308, Krzyżacy 1309. BEZ rzezi, BEZ foto Malborka. Styl Nowej Ery.",
          ua: "1309. Помор’я. Без різанини. Без Мальборка."
        }
      }),
      text: {
        pl: [
          "W 1308 Brandenburgia uderzyła na Pomorze Gdańskie. Łokietek był zajęty sporem w Małopolsce i pozwolił wezwać Krzyżaków na pomoc.",
          ["Zakon wygnał Brandenburczyków, a w ", em("1309"), " sam zajął całe Pomorze Gdańskie. Polska straciła dostęp do morza. Sojusznik stał się wrogiem. KN: ta data na osi."]
        ],
        ua: [
          "1308 року Бранденбург ударив на Гданське Помор’я. Локетек був зайнятий спором у Малопольщі і дозволив покликати хрестоносців на допомогу.",
          ["Орден вигнав бранденбуржців, а ", em("1309"), " року сам зайняв усе Гданське Помор’я. Польща втратила вихід до моря. Союзник став ворогом. KN: ця дата на осі."]
        ]
      },
      task: {
        id: "h34-1309",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Krzyżacy zajęli całe Pomorze Gdańskie? Wpisz rok.",
          ua: "Якого року хрестоносці зайняли все Гданське Помор’я? Введи рік."
        },
        answer: 1309,
        hint: {
          pl: "KN: ta data na osi. 1226 to sprowadzenie zakonu (33), nie utrata Pomorza.",
          ua: "KN: ця дата на осі. 1226 — спровадження ордену (33), не втрата Помор’я."
        },
        explanation: {
          pl: "1309. Malbork stolicą zakonu — ten sam rok, jedno zdanie; zamek z lekcji 23 nie zastępuje mapy.",
          ua: "1309. Мальборк столицею ордену — той самий рік, одне речення; замок з уроку 23 не замінює карту."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Koronacja 1320", ua: "Коронація 1320" },
      formula: "1320",
      timelineYear: 1320,
      visual: gh("286", {
        kind: "image-placeholder",
        alt: {
          pl: "Koronacja Łokietka w Krakowie 1320 i mapa zjednoczonych ziem",
          ua: "Коронація Локетека в Кракові 1320 і карта об’єднаних земель"
        },
        title: { pl: "Korona na Wawelu, nie Matejko", ua: "Корона на Вавелі, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Lewa: arcybiskup kładzie koronę, ubrani, dzień, Kraków. Napis „1320”. Prawa: mała mapa — Małopolska, Wielkopolska, Kujawy, sieradzko-łęczycka. BEZ Matejki. Styl Nowej Ery.",
          ua: "1320. Краків. Карта земель. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["W ", em("1314"), " Łokietek wziął Wielkopolskę. W ", em("1320"), " koronowano go w Krakowie. To symboliczny koniec rozbicia dzielnicowego (1138–1320)."],
          "Zjednoczył część ziem: Wielkopolskę, Małopolskę, ziemię sieradzką i łęczycką, Kujawy. Poza krajem zostały: Pomorze Gdańskie (Krzyżacy), Śląsk (lenno Czech) i Mazowsze (lokalni książęta)."
        ],
        ua: [
          ["", em("1314"), " року Локетек узяв Великопольщу. ", em("1320"), " року його коронували в Кракові. Це символічний кінець удільної роздробленості (1138–1320)."],
          "Об’єднав частину земель: Великопольщу, Малопольщу, серадзьку і ленчицьку землю, Куяви. Поза країною лишились: Гданське Помор’я (хрестоносці), Сілезія (лен Чехії) і Мазовія (місцеві князі)."
        ]
      },
      task: {
        id: "h34-1320",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Władysław Łokietek został koronowany na króla Polski? Wpisz rok.",
          ua: "Якого року Владислав Локетек був коронований королем Польщі? Введи рік."
        },
        answer: 1320,
        hint: {
          pl: "KN: ta data na osi. 1295 = Przemysł. 1025 = Chrobry.",
          ua: "KN: ця дата на осі. 1295 = Пшемисл. 1025 = Хоробрий."
        },
        explanation: {
          pl: "1320. Koniec rozbicia — umownie, nie cała Polska w granicach.",
          ua: "1320. Кінець роздробленості — умовно, не вся Польща в кордонах."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Płowce 1331", ua: "Пловці 1331" },
      formula: "1331",
      timelineYear: 1331,
      visual: gh("287", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Płowce 1331, utrata Kujaw, ziemie zjednoczone wobec Krzyżaków i Śląska",
          ua: "Карта: Пловці 1331, втрата Куяв, об’єднані землі проти хрестоносців і Сілезії"
        },
        title: { pl: "Krzyżyk Płowiec, nie szarża", ua: "Хрестик Пловців, не атака" },
        prompt: {
          pl: "Szkolna mapa 16:9. Krzyżyk „Płowce 1331”. Kujawy kreską „utrata”. Ziemie Łokietka vs Zakon Krzyżacki, Śląsk, Mazowsze. BEZ bitwy, BEZ ciał. Styl Nowej Ery.",
          ua: "1331 Пловці. Карта. Без бою."
        }
      }),
      text: {
        pl: [
          ["Łokietek walczył o Pomorze. Papież kazał Krzyżakom je zwrócić — zakon nie posłuchał. W ", em("1331"), " pod ", em("Płowcami"), " Polacy odnieśli pierwszy większy sukces przeciw zakonowi."],
          "Wojna jednak trwała. Krzyżacy wzięli Kujawy. Łokietek zmarł w 1333. Główne dzieło zostało: odbudowane Królestwo Polskie. Syn Kazimierz — lekcja 35."
        ],
        ua: [
          ["Локетек воював за Помор’я. Папа велів хрестоносцям його повернути — орден не послухав. ", em("1331"), " року під ", em("Пловцями"), " поляки здобули перший більший успіх проти ордену."],
          "Війна однак тривала. Хрестоносці взяли Куяви. Локетек помер 1333 року. Головне діло лишилось: відбудоване Польське королівство. Син Казимир — урок 35."
        ]
      },
      task: {
        id: "h34-1331",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku stoczono bitwę pod Płowcami? Wpisz rok.",
          ua: "Якого року відбулася битва під Пловцями? Введи рік."
        },
        answer: 1331,
        hint: {
          pl: "KN: ta data na osi. Nie 1410 (Grunwald = 36) i nie 1241 (Legnica = 33).",
          ua: "KN: ця дата на осі. Не 1410 (Грюнвальд = 36) і не 1241 (Легниця = 33)."
        },
        explanation: {
          pl: "1331. To pierwszy większy sukces, nie koniec wojen. Grunwald = 36.",
          ua: "1331. Це перший більший успіх, не кінець війн. Грюнвальд = 36."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Przemysł II — książę wielkopolski, król Polski 1295, zabity 1296", ua: "Пшемисл II — князь великопольський, король Польщі 1295, убитий 1296" },
        { pl: "Jakub Świnka — arcybiskup gnieźnieński; język polski, korony Piastów", ua: "Якуб Свінка — архієпископ гнєзненський; польська мова, корони П’ястів" },
        { pl: "Wacław II — król Czech, koronowany w Gnieźnie 1300; powołał starostów", ua: "Вацлав II — король Чехії, коронований у Гнєзні 1300; покликав старост" },
        { pl: "starosta — urzędnik królewski zarządzający dzielnicą w imieniu władcy", ua: "староста — королівський урядник, що управляє уділом від імені володаря" },
        { pl: "Władysław Łokietek — książę kujawski, król od 1320; zjednoczył część ziem", ua: "Владислав Локетек — князь куявський, король від 1320; об’єднав частину земель" },
        { pl: "1309 — Krzyżacy zajmują Pomorze Gdańskie; Polska traci morze", ua: "1309 — хрестоносці займають Гданське Помор’я; Польща втрачає море" },
        { pl: "1320 / 1331 — koronacja w Krakowie; Płowce — pierwszy większy sukces przeciw zakonowi", ua: "1320 / 1331 — коронація в Кракові; Пловці — перший більший успіх проти ордену" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Przemysł koronował się w 1320. Świnka to biskup Stanisław z lekcji 30. Wacław II był księciem kujawskim. 1309 to chrzest Mieszka. Płowce to Grunwald. Łokietek zjednoczył cały Śląsk i Pomorze.”",
        ua: "«Пшемисл коронувався 1320 року. Свінка — єпископ Станіслав з уроку 30. Вацлав II був князем куявським. 1309 — хрещення Мешка. Пловці — це Грюнвальд. Локетек об’єднав усю Сілезію і Помор’я.»"
      },
      text: {
        pl: [
          "1295 = Przemysł, 1320 = Łokietek. Świnka ≠ Stanisław. Wacław = Czechy. 1309 = Pomorze. Płowce ≠ Grunwald. Śląsk i Pomorze zostały poza."
        ],
        ua: [
          "1295 = Пшемисл, 1320 = Локетек. Свінка ≠ Станіслав. Вацлав = Чехія. 1309 = Помор’я. Пловці ≠ Грюнвальд. Сілезія і Помор’я лишились поза."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: próby XIII w., dwaj rywale, 1320, Pomorze i Płowce. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: спроби XIII ст., двоє суперників, 1320, Помор’я і Пловці. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1295; Świnka; Wacław i Łokietek; 1309; 1320; 1331."
        ],
        ua: [
          "Підказка: 1295; Свінка; Вацлав і Локетек; 1309; 1320; 1331."
        ]
      },
      task: {
        id: "h34-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę tej godziny?",
          ua: "Яке речення замикає нотатку цієї години?"
        },
        options: [
          { id: "a", label: { pl: "1295 Przemysł; Kościół i Świnka; spór Łokietka z Wacławem; 1309 utrata Pomorza; 1320 korona; 1331 Płowce", ua: "1295 Пшемисл; Церква і Свінка; спір Локетека з Вацлавом; 1309 втрата Помор’я; 1320 корона; 1331 Пловці" } },
          { id: "b", label: { pl: "To tylko 1226 i Legnica z lekcji 33", ua: "Це лише 1226 і Легниця з уроку 33" } },
          { id: "c", label: { pl: "To tylko Kazimierz Wielki i Akademia z lekcji 35", ua: "Це лише Казимир Великий і Академія з уроку 35" } }
        ],
        answer: "a",
        hint: {
          pl: "Cztery umiejętności z goal + daty KN.",
          ua: "Чотири вміння з goal + дати KN."
        },
        explanation: {
          pl: "33 = rozbicie. 35 = Kazimierz.",
          ua: "33 = роздробленість. 35 = Казимир."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Szczerbiec i patron", ua: "Щербець і патрон" },
      task: {
        id: "h34-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe + ciekawostka filmu — bez lekcji 23, 30 (męczeństwo) i 36?",
          ua: "KN понад базове + цікавинка фільму — без уроків 23, 30 (мучеництво) і 36?"
        },
        options: [
          { id: "a", label: { pl: "Pomorze stracono, bo wezwano Krzyżaków na Brandenburgię; św. Stanisław był symbolem jedności kraju; Szczerbiec to miecz koronacyjny (reszta insygniów — ciekawostka, nie rozbiory)", ua: "Помор’я втрачено, бо покликали хрестоносців на Бранденбург; св. Станіслав був символом єдності краю; Щербець — коронаційний меч (решта інсигній — цікавинка, не поділи)" } },
          { id: "b", label: { pl: "trzeba oskarżyć Łokietka o zabójstwo Wacława III i pokazać Matejkę", ua: "треба звинуватити Локетека у вбивстві Вацлава III і показати Матейка" } },
          { id: "c", label: { pl: "Grunwald 1410 i pokój w Kaliszu 1343 są tematem tej godziny", ua: "Грюнвальд 1410 і мир у Каліші 1343 — тема цієї години" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: jak utracono Pomorze; patron jedności. Insygnia i wiek 59 lat — film, krótko. Rozbiory i 1795 nie są tą lekcją.",
          ua: "KN: як втрачено Помор’я; патрон єдності. Інсигнії і 59 років — фільм, коротко. Поділи і 1795 не є цим уроком."
        },
        explanation: {
          pl: "Męczeństwo Stanisława = 30. Grunwald = 36. Kalisz 1343 = 35.",
          ua: "Мучеництво Станіслава = 30. Грюнвальд = 36. Каліш 1343 = 35."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h34-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o zjednoczeniu Polski?",
          ua: "Що правда про об’єднання Польщі?"
        },
        options: [
          { id: "a", label: { pl: "1295 Przemysł; 1309 utrata Pomorza; 1320 korona Łokietka (koniec rozbicia); 1331 Płowce; Kościół i Świnka spajali dzielnice", ua: "1295 Пшемисл; 1309 втрата Помор’я; 1320 корона Локетека (кінець роздробленості); 1331 Пловці; Церква і Свінка єднали уділи" } },
          { id: "b", label: { pl: "to samo co Głogów 1109 z lekcji 31", ua: "те саме, що Глогув 1109 з уроку 31" } },
          { id: "c", label: { pl: "Łokietek od razu odzyskał całe Pomorze i Śląsk", ua: "Локетек одразу повернув усе Помор’я і Сілезію" } }
        ],
        answer: "a",
        hint: {
          pl: "Cztery daty KN na osi + film Zapamiętaj.",
          ua: "Чотири дати KN на осі + фільм Запам’ятай."
        },
        explanation: {
          pl: "1109 = 31. Pomorze i Śląsk zostały poza zjednoczonym królestwem.",
          ua: "1109 = 31. Помор’я і Сілезія лишились поза об’єднаним королівством."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W XIII w. próbowali jednoczyć ziemie Henryk Pobożny i Przemysł II. Przemysł koronował się w 1295, wkrótce został zabity.",
          ["1295", "Przemysł II"],
          "У XIII ст. землі намагалися єднати Генрик Побожний і Пшемисл II. Пшемисл коронувався 1295 року, невдовзі його вбили.",
          ["1295", "Пшемисл II"]
        ),
        mark(
          "Łokietek walczył o władzę z czeskim Wacławem II (koronacja Wacława: 1300). W 1320 koronowano Łokietka w Krakowie — symboliczny koniec rozbicia dzielnicowego.",
          ["1300", "1320", "Łokietek"],
          "Локетек змагався за владу з чеським Вацлавом II (коронація Вацлава: 1300). 1320 року Локетека коронували в Кракові — символічний кінець удільної роздробленості.",
          ["1300", "1320", "Локетек"]
        ),
        mark(
          "Zjednoczył Wielkopolskę, Małopolskę, ziemię sieradzką i łęczycką. Poza krajem: Pomorze Gdańskie, Śląsk i Mazowsze.",
          ["Wielkopolskę", "Pomorze Gdańskie"],
          "Об’єднав Великопольщу, Малопольщу, серадзьку і ленчицьку землю. Поза країною: Гданське Помор’я, Сілезія і Мазовія.",
          ["Великопольщу", "Помор’я"]
        ),
        mark(
          "W 1309 Krzyżacy zajęli Pomorze Gdańskie. W 1331 pod Płowcami Polacy odnieśli pierwszy większy sukces przeciw zakonowi.",
          ["1309", "Płowcami"],
          "1309 року хрестоносці зайняли Гданське Помор’я. 1331 року під Пловцями поляки здобули перший більший успіх проти ордену.",
          ["1309", "Пловцями"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: czasy Kazimierza Wielkiego — syn Łokietka, nie nowa koronacja 1320.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: часи Казимира Великого — син Локетека, не нова коронація 1320.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "FUALNgKcksw",
        title: {
          pl: "Krótkie Lekcje: Zjednoczenie Polski",
          ua: "Короткі уроки: Об’єднання Польщі"
        }
      }
    }
  ]
};
