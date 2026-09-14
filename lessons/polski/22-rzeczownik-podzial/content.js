function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_FOTO = "Styl: akwarela podręcznikowa GWO klasa 5, zdjęcie podróżnicze. Zero napisów na kadrze, zero znaku wodnego. PNG 16:9.";
var IMG_STYLE_SCH = "Styl: infografika szkolna, białe tło, karty turkus i ochra. Etykiety po polsku. Zero znaku wodnego. PNG 16:9.";

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
      formula: "s. 50–51  ·  Listy z podróży z gramatyką w tle  ·  rzeczownik",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec, nie lista życzeń. Polski pierwszy. Włącz 🇺🇦 — pod akapitem będzie tłumaczenie. Odmiany przez przypadki jeszcze *nie* robimy (to lekcje 29–31). Dziś: *co to rzeczownik* i *własne / pospolite*.",
        ua: "Це перевірка наприкінці. Польська перша. Увімкни 🇺🇦 — під абзацом буде переклад. Відмінювання ще *не* робимо (уроки 29–31). Сьогодні: *що таке іменник* і *власні / загальні*."
      },
      items: [
        { pl: "rozpoznam *rzeczownik* pytaniami *kto? co?* w mianowniku;", ua: "впізнаю *іменник* питаннями *хто? що?* у називному;" },
        { pl: "podam przykład rzeczownika na wskazaną literę;", ua: "дам приклад іменника на вказану літеру;" },
        { pl: "wskażę w e-mailu Wiktora rzeczowniki *własne* i *pospolite*;", ua: "вкажу в e-mail Віктора іменники *власні* і *загальні*;" },
        { pl: "znam zasadę: własne — *wielka* litera, pospolite — *mała*.", ua: "знаю правило: власні — *велика* літера, загальні — *мала*." }
      ],
      task: {
        id: "t22-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Rozpoznać rzeczownik pytaniami kto? co?", ua: "Впізнати іменник питаннями хто? що?" } },
          { id: "b", label: { pl: "Odróżnić nazwy własne od pospolitych i wielką literę od małej.", ua: "Відрізнити власні назви від загальних і велику літеру від малої." } },
          { id: "c", label: { pl: "Odmienić Nil przez wszystkie 7 przypadków.", ua: "Відмінити Nil через усі 7 відмінків." } },
          { id: "d", label: { pl: "Znaleźć rzeczowniki w e-mailu Wiktora.", ua: "Знайти іменники в e-mail Віктора." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pełna odmiana jest na s. 60, nie dziś.",
          ua: "Повне відмінювання на с. 60, не сьогодні."
        },
        explanation: {
          pl: "Dziś: kto?/co?, własne/pospolite, e-mail. Siedem przypadków — lekcje 29–31.",
          ua: "Сьогодні: хто?/що?, власні/загальні, e-mail. Сім відмінків — уроки 29–31."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Listy z podróży z gramatyką w tle", ua: "Листи з подорожі з граматикою в тлі" },
      formula: "s. 50  ·  Części mowy – rzeczownik",
      promptPlace: "before",
      prompt: {
        pl: "To *nie* mit o Prometeuszu i nie sztuka o Demeter. Wiktor pisze *e-mail* z Egiptu. Z tego listu wyciągamy rzeczowniki. Znak […] = podręcznik coś zasłonił — nic nie dopisujemy.",
        ua: "Це *не* міф про Прометея і не п’єса про Деметру. Віктор пише *e-mail* з Єгипту. З цього листа витягаємо іменники. Знак […] = підручник щось закрив — нічого не дописуємо."
      },
      text: {
        pl: [
          "Cykl podręcznika: *„Listy z podróży z gramatyką w tle”*. Temat: *Części mowy – rzeczownik. Podział rzeczowników.*",
          "Nadawca: Wiktor. Miejsce: Egipt (Kair, Nil, Giza). Forma: e-mail do klasy.",
          "Gramatyka siada *na* tym tekście: najpierw czytamy, potem szukamy słów, które nazywają kogoś albo coś."
        ],
        ua: [
          "Цикл підручника: *„Listy z podróży z gramatyką w tle”*. Тема: *Частини мови – іменник. Поділ іменників.*",
          "Адресант: Віктор. Місце: Єгипет (Каїр, Ніл, Гіза). Форма: e-mail до класу.",
          "Граматика сідає *на* цей текст: спочатку читаємо, потім шукаємо слова, які називають когось або щось."
        ]
      },
      task: {
        id: "t22-s02-cykl",
        type: "single-choice",
        question: {
          pl: "Skąd bierzemy rzeczowniki na tej lekcji?",
          ua: "Звідки беремо іменники на цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "Z e-maila Wiktora o wycieczce do Egiptu.", ua: "З e-mail Віктора про поїздку до Єгипту." } },
          { id: "b", label: { pl: "Z mitu Markowskiej o Prometeuszu.", ua: "З міфу Марковської про Прометея." } },
          { id: "c", label: { pl: "Ze sztuki Murdzek *Demeter i Kora*.", ua: "З п’єси Мурджек *Demeter i Kora*." } }
        ],
        answer: "a",
        hint: {
          pl: "Spójrz na nagłówek s. 50: e-mail, Kair, Nil.",
          ua: "Подивись на заголовок с. 50: e-mail, Каїр, Ніл."
        },
        explanation: {
          pl: "Tekst źródłowy = e-mail Wiktora. Prometeusz — lekcja 21. Demeter — 19–20.",
          ua: "Джерело = e-mail Віктора. Прометей — урок 21. Деметра — 19–20."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · e-mail Wiktora (1)", ua: "Читаємо · e-mail Віктора (1)" },
      formula: "s. 50  ·  Kair, mama, konkurs",
      visual: vizGh("t22-nil.png", {
        alt: {
          pl: "Żaglówka na Nilu, ciepłe światło",
          ua: "Вітрильник на Нілі, тепле світло"
        },
        title: { pl: "Slajd · Nil", ua: "Слайд · Ніл" },
        prompt: {
          pl: IMG_STYLE_FOTO + " IMAGE PROMPT: tradycyjna egipska feluka z białym trójkątnym żaglem na spokojnym Nilu o złotej godzinie. Palmowe sylwetki, ciepłe niebo. Zero liter.",
          ua: "Фелука на Нілі. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj po polsku. Szukaj już teraz słów na *kto? co?* Wiktor, Kair, mama, wycieczka, konkurs — to rzeczowniki. Włącz 🇺🇦 pod akapitem.",
        ua: "Читай польською. Шукай уже слова на *хто? що?* Wiktor, Kair, mama, wycieczka, konkurs — іменники. Увімкни 🇺🇦 під абзацом."
      },
      text: {
        pl: [
          "Cześć wszystkim!",
          "Jesteśmy już na miejscu. *Kair* to pierwszy etap mojej niezwykłej *wycieczki* – nagrody w wygranym *konkursie*. Cieszę się, że pojechała ze mną moja *mama*. Inaczej bym sobie chyba nie poradził."
        ],
        ua: [
          "Привіт усім!",
          "Ми вже на місці. *Каїр* — перший етап моєї незвичайної *поїздки* — нагороди в виграному *конкурсі*. Радий, що поїхала зі мною моя *мама*. Інакше я б собі, мабуть, не дав ради."
        ]
      },
      task: {
        id: "t22-s03-kair",
        type: "multiple-choice",
        question: {
          pl: "Które wyrazy z tego akapitu to rzeczowniki? Zaznacz wszystkie pewne.",
          ua: "Які слова з цього абзацу — іменники? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kair (kto?/co? — miasto)", ua: "Kair (хто?/що? — місто)" } },
          { id: "b", label: { pl: "wycieczki (co?)", ua: "wycieczki (що?)" } },
          { id: "c", label: { pl: "niezwykłej (jaka? — to przymiotnik)", ua: "niezwykłej (яка? — це прикметник)" } },
          { id: "d", label: { pl: "mama (kto?)", ua: "mama (хто?)" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pytanie rzeczownika: kto? albo co? Przymiotnik pyta: jaki / jaka / jakie?",
          ua: "Питання іменника: хто? або що? Прикметник: який / яка / яке?"
        },
        explanation: {
          pl: "Kair, wycieczka, konkurs, mama — rzeczowniki. *Niezwykłej* określa wycieczkę → przymiotnik.",
          ua: "Kair, wycieczka, konkurs, mama — іменники. *Niezwykłej* означує поїздку → прикметник."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Nil i wylewy (2)", ua: "Читаємо · Ніл і розливи (2)" },
      formula: "s. 50  ·  przewodnik, muł, Etiopia",
      promptPlace: "before",
      prompt: {
        pl: "Tu gęsto od nazw: *Nil, Egipcjanie, Afryka, Etiopia, muł, papirus*. Zostaw […]. W *przewodniku* Wiktor czytał *przed* wyjazdem.",
        ua: "Тут густо від назв: *Nil, Egipcjanie, Afryka, Etiopia, muł, papirus*. Залиш […]. У *путівнику* Віктор читав *перед* виїздом."
      },
      text: {
        pl: [
          "Rano, zanim poszliśmy zwiedzać *miasto*, płynęliśmy po *Nilu* […] Egipcjan świętą *rzeką*. Jeszcze przed wyjazdem czytałem w *przewodniku*, […] od dawna umożliwia *wzrost* roślin uprawnych, dostarcza *ryb*, trzciny papirusowej, jest […] szlak komunikacyjny.",
          "Coroczne *wylewy* rzeki, która gwałtownie przybiera dzięki obfitym *opadom* w środkowej *Afryce* i topnieniu *śniegów* w górach *Etiopii*, pozostawiają na *polach* żyzny *muł* – doskonały *nawóz* dla roślin uprawnych."
        ],
        ua: [
          "Вранці, перш ніж пішли оглядати *місто*, ми пливли по *Нілу* […] священною *рікою* єгиптян. Ще перед виїздом читав у *путівнику*, […] віддавна дає *зростання* культурних рослин, дає *рибу*, папірусову тростину, є […] комунікаційним шляхом.",
          "Щорічні *розливи* ріки, яка стрімко прибуває завдяки рясним *опадам* у середній *Африці* і таненню *снігів* у горах *Ефіопії*, залишають на *полях* родючий *мул* — чудове *добриво* для культурних рослин."
        ]
      },
      task: {
        id: "t22-s04-nil",
        type: "single-choice",
        question: {
          pl: "Co zostaje na polach po wylewie Nilu?",
          ua: "Що лишається на полях після розливу Нілу?"
        },
        options: [
          { id: "a", label: { pl: "Żyzny muł — nawóz dla roślin.", ua: "Родючий мул — добриво для рослин." } },
          { id: "b", label: { pl: "Piasek z piramidy Cheopsa.", ua: "Пісок із піраміди Хеопса." } },
          { id: "c", label: { pl: "Ogień skradziony Heliosowi.", ua: "Вогонь, украдений у Геліоса." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatnie zdanie akapitu: muł – nawóz.",
          ua: "Останнє речення абзацу: мул – добриво."
        },
        explanation: {
          pl: "Podręcznik: żyzny muł = nawóz. Piramida jest w następnym akapicie. Ogień — lekcja 21.",
          ua: "Підручник: родючий мул = добриво. Піраміда — в наступному абзаці. Вогонь — урок 21."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Hapi, Osyrys, Giza (3)", ua: "Читаємо · Гапі, Осіріс, Гіза (3)" },
      formula: "s. 50  ·  bogowie i grobowiec",
      promptPlace: "before",
      prompt: {
        pl: "W e-mailu stoi *Osyrys* — w ramce na s. 51 *Ozyrys*. To ten sam bóg (UA: Осіріс). *Set* = brat-zabójca. *Cheops* = faraon, piramida w *Gizie*.",
        ua: "В e-mail стоїть *Osyrys* — у рамці на с. 51 *Ozyrys*. Це той самий бог (Осіріс). *Set* = брат-убивця. *Cheops* = фараон, піраміда в *Гізі*."
      },
      text: {
        pl: [
          "Na statku przewodnik opowiadał, że starożytni Egipcjanie wierzyli w to, że Nil wylewa za sprawą *Hapi*, boga zwanego Panem Ryb. Przybieranie wód rzeki tłumaczyli również obumieraniem *Osyrysa* – boga świata podziemnego. Gdy Nil wysychał, oznaczało to, że Osyrys umiera, a jego brat zabójca o imieniu *Set* pochłania wody świętej rzeki.",
          "Jutro wycieczka do *Gizy*. Na pewno słyszeliście o słynnej piramidzie *Cheopsa*, czyli grobowcu jednego z faraonów czasów tak zwanego Starego Państwa. Wkrótce Wam o tym napiszę.",
          "Tymczasem pozdrawiam",
          "Wiktor"
        ],
        ua: [
          "На кораблі гід розповідав, що давні єгиптяни вірили: Ніл розливається завдяки *Гапі*, богові на ім’я Пан Риб. Прибуття вод ріки пояснювали також відмиранням *Осіріса* — бога підземного світу. Коли Ніл висихав, це означало, що Осіріс помирає, а його брат-убивця на ім’я *Сет* поглинає води священної ріки.",
          "Завтра поїздка до *Гізи*. Напевно чули про славетну піраміду *Хеопса*, тобто гробницю одного з фараонів часів так званого Старого Царства. Незабаром напишу вам про це.",
          "Тим часом вітаю",
          "Віктор"
        ]
      },
      task: {
        id: "t22-s05-bogowie",
        type: "multiple-choice",
        question: {
          pl: "Które nazwy z tego fragmentu są rzeczownikami własnymi? Zaznacz wszystkie pewne.",
          ua: "Які назви з цього уривка — власні іменники? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Hapi, Osyrys, Set", ua: "Hapi, Osyrys, Set" } },
          { id: "b", label: { pl: "Giza, Cheops, Wiktor", ua: "Giza, Cheops, Wiktor" } },
          { id: "c", label: { pl: "statek, bóg, grobowiec, woda", ua: "statek, bóg, grobowiec, woda" } },
          { id: "d", label: { pl: "opowiadał, wierzyli, wysychał", ua: "opowiadał, wierzyli, wysychał" } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Własne = imię jednej osoby, jednego miejsca, jednego boga. Czasownik to czynność.",
          ua: "Власні = ім’я однієї особи, одного місця, одного бога. Дієслово — дія."
        },
        explanation: {
          pl: "Hapi, Osyrys, Set, Giza, Cheops, Wiktor — własne. Statek, bóg — pospolite. Opowiadał — czasownik.",
          ua: "Hapi, Osyrys, Set, Giza, Cheops, Wiktor — власні. Statek, bóg — загальні. Opowiadał — дієслово."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Ramka · co to rzeczownik", ua: "Рамка · що таке іменник" },
      formula: "s. 51  ·  kto? co?",
      visual: vizGh("t22-kto-co.png", {
        alt: {
          pl: "Schemat: rzeczownik odpowiada na kto? i co?",
          ua: "Схема: іменник відповідає на хто? і що?"
        },
        title: { pl: "Slajd · kto? co?", ua: "Слайд · хто? що?" },
        prompt: {
          pl: IMG_STYLE_SCH + " IMAGE PROMPT: u góry RZECZOWNIK. Lewa karta KTO?: sąsiad, Ozyrys. Prawa karta CO?: pies, kaktus, stół, burza, biel, zdrowie, pisanie, ból. Etykiety po polsku. Zero znaku wodnego.",
          ua: "Схема хто?/що? Польські етикетки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "To ramka z podręcznika. *Mianownik* = forma ze słownika (kto? co?). Pełnej odmiany dziś nie ćwiczymy — tylko to pytanie.",
        ua: "Це рамка з підручника. *Називний* = форма зі словника (хто? що?). Повного відмінювання сьогодні не вчимо — лише це питання."
      },
      text: {
        pl: "**Rzeczownik** to część mowy nazywająca osoby, zwierzęta, rośliny, przedmioty, zjawiska i pojęcia. W mianowniku odpowiada na pytania **kto? co?**",
        ua: "**Іменник** — частина мови, що називає осіб, тварин, рослини, предмети, явища і поняття. У називному відмінку відповідає на питання **хто? що?**"
      },
      items: [
        { pl: "**kto?** — *sąsiad, Ozyrys*.", ua: "**хто?** — *sąsiad, Ozyrys*." },
        { pl: "**co?** — *pies, kaktus, stół, burza, biel, zdrowie, pisanie, ból*.", ua: "**що?** — *pies, kaktus, stół, burza, biel, zdrowie, pisanie, ból*." }
      ],
      task: {
        id: "t22-s06-definicja",
        type: "single-choice",
        question: {
          pl: "Które słowo NA PEWNO jest rzeczownikiem według ramki?",
          ua: "Яке слово НАПЕВНО є іменником за рамкою?"
        },
        options: [
          { id: "a", label: { pl: "pisanie (co?) — pojęcie / czynność jako nazwa", ua: "pisanie (що?) — поняття / дія як назва" } },
          { id: "b", label: { pl: "płynęliśmy (co robiliśmy?) — czasownik", ua: "płynęliśmy (що робили?) — дієслово" } },
          { id: "c", label: { pl: "świętą (jaką?) — przymiotnik", ua: "świętą (яку?) — прикметник" } }
        ],
        answer: "a",
        hint: {
          pl: "Ramka sama daje *pisanie* i *ból* jako co?",
          ua: "Рамка сама дає *pisanie* і *ból* як що?"
        },
        explanation: {
          pl: "Czynność też może być rzeczownikiem, gdy nazywamy ją jak rzecz: *pisanie, ból, wzrost*. Czasownik = *pisać, boleć*.",
          ua: "Дія теж може бути іменником, коли називаємо її як річ: *pisanie, ból*. Дієслово = *pisać*."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Przykłady z ramki · z tłumaczeniem", ua: "Приклади з рамки · з перекладом" },
      formula: "s. 51  ·  kto? / co?",
      promptPlace: "before",
      prompt: {
        pl: "Te same wyrazy co w ramce. Polski w lewej kolumnie. Zapamiętaj pytanie.",
        ua: "Ті самі слова, що в рамці. Польська в лівій колонці. Запам’ятай питання."
      },
      rows: [
        { pl: "sąsiad  ·  kto?", ua: "сусід" },
        { pl: "Ozyrys  ·  kto?", ua: "Осіріс (у e-mailu: Osyrys)" },
        { pl: "pies  ·  co?", ua: "пес / собака" },
        { pl: "kaktus  ·  co?", ua: "кактус" },
        { pl: "stół  ·  co?", ua: "стіл" },
        { pl: "burza  ·  co?", ua: "буря (явище)" },
        { pl: "biel  ·  co?", ua: "білизна / білий колір (поняття)" },
        { pl: "zdrowie  ·  co?", ua: "здоров’я (поняття)" },
        { pl: "pisanie  ·  co?", ua: "писання (назва дії)" },
        { pl: "ból  ·  co?", ua: "біль (стан / явище)" }
      ],
      task: {
        id: "t22-s07-litera",
        type: "input-text",
        question: {
          pl: "Podaj jeden rzeczownik z e-maila Wiktora na literę N (jak w programie: przykład na określoną literę).",
          ua: "Дай один іменник з e-mail Віктора на літеру N."
        },
        answer: ["Nil", "nil", "Nilu", "nawóz", "nawoz", "nagrody", "nagroda"],
        hint: {
          pl: "Święta rzeka albo nawóz z mułu. Wielka litera, jeśli to nazwa własna.",
          ua: "Священна ріка або добриво з мулу. Велика літера, якщо це власна назва."
        },
        explanation: {
          pl: "Pasuje: *Nil* (własne), *nawóz*, *nagroda*. Nie pasuje: *niezwykłej* (przymiotnik).",
          ua: "Підходить: *Nil* (власне), *nawóz*, *nagroda*. Не пасує: *niezwykłej* (прикметник)."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 1 · 10 rzeczowników ze zdjęcia", ua: "Завд. 1 · 10 іменників зі світлини" },
      formula: "s. 51",
      promptPlace: "before",
      prompt: {
        pl: "Przyjrzyj się zdjęciom z e-maila Wiktora i zapisz co najmniej 10 rzeczowników nazywających ludzi, zwierzęta, przedmioty, rośliny lub zjawiska. Najpierw zeszyt — potem klucz.",
        ua: "Розглянь світлини з e-mail Віктора і запиши щонайменше 10 іменників: люди, тварини, предмети, рослини або явища. Спочатку зошит — потім ключ."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t22-zdjecia.png", {
            alt: {
              pl: "Dwa zdjęcia: żaglówka na Nilu i piramidy w Gizie",
              ua: "Дві світлини: вітрильник на Нілі і піраміди в Гізі"
            },
            title: { pl: "Slajd · zdjęcia z e-maila", ua: "Слайд · світлини з e-mail" },
            prompt: {
              pl: IMG_STYLE_FOTO + " IMAGE PROMPT: dwa kadry jak w podręczniku. Lewy: feluka z białym żaglem na Nilu. Prawy: trzy piramidy w Gizie o zmierzchu. Zero napisów.",
              ua: "Два кадри: Ніл і піраміди. Без напису."
            }
          }),
          text: {
            pl: "W zeszycie lista 1–10. Pytanie przy każdym: *kto?* albo *co?* Nie wpisuj czasowników (*płynie*) ani przymiotników (*biały*).",
            ua: "У зошиті список 1–10. Питання: *хто?* або *що?* Не вписуй дієслова (*płynie*) і прикметники (*biały*)."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  przykłady (nie jedyne)",
          text: {
            pl: "łódź / żaglówka, żagiel, maszt, woda, rzeka, Nil, niebo, słońce, fala, piramida, piasek, pustynia, człowiek, brzeg, palma.",
            ua: "човен / вітрильник, вітрило, щогла, вода, ріка, Ніл, небо, сонце, хвиля, піраміда, пісок, пустеля, людина, берег, пальма."
          }
        }
      ],
      task: {
        id: "t22-s08-zad1",
        type: "multiple-choice",
        question: {
          pl: "Które zestawy to rzeczowniki ze zdjęć? Zaznacz wszystkie pewne.",
          ua: "Які набори — іменники зі світлин? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "żagiel, woda, piramida, piasek", ua: "żagiel, woda, piramida, piasek" } },
          { id: "b", label: { pl: "niebo, rzeka, łódź, człowiek", ua: "niebo, rzeka, łódź, człowiek" } },
          { id: "c", label: { pl: "płynie, stoi, świeci (to czasowniki)", ua: "płynie, stoi, świeci (це дієслова)" } },
          { id: "d", label: { pl: "błękitny, słoneczny, wysoki (to przymiotniki)", ua: "błękitny, słoneczny, wysoki (це прикметники)" } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "kto? / co? — rzecz. co robi? — czasownik. jaki? — przymiotnik.",
          ua: "хто? / що? — іменник. що робить? — дієслово. який? — прикметник."
        },
        explanation: {
          pl: "Zad. 1 chce nazwy rzeczy ze zdjęcia, nie opisu jaki jest i co robi.",
          ua: "Завд. 1 хоче назви речей зі світлини, не опис який є і що робить."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 2 · informacje z e-maila", ua: "Завд. 2 · відомості з e-mail" },
      formula: "s. 51  ·  użyj rzeczowników",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie e-maila Wiktora uzupełnij w zeszycie informacje. Użyj rzeczowników. Pamiętaj o ich poprawnym zapisie (wielka litera przy własnych).",
        ua: "На основі e-mail Віктора доповни в зошиті відомості. Уживай іменники. Пам’ятай правильний запис (велика літера при власних)."
      },
      items: [
        { pl: "Miejsce, gdzie topnieją śniegi, to *?*.", ua: "Місце, де тануть сніги, — *?*." },
        { pl: "Imię faraona pochowanego w jednym ze znanych grobowców brzmi *?*.", ua: "Ім’я фараона, похованого в одній із відомих гробниць, — *?*." },
        { pl: "Święta rzeka, o której mowa w tekście, to *?*.", ua: "Священна ріка, про яку йдеться в тексті, — *?*." },
        { pl: "Kontynent, o którym mowa, to *?*.", ua: "Континент, про який ідеться, — *?*." },
        { pl: "Imię brata, który był mordercą, brzmi *?*.", ua: "Ім’я брата, який був убивцею, — *?*." },
        { pl: "Bóstwa związane z wylewami rzeki to *?*, *?*, *?*.", ua: "Божества, пов’язані з розливами ріки, — *?*, *?*, *?*." },
        { pl: "Kraj, o którym mowa, to *?*.", ua: "Країна, про яку йдеться, — *?*." }
      ],
      reveal: true,
      steps: [
        {
          text: {
            pl: "Najpierw zeszyt. Szukaj w e-mailu, nie zgaduj z mitologii lekcji 21.",
            ua: "Спочатку зошит. Шукай в e-mail, не вгадуй з міфології уроку 21."
          }
        },
        {
          formula: "KLUCZ EduMost",
          text: {
            pl: "Etiopia (góry Etiopii) · Cheops · Nil · Afryka · Set · Hapi, Osyrys, Set · Egipt.",
            ua: "Ефіопія (гори Ефіопії) · Хеопс · Ніл · Африка · Сет · Гапі, Осіріс, Сет · Єгипет."
          }
        }
      ],
      task: {
        id: "t22-s09-zad2",
        type: "multiple-choice",
        question: {
          pl: "Które uzupełnienia z e-maila są pewne? Zaznacz wszystkie pewne.",
          ua: "Які доповнення з e-mail є певними? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Święta rzeka = Nil; kontynent = Afryka; kraj = Egipt.", ua: "Священна ріка = Ніл; континент = Африка; країна = Єгипет." } },
          { id: "b", label: { pl: "Faraon grobowca = Cheops; brat-zabójca = Set.", ua: "Фараон гробниці = Хеопс; брат-убивця = Сет." } },
          { id: "c", label: { pl: "Śniegi topnieją na Olimpie, a rzeka to Styks.", ua: "Сніги тануть на Олімпі, а ріка — Стікс." } },
          { id: "d", label: { pl: "Bóstwa wylewów: Hapi, Osyrys i Set.", ua: "Божества розливів: Гапі, Осіріс і Сет." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Olimp i Styks są z innej lekcji. Góry w e-mailu: Etiopia.",
          ua: "Олімп і Стікс з іншого уроку. Гори в e-mail: Ефіопія."
        },
        explanation: {
          pl: "Wszystko z e-maila Wiktora. Nie mieszaj z Prometeuszem ani Demeter.",
          ua: "Усе з e-mail Віктора. Не мішай з Прометеєм і Деметрою."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Ramka · własne i pospolite", ua: "Рамка · власні і загальні" },
      formula: "s. 51  ·  wielka / mała litera",
      visual: vizGh("t22-wlasne.png", {
        alt: {
          pl: "Schemat: rzeczownik → własne (wielka litera) / pospolite (mała litera)",
          ua: "Схема: іменник → власні (велика літера) / загальні (мала літера)"
        },
        title: { pl: "Slajd · podział", ua: "Слайд · поділ" },
        prompt: {
          pl: IMG_STYLE_SCH + " IMAGE PROMPT: RZECZOWNIK na górze. Lewa karta własne: Kair, Nil, Wiktor, Cheops, wielka litera. Prawa karta pospolite: miasto, rzeka, mama, grobowiec, mała litera. Etykiety po polsku.",
          ua: "Схема власні / загальні. Польські етикетки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Ramka z wykrzyknikiem. Polski pierwszy. Przykłady bierz z ramki i z e-maila.",
        ua: "Рамка з знаком оклику. Польська перша. Приклади бери з рамки і з e-mail."
      },
      text: {
        pl: [
          "Wśród rzeczowników wyróżniamy:",
          "*rzeczowniki własne* (nazwy własne) — nazywają konkretne osoby, zwierzęta, obszary, obiekty; np. imiona (*Anna, Hermes, Azor, Koziołek Matołek*), nazwy państw (*Czechy*), miast (*Gdańsk*), ulic (*Marszałkowska*), planet (*Ziemia, Mars*), świąt (*Boże Narodzenie*). Dla nazw własnych charakterystyczne jest to, że odnoszą się zazwyczaj *do jednej rzeczy czy osoby*, np. *Goplana, Wisła, Jan Brzechwa, Gwiazda Polarna*.",
          "*rzeczowniki pospolite* (nazwy pospolite) — nazywają każdy dowolny obiekt czy element z grupy istot, przedmiotów, zjawisk, pojęć abstrakcyjnych, np. *człowiek, zwierzę, stokrotka, samochód, miasto, rzeka, pogoda, radość*. Dla nazw pospolitych charakterystyczne jest to, że można wskazać *pewne cechy wspólne* dla tych wszystkich rzeczy, które oznacza dane słowo, np. *samochód — pojazd na kołach napędzany silnikiem*.",
          "Uwaga. Rzeczowniki własne piszemy *wielką literą*, a pospolite — *małą*."
        ],
        ua: [
          "Серед іменників виділяємо:",
          "*власні іменники* (власні назви) — називають конкретних осіб, тварин, території, об’єкти; напр. імена (*Anna, Hermes, Azor, Koziołek Matołek*), назви держав (*Czechy*), міст (*Gdańsk*), вулиць (*Marszałkowska*), планет (*Ziemia, Mars*), свят (*Boże Narodzenie*). Для власних назв характерно, що вони стосуються зазвичай *однієї речі чи особи*, напр. *Goplana, Wisła, Jan Brzechwa, Gwiazda Polarna*.",
          "*загальні іменники* — називають будь-який об’єкт чи елемент з групи істот, предметів, явищ, абстрактних понять, напр. *człowiek, zwierzę, stokrotka, samochód, miasto, rzeka, pogoda, radość*. Для загальних назв характерно, що можна вказати *певні спільні риси* всіх речей, які означає це слово, напр. *samochód — транспорт на колесах із двигуном*.",
          "Увага. Власні іменники пишемо *з великої літери*, а загальні — *з малої*."
        ]
      },
      task: {
        id: "t22-s10-zasada",
        type: "true-false",
        question: {
          pl: "Czy nazwy pospolite zapisujemy wielką literą, a własne małą?",
          ua: "Чи загальні назви пишемо з великої, а власні з малої?"
        },
        answer: false,
        hint: {
          pl: "Ostatnie zdanie ramki: Uwaga.",
          ua: "Останнє речення рамки: Uwaga."
        },
        explanation: {
          pl: "Odwrotnie: *własne = wielka*, *pospolite = mała*. Kair, nie kair. rzeka, nie Rzeka (chyba że to tytuł).",
          ua: "Навпаки: *власні = велика*, *загальні = мала*. Kair, не kair. rzeka, не Rzeka."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Przykłady · własne vs pospolite", ua: "Приклади · власні vs загальні" },
      formula: "z e-maila Wiktora",
      promptPlace: "before",
      prompt: {
        pl: "Ta sama rzecz raz jako *jedna konkretna* (własne), raz jako *typ* (pospolite). Tłumaczenie pod spodem.",
        ua: "Та сама річ раз як *одна конкретна* (власне), раз як *тип* (загальне). Переклад знизу."
      },
      text: {
        pl: [
          "*Kair* (własne) — to *miasto* (pospolite).",
          "*Nil* (własne) — to *rzeka* (pospolite).",
          "*Wiktor* (własne) — to *chłopiec / kolega* (pospolite).",
          "*Cheops* (własne) — to *faraon* (pospolite).",
          "*Giza* (własne) — to *miejscowość* (pospolite).",
          "*Hapi* (własne) — to *bóg* (pospolite)."
        ],
        ua: [
          "*Каїр* (власне) — це *місто* (загальне).",
          "*Ніл* (власне) — це *ріка* (загальне).",
          "*Віктор* (власне) — це *хлопець / однокласник* (загальне).",
          "*Хеопс* (власне) — це *фараон* (загальне).",
          "*Гіза* (власне) — це *місцевість* (загальне).",
          "*Гапі* (власне) — це *бог* (загальне)."
        ]
      },
      task: {
        id: "t22-s11-para",
        type: "single-choice",
        question: {
          pl: "Która para jest zapisana poprawnie?",
          ua: "Яка пара записана правильно?"
        },
        options: [
          { id: "a", label: { pl: "Nil (własne) / rzeka (pospolite)", ua: "Nil (власне) / rzeka (загальне)" } },
          { id: "b", label: { pl: "nil (pospolite) / Rzeka (własne) — odwrotnie i ze złą literą", ua: "nil / Rzeka — навпаки і з поганою літерою" } },
          { id: "c", label: { pl: "płynąć (własne) / szybko (pospolite)", ua: "płynąć / szybko — це не іменники" } }
        ],
        answer: "a",
        hint: {
          pl: "Własne = jedna rzeka o imieniu Nil. Pospolite = każda rzeka.",
          ua: "Власне = одна ріка на ім’я Ніл. Загальне = будь-яка ріка."
        },
        explanation: {
          pl: "Nil wielką, rzeka małą. Czasownik i przysłówek nie wchodzą do tej pary.",
          ua: "Nil з великої, rzeka з малої. Дієслово і прислівник сюди не входять."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 3 · tabela w zeszycie", ua: "Завд. 3 · таблиця в зошиті" },
      formula: "s. 52",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie e-maila Wiktora, wiedzy z historii oraz innych źródeł podaj jak najwięcej rzeczowników związanych z historią i życiem codziennym starożytnego Egiptu. Pogrupuj: *własne* | *pospolite*.",
        ua: "На основі e-mail Віктора, знань з історії та інших джерел дай якомога більше іменників про історію і побут давнього Єгипту. Згрупуй: *власні* | *загальні*."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Narysuj w zeszycie dwie kolumny. Nie mieszaj liter: własne wielką, pospolite małą.",
            ua: "Намалюй у зошиті дві колонки. Не мішай літери: власні з великої, загальні з малої."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z e-maila + Egipt (nie jedyne)",
          text: {
            pl: "Własne: Wiktor, Kair, Nil, Hapi, Osyrys / Ozyrys, Set, Giza, Cheops, Etiopia, Afryka, Egipt. Pospolite: mama, wycieczka, konkurs, miasto, rzeka, przewodnik, ryba, papirus, wylew, muł, nawóz, statek, bóg, grobowiec, faraon, piramida, pole, śnieg.",
            ua: "Власні: Wiktor, Kair, Nil, Hapi, Osyrys, Set, Giza, Cheops, Etiopia, Afryka, Egipt. Загальні: mama, wycieczka, konkurs, miasto, rzeka, przewodnik, ryba, papirus, wylew, muł, nawóz, statek, bóg, grobowiec, faraon, piramida, pole, śnieg."
          }
        }
      ],
      task: {
        id: "t22-s12-tabela",
        type: "multiple-choice",
        question: {
          pl: "Które wpisy do tabeli są poprawne? Zaznacz wszystkie pewne.",
          ua: "Які записи до таблиці правильні? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kolumna własne: Nil, Cheops, Kair", ua: "Колонка власні: Nil, Cheops, Kair" } },
          { id: "b", label: { pl: "Kolumna pospolite: rzeka, grobowiec, muł", ua: "Колонка загальні: rzeka, grobowiec, muł" } },
          { id: "c", label: { pl: "Kolumna własne: rzeka, mama, piramida", ua: "Колонка власні: rzeka, mama, piramida" } },
          { id: "d", label: { pl: "Kolumna pospolite: Prometeusz, Demeter, Kora", ua: "Колонка загальні: Prometeusz, Demeter, Kora" } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Prometeusz i Demeter są z innych lekcji i to nazwy własne, nie pospolite.",
          ua: "Прометей і Деметра з інших уроків, і це власні назви, не загальні."
        },
        explanation: {
          pl: "Tabela ma być o *tym* Egipcie z e-maila. rzeka/mama — pospolite. Nil/Cheops — własne.",
          ua: "Таблиця про *цей* Єгипет з e-mail. rzeka/mama — загальні. Nil/Cheops — власні."
        }
      }
    }
  ]
};
