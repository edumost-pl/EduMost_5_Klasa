function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L_Flash_Time/images/";

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
        { pl: "Pogrupujesz pomysły wg nagłówków Flash: Where / What it looks like / Subjects / Time / Breaks / Why it is special.", ua: "Згрупуєш ідеї: Where / looks like / Subjects / Time / Breaks / Why special." },
        { pl: "Zaprojektujesz mapę idealnej szkoły (w zeszycie) i powiesz o niej 4 zdania.", ua: "Намалюєш мапу ідеальної школи і скажеш 4 речення." },
        { pl: "Omówisz Values: Respect yourself and others will respect you (Confucius).", ua: "Обговориш: Respect yourself and others will respect you." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "perfect school", ua: "idealna szkoła · ідеальна школа" },
        { pl: "Where / What it looks like", ua: "gdzie / jak wygląda · де / як виглядає" },
        { pl: "Subjects · Time · Breaks", ua: "przedmioty · czas lekcji · przerwy" },
        { pl: "Why it is special", ua: "dlaczego jest wyjątkowa · чому особлива" },
        { pl: "self-respect", ua: "szacunek do siebie · повага до себе" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Flash Time · projekt", ua: "Flash Time · проєкт" },
      visual: vizGh("l-ft-perfect-headings.png", {
        alt: { pl: "Sześć nagłówków: Where, looks like, Subjects, Time, Breaks, Why special", ua: "Шість заголовків проєкту" },
        title: { pl: "What is your perfect school like?", ua: "What is your perfect school like?" },
        prompt: { pl: "Edukacyjna infografika 16:9, sześć pudełek EN: Where; What it looks like; Subjects; Time (start/finish); Breaks; Why it is special. Kolorowy plan dziecka, bez logotypów." }
      }),
      text: {
        pl: [
          "To **Flash Time** modułu 1 + **Presentation Skills** — osobno od CLIL.",
          "Pytanie: **What is your perfect school like?** Najpierw sortujesz pomysły, potem rysujesz **mapę**, potem mówisz na głos."
        ],
        ua: [
          "Це **Flash Time** модуля 1, не CLIL.",
          "**What is your perfect school like?** Сортування → мапа → презентація."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Nagłówki z Flash", ua: "Заголовки з Flash" },
      text: {
        pl: [
          "Przykłady z listy w książce (wkładasz pod nagłówek, nie kopiujesz całego projektu):",
          "**Where:** in the mountains / in the city / in the forest.",
          "**What it looks like:** tall building · lots of computer rooms · all students have got a tablet · lessons outside.",
          "**Subjects:** languages · Arts & Crafts · students only study their five favourite subjects · sport.",
          "**Time:** 10 am – 4 pm.",
          "**Breaks:** two short breaks and a lunch hour.",
          "Potem **Why it is special** — twoje zdanie, dlaczego ta szkoła jest inna."
        ],
        ua: [
          "**Where:** mountains / city / forest.",
          "**Looks like:** tall building, computer rooms, tablet, lessons outside.",
          "**Subjects:** languages, Arts & Crafts, five favourite subjects, sport.",
          "**Time:** 10 am – 4 pm. **Breaks:** two short + lunch hour."
        ]
      },
      task: {
        id: "eng-ft-e1",
        type: "single-choice",
        question: { pl: "Gdzie wstawisz „10 am – 4 pm”?", ua: "Куди поставити „10 am – 4 pm”?" },
        options: [
          { id: "a", label: { pl: "Where", ua: "Where" } },
          { id: "b", label: { pl: "Time (start/finish lessons)", ua: "Time" } },
          { id: "c", label: { pl: "Breaks", ua: "Breaks" } }
        ],
        answer: "b",
        explanation: { pl: "10 am – 4 pm to godziny lekcji → Time. Breaks to przerwy (np. lunch hour).", ua: "Time = години уроків." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Mapa i prezentacja", ua: "Мапа і презентація" },
      visual: vizGh("l-ft-map.png", {
        alt: { pl: "Plan idealnej szkoły: library, gym, garden, canteen", ua: "План ідеальної школи" },
        title: { pl: "Draw a map of your perfect school", ua: "Draw a map of your perfect school" },
        prompt: { pl: "Edukacyjna mapa 16:9 wymyślonej szkoły z etykietami EN: library; gym; garden; canteen; art room; playground; computer rooms. Kolorowy plan dziecka, bez logotypów." }
      }),
      text: {
        pl: [
          "W zeszycie narysuj **mapę**. Tu układamy zdania na głos (*Presentation skills*).",
          "Szablon: **In my perfect school there is a big library.** **Lessons start at 10 am and finish at 4 pm.** **We have two short breaks and a lunch hour.** **Students do projects and we respect each other.**",
          "Użyj słów z 1c–1d: canteen, gym, science lab, playground…"
        ],
        ua: [
          "Намалюй **мапу** в зошиті. Тут — речення вголос.",
          "**In my perfect school there is… Lessons start at… We respect each other.**"
        ]
      },
      task: {
        id: "eng-ft-e2",
        type: "multiple-choice",
        question: { pl: "Które zdania pasują do opisu perfect school? Zaznacz WSZYSTKIE.", ua: "Які речення пасують? Познач УСІ." },
        options: [
          { id: "a", label: { pl: "There is a gym and a library.", ua: "There is a gym and a library." } },
          { id: "b", label: { pl: "Students never raise their hand.", ua: "Students never raise their hand." } },
          { id: "c", label: { pl: "We are polite and we pay attention.", ua: "We are polite and we pay attention." } },
          { id: "d", label: { pl: "Teachers treat students with respect.", ua: "Teachers treat students with respect." } }
        ],
        answer: ["a", "c", "d"],
        explanation: { pl: "Miejsca + szacunek z CLIL. „Never raise their hand” nie jest dobrym nawykiem.", ua: "Місця + повага. Не «never raise their hand»." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Values · Confucius", ua: "Values · Confucius" },
      visual: vizGh("l-ft-confucius.png", {
        alt: { pl: "Cytat: Respect yourself and others will respect you", ua: "Цитата Конфуція" },
        title: { pl: "Self-respect", ua: "Self-respect" },
        prompt: { pl: "Spokojna edukacyjna karta 16:9, cytat EN: Respect yourself and others will respect you. — Confucius. Dwoje 11-latków rozmawia przy szkolnej ławce. Bez logotypów, bez portretu historycznego jak zdjęcie gwiazdy." }
      }),
      text: {
        pl: [
          ["Flash Values: ", em("self-respect"), ". Cytat (Confucius): **Respect yourself and others will respect you.**"],
          "Po polsku: szanuj siebie — wtedy inni będą szanować ciebie. To łączy się z CLIL: treat other people the way you want them to treat you."
        ],
        ua: [
          "**Respect yourself and others will respect you.** (Confucius)",
          "Поважай себе — і інші поважатимуть тебе."
        ]
      },
      task: {
        id: "eng-ft-c1",
        type: "true-false",
        question: { pl: "Cytat z Flash Time mówi: szanuj siebie, a inni będą szanować ciebie.", ua: "Цитата: шануй себе — і інші шануватимуть тебе." },
        answer: true,
        explanation: { pl: "Respect yourself and others will respect you.", ua: "Respect yourself and others will respect you." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Nagłówki: Where · What it looks like · Subjects · Time · Breaks · Why it is special.",
          "Projekt: mapa + 4 zdania na głos.",
          "Values: self-respect (Confucius)."
        ],
        ua: [
          "Where / looks like / Subjects / Time / Breaks / Why special.",
          "Мапа + презентація. Self-respect."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "What is my perfect school like? 4 zdania (there is/are + Time + why special).",
          "Następna lekcja: **Progress Check 1** — powtórka całego My World przed sprawdzianem."
        ],
        ua: [
          "4 речення про perfect school.",
          "Далі: **Progress Check 1**."
        ]
      }
    }
  ]
};
