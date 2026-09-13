function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L04_Skladniki_chemiczne_organizmow/images/";

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
        { pl: "Wymienisz najważniejsze pierwiastki chemiczne w organizmach.", ua: "Назвеш найважливіші хімічні елементи в організмах." },
        { pl: "Wyjaśnisz, jakie znaczenie ma woda.", ua: "Поясниш, яке значення має вода." },
        { pl: "Powiesz, do czego służą sole mineralne — zwłaszcza wapń i magnez.", ua: "Скажеш, для чого служать мінеральні солі — особливо кальцій і магній." },
        { pl: "Porównasz funkcje cukrów, białek i tłuszczów.", ua: "Порівняєш функції цукрів, білків і жирів." },
        { pl: "Powiesz, czym jest DNA i po co organizmowi ta informacja.", ua: "Скажеш, що таке ДНК і навіщо організму ця інформація." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "pierwiastek chemiczny", ua: "хімічний елемент" },
        { pl: "woda", ua: "вода" },
        { pl: "sole mineralne", ua: "мінеральні солі" },
        { pl: "cukry", ua: "цукри" },
        { pl: "białka", ua: "білки" },
        { pl: "tłuszcze", ua: "жири" },
        { pl: "DNA", ua: "ДНК" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l04-zacznijmy.png", {
        alt: { pl: "Przeźroczyste meduzy w wodzie", ua: "Прозорі медузи у воді" },
        title: { pl: "Z czego jesteś zbudowany?", ua: "З чого ти побудований?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Kilka przeźroczystych niebieskich meduz w ciemnej wodzie. W rogu duża czytelna etykieta po polsku: 98% woda. Bez angielskiego, bez logotypów, bez twarzy ludzi." }
      }),
      text: {
        pl: [
          "Spójrz na meduzy. Prawie całe ich ciało to woda — nawet około 98%.",
          "A Ty? Też jesteś zbudowany z substancji chemicznych. Na tej lekcji zobaczysz, z jakich i do czego każda służy."
        ],
        ua: [
          "Подивись на медуз. Майже все їхнє тіло — вода, навіть близько 98%.",
          "А ти? Ти теж побудований із хімічних речовин. На цьому уроці побачиш, з яких і для чого кожна служить."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Pierwiastki w organizmach", ua: "Елементи в організмах" },
      visual: vizGh("l04-pierwiastki.png", {
        alt: { pl: "Sześć najważniejszych pierwiastków organizmu", ua: "Шість найважливіших елементів організму" },
        title: { pl: "Sześć pierwiastków to prawie cała masa ciała.", ua: "Шість елементів — майже вся маса тіла." },
        prompt: { pl: "Edukacyjna plansza 16:9, fotorealistyczne tło (dziecko lub sylwetka, twarz nie w zbliżeniu). Sześć dużych polskich etykiet: węgiel, wodór, tlen, azot, siarka, fosfor. Napis: blisko 98% masy organizmu. Bez wzorów chemicznych, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Żeby zrozumieć organizmy, trzeba wiedzieć, z czego są zbudowane. To związki chemiczne: woda, sole mineralne, cukry, białka, tłuszcze i kwasy nukleinowe. Związki składają się z ", em("pierwiastków chemicznych"), ".",
          "W bardzo dużej ilości występują: ", em("węgiel, wodór, tlen, azot, siarka i fosfor"), ". Razem dają blisko 98% masy organizmu.",
          "Kilkanaście innych pierwiastków, na przykład wapń i magnez, jest mniej. Mimo to są potrzebne do prawidłowej pracy organizmu.",
          "Pierwiastki łączą się w związki chemiczne. Te związki poznamy po kolei."
        ],
        ua: [
          "Щоб зрозуміти організми, треба знати, з чого вони побудовані. Це хімічні сполуки: вода, мінеральні солі, цукри, білки, жири і нуклеїнові кислоти. Сполуки складаються з ", em("хімічних елементів"), ".",
          "У дуже великій кількості є: ", em("вуглець, водень, кисень, азот, сірка і фосфор"), ". Разом дають близько 98% маси організму.",
          "Кільканадцять інших елементів, наприклад кальцій і магній, є менше. Попри це вони потрібні для правильної роботи організму.",
          "Елементи з’єднуються в хімічні сполуки. Ці сполуки пізнаємо по черзі."
        ]
      },
      task: {
        id: "l04-e1",
        type: "multiple-choice",
        question: { pl: "Zaznacz sześć pierwiastków, które razem dają blisko 98% masy organizmu.", ua: "Познач шість елементів, які разом дають близько 98% маси організму." },
        options: [
          { id: "a", label: { pl: "węgiel", ua: "вуглець" } },
          { id: "b", label: { pl: "wodór", ua: "водень" } },
          { id: "c", label: { pl: "tlen", ua: "кисень" } },
          { id: "d", label: { pl: "złoto", ua: "золото" } },
          { id: "e", label: { pl: "azot", ua: "азот" } },
          { id: "f", label: { pl: "siarka", ua: "сірка" } },
          { id: "g", label: { pl: "fosfor", ua: "фосфор" } }
        ],
        answer: ["a", "b", "c", "e", "f", "g"],
        explanation: { pl: "Sześć: węgiel, wodór, tlen, azot, siarka, fosfor. Złoto nie należy do tej szóstki.", ua: "Шість: вуглець, водень, кисень, азот, сірка, фосфор." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Szufladki składników", ua: "Шухлядки складників" },
      visual: tree({
        layout: "nested",
        root: { pl: "składniki organizmów", ua: "складники організмів" },
        groups: [
          {
            title: { pl: "nieorganiczne", ua: "неорганічні" },
            items: [
              { pl: "woda", ua: "вода" },
              { pl: "sole mineralne", ua: "мінеральні солі" }
            ]
          },
          {
            title: { pl: "organiczne", ua: "органічні" },
            items: [
              { pl: "cukry", ua: "цукри" },
              { pl: "białka", ua: "білки" },
              { pl: "tłuszcze", ua: "жири" },
              { pl: "kwasy nukleinowe", ua: "нуклеїнові кислоти" }
            ]
          }
        ]
      }),
      items: [
        { pl: "nieorganiczne: woda, sole mineralne", ua: "неорганічні: вода, мінеральні солі" },
        { pl: "organiczne: cukry, białka, tłuszcze, kwasy nukleinowe (DNA)", ua: "органічні: цукри, білки, жири, нуклеїнові кислоти (ДНК)" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Jakie znaczenie ma woda?", ua: "Яке значення має вода?" },
      visual: vizGh("l04-sklad-czlowieka.png", {
        alt: { pl: "Skład organizmu człowieka w procentach", ua: "Склад організму людини у відсотках" },
        title: { pl: "Woda to główny składnik większości organizmów.", ua: "Вода — головний складник більшості організмів." },
        prompt: { pl: "Edukacyjna infografika 16:9, stylizowana sylwetka człowieka podzielona poziomymi pasami, duże polskie etykiety, bez angielskiego, bez logotypów: 65% woda, 18% białka, 10% tłuszcze, 4% sole mineralne, 1% cukry, 2% kwasy nukleinowe i inne związki. Podpis: Składniki organizmu człowieka." }
      }),
      text: {
        pl: [
          ["", em("Woda"), " to główny składnik większości organizmów. U człowieka to około 65% masy ciała. U meduz — nawet około 98%."],
          "Woda transportuje substancje wewnątrz komórki i między komórkami.",
          "U zwierząt pomaga usuwać zbędne i szkodliwe substancje — na przykład z moczem.",
          "Jest środowiskiem wielu przemian chemicznych. Bierze też udział w niektórych procesach, na przykład w fotosyntezie — szczegóły fotosyntezy poznamy później.",
          "Pomaga regulować temperaturę ciała. U ssaków woda jest głównym składnikiem potu. Parowanie potu ze skóry ochładza organizm."
        ],
        ua: [
          ["", em("Вода"), " — головний складник більшості організмів. У людини це близько 65% маси тіла. У медуз — навіть близько 98%."],
          "Вода транспортує речовини всередині клітини і між клітинами.",
          "У тварин допомагає видаляти зайві і шкідливі речовини — наприклад із сечею.",
          "Є середовищем багатьох хімічних перетворень. Бере також участь у деяких процесах, наприклад у фотосинтезі — подробиці фотосинтезу пізнаємо пізніше.",
          "Допомагає регулювати температуру тіла. У ссавців вода — головний складник поту. Випаровування поту зі шкіри охолоджує організм."
        ]
      },
      task: {
        id: "l04-e2",
        type: "single-choice",
        question: { pl: "Jak woda pomaga ssakom ochłodzić ciało?", ua: "Як вода допомагає ссавцям охолодити тіло?" },
        options: [
          { id: "a", label: { pl: "Parowanie potu ze skóry ochładza organizm.", ua: "Випаровування поту зі шкіри охолоджує організм." } },
          { id: "b", label: { pl: "Woda zamienia się w kości.", ua: "Вода перетворюється на кістки." } },
          { id: "c", label: { pl: "Woda świeci w ciemności.", ua: "Вода світиться в темряві." } }
        ],
        answer: "a",
        explanation: { pl: "Pot jest głównie wodą. Gdy paruje ze skóry, ciało się ochładza.", ua: "Піт — здебільшого вода. Коли випаровується зі шкіри, тіло охолоджується." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Sole mineralne", ua: "Мінеральні солі" },
      visual: vizGh("l04-sole.png", {
        alt: { pl: "Wapń w kościach i magnez w zielonych liściach", ua: "Кальцій у кістках і магній у зеленому листі" },
        title: { pl: "Mało, a bez nich organizm nie działa dobrze.", ua: "Мало, а без них організм погано працює." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9, dwa kadry, polskie etykiety, bez angielskiego, bez logotypów. LEWA: muszla i kości — wapń buduje. PRAWA: makro zielonych liści — magnez w chlorofilu. Jasne światło." }
      }),
      text: {
        pl: [
          ["", em("Sole mineralne"), " dostarczają pierwiastków takich jak fosfor, wapń, żelazo i magnez. Regulują procesy w komórkach."],
          ["", em("Wapń"), " buduje muszle i kości. Gdy zwierzęciu brakuje wapnia, kości mogą być słabsze."],
          ["", em("Magnez"), " wchodzi w skład zielonego barwnika liści (chlorofilu). Ten barwnik pochłania światło potrzebne roślinom do fotosyntezy. Przy braku magnezu liście mogą być blade — mniej zielone."],
          "Pierwiastków z soli jest mniej niż węgla czy tlenu. Mimo to są tak samo ważne."
        ],
        ua: [
          ["", em("Мінеральні солі"), " дають елементи на кшталт фосфору, кальцію, заліза і магнію. Регулюють процеси в клітинах."],
          ["", em("Кальцій"), " будує мушлі і кістки. Коли тварині бракує кальцію, кістки можуть бути слабші."],
          ["", em("Магній"), " входить до зеленого барвника листків (хлорофілу). Цей барвник поглинає світло, потрібне рослинам до фотосинтезу. При браку магнію листки можуть бути бліді — менш зелені."],
          "Елементів із солей менше, ніж вуглецю чи кисню. Попри це вони такі самі важливі."
        ]
      },
      task: {
        id: "l04-e3",
        type: "single-choice",
        question: { pl: "Które połączenie jest poprawne?", ua: "Яке поєднання правильне?" },
        options: [
          { id: "a", label: { pl: "wapń — kości i muszle; magnez — zielony barwnik liści", ua: "кальцій — кістки і мушлі; магній — зелений барвник листків" } },
          { id: "b", label: { pl: "wapń — tylko miód; magnez — tylko pot", ua: "кальцій — лише мед; магній — лише піт" } },
          { id: "c", label: { pl: "sole mineralne nie są organizmowi potrzebne", ua: "мінеральні солі організму не потрібні" } }
        ],
        answer: "a",
        explanation: { pl: "Wapń buduje. Magnez jest w chlorofilu. Sole regulują pracę komórek.", ua: "Кальцій будує. Магній у хлорофілі." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Cukry", ua: "Цукри" },
      visual: vizGh("l04-cukry.png", {
        alt: { pl: "Trzy funkcje cukrów: energia, zapas, budowa", ua: "Три функції цукрів: енергія, запас, будова" },
        title: { pl: "Energia, zapas, budowa.", ua: "Енергія, запас, будова." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9, trzy kadry z polskimi etykietami, bez angielskiego, bez logotypów: 1) pszczoła na plastrze miodu — dostarczają energii, 2) ziemniaki — materiał zapasowy (skrobia), 3) pękająca torebka bawełny — budują organizmy (celuloza). Naturalne światło." }
      }),
      text: {
        pl: [
          ["Główna funkcja ", em("cukrów"), " to dostarczanie energii. Glukoza jest na przykład w miodzie i w winogronach."],
          "Niektóre cukry są materiałem zapasowym. W ziemniakach jest skrobia.",
          "Inne cukry budują organizmy. Celuloza wchodzi w skład ścian komórek roślinnych. Bawełna to prawie czysta celuloza.",
          "Cukier spożywczy otrzymuje się m.in. z łodyg trzciny cukrowej. To przykład, nie przepis kuchenny.",
          "Zapamiętaj trzy funkcje cukrów: energia, zapas, budowa."
        ],
        ua: [
          ["Головна функція ", em("цукрів"), " — давати енергію. Глюкоза є, наприклад, у меді і у винограді."],
          "Деякі цукри є запасним матеріалом. У картоплі є крохмаль.",
          "Інші цукри будують організми. Целюлоза входить до стінок рослинних клітин. Бавовна — майже чиста целюлоза.",
          "Харчовий цукор одержують зокрема зі стебел цукрової тростини. Це приклад, не кулінарний рецепт.",
          "Запам’ятай три функції цукрів: енергія, запас, будова."
        ]
      },
      task: {
        id: "l04-e4",
        type: "single-choice",
        question: { pl: "Skrobia w ziemniaku to przykład cukru, który…", ua: "Крохмаль у картоплі — приклад цукру, який…" },
        options: [
          { id: "a", label: { pl: "jest materiałem zapasowym", ua: "є запасним матеріалом" } },
          { id: "b", label: { pl: "buduje kości ssaków", ua: "будує кістки ссавців" } },
          { id: "c", label: { pl: "zapisuje cechy w DNA", ua: "записує риси в ДНК" } }
        ],
        answer: "a",
        explanation: { pl: "Skrobia to zapas. Kości to wapń i białka. DNA to kwasy nukleinowe.", ua: "Крохмаль — запас. Кістки — кальцій і білки." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Białka i tłuszcze", ua: "Білки і жири" },
      visual: vizGh("l04-bialka-tluszcze.png", {
        alt: { pl: "Funkcje białek i tłuszczów", ua: "Функції білків і жирів" },
        title: { pl: "Białka głównie budują. Tłuszcze dają dużo energii i chronią.", ua: "Білки здебільшого будують. Жири дають багато енергії і захищають." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9, cztery kadry, polskie etykiety, bez angielskiego, bez logotypów, bez zbliżenia na twarze dzieci: 1) szklanka mleka — białka budują, 2) otwarta strączyna grochu — białka jako zapas, 3) foka na lodzie — tłuszcz jako warstwa ochronna, 4) słonecznik z nasionami — tłuszcze jako zapas. Prosty słupek obok: tłuszcze dają około dwa razy więcej energii niż cukry." }
      }),
      text: {
        pl: [
          ["", em("Białka"), " to głównie materiał budulcowy ciała: mięśnie, skóra, nasiona. Mleko jest bogate w białko potrzebne do wzrostu. Białka bywają też zapasem (np. w nasionach grochu) i regulują pracę organizmu."],
          ["", em("Tłuszcze"), " to bogaty materiał zapasowy w nasionach i w tkankach zwierząt. Oliwę otrzymuje się z owoców oliwki."],
          "Tłuszcz pod skórą chroni przed utratą ciepła — tak jak u foki na lodzie. Tłuszcze dostarczają też energii. Z tej samej porcji tłuszcze dają około dwa razy więcej energii niż cukry.",
          "Krótko: cukry — przede wszystkim energia. Białka — przede wszystkim budowa. Tłuszcze — zapas, ochrona i dużo energii."
        ],
        ua: [
          ["", em("Білки"), " — здебільшого будівельний матеріал тіла: м’язи, шкіра, насіння. Молоко багате на білок, потрібний до росту. Білки бувають також запасом (напр. у насінні гороху) і регулюють роботу організму."],
          ["", em("Жири"), " — багатий запасний матеріал у насінні і в тканинах тварин. Олію одержують із плодів оливи."],
          "Жир під шкірою захищає від втрати тепла — як у тюленя на льоду. Жири також дають енергію. З тієї самої порції жири дають близько вдвічі більше енергії, ніж цукри.",
          "Коротко: цукри — передусім енергія. Білки — передусім будова. Жири — запас, захист і багато енергії."
        ]
      },
      task: {
        id: "l04-e5",
        type: "true-false",
        question: { pl: "Tłuszcze dają organizmowi mniej energii niż taka sama porcja cukrów.", ua: "Жири дають організму менше енергії, ніж така сама порція цукрів." },
        answer: false,
        explanation: { pl: "Odwrotnie: tłuszcze dają około dwa razy więcej energii niż cukry.", ua: "Навпаки: жири дають близько вдвічі більше енергії, ніж цукри." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Kwasy nukleinowe i DNA", ua: "Нуклеїнові кислоти і ДНК" },
      visual: vizGh("l04-dna-pingwiny.png", {
        alt: { pl: "Pingwiny cesarskie z pisklętami", ua: "Імператорські пінгвіни з пташенятами" },
        title: { pl: "Informacja z DNA trafia do potomstwa.", ua: "Інформація з ДНК потрапляє до потомства." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Trzy pingwiny cesarskie na śniegu, przy stopach puszyste pisklęta. Bez napisów, bez logotypów, bez angielskiego, bez podwójnej helisy DNA, bez wzorów chemicznych." }
      }),
      text: {
        pl: [
          ["", em("Kwasy nukleinowe"), " to związki chemiczne w komórkach wszystkich organizmów."],
          ["Najważniejszy z nich to ", em("DNA"), ". Zapisana jest w nim informacja o cechach organizmu: kolor kwiatu, barwa piór ptaka, to, jak wyglądasz."],
          "Ta informacja jest przekazywana potomstwu. Pisklę pingwina dostaje od rodziców zapis cech w DNA — dlatego jest podobne do dorosłych.",
          "Dziś nie uczymy się wzoru DNA ani budowy komórki. Zapamiętaj: DNA to zapis cech, który idzie z pokolenia na pokolenie."
        ],
        ua: [
          ["", em("Нуклеїнові кислоти"), " — хімічні сполуки в клітинах усіх організмів."],
          ["Найважливіша з них — ", em("ДНК"), ". У ній записана інформація про риси організму: колір квітки, барва пір’я птаха, те, як ти виглядаєш."],
          "Ця інформація передається потомству. Пташеня пінгвіна дістає від батьків запис рис у ДНК — тому схоже на дорослих.",
          "Сьогодні не вчимо формулу ДНК і не будову клітини. Запам’ятай: ДНК — запис рис, який іде з покоління в покоління."
        ]
      },
      task: {
        id: "l04-e6",
        type: "single-choice",
        question: { pl: "Do czego służy DNA?", ua: "Для чого служить ДНК?" },
        options: [
          { id: "a", label: { pl: "zawiera informację o cechach organizmu i przekazuje ją potomstwu", ua: "містить інформацію про риси організму і передає її потомству" } },
          { id: "b", label: { pl: "ochładza ciało jak pot", ua: "охолоджує тіло як піт" } },
          { id: "c", label: { pl: "buduje muszle z wapnia", ua: "будує мушлі з кальцію" } }
        ],
        answer: "a",
        explanation: { pl: "DNA to zapis cech. Pot to woda. Muszle to wapń.", ua: "ДНК — запис рис. Піт — вода. Мушлі — кальцій." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Pierwiastki", ua: "Практика. Елементи" },
      task: {
        id: "l04-p1",
        type: "single-choice",
        question: { pl: "Które zdanie jest prawdziwe?", ua: "Яке речення правдиве?" },
        options: [
          { id: "a", label: { pl: "Wapń i magnez występują w organizmie w bardzo dużej ilości, większej niż tlen.", ua: "Кальцій і магній є в організмі у дуже великій кількості, більшій ніж кисень." } },
          { id: "b", label: { pl: "Węgiel, wodór, tlen, azot, siarka i fosfor stanowią blisko 98% masy organizmu. Wapń i magnez są w mniejszej ilości, ale też ważne.", ua: "Вуглець, водень, кисень, азот, сірка і фосфор становлять близько 98% маси. Кальцій і магній є в меншій кількості, але теж важливі." } },
          { id: "c", label: { pl: "Organizmy nie zawierają żadnych pierwiastków.", ua: "Організми не містять жодних елементів." } }
        ],
        answer: "b",
        explanation: {
          pl: "Szóstka daje prawie całą masę. Wapń i magnez są „mniej, ale ważne”.",
          ua: "Шістка дає майже всю масу. Кальцій і магній — «менше, але важливі»."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Funkcje wody", ua: "Функції води" },
      task: {
        id: "l04-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe funkcje wody w organizmie.", ua: "Познач усі правдиві функції води в організмі." },
        options: [
          { id: "a", label: { pl: "transportuje substancje", ua: "транспортує речовини" } },
          { id: "b", label: { pl: "pomaga usuwać zbędne substancje (np. z moczem)", ua: "допомагає видаляти зайві речовини (напр. із сечею)" } },
          { id: "c", label: { pl: "zapisuje cechy organizmu jak DNA", ua: "записує риси організму як ДНК" } },
          { id: "d", label: { pl: "pomaga regulować temperaturę ciała (pot u ssaków)", ua: "допомагає регулювати температуру тіла (піт у ссавців)" } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Zapis cech to DNA, nie woda. Woda wozi substancje, pomaga wydalać i chłodzi przez pot.",
          ua: "Запис рис — ДНК, не вода."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Brak wapnia albo magnezu", ua: "Брак кальцію або магнію" },
      task: {
        id: "l04-p3",
        type: "single-choice",
        question: {
          pl: "Co jest najbardziej prawdopodobne przy niedoborze wapnia u zwierzęcia i magnezu u rośliny?",
          ua: "Що найбільш імовірне при нестачі кальцію в тварини і магнію в рослини?"
        },
        options: [
          { id: "a", label: { pl: "słabsze kości u zwierzęcia; blade, mniej zielone liście u rośliny", ua: "слабші кістки в тварини; бліді, менш зелені листки в рослини" } },
          { id: "b", label: { pl: "zwierzę zaczyna fotosyntetyzować; roślina dostaje DNA foki", ua: "тварина починає фотосинтезувати; рослина дістає ДНК тюленя" } },
          { id: "c", label: { pl: "nic się nie zmienia, bo te pierwiastki są zbędne", ua: "нічого не змінюється, бо ці елементи зайві" } }
        ],
        answer: "a",
        explanation: {
          pl: "Wapń buduje kości. Magnez jest w zielonym barwniku liści.",
          ua: "Кальцій будує кістки. Магній у зеленому барвнику листків."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Cukry, białka, tłuszcze", ua: "Цукри, білки, жири" },
      task: {
        id: "l04-p4",
        type: "single-choice",
        question: { pl: "Które połączenie dwóch funkcji jest w całości poprawne?", ua: "Яке поєднання двох функцій повністю правильне?" },
        options: [
          { id: "a", label: { pl: "cukry — tylko budowa kości; białka — tylko pot; tłuszcze — tylko chlorofil", ua: "цукри — лише будова кісток; білки — лише піт; жири — лише хлорофіл" } },
          { id: "b", label: { pl: "cukry — energia i zapas (skrobia); białka — budowa ciała i zapas w nasionach; tłuszcze — zapas oraz ochrona przed utratą ciepła i dużo energii", ua: "цукри — енергія і запас (крохмаль); білки — будова тіла і запас у насінні; жири — запас, захист від втрати тепла і багато енергії" } },
          { id: "c", label: { pl: "wszystkie trzy związki służą tylko do zapisu cech w DNA", ua: "усі три сполуки служать лише для запису рис у ДНК" } }
        ],
        answer: "b",
        explanation: {
          pl: "Cukry: energia, zapas, budowa (celuloza). Białka: budowa, zapas, regulacja. Tłuszcze: zapas, ochrona, energia.",
          ua: "Цукри: енергія, запас, будова. Білки: будова, запас, регуляція. Жири: запас, захист, енергія."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "DNA", ua: "ДНК" },
      task: {
        id: "l04-p5",
        type: "true-false",
        question: { pl: "Informacja o cechach zapisana w DNA jest przekazywana potomstwu.", ua: "Інформація про риси, записана в ДНК, передається потомству." },
        answer: true,
        explanation: {
          pl: "Tak. Dlatego pisklę jest podobne do rodziców. DNA jest w komórkach wszystkich organizmów.",
          ua: "Так. Тому пташеня схоже на батьків."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Pierwiastki", ua: "Перевірка 1. Елементи" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l04-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie pierwiastki z szóstki, która stanowi blisko 98% masy organizmu.", ua: "Познач усі елементи з шістки, яка становить близько 98% маси організму." },
        options: [
          { id: "a", label: { pl: "węgiel", ua: "вуглець" } },
          { id: "b", label: { pl: "wodór", ua: "водень" } },
          { id: "c", label: { pl: "tlen", ua: "кисень" } },
          { id: "d", label: { pl: "azot", ua: "азот" } },
          { id: "e", label: { pl: "siarka", ua: "сірка" } },
          { id: "f", label: { pl: "fosfor", ua: "фосфор" } },
          { id: "g", label: { pl: "plastik", ua: "пластик" } }
        ],
        answer: ["a", "b", "c", "d", "e", "f"],
        explanation: {
          pl: "Węgiel, wodór, tlen, azot, siarka, fosfor. Plastik nie jest pierwiastkiem organizmu.",
          ua: "Вуглець, водень, кисень, азот, сірка, фосфор."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Woda", ua: "Перевірка 2. Вода" },
      task: {
        id: "l04-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania o wodzie.", ua: "Познач усі правдиві речення про воду." },
        options: [
          { id: "a", label: { pl: "Woda to główny składnik większości organizmów.", ua: "Вода — головний складник більшості організмів." } },
          { id: "b", label: { pl: "Transportuje substancje i pomaga usuwać zbędne substancje.", ua: "Транспортує речовини і допомагає видаляти зайві речовини." } },
          { id: "c", label: { pl: "U ssaków parowanie potu ochładza ciało.", ua: "У ссавців випаровування поту охолоджує тіло." } },
          { id: "d", label: { pl: "Woda zapisuje kolor piór w DNA.", ua: "Вода записує колір пір’я в ДНК." } }
        ],
        answer: ["a", "b", "c"],
        explanation: {
          pl: "DNA, nie woda, zapisuje cechy. Woda wozi, pomaga wydalać i reguluje temperaturę.",
          ua: "ДНК, не вода, записує риси."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Sole mineralne", ua: "Перевірка 3. Мінеральні солі" },
      task: {
        id: "l04-s3",
        type: "single-choice",
        question: { pl: "Do czego służą wapń i magnez?", ua: "Для чого служать кальцій і магній?" },
        options: [
          { id: "a", label: { pl: "wapń buduje kości i muszle; magnez jest w zielonym barwniku liści", ua: "кальцій будує кістки і мушлі; магній є в зеленому барвнику листків" } },
          { id: "b", label: { pl: "oba zapisują cechy potomstwu", ua: "обидва записують риси потомству" } },
          { id: "c", label: { pl: "oba dają dwa razy więcej energii niż tłuszcze", ua: "обидва дають удвічі більше енергії, ніж жири" } }
        ],
        answer: "a",
        explanation: {
          pl: "Sole dają też fosfor i żelazo i regulują pracę komórek. Energia to głównie cukry i tłuszcze.",
          ua: "Солі також дають фосфор і залізо і регулюють роботу клітин."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Cukry, białka, tłuszcze", ua: "Перевірка 4. Цукри, білки, жири" },
      task: {
        id: "l04-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Cukry dostarczają energii; skrobia to zapas, celuloza buduje ściany komórek roślinnych.", ua: "Цукри дають енергію; крохмаль — запас, целюлоза будує стінки рослинних клітин." } },
          { id: "b", label: { pl: "Białka to głównie materiał budulcowy; bywają też zapasem i regulują pracę organizmu.", ua: "Білки — здебільшого будівельний матеріал; бувають також запасом і регулюють роботу організму." } },
          { id: "c", label: { pl: "Tłuszcze są zapasem, chronią przed utratą ciepła i dają więcej energii niż cukry.", ua: "Жири є запасом, захищають від втрати тепла і дають більше енергії, ніж цукри." } },
          { id: "d", label: { pl: "Tłuszcze nie występują w nasionach ani u zwierząt.", ua: "Жирів немає в насінні і в тварин." } }
        ],
        answer: ["a", "b", "c"],
        explanation: {
          pl: "Tłuszcze są w nasionach i w tkankach zwierząt. Reszta zdań zgadza się z funkcjami z lekcji.",
          ua: "Жири є в насінні і в тканинах тварин."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. DNA", ua: "Перевірка 5. ДНК" },
      task: {
        id: "l04-s5",
        type: "single-choice",
        question: { pl: "Które zdanie o DNA jest poprawne?", ua: "Яке речення про ДНК правильне?" },
        options: [
          { id: "a", label: { pl: "DNA to kwas nukleinowy w komórkach; zawiera informację o cechach i przekazuje ją potomstwu.", ua: "ДНК — нуклеїнова кислота в клітинах; містить інформацію про риси і передає її потомству." } },
          { id: "b", label: { pl: "DNA to to samo co pot.", ua: "ДНК — те саме, що піт." } },
          { id: "c", label: { pl: "DNA buduje muszle z wapnia.", ua: "ДНК будує мушлі з кальцію." } }
        ],
        answer: "a",
        explanation: {
          pl: "Kwasy nukleinowe, w tym DNA, niosą informację o cechach. Nie myl z wodą ani z solami.",
          ua: "Нуклеїнові кислоти, зокрема ДНК, несуть інформацію про риси."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l04-sklad-czlowieka.png", {
        alt: { pl: "Skład organizmu człowieka", ua: "Склад організму людини" },
        title: { pl: "Woda, sole, cukry, białka, tłuszcze, DNA.", ua: "Вода, солі, цукри, білки, жири, ДНК." },
        prompt: { pl: "Ta sama infografika 16:9 składu organizmu człowieka z polskimi etykietami procentów." }
      }),
      text: {
        pl: [
          "Podstawowe pierwiastki: węgiel, wodór, tlen, azot, siarka, fosfor (blisko 98% masy). Wapń i magnez są w mniejszej ilości, ale ważne.",
          "Woda: transport, usuwanie zbędnych substancji, temperatura ciała (pot u ssaków).",
          "Sole mineralne: budowa (wapń) i regulacja; magnez w zielonym barwniku liści.",
          "Cukry — energia, zapas, budowa. Białka — głównie budowa. Tłuszcze — zapas, ochrona, dużo energii.",
          "DNA to kwas nukleinowy z informacją o cechach, przekazywaną potomstwu."
        ],
        ua: [
          "Основні елементи: вуглець, водень, кисень, азот, сірка, фосфор (близько 98% маси). Кальцій і магній є в меншій кількості, але важливі.",
          "Вода: транспорт, видалення зайвих речовин, температура тіла (піт у ссавців).",
          "Мінеральні солі: будова (кальцій) і регуляція; магній у зеленому барвнику листків.",
          "Цукри — енергія, запас, будова. Білки — здебільшого будова. Жири — запас, захист, багато енергії.",
          "ДНК — нуклеїнова кислота з інформацією про риси, яку передають потомству."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wymienić najważniejsze pierwiastki w organizmach.", ua: "Можу назвати найважливіші елементи в організмах." },
        { pl: "Potrafię wyjaśnić znaczenie wody.", ua: "Можу пояснити значення води." },
        { pl: "Potrafię powiedzieć, do czego służą sole mineralne — wapń i magnez.", ua: "Можу сказати, для чого служать мінеральні солі — кальцій і магній." },
        { pl: "Potrafię porównać funkcje cukrów, białek i tłuszczów.", ua: "Можу порівняти функції цукрів, білків і жирів." },
        { pl: "Potrafię powiedzieć, czym jest DNA i po co organizmowi ta informacja.", ua: "Можу сказати, що таке ДНК і навіщо організму ця інформація." }
      ]
    }
  ]
};
