function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Progress Check 1", ua: "Progress Check 1" },
      text: {
        pl: [
          "To powtórka **My World** (1 / 1a–1f / CLIL / Flash Time, s. 4–17) — te same umiejętności co w planie wynikowym i na sprawdzianie po module.",
          "W zadaniach zamkniętych nauczyciel często liczy ok. **50%** na dostateczny i ok. **70%** na dobry. Tu ćwiczysz fakty i formy, nie nowy materiał."
        ],
        ua: [
          "Повторення **My World** (1 / 1a–1f / CLIL / Flash Time) — ті самі вміння, що на перевірку після модуля.",
          "Закриті завдання: орієнтир ~50% = dostateczny, ~70% = dobry."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co będzie na sprawdzianie", ua: "Що буде на перевірці" },
      items: [
        { pl: "Mówić o codziennych czynnościach i czasie wolnym (like + -ing).", ua: "Говорити про день і вільний час (like + -ing)." },
        { pl: "Opisywać miejsca w szkole i przedmioty (canteen, science lab, Maths, PE…).", ua: "Описувати місця в школі і предмети." },
        { pl: "Present Simple + przysłówki częstotliwości; Present Continuous; przyimki ruchu.", ua: "Present Simple + частота; Present Continuous; прийменники руху." },
        { pl: "Czytanie: R/W/DS (Jeremy) i fakty z Teen World (Dure, Sámi) — w klasie bywa też streszczenie.", ua: "Читання: R/W/DS (Jeremy) і факти Teen World." },
        { pl: "Everyday English: Where’s…? Thank you. Can you repeat…?", ua: "Everyday English: Where’s…? Thank you. Can you repeat…?" },
        { pl: "Pisanie: e-mail o szkole/klasie albo o typowym poniedziałku.", ua: "Писання: e-mail про школу/клас або типовий понеділок." }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Jeremy · R / W / DS", ua: "Jeremy · R / W / DS" },
      visual: vizGh("L01_Typical_day", "l01-typical-day.png", {
        alt: { pl: "Dzień powszedni vs sobota: szkoła i hokej", ua: "Будень і субота" },
        title: { pl: "On weekdays · Today is Saturday", ua: "On weekdays · Today is Saturday" },
        prompt: { pl: "Edukacyjny kolaż 16:9. LEWA: chłopak 11 lat rano, śniadanie, szkoła, etykieta EN: weekdays. PRAWA: ten sam chłopak na lodowisku, hokej, etykieta EN: Saturday, ice hockey. Bez logotypów." }
      }),
      text: {
        pl: [
          "Tekst jak w Progress Check (swoimi słowami, te same fakty):",
          "W dni powszednie **Jeremy** budzi się o **7:00**, ubiera się, je śniadanie i **idzie do szkoły**. Po szkole robi **homework**, potem **ogląda TV**.",
          "**Dziś jest sobota.** Jeremy **nie idzie do szkoły**. On i przyjaciele **grają teraz w hokeja na lodzie**. Jeremy **kocha** hokej. Trenuje z drużyną **co tydzień**. W przyszłym miesiącu mają **mistrzostwa**."
        ],
        ua: [
          "Будні: Jeremy встає о **7:00**, сніданок, школа, потім homework і TV.",
          "**Сьогодні субота** — не йде до школи, **зараз грає в хокей**. Любить хокей, тренується **щотижня**, чемпіонат наступного місяця."
        ]
      },
      task: {
        id: "eng-r1-jeremy",
        type: "single-choice",
        question: { pl: "Jeremy goes to school at 7 am. / Jeremy hasn’t got any classes on Saturday. / Jeremy trains with his team twice a week.", ua: "Trzy zdania R/W/DS — które zestawienie jest poprawne?" },
        options: [
          { id: "a", label: { pl: "Wrong · Right · Wrong (the text says every week, not twice)", ua: "Wrong · Right · Wrong" } },
          { id: "b", label: { pl: "Right · Wrong · Right", ua: "Right · Wrong · Right" } },
          { id: "c", label: { pl: "Doesn’t say · Doesn’t say · Right", ua: "DS · DS · Right" } }
        ],
        answer: "a",
        explanation: { pl: "7 am = budzik, nie start szkoły (W). Sobota bez lekcji (R). Trening every week, nie twice (W).", ua: "W · R · W (every week, not twice)." }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z modułu", ua: "Слова з модуля" },
      rows: [
        { pl: "get up · catch the bus · hang out · have lunch", ua: "wstawać · łapać autobus · spędzać czas · jeść lunch" },
        { pl: "like / don’t mind / dislike + -ing", ua: "lubię / nic mi to nie robi / nie lubię" },
        { pl: "field · art room · science lab · canteen", ua: "boisko · pracownia plastyki · lab · stołówka" },
        { pl: "always … never · Present Simple / Continuous", ua: "częstotliwość · Simple / Continuous" },
        { pl: "Where’s…? You’re welcome. Of course.", ua: "droga w szkole · grzeczność" }
      ]
    },
    {
      type: "check",
      heading: { pl: "get / catch / hang / have", ua: "get / catch / hang / have" },
      task: {
        id: "eng-r1-c1",
        type: "single-choice",
        question: { pl: "Mark and Pat ___ out with their friends after school.", ua: "Mark and Pat ___ out with their friends after school." },
        options: [
          { id: "a", label: { pl: "get", ua: "get" } },
          { id: "b", label: { pl: "hang", ua: "hang" } },
          { id: "c", label: { pl: "catch", ua: "catch" } }
        ],
        answer: "b",
        explanation: { pl: "hang out. Inne z PC: get up, have lunch, catch the bus.", ua: "hang out. Також: get up, have lunch, catch the bus." }
      }
    },
    {
      type: "check",
      heading: { pl: "like + -ing", ua: "like + -ing" },
      task: {
        id: "eng-r1-c2",
        type: "single-choice",
        question: { pl: "My sister likes ___ photos on social media. (post)", ua: "My sister likes ___ photos on social media." },
        options: [
          { id: "a", label: { pl: "post", ua: "post" } },
          { id: "b", label: { pl: "posting", ua: "posting" } },
          { id: "c", label: { pl: "posts", ua: "posts" } }
        ],
        answer: "b",
        explanation: { pl: "like + -ing → posting. Inne z PC: doesn’t like playing, doesn’t mind exercising, like spending time.", ua: "like + -ing → posting." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sale w szkole", ua: "Приміщення" },
      task: {
        id: "eng-r1-c3",
        type: "single-choice",
        question: { pl: "We have PE on the ___. We draw and paint in the ___. Science is in the ___. Lunch is in the ___.", ua: "PE / draw / Science / lunch" },
        options: [
          { id: "a", label: { pl: "field · art room · science lab · canteen", ua: "field · art room · science lab · canteen" } },
          { id: "b", label: { pl: "canteen · field · playground · art room", ua: "canteen · field · playground · art room" } },
          { id: "c", label: { pl: "staffroom · stairs · cubicle · flood", ua: "staffroom · stairs · cubicle · flood" } }
        ],
        answer: "a",
        explanation: { pl: "PE → field. Draw/paint → art room. Science → science lab. Lunch → canteen.", ua: "field · art room · science lab · canteen." }
      }
    },
    {
      type: "check",
      heading: { pl: "Present Simple", ua: "Present Simple" },
      task: {
        id: "eng-r1-c4",
        type: "single-choice",
        question: { pl: "We ___ lunch at 1 pm. / Frank ___ to music in the evenings.", ua: "not/have · listen" },
        options: [
          { id: "a", label: { pl: "don’t have · listens", ua: "don’t have · listens" } },
          { id: "b", label: { pl: "doesn’t have · listen", ua: "doesn’t have · listen" } },
          { id: "c", label: { pl: "not have · listening", ua: "not have · listening" } }
        ],
        answer: "a",
        explanation: { pl: "We don’t have. Frank listens. Dana doesn’t go. Do you do…? They spend…", ua: "don’t have · listens." }
      }
    },
    {
      type: "check",
      heading: { pl: "Przysłówki częstotliwości", ua: "Прислівники частоти" },
      task: {
        id: "eng-r1-c5",
        type: "single-choice",
        question: { pl: "Selma gets up at 7 am. (always) — które zdanie jest wzorem?", ua: "Selma + always" },
        options: [
          { id: "a", label: { pl: "Selma always gets up at 7 am.", ua: "Selma always gets up at 7 am." } },
          { id: "b", label: { pl: "Always Selma get up at 7 am.", ua: "Always Selma get up at 7 am." } },
          { id: "c", label: { pl: "Selma gets always up at 7 am.", ua: "Selma gets always up at 7 am." } }
        ],
        answer: "a",
        explanation: { pl: "Przysłówek zwykle PRZED czasownikiem: always gets. (be: is never late).", ua: "always перед дієсловом." }
      }
    },
    {
      type: "check",
      heading: { pl: "Present Continuous", ua: "Present Continuous" },
      task: {
        id: "eng-r1-c6",
        type: "single-choice",
        question: { pl: "___ Julia ___ TV at the moment?", ua: "Julia / watch / at the moment" },
        options: [
          { id: "a", label: { pl: "Does Julia watch", ua: "Does Julia watch" } },
          { id: "b", label: { pl: "Is Julia watching", ua: "Is Julia watching" } },
          { id: "c", label: { pl: "Is Julia watch", ua: "Is Julia watch" } }
        ],
        answer: "b",
        explanation: { pl: "at the moment → Continuous: Is Julia watching…?", ua: "Is Julia watching…?" }
      }
    },
    {
      type: "check",
      heading: { pl: "Everyday English", ua: "Everyday English" },
      task: {
        id: "eng-r1-c7",
        type: "single-choice",
        question: { pl: "A: Where’s the art room?  /  A: Thank you.  /  A: Can you repeat the last bit?", ua: "Wybierz zestaw odpowiedzi." },
        options: [
          { id: "a", label: { pl: "Go past the staffroom and turn left. · You’re welcome. · Of course.", ua: "Go past… · You’re welcome. · Of course." } },
          { id: "b", label: { pl: "Then go up the stairs. · Excuse me. · I’m sorry.", ua: "Then go up… · Excuse me. · I’m sorry." } },
          { id: "c", label: { pl: "It’s on your right. · Where’s 3C? · Hang out.", ua: "It’s on your right. · Where’s 3C? · Hang out." } }
        ],
        answer: "a",
        explanation: { pl: "Where’s…? → wskazówka (Go past…). Thank you → You’re welcome. Can you repeat…? → Of course.", ua: "Go past… / You’re welcome / Of course." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Przed sprawdzianem", ua: "Перед контрольною" },
      text: {
        pl: [
          "**Słownictwo i gramatyka:** dzień, czas wolny, szkoła, Present Simple, always–never, przyimki ruchu, Present Continuous.",
          "**Czytanie:** matching, R/W/DS, pytania do Teen World (Dure, Sámi, Hennet, Sáhkku).",
          "**Mówienie:** like/dislike, Excuse me — Where’s…?",
          "**Pisanie:** e-mail o szkole i klasie (Charlie/Sam) albo o poniedziałku.",
          "Moduł 2 **Round we go!** — w katalogu na razie „Wkrótce”."
        ],
        ua: [
          "День, -ing, Simple/Continuous, школа, Excuse me.",
          "Teen World + Jeremy. E-mail про клас.",
          "Модуль 2 поки «Незабаром»."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "60 sekund: What’s your typical day? What do you like doing? What are you doing right now? Where’s the canteen?"
        ],
        ua: [
          "60 секунд: typical day, I like …ing, right now, Where’s the canteen?"
        ]
      }
    }
  ]
};
