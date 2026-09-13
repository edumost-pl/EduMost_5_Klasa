function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L20_Grzyby_i_porosty/images/";

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
        { pl: "Powiesz, że ciało grzyba budują strzępki i grzybnia.", ua: "Скажеш, що тіло гриба будують гіфи і грибниця." },
        { pl: "Wskażesz kapelusz, trzon i blaszki u grzyba kapeluszowego.", ua: "Вкажеш шапинку, ніжку і пластинки в шапинкового гриба." },
        { pl: "Przypomnisz, że drożdże to jednokomórkowe grzyby.", ua: "Пригадаєш, що дріжджі — одноклітинні гриби." },
        { pl: "Rozróżnisz saprobionta, pasożyta i mikoryzę.", ua: "Розрізню сапробіонта, паразита і мікоризу." },
        { pl: "Wyjaśnisz, czym jest porost i dlaczego bywa bioindykatorem.", ua: "Поясниш, що таке лишайник і чому буває біоіндикатором." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "strzępki", ua: "гіфи" },
        { pl: "grzybnia", ua: "грибниця" },
        { pl: "owocnik", ua: "плодове тіло" },
        { pl: "drożdże", ua: "дріжджі" },
        { pl: "mikoryza", ua: "мікориза" },
        { pl: "porost", ua: "лишайник" },
        { pl: "bioindykator", ua: "біоіндикатор" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l20-zacznijmy.png", {
        alt: { pl: "Grzyb kapeluszowy w lesie", ua: "Шапинковий гриб у лісі" },
        title: { pl: "To, co zrywasz, to często tylko „parasol”. Reszta jest w glebie.", ua: "Те, що зриваєш, часто лише «парасолька». Решта — в ґрунті." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Borowik (lub podobny jadalny wygląd, bez namawiania do zbierania) w mchu. Etykieta PL: owocnik. Strzałka w dół: grzybnia w glebie. Bez trujących znaków grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Królestwo grzybów z lekcji 15. Komórkę grzybową (ściana z chityny) porównywałeś na lekcji 8. Drożdże fermentowały na 13.",
          "Dziś: strzępki, kapelusz, sposoby życia i porosty. Nie jemy nieznanych grzybów — na końcu będzie twarda zasada."
        ],
        ua: [
          "Царство грибів з уроку 15. Клітину (стінка з хітину) порівнював на 8. Дріжджі бродили на 13.",
          "Сьогодні: гіфи, шапинка, способи життя і лишайники. Не їмо невідомих грибів."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Strzępki i grzybnia", ua: "Гіфи і грибниця" },
      visual: vizGh("l20-grzybnia.png", {
        alt: { pl: "Sieć strzępek w glebie", ua: "Мережа гіфів у ґрунті" },
        title: { pl: "Cienkie nitki = strzępki. Ich sieć = grzybnia.", ua: "Тонкі нитки = гіфи. Їхня мережа = грибниця." },
        prompt: { pl: "Edukacyjna infografika 16:9. Przekrój gleby: biała sieć nitek z etykietą PL: strzępki / grzybnia. Nad ziemią mały owocnik. Bez korzeni roślin jako „to samo co strzępki”. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Grzyb budują ", em("strzępki"), " — cienkie nitki. Ich sieć to ", em("grzybnia"), "."],
          "Grzybnia często jest w glebie albo w drewnie. To właściwy organizm. Kapelusz, który widzisz, to zwykle tylko część do rozmnażania.",
          "Nie myl strzępek z korzeniem rośliny. Korzeń ma inną budowę — tkanki roślinne są na lekcji 21."
        ],
        ua: [
          ["Гриб будують ", em("гіфи"), " — тонкі нитки. Їхня мережа — ", em("грибниця"), "."],
          "Грибниця часто в ґрунті чи в деревині. Це власне організм. Шапинка — зазвичай частина для розмноження.",
          "Не плутати гіфи з коренем рослини. Тканини рослин — урок 21."
        ]
      },
      task: {
        id: "l20-e1",
        type: "single-choice",
        question: { pl: "Czym jest grzybnia?", ua: "Що таке грибниця?" },
        options: [
          { id: "a", label: { pl: "sieć strzępek — właściwe ciało grzyba", ua: "мережа гіфів — власне тіло гриба" } },
          { id: "b", label: { pl: "kapsyd wirusa", ua: "капсид вірусу" } },
          { id: "c", label: { pl: "jądro bakterii", ua: "ядро бактерії" } }
        ],
        answer: "a",
        explanation: { pl: "Strzępki → grzybnia. Kapelusz to często owocnik.", ua: "Гіфи → грибниця." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Owocnik: kapelusz, trzon, blaszki", ua: "Плодове тіло: шапинка, ніжка, пластинки" },
      visual: vizGh("l20-owocnik.png", {
        alt: { pl: "Budowa grzyba kapeluszowego", ua: "Будова шапинкового гриба" },
        title: { pl: "Owocnik wytwarza zarodniki. Blaszki są pod kapeluszem.", ua: "Плодове тіло виробляє спори. Пластинки під шапинкою." },
        prompt: { pl: "Edukacyjny przekrój 16:9 grzyba kapeluszowego z etykietami PL: kapelusz; trzon; blaszki; zarodniki (drobny proszek, nie groza). Napis: owocnik. Nie muchomor jako jedyny przykład jeśli groźnie — lepiej borowik / pieczarka. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["U wielu grzybów nad ziemią wyrasta ", em("owocnik"), " — kapelusz na trzonie."],
          "Pod kapeluszem bywają ", em("blaszki"), " (albo rurki). Stamtąd wysypują się zarodniki, z których może powstać nowa grzybnia.",
          "Nie wszystkie grzyby mają kapelusz. Pleśń na chlebie to też grzyb — strzępki bez „parasola”."
        ],
        ua: [
          ["У багатьох грибів над землею виростає ", em("плодове тіло"), " — шапинка на ніжці."],
          "Під шапинкою бувають ", em("пластинки"), " (або трубочки). Звідти сиплються спори.",
          "Не всі гриби мають шапинку. Цвіль на хлібі — теж гриб."
        ]
      },
      task: {
        id: "l20-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz części owocnika kapeluszowego.", ua: "Познач частини плодового тіла шапинкового гриба." },
        options: [
          { id: "a", label: { pl: "kapelusz", ua: "шапинка" } },
          { id: "b", label: { pl: "trzon", ua: "ніжка" } },
          { id: "c", label: { pl: "blaszki", ua: "пластинки" } },
          { id: "d", label: { pl: "okular mikroskopu", ua: "окуляр мікроскопа" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Kapelusz, trzon, blaszki. Okular to L3.", ua: "Шапинка, ніжка, пластинки." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Drożdże i grzyby kapeluszowe", ua: "Дріжджі і шапинкові гриби" },
      visual: tree({
        layout: "fork",
        root: { pl: "królestwo grzybów", ua: "царство грибів" },
        items: [
          { pl: "kapeluszowe — owocnik", ua: "шапинкові — плодове тіло" },
          { pl: "drożdże — jedna komórka", ua: "дріжджі — одна клітина" }
        ]
      }),
      items: [
        { pl: "wiele grzybów ma owocnik: kapelusz, trzon, blaszki", ua: "багато грибів мають плодове тіло: шапинка, ніжка, пластинки" },
        { pl: "drożdże są jednokomórkowe — bez kapelusza (lekcja 13)", ua: "дріжджі одноклітинні — без шапинки (урок 13)" }
      ],
      text: {
        pl: [
          ["", em("Drożdże"), " to grzyby jednokomórkowe. Nie budują kapelusza. Ściana z chityny — jak na lekcji 8."],
          "Na lekcji 13 pokazywały fermentację: cukier → dwutlenek węgla (i inne produkty). Pieczywo rośnie, bo gaz pęcznie ciasto.",
          "Grzyb ≠ zawsze las. Drożdże żyją w cieście i w naturze na owocach."
        ],
        ua: [
          ["", em("Дріжджі"), " — одноклітинні гриби. Не будують шапинки. Стінка з хітину — урок 8."],
          "На уроці 13 показували бродіння: цукор → вуглекислий газ. Хліб росте, бо газ розпушує тісто.",
          "Гриб ≠ завжди ліс."
        ]
      },
      task: {
        id: "l20-e3",
        type: "true-false",
        question: { pl: "Drożdże to jednokomórkowe grzyby — znasz je z doświadczenia z balonem.", ua: "Дріжджі — одноклітинні гриби — знаєш їх із досліду з кулькою." },
        answer: true,
        explanation: { pl: "L13 + L20. Nie kapelusz, ale królestwo grzybów.", ua: "Урок 13 + 20. Не шапинка, але царство грибів." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Saprobiont, pasożyt, mikoryza", ua: "Сапробіонт, паразит, мікориза" },
      visual: tree({
        layout: "fork",
        root: { pl: "grzyby (cudzożywne)", ua: "гриби (гетеротрофи)" },
        items: [
          { pl: "saprobiont", ua: "сапробіонт" },
          { pl: "pasożyt", ua: "паразит" },
          { pl: "mikoryza", ua: "мікориза" }
        ]
      }),
      items: [
        { pl: "saprobiont — martwe szczątki", ua: "сапробіонт — мертві рештки" },
        { pl: "pasożyt — żywy gospodarz", ua: "паразит — живий хазяїн" },
        { pl: "mikoryza — współpraca z korzeniem (obie strony zyskują)", ua: "мікориза — співпраця з коренем (обидві сторони виграють)" }
      ],
      text: {
        pl: [
          "Grzyby są cudzożywne (lekcja 11). Trzy ważne warianty:",
          ["", em("saprobiont"), " — martwe szczątki (pień, liście); ", em("pasożyt"), " — pokarm z żywego gospodarza (np. niektóre grzyby na drzewach lub roślinach); ", em("mikoryza"), " — współpraca strzępek z korzeniem rośliny: grzyb dostaje cukry, roślina — wodę i sole."],
          "Mikoryza to nie pasożytnictwo. Obie strony zyskują. Nie opisujemy tu tkanek korzenia — L21."
        ],
        ua: [
          "Гриби гетеротрофні (урок 11). Три варіанти:",
          ["", em("сапробіонт"), " — мертві рештки; ", em("паразит"), " — пожива з живого хазяїна; ", em("мікориза"), " — співпраця гіфів із коренем: гриб дістає цукри, рослина — воду і солі."],
          "Мікориза ≠ паразитизм. Обидві сторони виграють."
        ]
      },
      task: {
        id: "l20-e4",
        type: "single-choice",
        question: { pl: "Czym jest mikoryza?", ua: "Що таке мікориза?" },
        options: [
          { id: "a", label: { pl: "współpraca grzyba z korzeniem rośliny (cukry ↔ woda i sole)", ua: "співпраця гриба з коренем рослини (цукри ↔ вода і солі)" } },
          { id: "b", label: { pl: "to samo co kapsyd", ua: "те саме, що капсид" } },
          { id: "c", label: { pl: "pasteryzacja mleka", ua: "пастеризація молока" } }
        ],
        answer: "a",
        explanation: { pl: "Obie strony zyskują. Nie pasożyt i nie saprobiont.", ua: "Обидві сторони виграють." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Porost", ua: "Лишайник" },
      visual: vizGh("l20-porost.png", {
        alt: { pl: "Porost na korze drzewa", ua: "Лишайник на корі дерева" },
        title: { pl: "Grzyb + glon (albo sinice). Razem znoszą suszę na korze.", ua: "Гриб + водорість (або ціанобактерії). Разом зносять посуху на корі." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Porost listkowaty lub krzaczkowaty na korze, dzień. Etykiety PL: porost = grzyb + glon. Mały schemat: grzyb daje wodę i ochronę; glon — cukry z fotosyntezy. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Porost"), " to organizm dualny: grzyb + glon (albo sinice). Glon (protist samożywny / sinice) robi cukry. Grzyb daje wodę, sole i osłonę."],
          "Dlatego porosty rosną na korze, kamieniach i w miejscach, gdzie sama roślina miałaby trudno.",
          "Nie jest to „mech”. Mech to roślina (późniejsze lekcje). Porost nie należy do królestwa roślin."
        ],
        ua: [
          ["", em("Лишайник"), " — подвійний організм: гриб + водорість (або ціанобактерії). Водорость робить цукри. Гриб дає воду, солі і захист."],
          "Тому лишайники ростуть на корі й камені.",
          "Це не мох. Мох — рослина. Лишайник не царство рослин."
        ]
      },
      task: {
        id: "l20-e5",
        type: "true-false",
        question: { pl: "Porost to współżycie grzyba z glonem (lub sinicami).", ua: "Лишайник — співжиття гриба з водорістю (або ціанобактеріями)." },
        answer: true,
        explanation: { pl: "Dwa partnerzy. Nie mech i nie sama roślina.", ua: "Два партнери. Не мох." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Bioindykator i ostrożność", ua: "Біоіндикатор і обережність" },
      visual: vizGh("l20-bioindykator.png", {
        alt: { pl: "Porosty i czyste powietrze; nie jedz nieznanych grzybów", ua: "Лишайники і чисте повітря; не їж невідомих грибів" },
        title: { pl: "Porosty lubią czyste powietrze. Grzybów z lasu nie zgadujesz na talerzu.", ua: "Лишайники люблять чисте повітря. Грибів із лісу не вгадуєш на тарілці." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kafelki. LEWA: drzewo z porostami, etykieta PL: bioindykator — czyste powietrze. PRAWA: przekreślony talerz z nieznanym grzybem, etykieta: nie jedz nieznanych grzybów — tylko z dorosłym, który zna gatunki. Bez muchomora w grozie, bez trupiej czaszki, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Porosty są ", em("bioindykatorami"), ": źle znoszą zanieczyszczone powietrze. Gdzie ich dużo na drzewach, powietrze zwykle bywa czystsze. Gdzie ich brak w mieście — często sygnał spalin i dymu."],
          "Zasada bezpieczeństwa: ", em("nie jesz nieznanych grzybów"), ". Jadalny i trujący bywają podobni. Zbierasz tylko z dorosłym, który naprawdę zna gatunki — albo nie zbierasz wcale.",
          "To nie lekcja atlasu grzybów. To lekcja budowy, ekologii i rozsądku."
        ],
        ua: [
          ["Лишайники — ", em("біоіндикатори"), ": погано зносять брудне повітря. Де їх багато на деревах, повітря зазвичай чистіше."],
          "Правило: ", em("не їси невідомих грибів"), ". Їстівний і отруйний бувають схожі. Лише з дорослим, який знає види.",
          "Це не урок атласу грибів. Це будова, екологія і розсудливість."
        ]
      },
      task: {
        id: "l20-e6",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "porosty bywają bioindykatorami czystości powietrza", ua: "лишайники бувають біоіндикаторами чистоти повітря" } },
          { id: "b", label: { pl: "nie jemy nieznanych grzybów", ua: "не їмо невідомих грибів" } },
          { id: "c", label: { pl: "każdy kapelusz w lesie jest bezpieczny", ua: "кожна шапинка в лісі безпечна" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Bioindykator + twarda zasada bezpieczeństwa.", ua: "Біоіндикатор + тверде правило безпеки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Grzybnia", ua: "Практика. Грибниця" },
      task: {
        id: "l20-p1",
        type: "single-choice",
        question: { pl: "Strzępki to:", ua: "Гіфи — це:" },
        options: [
          { id: "a", label: { pl: "cienkie nitki, z których składa się grzybnia", ua: "тонкі нитки, з яких складається грибниця" } },
          { id: "b", label: { pl: "blaszki tylko u bakterii", ua: "пластинки лише в бактерій" } },
          { id: "c", label: { pl: "kapsyd wirusa", ua: "капсид вірусу" } }
        ],
        answer: "a",
        explanation: { pl: "Nitki → sieć = grzybnia.", ua: "Нитки → мережа = грибниця." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Owocnik", ua: "Плодове тіло" },
      task: {
        id: "l20-p2",
        type: "true-false",
        question: { pl: "Kapelusz, trzon i blaszki to części owocnika grzyba kapeluszowego.", ua: "Шапинка, ніжка і пластинки — частини плодового тіла шапинкового гриба." },
        answer: true,
        explanation: { pl: "Owocnik nad ziemią. Grzybnia często pod spodem.", ua: "Плодове тіло над землею." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Drożdże", ua: "Дріжджі" },
      task: {
        id: "l20-p3",
        type: "single-choice",
        question: { pl: "Drożdże to:", ua: "Дріжджі — це:" },
        options: [
          { id: "a", label: { pl: "jednokomórkowe grzyby (fermentacja z lekcji 13)", ua: "одноклітинні гриби (бродіння з уроку 13)" } },
          { id: "b", label: { pl: "protisty z nibynóżkami", ua: "протисти з несправжніми ніжками" } },
          { id: "c", label: { pl: "wirusy grypy", ua: "віруси грипу" } }
        ],
        answer: "a",
        explanation: { pl: "Królestwo grzybów. Nie pełzak, nie wirus.", ua: "Царство грибів." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Sposoby życia", ua: "Способи життя" },
      task: {
        id: "l20-p4",
        type: "single-choice",
        question: { pl: "Grzyb na spróchniałym pniu to najczęściej:", ua: "Гриб на трухлому пні — найчастіше:" },
        options: [
          { id: "a", label: { pl: "saprobiont", ua: "сапробіонт" } },
          { id: "b", label: { pl: "roślina samożywna z chloroplastami liścia", ua: "саможивна рослина з хлоропластами листка" } },
          { id: "c", label: { pl: "wirus", ua: "вірус" } }
        ],
        answer: "a",
        explanation: { pl: "Martwe szczątki = saprobiont (L11). Mikoryza = korzeń żywej rośliny.", ua: "Мертві рештки = сапробіонт." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Porost", ua: "Лишайник" },
      task: {
        id: "l20-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania o porostach.", ua: "Познач речення про лишайники." },
        options: [
          { id: "a", label: { pl: "to grzyb + glon (lub sinice)", ua: "це гриб + водорість (або ціанобактерії)" } },
          { id: "b", label: { pl: "bywają bioindykatorami powietrza", ua: "бувають біоіндикаторами повітря" } },
          { id: "c", label: { pl: "to to samo co dąb", ua: "це те саме, що дуб" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Dualny organizm + czyste powietrze. Dąb to roślina.", ua: "Подвійний організм + чисте повітря." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Strzępki", ua: "Перевірка 1. Гіфи" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l20-s1",
        type: "single-choice",
        question: { pl: "Co buduje ciało grzyba?", ua: "Що будує тіло гриба?" },
        options: [
          { id: "a", label: { pl: "strzępki tworzące grzybnię", ua: "гіфи, що утворюють грибницю" } },
          { id: "b", label: { pl: "tylko chloroplasty liścia", ua: "лише хлоропласти листка" } },
          { id: "c", label: { pl: "kapsyd bez komórki", ua: "капсид без клітини" } }
        ],
        answer: "a",
        explanation: { pl: "Strzępki + grzybnia.", ua: "Гіфи + грибниця." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Owocnik", ua: "Перевірка 2. Плодове тіло" },
      task: {
        id: "l20-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz części grzyba kapeluszowego.", ua: "Познач частини шапинкового гриба." },
        options: [
          { id: "a", label: { pl: "kapelusz", ua: "шапинка" } },
          { id: "b", label: { pl: "trzon", ua: "ніжка" } },
          { id: "c", label: { pl: "blaszki", ua: "пластинки" } },
          { id: "d", label: { pl: "okular", ua: "окуляр" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Owocnik: kapelusz, trzon, blaszki.", ua: "Плодове тіло." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Drożdże", ua: "Перевірка 3. Дріжджі" },
      task: {
        id: "l20-s3",
        type: "true-false",
        question: { pl: "Drożdże to jednokomórkowe grzyby.", ua: "Дріжджі — одноклітинні гриби." },
        answer: true,
        explanation: { pl: "L13 fermentacja. L8 chityna.", ua: "Урок 13 бродіння." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Mikoryza", ua: "Перевірка 4. Мікориза" },
      task: {
        id: "l20-s4",
        type: "single-choice",
        question: { pl: "Jak odróżnisz saprobionta, pasożyta i mikoryzę?", ua: "Як відрізниш сапробіонта, паразита і мікоризу?" },
        options: [
          { id: "a", label: { pl: "saprobiont — szczątki; pasożyt — żywy gospodarz; mikoryza — współpraca z korzeniem", ua: "сапробіонт — рештки; паразит — живий хазяїн; мікориза — співпраця з коренем" } },
          { id: "b", label: { pl: "wszystkie trzy to wirusy", ua: "усі три — віруси" } },
          { id: "c", label: { pl: "mikoryza to pasteryzacja", ua: "мікориза — пастеризація" } }
        ],
        answer: "a",
        explanation: { pl: "Trzy relacje. Mikoryza = zysk obu stron.", ua: "Три стосунки. Мікориза = виграш обох." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Porost", ua: "Перевірка 5. Лишайник" },
      task: {
        id: "l20-s5",
        type: "single-choice",
        question: { pl: "Czym jest porost i dlaczego bywa bioindykatorem?", ua: "Що таке лишайник і чому буває біоіндикатором?" },
        options: [
          { id: "a", label: { pl: "grzyb + glon (sinice); źle znosi zanieczyszczone powietrze", ua: "гриб + водорість (ціанобактерії); погано зносить брудне повітря" } },
          { id: "b", label: { pl: "to bakteria bez nici DNA", ua: "це бактерія без нитки ДНК" } },
          { id: "c", label: { pl: "to nazwa antybiotyku", ua: "це назва антибіотика" } }
        ],
        answer: "a",
        explanation: { pl: "Dualny organizm. Czyste powietrze. Nie jedz nieznanych grzybów.", ua: "Подвійний організм. Чисте повітря." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l20-owocnik.png", {
        alt: { pl: "Owocnik", ua: "Плодове тіло" },
        title: { pl: "Grzybnia w glebie. Owocnik nad nią. Porost = duet.", ua: "Грибниця в ґрунті. Плодове тіло над нею. Лишайник = дует." },
        prompt: { pl: "Ten sam przekrój owocnika." }
      }),
      text: {
        pl: [
          "Strzępki → grzybnia. Owocnik: kapelusz, trzon, blaszki.",
          "Drożdże = jednokomórkowe grzyby (L13).",
          "Saprobiont / pasożyt / mikoryza.",
          "Porost = grzyb + glon (sinice). Bioindykator powietrza.",
          "Nie jesz nieznanych grzybów."
        ],
        ua: [
          "Гіфи → грибниця. Плодове тіло: шапинка, ніжка, пластинки.",
          "Дріжджі = одноклітинні гриби.",
          "Сапробіонт / паразит / мікориза.",
          "Лишайник = гриб + водорість. Біоіндикатор.",
          "Не їси невідомих грибів."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię powiedzieć, że ciało grzyba budują strzępki i grzybnia.", ua: "Можу сказати, що тіло гриба будують гіфи і грибниця." },
        { pl: "Potrafię wskazać kapelusz, trzon i blaszki.", ua: "Можу вказати шапинку, ніжку і пластинки." },
        { pl: "Potrafię przypomnieć, że drożdże to grzyby.", ua: "Можу пригадати, що дріжджі — гриби." },
        { pl: "Potrafię rozróżnić saprobionta, pasożyta i mikoryzę.", ua: "Можу розрізнити сапробіонта, паразита і мікоризу." },
        { pl: "Potrafię wyjaśnić porost i bioindykator.", ua: "Можу пояснити лишайник і біоіндикатор." }
      ]
    }
  ]
};
