function em(text) {
  return { text: text, emphasis: true };
}

function b(text) {
  return { text: text, bold: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L01_Biologia_jako_nauka/images/";

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

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wyjaśnisz, czym zajmuje się biologia.", ua: "Поясниш, чим займається біологія." },
        { pl: "Wymienisz dwie wspólne cechy organizmów.", ua: "Назвеш дві спільні риси організмів." },
        { pl: "Wymienisz czynności życiowe i krótko powiesz, co każda z nich oznacza.", ua: "Назвеш життєві функції і коротко скажеш, що кожна означає." },
        { pl: "Uporządkujesz poziomy budowy organizmu wielokomórkowego.", ua: "Упорядкуєш рівні будови багатоклітинного організму." },
        { pl: "Powiesz, czym zajmuje się wskazana dziedzina biologii.", ua: "Скажеш, чим займається вказана галузь біології." }
      ]
    },
    // 2 - vocabulary
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "biologia", ua: "біологія — наука про живі організми" },
        { pl: "organizm", ua: "організм — жива істота" },
        { pl: "komórka", ua: "клітина — найменша жива частина організму" },
        { pl: "czynności życiowe", ua: "життєві функції" },
        { pl: "wydalanie", ua: "виділення" },
        { pl: "przystosowanie", ua: "пристосування" },
        { pl: "dziedzina biologii", ua: "галузь біології" }
      ]
    },
    // 3 - Zacznijmy
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l01-park.jpg", {
        alt: { pl: "Park z drzewami, psem, ławką i rowerem", ua: "Парк з деревами, псом, лавкою і велосипедом" },
        title: { pl: "Co tu jest organizmem?", ua: "Що тут є організмом?" },
        prompt: { pl: "Edukacyjna fotografia 16:9 dla ucznia klasy 5. Słoneczny dzień w polskim parku: drzewa, trawnik, pies, drewniana ławka, rower, kamienie. Fotorealistyczna, jasne światło, bez napisów, bez logotypów, bez zbliżenia na twarze dzieci." }
      }),
      text: {
        pl: [
          "Spójrz na zdjęcie. Widać drzewo, psa, ławkę i rower.",
          "Które z nich są istotami **żywymi**? Na tej lekcji nauczymy się, skąd to wiemy i jaką nauką jest *biologia*."
        ],
        ua: [
          "Подивись на фото. Видно дерево, пса, лавку і велосипед.",
          "Які з них **живі** істоти? На цьому уроці навчимося, звідки це знаємо і якою наукою є *біологія*."
        ]
      }
    },
    // 4 - Czym zajmuje się biologia?
    {
      type: "concept",
      heading: { pl: "Czym zajmuje się biologia?", ua: "Чим займається біологія?" },
      visual: vizGh("l01-zakres-biologii.png", {
        alt: { pl: "Infografika: biologia bada budowę, czynności, zależności i środowisko", ua: "Інфографіка: біологія досліджує будову, функції, залежності і середовище" },
        title: { pl: "Biologia bada organizmy żywe — i to, jak żyją.", ua: "Біологія досліджує живі організми — і те, як вони живуть." },
        prompt: { pl: "Edukacyjna infografika 16:9 dla klasy 5, jasne tło, płaski styl, duże ikony, bez logotypów. Na środku napis BIOLOGIA. Wokół cztery czytelne piktogramy z krótkimi polskimi etykietami: 1) lupa przy roślinie i zwierzęciu — budowa, 2) miska i chmurka oddechu — czynności życiowe, 3) pszczoła nad kwiatem — zależności, 4) słońce i termometr przy roślinie i rybie — środowisko. Bez wzorów chemicznych, bez mikroskopu w zbliżeniu, bez angielskiego." }
      }),
      text: {
        pl: [
          "**Biologia** to nauka o organizmach żywych. ",
          "*Organizmem* nazywamy każdą istotę, która żyje: roślinę, zwierzę, człowieka, grzyba.",
          "Biolodzy nie pytają tylko: „Czy to żyje?”. Badają też, jak organizm jest zbudowany i jakie czynności wykonuje, żeby żyć.",
          "Biologia bada również zależności między organizmami. Pszczoła zbiera nektar z kwiatu, a przy okazji przenosi pyłek. Jeden organizm jest związany z drugim.",
          "Środowisko też ma znaczenie. Temperatura wpływa na organizmy: w zimnej wodzie ryby są mniej aktywne. Światło wpływa na rośliny: na parapecie liście często zwracają się ku oknu.",
          ["Cechy, które ułatwiają organizmowi życie w danych warunkach, nazywamy ", em("przystosowaniem"), ". Gruba sierść pomaga zimą. Kaktus gromadzi wodę w suchym miejscu."],
          "Osobę, która zajmuje się biologią, nazywamy biologiem. Na następnej lekcji zobaczymy, jak biolodzy planują obserwacje. Dziś zapamiętaj, czym ta nauka się zajmuje."
        ],
        ua: [
          ["", em("Біологія"), " — наука про живі організми. Організмом називаємо кожну істоту, яка живе: рослину, тварину, людину, гриб."],
          "Біологи питають не лише: «Чи це живе?». Вони також досліджують, як організм побудований і які функції виконує, щоб жити.",
          "Біологія досліджує також залежності між організмами. Бджола збирає нектар з квітки і при цьому переносить пилок. Один організм пов’язаний з іншим.",
          "Середовище теж має значення. Температура впливає на організми: у холодній воді риби менш активні. Світло впливає на рослини: на підвіконні листки часто повертаються до вікна.",
          ["Риси, які полегшують організму життя в певних умовах, називаємо ", em("пристосуванням"), ". Густе хутро допомагає взимку. Кактус накопичує воду в сухому місці."],
          "Людину, яка займається біологією, називаємо біологом. На наступному уроці побачимо, як біологи планують спостереження. Сьогодні запам’ятай, чим ця наука займається."
        ]
      },
      task: {
        id: "l01-e1",
        type: "single-choice",
        question: { pl: "Które pytanie należy do biologii?", ua: "Яке питання належить до біології?" },
        options: [
          { id: "a", label: { pl: "Jak temperatura wody wpływa na ryby?", ua: "Як температура води впливає на риб?" } },
          { id: "b", label: { pl: "Ile waży ten rower?", ua: "Скільки важить цей велосипед?" } },
          { id: "c", label: { pl: "Z jakiego metalu zrobiona jest łyżka?", ua: "З якого металу зроблена ложка?" } }
        ],
        answer: "a",
        explanation: { pl: "Tak. Biologia bada organizmy i wpływ środowiska na nie. Rower i łyżka nie są organizmami.", ua: "Так. Біологія досліджує організми і вплив середовища на них." }
      }
    },
    // 5 - Dwie cechy organizmów
    {
      type: "concept",
      heading: { pl: "Dwie cechy organizmów", ua: "Дві риси організмів" },
      visual: vizGh("l01-rozne-organizmy.jpg", {
        alt: { pl: "Kot, drzewo, trawa i grzyb", ua: "Кіт, дерево, трава і гриб" },
        title: { pl: "Różne organizmy. Te same dwie cechy.", ua: "Різні організми. Ті самі дві риси." },
        prompt: { pl: "Edukacyjna ilustracja 16:9, fotorealistyczny kolaż czterech kadrów bez napisów: kot, liściaste drzewo, kępa trawy, pieczarka. Naturalne światło, bez ludzi, bez logotypów." }
      }),
      text: {
        pl: [
          "Kot, drzewo, trawa, grzyb i Ty — to organizmy. Są do siebie niepodobne, ale łączy je życie.",
          "Wszystkie organizmy mają dwie podstawowe cechy.",
          ["Pierwsza: ", em("budowa komórkowa"), ". Organizm składa się z komórek. ", em("Komórka"), " to najmniejsza część organizmu, która sama jest żywa. Niektóre organizmy mają jedną komórkę. Inne — bardzo dużo. Jak dokładnie wygląda komórka, poznamy później."],
          ["Druga: organizmy wykonują ", em("czynności życiowe"), ". Jedzą albo pobierają substancje z otoczenia, oddychają, rosną, reagują na to, co dzieje się wokół."],
          "Kamień, ławka i rower tych cech nie mają. Nie składają się z komórek i nie wykonują czynności życiowych. Dlatego nie są organizmami."
        ],
        ua: [
          "Кіт, дерево, трава, гриб і ти — це організми. Вони не схожі одне на одного, але їх єднає життя.",
          "Усі організми мають дві основні риси.",
          ["Перша: ", em("клітинна будова"), ". Організм складається з клітин. ", em("Клітина"), " — найменша частина організму, яка сама є живою. Деякі організми мають одну клітину. Інші — дуже багато. Як саме виглядає клітина, пізнаємо пізніше."],
          ["Друга: організми виконують ", em("життєві функції"), ". Їдять або беруть речовини з оточення, дихають, ростуть, реагують на те, що діється навколо."],
          "Камінь, лавка і велосипед цих рис не мають. Вони не складаються з клітин і не виконують життєвих функцій. Тому не є організмами."
        ]
      },
      task: {
        id: "l01-e2",
        type: "single-choice",
        question: { pl: "Które dwie cechy mają wszystkie organizmy?", ua: "Які дві риси мають усі організми?" },
        options: [
          { id: "a", label: { pl: "są szare i twarde", ua: "вони сірі і тверді" } },
          { id: "b", label: { pl: "mają budowę komórkową i wykonują czynności życiowe", ua: "мають клітинну будову і виконують життєві функції" } },
          { id: "c", label: { pl: "chodzą i miauczą", ua: "ходять і нявкають" } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Drzewo nie chodzi, a jest organizmem. Łączy je budowa komórkowa i czynności życiowe.", ua: "Так. Дерево не ходить, а є організмом. Спільні риси — клітинна будова і життєві функції." }
      }
    },
    // 6 - Czynności życiowe
    {
      type: "concept",
      heading: { pl: "Czynności życiowe", ua: "Життєві функції" },
      visual: vizGh("l01-czynnosci-7.png", {
        alt: { pl: "Siedem piktogramów czynności życiowych", ua: "Сім піктограм життєвих функцій" },
        title: { pl: "Siedem czynności życiowych.", ua: "Сім життєвих функцій." },
        prompt: { pl: "Edukacyjna infografika 16:9 dla klasy 5. Siedem równych piktogramów w jednym rzędzie lub dwóch, z krótkimi polskimi etykietami: 1) odżywianie się — miska, 2) oddychanie — chmurka pary, 3) wydalanie — kropla, 4) ruch — idący pies i liść zwrócony ku światłu, 5) wzrost i rozwój — szczeniak i dorosły pies, 6) rozmnażanie się — kura z pisklętami, 7) reakcja na bodźce — kot z nastawionymi uszami. Jasne tło, duże ikony, płaski styl, bez wzorów chemicznych, bez logotypów, bez angielskiego." }
      }),
      text: {
        pl: [
          ["To, co organizm robi, ponieważ żyje, nazywamy ", em("czynnościami życiowymi"), ". Zapamiętaj pełny zestaw."],
          ["", em("Odżywianie się"), " — organizm pobiera z otoczenia substancje potrzebne do życia. Pies je. Roślina pobiera wodę i substancje z gleby oraz z powietrza."],
          ["", em("Oddychanie"), " — organizm wymienia gazy potrzebne do życia. Człowiek i zwierzęta pobierają tlen. Jak to działa wewnątrz komórki, poznamy później."],
          ["", em("Wydalanie"), " — organizm usuwa zbędne i szkodliwe substancje, które powstają podczas życia. U człowieka to na przykład mocz i pot."],
          ["", em("Ruch"), " — organizm zmienia położenie całości albo części ciała. Pies biega. Roślina nie chodzi, ale jej liście mogą zwracać się ku światłu."],
          ["", em("Wzrost i rozwój"), " — organizm powiększa się i zmienia. Szczeniak staje się psem. Z sadzonki wyrasta drzewo."],
          ["", em("Rozmnażanie się"), " — z organizmów powstają nowe organizmy. Kura wodzi pisklęta. Z nasion wyrastają nowe rośliny."],
          ["", em("Reakcja na bodźce"), " — organizm odpowiada na zmiany w otoczeniu. Bodźcem może być dźwięk, światło albo temperatura. Kot obraca głowę, gdy usłyszy odgłos."],
          "Ruch należy do życia, ale sam ruch nie wystarcza. Samochód jedzie, a nie jest organizmem: nie ma budowy komórkowej i nie wykonuje pozostałych czynności."
        ],
        ua: [
          ["Те, що організм робить, бо живе, називаємо ", em("життєвими функціями"), ". Запам’ятай повний набір."],
          ["", em("Живлення"), " — організм бере з оточення речовини, потрібні до життя. Пес їсть. Рослина бере воду і речовини з ґрунту та з повітря."],
          ["", em("Дихання"), " — організм обмінюється газами, потрібними до життя. Людина і тварини беруть кисень. Як це діє всередині клітини, пізнаємо пізніше."],
          ["", em("Виділення"), " — організм видаляє зайві і шкідливі речовини, які постають під час життя. У людини це, наприклад, сеча і піт."],
          ["", em("Рух"), " — організм змінює положення цілого тіла або його частини. Пес бігає. Рослина не ходить, але її листки можуть повертатися до світла."],
          ["", em("Ріст і розвиток"), " — організм збільшується і змінюється. Цуценя стає псом. Із саджанки виростає дерево."],
          ["", em("Розмноження"), " — з організмів постають нові організми. Курка водить курчат. З насіння виростають нові рослини."],
          ["", em("Реакція на подразники"), " — організм відповідає на зміни в оточенні. Подразником може бути звук, світло або температура. Кіт обертає голову, коли чує звук."],
          "Рух належить до життя, але самого руху замало. Автомобіль їде, а не є організмом: не має клітинної будови і не виконує інших функцій."
        ]
      },
      task: {
        id: "l01-e3",
        type: "single-choice",
        question: { pl: "Usuwanie zbędnych substancji z organizmu to…", ua: "Видалення зайвих речовин з організму — це…" },
        options: [
          { id: "a", label: { pl: "odżywianie się", ua: "живлення" } },
          { id: "b", label: { pl: "wydalanie", ua: "виділення" } },
          { id: "c", label: { pl: "rozmnażanie się", ua: "розмноження" } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Wydalanie to usuwanie zbędnych i szkodliwych substancji.", ua: "Так. Виділення — це видалення зайвих і шкідливих речовин." }
      }
    },
    // 7 - Jak zbudowany jest organizm wielokomórkowy?
    {
      type: "concept",
      heading: { pl: "Jak zbudowany jest organizm wielokomórkowy?", ua: "Як побудований багатоклітинний організм?" },
      visual: vizGh("l01-poziomy-budowy.png", {
        alt: { pl: "Schemat: komórka, tkanka, narząd, układ, organizm", ua: "Схема: клітина, тканина, орган, система, організм" },
        title: { pl: "Od komórki do organizmu.", ua: "Від клітини до організму." },
        prompt: { pl: "Edukacyjny schemat 16:9 dla klasy 5, pięć poziomów od lewej do prawej, strzałki, duże polskie etykiety: KOMÓRKA, TKANKA, NARZĄD, UKŁAD NARZĄDÓW, ORGANIZM. Proste ikony: jedna komórka, grupa podobnych komórek, serce, serce z naczyniami, sylwetka człowieka. Jasne tło, płaski styl, bez organelli wewnątrz komórki, bez nazw tkanek, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Wiele organizmów składa się z ogromnej liczby komórek. Takiego organizmu nie da się opisać jako „same komórki obok siebie”. Komórki tworzą kolejne poziomy.",
          ["", em("Komórka"), " — najmniejsza żywa część organizmu."],
          ["", em("Tkanka"), " — zespół podobnych komórek, które razem pełnią jedną funkcję."],
          ["", em("Narząd"), " (u roślin mówimy też ", em("organ"), ") — część organizmu zbudowana z tkanek. U człowieka narządem jest serce. U roślin organem jest na przykład liść. Szczegóły narządów poznamy później."],
          ["", em("Układ narządów"), " (system organów) — kilka narządów, które współpracują. Serce i naczynia krwionośne tworzą układ krążenia."],
          ["", em("Organizm"), " — całość. To Ty, pies albo drzewo."],
          "Kolejność, którą zapamiętaj: komórka → tkanka → narząd → układ narządów → organizm."
        ],
        ua: [
          "Багато організмів складаються з величезної кількості клітин. Такий організм не можна описати як «самі клітини поруч». Клітини утворюють наступні рівні.",
          ["", em("Клітина"), " — найменша жива частина організму."],
          ["", em("Тканина"), " — група подібних клітин, які разом виконують одну функцію."],
          ["", em("Орган"), " — частина організму, побудована з тканин. У людини органом є серце. У рослин органом є, наприклад, листок. Подробиці органів пізнаємо пізніше."],
          ["", em("Система органів"), " — кілька органів, які співпрацюють. Серце і кровоносні судини утворюють систему кровообігу."],
          ["", em("Організм"), " — ціле. Це ти, пес або дерево."],
          "Послідовність, яку запам’ятай: клітина → тканина → орган → система органів → організм."
        ]
      },
      task: {
        id: "l01-e4",
        type: "single-choice",
        question: { pl: "Która kolejność poziomów budowy jest poprawna?", ua: "Яка послідовність рівнів будови правильна?" },
        options: [
          { id: "a", label: { pl: "organizm → komórka → tkanka → narząd", ua: "організм → клітина → тканина → орган" } },
          { id: "b", label: { pl: "komórka → tkanka → narząd → układ narządów → organizm", ua: "клітина → тканина → орган → система органів → організм" } },
          { id: "c", label: { pl: "tkanka → komórka → organizm → narząd", ua: "тканина → клітина → організм → орган" } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Od najmniejszej części do całości: komórka, tkanka, narząd, układ, organizm.", ua: "Так. Від найменшої частини до цілого: клітина, тканина, орган, система, організм." }
      }
    },
    // 8 - Dziedziny biologii
    {
      type: "concept",
      heading: { pl: "Dziedziny biologii", ua: "Галузі біології" },
      visual: vizGh("l01-dziedziny.png", {
        alt: { pl: "Sześć dziedzin: zoologia, botanika, mikrobiologia, anatomia, fizjologia, ekologia", ua: "Шість галузей біології" },
        title: { pl: "Sześć dziedzin biologii.", ua: "Шість галузей біології." },
        prompt: { pl: "Edukacyjna infografika 16:9 dla klasy 5, sześć równych kafelków z polskimi nazwami i prostymi ikonami: zoologia — ptak, botanika — liść, mikrobiologia — drobne organizmy pod lupą (bez wirusów), anatomia — zarys ciała, fizjologia — serce i oddech, ekologia — drzewo, zwierzę i słońce razem. Jasne tło, płaski styl, duże etykiety PL, bez logotypów, bez angielskiego, bez białych fartuchów." }
      }),
      text: {
        pl: [
          "Biologia jest dużą nauką, dlatego dzieli się na dziedziny. Dziedzina to część biologii, która zajmuje się wybraną grupą organizmów albo wybranym pytaniem.",
          ["", em("Zoologia"), " bada zwierzęta."],
          ["", em("Botanika"), " bada rośliny."],
          ["", em("Mikrobiologia"), " bada drobnoustroje — organizmy tak małe, że zwykle ogląda się je pod mikroskopem."],
          ["", em("Anatomia"), " bada budowę organizmów."],
          ["", em("Fizjologia"), " bada czynności życiowe, czyli to, jak organizm działa."],
          ["", em("Ekologia"), " bada zależności między organizmami oraz między organizmami a środowiskiem."],
          "Nie musisz dziś być specjalistą. Musisz umieć powiedzieć, czym zajmuje się każda z tych dziedzin."
        ],
        ua: [
          "Біологія — велика наука, тому ділиться на галузі. Галузь — частина біології, яка займається вибраною групою організмів або вибраним питанням.",
          ["", em("Зоологія"), " досліджує тварин."],
          ["", em("Ботаніка"), " досліджує рослини."],
          ["", em("Мікробіологія"), " досліджує мікроорганізми — такі малі, що їх зазвичай розглядають під мікроскопом."],
          ["", em("Анатомія"), " досліджує будову організмів."],
          ["", em("Фізіологія"), " досліджує життєві функції, тобто те, як організм діє."],
          ["", em("Екологія"), " досліджує залежності між організмами та між організмами і середовищем."],
          "Сьогодні не треба бути фахівцем. Треба вміти сказати, чим займається кожна з цих галузей."
        ]
      },
      task: {
        id: "l01-e5",
        type: "single-choice",
        question: { pl: "Czym zajmuje się ekologia?", ua: "Чим займається екологія?" },
        options: [
          { id: "a", label: { pl: "tylko budową serca", ua: "лише будовою серця" } },
          { id: "b", label: { pl: "zależnościami między organizmami i środowiskiem", ua: "залежностями між організмами і середовищем" } },
          { id: "c", label: { pl: "silnikami samochodów", ua: "двигунами автомобілів" } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Ekologia bada zależności organizmów między sobą i ze środowiskiem.", ua: "Так. Екологія досліджує залежності організмів між собою і з середовищем." }
      }
    },
    // 9 - 
    {
      type: "practice",
      heading: { pl: "Praktyka. Które z nich żyją?", ua: "Практика. Які з них живуть?" },
      visual: vizGh("l01-zestaw8.jpg", {
        alt: { pl: "Osiem przykładów: słonecznik, łyżka, pszczoła, zegar, pieczarka, cegła, wróbel, kałuża", ua: "Вісім прикладів" },
        title: { pl: "Które z tych rzeczy są organizmami?", ua: "Які з цих речей є організмами?" },
        prompt: { pl: "Edukacyjna plansza 16:9, osiem równych kadrów bez napisów: słonecznik, łyżka, pszczoła, zegar, pieczarka, cegła, wróbel, kałuża. Jeden obiekt w kadrze, bez logotypów." }
      }),
      task: {
        id: "l01-p1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie organizmy.", ua: "Познач усі організми." },
        options: [
          { id: "a", label: { pl: "słonecznik", ua: "соняшник" } },
          { id: "b", label: { pl: "łyżka", ua: "ложка" } },
          { id: "c", label: { pl: "pszczoła", ua: "бджола" } },
          { id: "d", label: { pl: "zegar", ua: "годинник" } },
          { id: "e", label: { pl: "pieczarka", ua: "печериця" } },
          { id: "f", label: { pl: "cegła", ua: "цегла" } },
          { id: "g", label: { pl: "wróbel", ua: "горобець" } },
          { id: "h", label: { pl: "kałuża", ua: "калюжа" } }
        ],
        answer: ["a", "c", "e", "g"],
        explanation: {
          pl: "Organizmy: słonecznik, pszczoła, pieczarka, wróbel. Mają budowę komórkową i wykonują czynności życiowe. Kałuża się rusza, ale nie jest organizmem.",
          ua: "Організми: соняшник, бджола, печериця, горобець. Калюжа рухається, але не є організмом."
        }
      }
    },
    // 10 - 
    {
      type: "practice",
      heading: { pl: "Cechy i czynności", ua: "Риси і функції" },
      task: {
        id: "l01-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Wszystkie organizmy mają budowę komórkową.", ua: "Усі організми мають клітинну будову." } },
          { id: "b", label: { pl: "Wydalanie to usuwanie zbędnych substancji z organizmu.", ua: "Виділення — це видалення зайвих речовин з організму." } },
          { id: "c", label: { pl: "Roślina nie wykonuje żadnej czynności życiowej, bo nie biega.", ua: "Рослина не виконує жодної життєвої функції, бо не бігає." } },
          { id: "d", label: { pl: "Reakcja na bodźce należy do czynności życiowych.", ua: "Реакція на подразники належить до життєвих функцій." } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Roślina żyje: odżywia się, oddycha, rośnie, reaguje na światło. Brak biegania nie oznacza braku życia.",
          ua: "Рослина живе: живиться, дихає, росте, реагує на світло. Брак бігання не означає брак життя."
        }
      }
    },
    // 11 - 
    {
      type: "practice",
      heading: { pl: "Wymień czynności życiowe", ua: "Назви життєві функції" },
      task: {
        id: "l01-p3",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie czynności życiowe.", ua: "Познач усі життєві функції." },
        options: [
          { id: "a", label: { pl: "odżywianie się", ua: "живлення" } },
          { id: "b", label: { pl: "oddychanie", ua: "дихання" } },
          { id: "c", label: { pl: "wydalanie", ua: "виділення" } },
          { id: "d", label: { pl: "ruch", ua: "рух" } },
          { id: "e", label: { pl: "bycie szarym i twardym", ua: "бути сірим і твердим" } },
          { id: "f", label: { pl: "wzrost i rozwój", ua: "ріст і розвиток" } },
          { id: "g", label: { pl: "rozmnażanie się", ua: "розмноження" } },
          { id: "h", label: { pl: "reakcja na bodźce", ua: "реакція на подразники" } },
          { id: "i", label: { pl: "jazda na kołach", ua: "їзда на колесах" } }
        ],
        answer: ["a", "b", "c", "d", "f", "g", "h"],
        explanation: {
          pl: "Siedem czynności: odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce.",
          ua: "Сім функцій: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники."
        }
      }
    },
    // 12 - Poziomy budowy
    {
      type: "practice",
      heading: { pl: "Poziomy budowy", ua: "Рівні будови" },
      task: {
        id: "l01-p4",
        type: "single-choice",
        question: {
          pl: "Serce to narząd. Z podobnych komórek powstaje tkanka, a serce razem z naczyniami tworzy układ krążenia. Które zdanie jest prawdziwe?",
          ua: "Серце — орган. З подібних клітин постає тканина, а серце разом із судинами утворює систему кровообігу. Яке речення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Narząd jest mniejszy niż komórka.", ua: "Орган менший за клітину." } },
          { id: "b", label: { pl: "Układ narządów powstaje z kilku współpracujących narządów.", ua: "Система органів постає з кількох органів, які співпрацюють." } },
          { id: "c", label: { pl: "Tkanka to to samo co cały organizm.", ua: "Тканина — це те саме, що весь організм." } }
        ],
        answer: "b",
        explanation: {
          pl: "Komórki tworzą tkankę, tkanki — narząd, narządy — układ, układy — organizm.",
          ua: "Клітини утворюють тканину, тканини — орган, органи — систему, системи — організм."
        }
      }
    },
    // 13 - Dziedziny biologii
    {
      type: "practice",
      heading: { pl: "Dziedziny biologii", ua: "Галузі біології" },
      task: {
        id: "l01-p5",
        type: "single-choice",
        question: { pl: "Które połączenie jest w całości poprawne?", ua: "Яке поєднання повністю правильне?" },
        options: [
          { id: "a", label: { pl: "zoologia — rośliny; botanika — zwierzęta; anatomia — silniki", ua: "зоологія — рослини; ботаніка — тварини; анатомія — двигуни" } },
          { id: "b", label: { pl: "zoologia — zwierzęta; botanika — rośliny; mikrobiologia — drobnoustroje; anatomia — budowa; fizjologia — czynności życiowe; ekologia — zależności organizmów i środowiska", ua: "зоологія — тварини; ботаніка — рослини; мікробіологія — мікроорганізми; анатомія — будова; фізіологія — життєві функції; екологія — залежності організмів і середовища" } },
          { id: "c", label: { pl: "fizjologia — tylko kamienie; ekologia — tylko zegary", ua: "фізіологія — лише камені; екологія — лише годинники" } }
        ],
        answer: "b",
        explanation: {
          pl: "Każda dziedzina ma swój zakres. Zapamiętaj wszystkie sześć nazw z podręcznika.",
          ua: "Кожна галузь має свій обсяг. Запам’ятай усі шість назв."
        }
      }
    },
    // 14 - Sprawdzenie 1. Czym zajmuje się biologia?
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Czym zajmuje się biologia?", ua: "Перевірка 1. Чим займається біологія?" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l01-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie zdania, które opisują, czym zajmuje się biologia.", ua: "Познач усі речення, які описують, чим займається біологія." },
        options: [
          { id: "a", label: { pl: "Bada budowę organizmów.", ua: "Досліджує будову організмів." } },
          { id: "b", label: { pl: "Bada czynności życiowe.", ua: "Досліджує життєві функції." } },
          { id: "c", label: { pl: "Bada zależności między organizmami.", ua: "Досліджує залежності між організмами." } },
          { id: "d", label: { pl: "Bada wpływ środowiska, na przykład temperatury i światła, na organizmy.", ua: "Досліджує вплив середовища, наприклад температури і світла, на організми." } },
          { id: "e", label: { pl: "Bada mapy państw i stolice.", ua: "Досліджує мапи держав і столиці." } }
        ],
        answer: ["a", "b", "c", "d"],
        explanation: {
          pl: "Biologia to nauka o organizmach żywych: ich budowie, czynnościach, zależnościach i wpływie środowiska. Mapy to geografia.",
          ua: "Біологія — наука про живі організми: будову, функції, залежності і вплив середовища. Мапи — це географія."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Cechy organizmów", ua: "Перевірка 2. Риси організмів" },
      task: {
        id: "l01-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz dwie wspólne cechy organizmów.", ua: "Познач дві спільні риси організмів." },
        options: [
          { id: "a", label: { pl: "budowa komórkowa", ua: "клітинна будова" } },
          { id: "b", label: { pl: "wykonywanie czynności życiowych", ua: "виконання життєвих функцій" } },
          { id: "c", label: { pl: "ładny kolor", ua: "гарний колір" } },
          { id: "d", label: { pl: "twardość jak u kamienia", ua: "твердість як у каменя" } }
        ],
        answer: ["a", "b"],
        explanation: {
          pl: "Organizmy składają się z komórek i wykonują czynności życiowe.",
          ua: "Організми складаються з клітин і виконують життєві функції."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Czynności życiowe", ua: "Перевірка 3. Життєві функції" },
      task: {
        id: "l01-s3",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie czynności życiowe.", ua: "Познач усі життєві функції." },
        options: [
          { id: "a", label: { pl: "odżywianie się", ua: "живлення" } },
          { id: "b", label: { pl: "oddychanie", ua: "дихання" } },
          { id: "c", label: { pl: "wydalanie", ua: "виділення" } },
          { id: "d", label: { pl: "ruch", ua: "рух" } },
          { id: "e", label: { pl: "wzrost i rozwój", ua: "ріст і розвиток" } },
          { id: "f", label: { pl: "posiadanie kół", ua: "мати колеса" } },
          { id: "g", label: { pl: "rozmnażanie się", ua: "розмноження" } },
          { id: "h", label: { pl: "reakcja na bodźce", ua: "реакція на подразники" } }
        ],
        answer: ["a", "b", "c", "d", "e", "g", "h"],
        explanation: {
          pl: "Pełny zestaw: odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce.",
          ua: "Повний набір: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Poziomy budowy", ua: "Перевірка 4. Рівні будови" },
      task: {
        id: "l01-s4",
        type: "single-choice",
        question: { pl: "Uporządkuj poziomy budowy organizmu wielokomórkowego.", ua: "Упорядкуй рівні будови багатоклітинного організму." },
        options: [
          { id: "a", label: { pl: "narząd → komórka → organizm → tkanka → układ narządów", ua: "орган → клітина → організм → тканина → система органів" } },
          { id: "b", label: { pl: "komórka → tkanka → narząd → układ narządów → organizm", ua: "клітина → тканина → орган → система органів → організм" } },
          { id: "c", label: { pl: "układ narządów → tkanka → komórka → narząd → organizm", ua: "система органів → тканина → клітина → орган → організм" } }
        ],
        answer: "b",
        explanation: {
          pl: "Od najmniejszej części do całości: komórka, tkanka, narząd, układ narządów, organizm.",
          ua: "Від найменшої частини до цілого: клітина, тканина, орган, система органів, організм."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Dziedzina biologii", ua: "Перевірка 5. Галузь біології" },
      task: {
        id: "l01-s5",
        type: "single-choice",
        question: { pl: "Czym zajmuje się fizjologia?", ua: "Чим займається фізіологія?" },
        options: [
          { id: "a", label: { pl: "budową organizmów", ua: "будовою організмів" } },
          { id: "b", label: { pl: "czynnościami życiowymi, czyli tym, jak organizm działa", ua: "життєвими функціями, тобто тим, як організм діє" } },
          { id: "c", label: { pl: "tylko zwierzętami, nigdy roślinami", ua: "лише тваринами, ніколи рослинами" } }
        ],
        answer: "b",
        explanation: {
          pl: "Fizjologia bada czynności. Anatomia bada budowę. Zoologia bada zwierzęta.",
          ua: "Фізіологія досліджує функції. Анатомія — будову. Зоологія — тварин."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l01-poziomy-budowy.png", {
        alt: { pl: "Schemat poziomów budowy", ua: "Схема рівнів будови" },
        title: { pl: "Komórka → tkanka → narząd → układ → organizm.", ua: "Клітина → тканина → орган → система → організм." },
        prompt: { pl: "Ten sam edukacyjny schemat 16:9 co na ekranie poziomów budowy: komórka, tkanka, narząd, układ narządów, organizm. Bez organelli, bez logotypów." }
      }),
      text: {
        pl: [
          "Biologia bada organizmy żywe: ich budowę, czynności życiowe, zależności między nimi i wpływ środowiska. Organizmy przystosowują się do warunków, w których żyją.",
          "Wspólne cechy organizmów to budowa komórkowa i wykonywanie czynności życiowych.",
          "Czynności życiowe: odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce.",
          "Organizm wielokomórkowy: komórka → tkanka → narząd → układ narządów → organizm.",
          "Dziedziny: zoologia, botanika, mikrobiologia, anatomia, fizjologia, ekologia."
        ],
        ua: [
          "Біологія досліджує живі організми: будову, життєві функції, залежності між ними і вплив середовища. Організми пристосовуються до умов, у яких живуть.",
          "Спільні риси організмів — клітинна будова і виконання життєвих функцій.",
          "Життєві функції: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники.",
          "Багатоклітинний організм: клітина → тканина → орган → система органів → організм.",
          "Галузі: зоологія, ботаніка, мікробіологія, анатомія, фізіологія, екологія."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, czym zajmuje się biologia.", ua: "Можу пояснити, чим займається біологія." },
        { pl: "Potrafię wymienić dwie wspólne cechy organizmów.", ua: "Можу назвати дві спільні риси організмів." },
        { pl: "Potrafię wymienić czynności życiowe i krótko powiedzieć, co oznaczają.", ua: "Можу назвати життєві функції і коротко сказати, що вони означають." },
        { pl: "Potrafię uporządkować poziomy budowy organizmu wielokomórkowego.", ua: "Можу упорядкувати рівні будови багатоклітинного організму." },
        { pl: "Potrafię powiedzieć, czym zajmuje się wskazana dziedzina biologii.", ua: "Можу сказати, чим займається вказана галузь біології." }
      ]
    }
  ]
};
