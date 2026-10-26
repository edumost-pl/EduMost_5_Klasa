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

var OGROD = [
  "Księżycu, zostań ze mną jeszcze chwilę,",
  "cichy wiatr kołysze śpiące kwiaty.",
  "Na ławce siedzę i wsłuchuję się w ciszę,",
  "a srebrne światło otula cały ogród.",
  "Czuję spokój i zachwyt nad nocą,",
  "jakby świat na moment zatrzymał oddech."
];

var OKNO = [
  "Deszczu, zostań na mojej szybie,",
  "miękki płaszcz leży na pustym krześle.",
  "Siedzę przy oknie i liczę krople,",
  "a szare światło wchodzi do pokoju.",
  "Czuję tęsknotę i spokój,",
  "jakby wieczór chciał mówić szeptem."
];

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Sprawdzian 19.10 — как устроен урок", ua: "Контрольна 19.10 — як улаштований урок" },
      formula: "сначала рамка  ·  потом пример  ·  потом задание",
      promptPlace: "before",
      prompt: {
        pl: [
          "На экране с новым смыслом сверху жёлтая рамка Reguła. Термин выделен жирным. Эту фразу говоришь учителю по-польски и учишь наизусть.",
          "Ниже — что эта фраза значит по-русски, потом пример, и только потом задание."
        ],
        ua: "На кожному екрані один сенс. Спочатку польське слово і пояснення. Потім приклад. Завдання — після пояснення."
      },
      items: [
        ru("1 — Wiersz — стихотворение: кто говорит, к кому, эпитет, апострофа, настроение, рифма.", "1 — Wiersz: хто говорить, до кого, епітет, апострофа, настрій, рима."),
        ru("Блок 2. Rzeczownik — существительное: кто? что?, большая буква, чувства или вещи, падежи, основа и хвост, nie.", "Блок 2. Rzeczownik: хто? що?, велика літера, почуття чи речі, відмінки, основа і хвіст, nie."),
        ru("Блок 3. Ortografia — орфография: пара в семье слова или запомненное rz.", "Блок 3. Ortografia: пара в сім’ї слова або вивчене rz."),
        ru("Блок 4. Synonimy — синонимы: близкое значение, не противоположность.", "Блок 4. Synonimy: близьке значення, не протилежність.")
      ]
    },
    {
      type: "goal",
      heading: { pl: "1 — Wiersz — стихотворение", ua: "1 — Wiersz — вірш" },
      formula: "1 — Wiersz — стихотворение",
      promptPlace: "before",
      prompt: {
        pl: [
          "Стихотворение здесь не про рифму ради рифмы. В нём три разных лица, и на контрольной их специально путают.",
          "Сначала разберём роли на живом примере. Потом откроем стихотворение с карточки."
        ],
        ua: "У вірші три різні особи. Спочатку приклад, потім вірш з картки."
      },
      items: [
        ru("autor — автор: человек, который написал текст.", "autor — людина, яка написала текст."),
        ru("podmiot liryczny — голос внутри стиха, который говорит «я».", "podmiot liryczny — голос у вірші, який каже «я»."),
        ru("adresat — тот, к кому этот голос обращается.", "adresat — той, до кого цей голос звертається.")
      ]
    },
    {
      type: "concept",
      heading: { pl: "Три лица — podmiot, adresat, autor", ua: "Три особи у вірші" },
      rule: rule([
        "*Podmiot liryczny* to osoba, która mówi w wierszu „ja”.",
        "*Adresat* to ten, do kogo się zwraca.",
        "*Autor* napisał wiersz."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Автор написал текст. Podmiot liryczny — голос, который говорит «я». Adresat — тот, к кому этот голос обращается.",
          "Пример: «Mamo, poczekaj». Ты — голос. Mama — адресат. Автор стиха — третий человек.",
          "В тетрадь: Podmiot liryczny to głos, który mówi w wierszu."
        ],
        ua: "Автор написав текст. Podmiot liryczny каже «я». Adresat — той, до кого звертаються. Приклад: «Mamo, poczekaj»."
      },
      items: [
        ru("Голос: siedzę, czuję, patrzę. Это «я» внутри стиха.", "Голос: siedzę, czuję, patrzę."),
        ru("Адресат: Księżycu, Deszczu, zostań. Кого зовут — тот и адресат.", "Адресат: Księżycu, Deszczu, zostań.")
      ],
      task: task({
        id: "s19-role",
        q: "Wers: „Księżycu, zostań ze mną”. Kto jest adresatem?",
        qr: "По-русски: в строке зовут луну и просят остаться. Кто адресат?",
        qu: "Рядок: «Księżycu, zostań ze mną». Хто адресат?",
        options: [
          opt("a", "Księżyc.", "Місяць."),
          opt("b", "Autor wiersza.", "Автор вірша."),
          opt("c", "Osoba, która mówi „zostań”.", "Той, хто каже «zostań».")
        ],
        answer: "a",
        hint: "Ищи зов: Księżycu. Это не автор и не тот, кто говорит.",
        hintu: "Шукай форму кличу: Księżycu.",
        exr: "Адресат — луна. Голос просит: zostań ze mną. Автора в строке нет.",
        ex: "Adresat to księżyc.",
        exu: "Адресат — місяць. Голос просить: zostań ze mną. Автора в рядку немає.",
        mistakes: [
          miss("b", "Автор написал стих. Просьба «zostań» идёт не к нему.", "Автор написав вірш. Прохання «zostań» іде не до нього."),
          miss("c", "Тот, кто говорит, — podmiot liryczny. Адресат слышит этот зов.", "Той, хто говорить, — podmiot liryczny. Адресат чує це звертання.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Ошибка с карточки: адресат — это не автор", ua: "Часта помилка: адресат = автор" },
      rule: rule([
        "*Adresat* to nie autor."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "На карточке в ответе «кто адресат?» было написано «автор этого стихотворения». Это разные люди.",
          "Автор написал. Голос говорит «я». Адресат слушает обращение.",
          "Podmiot liryczny тоже не называется adresat."
        ],
        ua: "На картці адресатом назвали автора. Це різні особи."
      },
      items: [
        ru("autor — автор: тот, кто написал.", "autor — хто написав"),
        ru("podmiot liryczny — голос, который говорит «я».", "podmiot liryczny — хто каже «я»"),
        ru("adresat — тот, к кому обращение.", "adresat — до кого звертання")
      ],
      task: task({
        id: "s19-autor-tf",
        type: "true-false",
        q: "Adresat wiersza to zawsze autor tego wiersza. Prawda czy fałsz?",
        qr: "По-русски: адресат стихотворения — это всегда его автор? Правда или ложь?",
        qu: "Адресат вірша — це завжди автор цього вірша. Правда чи ні?",
        answer: false,
        hint: "Вспомни три роли. Автор пишет. Адресат слышит зов.",
        hintu: "Згадай три ролі.",
        exr: "Ложь. Автор написал текст. Адресат внутри стиха: тот, к кому говорит голос.",
        ex: "Fałsz. Autor napisał tekst. Adresat jest wewnątrz wiersza.",
        exu: "Ні. Автор написав текст. Адресат усередині вірша: той, до кого говорить голос."
      })
    },
    {
      type: "concept",
      heading: { pl: "Epitet — эпитет, пара слов", ua: "Епітет" },
      rule: rule([
        "*Epitet* to określenie razem z rzeczownikiem, np. cichy wiatr."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Epitet — слово, которое отвечает на «какой?» при существительном. В тетрадь пишут пару, не одно слово.",
          "Пример из жизни: czerwone jabłko — красное яблоко. Одно czerwone учитель не засчитает: не видно, к чему оно.",
          "siedzę и czuję — глаголы. Это не эпитет."
        ],
        ua: "Епітет відповідає на jaki? біля іменника. У зошит іде пара: czerwone jabłko."
      },
      items: [
        ru("cichy wiatr — тихий ветер. śpiące kwiaty — спящие цветы. srebrne światło — серебряный свет.", "cichy wiatr, śpiące kwiaty, srebrne światło")
      ],
      task: task({
        id: "s19-epitet",
        q: "Który zapis jest epitetem?",
        qr: "По-русски: какая запись — настоящий эпитет?",
        qu: "Який запис є епітетом?",
        options: [
          opt("a", "cichy wiatr", "cichy wiatr"),
          opt("b", "samo słowo „cichy”", "саме слово «cichy»"),
          opt("c", "siedzę", "siedzę")
        ],
        answer: "a",
        hint: "Вопрос «какой?» должен стоять рядом с существительным.",
        hintu: "Питання jaki? має стояти біля іменника.",
        exr: "Эпитет — это пара cichy wiatr. Одно «cichy» не показывает, к чему оно. Siedzę — глагол.",
        ex: "Epitet to para: cichy wiatr.",
        exu: "Епітет — це пара: cichy wiatr. Саме «cichy» не показує, до чого стосується. «Siedzę» — дієслово.",
        mistakes: [
          miss("b", "На контрольной эпитет выписывают вместе с существительным.", "На контрольній епітет виписуєш разом з іменником."),
          miss("c", "Глагол говорит, что кто-то делает. Эпитет описывает существительное.", "Дієслово каже, що хтось робить. Епітет описує іменник.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Apostrofa — прямое обращение", ua: "Апострофа" },
      rule: rule([
        "*Apostrofa* to bezpośrednie zwrócenie się do kogoś albo do czegoś."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Apostrofa — это прямое обращение к кому-то или к чему-то. Это не знак ’ в фамилии.",
          "Пример: «Księżycu, zostań ze mną jeszcze chwilę». Луну зовут и просят остаться.",
          "Строка «cichy wiatr kołysze kwiaty» только описывает ветер. Обращения там нет."
        ],
        ua: "Апострофа — пряме звертання. Це не знак ’ у прізвищі. Приклад: «Księżycu, zostań ze mną»."
      },
      items: [
        ru("Пример: «Księżycu, zostań ze mną jeszcze chwilę». Луну зовут и просят остаться.", "Приклад: «Księżycu, zostań ze mną jeszcze chwilę»."),
        ru("Описание без обращения — не апострофа. «Cichy wiatr kołysze kwiaty» только описывает ветер.", "Опис без звертання — не апострофа.")
      ],
      task: task({
        id: "s19-apostrofa",
        q: "Gdzie jest apostrofa?",
        qr: "По-русски: где здесь прямое обращение?",
        qu: "Де апострофа?",
        options: [
          opt("a", "„Księżycu, zostań ze mną jeszcze chwilę”", "«Księżycu, zostań ze mną jeszcze chwilę»"),
          opt("b", "„cichy wiatr kołysze śpiące kwiaty”", "«cichy wiatr kołysze śpiące kwiaty»"),
          opt("c", "w nazwisku, jako znak ’", "у прізвищі, як знак ’")
        ],
        answer: "a",
        hint: "Кто-то зовёт и просит. Описание ветра — ещё не обращение.",
        hintu: "Хтось кличе і просить.",
        exr: "Апострофа в первой строке: зов Księżycu и просьба zostań. Вторая строка только описывает ветер.",
        ex: "Apostrofa jest w pierwszym wersie: jest wołacz Księżycu i prośba zostań.",
        exu: "Апострофа в першому рядку: кличний Księżycu і прохання zostań. Другий рядок лише описує вітер.",
        mistakes: [
          miss("b", "Здесь нет зова. Ветер описан, к нему никто не обращается.", "Тут немає кличу. Вітер описаний, ніхто до нього не говорить."),
          miss("c", "Школьная апострофа — обращение в тексте, не знак в фамилии.", "Шкільна апострофа — звертання в тексті, не знак у прізвищі.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Nastrój и rym — настроение и рифма", ua: "Настрій і рима" },
      rule: rule([
        "*Nastrój* to uczucie w wierszu.",
        "*Rym* sprawdzam ostatnimi słowami wersów."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Nastrój — одно точное чувство стиха: спокойный, радостный, грустный. Рядом нужно слово из текста. Слово «эмоции» слишком общее.",
          "Rym проверяют последними словами двух строк. Палец закрывает строку, читаешь только конец.",
          "chwilę и kwiaty на конце не похожи. szybie и krześle похожи — это рифма."
        ],
        ua: "Настрій — одне почуття вірша, зі словом із тексту. Риму перевіряють останніми словами рядків."
      },
      items: [
        ru("chwilę и kwiaty на конце не похожи. Рифмы нет.", "chwilę і kwiaty наприкінці звучать не схоже."),
        ru("szybie и krześle похожи. Это рифма.", "szybie і krześle звучать схоже. Це рима.")
      ],
      task: task({
        id: "s19-rym-tf",
        type: "true-false",
        q: "Słowa „chwilę” i „kwiaty” tworzą rym. Prawda czy fałsz?",
        qr: "По-русски: слова chwilę и kwiaty рифмуются? Правда или ложь?",
        qu: "Слова «chwilę» і «kwiaty» утворюють риму. Правда чи ні?",
        answer: false,
        hint: "Сравни только концы слов.",
        hintu: "Порівняй лише закінчення.",
        exr: "Ложь. Концы разные, эти две строки не рифмуются.",
        ex: "Fałsz. Końce są różne.",
        exu: "Ні. Кінці різні, тож ці два рядки не римуються."
      })
    },
    {
      type: "observe",
      heading: { pl: "Стихотворение с карточки — Wieczorny ogród", ua: "Вірш з картки" },
      formula: "1 — Wiersz  ·  Wieczorny ogród",
      promptPlace: "after",
      prompt: {
        pl: [
          "Прочитай два раза. Ищи «я» и зов.",
          "Трудные слова: chwilę — минутка, kołysze — качает, wsłuchuję się — вслушиваюсь, otula — окутывает, zachwyt — восторг."
        ],
        ua: "Прочитай двічі. Шукай «я» і клич."
      },
      text: { pl: OGROD },
      task: task({
        id: "s19-ogrod-kto",
        q: "Kto jest podmiotem lirycznym w „Wieczornym ogrodzie”?",
        qr: "По-русски: кто здесь говорит «я»? Это не автор и не луна.",
        qu: "Хто podmiot liryczny у «Wieczorny ogród»?",
        options: [
          opt("a", "Osoba, która mówi: siedzę, wsłuchuję się, czuję. Siedzi na ławce.", "Особа, яка каже: siedzę, wsłuchuję się, czuję. Сидить на лавці."),
          opt("b", "Autor, bo jego nazwisko jest nad wierszem.", "Автор, бо його прізвище над віршем."),
          opt("c", "Księżyc, bo jest w pierwszym wersie.", "Місяць, бо він у першому рядку.")
        ],
        answer: "a",
        hint: "Ищи слова от «я»: siedzę, czuję.",
        hintu: "Шукай слова від «я».",
        exr: "Голос говорит о себе: сижу, вслушиваюсь, чувствую. Автора под заглавием нет. Луна — адресат, не голос.",
        ex: "Podmiot mówi o sobie: siedzę, wsłuchuję się, czuję.",
        exu: "Голос каже про себе: siedzę, wsłuchuję się, czuję. Автора під назвою немає. Місяць — адресат, не голос.",
        mistakes: [
          miss("b", "Под названием нет фамилии автора. Даже когда она есть, автор и голос в стихе — не одно и то же.", "Під назвою немає прізвища. Навіть коли воно є, автор і голос у вірші — не одне."),
          miss("c", "К луне кто-то обращается. Сама луна здесь не говорит «siedzę».", "До місяця хтось говорить. Сам місяць тут не каже «siedzę».")
        ]
      })
    },
    {
      type: "practice",
      heading: { pl: "Средства в этом стихотворении", ua: "Засоби в цьому вірші" },
      rule: rule([
        "*Środek stylistyczny* wypisuję razem z cytatem z wiersza."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "На контрольной средство выписывают вместе с цитатой из этого стиха.",
          "Длинный список всех средств, которые когда-то слышал, ответ размывает."
        ],
        ua: "Засіб виписуєш разом із цитатою з цього вірша."
      },
      task: task({
        id: "s19-ogrod-srodki",
        type: "multiple-choice",
        q: "Które zapisy NA PEWNO są w „Wieczornym ogrodzie”? Zaznacz wszystkie pewne.",
        qr: "По-русски: какие записи точно есть в этом стихе? Отметь все верные.",
        qu: "Які записи ТОЧНО є у «Wieczorny ogród»? Познач усі певні.",
        options: [
          opt("a", "apostrofa: „Księżycu, zostań ze mną jeszcze chwilę”", "апострофа: «Księżycu, zostań ze mną jeszcze chwilę»"),
          opt("b", "epitety: cichy wiatr, śpiące kwiaty, srebrne światło", "епітети: cichy wiatr, śpiące kwiaty, srebrne światło"),
          opt("c", "porównanie: „jakby świat na moment zatrzymał oddech”", "порівняння: «jakby świat na moment zatrzymał oddech»"),
          opt("d", "epitet: samo słowo „spokój”", "епітет: саме слово «spokój»")
        ],
        answer: ["a", "b", "c"],
        hint: "Jakby вводит сравнение. Spokój здесь не стоит как «какой?» при существительном.",
        hintu: "Jakby вводить порівняння. Spokój тут не стоїть як jaki? біля іменника.",
        exr: "Три средства можно показать цитатой. «Spokój» называет чувство, это не эпитет в паре.",
        ex: "Trzy środki mają cytat. „Spokój” nazywa uczucie.",
        exu: "Три засоби мають цитату. «Spokój» називає почуття, це не епітет у парі з іменником."
      })
    },
    {
      type: "practice",
      heading: { pl: "Чувство и рифма в саду", ua: "Почуття і рима в саду" },
      rule: rule([
        "*Uczucie* biorę ze słowa w wierszu.",
        "*Rym* sprawdzam końcami wersów."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Чувство бери из слова, которое прямо стоит в стихе.",
          "Рифму проверь концами: chwilę–kwiaty, ciszę–ogród, nocą–oddech."
        ],
        ua: "Почуття бери зі слова у вірші. Риму перевіряй кінцями рядків."
      },
      task: task({
        id: "s19-ogrod-uczucie",
        q: "Jakie uczucie wyraża podmiot? I czy wersy 1–2 się rymują?",
        qr: "По-русски: какое чувство в тексте и рифмуются ли первые две строки?",
        qu: "Яке почуття виражає голос? І чи римуються рядки 1–2?",
        options: [
          opt("a", "Zachwyt, bo jest „zachwyt nad nocą”. Rymu w wersach 1–2 nie ma.", "Захоплення, бо є «zachwyt nad nocą». Рима в рядках 1–2 немає."),
          opt("b", "Gniew, bo noc jest ciemna. Rym jest w wersach 1–2.", "Гнів, бо ніч темна. Рима є в рядках 1–2."),
          opt("c", "Obojętność. Rym jest tylko w środku wersów.", "Байдужість. Рима лише всередині рядків.")
        ],
        answer: "a",
        hint: "Прочитай 5-ю строку и концы первых двух.",
        hintu: "Прочитай рядок 5 і кінці рядків 1–2.",
        exr: "В тексте прямо есть zachwyt — восторг. Концы chwilę и kwiaty не рифмуются. На карточке оба эти ответа были верными.",
        ex: "W tekście jest „zachwyt”. Chwilę i kwiaty nie tworzą rymu.",
        exu: "У тексті прямо є «zachwyt». Кінці chwilę і kwiaty рими не творять. На картці обидві ці відповіді були влучні.",
        mistakes: [
          miss("b", "Гнева в тексте нет. Chwilę и kwiaty не рифмуются.", "Гніву в тексті немає. Chwilę і kwiaty не римуються."),
          miss("c", "Голос говорит о спокойствии и восторге, не о равнодушии.", "Голос говорить про спокій і захоплення, не про байдужість.")
        ]
      })
    },
    {
      type: "example",
      heading: { pl: "Образец, как записать ответ", ua: "Зразок відповіді" },
      rule: rule([
        "*Podmiot* mówi „ja”.",
        "*Adresat* to ten, do kogo jest zwrot.",
        "*Nastrój* podaję ze słowem z tekstu."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Это образец в тетрадь по этому стиху. На контрольной будет другое стихотворение. Остаётся способ, не те же слова.",
          "Голос говорит: siedzę, wsłuchuję się, czuję. Он сидит на скамейке. Это не автор и не луна.",
          "Адресат — луна, потому что есть зов: Księżycu, zostań ze mną.",
          "Настроение спокойное, с восторгом: в тексте есть cisza, spokój, zachwyt."
        ],
        ua: "Це зразок у зошит. На контрольній буде інший вірш. Лишається спосіб."
      },
      text: {
        pl: [
          "Podmiot liryczny mówi: „siedzę”, „wsłuchuję się”, „czuję”. Siedzi na ławce. To nie jest autor i nie jest księżyc.",
          "Adresat to księżyc, bo jest zwrot: „Księżycu, zostań ze mną”.",
          "Nastrój jest spokojny, pełen zachwytu, bo są słowa „cisza”, „spokój”, „zachwyt”."
        ],
        ua: [
          "Голос каже: «siedzę», «wsłuchuję się», «czuję». Сидить на лавці. Це не автор і не місяць.",
          "Адресат — місяць, бо є звертання: «Księżycu, zostań ze mną».",
          "Настрій спокійний, зі захопленням, бо є слова «cisza», «spokój», «zachwyt»."
        ]
      },
      task: task({
        id: "s19-transfer-drzewo",
        q: "Nowy początek: „Drzewo, podaj mi swoją gałąź”. Kto jest adresatem?",
        qr: "По-русски: начало новое — «Дерево, дай мне свою ветку». Кто адресат?",
        qu: "Новий початок: «Drzewo, podaj mi swoją gałąź». Хто адресат?",
        options: [
          opt("a", "Drzewo.", "Дерево."),
          opt("b", "Autor.", "Автор."),
          opt("c", "Gałąź, bo jest w zdaniu.", "Гілка, бо вона в реченні.")
        ],
        answer: "a",
        hint: "Кто слышит просьбу «podaj»?",
        hintu: "Хто чує прохання «podaj»?",
        exr: "Адресат — дерево. Есть зов и просьба. Ветка — только вещь, о которой просят.",
        ex: "Adresat to drzewo. Jest wołanie i prośba. Gałąź jest tylko rzeczą, o którą ktoś prosi.",
        exu: "Адресат — дерево. Є клич і прохання. Гілка — лише річ, про яку просять.",
        mistakes: [
          miss("b", "Автора в этих словах нет.", "Автора в цих словах немає."),
          miss("c", "Просьба идёт к дереву. Ветка — то, о чём просят.", "Прохання йде до дерева. Гілка — те, про що просить голос.")
        ]
      })
    },
    {
      type: "goal",
      heading: { pl: "Блок 2. Rzeczownik", ua: "Блок 2. Rzeczownik" },
      formula: "Блок 2. Rzeczownik — существительное",
      promptPlace: "before",
      prompt: {
        pl: [
          "Существительное называет кого-то или что-то. Сначала вопрос kto? co?, потом большая буква, потом «можно потрогать или только подумать».",
          "Падеж, основа и nie идут после этого. Задание — когда пример уже разобран."
        ],
        ua: "Іменник називає когось або щось. Спочатку kto? co?, потім велика літера, потім «можна торкнути чи тільки подумати»."
      },
      items: [
        ru("kto? co? — кто? что?", "kto? co? — хто? що?"),
        ru("własny — своё имя, большая буква. pospolity — общее название.", "własny — власна назва. pospolity — загальна."),
        ru("konkretny — можно увидеть или потрогать. abstrakcyjny — чувство или мысль.", "konkretny — органи чуття. abstrakcyjny — думка.")
      ]
    },
    {
      type: "concept",
      heading: { pl: "Rzeczownik — существительное", ua: "Іменник" },
      rule: rule([
        "*Rzeczownik* nazywa osoby, zwierzęta, rośliny, przedmioty, zjawiska i pojęcia.",
        "Odpowiada na *kto? co?*"
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Rzeczownik называет человека, животное, растение, вещь, явление или понятие. В словарной форме отвечает на kto? или co?.",
          "Слово на «какой?» — przymiotnik, прилагательное. Слово, которое говорит, что кто-то делает, — czasownik, глагол.",
          "Пример: mama — kto? książka — co? szybko — как, не существительное. pobiegła — побежала, глагол."
        ],
        ua: "Іменник відповідає на kto? або co?. Слово на jaki? — прикметник. Дієслово каже, що хтось робить."
      },
      items: [
        ru("mama — кто? książka — что?", "mama — kto?  książka — co?"),
        ru("szybki, cichy — какой? Это не существительное.", "szybki, cichy — jaki? Це не іменник."),
        ru("Школьная фраза с карточки: rzeczownik называет людей, животных, растения, предметы и явления.", "Речення з картки: rzeczownik називає осіб, тварин, рослини, речі і явища.")
      ],
      task: task({
        id: "s19-rzecz",
        q: "W zdaniu „Ola szybko pobiegła” które słowo jest rzeczownikiem?",
        qr: "По-русски: в предложении «Оля быстро побежала» какое слово — существительное?",
        qu: "У реченні «Ola szybko pobiegła» яке слово є іменником?",
        options: [
          opt("a", "Ola (kto?)", "Ola (kto?)"),
          opt("b", "szybko", "szybko"),
          opt("c", "pobiegła", "pobiegła")
        ],
        answer: "a",
        hint: "Задай kto? или co?.",
        hintu: "Постав kto? co?",
        exr: "Ola отвечает на «кто?». Szybko говорит «как». Pobiegła говорит, что она сделала.",
        ex: "Ola odpowiada na kto?.",
        exu: "Ola відповідає на kto?. Szybko каже як. Pobiegła каже, що зробила.",
        mistakes: [
          miss("b", "Szybko не называет ни человека, ни вещь. Это «как».", "Szybko не називає ні особу, ні річ."),
          miss("c", "Pobiegła — глагол: побежала.", "Pobiegła — дієслово.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Własne и pospolite — своё имя и общее", ua: "Власні і загальні" },
      rule: rule([
        "*Własny* to nazwa własna, wielka litera.",
        "*Pospolity* to nazwa ogólna, mała litera."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Własny — своё имя: человек, город, страна, герой. Пишется с большой буквы.",
          "Pospolity — общее название. Маленькая буква.",
          "На карточке слова иногда напечатаны маленькими специально. В ответе имена пиши как в книге: Grecja, Tarnów, Batman."
        ],
        ua: "Власний — власне ім’я, велика літера. Загальний — спільна назва, мала літера."
      },
      items: [
        ru("Ola, Grecja, Tarnów, Batman — свои имена, большая буква.", "Ola, Grecja, Tarnów, Batman — власні"),
        ru("mama, miasto, kaktus — общие названия, маленькая буква.", "mama, miasto, kaktus — загальні")
      ],
      task: task({
        id: "s19-wlasne",
        type: "multiple-choice",
        q: "Które wyrazy z karty są własne? Zaznacz wszystkie. W odpowiedzi użyj wielkiej litery.",
        qr: "По-русски: какие слова — собственные имена? Отметь все. Пиши с большой буквы.",
        qu: "Які слова з картки власні? Познач усі. У відповіді велика літера.",
        options: [
          opt("a", "Grecja", "Grecja"),
          opt("b", "mama", "mama"),
          opt("c", "Tarnów", "Tarnów"),
          opt("d", "Batman", "Batman"),
          opt("e", "kaktus", "kaktus")
        ],
        answer: ["a", "c", "d"],
        hint: "Имя страны, города и героя.",
        hintu: "Ім’я країни, міста і героя.",
        exr: "Свои: Grecja, Tarnów, Batman. Общие: mama, miasto, kaktus. Слово miasto общее. Tarnów — название одного города, своё.",
        ex: "Własne: Grecja, Tarnów, Batman. Pospolite: mama, miasto, kaktus.",
        exu: "Власні: Grecja, Tarnów, Batman. Загальні: mama, miasto, kaktus. Слово miasto загальне. Tarnów — назва одного міста, власна."
      })
    },
    {
      type: "concept",
      heading: { pl: "Konkretne и abstrakcyjne — можно потрогать или только подумать", ua: "Конкретні і абстрактні" },
      rule: rule([
        "*Konkretny* poznaję zmysłami.",
        "*Abstrakcyjny* to pojęcie albo uczucie."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Konkretny можно увидеть, услышать или потрогать: biurko — парта, roślina — растение.",
          "Abstrakcyjny — только мысль или чувство. Strach — страх — на парту не положишь, поэтому он абстрактный, хотя его и чувствуют.",
          "Одно слово живёт в двух делениях сразу. Ola — своё имя и при этом конкретная: человека видно."
        ],
        ua: "Конкретний можна побачити або торкнути. Абстрактний — лише думка або почуття."
      },
      items: [
        ru("biurko, komputer, roślina — парта, компьютер, растение. Можно увидеть.", "biurko, komputer, roślina — конкретні"),
        ru("strach, smutek, zadowolenie — страх, грусть, удовлетворение. Только в мысли.", "strach, smutek, zadowolenie — абстрактні"),
        ru("Одно слово живёт в двух делениях: Ola — своё имя и при этом её видно.", "Одне слово живе у двох поділах: Ola власна і конкретна.")
      ],
      task: task({
        id: "s19-abstr",
        type: "multiple-choice",
        q: "Które wyrazy są abstrakcyjne? Zaznacz wszystkie pewne.",
        qr: "По-русски: какие слова только в голове, их нельзя положить на парту?",
        qu: "Які слова абстрактні? Познач усі певні.",
        options: [
          opt("a", "strach", "strach"),
          opt("b", "biurko", "biurko"),
          opt("c", "zadowolenie", "zadowolenie"),
          opt("d", "roślina", "roślina"),
          opt("e", "smutek", "smutek")
        ],
        answer: ["a", "c", "e"],
        hint: "Можно ли это положить на парту?",
        hintu: "Чи можна це покласти на парту?",
        exr: "Страх, удовлетворение и грусть — в мысли. Парту и растение видно и можно потрогать.",
        ex: "Strach, zadowolenie i smutek są w myśli. Biurko i roślinę widać.",
        exu: "Страх, задоволення і смуток у думці. Стіл і рослину видно і можна торкнути."
      })
    },
    {
      type: "concept",
      heading: { pl: "Przypadek — падеж, по вопросу", ua: "Відмінок, рід, число" },
      rule: rule([
        "*Przypadek* poznaję po pytaniu.",
        "*Mianownik* — kto? co? — jest.",
        "*Dopełniacz* — kogo? czego? — nie ma.",
        "*Celownik* — komu? czemu? — przyglądam się.",
        "*Biernik* — kogo? co? — widzę.",
        "*Narzędnik* — (z) kim? (z) czym? — idę z.",
        "*Miejscownik* — (o) kim? (o) czym? — zawsze z przyimkiem.",
        "*Wołacz* — o!"
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Падеж узнаёшь по вопросу, не по звуку окончания.",
          "Род проверяешь в словаре, единственное число: ten, ta, to. Число — один предмет или много.",
          "Существительное меняется по падежам и по числам. Оно не меняется по родам и не имеет времени, как глагол.",
          "Пример: do biblioteki — do czego? Это dopełniacz, родительный. В словаре было ta biblioteka."
        ],
        ua: "Відмінок впізнаєш за питанням. Рід — у називному однини: ten, ta, to."
      },
      items: [
        ru("Mianownik — именительный — kto? co? — jest.", "Mianownik — називний — kto? co? — jest."),
        ru("Dopełniacz — родительный — kogo? czego? — nie ma.", "Dopełniacz — родовий — kogo? czego? — nie ma."),
        ru("Celownik — дательный — komu? czemu? — przyglądam się.", "Celownik — давальний — komu? czemu? — przyglądam się."),
        ru("Biernik — винительный — kogo? co? — widzę.", "Biernik — знахідний — kogo? co? — widzę."),
        ru("Narzędnik — творительный — (z) kim? (z) czym? — idę z.", "Narzędnik — орудний — (z) kim? (z) czym? — idę z."),
        ru("Miejscownik — предложный — (o) kim? (o) czym? Всегда с предлогом.", "Miejscownik — місцевий — (o) kim? (o) czym? Завжди з прийменником."),
        ru("Wołacz — звательный — o!", "Wołacz — кличний — o!")
      ],
      task: task({
        id: "s19-przypadek",
        q: "W zdaniu „Ola pobiegła do biblioteki” forma „biblioteki” to:",
        qr: "По-русски: «Оля побежала в библиотеку». Форма biblioteki — это какой падеж?",
        qu: "У реченні «Ola pobiegła do biblioteki» форма «biblioteki» — це:",
        options: [
          opt("a", "dopełniacz, bo: do czego?", "родовий, бо: do czego?"),
          opt("b", "mianownik, bo: kto? co?", "називний, бо: kto? co?"),
          opt("c", "czasownik, bo stoi po „do”", "дієслово, бо стоїть після «do»")
        ],
        answer: "a",
        hint: "Предлог do любит вопрос czego?",
        hintu: "Прийменник do любить питання czego?",
        exr: "Do biblioteki = do czego? Это родительный. В словаре: biblioteka. Слова jest и widzę оба могут спрашивать co?, поэтому помогает слово-помощник.",
        ex: "Do biblioteki = do czego? To dopełniacz. Mianownik brzmiałby: biblioteka.",
        exu: "Do biblioteki = do czego? Це родовий. Називний був би: biblioteka. Jest і widzę обидва можуть питати co?, тому допомагає слово-помічник.",
        mistakes: [
          miss("b", "Именительный — форма из словаря: ta biblioteka. Здесь окончание уже изменилось.", "Називний — форма зі словника: ta biblioteka. Тут закінчення вже змінилося."),
          miss("c", "Biblioteki называет место. Это существительное, не глагол.", "Biblioteki називає місце. Це іменник.")
        ]
      })
    },
    {
      type: "practice",
      heading: { pl: "Rodzaj — род берут из словаря, не из множественного", ua: "Рід не з закінчення множини" },
      rule: rule([
        "*Rodzaj* sprawdzam: ten, ta, to.",
        "*Końcówka* liczby mnogiej rodzaju nie wybiera."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Род смотри в словаре, единственное число: ten ptak — мужской.",
          "Ptaki выглядит как «много», но окончание множественного числа род не выбирает.",
          "Пример: ten ptak, ta mama, to okno."
        ],
        ua: "Рід бери зі словника, однина. Ptaki виглядають як багато, але рід перевіряєш при ten ptak."
      },
      task: task({
        id: "s19-rodzaj",
        q: "Jaki rodzaj i jaką liczbę ma wyraz „ptaki” w zdaniu „Kot obserwował ptaki”?",
        qr: "По-русски: «Кот наблюдал птиц». Какой род и какое число у ptaki?",
        qu: "Який рід і яке число має слово «ptaki» в реченні «Kot obserwował ptaki»?",
        options: [
          opt("a", "rodzaj męski (ten ptak), liczba mnoga, biernik (co?)", "чоловічий рід (ten ptak), множина, знахідний (co?)"),
          opt("b", "rodzaj żeński, bo końcówka -i", "жіночий рід, бо закінчення -i"),
          opt("c", "rodzaj nijaki (to ptaki)", "середній рід (to ptaki)")
        ],
        answer: "a",
        hint: "Сначала одна птица: ten, ta или to?",
        hintu: "Спочатку один птах: ten, ta чи to?",
        exr: "Словарь: ten ptak, мужской род. В предложении птиц много, значит множественное число. Obserwował co? — винительный.",
        ex: "Słownik: ten ptak. W zdaniu jest wiele ptaków, więc liczba mnoga. Obserwował co? — biernik.",
        exu: "Словник: ten ptak. У реченні багато птахів, отже множина. Obserwował co? — знахідний.",
        mistakes: [
          miss("b", "Окончание множественного числа род не выбирает.", "Закінчення множини не вибирає рід."),
          miss("c", "To ставят при среднем роде: to okno. Птица — ten.", "To ставимо при середньому роді: to okno. Птах — ten.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Temat и końcówka — основа и окончание", ua: "Основа і закінчення" },
      rule: rule([
        "*Końcówka* to część, która się zmienia przy odmianie.",
        "*Temat* to część, która zostaje."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Эту жёлтую рамку говори учителю. Окончание — часть, которая меняется. Основа — то, что остаётся.",
          "Końcówka — хвост, который меняется, когда слово склоняют. Temat — то, что остаётся.",
          "Сначала форма из словаря, потом данная форма. Смотри, чем они отличаются.",
          "Пример: mama → mamie. Основа mam-, окончание -ie."
        ],
        ua: "Закінчення — хвіст, який змінюється. Основа — те, що лишається."
      },
      items: [
        ru("nauczyciel → nauczycielowi. Основа: nauczyciel-. Окончание: -owi.", "nauczyciel → nauczycielowi. Основа: nauczyciel-. Закінчення: -owi."),
        ru("mama → mamie. Основа: mam-. Окончание: -ie.", "mama → mamie. Основа: mam-. Закінчення: -ie."),
        ru("łóżko → łóżkiem. Основа: łóżk-. Окончание: -em.", "łóżko → łóżkiem. Основа: łóżk-. Закінчення: -em.")
      ],
      task: task({
        id: "s19-temat",
        q: "Jaki jest podział wyrazu „doktorowi”?",
        qr: "По-русски: как делить слово doktorowi на основу и окончание?",
        qu: "Який поділ слова «doktorowi»?",
        options: [
          opt("a", "temat doktor-, końcówka -owi", "основа doktor-, закінчення -owi"),
          opt("b", "temat doktorowi, końcówki nie ma", "основа doktorowi, закінчення немає"),
          opt("c", "temat -owi, końcówka doktor", "основа -owi, закінчення doktor")
        ],
        answer: "a",
        hint: "Словарь: doktor. Что прибавилось?",
        hintu: "Словник: doktor. Що додалося?",
        exr: "Из словаря doktor стало doktorowi. Прибавился хвост -owi. Остальное — основа.",
        ex: "Ze słownika doktor zrobiło się doktorowi. Doszedł ogon -owi. Reszta została tematem.",
        exu: "Зі словника doktor стало doktorowi. Додався хвіст -owi. Решта лишилася основою.",
        mistakes: [
          miss("b", "Хвост изменился, значит окончание есть. Не видно его только иногда.", "Хвіст змінився, тож закінчення є. Не видно його лише іноді."),
          miss("c", "Окончание стоит в конце. Doktor — постоянная часть.", "Закінчення стоїть у кінці. Doktor — стала частина.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Нулевое окончание — kot|ø", ua: "Закінчення, якого не видно" },
      rule: rule([
        "*Końcówka zerowa* to ø.",
        "*Temat* jest zawsze.",
        "„Nie widać” nie znaczy „nie ma tematu”."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Иногда хвоста не видно. Тогда окончание пустое и его пишут как ø.",
          "Основа всё равно есть. «Не видно» не значит «нет основы».",
          "Пример: kot → kot|ø. Основа kot-, окончание нулевое. Koty → основа kot-, окончание -y."
        ],
        ua: "Іноді хвоста не видно. Тоді закінчення порожнє: ø. Основа все одно є."
      },
      items: [
        ru("kot → kot|ø. Основа: kot-. Нулевое окончание.", "kot → kot|ø. Основа: kot-. Нульове закінчення."),
        ru("koty → основа kot-, окончание -y.", "koty → основа kot-, закінчення -y.")
      ],
      task: task({
        id: "s19-zero",
        type: "true-false",
        q: "W wyrazie „kot” nie ma tematu, bo nie widać końcówki. Prawda czy fałsz?",
        qr: "По-русски: у слова kot нет основы, потому что окончания не видно. Правда или ложь?",
        qu: "У слові «kot» немає основи, бо не видно закінчення. Правда чи ні?",
        answer: false,
        hint: "Пустое окончание — это ø, не отсутствие основы.",
        hintu: "Порожнє закінчення — це ø, не відсутність основи.",
        exr: "Ложь. Основа — kot-, окончание нулевое: kot|ø.",
        ex: "Fałsz. Temat to kot-, końcówka jest zerowa: kot|ø.",
        exu: "Ні. Основа — kot-, закінчення нульове: kot|ø."
      })
    },
    {
      type: "concept",
      heading: { pl: "Nie с существительным — слитно или раздельно", ua: "Nie з іменником" },
      rule: rule([
        "*Nie* z rzeczownikiem piszę łącznie, gdy tworzy nazwę.",
        "Rozdzielnie, gdy zaprzeczam: To nie mama."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "По-украински «не» чаще стоит отдельно. По-польски с существительным два разных случая.",
          "Слитно, когда nie вошло в название: niewiedza — незнание, niepokój — беспокойство.",
          "Раздельно, когда nie что-то отрицает: To nie mama — это не мама.",
          "Niemiły и niemądry — прилагательные. Это не пример nie с существительным."
        ],
        ua: "Польською з іменником два випадки. Разом, коли nie увійшло в назву. Окремо, коли nie заперечує: To nie…"
      },
      items: [
        ru("слитно: niewiedza, niepokój, nieprawda, niepogoda", "разом: niewiedza, niepokój, nieprawda, niepogoda"),
        ru("раздельно: To nie mama. To nie przypadek.", "окремо: To nie mama. To nie przypadek."),
        ru("niemiły и niemądry — прилагательные. Это не пример nie с существительным.", "niemiły і niemądry — прикметники. Це не приклад nie з іменником.")
      ],
      task: task({
        id: "s19-nie",
        type: "multiple-choice",
        q: "Które zdania są prawdziwe? Zaznacz wszystkie pewne.",
        qr: "По-русски: какие предложения верные? Отметь все верные.",
        qu: "Які речення правдиві? Познач усі певні.",
        options: [
          opt("a", "Niewiedza i niepokój piszemy razem.", "Niewiedza і niepokój пишемо разом."),
          opt("b", "To nie mama piszemy razem, jak po ukraińsku.", "To nie mama пишемо разом, як українською."),
          opt("c", "To nie mama piszemy osobno, bo nie przeczy.", "To nie mama пишемо окремо, бо nie заперечує."),
          opt("d", "Niemiły jest przykładem nie z rzeczownikiem.", "Niemiły є прикладом nie з іменником.")
        ],
        answer: ["a", "c"],
        hint: "Название сливается. Предложение «to nie…» пишется раздельно.",
        hintu: "Назва злипається. Речення «to nie…» стоїть окремо.",
        exr: "Niewiedza и niepokój — одно название, слитно. To nie mama — отрицание, раздельно. Niemiły — прилагательное.",
        ex: "Niewiedza i niepokój to jedna nazwa. To nie mama to zaprzeczenie, więc osobno. Niemiły jest przymiotnikiem.",
        exu: "Niewiedza і niepokój — одна назва. To nie mama — заперечення, тому окремо. Niemiły — прикметник."
      })
    },
    {
      type: "example",
      heading: { pl: "Filiżanka — чашка, как склонять", ua: "Filiżanka" },
      rule: rule([
        "*Mianownik:* jest filiżanka.",
        "*Biernik:* widzę filiżankę.",
        "*Dopełniacz liczby mnogiej:* nie ma filiżanek."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Та же схема окончаний подходит к другим словам на -a: szklanka, łyżka, lampa.",
          "Jest filiżanka — именительный, «есть чашка». Widzę filiżankę — винительный, «вижу чашку». Оба вопроса могут звучать co?, поэтому помогает слово jest или widzę.",
          "Во множественном родительном появляется e: filiżanek. Filiżance бывает и дательным, и предложным. Их различает вопрос: komu? или o czym?"
        ],
        ua: "Та сама схема закінчень пасує до слів на -a. Jest filiżanka — називний. Widzę filiżankę — знахідний."
      },
      items: [
        ru("единственное: filiżanka, filiżanki, filiżance, filiżankę, filiżanką, filiżance, filiżanko", "однина: filiżanka, filiżanki, filiżance, filiżankę, filiżanką, filiżance, filiżanko"),
        ru("множественное: filiżanki, filiżanek, filiżankom, filiżanki, filiżankami, filiżankach, filiżanki", "множина: filiżanki, filiżanek, filiżankom, filiżanki, filiżankami, filiżankach, filiżanki"),
        ru("Во множественном родительном появляется e: filiżanek.", "У родовому множини з’являється e: filiżanek.")
      ],
      task: task({
        id: "s19-fili",
        q: "Która para jest poprawna?",
        qr: "По-русски: какая тройка форм верная?",
        qu: "Яка пара правильна?",
        options: [
          opt("a", "widzę filiżankę  ·  nie ma filiżanek  ·  mówię o filiżance", "widzę filiżankę  ·  nie ma filiżanek  ·  mówię o filiżance"),
          opt("b", "widzę filiżanka  ·  nie ma filiżanki  ·  mówię filiżance", "widzę filiżanka  ·  nie ma filiżanki  ·  mówię filiżance"),
          opt("c", "widzę filiżanką  ·  nie ma filiżankom  ·  o! filiżanka", "widzę filiżanką  ·  nie ma filiżankom  ·  o! filiżanka")
        ],
        answer: "a",
        hint: "Widzę + винительный. Нет многих + filiżanek. Говорю о + предложный.",
        hintu: "Widzę + знахідний. Немає багатьох + filiżanek. Mówię o + місцевий.",
        exr: "Вижу что? filiżankę. Нет чего? многих filiżanek. Говорю о чём? o filiżance. Предложный всегда с предлогом.",
        ex: "Widzę co? filiżankę. Nie ma czego? wielu filiżanek. Mówię o czym? o filiżance.",
        exu: "Widzę co? filiżankę. Nie ma чого? багатьох filiżanek. Mówię o czym? o filiżance. Місцевий має прийменник.",
        mistakes: [
          miss("b", "После widzę форма меняется. Предложный не стоит один, без o.", "Після widzę форма змінюється. Місцевий не стоїть сам, без o."),
          miss("c", "Filiżanką — творительный (idę z). Звательный звучит filiżanko.", "Filiżanką — орудний (idę z). Кличний звучить filiżanko.")
        ]
      })
    },
    {
      type: "goal",
      heading: { pl: "Блок 3. Ortografia — орфография", ua: "Блок 3. Ortografia" },
      formula: "ó  ·  rz  ·  ż  ·  ch  ·  h",
      promptPlace: "before",
      prompt: {
        pl: [
          "Букву не выбирают на слух. Ó слышится как u, rz как ż, ch как h.",
          "Ищут пару в семье слова и пишут ponieważ — потому что.",
          "Если пары с r нет, это rz niewymienne: написание помнят."
        ],
        ua: "Літеру не вибирають на слух. Шукають пару в сім’ї слова."
      },
      items: [
        ru("ó → o: osób – osoba. Пишем ó, потому что в osoba ó меняется на o.", "ó → o: osób – osoba."),
        ru("rz → r: morze – morski. ż → g, dz, z, ź, h: droga – dróżka.", "rz → r: morze – morski. ż → g, dz, z, ź, h."),
        ru("ch → sz: mucha – muszka. h → g: wahać się – waga.", "ch → sz: mucha – muszka. h → g: wahać się – waga.")
      ]
    },
    {
      type: "concept",
      heading: { pl: "Сначала пара, потом буква", ua: "Орфографія: спочатку пара" },
      rule: rule([
        "*ó* wymienia się na o.",
        "*rz* wymienia się na r.",
        "*ż* wymienia się na g, dz, z, ź albo h.",
        "*ch* wymienia się na sz.",
        "*h* wymienia się na g albo ż."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Школьное предложение: osób пишем через ó, ponieważ в слове osoba ó меняется на o.",
          "Пара обосновывает букву. Одного звучания мало."
        ],
        ua: "Шкільне речення: osób пишемо через ó, бо в слові osoba ó змінюється на o."
      },
      items: [
        ru("ó → o: osób – osoba", "ó → o: osób – osoba"),
        ru("rz → r: morze – morski, orzeł – orli", "rz → r: morze – morski, orzeł – orli"),
        ru("ch → sz: mucha – muszka", "ch → sz: mucha – muszka"),
        ru("ż → g, dz, z, ź, h: droga – dróżka, mróz – mrozu", "ż → g, dz, z, ź, h: droga – dróżka, mróz – mrozu"),
        ru("h → g, ż, z, dz: wahać się – waga, druh – drużyna", "h → g, ż, z, dz: wahać się – waga")
      ],
      task: task({
        id: "s19-ort-schemat",
        q: "Które uzupełnienie jest poprawne?",
        qr: "По-русски: какая схема замен верная?",
        qu: "Яке доповнення правильне?",
        options: [
          opt("a", "ó → o; rz → r; ż → g (także dz, z, ź, h); ch → sz", "ó → o; rz → r; ż → g (також dz, z, ź, h); ch → sz"),
          opt("b", "ó → u; rz → ż; ż → sz; ch → h", "ó → u; rz → ż; ż → sz; ch → h"),
          opt("c", "Wszystkie te litery piszemy zawsze tak samo, bez pary.", "Усі ці літери завжди пишемо однаково, без пари.")
        ],
        answer: "a",
        hint: "Вспомни osób – osoba и morze – morski.",
        hintu: "Згадай osób – osoba і morze – morski.",
        exr: "Пара обосновывает букву. Ó слышно как u, а rz как ż, поэтому слух не выбирает букву.",
        ex: "Para uzasadnia literę. Samo brzmienie nie wystarcza, bo ó słychać jak u, a rz jak ż.",
        exu: "Пара обґрунтовує літеру. Самого звучання мало, бо ó чути як u, а rz як ż.",
        mistakes: [
          miss("b", "Это пары на слух, не из семьи слова.", "Це пари зі слуху, не з сім’ї слів."),
          miss("c", "Без пары остаётся только rz niewymienne. Остальное доказывают заменой.", "Без пари лишається лише rz незмінне. Решту доводиш заміною.")
        ]
      })
    },
    {
      type: "concept",
      heading: { pl: "Rz niewymienne — rz без пары", ua: "Rz незмінне" },
      rule: rule([
        "*Rz niewymienne* nie ma pary z r.",
        "Pisownię pamiętam."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Когда пары с r нет, замена букву не доказывает. Написание помнят.",
          "Orzeł в эту группу не входит: есть orli. Marzyłby тоже нет: там ż, не rz.",
          "Примеры без пары: rzeka — река, rzeźba — скульптура, twarz — лицо, rzadko — редко."
        ],
        ua: "Коли пари з r немає, написання пам’ятаєш. Orzeł має orli. Marzyłby — це ż."
      },
      items: [
        ru("без пары: rzeka, rzeźba, twarz, rzadko", "незмінні: rzeka, rzeźba, twarz, rzadko"),
        ru("с парой: orzeł – orli, morze – morski", "змінні: orzeł – orli, morze – morski")
      ],
      task: task({
        id: "s19-niewym",
        type: "multiple-choice",
        q: "Które wyrazy są rz niewymienne? Zaznacz wszystkie pewne.",
        qr: "По-русски: у каких слов rz без пары с r? Отметь все такие.",
        qu: "Які слова є rz незмінним? Познач усі певні.",
        options: [
          opt("a", "rzeka", "rzeka"),
          opt("b", "orzeł", "orzeł"),
          opt("c", "twarz", "twarz"),
          opt("d", "morze", "morze")
        ],
        answer: ["a", "c"],
        hint: "Найдёшь ли пару с одним r?",
        hintu: "Чи знайдеш пару з самим r?",
        exr: "Rzeka и twarz пары с r не имеют. Orzeł имеет orli, morze имеет morski. Это rz с заменой.",
        ex: "Rzeka i twarz nie mają pary z r. Orzeł ma orli, morze ma morski. To rz wymienne.",
        exu: "Rzeka і twarz не мають пари з r. Orzeł має orli, morze має morski. Це rz змінне."
      })
    },
    {
      type: "goal",
      heading: { pl: "Блок 4. Synonimy — синонимы", ua: "Блок 4. Synonimy" },
      formula: "s. 56–57",
      promptPlace: "before",
      prompt: {
        pl: [
          "Синоним — другое слово с очень близким значением. В предложение его ставят в той же форме.",
          "Противоположное слово синонимом не является. Plucha — слякоть, skwar — жара. Это не синонимы."
        ],
        ua: "Синонім — інше слово з дуже близьким значенням. Протилежне слово синонімом не є."
      },
      items: [
        ru("podróż — поездка: wyjazd, wycieczka, wyprawa.", "podróż: wyjazd, wycieczka, wyprawa."),
        ru("fajny dzień → udany dzień. Форма должна подойти.", "fajny dzień → udany dzień.")
      ]
    },
    {
      type: "concept",
      heading: { pl: "Synonimy — близкие по смыслу", ua: "Синоніми" },
      rule: rule([
        "*Synonimy* mają podobne znaczenie.",
        "Różnią się zapisem.",
        "*Wyraz przeciwny* synonimem nie jest."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Пример семьи: podróż, wyjazd, wycieczka, wyprawa — поездка, выезд, экскурсия, поход.",
          "Powrót — возвращение, это другая сторона дороги, не синоним podróż."
        ],
        ua: "Синонім ставиш у тій самій формі. Powrót — не синонім podróż."
      },
      items: [
        ru("podróż, wyjazd, wycieczka, wyprawa", "podróż, wyjazd, wycieczka, wyprawa"),
        ru("plucha и skwar — противоположность, не синоним", "plucha і skwar — протилежність, не синонім"),
        ru("fajny dzień → udany dzień. Форма должна подойти.", "fajny dzień → udany dzień. Форма має пасувати.")
      ],
      task: task({
        id: "s19-syn",
        type: "multiple-choice",
        q: "Które wyrazy są bliskoznaczne do „podróż”? Zaznacz wszystkie pewne.",
        qr: "По-русски: какие слова близки по смыслу к podróż — поездка? Отметь все.",
        qu: "Які слова близькі до «podróż»? Познач усі певні.",
        options: [
          opt("a", "wyjazd", "wyjazd"),
          opt("b", "wycieczka", "wycieczka"),
          opt("c", "powrót", "powrót"),
          opt("d", "wyprawa", "wyprawa")
        ],
        answer: ["a", "b", "d"],
        hint: "Powrót — дорога в обратную сторону.",
        hintu: "Powrót — дорога у зворотний бік.",
        exr: "Wyjazd, wycieczka и wyprawa близки к поездке. Powrót значит другое.",
        ex: "Wyjazd, wycieczka i wyprawa są bliskie podróży. Powrót znaczy co innego.",
        exu: "Wyjazd, wycieczka і wyprawa близькі до подорожі. Powrót означає інше."
      })
    },
    {
      type: "goal",
      heading: { pl: "Пробная контрольная — новый стих", ua: "Пробна контрольна" },
      formula: "Okno  ·  другие слова",
      promptPlace: "before",
      prompt: {
        pl: [
          "Дальше подсказки в тексте урока нет. Стихотворение новое. Ответ увидишь после Sprawdź.",
          "Читай вопрос: кто говорит, к кому, какое средство, kto? co?, ponieważ.",
          "Одна ошибка не закрывает дальше."
        ],
        ua: "З цього екрана в тексті уроку немає підказки. Вірш новий. Відповідь після Перевірити."
      },
      items: [
        ru("Вопросы остаются школьными, по-польски. Под строкой — что они значат по-русски.", "Питання шкільні, польською. Під рядком — що вони значать."),
        ru("Сначала прочитай стих два раза, потом отвечай.", "Спочатку прочитай вірш двічі, потім відповідай.")
      ]
    },
    {
      type: "observe",
      heading: { pl: "Задание 1. Новый стих — Okno", ua: "Завд. 1. Новий вірш" },
      formula: "Okno",
      promptPlace: "after",
      prompt: {
        pl: [
          "Прочитай два раза. Ищи «я» и зов.",
          "Трудные слова: szyba — стекло, płaszcz — пальто, tęsknota — тоска, szept — шёпот."
        ],
        ua: "Прочитай двічі. Шукай «я» і клич."
      },
      text: { pl: OKNO },
      task: task({
        id: "s19-t-podmiot",
        q: "Kto jest podmiotem lirycznym?",
        qr: "По-русски: кто здесь говорит «я»?",
        qu: "Хто podmiot liryczny?",
        options: [
          opt("a", "Osoba, która mówi: siedzę, liczę, czuję. Siedzi przy oknie.", "Особа, яка каже: siedzę, liczę, czuję. Сидить біля вікна."),
          opt("b", "Deszcz.", "Дощ."),
          opt("c", "Autor wiersza.", "Автор вірша.")
        ],
        answer: "a",
        hint: "Ищи слова от «я»: siedzę, liczę, czuję.",
        hintu: "Шукай «я».",
        exr: "Голос говорит: сижу, считаю, чувствую. Дождь слышит просьбу, значит он адресат. Автора нет.",
        ex: "Głos mówi siedzę, liczę, czuję. Deszcz słyszy prośbę, więc jest adresatem. Autora nie ma.",
        exu: "Голос каже siedzę, liczę, czuję. Дощ чує прохання, тож він адресат. Автора немає.",
        mistakes: [
          miss("b", "К дождю кто-то обращается. Сам дождь не говорит «siedzę».", "До дощу хтось говорить. Сам дощ не каже «siedzę»."),
          miss("c", "Автор поставил бы фамилию под названием. Здесь её нет.", "Автор поставив би прізвище під назвою. Тут його немає, а голос усе одно був би окремо.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 2. Адресат", ua: "Завд. 2. Адресат і засоби" },
      formula: "Okno",
      promptPlace: "before",
      prompt: {
        pl: [
          "Вернись к стиху «Okno». Выписывай только то, что можно показать цитатой.",
          "Адресат — тот, кого зовут. В первой строке: Deszczu, zostań."
        ],
        ua: "Повернись до вірша «Okno». Адресат — той, кого кличуть."
      },
      task: task({
        id: "s19-t-adresat",
        q: "Kto jest adresatem?",
        qr: "По-русски: к кому обращаются в этом стихе?",
        qu: "Хто адресат?",
        options: [
          opt("a", "deszcz", "дощ"),
          opt("b", "płaszcz", "пальто"),
          opt("c", "autor", "автор")
        ],
        answer: "a",
        hint: "Первая строка: Deszczu, zostań.",
        hintu: "Перший рядок: Deszczu, zostań.",
        exr: "Адресат — дождь. Есть звательный Deszczu и просьба zostań.",
        ex: "Adresat to deszcz. Jest wołacz Deszczu i prośba zostań.",
        exu: "Адресат — дощ. Є кличний Deszczu і прохання zostań.",
        mistakes: [
          miss("b", "Пальто лежит. К нему никто не обращается.", "Пальто лежить. Ніхто до нього не говорить."),
          miss("c", "Автор не адресат обращения.", "Автор не є адресатом звертання.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 3. Средства в стихе", ua: "Завд. 3. Засоби" },
      formula: "Okno",
      promptPlace: "before",
      prompt: {
        pl: [
          "Отметь записи, которые правда есть в стихе, вместе с цитатой.",
          "Jakby вводит сравнение. Одно слово «tęsknotę» называет чувство, это не эпитет."
        ],
        ua: "Познач записи, які справді є у вірші, разом із цитатою."
      },
      task: task({
        id: "s19-t-srodki",
        type: "multiple-choice",
        q: "Które środki potrafisz pokazać cytatem? Zaznacz wszystkie pewne.",
        qr: "По-русски: какие средства можешь показать цитатой? Отметь все верные.",
        qu: "Які засоби можеш показати цитатою? Познач усі певні.",
        options: [
          opt("a", "apostrofa: „Deszczu, zostań na mojej szybie”", "апострофа: «Deszczu, zostań na mojej szybie»"),
          opt("b", "epitety: miękki płaszcz, puste krzesło, szare światło", "епітети: miękki płaszcz, puste krzesło, szare światło"),
          opt("c", "porównanie: „jakby wieczór chciał mówić szeptem”", "порівняння: «jakby wieczór chciał mówić szeptem»"),
          opt("d", "epitet: samo „tęsknotę”", "епітет: саме «tęsknotę»")
        ],
        answer: ["a", "b", "c"],
        hint: "Jakby = сравнение. Tęsknota называет чувство.",
        hintu: "Jakby = порівняння. Tęsknota називає почуття.",
        exr: "Три средства имеют цитату. Тоска — чувство голоса, не эпитет.",
        ex: "Trzy środki mają cytat. Tęsknota jest uczuciem podmiotu, nie epitetem.",
        exu: "Три засоби мають цитату. Туга — почуття голосу, не епітет."
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 4. Чувство и рифма", ua: "Завд. 4. Почуття і рима" },
      formula: "Okno",
      promptPlace: "before",
      prompt: {
        pl: [
          "Чувство бери из слова, которое прямо стоит в стихе.",
          "Концы строк 1–2: szybie и krześle. Дальше: krople–pokoju, spokój–szeptem."
        ],
        ua: "Почуття бери зі слова у вірші. Кінці рядків 1–2: szybie і krześle."
      },
      task: task({
        id: "s19-t-rym",
        q: "Jakie uczucie jest w tekście i gdzie jest rym?",
        qr: "По-русски: какое чувство в тексте и где рифма?",
        qu: "Яке почуття є в тексті і де рима?",
        options: [
          opt("a", "Tęsknota. Rym jest w wersach 1–2: szybie – krześle.", "Туга. Рима в рядках 1–2: szybie – krześle."),
          opt("b", "Gniew. Rymów nie ma wcale.", "Гнів. Рим немає зовсім."),
          opt("c", "Strach. Rym jest tylko w środku wersów.", "Страх. Рима лише всередині рядків.")
        ],
        answer: "a",
        hint: "В 5-й строке стоит название чувства.",
        hintu: "У рядку 5 стоїть назва почуття.",
        exr: "В тексте прямо есть tęsknotę — тоску. Szybie и krześle рифмуются. Остальные пары нет.",
        ex: "Jest wprost „tęsknotę”. Szybie i krześle rymują się. Pozostałe pary nie.",
        exu: "Прямо є «tęsknotę». Szybie і krześle римуються. Інші пари ні.",
        mistakes: [
          miss("b", "Гнева в стихе нет, а первая рифма есть.", "Гніву у вірші немає, а перша рима є."),
          miss("c", "Страха нет. Рифма стоит в конце строк 1–2, не в середине.", "Страху немає. Рима стоїть у кінці рядків 1–2, не всередині.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 5. Существительные в предложении", ua: "Завд. 5. Іменники в реченні" },
      formula: "Kasia poszła z bratem do parku i zobaczyła motyle.",
      promptPlace: "before",
      prompt: {
        pl: [
          "Выпиши только существительные. У каждого потом: род из словаря, число, падеж.",
          "Poszła и zobaczyła говорят, что Кася сделала. Это глаголы."
        ],
        ua: "Випиши лише іменники. Потім рід зі словника, число, відмінок."
      },
      task: task({
        id: "s19-t-kasia",
        type: "multiple-choice",
        q: "Które słowa są rzeczownikami? Zaznacz wszystkie.",
        qr: "По-русски: «Кася пошла с братом в парк и увидела бабочек». Какие слова — существительные?",
        qu: "Які слова є іменниками? Познач усі.",
        options: [
          opt("a", "Kasia", "Kasia"),
          opt("b", "poszła", "poszła"),
          opt("c", "bratem", "bratem"),
          opt("d", "parku", "parku"),
          opt("e", "zobaczyła", "zobaczyła"),
          opt("f", "motyle", "motyle")
        ],
        answer: ["a", "c", "d", "f"],
        hint: "Poszła и zobaczyła говорят, что Кася сделала.",
        hintu: "Poszła і zobaczyła кажуть, що Kasia зробила.",
        exr: "Kasia — ta, именительный, kto? Bratem — ten brat, творительный, z kim? Parku — ten park, родительный, do czego? Motyle — ten motyl, множественное, винительный, co? Poszła и zobaczyła — глаголы.",
        ex: "Kasia — ta, mianownik, kto? Bratem — ten brat, narzędnik, z kim? Parku — ten park, dopełniacz, do czego? Motyle — ten motyl, liczba mnoga, biernik, co?",
        exu: "Kasia — ta, називний, kto? Bratem — ten brat, орудний, z kim? Parku — ten park, родовий, do czego? Motyle — ten motyl, множина, знахідний, co? Poszła і zobaczyła — дієслова."
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 6. Основа слова mamie", ua: "Завд. 6. Основа" },
      formula: "mama → mamie",
      promptPlace: "before",
      prompt: {
        pl: [
          "Сначала форма из словаря: mama.",
          "Смотри, какой хвост прибавился в mamie."
        ],
        ua: "Спочатку форма зі словника: mama."
      },
      task: task({
        id: "s19-t-mamie",
        q: "Jaki jest temat i końcówka wyrazu „mamie”?",
        qr: "По-русски: какая основа и какое окончание у слова mamie?",
        qu: "Яка основа і закінчення слова «mamie»?",
        options: [
          opt("a", "temat mam-, końcówka -ie", "основа mam-, закінчення -ie"),
          opt("b", "temat mamie, końcówka ø", "основа mamie, закінчення ø"),
          opt("c", "temat ma-, końcówka -mie", "основа ma-, закінчення -mie")
        ],
        answer: "a",
        hint: "Словарь: mama.",
        hintu: "Словник: mama.",
        exr: "Mama теряет -a и получает -ie. Остаётся основа mam-.",
        ex: "Mama traci -a i dostaje -ie. Zostaje temat mam-.",
        exu: "Mama втрачає -a і отримує -ie. Лишається основа mam-.",
        mistakes: [
          miss("b", "Хвост изменился по сравнению с mama, значит он не нулевой.", "Хвіст змінився щодо mama, тож він не нульовий."),
          miss("c", "Отрезаешь только то, что прибавилось при склонении: -ie.", "Відрізаєш лише те, що додалося при відміні: -ie.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 7. Два деления", ua: "Завд. 7. Два поділи" },
      formula: "własne  ·  abstrakcyjne",
      promptPlace: "before",
      prompt: {
        pl: [
          "Сначала большая буква: своё имя.",
          "Потом вопрос: можно ли это положить на парту или это только чувство."
        ],
        ua: "Спочатку велика літера. Потім: можна торкнути чи це лише почуття."
      },
      task: task({
        id: "s19-t-podzialy",
        q: "Który zestaw jest poprawny?",
        qr: "По-русски: какой набор верный — свои имена и слова только в голове?",
        qu: "Який набір правильний?",
        options: [
          opt("a", "Własne: Warszawa, Odra, Kraków, Batman. Abstrakcyjne: radość, milczenie, lęk.", "Власні: Warszawa, Odra, Kraków, Batman. Абстрактні: radość, milczenie, lęk."),
          opt("b", "Własne: pies, szkoła. Abstrakcyjne: krzesło, telefon, drzewo.", "Власні: pies, szkoła. Абстрактні: krzesło, telefon, drzewo."),
          opt("c", "Własne: radość. Abstrakcyjne: Kraków, bo miasta nie widać na kartce.", "Власні: radość. Абстрактні: Kraków, бо місто не видно на картці.")
        ],
        answer: "a",
        hint: "Свои имена с большой буквы. Чувства на парте не лежат.",
        hintu: "Власні імена з великої літери. Почуття не лежать на парті.",
        exr: "Warszawa, Odra, Kraków и Batman — свои названия. Pies и szkoła — общие. Радость, молчание и страх — в мысли. Стул, телефон и дерево видно. Kraków — своё имя и при этом город можно увидеть.",
        ex: "Warszawa, Odra, Kraków i Batman to nazwy własne. Pies i szkoła są pospolite. Radość, milczenie i lęk są abstrakcyjne.",
        exu: "Warszawa, Odra, Kraków і Batman — власні назви. Pies і szkoła загальні. Radość, milczenie і lęk абстрактні. Krzesło, telefon і drzewo конкретні. Kraków власний і конкретний: місто можна побачити.",
        mistakes: [
          miss("b", "Pies и szkoła — общие названия. Стул видно, значит он конкретный.", "Pies і szkoła загальні. Стілець видно, тож він конкретний."),
          miss("c", "Радость — не имя. Kraków — название города, и его можно увидеть.", "Радість не є ім’ям. Kraków — назва міста, і його можна побачити.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 8. Łyżka — ложка", ua: "Завд. 8. Łyżka" },
      formula: "та же схема, что у filiżanka",
      promptPlace: "before",
      prompt: {
        pl: [
          "Не переписывай filiżankę. Примени вопросы к новому слову.",
          "Widzę + -ę. Многих нет: -ek. Зов: -o."
        ],
        ua: "Не переписуй filiżankę. Застосуй питання до нового слова."
      },
      task: task({
        id: "s19-t-lyzka",
        q: "Który rząd jest poprawny?",
        qr: "По-русски: какой ряд форм верный для слова «ложка»?",
        qu: "Який ряд правильний?",
        options: [
          opt("a", "widzę łyżkę  ·  nie ma łyżek  ·  o! łyżko", "widzę łyżkę  ·  nie ma łyżek  ·  o! łyżko"),
          opt("b", "widzę łyżka  ·  nie ma łyżki  ·  o! łyżka", "widzę łyżka  ·  nie ma łyżki  ·  o! łyżka"),
          opt("c", "widzę łyżką  ·  nie ma łyżkom  ·  o! łyżce", "widzę łyżką  ·  nie ma łyżkom  ·  o! łyżce")
        ],
        answer: "a",
        hint: "Вижу + -ę. Многих нет: -ek. Зов: -o.",
        hintu: "Widzę + -ę. Багатьох: -ek. Клик: -o.",
        exr: "Вижу ложку — винительный. Нет ложек — родительный множественного, с буквой e. О, ложка! — звательный.",
        ex: "Widzę łyżkę to biernik. Nie ma łyżek to dopełniacz liczby mnogiej, z literą e. O! łyżko to wołacz.",
        exu: "Widzę łyżkę — знахідний. Nie ma łyżek — родовий множини, з літерою e. O! łyżko — кличний.",
        mistakes: [
          miss("b", "После widzę оставлена форма из словаря. Хвост должен измениться.", "Після widzę лишаєш словникову форму. Хвіст має змінитися."),
          miss("c", "Łyżką — творительный. Łyżkom — дательный множественного. Звательный единственного кончается на -o.", "Łyżką — орудний. Łyżkom — давальний множини. Кличний однини закінчується на -o.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 9. Буквы — пара или память", ua: "Завд. 9. Літери" },
      formula: "wymienne albo niewymienne",
      promptPlace: "before",
      prompt: {
        pl: [
          "Либо даёшь пару и слово ponieważ, либо говоришь, что пары нет.",
          "Слух не выбирает букву: rz и ż звучат одинаково."
        ],
        ua: "Або даєш пару і слово ponieważ, або кажеш, що пари немає."
      },
      task: task({
        id: "s19-t-litery",
        q: "Które uzasadnienie jest poprawne?",
        qr: "По-русски: какое обоснование буквы верное?",
        qu: "Яке обґрунтування правильне?",
        options: [
          opt("a", "Rzeka to rz niewymienne, bo nie ma pary z r. Orzeł piszemy przez rz, ponieważ orzeł – orli.", "Rzeka — rz незмінне, бо немає пари з r. Orzeł пишемо через rz, бо orzeł – orli."),
          opt("b", "Rzeka i orzeł są niewymienne, bo rz słychać tak samo.", "Rzeka і orzeł незмінні, бо rz чути однаково."),
          opt("c", "H w „wahać się” piszemy, bo tak ładniej wygląda.", "H у «wahać się» пишемо, бо так гарніше.")
        ],
        answer: "a",
        hint: "Ищи orli и waga.",
        hintu: "Шукай orli і waga.",
        exr: "У rzeka пары нет. У orzeł есть orli, значит rz с заменой. H в wahać się обосновывает пара waga: h меняется на g.",
        ex: "Rzeka nie ma pary. Orzeł ma orli, więc rz jest wymienne. H w wahać się uzasadnia para waga: h wymienia się na g.",
        exu: "Rzeka не має пари. Orzeł має orli, тож rz змінне. H у wahać się обґрунтовує пара waga: h змінюється на g.",
        mistakes: [
          miss("b", "Одинаковый звук не решает. У orzeł есть пара orli.", "Однакове звучання не вирішує. Orzeł має пару orli."),
          miss("c", "Красивый вид буквы — не обоснование. Нужна пара.", "Вигляд літери не є обґрунтуванням. Потрібна пара.")
        ]
      })
    },
    {
      type: "check",
      heading: { pl: "Задание 10. Синоним и страница", ua: "Завд. 10. Синонім і сторінка" },
      formula: "bliskoznaczny  ·  s. 52",
      promptPlace: "before",
      prompt: {
        pl: [
          "Два последних различения: близкое значение или противоположность, и номер страницы в учебнике.",
          "Plucha — слякоть, дождь. Skwar — жара. Страница 52 — конкретные и абстрактные."
        ],
        ua: "Близьке значення чи протилежність, і номер сторінки."
      },
      task: task({
        id: "s19-t-koniec",
        q: "Które zdanie jest prawdziwe?",
        qr: "По-русски: какое предложение верное?",
        qu: "Яке речення правдиве?",
        options: [
          opt("a", "Plucha i skwar są przeciwstawne. Rzeczowniki konkretne i abstrakcyjne są na stronie 52.", "Plucha і skwar протилежні. Конкретні і абстрактні іменники на сторінці 52."),
          opt("b", "Plucha i skwar są synonimami. Konkretne są na stronie 63.", "Plucha і skwar — синоніми. Конкретні на сторінці 63."),
          opt("c", "Powrót jest synonimem podróży. Temat i końcówka są na stronie 51.", "Powrót — синонім подорожі. Основа і закінчення на сторінці 51.")
        ],
        answer: "a",
        hint: "Plucha — дождь, skwar — жара. Страница 52 — чувства и вещи.",
        hintu: "Plucha — дощ, skwar — спека. Сторінка 52 — органи чуття.",
        exr: "Plucha и skwar — противоположность. Страница 51: kto? co? и свои имена. Страница 52: конкретные и абстрактные. Страницы 60–61: падежи. Страница 62: основа и окончание. Страница 63: nie с существительным. Powrót не синоним поездки.",
        ex: "Plucha i skwar to przeciwieństwo. Strona 52: konkretne i abstrakcyjne. Powrót nie jest synonimem podróży.",
        exu: "Plucha і skwar — протилежність. Сторінка 51: kto? co? і власні та загальні. Сторінка 52: конкретні і абстрактні. Сторінки 60–61: відмінки. Сторінка 62: основа і закінчення. Сторінка 63: nie з іменником. Powrót не є синонімом подорожі.",
        mistakes: [
          miss("b", "Дождь и жара не значат почти одно и то же. Страница 63 — про nie.", "Дощ і спека не означають майже те саме. Сторінка 63 — про nie."),
          miss("c", "Powrót — другое направление. Основа и окончание на странице 62.", "Powrót — інший напрямок. Основа і закінчення на сторінці 62.")
        ]
      })
    },
    {
      type: "summary",
      heading: { pl: "Reguły do zeszytu — правила наизусть", ua: "Правила в зошит" },
      rule: rule([
        "*Podmiot liryczny* mówi „ja”.",
        "*Adresat* to ten, do kogo jest zwrot.",
        "*Autor* napisał wiersz.",
        "*Epitet* to określenie razem z rzeczownikiem.",
        "*Apostrofa* to bezpośrednie zwrócenie się.",
        "*Nastrój* to uczucie. *Rym* sprawdzam końcami wersów.",
        "*Rzeczownik* odpowiada na kto? co?",
        "*Własny* — wielka litera. *Pospolity* — mała litera.",
        "*Konkretny* poznaję zmysłami. *Abstrakcyjny* to pojęcie albo uczucie.",
        "*Przypadek* poznaję po pytaniu. *Rodzaj:* ten, ta, to.",
        "*Końcówka* się zmienia. *Temat* zostaje. *Końcówka zerowa* to ø.",
        "*Nie* z rzeczownikiem: łącznie w nazwie, rozdzielnie w „To nie…”.",
        "*ó* → o, *rz* → r, *ż* → g, *ch* → sz. Bez pary z r — *rz niewymienne*.",
        "*Synonimy* mają podobne znaczenie. Wyraz przeciwny synonimem nie jest."
      ]),
      promptPlace: "before",
      prompt: {
        pl: [
          "Это те же жёлтые рамки с урока. Читай вслух по-польски."
        ],
        ua: "Це ті самі жовті рамки. Читай уголос польською."
      },
      task: task({
        id: "s19-koniec",
        q: "Które zdanie możesz powiedzieć nauczycielowi?",
        qr: "По-русски: какую фразу можно сказать учителю?",
        qu: "Яке речення можеш сказати вчителю?",
        options: [
          opt("a", "Adresat to ten, do kogo zwraca się podmiot liryczny.", "Adresat — той, до кого звертається podmiot liryczny."),
          opt("b", "Adresat to autor wiersza.", "Adresat — це автор вірша."),
          opt("c", "Podmiot liryczny to zawsze księżyc albo deszcz.", "Podmiot liryczny — це завжди місяць або дощ.")
        ],
        answer: "a",
        hint: "Три роли в каждом стихе одни и те же.",
        hintu: "Три ролі лишаються ті самі в кожному вірші.",
        exr: "Адресат слышит обращение. Автор писал текст. Луна или дождь бывают адресатом, когда к ним обращаются, а не голосом, который говорит «я».",
        ex: "Adresat słucha zwrotu. Autor pisał tekst.",
        exu: "Адресат чує звертання. Автор писав текст. Місяць або дощ бувають адресатом, коли хтось до них говорить, а не голосом, який каже «я».",
        mistakes: [
          miss("b", "Это ошибка с карточки. Автор и адресат — разные лица.", "Це плутанина з картки. Автор і адресат різні."),
          miss("c", "Луна и дождь в этих стихах слушают. Голос говорит «siedzę» и «czuję».", "Місяць і дощ у цих віршах слухають. Голос каже «siedzę» і «czuję».")
        ]
      })
    }
  ]
};
