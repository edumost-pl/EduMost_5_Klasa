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
      heading: { pl: "Zanim powstała Polska", ua: "Перш ніж виникла Польща" },
      formula: "IV–VI w. · X w.",
      text: {
        pl: [
          "Z lekcji 13 znasz 476 i wędrówkę ludów. Na te ziemie przyszli Słowianie. Dziś: zanim było państwo Piastów.",
          "Oś wraca do IX–X wieku (Morawy, Polanie). Chrzest Mieszka — następna lekcja."
        ],
        ua: [
          "З уроку 13 знаєш 476 і переселення народів. На ці землі прийшли слов’яни. Сьогодні: перш ніж була держава П’ястів.",
          "Вісь повертається до IX–X століття (Моравія, поляни). Хрещення Мешка — наступний урок."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać osadę w Biskupinie i ślady archeologiczne", ua: "описати оселю в Біскупіні і археологічні сліди" },
        { pl: "scharakteryzować wierzenia Słowian (Swaróg, Perun, Świętowit)", ua: "схарактеризувати вірування слов’ян (Сварог, Перун, Святовит)" },
        { pl: "przedstawić Wielkie Morawy oraz Cyryla i Metodego", ua: "представити Велику Моравію та Кирила і Мефодія" },
        { pl: "wskazać plemiona na ziemiach polskich i obrządek łaciński / grecki", ua: "вказати племена на польських землях і обряд латинський / грецький" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Skąd wiemy?", ua: "Звідки знаємо?" },
      formula: "kurhan · kręgi",
      visual: gh("224", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzy ślady: kopiec-kurhan, kamienne kręgi, resztki grodu",
          ua: "Три сліди: курган, кам’яні кола, рештки городища"
        },
        title: { pl: "Wykopaliska, nie bajka", ua: "Розкопки, не казка" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Trzy ikony z podpisami PL: kurhan (kopiec grobowy); kamienne kręgi; resztki grodu. Tytuł: „archeologia”. BEZ ciał, BEZ kopii kadru filmu. Styl Nowej Ery.",
          ua: "Курган, кам’яні кола, городище. Без тіл і без кадру фільму."
        }
      }),
      text: {
        pl: [
          ["O najdawniejszej przeszłości ziem polskich mówią ", em("wykopaliska"), ". Zostają ", em("kurhany"), " (kopce grobowe), ", em("kamienne kręgi"), " i resztki ", em("grodów"), "."],
          "To nie magia i nie film. Archeolog czyta ziemię — potem dopiero legendy."
        ],
        ua: [
          ["Про найдавніше минуле польських земель кажуть ", em("розкопки"), ". Лишаються ", em("кургани"), " (могильні насипи), ", em("кам’яні кола"), " і рештки ", em("городищ"), "."],
          "Це не магія і не фільм. Археолог читає землю — потім уже легенди."
        ]
      },
      task: {
        id: "h27-archeo",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kurhan to kopiec grobowy, a kamienne kręgi to ślad dawnych obrzędów — prawda czy fałsz?",
          ua: "Курган — могильний насип, а кам’яні кола — слід давніх обрядів — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: kurhan, kamienne kręgi. Film Zapamiętaj: grody, kurhany, kręgi.",
          ua: "KN: курган, кам’яні кола. Фільм «Запам’ятай»: городи, кургани, кола."
        },
        explanation: {
          pl: "Prawda. Źródło: ziemia, nie tylko opowieść.",
          ua: "Правда. Джерело: земля, не лише оповідь."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Biskupin", ua: "Біскупін" },
      formula: "osada warowna",
      visual: gh("225", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolny rysunek osady w Biskupinie: palisada, brama, pomost nad wodą",
          ua: "Шкільний рисунок оселі в Біскупіні: частокіл, брама, місток над водою"
        },
        title: { pl: "Drewno i woda, nie foto skansenu", ua: "Дерево і вода, не фото скансену" },
        prompt: {
          pl: "Szkolny rysunek 16:9 osady warownej: palisada z bali, wieża-brama, pomost, chaty. Podpis: „Biskupin”. Dzień, spokój. NIE zdjęcie skansenu, NIE kadr filmu. Styl Nowej Ery.",
          ua: "Городище-схема: частокіл, брама, місток. Не фото."
        }
      }),
      text: {
        pl: [
          ["", em("Biskupin"), " to osada warowna z palisadą i bramą — ludność żyła tam długo ", em("przed"), " Słowianami. KN: umieć opisać gród, nie mylić go z Gnieznem Piastów."],
          "Słowianie przyszli później. Biskupin pokazuje, że te ziemie były zamieszkane już w pradziejach."
        ],
        ua: [
          ["", em("Біскупін"), " — укріплена оселя з частоколом і брамою: люди жили там задовго ", em("перед"), " слов’янами. KN: описати городище, не плутати з Гнєзном П’ястів."],
          "Слов’яни прийшли пізніше. Біскупін показує, що ці землі були заселені вже в праісторії."
        ]
      },
      task: {
        id: "h27-bisk",
        type: "true-false",
        level: "A",
        question: {
          pl: "Biskupin to osada warowna z palisadą — starsza niż państwo Polan — prawda czy fałsz?",
          ua: "Біскупін — укріплена оселя з частоколом, старша за державу полян — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: opisać Biskupin. Nie jest to stolica Mieszka.",
          ua: "KN: описати Біскупін. Це не столиця Мешка."
        },
        explanation: {
          pl: "Prawda. Gniezno i chrzest = lekcja 28.",
          ua: "Правда. Гнєзно і хрещення = урок 28."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wędrówka i Słowianie", ua: "Переселення і слов’яни" },
      formula: "IV–VI w.",
      visual: gh("226", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Europy: Słowianie zachodni, wschodni i południowi",
          ua: "Карта Європи: слов’яни західні, східні і південні"
        },
        title: { pl: "Trzy kolory, nie bitwa", ua: "Три кольори, не битва" },
        prompt: {
          pl: "Szkolna mapa 16:9 Europy, dzień. Trzy barwy: Słowianie zachodni (zielony), wschodni (błękit), południowi (żółty). Krótka strzałka „wędrówka IV–VI w.”. Podpisy PL. BEZ rzezi Rzymu, BEZ kopii mapy z filmu. Styl Nowej Ery.",
          ua: "Три групи слов’ян. Без штурму Риму."
        }
      }),
      text: {
        pl: [
          ["", em("Wielka wędrówka ludów"), " (IV–VI w., po upadku cesarstwa na zachodzie) to przemieszczanie wielkich grup. Na ziemiach polskich osiedlili się ", em("Słowianie"), "."],
          "Łączył ich język, zwyczaje i wierzenia. Dzielili się na plemiona: zachodnich, wschodnich i południowych."
        ],
        ua: [
          ["", em("Велике переселення народів"), " (IV–VI ст., після упадку імперії на заході) — рух великих груп. На польських землях оселилися ", em("слов’яни"), "."],
          "Їх єднали мова, звичаї і вірування. Ділилися на племена: західних, східних і південних."
        ]
      },
      task: {
        id: "h27-wedr",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kiedy wielka wędrówka ludów i kto osiadł na ziemiach polskich?",
          ua: "Коли велике переселення народів і хто осів на польських землях?"
        },
        options: [
          { id: "a", label: { pl: "IV–VI w.; Słowianie", ua: "IV–VI ст.; слов’яни" } },
          { id: "b", label: { pl: "tylko rok 1095 z lekcji 21", ua: "лише 1095 рік з уроку 21" } },
          { id: "c", label: { pl: "622 — hidżra z lekcji 18", ua: "622 — хіджра з уроку 18" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: od IV do VI w.; po 476. Nie krucjata i nie Mahomet.",
          ua: "Картка: від IV до VI ст.; після 476. Не круціата і не Магомет."
        },
        explanation: {
          pl: "Notatka nauczycielki. 476 znasz z lekcji 13.",
          ua: "Нотатка вчительки. 476 знаєш з уроку 13."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jak żyli Słowianie?", ua: "Як жили слов’яни?" },
      formula: "ziemianka",
      visual: gh("227", {
        kind: "image-placeholder",
        alt: {
          pl: "Ziemianka i cztery zajęcia: pole, ryby, łowy, garncarstwo",
          ua: "Землянка і чотири заняття: поле, риба, полювання, гончарство"
        },
        title: { pl: "Cztery prace, nie dwór Piasta", ua: "Чотири праці, не двір П’яста" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Ziemianka (część w ziemi, dach ze strzechy). Cztery ikony PL: rolnictwo (radło, sierp); rybołówstwo; łowiectwo; garncarstwo. Ludzie w tunikach, spokój. BEZ bitwy, BEZ nędzy-gore. Styl Nowej Ery.",
          ua: "Землянка і чотири заняття. Без бою."
        }
      }),
      text: {
        pl: [
          ["Żyli nad rzekami i jeziorami, w ", em("ziemiankach"), ". Narzędzia: radło, sierp, żarna. Cztery zajęcia z karty: ", em("rolnictwo"), ", ", em("rybołówstwo"), ", ", em("łowiectwo"), ", ", em("garncarstwo"), "."],
          "Było też kowalstwo. Osady czasem otaczał wał. Wojowników było — na obrazie stoją, nie leżą."
        ],
        ua: [
          ["Жили над ріками і озерами, у ", em("землянках"), ". Знаряддя: рало, серп, жорна. Чотири заняття з картки: ", em("рільництво"), ", ", em("рибальство"), ", ", em("полювання"), ", ", em("гончарство"), "."],
          "Було й ковальство. Оселі інколи оточував вал. Воїни на рисунку стоять, не лежать."
        ]
      },
      task: {
        id: "h27-zaj",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które cztery zajęcia Słowian wpiszesz do zeszytu?",
          ua: "Які чотири заняття слов’ян впишеш у зошит?"
        },
        options: [
          { id: "a", label: { pl: "rolnictwo, rybołówstwo, łowiectwo, garncarstwo", ua: "рільництво, рибальство, полювання, гончарство" } },
          { id: "b", label: { pl: "tylko hołd lenny i cechy z lekcji 22 i 24", ua: "лише ленна присяга і цехи з уроків 22 і 24" } },
          { id: "c", label: { pl: "tylko miniatury z lekcji 26", ua: "лише мініатюри з уроку 26" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: wypisz cztery zajęcia. Film dodaje kowalstwo — tu cztery z zeszytu.",
          ua: "Картка: випиши чотири заняття. Фільм додає ковальство — тут чотири з зошита."
        },
        explanation: {
          pl: "Notatka nauczycielki. Feudalizm i cechy = inne lekcje.",
          ua: "Нотатка вчительки. Феодалізм і цехи = інші уроки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wierzenia Słowian", ua: "Вірування слов’ян" },
      formula: "Swaróg · Perun · Świętowit",
      visual: gh("228", {
        kind: "image-placeholder",
        alt: {
          pl: "Trzej bogowie w szatach: Swaróg ze słońcem, Perun z piorunem, Świętowit z czterema twarzami",
          ua: "Три боги в шатах: Сварог із сонцем, Перун із блискавкою, Святовит із чотирма обличчями"
        },
        title: { pl: "Siły przyrody, nie horror", ua: "Сили природи, не жах" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzech bogów W SZATACH, dzień, spokój. Swaróg — ogień i słońce. Perun — niebo i piorun (laska, nie gore). Świętowit — cztery twarze / cztery strony świata, wojna i urodzaj. Tytuł: „poganie”. BEZ ofiar z ludzi, BEZ kopii kadru. Styl Nowej Ery.",
          ua: "Три боги в шатах. Без жертв людьми."
        }
      }),
      text: {
        pl: [
          ["Słowianie byli ", em("poganami"), ": czcili wielu bogów i siły ", em("przyrody"), ". ", em("Swaróg"), " — ogień i słońce. ", em("Perun"), " — niebo i pioruny. ", em("Świętowit"), " — wojna i urodzaj; głowa ku czterem stronom świata."],
          "Duchy domu i świat zmarłych: na groby noszono jedzenie. Święte miejsca: lasy i góry (np. Ślęża)."
        ],
        ua: [
          ["Слов’яни були ", em("поганами"), ": шанували багатьох богів і сили ", em("природи"), ". ", em("Сварог"), " — вогонь і сонце. ", em("Перун"), " — небо і блискавки. ", em("Святовит"), " — війна і врожай; голова на чотири сторони світу."],
          "Духи дому і світ померлих: на могили носили їжу. Святі місця: ліси і гори (напр. Шленжа)."
        ]
      },
      task: {
        id: "h27-bog",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Słowianie czcili siły ______. Bóg ognia i słońca to ______. Nieba i piorunów — ______. Pan wojny i urodzaju z czterema stronami świata — ______.",
          ua: "Слов’яни шанували сили ______. Бог вогню і сонця — ______. Неба і блискавок — ______. Пан війни і врожаю з чотирма сторонами світу — ______."
        },
        options: [
          { id: "a", label: { pl: "przyrody; Swaróg; Perun; Świętowit", ua: "природи; Сварог; Перун; Святовит" } },
          { id: "b", label: { pl: "tylko Allaha z lekcji 18", ua: "лише Аллаха з уроку 18" } },
          { id: "c", label: { pl: "Zeus, Atena i Posejdon z lekcji 9", ua: "Зевс, Афіна і Посейдон з уроку 9" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta nauczycielki + KN: Swaróg, Perun, Świętowit.",
          ua: "Картка вчительки + KN: Сварог, Перун, Святовит."
        },
        explanation: {
          pl: "Islam = 18. Olimp grecki = 9. Tu słowiańscy bogowie.",
          ua: "Іслам = 18. Грецький Олімп = 9. Тут слов’янські боги."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Plemiona na ziemiach polskich", ua: "Племена на польських землях" },
      formula: "Polanie · Wiślanie",
      timelineId: "plemionaX",
      visual: gh("229", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa plemion: Polanie koło Gniezna, Wiślanie, Ślężanie i Góra Ślęża",
          ua: "Карта племен: поляни біля Гнєзна, вісляни, шлензани і гора Шленжа"
        },
        title: { pl: "Pola wokół Gniezna", ua: "Поля довкола Гнєзна" },
        prompt: {
          pl: "Szkolna mapa 16:9 ziem polskich, dzień. Podpisy PL: Polanie (Warta, Gniezno), Wiślanie, Mazowszanie, Pomorzanie, Ślężanie; Góra Ślęża (kult). BEZ czerwonej granicy 992, BEZ skrzyżowanych mieczy Cedyni, BEZ mapy Mieszka. Styl Nowej Ery.",
          ua: "Племена. Не карта Мешка і не Цедіня."
        }
      }),
      text: {
        pl: [
          ["Plemiona m.in.: Pomorzanie, ", em("Polanie"), ", Mazowszanie, ", em("Wiślanie"), ", Ślężanie. Od Polan — nazwa ", em("Polska"), ". Najpierw ziemie wokół ", em("Gniezna"), "."],
          ["Góra ", em("Ślęża"), " — święte miejsce Ślężan (jak „olimp” śląski). Państwo Wiślan w IX w. szybko upadło; w X w. silniejsi byli Polanie."]
        ],
        ua: [
          ["Племена зокрема: поморяни, ", em("поляни"), ", мазовшани, ", em("вісляни"), ", шлензани. Від полян — назва ", em("Польща"), ". Спочатку землі довкола ", em("Гнєзна"), "."],
          ["Гора ", em("Шленжа"), " — святе місце шлензан (як сілезький «олімп»). Держава віслян у IX ст. швидко впала; у X ст. сильнішими були поляни."]
        ]
      },
      task: {
        id: "h27-polanie",
        type: "input-text",
        level: "A",
        question: {
          pl: "Od którego plemienia pochodzi nazwa Polska? Wpisz nazwę plemienia.",
          ua: "Від якого племені походить назва Польща? Введи назву племені."
        },
        answer: ["polanie", "polan", "поляни", "полян", "polanów", "plemię polan", "плем’я полян"],
        hint: {
          pl: "Karta: najważniejsze plemię. Stolicy szukaj nad Wartą.",
          ua: "Картка: найважливіше плем’я. Столиці шукай над Вартою."
        },
        explanation: {
          pl: "Polanie. Wiślanie to inne plemię (koło Wisły).",
          ua: "Поляни. Вісляни — інше плем’я (біля Вісли)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Cyryl i Metody", ua: "Кирило і Мефодій" },
      formula: "IX w. · Morawy",
      timelineId: "morawy",
      visual: gh("230", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Cyryla i Metodego: cztery punkty i mała mapa Wielkich Moraw",
          ua: "Картка Кирила і Мефодія: чотири пункти і мала карта Великої Моравії"
        },
        title: { pl: "Alfabet dla Słowian, nie ikona", ua: "Абетка для слов’ян, не ікона" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dwaj mnisi w szatach (brody, księga, krzyż) — rysunek szkolny, NIE ikona cerkiewna i NIE kadr filmu. Cztery punkty PL: „kto — św. Cyryl i św. Metody”; „skąd — Bizancjum”; „lata — IX wiek”; „wsławili się — alfabet i liturgia po słowiańsku”. Mała mapa: Państwo Wielkomorawskie. Styl Nowej Ery.",
          ua: "Картка Кирила і Мефодія: Візантія, IX ст., абетка. Не церковна ікона."
        }
      }),
      text: {
        pl: [
          ["", em("Państwo Wielkomorawskie"), " (IX w., ziemie dzisiejszych Czech i Słowacji). Cesarz bizantyjski przysłał zakonników: ", em("Cyryl"), " i ", em("Metody"), "."],
          ["Kto: święci misjonarze. Skąd: Bizancjum. Lata: IX w. Czym się wsławili: liturgia i Biblia po słowiańsku oraz ", em("alfabet"), " (na bazie greki). Państwo upadło w X w. (m.in. najazdy Węgrów)."]
        ],
        ua: [
          ["", em("Великоморавія"), " (IX ст., землі сьогоднішніх Чехії і Словаччини). Візантійський імператор надіслав ченців: ", em("Кирила"), " і ", em("Мефодія"), "."],
          ["Хто: святі місіонери. Звідки: Візантія. Роки: IX ст. Чим уславилися: літургія і Біблія слов’янською та ", em("абетка"), " (на основі грецької). Держава впала в X ст. (зокрема напади угорців)."]
        ]
      },
      task: {
        id: "h27-cyryl",
        type: "true-false",
        level: "B",
        question: {
          pl: "Cyryl i Metody przetłumaczyli Biblię na język słowiański i dali alfabet — prawda czy fałsz?",
          ua: "Кирило і Мефодій переклали Біблію слов’янською і дали абетку — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: rola Cyryla i Metodego, pismo słowiańskie. To jedyna karta postaci tej lekcji.",
          ua: "KN: роль Кирила і Мефодія, слов’янське письмо. Це єдина картка постаті цього уроку."
        },
        explanation: {
          pl: "Prawda. Para na jednej karcie, jak Romulus i Remus w lekcji 12.",
          ua: "Правда. Пара на одній картці, як Ромул і Рем в уроці 12."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Nowe państwa w X wieku", ua: "Нові держави в X столітті" },
      formula: "łacina · greka",
      timelineId: "plemionaX",
      visual: gh("231", {
        kind: "map-placeholder",
        alt: {
          pl: "Lista państw X w.: obrządek łaciński i grecki; Polanie wokół Gniezna",
          ua: "Список держав X ст.: обряд латинський і грецький; поляни довкола Гнєзна"
        },
        title: { pl: "Dwa obrządki, nie chrzest 966", ua: "Два обряди, не хрещення 966" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dwie kolumny PL: „obrządek łaciński — Czechy, Chorwacja, Polska”; „obrządek grecki — Ruś Kijowska, Serbia”. Obok małe Gniezno i napis „Polanie, X w.”. BEZ sceny chrztu, BEZ korony, BEZ Cedyni. Styl Nowej Ery.",
          ua: "Латинський і грецький обряд. Без хрещення 966."
        }
      }),
      text: {
        pl: [
          ["W X w.: Czechy, ", em("Ruś Kijowska"), ", Serbia, Chorwacja — i państwo Polan. KN: jedni przyjęli chrześcijaństwo w obrządku ", em("łacińskim"), " (Czechy, Chorwacja, Polska), inni ", em("greckim"), " (Ruś, Serbia)."],
          "Polanie podbili sąsiadów i dali początek Polsce. Jak wyglądał chrzest Mieszka — lekcja 28."
        ],
        ua: [
          ["У X ст.: Чехія, ", em("Київська Русь"), ", Сербія, Хорватія — і держава полян. KN: одні прийняли християнство ", em("латинського"), " обряду (Чехія, Хорватія, Польща), інші ", em("грецького"), " (Русь, Сербія)."],
          "Поляни підбили сусідів і дали початок Польщі. Як виглядало хрещення Мешка — урок 28."
        ]
      },
      task: {
        id: "h27-obrzad",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Która para obrządków jest zgodna z KN?",
          ua: "Яка пара обрядів згідна з KN?"
        },
        options: [
          { id: "a", label: { pl: "Czechy, Chorwacja, Polska — łaciński; Ruś Kijowska, Serbia — grecki", ua: "Чехія, Хорватія, Польща — латинський; Київська Русь, Сербія — грецький" } },
          { id: "b", label: { pl: "wszystkie państwa — tylko islam z 622", ua: "усі держави — лише іслам з 622" } },
          { id: "c", label: { pl: "obrządek to to samo co hołd z 1122", ua: "обряд — це те саме, що присяга 1122" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe: rozróżnić obrządek łaciński i grecki. Szczegóły chrztu Polski = 28.",
          ua: "KN базове: розрізнити латинський і грецький обряд. Деталі хрещення Польщі = 28."
        },
        explanation: {
          pl: "Film: lista państw X w. Islam i Wormacja = inne lekcje.",
          ua: "Фільм: список держав X ст. Іслам і Вормс = інші уроки."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "wielka wędrówka ludów — IV–VI w.: wielkie grupy idą na zachód Europy", ua: "велике переселення народів — IV–VI ст.: великі групи йдуть на захід Європи" },
        { pl: "kurhan / kamienne kręgi / gród — ślady w ziemi: kopiec, krąg, warownia", ua: "курган / кам’яні кола / городище — сліди в землі: насип, коло, твердиня" },
        { pl: "Biskupin — osada warowna z palisadą, starsza niż Słowianie", ua: "Біскупін — укріплена оселя з частоколом, старша за слов’ян" },
        { pl: "plemię / Polanie / Wiślanie — wspólnota; Polanie wokół Gniezna; Wiślanie nad Wisłą", ua: "плем’я / поляни / вісляни — спільнота; поляни довкола Гнєзна; вісляни над Віслою" },
        { pl: "Swaróg, Perun, Świętowit — ogień/słońce; piorun; wojna i urodzaj (cztery strony świata)", ua: "Сварог, Перун, Святовит — вогонь/сонце; блискавка; війна і врожай (чотири сторони світу)" },
        { pl: "Państwo Wielkomorawskie — IX w.; Cyryl i Metody: alfabet i liturgia słowiańska", ua: "Великоморавія — IX ст.; Кирило і Мефодій: абетка і слов’янська літургія" },
        { pl: "obrządek łaciński / grecki — dwa sposoby chrześcijaństwa w państwach X w.", ua: "обряд латинський / грецький — два способи християнства в державах X ст." }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Biskupin zbudował Mieszko w 966. Słowianie czcili tylko Allaha. Swaróg to rycerz z lekcji 23. Polanie mieszkali w Mekce. Cyryl wymyślił hołd lenny. Wielka wędrówka to rok 1095.”",
        ua: "«Біскупін збудував Мешко 966 року. Слов’яни шанували лише Аллаха. Сварог — лицар з уроку 23. Поляни жили в Мецці. Кирило вигадав ленну присягу. Велике переселення — 1095 рік.»"
      },
      text: {
        pl: [
          "Biskupin jest starszy. Słowianie — poganie (Swaróg, Perun, Świętowit). Polanie wokół Gniezna. Cyryl — alfabet. Wędrówka: IV–VI w."
        ],
        ua: [
          "Біскупін старший. Слов’яни — погани (Сварог, Перун, Святовит). Поляни довкола Гнєзна. Кирило — абетка. Переселення: IV–VI ст."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: kim byli Słowianie, w kogo wierzyli i skąd nazwa Polska. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: ким були слов’яни, в кого вірили і звідки назва Польща. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: plemiona i ziemianki; przyroda i trzej bogowie; Polanie — Gniezno."
        ],
        ua: [
          "Підказка: племена і землянки; природа і три боги; поляни — Гнєзно."
        ]
      },
      task: {
        id: "h27-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje Słowian, wierzenia i nazwę Polski?",
          ua: "Яке речення охоплює слов’ян, вірування і назву Польщі?"
        },
        options: [
          { id: "a", label: { pl: "Słowianie to plemiona rolników-pogan (Swaróg, Perun, Świętowit); od Polan wokół Gniezna — Polska", ua: "Слов’яни — племена рільників-поган (Сварог, Перун, Святовит); від полян довкола Гнєзна — Польща" } },
          { id: "b", label: { pl: "Słowianie to tylko templariusze z 1096", ua: "Слов’яни — лише тамплієри з 1096" } },
          { id: "c", label: { pl: "Nazwa Polska pochodzi od Notre Dame z lekcji 26", ua: "Назва Польща походить від Нотр-Дам з уроку 26" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele: plemiona, mitologia, Polanie.",
          ua: "Цілі: племена, міфологія, поляни."
        },
        explanation: {
          pl: "Krucjata = 21. Gotyk = 26.",
          ua: "Круціата = 21. Готика = 26."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Do dziś i legendy", ua: "Донині і легенди" },
      task: {
        id: "h27-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest KN ponadpodstawowe (nie chrzest Mieszka)?",
          ua: "Що є KN понад базове (не хрещення Мешка)?"
        },
        options: [
          { id: "a", label: { pl: "ślady pogańskie do dziś (np. Śmigus-Dyngus, święto przodków) oraz legendy o początku państwa — to opowieści, nie wykopaliska", ua: "поганські сліди донині (напр. обливання водою, свято предків) і легенди про початок держави — це оповіді, не розкопки" } },
          { id: "b", label: { pl: "bitwa pod Cedynią 972 i korona Bolesława — to ta lekcja", ua: "битва під Цедінею 972 і корона Болеслава — це цей урок" } },
          { id: "c", label: { pl: "wszystkie bogowie spoza karty (Weles, Mokosz…) to KN podstawowe do wkuwania", ua: "усі боги поза карткою (Велес, Мокош…) — це KN базове на зубрячку" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: tradycje pogańskie dziś + legendy o początku. Cedynia i 966 = lekcja 28.",
          ua: "KN: поганські традиції сьогодні + легенди про початок. Цедіня і 966 = урок 28."
        },
        explanation: {
          pl: "Lista bogów „dla zainteresowanych” zostaje w filmie. Prokopiusz: Słowianie czcili rzeki i chodzili pieszo z oszczepem — bez kopiowania cytatu.",
          ua: "Список богів «для зацікавлених» лишається у фільмі. Прокопій: слов’яни шанували ріки і йшли пішки зі списом — без копіювання цитати."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h27-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Biskupin, wierzenia, Morawy, Polanie — co jest prawdą?",
          ua: "Біскупін, вірування, Моравія, поляни — що правда?"
        },
        options: [
          { id: "a", label: { pl: "Biskupin = osada warowna; poganie: Swaróg, Perun, Świętowit; Cyryl i Metody — alfabet; Polanie → Polska; łaciński ≠ grecki", ua: "Біскупін = укріплена оселя; погани: Сварог, Перун, Святовит; Кирило і Мефодій — абетка; поляни → Польща; латинський ≠ грецький" } },
          { id: "b", label: { pl: "Biskupin to katedra gotycka; Polanie to templariusze", ua: "Біскупін — готичний собор; поляни — тамплієри" } },
          { id: "c", label: { pl: "Cyryl koronował Ottona w 962", ua: "Кирило коронував Оттона 962 року" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe tej godziny.",
          ua: "KN базове цієї години."
        },
        explanation: {
          pl: "Gotyk = 26. Otton = 19. Templariusze = 21.",
          ua: "Готика = 26. Оттон = 19. Тамплієри = 21."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Z wykopalisk: grody, kurhany, kamienne kręgi. Biskupin to osada warowna starsza niż Słowianie.",
          ["kurhany", "Biskupin"],
          "З розкопок: городища, кургани, кам’яні кола. Біскупін — укріплена оселя старша за слов’ян.",
          ["кургани", "Біскупін"]
        ),
        mark(
          "Słowianie zasiedlili wschodnią, środkową i południową Europę. Poganie: Swaróg, Perun, Świętowit.",
          ["Słowianie", "Swaróg"],
          "Слов’яни заселили східну, середню і південну Європу. Погани: Сварог, Перун, Святовит.",
          ["Слов’яни", "Сварог"]
        ),
        mark(
          "Wielkie Morawy; Cyryl i Metody dali alfabet i liturgię po słowiańsku. W X w. państwa łacińskie i greckie.",
          ["Cyryl i Metody", "X w."],
          "Велика Моравія; Кирило і Мефодій дали абетку і літургію слов’янською. У X ст. держави латинські і грецькі.",
          ["Кирило і Мефодій", "X ст."]
        ),
        mark(
          "Na ziemiach polskich wiele plemion. Najsilniejsi Polanie wokół Gniezna — w X w. początek Polski.",
          ["Polanie", "Gniezna"],
          "На польських землях багато племен. Найсильніші поляни довкола Гнєзна — у X ст. початок Польщі.",
          ["поляни", "Гнєзна"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Mieszko I i początki Polski — chrzest, nie ziemianka.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Мешко I і початки Польщі — хрещення, не землянка.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "8z9JOBt9kwc",
        title: {
          pl: "Krótkie Lekcje: Zanim powstała Polska",
          ua: "Короткі уроки: Перш ніж виникла Польща"
        }
      }
    }
  ]
};
