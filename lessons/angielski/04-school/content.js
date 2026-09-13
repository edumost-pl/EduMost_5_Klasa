function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L04_School/images/";

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
        { pl: "Nazwiesz pomieszczenia szkoły: classroom, canteen, science lab, library…", ua: "Назвеш приміщення школи: classroom, canteen, science lab, library…" },
        { pl: "Nazwiesz przedmioty: Maths, History, PE, Computer science…", ua: "Назвеш предмети: Maths, History, PE, Computer science…" },
        { pl: "Powiesz, który przedmiot lubisz i dlaczego: I like Maths because it’s fun.", ua: "Скажеш, який предмет любиш і чому: I like Maths because it’s fun." },
        { pl: "Użyjesz near / behind przy mapie szkoły.", ua: "Ужиєш near / behind на мапі школи." },
        { pl: "Nie pomylisz canteen (stołówka) z classroom (sala).", ua: "Не сплутаєш canteen (їдальня) з classroom (клас)." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "classroom", ua: "sala lekcyjna · класна кімната" },
        { pl: "canteen", ua: "stołówka · їдальня" },
        { pl: "science lab", ua: "pracownia przyrodnicza · кабінет природничих" },
        { pl: "staffroom", ua: "pokój nauczycielski · учительська" },
        { pl: "library", ua: "biblioteka · бібліотека" },
        { pl: "playground / field", ua: "boisko / pole · майданчик / поле" },
        { pl: "Maths · PE · Computer science", ua: "matematyka · WF · informatyka" },
        { pl: "History · Geography · Art · Music", ua: "historia · geografia · plastyka · muzyka" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l04-school-map.png", {
        alt: { pl: "Plan szkoły: 3A, 3B, canteen, lab, stairs", ua: "План школи: 3A, 3B, canteen, lab, stairs" },
        title: { pl: "School areas", ua: "School areas" },
        prompt: { pl: "Edukacyjny plan szkoły 16:9 z góry, etykiety EN: classroom 3A; classroom 3B; canteen; science lab; staffroom; nurse’s office; library; stairs; playground. Kolorowy, czytelny, bez logotypów." }
      }),
      text: {
        pl: [
          "Dziś mapa szkoły i **przedmioty** — te same, które masz w planie 5a, tylko po angielsku.",
          "W Flash sale mają numery jak **3A, 3B, 3C**. W nagraniu z 1c **Sally** ma pierwszy dzień, pomaga jej **Susan** — te imiona wracają na sprawdzianie."
        ],
        ua: [
          "Сьогодні мапа школи і **предмети** англійською.",
          "У Flash класи мають номери **3A, 3B, 3C**. Завтра знадобиться на *directions*."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Gdzie to jest?", ua: "Де це?" },
      visual: vizGh("l04-areas.png", {
        alt: { pl: "Ikony: canteen, lab, library, gym, playground", ua: "Іконки: canteen, lab, library, gym, playground" },
        title: { pl: "canteen ≠ classroom", ua: "canteen ≠ classroom" },
        prompt: { pl: "Edukacyjna infografika 16:9, pięć ikon z etykietami EN: canteen (tace); science lab (probówki); library (półki); gym; playground. Bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("classroom"), " — sala, w której masz lekcje. ", em("canteen"), " — tam jesz lunch. ", em("science lab"), " — pracownia do doświadczeń."],
          "**staffroom** — pokój nauczycieli. **nurse’s office** — gabinet pielęgniarki. **auditorium** — aula.",
          "Przyimki z mapy: **near** (blisko), **behind** (za), **stairs** (schody)."
        ],
        ua: [
          ["", em("classroom"), " — класна кімната. ", em("canteen"), " — їдальня. ", em("science lab"), " — кабінет дослідів."],
          "**staffroom** — учительська. **nurse’s office** — медпункт.",
          "**near**, **behind**, **stairs**."
        ]
      },
      task: {
        id: "eng04-e1",
        type: "single-choice",
        question: { pl: "Gdzie jesz lunch w szkole?", ua: "Де ти їсиш обід у школі?" },
        options: [
          { id: "a", label: { pl: "in the staffroom", ua: "in the staffroom" } },
          { id: "b", label: { pl: "in the canteen", ua: "in the canteen" } },
          { id: "c", label: { pl: "in the science lab", ua: "in the science lab" } }
        ],
        answer: "b",
        explanation: { pl: "Canteen = stołówka.", ua: "Canteen = їдальня." }
      }
    },
    {
      type: "concept",
      heading: { pl: "School subjects", ua: "School subjects" },
      visual: vizGh("l04-subjects.png", {
        alt: { pl: "Siatka przedmiotów: Maths, English, PE, Art…", ua: "Сітка предметів: Maths, English, PE, Art…" },
        title: { pl: "I like Maths because it’s fun.", ua: "I like Maths because it’s fun." },
        prompt: { pl: "Edukacyjna siatka 16:9, etykiety EN: Maths; Computer science; Physics; Geography; English; Music; History; Art; Biology; Chemistry; Literature; Drama; PE. Ikony szkolne, bez logotypów." }
      }),
      text: {
        pl: [
          "W UK **Maths** (nie *Matematyka*). **PE** = WF. **Computer science** = informatyka. **English language** = angielski jako przedmiot.",
          "Szablon z Flash: **Which school subject do you like?** **I like Maths because it’s fun.** **I dislike PE because I don’t like sports.**"
        ],
        ua: [
          "У UK **Maths**. **PE** = фізкультура. **Computer science** = інформатика.",
          "**Which school subject do you like?** **I like Maths because it’s fun.**"
        ]
      },
      task: {
        id: "eng04-e2",
        type: "single-choice",
        question: { pl: "Jak po angielsku jest matematyka jako przedmiot szkolny?", ua: "Як англійською математика як шкільний предмет?" },
        options: [
          { id: "a", label: { pl: "Maths", ua: "Maths" } },
          { id: "b", label: { pl: "Mathematic", ua: "Mathematic" } },
          { id: "c", label: { pl: "Count lesson", ua: "Count lesson" } }
        ],
        answer: "a",
        explanation: { pl: "W Flash: Maths. (US często Math — u nas trzymamy wersję podręcznika.)", ua: "У Flash: Maths." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Sally i Susan", ua: "Sally і Susan" },
      text: {
        pl: [
          "W klasie 1c to **słuchanie**. Tu krótka rozmowa z tymi samymi faktami (nie transkrypt z płyty):",
          "**Sally:** It’s my first day. Where’s classroom 3A?",
          "**Susan:** I’m Susan. I’m in 3A — it’s **near the stairs**. I’m not your cousin, I’m in year 5 too. My favourite lesson is **PE**, not Maths. The **canteen is behind the nurse’s office**. Come on!",
          "R/W/DS jak w Flash: first day = **Right**. Cousin = **Wrong**. Favourite Maths = **Wrong**. 3A near the stairs = **Right**. Canteen behind the nurse’s office = **Right**."
        ],
        ua: [
          "**Sally** — перший день. **Susan** допомагає: 3A **біля stairs**, не cousin, улюблений урок **PE**, canteen **behind the nurse’s office**.",
          "First day = Right. Cousin = Wrong. Favourite Maths = Wrong."
        ]
      },
      task: {
        id: "eng1c-sally",
        type: "true-false",
        question: { pl: "Susan is Sally’s cousin.", ua: "Susan is Sally’s cousin." },
        answer: false,
        explanation: { pl: "Wrong: Susan jest koleżanką z roku, nie kuzynką. Favourite lesson Susan to PE, nie Maths.", ua: "Wrong: не cousin. Favourite = PE." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng04-c1",
        type: "multiple-choice",
        question: { pl: "Zaznacz WSZYSTKIE school areas (miejsca), nie przedmioty.", ua: "Познач УСІ school areas (місця), не предмети." },
        options: [
          { id: "a", label: { pl: "library", ua: "library" } },
          { id: "b", label: { pl: "History", ua: "History" } },
          { id: "c", label: { pl: "playground", ua: "playground" } },
          { id: "d", label: { pl: "Music", ua: "Music" } }
        ],
        answer: ["a", "c"],
        explanation: { pl: "Library i playground to miejsca. History i Music to przedmioty.", ua: "Library і playground — місця." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng04-c2",
        type: "true-false",
        question: { pl: "Staffroom to stołówka.", ua: "Staffroom — це їдальня." },
        answer: false,
        explanation: { pl: "Staffroom = pokój nauczycieli. Stołówka = canteen.", ua: "Staffroom = учительська. Їдальня = canteen." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Miejsca: classroom, canteen, science lab, staffroom, library, gym, playground, field, stairs.",
          "Przedmioty: Maths, Computer science, PE, English, History, Geography, Art, Music, Biology, Chemistry…",
          "I like … because … / I dislike … because …"
        ],
        ua: [
          "Місця: classroom, canteen, science lab, library, playground…",
          "Предмети: Maths, PE, Computer science…",
          "I like … because …"
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "Which school subject do you like? Which do you dislike? Why?",
          "Następna lekcja: **Excuse me. Where’s classroom 3C?** — pytanie o drogę w szkole."
        ],
        ua: [
          "Which school subject do you like?",
          "Наступний урок: питання про дорогу в школі."
        ]
      }
    }
  ]
};
