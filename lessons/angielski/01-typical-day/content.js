function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost_5_Klasa/blob/main/blob/main/Angielski/L01_Typical_day/images/";

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
        { pl: "MUST KNOW · Nazwiesz 15 czynności dnia z Flash (rano → wieczór).", ua: "MUST KNOW · Назвеш 15 дій дня з Flash (ранок → вечір)." },
        { pl: "MUST KNOW · Powtórzysz na głos poranne czynności po nagraniu Flash (s. 4).", ua: "MUST KNOW · Повториш уголос ранкові дії після запису Flash (с. 4)." },
        { pl: "MUST KNOW · Powiesz godzinę na dwa sposoby i użyjesz at + time.", ua: "MUST KNOW · Скажеш годину двома способами і вживеш at + time." },
        { pl: "MUST KNOW · Ułożysz: I get up at… Then I… After that I…", ua: "MUST KNOW · Складеш: I get up at… Then I… After that I…" },
        { pl: "MUST KNOW · Porównasz krótko z Anną (wzór z Flash) — bez reguły -s.", ua: "MUST KNOW · Коротко порівняєш з Анною (зразок з Flash) — без правила -s." }
      ]
    },

    /* 2 · FLASH INTRO — wejście w temat (bez otwierania podręcznika) */
    {
      type: "intro",
      heading: { pl: "What's your typical day?", ua: "What's your typical day?" },
      speak: "What's your typical day?",
      visual: vizGh("l01-typical-day.png", {
        place: "after",
        alt: { pl: "Typowy dzień dziecka: rano → szkoła → popołudnie → wieczór", ua: "Типовий день дитини: ранок → школа → день → вечір" },
        title: { pl: "A typical day", ua: "A typical day" },
        prompt: { pl: "Create a clean educational illustration for an English lesson about a 10–11-year-old student's typical day. Show one school-aged child through a sequence of everyday routine moments from morning to evening: getting up, getting dressed, having breakfast, going to school, having lessons, spending time with friends, doing homework, having dinner, and going to sleep. Organize the scenes naturally from left/top to right/bottom so the progression of the day is immediately understandable. Modern semi-flat educational illustration, friendly and age-appropriate for a 10–11-year-old child, clear silhouettes, soft rounded shapes, warm natural atmosphere, moderate detail, visually clean composition. No written text, no labels, no numbers, no logos, no watermark, no textbook reproduction.", ua: "Create a clean educational illustration for an English lesson about a 10–11-year-old student's typical day. Show one school-aged child through a sequence of everyday routine moments from morning to evening. Modern semi-flat educational illustration. No text, no labels, no logos, no watermark." }
      }),
      text: {
        pl: [
          "Jak wygląda Twój typowy dzień?",
          "Posłuchaj pytania. Powtórz je na głos.",
          "typical day = zwykły / typowy dzień",
          "Today we will talk about your day from morning to evening."
        ],
        ua: [
          "Який у тебе типовий день?",
          "Послухай запитання. Повтори його вголос.",
          "typical day = звичайний / типовий день",
          "Сьогодні ми поговоримо про твій день — від ранку до вечора."
        ]
      }
    },

    /* 3 · CORE · My daily routine — FIRST EXPOSURE: wszystkie 15 Flash MUST KNOW */
    {
      type: "concept",
      heading: { pl: "Core · My daily routine · MUST KNOW", ua: "Core · My daily routine · MUST KNOW" },
      promptPlace: "before",
      prompt: {
        pl: [
          "Poznaj 15 wyrażeń z dzisiejszej lekcji.",
          "Posłuchaj 🔊 i powtórz każde wyrażenie na głos."
        ],
        ua: [
          "Познайомся з 15 виразами з сьогоднішнього уроку.",
          "Послухай 🔊 і повтори кожен вираз уголос."
        ]
      },
      speakBoard: {
        
        zones: [
          {
            title: "Morning",
            image: ENG_IMG + "l01-morning.png?raw=true",
            alt: "Morning routine",
            items: [
              { speak: "get up" },
              { speak: "get dressed" },
              { speak: "have breakfast" },
              { speak: "catch the bus" },
              { speak: "have lessons" }
            ]
          },
          {
            title: "Afternoon",
            image: ENG_IMG + "l01-afternoon.png?raw=true",
            alt: "Afternoon → evening routine",
            items: [
              { speak: "have lunch" },
              { speak: "hang out with friends" },
              { speak: "come back home" },
              { speak: "have a snack" },
              { speak: "do homework" }
            ]
          },
          {
            title: "Evening",
            image: ENG_IMG + "l01-evening1.png?raw=true",
            alt: "Afternoon → evening routine",
            items: [
              { speak: "have swimming practice" },
              { speak: "have a shower" },
              { speak: "have dinner" },
              { speak: "chat with friends" },
              { speak: "go to sleep" }
            ]
          }
        ]
      },
      speakItems: [
        { speak: "get up", pl: "wstawać", ua: "вставати" },
        { speak: "get dressed", pl: "ubierać się", ua: "одягатися" },
        { speak: "have breakfast", pl: "jeść śniadanie", ua: "снідати" },
        { speak: "catch the bus", pl: "łapać autobus", ua: "сідати на автобус" },
        { speak: "have lessons", pl: "mieć lekcje", ua: "мати уроки" },
        { speak: "have lunch", pl: "jeść obiad", ua: "обідати" },
        { speak: "hang out with friends", pl: "spędzać czas z przyjaciółmi", ua: "проводити час з друзями" },
        { speak: "come back home", pl: "wracać do domu", ua: "повертатися додому" },
        { speak: "have a snack", pl: "jeść przekąskę", ua: "перекусити" },
        { speak: "do homework", pl: "odrabiać lekcje", ua: "робити домашнє завдання" },
        { speak: "have swimming practice", pl: "mieć trening pływania", ua: "мати тренування з плавання" },
        { speak: "have a shower", pl: "brać prysznic", ua: "приймати душ" },
        { speak: "have dinner", pl: "jeść kolację", ua: "вечеряти" },
        { speak: "chat with friends", pl: "rozmawiać / pisać z przyjaciółmi", ua: "спілкуватися з друзями" },
        { speak: "go to sleep", pl: "iść spać", ua: "лягати спати" }
      ],
      text: {
        pl: [
          "Twoja kolej!",
          "Posłuchaj → powtórz → powiedz jeszcze raz bez patrzenia."
        ],
        ua: [
          "Твоя черга!",
          "Послухай → повтори → скажи ще раз, не дивлячись."
        ]
      }
    },

    /* 4 · BEFORE LISTENING — predict → then listen */
    {
      type: "concept",
      heading: { pl: "Before listening", ua: "Before listening" },
      visual: vizGh("l01-morning-predict.png", {
        alt: {
          pl: "Pięć scen poranka bez kolejności: get up, get dressed, breakfast, bus, lessons",
          ua: "П’ять сцен ранку без порядку: get up, get dressed, breakfast, bus, lessons"
        },
        title: { pl: "Morning routine · predict", ua: "Morning routine · predict" },
        prompt: {
          pl: "Create a clean educational infographic for an English lesson about a 10–11-year-old student's morning routine. Show five separate visual scenes: getting up in bed, getting dressed, having breakfast, catching a school bus, and having lessons at school. The five scenes must be visually distinct but must NOT indicate any sequence or order. Arrange them in a balanced infographic composition without arrows, numbers, labels or directional cues. Use a modern semi-flat educational illustration style, friendly and age-appropriate for 10–11-year-old learners, natural proportions, clear actions, soft rounded shapes, bright but restrained colors, simple clean backgrounds and consistent character design. No written text, no labels, no numbers, no arrows, no logos, no watermark.",
          ua: "Create a clean educational infographic for an English lesson about a 10–11-year-old student's morning routine. Five separate scenes without order cues. Semi-flat educational style. No text, no labels, no numbers, no arrows, no logos, no watermark."
        }
      }),
      /* EN always; PL/UA via lang toggle — injected by pronounce.js (no English duplicate). */
      enPrompt: "Look at the pictures. What do you do first in the morning?",
      promptPl: "Spójrz na obrazki. Co robisz najpierw rano?",
      promptUa: "Подивись на малюнки. Що ти робиш спочатку вранці?",
      taskSequence: [
        {
          id: "eng01-before-1",
          type: "single-choice",
          doneLabel: "Q1 · I get up.",
          questionEn: "What do you do first in the morning?",
          questionPl: "Co robisz najpierw rano?",
          questionUa: "Що ти робиш спочатку вранці?",
          question: "What do you do first in the morning?",
          options: [
            { id: "a", label: "I catch the bus." },
            { id: "b", label: "I get up." },
            { id: "c", label: "I have lessons." }
          ],
          answer: "b",
          hint: {
            pl: "Najpierw wstajesz z łóżka.",
            ua: "Спочатку встаєш з ліжка."
          },
          explanation: {
            pl: "I get up first.",
            ua: "I get up first."
          }
        },
        {
          id: "eng01-before-2",
          type: "single-choice",
          doneLabel: "Q2 · I get dressed.",
          questionEn: "What do you do after you get up?",
          questionPl: "Co robisz po wstaniu?",
          questionUa: "Що ти робиш після того, як встаєш?",
          question: "What do you do after you get up?",
          options: [
            { id: "a", label: "I get dressed." },
            { id: "b", label: "I catch the bus." },
            { id: "c", label: "I have lessons." }
          ],
          answer: "a",
          hint: {
            pl: "Po wstaniu zwykle ubierasz się.",
            ua: "Після того як встав, зазвичай одягаєшся."
          },
          explanation: {
            pl: "I get dressed after I get up.",
            ua: "I get dressed after I get up."
          }
        },
        {
          id: "eng01-before-3",
          type: "single-choice",
          doneLabel: "Q3 · I have breakfast.",
          questionEn: "What do you do after you get dressed?",
          questionPl: "Co robisz po tym, jak się ubierzesz?",
          questionUa: "Що ти робиш після того, як одягнешся?",
          question: "What do you do after you get dressed?",
          options: [
            { id: "a", label: "I have breakfast." },
            { id: "b", label: "I catch the bus." },
            { id: "c", label: "I have lessons." }
          ],
          answer: "a",
          hint: {
            pl: "Po ubraniu się zwykle jesz śniadanie.",
            ua: "Після того як одягнешся, зазвичай снідаєш."
          },
          explanation: {
            pl: "I have breakfast after I get dressed.",
            ua: "I have breakfast after I get dressed."
          }
        },
        {
          id: "eng01-before-4",
          type: "single-choice",
          doneLabel: "Q4 · I catch the bus.",
          questionEn: "What do you do before you have lessons?",
          questionPl: "Co robisz przed lekcjami?",
          questionUa: "Що ти робиш перед уроками?",
          question: "What do you do before you have lessons?",
          options: [
            { id: "a", label: "I have breakfast." },
            { id: "b", label: "I catch the bus." },
            { id: "c", label: "I get up." }
          ],
          answer: "b",
          hint: {
            pl: "Do szkoły jedziesz autobusem — zanim zaczną się lekcje.",
            ua: "До школи їдеш автобусом — перед тим як почнуться уроки."
          },
          explanation: {
            pl: "I catch the bus before I have lessons.",
            ua: "I catch the bus before I have lessons."
          }
        }
      ]
    },

    /* 5 · AFTER LISTENING — Flash audio + comprehension (was 6; old Listen&repeat removed) */
    {
      type: "concept",
      heading: { pl: "After listening", ua: "After listening" },
      enPrompt: "Listen to the Flash recording. Then check the morning routine.",
      promptPl: "Posłuchaj nagrania Flash. Potem sprawdź poranną rutynę.",
      promptUa: "Послухай запис Flash. Потім перевір ранкову рутину.",
      flashAudio: "./audio/02_Flash_kl5_M1_ex1_p4.mp3",
      flashAudioLabel: "Flash · Ex. 1, s. 4 · Listen and repeat",
      sequenceMode: "after-listening",
      taskSequence: [
        {
          id: "eng01-after-1",
          type: "single-choice",
          doneLabel: "Q1 · have breakfast",
          questionEn: "What comes after “get dressed”?",
          questionPl: "Co jest po „get dressed”?",
          questionUa: "Що йде після “get dressed”?",
          question: "What comes after “get dressed”?",
          options: [
            { id: "a", label: "catch the bus" },
            { id: "b", label: "have breakfast" },
            { id: "c", label: "have lessons" }
          ],
          answer: "b",
          hint: {
            pl: "Po get dressed: śniadanie.",
            ua: "Після get dressed: сніданок."
          },
          explanation: {
            pl: "After get dressed → have breakfast.",
            ua: "After get dressed → have breakfast."
          }
        },
        {
          id: "eng01-after-2",
          type: "single-choice",
          doneLabel: "Q2 · catch the bus",
          questionEn: "What comes before “have lessons”?",
          questionPl: "Co jest przed „have lessons”?",
          questionUa: "Що відбувається перед “have lessons”?",
          question: "What comes before “have lessons”?",
          options: [
            { id: "a", label: "have breakfast" },
            { id: "b", label: "catch the bus" },
            { id: "c", label: "get up" }
          ],
          answer: "b",
          hint: {
            pl: "Do szkoły jedziesz autobusem — zaraz przed lekcjami.",
            ua: "До школи їдеш автобусом — якраз перед уроками."
          },
          explanation: {
            pl: "Before have lessons → catch the bus.",
            ua: "Before have lessons → catch the bus."
          }
        },
        {
          id: "eng01-after-3",
          type: "single-choice",
          doneLabel: "Q3 · get up",
          questionEn: "What does the boy do first?",
          questionPl: "Co chłopiec robi najpierw?",
          questionUa: "Що хлопчик робить спочатку?",
          question: "What does the boy do first?",
          options: [
            { id: "a", label: "have breakfast" },
            { id: "b", label: "get up" },
            { id: "c", label: "catch the bus" }
          ],
          answer: "b",
          hint: {
            pl: "Poranek zaczyna się od wstania z łóżka.",
            ua: "Ранок починається зі вставання з ліжка."
          },
          explanation: {
            pl: "First he gets up.",
            ua: "First he gets up."
          }
        },
        {
          id: "eng01-after-4",
          type: "order-build",
          doneLabel: "Q4 · morning order",
          questionEn: "Put the morning routine in the correct order.",
          questionPl: "Ułóż poranną rutynę we właściwej kolejności.",
          questionUa: "Розташуй ранкові дії у правильному порядку.",
          question: "Put the morning routine in the correct order.",
          items: [
            "get up",
            "get dressed",
            "have breakfast",
            "catch the bus",
            "have lessons"
          ],
          answer: [
            "get up",
            "get dressed",
            "have breakfast",
            "catch the bus",
            "have lessons"
          ],
          hint: {
            pl: "Zaczyna się od get up, kończy na have lessons.",
            ua: "Починається з get up, закінчується have lessons."
          },
          explanation: {
            pl: "get up → get dressed → have breakfast → catch the bus → have lessons",
            ua: "get up → get dressed → have breakfast → catch the bus → have lessons"
          }
        }
      ]
    },

    /* 6 · at + time — kiedy dzieje się czynność (bez quarter/half past) */
    {
      type: "concept",
      heading: { pl: "at + time", ua: "at + time" },
      atTimeTeach: {
        clock: { hour: 7, minute: 15 },
        modelParts: ["I get up", "at", "7:15"],
        modelSpeak: "I get up at 7:15.",
        tipPl: "Mówimy \"at\" przed konkretną godziną.",
        tipUa: "Кажемо \"at\" перед конкретною годиною.",
        examples: [
          "I get up at 7:15.",
          "I have breakfast at 7:30.",
          "I catch the bus at 8:00."
        ],
        compareAt: { en: "at 7:15", pl: "O KTÓREJ?", ua: "ВО СКОЛЬКО?" },
        compareIn: { en: "in the morning", pl: "KIEDY?", ua: "КОЛИ?" },
        fullPhrase: "I get up at 7:15 in the morning.",
        notePl: "at + konkretna godzina. in the morning = część dnia.",
        noteUa: "at + конкретна година. in the morning = частина дня."
      },
      taskSequence: [
        {
          id: "eng01-at-1",
          type: "single-choice",
          doneLabel: "Q1 · at 7:30",
          questionEn: "Choose the correct sentence.",
          questionPl: "Wybierz poprawne zdanie.",
          questionUa: "Вибери правильне речення.",
          stem: "7:30",
          question: "Choose the correct sentence.",
          options: [
            { id: "a", label: "I get up in 7:30." },
            { id: "b", label: "I get up at 7:30." },
            { id: "c", label: "I get up on 7:30." }
          ],
          answer: "b",
          hint: {
            pl: "Przed godziną mówimy at.",
            ua: "Перед годиною кажемо at."
          },
          explanation: {
            pl: "I get up at 7:30.",
            ua: "I get up at 7:30."
          }
        },
        {
          id: "eng01-at-2",
          type: "single-choice",
          doneLabel: "Q2 · breakfast at",
          questionEn: "I have breakfast ___ 7:45.",
          questionPl: "Uzupełnij: I have breakfast ___ 7:45.",
          questionUa: "Доповни: I have breakfast ___ 7:45.",
          question: "I have breakfast ___ 7:45.",
          options: [
            { id: "a", label: "in" },
            { id: "b", label: "at" },
            { id: "c", label: "on" }
          ],
          answer: "b",
          hint: {
            pl: "Konkretna godzina → at.",
            ua: "Конкретна година → at."
          },
          explanation: {
            pl: "I have breakfast at 7:45.",
            ua: "I have breakfast at 7:45."
          }
        }
      ]
    },

    /* 8 · FLASH PRACTICE · Then / After that */
    {
      type: "practice",
      heading: { pl: "Practice · Then / After that", ua: "Practice · Then / After that" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: wybierz naturalną kontynuację — jak szablon Ex. 2 w Flash.",
        ua: "Зроби зараз: вибери природне продовження — як шаблон Ex. 2 у Flash."
      },
      text: {
        pl: [
          "Szablon z Flash: **I get up at … in the morning. Then, I …. After that I ….**",
          "Najpierw get up — potem get dressed."
        ],
        ua: [
          "Шаблон з Flash: **I get up at … in the morning. Then, I …. After that I ….**",
          "Спочатку get up — потім get dressed."
        ]
      },
      task: {
        id: "eng01-then",
        type: "single-choice",
        question: {
          pl: "I get up at 7:00. Then, I ____.",
          ua: "I get up at 7:00. Then, I ____."
        },
        options: [
          { id: "a", label: { pl: "go to sleep", ua: "go to sleep" } },
          { id: "b", label: { pl: "get dressed", ua: "get dressed" } },
          { id: "c", label: { pl: "have dinner", ua: "have dinner" } }
        ],
        answer: "b",
        hint: {
          pl: "Po wstaniu zwykle ubierasz się.",
          ua: "Після того як встав, зазвичай одягаєшся."
        },
        explanation: {
          pl: "I get up. Then, I get dressed.",
          ua: "I get up. Then, I get dressed."
        }
      }
    },

    /* 8 · Then / After that — łączenie znanych czynności w sekwencję */
    {
      type: "concept",
      heading: { pl: "Then / After that", ua: "Then / After that" },
      thenTeach: {
        image: ENG_IMG + "l01-morning.png?raw=true",
        imageAlt: "Morning sequence",
        sequence: ["get up", "get dressed", "have breakfast", "catch the bus"],
        models: [
          {
            en: "I get up at 7:15. Then I get dressed.",
            glossPl: "then = potem",
            glossUa: "then = потім"
          },
          {
            en: "I have breakfast. After that, I catch the bus.",
            glossPl: "after that = potem / po tym",
            glossUa: "after that = потім / після цього"
          }
        ],
        speakingTitle: "Your turn!",
        speakingLines: [
          "I get up at 7:15.",
          "Then I __________.",
          "After that, I __________."
        ],
        speakingHintPl: "Użyj znanych zwrotów z lekcji.",
        speakingHintUa: "Використай знайомі вирази з уроку."
      },
      taskSequence: [
        {
          id: "eng01-seq-1",
          type: "single-choice",
          doneLabel: "Q1 · Then I get dressed",
          questionEn: "I get up at 7:15. Then I ________.",
          questionPl: "Wybierz naturalną kontynuację.",
          questionUa: "Вибери природне продовження.",
          question: "I get up at 7:15. Then I ________.",
          options: [
            { id: "a", label: "get dressed" },
            { id: "b", label: "have dinner" },
            { id: "c", label: "go to sleep" }
          ],
          answer: "a",
          hint: {
            pl: "Po wstaniu zwykle ubierasz się.",
            ua: "Після того як встав, зазвичай одягаєшся."
          },
          explanation: {
            pl: "Then I get dressed.",
            ua: "Then I get dressed."
          }
        },
        {
          id: "eng01-seq-2",
          type: "single-choice",
          doneLabel: "Q2 · After that, catch the bus",
          questionEn: "I have breakfast. After that, I ________.",
          questionPl: "Wybierz naturalną kontynuację.",
          questionUa: "Вибери природне продовження.",
          question: "I have breakfast. After that, I ________.",
          options: [
            { id: "a", label: "catch the bus" },
            { id: "b", label: "have dinner" },
            { id: "c", label: "go to sleep" }
          ],
          answer: "a",
          hint: {
            pl: "Po śniadaniu często jedziesz do szkoły autobusem.",
            ua: "Після сніданку часто їдеш до школи автобусом."
          },
          explanation: {
            pl: "After that, I catch the bus.",
            ua: "After that, I catch the bus."
          }
        }
      ]
    },

    /* 9 · PRACTICE · morning / afternoon / evening — bez obrazka */
    {
      type: "check",
      heading: { pl: "Practice · morning / afternoon / evening", ua: "Practice · morning / afternoon / evening" },
      sequenceMode: "parts-of-day",
      taskSequence: [
        {
          id: "eng01-parts-morning",
          type: "multiple-choice",
          doneLabel: "Q1 · morning",
          questionEn: "Which activities are in the morning? Choose ALL.",
          questionPl: "Które czynności wykonujemy rano? Wybierz wszystkie.",
          questionUa: "Які дії ми виконуємо вранці? Вибери всі.",
          question: "Which activities are in the morning? Choose ALL.",
          options: [
            { id: "a", label: "get up" },
            { id: "b", label: "have breakfast" },
            { id: "c", label: "catch the bus" },
            { id: "d", label: "have dinner" }
          ],
          answer: ["a", "b", "c"],
          hint: {
            pl: "Rano: get up, have breakfast, catch the bus. Have dinner = wieczór.",
            ua: "Вранці: get up, have breakfast, catch the bus. Have dinner = вечір."
          },
          explanation: {
            pl: "In the morning: get up, have breakfast, catch the bus.",
            ua: "In the morning: get up, have breakfast, catch the bus."
          }
        },
        {
          id: "eng01-parts-afternoon",
          type: "multiple-choice",
          doneLabel: "Q2 · afternoon",
          questionEn: "Which activities are in the afternoon? Choose ALL.",
          questionPl: "Które czynności wykonujemy po południu? Wybierz wszystkie.",
          questionUa: "Які дії ми виконуємо після обіду / вдень? Вибери всі.",
          question: "Which activities are in the afternoon? Choose ALL.",
          options: [
            { id: "a", label: "have lunch" },
            { id: "b", label: "hang out with friends" },
            { id: "c", label: "come back home" },
            { id: "d", label: "go to sleep" }
          ],
          answer: ["a", "b", "c"],
          hint: {
            pl: "Po południu: lunch, friends, come back home. Go to sleep = wieczór.",
            ua: "Вдень: lunch, friends, come back home. Go to sleep = вечір."
          },
          explanation: {
            pl: "In the afternoon: have lunch, hang out with friends, come back home.",
            ua: "In the afternoon: have lunch, hang out with friends, come back home."
          }
        },
        {
          id: "eng01-parts-evening",
          type: "multiple-choice",
          doneLabel: "Q3 · evening",
          questionEn: "Which activities are in the evening? Choose ALL.",
          questionPl: "Które czynności wykonujemy wieczorem? Wybierz wszystkie.",
          questionUa: "Які дії ми виконуємо ввечері? Вибери всі.",
          question: "Which activities are in the evening? Choose ALL.",
          options: [
            { id: "a", label: "have a shower" },
            { id: "b", label: "have dinner" },
            { id: "c", label: "chat with friends" },
            { id: "d", label: "get up" }
          ],
          answer: ["a", "b", "c"],
          hint: {
            pl: "Wieczór: shower, dinner, chat with friends. Get up = rano.",
            ua: "Вечір: shower, dinner, chat with friends. Get up = ранок."
          },
          explanation: {
            pl: "In the evening: have a shower, have dinner, chat with friends.",
            ua: "In the evening: have a shower, have dinner, chat with friends."
          }
        }
      ]
    },

    /* 10 · DEEP DIVE · Learn the whole phrase */
    {
      type: "concept",
      heading: { pl: "Deep Dive · Learn the whole phrase", ua: "Deep Dive · Learn the whole phrase" },
      phraseDive: {
        keys: ["have", "get", "catch", "go"],
        groups: [
          {
            title: "HAVE",
            items: [
              { speak: "have breakfast", pl: "jeść śniadanie", ua: "снідати" },
              { speak: "have lunch", pl: "jeść obiad", ua: "обідати" },
              { speak: "have dinner", pl: "jeść kolację", ua: "вечеряти" },
              { speak: "have a shower", pl: "brać prysznic", ua: "приймати душ" },
              { speak: "have lessons", pl: "mieć lekcje", ua: "мати уроки" },
              { speak: "have a snack", pl: "jeść przekąskę", ua: "перекусити" },
              { speak: "have swimming practice", pl: "mieć trening pływania", ua: "мати тренування з плавання" }
            ]
          },
          {
            title: "GET",
            items: [
              { speak: "get up", pl: "wstawać", ua: "вставати" },
              { speak: "get dressed", pl: "ubierać się", ua: "одягатися" }
            ]
          },
          {
            title: "CATCH",
            items: [
              { speak: "catch the bus", pl: "łapać autobus", ua: "сідати на автобус" }
            ]
          },
          {
            title: "GO",
            items: [
              { speak: "go to sleep", pl: "iść spać", ua: "лягати спати" }
            ]
          }
        ],
        tipTitle: "💡 Learn the whole phrase.",
        tipLinesEn: [
          "Don't learn only \"have\".",
          "Learn \"have breakfast\"."
        ],
        tipWrong: "I eat breakfast.",
        tipRight: "I have breakfast.",
        tipNotePl: "Zapamiętaj całe wyrażenie — nie tylko jedno słowo.",
        tipNoteUa: "Запам’ятай цілий вираз — не лише одне слово."
      },
      taskSequence: [
        {
          id: "eng01-dive-1",
          type: "single-choice",
          doneLabel: "Q1 · have breakfast",
          questionEn: "I ______ breakfast at 7:30.",
          questionPl: "Wybierz poprawne słowo.",
          questionUa: "Вибери правильне слово.",
          question: "I ______ breakfast at 7:30.",
          options: [
            { id: "a", label: "do" },
            { id: "b", label: "have" },
            { id: "c", label: "catch" }
          ],
          answer: "b",
          hint: {
            pl: "Remember: we say have breakfast.",
            ua: "Remember: we say have breakfast."
          },
          explanation: {
            pl: "I have breakfast at 7:30.",
            ua: "I have breakfast at 7:30."
          }
        },
        {
          id: "eng01-dive-2",
          type: "single-choice",
          doneLabel: "Q2 · catch the bus",
          questionEn: "I ______ the bus.",
          questionPl: "Wybierz poprawne słowo.",
          questionUa: "Вибери правильне слово.",
          question: "I ______ the bus.",
          options: [
            { id: "a", label: "have" },
            { id: "b", label: "get" },
            { id: "c", label: "catch" }
          ],
          answer: "c",
          hint: {
            pl: "Remember: we say catch the bus.",
            ua: "Remember: we say catch the bus."
          },
          explanation: {
            pl: "I catch the bus.",
            ua: "I catch the bus."
          }
        }
      ]
    },

    /* 12 · EXTRA · GOOD TO KNOW */
    {
      type: "vocabulary",
      heading: { pl: "Extra · more morning steps · GOOD TO KNOW", ua: "Extra · more morning steps · GOOD TO KNOW" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: to NIE jest obowiązek Flash. Przeczytaj 6 dodatkowych zwrotów. Potem jedno krótkie pytanie.",
        ua: "Зроби зараз: це НЕ обов’язок Flash. Прочитай 6 додаткових виразів. Потім одне коротке питання."
      },
      rows: [
        { speak: "brush my teeth", pl: "myć zęby", ua: "чистити зуби" },
        { speak: "wash my face", pl: "myć twarz", ua: "вмивати обличчя" },
        { speak: "make my bed", pl: "ścielić łóżko", ua: "застеляти ліжко" },
        { speak: "pack my bag", pl: "pakować tornister", ua: "пакувати рюкзак" },
        { speak: "leave home", pl: "wychodzić z domu", ua: "виходити з дому" },
        { speak: "arrive at school", pl: "przychodzić do szkoły", ua: "приходити до школи" }
      ],
      task: {
        id: "eng01-extra",
        type: "single-choice",
        questionEn: "I get up. Then I ____.",
        questionPl: "Wybierz naturalną kontynuację.",
        questionUa: "Вибери природне продовження.",
        question: "I get up. Then I ____.",
        options: [
          { id: "a", label: "brush my teeth" },
          { id: "b", label: "have dinner" },
          { id: "c", label: "go to sleep" }
        ],
        answer: "a",
        hint: {
          pl: "To Extra — krok rano po wstaniu, nie wieczór.",
          ua: "Це Extra — крок вранці після вставання, не вечір."
        },
        explanation: {
          pl: "Great! \"Brush my teeth\" is a morning routine.",
          ua: "Great! \"Brush my teeth\" is a morning routine."
        }
      }
    },

    /* 12 · SPEAKING · prepare to speak about YOUR day */
    {
      type: "review",
      heading: { pl: "Speaking · What's your typical day?", ua: "Speaking · What's your typical day?" },
      speakingPrep: {
        question: "What's your typical day?",
        promptEn: "Now tell me about YOUR day.",
        promptPl: "Opowiedz teraz o SWOIM typowym dniu.",
        promptUa: "Розкажи зараз про СВІЙ типовий день.",
        exampleLabel: "Listen to an example",
        exampleLines: [
          "I get up at 7:15 in the morning.",
          "Then I get dressed.",
          "After that, I have breakfast.",
          "In the evening, I have dinner."
        ],
        scaffolds: [
          {
            title: "🌅 In the morning",
            lines: [
              "I get up at ______.",
              "Then I ________.",
              "After that, I ________."
            ]
          },
          {
            title: "☀️ In the afternoon",
            lines: [
              "I ________.",
              "Then I ________."
            ]
          },
          {
            title: "🌙 In the evening",
            lines: [
              "I ________.",
              "After that, I ________."
            ]
          }
        ],
        vocab: [
          "get up",
          "get dressed",
          "have breakfast",
          "catch the bus",
          "have lessons",
          "have lunch",
          "hang out with friends",
          "come back home",
          "have a snack",
          "do homework",
          "have swimming practice",
          "have a shower",
          "have dinner",
          "chat with friends",
          "go to sleep"
        ],
        noteEn: "No automatic score — the important thing is that you speak. Say 3–4 sentences about YOUR day.",
        notePl: "Bez automatycznej oceny — ważne, że mówisz. Powiedz 3–4 zdania o SWOIM dniu.",
        noteUa: "Без автоматичної оцінки — важливо, що ти говориш. Скажи 3–4 речення про СВІЙ день."
      }
    },

    /* 13 · CHECK & REMEMBER · lesson close */
    {
      type: "check",
      heading: { pl: "Check & Remember · MUST KNOW", ua: "Check & Remember · MUST KNOW" },
      sequenceMode: "lesson-close",
      lessonClose: {
        leadEn: "Today you can talk about your typical day.",
        leadPl: "Dziś potrafisz opowiedzieć o swoim typowym dniu.",
        leadUa: "Сьогодні ти вмієш розповісти про свій типовий день.",
        points: [
          {
            title: "1. Daily routines",
            body: "get up → get dressed → have breakfast → catch the bus → have lessons → …"
          },
          {
            title: "2. Time",
            lines: ["I get up at 7:15.", "at + specific time"],
            speak: "I get up at 7:15."
          },
          {
            title: "3. Sequence",
            lines: ["Then…", "After that…"]
          }
        ],
        modelLabel: "Listen & say it aloud",
        modelLines: [
          "I get up at 7:15 in the morning.",
          "Then I get dressed.",
          "After that, I have breakfast."
        ],
        successEn: "Great! You can talk about your typical day.",
        successPl: "Świetnie! Potrafisz opowiedzieć o swoim typowym dniu.",
        successUa: "Чудово! Ти вмієш розповісти про свій типовий день.",
        sayEn: "Now say one sentence about your day.",
        sayPl: "Powiedz teraz jedno zdanie o swoim dniu.",
        sayUa: "Скажи зараз одне речення про свій день.",
        sayPrompt: "I get up at ______.",
        nextLesson: "Next lesson → 1a Teen World"
      },
      taskSequence: [
        {
          id: "eng01-c1",
          type: "single-choice",
          doneLabel: "Final check · at + time",
          questionEn: "Which sentence is correct?",
          questionPl: "Które zdanie jest poprawne?",
          questionUa: "Яке речення правильне?",
          question: "Which sentence is correct?",
          options: [
            { id: "a", label: "I get up in 7:15." },
            { id: "b", label: "I get up at 7:15." },
            { id: "c", label: "I get up on 7:15." }
          ],
          answer: "b",
          hint: {
            pl: "Remember: at + specific time.",
            ua: "Remember: at + specific time."
          },
          explanation: {
            pl: "I get up at 7:15.",
            ua: "I get up at 7:15."
          }
        }
      ]
    }
  ]
};
