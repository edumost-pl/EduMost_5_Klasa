function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

var WIERSZ1 = [
  "O, nocy cicha, czarna,",
  "okryj pola i ziarna.",
  "Twoje ciepłe ramiona",
  "niosą sen do zagona.",
  " ",
  " ",
  "Ptak już śpi w ciemnym gaju,",
  "wiatr usnął w cichym kraju.",
  "Ciepły sen na miękkiej trawie",
  "został przy cichej stawie."
];

var WIERSZ2 = [
  "O, deszczu drobny, złoty,",
  "myj zielone płoty.",
  "Padaj miękko na dach stodoły",
  "i na okna szkoły.",
  " ",
  " ",
  "Krople tańczą w mokrej trawie,",
  "ogród pachnie w cichej stawie.",
  "Szara chmura nad mym dworem",
  "płynie cicho nad tym borem."
];

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Przygotowanie do kartkówki", ua: "Підготовка до картатки" },
      promptPlace: "before",
      prompt: {
        pl: "Jak analizować nowy wiersz? Nie musisz znać wiersza wcześniej. Nauczysz się, jak znaleźć potrzebne informacje w tekście.",
        ua: "Тобі не потрібно знати новий вірш напам’ять. Ти навчишся знаходити потрібну інформацію в самому тексті."
      },
      items: [
        { pl: "wers", ua: "vers — один рядок" },
        { pl: "zwrotka / strofa", ua: "строфа" },
        { pl: "rym", ua: "рима" },
        { pl: "epitet", ua: "епітет" },
        { pl: "apostrofa", ua: "апострофа" },
        { pl: "nastrój", ua: "настрій" }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Nowy wiersz", ua: "Новий вірш" },
      formula: "EduMost  ·  Do nocy",
      text: { pl: WIERSZ1 },
      promptPlace: "after",
      prompt: {
        pl: [
          "Przeczytaj wiersz dwa razy.",
          "1. Żeby zrozumieć, o czym jest tekst.",
          "2. Zwracając uwagę na budowę i brzmienie.",
          "Potem kliknij „Dalej”."
        ],
        ua: [
          "Прочитай вірш двічі.",
          "1. Щоб зрозуміти, про що текст.",
          "2. Звертаючи увагу на будову і звучання.",
          "Потім натисни «Dalej»."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Wers", ua: "Верс" },
      formula: "O, nocy cicha, czarna,",
      promptPlace: "before",
      prompt: {
        pl: "Wers to jedna linijka tekstu w wierszu. Ta linijka powyżej to jeden wers. Policz teraz wszystkie linijki w całym wierszu (puste miejsce między zwrotkami się nie liczy).",
        ua: "Верс — один рядок у вірші. Поліч усі рядки. Порожній відступ між строфами не рахуй."
      },
      text: { pl: WIERSZ1 },
      task: {
        id: "k1-s03-wersy",
        type: "input-number",
        question: {
          pl: "Ile wersów ma cały wiersz?",
          ua: "Скільки версів у цілому вірші?"
        },
        answer: 8,
        hint: {
          pl: "Policz każdą osobną linijkę. Nie pomijaj wersów. Pusta przerwa między zwrotkami to nie wers.",
          ua: "Рахуй кожен окремий рядок. Порожня пауза — не верс."
        },
        mistakes: [
          {
            answer: 4,
            feedback: {
              pl: "4 to liczba wersów w JEDNEJ zwrotce. Policz obie zwrotki razem.",
              ua: "4 — це рядки однієї строфи. Поліч обидві."
            }
          },
          {
            answer: 2,
            feedback: {
              pl: "2 to liczba zwrotek, nie wersów. Wers = linijka.",
              ua: "2 — це строфи, не рядки."
            }
          }
        ],
        explanation: {
          pl: "Wiersz ma 8 wersów: 4 w pierwszej zwrotce i 4 w drugiej. Każda linijka = jeden wers.",
          ua: "8 версів: 4 + 4."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Zwrotka / strofa", ua: "Строфа" },
      promptPlace: "before",
      prompt: {
        pl: [
          "WERS = jedna linijka.",
          "ZWROTKA (strofa) = wyodrębniona część wiersza złożona z wersów.",
          "Poniżej cała pierwsza zwrotka."
        ],
        ua: [
          "Верс — один рядок.",
          "Строфа — виокремлена частина вірша з кількох рядків.",
          "Нижче — ціла перша строфа."
        ]
      },
      text: {
        pl: [
          "O, nocy cicha, czarna,",
          "okryj pola i ziarna.",
          "Twoje ciepłe ramiona",
          "niosą sen do zagona."
        ]
      },
      task: {
        id: "k1-s04-strofa",
        type: "single-choice",
        question: {
          pl: "Ile zwrotek ma ten wiersz — i ile wersów ma pierwsza zwrotka?",
          ua: "Скільки строф і скільки версів у першій строфі?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "2 zwrotki; pierwsza ma 4 wersy",
              ua: "2 строфи; перша має 4 верси"
            }
          },
          {
            id: "b",
            label: {
              pl: "4 zwrotki; pierwsza ma 2 wersy",
              ua: "4 строфи; перша має 2 верси"
            }
          },
          {
            id: "c",
            label: {
              pl: "8 zwrotek — każda linijka to osobna zwrotka",
              ua: "8 строф — кожен рядок ніби строфа"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zwrotka to BLOK wersów, nie jedna linijka. W tym wierszu są dwa bloki oddzielone przerwą.",
          ua: "Строфа — блок рядків, не один рядок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nie mieszaj: 4 to wersy w zwrotce, 2 to zwrotki. Pierwsza zwrotka ma cztery linijki.",
              ua: "4 — верси в строфі, 2 — строфи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jedna linijka to wers, nie zwrotka. Zwrotka składa się z kilku wersów.",
              ua: "Один рядок — верс, не строфа."
            }
          }
        ],
        explanation: {
          pl: "Zwrotka → wersy. Ten wiersz ma 2 zwrotki. Każda ma 4 wersy. Przerwa na stronie pokazuje, gdzie kończy się zwrotka.",
          ua: "2 строфи по 4 верси."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Rym", ua: "Рима" },
      formula: "czarna  ·  ziarna",
      promptPlace: "before",
      prompt: {
        pl: "Posłuchaj końcówek. Co łączy te dwa wyrazy z wiersza?",
        ua: "Послухай закінчення. Що спільне в цих словах?"
      },
      text: {
        pl: "Rym to powtórzenie jednakowych lub podobnych brzmieniowo końcówek wyrazów.",
        ua: "Рима — це однакове або подібне звучання закінчень слів."
      },
      task: {
        id: "k1-s05-rym",
        type: "single-choice",
        question: {
          pl: "Która para z wiersza to rym?",
          ua: "Яка пара з вірша є римою?"
        },
        options: [
          { id: "a", label: { pl: "czarna — ziarna", ua: "czarna — ziarna" } },
          { id: "b", label: { pl: "nocy — ptak", ua: "nocy — ptak" } },
          { id: "c", label: { pl: "sen — wiatr", ua: "sen — wiatr" } }
        ],
        answer: "a",
        hint: {
          pl: "Porównaj końcówki. -arna i -arna brzmią tak samo. „nocy” i „ptak” — nie.",
          ua: "Слухай кінець слова, не початок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„nocy” i „ptak” mają inne końcówki. Rym słychać na końcu: czarna / ziarna, ramiona / zagona, gaju / kraju, trawie / stawie.",
              ua: "Різні закінчення. Рима — на кінці слова."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "„sen” i „wiatr” nie brzmią podobnie na końcu. Szukaj par jak czarna–ziarna.",
              ua: "Не схожі закінчення."
            }
          }
        ],
        explanation: {
          pl: "Rym słychać na końcu wyrazu. W tym wierszu m.in. czarna–ziarna, ramiona–zagona, gaju–kraju, trawie–stawie.",
          ua: "Рима на кінці: czarna–ziarna і далі в вірші."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Epitet", ua: "Епітет" },
      promptPlace: "before",
      prompt: {
        pl: "Najpierw zobacz. Mówimy: las. Jaki las? → cichy las. Słowo „cichy” mówi coś o lesie. Takie określenie rzeczownika nazywamy EPITETEM.",
        ua: "Спочатку: ліс. Який ліс? → тихий ліс. «Тихий» каже щось про ліс. Це епітет."
      },
      text: {
        pl: [
          "Jeszcze jeden przykład: ciepły wiatr (jaki wiatr?).",
          "Na kartkówce wypisz cały zestaw: epitet + rzeczownik, np. cichy las — nie samo „cichy”."
        ],
        ua: [
          "Ще приклад: теплий вітер.",
          "На картатці пиши епітет + іменник, не лише «тихий»."
        ]
      },
      task: {
        id: "k1-s06-epitet",
        type: "multiple-choice",
        question: {
          pl: "Znajdź dwa epitety z naszego wiersza. Zaznacz zestawy epitet + rzeczownik.",
          ua: "Знайди два епітети. Познач пари епітет + іменник."
        },
        options: [
          { id: "a", label: { pl: "cicha noc", ua: "cicha noc" } },
          { id: "b", label: { pl: "cicha", ua: "cicha" } },
          { id: "c", label: { pl: "miękka trawa", ua: "miękka trawa" } },
          { id: "d", label: { pl: "ptak", ua: "ptak" } }
        ],
        answer: ["a", "c"],
        hint: {
          pl: "Pytanie „jaki / jaka / jakie?” przy rzeczowniku. Samo „cicha” to za mało. Sam „ptak” nie jest epitetem.",
          ua: "Питай: який? Одна лише «cicha» — замало."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„cicha” to dopiero połowa. Na kartkówce: cicha noc.",
              ua: "Пиши: cicha noc."
            }
          },
          {
            answer: "d",
            feedback: {
              pl: "„ptak” to rzeczownik bez określenia. Epitet mówi, JAKI jest rzeczownik.",
              ua: "Це іменник без означення."
            }
          }
        ],
        explanation: {
          pl: "Epitet + rzeczownik: cicha noc, czarna noc, ciepłe ramiona, ciemny gaj, ciepły sen, miękka trawa, cicha staw. Nie samo przymiotnik.",
          ua: "Епітет + іменник. Не сам прикметник."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Apostrofa", ua: "Апострофа" },
      formula: "O, rzeko moja!",
      promptPlace: "before",
      prompt: {
        pl: "Z T2 pamiętasz: apostrofa to bezpośredni zwrot do osoby, rzeczy, zjawiska lub innego odbiorcy. Czy tu ktoś tylko mówi O rzece, czy ZWRACA SIĘ do rzeki?",
        ua: "Апострофа — безпосереднє звертання. Тут говорять ПРО річку чи ДО річки?"
      },
      text: {
        pl: "Tu zwrot DO rzeki. Teraz znajdź apostrofę w naszym wierszu „Do nocy” i powiedz, do kogo (czego) jest ten zwrot.",
        ua: "Тепер знайди звертання у вірші «Do nocy» і скажи, до кого / до чого."
      },
      task: {
        id: "k1-s07-apostrofa",
        type: "single-choice",
        question: {
          pl: "Który fragment jest apostrofą — i do kogo (czego) zwraca się osoba mówiąca?",
          ua: "Який уривок — апострофа і до кого звертання?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "„O, nocy cicha, czarna,” — zwrot do nocy",
              ua: "Звертання до ночі"
            }
          },
          {
            id: "b",
            label: {
              pl: "„Ptak już śpi w ciemnym gaju,” — opis ptaka, nie zwrot",
              ua: "Опис птаха, не звертання"
            }
          },
          {
            id: "c",
            label: {
              pl: "„wiatr usnął w cichym kraju.” — zwrot do wiatru",
              ua: "Ніби до вітру"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj „O, …” i wołania. Osoba mówi DO nocy, nie tylko O nocy.",
          ua: "Шукай «O, …» — говорять ДО ночі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tu opis: ptak śpi. Nikt nie mówi „ptaku!”. Apostrofa jest na początku: O, nocy…",
              ua: "Опис, не звертання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wiatr jest opisany („usnął”). Osoba nie mówi „wietrze!”. Zwraca się do nocy.",
              ua: "Вітер описаний. Звертання — до ночі."
            }
          }
        ],
        explanation: {
          pl: "Apostrofa: osoba nie tylko mówi o nocy. Zwraca się do niej bezpośrednio („O, nocy…”). Adresat: noc.",
          ua: "Апострофа — звертання до ночі."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Nastrój", ua: "Настрій" },
      formula: "nastrój  →  ponieważ  →  fragment",
      promptPlace: "before",
      prompt: {
        pl: "Nastrój to atmosfera i emocje obecne w utworze. Słowa pomocnicze: pogodny · spokojny · radosny · smutny · tajemniczy · niepokojący. Nie zgaduj — wskaż fragment.",
        ua: "Настрій — атмосфера твору. Не вгадуй: покажи уривок."
      },
      task: {
        id: "k1-s08-nastroj",
        type: "single-choice",
        question: {
          pl: "Wybierz nastrój + fragment, który to potwierdza.",
          ua: "Вибери настрій + уривок-доказ."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "spokojny  →  ponieważ  →  „niosą sen do zagona” / „Ptak już śpi…”",
              ua: "спокійний  →  бо  →  сон, птах спить"
            }
          },
          {
            id: "b",
            label: {
              pl: "radosny, żartobliwy  →  ponieważ  →  „O, nocy cicha, czarna,”",
              ua: "веселий  →  бо  →  ніч чорна"
            }
          },
          {
            id: "c",
            label: {
              pl: "niepokojący  →  ponieważ  →  „miękkiej trawie”",
              ua: "тривожний  →  бо  →  м’яка трава"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Co czujesz przy śnie, śpiącym ptaku, ciepłych ramionach nocy? To cisza i spokój, nie żart i nie strach.",
          ua: "Сон, птах спить, теплі обійми — спокій."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "„Cicha, czarna” to nie żart. Osoba prosi noc, by okryła pola. Nastrój spokojny, nie radosno-żartobliwy.",
              ua: "Це не жарт. Спокій, не веселощі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Miękka trawa nie straszy. Szukaj snu, ciszy, ciepła — to spokój.",
              ua: "М’яка трава не страшить. Це спокій."
            }
          }
        ],
        explanation: {
          pl: "Nastrój spokojny, bo noc niesie sen, ptak śpi, wiatr usnął. Twój nastrój po przeczytaniu może być inny — to reakcja. Na kartkówce pytają o nastrój UTWORU i dowód w tekście.",
          ua: "Спокійний настрій твору: сон і тиша. Доказ у тексті."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy potrafisz już czytać wiersz jak na kartkówce?", ua: "Чи вмієш уже читати вірш як на картатці?" },
      promptPlace: "before",
      prompt: {
        pl: "Ten sam wiersz. Na kartkówce pytania idą po kolei — tu jedna karta: zaznacz wszystkie prawdziwe zdania.",
        ua: "Той самий вірш. Познач усі правдиві речення."
      },
      text: { pl: WIERSZ1 },
      items: [
        { pl: "Kto mówi? W jakiej sytuacji?", ua: "Хто говорить? У якій ситуації?" },
        { pl: "Jaki nastrój + dowód z tekstu", ua: "Настрій + доказ" },
        { pl: "Epitet + rzeczownik · apostrofa · rym · liczba wersów i zwrotek", ua: "Епітет · апострофа · рима · верси і строфи" }
      ],
      task: {
        id: "k1-s09-pakiet",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie zdania prawdziwe o tym wierszu.",
          ua: "Познач усі правдиві речення."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Osoba mówiąca zwraca się do nocy; jest wieczór / senna cisza.",
              ua: "Особа звертається до ночі; вечір, тиша."
            }
          },
          {
            id: "b",
            label: {
              pl: "Wiersz ma 4 zwrotki i 2 wersy.",
              ua: "4 строфи і 2 верси."
            }
          },
          {
            id: "c",
            label: {
              pl: "Nastrój spokojny, bo np. „niosą sen do zagona”.",
              ua: "Спокійний настрій: «niosą sen…»."
            }
          },
          {
            id: "d",
            label: {
              pl: "Epitet + rzeczownik: np. cicha noc albo miękka trawa.",
              ua: "Епітет + іменник: cicha noc / miękka trawa."
            }
          },
          {
            id: "e",
            label: {
              pl: "Apostrofa do ptaka, bo ptak śpi.",
              ua: "Апострофа до птаха."
            }
          },
          {
            id: "f",
            label: {
              pl: "Rym: czarna — ziarna; 8 wersów, 2 zwrotki.",
              ua: "Рима czarna–ziarna; 8 версів, 2 строфи."
            }
          }
        ],
        answer: ["a", "c", "d", "f"],
        hint: {
          pl: "Wróć do wiersza. Odrzuć to, czego nie widać w tekście (4 zwrotki; apostrofa do ptaka).",
          ua: "Дивись у текст. Не 4 строфи. Не звертання до птаха."
        },
        explanation: {
          pl: "Prawda: głos do nocy, spokojny nastrój z dowodem, epitet + rzeczownik, rym, 8 wersów / 2 zwrotki. Fałsz: 4 zwrotki oraz apostrofa do ptaka.",
          ua: "Правда: ніч, спокій, епітет, рима, 8/2. Не до птаха і не 4 строфи."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Próbna mini-kartkówka", ua: "Пробна міні-картатка" },
      formula: "EduMost  ·  Do deszczu",
      promptPlace: "after",
      prompt: {
        pl: "Nowy wiersz. Widzisz go pierwszy raz. Mniej podpowiedzi. Zaznacz wszystkie prawdziwe odpowiedzi — jak na kartkówce.",
        ua: "Новий вірш. Уперше. Познач усі правдиві відповіді."
      },
      text: { pl: WIERSZ2 },
      task: {
        id: "k1-s10-proba",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystko, co zgadza się z tym wierszem.",
          ua: "Познач усе, що правда про цей вірш."
        },
        options: [
          {
            id: "a",
            label: { pl: "8 wersów, 2 zwrotki", ua: "8 версів, 2 строфи" }
          },
          {
            id: "b",
            label: { pl: "Para rymów: złoty — płoty", ua: "Рима: złoty — płoty" }
          },
          {
            id: "c",
            label: {
              pl: "Nastrój smutny i groźny, bo jest szkoła",
              ua: "Сумний і страшний, бо школа"
            }
          },
          {
            id: "d",
            label: {
              pl: "Epitet + rzeczownik: zielone płoty (albo drobny deszcz)",
              ua: "Епітет + іменник: zielone płoty / drobny deszcz"
            }
          },
          {
            id: "e",
            label: {
              pl: "Apostrofa: „O, deszczu drobny, złoty,” — zwrot do deszczu",
              ua: "Апострофа до дощу"
            }
          },
          {
            id: "f",
            label: {
              pl: "Osoba mówiąca zwraca się do stodoły",
              ua: "Звертання до стодоли"
            }
          }
        ],
        answer: ["a", "b", "d", "e"],
        hint: {
          pl: "Policz linijki i bloki. Posłuchaj końcówek. Szukaj „O, …”. Szkoła w wierszu nie znaczy, że nastrój jest groźny.",
          ua: "Поліч рядки. Слухай кінці. Шукай «O, …». Школа ≠ страх."
        },
        mistakes: [
          {
            answer: "c",
            feedback: {
              pl: "Szkoła jest w obrazie (dach, okna), ale deszcz pada miękko, ogród pachnie. To raczej spokój, nie groza.",
              ua: "Дощ м’який, сад пахне. Спокій, не жах."
            }
          },
          {
            answer: "f",
            feedback: {
              pl: "Stodoła jest opisana. Zwrot jest do deszczu: „O, deszczu…”.",
              ua: "Стодола в описі. Звертання — до дощу."
            }
          }
        ],
        explanation: {
          pl: "6 umiejętności: 8 wersów / 2 zwrotki; rym złoty–płoty (też stodoły–szkoły, trawie–stawie, dworem–borem); nastrój spokojny (miękko, ogród, cicho); epitet + rzeczownik; apostrofa do deszczu. Nie zgaduj — szukaj w tekście.",
          ua: "6 умінь на новому вірші. Не вгадуй — шукай у тексті."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Gotowy?", ua: "Готовий?" },
      visual: {
        kind: "image-placeholder",
        file: "./img/do-nocy-schemat.jpg",
        url: "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/do-nocy-schemat.jpg?raw=true",
        alt: {
          pl: "Schemat wiersza „Do nocy”: wers, zwrotka, apostrofa, 8 wersów",
          ua: "Схема вірша «Do nocy»: верс, строфа, апострофа"
        },
        title: {
          pl: "Notatka naoczna do zeszytu — „Do nocy”",
          ua: "Наочна нотатка до зошита — «Do nocy»"
        },
        prompt: {
          pl: "Edukacyjna infografika 16:9: wiersz „Do nocy” z etykietami PL: WERS, ZWROTKA (strofa), APOSTROFA, I/II zwrotka po 4 wersy, 8 wersów. Nocny pejzaż, bez angielskiego, bez logotypów.",
          ua: "Інфографіка вірша «Do nocy»: верс, строфа, апострофа."
        }
      },
      promptPlace: "before",
      prompt: {
        pl: "To ściąga do zeszytu: widać wers, zwrotki i apostrofę. Na kartkówce pamiętaj kolejność. Nie zgaduj. Szukaj dowodu w tekście.",
        ua: "Це наочна шпаргалка. На картатці: не вгадуй. Шукай доказ у тексті."
      },
      items: [
        mark("Policz wersy.", ["wersy"], "Поліч верси.", ["верси"]),
        mark("Zobacz, ile jest zwrotek.", ["zwrotek"], "Подивись, скільки строф.", ["строф"]),
        mark("Posłuchaj końcówek — znajdź rymy.", ["rymy"], "Послухай закінчення — знайди рими.", ["рими"]),
        mark("Szukaj określeń rzeczowników — epitety (epitet + rzeczownik).", ["epitety"], "Шукай означення іменників — епітети.", ["епітети"]),
        mark("Szukaj bezpośrednich zwrotów — apostrofa.", ["apostrofa"], "Шукай звертання — апострофа.", ["апострофа"]),
        mark("Określ nastrój i pokaż, skąd to wiesz.", ["nastrój"], "Назви настрій і покажи, звідки це знаєш.", ["настрій"])
      ],
      text: {
        pl: [
          "CO WARTO MIEĆ W ZESZYCIE (krótko):",
          "Wers — jedna linijka w wierszu.",
          "Zwrotka (strofa) — część wiersza złożona z wersów.",
          "Rym — jednakowe lub podobne końcówki wyrazów.",
          "Epitet — określenie rzeczownika (jaki?); pisz epitet + rzeczownik.",
          "Apostrofa — bezpośredni zwrot do odbiorcy.",
          "Nastrój — atmosfera utworu + fragment jako dowód."
        ],
        ua: [
          "У зошит коротко: верс, строфа, рима, епітет + іменник, апострофа, настрій + доказ."
        ]
      },
      task: {
        id: "k1-s11-zeszyt",
        type: "single-choice",
        question: {
          pl: "Zapisałem najważniejsze terminy w zeszycie (nie cały wiersz).",
          ua: "Записав найважливіші терміни в зошит (не весь вірш)."
        },
        options: [
          { id: "a", label: { pl: "Tak — mam krótką notatkę", ua: "Так — маю коротку нотатку" } },
          { id: "b", label: { pl: "Jeszcze nie", ua: "Ще ні" } }
        ],
        answer: "a",
        hint: {
          pl: "Sześć krótkich linii. Nie przepisuj obu wierszy.",
          ua: "Шість коротких рядків. Не переписуй вірші."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To sześć krótkich definicji u góry. Potem zaznacz „Tak”.",
              ua: "Шість коротких означень. Потім «Так»."
            }
          }
        ],
        explanation: {
          pl: "Koniec przygotowania. Na kartkówce może być inny wiersz — ten sam sposób pracy. Wróć strzałką do Kartkówki i sprawdzianów.",
          ua: "Кінець підготовки. На картатці може бути інший вірш — той самий спосіб."
        }
      }
    }
  ]
};
