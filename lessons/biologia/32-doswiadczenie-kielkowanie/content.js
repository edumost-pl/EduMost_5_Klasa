function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L32_Doswiadczenie_kielkowanie/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wyjaśnisz, czym jest kiełkowanie.", ua: "Поясниш, що таке проростання." },
        { pl: "Sformułujesz problem badawczy i hipotezę.", ua: "Сформулюєш дослідницьку проблему і гіпотезу." },
        { pl: "Wskażesz, że w doświadczeniu zmieniasz jeden czynnik: wodę, temperaturę albo światło.", ua: "Вкажеш, що в досліді змінюєш один чинник: воду, температуру або світло." },
        { pl: "Wskażesz próbę badawczą i kontrolną.", ua: "Вкажеш дослідну і контрольну пробу." },
        { pl: "Odczytasz wynik i napiszesz wniosek.", ua: "Зчитаєш результат і напишеш висновок." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "kiełkowanie", ua: "проростання" },
        { pl: "kiełek", ua: "проросток" },
        { pl: "czynnik", ua: "чинник" },
        { pl: "hipoteza", ua: "гіпотеза" },
        { pl: "próba badawcza", ua: "дослідна проба" },
        { pl: "próba kontrolna", ua: "контрольна проба" },
        { pl: "wynik", ua: "результат" },
        { pl: "wniosek", ua: "висновок" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l32-zacznijmy.png", {
        alt: { pl: "Fasola w słoiku z wilgotną bibułą, widać kiełek", ua: "Квасоля в банці з вологим папером, видно проросток" },
        title: { pl: "Nasiono już nie podróżuje. Zaczyna rosnąć.", ua: "Насінина вже не подорожує. Починає рости." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Przezroczysty słoik, wilgotna bibuła, nasiona fasoli, z jednego wychodzi biały kiełek. Etykieta PL: kiełkowanie. Szkolny stół, dzień. Bez haczyków i skrzydełek (L31). Bez twarzy. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Lekcja 31: nasiono odjechało od matki. Dziś: co musi się stać, żeby z nasiona wyszedł kiełek?",
          ["To ", em("doświadczenie"), " jak na lekcji 2 i 10: jedno pytanie, ", em("jeden czynnik"), ", próba kontrolna, wniosek. Nie atlas drzew (lekcja 33) i nie haczyki łopianu."]
        ],
        ua: [
          "Урок 31: насінина від’їхала від матері. Сьогодні: що має статись, щоб із насінини вийшов проросток?",
          ["Це ", em("дослід"), " як на уроках 2 і 10: одне питання, ", em("один чинник"), ", контрольна проба, висновок. Не атлас дерев (урок 33) і не гачки лопуха."]
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Podróż albo start", ua: "Подорож або старт" },
      visual: tree({
        layout: "fork",
        root: { pl: "nasiono", ua: "насінина" },
        items: [
          { pl: "rozsiew L31", ua: "поширення 31" },
          { pl: "kiełkowanie", ua: "проростання" }
        ]
      }),
      items: [
        { pl: "rozsiew — jak nasiono jedzie", ua: "поширення — як насінина їде" },
        { pl: "kiełkowanie — jak zaczyna rosnąć", ua: "проростання — як починає рости" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Co to kiełkowanie?", ua: "Що таке проростання?" },
      visual: vizGh("l32-kielkowanie.png", {
        alt: { pl: "Nasiono fasoli i kiełek z korzonkiem", ua: "Насінина квасолі і проросток із корінцем" },
        title: { pl: "Kiełek wychodzi z nasiona. To start młodej rośliny.", ua: "Проросток виходить із насінини. Це старт молодої рослини." },
        prompt: { pl: "Edukacyjny schemat 16:9, dwa kadry, etykiety PL. LEWA: suche nasiono fasoli. PRAWA: to samo nasiono z białym kiełkiem i korzonkiem. Napis: kiełkowanie. Bez siewki dębu z liśćmi (L33). Bez pszczoły. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Kiełkowanie"), " to start wzrostu z nasiona: pęka osłona, wychodzi ", em("kiełek"), " (często najpierw korzonek)."],
          "Nasiono ma zapas pokarmu dla pierwszych dni. To nie rozsiew (haczyki, puch) i nie zapylenie kwiatu."
        ],
        ua: [
          ["", em("Проростання"), " — старт росту з насінини: тріскає оболонка, виходить ", em("проросток"), " (часто спочатку корінець)."],
          "У насінині є запас поживи на перші дні. Це не поширення (гачки, пух) і не запилення квітки."
        ]
      },
      task: {
        id: "l32-e1",
        type: "single-choice",
        question: { pl: "Kiełkowanie to:", ua: "Проростання — це:" },
        options: [
          { id: "a", label: { pl: "start wzrostu z nasiona — wychodzi kiełek", ua: "старт росту з насінини — виходить проросток" } },
          { id: "b", label: { pl: "haczyki na sierści (rozsiew, L31)", ua: "гачки на шерсті (поширення, урок 31)" } },
          { id: "c", label: { pl: "przeniesienie pyłku na słupek (L30)", ua: "перенесення пилку на маточку (урок 30)" } }
        ],
        answer: "a",
        explanation: { pl: "Kiełek z nasiona. Haczyki = L31. Pyłek = L30.", ua: "Проросток із насінини." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od nasiona do kiełka", ua: "Від насінини до проростка" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Nasiono, warunki, kiełek", ua: "Насінина, умови, проросток" },
        items: [
          { pl: "nasiono", ua: "насінина" },
          { pl: "warunki (np. woda)", ua: "умови (напр. вода)" },
          { pl: "kiełek", ua: "проросток" },
          { pl: "młoda roślina", ua: "молода рослина" }
        ],
        caption: { pl: "jak nasiono tu trafiło — lekcja 31", ua: "як насінина сюди потрапила — урок 31" }
      }),
      items: [
        { pl: "najpierw nasiono w owocu (lekcje 29–30)", ua: "спочатку насінина в плоді (уроки 29–30)" },
        { pl: "podróż — lekcja 31", ua: "подорож — урок 31" },
        { pl: "dziś: czy kiełkuje", ua: "сьогодні: чи проростає" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Problem i hipoteza", ua: "Проблема і гіпотеза" },
      visual: vizGh("l32-hipoteza.png", {
        alt: { pl: "Tablica: pytanie o wodę i hipoteza", ua: "Дошка: питання про воду і гіпотеза" },
        title: { pl: "Najpierw pytanie. Potem przypuszczenie do sprawdzenia.", ua: "Спочатку питання. Потім припущення для перевірки." },
        prompt: { pl: "Szkolna tablica 16:9, napisy PL. Problem: Czy do kiełkowania fasoli potrzebna jest woda? Hipoteza: Fasola kiełkuje, gdy bibuła jest wilgotna. Bez gotowego wniosku jako pewnika. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Problem badawczy"), " (pytanie): Czy do kiełkowania fasoli potrzebna jest woda?"],
          ["", em("Hipoteza"), " (przypuszczenie): Fasola kiełkuje, gdy bibuła jest wilgotna."],
          "Na lekcji robimy wodę, bo wynik bywa wyraźny. Wolno wybrać temperaturę albo światło — wtedy to jest twoje pytanie, nie woda."
        ],
        ua: [
          ["", em("Дослідницька проблема"), " (питання): Чи для проростання квасолі потрібна вода?"],
          ["", em("Гіпотеза"), " (припущення): Квасоля проростає, коли папір вологий."],
          "На уроці робимо воду, бо результат часто виразний. Можна вибрати температуру або світло — тоді це твоє питання, не вода."
        ]
      },
      task: {
        id: "l32-e2",
        type: "single-choice",
        question: { pl: "Która para jest poprawna?", ua: "Яка пара правильна?" },
        options: [
          { id: "a", label: { pl: "problem — pytanie; hipoteza — przypuszczenie do sprawdzenia", ua: "проблема — питання; гіпотеза — припущення для перевірки" } },
          { id: "b", label: { pl: "hipoteza — pewnik wpisany przed doświadczeniem", ua: "гіпотеза — аксіома, вписана перед дослідом" } },
          { id: "c", label: { pl: "problem — nazwa skrzydełka klonu", ua: "проблема — назва крильця клена" } }
        ],
        answer: "a",
        explanation: { pl: "Jak na lekcji 2: pytanie, potem hipoteza, potem test.", ua: "Як на уроці 2." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jeden czynnik", ua: "Один чинник" },
      visual: vizGh("l32-czynniki.png", {
        alt: { pl: "Trzy karty: woda, termometr, światło — zaznaczona jedna", ua: "Три картки: вода, термометр, світло — позначена одна" },
        title: { pl: "Wybierz jedną kartę. Reszty nie ruszaj.", ua: "Вибери одну картку. Решти не чіпай." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy karty, etykiety PL: woda (kropla); temperatura (termometr); światło (słońce / szafa). Jedna karta pogrubiona: woda. Napis: w jednym doświadczeniu — jeden czynnik. Przekreślone: woda + lodówka naraz. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Kiełkowanie zależy od wybranego ", em("czynnika"), ": ", em("wody"), ", ", em("temperatury"), " albo ", em("światła"), "."],
          "W jednym doświadczeniu zmieniasz tylko jeden. Reszta taka sama: te same nasiona, ten sam czas, ten sam słoik.",
          "Błąd: mokra fasola w lodówce kontra sucha na oknie. Wtedy nie wiesz, co zadziałało."
        ],
        ua: [
          ["Проростання залежить від вибраного ", em("чинника"), ": ", em("води"), ", ", em("температури"), " або ", em("світла"), "."],
          "В одному досліді змінюєш лише один. Решта така сама: те саме насіння, той самий час, та сама банка.",
          "Помилка: волога квасоля в холодильнику проти сухої на вікні. Тоді не знаєш, що подіяло."
        ]
      },
      task: {
        id: "l32-e3",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o czynniku w tym doświadczeniu.", ua: "Познач правдиві речення про чинник у цьому досліді." },
        options: [
          { id: "a", label: { pl: "wolno wybrać wodę, temperaturę albo światło", ua: "можна вибрати воду, температуру або світло" } },
          { id: "b", label: { pl: "w jednym teście zmieniasz tylko jeden z nich", ua: "в одному тесті змінюєш лише один із них" } },
          { id: "c", label: { pl: "mieszasz wodę, lodówkę i szafę naraz, żeby było szybciej", ua: "мішаєш воду, холодильник і шафу разом, щоб швидше" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Jeden czynnik. Lista: woda, temperatura, światło.", ua: "Один чинник." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy możliwe karty", ua: "Три можливі картки" },
      visual: tree({
        layout: "nested",
        root: { pl: "jeden czynnik", ua: "один чинник" },
        groups: [
          {
            title: { pl: "woda", ua: "вода" },
            items: [{ pl: "mokra / sucha", ua: "волога / суха" }]
          },
          {
            title: { pl: "ciepło", ua: "тепло" },
            items: [{ pl: "pokój / lód", ua: "кімната / лід" }]
          },
          {
            title: { pl: "światło", ua: "світло" },
            items: [{ pl: "okno / szafa", ua: "вікно / шафа" }]
          }
        ]
      }),
      items: [
        { pl: "na lekcji przykład: woda", ua: "на уроці приклад: вода" },
        { pl: "temperatura: pokój kontra lodówka", ua: "температура: кімната проти холодильника" },
        { pl: "światło: tylko jeśli to twój wybrany czynnik", ua: "світло: лише якщо це твій вибраний чинник" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Dwie próby: woda", ua: "Дві проби: вода" },
      visual: vizGh("l32-proby.png", {
        alt: { pl: "Dwa słoiki: wilgotna bibuła i sucha bibuła", ua: "Дві банки: вологий папір і сухий папір" },
        title: { pl: "Różni je tylko woda. Reszta taka sama.", ua: "Різниця лише у воді. Решта така сама." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9, dwa identyczne słoiki, etykiety PL. LEWY: wilgotna bibuła, fasola, napis: próba badawcza — jest woda. PRAWY: sucha bibuła, fasola, napis: próba kontrolna — brak wody. Ten sam stół, to samo światło. Bez pleśni w grozie. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Próba badawcza"), " — wilgotna bibuła (jest woda, czynnik obecny)."],
          ["", em("Próba kontrolna"), " — sucha bibuła (brak wody, do porównania)."],
          "Te same nasiona fasoli, ten sam słoik, ta sama temperatura, kilka dni. Słoika nie zakręcaj na głucho — nasiono też oddycha.",
          "Spleśniałych nasion nie jesz. Wody ze słoika nie pijesz."
        ],
        ua: [
          ["", em("Дослідна проба"), " — вологий папір (є вода, чинник присутній)."],
          ["", em("Контрольна проба"), " — сухий папір (немає води, для порівняння)."],
          "Те саме насіння квасолі, та сама банка, та сама температура, кілька днів. Банку не закручуй наглухо — насінина теж дихає.",
          "Запліснявіле насіння не їси. Воду з банки не п’єш."
        ]
      },
      task: {
        id: "l32-e4",
        type: "true-false",
        question: { pl: "Przy teście wody: wilgotna bibuła to próba badawcza, sucha — kontrolna. Reszta warunków taka sama.", ua: "У тесті води: вологий папір — дослідна проба, сухий — контрольна. Решта умов така сама." },
        answer: true,
        explanation: { pl: "Jak na lekcji 2: badawcza ma czynnik, kontrolna do porównania.", ua: "Як на уроці 2." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Porównaj słoiki", ua: "Порівняй банки" },
      visual: tree({
        layout: "fork",
        root: { pl: "woda", ua: "вода" },
        items: [
          { pl: "z wodą", ua: "з водою" },
          { pl: "bez wody", ua: "без води" }
        ]
      }),
      items: [
        { pl: "z wodą — próba badawcza", ua: "з водою — дослідна проба" },
        { pl: "bez wody — próba kontrolna", ua: "без води — контрольна проба" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Wynik i wniosek", ua: "Результат і висновок" },
      visual: vizGh("l32-wynik.png", {
        alt: { pl: "Mokry słoik z kiełkiem, suchy bez kiełka", ua: "Волога банка з проростком, суха без проростка" },
        title: { pl: "Widzisz różnicę. Potem jedno zdanie: wniosek.", ua: "Бачиш різницю. Потім одне речення: висновок." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry po kilku dniach, etykiety PL. LEWA: wilgotna bibuła, kiełek, napis: wynik — kiełkuje. PRAWA: sucha bibuła, nasiono bez kiełka, napis: wynik — nie kiełkuje. Na dole: Wniosek: do kiełkowania fasoli potrzebna jest woda. Bez drzew liściastych. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Wynik"), " to to, co widać: mokra fasola kiełkuje, sucha — nie (typowy przebieg szkolny)."],
          ["", em("Wniosek"), " odpowiada na problem: do kiełkowania fasoli potrzebna jest woda."],
          "Jeśli wybierzesz lodówkę: wynik może być „w zimnie nie kiełkuje albo kiełkuje wolniej”. Wniosek musi pasować do twojego czynnika, nie do sąsiada z inną kartą."
        ],
        ua: [
          ["", em("Результат"), " — те, що видно: волога квасоля проростає, суха — ні (типовий шкільний перебіг)."],
          ["", em("Висновок"), " відповідає на проблему: для проростання квасолі потрібна вода."],
          "Якщо вибереш холодильник: результат може бути «в холоді не проростає або проростає повільніше». Висновок має пасувати до твого чинника."
        ]
      },
      task: {
        id: "l32-e5",
        type: "single-choice",
        question: { pl: "Mokra fasola kiełkuje, sucha nie. Jaki wniosek?", ua: "Волога квасоля проростає, суха ні. Який висновок?" },
        options: [
          { id: "a", label: { pl: "do kiełkowania fasoli potrzebna jest woda", ua: "для проростання квасолі потрібна вода" } },
          { id: "b", label: { pl: "nasiona podróżują haczykami", ua: "насіння подорожує гачками" } },
          { id: "c", label: { pl: "jodyna barwi skrobię (lekcja 10)", ua: "йод забарвлює крохмаль (урок 10)" } }
        ],
        answer: "a",
        explanation: { pl: "Wniosek z wyniku o wodzie. Haczyki = L31. Jodyna = L10.", ua: "Висновок з результату про воду." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od pytania do wniosku", ua: "Від питання до висновку" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Problem, próby, wynik, wniosek", ua: "Проблема, проби, результат, висновок" },
        items: [
          { pl: "pytanie / hipoteza", ua: "питання / гіпотеза" },
          { pl: "dwie próby", ua: "дві проби" },
          { pl: "wynik", ua: "результат" },
          { pl: "wniosek", ua: "висновок" }
        ],
        caption: { pl: "jak na lekcji 2 — jeden czynnik", ua: "як на уроці 2 — один чинник" }
      }),
      items: [
        { pl: "wynik = co widać", ua: "результат = що видно" },
        { pl: "wniosek = odpowiedź na problem", ua: "висновок = відповідь на проблему" },
        { pl: "nie zgaduj atlasu owoców", ua: "не вгадуй атлас плодів" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Kiełkowanie", ua: "Практика. Проростання" },
      task: {
        id: "l32-p1",
        type: "single-choice",
        question: { pl: "Kiełkowanie poznasz po tym, że:", ua: "Проростання впізнаєш по тому, що:" },
        options: [
          { id: "a", label: { pl: "z nasiona wychodzi kiełek", ua: "з насінини виходить проросток" } },
          { id: "b", label: { pl: "puch mniszka leci z wiatrem", ua: "пух кульбаби летить вітром" } },
          { id: "c", label: { pl: "pszczoła siada na płatku", ua: "бджола сідає на пелюстку" } }
        ],
        answer: "a",
        explanation: { pl: "Kiełek. Puch = L31. Pszczoła = zapylenie.", ua: "Проросток." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Problem i hipoteza", ua: "Проблема і гіпотеза" },
      task: {
        id: "l32-p2",
        type: "true-false",
        question: { pl: "Problem to pytanie (np. czy woda jest potrzebna). Hipoteza to przypuszczenie, które sprawdzisz.", ua: "Проблема — питання (наприклад, чи потрібна вода). Гіпотеза — припущення, яке перевіриш." },
        answer: true,
        explanation: { pl: "Pytanie → hipoteza → test.", ua: "Питання → гіпотеза → перевірка." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jeden czynnik", ua: "Один чинник" },
      task: {
        id: "l32-p3",
        type: "single-choice",
        question: { pl: "W jednym doświadczeniu o kiełkowaniu zmieniasz:", ua: "В одному досліді про проростання змінюєш:" },
        options: [
          { id: "a", label: { pl: "jeden czynnik: wodę albo temperaturę albo światło", ua: "один чинник: воду або температуру або світло" } },
          { id: "b", label: { pl: "wszystko naraz, żeby „więcej nauki”", ua: "усе разом, щоб «більше науки»" } },
          { id: "c", label: { pl: "gatunek dębu i buka (lekcja 33)", ua: "вид дуба і бука (урок 33)" } }
        ],
        answer: "a",
        explanation: { pl: "Jeden z trzech. Drzewa = L33.", ua: "Один із трьох." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Próby", ua: "Проби" },
      task: {
        id: "l32-p4",
        type: "single-choice",
        question: { pl: "Sucha bibuła przy teście wody to:", ua: "Сухий папір у тесті води — це:" },
        options: [
          { id: "a", label: { pl: "próba kontrolna — brak czynnika, do porównania", ua: "контрольна проба — немає чинника, для порівняння" } },
          { id: "b", label: { pl: "próba badawcza — jest woda", ua: "дослідна проба — є вода" } },
          { id: "c", label: { pl: "szyszka świerka", ua: "шишка ялини" } }
        ],
        answer: "a",
        explanation: { pl: "Sucha = kontrolna. Mokra = badawcza.", ua: "Суха = контрольна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wniosek", ua: "Висновок" },
      task: {
        id: "l32-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o końcu doświadczenia.", ua: "Познач правдиві речення про кінець досліду." },
        options: [
          { id: "a", label: { pl: "wynik to to, co widać w słoikach", ua: "результат — те, що видно в банках" } },
          { id: "b", label: { pl: "wniosek odpowiada na problem", ua: "висновок відповідає на проблему" } },
          { id: "c", label: { pl: "wniosek to lista drzew liściastych", ua: "висновок — список листяних дерев" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Wynik + wniosek. Drzewa = L33.", ua: "Результат + висновок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Kiełkowanie", ua: "Перевірка 1. Проростання" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l32-s1",
        type: "single-choice",
        question: { pl: "Czym jest kiełkowanie?", ua: "Що таке проростання?" },
        options: [
          { id: "a", label: { pl: "start wzrostu z nasiona — pojawia się kiełek", ua: "старт росту з насінини — з’являється проросток" } },
          { id: "b", label: { pl: "lot skrzydełka klonu", ua: "політ крильця клена" } },
          { id: "c", label: { pl: "barwienie liścia jodyną", ua: "забарвлення листка йодом" } }
        ],
        answer: "a",
        explanation: { pl: "Kiełek z nasiona.", ua: "Проросток із насінини." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Problem i hipoteza", ua: "Перевірка 2. Проблема і гіпотеза" },
      task: {
        id: "l32-s2",
        type: "single-choice",
        question: { pl: "Jak sformułujesz problem i hipotezę przy teście wody?", ua: "Як сформулюєш проблему і гіпотезу в тесті води?" },
        options: [
          { id: "a", label: { pl: "problem: czy woda jest potrzebna?; hipoteza: kiełkuje, gdy jest wilgotno", ua: "проблема: чи потрібна вода?; гіпотеза: проростає, коли волого" } },
          { id: "b", label: { pl: "hipoteza to już pewny wniosek przed startem", ua: "гіпотеза — уже певний висновок перед стартом" } },
          { id: "c", label: { pl: "problem: jak rozpoznać buk", ua: "проблема: як розпізнати бук" } }
        ],
        answer: "a",
        explanation: { pl: "Pytanie i przypuszczenie. Buk = L33.", ua: "Питання і припущення." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Jeden czynnik", ua: "Перевірка 3. Один чинник" },
      task: {
        id: "l32-s3",
        type: "true-false",
        question: { pl: "W doświadczeniu o kiełkowaniu zmieniasz jeden czynnik: wodę, temperaturę albo światło — nie wszystkie naraz.", ua: "У досліді про проростання змінюєш один чинник: воду, температуру або світло — не всі разом." },
        answer: true,
        explanation: { pl: "Jedna karta z trzech.", ua: "Одна картка з трьох." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Próby", ua: "Перевірка 4. Проби" },
      task: {
        id: "l32-s4",
        type: "single-choice",
        question: { pl: "Przy teście wody wskażesz próby tak:", ua: "У тесті води вкажеш проби так:" },
        options: [
          { id: "a", label: { pl: "badawcza — wilgotna bibuła; kontrolna — sucha", ua: "дослідна — вологий папір; контрольна — сухий" } },
          { id: "b", label: { pl: "kontrolna ma wodę i lodówkę naraz", ua: "контрольна має воду і холодильник разом" } },
          { id: "c", label: { pl: "badawcza to pszczoła na kwiecie", ua: "дослідна — бджола на квітці" } }
        ],
        answer: "a",
        explanation: { pl: "Czynnik obecny vs brak. Reszta taka sama.", ua: "Чинник є проти немає." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wniosek", ua: "Перевірка 5. Висновок" },
      task: {
        id: "l32-s5",
        type: "single-choice",
        question: { pl: "Odczytujesz: mokra fasola kiełkuje, sucha nie. Wniosek:", ua: "Зчитуєш: волога квасоля проростає, суха ні. Висновок:" },
        options: [
          { id: "a", label: { pl: "do kiełkowania fasoli potrzebna jest woda", ua: "для проростання квасолі потрібна вода" } },
          { id: "b", label: { pl: "to dowód, że nasiona rozsiewa wiatr", ua: "це доказ, що насіння поширює вітер" } },
          { id: "c", label: { pl: "balon z drożdżami się nadmie (L13)", ua: "кулька з дріжджами надується (урок 13)" } }
        ],
        answer: "a",
        explanation: { pl: "Wniosek pasuje do wyniku i do pytania o wodę.", ua: "Висновок пасує до результату." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "doświadczenie", ua: "дослід" },
        items: [
          { pl: "jeden czynnik", ua: "один чинник" },
          { pl: "dwie próby", ua: "дві проби" },
          { pl: "wniosek", ua: "висновок" }
        ]
      }),
      text: {
        pl: [
          "Kiełkowanie: z nasiona wychodzi kiełek.",
          "Problem i hipoteza — jak na lekcji 2.",
          "Jeden czynnik: woda, temperatura albo światło.",
          "Badawcza ma czynnik. Kontrolna do porównania.",
          "Wynik = co widać. Wniosek = odpowiedź.",
          "Rozsiew — lekcja 31. Drzewa liściaste — 33."
        ],
        ua: [
          "Проростання: з насінини виходить проросток.",
          "Проблема і гіпотеза — як на уроці 2.",
          "Один чинник: вода, температура або світло.",
          "Дослідна має чинник. Контрольна для порівняння.",
          "Результат = що видно. Висновок = відповідь.",
          "Поширення — урок 31. Листяні дерева — 33."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić kiełkowanie.", ua: "Можу пояснити проростання." },
        { pl: "Potrafię sformułować problem i hipotezę.", ua: "Можу сформулювати проблему і гіпотезу." },
        { pl: "Potrafię wybrać jeden czynnik: wodę, temperaturę albo światło.", ua: "Можу вибрати один чинник: воду, температуру або світло." },
        { pl: "Potrafię wskazać próbę badawczą i kontrolną.", ua: "Можу вказати дослідну і контрольну пробу." },
        { pl: "Potrafię odczytać wynik i napisać wniosek.", ua: "Можу зчитати результат і написати висновок." }
      ]
    }
  ]
};
