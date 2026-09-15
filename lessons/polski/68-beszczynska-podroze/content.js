function emT68(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T68 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT68(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T68 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 138  ·  Lekcja 68  ·  podróże",
    promptPlace: "before",
    prompt: {
      pl: "Temat: *Żyć podróżami* — Zofia Beszczyńska, *podróże*. Osoba mówiąca, temat, budowa wiersza (**wers**, **strofa**, **rym**, **rytm**). Polski pierwszy. Dla 🇺🇦: wyjaśnimy terminy i sens „podróży palcem po mapie”.",
      ua: "Тема: *Жити подорожами* — Zofia Beszczyńska, *podróże*. Особа, що говорить, тема, будова вірша (**wers**, **strofa**, **rym**, **rytm**). Польська перша. Пояснимо терміни і сенс «подорожі пальцем по мапі»."
    },
    items: [
      { pl: "wskażę osobę mówiącą i temat wiersza;", ua: "вкажу особу, що говорить, і тему вірша;" },
      { pl: "powiem, dokąd bohaterka „jedzie” w dni tygodnia;", ua: "скажу, куди героїня «їде» в дні тижня;" },
      { pl: "użyję: wers, strofa, rym, rytm · napiszę weekendową kontynuację.", ua: "вживатиму: wers, strofa, rym, rytm · напишу вікендну продовження." }
    ],
    task: {
      id: "t68-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO robisz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО робиш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Czytam wiersz Beszczyńskiej *podróże*", ua: "Читаю вірш Бещинської *podróże*" } },
        { id: "b", label: { pl: "Analizuję osobę mówiącą i budowę (strofy)", ua: "Аналізую особу, що говорить, і будову (строфи)" } },
        { id: "c", label: { pl: "Tylko dziennik Kamińskiego z bieguna (to T67)", ua: "Лише щоденник Камінського з полюса (це T67)" } },
        { id: "d", label: { pl: "Piszę weekendową wyprawę bohaterki", ua: "Пишу вікендну виправу героїні" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "T67 = bieguny. Dziś = wiersz o wyobraźni.",
        ua: "T67 = полюси. Сьогодні = вірш про уяву."
      },
      explanation: {
        pl: "A, B, D. C było w T67.",
        ua: "A, B, D. C було в T67."
      }
    }
  },

  // 2 wstęp
  {
    type: "observe",
    heading: { pl: "Zadanie wstępne · świat wypraw", ua: "Вступне завдання · світ виправ" },
    formula: "s. 138  ·  wstęp",
    promptPlace: "before",
    prompt: {
      pl: "Czym dla Ciebie są podróże? Wybierz jeden temat i poszukaj informacji (z dorosłym).",
      ua: "Що для тебе подорожі? Обери одну тему і пошукай відомості (з дорослим)."
    },
    visual: vizGhT68("t68-zad-wstepne.png", {
      alt: { pl: "Zadanie wstępne: Everest, Antarktyda, rekiny, Amazonia", ua: "Вступне завдання: Еверест, Антарктида, акули, Амазонія" },
      place: "after"
    }),
    items: [
      { pl: "Mount Everest · Antarktyda i pingwiny · nurkowanie z rekinami · Puszcza Amazońska.", ua: "Mount Everest · Антарктида і пінгвіни · дайвінг з акулами · Амазонія." },
      { pl: "Te miejsca wrócą w wierszu — jako **wyobraźnia** bohaterki.", ua: "Ці місця повернуться у вірші — як **уява** героїні." },
      emT68("Podróż może zaczynać się w głowie — od mapy i marzeń")
    ],
    task: {
      id: "t68-s02-wstep",
      type: "single-choice",
      question: {
        pl: "Po co jest zadanie wstępne przed wierszem?",
        ua: "Навіщо вступне завдання перед віршем?"
      },
      options: [
        { id: "a", label: { pl: "żeby poznać miejsca, o których potem „śnijemy” w wierszu", ua: "щоб пізнати місця, про які потім «мріємо» у вірші" } },
        { id: "b", label: { pl: "żeby napisać dyktando ortograficzne o *-bym*", ua: "щоб написати диктант про *-bym*" } },
        { id: "c", label: { pl: "żeby policzyć torosy na biegunie", ua: "щоб полічити тороси на полюсі" } }
      ],
      answer: "a",
      hint: {
        pl: "Everest, rekiny, puszcza, Antarktyda = plan tygodnia w wierszu.",
        ua: "Еверест, акули, хащі, Антарктида = план тижня у вірші."
      },
      explanation: {
        pl: "Wstęp buduje tło: te wyprawy pojawią się w strofach wiersza.",
        ua: "Вступ будує тло: ці виправи з’являться в строфах вірша."
      }
    }
  },

  // 3 czytanie
  {
    type: "observe",
    heading: { pl: "Czytamy · podróże", ua: "Читаємо · podróże" },
    formula: "s. 138  ·  wiersz  ·  Z. Beszczyńska",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj głośno. Skan — kliknij, by powiększyć. Wiersza nie tłumaczymy słowo w słowo.",
      ua: "Прочитай вголос. Скан — клікай, щоб збільшити. Вірш не перекладаємо дослівно."
    },
    items: [
      { pl: "Śledź dni: poniedziałek → … → piątek.", ua: "Слідкуй дні: понеділок → … → п’ятниця." },
      { pl: "Mount Everest — czyt. *Maunt Ewerest*.", ua: "Mount Everest — чит. *Маунт Еверест*." },
      { pl: "Wskazówka: *królową* → osoba mówiąca to **dziewczynka**.", ua: "Підказка: *królową* → особа, що говорить — **дівчинка**." }
    ],
    task: {
      id: "t68-s03-czytanie",
      type: "single-choice",
      question: {
        pl: "Dokąd w piątek szykuje się prawdziwa wyprawa?",
        ua: "Куди в п’ятницю готується справжня виправа?"
      },
      options: [
        { id: "a", label: { pl: "na Mazury (z mamą i tatą)", ua: "на Мазури (з мамою й татом)" } },
        { id: "b", label: { pl: "na Biegun Północny z Kamińskim", ua: "на Північний полюс із Камінським" } },
        { id: "c", label: { pl: "tylko na Mount Everest w godzinę", ua: "лише на Еверест за годину" } }
      ],
      answer: "a",
      hint: {
        pl: "Ostatnia strofa: *chowam mapę* · *plecaki* · *Mazury*.",
        ua: "Остання строфа: *chowam mapę* · *plecaki* · *Mazury*."
      },
      explanation: {
        pl: "Piątek = przygotowania do prawdziwej wyprawy na Mazury.",
        ua: "П’ятниця = підготовка до справжньої виправи на Мазури."
      }
    }
  },

  // 4 kalendarz
  {
    type: "practice",
    heading: { pl: "Kalendarz podróżnika", ua: "Календар мандрівниці" },
    formula: "s. 138  ·  dni tygodnia",
    promptPlace: "before",
    prompt: {
      pl: "Dokąd „jedzie” bohaterka w poszczególne dni? Uzupełnij w zeszycie, potem sprawdź.",
      ua: "Куди «їде» героїня в окремі дні? Доповни в зошиті, потім перевір."
    },
    items: [
      { pl: "W zeszycie: dzień tygodnia → miejsce / zajęcie (z wiersza).", ua: "У зошиті: день тижня → місце / заняття (з вірша)." },
      { pl: "Sprawdź każdą strofę od początku: *w poniedziałek…*", ua: "Перевір кожну строфу з початку: *w poniedziałek…*" },
      { pl: "Klucz par — po *Sprawdź*.", ua: "Ключ пар — після *Sprawdź*." }
    ],
    task: {
      id: "t68-s04-kalendarz",
      type: "multiple-choice",
      question: {
        pl: "Które pary dzień → miejsce są poprawne? Zaznacz wszystkie.",
        ua: "Які пари день → місце правильні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "poniedziałek → Himalaje / Everest", ua: "понеділок → Гімалаї / Еверест" } },
        { id: "b", label: { pl: "środa → puszcza brazylijska", ua: "середа → бразильські хащі" } },
        { id: "c", label: { pl: "czwartek → nurkowanie z rekinami", ua: "четвер → дайвінг з акулами" } },
        { id: "d", label: { pl: "piątek → przygotowania do Mazur", ua: "п’ятниця → підготовка до Мазур" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Rekiny — inny dzień niż czwartek. Czytaj strofy po kolei.",
        ua: "Акули — інший день, ніж четвер. Читай строфи по черзі."
      },
      explanation: {
        pl: "Klucz: poniedziałek → Himalaje/Everest; wtorek → rekiny; środa → puszcza; czwartek → Antarktyda; piątek → Mazury. A, B, D. C fałsz.",
        ua: "Ключ: понеділок → Гімалаї/Еверест; вівторок → акули; середа → хащі; четвер → Антарктида; п’ятниця → Мазури. A, B, D. C хиба."
      }
    }
  },

  // 5 zad 1
  {
    type: "practice",
    heading: { pl: "Zad. 1 · osoba mówiąca i temat", ua: "Завд. 1 · особа й тема" },
    formula: "s. 138  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Odpowiedz na pytania. W uzasadnieniu wykorzystaj fragmenty utworu.",
      ua: "Відповідь на запитання. В обґрунтуванні використай уривки твору."
    },
    visual: vizGhT68("t68-zad1.png", {
      alt: { pl: "Pytania: kim jest osoba mówiąca? Co jest tematem?", ua: "Питання: хто говорить? Яка тема?" },
      place: "after"
    }),
    items: [
      { pl: "Szukaj wskazówek w tekście (formy gramatyczne, mapa, dni).", ua: "Шукай підказки в тексті (граматичні форми, мапа, дні)." },
      { pl: "Uzasadnij cytatem. Klucz — po *Sprawdź*.", ua: "Обґрунтуй цитатою. Ключ — після *Sprawdź*." },
      { pl: "Dla 🇺🇦: *osoba mówiąca* ≈ ліричний суб’єкт / той, хто „говорить” у вірші.", ua: "UA: *osoba mówiąca* ≈ ліричний суб’єкт / той, хто «говорить» у вірші." }
    ],
    task: {
      id: "t68-s05-osoba",
      type: "multiple-choice",
      question: {
        pl: "Co wynika z tekstu? Zaznacz wszystkie poprawne.",
        ua: "Що випливає з тексту? Познач усі правильні."
      },
      options: [
        { id: "a", label: { pl: "osoba mówiąca to dziewczynka (np. *królową*)", ua: "особа, що говорить — дівчинка (напр. *królową*)" } },
        { id: "b", label: { pl: "temat: wyobrażone i (w piątek) realne podróże", ua: "тема: уявні й (у п’ятницю) реальні подорожі" } },
        { id: "c", label: { pl: "osoba mówiąca to Marek Kamiński na biegunie", ua: "особа, що говорить — Marek Kamiński на полюсі" } },
        { id: "d", label: { pl: "bohaterka „podróżuje” też przy mapie / w wyobraźni", ua: "героїня «подорожує» також біля мапи / в уяві" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Szukaj: *królową*, dni tygodnia, *chowam mapę*.",
        ua: "Шукай: *królową*, дні тижня, *chowam mapę*."
      },
      explanation: {
        pl: "A, B, D. Osoba mówiąca = dziewczynka (*królową*); temat = wyobrażone podróże + piątek/Mazury; C = T67.",
        ua: "A, B, D. Особа = дівчинка (*królową*); тема = уявні подорожі + п’ятниця/Мазури; C = T67."
      }
    }
  },

  // 6 ramka concept
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · osoba mówiąca = bohater", ua: "Zapamiętaj · osoba mówiąca = bohater" },
    formula: "s. 138  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "W niektórych utworach osoba mówiąca opisuje własne uczucia i zdarzenia — jest jednocześnie bohaterem.",
      ua: "У деяких творах особа, що говорить, описує власні почуття й події — вона водночас герой."
    },
    visual: vizGhT68("t68-ramka.png", {
      alt: { pl: "Ramka: osoba mówiąca i bohater jednocześnie", ua: "Рамка: особа, що говорить, і герой водночас" },
      place: "after"
    }),
    text: {
      pl: "W niektórych utworach **osoba mówiąca** opisuje swoje uczucia, pragnienia, myśli, przedstawia zdarzenia, w których brała udział. Jest wówczas **jednocześnie osobą mówiącą i bohaterem**. **UA:** ліричний суб’єкт = герой (1. особа: *wyruszam, jestem…*).",
      ua: "У деяких творах **особа, що говорить**, описує свої почуття, бажання, думки, події, в яких брала участь. Тоді вона **водночас особа, що говорить, і герой**. Тут: *wyruszam, jestem…* — 1 особа."
    },
    items: [
      { pl: "Tu: *wyruszam*, *jestem płetwonurkiem*, *chowam mapę* → ja = bohaterka.", ua: "Тут: *wyruszam*, *jestem…*, *chowam mapę* → я = героїня." },
      emT68("1. osoba + własne przygody = mówię o sobie")
    ],
    task: {
      id: "t68-s06-ramka",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „W tym wierszu osoba mówiąca jest jednocześnie bohaterką.”",
        ua: "Чи твердження правильне? «У цьому вірші особа, що говорить, водночас героїня.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Formy 1. osoby + własne wyprawy.",
        ua: "Форми 1 особи + власні виправи."
      },
      explanation: {
        pl: "Prawda — opowiada o sobie w 1. osobie.",
        ua: "Правда — розповідає про себе в 1 особі."
      }
    }
  },

  // 7 zad 2 schemat
  {
    type: "practice",
    heading: { pl: "Zad. 2 · który schemat?", ua: "Завд. 2 · яка схема?" },
    formula: "s. 138  ·  zad. 2",
    promptPlace: "before",
    prompt: {
      pl: "Ustal, który schemat (A, B czy C) odpowiada sytuacji w utworze *podróże*.",
      ua: "Визнач, яка схема (A, B чи C) відповідає ситуації в творі *podróże*."
    },
    visual: vizGhT68("t68-zad2.jpg", {
      alt: { pl: "Trzy schematy A B C: opowieść, realna wyprawa, wyobraźnia przy mapie", ua: "Три схеми A B C: оповідь, реальна виправа, уява біля мапи" },
      place: "after"
    }),
    items: [
      { pl: "A — ktoś opowiada o przeszłej wyprawie (dymki mowy).", ua: "A — хтось розповідає про минулу виправу (хмаринки мови)." },
      { pl: "B — realna wspinaczka w terenie (dymki mowy).", ua: "B — реальне сходження в місцевості." },
      { pl: "C — dziecko przy globusie/mapie + **myślenie** (dymki myśli) → szczyt w wyobraźni.", ua: "C — дитина біля глобуса/мапи + **думки** → вершина в уяві." }
    ],
    task: {
      id: "t68-s07-schemat",
      type: "single-choice",
      question: {
        pl: "Który schemat pasuje do wiersza Beszczyńskiej?",
        ua: "Яка схема пасує до вірша Бещинської?"
      },
      options: [
        { id: "a", label: { pl: "A — opowieść starszego o górach", ua: "A — оповідь старшого про гори" } },
        { id: "b", label: { pl: "B — realna wyprawa wspinaczkowa", ua: "B — реальна альпіністська виправа" } },
        { id: "c", label: { pl: "C — podróż w wyobraźni przy mapie / globusie", ua: "C — подорож в уяві біля мапи / глобуса" } }
      ],
      answer: "c",
      hint: {
        pl: "Szukaj dymków **myśli** i dziewczynki przy mapie.",
        ua: "Шукай хмаринки **думок** і дівчинку біля мапи."
      },
      explanation: {
        pl: "**C** — bohaterka wyobraża sobie wyprawy (mapa, myśli), a w piątek pakuje prawdziwe plecaki.",
        ua: "**C** — героїня уявляє виправи (мапа, думки), а в п’ятницю пакує справжні рюкзаки."
      }
    }
  },

  // 8 terminy
  {
    type: "example",
    heading: { pl: "Budowa wiersza · terminy", ua: "Будова вірша · терміни" },
    formula: "s. 138  ·  wers · strofa · rym · rytm",
    promptPlace: "before",
    prompt: {
      pl: "Naucz się słów — potem policzysz strofy w notatce.",
      ua: "Навчи слова — потім порахуєш строфи в нотатці."
    },
    text: {
      pl: "**Wers** — jeden wierszowy wiersz (linijka). **Strofa** (zwrotka) — grupa wersów. **Rym** — współbrzmienie końcówek. **Rytm** — regularność akcentów / „muzyka” mowy. **UA:** *wers* ≈ рядок; *strofa* ≈ строфа; *rym* ≈ рима; *rytm* ≈ ритм.",
      ua: "**Wers** — один рядок вірша. **Strofa** — група рядків. **Rym** — співзвуччя закінчень. **Rytm** — регулярність наголосів / «музика» мовлення."
    },
    items: [
      { pl: "Policz strofy w wierszu. Sprawdź, czy widać regularne rymy.", ua: "Порахуй строфи у вірші. Перевір, чи видно регулярні рими." },
      { pl: "Rytm tu też budują **dni tygodnia**.", ua: "Ритм тут також будують **дні тижня**." }
    ],
    task: {
      id: "t68-s08-terminy",
      type: "single-choice",
      question: {
        pl: "Co to jest *strofa*?",
        ua: "Що таке *strofa*?"
      },
      options: [
        { id: "a", label: { pl: "grupa wersów (zwrotka)", ua: "група рядків (строфа)" } },
        { id: "b", label: { pl: "tylko tytuł podręcznika", ua: "лише назва підручника" } },
        { id: "c", label: { pl: "prąd morski wywołany wiatrem (*dryf*)", ua: "морська течія від вітру (*dryf*)" } }
      ],
      answer: "a",
      hint: {
        pl: "Nie myl z *dryf* z T67.",
        ua: "Не плутай із *dryf* з T67."
      },
      explanation: {
        pl: "Strofa = zwrotka = grupa wersów.",
        ua: "Strofa = строфа = група рядків."
      }
    }
  },

  // 9 zad 3 notatka
  {
    type: "practice",
    heading: { pl: "Zad. 3 · uzupełnij notatkę", ua: "Завд. 3 · доповни нотатку" },
    formula: "s. 138  ·  zad. 3",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij notatkę na podstawie tekstu. Najpierw sam — klucz po *Sprawdź*.",
      ua: "Доповни нотатку на основі тексту. Спочатку сам — ключ після *Sprawdź*."
    },
    visual: vizGhT68("t68-zad3.png", {
      alt: { pl: "Notatka z lukami: ile strof, dni, podróże, wyprawa", ua: "Нотатка з пропусками: скільки строф, дні, подорожі, виправа" },
      place: "after"
    }),
    items: [
      { pl: "Policz strofy. Co stoi na początku każdej? Co jest w 1–4, a co w ostatniej?", ua: "Порахуй строфи. Що на початку кожної? Що в 1–4, а що в останній?" },
      { pl: "Pełne uzupełnienie luk — po *Sprawdź*.", ua: "Повне доповнення пропусків — після *Sprawdź*." }
    ],
    task: {
      id: "t68-s09-notatka",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienie notatki jest poprawne? Zaznacz wszystkie.",
        ua: "Яке доповнення нотатки правильне? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "ile strof? → pięć (5)", ua: "скільки строф? → п’ять (5)" } },
        { id: "b", label: { pl: "strofy zaczynają się od → informacji o dniu tygodnia", ua: "строфи починаються від → відомості про день тижня" } },
        { id: "c", label: { pl: "cztery pierwsze → opis wyimaginowanych / fantastycznych podróży", ua: "чотири перші → опис уявних / фантастичних подорожей" } },
        { id: "d", label: { pl: "ostatnia → przygotowania do prawdziwej wyprawy (Mazury)", ua: "остання → підготовка до справжньої виправи (Мазури)" } },
        { id: "e", label: { pl: "ile strof? → dwie · ostatnia = lot na Marsa", ua: "скільки строф? → дві · остання = політ на Марс" } }
      ],
      answer: ["a", "b", "c", "d"],
      hint: {
        pl: "Policz zwrotki: pon–pt = 5.",
        ua: "Порахуй строфи: пн–пт = 5."
      },
      explanation: {
        pl: "A–D. Pełna notatka: *Wiersz jest zbudowany z **pięciu** strof, które rozpoczynają się informacjami o **dniu tygodnia**. Cztery pierwsze zwrotki zawierają opis **wyimaginowanych** podróży bohaterki, a w ostatniej przedstawiono przygotowania do **prawdziwej** wyprawy.* E fałsz.",
        ua: "A–D. Повна нотатка: *Вірш складається з **п’яти** строф, що починаються відомостями про **день тижня**. Чотири перші — **уявні** подорожі, остання — підготовка до **справжньої** виправи.* E хиба."
      }
    }
  },

  // 10 zad 4 prezentacja
  {
    type: "practice",
    heading: { pl: "Zad. 4 · prezentacja przygody", ua: "Завд. 4 · презентація пригоди" },
    formula: "s. 138  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "W zespole: w imieniu bohaterki przedstaw jedną z przygód z czterech pierwszych zwrotek. Wykorzystaj zadanie wstępne.",
      ua: "У команді: від імені героїні представ одну з пригод із перших чотирьох строф. Використай вступне завдання."
    },
    visual: vizGhT68("t68-zad4.png", {
      alt: { pl: "Polecenie: prezentacja jednej przygody", ua: "Завдання: презентація однієї пригоди" },
      place: "after"
    }),
    items: [
      { pl: "Wybierz: Everest · rekiny · puszcza · Antarktyda.", ua: "Обери: Еверест · акули · хащі · Антарктида." },
      { pl: "Forma dowolna: slajd, plakat, opowieść 1. os., komiks…", ua: "Форма довільна: слайд, плакат, оповідь 1 ос., комікс…" },
      { pl: "UA: możesz najpierw plan po ukraińsku, prezentuj po polsku.", ua: "UA: можна спочатку план українською, презентуй польською." }
    ],
    task: {
      id: "t68-s10-prezentacja",
      type: "open-answer",
      question: {
        pl: "Napisz 6–10 zdań w 1. osobie: jedna przygoda bohaterki (wybierz dzień). Dodaj 2 fakty z „zadania wstępnego” / własnej wiedzy.",
        ua: "Напиши 6–10 речень у 1 особі: одна пригода героїні (обери день). Додай 2 факти зі «вступного» / власних знань."
      },
      hint: {
        pl: "Wzór: *We wtorek jestem płetwonurkiem… Rekiny… Wiem, że…*",
        ua: "Зразок: *We wtorek jestem płetwonurkiem… Rekiny… Wiem, że…*"
      },
      explanation: {
        pl: "Ocena: 1. os. · wybrany dzień · klimat wiersza · 1–2 fakty poza tekstem.",
        ua: "Оцінка: 1 ос. · обраний день · клімат вірша · 1–2 факти поза текстом."
      }
    }
  },

  // 11 zad 5 weekend
  {
    type: "practice",
    heading: { pl: "Zad. 5 · sobota i niedziela", ua: "Завд. 5 · субота й неділя" },
    formula: "s. 138  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "W imieniu bohatera lirycznego napisz, jak spędził kolejne dni — np. sobotę i niedzielę.",
      ua: "Від імені ліричного героя напиши, як провів наступні дні — напр. суботу й неділю."
    },
    visual: vizGhT68("t68-zad5.png", {
      alt: { pl: "Polecenie: weekend bohaterki", ua: "Завдання: вікенд героїні" },
      place: "after"
    }),
    items: [
      { pl: "Kontynuuj styl: dzień + wyprawa (wyobrażona LUB Mazury).", ua: "Продовжуй стиль: день + виправа (уявна АБО Мазури)." },
      { pl: "Możesz: sobota — … · niedziela — …", ua: "Можна: субота — … · неділя — …" },
      emT68("Praca domowa (wybór): pamiętnik z jednego dnia ALBO weekend 3–4 zdania")
    ],
    task: {
      id: "t68-s11-weekend",
      type: "open-answer",
      question: {
        pl: "Napisz 8–12 zdań: sobota i niedziela bohaterki (jak w wierszu — dni + przygoda).",
        ua: "Напиши 8–12 речень: субота й неділя героїні (як у вірші — дні + пригода)."
      },
      hint: {
        pl: "Np. *w sobotę lecę…* / *a w niedzielę na Mazurach…*",
        ua: "Напр. *w sobotę lecę…* / *a w niedzielę na Mazurach…*"
      },
      explanation: {
        pl: "Ocena: dwa dni · 1. os. · wyobraźnia lub kontynuacja Mazur · klimat wiersza.",
        ua: "Оцінка: два дні · 1 ос. · уява або продовження Мазур · клімат вірша."
      }
    }
  },

  // 12 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T68", ua: "Підсумок · T68" },
    formula: "s. 138  ·  notatka",
    promptPlace: "before",
    prompt: {
      pl: "Czy żeby podróżować, trzeba wychodzić z domu? Zapisz wniosek.",
      ua: "Чи щоб подорожувати, треба виходити з дому? Запиши висновок."
    },
    items: [
      { pl: "Osoba mówiąca = dziewczynka; jednocześnie bohaterka.", ua: "Особа, що говорить = дівчинка; водночас героїня." },
      { pl: "Sytuacja: podróże w wyobraźni (mapa) + piątek = Mazury.", ua: "Ситуація: подорожі в уяві (мапа) + п’ятниця = Мазури." },
      { pl: "Budowa: 5 strof · dni tygodnia · terminy: wers, strofa, rym, rytm.", ua: "Будова: 5 строф · дні тижня · терміни: wers, strofa, rym, rytm." },
      { pl: "Myśl: wyobraźnia pozwala zwiedzać świat bez wychodzenia z pokoju.", ua: "Думка: уява дозволяє мандрувати світом, не виходячи з кімнати." },
      emT68("Schemat sytuacji wiersza = C (myśli + mapa)")
    ],
    task: {
      id: "t68-s12-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Wiersz ma pięć strof; cztery pierwsze to podróże wyobrażone, a piątek — przygotowania do prawdziwej wyprawy.”",
        ua: "Чи твердження правильне? «Вірш має п’ять строф; чотири перші — уявні подорожі, а п’ятниця — підготовка до справжньої виправи.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Zad. 3 + ostatnia strofa o Mazurach.",
        ua: "Завд. 3 + остання строфа про Мазури."
      },
      explanation: {
        pl: "Prawda — to rdzeń notatki z lekcji.",
        ua: "Правда — це ядро нотатки з уроку."
      }
    }
  }
]};
