function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L07_Komorka_roslinna/images/";

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
        { pl: "Podasz przykłady kształtów komórek roślinnych i powiążesz je z funkcją.", ua: "Наведеш приклади форм рослинних клітин і пов’яжеш їх із функцією." },
        { pl: "Wymienisz elementy komórki roślinnej.", ua: "Назвеш елементи рослинної клітини." },
        { pl: "Wyjaśnisz funkcję ściany komórkowej.", ua: "Поясниш функцію клітинної стінки." },
        { pl: "Wyjaśnisz funkcję chloroplastów — bez równania fotosyntezy.", ua: "Поясниш функцію хлоропластів — без рівняння фотосинтезу." },
        { pl: "Powiesz, czym duża wakuola roślinna różni się od drobnych wakuoli zwierzęcych.", ua: "Скажеш, чим велика рослинна вакуоля відрізняється від дрібних тваринних вакуолей." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "komórka roślinna", ua: "рослинна клітина" },
        { pl: "ściana komórkowa", ua: "клітинна стінка" },
        { pl: "chloroplast", ua: "хлоропласт" },
        { pl: "chlorofil", ua: "хлорофіл" },
        { pl: "wakuola", ua: "вакуоля" },
        { pl: "komórki szparkowe", ua: "продихові клітини" },
        { pl: "włośniki", ua: "кореневі волоски" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l07-zacznijmy.png", {
        alt: { pl: "Moczarka kanadyjska w wodzie", ua: "Елодея канадська у воді" },
        title: { pl: "Ta wodna roślina często gości na lekcji biologii.", ua: "Ця водяна рослина часто гостює на уроці біології." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Pędy moczarki kanadyjskiej (Elodea) w przezroczystej wodzie, jasnozielone listki. Etykieta PL: moczarka kanadyjska. Bez twarzy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Komórka zwierzęca ma błonę, cytozol, jądro, mitochondria, rybosomy i drobne wakuole.",
          "Komórka roślinna ma to wszystko — i jeszcze dwie cechy, których zwierzęca nie ma. Żeby je zobaczyć, biolodzy chętnie biorą listki moczarki kanadyjskiej."
        ],
        ua: [
          "Тваринна клітина має мембрану, цитозоль, ядро, мітохондрії, рибосоми і дрібні вакуолі.",
          "Рослинна клітина має все це — і ще дві риси, яких тваринна не має. Щоб їх побачити, біологи охоче беруть листочки елодеї канадської."
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Jakie kształty mają komórki roślinne?", ua: "Які форми мають рослинні клітини?" },
      visual: tree({
        layout: "fork",
        root: { pl: "komórki roślinne", ua: "рослинні клітини" },
        items: [
          { pl: "szparkowe", ua: "продихові" },
          { pl: "włośniki", ua: "кореневі волоски" },
          { pl: "rury z wodą", ua: "труби з водою" }
        ]
      }),
      items: [
        { pl: "szparkowe — wymiana gazów w liściu", ua: "продихові — обмін газів у листку" },
        { pl: "włośniki — pobieranie wody i soli", ua: "кореневі волоски — вбирання води і солей" },
        { pl: "komórki jak rury — transport wody (tkanki — lekcja 21)", ua: "клітини як труби — транспорт води (тканини — урок 21)" }
      ],
      text: {
        pl: [
          "Komórki roślinne też mają różne kształty, bo pełnią różne funkcje.",
          ["", em("Komórki szparkowe"), " w liściu są jak dwie fasolki. Między nimi jest szczelina — szparka. Tędy roślina wymienia gazy z otoczeniem (tlen i dwutlenek węgla)."],
          ["", em("Włośniki"), " to długie, palczaste wypustki komórek skórki korzenia. Zwiększają powierzchnię, więc korzeń łatwiej pobiera wodę i sole mineralne."],
          "Niektóre komórki układają się jak rury i transportują wodę oraz sole. Szczegóły tkanek roślinnych poznasz później — dziś wystarczy kształt i funkcja."
        ],
        ua: [
          "Рослинні клітини теж мають різні форми, бо виконують різні функції.",
          ["", em("Продихові клітини"), " в листку як дві квасолини. Між ними щілина — продих. Туди рослина обмінюється газами з оточенням (кисень і вуглекислий газ)."],
          ["", em("Кореневі волоски"), " — довгі пальцеподібні вирости клітин шкірки кореня. Збільшують поверхню, тож корінь легше бере воду і мінеральні солі."],
          "Деякі клітини кладуться як труби і транспортують воду та солі. Подробиці рослинних тканин пізнаєш пізніше — сьогодні досить форми і функції."
        ]
      },
      task: {
        id: "l07-e1",
        type: "single-choice",
        question: { pl: "Do czego służą włośniki?", ua: "Для чого служать кореневі волоски?" },
        options: [
          { id: "a", label: { pl: "zwiększają powierzchnię korzenia i ułatwiają pobieranie wody oraz soli mineralnych", ua: "збільшують поверхню кореня і полегшують вбирання води та мінеральних солей" } },
          { id: "b", label: { pl: "zapisują DNA potomstwu zamiast jądra", ua: "записують ДНК потомству замість ядра" } },
          { id: "c", label: { pl: "to to samo co plemnik zwierzęcia", ua: "це те саме, що сперматозоїд тварини" } }
        ],
        answer: "a",
        explanation: { pl: "Włośniki = większa powierzchnia korzenia → woda i sole.", ua: "Кореневі волоски = більша поверхня кореня → вода і солі." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Listki moczarki pod mikroskopem", ua: "Листочки елодеї під мікроскопом" },
      visual: vizGh("l07-mikroskop.png", {
        alt: { pl: "Komórki liścia moczarki powiększone 400 razy", ua: "Клітини листка елодеї збільшені в 400 разів" },
        title: { pl: "Widać ścianę, chloroplasty, wakuolę i jądro.", ua: "Видно стінку, хлоропласти, вакуолю і ядро." },
        prompt: { pl: "Fotorealistyczna mikrofotografia 16:9 liścia moczarki, powiększenie ok. 400×. Prostokątne zielone komórki. Polskie etykiety: ściana komórkowa, błona komórkowa, chloroplasty, wakuola, jądro komórkowe. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Listki moczarki są cienkie, więc nadają się na preparat: kropla wody, listek, szkiełko nakrywkowe. Obserwację zaczynasz od najmniejszego powiększenia.",
          "Na zdjęciu (ok. 400×) widać prostokątne komórki. Zielone owalne struktury to chloroplasty. Jasna przestrzeń w środku to duża wakuola. Na brzegu — grubsza ściana komórkowa, pod nią cienka błona.",
          "Rysując komórki z preparatu, podpisz co najmniej: chloroplasty, ścianę komórkową i jądro komórkowe."
        ],
        ua: [
          "Листочки елодеї тонкі, тож годяться на препарат: крапля води, листочок, накривне скельце. Спостереження починаєш з найменшого збільшення.",
          "На знімку (близько 400×) видно прямокутні клітини. Зелені овальні структури — хлоропласти. Світлий простір усередині — велика вакуоля. На краю — товстіша клітинна стінка, під нею тонка мембрана.",
          "Малюючи клітини з препарату, підпиши щонайменше: хлоропласти, клітинну стінку і клітинне ядро."
        ]
      },
      task: {
        id: "l07-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz elementy, które widać w komórkach moczarki pod mikroskopem.", ua: "Познач елементи, які видно в клітинах елодеї під мікроскопом." },
        options: [
          { id: "a", label: { pl: "chloroplasty", ua: "хлоропласти" } },
          { id: "b", label: { pl: "ściana komórkowa", ua: "клітинна стінка" } },
          { id: "c", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "d", label: { pl: "kości z wapnia", ua: "кістки з кальцію" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Na preparacie moczarki podpisujesz chloroplasty, ścianę i jądro. Kości to tkanka zwierzęcia.", ua: "На препараті елодеї підписуєш хлоропласти, стінку і ядро." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Schemat komórki roślinnej", ua: "Схема рослинної клітини" },
      visual: vizGh("l07-schemat.png", {
        alt: { pl: "Schemat budowy komórki roślinnej z ośmioma elementami", ua: "Схема будови рослинної клітини з вісьмома елементами" },
        title: { pl: "Numery 1–6 jak u zwierzęcia. 7 i 8 — tylko roślina.", ua: "Номери 1–6 як у тварини. 7 і 8 — лише рослина." },
        prompt: { pl: "Edukacyjny schemat 16:9, przekrój sześciokątnej komórki roślinnej. Polskie etykiety: 1 błona komórkowa, 2 cytozol, 3 jądro komórkowe, 4 wakuola (wodniczka) — duża, 5 mitochondrium, 6 rybosomy, 7 chloroplast (zielona ikona), 8 ściana komórkowa (zielona ikona). Jasne tło, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Komórka roślinna ma:",
          "błonę komórkową, cytozol, jądro, mitochondria, rybosomy — tak jak komórka zwierzęca;",
          "zwykle jedną dużą wakuolę;",
          ["oraz dwie cechy wyróżniające: ", em("chloroplasty"), " i ", em("ścianę komórkową"), "."],
          "Na schemacie numery 1–6 są wspólne ze zwierzęciem. Numery 7 i 8 (chloroplast i ściana) są „roślinne”."
        ],
        ua: [
          "Рослинна клітина має:",
          "клітинну мембрану, цитозоль, ядро, мітохондрії, рибосоми — як тваринна клітина;",
          "зазвичай одну велику вакуолю;",
          ["і дві вирізняльні риси: ", em("хлоропласти"), " і ", em("клітинну стінку"), "."],
          "На схемі номери 1–6 спільні з твариною. Номери 7 і 8 (хлоропласт і стінка) — «рослинні»."
        ]
      },
      task: {
        id: "l07-e3",
        type: "single-choice",
        question: { pl: "Które dwa elementy odróżniają komórkę roślinną od zwierzęcej na tym schemacie?", ua: "Які два елементи відрізняють рослинну клітину від тваринної на цій схемі?" },
        options: [
          { id: "a", label: { pl: "chloroplasty i ściana komórkowa", ua: "хлоропласти і клітинна стінка" } },
          { id: "b", label: { pl: "tylko mitochondria", ua: "лише мітохондрії" } },
          { id: "c", label: { pl: "brak błony komórkowej u rośliny", ua: "відсутність клітинної мембрани в рослини" } }
        ],
        answer: "a",
        explanation: { pl: "Roślina ma chloroplasty i ścianę. Błonę mają obie. Mitochondria też obie.", ua: "Рослина має хлоропласти і стінку. Мембрану мають обидві." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Ściana komórkowa", ua: "Клітинна стінка" },
      visual: vizGh("l07-sciana.png", {
        alt: { pl: "Gruba ściana komórkowa z celulozy", ua: "Товста клітинна стінка з целюлози" },
        title: { pl: "Ściana daje kształt i chroni. Główny składnik: celuloza.", ua: "Стінка дає форму і захищає. Головний складник: целюлоза." },
        prompt: { pl: "Edukacyjna infografika 16:9. Zbliżenie na grubą żółtawą ścianę komórki roślinnej; pod nią cienka czerwona błona. Etykiety PL: ściana komórkowa — kształt i ochrona; celuloza (cukier); błona komórkowa pod ścianą. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Ściana komórkowa"), " otacza komórkę roślinną od zewnątrz. Nadaje kształt, chroni przed uszkodzeniem i przed drobnoustrojami."],
          "Główny składnik ściany to ", em("celuloza"), " — cukier, który poznałeś jako materiał budulcowy roślin.",
          "Pod ścianą nadal jest błona komórkowa. Ściana jej nie zastępuje — jest dodatkową, twardszą warstwą."
        ],
        ua: [
          ["", em("Клітинна стінка"), " оточує рослинну клітину ззовні. Надає форму, захищає від пошкодження і від мікроорганізмів."],
          "Головний складник стінки — ", em("целюлоза"), " — цукор, який ти пізнав як будівельний матеріал рослин.",
          "Під стінкою й далі є клітинна мембрана. Стінка її не замінює — це додатковий, твердіший шар."
        ]
      },
      task: {
        id: "l07-e4",
        type: "true-false",
        question: { pl: "Ściana komórkowa nadaje kształt i chroni komórkę; jej główny składnik to celuloza.", ua: "Клітинна стінка надає форму і захищає клітину; її головний складник — целюлоза." },
        answer: true,
        explanation: { pl: "Tak. Pod ścianą jest jeszcze błona komórkowa.", ua: "Так. Під стінкою ще є клітинна мембрана." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Chloroplast i chlorofil", ua: "Хлоропласт і хлорофіл" },
      visual: vizGh("l07-chloroplast.png", {
        alt: { pl: "Owalne zielone chloroplasty", ua: "Овальні зелені хлоропласти" },
        title: { pl: "Tu powstają substancje odżywcze podczas fotosyntezy.", ua: "Тут виникають поживні речовини під час фотосинтезу." },
        prompt: { pl: "Edukacyjna infografika 16:9. Kilka owalnych zielonych chloroplastów w komórce roślinnej. Etykiety PL: chloroplast; chlorofil — zielony barwnik; wytwarzanie substancji odżywczych podczas fotosyntezy. Bez równania chemicznego, bez wzorów CO2, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Chloroplast"), " jest zwykle owalny i zielony. Zawiera ", em("chlorofil"), " — zielony barwnik, który pochłania światło."],
          "Zadaniem chloroplastów jest wytwarzanie substancji odżywczych podczas fotosyntezy.",
          "Jak dokładnie przebiega fotosynteza i jakie jest jej równanie — poznasz na osobnej lekcji. Dziś zapamiętaj: chloroplast = „kuchnia” komórki roślinnej na świetle."
        ],
        ua: [
          ["", em("Хлоропласт"), " зазвичай овальний і зелений. Містить ", em("хлорофіл"), " — зелений барвник, який поглинає світло."],
          "Завдання хлоропластів — виробляти поживні речовини під час фотосинтезу.",
          "Як саме відбувається фотосинтез і яке його рівняння — пізнаєш на окремому уроці. Сьогодні запам’ятай: хлоропласт = «кухня» рослинної клітини на світлі."
        ]
      },
      task: {
        id: "l07-e5",
        type: "single-choice",
        question: { pl: "Do czego służą chloroplasty?", ua: "Для чого служать хлоропласти?" },
        options: [
          { id: "a", label: { pl: "zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy", ua: "містять хлорофіл і виробляють поживні речовини під час фотосинтезу" } },
          { id: "b", label: { pl: "to to samo co kości zwierzęcia", ua: "це те саме, що кістки тварини" } },
          { id: "c", label: { pl: "zapisują cechy w DNA zamiast jądra", ua: "записують риси в ДНК замість ядра" } }
        ],
        answer: "a",
        explanation: { pl: "Chlorofil + światło → substancje odżywcze. Mechanizm fotosyntezy — później.", ua: "Хлорофіл + світло → поживні речовини. Механізм фотосинтезу — пізніше." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Duża wakuola roślinna", ua: "Велика рослинна вакуоля" },
      visual: vizGh("l07-wakuola.png", {
        alt: { pl: "Duża wakuola wypełniona wodą w komórce roślinnej", ua: "Велика вакуоля, наповнена водою, у рослинній клітині" },
        title: { pl: "Jak duży pęcherz z wodą. U zwierzęcia wakuole są drobne.", ua: "Як великий міхур із водою. У тварини вакуолі дрібні." },
        prompt: { pl: "Edukacyjne porównanie 16:9. LEWA: komórka roślinna z jedną dużą jasnoniebieską wakuolą, etykieta: zwykle jedna, duża, dużo wody. PRAWA: komórka zwierzęca z kilkoma drobnymi wakuolami. Polskie napisy. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["W komórce roślinnej ", em("wakuola"), " (wodniczka) ma zwykle kształt dużego pęcherza. Wypełniona jest głównie wodą i pomaga utrzymać właściwą ilość wody w komórce."],
          "W komórce zwierzęcej wakuoli jest wiele i są drobne. To ważna różnica, oprócz chloroplastów i ściany.",
          "Komórka roślinna ma więc błonę jak zwierzęca — plus ścianę, chloroplasty i zazwyczaj jedną dużą wakuolę. Porównanie z bakteriami i grzybami — na następnej lekcji."
        ],
        ua: [
          ["У рослинній клітині ", em("вакуоля"), " (водничка) зазвичай має форму великого міхура. Наповнена здебільшого водою і допомагає підтримувати потрібну кількість води в клітині."],
          "У тваринній клітині вакуолей багато і вони дрібні. Це важлива різниця, окрім хлоропластів і стінки.",
          "Рослинна клітина має мембрану як тваринна — плюс стінку, хлоропласти і зазвичай одну велику вакуолю. Порівняння з бактеріями і грибами — на наступному уроці."
        ]
      },
      task: {
        id: "l07-e6",
        type: "true-false",
        question: { pl: "W komórce roślinnej wakuola jest zwykle jedna i duża; w zwierzęcej — wiele drobnych.", ua: "У рослинній клітині вакуоля зазвичай одна і велика; у тваринній — багато дрібних." },
        answer: true,
        explanation: { pl: "Tak. Roślinna wakuola to duży pęcherz z wodą.", ua: "Так. Рослинна вакуоля — великий міхур із водою." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Kształty", ua: "Практика. Форми" },
      task: {
        id: "l07-p1",
        type: "single-choice",
        question: { pl: "Które połączenie kształtu i funkcji jest poprawne?", ua: "Яке поєднання форми і функції правильне?" },
        options: [
          { id: "a", label: { pl: "komórki szparkowe — wymiana gazów w liściu; włośniki — pobieranie wody i soli; rury — transport wody", ua: "продихові клітини — обмін газів у листку; кореневі волоски — вбирання води і солей; труби — транспорт води" } },
          { id: "b", label: { pl: "włośniki zapisują DNA; szparki budują kości", ua: "кореневі волоски записують ДНК; продихи будують кістки" } },
          { id: "c", label: { pl: "wszystkie komórki roślinne muszą mieć kształt wici plemnika", ua: "усі рослинні клітини мусять мати форму джгутика сперматозоїда" } }
        ],
        answer: "a",
        explanation: { pl: "Kształt znów służy funkcji — tak jak u komórek zwierzęcych.", ua: "Форма знову служить функції." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Lista elementów", ua: "Список елементів" },
      task: {
        id: "l07-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz elementy komórki roślinnej.", ua: "Познач елементи рослинної клітини." },
        options: [
          { id: "a", label: { pl: "błona komórkowa i cytozol", ua: "клітинна мембрана і цитозоль" } },
          { id: "b", label: { pl: "jądro, mitochondria, rybosomy", ua: "ядро, мітохондрії, рибосоми" } },
          { id: "c", label: { pl: "duża wakuola, chloroplasty, ściana komórkowa", ua: "велика вакуоля, хлоропласти, клітинна стінка" } },
          { id: "d", label: { pl: "pióra ptaka", ua: "пір’я птаха" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pióra to nie organellum. Reszta jest w komórce roślinnej.", ua: "Пір’я — не органела." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ściana", ua: "Стінка" },
      task: {
        id: "l07-p3",
        type: "single-choice",
        question: { pl: "Które zdanie o ścianie komórkowej jest prawdziwe?", ua: "Яке речення про клітинну стінку правдиве?" },
        options: [
          { id: "a", label: { pl: "Nadaje kształt, chroni komórkę; główny składnik to celuloza; pod ścianą jest błona.", ua: "Надає форму, захищає клітину; головний складник — целюлоза; під стінкою є мембрана." } },
          { id: "b", label: { pl: "Ściana zastępuje jądro i DNA.", ua: "Стінка замінює ядро і ДНК." } },
          { id: "c", label: { pl: "Komórka zwierzęca ma grubszą ścianę z celulozy niż roślinna.", ua: "Тваринна клітина має товстішу стінку з целюлози, ніж рослинна." } }
        ],
        answer: "a",
        explanation: { pl: "Zwierzę nie ma ściany z celulozy. Ściana ≠ jądro.", ua: "Тварина не має стінки з целюлози." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Chloroplasty", ua: "Хлоропласти" },
      task: {
        id: "l07-p4",
        type: "true-false",
        question: { pl: "Chloroplasty zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy.", ua: "Хлоропласти містять хлорофіл і виробляють поживні речовини під час фотосинтезу." },
        answer: true,
        explanation: { pl: "Tak. Równania fotosyntezy dziś nie zapisujemy.", ua: "Так. Рівняння фотосинтезу сьогодні не записуємо." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wakuola", ua: "Вакуоля" },
      task: {
        id: "l07-p5",
        type: "single-choice",
        question: { pl: "Jak porównać wakuole?", ua: "Як порівняти вакуолі?" },
        options: [
          { id: "a", label: { pl: "roślinna — zwykle jedna, duża, dużo wody; zwierzęca — wiele drobnych", ua: "рослинна — зазвичай одна, велика, багато води; тваринна — багато дрібних" } },
          { id: "b", label: { pl: "zwierzę ma jedną ogromną wakuolę, roślina nie ma żadnej", ua: "тварина має одну величезну вакуолю, рослина не має жодної" } },
          { id: "c", label: { pl: "wakuola to to samo co chloroplast", ua: "вакуоля — те саме, що хлоропласт" } }
        ],
        answer: "a",
        explanation: { pl: "Roślinna wakuola = duży pęcherz z wodą. Zwierzęca = drobne pęcherzyki.", ua: "Рослинна вакуоля = великий міхур із водою." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Kształty", ua: "Перевірка 1. Форми" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l07-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Komórki szparkowe w liściu służą do wymiany gazów.", ua: "Продихові клітини в листку служать для обміну газів." } },
          { id: "b", label: { pl: "Włośniki zwiększają powierzchnię korzenia i ułatwiają pobieranie wody oraz soli.", ua: "Кореневі волоски збільшують поверхню кореня і полегшують вбирання води та солей." } },
          { id: "c", label: { pl: "Niektóre komórki roślinne układają się jak rury i transportują wodę.", ua: "Деякі рослинні клітини кладуться як труби і транспортують воду." } },
          { id: "d", label: { pl: "Włośniki to chloroplasty.", ua: "Кореневі волоски — це хлоропласти." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Włośniki ≠ chloroplasty. Kształt zależy od funkcji.", ua: "Кореневі волоски ≠ хлоропласти." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Elementy komórki roślinnej", ua: "Перевірка 2. Елементи рослинної клітини" },
      task: {
        id: "l07-s2",
        type: "single-choice",
        question: { pl: "Która lista elementów komórki roślinnej jest kompletna według tej lekcji?", ua: "Який список елементів рослинної клітини повний згідно з цим уроком?" },
        options: [
          { id: "a", label: { pl: "błona, cytozol, jądro, wakuola, mitochondria, rybosomy, chloroplasty, ściana komórkowa", ua: "мембрана, цитозоль, ядро, вакуоля, мітохондрії, рибосоми, хлоропласти, клітинна стінка" } },
          { id: "b", label: { pl: "tylko pióra i kości", ua: "лише пір’я і кістки" } },
          { id: "c", label: { pl: "tylko wić plemnika", ua: "лише джгутик сперматозоїда" } }
        ],
        answer: "a",
        explanation: { pl: "Osiem pozycji ze schematu: wspólne ze zwierzęciem plus chloroplasty i ściana.", ua: "Вісім позицій зі схеми." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Ściana komórkowa", ua: "Перевірка 3. Клітинна стінка" },
      task: {
        id: "l07-s3",
        type: "single-choice",
        question: { pl: "Do czego służy ściana komórkowa?", ua: "Для чого служить клітинна стінка?" },
        options: [
          { id: "a", label: { pl: "nadaje kształt i chroni komórkę; główny składnik to celuloza", ua: "надає форму і захищає клітину; головний складник — целюлоза" } },
          { id: "b", label: { pl: "zawiera DNA i kieruje komórką zamiast jądra", ua: "містить ДНК і керує клітиною замість ядра" } },
          { id: "c", label: { pl: "to centrum energetyczne jak mitochondrium", ua: "це енергетичний центр як мітохондрія" } }
        ],
        answer: "a",
        explanation: { pl: "Ściana = kształt + ochrona + celuloza. DNA jest w jądrze. Energia — mitochondria.", ua: "Стінка = форма + захист + целюлоза." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Chloroplasty", ua: "Перевірка 4. Хлоропласти" },
      task: {
        id: "l07-s4",
        type: "single-choice",
        question: { pl: "Które zdanie o chloroplastach jest poprawne?", ua: "Яке речення про хлоропласти правильне?" },
        options: [
          { id: "a", label: { pl: "Zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy.", ua: "Містять хлорофіл і виробляють поживні речовини під час фотосинтезу." } },
          { id: "b", label: { pl: "Są tylko w komórce nabłonka jamy ustnej.", ua: "Є лише в клітині епітелію ротової порожнини." } },
          { id: "c", label: { pl: "To to samo co wakuola z wodą.", ua: "Це те саме, що вакуоля з водою." } }
        ],
        answer: "a",
        explanation: { pl: "Chloroplast ≠ wakuola. W nabłonku jamy ustnej chloroplastów nie ma.", ua: "Хлоропласт ≠ вакуоля." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wakuola", ua: "Перевірка 5. Вакуоля" },
      task: {
        id: "l07-s5",
        type: "true-false",
        question: { pl: "Duża wakuola roślinna jest zwykle jedna i wypełniona głównie wodą; w komórce zwierzęcej wakuole są drobne i jest ich więcej.", ua: "Велика рослинна вакуоля зазвичай одна і наповнена здебільшого водою; у тваринній клітині вакуолі дрібні і їх більше." },
        answer: true,
        explanation: { pl: "To jedna z cech, które odróżniają komórkę roślinną od zwierzęcej.", ua: "Це одна з рис, які відрізняють рослинну клітину від тваринної." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l07-schemat.png", {
        alt: { pl: "Schemat komórki roślinnej", ua: "Схема рослинної клітини" },
        title: { pl: "Ściana i chloroplasty odróżniają roślinę od zwierzęcia.", ua: "Стінка і хлоропласти відрізняють рослину від тварини." },
        prompt: { pl: "Ten sam schemat ośmiu elementów komórki roślinnej." }
      }),
      text: {
        pl: [
          "Kształt komórki roślinnej zależy od funkcji: szparki, włośniki, rury z wodą.",
          "Komórka roślinna ma elementy zwierzęce plus chloroplasty i ścianę komórkową.",
          "Ściana: kształt i ochrona; celuloza. Pod ścianą jest błona.",
          "Chloroplasty z chlorofilem wytwarzają substancje odżywcze podczas fotosyntezy (szczegóły później).",
          "Wakuola roślinna jest zwykle jedna i duża; zwierzęca — drobna i liczna."
        ],
        ua: [
          "Форма рослинної клітини залежить від функції: продихи, кореневі волоски, труби з водою.",
          "Рослинна клітина має тваринні елементи плюс хлоропласти і клітинну стінку.",
          "Стінка: форма і захист; целюлоза. Під стінкою є мембрана.",
          "Хлоропласти з хлорофілом виробляють поживні речовини під час фотосинтезу (подробиці пізніше).",
          "Рослинна вакуоля зазвичай одна і велика; тваринна — дрібна і численна."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię podać przykłady kształtów komórek roślinnych i powiązać je z funkcją.", ua: "Можу навести приклади форм рослинних клітин і пов’язати їх із функцією." },
        { pl: "Potrafię wymienić elementy komórki roślinnej.", ua: "Можу назвати елементи рослинної клітини." },
        { pl: "Potrafię wyjaśnić funkcję ściany komórkowej.", ua: "Можу пояснити функцію клітинної стінки." },
        { pl: "Potrafię wyjaśnić funkcję chloroplastów bez równania fotosyntezy.", ua: "Можу пояснити функцію хлоропластів без рівняння фотосинтезу." },
        { pl: "Potrafię porównać dużą wakuolę roślinną z drobnymi wakuolami zwierzęcymi.", ua: "Можу порівняти велику рослинну вакуолю з дрібними тваринними вакуолями." }
      ]
    }
  ]
};
