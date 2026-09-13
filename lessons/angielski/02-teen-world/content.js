function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L02_Teen_World/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}
function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = ENG_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Zrozumiesz forum Teen World: Ross (@rosstheboss) z Michigan i Dure (@samiboy_dure) ze Szwecji.", ua: "Зрозумієш форум Teen World: Ross з Мічигану і Dure зі Швеції." },
        { pl: "Zapamiętasz fakty o Dure: Sámi, Hennet, renifery, szkoła 8:30–15:00, Sáhkku.", ua: "Запам’ятаєш факти про Dure: Sámi, Hennet, олені, школа 8:30–15:00, Sáhkku." },
        { pl: "Użyjesz słów: reindeer, sell, board game, post, photos, comments, social media.", ua: "Ужиєш слова: reindeer, sell, board game, post, photos, comments, social media." },
        { pl: "Nazwiesz free-time activities z listy Flash.", ua: "Назвеш free-time activities зі списку Flash." },
        { pl: "Powiesz: I like / I don’t mind / I dislike + -ing.", ua: "Скажеш: I like / I don’t mind / I dislike + -ing." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "reindeer", ua: "renifer · північний олень" },
        { pl: "sell", ua: "sprzedawać · продавати" },
        { pl: "board game", ua: "gra planszowa · настільна гра" },
        { pl: "post (photos / comments)", ua: "zamieścić (zdjęcia / komentarze) · опублікувати" },
        { pl: "social media", ua: "media społecznościowe · соцмережі" },
        { pl: "Sámi · Sáhkku", ua: "Saamowie · saamska gra planszowa" },
        { pl: "read a book · play sports · watch TV", ua: "czytać · sport · telewizja" },
        { pl: "I like / I don’t mind / I dislike + -ing", ua: "lubię / nic mi to nie robi / nie lubię" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Teen World · forum", ua: "Teen World · форум" },
      visual: vizGh("l02-forum.png", {
        alt: { pl: "Forum: Ross z Michigan pyta o Szwecję; Dure odpowiada", ua: "Форум: Ross питає про Швецію; Dure відповідає" },
        title: { pl: "@rosstheboss · @samiboy_dure", ua: "@rosstheboss · @samiboy_dure" },
        prompt: { pl: "Edukacyjny kolaż 16:9, dwa kadry forum. LEWA: chłopak 12 lat przy laptopie, etykieta EN: Ross, Michigan, USA. PRAWA: chłopak 12 lat na śniegu przy reniferze, etykieta EN: Dure, Sweden, Sámi. Bez logotypów, bez marek telefonów." }
      }),
      text: {
        pl: [
          "W Flash to **1a Teen World** — message board. **Ross** z Michigan (USA) robi w szkole projekt o nastolatkach na świecie. Pisze o codziennym życiu w **Szwecji** i prosi o pomoc.",
          "**Dure** (12 lat, nick *@samiboy_dure*) odpowiada. To **nie** jest kopia akapitów z książki — to te same osoby i fakty, których nauczyciel pyta na sprawdzianie."
        ],
        ua: [
          "У Flash це **1a Teen World** — форум. **Ross** з Мічигану робить проєкт про підлітків. Пише про життя у **Швеції**.",
          "**Dure** (12 років) відповідає. Ті самі герої і факти, що на перевірку в школі — своїми словами."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Kim jest Dure?", ua: "Хто такий Dure?" },
      visual: vizGh("l02-dure.png", {
        alt: { pl: "Dure, brat Hennet, renifery, szkoła Sámi", ua: "Dure, брат Hennet, олені, школа Sámi" },
        title: { pl: "Swedish and Sámi", ua: "Swedish and Sámi" },
        prompt: { pl: "Edukacyjna infografika 16:9: mapa Szwecja–Norwegia–Finlandia, etykieta EN: Sámi people. Obok: rodzina, renifer, szkoła. Podpisy EN: Dure; Hennet; reindeer. Bez logotypów." }
      }),
      text: {
        pl: [
          "Dure jest **Szwedem** i **Sámi**. Sámi to lud, który mieszka w **Szwecji, Norwegii i Finlandii**. Mówią językiem Sámi i chodzą do **szkół Sámi**.",
          "Mieszka z mamą, tatą i bratem **Hennetem**. Rodzina ma dużo **reindeer** (reniferów) — jeden jest na zdjęciu w profilu Dure. Tata **opiekuje się** reniferami. Mama zostaje w domu i **szyje ubrania Sámi, żeby je sprzedawać** (*makes clothes to sell*).",
          "Dure i Hennet **chodzą do szkoły**."
        ],
        ua: [
          "Dure — **швед** і **Sámi**. Sámi живуть у **Швеції, Норвегії і Фінляндії**. Ходять до **шкіл Sámi**.",
          "Живе з мамою, татом і братом **Hennet**. У сім’ї багато **reindeer**. Тато доглядає оленів. Мама вдома шиє одяг Sámi **на продаж**.",
          "Dure і Hennet ходять до школи."
        ]
      },
      task: {
        id: "eng1a-e1",
        type: "single-choice",
        question: { pl: "Dure lives … / Dure’s brother’s name … / At school, Dure speaks … — które dopasowanie jest poprawne?", ua: "Яке поєднання правильне?" },
        options: [
          { id: "a", label: { pl: "in Sweden · is Hennet · Sámi and Swedish", ua: "in Sweden · is Hennet · Sámi and Swedish" } },
          { id: "b", label: { pl: "in Michigan · is Ross · only English", ua: "in Michigan · is Ross · only English" } },
          { id: "c", label: { pl: "in Finland only · is Sáhkku · only French", ua: "in Finland only · is Sáhkku · only French" } }
        ],
        answer: "a",
        explanation: { pl: "Dure mieszka w Szwecji. Brat = Hennet. Na lekcjach: Sámi i szwedzki (uczą się też angielskiego i francuskiego).", ua: "Швеція · Hennet · Sámi and Swedish." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Dzień Dure", ua: "День Dure" },
      visual: vizGh("l02-dure-day.png", {
        alt: { pl: "7:00 wstają, 8:30–15:00 szkoła, potem piłka, Sáhkku", ua: "7:00 встають, 8:30–15:00 школа, потім футбол, Sáhkku" },
        title: { pl: "8:30 am – 3 pm", ua: "8:30 am – 3 pm" },
        prompt: { pl: "Edukacyjna oś dnia 16:9 z etykietami EN: 7 o’clock get up; walk to school; lessons 8:30–3 pm; football; homework; Sáhkku; social media. Dzieci 12 lat, zima, bez logotypów." }
      }),
      text: {
        pl: [
          "Wstają o **7:00**, ubierają się, jedzą śniadanie i **idą piechotą** do szkoły razem. Lekcje **od 8:30 do 15:00**. Na lekcjach mówią **Sámi i po szwedzku**; uczą się też **angielskiego i francuskiego** (to nie znaczy, że to ich ulubione przedmioty — tekst tego nie mówi).",
          "Po szkole Dure **zwykle gra w piłkę** z przyjaciółmi, potem idzie do domu i **robi zadanie**.",
          "Wieczorem **je ciepły posiłek z rodziną**. Czasem mama opowiada **stare historie Sámi** albo grają w **Sáhkku** (saamska gra planszowa). **Zwykle** ogląda TV albo siedzi przy komputerze. Lubi **postować komentarze lub zdjęcia** w social media i **czatować** z przyjaciółmi."
        ],
        ua: [
          "Встають о **7:00**, пішки до школи. Уроки **8:30–15:00**. На уроках **Sámi і шведська**; вчать також **англійську і французьку**.",
          "Після школи **зазвичай футбол**, потім **домашнє**.",
          "Ввечері тепла їжа з родиною. Інколи історії Sámi або **Sáhkku**. **Зазвичай** TV або комп’ютер. Любить **постити** і **чатитись**."
        ]
      },
      task: {
        id: "eng1a-e2",
        type: "true-false",
        question: { pl: "Right / Wrong / Doesn’t say: Dure always plays a board game in the evenings.", ua: "Dure always plays a board game in the evenings." },
        answer: false,
        explanation: { pl: "Wrong. Sáhkku jest czasem (*sometimes*), nie always. Zwykle TV lub komputer.", ua: "Wrong: sometimes Sáhkku, usually TV/computer." }
      }
    },
    {
      type: "check",
      heading: { pl: "R / W / DS — jak na sprawdzianie", ua: "R / W / DS — як на перевірці" },
      task: {
        id: "eng1a-c1",
        type: "single-choice",
        question: { pl: "„Dure’s favourite subjects are English and French.”", ua: "„Dure’s favourite subjects are English and French.”" },
        options: [
          { id: "a", label: { pl: "Right — the text says they are his favourite subjects.", ua: "Right" } },
          { id: "b", label: { pl: "Wrong — he never learns English or French.", ua: "Wrong" } },
          { id: "c", label: { pl: "Doesn’t say — he learns them, but the text doesn’t say they are favourites.", ua: "Doesn’t say" } }
        ],
        answer: "c",
        explanation: { pl: "DS: uczy się English i French. Ulubione przedmioty — tekst milczy.", ua: "DS: вчить, але не каже favourite." }
      }
    },
    {
      type: "check",
      heading: { pl: "Pytania do tekstu", ua: "Питання до тексту" },
      task: {
        id: "eng1a-c2",
        type: "single-choice",
        question: { pl: "Where do the Sámi people live? What time do Dure and Hennet finish school?", ua: "Where do the Sámi live? When do they finish school?" },
        options: [
          { id: "a", label: { pl: "Only in the USA · 7 o’clock", ua: "Only in the USA · 7 o’clock" } },
          { id: "b", label: { pl: "Sweden, Norway and Finland · 3 pm", ua: "Sweden, Norway and Finland · 3 pm" } },
          { id: "c", label: { pl: "Only Michigan · 8:30 am", ua: "Only Michigan · 8:30 am" } }
        ],
        answer: "b",
        explanation: { pl: "Sámi: Szwecja, Norwegia, Finlandia. Koniec lekcji: 3 pm (15:00).", ua: "Швеція, Норвегія, Фінляндія · 3 pm." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Free-time activities", ua: "Free-time activities" },
      visual: vizGh("l02-free-time.png", {
        alt: { pl: "Lista hobby Flash: książka, sport, TV, gry, kino…", ua: "Список хобі Flash" },
        title: { pl: "read a book · play sports · watch TV…", ua: "read a book · play sports · watch TV…" },
        prompt: { pl: "Edukacyjny kolaż 16:9, dwanaście ikon 11-latków z etykietami EN: read a book; play sports; watch TV; play online/board games; listen to music; chat with friends online; go to the cinema; exercise; draw/paint; spend time with family; go shopping; play with a pet. Bez logotypów." }
      }),
      text: {
        pl: [
          "Ta sama lista co w 1a: **read a book, play sports, watch TV, play online/board games, listen to music, chat with friends online, go to the cinema, exercise, draw/paint, spend time with family/friends, go shopping, play with a pet.**",
          "Dure z tekstu: football, TV, komputer, postowanie, czat, czasem Sáhkku."
        ],
        ua: [
          "Той самий список, що в 1a Flash.",
          "У Dure: football, TV, комп’ютер, пости, чат, інколи Sáhkku."
        ]
      },
      task: {
        id: "eng1a-e3",
        type: "multiple-choice",
        question: { pl: "Zaznacz WSZYSTKIE free-time activities (nie rutynę dnia).", ua: "Познач УСІ free-time activities." },
        options: [
          { id: "a", label: { pl: "go to the cinema", ua: "go to the cinema" } },
          { id: "b", label: { pl: "catch the bus", ua: "catch the bus" } },
          { id: "c", label: { pl: "listen to music", ua: "listen to music" } },
          { id: "d", label: { pl: "get dressed", ua: "get dressed" } }
        ],
        answer: ["a", "c"],
        explanation: { pl: "Kino i muzyka = czas wolny. Catch the bus i get dressed = typical day (lekcja 1).", ua: "Кіно і музика — дозвілля." }
      }
    },
    {
      type: "concept",
      heading: { pl: "I like / I don’t mind / I dislike + -ing", ua: "I like / I don’t mind / I dislike + -ing" },
      visual: vizGh("l02-like-ing.png", {
        alt: { pl: "Dymki Flash: chatting, drawing, playing board games", ua: "Хмарки Flash" },
        title: { pl: "I like chatting with friends online.", ua: "I like chatting with friends online." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy dymki EN jak w Flash: I like chatting with friends online; I don’t mind drawing; I dislike playing board games. Przyjazny styl, bez logotypów." }
      }),
      text: {
        pl: [
          ["Po ", em("like"), ", ", em("don’t mind"), " i ", em("dislike"), " stawiamy czasownik z ", em("-ing"), "."],
          "**I like chatting with friends online.**",
          "**I don’t mind drawing.**",
          "**I dislike playing board games.**",
          "Nie: *I like chat*."
        ],
        ua: [
          ["Після ", em("like"), " / ", em("don’t mind"), " / ", em("dislike"), " — дієслово з ", em("-ing"), "."],
          "**I like chatting with friends online.**",
          "**I don’t mind drawing.**",
          "**I dislike playing board games.**"
        ]
      },
      task: {
        id: "eng1a-e4",
        type: "single-choice",
        question: { pl: "Które zdanie jest poprawne?", ua: "Яке речення правильне?" },
        options: [
          { id: "a", label: { pl: "I like listen to music.", ua: "I like listen to music." } },
          { id: "b", label: { pl: "I like listening to music.", ua: "I like listening to music." } },
          { id: "c", label: { pl: "I like to listening music.", ua: "I like to listening music." } }
        ],
        answer: "b",
        explanation: { pl: "I like + -ing: listening.", ua: "I like + -ing: listening." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng1a-c3",
        type: "single-choice",
        question: { pl: "What does Dure usually do in the evenings?", ua: "What does Dure usually do in the evenings?" },
        options: [
          { id: "a", label: { pl: "He usually watches TV or uses the computer.", ua: "He usually watches TV or uses the computer." } },
          { id: "b", label: { pl: "He always plays Sáhkku.", ua: "He always plays Sáhkku." } },
          { id: "c", label: { pl: "He never chats with friends.", ua: "He never chats with friends." } }
        ],
        answer: "a",
        explanation: { pl: "Usually = TV lub komputer. Sáhkku = sometimes.", ua: "Usually = TV or computer." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj · na sprawdzian", ua: "Запам’ятай · на перевірку" },
      text: {
        pl: [
          "Ross (@rosstheboss) — Michigan, USA, projekt o nastolatkach. Dure (@samiboy_dure) — 12 lat, Szwecja, Sámi.",
          "Hennet = brat. Reindeer. Szkoła Sámi, 8:30–3 pm, piechotą. Języki: Sámi + szwedzki; uczą się też EN i FR.",
          "Sáhkku = board game. like / don’t mind / dislike + **-ing**.",
          "R/W/DS: ulubione przedmioty = **DS**; always Sáhkku = **Wrong**."
        ],
        ua: [
          "Ross — Michigan. Dure — 12, Швеція, Sámi. Hennet — брат. Школа 8:30–15:00.",
          "Sáhkku. like + **-ing**. Favourite subjects = DS. Always board game = Wrong."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "Dokończ: I like …ing. I don’t mind …ing. I dislike …ing.",
          "Powiedz 3 fakty o Dure (kto, gdzie, szkoła albo wieczór).",
          "Następna lekcja: **1b Present Simple** — I listen / Keith listens, always–never, don’t / doesn’t."
        ],
        ua: [
          "I like …ing. 3 факти про Dure.",
          "Далі: **1b Present Simple**."
        ]
      }
    }
  ]
};
