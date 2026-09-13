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
      heading: { pl: "W starożytnym Izraelu", ua: "У стародавньому Ізраїлі" },
      formula: "Palestyna · monoteizm",
      text: {
        pl: [
          "W Egipcie pełno było bogów. U Izraelitów brzmiało inne zdanie: jest jeden Bóg.",
          "Dziś: początki ludu, Dawid i Salomon, niewola babilońska, judaizm, Świątynia Jerozolimska — i krótko o Izraelu dziś."
        ],
        ua: [
          "У Єгипті було багато богів. В ізраїльтян звучало інше речення: є один Бог.",
          "Сьогодні: початки народу, Давид і Соломон, вавилонська неволя, юдаїзм, Єрусалимський храм — і коротко про Ізраїль сьогодні."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, skąd przybyli Izraelici i gdzie osiedli", ua: "сказати, звідки прийшли ізраїльтяни і де оселилися" },
        { pl: "opisać okres świetności za Dawida i Salomona", ua: "описати добу розквіту за Давида і Соломона" },
        { pl: "wyjaśnić judaizm: Jahwe, Tora, Dekalog, Świątynia", ua: "пояснити юдаїзм: Ягве, Тора, Декалог, Храм" },
        { pl: "powiedzieć, czym była niewola babilońska", ua: "сказати, чим була вавилонська неволя" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Początki dziejów Izraelitów", ua: "Початки історії ізраїльтян" },
      formula: "koczownicy z Mezopotamii",
      text: {
        pl: [
          ["Izraelici (nazywani też ", em("Żydami"), ") byli na początku koczowniczym plemieniem z ", em("Mezopotamii"), "."],
          ["Według Biblii prowadził ich ", em("Abraham"), ". Dotarli do ", em("Ziemi Kanaan"), " — krainy przy wschodnim brzegu Morza Śródziemnego, między Egiptem a pustynią. Tę ziemię zwie się też Palestyną albo Ziemią Obiecaną."]
        ],
        ua: [
          ["Ізраїльтяни (їх називають також ", em("євреями"), ") спочатку були кочовим племенем з ", em("Месопотамії"), "."],
          ["За Біблією їх вів ", em("Авраам"), ". Вони дісталися ", em("землі Ханаан"), " — краю при східному березі Середземного моря, між Єгиптом і пустелею. Цю землю звуть також Палестиною або Обітованою землею."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: od Mezopotamii do Kanaanu", ua: "Карта: від Месопотамії до Ханаану" },
      visual: gh("029", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Morze Śródziemne, Synaj, Kanaan, Jerozolima, Eufrat",
          ua: "Карта: Середземне море, Синай, Ханаан, Єрусалим, Євфрат"
        },
        title: { pl: "Ziemia Kanaan między Egiptem a pustynią", ua: "Земля Ханаан між Єгиптом і пустелею" },
        prompt: {
          pl: "Szkolna mapa atlasowa wschodniej części Morza Śródziemnego dla klasy 5, jasne tło, czytelne polskie podpisy, bez współczesnych granic państw. Pokaż: Morze Śródziemne, deltę Nilu i Egipt po lewej, półwysep Synaj, pustynię syryjską, rzekę Eufrat dalej na wschodzie. Wąska nadmorska kraina Kanaan zaznaczona ciepłym kolorem między morzem a pustynią. Miasta: Tyr, Sydon, Jerozolima (gwiazdka), Gaza, Damaszek. Dwie małe scenki w rogach, nie zasłaniające mapy: 1) obóz czerwonych namiotów koczowników na pomarańczowych wydmach; 2) spokojny starszy mężczyzna z białą brodą i laską (Abraham) w szatach, bez aureoli-horroru. Styl podręcznika Nowej Ery, dzień, bez wojny i bez grozy.",
          ua: "Шкільна атласна карта східної частини Середземного моря для 5 класу, світле тло, читабельні польські підписи, без сучасних кордонів. Покажи: Середземне море, дельту Нілу і Єгипет ліворуч, Синай, сирійську пустелю, Євфрат далі на сході. Вузький приморський край Ханаан теплим кольором між морем і пустелею. Міста: Тир, Сидон, Єрусалим (зірочка), Газа, Дамаск. Дві малі сценки в кутах: намети кочівників на дюнах; спокійний старший чоловік із білою бородою і палицею (Авраам). Стиль підручника, день, без війни і жаху."
        }
      }),
      text: {
        pl: ["Znajdź morze, Synaj, Jerozolimę. To nie dolina Nilu i nie Sumer — wąski pas między wodą a pustynią."],
        ua: ["Знайди море, Синай, Єрусалим. Це не долина Нілу і не Шумер — вузька смуга між водою і пустелею."]
      },
      task: {
        id: "h04-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Gdzie osiedlili się Izraelici po wędrówce z Mezopotamii?",
          ua: "Де оселилися ізраїльтяни після мандрівки з Месопотамії?"
        },
        options: [
          { id: "a", label: { pl: "w wąskiej dolinie Nilu, między pustyniami", ua: "у вузькій долині Нілу, між пустелями" } },
          { id: "b", label: { pl: "w Kanaanie (Palestynie), przy wschodnim brzegu Morza Śródziemnego", ua: "у Ханаані (Палестині), при східному березі Середземного моря" } },
          { id: "c", label: { pl: "nad Wisłą, ze stolicą w Gnieźnie", ua: "над Віслою, зі столицею в Гнєзно" } }
        ],
        answer: "b",
        hint: {
          pl: "Między Egiptem a pustynią syryjską, przy Morzu Śródziemnym.",
          ua: "Між Єгиптом і сирійською пустелею, біля Середземного моря."
        },
        explanation: {
          pl: "Kanaan / Palestyna. Nil to Egipt. Wisła — Polska, dużo później.",
          ua: "Ханаан / Палестина. Ніл — Єгипет. Вісла — Польща, набагато пізніше."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Wyjście z Egiptu", ua: "Вихід з Єгипту" },
      formula: "XIII w. p.n.e. · Mojżesz",
      visual: gh("030", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa drogi Izraelitów z Egiptu przez Synaj do Kanaanu",
          ua: "Карта шляху ізраїльтян з Єгипту через Синай до Ханаану"
        },
        title: { pl: "Szlak Mojżesza przez Synaj", ua: "Шлях Мойсея через Синай" },
        prompt: {
          pl: "Szkolna mapa historyczna dla klasy 5: „Wyjście Izraelitów z Egiptu pod wodzą Mojżesza (XIII w. p.n.e.)”. Jasny atlas, polskie etykiety, bez współczesnych granic. Egipt Dolny i Nil po lewej, Morze Śródziemne u góry, Półwysep Synaj na środku, kraina Kanaan pomarańczowym tłem po prawej. Gruba czerwona linia szlaku: start przy Ramzes w delcie → na południe Synaju do Góry Synaj (Horeb) → Kadesz-Barnea → Ecjon-Geber → obok Morza Martwego → Góra Nebo i Jerycho. Podpisz też: Memfis, Sichem, Jordan, Jezioro Genezaret. Bez scen walki i bez runących murów z ofiarami — tylko mapa i czytelna trasa. Mała legenda: szlak wędrówki, góra, miasto.",
          ua: "Шкільна історична карта для 5 класу: «Вихід ізраїльтян з Єгипту під проводом Мойсея (XIII ст. до н.е.)». Світлий атлас, польські підписи, без сучасних кордонів. Нижній Єгипет і Ніл ліворуч, Середземне море вгорі, Синай у центрі, Ханаан помаранчевим праворуч. Товста червона лінія шляху: Рамсес у дельті → на південь Синаю до гори Синай (Хорив) → Кадеш-Барнеа → Еціон-Гебер → біля Мертвого моря → гора Нево і Єрихон. Підпиши також: Мемфіс, Сихем, Йордан, Генісарет. Без бою і без руїн із жертвами — лише карта. Мала легенда: шлях мандрівки, гора, місто."
        }
      }),
      text: {
        pl: [
          "Z czasem Izraelici trafili do Egiptu i — według Biblii — popadli w niewolę.",
          ["Około ", em("XIII wieku p.n.e."), " pod wodzą ", em("Mojżesza"), " wrócili do Palestyny. Droga wiodła przez pustynię Synaj."]
        ],
        ua: [
          "З часом ізраїльтяни потрапили до Єгипту і — за Біблією — потрапили в неволю.",
          ["Близько ", em("XIII століття до н.е."), " під проводом ", em("Мойсея"), " вони повернулися до Палестини. Шлях вів через пустелю Синай."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Własne państwo", ua: "Власна держава" },
      timelineId: "izrael",
      formula: "początek X w. p.n.e.",
      text: {
        pl: [
          "Na początku X wieku p.n.e. Izraelici utworzyli własne państwo w Kanaanie.",
          "To już nie tylko wędrowne plemiona — stolica, król, wojsko. Najpierw Saul, potem Dawid i Salomon."
        ],
        ua: [
          "На початку X століття до н.е. ізраїльтяни створили власну державу в Ханаані.",
          "Це вже не лише мандрівні племена — столиця, цар, військо. Спочатку Саул, потім Давид і Соломон."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Mapa: królestwo w X wieku", ua: "Карта: царство в X столітті" },
      timelineId: "izrael",
      visual: gh("031", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa zjednoczonego królestwa: Jerozolima, Jordan, Morze Martwe",
          ua: "Карта об’єднаного царства: Єрусалим, Йордан, Мертве море"
        },
        title: { pl: "Państwo Dawida i Salomona", ua: "Держава Давида і Соломона" },
        prompt: {
          pl: "Szkolna mapa zjednoczonego królestwa Izraela około X w. p.n.e. dla klasy 5. Jasny atlas, polskie podpisy. Morze Śródziemne na zachodzie, Jordan łączy Jezioro Genezaret z Morzem Martwym. Terytorium królestwa jednym spokojnym niebieskim cieniem. Jerozolima oznaczona gwiazdką (stolica). Inne miasta: Betlejem, Hebron, Gaza, Jerycho, Samaria, Megiddo, Dan. Sąsiedzi drobnym drukiem, bez scen bitew: Filistyni przy wybrzeżu, Edom i Amalek na południu, Moab i Ammon na wschodzie, Aramejczycy na północnym wschodzie. Bez współczesnych granic Izraela/Palestyny. Legenda: stolica, królestwo, sąsiedzi.",
          ua: "Шкільна карта об’єднаного царства Ізраїлю близько X ст. до н.е. для 5 класу. Світлий атлас, польські підписи. Середземне море на заході, Йордан з’єднує Генісарет із Мертвим морем. Територія царства спокійним блакитним тоном. Єрусалим зірочкою (столиця). Інші міста: Віфлеєм, Хеврон, Газа, Єрихон, Самарія, Мегіддо, Дан. Сусіди дрібним шрифтом, без битв: філістимляни на узбережжі, Едом і Амалик на півдні, Моав і Аммон на сході, арамеї на північному сході. Без сучасних кордонів. Легенда: столиця, царство, сусіди."
        }
      }),
      task: {
        id: "h04-krolestwo",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kiedy — według tego tematu — Izraelici utworzyli własne państwo?",
          ua: "Коли — за цією темою — ізраїльтяни створили власну державу?"
        },
        options: [
          { id: "a", label: { pl: "na początku X wieku p.n.e.", ua: "на початку X століття до н.е." } },
          { id: "b", label: { pl: "w 1948 roku n.e., razem z Unią Europejską", ua: "у 1948 році н.е., разом з Європейським Союзом" } },
          { id: "c", label: { pl: "za Cheopsa, przy budowie piramidy w Gizie", ua: "за Хеопса, під час будови піраміди в Гізі" } }
        ],
        answer: "a",
        hint: {
          pl: "To początek tysiąclecia przed naszą erą — czasy Dawida i Salomona.",
          ua: "Це початок тисячоліття до нашої ери — часи Давида і Соломона."
        },
        explanation: {
          pl: "X w. p.n.e. 1948 to współczesne państwo. Cheops — Egipt.",
          ua: "X ст. до н.е. 1948 — сучасна держава. Хеопс — Єгипет."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Okres świetności", ua: "Доба розквіту" },
      visual: gh("032", {
        kind: "image-placeholder",
        alt: {
          pl: "Król Dawid i król Salomon — dwa spokojne portrety",
          ua: "Цар Давид і цар Соломон — два спокійні портрети"
        },
        title: { pl: "Dawid i Salomon", ua: "Давид і Соломон" },
        prompt: {
          pl: "Infografika dla klasy 5 na jasnym tle, dwa równe portrety obok siebie, styl spokojnego szkolnego atlasu, bez przemocy. LEWY: król Dawid — dojrzały brodaty władca w złotej koronie i czerwonym płaszczu, berło, w tle harfa (psalmy), podpis po polsku: „król Dawid — zjednoczył plemiona izraelskie; zdobył Jerozolimę — stolica”. PRAWY: król Salomon — starszy mędrzec z długą białą brodą, purpurowy płaszcz, zwoje u stóp, podpis: „król Salomon — słynął z mądrości; zbudował Świątynię”. Żadnych scen bitew, żadnej krwi. Ciepłe światło pałacu, czytelne polskie etykiety, dużo powietrza.",
          ua: "Інфографіка для 5 класу, два рівні портрети, спокійний шкільний стиль, без насильства. ЛІВОРУЧ: цар Давид — зрілий володар із бородою, золота корона, червоний плащ, берло, арфа, підпис: «цар Давид — об’єднав ізраїльські племена; здобув Єрусалим — столиця». ПРАВОРУЧ: цар Соломон — мудрець із довгою білою бородою, пурпур, сувої, підпис: «цар Соломон — славився мудрістю; збудував Храм». Жодних битв і крові. Тепле світло, читабельні підписи."
        }
      }),
      text: {
        pl: [
          [em("Dawid"), " zjednoczył plemiona i zdobył ", em("Jerozolimę"), " — stolicę."],
          [em("Salomon"), ", jego syn, słynął z mądrości. W Jerozolimie wzniósł ", em("Świątynię"), " — centrum kultu jednego Boga."]
        ],
        ua: [
          [em("Давид"), " об’єднав племена і здобув ", em("Єрусалим"), " — столицю."],
          [em("Соломон"), ", його син, славився мудрістю. У Єрусалимі звів ", em("Храм"), " — осереддя культу одного Бога."]
        ]
      },
      task: {
        id: "h04-jerozolima",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które miasto Dawid uczynił stolicą, a Salomon zbudował w nim świątynię?",
          ua: "Яке місто Давид зробив столицею, а Соломон збудував у ньому храм?"
        },
        options: [
          { id: "a", label: { pl: "Memfis", ua: "Мемфіс" } },
          { id: "b", label: { pl: "Jerozolima", ua: "Єрусалим" } },
          { id: "c", label: { pl: "Uruk", ua: "Урук" } }
        ],
        answer: "b",
        hint: {
          pl: "Święte miasto Izraela, nie Egiptu i nie Sumeru.",
          ua: "Святе місто Ізраїлю, не Єгипту і не Шумеру."
        },
        explanation: {
          pl: "Jerozolima. Memfis — Egipt. Uruk — Sumer.",
          ua: "Єрусалим. Мемфіс — Єгипет. Урук — Шумер."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Okres upadku", ua: "Доба занепаду" },
      visual: gh("033", {
        kind: "image-placeholder",
        alt: {
          pl: "Ludzie z tobołkami odchodzą od murów miasta — niewola babilońska",
          ua: "Люди з клунками відходять від мурів міста — вавилонська неволя"
        },
        title: { pl: "Niewola babilońska", ua: "Вавилонська неволя" },
        prompt: {
          pl: "Spokojna ilustracja edukacyjna dla klasy 5, ABSOLUTNIE bez krwi, ciał i walki wręcz. Dzień, kurz, smutek — nie horror. Długi pochód rodzin (dorośli i dzieci) z tobołkami i wozami odchodzi od kamiennych murów miasta; w tle mury Jerozolimy i delikatny dym nad dachami (nie ściana ognia). Żołnierze babilońscy idą z boku kolumny, tarcze opuszczone, bez ran. Na ciemnym pasku tablicy polskie etykiety: „podział państwa i osłabienie”; w ramce kreskowanej słowo „niewola babilońska”; „początek VI w. p.n.e. — Babilończycy zdobyli Jerozolimę”; „po upadku Babilonu Izraelici wrócili do Palestyny”. Styl podręcznika, czytelny, godny, bez satyry.",
          ua: "Спокійна освітня ілюстрація для 5 класу, АБСОЛЮТНО без крові, тіл і рукопашу. День, пил, смуток — не жах. Довгий похід родин із клунками відходить від кам’яних мурів; у тлі мури Єрусалима і легкий дим над дахами (не стіна вогню). Вавилонські воїни збоку колони, щити опущені, без ран. Підписи: «поділ держави і ослаблення»; у рамці «вавилонська неволя»; «початок VI ст. до н.е. — вавилоняни здобули Єрусалим»; «після падіння Вавилона ізраїльтяни повернулися до Палестини». Стиль підручника, гідний, без сатири."
        }
      }),
      text: {
        pl: [
          "Po Salomonie państwo się podzieliło i słabło.",
          ["Na początku ", em("VI wieku p.n.e."), " Babilończycy zdobyli Jerozolimę i uprowadzili Izraelitów — to ", em("niewola babilońska"), ". Po upadku Babilonu lud wrócił do Palestyny."]
        ],
        ua: [
          "Після Соломона держава поділилася і слабшала.",
          ["На початку ", em("VI століття до н.е."), " вавилоняни здобули Єрусалим і вивели ізраїльтян — це ", em("вавилонська неволя"), ". Після падіння Вавилона народ повернувся до Палестини."]
        ]
      },
      task: {
        id: "h04-niewola",
        type: "true-false",
        level: "B",
        question: {
          pl: "Niewola babilońska to uprowadzenie Izraelitów z Jerozolimy przez Babilończyków na początku VI w. p.n.e. — prawda czy fałsz?",
          ua: "Вавилонська неволя — це виведення ізраїльтян з Єрусалима вавилонянами на початку VI ст. до н.е. — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Babilon, VI wiek, Jerozolima.",
          ua: "Вавилон, VI століття, Єрусалим."
        },
        explanation: {
          pl: "Prawda. Potem, gdy Babilon upadł, część ludu wróciła.",
          ua: "Правда. Потім, коли Вавилон упав, частина народу повернулася."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Później: rozproszenie", ua: "Пізніше: розсіяння" },
      text: {
        pl: [
          "W I i II wieku n.e. Żydzi wielokrotnie powstawali przeciwko okupantom. Po klęskach wielu wypędzono z Palestyny — lud rozproszył się po świecie.",
          "To już epoka cesarstwa rzymskiego. Na tej lekcji zapamiętaj przede wszystkim starożytny Izrael i świątynię."
        ],
        ua: [
          "У I і II століттях н.е. євреї неодноразово повставали проти окупантів. Після поразок багатьох вигнали з Палестини — народ розсіявся світом.",
          "Це вже доба Римської імперії. На цьому уроці запам’ятай передусім стародавній Ізраїль і храм."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Wierzenia Izraelitów", ua: "Вірування ізраїльтян" },
      formula: "judaizm · monoteizm",
      text: {
        pl: [
          ["Religia Izraelitów to ", em("judaizm"), ". To religia ", em("monoteistyczna"), " (mono — jeden, theos — bóg)."],
          ["Jednego Boga nazywali ", em("Jahwe"), "."]
        ],
        ua: [
          ["Релігія ізраїльтян — ", em("юдаїзм"), ". Це релігія ", em("монотеїстична"), " (моно — один, теос — бог)."],
          ["Єдиного Бога називали ", em("Ягве"), "."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Tora, przymierze, Dekalog", ua: "Тора, заповіт, Декалог" },
      visual: gh("034", {
        kind: "image-placeholder",
        alt: {
          pl: "Zwój Tory, tablice przykazań i Arka Przymierza",
          ua: "Сувій Тори, таблиці заповідей і Ковчег Завіту"
        },
        title: { pl: "Święta księga i prawo przymierza", ua: "Священна книга і право завіту" },
        prompt: {
          pl: "Infografika szkolna dla klasy 5, jasne tło, trzy spokojne kadry w poziomie, polskie podpisy, bez grozy. 1) Otwarty pergaminowy zwój Tory z hebrajskimi liniami (czytelny jako „święty tekst”, nie mikroskopijny druk); drewniane rolki, w tle synagoga rozmyta. Podpis: „święta księga judaizmu — Tora (Pięcioksiąg)”. 2) Spokojny Mojżesz z białą brodą na skalistym szczycie, dwie kamienne tablice w złotym świetle z nieba — bez piorunów-horroru. Podpis: „Mojżesz otrzymał Dekalog na górze Synaj”. 3) Czterech kapłanów w białych szatach niesie na drążkach złotą skrzynię (Arka Przymierza) przez pustynię, dzień. Podpis: „Arka Przymierza”. Dużo powietrza, styl podręcznika.",
          ua: "Шкільна інфографіка для 5 класу, світле тло, три спокійні кадри, підписи, без жаху. 1) Відкритий пергаментний сувій Тори з єврейськими рядками; дерев’яні вали. Підпис: «священна книга юдаїзму — Тора (П’ятикнижжя)». 2) Спокійний Мойсей із білою бородою на скелястій вершині, дві кам’яні таблиці в золотому світлі — без жахливих блискавок. Підпис: «Мойсей отримав Декалог на горі Синай». 3) Четверо священиків у білому несуть на жердинах золоту скриню (Ковчег Завіту) пустелею. Підпис: «Ковчег Завіту». Стиль підручника."
        }
      }),
      text: {
        pl: [
          ["Święta księga judaizmu: ", em("Tora"), " (Pięcioksiąg) — pierwsze pięć ksiąg Biblii hebrajskiej."],
          ["Bóg zawarł ", em("przymierze"), " z Abrahamem. Główne zasady — w ", em("Dekalogu"), ": Mojżesz otrzymał 10 przykazań na górze Synaj, spisane na tablicach i złożone w ", em("Arce Przymierza"), "."]
        ],
        ua: [
          ["Священна книга юдаїзму: ", em("Тора"), " (П’ятикнижжя) — перші п’ять книг єврейської Біблії."],
          ["Бог уклав ", em("заповіт"), " з Авраамом. Головні правила — в ", em("Декалозі"), ": Мойсей отримав 10 заповідей на горі Синай, записані на таблицях і покладені в ", em("Ковчег Завіту"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Źródło: Biblia", ua: "Джерело: Біблія" },
      formula: "ŹRÓDŁO (ostrożnie)",
      text: {
        pl: [
          "Biblia (dla Żydów — Tanach / Biblia hebrajska) to zbiór świętych ksiąg. Opowiada o Bogu, przymierzu i dziejach Izraela.",
          "Historyk czyta ją inaczej niż wierzący: pyta, co tekst mówi o wierzeniach i pamięci ludu. Nie wszystko da się sprawdzić wykopaliskami. Dlatego mówimy „według Biblii”."
        ],
        ua: [
          "Біблія (для євреїв — Танах / єврейська Біблія) — збірка священних книг. Оповідає про Бога, заповіт і діє Ізраїлю.",
          "Історик читає її інакше, ніж вірянин: питає, що текст каже про вірування і пам’ять народу. Не все можна перевірити розкопками. Тому кажемо «за Біблією»."
        ]
      },
      task: {
        id: "h04-src-biblia",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak historyk powinien czytać Biblię na lekcji historii?",
          ua: "Як історик має читати Біблію на уроці історії?"
        },
        options: [
          { id: "a", label: { pl: "jako źródło o wierzeniach i pamięci Izraelitów — ostrożnie, nie jak dowód każdej daty", ua: "як джерело про вірування і пам’ять ізраїльтян — обережно, не як доказ кожної дати" } },
          { id: "b", label: { pl: "jako listę zakupów faraona Cheopsa", ua: "як список покупок фараона Хеопса" } },
          { id: "c", label: { pl: "w ogóle jej nie czytać, bo nie jest żadnym źródłem", ua: "взагалі її не читати, бо це не джерело" } }
        ],
        answer: "a",
        hint: {
          pl: "Źródło ważne, ale innego typu niż tabliczka z Uruk.",
          ua: "Джерело важливе, але іншого типу, ніж табличка з Урука."
        },
        explanation: {
          pl: "Biblia jest źródłem. Historyk oddziela wiarę od tego, co da się potwierdzić inaczej.",
          ua: "Біблія є джерелом. Історик відділяє віру від того, що можна підтвердити інакше."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Prorocy", ua: "Пророки" },
      text: {
        pl: [
          "Prorocy to przywódcy religijni przekonani, że Bóg ich posłał. Podtrzymywali wiarę w Mesjasza — oczekiwanego wybawiciela.",
          "Przykład z tradycji: prorok Izajasz."
        ],
        ua: [
          "Пророки — релігійні провідники, переконані, що Бог їх послав. Підтримували віру в Месію — очікуваного визволителя.",
          "Приклад із традиції: пророк Ісая."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Świątynia Jerozolimska", ua: "Єрусалимський храм" },
      visual: gh("035", {
        kind: "image-placeholder",
        alt: {
          pl: "Przekrój świątyni: sanktuarium, menora, ołtarz, kadzie",
          ua: "Перетин храму: святилище, менора, жертовник, чани"
        },
        title: { pl: "Sanktuarium, menora, ołtarz", ua: "Святилище, менора, жертовник" },
        prompt: {
          pl: "Izometryczny szkolny przekrój Świątyni Jerozolimskiej dla klasy 5, jasny kamień, złote wnętrze, małe spokojne figurki ludzi dla skali, bez ofiar ze zwierząt w zbliżeniu i bez krwi. Budynek prostokątny z odsłoniętym wnętrzem. Polskie etykiety z liniami: sanktuarium (najświętsze złote pomieszczenie z dwoma skrzydlatymi cherubinami); menora (siedmioramienny złoty świecznik przy ścianie); wrota (ozdobne drzwi). Na dziedzińcu: ołtarz — tarasowy kamienny podium ze schodami i małym kontrolowanym ogniem na wierzchu; kadzie z wodą na wózkach; wielka okrągła kadź na dwunastu wołach (morze z brązu). Wstawka w rogu: zbliżenie złotej menory. Dzień, czytelne litery, styl atlasu / rekonstrukcji podręcznikowej.",
          ua: "Ізометричний шкільний перетин Єрусалимського храму для 5 класу, світлий камінь, золоте нутро, малі спокійні фігурки людей, без кривавих жертв. Прямокутна будівля з відкритим інтер’єром. Підписи: святилище (найсвятіша золота кімната з двома крилатими херувимами); менора (семисвічник); ворота. На подвір’ї: жертовник — терасове кам’яне підвищення зі сходами і малим контрольованим вогнем; чани з водою; велика кругла чаша на дванадцяти волах. Вставка: золота менора. День, стиль атласу."
        }
      }),
      text: {
        pl: [
          "Świątynia w Jerozolimie była centrum kultu. Wewnątrz: sanktuarium, menora, ołtarz na dziedzińcu.",
          "Dziś z dawnej świątyni zachował się m.in. Mur Zachodni (Ściana Płaczu) — miejsce modlitwy."
        ],
        ua: [
          "Храм у Єрусалимі був осереддям культу. Всередині: святилище, менора, жертовник на подвір’ї.",
          "Сьогодні від давнього храму зберігся зокрема Західний мур (Стіна Плачу) — місце молитви."
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Współczesny Izrael", ua: "Сучасний Ізраїль" },
      visual: gh("036", {
        kind: "image-placeholder",
        alt: {
          pl: "Flaga, menora, mapa Izraela, panorama Jerozolimy",
          ua: "Прапор, менора, карта Ізраїлю, панорама Єрусалима"
        },
        title: { pl: "1948 · symbole · miasta", ua: "1948 · символи · міста" },
        prompt: {
          pl: "Infografika „współczesny Izrael” dla klasy 5, jasne tło szkolnej tablicy, bez scen konfliktu zbrojnego. LEWA KOLUMNA: flaga Izraela (biała, dwa niebieskie pasy, gwiazda Dawida); herb — tarcza z menorą i gałązkami oliwnymi. ŚRODEK: polityczna mapka Bliskiego Wschodu z terytorium Izraela zaznaczonym wyraźnym kolorem + mała wstawka globu. Podpisy miast: Jerozolima, Tel Awiw-Jafa, Hajfa. PRAWA: panoramiczne zdjęcie Jerozolimy w dzień — mury Starego Miasta, złota kopuła na wzgórzu, jasne kamienne domy, błękitne niebo; bez tłumów w geście przemocy. Polskie etykiety: „1948 — niepodległy Izrael”; „symbole: gwiazda Dawida, menora”; „ważne miasta”. Spokojny, atlasowy ton.",
          ua: "Інфографіка «сучасний Ізраїль» для 5 класу, світле тло, без сцен збройного конфлікту. ЛІВОРУЧ: прапор Ізраїлю (білий, дві сині смуги, зірка Давида); герб — щит із менорою і оливковими гілками. ЦЕНТР: політична мапка Близького Сходу з територією Ізраїлю + мала вставка глобуса. Підписи міст: Єрусалим, Тель-Авів-Яфо, Хайфа. ПРАВОРУЧ: панорама Єрусалима вдень — мури Старого міста, золота баня, світлий камінь, блакитне небо; без насильства. Підписи: «1948 — незалежний Ізраїль»; «символи: зірка Давида, менора»; «важливі міста». Спокійний атласний тон."
        }
      }),
      text: {
        pl: [
          "W 1948 roku powstało niepodległe państwo Izrael. Symbole: gwiazda Dawida i menora. Ważne miasta: Jerozolima, Tel Awiw-Jafa, Hajfa.",
          "W regionie od lat trwają spory Żydów i Arabów — to już współczesność, nie temat piramid i faraonów."
        ],
        ua: [
          "У 1948 році виникла незалежна держава Ізраїль. Символи: зірка Давида і менора. Важливі міста: Єрусалим, Тель-Авів-Яфо, Хайфа.",
          "У регіоні роками тривають суперечки євреїв і арабів — це вже сучасність, не тема пірамід і фараонів."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Kanaan / Palestyna — kraina Izraelitów przy Morzu Śródziemnym", ua: "Ханаан / Палестина — край ізраїльтян при Середземному морі" },
        { pl: "judaizm — religia monoteistyczna Izraelitów (Bóg Jahwe)", ua: "юдаїзм — монотеїстична релігія ізраїльтян (Бог Ягве)" },
        { pl: "Tora — Pięcioksiąg, święta księga judaizmu", ua: "Тора — П’ятикнижжя, священна книга юдаїзму" },
        { pl: "Dekalog — Dziesięć Przykazań z góry Synaj", ua: "Декалог — Десять заповідей з гори Синай" },
        { pl: "niewola babilońska — uprowadzenie z Jerozolimy w VI w. p.n.e.", ua: "вавилонська неволя — виведення з Єрусалима в VI ст. до н.е." }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Porównaj Egipt i Izrael: ilu bogów? Co spina społeczność — rzeka czy przymierze?"],
        ua: ["Порівняй Єгипет і Ізраїль: скільки богів? Що єднає спільноту — річка чи заповіт?"]
      },
      task: {
        id: "h04-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym religia Izraelitów różniła się od religii Egiptu?",
          ua: "Чим релігія ізраїльтян відрізнялася від релігії Єгипту?"
        },
        options: [
          { id: "a", label: { pl: "Izraelici czcili wielu bogów, Egipcjanie — jednego", ua: "Ізраїльтяни шанували багатьох богів, єгиптяни — одного" } },
          { id: "b", label: { pl: "Izraelici czcili jednego Boga (judaizm), Egipcjanie wielu (politeizm)", ua: "Ізраїльтяни шанували одного Бога (юдаїзм), єгиптяни багатьох (політеїзм)" } },
          { id: "c", label: { pl: "Nikt w starożytności nie miał żadnych bogów", ua: "Ніхто в давнину не мав жодних богів" } }
        ],
        answer: "b",
        hint: {
          pl: "Mono = jeden. Poli = wiele.",
          ua: "Моно = один. Полі = багато."
        },
        explanation: {
          pl: "Judaizm = monoteizm. Egipt = politeizm.",
          ua: "Юдаїзм = монотеїзм. Єгипет = політеїзм."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Izraelici czcili Ra i Ozyrysa, a Mojżesz spisał Kodeks Hammurabiego w Babilonie.”",
        ua: "«Ізраїльтяни шанували Ра і Осіріса, а Мойсей записав Кодекс Хаммурапі у Вавилоні.»"
      },
      text: {
        pl: [
          "Ra i Ozyrys to Egipt. Kodeks Hammurabiego to Babilonia.",
          "Izrael: Jahwe, Mojżesz, Dekalog, Tora."
        ],
        ua: [
          "Ра і Осіріс — Єгипет. Кодекс Хаммурапі — Вавилонія.",
          "Ізраїль: Ягве, Мойсей, Декалог, Тора."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wyjaśnij, czym jest monoteizm i podaj przykład z tej lekcji.",
        ua: "Поясни, що таке монотеїзм, і наведи приклад з цього уроку."
      },
      text: {
        pl: [
          "Podpowiedź: jeden Bóg Jahwe, judaizm, nie Ra i Ozyrys.",
          "Powiedz 2–3 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: один Бог Ягве, юдаїзм, не Ра і Осіріс.",
          "Скажи 2–3 речення. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h04-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej wyjaśnia wiarę Izraelitów?",
          ua: "Яке речення найкраще пояснює віру ізраїльтян?"
        },
        options: [
          { id: "a", label: { pl: "Wiara, że każdy kamień jest osobnym bogiem wojny", ua: "Віра, що кожен камінь є окремим богом війни" } },
          { id: "b", label: { pl: "Judaizm: wiara w jednego Boga Jahwe i przymierze z ludem", ua: "Юдаїзм: віра в одного Бога Ягве і заповіт з народом" } },
          { id: "c", label: { pl: "Brak jakiejkolwiek religii", ua: "Відсутність будь-якої релігії" } }
        ],
        answer: "b",
        hint: {
          pl: "Mono = jeden. Jahwe, Tora.",
          ua: "Моно = один. Ягве, Тора."
        },
        explanation: {
          pl: "Jeden Bóg + przymierze. To kanon klasy 5.",
          ua: "Один Бог + заповіт. Це канон 5 класу."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wpisz słowo oznaczające wiarę w jednego Boga.",
        ua: "Введи слово, що означає віру в одного Бога."
      },
      task: {
        id: "h04-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wiara w jednego Boga to… (jedno słowo)",
          ua: "Віра в одного Бога — це… (одне слово)"
        },
        answer: ["monoteizm", "монотеїзм", "judaizm", "юдаїзм"],
        hint: {
          pl: "Przeciwieństwo politeizmu. Albo nazwa religii Izraelitów.",
          ua: "Протилежність політеїзму. Або назва релігії ізраїльтян."
        },
        explanation: {
          pl: "Monoteizm (religia: judaizm).",
          ua: "Монотеїзм (релігія: юдаїзм)."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Przymierze a kodeks", ua: "Заповіт і кодекс" },
      task: {
        id: "h04-przymierze",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Czym przymierze Izraelitów różni się od Kodeksu Hammurabiego?",
          ua: "Чим заповіт ізраїльтян відрізняється від Кодексу Хаммурапі?"
        },
        options: [
          { id: "a", label: { pl: "przymierze to umowa z Bogiem i zasady wiary; kodeks to surowe prawo króla Babilonu", ua: "заповіт — угода з Богом і правила віри; кодекс — суворе право царя Вавилона" } },
          { id: "b", label: { pl: "to jedno i to samo, tylko inne imię faraona", ua: "це одне й те саме, лише інше ім’я фараона" } },
          { id: "c", label: { pl: "Hammurabi spisał Dziesięć Przykazań na Synaju", ua: "Хаммурапі записав Десять заповідей на Синаї" } }
        ],
        answer: "a",
        hint: {
          pl: "Inna kraina, inna władza, inny rodzaj tekstu.",
          ua: "Інший край, інша влада, інший тип тексту."
        },
        explanation: {
          pl: "Nie mieszaj Babilonu z Synajem.",
          ua: "Не змішуй Вавилон із Синаєм."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h04-check-mojzesz",
        type: "true-false",
        level: "A",
        question: {
          pl: "Według Biblii Mojżesz wyprowadził Izraelitów z Egiptu i przekazał Dziesięć Przykazań — prawda czy fałsz?",
          ua: "За Біблією Мойсей вивів ізраїльтян з Єгипту і передав Десять заповідей — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Synaj, tablice, wyjście z niewoli.",
          ua: "Синай, таблиці, вихід з неволі."
        },
        explanation: {
          pl: "To kanon tematu. Mówimy „według Biblii”.",
          ua: "Це канон теми. Кажемо «за Біблією»."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h04-check-stolica",
        type: "input-text",
        level: "B",
        question: {
          pl: "Wpisz nazwę stolicy królestwa Dawida.",
          ua: "Введи назву столиці царства Давида."
        },
        answer: ["jerozolima", "єрусалим", "jerusalem"],
        hint: {
          pl: "Tam Salomon zbudował świątynię.",
          ua: "Там Соломон збудував храм."
        },
        explanation: {
          pl: "Jerozolima.",
          ua: "Єрусалим."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Izraelici, zwani także Żydami, zamieszkiwali Palestynę. Przybyli tu z Mezopotamii pod wodzą Abrahama.",
          ["Żydami", "Palestynę", "Mezopotamii", "Abrahama"],
          "Ізраїльтяни, яких називають також євреями, жили в Палестині. Прийшли сюди з Месопотамії під проводом Авраама.",
          ["євреями", "Палестині", "Месопотамії", "Авраама"]
        ),
        mark(
          "Z czasem udali się do Egiptu, gdzie popadli w niewolę. Około XIII wieku p.n.e. pod wodzą Mojżesza powrócili do Palestyny.",
          ["Egiptu", "XIII wieku p.n.e.", "Mojżesza"],
          "З часом пішли до Єгипту, де потрапили в неволю. Близько XIII століття до н.е. під проводом Мойсея повернулися до Палестини.",
          ["Єгипту", "XIII століття до н.е.", "Мойсея"]
        ),
        mark(
          "Izraelici oddawali cześć jedynemu Bogu, którego nazwali Jahwe. Ich monoteistyczna religia nazywana jest judaizmem. Święta księga: Biblia hebrajska, a jej pierwsze pięć ksiąg to Tora.",
          ["Jahwe", "monoteistyczna", "judaizmem", "Tora"],
          "Ізраїльтяни шанували єдиного Бога, якого назвали Ягве. Їхня монотеїстична релігія називається юдаїзмом. Священна книга: єврейська Біблія, а її перші п’ять книг — Тора.",
          ["Ягве", "монотеїстична", "юдаїзмом", "Тора"]
        ),
        mark(
          "Okres największej potęgi — według Biblii — to rządy króla Dawida i jego syna Salomona (ok. X wieku p.n.e.). Dawid uczynił stolicą Jerozolimę, Salomon wzniósł Świątynię.",
          ["Dawida", "Salomona", "X wieku p.n.e.", "Jerozolimę", "Świątynię"],
          "Доба найбільшої потуги — за Біблією — правління царя Давида і його сина Соломона (бл. X століття до н.е.). Давид зробив столицею Єрусалим, Соломон звів Храм.",
          ["Давида", "Соломона", "X століття до н.е.", "Єрусалим", "Храм"]
        ),
        mark(
          "Na początku VI w. p.n.e. Babilończycy zdobyli Jerozolimę i uprowadzili Izraelitów — to niewola babilońska. Po upadku Babilonu lud wrócił do Palestyny.",
          ["VI w. p.n.e.", "niewola babilońska"],
          "На початку VI ст. до н.е. вавилоняни здобули Єрусалим і вивели ізраїльтян — це вавилонська неволя. Після падіння Вавилона народ повернувся до Палестини.",
          ["VI ст. до н.е.", "вавилонська неволя"]
        ),
        mark(
          "Potrafię powiedzieć: Izraelici czcili jednego Boga Jahwe; Dawid i Salomon wzmocnili państwo; potem była niewola babilońska.",
          ["Jahwe", "niewola babilońska"],
          "Можу сказати: ізраїльтяни шанували єдиного Бога Ягве; Давид і Соломон зміцнили державу; потім була вавилонська неволя.",
          ["Ягве", "вавилонська неволя"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następny temat: Indie i Chiny — znowu wielkie rzeki, ale inne religie i inna władza.",
          "Alfabet Fenicjan (sąsiedzi Izraela) wróci przy piśmie.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: Індія і Китай — знову великі річки, але інші релігії і інша влада.",
          "Абетка фінікійців (сусіди Ізраїлю) повернеться при письмі.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "KTCY17id5oA",
        title: {
          pl: "Krótkie Lekcje: W starożytnym Izraelu",
          ua: "Короткі уроки: У стародавньому Ізраїлі"
        }
      }
    }
  ]
};
