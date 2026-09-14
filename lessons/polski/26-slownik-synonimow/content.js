function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_KOM = "Styl: komiks podręcznikowy GWO klasa 5, tusz i akwarela. Zero napisów na kadrze, zero znaku wodnego. PNG.";
var IMG_STYLE_SCH = "Styl: infografika szkolna, etykiety po polsku. Zero znaku wodnego. PNG 16:9.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 56–57  ·  Pracujemy ze słownikami  ·  synonimy",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec. Polski pierwszy. Włącz 🇺🇦 — pod akapitem tłumaczenie. Dziś *nie* piszemy listu Amfitryty i *nie* odmieniamy rzeczownika. Dziś: komiks, *wyrazy bliskoznaczne* i *słownik synonimów*.",
        ua: "Це перевірка наприкінці. Польська перша. Увімкни 🇺🇦. Сьогодні *не* пишемо листа Амфітріти і *не* відмінюємо іменник. Сьогодні: комікс, *синоніми* і *словник*."
      },
      items: [
        { pl: "opowiem treść *komiksu* i znajdę wyrazy o pogodzie;", ua: "розкажу зміст *коміксу* і знайду слова про погоду;" },
        { pl: "powiem, *co to synonim* i *po co* słownik;", ua: "скажу, *що таке синонім* і *навіщо* словник;" },
        { pl: "omówię *budowę hasła* (hasło, znaczenia, indeks);", ua: "поясню *будову словникової статті* (заголовок, значення, індекс);" },
        { pl: "zamienię nadużywane słowa (*dobry, fajny, robić*) — z poprawną *formą*.", ua: "заміню слова, якими зловживають (*dobry, fajny, robić*) — з правильною *формою*." }
      ],
      task: {
        id: "t26-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Relacjonować komiks i wskazać wyrazy nazywające pogodę.", ua: "Переказати комікс і вказати слова про погоду." } },
          { id: "b", label: { pl: "Korzystać ze słownika synonimów i omówić budowę hasła.", ua: "Користуватися словником синонімів і пояснити будову статті." } },
          { id: "c", label: { pl: "Napisać cały list Amfitryty do Okeanosa.", ua: "Написати весь лист Амфітріти до Океана." } },
          { id: "d", label: { pl: "Zastąpić powtarzające się wyrazy bliskoznacznymi (i dopasować formę).", ua: "Замінити повтори синонімами (і дібрати форму)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "List Amfitryty był na lekcji 25. Dziś s. 56–57.",
          ua: "Лист Амфітріти був на уроці 25. Сьогодні с. 56–57."
        },
        explanation: {
          pl: "Komiks, synonimy, hasło, zamiana wyrazów. Posejdon — wczoraj.",
          ua: "Комікс, синоніми, стаття, заміна слів. Посейдон — учора."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "„Pracujemy ze słownikami”", ua: "«Працюємо зі словниками»" },
      formula: "s. 56  ·  dział: Dziwny ten świat",
      promptPlace: "before",
      prompt: {
        pl: "To *nie* pałac Posejdona i nie e-mail Wiktora z Gizy. Dział podręcznika: *Pracujemy ze słownikami*. Temat: *Słownik wyrazów bliskoznacznych*.",
        ua: "Це *не* палац Посейдона і не e-mail Віктора з Гізи. Розділ: *Pracujemy ze słownikami*. Тема: *словник синонімів*."
      },
      text: {
        pl: [
          "Najpierw *komiks* (pogoda w Polsce i na Teneryfie). Potem ramka: *co to synonimy*. Na końcu zadania: SMS ze słowem *dobry* i list ze słowem *fajny*.",
          "Program dodaje też *wyrazy przeciwstawne* (antonimy) — w komiksie plucha stoi naprzeciw skwaru."
        ],
        ua: [
          "Спочатку *комікс* (погода в Польщі і на Тенерифе). Потім рамка: *що таке синоніми*. Наприкінці: SMS зі словом *dobry* і лист зі словом *fajny*.",
          "Програма додає *антоніми* — у коміксі плюха стоїть навпроти спеки."
        ]
      },
      task: {
        id: "t26-s02-temat",
        type: "single-choice",
        question: {
          pl: "Czego dotyczy *ta* lekcja?",
          ua: "Чого стосується *цей* урок?"
        },
        options: [
          { id: "a", label: { pl: "Słownika wyrazów bliskoznacznych i zamiany powtórzeń.", ua: "Словника синонімів і заміни повторів." } },
          { id: "b", label: { pl: "Odmiany rzeczownika przez 7 przypadków.", ua: "Відмінювання іменника через 7 відмінків." } },
          { id: "c", label: { pl: "Listu Amfitryty i makiety pałacu.", ua: "Листа Амфітріти і макета палацу." } }
        ],
        answer: "a",
        hint: {
          pl: "Tytuł na s. 56 jest w cudzysłowie.",
          ua: "Назва на с. 56 у лапках."
        },
        explanation: {
          pl: "Słownik synonimów. Odmiana — T29–T31. Amfitryta — T25.",
          ua: "Словник синонімів. Відмінювання — T29–T31. Амфітріта — T25."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Komiks · z pluchy na skwar", ua: "Комікс · з плюхи на спеку" },
      formula: "s. 56  ·  relacja",
      visual: vizGh("t26-komiks.png", {
        alt: {
          pl: "Komiks: deszcz na lotnisku, samolot, upał na Teneryfie",
          ua: "Комікс: дощ в аеропорту, літак, спека на Тенерифе"
        },
        title: { pl: "Slajd · komiks", ua: "Слайд · комікс" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: lotnisko w deszczu, kabina samolotu, palmy i skwar. Zero liter.",
          ua: "Комікс без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Opowiedz, *kto* leci, *skąd* i *dokąd*, *jaka* jest pogoda na starcie i na wyspie. Dymki masz poniżej — włącz 🇺🇦.",
        ua: "Розкажи, *хто* летить, *звідки* і *куди*, *яка* погода на старті і на острові. Хмарки — нижче."
      },
      text: {
        pl: [
          "*Ewcia* (lotnisko, jesień): „Ale *plucha*! I ten *wiatr*. Przewiało mnie i całe przemokłam. *Chlupie* mi w butach. Obym się nie rozchorowała…”",
          "*Stewardesa*: „Ewciu, nic się nie martw. Za parę godzin będziemy się grzać w pięknym *słońcu*. Zapomniesz o jesiennej *plusze* i *chlapie*.”",
          "*Kapitan*: „Lot na *Teneryfę* będzie trwał pięć godzin. Nad wyspą niebo jest *bezchmurne*, temperatura wynosi *30 stopni* i nic nie wskazuje na to, by ta *piękna pogoda* miała się zmienić. Życzę państwu przyjemnego lotu.”",
          "*Ewcia* (wyspa): „Ale *skwar*. *Upał* nie do wytrzymania. Chyba się ugotuję. Mirka, mam nadzieję, że zarezerwowałaś pokój z klimatyzacją.”",
          "*Mirka*: „Sądziłam, że lubisz taką *spiekotę*.”"
        ],
        ua: [
          "*Евця* (аеропорт, осінь): «Яка *плюха*! І цей *вітер*. Продуло і я геть промокла. *Хлюпає* в черевиках. Аби не захворіти…»",
          "*Стюардеса*: «Евцю, не хвилюйся. За кілька годин грітимемось у гарному *сонці*. Забудеш осінню *плюху* і *хляпу*.»",
          "*Капітан*: «Рейс на *Тенерифе* — п’ять годин. Над островом небо *безхмарне*, *30 градусів*, *гарна погода* не зміниться. Приємного польоту.»",
          "*Евця* (острів): «Яка *спека*. *Упал* не до витримання. Зварюся. Мірко, сподіваюсь, ти забронювала номер із кондиціонером.»",
          "*Мірка*: «Я думала, що тобі подобається така *пекельна спека*.»"
        ]
      },
      task: {
        id: "t26-s03-komiks",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO dzieje się w komiksie? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО діється в коміксі? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ewcia i Mirka lecą z deszczowej Polski na Teneryfę.", ua: "Евця і Мірка летять із дощової Польщі на Тенерифе." } },
          { id: "b", label: { pl: "Na wyspie jest bezchmurnie, 30 stopni, skwar.", ua: "На острові безхмарно, 30 градусів, спека." } },
          { id: "c", label: { pl: "Amfitryta pisze list do Okeanosa z pałacu.", ua: "Амфітріта пише лист до Океана з палацу." } },
          { id: "d", label: { pl: "Ewcia na wyspie narzeka na upał; Mirka myśli, że lubi spiekotę.", ua: "Евця на острові скаржиться на упал; Мірка думає, що їй подобається спека." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Dwie pogody: jesień przy wylocie i tropiki.",
          ua: "Дві погоди: осінь при вильоті і тропіки."
        },
        explanation: {
          pl: "Plucha → Teneryfa, skwar. Posejdon tu nie leci.",
          ua: "Плюха → Тенерифе, спека. Посейдон тут не летить."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 1a · wyrazy o pogodzie", ua: "Завд. 1а · слова про погоду" },
      formula: "s. 56",
      visual: vizGh("t26-pogoda.png", {
        alt: {
          pl: "Po lewej deszcz i wiatr, po prawej palmy i skwar",
          ua: "Ліворуч дощ і вітер, праворуч пальми і спека"
        },
        title: { pl: "Slajd · dwie pogody", ua: "Слайд · дві погоди" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: split rain vs Tenerife sun. Zero liter.",
          ua: "Дві погоди. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj wypowiedzi bohaterek i znajdź wyrazy nazywające pogodę: *w miejscu wylotu* oraz *na Teneryfie*.",
        ua: "Прочитай репліки і знайди слова про погоду: *у місці вильоту* і *на Тенерифе*."
      },
      text: {
        pl: [
          "*Wylot* (jesień): plucha, wiatr, przemokłam, chlupie w butach, jesienna plucha / chlapa.",
          "*Teneryfa*: słońce, bezchmurne niebo, 30 stopni, piękna pogoda, skwar, upał, spiekota."
        ],
        ua: [
          "*Виліт* (осінь): плюха, вітер, промокла, хлюпає в черевиках, осіння хляпа.",
          "*Тенерифе*: сонце, безхмарне небо, 30 градусів, гарна погода, спека, упал, пекельна спека."
        ]
      },
      task: {
        id: "t26-s04-pogoda",
        type: "multiple-choice",
        question: {
          pl: "Które wyrazy NA PEWNO nazywają pogodę *z tego* komiksu? Zaznacz wszystkie pewne.",
          ua: "Які слова НАПЕВНО називають погоду *з цього* коміксу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "plucha, wiatr, chlapa — miejsce wylotu", ua: "плюха, вітер, хляпа — місце вильоту" } },
          { id: "b", label: { pl: "skwar, upał, spiekota, bezchmurne niebo — Teneryfa", ua: "спека, упал, пекельна спека, безхмарне небо — Тенерифе" } },
          { id: "c", label: { pl: "muł Nilu i piramida Cheopsa", ua: "мул Нілу і піраміда Хеопса" } },
          { id: "d", label: { pl: "piękne słońce, 30 stopni", ua: "гарне сонце, 30 градусів" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Bierz tylko dymki z s. 56, nie z Egiptu.",
          ua: "Бери лише хмарки з с. 56, не з Єгипту."
        },
        explanation: {
          pl: "Jesienna plucha kontra tropikalny skwar. Nil — lekcja 22.",
          ua: "Осіння плюха проти тропічної спеки. Ніл — урок 22."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 1b · zdania i przeciwieństwa", ua: "Завд. 1б · речення і протилежності" },
      formula: "s. 56  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Uzupełnij zdania. Program: wskaż też *wyrazy przeciwstawne* (antonimy) z komiksu.",
        ua: "Доповни речення. Програма: вкажи ще *антоніми* з коміксу."
      },
      text: {
        pl: [
          "*Przed wylotem panuje (jaka?)  ?.  pogoda, czyli jest (co?)  ?.  (co?)  ?.  (co?)  ?.*",
          "*W tropikach na T. panuje (jaka?)  ?.  pogoda, czyli jest (co?)  ?.  (co?)  ?.  (co?)  ?.*"
        ],
        ua: [
          "*Перед вильотом панує (яка?)  ?.  погода, тобто є (що?)  ?.  (що?)  ?.  (що?)  ?.*",
          "*У тропіках на Т. панує (яка?)  ?.  погода, тобто є (що?)  ?.  (що?)  ?.  (що?)  ?.*"
        ]
      },
      reveal: true,
      steps: [
        {
          formula: "KLUCZ EduMost  ·  nie jedyny",
          text: {
            pl: "Przed wylotem panuje *jesienna / deszczowa / plucha* pogoda, czyli jest *plucha, chlapa, wiatr*. W tropikach panuje *upalna / gorąca / słoneczna* pogoda, czyli jest *skwar, upał, spiekota*. Przeciwieństwa: *plucha ≠ skwar*, *chlapa ≠ słońce*, *przemokłam ≠ ugotuję się z upału*.",
            ua: "Перед вильотом — *осіння / дощова* погода: плюха, хляпа, вітер. У тропіках — *спекотна / сонячна*: спека, упал. Антоніми: *плюха ≠ спека*."
          }
        }
      ],
      task: {
        id: "t26-s05-zdania",
        type: "multiple-choice",
        question: {
          pl: "Które uzupełnienia i pary są z *tego* komiksu? Zaznacz wszystkie pewne.",
          ua: "Які доповнення і пари з *цього* коміксу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Przed wylotem: plucha / deszczowa pogoda — plucha, chlapa, wiatr.", ua: "Перед вильотом: плюха / дощова — плюха, хляпа, вітер." } },
          { id: "b", label: { pl: "W tropikach: upalna pogoda — skwar, upał, spiekota.", ua: "У тропіках: спекотна — спека, упал, пекельна спека." } },
          { id: "c", label: { pl: "Przed wylotem: bezchmurne 30 stopni i palmy.", ua: "Перед вильотом: безхмарні 30 градусів і пальми." } },
          { id: "d", label: { pl: "Przeciwieństwo: plucha ≠ skwar.", ua: "Протилежність: плюха ≠ спека." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Wylot = jesień. Teneryfa = tropiki. Co jest naprzeciw?",
          ua: "Виліт = осінь. Тенерифе = тропіки. Що навпроти?"
        },
        explanation: {
          pl: "Dwie pogody + antonimy. Palmy nie stoją przy wylocie.",
          ua: "Дві погоди + антоніми. Пальми не стоять при вильоті."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Co to są wyrazy bliskoznaczne?", ua: "Що таке близькі за значенням слова?" },
      formula: "s. 57  ·  ramka",
      promptPlace: "before",
      prompt: {
        pl: "Ramka z wykrzyknikiem. To definicja *z podręcznika* — nie z innego działu.",
        ua: "Рамка з знаком оклику. Це означення *з підручника*."
      },
      text: {
        pl: "**Wyrazy bliskoznaczne (synonimy)** mają te same lub podobne znaczenia, na przykład *podróż, wyjazd, wycieczka, wyprawa*. Różnią się zapisem i brzmieniem.",
        ua: "**Близькі за значенням слова (синоніми)** мають те саме або подібне значення, наприклад *podróż, wyjazd, wycieczka, wyprawa*. Відрізняються записом і звучанням."
      },
      items: [
        { pl: "Nie są tym samym wyrazem powtórzonym.", ua: "Це не те саме слово, повторене двічі." },
        { pl: "Do zeszytu: *dom – budynek, gmach, lokum*; *mówić – powiadać, rzec*; *ładny – piękny, śliczny*.", ua: "До зошита: *dom – budynek, gmach*; *mówić – powiadać, rzec*; *ładny – piękny, śliczny*." },
        { pl: "W komiksie: *skwar · upał · spiekota* oraz *plucha · chlapa*.", ua: "У коміксі: *skwar · upał · spiekota* і *plucha · chlapa*." }
      ],
      task: {
        id: "t26-s06-definicja",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest synonimem według ramki i komiksu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є синонімом за рамкою і коміксом? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "podróż · wyjazd · wycieczka · wyprawa", ua: "podróż · wyjazd · wycieczka · wyprawa" } },
          { id: "b", label: { pl: "skwar · upał · spiekota", ua: "skwar · upał · spiekota" } },
          { id: "c", label: { pl: "plucha i skwar — to ta sama pogoda", ua: "плюха і спека — та сама погода" } },
          { id: "d", label: { pl: "Synonimy różnią się zapisem, a znaczenie jest to samo lub podobne.", ua: "Синоніми різняться записом, а значення те саме або подібне." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Przykład z ramki: podróż… Co w komiksie jest *podobne*, a co *przeciwne*?",
          ua: "Приклад з рамки: podróż… Що в коміксі *подібне*, а що *протилежне*?"
        },
        explanation: {
          pl: "Podróż… i skwar/upał/spiekota = synonimy. Plucha ≠ skwar = antonimy.",
          ua: "Podróż… і skwar/upał/spiekota = синоніми. Плюха ≠ спека = антоніми."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Po co ten słownik?", ua: "Навіщо цей словник?" },
      formula: "s. 57  ·  program",
      promptPlace: "before",
      prompt: {
        pl: "Program: *wiesz, kiedy należy korzystać ze słownika*. Trzy powody — do zeszytu.",
        ua: "Програма: *знаєш, коли треба словник*. Три причини — у зошит."
      },
      items: [
        { pl: "*Unikanie powtórzeń.* Zamiast pięciu razy *fajny* / *powiedział* / *robić* — dobierasz zamiennik.", ua: "*Уникати повторів.* Замість п’яти разів *fajny* — добираєш замінник." },
        { pl: "*Precyzja.* *Duży pies* to za mało; czasem lepiej *ogromny* albo *potężny*.", ua: "*Точність.* *Duży pies* інколи слабке; краще *ogromny* чи *potężny*." },
        { pl: "*Bogatszy język.* Wypracowanie i wypowiedź ustna są ciekawsze dla odbiorcy.", ua: "*Багатша мова.* Твір і усна відповідь цікавіші для слухача." }
      ],
      task: {
        id: "t26-s07-po-co",
        type: "multiple-choice",
        question: {
          pl: "Kiedy NA PEWNO sięgasz po słownik synonimów? Zaznacz wszystkie pewne.",
          ua: "Коли НАПЕВНО береш словник синонімів? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Gdy w liście pięć razy stoi fajnie i tekst brzmi biednie.", ua: "Коли в листі п’ять разів fajnie і текст звучить бідно." } },
          { id: "b", label: { pl: "Gdy chcesz precyzyjniej nazwać pogodę albo jedzenie.", ua: "Коли хочеш точніше назвати погоду або їжу." } },
          { id: "c", label: { pl: "Gdy liczysz, ile ma 7 przypadków rzeczownik Nil.", ua: "Коли рахуєш, скільки відмінків у іменника Nil." } },
          { id: "d", label: { pl: "Gdy budujesz ciekawszą wypowiedź ustną lub pisemną.", ua: "Коли будуєш цікавіше усне чи писемне висловлювання." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Powtórzenia, precyzja, bogactwo. Nie odmiana.",
          ua: "Повтори, точність, багатство. Не відмінювання."
        },
        explanation: {
          pl: "Słownik synonimów nie zastępuje tabeli przypadków.",
          ua: "Словник синонімів не замінює таблиці відмінків."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Jak zbudowane jest hasło?", ua: "Як побудована словникова стаття?" },
      formula: "s. 57  ·  budowa",
      visual: vizGh("t26-haslo.png", {
        alt: {
          pl: "Schemat hasła: biegać, część mowy, synonimy, indeks",
          ua: "Схема статті: biegać, частина мови, синоніми, індекс"
        },
        title: { pl: "Slajd · hasło", ua: "Слайд · стаття" },
        prompt: {
          pl: IMG_STYLE_SCH + " IMAGE PROMPT: hasło biegać, synonimy, INDEKS → odesłanie.",
          ua: "Схема статті. Польські етикетки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Omów *budowę*. Szukamy słowa bazowego (*hasła*). Przy nim zamienniki, często podzielone według znaczeń.",
        ua: "Поясни *будову*. Шукаємо базове слово (*hasło*). Біля нього замінники, часто за значеннями."
      },
      text: {
        pl: [
          "Wyrazy o tym samym lub podobnym (synonimicznym) znaczeniu można odnaleźć w *słowniku wyrazów bliskoznacznych* (*słowniku synonimów*).",
          "Słowniki zawierają *alfabetyczny spis haseł*, a niektóre dodatkowo *indeks*, czyli spis wszystkich wyrazów podanych w słowniku. Jeśli szukasz synonimów danego słowa, odszukaj je w indeksie. Znajdziesz tam *odesłanie* do grupy we właściwej części słownika.",
          "Przykład hasła: *biegać*  czas.  *pędzić, gnać, lecieć, kłusować, galopować, pomykać*."
        ],
        ua: [
          "Слова з тим самим або подібним значенням шукаємо в *словнику синонімів*.",
          "Є *абетковий список гасел*, інколи ще *індекс* — список усіх слів. У індексі є *посилання* на групу в основній частині.",
          "Приклад: *biegać*  дієсл.  *pędzić, gnać, lecieć, kłusować, galopować, pomykać*."
        ]
      },
      task: {
        id: "t26-s08-haslo",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO należy do budowy słownika synonimów? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО належить до будови словника синонімів? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Hasło bazowe + synonimy (często w grupach znaczeń).", ua: "Базове гасло + синоніми (часто групами значень)." } },
          { id: "b", label: { pl: "Alfabetyczny spis haseł; czasem indeks z odesłaniem.", ua: "Абетковий список; інколи індекс із посиланням." } },
          { id: "c", label: { pl: "Mapa pałacu Posejdona i dach z muszli.", ua: "Мапа палацу Посейдона і дах із мушель." } },
          { id: "d", label: { pl: "Przy haśle bywa część mowy, np. czasownik.", ua: "Біля гасла буває частина мови, напр. дієслово." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Ramka s. 57: spis haseł i indeks. Co jest przy biegać?",
          ua: "Рамка с. 57: список гасел і індекс. Що біля biegać?"
        },
        explanation: {
          pl: "Hasło, synonimy, spis, indeks. Muszle — lekcja 24.",
          ua: "Гасло, синоніми, список, індекс. Мушлі — урок 24."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 2 · SMS i hasło „dobry”", ua: "Завд. 2 · SMS і гасло «dobry»" },
      formula: "s. 57  ·  forma zapisu",
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj SMS. Podaj wyrazy, którymi można zastąpić *dobry*. W razie wątpliwości — hasło. Uwaga na *formę*: dobry / dobre / dobrą.",
        ua: "Прочитай SMS. Добери замінники *dobry*. У разі сумніву — гасло. Увага на *форму*: dobry / dobre / dobrą."
      },
      text: {
        pl: [
          "*Kochane dzieci*  Co u Was? U nas wszystko w porządku. Odpoczywamy. Mamy *dobry* hotel, *dobre* jedzenie i *dobrą* pogodę.  Całuję, Mama",
          "Hasło (Wielki słownik… PWN, red. M. Bańko): *dobry* (taki, jak trzeba) ◄ nie byle jaki, nie lada, niepośledni, niegłupi pot., niekiepski pot., nielichy pot., niezły (okay, OK) pot., w porządku pot. […] cały, doskonały, miły, odpowiedni, optymalny, piątkowy, pierwszy, pozytywny, prawidłowy, skuteczny, *smaczny*, sprawny, trwały, wartościowy, *wspaniały*, wystarczający, zdrowy, znośny."
        ],
        ua: [
          "*Любі діти*  Як у вас? У нас усе гаразд. Відпочиваємо. Маємо *добрий* готель, *добру* їжу і *добру* погоду.  Цілую, Мама",
          "Гасло: *dobry* (такий, як треба) ◄ m.in. niezły, w porządku, *smaczny*, *wspaniały*…"
        ]
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t26-sms.png", {
            alt: {
              pl: "SMS od mamy: dobry hotel, dobre jedzenie, dobrą pogodę",
              ua: "SMS від мами: dobry hotel, dobre jedzenie, dobrą pogodę"
            },
            title: { pl: "Slajd · SMS", ua: "Слайд · SMS" },
            prompt: {
              pl: IMG_STYLE_SCH + " IMAGE PROMPT: telefon, SMS mamy z dobry / dobre / dobrą.",
              ua: "Телефон із SMS."
            }
          }),
          text: {
            pl: "Telefon mamy. Szukaj trzech form: *dobry, dobre, dobrą*.",
            ua: "Телефон мами. Шукай три форми: *dobry, dobre, dobrą*."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  forma!",
          text: {
            pl: "Hotel (*dobry* → męski): *wspaniały / niezły / odpowiedni hotel*. Jedzenie (*dobre* → nijaki): *smaczne / wspaniałe jedzenie*. Pogoda (*dobrą* → żeńska B.): *wspaniałą / piękną pogodę*. Nie wklejaj *dobry* do jedzenia.",
            ua: "Готель: *wspaniały hotel*. Їжа: *smaczne jedzenie* (не *dobry*). Погода: *wspaniałą pogodę*."
          }
        }
      ],
      task: {
        id: "t26-s09-sms",
        type: "multiple-choice",
        question: {
          pl: "Które zamiany SMS-a są poprawne *i* z hasła? Zaznacz wszystkie pewne.",
          ua: "Які заміни SMS правильні *і* з гасла? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "wspaniały hotel · smaczne jedzenie · wspaniałą pogodę", ua: "wspaniały hotel · smaczne jedzenie · wspaniałą pogodę" } },
          { id: "b", label: { pl: "dobry jedzenie · dobry pogodę (bez zmiany końcówki)", ua: "dobry jedzenie · dobry pogodę (без зміни закінчення)" } },
          { id: "c", label: { pl: "niezły hotel · odpowiednie jedzenie", ua: "niezły hotel · odpowiednie jedzenie" } },
          { id: "d", label: { pl: "szafirowy hotel i dach z muszli", ua: "сапфіровий готель і дах із мушель" } }
        ],
        answer: ["a", "c"],
        hint: {
          pl: "Hotel jaki? Jedzenie jakie? Pogodę jaką? Hasło jest na s. 57.",
          ua: "Готель який? Їжа яка? Погоду яку? Гасло на с. 57."
        },
        explanation: {
          pl: "a i c: synonimy + zgoda. b psuje formę. Muszle — inna lekcja.",
          ua: "a і c: синоніми + узгодження. b псує форму."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 3a · list bez „fajny”", ua: "Завд. 3а · лист без «fajny»" },
      formula: "s. 57",
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj list, który dzieci wysłały mamie. Powtarzające się *fajny / fajnie* zastąp bliskoznacznymi. Najpierw zeszyt.",
        ua: "Прочитай лист дітей до мами. Повтори *fajny / fajnie* замініть синонімами. Спочатку зошит."
      },
      text: {
        pl: [
          "Cześć, Mamo!",
          "Cieszymy się, że u Ciebie wszystko *fajnie*. U nas też jest *fajnie*, bo przyjechał dziadek Franek. Tata musiał wrócić na dwa dni do pracy, bo jakiś kolega się rozchorował. Chociaż wczoraj padało, spędziliśmy z dziadkiem bardzo *fajny* dzień. Byliśmy w starej kuźni, w której teraz jest *fajna* kręgielnia. Graliśmy prawie trzy godziny. Oczywiście ja wygrałem. Jutro też będzie *fajnie*, bo dziadek zabiera nas do kina.",
          "Pozdrawiamy  Wojtek z Kasią"
        ],
        ua: [
          "Привіт, Мамо!",
          "Раді, що в тебе все *fajnie*. У нас теж *fajnie*, бо приїхав дідусь Франек. Тато мусив повернутися на два дні на роботу. Хоч учора дощило, з дідусем був дуже *fajny* день. Були в старій кузні, де тепер *fajna* кегельбан. Грали майже три години. Завтра теж буде *fajnie* — дідусь везе в кіно.",
          "Вітаємо  Войтек і Кася"
        ]
      },
      reveal: true,
      steps: [
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyny",
          text: {
            pl: "wszystko *w porządku* / *świetnie*; u nas *wesoło* / *przyjemnie*; bardzo *udany* dzień; *nowoczesna / świetna* kręgielnia; jutro będzie *ciekawie* / *radośnie*. Każde miejsce — *inny* synonim, nie pięć razy to samo.",
            ua: "все *гаразд* / *чудово*; у нас *весело*; *вдалий* день; *сучасний* кегельбан; завтра *цікаво*. Кожне місце — *інший* синонім."
          }
        }
      ],
      task: {
        id: "t26-s10-fajny",
        type: "multiple-choice",
        question: {
          pl: "Która strategia NA PEWNO pasuje do zad. 3a? Zaznacz wszystkie pewne.",
          ua: "Яка стратегія НАПЕВНО пасує до завд. 3а? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Inny synonim w każdym miejscu: świetnie, wesoło, udany, nowoczesna…", ua: "Інший синонім у кожному місці: świetnie, wesoło, udany…" } },
          { id: "b", label: { pl: "Zostawić fajnie pięć razy — „tak mówimy”.", ua: "Лишити fajnie п’ять разів — «так кажемо»." } },
          { id: "c", label: { pl: "Wkleić skwar, spiekota i dach z muszli do listu o kręgielni.", ua: "Вклеїти спеку і дах із мушель у лист про кегельбан." } },
          { id: "d", label: { pl: "Dobierać formę: fajny dzień → udany dzień; fajna kręgielnia → wspaniała kręgielnia.", ua: "Дібрати форму: fajny dzień → udany dzień; fajna kręgielnia → wspaniała kręgielnia." } }
        ],
        answer: ["a", "d"],
        hint: {
          pl: "Cel lekcji: unikać powtórzeń i pilnować końcówki.",
          ua: "Мета уроку: уникати повторів і пильнувати закінчення."
        },
        explanation: {
          pl: "Różne synonimy + zgoda. Nie kopiuj pogody z komiksu do kręgielni.",
          ua: "Різні синоніми + узгодження. Не копіюй погоду з коміксу в кегельбан."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 3b · poprawki i „robić”", ua: "Завд. 3б · правки і «robić»" },
      formula: "s. 57  ·  + powtórka",
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj list *po* zmianie. Jeśli trzeba — popraw. Potem zamień *robić* — to częsta pułapka klasy 5.",
        ua: "Прочитай лист *після* зміни. Якщо треба — виправ. Потім замініть *robić*."
      },
      text: {
        pl: [
          "Po zamianie sprawdź: czy zdanie nadal jest po polsku? Czy przymiotnik zgadza się z rzeczownikiem? Czy nie wkleiłeś słowa z innego znaczenia?",
          "*Robić zdjęcia* → *fotografować*.  *Robić sweter* → *dziergać / robić na drutach*.  *Robić zadanie* → *odrabiać / rozwiązywać*.  *Robić porządki* → *sprzątać*."
        ],
        ua: [
          "Після заміни: чи речення ще польське? Чи прикметник узгоджений? Чи не вклеєно слово з іншого значення?",
          "*Robić zdjęcia* → *fotografować*.  *Robić sweter* → *dziergać*.  *Robić zadanie* → *odrabiać*.  *Robić porządki* → *sprzątać*."
        ]
      },
      reveal: true,
      steps: [
        {
          formula: "KLUCZ  ·  robić",
          text: {
            pl: "Jedno *robić* nie pasuje do wszystkiego. Słownik (albo głowa) dobiera *precyzyjny* czasownik. To ten sam nawyk co przy *fajny* i *dobry*.",
            ua: "Одне *robić* не пасує до всього. Словник добирає *точне* дієслово. Той самий навик, що з *fajny* і *dobry*."
          }
        }
      ],
      task: {
        id: "t26-s11-robic",
        type: "multiple-choice",
        question: {
          pl: "Które zamiany *robić* są precyzyjne? Zaznacz wszystkie pewne.",
          ua: "Які заміни *robić* точні? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "robić zdjęcia → fotografować", ua: "robić zdjęcia → fotografować" } },
          { id: "b", label: { pl: "robić porządki → sprzątać", ua: "robić porządki → sprzątać" } },
          { id: "c", label: { pl: "robić zadanie → pędzić / galopować", ua: "robić zadanie → pędzić / galopować" } },
          { id: "d", label: { pl: "robić sweter → dziergać (na drutach)", ua: "robić sweter → dziergać (на спицях)" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pędzić to synonim biegać, nie odrabiania lekcji.",
          ua: "Pędzić — синонім biegać, не уроків."
        },
        explanation: {
          pl: "Fotografować, sprzątać, dziergać. Galopować zostaje przy biegać.",
          ua: "Fotografować, sprzątać, dziergać. Galopować лишається при biegać."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      formula: "s. 56–57",
      promptPlace: "before",
      prompt: {
        pl: "Zeszyt. Krótko. Bez Posejdona i bez 7 przypadków.",
        ua: "Зошит. Коротко. Без Посейдона і без 7 відмінків."
      },
      items: [
        { pl: "Komiks: jesienna *plucha* przy wylocie → *skwar* na Teneryfie. To też *antonimy*.", ua: "Комікс: осіння *плюха* → *спека* на Тенерифе. Це ще й *антоніми*." },
        { pl: "Synonimy = to samo / podobne znaczenie, inny zapis. Przykład ramki: *podróż, wyjazd, wycieczka, wyprawa*.", ua: "Синоніми = те саме / подібне значення, інший запис." },
        { pl: "Słownik: *hasło*, grupy znaczeń, *indeks* z odesłaniem. Po co: powtórzenia, precyzja, bogatszy język.", ua: "Словник: *гасло*, групи, *індекс*. Навіщо: повтори, точність, багатша мова." },
        { pl: "Zamiana: *dobry/dobre/dobrą*, *fajny/fajnie*, *robić* — zawsze sprawdź *formę*.", ua: "Заміна: *dobry*, *fajny*, *robić* — завжди перевір *форму*." }
      ],
      task: {
        id: "t26-s12-nota",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz lekcję 26?",
          ua: "Яка нотатка показує, що вмієш урок 26?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Komiks o pogodzie; synonim ≠ antonim; hasło i indeks; zamieniam dobry, fajny, robić z formą.",
              ua: "Комікс про погоду; синонім ≠ антонім; гасло й індекс; замінюю dobry, fajny, robić з формою."
            }
          },
          { id: "b", label: { pl: "Tylko list Amfitryty i makieta z muszli.", ua: "Лише лист Амфітріти і макет із мушель." } },
          { id: "c", label: { pl: "Tylko 7 przypadków rzeczownika Nil.", ua: "Лише 7 відмінків іменника Nil." } }
        ],
        answer: "a",
        hint: {
          pl: "Temat 26 w planie: pracujemy ze słownikiem wyrazów bliskoznacznych.",
          ua: "Тема 26: працюємо зі словником синонімів."
        },
        explanation: {
          pl: "26 = komiks + synonimy + hasło + zamiana. Amfitryta 25. Odmiana 29–31.",
          ua: "26 = комікс + синоніми + стаття + заміна. Амфітріта 25. Відмінювання 29–31."
        }
      }
    }
  ]
};
