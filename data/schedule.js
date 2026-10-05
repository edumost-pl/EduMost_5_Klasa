/* Єдине джерело тижневого розкладу для schedule.html і plan-kirilla.html.
   Теми уроків і домашка з Librus сюди не записуються. */
(function () {
const TIMES = [
  "08:00–08:45","08:55–09:40","09:50–10:35","10:50–11:35",
  "11:45–12:30","12:50–13:35","13:40–14:25","14:30–15:15"
];

const DAYS = {
  pl: ["Poniedziałek","Wtorek","Środa","Czwartek","Piątek"],
  ua: ["Понеділок","Вівторок","Середа","Четвер","Пʼятниця"]
};

const SUBJ = {
  "j.polski":      {pl:"Język polski",        ua:"Польська мова",        icon:"📖"},
  "historia":      {pl:"Historia",             ua:"Історія",              icon:"🏛️"},
  "plastyka":      {pl:"Plastyka",             ua:"Образотворче мист.",   icon:"🎨"},
  "j.ang":         {pl:"Język angielski",      ua:"Англійська мова",      icon:"🇬🇧"},
  "matematyka":    {pl:"Matematyka",           ua:"Математика",           icon:"🔢"},
  "wych-fiz":      {pl:"Wychowanie fizyczne",  ua:"Фізкультура",          icon:"⚽"},
  "informatyka":   {pl:"Informatyka",          ua:"Інформатика",          icon:"💻"},
  "technika":      {pl:"Technika",             ua:"Трудове навчання",     icon:"🔧"},
  "muzyka":        {pl:"Muzyka",               ua:"Музика",               icon:"🎵"},
  "geografia":     {pl:"Geografia",            ua:"Географія",            icon:"🌍"},
  "godz.wych":     {pl:"Godzina wychowawcza",  ua:"Виховна година",      icon:"👥"},
  "biologia":      {pl:"Biologia",             ua:"Біологія",             icon:"🧬"},
  "religia":       {pl:"Religia",              ua:"Релігія",              icon:"⛪"},
  "ed.zdrowotna":  {pl:"Edukacja zdrowotna",   ua:"Здоров'я",            icon:"❤️"},
  "psycholog":     {pl:"Psycholog",            ua:"Психолог",            icon:"💬"}
};

const BOOKS = {
  "j.polski": {
    title: "Między nami",
    author: "Anna Murdzek, Agnieszka Łuczak",
    publisher: "GWO", nr: "867/2/2018",
    ua_desc: "Підручник з польської мови. Тексти для читання, граматика, правопис. Багато нових слів — записуй і вчи!"
  },
  "j.ang": {
    title: "Flash",
    author: "Jenny Dooley",
    publisher: "Express Publishing", nr: "866/2/2018",
    ua_desc: "Підручник з англійської. Якщо щось не зрозуміло польською — подивись англійський переклад, часто легше."
  },
  "muzyka": {
    title: "Lekcja muzyki",
    author: "Monika Gromek, Grażyna Kilbach",
    publisher: "Nowa Era", nr: "852/2/2018",
    ua_desc: "Музика: інструменти, композитори, нотна грамота."
  },
  "plastyka": {
    title: "Do dzieła!",
    author: "Jadwiga Lukas, Krystyna Onak",
    publisher: "Nowa Era", nr: "903/2/2018",
    ua_desc: "Образотворче мистецтво: техніки малювання, історія мистецтва.",
  },
  "historia": {
    title: "Wczoraj i dziś",
    author: "Grzegorz Wojciechowski",
    publisher: "Nowa Era", nr: "877/2/2018",
    ua_desc: "Історія: стародавній світ, Єгипет, Греція, Рим. Багато дат і термінів — вчи словник!"
  },
  "geografia": {
    title: "Planeta Nowa",
    author: "F. Szlajfer, Z. Zaniewicz, T. Rachwał, R. Malarz",
    publisher: "Nowa Era", nr: "906/1/2018",
    ua_desc: "Географія: карти, клімат, материки. Вивчай терміни з карт!"
  },
  "biologia": {
    title: "Puls życia",
    author: "Marian Sęktas, Joanna Stowarz",
    publisher: "Nowa Era", nr: "844/1/2018",
    ua_desc: "Біологія: клітина, рослини, тварини. Багато латинських термінів."
  },
  "matematyka": {
    title: "Matematyka z kluczem (cz. 1 i 2)",
    author: "M. Braun, A. Mańkowska, M. Paszyńska",
    publisher: "Nowa Era", nr: "875/2/2018",
    ua_desc: "Математика: дроби, відсотки, геометрія. Використовуй словники на цьому сайті!",
    links: [{url:"index.html", label_pl:"Słowniki matematyczne", label_ua:"Математичні словники"}]
  },
  "informatyka": {
    title: "Lubię to!",
    author: "Michał Kęska",
    publisher: "Nowa Era", nr: "847/2/2021/z1",
    ua_desc: "Інформатика: робота за комп'ютером, програмування."
  },
  "technika": {
    title: "Jak to działa?",
    author: "Lech Łabecki, Marta Łabecka",
    publisher: "Nowa Era", nr: "295/2/2018",
    ua_desc: "Техніка: конструювання, електрика, безпека."
  }
};

const SUBJECT_PAGE = {
  "j.polski": "subjects/polski.html",
  "j.ang": "subjects/angielski.html",
  "historia": "subjects/historia.html",
  "geografia": "subjects/geografia.html",
  "biologia": "subjects/biologia.html",
  "matematyka": "subjects/matematyka.html",
  "informatyka": "subjects/informatyka.html",
  "technika": "subjects/technika.html",
  "muzyka": "subjects/muzyka.html",
  "plastyka": "subjects/plastyka.html"
};

const ANG_ROOM = "1–18 / 2–19";
const SCHEDULE = [
  // Poniedziałek — dzwonki 1–7
  [
    {s:"psycholog",r:""},{s:"j.polski",r:19},{s:"historia",r:24},{s:"plastyka",r:28},
    {s:"j.ang",r:ANG_ROOM},{s:"matematyka",r:27},{s:"wych-fiz",r:""}, null
  ],
  // Wtorek — dzwonki 1–6
  [
    {s:"informatyka",r:2},{s:"technika",r:28},{s:"matematyka",r:27},
    {s:"muzyka",r:19},{s:"j.polski",r:27},{s:"wych-fiz",r:""}, null, null
  ],
  // Środa — bez 1. lekcji
  [
    null, {s:"geografia",r:16},{s:"j.polski",r:19},{s:"godz.wych",r:27},
    {s:"matematyka",r:27},{s:"j.ang",r:ANG_ROOM},{s:"informatyka",r:1}, null
  ],
  // Czwartek — bez 1. i 6. lekcji; psycholog na 7.
  [
    null, {s:"j.ang",r:ANG_ROOM},{s:"biologia",r:16},{s:"j.polski",r:19},
    {s:"wych-fiz",r:""}, null, {s:"psycholog",r:""}, null
  ],
  // Piątek — dzwonki 1–6
  [
    {s:"religia",r:27},{s:"j.polski",r:24},{s:"matematyka",r:27},
    {s:"historia",r:24},{s:"ed.zdrowotna",r:28},{s:"wych-fiz",r:""}, null, null
  ]
];

window.EduMostSchedule = { TIMES, DAYS, SUBJ, BOOKS, SUBJECT_PAGE, SCHEDULE };
})();
