function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG =
  "https://github.com/edumost-pl/EduMost_5_Klasa/blob/main/blob/main/Angielski/L03_Present_Simple/images/";

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
    /* 1 · GOAL — calm entry, timeline, no grammar table */
    {
      type: "intro",
      heading: { pl: "Present Simple · Paszport lekcji", ua: "Present Simple · Паспорт уроку" },
      enPrompt: "Talk about things you do regularly.",
      enPromptPlace: "before",
      promptPl: "Mówimy o tym, co robimy regularnie.",
      promptUa: "Ми говоримо про те, що робимо регулярно.",
      keepProse: true,
      mustKnow: {
        en: "We use Present Simple to talk about things we do regularly.",
        pl: "Używamy Present Simple, żeby mówić o tym, co robimy regularnie.",
        ua: "Ми використовуємо Present Simple, щоб говорити про те, що робимо регулярно."
      },
      text: {
        pl: ["Posłuchaj trzech zdań. Powtórz je na głos 🔊."],
        ua: ["Послухай три речення. Повтори їх уголос 🔊."]
      },
      visual: vizGh("l03-timeline.png", {
        alt: {
          pl: "Typowy dzień: rano → szkoła → popołudnie → wieczór → następny dzień",
          ua: "Типовий день: ранок → школа → день → вечір → наступний день"
        },
        title: { pl: "A regular day", ua: "A regular day" },
        prompt: {
          pl: "Create a clean educational infographic for an English lesson about habits and routines for 10–11-year-olds. Show a circular day cycle: morning (getting up) → school → afternoon (activities) → evening (homework, TV) → arrow back to next morning. One friendly school-aged child in semi-flat educational style. Warm colours, clear progression, loop arrow suggesting repetition. No written text, no labels, no numbers, no logos, no watermark, no Flash page copy.",
          ua: "Educational day-cycle infographic for habits lesson. Morning → school → afternoon → evening → next day loop. Semi-flat, age 10–11. No text, no watermark."
        }
      }),
      speakItems: [
        { speak: "I play football.", pl: "Gram w piłkę.", ua: "Я граю у футбол." },
        { speak: "I go to school.", pl: "Chodzę do szkoły.", ua: "Я ходжу до школи." },
        { speak: "I do my homework.", pl: "Odrabiam lekcje.", ua: "Я роблю домашнє." }
      ]
    },

    /* 2 · DISCOVERY — familiar sentences → EVERY DAY → HABIT (no PS label yet) */
    {
      type: "concept",
      heading: { pl: "Flash · Recycle · Discovery", ua: "Flash · Recycle · Discovery" },
      enPrompt: "You know these sentences from Lessons 1 and 1a.",
      enPromptPlace: "before",
      promptPl: "Znasz te zdania z lekcji 1 i 1a. Posłuchaj i pomyśl: co mają wspólnego?",
      promptUa: "Ти знаєш ці речення з уроків 1 і 1a. Послухай і подумай: що в них спільного?",
      visual: vizGh("l03-recycle-habit.png", {
        alt: {
          pl: "Znane czynności → EVERY DAY → again and again → HABIT",
          ua: "Знайомі дії → EVERY DAY → again and again → HABIT"
        },
        title: { pl: "Every day → habit", ua: "Every day → habit" },
        prompt: {
          pl: "Create a clean educational infographic for an English lesson (age 10–11) showing familiar daily actions as simple icon scenes: get up, go to school, play football. Below, a visual arrow chain with ONLY these English labels: EVERY DAY → again and again → HABIT. Do NOT include Present Simple or any grammar table. Semi-flat educational style, friendly, uncluttered. No Flash page copy, no watermark, no logos.",
          ua: "Infographic: routine action icons + chain EVERY DAY → again and again → HABIT only. No Present Simple. Age 10–11, semi-flat, no watermark."
        }
      }),
      habitDiscovery: {
        introEn: "Listen to each sentence. These are familiar actions from Lessons 1 and 1a.",
        introPl: "Posłuchaj każdego zdania. To znane czynności z lekcji 1 i 1a.",
        introUa: "Послухай кожне речення. Це знайомі дії з уроків 1 і 1a.",
        sentences: [
          { speak: "I get up at 7 every day.", icon: "⏰", pl: "Wstaję o 7 codziennie.", ua: "Я встаю о 7 щодня." },
          { speak: "I go to school every day.", icon: "🏫", pl: "Codziennie chodzę do szkoły.", ua: "Я ходжу до школи щодня." },
          { speak: "I play football after school.", icon: "⚽", pl: "Gram w piłkę po szkole.", ua: "Я граю у футбол після школи." }
        ],
        chain: [
          {
            label: "EVERY DAY",
            hintPl: "Każdego dnia — to się powtarza.",
            hintUa: "Щодня — це повторюється."
          },
          {
            label: "again and again",
            hintPl: "Robimy to w kółko.",
            hintUa: "Ми робимо це знову і знову."
          },
          {
            label: "HABIT",
            hintPl: "Nawyk = coś, co robimy regularnie.",
            hintUa: "Звичка = те, що ми робимо регулярно."
          }
        ],
        insightEn: "A habit is something we do regularly.",
        insightPl: "Nawyk to coś, co robimy regularnie.",
        insightUa: "Звичка — це те, що ми робимо регулярно."
      },
      taskSequence: [
        {
          id: "eng1b-disc-1",
          type: "single-choice",
          doneLabel: "Repetition",
          questionEn: "Which phrase shows repetition?",
          questionPl: "Która fraza pokazuje powtarzanie?",
          questionUa: "Яка фраза показує, що дія повторюється?",
          question: "Which phrase shows repetition?",
          options: [
            { id: "a", label: "every day" },
            { id: "b", label: "today" },
            { id: "c", label: "on my birthday" }
          ],
          answer: "a",
          hint: {
            pl: "Szukaj frazy, która mówi o powtarzaniu — nie o jednym dniu.",
            ua: "Шукай фразу про повторення — не про один день."
          },
          explanation: {
            pl: "Great! „Every day” shows that something happens again and again.",
            ua: "Great! „Every day” shows that something happens again and again."
          }
        }
      ]
    },

    /* 3 · MEANING BRIDGE — HABIT → PRESENT SIMPLE (no forms yet) */
    {
      type: "concept",
      heading: {
        pl: "Present Simple · What does it mean?",
        ua: "Present Simple · What does it mean?"
      },
      enPrompt: "On the last screen, you discovered habits — things we do again and again. Now we give this idea its English name.",
      enPromptPlace: "before",
      promptPl: "Na poprzednim ekranie odkryłeś / odkryłaś nawyki — czynności, które powtarzamy. Teraz nadajemy tej idei angielską nazwę.",
      promptUa: "На попередньому екрані ти відкрив / відкрила звички — дії, які повторюються. Тепер даємо цій ідеї англійську назву.",
      visual: vizGh("l03-meaning-bridge.png", {
        alt: {
          pl: "Most znaczenia: nawyk / regularna czynność → Present Simple",
          ua: "Міст значення: звичка / регулярна дія → Present Simple"
        },
        title: { pl: "Habit → Present Simple", ua: "Habit → Present Simple" },
        prompt: {
          pl: "Create a clean educational infographic for 10–11-year-old English learners showing the meaning bridge from habit to Present Simple. Top row: three connected pills EVERY DAY → AGAIN AND AGAIN → HABIT. Below, a large arrow down to two boxes: HABIT / REGULAR ACTION → PRESENT SIMPLE. Optional small day-cycle loop (morning to evening) suggesting repetition. Semi-flat educational style, warm colours, uncluttered. English labels only as listed. No grammar table, no verb conjugation, no he/she/it, no logos, no watermark, no Flash page copy.",
          ua: "Meaning bridge infographic: EVERY DAY → AGAIN AND AGAIN → HABIT ↓ HABIT / REGULAR ACTION → PRESENT SIMPLE. No conjugation table. Age 10–11, semi-flat, no watermark."
        }
      }),
      habitToPs: {
        recallEn: "Remember: EVERY DAY → AGAIN AND AGAIN → HABIT",
        recallPl: "Pamiętaj: EVERY DAY → AGAIN AND AGAIN → HABIT",
        recallUa: "Пам’ятай: EVERY DAY → AGAIN AND AGAIN → HABIT",
        meaningEn: "Present Simple = the tense we use to talk about habits and regular actions.",
        meaningPl: "Present Simple = czas, którego używamy, żeby mówić o nawykach i regularnych czynnościach.",
        meaningUa: "Present Simple = час, яким ми говоримо про звички та регулярні дії.",
        examplesLabelEn: "These sentences are Present Simple. They describe regular habits.",
        examplesLabelPl: "Te zdania to Present Simple. Opisują regularne nawyki.",
        examplesLabelUa: "Ці речення — Present Simple. Вони описують регулярні звички.",
        recycleExamples: [
          { speak: "I get up at 7 every day.", pl: "Wstaję o 7 codziennie.", ua: "Я встаю о 7 щодня." },
          { speak: "I go to school every day.", pl: "Codziennie chodzę do szkoły.", ua: "Я ходжу до школи щодня." },
          { speak: "I play football after school.", pl: "Gram w piłkę po szkole.", ua: "Я граю у футбол після школи." }
        ],
        moreLabelEn: "More examples",
        moreLabelPl: "Więcej przykładów",
        moreLabelUa: "Більше прикладів",
        moreExamples: [
          { speak: "I have breakfast at 7:30.", pl: "Jem śniadanie o 7:30.", ua: "Я снідаю о 7:30." },
          { speak: "I read a book in the evening.", pl: "Czytam książkę wieczorem.", ua: "Я читаю книжку ввечері." },
          { speak: "I listen to music after school.", pl: "Słucham muzyki po szkole.", ua: "Я слухаю музику після школи." },
          { speak: "I watch TV at the weekend.", pl: "Oglądam telewizję w weekend.", ua: "Я дивлюся телевізор на вихідних." }
        ],
        insightEn: "We use Present Simple to talk about habits and regular actions.",
        insightPl: "Używamy Present Simple, żeby mówić o nawykach i regularnych czynnościach.",
        insightUa: "Ми використовуємо Present Simple, щоб говорити про звички та регулярні дії."
      },
      taskSequence: [
        {
          id: "eng1b-mean-1",
          type: "single-choice",
          doneLabel: "PS meaning",
          questionEn: "What do we use Present Simple for?",
          questionPl: "Do czego używamy Present Simple?",
          questionUa: "Для чого ми використовуємо Present Simple?",
          question: "What do we use Present Simple for?",
          options: [
            { id: "a", label: "habits and regular actions." },
            { id: "b", label: "something happening right now." }
          ],
          answer: "a",
          hint: {
            pl: "Present Simple = nawyki i regularne czynności — nie „teraz w tej chwili”.",
            ua: "Present Simple = звички та регулярні дії — не «зараз у цей момент»."
          },
          explanation: {
            pl: "Great! Present Simple is for habits and regular actions.",
            ua: "Great! Present Simple is for habits and regular actions."
          }
        }
      ]
    },

    /* 4 · I / YOU / WE / THEY → BASE VERB */
    {
      type: "concept",
      heading: { pl: "Present Simple · The base verb", ua: "Present Simple · The base verb" },
      enPrompt: "With I, you, we and they, we use the base verb.",
      enPromptPlace: "before",
      promptPl: "Z I, you, we i they używamy podstawowej formy czasownika.",
      promptUa: "З I, you, we і they ми вживаємо базову форму дієслова.",
      visual: vizGh("l03-i-they-base.png", {
        alt: {
          pl: "I / YOU / WE / THEY → BASE VERB (PLAY)",
          ua: "I / YOU / WE / THEY → BASE VERB (PLAY)"
        },
        title: { pl: "I / YOU / WE / THEY → BASE VERB", ua: "I / YOU / WE / THEY → BASE VERB" },
        prompt: {
          pl: "Create a clean educational infographic for 10–11-year-old English learners teaching the Present Simple base verb with I, YOU, WE, THEY. Show four clearly separated subject blocks I, YOU, WE, THEY pointing with arrows toward one central BASE VERB block. Use PLAY as the main example. Include small supporting verb examples READ, LISTEN, WATCH. The visual message must be: I / YOU / WE / THEY → BASE VERB. Friendly semi-flat educational style, clear hierarchy, white/light background, blue and teal accents, highly readable, no Polish, no Ukrainian, no grammar tables, no he/she/it, no -s, no logos, no watermark.",
          ua: "I/YOU/WE/THEY → BASE VERB infographic. PLAY central. No he/she/it. Age 10–11."
        }
      }),
      psTeach: {
        kind: "baseVerb",
        ruleEn: "With I, you, we and they, we use the base verb.",
        rulePl: "Z I, you, we i they używamy podstawowej formy czasownika.",
        ruleUa: "З I, you, we і they ми вживаємо базову форму дієслова.",
        patternLabel: "I / YOU / WE / THEY → BASE VERB",
        subjects: ["I", "YOU", "WE", "THEY"],
        baseVerb: "PLAY",
        examples: [
          { speak: "I play football.", pl: "Gram w piłkę.", ua: "Я граю у футбол." },
          { speak: "You play football.", pl: "Grasz w piłkę.", ua: "Ти граєш у футбол." },
          { speak: "We play football.", pl: "Gramy w piłkę.", ua: "Ми граємо у футбол." },
          { speak: "They play football.", pl: "Grają w piłkę.", ua: "Вони грають у футбол." }
        ],
        moreLabelEn: "More verbs",
        moreLabelPl: "Więcej czasowników",
        moreLabelUa: "Більше дієслів",
        moreExamples: [
          { speak: "I read books.", pl: "Czytam książki.", ua: "Я читаю книжки." },
          { speak: "You listen to music.", pl: "Słuchasz muzyki.", ua: "Ти слухаєш музику." },
          { speak: "We watch TV.", pl: "Oglądamy telewizję.", ua: "Ми дивимося телевізор." },
          { speak: "They play sports.", pl: "Uprawiają sport.", ua: "Вони займаються спортом." }
        ]
      },
      taskSequence: [
        {
          id: "eng1b-base-1",
          type: "single-choice",
          doneLabel: "We + base verb",
          questionEn: "Choose the correct sentence.",
          questionPl: "Wybierz poprawne zdanie.",
          questionUa: "Вибери правильне речення.",
          question: "Choose the correct sentence.",
          options: [
            { id: "a", label: "We play football." },
            { id: "b", label: "We plays football." }
          ],
          answer: "a",
          hint: {
            pl: "We = I / you / we / they → forma podstawowa (bez -s).",
            ua: "We = I / you / we / they → базова форма (без -s)."
          },
          explanation: {
            pl: "We → base verb: play (not plays).",
            ua: "We → base verb: play (not plays)."
          }
        },
        {
          id: "eng1b-base-2",
          type: "single-choice",
          doneLabel: "They + base verb",
          questionEn: "They ___ music.",
          questionPl: "They ___ music.",
          questionUa: "They ___ music.",
          question: "They ___ music.",
          stem: "They ___ music.",
          options: [
            { id: "a", label: "listen" },
            { id: "b", label: "listens" }
          ],
          answer: "a",
          hint: {
            pl: "They → czasownik bez -s.",
            ua: "They → дієслово без -s."
          },
          explanation: {
            pl: "They listen — base verb.",
            ua: "They listen — base verb."
          }
        }
      ]
    },

    /* 5 · HE / SHE / IT → VERB + S */
    {
      type: "concept",
      heading: { pl: "Present Simple · He, She, It", ua: "Present Simple · He, She, It" },
      enPrompt: "With HE, SHE and IT, the verb usually gets -S.",
      enPromptPlace: "before",
      promptPl: "Z he, she i it czasownik zwykle otrzymuje końcówkę -s.",
      promptUa: "З he, she і it дієслово зазвичай отримує закінчення -s.",
      visual: vizGh("l03-he-she-s.png", {
        alt: {
          pl: "Kontrast: I PLAY → HE PLAYS; I READ → SHE READS; WE WATCH → IT WATCHES",
          ua: "Контраст: I PLAY → HE PLAYS; I READ → SHE READS; WE WATCH → IT WATCHES"
        },
        title: { pl: "HE / SHE / IT → VERB + S", ua: "HE / SHE / IT → VERB + S" },
        prompt: {
          pl: "Create a clear educational infographic for 10–11-year-old English learners showing the Present Simple contrast between I/You/We/They and He/She/It. Use three large visual comparison rows: I PLAY → HE PLAYS; I READ → SHE READS; WE WATCH → IT WATCHES. Highlight the change at the end of the verb visually, especially the added S/ES. Central message: HE / SHE / IT → VERB + S. Friendly semi-flat school illustration style, clean layout, high readability, no Polish, no Ukrainian, no long grammar table, no logos, no watermark.",
          ua: "Contrast I PLAY → HE PLAYS etc. HE/SHE/IT → VERB + S. Age 10–11."
        }
      }),
      psTeach: {
        kind: "heSheIt",
        recallEn: "You already know:",
        recallPl: "Już wiesz:",
        recallUa: "Ти вже знаєш:",
        recallSpeak: "I play football.",
        recallPlLine: "Gram w piłkę.",
        recallUaLine: "Я граю у футбол.",
        ruleEn: "With HE, SHE and IT, the verb usually gets -S.",
        rulePl: "Z he, she i it czasownik zwykle otrzymuje końcówkę -s.",
        ruleUa: "З he, she і it дієслово зазвичай отримує закінчення -s.",
        patternLabel: "HE / SHE / IT → VERB + S",
        contrasts: [
          {
            left: "I play football.",
            leftPl: "Gram w piłkę.",
            leftUa: "Я граю у футбол.",
            right: "He plays football.",
            rightPl: "On gra w piłkę.",
            rightUa: "Він грає у футбол."
          },
          {
            left: "I read books.",
            leftPl: "Czytam książki.",
            leftUa: "Я читаю книжки.",
            right: "She reads books.",
            rightPl: "Ona czyta książki.",
            rightUa: "Вона читає книжки."
          },
          {
            left: "They watch TV.",
            leftPl: "Oni oglądają telewizję.",
            leftUa: "Вони дивляться телевізор.",
            right: "It watches TV.",
            rightPl: "Ono ogląda telewizję.",
            rightUa: "Воно дивиться телевізор."
          }
        ]
      },
      taskSequence: [
        {
          id: "eng1b-heshe-1",
          type: "single-choice",
          doneLabel: "He + plays",
          questionEn: "He ___ football.",
          questionPl: "He ___ football.",
          questionUa: "He ___ football.",
          question: "He ___ football.",
          stem: "He ___ football.",
          options: [
            { id: "a", label: "play" },
            { id: "b", label: "plays" }
          ],
          answer: "b",
          hint: {
            pl: "He → końcówka -s.",
            ua: "He → закінчення -s."
          },
          explanation: {
            pl: "He plays — HE / SHE / IT → verb + s.",
            ua: "He plays — HE / SHE / IT → verb + s."
          }
        },
        {
          id: "eng1b-heshe-2",
          type: "single-choice",
          doneLabel: "She + reads",
          questionEn: "She ___ books.",
          questionPl: "She ___ books.",
          questionUa: "She ___ books.",
          question: "She ___ books.",
          stem: "She ___ books.",
          options: [
            { id: "a", label: "read" },
            { id: "b", label: "reads" }
          ],
          answer: "b",
          hint: {
            pl: "She → końcówka -s.",
            ua: "She → закінчення -s."
          },
          explanation: {
            pl: "She reads — HE / SHE / IT → verb + s.",
            ua: "She reads — HE / SHE / IT → verb + s."
          }
        }
      ]
    },

    /* 6 · WHY THE VERB GETS -S */
    {
      type: "concept",
      heading: { pl: "Why does the verb change?", ua: "Why does the verb change?" },
      enPrompt: "Look at the subject. HE / SHE / IT → add an ending to the verb.",
      enPromptPlace: "before",
      promptPl: "Spójrz na podmiot. HE / SHE / IT → dodajemy końcówkę do czasownika.",
      promptUa: "Подивись на підмет. HE / SHE / IT → додаємо закінчення до дієслова.",
      visual: vizGh("l03-why-s-transform.png", {
        alt: {
          pl: "Transformacje: I PLAY → HE PLAY + S → HE PLAYS",
          ua: "Трансформації: I PLAY → HE PLAY + S → HE PLAYS"
        },
        title: { pl: "Add an ending", ua: "Add an ending" },
        prompt: {
          pl: "Create a step-by-step educational infographic for 10–11-year-old English learners showing how a Present Simple verb changes with HE, SHE and IT. Show three horizontal transformations: I PLAY → HE PLAY + S → HE PLAYS; I READ → SHE READ + S → SHE READS; I WATCH → IT WATCH + ES → IT WATCHES. Use arrows and a clear visual emphasis on the added ending. The learner should immediately understand that HE/SHE/IT causes an ending to be added to the verb in affirmative Present Simple sentences. Friendly semi-flat educational style, clean white/light background, blue/teal/orange accents, English labels only, no Polish, no Ukrainian, no negative forms, no questions, no logos, no watermark.",
          ua: "I PLAY → HE PLAY + S → HE PLAYS transformations. Affirmative only. Age 10–11."
        }
      }),
      psTeach: {
        kind: "whyS",
        ruleEn: "Look at the subject. HE / SHE / IT → add an ending to the verb.",
        rulePl: "Spójrz na podmiot. HE / SHE / IT → dodajemy końcówkę do czasownika.",
        ruleUa: "Подивись на підмет. HE / SHE / IT → додаємо закінчення до дієслова.",
        steps: [
          {
            from: "I PLAY",
            mid: "HE PLAY + S",
            to: "HE PLAYS",
            speak: "He plays.",
            pl: "On gra.",
            ua: "Він грає."
          },
          {
            from: "I READ",
            mid: "SHE READ + S",
            to: "SHE READS",
            speak: "She reads.",
            pl: "Ona czyta.",
            ua: "Вона читає."
          },
          {
            from: "I WATCH",
            mid: "IT WATCH + ES",
            to: "IT WATCHES",
            speak: "It watches.",
            pl: "Ono ogląda.",
            ua: "Воно дивиться."
          }
        ],
        insightEn: "In a positive sentence, the ending goes on the verb.",
        insightPl: "W zdaniu twierdzącym końcówka jest przy czasowniku.",
        insightUa: "У стверджувальному реченні закінчення стоїть при дієслові."
      },
      taskSequence: [
        {
          id: "eng1b-why-1",
          type: "single-choice",
          doneLabel: "He plays",
          questionEn: "He ___ football.",
          questionPl: "He ___ football.",
          questionUa: "He ___ football.",
          question: "He ___ football.",
          stem: "He ___ football.",
          options: [
            { id: "a", label: "play" },
            { id: "b", label: "plays" }
          ],
          answer: "b",
          hint: {
            pl: "He → dodaj końcówkę do czasownika.",
            ua: "He → додай закінчення до дієслова."
          },
          explanation: {
            pl: "He → plays. The ending is on the verb.",
            ua: "He → plays. The ending is on the verb."
          }
        },
        {
          id: "eng1b-why-2",
          type: "single-choice",
          doneLabel: "She reads",
          questionEn: "She ___ books.",
          questionPl: "She ___ books.",
          questionUa: "She ___ books.",
          question: "She ___ books.",
          stem: "She ___ books.",
          options: [
            { id: "a", label: "read" },
            { id: "b", label: "reads" }
          ],
          answer: "b",
          hint: {
            pl: "She → dodaj końcówkę.",
            ua: "She → додай закінчення."
          },
          explanation: {
            pl: "She → reads.",
            ua: "She → reads."
          }
        },
        {
          id: "eng1b-why-3",
          type: "single-choice",
          doneLabel: "It watches",
          questionEn: "It ___ TV.",
          questionPl: "It ___ TV.",
          questionUa: "It ___ TV.",
          question: "It ___ TV.",
          stem: "It ___ TV.",
          options: [
            { id: "a", label: "watch" },
            { id: "b", label: "watches" }
          ],
          answer: "b",
          hint: {
            pl: "It → dodaj końcówkę (tu: -es).",
            ua: "It → додай закінчення (тут: -es)."
          },
          explanation: {
            pl: "It → watches. We add an ending to the verb.",
            ua: "It → watches. We add an ending to the verb."
          }
        }
      ]
    },

    /* 7 · SPELLING -S / -ES / -IES */
    {
      type: "concept",
      heading: { pl: "How do we add the ending?", ua: "How do we add the ending?" },
      enPrompt: "Now look at how we write the ending. Three clear patterns.",
      enPromptPlace: "before",
      promptPl: "Teraz zobacz, jak zapisujemy końcówkę. Trzy jasne wzory.",
      promptUa: "Тепер подивись, як пишемо закінчення. Три зрозумілі схеми.",
      visual: vizGh("l03-spelling-cards.png", {
        alt: {
          pl: "Karty: +S · +ES · Y→IES · BUT enjoy → enjoys",
          ua: "Картки: +S · +ES · Y→IES · BUT enjoy → enjoys"
        },
        title: { pl: "Spelling cards", ua: "Spelling cards" },
        prompt: {
          pl: "Create a polished educational infographic for 10–11-year-old English learners explaining Present Simple third-person singular spelling. Create three clearly separated cards: 1) MOST VERBS → +S with PLAY → PLAYS, READ → READS, LIKE → LIKES; 2) verbs ending in S, SH, CH, X, O → +ES with WATCH → WATCHES, WASH → WASHES, GO → GOES; 3) consonant + Y → IES with STUDY → STUDIES, CRY → CRIES. Add a small clearly marked BUT section: vowel + Y → +S with PLAY → PLAYS and ENJOY → ENJOYS. English labels only, no Polish, no Ukrainian, no long sentences, no logos, no watermark. Friendly semi-flat educational classroom style, highly readable.",
          ua: "Three spelling cards +S / +ES / Y→IES + BUT enjoy→enjoys. Age 10–11."
        }
      }),
      psTeach: {
        kind: "spelling",
        cards: [
          {
            title: "A · +S",
            subtitleEn: "Most verbs → +S",
            subtitlePl: "Większość czasowników → +S",
            subtitleUa: "Більшість дієслів → +S",
            pairs: [
              { from: "play", to: "plays" },
              { from: "read", to: "reads" },
              { from: "like", to: "likes" }
            ]
          },
          {
            title: "B · +ES",
            subtitleEn: "Verbs ending in -s / -sh / -ch / -x / -o → +ES",
            subtitlePl: "Czasowniki na -s / -sh / -ch / -x / -o → +ES",
            subtitleUa: "Дієслова на -s / -sh / -ch / -x / -o → +ES",
            pairs: [
              { from: "watch", to: "watches" },
              { from: "wash", to: "washes" },
              { from: "go", to: "goes" }
            ]
          },
          {
            title: "C · consonant + Y → IES",
            subtitleEn: "study → studies · cry → cries",
            subtitlePl: "study → studies · cry → cries",
            subtitleUa: "study → studies · cry → cries",
            pairs: [
              { from: "study", to: "studies" },
              { from: "cry", to: "cries" }
            ]
          }
        ],
        but: {
          title: "BUT",
          subtitleEn: "vowel + Y → +S",
          subtitlePl: "samogłoska + Y → +S",
          subtitleUa: "голосна + Y → +S",
          pairs: [
            { from: "play", to: "plays" },
            { from: "enjoy", to: "enjoys" }
          ]
        }
      },
      taskSequence: [
        {
          id: "eng1b-spell-1",
          type: "single-choice",
          doneLabel: "+ES · watches",
          questionEn: "He ___ TV.",
          questionPl: "He ___ TV.",
          questionUa: "He ___ TV.",
          question: "He ___ TV.",
          stem: "He ___ TV.",
          options: [
            { id: "a", label: "watch" },
            { id: "b", label: "watches" }
          ],
          answer: "b",
          hint: {
            pl: "watch kończy się na -ch → +ES.",
            ua: "watch закінчується на -ch → +ES."
          },
          explanation: {
            pl: "watch → watches (+ES).",
            ua: "watch → watches (+ES)."
          }
        },
        {
          id: "eng1b-spell-2",
          type: "single-choice",
          doneLabel: "Y → IES · studies",
          questionEn: "She ___ English.",
          questionPl: "She ___ English.",
          questionUa: "She ___ English.",
          question: "She ___ English.",
          stem: "She ___ English.",
          options: [
            { id: "a", label: "study" },
            { id: "b", label: "studies" }
          ],
          answer: "b",
          hint: {
            pl: "study = spółgłoska + y → ies.",
            ua: "study = приголосна + y → ies."
          },
          explanation: {
            pl: "study → studies.",
            ua: "study → studies."
          }
        },
        {
          id: "eng1b-spell-3",
          type: "single-choice",
          doneLabel: "+S · plays",
          questionEn: "He ___ football.",
          questionPl: "He ___ football.",
          questionUa: "He ___ football.",
          question: "He ___ football.",
          stem: "He ___ football.",
          options: [
            { id: "a", label: "play" },
            { id: "b", label: "plays" }
          ],
          answer: "b",
          hint: {
            pl: "Większość czasowników → +S.",
            ua: "Більшість дієслів → +S."
          },
          explanation: {
            pl: "play → plays (+S).",
            ua: "play → plays (+S)."
          }
        },
        {
          id: "eng1b-spell-4",
          type: "single-choice",
          doneLabel: "BUT · enjoys",
          questionEn: "She ___ music.",
          questionPl: "She ___ music.",
          questionUa: "She ___ music.",
          question: "She ___ music.",
          stem: "She ___ music.",
          options: [
            { id: "a", label: "enjoy" },
            { id: "b", label: "enjoys" }
          ],
          answer: "b",
          hint: {
            pl: "enjoy = samogłoska + y → tylko +S (nie ies).",
            ua: "enjoy = голосна + y → тільки +S (не ies)."
          },
          explanation: {
            pl: "enjoy → enjoys (BUT: vowel + y → +S).",
            ua: "enjoy → enjoys (BUT: vowel + y → +S)."
          }
        }
      ]
    },

    /* 8 · ADVERBS OF FREQUENCY — meaning */
    {
      type: "concept",
      heading: { pl: "How often?", ua: "How often?" },
      enPrompt: "How often do you do something? These words tell us.",
      enPromptPlace: "before",
      promptPl: "Jak często coś robisz? Te słowa nam mówią.",
      promptUa: "Як часто ти щось робиш? Ці слова нам кажуть.",
      visual: vizGh("l03-frequency-meter.png", {
        alt: {
          pl: "Skala: always 100% → never 0%",
          ua: "Шкала: always 100% → never 0%"
        },
        title: { pl: "Frequency meter", ua: "Frequency meter" },
        prompt: {
          pl: "Create a clean educational frequency meter for 10–11-year-old English learners. Show a horizontal scale from 100% to 0% with the words ALWAYS, USUALLY, OFTEN, SOMETIMES, HARDLY EVER, NEVER in descending frequency. Use simple visual repetition cues such as multiple stars/check marks for always and zero marks for never. The main idea is HOW OFTEN an action happens. Friendly semi-flat educational style, clear typography, English labels only, no Polish, no Ukrainian, no grammar table, no logos, no watermark.",
          ua: "Frequency meter ALWAYS→NEVER 100%→0%. Age 10–11. Meaning only."
        }
      }),
      psTeach: {
        kind: "frequency",
        introEn: "First learn the meaning. Word position comes next.",
        introPl: "Najpierw znaczenie. Miejsce w zdaniu — na następnym ekranie.",
        introUa: "Спочатку значення. Місце в реченні — на наступному екрані.",
        scale: [
          { word: "always", pct: "100%", meaningEn: "every time", meaningPl: "zawsze", meaningUa: "завжди" },
          { word: "usually", pct: "~80%", meaningEn: "most times", meaningPl: "zwykle", meaningUa: "зазвичай" },
          { word: "often", pct: "~50%", meaningEn: "many times", meaningPl: "często", meaningUa: "часто" },
          { word: "sometimes", pct: "~25%", meaningEn: "some times", meaningPl: "czasami", meaningUa: "іноді" },
          { word: "hardly ever", pct: "~10%", meaningEn: "almost never", meaningPl: "prawie nigdy", meaningUa: "майже ніколи" },
          { word: "never", pct: "0%", meaningEn: "not at all", meaningPl: "nigdy", meaningUa: "ніколи" }
        ],
        examples: [
          { speak: "I always get up early.", pl: "Zawsze wstaję wcześnie.", ua: "Я завжди встаю рано." },
          { speak: "I usually play football after school.", pl: "Zwykle gram w piłkę po szkole.", ua: "Я зазвичай граю у футбол після школи." },
          { speak: "I often listen to music.", pl: "Często słucham muzyki.", ua: "Я часто слухаю музику." },
          { speak: "I sometimes read a book.", pl: "Czasami czytam książkę.", ua: "Я іноді читаю книжку." },
          { speak: "I hardly ever go shopping.", pl: "Prawie nigdy nie chodzę na zakupy.", ua: "Я майже ніколи не ходжу за покупками." },
          { speak: "I never go to bed late.", pl: "Nigdy nie kładę się spać późno.", ua: "Я ніколи не лягаю спати пізно." }
        ]
      },
      taskSequence: [
        {
          id: "eng1b-freq-1",
          type: "single-choice",
          doneLabel: "always",
          questionEn: "What does always mean?",
          questionPl: "Co znaczy always?",
          questionUa: "Що означає always?",
          question: "What does always mean?",
          options: [
            { id: "a", label: "every time" },
            { id: "b", label: "never" },
            { id: "c", label: "sometimes" }
          ],
          answer: "a",
          hint: { pl: "always ≈ 100%.", ua: "always ≈ 100%." },
          explanation: { pl: "always = every time.", ua: "always = every time." }
        },
        {
          id: "eng1b-freq-2",
          type: "single-choice",
          doneLabel: "hardly ever",
          questionEn: "What does hardly ever mean?",
          questionPl: "Co znaczy hardly ever?",
          questionUa: "Що означає hardly ever?",
          question: "What does hardly ever mean?",
          options: [
            { id: "a", label: "every time" },
            { id: "b", label: "almost never" },
            { id: "c", label: "often" }
          ],
          answer: "b",
          hint: { pl: "hardly ever ≈ 10% — prawie nigdy.", ua: "hardly ever ≈ 10% — майже ніколи." },
          explanation: { pl: "hardly ever = almost never.", ua: "hardly ever = almost never." }
        },
        {
          id: "eng1b-freq-3",
          type: "single-choice",
          doneLabel: "usually",
          questionEn: "Which word means most times?",
          questionPl: "Które słowo znaczy „w większości przypadków”?",
          questionUa: "Яке слово означає «у більшості випадків»?",
          question: "Which word means most times?",
          options: [
            { id: "a", label: "never" },
            { id: "b", label: "usually" },
            { id: "c", label: "hardly ever" }
          ],
          answer: "b",
          hint: { pl: "usually ≈ 80%.", ua: "usually ≈ 80%." },
          explanation: { pl: "usually = most times.", ua: "usually = most times." }
        }
      ]
    },

    /* 9 · FREQUENCY WORD POSITION */
    {
      type: "concept",
      heading: { pl: "Where does the frequency word go?", ua: "Where does the frequency word go?" },
      enPrompt: "SUBJECT + FREQUENCY WORD + VERB",
      enPromptPlace: "before",
      promptPl: "PODMIOT + PRZYSŁÓWEK CZĘSTOTLIWOŚCI + CZASOWNIK",
      promptUa: "ПІДМЕТ + ПРИСЛІВНИК ЧАСТОТИ + ДІЄСЛОВО",
      visual: vizGh("l03-word-order.png", {
        alt: {
          pl: "I → usually → play · SUBJECT + FREQUENCY + VERB",
          ua: "I → usually → play · SUBJECT + FREQUENCY + VERB"
        },
        title: { pl: "Word order", ua: "Word order" },
        prompt: {
          pl: "Create a simple educational word-order infographic for 10–11-year-old English learners. Show the Present Simple pattern SUBJECT + FREQUENCY WORD + VERB. Use large connected blocks: I → usually → play, with labels SUBJECT → FREQUENCY → VERB. Add three smaller examples: I often listen to music; I sometimes read books; I never watch TV late. Clearly show that the frequency word normally comes before the main verb. Friendly semi-flat educational style, clean layout, English labels only, no Polish, no Ukrainian, no BE grammar table, no logos, no watermark.",
          ua: "SUBJECT + FREQUENCY + VERB blocks. Age 10–11. No BE table."
        }
      }),
      psTeach: {
        kind: "wordOrder",
        formulaEn: "SUBJECT + FREQUENCY WORD + VERB",
        formulaPl: "PODMIOT + PRZYSŁÓWEK CZĘSTOTLIWOŚCI + CZASOWNIK",
        formulaUa: "ПІДМЕТ + ПРИСЛІВНИК ЧАСТОТИ + ДІЄСЛОВО",
        demo: ["I", "usually", "play"],
        demoLabels: ["SUBJECT", "FREQUENCY", "VERB"],
        examples: [
          { speak: "I usually play football.", pl: "Zwykle gram w piłkę.", ua: "Я зазвичай граю у футбол." },
          { speak: "I often listen to music.", pl: "Często słucham muzyki.", ua: "Я часто слухаю музику." },
          { speak: "I sometimes read books.", pl: "Czasami czytam książki.", ua: "Я іноді читаю книжки." },
          { speak: "I never watch TV late.", pl: "Nigdy nie oglądam TV późno.", ua: "Я ніколи не дивлюся ТВ пізно." }
        ],
        laterNoteEn: "With BE, word order can be different. We will meet this later.",
        laterNotePl: "Z czasownikiem BE kolejność może być inna. Spotkamy to później.",
        laterNoteUa: "З дієсловом BE порядок може бути іншим. Зустрінемо це пізніше."
      },
      taskSequence: [
        {
          id: "eng1b-order-1",
          type: "single-choice",
          doneLabel: "usually before verb",
          questionEn: "Choose the correct sentence.",
          questionPl: "Wybierz poprawne zdanie.",
          questionUa: "Вибери правильне речення.",
          question: "Choose the correct sentence.",
          options: [
            { id: "a", label: "I usually play football." },
            { id: "b", label: "I play usually football." }
          ],
          answer: "a",
          hint: {
            pl: "Frequency word → przed czasownikiem.",
            ua: "Прислівник частоти → перед дієсловом."
          },
          explanation: {
            pl: "I usually play — SUBJECT + FREQUENCY + VERB.",
            ua: "I usually play — SUBJECT + FREQUENCY + VERB."
          }
        },
        {
          id: "eng1b-order-2",
          type: "single-choice",
          doneLabel: "Word order",
          questionEn: "Put the words in the correct order: usually / I / read / books",
          questionPl: "Ułóż słowa w poprawnej kolejności: usually / I / read / books",
          questionUa: "Розстав слова у правильному порядку: usually / I / read / books",
          question: "Put the words in the correct order: usually / I / read / books",
          options: [
            { id: "a", label: "I usually read books." },
            { id: "b", label: "I read usually books." }
          ],
          answer: "a",
          hint: {
            pl: "SUBJECT + FREQUENCY + VERB.",
            ua: "ПІДМЕТ + ЧАСТОТА + ДІЄСЛОВО."
          },
          explanation: {
            pl: "I usually read books.",
            ua: "I usually read books."
          }
        }
      ]
    }
  ]
};
