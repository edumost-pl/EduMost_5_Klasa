function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost_5_Klasa/blob/main/blob/main/Angielski/L02_Teen_World/images/";

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
    /* 1 · GOAL */
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "MUST KNOW · Poznasz Teen World: Ross i Dure.", ua: "MUST KNOW · Пізнаєш Teen World: Ross і Dure." },
        { pl: "MUST KNOW · Zrozumiesz dzień Dure (bez kopiowania całego tekstu).", ua: "MUST KNOW · Зрозумієш день Dure (без копіювання всього тексту)." },
        { pl: "MUST KNOW · Nazwiesz 12 free-time activities z Flash.", ua: "MUST KNOW · Назвеш 12 free-time activities з Flash." },
        { pl: "MUST KNOW · Powiesz: I like / I don’t mind / I dislike + -ing.", ua: "MUST KNOW · Скажеш: I like / I don’t mind / I dislike + -ing." }
      ]
    },

    /* 2 · Meet Ross & Dure — only heroes intro (not reading) */
    {
      type: "intro",
      heading: { pl: "Meet Ross & Dure", ua: "Meet Ross & Dure" },
      visual: vizGh("l02-teen-world.png", {
        alt: {
          pl: "Ross (Michigan / USA) i Dure (Szwecja / Sámi) — kontekst Teen World",
          ua: "Ross (Michigan / USA) і Dure (Швеція / Sámi) — контекст Teen World"
        },
        title: { pl: "Ross → Dure", ua: "Ross → Dure" },
        prompt: {
          pl: "Create a clean educational illustration for 10–11-year-old English learners about a teen online project called Teen World. Show two friendly school-aged boys in a balanced split composition: on the left, a boy at a desk with a laptop suggesting Michigan / USA; on the right, a 12-year-old Sámi boy in a Nordic Sweden setting with soft northern light and a small distant reindeer as a contextual element. Show a clear visual connection Ross → Dure without written text. No speech bubbles with text, no names, no labels, no textbook UI, no Flash page copy. Modern semi-flat educational style, friendly everyday teens, uncluttered, no logos, no watermark.",
          ua: "Create a clean educational illustration for 10–11-year-old English learners about Teen World: Ross (Michigan/USA) connected to Dure (Sweden/Sámi). No text, no speech-bubble text, no Flash copy, no watermark."
        }
      }),
      speakItems: [
        { speak: "Ross is from Michigan.", pl: "Ross jest z Michigan.", ua: "Ross з Мічигану." },
        { speak: "Dure is 12 and lives in Sweden.", pl: "Dure ma 12 lat i mieszka w Szwecji.", ua: "Dure має 12 років і живе у Швеції." },
        { speak: "Dure is Sámi.", pl: "Dure jest Saamem.", ua: "Dure — Sámi." }
      ],
      enPrompt: "Meet Ross and Dure.",
      promptPl: "Poznaj Rossa i Dure.",
      promptUa: "Познайомся з Россом і Дуре.",
      taskSequence: [
        {
          id: "eng1a-meet-1",
          type: "single-choice",
          doneLabel: "Who is Dure?",
          questionEn: "Who is Dure?",
          questionPl: "Kim jest Dure?",
          questionUa: "Хто такий Dure?",
          question: "Who is Dure?",
          options: [
            { id: "a", label: "a boy from Michigan, USA" },
            { id: "b", label: "a 12-year-old Sámi boy from Sweden" },
            { id: "c", label: "Dure’s teacher" }
          ],
          answer: "b",
          hint: {
            pl: "Dure ma 12 lat, mieszka w Szwecji i jest Saamem.",
            ua: "Dure має 12 років, живе у Швеції і є Sámi."
          },
          explanation: {
            pl: "Dure is a 12-year-old Sámi boy from Sweden.",
            ua: "Dure is a 12-year-old Sámi boy from Sweden."
          }
        }
      ]
    },

    /* 3 · Before reading / listening — preparation only (no quiz, no p. 6 answers) */
    {
      type: "concept",
      heading: { pl: "Before reading / listening", ua: "Before reading / listening" },
      keepProse: true,
      text: {
        pl: [
          "**You already know:** get up · get dressed · have breakfast",
          "**Już znasz:** get up · get dressed · have breakfast",
          "Now you're going to meet Dure and find out about his life in Sweden.",
          "Teraz poznasz Dure i dowiesz się o jego życiu w Szwecji.",
          "**When you listen, try to find out:**",
          "**Kiedy będziesz słuchać, spróbuj dowiedzieć się:**",
          "🏠 Where does Dure live?",
          "🏫 What time does school start?",
          "🗣️ What languages does he speak?",
          "⚽ What does he do after school?",
          "🌙 What does he do in the evening?"
        ],
        ua: [
          "**You already know:** get up · get dressed · have breakfast",
          "**Ти вже знаєш:** get up · get dressed · have breakfast",
          "Now you're going to meet Dure and find out about his life in Sweden.",
          "Зараз познайомишся з Dure і дізнаєшся про його життя у Швеції.",
          "**When you listen, try to find out:**",
          "**Коли слухатимеш, спробуй дізнатися:**",
          "🏠 Where does Dure live?",
          "🏫 What time does school start?",
          "🗣️ What languages does he speak?",
          "⚽ What does he do after school?",
          "🌙 What does he do in the evening?"
        ]
      }
    },

    /* 4 · FIRST LISTEN — Flash p. 6 online dialogue Ross → Dure */
    {
      type: "concept",
      heading: {
        pl: "Flash Listening · Teen World · First listen",
        ua: "Flash Listening · Teen World · First listen"
      },
      enPromptPlace: "before",
      enPrompt: "Listen and read. Don't worry about every word. Listen for the main idea.",
      promptPl: "Posłuchaj i czytaj. Nie przejmuj się każdym słowem. Posłuchaj głównej myśli.",
      promptUa: "Послухай і читай. Не хвилюйся через кожне слово. Послухай головну думку.",
      flashDialogue: {
        label: "Teen World · Flash 5, p. 6",
        messages: [
          {
            speaker: "Ross",
            role: "ross",
            paragraphs: [
              "I'm Ross from Michigan in the USA.",
              "We're doing a project at school on teenagers around the world. I'm writing about daily life in Sweden.",
              "Are any of you Swedish? Help"
            ]
          },
          {
            speaker: "Dure",
            role: "dure",
            paragraphs: [
              "Hi @rosstheboss! My name is Dure and I'm 12 years old. I'm Swedish, but I'm also a Sámi. The Sámi are people that live in Sweden, Norway and Finland. We speak the Sámi language and go to specia Sami schools.",
              "live with my mum, dad and brother, Hennet. Our family has got lots of reindeer. You can see one of them in my profile picture! My dad looks after them and my mum stays at home and makes Sámi clothes to sell. Hennet and 1 go to school.",
              "We get up at 7 o'clock in the morning, get dressed and have breakfast. Then, we walk to school together. Lessons start at 8:30 am and finish at 3 pm. We speak Sámi and Swedish in class, but we also learn English and French! After school, I usually play football with my friends, then I go home and do my homework.",
              "In the evening, I eat a hot meal with my family. Sometimes, my mother tells us old Sámi stories or we play Sáhkku, a Sámi board game. I usually watch TV or use the computer. I like posting comments or photos on social media and chatting with my friends online.",
              "I hope this helps you with your project!"
            ]
          }
        ]
      },
      visual: vizGh("l02-dure-world.png", {
        place: "after",
        alt: {
          pl: "Wsparcie wizualne: świat Dure (Szwecja / Sámi)",
          ua: "Візуальна підтримка: світ Dure (Швеція / Sámi)"
        },
        title: { pl: "Dure’s world", ua: "Dure’s world" },
        prompt: { pl: "See PLIKI.txt · l02-dure-world.png", ua: "See PLIKI.txt · l02-dure-world.png" }
      }),
      flashAudio: "./audio/03_Flash_kl5_M1_ex1_p6.mp3",
      flashAudioLabel: "Flash · Ex. 1, s. 6 · Listen and read",
      sequenceMode: "after-listening",
      taskSequence: [
        {
          id: "eng1a-first-1",
          type: "single-choice",
          doneLabel: "Gist · daily life",
          questionEn: "Who tells us about daily life in Sweden?",
          questionPl: "Kto opowiada nam o codziennym życiu w Szwecji?",
          questionUa: "Хто розповідає нам про повсякденне життя у Швеції?",
          question: "Who tells us about daily life in Sweden?",
          options: [
            { id: "a", label: "Ross" },
            { id: "b", label: "Dure" }
          ],
          answer: "b",
          hint: {
            pl: "Ross pisze o projekcie. Dure opowiada o życiu w Szwecji.",
            ua: "Ross пише про проєкт. Dure розповідає про життя у Швеції."
          },
          explanation: {
            pl: "Great! You understood the main idea.",
            ua: "Great! You understood the main idea."
          }
        }
      ]
    },

    /* 5 · SECOND LISTEN / FIND INFO + reading support */
    {
      type: "concept",
      heading: { pl: "Find information · Second listen", ua: "Find information · Second listen" },
      enPrompt: "Listen / read again. Find information about Dure.",
      promptPl: "Posłuchaj / przeczytaj jeszcze raz. Znajdź informacje o Dure.",
      promptUa: "Послухай / прочитай ще раз. Знайди інформацію про Dure.",
      
      speakItems: [
        { speak: "reindeer", pl: "renifer", ua: "північний олень" },
        { speak: "sell", pl: "sprzedawać", ua: "продавати" },
        { speak: "board game", pl: "gra planszowa", ua: "настільна гра" },
        { speak: "post", pl: "zamieszczać (wpis)", ua: "публікувати" },
        { speak: "photos", pl: "zdjęcia", ua: "фото" },
        { speak: "comments", pl: "komentarze", ua: "коментарі" },
        { speak: "social media", pl: "media społecznościowe", ua: "соцмережі" }
      ],
      text: {
        pl: [
          "**Reading support** (nie MUST KNOW): *These words help you understand the text.*"
        ],
        ua: [
          "**Поддержка чтения** (НЕОБХОДИМО ЗНАТЬ): *Эти слова помогут вам понять текст.*"
        ]
      },
      taskSequence: [
        {
          id: "eng1a-find-1",
          type: "single-choice",
          doneLabel: "Where",
          questionEn: "Where does Dure live?",
          questionPl: "Gdzie mieszka Dure?",
          questionUa: "Де живе Dure?",
          question: "Where does Dure live?",
          options: [
            { id: "a", label: "in Sweden" },
            { id: "b", label: "in Michigan" },
            { id: "c", label: "in Finland only" }
          ],
          answer: "a",
          hint: { pl: "Dure pisze ze Szwecji.", ua: "Dure пише зі Швеції." },
          explanation: { pl: "He lives in Sweden.", ua: "He lives in Sweden." }
        },
        {
          id: "eng1a-find-2",
          type: "single-choice",
          doneLabel: "School start",
          questionEn: "What time does school start?",
          questionPl: "O której zaczyna się szkoła?",
          questionUa: "О котрій починається школа?",
          question: "What time does school start?",
          options: [
            { id: "a", label: "at 7:00" },
            { id: "b", label: "at 8:30" },
            { id: "c", label: "at 15:00" }
          ],
          answer: "b",
          hint: { pl: "Lekcje: 8:30–15:00.", ua: "Уроки: 8:30–15:00." },
          explanation: { pl: "School starts at 8:30.", ua: "School starts at 8:30." }
        },
        {
          id: "eng1a-find-3",
          type: "single-choice",
          doneLabel: "Languages",
          questionEn: "What languages does he speak at school?",
          questionPl: "Jakimi językami mówi w szkole?",
          questionUa: "Якими мовами він говорить у школі?",
          question: "What languages does he speak at school?",
          options: [
            { id: "a", label: "only English" },
            { id: "b", label: "Sámi and Swedish (and he also learns English and French)" },
            { id: "c", label: "only Polish" }
          ],
          answer: "b",
          hint: { pl: "W klasie: Sámi i szwedzki; uczy się też EN i FR.", ua: "У класі: Sámi і шведська; також вчить EN і FR." },
          explanation: {
            pl: "Sámi and Swedish; he also learns English and French.",
            ua: "Sámi and Swedish; he also learns English and French."
          }
        },
        {
          id: "eng1a-find-4",
          type: "single-choice",
          doneLabel: "After school",
          questionEn: "What does he do after school?",
          questionPl: "Co robi po szkole?",
          questionUa: "Що він робить після школи?",
          question: "What does he do after school?",
          options: [
            { id: "a", label: "He plays football, then goes home and does homework." },
            { id: "b", label: "He goes shopping only." },
            { id: "c", label: "He stays at school all evening." }
          ],
          answer: "a",
          hint: { pl: "Najpierw piłka, potem dom i homework.", ua: "Спочатку футбол, потім дім і homework." },
          explanation: {
            pl: "He plays football, then homework.",
            ua: "He plays football, then homework."
          }
        },
        {
          id: "eng1a-find-5",
          type: "single-choice",
          doneLabel: "Evening",
          questionEn: "What does he do in the evening?",
          questionPl: "Co robi wieczorem?",
          questionUa: "Що він робить увечері?",
          question: "What does he do in the evening?",
          options: [
            { id: "a", label: "family meal, stories / games / TV / computer / social media" },
            { id: "b", label: "only get up" },
            { id: "c", label: "only lessons at school" }
          ],
          answer: "a",
          hint: { pl: "Wieczór = rodzina + free time.", ua: "Вечір = родина + free time." },
          explanation: {
            pl: "Evening = meal and free-time activities.",
            ua: "Evening = meal and free-time activities."
          }
        }
      ]
    },

    /* 6 · Flash comprehension */
    {
      type: "check",
      heading: { pl: "Flash comprehension", ua: "Flash comprehension" },
      enPrompt: "Check the details. Choose carefully.",
      promptPl: "Sprawdź szczegóły. Wybieraj uważnie.",
      promptUa: "Перевір деталі. Обирай уважно.",
      taskSequence: [
        {
          id: "eng1a-match-1",
          type: "single-choice",
          doneLabel: "Match 1",
          questionEn: "Dure lives…",
          questionPl: "Dure lives…",
          questionUa: "Dure lives…",
          question: "Dure lives…",
          options: [
            { id: "a", label: "in Michigan" },
            { id: "b", label: "in Sweden" },
            { id: "c", label: "in London" }
          ],
          answer: "b",
          hint: { pl: "Matching jak w Flash Ex. 1.", ua: "Matching як у Flash Ex. 1." },
          explanation: { pl: "Dure lives in Sweden.", ua: "Dure lives in Sweden." }
        },
        {
          id: "eng1a-match-2",
          type: "single-choice",
          doneLabel: "Match 2",
          questionEn: "Dure’s brother’s name…",
          questionPl: "Dure’s brother’s name…",
          questionUa: "Dure’s brother’s name…",
          question: "Dure’s brother’s name…",
          options: [
            { id: "a", label: "is Hennet" },
            { id: "b", label: "is Ross" },
            { id: "c", label: "is Sáhkku" }
          ],
          answer: "a",
          hint: { pl: "Brat Dure = Hennet.", ua: "Брат Dure = Hennet." },
          explanation: { pl: "His brother’s name is Hennet.", ua: "His brother’s name is Hennet." }
        },
        {
          id: "eng1a-match-3",
          type: "single-choice",
          doneLabel: "Match 3",
          questionEn: "At school, Dure speaks…",
          questionPl: "At school, Dure speaks…",
          questionUa: "At school, Dure speaks…",
          question: "At school, Dure speaks…",
          options: [
            { id: "a", label: "only French" },
            { id: "b", label: "Sámi and Swedish" },
            { id: "c", label: "only English" }
          ],
          answer: "b",
          hint: { pl: "W klasie: Sámi i szwedzki.", ua: "У класі: Sámi і шведська." },
          explanation: { pl: "He speaks Sámi and Swedish.", ua: "He speaks Sámi and Swedish." }
        },
        {
          id: "eng1a-rwd-1",
          type: "single-choice",
          doneLabel: "R/W/DS 1",
          questionEn: "Both of Dure’s parents have got jobs.",
          questionPl: "Right / Wrong / Doesn’t say?",
          questionUa: "Оба родителя Дюра нашли работу?",
          question: "Both of Dure’s parents have got jobs.",
          options: [
            { id: "a", label: "Right" },
            { id: "b", label: "Wrong" },
            { id: "c", label: "Doesn’t say" }
          ],
          answer: "a",
          hint: {
            pl: "Tata opiekuje się reniferami; mama robi ubrania na sprzedaż.",
            ua: "Тато доглядає оленів; мама робить одяг на продаж."
          },
          explanation: { pl: "Right.", ua: "Right." }
        },
        {
          id: "eng1a-rwd-2",
          type: "single-choice",
          doneLabel: "R/W/DS 2",
          questionEn: "Dure’s favourite subjects are English and French.",
          questionPl: "Right / Wrong / Doesn’t say?",
          questionUa: "Right / Wrong / Doesn’t say?",
          question: "Dure’s favourite subjects are English and French.",
          options: [
            { id: "a", label: "Right" },
            { id: "b", label: "Wrong" },
            { id: "c", label: "Doesn’t say" }
          ],
          answer: "c",
          hint: {
            pl: "Tekst mówi, że się uczy EN i FR — nie mówi, że to ulubione.",
            ua: "Текст каже, що він вчить EN і FR — не каже, що це улюблені."
          },
          explanation: { pl: "Doesn’t say.", ua: "Doesn’t say." }
        },
        {
          id: "eng1a-rwd-3",
          type: "single-choice",
          doneLabel: "R/W/DS 3",
          questionEn: "Dure always plays a board game in the evenings.",
          questionPl: "Right / Wrong / Doesn’t say?",
          questionUa: "Right / Wrong / Doesn’t say?",
          question: "Dure always plays a board game in the evenings.",
          options: [
            { id: "a", label: "Right" },
            { id: "b", label: "Wrong" },
            { id: "c", label: "Doesn’t say" }
          ],
          answer: "b",
          hint: {
            pl: "Czasem gra — nie always. Są też TV, komputer, social media…",
            ua: "Іноді грає — не always. Є також TV, комп’ютер, social media…"
          },
          explanation: { pl: "Wrong — not always.", ua: "Wrong — not always." }
        },
        {
          id: "eng1a-q-1",
          type: "single-choice",
          doneLabel: "Q · Sámi",
          questionEn: "Where do the Sámi people live?",
          questionPl: "Where do the Sámi people live?",
          questionUa: "Where do the Sámi people live?",
          question: "Where do the Sámi people live?",
          options: [
            { id: "a", label: "only in the USA" },
            { id: "b", label: "in Sweden, Norway and Finland" },
            { id: "c", label: "only in Poland" }
          ],
          answer: "b",
          hint: { pl: "Trzy kraje z tekstu.", ua: "Три країни з тексту." },
          explanation: {
            pl: "Sweden, Norway and Finland.",
            ua: "Sweden, Norway and Finland."
          }
        },
        {
          id: "eng1a-q-2",
          type: "single-choice",
          doneLabel: "Q · finish",
          questionEn: "What time do Dure and his brother finish school?",
          questionPl: "What time do they finish school?",
          questionUa: "What time do they finish school?",
          question: "What time do Dure and his brother finish school?",
          options: [
            { id: "a", label: "at 8:30" },
            { id: "b", label: "at 3:00 / 15:00" },
            { id: "c", label: "at 7:00" }
          ],
          answer: "b",
          hint: { pl: "Lekcje do 15:00.", ua: "Уроки до 15:00." },
          explanation: { pl: "They finish at 15:00.", ua: "They finish at 15:00." }
        },
        {
          id: "eng1a-q-3",
          type: "single-choice",
          doneLabel: "Q · evenings",
          questionEn: "What does Dure usually do in the evenings?",
          questionPl: "What does Dure usually do in the evenings?",
          questionUa: "What does Dure usually do in the evenings?",
          question: "What does Dure usually do in the evenings?",
          options: [
            { id: "a", label: "He catches the bus in the morning." },
            { id: "b", label: "He has a meal and free-time activities at home." },
            { id: "c", label: "He has lessons until night." }
          ],
          answer: "b",
          hint: { pl: "Wieczór w domu: posiłek + free time.", ua: "Вечір удома: їжа + free time." },
          explanation: {
            pl: "A meal and free-time activities.",
            ua: "A meal and free-time activities."
          }
        }
      ]
    },

    /* 7 · Recycle — Dure’s day (light) */
    {
      type: "practice",
      heading: { pl: "Recycle · Dure’s day", ua: "Recycle · Dure’s day" },
      enPrompt: "You know these words from Lesson 1. Put Dure’s morning in order.",
      promptPl: "Znasz te słowa z lekcji 1. Ułóż poranek Dure w kolejności.",
      promptUa: "Ти знаєш ці слова з уроку 1. Розстав ранок Dure по порядку.",
      speakItems: [
        { speak: "get up", pl: "wstawać", ua: "вставати" },
        { speak: "get dressed", pl: "ubierać się", ua: "одягатися" },
        { speak: "have breakfast", pl: "jeść śniadanie", ua: "снідати" },
        { speak: "walk to school", pl: "iść do szkoły pieszo", ua: "іти до школи пішки" },
        { speak: "have lessons", pl: "mieć lekcje", ua: "мати уроки" },
        { speak: "do homework", pl: "odrabiać lekcje", ua: "робити домашнє" }
      ],
      taskSequence: [
        {
          id: "eng1a-recycle-1",
          type: "order-build",
          doneLabel: "Morning order",
          questionEn: "Tap the morning steps in order.",
          questionPl: "Ułóż kroki poranka w kolejności.",
          questionUa: "Розстав кроки ранку по порядку.",
          question: "Tap the morning steps in order.",
          items: ["get up", "get dressed", "have breakfast", "walk to school"],
          answer: ["get up", "get dressed", "have breakfast", "walk to school"],
          hint: {
            pl: "Jak w lekcji 1: wstajesz → ubierasz się → śniadanie → szkoła.",
            ua: "Як у уроці 1: встаєш → одягаєшся → сніданок → школа."
          },
          explanation: {
            pl: "get up → get dressed → have breakfast → walk to school",
            ua: "get up → get dressed → have breakfast → walk to school"
          }
        }
      ]
    },

    /* 8 · Free-time CORE MUST KNOW */
    {
      type: "concept",
      heading: { pl: "Free-time activities · MUST KNOW", ua: "Free-time activities · MUST KNOW" },
      enPrompt: "Listen and repeat. These 12 phrases are MUST KNOW.",
      promptPl: "Posłuchaj i powtórz. Te 12 wyrażeń to MUST KNOW.",
      promptUa: "Послухай і повтори. Ці 12 виразів — MUST KNOW.",
      flashAudio: "./audio/04_Flash_kl5_M1_ex4a_p7.mp3",
      flashAudioLabel: "Flash · Ex. 4a, s. 7 · Listen and repeat",
      speakItems: [
        { speak: "read a book", pl: "czytać książkę", ua: "читати книжку" },
        { speak: "play sports", pl: "uprawiać sport", ua: "займатися спортом" },
        { speak: "watch TV", pl: "oglądać telewizję", ua: "дивитися телевізор" },
        { speak: "play online/board games", pl: "grać online / w gry planszowe", ua: "грати онлайн / у настільні ігри" },
        { speak: "listen to music", pl: "słuchać muzyki", ua: "слухати музику" },
        { speak: "chat with friends online", pl: "rozmawiać z przyjaciółmi online", ua: "спілкуватися з друзями онлайн" },
        { speak: "go to the cinema", pl: "iść do kina", ua: "йти в кіно" },
        { speak: "exercise", pl: "ćwiczyć", ua: "тренуватися" },
        { speak: "draw/paint", pl: "rysować / malować", ua: "малювати" },
        { speak: "spend time with family/friends", pl: "spędzać czas z rodziną / przyjaciółmi", ua: "проводити час із родиною / друзями" },
        { speak: "go shopping", pl: "robić zakupy", ua: "ходити за покупками" },
        { speak: "play with a pet", pl: "bawić się ze zwierzakiem", ua: "гратися з улюбленцем" }
      ],
      taskSequence: [
        {
          id: "eng1a-ft-1",
          type: "single-choice",
          doneLabel: "Recognition 1",
          questionEn: "Which activity is about music?",
          questionPl: "Która czynność dotyczy muzyki?",
          questionUa: "Яка дія про музику?",
          question: "Which activity is about music?",
          options: [
            { id: "a", label: "listen to music" },
            { id: "b", label: "go shopping" },
            { id: "c", label: "play with a pet" }
          ],
          answer: "a",
          hint: { pl: "music = listen to music", ua: "music = listen to music" },
          explanation: { pl: "listen to music", ua: "listen to music" }
        },
        {
          id: "eng1a-ft-2",
          type: "multiple-choice",
          doneLabel: "Recognition 2",
          questionEn: "Which activities can you do with friends? Choose ALL.",
          questionPl: "Które czynności możesz robić z przyjaciółmi? Wybierz wszystkie.",
          questionUa: "Які дії можна з друзями? Вибери всі.",
          question: "Which activities can you do with friends? Choose ALL.",
          options: [
            { id: "a", label: "chat with friends online" },
            { id: "b", label: "spend time with family/friends" },
            { id: "c", label: "go to the cinema" },
            { id: "d", label: "read a book" }
          ],
          answer: ["a", "b", "c"],
          hint: {
            pl: "read a book często robisz sam / sama.",
            ua: "read a book часто робиш сам / сама."
          },
          explanation: {
            pl: "chat / spend time / cinema — with friends.",
            ua: "chat / spend time / cinema — with friends."
          }
        }
      ]
    },

    /* 9 · Picture practice */
    {
      type: "concept",
      heading: { pl: "Picture practice", ua: "Picture practice" },
      visual: vizGh("l02-free-time.png", {
        alt: {
          pl: "Siatka scen free-time: sport, muzyka, zwierzak, zakupy, kino, malowanie…",
          ua: "Сітка сцен free-time: спорт, музика, улюбленець, покупки, кіно, малювання…"
        },
        title: { pl: "Free-time scenes", ua: "Free-time scenes" },
        prompt: { pl: "See PLIKI.txt · l02-free-time.png", ua: "See PLIKI.txt · l02-free-time.png" }
      }),
      enPrompt: "Look at the pictures. Which activities can you see?",
      promptPl: "Spójrz na obrazki. Jakie czynności widzisz?",
      promptUa: "Подивись на малюнки. Які дії бачиш?",
      speakItems: [
        { speak: "play sports", pl: "uprawiać sport", ua: "займатися спортом" },
        { speak: "listen to music", pl: "słuchać muzyki", ua: "слухати музику" },
        { speak: "play with a pet", pl: "bawić się ze zwierzakiem", ua: "гратися з улюбленцем" },
        { speak: "go shopping", pl: "robić zakupy", ua: "ходити за покупками" },
        { speak: "go to the cinema", pl: "iść do kina", ua: "йти в кіно" },
        { speak: "draw/paint", pl: "rysować / malować", ua: "малювати" },
        { speak: "play online/board games", pl: "gry online / planszowe", ua: "ігри онлайн / настільні" }
      ],
      taskSequence: [
        {
          id: "eng1a-pic-1",
          type: "multiple-choice",
          doneLabel: "Pictures · ALL",
          questionEn: "Which activities can you see in the pictures? Choose ALL that fit.",
          questionPl: "Które czynności widać na obrazkach? Wybierz pasujące.",
          questionUa: "Які дії видно на малюнках? Вибери потрібні.",
          question: "Which activities can you see in the pictures? Choose ALL that fit.",
          options: [
            { id: "a", label: "play sports" },
            { id: "b", label: "listen to music" },
            { id: "c", label: "go to the cinema" },
            { id: "d", label: "catch the bus" }
          ],
          answer: ["a", "b", "c"],
          hint: {
            pl: "catch the bus = rutyna ze szkoły / lekcji 1, nie ta siatka free-time.",
            ua: "catch the bus = рутина зі школи / уроку 1, не ця сітка free-time."
          },
          explanation: {
            pl: "play sports, listen to music, go to the cinema.",
            ua: "play sports, listen to music, go to the cinema."
          }
        }
      ]
    },

    /* 10 · like / don't mind / dislike — MEANING first, then -ing pattern */
    {
      type: "concept",
      heading: {
        pl: "How do you feel about free-time activities?",
        ua: "How do you feel about free-time activities?"
      },
      enPromptPlace: "before",
      enPrompt: "We can say what we like, what we don't mind and what we dislike doing.",
      promptPl: "Możemy powiedzieć, co lubimy, na co nam wszystko jedno i czego nie lubimy robić.",
      promptUa: "Можемо сказати, що нам подобається, що нам нормально і що нам не подобається робити.",
      visual: vizGh("l02-like-ing.png", {
        place: "after",
        alt: {
          pl: "Trzy sceny: like / don’t mind / dislike",
          ua: "Три сцени: like / don’t mind / dislike"
        },
        title: { pl: "like · don’t mind · dislike", ua: "like · don’t mind · dislike" },
        prompt: { pl: "See PLIKI.txt · l02-like-ing.png", ua: "See PLIKI.txt · l02-like-ing.png" }
      }),
      likeTeach: {
        sections: [
          {
            face: "😊",
            title: "LIKE",
            meaningPl: "I like... = Lubię... / Podoba mi się...",
            meaningUa: "I like... = Мені подобається...",
            examples: [
              { speak: "I like chatting with friends online." },
              { speak: "I like playing sports." }
            ]
          },
          {
            face: "😐",
            title: "DON'T MIND",
            meaningPl: "I don't mind... = Nic mi to nie robi... / Jest OK... (nie znaczy „nie lubię”)",
            meaningUa: "I don't mind... = Я не проти... / Мені нормально...",
            examples: [
              { speak: "I don't mind drawing." },
              { speak: "I don't mind watching TV." }
            ]
          },
          {
            face: "🙁",
            title: "DISLIKE",
            meaningPl: "I dislike... = Nie lubię... / Nie podoba mi się...",
            meaningUa: "I dislike... = Мені не подобається...",
            examples: [
              { speak: "I dislike playing board games." },
              { speak: "I dislike going shopping." }
            ]
          }
        ],
        observeTitle: "🔎 Look at the sentences.",
        observeLines: [
          { before: "I like chat", ing: "ting", after: " with friends online." },
          { before: "I don't mind draw", ing: "ing", after: "." },
          { before: "I dislike play", ing: "ing", after: " board games." }
        ],
        patternEn: "After like / don't mind / dislike, we use an activity with -ing.",
        patternPl: "Po like / don't mind / dislike używamy czynności z -ing.",
        patternUa: "Після like / don't mind / dislike ми вживаємо дію із закінченням -ing.",
        wrong: "I like play football.",
        right: "I like playing football.",
        tipEn: "The action after “like” uses -ing.",
        tipPl: "Czynność po „like” ma końcówkę -ing.",
        tipUa: "Після like назва дії має форму з -ing."
      },
      taskSequence: [
        {
          id: "eng1a-like-1",
          type: "single-choice",
          doneLabel: "Mini check",
          questionEn: "Choose the correct sentence.",
          questionPl: "Wybierz poprawne zdanie.",
          questionUa: "Вибери правильне речення.",
          question: "Choose the correct sentence.",
          options: [
            { id: "a", label: "I like play football." },
            { id: "b", label: "I like playing football." },
            { id: "c", label: "I like plays football." }
          ],
          answer: "b",
          hint: {
            pl: "Try again. Look at the action after “like”.",
            ua: "Try again. Look at the action after “like”."
          },
          explanation: {
            pl: "✓ Correct! “like + verb-ing”.",
            ua: "✓ Correct! “like + verb-ing”."
          }
        }
      ]
    },

    /* 11 · Deep Dive — practice like / don't mind / dislike + -ing */
    {
      type: "concept",
      heading: {
        pl: "Deep Dive · Build your sentence",
        ua: "Deep Dive · Build your sentence"
      },
      enPromptPlace: "before",
      enPrompt: "Now use the pattern yourself.",
      promptPl: "Teraz użyj wzoru samodzielnie.",
      promptUa: "Тепер використай цю конструкцію самостійно.",
      phraseDive: {
        mode: "reminder",
        patterns: [
          "I like + activity-ing",
          "I don't mind + activity-ing",
          "I dislike + activity-ing"
        ],
        examples: [
          { speak: "I like playing sports." },
          { speak: "I don't mind drawing." },
          { speak: "I dislike playing board games." }
        ],
        tipPl: "Po like / don't mind / dislike nazwa czynności ma końcówkę -ing.",
        tipUa: "Після like / don't mind / dislike назва дії має форму з -ing."
      },
      taskSequence: [
        {
          id: "eng1a-dive-1",
          type: "single-choice",
          doneLabel: "Ending · like",
          questionEn: "Choose the correct ending. — I like …",
          questionPl: "Wybierz poprawne zakończenie. — I like …",
          questionUa: "Обери правильне закінчення. — I like …",
          question: "Choose the correct ending. — I like …",
          options: [
            { id: "a", label: "play sports" },
            { id: "b", label: "playing sports" },
            { id: "c", label: "plays sports" }
          ],
          answer: "b",
          speakCorrect: "I like playing sports.",
          hint: {
            pl: "Look at the action after “like”.",
            ua: "Look at the action after “like”."
          },
          explanation: {
            pl: "✓ I like playing sports.",
            ua: "✓ I like playing sports."
          }
        },
        {
          id: "eng1a-dive-2",
          type: "single-choice",
          doneLabel: "Ending · dislike",
          questionEn: "Choose the correct sentence. — I dislike …",
          questionPl: "Wybierz poprawne zdanie. — I dislike …",
          questionUa: "Вибери правильне речення. — I dislike …",
          question: "Choose the correct sentence. — I dislike …",
          options: [
            { id: "a", label: "go to the cinema" },
            { id: "b", label: "going to the cinema" },
            { id: "c", label: "goes to the cinema" }
          ],
          answer: "b",
          speakCorrect: "I dislike going to the cinema.",
          hint: {
            pl: "Look at the action after “dislike”.",
            ua: "Look at the action after “dislike”."
          },
          explanation: {
            pl: "✓ I dislike going to the cinema.",
            ua: "✓ I dislike going to the cinema."
          }
        },
        {
          id: "eng1a-dive-3",
          type: "single-choice",
          doneLabel: "Meaning · don't mind",
          questionEn: "What does “I don't mind drawing” mean?",
          questionPl: "Co znaczy „I don't mind drawing”?",
          questionUa: "Що означає “I don't mind drawing”?",
          question: "What does “I don't mind drawing” mean?",
          options: [
            { id: "a", label: "I really love drawing." },
            { id: "b", label: "Drawing is OK for me." },
            { id: "c", label: "I hate drawing." }
          ],
          answer: "b",
          speakCorrect: "I don't mind drawing.",
          hint: {
            pl: "don't mind ≠ dislike. It means “OK for me”.",
            ua: "don't mind ≠ dislike. It means “OK for me”."
          },
          explanation: {
            pl: "✓ “I don't mind” means it is OK for me.",
            ua: "✓ “I don't mind” means it is OK for me. — Я не проти / мені нормально."
          }
        },
        {
          id: "eng1a-dive-4",
          type: "single-choice",
          doneLabel: "Build sentence",
          questionEn: "Build the sentence: I / like / play sports",
          questionPl: "Złóż zdanie: I / like / play sports",
          questionUa: "Склади речення: I / like / play sports",
          question: "Build the sentence: I / like / play sports",
          options: [
            { id: "a", label: "I like play sports." },
            { id: "b", label: "I like playing sports." },
            { id: "c", label: "I like plays sports." }
          ],
          answer: "b",
          speakCorrect: "I like playing sports.",
          hint: {
            pl: "I → like → playing sports.",
            ua: "I → like → playing sports."
          },
          explanation: {
            pl: "✓ I like playing sports.",
            ua: "✓ I like playing sports."
          }
        },
        {
          id: "eng1a-dive-5",
          type: "single-choice",
          doneLabel: "Meaning · dislike",
          questionEn: "Which sentence means “Мені не подобається грати в настільні ігри”?",
          questionPl: "Które zdanie oznacza „Nie lubię grać w gry planszowe”?",
          questionUa: "Яке речення означає «Мені не подобається грати в настільні ігри»?",
          question: "Which sentence means “Мені не подобається грати в настільні ігри”?",
          options: [
            { id: "a", label: "I like playing board games." },
            { id: "b", label: "I don't mind playing board games." },
            { id: "c", label: "I dislike playing board games." }
          ],
          answer: "c",
          speakCorrect: "I dislike playing board games.",
          hint: {
            pl: "dislike = nie lubię / nie podoba mi się.",
            ua: "dislike = мені не подобається."
          },
          explanation: {
            pl: "✓ I dislike playing board games.",
            ua: "✓ I dislike playing board games."
          }
        }
      ]
    },

    /* 12 · Extra GOOD TO KNOW — Dure’s world (no Present Simple / -s) */
    {
      type: "concept",
      heading: { pl: "Extra · GOOD TO KNOW", ua: "Extra · GOOD TO KNOW" },
      enPromptPlace: "before",
      enPrompt: "These words help you understand Dure’s world. They are GOOD TO KNOW, not MUST KNOW.",
      promptPl: "Te słowa pomagają lepiej zrozumieć świat Dure. Nie musisz zapamiętać ich wszystkich.",
      promptUa: "Ці слова допоможуть краще зрозуміти світ Дуре. Не потрібно вчити їх усі напам’ять.",
      goodToKnow: {
        introEn: "These words come from Dure’s story. They help you understand his family, culture and free time.",
        introPl: "Te słowa pochodzą z historii Dure. Pomagają lepiej zrozumieć jego rodzinę, kulturę i czas wolny.",
        introUa: "Ці слова походять з історії Дуре. Вони допомагають краще зрозуміти його сім’ю, культуру та вільний час.",
        groups: [
          {
            id: "family",
            title: "🌿 DURE’S FAMILY & LIFE",
            items: [
              { speak: "look after", pl: "opiekować się", ua: "доглядати", icon: "🌿" },
              { speak: "reindeer", pl: "renifer", ua: "північний олень", icon: "🦌" },
              { speak: "make clothes", pl: "robić ubrania", ua: "виготовляти одяг", icon: "👕" },
              { speak: "hot meal", pl: "gorący posiłek", ua: "гаряча страва", icon: "🍲" }
            ]
          },
          {
            id: "sami",
            title: "🎲 SÁMI WORLD",
            noteEn: "Sámi = a people who live in northern parts of Sweden, Norway and Finland.",
            notePl: "Saamowie mieszkają w północnych częściach Szwecji, Norwegii i Finlandii.",
            noteUa: "Саами живуть у північних частинах Швеції, Норвегії та Фінляндії.",
            items: [
              { speak: "Sámi language", pl: "język saamski", ua: "саамська мова", icon: "🗣" },
              { speak: "Sáhkku", pl: "saamska gra planszowa", ua: "саамська настільна гра", icon: "🎲" }
            ]
          },
          {
            id: "online",
            title: "💬 ONLINE",
            items: [
              { speak: "post comments", pl: "zamieszczać komentarze", ua: "публікувати коментарі", icon: "💬" },
              { speak: "social media", pl: "media społecznościowe", ua: "соціальні мережі", icon: "📱" }
            ]
          }
        ]
      },
      taskSequence: [
        {
          id: "eng1a-extra-1",
          type: "single-choice",
          doneLabel: "Meaning · look after",
          questionEn: "What does “look after” mean?",
          questionPl: "Co znaczy “look after”?",
          questionUa: "Що означає “look after”?",
          question: "What does “look after” mean?",
          options: [
            { id: "a", label: "take care of" },
            { id: "b", label: "go shopping" },
            { id: "c", label: "play a game" }
          ],
          answer: "a",
          speakCorrect: "look after",
          hint: {
            pl: "look after = opiekować się / take care of.",
            ua: "look after = доглядати / take care of."
          },
          explanation: {
            pl: "✓ look after = take care of.",
            ua: "✓ look after = take care of."
          }
        },
        {
          id: "eng1a-extra-2",
          type: "single-choice",
          doneLabel: "Recognition · Sáhkku",
          questionEn: "Which word is the name of a Sámi board game?",
          questionPl: "Które słowo to nazwa saamskiej gry planszowej?",
          questionUa: "Яке слово — назва саамської настільної гри?",
          question: "Which word is the name of a Sámi board game?",
          options: [
            { id: "a", label: "Sáhkku" },
            { id: "b", label: "Sweden" },
            { id: "c", label: "reindeer" }
          ],
          answer: "a",
          speakCorrect: "Sáhkku",
          hint: {
            pl: "Sáhkku = saamska gra planszowa.",
            ua: "Sáhkku = саамська настільна гра."
          },
          explanation: {
            pl: "✓ Sáhkku is a Sámi board game.",
            ua: "✓ Sáhkku is a Sámi board game."
          }
        }
      ]
    },

    /* 13 · Speaking — oral practice only (no typing / no auto score) */
    {
      type: "review",
      heading: { pl: "Speaking · My free time", ua: "Speaking · My free time" },
      enPromptPlace: "before",
      enPrompt: "Now it's your turn!",
      promptPl: "Teraz Twoja kolej! Powiedz kilka zdań o swoim czasie wolnym.",
      promptUa: "Тепер твоя черга! Розкажи кілька речень про свій вільний час.",
      speakingPrep: {
        exampleLabel: "Listen to an example",
        exampleLines: [
          "I like chatting with friends online.",
          "I don't mind drawing.",
          "I dislike going shopping.",
          "After school, I play sports.",
          "In the evening, I watch TV."
        ],
        modelsTitle: "Build your sentences",
        models: [
          "I like __________.",
          "I don't mind __________.",
          "I dislike __________.",
          "After school, I __________.",
          "In the evening, I __________."
        ],
        modelsHintEn: "Use the words you know.",
        modelsHintPl: "Użyj słów, które już znasz.",
        modelsHintUa: "Використовуй слова, які ти вже знаєш.",
        vocabLabel: "Useful words",
        vocab: [
          "read a book",
          "play sports",
          "watch TV",
          "listen to music",
          "chat with friends online",
          "go to the cinema",
          "draw/paint",
          "go shopping",
          "play with a pet"
        ],
        recycleEn: "You can also use: get up · get dressed · have breakfast · go to school · do homework",
        speakTaskEn: "Now speak about your free time. Try to say 3–5 sentences.",
        speakTaskPl: "Powiedz 3–5 zdań o swoim czasie wolnym.",
        speakTaskUa: "Скажи 3–5 речень про свій вільний час.",
        noteEn: "🎤 No automatic score. The important thing is that you speak.",
        notePl: "Nie ma automatycznej oceny wymowy. Najważniejsze, że mówisz.",
        noteUa: "Немає автоматичної оцінки вимови. Головне — що ти говориш.",
        challengeTitle: "⭐ CHALLENGE",
        challengeEn: "Can you say one more sentence?",
        challengeLine: "I like __________ because __________."
      }
    },

    /* 14 · Check & Remember */
    {
      type: "check",
      heading: { pl: "Check & Remember · MUST KNOW", ua: "Check & Remember · MUST KNOW" },
      sequenceMode: "lesson-close",
      lessonClose: {
        leadEn: "Today you can talk about Teen World and your free time.",
        leadPl: "Dziś potrafisz mówić o Teen World i o swoim czasie wolnym.",
        leadUa: "Сьогодні ти вмієш говорити про Teen World і свій вільний час.",
        points: [
          {
            title: "1. Free-time activities",
            body: "read a book · play sports · watch TV · chat online · …"
          },
          {
            title: "2. Preferences",
            lines: ["I like …ing.", "I don't mind …ing.", "I dislike …ing."],
            speak: "I like chatting with friends online."
          },
          {
            title: "3. Dure",
            body: "Dure is 12. He lives in Sweden. He is Sámi."
          }
        ],
        modelLabel: "Listen & say it aloud",
        modelLines: [
          "I like playing sports.",
          "I don't mind reading a book.",
          "I dislike going shopping."
        ],
        successEn: "Great! You can talk about your free time.",
        successPl: "Świetnie! Potrafisz opowiedzieć o swoim czasie wolnym.",
        successUa: "Чудово! Ти вмієш розповісти про свій вільний час.",
        sayEn: "Now say one sentence about your free time.",
        sayPl: "Powiedz teraz jedno zdanie o swoim czasie wolnym.",
        sayUa: "Скажи зараз одне речення про свій вільний час.",
        sayPrompt: "I like ______.",
        nextLesson: "Next lesson → 1b Present Simple"
      },
      taskSequence: [
        {
          id: "eng1a-final-1",
          type: "single-choice",
          doneLabel: "Final · like-ing",
          questionEn: "Which sentence is correct?",
          questionPl: "Które zdanie jest poprawne?",
          questionUa: "Яке речення правильне?",
          question: "Which sentence is correct?",
          options: [
            { id: "a", label: "I like play sports." },
            { id: "b", label: "I like playing sports." },
            { id: "c", label: "I like to playing sports." }
          ],
          answer: "b",
          hint: { pl: "like + -ing", ua: "like + -ing" },
          explanation: { pl: "I like playing sports.", ua: "I like playing sports." }
        },
        {
          id: "eng1a-final-2",
          type: "single-choice",
          doneLabel: "Final · Dure",
          questionEn: "Which fact about Dure is true?",
          questionPl: "Który fakt o Dure jest prawdziwy?",
          questionUa: "Який факт про Dure правильний?",
          question: "Which fact about Dure is true?",
          options: [
            { id: "a", label: "He lives in Michigan." },
            { id: "b", label: "He is Sámi and lives in Sweden." },
            { id: "c", label: "He never goes to school." }
          ],
          answer: "b",
          hint: { pl: "Dure = Sweden + Sámi.", ua: "Dure = Sweden + Sámi." },
          explanation: {
            pl: "He is Sámi and lives in Sweden.",
            ua: "He is Sámi and lives in Sweden."
          }
        }
      ]
    }
  ]
};
