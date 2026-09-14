function emT44(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T44 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT44(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T44 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 81  ·  Lekcja 44  ·  relacja do gazety",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Czytamy fragment Marcina Szczygielskiego *Podniebna kanonada* (upał → burza → grad). Potem: świat przedstawiony, plan burzy i *relacja* do gazety (tytuł – zapowiedź – treść). Kliknij skan strony, żeby powiększyć i przewinąć. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Читаємо уривок Марціна Щиґельського *Podniebna kanonada* (спека → буря → град). Потім: зображений світ, план бурі і *реляція* до газети (заголовок – анонс – зміст). Клацни скан сторінки, щоб збільшити і прокрутити. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wskażę elementy *świata przedstawionego* (czas, miejsce, bohaterowie);", ua: "вкажу елементи *зображеного світу* (час, місце, герої);" },
      { pl: "uporządkuję przebieg *burzy* według planu;", ua: "упорядкую перебіг *бурі* за планом;" },
      { pl: "zbiorę słownictwo burzy i łączniki czasu;", ua: "зберу лексику бурі і часові конектори;" },
      { pl: "wyjaśnię, czym jest *relacja*;", ua: "поясню, що таке *реляція*;" },
      { pl: "zredaguję krótką relację: *tytuł – zapowiedź – treść*.", ua: "зредагую коротку реляцію: *заголовок – анонс – зміст*." }
    ],
    task: {
      id: "t44-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opisać świat przedstawiony w tekście.", ua: "Описати зображений світ у тексті." } },
        { id: "b", label: { pl: "Ułożyć plan przebiegu burzy.", ua: "Скласти план перебігу бурі." } },
        { id: "c", label: { pl: "Już dziś napisać całą gazetkę szkolną na 8 stron.", ua: "Уже сьогодні написати всю шкільну газету на 8 сторінок." } },
        { id: "d", label: { pl: "Wiedzieć, czym jest relacja, i zredagować ją według schematu.", ua: "Знати, що таке реляція, і зредагувати її за схемою." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Gazetka szkolna jako osobny projekt jest w programie — dziś fokus na *jedną* relację.",
        ua: "Шкільна газета як окремий проєкт є в програмі — сьогодні фокус на *одну* реляцію."
      },
      explanation: {
        pl: "Dziś: czytanie, świat przedstawiony, plan burzy, definicja relacji i schemat artykułu.",
        ua: "Сьогодні: читання, зображений світ, план бурі, означення реляції і схема статті."
      }
    }
  },
  // 2 — page 1 image
  {
    type: "observe",
    heading: { pl: "Czytamy · upał i cisza", ua: "Читаємо · спека і тиша" },
    formula: "s. 81  ·  strona 1  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Jedna strona = jeden ekran. *Kliknij obraz*, żeby powiększyć; przewiń w dół, jeśli nie mieści się. Najpierw *upał* na werandzie, na końcu — *głucha cisza*.",
      ua: "Одна сторінка = один екран. *Клацни зображення*, щоб збільшити; прокрути вниз, якщо не вміщається. Спочатку *спека* на веранді, наприкінці — *глуха тиша*."
    },
    visual: vizGhT44("t44-strona-upal.png", {
      prompt: "Skan strony: Podniebna kanonada (upał).",
      alt: {
        pl: "Strona podręcznika: upał na werandzie Chatki, glosy kanonada, weranda, szezlong.",
        ua: "Сторінка підручника: спека на веранді Chatki, глоси kanonada, weranda, szezlong."
      }
    }),
    items: [
      { pl: "**kanonada** — dźwięk jak serie wystrzałów / grzmotów · канонада, гуркіт.", ua: "**kanonada** — звук як серія пострілів / грімів · канонада." },
      { pl: "**weranda** — przybudówka przy domu · веранда.", ua: "**weranda** — прибудова біля дому · веранда." },
      { pl: "**szezlong** — długi fotel do półleżenia · шезлонг.", ua: "**szezlong** — довге крісло для напівлежання · шезлонг." },
      { pl: "Inne glosy: *żar* = жар/спека; *upał* = спека; *żywicą* = смолою; *pochrapywać* = похропувати.", ua: "Інші глоси: *żar* = жар; *upał* = спека; *żywicą* = смолою; *pochrapywać* = похропувати." },
      { pl: "Porównanie: *żar … jak gorący syrop*; jajko na deskach — przesada (hiperbola atmosfery).", ua: "Порівняння: *żar … jak gorący syrop*; яйце на дошках — перебільшення атмосфери." }
    ],
    task: {
      id: "t44-s02-upal",
      type: "single-choice",
      question: {
        pl: "Co NA PEWNO dzieje się na tej stronie?",
        ua: "Що НАПЕВНО діється на цій сторінці?"
      },
      options: [
        { id: "a", label: { pl: "Rodzina odpoczywa w upale; na końcu zapada głucha cisza.", ua: "Родина відпочиває в спеку; наприкінці настає глуха тиша." } },
        { id: "b", label: { pl: "Od razu pada grad i dziurawi dach stodoły.", ua: "Одразу падає град і дірявить дах клуні." } },
        { id: "c", label: { pl: "Bohaterowie piszą już gotową relację do gazety.", ua: "Герої вже пишуть готову реляцію до газети." } }
      ],
      answer: "a",
      hint: {
        pl: "Grad i gazeta — później. Tu: upał + cisza.",
        ua: "Град і газета — пізніше. Тут: спека + тиша."
      },
      explanation: {
        pl: "Strona buduje napięcie: upał → zmiana powietrza → cisza przed burzą.",
        ua: "Сторінка будує напругу: спека → зміна повітря → тиша перед бурею."
      }
    }
  },
  // 3 — page 2 image
  {
    type: "observe",
    heading: { pl: "Czytamy · nadchodzi burza", ua: "Читаємо · надходить буря" },
    formula: "s. 81  ·  strona 2  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Znowu: kliknij skan i przewiń. Tu *huk*, *kołdra chmur*, *srebrzysta ściana* deszczu, piorun i *ulewa*.",
      ua: "Знову: клацни скан і прокрути. Тут *huk*, *ковдра хмар*, *срібляста стіна* дощу, блискавка і *злива*."
    },
    visual: vizGhT44("t44-strona-burza.jpg", {
      prompt: "Skan strony: początek burzy.",
      alt: {
        pl: "Strona podręcznika: huk, chmury, ulewa; glosa szlauch.",
        ua: "Сторінка підручника: гуркіт, хмари, злива; глоса szlauch."
      }
    }),
    items: [
      { pl: "**szlauch** — gumowa rura do podlewania · шланг.", ua: "**szlauch** — гумова труба для поливу · шланг." },
      { pl: "*gęsia skórka* · *uszy się zatykają* — ciało reaguje na burzę.", ua: "*gęsia skórka* · *uszy się zatykają* — тіло реагує на бурю." },
      { pl: "Metafora: *kołdra czarnych chmur*; porównania: *jak w samolocie*, *gęste jak oliwa*.", ua: "Метафора: *kołdra czarnych chmur*; порівняння: *jak w samolocie*, *gęste jak oliwa*." },
      { pl: "Słownik burzy: *huk, grom, błyskawica, ulewa, dachówki, stodoła*.", ua: "Словник бурі: *huk, grom, błyskawica, ulewa, dachówki, stodoła*." }
    ],
    task: {
      id: "t44-s03-burza",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO pojawia się w tym fragmencie? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО з’являється в цьому уривку? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Okropny huk / grom i kołdra czarnych chmur.", ua: "Страшний гуркіт / грім і ковдра чорних хмар." } },
        { id: "b", label: { pl: "Srebrzysta ściana deszczu zbliża się przez pola.", ua: "Срібляста стіна дощу наближається полями." } },
        { id: "c", label: { pl: "Wujek Maciek od razu pisze artykuł do gazety.", ua: "Дядько Мацек одразу пише статтю до газети." } },
        { id: "d", label: { pl: "Dachówki fruwają, pada ulewa «jak ze szlauchów».", ua: "Черепиця летить, падає злива «як зі шлангів»." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "To opis świadka — jeszcze nie redakcja gazety.",
        ua: "Це опис очевидця — ще не редакція газети."
      },
      explanation: {
        pl: "Widzimy i słyszymy burzę. Artykuł redagujemy później według schematu.",
        ua: "Бачимо і чуємо бурю. Статтю редагуємо пізніше за схемою."
      }
    }
  },
  // 4 — page 3 image
  {
    type: "observe",
    heading: { pl: "Czytamy · grad i koniec", ua: "Читаємо · град і кінець" },
    formula: "s. 81  ·  strona 3  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Ostatnia strona opowiadania: strach Marzeny, *biały gruz* (= grad), szkody i wyjście do wsi *oszacować straty*.",
      ua: "Остання сторінка оповідання: страх Марзени, *білі уламки* (= град), збитки і вихід у село *оцінити збитки*."
    },
    visual: vizGhT44("t44-strona-grad.jpg", {
      prompt: "Skan strony: grad.",
      alt: {
        pl: "Strona podręcznika: grad, wyrwa w dachu, koniec burzy.",
        ua: "Сторінка підручника: град, вирва в даху, кінець бурі."
      }
    }),
    items: [
      { pl: "*biały gruz* = metafora *gradu* (град).", ua: "*biały gruz* = метафора *граду*." },
      { pl: "*nawałnica* · *zamieć* gradu · *wyrwa* w dachu stodoły.", ua: "*nawałnica* · *завірюха* граду · *вирва* в даху клуні." },
      { pl: "Porównania: *jak struna*, *jak spodki*; słońce *strugami świetlistego miodu*.", ua: "Порівняння: *jak struna*, *jak spodki*; сонце *струменями світлого меду*." },
      { pl: "*oszacować straty* = оцінити збитки — punkt do relacji gazetowej.", ua: "*oszacować straty* = оцінити збитки — пункт для газетної реляції." }
    ],
    task: {
      id: "t44-s04-grad",
      type: "true-false",
      question: {
        pl: "Czy «biały gruz» w tym fragmencie oznacza grad (kulki lodu z nieba)?",
        ua: "Чи «biały gruz» у цьому уривку означає град (кульки льоду з неба)?"
      },
      answer: true,
      hint: {
        pl: "Autor pisze: *odłamki lodu* / *padający grad*.",
        ua: "Автор пише: *уламки льоду* / *падний град*."
      },
      explanation: {
        pl: "Tak — *biały gruz* to obraz gradu. Potem słońce wraca, widać szkody.",
        ua: "Так — *biały gruz* — образ граду. Потім сонце повертається, видно збитки."
      }
    }
  },
  // 5 — świat przedstawiony
  {
    type: "observe",
    heading: { pl: "Świat przedstawiony", ua: "Зображений світ" },
    formula: "s. 81  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Opisz elementy świata przedstawionego: *czas, miejsce, bohaterowie*.",
      ua: "Опиши елементи зображеного світу: *час, місце, герої*."
    },
    items: [
      { pl: "**Czas:** upalny dzień; burza trwa krótko (kilka minut gradu).", ua: "**Час:** спекотний день; буря коротка (кілька хвилин граду)." },
      { pl: "**Miejsce:** Chatka, weranda, podwórko, stodoła, pola, wieś.", ua: "**Місце:** Chatka, веранда, подвір’я, клуня, поля, село." },
      { pl: "**Bohaterowie:** narrator, Agata, mama, babcia, ciotka Marzena / Baśka, wujek Maciek; koty.", ua: "**Герої:** оповідач, Агата, мама, бабуся, тітка Марзена / Баська, дядько Мацек; коти." },
      { pl: "Most UA: *świat przedstawiony* ≈ зображений світ у творі.", ua: "Міст UA: *świat przedstawiony* ≈ зображений світ у творі." }
    ],
    task: {
      id: "t44-s05-swiat",
      type: "multiple-choice",
      question: {
        pl: "Które elementy NA PEWNO należą do świata przedstawionego tego tekstu?",
        ua: "Які елементи НАПЕВНО належать до зображеного світу цього тексту?"
      },
      options: [
        { id: "a", label: { pl: "Miejsce: Chatka / weranda.", ua: "Місце: Chatka / веранда." } },
        { id: "b", label: { pl: "Bohaterowie: babcia, ciotka, wujek, Agata, narrator.", ua: "Герої: бабуся, тітка, дядько, Агата, оповідач." } },
        { id: "c", label: { pl: "Akcja dzieje się w centrum Warszawy zimą.", ua: "Дія відбувається в центрі Варшави взимку." } },
        { id: "d", label: { pl: "Czas: upalny dzień z nagłą burzą.", ua: "Час: спекотний день із раптовою бурею." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj skany: lato, wieś, rodzina.",
        ua: "Читай скани: літо, село, родина."
      },
      explanation: {
        pl: "Chatka latem + rodzina. Nie zima i nie centrum Warszawy.",
        ua: "Chatka влітку + родина. Не зима і не центр Варшави."
      }
    }
  },
  // 6 — plan burzy
  {
    type: "practice",
    heading: { pl: "Plan burzy", ua: "План бурі" },
    formula: "s. 81  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Wydziel opis burzy i uporządkuj plan *chronologicznie* (jak w tekście).",
      ua: "Виділи опис бурі і впорядкуй план *хронологічно* (як у тексті)."
    },
    items: [
      { pl: "1) Cisza przed burzą.", ua: "1) Тиша перед бурею." },
      { pl: "2) Huk.", ua: "2) Гуркіт." },
      { pl: "3) Napłynięcie gęstych chmur.", ua: "3) Наплив густих хмар." },
      { pl: "4) Zbliżanie się ulewnego deszczu.", ua: "4) Наближення зливи." },
      { pl: "5) Nawałnica.", ua: "5) Шквал / сильна негода." },
      { pl: "6) Pioruny.", ua: "6) Блискавки." },
      { pl: "7) Grad.", ua: "7) Град." }
    ],
    task: {
      id: "t44-s06-plan",
      type: "single-choice",
      question: {
        pl: "Który układ planu jest poprawny chronologicznie?",
        ua: "Який порядок плану правильний хронологічно?"
      },
      options: [
        { id: "a", label: { pl: "cisza → huk → chmury → deszcz → nawałnica → pioruny → grad", ua: "тиша → гуркіт → хмари → дощ → шквал → блискавки → град" } },
        { id: "b", label: { pl: "grad → cisza → pioruny → huk", ua: "град → тиша → блискавки → гуркіт" } },
        { id: "c", label: { pl: "tylko grad, bez ciszy i huku", ua: "лише град, без тиші і гуркоту" } }
      ],
      answer: "a",
      hint: {
        pl: "Najpierw cisza i ciało narratora, potem huk, potem chmury i deszcz…",
        ua: "Спочатку тиша і тіло оповідача, потім гуркіт, потім хмари і дощ…"
      },
      explanation: {
        pl: "Tekst prowadzi od ciszy do gradu. Grad jest kulminacją.",
        ua: "Текст веде від тиші до граду. Град — кульмінація."
      }
    }
  },
  // 7 — concept Relacja
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · relacja", ua: "Zapamiętaj · реляція" },
    formula: "s. 81  ·  ramka podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "To reguła z podręcznika — przepisz do zeszytu. Relacja ≠ bajka i ≠ sama lista faktów bez świadka.",
      ua: "Це правило з підручника — перепиши в зошит. Реляція ≠ казка і ≠ сам список фактів без очевидця."
    },
    text: {
      pl: "**Relacja** to **opowiadanie naocznego świadka** o przebiegu jakiegoś zdarzenia lub zdarzeń.",
      ua: "**Реляція (relacja)** — це **розповідь очевидця** про перебіг якоїсь події або подій."
    },
    items: [
      { pl: "*naoczny świadek* = очевидець (widział / przeżył).", ua: "*naoczny świadek* = очевидець (бачив / пережив)." },
      { pl: "*przebieg* = kolejność: najpierw → potem → na koniec.", ua: "*przebieg* = послідовність: спочатку → потім → наприкінці." },
      { pl: "W *Podniebnej kanonadzie* narrator jest świadkiem burzy — idealny materiał na relację.", ua: "У *Podniebnej kanonadzie* оповідач — очевидець бурі — ідеальний матеріал для реляції." },
      { pl: "Most UA: relacja ≈ репортаж / розповідь очевидця (не вигадка «з sufitu»).", ua: "Міст UA: relacja ≈ репортаж / розповідь очевидця (не вигадка «зі стелі»)." }
    ],
    task: {
      id: "t44-s07-relacja",
      type: "true-false",
      question: {
        pl: "Czy relacja to opowiadanie naocznego świadka o przebiegu zdarzenia?",
        ua: "Чи реляція — це розповідь очевидця про перебіг події?"
      },
      answer: true,
      hint: {
        pl: "Spójrz na pomarańczowe słowo w ramce.",
        ua: "Подивись на помаранчеве слово в рамці."
      },
      explanation: {
        pl: "Tak — dokładnie definicja z podręcznika.",
        ua: "Так — саме означення з підручника."
      }
    }
  },
  // 8 — time vocabulary
  {
    type: "example",
    heading: { pl: "Słownictwo z ramki · kolejność", ua: "Словництво з рамки · послідовність" },
    formula: "s. 81  ·  zad. 3c",
    promptPlace: "before",
    prompt: {
      pl: "Te wyrazy budują *następstwo czasu* w relacji. Zapisz 6 ulubionych do zeszytu.",
      ua: "Ці слова будують *послідовність часу* в реляції. Запиши 6 улюблених у зошит."
    },
    text: {
      pl: "na początku  ·  najpierw  ·  następnie  ·  potem  ·  wkrótce  ·  na koniec  ·  znienacka  ·  wreszcie  ·  zaraz po tym  ·  po chwili  ·  nagle  ·  stopniowo",
      ua: "на початку  ·  спочатку  ·  далі  ·  потім  ·  незабаром  ·  наприкінці  ·  зненацька  ·  нарешті  ·  відразу після  ·  за мить  ·  раптом  ·  поступово"
    },
    items: [
      { pl: "*najpierw / następnie / potem* — spokojna kolejność.", ua: "*najpierw / następnie / potem* — спокійна послідовність." },
      { pl: "*nagle / znienacka* — skok, zaskoczenie (huk, grad).", ua: "*nagle / znienacka* — стрибок, несподіванка (гуркіт, град)." },
      { pl: "*stopniowo* — zmiana powolna (chmury, powietrze).", ua: "*stopniowo* — повільна зміна (хмари, повітря)." },
      { pl: "*wreszcie / na koniec* — domknięcie relacji.", ua: "*wreszcie / na koniec* — закриття реляції." }
    ],
    task: {
      id: "t44-s08-laczniki",
      type: "single-choice",
      question: {
        pl: "Który łącznik najlepiej pasuje do nagłego huku?",
        ua: "Який конектор найкраще пасує до раптового гуркоту?"
      },
      options: [
        { id: "a", label: { pl: "nagle / znienacka", ua: "nagle / znienacka" } },
        { id: "b", label: { pl: "stopniowo", ua: "stopniowo" } },
        { id: "c", label: { pl: "na początku (tylko spokojny upał)", ua: "na początku (лише спокійна спека)" } }
      ],
      answer: "a",
      hint: {
        pl: "Huk przerywa ciszę w jednej chwili.",
        ua: "Гуркіт перериває тишу в одну мить."
      },
      explanation: {
        pl: "*nagle / znienacka* = skok. *stopniowo* = wolno.",
        ua: "*nagle / znienacka* = стрибок. *stopniowo* = повільно."
      }
    }
  },
  // 9 — scheme image
  {
    type: "observe",
    heading: { pl: "Schemat artykułu", ua: "Схема статті" },
    formula: "s. 81  ·  zad. 3  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Kliknij schemat. Trzy części relacji do gazety: **TYTUŁ → ZAPOWIEDŹ → TREŚĆ** (+ miejsce na zdjęcie).",
      ua: "Клацни схему. Три частини реляції до газети: **ЗАГОЛОВОК → АНОНС → ЗМІСТ** (+ місце для фото)."
    },
    visual: vizGhT44("t44-schemat-relacja.png", {
      prompt: "Schemat: tytuł, zapowiedź, treść.",
      alt: {
        pl: "Schemat artykułu prasowego z ramką relacji i łącznikami czasu.",
        ua: "Схема газетної статті з рамкою реляції і часовими конекторами."
      }
    }),
    items: [
      { pl: "**Tytuł** — wyróżniony; ma zaciekawić (*np. Gradowa kanonada nad Chatką*).", ua: "**Заголовок** — виділений; має зацікавити." },
      { pl: "**Zapowiedź** — skrót najważniejszego lub cytat świadka; zachęca do czytania.", ua: "**Анонс** — скорочення найважливішого або цитата очевидця." },
      { pl: "**Treść** — akapity + łączniki z ramki; co widział i przeżył świadek.", ua: "**Зміст** — абзаци + конектори з рамки; що бачив і пережив очевидець." },
      { pl: "Przed pisaniem (3a–b): wypisz wyrazy pogody i przeżycia świadków z tekstu.", ua: "Перед письмом (3a–b): випиши слова погоди і переживання свідків із тексту." }
    ],
    task: {
      id: "t44-s09-schemat",
      type: "single-choice",
      question: {
        pl: "Jaka jest poprawna kolejność części artykułu?",
        ua: "Який правильний порядок частин статті?"
      },
      options: [
        { id: "a", label: { pl: "tytuł → zapowiedź → treść", ua: "заголовок → анонс → зміст" } },
        { id: "b", label: { pl: "treść → tytuł → zapowiedź", ua: "зміст → заголовок → анонс" } },
        { id: "c", label: { pl: "tylko tytuł, bez treści", ua: "лише заголовок, без змісту" } }
      ],
      answer: "a",
      hint: {
        pl: "Schemat czyta się z góry na dół.",
        ua: "Схема читається згори вниз."
      },
      explanation: {
        pl: "Najpierw tytuł, potem zapowiedź, na końcu treść z akapitami.",
        ua: "Спочатку заголовок, потім анонс, наприкінці зміст з абзацами."
      }
    }
  },
  // 10 — write
  {
    type: "practice",
    heading: { pl: "Piszę relację", ua: "Пишу реляцію" },
    formula: "s. 81  ·  zad. 3  ·  zeszyt",
    promptPlace: "before",
    prompt: {
      pl: "Napisz *krótką* relację o burzy nad Chatką (możesz w 1. os. jak świadek). Użyj schematu i 2–3 łączników z ramki.",
      ua: "Напиши *коротку* реляцію про бурю над Chatką (можна в 1-й ос. як очевидець). Використай схему і 2–3 конектори з рамки."
    },
    items: [
      { pl: "Tytuł (1 linia).", ua: "Заголовок (1 рядок)." },
      { pl: "Zapowiedź (1–2 zdania): co się stało?", ua: "Анонс (1–2 речення): що сталося?" },
      { pl: "Treść (3–5 zdań): cisza → huk → deszcz/grad → szkody.", ua: "Зміст (3–5 речень): тиша → гуркіт → дощ/град → збитки." },
      { pl: "Słowa z tekstu: *huk, kołdra chmur, ulewa, grad, wyrwa*.", ua: "Слова з тексту: *huk, kołdra chmur, ulewa, grad, wyrwa*." }
    ],
    task: {
      id: "t44-s10-pisze",
      type: "open-answer",
      question: {
        pl: "Wklej tu szkic: tytuł + zapowiedź + 3 zdania treści (z łącznikiem czasu).",
        ua: "Встав сюди ескіз: заголовок + анонс + 3 речення змісту (з конектором часу)."
      },
      hint: {
        pl: "Start: *Najpierw zapadła cisza. Nagle rozległ się huk…*",
        ua: "Старт: *Najpierw zapadła cisza. Nagle rozległ się huk…*"
      },
      explanation: {
        pl: "Dobra relacja: świadek + kolejność + schemat gazety.",
        ua: "Добра реляція: очевидець + послідовність + схема газети."
      }
    }
  },
  // 11 — summary
  {
    type: "summary",
    heading: { pl: "Co zabieram z lekcji", ua: "Що забираю з уроку" },
    formula: "s. 81  ·  checklist",
    promptPlace: "before",
    prompt: {
      pl: "Sprawdź zeszyt: skany przeczytane, świat przedstawiony, plan burzy, definicja *relacji*, szkic artykułu.",
      ua: "Перевір зошит: скани прочитані, зображений світ, план бурі, означення *реляції*, ескіз статті."
    },
    items: [
      { pl: "Tekst Szczygielskiego: upał → cisza → burza → grad.", ua: "Текст Щиґельського: спека → тиша → буря → град." },
      { pl: "Świat przedstawiony = czas + miejsce + bohaterowie.", ua: "Зображений світ = час + місце + герої." },
      { pl: "Relacja = opowiadanie naocznego świadka.", ua: "Реляція = розповідь очевидця." },
      { pl: "Artykuł: tytuł → zapowiedź → treść (+ łączniki czasu).", ua: "Стаття: заголовок → анонс → зміст (+ часові конектори)." }
    ],
    task: {
      id: "t44-s11-koniec",
      type: "true-false",
      question: {
        pl: "Czy po tej lekcji umiesz powiedzieć, czym jest relacja, i ułożyć ją według schematu tytuł–zapowiedź–treść?",
        ua: "Чи після цього уроку вмієш сказати, що таке реляція, і скласти її за схемою заголовок–анонс–зміст?"
      },
      answer: true,
      hint: {
        pl: "To był główny cel pisania na s. 81.",
        ua: "Це була головна мета письма на с. 81."
      },
      explanation: {
        pl: "Tak — definicja + schemat + szkic w zeszycie zamykają lekcję 44.",
        ua: "Так — означення + схема + ескіз у зошиті закривають урок 44."
      }
    }
  }
]};
