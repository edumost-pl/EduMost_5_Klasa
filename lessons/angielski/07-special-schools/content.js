function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L07_Special_Schools/images/";

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
        { pl: "Streścisz Carpe Diem Schools (USA) i Boat Schools w Chalan Beel (Bangladesz) — te same fakty co w Flash.", ua: "Стисло розкажеш Carpe Diem (USA) і Boat Schools у Chalan Beel." },
        { pl: "Użyjesz: office building, cubicle, canteen, gym, pass an exam, flood, library.", ua: "Ужиєш: office building, cubicle, canteen, gym, pass an exam, flood, library." },
        { pl: "Zrobisz matching i R/W/DS jak w 1f (nie kopiujemy akapitów — te same fakty).", ua: "Зробиш matching і R/W/DS як у 1f." },
        { pl: "Opiszesz salę (Tom) i uzupełnisz e-mail Charliego do Toma (Wiltshire, class 7B).", ua: "Опишеш клас (Tom) і доповниш e-mail Charlie до Toma." },
        { pl: "Przypomnisz interpunkcję: kropka, pytajnik, wykrzyknik, przecinek.", ua: "Згадаєш пунктуацію: крапка, питання, оклик, кома." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "office building", ua: "biurowiec · офісна будівля" },
        { pl: "cubicle", ua: "boks ze ściankami · бокс / кабінка" },
        { pl: "canteen · gym · library", ua: "stołówka · sala gimnastyczna · biblioteka" },
        { pl: "pass an exam", ua: "zdać egzamin · скласти іспит" },
        { pl: "flood", ua: "powódź · повінь" },
        { pl: "blackboard · desks · windows", ua: "tablica · ławki · okna" },
        { pl: "What’s your classroom like?", ua: "Jaka jest twoja sala? · Який у тебе клас?" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "1f · Across Cultures", ua: "1f · Across Cultures" },
      visual: vizGh("l07-two-schools.png", {
        alt: { pl: "Dwa kadry: Carpe Diem jak biuro i szkoła na łodzi w Chalan Beel", ua: "Два кадри: Carpe Diem і школа на човні" },
        title: { pl: "Carpe Diem Schools · Boat Schools", ua: "Carpe Diem Schools · Boat Schools" },
        prompt: { pl: "Edukacyjny kolaż 16:9. LEWA: jasny open space, dzieci 11 lat w boksach z laptopami, etykieta EN: Carpe Diem Schools, USA. PRAWA: drewniana łódź-klasa na rzece, etykieta EN: Boat Schools, Chalan Beel, Bangladesh. Dzień, spokój, bez grozy, bez logotypów." }
      }),
      text: {
        pl: [
          "W Flash ten spread to **1f Special Schools**. Dwa teksty, które nauczyciel pyta na sprawdzianie: **Carpe Diem Schools** (USA) i **Boat Schools** w **Chalan Beel** (Bangladesz).",
          "Poniżej te same fakty, **swoimi słowami** — nie przepis stron 14–15."
        ],
        ua: [
          "**1f Special Schools.** Два тексти: **Carpe Diem Schools** (USA) і **Boat Schools** у **Chalan Beel**.",
          "Ті самі факти своїми словами."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Carpe Diem Schools", ua: "Carpe Diem Schools" },
      visual: vizGh("l07-office-school.png", {
        alt: { pl: "Uczeń w cubicle: biurko, krzesło, komputer", ua: "Учень у cubicle" },
        title: { pl: "a cubicle: desk, chair, computer", ua: "a cubicle: desk, chair, computer" },
        prompt: { pl: "Fotorealistyczne wnętrze 16:9: dziecko 11 lat w małym boksie z biurkiem, krzesłem i komputerem; w tle sale z tablicami. Etykiety EN: cubicle; office building. Bez logotypów." }
      }),
      text: {
        pl: [
          "**Carpe Diem Schools** są w **USA**. Z zewnątrz budynek wygląda bardziej jak **office building** niż zwykła szkoła.",
          "W środku jest jedna duża sala. Każde dziecko ma swój **cubicle**: biurko, krzesło, komputer (*cubicle* = mała przestrzeń ze ściankami).",
          "Są też **classrooms** z tablicami, **canteen** i **gym**. Uczniowie **nie muszą** przychodzić o jednej godzinie i **ciągle zdawać egzaminów** (*pass exams*). Więcej czasu idzie na **własne projekty**. Szkoła ma pomóc każdemu dziecku zostać tym, kim chce być."
        ],
        ua: [
          "**Carpe Diem Schools** — у **США**. Ззовні більше схоже на **office building**.",
          "Велика зала. Кожна дитина має **cubicle**: стіл, стілець, комп’ютер.",
          "Є також **classrooms**, **canteen** і **gym**. Не треба приходити всім в одну годину і постійно **pass exams**. Більше **проєктів**."
        ]
      },
      task: {
        id: "eng1f-e1",
        type: "single-choice",
        question: { pl: "Carpe Diem Schools are … / There is a library … / Some schools in Bangladesh are …", ua: "Dopasuj fakty." },
        options: [
          { id: "a", label: { pl: "in the USA · on the boat · on boats", ua: "in the USA · on the boat · on boats" } },
          { id: "b", label: { pl: "in Bangladesh · in Michigan · in an office only", ua: "in Bangladesh · in Michigan · in an office only" } },
          { id: "c", label: { pl: "only online · in the gym · in Sweden", ua: "only online · in the gym · in Sweden" } }
        ],
        answer: "a",
        explanation: { pl: "Carpe Diem = USA. Biblioteka jest na łodzi. Część szkół w Bangladeszu = na łodziach.", ua: "USA · library on the boat · on boats." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Boat Schools · Chalan Beel", ua: "Boat Schools · Chalan Beel" },
      visual: vizGh("l07-boat-school.png", {
        alt: { pl: "Klasa na łodzi: 30 dzieci, tablica, komputer, biblioteka", ua: "Клас на човні" },
        title: { pl: "Chalan Beel, Bangladesh", ua: "Chalan Beel, Bangladesh" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9: drewniana łódź-szkoła na spokojnej rzece, ławki, tablica, komputer, półka z książkami. Etykieta EN: Boat Schools, Chalan Beel. Dzieci 10–12 lat, dzień, bez grozy, bez logotypów." }
      }),
      text: {
        pl: [
          "W **Chalan Beel** w **Bangladeszu** co roku są **floods** (powodzie). Część szkół **nie jest w budynkach — jest na łodziach**.",
          "Na każdej łodzi jest **classroom**: ławki i krzesła dla **30 dzieci**, **blackboard** i **komputer z internetem**. **Nie ma** canteen ani gym. **Jest library** z książkami.",
          "Gdy jest powódź, to często **jedyne szkoły w okolicy**. Dla dzieci z Chalan Beel łodzie to nie wycieczka — to szansa na naukę."
        ],
        ua: [
          "У **Chalan Beel** (**Бангладеш**) щороку **floods**. Частина шкіл — **на човнах**.",
          "Клас на  **30** дітей, **blackboard**, комп’ютер з інтернетом. **Немає** canteen / gym. **Є library**.",
          "Під час повені це часто єдині школи."
        ]
      },
      task: {
        id: "eng1f-e2",
        type: "true-false",
        question: { pl: "R/W/DS: There is a canteen on the school boat.", ua: "There is a canteen on the school boat." },
        answer: false,
        explanation: { pl: "Wrong: na łodzi nie ma canteen ani gym. Jest library.", ua: "Wrong: no canteen on the boat." }
      }
    },
    {
      type: "check",
      heading: { pl: "R / W / DS", ua: "R / W / DS" },
      task: {
        id: "eng1f-c1",
        type: "single-choice",
        question: { pl: "„Students like the Carpe Diem schools.”", ua: "„Students like the Carpe Diem schools.”" },
        options: [
          { id: "a", label: { pl: "Right — the text says they love them.", ua: "Right" } },
          { id: "b", label: { pl: "Wrong — students hate the schools.", ua: "Wrong" } },
          { id: "c", label: { pl: "Doesn’t say — the text doesn’t tell us if students like them.", ua: "Doesn’t say" } }
        ],
        answer: "c",
        explanation: { pl: "DS: tekst opisuje szkołę, nie mówi, czy uczniowie ją lubią. „There are some classrooms” = Right. Canteen na łodzi = Wrong.", ua: "DS. Classrooms in Carpe Diem = Right. Canteen on boat = Wrong." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Tom, Charlie i twoja sala", ua: "Tom, Charlie і твій клас" },
      text: {
        pl: [
          "W 1f **Tom** opisuje swoją salę (słuchanie w klasie). Pytanie Flash: **What’s your classroom like?** Porównaj ze swoją.",
          "**Charlie** pisze e-mail do Toma: szkoła **5 minut piechotą**, **class 7B**, **Wiltshire Secondary School**, sala na **drugim piętrze**, **24 uczniów**, **blackboard** z przodu, rzędy **desks**, **trzy windows**, dwoje drzwi, białe ściany z mapami.",
          "Culture Spot (krótko): **Summerhill** (A.S. Neill) — pierwsza „wolna” szkoła w Anglii; dzieci uczą się pewności siebie, gdy mają przestrzeń być sobą.",
          "Interpunkcja: kropka `.` w zdaniu oznajmującym, `?` w pytaniu, `!` przy emocji, przecinek między elementami listy."
        ],
        ua: [
          "**Tom** описує свій клас. **What’s your classroom like?**",
          "**Charlie** → Tom: **Wiltshire Secondary**, **class 7B**, 2-й поверх, **24** учні, blackboard, desks, windows.",
          "**Summerhill** — «вільна» школа в Англії.",
          "Крапка, `?`, `!`, кома в переліку."
        ]
      },
      task: {
        id: "eng1f-e3",
        type: "single-choice",
        question: { pl: "E-mail Charliego: I’m in ___ 7B at Wiltshire Secondary School. My ___ is on the second floor.", ua: "Luki w e-mailu Charliego." },
        options: [
          { id: "a", label: { pl: "class · classroom", ua: "class · classroom" } },
          { id: "b", label: { pl: "canteen · cubicle", ua: "canteen · cubicle" } },
          { id: "c", label: { pl: "flood · gym", ua: "flood · gym" } }
        ],
        answer: "a",
        explanation: { pl: "class 7B; classroom on the second floor. Dalej: blackboard, desks, windows.", ua: "class · classroom." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng1f-c2",
        type: "multiple-choice",
        question: { pl: "Zaznacz WSZYSTKIE school areas (nie equipment).", ua: "Познач УСІ school areas." },
        options: [
          { id: "a", label: { pl: "canteen", ua: "canteen" } },
          { id: "b", label: { pl: "blackboard", ua: "blackboard" } },
          { id: "c", label: { pl: "gym", ua: "gym" } },
          { id: "d", label: { pl: "library", ua: "library" } }
        ],
        answer: ["a", "c", "d"],
        explanation: { pl: "Canteen, gym, library = miejsca. Blackboard = equipment (wyposażenie).", ua: "Areas: canteen, gym, library. Blackboard = equipment." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj · na sprawdzian", ua: "Запам’ятай · на перевірку" },
      text: {
        pl: [
          "Carpe Diem = USA, office building, cubicle, projects, nie same egzaminy; są classrooms, canteen, gym.",
          "Boat schools = Chalan Beel, Bangladesz, flood, 30 dzieci, blackboard + komputer, library, **bez** canteen/gym.",
          "R/W/DS: like Carpe Diem = **DS**; classrooms in Carpe Diem = **Right**; canteen on the boat = **Wrong**.",
          "E-mail do Sama / Toma: szkoła + sala (plan z Flash). Summerhill = krótki Culture Spot."
        ],
        ua: [
          "Carpe Diem — США, cubicle, проєкти. Chalan Beel — човни, flood, library, без canteen.",
          "Like = DS. Classrooms = Right. Canteen on boat = Wrong."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "3 zdania: In my classroom there is / there are… It is… We have / haven’t got…",
          "Następna lekcja: **CLIL · Good Students** (Citizenship) — osobno, nie razem z Flash Time."
        ],
        ua: [
          "3 речення про свій клас.",
          "Далі: **CLIL · Good Students**."
        ]
      }
    }
  ]
};
