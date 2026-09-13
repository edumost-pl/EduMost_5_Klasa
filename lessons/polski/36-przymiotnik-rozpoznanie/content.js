function emT36(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T36 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT36(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T36 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 69  ·  Lekcja 36  ·  przymiotnik",
    promptPlace: "before",
    prompt: {
      pl: "Dział *W zwykły i niezwykły sposób o zjawiskach*. Cykl podręcznika: *„Listy z podróży z gramatyką w tle”. Części mowy – przymiotnik.* Tematy 36 i 37 to *dwie* godziny. Dziś s. 69: najpierw *przypominamy*, co już wiesz o przymiotniku (прикметник), potem e-mail Wiktora z Gizy, pary *przymiotnik + rzeczownik* i *związek zgody*. Pełna odmiana, tabela i zaproszenie na Bal — lekcja 37. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Розділ *W zwykły i niezwykły sposób o zjawiskach*. Цикл підручника: *„Listy z podróży z gramatyką w tle”. Części mowy – przymiotnik.* Теми 36 і 37 — *дві* години. Сьогодні с. 69: спочатку *згадуємо*, що вже знаєш про прикметник, потім e-mail Віктора з Гізи, пари *прикметник + іменник* і *зв’язок узгодження*. Повна відміна, таблиця і запрошення на бал — урок 37. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "przypomnę, na jakie pytania odpowiada *przymiotnik*;", ua: "нагадаю, на які питання відповідає *прикметник*;" },
      { pl: "wskażę przymiotnik w tekście i wyraz, który on *określa*;", ua: "вкажу прикметник у тексті і слово, яке він *означає*;" },
      { pl: "powiem, że przymiotnik najczęściej określa *rzeczownik*;", ua: "скажу, що прикметник найчастіше означає *іменник*;" },
      { pl: "zrozumiem *związek zgody* (wspólna forma);", ua: "зрозумію *зв’язок узгодження* (спільна форма);" },
      { pl: "zapiszę pułapkę: *egipski, polski* — małą literą.", ua: "запишу пастку: *egipski, polski* — з малої літери." }
    ],
    task: {
      id: "t36-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Rozpoznać przymiotnik i wskazać rzeczownik, który on określa.", ua: "Розпізнати прикметник і вказати іменник, який він означає." } },
        { id: "b", label: { pl: "Zrozumieć, że przymiotnik i rzeczownik tworzą związek zgody.", ua: "Зрозуміти, що прикметник і іменник творять зв’язок узгодження." } },
        { id: "c", label: { pl: "Już dziś odmienić całą tabelę (męski, żeński, nijaki, mnoga) i napisać zaproszenie na Bal.", ua: "Уже сьогодні відмінити всю таблицю (чоловічий, жіночий, середній, множина) і написати запрошення на бал." } },
        { id: "d", label: { pl: "Przypomnieć pytania: jaki? jaka? jakie?", ua: "Пригадати питання: jaki? jaka? jakie?" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Tabela odmiany i Bal są na s. 70–71 — która lekcja?",
        ua: "Таблиця відміни і бал на с. 70–71 — який урок?"
      },
      explanation: {
        pl: "Dziś: rozpoznanie, pary, zgoda, pułapka ortograficzna. Cała odmiana i Bal — lekcja 37.",
        ua: "Сьогодні: розпізнавання, пари, узгодження, орфографічна пастка. Уся відміна і бал — урок 37."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · Dzisiejszy dzień jest…", ua: "Розминка · Сьогоднішній день є…" },
    formula: "żywa gramatyka  ·  same cechy",
    promptPlace: "before",
    prompt: {
      pl: "Dokończ zdanie *samymi cechami*: „Dzisiejszy dzień jest…”. Możesz: *słoneczny, chłodny, pracowity, ciekawy*. To wyrazy, które *opisują* dzień — nie nazywają rzeczy.",
      ua: "Доповни речення *самими ознаками*: „Dzisiejszy dzień jest…”. Можна: *słoneczny, chłodny, pracowity, ciekawy*. Це слова, які *описують* день — не називають річ."
    },
    items: [
      { pl: "W zeszycie 4 cechy dzisiejszego dnia (jaki jest?).", ua: "У зошиті 4 ознаки сьогоднішнього дня (який він?)." },
      { pl: "Most: українська *прикметник* — *який? яка? яке?*", ua: "Міст: українська *прикметник* — *який? яка? яке?*" }
    ],
    task: {
      id: "t36-s02-dzien",
      type: "single-choice",
      question: {
        pl: "Które wyrazy NA PEWNO dokończą zdanie „Dzisiejszy dzień jest…” *cechą*?",
        ua: "Які слова НАПЕВНО доповнять речення „Dzisiejszy dzień jest…” *ознакою*?"
      },
      options: [
        { id: "a", label: { pl: "ciekawy, słoneczny, pracowity", ua: "ciekawy, słoneczny, pracowity" } },
        { id: "b", label: { pl: "szkoła, zeszyt, tablica (to rzeczowniki)", ua: "szkoła, zeszyt, tablica (це іменники)" } },
        { id: "c", label: { pl: "piszemy, czytamy, siedzimy (to czasowniki)", ua: "piszemy, czytamy, siedzimy (це дієслова)" } }
      ],
      answer: "a",
      hint: {
        pl: "Pytanie: *jaki* jest dzień? Nie *co* i nie *co robi*.",
        ua: "Питання: *який* день? Не *що* і не *що робить*."
      },
      explanation: {
        pl: "Cechy: ciekawy, słoneczny, pracowity. Szkoła = rzeczownik. Piszemy = czasownik.",
        ua: "Ознаки: ciekawy, słoneczny, pracowity. Szkoła = іменник. Piszemy = дієслово."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Co już wiem · co jest nowe", ua: "Що вже знаю · що нове" },
    formula: "most UA  ·  klasa 5",
    promptPlace: "before",
    prompt: {
      pl: "Przymiotnik znasz od dawna: w klasach 1–4 i po ukraińsku (*прикметник*). W lekcji 22 odróżniłeś *niezwykłej* (jaka?) od rzeczownika. W lekcjach 29–31 rzeczownik ma *siedem przypadków* — przymiotnik *idzie za nim*. Dziś nie uczymy przypadków od zera. Nowe w klasie 5: *związek zgody* i liczba mnoga *męskoosobowa* (*dobrzy bracia* — po ukraińsku zawsze *добрі*).",
      ua: "Прикметник знаєш давно: у 1–4 класах і українською (*прикметник*). У уроці 22 відрізнив *niezwykłej* (яка?) від іменника. У уроках 29–31 іменник має *сім відмінків* — прикметник *йде за ним*. Сьогодні не вчимо відмінки з нуля. Нове в 5 класі: *зв’язок узгодження* і множина *чоловічоособна* (*dobrzy bracia* — українською завжди *добрі*)."
    },
    items: [
      { pl: "Już umiesz: pytania *jaki? jaka? jakie?*, rodzaj, liczba, cecha (kolor, wielkość, kształt).", ua: "Уже вмієш: питання *який? яка? яке?*, рід, число, ознака (колір, розмір, форма)." },
      { pl: "Nowe: przymiotnik bierze *przypadek* rzeczownika (7 pytań z lekcji 29).", ua: "Нове: прикметник бере *відмінок* іменника (7 питань з уроку 29)." },
      { pl: "Nowe i trudne: *dobrzy bracia* / *dobre siostry* — po ukraińsku obie formy to *добрі*.", ua: "Нове і складне: *dobrzy bracia* / *dobre siostry* — українською обидві форми *добрі*." }
    ],
    task: {
      id: "t36-s03-most",
      type: "single-choice",
      question: {
        pl: "Co jest NA PEWNO *nowe* w klasie 5 — a nie powtórka z klas 1–4?",
        ua: "Що НАПЕВНО *нове* в 5 класі — а не повторення з 1–4?"
      },
      options: [
        { id: "a", label: { pl: "Że przymiotnik odpowiada na jaki? jaka? jakie? (to już znasz).", ua: "Що прикметник відповідає на jaki? jaka? jakie? (це вже знаєш)." } },
        { id: "b", label: { pl: "Związek zgody i mnoga męskoosobowa: dobrzy bracia (nie *dobre bracia*).", ua: "Зв’язок узгодження і чоловічоособна множина: dobrzy bracia (не *dobre bracia*)." } },
        { id: "c", label: { pl: "Że cechy to kolor i wielkość (to też już znasz).", ua: "Що ознаки — це колір і розмір (це теж уже знаєш)." } }
      ],
      answer: "b",
      hint: {
        pl: "Pytania *jaki?* znasz. Co polskiego *nie* ma w ukraińskim *добрі брати*?",
        ua: "Питання *який?* знаєш. Чого польського *немає* в українському *добрі брати*?"
      },
      explanation: {
        pl: "Nowe: zgoda z przypadkiem i *dobrzy* przy osobach męskich. Pytania i cechy — powtórka.",
        ua: "Нове: узгодження з відмінком і *dobrzy* при чоловічих особах. Питання і ознаки — повторення."
      }
    }
  },
  {
    type: "vocabulary",
    heading: { pl: "Pigułka · definicja", ua: "Пігулка · означення" },
    formula: "s. 70  ·  ramka podręcznika",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik (s. 70): *Przymiotnik to część mowy nazywająca cechy i właściwości (na przykład kształt, wielkość, kolor) ludzi, rzeczy lub zjawisk. Najczęściej określa rzeczownik i odpowiada na pytania jaki? jaka? jakie?* Zapisz pigułkę. Pytania *który? czyj?* też bywają — dziś w centrum *jaki?*",
      ua: "Підручник (с. 70): прикметник називає *ознаки і властивості* (форма, розмір, колір) людей, речей або явищ. Найчастіше означає іменник і відповідає на *який? яка? яке?* Запиши пігулку. Питання *który? czyj?* теж бувають — сьогодні в центрі *jaki?*"
    },
    rows: [
      { pl: "jaki? — ciekawy (dzień)", ua: "який? — ciekawy (dzień)" },
      { pl: "jaka? — ciekawa (historia)", ua: "яка? — ciekawa (historia)" },
      { pl: "jakie? — ciekawe (zakończenie / zakończenia)", ua: "яке? / які? — ciekawe (zakończenie / zakończenia)" },
      { pl: "Odmienna część mowy: przypadki, liczby, rodzaje", ua: "Змінна частина мови: відмінки, числа, роди" },
      { pl: "Określa najczęściej rzeczownik (nie czasownik)", ua: "Означає найчастіше іменник (не дієслово)" }
    ],
    task: {
      id: "t36-s04-definicja",
      type: "true-false",
      question: {
        pl: "Czy przymiotnik najczęściej określa rzeczownik i odpowiada na pytania jaki? jaka? jakie?",
        ua: "Чи прикметник найчастіше означає іменник і відповідає на pytania jaki? jaka? jakie?"
      },
      answer: true,
      hint: {
        pl: "To zdanie z ramki na s. 70. Czy przymiotnik opisuje *rzecz*, czy *czynność*?",
        ua: "Це речення з рамки на с. 70. Прикметник описує *річ* чи *дію*?"
      },
      explanation: {
        pl: "Tak. Cechy ludzi, rzeczy, zjawisk. Pytania: jaki? jaka? jakie? Określa rzeczownik.",
        ua: "Так. Ознаки людей, речей, явищ. Питання: jaki? jaka? jakie? Означає іменник."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "E-mail Wiktora · Giza", ua: "E-mail Віктора · Гіза" },
    formula: "s. 69  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Wiktor pisze do klasy: *Do: klasapiata@xp45.pl*, temat *Giza*. Czytamy, żeby *zrozumieć* historię o Ozyrysie — potem polujemy na przymiotniki. Proza: polski + 🇺🇦 pod akapitem. Odsłoń trzy części.",
      ua: "Віктор пише класу: *Do: klasapiata@xp45.pl*, тема *Giza*. Читаємо, щоб *зрозуміти* історію про Осіріса — потім шукаємо прикметники. Проза: польська + 🇺🇦 під абзацом. Відкрий три частини."
    },
    reveal: true,
    steps: [
      {
        formula: "część 1  ·  przyjazd",
        visual: vizGhT36("t36-giza.png", {
          prompt: "Piramida w Gizie, Nil, łódka.",
          alt: { pl: "Piramida w Gizie o zachodzie słońca, Nil i łódka.", ua: "Піраміда в Гізі на заході сонця, Ніл і човен." }
        }),
        text: {
          pl: [
            "Cześć!",
            "Jesteśmy w Gizie. Dołączył do nas turysta, który się spóźnił na statek. Przypłynął łódką i opowiadał o *niezwykłych przygodach*. My też mamy za sobą *długą wycieczkę*. Sądzę, że *piaszczyste wzniesienia* często będą mi się śnić po nocach."
          ],
          ua: [
            "Привіт!",
            "Ми в Гізі. До нас приєднався турист, який запізнився на корабель. Приплив човном і розповідав про *незвичайні пригоди*. У нас теж за плечима *довга екскурсія*. Думаю, що *піщані пагорби* часто снитимуться мені вночі."
          ]
        }
      },
      {
        formula: "część 2  ·  Cheops i Set",
        text: {
          pl: [
            "Wczoraj byliśmy u stóp *potężnej piramidy* Cheopsa, która jest grobowcem tego władcy Egiptu z III tysiąclecia p.n.e. Wspominałem Wam już o Ozyrysie i jego bracie Secie.",
            "Przewodnik opowiadał nam, że według *starożytnego przekazu* Ozyrys był *najstarszym synem* bogini nieba i władcą Egiptu. Jego *młodszy brat* – *zły, zazdrosny i podstępny* Set – uknuł spisek. Chciał zabić Ozyrysa i zająć jego miejsce. Wydał *wielką ucztę* i przygotował *piękną trumnę*. Każdy z gości miał ją „wypróbować”. Kiedy Ozyrys ułożył się w trumnie, wieko się zatrzasnęło. Szybko zabito je gwoździami. Trumnę z *nieszczęsnym bogiem* wrzucono do Nilu."
          ],
          ua: [
            "Учора ми були біля підніжжя *могутньої піраміди* Хеопса — гробниці цього володаря Єгипту з III тисячоліття до н. е. Я вже згадував вам про Осіріса і його брата Сета.",
            "Гід розповідав, що за *стародавнім переказом* Осіріс був *найстаршим сином* богині неба і володарем Єгипту. Його *молодший брат* — *злий, заздрісний і підступний* Сет — замислив змову. Хотів убити Осіріса і зайняти його місце. Зробив *велику учту* і приготував *гарну труну*. Кожен гість мав її «випробувати». Коли Осіріс ліг у труну, віко зачинилось. Труну з *нещасним богом* кинули в Ніл."
          ]
        }
      },
      {
        formula: "część 3  ·  Izyda",
        text: {
          pl: [
            "Jednak *wierna żona* Ozyrysa, Izyda, pokrzyżowała plany spiskowców. Dzięki *magicznym zdolnościom* przywróciła mężowi życie. Ozyrys został bogiem zaświatów, królem i *najwyższym sędzią* zmarłych. Przedstawiano go jako mumię o *czarnej* lub *zielonej twarzy* z *wąską bródką*. Na głowie miał *wysoką koronę* ze strusimi piórami, a w rękach — symbole panowania. Ten bóg dawał ludziom nadzieję na *wieczne życie* po śmierci.",
            "Myślę, że ta historia Was zainteresowała. Muszę już kończyć, bo jeszcze dziś wracamy do Kairu.",
            "Pozdrowienia",
            "Wiktor"
          ],
          ua: [
            "Але *вірна дружина* Осіріса, Ісіда, зірвала плани змовників. Завдяки *магічним здібностям* повернула чоловікові життя. Осіріс став богом потойбіччя, царем і *найвищим суддею* померлих. Його зображали як мумію з *чорним* або *зеленим обличчям* і *вузькою борідкою*. На голові мав *високу корону* зі страусиним пір’ям, у руках — символи влади. Цей бог давав людям надію на *вічне життя* після смерті.",
            "Думаю, ця історія вас зацікавила. Мушу вже кінчати, бо ще сьогодні повертаємось до Каїра.",
            "Привітання",
            "Віктор"
          ]
        }
      }
    ],
    task: {
      id: "t36-s05-email",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO jest w e-mailu Wiktora? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО є в e-mail Віктора? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Klasa jest w Gizie; turysta opowiadał o niezwykłych przygodach.", ua: "Клас у Гізі; турист розповідав про незвичайні пригоди." } },
        { id: "b", label: { pl: "Set wydał wielką ucztę i przygotował piękną trumnę.", ua: "Сет зробив велику учту і приготував гарну труну." } },
        { id: "c", label: { pl: "Helios i Faeton pędzą rydwanem po niebie (to lekcja 27).", ua: "Геліос і Фаетон мчать колісницею небом (це урок 27)." } },
        { id: "d", label: { pl: "Izyda przywróciła Ozyrysowi życie; Wiktor wraca do Kairu.", ua: "Ісіда повернула Осірісові життя; Віктор повертається до Каїра." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czytaj trzy części. Czy w tym liście jest Helios?",
        ua: "Читай три частини. Чи є в цьому листі Геліос?"
      },
      explanation: {
        pl: "Giza, Set, uczta, Izyda, Kair — tak. Helios — inna lekcja.",
        ua: "Гіза, Сет, учта, Ісіда, Каїр — так. Геліос — інший урок."
      }
    }
  },
  {
    type: "vocabulary",
    heading: { pl: "Zad. 1a · przymiotnik i wyraz określany", ua: "Завд. 1а · прикметник і означуване слово" },
    formula: "s. 69  ·  tabela",
    promptPlace: "before",
    prompt: {
      pl: "Wpisz do tabeli przymiotniki z e-maila *wraz z określanymi przez nie wyrazami*. Przykład z podręcznika: *niezwykłych* | *przygodach*. Pytanie: *jakich* przygodach?",
      ua: "Впиши в таблицю прикметники з e-mail *разом зі словами, які вони означають*. Приклад з підручника: *niezwykłych* | *przygodach*. Питання: *яких* пригодах?"
    },
    rows: [
      { pl: "niezwykłych → przygodach", ua: "niezwykłych → przygodach (яких пригодах?)" },
      { pl: "długą → wycieczkę", ua: "długą → wycieczkę (яку екскурсію?)" },
      { pl: "piaszczyste → wzniesienia", ua: "piaszczyste → wzniesienia (які пагорби?)" },
      { pl: "potężnej → piramidy", ua: "potężnej → piramidy (якої піраміди?)" },
      { pl: "wielką → ucztę", ua: "wielką → ucztę (яку учту?)" },
      { pl: "wierna → żona", ua: "wierna → żona (яка дружина?)" }
    ],
    task: {
      id: "t36-s06-pary",
      type: "single-choice",
      question: {
        pl: "Która para z e-maila jest NA PEWNO poprawna (przymiotnik | wyraz określany)?",
        ua: "Яка пара з e-mail НАПЕВНО правильна (прикметник | означуване слово)?"
      },
      options: [
        { id: "a", label: { pl: "niezwykłych | przygodach", ua: "niezwykłych | przygodach" } },
        { id: "b", label: { pl: "niezwykłych | Wiktor", ua: "niezwykłych | Wiktor" } },
        { id: "c", label: { pl: "statek | przygodach", ua: "statek | przygodach" } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj w pierwszym akapicie: opowiadał o *niezwykłych* …?",
        ua: "Шукай у першому абзаці: розповідав про *niezwykłych* …?"
      },
      explanation: {
        pl: "Przykład z s. 69: *niezwykłych przygodach*. Wiktor i statek nie są tu określane tym przymiotnikiem.",
        ua: "Приклад зі с. 69: *niezwykłych przygodach*. Віктор і корабель тут цим прикметником не означені."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 1b · po co przymiotnik?", ua: "Завд. 1б · навіщо прикметник?" },
    formula: "s. 69",
    promptPlace: "before",
    prompt: {
      pl: "Dwa pytania podręcznika. 1. *Którą część mowy określa przymiotnik?* 2. *Jakich informacji dostarczają przymiotniki znajdujące się w tekście?* Odpowiedź krótka: określa *rzeczownik*; daje cechy (jaki jest człowiek, rzecz, zjawisko).",
      ua: "Два питання підручника. 1. *Яку частину мови означає прикметник?* 2. *Яку інформацію дають прикметники в тексті?* Коротка відповідь: означає *іменник*; дає ознаки (яка людина, річ, явище)."
    },
    items: [
      { pl: "Określa *rzeczownik* (przygody, piramida, uczta, żona…).", ua: "Означає *іменник* (пригоди, піраміда, учта, дружина…)." },
      { pl: "Informacje: wielkość (*potężnej*), charakter (*zły, wierna*), wygląd (*wąską bródką*), czas (*starożytnego*).", ua: "Інформація: розмір (*potężnej*), характер (*zły, wierna*), вигляд (*wąską bródką*), час (*starożytnego*)." }
    ],
    task: {
      id: "t36-s07-po-co",
      type: "single-choice",
      question: {
        pl: "Która odpowiedź zgadza się z zad. 1b?",
        ua: "Яка відповідь збігається із завд. 1б?"
      },
      options: [
        { id: "a", label: { pl: "Przymiotnik określa rzeczownik i podaje cechy (wielkość, charakter, wygląd).", ua: "Прикметник означає іменник і дає ознаки (розмір, характер, вигляд)." } },
        { id: "b", label: { pl: "Przymiotnik określa czasownik i mówi, co kto robi.", ua: "Прикметник означає дієслово і каже, що хто робить." } },
        { id: "c", label: { pl: "Przymiotnik odpowiada na pytanie ile? i liczy osoby.", ua: "Прикметник відповідає на питання ile? і рахує осіб." } }
      ],
      answer: "a",
      hint: {
        pl: "*Ile?* to liczebnik. *Co robi?* — czasownik. Co zostaje?",
        ua: "*Ile?* — числівник. *Що робить?* — дієслово. Що лишається?"
      },
      explanation: {
        pl: "Określa rzeczownik. Informacje = cechy. Nie czasownik i nie liczebnik.",
        ua: "Означає іменник. Інформація = ознаки. Не дієслово і не числівник."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 2 · Ozyrys, Izyda, uczta", ua: "Завд. 2 · Осіріс, Ісіда, учта" },
    formula: "s. 70",
    promptPlace: "before",
    prompt: {
      pl: "Z opowieści o dwóch braciach podaj jak najwięcej przymiotników określających wyrazy *Ozyrys*, *Izyda*, *uczta*. W zeszycie trzy kolumny. Potem klucz.",
      ua: "З оповіді про двох братів подай якомога більше прикметників до слів *Ozyrys*, *Izyda*, *uczta*. У зошиті три колонки. Потім ключ."
    },
    items: [
      { pl: "Ozyrys: *najstarszy* (syn), *nieszczęsny* (bóg); twarz *czarna* / *zielona*.", ua: "Осіріс: *найстарший* (син), *нещасний* (бог); обличчя *чорне* / *зелене*." },
      { pl: "Izyda: *wierna* (żona); *magiczne* zdolności (określają zdolności, nie samo imię).", ua: "Ісіда: *вірна* (дружина); *магічні* здібності (означають здібності, не саме ім’я)." },
      { pl: "uczta: *wielka*. (Set: *zły, zazdrosny, podstępny* — to brat, nie uczta.)", ua: "учта: *велика*. (Сет: *злий, заздрісний, підступний* — це брат, не учта.)" }
    ],
    task: {
      id: "t36-s08-trzy",
      type: "multiple-choice",
      question: {
        pl: "Które zestawienia NA PEWNO pasują do zad. 2? Zaznacz wszystkie pewne.",
        ua: "Які пари НАПЕВНО пасують до завд. 2? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Ozyrys: najstarszy, nieszczęsny", ua: "Осіріс: najstarszy, nieszczęsny" } },
        { id: "b", label: { pl: "Izyda: wierna", ua: "Ісіда: wierna" } },
        { id: "c", label: { pl: "uczta: wielka", ua: "учта: wielka" } },
        { id: "d", label: { pl: "uczta: zły, zazdrosny, podstępny (to Set)", ua: "учта: zły, zazdrosny, podstępny (це Сет)" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*Zły, zazdrosny, podstępny* stoi przy *Set*. Które słowo to uczta?",
        ua: "*Zły, zazdrosny, podstępny* стоїть біля *Set*. Яке слово — учта?"
      },
      explanation: {
        pl: "Ozyrys: najstarszy, nieszczęsny. Izyda: wierna. Uczta: wielka. Set odpada z kolumny *uczta*.",
        ua: "Осіріс: najstarszy, nieszczęsny. Ісіда: wierna. Учта: wielka. Сет не в колонці *uczta*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Związek zgody", ua: "Зв’язок узгодження" },
    formula: "nowe w kl. 5",
    promptPlace: "before",
    prompt: {
      pl: "Przymiotnik *dostosowuje się* do rzeczownika: ten sam *rodzaj*, ta sama *liczba*, ten sam *przypadek*. To *związek zgody*. Most: українська *узгодження*. Przykład z tabeli s. 70: *wielka uczta*. Celownik, liczba pojedyncza → *wielkiej uczcie* (komu? czemu?). Jutro odmienisz całą siódemkę. Dziś czujesz zasadę.",
      ua: "Прикметник *підлаштовується* під іменник: той самий *рід*, те саме *число*, той самий *відмінок*. Це *зв’язок узгодження*. Міст: українська *узгодження*. Приклад з таблиці с. 70: *wielka uczta*. Давальний, однина → *wielkiej uczcie* (кому? чому?). Завтра відміниш усю сімку. Сьогодні ловиш принцип."
    },
    items: [
      { pl: "*wielka uczta* — M. lp. r.ż. (jaka uczta?)", ua: "*wielka uczta* — Н. одн. ж. р. (яка учта?)" },
      { pl: "*wielkiej uczcie* — C. lp. r.ż. (jakiej uczcie?)", ua: "*wielkiej uczcie* — Д. одн. ж. р. (якій учті?)" },
      { pl: "Nie mówimy *wielki uczta* ani *wielką uczcie* — forma musi *iść w parze*.", ua: "Не кажемо *wielki uczta* і не *wielką uczcie* — форма має *йти парою*." }
    ],
    task: {
      id: "t36-s09-zgoda",
      type: "single-choice",
      question: {
        pl: "Celownik, liczba pojedyncza: która forma pary *wielka uczta* jest zgodna?",
        ua: "Давальний, однина: яка форма пари *wielka uczta* узгоджена?"
      },
      options: [
        { id: "a", label: { pl: "wielkiej uczcie", ua: "wielkiej uczcie" } },
        { id: "b", label: { pl: "wielki uczta", ua: "wielki uczta" } },
        { id: "c", label: { pl: "wielką uczcie", ua: "wielką uczcie" } }
      ],
      answer: "a",
      hint: {
        pl: "Komu? czemu? *uczcie*. Jaka końcówka przymiotnika żeńskiego w celowniku lp.?",
        ua: "Кому? чому? *uczcie*. Яке закінчення жіночого прикметника в давальному однини?"
      },
      explanation: {
        pl: "Zgoda: *wielkiej uczcie*. *Wielki* to rodzaj męski. *Wielką* to biernik, nie celownik.",
        ua: "Узгодження: *wielkiej uczcie*. *Wielki* — чоловічий рід. *Wielką* — знахідний, не давальний."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Mała litera · pułapka", ua: "Мала літера · пастка" },
    formula: "zasada  ·  nie ramka s. 69",
    promptPlace: "before",
    prompt: {
      pl: "W *tym* podręczniku na s. 69 *nie ma* ramki ortograficznej — ale zasada wraca przy pisowni i łapie uczniów z Ukrainy. *Przymiotniki utworzone od nazw własnych piszemy małą literą.* Polska → *polski* (nie *Polski*). Egipt → *egipski*. Warszawa → *warszawski*. W e-mailu: *władcy Egiptu*, ale *egipski bóg*.",
      ua: "У *цьому* підручнику на с. 69 *немає* орфографічної рамки — але правило повертається і ловить учнів з України. *Прикметники від власних назв пишемо з малої літери.* Polska → *polski* (не *Polski*). Egipt → *egipski*. Warszawa → *warszawski*. В e-mail: *władcy Egiptu*, але *egipski bóg*."
    },
    items: [
      { pl: "Polska → polski  ·  Kraków → krakowski  ·  Europa → europejski", ua: "Polska → polski  ·  Kraków → krakowski  ·  Europa → europejski" },
      { pl: "Rzeczownik własny zostaje z wielkiej: *Egipt, Giza, Nil, Wiktor*.", ua: "Власний іменник лишається з великої: *Egipt, Giza, Nil, Wiktor*." }
    ],
    task: {
      id: "t36-s10-mala",
      type: "true-false",
      question: {
        pl: "Czy przymiotnik *europejski* piszemy małą literą?",
        ua: "Чи прикметник *europejski* пишемо з малої літери?"
      },
      answer: true,
      hint: {
        pl: "Od nazwy *Europa*. Przymiotnik czy nazwa państwa?",
        ua: "Від назви *Europa*. Прикметник чи назва держави?"
      },
      explanation: {
        pl: "Tak. *europejski, polski, egipski* — małą. *Europa, Polska, Egipt* — wielką.",
        ua: "Так. *europejski, polski, egipski* — з малої. *Europa, Polska, Egipt* — з великої."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 69  ·  lekcja 36",
    promptPlace: "before",
    prompt: {
      pl: "Szybki quiz i karta. Nie ma tu pełnej tabeli odmiany ani zadania 5 ze s. 71 — to lekcja 37. W zeszycie: pigułka + 6 par z e-maila + *wielkiej uczcie*.",
      ua: "Швидкий квіз і картка. Тут немає повної таблиці відміни і завдання 5 зі с. 71 — це урок 37. У зошиті: пігулка + 6 пар з e-mail + *wielkiej uczcie*."
    },
    items: [
      { pl: "Przymiotnik: cechy; pytania *jaki? jaka? jakie?*; określa rzeczownik.", ua: "Прикметник: ознаки; питання *jaki? jaka? jakie?*; означає іменник." },
      { pl: "Związek zgody: rodzaj + liczba + przypadek razem.", ua: "Зв’язок узгодження: рід + число + відмінок разом." },
      { pl: "Nowe i trudne: *dobrzy bracia* (jutro tabela).", ua: "Нове і складне: *dobrzy bracia* (завтра таблиця)." },
      { pl: "Małą: *polski, egipski, europejski*.", ua: "З малої: *polski, egipski, europejski*." }
    ],
    task: {
      id: "t36-s11-karta",
      type: "true-false",
      question: {
        pl: "Czy przymiotnik odmienia się przez osoby (jak czasownik: ja czytam, ty czytasz)?",
        ua: "Чи прикметник відмінюється за особами (як дієслово: ja czytam, ty czytasz)?"
      },
      answer: false,
      hint: {
        pl: "Osoby: 1., 2., 3. — to czasownik. Przymiotnik: przypadki, liczby, rodzaje.",
        ua: "Особи: 1., 2., 3. — це дієслово. Прикметник: відмінки, числа, роди."
      },
      explanation: {
        pl: "Fałsz. Przymiotnik *nie* odmienia się przez osoby. Odmienia się przez przypadki, liczby i rodzaje. *Ile?* to liczebnik — też nie pytanie przymiotnika.",
        ua: "Хиба. Прикметник *не* змінюється за особами. Змінюється за відмінками, числами і родами. *Ile?* — числівник, теж не питання прикметника."
      }
    }
  }
] };
