function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L08_Porownujemy_komorki/images/";

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
        { pl: "Podzielisz komórki na jądrowe i bezjądrowe.", ua: "Поділиш клітини на ядерні і без’ядерні." },
        { pl: "Wskażesz różnice komórki zwierzęcej i roślinnej.", ua: "Вкажеш відмінності тваринної і рослинної клітини." },
        { pl: "Scharakteryzujesz budowę komórki bakteryjnej.", ua: "Схарактеризуєш будову бактеріальної клітини." },
        { pl: "Powiesz, czym komórka grzybowa przypomina zwierzęcą, a czym roślinną.", ua: "Скажеш, чим грибна клітина схожа на тваринну, а чим на рослинну." },
        { pl: "Wymienisz składniki wspólne wszystkim typom komórek.", ua: "Назвеш складники, спільні всім типам клітин." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "komórki jądrowe", ua: "ядерні клітини" },
        { pl: "komórki bezjądrowe", ua: "без’ядерні клітини" },
        { pl: "nić DNA", ua: "нитка ДНК" },
        { pl: "otoczka śluzowa", ua: "слизова оболонка" },
        { pl: "rzęska", ua: "війка" },
        { pl: "komórka grzybowa", ua: "грибна клітина" },
        { pl: "chityna", ua: "хітин" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l08-zacznijmy.png", {
        alt: { pl: "Cztery typy komórek obok siebie", ua: "Чотири типи клітин поряд" },
        title: { pl: "Zwierzę, roślina, grzyb, bakteria — cztery plany budowy.", ua: "Тварина, рослина, гриб, бактерія — чотири плани будови." },
        prompt: { pl: "Edukacyjna plansza 16:9, cztery równe modele komórek z polskimi etykietami: zwierzęca, roślinna, grzybowa, bakteryjna. Roślinna zielona ze ścianą i chloroplastami. Bakteryjna bez jądra, z nicią DNA. Bez wirusów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Umiesz już komórkę zwierzęcą i roślinną. Dziś dokładamy bakterię i grzyba — i układamy wszystko w jedną tabelę.",
          "Najważniejsze pytanie na start: czy komórka ma jądro, czy zamiast jądra pływa w cytozolu nić DNA?"
        ],
        ua: [
          "Ти вже вмієш тваринну і рослинну клітину. Сьогодні додаємо бактерію і гриб — і складаємо все в одну таблицю.",
          "Найважливіше питання на старті: чи клітина має ядро, чи замість ядра в цитозолі плаває нитка ДНК?"
        ]
      }
    },
    {
      type: "classification",
      heading: { pl: "Komórki jądrowe i bezjądrowe", ua: "Ядерні і без’ядерні клітини" },
      visual: tree({
        layout: "nested",
        root: { pl: "komórki", ua: "клітини" },
        groups: [
          {
            title: { pl: "jądrowe", ua: "ядерні" },
            items: [
              { pl: "zwierzęca", ua: "тваринна" },
              { pl: "roślinna", ua: "рослинна" },
              { pl: "grzybowa", ua: "грибна" }
            ]
          },
          {
            title: { pl: "bezjądrowe", ua: "без’ядерні" },
            items: [
              { pl: "bakteryjna", ua: "бактеріальна" }
            ]
          }
        ]
      }),
      items: [
        { pl: "jądrowe: zwierzę, roślina, grzyb", ua: "ядерні: тварина, рослина, гриб" },
        { pl: "bezjądrowe: bakteria (nić DNA w cytozolu)", ua: "без’ядерні: бактерія (нитка ДНК у цитозолі)" }
      ],
      text: {
        pl: [
          ["", em("Komórki jądrowe"), " mają jądro komórkowe. Należą do nich komórki zwierzęce, roślinne i grzybowe."],
          ["", em("Komórki bezjądrowe"), " nie mają jądra. W klasie 5 jedyną taką grupą są komórki bakteryjne."],
          "Wirusów tu nie umieszczamy — to osobny temat. Niektóre glony, na przykład gałęzatka kulista, mają komórki z wieloma jądrami. To ciekawostka, nie punkt Paszportu."
        ],
        ua: [
          ["", em("Ядерні клітини"), " мають клітинне ядро. До них належать тваринні, рослинні і грибні клітини."],
          ["", em("Без’ядерні клітини"), " не мають ядра. У 5 класі єдиною такою групою є бактеріальні клітини."],
          "Вірусів тут не ставимо — це окрема тема. Деякі водорості, наприклад кладофора куляста, мають клітини з багатьма ядрами. Це цікавинка, не пункт Паспорта."
        ]
      },
      task: {
        id: "l08-e1",
        type: "single-choice",
        question: { pl: "Które komórki są bezjądrowe?", ua: "Які клітини без’ядерні?" },
        options: [
          { id: "a", label: { pl: "bakteryjne", ua: "бактеріальні" } },
          { id: "b", label: { pl: "zwierzęce, roślinne i grzybowe", ua: "тваринні, рослинні і грибні" } },
          { id: "c", label: { pl: "tylko komórki nabłonka jamy ustnej", ua: "лише клітини епітелію ротової порожнини" } }
        ],
        answer: "a",
        explanation: { pl: "Bez jądra = bakterie. Zwierzę, roślina, grzyb mają jądro.", ua: "Без ядра = бактерії. Тварина, рослина, гриб мають ядро." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórka bakteryjna", ua: "Бактеріальна клітина" },
      visual: vizGh("l08-bakteria.png", {
        alt: { pl: "Schemat komórki bakteryjnej", ua: "Схема бактеріальної клітини" },
        title: { pl: "Brak jądra. Jest nić DNA, błona, ściana, rybosomy.", ua: "Немає ядра. Є нитка ДНК, мембрана, стінка, рибосоми." },
        prompt: { pl: "Edukacyjny schemat 16:9, pałeczkowata bakteria w przekroju, polskie etykiety: błona komórkowa, cytozol, rybosomy, nić DNA, ściana komórkowa, otoczka śluzowa, rzęska. Bez jądra, bez mitochondriów, bez chloroplastów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Najważniejsza cecha komórki bakteryjnej: ", em("brak jądra"), ". Zamiast jądra w cytozolu jest ", em("nić DNA"), ".",
          "Bakteria ma też: cytozol, rybosomy, błonę komórkową i ścianę komórkową.",
          "Niektóre bakterie mają dodatkowo ", em("otoczkę śluzową"), " (ochrona) oraz ", em("rzęski"), " (ruch).",
          "Nie ma mitochondriów, chloroplastów ani wakuoli jak u roślin i zwierząt. Dlatego bakteria to inny plan budowy — komórka bezjądrowa."
        ],
        ua: [
          "Найважливіша риса бактеріальної клітини: ", em("відсутність ядра"), ". Замість ядра в цитозолі є ", em("нитка ДНК"), ".",
          "Бактерія також має: цитозоль, рибосоми, клітинну мембрану і клітинну стінку.",
          "Деякі бактерії мають додатково ", em("слизову оболонку"), " (захист) і ", em("війки"), " (рух).",
          "Немає мітохондрій, хлоропластів і вакуолей як у рослин і тварин. Тому бактерія — інший план будови, без’ядерна клітина."
        ]
      },
      task: {
        id: "l08-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania o komórce bakteryjnej.", ua: "Познач усі правдиві речення про бактеріальну клітину." },
        options: [
          { id: "a", label: { pl: "Nie ma jądra — jest nić DNA w cytozolu.", ua: "Немає ядра — є нитка ДНК у цитозолі." } },
          { id: "b", label: { pl: "Ma błonę, ścianę i rybosomy.", ua: "Має мембрану, стінку і рибосоми." } },
          { id: "c", label: { pl: "Niektóre mają otoczkę śluzową i rzęski.", ua: "Деякі мають слизову оболонку і війки." } },
          { id: "d", label: { pl: "Ma duże jądro i chloroplasty jak liść.", ua: "Має велике ядро і хлоропласти як листок." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Bakteria nie ma jądra ani chloroplastów liścia. Ma nić DNA, błonę, ścianę, rybosomy.", ua: "Бактерія не має ядра і хлоропластів листка." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórka grzybowa", ua: "Грибна клітина" },
      visual: vizGh("l08-grzyb.png", {
        alt: { pl: "Schemat komórki grzybowej ze ścianą z chityny", ua: "Схема грибної клітини зі стінкою з хітину" },
        title: { pl: "Jak zwierzę — ale ze ścianą. Ściana z chityny, nie z celulozy.", ua: "Як тварина — але зі стінкою. Стінка з хітину, не з целюлози." },
        prompt: { pl: "Edukacyjny schemat 16:9, okrągła komórka grzybowa. Polskie etykiety: błona komórkowa, cytozol, jądro komórkowe, mitochondrium, wakuola, ściana komórkowa (chityna). Bez chloroplastów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Komórka grzybowa jest podobna do zwierzęcej: ma jądro, błonę, cytozol, mitochondria i wakuole.",
          "Jak komórka roślinna ma ", em("ścianę komórkową"), ". Ale ta ściana jest z ", em("chityny"), ", a nie z celulozy.",
          "Chloroplastów grzyb nie ma — nie jest zielony jak liść i nie wytwarza pokarmu w chloroplastach.",
          "Zapamiętaj most: grzyb = jądro jak zwierzę + ściana jak roślina, tylko z innego materiału."
        ],
        ua: [
          "Грибна клітина подібна до тваринної: має ядро, мембрану, цитозоль, мітохондрії і вакуолі.",
          "Як рослинна клітина має ", em("клітинну стінку"), ". Але ця стінка з ", em("хітину"), ", а не з целюлози.",
          "Хлоропластів гриб не має — не зелений як листок і не виробляє поживу в хлоропластах.",
          "Запам’ятай місток: гриб = ядро як тварина + стінка як рослина, лише з іншого матеріалу."
        ]
      },
      task: {
        id: "l08-e3",
        type: "single-choice",
        question: { pl: "Czym komórka grzybowa przypomina zwierzęcą, a czym roślinną?", ua: "Чим грибна клітина схожа на тваринну, а чим на рослинну?" },
        options: [
          { id: "a", label: { pl: "jak zwierzę — jądro, mitochondria, brak chloroplastów; jak roślina — ściana, ale z chityny", ua: "як тварина — ядро, мітохондрії, немає хлоропластів; як рослина — стінка, але з хітину" } },
          { id: "b", label: { pl: "jak bakteria — brak jądra i nić DNA zamiast jądra", ua: "як бактерія — немає ядра і нитка ДНК замість ядра" } },
          { id: "c", label: { pl: "ma chloroplasty i celulozę jak liść moczarki", ua: "має хлоропласти і целюлозу як листок елодеї" } }
        ],
        answer: "a",
        explanation: { pl: "Grzyb ma jądro (nie jest bakterią) i ścianę z chityny (nie z celulozy). Bez chloroplastów.", ua: "Гриб має ядро і стінку з хітину. Без хлоропластів." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Zwierzę kontra roślina", ua: "Тварина проти рослини" },
      visual: vizGh("l08-zwierze-roslina.png", {
        alt: { pl: "Porównanie komórki zwierzęcej i roślinnej", ua: "Порівняння тваринної і рослинної клітини" },
        title: { pl: "Wspólne: 1–6. Tylko roślina: chloroplasty i ściana.", ua: "Спільні: 1–6. Лише рослина: хлоропласти і стінка." },
        prompt: { pl: "Edukacyjna tabela-infografika 16:9, dwie kolumny. Komórka zwierzęca vs roślinna. Wiersze z ptaszkami: błona, cytozol, jądro, wakuole, mitochondria, rybosomy — obie TAK. Chloroplasty i ściana — tylko roślina. Wakuole: zwierzę — wiele drobnych; roślina — zwykle jedna duża. Polskie etykiety, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "To powtórka z lekcji 6 i 7, ułożona obok siebie.",
          "Obie komórki mają: błonę, cytozol, jądro, mitochondria, rybosomy i wakuole.",
          "Tylko roślinna ma chloroplasty i ścianę komórkową (celuloza).",
          "Wakuole: u zwierzęcia wiele drobnych; u rośliny zwykle jedna, duża."
        ],
        ua: [
          "Це повторення уроків 6 і 7, покладене поряд.",
          "Обидві клітини мають: мембрану, цитозоль, ядро, мітохондрії, рибосоми і вакуолі.",
          "Лише рослинна має хлоропласти і клітинну стінку (целюлоза).",
          "Вакуолі: у тварини багато дрібних; у рослини зазвичай одна, велика."
        ]
      },
      task: {
        id: "l08-e4",
        type: "true-false",
        question: { pl: "Komórka roślinna, w odróżnieniu od zwierzęcej, ma chloroplasty i ścianę komórkową.", ua: "Рослинна клітина, на відміну від тваринної, має хлоропласти і клітинну стінку." },
        answer: true,
        explanation: { pl: "Tak. To dwie najważniejsze różnice z podręcznika.", ua: "Так. Це дві найважливіші відмінності з підручника." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Tabela czterech typów", ua: "Таблиця чотирьох типів" },
      visual: tree({
        layout: "fork",
        root: { pl: "cztery plany komórki", ua: "чотири плани клітини" },
        items: [
          { pl: "zwierzęca", ua: "тваринна" },
          { pl: "roślinna", ua: "рослинна" },
          { pl: "grzybowa", ua: "грибна" },
          { pl: "bakteryjna", ua: "бактеріальна" }
        ],
        caption: { pl: "trzy jądrowe + bakteria bez jądra", ua: "три ядерні + бактерія без ядра" }
      }),
      items: [
        { pl: "jądrowe: zwierzę, roślina, grzyb", ua: "ядерні: тварина, рослина, гриб" },
        { pl: "bezjądrowe: bakteria", ua: "без’ядерні: бактерія" },
        { pl: "wspólne wszystkim: błona, cytozol, rybosomy", ua: "спільні всім: мембрана, цитозоль, рибосоми" }
      ],
      text: {
        pl: [
          "Cztery plany obok siebie. Najpierw: czy jest jądro?",
          "Jądro: zwierzę, roślina, grzyb — tak. Bakteria — nie.",
          "Mitochondria i wakuole: trzy jądrowe — tak. Bakteria — nie.",
          "Chloroplasty: tylko roślina.",
          "Ściana: roślina (celuloza), grzyb (chityna), bakteria — tak. Zwierzę — nie.",
          "Błona, cytozol i rybosomy: wszystkie cztery typy."
        ],
        ua: [
          "Прочитай таблицю як мапу.",
          "Ядро: тварина, рослина, гриб — так. Бактерія — ні.",
          "Мітохондрії і вакуолі: три ядерні — так. Бактерія — ні.",
          "Хлоропласти: лише рослина.",
          "Стінка: рослина (целюлоза), гриб (хітин), бактерія — так. Тварина — ні.",
          "Мембрана, цитозоль і рибосоми: усі чотири типи."
        ]
      },
      task: {
        id: "l08-e5",
        type: "single-choice",
        question: { pl: "Które składniki występują we wszystkich czterech typach komórek?", ua: "Які складники є в усіх чотирьох типах клітин?" },
        options: [
          { id: "a", label: { pl: "błona komórkowa, cytozol, rybosomy", ua: "клітинна мембрана, цитозоль, рибосоми" } },
          { id: "b", label: { pl: "jądro, mitochondria, chloroplasty", ua: "ядро, мітохондрії, хлоропласти" } },
          { id: "c", label: { pl: "tylko ściana z celulozy", ua: "лише стінка з целюлози" } }
        ],
        answer: "a",
        explanation: { pl: "Wspólne dla wszystkich: błona, cytozol, rybosomy. Jądra nie ma bakteria. Chloroplastów nie ma zwierzę, grzyb i bakteria.", ua: "Спільні для всіх: мембрана, цитозоль, рибосоми." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Co jest wspólne — i czego tu nie mieszamy", ua: "Що спільне — і чого тут не змішуємо" },
      visual: vizGh("l08-wspolne.png", {
        alt: { pl: "Trzy wspólne składniki wszystkich komórek", ua: "Три спільні складники всіх клітин" },
        title: { pl: "Błona. Cytozol. Rybosomy.", ua: "Мембрана. Цитозоль. Рибосоми." },
        prompt: { pl: "Edukacyjna infografika 16:9. Trzy duże polskie karty: błona komórkowa, cytozol, rybosomy. Pod spodem mały napis: we wszystkich typach komórek z tej lekcji. Bez wirusów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Na koniec trzy rzeczy, które mają wszystkie poznane typy komórek: ", em("błona komórkowa"), ", ", em("cytozol"), " i ", em("rybosomy"), ".",
          "Wirusy nie są komórkami — nie wpisujemy ich do tej tabeli. Królestwa organizmów uporządkujesz później.",
          "Jeśli umiesz odczytać tabelę, umiesz porównać komórki."
        ],
        ua: [
          "Наприкінці три речі, які мають усі пізнані типи клітин: ", em("клітинна мембрана"), ", ", em("цитозоль"), " і ", em("рибосоми"), ".",
          "Віруси не є клітинами — не вписуємо їх у цю таблицю. Царства організмів упорядкуєш пізніше.",
          "Якщо вмієш читати таблицю, вмієш порівнювати клітини."
        ]
      },
      task: {
        id: "l08-e6",
        type: "true-false",
        question: { pl: "Błona komórkowa, cytozol i rybosomy występują we wszystkich typach komórek z tej lekcji.", ua: "Клітинна мембрана, цитозоль і рибосоми є в усіх типах клітин з цього уроку." },
        answer: true,
        explanation: { pl: "Tak. To wspólny zestaw. Jądro i mitochondria — tylko komórki jądrowe.", ua: "Так. Це спільний набір." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Jądrowe czy bezjądrowe?", ua: "Практика. Ядерні чи без’ядерні?" },
      task: {
        id: "l08-p1",
        type: "multiple-choice",
        question: { pl: "Zaznacz komórki jądrowe.", ua: "Познач ядерні клітини." },
        options: [
          { id: "a", label: { pl: "zwierzęce", ua: "тваринні" } },
          { id: "b", label: { pl: "roślinne", ua: "рослинні" } },
          { id: "c", label: { pl: "grzybowe", ua: "грибні" } },
          { id: "d", label: { pl: "bakteryjne", ua: "бактеріальні" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Bakteryjne są bezjądrowe. Pozostałe trzy mają jądro.", ua: "Бактеріальні без’ядерні. Решта три мають ядро." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zwierzę i roślina", ua: "Тварина і рослина" },
      task: {
        id: "l08-p2",
        type: "single-choice",
        question: { pl: "Która różnica komórki zwierzęcej i roślinnej jest poprawna?", ua: "Яка відмінність тваринної і рослинної клітини правильна?" },
        options: [
          { id: "a", label: { pl: "roślinna ma chloroplasty i ścianę; zwierzęca ich nie ma; wakuole: roślinna zwykle jedna duża, zwierzęca — wiele drobnych", ua: "рослинна має хлоропласти і стінку; тваринна їх не має; вакуолі: рослинна зазвичай одна велика, тваринна — багато дрібних" } },
          { id: "b", label: { pl: "zwierzęca ma chloroplasty, roślinna nie ma błony", ua: "тваринна має хлоропласти, рослинна не має мембрани" } },
          { id: "c", label: { pl: "obie nie mają jądra", ua: "обидві не мають ядра" } }
        ],
        answer: "a",
        explanation: { pl: "Obie mają błonę i jądro. Różnica: ściana, chloroplasty, wielkość wakuoli.", ua: "Обидві мають мембрану і ядро." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Bakteria", ua: "Бактерія" },
      task: {
        id: "l08-p3",
        type: "single-choice",
        question: { pl: "Która charakterystyka komórki bakteryjnej jest poprawna?", ua: "Яка характеристика бактеріальної клітини правильна?" },
        options: [
          { id: "a", label: { pl: "brak jądra, nić DNA w cytozolu, błona, ściana, rybosomy; czasem otoczka śluzowa i rzęski", ua: "немає ядра, нитка ДНК у цитозолі, мембрана, стінка, рибосоми; іноді слизова оболонка і війки" } },
          { id: "b", label: { pl: "duże jądro, chloroplasty i jedna ogromna wakuola jak u moczarki", ua: "велике ядро, хлоропласти і одна величезна вакуоля як в елодеї" } },
          { id: "c", label: { pl: "ściana wyłącznie z chityny i mitochondria jak u grzyba", ua: "стінка лише з хітину і мітохондрії як у гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Bakteria = bezjądrowa. Nie kopiuj schematu rośliny ani grzyba.", ua: "Бактерія = без’ядерна." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Grzyb", ua: "Гриб" },
      task: {
        id: "l08-p4",
        type: "true-false",
        question: { pl: "Komórka grzybowa ma jądro jak zwierzęca oraz ścianę z chityny; chloroplastów nie ma.", ua: "Грибна клітина має ядро як тваринна і стінку з хітину; хлоропластів не має." },
        answer: true,
        explanation: { pl: "Most: zwierzę + ściana. Materiał ściany = chityna, nie celuloza.", ua: "Місток: тварина + стінка. Матеріал стінки = хітин." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wspólne składniki", ua: "Спільні складники" },
      task: {
        id: "l08-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz składniki wspólne wszystkim typom komórek z lekcji.", ua: "Познач складники, спільні всім типам клітин з уроку." },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "cytozol", ua: "цитозоль" } },
          { id: "c", label: { pl: "rybosomy", ua: "рибосоми" } },
          { id: "d", label: { pl: "chloroplasty", ua: "хлоропласти" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Chloroplasty ma tylko komórka roślinna.", ua: "Хлоропласти має лише рослинна клітина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Jądrowe i bezjądrowe", ua: "Перевірка 1. Ядерні і без’ядерні" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l08-s1",
        type: "single-choice",
        question: { pl: "Jak dzielimy komórki ze względu na obecność jądra?", ua: "Як ділимо клітини за наявністю ядра?" },
        options: [
          { id: "a", label: { pl: "jądrowe (zwierzęce, roślinne, grzybowe) i bezjądrowe (bakteryjne)", ua: "ядерні (тваринні, рослинні, грибні) і без’ядерні (бактеріальні)" } },
          { id: "b", label: { pl: "tylko na duże i małe jaja strusia", ua: "лише на великі і малі яйця страуса" } },
          { id: "c", label: { pl: "wszystkie komórki są bezjądrowe", ua: "усі клітини без’ядерні" } }
        ],
        answer: "a",
        explanation: { pl: "Podział z podręcznika: jądro vs brak jądra (nić DNA).", ua: "Поділ з підручника: ядро vs відсутність ядра." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Zwierzę i roślina", ua: "Перевірка 2. Тварина і рослина" },
      task: {
        id: "l08-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz różnice komórki roślinnej względem zwierzęcej.", ua: "Познач відмінності рослинної клітини щодо тваринної." },
        options: [
          { id: "a", label: { pl: "ma chloroplasty", ua: "має хлоропласти" } },
          { id: "b", label: { pl: "ma ścianę komórkową", ua: "має клітинну стінку" } },
          { id: "c", label: { pl: "zwykle jedną dużą wakuolę (u zwierzęcia wiele drobnych)", ua: "зазвичай одну велику вакуолю (у тварини багато дрібних)" } },
          { id: "d", label: { pl: "nie ma błony komórkowej", ua: "не має клітинної мембрани" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Błonę mają obie. Różnica: chloroplasty, ściana, wakuola.", ua: "Мембрану мають обидві." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Bakteria", ua: "Перевірка 3. Бактерія" },
      task: {
        id: "l08-s3",
        type: "single-choice",
        question: { pl: "Która charakterystyka komórki bakteryjnej jest poprawna?", ua: "Яка характеристика бактеріальної клітини правильна?" },
        options: [
          { id: "a", label: { pl: "zamiast jądra nić DNA w cytozolu; błona i ściana; czasem otoczka śluzowa i rzęski; są rybosomy", ua: "замість ядра нитка ДНК у цитозолі; мембрана і стінка; іноді слизова оболонка і війки; є рибосоми" } },
          { id: "b", label: { pl: "ma jądro, chloroplasty i celulozę jak moczarka", ua: "має ядро, хлоропласти і целюлозу як елодея" } },
          { id: "c", label: { pl: "nie ma błony ani cytozolu", ua: "не має мембрани і цитозолю" } }
        ],
        answer: "a",
        explanation: { pl: "Bezjądrowa: nić DNA, błona, ściana, rybosomy, czasem otoczka i rzęski.", ua: "Без’ядерна: нитка ДНК, мембрана, стінка, рибосоми." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Grzyb", ua: "Перевірка 4. Гриб" },
      task: {
        id: "l08-s4",
        type: "single-choice",
        question: { pl: "Które zdanie o komórce grzybowej jest poprawne?", ua: "Яке речення про грибну клітину правильне?" },
        options: [
          { id: "a", label: { pl: "Ma jądro jak zwierzęca i ścianę z chityny; chloroplastów nie ma.", ua: "Має ядро як тваринна і стінку з хітину; хлоропластів не має." } },
          { id: "b", label: { pl: "Jest bezjądrowa jak bakteria.", ua: "Є без’ядерною як бактерія." } },
          { id: "c", label: { pl: "Ma chloroplasty i ścianę z celulozy.", ua: "Має хлоропласти і стінку з целюлози." } }
        ],
        answer: "a",
        explanation: { pl: "Grzyb ≠ bakteria i ≠ roślina. Jądro + chityna, bez chloroplastów.", ua: "Гриб ≠ бактерія і ≠ рослина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wspólne składniki", ua: "Перевірка 5. Спільні складники" },
      task: {
        id: "l08-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz składniki, które występują we wszystkich typach komórek z lekcji.", ua: "Познач складники, які є в усіх типах клітин з уроку." },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "cytozol", ua: "цитозоль" } },
          { id: "c", label: { pl: "rybosomy", ua: "рибосоми" } },
          { id: "d", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Jądra nie ma bakteria. Wspólne: błona, cytozol, rybosomy.", ua: "Ядра немає в бактерії. Спільні: мембрана, цитозоль, рибосоми." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l08-tabela.png", {
        alt: { pl: "Tabela rodzajów komórek", ua: "Таблиця видів клітин" },
        title: { pl: "Cztery kolumny. Trzy wspólne składniki.", ua: "Чотири колонки. Три спільні складники." },
        prompt: { pl: "Ta sama tabela porównawcza czterech typów komórek." }
      }),
      text: {
        pl: [
          "Komórki jądrowe: zwierzęce, roślinne, grzybowe. Bezjądrowe: bakteryjne (nić DNA w cytozolu).",
          "Roślina, w odróżnieniu od zwierzęcia: chloroplasty i ściana; zwykle jedna duża wakuola.",
          "Bakteria: brak jądra, nić DNA, błona, ściana, rybosomy; czasem otoczka śluzowa i rzęski.",
          "Grzyb: jak zwierzę plus ściana z chityny; bez chloroplastów.",
          "Wszystkie typy: błona komórkowa, cytozol, rybosomy."
        ],
        ua: [
          "Ядерні клітини: тваринні, рослинні, грибні. Без’ядерні: бактеріальні (нитка ДНК у цитозолі).",
          "Рослина, на відміну від тварини: хлоропласти і стінка; зазвичай одна велика вакуоля.",
          "Бактерія: немає ядра, нитка ДНК, мембрана, стінка, рибосоми; іноді слизова оболонка і війки.",
          "Гриб: як тварина плюс стінка з хітину; без хлоропластів.",
          "Усі типи: клітинна мембрана, цитозоль, рибосоми."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię podzielić komórki na jądrowe i bezjądrowe.", ua: "Можу поділити клітини на ядерні і без’ядерні." },
        { pl: "Potrafię wskazać różnice komórki zwierzęcej i roślinnej.", ua: "Можу вказати відмінності тваринної і рослинної клітини." },
        { pl: "Potrafię scharakteryzować budowę komórki bakteryjnej.", ua: "Можу схарактеризувати будову бактеріальної клітини." },
        { pl: "Potrafię powiedzieć, czym komórka grzybowa przypomina zwierzęcą, a czym roślinną.", ua: "Можу сказати, чим грибна клітина схожа на тваринну, а чим на рослинну." },
        { pl: "Potrafię wymienić składniki wspólne wszystkim typom komórek.", ua: "Можу назвати складники, спільні всім типам клітин." }
      ]
    }
  ]
};
