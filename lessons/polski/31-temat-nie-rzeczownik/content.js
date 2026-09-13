function emT31(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T31 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT31(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T31 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 62–63  ·  Lekcja 31  ·  temat, oboczność, nie",
    promptPlace: "before",
    prompt: {
      pl: "To sprawdzian na koniec. Polski pierwszy. Włącz 🇺🇦. Siedem przypadków już *było* — na rozgrzewce tylko *użyjesz* trzech form z e-maila. Dziś nowe: *dlaczego* formy się zmieniają (*temat, końcówka, ø, oboczność*), e-mail Pawła, komiks i *nie* z rzeczownikami. Zad. 4–6 są *nieobowiązkowe* (podstawa 2024).",
      ua: "Це перевірка наприкінці. Польська перша. Увімкни 🇺🇦. Сім відмінків уже *були* — на розминці лише *використаєш* три форми з e-mail. Сьогодні нове: *чому* форми змінюються (*основа, закінчення, ø, чергування*), e-mail Павла, комікс і *nie* з іменниками. Завд. 4–6 *не обов’язкові* (підстава 2024)."
    },
    items: [
      { pl: "oddzielę *temat* od *końcówki* (burza, kocø);", ua: "відділю *основу* від *закінчення* (burza, kocø);" },
      { pl: "wskażę *oboczność* w *stół* (ó–o, ł–l);", ua: "вкажу *чергування* в *stół* (ó–o, ł–l);" },
      { pl: "uzupełnię e-mail Pawła formami z nawiasów;", ua: "доповню e-mail Павла формами з дужок;" },
      { pl: "napiszę *nie* z rzeczownikiem łącznie albo rozdzielnie.", ua: "напишу *nie* з іменником разом або окремо." }
    ],
    task: {
      id: "t31-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Powiedzieć, co to temat, a co końcówka (także zerowa).", ua: "Сказати, що таке основа, а що закінчення (також нульове)." } },
        { id: "b", label: { pl: "Zauważyć oboczność ó–o, ł–l w stół.", ua: "Помітити чергування ó–o, ł–l у stół." } },
        { id: "c", label: { pl: "Napisać nie z rzeczownikiem: nieprawda vs To nie przypadek.", ua: "Написати nie з іменником: nieprawda vs To nie przypadek." } },
        { id: "d", label: { pl: "Zamiast tego narysować reklamę Heliosa.", ua: "Замість цього намалювати рекламу Геліоса." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Reklama Heliosa była na lekcji 28.",
        ua: "Реклама Геліоса була на уроці 28."
      },
      explanation: {
        pl: "Dziś: temat, ø, oboczność, Paweł, nie. Helios — 27–28.",
        ua: "Сьогодні: основа, ø, чергування, Павло, nie. Геліос — 27–28."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · trzy formy z e-maila", ua: "Розминка · три форми з e-mail" },
    formula: "powtórka  ·  inne zadanie niż lekcja 30",
    promptPlace: "before",
    prompt: {
      pl: "To *nie* druga tabela *piasek*. Tabeli nie składamy od nowa. Trzy formy, które już wstawiałeś — tylko *jaki przypadek?* Potem nowe pytanie lekcji 31: *która część słowa się zmienia?*",
      ua: "Це *не* друга таблиця *piasek*. Таблицю не складаємо знову. Три форми, які вже вставляв — лише *який відмінок?* Потім нове питання уроку 31: *яка частина слова змінюється?*"
    },
    items: [
      { pl: "*nad Kanałem* Sueskim — (czym?) → *narzędnik*.", ua: "*nad Kanałem* Sueskim — (czym?) → *орудний*." },
      { pl: "*w hotelu* — (w czym?) → *miejscownik* (przyimek *w* + forma).", ua: "*w hotelu* — (w czym?) → *місцевий* (прийменник *w* + форма)." },
      { pl: "*Na ulicach* — (na czym?) → *miejscownik* lm.", ua: "*Na ulicach* — (на чим?) → *місцевий* множини." },
      { pl: "Wołacz wczoraj: *Kolego!* — dziś go nie odmieniamy, tylko pamiętamy *o!*", ua: "Кличний учора: *Kolego!* — сьогодні не відмінюємо, лише пам’ятаємо *o!*" }
    ],
    task: {
      id: "t31-s01b-rozgrzewka",
      type: "single-choice",
      question: {
        pl: "Schować się *w hotelu*. Jaki to przypadek?",
        ua: "Schować się *w hotelu*. Який це відмінок?"
      },
      options: [
        { id: "a", label: { pl: "Dopełniacz (kogo? czego?)", ua: "Родовий (kogo? czego?)" } },
        { id: "b", label: { pl: "Miejscownik ((o) kim? czym?) — z przyimkiem *w*", ua: "Місцевий ((o) kim? czym?) — з прийменником *w*" } },
        { id: "c", label: { pl: "Biernik (kogo? co?)", ua: "Знахідний (kogo? co?)" } }
      ],
      answer: "b",
      hint: {
        pl: "Widzisz przyimek *w*. Miejscownik nigdy nie stoi sam.",
        ua: "Бачиш прийменник *w*. Місцевий ніколи не стоїть сам."
      },
      explanation: {
        pl: "*w hotelu* = miejscownik. Inne pytanie niż wczorajsza tabela: dziś idziemy w *temat i końcówkę*.",
        ua: "*w hotelu* = місцевий. Інше питання, ніж учорашня таблиця: сьогодні йдемо в *основу і закінчення*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Temat i końcówka · burza", ua: "Основа і закінчення · burza" },
    formula: "s. 61",
    promptPlace: "before",
    prompt: {
      pl: "*Końcówka* to część, która *się zmienia* przy odmianie. *Temat* to stała część, która zostaje po odcięciu końcówki. Most: українська *основа* і *закінчення*. Na obrazku widać nawias — dokładny podział masz w liście.",
      ua: "*Закінчення* — частина, яка *змінюється* при відмінюванні. *Основа* — стала частина, що лишається після відрізання закінчення. Міст: українська *основа* і *закінчення*. На малюнку видно дужку — точний поділ у списку."
    },
    visual: vizGhT31("t31-temat.png", {
      prompt: "Odmiana burza: temat burz- i końcówki.",
      alt: { pl: "Temat i końcówka w odmianie wyrazu burza.", ua: "Основа і закінчення у відміні слова burza." }
    }),
    items: [
      { pl: "M *burz|a*  D *burz|y*  C *burz|y*  B *burz|ę*  N *burz|ą*  Ms *burz|y*  W *burz|o!*", ua: "M burz|a · D burz|y · C burz|y · B burz|ę · N burz|ą · Ms burz|y · W burz|o!" },
      { pl: "Temat: *burz-*. Końcówki: *-a, -y, -y, -ę, -ą, -y, -o*.", ua: "Основа: *burz-*. Закінчення: *-a, -y, -y, -ę, -ą, -y, -o*." }
    ],
    task: {
      id: "t31-s02-temat",
      type: "single-choice",
      question: {
        pl: "W formie *burzę* temat to:",
        ua: "У формі *burzę* основа це:"
      },
      options: [
        { id: "a", label: { pl: "burz-", ua: "burz-" } },
        { id: "b", label: { pl: "-ę", ua: "-ę" } },
        { id: "c", label: { pl: "całe słowo burzę (nie da się podzielić)", ua: "ціле слово burzę (не можна поділити)" } }
      ],
      answer: "a",
      hint: {
        pl: "Co zostaje, gdy odejmiesz zmieniającą się końcówkę?",
        ua: "Що лишається, коли віднімеш змінне закінчення?"
      },
      explanation: {
        pl: "Temat *burz-*, końcówka *-ę*. Całe słowo to temat+końcówka.",
        ua: "Основа *burz-*, закінчення *-ę*. Ціле слово = основа+закінчення."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Końcówka zerowa ø", ua: "Нульове закінчення ø" },
    formula: "s. 62",
    promptPlace: "before",
    prompt: {
      pl: "Czasem końcówki *nie widać*. Wtedy cały wyraz jest tematem, a końcówkę zaznaczamy *ø* (zero). Przykład z podręcznika: *koc*.",
      ua: "Інколи закінчення *не видно*. Тоді ціле слово є основою, а закінчення позначаємо *ø* (нуль). Приклад з підручника: *koc*."
    },
    items: [
      { pl: "M *koc|ø*  D *koc|a*  C *koc|owi*  B *koc|ø*", ua: "M koc|ø · D koc|a · C koc|owi · B koc|ø" },
      { pl: "M i B wyglądają jak *koc* — końcówka jest, tylko *pusta*.", ua: "M і B виглядають як *koc* — закінчення є, лише *порожнє*." }
    ],
    task: {
      id: "t31-s03-zero",
      type: "true-false",
      question: {
        pl: "W mianowniku *koc* nie ma tematu, bo nie widać końcówki. Prawda czy fałsz?",
        ua: "У називному *koc* немає основи, бо не видно закінчення. Правда чи ні?"
      },
      answer: false,
      hint: {
        pl: "Temat jest zawsze. Końcówka bywa zerowa.",
        ua: "Основа є завжди. Закінчення буває нульовим."
      },
      explanation: {
        pl: "Fałsz. *koc|ø* — temat *koc-*, końcówka zerowa. Nie myl: „nie widać” ≠ „nie ma tematu”.",
        ua: "Ні. *koc|ø* — основа *koc-*, нульове закінчення. «Не видно» ≠ «немає основи»."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Oboczność · stół", ua: "Чергування · stół" },
    formula: "s. 62  ·  jak ó–o z lekcji 5",
    promptPlace: "before",
    prompt: {
      pl: "W temacie czasem *wymieniają się głoski*. To *oboczność*. Tematy z wymianą nazywamy *tematami obocznymi*. Pamiętasz *ó wymienne*? Tu to samo w gramatyce: *stół / stołu / stole*.",
      ua: "В основі інколи *чергуються звуки*. Це *oboczność* (чергування). Основи з обміном називаємо *tematami obocznymi*. Пам’ятаєш *ó wymienne*? Тут те саме в граматиці: *stół / stołu / stole*."
    },
    visual: vizGhT31("t31-obocznosc.png", {
      prompt: "Oboczność tematu stół: stół- / stoł- / stol-; ó:o, ł:l.",
      alt: { pl: "Trzy tematy oboczne: stół-, stoł-, stol- oraz wymiana ó:o i ł:l.", ua: "Три супровідні основи: stół-, stoł-, stol- і чергування ó:o, ł:l." }
    }),
    items: [
      { pl: "M *stół|ø*  D *stoł|u*  C *stoł|owi*  B *stół|ø*  N *stoł|em*  Ms *stol|e*  W *stol|e!*", ua: "M stół|ø · D stoł|u · C stoł|owi · B stół|ø · N stoł|em · Ms stol|e · W stole!" },
      { pl: "Tematy oboczne: *stół- || stoł- || stol-*.", ua: "Супровідні основи: *stół- || stoł- || stol-*." },
      { pl: "Oboczności: *ó : o*  oraz  *ł : l*.", ua: "Чергування: *ó : o*  і  *ł : l*." }
    ],
    task: {
      id: "t31-s04-obocznosc",
      type: "multiple-choice",
      question: {
        pl: "Jakie oboczności NA PEWNO widać w odmianie *stół*? Zaznacz wszystkie pewne.",
        ua: "Які чергування НАПЕВНО видно у відміні *stół*? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "ó : o  (stół – stołu)", ua: "ó : o  (stół – stołu)" } },
        { id: "b", label: { pl: "ł : l  (stołu – stole)", ua: "ł : l  (stołu – stole)" } },
        { id: "c", label: { pl: "rz : r  (jak w morze – morza)", ua: "rz : r  (як у morze – morza)" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Patrz na trzy tematy: stół- / stoł- / stol-.",
        ua: "Дивись на три основи: stół- / stoł- / stol-."
      },
      explanation: {
        pl: "*ó–o* i *ł–l*. *rz–r* jest w innych wyrazach (np. *morze*), nie w *stół*.",
        ua: "*ó–o* і *ł–l*. *rz–r* є в інших словах (напр. *morze*), не в *stół*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 4–6 · lekko (nieobowiązkowe)", ua: "Завд. 4–6 · легко (не обов’язкові)" },
    formula: "s. 61–62  ·  podstawa 2024",
    promptPlace: "before",
    prompt: {
      pl: "Program 2024 *usunął* obowiązek oddzielania tematu od końcówek. Zadania 4, 5 i 6 w podręczniku są *nieobowiązkowe*. Robimy jedno krótkie, żeby *zobaczyć* zmianę — bez presji na test.",
      ua: "Програма 2024 *прибрала* обов’язок відділяти основу від закінчень. Завдання 4, 5 і 6 у підручнику *не обов’язкові*. Робимо одне коротке, щоб *побачити* зміну — без тиску на тест."
    },
    items: [
      { pl: "zad. 4: *podróż | podróży | podróżą* — temat *podróż- / podróż-*, końcówki *ø / -y / -ą*.", ua: "завд. 4: podróż | podróży | podróżą." },
      { pl: "zad. 5: w *pokój – pokoju – pokojem* widać *ó : o* (jak *stół*).", ua: "завд. 5: у *pokój – pokoju – pokojem* видно *ó : o* (як *stół*)." },
      { pl: "zad. 6: *wichura, woda, postój* — szukamy tematów obocznych (np. *postój / postoju* → ó : o).", ua: "завд. 6: *wichura, woda, postój* — шукаємо супровідні основи (напр. *postój / postoju* → ó : o)." }
    ],
    task: {
      id: "t31-s05-opcjonalne",
      type: "single-choice",
      question: {
        pl: "W parze *pokój / pokoju* która oboczność jest NA PEWNO?",
        ua: "У парі *pokój / pokoju* яке чергування НАПЕВНО є?"
      },
      options: [
        { id: "a", label: { pl: "ó : o", ua: "ó : o" } },
        { id: "b", label: { pl: "rz : r", ua: "rz : r" } },
        { id: "c", label: { pl: "To nie oboczność, tylko inny wyraz.", ua: "Це не чергування, лише інше слово." } }
      ],
      answer: "a",
      hint: {
        pl: "Jak stół / stołu i jak ó wymienne z lekcji 5.",
        ua: "Як stół / stołu і як ó wymienne з уроку 5."
      },
      explanation: {
        pl: "*pokój → pokoju*: ó wymienia się na o. To oboczność tematu.",
        ua: "*pokój → pokoju*: ó змінюється на o. Це чергування основи."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 7 · e-mail Pawła", ua: "Завд. 7 · e-mail Павла" },
    formula: "s. 62",
    promptPlace: "before",
    prompt: {
      pl: "Paweł odpisuje Wiktorowi. W nawiasach stoi *forma podstawowa*. Wstaw *właściwy przypadek*. W razie wątpliwości — słownik (albo tabela z lekcji 30).",
      ua: "Павло відповідає Віктору. У дужках стоїть *основна форма*. Встав *потрібний відмінок*. Якщо сумнів — словник (або таблиця з уроку 30)."
    },
    text: {
      pl: [
        "Cześć!",
        "Nie uwierzysz! Dokładnie w tym samym (dzień), w którym do nas pisałeś, przez Pomorze przeszła burza. Ale wiało! W kilku domach (przyjaciel) moich rodziców uszkodziło dachy. Przy tak silnym (wiatr) zanikał sygnał telewizyjny, a przez kilka godzin nie było prądu.",
        "Nie mogliśmy grać na komputerze, więc razem z moimi (brat) siedzieliśmy w jednym z (pokój) i przy zapalonych świeczkach wymyślaliśmy i opowiadaliśmy sobie różne straszne historie.",
        "Mam nadzieję, że podróż po – jak to nazwałeś – świętej rzece (Egipcjanin) była udana.",
        "Czekamy na dalsze relacje z Egiptu. Trzymaj się. Paweł"
      ],
      ua: [
        "Привіт!",
        "Не повіриш! Точно того самого (dzień), коли ти нам писав, через Помор’я пройшла буря. І як віяло! У кількох будинках (przyjaciel) моїх батьків пошкодило дахи. При такому сильному (wiatr) зникав телесигнал, і кілька годин не було струму.",
        "Ми не могли грати на комп’ютері, тож разом із моїми (brat) сиділи в одній із (pokój) і при свічках вигадували страшні історії.",
        "Сподіваюся, що подорож священною рікою (Egipcjanin) була вдалою.",
        "Чекаємо дальших реляцій з Єгипту. Тримайсь. Павло"
      ]
    },
    items: [
      { pl: "w (czym?) *dniu*  ·  domach *przyjaciół*  ·  przy *wietrze*  ·  z *braćmi*  ·  z *pokoi*  ·  rzece *Egipcjan*", ua: "w *dniu* · *przyjaciół* · *wietrze* · *braćmi* · *pokoi* · *Egipcjan*" }
    ],
    task: {
      id: "t31-s06-pawel",
      type: "multiple-choice",
      question: {
        pl: "Które formy NA PEWNO pasują do listu Pawła? Zaznacz wszystkie pewne.",
        ua: "Які форми НАПЕВНО пасують до листа Павла? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "w tym samym dniu", ua: "w tym samym dniu" } },
        { id: "b", label: { pl: "przy tak silnym wietrze", ua: "przy tak silnym wietrze" } },
        { id: "c", label: { pl: "z moimi braćmi", ua: "z moimi braćmi" } },
        { id: "d", label: { pl: "w jednym z pokoi", ua: "w jednym z pokoi" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "dzień → miejscownik; wiatr → miejscownik (ó:o); brat → narzędnik lm.; z + D: pokoi.",
        ua: "dzień → місцевий; wiatr → місцевий (ó:o); brat → орудний множини; z + родовий: pokoi."
      },
      explanation: {
        pl: "Klucz: *dniu, przyjaciół, wietrze, braćmi, pokoi, Egipcjan*. *wietrze* pokazuje oboczność *wiatr / wietrze*.",
        ua: "Ключ: *dniu, przyjaciół, wietrze, braćmi, pokoi, Egipcjan*. *wietrze* показує чергування *wiatr / wietrze*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 8 · komiks i nie", ua: "Завд. 8 · комікс і nie" },
    formula: "s. 63",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj komiks z Nilu (w podręczniku są dymki). Wypisz rzeczowniki z przeczeniem *nie*. Potem sprawdzimy zasadę. Obrazek pokazuje scenerię — dymki masz w liście.",
      ua: "Прочитай комікс із Нілу (у підручнику є хмарки). Випиши іменники з запереченням *nie*. Потім перевіримо правило. Малюнок показує сцену — хмарки в списку."
    },
    visual: vizGhT31("t31-komiks.png", {
      prompt: "Komiks: Nil, łódka, krokodyl, jacht.",
      alt: { pl: "Scena komiksu nad Nilem: łódka, krokodyl, wycieczka.", ua: "Сцена коміксу на Нілі: човен, крокодил, екскурсія." }
    }),
    items: [
      { pl: "*niepunktualność* — łącznie (rzeczownik).", ua: "*niepunktualność* — разом (іменник)." },
      { pl: "*niewygody*, *niepogoda*, *nieszczęście* — łącznie.", ua: "*niewygody*, *niepogoda*, *nieszczęście* — разом." },
      { pl: "*To nie przypadek* — *rozdzielnie* (zaprzeczenie: to nie jest…).", ua: "*To nie przypadek* — *окремо* (заперечення: це не є…)." },
      { pl: "*to nie statysta, ale turysta* — rozdzielnie.", ua: "*to nie statysta, ale turysta* — окремо." }
    ],
    task: {
      id: "t31-s07-komiks",
      type: "single-choice",
      question: {
        pl: "Który zapis z komiksu jest ROZDZIELNY?",
        ua: "Який запис із коміксу ОКРЕМИЙ?"
      },
      options: [
        { id: "a", label: { pl: "niepunktualność", ua: "niepunktualność" } },
        { id: "b", label: { pl: "To nie przypadek", ua: "To nie przypadek" } },
        { id: "c", label: { pl: "nieszczęście", ua: "nieszczęście" } }
      ],
      answer: "b",
      hint: {
        pl: "Gdy nie zaprzecza całemu zdaniu (to nie jest…), piszemy osobno.",
        ua: "Коли nie заперечує ціле речення (це не є…), пишемо окремо."
      },
      explanation: {
        pl: "*To nie przypadek* = zaprzeczenie. *niepunktualność* i *nieszczęście* to rzeczowniki pisane łącznie.",
        ua: "*To nie przypadek* = заперечення. *niepunktualność* і *nieszczęście* — іменники разом."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zasada · nie z rzeczownikami", ua: "Правило · nie з іменниками" },
    formula: "s. 63",
    promptPlace: "before",
    prompt: {
      pl: "Ramka z podręcznika. Pułapka UA: po ukraińsku *не* bywa osobno częściej. W polskim rzeczownik z *nie* najczęściej *klei się*. Rozdzielnie tylko, gdy *nie* zaprzecza (to nie X), albo przy przeciwieństwie (*nie X, lecz Y*).",
      ua: "Рамка з підручника. Пастка UA: українською *не* частіше окремо. Польською іменник з *nie* найчастіше *клеїться*. Окремо лише, коли *nie* заперечує (це не X), або при протиставленні (*nie X, lecz Y*)."
    },
    visual: vizGhT31("t31-nie.png", {
      prompt: "Dwie karty: łącznie i rozdzielnie.",
      alt: { pl: "Nie z rzeczownikami: łącznie albo rozdzielnie.", ua: "Nie з іменниками: разом або окремо." }
    }),
    items: [
      { pl: "*Łącznie:* nieprzyjaciel, nieprawda, nieuczciwość, niepogoda.", ua: "*Разом:* nieprzyjaciel, nieprawda, nieuczciwość, niepogoda." },
      { pl: "*Rozdzielnie* (zaprzeczenie): *To nie obowiązek. To nie przypadek.*", ua: "*Окремо* (заперечення): *To nie obowiązek. To nie przypadek.*" },
      { pl: "Rzeczowniki od czasowników: *niekorzystanie* — też łącznie (jak *nie* z rzeczownikiem). Przykład: *Prosimy o niekorzystanie z telefonów.*", ua: "Іменники від дієслів: *niekorzystanie* — теж разом. Приклад: *Prosimy o niekorzystanie z telefonów.*" }
    ],
    task: {
      id: "t31-s08-zasada",
      type: "true-false",
      question: {
        pl: "Nie z rzeczownikami zawsze piszemy rozdzielnie, tak jak ukraińskie не завжди osobno. Prawda czy fałsz?",
        ua: "Nie з іменниками завжди пишемо окремо, як українське не завжди окремо. Правда чи ні?"
      },
      answer: false,
      hint: {
        pl: "Domyślnie łącznie. Osobno — gdy zaprzeczasz.",
        ua: "Типово разом. Окремо — коли заперечуєш."
      },
      explanation: {
        pl: "Fałsz. Domyślnie *łącznie*. Rozdzielnie: *To nie…* / *nie X, lecz Y*.",
        ua: "Ні. Типово *разом*. Окремо: *To nie…* / *nie X, lecz Y*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 9 · Klątwa Nilu", ua: "Завд. 9 · Klątwa Nilu" },
    formula: "s. 63  ·  zapowiedzi filmowe",
    promptPlace: "before",
    prompt: {
      pl: "Zapisz *nie* łącznie albo rozdzielnie. Najpierw zeszyt, potem klucz. Szukaj: czy to *nazwa* (niegodziwość), czy *zaprzeczenie* (to nie rzeczywistość), czy *lecz* (nie aktorzy, lecz…).",
      ua: "Запиши *nie* разом або окремо. Спочатку зошит, потім ключ. Шукай: чи це *назва* (niegodziwość), чи *заперечення* (to nie rzeczywistość), чи *lecz* (nie aktorzy, lecz…)."
    },
    text: {
      pl: [
        "(Nie)godziwość faraona, (nie)urodzaj i (nie)dostatek doprowadziły do (nie)pokojów społecznych.",
        "Wśród ludu panuje (nie)uczciwość. […] Czy znajdzie się ktoś, kto zapanuje nad (nie)porządkiem w kraju?",
        "To (nie)rzeczywistość, ale scenariusz filmu. […] Nie będzie (nie)dyskrecją, jeśli zdradzimy, że wzięli w nich również udział (nie)aktorzy, lecz przypadkowi turyści."
      ],
      ua: [
        "(Nie)godziwość фараона, (nie)urodzaj і (nie)dostatek призвели до (nie)pokojów суспільних.",
        "Серед народу панує (nie)uczciwość. […] Чи знайдеться хтось, хто впорається з (nie)porządkiem у країні?",
        "Це (nie)rzeczywistość, але сценарій фільму. […] Не буде (nie)dyskrecją, якщо видамо, що в зйомках брали участь (nie)aktorzy, а випадкові туристи."
      ]
    },
    items: [
      { pl: "łącznie: *Niegodziwość, nieurodzaj, niedostatek, niepokojów, nieuczciwość, nieporządkiem, niedyskrecją*", ua: "разом: Niegodziwość, nieurodzaj, niedostatek, niepokojów, nieuczciwość, nieporządkiem, niedyskrecją" },
      { pl: "rozdzielnie: *To nie rzeczywistość*  ·  *nie aktorzy, lecz…*", ua: "окремо: *To nie rzeczywistość*  ·  *nie aktorzy, lecz…*" }
    ],
    task: {
      id: "t31-s09-klatwa",
      type: "multiple-choice",
      question: {
        pl: "Które zapisy NA PEWNO są poprawne? Zaznacz wszystkie pewne.",
        ua: "Які записи НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Niegodziwość faraona", ua: "Niegodziwość faraona" } },
        { id: "b", label: { pl: "To nie rzeczywistość, ale scenariusz", ua: "To nie rzeczywistość, ale scenariusz" } },
        { id: "c", label: { pl: "nieaktorzy (łącznie, bo to rzeczownik)", ua: "nieaktorzy (разом, бо це іменник)" } },
        { id: "d", label: { pl: "nie aktorzy, lecz turyści", ua: "nie aktorzy, lecz turyści" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "lecz = przeciwieństwo → rozdzielnie. To nie… → rozdzielnie.",
        ua: "lecz = протиставлення → окремо. To nie… → окремо."
      },
      explanation: {
        pl: "*Niegodziwość* łącznie. *To nie rzeczywistość* rozdzielnie. *nie aktorzy, lecz* rozdzielnie — nie: *nieaktorzy*.",
        ua: "*Niegodziwość* разом. *To nie rzeczywistość* окремо. *nie aktorzy, lecz* окремо — не: *nieaktorzy*."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Lekcje 29–31 · domykamy", ua: "Уроки 29–31 · закриваємо" },
    formula: "s. 60–63  ·  dyktando w zeszycie",
    promptPlace: "before",
    prompt: {
      pl: "Trzy lekcje, jedna sprawa: *odmiana rzeczownika*. Na koniec — krótkie dyktando *nie* w zeszycie (program to lubi). Nie wpisujesz tu całego tekstu — tylko sprawdzasz zasadę.",
      ua: "Три уроки, одна справа: *відмінювання іменника*. Наприкінці — короткий диктант *nie* в зошиті (програма це любить). Тут не вписуєш увесь текст — лише перевіряєш правило."
    },
    items: [
      { pl: "29: most 7=7, pytania M D C B, rodzaj ten/ta/to.", ua: "29: міст 7=7, питання M D C B, рід ten/ta/to." },
      { pl: "30: N Ms W, tabela piasek, e-mail Wiktora, pamiątka.", ua: "30: N Ms W, таблиця piasek, e-mail Віктора, pamiątka." },
      { pl: "31: temat | końcówka | ø | oboczność | nie łącznie / rozdzielnie.", ua: "31: основа | закінчення | ø | чергування | nie разом / окремо." },
      { pl: "Dyktando (zeszyt): *niepogoda, nieprawda, To nie przypadek, niekorzystanie, nieprzyjaciel*.", ua: "Диктант (зошит): *niepogoda, nieprawda, To nie przypadek, niekorzystanie, nieprzyjaciel*." }
    ],
    task: {
      id: "t31-s10-domyk",
      type: "single-choice",
      question: {
        pl: "Który zestaw jest POPRAWNY do dyktanda?",
        ua: "Який набір ПРАВИЛЬНИЙ для диктанту?"
      },
      options: [
        { id: "a", label: { pl: "niepogoda  ·  To nie przypadek  ·  niekorzystanie", ua: "niepogoda  ·  To nie przypadek  ·  niekorzystanie" } },
        { id: "b", label: { pl: "nie pogoda  ·  Tonieprzypadek  ·  nie korzystanie", ua: "nie pogoda  ·  Tonieprzypadek  ·  nie korzystanie" } },
        { id: "c", label: { pl: "Tylko same mity o Heliosie, bez nie.", ua: "Лише міфи про Геліоса, без nie." } }
      ],
      answer: "a",
      hint: {
        pl: "Rzeczownik kleimy. Zaprzeczenie rozdzielamy. Odczasownikowe niekorzystanie — łącznie.",
        ua: "Іменник клеїмо. Заперечення розділяємо. Віддієслівне niekorzystanie — разом."
      },
      explanation: {
        pl: "*niepogoda* łącznie. *To nie przypadek* rozdzielnie. *niekorzystanie* łącznie. To zamyka tematy 29–31.",
        ua: "*niepogoda* разом. *To nie przypadek* окремо. *niekorzystanie* разом. Це закриває теми 29–31."
      }
    }
  }
  ]
};
