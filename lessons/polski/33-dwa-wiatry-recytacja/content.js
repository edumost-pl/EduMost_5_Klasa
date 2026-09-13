function emT33(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T33 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT33(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T33 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 65–66  ·  Lekcja 33  ·  obrazy, przysłowie, recytacja",
    promptPlace: "before",
    prompt: {
      pl: "Wiersz *Dwa wiatry* znasz z lekcji 32 (treść, dwaj bohaterowie, glosy). Dziś *nowe*: obrazy poetyckie sadu, środki (uosobienie, epitet, onomatopeja), przysłowie, notatka, recytacja i twoje doświadczenie. Wiersza nadal nie tłumaczymy. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Вірш *Dwa wiatry* знаєш з уроку 32 (зміст, два герої, глоси). Сьогодні *нове*: поетичні образи саду, засоби (персоніфікація, епітет, ономатопея), прислів’я, нотатка, декламація і твій досвід. Вірш не перекладаємо. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "omówię, jak zmienia się *poetycki obraz sadu*;", ua: "опишу, як змінюється *поетичний образ саду*;" },
      { pl: "wskażę *uosobienie*, *epitet* i *onomatopeję*;", ua: "вкажу *персоніфікацію*, *епітет* і *ономатопею*;" },
      { pl: "dobiorę przysłowie *Kto z kim przestaje, takim się staje*;", ua: "підберу прислів’я *Kto z kim przestaje, takim się staje*;" },
      { pl: "zredaguję krótką *notatkę* o bohaterach;", ua: "напишу коротку *нотатку* про героїв;" },
      { pl: "przygotuję *recytację* (ciszej / głośniej) i zestawię utwór z własnym doświadczeniem.", ua: "підготую *декламацію* (тихіше / гучніше) і зіставлю твір із власним досвідом." }
    ],
    task: {
      id: "t33-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opisać, jak sad z cichego staje się rozbawiony — i z powrotem.", ua: "Описати, як сад із тихого стає веселим — і назад." } },
        { id: "b", label: { pl: "Wybrać przysłowie, które pasuje do zachowania wiatrów.", ua: "Вибрати прислів’я, яке пасує до поведінки вітрів." } },
        { id: "c", label: { pl: "Tylko na nowo ułożyć tabelę «wiatr w polu / w sadzie» z lekcji 32 — i nic więcej.", ua: "Лише знову скласти таблицю «вітер у полі / у саду» з уроку 32 — і більше нічого." } },
        { id: "d", label: { pl: "Przygotować recytację: cicho dla sadu, dynamicznie dla pędziwiatru.", ua: "Підготувати декламацію: тихо для саду, динамічно для pędziwiatru." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Tabela portretów była wczoraj. Co jest na s. 66: zad. 4, 5, 6?",
        ua: "Таблиця портретів була вчора. Що на с. 66: завд. 4, 5, 6?"
      },
      explanation: {
        pl: "Dziś: obrazy sadu, przysłowie, recytacja, notatka. Portrety z lekcji 32 wolno przypomnieć, ale to nie jedyny cel.",
        ua: "Сьогодні: образи саду, прислів’я, декламація, нотатка. Портрети з уроку 32 можна згадати, але це не єдина мета."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Rozgrzewka · pędziwiatr", ua: "Розминка · pędziwiatr" },
    formula: "powtórka  ·  inne zadanie niż lekcja 32",
    promptPlace: "before",
    prompt: {
      pl: "To *nie* druga tabela z lekcji 32. Tabeli nie składamy od nowa. Dostajesz *jeden fragment* — i mówisz, *który* to wiatr. Potem nowe pytanie tej godziny: *jak zmienia się sad*.",
      ua: "Це *не* друга таблиця з уроку 32. Таблицю не складаємо знову. Маєш *один уривок* — і кажеш, *який* це вітер. Потім нове питання цієї години: *як змінюється сад*."
    },
    text: {
      pl: [
        "Fragment: «Piknął kozła, płackiem spadł, Skoczył, zawiał, zaszybował, Świdrem w górę zakołował».",
        "Wczoraj: taki zestaw czynności = *wiatr w polu*."
      ],
      ua: [
        "Уривок: «Piknął kozła, płackiem spadł, Skoczył, zawiał, zaszybował, Świdrem w górę zakołował».",
        "Учора: такий набір дій = *вітер у полі*."
      ]
    },
    task: {
      id: "t33-s02-rozgrzewka",
      type: "single-choice",
      question: {
        pl: "Ten fragment opisuje:",
        ua: "Цей уривок описує:"
      },
      options: [
        { id: "a", label: { pl: "wiatr w polu — pędziwiatr", ua: "вітер у полі — pędziwiatr" } },
        { id: "b", label: { pl: "wiatr w sadzie, gdy jeszcze pieści liście i mdleje", ua: "вітер у саду, коли ще пестить листя і мліє" } },
        { id: "c", label: { pl: "Heliosa z lekcji 27", ua: "Геліоса з уроку 27" } }
      ],
      answer: "a",
      hint: {
        pl: "Kto piknął kozła i zakołował świdrem — sad czy pole?",
        ua: "Хто зробив сальто і закрутився свердлом — сад чи поле?"
      },
      explanation: {
        pl: "To pędziwiatr z pola. Cichy wiatr *grał, pieścił, mdlał*. Helios — inna lekcja. Dziś idziemy w *obrazy sadu*.",
        ua: "Це pędziwiatr з поля. Тихий вітер *grał, pieścił, mdlał*. Геліос — інший урок. Сьогодні йдемо в *образи саду*."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Obrazy poetyckie", ua: "Поетичні образи" },
    formula: "s. 65  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: utwór składa się z kilku *obrazów poetyckich*. Zrób tytuły. *Obraz poetycki* to fragment, który możesz «zobaczyć»: miejsce + co się tam dzieje + nastrój. Nie myl z *bohaterem* (to postać).",
      ua: "Підручник: твір складається з кількох *поетичних образів*. Дай назви. *Поетичний образ* — уривок, який можна «побачити»: місце + що там діється + настрій. Не плутай із *героєм* (це постать)."
    },
    items: [
      { pl: "Obraz 1: *wiatr w polu* — pędzi, skacze, hałas.", ua: "Образ 1: *вітер у полі* — мчить, скаче, галас." },
      { pl: "Obraz 2: *wiatr w sadzie* — cichuteńko pieści liście.", ua: "Образ 2: *вітер у саду* — тихенько пестить листя." },
      { pl: "Obraz 3: *spotkanie w sadzie* — kwiat jak śnieg, sad parska śmiechem.", ua: "Образ 3: *зустріч у саду* — цвіт як сніг, сад вибухає сміхом." },
      { pl: "Obraz 4: *wiatry w polu razem* — wiatraki, świst, łobuzowanie; sad znowu cichy.", ua: "Образ 4: *вітри в полі разом* — вітряки, свист, бешкет; сад знову тихий." }
    ],
    task: {
      id: "t33-s03-obrazy",
      type: "single-choice",
      question: {
        pl: "«Sfrunął śniegiem z wiśni kwiat, Parsknął śmiechem cały sad» to przede wszystkim obraz:",
        ua: "«Sfrunął śniegiem z wiśni kwiat, Parsknął śmiechem cały sad» — це насамперед образ:"
      },
      options: [
        { id: "a", label: { pl: "spotkania w sadzie (sad się budzi, śmieje)", ua: "зустрічі в саду (сад прокидається, сміється)" } },
        { id: "b", label: { pl: "samego cichego mdlenia wiatru na początku", ua: "самого тихого мління вітру на початку" } },
        { id: "c", label: { pl: "odmiany rzeczownika piasek", ua: "відмінювання іменника piasek" } }
      ],
      answer: "a",
      hint: {
        pl: "Kwiat wiśni i śmiech sadu — gdzie to się dzieje? Na polu z wiatrakami czy w sadzie?",
        ua: "Цвіт вишні і сміх саду — де це діється? У полі з вітряками чи в саду?"
      },
      explanation: {
        pl: "To obraz sadu w chwili spotkania: kwiat fruwa, sad się śmieje. Mdlenie było wcześniej. Piasek — lekcje 29–31.",
        ua: "Це образ саду в мить зустрічі: цвіт летить, сад сміється. Мління було раніше. Piasek — уроки 29–31."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Sad się zmienia", ua: "Сад змінюється" },
    formula: "s. 66  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Powiedz, jak się zmienia poetycki obraz sadu i *od czego to zależy*. Odsłoń dwa kadry. Potem w zadaniu 4 podręcznik każe znaleźć fragmenty i nazwać środki.",
      ua: "Скажи, як змінюється поетичний образ саду і *від чого це залежить*. Відкрий два кадри. Потім у завданні 4 підручник просить знайти уривки і назвати засоби."
    },
    reveal: true,
    steps: [
      {
        visual: vizGhT33("t33-sad-cichy.png", {
          prompt: "Cichy senny sad.",
          alt: { pl: "Cichy, senny sad zanim wpadnie pędziwiatr.", ua: "Тихий сонний сад, перш ніж увірветься pędziwiatr." }
        }),
        text: {
          pl: [
            "Pierwszy obraz sadu: *cichy, senny, spokojny*. Fragmenty: «cichuteńko, leciuteńko», «szumiący senny sad», na końcu «A w sadzie cicho, cicho…»."
          ],
          ua: [
            "Перший образ саду: *тихий, сонний, спокійний*. Уривки: «cichuteńko, leciuteńko», «szumiący senny sad», наприкінці «A w sadzie cicho, cicho…»."
          ]
        }
      },
      {
        visual: vizGhT33("t33-sad-wesoly.png", {
          prompt: "Sad parska śmiechem.",
          alt: { pl: "Sad rozbawiony: kwiat wiśni fruwa, drzewa jakby się śmiały.", ua: "Сад веселий: цвіт вишні летить, дерева ніби сміються." }
        }),
        text: {
          pl: [
            "Drugi obraz: sad *rozbawiony, śmiejący się, wesoły*. «Sfrunął śniegiem z wiśni kwiat, Parsknął śmiechem cały sad». Zależy to od *wizyty wiatru z pola*."
          ],
          ua: [
            "Другий образ: сад *грайливий, сміється, веселий*. «Sfrunął śniegiem z wiśni kwiat, Parsknął śmiechem cały sad». Це залежить від *візиту вітру з поля*."
          ]
        }
      }
    ],
    task: {
      id: "t33-s04-sad",
      type: "true-false",
      question: {
        pl: "Czy obraz sadu zależy od tego, który wiatr w nim jest i jak się zachowuje?",
        ua: "Чи образ саду залежить від того, який вітер у ньому є і як він поводиться?"
      },
      answer: true,
      hint: {
        pl: "Gdy w sadzie tylko cichy wiatr — senny. Gdy wpada pędziwiatr — śmiech. Potem znowu cicho.",
        ua: "Коли в саду лише тихий вітер — сонний. Коли вривається pędziwiatr — сміх. Потім знову тихо."
      },
      explanation: {
        pl: "Tak. Sad jest tłem i «bohaterem miejsca»: jego nastrój idzie za wiatrami.",
        ua: "Так. Сад — тло і «герой місця»: його настрій іде за вітрами."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Bank wyrazów · sad", ua: "Банк слів · сад" },
    formula: "s. 66  ·  zad. 4c",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij wniosek podanymi wyrazami. Bank: *cichy · niespokojny · rozbawiony · szumiący · senny · spokojny · śmiejący się · wesoły*. W zeszycie możesz przepisać ramkę z podręcznika. Tu sprawdzamy, które słowa pasują do *którego* obrazu.",
      ua: "Доповни висновок поданими словами. Банк: *cichy · niespokojny · rozbawiony · szumiący · senny · spokojny · śmiejący się · wesoły*. У зошиті можна переписати рамку з підручника. Тут перевіряємо, які слова пасують до *якого* образу."
    },
    items: [
      { pl: "Sad na początku: *cichy, senny, spokojny* (może *szumiący*, ale spokojnie).", ua: "Сад на початку: *cichy, senny, spokojny* (може *szumiący*, але спокійно)." },
      { pl: "Sad podczas wizyty wiatru z pola: *rozbawiony, śmiejący się, wesoły, niespokojny*.", ua: "Сад під час візиту вітру з поля: *rozbawiony, śmiejący się, wesoły, niespokojny*." }
    ],
    task: {
      id: "t33-s05-bank",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy NA PEWNO pasują do sadu *w chwili spotkania wiatrów*? Zaznacz wszystkie pewne.",
        ua: "Які слова НАПЕВНО пасують до саду *у мить зустрічі вітрів*? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "rozbawiony, śmiejący się, wesoły", ua: "rozbawiony, śmiejący się, wesoły" } },
        { id: "b", label: { pl: "tylko senny i mdlejący — jak na samym początku, bez zmiany", ua: "лише senny і той, що мліє — як на самому початку, без зміни" } },
        { id: "c", label: { pl: "niespokojny (bo wpadł pędziwiatr)", ua: "niespokojny (бо ввірвався pędziwiatr)" } },
        { id: "d", label: { pl: "piasek w dopełniaczu", ua: "piasek у родовому відмінку" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "«Parsknął śmiechem cały sad». Czy to senne mdlenie?",
        ua: "«Parsknął śmiechem cały sad». Чи це сонне мління?"
      },
      explanation: {
        pl: "Spotkanie = rozbawiony, śmiejący się, wesoły, niespokojny. Senny był wcześniej. Piasek odpada.",
        ua: "Зустріч = розбавлений, сміється, веселий, неспокійний. Сонний був раніше. Piasek відпадає."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Uosobienie", ua: "Персоніфікація" },
    formula: "środek  ·  nie apostrofa",
    promptPlace: "before",
    prompt: {
      pl: "*Uosobienie* (уособлення / персоніфікація): rzecz, zjawisko albo zwierzę zachowuje się jak *człowiek*. Tu wiatry *grają, pieścią liście, biorą brata za kamrata, łobuzują*. Sad *parska śmiechem*. To nie *apostrofa* z lekcji 2 — nikt nie woła «O, wietrze!».",
      ua: "*Уособлення* (персоніфікація): річ, явище або тварина поводиться як *людина*. Тут вітри *грають, пестять, беруть брата за kamrata, бешкетують*. Сад *вибухає сміхом*. Це не *апострофа* з уроку 2 — ніхто не кличе «О, вітре!»."
    },
    items: [
      { pl: "Wiatr *gra* w sadzie, *pieści* liście, *mdleje* — jak ktoś żywy.", ua: "Вітер *грає* в саду, *пестить* листя, *мліє* — як жива істота." },
      { pl: "Wziął brata *za kamrata* — przyjaźń ludzi.", ua: "Взяв брата *за kamrata* — людська дружба." },
      { pl: "Sad *parsknął śmiechem* — sad się śmieje.", ua: "Сад *parsknął śmiechem* — сад сміється." }
    ],
    task: {
      id: "t33-s06-uosobienie",
      type: "single-choice",
      question: {
        pl: "Który przykład z *tego* wiersza to uosobienie?",
        ua: "Який приклад із *цього* вірша — уособлення?"
      },
      options: [
        { id: "a", label: { pl: "Sad parsknął śmiechem / wiatr wziął brata za kamrata.", ua: "Сад parsknął śmiechem / вітер узяв брата за kamrata." } },
        { id: "b", label: { pl: "«O, wietrze, przybądź!» — zwrot do wiatru (apostrofa).", ua: "«О, вітре, прийди!» — звертання до вітру (апострофа)." } },
        { id: "c", label: { pl: "Antonimy jasny – ciemny.", ua: "Антоніми jasny – ciemny." } }
      ],
      answer: "a",
      hint: {
        pl: "Czy w tekście Tuwima ktoś woła «O, wietrze»? Czy sad się śmieje?",
        ua: "Чи в тексті Тувіма хтось кличе «О, вітре»? Чи сад сміється?"
      },
      explanation: {
        pl: "Uosobienie: sad i wiatry jak ludzie. Apostrofy w tym wierszu nie ma. Antonimy były na lekcji 32.",
        ua: "Уособлення: сад і вітри як люди. Апострофи в цьому вірші немає. Антоніми були на уроці 32."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Epitet i onomatopeja", ua: "Епітет і ономатопея" },
    formula: "s. 66  ·  zad. 4b + 6a",
    promptPlace: "before",
    prompt: {
      pl: "*Epitet* = określenie, które maluje cechę (*senny sad*, *głupkowate śmigi*). *Onomatopeja* = wyraz, który *naśladuje dźwięk* (*szeleścił*, *świst*). Recytacja w zad. 6 każe takie słowa powiedzieć tak, by *słychać* wiatr.",
      ua: "*Епітет* = означення, яке малює рису (*senny sad*, *głupkowate śmigi*). *Ономатопея* = слово, яке *наслідує звук* (*szeleścił*, *świst*). Декламація в завд. 6 просить сказати такі слова так, щоб *чути* вітер."
    },
    items: [
      { pl: "Epitet: *szumiący senny sad*, *głupkowate śmigi*.", ua: "Епітет: *szumiący senny sad*, *głupkowate śmigi*." },
      { pl: "Onomatopeja: *szeleścił*, *świst*.", ua: "Ономатопея: *szeleścił*, *świst*." },
      { pl: "Porównanie jest słabe: kwiat *śniegiem* sfruwa (jak śnieg). Nie naciągamy metafory na siłę — serce lekcji to uosobienie.", ua: "Порівняння слабке: цвіт *śniegiem* злітає (як сніг). Не натягуємо метафору силоміць — серце уроку це уособлення." }
    ],
    task: {
      id: "t33-s07-srodki",
      type: "multiple-choice",
      question: {
        pl: "Które rozpoznania NA PEWNO są poprawne w *tym* wierszu? Zaznacz wszystkie pewne.",
        ua: "Які розпізнання НАПЕВНО правильні в *цьому* вірші? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "*szeleścił*, *świst* — onomatopeja (dźwięk wiatru i liści).", ua: "*szeleścił*, *świst* — ономатопея (звук вітру і листя)." } },
        { id: "b", label: { pl: "*senny sad*, *głupkowate śmigi* — epitety.", ua: "*senny sad*, *głupkowate śmigi* — епітети." } },
        { id: "c", label: { pl: "Cały wiersz to apostrofa «O, wietrze!», jak *Preludium* z lekcji 2.", ua: "Весь вірш — апострофа «О, вітре!», як *Preludium* з уроку 2." } },
        { id: "d", label: { pl: "Wiatry jak ludzie — uosobienie.", ua: "Вітри як люди — уособлення." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Czy w tekście jest wołacz do wiatru? Czy liście szeleściły?",
        ua: "Чи в тексті є кличний до вітру? Чи листя шелестіло?"
      },
      explanation: {
        pl: "Onomatopeja, epitet, uosobienie — tak. Apostrofy tu nie ma (to było *Preludium*).",
        ua: "Ономатопея, епітет, уособлення — так. Апострофи тут немає (це було *Preludium*)."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Przysłowie", ua: "Прислів’я" },
    formula: "s. 66  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Spośród podanych przysłów wybierz to, które pasuje do utworu. Uzasadnij. Temat godzin 32–33 w programie brzmi właśnie tym przysłowiem.",
      ua: "З поданих прислів’їв вибери те, що пасує до твору. Обґрунтуй. Тема годин 32–33 у програмі звучить саме цим прислів’ям."
    },
    items: [
      { pl: "*Kto z kim przestaje, takim się staje.* — cichy wiatr zaczyna łobuzować jak pędziwiatr.", ua: "*Kto z kim przestaje, takim się staje.* — тихий вітер починає бешкетувати як pędziwiatr." },
      { pl: "*Kto pod kim dołki kopie, sam w nie wpada.* — o podstępie, nie o przyjaźni wiatrów.", ua: "*Kto pod kim dołki kopie, sam w nie wpada.* — про підступ, не про дружбу вітрів." },
      { pl: "*Kto sieje wiatr, ten zbiera burzę.* — o karze za złe, nie o dwóch braciach-kamratach.", ua: "*Kto sieje wiatr, ten zbiera burzę.* — про кару за зло, не про двох братів-kamratів." },
      { pl: "*Raz na wozie, raz pod wozem.* — o zmiennym szczęściu, nie o naśladowaniu kolegi.", ua: "*Raz na wozie, raz pod wozem.* — про мінливу вдачу, не про наслідування друга." }
    ],
    task: {
      id: "t33-s08-przyslowie",
      type: "single-choice",
      question: {
        pl: "Które przysłowie PASUJE do zachowania bohaterów?",
        ua: "Яке прислів’я ПАСУЄ до поведінки героїв?"
      },
      options: [
        { id: "a", label: { pl: "Kto z kim przestaje, takim się staje.", ua: "Kto z kim przestaje, takim się staje." } },
        { id: "b", label: { pl: "Kto pod kim dołki kopie, sam w nie wpada.", ua: "Kto pod kim dołki kopie, sam w nie wpada." } },
        { id: "c", label: { pl: "Raz na wozie, raz pod wozem.", ua: "Raz na wozie, raz pod wozem." } }
      ],
      answer: "a",
      hint: {
        pl: "Cichy wiatr *bierze brata za kamrata* i zaczyna łobuzować. Które przysłowie mówi o towarzystwie?",
        ua: "Тихий вітер *бере брата за kamrata* і починає бешкетувати. Яке прислів’я про товариство?"
      },
      explanation: {
        pl: "Pasuje *Kto z kim przestaje, takim się staje*. To tytuł tematów 32 i 33 w rozkładzie GWO.",
        ua: "Пасує *Kto z kim przestaje, takim się staje*. Це назва тем 32 і 33 у розкладі GWO."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Notatka", ua: "Нотатка" },
    formula: "s. 66  ·  redagujemy",
    promptPlace: "before",
    prompt: {
      pl: "Program: *redagujesz notatkę*. W zeszycie 4–6 zdań po polsku. Nie wklejasz tu całego wypracowania — sprawdzamy, *co musi być* w notatce.",
      ua: "Програма: *пишеш нотатку*. У зошиті 4–6 речень польською. Сюди не вставляєш увесь твір — перевіряємо, *що має бути* в нотатці."
    },
    items: [
      { pl: "Autor i tytuł: Julian Tuwim, *Dwa wiatry*.", ua: "Автор і назва: Julian Tuwim, *Dwa wiatry*." },
      { pl: "Bohaterowie: wiatr w polu (pędziwiatr) i wiatr w sadzie (cichy).", ua: "Герої: вітер у полі (pędziwiatr) і вітер у саду (тихий)." },
      { pl: "Zmiana: po spotkaniu cichy wiatr łobuzuje jak brat.", ua: "Зміна: після зустрічі тихий вітер бешкетує як брат." },
      { pl: "Przysłowie: *Kto z kim przestaje, takim się staje.*", ua: "Прислів’я: *Kto z kim przestaje, takim się staje.*" }
    ],
    task: {
      id: "t33-s09-notatka",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO powinno być w notatce o tym wierszu? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО має бути в нотатці про цей вірш? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Tytuł, autor, dwaj bohaterowie i ich zmiana.", ua: "Назва, автор, два герої і їхня зміна." } },
        { id: "b", label: { pl: "Przysłowie, które pasuje do zachowania wiatrów.", ua: "Прислів’я, яке пасує до поведінки вітрів." } },
        { id: "c", label: { pl: "Tylko odmiana słowa piasek przez przypadki.", ua: "Лише відміна слова piasek за відмінками." } },
        { id: "d", label: { pl: "Jedno zdanie, że sad bywa cichy, a bywa rozbawiony.", ua: "Одне речення, що сад буває тихим, а буває веселим." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Notatka jest o wierszu, nie o tabeli przypadków z lekcji 30.",
        ua: "Нотатка про вірш, не про таблицю відмінків з уроку 30."
      },
      explanation: {
        pl: "Notatka: autor, tytuł, bohaterowie, zmiana, sad, przysłowie. Piasek tu nie pasuje.",
        ua: "Нотатка: автор, назва, герої, зміна, сад, прислів’я. Piasek сюди не пасує."
      }
    }
  },
  {
    type: "practice",
    heading: { pl: "Recytacja · wzorzec", ua: "Декламація · зразок" },
    formula: "s. 66  ·  zad. 6  ·  nagranie",
    promptPlace: "before",
    prompt: {
      pl: "Posłuchaj nagrania jeszcze raz — to *wzorzec*. Potem ćwicz z tekstem. Podręcznik: znajdź wyrazy naśladujące szum; czytaj *ciszej, wolniej* albo *głośniej, szybciej*. W grupach: jedni to wiatr z pola, drudzy — z sadu. Wiersza nie tłumaczymy.",
      ua: "Послухай запис ще раз — це *зразок*. Потім тренуйся з текстом. Підручник: знайди слова, що наслідують шум; читай *тихіше, повільніше* або *гучніше, швидше*. У групах: одні — вітер з поля, інші — з саду. Вірш не перекладаємо."
    },
    reveal: true,
    steps: [
      {
        formula: "ciszej, wolniej, delikatniej",
        text: {
          pl: [
            "Cichuteńko, leciuteńko,",
            "Liście pieścił i szeleścił,",
            "Mdlał…",
            " ",
            "A w sadzie cicho, cicho…"
          ]
        }
      },
      {
        formula: "głośniej, szybciej, dynamiczniej",
        text: {
          pl: [
            "Jeden wiatr – pędziwiatr!",
            "Piknął kozła, płackiem spadł,",
            "Skoczył, zawiał, zaszybował,",
            "Świdrem w górę zakołował",
            " ",
            "W prawo, w lewo, świst, podrygi,",
            "Łobuzują, pal je licho!…"
          ]
        }
      }
    ],
    task: {
      id: "t33-s10-recytacja",
      type: "single-choice",
      question: {
        pl: "Jak oddać głosem wiatr *w sadzie* na początku wiersza?",
        ua: "Як голосом передати вітер *у саду* на початку вірша?"
      },
      options: [
        { id: "a", label: { pl: "Ciszej, wolniej, delikatniej (pieścił, szeleścił, mdlał).", ua: "Тихіше, повільніше, ніжніше (pieścił, szeleścił, mdlał)." } },
        { id: "b", label: { pl: "Cały czas krzykiem, jak pędziwiatr od pierwszej linijki.", ua: "Увесь час криком, як pędziwiatr від першого рядка." } },
        { id: "c", label: { pl: "Szeptem recytować tabelę przypadków.", ua: "Пошепки декламувати таблицю відмінків." } }
      ],
      answer: "a",
      hint: {
        pl: "Zad. 6b: fragmenty ciszej / głośniej. Sad na starcie to który zestaw?",
        ua: "Завд. 6b: уривки тихіше / гучніше. Сад на старті — який набір?"
      },
      explanation: {
        pl: "Sad: cicho i wolno. Pole / łobuzowanie: głośno i szybko. Przypadki nie należą do recytacji.",
        ua: "Сад: тихо і повільно. Поле / бешкет: голосно і швидко. Відмінки не належать до декламації."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Konkurs i twoje życie", ua: "Конкурс і твоє життя" },
    formula: "s. 66  ·  zad. 6d  ·  doświadczenie",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: nagraj recytację (telefon), omówcie: co się udało, co poprawić. Program na ocenę celującą: *konfrontujesz sytuację z własnym doświadczeniem*. W zeszycie 2 zdania: kiedy towarzystwo zmieniło czyjeś zachowanie (kolega, drużyna, rodzeństwo). Tu sprawdzamy ideę, nie poezję.",
      ua: "Підручник: запиши декламацію (телефон), обговоріть: що вдалося, що виправити. Програма на відмінно: *зіставляєш ситуацію з власним досвідом*. У зошиті 2 речення: коли товариство змінило чиюсь поведінку (друг, команда, брати/сестри). Тут перевіряємо ідею, не поезію."
    },
    items: [
      { pl: "Konkurs: mówisz z pamięci, z intonacją (cisza sadu / świst pola).", ua: "Конкурс: говориш напам’ять, з інтонацією (тиша саду / свист поля)." },
      { pl: "Doświadczenie: ktoś spokojny zaczyna hałasować «bo tak robią koledzy» — jak wiatr z sadu.", ua: "Досвід: хтось спокійний починає галасувати «бо так роблять друзі» — як вітер із саду." },
      { pl: "To zamyka tematy 32–33. Następne godziny w podręczniku to już inne zjawiska (studio, s. 67).", ua: "Це закриває теми 32–33. Наступні години в підручнику — вже інші явища (студія, с. 67)." }
    ],
    task: {
      id: "t33-s11-zycie",
      type: "true-false",
      question: {
        pl: "Czy «konfrontacja z własnym doświadczeniem» znaczy: przypomnieć sytuację, gdy towarzystwo zmieniło czyjeś zachowanie — a nie przepisać odmianę piasek?",
        ua: "Чи «зіставлення з власним досвідом» означає: згадати ситуацію, коли товариство змінило чиюсь поведінку — а не переписати відміну piasek?"
      },
      answer: true,
      hint: {
        pl: "Program: zestaw wiersz z życiem. Czy tabela przypadków jest życiem wiatru?",
        ua: "Програма: зістав вірш із життям. Чи таблиця відмінків — це життя вітру?"
      },
      explanation: {
        pl: "Tak. Chodzi o twoje życie i przysłowie o towarzystwie. Piasek był na lekcjach 29–31. Recytację nagraj osobno.",
        ua: "Так. Ідеться про твоє життя і прислів’я про товариство. Piasek був на уроках 29–31. Декламацію запиши окремо."
      }
    }
  }
] };
