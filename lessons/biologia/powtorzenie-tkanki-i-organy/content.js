function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      text: {
        pl: [
          "To nie nowa lekcja biologii. Powtarzasz cały dział IV: Tkanki i organy roślinne (lekcje 21–24).",
          "Najpierw krótka powtórka. Potem zadania jak w podręczniku „Wiesz czy nie wiesz?”. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок біології. Ти повторюєш увесь розділ IV: Тканини і органи рослин (уроки 21–24).",
          "Спочатку коротке повторення. Потім завдання як у підручнику «Знаєш чи не знаєш?». Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym dziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "Wyjaśnisz, czym jest tkanka i odróżnisz twórczą od stałych.", ua: "Поясниш, що таке тканина, і відрізниш твірну від сталих." },
        { pl: "Opiszesz korzeń: czepiec, wzrost, włośniki.", ua: "Опишеш корінь: чохлик, ріст, волоски." },
        { pl: "Podasz funkcje łodygi i pędu.", ua: "Назвеш функції стебла і пагона." },
        { pl: "Opiszesz liść: blaszka, unerwienie, szparki, fotosynteza i transpiracja.", ua: "Опишеш листок: пластинка, жилкування, продихи, фотосинтез і транспірацію." }
      ]
    },
    {
      type: "classification",
      heading: { pl: "Tkanki roślinne", ua: "Рослинні тканини" },
      visual: tree({
        layout: "nested",
        root: { pl: "tkanki", ua: "тканини" },
        groups: [
          {
            title: { pl: "twórcza", ua: "твірна" },
            items: [{ pl: "wzrost", ua: "ріст" }]
          },
          {
            title: { pl: "stałe", ua: "сталі" },
            items: [
              { pl: "okrywająca", ua: "покривна" },
              { pl: "miękisz", ua: "паренхіма" },
              { pl: "wzmacniająca", ua: "механічна" },
              { pl: "przewodząca", ua: "провідна" }
            ]
          }
        ]
      }),
      items: [
        { pl: "tkanka = zespół podobnych komórek o wspólnej funkcji", ua: "тканина = група подібних клітин зі спільною функцією" },
        { pl: "komórka → tkanka → organ (korzeń, łodyga, liść) → roślina", ua: "клітина → тканина → орган (корінь, стебло, листок) → рослина" }
      ],
      text: {
        pl: [
          ["", em("Tkanka twórcza"), " — komórki się dzielą, pęd i korzeń przyrastają."],
          "Tkanki stałe: okrywająca (skórka), miękisz (zapas, fotosynteza), wzmacniająca (podpora), przewodząca (soki)."
        ],
        ua: [
          ["", em("Твірна тканина"), " — клітини діляться, пагін і корінь приростають."],
          "Сталі тканини: покривна (шкірка), паренхіма (запас, фотосинтез), механічна (опора), провідна (соки)."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Korzeń", ua: "Корінь" },
      visual: vizGh("L22_Korzen", "l22-strefy.png", {
        alt: { pl: "Strefy korzenia: czepiec, wzrost, włośniki", ua: "Зони кореня: чохлик, ріст, волоски" },
        title: { pl: "Czubek: czepiec. Potem wzrost. Włośniki piją wodę.", ua: "Кінчик: чохлик. Потім ріст. Волоски п’ють воду." },
        prompt: { pl: "Istniejący schemat lekcji 22: strefy korzenia." }
      }),
      text: {
        pl: [
          "Korzeń utrzymuje roślinę w glebie i pobiera wodę z solami mineralnymi.",
          ["Na czubku ", em("czepiec"), " osłania stożek wzrostu. ", em("Włośniki"), " zwiększają powierzchnię pobierania."],
          "System palowy (np. dąb) albo wiązkowy (trawa, cebula). Niektóre korzenie spichrzowe gromadzą zapas (marchew).",
          "Nie myl korzenia z chwytnikami mchu — to dział V."
        ],
        ua: [
          "Корінь утримує рослину в ґрунті і бере воду з мінеральними солями.",
          ["На кінчику ", em("чохлик"), " захищає конус наростання. ", em("Волоски"), " збільшують поверхню вбирання."],
          "Стрижнева система (напр. дуб) або мичкувата (трава, цибуля). Деякі корені запасають поживу (морква).",
          "Не плутай корінь із ризоїдами моху — це розділ V."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Łodyga i pęd", ua: "Стебло і пагін" },
      visual: vizGh("L23_Lodyga", "l23-funkcje.png", {
        alt: { pl: "Funkcje łodygi", ua: "Функції стебла" },
        title: { pl: "Pęd = łodyga + liście. Łodyga podpiera i przewodzi.", ua: "Пагін = стебло + листки. Стебло підпирає і проводить." },
        prompt: { pl: "Istniejąca plansza lekcji 23: funkcje łodygi." }
      }),
      text: {
        pl: [
          ["", em("Pęd"), " to łodyga z liśćmi (i często pąkami). Węzły i międzywęźla."],
          "Łodyga unosi liście do światła i przewodzi wodę oraz cukry.",
          "Na przekroju drzewa słoje pokazują przyrost. Drewno jest twardsze — przewodzi wodę i usztywnia.",
          "Niektóre łodygi się przekształcają (bulwa ziemniaka, wąsy grochu) — nadal to łodyga, nie korzeń."
        ],
        ua: [
          ["", em("Пагін"), " — стебло з листками (і часто бруньками). Вузли і міжвузля."],
          "Стебло піднімає листки до світла і проводить воду та цукри.",
          "На перерізі дерева річні кільця показують приріст. Деревина твердіша — проводить воду і тримає форму.",
          "Деякі стебла видозмінюються (бульба картоплі, вусики гороху) — далі це стебло, не корінь."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Liść", ua: "Листок" },
      visual: vizGh("L24_Lisc", "l24-funkcje.png", {
        alt: { pl: "Funkcje liścia", ua: "Функції листка" },
        title: { pl: "Blaszka, unerwienie, szparki. Tu powstaje pokarm.", ua: "Пластинка, жилкування, продихи. Тут виникає пожива." },
        prompt: { pl: "Istniejąca plansza lekcji 24: funkcje liścia." }
      }),
      text: {
        pl: [
          "Części liścia: blaszka, ogonek, czasem przylistki. Unerwienie: siatkowate albo równoległe.",
          ["", em("Szparki"), " w skórce wymieniają gazy i wypuszczają parę wodną (", em("transpiracja"), ")."],
          "W miękiszu z chloroplastami zachodzi fotosynteza: cukier i tlen.",
          "Liść pojedynczy albo złożony. To nie kwiat — kwiat jest w dziale V."
        ],
        ua: [
          "Частини листка: пластинка, черешок, іноді прилистки. Жилкування: сітчасте або паралельне.",
          ["", em("Продихи"), " у шкірці обмінюють гази і випускають водяну пару (", em("транспірація"), ")."],
          "У паренхімі з хлоропластами відбувається фотосинтез: цукор і кисень.",
          "Листок простий або складний. Це не квітка — квітка в розділі V."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa działu", ua: "Слова розділу" },
      rows: [
        { pl: "tkanka twórcza / stała", ua: "твірна / стала тканина" },
        { pl: "czepiec / włośniki", ua: "чохлик / волоски" },
        { pl: "pęd / łodyga", ua: "пагін / стебло" },
        { pl: "słoje", ua: "річні кільця" },
        { pl: "blaszka liściowa", ua: "листкова пластинка" },
        { pl: "szparki", ua: "продихи" },
        { pl: "transpiracja", ua: "транспірація" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Tkanka", ua: "Перевірка 1. Тканина" },
      text: {
        pl: ["Jak w podręczniku: od komórki do organu."],
        ua: ["Як у підручнику: від клітини до органа."]
      },
      task: {
        id: "bio-r4-s1",
        type: "single-choice",
        question: { pl: "Czym jest tkanka?", ua: "Що таке тканина?" },
        options: [
          { id: "a", label: { pl: "zespół podobnych komórek o wspólnej funkcji", ua: "група подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "kapsyd wirusa", ua: "капсид вірусу" } },
          { id: "c", label: { pl: "grzybnia ze strzępek", ua: "грибниця з гіфів" } }
        ],
        answer: "a",
        explanation: {
          pl: "Z tkanek powstają organy: korzeń, łodyga, liść.",
          ua: "З тканин виникають органи: корінь, стебло, листок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Twórcza i stałe", ua: "Перевірка 2. Твірна і сталі" },
      task: {
        id: "bio-r4-s2",
        type: "true-false",
        question: { pl: "Tkanka twórcza ma komórki, które się dzielą. Tkanki stałe są już wyspecjalizowane do jednej pracy.", ua: "Твірна тканина має клітини, які діляться. Сталі тканини вже спеціалізовані до однієї роботи." },
        answer: true,
        explanation: {
          pl: "Stałe: okrywająca, miękiszowa, wzmacniająca, przewodząca.",
          ua: "Сталі: покривна, паренхіма, механічна, провідна."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Włośniki", ua: "Перевірка 3. Волоски" },
      task: {
        id: "bio-r4-s3",
        type: "single-choice",
        question: { pl: "Do czego służą włośniki?", ua: "Для чого служать кореневі волоски?" },
        options: [
          { id: "a", label: { pl: "zwiększają powierzchnię pobierania wody i soli", ua: "збільшують поверхню вбирання води і солей" } },
          { id: "b", label: { pl: "to szparki liścia do dwutlenku węgla", ua: "це продихи листка для вуглекислого газу" } },
          { id: "c", label: { pl: "to kapsyd wirusa", ua: "це капсид вірусу" } }
        ],
        answer: "a",
        explanation: {
          pl: "Włośniki są w strefie włośnikowej, nie na czubku (tam czepiec).",
          ua: "Волоски в зоні волосків, не на кінчику (там чохлик)."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Łodyga", ua: "Перевірка 4. Стебло" },
      task: {
        id: "bio-r4-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz funkcje łodygi.", ua: "Познач функції стебла." },
        options: [
          { id: "a", label: { pl: "unosi liście do światła", ua: "піднімає листки до світла" } },
          { id: "b", label: { pl: "przewodzi wodę i cukry", ua: "проводить воду і цукри" } },
          { id: "c", label: { pl: "namnaża wirusy w kapsydzie", ua: "розмножує віруси в капсиді" } },
          { id: "d", label: { pl: "usztywnia pęd (m.in. drewno, słoje)", ua: "тримає пагін (зокрема деревина, кільця)" } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Wirusy nie należą do łodygi. Słoje to przyrost drewna na przekroju.",
          ua: "Віруси не належать до стебла. Кільця — приріст деревини на перерізі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Szparki", ua: "Перевірка 5. Продихи" },
      task: {
        id: "bio-r4-s5",
        type: "single-choice",
        question: { pl: "Co robią szparki w skórce liścia?", ua: "Що роблять продихи в шкірці листка?" },
        options: [
          { id: "a", label: { pl: "wymieniają gazy i wypuszczają parę wodną (transpiracja)", ua: "обмінюють гази і випускають водяну пару (транспірація)" } },
          { id: "b", label: { pl: "to włośniki korzenia", ua: "це кореневі волоски" } },
          { id: "c", label: { pl: "to puszka zarodników mchu", ua: "це коробочка спор моху" } }
        ],
        answer: "a",
        explanation: {
          pl: "Włośniki są na korzeniu. Puszka mchu — dział V.",
          ua: "Волоски на корені. Коробочка моху — розділ V."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 6. Liść i pokarm", ua: "Перевірка 6. Листок і пожива" },
      task: {
        id: "bio-r4-s6",
        type: "true-false",
        question: { pl: "W liściu, w miękiszu z chloroplastami, zachodzi fotosynteza: powstaje cukier i tlen.", ua: "У листку, в паренхімі з хлоропластами, відбувається фотосинтез: виникає цукор і кисень." },
        answer: true,
        explanation: {
          pl: "Blaszka to „fabryka” pokarmu. Unerwienie donosi wodę i odprowadza cukry.",
          ua: "Пластинка — «фабрика» поживи. Жилки приносять воду і відводять цукри."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 7. Kolejność", ua: "Перевірка 7. Послідовність" },
      task: {
        id: "bio-r4-s7",
        type: "single-choice",
        question: { pl: "Ułóż od najmniejszego: komórka, tkanka, organ (np. liść), organizm rośliny.", ua: "Уклади від найменшого: клітина, тканина, орган (напр. листок), організм рослини." },
        options: [
          { id: "a", label: { pl: "organ → komórka → organizm → tkanka", ua: "орган → клітина → організм → тканина" } },
          { id: "b", label: { pl: "komórka → tkanka → organ → organizm", ua: "клітина → тканина → орган → організм" } },
          { id: "c", label: { pl: "tkanka → organizm → komórka → organ", ua: "тканина → організм → клітина → орган" } }
        ],
        answer: "b",
        explanation: {
          pl: "Ta sama hierarchia co w dziale I, tylko organy rośliny to korzeń, łodyga, liść.",
          ua: "Та сама ієрархія, що в розділі I, лише органи рослини — корінь, стебло, листок."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L21_Tkanki_roslinne", "l21-tkanka.png", {
        alt: { pl: "Tkanka roślinna", ua: "Рослинна тканина" },
        title: { pl: "Komórka → tkanka → organ. Korzeń, łodyga, liść.", ua: "Клітина → тканина → орган. Корінь, стебло, листок." },
        prompt: { pl: "Istniejący schemat lekcji 21: tkanka roślinna." }
      }),
      text: {
        pl: [
          "Tkanka twórcza dzieli się. Stałe: okrywająca, miękisz, wzmacniająca, przewodząca.",
          "Korzeń: czepiec, wzrost, włośniki — woda i sole.",
          "Pęd = łodyga + liście. Łodyga podpiera i przewodzi. Słoje — przyrost.",
          "Liść: blaszka, szparki, fotosynteza, transpiracja."
        ],
        ua: [
          "Твірна тканина ділиться. Сталі: покривна, паренхіма, механічна, провідна.",
          "Корінь: чохлик, ріст, волоски — вода і солі.",
          "Пагін = стебло + листки. Стебло підпирає і проводить. Кільця — приріст.",
          "Листок: пластинка, продихи, фотосинтез, транспірація."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      items: [
        { pl: "Jeśli coś było trudne — wróć do lekcji 21–24.", ua: "Якщо щось було важко — повернись до уроків 21–24." },
        { pl: "Potrafię nazwać tkanki roślinne i trzy organy.", ua: "Можу назвати рослинні тканини і три органи." },
        { pl: "Potrafię opisać strefy korzenia i funkcje łodygi.", ua: "Можу описати зони кореня і функції стебла." },
        { pl: "Potrafię powiedzieć, po co liściowi szparki i chloroplasty.", ua: "Можу сказати, навіщо листкові продихи і хлоропласти." },
        { pl: "Dział V to różnorodność roślin: mchy, paprocie, nago- i okrytonasienne.", ua: "Розділ V — різноманітність рослин: мохи, папороті, голо- і покритонасінні." }
      ]
    }
  ]
};
