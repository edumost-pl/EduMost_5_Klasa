function emT69(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T69 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT69(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T69 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 140  ·  Lekcja 69  ·  szczyt",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Wędrówka na szczyt* — Ludmiła Marjańska, *Słońce – gorąca gwiazda*. Obrazy poetyckie, uczucia wędrowców, sens tytułu. Polski pierwszy. Dla 🇺🇦: wyjaśnimy trudne słowa (*żleb*, *brzemię*…).",
      ua: "Тема: *Мандрівка на вершину* — Ludmiła Marjańska, *Słońce – gorąca gwiazda*. Поетичні образи, почуття мандрівників, сенс заголовка. Польська перша. Пояснимо складні слова (*żleb*, *brzemię…*)."
    },
    items: [
      { pl: "zrelacjonuję treść wiersza o wspinaczce;", ua: "перекажу зміст вірша про сходження;" },
      { pl: "opiszę, co robią i czują wędrowcy na etapach drogi;", ua: "опишу, що роблять і відчувають мандрівники на етапах шляху;" },
      { pl: "wyjaśnię tytuł w kontekście treści.", ua: "поясню заголовок у контексті змісту." }
    ],
    task: {
      id: "t69-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam wiersz Marjańskiej o wędrówce w góry", ua: "Читаю вірш Мар’янської про мандрівку в гори" } },
        { id: "b", label: { pl: "Opisuję uczucia i etapy drogi wędrowców", ua: "Описую почуття й етапи шляху мандрівників" } },
        { id: "c", label: { pl: "Tylko schemat mapy z *podróże* Beszczyńskiej (to T68)", ua: "Лише схему мапи з *podróże* Бещинської (це T68)" } },
        { id: "d", label: { pl: "Łączę tytuł z obrazami słońca w wierszu", ua: "Поєдную заголовок з образами сонця у вірші" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T68 = wyobraźnia i mapa. Dziś = góry i upał.",
        ua: "T68 = уява і мапа. Сьогодні = гори й спека."
      },
      explanation: {
        pl: "A, B, D. C było w T68.",
        ua: "A, B, D. C було в T68."
      }
    }
  },

  // 2 wstęp
  {
    type: "observe",
    heading: { pl: "Zadanie wstępne · na szczyt", ua: "Вступне завдання · на вершину" },
    formula: "s. 140  ·  fotografia",
    promptPlace: "before",
    prompt: {
      pl: "Przyjrzyj się fotografii. Wyobraź sobie, że to TY się wspinasz. Powiedz w kilku zdaniach: co widzisz, co czujesz i myślisz.",
      ua: "Подивись на фото. Уяви, що це ТИ піднімаєшся. Скажи кількома реченнями: що бачиш, що відчуваєш і думаєш."
    },
    visual: vizGhT69("t69-zad-wstepne.png", {
      alt: { pl: "Zadanie wstępne: fotografia wspinaczki w górach", ua: "Вступне завдання: фото сходження в горах" },
      place: "after"
    }),
    items: [
      { pl: "Kojarzenia: ciężki plecak · upał · widoki · zmęczenie · radość.", ua: "Асоціації: важкий рюкзак · спека · краєвиди · втома · радість." },
      { pl: "Ilustracja obok — klimat wędrówki (dzieci w górach).", ua: "Ілюстрація поруч — клімат мандрівки (діти в горах)." },
      emT69("Wejdź w rolę — potem porównaj z wierszem")
    ],
    task: {
      id: "t69-s02-wstep",
      type: "open-answer",
      question: {
        pl: "Napisz 3–5 zdań: jesteś na tej ścieżce. Co widzisz? Co czujesz i myślisz?",
        ua: "Напиши 3–5 речень: ти на цій стежці. Що бачиш? Що відчуваєш і думаєш?"
      },
      hint: {
        pl: "Np. skały, plecak, słońce, pragnienie, „jeszcze trochę…”.",
        ua: "Напр. скелі, рюкзак, сонце, спрага, «ще трохи…»."
      },
      explanation: {
        pl: "Ocena: 1. os. · widok + uczucie/myśl · klimat gór.",
        ua: "Оцінка: 1 ос. · краєвид + почуття/думка · клімат гір."
      }
    }
  },

  // 2b ilustracja (bonus visual from user)
  {
    type: "observe",
    heading: { pl: "Klimat wędrówki · ilustracja", ua: "Клімат мандрівки · ілюстрація" },
    formula: "s. 140  ·  obraz",
    promptPlace: "before",
    prompt: {
      pl: "Spójrz na ilustrację: plecaki, strome zbocze, słońce, dolina w dole. To ten sam świat, o którym mówi wiersz.",
      ua: "Подивись на ілюстрацію: рюкзаки, стрімкий схил, сонце, долина внизу. Це той самий світ, про який говорить вірш."
    },
    visual: vizGhT69("t69-ilustracja.jpg", {
      alt: { pl: "Ilustracja: dzieci wędrują pod górę ku słońcu", ua: "Ілюстрація: діти йдуть угору до сонця" },
      place: "after"
    }),
    items: [
      { pl: "Zauważ: wysiłek + cel wysoko + piękny widok w dole.", ua: "Зауваж: зусилля + мета високо + гарний краєвид унизу." },
      { pl: "W wierszu też: upał, brzemię plecaków, dążenie w górę.", ua: "У вірші теж: спека, тягар рюкзаків, прагнення вгору." }
    ],
    task: {
      id: "t69-s03-ilustracja",
      type: "single-choice",
      question: {
        pl: "Co NAJLEPIEJ łączy ilustrację z tematem lekcji?",
        ua: "Що НАЙКРАЩЕ єднає ілюстрацію з темою уроку?"
      },
      options: [
        { id: "a", label: { pl: "wędrówka pod górę mimo trudu, ku światłu / szczytowi", ua: "мандрівка вгору попри труд, до світла / вершини" } },
        { id: "b", label: { pl: "nurkowanie z rekinami na Antarktydzie", ua: "дайвінг з акулами в Антарктиді" } },
        { id: "c", label: { pl: "pisanie e-maila o trybach czasownika", ua: "написання e-mail про способи дієслова" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj: góry, plecaki, słońce.",
        ua: "Шукай: гори, рюкзаки, сонце."
      },
      explanation: {
        pl: "Ilustracja = klimat trudnej, ale pięknej wędrówki w górę.",
        ua: "Ілюстрація = клімат важкої, але гарної мандрівки вгору."
      }
    }
  },

  // 3 czytanie
  {
    type: "observe",
    heading: { pl: "Czytamy · Słońce – gorąca gwiazda", ua: "Читаємо · Słońce – gorąca gwiazda" },
    formula: "s. 140  ·  wiersz  ·  L. Marjańska",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj głośno. Skan — kliknij, by powiększyć. Wiersza nie tłumaczymy słowo w słowo. Potem chwila ciszy.",
      ua: "Прочитай вголос. Скан — клікай, щоб збільшити. Вірш не перекладаємо дослівно. Потім хвилина тиші."
    },
    items: [
      { pl: "Śledź: upał · plecaki · pragnienie · źródło · żleb · schronisko · ściana.", ua: "Слідкуй: спека · рюкзаки · спрага · джерело · żleb · schronisko · стіна." },
      { pl: "Powtórzenia (*wędrujący w górę*, *brzemię plecaków*) budują rytm wysiłku.", ua: "Повтори (*wędrujący w górę*, *brzemię plecaków*) будують ритм зусилля." }
    ],
    task: {
      id: "t69-s04-czytanie",
      type: "single-choice",
      question: {
        pl: "Gdzie rozgrywa się akcja wiersza?",
        ua: "Де відбувається дія вірша?"
      },
      options: [
        { id: "a", label: { pl: "w górach, podczas upalnej wędrówki pod szczyt", ua: "в горах, під час спекотної мандрівки під вершину" } },
        { id: "b", label: { pl: "na Biegunie Północnym w kwietniu 2004", ua: "на Північному полюсі в квітні 2004" } },
        { id: "c", label: { pl: "w pokoju przy mapie (wyobrażone Mazury)", ua: "у кімнаті біля мапи (уявні Мазури)" } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł + *wędrujący pod górę* + schronisko.",
        ua: "Заголовок + *wędrujący pod górę* + schronisko."
      },
      explanation: {
        pl: "To realna (w świecie wiersza) wspinaczka górska w upał.",
        ua: "Це (у світі вірша) гірське сходження в спеку."
      }
    }
  },

  // 4 glosy
  {
    type: "example",
    heading: { pl: "Słownictwo · glosy z marginesu", ua: "Словник · глоси з поля" },
    formula: "s. 140  ·  margines",
    promptPlace: "before",
    prompt: {
      pl: "Trudne wyrazy — ucz się z UA.",
      ua: "Складні слова — вчи з UA."
    },
    text: {
      pl: "**obarczony** — tu: obładowany. **brzemię** — ciężar. **żleb** — podłużne wgłębienie w zboczu (jak rynna skalna). **próg skalny** — stopień / przegroda skalna. **UA:** *brzemię* ≈ тягар; *żleb* ≈ жолоб / кулуар на схилі.",
      ua: "**obarczony** — обтяжений / навантажений. **brzemię** — тягар. **żleb** — видовблене місце на схилі (як жолоб). **próg skalny** — скельний уступ / поріг."
    },
    items: [
      { pl: "*spragnieni* — bardzo chcą pić · *upalne południe* — upał w środku dnia.", ua: "*spragnieni* — дуже хочуть пити · *upalne południe* — спека в середині дня." },
      { pl: "*schronisko* — domek w górach dla wędrowców.", ua: "*schronisko* — хатина в горах для мандрівників." }
    ],
    task: {
      id: "t69-s05-glosy",
      type: "single-choice",
      question: {
        pl: "Co oznacza *żleb* w tym wierszu?",
        ua: "Що означає *żleb* у цьому вірші?"
      },
      options: [
        { id: "a", label: { pl: "wgłębienie w zboczu górskim (trudna ścieżka wśród skał)", ua: "заглиблення на гірському схилі (важка стежка серед скель)" } },
        { id: "b", label: { pl: "rodzaj liofilizatu na biegun", ua: "вид ліофілізату на полюс" } },
        { id: "c", label: { pl: "dzień tygodnia w wierszu Beszczyńskiej", ua: "день тижня у вірші Бещинської" } }
      ],
      answer: "a",
      hint: {
        pl: "Margines podręcznika + *kamienistym żlebem*.",
        ua: "Поле підручника + *kamienistym żlebem*."
      },
      explanation: {
        pl: "Żleb = rynna / wgłębienie na zboczu — tu kamienista droga w górę.",
        ua: "Żleb = жолоб / заглиблення на схилі — тут кам’янистий шлях угору."
      }
    }
  },

  // 5 zad 1 temat
  {
    type: "practice",
    heading: { pl: "Zad. 1 · temat wiersza", ua: "Завд. 1 · тема вірша" },
    formula: "s. 140  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Powiedz, co jest tematem wiersza. Uzasadnij (możesz cytatem).",
      ua: "Скажи, що є темою вірша. Обґрунтуй (можна цитатою)."
    },
    visual: vizGhT69("t69-zad1.png", {
      alt: { pl: "Zad. 1: Powiedz, co jest tematem wiersza", ua: "Завд. 1: Скажи, що є темою вірша" },
      place: "after"
    }),
    items: [
      { pl: "Temat ≠ tytuł (tytuł to obraz; temat to o czym jest utwór).", ua: "Тема ≠ заголовок (заголовок — образ; тема — про що твір)." },
      { pl: "Szukaj: kto? gdzie? co robi? w jakich warunkach?", ua: "Шукай: хто? де? що робить? за яких умов?" },
      { pl: "Klucz — po *Sprawdź*.", ua: "Ключ — після *Sprawdź*." }
    ],
    task: {
      id: "t69-s06-temat",
      type: "multiple-choice",
      question: {
        pl: "Które sformułowanie NAJLEPIEJ oddaje temat? Zaznacz wszystkie sensowne.",
        ua: "Яке формулювання НАЙКРАЩЕ передає тему? Познач усі слушні."
      },
      options: [
        { id: "a", label: { pl: "trudna wspinaczka górska w upał (wysiłek, pragnienie, dążenie w górę)", ua: "важке гірське сходження в спеку (зусилля, спрага, прагнення вгору)" } },
        { id: "b", label: { pl: "zachwyt i zmęczenie wędrowców na szlaku", ua: "захоплення і втома мандрівників на маршруті" } },
        { id: "c", label: { pl: "tylko przepis na herbatę w schronisku", ua: "лише рецепт чаю в притулку" } },
        { id: "d", label: { pl: "wyobrażone podróże palcem po mapie w pokoju", ua: "уявні подорожі пальцем по мапі в кімнаті" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Nie myl z T68 (mapa w pokoju).",
        ua: "Не плутай із T68 (мапа в кімнаті)."
      },
      explanation: {
        pl: "A, B. Temat: wędrówka pod szczyt w upał — trud + zachwyt. C i D niepasujące.",
        ua: "A, B. Тема: мандрівка під вершину в спеку — труд + захоплення. C і D не пасують."
      }
    }
  },

  // 6 zad 2 schemat
  {
    type: "practice",
    heading: { pl: "Zad. 2 · co robią / co czują", ua: "Завд. 2 · що роблять / що відчувають" },
    formula: "s. 140  ·  schemat",
    promptPlace: "before",
    prompt: {
      pl: "Zbierz z tekstu: co robią i co czują wędrowcy. Zapisz na schemacie (źródło · schronisko · pionowa ściana). Potem dopisz własne określenia.",
      ua: "Збери з тексту: що роблять і що відчувають. Запиши на схемі (джерело · schronisko · вертикальна стіна). Потім допиши свої визначення."
    },
    visual: vizGhT69("t69-zad2.jpg", {
      alt: { pl: "Schemat: schronisko, źródło, pionowa ściana — co robią / czują", ua: "Схема: schronisko, джерело, вертикальна стіна" },
      place: "after"
    }),
    items: [
      { pl: "W zeszycie: cytaty + własne słowa (bez ściągania klucza z góry).", ua: "У зошиті: цитати + власні слова (без списування ключа згори)." },
      { pl: "Etapy drogi: pragnienie / chłód schroniska / stromizna ściany…", ua: "Етапи шляху: спрага / холод притулку / крутизна стіни…" },
      { pl: "Pełniejsze przykłady — po *Sprawdź*.", ua: "Повніші приклади — після *Sprawdź*." }
    ],
    task: {
      id: "t69-s07-schemat",
      type: "multiple-choice",
      question: {
        pl: "Które obserwacje są zgodne z tekstem? Zaznacz wszystkie.",
        ua: "Які спостереження відповідають тексту? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "przy źródle: gaszą wodą obrazy pragnienia; są spragnieni / zachwyceni", ua: "біля джерела: гасять водою образи спраги; спраглі / захоплені" } },
        { id: "b", label: { pl: "w schronisku: chłodno, pachną drewniane ściany", ua: "у schronisku: прохолодно, пахнуть дерев’яні стіни" } },
        { id: "c", label: { pl: "przy pionowej ścianie: łatwy spacer bez plecaków", ua: "біля вертикальної стіни: легка прогулянка без рюкзаків" } },
        { id: "d", label: { pl: "na żlebie / stromiej: obolałe palce, upał, cisza, brak źródła", ua: "на żlebie / крутіше: болючі пальці, спека, тиша, немає джерела" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ściana = trud, nie spacer.",
        ua: "Стіна = труд, не прогулянка."
      },
      explanation: {
        pl: "A, B, D. C przeczy tekstowi — idą z brzemieniem plecaków, stromo.",
        ua: "A, B, D. C суперечить тексту — ідуть з тягарем рюкзаків, стрімко."
      }
    }
  },

  // 7 obrazy poetyckie
  {
    type: "concept",
    heading: { pl: "Obrazy poetyckie · przyroda i nastrój", ua: "Поетичні образи · природа і настрій" },
    formula: "s. 140  ·  interpretacja",
    promptPlace: "before",
    prompt: {
      pl: "**Obraz poetycki** — fragment, który „maluje” świat słowami (widok, dźwięk, zapach, porównanie).",
      ua: "**Obraz poetycki** — уривок, що «малює» світ словами (краєвид, звук, запах, порівняння)."
    },
    text: {
      pl: "Szukaj w tekście: *słońce – gorąca gwiazda / nieruchoma tarcza*; *język … spieczony jak trawa*; *staw źrenica nieba*; *pachną drewniane ściany*. To obrazy — nie tylko „sucha” informacja. **UA:** образ = картина словами.",
      ua: "Шукай у тексті: *słońce – gorąca gwiazda / nieruchoma tarcza*; *język … spieczony jak trawa*; *staw źrenica nieba*; *pachną drewniane ściany*. Це образи — не лише «суха» інформація."
    },
    items: [
      { pl: "Nastrój: wysiłek + pragnienie + zachwyt + cisza wysoko.", ua: "Настрій: зусилля + спрага + захоплення + тиша високо." },
      { pl: "Dla 🇺🇦: porównanie *jak trawa* = як трава (спікається).", ua: "UA: порівняння *jak trawa* = як трава (спечеться)." }
    ],
    task: {
      id: "t69-s08-obrazy",
      type: "multiple-choice",
      question: {
        pl: "Które to obrazy poetyckie z wiersza? Zaznacz wszystkie.",
        ua: "Які з цих — поетичні образи з вірша? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "słońce jako gorąca gwiazda / nieruchoma tarcza", ua: "сонце як гаряча зірка / нерухомий щит" } },
        { id: "b", label: { pl: "staw jako źrenica nieba", ua: "став як зіниця неба" } },
        { id: "c", label: { pl: "język spieczony jak trawa", ua: "язик спечений як трава" } },
        { id: "d", label: { pl: "numer strony podręcznika (140)", ua: "номер сторінки підручника (140)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "Obraz = porównanie / metafora, nie metadane książki.",
        ua: "Образ = порівняння / метафора, не метадані книжки."
      },
      explanation: {
        pl: "A–C z tekstu. D to nie obraz poetycki.",
        ua: "A–C з тексту. D — не поетичний образ."
      }
    }
  },

  // 8 zad 3 ostatnia zwrotka
  {
    type: "practice",
    heading: { pl: "Zad. 3 · ostatnia zwrotka", ua: "Завд. 3 · остання строфа" },
    formula: "s. 140  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Porozmawiajcie: jak rozumiecie ostatnią zwrotkę wiersza?",
      ua: "Поговоріть: як розумієте останню строфу вірша?"
    },
    visual: vizGhT69("t69-zad3.png", {
      alt: { pl: "Zad. 3: rozumienie ostatniej zwrotki", ua: "Завд. 3: розуміння останньої строфи" },
      place: "after"
    }),
    items: [
      { pl: "Przeczytaj jeszcze raz końcówkę: *nie ugaszą pragnienia… wędrujący w górę…*", ua: "Прочитай ще раз кінець: *nie ugaszą pragnienia… wędrujący w górę…*" },
      { pl: "Pytania: czy cel ważniejszy niż komfort? Czy pragnienie to tylko woda?", ua: "Питання: чи мета важливіша за комфорт? Чи спрага — лише вода?" },
      { pl: "Twoja interpretacja — po *Sprawdź* porównaj z podpowiedzią.", ua: "Твоя інтерпретація — після *Sprawdź* порівняй із підказкою." }
    ],
    task: {
      id: "t69-s09-ostatnia",
      type: "open-answer",
      question: {
        pl: "Napisz 4–6 zdań: jak TY rozumiesz ostatnią zwrotkę? Odwołaj się do słów wiersza.",
        ua: "Напиши 4–6 речень: як ТИ розумієш останню строфу? Посилайся на слова вірша."
      },
      hint: {
        pl: "Możesz: nie wracają do wygody · idą dalej · pragnienie = też tęsknota za szczytem.",
        ua: "Можна: не вертаються до зручності · ідуть далі · спрага = також туга за вершиною."
      },
      explanation: {
        pl: "Sens: mimo pragnienia i ciężaru wciąż idą w górę — wytrwałość / cel ważniejszy niż chwilowa ulga. Pragnienia (wody / celu) „nie ugaszą” wygodą schroniska.",
        ua: "Сенс: попри спрагу й тягар ідуть угору — витривалість / мета важливіша за миттєву полегкість."
      }
    }
  },

  // 9 zad 4 tytuł
  {
    type: "practice",
    heading: { pl: "Zad. 4 · tytuł a treść", ua: "Завд. 4 · заголовок і зміст" },
    formula: "s. 140  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Pomówcie: w jaki sposób tytuł łączy się z sytuacjami i treścią utworu?",
      ua: "Поговоріть: як заголовок пов’язаний із ситуаціями і змістом твору?"
    },
    visual: vizGhT69("t69-zad4.png", {
      alt: { pl: "Zad. 4: tytuł a treść wiersza", ua: "Завд. 4: заголовок і зміст вірша" },
      place: "after"
    }),
    items: [
      { pl: "W tekście słońce = *gorąca gwiazda* · *nieruchoma tarcza* · kroki „mierzą” do niej.", ua: "У тексті сонце = *gorąca gwiazda* · *nieruchoma tarcza* · кроки «міряють» до неї." },
      { pl: "Upał i światło = trud drogi i punkt, ku któremu idą.", ua: "Спека і світло = труд шляху і точка, до якої йдуть." },
      { pl: "Klucz interpretacji — po *Sprawdź*.", ua: "Ключ інтерпретації — після *Sprawdź*." }
    ],
    task: {
      id: "t69-s10-tytul",
      type: "multiple-choice",
      question: {
        pl: "Jak tytuł łączy się z treścią? Zaznacz wszystkie poprawne.",
        ua: "Як заголовок пов’язаний зі змістом? Познач усі правильні."
      },
      options: [
        { id: "a", label: { pl: "słońce to źródło upału i pragnienia na szlaku", ua: "сонце — джерело спеки й спраги на маршруті" } },
        { id: "b", label: { pl: "słońce jak tarcza / gwiazda — cel, ku któremu mierzą kroki", ua: "сонце як щит / зірка — мета, до якої міряють кроки" } },
        { id: "c", label: { pl: "tytuł nie ma nic wspólnego z wierszem", ua: "заголовок не має нічого спільного з віршем" } },
        { id: "d", label: { pl: "żółty dach schroniska odbija tarczę słońca — obraz wraca w tekście", ua: "жовтий дах schroniska відбиває щит сонця — образ повертається в тексті" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Szukaj słów *gwiazda*, *tarcza*, odbicia w schronisku.",
        ua: "Шукай слова *gwiazda*, *tarcza*, відбиття в schronisku."
      },
      explanation: {
        pl: "A, B, D. Tytuł = obraz słońca: upał + cel wędrówki. C fałsz.",
        ua: "A, B, D. Заголовок = образ сонця: спека + мета мандрівки. C хиба."
      }
    }
  },

  // 10 zad 5 opinia
  {
    type: "practice",
    heading: { pl: "Zad. 5 · czy chciałbyś iść?", ua: "Завд. 5 · чи хотів би йти?" },
    formula: "s. 140  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Czy chciałabyś/chciałbyś być uczestnikiem tej wspinaczki? Napisz wypowiedź z uzasadnieniem.",
      ua: "Чи хотіла б / хотів би бути учасником цього сходження? Напиши висловлювання з обґрунтуванням."
    },
    visual: vizGhT69("t69-zad5.png", {
      alt: { pl: "Zad. 5: czy chciałbyś uczestniczyć we wspinaczce", ua: "Завд. 5: чи хотів би брати участь у сходженні" },
      place: "after"
    }),
    items: [
      { pl: "Tak / nie — obie odpowiedzi OK, jeśli masz argumenty z wiersza lub własnego doświadczenia.", ua: "Так / ні — обидві відповіді OK, якщо є аргументи з вірша або власного досвіду." },
      { pl: "Domówka (wybór): rysunek widoku ze szczytu ALBO 3 zdania: dlaczego warto wędrować mimo zmęczenia.", ua: "ДЗ (вибір): малюнок краєвиду з вершини АБО 3 речення: чому варто мандрувати попри втому." }
    ],
    task: {
      id: "t69-s11-opinia",
      type: "open-answer",
      question: {
        pl: "Napisz 5–8 zdań: chciał(a)bym / nie chciał(a)bym iść — DLACZEGO? Odwołaj się do wiersza.",
        ua: "Напиши 5–8 речень: хотів(ла) би / не хотів(ла) би йти — ЧОМУ? Посилайся на вірш."
      },
      hint: {
        pl: "Argumenty: widoki, przyjaźń, upał, plecak, pragnienie, satysfakcja ze szczytu…",
        ua: "Аргументи: краєвиди, дружба, спека, рюкзак, спрага, задоволення від вершини…"
      },
      explanation: {
        pl: "Ocena: wyraźna decyzja · 2–3 argumenty · link do tekstu (upał, brzemię, zachwyt…).",
        ua: "Оцінка: чітке рішення · 2–3 аргументи · зв’язок із текстом."
      }
    }
  },

  // 11 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · notatka T69", ua: "Підсумок · нотатка T69" },
    formula: "s. 140  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Zapisz krótką notatkę — wzór lekcji.",
      ua: "Запиши коротку нотатку — зразок уроку."
    },
    items: [
      { pl: "Autorka: Ludmiła Marjańska · Tytuł: *Słońce – gorąca gwiazda*.", ua: "Авторка: Ludmiła Marjańska · Заголовок: *Słońce – gorąca gwiazda*." },
      { pl: "Temat: trudna, ale dająca radość wspinaczka w upalny dzień.", ua: "Тема: важке, але радісне сходження в спекотний день." },
      { pl: "Uczucia: zmęczenie, zachwyt, pragnienie, wytrwałość.", ua: "Почуття: втома, захоплення, спрага, витривалість." },
      { pl: "Tytuł: słońce = upał i cel (tarcza / gwiazda), ku której idą.", ua: "Заголовок: сонце = спека і мета (щит / зірка), до якої йдуть." },
      emT69("Praca domowa: rysunek ze szczytu ALBO 3 zdania o sensie wędrówki")
    ],
    task: {
      id: "t69-s12-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Wędrowcy mimo pragnienia i ciężaru plecaków nadal idą w górę — to ważny sens końcówki wiersza.”",
        ua: "Чи твердження правильне? «Мандрівники попри спрагу й тягар рюкзаків далі йдуть угору — це важливий сенс кінцівки вірша.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Ostatnia zwrotka: *nie ugaszą pragnienia… wędrujący w górę*.",
        ua: "Остання строфа: *nie ugaszą pragnienia… wędrujący w górę*."
      },
      explanation: {
        pl: "Prawda — idą dalej mimo trudu; tytułowe słońce to też cel drogi.",
        ua: "Правда — ідуть далі попри труд; заголовне сонце — також мета шляху."
      }
    }
  }
]};
