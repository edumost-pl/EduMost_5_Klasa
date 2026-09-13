function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L22_Korzen/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wymienisz trzy funkcje korzenia.", ua: "Назвеш три функції кореня." },
        { pl: "Odróżnisz system palowy od wiązkowego.", ua: "Відрізниш стрижневу систему від мичкуватої." },
        { pl: "Uporządkujesz strefy korzenia od czubka.", ua: "Упорядкуєш зони кореня від кінчика." },
        { pl: "Wskażesz skórkę, korę i walec osiowy na przekroju.", ua: "Вкажеш шкірку, кору і центральний циліндр на перерізі." },
        { pl: "Podasz przykład korzenia spichrzowego.", ua: "Наведеш приклад запасаючого кореня." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "korzeń", ua: "корінь" },
        { pl: "system palowy", ua: "стрижнева система" },
        { pl: "system wiązkowy", ua: "мичкувата система" },
        { pl: "czepiec", ua: "кореневий чохлик" },
        { pl: "włośniki", ua: "кореневі волоски" },
        { pl: "kora", ua: "кора" },
        { pl: "walec osiowy", ua: "центральний циліндр" },
        { pl: "korzeń spichrzowy", ua: "запасаючий корінь" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l22-zacznijmy.png", {
        alt: { pl: "Roślina z korzeniem w glebie", ua: "Рослина з коренем у ґрунті" },
        title: { pl: "To, czego nie widać nad ziemią, trzyma roślinę i pije za nią.", ua: "Те, чого не видно над землею, тримає рослину і п’є за неї." },
        prompt: { pl: "Fotorealistyczny przekrój 16:9 doniczki z sadzonką. Nad ziemią liście i łodyga bez etykiet-lekcji. Pod ziemią sieć korzeni, etykieta PL: korzeń — organ podziemny. Bez kwiatu, owocu, nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 21 korzeń był organem złożonym z tkanek. Dziś sam organ: po co jest, jak wygląda z zewnątrz i w przekroju.",
          "Łodygi nie rozbieramy — to lekcja 23. Liścia też nie — lekcja 24. Kwiatu, owocu i nasion tu nie ma."
        ],
        ua: [
          "На уроці 21 корінь був органом із тканин. Сьогодні сам орган: навіщо він, як виглядає зовні і в перерізі.",
          "Стебло не розбираємо — урок 23. Листок теж ні — урок 24. Квітки, плоду і насінини тут немає."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Trzy funkcje korzenia", ua: "Три функції кореня" },
      visual: vizGh("l22-funkcje.png", {
        alt: { pl: "Korzeń umacnia, pije i magazynuje", ua: "Корінь закріплює, п’є і запасає" },
        title: { pl: "Umacnia. Pobiera wodę i sole. Czasem trzyma zapas.", ua: "Закріплює. Бере воду і солі. Інколи тримає запас." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 roślina nie wywraca się na wietrze — umocowanie. 2 niebieskie strzałki z gleby do korzenia — woda i sole. 3 przekrój marchewki — zapas. Bez łodygi w przekroju, bez liścia jako tematu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Korzeń"), " to organ podziemny. Ma trzy ważne prace."],
          "Umacnia roślinę w podłożu — bez korzenia wiatr i własny ciężar wywróciłyby pęd.",
          "Pobiera wodę i sole mineralne. Włośniki z lekcji 7 i 21 zwiększają powierzchnię. Woda idzie drewnem w górę (lekcja 21).",
          "U niektórych roślin korzeń magazynuje zapasy — o tym na końcu lekcji."
        ],
        ua: [
          ["", em("Корінь"), " — підземний орган. Має три важливі роботи."],
          "Закріплює рослину в ґрунті — без кореня вітер і власна вага перекинули б пагін.",
          "Бере воду і мінеральні солі. Кореневі волоски з уроків 7 і 21 збільшують поверхню. Вода йде деревиною вгору (урок 21).",
          "У деяких рослин корінь запасає — про це наприкінці уроку."
        ]
      },
      task: {
        id: "l22-e1",
        type: "multiple-choice",
        question: { pl: "Zaznacz funkcje korzenia.", ua: "Познач функції кореня." },
        options: [
          { id: "a", label: { pl: "umocowanie w podłożu", ua: "закріплення в ґрунті" } },
          { id: "b", label: { pl: "pobieranie wody i soli", ua: "вбирання води і солей" } },
          { id: "c", label: { pl: "magazyn zapasów u niektórych gatunków", ua: "запас у деяких видів" } },
          { id: "d", label: { pl: "fotosynteza zamiast liścia", ua: "фотосинтез замість листка" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy prace korzenia. Fotosynteza jest głównie w liściu (L9, L24).", ua: "Три роботи кореня. Фотосинтез здебільшого в листку." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Po co korzeń", ua: "Навіщо корінь" },
      visual: tree({
        layout: "fork",
        root: { pl: "korzeń", ua: "корінь" },
        items: [
          { pl: "umocowanie", ua: "закріплення" },
          { pl: "woda i sole", ua: "вода і солі" },
          { pl: "zapas (nie u wszystkich)", ua: "запас (не в усіх)" }
        ]
      }),
      items: [
        { pl: "umocowanie — roślina nie wywraca się", ua: "закріплення — рослина не перекидається" },
        { pl: "woda i sole — włośniki, potem drewno w górę", ua: "вода і солі — волоски, потім деревина вгору" },
        { pl: "zapas — nie każdy korzeń, np. marchew", ua: "запас — не кожен корінь, напр. морква" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "System palowy i wiązkowy", ua: "Стрижнева і мичкувата система" },
      visual: vizGh("l22-systemy.png", {
        alt: { pl: "Korzeń palowy obok wiązkowego", ua: "Стрижневий корінь поряд із мичкуватим" },
        title: { pl: "Jeden gruby główny albo wiele cienkich. Dwa systemy.", ua: "Один товстий головний або багато тонких. Дві системи." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: marchew / dąb — jeden gruby korzeń główny w głąb, cieńsze boczne, etykieta PL: system palowy. PRAWA: trawa / cebula — pęk cienkich korzeni podobnej grubości, etykieta: system wiązkowy. Bez kwiatów. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("System palowy"), " ma jeden korzeń główny, grubszy i dłuższy. Od niego odchodzą cieńsze korzenie boczne. Tak rosną np. marchew, pietruszka, wiele drzew."],
          ["", em("System wiązkowy"), " to pęk wielu cienkich korzeni podobnej grubości. Tak bywa u traw i cebuli."],
          "Palowy sięga głębiej po wodę. Wiązkowy gęsto oplata wierzchnią warstwę gleby. Żaden z nich nie jest „gorszy” — pasuje do trybu życia rośliny."
        ],
        ua: [
          ["", em("Стрижнева система"), " має один головний корінь, товстіший і довший. Від нього відходять тонші бічні корені. Так ростуть морква, петрушка, багато дерев."],
          ["", em("Мичкувата система"), " — жмут багатьох тонких коренів схожої товщини. Так буває в трав і цибулі."],
          "Стрижнева сягає глибше по воду. Мичкувата густо обплітає верхній шар ґрунту. Жодна не «гірша»."
        ]
      },
      task: {
        id: "l22-e2",
        type: "single-choice",
        question: { pl: "Czym system palowy różni się od wiązkowego?", ua: "Чим стрижнева система відрізняється від мичкуватої?" },
        options: [
          { id: "a", label: { pl: "palowy — jeden korzeń główny i boczne; wiązkowy — wiele cienkich podobnej grubości", ua: "стрижнева — один головний і бічні; мичкувата — багато тонких схожої товщини" } },
          { id: "b", label: { pl: "palowy to grzybnia, wiązkowy to wirus", ua: "стрижнева — грибниця, мичкувата — вірус" } },
          { id: "c", label: { pl: "wiązkowy ma tylko stożek pędu", ua: "мичкувата має лише конус пагона" } }
        ],
        answer: "a",
        explanation: { pl: "Jeden główny vs pęk cienkich. Nie grzyb i nie pęd.", ua: "Один головний проти жмута тонких." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa systemy korzeniowe", ua: "Дві кореневі системи" },
      visual: tree({
        layout: "fork",
        root: { pl: "system korzeniowy", ua: "коренева система" },
        items: [
          { pl: "palowy — korzeń główny", ua: "стрижнева — головний корінь" },
          { pl: "wiązkowy — pęk cienkich", ua: "мичкувата — жмут тонких" }
        ]
      }),
      items: [
        { pl: "palowy — np. marchew, drzewo", ua: "стрижнева — напр. морква, дерево" },
        { pl: "wiązkowy — np. trawa, cebula", ua: "мичкувата — напр. трава, цибуля" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Strefy korzenia", ua: "Зони кореня" },
      visual: vizGh("l22-strefy.png", {
        alt: { pl: "Czubek korzenia z czepcem, stożkiem wzrostu i włośnikami", ua: "Кінчик кореня з чохликом, конусом наростання і волосками" },
        title: { pl: "Od czubka: czepiec, wzrost, włośniki, potem starsza część.", ua: "Від кінчика: чохлик, ріст, волоски, далі старша частина." },
        prompt: { pl: "Edukacyjny schemat 16:9, czubek korzenia w dół. Etykiety PL od dołu: czepiec; stożek wzrostu (tkanka twórcza); strefa włośnikowa; wyżej korzenie boczne / strefa przewodząca. Małe włośniki jak meszek. Bez pełnego przekroju łodygi. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Korzeń rośnie czubkiem. Od czubka w stronę pędu widać kolejne strefy.",
          ["", em("Czepiec"), " — czapeczka z komórek. Osłania delikatny stożek, gdy korzeń przeciska się między ziarnami gleby."],
          ["Tuż za czepcem jest ", em("stożek wzrostu"), " — tkanka twórcza z lekcji 21. Komórki się dzielą, korzeń wydłuża się."],
          ["Dalej ", em("strefa włośnikowa"), ": skórka wypuszcza włośniki. Tu korzeń „pije”. Jeszcze wyżej korzeń jest starszy: tu przewodzenie i korzenie boczne. Nie myl czepca z kapeluszem grzyba."]
        ],
        ua: [
          "Корінь росте кінчиком. Від кінчика до пагона видно зони.",
          ["", em("Чохлик"), " — шапочка з клітин. Захищає ніжний конус, коли корінь протискається між зернами ґрунту."],
          ["Одразу за чохликом ", em("конус наростання"), " — твірна тканина з уроку 21. Клітини діляться, корінь видовжується."],
          ["Далі ", em("зона волосків"), ": шкірка випускає волоски. Тут корінь «п’є». Вище корінь старший: проведення і бічні корені. Не плутати чохлик із шапинкою гриба."]
        ]
      },
      task: {
        id: "l22-e3",
        type: "single-choice",
        question: { pl: "Co jest na samym czubku korzenia?", ua: "Що є на самому кінчику кореня?" },
        options: [
          { id: "a", label: { pl: "czepiec — osłania stożek wzrostu", ua: "чохлик — захищає конус наростання" } },
          { id: "b", label: { pl: "kapelusz i blaszki grzyba", ua: "шапинка і пластинки гриба" } },
          { id: "c", label: { pl: "szparki liścia", ua: "продихи листка" } }
        ],
        answer: "a",
        explanation: { pl: "Czepiec na czubku. Włośniki dalej. Szparki to liść (L24).", ua: "Чохлик на кінчику. Волоски далі." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od czubka w górę", ua: "Від кінчика вгору" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Drabina stref korzenia od czepca", ua: "Драбина зон кореня від чохлика" },
        items: [
          { pl: "czepiec", ua: "чохлик" },
          { pl: "stożek wzrostu", ua: "конус наростання" },
          { pl: "strefa włośnikowa", ua: "зона волосків" },
          { pl: "starsza część (przewodzenie, korzenie boczne)", ua: "старша частина (проведення, бічні корені)" }
        ],
        caption: { pl: "od czubka korzenia w stronę pędu", ua: "від кінчика кореня в бік пагона" }
      }),
      items: [
        { pl: "czepiec — ochrona czubka", ua: "чохлик — захист кінчика" },
        { pl: "stożek wzrostu — podziały komórek (L21)", ua: "конус наростання — поділи клітин (урок 21)" },
        { pl: "włośniki — pobieranie wody i soli", ua: "волоски — вбирання води і солей" }
      ],
      text: {
        pl: [
          "Kolejność od czubka zapamiętaj jak drabinę. Nie uczysz się dziś słojów pnia ani warstw liścia."
        ],
        ua: [
          "Послідовність від кінчика запам’ятай як драбину. Сьогодні не вчиш кілець стовбура і шарів листка."
        ]
      },
      task: {
        id: "l22-e4",
        type: "true-false",
        question: { pl: "Od czubka korzenia kolejność to: czepiec → stożek wzrostu → strefa włośnikowa.", ua: "Від кінчика кореня послідовність: чохлик → конус наростання → зона волосків." },
        answer: true,
        explanation: { pl: "Czepiec osłania. Potem wzrost. Potem włośniki.", ua: "Чохлик захищає. Потім ріст. Потім волоски." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Przekrój korzenia", ua: "Переріз кореня" },
      visual: vizGh("l22-przekroj.png", {
        alt: { pl: "Przekrój korzenia: skórka, kora, walec osiowy", ua: "Переріз кореня: шкірка, кора, центральний циліндр" },
        title: { pl: "Z zewnątrz skórka. Potem kora. W środku walec z rurami.", ua: "Ззовні шкірка. Потім кора. Всередині циліндр із трубами." },
        prompt: { pl: "Edukacyjny przekrój poprzeczny 16:9 młodego korzenia. Etykiety PL od zewnątrz: skórka + włośnik; kora (miękisz); walec osiowy — drewno i łyko. Napis: tkanki z lekcji 21 w organie korzeń. Bez słojów rocznych, bez wiązki łodygi. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na przekroju widać te same tkanki co na lekcji 21, ułożone w trzy kręgi.",
          ["Na zewnątrz ", em("skórka"), " — tkanka okrywająca. W strefie włośnikowej ma włośniki."],
          ["Pod nią ", em("kora"), " — głównie tkanka miękiszowa. Tu bywa zapas."],
          ["W środku ", em("walec osiowy"), " z tkanką przewodzącą: drewno (woda w górę) i łyko (cukry z liści). Jak wiązki ułożone są w łodydze — lekcja 23."]
        ],
        ua: [
          "На перерізі ті самі тканини, що на уроці 21, у трьох колах.",
          ["Ззовні ", em("шкірка"), " — покривна тканина. У зоні волосків має волоски."],
          ["Під нею ", em("кора"), " — здебільшого паренхіма. Тут буває запас."],
          ["Всередині ", em("центральний циліндр"), " з провідною тканиною: деревина (вода вгору) і луб (цукри з листків). Як лежать пучки в стеблі — урок 23."]
        ]
      },
      task: {
        id: "l22-e5",
        type: "single-choice",
        question: { pl: "Co jest w środku przekroju korzenia?", ua: "Що є всередині перерізу кореня?" },
        options: [
          { id: "a", label: { pl: "walec osiowy z drewnem i łykiem", ua: "центральний циліндр із деревиною і лубом" } },
          { id: "b", label: { pl: "tylko kapelusz grzyba", ua: "лише шапинка гриба" } },
          { id: "c", label: { pl: "szparki zamiast skórki", ua: "продихи замість шкірки" } }
        ],
        answer: "a",
        explanation: { pl: "Skórka → kora → walec. Szparki są w skórce liścia, nie w korzeniu.", ua: "Шкірка → кора → циліндр. Продихи в шкірці листка." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy kręgi na przekroju", ua: "Три кола на перерізі" },
      visual: tree({
        layout: "nested",
        root: { pl: "przekrój korzenia", ua: "переріз кореня" },
        groups: [
          {
            title: { pl: "skórka", ua: "шкірка" },
            items: [{ pl: "włośniki", ua: "волоски" }]
          },
          {
            title: { pl: "kora", ua: "кора" },
            items: [{ pl: "miękisz (zapas)", ua: "паренхіма (запас)" }]
          },
          {
            title: { pl: "walec osiowy", ua: "центральний циліндр" },
            items: [
              { pl: "drewno", ua: "деревина" },
              { pl: "łyko", ua: "луб" }
            ]
          }
        ]
      }),
      items: [
        { pl: "skórka — okrywa, włośniki", ua: "шкірка — вкриває, волоски" },
        { pl: "kora — miękisz", ua: "кора — паренхіма" },
        { pl: "walec osiowy — drewno i łyko", ua: "центральний циліндр — деревина і луб" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Korzeń spichrzowy", ua: "Запасаючий корінь" },
      visual: vizGh("l22-spichrzowy.png", {
        alt: { pl: "Marchew, pietruszka i burak — korzenie spichrzowe", ua: "Морква, петрушка і буряк — запасаючі корені" },
        title: { pl: "Zapas w korzeniu. To wciąż korzeń, nie owoc.", ua: "Запас у корені. Це досі корінь, не плід." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9: marchew, pietruszka, burak ćwikłowy na desce, ziemia na skórce. Etykieta PL: korzenie spichrzowe — magazyn. Napis: to organ podziemny, nie owoc. Bez kwiatu i nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Korzeń spichrzowy"), " jest zgrubiały, bo miękisz kory (albo walca) napełnił się zapasem — cukrami, skrobią, wodą."],
          "Przykłady: marchew, pietruszka, burak. Zrywasz jadalną część spod ziemi — to korzeń, nie owoc i nie nasiono.",
          "Nie każdy korzeń tak puchnie. Trawy mają wiązkowy system i nie robią „marchewki”. Mikoryza z lekcji 20 to współpraca z grzybem, nie spichrz."
        ],
        ua: [
          ["", em("Запасаючий корінь"), " потовщений, бо паренхіма кори (або циліндра) наповнилася запасом — цукрами, крохмалем, водою."],
          "Приклади: морква, петрушка, буряк. Зриваєш їстівну частину з-під землі — це корінь, не плід і не насінина.",
          "Не кожен корінь так товстіє. Трави мають мичкувату систему і не роблять «моркви». Мікориза з уроку 20 — співпраця з грибом, не запас."
        ]
      },
      task: {
        id: "l22-e6",
        type: "true-false",
        question: { pl: "Marchew to korzeń spichrzowy — magazyn, nie owoc.", ua: "Морква — запасаючий корінь: запас, не плід." },
        answer: true,
        explanation: { pl: "Zgrubiały korzeń z zapasem. Owoc i nasiono — dużo później w kursie.", ua: "Потовщений корінь із запасом. Плід і насінина — набагато пізніше." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Funkcje", ua: "Практика. Функції" },
      task: {
        id: "l22-p1",
        type: "single-choice",
        question: { pl: "Korzeń przede wszystkim:", ua: "Корінь передусім:" },
        options: [
          { id: "a", label: { pl: "umacnia roślinę oraz pobiera wodę i sole (u niektórych magazynuje zapas)", ua: "закріплює рослину і бере воду та солі (у деяких запасає)" } },
          { id: "b", label: { pl: "zastępuje chloroplasty liścia u wszystkich roślin", ua: "замінює хлоропласти листка в усіх рослин" } },
          { id: "c", label: { pl: "to to samo co owocnik grzyba", ua: "це те саме, що плодове тіло гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Trzy funkcje. Fotosynteza nie jest pracą korzenia.", ua: "Три функції. Фотосинтез — не робота кореня." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Dwa systemy", ua: "Дві системи" },
      task: {
        id: "l22-p2",
        type: "single-choice",
        question: { pl: "Trawa ma zwykle:", ua: "Трава має зазвичай:" },
        options: [
          { id: "a", label: { pl: "system wiązkowy — pęk cienkich korzeni", ua: "мичкувату систему — жмут тонких коренів" } },
          { id: "b", label: { pl: "jeden korzeń palowy jak marchew", ua: "один стрижневий корінь як морква" } },
          { id: "c", label: { pl: "tylko czepiec bez reszty korzenia", ua: "лише чохлик без решти кореня" } }
        ],
        answer: "a",
        explanation: { pl: "Trawy — wiązkowy. Marchew — palowy.", ua: "Трави — мичкувата. Морква — стрижнева." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Strefy", ua: "Зони" },
      task: {
        id: "l22-p3",
        type: "true-false",
        question: { pl: "Czepiec jest na czubku i osłania stożek wzrostu. Włośniki są dalej, nie na samym czubku.", ua: "Чохлик є на кінчику і захищає конус наростання. Волоски далі, не на самому кінчику." },
        answer: true,
        explanation: { pl: "Drabina od czubka: czepiec → wzrost → włośniki.", ua: "Драбина від кінчика: чохлик → ріст → волоски." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Przekrój", ua: "Переріз" },
      task: {
        id: "l22-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz warstwy przekroju korzenia od zewnątrz.", ua: "Познач шари перерізу кореня ззовні." },
        options: [
          { id: "a", label: { pl: "skórka", ua: "шкірка" } },
          { id: "b", label: { pl: "kora", ua: "кора" } },
          { id: "c", label: { pl: "walec osiowy (drewno i łyko)", ua: "центральний циліндр (деревина і луб)" } },
          { id: "d", label: { pl: "blaszki kapelusza", ua: "пластинки шапинки" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy kręgi. Blaszki to grzyb (L20).", ua: "Три кола. Пластинки — гриб." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Spichrz", ua: "Запас" },
      task: {
        id: "l22-p5",
        type: "single-choice",
        question: { pl: "Marchew to:", ua: "Морква — це:" },
        options: [
          { id: "a", label: { pl: "korzeń spichrzowy", ua: "запасаючий корінь" } },
          { id: "b", label: { pl: "owoc", ua: "плід" } },
          { id: "c", label: { pl: "liść z szparkami", ua: "листок із продихами" } }
        ],
        answer: "a",
        explanation: { pl: "Zgrubiały korzeń z zapasem. Nie owoc.", ua: "Потовщений корінь із запасом. Не плід." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Funkcje", ua: "Перевірка 1. Функції" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l22-s1",
        type: "multiple-choice",
        question: { pl: "Które trzy funkcje ma korzeń?", ua: "Які три функції має корінь?" },
        options: [
          { id: "a", label: { pl: "umocowanie", ua: "закріплення" } },
          { id: "b", label: { pl: "pobieranie wody i soli", ua: "вбирання води і солей" } },
          { id: "c", label: { pl: "magazyn zapasów u niektórych roślin", ua: "запас у деяких рослин" } },
          { id: "d", label: { pl: "wymiana gazów szparkami liścia", ua: "обмін газів продихами листка" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy funkcje korzenia. Szparki = liść / tkanka okrywająca pędu.", ua: "Три функції кореня. Продихи = листок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Systemy", ua: "Перевірка 2. Системи" },
      task: {
        id: "l22-s2",
        type: "single-choice",
        question: { pl: "Jak odróżnisz system palowy od wiązkowego?", ua: "Як відрізниш стрижневу систему від мичкуватої?" },
        options: [
          { id: "a", label: { pl: "palowy — korzeń główny i boczne; wiązkowy — pęk cienkich podobnej grubości", ua: "стрижнева — головний і бічні; мичкувата — жмут тонких схожої товщини" } },
          { id: "b", label: { pl: "oba to to samo co czepiec", ua: "обидві — те саме, що чохлик" } },
          { id: "c", label: { pl: "wiązkowy jest tylko u wirusów", ua: "мичкувата є лише у вірусів" } }
        ],
        answer: "a",
        explanation: { pl: "Marchew vs trawa.", ua: "Морква проти трави." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Strefy", ua: "Перевірка 3. Зони" },
      task: {
        id: "l22-s3",
        type: "single-choice",
        question: { pl: "Która kolejność od czubka korzenia jest poprawna?", ua: "Яка послідовність від кінчика кореня правильна?" },
        options: [
          { id: "a", label: { pl: "czepiec → stożek wzrostu → strefa włośnikowa", ua: "чохлик → конус наростання → зона волосків" } },
          { id: "b", label: { pl: "włośniki → kapelusz → czepiec", ua: "волоски → шапинка → чохлик" } },
          { id: "c", label: { pl: "szparki → łyko liścia → czepiec", ua: "продихи → луб листка → чохлик" } }
        ],
        answer: "a",
        explanation: { pl: "Od czubka: ochrona, wzrost, picie.", ua: "Від кінчика: захист, ріст, пиття." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Przekrój", ua: "Перевірка 4. Переріз" },
      task: {
        id: "l22-s4",
        type: "true-false",
        question: { pl: "Na przekroju od zewnątrz: skórka, potem kora, w środku walec osiowy z drewnem i łykiem.", ua: "На перерізі ззовні: шкірка, потім кора, всередині центральний циліндр із деревиною і лубом." },
        answer: true,
        explanation: { pl: "Trzy kręgi. Tkanki z L21 w organie korzeń.", ua: "Три кола. Тканини з уроку 21 в органі корінь." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Spichrz", ua: "Перевірка 5. Запас" },
      task: {
        id: "l22-s5",
        type: "single-choice",
        question: { pl: "Który przykład to korzeń spichrzowy?", ua: "Який приклад — запасаючий корінь?" },
        options: [
          { id: "a", label: { pl: "marchew (albo pietruszka, burak)", ua: "морква (або петрушка, буряк)" } },
          { id: "b", label: { pl: "owocnik borowika", ua: "плодове тіло білого гриба" } },
          { id: "c", label: { pl: "szparka w skórce liścia", ua: "продих у шкірці листка" } }
        ],
        answer: "a",
        explanation: { pl: "Zgrubiały korzeń z zapasem. Nie grzyb i nie liść.", ua: "Потовщений корінь із запасом." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "korzeń", ua: "корінь" },
        items: [
          { pl: "palowy", ua: "стрижневий" },
          { pl: "wiązkowy", ua: "мичкуватий" }
        ],
        caption: { pl: "organ podziemny: umocowanie, woda i sole, czasem zapas", ua: "підземний орган: закріплення, вода і солі, інколи запас" }
      }),
      text: {
        pl: [
          "Korzeń umacnia, pije, czasem magazynuje.",
          "Palowy vs wiązkowy.",
          "Od czubka: czepiec → stożek wzrostu → włośniki.",
          "Przekrój: skórka, kora, walec (drewno i łyko).",
          "Marchew = korzeń spichrzowy.",
          "Łodyga — lekcja 23. Liść — 24."
        ],
        ua: [
          "Корінь закріплює, п’є, інколи запасає.",
          "Стрижнева проти мичкуватої.",
          "Від кінчика: чохлик → конус наростання → волоски.",
          "Переріз: шкірка, кора, циліндр (деревина і луб).",
          "Морква = запасаючий корінь.",
          "Стебло — урок 23. Листок — 24."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wymienić trzy funkcje korzenia.", ua: "Можу назвати три функції кореня." },
        { pl: "Potrafię odróżnić system palowy od wiązkowego.", ua: "Можу відрізнити стрижневу систему від мичкуватої." },
        { pl: "Potrafię uporządkować strefy od czubka.", ua: "Можу впорядкувати зони від кінчика." },
        { pl: "Potrafię wskazać skórkę, korę i walec osiowy.", ua: "Можу вказати шкірку, кору і центральний циліндр." },
        { pl: "Potrafię podać przykład korzenia spichrzowego.", ua: "Можу навести приклад запасаючого кореня." }
      ]
    }
  ]
};
