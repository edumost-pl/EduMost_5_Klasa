function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L09_Samozywnosc_i_fotosynteza/images/";

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
        { pl: "Wyjaśnisz, czym jest samożywność.", ua: "Поясниш, що таке саможивлення." },
        { pl: "Powiesz, gdzie w komórce zachodzi fotosynteza.", ua: "Скажеш, де в клітині відбувається фотосинтез." },
        { pl: "Wymienisz, czego roślina potrzebuje do fotosyntezy.", ua: "Назвеш, чого рослина потребує для фотосинтезу." },
        { pl: "Podasz, co powstaje w fotosyntezie — równanie słowne.", ua: "Назвеш, що виникає у фотосинтезі — словесне рівняння." },
        { pl: "Wyjaśnisz, dlaczego fotosynteza jest ważna także dla innych organizmów.", ua: "Поясниш, чому фотосинтез важливий також для інших організмів." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "samożywność", ua: "саможивлення" },
        { pl: "fotosynteza", ua: "фотосинтез" },
        { pl: "chlorofil", ua: "хлорофіл" },
        { pl: "dwutlenek węgla", ua: "вуглекислий газ" },
        { pl: "tlen", ua: "кисень" },
        { pl: "glukoza", ua: "глюкоза" },
        { pl: "skrobia", ua: "крохмаль" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l09-zacznijmy.png", {
        alt: { pl: "Zielona roślina na słońcu", ua: "Зелена рослина на сонці" },
        title: { pl: "Roślina nie chodzi do sklepu. Skąd bierze pokarm?", ua: "Рослина не ходить до магазину. Звідки бере поживу?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Zielona roślina doniczkowa albo młode drzewko w jasnym słońcu, liście wyraźnie zielone. Bez twarzy, bez angielskiego, bez logotypów, bez wzorów chemicznych." }
      }),
      text: {
        pl: [
          "Pies je karmę. Ty jesz śniadanie. A pelargonia na parapecie?",
          "Roślina nie gryzie kanapki. Mimo to rośnie. Na tej lekcji zobaczysz, jak zielone rośliny same wytwarzają pokarm — i skąd się bierze tlen, którym oddychasz."
        ],
        ua: [
          "Пес їсть корм. Ти їси сніданок. А пеларгонія на підвіконні?",
          "Рослина не гризе канапку. Попри це росте. На цьому уроці побачиш, як зелені рослини самі виробляють поживу — і звідки береться кисень, яким дихаєш."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Samożywność", ua: "Саможивлення" },
      visual: vizGh("l09-samozywnosc.png", {
        alt: { pl: "Roślina wytwarza pokarm sama", ua: "Рослина сама виробляє поживу" },
        title: { pl: "Pokarm powstaje w roślinie, nie w misce.", ua: "Пожива виникає в рослині, не в мисці." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: pies przy misce — etykieta PL: cudzożywność (szczegóły na następnej lekcji). PRAWA: zielona roślina, strzałka „sama wytwarza pokarm”, etykieta: samożywność. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Samożywność"), " to sposób odżywiania, w którym organizm ", em("sam wytwarza"), " substancje odżywcze."],
          "Tak odżywiają się zielone rośliny. Pokarm nie przychodzi z zewnątrz jako gotowy „obiad” — roślina buduje go w swoich komórkach.",
          "Organizmy, które jedzą gotowy pokarm wytworzony przez innych, są cudzożywne. Cudzożywność dokładnie poznasz na lekcji 11. Dziś zostajemy przy roślinach."
        ],
        ua: [
          ["", em("Саможивлення"), " — спосіб живлення, у якому організм ", em("сам виробляє"), " поживні речовини."],
          "Так живляться зелені рослини. Пожива не приходить ззовні як готова «вечеря» — рослина будує її у своїх клітинах.",
          "Організми, які їдять готову поживу, вироблену іншими, є гетеротрофними. Гетеротрофне живлення докладно пізнаєш на уроці 11. Сьогодні лишаємося при рослинах."
        ]
      },
      task: {
        id: "l09-e1",
        type: "single-choice",
        question: { pl: "Co oznacza samożywność?", ua: "Що означає саможивлення?" },
        options: [
          { id: "a", label: { pl: "organizm sam wytwarza substancje odżywcze", ua: "організм сам виробляє поживні речовини" } },
          { id: "b", label: { pl: "organizm je wyłącznie mięso", ua: "організм їсть виключно м’ясо" } },
          { id: "c", label: { pl: "organizm nie potrzebuje żadnego pokarmu", ua: "організм не потребує жодної поживи" } }
        ],
        answer: "a",
        explanation: { pl: "Samożywny = sam wytwarza pokarm. To nie znaczy, że nic mu nie potrzeba — potrzebuje światła, wody i dwutlenku węgla.", ua: "Саможивний = сам виробляє поживу. Це не означає, що нічого не потрібно." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Gdzie zachodzi fotosynteza?", ua: "Де відбувається фотосинтез?" },
      visual: vizGh("l09-gdzie.png", {
        alt: { pl: "Chloroplasty w komórce liścia", ua: "Хлоропласти в клітині листка" },
        title: { pl: "W chloroplastach. Tam jest chlorofil.", ua: "У хлоропластах. Там хлорофіл." },
        prompt: { pl: "Edukacyjna infografika 16:9. Liść → zbliżenie komórki roślinnej → zielone owalne chloroplasty. Etykiety PL: liść; chloroplast; chlorofil — zielony barwnik, pochłania światło. Bez równania, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Proces wytwarzania pokarmu przy udziale światła nazywamy ", em("fotosyntezą"), "."],
          "Fotosynteza zachodzi w ", em("chloroplastach"), " — poznałeś je w komórce roślinnej. Chloroplasty zawierają ", em("chlorofil"), ", zielony barwnik, który pochłania światło.",
          "Najwięcej chloroplastów jest w komórkach liści. Dlatego liść to główna „wytwórnia pokarmu” rośliny. Inne zielone części też mogą fotosyntetyzować, ale dziś zapamiętaj liść i chloroplast."
        ],
        ua: [
          ["Процес вироблення поживи за участю світла називаємо ", em("фотосинтезом"), "."],
          "Фотосинтез відбувається в ", em("хлоропластах"), " — ти пізнав їх у рослинній клітині. Хлоропласти містять ", em("хлорофіл"), ", зелений барвник, який поглинає світло.",
          "Найбільше хлоропластів у клітинах листків. Тому листок — головна «фабрика поживи» рослини. Інші зелені частини теж можуть фотосинтезувати, але сьогодні запам’ятай листок і хлоропласт."
        ]
      },
      task: {
        id: "l09-e2",
        type: "true-false",
        question: { pl: "Fotosynteza zachodzi w chloroplastach, które zawierają chlorofil.", ua: "Фотосинтез відбувається в хлоропластах, які містять хлорофіл." },
        answer: true,
        explanation: { pl: "Tak. Chlorofil pochłania światło. Chloroplasty są głównie w liściach.", ua: "Так. Хлорофіл поглинає світло. Хлоропласти здебільшого в листках." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Czego potrzebuje roślina?", ua: "Чого потребує рослина?" },
      visual: vizGh("l09-substraty.png", {
        alt: { pl: "Światło, woda i dwutlenek węgla wchodzą do liścia", ua: "Світло, вода і вуглекислий газ входять у листок" },
        title: { pl: "Trzy rzeczy na wejściu: światło, woda, dwutlenek węgla.", ua: "Три речі на вході: світло, вода, вуглекислий газ." },
        prompt: { pl: "Edukacyjny schemat 16:9, liść w środku. Trzy strzałki DO liścia z etykietami PL: światło (słońce); woda (z korzenia); dwutlenek węgla (z powietrza, przez szparki). Chlorofil jako warunek w chloroplaście. Bez wzoru chemicznego, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Do fotosyntezy roślina potrzebuje:",
          ["", em("światła"), " — zwykle słonecznego; chlorofil je pochłania;"],
          ["", em("wody"), " — pobieranej głównie przez korzeń (włośniki);"],
          ["", em("dwutlenku węgla"), " — gazu z powietrza, który wchodzi do liścia przez szparki."],
          "Bez chlorofilu światło nie zostanie „użyte” w chloroplaście. Sole mineralne są roślinie potrzebne do życia, ale nie są składnikami równania fotosyntezy, które dziś zapiszesz."
        ],
        ua: [
          "Для фотосинтезу рослина потребує:",
          ["", em("світла"), " — зазвичай сонячного; хлорофіл його поглинає;"],
          ["", em("води"), " — яку здебільшого бере корінь (кореневі волоски);"],
          ["", em("вуглекислого газу"), " — газу з повітря, який входить у листок через продихи."],
          "Без хлорофілу світло не буде «використане» в хлоропласті. Мінеральні солі рослині потрібні до життя, але вони не є складниками рівняння фотосинтезу, яке сьогодні запишеш."
        ]
      },
      task: {
        id: "l09-e3",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystko, czego roślina potrzebuje do fotosyntezy.", ua: "Познач усе, чого рослина потребує для фотосинтезу." },
        options: [
          { id: "a", label: { pl: "światło", ua: "світло" } },
          { id: "b", label: { pl: "woda", ua: "вода" } },
          { id: "c", label: { pl: "dwutlenek węgla", ua: "вуглекислий газ" } },
          { id: "d", label: { pl: "gotowa kanapka z szynką", ua: "готова канапка з шинкою" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Światło, woda, CO₂. Kanapka to pokarm cudzożywnego organizmu.", ua: "Світло, вода, CO₂. Канапка — пожива гетеротрофа." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Co powstaje? Równanie słowne", ua: "Що виникає? Словесне рівняння" },
      visual: vizGh("l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Dwutlenek węgla + woda → cukier + tlen.", ua: "Вуглекислий газ + вода → цукор + кисень." },
        prompt: { pl: "Czysty edukacyjny schemat 16:9. Duże polskie równanie: dwutlenek węgla + woda → glukoza (cukier) + tlen. Nad strzałką: światło i chlorofil. Dwie strzałki WYJŚCIA z liścia: cukier (do rośliny), tlen (do powietrza). Bez wzoru chemicznego jako wymagania. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "W fotosyntezie z dwutlenku węgla i wody powstają:",
          ["", em("glukoza"), " — cukier, który jest pokarmem rośliny; część zapisywana jest jako ", em("skrobia"), " (to już znasz z lekcji o składnikach);"],
          ["", em("tlen"), " — gaz, który roślina uwalnia do powietrza."],
          "Równanie słowne, które zapamiętaj:",
          "dwutlenek węgla + woda → glukoza + tlen",
          "Warunki przy strzałce: światło i chlorofil. Wzoru chemicznego z cyframi dziś nie wymagamy — ważne są nazwy po polsku."
        ],
        ua: [
          "У фотосинтезі з вуглекислого газу і води виникають:",
          ["", em("глюкоза"), " — цукор, який є поживою рослини; частина записується як ", em("крохмаль"), ";"],
          ["", em("кисень"), " — газ, який рослина вивільняє в повітря."],
          "Словесне рівняння, яке запам’ятай:",
          "вуглекислий газ + вода → глюкоза + кисень",
          "Умови біля стрілки: світло і хлорофіл. Хімічної формули з цифрами сьогодні не вимагаємо."
        ]
      },
      task: {
        id: "l09-e4",
        type: "single-choice",
        question: { pl: "Które równanie słowne fotosyntezy jest poprawne?", ua: "Яке словесне рівняння фотосинтезу правильне?" },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "b", label: { pl: "glukoza + tlen → dwutlenek węgla + woda", ua: "глюкоза + кисень → вуглекислий газ + вода" } },
          { id: "c", label: { pl: "sól + piasek → chlorofil", ua: "сіль + пісок → хлорофіл" } }
        ],
        answer: "a",
        explanation: { pl: "Opcja b to kierunek oddychania tlenowego — lekcja 12. Fotosynteza: CO₂ i woda wchodzą, cukier i tlen wychodzą.", ua: "Варіант b — напрям аеробного дихання, урок 12." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Składniki i produkty", ua: "Складники і продукти" },
      visual: tree({
        layout: "nested",
        root: { pl: "fotosynteza", ua: "фотосинтез" },
        groups: [
          {
            title: { pl: "potrzebuje", ua: "потребує" },
            items: [
              { pl: "światło", ua: "світло" },
              { pl: "woda", ua: "вода" },
              { pl: "dwutlenek węgla", ua: "вуглекислий газ" }
            ]
          },
          {
            title: { pl: "powstaje", ua: "виникає" },
            items: [
              { pl: "glukoza", ua: "глюкоза" },
              { pl: "tlen", ua: "кисень" }
            ]
          }
        ]
      }),
      items: [
        { pl: "na wejściu: światło, woda, dwutlenek węgla", ua: "на вході: світло, вода, вуглекислий газ" },
        { pl: "na wyjściu: glukoza i tlen", ua: "на виході: глюкоза і кисень" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Jak światło wpływa na fotosyntezę?", ua: "Як світло впливає на фотосинтез?" },
      visual: vizGh("l09-swiatlo.png", {
        alt: { pl: "Roślina na świetle i w cieniu", ua: "Рослина на світлі і в тіні" },
        title: { pl: "Bez światła fotosynteza nie zachodzi.", ua: "Без світла фотосинтез не відбувається." },
        prompt: { pl: "Fotorealistyczny kolaż 16:9. LEWA: ta sama roślina w jasnym słońcu, liście żywo zielone. PRAWA: ta sama roślina w ciemnej szafie lub ciemni, etykieta PL: bez światła nie ma fotosyntezy. Bez twarzy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Chlorofil musi mieć światło. W kompletnej ciemności roślina nie prowadzi fotosyntezy — nie powstaje wtedy nowy cukier z dwutlenku węgla i wody.",
          "Roślina może przez jakiś czas korzystać z zapasu skrobi. Dlatego kwiat w ciemnym pokoju nie ginie od razu. Ale długo bez światła zielone rośliny słabną.",
          "Na następnej lekcji sprawdzimy to doświadczeniem: czy w liściu powstaje skrobia tylko tam, gdzie padało światło."
        ],
        ua: [
          "Хлорофіл мусить мати світло. У повній темряві рослина не веде фотосинтез — тоді не виникає новий цукор з вуглекислого газу і води.",
          "Рослина може якийсь час користуватися запасом крохмалю. Тому квітка в темній кімнаті не гине відразу. Але довго без світла зелені рослини слабшають.",
          "На наступному уроці перевіримо це дослідом: чи в листку виникає крохмаль лише там, де падало світло."
        ]
      },
      task: {
        id: "l09-e5",
        type: "true-false",
        question: { pl: "Bez światła fotosynteza nie zachodzi.", ua: "Без світла фотосинтез не відбувається." },
        answer: true,
        explanation: { pl: "Światło jest warunkiem. Zapas skrobi to nie to samo co nowa fotosynteza.", ua: "Світло є умовою. Запас крохмалю — не те саме, що новий фотосинтез." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dlaczego to ważne dla innych organizmów?", ua: "Чому це важливо для інших організмів?" },
      visual: vizGh("l09-znaczenie.png", {
        alt: { pl: "Rośliny dają pokarm i tlen innym organizmom", ua: "Рослини дають поживу і кисень іншим організмам" },
        title: { pl: "Cukier zostaje w roślinie. Tlen idzie do powietrza.", ua: "Цукор лишається в рослині. Кисень іде в повітря." },
        prompt: { pl: "Edukacyjna infografika 16:9. Zielona łąka, słońce. Strzałka 1: liść → cukier/skrobia w roślinie → zając je trawę. Strzałka 2: tlen z liścia do powietrza → dziecko lub ptak oddycha. Polskie etykiety. Bez łańcucha pokarmowego z 10 ogniwami, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Fotosynteza karmi roślinę: glukoza to jej pokarm, skrobia — zapas.",
          "Zwierzęta i ludzie nie fotosyntetyzują. Jedzą rośliny albo jedzą kogoś, kto jadł rośliny. Tlen z fotosyntezy jest w powietrzu — bez niego oddychanie tlenowe (lekcja 12) nie miałoby gazu, którego potrzebują mitochondria.",
          "Dlatego zielone rośliny są podstawą życia na lądzie i w wielu wodach. Nie myl fotosyntezy z oddychaniem: to dwa różne procesy, nawet jeśli oba dotyczą gazów."
        ],
        ua: [
          "Фотосинтез годує рослину: глюкоза — її пожива, крохмаль — запас.",
          "Тварини і люди не фотосинтезують. Їдять рослини або їдять когось, хто їв рослини. Кисень із фотосинтезу є в повітрі — без нього аеробному диханню (урок 12) бракувало б газу для мітохондрій.",
          "Тому зелені рослини є основою життя на суходолі і в багатьох водах. Не плутай фотосинтез із диханням: це два різні процеси, навіть якщо обидва стосуються газів."
        ]
      },
      task: {
        id: "l09-e6",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania o znaczeniu fotosyntezy.", ua: "Познач усі правдиві речення про значення фотосинтезу." },
        options: [
          { id: "a", label: { pl: "Roślina dostaje glukozę (pokarm) i może gromadzić skrobię.", ua: "Рослина дістає глюкозу (поживу) і може накопичувати крохмаль." } },
          { id: "b", label: { pl: "Do powietrza trafia tlen, którego potrzebują inne organizmy.", ua: "У повітря потрапляє кисень, якого потребують інші організми." } },
          { id: "c", label: { pl: "Cudzożywne organizmy korzystają z pokarmu, który zaczyna się od roślin.", ua: "Гетеротрофні організми користуються поживою, яка починається від рослин." } },
          { id: "d", label: { pl: "Fotosynteza to to samo co jedzenie kanapki przez psa.", ua: "Фотосинтез — те саме, що їжа канапки псом." } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Pies jest cudzożywny. Fotosynteza wytwarza pokarm i tlen, nie jest gryzieniem kanapki.", ua: "Пес гетеротрофний. Фотосинтез виробляє поживу і кисень." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Samożywność", ua: "Практика. Саможивлення" },
      task: {
        id: "l09-p1",
        type: "single-choice",
        question: { pl: "Który organizm jest samożywny?", ua: "Який організм саможивний?" },
        options: [
          { id: "a", label: { pl: "zielona pelargonia", ua: "зелена пеларгонія" } },
          { id: "b", label: { pl: "pies", ua: "пес" } },
          { id: "c", label: { pl: "człowiek", ua: "людина" } }
        ],
        answer: "a",
        explanation: { pl: "Zielona roślina sama wytwarza pokarm. Pies i człowiek jedzą gotowy pokarm.", ua: "Зелена рослина сама виробляє поживу." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Miejsce", ua: "Місце" },
      task: {
        id: "l09-p2",
        type: "single-choice",
        question: { pl: "Gdzie zachodzi fotosynteza?", ua: "Де відбувається фотосинтез?" },
        options: [
          { id: "a", label: { pl: "w chloroplastach (głównie w liściach), dzięki chlorofilowi", ua: "у хлоропластах (здебільшого в листках), завдяки хлорофілу" } },
          { id: "b", label: { pl: "w jądrze komórki nabłonka jamy ustnej", ua: "в ядрі клітини епітелію ротової порожнини" } },
          { id: "c", label: { pl: "w mitochondriach mięśni psa podczas biegu", ua: "у мітохондріях м’язів пса під час бігу" } }
        ],
        answer: "a",
        explanation: { pl: "Chloroplast + chlorofil. Mitochondria to oddychanie (L12). Nabłonek jamy ustnej nie fotosyntetyzuje.", ua: "Хлоропласт + хлорофіл. Мітохондрії — дихання (урок 12)." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wejście i wyjście", ua: "Вхід і вихід" },
      task: {
        id: "l09-p3",
        type: "multiple-choice",
        question: { pl: "Zaznacz produkty fotosyntezy (to, co powstaje).", ua: "Познач продукти фотосинтезу (те, що виникає)." },
        options: [
          { id: "a", label: { pl: "glukoza", ua: "глюкоза" } },
          { id: "b", label: { pl: "tlen", ua: "кисень" } },
          { id: "c", label: { pl: "dwutlenek węgla (jako produkt)", ua: "вуглекислий газ (як продукт)" } },
          { id: "d", label: { pl: "światło (jako produkt)", ua: "світло (як продукт)" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Produkty: glukoza i tlen. Dwutlenek węgla i woda są substratami. Światło jest warunkiem, nie produktem.", ua: "Продукти: глюкоза і кисень. CO₂ і вода — субстрати." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Równanie", ua: "Рівняння" },
      task: {
        id: "l09-p4",
        type: "true-false",
        question: { pl: "Równanie słowne: dwutlenek węgla + woda → glukoza + tlen (światło, chlorofil).", ua: "Словесне рівняння: вуглекислий газ + вода → глюкоза + кисень (світло, хлорофіл)." },
        answer: true,
        explanation: { pl: "Tak. To zapis na klasę 5.", ua: "Так. Це запис для 5 класу." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Znaczenie", ua: "Значення" },
      task: {
        id: "l09-p5",
        type: "single-choice",
        question: { pl: "Dlaczego fotosynteza jest ważna dla zwierząt?", ua: "Чому фотосинтез важливий для тварин?" },
        options: [
          { id: "a", label: { pl: "dostarcza tlenu do powietrza i pokarmu, który zaczyna się od roślin", ua: "дає кисень у повітря і поживу, яка починається від рослин" } },
          { id: "b", label: { pl: "zwierzęta mają chloroplasty w mięśniach", ua: "тварини мають хлоропласти в м’язах" } },
          { id: "c", label: { pl: "fotosynteza zastępuje wydalanie u psa", ua: "фотосинтез замінює виділення в пса" } }
        ],
        answer: "a",
        explanation: { pl: "Zwierzęta nie mają chloroplastów. Korzystają z tlenu i z pokarmu pochodzącego od roślin.", ua: "Тварини не мають хлоропластів." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Samożywność", ua: "Перевірка 1. Саможивлення" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l09-s1",
        type: "single-choice",
        question: { pl: "Czym jest samożywność?", ua: "Що таке саможивлення?" },
        options: [
          { id: "a", label: { pl: "organizm sam wytwarza substancje odżywcze (tak jak zielone rośliny w fotosyntezie)", ua: "організм сам виробляє поживні речовини (як зелені рослини у фотосинтезі)" } },
          { id: "b", label: { pl: "organizm je wyłącznie innych ludzi", ua: "організм їсть виключно інших людей" } },
          { id: "c", label: { pl: "brak chlorofilu w liściu", ua: "відсутність хлорофілу в листку" } }
        ],
        answer: "a",
        explanation: { pl: "Samożywny = sam wytwarza pokarm. Zielone rośliny robią to fotosyntezą.", ua: "Саможивний = сам виробляє поживу." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Miejsce", ua: "Перевірка 2. Місце" },
      task: {
        id: "l09-s2",
        type: "single-choice",
        question: { pl: "Gdzie zachodzi fotosynteza?", ua: "Де відбувається фотосинтез?" },
        options: [
          { id: "a", label: { pl: "w chloroplastach, dzięki chlorofilowi — głównie w liściach", ua: "у хлоропластах, завдяки хлорофілу — здебільшого в листках" } },
          { id: "b", label: { pl: "w wakuoli komórki bakteryjnej bez jądra", ua: "у вакуолі бактеріальної клітини без ядра" } },
          { id: "c", label: { pl: "w kości z wapnia", ua: "у кістці з кальцію" } }
        ],
        answer: "a",
        explanation: { pl: "Chloroplast + chlorofil. Bakterie z L8 nie mają chloroplastów liścia.", ua: "Хлоропласт + хлорофіл." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Warunki", ua: "Перевірка 3. Умови" },
      task: {
        id: "l09-s3",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystko, czego roślina potrzebuje do fotosyntezy.", ua: "Познач усе, чого рослина потребує для фотосинтезу." },
        options: [
          { id: "a", label: { pl: "światło", ua: "світло" } },
          { id: "b", label: { pl: "woda", ua: "вода" } },
          { id: "c", label: { pl: "dwutlenek węgla", ua: "вуглекислий газ" } },
          { id: "d", label: { pl: "chlorofil (w chloroplastach)", ua: "хлорофіл (у хлоропластах)" } }
        ],
        answer: ["a", "b", "c", "d"],
        explanation: { pl: "Substraty: woda i CO₂. Warunki: światło i chlorofil.", ua: "Субстрати: вода і CO₂. Умови: світло і хлорофіл." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Równanie", ua: "Перевірка 4. Рівняння" },
      task: {
        id: "l09-s4",
        type: "single-choice",
        question: { pl: "Co powstaje w fotosyntezie? Wybierz poprawne równanie słowne.", ua: "Що виникає у фотосинтезі? Вибери правильне словесне рівняння." },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "b", label: { pl: "glukoza + tlen → dwutlenek węgla + woda + energia", ua: "глюкоза + кисень → вуглекислий газ + вода + енергія" } },
          { id: "c", label: { pl: "jądro + ściana → bakteria", ua: "ядро + стінка → бактерія" } }
        ],
        answer: "a",
        explanation: { pl: "b to oddychanie tlenowe (L12). Fotosynteza produkuje cukier i tlen.", ua: "b — аеробне дихання (урок 12)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Znaczenie", ua: "Перевірка 5. Значення" },
      task: {
        id: "l09-s5",
        type: "multiple-choice",
        question: { pl: "Zaznacz, dlaczego fotosynteza jest ważna także poza rośliną.", ua: "Познач, чому фотосинтез важливий також поза рослиною." },
        options: [
          { id: "a", label: { pl: "do powietrza trafia tlen", ua: "у повітря потрапляє кисень" } },
          { id: "b", label: { pl: "pokarm wielu organizmów zaczyna się od roślin", ua: "пожива багатьох організмів починається від рослин" } },
          { id: "c", label: { pl: "zwierzęta zaczynają mieć chloroplasty w skórze", ua: "тварини починають мати хлоропласти в шкірі" } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Tlen i pokarm. Zwierzęta nie zyskują chloroplastów przez fotosyntezę roślin.", ua: "Кисень і пожива. Тварини не дістають хлоропластів." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Samożywność = fotosynteza w chloroplastach.", ua: "Саможивлення = фотосинтез у хлоропластах." },
        prompt: { pl: "To samo równanie słowne fotosyntezy z polskimi etykietami." }
      }),
      text: {
        pl: [
          "Samożywność: organizm sam wytwarza substancje odżywcze.",
          "Fotosynteza zachodzi w chloroplastach dzięki chlorofilowi — głównie w liściach.",
          "Potrzeba: światło, woda, dwutlenek węgla (oraz chlorofil).",
          "Równanie: dwutlenek węgla + woda → glukoza + tlen.",
          "Glukoza karmi roślinę (zapas: skrobia). Tlen idzie do powietrza — z niego korzystają inne organizmy."
        ],
        ua: [
          "Саможивлення: організм сам виробляє поживні речовини.",
          "Фотосинтез відбувається в хлоропластах завдяки хлорофілу — здебільшого в листках.",
          "Потрібно: світло, вода, вуглекислий газ (і хлорофіл).",
          "Рівняння: вуглекислий газ + вода → глюкоза + кисень.",
          "Глюкоза годує рослину (запас: крохмаль). Кисень іде в повітря — ним користуються інші організми."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wyjaśnić, czym jest samożywność.", ua: "Можу пояснити, що таке саможивлення." },
        { pl: "Potrafię powiedzieć, gdzie zachodzi fotosynteza.", ua: "Можу сказати, де відбувається фотосинтез." },
        { pl: "Potrafię wymienić, czego roślina potrzebuje do fotosyntezy.", ua: "Можу назвати, чого рослина потребує для фотосинтезу." },
        { pl: "Potrafię podać równanie słowne fotosyntezy.", ua: "Можу назвати словесне рівняння фотосинтезу." },
        { pl: "Potrafię wyjaśnić znaczenie fotosyntezy dla innych organizmów.", ua: "Можу пояснити значення фотосинтезу для інших організмів." }
      ]
    }
  ]
};
