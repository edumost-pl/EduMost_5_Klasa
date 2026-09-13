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
      heading: { pl: "Konflikt papiestwa z cesarstwem", ua: "Конфлікт папства з імперією" },
      formula: "1054 · 1077 · 1122",
      text: {
        pl: [
          "Z lekcji 19 znasz Ottona i koronę cesarską. Dziś dwa spory: Wschód–Zachód w Kościele oraz papież kontra cesarz.",
          "Na osi trzy daty tego tematu: 1054 — schizma, 1077 — Canossa, 1122 — Wormacja."
        ],
        ua: [
          "З уроку 19 знаєш Оттона і імператорську корону. Сьогодні дві суперечки: Схід–Захід у Церкві та папа проти імператора.",
          "На осі три дати цієї теми: 1054 — схизма, 1077 — Каносса, 1122 — Вормс."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić, dlaczego doszło do rozłamu w chrześcijaństwie (1054)", ua: "пояснити, чому стався розкол у християнстві (1054)" },
        { pl: "podać skutki wielkiej schizmy wschodniej: katolicy i prawosławni", ua: "подати наслідки великої східної схизми: католики і православні" },
        { pl: "powiedzieć, o co toczył się spór o inwestyturę (Grzegorz VII i Henryk IV)", ua: "сказати, про що була суперечка за інвеституру (Григорій VII і Генріх IV)" },
        { pl: "wskazać, jak zakończono spór: Canossa 1077 i konkordat w Wormacji 1122", ua: "вказати, як закінчили суперечку: Каносса 1077 і конкордат у Вормсі 1122" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Dwa chrześcijaństwa", ua: "Два християнства" },
      formula: "łacina · greka",
      visual: gh("169", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Europy: Zachód z Rzymem i łaciną, Wschód z Konstantynopolem i greką",
          ua: "Мапа Європи: Захід з Римом і латиною, Схід з Константинополем і грекою"
        },
        title: { pl: "Obrzędy, język, kto na czele", ua: "Обряди, мова, хто на чолі" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Europa XI w. LEWA plama „Zachód”: RZYM, podpis „łacina, papież”. PRAWA plama „Wschód”: KONSTANTYNOPOL, podpis „greka, patriarcha”. Tytuł: „różnice w chrześcijaństwie”. Legenda. BEZ armii, BEZ granic UE. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа: Рим — латина, папа. Константинополь — грека, патріарх. Без війська."
        }
      }),
      text: {
        pl: [
          ["Około X–XI wieku chrześcijanie na ", em("Zachodzie"), " i ", em("Wschodzie"), " różnili się obrzędami. Msza: Zachód — ", em("łacina"), ", Wschód — ", em("greka"), "."],
          ["Spór o ", em("dogmaty"), " (prawdy wiary), np. o Ducha Świętego. I o to, kto stoi na czele: ", em("papież"), " w Rzymie czy ", em("patriarcha"), " w Konstantynopolu."]
        ],
        ua: [
          ["Близько X–XI століття християни на ", em("Заході"), " і ", em("Сході"), " різнилися обрядами. Служба: Захід — ", em("латина"), ", Схід — ", em("грека"), "."],
          ["Суперечка про ", em("догмати"), " (істини віри), напр. про Святого Духа. І про те, хто на чолі: ", em("папа"), " в Римі чи ", em("патріарх"), " у Константинополі."]
        ]
      },
      task: {
        id: "h20-jezyk",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jakim językiem odprawiano mszę na Zachodzie, a jakim na Wschodzie?",
          ua: "Якою мовою правили службу на Заході, а якою на Сході?"
        },
        options: [
          { id: "a", label: { pl: "Zachód — łacina; Wschód — greka", ua: "Захід — латина; Схід — грека" } },
          { id: "b", label: { pl: "Zachód — greka; Wschód — łacina", ua: "Захід — грека; Схід — латина" } },
          { id: "c", label: { pl: "wszędzie tylko arabski", ua: "скрізь лише арабська" } }
        ],
        answer: "a",
        hint: {
          pl: "Rzym = łacina (lekcja 15). Konstantynopol = greka (lekcja 17).",
          ua: "Рим = латина (урок 15). Константинополь = грека (урок 17)."
        },
        explanation: {
          pl: "KN: różnice Wschód–Zachód. Arabski = islam, lekcja 18.",
          ua: "KN: відмінності Схід–Захід. Арабська = іслам, урок 18."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wielka schizma — 1054", ua: "Велика схизма — 1054" },
      formula: "1054 n.e.",
      timelineYear: 1054,
      visual: gh("170", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa 1054: katolicy na zachodzie, prawosławni na wschodzie",
          ua: "Мапа 1054: католики на заході, православні на сході"
        },
        title: { pl: "Rozłam, który trwa", ua: "Розкол, що триває" },
        prompt: {
          pl: "Szkolna mapa 16:9. Linia podziału. Zachód podpis „KATOLICY”, Wschód „PRAWOSŁAWNI”. Kropki RZYM i KONSTANTYNOPOL. Data 1054. Tytuł PL: „wielka schizma wschodnia”. BEZ mieczy, BEZ ognia. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа 1054: католики | православні. Рим і Константинополь. Без зброї."
        }
      }),
      text: {
        pl: [
          ["W ", em("1054"), " patriarcha zamykał kościoły obrządku zachodniego w Konstantynopolu. Papież rzucił ", em("ekskomunikę"), " (wykluczenie ze wspólnoty) — i patriarcha odpowiedział tym samym."],
          ["To ", em("wielka schizma wschodnia"), ": Wschód — ", em("prawosławni"), ", Zachód — ", em("katolicy"), " (uznają papieża). Podział trwa do dziś."]
        ],
        ua: [
          ["Року ", em("1054"), " патріарх закривав храми західного обряду в Константинополі. Папа кинув ", em("екскомуніку"), " (виключення зі спільноти) — і патріарх відповів тим самим."],
          ["Це ", em("велика східна схизма"), ": Схід — ", em("православні"), ", Захід — ", em("католики"), " (визнають папу). Поділ триває досі."]
        ]
      },
      task: {
        id: "h20-1054",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co wydarzyło się w 1054 n.e.?",
          ua: "Що сталося 1054 н.е.?"
        },
        options: [
          { id: "a", label: { pl: "wielka schizma wschodnia — podział na Kościół katolicki i prawosławny", ua: "велика східна схизма — поділ на католицьку і православну Церкву" } },
          { id: "b", label: { pl: "hidżra Mahometa", ua: "хіджра Мухаммада" } },
          { id: "c", label: { pl: "układ w Verdun", ua: "угода в Вердені" } }
        ],
        answer: "a",
        hint: {
          pl: "Na osi 1054 stoi po Ottonie (962), przed Canossą (1077).",
          ua: "На осі 1054 стоїть після Оттона (962), перед Каноссою (1077)."
        },
        explanation: {
          pl: "622 = lekcja 18. 843 = lekcja 19. 1054 = ta lekcja.",
          ua: "622 = урок 18. 843 = урок 19. 1054 = цей урок."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Grzegorz VII", ua: "Григорій VII" },
      formula: "XI w. · Rzym",
      visual: gh("171", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta papieża Grzegorza VII: cztery punkty, spokojny portret, bez kpin",
          ua: "Картка папи Григорія VII: чотири пункти, спокійний портрет, без кпин"
        },
        title: { pl: "Papież, który chce niezależnego Kościoła", ua: "Папа, що хоче незалежної Церкви" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny portret papieża (mitra, szaty), dzień, BEZ karykatury. Cztery punkty PL: „kto — Grzegorz VII, papież”; „skąd — Rzym”; „lata — XI wiek”; „wsławił się — reforma Kościoła, chciał mianować biskupów sam, spór z Henrykiem IV”. Styl Nowej Ery.",
          ua: "Картка Григорія VII: Рим; XI ст.; реформа; інвеститура. Без карикатури."
        }
      }),
      text: {
        pl: [
          ["W drugiej połowie XI wieku papieżem został ", em("Grzegorz VII"), ". Chciał reformy: duchowieństwo wolne od władzy świeckiej."],
          ["Uważał, że papież stoi nad królami, może usunąć cesarza z tronu i tylko on mianuje biskupów."]
        ],
        ua: [
          ["У другій половині XI століття папою став ", em("Григорій VII"), ". Хотів реформи: духовенство вільне від світської влади."],
          ["Вважав, що папа стоїть над королями, може скинути імператора з трону і лише він призначає єпископів."]
        ]
      },
      task: {
        id: "h20-grzegorz",
        type: "true-false",
        level: "A",
        question: {
          pl: "Grzegorz VII chciał, żeby to papież mianował biskupów, a nie cesarz — prawda czy fałsz?",
          ua: "Григорій VII хотів, щоб єпископів призначав папа, а не імператор — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "To sedno sporu o inwestyturę. Nie myl z patriarchą z 1054.",
          ua: "Це суть суперечки за інвеституру. Не плутай з патріархом з 1054."
        },
        explanation: {
          pl: "Prawda. KN: postać Grzegorza VII. Cesarz = następny ekran.",
          ua: "Правда. KN: постать Григорія VII. Імператор = наступний екран."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Henryk IV", ua: "Генріх IV" },
      formula: "XI w. · Rzesza",
      visual: gh("172", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta cesarza Henryka IV: cztery punkty, spokojna rzeźba w koronie",
          ua: "Картка імператора Генріха IV: чотири пункти, спокійна різьба в короні"
        },
        title: { pl: "Cesarz, który nie odda biskupów", ua: "Імператор, що не віддасть єпископів" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojna rzeźba lub miniatura cesarza w koronie, berło, dzień, BEZ bitwy. Cztery punkty PL: „kto — Henryk IV, cesarz rzymski i król niemiecki”; „skąd — Rzesza Niemiecka”; „lata — XI wiek”; „wsławił się — spór z Grzegorzem VII, Canossa, potem wygnał papieża z Rzymu”. Styl Nowej Ery.",
          ua: "Картка Генріха IV: Німецька імперія; XI ст.; Каносса. Без битви."
        }
      }),
      text: {
        pl: [
          ["", em("Henryk IV"), " — cesarz rzymski i król niemiecki (lekcja 19: Rzesza). Zaniepokoił się Grzegorzem VII."],
          ["Skłonił niemieckich biskupów do buntu przeciw papieżowi. To druga strona sporu: władza świecka kontra Kościół."]
        ],
        ua: [
          ["", em("Генріх IV"), " — римський імператор і німецький король (урок 19: імперія). Стривожився Григорієм VII."],
          ["Схилив німецьких єпископів до бунту проти папи. Це другий бік суперечки: світська влада проти Церкви."]
        ]
      },
      task: {
        id: "h20-henryk",
        type: "true-false",
        level: "A",
        question: {
          pl: "Henryk IV był cesarzem, który zbuntował biskupów przeciw Grzegorzowi VII — prawda czy fałsz?",
          ua: "Генріх IV був імператором, який підбурив єпископів проти Григорія VII — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Cesarz = korona. Papież = Grzegorz. Nie Otton z 962.",
          ua: "Імператор = корона. Папа = Григорій. Не Оттон з 962."
        },
        explanation: {
          pl: "Prawda. KN: postać Henryka IV. Otton = lekcja 19.",
          ua: "Правда. KN: постать Генріха IV. Оттон = урок 19."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Inwestytura", ua: "Інвеститура" },
      formula: "biskup · ziemia",
      visual: gh("173", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: kto mianuje biskupa i kto nadaje mu ziemię",
          ua: "Схема: хто призначає єпископа і хто наділяє його землею"
        },
        title: { pl: "Urząd i majątek razem", ua: "Уряд і маєток разом" },
        prompt: {
          pl: "Szkolna infografika 16:9. Środek: biskup z pastorałem. Strzałka od papieża „mianowanie”. Strzałka od cesarza „ziemia / dochody”. Tytuł: „inwestytura”. Podpis: „spór = kto wybiera biskupów”. BEZ walki na pięści. Styl Nowej Ery.",
          ua: "Схема: папа призначає, імператор дає землю. Підпис інвеститура."
        }
      }),
      text: {
        pl: [
          ["", em("Inwestytura"), " to prawo decydowania, kto zostanie biskupem. Z urzędem szła ziemia i duże dochody — dlatego królom bardzo na tym zależało."],
          ["Władcy świeccy wskazywali biskupów i mieli wpływ na Kościół. Grzegorz VII ogłosił: cesarska inwestytura jest nieważna."]
        ],
        ua: [
          ["", em("Інвеститура"), " — право вирішувати, хто стане єпископом. З урядом ішла земля і великі доходи — тому королям на цьому залежало."],
          ["Світські володарі вказували єпископів і мали вплив на Церкву. Григорій VII оголосив: імператорська інвеститура недійсна."]
        ]
      },
      task: {
        id: "h20-inwest",
        type: "single-choice",
        level: "B",
        question: {
          pl: "O co toczył się spór o inwestyturę?",
          ua: "Про що була суперечка за інвеституру?"
        },
        options: [
          { id: "a", label: { pl: "o to, kto mianuje biskupów (z urzędem szła ziemia)", ua: "про те, хто призначає єпископів (з урядом ішла земля)" } },
          { id: "b", label: { pl: "o to, czy Henryk IV zostanie papieżem", ua: "про те, чи Генріх IV стане папою" } },
          { id: "c", label: { pl: "o pasowanie rycerzy w Rzeszy", ua: "про посвяту лицарів в імперії" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie korona papieska dla cesarza. Urząd kościelny + ziemia.",
          ua: "Не папська корона для імператора. Церковний уряд + земля."
        },
        explanation: {
          pl: "KN: przyczyna sporu. Opcje b i c to pułapki z karty pracy.",
          ua: "KN: причина суперечки. Варіанти b і c — пастки з картки."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Canossa — 1077", ua: "Каносса — 1077" },
      formula: "1077 n.e.",
      timelineYear: 1077,
      visual: gh("174", {
        kind: "image-placeholder",
        alt: {
          pl: "Cesarz w prostym płaszczu klęczy przed papieżem w Canossie, spokój, bez szyderstwa",
          ua: "Імператор у простому плащі клечить перед папою в Каноссі, спокій, без глузування"
        },
        title: { pl: "Pokora, potem klątwa zdjęta", ua: "Покора, потім відлучення знято" },
        prompt: {
          pl: "Szkolny slajd 16:9. Zamek w Italii, zima w tle ale BEZ tortury śniegiem. Cesarz w prostym płaszczu klęczy; papież siedzi spokojnie, bez uśmiechu-szyderstwa. Data 1077, podpis „Canossa”. Etykieta: „okazać pokorę → zdjęcie klątwy”. BEZ krwi. Styl Nowej Ery.",
          ua: "Каносса 1077: імператор клечить, папа спокійний. Без глузування і без крові."
        }
      }),
      text: {
        pl: [
          ["Papież nałożył na cesarza ", em("ekskomunikę"), ": poddani mogli wypowiedzieć posłuszeństwo. W ", em("1077"), " Henryk IV poszedł do ", em("Canossy"), " we Włoszech i okazał pokorę. Papież zdjął klątwę."],
          ["Potem cesarz wrócił do Niemiec, rozprawił się z buntownikami, wyruszył do Italii i ", em("wygnał Grzegorza VII z Rzymu"), ". Spór jeszcze nie był skończony."]
        ],
        ua: [
          ["Папа наклав на імператора ", em("екскомуніку"), ": піддані могли відмовити в покорі. Року ", em("1077"), " Генріх IV пішов до ", em("Каносси"), " в Італії і виявив покору. Папа зняв відлучення."],
          ["Потім імператор повернувся до Німеччини, розправився з бунтівниками, рушив до Італії і ", em("вигнав Григорія VII з Рима"), ". Суперечка ще не скінчилася."]
        ]
      },
      task: {
        id: "h20-1077",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co stało się w Canossie w 1077, a co potem?",
          ua: "Що сталося в Каноссі 1077 року, а що потім?"
        },
        options: [
          { id: "a", label: { pl: "cesarz okazał pokorę, papież zdjął klątwę; później Henryk IV wygnał Grzegorza VII z Rzymu", ua: "імператор виявив покору, папа зняв відлучення; пізніше Генріх IV вигнав Григорія VII з Рима" } },
          { id: "b", label: { pl: "w 1077 podpisano konkordat w Wormacji", ua: "1077 підписали конкордат у Вормсі" } },
          { id: "c", label: { pl: "w 1077 Otton I został cesarzem", ua: "1077 Оттон I став імператором" } }
        ],
        answer: "a",
        hint: {
          pl: "Canossa ≠ koniec historii. Wormacja to 1122. Otton = 962.",
          ua: "Каносса ≠ кінець історії. Вормс — 1122. Оттон = 962."
        },
        explanation: {
          pl: "KN: 1077 na osi. Idiom „pójść do Canossy” = ukorzyć się — challenge.",
          ua: "KN: 1077 на осі. Ідіома «піти до Каносси» = упокоритися — challenge."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Konkordat w Wormacji — 1122", ua: "Конкордат у Вормсі — 1122" },
      formula: "1122 n.e.",
      timelineYear: 1122,
      visual: gh("175", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwie kolumny porozumienia: papież mianuje biskupów, cesarz nadaje ziemię",
          ua: "Дві колонки угоди: папа призначає єпископів, імператор дає землю"
        },
        title: { pl: "Porozumienie, nie jedna władza", ua: "Угода, не одна влада" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie kolumny. LEWA „papież”: mianuje biskupów zgodnie z prawem kościelnym. PRAWA „cesarz”: nadaje majątek ziemski; biskup składa przysięgę wierności. Tytuł: „1122 — konkordat w Wormacji”. Mały pergamin bez drobnego pisma do czytania. BEZ bitwy. Styl Nowej Ery.",
          ua: "Дві колонки 1122: папа призначає, імператор дає землю."
        }
      }),
      text: {
        pl: [
          ["W ", em("1122"), " w ", em("Wormacji"), " zawarto ", em("konkordat"), " — porozumienie. Cesarz zrzekł się mianowania biskupów; wybór według prawa kościelnego, zatwierdza papież."],
          ["Cesarz zachował nadawanie ziemi. Dostojnik, by dostać majątek, przysięgał cesarzowi wierność. Tak zakończono spór o inwestyturę."]
        ],
        ua: [
          ["Року ", em("1122"), " у ", em("Вормсі"), " уклали ", em("конкордат"), " — угоду. Імператор відмовився призначати єпископів; вибір за церковним правом, затверджує папа."],
          ["Імператор зберіг надання землі. Сановник, щоб дістати маєток, присягав імператорові на вірність. Так закінчили суперечку за інвеституру."]
        ]
      },
      task: {
        id: "h20-1122",
        type: "true-false",
        level: "B",
        question: {
          pl: "Po 1122 papież mianował biskupów, a cesarz nadal nadawał im ziemię — prawda czy fałsz?",
          ua: "Після 1122 папа призначав єпископів, а імператор і далі давав їм землю — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Podział: urząd od papieża, ziemia od cesarza.",
          ua: "Поділ: уряд від папи, земля від імператора."
        },
        explanation: {
          pl: "Prawda. KN: jak rozwiązano spór. Nie „cesarz został papieżem”.",
          ua: "Правда. KN: як розв’язали суперечку. Не «імператор став папою»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Cerkiew i ikonostas", ua: "Церква і іконостас" },
      formula: "prawosławie",
      visual: gh("176", {
        kind: "image-placeholder",
        alt: {
          pl: "Wnętrze cerkwi z ikonostasem — ścianą ikon — spokojne zdjęcie",
          ua: "Інтер’єр православної церкви з іконостасом — стіною ікон — спокійне фото"
        },
        title: { pl: "Świątynia Wschodu", ua: "Храм Сходу" },
        prompt: {
          pl: "Szkolny slajd 16:9. Wnętrze cerkwi: złoty IKONOSTAS (ściana ikon), podpis „ikonostas — oddziela wiernych od części dla kapłanów”. Małe zdjęcie zewnątrz: kopuły, podpis „cerkiew”. Tytuł: „miejsce modlitwy prawosławnych”. BEZ tłumu w transie. Styl Nowej Ery.",
          ua: "Іконостас і підпис церква. Спокійне інтер’єрне фото."
        }
      }),
      text: {
        pl: [
          ["Świątynia prawosławna to ", em("cerkiew"), ". ", em("Ikonostas"), " to ściana z ikonami między wiernymi a częścią dla kapłanów."],
          ["Prawosławni nie uznają zwierzchnictwa papieża. Księża mogą zakładać rodziny; celibat dotyczy biskupów. Dziś najwięcej wyznawców jest w Europie Wschodniej."]
        ],
        ua: [
          ["Православний храм — ", em("церква"), " (cerkiew). ", em("Іконостас"), " — стіна з іконами між вірянами і частиною для священиків."],
          ["Православні не визнають зверхності папи. Священики можуть мати сім’ї; целібат стосується єпископів. Нині найбільше вірян у Східній Європі."]
        ]
      },
      task: {
        id: "h20-cerkiew",
        type: "true-false",
        level: "C",
        question: {
          pl: "Cerkiew to świątynia prawosławna, a ikonostas to ściana z ikonami — prawda czy fałsz?",
          ua: "Церква (cerkiew) — православний храм, а іконостас — стіна з іконами — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Kościół (budynek) na Zachodzie; cerkiew na Wschodzie. Nie myl z meczetem z lekcji 18.",
          ua: "Костел/церква на Заході; cerkiew на Сході. Не плутай з мечеттю з уроку 18."
        },
        explanation: {
          pl: "Prawda. Film: prawosławie dziś. Meczet = islam.",
          ua: "Правда. Фільм: православ’я сьогодні. Мечеть = іслам."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "schizma / wielka schizma wschodnia — rozłam; 1054: katolicy i prawosławni", ua: "схизма / велика східна схизма — розкол; 1054: католики і православні" },
        { pl: "papież / patriarcha — biskup Rzymu / biskup Konstantynopola", ua: "папа / патріарх — єпископ Рима / єпископ Константинополя" },
        { pl: "ekskomunika — wykluczenie ze wspólnoty wiernych", ua: "екскомуніка — виключення зі спільноти вірян" },
        { pl: "inwestytura — prawo mianowania biskupów (z urzędem szła ziemia)", ua: "інвеститура — право призначати єпископів (з урядом ішла земля)" },
        { pl: "konkordat w Wormacji (1122) — porozumienie papieża z cesarzem", ua: "конкордат у Вормсі (1122) — угода папи з імператором" },
        { pl: "cerkiew / ikonostas — świątynia prawosławna / ściana z ikonami", ua: "церква / іконостас — православний храм / стіна з іконами" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„W 622 patriarcha koronował Karola Wielkiego w Mekce. Schizma to 843 w Verdun. Inwestytura znaczy, że Henryk IV został papieżem. Konkordat w Wormacji podpisano w 395.”",
        ua: "«Року 622 патріарх коронував Карла Великого в Мецці. Схизма — це 843 у Вердені. Інвеститура означає, що Генріх IV став папою. Конкордат у Вормсі підписали 395 року.»"
      },
      text: {
        pl: [
          "622 = hidżra. Karol = 800, papież w Rzymie. 843 = Verdun. 1054 = schizma. Inwestytura = mianowanie biskupów. 1122 = Wormacja. 395 = podział cesarstwa rzymskiego."
        ],
        ua: [
          "622 = хіджра. Карл = 800, папа в Римі. 843 = Верден. 1054 = схизма. Інвеститура = призначення єпископів. 1122 = Вормс. 395 = поділ Римської імперії."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, czym była wielka schizma wschodnia i o co spierali się Grzegorz VII z Henrykiem IV. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, чим була велика східна схизма і про що сперечалися Григорій VII з Генріхом IV. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1054, katolicy i prawosławni; inwestytura, 1077, 1122."
        ],
        ua: [
          "Підказка: 1054, католики і православні; інвеститура, 1077, 1122."
        ]
      },
      task: {
        id: "h20-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje schizmę i spór o inwestyturę?",
          ua: "Яке речення охоплює схизму і суперечку за інвеституру?"
        },
        options: [
          { id: "a", label: { pl: "W 1054 Kościół rozdzielił się na katolicki i prawosławny; w XI w. papież i cesarz spierali się, kto mianuje biskupów — koniec w 1122 w Wormacji", ua: "Року 1054 Церква розділилася на католицьку і православну; в XI ст. папа й імператор сперечалися, хто призначає єпископів — кінець 1122 у Вормсі" } },
          { id: "b", label: { pl: "W 1054 Mahomet ogłosił islam, a Otton I podzielił Franków", ua: "Року 1054 Мухаммад проголосив іслам, а Оттон I поділив франків" } },
          { id: "c", label: { pl: "Schizma to hidżra, a inwestytura to pięć filarów", ua: "Схизма — це хіджра, а інвеститура — п’ять стовпів" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa konflikty lekcji: Wschód–Zachód oraz papież–cesarz.",
          ua: "Дві суперечки уроку: Схід–Захід і папа–імператор."
        },
        explanation: {
          pl: "Islam i filary = lekcja 18. Otton i Frankowie = lekcja 19.",
          ua: "Іслам і стовпи = урок 18. Оттон і франки = урок 19."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Canossa i rachunek lat", ua: "Каносса і рахунок років" },
      task: {
        id: "h20-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "„Pójść do Canossy” znaczy ukorzyć się. Ile lat minęło od podziału cesarstwa (395) do schizmy (1054)?",
          ua: "«Піти до Каносси» означає упокоритися. Скільки років минуло від поділу імперії (395) до схизми (1054)?"
        },
        options: [
          { id: "a", label: { pl: "1054 − 395 = 659 lat; idiom Canossy to pokora, nie „zwycięstwo papieża na zawsze”", ua: "1054 − 395 = 659 років; ідіома Каносси — покора, не «перемога папи назавжди»" } },
          { id: "b", label: { pl: "wystarczy dodać 476 do 800", ua: "досить додати 476 до 800" } },
          { id: "c", label: { pl: "Canossa to rok hidżry", ua: "Каносса — рік хіджри" } }
        ],
        answer: "a",
        hint: {
          pl: "Odejmij daty. Po Canossie cesarz i tak wygnał papieża.",
          ua: "Відніми дати. Після Каносси імператор усе одно вигнав папу."
        },
        explanation: {
          pl: "Chrześcijaństwo: I w. (lekcja 16). 395 → 1054 ≈ 6,5 wieku. Idiom zostaje w polszczyźnie.",
          ua: "Християнство: I ст. (урок 16). 395 → 1054 ≈ 6,5 століття. Ідіома лишається в мові."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h20-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 1054 · 1077 · 1122",
          ua: "Добери: 1054 · 1077 · 1122"
        },
        options: [
          { id: "a", label: { pl: "1054 — schizma; 1077 — Canossa; 1122 — konkordat w Wormacji", ua: "1054 — схизма; 1077 — Каносса; 1122 — конкордат у Вормсі" } },
          { id: "b", label: { pl: "1054 — Verdun; 1077 — hidżra; 1122 — 800", ua: "1054 — Верден; 1077 — хіджра; 1122 — 800" } },
          { id: "c", label: { pl: "1054 — 1453; 1077 — 962; 1122 — 476", ua: "1054 — 1453; 1077 — 962; 1122 — 476" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty z osi tej lekcji.",
          ua: "Три дати з осі цього уроку."
        },
        explanation: {
          pl: "To KN. Inne lata = lekcje 17–19.",
          ua: "Це KN. Інші роки = уроки 17–19."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Wschód nie uznawał wyższości papieża nad patriarchą. Różnice dotyczyły też prawd wiary.",
          ["papieża", "patriarchą"],
          "Схід не визнавав зверхності папи над патріархом. Відмінності стосувалися також істин віри.",
          ["папи", "патріархом"]
        ),
        mark(
          "1054 — wielka schizma wschodnia: katolicy i prawosławni. Podział trwa do dziś.",
          ["1054", "wielka schizma wschodnia"],
          "1054 — велика східна схизма: католики і православні. Поділ триває досі.",
          ["1054", "велика східна схизма"]
        ),
        mark(
          "XI w.: spór o inwestyturę (Grzegorz VII i Henryk IV). Canossa 1077, potem papież wygnany z Rzymu.",
          ["inwestyturę", "Canossa", "1077"],
          "XI ст.: суперечка за інвеституру (Григорій VII і Генріх IV). Каносса 1077, потім папу вигнали з Рима.",
          ["інвеституру", "Каносса", "1077"]
        ),
        mark(
          "1122 — konkordat w Wormacji: papież mianuje biskupów, cesarz nadaje ziemię.",
          ["1122", "Wormacji"],
          "1122 — конкордат у Вормсі: папа призначає єпископів, імператор дає землю.",
          ["1122", "Вормсі"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: wyprawy krzyżowe — religia, wojna i spotkanie Wschodu z Zachodem.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji (ok. 4 minuty)."
        ],
        ua: [
          "Наступний урок: хрестові походи — релігія, війна і зустріч Сходу із Заходом.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків (бл. 4 хвилин)."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "U_VC_-jcn7c",
        title: {
          pl: "Krótkie Lekcje: Konflikt papiestwa z cesarstwem",
          ua: "Короткі уроки: Конфлікт папства з імперією"
        }
      }
    }
  ]
};
