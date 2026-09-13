function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L03_Obserwacje_mikroskopowe/images/";

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
        { pl: "Wskażesz części mikroskopu optycznego i powiesz, do czego służą.", ua: "Вкажеш частини оптичного мікроскопа і скажеш, для чого вони." },
        { pl: "Powiesz, jak przygotować preparat mikroskopowy.", ua: "Скажеш, як приготувати мікроскопічний препарат." },
        { pl: "Uporządkujesz zasady obserwacji pod mikroskopem.", ua: "Упорядкуєш правила спостереження під мікроскопом." },
        { pl: "Obliczysz powiększenie obrazu w mikroskopie optycznym.", ua: "Обчислиш збільшення зображення в оптичному мікроскопі." },
        { pl: "Podasz przykłady obiektów do obserwacji i krótko powiesz, czym różni się mikroskop elektronowy.", ua: "Назвеш приклади об’єктів для спостереження і коротко скажеш, чим відрізняється електронний мікроскоп." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "mikroskop optyczny", ua: "оптичний мікроскоп" },
        { pl: "okular", ua: "окуляр" },
        { pl: "obiektyw", ua: "об’єктив" },
        { pl: "preparat mikroskopowy", ua: "мікроскопічний препарат" },
        { pl: "szkiełko podstawowe", ua: "предметне скло" },
        { pl: "szkiełko nakrywkowe", ua: "накривне скельце" },
        { pl: "powiększenie", ua: "збільшення" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l03-zacznijmy.png", {
        alt: { pl: "Kropla wody z sadzawki na szkiełku", ua: "Крапля води зі ставка на скельці" },
        title: { pl: "Czy w tej kropli coś żyje?", ua: "Чи в цій краплі щось живе?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia, nie rysunek. Na jasnym stole szkiełko podstawowe z dużą kroplą przezroczystej wody ze stawu; w tle rozmyte zielone liście i lupa. Bez napisów, bez logotypów, bez twarzy, bez angielskiego, bez komórek w zbliżeniu." }
      }),
      text: {
        pl: [
          "Lornetką oglądasz ptaki. Lupą — kwiat albo owad. A co jest w kropli wody ze stawu?",
          "Gołym okiem prawie nic. Na tej lekcji zobaczysz, jakim przyrządem biolodzy zaglądają do świata, którego nie widać bez pomocy."
        ],
        ua: [
          "Біноклем розглядаєш птахів. Лупою — квітку або комаху. А що є в краплі води зі ставка?",
          "Неозброєним оком майже нічого. На цьому уроці побачиш, яким приладом біологи заглядають у світ, якого не видно без допомоги."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Mikroskop optyczny", ua: "Оптичний мікроскоп" },
      visual: vizGh("l03-obserwacja.png", {
        alt: { pl: "Uczeń przy mikroskopie optycznym", ua: "Учень біля оптичного мікроскопа" },
        title: { pl: "Przyrząd, który powiększa to, czego nie widać okiem.", ua: "Прилад, який збільшує те, чого не видно оком." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Uczeń ok. 11 lat w jasnej sali szkolnej patrzy w biały mikroskop optyczny, dłoń na śrubie ostrości; twarz częściowo zasłonięta okularem lub ujęcie z boku, bez zbliżenia. Na stoliku szkiełko. Bez napisów, bez logotypów, bez angielskiego." }
      }),
      text: {
        pl: [
          ["", em("Mikroskop optyczny"), " to przyrząd, który powiększa obraz drobnych obiektów za pomocą soczewek i światła."],
          "Lupa powiększa kilka lub kilkanaście razy. Mikroskop optyczny potrafi powiększyć obraz nawet około tysiąca razy. Dzięki temu widać tkanki i pojedyncze komórki.",
          "Niektóre mikroskopy zamiast lampy mają ", em("lusterko"), ". Ono nie świeci samo. Odbija światło z okna albo z lampy w sali i kieruje je na preparat. Gdy mikroskop ma własne źródło światła, lusterko nie jest potrzebne.",
          "Dziś zapamiętaj: mikroskop optyczny służy do oglądania bardzo małych obiektów w świetle. Jak jest zbudowany — na następnym ekranie."
        ],
        ua: [
          ["", em("Оптичний мікроскоп"), " — прилад, який збільшує зображення дрібних об’єктів за допомогою лінз і світла."],
          "Лупа збільшує кілька або кільканадцять разів. Оптичний мікроскоп може збільшити зображення навіть близько тисячі разів. Завдяки цьому видно тканини і окремі клітини.",
          "Деякі мікроскопи замість лампи мають ", em("дзеркало"), ". Воно саме не світить. Відбиває світло з вікна або з лампи в класі і спрямовує його на препарат. Коли мікроскоп має власне джерело світла, дзеркало не потрібне.",
          "Сьогодні запам’ятай: оптичний мікроскоп служить для розглядання дуже малих об’єктів у світлі. Як він побудований — на наступному екрані."
        ]
      },
      task: {
        id: "l03-e1",
        type: "single-choice",
        question: { pl: "Do czego służy mikroskop optyczny?", ua: "Для чого служить оптичний мікроскоп?" },
        options: [
          { id: "a", label: { pl: "do oglądania ptaków na dachu", ua: "щоб розглядати птахів на даху" } },
          { id: "b", label: { pl: "do powiększania obrazu bardzo drobnych obiektów, na przykład komórek", ua: "щоб збільшувати зображення дуже дрібних об’єктів, наприклад клітин" } },
          { id: "c", label: { pl: "do gotowania wody", ua: "щоб кип’ятити воду" } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Lornetka jest do ptaków. Mikroskop optyczny powiększa to, czego nie widać gołym okiem — na przykład komórki.", ua: "Так. Бінокль — для птахів. Оптичний мікроскоп збільшує те, чого не видно неозброєним оком." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Części mikroskopu optycznego", ua: "Частини оптичного мікроскопа" },
      visual: vizGh("l03-mikroskop-czesci.png", {
        alt: { pl: "Mikroskop optyczny z polskimi etykietami części", ua: "Оптичний мікроскоп з польськими етикетками частин" },
        title: { pl: "Każda część ma swoje zadanie.", ua: "Кожна частина має своє завдання." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 szkolnego mikroskopu optycznego jak prawdziwa fotografia, nie rysunek. Czyste jasne tło. Duże czytelne polskie etykiety ze strzałkami, bez angielskiego, bez logotypów: okular, tubus, rewolwer, obiektyw, stolik, źródło światła, śruba makrometryczna, śruba mikrometryczna. Etykiety nie zasłaniają części." }
      }),
      text: {
        pl: [
          "Żeby korzystać z mikroskopu, musisz znać jego części.",
          ["", em("Okular"), " — tu zaglądasz okiem. Powiększa obraz, który już utworzył obiektyw."],
          ["", em("Tubus"), " — rura, w której osadzony jest okular."],
          ["", em("Rewolwer"), " — obrotowa tarcza. Dzięki niej zmieniasz obiektyw na inny, o innym powiększeniu."],
          ["", em("Obiektyw"), " — soczewka tuż nad preparatem. To ona najpierw powiększa obraz oglądanego obiektu."],
          ["", em("Stolik"), " — półka, na której kładziesz szkiełko z preparatem."],
          ["", em("Źródło światła"), " — lampa (albo lusterko), która oświetla obiekt."],
          ["", em("Śruba makrometryczna"), " — duża. Służy do wstępnego ustawienia ostrości. ", em("Śruba mikrometryczna"), " — mniejsza. Służy do precyzyjnego, drobnego ustawienia ostrości."]
        ],
        ua: [
          "Щоб користуватися мікроскопом, треба знати його частини.",
          ["", em("Окуляр"), " — сюди дивишся оком. Збільшує зображення, яке вже утворив об’єктив."],
          ["", em("Тубус"), " — труба, в якій закріплений окуляр."],
          ["", em("Револьвер"), " — поворотний диск. Завдяки ньому змінюєш об’єктив на інший, з іншим збільшенням."],
          ["", em("Об’єктив"), " — лінза над препаратом. Саме вона спочатку збільшує зображення об’єкта."],
          ["", em("Столик"), " — полиця, на яку кладеш скельце з препаратом."],
          ["", em("Джерело світла"), " — лампа (або дзеркало), яка освітлює об’єкт."],
          ["", em("Макрометричний гвинт"), " — великий. Служить для попереднього наведення різкості. ", em("Мікрометричний гвинт"), " — менший. Служить для точного, дрібного наведення різкості."]
        ]
      },
      task: {
        id: "l03-e2",
        type: "single-choice",
        question: { pl: "Która część pozwala zmienić obiektyw?", ua: "Яка частина дозволяє змінити об’єктив?" },
        options: [
          { id: "a", label: { pl: "stolik", ua: "столик" } },
          { id: "b", label: { pl: "rewolwer", ua: "револьвер" } },
          { id: "c", label: { pl: "okular", ua: "окуляр" } }
        ],
        answer: "b",
        explanation: { pl: "Rewolwer to obrotowa tarcza z obiektywami. Stolik trzyma preparat. Okular jest przy oku.", ua: "Револьвер — поворотний диск з об’єктивами." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak wykonać preparat mikroskopowy?", ua: "Як зробити мікроскопічний препарат?" },
      visual: vizGh("l03-preparat-cebula.png", {
        alt: { pl: "Przygotowanie preparatu ze skórki cebuli", ua: "Приготування препарату зі шкірки цибулі" },
        title: { pl: "Kropla wody, skórka, szkiełko nakrywkowe.", ua: "Крапля води, шкірка, накривне скельце." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9, pięć kadrów jak prawdziwe zdjęcia, nie kreskówka. Duże polskie etykiety 1–5, bez angielskiego, bez logotypów: 1) zakraplacz kładzie kroplę wody na szkiełku podstawowym, 2) pęseta i igła preparacyjna zdejmują cienką skórkę z łuski cebuli, 3) skórka w kropli, 4) szkiełko nakrywkowe opuszczane pod kątem, 5) gotowy preparat. Obok widoczne: pęseta, zakraplacz, igła, zlewka z wodą, pudełko szkiełek nakrywkowych. Bez twarzy." }
      }),
      text: {
        pl: [
          ["Żeby coś obejrzeć pod mikroskopem, najpierw robisz ", em("preparat mikroskopowy"), "."],
          ["Potrzebujesz: ", em("szkiełka podstawowego"), " (dłuższe), ", em("szkiełka nakrywkowego"), " (małe, cienkie), zakraplacza, pęsety, igły preparacyjnej i wody."],
          "Przykład: skórka z liścia cebuli.",
          "1. Na środek szkiełka podstawowego kładziesz dużą kroplę wody.",
          "2. Z mięsistej łuski cebuli zdejmujesz pęsetą i igłą cienką, przezroczystą skórkę.",
          "3. Kładziesz skórkę w kropli.",
          "4. Szkiełko nakrywkowe opuszczasz powoli, pod kątem, żeby pod spodem było jak najmniej pęcherzyków powietrza.",
          "5. Preparat jest gotowy. Można go położyć na stoliku mikroskopu.",
          "Ostrożność: szkło jest cienkie i ostro się łamie. Nie ściskaj szkiełka palcami na siłę."
        ],
        ua: [
          ["Щоб щось розглянути під мікроскопом, спочатку робиш ", em("мікроскопічний препарат"), "."],
          ["Потрібні: ", em("предметне скло"), " (довше), ", em("накривне скельце"), " (маленьке, тонке), піпетка, пінцет, препарувальна голка і вода."],
          "Приклад: шкірка з листка цибулі.",
          "1. На середину предметного скла кладеш велику краплю води.",
          "2. З м’ясистої луски цибулі пінцетом і голкою знімаєш тонку прозору шкірку.",
          "3. Кладеш шкірку в краплю.",
          "4. Накривне скельце опускаєш повільно, під кутом, щоб під ним було якнайменше бульбашок повітря.",
          "5. Препарат готовий. Його можна покласти на столик мікроскопа.",
          "Обережність: скло тонке і гостро ламається. Не стискай скельце пальцями силоміць."
        ]
      },
      task: {
        id: "l03-e3",
        type: "single-choice",
        question: { pl: "Co kładziesz najpierw na szkiełko podstawowe?", ua: "Що кладеш спочатку на предметне скло?" },
        options: [
          { id: "a", label: { pl: "suche szkiełko nakrywkowe bez wody", ua: "сухе накривне скельце без води" } },
          { id: "b", label: { pl: "kroplę wody, a dopiero potem skórkę cebuli", ua: "краплю води, а вже потім шкірку цибулі" } },
          { id: "c", label: { pl: "całą cebulę", ua: "цілу цибулю" } }
        ],
        answer: "b",
        explanation: { pl: "Najpierw kropla wody na szkiełku podstawowym. Potem obiekt, na końcu ostrożnie szkiełko nakrywkowe.", ua: "Спочатку крапля води на предметному склі. Потім об’єкт, наприкінці обережно накривне скельце." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak obserwować pod mikroskopem?", ua: "Як спостерігати під мікроскопом?" },
      visual: vizGh("l03-komorki-cebuli.png", {
        alt: { pl: "Komórki skórki cebuli: preparat niebarwiony i barwiony", ua: "Клітини шкірки цибулі: нефарбований і фарбований препарат" },
        title: { pl: "Zaczynamy od najmniejszego powiększenia.", ua: "Починаємо з найменшого збільшення." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9, dwa równe kadry mikroskopowe skórki cebuli, jak prawdziwe mikrofotografie. LEWA etykieta po polsku: preparat niebarwiony — jasna, słabo widoczna siatka komórek. PRAWA: preparat barwiony — fioletowe ściany i wyraźniejsze jądra. Bez angielskiego, bez logotypów, bez nazw organelli poza tym, co widać." }
      }),
      text: {
        pl: [
          "Obserwację zawsze zaczynasz od ", em("najmniejszego powiększenia"), " — od najsłabszego obiektywu na rewolwerze.",
          "Najpierw oświetlasz pole widzenia: w okularze ma być jasne kółko. Potem kładziesz preparat na stoliku tak, żeby obiekt był na środku.",
          "Śrubą makrometryczną ostrożnie zbliżasz obiektyw do szkiełka. Uważaj: obiektyw nie może uderzyć w preparat i go zgnieść.",
          "Patrzysz w okular i kręcisz makro, aż pojawi się obraz. Drobne poprawki robisz śrubą mikrometryczną. Dopiero potem możesz wziąć mocniejszy obiektyw i znów ustawić ostrość.",
          "Na zdjęciu widać komórki skórki cebuli. W preparacie niebarwionym są blade. Po zabarwieniu widać je wyraźniej. Barwienie pomaga obserwować — nie jest osobną lekcją o budowie komórki."
        ],
        ua: [
          "Спостереження завжди починаєш з ", em("найменшого збільшення"), " — з найслабшого об’єктива на револьвері.",
          "Спочатку освітлюєш поле зору: в окулярі має бути світле коло. Потім кладеш препарат на столик так, щоб об’єкт був посередині.",
          "Макрометричним гвинтом обережно наближаєш об’єктив до скельця. Увага: об’єктив не може вдарити в препарат і розчавити його.",
          "Дивишся в окуляр і крутиш макро, доки з’явиться зображення. Дрібні поправки робиш мікрометричним гвинтом. Лише потім можна взяти сильніший об’єктив і знову навести різкість.",
          "На фото видно клітини шкірки цибулі. У нефарбованому препараті вони бліді. Після фарбування їх видно чіткіше. Фарбування допомагає спостерігати — це не окремий урок про будову клітини."
        ]
      },
      task: {
        id: "l03-e4",
        type: "true-false",
        question: { pl: "Obserwację pod mikroskopem zaczynamy od największego powiększenia, żeby od razu zobaczyć szczegóły.", ua: "Спостереження під мікроскопом починаємо з найбільшого збільшення, щоб одразу побачити деталі." },
        answer: false,
        explanation: { pl: "Nie. Zawsze od najmniejszego powiększenia. Łatwiej znaleźć obiekt i nie uszkodzić preparatu.", ua: "Ні. Завжди з найменшого збільшення. Легше знайти об’єкт і не пошкодити препарат." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak obliczyć powiększenie?", ua: "Як обчислити збільшення?" },
      visual: vizGh("l03-powiekszenie.png", {
        alt: { pl: "Wzór: powiększenie okularu razy powiększenie obiektywu", ua: "Формула: збільшення окуляра помножити на збільшення об’єктива" },
        title: { pl: "Okular × obiektyw = powiększenie obrazu.", ua: "Окуляр × об’єктив = збільшення зображення." },
        prompt: { pl: "Fotorealistyczna plansza 16:9: zbliżenie okularu z liczbą 10× i obiektywu z liczbą 40× na szkolnym mikroskopie, jak prawdziwe zdjęcie. Na dole duży polski napis: powiększenie okularu × powiększenie obiektywu = powiększenie obrazu. Przykład: 10 × 40 = 400. Bez angielskiego, bez logotypów, bez zbędnych wzorów." }
      }),
      text: {
        pl: [
          ["", em("Powiększenie"), " obrazu w mikroskopie optycznym liczysz w trzech krokach."],
          "1. Odczytujesz powiększenie na okularze. Często jest to 10×.",
          "2. Odczytujesz powiększenie na obiektywie, którego używasz. Może być na przykład 4×, 10× albo 40×.",
          "3. Mnożysz te dwie liczby.",
          ["Wzór: ", em("powiększenie okularu × powiększenie obiektywu = powiększenie obrazu"), "."],
          "Przykład: okular 10× i obiektyw 40× dają 10 × 40 = 400. Obraz jest powiększony 400 razy.",
          "Nie zgaduj „na oko”. Zawsze odczytaj obie liczby i pomnóż."
        ],
        ua: [
          ["", em("Збільшення"), " зображення в оптичному мікроскопі рахуєш у трьох кроках."],
          "1. Зчитуєш збільшення на окулярі. Часто це 10×.",
          "2. Зчитуєш збільшення на об’єктиві, яким користуєшся. Може бути, наприклад, 4×, 10× або 40×.",
          "3. Множиш ці два числа.",
          ["Формула: ", em("збільшення окуляра × збільшення об’єктива = збільшення зображення"), "."],
          "Приклад: окуляр 10× і об’єктив 40× дають 10 × 40 = 400. Зображення збільшене у 400 разів.",
          "Не вгадуй «на око». Завжди зчитай обидва числа і помнож."
        ]
      },
      task: {
        id: "l03-e5",
        type: "single-choice",
        question: { pl: "Okular ma 10×, obiektyw 4×. Ile wynosi powiększenie obrazu?", ua: "Окуляр має 10×, об’єктив 4×. Чому дорівнює збільшення зображення?" },
        options: [
          { id: "a", label: { pl: "14", ua: "14" } },
          { id: "b", label: { pl: "40", ua: "40" } },
          { id: "c", label: { pl: "6", ua: "6" } }
        ],
        answer: "b",
        explanation: { pl: "Mnożymy, nie dodajemy: 10 × 4 = 40.", ua: "Множимо, не додаємо: 10 × 4 = 40." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Mikroskop elektronowy i przykłady obiektów", ua: "Електронний мікроскоп і приклади об’єктів" },
      visual: tree({
        layout: "fork",
        root: { pl: "przyrządy do powiększania", ua: "прилади для збільшення" },
        items: [
          { pl: "lupa", ua: "лупа" },
          { pl: "mikroskop optyczny", ua: "оптичний мікроскоп" },
          { pl: "mikroskop elektronowy", ua: "електронний мікроскоп" }
        ]
      }),
      items: [
        { pl: "lupa — kilka / kilkanaście razy", ua: "лупа — кілька / кільканадцять разів" },
        { pl: "mikroskop optyczny — komórki, tkanki (ok. 1000×)", ua: "оптичний мікроскоп — клітини, тканини (бл. 1000×)" },
        { pl: "mikroskop elektronowy — jeszcze mniejsze obiekty (wirusy)", ua: "електронний мікроскоп — ще менші об’єкти (віруси)" }
      ],
      text: {
        pl: [
          "Mikroskopem optycznym oglądasz na przykład: skórkę cebuli, włoski parzące pokrzywy, komórki z wnętrza ust, drobne organizmy z kropli wody.",
          ["Do jeszcze mniejszych obiektów służy ", em("mikroskop elektronowy"), ". Potrafi powiększyć obraz nawet około miliona razy. Używa się go wtedy, gdy trzeba zobaczyć na przykład bakterie albo wirusy."],
          "Wirusów nie uczysz się dziś na pamięć — to później. Zapamiętaj tylko: mikroskop optyczny ma granicę (około 1000×). Mikroskop elektronowy sięga dużo dalej.",
          "Dwa zdjęcia bakterii mogą wyglądać różnie: jedno bardziej płaskie, drugie jak przestrzenny model. To różne typy mikroskopów elektronowych. W klasie 5 wystarczy wiedzieć, że taki przyrząd istnieje i do czego służy."
        ],
        ua: [
          "Оптичним мікроскопом розглядаєш, наприклад: шкірку цибулі, жалкі волоски кропиви, клітини з рота, дрібні організми з краплі води.",
          ["Для ще менших об’єктів служить ", em("електронний мікроскоп"), ". Він може збільшити зображення навіть близько мільйона разів. Ним користуються, коли треба побачити, наприклад, бактерії або віруси."],
          "Вірусів сьогодні не вчиш напам’ять — це пізніше. Запам’ятай лише: оптичний мікроскоп має межу (близько 1000×). Електронний мікроскоп сягає набагато далі.",
          "Два фото бактерій можуть виглядати інакше: одне більш плоске, друге як просторова модель. Це різні типи електронних мікроскопів. У 5 класі досить знати, що такий прилад існує і для чого служить."
        ]
      },
      task: {
        id: "l03-e6",
        type: "single-choice",
        question: { pl: "Który przyrząd wybrać, żeby zobaczyć wirusa?", ua: "Який прилад вибрати, щоб побачити вірус?" },
        options: [
          { id: "a", label: { pl: "lupę", ua: "лупу" } },
          { id: "b", label: { pl: "mikroskop optyczny szkolny", ua: "шкільний оптичний мікроскоп" } },
          { id: "c", label: { pl: "mikroskop elektronowy", ua: "електронний мікроскоп" } }
        ],
        answer: "c",
        explanation: { pl: "Wirusy są za małe dla szkolnego mikroskopu optycznego. Potrzebny jest mikroskop elektronowy.", ua: "Віруси замалі для шкільного оптичного мікроскопа. Потрібен електронний мікроскоп." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Części mikroskopu", ua: "Практика. Частини мікроскопа" },
      visual: vizGh("l03-mikroskop-czesci.png", {
        alt: { pl: "Mikroskop z etykietami części", ua: "Мікроскоп з етикетками частин" },
        title: { pl: "Dopasuj część do zadania.", ua: "Добери частину до завдання." },
        prompt: { pl: "To samo fotorealistyczne zdjęcie 16:9 mikroskopu z polskimi etykietami: okular, tubus, rewolwer, obiektyw, stolik, źródło światła, śruba makrometryczna, śruba mikrometryczna. Bez angielskiego, bez logotypów." }
      }),
      task: {
        id: "l03-p1",
        type: "single-choice",
        question: { pl: "Które połączenie jest w całości poprawne?", ua: "Яке поєднання повністю правильне?" },
        options: [
          { id: "a", label: { pl: "okular — tu kładziesz preparat; stolik — tu zaglądasz okiem", ua: "окуляр — сюди кладеш препарат; столик — сюди дивишся оком" } },
          { id: "b", label: { pl: "okular — tu zaglądasz; obiektyw — powiększa obraz obiektu; stolik — tu leży preparat; rewolwer — zmiana obiektywu; śruba makro — wstępna ostrość; śruba mikro — drobna ostrość", ua: "окуляр — сюди дивишся; об’єктив — збільшує зображення; столик — тут лежить препарат; револьвер — зміна об’єктива; макро — попередня різкість; мікро — дрібна різкість" } },
          { id: "c", label: { pl: "źródło światła — do kręcenia ostrości; tubus — to samo co stolik", ua: "джерело світла — щоб крутити різкість; тубус — те саме, що столик" } }
        ],
        answer: "b",
        explanation: {
          pl: "Okular przy oku, obiektyw przy preparacie, stolik pod szkiełkiem, rewolwer zmienia obiektyw, dwie śruby ustawiają ostrość.",
          ua: "Окуляр біля ока, об’єктив біля препарату, столик під скельцем, револьвер змінює об’єктив."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ułóż kolejne kroki preparatu", ua: "Уклади наступні кроки препарату" },
      task: {
        id: "l03-p2",
        type: "single-choice",
        question: { pl: "Która kolejność przygotowania preparatu ze skórki cebuli jest poprawna?", ua: "Яка послідовність приготування препарату зі шкірки цибулі правильна?" },
        options: [
          { id: "a", label: { pl: "szkiełko nakrywkowe → cała cebula na stoliku → kropla wody na okularze", ua: "накривне скельце → ціла цибуля на столику → крапля води на окулярі" } },
          { id: "b", label: { pl: "kropla wody na szkiełku podstawowym → cienka skórka w kropli → szkiełko nakrywkowe pod kątem", ua: "крапля води на предметному склі → тонка шкірка в краплі → накривне скельце під кутом" } },
          { id: "c", label: { pl: "od razu najmocniejszy obiektyw → potem kropla wody", ua: "одразу найсильніший об’єктив → потім крапля води" } }
        ],
        answer: "b",
        explanation: {
          pl: "Najpierw woda na szkiełku podstawowym, potem obiekt, na końcu nakrywka pod kątem. Cebuli nie kładziemy w całości.",
          ua: "Спочатку вода на предметному склі, потім об’єкт, наприкінці накривка під кутом."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znajdź błąd w obserwacji", ua: "Знайди помилку в спостереженні" },
      task: {
        id: "l03-p3",
        type: "single-choice",
        question: {
          pl: "Ania od razu ustawia najmocniejszy obiektyw i śrubą makro mocno przyciska go do szkiełka. Jaki błąd popełniła?",
          ua: "Аня одразу ставить найсильніший об’єктив і макрогвинтом сильно притискає його до скельця. Яку помилку вона зробила?"
        },
        options: [
          { id: "a", label: { pl: "Zaczęła od najmniejszego powiększenia — to błąd.", ua: "Почала з найменшого збільшення — це помилка." } },
          { id: "b", label: { pl: "Zaczęła od największego powiększenia i zaryzykowała zgniecenie preparatu.", ua: "Почала з найбільшого збільшення і ризикнула розчавити препарат." } },
          { id: "c", label: { pl: "Nie wolno w ogóle używać śruby makro.", ua: "Не можна взагалі користуватися макрогвинтом." } }
        ],
        answer: "b",
        explanation: {
          pl: "Zaczynamy od najsłabszego obiektywu. Śrubą makro zbliżamy ostrożnie, żeby nie uderzyć w szkiełko.",
          ua: "Починаємо з найслабшого об’єктива. Макрогвинтом наближаємо обережно."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Oblicz powiększenie", ua: "Обчисли збільшення" },
      task: {
        id: "l03-p4",
        type: "single-choice",
        question: { pl: "Okular 10×, obiektyw 40×. Ile wynosi powiększenie obrazu?", ua: "Окуляр 10×, об’єктив 40×. Чому дорівнює збільшення зображення?" },
        options: [
          { id: "a", label: { pl: "50", ua: "50" } },
          { id: "b", label: { pl: "400", ua: "400" } },
          { id: "c", label: { pl: "30", ua: "30" } }
        ],
        answer: "b",
        explanation: {
          pl: "10 × 40 = 400. Powiększenia mnożymy, nie dodajemy.",
          ua: "10 × 40 = 400. Збільшення множимо, не додаємо."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Co czym oglądamy?", ua: "Що чим розглядаємо?" },
      task: {
        id: "l03-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie obiekty, które można oglądać mikroskopem optycznym w szkole.", ua: "Познач усі об’єкти, які можна розглядати шкільним оптичним мікроскопом." },
        options: [
          { id: "a", label: { pl: "skórka liścia cebuli", ua: "шкірка листка цибулі" } },
          { id: "b", label: { pl: "włoski parzące pokrzywy", ua: "жалкі волоски кропиви" } },
          { id: "c", label: { pl: "wirus grypy", ua: "вірус грипу" } },
          { id: "d", label: { pl: "drobne organizmy z kropli wody", ua: "дрібні організми з краплі води" } },
          { id: "e", label: { pl: "samochód na parkingu", ua: "автомобіль на парковці" } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Optyczny mikroskop: tkanki, komórki, włoski pokrzywy, drobne organizmy z wody. Wirus — mikroskop elektronowy. Samochód widać bez mikroskopu.",
          ua: "Оптичний мікроскоп: тканини, клітини, волоски кропиви, дрібні організми з води. Вірус — електронний мікроскоп."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Części mikroskopu", ua: "Перевірка 1. Частини мікроскопа" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l03-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Okular jest przy oku i dodatkowo powiększa obraz.", ua: "Окуляр біля ока і додатково збільшує зображення." } },
          { id: "b", label: { pl: "Obiektyw powiększa obraz oglądanego obiektu.", ua: "Об’єктив збільшує зображення об’єкта." } },
          { id: "c", label: { pl: "Stolik to miejsce na preparat.", ua: "Столик — місце для препарату." } },
          { id: "d", label: { pl: "Śruba makrometryczna służy do drobniutkiej, końcowej ostrości, a mikrometryczna — do dużego ruchu.", ua: "Макрометричний гвинт служить для дрібної кінцевої різкості, а мікрометричний — для великого руху." } }
        ],
        answer: ["a", "b", "c"],
        explanation: {
          pl: "Makro = wstępna, większa zmiana ostrości. Mikro = drobna, dokładna. Reszta zdań jest prawdziwa.",
          ua: "Макро = попередня, більша зміна різкості. Мікро = дрібна, точна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Preparat mikroskopowy", ua: "Перевірка 2. Мікроскопічний препарат" },
      task: {
        id: "l03-s2",
        type: "single-choice",
        question: { pl: "Jak poprawnie przygotować preparat ze skórki cebuli?", ua: "Як правильно приготувати препарат зі шкірки цибулі?" },
        options: [
          { id: "a", label: { pl: "Kładziesz całą cebulę na stoliku i patrzysz z góry bez wody.", ua: "Кладеш цілу цибулю на столик і дивишся згори без води." } },
          { id: "b", label: { pl: "Na szkiełko podstawowe kładziesz kroplę wody, w kropli cienką skórkę, nakrywasz szkiełkiem nakrywkowym opuszczanym pod kątem.", ua: "На предметне скло кладеш краплю води, у краплю — тонку шкірку, накриваєш накривним скельцем, опущеним під кутом." } },
          { id: "c", label: { pl: "Najpierw szkiełko nakrywkowe, potem sucha skórka bez wody.", ua: "Спочатку накривне скельце, потім суха шкірка без води." } }
        ],
        answer: "b",
        explanation: {
          pl: "Preparat: szkiełko podstawowe, kropla wody, obiekt, szkiełko nakrywkowe pod kątem.",
          ua: "Препарат: предметне скло, крапля води, об’єкт, накривне скельце під кутом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Zasady obserwacji", ua: "Перевірка 3. Правила спостереження" },
      task: {
        id: "l03-s3",
        type: "single-choice",
        question: { pl: "Która kolejność obserwacji jest poprawna?", ua: "Яка послідовність спостереження правильна?" },
        options: [
          { id: "a", label: { pl: "najmocniejszy obiektyw → mocne dociśnięcie do szkiełka → potem światło", ua: "найсильніший об’єктив → сильне притискання до скельця → потім світло" } },
          { id: "b", label: { pl: "najsłabszy obiektyw → jasne pole widzenia → preparat na środku stolika → ostrożnie makro, potem mikro → dopiero później większe powiększenie", ua: "найслабший об’єктив → світле поле зору → препарат посередині столика → обережно макро, потім мікро → лише пізніше більше збільшення" } },
          { id: "c", label: { pl: "najpierw mikroskop elektronowy, potem lupa", ua: "спочатку електронний мікроскоп, потім лупа" } }
        ],
        answer: "b",
        explanation: {
          pl: "Zawsze od najmniejszego powiększenia. Światło, środek stolika, ostrożna ostrość, potem mocniejszy obiektyw.",
          ua: "Завжди з найменшого збільшення. Світло, середина столика, обережна різкість, потім сильніший об’єктив."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Powiększenie obrazu", ua: "Перевірка 4. Збільшення зображення" },
      task: {
        id: "l03-s4",
        type: "single-choice",
        question: { pl: "Okular 10×, obiektyw 10×. Ile wynosi powiększenie obrazu?", ua: "Окуляр 10×, об’єктив 10×. Чому дорівнює збільшення зображення?" },
        options: [
          { id: "a", label: { pl: "20", ua: "20" } },
          { id: "b", label: { pl: "100", ua: "100" } },
          { id: "c", label: { pl: "10", ua: "10" } }
        ],
        answer: "b",
        explanation: {
          pl: "Powiększenie okularu × powiększenie obiektywu: 10 × 10 = 100.",
          ua: "Збільшення окуляра × збільшення об’єктива: 10 × 10 = 100."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Obiekty i mikroskop elektronowy", ua: "Перевірка 5. Об’єкти і електронний мікроскоп" },
      task: {
        id: "l03-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Mikroskop optyczny powiększa do około 1000 razy i służy m.in. do tkanek i komórek.", ua: "Оптичний мікроскоп збільшує до близько 1000 разів і служить зокрема для тканин і клітин." } },
          { id: "b", label: { pl: "Mikroskop elektronowy powiększa znacznie mocniej (nawet około miliona razy) i służy do bardzo drobnych obiektów, np. bakterii i wirusów.", ua: "Електронний мікроскоп збільшує набагато сильніше (навіть близько мільйона разів) і служить для дуже дрібних об’єктів, напр. бактерій і вірусів." } },
          { id: "c", label: { pl: "Lupa wystarczy, żeby zobaczyć wirusa.", ua: "Лупи досить, щоб побачити вірус." } },
          { id: "d", label: { pl: "Przykłady do mikroskopu optycznego: skórka cebuli, włoski pokrzywy, drobne organizmy z kropli wody.", ua: "Приклади для оптичного мікроскопа: шкірка цибулі, волоски кропиви, дрібні організми з краплі води." } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Lupa nie pokaże wirusa. Optyczny — komórki i tkanki. Elektronowy — znacznie mniejsze obiekty.",
          ua: "Лупа не покаже вірус. Оптичний — клітини і тканини. Електронний — значно менші об’єкти."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l03-powiekszenie.png", {
        alt: { pl: "Wzór powiększenia mikroskopu", ua: "Формула збільшення мікроскопа" },
        title: { pl: "Okular × obiektyw = powiększenie obrazu.", ua: "Окуляр × об’єктив = збільшення зображення." },
        prompt: { pl: "Ta sama fotorealistyczna plansza 16:9: okular 10×, obiektyw 40× i polski wzór powiększenia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mikroskop optyczny powiększa obraz nawet około 1000 razy. Dzięki niemu widać tkanki i pojedyncze komórki.",
          "Preparat: obiekt na szkiełku podstawowym w kropli wody, nakryty szkiełkiem nakrywkowym.",
          "Powiększenie obrazu = powiększenie okularu × powiększenie obiektywu.",
          "Obserwację zawsze zaczynasz od najmniejszego powiększenia. Śrubami ustawiasz ostrość ostrożnie, żeby nie zgnieść szkiełka.",
          "Mikroskop elektronowy powiększa znacznie mocniej i służy do bardzo drobnych obiektów, na przykład bakterii i wirusów."
        ],
        ua: [
          "Оптичний мікроскоп збільшує зображення навіть близько 1000 разів. Завдяки ньому видно тканини і окремі клітини.",
          "Препарат: об’єкт на предметному склі в краплі води, накритий накривним скельцем.",
          "Збільшення зображення = збільшення окуляра × збільшення об’єктива.",
          "Спостереження завжди починаєш з найменшого збільшення. Гвинтами наводиш різкість обережно, щоб не розчавити скельце.",
          "Електронний мікроскоп збільшує набагато сильніше і служить для дуже дрібних об’єктів, наприклад бактерій і вірусів."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać części mikroskopu optycznego i powiedzieć, do czego służą.", ua: "Можу вказати частини оптичного мікроскопа і сказати, для чого вони." },
        { pl: "Potrafię powiedzieć, jak przygotować preparat mikroskopowy.", ua: "Можу сказати, як приготувати мікроскопічний препарат." },
        { pl: "Potrafię uporządkować zasady obserwacji pod mikroskopem.", ua: "Можу упорядкувати правила спостереження під мікроскопом." },
        { pl: "Potrafię obliczyć powiększenie obrazu w mikroskopie optycznym.", ua: "Можу обчислити збільшення зображення в оптичному мікроскопі." },
        { pl: "Potrafię podać przykłady obiektów i krótko powiedzieć, czym różni się mikroskop elektronowy.", ua: "Можу назвати приклади об’єктів і коротко сказати, чим відрізняється електронний мікроскоп." }
      ]
    }
  ]
};
