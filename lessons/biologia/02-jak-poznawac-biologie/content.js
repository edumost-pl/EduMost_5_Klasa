function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L02_Jak_poznawac_biologie/images/";

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
        { pl: "Odróżnisz obserwację od doświadczenia.", ua: "Відрізниш спостереження від досліду." },
        { pl: "Wskażesz próbę badawczą i kontrolną i powiesz, czym się różnią.", ua: "Вкажеш дослідну і контрольну пробу і скажеш, чим вони відрізняються." },
        { pl: "Uporządkujesz etapy metody naukowej.", ua: "Упорядкуєш етапи наукового методу." },
        { pl: "Na przykładzie powiesz, czym jest problem badawczy, hipoteza i wniosek.", ua: "На прикладі скажеш, що таке дослідницька проблема, гіпотеза і висновок." },
        { pl: "Podasz inne źródła wiedzy biologicznej i cechy dobrego badacza.", ua: "Назвеш інші джерела біологічних знань і риси доброго дослідника." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "obserwacja", ua: "спостереження" },
        { pl: "doświadczenie", ua: "дослід" },
        { pl: "problem badawczy", ua: "дослідницька проблема" },
        { pl: "hipoteza", ua: "гіпотеза" },
        { pl: "próba badawcza", ua: "дослідна проба" },
        { pl: "próba kontrolna", ua: "контрольна проба" },
        { pl: "wniosek", ua: "висновок" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l02-zacznijmy-banany.png", {
        alt: { pl: "Zielone banany w misce razem z czerwonymi jabłkami", ua: "Зелені банани в мисці разом із червоними яблуками" },
        title: { pl: "Co tu zauważasz?", ua: "Що тут помічаєш?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia, nie rysunek i nie infografika. Na drewnianym stole szklana miska: kilka niedojrzałych zielonych bananów i 2–3 czerwone jabłka. Jasne dzienne światło, kuchnia lub jadalnia. Bez napisów, bez logotypów, bez twarzy, bez angielskiego." }
      }),
      text: {
        pl: [
          "Spójrz na zdjęcie. W misce leżą zielone banany i czerwone jabłka.",
          "Niektórzy ludzie mówią: „Banany przy jabłkach szybciej żółkną”. Czy to prawda? Na tej lekcji zobaczysz, jak naukowiec dochodzi do odpowiedzi — krok po kroku."
        ],
        ua: [
          "Подивись на фото. У мисці лежать зелені банани і червоні яблука.",
          "Дехто каже: «Банани біля яблук швидше жовтіють». Чи це правда? На цьому уроці побачиш, як науковець доходить до відповіді — крок за кроком."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Obserwacja", ua: "Спостереження" },
      visual: vizGh("l02-obserwacja-bocian.png", {
        alt: { pl: "Para białych bocianów na gnieździe na dachu", ua: "Пара білих лелек на гнізді на даху" },
        title: { pl: "Patrzymy. Niczego celowo nie zmieniamy.", ua: "Дивимося. Нічого навмисно не змінюємо." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Dwa białe bociany w dużym gnieździe na dachu wiejskiego domu w Polsce, słoneczny dzień, cegły, słoma gniazda. Ptaki spokojne, bez zbliżenia na twarze ludzi, bez napisów, bez logotypów, bez angielskiego." }
      }),
      text: {
        pl: [
          ["Najstarszy sposób poznawania przyrody to ", em("obserwacja"), ". Obserwować znaczy uważnie patrzeć i zapamiętywać, co się dzieje."],
          "Możesz obserwować parę bocianów na gnieździe: jak karmią pisklęta, kiedy odlatują, jak zachowują się przy gnieździe.",
          ["Ważna zasada: podczas obserwacji ", em("niczego celowo nie zmieniamy"), ". Nie przepłaszamy ptaków, nie przestawiamy gniazda, nie dokładamy jedzenia „na próbę”. Tylko patrzymy."],
          "Obserwacja daje wiedzę o tym, jak organizmy żyją naprawdę — bez naszej ingerencji."
        ],
        ua: [
          ["Найдавніший спосіб пізнавати природу — ", em("спостереження"), ". Спостерігати означає уважно дивитися і запам’ятовувати, що діється."],
          "Можна спостерігати пару лелек на гнізді: як годують пташенят, коли відлітають, як поводяться біля гнізда.",
          ["Важливе правило: під час спостереження ", em("нічого навмисно не змінюємо"), ". Не полохаємо птахів, не переставляємо гніздо, не додаємо їжі «на пробу». Лише дивимося."],
          "Спостереження дає знання про те, як організми живуть насправді — без нашого втручання."
        ]
      },
      task: {
        id: "l02-e1",
        type: "single-choice",
        question: { pl: "Która sytuacja jest obserwacją?", ua: "Яка ситуація є спостереженням?" },
        options: [
          { id: "a", label: { pl: "Patrzysz na bociany i nic przy gnieździe nie ruszasz.", ua: "Дивишся на лелек і нічого біля гнізда не чіпаєш." } },
          { id: "b", label: { pl: "Przenosisz gniazdo na inny dach, żeby sprawdzić, co zrobią ptaki.", ua: "Переносиш гніздо на інший дах, щоб перевірити, що зроблять птахи." } },
          { id: "c", label: { pl: "Dokładasz do gniazda jedzenie i mierzysz, czy pisklęta rosną szybciej.", ua: "Додаєш до гнізда їжу і міряєш, чи пташенята ростуть швидше." } }
        ],
        answer: "a",
        explanation: { pl: "Tak. Obserwacja to uważne patrzenie bez celowej zmiany. Przenoszenie gniazda albo dokładanie jedzenia to już ingerencja.", ua: "Так. Спостереження — уважне дивитися без навмисної зміни." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Doświadczenie", ua: "Дослід" },
      visual: vizGh("l02-doswiadczenie-fasola.png", {
        alt: { pl: "Doniczki z fasolą: jedna z wilgotną glebą, druga z suchą", ua: "Горщики з квасолею: один із вологим ґрунтом, другий із сухим" },
        title: { pl: "Zmieniamy jeden czynnik i sprawdzamy skutek.", ua: "Змінюємо один чинник і перевіряємо наслідок." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Na parapecie dwie identyczne pomarańczowe doniczki z młodymi sadzonkami fasoli. Lewa: gleba wyraźnie wilgotna, liście zdrowsze. Prawa: gleba sucha, roślina słabsza. Dłoń dziecka podlewa tylko lewą doniczkę, twarz poza kadrem. Jasne światło. Bez napisów, bez logotypów, bez angielskiego." }
      }),
      text: {
        pl: [
          ["", em("Doświadczenie"), " wygląda inaczej niż obserwacja. Tu celowo zmieniamy ", em("jeden wybrany czynnik"), " i sprawdzamy, jak to wpływa na organizm albo na proces."],
          "Przykład: chcesz wiedzieć, czy wilgotność gleby wpływa na wzrost fasoli. Jedne rośliny podlewasz, inne — mniej albo wcale. Potem porównujesz, jak rosną.",
          "Czynnikiem, który zmieniasz, jest tu woda w glebie. Światło, doniczka i rodzaj nasion powinny zostać takie same. Inaczej nie wiesz, co naprawdę zadziałało.",
          "Krótko: obserwacja = patrzymy i niczego celowo nie zmieniamy. Doświadczenie = celowo zmieniamy jeden czynnik i sprawdzamy jego wpływ."
        ],
        ua: [
          ["", em("Дослід"), " виглядає інакше, ніж спостереження. Тут навмисно змінюємо ", em("один вибраний чинник"), " і перевіряємо, як це впливає на організм або на процес."],
          "Приклад: хочеш знати, чи вологість ґрунту впливає на ріст квасолі. Одні рослини поливаєш, інші — менше або зовсім. Потім порівнюєш, як ростуть.",
          "Чинник, який змінюєш, — вода в ґрунті. Світло, горщик і вид насіння мають лишитися такими самими. Інакше не знаєш, що насправді подіяло.",
          "Коротко: спостереження = дивимося і нічого навмисно не змінюємо. Дослід = навмисно змінюємо один чинник і перевіряємо його вплив."
        ]
      },
      task: {
        id: "l02-e2",
        type: "single-choice",
        question: { pl: "Co jest doświadczeniem?", ua: "Що є дослідом?" },
        options: [
          { id: "a", label: { pl: "Oglądasz fasolę na łące i nic przy niej nie robisz.", ua: "Дивишся на квасолю на луці і нічого з нею не робиш." } },
          { id: "b", label: { pl: "Podlewasz jedne rośliny mocniej niż drugie, żeby sprawdzić wpływ wody.", ua: "Поливаєш одні рослини сильніше за інші, щоб перевірити вплив води." } },
          { id: "c", label: { pl: "Czytasz w książce, jak rośnie fasola.", ua: "Читаєш у книжці, як росте квасоля." } }
        ],
        answer: "b",
        explanation: { pl: "Tak. Doświadczenie to celowa zmiana jednego czynnika. Samo patrzenie to obserwacja. Czytanie książki to inne źródło wiedzy.", ua: "Так. Дослід — навмисна зміна одного чинника." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwa sposoby poznawania", ua: "Два способи пізнання" },
      visual: tree({
        layout: "fork",
        root: { pl: "jak poznajemy biologię", ua: "як пізнаємо біологію" },
        items: [
          { pl: "obserwacja — bez zmiany", ua: "спостереження — без зміни" },
          { pl: "doświadczenie — jeden czynnik", ua: "дослід — один чинник" }
        ]
      }),
      items: [
        { pl: "obserwacja — uważnie patrzysz, niczego celowo nie zmieniasz", ua: "спостереження — уважно дивишся, нічого навмисно не змінюєш" },
        { pl: "doświadczenie — celowo zmieniasz jeden czynnik i sprawdzasz skutek", ua: "дослід — навмисно змінюєш один чинник і перевіряєш наслідок" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Próba badawcza i próba kontrolna", ua: "Дослідна і контрольна проба" },
      visual: vizGh("l02-proby-banany.png", {
        alt: { pl: "Dwie miski: banany z jabłkami oraz same banany", ua: "Дві миски: банани з яблуками та самі банани" },
        title: { pl: "Jedna zmiana. Reszta warunków taka sama.", ua: "Одна зміна. Решта умов така сама." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia, nie rysunek. Dwie identyczne szklane miski obok siebie na stole. LEWA: zielone banany i czerwone jabłka; pod spodem duża czytelna etykieta po polsku: próba badawcza. PRAWA: tylko zielone banany, tyle samo sztuk; etykieta: próba kontrolna. Napisy tylko po polsku, duże, bez angielskiego, bez logotypów, bez twarzy." }
      }),
      text: {
        pl: [
          "Żeby doświadczenie miało sens, trzeba mieć z czym porównać wynik.",
          ["", em("Próba badawcza"), " to zestaw, w którym zmieniamy wybrany czynnik. Tu: banany leżą razem z jabłkami."],
          ["", em("Próba kontrolna"), " to zestaw bez tej zmiany. Służy do porównania. Tu: same banany, bez jabłek."],
          "Obie miski są takie same. Tyle samo bananów, podobne miejsce, ten sam czas. Różni je tylko jeden czynnik: obecność jabłek.",
          "Gdybyś do jednej miski dodał jabłka, a drugą postawił w lodówce, nie wiedziałbyś, co zadziałało: jabłka czy zimno. Dlatego pozostałe warunki muszą być jednakowe."
        ],
        ua: [
          "Щоб дослід мав сенс, треба мати з чим порівняти результат.",
          ["", em("Дослідна проба"), " — набір, у якому змінюємо вибраний чинник. Тут: банани лежать разом з яблуками."],
          ["", em("Контрольна проба"), " — набір без цієї зміни. Служить для порівняння. Тут: самі банани, без яблук."],
          "Обидві миски такі самі. Стільки ж бананів, подібне місце, той самий час. Відрізняє їх лише один чинник: наявність яблук.",
          "Якби до однієї миски додати яблука, а другу поставити в холодильник, не знав би, що подіяло: яблука чи холод. Тому решта умов має бути однакова."
        ]
      },
      task: {
        id: "l02-e3",
        type: "single-choice",
        question: { pl: "Która miska to próba badawcza?", ua: "Яка миска є дослідною пробою?" },
        options: [
          { id: "a", label: { pl: "miska z samymi bananami", ua: "миска із самими бананами" } },
          { id: "b", label: { pl: "miska z bananami i jabłkami", ua: "миска з бананами і яблуками" } },
          { id: "c", label: { pl: "obie miski, bo są podobne", ua: "обидві миски, бо вони подібні" } }
        ],
        answer: "b",
        explanation: { pl: "Próba badawcza ma zmieniony czynnik — tu jabłka. Same banany to próba kontrolna do porównania.", ua: "Дослідна проба має змінений чинник — тут яблука. Самі банани — контрольна проба." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Metoda naukowa", ua: "Науковий метод" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Sześć etapów metody naukowej", ua: "Шість етапів наукового методу" },
        items: [
          { pl: "1. obserwacja", ua: "1. спостереження" },
          { pl: "2. problem", ua: "2. проблема" },
          { pl: "3. hipoteza", ua: "3. гіпотеза" },
          { pl: "4. doświadczenie", ua: "4. дослід" },
          { pl: "5. analiza", ua: "5. аналіз" },
          { pl: "6. wniosek", ua: "6. висновок" }
        ]
      }),
      items: [
        { pl: "obserwacja → problem → hipoteza", ua: "спостереження → проблема → гіпотеза" },
        { pl: "doświadczenie → analiza → wniosek", ua: "дослід → аналіз → висновок" }
      ],
      text: {
        pl: [
          ["Sposób, w jaki naukowiec szuka odpowiedzi, nazywamy ", em("metodą naukową"), ". To kolejne kroki, nie zgadywanie na chybił trafił."],
          ["1. ", em("Obserwacja"), " — zauważasz coś ciekawego. Zielone banany przy jabłkach zdają się szybciej żółknąć."],
          ["2. ", em("Problem badawczy"), " — zamieniasz to w pytanie. „Czy obecność jabłek przyspiesza dojrzewanie bananów?”"],
          ["3. ", em("Hipoteza"), " — to możliwa odpowiedź, którą trzeba sprawdzić. „Banany dojrzewają szybciej, gdy leżą razem z jabłkami.” Hipoteza to jeszcze nie pewność."],
          ["4. ", em("Przeprowadzenie doświadczenia"), " — planujesz próbę badawczą i kontrolną i czekasz kilka dni."],
          ["5. ", em("Analiza wyników"), " — zapisujesz, co się stało. Banany z jabłkami są mocno żółte i mają brązowe plamy. Banany bez jabłek są tylko jasnożółte, bez plam."],
          ["6. ", em("Wniosek"), " — decydujesz, czy hipoteza się potwierdziła. Tu: tak, jabłka przyspieszają dojrzewanie bananów."],
          "Kolejność zapamiętaj: obserwacja → problem badawczy → hipoteza → doświadczenie → analiza wyników → wniosek."
        ],
        ua: [
          ["Спосіб, у який науковець шукає відповідь, називаємо ", em("науковим методом"), ". Це наступні кроки, а не вгадування навмання."],
          ["1. ", em("Спостереження"), " — помічаєш щось цікаве. Зелені банани біля яблук ніби швидше жовтіють."],
          ["2. ", em("Дослідницька проблема"), " — перетворюєш це на питання. «Чи наявність яблук прискорює достигання бананів?»"],
          ["3. ", em("Гіпотеза"), " — можлива відповідь, яку треба перевірити. «Банани достигають швидше, коли лежать разом з яблуками.» Гіпотеза — ще не певність."],
          ["4. ", em("Проведення досліду"), " — плануєш дослідну і контрольну пробу і чекаєш кілька днів."],
          ["5. ", em("Аналіз результатів"), " — записуєш, що сталося. Банани з яблуками сильно жовті і з коричневими плямами. Банани без яблук лише світло-жовті, без плям."],
          ["6. ", em("Висновок"), " — вирішуєш, чи гіпотеза підтвердилася. Тут: так, яблука прискорюють достигання бананів."],
          "Послідовність запам’ятай: спостереження → дослідницька проблема → гіпотеза → дослід → аналіз результатів → висновок."
        ]
      },
      task: {
        id: "l02-e4",
        type: "single-choice",
        question: { pl: "Co następuje od razu po postawieniu hipotezy?", ua: "Що йде одразу після висунення гіпотези?" },
        options: [
          { id: "a", label: { pl: "sformułowanie wniosku", ua: "формулювання висновку" } },
          { id: "b", label: { pl: "przeprowadzenie doświadczenia", ua: "проведення досліду" } },
          { id: "c", label: { pl: "obserwacja", ua: "спостереження" } }
        ],
        answer: "b",
        explanation: { pl: "Po hipotezie sprawdzamy ją doświadczeniem. Wniosek jest na końcu, obserwacja — na początku.", ua: "Після гіпотези перевіряємо її дослідом. Висновок — наприкінці." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Inne źródła wiedzy biologicznej", ua: "Інші джерела біологічних знань" },
      visual: vizGh("l02-zrodla-wiedzy.png", {
        alt: { pl: "Ogród botaniczny z kaktusami", ua: "Ботанічний сад із кактусами" },
        title: { pl: "Nie tylko obserwacja i doświadczenie.", ua: "Не лише спостереження і дослід." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Ogród botaniczny w słoneczny dzień: wysokie kaktusy i sukulenty, ścieżka, inne rośliny z ciepłych krajów. Bez napisów, bez logotypów, bez zbliżenia na twarze, bez angielskiego." }
      }),
      text: {
        pl: [
          "Obserwacja i doświadczenie są najważniejsze, ale biolog korzysta też z innych źródeł wiedzy.",
          ["", em("Zajęcia terenowe"), " — w lesie, na łące albo nad stawem. Pomagają przewodniki i atlasy do rozpoznawania grzybów, roślin i zwierząt."],
          "Wiedzę dają też wycieczki: muzeum przyrodnicze, ogród zoologiczny, ogród botaniczny. W ogrodzie botanicznym możesz zobaczyć rośliny z innych części świata.",
          "Korzystamy również z książek, czasopism popularnonaukowych, filmów przyrodniczych i edukacyjnych stron internetowych.",
          "Te źródła nie zastępują myślenia naukowca. Pomagają zbierać informacje, porównywać i uczyć się od innych."
        ],
        ua: [
          "Спостереження і дослід найважливіші, але біолог користується також іншими джерелами знань.",
          ["", em("Заняття на місцевості"), " — у лісі, на луці або біля ставка. Допомагають путівники й атласи для розпізнавання грибів, рослин і тварин."],
          "Знання дають також екскурсії: природничий музей, зоопарк, ботанічний сад. У ботанічному саду можна побачити рослини з інших частин світу.",
          "Користуємося також книжками, науково-популярними журналами, природничими фільмами й освітніми сайтами.",
          "Ці джерела не замінюють мислення науковця. Вони допомагають збирати інформацію, порівнювати і вчитися від інших."
        ]
      },
      task: {
        id: "l02-e5",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie źródła wiedzy biologicznej inne niż obserwacja i doświadczenie.", ua: "Познач усі джерела біологічних знань, інші ніж спостереження і дослід." },
        options: [
          { id: "a", label: { pl: "zajęcia terenowe z atlasem roślin", ua: "заняття на місцевості з атласом рослин" } },
          { id: "b", label: { pl: "ogród botaniczny", ua: "ботанічний сад" } },
          { id: "c", label: { pl: "silnik samochodu", ua: "двигун автомобіля" } },
          { id: "d", label: { pl: "film przyrodniczy", ua: "природничий фільм" } },
          { id: "e", label: { pl: "edukacyjna strona internetowa", ua: "освітній сайт" } }
        ],
        answer: ["a", "b", "d", "e"],
        explanation: { pl: "Źródłami są też teren, muzea, zoo, ogród botaniczny, książki, czasopisma, filmy i strony edukacyjne. Silnik nie jest źródłem wiedzy biologicznej.", ua: "Джерелами є також місцевість, музеї, зоопарк, ботанічний сад, книжки, журнали, фільми й сайти." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dobry badacz i trudne pytania", ua: "Добрий дослідник і складні питання" },
      visual: vizGh("l02-badacz-teren.png", {
        alt: { pl: "Uczeń z lornetką na łące", ua: "Учень з біноклем на луці" },
        title: { pl: "Szacunek, ostrożność, cierpliwość, systematyczność, rzetelność.", ua: "Повага, обережність, терпіння, систематичність, сумлінність." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 jak prawdziwa fotografia. Dziecko ok. 11 lat siedzi w wysokiej trawie, kapelusz z szerokim rondem, patrzy przez czarną lornetkę; twarz częściowo zasłonięta lornetką lub ujęcie z boku, bez zbliżenia. Letni dzień, łąka. Bez napisów, bez logotypów, bez angielskiego." }
      }),
      text: {
        pl: [
          "Dobry badacz ma kilka cech, które chronią przyrodę i jego samego.",
          ["", em("Szacunek dla przyrody"), " — nie niszczysz roślin i nie płoszysz zwierząt podczas obserwacji w terenie."],
          ["", em("Ostrożność"), " — przy doświadczeniach chronisz skórę i oczy. Nie mieszasz substancji „dla zabawy”."],
          ["", em("Cierpliwość"), " — trzymasz się planu, nawet jeśli trzeba długo czekać albo powtórzyć próbę."],
          ["", em("Systematyczność"), " — regularnie zapisujesz wyniki. Pomocny jest rysunek albo zdjęcie."],
          ["", em("Rzetelność"), " — badanie przeprowadzasz i opisujesz uczciwie. Nie dopisujesz wyniku, którego nie było."],
          "Naukowcy czasem prowadzą doświadczenia na zwierzętach, na przykład na myszach. Jedni ludzie mówią, że zwierzęta czują ból i stres, więc takich badań nie powinno być. Inni odpowiadają, że bez nich trudniej tworzyć leki i sposoby wykrywania chorób.",
          "Dziś takie badania są ściśle kontrolowane: mają być potrzebne, a dobro zwierząt trzeba brać pod uwagę. Dzięki obrońcom zwierząt w wielu krajach nie testuje się już kosmetyków na zwierzętach. To trudne pytanie — warto o nim rozmawiać spokojnie, z szacunkiem."
        ],
        ua: [
          "Добрий дослідник має кілька рис, які захищають природу і його самого.",
          ["", em("Повага до природи"), " — не нищиш рослини і не полохаєш тварин під час спостережень на місцевості."],
          ["", em("Обережність"), " — під час дослідів захищаєш шкіру і очі. Не змішуєш речовини «для забави»."],
          ["", em("Терпіння"), " — тримаєшся плану, навіть якщо треба довго чекати або повторити пробу."],
          ["", em("Систематичність"), " — регулярно записуєш результати. Допомагає малюнок або фото."],
          ["", em("Сумлінність"), " — дослідження проводиш і описуєш чесно. Не дописуєш результату, якого не було."],
          "Науковці іноді проводять досліди на тваринах, наприклад на мишах. Одні люди кажуть, що тварини відчувають біль і стрес, тож таких досліджень не має бути. Інші відповідають, що без них важче створювати ліки і способи виявлення хвороб.",
          "Сьогодні такі дослідження суворо контролюють: вони мають бути потрібні, а добробут тварин треба брати до уваги. Завдяки захисникам тварин у багатьох країнах косметику вже не тестують на тваринах. Це складне питання — варто говорити про нього спокійно, з повагою."
        ]
      },
      task: {
        id: "l02-e6",
        type: "true-false",
        question: { pl: "Rzetelny badacz może dopisać do tabeli wynik, którego nie zaobserwował, byle hipoteza się „zgadzała”.", ua: "Сумлінний дослідник може дописати в таблицю результат, якого не спостерігав, аби гіпотеза «сходилася»." },
        answer: false,
        explanation: { pl: "Nie. Rzetelność oznacza uczciwy zapis tego, co naprawdę wyszło — nawet gdy hipoteza się nie potwierdzi.", ua: "Ні. Сумлінність — чесний запис того, що справді вийшло." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Obserwacja czy doświadczenie?", ua: "Практика. Спостереження чи дослід?" },
      task: {
        id: "l02-p1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie sytuacje, które są doświadczeniem.", ua: "Познач усі ситуації, які є дослідом." },
        options: [
          { id: "a", label: { pl: "Przez tydzień liczysz kaczki na stawie i nic im nie dawasz.", ua: "Тиждень рахуєш качок на ставку і нічого їм не даєш." } },
          { id: "b", label: { pl: "Jedne doniczki z fasolą podlewasz, drugich nie — sprawdzasz wpływ wody.", ua: "Одні горщики з квасолею поливаєш, інші ні — перевіряєш вплив води." } },
          { id: "c", label: { pl: "W ogrodzie botanicznym oglądasz kaktusy.", ua: "У ботанічному саду розглядаєш кактуси." } },
          { id: "d", label: { pl: "W jednej misce kładziesz banany z jabłkami, w drugiej same banany.", ua: "В одній мисці кладеш банани з яблуками, у другій — самі банани." } },
          { id: "e", label: { pl: "Patrzysz przez lornetkę na bociany i nie podchodzisz do gniazda.", ua: "Дивишся в бінокль на лелек і не підходиш до гнізда." } }
        ],
        answer: ["b", "d"],
        explanation: {
          pl: "Doświadczenie: zmieniasz jeden czynnik (wodę albo obecność jabłek). Liczenie kaczek, oglądanie kaktusów i bociany przez lornetkę to obserwacja albo inne źródło wiedzy.",
          ua: "Дослід: змінюєш один чинник. Рахунок качок, кактуси і лелеки в бінокль — спостереження або інше джерело."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zaplanuj doświadczenie", ua: "Заплануй дослід" },
      task: {
        id: "l02-p2",
        type: "single-choice",
        question: {
          pl: "Chcesz sprawdzić, czy pędy roślin zawsze rosną do góry. Który plan jest poprawny?",
          ua: "Хочеш перевірити, чи пагони рослин завжди ростуть угору. Який план правильний?"
        },
        options: [
          { id: "a", label: { pl: "Jedną doniczkę kładziesz na boku, drugą zostawiasz pionowo. Światło, woda i nasiona takie same. Porównujesz kierunek wzrostu pędów.", ua: "Один горщик кладеш на бік, другий лишаєш вертикально. Світло, вода і насіння такі самі. Порівнюєш напрям росту пагонів." } },
          { id: "b", label: { pl: "Jedną doniczkę kładziesz na boku i nie podlewasz, drugą trzymasz w szafie i mocno podlewasz.", ua: "Один горщик кладеш на бік і не поливаєш, другий тримаєш у шафі і сильно поливаєш." } },
          { id: "c", label: { pl: "Wystarczy raz spojrzeć na drzewo za oknem — to już całe doświadczenie.", ua: "Досить раз глянути на дерево за вікном — це вже весь дослід." } }
        ],
        answer: "a",
        explanation: {
          pl: "Zmieniasz jeden czynnik: położenie doniczki. Reszta warunków jednakowa. Wariant z szafą i różnym podlewaniem miesza kilka czynników. Samo spojrzenie to obserwacja, nie doświadczenie.",
          ua: "Змінюєш один чинник: положення горщика. Решта умов однакова. Погляд на дерево — спостереження, не дослід."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wskaż próby", ua: "Вкажи проби" },
      visual: vizGh("l02-proby-banany.png", {
        alt: { pl: "Dwie miski: z jabłkami i bez jabłek", ua: "Дві миски: з яблуками і без яблук" },
        title: { pl: "Porównaj obie miski.", ua: "Порівняй обидві миски." },
        prompt: { pl: "To samo fotorealistyczne zdjęcie 16:9 co wcześniej: dwie identyczne szklane miski. Lewa: banany i jabłka, etykieta próba badawcza. Prawa: same banany, etykieta próba kontrolna. Napisy tylko po polsku, bez logotypów." }
      }),
      task: {
        id: "l02-p3",
        type: "single-choice",
        question: {
          pl: "Chcesz sprawdzić, czy jabłka przyspieszają dojrzewanie bananów. Które zdanie jest w całości poprawne?",
          ua: "Хочеш перевірити, чи яблука прискорюють достигання бананів. Яке речення повністю правильне?"
        },
        options: [
          { id: "a", label: { pl: "Miska z bananami i jabłkami to próba kontrolna, bo jest ciekawsza.", ua: "Миска з бананами і яблуками — контрольна проба, бо цікавіша." } },
          { id: "b", label: { pl: "Miska z bananami i jabłkami to próba badawcza, a miska z samymi bananami to próba kontrolna.", ua: "Миска з бананами і яблуками — дослідна проба, а миска із самими бананами — контрольна." } },
          { id: "c", label: { pl: "Obie miski to próba badawcza, bo wszędzie są owoce.", ua: "Обидві миски — дослідна проба, бо скрізь є фрукти." } }
        ],
        answer: "b",
        explanation: {
          pl: "Badawcza ma zmieniony czynnik (jabłka). Kontrolna jest do porównania (same banany). Reszta warunków ma być taka sama.",
          ua: "Дослідна має змінений чинник (яблука). Контрольна — для порівняння."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ułóż etapy metody naukowej", ua: "Уклади етапи наукового методу" },
      task: {
        id: "l02-p4",
        type: "single-choice",
        question: { pl: "Która kolejność etapów metody naukowej jest poprawna?", ua: "Яка послідовність етапів наукового методу правильна?" },
        options: [
          { id: "a", label: { pl: "wniosek → hipoteza → obserwacja → doświadczenie → problem badawczy → analiza wyników", ua: "висновок → гіпотеза → спостереження → дослід → дослідницька проблема → аналіз результатів" } },
          { id: "b", label: { pl: "obserwacja → sformułowanie problemu badawczego → postawienie hipotezy → przeprowadzenie doświadczenia → analiza wyników → sformułowanie wniosku", ua: "спостереження → формулювання дослідницької проблеми → висунення гіпотези → проведення досліду → аналіз результатів → формулювання висновку" } },
          { id: "c", label: { pl: "doświadczenie → obserwacja → wniosek → hipoteza → analiza wyników → problem badawczy", ua: "дослід → спостереження → висновок → гіпотеза → аналіз результатів → дослідницька проблема" } }
        ],
        answer: "b",
        explanation: {
          pl: "Najpierw zauważamy, potem pytamy, stawiamy hipotezę, sprawdzamy jej doświadczeniem, analizujemy wyniki i formułujemy wniosek.",
          ua: "Спочатку помічаємо, потім питаємо, ставимо гіпотезу, перевіряємо дослідом, аналізуємо результати і формулюємо висновок."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Sformułuj wniosek", ua: "Сформулюй висновок" },
      task: {
        id: "l02-p5",
        type: "single-choice",
        question: {
          pl: "Hipoteza brzmiała: „Banany dojrzewają szybciej, gdy leżą z jabłkami”. Po kilku dniach banany z jabłkami są mocno żółte i mają plamy. Banany bez jabłek są tylko jasnożółte. Który wniosek jest poprawny?",
          ua: "Гіпотеза була: «Банани достигають швидше, коли лежать з яблуками». За кілька днів банани з яблуками сильно жовті і з плямами. Банани без яблук лише світло-жовті. Який висновок правильний?"
        },
        options: [
          { id: "a", label: { pl: "Hipoteza się potwierdziła: jabłka przyspieszają dojrzewanie bananów.", ua: "Гіпотеза підтвердилася: яблука прискорюють достигання бананів." } },
          { id: "b", label: { pl: "Hipoteza się nie potwierdziła, bo obie miski wyglądają tak samo.", ua: "Гіпотеза не підтвердилася, бо обидві миски виглядають однаково." } },
          { id: "c", label: { pl: "Nie wolno formułować wniosku, jeśli były jabłka.", ua: "Не можна формулювати висновок, якщо були яблука." } }
        ],
        answer: "a",
        explanation: {
          pl: "Wyniki różnią się tylko tam, gdzie były jabłka. Wniosek wynika z porównania próby badawczej z kontrolną.",
          ua: "Результати відрізняються лише там, де були яблука. Висновок випливає з порівняння проб."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Obserwacja czy doświadczenie?", ua: "Перевірка 1. Спостереження чи дослід?" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l02-s1",
        type: "single-choice",
        question: {
          pl: "Które zdanie poprawnie odróżnia obserwację od doświadczenia?",
          ua: "Яке речення правильно відрізняє спостереження від досліду?"
        },
        options: [
          { id: "a", label: { pl: "Obserwacja i doświadczenie to to samo, bo w obu patrzymy.", ua: "Спостереження і дослід — те саме, бо в обох дивимося." } },
          { id: "b", label: { pl: "W obserwacji niczego celowo nie zmieniamy. W doświadczeniu celowo zmieniamy jeden czynnik i sprawdzamy jego wpływ.", ua: "У спостереженні нічого навмисно не змінюємо. У досліді навмисно змінюємо один чинник і перевіряємо його вплив." } },
          { id: "c", label: { pl: "Doświadczenie to tylko czytanie książek. Obserwacja to tylko film przyrodniczy.", ua: "Дослід — лише читання книжок. Спостереження — лише природничий фільм." } }
        ],
        answer: "b",
        explanation: {
          pl: "Obserwacja = patrzymy bez celowej zmiany. Doświadczenie = zmieniamy jeden czynnik i porównujemy skutek.",
          ua: "Спостереження = дивимося без навмисної зміни. Дослід = змінюємо один чинник."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Próba badawcza i kontrolna", ua: "Перевірка 2. Дослідна і контрольна проба" },
      task: {
        id: "l02-s2",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe zdania o próbie badawczej i kontrolnej.",
          ua: "Познач усі правдиві речення про дослідну і контрольну пробу."
        },
        options: [
          { id: "a", label: { pl: "W próbie badawczej zmieniamy wybrany czynnik.", ua: "У дослідній пробі змінюємо вибраний чинник." } },
          { id: "b", label: { pl: "Próba kontrolna służy do porównania — tego czynnika nie zmieniamy.", ua: "Контрольна проба служить для порівняння — цей чинник не змінюємо." } },
          { id: "c", label: { pl: "Pozostałe warunki w obu próbach powinny być takie same.", ua: "Решта умов в обох пробах має бути однакова." } },
          { id: "d", label: { pl: "W doświadczeniu wolno naraz zmienić światło, wodę i temperaturę.", ua: "У досліді можна водночас змінити світло, воду і температуру." } }
        ],
        answer: ["a", "b", "c"],
        explanation: {
          pl: "Zmieniamy jeden czynnik. Reszta warunków jednakowa. Inaczej nie wiadomo, co zadziałało.",
          ua: "Змінюємо один чинник. Решта умов однакова."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Etapy metody naukowej", ua: "Перевірка 3. Етапи наукового методу" },
      task: {
        id: "l02-s3",
        type: "single-choice",
        question: { pl: "Uporządkuj etapy metody naukowej.", ua: "Упорядкуй етапи наукового методу." },
        options: [
          { id: "a", label: { pl: "hipoteza → obserwacja → wniosek → problem badawczy → doświadczenie → analiza wyników", ua: "гіпотеза → спостереження → висновок → дослідницька проблема → дослід → аналіз результатів" } },
          { id: "b", label: { pl: "obserwacja → sformułowanie problemu badawczego → postawienie hipotezy → przeprowadzenie doświadczenia → analiza wyników → sformułowanie wniosku", ua: "спостереження → формулювання дослідницької проблеми → висунення гіпотези → проведення досліду → аналіз результатів → формулювання висновку" } },
          { id: "c", label: { pl: "analiza wyników → doświadczenie → obserwacja → hipoteza → wniosek → problem badawczy", ua: "аналіз результатів → дослід → спостереження → гіпотеза → висновок → дослідницька проблема" } }
        ],
        answer: "b",
        explanation: {
          pl: "Obserwacja, problem badawczy, hipoteza, doświadczenie, analiza wyników, wniosek.",
          ua: "Спостереження, дослідницька проблема, гіпотеза, дослід, аналіз результатів, висновок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Problem, hipoteza, wniosek", ua: "Перевірка 4. Проблема, гіпотеза, висновок" },
      task: {
        id: "l02-s4",
        type: "single-choice",
        question: {
          pl: "Które połączenie jest poprawne?",
          ua: "Яке поєднання правильне?"
        },
        options: [
          { id: "a", label: { pl: "problem badawczy: „Banany z jabłkami są żółte”; hipoteza: „Czy jabłka przyspieszają dojrzewanie bananów?”; wniosek: „Lubię jabłka.”", ua: "проблема: «Банани з яблуками жовті»; гіпотеза: «Чи яблука прискорюють достигання?»; висновок: «Люблю яблука.»" } },
          { id: "b", label: { pl: "problem badawczy: „Czy obecność jabłek przyspiesza dojrzewanie bananów?”; hipoteza: „Banany dojrzewają szybciej, gdy leżą z jabłkami.”; wniosek: zdanie, które potwierdza albo odrzuca hipotezę na podstawie wyników.", ua: "проблема: «Чи наявність яблук прискорює достигання бананів?»; гіпотеза: «Банани достигають швидше з яблуками.»; висновок: речення, яке підтверджує або відхиляє гіпотезу на основі результатів." } },
          { id: "c", label: { pl: "hipoteza to to samo co wniosek, a problem badawczy to nazwa miski.", ua: "гіпотеза — те саме, що висновок, а проблема — назва миски." } }
        ],
        answer: "b",
        explanation: {
          pl: "Problem to pytanie. Hipoteza to możliwa odpowiedź do sprawdzenia. Wniosek powstaje po analizie wyników.",
          ua: "Проблема — питання. Гіпотеза — можлива відповідь. Висновок — після аналізу результатів."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Źródła wiedzy i cechy badacza", ua: "Перевірка 5. Джерела знань і риси дослідника" },
      task: {
        id: "l02-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Źródłem wiedzy mogą być zajęcia terenowe, muzeum, zoo, ogród botaniczny, książki, czasopisma, filmy przyrodnicze i edukacyjne strony internetowe.", ua: "Джерелом знань можуть бути заняття на місцевості, музей, зоопарк, ботанічний сад, книжки, журнали, природничі фільми й освітні сайти." } },
          { id: "b", label: { pl: "Dobry badacz ma szacunek dla przyrody, ostrożność, cierpliwość, systematyczność i rzetelność.", ua: "Добрий дослідник має повагу до природи, обережність, терпіння, систематичність і сумлінність." } },
          { id: "c", label: { pl: "Rzetelność pozwala dopisywać wyniki, których nie było.", ua: "Сумлінність дозволяє дописувати результати, яких не було." } },
          { id: "d", label: { pl: "Szacunek dla przyrody oznacza, że podczas obserwacji w terenie nie niszczymy roślin i nie płoszymy zwierząt.", ua: "Повага до природи означає, що під час спостережень на місцевості не нищимо рослини і не полохаємо тварин." } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Źródła wiedzy są różne, a cechy badacza chronią przyrodę i uczciwość zapisu. Rzetelność zakazuje zmyślania wyników.",
          ua: "Джерела різні, а риси дослідника захищають природу і чесність запису."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l02-etapy-metody.png", {
        alt: { pl: "Sześć etapów metody naukowej", ua: "Шість етапів наукового методу" },
        title: { pl: "Od obserwacji do wniosku.", ua: "Від спостереження до висновку." },
        prompt: { pl: "Ten sam fotorealistyczny kolaż 16:9 co na ekranie metody naukowej: sześć etapów z polskimi etykietami. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Główne źródła wiedzy biologicznej to obserwacja i doświadczenie. Są częścią metody naukowej.",
          "Obserwacja: patrzymy i niczego celowo nie zmieniamy. Doświadczenie: celowo zmieniamy jeden czynnik i sprawdzamy jego wpływ.",
          "Próba badawcza ma zmieniony czynnik. Próba kontrolna jest do porównania. Pozostałe warunki mają być takie same.",
          "Etapy metody naukowej: obserwacja → problem badawczy → hipoteza → doświadczenie → analiza wyników → wniosek.",
          "Korzystamy też z terenu, muzeów, zoo, ogrodu botanicznego, książek, czasopism, filmów i stron edukacyjnych. Dobry badacz jest uważny, ostrożny, cierpliwy, systematyczny i rzetelny."
        ],
        ua: [
          "Головні джерела біологічних знань — спостереження і дослід. Вони частина наукового методу.",
          "Спостереження: дивимося і нічого навмисно не змінюємо. Дослід: навмисно змінюємо один чинник і перевіряємо вплив.",
          "Дослідна проба має змінений чинник. Контрольна — для порівняння. Решта умов має бути однакова.",
          "Етапи: спостереження → дослідницька проблема → гіпотеза → дослід → аналіз результатів → висновок.",
          "Користуємося також місцевістю, музеями, зоопарком, ботанічним садом, книжками, журналами, фільмами й сайтами. Добрий дослідник уважний, обережний, терплячий, систематичний і сумлінний."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię odróżnić obserwację od doświadczenia.", ua: "Можу відрізнити спостереження від досліду." },
        { pl: "Potrafię wskazać próbę badawczą i kontrolną i powiedzieć, czym się różnią.", ua: "Можу вказати дослідну і контрольну пробу і сказати, чим вони відрізняються." },
        { pl: "Potrafię uporządkować etapy metody naukowej.", ua: "Можу упорядкувати етапи наукового методу." },
        { pl: "Potrafię na przykładzie powiedzieć, czym jest problem badawczy, hipoteza i wniosek.", ua: "Можу на прикладі сказати, що таке дослідницька проблема, гіпотеза і висновок." },
        { pl: "Potrafię podać inne źródła wiedzy biologicznej i cechy dobrego badacza.", ua: "Можу назвати інші джерела біологічних знань і риси доброго дослідника." }
      ]
    }
  ]
};
