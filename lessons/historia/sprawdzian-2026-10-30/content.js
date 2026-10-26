function opt(id, pl, ua) {
  return { id: id, label: { pl: pl, ua: ua } };
}

function task(spec) {
  var t = {
    id: spec.id,
    type: spec.type || "single-choice",
    question: {
      pl: spec.qr ? [[spec.q], [spec.qr]] : spec.q,
      ua: spec.qu
    },
    answer: spec.answer,
    hint: { pl: spec.hint, ua: spec.hintu },
    explanation: { pl: spec.exr ? spec.exr + " " + spec.ex : spec.ex, ua: spec.exu }
  };
  if (spec.options) t.options = spec.options;
  if (spec.mistakes) t.mistakes = spec.mistakes;
  return t;
}

function ru(pl, ua) {
  return { pl: pl, ua: ua };
}

function rule(lines) {
  return { pl: lines };
}

function miss(answer, pl, ua) {
  return { answer: answer, feedback: { pl: pl, ua: ua } };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Sprawdzian 30.10 — Pierwsze cywilizacje", ua: "Контрольна 30.10 — Перші цивілізації" },
      formula: "Wczoraj i dziś · s. 8–35 · Kurek",
      promptPlace: "before",
      prompt: {
        pl: [
          "Контрольная 30 октября, история, учительница Kurek Monika. Тема: Pierwsze cywilizacje, уроки 1–6 учебника «Wczoraj i dziś».",
          "Сверху жёлтая рамка — фраза по-польски. Её говоришь вслух. Ниже смысл по-русски, потом задание."
        ],
        ua: "Контрольна 30 жовтня. Тема: Pierwsze cywilizacje, уроки 1–6 підручника «Wczoraj i dziś». Жовта рамка — фраза польською."
      },
      items: [
        ru("1. Первые люди: кочевники и оседлые, неолитическая революция, камень, бронза, железо.", "1. Перші люди: кочівники й осілі, неолітична революція, камінь, бронза, залізо."),
        ru("2. Месопотамия: изобретения шумеров и кодекс Хаммурапи.", "2. Месопотамія: винаходи шумерів і кодекс Хаммурапі."),
        ru("3. Египет: пирамида общества, фараон, политеизм, мумификация, саркофаг, иероглифы.", "3. Єгипет: піраміда суспільства, фараон, політеїзм, муміфікація, саркофаг, ієрогліфи."),
        ru("4. Израиль: монотеизм, Тора, Декалог, менора, пророк.", "4. Ізраїль: монотеїзм, Тора, Декалог, менора, пророк."),
        ru("5. Индия и Китай: касты, индуизм, пагода, изобретения.", "5. Індія і Китай: касти, індуїзм, пагода, винаходи."),
        ru("6. Письмо: картинки, клинопись, алфавит. Папирус, глиняные таблички, пергамент, бумага.", "6. Письмо: малюнки, клинопис, абетка. Папірус, глиняні таблички, пергамент, папір."),
        ru("7. Все цивилизации на карте: река или край.", "7. Усі цивілізації на карті: ріка або край.")
      ]
    },
    {
      type: "concept",
      heading: { pl: "1. Кочевники и оседлые", ua: "1. Кочівники й осілі" },
      rule: rule([
        "*Koczowniczy tryb życia* to wędrówka za pożywieniem, bez stałego domu.",
        "*Osiadły tryb życia* to stałe mieszkanie przy polach i stadach.",
        "*Rewolucja neolityczna* to przejście do uprawy ziemi, hodowli i osad."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Кочевник идёт за едой: собирает плоды, охотится, ночует в шалаше или пещере. Орудие — pięściak, копьё с каменным наконечником. Ещё огонь и речь.",
          "Оседлый остаётся у поля. Еда — посеянное зерно и прирученные животные. Это и есть rewolucja neolityczna, около 10 000 лет до н.э.",
          "В тетрадь: Rewolucja neolityczna to przejście od życia koczowniczego do osiadłego."
        ],
        ua: "Кочівник іде за їжею. Осілий лишається біля поля. Rewolucja neolityczna — перехід до рільництва і тваринництва."
      },
      items: [
        ru("Koczownicy: zbieractwo, myślistwo, szałas albo jaskinia.", "Кочівники: збиральництво, мисливство, курінь або печера."),
        ru("Osiadli: uprawa zbóż, hodowla, stała osada.", "Осілі: рільництво, тваринництво, стале поселення.")
      ],
      task: task({
        id: "s30-neolit",
        q: "Czym jest rewolucja neolityczna?",
        qr: "По-русски: что такое неолитическая революция?",
        qu: "Що таке неолітична революція?",
        options: [
          opt("a", "przejście od zbieractwa i myślistwa do uprawy ziemi, hodowli i osiadłego życia", "перехід від збиральництва і мисливства до рільництва, тваринництва і осілого життя"),
          opt("b", "wynalezienie alfabetu i budowa pierwszych piramid", "винайдення абетки і будівництво перших пірамід"),
          opt("c", "podbój Mezopotamii przez Hammurabiego", "підкорення Месопотамії Хаммурапі")
        ],
        answer: "a",
        hint: "Ищи смену еды: с охоты на поле и стадо.",
        hintu: "Шукай зміну їжі: з полювання на поле і стадо.",
        exr: "Люди научились сеять и держать животных, поэтому остались на месте.",
        ex: "Rewolucja neolityczna to uprawa, hodowla i osiadłe życie.",
        exu: "Люди навчилися сіяти і тримати тварин, тому лишилися на місці.",
        mistakes: [
          miss("b", "Алфавит и пирамиды — гораздо позже, уже у государств с письмом.", "Абетка і піраміди значно пізніше, уже в держав із письмом."),
          miss("c", "Хаммурапи — царь Вавилона. Неолит — про еду и поселения, не про его войны.", "Хаммурапі — цар Вавилона. Неоліт — про їжу і поселення, не про його війни.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Эпохи: камень, бронза, железо", ua: "Доби: камінь, бронза, залізо" },
      rule: rule([
        "*Epoka* bierze nazwę od materiału narzędzi: kamień, brąz, żelazo.",
        "*Brąz* powstaje z miedzi i cyny.",
        "*Żelazo* wytapiano w dymarce. Jest twardsze od brązu."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Эпоха называется по материалу орудий, не по «характеру народа».",
          "Камень тупится. Бронза — сплав меди и олова, твёрже. Железо ещё твёрже, его плавили в печи dymarka около 1200 года до н.э.",
          "Порядок всегда один: kamień → brąz → żelazo."
        ],
        ua: "Доба називається за матеріалом знарядь. Бронза — мідь і олово. Залізо твердіше, його плавили в димарці."
      },
      items: [
        ru("Kamień: pięściak, trudno ostrzyć.", "Камінь: рубило, важко гострити."),
        ru("Brąz = miedź + cyna.", "Бронза = мідь + олово."),
        ru("Żelazo: dymarka, od ok. 1200 p.n.e.", "Залізо: димарка, від бл. 1200 до н.е.")
      ],
      task: task({
        id: "s30-epoki",
        q: "Które zdanie jest prawdziwe?",
        qr: "По-русски: какое предложение верное?",
        qu: "Яке речення правдиве?",
        options: [
          opt("a", "Brąz to stop miedzi i cyny. Epoka żelaza jest późniejsza niż epoka brązu.", "Бронза — сплав міді й олова. Доба заліза пізніша за добу бронзи."),
          opt("b", "Brąz robi się z gliny. Żelazo było wcześniej niż kamień.", "Бронзу роблять із глини. Залізо було раніше за камінь."),
          opt("c", "Nazwa epoki pochodzi od imienia władcy, nie od materiału narzędzi.", "Назва доби походить від імені володаря, не від матеріалу знарядь.")
        ],
        answer: "a",
        hint: "Сплав: медь и олово. Порядок: камень, потом бронза, потом железо.",
        hintu: "Сплав: мідь і олово. Порядок: камінь, потім бронза, потім залізо.",
        exr: "Бронза — медь плюс олово. Железо пришло позже и твёрже бронзы.",
        ex: "Brąz = miedź + cyna. Żelazo jest późniejsze i twardsze.",
        exu: "Бронза — мідь плюс олово. Залізо пізніше і твердіше за бронзу.",
        mistakes: [
          miss("b", "Глина — не металл. Камень был первым материалом орудий.", "Глина не є металом. Камінь був першим матеріалом знарядь."),
          miss("c", "Название эпохи берётся от материала: камень, бронза или железо.", "Назва доби береться від матеріалу: камінь, бронза чи залізо.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "2. Шумеры между двух рек", ua: "2. Шумери між двох рік" },
      rule: rule([
        "*Mezopotamia* leży między *Tygrysem* i *Eufratem*.",
        "*Sumerowie* tworzyli miasta-państwa, np. Ur i Uruk.",
        "Wynalazki Sumerów: *pismo klinowe*, koło, żagiel, koło garncarskie, liczenie o podstawie 60, *zikkurat*."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Mezopotamia значит «междуречье». Реки Тигр и Евфрат давали ил, воду для каналов и путь для торговли. Край — Ближний Восток.",
          "Шумеры не сделали одну империю. У каждого города-государства свой правитель и зиккурат — ступенчатый храм.",
          "Их изобретения, которые спрашивают: клинопись на глине, колесо, парус, гончарный круг, счёт на 60. Отсюда 60 минут в часе."
        ],
        ua: "Месопотамія — між Тигром і Євфратом. Шумери: міста-держави, клинопис, колесо, вітрило, гончарне коло, лічба на 60, зикурат."
      },
      items: [
        ru("Rzeki: Tygrys i Eufrat. Miasta: Ur, Uruk, Babilon.", "Ріки: Тигр і Євфрат. Міста: Ур, Урук, Вавилон."),
        ru("Zikkurat to schodkowa świątynia, nie piramida grobowa.", "Зикурат — ступінчастий храм, не гробниця-піраміда.")
      ],
      task: task({
        id: "s30-sumer",
        type: "multiple-choice",
        q: "Co przypisuje się Sumerom? Zaznacz wszystkie pewne.",
        qr: "По-русски: что относят к шумерам? Отметь всё верное.",
        qu: "Що приписують шумерам? Познач усе певне.",
        options: [
          opt("a", "pismo klinowe na glinianych tabliczkach", "клинопис на глиняних табличках"),
          opt("b", "koło, żagiel i koło garncarskie", "колесо, вітрило і гончарне коло"),
          opt("c", "liczenie o podstawie 60", "лічба з основою 60"),
          opt("d", "hieroglify na papirusie i piramidy nad Nilem", "ієрогліфи на папірусі і піраміди над Нілом")
        ],
        answer: ["a", "b", "c"],
        hint: "Нил, папирус и пирамиды — Египет.",
        hintu: "Ніл, папірус і піраміди — Єгипет.",
        exr: "Три пункта — шумеры. Иероглифы и пирамиды — Египет.",
        ex: "Pismo klinowe, koło, żagiel, koło garncarskie i system 60 to Sumerowie. Hieroglify i piramidy to Egipt.",
        exu: "Три пункти — шумери. Ієрогліфи і піраміди — Єгипет."
      })
    },
    {
      type: "concept",
      heading: { pl: "Кодекс Хаммурапи", ua: "Кодекс Хаммурапі" },
      rule: rule([
        "*Hammurabi* był królem Babilonu w XVIII wieku p.n.e.",
        "*Kodeks Hammurabiego* to spisane prawa.",
        "Jedna zasada: *oko za oko, ząb za ząb*."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Позже над теми же реками вырос Вавилон. Хаммурапи объединил большую часть Междуречья и приказал записать законы на камне.",
          "Законы суровые. Знакомая фраза: oko za oko, ząb za ząb. Это не изобретения шумеров, это уже Вавилон.",
          "Kodeks — сборник законов. Без записи каждый судья помнил обычай по-своему."
        ],
        ua: "Хаммурапі — цар Вавилона. Кодекс — записані закони. Принцип: око за око."
      },
      items: [
        ru("Babilon leży nad Eufratem, w Mezopotamii.", "Вавилон лежить над Євфратом, у Месопотамії."),
        ru("Sumerowie wynaleźli pismo. Hammurabi spisał prawa.", "Шумери винайшли письмо. Хаммурапі записав закони.")
      ],
      task: task({
        id: "s30-kodeks",
        q: "Czym był Kodeks Hammurabiego?",
        qr: "По-русски: чем был кодекс Хаммурапи?",
        qu: "Чим був Кодекс Хаммурапі?",
        options: [
          opt("a", "spisanym zbiorem praw Babilonii, z surowymi karami", "записаною збіркою законів Вавилонії, із суворими карами"),
          opt("b", "świętą księgą Izraelitów, czyli Torą", "священною книгою ізраїльтян, тобто Торою"),
          opt("c", "pierwszym alfabetem Fenicjan", "першою абеткою фінікійців")
        ],
        answer: "a",
        hint: "Хаммурапи — царь. Он записал законы, не азбуку и не Тору.",
        hintu: "Хаммурапі — цар. Він записав закони, не абетку і не Тору.",
        exr: "Кодекс — записанные законы Вавилонии. Тора — книга Израиля. Алфавит — финикийцы.",
        ex: "Kodeks to spisane prawa. Tora należy do Izraela. Alfabet dali Fenicjanie.",
        exu: "Кодекс — записані закони Вавилонії. Тора — книга Ізраїлю. Абетку дали фінікійці.",
        mistakes: [
          miss("b", "Тора — священная книга иудаизма, не законы Вавилона.", "Тора — священна книга юдаїзму, не закони Вавилона."),
          miss("c", "Алфавит создали финикийцы. Хаммурапи пользовался клинописью.", "Абетку створили фінікійці. Хаммурапі користувався клинописом.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "3. Пирамида общества Египта", ua: "3. Піраміда суспільства Єгипту" },
      rule: rule([
        "*Faraon* stoi na szczycie. Ma bardzo silną władzę.",
        "Niżej: kapłani, urzędnicy, żołnierze, kupcy, rzemieślnicy.",
        "Najliczniejsi są *chłopi*. Niewolników było niewielu."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Египет — «дар Нила». Наводнение оставляло ил, поля кормили страну.",
          "Общество рисуют пирамидой. Сверху фараон. Под ним жрецы и чиновники-писцы: они умели читать. Дальше воины, купцы, ремесленники.",
          "Самый широкий слой — крестьяне у каналов. Рабов было мало, чаще пленные в богатых домах. Самая многочисленная группа — chłopi, не рабы."
        ],
        ua: "На вершині фараон. Найчисленніші — селяни, не раби. Жерці й урядовці вміли читати."
      },
      items: [
        ru("Faraon — władca. Kapłani — obrzędy i rada. Urzędnicy — podatki i pismo.", "Фараон — володар. Жерці — обряди. Урядовці — податки і письмо."),
        ru("Chłopi — pola i kanały. To podstawa piramidy.", "Селяни — поля і канали. Це основа піраміди.")
      ],
      task: task({
        id: "s30-piramida",
        q: "Kto stał na szczycie społeczeństwa Egiptu, a kto był najliczniejszy?",
        qr: "По-русски: кто на вершине общества Египта и кого было больше всего?",
        qu: "Хто стояв на вершині суспільства Єгипту, а хто був найчисленніший?",
        options: [
          opt("a", "Na szczycie faraon. Najliczniejsi byli chłopi.", "На вершині фараон. Найчисленніші були селяни."),
          opt("b", "Na szczycie niewolnicy. Najliczniejsi byli kapłani.", "На вершині раби. Найчисленніші були жерці."),
          opt("c", "Na szczycie kupcy. Chłopów w Egipcie nie było.", "На вершині купці. Селян у Єгипті не було.")
        ],
        answer: "a",
        hint: "Узкая вершина — один правитель. Широкое основание — те, кто кормит.",
        hintu: "Вузька вершина — один правитель. Широка основа — ті, хто годує.",
        exr: "Фараон наверху. Крестьян больше всех. Рабы не были главным слоем.",
        ex: "Faraon jest na szczycie. Chłopi są najliczniejsi.",
        exu: "Фараон нагорі. Селян найбільше. Раби не були головним шаром.",
        mistakes: [
          miss("b", "Рабы не правили. Жрецов меньше, чем крестьян.", "Раби не правили. Жерців менше, ніж селян."),
          miss("c", "Купцы — средний слой. Крестьяне были основой.", "Купці — середній шар. Селяни були основою.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Слова Египта", ua: "Слова Єгипту" },
      rule: rule([
        "*Politeizm* to wiara w wielu bogów. U Egipcjan jednym z nich był Ra.",
        "*Mumifikacja* zachowuje ciało. *Sarkofag* to ozdobna trumna.",
        "*Piramida* to grobowiec. *Hieroglify* to pismo obrazkowe Egiptu."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Politeizm: poli — много, theos — бог. Египтяне чтили многих богов. Ra — бог солнца.",
          "Тело сохраняли: вынимали внутренности, бальзамировали, бинтовали. Это мумия. Её клали в sarkofag, а гробницу фараона строили как пирамиду.",
          "Иероглифы — рисуночное письмо на стенах и на папирусе. Это не клинопись шумеров."
        ],
        ua: "Політеїзм — багато богів. Муміфікація зберігає тіло. Саркофаг — оздоблена труна. Піраміда — гробниця. Ієрогліфи — малюнкове письмо."
      },
      items: [
        ru("Nil — rzeka Egiptu. Ra — bóg-słońce.", "Ніл — ріка Єгипту. Ра — бог-сонце."),
        ru("Mumia leży w sarkofagu. Piramida jest grobowcem.", "Мумія лежить у саркофазі. Піраміда — гробниця.")
      ],
      task: task({
        id: "s30-egipt-slowa",
        q: "Które zestawienie jest poprawne?",
        qr: "По-русски: какое соответствие верное?",
        qu: "Яке зіставлення правильне?",
        options: [
          opt("a", "Politeizm — wielu bogów. Mumifikacja — zachowanie ciała. Sarkofag — trumna. Hieroglify — pismo Egiptu.", "Політеїзм — багато богів. Муміфікація — збереження тіла. Саркофаг — труна. Ієрогліфи — письмо Єгипту."),
          opt("b", "Politeizm — jeden Bóg. Piramida — świątynia Sumerów. Hieroglify — alfabet Fenicjan.", "Політеїзм — один Бог. Піраміда — храм шумерів. Ієрогліфи — абетка фінікійців."),
          opt("c", "Sarkofag — rzeka. Mumifikacja — kodeks praw. Ra — król Babilonu.", "Саркофаг — ріка. Муміфікація — кодекс законів. Ра — цар Вавилона.")
        ],
        answer: "a",
        hint: "Один бог — это Израиль. Ступенчатый храм шумеров — зиккурат.",
        hintu: "Один бог — це Ізраїль. Ступінчастий храм шумерів — зикурат.",
        exr: "Политеизм — много богов. Мумия в саркофаге. Иероглифы — письмо Египта. Зиккурат — не пирамида.",
        ex: "Politeizm to wielu bogów. Sarkofag to trumna. Hieroglify należą do Egiptu.",
        exu: "Політеїзм — багато богів. Мумія в саркофазі. Ієрогліфи — письмо Єгипту. Зикурат — не піраміда.",
        mistakes: [
          miss("b", "Один бог — монотеизм. Пирамида — гробница Египта. Иероглифы — не алфавит.", "Один бог — монотеїзм. Піраміда — гробниця Єгипту. Ієрогліфи — не абетка."),
          miss("c", "Саркофаг — гроб. Мумификация — сохранение тела. Ra — бог солнца.", "Саркофаг — труна. Муміфікація — збереження тіла. Ра — бог-сонце.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "4. Израиль: один Бог", ua: "4. Ізраїль: один Бог" },
      rule: rule([
        "*Monoteizm* to wiara w jednego Boga. U Izraelitów był to Jahwe. Religia: *judaizm*.",
        "*Tora* to święta księga, Pięcioksiąg. *Dekalog* to dziesięć przykazań.",
        "*Menora* to siedmioramienny świecznik. *Prorok* głosi wolę Boga."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Египет — много богов. Израиль — один, Jahwe. Это monoteizm. Край на карте: Palestyna, или Kanaan, у Средиземного моря. Город — Jerozolima.",
          "Тора — пять первых книг. Декалог — десять заповедей: Моисей получил их на горе Синай.",
          "Менора — семисвечник в Иерусалимском храме. Пророк — человек, который говорит, что его послал Бог. Пример из традиции: Izajasz."
        ],
        ua: "Монотеїзм — один Бог, Ягве. Тора — П’ятикнижжя. Декалог — десять заповідей. Менора — семисвічник. Пророк звіщає волю Бога."
      },
      items: [
        ru("Egipt: politeizm. Izrael: monoteizm.", "Єгипет: політеїзм. Ізраїль: монотеїзм."),
        ru("Dekalog — 10 przykazań. Tora — księga, nie świecznik.", "Декалог — 10 заповідей. Тора — книга, не свічник.")
      ],
      task: task({
        id: "s30-izrael",
        q: "Które zdanie jest prawdziwe?",
        qr: "По-русски: какое предложение верное?",
        qu: "Яке речення правдиве?",
        options: [
          opt("a", "Monoteizm to wiara w jednego Boga. Tora to księga, Dekalog to przykazania, menora to świecznik.", "Монотеїзм — віра в одного Бога. Тора — книга, Декалог — заповіді, менора — свічник."),
          opt("b", "Monoteizm to wiara w wielu bogów. Menora to kodeks Hammurabiego.", "Монотеїзм — віра в багатьох богів. Менора — кодекс Хаммурапі."),
          opt("c", "Tora to piramida, a prorok to faraon Egiptu.", "Тора — це піраміда, а пророк — фараон Єгипту.")
        ],
        answer: "a",
        hint: "Mono — один. Менора стоит в храме, это не книга и не закон.",
        hintu: "Моно — один. Менора стоїть у храмі, це не книга і не закон.",
        exr: "Один бог — монотеизм. Тора — книга, Декалог — заповеди, менора — светильник.",
        ex: "Monoteizm: jeden Bóg. Tora to księga. Dekalog to przykazania. Menora to świecznik.",
        exu: "Один Бог — монотеїзм. Тора — книга, Декалог — заповіді, менора — свічник.",
        mistakes: [
          miss("b", "Много богов — политеизм. Менора — светильник, кодекс — законы Хаммурапи.", "Багато богів — політеїзм. Менора — свічник, кодекс — закони Хаммурапі."),
          miss("c", "Тора — книга. Фараон — правитель Египта, не пророк Израиля.", "Тора — книга. Фараон — правитель Єгипту, не пророк Ізраїлю.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "5. Индия и Китай", ua: "5. Індія і Китай" },
      rule: rule([
        "*Kasta* to zamknięta, dziedziczna grupa: ten sam zawód i obyczaje.",
        "*Hinduizm* to religia wielu bogów w Indiach.",
        "*Pagoda* to wielopiętrowa wieża świątynna w Chinach.",
        "Wynalazki Chin: papier, porcelana, jedwab, druk, kompas, proch."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Индия: река Инд. После прихода ариев общество разделили на касты. Касту не выбирают каждый год: рождаются в ней, профессия и обычаи переходят детям.",
          "Индуизм — много богов: Brahma творит, Wisznu хранит, Śiwa замыкает цикл. Это не один бог Израиля. Индийцы дали десятичный счёт, которым мы пользуемся.",
          "Китай: реки Huang He и Jangcy. Изобретения: бумага, фарфор, шёлк, печать, компас, порох. Великая стена — защита от кочевников с севера.",
          "Pagoda — многоярусная храмовая башня Китая. Её назвала учительница. В уроке учебника сильнее касты, индуизм и китайские изобретения. Зиккурат — это Месопотамия, не пагода."
        ],
        ua: "Каста — закрита спадкова група. Індуїзм — багато богів в Індії. Пагода — багатоярусна храмова вежа в Китаї. Винаходи Китаю: папір, порцеляна, шовк, друк, компас, порох."
      },
      items: [
        ru("Indie: Indus, kasty, hinduizm, system dziesiętny.", "Індія: Інд, касти, індуїзм, десяткова система."),
        ru("Chiny: Huang He, Jangcy, papier, Wielki Mur, pagoda.", "Китай: Хуанхе, Янцзи, папір, Великий мур, пагода."),
        ru("Zikkurat ≠ pagoda. Zikkurat jest w Mezopotamii.", "Зикурат ≠ пагода. Зикурат у Месопотамії.")
      ],
      task: task({
        id: "s30-indie-chiny",
        q: "Które zdanie jest prawdziwe?",
        qr: "По-русски: какое предложение верное?",
        qu: "Яке речення правдиве?",
        options: [
          opt("a", "Kasta jest dziedziczna. Hinduizm ma wielu bogów. Pagoda to wieża świątynna w Chinach. Papier wymyślili Chińczycy.", "Каста спадкова. Індуїзм має багатьох богів. Пагода — храмова вежа в Китаї. Папір винайшли китайці."),
          opt("b", "Kastę wybiera się co roku jak klasę. Pagoda stoi w Egipcie nad Nilem.", "Касту обирають щороку, як клас. Пагода стоїть у Єгипті над Нілом."),
          opt("c", "Hinduizm to wiara w jednego Boga Jahwe. Papier wymyślili Sumerowie.", "Індуїзм — віра в одного Бога Ягве. Папір винайшли шумери.")
        ],
        answer: "a",
        hint: "Каста от родителей. Бумага — Китай. Яхве — Израиль.",
        hintu: "Каста від батьків. Папір — Китай. Ягве — Ізраїль.",
        exr: "Каста закрытая. Индуизм — много богов. Пагода и бумага — Китай.",
        ex: "Kasta jest dziedziczna. Hinduizm jest politeistyczny. Pagoda i papier należą do Chin.",
        exu: "Каста закрита. Індуїзм — багато богів. Пагода і папір — Китай.",
        mistakes: [
          miss("b", "Касту не выбирают. Над Нилом — пирамиды, не пагоды.", "Касту не обирають. Над Нілом — піраміди, не пагоди."),
          miss("c", "Яхве — бог Израиля. Бумагу сделали китайцы, шумеры писали на глине.", "Ягве — Бог Ізраїлю. Папір зробили китайці, шумери писали на глині.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "6. От рисунка к алфавиту", ua: "6. Від малюнка до абетки" },
      rule: rule([
        "Pismo kończy *prehistorię* i zaczyna historię.",
        "*Pismo obrazkowe*: hieroglify (Egipt) i pismo klinowe (Sumerowie).",
        "*Pismo alfabetyczne*: znak to głoska. Dali je *Fenicjanie*.",
        "Materiały: *tabliczka gliniana* — Sumer, *papirus* — Egipt, *papier* — Chiny, *pergamin* — wyprawiona skóra."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Письмо нужно, чтобы записать зерно, налог, закон и имя правителя. Пока записи нет — это prehistoria.",
          "Рисуночное письмо: знак похож на вещь. Иероглифы — Египет, тысячи знаков. Клинопись выросла из рисунков: тростником вдавливали клинья в сырую глину.",
          "Алфавит легче: знак — это звук, знаков мало. Его дали финикийцы, мореходы у восточного берега Средиземного моря. Наш польский алфавит вырос из латинского.",
          "Материалы с карточки учительницы: глиняная табличка — шумеры, папирус — растение у Нила, бумага — Китай, пергамент — выделанная кожа. В требованиях учебника к уроку 6 прямо названы папирус и глиняные таблички. Пергамент и бумага — в списке контрольной: бумагу уже проходили как изобретение Китая."
        ],
        ua: "Письмо кінчає доісторію. Малюнкове: ієрогліфи і клинопис. Абетка: знак = звук, фінікійці. Глина — Шумери, папірус — Єгипет, папір — Китай, пергамент — шкіра."
      },
      items: [
        ru("Hieroglify ≠ alfabet. Alfabet ma mniej znaków.", "Ієрогліфи ≠ абетка. В абетці менше знаків."),
        ru("Papirus to roślina znad Nilu, nie skóra.", "Папірус — рослина з-над Нілу, не шкіра.")
      ],
      task: task({
        id: "s30-pismo",
        q: "Które zestawienie materiałów jest poprawne?",
        qr: "По-русски: какое соответствие материалов верное?",
        qu: "Яке зіставлення матеріалів правильне?",
        options: [
          opt("a", "Gliniana tabliczka — Sumerowie. Papirus — Egipt. Papier — Chiny. Pergamin — skóra.", "Глиняна табличка — шумери. Папірус — Єгипет. Папір — Китай. Пергамент — шкіра."),
          opt("b", "Papirus — Chiny. Papier — Egipt. Tabliczka gliniana — Fenicjanie.", "Папірус — Китай. Папір — Єгипет. Глиняна табличка — фінікійці."),
          opt("c", "Pergamin to pismo klinowe. Papirus to alfabet.", "Пергамент — це клинопис. Папірус — це абетка.")
        ],
        answer: "a",
        hint: "Папирус растёт у Нила. Бумага — китайское изобретение. Пергамент — кожа, не вид знаков.",
        hintu: "Папірус росте біля Нілу. Папір — китайський винахід. Пергамент — шкіра, не вид знаків.",
        exr: "Глина у шумеров, папирус в Египте, бумага в Китае, пергамент — кожа. Клинопись и алфавит — виды письма, не материалы.",
        ex: "Tabliczka — Sumer. Papirus — Egipt. Papier — Chiny. Pergamin — skóra.",
        exu: "Глина в шумерів, папірус у Єгипті, папір у Китаї, пергамент — шкіра. Клинопис і абетка — види письма, не матеріали.",
        mistakes: [
          miss("b", "Папирус — Египет, бумага — Китай. Финикийцы дали алфавит, не глину.", "Папірус — Єгипет, папір — Китай. Фінікійці дали абетку, не глину."),
          miss("c", "Пергамент и папирус — на чём пишут. Клинопись и алфавит — какими знаками.", "Пергамент і папірус — на чому пишуть. Клинопис і абетка — якими знаками.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "7. Карта", ua: "7. Карта" },
      rule: rule([
        "*Egipt* — Nil, północno-wschodnia Afryka.",
        "*Mezopotamia* — Tygrys i Eufrat, Bliski Wschód.",
        "*Izrael* — Palestyna nad Morzem Śródziemnym, Jerozolima.",
        "*Indie* — Indus. *Chiny* — Huang He i Jangcy."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "На контрольной просят поставить цивилизации на карту. Учи пару: имя и река.",
          "Предки человека — Африка. Египет — Нил. Междуречье — Тигр и Евфрат. Израиль — Палестина у моря, не Нил.",
          "Древняя Индия этого раздела — долина Инда. Ганг тоже в Индии, но для этой цивилизации называй Инд. Китай — Хуанхэ и Янцзы."
        ],
        ua: "Єгипет — Ніл. Месопотамія — Тигр і Євфрат. Ізраїль — Палестина. Індія — Інд. Китай — Хуанхе і Янцзи."
      },
      items: [
        ru("Nil ≠ Tygrys. Indus ≠ Huang He.", "Ніл ≠ Тигр. Інд ≠ Хуанхе."),
        ru("Jerozolima — Izrael. Babilon — Mezopotamia. Ur — Sumerowie.", "Єрусалим — Ізраїль. Вавилон — Месопотамія. Ур — шумери.")
      ],
      task: task({
        id: "s30-mapa",
        q: "Które przypisanie rzek jest poprawne?",
        qr: "По-русски: какое соответствие рек верное?",
        qu: "Яке зіставлення рік правильне?",
        options: [
          opt("a", "Egipt — Nil. Mezopotamia — Tygrys i Eufrat. Indie — Indus. Chiny — Huang He i Jangcy.", "Єгипет — Ніл. Месопотамія — Тигр і Євфрат. Індія — Інд. Китай — Хуанхе і Янцзи."),
          opt("b", "Egipt — Tygrys. Mezopotamia — Nil. Chiny — Indus. Indie — Huang He.", "Єгипет — Тигр. Месопотамія — Ніл. Китай — Інд. Індія — Хуанхе."),
          opt("c", "Izrael leży nad Nilem, a Egipt nad Eufratem.", "Ізраїль лежить над Нілом, а Єгипет над Євфратом.")
        ],
        answer: "a",
        hint: "Нил — Египет. Две реки — Междуречье. Инд — Индия.",
        hintu: "Ніл — Єгипет. Дві ріки — Межиріччя. Інд — Індія.",
        exr: "Нил кормит Египет. Тигр и Евфрат — Месопотамия. Инд — Индия. Хуанхэ и Янцзы — Китай. Израиль — Палестина у Средиземного моря.",
        ex: "Nil — Egipt. Tygrys i Eufrat — Mezopotamia. Indus — Indie. Huang He i Jangcy — Chiny.",
        exu: "Ніл — Єгипет. Тигр і Євфрат — Месопотамія. Інд — Індія. Хуанхе і Янцзи — Китай. Ізраїль — Палестина біля Середземного моря.",
        mistakes: [
          miss("b", "Реки перепутаны. Нил не течёт в Месопотамии.", "Ріки переплутані. Ніл не тече в Месопотамії."),
          miss("c", "Израиль — Палестина. Египет — Нил, не Евфрат.", "Ізраїль — Палестина. Єгипет — Ніл, не Євфрат.")
        ]
      })
    },
    {
      type: "goal",
      heading: { pl: "Пробная контрольная", ua: "Пробна контрольна" },
      formula: "10 pytań · bez podpowiedzi w zeszycie",
      promptPlace: "before",
      prompt: {
        pl: [
          "Дальше как на листе: сначала отвечаешь, потом смотришь объяснение.",
          "Если ошибся — вернись к жёлтой рамке этого пункта, не зубри чужой вариант."
        ],
        ua: "Далі як на аркуші: спочатку відповідь, потім пояснення."
      },
      items: [
        ru("Говори термин по-польски, смысл можешь вспомнить по-русски.", "Кажи термін польською, сенс можеш згадати українською.")
      ]
    },
    {
      type: "check",
      heading: { pl: "Задание 1. Огонь и еда", ua: "Завд. 1. Вогонь і їжа" },
      formula: "lekcja 1",
      promptPlace: "before",
      prompt: {
        pl: ["Огонь грел, на нём жарили мясо и им отпугивали зверей. Еду до полей брали собирательством и охотой."],
        ua: "Вогонь грів і лякав звірів. Їжу до полів брали збиральництвом і полюванням."
      },
      task: task({
        id: "s30-t1",
        type: "multiple-choice",
        q: "Co należy do życia pierwszych ludzi przed rewolucją neolityczną? Zaznacz wszystkie.",
        qr: "По-русски: что относится к жизни первых людей до неолитической революции?",
        qu: "Що належить до життя перших людей до неолітичної революції? Познач усе.",
        options: [
          opt("a", "zbieractwo i myślistwo", "збиральництво і мисливство"),
          opt("b", "ogień, mowa i pięściak", "вогонь, мова і рубило"),
          opt("c", "wędrówka i schronienie w szałasie albo jaskini", "мандрівка і сховок у курені або печері"),
          opt("d", "piramidy i kodeks Hammurabiego", "піраміди і кодекс Хаммурапі")
        ],
        answer: ["a", "b", "c"],
        hint: "Пирамиды и кодекс — уже государства.",
        hintu: "Піраміди і кодекс — уже держави.",
        exr: "До неолита: собирательство, охота, огонь, речь, рубило, шалаш или пещера.",
        ex: "Przed neolitem: zbieractwo, myślistwo, ogień, mowa, pięściak, szałas albo jaskinia.",
        exu: "До неоліту: збиральництво, полювання, вогонь, мова, рубило, курінь або печера."
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 2. Две жизни", ua: "Завд. 2. Два життя" },
      formula: "koczownicy · osadnicy",
      promptPlace: "before",
      prompt: {
        pl: ["Сравни, откуда еда и есть ли постоянный дом."],
        ua: "Порівняй, звідки їжа і чи є постійна хата."
      },
      task: task({
        id: "s30-t2",
        q: "Czym osiadły tryb życia różni się od koczowniczego?",
        qr: "По-русски: чем оседлая жизнь отличается от кочевой?",
        qu: "Чим осіле життя відрізняється від кочового?",
        options: [
          opt("a", "Osiadli zostają przy polach i stadach. Koczownicy wędrują za jedzeniem.", "Осілі лишаються біля полів і стад. Кочівники мандрують за їжею."),
          opt("b", "Koczownicy budują piramidy, osiadli piszą na papirusie.", "Кочівники будують піраміди, осілі пишуть на папірусі."),
          opt("c", "Osiadli nie mają żadnego pożywienia, bo nie polują.", "Осілі не мають жодної їжі, бо не полюють.")
        ],
        answer: "a",
        hint: "Оседлый кормится с поля. Кочевник идёт за добычей.",
        hintu: "Осілий годується з поля. Кочівник іде за здобиччю.",
        exr: "Разница в еде и доме: поле и поселение против пути и шалаша.",
        ex: "Osiadły zostaje przy polu. Koczowniczy wędruje.",
        exu: "Різниця в їжі і домі: поле і поселення проти шляху і куреня.",
        mistakes: [
          miss("b", "Пирамиды и папирус — Египет, не два способа добыть еду.", "Піраміди і папірус — Єгипет, не два способи здобути їжу."),
          miss("c", "У оседлых еда есть: зерно и скот. Они не голодают оттого, что перестали кочевать.", "В осілих їжа є: збіжжя і худоба. Вони не голодують через те, що перестали кочувати.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 3. Хаммурапи и шумер", ua: "Завд. 3. Хаммурапі і шумер" },
      formula: "oko za oko",
      promptPlace: "before",
      prompt: {
        pl: ["Раздели изобретение и закон. Колесо — шумер. «Око за око» — кодекс."],
        ua: "Розділи винахід і закон. Колесо — шумер. «Око за око» — кодекс."
      },
      task: task({
        id: "s30-t3",
        q: "„Oko za oko, ząb za ząb” pochodzi z:",
        qr: "По-русски: «око за око» взято из…",
        qu: "«Око за око, зуб за зуб» походить з:",
        options: [
          opt("a", "Kodeksu Hammurabiego", "Кодексу Хаммурапі"),
          opt("b", "Dekalogu Mojżesza", "Декалогу Мойсея"),
          opt("c", "hinduizmu i kast", "індуїзму і каст")
        ],
        answer: "a",
        hint: "Это про наказание, равное вреду. Царь Вавилона.",
        hintu: "Це про кару, рівну шкоді. Цар Вавилона.",
        exr: "Фраза из законов Хаммурапи. Декалог — десять заповедей Израиля. Касты — Индия.",
        ex: "To zasada z Kodeksu Hammurabiego.",
        exu: "Фраза із законів Хаммурапі. Декалог — десять заповідей Ізраїлю. Касти — Індія.",
        mistakes: [
          miss("b", "Декалог — заповеди с Синая, не вавилонский принцип наказания.", "Декалог — заповіді з Синаю, не вавилонський принцип кари."),
          miss("c", "Касты делят общество Индии по рождению, это не «око за око».", "Касти ділять суспільство Індії за народженням, це не «око за око».")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 4. Кто в Египте", ua: "Завд. 4. Хто в Єгипті" },
      formula: "piramida",
      promptPlace: "before",
      prompt: {
        pl: ["Сверху один. Внизу те, кто на полях. Рабы не самый большой слой."],
        ua: "Зверху один. Унизу ті, хто на полях."
      },
      task: task({
        id: "s30-t4",
        type: "true-false",
        q: "W starożytnym Egipcie najliczniejszą grupą byli niewolnicy. Prawda czy fałsz?",
        qr: "По-русски: в древнем Египте самой многочисленной группой были рабы. Правда или ложь?",
        qu: "У стародавньому Єгипті найчисленнішою групою були раби. Правда чи ні?",
        answer: false,
        hint: "Вспомни основание пирамиды.",
        hintu: "Згадай основу піраміди.",
        exr: "Ложь. Больше всех было крестьян. Рабов сравнительно мало.",
        ex: "Fałsz. Najliczniejsi byli chłopi.",
        exu: "Ні. Найбільше було селян. Рабів порівняно мало."
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 5. Два бога или один", ua: "Завд. 5. Два боги чи один" },
      formula: "politeizm · monoteizm",
      promptPlace: "before",
      prompt: {
        pl: ["Poli — много. Mono — один. Привяжи слово к стране."],
        ua: "Poli — багато. Mono — один."
      },
      task: task({
        id: "s30-t5",
        q: "Gdzie był politeizm, a gdzie monoteizm?",
        qr: "По-русски: где много богов, а где один?",
        qu: "Де був політеїзм, а де монотеїзм?",
        options: [
          opt("a", "Politeizm: Egipt i hinduizm. Monoteizm: Izrael, Bóg Jahwe.", "Політеїзм: Єгипет і індуїзм. Монотеїзм: Ізраїль, Бог Ягве."),
          opt("b", "Politeizm: Izrael. Monoteizm: Egipt, bóg Ra jako jedyny.", "Політеїзм: Ізраїль. Монотеїзм: Єгипет, бог Ра як єдиний."),
          opt("c", "Oba słowa znaczą to samo: wiarę w wielu bogów.", "Обидва слова означають те саме: віру в багатьох богів.")
        ],
        answer: "a",
        hint: "Ra — один из многих. Jahwe — единственный.",
        hintu: "Ра — один із багатьох. Ягве — єдиний.",
        exr: "Египет и индуизм — много богов. Израиль — один.",
        ex: "Egipt i hinduizm: wielu bogów. Izrael: jeden Bóg.",
        exu: "Єгипет і індуїзм — багато богів. Ізраїль — один.",
        mistakes: [
          miss("b", "Наоборот. В Египте богов много, Ra среди них. В Израиле один Яхве.", "Навпаки. У Єгипті богів багато, Ра серед них. В Ізраїлі один Ягве."),
          miss("c", "Приставки разные: poli — много, mono — один.", "Префікси різні: poli — багато, mono — один.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 6. Тора, Декалог, менора", ua: "Завд. 6. Тора, Декалог, менора" },
      formula: "Izrael",
      promptPlace: "before",
      prompt: {
        pl: ["Книга, десять заповедей, семисвечник — три разных вещи."],
        ua: "Книга, десять заповідей, семисвічник — три різні речі."
      },
      task: task({
        id: "s30-t6",
        q: "Co jest menorą?",
        qr: "По-русски: что такое менора?",
        qu: "Що таке менора?",
        options: [
          opt("a", "siedmioramienny świecznik ze Świątyni Jerozolimskiej", "семисвічник з Єрусалимського храму"),
          opt("b", "dziesięć przykazań z góry Synaj", "десять заповідей з гори Синай"),
          opt("c", "rzeka w Chinach", "ріка в Китаї")
        ],
        answer: "a",
        hint: "Десять заповедей — это Dekalog. Река Китая — Huang He.",
        hintu: "Десять заповідей — це Dekalog. Ріка Китаю — Хуанхе.",
        exr: "Менора — семисвечник. Декалог — заповеди. Хуанхэ — река.",
        ex: "Menora to świecznik. Dekalog to przykazania.",
        exu: "Менора — семисвічник. Декалог — заповіді. Хуанхе — ріка.",
        mistakes: [
          miss("b", "Десять заповедей называются Dekalog. Их получил Моисей.", "Десять заповідей називаються Dekalog. Їх отримав Мойсей."),
          miss("c", "Менора стоит в храме. Реки Китая — Хуанхэ и Янцзы.", "Менора стоїть у храмі. Ріки Китаю — Хуанхе і Янцзи.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 7. Каста", ua: "Завд. 7. Каста" },
      formula: "Indie",
      promptPlace: "before",
      prompt: {
        pl: ["Закрытая группа: профессия и обычай переходят детям."],
        ua: "Закрита група: фах і звичай переходять дітям."
      },
      task: task({
        id: "s30-t7",
        q: "Czym jest kasta?",
        qr: "По-русски: что такое каста?",
        qu: "Що таке каста?",
        options: [
          opt("a", "zamknięta grupa w Indiach: zawód i obyczaje dziedziczy się po rodzicach", "закрита група в Індії: фах і звичаї успадковують від батьків"),
          opt("b", "imię chińskiego cesarza", "ім’я китайського імператора"),
          opt("c", "materiał pisarski z rośliny nad Nilem", "матеріал для письма з рослини над Нілом")
        ],
        answer: "a",
        hint: "Это Индия после ариев, не титул и не растение.",
        hintu: "Це Індія після аріїв, не титул і не рослина.",
        exr: "Каста — закрытая наследственная группа. Растение у Нила — папирус.",
        ex: "Kasta jest zamknięta i dziedziczna. Papirus to roślina.",
        exu: "Каста закрита і спадкова. Рослина біля Нілу — папірус.",
        mistakes: [
          miss("b", "Каста — группа людей, не имя императора.", "Каста — група людей, не ім’я імператора."),
          miss("c", "Растение у Нила — папирус. Каста — устройство общества Индии.", "Рослина біля Нілу — папірус. Каста — устрій суспільства Індії.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 8. Знак и звук", ua: "Завд. 8. Знак і звук" },
      formula: "alfabet",
      promptPlace: "before",
      prompt: {
        pl: ["Алфавит короче: один знак — один звук. Рисунок надо учить тысячами."],
        ua: "Абетка коротша: один знак — один звук."
      },
      task: task({
        id: "s30-t8",
        q: "Dlaczego alfabet był łatwiejszy od hieroglifów?",
        qr: "По-русски: почему алфавит легче иероглифов?",
        qu: "Чому абетка була легша за ієрогліфи?",
        options: [
          opt("a", "Miał kilkadziesiąt znaków-głosek, a nie tysiące obrazków.", "Мала кілька десятків знаків-звуків, а не тисячі малюнків."),
          opt("b", "Miał więcej znaków niż hieroglify.", "Мала більше знаків, ніж ієрогліфи."),
          opt("c", "Pisano go tylko na piramidach, więc znaków było mało.", "Писали її лише на пірамідах, тож знаків було мало.")
        ],
        answer: "a",
        hint: "Считай знаки. У финикийцев их около 22.",
        hintu: "Лічи знаки. У фінікійців їх близько 22.",
        exr: "Алфавит короче, потому что знак равен звуку. Иероглифов тысячи.",
        ex: "Znak alfabetu to głoska. Hieroglifów są tysiące.",
        exu: "Абетка коротша, бо знак дорівнює звуку. Ієрогліфів тисячі.",
        mistakes: [
          miss("b", "Наоборот: знаков в алфавите меньше.", "Навпаки: знаків в абетці менше."),
          miss("c", "На пирамидах писали иероглифами. Алфавит разнесли финикийские моряки.", "На пірамідах писали ієрогліфами. Абетку рознесли фінікійські моряки.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 9. Не перепутай страны", ua: "Завд. 9. Не переплутай країни" },
      formula: "mapa",
      promptPlace: "before",
      prompt: {
        pl: ["Один ряд — одна цивилизация. Не смешивай Нил с Тигром."],
        ua: "Один ряд — одна цивілізація."
      },
      task: task({
        id: "s30-t9",
        type: "multiple-choice",
        q: "Które pary są prawdziwe? Zaznacz wszystkie.",
        qr: "По-русски: какие пары верные? Отметь все.",
        qu: "Які пари правдиві? Познач усі.",
        options: [
          opt("a", "Egipt — Nil, faraon, hieroglify", "Єгипет — Ніл, фараон, ієрогліфи"),
          opt("b", "Mezopotamia — Tygrys i Eufrat, Sumerowie, pismo klinowe", "Месопотамія — Тигр і Євфрат, шумери, клинопис"),
          opt("c", "Izrael — Palestyna, Jahwe, Tora", "Ізраїль — Палестина, Ягве, Тора"),
          opt("d", "Chiny — Nil, kasty, menora", "Китай — Ніл, касти, менора")
        ],
        answer: ["a", "b", "c"],
        hint: "Касты — Индия. Менора — Израиль. Нил — Египет.",
        hintu: "Касти — Індія. Менора — Ізраїль. Ніл — Єгипет.",
        exr: "Три первые пары верны. Китай — Хуанхэ и Янцзы, бумага и пагода. Касты — Индия, менора — храм Иерусалима.",
        ex: "Chiny nie leżą nad Nilem. Kasty są w Indiach. Menora jest w Izraelu.",
        exu: "Три перші пари правдиві. Китай — Хуанхе і Янцзи. Касти — Індія, менора — храм Єрусалима."
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 10. Фраза учителю", ua: "Завд. 10. Фраза вчителю" },
      formula: "na głos",
      promptPlace: "before",
      prompt: {
        pl: ["Выбери фразу, которую можно сказать целиком, без ошибки в термине."],
        ua: "Обери фразу, яку можна сказати цілком."
      },
      task: task({
        id: "s30-t10",
        q: "Które zdanie powiesz nauczycielce?",
        qr: "По-русски: какую фразу скажешь учительнице?",
        qu: "Яке речення скажеш учительці?",
        options: [
          opt("a", "Pismo obrazkowe to hieroglify i pismo klinowe. Alfabet dali Fenicjanie. Papier pochodzi z Chin.", "Малюнкове письмо — це ієрогліфи і клинопис. Абетку дали фінікійці. Папір походить з Китаю."),
          opt("b", "Alfabet wymyślili chłopi egipscy, a papier — Mojżesz na górze Synaj.", "Абетку вигадали єгипетські селяни, а папір — Мойсей на горі Синай."),
          opt("c", "Zikkurat to grobowiec faraona, a piramida to świecznik w Jerozolimie.", "Зикурат — гробниця фараона, а піраміда — свічник у Єрусалимі.")
        ],
        answer: "a",
        hint: "Финикийцы — алфавит. Китай — бумага. Зиккурат — храм, менора — светильник.",
        hintu: "Фінікійці — абетка. Китай — папір. Зикурат — храм, менора — свічник.",
        exr: "Первая фраза собирает урок 6 и бумагу Китая. Алфавит не от крестьян. Зиккурат — ступенчатый храм, пирамида — гробница, менора — светильник.",
        ex: "Hieroglify i kliny to pismo obrazkowe. Alfabet — Fenicjanie. Papier — Chiny.",
        exu: "Перша фраза збирає урок 6 і папір Китаю. Зикурат — ступінчастий храм, піраміда — гробниця, менора — свічник.",
        mistakes: [
          miss("b", "Алфавит — финикийцы. На Синае Моисей получил заповеди, не бумагу.", "Абетка — фінікійці. На Синаї Мойсей отримав заповіді, не папір."),
          miss("c", "Зиккурат — храм в Месопотамии. Пирамида — гробница фараона. Светильник — менора.", "Зикурат — храм у Месопотамії. Піраміда — гробниця фараона. Свічник — менора.")
        ]
      })
    },
    {
      type: "summary",
      heading: { pl: "Фразы в тетрадь", ua: "Фрази в зошит" },
      rule: rule([
        "*Rewolucja neolityczna* — uprawa, hodowla, osiadłe życie.",
        "*Epoki:* kamień, brąz (miedź + cyna), żelazo.",
        "*Mezopotamia* — Tygrys i Eufrat. Sumerowie: pismo klinowe, koło, żagiel, system 60, zikkurat.",
        "*Kodeks Hammurabiego* — spisane prawa. Oko za oko.",
        "*Faraon* na szczycie. Najliczniejsi — chłopi.",
        "*Politeizm* — wielu bogów. *Monoteizm* — jeden Bóg, Jahwe.",
        "*Tora* — księga. *Dekalog* — 10 przykazań. *Menora* — świecznik. *Prorok* głosi wolę Boga.",
        "*Kasta* — grupa dziedziczna. *Hinduizm* — wielu bogów. *Pagoda* — wieża w Chinach.",
        "*Papirus* — Egipt. *Tabliczka* — Sumer. *Papier* — Chiny. *Pergamin* — skóra.",
        "*Mapa:* Nil, Tygrys i Eufrat, Palestyna, Indus, Huang He i Jangcy."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Прочитай рамку вслух по-польски. Это весь раздел I, страницы 8–35."
        ],
        ua: "Прочитай рамку вголос польською. Це весь розділ I, сторінки 8–35."
      },
      task: task({
        id: "s30-koniec",
        q: "Która para na mapie jest poprawna?",
        qr: "По-русски: какая пара на карте верная?",
        qu: "Яка пара на карті правильна?",
        options: [
          opt("a", "Indie — Indus, Chiny — Huang He i Jangcy, Izrael — Palestyna", "Індія — Інд, Китай — Хуанхе і Янцзи, Ізраїль — Палестина"),
          opt("b", "Indie — Nil, Chiny — Eufrat, Izrael — Indus", "Індія — Ніл, Китай — Євфрат, Ізраїль — Інд"),
          opt("c", "Wszystkie cywilizacje leżały nad jedną rzeką — Nilem.", "Усі цивілізації лежали над однією рікою — Нілом.")
        ],
        answer: "a",
        hint: "Три разных места. Нил только у Египта.",
        hintu: "Три різні місця. Ніл лише в Єгипту.",
        exr: "Инд — Индия, Хуанхэ и Янцзы — Китай, Палестина — Израиль. Нил не общий для всех.",
        ex: "Indus — Indie. Huang He i Jangcy — Chiny. Palestyna — Izrael.",
        exu: "Інд — Індія, Хуанхе і Янцзи — Китай, Палестина — Ізраїль. Ніл не спільний для всіх.",
        mistakes: [
          miss("b", "Нил — Египет, Евфрат — Месопотамия, Инд — Индия.", "Ніл — Єгипет, Євфрат — Месопотамія, Інд — Індія."),
          miss("c", "У каждой цивилизации своя река или свой край.", "У кожної цивілізації своя ріка або свій край.")
        ]
      })
    }
  ]
};
