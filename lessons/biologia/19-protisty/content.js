function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L19_Protisty/images/";

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
        { pl: "Powiesz, że protisty to organizmy jądrowe, zwykle jednokomórkowe.", ua: "Скажеш, що протисти — ядерні організми, зазвичай одноклітинні." },
        { pl: "Rozpoznasz euglenę, pantofelka i pełzaka.", ua: "Розпізнаєш евглену, інфузорію-туфельку і амебу." },
        { pl: "Porównasz samożywność, cudzożywność i odżywianie mieszane u protistów.", ua: "Порівняєш саможивність, гетеротрофність і змішане живлення протистів." },
        { pl: "Powiesz, czym są glony i jaką rolę odgrywają w wodzie.", ua: "Скажеш, що таке водорості і яку роль відіграють у воді." },
        { pl: "Oddzielisz protisty od grzybów i bakterii.", ua: "Відділиш протистів від грибів і бактерій." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "protisty", ua: "протисти" },
        { pl: "euglena", ua: "евглена" },
        { pl: "pantofelek", ua: "інфузорія-туфелька" },
        { pl: "pełzak", ua: "амеба" },
        { pl: "glony", ua: "водорості" },
        { pl: "odżywianie mieszane", ua: "змішане живлення" },
        { pl: "jednokomórkowy", ua: "одноклітинний" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l19-zacznijmy.png", {
        alt: { pl: "Kropla stawu pełna życia", ua: "Крапля ставка повна життя" },
        title: { pl: "W kropli wody są organizmy z jądrem, często z jednej komórki.", ua: "У краплі води є організми з ядром, часто з однієї клітини." },
        prompt: { pl: "Fotorealistyczny / edukacyjny kadr 16:9. Kropla stawu, w powiększeniu trzy protisty: zielona euglena, pantofelek, pełzak. Etykieta PL: protisty. Bez bakterii jako głównego tematu, bez grzybów, bez grozy, bez malarii w zbliżeniu, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Królestwo protistów (lekcja 15) to „szuflada” na organizmy jądrowe, które nie są rośliną, zwierzęciem ani grzybem w szkolnym podziale.",
          "Większość poznasz jako jednokomórkowce ze stawu. Grzyby zostaw na lekcję 20. Bakterie już umiesz — nie mają jądra."
        ],
        ua: [
          "Царство протистів (урок 15) — «шухляда» для ядерних організмів, які не є рослиною, твариною чи грибом у шкільному поділі.",
          "Більшість пізнаєш як одноклітинні зі ставка. Гриби — урок 20. Бактерії вже вмієш — не мають ядра."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Jądrowe, zwykle jednokomórkowe", ua: "Ядерні, зазвичай одноклітинні" },
      visual: vizGh("l19-jadrowe.png", {
        alt: { pl: "Protist z jądrem vs bakteria bez jądra", ua: "Протист з ядром vs бактерія без ядра" },
        title: { pl: "Mają jądro. To nie bakterie.", ua: "Мають ядро. Це не бактерії." },
        prompt: { pl: "Edukacyjne porównanie 16:9. LEWA: protist (pantofelek) z jądrem, etykieta PL: komórka jądrowa — protisty. PRAWA: bakteria z nicią DNA, etykieta: bezjądrowa. Bez wirusów, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Protisty"), " mają komórki ", em("jądrowe"), ". Dlatego nie mylisz ich z bakteriami z lekcji 17."],
          "Zwykle są ", em("jednokomórkowe"), " — cały organizm to jedna komórka. Niektóre glony bywają wielokomórkowe; na klasę 5: „zwykle jedna komórka”.",
          "Nie są wirusami (brak komórki). Nie są grzybami z kapeluszem — to lekcja 20."
        ],
        ua: [
          ["", em("Протисти"), " мають ", em("ядерні"), " клітини. Тому не плутаєш їх із бактеріями з уроку 17."],
          "Зазвичай ", em("одноклітинні"), ". Деякі водорості бувають багатоклітинні; для 5 класу: «зазвичай одна клітина».",
          "Не віруси. Не гриби з шапинкою — урок 20."
        ]
      },
      task: {
        id: "l19-e1",
        type: "true-false",
        question: { pl: "Protisty to organizmy jądrowe, zwykle jednokomórkowe.", ua: "Протисти — ядерні організми, зазвичай одноклітинні." },
        answer: true,
        explanation: { pl: "Jądro = nie bakteria. Zwykle jedna komórka.", ua: "Ядро = не бактерія." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Euglena", ua: "Евглена" },
      visual: vizGh("l19-euglena.png", {
        alt: { pl: "Euglena zielona z wicią", ua: "Евглена зелена з джгутиком" },
        title: { pl: "Zielona, ruchliwa. Na świetle jak roślina, w ciemności może brać gotowy pokarm.", ua: "Зелена, рухлива. На світлі як рослина, у темряві може брати готову поживу." },
        prompt: { pl: "Edukacyjny model 16:9 eugleny z etykietami PL: wić (ruch); chloroplasty (zielone); jądro; plamka oczna. Nagłówek: odżywianie mieszane. Bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Euglena"), " ma chloroplasty — na świetle prowadzi fotosyntezę (jak rośliny z lekcji 9, ale to nadal protist)."],
          "Ma wić i plamkę oczną, więc pływa ku światłu. Gdy długo nie ma światła, może korzystać z gotowego pokarmu. To ", em("odżywianie mieszane"), ".",
          "Nie wkładamy eugleny do królestwa roślin tylko dlatego, że jest zielona."
        ],
        ua: [
          ["", em("Евглена"), " має хлоропласти — на світлі веде фотосинтез (як рослини з уроку 9, але це протист)."],
          "Має джгутик і вічко, тож пливе до світла. Без світла може брати готову поживу. Це ", em("змішане живлення"), ".",
          "Не кладемо евглену до царства рослин лише тому, що зелена."
        ]
      },
      task: {
        id: "l19-e2",
        type: "single-choice",
        question: { pl: "Co jest charakterystyczne dla eugleny?", ua: "Що характерне для евглени?" },
        options: [
          { id: "a", label: { pl: "chloroplasty i odżywianie mieszane (światło / gotowy pokarm)", ua: "хлоропласти і змішане живлення (світло / готова пожива)" } },
          { id: "b", label: { pl: "brak jądra jak u bakterii", ua: "відсутність ядра як у бактерії" } },
          { id: "c", label: { pl: "kapelusz i trzon", ua: "шапинка і ніжка" } }
        ],
        answer: "a",
        explanation: { pl: "Zielona + wić. Protist, nie roślina i nie grzyb.", ua: "Зелена + джгутик. Протист." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pantofelek", ua: "Інфузорія-туфелька" },
      visual: vizGh("l19-pantofelek.png", {
        alt: { pl: "Pantofelek z rzęskami", ua: "Туфелька з війками" },
        title: { pl: "Rzęski, „buziak”, cudzożywny. Żyje w wodzie.", ua: "Війки, «ротик», гетеротроф. Живе у воді." },
        prompt: { pl: "Edukacyjny model 16:9 pantofelka (kształt pantofla) z etykietami PL: rzęski; otwór gębowy; jądro; wodniczki. Nagłówek: cudzożywny. Bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pantofelek"), " (orzęsek) ma kształt pantofla i gęste ", em("rzęski"), " — nimi pływa i nagania pokarm."],
          "Jest cudzożywny: pobiera bakterie i drobne cząstki. Ma otwór gębowy (to nie usta ssaka — to miejsce w komórce).",
          "Nie myl rzęsek pantofelka z rzęską bakterii z lekcji 17. Tu cały organizm to jedna duża komórka jądrowa."
        ],
        ua: [
          ["", em("Інфузорія-туфелька"), " має форму туфлі і густі ", em("війки"), " — ними плаває і наганяє поживу."],
          "Гетеротроф: бере бактерії і дрібні частки. Має клітинний рот.",
          "Не плутати війки туфельки з джгутиком бактерії з уроку 17."
        ]
      },
      task: {
        id: "l19-e3",
        type: "single-choice",
        question: { pl: "Pantofelek jest:", ua: "Туфелька є:" },
        options: [
          { id: "a", label: { pl: "cudzożywnym protistem z rzęskami", ua: "гетеротрофним протистом із війками" } },
          { id: "b", label: { pl: "grzybem kapeluszowym", ua: "шапинковим грибом" } },
          { id: "c", label: { pl: "wirusem bez komórki", ua: "вірусом без клітини" } }
        ],
        answer: "a",
        explanation: { pl: "Orzęsek, jądro, woda. Nie grzyb, nie wirus.", ua: "Інфузорія, ядро, вода." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Pełzak", ua: "Амеба" },
      visual: vizGh("l19-pelzak.png", {
        alt: { pl: "Pełzak z nibynóżkami", ua: "Амеба з несправжніми ніжками" },
        title: { pl: "Zmienia kształt. Nibynóżki do ruchu i pokarmu.", ua: "Змінює форму. Несправжні ніжки для руху і поживи." },
        prompt: { pl: "Edukacyjny model 16:9 pełzaka (ameby) z etykietami PL: nibynóżki; jądro; wodniczka pokarmowa. Nagłówek: cudzożywny, zmienia kształt. Bez malarii, bez grozy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Pełzak"), " (ameba) nie ma stałego kształtu. Wypuszcza ", em("nibynóżki"), " — nimi pełza i otacza pokarm."],
          "Jest cudzożywny. Żyje w wodzie i w wilgotnej glebie.",
          "Niektóre pełzaki bywają pasożytami człowieka. Na klasę 5 wystarczy jedno zdanie: są gatunki chorobotwórcze; szczegóły i groza nie należą do tej lekcji. Malaria to choroba wywoływana przez innego protista — jedno zdanie, bez obrazków cierpienia."
        ],
        ua: [
          ["", em("Амеба"), " не має сталої форми. Випускає ", em("несправжні ніжки"), " — ними повзає і оточує поживу."],
          "Гетеротроф. Живе у воді і у вологому ґрунті.",
          "Деякі амеби бувають паразитами. Для 5 класу одне речення без жаху. Малярія — інший протист, одне речення, без картин страждання."
        ]
      },
      task: {
        id: "l19-e4",
        type: "true-false",
        question: { pl: "Pełzak porusza się i pobiera pokarm dzięki nibynóżkom.", ua: "Амеба рухається і бере поживу завдяки несправжнім ніжкам." },
        answer: true,
        explanation: { pl: "Zmienny kształt. Cudzożywny protist.", ua: "Змінна форма. Гетеротрофний протист." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy sposoby odżywiania", ua: "Три способи живлення" },
      visual: tree({
        layout: "nested",
        root: { pl: "protisty", ua: "протисти" },
        groups: [
          {
            title: { pl: "samożywne", ua: "саможивні" },
            items: [{ pl: "glony", ua: "водорості" }]
          },
          {
            title: { pl: "mieszane", ua: "змішані" },
            items: [{ pl: "euglena", ua: "евглена" }]
          },
          {
            title: { pl: "cudzożywne", ua: "гетеротрофні" },
            items: [
              { pl: "pantofelek", ua: "туфелька" },
              { pl: "pełzak", ua: "амеба" }
            ]
          }
        ]
      }),
      items: [
        { pl: "samożywne — glony (fotosynteza)", ua: "саможивні — водорості (фотосинтез)" },
        { pl: "mieszane — euglena", ua: "змішані — евглена" },
        { pl: "cudzożywne — pantofelek, pełzak", ua: "гетеротрофні — туфелька, амеба" }
      ],
      text: {
        pl: [
          "Protisty odżywiają się różnie:",
          "samożywne (glony — fotosynteza); cudzożywne (pantofelek, pełzak); mieszane (euglena).",
          "To ten sam podział idei co lekcje 9 i 11, tylko w królestwie protistów. Nie zgadujemy królestwa po samym kolorze."
        ],
        ua: [
          "Протисти живляться по-різному:",
          "саможивні (водорості — фотосинтез); гетеротрофні (туфелька, амеба); змішані (евглена).",
          "Та сама ідея, що уроки 9 і 11, тільки в царстві протистів."
        ]
      },
      task: {
        id: "l19-e5",
        type: "single-choice",
        question: { pl: "Który zestaw jest poprawny?", ua: "Який набір правильний?" },
        options: [
          { id: "a", label: { pl: "glony — samożywne; pantofelek — cudzożywny; euglena — mieszane", ua: "водорості — саможивні; туфелька — гетеротроф; евглена — змішане" } },
          { id: "b", label: { pl: "wszystkie protisty to wirusy", ua: "усі протисти — віруси" } },
          { id: "c", label: { pl: "pełzak prowadzi fotosyntezę w kapeluszu", ua: "амеба веде фотосинтез у шапинці" } }
        ],
        answer: "a",
        explanation: { pl: "Trzy strategie. Nie wirus, nie grzyb.", ua: "Три стратегії." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Glony w wodzie", ua: "Водорості у воді" },
      visual: vizGh("l19-glony.png", {
        alt: { pl: "Glony w stawie i tlen", ua: "Водорості в ставку і кисень" },
        title: { pl: "Fotosynteza w wodzie: tlen i pokarm dla innych.", ua: "Фотосинтез у воді: кисень і пожива для інших." },
        prompt: { pl: "Fotorealistyczne zdjęcie / infografika 16:9. Staw, nitkowate glony, mała rybka. Etykiety PL: glony; tlen; pokarm. Bez zakwitu toksycznego jako groza, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Glony"), " to protisty (lub grupy do nich zaliczane w podręczniku) z chlorofilem. Żyją głównie w wodzie. Bywają jednokomórkowe albo nitkowate."],
          "Dzięki fotosyntezie dają ", em("tlen"), " i są pokarmem dla zwierząt wodnych. To nie tkanki liścia z lekcji 21 — nie opisujemy skórki i wiązek.",
          "Zakwit glonów bywa problemem w brudnej wodzie. Na klasę 5: glony są ważne; przesada (za dużo ścieków) szkodzi stawowi. Malaria: niektóre protisty pasożytnicze wywołują choroby — jedno zdanie, bez szczegółów klinicznych."
        ],
        ua: [
          ["", em("Водорості"), " — протисти з хлорофілом. Живуть здебільшого у воді."],
          "Завдяки фотосинтезу дають ", em("кисень"), " і є поживою. Це не тканини листка з уроку 21.",
          "Цвітіння води буває проблемою. Малярія: деякі паразитичні протисти — одне речення без клініки."
        ]
      },
      task: {
        id: "l19-e6",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe o glonach.", ua: "Познач правдиві речення про водорості." },
        options: [
          { id: "a", label: { pl: "prowadzą fotosyntezę i dają tlen w wodzie", ua: "ведуть фотосинтез і дають кисень у воді" } },
          { id: "b", label: { pl: "są pokarmem dla wielu organizmów wodnych", ua: "є поживою для багатьох водних організмів" } },
          { id: "c", label: { pl: "to to samo co kapelusz borowika", ua: "це те саме, що шапинка боровика" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Tlen + pokarm. Kapelusz to grzyb (L20).", ua: "Кисень + пожива. Шапинка — гриб." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Królestwo", ua: "Практика. Царство" },
      task: {
        id: "l19-p1",
        type: "single-choice",
        question: { pl: "Czym protisty różnią się od bakterii?", ua: "Чим протисти відрізняються від бактерій?" },
        options: [
          { id: "a", label: { pl: "mają jądro (komórki jądrowe)", ua: "мають ядро (ядерні клітини)" } },
          { id: "b", label: { pl: "nigdy nie żyją w wodzie", ua: "ніколи не живуть у воді" } },
          { id: "c", label: { pl: "to wirusy bez kapsydu", ua: "це віруси без капсиду" } }
        ],
        answer: "a",
        explanation: { pl: "Jądro. Bakteria = nić DNA w cytozolu.", ua: "Ядро. Бактерія = нитка ДНК." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Trójka ze stawu", ua: "Трійка зі ставка" },
      task: {
        id: "l19-p2",
        type: "multiple-choice",
        question: { pl: "Zaznacz protisty z tej lekcji.", ua: "Познач протистів з цього уроку." },
        options: [
          { id: "a", label: { pl: "euglena", ua: "евглена" } },
          { id: "b", label: { pl: "pantofelek", ua: "туфелька" } },
          { id: "c", label: { pl: "pełzak", ua: "амеба" } },
          { id: "d", label: { pl: "muchomor", ua: "мухомор" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy protisty. Muchomor to grzyb (L20).", ua: "Три протисти. Мухомор — гриб." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Euglena", ua: "Евглена" },
      task: {
        id: "l19-p3",
        type: "true-false",
        question: { pl: "Euglena może odżywiać się mieszanie: fotosynteza na świetle i gotowy pokarm w ciemności.", ua: "Евглена може живитися змішано: фотосинтез на світлі і готова пожива в темряві." },
        answer: true,
        explanation: { pl: "Chloroplasty + możliwość cudzożywności.", ua: "Хлоропласти + можливість гетеротрофності." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ruch", ua: "Рух" },
      task: {
        id: "l19-p4",
        type: "single-choice",
        question: { pl: "Czym pantofelek różni się od pełzaka w ruchu?", ua: "Чим туфелька відрізняється від амеби в русі?" },
        options: [
          { id: "a", label: { pl: "pantofelek ma rzęski; pełzak — nibynóżki", ua: "туфелька має війки; амеба — несправжні ніжки" } },
          { id: "b", label: { pl: "oba mają kapelusz i blaszki", ua: "обидва мають шапинку і пластинки" } },
          { id: "c", label: { pl: "pełzak to wirus", ua: "амеба — вірус" } }
        ],
        answer: "a",
        explanation: { pl: "Rzęski vs nibynóżki. Oba jądrowe, cudzożywne.", ua: "Війки vs несправжні ніжки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Glony", ua: "Водорості" },
      task: {
        id: "l19-p5",
        type: "single-choice",
        question: { pl: "Jaką rolę pełnią glony w wodzie?", ua: "Яку роль виконують водорості у воді?" },
        options: [
          { id: "a", label: { pl: "fotosynteza: tlen i pokarm dla innych organizmów", ua: "фотосинтез: кисень і пожива для інших організмів" } },
          { id: "b", label: { pl: "budują kapsyd wirusa", ua: "будують капсид вірусу" } },
          { id: "c", label: { pl: "to to samo co pasteryzacja mleka", ua: "це те саме, що пастеризація молока" } }
        ],
        answer: "a",
        explanation: { pl: "Samożywne protisty w wodzie. Nie tkanki liścia (L21).", ua: "Саможивні протисти у воді." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Definicja", ua: "Перевірка 1. Означення" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l19-s1",
        type: "true-false",
        question: { pl: "Protisty to organizmy jądrowe, zwykle jednokomórkowe.", ua: "Протисти — ядерні організми, зазвичай одноклітинні." },
        answer: true,
        explanation: { pl: "Nie bakterie. Nie wirusy.", ua: "Не бактерії. Не віруси." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Trójka", ua: "Перевірка 2. Трійка" },
      task: {
        id: "l19-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz euglenę, pantofelka i pełzaka.", ua: "Познач евглену, туфельку і амебу." },
        options: [
          { id: "a", label: { pl: "euglena", ua: "евглена" } },
          { id: "b", label: { pl: "pantofelek", ua: "туфелька" } },
          { id: "c", label: { pl: "pełzak", ua: "амеба" } },
          { id: "d", label: { pl: "dąb", ua: "дуб" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy protisty. Dąb to roślina.", ua: "Три протисти. Дуб — рослина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Odżywianie", ua: "Перевірка 3. Живлення" },
      task: {
        id: "l19-s3",
        type: "single-choice",
        question: { pl: "Które porównanie jest poprawne?", ua: "Яке порівняння правильне?" },
        options: [
          { id: "a", label: { pl: "glony — samożywne; pantofelek i pełzak — cudzożywne; euglena — mieszane", ua: "водорості — саможивні; туфелька і амеба — гетеротрофи; евглена — змішане" } },
          { id: "b", label: { pl: "wszystkie protisty są bezjądrowe", ua: "усі протисти без’ядерні" } },
          { id: "c", label: { pl: "euglena to kapelusz grzyba", ua: "евглена — шапинка гриба" } }
        ],
        answer: "a",
        explanation: { pl: "Trzy strategie w jednym królestwie.", ua: "Три стратегії в одному царстві." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Glony", ua: "Перевірка 4. Водорості" },
      task: {
        id: "l19-s4",
        type: "single-choice",
        question: { pl: "Czym są glony i jaką mają rolę w wodzie?", ua: "Що таке водорості і яку роль мають у воді?" },
        options: [
          { id: "a", label: { pl: "samożywne protisty; dają tlen i pokarm", ua: "саможивні протисти; дають кисень і поживу" } },
          { id: "b", label: { pl: "to wirusy grypy", ua: "це віруси грипу" } },
          { id: "c", label: { pl: "to pasteryzowane mleko", ua: "це пастеризоване молоко" } }
        ],
        answer: "a",
        explanation: { pl: "Fotosynteza w wodzie. Nie L21 o tkankach liścia.", ua: "Фотосинтез у воді." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Nie grzyb, nie bakteria", ua: "Перевірка 5. Не гриб, не бактерія" },
      task: {
        id: "l19-s5",
        type: "single-choice",
        question: { pl: "Które zdanie oddziela protisty od innych grup?", ua: "Яке речення відділяє протистів від інших груп?" },
        options: [
          { id: "a", label: { pl: "mają jądro (nie bakterie); nie są grzybami kapeluszowymi ani wirusami", ua: "мають ядро (не бактерії); не є шапинковими грибами і не вірусами" } },
          { id: "b", label: { pl: "to to samo co królestwo zwierząt", ua: "це те саме, що царство тварин" } },
          { id: "c", label: { pl: "nie mają komórki", ua: "не мають клітини" } }
        ],
        answer: "a",
        explanation: { pl: "Jądrowe. Grzyby = L20. Wirusy = L16. Bakterie = L17.", ua: "Ядерні. Гриби = 20. Віруси = 16." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l19-zacznijmy.png", {
        alt: { pl: "Protisty w kropli", ua: "Протисти в краплі" },
        title: { pl: "Jądro. Euglena, pantofelek, pełzak. Glony dają tlen.", ua: "Ядро. Евглена, туфелька, амеба. Водорості дають кисень." },
        prompt: { pl: "Ten sam kadr kropli stawu." }
      }),
      text: {
        pl: [
          "Protisty: jądrowe, zwykle jednokomórkowe.",
          "Euglena — mieszane. Pantofelek — rzęski, cudzożywny. Pełzak — nibynóżki.",
          "Glony: fotosynteza, tlen i pokarm w wodzie.",
          "Nie bakterie, nie grzyby, nie wirusy."
        ],
        ua: [
          "Протисти: ядерні, зазвичай одноклітинні.",
          "Евглена — змішане. Туфелька — війки, гетеротроф. Амеба — несправжні ніжки.",
          "Водорості: фотосинтез, кисень і пожива у воді.",
          "Не бактерії, не гриби, не віруси."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię powiedzieć, że protisty są jądrowe i zwykle jednokomórkowe.", ua: "Можу сказати, що протисти ядерні і зазвичай одноклітинні." },
        { pl: "Potrafię rozpoznać euglenę, pantofelka i pełzaka.", ua: "Можу розпізнати евглену, туфельку і амебу." },
        { pl: "Potrafię porównać sposoby odżywiania protistów.", ua: "Можу порівняти способи живлення протистів." },
        { pl: "Potrafię powiedzieć o roli glonów w wodzie.", ua: "Можу сказати про роль водоростей у воді." },
        { pl: "Potrafię oddzielić protisty od grzybów i bakterii.", ua: "Можу відділити протистів від грибів і бактерій." }
      ]
    }
  ]
};
