function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L21_Tkanki_roslinne/images/";

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
        { pl: "Wyjaśnisz, czym jest tkanka.", ua: "Поясниш, що таке тканина." },
        { pl: "Odróżnisz tkankę twórczą od tkanek stałych.", ua: "Відрізниш твірну тканину від сталих тканин." },
        { pl: "Powiesz, do czego służy tkanka okrywająca.", ua: "Скажеш, для чого служить покривна тканина." },
        { pl: "Porównasz tkankę miękiszową i wzmacniającą.", ua: "Порівняєш паренхіму і механічну тканину." },
        { pl: "Rozróżnisz drewno i łyko w tkance przewodzącej.", ua: "Розрізниш деревину і луб у провідній тканині." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "tkanka", ua: "тканина" },
        { pl: "tkanka twórcza", ua: "твірна тканина" },
        { pl: "tkanka okrywająca", ua: "покривна тканина" },
        { pl: "tkanka miękiszowa", ua: "паренхіма" },
        { pl: "tkanka wzmacniająca", ua: "механічна тканина" },
        { pl: "tkanka przewodząca", ua: "провідна тканина" },
        { pl: "drewno", ua: "деревина" },
        { pl: "łyko", ua: "луб" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l21-zacznijmy.png", {
        alt: { pl: "Roślina z korzeniem, łodygą i liśćmi", ua: "Рослина з коренем, стеблом і листками" },
        title: { pl: "Organy już znasz z nazwy. Dziś — z czego są złożone.", ua: "Органи вже знаєш з назви. Сьогодні — з чого вони складені." },
        prompt: { pl: "Edukacyjna infografika 16:9. Sadzonka fasoli: korzeń, łodyga, liście. Etykiety PL: organy rośliny. Mały napis: tkanki poznasz dziś; korzeń, łodyga, liść — kolejne lekcje. Bez kwiatu, owocu i nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na lekcji 5 komórki składały się w tkankę, a tkanki w narząd. Dziś ta sama idea u roślin.",
          "Korzeń, łodyga i liść to organy — ich budowę zobaczysz na lekcjach 22–24. Najpierw pięć rodzajów tkanek, z których te organy są zbudowane.",
          "Nie mieszamy tu kwiatu, owocu ani nasion. Nie opisujemy przekroju korzenia ani warstw liścia."
        ],
        ua: [
          "На уроці 5 клітини складалися в тканину, а тканини — в орган. Сьогодні та сама ідея в рослин.",
          "Корінь, стебло і листок — органи. Їхню будову побачиш на уроках 22–24. Спочатку п’ять тканин, з яких ці органи збудовані.",
          "Не мішаємо квітку, плід і насінину. Не описуємо переріз кореня і шари листка."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Czym jest tkanka?", ua: "Що таке тканина?" },
      visual: vizGh("l21-tkanka.png", {
        alt: { pl: "Podobne komórki roślinne ułożone we wspólną warstwę", ua: "Подібні рослинні клітини в спільному шарі" },
        title: { pl: "Podobne komórki. Jedna funkcja. To tkanka.", ua: "Подібні клітини. Одна функція. Це тканина." },
        prompt: { pl: "Edukacyjny schemat 16:9. Kilkanaście prostokątnych komórek roślinnych obok siebie, cienkie ściany, duże wakuole. Etykieta PL: tkanka = zespół podobnych komórek o wspólnej funkcji. Bez chloroplastów jako jedynego tematu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Tkanka"), " to zespół podobnych komórek o wspólnej funkcji. Tak było na lekcji 5 przy zwierzętach. U roślin zasada jest ta sama."],
          "Jedna komórka miękiszu niewiele zmagazynuje. Warstwa takich komórek już trzyma zapas skrobi albo wodę.",
          "Z tkanek powstają organy. Organy razem tworzą organizm rośliny."
        ],
        ua: [
          ["", em("Тканина"), " — це група подібних клітин зі спільною функцією. Так було на уроці 5 у тварин. У рослин правило те саме."],
          "Одна клітина паренхіми мало запасе. Шар таких клітин уже тримає запас крохмалю або воду.",
          "З тканин виникають органи. Органи разом творять організм рослини."
        ]
      },
      task: {
        id: "l21-e1",
        type: "single-choice",
        question: { pl: "Czym jest tkanka?", ua: "Що таке тканина?" },
        options: [
          { id: "a", label: { pl: "zespół podobnych komórek o wspólnej funkcji", ua: "група подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "kapsyd wirusa", ua: "капсид вірусу" } },
          { id: "c", label: { pl: "grzybnia ze strzępek", ua: "грибниця з гіфів" } }
        ],
        answer: "a",
        explanation: { pl: "Jak na lekcji 5. Nie wirus i nie grzyb.", ua: "Як на уроці 5. Не вірус і не гриб." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od komórki do rośliny", ua: "Від клітини до рослини" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Drabina: komórka, tkanka, organ, roślina", ua: "Драбина: клітина, тканина, орган, рослина" },
        items: [
          { pl: "komórka", ua: "клітина" },
          { pl: "tkanka", ua: "тканина" },
          { pl: "organ (korzeń, łodyga, liść)", ua: "орган (корінь, стебло, листок)" },
          { pl: "organizm rośliny", ua: "організм рослини" }
        ],
        caption: { pl: "od najmniejszej części do całej rośliny", ua: "від найменшої частини до цілої рослини" }
      }),
      items: [
        { pl: "komórka → tkanka → organ → organizm", ua: "клітина → тканина → орган → організм" },
        { pl: "u roślin organy na razie nazywamy: korzeń, łodyga, liść", ua: "у рослин органи поки називаємо: корінь, стебло, листок" }
      ],
      text: {
        pl: [
          "Kolejność z lekcji 5, tylko na roślinie: komórka → tkanka → organ → organizm.",
          "Nie uczysz się dziś, jak wygląda przekrój korzenia albo liścia. Uczysz się tkanek, które tam pracują."
        ],
        ua: [
          "Послідовність з уроку 5, лише на рослині: клітина → тканина → орган → організм.",
          "Сьогодні не вчиш переріз кореня чи листка. Вчиш тканини, які там працюють."
        ]
      },
      task: {
        id: "l21-e2",
        type: "true-false",
        question: { pl: "U roślin kolejność jest taka: komórka → tkanka → organ → organizm.", ua: "У рослин послідовність така: клітина → тканина → орган → організм." },
        answer: true,
        explanation: { pl: "Ta sama hierarchia co na lekcji 5.", ua: "Та сама ієрархія, що на уроці 5." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Twórcza i stałe", ua: "Твірна і сталі" },
      visual: tree({
        layout: "nested",
        root: { pl: "tkanki roślinne", ua: "рослинні тканини" },
        groups: [
          {
            title: { pl: "twórcza", ua: "твірна" },
            items: [
              { pl: "stożek pędu", ua: "конус пагона" },
              { pl: "stożek korzenia", ua: "конус кореня" }
            ]
          },
          {
            title: { pl: "stałe", ua: "сталі" },
            items: [
              { pl: "okrywająca", ua: "покривна" },
              { pl: "miękiszowa", ua: "паренхіма" },
              { pl: "wzmacniająca", ua: "механічна" },
              { pl: "przewodząca", ua: "провідна" }
            ]
          }
        ]
      }),
      items: [
        { pl: "tkanka twórcza — komórki się dzielą, roślina przyrasta", ua: "твірна тканина — клітини діляться, рослина приростає" },
        { pl: "tkanki stałe — już wyspecjalizowane, pełnią konkretną pracę", ua: "сталі тканини — уже спеціалізовані, виконують конкретну роботу" }
      ],
      text: {
        pl: [
          ["", em("Tkanka twórcza"), " ma komórki, które się dzielą. Dzięki niej pęd i korzeń wydłużają się."],
          ["", em("Tkanki stałe"), " to reszta: okrywająca, miękiszowa, wzmacniająca i przewodząca. Ich komórki są już „ustawione” do jednej pracy i zwykle nie dzielą się tak jak twórcze."],
          "Najpierw ten widelec. Potem każda gałąź osobno."
        ],
        ua: [
          ["", em("Твірна тканина"), " має клітини, які діляться. Завдяки їй пагін і корінь видовжуються."],
          ["", em("Сталі тканини"), " — решта: покривна, паренхіма, механічна і провідна. Їхні клітини вже «налаштовані» на одну роботу."],
          "Спочатку ця розвилка. Потім кожна гілка окремо."
        ]
      },
      task: {
        id: "l21-e3",
        type: "single-choice",
        question: { pl: "Czym tkanka twórcza różni się od tkanek stałych?", ua: "Чим твірна тканина відрізняється від сталих?" },
        options: [
          { id: "a", label: { pl: "twórcza — komórki się dzielą i roślina rośnie; stałe — już wyspecjalizowane do jednej funkcji", ua: "твірна — клітини діляться і рослина росте; сталі — уже спеціалізовані до однієї функції" } },
          { id: "b", label: { pl: "twórcza jest tylko u wirusów", ua: "твірна є лише у вірусів" } },
          { id: "c", label: { pl: "stałe to to samo co grzybnia", ua: "сталі — те саме, що грибниця" } }
        ],
        answer: "a",
        explanation: { pl: "Twórcza = podziały. Stałe = gotowa praca (okrywa, zapas, sztywność, transport).", ua: "Твірна = поділи. Сталі = готова робота." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tkanka twórcza", ua: "Твірна тканина" },
      visual: vizGh("l21-tworcza.png", {
        alt: { pl: "Stożki wzrostu na wierzchołku pędu i korzenia", ua: "Конуси наростання на верхівці пагона і кореня" },
        title: { pl: "Roślina przyrasta na końcach. Tam są stożki wzrostu.", ua: "Рослина приростає на кінцях. Там конуси наростання." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: wierzchołek pędu z etykietą PL: stożek wzrostu pędu — tkanka twórcza. PRAWA: czubek korzenia, etykieta: stożek wzrostu korzenia. Małe gęste komórki. Napis: tu komórki się dzielą. Bez czepca korzeniowego jako lekcji, bez słojów drewna, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Komórki ", em("tkanki twórczej"), " są zwykle małe, mają cienkie ściany i duże jądra. Dzielą się. Z nowych komórek powstają tkanki stałe."],
          ["Znajdziesz je w ", em("stożku wzrostu"), " pędu (czubek łodygi) i w stożku wzrostu korzenia (czubek korzenia)."],
          "Dlatego trawa odrasta po skoszeniu od dołu pędu, a korzeń wydłuża się na końcu — nie „w środku całej rośliny naraz”. Strefy korzenia poznasz na lekcji 22."
        ],
        ua: [
          ["Клітини ", em("твірної тканини"), " зазвичай малі, з тонкими стінками і великими ядрами. Діляться. З нових клітин постають сталі тканини."],
          ["Знайдеш їх у ", em("конусі наростання"), " пагона (верхівка стебла) і в конусі наростання кореня."],
          "Тому корінь видовжується на кінці — не «всередині цілої рослини одразу». Зони кореня — урок 22."
        ]
      },
      task: {
        id: "l21-e4",
        type: "true-false",
        question: { pl: "Tkanka twórcza jest w stożkach wzrostu pędu i korzenia — tam komórki się dzielą.", ua: "Твірна тканина є в конусах наростання пагона і кореня — там клітини діляться." },
        answer: true,
        explanation: { pl: "Czubek pędu i czubek korzenia. Nie cała roślina naraz.", ua: "Верхівка пагона і кінчик кореня." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tkanka okrywająca", ua: "Покривна тканина" },
      visual: vizGh("l21-okrywajaca.png", {
        alt: { pl: "Skórka z kutykulą, szparką i włośnikiem", ua: "Шкірка з кутикулою, продихом і кореневим волоском" },
        title: { pl: "Skórka chroni. Szparki i włośniki to jej „narzędzia”.", ua: "Шкірка захищає. Продихи і волоски — її «знаряддя»." },
        prompt: { pl: "Edukacyjna plansza 16:9, trzy kadry, etykiety PL. 1 skórka liścia z cienką kutykulą. 2 aparat szparkowy (dwie komórki jak fasolki) — gazy. 3 włośnik na korzeniu — woda i sole. Napis: tkanka okrywająca. Bez warstw miękiszu liścia, bez pełnego przekroju korzenia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Tkanka okrywająca"), " to zwykle ", em("skórka"), ". Okrywa młodą roślinę jak cienka folia: chroni przed urazami, zarazkami i nadmierną utratą wody."],
          ["Na powierzchni liścia i łodygi bywa ", em("kutykula"), " — woskowa warstewka. ", em("Szparki"), " (komórki szparkowe z lekcji 7) to furtki na gazy: dwutlenek węgla wchodzi do fotosyntezy, tlen wychodzi."],
          ["", em("Włośniki"), " to wypustki skórki korzenia. Zwiększają powierzchnię i ułatwiają pobieranie wody oraz soli. Szczegóły korzenia — lekcja 22. Warstwy liścia — lekcja 24."]
        ],
        ua: [
          ["", em("Покривна тканина"), " — зазвичай ", em("шкірка"), ". Вкриває молоду рослину як тонка плівка: захищає від ушкоджень, мікробів і надмірної втрати води."],
          ["На поверхні листка і стебла буває ", em("кутикула"), " — восковий шар. ", em("Продихи"), " (продихові клітини з уроку 7) — хвіртки для газів."],
          ["", em("Кореневі волоски"), " — вирости шкірки кореня. Збільшують поверхню і полегшують вбирання води та солей. Подробиці кореня — урок 22. Шари листка — урок 24."]
        ]
      },
      task: {
        id: "l21-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz, co należy do tkanki okrywającej.", ua: "Познач, що належить до покривної тканини." },
        options: [
          { id: "a", label: { pl: "skórka (chroni roślinę)", ua: "шкірка (захищає рослину)" } },
          { id: "b", label: { pl: "szparki (wymiana gazów)", ua: "продихи (обмін газів)" } },
          { id: "c", label: { pl: "włośniki (woda i sole)", ua: "кореневі волоски (вода і солі)" } },
          { id: "d", label: { pl: "kapsyd wirusa", ua: "капсид вірусу" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Skórka + szparki + włośniki. To L7 kształty, dziś nazwane tkanką okrywającą.", ua: "Шкірка + продихи + волоски." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tkanka miękiszowa", ua: "Паренхіма" },
      visual: vizGh("l21-miekisz.png", {
        alt: { pl: "Miękisz wypełnia organ i magazynuje zapasy", ua: "Паренхіма виповнює орган і запасає" },
        title: { pl: "Wypełnia. Magazynuje. W liściu bywa zielona.", ua: "Виповнює. Запасає. У листку буває зеленою." },
        prompt: { pl: "Edukacyjna infografika 16:9. Przekrój łodygi z jasnym wypełnieniem, etykieta PL: tkanka miękiszowa. Małe ikony: skrobia (ziarna), woda. W kadrze liścia kilka zielonych komórek z chloroplastami i napis: fotosynteza — szczegóły liścia na lekcji 24. Bez palisadowego i gąbczastego jako nazw do wykuć. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Tkanka miękiszowa"), " wypełnia organy. Jej komórki mają zwykle cienkie ściany i duże wakuole."],
          "Tu roślina trzyma zapasy: wodę, cukry, skrobię (to znasz z lekcji 4 i 9).",
          "W liściach miękisz bywa zielony — ma chloroplasty i prowadzi fotosyntezę. Jak ułożone są warstwy w blaszce liścia, zobaczysz na lekcji 24. Dziś wystarczy: miękisz = wypełnienie i magazyn, a w liściu także „fabryka cukru”."
        ],
        ua: [
          ["", em("Паренхіма"), " виповнює органи. Її клітини зазвичай з тонкими стінками і великими вакуолями."],
          "Тут рослина тримає запаси: воду, цукри, крохмаль (уроки 4 і 9).",
          "У листках паренхіма буває зеленою — має хлоропласти і веде фотосинтез. Шари пластинки листка — урок 24. Сьогодні досить: паренхіма = наповнення і запас, а в листку ще «фабрика цукру»."
        ]
      },
      task: {
        id: "l21-e6",
        type: "single-choice",
        question: { pl: "Do czego służy tkanka miękiszowa?", ua: "Для чого служить паренхіма?" },
        options: [
          { id: "a", label: { pl: "wypełnia organy i magazynuje zapasy; w liściu może prowadzić fotosyntezę", ua: "виповнює органи і запасає; у листку може вести фотосинтез" } },
          { id: "b", label: { pl: "to to samo co kapsyd", ua: "це те саме, що капсид" } },
          { id: "c", label: { pl: "buduje tylko owocnik grzyba", ua: "будує лише плодове тіло гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Wypełnienie + zapas. Zielony miękisz liścia = fotosynteza (L9), bez warstw L24.", ua: "Наповнення + запас. Зелена паренхіма листка = фотосинтез." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tkanka wzmacniająca", ua: "Механічна тканина" },
      visual: vizGh("l21-wzmacniajaca.png", {
        alt: { pl: "Sztywne komórki dają łodydze i ogonkowi wytrzymałość", ua: "Жорсткі клітини дають стеблу і черешку міцність" },
        title: { pl: "Żeby łodyga nie kleiła się jak nitka. Żeby liść trzymał kształt.", ua: "Щоб стебло не ліпилося як нитка. Щоб листок тримав форму." },
        prompt: { pl: "Edukacyjna infografika 16:9. Młoda łodyga i ogonek liścia. Etykieta PL: tkanka wzmacniająca — sztywność i wytrzymałość. Komórki z grubszymi ścianami wzdłuż łodygi. Bez słojów rocznych, bez przekroju wiązek jak na lekcji 23. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Tkanka wzmacniająca"), " usztywnia roślinę. Komórki mają grubsze ściany niż miękisz."],
          "Dzięki niej łodyga i ogonki liści nie uginają się od własnego ciężaru i od wiatru jak mokra nitka.",
          "Nie myl jej z drewnem: drewno to część tkanki przewodzącej (woda w górę). Wzmacniająca = stelaż. Jak wiązki ułożone są w łodydze — lekcja 23."
        ],
        ua: [
          ["", em("Механічна тканина"), " надає рослині жорсткості. Клітини мають товстіші стінки, ніж паренхіма."],
          "Завдяки їй стебло і черешки листків не гнуться від власної ваги і від вітру як мокра нитка.",
          "Не плутати з деревиною: деревина — частина провідної тканини (вода вгору). Механічна = каркас. Як лежать пучки в стеблі — урок 23."
        ]
      },
      task: {
        id: "l21-e7",
        type: "true-false",
        question: { pl: "Tkanka wzmacniająca usztywnia roślinę — jej komórki mają grubsze ściany niż miękisz.", ua: "Механічна тканина надає рослині жорсткості — її клітини мають товстіші стінки, ніж паренхіма." },
        answer: true,
        explanation: { pl: "Stelaż, nie magazyn. Magazyn to miękisz. Transport wody to drewno.", ua: "Каркас, не запас. Запас — паренхіма." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tkanka przewodząca", ua: "Провідна тканина" },
      visual: vizGh("l21-przewodzaca.png", {
        alt: { pl: "Drewno niesie wodę w górę, łyko niesie cukry z liści", ua: "Деревина несе воду вгору, луб несе цукри з листків" },
        title: { pl: "Rury z lekcji 7 mają dziś nazwy: drewno i łyko.", ua: "Труби з уроку 7 сьогодні мають назви: деревина і луб." },
        prompt: { pl: "Edukacyjny schemat 16:9 rośliny. Niebieskie strzałki w górę korzeń→liść, etykieta PL: drewno — woda i sole. Pomarańczowe strzałki z liścia w dół i na boki, etykieta: łyko — cukry z fotosyntezy. Napis: tkanka przewodząca. Bez przekroju wiązki w łodydze, bez słojów. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Tkanka przewodząca"), " to „rury” rośliny. Na lekcji 7 widziałeś komórki ułożone jak rury. Dziś dwa kierunki."],
          ["", em("Drewno"), " prowadzi wodę i sole mineralne z korzenia w górę — do łodygi i liści."],
          ["", em("Łyko"), " prowadzi cukry z liści (fotosynteza, lekcja 9) do miejsc, gdzie są potrzebne: korzeń, pąki, magazyn w miękiszu."],
          "Nie liczysz dziś słojów pnia. Nie rysujesz wiązki w przekroju łodygi — to lekcja 23."
        ],
        ua: [
          ["", em("Провідна тканина"), " — «труби» рослини. На уроці 7 бачив клітини як труби. Сьогодні два напрями."],
          ["", em("Деревина"), " веде воду і мінеральні солі з кореня вгору — до стебла і листків."],
          ["", em("Луб"), " веде цукри з листків (фотосинтез, урок 9) туди, де треба: корінь, бруньки, запас у паренхімі."],
          "Сьогодні не лічиш річних кілець. Не малюєш пучка в перерізі стебла — це урок 23."
        ]
      },
      task: {
        id: "l21-e8",
        type: "single-choice",
        question: { pl: "Co prowadzi drewno, a co łyko?", ua: "Що веде деревина, а що луб?" },
        options: [
          { id: "a", label: { pl: "drewno — wodę i sole w górę; łyko — cukry z liści do reszty rośliny", ua: "деревина — воду і солі вгору; луб — цукри з листків до решти рослини" } },
          { id: "b", label: { pl: "drewno — zarodniki grzyba; łyko — kapsyd", ua: "деревина — спори гриба; луб — капсид" } },
          { id: "c", label: { pl: "oba prowadzą tylko powietrze ze szparek", ua: "обидва ведуть лише повітря з продихів" } }
        ],
        answer: "a",
        explanation: { pl: "Drewno = woda w górę. Łyko = cukry z liści. Szparki to okrywająca.", ua: "Деревина = вода вгору. Луб = цукри з листків." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Drewno i łyko", ua: "Деревина і луб" },
      visual: tree({
        layout: "fork",
        root: { pl: "tkanka przewodząca", ua: "провідна тканина" },
        items: [
          { pl: "drewno — woda w górę", ua: "деревина — вода вгору" },
          { pl: "łyko — cukry z liści", ua: "луб — цукри з листків" }
        ]
      }),
      items: [
        { pl: "drewno — woda i sole z korzenia do pędu", ua: "деревина — вода і солі з кореня до пагона" },
        { pl: "łyko — cukry z liści do reszty rośliny", ua: "луб — цукри з листків до решти рослини" }
      ]
    },
    {
      type: "classification",
      heading: { pl: "Pięć tkanek roślinnych", ua: "П’ять рослинних тканин" },
      visual: tree({
        layout: "fork",
        root: { pl: "tkanki roślinne", ua: "рослинні тканини" },
        items: [
          { pl: "twórcza", ua: "твірна" },
          { pl: "okrywająca", ua: "покривна" },
          { pl: "miękiszowa", ua: "паренхіма" },
          { pl: "wzmacniająca", ua: "механічна" },
          { pl: "przewodząca", ua: "провідна" }
        ],
        caption: { pl: "organy (korzeń, łodyga, liść) złożysz z tych pięciu", ua: "органи (корінь, стебло, листок) складеш із цих п’яти" }
      }),
      items: [
        { pl: "twórcza — wzrost", ua: "твірна — ріст" },
        { pl: "okrywająca — ochrona, szparki, włośniki", ua: "покривна — захист, продихи, волоски" },
        { pl: "miękiszowa — wypełnienie i zapas", ua: "паренхіма — наповнення і запас" },
        { pl: "wzmacniająca — sztywność", ua: "механічна — жорсткість" },
        { pl: "przewodząca — drewno i łyko", ua: "провідна — деревина і луб" }
      ],
      text: {
        pl: [
          "Pięć nazw na paszport. Z tych tkanek zbudowane są korzeń, łodyga i liść — to trzy następne lekcje, nie ta."
        ],
        ua: [
          "П’ять назв на паспорт. З цих тканин збудовані корінь, стебло і листок — це три наступні уроки, не цей."
        ]
      },
      task: {
        id: "l21-e9",
        type: "multiple-choice",
        question: { pl: "Zaznacz pięć tkanek roślinnych z tej lekcji.", ua: "Познач п’ять рослинних тканин із цього уроку." },
        options: [
          { id: "a", label: { pl: "twórcza", ua: "твірна" } },
          { id: "b", label: { pl: "okrywająca", ua: "покривна" } },
          { id: "c", label: { pl: "miękiszowa, wzmacniająca i przewodząca", ua: "паренхіма, механічна і провідна" } },
          { id: "d", label: { pl: "grzybnia", ua: "грибниця" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pięć tkanek rośliny. Grzybnia to L20, nie tkanka roślinna.", ua: "П’ять тканин рослини. Грибниця — урок 20." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Tkanka", ua: "Практика. Тканина" },
      task: {
        id: "l21-p1",
        type: "single-choice",
        question: { pl: "Tkanka to:", ua: "Тканина — це:" },
        options: [
          { id: "a", label: { pl: "zespół podobnych komórek o wspólnej funkcji", ua: "група подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "jedna bakteria bez jądra", ua: "одна бактерія без ядра" } },
          { id: "c", label: { pl: "owocnik grzyba", ua: "плодове тіло гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Definicja z lekcji 5, dziś u roślin.", ua: "Визначення з уроку 5, сьогодні в рослин." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Twórcza i stałe", ua: "Твірна і сталі" },
      task: {
        id: "l21-p2",
        type: "true-false",
        question: { pl: "Tkanka twórcza dzieli się w stożkach wzrostu; tkanki stałe są już wyspecjalizowane.", ua: "Твірна тканина ділиться в конусах наростання; сталі тканини вже спеціалізовані." },
        answer: true,
        explanation: { pl: "Widelec z tej lekcji: twórcza vs stałe.", ua: "Розвилка з цього уроку: твірна проти сталих." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Okrywająca", ua: "Покривна" },
      task: {
        id: "l21-p3",
        type: "single-choice",
        question: { pl: "Tkanka okrywająca to przede wszystkim:", ua: "Покривна тканина — передусім:" },
        options: [
          { id: "a", label: { pl: "skórka (kutykula, szparki, włośniki)", ua: "шкірка (кутикула, продихи, кореневі волоски)" } },
          { id: "b", label: { pl: "drewno z wodą w górę", ua: "деревина з водою вгору" } },
          { id: "c", label: { pl: "stożek wzrostu pędu", ua: "конус наростання пагона" } }
        ],
        answer: "a",
        explanation: { pl: "Skórka chroni. Drewno to przewodząca. Stożek to twórcza.", ua: "Шкірка захищає. Деревина — провідна. Конус — твірна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Miękisz i wzmocnienie", ua: "Паренхіма і каркас" },
      task: {
        id: "l21-p4",
        type: "single-choice",
        question: { pl: "Jak odróżnisz tkankę miękiszową od wzmacniającej?", ua: "Як відрізниш паренхіму від механічної тканини?" },
        options: [
          { id: "a", label: { pl: "miękisz — wypełnienie i zapas (w liściu też fotosynteza); wzmacniająca — sztywność, grubsze ściany", ua: "паренхіма — наповнення і запас (у листку ще фотосинтез); механічна — жорсткість, товстіші стінки" } },
          { id: "b", label: { pl: "obie to wirusy", ua: "обидві — віруси" } },
          { id: "c", label: { pl: "wzmacniająca magazynuje skrobię, miękisz usztywnia pień", ua: "механічна запасає крохмаль, паренхіма жорстчить стовбур" } }
        ],
        answer: "a",
        explanation: { pl: "Nie odwrotnie. Zapas = miękisz. Stelaż = wzmacniająca.", ua: "Не навпаки. Запас = паренхіма. Каркас = механічна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Drewno i łyko", ua: "Деревина і луб" },
      task: {
        id: "l21-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o tkance przewodzącej.", ua: "Познач правдиві речення про провідну тканину." },
        options: [
          { id: "a", label: { pl: "drewno prowadzi wodę i sole w górę", ua: "деревина веде воду і солі вгору" } },
          { id: "b", label: { pl: "łyko prowadzi cukry z liści", ua: "луб веде цукри з листків" } },
          { id: "c", label: { pl: "łyko to to samo co szparka w skórce", ua: "луб — те саме, що продих у шкірці" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Dwa kierunki. Szparka = okrywająca, nie łyko.", ua: "Два напрями. Продих = покривна, не луб." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Tkanka", ua: "Перевірка 1. Тканина" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l21-s1",
        type: "single-choice",
        question: { pl: "Czym jest tkanka?", ua: "Що таке тканина?" },
        options: [
          { id: "a", label: { pl: "zespół podobnych komórek o wspólnej funkcji", ua: "група подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "jedna komórka bakterii", ua: "одна клітина бактерії" } },
          { id: "c", label: { pl: "porost na korze", ua: "лишайник на корі" } }
        ],
        answer: "a",
        explanation: { pl: "Komórki razem, jedna funkcja.", ua: "Клітини разом, одна функція." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Twórcza i stałe", ua: "Перевірка 2. Твірна і сталі" },
      task: {
        id: "l21-s2",
        type: "single-choice",
        question: { pl: "Gdzie jest tkanka twórcza i czym różni się od stałych?", ua: "Де є твірна тканина і чим відрізняється від сталих?" },
        options: [
          { id: "a", label: { pl: "w stożkach wzrostu pędu i korzenia; komórki się dzielą, a stałe już pracują w jednej roli", ua: "у конусах наростання пагона і кореня; клітини діляться, а сталі вже працюють в одній ролі" } },
          { id: "b", label: { pl: "tylko w kapeluszu grzyba", ua: "лише в шапинці гриба" } },
          { id: "c", label: { pl: "twórcza to nazwa szparki", ua: "твірна — назва продиху" } }
        ],
        answer: "a",
        explanation: { pl: "Stożki wzrostu. Stałe = okrywająca, miękisz, wzmacniająca, przewodząca.", ua: "Конуси наростання." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Okrywająca", ua: "Перевірка 3. Покривна" },
      task: {
        id: "l21-s3",
        type: "multiple-choice",
        question: { pl: "Do czego służy tkanka okrywająca?", ua: "Для чого служить покривна тканина?" },
        options: [
          { id: "a", label: { pl: "chroni (skórka, kutykula)", ua: "захищає (шкірка, кутикула)" } },
          { id: "b", label: { pl: "wymienia gazy przez szparki", ua: "обмінює гази через продихи" } },
          { id: "c", label: { pl: "pobiera wodę włośnikami", ua: "бере воду кореневими волосками" } },
          { id: "d", label: { pl: "niesie cukry łykiem z liścia", ua: "несе цукри лубом із листка" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Ochrona + szparki + włośniki. Łyko to przewodząca.", ua: "Захист + продихи + волоски. Луб — провідна." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Miękisz i wzmocnienie", ua: "Перевірка 4. Паренхіма і каркас" },
      task: {
        id: "l21-s4",
        type: "true-false",
        question: { pl: "Miękisz wypełnia i magazynuje (w liściu też fotosynteza). Wzmacniająca usztywnia grubszymi ścianami.", ua: "Паренхіма виповнює і запасає (у листку ще фотосинтез). Механічна надає жорсткості товстішими стінками." },
        answer: true,
        explanation: { pl: "Dwie stałe tkanki, dwie role. Nie odwrotnie.", ua: "Дві сталі тканини, дві ролі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Drewno i łyko", ua: "Перевірка 5. Деревина і луб" },
      task: {
        id: "l21-s5",
        type: "single-choice",
        question: { pl: "Jak rozróżnisz drewno i łyko?", ua: "Як розрізню деревину і луб?" },
        options: [
          { id: "a", label: { pl: "drewno — woda i sole w górę; łyko — cukry z liści", ua: "деревина — вода і солі вгору; луб — цукри з листків" } },
          { id: "b", label: { pl: "drewno to szparka, łyko to włośnik", ua: "деревина — продих, луб — волосок" } },
          { id: "c", label: { pl: "oba są stożkami wzrostu", ua: "обидва є конусами наростання" } }
        ],
        answer: "a",
        explanation: { pl: "Dwa kierunki w tkance przewodzącej.", ua: "Два напрями в провідній тканині." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "tkanki roślinne", ua: "рослинні тканини" },
        items: [
          { pl: "twórcza", ua: "твірна" },
          { pl: "okrywająca", ua: "покривна" },
          { pl: "miękiszowa", ua: "паренхіма" },
          { pl: "wzmacniająca", ua: "механічна" },
          { pl: "przewodząca", ua: "провідна" }
        ]
      }),
      text: {
        pl: [
          "Tkanka = podobne komórki, jedna funkcja.",
          "Twórcza (stożki wzrostu) vs stałe.",
          "Okrywająca: skórka, szparki, włośniki.",
          "Miękisz = wypełnienie i zapas. Wzmacniająca = sztywność.",
          "Przewodząca: drewno (woda w górę), łyko (cukry z liści).",
          "Korzeń, łodyga, liść — lekcje 22–24."
        ],
        ua: [
          "Тканина = подібні клітини, одна функція.",
          "Твірна (конуси наростання) проти сталих.",
          "Покривна: шкірка, продихи, волоски.",
          "Паренхіма = наповнення і запас. Механічна = жорсткість.",
          "Провідна: деревина (вода вгору), луб (цукри з листків).",
          "Корінь, стебло, листок — уроки 22–24."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, czym jest tkanka.", ua: "Можу пояснити, що таке тканина." },
        { pl: "Potrafię odróżnić tkankę twórczą od tkanek stałych.", ua: "Можу відрізнити твірну тканину від сталих." },
        { pl: "Potrafię powiedzieć, do czego służy tkanka okrywająca.", ua: "Можу сказати, для чого служить покривна тканина." },
        { pl: "Potrafię porównać tkankę miękiszową i wzmacniającą.", ua: "Можу порівняти паренхіму і механічну тканину." },
        { pl: "Potrafię rozróżnić drewno i łyko.", ua: "Можу розрізнити деревину і луб." }
      ]
    }
  ]
};
