function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L15_Klasyfikacja_organizmow/images/";

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
        { pl: "Wyjaśnisz, po co klasyfikujemy organizmy.", ua: "Поясниш, навіщо класифікуємо організми." },
        { pl: "Powiesz, czym jest gatunek.", ua: "Скажеш, що таке вид." },
        { pl: "Uporządkujesz jednostki systematyczne od gatunku do królestwa.", ua: "Упорядкуєш систематичні одиниці від виду до царства." },
        { pl: "Wymienisz pięć królestw organizmów.", ua: "Назвеш п’ять царств організмів." },
        { pl: "Powiesz, że wirusy nie należą do królestw organizmów.", ua: "Скажеш, що віруси не належать до царств організмів." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "klasyfikacja", ua: "класифікація" },
        { pl: "gatunek", ua: "вид" },
        { pl: "rodzaj", ua: "рід" },
        { pl: "królestwo", ua: "царство" },
        { pl: "jednostka systematyczna", ua: "систематична одиниця" },
        { pl: "nazwa dwuczłonowa", ua: "двочленна назва" },
        { pl: "wirus", ua: "вірус" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l15-zacznijmy.png", {
        alt: { pl: "Różne organizmy obok siebie", ua: "Різні організми поряд" },
        title: { pl: "Tyle życia. Jak to uporządkować, żeby się nie pogubić?", ua: "Стільки життя. Як це впорядкувати, щоб не загубитися?" },
        prompt: { pl: "Fotorealistyczny kolaż 16:9, cztery kadry: dąb, pies, muchomor, kropla stawu. Polskie etykiety bez nazw królestw jeszcze. Bez wirusów, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na świecie są miliony gatunków. Gdyby każdy biolog nazywał je po swojemu, nikt by się nie dogadał.",
          "Dlatego organizmy porządkujemy — jak książki w bibliotece. Na tej lekcji zobaczysz szufladki od najwęższej (gatunek) do najszerszej (królestwo)."
        ],
        ua: [
          "У світі мільйони видів. Якби кожен біолог називав їх по-своєму, ніхто б не порозумівся.",
          "Тому організми впорядковуємо. Сьогодні шухлядки від найвужчої (вид) до найширшої (царство)."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Po co klasyfikacja?", ua: "Навіщо класифікація?" },
      visual: vizGh("l15-po-co.png", {
        alt: { pl: "Porządek jak w bibliotece", ua: "Порядок як у бібліотеці" },
        title: { pl: "Żeby porównywać, opisywać i nie mylić nazw.", ua: "Щоб порівнювати, описувати і не плутати назви." },
        prompt: { pl: "Edukacyjna infografika 16:9. Półki z etykietami PL: podobne razem; wspólny język nazw; łatwiej uczyć się pokrewieństwa. Proste ikony organizmów. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Klasyfikacja"), " to porządkowanie organizmów w grupy według podobieństwa budowy i pokrewieństwa."],
          "Dzięki niej: wiemy, co z czym porównywać; uczeni na całym świecie używają tych samych nazw; łatwiej uczyć się biologii.",
          "Nie klasyfikujemy „ładne / brzydkie”. Liczy się budowa i pochodzenie, nie gust."
        ],
        ua: [
          ["", em("Класифікація"), " — впорядкування організмів у групи за подібністю будови і спорідненістю."],
          "Завдяки ній порівнюємо, маємо спільні назви і легше вчимо біологію.",
          "Не класифікуємо «гарне / бридке»."
        ]
      },
      task: {
        id: "l15-e1",
        type: "single-choice",
        question: { pl: "Po co klasyfikujemy organizmy?", ua: "Навіщо класифікуємо організми?" },
        options: [
          { id: "a", label: { pl: "żeby uporządkować je według podobieństwa i móc się o nich porozumieć", ua: "щоб упорядкувати їх за подібністю і могти про них порозумітися" } },
          { id: "b", label: { pl: "żeby nagradzać tylko ładne zwierzęta", ua: "щоб нагороджувати лише гарних тварин" } },
          { id: "c", label: { pl: "żeby wirusy dostały chloroplasty", ua: "щоб віруси дістали хлоропласти" } }
        ],
        answer: "a",
        explanation: { pl: "Klasyfikacja = porządek i wspólny język, nie konkurs piękności.", ua: "Класифікація = порядок і спільна мова." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Gatunek", ua: "Вид" },
      visual: vizGh("l15-gatunek.png", {
        alt: { pl: "Psy różnych ras i wilk — gatunek vs odmiany", ua: "Пси різних порід і вовк — вид vs відміни" },
        title: { pl: "Podobne organizmy, które mogą mieć razem płodne potomstwo.", ua: "Подібні організми, які можуть мати разом плодюче потомство." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: jamnik, owczarek, labrador — etykieta PL: jeden gatunek (pies). PRAWA: wilk — inny gatunek. Napis: osobniki jednego gatunku mogą mieć płodne potomstwo. Bez walki, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Gatunek"), " to grupa bardzo podobnych organizmów, które w naturze mogą krzyżować się i dawać płodne potomstwo (potomstwo, które samo może mieć dzieci)."],
          "Jamnik i owczarek to jeden gatunek — pies. Wilk to inny gatunek, choć podobny.",
          "Na klasie 5 nie rozstrzygamy wyjątków z zoo. Zapamiętaj ideę: gatunek = najwęższa, podstawowa szufladka."
        ],
        ua: [
          ["", em("Вид"), " — група дуже подібних організмів, які в природі можуть схрещуватися і давати плодюче потомство."],
          "Такса і вівчарка — один вид (пес). Вовк — інший вид.",
          "Вид = найвужча, основна шухляда."
        ]
      },
      task: {
        id: "l15-e2",
        type: "true-false",
        question: { pl: "Gatunek to grupa podobnych organizmów, które mogą dawać płodne potomstwo.", ua: "Вид — група подібних організмів, які можуть давати плодюче потомство." },
        answer: true,
        explanation: { pl: "To definicja na klasę 5. Rasy psa nie są osobnymi gatunkami.", ua: "Це визначення для 5 класу." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od gatunku do królestwa", ua: "Від виду до царства" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Drabina jednostek systematycznych od gatunku do królestwa", ua: "Драбина систематичних одиниць від виду до царства" },
        items: [
          { pl: "gatunek", ua: "вид" },
          { pl: "rodzaj", ua: "рід" },
          { pl: "rodzina", ua: "родина" },
          { pl: "rząd", ua: "ряд" },
          { pl: "gromada", ua: "клас" },
          { pl: "typ", ua: "тип" },
          { pl: "królestwo", ua: "царство" }
        ],
        caption: { pl: "od najwęższej szufladki do najszerszej", ua: "від найвужчої шухлядки до найширшої" }
      }),
      items: [
        { pl: "gatunek — najwęższa, podstawowa szufladka", ua: "вид — найвужча, основна шухляда" },
        { pl: "rodzaj — w jednym rodzaju bywa wiele gatunków", ua: "рід — в одному роді буває багато видів" },
        { pl: "dalej: rodzina → rząd → gromada → typ → królestwo", ua: "далі: родина → ряд → клас → тип → царство" }
      ],
      text: {
        pl: [
          ["", em("Jednostki systematyczne"), " (od najwęższej): gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo."],
          "Przykład: wilk szary (gatunek) należy do rodzaju pies, rodziny psowatych, rzędu drapieżnych, gromady ssaków, typu strunowców, królestwa zwierząt.",
          "Nie musisz dziś wykuć całego przykładu na pamięć. Musisz umieć kolejność szczebli."
        ],
        ua: [
          ["", em("Систематичні одиниці"), " (від найвужчої): вид → рід → родина → ряд → клас → тип → царство."],
          "Приклад: вовк сірий → рід пес → родина псових → ряд хижих → клас ссавців → тип хордових → царство тварин.",
          "Сьогодні важлива послідовність щаблів."
        ]
      },
      task: {
        id: "l15-e3",
        type: "single-choice",
        question: { pl: "Która kolejność od najwęższej jednostki jest poprawna?", ua: "Яка послідовність від найвужчої одиниці правильна?" },
        options: [
          { id: "a", label: { pl: "gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo", ua: "вид → рід → родина → ряд → клас → тип → царство" } },
          { id: "b", label: { pl: "królestwo → gatunek → komórka", ua: "царство → вид → клітина" } },
          { id: "c", label: { pl: "wirus → mitochondrium → liść", ua: "вірус → мітохондрія → листок" } }
        ],
        answer: "a",
        explanation: { pl: "Od wąskiej szufladki do najszerszej: gatunek na dole, królestwo na górze.", ua: "Від вузької шухлядки до найширшої." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Nazwa dwuczłonowa", ua: "Двочленна назва" },
      visual: vizGh("l15-nazwa.png", {
        alt: { pl: "Wilk szary — Canis lupus", ua: "Вовк сірий — Canis lupus" },
        title: { pl: "Rodzaj + gatunek. Łacina, żeby cały świat mówił tak samo.", ua: "Рід + вид. Латина, щоб увесь світ казав однаково." },
        prompt: { pl: "Edukacyjna karta 16:9. Zdjęcie wilka (spokojne). Etykiety PL: nazwa polska — wilk szary; nazwa dwuczłonowa — Canis lupus (rodzaj Canis, gatunek lupus). Bez angielskiego w UI poza łaciną naukową, bez logotypów." }
      }),
      text: {
        pl: [
          "Każdy gatunek ma ", em("nazwę dwuczłonową"), ": najpierw rodzaj, potem gatunek. Zapisuje się ją po łacinie, np. Canis lupus (wilk szary).",
          "Dzięki temu biolog w Polsce i w Japonii wie, że mówi o tym samym gatunku — nawet gdy nazwy potoczne są różne.",
          "Porządek ten spopularyzował Karol Linneusz. Na klasę 5 wystarczy: dwa człony, łacina, rodzaj + gatunek."
        ],
        ua: [
          "Кожен вид має ", em("двочленну назву"), ": спочатку рід, потім вид. Латиною, напр. Canis lupus (вовк сірий).",
          "Так біолог у Польщі і в Японії говорить про той самий вид.",
          "Цей порядок поширив Карл Лінней."
        ]
      },
      task: {
        id: "l15-e4",
        type: "single-choice",
        question: { pl: "Co oznacza nazwa dwuczłonowa?", ua: "Що означає двочленна назва?" },
        options: [
          { id: "a", label: { pl: "najpierw rodzaj, potem gatunek — zwykle po łacinie, np. Canis lupus", ua: "спочатку рід, потім вид — зазвичай латиною, напр. Canis lupus" } },
          { id: "b", label: { pl: "tylko imię właściciela psa", ua: "лише ім’я власника пса" } },
          { id: "c", label: { pl: "równanie fotosyntezy", ua: "рівняння фотосинтезу" } }
        ],
        answer: "a",
        explanation: { pl: "Rodzaj + gatunek. Linneusz. Wspólny język nauki.", ua: "Рід + вид. Лінней." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Pięć królestw", ua: "П’ять царств" },
      visual: tree({
        layout: "fork",
        root: { pl: "królestwa organizmów", ua: "царства організмів" },
        items: [
          { pl: "bakterie", ua: "бактерії" },
          { pl: "protisty", ua: "протисти" },
          { pl: "grzyby", ua: "гриби" },
          { pl: "rośliny", ua: "рослини" },
          { pl: "zwierzęta", ua: "тварини" }
        ],
        aside: { pl: "wirusy — poza", ua: "віруси — поза" },
        caption: { pl: "wirusy nie są komórkami, więc stoją obok", ua: "віруси не є клітинами, тож стоять поряд" }
      }),
      items: [
        { pl: "pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta", ua: "п’ять царств: бактерії, протисти, гриби, рослини, тварини" },
        { pl: "wirusy — poza królestwami (nie są komórkami)", ua: "віруси — поза царствами (не є клітинами)" }
      ],
      text: {
        pl: [
          "W tym kursie, za podręcznikiem, wyróżniamy ", em("pięć królestw"), ":",
          "1. bakterie — 2. protisty — 3. grzyby — 4. rośliny — 5. zwierzęta.",
          "Komórkę bakterii, grzyba, rośliny i zwierzęcia porównywałeś na lekcji 8. Protisty i szczegóły bakterii — na lekcjach 17–19. Grzyby i porosty — na 20."
        ],
        ua: [
          "У цьому курсі виділяємо ", em("п’ять царств"), ":",
          "1. бактерії — 2. протисти — 3. гриби — 4. рослини — 5. тварини.",
          "Клітину порівнював на уроці 8. Подробиці — на уроках 17–20."
        ]
      },
      task: {
        id: "l15-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz pięć królestw organizmów z tej lekcji.", ua: "Познач п’ять царств організмів з цього уроку." },
        options: [
          { id: "a", label: { pl: "bakterie", ua: "бактерії" } },
          { id: "b", label: { pl: "protisty", ua: "протисти" } },
          { id: "c", label: { pl: "grzyby", ua: "гриби" } },
          { id: "d", label: { pl: "rośliny i zwierzęta", ua: "рослини і тварини" } },
          { id: "e", label: { pl: "wirusy", ua: "віруси" } }
        ],
        answer: ["a", "b", "c", "d"],
        explanation: { pl: "Wirusy nie są królestwem organizmów. Pięć: bakterie, protisty, grzyby, rośliny, zwierzęta.", ua: "Віруси не є царством. П’ять царств без вірусів." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Gdzie są wirusy?", ua: "Де віруси?" },
      visual: vizGh("l15-wirusy.png", {
        alt: { pl: "Wirusy poza drzewem królestw", ua: "Віруси поза деревом царств" },
        title: { pl: "Nie są komórkami. Nie wpisujemy ich do pięciu królestw.", ua: "Не є клітинами. Не вписуємо їх у п’ять царств." },
        prompt: { pl: "Edukacyjna infografika 16:9. Drzewo pięciu królestw. Obok, za kreską, prosta osłonka wirusa (nie groźna, schematyczna) z etykietą PL: wirusy — poza królestwami; nie są komórkami. Bez choroby w zbliżeniu, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wirusy nie mają budowy komórkowej. Nie jedzą, nie oddychają jak organizmy z lekcji 14.",
          "Dlatego ", em("nie należą do pięciu królestw"), ". Nie znaczy to, że „nie istnieją” — znaczy, że klasyfikujemy je osobno.",
          "Budowę i choroby wirusowe poznasz na następnej lekcji. Dziś zapamiętaj tylko miejsce: poza królestwami organizmów."
        ],
        ua: [
          "Віруси не мають клітинної будови. Не їдять і не дихають як організми з уроку 14.",
          "Тому ", em("не належать до п’яти царств"), ".",
          "Будову пізнаєш на наступному уроці."
        ]
      },
      task: {
        id: "l15-e6",
        type: "true-false",
        question: { pl: "Wirusy nie należą do pięciu królestw organizmów.", ua: "Віруси не належать до п’яти царств організмів." },
        answer: true,
        explanation: { pl: "Nie są komórkami. Osobna szufladka — lekcja 16.", ua: "Не є клітинами. Окрема шухляда — урок 16." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Po co?", ua: "Практика. Навіщо?" },
      task: {
        id: "l15-p1",
        type: "single-choice",
        question: { pl: "Które zdanie o klasyfikacji jest prawdziwe?", ua: "Яке речення про класифікацію правдиве?" },
        options: [
          { id: "a", label: { pl: "Porządkujemy organizmy według podobieństwa, żeby się o nich porozumieć i porównywać.", ua: "Впорядковуємо організми за подібністю, щоб про них порозумітися і порівнювати." } },
          { id: "b", label: { pl: "Klasyfikacja służy wyłącznie do konkursu piękności.", ua: "Класифікація служить виключно для конкурсу краси." } },
          { id: "c", label: { pl: "Klasyfikacja zastępuje fotosyntezę.", ua: "Класифікація замінює фотосинтез." } }
        ],
        answer: "a",
        explanation: { pl: "Porządek i wspólny język.", ua: "Порядок і спільна мова." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Gatunek", ua: "Вид" },
      task: {
        id: "l15-p2",
        type: "true-false",
        question: { pl: "Jamnik i owczarek należą do jednego gatunku (pies), choć wyglądają inaczej.", ua: "Такса і вівчарка належать до одного виду (пес), хоч виглядають інакше." },
        answer: true,
        explanation: { pl: "Rasy to nie osobne gatunki. Gatunek = płodne potomstwo.", ua: "Породи — не окремі види." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Kolejność", ua: "Послідовність" },
      task: {
        id: "l15-p3",
        type: "single-choice",
        question: { pl: "Co jest szersze: rodzaj czy gatunek?", ua: "Що ширше: рід чи вид?" },
        options: [
          { id: "a", label: { pl: "rodzaj jest szerszy — w jednym rodzaju bywa wiele gatunków", ua: "рід ширший — в одному роді буває багато видів" } },
          { id: "b", label: { pl: "gatunek jest zawsze szerszy niż królestwo", ua: "вид завжди ширший за царство" } },
          { id: "c", label: { pl: "nie ma różnicy", ua: "немає різниці" } }
        ],
        answer: "a",
        explanation: { pl: "Gatunek ⊂ rodzaj ⊂ … ⊂ królestwo.", ua: "Вид ⊂ рід ⊂ … ⊂ царство." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Królestwa", ua: "Царства" },
      task: {
        id: "l15-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz królestwa organizmów.", ua: "Познач царства організмів." },
        options: [
          { id: "a", label: { pl: "rośliny", ua: "рослини" } },
          { id: "b", label: { pl: "zwierzęta", ua: "тварини" } },
          { id: "c", label: { pl: "grzyby", ua: "гриби" } },
          { id: "d", label: { pl: "samochody", ua: "автомобілі" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Do pięciu należą też bakterie i protisty. Samochód nie jest organizmem.", ua: "До п’яти належать також бактерії і протисти." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wirusy", ua: "Віруси" },
      task: {
        id: "l15-p5",
        type: "single-choice",
        question: { pl: "Gdzie w tej klasyfikacji są wirusy?", ua: "Де в цій класифікації віруси?" },
        options: [
          { id: "a", label: { pl: "poza pięcioma królestwami — nie są komórkami", ua: "поза п’ятьма царствами — не є клітинами" } },
          { id: "b", label: { pl: "to szóste królestwo roślin", ua: "це шосте царство рослин" } },
          { id: "c", label: { pl: "to to samo co gatunek wilka", ua: "це те саме, що вид вовка" } }
        ],
        answer: "a",
        explanation: { pl: "Wirusy poza królestwami. Szczegóły — lekcja 16.", ua: "Віруси поза царствами." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Po co klasyfikacja", ua: "Перевірка 1. Навіщо класифікація" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l15-s1",
        type: "single-choice",
        question: { pl: "Po co klasyfikujemy organizmy?", ua: "Навіщо класифікуємо організми?" },
        options: [
          { id: "a", label: { pl: "żeby uporządkować je według podobieństwa i porozumieć się wspólnymi nazwami", ua: "щоб упорядкувати їх за подібністю і порозумітися спільними назвами" } },
          { id: "b", label: { pl: "żeby zastąpić komórkę", ua: "щоб замінити клітину" } },
          { id: "c", label: { pl: "żeby nagradzać tylko zielone organizmy", ua: "щоб нагороджувати лише зелені організми" } }
        ],
        answer: "a",
        explanation: { pl: "Porządek i wspólny język nauki.", ua: "Порядок і спільна мова науки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Gatunek", ua: "Перевірка 2. Вид" },
      task: {
        id: "l15-s2",
        type: "single-choice",
        question: { pl: "Czym jest gatunek?", ua: "Що таке вид?" },
        options: [
          { id: "a", label: { pl: "grupa podobnych organizmów, które mogą dawać płodne potomstwo", ua: "група подібних організмів, які можуть давати плодюче потомство" } },
          { id: "b", label: { pl: "to samo co królestwo", ua: "те саме, що царство" } },
          { id: "c", label: { pl: "nazwa jodyny", ua: "назва йоду" } }
        ],
        answer: "a",
        explanation: { pl: "Najwęższa podstawowa jednostka systematyczna.", ua: "Найвужча основна систематична одиниця." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Jednostki", ua: "Перевірка 3. Одиниці" },
      task: {
        id: "l15-s3",
        type: "single-choice",
        question: { pl: "Uporządkuj jednostki od gatunku do królestwa.", ua: "Упорядкуй одиниці від виду до царства." },
        options: [
          { id: "a", label: { pl: "gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo", ua: "вид → рід → родина → ряд → клас → тип → царство" } },
          { id: "b", label: { pl: "królestwo → gatunek → rodzaj", ua: "царство → вид → рід" } },
          { id: "c", label: { pl: "typ → gatunek → wirus", ua: "тип → вид → вірус" } }
        ],
        answer: "a",
        explanation: { pl: "Od wąskiej do szerokiej szufladki.", ua: "Від вузької до широкої шухлядки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Pięć królestw", ua: "Перевірка 4. П’ять царств" },
      task: {
        id: "l15-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie królestwa z tej lekcji.", ua: "Познач усі царства з цього уроку." },
        options: [
          { id: "a", label: { pl: "bakterie", ua: "бактерії" } },
          { id: "b", label: { pl: "protisty", ua: "протисти" } },
          { id: "c", label: { pl: "grzyby, rośliny, zwierzęta", ua: "гриби, рослини, тварини" } },
          { id: "d", label: { pl: "wirusy", ua: "віруси" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pięć królestw bez wirusów.", ua: "П’ять царств без вірусів." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wirusy", ua: "Перевірка 5. Віруси" },
      task: {
        id: "l15-s5",
        type: "true-false",
        question: { pl: "Wirusy nie należą do królestw organizmów, bo nie są komórkami.", ua: "Віруси не належать до царств організмів, бо не є клітинами." },
        answer: true,
        explanation: { pl: "Poza systemem pięciu królestw. Lekcja 16 o budowie.", ua: "Поза системою п’яти царств." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "królestwa organizmów", ua: "царства організмів" },
        items: [
          { pl: "bakterie", ua: "бактерії" },
          { pl: "protisty", ua: "протисти" },
          { pl: "grzyby", ua: "гриби" },
          { pl: "rośliny", ua: "рослини" },
          { pl: "zwierzęta", ua: "тварини" }
        ],
        aside: { pl: "wirusy — poza", ua: "віруси — поза" }
      }),
      text: {
        pl: [
          "Klasyfikacja porządkuje organizmy według podobieństwa.",
          "Gatunek: podobne organizmy, płodne potomstwo. Nazwa dwuczłonowa: rodzaj + gatunek (łacina).",
          "Jednostki: gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo.",
          "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta.",
          "Wirusy poza królestwami."
        ],
        ua: [
          "Класифікація впорядковує організми за подібністю.",
          "Вид: подібні організми, плодюче потомство. Двочленна назва: рід + вид.",
          "Одиниці: вид → рід → родина → ряд → клас → тип → царство.",
          "П’ять царств: бактерії, протисти, гриби, рослини, тварини.",
          "Віруси поза царствами."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, po co klasyfikujemy organizmy.", ua: "Можу пояснити, навіщо класифікуємо організми." },
        { pl: "Potrafię powiedzieć, czym jest gatunek.", ua: "Можу сказати, що таке вид." },
        { pl: "Potrafię uporządkować jednostki systematyczne.", ua: "Можу упорядкувати систематичні одиниці." },
        { pl: "Potrafię wymienić pięć królestw.", ua: "Можу назвати п’ять царств." },
        { pl: "Potrafię powiedzieć, że wirusy nie należą do królestw organizmów.", ua: "Можу сказати, що віруси не належать до царств організмів." }
      ]
    }
  ]
};
