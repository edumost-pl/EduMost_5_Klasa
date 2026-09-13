function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L06_Present_Continuous/images/";

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
        { pl: "Zbudujesz Present Continuous: I’m reading, she’s studying, they aren’t sleeping.", ua: "Побудуєш Present Continuous: I’m reading, she’s studying, they aren’t sleeping." },
        { pl: "Zadasz pytanie: Are you surfing the Net? Yes, I am. / No, I’m not.", ua: "Поставиш питання: Are you surfing the Net?" },
        { pl: "Wybierzesz Present Simple na nawyk i Continuous na „teraz”.", ua: "Обереш Present Simple на звичку і Continuous на «зараз»." },
        { pl: "Nie wstawisz -ing do like, love, hate, need, know, want.", ua: "Не поставиш -ing до like, love, hate, need, know, want." },
        { pl: "Poprawisz zdanie: No, she isn’t painting. She’s knitting.", ua: "Виправиш речення: No, she isn’t painting. She’s knitting." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "Present Continuous", ua: "czas teraźniejszy ciągły · теперішній тривалий" },
        { pl: "right now / at the moment", ua: "właśnie teraz · просто зараз" },
        { pl: "I’m reading · she’s studying", ua: "czytam · вона вчиться" },
        { pl: "stative verbs: like, love, hate, need, know, want", ua: "czasowniki statyczne · статичні дієслова" },
        { pl: "Are you…? Yes, I am. / No, I’m not.", ua: "pytanie i krótka odpowiedź" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l06-now.png", {
        alt: { pl: "Dziecko z laptopem: I’m surfing the Net right now", ua: "Дитина з ноутбуком: I’m surfing the Net right now" },
        title: { pl: "right now ≠ every day", ua: "right now ≠ every day" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9: 11-latek przy stole z laptopem, dzień. Etykieta EN: right now. Bez logotypów marek." }
      }),
      text: {
        pl: [
          "Present Simple = **co zwykle robisz**. Present Continuous = **co robisz w tej chwili**.",
          "*I do my homework after school.* (nawyk) vs *I’m doing my homework right now.* (teraz)"
        ],
        ua: [
          "Present Simple = **що зазвичай**. Present Continuous = **що зараз**.",
          "*I do my homework after school.* vs *I’m doing my homework right now.*"
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "am / is / are + -ing", ua: "am / is / are + -ing" },
      visual: vizGh("l06-forms.png", {
        alt: { pl: "Tabela: I’m reading; she’s reading; they’re reading", ua: "Таблиця форм Present Continuous" },
        title: { pl: "full form · short form", ua: "full form · short form" },
        prompt: { pl: "Szkolna tabela 16:9 EN: I am reading → I’m reading; he/she/it is reading → ’s reading; you/we/they are reading → ’re reading. Negative: ’m not / isn’t / aren’t. Bez logotypów." }
      }),
      text: {
        pl: [
          "**I am reading.** → **I’m reading.** He/she/it **is** reading → **she’s reading.** You/we/they **are** reading.",
          "Przeczenie: **I’m not reading. She isn’t reading. They aren’t reading.**",
          "Pytanie: **Are you surfing the Net?** **Is the sun shining?** Krótko: **Yes, I am. / No, I’m not.** **Yes, it is. / No, it isn’t.**"
        ],
        ua: [
          "**I’m reading. She’s reading. They’re reading.**",
          "**I’m not / isn’t / aren’t.**",
          "**Are you…? Is she…?** **Yes, I am. / No, I’m not.**"
        ]
      },
      task: {
        id: "eng06-e1",
        type: "single-choice",
        question: { pl: "We ___ TV at the moment.", ua: "We ___ TV at the moment." },
        options: [
          { id: "a", label: { pl: "watch", ua: "watch" } },
          { id: "b", label: { pl: "are watching", ua: "are watching" } },
          { id: "c", label: { pl: "watches", ua: "watches" } }
        ],
        answer: "b",
        explanation: { pl: "at the moment → Continuous: are watching.", ua: "at the moment → are watching." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Popraw obrazek", ua: "Виправ картинку" },
      visual: vizGh("l06-correct.png", {
        alt: { pl: "Nie: Mum is painting. Tak: She’s knitting.", ua: "Ні: painting. Так: knitting." },
        title: { pl: "No, she isn’t painting. She’s knitting.", ua: "No, she isn’t painting. She’s knitting." },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA przekreślona: mama z pędzlem, napis painting. PRAWA: mama z drutami, napis knitting. Etykieta EN: No, she isn’t painting. She’s knitting. Bez logotypów." }
      }),
      text: {
        pl: [
          "Szablon z Flash: **No, she isn’t painting. She’s knitting.**",
          "Najpierw przeczenie Continuous, potem właściwa czynność w Continuous."
        ],
        ua: [
          "**No, she isn’t painting. She’s knitting.**",
          "Спочатку заперечення, потім правильна дія."
        ]
      },
      task: {
        id: "eng06-e2",
        type: "single-choice",
        question: { pl: "Amy is sleeping. (naprawdę: read a book) — które zdanie jest wzorem Flash?", ua: "Amy is sleeping. (насправді: read a book)" },
        options: [
          { id: "a", label: { pl: "No, she isn’t sleeping. She’s reading a book.", ua: "No, she isn’t sleeping. She’s reading a book." } },
          { id: "b", label: { pl: "No, she don’t sleep. She read a book.", ua: "No, she don’t sleep. She read a book." } },
          { id: "c", label: { pl: "Amy never sleep.", ua: "Amy never sleep." } }
        ],
        answer: "a",
        explanation: { pl: "No, she isn’t + -ing. She’s + -ing.", ua: "No, she isn’t … She’s …" }
      }
    },
    {
      type: "concept",
      heading: { pl: "Czasowniki statyczne", ua: "Статичні дієслова" },
      visual: vizGh("l06-stative.png", {
        alt: { pl: "I love texting. Przekreślone: I’m loving.", ua: "I love texting. Перекреслено I’m loving." },
        title: { pl: "I love… (NIE: I’m loving…)", ua: "I love… (НЕ: I’m loving…)" },
        prompt: { pl: "Szkolna kartka 16:9 EN. Lista: like, love, hate, need, know, want. Duży przykład: I love texting my friends. Przekreślone: I’m loving. Bez logotypów." }
      }),
      text: {
        pl: [
          ["Czasowniki ", em("statyczne"), " opisują stan, nie czynność w toku. W angielskim zwykle ", em("nie"), " tworzą czasów ciągłych."],
          "Flash: **like, love, hate, need, know, want.**",
          "**I love texting my friends.** Nie: *I’m loving…*",
          "W wiadomości: *I **need** your help. I **know** you are good at Maths.* — Simple, nawet jeśli piszesz „teraz”."
        ],
        ua: [
          ["", em("Статичні"), " дієслова зазвичай ", em("не"), " мають Continuous."],
          "**like, love, hate, need, know, want.**",
          "**I love texting my friends.** Не *I’m loving.*"
        ]
      },
      task: {
        id: "eng06-e3",
        type: "single-choice",
        question: { pl: "I ___ you are really good at Maths. (know)", ua: "I ___ you are really good at Maths." },
        options: [
          { id: "a", label: { pl: "am knowing", ua: "am knowing" } },
          { id: "b", label: { pl: "know", ua: "know" } },
          { id: "c", label: { pl: "knows", ua: "knows" } }
        ],
        answer: "b",
        explanation: { pl: "know jest statyczne → Present Simple: I know.", ua: "know → I know." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng06-c1",
        type: "true-false",
        question: { pl: "„I do my homework every day” i „I’m doing my homework right now” to ten sam czas gramatyczny.", ua: "Обидва речення — той самий час." },
        answer: false,
        explanation: { pl: "Pierwsze: Present Simple (nawyk). Drugie: Present Continuous (teraz).", ua: "Simple vs Continuous." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng06-c2",
        type: "input-text",
        question: { pl: "Wpisz krótką formę: I am reading → (jedno słowo ze apostrofem, jak I’m)", ua: "Коротка форма: I am reading →" },
        answer: "I'm",
        explanation: { pl: "I am → I’m.", ua: "I am → I’m." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Continuous = am/is/are + -ing. Słowa-klucze: now, right now, at the moment.",
          "Simple = nawyk, rozkład, always/usually…",
          "like/love/hate/need/know/want — bez Continuous."
        ],
        ua: [
          "Continuous = am/is/are + -ing.",
          "Simple = звичка.",
          "like/love/hate/need/know/want — без Continuous."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "Spójrz przez okno: Is the sun shining? What are people doing?",
          "Następna lekcja: **1f Across Cultures** — Carpe Diem Schools i Boat Schools (Chalan Beel)."
        ],
        ua: [
          "Is the sun shining? What are people doing?",
          "Наступний урок: **1f Across Cultures** — Carpe Diem і Boat Schools."
        ]
      }
    }
  ]
};
