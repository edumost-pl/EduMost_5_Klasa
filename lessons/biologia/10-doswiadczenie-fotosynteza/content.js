function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L10_Doswiadczenie_fotosynteza/images/";

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
        { pl: "Sformułujesz problem badawczy i hipotezę doświadczenia o fotosyntezie.", ua: "Сформулюєш дослідницьку проблему і гіпотезу досліду про фотосинтез." },
        { pl: "Wskażesz próbę badawczą i kontrolną.", ua: "Вкажеш дослідну і контрольну пробу." },
        { pl: "Powiesz, po co używa się jodyny w tym doświadczeniu.", ua: "Скажеш, навіщо в цьому досліді йод." },
        { pl: "Wyjaśnisz, po co zasłania się część liścia.", ua: "Поясниш, навіщо затуляють частину листка." },
        { pl: "Sformułujesz wniosek: skrobia powstaje tam, gdzie było światło.", ua: "Сформулюєш висновок: крохмаль виникає там, де було світло." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "doświadczenie", ua: "дослід" },
        { pl: "hipoteza", ua: "гіпотеза" },
        { pl: "próba badawcza", ua: "дослідна проба" },
        { pl: "próba kontrolna", ua: "контрольна проба" },
        { pl: "jodyna", ua: "йод" },
        { pl: "skrobia", ua: "крохмаль" },
        { pl: "wniosek", ua: "висновок" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l10-zacznijmy.png", {
        alt: { pl: "Liść częściowo zaklejony paskiem papieru", ua: "Листок частково заклеєний смужкою паперу" },
        title: { pl: "Czy w zasłoniętej części liścia powstanie skrobia?", ua: "Чи в затуленій частині листка виникне крохмаль?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Zielony liść na roślinie, przez środek przyklejony jasny pasek papieru lub folii. Jasne światło. Bez twarzy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na poprzedniej lekcji powiedzieliśmy: bez światła nie ma fotosyntezy, a cukier bywa zapisywany jako skrobia.",
          "Czy da się to sprawdzić? Tak — doświadczeniem. Zmianiamy jeden czynnik: dostęp światła do części liścia. Resztę zostawiamy taką samą. To lekcja 2 w praktyce, na roślinie."
        ],
        ua: [
          "На попередньому уроці ми сказали: без світла немає фотосинтезу, а цукор інколи записується як крохмаль.",
          "Чи можна це перевірити? Так — дослідом. Змінюємо один чинник: доступ світла до частини листка. Решту лишаємо такою самою. Це урок 2 на практиці, на рослині."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Problem i hipoteza", ua: "Проблема і гіпотеза" },
      visual: vizGh("l10-hipoteza.png", {
        alt: { pl: "Pytanie badawcze na tablicy", ua: "Дослідницьке питання на дошці" },
        title: { pl: "Pytanie, potem przypuszczenie — potem test.", ua: "Питання, потім припущення — потім перевірка." },
        prompt: { pl: "Edukacyjna plansza 16:9, szkolna tablica, polskie napisy: Problem: Czy do powstania skrobi w liściu potrzebne jest światło? Hipoteza: Skrobia powstanie tylko w oświetlonej części liścia. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Problem badawczy"), " (pytanie): Czy do powstania skrobi w liściu potrzebne jest światło?"],
          ["", em("Hipoteza"), " (przypuszczenie, które sprawdzimy): Skrobia powstanie tylko w tej części liścia, do której dochodziło światło."],
          "Hipoteza może okazać się prawdziwa albo nie. Po to jest doświadczenie — nie po to, żeby „udowodnić tabliczkę z góry”."
        ],
        ua: [
          ["", em("Дослідницька проблема"), " (питання): Чи для виникнення крохмалю в листку потрібне світло?"],
          ["", em("Гіпотеза"), " (припущення, яке перевіримо): Крохмаль виникне лише в тій частині листка, до якої доходило світло."],
          "Гіпотеза може виявитися правдивою або ні. На те й дослід."
        ]
      },
      task: {
        id: "l10-e1",
        type: "single-choice",
        question: { pl: "Która para jest poprawna?", ua: "Яка пара правильна?" },
        options: [
          { id: "a", label: { pl: "problem — pytanie; hipoteza — przypuszczenie do sprawdzenia", ua: "проблема — питання; гіпотеза — припущення для перевірки" } },
          { id: "b", label: { pl: "hipoteza — gotowy wniosek zapisany przed doświadczeniem jako pewnik", ua: "гіпотеза — готовий висновок, записаний перед дослідом як аксіома" } },
          { id: "c", label: { pl: "problem — nazwa jodyny", ua: "проблема — назва йоду" } }
        ],
        answer: "a",
        explanation: { pl: "Tak jak na lekcji 2: najpierw pytanie, potem hipoteza, potem test.", ua: "Як на уроці 2: спочатку питання, потім гіпотеза, потім перевірка." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jedna zmiana: światło", ua: "Одна зміна: світло" },
      visual: vizGh("l10-proby.png", {
        alt: { pl: "Oświetlona i zasłonięta część tego samego liścia", ua: "Освітлена і затулена частина того самого листка" },
        title: { pl: "Próba badawcza i kontrolna na jednym liściu.", ua: "Дослідна і контрольна проба на одному листку." },
        prompt: { pl: "Edukacyjna infografika 16:9. Jeden liść podzielony na dwie połowy. LEWA odkryta, słońce, etykieta PL: próba badawcza — światło dochodzi. PRAWA pasek papieru, etykieta: próba kontrolna — światło nie dochodzi. Napis: reszta warunków taka sama (ta sama roślina, woda, powietrze). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["W doświadczeniu zmieniamy ", em("jeden"), " czynnik: dostęp światła."],
          ["", em("Próba badawcza"), " — część liścia odkryta, światło pada."],
          ["", em("Próba kontrolna"), " — część liścia zasłonięta paskiem papieru lub folii, światło nie pada."],
          "To wciąż ta sama roślina, ta sama woda, to samo powietrze. Dzięki temu, jeśli wynik będzie inny, wiemy, że poszło o światło — a nie o „inną doniczkę”."
        ],
        ua: [
          ["У досліді змінюємо ", em("один"), " чинник: доступ світла."],
          ["", em("Дослідна проба"), " — частина листка відкрита, світло падає."],
          ["", em("Контрольна проба"), " — частина листка затулена смужкою паперу або плівки, світло не падає."],
          "Це та сама рослина, та сама вода, те саме повітря. Якщо результат інший, знаємо: річ у світлі."
        ]
      },
      task: {
        id: "l10-e2",
        type: "true-false",
        question: { pl: "Zasłonięta część liścia to próba kontrolna: światło nie dochodzi, reszta warunków jest taka sama.", ua: "Затулена частина листка — контрольна проба: світло не доходить, решта умов така сама." },
        answer: true,
        explanation: { pl: "Kontrola = bez badanego czynnika (tu: bez światła na tej części blaszki).", ua: "Контроль = без досліджуваного чинника (тут: без світла на цій частині пластинки)." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwie próby na jednym liściu", ua: "Дві проби на одному листку" },
      visual: tree({
        layout: "fork",
        root: { pl: "jeden czynnik: światło", ua: "один чинник: світло" },
        items: [
          { pl: "badawcza — światło pada", ua: "дослідна — світло падає" },
          { pl: "kontrolna — zasłonięta", ua: "контрольна — затулена" }
        ]
      }),
      items: [
        { pl: "próba badawcza — odkryta część liścia, światło pada", ua: "дослідна проба — відкрита частина листка, світло падає" },
        { pl: "próba kontrolna — zasłonięta, światło nie pada", ua: "контрольна проба — затулена, світло не падає" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Po co jodyna?", ua: "Навіщо йод?" },
      visual: vizGh("l10-jodyna.png", {
        alt: { pl: "Krople jodyny na skrobi — ciemnoniebieski kolor", ua: "Краплі йоду на крохмалі — темно-синій колір" },
        title: { pl: "Jodyna + skrobia = ciemnoniebieski (granatowy) kolor.", ua: "Йод + крохмаль = темно-синій колір." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9, szkolne. Na białym talerzyku odrobina skrobi ziemniaczanej i kropla jodyny — plama granatowa. Obok buteleczka z etykietą PL: jodyna. Bez twarzy dzieci, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Gołym okiem nie widać, czy w liściu jest skrobia. Potrzebny jest test.",
          ["", em("Jodyna"), " (roztwór jodu) barwi skrobię na kolor ciemnoniebieski, granatowy. Jeśli skrobi nie ma, plama jest żółtawa lub brązowa jak sama jodyna."],
          "Dlatego po doświadczeniu liść (przygotowany w szkole) skrapla się jodyną. Ciemny kolor = była skrobia. Brak ciemnego koloru = skrobi nie wykryto."
        ],
        ua: [
          "Неозброєним оком не видно, чи в листку є крохмаль. Потрібен тест.",
          ["", em("Йод"), " забарвлює крохмаль у темно-синій, індиговий колір. Якщо крохмалю немає, пляма жовтава або коричнева, як сам йод."],
          "Тому після досліду листок (підготовлений у школі) зкроплюють йодом. Темний колір = був крохмаль. Немає темного кольору = крохмалю не виявлено."
        ]
      },
      task: {
        id: "l10-e3",
        type: "single-choice",
        question: { pl: "Po co w tym doświadczeniu jodyna?", ua: "Навіщо в цьому досліді йод?" },
        options: [
          { id: "a", label: { pl: "wykrywa skrobię — ciemnoniebieski kolor oznacza obecność skrobi", ua: "виявляє крохмаль — темно-синій колір означає наявність крохмалю" } },
          { id: "b", label: { pl: "zastępuje chlorofil w chloroplastach", ua: "замінює хлорофіл у хлоропластах" } },
          { id: "c", label: { pl: "to równanie słowne fotosyntezy", ua: "це словесне рівняння фотосинтезу" } }
        ],
        answer: "a",
        explanation: { pl: "Jodyna to wskaźnik skrobi, nie składnik fotosyntezy.", ua: "Йод — індикатор крохмалю, не складник фотосинтезу." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak to wygląda w szkole", ua: "Як це виглядає в школі" },
      visual: vizGh("l10-szkola.png", {
        alt: { pl: "Etapy szkolnego doświadczenia ze skrobią w liściu", ua: "Етапи шкільного досліду з крохмалем у листку" },
        title: { pl: "Tylko w pracowni, pod opieką nauczyciela.", ua: "Лише в кабінеті, під наглядом учителя." },
        prompt: { pl: "Edukacyjna plansza 16:9, cztery kadry, polskie etykiety. 1 roślina kilka dni w ciemności (zużycie zapasu skrobi). 2 pasek na liściu, potem światło. 3 nauczyciel przygotowuje liść (odbarwianie — bez płomienia w kadrze dziecka). 4 jodyna: odkryta część granatowa, zasłonięta — bez skrobi. Napis: nie powtarzaj w domu z alkoholem i ogniem. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "W klasie nauczyciel często najpierw trzyma roślinę kilka dni w ciemności, żeby zużyła zapas skrobi. Potem zasłania się część liścia i wystawia roślinę na światło.",
          "Żeby jodyna mogła pokazać skrobię, liść trzeba przygotować (między innymi usunąć zielony barwnik). Tego etapu ", em("nie wykonujesz w domu"), ": bywa alkohol i podgrzewanie. To pracownia szkolna i nadzór osoby dorosłej.",
          "Jodyna też nie jest zabawką. Oglądasz wynik na lekcji albo na zdjęciu z doświadczenia."
        ],
        ua: [
          "У класі вчитель часто спочатку тримає рослину кілька днів у темряві, щоб вона витратила запас крохмалю. Потім затуляють частину листка і виставляють рослину на світло.",
          "Щоб йод міг показати крохмаль, листок треба підготувати (зокрема прибрати зелений барвник). Цей етап ", em("не виконуєш удома"), ": буває спирт і нагрівання. Це шкільний кабінет і нагляд дорослого.",
          "Йод теж не іграшка. Результат дивишся на уроці або на фото з досліду."
        ]
      },
      task: {
        id: "l10-e4",
        type: "true-false",
        question: { pl: "Etapu z alkoholem i podgrzewaniem liścia nie wykonujesz sam w domu.", ua: "Етап зі спиртом і нагріванням листка не виконуєш сам удома." },
        answer: true,
        explanation: { pl: "Bezpieczeństwo. Doświadczenie jest szkolne.", ua: "Безпека. Дослід шкільний." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Wynik i wniosek", ua: "Результат і висновок" },
      visual: vizGh("l10-wynik.png", {
        alt: { pl: "Liść po jodynie: odkryta część ciemna, zasłonięta jasna", ua: "Листок після йоду: відкрита частина темна, затулена світла" },
        title: { pl: "Ciemno tam, gdzie było światło. Wniosek: skrobia powstaje przy świetle.", ua: "Темно там, де було світло. Висновок: крохмаль виникає при світлі." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 odbarwionego liścia po teście jodyną. Pas, który był zasłonięty, żółtawy. Reszta blaszki granatowa. Etykiety PL: było światło — skrobia; nie było światła — brak skrobi. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Typowy wynik: część, na którą padało światło, barwi się na ciemnoniebiesko (jest skrobia). Część zasłonięta — nie.",
          ["", em("Wniosek"), ": skrobia powstaje w liściu tam, gdzie było światło. To zgadza się z hipotezą i z tym, że fotosynteza wymaga światła."],
          "Skrobia jest zapasem cukru z fotosyntezy. Test jodyną nie pokazuje tlenu — o tlenie mówi się czasem przy pęcherzykach moczarki na świetle. Dziś Twój paszport to skrobia i światło."
        ],
        ua: [
          "Типовий результат: частина, на яку падало світло, забарвлюється в темно-синій (є крохмаль). Затулена частина — ні.",
          ["", em("Висновок"), ": крохмаль виникає в листку там, де було світло. Це збігається з гіпотезою і з тим, що фотосинтез потребує світла."],
          "Крохмаль — запас цукру з фотосинтезу. Тест йодом не показує кисень. Сьогодні твій паспорт — крохмаль і світло."
        ]
      },
      task: {
        id: "l10-e5",
        type: "single-choice",
        question: { pl: "Jaki wniosek wynika z ciemnej barwy tylko na oświetlonej części liścia?", ua: "Який висновок випливає з темної барви лише на освітленій частині листка?" },
        options: [
          { id: "a", label: { pl: "skrobia powstaje tam, gdzie było światło — fotosynteza wymaga światła", ua: "крохмаль виникає там, де було світло — фотосинтез потребує світла" } },
          { id: "b", label: { pl: "jodyna wytwarza chloroplasty", ua: "йод виробляє хлоропласти" } },
          { id: "c", label: { pl: "roślina nie potrzebuje światła", ua: "рослина не потребує світла" } }
        ],
        answer: "a",
        explanation: { pl: "Ciemny kolor = skrobia = ślad fotosyntezy przy świetle.", ua: "Темний колір = крохмаль = слід фотосинтезу при світлі." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Co było jednym czynnikiem?", ua: "Що було одним чинником?" },
      visual: vizGh("l10-proby.png", {
        alt: { pl: "Jedna zmienna: światło", ua: "Одна змінна: світло" },
        title: { pl: "Nie zmieniamy naraz światła, wody i gatunku rośliny.", ua: "Не змінюємо водночас світло, воду і вид рослини." },
        prompt: { pl: "Ten sam schemat dwóch prób na jednym liściu." }
      }),
      text: {
        pl: [
          "Gdyby jedna doniczka stała w szafie, a druga była innym gatunkiem na balkonnie, nie wiedziałbyś, co wpłynęło na wynik.",
          "Tu czynnik to światło na fragmencie blaszki. Metoda naukowa z lekcji 2: obserwacja faktu (rośliny zielone), problem, hipoteza, doświadczenie z próbami, analiza, wniosek."
        ],
        ua: [
          "Якби один горщик стояв у шафі, а другий був іншим видом на балконі, ти б не знав, що вплинуло на результат.",
          "Тут чинник — світло на фрагменті пластинки. Науковий метод з уроку 2."
        ]
      },
      task: {
        id: "l10-e6",
        type: "true-false",
        question: { pl: "W dobrym doświadczeniu zmieniamy jeden czynnik — tutaj dostęp światła do części liścia.", ua: "У доброму досліді змінюємо один чинник — тут доступ світла до частини листка." },
        answer: true,
        explanation: { pl: "Jedna zmienna. Reszta stała.", ua: "Одна змінна. Решта стала." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Problem", ua: "Практика. Проблема" },
      task: {
        id: "l10-p1",
        type: "single-choice",
        question: { pl: "Które zdanie jest problemem badawczym tej lekcji?", ua: "Яке речення є дослідницькою проблемою цього уроку?" },
        options: [
          { id: "a", label: { pl: "Czy do powstania skrobi w liściu potrzebne jest światło?", ua: "Чи для виникнення крохмалю в листку потрібне світло?" } },
          { id: "b", label: { pl: "Jodyna jest brązowa w butelce.", ua: "Йод коричневий у пляшці." } },
          { id: "c", label: { pl: "Liście bywają zielone.", ua: "Листки бувають зеленими." } }
        ],
        answer: "a",
        explanation: { pl: "Problem to pytanie, na które odpowiemy doświadczeniem.", ua: "Проблема — питання, на яке відповімо дослідом." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Próby", ua: "Проби" },
      task: {
        id: "l10-p2",
        type: "single-choice",
        question: { pl: "Które połączenie jest poprawne?", ua: "Яке поєднання правильне?" },
        options: [
          { id: "a", label: { pl: "odkryta część liścia — próba badawcza (światło); zasłonięta — kontrolna (bez światła)", ua: "відкрита частина — дослідна (світло); затулена — контрольна (без світла)" } },
          { id: "b", label: { pl: "zasłonięta część to próba badawcza, bo „ciekawsza”", ua: "затулена частина — дослідна, бо «цікавіша»" } },
          { id: "c", label: { pl: "nie potrzeba żadnej kontroli", ua: "не потрібен жоден контроль" } }
        ],
        answer: "a",
        explanation: { pl: "Badawcza = z czynnikiem (światło). Kontrolna = bez czynnika na tym fragmencie.", ua: "Дослідна = з чинником (світло). Контрольна = без чинника." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Jodyna", ua: "Йод" },
      task: {
        id: "l10-p3",
        type: "true-false",
        question: { pl: "Ciemnoniebieska barwa po jodynie oznacza, że w tym miejscu liścia jest skrobia.", ua: "Темно-синя барва після йоду означає, що в цьому місці листка є крохмаль." },
        answer: true,
        explanation: { pl: "To klasyczny test na skrobię.", ua: "Це класичний тест на крохмаль." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Po co pasek?", ua: "Навіщо смужка?" },
      task: {
        id: "l10-p4",
        type: "single-choice",
        question: { pl: "Po co zasłania się część liścia?", ua: "Навіщо затуляють частину листка?" },
        options: [
          { id: "a", label: { pl: "żeby porównać miejsce ze światłem i bez światła na tej samej blaszce", ua: "щоб порівняти місце зі світлом і без світла на тій самій пластинці" } },
          { id: "b", label: { pl: "żeby jodyna smakowała jak cukier", ua: "щоб йод смакував як цукор" } },
          { id: "c", label: { pl: "żeby roślina stała się zwierzęciem", ua: "щоб рослина стала твариною" } }
        ],
        answer: "a",
        explanation: { pl: "Pasek = kontrola dostępu światła.", ua: "Смужка = контроль доступу світла." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wniosek", ua: "Висновок" },
      task: {
        id: "l10-p5",
        type: "single-choice",
        question: { pl: "Który wniosek jest poprawny?", ua: "Який висновок правильний?" },
        options: [
          { id: "a", label: { pl: "Skrobia powstaje w liściu tam, gdzie było światło.", ua: "Крохмаль виникає в листку там, де було світло." } },
          { id: "b", label: { pl: "Światło przeszkadza fotosyntezie.", ua: "Світло заважає фотосинтезу." } },
          { id: "c", label: { pl: "Jodyna to produkt fotosyntezy zamiast tlenu.", ua: "Йод — продукт фотосинтезу замість кисню." } }
        ],
        answer: "a",
        explanation: { pl: "Wniosek z barwy: skrobia tam, gdzie światło.", ua: "Висновок із барви: крохмаль там, де світло." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Problem i hipoteza", ua: "Перевірка 1. Проблема і гіпотеза" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l10-s1",
        type: "single-choice",
        question: { pl: "Która para pasuje do tego doświadczenia?", ua: "Яка пара пасує до цього досліду?" },
        options: [
          { id: "a", label: { pl: "problem: czy światło jest potrzebne do powstania skrobi?; hipoteza: skrobia powstanie tylko w oświetlonej części", ua: "проблема: чи світло потрібне для виникнення крохмалю?; гіпотеза: крохмаль виникне лише в освітленій частині" } },
          { id: "b", label: { pl: "problem: jak smakuje jodyna?; hipoteza: liście są zawsze czarne", ua: "проблема: який смак йоду?; гіпотеза: листки завжди чорні" } },
          { id: "c", label: { pl: "nie ma problemu badawczego, jest tylko zgadywanie koloru", ua: "немає дослідницької проблеми, є лише вгадування кольору" } }
        ],
        answer: "a",
        explanation: { pl: "Pytanie o światło i skrobię; hipoteza do testu.", ua: "Питання про світло і крохмаль; гіпотеза для перевірки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Próby", ua: "Перевірка 2. Проби" },
      task: {
        id: "l10-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Próba badawcza: światło dochodzi do części liścia.", ua: "Дослідна проба: світло доходить до частини листка." } },
          { id: "b", label: { pl: "Próba kontrolna: część liścia zasłonięta, światło nie dochodzi.", ua: "Контрольна проба: частина листка затулена, світло не доходить." } },
          { id: "c", label: { pl: "Reszta warunków (ta sama roślina, woda, powietrze) ma być taka sama.", ua: "Решта умов (та сама рослина, вода, повітря) має бути такою самою." } },
          { id: "d", label: { pl: "Zmieniamy naraz gatunek, wodę, temperaturę i światło.", ua: "Змінюємо водночас вид, воду, температуру і світло." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Jeden czynnik. Nie mieszamy wszystkich zmiennych.", ua: "Один чинник." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Jodyna", ua: "Перевірка 3. Йод" },
      task: {
        id: "l10-s3",
        type: "single-choice",
        question: { pl: "Po co jodyna w tym doświadczeniu?", ua: "Навіщо йод у цьому досліді?" },
        options: [
          { id: "a", label: { pl: "wykrywa skrobię (ciemnoniebieski kolor)", ua: "виявляє крохмаль (темно-синій колір)" } },
          { id: "b", label: { pl: "jest chlorofilem", ua: "є хлорофілом" } },
          { id: "c", label: { pl: "zastępuje dwutlenek węgla", ua: "замінює вуглекислий газ" } }
        ],
        answer: "a",
        explanation: { pl: "Wskaźnik skrobi, nie substrat fotosyntezy.", ua: "Індикатор крохмалю." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Zasłonięcie", ua: "Перевірка 4. Затулення" },
      task: {
        id: "l10-s4",
        type: "single-choice",
        question: { pl: "Po co zasłania się część liścia?", ua: "Навіщо затуляють частину листка?" },
        options: [
          { id: "a", label: { pl: "żeby mieć fragment bez światła — kontrolę na tej samej blaszce", ua: "щоб мати фрагмент без світла — контроль на тій самій пластинці" } },
          { id: "b", label: { pl: "żeby liść stał się komórką bakteryjną", ua: "щоб листок став бактеріальною клітиною" } },
          { id: "c", label: { pl: "żeby jodyna nie działała nigdy", ua: "щоб йод ніколи не діяв" } }
        ],
        answer: "a",
        explanation: { pl: "Zasłona odcina światło. Porównanie na jednym liściu.", ua: "Затулення відтинає світло." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wniosek", ua: "Перевірка 5. Висновок" },
      task: {
        id: "l10-s5",
        type: "true-false",
        question: { pl: "Wniosek: skrobia powstaje w liściu tam, gdzie było światło — fotosynteza wymaga światła.", ua: "Висновок: крохмаль виникає в листку там, де було світло — фотосинтез потребує світла." },
        answer: true,
        explanation: { pl: "To domknięcie paszportu i lekcji 9.", ua: "Це замикання паспорта і уроку 9." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l10-wynik.png", {
        alt: { pl: "Wynik testu jodyną na liściu", ua: "Результат тесту йодом на листку" },
        title: { pl: "Światło → skrobia. Jodyna to wskaźnik.", ua: "Світло → крохмаль. Йод — індикатор." },
        prompt: { pl: "To samo zdjęcie liścia po jodynie z polskimi etykietami." }
      }),
      text: {
        pl: [
          "Problem: czy światło jest potrzebne do powstania skrobi w liściu? Hipoteza: tak — tylko w oświetlonej części.",
          "Jedna zmiana: dostęp światła. Odkryte = badawcza, zasłonięte = kontrolna.",
          "Jodyna barwi skrobię na ciemnoniebiesko.",
          "Przygotowanie liścia (alkohol, podgrzewanie) — tylko szkoła.",
          "Wniosek: skrobia tam, gdzie było światło."
        ],
        ua: [
          "Проблема: чи світло потрібне для виникнення крохмалю в листку? Гіпотеза: так — лише в освітленій частині.",
          "Одна зміна: доступ світла. Відкрите = дослідна, затулене = контрольна.",
          "Йод забарвлює крохмаль у темно-синій.",
          "Підготовка листка (спирт, нагрівання) — лише школа.",
          "Висновок: крохмаль там, де було світло."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię sformułować problem i hipotezę tego doświadczenia.", ua: "Можу сформулювати проблему і гіпотезу цього досліду." },
        { pl: "Potrafię wskazać próbę badawczą i kontrolną.", ua: "Можу вказати дослідну і контрольну пробу." },
        { pl: "Potrafię powiedzieć, po co jodyna.", ua: "Можу сказати, навіщо йод." },
        { pl: "Potrafię wyjaśnić, po co zasłania się część liścia.", ua: "Можу пояснити, навіщо затуляють частину листка." },
        { pl: "Potrafię sformułować wniosek o skrobi i świetle.", ua: "Можу сформулювати висновок про крохмаль і світло." }
      ]
    }
  ]
};
