function emT39(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T39 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT39(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T39 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 74–75  ·  Lekcja 39  ·  opis obrazu",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Cykl podręcznika: *Fascynacja słonecznymi barwami*. Wiersz Ratajczaka znasz z lekcji 38. Dziś *inne* zadanie: *opis obrazu* Vincenta van Gogha *Słoneczniki*, s. 74–75. Biografii nie zmyślamy — tylko to, co stoi w podręczniku. Tuwim, *Deszczyk* — lekcja 40. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Цикл підручника: *Fascynacja słonecznymi barwami*. Вірш Ратайчака знаєш з уроку 38. Сьогодні *інше* завдання: *опис картини* Вінсента ван Гога *Słoneczniki*, с. 74–75. Біографію не вигадуємо — лише те, що в підручнику. Тувім, *Deszczyk* — урок 40. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "podam przymiotniki do *ciepła* i *zimna*;", ua: "назву прикметники до *тепла* і *холоду*;" },
      { pl: "powiem, czym jest *opis obrazu* i z jakich *trzech części* się składa;", ua: "скажу, що таке *опис картини* і з яких *трьох частин* він складається;" },
      { pl: "nazwę rodzaj dzieła: *martwa natura*;", ua: "назву вид твору: *натюрморт* (*martwa natura*);" },
      { pl: "opiszę kompozycję, barwy ciepłe i nastrój — bez zmyślonej biografii;", ua: "опишу композицію, теплі барви і настрій — без вигаданої біографії;" },
      { pl: "napiszę krótki opis: wstęp, rozwinięcie, zakończenie.", ua: "напишу короткий опис: вступ, розвинення, кінцівка." }
    ],
    task: {
      id: "t39-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Zbudować opis obrazu: wstęp, rozwinięcie, zakończenie.", ua: "Побудувати опис картини: вступ, розвинення, кінцівка." } },
        { id: "b", label: { pl: "Nazwać martwą naturę oraz barwy ciepłe i nastrój Słoneczników.", ua: "Назвати натюрморт і теплі барви та настрій Słoneczników." } },
        { id: "c", label: { pl: "Opowiedzieć zmyśloną biografię van Gogha (choroba, ucho, koniec życia).", ua: "Розповісти вигадану біографію van Gogha (хвороба, вухо, кінець життя)." } },
        { id: "d", label: { pl: "Wyjaśnić z tekstu podręcznika, dlaczego artysta malował słoneczniki.", ua: "Пояснити з тексту підручника, чому митець малював соняшники." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Kartka T39: «nie zmyśla biografii». Skąd biorą się fakty — z podręcznika czy z filmu?",
        ua: "Картка T39: «не вигадує біографії». Звідки факти — з підручника чи з фільму?"
      },
      explanation: {
        pl: "Dziś: opis obrazu, martwa natura, barwy, tekst o Arles. Biografii z internetu nie dopisujemy. Deszczyk — lekcja 40.",
        ua: "Сьогодні: опис картини, натюрморт, барви, текст про Arles. Біографії з інтернету не дописуємо. Deszczyk — урок 40."
      }
    }
  },
  // 2
  {
    type: "practice",
    heading: { pl: "Zadanie wstępne · ciepło i zimno", ua: "Вступне · тепло і холод" },
    formula: "s. 74  ·  przymiotniki",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: podaj jak najwięcej *przymiotników*, które kojarzą się z wyrazami *ciepło* i *zimno*. Most z lekcji 36–37: przymiotnik = cecha (*jaki? jaka? jakie?*). W zeszycie dwie kolumny. Potem te słowa wrócą przy *barwach* obrazu.",
      ua: "Підручник: назви якомога більше *прикметників*, які асоціюються зі словами *ciepło* і *zimno*. Міст з уроків 36–37: прикметник = ознака (*який? яка? яке?*). У зошиті два стовпчики. Потім ці слова повернуться при *барвах* картини."
    },
    items: [
      { pl: "Ciepło: *ciepły, gorący, złoty, słoneczny, żółty, pomarańczowy, radosny*.", ua: "Тепло: *ciepły, gorący, złoty, słoneczny, żółty, pomarańczowy, radosny*." },
      { pl: "Zimno: *zimny, chłodny, lodowaty, niebieski, srebrny, szary, blady*.", ua: "Холод: *zimny, chłodny, lodowaty, niebieski, srebrny, szary, blady*." },
      { pl: "To nadal *przymiotniki* — nie rzeczowniki (*słońce, lód*) i nie czasowniki (*grzeje*).", ua: "Це й далі *прикметники* — не іменники (*słońce, lód*) і не дієслова (*grzeje*)." }
    ],
    task: {
      id: "t39-s02-cieplo",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy NA PEWNO kojarzą się z *ciepłem* i są przymiotnikami? Zaznacz wszystkie pewne.",
        ua: "Які слова НАПЕВНО асоціюються з *теплим* і є прикметниками? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "złoty, słoneczny, żółty, gorący", ua: "złoty, słoneczny, żółty, gorący" } },
        { id: "b", label: { pl: "lodowaty, srebrny, blady", ua: "lodowaty, srebrny, blady" } },
        { id: "c", label: { pl: "grzeje, świeci (to czasowniki)", ua: "grzeje, świeci (це дієслова)" } },
        { id: "d", label: { pl: "pomarańczowy, ciepły", ua: "pomarańczowy, ciepły" } }
      ],
      answer: ["a", "d"],
      hint: {
        pl: "Pytanie: *jaki* jest kolor / nastrój? Lodowaty idzie do zimna. Grzeje = co robi?",
        ua: "Питання: *який* колір / настрій? Lodowaty йде до холоду. Grzeje = що робить?"
      },
      explanation: {
        pl: "Ciepło: złoty, słoneczny, żółty, gorący, pomarańczowy, ciepły. Lodowaty = zimno. Grzeje = czasownik.",
        ua: "Тепло: złoty, słoneczny, żółty, gorący, pomarańczowy, ciepły. Lodowaty = холод. Grzeje = дієслово."
      }
    }
  },
  // 3
  {
    type: "concept",
    heading: { pl: "Co to jest opis obrazu", ua: "Що таке опис картини" },
    formula: "s. 75  ·  ramka  ·  zapamiętaj",
    promptPlace: "before",
    prompt: {
      pl: "To *ramka z podręcznika* — definicja do zeszytu. Zapisz ją. Most: український *опис картини*.",
      ua: "Це *рамка з підручника* — означення до зошита. Запиши. Міст: український *опис картини*."
    },
    text: {
      pl: "**Opis obrazu** to rodzaj wypowiedzi zawierającej opis tego, co zostało wyobrażone na obrazie, oraz informacje, **w jaki sposób zostało to namalowane**.",
      ua: "**Опис картини** — це висловлювання, яке містить опис того, що зображено на картині, та інформацію, **у який спосіб це намальовано**."
    },
    items: [
      { pl: "Dwie rzeczy naraz: *co widać* i *jak to namalowano*.", ua: "Дві речі разом: *що видно* і *як намальовано*." },
      { pl: "Co namalowano: kwiaty, wazon, tło — przedmioty i ich miejsce.", ua: "Що намальовано: квіти, ваза, тло — предмети і їхнє місце." },
      { pl: "Jak namalowano: barwy, pędzel, faktura (gruba farba), kompozycja.", ua: "Як намальовано: барви, пензель, фактура (густа фарба), композиція." },
      { pl: "Synonimy z pomocy: *obraz = dzieło = malowidło = malunek = płótno*.", ua: "Синоніми: *obraz = dzieło = malowidło = malunek = płótno* (картина / твір / полотно)." }
    ],
    task: {
      id: "t39-s03-definicja",
      type: "true-false",
      question: {
        pl: "Czy opis obrazu to TYLKO lista przedmiotów («jest wazon i kwiaty») — bez barw, kompozycji i sposobu malowania?",
        ua: "Чи опис картини — це ЛИШЕ список предметів («є ваза і квіти») — без барв, композиції і способу малювання?"
      },
      answer: false,
      hint: {
        pl: "Ramka ma dwa człony: co wyobrażone + w jaki sposób namalowane.",
        ua: "Рамка має два члени: що зображено + яким способом намальовано."
      },
      explanation: {
        pl: "Fałsz. Potrzebujesz obu: co widać *i* jak to namalowano (barwy, pędzel, układ).",
        ua: "Хиба. Потрібні обидва: що видно *і* як намальовано (барви, пензель, уклад)."
      }
    }
  },
  // 4
  {
    type: "concept",
    heading: { pl: "Trzy części opisu", ua: "Три частини опису" },
    formula: "s. 75  ·  schemat wypowiedzi  ·  zapamiętaj",
    promptPlace: "before",
    prompt: {
      pl: "Druga ramka z podręcznika. Zapisz schemat do zeszytu. Znasz go z lekcji 16.",
      ua: "Друга рамка з підручника. Запиши схему в зошит. Знаєш її з уроку 16."
    },
    text: {
      pl: "**Opis obrazu – schemat wypowiedzi.** Jak każda forma wypowiedzi, opis składa się z trzech części: wstępu, rozwinięcia i zakończenia.",
      ua: "**Опис картини — схема висловлювання.** Як кожна форма висловлювання, опис складається з трьох частин: вступу, розвинення і кінцівки."
    },
    items: [
      { pl: "*Wstęp:* autor, tytuł, data, wielkość, miejsce przechowywania.", ua: "*Вступ:* автор, назва, дата, розмір, місце зберігання." },
      { pl: "*Rozwinięcie:* co w centrum, co w tle; barwy; kompozycja; położenie, kształt, kolor.", ua: "*Розвинення:* що в центрі, що на тлі; барви; композиція; розташування, форма, колір." },
      { pl: "*Zakończenie:* czy ci się podoba i dlaczego; nastrój; czy chciałbyś reprodukcję w pokoju.", ua: "*Кінцівка:* чи подобається і чому; настрій; чи хотів би репродукцію в кімнаті." }
    ],
    task: {
      id: "t39-s04-czesci",
      type: "single-choice",
      question: {
        pl: "Gdzie w opisie podajesz rok, wymiary i muzeum?",
        ua: "Де в описі подаєш рік, розміри і музей?"
      },
      options: [
        { id: "a", label: { pl: "We wstępie.", ua: "У вступі." } },
        { id: "b", label: { pl: "Tylko w zakończeniu, przy wrażeniach.", ua: "Лише в кінцівці, при враженнях." } },
        { id: "c", label: { pl: "Nigdzie — to biografia, której dziś nie wolno.", ua: "Ніде — це біографія, якої сьогодні не можна." } }
      ],
      answer: "a",
      hint: {
        pl: "Schemat s. 75: «Tytuł i autor… data… wielkość… miejsce przechowywania». Która część?",
        ua: "Схема с. 75: «Назва і автор… дата… розмір… місце зберігання». Яка частина?"
      },
      explanation: {
        pl: "Wstęp = fakty o dziele (nie o chorobie malarza). Wrażenia są na końcu.",
        ua: "Вступ = факти про твір (не про хворобу маляра). Враження — наприкінці."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Oglądamy Słoneczniki", ua: "Дивимось Słoneczniki" },
    formula: "s. 74  ·  reprodukcja  ·  dane",
    promptPlace: "before",
    prompt: {
      pl: "Podpis w podręczniku (czytaj *van Gok*): Vincent van Gogh, *Słoneczniki*, 1889, 95 cm × 73 cm, Muzeum van Gogha, Amsterdam. To *reprodukcja szkolna* układu tego dzieła — fakty dotyczą *oryginału*. Rodzaj malarstwa: *martwa natura* (натюрморт) — kwiaty w wazonie, bez ludzi.",
      ua: "Підпис у підручнику (читай *ван Гок*): Vincent van Gogh, *Słoneczniki*, 1889, 95 cm × 73 cm, Музей ван Гога, Амстердам. Це *шкільна репродукція* композиції — факти стосуються *оригіналу*. Вид живопису: *martwa natura* (натюрморт) — квіти у вазі, без людей."
    },
    visual: vizGhT39("t39-sloneczniki.png", {
      prompt: "Słoneczniki w wazonie.",
      alt: {
        pl: "Bukiet słoneczników w glinianym wazonie na żółtym tle — układ obrazu van Gogha.",
        ua: "Букет соняшників у глиняній вазі на жовтому тлі — композиція картини ван Гога."
      }
    }),
    items: [
      { pl: "Centrum: gliniany dzban / wazon i bukiet. Tło: prawie jednolita, ciepła płaszczyzna.", ua: "Центр: глиняний глечик / ваза і букет. Тло: майже однотонна тепла площина." },
      { pl: "Kwiaty w różnych fazach: świeże żółte główki i ciemniejsze, usychające.", ua: "Квіти в різних фазах: свіжі жовті головки і темніші, що в’януть." },
      { pl: "Van Gogh namalował *kilka* wersji słoneczników (cykl). Ten z podręcznika = Amsterdam, 1889.", ua: "Ван Гог намалював *кілька* версій соняшників (цикл). Ця з підручника = Амстердам, 1889." }
    ],
    task: {
      id: "t39-s05-martwa",
      type: "single-choice",
      question: {
        pl: "Jaki to rodzaj dzieła?",
        ua: "Який це вид твору?"
      },
      options: [
        { id: "a", label: { pl: "Martwa natura — bukiet kwiatów w wazonie.", ua: "Натюрморт — букет квітів у вазі." } },
        { id: "b", label: { pl: "Portret van Gogha (malarz maluje swoją twarz).", ua: "Портрет ван Гога (маляр малює своє обличчя)." } },
        { id: "c", label: { pl: "Mapa pogody ze studia z lekcji 34.", ua: "Мапа погоди зі студії з уроку 34." } }
      ],
      answer: "a",
      hint: {
        pl: "Czy na płótnie jest twarz człowieka, czy kwiaty i naczynie?",
        ua: "На полотні обличчя людини чи квіти і посудина?"
      },
      explanation: {
        pl: "Martwa natura = przedmioty / kwiaty. Tu: słoneczniki w dzbanie. To nie portret i nie prognoza.",
        ua: "Натюрморт = предмети / квіти. Тут: соняшники в глечику. Це не портрет і не прогноз."
      }
    }
  },
  // 6
  {
    type: "observe",
    heading: { pl: "Co widzimy · ciepło czy zimno", ua: "Що бачимо · тепло чи холод" },
    formula: "s. 74  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: przyjrzyjcie się obrazowi i porozmawiajcie. 1) Z czym kojarzy się to, co widzicie? 2) Jakie odczucia — *ciepła* czy *zimna* — wywołują kolory kwiatów, dzbana, tła? W zeszycie dwa zdania.",
      ua: "Підручник: придивіться до картини і поговоріть. 1) З чим асоціюється те, що бачите? 2) Які відчуття — *тепла* чи *холоду* — викликають кольори квітів, глечика, тла? У зошиті два речення."
    },
    items: [
      { pl: "Skojarzenia: lato, słońce, ogród, miód, ciepło kuchni — twoje słowa, byle z obrazu.", ua: "Асоціації: літо, сонце, сад, мед, тепло кухні — твої слова, аби з картини." },
      { pl: "Barwy *ciepłe* dominują: żółcie, ochra, pomarańcz, brąz. Mało błękitu i szarości.", ua: "Домінують *теплі* барви: жовті, охра, помаранч, коричневий. Мало блакиті й сірого." },
      { pl: "Program: używasz terminów *barwy ciepłe / zimne*.", ua: "Програма: вживаєш терміни *теплі / холодні барви*." }
    ],
    task: {
      id: "t39-s06-barwy",
      type: "single-choice",
      question: {
        pl: "Jakie odczucie NA PEWNO budzą kolory kwiatów, dzbana i tła na tym obrazie?",
        ua: "Яке відчуття НАПЕВНО будять кольори квітів, глечика і тла на цій картині?"
      },
      options: [
        { id: "a", label: { pl: "Ciepło — żółcie, ochra, pomarańcz, brąz.", ua: "Тепло — жовті, охра, помаранч, коричневий." } },
        { id: "b", label: { pl: "Zimno — jak lód, srebro i blady błękit zimy.", ua: "Холод — як лід, срібло і бліда блакить зими." } },
        { id: "c", label: { pl: "Tylko czarno-biała gazeta, bez barw.", ua: "Лише чорно-біла газета, без барв." } }
      ],
      answer: "a",
      hint: {
        pl: "Popatrz na reprodukcję. Czy tło jest lodowato niebieskie?",
        ua: "Подивись на репродукцію. Чи тло крижано-блакитне?"
      },
      explanation: {
        pl: "Ciepłe barwy. Zimne (błękit, srebro) tu prawie nie grają. To nie gazeta.",
        ua: "Теплі барви. Холодні (блакить, срібло) тут майже не грають. Це не газета."
      }
    }
  },
  // 7
  {
    type: "observe",
    heading: { pl: "Dlaczego słoneczniki", ua: "Чому соняшники" },
    formula: "s. 75  ·  zad. 2  ·  tekst",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj tekst z podręcznika. Na jego podstawie wyjaśnij, *dlaczego* artysta malował słoneczniki. Glosa z pól: *Arles* — czyt. *Arl*. Nie dopisujemy ucha ani innych filmów — tylko ten tekst. Proza: polski + 🇺🇦 pod akapitem. Odsłoń cztery części.",
      ua: "Прочитай текст з підручника. На його основі поясни, *чому* митець малював соняшники. Глоса: *Arles* — чит. *Arl*. Не дописуємо вуха і фільмів — лише цей текст. Проза: польська + 🇺🇦 під абзацом. Відкрий чотири частини."
    },
    reveal: true,
    steps: [
      {
        formula: "akapit 1",
        text: {
          pl: "Kwiaty inspirowały twórców od najdawniejszych czasów. Jednym z najbardziej znanych artystów, który je malował, był żyjący w XIX wieku holenderski malarz Vincent van Gogh.",
          ua: "Квіти надихали митців від найдавніших часів. Одним із найвідоміших художників, який їх малював, був голландський маляр XIX століття Vincent van Gogh."
        }
      },
      {
        formula: "akapit 2  ·  Arles = Arl",
        text: {
          pl: "Podczas pobytu w miejscowości Arles w południowej Francji artysta zachwycił się tamtejszym krajobrazem, skąpanym w blasku słońca. Swój podziw pragnął oddać na obrazach.",
          ua: "Під час перебування в містечку Arles на півдні Франції митець захопився тамтешнім краєвидом, купаним у блиску сонця. Свій подив хотів віддати на картинах."
        }
      },
      {
        formula: "akapit 3",
        text: {
          pl: "Słoneczniki – kwiaty, które przypominały artyście to miejsce – stały się wyrazem jego fascynacji. Rośliny na obrazach van Gogha są pełne ciepłych i jaskrawych barw, a pofalowane płatki przypominają promienie skwarnego słońca. Poskręcane łodygi kwiatów zdają się uginać od upału.",
          ua: "Соняшники — квіти, які нагадували митцеві це місце — стали виявом його захвату. Рослини на картинах ван Гога повні теплих і яскравих барв, а хвилясті пелюстки нагадують промені спекотного сонця. Покручені стебла ніби згинаються від спеки."
        }
      },
      {
        formula: "akapit 4",
        text: {
          pl: "Radosne, żywe, malowane przez Vincenta van Gogha słoneczniki należą do najbardziej rozpoznawalnych dzieł światowego malarstwa.",
          ua: "Радісні, живі соняшники, намальовані Вінсентом ван Гогом, належать до найупізнаваніших творів світового малярства."
        }
      }
    ],
    task: {
      id: "t39-s07-dlaczego",
      type: "single-choice",
      question: {
        pl: "Dlaczego — WEDŁUG TEGO TEKSTU — van Gogh malował słoneczniki?",
        ua: "Чому — ЗА ЦИМ ТЕКСТОМ — ван Гог малював соняшники?"
      },
      options: [
        { id: "a", label: { pl: "Bo w Arles zachwycił się słońcem; słoneczniki przypominały mu to miejsce i stały się wyrazem fascynacji.", ua: "Бо в Arles захопився сонцем; соняшники нагадували йому це місце і стали виявом захвату." } },
        { id: "b", label: { pl: "Bo podręcznik każe opisać ucho i chorobę — tego w tekście nie ma.", ua: "Бо підручник каже описати вухо і хворобу — цього в тексті немає." } },
        { id: "c", label: { pl: "Bo to ilustracja do wiersza Ratajczaka z lekcji 38.", ua: "Бо це ілюстрація до вірша Ратайчака з уроку 38." } }
      ],
      answer: "a",
      hint: {
        pl: "Akapit 2–3: Arles, blask słońca, kwiaty «przypominały to miejsce». Czy jest zdanie o uchu?",
        ua: "Абзаци 2–3: Arles, блиск сонця, квіти «нагадували це місце». Чи є речення про вухо?"
      },
      explanation: {
        pl: "Tekst: Arles, słońce, słoneczniki = fascynacja miejscem. Ucha nie ma. To nie ilustracja do wiersza z T38.",
        ua: "Текст: Arles, сонце, соняшники = захват місцем. Вуха немає. Це не ілюстрація до вірша з T38."
      }
    }
  },
  // 8
  {
    type: "example",
    heading: { pl: "Słownictwo z ramki", ua: "Словництво з рамки" },
    formula: "s. 75  ·  zad. 3  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: *Opisz obraz Vincenta van Gogha według podanych wskazówek. Wykorzystaj słownictwo z ramki.* Najpierw zapisz wyrażenia. Potem rozbiór: czym kończysz każde — na *tym* obrazie. Program: stosunki przestrzenne (*w centrum, w tle, w wazonie*).",
      ua: "Підручник: *опиши картину ван Гога за вказівками. Використай словництво з рамки.* Спочатку запиши вирази. Потім розбір: чим закінчуєш кожне — на *цій* картині. Програма: просторові відношення (*у центрі, на тлі, у вазі*)."
    },
    text: {
      pl: "tło obrazu  ·  prawie całą przestrzeń obrazu zajmują  ·  kwiaty znajdują się  ·  kwiaty o barwach  ·  słoneczniki mają kolory  ·  bukiet słoneczników  ·  ułożenie kwiatów w wazonie  ·  kompozycja kwiatów",
      ua: "тло картини  ·  майже весь простір картини займають  ·  квіти знаходяться  ·  квіти барв  ·  соняшники мають кольори  ·  букет соняшників  ·  уклад квітів у вазі  ·  композиція квітів"
    },
    items: [
      { pl: "**tło obrazu** — za bukietem: ciepła, prawie jednolita płaszczyzna (żółć, ochra).", ua: "**tło obrazu** — за букетом: тепла, майже однотонна площина (жовть, охра)." },
      { pl: "**prawie całą przestrzeń obrazu zajmują** — kwiaty i wazon; mało pustego tła.", ua: "**prawie całą przestrzeń obrazu zajmują** — квіти і ваза; мало порожнього тла." },
      { pl: "**kwiaty znajdują się** — w centrum, w glinianym wazonie.", ua: "**kwiaty znajdują się** — у центрі, в глиняній вазі." },
      { pl: "**kwiaty o barwach** — ciepłych: żółtych, ochrowych, brązowych.", ua: "**kwiaty o barwach** — теплих: жовтих, охристих, коричневих." },
      { pl: "**słoneczniki mają kolory** — od jasnej żółci do ciemnego brązu (świeże i usychające główki).", ua: "**słoneczniki mają kolory** — від ясної жовті до темного коричневого (свіжі і зів’ялі головки)." },
      { pl: "**bukiet słoneczników** — zbity; kilka kwiatów w jednym naczyniu.", ua: "**bukiet słoneczników** — щільний; кілька квітів в одній посудині." },
      { pl: "**ułożenie kwiatów w wazonie** — główki na różne strony, łodygi poskręcane.", ua: "**ułożenie kwiatów w wazonie** — головки в різні боки, стебла покручені." },
      { pl: "**kompozycja kwiatów** — pionowa: wazon na dole, kwiaty wypełniają górę; to martwa natura.", ua: "**kompozycja kwiatów** — вертикальна: ваза внизу, квіти заповнюють гору; це натюрморт." }
    ],
    task: {
      id: "t39-s08-ramka",
      type: "multiple-choice",
      question: {
        pl: "Które dokończenia NA PEWNO biorą wyrażenie z ramki i pasują do *tego* obrazu? Zaznacz wszystkie pewne.",
        ua: "Які закінчення НАПЕВНО беруть вираз з рамки і пасують до *цієї* картини? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Kwiaty znajdują się w centrum, w glinianym wazonie; bukiet słoneczników jest zbity.", ua: "Kwiaty znajdują się у центрі, в глиняній вазі; bukiet słoneczników щільний." } },
        { id: "b", label: { pl: "Prawie całą przestrzeń obrazu zajmują kwiaty; tło obrazu jest ciepłe i dość płaskie.", ua: "Prawie całą przestrzeń obrazu zajmują квіти; tło obrazu тепле і досить плоске." } },
        { id: "c", label: { pl: "Na pierwszym planie stoi pędziwiatr Tuwima z lekcji 32.", ua: "На передньому плані стоїть pędziwiatr Тувіма з уроку 32." } },
        { id: "d", label: { pl: "Kwiaty o barwach ciepłych; słoneczniki mają kolory: żółć, ochrę, brąz.", ua: "Kwiaty o barwach теплих; słoneczniki mają kolory: жовть, охру, коричневий." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ramka: tło, przestrzeń, znajdują się, o barwach, kolory, bukiet, ułożenie, kompozycja. Czy Tuwim jest na tym płótnie?",
        ua: "Рамка: тло, простір, znajdują się, o barwach, kolory, bukiet, ułożenie, kompozycja. Чи Тувім є на цьому полотні?"
      },
      explanation: {
        pl: "Z ramki: znajdują się / bukiet / przestrzeń / tło / o barwach / mają kolory. Pędziwiatr jest w innym wierszu.",
        ua: "З рамки: znajdują się / bukiet / przestrzeń / tło / o barwach / mają kolory. Pędziwiatr — в іншому вірші."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Wstęp · fakty o dziele", ua: "Вступ · факти про твір" },
    formula: "s. 74–75  ·  dane z podpisu",
    promptPlace: "before",
    prompt: {
      pl: "Wstęp to *metryczka* obrazu, nie opowieść o życiu. Z podręcznika: autor, tytuł, 1889, 95 × 73 cm, Muzeum van Gogha w Amsterdamie. Czyt. *Vincent van Gok*. Program: miejsce przechowywania — ten egzemplarz jest w Amsterdamie. Inne wersje cyklu wiszą w innych muzeach; dziś zapamiętaj *ten* podpis.",
      ua: "Вступ — це *метричка* картини, не розповідь про життя. З підручника: автор, назва, 1889, 95 × 73 см, Музей ван Гога в Амстердамі. Чит. *Вінсент ван Гок*. Програма: місце зберігання — цей примірник в Амстердамі. Інші версії циклу є в інших музеях; сьогодні запам’ятай *цей* підпис."
    },
    items: [
      { pl: "Autor: *Vincent van Gogh* (holenderski malarz, XIX wiek — z tekstu s. 75).", ua: "Автор: *Vincent van Gogh* (голландський маляр, XIX ст. — з тексту с. 75)." },
      { pl: "Tytuł: *Słoneczniki*. Data: *1889*. Wymiary: *95 × 73 cm*.", ua: "Назва: *Słoneczniki*. Дата: *1889*. Розміри: *95 × 73 см*." },
      { pl: "Muzeum van Gogha, Amsterdam. Rodzaj: martwa natura.", ua: "Музей ван Гога, Амстердам. Вид: натюрморт." }
    ],
    task: {
      id: "t39-s09-wstep",
      type: "multiple-choice",
      question: {
        pl: "Które fakty NA PEWNO wchodzą do wstępu *tego* opisu z podręcznika? Zaznacz wszystkie pewne.",
        ua: "Які факти НАПЕВНО входять до вступу *цього* опису з підручника? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Vincent van Gogh, Słoneczniki, 1889.", ua: "Vincent van Gogh, Słoneczniki, 1889." } },
        { id: "b", label: { pl: "95 × 73 cm, Muzeum van Gogha w Amsterdamie.", ua: "95 × 73 см, Музей ван Гога в Амстердамі." } },
        { id: "c", label: { pl: "Szczegół o uchu i pobycie w szpitalu (tego podpisu nie ma).", ua: "Подробиця про вухо і лікарню (цього підпису немає)." } },
        { id: "d", label: { pl: "To martwa natura.", ua: "Це натюрморт." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Przeczytaj podpis pod reprodukcją na s. 74. Czy jest tam szpital?",
        ua: "Прочитай підпис під репродукцією на с. 74. Чи є там лікарня?"
      },
      explanation: {
        pl: "Wstęp: autor, tytuł, rok, wymiary, muzeum, martwa natura. Ucha w podręczniku nie ma.",
        ua: "Вступ: автор, назва, рік, розміри, музей, натюрморт. Вуха в підручнику немає."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Piszę opis", ua: "Пишу опис" },
    formula: "s. 75  ·  zad. 3  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Napisz *krótki* opis (6–8 zdań) według schematu. We wstępie metryczka. W rozwinięciu: centrum / tło, barwy ciepłe, jedno zdanie *jak namalowano* (grube pociągnięcia, energia). W zakończeniu: sąd i nastrój. Wzór odsłoń, potem pisz *swoje* zdania — nie kopiuj jeden do jednego.",
      ua: "Напиши *короткий* опис (6–8 речень) за схемою. У вступі метричка. У розвиненні: центр / тло, теплі барви, одне речення *як намальовано* (густі мазки, енергія). У кінцівці: суд і настрій. Відкрий зразок, потім пиши *свої* речення — не копіюй один в один."
    },
    reveal: true,
    steps: [
      {
        formula: "wzór  ·  jedna z możliwości",
        text: {
          pl: [
            "Obraz «Słoneczniki» namalował Vincent van Gogh w 1889 roku. Dzieło ma wymiary 95 × 73 cm i znajduje się w Muzeum van Gogha w Amsterdamie. To martwa natura.",
            "W centrum stoi gliniany wazon z bukietem. Kwiaty zajmują prawie całą przestrzeń; tło jest ciepłe i dość płaskie. Dominują żółcie, ochra i brąz. Grube pociągnięcia pędzla dają wrażenie ruchu.",
            "Obraz podoba mi się, bo jest pełen słońca. Chciałbym / chciałabym mieć reprodukcję w pokoju — wygląda jak lampa z wiersza, ale to już farba, nie kwiat z płotu."
          ],
          ua: [
            "Картину «Słoneczniki» намалював Vincent van Gogh 1889 року. Твір має розміри 95 × 73 см і зберігається в Музеї ван Гога в Амстердамі. Це натюрморт.",
            "У центрі стоїть глиняна ваза з букетом. Квіти займають майже весь простір; тло тепле і досить плоске. Домінують жовті, охра і коричневий. Густі мазки дають враження руху.",
            "Картина мені подобається, бо повна сонця. Я хотів / хотіла би репродукцію в кімнаті."
          ]
        }
      }
    ],
    task: {
      id: "t39-s10-opis",
      type: "open-answer",
      question: {
        pl: "Napisz wstęp opisu (2–3 zdania): autor, tytuł, rok, wymiary albo muzeum, martwa natura.",
        ua: "Напиши вступ опису (2–3 речення): автор, назва, рік, розміри або музей, натюрморт."
      },
      answer: [
        "Obraz «Słoneczniki» namalował Vincent van Gogh w 1889 roku. Dzieło ma wymiary 95 × 73 cm i znajduje się w Muzeum van Gogha w Amsterdamie. To martwa natura.",
        "Vincent van Gogh namalował obraz «Słoneczniki» w 1889 roku. Obraz znajduje się w Muzeum van Gogha w Amsterdamie."
      ],
      hint: {
        pl: "Weź podpis ze s. 74. Nie pisz o uchu. Polski.",
        ua: "Візьми підпис зі с. 74. Не пиши про вухо. Польською."
      },
      explanation: {
        pl: "Silnik nie ocenia stylu. Sprawdź sam: autor + tytuł + 1889 + (wymiary lub Amsterdam) + martwa natura. Resztę opisu dokończ w zeszycie (rozwinięcie i zakończenie).",
        ua: "Рушій не оцінює стиль. Сам: автор + назва + 1889 + (розміри або Амстердам) + натюрморт. Решту опису допиши в зошиті."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 74–75  ·  lekcja 39",
    promptPlace: "before",
    prompt: {
      pl: "Zakończenie opisu: wrażenia i *własny sąd* (podoba się / nie; nastrój; reprodukcja w pokoju). W zeszycie dokończ rozwinięcie i zakończenie. Deszczyk Tuwima — lekcja 40. Nie zmyślamy biografii.",
      ua: "Кінцівка опису: враження і *власний суд* (подобається / ні; настрій; репродукція в кімнаті). У зошиті допиши розвинення і кінцівку. Deszczyk Тувіма — урок 40. Біографію не вигадуємо."
    },
    items: [
      { pl: "Opis obrazu = co widać + jak namalowano; trzy części.", ua: "Опис картини = що видно + як намальовано; три частини." },
      { pl: "Martwa natura; barwy ciepłe; centrum = wazon i bukiet.", ua: "Натюрморт; теплі барви; центр = ваза і букет." },
      { pl: "Dlaczego słoneczniki: Arles, słońce, fascynacja miejscem (tekst s. 75).", ua: "Чому соняшники: Arles, сонце, захват місцем (текст с. 75)." },
      { pl: "Praca domowa: pełny opis w zeszycie (wstęp + rozwinięcie + zakończenie) ze słownictwem z ramki.", ua: "Домашня: повний опис у зошиті (вступ + розвинення + кінцівка) зі словництвом з рамки." }
    ],
    task: {
      id: "t39-s11-karta",
      type: "true-false",
      question: {
        pl: "Czy we wstępie opisu Słoneczników trzeba opisać chorobę van Gogha i ucięte ucho?",
        ua: "Чи у вступі опису Słoneczników треба описати хворобу ван Гога і відрізане вухо?"
      },
      answer: false,
      hint: {
        pl: "Kartka tematu 39: «nie zmyśla biografii». Co stoi w podpisie na s. 74?",
        ua: "Картка теми 39: «не вигадує біографії». Що стоїть у підписі на с. 74?"
      },
      explanation: {
        pl: "Fałsz. Wstęp = autor, tytuł, data, wielkość, muzeum. Ucha w podręczniku nie ma. Wrażenia — w zakończeniu.",
        ua: "Хиба. Вступ = автор, назва, дата, розмір, музей. Вуха в підручнику немає. Враження — в кінцівці."
      }
    }
  }
] };
