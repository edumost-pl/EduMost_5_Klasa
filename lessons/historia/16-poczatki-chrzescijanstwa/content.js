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
      heading: { pl: "Początki chrześcijaństwa", ua: "Початки християнства" },
      formula: "33 n.e. · 313 n.e.",
      text: {
        pl: [
          "Z lekcji 15 znasz drogi i prawo. Dziś nowa wiara w tym samym imperium: Palestyna, apostołowie, prześladowania, edykt.",
          "Uczymy się jak historycy klasy 5: miejsca, daty, skutki w państwie. Szanujemy wiarę — nie zdajemy egzaminu z modlitwy. Na osi dwa lata n.e.: 33 i 313."
        ],
        ua: [
          "З уроку 15 знаєш дороги і право. Сьогодні нова віра в тій самій імперії: Палестина, апостоли, переслідування, едикт.",
          "Вчимося як історики 5 класу: місця, дати, наслідки в державі. Шануємо віру — не складаємо іспит із молитви. На осі два роки н.е.: 33 і 313."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, gdzie nauczał Jezus i czym chrześcijaństwo różni się od judaizmu", ua: "сказати, де навчав Ісус і чим християнство відрізняється від юдаїзму" },
        { pl: "scharakteryzować działalność apostołów — zwłaszcza Piotra i Pawła z Tarsu", ua: "схарактеризувати діяльність апостолів — особливо Петра і Павла з Тарса" },
        { pl: "wyjaśnić, czemu władze rzymskie były wrogie wobec chrześcijan", ua: "пояснити, чому римська влада була ворожою до християн" },
        { pl: "podać znaczenie edyktu mediolańskiego (313) i wskazać Palestynę, Jerozolimę, Mediolan", ua: "подати значення Міланського едикту (313) і вказати Палестину, Єрусалим, Мілан" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Palestyna i Jerozolima", ua: "Палестина і Єрусалим" },
      formula: "I w. n.e. · Judea",
      visual: gh("128", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Palestyny z Jerozolimą, Morzem Śródziemnym i Jordanem",
          ua: "Мапа Палестини з Єрусалимом, Середземним морем і Йорданом"
        },
        title: { pl: "Tu zaczyna się opowieść", ua: "Тут починається оповідь" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Wschodni brzeg Morza Śródziemnego: kraina PALESTYNA / JUDEA, rzeka Jordan, kropka JEROZOLIMA, Nazaret małą kropką na północy. Tytuł PL: „Palestyna w I wieku n.e.”. Legenda: „Jerozolima”; „Morze Śródziemne”. BEZ granic dzisiejszych państw, BEZ żołnierzy, BEZ krzyża na Golgocie. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа Палестини: Єрусалим, Йордан, Середземне море. Без сучасних кордонів."
        }
      }),
      text: {
        pl: [
          ["", em("Chrześcijaństwo"), " narodziło się w ", em("Palestynie"), " w I wieku n.e. Tam, w ", em("Jerozolimie"), " i okolicach, nauczał ", em("Jezus z Nazaretu"), "."],
          ["Z lekcji 4 znasz tę ziemię jako krainę Izraela. Nowa religia wyrosła wśród Żydów — ale poszła dalej, do całego imperium."]
        ],
        ua: [
          ["", em("Християнство"), " народилося в ", em("Палестині"), " в I столітті н.е. Там, у ", em("Єрусалимі"), " і околицях, навчав ", em("Ісус з Назарета"), "."],
          ["З уроку 4 знаєш цю землю як край Ізраїля. Нова релігія виросла серед юдеїв — але пішла далі, до всієї імперії."]
        ]
      },
      task: {
        id: "h16-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie narodziło się chrześcijaństwo?",
          ua: "Де народилося християнство?"
        },
        options: [
          { id: "a", label: { pl: "w Palestynie, wokół Jerozolimy", ua: "у Палестині, довкола Єрусалима" } },
          { id: "b", label: { pl: "nad Nilem, w piramidach", ua: "над Нілом, у пірамідах" } },
          { id: "c", label: { pl: "w Atenach za Peryklesa", ua: "в Афінах за Перікла" } }
        ],
        answer: "a",
        hint: {
          pl: "Ta sama kraina co w lekcji 4, inna religia.",
          ua: "Той самий край, що в уроці 4, інша релігія."
        },
        explanation: {
          pl: "KN: wskazać Palestynę i Jerozolimę. Egipt i Ateny to inne działy.",
          ua: "KN: вказати Палестину і Єрусалим. Єгипет і Афіни — інші розділи."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jezus z Nazaretu", ua: "Ісус з Назарета" },
      formula: "Mesjasz · jeden Bóg",
      visual: gh("129", {
        kind: "image-placeholder",
        alt: {
          pl: "Jezus w tunice naucza siedzących uczniów na wzgórzu",
          ua: "Ісус у туніці навчає учнів, що сидять на пагорбі"
        },
        title: { pl: "Nauka, nie bitwa", ua: "Наука, не битва" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień, spokojne światło. Jezus w prostej tunice (biel + czerwony pas) SIEDZI na skale i NAUCZA. Kilkoro uczniów w tunikach siedzi wokół, słucha. Tło: wzgórza Judei, jasne niebo. Podpisy PL: „Jezus z Nazaretu”; „miłość bliźniego”; „jeden Bóg”; „Mesjasz”. BEZ krzyża, BEZ ran, BEZ tłumu-chaosu, BEZ aureoli-filmu. Styl Nowej Ery.",
          ua: "Ісус сидить і навчає учнів на пагорбі. Без хреста і без ран."
        }
      }),
      text: {
        pl: [
          ["", em("Jezus"), " głosił miłość do jedynego Boga i do bliźnich, zapowiadał zbawienie. Uczniowie uznali go za ", em("Mesjasza"), " — obiecanego zbawiciela — i Syna Bożego."],
          ["Judaizm (lekcja 4) też wierzy w jednego Boga. Różnica do zeszytu: chrześcijanie wierzą, że Mesjasz już przyszedł — to Jezus — i że nową wiarę może przyjąć ", em("każdy"), ", nie tylko jeden lud."]
        ],
        ua: [
          ["", em("Ісус"), " звіщав любов до єдиного Бога і до ближніх, обіцяв спасіння. Учні визнали його ", em("Месією"), " — обіцяним спасителем — і Сином Божим."],
          ["Юдаїзм (урок 4) теж вірить в одного Бога. Різниця до зошита: християни вірять, що Месія вже прийшов — це Ісус — і що нову віру може прийняти ", em("кожен"), ", не лише один народ."]
        ]
      },
      task: {
        id: "h16-jez",
        type: "true-false",
        level: "A",
        question: {
          pl: "Chrześcijanie uznali Jezusa za Mesjasza i wierzą, że nową wiarę może przyjąć każdy — prawda czy fałsz?",
          ua: "Християни визнали Ісуса Месією і вірять, що нову віру може прийняти кожен — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Jeden Bóg jak u Żydów. Mesjasz i „każdy” — to nowość.",
          ua: "Один Бог як у юдеїв. Месія і «кожен» — це нове."
        },
        explanation: {
          pl: "Prawda. KN: różnica wobec judaizmu. Nie myl z islamem (lekcja 18).",
          ua: "Правда. KN: відмінність від юдаїзму. Не плутай з ісламом (урок 18)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Apostołowie po roku 33", ua: "Апостоли після року 33" },
      formula: "ok. 33 n.e.",
      timelineYear: 33,
      visual: gh("130", {
        kind: "image-placeholder",
        alt: {
          pl: "Chrzest w rzece oraz apostołowie nauczający w mieście",
          ua: "Хрещення в річці та апостоли, що навчають у місті"
        },
        title: { pl: "Nauka idzie dalej", ua: "Наука йде далі" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie spokojne połówki. LEWA: chrzest — dorosły w tunice stoi po kolana w rzece, drugi kładzie dłoń na głowie, podpis „chrzest”. PRAWA: kilku apostołów w tunikach mówi do małej grupy na dziedzińcu miasta, podpis „głosili naukę Jezusa”. Tytuł: „uczniowie — apostołowie”. BEZ krzyża z ciałem, BEZ grobu-horroru, BEZ krwi. Styl Nowej Ery.",
          ua: "Ліворуч хрещення в річці. Праворуч апостоли навчають. Без розп’яття."
        }
      }),
      text: {
        pl: [
          ["Około ", em("33 roku n.e."), " Jezus został skazany i ukrzyżowany. Chrześcijanie wierzą, że ", em("zmartwychwstał"), "."],
          ["Jego uczniowie — ", em("apostołowie"), " — dalej nauczali, głosili zmartwychwstanie i udzielali ", em("chrztu"), ". To początek Kościoła jako wspólnoty, nie jako budynku."]
        ],
        ua: [
          ["Близько ", em("33 року н.е."), " Ісуса засудили і розіп’яли. Християни вірять, що він ", em("воскрес"), "."],
          ["Його учні — ", em("апостоли"), " — далі навчали, звіщали воскресіння і давали ", em("хрещення"), ". Це початок Церкви як спільноти, не як будівлі."]
        ]
      },
      task: {
        id: "h16-33",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co zrobili apostołowie po śmierci Jezusa (ok. 33 n.e.)?",
          ua: "Що зробили апостоли після смерті Ісуса (бл. 33 н.е.)?"
        },
        options: [
          { id: "a", label: { pl: "kontynuowali nauczanie, głosili zmartwychwstanie, udzielali chrztu", ua: "продовжили навчання, звіщали воскресіння, давали хрещення" } },
          { id: "b", label: { pl: "zbudowali Koloseum i akwedukt", ua: "збудували Колізей і акведук" } },
          { id: "c", label: { pl: "spisali Prawo XII tablic", ua: "записали Закон XII таблиць" } }
        ],
        answer: "a",
        hint: {
          pl: "Na osi nowa data: 33. Nie myl z budowlami z lekcji 15.",
          ua: "На осі нова дата: 33. Не плутай з будівлями з уроку 15."
        },
        explanation: {
          pl: "KN: scharakteryzować działalność apostołów. XII tablic to V w. p.n.e.",
          ua: "KN: схарактеризувати діяльність апостолів. XII таблиць — V ст. до н.е."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Paweł z Tarsu", ua: "Павло з Тарса" },
      formula: "Szaweł → Paweł",
      visual: gh("131", {
        kind: "image-placeholder",
        alt: {
          pl: "Paweł z Tarsu przy pulpicie z zwojem, spokojny portret",
          ua: "Павло з Тарса біля пюпітра зі звоєм, спокійний портрет"
        },
        title: { pl: "Z prześladowcy — apostoł", ua: "З переслідувача — апостол" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Starszy brodaty mężczyzna w czerwonym płaszczu SIEDZI przy pulpicie i pisze na zwoju (typ „Paweł piszący”), spokojne spojrzenie. BEZ konia, BEZ upadku na ziemię, BEZ oślepienia-horroru. Cztery punkty PL: „kto — Paweł z Tarsu (pierwsze imię Szaweł)”; „skąd — Tars, obywatel rzymski”; „lata — I wiek n.e.”; „wsławił się — podróże misyjne, gminy, listy”. Podpis: „święty Paweł z Tarsu”. Styl Nowej Ery.",
          ua: "Павло пише на звої. Пункти: Тарс; І ст.; подорожі і листи. Без коня і падіння."
        }
      }),
      text: {
        pl: [
          ["", em("Szaweł"), " z ", em("Tarsu"), " był wykształcony i miał obywatelstwo rzymskie. Najpierw zwalczał uczniów Jezusa. Potem zmienił życie — przyjął chrzest i imię ", em("Paweł"), "."],
          ["Jako apostoł podróżował po prowincjach, zakładał gminy i pisał listy. Na klasę 5: z prześladowcy stał się nauczycielem nowej wiary."]
        ],
        ua: [
          ["", em("Савл"), " з ", em("Тарса"), " був освічений і мав римське громадянство. Спочатку боровся з учнями Ісуса. Потім змінив життя — прийняв хрещення і ім’я ", em("Павло"), "."],
          ["Як апостол подорожував провінціями, закладав громади і писав листи. Для 5 класу: з переслідувача став учителем нової віри."]
        ]
      },
      task: {
        id: "h16-pawel",
        type: "true-false",
        level: "A",
        question: {
          pl: "Paweł z Tarsu najpierw zwalczał chrześcijan, a potem sam został apostołem — prawda czy fałsz?",
          ua: "Павло з Тарса спочатку боровся з християнами, а потім сам став апостолом — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Dwa imiona: Szaweł, potem Paweł.",
          ua: "Два імені: Савл, потім Павло."
        },
        explanation: {
          pl: "Prawda. Nie myl z Piotrem (Rzym, papież) ani z Konstantynem (313).",
          ua: "Правда. Не плутай з Петром (Рим, папа) і Костянтином (313)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drogi Pawła po cesarstwie", ua: "Дороги Павла імперією" },
      formula: "Tars · Damaszek · Rzym",
      visual: gh("132", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa wschodniego Śródziemnomorza z miastami odwiedzonymi przez Pawła",
          ua: "Мапа східного Середземномор’я з містами, які відвідав Павло"
        },
        title: { pl: "Nauka idzie drogami Rzymu", ua: "Наука йде римськими дорогами" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Wschodnie Morze Śródziemne: Italia, Grecja, Azja Mniejsza, Syria, Palestyna. Kropki z podpisami PL: Rzym, Malta, Filippi, Tesalonika, Korynt, Efez, Tars, Antiochia, Damaszek, Jerozolima. Cienkie pomarańczowe linie-szlaki między nimi, bez armii. Tytuł: „miasta związane z Pawłem”. BEZ bitew, BEZ wraków. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа: Рим, Тарс, Дамаск, Коринф, Єрусалим. Лінії шляхів, без армії."
        }
      }),
      text: {
        pl: [
          ["Paweł nauczał w miastach cesarstwa: od ", em("Damaszku"), " i ", em("Antiochii"), " po ", em("Korynt"), " i ", em("Rzym"), ". Korzystał z dróg, które znasz z lekcji 15."],
          ["Dzięki obywatelstwu rzymskiemu mógł podróżować szerzej niż wielu innych uczniów."]
        ],
        ua: [
          ["Павло навчав у містах імперії: від ", em("Дамаска"), " і ", em("Антіохії"), " до ", em("Коринфа"), " і ", em("Рима"), ". Користався дорогами, які знаєш з уроку 15."],
          ["Завдяки римському громадянству міг подорожувати ширше, ніж багато інших учнів."]
        ]
      },
      task: {
        id: "h16-drogi",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego podróże Pawła mogły objąć tyle miast?",
          ua: "Чому подорожі Павла могли охопити стільки міст?"
        },
        options: [
          { id: "a", label: { pl: "sieć dróg cesarstwa i obywatelstwo rzymskie", ua: "мережа доріг імперії і римське громадянство" } },
          { id: "b", label: { pl: "bo zakazał tego Perykles w Atenach", ua: "бо це заборонив Перікл в Афінах" } },
          { id: "c", label: { pl: "bo Paweł był faraonem Egiptu", ua: "бо Павло був фараоном Єгипту" } }
        ],
        answer: "a",
        hint: {
          pl: "Lekcja 15: drogi. Karta Pawła: obywatel Rzymu.",
          ua: "Урок 15: дороги. Картка Павла: громадянин Риму."
        },
        explanation: {
          pl: "Nowa wiara szła rzymskimi traktami. Perykles i faraon to inne epoki.",
          ua: "Нова віра йшла римськими шляхами. Перікл і фараон — інші епохи."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Nowe gminy chrześcijan", ua: "Нові громади християн" },
      formula: "biskup · wspólna modlitwa",
      visual: gh("133", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojne zgromadzenie w sklepionym wnętrzu: modlitwa, dary, lampa",
          ua: "Спокійні збори в склепінчастому інтер’єрі: молитва, дари, лампа"
        },
        title: { pl: "Wspólnota, nie arena", ua: "Спільнота, не арена" },
        prompt: {
          pl: "Szkolny slajd 16:9, ciepłe światło lampy. Sklepione wnętrze (katakumby / dom), grupa ludzi w tunikach SIEDZI w kręgu: ktoś mówi, ktoś trzyma chleb, kosz z jedzeniem i tkaninami na środku. Podpisy PL: „wspólna modlitwa”; „wsparcie dla potrzebujących”; „na czele — biskup”. Tytuł: „gmina chrześcijańska”. BEZ lwów, BEZ żołnierzy, BEZ egzekucji. Styl Nowej Ery.",
          ua: "Громада в спокійному інтер’єрі: молитва, дари, єпископ. Без арени."
        }
      }),
      text: {
        pl: [
          ["Nową wiarę mógł przyjąć ", em("każdy"), ". Chrześcijanie obiecywali sobie zmartwychwstanie i życie wieczne oraz trzymali się przykazania miłości."],
          ["Powstawały ", em("gminy"), ": na czele ", em("biskupi"), ", wspólna modlitwa, łamanie chleba i wsparcie materialne dla potrzebujących."]
        ],
        ua: [
          ["Нову віру міг прийняти ", em("кожен"), ". Християни обіцяли собі воскресіння і вічне життя та трималися заповіді любові."],
          ["Виникали ", em("громади"), ": на чолі ", em("єпископи"), ", спільна молитва, ламання хліба і матеріальна підтримка потребуючих."]
        ]
      },
      task: {
        id: "h16-gmina",
        type: "true-false",
        level: "A",
        question: {
          pl: "Gminą chrześcijańską kierował biskup, a członkowie modlili się razem i pomagali potrzebującym — prawda czy fałsz?",
          ua: "Громадою християн керував єпископ, а члени молилися разом і допомагали потребуючим — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Trzy słowa z filmu: biskup, modlitwa, wsparcie.",
          ua: "Три слова з фільму: єпископ, молитва, підтримка."
        },
        explanation: {
          pl: "Prawda. To życie pierwszych chrześcijan — nie igrzyska z lekcji 14.",
          ua: "Правда. Це життя перших християн — не ігри з уроку 14."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Piotr — pierwszy biskup Rzymu", ua: "Петро — перший єпископ Рима" },
      formula: "papież",
      visual: gh("134", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojny portret Piotra z kluczem, bez męczeństwa",
          ua: "Спокійний портрет Петра з ключем, без мучеництва"
        },
        title: { pl: "Głowa Kościoła w stolicy", ua: "Голова Церкви в столиці" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne światło. Starszy brodaty mężczyzna w jasnej tunice, spokojny wzrok, w dłoni DUŻY KLUCZ (znak, nie broń). BEZ ukrzyżowania głową w dół, BEZ krwi, BEZ żołnierzy. Cztery punkty PL: „kto — apostoł Piotr”; „skąd — Galilea, uczeń Jezusa”; „lata — I wiek n.e.”; „wsławił się — pierwszy biskup Rzymu, początek tytułu papieża”. Podpis: „święty Piotr”. Styl Nowej Ery.",
          ua: "Петро з ключем. Пункти: учень Ісуса; Галілея; І ст.; перший єпископ Рима."
        }
      }),
      text: {
        pl: [
          ["", em("Piotr"), " był uczniem Jezusa i — według chrześcijan — został wyznaczony na głowę Kościoła. Uznaje się go za ", em("pierwszego biskupa Rzymu"), "."],
          ["Po jego śmierci wybierano następców. Tak powstał tytuł ", em("papieża"), " — zwierzchnika Kościoła z siedzibą w Rzymie."]
        ],
        ua: [
          ["", em("Петро"), " був учнем Ісуса і — за християнами — його призначено головою Церкви. Його вважають ", em("першим єпископом Рима"), "."],
          ["Після його смерті обирали наступників. Так постав титул ", em("папи"), " — предстоятеля Церкви з осідком у Римі."]
        ]
      },
      task: {
        id: "h16-piotr",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kim według chrześcijan był apostoł Piotr?",
          ua: "Ким за християнами був апостол Петро?"
        },
        options: [
          { id: "a", label: { pl: "pierwszym biskupem Rzymu — stąd tytuł papieża", ua: "першим єпископом Рима — звідси титул папи" } },
          { id: "b", label: { pl: "cesarzem, który spisał edykt w 313", ua: "імператором, який записав едикт у 313" } },
          { id: "c", label: { pl: "autorem Eneidy", ua: "автором Енеїди" } }
        ],
        answer: "a",
        hint: {
          pl: "Klucz i Rzym. 313 to Konstantyn. Eneida to Wergiliusz.",
          ua: "Ключ і Рим. 313 — Костянтин. Енеїда — Вергілій."
        },
        explanation: {
          pl: "KN: rola Piotra. Paweł = podróże. Konstantyn = edykt.",
          ua: "KN: роль Петра. Павло = подорожі. Костянтин = едикт."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Dlaczego Rzymianie stali się wrodzy?", ua: "Чому римляни стали ворожими?" },
      formula: "kult cesarza · ryba",
      visual: gh("135", {
        kind: "image-placeholder",
        alt: {
          pl: "Ryba ICHTHYS wyryta w kamieniu z greckimi literami",
          ua: "Риба ІХТІС, вирита в камені з грецькими літерами"
        },
        title: { pl: "Znak zamiast areny", ua: "Знак замість арени" },
        prompt: {
          pl: "Szkolny slajd 16:9. Duże zdjęcie jasnego kamienia z wyrytą prostą RYBĄ i greckimi literami ΙΧΘΥΣ w środku. Pod spodem PL: „Iesus Xristos, Theu Yios, Soter = Jezus Chrystus, Syn Boży, Zbawiciel”. Mała etykieta: „tajny znak pierwszych chrześcijan”. BEZ areny, BEZ lwów, BEZ krzyży z ciałami, BEZ ognia. Styl Nowej Ery.",
          ua: "Камінь із рибою ІХТІС і літерами. Підпис: Ісус Христос, Син Божий, Спаситель. Без арени."
        }
      }),
      text: {
        pl: [
          ["Najpierw Rzymianie byli ", em("obojętni"), ": chrześcijaństwo wyglądało na odłam ", em("judaizmu"), ". Potem — ", em("wrogo"), ": chrześcijanie nie chcieli brać udziału w obrzędach ku czci cesarzy i bogów państwa."],
          ["Szły fałszywe pogłoski i ", em("prześladowania"), ". Wierni rozpoznawali się m.in. znakiem ", em("ryby"), " (ICHTHYS). Na lekcji historii mówimy o przyczynie — nie o scenach kaźni."]
        ],
        ua: [
          ["Спочатку римляни були ", em("байдужі"), ": християнство виглядало як відлам ", em("юдаїзму"), ". Потім — ", em("вороже"), ": християни не хотіли брати участь в обрядах на честь імператорів і богів держави."],
          ["Ішли неправдиві чутки і ", em("переслідування"), ". Віряни впізнавали себе зокрема знаком ", em("риби"), " (ІХТІС). На уроці історії говоримо про причину — не про сцени страти."]
        ]
      },
      task: {
        id: "h16-wrog",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego władze rzymskie zaczęły wrogo traktować chrześcijan?",
          ua: "Чому римська влада почала вороже ставитися до християн?"
        },
        options: [
          { id: "a", label: { pl: "nie uczestniczyli w kulcie cesarza i bogów państwa", ua: "не брали участі в культі імператора і богів держави" } },
          { id: "b", label: { pl: "bo budowali za wysokie akwedukty", ua: "бо будували занадто високі акведуки" } },
          { id: "c", label: { pl: "bo zakazali łaciny w senacie", ua: "бо заборонили латину в сенаті" } }
        ],
        answer: "a",
        hint: {
          pl: "Państwo chciało kultu cesarza. Chrześcijanie — jednego Boga.",
          ua: "Держава хотіла культу імператора. Християни — одного Бога."
        },
        explanation: {
          pl: "KN: wyjaśnić wrogość władz. Najpierw obojętność (odłam judaizmu), potem kult cesarza.",
          ua: "KN: пояснити ворожість влади. Спочатку байдужість (відлам юдаїзму), потім культ імператора."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wiara idzie przez imperium", ua: "Віра йде імперією" },
      formula: "do ok. 300 n.e.",
      visual: gh("136", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa cesarstwa z zasięgiem chrześcijaństwa i ośrodkami misyjnymi",
          ua: "Мапа імперії із поширенням християнства і місійними осередками"
        },
        title: { pl: "Od Jerozolimy ku brzegom morza", ua: "Від Єрусалима до берегів моря" },
        prompt: {
          pl: "Szkolna mapa 16:9 cesarstwa rzymskiego i basenu Śródziemnego. Żółty cień: „zasięg chrześcijaństwa do ok. 300 n.e.” wzdłuż wybrzeży (Italia, Galia, Hiszpania, Afryka, Azja Mniejsza, Syria, Egipt). Pomarańczowe kropki: Rzym, Kartagina, Aleksandria, Jerozolima, Antiochia, Efez — legenda „ośrodek misyjny”. Cienkie strzałki „kierunek ekspansji” z Lewantu na zachód. BEZ armii, BEZ bitew. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа: жовтий засяг до 300 н.е., крапки осередків, стрілки з Леванту на захід."
        }
      }),
      text: {
        pl: [
          ["Do około ", em("300 roku n.e."), " chrześcijaństwo było już przy Morzu Śródziemnym: w miastach Italii, Galii, Hiszpanii, Afryki i Azji Mniejszej."],
          ["Szło drogami i portami. Jeszcze nie było religią państwa — ale nie było też tylko lokalną sektą w Judei."]
        ],
        ua: [
          ["Приблизно до ", em("300 року н.е."), " християнство вже було біля Середземного моря: у містах Італії, Галлії, Іспанії, Африки й Малої Азії."],
          ["Йшло дорогами і портами. Ще не було релігією держави — але вже не було лише місцевою сектою в Юдеї."]
        ]
      },
      task: {
        id: "h16-zasieg",
        type: "true-false",
        level: "B",
        question: {
          pl: "Około 300 n.e. chrześcijaństwo było już znane w wielu prowincjach nad Morzem Śródziemnym — prawda czy fałsz?",
          ua: "Близько 300 н.е. християнство вже було відоме в багатьох провінціях над Середземним морем — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Mapa filmu: cień wzdłuż brzegów, nie tylko Jerozolima.",
          ua: "Мапа фільму: тінь уздовж берегів, не лише Єрусалим."
        },
        explanation: {
          pl: "Prawda. Religią państwa stanie się później — po 313 i pod koniec IV wieku.",
          ua: "Правда. Релігією держави стане пізніше — після 313 і наприкінці IV століття."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Edykt mediolański", ua: "Міланський едикт" },
      formula: "313 n.e. · Mediolan",
      timelineYear: 313,
      visual: gh("137", {
        kind: "image-placeholder",
        alt: {
          pl: "Mapa z Mediolanem oraz pergamin edyktu z datą 313",
          ua: "Мапа з Міланом та пергамент едикту з датою 313"
        },
        title: { pl: "Wolno wyznawać — 313", ua: "Можна сповідувати — 313" },
        prompt: {
          pl: "Szkolny slajd 16:9. LEWA: wycinek mapy północnej Italii, kropka MEDIOLAN, podpis „313 n.e.”. PRAWA: spokojny pergamin / karta z greckim lub łacińskim pismem, pieczęć, duży napis PL „Edykt mediolański — wolno wyznawać religie”. Mała etykieta: „Konstantyn Wielki (lekcja 13)”. BEZ bitwy przy moście, BEZ żołnierzy w ataku, BEZ zdzierania korony. Styl Nowej Ery.",
          ua: "Ліворуч Мілан на мапі. Праворуч пергамент: едикт 313. Костянтин — з уроку 13."
        }
      }),
      text: {
        pl: [
          ["W ", em("313 roku n.e."), " cesarz ", em("Konstantyn Wielki"), " (znam go z lekcji 13) ogłosił w ", em("Mediolanie"), " edykt: wolno wyznawać różne religie. To koniec urzędowych prześladowań chrześcijan."],
          ["Pod koniec ", em("IV wieku n.e."), " cesarz Teodozjusz uczynił chrześcijaństwo główną religią imperium. Na osi zapamiętaj przede wszystkim ", em("313"), "."]
        ],
        ua: [
          ["Року ", em("313 н.е."), " імператор ", em("Костянтин Великий"), " (знаєш з уроку 13) оголосив у ", em("Мілані"), " едикт: можна сповідувати різні релігії. Це кінець урядових переслідувань християн."],
          ["Наприкінці ", em("IV століття н.е."), " імператор Феодосій зробив християнство головною релігією імперії. На осі запам’ятай передусім ", em("313"), "."]
        ]
      },
      task: {
        id: "h16-313",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co ogłosił edykt mediolański w 313 n.e.?",
          ua: "Що оголосив Міланський едикт 313 н.е.?"
        },
        options: [
          { id: "a", label: { pl: "wolno wyznawać religie — koniec urzędowych prześladowań", ua: "можна сповідувати релігії — кінець урядових переслідувань" } },
          { id: "b", label: { pl: "zakaz wszystkich religii oprócz kultu Cezara z 44 p.n.e.", ua: "заборона всіх релігій крім культу Цезаря з 44 до н.е." } },
          { id: "c", label: { pl: "budowę Panteonu w 125 n.e.", ua: "будівництво Пантеону в 125 н.е." } }
        ],
        answer: "a",
        hint: {
          pl: "Miasto Mediolan. Cesarz z lekcji 13. Rok na osi.",
          ua: "Місто Мілан. Імператор з уроку 13. Рік на осі."
        },
        explanation: {
          pl: "KN: znaczenie edyktu i mapa Mediolanu. Panteon to lekcja 15. Główna religia państwa — dopiero koniec IV w.",
          ua: "KN: значення едикту і мапа Мілана. Пантеон — урок 15. Головна релігія держави — лише кінець IV ст."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Biblia", ua: "Біблія" },
      formula: "Stary i Nowy Testament",
      visual: gh("138", {
        kind: "image-placeholder",
        alt: {
          pl: "Otwarta księga Biblii z etykietami Stary i Nowy Testament",
          ua: "Відкрита книга Біблії з етикетками Старий і Новий Завіт"
        },
        title: { pl: "Święta księga w dwóch częściach", ua: "Свята книга в двох частинах" },
        prompt: {
          pl: "Szkolny slajd 16:9. Otwarta duża księga na pulpicie, ciepłe światło na kartach, BEZ ognia-cudu. Nad książką tytuł „Biblia”. Dwie etykiety PL na stronach: „Stary Testament — teksty sprzed narodzenia Jezusa”; „Nowy Testament — życie Jezusa, dzieje apostołów, Ewangelie”. Mała linia: „święta księga chrześcijan”. BEZ scen Sądu Ostatecznego, BEZ gore. Styl Nowej Ery.",
          ua: "Відкрита Біблія. Ліворуч Старий Завіт, праворуч Новий (Євангелія, апостоли)."
        }
      }),
      text: {
        pl: [
          ["", em("Biblia"), " to święta księga chrześcijan. Składa się z ", em("Starego Testamentu"), " (teksty sprzed narodzenia Jezusa, wspólne korzenie z judaizmem) i ", em("Nowego Testamentu"), "."],
          ["Nowy Testament opowiada o życiu Jezusa, dziejach apostołów i zawiera ", em("Ewangelie"), ". Księgę tłumaczono na wiele języków — stąd znasz ją i po polsku, i po ukraińsku."]
        ],
        ua: [
          ["", em("Біблія"), " — свята книга християн. Складається зі ", em("Старого Завіту"), " (тексти до народження Ісуса, спільне коріння з юдаїзмом) і ", em("Нового Завіту"), "."],
          ["Новий Завіт розповідає про життя Ісуса, діла апостолів і містить ", em("Євангелія"), ". Книгу перекладали багатьма мовами — тому знаєш її і польською, і українською."]
        ]
      },
      task: {
        id: "h16-biblia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Z jakich dwóch części składa się Biblia chrześcijan?",
          ua: "З яких двох частин складається Біблія християн?"
        },
        options: [
          { id: "a", label: { pl: "Stary Testament i Nowy Testament (m.in. Ewangelie)", ua: "Старий Завіт і Новий Завіт (зокрема Євангелія)" } },
          { id: "b", label: { pl: "tylko Kodeks Justyniana i Prawo XII tablic", ua: "лише Кодекс Юстиніана і Закон XII таблиць" } },
          { id: "c", label: { pl: "Iliada i Eneida", ua: "Іліада і Енеїда" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie części. Ewangelie są w Nowym Testamencie.",
          ua: "Дві частини. Євангелія — у Новому Завіті."
        },
        explanation: {
          pl: "KN: Biblia, Ewangelie. Homery i prawo rzymskie to inne lekcje.",
          ua: "KN: Біблія, Євангелія. Гомер і римське право — інші уроки."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Mesjasz — obiecany zbawiciel; dla chrześcijan to Jezus", ua: "Месія — обіцяний спаситель; для християн це Ісус" },
        { pl: "apostołowie — uczniowie Jezusa, którzy ponieśli naukę dalej", ua: "апостоли — учні Ісуса, які понесли науку далі" },
        { pl: "biskup / papież — zwierzchnik gminy / następca Piotra w Rzymie", ua: "єпископ / папа — предстоятель громади / наступник Петра в Римі" },
        { pl: "gmina — wspólnota: modlitwa, chrzest, pomoc potrzebującym", ua: "громада — спільнота: молитва, хрещення, допомога потребуючим" },
        { pl: "ICHTHYS — ryba, tajny znak: Jezus Chrystus, Syn Boży, Zbawiciel", ua: "ІХТІС — риба, таємний знак: Ісус Христос, Син Божий, Спаситель" },
        { pl: "Edykt mediolański — 313 n.e., wolność religii (Konstantyn)", ua: "Міланський едикт — 313 н.е., свобода релігії (Костянтин)" },
        { pl: "Biblia — Stary i Nowy Testament; Ewangelie w Nowym", ua: "Біблія — Старий і Новий Завіт; Євангелія в Новому" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Jezus nauczał w Atenach za Peryklesa. W 753 n.e. Szaweł spisał edykt mediolański. Piotr był faraonem, a Biblia to tylko Eneida Wergiliusza.”",
        ua: "«Ісус навчав в Афінах за Перікла. Року 753 н.е. Савл записав Міланський едикт. Петро був фараоном, а Біблія — лише Енеїда Вергілія.»"
      },
      text: {
        pl: [
          "Jezus: Palestyna, I w. n.e. Edykt: 313, Konstantyn w Mediolanie — nie Szaweł i nie 753 (to p.n.e., Rzym). Piotr = pierwszy biskup Rzymu. Biblia = Stary i Nowy Testament. Eneida to lekcja 15."
        ],
        ua: [
          "Ісус: Палестина, I ст. н.е. Едикт: 313, Костянтин у Мілані — не Савл і не 753 (це до н.е., Рим). Петро = перший єпископ Рима. Біблія = Старий і Новий Завіт. Енеїда — урок 15."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, czym żyli pierwsi chrześcijanie i czemu spotkały ich prześladowania. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, чим жили перші християни і чому їх переслідували. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: gmina, biskup, modlitwa, pomoc; obojętność, potem kult cesarza. Bez opowieści o igrzyskach."
        ],
        ua: [
          "Підказка: громада, єпископ, молитва, допомога; байдужість, потім культ імператора. Без оповіді про ігри."
        ]
      },
      task: {
        id: "h16-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje życie pierwszych chrześcijan i przyczynę prześladowań?",
          ua: "Яке речення найкраще охоплює життя перших християн і причину переслідувань?"
        },
        options: [
          { id: "a", label: { pl: "Żyli we wspólnotach z biskupem, modlitwą i pomocą potrzebującym; władze stały się wrogie, bo chrześcijanie nie czcili cesarza jako boga", ua: "Жили у спільнотах з єпископом, молитвою і допомогою потребуючим; влада стала ворожою, бо християни не шанували імператора як бога" } },
          { id: "b", label: { pl: "Budowali tylko Koloseum i odmawiali chrztu", ua: "Будували лише Колізей і відмовлялися від хрещення" } },
          { id: "c", label: { pl: "Byli kapłanami Zeusa na Akropolu", ua: "Були жерцями Зевса на Акрополі" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: życie gmin i wrogość władz. Nie Grecja z lekcji 9.",
          ua: "KN: життя громад і ворожість влади. Не Греція з уроку 9."
        },
        explanation: {
          pl: "Koloseum to igrzyska. Zeus to inna religia. Tu: gmina + kult cesarza.",
          ua: "Колізей — ігри. Зевс — інша релігія. Тут: громада + культ імператора."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Symbol i korzenie", ua: "Символ і коріння" },
      task: {
        id: "h16-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe: najstarszy znak chrześcijan oraz związek z judaizmem — co jest prawdą?",
          ua: "KN понадбазове: найдавніший знак християн і зв’язок з юдаїзмом — що є правдою?"
        },
        options: [
          { id: "a", label: { pl: "znak ryby (ICHTHYS); chrześcijaństwo wyrosło wśród Żydów, którzy wierzą w jednego Boga", ua: "знак риби (ІХТІС); християнство виросло серед юдеїв, які вірять в одного Бога" } },
          { id: "b", label: { pl: "znak kolumny Trajana; religia powstała w Sparcie ku czci Zeusa", ua: "знак колони Траяна; релігія постала в Спарті на честь Зевса" } },
          { id: "c", label: { pl: "znak kamienia milowego; Biblia to tylko Kodeks Hammurabiego", ua: "знак мільного каменя; Біблія — лише Кодекс Хаммурапі" } }
        ],
        answer: "a",
        hint: {
          pl: "Kamień z rybą. Lekcja 4: jeden Bóg Izraela.",
          ua: "Камінь із рибою. Урок 4: один Бог Ізраїля."
        },
        explanation: {
          pl: "Piotr i Paweł to święci tej lekcji (karty). Historii Meksyku XX w. tu nie mieszamy. Trajan i Hammurabi — inne tematy.",
          ua: "Петро і Павло — святі цього уроку (картки). Історію Мексики XX ст. сюди не мішаємо. Траян і Хаммурапі — інші теми."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h16-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 33 n.e. · Piotr i Paweł · 313 n.e.",
          ua: "Добери: 33 н.е. · Петро і Павло · 313 н.е."
        },
        options: [
          { id: "a", label: { pl: "33 — śmierć Jezusa i początek misji apostołów; Piotr i Paweł — kluczowi apostołowie; 313 — edykt mediolański Konstantyna", ua: "33 — смерть Ісуса і початок місії апостолів; Петро і Павло — ключові апостоли; 313 — Міланський едикт Костянтина" } },
          { id: "b", label: { pl: "33 — upadek Rzymu; Piotr — Justynian; 313 — Wezuwiusz", ua: "33 — падіння Рима; Петро — Юстиніан; 313 — Везувій" } },
          { id: "c", label: { pl: "33 — Prawo XII tablic; Paweł — Horacy; 313 — 753 p.n.e.", ua: "33 — Закон XII таблиць; Павло — Горацій; 313 — 753 до н.е." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty z osi tej lekcji i dwie karty postaci.",
          ua: "Дві дати з осі цього уроку і дві картки постатей."
        },
        explanation: {
          pl: "476 = upadek Zachodu. 79 = Pompeje. XII tablic = V w. p.n.e. To KN.",
          ua: "476 = падіння Заходу. 79 = Помпеї. XII таблиць = V ст. до н.е. Це KN."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Chrześcijaństwo narodziło się w Palestynie w I wieku n.e. Początek dały nauki Jezusa z Nazaretu. Wyznawcy uznali go za Mesjasza i Syna Bożego; wierzą, że zmartwychwstał.",
          ["Palestynie", "Jezusa z Nazaretu", "Mesjasza"],
          "Християнство народилося в Палестині в I столітті н.е. Початок дали науки Ісуса з Назарета. Послідовники визнали його Месією і Сином Божим; вірять, що він воскрес.",
          ["Палестині", "Ісуса з Назарета", "Месією"]
        ),
        mark(
          "Po śmierci Jezusa około 33 n.e. naukę głosili apostołowie. Szczególną rolę odegrali Piotr (pierwszy biskup Rzymu, początek tytułu papieża) i Paweł z Tarsu (podróże, gminy).",
          ["33 n.e.", "Piotr", "Paweł z Tarsu"],
          "Після смерті Ісуса близько 33 н.е. науку звіщали апостоли. Особливу роль відіграли Петро (перший єпископ Рима, початок титулу папи) і Павло з Тарса (подорожі, громади).",
          ["33 н.е.", "Петро", "Павло з Тарса"]
        ),
        mark(
          "Chrześcijan prześladowano w cesarstwie, bo nie czcili cesarza. W 313 n.e. edykt mediolański Konstantyna zezwolił na swobodne wyznawanie religii. Pod koniec IV w. n.e. chrześcijaństwo stało się główną religią imperium.",
          ["313 n.e.", "edykt mediolański", "IV w. n.e."],
          "Християн переслідували в імперії, бо не шанували імператора. Року 313 н.е. Міланський едикт Костянтина дозволив вільно сповідувати релігії. Наприкінці IV ст. н.е. християнство стало головною релігією імперії.",
          ["313 н.е.", "Міланський едикт", "IV ст. н.е."]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Bizancjum — cesarstwo wschodnie, które trwało, gdy Zachód już upadł.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Візантія — східна імперія, яка тривала, коли Захід уже впав.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "eY-fD_rVm2w",
        title: {
          pl: "Krótkie Lekcje: Początki chrześcijaństwa",
          ua: "Короткі уроки: Початки християнства"
        }
      }
    }
  ]
};
