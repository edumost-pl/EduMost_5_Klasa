/* Diagnoza 6.10 dla mamy. Kirill widzi tylko krótki ekran bez przykładów i bez odpowiedzi. */
window.EduMostDiags = window.EduMostDiags || {};
window.EduMostDiags["2026-10-06"] = {
  kicker: "Plan dla mamy",
  dateLabel: "Wtorek, 6 października",
  title: "Krótka diagnoza przed sprawdzianem",
  banner: "To nie jest druga misja i nie jest kartkówka. Jutro, 7.10, sprawdzian z matematyki. Dziś po jednym przykładzie, żeby zobaczyć, co stoi.",
  lead: "Wynik 9022 z wczoraj nie jest dowodem, że pisemne mnożenie jest opanowane. Tego przykładu dziś nie powtarzamy.",
  startTitle: "Jak zacząć",
  startRu: "Не начинай с «садись заниматься» и не называй оценку. Один вход:",
  startPl: "Jutro w szkole jest praca z matematyki. Dziś nie robimy drugiej historii. Sprawdzimy po jednym przykładzie, żebym widziała, co już stoi. Jak będzie dość — stop.",
  startGloss: "Завтра в школе работа по математике. Сегодня не вторая история. По одному примеру, чтобы я видела, что уже стоит. Если хватит — стоп.",
  rhythmTitle: "Rytm i stop",
  rhythm: [
    "Matematyka: 20–30 minut. Jeden przykład na temat. Nie dziesięć ćwiczeń z jednego zakresu.",
    "Jeśli dwa tematy z rzędu wymagają twojej pomocy — matematyka się kończy. Resztę oznacz jako pominięte.",
    "Jeśli odmawia: jeden przykład i stop. Bez negocjacji o cały zakres.",
    "Czytanie jest osobno, 5–10 minut. Nie jest nagrodą za matematykę i nie jest karą.",
    "Lekcje EduMost otwieraj tylko przy temacie oznaczonym 🟡 albo 🔴, i tylko jeden fragment. Nie przechodź dziś dziesięciu lekcji."
  ],
  subjectsTitle: "Szkoła",
  subjectsRu: "Расписание не менялось. Тем уроков Informatyka, Technika, Muzyka и język polski в данных нет.",
  subjectsNote: "Obserwacja po lekcji / sprawdzić Librus po powrocie.",
  homework: "Domówki z Librus jeszcze nie ma. Po powrocie sprawdzić. Nie dopisywać zadania z głowy.",
  topicsTitle: "Matematyka — co sprawdzić",
  topicsRu: "Примеры новые. Ответы только здесь. Не показывай этот экран Кириллу.",
  topics: [
    {
      id: "rachunek",
      title: "1. Ustny rachunek",
      check: "Czy liczy w pamięci, czy od razu prosi o kartkę.",
      task: "48 + 37.   80 − 26.   9 × 6.   63 : 9.",
      say: "Powiedz wynik. Kartkę weź tylko wtedy, gdy naprawdę utkniesz.",
      quiet: "Nie ustawiaj mu liczb w słupku, dopóki sam nie poprosi.",
      error: "Które działanie wymagało kartki. Czy pomylił dodawanie z mnożeniem.",
      repeatWhen: "Wynik jest dobry tylko na kartce albo dwa z czterech wyników są inne.",
      answer: "85.  54.  54.  7.",
      lesson: "lessons/matematyka/01-dzialania-pamieciowe/index.html",
      lessonLabel: "Działania pamięciowe"
    },
    {
      id: "potegi",
      title: "2. Potęgi",
      check: "Czy mała cyfra oznacza, ile razy mnożymy podstawę, czy czyta ją jako zwykłe mnożenie.",
      task: "2³.   5².   10³.   4².",
      say: "Co oznacza ta mała cyfra?",
      quiet: "Nie mów «pomnóż trzy razy» i nie mów «to nie jest 2 × 3», zanim sam nie powie wyniku.",
      error: "2³ policzone jako 6. 5² jako 10. 10³ jako 30.",
      repeatWhen: "Choć jeden taki skrót, nawet jeśli resztę poprawi po twoim pytaniu.",
      answer: "8.  25.  1000.  16.",
      lesson: "lessons/matematyka/02-potegowanie/index.html",
      lessonLabel: "Potęgowanie"
    },
    {
      id: "kolejnosc",
      title: "3. Kolejność działań",
      check: "Czy mnożenie jest przed dodawaniem i odejmowaniem, a nawias przed resztą.",
      task: "2 + 3 × 4.   (2 + 3) × 4.   20 − 4 × 3.",
      say: "Policz i pokaż, od którego działania zacząłeś.",
      quiet: "Nie pokazuj palcem mnożenia. Nie mów «najpierw razy».",
      error: "Liczenie po kolei od lewej: 2 + 3 = 5, potem × 4. Albo ignorowanie nawiasu.",
      repeatWhen: "Idzie od lewej albo nawias nic u niego nie zmienia.",
      answer: "14.  20.  8.",
      lesson: "lessons/matematyka/03-kolejnosc-wykonywania-dzialan/index.html",
      lessonLabel: "Kolejność wykonywania działań"
    },
    {
      id: "rzymskie",
      title: "4. Cyfry rzymskie",
      check: "Czy mniejszy znak przed większym odejmuje, a po większym dodaje.",
      task: "Przeczytaj: IX, XIV, XIX, XL. Zapisz: 16 i 29.",
      say: "Przeczytaj znak. Potem zapisz dwie liczby.",
      quiet: "Nie kładź obok tabeli I, V, X, L.",
      error: "IX jako 11. XL jako 60. 19 jako XVIIII. 4 jako IIII.",
      repeatWhen: "Myli kolejność znaku przed i po, albo składa 19 z samych X i I.",
      answer: "9, 14, 19, 40.  16 = XVI.  29 = XXIX.",
      lesson: "lessons/matematyka/04-cyfry-rzymskie/index.html",
      lessonLabel: "Cyfry rzymskie"
    },
    {
      id: "dodawanie",
      title: "5. Pisemne dodawanie",
      check: "Słupek, od jedności, przeniesienie.",
      task: "476 + 358. Niech zapisze sam.",
      say: "Zapisz w słupku. Od czego zacząłeś?",
      quiet: "Nie wpisuj mu małej jedynki przeniesienia.",
      error: "Jedności 6 + 8 bez przeniesienia. Przeniesienie dopisane, ale nie dodane w następnej kolumnie.",
      repeatWhen: "Wynik bez przeniesienia albo przeniesienie stoi i nie wchodzi do sumy.",
      answer: "834.",
      lesson: "lessons/matematyka/06-dodawanie-i-odejmowanie-pisemne/index.html",
      lessonLabel: "Dodawanie i odejmowanie pisemne"
    },
    {
      id: "odejmowanie",
      title: "6. Pisemne odejmowanie",
      check: "Pożyczanie, także przez zero.",
      task: "704 − 268. Nowy przykład, nie z wczoraj.",
      say: "Zapisz w słupku. Pokaż, co zrobiłeś, gdy u góry było za mało.",
      quiet: "Nie mów «pożycz od setek». Poczekaj na jego zapis.",
      error: "0 − 6 zapisane jako 6 albo 0. Setka zmniejszona, a dziesiątka nadal 0.",
      repeatWhen: "Zero w środku psuje słupek albo wynik nie wraca do 704 po dodaniu odjemnika.",
      answer: "436. Sprawdzenie: 268 + 436 = 704.",
      lesson: "lessons/matematyka/06-dodawanie-i-odejmowanie-pisemne/index.html",
      lessonLabel: "Dodawanie i odejmowanie pisemne"
    },
    {
      id: "mnozenie",
      title: "7. Pisemne mnożenie",
      check: "Dwa rzędy, przesunięcie drugiego rzędu, przeniesienie. Wczorajszy klucz się nie liczy.",
      task: "36 × 24. Nie dawaj 347 × 26.",
      say: "To nowy słupek. Pokaż drugi rząd.",
      quiet: "Nie mów, że drugi rząd ma stanąć o jedno miejsce w lewo. Nie wspominaj 9022.",
      error: "Drugi rząd bez przesunięcia. Przeniesienie tylko w pierwszym rzędzie. Zły iloczyn częściowy.",
      repeatWhen: "Wynik 864 nie pojawił się sam albo drugi rząd stoi pod jednościami.",
      answer: "864.  36 × 20 = 720,  36 × 4 = 144.",
      lesson: "lessons/matematyka/07-mnozenie-pisemne/index.html",
      lessonLabel: "Mnożenie pisemne"
    },
    {
      id: "dzielenie",
      title: "8. Pisemne dzielenie",
      check: "Od lewej, iloraz nad dzielną, reszta schodzi w dół. Wczorajsze 936 : 24 nie było sprawdzone.",
      task: "954 : 6. Nie dawaj 936 : 24 i nie proś o 39.",
      say: "Od której cyfry zaczynasz? Co robisz z tym, co zostało?",
      quiet: "Nie podawaj pierwszej cyfry ilorazu.",
      error: "Dzieli od prawej. Reszty nie opuszcza. Cyfra ilorazu nie stoi nad właściwą cyfrą.",
      repeatWhen: "Nie umie powiedzieć, od czego zaczął, albo wynik nie jest 159.",
      answer: "159.",
      lesson: "lessons/matematyka/10-dzielenie-pisemne/index.html",
      lessonLabel: "Dzielenie pisemne"
    },
    {
      id: "podzielnosc",
      title: "9. Cechy podzielności",
      check: "Czy sam mówi cechę dla 2, 3, 5, 9 i 10.",
      task: "240, 135, 714, 209. Przy każdej: czy dzieli się przez 2, przez 3, przez 5, przez 9, przez 10?",
      say: "Skąd to wiesz, bez dzielenia w słupku?",
      quiet: "Nie recytuj cechy. Nie mów «dodaj cyfry».",
      error: "Patrzy tylko na ostatnią cyfrę przy trójce i dziewiątce. Sumę cyfr liczy źle. 209 bierze jako podzielne przez 3.",
      repeatWhen: "Cechę trójki albo dziewiątki miesza z cechą dwójki.",
      answer: "240: 2, 3, 5, 10.  135: 3 i 9.  714: 2 i 3.  209: żadna z tych cech.",
      lesson: "lessons/matematyka/08-dzielenie-i-podzielnosc/index.html",
      lessonLabel: "Dzielenie i podzielność"
    },
    {
      id: "pierwsze",
      title: "10. Liczby pierwsze i złożone",
      check: "Czy odróżnia liczbę pierwszą od złożonej i co robi z jedynką.",
      task: "Które z nich są pierwsze: 1, 2, 9, 11, 15, 17, 21?",
      say: "Zostaw te, które mają tylko dwa dzielniki: 1 i samą siebie.",
      quiet: "Nie mów z góry, że jedynka nie jest pierwsza.",
      error: "Jedynka wśród pierwszych. 9, 15 albo 21 jako pierwsze. Dwójka odrzucona, bo parzysta.",
      repeatWhen: "Jedynka albo liczba złożona z krótkiej listy zostaje po jego stronie «pierwsze».",
      answer: "Pierwsze: 2, 11, 17.  Jedynka nie jest pierwsza.  9, 15 i 21 są złożone.",
      lesson: "lessons/matematyka/09-liczby-pierwsze-i-zlozone/index.html",
      lessonLabel: "Liczby pierwsze i liczby złożone"
    }
  ],
  readingTitle: "Czytanie — linia codzienna",
  readingRu: "Только старт. Не контрольная по книге и не тема урока польского.",
  reading: [
    "Książka: Chłopcy z Placu Broni.",
    "Dziś 5–10 minut: otworzyć i przeczytać sam początek.",
    "Stop na pierwszym naturalnym oddechu albo po 10 minutach. Bez streszczenia na ocenę.",
    "Jeśli chce powiedzieć, co przeczytał — posłuchaj. Jeśli nie chce — książka i tak jest zrobiona.",
    "Jutro i dalej ta sama linia, krótkimi kawałkami. Dziś nie ustalać, ile rozdziałów «trzeba». "
  ],
  child: {
    title: "6 жовтня",
    lines: [
      "Сьогодні коротка розминка з мамою перед завтрашньою математикою.",
      "Це не контрольна. Мама дає один приклад за раз.",
      "Chłopcy z Placu Broni: 5–10 хвилин, тільки початок, і стоп."
    ]
  },
  form: {
    title: "Zapisz po każdym temacie",
    ru: "Важнее оценки. Остаётся только в этом браузере.",
    statuses: [
      { id: "ok", label: "🟢 OK" },
      { id: "repeat", label: "🟡 Do powtórzenia" },
      { id: "help", label: "🔴 Wymaga pomocy" },
      { id: "skip", label: "Pominięte" }
    ],
    note: "Jaki błąd?",
    day: [
      { id: "stopped", label: "Gdzie się zatrzymaliśmy?" },
      { id: "reading", label: "Czy chciał czytać?" }
    ]
  }
};
