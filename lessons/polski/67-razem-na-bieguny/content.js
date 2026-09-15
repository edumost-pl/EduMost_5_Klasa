function emT67(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T67 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT67(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T67 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 134–136  ·  Lekcja 67  ·  bieguny",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Pokonać własne słabości* — Marek Kamiński, *Razem na bieguny*. Relacja / **dziennik**, bohaterowie, cechy charakteru, własny fragment dziennika. Polski pierwszy. Dla 🇺🇦: wyjaśnimy trudne słowa i różnicę *dziennik* / *pamiętnik*.",
      ua: "Тема: *Подолати власні слабкості* — Marek Kamiński, *Razem na bieguny*. Реляція / **щоденник (dziennik)**, герої, риси характеру, власний уривок щоденника. Польська перша. Пояснимо складні слова і різницю *dziennik* / *pamiętnik*."
    },
    items: [
      { pl: "zrelacjonuję wyprawę na Biegun Północny;", ua: "перекажу виправу на Північний полюс;" },
      { pl: "ocenię bohaterów i wskażę cechy charakteru;", ua: "оціню героїв і вкажу риси характеру;" },
      { pl: "napiszę fragment dziennika wyprawy.", ua: "напишу уривок щоденника виправи." }
    ],
    task: {
      id: "t67-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam zapiski z wyprawy Kamińskiego", ua: "Читаю записи з виправи Камінського" } },
        { id: "b", label: { pl: "Uzupełniam schemat i rozróżniam dziennik/pamiętnik", ua: "Доповнюю схему і розрізняю dziennik/pamiętnik" } },
        { id: "c", label: { pl: "Tylko ortografię cząstek *-bym/-by* (to T66)", ua: "Лише орфографію часток *-bym/-by* (це T66)" } },
        { id: "d", label: { pl: "Piszę własny fragment dziennika", ua: "Пишу власний уривок щоденника" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T66 = gramatyka *by*. Dziś = lektura + dziennik.",
        ua: "T66 = граматика *by*. Сьогодні = лектура + щоденник."
      },
      explanation: {
        pl: "A, B, D. C było w T66.",
        ua: "A, B, D. C було в T66."
      }
    }
  },

  // 2 intro characters
  {
    type: "observe",
    heading: { pl: "Kim są bohaterowie?", ua: "Хто такі герої?" },
    formula: "s. 134  ·  wstęp",
    promptPlace: "before",
    prompt: {
      pl: "Zanim czytasz — kto, dokąd, po co? Burza mózgów: czym jest **słabość**?",
      ua: "Перш ніж читати — хто, куди, навіщо? Мозковий штурм: що таке **слабкість (słabość)**?"
    },
    items: [
      { pl: "**Marek Kamiński** — polski polarnik; pierwszy, który w jednym roku zdobył oba bieguny.", ua: "**Marek Kamiński** — польський полярник; перший, хто за один рік здобув обидва полюси." },
      { pl: "**Jan (Jaś / Jasiek) Mela** — wówczas 16 lat; po porażeniu prądem stracił rękę i nogę.", ua: "**Jan (Jaś / Jasiek) Mela** — тоді 16 років; після удару струмом втратив руку й ногу." },
      { pl: "2004: razem idą na **Biegun Północny** (UA: Північний полюс).", ua: "2004: разом ідуть на **Північний полюс**." },
      emT67("Słabość ≠ koniec drogi · siła woli + wsparcie drugiej osoby")
    ],
    task: {
      id: "t67-s02-kto",
      type: "single-choice",
      question: {
        pl: "Kim jest Jaś Mela w tej historii?",
        ua: "Хто такий Ясь Мела в цій історії?"
      },
      options: [
        { id: "a", label: { pl: "młody uczestnik wyprawy z niepełnosprawnością", ua: "молодий учасник виправи з інвалідністю" } },
        { id: "b", label: { pl: "nauczyciel muzyki z komiksu o gitarze", ua: "учитель музики з коміксу про гітару" } },
        { id: "c", label: { pl: "król Myken z mitu o Heraklesie", ua: "цар Мікен із міфу про Геракла" } }
      ],
      answer: "a",
      hint: {
        pl: "Szary wstęp podręcznika, s. 134.",
        ua: "Сірий вступ підручника, с. 134."
      },
      explanation: {
        pl: "Jaś stracił rękę i nogę, a mimo to idzie na biegun z Kamińskim.",
        ua: "Ясь втратив руку й ногу, а все одно йде на полюс із Камінським."
      }
    }
  },

  // 3 reading
  {
    type: "observe",
    heading: { pl: "Czytamy · Razem na bieguny", ua: "Читаємо · Razem na bieguny" },
    formula: "s. 134–136  ·  fragment  ·  M. Kamiński",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj zapiski. Trzy skany — klikaj, by powiększyć. Tekstu nie tłumaczymy słowo w słowo.",
      ua: "Прочитай записи. Три скани — клікай, щоб збільшити. Текст не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź daty: 8 → 11 → 16 → 18 → 21 → 22 → 24 kwietnia 2004.", ua: "Слідкуй дати: 8 → 11 → 16 → 18 → 21 → 22 → 24 квітня 2004." },
      { pl: "Trudności: mróz, wiatr, zmęczenie, sprzęt, *torosy*, szczeliny, *dryf*.", ua: "Труднощі: мороз, вітер, втома, спорядження, *torosy*, щілини, *dryf*." },
      { pl: "Finał: razem docierają do bieguna — „Razem”.", ua: "Фінал: разом доходять до полюса — «Razem»." }
    ],
    task: {
      id: "t67-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Dokąd zmierzają podróżnicy w tych zapiskach?",
        ua: "Куди прямують мандрівники в цих записах?"
      },
      options: [
        { id: "a", label: { pl: "na Biegun Północny", ua: "на Північний полюс" } },
        { id: "b", label: { pl: "do Zakazanego Miasta w Pekinie", ua: "до Забороненого міста в Пекіні" } },
        { id: "c", label: { pl: "na obóz tenisa Roberta", ua: "на тенісний табір Роберта" } }
      ],
      answer: "a",
      hint: {
        pl: "Tytuł + daty kwietnia 2004 + kilometr do bieguna.",
        ua: "Заголовок + дати квітня 2004 + кілометри до полюса."
      },
      explanation: {
        pl: "Wyprawa polarna — Biegun Północny, kwiecień 2004.",
        ua: "Полярна виправа — Північний полюс, квітень 2004."
      }
    }
  },

  // 4 glosses
  {
    type: "example",
    heading: { pl: "Słownictwo z ramki · glosy", ua: "Словник з рамки · глоси" },
    formula: "s. 134–136  ·  margines",
    promptPlace: "before",
    prompt: {
      pl: "Trudne wyrazy z podręcznika — ucz się z UA.",
      ua: "Складні слова з підручника — вчи з UA."
    },
    text: {
      pl: "**paraskrzydła** — konstrukcja jak spadochron, pomaga w marszu przy wietrze. **liofilizat** — lekka, suszona żywność w proszku/kawałkach. **wiązanie** — łączy narty z butem. **fiord** — wąska, głęboka zatoka ze stromymi brzegami. **toros** — miejsce, gdzie piętrzy się lód z pękającej kry. **dryf** — prąd morski wywołany wiatrem (może cofać wyprawę).",
      ua: "**paraskrzydła** — як парашут/кайт, допомагає йти при вітрі. **liofilizat** — легка сушена їжа. **wiązanie** — кріплення лижі до черевика. **fiord** — вузька глибока затока зі стрімкими берегами. **toros** — торос: купи льоду з потрісканої криги. **dryf** — дрейф: морська течія від вітру (може відкидати назад)."
    },
    items: [
      { pl: "*szczelina* — pęknięcie w lodzie · *kra* — pływająca tafla lodu.", ua: "*szczelina* — тріщина в льоду · *kra* — плавуча крига." },
      { pl: "*samozaparcie* — upór, wytrwałość mimo trudności.", ua: "*samozaparcie* — завзятість, витривалість попри труднощі." }
    ],
    task: {
      id: "t67-s04-glosy",
      type: "single-choice",
      question: {
        pl: "Co oznacza *dryf* w tekście Kamińskiego?",
        ua: "Що означає *dryf* у тексті Камінського?"
      },
      options: [
        { id: "a", label: { pl: "prąd wywołany wiatrem, który może cofać ich od bieguna", ua: "течія від вітру, що може відкидати їх від полюса" } },
        { id: "b", label: { pl: "rodzaj liofilizatu (jedzenie)", ua: "вид ліофілізату (їжа)" } },
        { id: "c", label: { pl: "nazwę namiotu Wojtusia", ua: "назву намету Войтуся" } }
      ],
      answer: "a",
      hint: {
        pl: "Margines + wpis z 22 kwietnia.",
        ua: "Поле + запис від 22 квітня."
      },
      explanation: {
        pl: "Dryf odpycha wyprawę — stąd rozpacz i walka o cel.",
        ua: "Дрейф відштовхує виправу — звідси розпач і боротьба за мету."
      }
    }
  },

  // 5 zad 1 schemat
  {
    type: "practice",
    heading: { pl: "Zad. 1a · zapiski z wyprawy", ua: "Завд. 1a · записи з виправи" },
    formula: "s. 136  ·  schemat",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij w zeszycie schemat. Najpierw sam — klucz po *Sprawdź*.",
      ua: "Доповни в зошиті схему. Спочатку сам — ключ після *Sprawdź*."
    },
    visual: vizGhT67("t67-zad1.jpg", {
      alt: { pl: "Schemat: Zapiski z wyprawy", ua: "Схема: Записи з виправи" },
      place: "after"
    }),
    items: [
      { pl: "Dokąd? · Autor? · Kto opowiada? · Bohaterowie? · Czas zdarzeń? · Czas zapisu? · Treść?", ua: "Куди? · Автор? · Хто розповідає? · Герої? · Час подій? · Час запису? · Зміст?" },
      { pl: "Dla 🇺🇦: *osoba opowiadająca* = narrator / той, хто веде щоденник.", ua: "UA: *osoba opowiadająca* = оповідач / той, хто веде щоденник." }
    ],
    task: {
      id: "t67-s05-schemat",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienie schematu jest poprawne? Zaznacz wszystkie.",
        ua: "Яке доповнення схеми правильне? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "dokąd: Biegun Północny · autor/opowiadający: Marek Kamiński", ua: "куди: Північний полюс · автор/оповідач: Marek Kamiński" } },
        { id: "b", label: { pl: "bohaterowie: Kamiński, Jaś Mela (i towarzysze) · czas: kwiecień 2004", ua: "герої: Камінський, Ясь Мела · час: квітень 2004" } },
        { id: "c", label: { pl: "czas zapisu = wiele lat po wyprawie, bez dat dziennych", ua: "час запису = багато років після виправи, без денних дат" } },
        { id: "d", label: { pl: "treść: trudności drogi, sprzęt, emocje, dojście do bieguna", ua: "зміст: труднощі шляху, спорядження, емоції, досягнення полюса" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Daty dzień po dniu → zapis blisko zdarzeń.",
        ua: "Дати день за днем → запис близько до подій."
      },
      explanation: {
        pl: "A, B, D. C fałsz — są dokładne daty (np. 8, 11, 24 IV 2004).",
        ua: "A, B, D. C хиба — є точні дати (напр. 8, 11, 24 IV 2004)."
      }
    }
  },

  // 6 dziennik vs pamietnik
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · dziennik czy pamiętnik?", ua: "Zapamiętaj · dziennik чи pamiętnik?" },
    formula: "s. 136  ·  zad. 1b",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz poprawne określenie i uzupełnij wniosek.",
      ua: "Обери правильне поняття і доповни висновок."
    },
    text: {
      pl: "**Dziennik** — zapiski prowadzone **na bieżąco**, zwykle z datami, blisko zdarzeń (jak tu: *Czwartek 8 kwietnia 2004*). **Pamiętnik** — wspomnienie z **dystansem czasu**, często układane później. **UA:** *dziennik* ≈ щоденник; *pamiętnik* ≈ спогади / мемуари.",
      ua: "**Dziennik** — записи **по ходу** подій, зазвичай із датами. **Pamiętnik** — спогад із **дистанцією в часі**. Тут — **dziennik**, бо є точні дати й запис «з дороги»."
    },
    items: [
      { pl: "Tu: daty + relacja z marszu = **dziennik**.", ua: "Тут: дати + реляція з маршу = **dziennik**." },
      { pl: "Porównaj z T59 (*pamiętnik* Roberta) — inny dystans czasowy.", ua: "Порівняй з T59 (*pamiętnik* Роберта) — інша дистанція в часі." }
    ],
    task: {
      id: "t67-s06-gatunek",
      type: "single-choice",
      question: {
        pl: "Zapisane informacje z wyprawy na biegun to…",
        ua: "Записані відомості з виправи на полюс — це…"
      },
      options: [
        { id: "a", label: { pl: "dziennik, bo datowane zapiski z bliska zdarzeń", ua: "dziennik, бо датовані записи близько до подій" } },
        { id: "b", label: { pl: "pamiętnik, bo napisane dopiero po wielu latach bez dat", ua: "pamiętnik, бо написані лише через багато років без дат" } },
        { id: "c", label: { pl: "bajka o smoku i Wielkim Yu", ua: "казка про дракона і Великого Юя" } }
      ],
      answer: "a",
      hint: {
        pl: "Patrz nagłówki: *Czwartek 8 kwietnia…*",
        ua: "Дивись заголовки: *Czwartek 8 kwietnia…*"
      },
      explanation: {
        pl: "To **dziennik**: daty, bieżąca relacja, emocje „tu i teraz”.",
        ua: "Це **dziennik**: дати, поточна реляція, емоції «тут і зараз»."
      }
    }
  },

  // 7 zad 2 tabela
  {
    type: "practice",
    heading: { pl: "Zad. 2 · co pomaga / co utrudnia", ua: "Завд. 2 · що допомагає / що заважає" },
    formula: "s. 136  ·  tabela",
    promptPlace: "before",
    prompt: {
      pl: "Przedyskutujcie cechy, siłę, motywację. Zapiszcie w tabeli. Odwołajcie się do tekstu.",
      ua: "Обговоріть риси, силу, мотивацію. Запишіть у таблиці. Посилайтесь на текст."
    },
    visual: vizGhT67("t67-zad2.png", {
      alt: { pl: "Tabela: pomaga / utrudnia osiągnąć cel", ua: "Таблиця: допомагає / ускладнює досягти мети" },
      place: "after"
    }),
    items: [
      { pl: "Pomaga: wytrwałość, zaufanie, wsparcie, cel, humor Jaśka (rzeźby z lodu)…", ua: "Допомагає: витривалість, довіра, підтримка, мета, гумор Яська…" },
      { pl: "Utrudnia: mróz, wiatr, dryf, torosy, strach, ból, awarie wiązań…", ua: "Заважає: мороз, вітер, дрейф, тороси, страх, біль, поломки…" },
      { pl: "Pełne przykłady — po *Sprawdź*; najpierw własna tabela.", ua: "Повні приклади — після *Sprawdź*; спочатку своя таблиця." }
    ],
    task: {
      id: "t67-s07-tabela",
      type: "multiple-choice",
      question: {
        pl: "Które pary są zgodne z tekstem? Zaznacz wszystkie.",
        ua: "Які пари відповідають тексту? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "pomaga: samozaparcie, wzajemne wsparcie, jasny cel", ua: "допомагає: завзятість, взаємна підтримка, чітка мета" } },
        { id: "b", label: { pl: "utrudnia: dryf, szczeliny, zmęczenie, mróz", ua: "заважає: дрейф, тріщини, втома, мороз" } },
        { id: "c", label: { pl: "pomaga: poddanie się po pierwszej szczelinie", ua: "допомагає: здатися після першої тріщини" } },
        { id: "d", label: { pl: "pomaga: wiara, że „razem” pokonają bariery", ua: "допомагає: віра, що «разом» здолають бар’єри" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Finał: *Razem* — energia pokonała bariery.",
        ua: "Фінал: *Razem* — енергія здолала бар’єри."
      },
      explanation: {
        pl: "A, B, D. C przeczy mitowi wyprawy — nie poddali się.",
        ua: "A, B, D. C суперечить виправі — вони не здалися."
      }
    }
  },

  // 8 Hillary
  {
    type: "practice",
    heading: { pl: "Zad. 3 · głos Hillary’ego", ua: "Завд. 3 · голос Гілларі" },
    formula: "s. 136  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj opinię Edmunda Hillary’ego (czyt. Hilarego). Potem oceń udział Jasia.",
      ua: "Прочитай думку Едмунда Гілларі. Потім оціни участь Яся."
    },
    visual: vizGhT67("t67-zad3.png", {
      alt: { pl: "Wypowiedź Hillary’ego o wyprawie", ua: "Висловлювання Гілларі про виправу" },
      place: "after"
    }),
    items: [
      { pl: "Hillary: *samozaparcie i odwaga* · *szaleństwo godne szacunku*.", ua: "Гілларі: *завзятість і відвага* · *божевілля, гідне поваги*." },
      { pl: "Dla 🇺🇦: Hillary — himalaista, zdobywca Everestu (autorytet).", ua: "UA: Гілларі — гімалаїст, підкорювач Евересту (авторитет)." }
    ],
    task: {
      id: "t67-s08-hillary",
      type: "open-answer",
      question: {
        pl: "Napisz 4–6 zdań: jak TY oceniasz udział Jasia Meli? Odwołaj się do Hillary’ego LUB do tekstu Kamińskiego.",
        ua: "Напиши 4–6 речень: як ТИ оцінюєш участь Яся Мели? Посилайся на Гілларі АБО на текст Камінського."
      },
      hint: {
        pl: "Możesz: podziw · ryzyko · inspiracja · „razem” · pokonanie słabości.",
        ua: "Можна: захоплення · ризик · натхнення · «разом» · подолання слабкості."
      },
      explanation: {
        pl: "Ocena: własne zdanie + 1–2 argumenty z tekstu/cytatu (nie tylko „fajnie”).",
        ua: "Оцінка: власна думка + 1–2 аргументи з тексту/цитати."
      }
    }
  },

  // 9 mind map / refleksja
  {
    type: "practice",
    heading: { pl: "Jak pokonać własne słabości?", ua: "Як подолати власні слабкості?" },
    formula: "s. 134  ·  mapa myśli",
    promptPlace: "before",
    prompt: {
      pl: "Bieguny to miejsca na mapie — i symbole celów. Dokończ myśl z lekcji.",
      ua: "Полюси — місця на мапі — і символи цілей. Докінчи думку з уроку."
    },
    items: [
      { pl: "Krok po kroku · wsparcie drugiej osoby · nie poddawać się po porażce.", ua: "Крок за кроком · підтримка іншої людини · не здаватися після невдачі." },
      { pl: "„Najważniejsza wyprawa — w głąb samego siebie.”", ua: "«Найважливіша виправа — у глиб самого себе.»" }
    ],
    task: {
      id: "t67-s09-refleksja",
      type: "open-answer",
      question: {
        pl: "Dokończ: „Z dzisiejszej lekcji zapamiętam, że siła człowieka tkwi w…” (3–5 zdań + przykład z tekstu).",
        ua: "Докінчи: «З сьогоднішнього уроку запам’ятаю, що сила людини — у…» (3–5 речень + приклад із тексту)."
      },
      hint: {
        pl: "Np. w wytrwałości, w przyjaźni, w wierze w cel…",
        ua: "Напр. у витривалості, у дружбі, у вірі в мету…"
      },
      explanation: {
        pl: "Sprawdź: ogólna myśl + konkret z wyprawy (szczelina, dryf, „razem”).",
        ua: "Перевір: загальна думка + конкретика з виправи (тріщина, дрейф, «razem»)."
      }
    }
  },

  // 10 zad 4 diary
  {
    type: "practice",
    heading: { pl: "Zad. 4 · fragment dziennika", ua: "Завд. 4 · уривок щоденника" },
    formula: "s. 136  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "*Dotarliśmy do…* Napisz fragment dziennika (prawdziwa lub wymyślona wyprawa).",
      ua: "*Dotarliśmy do…* Напиши уривок щоденника (справжня або вигадана виправа)."
    },
    visual: vizGhT67("t67-zad4.png", {
      alt: { pl: "Polecenie: fragment dziennika wyprawy", ua: "Завдання: уривок щоденника виправи" },
      place: "after"
    }),
    items: [
      { pl: "Musi być: cel · czas · uczestnicy · krajobraz · pogoda.", ua: "Має бути: мета · час · учасники · краєвид · погода." },
      { pl: "Forma: data + 1. osoba (*Dotarliśmy… / Widzę…*).", ua: "Форма: дата + 1 особа (*Dotarliśmy… / Widzę…*)." },
      { pl: "UA: pisz po polsku; możesz najpierw ułożyć plan UA.", ua: "UA: пиши польською; можна спочатку скласти план українською." }
    ],
    task: {
      id: "t67-s10-dziennik",
      type: "open-answer",
      question: {
        pl: "Napisz 8–12 zdań dziennika od *Dotarliśmy do…* (z datą).",
        ua: "Напиши 8–12 речень щоденника від *Dotarliśmy do…* (з датою)."
      },
      hint: {
        pl: "Wzór: *Sobota, 12 maja. Dotarliśmy do… Wiatr…*",
        ua: "Зразок: *Sobota, 12 maja. Dotarliśmy do… Wiatr…*"
      },
      explanation: {
        pl: "Ocena: data · 1. os. · cel/czas/ludzie/krajobraz/pogoda · klimat dziennika.",
        ua: "Оцінка: дата · 1 ос. · мета/час/люди/краєвид/погода · стиль щоденника."
      }
    }
  },

  // 11 zad 5 fundacja
  {
    type: "practice",
    heading: { pl: "Zad. 5 · fundacja Poza Horyzonty", ua: "Завд. 5 · фонд Poza Horyzonty" },
    formula: "s. 136  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Dowiedz się, czym zajmuje się fundacja Jasia Meli. Tu — krótka ściągawka + Twoje zdanie.",
      ua: "Дізнайся, чим займається фонд Яся Мели. Тут — коротка шпаргалка + твоя думка."
    },
    visual: vizGhT67("t67-zad5.png", {
      alt: { pl: "Zad. 5: fundacja Poza Horyzonty", ua: "Завд. 5: фонд Poza Horyzonty" },
      place: "after"
    }),
    items: [
      { pl: "**Poza Horyzonty** (UA: «За горизонти») — fundacja założona przez Jasia Melę.", ua: "**Poza Horyzonty** («За горизонти») — фонд, заснований Ясем Мелою." },
      { pl: "Cel: wsparcie osób z niepełnosprawnością, wyprawy, motywacja do przekraczania barier.", ua: "Мета: підтримка людей з інвалідністю, виправи, мотивація долати бар’єри." },
      { pl: "Sprawdź aktualne projekty w internecie (z dorosłym).", ua: "Перевір актуальні проєкти в інтернеті (з дорослим)." }
    ],
    task: {
      id: "t67-s11-fundacja",
      type: "open-answer",
      question: {
        pl: "Napisz 4–5 zdań: czym zajmuje się fundacja i dlaczego postawa Kamińskiego i Meli może inspirować rówieśników.",
        ua: "Напиши 4–5 речень: чим займається фонд і чому постава Камінського й Мели може надихати однолітків."
      },
      hint: {
        pl: "Połącz: fundacja + lekcja o słabościach + „razem”.",
        ua: "Поєднай: фонд + урок про слабкості + «razem»."
      },
      explanation: {
        pl: "Ocena: sens fundacji · link do tematu lekcji · własny wniosek.",
        ua: "Оцінка: сенс фонду · зв’язок із темою уроку · власний висновок."
      }
    }
  },

  // 12 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T67", ua: "Підсумок · T67" },
    formula: "s. 134–136  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Zapamiętaj: dziennik wyprawy · cechy bohaterów · biegun jako cel i symbol.",
      ua: "Запам’ятай: щоденник виправи · риси героїв · полюс як мета і символ."
    },
    items: [
      { pl: "Kamiński + Mela → Biegun Północny 2004 → **razem**.", ua: "Камінський + Мела → Північний полюс 2004 → **разом**." },
      { pl: "Gatunek zapisków: **dziennik**.", ua: "Жанр записів: **dziennik**." },
      { pl: "Siła = wytrwałość + wsparcie + cel mimo słabości.", ua: "Сила = витривалість + підтримка + мета попри слабкість." },
      emT67("Praca domowa: 4–5 zdań o inspiracji dla rówieśników")
    ],
    task: {
      id: "t67-s12-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Zapiski Kamińskiego z datami dnia to dziennik, nie pamiętnik.”",
        ua: "Чи твердження правильне? «Записи Камінського з датами дня — це dziennik, не pamiętnik.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Zad. 1b + daty w tekście.",
        ua: "Завд. 1b + дати в тексті."
      },
      explanation: {
        pl: "Prawda — bieżące, datowane zapiski = dziennik.",
        ua: "Правда — поточні датовані записи = dziennik."
      }
    }
  }
]};
