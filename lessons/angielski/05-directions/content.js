function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L05_Directions/images/";

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
        { pl: "Zapytasz o drogę: Excuse me. Where’s classroom 3C?", ua: "Запитаєш дорогу: Excuse me. Where’s classroom 3C?" },
        { pl: "Dasz wskazówkę: Go past…, turn left/right, go up the stairs.", ua: "Даси підказку: Go past…, turn left/right, go up the stairs." },
        { pl: "Użyjesz przyimków ruchu: towards, up, down, across, along, past.", ua: "Ужиєш прийменники руху: towards, up, down, across, along, past." },
        { pl: "Odróżnisz see, look i watch.", ua: "Відрізниш see, look і watch." },
        { pl: "Grzecznie dokończysz dialog: Thank you. — You’re welcome.", ua: "Ввічливо закінчиш діалог: Thank you. — You’re welcome." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "Excuse me. Where’s…?", ua: "Przepraszam. Gdzie jest…? · Перепрошую. Де…?" },
        { pl: "Go past / turn left / turn right", ua: "idź obok / skręć w lewo / w prawo" },
        { pl: "go up the stairs / down the corridor", ua: "wejdź po schodach / idź korytarzem" },
        { pl: "towards · along · across · past", ua: "w stronę · wzdłuż · przez · obok" },
        { pl: "Can you repeat, please?", ua: "Czy możesz powtórzyć? · Повторіть, будь ласка" },
        { pl: "You’re welcome.", ua: "Nie ma za co. · Будь ласка / нема за що" },
        { pl: "see · look · watch", ua: "widzieć · patrzeć · oglądać" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l05-map-arrows.png", {
        alt: { pl: "Plan szkoły ze strzałkami: past the lab, turn left, up the stairs", ua: "План школи зі стрілками" },
        title: { pl: "Asking for and giving directions", ua: "Asking for and giving directions" },
        prompt: { pl: "Edukacyjny plan szkoły 16:9 ze strzałkami EN: Go past the science lab; turn left; go up the stairs; Classroom 3C is on your right. Bez logotypów." }
      }),
      text: {
        pl: [
          "Wczoraj była mapa. Dziś **głos**: **Keith** pyta **Mr Smitha**, gdzie jest **classroom 3C**.",
          "To *Everyday English* z Flash — te same kwestie, które wstawiasz w luki A–E."
        ],
        ua: [
          "Учора була мапа. Сьогодні **голос**: як запитати, де кабінет, і як відповісти.",
          "Це *Everyday English* з Flash."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Szablon dialogu", ua: "Шаблон діалогу" },
      visual: vizGh("l05-dialogue.png", {
        alt: { pl: "Dymki: Excuse me. Where’s 3C? Go past… You’re welcome.", ua: "Хмарки діалогу" },
        title: { pl: "Excuse me! Where’s classroom 3C?", ua: "Excuse me! Where’s classroom 3C?" },
        prompt: { pl: "Komiks 16:9, uczeń i nauczyciel na korytarzu. Dymki EN: Excuse me! Where’s classroom 3C?; Go past the science lab and turn left; Can you repeat, please?; You’re welcome. Bez logotypów." }
      }),
      text: {
        pl: [
          "**Keith:** Excuse me! **Where’s classroom 3C?**",
          "**Mr Smith:** Go past the science lab and turn left when you see the staffroom. **Walk down the corridor.** Go past the nurse’s office and turn right. Then go up the stairs.",
          "**Keith:** I’m sorry. **Can you repeat, please?**",
          "**Mr Smith:** Of course. Go up the stairs. Go down the corridor. **Classroom 3C is on your right.** There’s a map near the stairs.",
          "**Keith:** Thank you. — **Mr Smith: You’re welcome.**"
        ],
        ua: [
          "**Keith:** Excuse me! **Where’s classroom 3C?**",
          "**Mr Smith:** Go past the science lab… **Walk down the corridor.** … go up the stairs.",
          "**Keith:** **Can you repeat, please?** — **Classroom 3C is on your right.**",
          "**Thank you.** — **You’re welcome.**"
        ]
      },
      task: {
        id: "eng05-e1",
        type: "single-choice",
        question: { pl: "Jak grzecznie zacząć pytanie o drogę?", ua: "Як ввічливо почати питання про дорогу?" },
        options: [
          { id: "a", label: { pl: "Hey you! 3C!", ua: "Hey you! 3C!" } },
          { id: "b", label: { pl: "Excuse me. Where’s classroom 3C?", ua: "Excuse me. Where’s classroom 3C?" } },
          { id: "c", label: { pl: "You must tell me 3C.", ua: "You must tell me 3C." } }
        ],
        answer: "b",
        explanation: { pl: "Excuse me + Where’s…?", ua: "Excuse me + Where’s…?" }
      }
    },
    {
      type: "concept",
      heading: { pl: "Przyimki ruchu", ua: "Прийменники руху" },
      visual: vizGh("l05-prepositions.png", {
        alt: { pl: "Sześć ikon: towards, up, down, across, along, past", ua: "Шість іконок прийменників" },
        title: { pl: "towards · up · down · across · along · past", ua: "towards · up · down · across · along · past" },
        prompt: { pl: "Edukacyjna infografika 16:9, sześć piktogramów ruchu z etykietami EN: towards; up; down; across; along; past. Szkolny korytarz. Bez logotypów." }
      }),
      text: {
        pl: [
          "**towards** — w stronę. **up / down** — w górę / w dół (schody). **along** — wzdłuż korytarza. **across** — na drugą stronę. **past** — obok czegoś, mijając to.",
          "**Go past the nurse’s office** = minąć gabinet pielęgniarki."
        ],
        ua: [
          "**towards** — у бік. **up / down** — вгору / вниз. **along** — уздовж. **across** — через. **past** — повз.",
          "**Go past the nurse’s office.**"
        ]
      },
      task: {
        id: "eng05-e2",
        type: "single-choice",
        question: { pl: "Które zdanie znaczy: minąć pracownię?", ua: "Яке речення означає: пройти повз кабінет?" },
        options: [
          { id: "a", label: { pl: "Go past the science lab.", ua: "Go past the science lab." } },
          { id: "b", label: { pl: "Go towards the science lab and stop in front of it.", ua: "Go towards the science lab and stop in front of it." } },
          { id: "c", label: { pl: "Look the science lab.", ua: "Look the science lab." } }
        ],
        answer: "a",
        explanation: { pl: "past = mijając, obok.", ua: "past = повз." }
      }
    },
    {
      type: "concept",
      heading: { pl: "see · look · watch", ua: "see · look · watch" },
      text: {
        pl: [
          ["", em("see"), " — widzieć, nawet bez celu: *I can see a boy.*", ""],
          ["", em("look"), " — patrzeć celowo: *Look at me.* *Look at the map.*", ""],
          ["", em("watch"), " — oglądać coś, co się rusza: *watch a film*, *watch a football match.*", ""]
        ],
        ua: [
          ["", em("see"), " — бачити: *I can see a boy.*", ""],
          ["", em("look"), " — дивитися навмисно: *Look at me.*", ""],
          ["", em("watch"), " — спостерігати рух: *watch a film.*", ""]
        ]
      },
      task: {
        id: "eng05-e3",
        type: "single-choice",
        question: { pl: "Let’s ___ the football match on TV tonight.", ua: "Let’s ___ the football match on TV tonight." },
        options: [
          { id: "a", label: { pl: "see", ua: "see" } },
          { id: "b", label: { pl: "look", ua: "look" } },
          { id: "c", label: { pl: "watch", ua: "watch" } }
        ],
        answer: "c",
        explanation: { pl: "Mecz na TV = watch (coś się rusza na ekranie).", ua: "Матч по ТБ = watch." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng05-c1",
        type: "true-false",
        question: { pl: "„You’re welcome” mówimy, gdy ktoś dziękuje.", ua: "«You’re welcome» кажемо, коли хтось дякує." },
        answer: true,
        explanation: { pl: "Thank you. — You’re welcome.", ua: "Thank you. — You’re welcome." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng05-c2",
        type: "input-text",
        question: { pl: "Wpisz dwa słowa: I can’t ___ anything without my glasses. (widzieć)", ua: "Впиши два слова: I can’t ___ anything without my glasses." },
        answer: "see",
        explanation: { pl: "I can’t see anything — widzieć, nie patrzeć celowo.", ua: "I can’t see anything." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Excuse me. Where’s…? → Go past… Turn left/right. Go up the stairs. … is on your right.",
          "Can you repeat, please? Thank you. You’re welcome.",
          "see / look / watch — trzy różne czasowniki."
        ],
        ua: [
          "Excuse me. Where’s…? → Go past… Turn left/right.",
          "see / look / watch."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "Odegraj z kimś: from the library to classroom 3A. Użyj mapy z lekcji 4.",
          "Następna lekcja: **Present Continuous** — I’m reading right now. I love… (czasowniki statyczne bez -ing)."
        ],
        ua: [
          "Розіграй діалог: from the library to classroom 3A.",
          "Наступний урок: Present Continuous."
        ]
      }
    }
  ]
};
