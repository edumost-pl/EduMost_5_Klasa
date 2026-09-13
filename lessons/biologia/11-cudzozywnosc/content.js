function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L11_Cudzozywnosc/images/";

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
        { pl: "Wyjaśnisz, czym jest cudzożywność — w odróżnieniu od samożywności.", ua: "Поясниш, що таке гетеротрофне живлення — на відміну від саможивлення." },
        { pl: "Podasz przykłady roślinożercy, mięsożercy i wszystkożercy.", ua: "Наведеш приклади рослиноїдного, м’ясоїдного і всеїдного." },
        { pl: "Powiesz, czym jest odżywianie saprobiontyczne.", ua: "Скажеш, що таке сапробіонтне живлення." },
        { pl: "Powiesz, czym jest pasożytnictwo.", ua: "Скажеш, що таке паразитизм." },
        { pl: "Wyjaśnisz, skąd cudzożywne organizmy biorą pokarm.", ua: "Поясниш, звідки гетеротрофні організми беруть поживу." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "cudzożywność", ua: "гетеротрофне живлення" },
        { pl: "roślinożerca", ua: "рослиноїдний" },
        { pl: "mięsożerca", ua: "м’ясоїдний" },
        { pl: "wszystkożerca", ua: "всеїдний" },
        { pl: "saprobiont", ua: "сапробіонт" },
        { pl: "pasożyt", ua: "паразит" },
        { pl: "pokarm", ua: "пожива" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l11-zacznijmy.png", {
        alt: { pl: "Zając je trawę", ua: "Заєць їсть траву" },
        title: { pl: "Ten organizm nie ma chloroplastów. Musi jeść.", ua: "Цей організм не має хлоропластів. Мусить їсти." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Zając na łące je trawę, dzień. Bez krwi, bez grozy, bez angielskiego, bez logotypów, bez twarzy ludzi." }
      }),
      text: {
        pl: [
          "Zielona trawa sama robi pokarm w chloroplastach. Zając chloroplastów nie ma.",
          "Żeby żyć, musi pobrać gotowe substancje odżywcze — zjeść roślinę. To cudzożywność. Na tej lekcji zobaczysz jej główne warianty — bez katalogu królestw (to lekcja 15)."
        ],
        ua: [
          "Зелена трава сама робить поживу в хлоропластах. Заєць хлоропластів не має.",
          "Щоб жити, мусить взяти готові поживні речовини — з’їсти рослину. Це гетеротрофне живлення. На цьому уроці побачиш його головні варіанти."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Cudzożywność", ua: "Гетеротрофне живлення" },
      visual: vizGh("l11-cudzo.png", {
        alt: { pl: "Porównanie: roślina wytwarza, zwierzę zjada", ua: "Порівняння: рослина виробляє, тварина з’їдає" },
        title: { pl: "Pokarm jest gotowy — pochodzi z innych organizmów.", ua: "Пожива готова — походить з інших організмів." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: liść, fotosynteza, samożywność. PRAWA: zając, lis, grzyb na pniu — strzałka „pobierają gotowy pokarm”, etykieta PL: cudzożywność. Bez krwi, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Cudzożywność"), " to odżywianie się gotowymi substancjami odżywczymi, wytworzonymi przez inne organizmy (albo pochodzącymi z ich szczątków)."],
          "Cudzożywne są zwierzęta, grzyby i wiele bakterii. Człowiek też.",
          "Bez samożywnych roślin (i innych organizmów fotosyntetyzujących) cudzożywne nie miałyby źródła pokarmu na dłuższą metę."
        ],
        ua: [
          ["", em("Гетеротрофне живлення"), " — живлення готовими поживними речовинами, виробленими іншими організмами (або з їхніх решток)."],
          "Гетеротрофні — тварини, гриби і багато бактерій. Людина теж.",
          "Без саможивних рослин гетеротрофам бракувало б джерела поживи на довгу мету."
        ]
      },
      task: {
        id: "l11-e1",
        type: "single-choice",
        question: { pl: "Czym cudzożywność różni się od samożywności?", ua: "Чим гетеротрофне живлення відрізняється від саможивлення?" },
        options: [
          { id: "a", label: { pl: "cudzożywny pobiera gotowy pokarm; samożywny sam go wytwarza (np. fotosynteza)", ua: "гетеротроф бере готову поживу; автотроф сам її виробляє (напр. фотосинтез)" } },
          { id: "b", label: { pl: "cudzożywny ma chloroplasty, samożywny nie", ua: "гетеротроф має хлоропласти, автотроф ні" } },
          { id: "c", label: { pl: "to dwa słowa na tę samą fotosyntezę", ua: "це два слова на той самий фотосинтез" } }
        ],
        answer: "a",
        explanation: { pl: "Kierunek jest odwrotny niż w b. Chloroplasty = samożywne rośliny.", ua: "Напрям протилежний до b." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Co jedzą zwierzęta?", ua: "Що їдять тварини?" },
      visual: tree({
        layout: "fork",
        root: { pl: "zwierzęta (cudzożywne)", ua: "тварини (гетеротрофи)" },
        items: [
          { pl: "roślinożerca", ua: "рослиноїдний" },
          { pl: "mięsożerca", ua: "м’ясоїдний" },
          { pl: "wszystkożerca", ua: "всеїдний" }
        ]
      }),
      items: [
        { pl: "roślinożerca — rośliny (zając)", ua: "рослиноїдний — рослини (заєць)" },
        { pl: "mięsożerca — inne zwierzęta (lis)", ua: "м’ясоїдний — інші тварини (лисиця)" },
        { pl: "wszystkożerca — i rośliny, i zwierzęta (człowiek, dzik)", ua: "всеїдний — і рослини, і тварини (людина, дик)" }
      ],
      text: {
        pl: [
          ["", em("Roślinożerca"), " je rośliny lub ich części. Przykład: zając, krowa, gąsienica."],
          ["", em("Mięsożerca"), " je inne zwierzęta. Przykład: lis, jaskółka (owady), szczupak."],
          ["", em("Wszystkożerca"), " je i pokarm roślinny, i zwierzęcy. Przykład: dzik, człowiek, niedźwiedź."],
          "To nie są królestwa — to sposoby odżywiania zwierząt."
        ],
        ua: [
          ["", em("Рослиноїдний"), " їсть рослини або їхні частини. Приклад: заєць, корова, гусінь."],
          ["", em("М’ясоїдний"), " їсть інших тварин. Приклад: лисиця, ластівка (комахи), щука."],
          ["", em("Всеїдний"), " їсть і рослинну, і тваринну поживу. Приклад: дик, людина, ведмідь."],
          "Це не царства — це способи живлення тварин."
        ]
      },
      task: {
        id: "l11-e2",
        type: "single-choice",
        question: { pl: "Które połączenie jest poprawne?", ua: "Яке поєднання правильне?" },
        options: [
          { id: "a", label: { pl: "zając — roślinożerca; lis — mięsożerca; człowiek — wszystkożerca", ua: "заєць — рослиноїдний; лисиця — м’ясоїдна; людина — всеїдна" } },
          { id: "b", label: { pl: "wszystkie trzy fotosyntetyzują w chloroplastach", ua: "усі три фотосинтезують у хлоропластах" } },
          { id: "c", label: { pl: "lis jest samożywny", ua: "лисиця саможивна" } }
        ],
        answer: "a",
        explanation: { pl: "Zwierzęta są cudzożywne. Różnią się tym, co jedzą.", ua: "Тварини гетеротрофні. Різняться тим, що їдять." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Saprobionty", ua: "Сапробіонти" },
      visual: vizGh("l11-saprobiont.png", {
        alt: { pl: "Grzyby na martwym pniu", ua: "Гриби на мертвому пні" },
        title: { pl: "Pokarm ze szczątków — nie z polowania i nie z chloroplastu.", ua: "Пожива з решток — не з полювання і не з хлоропласта." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Kapeluszowe grzyby na spróchniałym pniu w lesie, dzień, mech. Etykieta PL: saprobiont — odżywia się martwymi szczątkami. Bez trujących znaków, bez angielskiego, bez logotypów, bez grozy." }
      }),
      text: {
        pl: [
          ["", em("Saprobiont"), " odżywia się martwymi szczątkami organizmów: opadłymi liśćmi, drewnem, resztkami jedzenia."],
          "Tak żyje wiele grzybów i bakterii. Rozkładają szczątki — dzięki temu substancje wracają do gleby.",
          "To nadal cudzożywność: pokarm jest gotowy, tylko nie „upolowany” i nie „zerwany z krzaka jako żywa liść w pędzie zająca”, tylko ze szczątków."
        ],
        ua: [
          ["", em("Сапробіонт"), " живиться мертвими рештками організмів: опалим листям, деревиною, залишками їжі."],
          "Так живуть багато грибів і бактерій. Розкладають рештки — завдяки цьому речовини повертаються в ґрунт.",
          "Це й далі гетеротрофне живлення: пожива готова, з решток."
        ]
      },
      task: {
        id: "l11-e3",
        type: "true-false",
        question: { pl: "Saprobiont odżywia się martwymi szczątkami organizmów.", ua: "Сапробіонт живиться мертвими рештками організмів." },
        answer: true,
        explanation: { pl: "Grzyby na pniu, wiele bakterii. Cudzożywność ze szczątków.", ua: "Гриби на пні, багато бактерій." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pasożyty", ua: "Паразити" },
      visual: vizGh("l11-pasozyt.png", {
        alt: { pl: "Kleszcz na źdźble — bez zbliżenia na ranę", ua: "Кліщ на стеблі — без зближення на рану" },
        title: { pl: "Żyje kosztem żywego gospodarza.", ua: "Живе коштом живого хазяїна." },
        prompt: { pl: "Spokojne edukacyjne zdjęcie 16:9. Kleszcz na źdźble trawy, makro, dzień. Etykieta PL: pasożyt — pobiera pokarm z żywego organizmu-gospodarza. Absolutnie bez krwi, bez ran, bez grozy, bez twarzy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pasożyt"), " pobiera pokarm z żywego organizmu, którego nazywamy gospodarzem. Gospodarz na tym traci."],
          "Przykłady z życia: kleszcz na ssaku; tasiemiec w jelicie; kanianka (roślina bez chlorofilu) na innych roślinach.",
          "Pasożytnictwo to nadal cudzożywność. Nie myl z saprobiontem: saprobiont korzysta ze szczątków, pasożyt — z żywego gospodarza.",
          "Wirusy nie są tu żywymi komórkami-pasożytami do rysowania — wrócą na lekcji 16."
        ],
        ua: [
          ["", em("Паразит"), " бере поживу з живого організму, якого називаємо хазяїном. Хазяїн на цьому втрачає."],
          "Приклади: кліщ на ссавці; стьожковий черв у кишці; повитиця на інших рослинах.",
          "Паразитизм — це й далі гетеротрофне живлення. Не плутай із сапробіонтом: сапробіонт — рештки, паразит — живий хазяїн.",
          "Віруси тут не малюємо — урок 16."
        ]
      },
      task: {
        id: "l11-e4",
        type: "single-choice",
        question: { pl: "Czym pasożyt różni się od saprobionta?", ua: "Чим паразит відрізняється від сапробіонта?" },
        options: [
          { id: "a", label: { pl: "pasożyt pobiera pokarm z żywego gospodarza; saprobiont — z martwych szczątków", ua: "паразит бере поживу з живого хазяїна; сапробіонт — з мертвих решток" } },
          { id: "b", label: { pl: "oba fotosyntetyzują w liściu moczarki", ua: "обидва фотосинтезують у листку елодеї" } },
          { id: "c", label: { pl: "nie ma żadnej różnicy", ua: "немає жодної різниці" } }
        ],
        answer: "a",
        explanation: { pl: "Żywy gospodarz vs szczątki. Oba są cudzożywne.", ua: "Живий хазяїн vs рештки." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy warianty cudzożywności", ua: "Три варіанти гетеротрофності" },
      visual: tree({
        layout: "fork",
        root: { pl: "cudzożywność", ua: "гетеротрофність" },
        items: [
          { pl: "zjadanie (diety)", ua: "з’їдання (дієти)" },
          { pl: "saprobiont", ua: "сапробіонт" },
          { pl: "pasożyt", ua: "паразит" }
        ]
      }),
      items: [
        { pl: "roślinożerca / mięsożerca / wszystkożerca — zjada organizmy", ua: "рослиноїдний / м’ясоїдний / всеїдний — з’їдає організми" },
        { pl: "saprobiont — martwe szczątki", ua: "сапробіонт — мертві рештки" },
        { pl: "pasożyt — żywy gospodarz", ua: "паразит — живий хазяїн" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Skąd bierze się energia w pokarmie?", ua: "Звідки береться енергія в поживі?" },
      visual: vizGh("l11-lancuch.png", {
        alt: { pl: "Trawa → zając → lis", ua: "Трава → заєць → лисиця" },
        title: { pl: "Na początku łańcucha jest samożywna roślina.", ua: "На початку ланцюга є саможивна рослина." },
        prompt: { pl: "Prosty edukacyjny schemat 16:9, trzy ogniwa, polskie etykiety: trawa (samożywna) → zając (roślinożerca) → lis (mięsożerca). Bez długich sieci, bez angielskiego, bez logotypów, bez krwi." }
      }),
      text: {
        pl: [
          "Cudzożywny organizm nie wytwarza cukru z dwutlenku węgla i wody tak jak liść.",
          "Bierze gotowe związki: z rośliny, ze zwierzęcia albo ze szczątków. Energia zapisana w tym pokarmie pochodzi — wcześniej — z fotosyntezy.",
          "Na lekcji 12 zobaczysz, jak komórka uwalnia z pokarmu energię (oddychanie tlenowe). Dziś zapamiętaj źródło pokarmu, nie mitochondrium."
        ],
        ua: [
          "Гетеротроф не виробляє цукор з вуглекислого газу і води так, як листок.",
          "Бере готові сполуки: з рослини, з тварини або з решток. Енергія в цій поживі походить раніше з фотосинтезу.",
          "На уроці 12 побачиш, як клітина вивільняє з поживи енергію. Сьогодні запам’ятай джерело поживи."
        ]
      },
      task: {
        id: "l11-e5",
        type: "true-false",
        question: { pl: "Cudzożywne organizmy biorą gotowy pokarm z innych organizmów lub ze szczątków.", ua: "Гетеротрофні організми беруть готову поживу з інших організмів або з решток." },
        answer: true,
        explanation: { pl: "To definicja cudzożywności na klasę 5.", ua: "Це визначення гетеротрофного живлення для 5 класу." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Nie wszystko, co zielone, jest „tylko rośliną do zjedzenia”", ua: "Не все зелене є «лише рослиною на з’їдення»" },
      visual: vizGh("l11-diety.png", {
        alt: { pl: "Trzy diety zwierząt", ua: "Три дієти тварин" },
        title: { pl: "Roślina bywa pokarmem. Sama zostaje samożywna.", ua: "Рослина буває поживою. Сама лишається саможивною." },
        prompt: { pl: "Ten sam kolaż trzech diet." }
      }),
      text: {
        pl: [
          "Pelargonia jest samożywna. Zając, który ją zje, jest cudzożywny. Jedno nie zamienia się w drugie od zjedzenia.",
          "Niektóre rośliny (np. kanianka) są pasożytami — wtedy roślina też bywa cudzożywna. To wyjątek, który pokazuje: „roślina” i „samożywność” zwykle idą w parze, ale nie zawsze."
        ],
        ua: [
          "Пеларгонія саможивна. Заєць, який її з’їсть, гетеротрофний.",
          "Деякі рослини (повитиця) — паразити. «Рослина» і «саможивлення» зазвичай разом, але не завжди."
        ]
      },
      task: {
        id: "l11-e6",
        type: "multiple-choice",
        question: { pl: "Zaznacz organizmy cudzożywne.", ua: "Познач гетеротрофні організми." },
        options: [
          { id: "a", label: { pl: "lis", ua: "лисиця" } },
          { id: "b", label: { pl: "grzyb na pniu (saprobiont)", ua: "гриб на пні (сапробіонт)" } },
          { id: "c", label: { pl: "kleszcz (pasożyt)", ua: "кліщ (паразит)" } },
          { id: "d", label: { pl: "zielona trawa prowadząca fotosyntezę", ua: "зелена трава, що веде фотосинтез" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trawa z chlorofilem jest samożywna. Reszta pobiera gotowy pokarm.", ua: "Трава з хлорофілом саможивна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Definicja", ua: "Практика. Визначення" },
      task: {
        id: "l11-p1",
        type: "single-choice",
        question: { pl: "Które zdanie opisuje cudzożywność?", ua: "Яке речення описує гетеротрофне живлення?" },
        options: [
          { id: "a", label: { pl: "organizm pobiera gotowe substancje odżywcze z innych organizmów lub ze szczątków", ua: "організм бере готові поживні речовини з інших організмів або з решток" } },
          { id: "b", label: { pl: "organizm wytwarza glukozę w chloroplastach", ua: "організм виробляє глюкозу в хлоропластах" } },
          { id: "c", label: { pl: "organizm nie potrzebuje pokarmu", ua: "організм не потребує поживи" } }
        ],
        answer: "a",
        explanation: { pl: "b to samożywność / fotosynteza.", ua: "b — саможивлення / фотосинтез." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Diety", ua: "Дієти" },
      task: {
        id: "l11-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz poprawne przykłady.", ua: "Познач правильні приклади." },
        options: [
          { id: "a", label: { pl: "krowa — roślinożerca", ua: "корова — рослиноїдна" } },
          { id: "b", label: { pl: "szczupak — mięsożerca", ua: "щука — м’ясоїдна" } },
          { id: "c", label: { pl: "człowiek — wszystkożerca", ua: "людина — всеїдна" } },
          { id: "d", label: { pl: "krowa — samożywna jak pelargonia", ua: "корова — саможивна як пеларгонія" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Krowa je rośliny, ale ich nie wytwarza fotosyntezą.", ua: "Корова їсть рослини, але не виробляє їх фотосинтезом." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Saprobiont", ua: "Сапробіонт" },
      task: {
        id: "l11-p3",
        type: "true-false",
        question: { pl: "Grzyb rozkładający martwy pień jest saprobiontem.", ua: "Гриб, що розкладає мертвий пень, є сапробіонтом." },
        answer: true,
        explanation: { pl: "Szczątki, nie żywy gospodarz.", ua: "Рештки, не живий хазяїн." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Pasożyt", ua: "Паразит" },
      task: {
        id: "l11-p4",
        type: "single-choice",
        question: { pl: "Który przykład jest pasożytem?", ua: "Який приклад є паразитом?" },
        options: [
          { id: "a", label: { pl: "kleszcz pobierający pokarm z żywego ssaka", ua: "кліщ, що бере поживу з живого ссавця" } },
          { id: "b", label: { pl: "pelargonia na świetle", ua: "пеларгонія на світлі" } },
          { id: "c", label: { pl: "zając jedzący trawę (to nie pasożytnictwo, to roślinożerność)", ua: "заєць, що їсть траву (це не паразитизм, це рослиноїдність)" } }
        ],
        answer: "a",
        explanation: { pl: "Zając zjada roślinę, ale nie żyje w niej jako pasożyt. Kleszcz żeruje na żywym gospodarzu.", ua: "Заєць з’їдає рослину, але не живе в ній як паразит." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Źródło pokarmu", ua: "Джерело поживи" },
      task: {
        id: "l11-p5",
        type: "single-choice",
        question: { pl: "Skąd cudzożywne biorą pokarm?", ua: "Звідки гетеротрофи беруть поживу?" },
        options: [
          { id: "a", label: { pl: "z innych organizmów albo z ich szczątków — nie z własnej fotosyntezy", ua: "з інших організмів або з їхніх решток — не з власного фотосинтезу" } },
          { id: "b", label: { pl: "wyłącznie z dwutlenku węgla i chlorofilu we własnych liściach", ua: "виключно з вуглекислого газу і хлорофілу у власних листках" } },
          { id: "c", label: { pl: "z powietrza bez żadnych związków organicznych", ua: "з повітря без жодних органічних сполук" } }
        ],
        answer: "a",
        explanation: { pl: "Gotowy pokarm. Fotosynteza to samożywność.", ua: "Готова пожива." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Cudzożywność", ua: "Перевірка 1. Гетеротрофне живлення" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l11-s1",
        type: "single-choice",
        question: { pl: "Czym jest cudzożywność?", ua: "Що таке гетеротрофне живлення?" },
        options: [
          { id: "a", label: { pl: "pobieranie gotowych substancji odżywczych z innych organizmów lub ze szczątków — w odróżnieniu od samożywności", ua: "вбирання готових поживних речовин з інших організмів або з решток — на відміну від саможивлення" } },
          { id: "b", label: { pl: "wytwarzanie glukozy w chloroplastach", ua: "вироблення глюкози в хлоропластах" } },
          { id: "c", label: { pl: "brak pokarmu", ua: "відсутність поживи" } }
        ],
        answer: "a",
        explanation: { pl: "Gotowy pokarm vs wytwarzanie w fotosyntezie.", ua: "Готова пожива vs вироблення у фотосинтезі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Diety", ua: "Перевірка 2. Дієти" },
      task: {
        id: "l11-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz poprawne pary.", ua: "Познач правильні пари." },
        options: [
          { id: "a", label: { pl: "roślinożerca — zając", ua: "рослиноїдний — заєць" } },
          { id: "b", label: { pl: "mięsożerca — lis", ua: "м’ясоїдний — лисиця" } },
          { id: "c", label: { pl: "wszystkożerca — człowiek", ua: "всеїдний — людина" } },
          { id: "d", label: { pl: "lis — samożywny", ua: "лисиця — саможивна" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Lis nie fotosyntetyzuje.", ua: "Лисиця не фотосинтезує." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Saprobiont", ua: "Перевірка 3. Сапробіонт" },
      task: {
        id: "l11-s3",
        type: "single-choice",
        question: { pl: "Czym jest odżywianie saprobiontyczne?", ua: "Що таке сапробіонтне живлення?" },
        options: [
          { id: "a", label: { pl: "odżywianie się martwymi szczątkami organizmów (np. grzyb na pniu)", ua: "живлення мертвими рештками організмів (напр. гриб на пні)" } },
          { id: "b", label: { pl: "fotosynteza w chloroplastach", ua: "фотосинтез у хлоропластах" } },
          { id: "c", label: { pl: "polowanie lisa na zająca", ua: "полювання лисиці на зайця" } }
        ],
        answer: "a",
        explanation: { pl: "Szczątki. Polowanie to mięsożerność, nie saprobiont.", ua: "Рештки. Полювання — м’ясоїдність." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Pasożyt", ua: "Перевірка 4. Паразит" },
      task: {
        id: "l11-s4",
        type: "single-choice",
        question: { pl: "Czym jest pasożytnictwo?", ua: "Що таке паразитизм?" },
        options: [
          { id: "a", label: { pl: "pobieranie pokarmu z żywego gospodarza, ze szkodą dla gospodarza", ua: "вбирання поживи з живого хазяїна, зі шкодою для хазяїна" } },
          { id: "b", label: { pl: "rozkładanie opadłych liści jak saprobiont", ua: "розкладання опалого листя як сапробіонт" } },
          { id: "c", label: { pl: "wytwarzanie tlenu w liściu", ua: "вироблення кисню в листку" } }
        ],
        answer: "a",
        explanation: { pl: "Żywy gospodarz. Nie mylić ze szczątkami.", ua: "Живий хазяїн. Не плутати з рештками." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Źródło pokarmu", ua: "Перевірка 5. Джерело поживи" },
      task: {
        id: "l11-s5",
        type: "true-false",
        question: { pl: "Cudzożywne organizmy biorą pokarm z innych organizmów lub ze szczątków — nie wytwarzają go fotosyntezą.", ua: "Гетеротрофні організми беруть поживу з інших організмів або з решток — не виробляють її фотосинтезом." },
        answer: true,
        explanation: { pl: "To domknięcie paszportu.", ua: "Це замикання паспорта." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l11-lancuch.png", {
        alt: { pl: "Łańcuch: roślina, zając, lis", ua: "Ланцюг: рослина, заєць, лисиця" },
        title: { pl: "Gotowy pokarm. Różne sposoby jego pobierania.", ua: "Готова пожива. Різні способи її вбирання." },
        prompt: { pl: "Ten sam prosty łańcuch trawa–zając–lis." }
      }),
      text: {
        pl: [
          "Cudzożywność: gotowy pokarm z innych organizmów lub ze szczątków. Samożywność: wytwarzanie (fotosynteza).",
          "Zwierzęta: roślinożerca, mięsożerca, wszystkożerca.",
          "Saprobiont — szczątki. Pasożyt — żywy gospodarz.",
          "Na początku większości łańcuchów pokarmowych jest samożywna roślina."
        ],
        ua: [
          "Гетеротрофне живлення: готова пожива. Саможивлення: вироблення (фотосинтез).",
          "Тварини: рослиноїдний, м’ясоїдний, всеїдний.",
          "Сапробіонт — рештки. Паразит — живий хазяїн.",
          "На початку більшості ланцюгів є саможивна рослина."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić cudzożywność wobec samożywności.", ua: "Можу пояснити гетеротрофне живлення супроти саможивлення." },
        { pl: "Potrafię podać przykłady trzech diet zwierząt.", ua: "Можу навести приклади трьох дієт тварин." },
        { pl: "Potrafię powiedzieć, czym jest odżywianie saprobiontyczne.", ua: "Можу сказати, що таке сапробіонтне живлення." },
        { pl: "Potrafię powiedzieć, czym jest pasożytnictwo.", ua: "Можу сказати, що таке паразитизм." },
        { pl: "Potrafię wyjaśnić, skąd cudzożywne biorą pokarm.", ua: "Можу пояснити, звідки гетеротрофи беруть поживу." }
      ]
    }
  ]
};
