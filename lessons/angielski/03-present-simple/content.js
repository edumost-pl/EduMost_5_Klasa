function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L03_Present_Simple/images/";

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
        { pl: "Użyjesz Present Simple do nawyków: I listen, she listens.", ua: "Ужиєш Present Simple для звичок: I listen, she listens." },
        { pl: "Dodasz -s / -es / -ies w 3. osobie (he, she, it).", ua: "Додаси -s / -es / -ies у 3-й особі (he, she, it)." },
        { pl: "Wstawisz przysłówek częstotliwości: always, usually, often, sometimes, hardly ever, never.", ua: "Вставиш прислівник частоти: always, usually, often, sometimes, hardly ever, never." },
        { pl: "Zrobisz przeczenie: don’t / doesn’t + czasownik bez -s.", ua: "Зробиш заперечення: don’t / doesn’t + дієслово без -s." },
        { pl: "Zadasz pytanie: Do you…? Does she…? i odpowiesz Yes, I do. / No, she doesn’t.", ua: "Поставиш питання: Do you…? Does she…? і відповіси Yes, I do. / No, she doesn’t." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "Present Simple", ua: "czas teraźniejszy nawyków · теперішній для звичок" },
        { pl: "always / usually / often / sometimes / hardly ever / never", ua: "zawsze / zwykle / często / czasem / prawie nigdy / nigdy" },
        { pl: "once / twice", ua: "raz / dwa razy · один раз / двічі" },
        { pl: "don’t / doesn’t", ua: "przeczenie · заперечення" },
        { pl: "Do you…? / Does he…?", ua: "pytanie Yes/No · питання Yes/No" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l03-habits.png", {
        alt: { pl: "Dwa kadry: I listen to music; Keith plays online games", ua: "Два кадри: I listen to music; Keith plays online games" },
        title: { pl: "Habits = Present Simple", ua: "Habits = Present Simple" },
        prompt: { pl: "Edukacyjna infografika 16:9, dwa kadry. LEWA: dziecko ze słuchawkami, napis I often listen to music. PRAWA: dziecko przy komputerze, napis Keith usually plays online games. Bez logotypów." }
      }),
      text: {
        pl: [
          "Present Simple w klasie 5 to czas **nawyków i rozkładu dnia** — nie „teraz w tej sekundzie” (to będzie Present Continuous).",
          "**I often listen to music in my free time.** **Keith usually plays online games.**"
        ],
        ua: [
          "Present Simple у 5 класі — час **звичок і розкладу**, не «просто зараз» (це буде Present Continuous).",
          "**I often listen to music in my free time.** **Keith usually plays online games.**"
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "I listen · she listens", ua: "I listen · she listens" },
      visual: vizGh("l03-s-es.png", {
        alt: { pl: "Tabela: I/you/we/they listen; he/she/it listens", ua: "Таблиця: I/you/we/they listen; he/she/it listens" },
        title: { pl: "3rd person: +s / +es / y→ies", ua: "3rd person: +s / +es / y→ies" },
        prompt: { pl: "Szkolna tabela 16:9 EN: I/you/we/they listen; he/she/it listens. Obok: eat→eats; go→goes; watch→watches; study→studies; enjoy→enjoys. Bez logotypów." }
      }),
      text: {
        pl: [
          ["I / you / we / they: czasownik bez końcówki. He / she / it: ", em("+s"), "."],
          "I eat → he **eats**. I like → she **likes**.",
          "Jeśli czasownik kończy się na -ss, -sh, -ch, -x, -o → **-es**: I go → he **goes**, I watch → she **watches**.",
          "Spółgłoska + y → **-ies**: I study → he **studies**. ALE samogłoska + y: I enjoy → he **enjoys**."
        ],
        ua: [
          ["I / you / we / they: дієслово без закінчення. He / she / it: ", em("+s"), "."],
          "I eat → he **eats**. I like → she **likes**.",
          "-ss/-sh/-ch/-x/-o → **-es**: go → goes, watch → watches.",
          "Приголосна + y → **-ies**: study → studies. Але enjoy → enjoys."
        ]
      },
      task: {
        id: "eng03-e1",
        type: "single-choice",
        question: { pl: "Martha ___ TV before she ___ to bed.", ua: "Martha ___ TV before she ___ to bed." },
        options: [
          { id: "a", label: { pl: "watch / go", ua: "watch / go" } },
          { id: "b", label: { pl: "watches / goes", ua: "watches / goes" } },
          { id: "c", label: { pl: "watching / going", ua: "watching / going" } }
        ],
        answer: "b",
        explanation: { pl: "She = 3. osoba: watches, goes.", ua: "She = 3-тя особа: watches, goes." }
      }
    },
    {
      type: "concept",
      heading: { pl: "How often? · always…never", ua: "How often? · always…never" },
      visual: vizGh("l03-frequency.png", {
        alt: { pl: "Linia: always 100% … never 0%", ua: "Лінія: always 100% … never 0%" },
        title: { pl: "Adverbs of frequency", ua: "Adverbs of frequency" },
        prompt: { pl: "Edukacyjna linia 16:9: always 100%, usually 80%, often 50%, sometimes 25%, hardly ever 10%, never 0%. Etykiety EN. Bez logotypów." }
      }),
      text: {
        pl: [
          "**always** (100%) · **usually** (80%) · **often** (50%) · **sometimes** (25%) · **hardly ever** (10%) · **never** (0%).",
          "Miejsce: zwykle PRZED czasownikiem: *I usually eat pizza twice a month.*",
          "**once** = jeden raz, **twice** = dwa razy: *once a week, twice a month*."
        ],
        ua: [
          "**always** (100%) · **usually** (80%) · **often** (50%) · **sometimes** (25%) · **hardly ever** (10%) · **never** (0%).",
          "Місце: зазвичай ПЕРЕД дієсловом: *I usually eat pizza twice a month.*",
          "**once** = один раз, **twice** = двічі."
        ]
      },
      task: {
        id: "eng03-e2",
        type: "single-choice",
        question: { pl: "How often do you eat pizza? — wybierz naturalną odpowiedź z Flash.", ua: "How often do you eat pizza?" },
        options: [
          { id: "a", label: { pl: "I usually eat pizza twice a month.", ua: "I usually eat pizza twice a month." } },
          { id: "b", label: { pl: "I eating pizza now.", ua: "I eating pizza now." } },
          { id: "c", label: { pl: "Yes, pizza.", ua: "Yes, pizza." } }
        ],
        answer: "a",
        explanation: { pl: "How often → przysłówek + once/twice a week/month.", ua: "How often → прислівник + once/twice." }
      }
    },
    {
      type: "concept",
      heading: { pl: "don’t / doesn’t · Do / Does", ua: "don’t / doesn’t · Do / Does" },
      visual: vizGh("l03-do-does.png", {
        alt: { pl: "Tabela przeczeń i pytań Present Simple", ua: "Таблиця заперечень і питань Present Simple" },
        title: { pl: "do not → don’t · does not → doesn’t", ua: "do not → don’t · does not → doesn’t" },
        prompt: { pl: "Szkolna tabela 16:9 EN. Negative: I/you/we/they don’t go; he/she/it doesn’t go. Questions: Do you go? Does she go? Short: Yes, I do. / No, she doesn’t. Bez logotypów." }
      }),
      text: {
        pl: [
          ["Czasownik posiłkowy ", em("do"), " nie ma odpowiednika w polskim — po prostu buduje przeczenie i pytanie."],
          "I / you / we / they: **don’t** + czasownik (*I don’t go*). He / she / it: **doesn’t** + czasownik BEZ -s (*she doesn’t go*, nie *doesn’t goes*).",
          "Pytanie: **Do you play basketball?** **Does she get up at 7:00?**",
          "Krótka odpowiedź: **Yes, I do. / No, I don’t.** **Yes, she does. / No, she doesn’t.** Nie: *Yes, I go.*"
        ],
        ua: [
          ["Допоміжне ", em("do"), " будує заперечення і питання."],
          "I/you/we/they: **don’t** + дієслово. He/she/it: **doesn’t** + дієслово БЕЗ -s.",
          "**Do you play basketball?** **Does she get up at 7:00?**",
          "**Yes, I do. / No, she doesn’t.** Не *Yes, I go.*"
        ]
      },
      task: {
        id: "eng03-e3",
        type: "single-choice",
        question: { pl: "Przeczenie od: She gets up at 7:00.", ua: "Заперечення від: She gets up at 7:00." },
        options: [
          { id: "a", label: { pl: "She don’t gets up at 7:00.", ua: "She don’t gets up at 7:00." } },
          { id: "b", label: { pl: "She doesn’t get up at 7:00.", ua: "She doesn’t get up at 7:00." } },
          { id: "c", label: { pl: "She not get up at 7:00.", ua: "She not get up at 7:00." } }
        ],
        answer: "b",
        explanation: { pl: "Doesn’t + get (bez -s).", ua: "Doesn’t + get (без -s)." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng03-c1",
        type: "input-text",
        question: { pl: "Wpisz formę dla he: I go → he ____ (jedno słowo).", ua: "Впиши форму для he: I go → he ____." },
        answer: "goes",
        explanation: { pl: "go kończy się na -o → goes.", ua: "go → goes." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng03-c2",
        type: "true-false",
        question: { pl: "Poprawna krótka odpowiedź: Do you go to the park? — Yes, I go.", ua: "Правильна коротка відповідь: Yes, I go." },
        answer: false,
        explanation: { pl: "Prawidłowo: Yes, I do. / No, I don’t.", ua: "Правильно: Yes, I do. / No, I don’t." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Nawyk → Present Simple. He/she/it → -s/-es/-ies.",
          "don’t / doesn’t + czasownik podstawowy. Do / Does + podmiot + czasownik.",
          "always…never przed czasownikiem; once / twice a week."
        ],
        ua: [
          "Звичка → Present Simple. He/she/it → -s/-es/-ies.",
          "don’t / doesn’t + базова форма. Do / Does + підмет + дієслово.",
          "always…never перед дієсловом."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "How often do you eat pizza? How often does your mum chat online?",
          "Następna lekcja: **1c** — miejsca w szkole i przedmioty (Maths, canteen, science lab, Sally i Susan)."
        ],
        ua: [
          "How often do you eat pizza?",
          "Наступний урок: **1c** — місця в школі і предмети."
        ]
      }
    }
  ]
};
