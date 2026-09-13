function em(text) {
  return { text: text, emphasis: true };
}

var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L08_Good_Students/images/";

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
        { pl: "Dopasujesz nagłówki Flash do akapitów: Look after yourself / Watch the clock / Good relationships.", ua: "Добереш заголовки: Look after yourself / Watch the clock / Good relationships." },
        { pl: "Użyjesz: pay attention, realise, set a limit, waste, respect, polite, raise your hand, treat.", ua: "Ужиєш: pay attention, realise, set a limit, waste, respect, polite, raise your hand, treat." },
        { pl: "Powiesz, jak być lepszym uczniem — to CLIL Citizenship, nie nowa gramatyka.", ua: "Скажеш, як бути кращим учнем — CLIL Citizenship." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa na dziś", ua: "Слова на сьогодні" },
      rows: [
        { pl: "pay attention", ua: "uważać na lekcji · уважно слухати" },
        { pl: "realise", ua: "uświadomić sobie · усвідомити" },
        { pl: "set a limit", ua: "ustalić limit · встановити ліміт" },
        { pl: "waste (time)", ua: "marnować (czas) · марнувати" },
        { pl: "respect", ua: "szanować · поважати" },
        { pl: "be polite", ua: "być grzecznym · бути ввічливим" },
        { pl: "raise your hand", ua: "podnieść rękę · підняти руку" },
        { pl: "treat", ua: "traktować · ставитися" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "CLIL · Citizenship", ua: "CLIL · Citizenship" },
      visual: vizGh("l08-good-students.png", {
        alt: { pl: "Klasa: dziecko podnosi rękę, inni słuchają", ua: "Клас: дитина піднімає руку" },
        title: { pl: "Good Students", ua: "Good Students" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 szkolnej sali, 11-latek podnosi rękę, nauczyciel kiwa, inni słuchają. Etykieta EN: raise your hand. Przyjazny nastrój, bez logotypów." }
      }),
      text: {
        pl: [
          "To **CLIL (Citizenship)** z modułu 1 — osobna lekcja. Flash Time (mapa idealnej szkoły) jest **następna**.",
          "Wiesz już: słuchaj nauczyciela, rób notatki, odrabiaj lekcje. Tekst *Good Students* dodaje trzy bloki."
        ],
        ua: [
          "Це **CLIL (Citizenship)**. Flash Time — **наступний** урок.",
          "Текст *Good Students* має три блоки."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Trzy nagłówki", ua: "Три заголовки" },
      visual: vizGh("l08-habits.png", {
        alt: { pl: "Trzy karty: Look after yourself, Watch the clock, Good relationships", ua: "Три картки заголовків" },
        title: { pl: "Look after yourself · Watch the clock · Good relationships", ua: "Look after yourself · Watch the clock · Good relationships" },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy karty EN: C Look after yourself (śniadanie, sen); A Watch the clock (odrobina, limit 30 min social media); B Good relationships (raise your hand, be polite). Bez logotypów." }
      }),
      text: {
        pl: [
          ["**Look after yourself.** Nie ", em("pay attention"), " gdy jesteś głodny albo śpiący. Jedz śniadanie, lunch i kolację (zdrowo). Śpij wystarczająco."],
          ["**Watch the clock.** Czasem ", em("realise"), " że jest 23:00, a zadanie jeszcze niegotowe. Potrzebujesz rutyny: po szkole najpierw homework. Nie ", em("waste"), " czasu w social media — ", em("set a 30 minute limit"), "."],
          ["**Good relationships.** ", em("Respect"), " nauczycieli. Bądź ", em("polite"), ". ", em("Raise your hand"), " zanim powiesz. Słuchaj też innych uczniów. ", em("Treat"), " ludzi tak, jak chcesz, żeby oni traktowali ciebie."]
        ],
        ua: [
          "**Look after yourself.** Сніданок, обід, вечеря, сон — інакше не вийде pay attention.",
          "**Watch the clock.** Рутина: спочатку homework. Не waste time — set a 30 minute limit.",
          "**Good relationships.** Respect, polite, raise your hand, treat others well."
        ]
      },
      task: {
        id: "eng-clil-e1",
        type: "single-choice",
        question: { pl: "Który nagłówek pasuje do: „Don’t waste time on social media — set a 30 minute limit”?", ua: "Який заголовок пасує до ліміту 30 хв у соцмережах?" },
        options: [
          { id: "a", label: { pl: "Look after yourself", ua: "Look after yourself" } },
          { id: "b", label: { pl: "Watch the clock", ua: "Watch the clock" } },
          { id: "c", label: { pl: "Good relationships", ua: "Good relationships" } }
        ],
        answer: "b",
        explanation: { pl: "Watch the clock = rutyna i czas. Look after yourself = jedzenie i sen. Good relationships = szacunek, ręka do góry.", ua: "Watch the clock = час і рутина." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng-clil-c1",
        type: "single-choice",
        question: { pl: "Co robisz, zanim odpowiesz na lekcji?", ua: "Що робиш, перш ніж відповісти?" },
        options: [
          { id: "a", label: { pl: "I shout the answer.", ua: "I shout the answer." } },
          { id: "b", label: { pl: "I raise my hand.", ua: "I raise my hand." } },
          { id: "c", label: { pl: "I waste time on my phone.", ua: "I waste time on my phone." } }
        ],
        answer: "b",
        explanation: { pl: "Raise your hand. To Good relationships.", ua: "Raise your hand." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng-clil-c2",
        type: "true-false",
        question: { pl: "Waste time znaczy: dobrze wykorzystać czas.", ua: "Waste time означає: добре використати час." },
        answer: false,
        explanation: { pl: "Waste = marnować. Przeciwieństwo: use time well / set a limit.", ua: "Waste = марнувати." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdź", ua: "Перевір" },
      task: {
        id: "eng-clil-c3",
        type: "input-text",
        question: { pl: "Dokończ jednym słowem: Raise your ____.", ua: "Докінчи одним словом: Raise your ____." },
        answer: "hand",
        explanation: { pl: "Raise your hand.", ua: "Raise your hand." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      text: {
        pl: [
          "Look after yourself — jedzenie i sen, żeby pay attention.",
          "Watch the clock — rutyna, nie waste time, set a 30 minute limit.",
          "Good relationships — respect, be polite, raise your hand, treat others well."
        ],
        ua: [
          "Look after yourself · Watch the clock · Good relationships.",
          "pay attention, set a limit, raise your hand, treat."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Na głos", ua: "Уголос" },
      text: {
        pl: [
          "How can this help you be a better student? 3 zdania z tekstu (to, nad czym chcesz pracować).",
          "Następna lekcja: **Flash Time · My perfect school** (mapa + prezentacja + Confucius)."
        ],
        ua: [
          "3 речення: як бути кращим учнем.",
          "Далі: **Flash Time · My perfect school**."
        ]
      }
    }
  ]
};
