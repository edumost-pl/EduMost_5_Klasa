function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    // S01
    {
      type: "goal",
      heading: { pl: "Cele lekcji", ua: "Цілі уроку" },
      formula: "ortografia  ·  wymiana  ·  s. 16–17",
      promptPlace: "before",
      prompt: {
        pl: "Dziś najpierw CZYTAMY komiks, potem SZUKAMY par wyrazów. Ustnie mówimy uzasadnienie. W zeszycie zapisujemy pary i uzupełniamy tekst.",
        ua: "Сьогодні спочатку ЧИТАЄМО комікс, потім ШУКАЄМО пари слів. Усно кажемо обґрунтування. У зошит записуємо пари і доповнюємо текст."
      },
      items: [
        { pl: "przeczytam komiks i zrozumiem, co się dzieje;", ua: "прочитаю комікс і зрозумію, що відбувається;" },
        { pl: "uzasadnię pisownię wyróżnionych wyrazów z ó, rz, ż, ch wymiennym;", ua: "обґрунтую написання виділених слів з ó, rz, ż, ch змінним;" },
        { pl: "przypomnę cztery wymiany: ó→o, rz→r, ż→g/z/d, ch→sz;", ua: "пригадаю чотири заміни: ó→o, rz→r, ż→g/z/d, ch→sz;" },
        { pl: "rozwiążę ćwiczenia — na głos i w zeszycie;", ua: "розв’яжу вправи — вголос і в зошиті;" },
        { pl: "połączę wyrazy z parami (zabawa ortograficzna);", ua: "поєднаю слова з парами (орфографічна гра);" },
        { pl: "uzupełnię tekst o Denisie Tito i sprawdzę, które luki to wymiana.", ua: "доповню текст про Деніса Тіто і перевірю, які пропуски — заміна." }
      ]
    },
    // S02
    {
      type: "observe",
      heading: { pl: "Czytamy komiks · start", ua: "Читаємо комікс · старт" },
      formula: "16 lipca 1969  ·  Przylądek Kennedy’ego  ·  14.32",
      visual: vizGh("t5-komiks-start.png", {
        alt: {
          pl: "Komiks: Przylądek Kennedy’ego i start rakiety",
          ua: "Комікс: мис Кеннеді і старт ракети"
        },
        title: { pl: "Slajd 1 · dwa kadry (Ziemia)", ua: "Слайд 1 · два кадри (Земля)" },
        prompt: {
          pl: "Wstaw slajd z komiksem, dwa kadry obok siebie. LEWY: 16 lipca 1969 r., Przylądek Kennedy’ego, Floryda; trzej astronauci w niebieskich skafandrach; dymki: «Nawet tu słychać skandujący tłum.» oraz «Nie przejmuj się, za chwilę ucichnie. Podobno przyszło nas oglądać ponad milion osób.» Podkreślone: słychać, ucichnie, osób. PRAWY: start rakiety, zegar 14.32, dymek: «Mam nadzieję, że wrócą szczęśliwie.» Podkreślone: wrócą. PNG, kadr szeroki (ok. 16:9). Przytnij strzałki Genially i znak wodny.",
          ua: "Встав слайд коміксу: мис Кеннеді + старт ракети 14.32."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: przeczytaj dymki na głos. Najpierw zrozum, CO się dzieje. Ortografię weźmiemy z podkreślonych wyrazów — za chwilę.",
        ua: "УСНО: прочитай репліки вголос. Спочатку зрозумій, ЩО відбувається."
      },
      text: {
        pl: [
          "16 lipca 1969 r., Przylądek Kennedy’ego, Floryda.",
          "— Nawet tu **słychać** skandujący tłum.",
          "— Nie przejmuj się, za chwilę **ucichnie**. Podobno przyszło nas oglądać ponad milion **osób**.",
          "14.32 — start rakiety.",
          "— Mam nadzieję, że **wrócą** szczęśliwie."
        ],
        ua: [
          "16 липня 1969, мис Кеннеді, Флорида. Старт ракети о 14.32.",
          "Підкреслені слова візьмемо пізніше."
        ]
      },
      task: {
        id: "t5-s02-start",
        type: "single-choice",
        question: {
          pl: "O czym są te dwa kadry? (Jeszcze nie o literach.)",
          ua: "Про що ці два кадри? (Ще не про літери.)"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ludzie startują w kosmos. Tłum skanduje. Ktoś ma nadzieję, że wrócą szczęśliwie.",
              ua: "Люди стартують у космос. Натовп скандує. Хтось сподівається, що вони повернуться."
            }
          },
          {
            id: "b",
            label: {
              pl: "To przepis na ciasto i lista zakupów.",
              ua: "Це рецепт тістечка і список покупок."
            }
          },
          {
            id: "c",
            label: {
              pl: "To już lądowanie na Księżycu — flaga i pył.",
              ua: "Це вже посадка на Місяці — прапор і пил."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Data, Przylądek Kennedy’ego, rakieta 14.32. Czy już są na Księżycu?",
          ua: "Дата, мис Кеннеді, ракета 14.32. Чи вони вже на Місяці?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To komiks o locie na Księżyc. Czytamy dymki, nie przepis.",
              ua: "Це комікс про політ на Місяць."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tu jest start z Ziemi. Lądowanie będzie na kolejnych kadrach.",
              ua: "Тут старт із Землі. Посадка буде далі."
            }
          }
        ],
        explanation: {
          pl: "Kontekst: start 16 lipca 1969. Podkreślone na później: słychać, ucichnie, osób, wrócą.",
          ua: "Контекст: старт 16 липня 1969. Підкреслені слова — пізніше."
        }
      }
    },
    // S03
    {
      type: "observe",
      heading: { pl: "Czytamy komiks · wokół Księżyca", ua: "Читаємо комікс · навколо Місяця" },
      formula: "20 lipca  ·  110 km  ·  USTNIE",
      visual: vizGh("t5-komiks-orbita.png", {
        alt: {
          pl: "Komiks: krążenie wokół Księżyca i rozmowa w kabinie",
          ua: "Комікс: обертання навколо Місяця і розмова в кабіні"
        },
        title: { pl: "Slajd 2 · dwa kadry (orbita)", ua: "Слайд 2 · два кадри (орбіта)" },
        prompt: {
          pl: "Wstaw slajd z komiksem, dwa kadry. LEWY: kabina, okno z Księżycem, dymek: «Od trzech dni krążymy wokół Księżyca...» Podkreślone: krążymy, wokół. PRAWY: dwaj astronauci, data 20 lipca, dymek: «Jesteśmy na wysokości 110 kilometrów nad powierzchnią Księżyca. Musimy zmniejszyć prędkość i obniżyć lot. W obecnej sytuacji istnieje zagrożenie, że nie uda nam się bezpiecznie wylądować.» Podkreślone: obniżyć, zagrożenie. PNG, kadr szeroki. Przytnij strzałki Genially.",
          ua: "Встав слайд: орбіта Місяця + розмова про зниження польоту, 20 липня."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: przeczytaj oba dymki. Kto mówi? Gdzie są? Co chcą zrobić?",
        ua: "УСНО: прочитай обидві репліки. Хто говорить? Де вони? Що хочуть зробити?"
      },
      text: {
        pl: [
          "— Od trzech dni **krążymy** **wokół** Księżyca...",
          "20 lipca.",
          "— Jesteśmy na wysokości 110 kilometrów nad powierzchnią Księżyca. Musimy zmniejszyć prędkość i **obniżyć** lot. W obecnej sytuacji istnieje **zagrożenie**, że nie uda nam się bezpiecznie wylądować."
        ],
        ua: [
          "Вони вже три дні на орбіті Місяця і мають знизити політ.",
          "Підкреслені: krążymy, wokół, obniżyć, zagrożenie."
        ]
      },
      task: {
        id: "t5-s03-orbita",
        type: "single-choice",
        question: {
          pl: "Co muszą zrobić astronauci?",
          ua: "Що мають зробити астронавти?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Obniżyć lot, bo jest zagrożenie, że nie wylądują bezpiecznie.",
              ua: "Знизити політ, бо є загроза, що не сядуть безпечно."
            }
          },
          {
            id: "b",
            label: {
              pl: "Wrócić od razu na Przylądek Kennedy’ego, bez lądowania.",
              ua: "Одразу повернутися на мис Кеннеді, без посадки."
            }
          },
          {
            id: "c",
            label: {
              pl: "Śpiewać kołysankę o zmierzchu.",
              ua: "Співати колискову про сутінки."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Drugi dymek: zmniejszyć prędkość i … lot. Jaki wyraz jest podkreślony?",
          ua: "Друга репліка: зменшити швидкість і … політ."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chcą wylądować. Problem: trzeba obniżyć lot.",
              ua: "Вони хочуть сісти. Треба знизити політ."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To nie wiersz „Noc”. Tu jest lot na Księżyc.",
              ua: "Це не вірш «Noc». Тут політ на Місяць."
            }
          }
        ],
        explanation: {
          pl: "Krążą wokół Księżyca i muszą obniżyć lot. Podkreślone: krążymy, wokół, obniżyć, zagrożenie.",
          ua: "На орбіті треба знизити політ. Підкреслені слова — на пізніше."
        }
      }
    },
    // S04
    {
      type: "observe",
      heading: { pl: "Czytamy komiks · Orzeł", ua: "Читаємо комікс · Orzeł" },
      formula: "21 lipca  ·  Morze Spokoju  ·  USTNIE",
      visual: vizGh("t5-komiks-orzel1.png", {
        alt: {
          pl: "Komiks: lądownik Orzeł i astronauci z flagą",
          ua: "Комікс: посадковий модуль Orzeł і астронавти з прапором"
        },
        title: { pl: "Slajd 3 · lądowanie", ua: "Слайд 3 · посадка" },
        prompt: {
          pl: "Wstaw slajd z komiksem, dwa kadry. LEWY: żółto-szary lądownik na niebieskim pyłu, dymek «Orzeł wylądował.», podpis «…po kilku godzinach nad Morzem Spokoju». Podkreślone: Orzeł, Morzem. PRAWY: dwaj astronauci, flaga, data 21 lipca, dymek: «To mały krok dla człowieka, lecz wielki skok dla ludzkości.» PNG, kadr szeroki. Przytnij strzałki Genially.",
          ua: "Встав слайд: модуль Orzeł + прапор, 21 липня, Море Спокою."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: przeczytaj oba dymki. Potem opowiedz całą historię z trzech slajdów (start → orbita → lądowanie) dwoma–trzema zdaniami.",
        ua: "УСНО: прочитай репліки. Потім розкажи всю історію з трьох слайдів двома–трьома реченнями."
      },
      text: {
        pl: [
          "…po kilku godzinach nad **Morzem** Spokoju.",
          "— **Orzeł** wylądował.",
          "21 lipca.",
          "— To mały krok dla człowieka, lecz wielki skok dla ludzkości."
        ],
        ua: [
          "Море Спокою — назва рівнини на Місяці.",
          "Orzeł — назва модуля. Підкреслені: Orzeł, Morzem."
        ]
      },
      task: {
        id: "t5-s04-orzel",
        type: "single-choice",
        question: {
          pl: "Co oznacza zdanie „Orzeł wylądował”?",
          ua: "Що означає речення «Orzeł wylądował»?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Wylądował moduł o nazwie Orzeł — nad Morzem Spokoju na Księżycu.",
              ua: "Сів модуль на ім’я Orzeł — над Морем Спокою на Місяці."
            }
          },
          {
            id: "b",
            label: {
              pl: "Prawdziwy orzeł (ptak) usiadł na Florydzie.",
              ua: "Справжній орел (птах) сів на Флориді."
            }
          },
          {
            id: "c",
            label: {
              pl: "Rakieta dopiero startuje z Przylądka Kennedy’ego.",
              ua: "Ракета щойно стартує з мису Кеннеді."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Popatrz na kadr: lądownik, pył, Morze Spokoju. Orzeł to nazwa.",
          ua: "Подивись на кадр: модуль, пил, Море Спокою. Orzeł — назва."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To nazwa lądownika, nie ptak na Florydzie. Jesteśmy już na Księżycu.",
              ua: "Це назва модуля, не птах. Вони вже на Місяці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Start był na pierwszym slajdzie. Tu: lądowanie 21 lipca.",
              ua: "Старт був на першому слайді. Тут посадка 21 липня."
            }
          }
        ],
        explanation: {
          pl: "Orzeł = nazwa modułu. Morze Spokoju = równina na Księżycu. Teraz weźmiemy podkreślone wyrazy do ortografii.",
          ua: "Orzeł — назва модуля. Далі візьмемо підкреслені слова до орфографії."
        }
      }
    },
    // S05
    {
      type: "concept",
      heading: { pl: "Pary z komiksu", ua: "Пари з коміксу" },
      formula: "USTNIE: wyraz  →  para  →  wymiana",
      visual: vizGh("t5-pary-komiks.png", {
        alt: {
          pl: "Pary wyrazów z komiksu, kolorowe litery wymiany",
          ua: "Пари слів із коміксу, кольорові літери заміни"
        },
        title: { pl: "Slajd 4 · pary (kolorowe litery)", ua: "Слайд 4 · пари" },
        prompt: {
          pl: "Wstaw slajd z parami jak w prezentacji (dziecko przy biurku, pary w dwóch kolumnach, kolorowa litera wymiany): słychać–słyszeć; ucichnie–uciszyć; osób–osoby; wrócą–wracać; krążymy–krąg; wokół–wokoło; obniżyć–niżej–nisko; zagrożenie–groźny, zagrozić; orzeł–orli; morzem–morski. PNG. Przytnij strzałki Genially.",
          ua: "Встав слайд із парами слів і кольоровою літерою заміни."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: wskaż palcem podkreślony wyraz na komiksie i powiedz parę. Np. „słychać — słyszę / słyszeć”. Dopiero potem kliknij.",
        ua: "УСНО: покажи підкреслене слово і скажи пару. Потім клікни."
      },
      items: [
        { pl: "słychać → słyszeć / słyszę   (ch → sz)", ua: "słychać → słyszeć   (ch → sz)" },
        { pl: "ucichnie → uciszyć   (ch → sz)", ua: "ucichnie → uciszyć" },
        { pl: "osób → osoby   (ó → o)", ua: "osób → osoby" },
        { pl: "wrócą → wracać   (ó → o)", ua: "wrócą → wracać" },
        { pl: "wokół → wokoło   (ó → o)", ua: "wokół → wokoło" },
        { pl: "krążymy → krąg   (ż → g)", ua: "krążymy → krąg" },
        { pl: "orzeł → orli / orła   (rz → r)", ua: "orzeł → orli" },
        { pl: "morzem → morski   (rz → r)", ua: "morzem → morski" }
      ],
      task: {
        id: "t5-s05-slychac",
        type: "single-choice",
        question: {
          pl: "Dlaczego w wyrazie słychać piszemy ch?",
          ua: "Чому в слові słychać пишемо ch?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Bo w parze słyszeć / słyszę ch wymienia się na sz.",
              ua: "Бо в парі słyszeć / słyszę ch змінюється на sz."
            }
          },
          {
            id: "b",
            label: {
              pl: "Bo tłum jest głośny — i to wystarczy zamiast pary.",
              ua: "Бо натовп гучний — і цього досить замість пари."
            }
          },
          {
            id: "c",
            label: {
              pl: "Bo ch wymienia się na o, jak w osoby.",
              ua: "Бо ch змінюється на o, як у osoby."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj słychać i słyszę. Jaki dwuznak znika? Co wchodzi na jego miejsce?",
          ua: "Порівняй słychać і słyszę. Який диграф зникає?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sens (głośny tłum) nie uzasadnia litery. Potrzebna para: słyszę.",
              ua: "Сенс не обґрунтовує літеру. Потрібна пара: słyszę."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "ó → o to osób → osoby. Tu ch → sz.",
              ua: "ó → o — це osób → osoby. Тут ch → sz."
            }
          }
        ],
        explanation: {
          pl: "słychać — ch → sz (słyszę). Ten sam mechanizm: ucichnie → uciszyć. Inne pary z kadru: osób → osoby (ó→o), orzeł → orli (rz→r).",
          ua: "słychać — ch → sz. Той самий механізм для інших пар."
        }
      }
    },
    // S06
    {
      type: "classification",
      heading: { pl: "PISZEMY · uzupełnij schemat", ua: "PISZEMY · доповни схему" },
      formula: "ó → o    rz → r    ż → g / z / d    ch → sz",
      visual: vizGh("t5-rakieta-piszemy.png", {
        alt: {
          pl: "Rakieta PISZEMY z czterema regułami do uzupełnienia",
          ua: "Ракета PISZEMY з чотирма правилами"
        },
        title: { pl: "Slajd 5 · rakieta (ćw. 2)", ua: "Слайд 5 · ракета" },
        prompt: {
          pl: "Wstaw slajd z rakietą: nos czerwony, napis PISZEMY w okienku, cztery żółte pasy spalin do uzupełnienia: «ó, gdy… wymienia się na …»; «rz, gdy…»; «ż, gdy…»; «ch, gdy…». Na dole trzy szare ludziki. PNG, kadr szeroki. Przytnij strzałki Genially. To slajd z ćwiczenia 2 podręcznika.",
          ua: "Встав слайд-ракету PISZEMY з чотирма порожніми правилами."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "ZESZYT: przepisz schemat i dopisz końcówki reguł. USTNIE: powiedz każdą wymianę z jedną parą. Potem sprawdź kliknięciem.",
        ua: "ЗОШИТ: перепиши схему. УСНО: скажи кожну заміну з однією парою."
      },
      items: [
        { pl: "ó piszemy, gdy w innej formie lub w wyrazie pokrewnym wymienia się na o.  (osób → osoby)", ua: "ó → o   (osób → osoby)" },
        { pl: "rz piszemy, gdy wymienia się na r.  (orzeł → orli, morzem → morski)", ua: "rz → r   (orzeł → orli)" },
        { pl: "ż piszemy, gdy wymienia się na g, z albo d.  (krążymy → krąg; zagrożenie → zagrozić)", ua: "ż → g / z / d" },
        { pl: "ch piszemy, gdy wymienia się na sz.  (słychać → słyszę)", ua: "ch → sz   (słychać → słyszę)" }
      ],
      task: {
        id: "t5-s06-rakieta",
        type: "single-choice",
        question: {
          pl: "Co wpisujesz przy ch w rakiecie?",
          ua: "Що вписуєш біля ch у ракеті?"
        },
        options: [
          { id: "a", label: { pl: "sz  (słychać → słyszę)", ua: "sz  (słychać → słyszę)" } },
          { id: "b", label: { pl: "o  (to wymiana od ó)", ua: "o  (це заміна від ó)" } },
          { id: "c", label: { pl: "r  (to wymiana od rz)", ua: "r  (це заміна від rz)" } }
        ],
        answer: "a",
        hint: {
          pl: "ch → ? Popatrz na parę słychać / słyszę.",
          ua: "ch → ? Подивись на пару słychać / słyszę."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "o należy do ó (osób → osoby). ch wymienia się na sz.",
              ua: "o належить до ó. ch змінюється на sz."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "r należy do rz (orzeł → orli). ch → sz.",
              ua: "r належить до rz. ch → sz."
            }
          }
        ],
        explanation: {
          pl: "Cztery końcówki rakiety: ó→o, rz→r, ż→g/z/d, ch→sz. Zawsze z parą, nie z listy do wkuwania.",
          ua: "Чотири кінці ракети. Завжди з парою."
        }
      }
    },
    // S07
    {
      type: "practice",
      heading: { pl: "Uzasadnij z komiksu", ua: "Обґрунтуй із коміксу" },
      formula: "ćw. 1  ·  USTNIE + klik",
      promptPlace: "before",
      prompt: {
        pl: "Wróć do podkreśleń. 1) powiedz parę na głos  2) nazwij wymianę  3) dopiero wtedy wybierz.",
        ua: "Повернись до підкреслень. 1) скажи пару  2) назви заміну  3) тоді обери."
      },
      items: [
        { pl: "osób → osoby  (ó → o)", ua: "osób → osoby" },
        { pl: "wrócą → wracać  (ó → o)", ua: "wrócą → wracać" },
        { pl: "wokół → wokoło  (ó → o)", ua: "wokół → wokoło" },
        { pl: "orzeł → orli  (rz → r)", ua: "orzeł → orli" },
        { pl: "krążymy → krąg  (ż → g)", ua: "krążymy → krąg" }
      ],
      task: {
        id: "t5-s07-komiks-pary",
        type: "multiple-choice",
        question: {
          pl: "Które wyrazy z komiksu da się uzasadnić wymianą? Zaznacz wszystkie pewne.",
          ua: "Які слова з коміксу можна обґрунтувати заміною? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "osób → osoby (ó → o)", ua: "osób → osoby (ó → o)" } },
          { id: "b", label: { pl: "orzeł → orli (rz → r)", ua: "orzeł → orli (rz → r)" } },
          { id: "c", label: { pl: "krążymy → krąg (ż → g)", ua: "krążymy → krąg (ż → g)" } },
          { id: "d", label: { pl: "ludzkości — trudne słowo, ale bez pary z tej lekcji", ua: "ludzkości — важке слово, але без пари з цього уроку" } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Szukaj zmiany litery: o, r, g/z/d albo sz. ludzkości nie ma tu pary.",
          ua: "Шукай зміну літери. ludzkości тут без пари."
        },
        explanation: {
          pl: "osób–osoby, orzeł–orli, krążymy–krąg — widać wymianę. ludzkości zostaw: nie ćwiczymy jej jako wymiany. Też pewne: słychać–słyszę, wokół–wokoło, morzem–morski.",
          ua: "Беремо тільки пари з ясною заміною."
        }
      }
    },
    // S08
    {
      type: "observe",
      heading: { pl: "Czytamy · tłum przy starcie", ua: "Читаємо · натовп біля старту" },
      formula: "ćw. 3  ·  USTNIE: przeczytaj dymki",
      visual: vizGh("t5-komiks-tlum.png", {
        alt: {
          pl: "Komiks: tłum i astronauci na pomostcie przed rakietą",
          ua: "Комікс: натовп і астронавти на містку перед ракетою"
        },
        title: { pl: "Slajd 6 · ćwiczenie 3", ua: "Слайд 6 · вправа 3" },
        prompt: {
          pl: "Wstaw slajd z komiksem tłumu i trzech astronautów na pomostcie przy rakiecie. Dymki (zostaw tekst w dymkach na obrazku): «Podejdźmy bliżej, może będzie lepiej ich widać.»; «Ciekawe, co zamierzają robić po powrocie do domu...»; «Dłużej w tej pozycji nie wytrzymam. Musisz zejść!»; «Nie wierzę, że im się udało. To istny cud!»; «Ja bym się nie odważył. Ze strachem słuchałem wszelkich doniesień... Oni tworzą historię!»; «To nie cud, tylko dowód na to, że wszystko jest możliwe.»; «Przyjaciółka mi mówiła, że przywieźli 22 kilogramy różnych księżycowych minerałów.» PNG, kadr szeroki. Przytnij strzałki Genially.",
          ua: "Встав слайд коміксу з натовпом і сімома репліками."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: przeczytaj dymki na głos (możesz w rolach). Jeszcze nie wypisuj wszystkich ó — najpierw zrozum, kto co mówi.",
        ua: "УСНО: прочитай репліки вголос. Ще не виписуй усі ó — спочатку зрозумій, хто що каже."
      },
      text: {
        pl: [
          "— Podejdźmy **bliżej**, **może** będzie lepiej ich widać.",
          "— Ciekawe, co **zamierzają** robić po powrocie do domu...",
          "— **Dłużej** w tej pozycji nie wytrzymam. Musisz zejść!",
          "— Nie **wierzę**, że im się udało. To istny cud!",
          "— Ja bym się nie **odważył**. Ze **strachem** **słuchałem** wszelkich doniesień... Oni **tworzą** historię!",
          "— To nie cud, tylko **dowód** na to, że wszystko jest **możliwe**.",
          "— **Przyjaciółka** mi **mówiła**, że przywieźli 22 kilogramy różnych księżycowych minerałów."
        ],
        ua: [
          "Натовп дивиться на астронавтів. Підкреслені слова — до вправи 3."
        ]
      },
      task: {
        id: "t5-s08-tlum",
        type: "single-choice",
        question: {
          pl: "Kto mówi w tych dymkach?",
          ua: "Хто говорить у цих репліках?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ludzie z tłumu — oglądają astronautów i rozmawiają o locie.",
              ua: "Люди з натовпу — дивляться на астронавтів і говорять про політ."
            }
          },
          {
            id: "b",
            label: {
              pl: "Tylko komputer rakiety, bez ludzi.",
              ua: "Лише комп’ютер ракети, без людей."
            }
          },
          {
            id: "c",
            label: {
              pl: "Podmiot liryczny z wiersza „Noc”.",
              ua: "Ліричний суб’єкт із вірша «Noc»."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Popatrz na obrazek: ludzie, dymki, pomost, rakieta.",
          ua: "Подивись на малюнок: люди, репліки, місток, ракета."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To rozmowy ludzi. Widać twarze i dymki.",
              ua: "Це розмови людей."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To inna lekcja. Tu komiks o starcie i tłumie.",
              ua: "Це інший урок. Тут комікс про старт і натовп."
            }
          }
        ],
        explanation: {
          pl: "Ćw. 3: z wypowiedzi ludzi wypiszesz ó, rz, ż, ch wymienne. Najpierw przeczytałeś. Teraz pary.",
          ua: "Завд. 3: з реплік випишеш змінні ó, rz, ż, ch. Спочатку прочитав."
        }
      }
    },
    // S09
    {
      type: "practice",
      heading: { pl: "Wypisz wymienne", ua: "Випиши змінні" },
      formula: "ćw. 3  ·  ZESZYT + sprawdzenie",
      visual: vizGh("t5-pary-tlum.png", {
        alt: {
          pl: "Pary wyrazów z dymków tłumu",
          ua: "Пари слів із реплік натовпу"
        },
        title: { pl: "Slajd 7 · pary z ćw. 3", ua: "Слайд 7 · пари з вправи 3" },
        prompt: {
          pl: "Wstaw slajd z parami (twarz z pytajnikiem pośrodku): bliżej–blisko; zamierzają–zamiar; wierzę–wiara; odważył–odwaga; słuchałem–słuchać, słuch, słyszę; tworzę–twórca; dowód–dowody; możliwe–mogę; przyjaciółka–przyjaciele; mówiła–mowa. Kolorowe litery wymiany. PNG. Przytnij strzałki Genially.",
          ua: "Встав слайд із парами слів із реплік натовпу."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "ZESZYT: wypisz z dymków wyrazy z ó, rz, ż, ch wymiennym i dopisz parę. USTNIE: jedną parę powiedz pełnym zdaniem: „… piszemy przez …, ponieważ …”.",
        ua: "ЗОШИТ: випиши слова і допиши пару. УСНО: одну пару скажи повним реченням."
      },
      items: [
        { pl: "bliżej → blisko", ua: "bliżej → blisko" },
        { pl: "zamierzają → zamiar   (rz → r)", ua: "zamierzają → zamiar" },
        { pl: "wierzę → wiara   (rz → r)", ua: "wierzę → wiara" },
        { pl: "odważył → odwaga   (ż → g)", ua: "odważył → odwaga" },
        { pl: "dowód → dowody   (ó → o)", ua: "dowód → dowody" },
        { pl: "możliwe → mogę   (ż → g)", ua: "możliwe → mogę" },
        { pl: "przyjaciółka → przyjaciele   (ó → o)", ua: "przyjaciółka → przyjaciele" },
        { pl: "mówiła → mowa   (ó → o)", ua: "mówiła → mowa" },
        { pl: "strachem → straszny   (ch → sz)", ua: "strachem → straszny" }
      ],
      task: {
        id: "t5-s09-wypisz",
        type: "multiple-choice",
        question: {
          pl: "Które pary z dymków uzasadniają pisownię? Zaznacz wszystkie pewne.",
          ua: "Які пари з реплік обґрунтовують написання? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "wierzę → wiara (rz → r)", ua: "wierzę → wiara (rz → r)" } },
          { id: "b", label: { pl: "dowód → dowody (ó → o)", ua: "dowód → dowody (ó → o)" } },
          { id: "c", label: { pl: "odważył → odwaga (ż → g)", ua: "odważył → odwaga (ż → g)" } },
          { id: "d", label: { pl: "historia — bez wymiany ó/rz/ż/ch z tej lekcji", ua: "historia — без заміни з цього уроку" } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "historia nie ma tu pary. Szukaj wiara, dowody, odwaga.",
          ua: "historia тут без пари. Шукай wiara, dowody, odwaga."
        },
        explanation: {
          pl: "wierzę–wiara, dowód–dowody, odważył–odwaga. Jeszcze: zamierzają–zamiar, możliwe–mogę, mówiła–mowa, strachem–straszny, przyjaciółka–przyjaciele. historia — nie ta reguła.",
          ua: "Беремо пари з ясною заміною. historia — ні."
        }
      }
    },
    // S10
    {
      type: "challenge",
      heading: { pl: "Zabawa · połącz pary", ua: "Гра · поєднай пари" },
      formula: "ZESZYT  ·  podkreśl literę wymiany",
      promptPlace: "before",
      prompt: {
        pl: "ZESZYT najpierw: połącz wszystkie pary i podkreśl literę, która się wymienia. Klucza jeszcze nie otwieraj. USTNIE: odczytaj trzy pary. Potem zadanie — i dopiero „Pokaż następny krok”.",
        ua: "Спочатку ЗОШИТ: поєднай усі пари. Ключ ще не відкривай. УСНО: три пари. Потім завдання — і лише тоді «Pokaż następny krok»."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t5-polacz-pary.png", {
            alt: {
              pl: "Dwie kolumny wyrazów do połączenia",
              ua: "Дві колонки слів до поєднання"
            },
            title: { pl: "Slajd 8 · połącz w zeszycie", ua: "Слайд 8 · поєднай у зошиті" },
            prompt: {
              pl: "Wstaw slajd z instrukcją różowym pismem: «Połącz wyrazy zawierające ó, rz, ż, ch, h wymienne z wyrazami uzasadniającymi ich pisownię. Zapisz w zeszycie i podkreśl litery oznaczające wymieniające głoski.» Lewa kolumna: zachód, powrócić, szósty, zachmurzenie, druh, poważny, przerażony, duchota, zwężać. Prawa: chmura, drużyna, duszno, powaga, powracać, przerazić, sześć, wąski, zachodzić. Na dole otwarty zeszyt. PNG. Przytnij kłódkę i strzałki Genially. To slajd ZADANIA — bez gotowych par.",
              ua: "Встав слайд із двома колонками слів до поєднання в зошиті. Без готових пар."
            }
          }),
          text: {
            pl: "Klucz jest schowany. Najpierw zapisz pary w zeszycie. Pełną listę otworzysz przyciskiem „Pokaż następny krok”.",
            ua: "Ключ сховано. Спочатку запиши пари в зошит. Повний список — кнопка «Pokaż następny krok»."
          }
        },
        {
          formula: "KLUCZ  ·  porównaj z zeszytem",
          text: {
            pl: [
              "zachód → zachodzić",
              "powrócić → powracać",
              "szósty → sześć",
              "zachmurzenie → chmura",
              "druh → drużyna   (h → ż)",
              "poważny → powaga",
              "przerażony → przerazić",
              "duchota → duszno",
              "zwężać → wąski"
            ],
            ua: [
              "zachód → zachodzić",
              "powrócić → powracać",
              "szósty → sześć",
              "zachmurzenie → chmura",
              "druh → drużyna",
              "poważny → powaga",
              "przerażony → przerazić",
              "duchota → duszno",
              "zwężać → wąski"
            ]
          }
        }
      ],
      task: {
        id: "t5-s10-polacz",
        type: "multiple-choice",
        question: {
          pl: "Które połączenia są poprawne? Zaznacz wszystkie. (Pełny klucz — przycisk powyżej, po zeszycie.)",
          ua: "Які поєднання правильні? Познач усі. (Повний ключ — кнопка вище, після зошита.)"
        },
        options: [
          { id: "a", label: { pl: "zachód → zachodzić", ua: "zachód → zachodzić" } },
          { id: "b", label: { pl: "powrócić → chmura", ua: "powrócić → chmura" } },
          { id: "c", label: { pl: "druh → drużyna", ua: "druh → drużyna" } },
          { id: "d", label: { pl: "zwężać → wąski", ua: "zwężać → wąski" } }
        ],
        answer: ["a", "c", "d"],
        hint: {
          pl: "chmura idzie do zachmurzenie, nie do powrócić.",
          ua: "chmura йде до zachmurzenie, не до powrócić."
        },
        mistakes: [
          {
            answer: ["a", "b", "c", "d"],
            feedback: {
              pl: "powrócić nie łączy się z chmurą. Otwórz klucz przyciskiem „Pokaż następny krok”.",
              ua: "powrócić не з chmura. Відкрий ключ кнопкою."
            }
          }
        ],
        explanation: {
          pl: "Trzy pewne: zachód–zachodzić, druh–drużyna, zwężać–wąski. powrócić → powracać, nie chmura. Pełną listę dziewięciu par masz po „Pokaż następny krok”.",
          ua: "Три певні пари в zadaniu. Повний список дев’яти пар — після кнопки."
        }
      }
    },
    // S11
    {
      type: "challenge",
      heading: { pl: "Napisz uzasadnienie", ua: "Напиши обґрунтування" },
      formula: "ZESZYT  ·  pełne zdanie",
      promptPlace: "before",
      prompt: {
        pl: "Wzorzec: [wyraz] piszemy przez [literę], ponieważ w wyrazie [para] [litera] wymienia się na […]. Najpierw zapisz w zeszycie, potem wpisz tu drugą część.",
        ua: "Зразок: пишемо через …, бо в слові … літера змінюється на … . Спочатку зошит, потім впиши тут."
      },
      items: [
        { pl: "orzeł piszemy przez rz, ponieważ w wyrazie orli rz wymienia się na r.", ua: "orzeł → orli → rz → r" },
        { pl: "słychać piszemy przez ch, ponieważ w wyrazie słyszę ch wymienia się na sz.", ua: "słychać → słyszę → ch → sz" }
      ],
      task: {
        id: "t5-s11-zdanie",
        type: "input-text",
        question: {
          pl: "Dokończ: osób piszemy przez ó, ponieważ ______.",
          ua: "Доповни: osób piszemy przez ó, ponieważ ______."
        },
        answer: [
          "w wyrazie osoby ó wymienia się na o",
          "w wyrazie osoby ó wymienia się na o.",
          "ó wymienia się na o w wyrazie osoby",
          "ó wymienia się na o w wyrazie osoby.",
          "w osoby ó wymienia się na o",
          "w osoby ó wymienia się na o.",
          "w osobach ó wymienia się na o",
          "ó wymienia się na o",
          "ó wymienia się na o.",
          "w innej formie (osoby) ó wymienia się na o",
          "w innej formie (osoby) ó wymienia się na o."
        ],
        hint: {
          pl: "Trzy klocki: para (osoby) + wymienia się + na o.",
          ua: "Три частини: пара (osoby) + змінюється + на o."
        },
        explanation: {
          pl: "Wzorzec: „osób piszemy przez ó, ponieważ w wyrazie osoby ó wymienia się na o.” To samo zrób w zeszycie dla orzeł i słychać.",
          ua: "Зразок: пара + заміна. У зошиті те саме для orzeł і słychać."
        }
      }
    },
    // S12
    {
      type: "check",
      heading: { pl: "Tekst z lukami · Tito", ua: "Текст із пропусками · Тіто" },
      formula: "ćw. 4  ·  ZESZYT: wstaw ch, ó, u, rz, ż",
      promptPlace: "before",
      prompt: {
        pl: "Tekst jest na obrazku. ZESZYT: przepisz i wstaw litery. Klucza jeszcze nie otwieraj. Potem zadanie — i dopiero „Pokaż następny krok”.",
        ua: "Текст на малюнку. ЗОШИТ: перепиши і встав літери. Ключ ще не відкривай. Потім завдання — і лише тоді «Pokaż następny krok»."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t5-tito-luki.png", {
            alt: {
              pl: "Tekst o Denisie Tito z szarymi kratkami na litery",
              ua: "Текст про Деніса Тіто з порожніми клітинками"
            },
            title: { pl: "Slajd 9 · ćwiczenie 4", ua: "Слайд 9 · вправа 4" },
            prompt: {
              pl: "Wstaw slajd z ćwiczeniem 4: instrukcja u góry (Przepisz tekst do zeszytu, wstawiając w miejsce kratek ch, ó, u, rz, ż. Podkreśl wyrazy z ch, ó, u, rz, ż wymiennym.). Tekst o Denisie Tito z szarymi kratkami w wyrazach. Na dole dziewczynka przy zeszycie. PNG, kadr szeroki. Przytnij strzałki Genially. To slajd ZADANIA — bez gotowych liter.",
              ua: "Встав слайд вправи 4: текст про Тіто з порожніми клітинками. Без готових літер."
            }
          }),
          text: {
            pl: "Gotowy tekst jest schowany. Najpierw przepisz z obrazka do zeszytu. Żeby sprawdzić litery, kliknij „Pokaż następny krok”.",
            ua: "Готовий текст сховано. Спочатку перепиши з малюнка в зошит. Щоб перевірити літери — «Pokaż następny krok»."
          }
        },
        {
          formula: "KLUCZ  ·  wstawione litery są pogrubione",
          text: {
            pl: [
              "Pierwszym kosmicznym t**u**rystą był amerykański milioner Denis Tito. Pr**ó**bował się wybrać w podró**ż** za pośrednictwem amerykańskiej agencji rządowej. Jednak ta odm**ó**wiła. Uwa**ż**ano, **ż**e sprzęt kosztuje zbyt du**ż**o, by m**ó**gł słu**ż**yć tak błahej sprawie.",
              "Denis Tito nie tracił jednak du**ch**a. Nie zra**ż**ały go ani op**ó**r NASA, ani ogromne nakłady pienię**ż**ne, kt**ó**re musiałby ponieść. Jego propozycją powa**ż**nie zainteresowali się Rosjanie.",
              "W 2001 roku przygotowali podró**ż**, kt**ó**ra trwała r**ó**wno siedem dni, dwadzieścia dwie godziny i cztery min**u**ty."
            ],
            ua: [
              "Жирним виділено вставлені літери. Не кожна з них — заміна з цього уроку.",
              "",
              ""
            ]
          }
        }
      ],
      task: {
        id: "t5-s12-tito-litera",
        type: "single-choice",
        question: {
          pl: "Jakie litery wstawiasz w: t[ ]rystą  ·  m[ ]gł  ·  du[ ]a?",
          ua: "Які літери вставляєш у: t[ ]rystą  ·  m[ ]gł  ·  du[ ]a?"
        },
        options: [
          { id: "a", label: { pl: "u  ·  ó  ·  ch   (turystą, mógł, ducha)", ua: "u  ·  ó  ·  ch" } },
          { id: "b", label: { pl: "ó  ·  u  ·  rz", ua: "ó  ·  u  ·  rz" } },
          { id: "c", label: { pl: "rz  ·  ż  ·  ó", ua: "rz  ·  ż  ·  ó" } }
        ],
        answer: "a",
        hint: {
          pl: "turysta jak turystyka (u, nie ó). mógł jak mogę. ducha jak dusza.",
          ua: "turysta як turystyka (u). mógł як mogę. ducha як dusza."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "turystą ma u, nie ó. mógł ma ó. ducha ma ch.",
              ua: "turystą — u, не ó. mógł — ó. ducha — ch."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nie zgaduj dwuznaków. turystą = u; mógł = ó; ducha = ch.",
              ua: "Не вгадуй. turystą = u; mógł = ó; ducha = ch."
            }
          }
        ],
        explanation: {
          pl: "turystą = u (nie wymiana z tej lekcji). mógł i ducha — te da się uzasadnić parą. Pełny tekst z pogrubionymi literami: „Pokaż następny krok”.",
          ua: "turystą = u. mógł і ducha — так, заміна. Повний текст — після кнопки."
        }
      }
    },
    // S13
    {
      type: "check",
      heading: { pl: "Litera ≠ wymiana", ua: "Літера ≠ заміна" },
      formula: "ćw. 4  ·  które pary są pewne?",
      promptPlace: "before",
      prompt: {
        pl: "To najważniejsze w ćw. 4. Nie każda kratka to ó/rz/ż/ch wymienne. Najpierw litera, potem pytanie: czy znajdę parę?",
        ua: "Найважливіше в завд. 4. Не кожна клітинка — заміна. Спочатку літера, потім: чи знайду пару?"
      },
      items: [
        { pl: "TAK, wymiana: mógł → mogę; ducha → dusza; służyć → sługa; podróż → droga; poważnie → powaga; opór → opory; odmówiła → mowa; uważano → waga.", ua: "Є заміна: mógł, ducha, służyć, podróż, poważnie, opór, odmówiła, uważano." },
        { pl: "NIE ta lekcja: turysta (u); że; dużo; które / która; minuty (u).", ua: "Не цей урок: turysta, że, dużo, które, minuty." }
      ],
      task: {
        id: "t5-s13-tito-wymiana",
        type: "multiple-choice",
        question: {
          pl: "Które wyrazy z tekstu Tito uzasadnisz wymianą? Zaznacz wszystkie pewne.",
          ua: "Які слова з тексту Tito обґрунтуєш заміною? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "mógł → mogę (ó → o)", ua: "mógł → mogę (ó → o)" } },
          { id: "b", label: { pl: "ducha → dusza (ch → sz)", ua: "ducha → dusza (ch → sz)" } },
          { id: "c", label: { pl: "służyć → sługa (ż → g)", ua: "służyć → sługa (ż → g)" } },
          { id: "d", label: { pl: "turysta — wpisujesz u, ale to nie wymiana ó/rz/ż/ch", ua: "turysta — вставляєш u, але це не заміна" } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "turysta / turystyka to u, nie ó→o. Szukaj pary z o, r, g/z/d albo sz.",
          ua: "turysta — це u, не ó→o. Шукай пару з o, r, g/z/d або sz."
        },
        explanation: {
          pl: "Wstawić literę ≠ uzasadnić wymianą. mógł, ducha, służyć — tak. turysta — nie. że i dużo też nie uczysz teraz jako wymiany.",
          ua: "Вставити літеру ≠ обґрунтувати заміною. turysta — ні."
        }
      }
    },
    // S14
    {
      type: "summary",
      heading: { pl: "Zapamiętaj i zeszyt", ua: "Запам’ятай і зошит" },
      promptPlace: "after",
      prompt: {
        pl: "Notatka do zeszytu: Pisownia wymienna. ó→o (osób–osoby). rz→r (orzeł–orli). ż→g/z/d (krążymy–krąg). ch→sz (słychać–słyszę). Jak uzasadniam? 1 para  2 litera  3 nazywam wymianę. Pytanie na zawsze: czy znajdę wyraz pokrewny i zobaczę wymianę?",
        ua: "Зошит коротко: чотири заміни + по одному прикладу з коміксу. Питання: чи знайду споріднене слово?"
      },
      items: [
        { pl: "🟢 Umiem — gdy czytam, mówię parę na głos i zapisuję uzasadnienie.", ua: "🟢 Вмію — читаю, кажу пару вголос і записую обґрунтування." },
        { pl: "🟡 Jeszcze ćwiczę — gdy zgaduję literę bez pary.", ua: "🟡 Ще вправляюсь — якщо вгадую літеру без пари." }
      ],
      task: {
        id: "t5-s14-strategia",
        type: "single-choice",
        question: {
          pl: "Co jest najważniejsze przy ó, rz, ż, ch wymiennym?",
          ua: "Що найважливіше при змінному ó, rz, ż, ch?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Znajduję parę (inną formę albo wyraz pokrewny), widzę wymianę i dopiero wtedy uzasadniam.",
              ua: "Знаходжу пару, бачу заміну і тоді обґрунтовую."
            }
          },
          {
            id: "b",
            label: {
              pl: "Uczę się długiej listy wyrazów na pamięć, bez par.",
              ua: "Вчу довгий список слів напам’ять, без пар."
            }
          },
          {
            id: "c",
            label: {
              pl: "Zgaduję literę i nie wracam do komiksu ani do pary.",
              ua: "Вгадую літеру і не повертаюсь до коміксу чи пари."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Cel lekcji: nie „jaka litera?”, tylko „jaka para i jaka wymiana?”",
          ua: "Мета: не «яка літера?», а «яка пара і яка заміна?»"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Listy bez par nie uczą mechanizmu. Weź osób–osoby z komiksu.",
              ua: "Списки без пар не вчать механізму."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zgadywanie to nie uzasadnienie. Wróć do pary.",
              ua: "Вгадування — не обґрунтування."
            }
          }
        ],
        explanation: {
          pl: "Czytamy → słyszymy wyraz → szukamy pary → nazywamy wymianę. Autor komiksu nie jest regułą. Reguła żyje w parze.",
          ua: "Читаємо → шукаємо пару → називаємо заміну."
        }
      }
    }
  ]
};
