function emT35(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T35 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT35(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T35 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 68  ·  Lekcja 35  ·  planeta, mapa, prezenter",
    promptPlace: "before",
    prompt: {
      pl: "Studio znasz z lekcji 34 (komunikat, czynności, czas przyszły, krótka prognoza na Ziemi). Dziś *nowe* s. 68: projekt — planeta, ramka czasowników, tygodniowa prognoza, mapa, rola prezentera, ocena kolegów. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Студію знаєш з уроку 34 (комунікат, дії, майбутній час, короткий прогноз на Землі). Сьогодні *нове* с. 68: проєкт — планета, рамка дієслів, тижневий прогноз, мапа, роль ведучого, оцінка однокласників. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "powiem, *co musi zawierać* komunikat prognozy;", ua: "скажу, *що має містити* комунікат прогнозу;" },
      { pl: "wymyślę *planetę* i warunki inne niż na Ziemi;", ua: "вигадаю *планету* і умови інші, ніж на Землі;" },
      { pl: "użyję słownictwa z ramki (*zapowiadać się, ustąpić, rozpogodzić się*…);", ua: "використаю лексику з рамки (*zapowiadać się, ustąpić, rozpogodzić się*…);" },
      { pl: "napiszę prognozę i zaplanuję *mapę* ze symbolami;", ua: "напишу прогноз і заплану́ю *мапу* із символами;" },
      { pl: "wcielę się w prezentera i wiem, jak *ocenić* występ kolegów.", ua: "втілюсь у ведучого і знаю, як *оцінити* виступ однокласників." }
    ],
    task: {
      id: "t35-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opracować prognozę na wymyślonej planecie (nie kopia Ziemi).", ua: "Опрацювати прогноз на вигаданій планеті (не копія Землі)." } },
        { id: "b", label: { pl: "Użyć słownictwa z ramki i zaplanować mapę ze symbolami.", ua: "Ужити лексику з рамки і запланувати мапу із символами." } },
        { id: "c", label: { pl: "Tylko na nowo wypisać czynności prezentera z lekcji 34 — i nic więcej.", ua: "Лише знову виписати дії ведучого з уроку 34 — і більше нічого." } },
        { id: "d", label: { pl: "Wiedzieć, jak wygłosić tekst w roli prezentera i ocenić kolegów.", ua: "Знати, як виголосити текст у ролі ведучого і оцінити однокласників." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czynności prezentera były wczoraj. Co jest na s. 68: planeta, ramka, mapa, prezentacja?",
        ua: "Дії ведучого були вчора. Що на с. 68: планета, рамка, мапа, презентація?"
      },
      explanation: {
        pl: "Dziś: planeta, ramka, mapa, rola, ocena. Listę czynności wolno przypomnieć, ale to nie jedyny cel.",
        ua: "Сьогодні: планета, рамка, мапа, роль, оцінка. Список дій можна згадати, але це не єдина мета."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · dziura w komunikacie", ua: "Розминка · дірка в комунікаті" },
    formula: "powtórka  ·  inne zadanie niż lekcja 34",
    promptPlace: "before",
    prompt: {
      pl: "To *nie* drugi opis studia. Kamer nie rysujemy od nowa. Dostajesz *ułomny* komunikat — i mówisz, *czego brakuje*. Potem nowe: planeta.",
      ua: "Це *не* другий опис студії. Камери не малюємо знову. Маєш *уламковий* комунікат — і кажеш, *чого бракує*. Потім нове: планета."
    },
    text: {
      pl: [
        "«Na północy deszcz. Koniec.»",
        "Wczoraj: komunikat ma powitanie, regiony, temperaturę / wiatr, jutro, życzenie."
      ],
      ua: [
        "«На півночі дощ. Кінець.»",
        "Учора: комунікат має привітання, регіони, температуру / вітер, завтра, побажання."
      ]
    },
    task: {
      id: "t35-s02-rozgrzewka",
      type: "single-choice",
      question: {
        pl: "Czego w tym ułomnym komunikacie BRAKUJE najbardziej, jeśli ma brzmieć jak prognoza ze studia?",
        ua: "Чого в цьому уламковому комунікаті НАЙБІЛЬШЕ бракує, якщо він має звучати як прогноз зі студії?"
      },
      options: [
        { id: "a", label: { pl: "Powitania, temperatury albo wiatru, jutra i życzenia.", ua: "Привітання, температури або вітру, завтра і побажання." } },
        { id: "b", label: { pl: "Tylko recytacji *Dwa wiatry*.", ua: "Лише декламації *Dwa wiatry*." } },
        { id: "c", label: { pl: "Nic — jedno zdanie o deszczu wystarczy jako cały program.", ua: "Нічого — одного речення про дощ досить як ціла програма." } }
      ],
      answer: "a",
      hint: {
        pl: "Porównaj z modelem z lekcji 34: Dzień dobry… Życzę miłego dnia.",
        ua: "Порівняй із моделлю з уроку 34: Dzień dobry… Życzę miłego dnia."
      },
      explanation: {
        pl: "Brakuje ram komunikatu. Jedno «deszcz» to za mało. Tuwim nie należy do prognozy. Dziś idziemy na *planetę*.",
        ua: "Бракує рамки комунікату. Одного «дощ» замало. Тувім не належить до прогнозу. Сьогодні йдемо на *планету*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Co zawiera komunikat", ua: "Що містить комунікат" },
    formula: "s. 68  ·  zad. 1a",
    promptPlace: "before",
    prompt: {
      pl: "TO NASZ PROJEKT. Najpierw: co *powinien zawierać* komunikat? Wiedza z zadania wstępnego (lekcja 34) — dziś składamy z niej listę do planu tygodnia.",
      ua: "TO NASZ PROJEKT. Спочатку: що *має містити* комунікат? Знання зі вступного (урок 34) — сьогодні складаємо з них список для плану тижня."
    },
    items: [
      { pl: "Kto mówi i do kogo: prezenter → widzowie (*dzień dobry*).", ua: "Хто каже і до кого: ведучий → глядачі (*dzień dobry*)." },
      { pl: "*Gdzie* (planeta / region) i *kiedy* (dziś, jutro, tydzień).", ua: "*Де* (планета / регіон) і *коли* (сьогодні, завтра, тиждень)." },
      { pl: "Pogoda, temperatura, opady, wiatr, zachmurzenie.", ua: "Погода, температура, опади, вітер, хмарність." },
      { pl: "Czas przyszły + życzenie na końcu.", ua: "Майбутній час + побажання наприкінці." }
    ],
    task: {
      id: "t35-s03-zawiera",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO powinien zawierać komunikat? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО має містити комунікат? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Miejsce, czas (dziś/jutro) i dane: temp., opady, wiatr albo zachmurzenie.", ua: "Місце, час (сьогодні/завтра) і дані: темп., опади, вітер або хмарність." } },
        { id: "b", label: { pl: "Powitanie i (zwykle) życzenie.", ua: "Привітання і (зазвичай) побажання." } },
        { id: "c", label: { pl: "Odmianę *piasek* przez przypadki.", ua: "Відміну *piasek* за відмінками." } },
        { id: "d", label: { pl: "Tylko rysunek kamery, bez żadnych słów.", ua: "Лише малюнок камери, без жодних слів." } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Komunikat to słowa do widza. Czy przypadki są pogodą?",
        ua: "Комунікат — слова до глядача. Чи відмінки — це погода?"
      },
      explanation: {
        pl: "Miejsce, czas, dane, powitanie. Piasek i sama kamera bez tekstu odpadają.",
        ua: "Місце, час, дані, привітання. Piasek і сама камера без тексту відпадають."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Nazwa planety", ua: "Назва планети" },
    formula: "s. 68  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Wymyślcie nazwę planety oraz warunki. Mogą być *zupełnie inne* niż na Ziemi. W zeszycie: nazwa + 3 warunki. Wzór EduMost — nie jedyna dobra planeta.",
      ua: "Вигадайте назву планети і умови. Можуть бути *зовсім інші*, ніж на Землі. У зошиті: назва + 3 умови. Зразок EduMost — не єдина добра планета."
    },
    visual: vizGhT35("t35-planeta.png", {
      prompt: "Prezenter przy mapie planety.",
      alt: { pl: "Prezenter pokazuje meteorologiczną mapę wymyślonej planety.", ua: "Ведучий показує метеорологічну мапу вигаданої планети." }
    }),
    items: [
      { pl: "WZÓR: planeta *Błękitna Mgła*. Dwa słońca. Deszcz o zapachu malin. Wiatr wieje *w pionie*.", ua: "ЗРАЗОК: планета *Błękitna Mgła*. Два сонця. Дощ із запахом малини. Вітер віє *вертикально*." },
      { pl: "Warunki nie mogą być kopią «u nas 18 stopni i chmury» — wtedy to nadal Ziemia.", ua: "Умови не можуть бути копією «у нас 18 градусів і хмари» — тоді це досі Земля." }
    ],
    task: {
      id: "t35-s04-planeta",
      type: "true-false",
      question: {
        pl: "Czy nazwa «Polska» i warunki «deszcz jak w Gdańsku, 12 stopni» spełniają polecenie *zupełnie inne niż na Ziemi*?",
        ua: "Чи назва «Polska» і умови «дощ як у Гданську, 12 градусів» виконують вимогу *зовсім інші, ніж на Землі*?"
      },
      answer: false,
      hint: {
        pl: "Podręcznik: mogą być zupełnie inne. Czy Gdańsk jest inną planetą?",
        ua: "Підручник: можуть бути зовсім інші. Чи Гданськ — інша планета?"
      },
      explanation: {
        pl: "Nie. To kopia Ziemi. Wymyśl nazwę i choć jedno zjawisko, którego *nie ma* na Ziemi. Mapę Polski zostaw na koniec lekcji (region kraju).",
        ua: "Ні. Це копія Землі. Вигадай назву і хоч одне явище, якого *немає* на Землі. Мапу Польщі залиш на кінець уроку (регіон країни)."
      }
    }
  },
  {
    type: "vocabulary",
    heading: { pl: "Ramka czasowników", ua: "Рамка дієслів" },
    promptPlace: "before",
    prompt: {
      pl: "Zad. 1c: sformułowania charakterystyczne. Spisz te, które przydadzą się na prezentacji. Ramka s. 68 — *nie* glosy Tuwima.",
      ua: "Завд. 1c: характерні формулювання. Спиши ті, що знадобляться на презентації. Рамка с. 68 — *не* глоси Тувіма."
    },
    rows: [
      { pl: "przewidywać / zapowiadać się / spodziewać się — co będzie", ua: "przewidywać / zapowiadać się / spodziewać się — що буде" },
      { pl: "wiać, padać, przygrzewać — co robi aura", ua: "wiać, padać, przygrzewać — що робить погода" },
      { pl: "słabnąć, nasilać się, ustąpić, ustać — zmiana siły", ua: "słabnąć, nasilać się, ustąpić, ustać — зміна сили" },
      { pl: "rozpogodzić się / zachmurzyć się — niebo", ua: "rozpogodzić się / zachmurzyć się — небо" },
      { pl: "trwać, pojawić się, przejść, zmienić się — przebieg", ua: "trwać, pojawić się, przejść, zmienić się — перебіг" },
      { pl: "życzyć — koniec komunikatu", ua: "życzyć — кінець комунікату" }
    ],
    task: {
      id: "t35-s05-ramka",
      type: "single-choice",
      question: {
        pl: "Który zestaw NA PEWNO pochodzi z ramki prognozy (s. 68)?",
        ua: "Який набір НАПЕВНО з рамки прогнозу (с. 68)?"
      },
      options: [
        { id: "a", label: { pl: "zapowiadać się, ustąpić, rozpogodzić się, życzyć", ua: "zapowiadać się, ustąpić, rozpogodzić się, życzyć" } },
        { id: "b", label: { pl: "kamrat, śmiga, pal je licho", ua: "kamrat, śmiga, pal je licho" } },
        { id: "c", label: { pl: "burza, kocø, oboczność", ua: "burza, kocø, oboczność" } }
      ],
      answer: "a",
      hint: {
        pl: "Pomarańczowa ramka na s. 68. Czy tam jest kamrat?",
        ua: "Помаранчева рамка на с. 68. Чи там kamrat?"
      },
      explanation: {
        pl: "Ramka pogodowa: zapowiadać się, ustąpić, rozpogodzić się, życzyć. Tuwim i temat rzeczownika — inne lekcje.",
        ua: "Рамка погоди: zapowiadać się, ustąpić, rozpogodzić się, życzyć. Тувім і основа іменника — інші уроки."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Pogoda · temperatura · opady", ua: "Погода · температура · опади" },
    formula: "s. 68  ·  pogoda: ?  temperatura: ?",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik każe wypełnić pola: *pogoda, temperatura, opady, wiatr, zachmurzenie*. Na planecie liczby mogą być dziwne — byleś konsekwentny w komunikacie.",
      ua: "Підручник просить заповнити поля: *pogoda, temperatura, opady, wiatr, zachmurzenie*. На планеті числа можуть бути дивні — аби в комунікаті була послідовність."
    },
    items: [
      { pl: "Pogoda: np. *malinowa mżawka, dwa słońca*.", ua: "Погода: напр. *малинова мряка, два сонця*." },
      { pl: "Temperatura: liczba + skala (możesz wymyślić *stopnie mgły*).", ua: "Температура: число + шкала (можеш вигадати *ступені імли*)." },
      { pl: "Opady / wiatr / zachmurzenie: po jednym zdaniu w przyszłym czasie.", ua: "Опади / вітер / хмарність: по одному реченню в майбутньому часі." }
    ],
    task: {
      id: "t35-s06-pola",
      type: "multiple-choice",
      question: {
        pl: "Które pola NA PEWNO są w ramce podręcznika? Zaznacz wszystkie pewne.",
        ua: "Які поля НАПЕВНО є в рамці підручника? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "pogoda, temperatura, opady", ua: "pogoda, temperatura, opady" } },
        { id: "b", label: { pl: "wiatr, zachmurzenie", ua: "wiatr, zachmurzenie" } },
        { id: "c", label: { pl: "dopełniacz rzeczownika piasek", ua: "родовий відмінок іменника piasek" } },
        { id: "d", label: { pl: "przysłowie *Kto z kim przestaje…*", ua: "прислів’я *Kto z kim przestaje…*" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Niebieskie pismo na s. 68: pogoda, temperatura, opady, wiatr, zachmurzenie.",
        ua: "Блакитний текст на с. 68: pogoda, temperatura, opady, wiatr, zachmurzenie."
      },
      explanation: {
        pl: "Pięć pól pogodowych. Piasek i przysłowie — inne lekcje.",
        ua: "П’ять погодних полів. Piasek і прислів’я — інші уроки."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Piszemy prognozę", ua: "Пишемо прогноз" },
    formula: "s. 68  ·  zad. 1d",
    promptPlace: "before",
    prompt: {
      pl: "Napiszcie prognozę na *jeden tydzień* (albo 3–5 dni, jeśli tydzień za długi na tę godzinę). Wykorzystajcie ramkę. Wolno wymyślić zjawiska, których nie ma na Ziemi. W zeszycie. Tu: co musi być w tekście.",
      ua: "Напишіть прогноз на *один тиждень* (або 3–5 днів, якщо тиждень задовгий на цю годину). Використайте рамку. Можна вигадати явища, яких немає на Землі. У зошиті. Тут: що має бути в тексті."
    },
    items: [
      { pl: "Tytuł: *Prognoza pogody dla planety … na tydzień*.", ua: "Заголовок: *Prognoza pogody dla planety … na tydzień*." },
      { pl: "Minimum 4 czasowniki z ramki (np. *zapowiada się, będzie wiać, ustąpi, życzę*).", ua: "Мінімум 4 дієслова з рамки (напр. *zapowiada się, będzie wiać, ustąpi, życzę*)." },
      { pl: "Choć jedno zjawisko *nieziemskie*.", ua: "Хоч одне явище *неземне*." }
    ],
    task: {
      id: "t35-s07-tekst",
      type: "single-choice",
      question: {
        pl: "Który tekst spełnia polecenie 1d?",
        ua: "Який текст виконує завдання 1d?"
      },
      options: [
        { id: "a", label: { pl: "«Na Błękitnej Mgle zapowiada się malinowy deszcz. Wiatr będzie wiać w pionie. W piątek ustąpi. Życzę jasnych dwóch słońc.»", ua: "«На Błękitnej Mgle zapowiada się малиновий дощ. Вітер będzie wiać вертикально. У п’ятницю ustąpi. Życzę яскравих двох сонць.»" } },
        { id: "b", label: { pl: "«Piasek, piasku, piaskowi.»", ua: "«Piasek, piasku, piaskowi.»" } },
        { id: "c", label: { pl: "«Piknął kozła, płackiem spadł.»", ua: "«Piknął kozła, płackiem spadł.»" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj nazwy planety, ramki (*zapowiada się, wiać, ustąpi, życzyć*) i dziwnego zjawiska.",
        ua: "Шукай назву планети, рамку (*zapowiada się, wiać, ustąpi, życzyć*) і дивне явище."
      },
      explanation: {
        pl: "Wersja a ma planetę, ramkę i nieziemski deszcz. Piasek i Tuwim to inne tematy.",
        ua: "Варіант a має планету, рамку і неземний дощ. Piasek і Тувім — інші теми."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Mapa meteorologiczna", ua: "Метеорологічна мапа" },
    formula: "s. 68  ·  zad. 1e",
    promptPlace: "before",
    prompt: {
      pl: "Na dużym arkuszu: plansza z mapą. Miejsce charakterystyczne + *symbole* zapowiadanej pogody. W zeszycie szkic. Tu sprawdzamy, co mapa *musi* mieć.",
      ua: "На великому аркуші: планшет із мапою. Характерне місце + *символи* прогнозованої погоди. У зошиті ескіз. Тут перевіряємо, що мапа *має* мати."
    },
    visual: vizGhT35("t35-symbole.png", {
      prompt: "Symbole pogody na mapę.",
      alt: { pl: "Symbole: słońce, chmura, deszcz, śnieg, wiatr, temperatura.", ua: "Символи: сонце, хмара, дощ, сніг, вітер, температура." }
    }),
    items: [
      { pl: "Obrys planety / lądów (nie pusta kartka).", ua: "Контур планети / суходолів (не порожній аркуш)." },
      { pl: "Legenda: co znaczy słońce, kropla, strzałka wiatru.", ua: "Легенда: що означає сонце, крапля, стрілка вітру." },
      { pl: "Różne obszary = różna pogoda (jak 23 / 20 / 25 na rysunku w książce — u ciebie twoje liczby).", ua: "Різні регіони = різна погода (як 23 / 20 / 25 на малюнку в книжці — у тебе свої числа)." }
    ],
    task: {
      id: "t35-s08-mapa",
      type: "true-false",
      question: {
        pl: "Czy mapa bez żadnego symbolu pogody i bez legendy spełnia zadanie 1e?",
        ua: "Чи мапа без жодного символу погоди і без легенди виконує завдання 1e?"
      },
      answer: false,
      hint: {
        pl: "Podręcznik: charakterystyczne miejsca + odpowiednie symbole.",
        ua: "Підручник: характерні місця + відповідні символи."
      },
      explanation: {
        pl: "Nie. Mapa ma pokazywać pogodę znakami, nie tylko ładny kontynent.",
        ua: "Ні. Мапа має показувати погоду знаками, не лише гарний континент."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Rola prezentera", ua: "Роль ведучого" },
    formula: "s. 68  ·  zad. 1f",
    promptPlace: "before",
    prompt: {
      pl: "Zaprezentujcie w klasie. Program: *wcielasz się w rolę prezentera*. Głos jak wczoraj (spokojny, kamera, mapa) — ale tekst jest *z planety*. Nagraj telefonem, jeśli nie ma występu na żywo.",
      ua: "Презентуйте в класі. Програма: *втілюєшся в роль ведучого*. Голос як учора (спокійний, камера, мапа) — але текст *із планети*. Запиши телефоном, якщо немає виступу наживо."
    },
    items: [
      { pl: "Stój przy mapie. Wskaż choć dwa obszary.", ua: "Стій біля мапи. Вкажи хоч два регіони." },
      { pl: "Czas przyszły z ramki. Nie czytaj przypadków.", ua: "Майбутній час із рамки. Не читай відмінки." },
      { pl: "Zakończ życzeniem (*Życzę…*).", ua: "Заверши побажанням (*Życzę…*)." }
    ],
    task: {
      id: "t35-s09-rola",
      type: "single-choice",
      question: {
        pl: "Co robi osoba w *roli prezentera* podczas tej prezentacji?",
        ua: "Що робить особа в *ролі ведучого* під час цієї презентації?"
      },
      options: [
        { id: "a", label: { pl: "Mówi do «widzów», pokazuje mapę planety, używa ramki, życzy na końcu.", ua: "Говорить до «глядачів», показує мапу планети, використовує рамку, бажає наприкінці." } },
        { id: "b", label: { pl: "Tylko odczytuje tabelę *piasek* szeptem.", ua: "Лише читає таблицю *piasek* пошепки." } },
        { id: "c", label: { pl: "Recytuje *Dwa wiatry* zamiast prognozy.", ua: "Декламує *Dwa wiatry* замість прогнозу." } }
      ],
      answer: "a",
      hint: {
        pl: "To nadal studio — tylko planeta inna. Co robił prezenter wczoraj?",
        ua: "Це досі студія — лише планета інша. Що робив ведучий учора?"
      },
      explanation: {
        pl: "Rola = komunikat + mapa + ramka. Nie przypadki i nie Tuwim.",
        ua: "Роль = комунікат + мапа + рамка. Не відмінки і не Тувім."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Oceniamy kolegów", ua: "Оцінюємо однокласників" },
    formula: "program  ·  efekty pracy",
    promptPlace: "before",
    prompt: {
      pl: "Program na wyższą ocenę: *oceniasz efekty pracy koleżanek i kolegów*. W zeszycie 3 punkty: plus, minus, rada. Nie obrażamy — jak recenzja występu, nie kłótnia.",
      ua: "Програма на вищу оцінку: *оцінюєш ефекти роботи однокласниць і однокласників*. У зошиті 3 пункти: плюс, мінус, порада. Не ображаємо — як рецензія виступу, не сварка."
    },
    items: [
      { pl: "Czy była planeta *inna niż Ziemia*?", ua: "Чи була планета *інша, ніж Земля*?" },
      { pl: "Czy padły czasowniki z ramki i czas przyszły?", ua: "Чи пролунали дієслова з рамки і майбутній час?" },
      { pl: "Czy mapa miała symbole? Czy głos był spokojny?", ua: "Чи мапа мала символи? Чи голос був спокійний?" }
    ],
    task: {
      id: "t35-s10-ocena",
      type: "true-false",
      question: {
        pl: "Czy rzetelna ocena kolegów to: sprawdzić planetę, ramkę, mapę i głos — a nie napisać samo «słabo» bez powodu?",
        ua: "Чи чесна оцінка однокласників це: перевірити планету, рамку, мапу і голос — а не написати лише «погано» без причини?"
      },
      answer: true,
      hint: {
        pl: "Ocena = kryteria z projektu. Czy «słabo» bez przykładu jest kryterium?",
        ua: "Оцінка = критерії з проєкту. Чи «погано» без прикладу є критерієм?"
      },
      explanation: {
        pl: "Tak. Plus / minus / rada oparte na liście: planeta, ramka, mapa, prezenter.",
        ua: "Так. Плюс / мінус / порада на основі списку: планета, рамка, мапа, ведучий."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Region kraju · karta", ua: "Регіон країни · картка" },
    formula: "s. 68  ·  mapa Polski  ·  lekcja 35",
    promptPlace: "before",
    prompt: {
      pl: "Wyższy próg programu: mapa pogodowa *wybranego regionu kraju na kilka dni* (np. Pomorze, Tatry). To *dodatek* obok planety — nie zamiast projektu. W zeszycie 3 dni + 3 symbole. To zamyka tematy 34–35. Dalej w książce: przymiotnik, s. 69.",
      ua: "Вищий поріг програми: мапа погоди *обраного регіону країни на кілька днів* (напр. Помор’я, Татри). Це *додаток* поруч із планетою — не замість проєкту. У зошиті 3 дні + 3 символи. Це закриває теми 34–35. Далі в книжці: прикметник, с. 69."
    },
    items: [
      { pl: "34: studio, komunikat, czynności, czas przyszły, krótka prognoza na Ziemi.", ua: "34: студія, комунікат, дії, майбутній час, короткий прогноз на Землі." },
      { pl: "35: planeta, ramka, tydzień, mapa, prezenter, ocena.", ua: "35: планета, рамка, тиждень, мапа, ведучий, оцінка." },
      { pl: "Opcja: 3 dni dla *jednego* regionu Polski (nie cały atlas).", ua: "Опція: 3 дні для *одного* регіону Польщі (не весь атлас)." }
    ],
    task: {
      id: "t35-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Mam planetę, tekst z ramki, plan mapy i wiem, jak zagrać prezentera.", ua: "Маю планету, текст із рамки, план мапи і знаю, як зіграти ведучого." } },
        { id: "b", label: { pl: "Tylko ponownie opisałem kamery ze s. 67 — bez planety.", ua: "Лише знову описав камери зі с. 67 — без планети." } },
        { id: "c", label: { pl: "Odmieniłem przymiotnik przez przypadki (to s. 69).", ua: "Відмінив прикметник за відмінками (це с. 69)." } }
      ],
      answer: "a",
      hint: {
        pl: "Przymiotnik = tematy 36–37. Kamery bez projektu = lekcja 34.",
        ua: "Прикметник = теми 36–37. Камери без проєкту = урок 34."
      },
      explanation: {
        pl: "Lekcja 35 = projekt planety + mapa + rola. Studio bez planety było wczoraj. Przymiotnik — 36.",
        ua: "Урок 35 = проєкт планети + мапа + роль. Студія без планети була вчора. Прикметник — 36."
      }
    }
  }
] };
