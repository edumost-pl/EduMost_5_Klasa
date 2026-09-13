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
      heading: { pl: "Kryzys i odbudowa państwa polskiego", ua: "Криза і відбудова польської держави" },
      formula: "1038 · 1076 · 1079",
      text: {
        pl: [
          "W 1025 zmarł Bolesław Chrobry. Korona nie utrzymała ładu: najazdy, bunt i utrata ziem.",
          "Na osi KN: 1076 — koronacja Bolesława Śmiałego. Tu też 1038 (kryzys) i 1079 (wygnanie). Krzywousty i 1138 — następna lekcja."
        ],
        ua: [
          "1025 року помер Болеслав Хоробрий. Корона не втримала лад: напади, бунт і втрата земель.",
          "На осі KN: 1076 — коронація Болеслава Сміливого. Тут також 1038 (криза) і 1079 (вигнання). Кривоустий і 1138 — наступний урок."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać kryzys państwa w 1. połowie XI w. (przyczyny i skutki)", ua: "описати кризу держави в 1-й пол. XI ст. (причини і наслідки)" },
        { pl: "wskazać ziemie państwa Kazimierza Odnowiciela i wyjaśnić przydomek", ua: "вказати землі держави Казимира Відновителя і пояснити прізвисько" },
        { pl: "scharakteryzować rządy Bolesława Śmiałego i koronację 1076", ua: "схарактеризувати правління Болеслава Сміливого і коронацію 1076" },
        { pl: "wyjaśnić spór króla z biskupem Stanisławem i skutek 1079", ua: "пояснити спір короля з єпископом Станіславом і наслідок 1079" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Mieszko II", ua: "Мешко II" },
      formula: "1025–1034",
      visual: gh("248", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Mieszka II: młodszy syn Chrobrego, lata 1025–1034, pierwszy wykształcony władca",
          ua: "Картка Мешка II: молодший син Хороброго, 1025–1034, перший освічений володар"
        },
        title: { pl: "Książka, nie Matejko", ua: "Книга, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny władca w koronie z otwartą księgą, dzień. BEZ Matejki, BEZ foto Kodeksu Matyldy. Cztery punkty PL: „kto — Mieszko II”; „skąd — syn Bolesława Chrobrego (młodszy)”; „lata — panował 1025–1034”; „wsławił się — pierwszy władca, który czytał i pisał (łacina, greka)”. Styl Nowej Ery.",
          ua: "Картка Мешка II: син Хороброго, 1025–1034. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Mieszko II"), ": kto — młodszy syn ", em("Bolesława Chrobrego"), "; skąd — dwór Piastów; lata — panował ", em("1025–1034"), "; wsławił się — pierwszy polski władca, który czytał i pisał (łacina, greka). Żona ", em("Rycheza"), " (księżniczka niemiecka)."],
          "Do 1031 kontynuował politykę ojca: wojny i Kościół. Sąsiedzi chcieli odzyskać ziemie zdobyte przez Chrobrego."
        ],
        ua: [
          ["", em("Мешко II"), ": хто — молодший син ", em("Болеслава Хороброго"), "; звідки — двір П’ястів; роки — правив ", em("1025–1034"), "; уславився — перший польський володар, який читав і писав (латина, грека). Дружина ", em("Рихеза"), " (німецька князівна)."],
          "До 1031 продовжував політику батька: війни і Церква. Сусіди хотіли повернути землі, здобуті Хоробрим."
        ]
      },
      task: {
        id: "h30-mieszko",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim był Mieszko II po śmierci Chrobrego?",
          ua: "Ким був Мешко II після смерті Хороброго?"
        },
        options: [
          { id: "a", label: { pl: "młodszy syn; król 1025–1034; pierwszy wykształcony władca Polski", ua: "молодший син; король 1025–1034; перший освічений володар Польщі" } },
          { id: "b", label: { pl: "to samo co Bolesław Krzywousty z lekcji 31", ua: "те саме, що Болеслав Кривоустий з уроку 31" } },
          { id: "c", label: { pl: "biskup Wojciech z lekcji 29", ua: "єпископ Войцех з уроку 29" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta nauczycielki: 1025–1034. Czytał po łacinie i grecku.",
          ua: "Картка вчительки: 1025–1034. Читав латиною і грецькою."
        },
        explanation: {
          pl: "Krzywousty = 31. Wojciech = 29.",
          ua: "Кривоустий = 31. Войцех = 29."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Najazd i Bezprym", ua: "Напад і Безприм" },
      formula: "1031",
      visual: gh("249", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa 1031: utrata Milska, Łużyc i Grodów Czerwieńskich; rysunek korony-repliki",
          ua: "Карта 1031: втрата Мильська, Лужиці і Червенських городів; рисунок корони-репліки"
        },
        title: { pl: "Repliki korony, nie zdjęcie skarbu", ua: "Репліки корони, не фото скарбу" },
        prompt: {
          pl: "Szkolna mapa 16:9. Strzałki: Niemcy (Konrad) z zachodu, Ruś (Jarosław Mądry) ze wschodu. Podpisy PL: Milsko, Łużyce, Grody Czerwieńskie. Mały rysunek korony i berła: „repliki — nie insygnia Chrobrego”. BEZ bitwy, BEZ mordu. Styl Nowej Ery.",
          ua: "1031: Мильсько, Лужиця, Червенські городи. Репліки корони. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("1031"), ": cesarz ", em("Konrad"), " i ", em("Jarosław Mądry"), " z Rusi uderzyli naraz. Polska straciła ", em("Milsko"), ", ", em("Łużyce"), " i ", em("Grody Czerwieńskie"), "."],
          ["Starszy brat ", em("Bezprym"), " przejął władzę i zmusił Mieszka do ucieczki. Odesłał ", em("insygnia królewskie"), " cesarzowi — uznał jego zwierzchność. W 1032 zginął. KN: oceń tę postawę — chciał władzy, oddał znaki korony."]
        ],
        ua: [
          ["", em("1031"), ": імператор ", em("Конрад"), " і ", em("Ярослав Мудрий"), " з Русі вдарили разом. Польща втратила ", em("Мильсько"), ", ", em("Лужицю"), " і ", em("Червенські городи"), "."],
          ["Старший брат ", em("Безприм"), " взяв владу і змусив Мешка тікати. Відіслав ", em("королівські інсигнії"), " імператорові — визнав його зверхність. 1032 року загинув. KN: оціни цю поставу — хотів влади, віддав знаки корони."]
        ]
      },
      task: {
        id: "h30-bezprym",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywał się starszy brat Mieszka II, który w 1031 przejął władzę? Wpisz imię.",
          ua: "Як звався старший брат Мешка II, який 1031 року взяв владу? Введи ім’я."
        },
        answer: ["bezprym", "bezprima", "безприм", "безприма"],
        hint: {
          pl: "Quiz nauczycielki. Nie Kazimierz i nie Bolesław.",
          ua: "Квіз вчительки. Не Казимир і не Болеслав."
        },
        explanation: {
          pl: "Bezprym. Kazimierz to syn Mieszka II.",
          ua: "Безприм. Казимир — син Мешка II."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kryzys państwa", ua: "Криза держави" },
      formula: "1038",
      timelineYear: 1038,
      visual: gh("250", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa kryzysu: Mazowsze i Pomorze Gdańskie oderwane, Czechy na Śląsk i Wielkopolskę",
          ua: "Карта кризи: Мазовія і Гданське Помор’я відірвані, Чехія на Сілезію і Великопольщу"
        },
        title: { pl: "Mapa strat, nie bunt z widłami", ua: "Карта втрат, не бунт із вилами" },
        prompt: {
          pl: "Szkolna mapa 16:9 ok. 1038. Podpisy PL: Mazowsze, Pomorze Gdańskie (oderwane); Śląsk (Czechy); Wielkopolska spustoszona; Gniezno, Poznań. Strzałka „Brzetysław 1038”. BEZ tłumu z kosami, BEZ krwi. Tytuł: „kryzys państwa i Kościoła”. Styl Nowej Ery.",
          ua: "1038: Мазовія, Помор’я, Сілезія, Великопольща. Без натовпу з вилами."
        }
      }),
      text: {
        pl: [
          ["Mieszko wrócił po śmierci Bezpryma, ale uznał zwierzchność cesarza i zmarł w ", em("1034"), ". Syn ", em("Kazimierz"), " uciekł. Władzę wzięli ", em("możni"), "."],
          ["", em("1038"), ": bunt ludności — powrót pogaństwa; oderwały się ", em("Mazowsze"), " i ", em("Pomorze Gdańskie"), ". Czeski książę ", em("Brzetysław"), " spustoszył Wielkopolskę, zniszczył Gniezno i Poznań, zabrał relikwie Wojciecha, zajął ", em("Śląsk"), ". Państwo i Kościół niemal przestały istnieć."]
        ],
        ua: [
          ["Мешко повернувся після смерті Безприма, але визнав зверхність імператора і помер ", em("1034"), " року. Син ", em("Казимир"), " утік. Владу взяли ", em("можновладці"), "."],
          ["", em("1038"), ": бунт люду — повернення язичництва; відірвалися ", em("Мазовія"), " і ", em("Гданське Помор’я"), ". Чеський князь ", em("Бржетіслав"), " спустошив Великопольщу, зруйнував Гнєзно і Познань, забрав мощі Войцеха, зайняв ", em("Сілезію"), ". Держава і Церква майже перестали існувати."]
        ]
      },
      task: {
        id: "h30-1038",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Czesi spustoszyli Wielkopolskę i zabrali relikwie Wojciecha? Wpisz tylko liczbę.",
          ua: "У якому році чехи спустошили Великопольщу і забрали мощі Войцеха? Введи лише число."
        },
        answer: 1038,
        hint: {
          pl: "Tysiąc trzydzieści osiem. Na osi: kryzys. Po 1034, przed powrotem Kazimierza.",
          ua: "Тисяча тридцять вісім. На осі: криза. Після 1034, перед поверненням Казимира."
        },
        explanation: {
          pl: "1038. 1025 to śmierć i korona Chrobrego (29).",
          ua: "1038. 1025 — смерть і корона Хороброго (29)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kazimierz Odnowiciel", ua: "Казимир Відновитель" },
      formula: "1039",
      visual: gh("251", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Kazimierza Odnowiciela: powrót z pomocą cesarza, bez obrazu Gersona",
          ua: "Картка Казимира Відновителя: повернення з допомогою імператора, без картини Герсона"
        },
        title: { pl: "Powrót w dzień, nie ruiny Gersona", ua: "Повернення вдень, не руїни Герсона" },
        prompt: {
          pl: "Szkolny slajd 16:9. Książę konno na drodze, mały oddział, dzień, pola — nie dymy i nie ciała. BEZ Gersona, BEZ kruków, BEZ obalonego krzyża. Cztery punkty PL: „kto — Kazimierz Odnowiciel”; „skąd — syn Mieszka II”; „lata — wrócił 1039, zmarł 1058”; „wsławił się — odbudował państwo i Kościół”. Styl Nowej Ery.",
          ua: "Картка Казимира. Повернення 1039. Не Герсон."
        }
      }),
      text: {
        pl: [
          ["", em("Kazimierz Odnowiciel"), ": kto — syn Mieszka II; skąd — wygnanie, potem Polska; lata — wrócił ", em("1039"), ", zmarł 1058; przydomek ", em("Odnowiciel"), " = odbudował państwo i chrześcijaństwo."],
          "Cesarz bał się potęgi Czech. Rycheza zabiegała o syna. Kazimierz wrócił z ok. 500 wojami. Zajął Wielkopolskę i Małopolskę. Gniezno leżało w gruzach — siedzibą stał się Kraków."
        ],
        ua: [
          ["", em("Казимир Відновитель"), ": хто — син Мешка II; звідки — вигнання, потім Польща; роки — повернувся ", em("1039"), ", помер 1058; прізвисько ", em("Відновитель"), " = відбудовав державу і християнство."],
          "Імператор боявся потуги Чехії. Рихеза клопотала за сина. Казимир повернувся з бл. 500 воями. Зайняв Великопольщу і Малопольщу. Гнєзно лежало в руїнах — осередком став Краків."
        ]
      },
      task: {
        id: "h30-korona-k",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz Odnowiciel koronował się na króla Polski — prawda czy fałsz?",
          ua: "Казимир Відновитель коронувався на короля Польщі — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Quiz nauczycielki. Koronę oddał już Bezprym. Kazimierz został księciem.",
          ua: "Квіз вчительки. Корону віддав уже Безприм. Казимир лишився князем."
        },
        explanation: {
          pl: "Fałsz. Nie odzyskał korony. Następna korona: Śmiały, 1076.",
          ua: "Неправда. Не повернув корону. Наступна корона: Сміливий, 1076."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Ziemie Odnowiciela", ua: "Землі Відновителя" },
      formula: "Wielkopolska · Małopolska · Mazowsze · Śląsk",
      visual: gh("252", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Polski Kazimierza: Wielkopolska, Małopolska, Mazowsze, Śląsk, Pomorze Gdańskie, Kraków",
          ua: "Карта Польщі Казимира: Великопольща, Малопольща, Мазовія, Сілезія, Гданське Помор’я, Краків"
        },
        title: { pl: "Pięć ziem i Kraków, nie bitwa", ua: "П’ять земель і Краків, не битва" },
        prompt: {
          pl: "Szkolna mapa 16:9, Polska ok. 1058. Podpisy PL: Wielkopolska, Małopolska, Mazowsze, Śląsk, Pomorze Gdańskie. Punkt: Kraków — siedziba. BEZ granic 2026, BEZ kopii kadru filmu. Tytuł: „ziemie Kazimierza Odnowiciela”. Styl Nowej Ery.",
          ua: "Землі Казимира. Краків. Без бою."
        }
      }),
      text: {
        pl: [
          ["Odzyskał ", em("Mazowsze"), " i ", em("Pomorze Gdańskie"), ", odebrał Czechom ", em("Śląsk"), ". Małżeństwo z ", em("Dobroniegą"), " — sojusz z Rusią i wsparcie zbrojne."],
          "Stłumił bunty, przywracał chrześcijaństwo, odbudował biskupstwa, budował kościoły. Ufundował klasztor benedyktynów w Tyńcu. KN: dlatego „Odnowiciel”."
        ],
        ua: [
          ["Повернув ", em("Мазовію"), " і ", em("Гданське Помор’я"), ", забрав у чехів ", em("Сілезію"), ". Шлюб із ", em("Добронегою"), " — союз із Руссю і збройна підтримка."],
          "Придушив бунти, повертав християнство, відбудовував єпископства, будував церкви. Заснував бенедиктинський монастир у Тинці. KN: тому «Відновитель»."
        ]
      },
      task: {
        id: "h30-ziemie",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które ziemie weszły w skład państwa Kazimierza Odnowiciela?",
          ua: "Які землі ввійшли до держави Казимира Відновителя?"
        },
        options: [
          { id: "a", label: { pl: "Wielkopolska, Małopolska, Mazowsze, Śląsk oraz Pomorze Gdańskie; siedziba w Krakowie", ua: "Великопольща, Малопольща, Мазовія, Сілезія і Гданське Помор’я; осідок у Кракові" } },
          { id: "b", label: { pl: "tylko Milsko i Łużyce jak za Chrobrego w 1018", ua: "лише Мильсько і Лужиця як за Хороброго 1018 року" } },
          { id: "c", label: { pl: "dzielnice z testamentu 1138", ua: "уділи з заповіту 1138" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: ziemie Kazimierza. Film: Kraków odtąd główna siedziba.",
          ua: "Цілі вчительки: землі Казимира. Фільм: Краків відтоді головний осідок."
        },
        explanation: {
          pl: "1138 = lekcja 31. Milsko i Łużyce w 1031 odpadły.",
          ua: "1138 = урок 31. Мильсько і Лужиця 1031-го відпали."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Bolesław Śmiały", ua: "Болеслав Сміливий" },
      formula: "1076",
      timelineYear: 1076,
      visual: gh("253", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Bolesława Śmiałego: syn Kazimierza, koronacja 1076, bez Matejki",
          ua: "Картка Болеслава Сміливого: син Казимира, коронація 1076, без Матейка"
        },
        title: { pl: "Korona 1076, nie Matejko", ua: "Корона 1076, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny król w koronie, dzień. BEZ Matejki. Cztery punkty PL: „kto — Bolesław Śmiały (Szczodry)”; „skąd — syn Kazimierza Odnowiciela”; „lata — 1058–1079, korona 1076”; „wsławił się — silna władza, sojusz z papieżem”. Styl Nowej Ery.",
          ua: "Картка Сміливого. 1076. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Bolesław Śmiały"), " (także Szczodry): kto — najstarszy syn Kazimierza; skąd — Kraków; lata — władza ", em("1058–1079"), "; w ", em("1076"), " koronacja na króla."],
          "Chciał wzmocnić Polskę: wyprawy (Czechy, odzyskane Grody Czerwieńskie) i dyplomacja. Poparł papieża Grzegorza VII przeciw Henrykowi IV (spór z lekcji 20) — wróciło arcybiskupstwo w Gnieźnie."
        ],
        ua: [
          ["", em("Болеслав Сміливий"), " (також Щедрий): хто — найстарший син Казимира; звідки — Краків; роки — влада ", em("1058–1079"), "; ", em("1076"), " року коронація на короля."],
          "Хотів зміцнити Польщу: походи (Чехія, повернуті Червенські городи) і дипломатія. Підтримав папу Григорія VII проти Генріха IV (спір з уроку 20) — повернулося архієпископство в Гнєзні."
        ]
      },
      task: {
        id: "h30-1076",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku koronowano Bolesława Śmiałego? Wpisz tylko liczbę.",
          ua: "У якому році коронували Болеслава Сміливого? Введи лише число."
        },
        answer: 1076,
        hint: {
          pl: "Tysiąc siedemdziesiąt sześć. KN: ta data na osi. Nie 1025 (Chrobry).",
          ua: "Тисяча сімдесят шість. KN: ця дата на осі. Не 1025 (Хоробрий)."
        },
        explanation: {
          pl: "1076. 1025 = pierwszy król, lekcja 29. Canossa 1077 = lekcja 20.",
          ua: "1076. 1025 = перший король, урок 29. Каносса 1077 = урок 20."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Spór ze Stanisławem", ua: "Спір зі Станіславом" },
      formula: "1079",
      timelineYear: 1079,
      visual: gh("254", {
        kind: "image-placeholder",
        alt: {
          pl: "Król i biskup stoją osobno w kościele; spór o władzę, bez klątwy i bez śmierci na obrazie",
          ua: "Король і єпископ стоять окремо в церкві; спір про владу, без прокляття і без смерті на образі"
        },
        title: { pl: "Dwa urzędy, nie klątwa na płótnie", ua: "Дві уряди, не прокляття на полотні" },
        prompt: {
          pl: "Szkolny rysunek 16:9, dzień. Król w koronie i biskup w mitrze stoją osobno w nawie, ubrani, spokój. Napis: „1079”. BEZ Knoora, BEZ podniesionej klątwy jako grozy, BEZ ścięcia, BEZ krwi. Styl Nowej Ery.",
          ua: "Король і єпископ. 1079. Без страти на рисунку."
        }
      }),
      text: {
        pl: [
          ["Możni, wspierani przez biskupa krakowskiego ", em("Stanisława"), ", sprzeciwili się silnej władzy króla. Śmiały stłumił bunt i skazał biskupa na śmierć. Wielkie oburzenie."],
          ["", em("1079"), ": król musiał uciec na Węgry i tam zmarł. KN: przyczyna — spór o władzę; skutek — upadek rządów i utrata korony. Na ekranie nie ma sceny śmierci."]
        ],
        ua: [
          ["Можновладці, яких підтримував краківський єпископ ", em("Станіслав"), ", виступили проти сильної влади короля. Сміливий придушив бунт і засудив єпископа на смерть. Велике обурення."],
          ["", em("1079"), ": король мусив утекти до Угорщини і там помер. KN: причина — спір про владу; наслідок — падіння правління і втрата корони. На екрані немає сцени смерті."]
        ]
      },
      task: {
        id: "h30-stan",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kogo skazał na śmierć Bolesław Śmiały i jaki był skutek?",
          ua: "Кого засудив на смерть Болеслав Сміливий і який був наслідок?"
        },
        options: [
          { id: "a", label: { pl: "biskupa Stanisława; w 1079 król uciekł z Polski", ua: "єпископа Станіслава; 1079 року король утік із Польщі" } },
          { id: "b", label: { pl: "papieża Grzegorza VII — to ten sam spór co Canossa", ua: "папу Григорія VII — то той самий спір, що Каносса" } },
          { id: "c", label: { pl: "brata Władysława Hermana, jak Zbigniew w lekcji 31", ua: "брата Владислава Германа, як Збігнєв в уроці 31" } }
        ],
        answer: "a",
        hint: {
          pl: "Quiz nauczycielki: biskup Stanisław. Grzegorz VII był sojusznikiem.",
          ua: "Квіз вчительки: єпископ Станіслав. Григорій VII був союзником."
        },
        explanation: {
          pl: "Herman i Zbigniew = lekcja 31. Canossa = 20.",
          ua: "Герман і Збігнєв = урок 31. Каносса = 20."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dwie Polski", ua: "Дві Польщі" },
      formula: "Chrobry · Odnowiciel",
      visual: gh("255", {
        kind: "map-placeholder",
        alt: {
          pl: "Porównanie map: większa Polska Chrobrego i mniejsza Polska Kazimierza z Krakowem",
          ua: "Порівняння карт: більша Польща Хороброго і менша Польща Казимира з Краковом"
        },
        title: { pl: "Dwie mapy, nie dwie bitwy", ua: "Дві карти, не дві битви" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie mapy obok siebie. Lewa: „za Chrobrego” — większy zarys, Milsko, Łużyce, Grody. Prawa: „za Kazimierza” — mniejszy zarys, Kraków. Podpis: „państwo odnowione, bez korony”. BEZ bitew. Styl Nowej Ery.",
          ua: "Дві карти. Хоробрий і Казимир. Краків. Без бою."
        }
      }),
      text: {
        pl: [
          "Chrobry zostawił duże państwo i wrogów. Kazimierz złożył Polskę na nowo — mniejszą, z siedzibą w Krakowie, bez korony królewskiej.",
          "Śmiały znów sięgnął po koronę (1076), ale spór ze Stanisławem skończył się wygnaniem. Następca w rodzinie i 1138 — lekcja 31."
        ],
        ua: [
          "Хоробрий лишив велику державу і ворогів. Казимир склав Польщу наново — меншу, з осідком у Кракові, без королівської корони.",
          "Сміливий знову сягнув корони (1076), але спір зі Станіславом скінчився вигнанням. Наступник у родині і 1138 — урок 31."
        ]
      },
      task: {
        id: "h30-vs",
        type: "true-false",
        level: "B",
        question: {
          pl: "Państwo Kazimierza było mniejsze niż za Chrobrego, a stolicą stał się Kraków — prawda czy fałsz?",
          ua: "Держава Казимира була менша, ніж за Хороброго, а столицею став Краків — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Slajd nauczycielki: VS dwóch map. Gniezno zniszczone w 1038.",
          ua: "Слайд вчительки: VS двох карт. Гнєзно зруйноване 1038-го."
        },
        explanation: {
          pl: "Prawda. Korony Kazimierz nie odzyskał.",
          ua: "Правда. Корони Казимир не повернув."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Mieszko II — syn Chrobrego, panował 1025–1034, pierwszy wykształcony władca", ua: "Мешко II — син Хороброго, правив 1025–1034, перший освічений володар" },
        { pl: "Bezprym — starszy brat; 1031 władza; odesłał insygnia królewskie cesarzowi", ua: "Безприм — старший брат; 1031 влада; відіслав королівські інсигнії імператорові" },
        { pl: "insygnia królewskie — korona, berło, jabłko; znaki władzy króla", ua: "королівські інсигнії — корона, скіпетр, яблуко; знаки влади короля" },
        { pl: "kryzys XI w. — najazdy 1031, bunt i pogaństwo, Czechy 1038, utrata ziem", ua: "криза XI ст. — напади 1031, бунт і язичництво, Чехія 1038, втрата земель" },
        { pl: "Kazimierz Odnowiciel — wrócił 1039; odbudował państwo i Kościół; siedziba Kraków; bez korony", ua: "Казимир Відновитель — повернувся 1039; відбудовав державу і Церкву; осідок Краків; без корони" },
        { pl: "Bolesław Śmiały — syn Kazimierza, król od 1076, sojusz z Grzegorzem VII", ua: "Болеслав Сміливий — син Казимира, король від 1076, союз із Григорієм VII" },
        { pl: "biskup Stanisław — spór z królem; 1079 wygnanie Śmiałego", ua: "єпископ Станіслав — спір з королем; 1079 вигнання Сміливого" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Po Chrobrym rządził od razu Krzywousty. Kazimierz koronował się w 1025. Bezprym to biskup z Gniezna. Śmiały skazał papieża. Testament 1138 należy do tej lekcji.”",
        ua: "«Після Хороброго одразу правив Кривоустий. Казимир коронувався 1025 року. Безприм — єпископ із Гнєзна. Сміливий засудив папу. Заповіт 1138 належить цьому урокові.»"
      },
      text: {
        pl: [
          "Po Chrobrym: Mieszko II. Korona 1025 = ojciec; Kazimierz bez korony. Bezprym = brat. Śmiały skazał Stanisława. 1138 = 31."
        ],
        ua: [
          "Після Хороброго: Мешко II. Корона 1025 = батько; Казимир без корони. Безприм = брат. Сміливий засудив Станіслава. 1138 = 31."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: kryzys, Odnowiciel, upadek Śmiałego. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: криза, Відновитель, падіння Сміливого. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1031/1038; Kraków; 1076 i 1079."
        ],
        ua: [
          "Підказка: 1031/1038; Краків; 1076 і 1079."
        ]
      },
      task: {
        id: "h30-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje kryzys, odbudowę i upadek Śmiałego?",
          ua: "Яке речення охоплює кризу, відбудову і падіння Сміливого?"
        },
        options: [
          { id: "a", label: { pl: "Po 1025 najazdy i 1038 niemal zniszczyły państwo; Kazimierz odnowił ziemie i Kościół (Kraków); Śmiały koronował się 1076, a po sporze ze Stanisławem uciekł w 1079", ua: "Після 1025 напади і 1038 майже знищили державу; Казимир відновив землі і Церкву (Краків); Сміливий коронувався 1076, а після спору зі Станіславом утік 1079" } },
          { id: "b", label: { pl: "Wszystko skończyło się chrztem Mieszka w 966", ua: "Усе скінчилося хрещенням Мешка 966 року" } },
          { id: "c", label: { pl: "To tylko wojna pod Cedynią z lekcji 28", ua: "Це лише війна під Цедінею з уроку 28" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: kryzys, ziemie Kazimierza, upadek Śmiałego.",
          ua: "Цілі вчительки: криза, землі Казимира, падіння Сміливого."
        },
        explanation: {
          pl: "966 i Cedynia = 28.",
          ua: "966 і Цедіня = 28."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Trzech władców", ua: "Троє володарів" },
      task: {
        id: "h30-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest KN ponadpodstawowe (przyczyny kryzysu, Europa Śmiałego, ocena trzech)?",
          ua: "Що є KN понад базове (причини кризи, Європа Сміливого, оцінка трьох)?"
        },
        options: [
          { id: "a", label: { pl: "Kryzys: wrogowie + słabszy następca + bunt; Śmiały grał z papieżem przeciw cesarzowi; Mieszko utrzymał koronę krótko, Kazimierz odnowił kraj bez korony, Śmiały odzyskał koronę i ją stracił", ua: "Криза: вороги + слабший наступник + бунт; Сміливий грав із папою проти імператора; Мешко втримав корону недовго, Казимир відновив край без корони, Сміливий повернув корону і її втратив" } },
          { id: "b", label: { pl: "Gall Anonim i Kadłubek to ta godzina, nie Tajemnice sprzed wieków", ua: "Галл Анонім і Кадлубек — ця година, не «Таємниці з віків»" } },
          { id: "c", label: { pl: "trzeba wykuć cytat Długosza słowo w słowo", ua: "треба вивчити цитату Длугоша слово в слово" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: oceń Mieszka II, Kazimierza i Śmiałego. Kronikarze — osobna wstawka podręcznika.",
          ua: "KN: оціни Мешка II, Казимира і Сміливого. Літописці — окрема вставка підручника."
        },
        explanation: {
          pl: "Długosz: Kazimierz podniósł kraj z upadku — myśl, nie cytat do wkuwania. Gall = Tajemnice, nie ta lekcja.",
          ua: "Длугош: Казимир підняв край з упадку — думка, не цитата для заучування. Галл = Таємниці, не цей урок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h30-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "1038, 1076, 1079 — co jest prawdą?",
          ua: "1038, 1076, 1079 — що правда?"
        },
        options: [
          { id: "a", label: { pl: "1038 kryzys (Czechy, bunt); Kazimierz odnowił państwo bez korony; 1076 Śmiały królem; 1079 spór ze Stanisławem i wygnanie", ua: "1038 криза (Чехія, бунт); Казимир відновив державу без корони; 1076 Сміливий королем; 1079 спір зі Станіславом і вигнання" } },
          { id: "b", label: { pl: "1038 to zjazd gnieźnieński; 1076 to chrzest Mieszka", ua: "1038 — з’їзд у Гнєзні; 1076 — хрещення Мешка" } },
          { id: "c", label: { pl: "1079 to testament Krzywoustego", ua: "1079 — заповіт Кривоустого" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: kryzys, Odnowiciel, Śmiały, Stanisław. 1076 na osi.",
          ua: "KN: криза, Відновитель, Сміливий, Станіслав. 1076 на осі."
        },
        explanation: {
          pl: "Zjazd 1000 i chrzest 966 = wcześniej. Testament 1138 = 31.",
          ua: "З’їзд 1000 і хрещення 966 = раніше. Заповіт 1138 = 31."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Po śmierci Chrobrego Mieszko II nie utrzymał zdobyczy. W 1031 najazd i Bezprym; w 1038 kryzys niemal zniszczył państwo.",
          ["Mieszko II", "1038"],
          "Після смерті Хороброго Мешко II не втримав здобутків. 1031 року напад і Безприм; 1038-го криза майже знищила державу.",
          ["Мешко II", "1038"]
        ),
        mark(
          "Kazimierz Odnowiciel od 1039 odbudował ziemie i Kościół. Siedzibą stał się Kraków. Korony nie odzyskał.",
          ["Kazimierz Odnowiciel", "Kraków"],
          "Казимир Відновитель від 1039 відбудовав землі і Церкву. Осідком став Краків. Корони не повернув.",
          ["Казимир Відновитель", "Краків"]
        ),
        mark(
          "Bolesław Śmiały prowadził czynną politykę i w 1076 koronował się na króla.",
          ["Bolesław Śmiały", "1076"],
          "Болеслав Сміливий вів чинну політику і 1076 року коронувався на короля.",
          ["Болеслав Сміливий", "1076"]
        ),
        mark(
          "Spór z biskupem Stanisławem skończył się wygnaniem króla w 1079 roku.",
          ["Stanisławem", "1079"],
          "Спір з єпископом Станіславом скінчився вигнанням короля 1079 року.",
          ["Станіславом", "1079"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: rządy Bolesława Krzywoustego — nie koronacja 1076 i nie 1138 na tej osi.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: правління Болеслава Кривоустого — не коронація 1076 і не 1138 на цій осі.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "1G0vt3I7nAU",
        title: {
          pl: "Krótkie Lekcje: Kryzys i odbudowa państwa polskiego",
          ua: "Короткі уроки: Криза і відбудова польської держави"
        }
      }
    }
  ]
};
