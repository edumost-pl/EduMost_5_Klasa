/* 5 października 2026. Ekran dla mamy.
   Misja Kirilla: Dop_zadania/zaszyfrowana-kapsula. */
window.EduMostMissions = window.EduMostMissions || {};
window.EduMostMissions["2026-10-05"] = {
  calendarMark: "місія",
  openPath: "zaszyfrowana-kapsula/index.html",
  childNote: "Цю місію відкриває мама.",
  kicker: "Plan dla mamy",
  dateLabel: "5 października",
  title: "Zaszyfrowana kapsuła — tajemnica podróży w czasie",
  banner: "Этот экран читаешь ты до занятия. Кирилл его не открывает. Его игра — кнопка внизу. Ответы ниже тоже только для тебя.",
  leadPl: "Dzisiaj nie robimy czterech osobnych lekcji. Jedna uszkodzona wiadomość składa się z matematyki, rzeczownika, trasy po Londynie i archiwum starożytnych cywilizacji.",
  leadRu: "Пластики, физкультуры и психолога в эту игру не зашиваем. Они остаются отдельными частями понедельника.",
  solution: {
    title: "Rozwiązanie dla ciebie",
    ru: "Кирилл собирает его сам в конце. Не произноси целиком, пока капсула не открыта.",
    lines: [
      "Кто: podróżnik. Это существительное, которое он восстанавливает в порванном документе.",
      "Ключ: 9022. Это верный результат 347 × 26. Замок принимает только его, потому что компьютер показывал умножение с ошибкой. 936 : 24 = 39 остаётся внутри игры «Znajdź błąd» и ключом капсулы не является.",
      "Откуда сигнал: Londyn. Маршрут Салли: красный двухэтажный автобус, потом bike tour, кабельная дорога, вертолёт она пропускает, финал — cruise по Темзе.",
      "Куда печать: starożytny Egipt, потому что на печати иероглифы. Клинопись — Месопотамия, один Бог — Израиль, долина Инда — Индия. Египет здесь вывод из архива, не единственный вопрос дня."
    ]
  },
  goal: {
    title: "1. Cel dnia",
    ru: "Четыре школьные темы становятся частями одного расследования. Смотрим, думает ли он и хочет ли идти дальше. Школьную оценку в разговор не берём. Контрольная по математике 7.10 рядом по типу записи, но сегодня это не тренировка «на оценку».",
    groups: [
      { name: "Matematyka", items: ["algorytm mnożenia pisemnego", "algorytm dzielenia pisemnego", "przeniesienie i rzędy", "znalezienie własnego błędu", "wyjaśnienie sposobu"] },
      { name: "Język polski — rzeczownik", items: ["rozpoznanie rzeczownika", "rodzaj męski, żeński, nijaki", "odmiana: kto? → mianownik", "nie z rzeczownikiem osobno", "nieprzyjaciel jako jeden wyraz"] },
      { name: "English — Round we go", items: ["means of transport", "get around, sights, check out", "cruise, environmentally friendly", "krótki tekst o London", "znak Thames cruise"] },
      { name: "Historia — podsumowanie działu I", items: ["epoki kamienia, brązu i żelaza", "rewolucja neolityczna", "Egipt, Mezopotamia, Izrael, Indie", "pismo, Hammurabi", "politeizm i monoteizm"] }
    ]
  },
  start: {
    title: "2. Jak zacząć",
    ru: "Один вход по настроению. Ниже то, что говоришь ты.",
    items: [
      {
        mood: "Если он спокоен",
        skip: "Chodź, musimy się pouczyć.",
        pl: "Dzisiaj mam dla ciebie coś dziwnego. Znalazłam uszkodzoną wiadomość. Chcesz spróbować ją odczytać?",
        gloss: "Сегодня у меня для тебя кое-что странное. Я нашла повреждённое сообщение. Хочешь попробовать его прочитать?"
      },
      {
        mood: "Если ему любопытно",
        pl: "Ktoś ruszył w podróż i zostawił kapsułę. Nie wiemy, kim jest. Sprawdzimy?",
        gloss: "Кто-то отправился в путь и оставил капсулу. Мы не знаем, кто это. Проверим?"
      },
      {
        mood: "Если он устал",
        pl: "Otwieramy tylko zamek. Jedno obliczenie. Jeśli nie wciągnie — stop.",
        gloss: "Открываем только замок. Одно вычисление. Если не зацепит — стоп."
      }
    ]
  },
  coach: {
    title: "3. Jak podtrzymywać zainteresowanie",
    ru: "Короткие фразы на время самой игры.",
    items: [
      {
        name: "Matematyka",
        say: "Komputer kapsuły pomylił się w zapisie. Najpierw znajdź miejsce, potem wynik otworzy zamek.",
        ask: "Pokaż mi, gdzie zacząłeś. Dlaczego zrobiłeś to w ten sposób? Sprawdź jeszcze raz ten krok.",
        show: "Tylko ekran zadania. Kartki nie licz za niego.",
        praise: "Gdy sam wskaże miejsce błędu, nawet jeśli wynik jeszcze niegotowy.",
        quiet: "Nie podawaj 9022 ani 39. Nie pokazuj palcem przesunięcia drugiego wiersza."
      },
      {
        name: "Polski",
        say: "Dokument jest podarty. Które słowa nazywają osobę, rzecz albo miejsce?",
        ask: "Skąd wiesz, że to rzeczownik? Jaki to rodzaj?",
        show: "Tylko dokument na ekranie. Nie poprawiaj każdej literki od razu.",
        praise: "Gdy wyjaśni jeden swój wybór.",
        quiet: "Nie mów, że nadawcą jest podróżnik, zanim zdanie samo tak nie stanie."
      },
      {
        name: "English",
        say: "Jak dostałbyś się przez Londyn? Co wybrałbyś: bus, bike, cable car czy helicopter?",
        ask: "Co Sally robi najpierw? Który przejazd jest łagodniejszy dla miasta?",
        show: "Najpierw rozmowa, potem nagranie. Nie tłumacz całego tekstu.",
        praise: "Gdy złapie sens pojazdu albo znaku, nawet własnymi słowami.",
        quiet: "Nie układaj za niego trasy: autobus, rower, Tamiza."
      },
      {
        name: "Historia",
        say: "Opowiedz mi, co pamiętasz o starożytnym Egipcie. A co o Mezopotamii?",
        ask: "Czyje to pismo? Ilu tu bogów?",
        show: "Najpierw jego opowieść, potem archiwum. Kamień z British Museum dopiero po hieroglifach, jeśli sam chce.",
        praise: "Gdy sam połączy znak z cywilizacją.",
        quiet: "Nie mów, że stempel jest egipski, zanim sam go nie odczyta."
      }
    ]
  },
  subjects: [
    {
      title: "4. Matematyka",
      ru: "Сначала он сам ищет ошибку в «Znajdź błąd». Это готовая игра, мы её не копируем. После финала игры капсула просит результат 347 × 26. Число открывает замок, потому что неверный результат компьютер уже отверг.",
      checks: ["cały zapis, nie sam wynik", "przeniesienie", "drugi wiersz mnożenia", "od czego zaczyna dzielenie", "czy umie powiedzieć, co sprawdzał"],
      phrases: [
        "Pokaż mi, gdzie zacząłeś.",
        "Dlaczego zrobiłeś to w ten sposób?",
        "Sprawdź jeszcze raz ten krok."
      ],
      button: "🎮 Otwórz matematyczną misję",
      note: "Кнопка открывает всю миссию. Математика — первое испытание, внутри него переход в Znajdź błąd."
    },
    {
      title: "5. Polski",
      ru: "Тема страниц, которые он сейчас делает: rzeczownik. Документ восстанавливается в четыре шага: найти существительные, род, форма «kto?», запись с «nie». Это не текст про Египет.",
      checks: ["podróżnik, kapsuła, miasto to rzeczowniki", "męski / żeński / nijaki", "zostawił podróżnik, nie podróżnika", "nie kapsuła osobno", "nieprzyjaciel razem"],
      phrases: ["Które słowo jest rzeczą albo osobą?", "Powiedz, czemu wybrałeś tę formę."]
    },
    {
      title: "6. English",
      ru: "Тема этих страниц учебника: Round we go, means of transport, London. Present Simple сегодня не основная цель, даже если в сообщении Салли глаголы стоят в настоящем. Сначала разговор, потом запись.",
      checks: ["bus, bike, cable car, helicopter, boat, tram i pozostałe nazwy ze słuchu", "red double-decker, bike tour, sights", "cruise po Tamizie zamiast helikoptera", "znak Thames cruise"],
      phrases: [
        "Jak dostałbyś się przez Londyn?",
        "Co wybrałbyś: bus, bike, cable car czy helicopter?"
      ]
    },
    {
      title: "7. Historia",
      ru: "Podsumowanie działu I, не вопрос «кто такой фараон». Шесть коротких следов: эпохи, неолитическая революция, пары цивилизаций, политеизм, ключ к трём знакам, потом печать. Иероглиф здесь письменность, а не отдельный урок.",
      checks: ["kamień → brąz → żelazo", "rewolucja neolityczna", "hieroglify — Egipt, pismo klinowe i Hammurabi — Mezopotamia", "jeden Bóg — Izrael, dolina Indusu — Indie", "politeizm w Egipcie", "słońce, woda, ptak na stemplu"],
      phrases: ["Opowiedz mi, co pamiętasz o starożytnym Egipcie.", "A co zostało ci z Mezopotamii?"],
      links: [
        { href: "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt/examine-rosetta-stone", label: "British Museum, 7–11: Examine the Rosetta Stone" },
        { href: "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt", label: "British Museum: Ancient Egypt, ages 7–11" }
      ],
      note: "Ссылку открывай вместе и только после его собственного ключа к знакам, если он ещё хочет. На общем экране до этого печать не называй египетской."
    }
  ],
  asides: [
    {
      title: "8. Plastyka — opcjonalnie",
      ru: "Не обязательный тест. Около пяти минут. Если он в деле, можно дольше. Если нет, пропускаем.",
      say: "Narysuj symbol swojej kapsuły. Może to być znak z podróży albo jeden hieroglif, który właśnie odczytałeś."
    },
    {
      title: "9. WF",
      ru: "Это движение вне компьютера. Отдельный экран из него не делаем. После сидения достаточно обычной прогулки или велосипеда, без задания."
    },
    {
      title: "10. Psycholog",
      ru: "Встреча остаётся встречей. Не превращай её в задание и не разбирай миссию у психолога."
    }
  ],
  flow: {
    title: "Rytm",
    ru: "Это ориентир, не таймер. Если он увлёкся, пусть продолжает. Если устал, остановитесь. Цель дня — интерес и то, что ты успела заметить.",
    items: [
      { time: "около 5 минут", text: "Вводная история. Кто, каким ключом, откуда, куда — пока неизвестно." },
      { time: "10–15 минут", text: "Математика: ошибка в записи, потом ключ замка." },
      { time: "около 5 минут", text: "Пауза или короткий разговор." },
      { time: "около 10 минут", text: "Польский: документ собирается по частям." },
      { time: "около 5 минут", text: "Пауза." },
      { time: "около 10 минут", text: "Английский: сначала «как бы ты поехал по Лондону», потом запись." },
      { time: "5–10 минут", text: "История: его рассказ, потом архив. Камень из музея только по желанию." },
      { time: "около 3 минут", text: "Он сам кладёт четыре фрагмента в сообщение. Потом капсула открывается." }
    ]
  },
  after: {
    title: "Po każdym etapie",
    ru: "Важнее школьной оценки. Записи остаются в этом браузере.",
    subjects: [
      { id: "matematyka", name: "Matematyka" },
      { id: "polski", name: "Polski" },
      { id: "angielski", name: "English" },
      { id: "historia", name: "Historia" }
    ],
    status: [
      { id: "ok", label: "🟢 OK" },
      { id: "repeat", label: "🟡 Do powtórzenia" },
      { id: "help", label: "🔴 Wymaga pomocy" }
    ],
    questions: [
      { id: "notice", label: "Co zauważyłam?" },
      { id: "stuck", label: "Gdzie się zatrzymał?" },
      { id: "alone", label: "Co zrobił sam?" },
      { id: "interest", label: "Co go zainteresowało?" },
      { id: "next", label: "Czy chciał kontynuować?" }
    ]
  }
};
