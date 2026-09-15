function emT65(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T65 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT65(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T65 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 131–132  ·  Lekcja 65  ·  tryby",
    promptPlace: "before",
    prompt: {
      pl: "Pierwsza część bloku: **trzy tryby** czasownika (informujemy · nakłaniamy · wątpimy). Pisownia *-bym/-by* — w **T66**. Polski pierwszy. Dla 🇺🇦: porównamy z **дійсним / наказовим / умовним** способом.",
      ua: "Перша частина блоку: **три способи** дієслова (повідомляємо · спонукаємо · сумніваємось). Правопис *-bym/-by* — у **T66**. Польська перша. Порівняємо з **дійсним / наказовим / умовним** способом."
    },
    items: [
      { pl: "rozpoznam tryb oznajmujący, rozkazujący i przypuszczający;", ua: "впізнаю дійсний, наказовий і умовний спосіб;" },
      { pl: "zrozumiem, po co wybieramy dany tryb;", ua: "зрозумію, навіщо обираємо певний спосіб;" },
      { pl: "przekształcę formy między trybami w dialogu.", ua: "перетворю форми між способами в діалозі." }
    ],
    task: {
      id: "t65-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Rozpoznawanie trzech trybów w tekście", ua: "Впізнавання трьох способів у тексті" } },
        { id: "b", label: { pl: "Tworzenie zdań w różnych trybach", ua: "Творення речень у різних способах" } },
        { id: "c", label: { pl: "Tylko ortografię *warto by / zrobiłbym* (to T66)", ua: "Лише орфографію *warto by / zrobiłbym* (це T66)" } },
        { id: "d", label: { pl: "Pracę z e-mailem Pawła i komiksem", ua: "Роботу з e-mailом Павла і коміксом" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Łączna/rozdzielna pisownia *by* → T66.",
        ua: "Разом/окремо *by* → T66."
      },
      explanation: {
        pl: "A, B, D. Ortografia cząstek *by* — w T66.",
        ua: "A, B, D. Орфографія часток *by* — у T66."
      }
    }
  },

  // 2 warm-up + UA bridge
  {
    type: "observe",
    heading: { pl: "Na dobry początek · trzy cele", ua: "На старт · три цілі" },
    formula: "s. 131  ·  wprowadzenie",
    promptPlace: "before",
    prompt: {
      pl: "Porównaj: *Czytam książkę.* · *Czytaj uważnie!* · *Poczytałbym wieczorem.* Inny cel = inny **tryb**.",
      ua: "Порівняй: *Czytam książkę.* · *Czytaj uważnie!* · *Poczytałbym wieczorem.* Інша мета = інший **спосіб**."
    },
    items: [
      { pl: "*Czytam…* → informacja (**oznajmujący** ≈ UA дійсний).", ua: "*Czytam…* → інформація (**oznajmujący** ≈ дійсний спосіб)." },
      { pl: "*Czytaj!* → rozkaz/prośba (**rozkazujący** ≈ наказовий).", ua: "*Czytaj!* → наказ/прохання (**rozkazujący** ≈ наказовий)." },
      { pl: "*Poczytałbym…* → marzenie/warunek (**przypuszczający** ≈ умовний + *би/б*).", ua: "*Poczytałbym…* → мрія/умова (**przypuszczający** ≈ умовний + *би/б*)." },
      emT65("UA: би/б завжди окремо · PL: często doklejone (napisałbym)")
    ],
    task: {
      id: "t65-s02-cele",
      type: "single-choice",
      question: {
        pl: "Zdanie *Chętnie poczytałbym coś wieczorem* wyraża…",
        ua: "Речення *Chętnie poczytałbym coś wieczorem* виражає…"
      },
      options: [
        { id: "a", label: { pl: "marzenie / warunek (tryb przypuszczający)", ua: "мрію / умову (умовний спосіб)" } },
        { id: "b", label: { pl: "rozkaz (tryb rozkazujący)", ua: "наказ (наказовий спосіб)" } },
        { id: "c", label: { pl: "tylko fakt w czasie przeszłym bez *by*", ua: "лише факт у минулому без *by*" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj cząstki *-bym*.",
        ua: "Шукай частку *-bym*."
      },
      explanation: {
        pl: "*-bym* = tryb przypuszczający. UA: *я б почитав*.",
        ua: "*-bym* = умовний. UA: *я б почитав* (частка окремо!)."
      }
    }
  },

  // 3 email
  {
    type: "observe",
    heading: { pl: "E-mail Pawła · Chiny", ua: "E-mail Павла · Китай" },
    formula: "s. 131  ·  poczta",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj wiadomość do Wiktora. Kliknij skan. Szukaj czasowników i ich **intencji**.",
      ua: "Прочитай повідомлення до Віктора. Клацни скан. Шукай дієслова і їхню **мету**."
    },
    visual: vizGhT65("t65-email.png", {
      alt: { pl: "E-mail: Re: Chiny — Paweł do Wiktora", ua: "E-mail: Re: Chiny — Павло до Віктора" },
      place: "after"
    }),
    items: [
      { pl: "Paweł pyta, radzi, prosi o zdjęcia Ogrodu Cesarskiego.", ua: "Павло питає, радить, просить фото Імператорського саду." },
      { pl: "Uwaga: *odgrodzono* = forma **-no** (bezosobowa) — nie „osobowa”.", ua: "Увага: *odgrodzono* = форма **-no** (безособова) — не «особова»." }
    ],
    task: {
      id: "t65-s03-email",
      type: "single-choice",
      question: {
        pl: "Forma *prześlij* w e-mailu to…",
        ua: "Форма *prześlij* в e-mailі — це…"
      },
      options: [
        { id: "a", label: { pl: "tryb rozkazujący (prośba / polecenie)", ua: "наказовий спосіб (прохання / наказ)" } },
        { id: "b", label: { pl: "tryb oznajmujący (sam fakt)", ua: "дійсний спосіб (лише факт)" } },
        { id: "c", label: { pl: "tryb przypuszczający (z *-by*)", ua: "умовний спосіб (з *-by*)" } }
      ],
      answer: "a",
      hint: {
        pl: "Jak UA *надішли / перешли*.",
        ua: "Як UA *надішли / перешли*."
      },
      explanation: {
        pl: "*prześlij* = rozkazujący. *odwiedziłbym / mógłbyś* = przypuszczający.",
        ua: "*prześlij* = наказовий. *odwiedziłbym / mógłbyś* = умовний."
      }
    }
  },

  // 4 zad 1 grouping
  {
    type: "practice",
    heading: { pl: "Zad. 1 · wypisz i pogrupuj", ua: "Завд. 1 · випиши і згрупуй" },
    formula: "s. 131  ·  zad. 1a–b",
    promptPlace: "before",
    prompt: {
      pl: "Z e-maila wypisz formy **osobowe**, potem pogrupuj według funkcji (informacja / rozkaz / warunek).",
      ua: "З e-mailа випиши **особові** форми, потім згрупуй за функцією (інформація / наказ / умова)."
    },
    visual: vizGhT65("t65-zad1.png", {
      alt: { pl: "Zad. 1: wypisz i pogrupuj czasowniki", ua: "Завд. 1: випиши і згрупуй дієслова" },
      place: "after"
    }),
    items: [
      { pl: "Osobowe m.in.: *widziałeś, odwiedziłbym, mógłbyś, prześlij, zależałoby, przekazują*.", ua: "Особові зокрема: *widziałeś, odwiedziłbym, mógłbyś, prześlij, zależałoby, przekazują*." },
      { pl: "*odgrodzono* — bezosobowe **-no** (osobno w T61).", ua: "*odgrodzono* — безособове **-no** (окремо в T61)." },
      { pl: "Pełny podział na tryby — po *Sprawdź*.", ua: "Повний поділ за способами — після *Sprawdź*." }
    ],
    task: {
      id: "t65-s04-grupy",
      type: "single-choice",
      question: {
        pl: "Który podział jest poprawny?",
        ua: "Який поділ правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "oznajmujący: widziałeś, przekazują · rozkazujący: prześlij · przypuszczający: odwiedziłbym, mógłbyś, zależałoby",
            ua: "дійсний: widziałeś, przekazują · наказовий: prześlij · умовний: odwiedziłbym, mógłbyś, zależałoby"
          }
        },
        {
          id: "b",
          label: {
            pl: "wszystkie formy z e-maila to tylko tryb rozkazujący",
            ua: "усі форми з e-mailа — лише наказовий"
          }
        },
        {
          id: "c",
          label: {
            pl: "odwiedziłbym = oznajmujący, bo mówi o Chinach",
            ua: "odwiedziłbym = дійсний, бо про Китай"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *-bym/-byś/-by* = przypuszczający.",
        ua: "Шукай *-bym/-byś/-by* = умовний."
      },
      explanation: {
        pl: "A. *odwiedziłbym* ≈ UA *я б відвідав* — mimo tematu Chin to warunek/rada, nie sam fakt.",
        ua: "A. *odwiedziłbym* ≈ *я б відвідав* — умова/порада, не сам факт."
      }
    }
  },

  // 5 concept tryby
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · trzy tryby", ua: "Zapamiętaj · три способи" },
    formula: "s. 131  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Schemat do zeszytu. Skan ramki — kliknij. Pod spodem: mostek UA.",
      ua: "Схема в зошит. Скан рамки — клікни. Нижче: місток UA."
    },
    visual: vizGhT65("t65-tryby-ramka.jpg", {
      alt: { pl: "Ramka: trzy tryby czasownika", ua: "Рамка: три способи дієслова" },
      place: "after"
    }),
    text: {
      pl: "Czasowniki występują w **trzech trybach**. **Oznajmujący (orzekający)** — informuje o czynnościach (*mówiłam, mówi, będzie mówił*). **Rozkazujący** — nakłania, rozkazuje, prosi (*mów, mówmy, niech mówią*). **Przypuszczający** — warunek, niepewność, wątpliwość (*mówiłaby, mówilibyście*). **UA:** дійсний · наказовий · умовний.",
      ua: "Дієслова бувають у **трьох способах**. **Oznajmujący** = **дійсний** (факти: *mówiłam, mówi…*). **Rozkazujący** = **наказовий** (*mów!*). **Przypuszczający** = **умовний** (*mówiłaby* ≈ *вона б говорила*). У PL частка часто **приклеєна** до дієслова."
    },
    items: [
      { pl: "Oznajmujący — fakty (czas przeszły/teraźniejszy/przyszły).", ua: "Дійсний — факти (минулий/теперішній/майбутній)." },
      { pl: "Rozkazujący — brak typowej kategorii czasu.", ua: "Наказовий — без звичайної категорії часу." },
      { pl: "Przypuszczający — zawsze cząstka *by* (ruchoma).", ua: "Умовний — завжди частка *by* (рухома)." }
    ],
    task: {
      id: "t65-s05-def",
      type: "single-choice",
      question: {
        pl: "Tryb rozkazujący służy do…",
        ua: "Наказовий спосіб служить для…"
      },
      options: [
        { id: "a", label: { pl: "nakłaniania, rozkazu lub prośby", ua: "спонукання, наказу або прохання" } },
        { id: "b", label: { pl: "samego opisu faktów w przeszłości", ua: "лише опису фактів у минулому" } },
        { id: "c", label: { pl: "zawsze tylko z cząstką *-bym*", ua: "завжди лише з часткою *-bym*" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: *mów, mówmy, niech mówią*.",
        ua: "Рамка: *mów, mówmy, niech mówią*."
      },
      explanation: {
        pl: "Rozkazujący = nakłania. Przypuszczający ma *by*.",
        ua: "Наказовий = спонукає. Умовний має *by*."
      }
    }
  },

  // 6 transformacja zad 2
  {
    type: "practice",
    heading: { pl: "Zad. 2 · scenka · trzy tryby", ua: "Завд. 2 · сценка · три способи" },
    formula: "s. 132  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Do scenki ułóż po **dwa** zdania w każdym trybie (mogą mówić bohaterowie).",
      ua: "До сценки склади по **два** речення в кожному способі (можуть говорити герої)."
    },
    visual: vizGhT65("t65-zad2.jpg", {
      alt: { pl: "Scenka klasowa: komputer, sprzątanie, żarty", ua: "Сценка в класі: комп’ютер, прибирання, жарти" },
      place: "after"
    }),
    items: [
      { pl: "Oznajmujący: *Kuba patrzy na monitor. Ania ściera półkę.*", ua: "Дійсний: *Kuba patrzy na monitor. Ania ściera półkę.*" },
      { pl: "Rozkazujący: *Spójrz na Chiny! Wytrzyj biurko!*", ua: "Наказовий: *Spójrz na Chiny! Wytrzyj biurko!*" },
      { pl: "Przypuszczający: *Napiłabym się soku, gdyby… Poszedłby do domu, gdyby skończył.*", ua: "Умовний: *Napiłabym się…* ≈ *я б випила…*" }
    ],
    task: {
      id: "t65-s06-scenka",
      type: "open-answer",
      question: {
        pl: "Napisz 6 krótkich zdań: 2 oznajmujące + 2 rozkazujące + 2 przypuszczające (o scence).",
        ua: "Напиши 6 коротких речень: 2 дійсні + 2 наказові + 2 умовні (про сценку)."
      },
      hint: {
        pl: "Oznacz tryb w nawiasie: (O) (R) (P).",
        ua: "Познач спосіб у дужках: (Д) (Н) (У)."
      },
      explanation: {
        pl: "Sprawdź: fakt bez *by* · rozkaz/prośba · forma z *by/bym/byś*.",
        ua: "Перевір: факт без *by* · наказ/прохання · форма з *by/bym/byś*."
      }
    }
  },

  // 7 komiks 3a
  {
    type: "practice",
    heading: { pl: "Zad. 3a · komiks · określ tryb", ua: "Завд. 3a · комікс · визнач спосіб" },
    formula: "s. 132  ·  zad. 3a",
    promptPlace: "before",
    prompt: {
      pl: "Znajdź czasowniki w formie osobowej i określ tryb. Historia: gitara + chińska przypowieść o pałeczkach.",
      ua: "Знайди особові дієслова і визнач спосіб. Історія: гітара + китайська притча про палички."
    },
    visual: vizGhT65("t65-komiks.jpg", {
      alt: { pl: "Komiks: ojciec, syn, pałeczki z kości słoniowej", ua: "Комікс: батько, син, палички зі слонової кістки" },
      place: "after"
    }),
    items: [
      { pl: "Rozkazujący np.: *zastanów się, nie rób, wyobraź sobie, pomyśl*.", ua: "Наказовий напр.: *zastanów się, nie rób, wyobraź sobie, pomyśl*." },
      { pl: "Przypuszczający: *mogłaby, nie zdziwiłyby, miałbyś, ogołociłbyś…*", ua: "Умовний: *mogłaby, nie zdziwiłyby, miałbyś…*" },
      { pl: "Reszta faktów = oznajmujący. Klucz przykładowy — po *Sprawdź*.", ua: "Решта фактів = дійсний. Приклад ключа — після *Sprawdź*." }
    ],
    task: {
      id: "t65-s07-komiks",
      type: "multiple-choice",
      question: {
        pl: "Które formy z komiksu są w trybie **przypuszczającym**? Zaznacz wszystkie.",
        ua: "Які форми з коміксу в **умовному** способі? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "mogłaby · miałbyś · ogołociłbyś · pogrążyłbyś", ua: "mogłaby · miałbyś · ogołociłbyś · pogrążyłbyś" } },
        { id: "b", label: { pl: "zastanów się · nie rób · pomyśl", ua: "zastanów się · nie rób · pomyśl" } },
        { id: "c", label: { pl: "żył · postanowił · rozumiem · cieszę się", ua: "żył · postanowił · rozumiem · cieszę się" } },
        { id: "d", label: { pl: "nie zdziwiłyby · trwałoby", ua: "nie zdziwiłyby · trwałoby" } }
      ],
      answer: ["a", "d"],
      hint: {
        pl: "Szukaj *-by / -byś / -bym*.",
        ua: "Шукай *-by / -byś / -bym*."
      },
      explanation: {
        pl: "A, D = przypuszczający. B = rozkazujący. C = oznajmujący.",
        ua: "A, D = умовний. B = наказовий. C = дійсний."
      }
    }
  },

  // 8 zad 3b
  {
    type: "practice",
    heading: { pl: "Zad. 3b · wypowiedź bohaterki", ua: "Завд. 3b · висловлювання героїні" },
    formula: "s. 132  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "Dokończ: (1) życzenie do taty — **rozkazujący**; (2) namysł — **przypuszczający**.",
      ua: "Докінчи: (1) бажання до тата — **наказовий**; (2) роздум — **умовний**."
    },
    visual: vizGhT65("t65-zad3b.png", {
      alt: { pl: "Wiesz, tato… / Myślę, że…", ua: "Wiesz, tato… / Myślę, że…" },
      place: "after"
    }),
    items: [
      { pl: "*Wiesz, tato… Kup mi… / Pozwól mi… / Nie kupuj…*", ua: "*Wiesz, tato… Kup mi… / Pozwól mi…* (наказовий)." },
      { pl: "*Myślę, że potrzebowałabym… / wolałabym…*", ua: "*Myślę, że potrzebowałabym…* ≈ *мені б потрібна…*." }
    ],
    task: {
      id: "t65-s08-wypowiedz",
      type: "open-answer",
      question: {
        pl: "Napisz po 2–3 zdania: A) od *Wiesz, tato…* (rozkazujący) B) od *Myślę, że…* (przypuszczający).",
        ua: "Напиши по 2–3 речення: A) від *Wiesz, tato…* (наказовий) B) від *Myślę, że…* (умовний)."
      },
      hint: {
        pl: "A bez *by*; B z *-bym/-byś/-by*.",
        ua: "A без *by*; B з *-bym/-byś/-by*."
      },
      explanation: {
        pl: "Sprawdź tryby: rozkaz/prośba vs forma z cząstką *by*.",
        ua: "Перевір: наказ/прохання vs форма з часткою *by*."
      }
    }
  },

  // 9 zad 4 Yu
  {
    type: "practice",
    heading: { pl: "Zad. 4 · Wielki Yu · tryby", ua: "Завд. 4 · Великий Юй · способи" },
    formula: "s. 132  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Odszukaj czasowniki i określ tryb. Krótki tekst + smok.",
      ua: "Знайди дієслова і визнач спосіб. Короткий текст + дракон."
    },
    visual: vizGhT65("t65-zad4.png", {
      alt: { pl: "Tekst o Wielkim Yu i smoku", ua: "Текст про Великого Юя і дракона" },
      place: "after"
    }),
    items: [
      { pl: "Najpierw sam; klucz po *Sprawdź*.", ua: "Спочатку сам; ключ після *Sprawdź*." },
      { pl: "Szukaj: fakt / *by* / rozkaz (*Pamiętaj! Wykorzystaj!*).", ua: "Шукай: факт / *by* / наказ (*Pamiętaj! Wykorzystaj!*)." }
    ],
    task: {
      id: "t65-s09-yu",
      type: "multiple-choice",
      question: {
        pl: "Które zestawienie jest poprawne? Zaznacz wszystkie.",
        ua: "Яке зіставлення правильне? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "oznajmujący: ujarzmił, pomógł, podarowało, zniknęło, powiedziało", ua: "дійсний: ujarzmił, pomógł, podarowało, zniknęło, powiedziało" } },
        { id: "b", label: { pl: "przypuszczający: zbudowałby", ua: "умовний: zbudowałby" } },
        { id: "c", label: { pl: "rozkazujący: Pamiętaj · wykorzystaj", ua: "наказовий: Pamiętaj · wykorzystaj" } },
        { id: "d", label: { pl: "zbudowałby = rozkazujący", ua: "zbudowałby = наказовий" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*-by* w *zbudowałby* = przypuszczający.",
        ua: "*-by* у *zbudowałby* = умовний."
      },
      explanation: {
        pl: "A, B, C. D fałsz. UA: *не збудував би* — частка osobno.",
        ua: "A, B, C. D хиба. UA: *не збудував би* — частка окремо."
      }
    }
  },

  // 10 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T65", ua: "Підсумок · T65" },
    formula: "s. 131–132  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Trzy tryby = trzy intencje. Dalej T66: **jak pisać** ruchome *by*.",
      ua: "Три способи = три наміри. Далі T66: **як писати** рухоме *by*."
    },
    items: [
      { pl: "Oznajmujący ≈ дійсний · Rozkazujący ≈ наказовий · Przypuszczający ≈ умовний.", ua: "Oznajmujący ≈ дійсний · Rozkazujący ≈ наказовий · Przypuszczający ≈ умовний." },
      { pl: "Wybór trybu = cel mówiącego.", ua: "Вибір способу = мета мовця." },
      emT65("T66: zrobiłbym (łącznie) vs warto by (rozdzielnie)")
    ],
    task: {
      id: "t65-s10-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Forma *zróbcie* jest w trybie rozkazującym.”",
        ua: "Чи твердження правильне? «Форма *zróbcie* — у наказовому способі.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Nie ma *-by*; to polecenie do *wy*.",
        ua: "Немає *-by*; це наказ до *ви*."
      },
      explanation: {
        pl: "Prawda — rozkazujący. Przypuszczający miałby *zrobilibyście*.",
        ua: "Правда — наказовий. Умовний був би *zrobilibyście*."
      }
    }
  }
]};
