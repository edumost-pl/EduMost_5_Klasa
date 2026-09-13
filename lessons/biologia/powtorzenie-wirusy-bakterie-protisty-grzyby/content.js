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
          "To nie nowa lekcja biologii. Powtarzasz cały dział III: Wirusy, bakterie, protisty i grzyby (lekcje 15–20).",
          "Najpierw krótka powtórka. Potem zadania jak w podręczniku „Wiesz czy nie wiesz?”. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок біології. Ти повторюєш увесь розділ III: Віруси, бактерії, протисти і гриби (уроки 15–20).",
          "Спочатку коротке повторення. Потім завдання як у підручнику «Знаєш чи не знаєш?». Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym dziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "Wymienisz pięć królestw i powiesz, dlaczego wirusy stoją obok.", ua: "Назвеш п’ять царств і скажеш, чому віруси стоять поряд." },
        { pl: "Odróżnisz wirusa od bakterii.", ua: "Відрізниш вірус від бактерії." },
        { pl: "Podasz przykłady pożytecznych i chorobotwórczych bakterii.", ua: "Наведеш приклади корисних і хвороботворних бактерій." },
        { pl: "Rozpoznasz protista, grzyba i porost.", ua: "Розпізнаєш протиста, гриба і лишайник." }
      ]
    },
    {
      type: "classification",
      heading: { pl: "Pięć królestw", ua: "П’ять царств" },
      visual: tree({
        layout: "fork",
        root: { pl: "królestwa", ua: "царства" },
        items: [
          { pl: "bakterie", ua: "бактерії" },
          { pl: "protisty", ua: "протисти" },
          { pl: "grzyby", ua: "гриби" },
          { pl: "rośliny", ua: "рослини" },
          { pl: "zwierzęta", ua: "тварини" }
        ],
        aside: { pl: "wirusy — poza", ua: "віруси — поза" },
        caption: { pl: "wirusy nie są komórkami", ua: "віруси не є клітинами" }
      }),
      items: [
        { pl: "pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta", ua: "п’ять царств: бактерії, протисти, гриби, рослини, тварини" },
        { pl: "wirusy nie mają budowy komórkowej — stoją obok systematyki", ua: "віруси не мають клітинної будови — стоять поряд із систематикою" }
      ],
      text: {
        pl: [
          "Klasyfikacja porządkuje organizmy. Najmniejsza jednostka, którą tu pamiętasz, to gatunek.",
          "Nazwa gatunku: dwa wyrazy (łacina). Człowiek: Homo sapiens.",
          "Wirusy nie są komórkami, więc nie wkładamy ich do żadnego królestwa."
        ],
        ua: [
          "Класифікація впорядковує організми. Найменша одиниця, яку тут пам’ятаєш, — вид.",
          "Назва виду: два слова (латина). Людина: Homo sapiens.",
          "Віруси не є клітинами, тож не кладемо їх до жодного царства."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Wirusy", ua: "Віруси" },
      visual: vizGh("L16_Wirusy", "l16-budowa.png", {
        alt: { pl: "Budowa wirusa: kwas nukleinowy i kapsyd", ua: "Будова вірусу: нуклеїнова кислота і капсид" },
        title: { pl: "Kwas nukleinowy w białkowym kapsydzie. Bez komórki.", ua: "Нуклеїнова кислота в білковому капсиді. Без клітини." },
        prompt: { pl: "Istniejący schemat lekcji 16: budowa wirusa." }
      }),
      text: {
        pl: [
          ["Wirus to nie komórka. Ma ", em("kwas nukleinowy"), " i ", em("kapsyd"), " (płaszcz białkowy)."],
          "Namnaża się tylko w komórce gospodarza. Sam nie oddycha i nie odżywia się.",
          "Choroby: grypa, ospa wietrzna, odra. Higiena i szczepienia pomagają.",
          ["", em("Antybiotyki nie działają na wirusy"), " — to leki przeciw bakteriom."]
        ],
        ua: [
          ["Вірус — не клітина. Має ", em("нуклеїнову кислоту"), " і ", em("капсид"), " (білкову оболонку)."],
          "Розмножується лише в клітині хазяїна. Сам не дихає і не живиться.",
          "Хвороби: грип, вітрянка, кір. Гігієна і щеплення допомагають.",
          ["", em("Антибіотики не діють на віруси"), " — це ліки проти бактерій."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Bakterie", ua: "Бактерії" },
      visual: vizGh("L17_Jak_zyja_bakterie", "l17-nic-dna.png", {
        alt: { pl: "Bakteria bez jądra, DNA w cytoplazmie", ua: "Бактерія без ядра, ДНК у цитоплазмі" },
        title: { pl: "Komórka bez jądra. DNA leży w cytoplazmie.", ua: "Клітина без ядра. ДНК лежить у цитоплазмі." },
        prompt: { pl: "Istniejący schemat lekcji 17: bakteria bez jądra." }
      }),
      text: {
        pl: [
          "Bakteria jest komórką, ale bez jądra. DNA pływa w cytoplazmie. Ma ścianę komórkową.",
          "Dzieli się szybko. Niektóre mają rzęski albo przetrwalniki.",
          "Pożyteczne: jogurt, kiszonki, bakterie w jelicie, użyźnianie gleby.",
          "Chorobotwórcze: angina, gruźlica. Higiena, pasteryzacja, szczepienia. Antybiotyk tylko na bakteryjne zakażenie — i nie na zapas."
        ],
        ua: [
          "Бактерія є клітиною, але без ядра. ДНК плаває в цитоплазмі. Має клітинну стінку.",
          "Ділиться швидко. Деякі мають джгутики або спори спокою.",
          "Корисні: йогурт, квашення, бактерії в кишківнику, удобрення ґрунту.",
          "Хвороботворні: ангіна, туберкульоз. Гігієна, пастеризація, щеплення. Антибіотик лише на бактеріальне зараження — і не про запас."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Protisty, grzyby, porosty", ua: "Протисти, гриби, лишайники" },
      visual: vizGh("L20_Grzyby_i_porosty", "l20-porost.png", {
        alt: { pl: "Porost: grzyb i glon razem", ua: "Лишайник: гриб і водорість разом" },
        title: { pl: "Porost = grzyb + glon. Grzyb to strzępki, nie korzeń.", ua: "Лишайник = гриб + водорість. Гриб — гіфи, не корінь." },
        prompt: { pl: "Istniejący schemat lekcji 20: budowa porostu." }
      }),
      text: {
        pl: [
          "Protisty to królestwo „rozmaitości”: pantofelek, euglena, ameba (pełzak), glony jednokomórkowe. Mają jądro.",
          ["Grzyb buduje ", em("grzybnię"), " ze ", em("strzępek"), ". Owocnik to kapelusz, który zbierasz. Grzyby są cudzożywne."],
          ["", em("Porost"), " to współżycie grzyba i glonu (albo sinicy). Wskaźnik czystości powietrza."],
          "Nieznanego grzyba nie jesz. To nie tkanka roślinna i nie korzeń — dział IV jest później."
        ],
        ua: [
          "Протисти — царство «різноманіття»: інфузорія-туфелька, евглена, амеба, одноклітинні водорості. Мають ядро.",
          ["Гриб будує ", em("грибницю"), " з ", em("гіфів"), ". Плодове тіло — шапинка, яку збираєш. Гриби гетеротрофні."],
          ["", em("Лишайник"), " — співжиття гриба і водорості (або ціанобактерії). Показник чистоти повітря."],
          "Невідомого гриба не їси. Це не рослинна тканина і не корінь — розділ IV пізніше."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa działu", ua: "Слова розділу" },
      rows: [
        { pl: "królestwo / gatunek", ua: "царство / вид" },
        { pl: "wirus / kapsyd", ua: "вірус / капсид" },
        { pl: "bakteria", ua: "бактерія" },
        { pl: "protisty", ua: "протисти" },
        { pl: "grzybnia / strzępki", ua: "грибниця / гіфи" },
        { pl: "porost", ua: "лишайник" },
        { pl: "antybiotyk", ua: "антибіотик" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Królestwa", ua: "Перевірка 1. Царства" },
      text: {
        pl: ["Jak w podręczniku: ile królestw organizmów pamiętasz?"],
        ua: ["Як у підручнику: скільки царств організмів пам’ятаєш?"]
      },
      task: {
        id: "bio-r3-s1",
        type: "single-choice",
        question: { pl: "Który zestaw to pięć królestw organizmów?", ua: "Який набір — п’ять царств організмів?" },
        options: [
          { id: "a", label: { pl: "wirusy, bakterie, protisty, grzyby, rośliny", ua: "віруси, бактерії, протисти, гриби, рослини" } },
          { id: "b", label: { pl: "bakterie, protisty, grzyby, rośliny, zwierzęta", ua: "бактерії, протисти, гриби, рослини, тварини" } },
          { id: "c", label: { pl: "tylko rośliny i zwierzęta", ua: "лише рослини і тварини" } }
        ],
        answer: "b",
        explanation: {
          pl: "Wirusy nie są królestwem — stoją obok, bo nie są komórkami.",
          ua: "Віруси не є царством — стоять поряд, бо не є клітинами."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Wirus", ua: "Перевірка 2. Вірус" },
      task: {
        id: "bio-r3-s2",
        type: "true-false",
        question: { pl: "Wirus nie jest komórką i namnaża się tylko w komórce gospodarza.", ua: "Вірус не є клітиною і розмножується лише в клітині хазяїна." },
        answer: true,
        explanation: {
          pl: "Kwas nukleinowy + kapsyd. Bez gospodarza wirus się nie namnaża.",
          ua: "Нуклеїнова кислота + капсид. Без хазяїна вірус не розмножується."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Bakteria", ua: "Перевірка 3. Бактерія" },
      task: {
        id: "bio-r3-s3",
        type: "single-choice",
        question: { pl: "Czym bakteria różni się od komórki zwierzęcej?", ua: "Чим бактерія відрізняється від тваринної клітини?" },
        options: [
          { id: "a", label: { pl: "nie ma jądra — DNA jest w cytoplazmie", ua: "не має ядра — ДНК у цитоплазмі" } },
          { id: "b", label: { pl: "ma chloroplasty jak liść", ua: "має хлоропласти, як листок" } },
          { id: "c", label: { pl: "to nie komórka, tylko kapsyd", ua: "це не клітина, лише капсид" } }
        ],
        answer: "a",
        explanation: {
          pl: "Bakteria jest komórką bez jądra. Kapsyd to wirus. Chloroplasty — komórka roślinna.",
          ua: "Бактерія — клітина без ядра. Капсид — вірус. Хлоропласти — рослинна клітина."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Antybiotyki", ua: "Перевірка 4. Антибіотики" },
      task: {
        id: "bio-r3-s4",
        type: "single-choice",
        question: { pl: "Na co działają antybiotyki?", ua: "На що діють антибіотики?" },
        options: [
          { id: "a", label: { pl: "na wirusy grypy i odry", ua: "на віруси грипу і кору" } },
          { id: "b", label: { pl: "na zakażenia bakteryjne — nie na wirusy i nie „na zapas”", ua: "на бактеріальні зараження — не на віруси і не «про запас»" } },
          { id: "c", label: { pl: "na wszystkie choroby, więc pijesz je przy kaszlu zawsze", ua: "на всі хвороби, тож п’єш їх при кашлі завжди" } }
        ],
        answer: "b",
        explanation: {
          pl: "Antybiotyk nie leczy grypy. Nadużywanie sprawia, że bakterie stają się oporne.",
          ua: "Антибіотик не лікує грип. Зловживання робить бактерії стійкими."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Protisty", ua: "Перевірка 5. Протисти" },
      task: {
        id: "bio-r3-s5",
        type: "single-choice",
        question: { pl: "Które organizmy należą do protistów?", ua: "Які організми належать до протистів?" },
        options: [
          { id: "a", label: { pl: "pantofelek, euglena, pełzak", ua: "туфелька, евглена, амеба" } },
          { id: "b", label: { pl: "sosna, dąb, mech", ua: "сосна, дуб, мох" } },
          { id: "c", label: { pl: "wirus grypy i wirus odry", ua: "вірус грипу і вірус кору" } }
        ],
        answer: "a",
        explanation: {
          pl: "Protisty mają jądro. Sosna to nagonasienne (dział V). Wirusy nie są protistami.",
          ua: "Протисти мають ядро. Сосна — голонасінні (розділ V). Віруси не є протистами."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 6. Grzyby", ua: "Перевірка 6. Гриби" },
      task: {
        id: "bio-r3-s6",
        type: "true-false",
        question: { pl: "Grzybnię budują strzępki. Owocnik to część, którą często nazywamy „grzybem” w lesie.", ua: "Грибницю будують гіфи. Плодове тіло — частина, яку часто називаємо «грибом» у лісі." },
        answer: true,
        explanation: {
          pl: "Kapelusz to owocnik. Pod ziemią pracuje grzybnia. Nieznanego grzyba nie jesz.",
          ua: "Шапинка — плодове тіло. Під землею працює грибниця. Невідомого гриба не їси."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 7. Porost", ua: "Перевірка 7. Лишайник" },
      task: {
        id: "bio-r3-s7",
        type: "single-choice",
        question: { pl: "Czym jest porost?", ua: "Що таке лишайник?" },
        options: [
          { id: "a", label: { pl: "współżycie grzyba i glonu (albo sinicy)", ua: "співжиття гриба і водорості (або ціанобактерії)" } },
          { id: "b", label: { pl: "korzeń mchu", ua: "корінь моху" } },
          { id: "c", label: { pl: "wirus w kapsydzie", ua: "вірус у капсиді" } }
        ],
        answer: "a",
        explanation: {
          pl: "Porosty bywają wskaźnikami czystego powietrza. Mech nie ma korzenia — to dział V.",
          ua: "Лишайники бувають показниками чистого повітря. Мох не має кореня — це розділ V."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L16_Wirusy", "l16-budowa.png", {
        alt: { pl: "Budowa wirusa", ua: "Будова вірусу" },
        title: { pl: "Wirus obok królestw. Bakteria — komórka bez jądra.", ua: "Вірус поряд із царствами. Бактерія — клітина без ядра." },
        prompt: { pl: "Istniejący schemat lekcji 16: budowa wirusa." }
      }),
      text: {
        pl: [
          "Pięć królestw. Wirusy poza nimi — nie są komórkami.",
          "Wirus: kwas nukleinowy + kapsyd. Antybiotyki nie na wirusy.",
          "Bakteria: komórka bez jądra. Bywają pożyteczne i chorobotwórcze.",
          "Protisty: pantofelek, euglena, pełzak. Grzyb: strzępki i owocnik.",
          "Porost = grzyb + glon."
        ],
        ua: [
          "П’ять царств. Віруси поза ними — не є клітинами.",
          "Вірус: нуклеїнова кислота + капсид. Антибіотики не на віруси.",
          "Бактерія: клітина без ядра. Бувають корисні і хвороботворні.",
          "Протисти: туфелька, евглена, амеба. Гриб: гіфи і плодове тіло.",
          "Лишайник = гриб + водорість."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      items: [
        { pl: "Jeśli coś było trudne — wróć do lekcji 15–20.", ua: "Якщо щось було важко — повернись до уроків 15–20." },
        { pl: "Potrafię wymienić pięć królestw i odłożyć wirusy na bok.", ua: "Можу назвати п’ять царств і відкласти віруси набік." },
        { pl: "Potrafię odróżnić wirusa od bakterii i powiedzieć, kiedy antybiotyk.", ua: "Можу відрізнити вірус від бактерії і сказати, коли антибіотик." },
        { pl: "Potrafię rozpoznać protista, grzyba i porost.", ua: "Можу розпізнати протиста, гриба і лишайник." },
        { pl: "Dział IV to tkanki i organy roślin — nie wirusy od nowa.", ua: "Розділ IV — тканини і органи рослин, не віруси знову." }
      ]
    }
  ]
};
