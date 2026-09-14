function emT48(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T48 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT48(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T48 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1 — goal
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 87  ·  Lekcja 48  ·  środki i głos",
    promptPlace: "before",
    prompt: {
      pl: "Kontynuacja tematu 47. Ten sam fragment burzy z *Pana Tadeusza*. Dziś: *jak* poeta maluje burzę — zmysły (wzrok, słuch, dotyk), środki stylistyczne, głosowa interpretacja i pomysł na adaptację (film / radio / balet). Polski pierwszy. Włącz 🇺🇦.",
      ua: "Продовження теми 47. Той самий уривок бурі з *Пана Тадеуша*. Сьогодні: *як* поет малює бурю — органи чуття (зір, слух, дотик), стилістичні засоби, голосова інтерпретація і ідея адаптації (фільм / радіо / балет). Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "wskażę obrazy poetyckie działające na wzrok, słuch i dotyk;", ua: "вкажу поетичні образи для зору, слуху і дотику;" },
      { pl: "nazwę środki: porównanie, personifikacja, dźwiękonaśladownictwo;", ua: "назву засоби: порівняння, персоніфікація, звуконаслідування;" },
      { pl: "przygotuję głosową interpretację fragmentu;", ua: "підготую голосову інтерпретацію уривка;" },
      { pl: "powiem, jak burzę można pokazać w filmie, radiu lub balecie.", ua: "скажу, як бурю можна показати у фільмі, на радіо чи в балеті." }
    ],
    task: {
      id: "t48-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Wskazać cytaty do wzroku, słuchu i dotyku.", ua: "Вказати цитати для зору, слуху і дотику." } },
        { id: "b", label: { pl: "Nazwać środki stylistyczne w fragmencie.", ua: "Назвати стилістичні засоби в уривку." } },
        { id: "c", label: { pl: "Jeszcze raz układać od zera cały plan zdarzeń z lekcji 47 (to już umiesz).", ua: "Ще раз з нуля складати весь план подій з уроку 47 (це вже вмієш)." } },
        { id: "d", label: { pl: "Przygotować głosową interpretację nastroju burzy.", ua: "Підготувати голосову інтерпретацію настрою бурі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Plan zdarzeń był w temacie 47. Co jest nowe dziś?",
        ua: "План подій був у темі 47. Що нове сьогодні?"
      },
      explanation: {
        pl: "Dziś: zmysły, środki, głos, adaptacja. Plan przebiegu — już z lekcji 47.",
        ua: "Сьогодні: чуття, засоби, голос, адаптація. План перебігу — уже з уроку 47."
      }
    }
  },

  // 2 — listen again for senses
  {
    type: "observe",
    heading: { pl: "Słuchamy pod kątem zmysłów", ua: "Слухаємо під кутом чуттів" },
    formula: "s. 87  ·  nagranie  ·  zmysły",
    promptPlace: "before",
    prompt: {
      pl: "Włącz nagranie *jeszcze raz*. Tym razem nie śledź planu — szukaj: co *widzisz*? co *słyszysz*? co prawie *dotykasz* (ciemność, woda)?",
      ua: "Увімкни запис *ще раз*. Цього разу не стеж за планом — шукай: що *бачиш*? що *чуєш*? що майже *торкаєш* (темрява, вода)?"
    },
    text: {
      pl: [
        emT48("Zmysły w burzy Mickiewicza"),
        "wzrok · słuch · dotyk",
        " ",
        "Most UA: wzrok = зір, słuch = слух, dotyk = дотик."
      ],
      ua: [
        "Органи чуття в бурі Міцкевича: зір · слух · дотик."
      ]
    },
    items: [
      { pl: "**Wzrok:** widnokrąg pęka, anioł burzy jak słońce, całun, ciemność.", ua: "**Зір:** widnokrąg pęka, anioł burzy jak słońce, całun, ciemność." },
      { pl: "**Słuch:** pluszczy, rykły, szumi, ryknie, szemrze, drzwi chmur…", ua: "**Слух:** pluszczy, rykły, szumi, ryknie, szemrze, drzwi chmur…" },
      { pl: "**Dotyk:** ciemność *prawie dotykalna*, woda *chluśnie*, deszcz jak z wiader.", ua: "**Дотик:** ciemność *prawie dotykalna*, вода *chluśnie*, дощ як із відер." }
    ],
    task: {
      id: "t48-s02-zmysl",
      type: "single-choice",
      question: {
        pl: "«ciemność gruba, gęsta, prawie *dotykalna*» — głównie zmysł:",
        ua: "«ciemność gruba, gęsta, prawie *dotykalna*» — насамперед орган чуття:"
      },
      options: [
        { id: "a", label: { pl: "dotyk (i trochę wzrok)", ua: "дотик (і трохи зір)" } },
        { id: "b", label: { pl: "tylko smak", ua: "лише смак" } },
        { id: "c", label: { pl: "tylko węch", ua: "лише нюх" } }
      ],
      answer: "a",
      hint: {
        pl: "Słowo *dotykalna* = taka, którą prawie można *dotknąć*.",
        ua: "Слово *dotykalna* = така, яку майже можна *торкнути*."
      },
      explanation: {
        pl: "*Dotykalna* wprost wskazuje na dotyk; ciemność też «widać» — więc wzrok pomaga.",
        ua: "*Dotykalna* прямо вказує на дотик; темряву також «видно» — тож зір допомагає."
      }
    }
  },

  // 3 — sensory table
  {
    type: "practice",
    heading: { pl: "Tabela zmysłów", ua: "Таблиця органів чуття" },
    formula: "s. 87  ·  zad. 3a",
    promptPlace: "before",
    prompt: {
      pl: "Zadanie 3a: znajdź fragmenty działające na *wzrok*, *słuch*, *dotyk*. Spójrz na skan tabeli (kliknij, by powiększyć).",
      ua: "Завдання 3a: знайди уривки для *зору*, *слуху*, *дотику*. Глянь на скан таблиці (клікни, щоб збільшити)."
    },
    visual: vizGhT48("t48-zmysly.png", {
      alt: { pl: "Zadanie 3 — tabela zmysłów", ua: "Завдання 3 — таблиця органів чуття" }
    }),
    items: [
      { pl: "**Wzrok:** *widnokrąg pęka*; *anioł burzy… słońca*; *okryty całunem*.", ua: "**Зір:** *widnokrąg pęka*; *anioł burzy… słońca*; *okryty całunem*." },
      { pl: "**Słuch:** *deszcz pluszczy*; *rykły pioruny*; *szumi*; *ryknie*; *szemrze ulewa*.", ua: "**Слух:** *deszcz pluszczy*; *rykły pioruny*; *szumi*; *ryknie*; *szemrze ulewa*." },
      { pl: "**Dotyk:** *ciemność… prawie dotykalna*; *wodą chluśnie*; deszcz *jak z wiader*.", ua: "**Дотик:** *ciemność… prawie dotykalna*; *wodą chluśnie*; дощ *jak z wiader*." }
    ],
    task: {
      id: "t48-s03-cytat",
      type: "single-choice",
      question: {
        pl: "Cytat *«deszcz wciąż pluszczy»* / *«grom… ryknie»* należy głównie do:",
        ua: "Цитата *«deszcz wciąż pluszczy»* / *«grom… ryknie»* належить насамперед до:"
      },
      options: [
        { id: "a", label: { pl: "słuchu", ua: "слуху" } },
        { id: "b", label: { pl: "wzroku", ua: "зору" } },
        { id: "c", label: { pl: "smaku", ua: "смаку" } }
      ],
      answer: "a",
      hint: {
        pl: "*Pluszczy*, *ryknie*, *szumi* — to słowa dźwięku.",
        ua: "*Pluszczy*, *ryknie*, *szumi* — слова звуку."
      },
      explanation: {
        pl: "To obrazy słuchowe (dźwiękonaśladownictwo / onomatopeja).",
        ua: "Це слухові образи (звуконаслідування / ономатопея)."
      }
    }
  },

  // 4 — wniosek
  {
    type: "practice",
    heading: { pl: "Wniosek o zmysłach", ua: "Висновок про органи чуття" },
    formula: "s. 87  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "Porównaj liczbę przykładów. Uzupełnij wniosek z podręcznika: poeta chce, by czytelnik *wyobraził / poczuł* burzę. Najwięcej obrazów działa na…?",
      ua: "Порівняй кількість прикладів. Доповни висновок із підручника: поет хоче, щоб читач *уявив / відчув* бурю. Найбільше образів діє на…?"
    },
    items: [
      { pl: "Wniosek (szablon): *Poeta posłużył się środkami artystycznymi, aby czytelnik … opisaną burzę. Oddziałują one przede wszystkim na zmysł …*", ua: "Висновок (шаблон): *Poeta posłużył się środkami artystycznymi, aby czytelnik … opisaną burzę. Oddziałują one przede wszystkim na zmysł …*" },
      { pl: "W tekście bardzo dużo *dźwięków* i *widoków* — słuch i wzrok wygrywają.", ua: "У тексті дуже багато *звуків* і *видів* — слух і зір перемагають." }
    ],
    task: {
      id: "t48-s04-wniosek",
      type: "single-choice",
      question: {
        pl: "Najlepsze uzupełnienie wniosku:",
        ua: "Найкраще доповнення висновку:"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "…mógł wyobrazić / usłyszeć i zobaczyć… · przede wszystkim na zmysł słuchu (i wzroku)",
            ua: "…міг уявити / почути і побачити… · насамперед на слух (і зір)"
          }
        },
        {
          id: "b",
          label: {
            pl: "…zapomniał o burzy… · przede wszystkim na zmysł smaku",
            ua: "…забув про бурю… · насамперед на смак"
          }
        },
        {
          id: "c",
          label: {
            pl: "…policzył krople deszczu… · przede wszystkim na zmysł węchu",
            ua: "…порахував краплі дощу… · насамперед на нюх"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Środki artystyczne służą wyobraźni. W burzy dominują dźwięki i obrazy.",
        ua: "Художні засоби служать уяві. У бурі панують звуки й образи."
      },
      explanation: {
        pl: "Czytelnik ma *wyobrazić* burzę; środki działają głównie na *słuch* i *wzrok*.",
        ua: "Читач має *уявити* бурю; засоби діють головно на *слух* і *зір*."
      }
    }
  },

  // 5 — concept means
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · środki stylistyczne", ua: "Запам’ятай · стилістичні засоби" },
    formula: "s. 87  ·  warsztat",
    promptPlace: "before",
    prompt: {
      pl: "W burzy Mickiewicza znajdziesz te narzędzia poety. Zapisz w zeszycie.",
      ua: "У бурі Міцкевича знайдеш ці інструменти поета. Запиши в зошит."
    },
    text: {
      pl: "Porównanie · personifikacja · dźwiękonaśladownictwo — budują obraz poetycki burzy.",
      ua: "Порівняння · персоніфікація · звуконаслідування — будують поетичний образ бурі."
    },
    items: [
      { pl: "**Porównanie** — *jak* / *na kształt*: deszcz *jak z sita*; *jak proste struny*; anioł *na kształt słońca*.", ua: "**Порівняння** — *jak* / *na kształt*: дощ *jak z sita*; *jak proste struny*; ангел *na kształt słońca*." },
      { pl: "**Personifikacja (uosobienie)** — zjawisko jak człowiek/istot: *anioł burzy*, *grom uśnie*, *drzwi chmur zatrzasnął*.", ua: "**Персоніфікація (уособлення)** — явище як людина/істота: *anioł burzy*, *grom uśnie*, *drzwi chmur zatrzasnął*." },
      { pl: "**Dźwiękonaśladownictwo** — słowa brzmią jak dźwięk: *pluszczy, szumi, szemrze, ryknie*.", ua: "**Звуконаслідування** — слова звучать як звук: *pluszczy, szumi, szemrze, ryknie*." },
      { pl: "Most UA: porównanie ≈ *порівняння*, personifikacja ≈ *уособлення*, onomatopeja ≈ *ономатопея*.", ua: "Міст UA: porównanie ≈ *порівняння*, personifikacja ≈ *уособлення*." }
    ],
    task: {
      id: "t48-s05-srodek",
      type: "single-choice",
      question: {
        pl: "«anioł burzy… uciekł w niebo i drzwi chmur zatrzasnął piorunem» — to przede wszystkim:",
        ua: "«anioł burzy… uciekł w niebo i drzwi chmur zatrzasnął piorunem» — це насамперед:"
      },
      options: [
        { id: "a", label: { pl: "personifikacja (burza / piorun jak istota z wolą)", ua: "персоніфікація (буря / грім як істота з волею)" } },
        { id: "b", label: { pl: "tylko zwykły raport pogodowy bez obrazu", ua: "лише звичайний звіт погоди без образу" } },
        { id: "c", label: { pl: "przysłówkowy stopień najwyższy", ua: "прислівниковий найвищий ступінь" } }
      ],
      answer: "a",
      hint: {
        pl: "Anioł *ucieka*, *zatrzaskuje drzwi* — to zachowania człowieka / istoty.",
        ua: "Ангел *тікає*, *зачиняє двері* — це поведінка людини / істоти."
      },
      explanation: {
        pl: "Personifikacja: burza i piorun działają jak istoty. Jest też porównanie (*na kształt słońca*).",
        ua: "Персоніфікація: буря і грім діють як істоти. Є також порівняння (*на kształt сонця*)."
      }
    }
  },

  // 6 — identify devices
  {
    type: "practice",
    heading: { pl: "Rozpoznaję środki", ua: "Розпізнаю засоби" },
    formula: "s. 87  ·  warsztat",
    promptPlace: "before",
    prompt: {
      pl: "Dopasuj cytat do środka. To trening przed głosem: wiesz *co* czytasz, zanim powiesz na głos.",
      ua: "Добери цитату до засобу. Тренування перед голосом: знаєш *що* читаєш, перш ніж сказати вголос."
    },
    items: [
      { pl: "*jak z sita* / *jak proste struny* → porównanie", ua: "*jak z sita* / *jak proste struny* → порівняння" },
      { pl: "*grom na chwilę uśnie* → personifikacja", ua: "*grom na chwilę uśnie* → персоніфікація" },
      { pl: "*pluszczy* / *szemrze* → dźwiękonaśladownictwo", ua: "*pluszczy* / *szemrze* → звуконаслідування" }
    ],
    task: {
      id: "t48-s06-rozpoznaj",
      type: "multiple-choice",
      question: {
        pl: "Które stwierdzenia są prawdziwe? Zaznacz wszystkie.",
        ua: "Які твердження правдиві? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "*deszcz jak z sita* — porównanie", ua: "*deszcz jak z sita* — порівняння" } },
        { id: "b", label: { pl: "*grom uśnie* — personifikacja", ua: "*grom uśnie* — персоніфікація" } },
        { id: "c", label: { pl: "*szemrze ulewa* — dźwiękonaśladownictwo", ua: "*szemrze ulewa* — звуконаслідування" } },
        { id: "d", label: { pl: "*widnokrąg* — to nazwa środka stylistycznego, nie rzeczownika", ua: "*widnokrąg* — назва стилістичного засобу, не іменник" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*Widnokrąg* to rzeczownik z glosy (horyzont), nie nazwa tropu.",
        ua: "*Widnokrąg* — іменник із глоси (горизонт), не назва тропа."
      },
      explanation: {
        pl: "A–C poprawne. *Widnokrąg* = horyzont (słowo z glosy), nie środek stylistyczny.",
        ua: "A–C правильні. *Widnokrąg* = горизонт (слово з глоси), не стилістичний засіб."
      }
    }
  },

  // 7 — recitation
  {
    type: "practice",
    heading: { pl: "Głosowa interpretacja", ua: "Голосова інтерпретація" },
    formula: "s. 87  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Zadanie 4: przygotuj głosową interpretację tak, by *intonacja* i *barwa głosu* oddały nastrój. Najpierw skan polecenia, potem wskazówki.",
      ua: "Завдання 4: підготуй голосову інтерпретацію так, щоб *інтонація* і *тембр* передали настрій. Спочатку скан завдання, потім підказки."
    },
    visual: vizGhT48("t48-recytacja.png", {
      alt: { pl: "Zadanie 4 — głosowa interpretacja", ua: "Завдання 4 — голосова інтерпретація" }
    }),
    items: [
      { pl: "**Początek (deszcz):** spokojniej, szum — *pluszczy…*", ua: "**Початок (дощ):** спокійніше, шум — *pluszczy…*" },
      { pl: "**Pioruny / anioł:** głośniej, ostrzej — *rykły!* *zatrzasnął!*", ua: "**Громи / ангел:** голосніше, різкіше — *rykły!* *zatrzasnął!*" },
      { pl: "**Fale burzy:** naprzemiennie mocno i ciszej (*wzmaga* / *ciszej szumi*).", ua: "**Хвилі бурі:** поперемінно сильно і тихше (*wzmaga* / *ciszej szumi*)." },
      { pl: "**Koniec:** zwolnij, zmiękcz — *uspokoiło… szemrze ulewa.*", ua: "**Кінець:** сповільни, пом’якши — *uspokoiło… szemrze ulewa.*" },
      { pl: "Wskazówka: nagraj się w telefonie i odsłuchaj — czy słychać *burzę*?", ua: "Підказка: запиши себе на телефон і послухай — чи чути *бурю*?" }
    ],
    task: {
      id: "t48-s07-glos",
      type: "single-choice",
      question: {
        pl: "Przy wersach o *aniele burzy* i *zatrzaśnięciu drzwi chmur* głos powinien być:",
        ua: "При рядках про *ангела бурі* і *зачинення дверей хмар* голос має бути:"
      },
      options: [
        { id: "a", label: { pl: "mocniejszy, bardziej dramatyczny", ua: "сильніший, більш драматичний" } },
        { id: "b", label: { pl: "szeptem jak senna kołysanka od początku do końca", ua: "пошепки, як сонна колискова від початку до кінця" } },
        { id: "c", label: { pl: "całkiem bez intonacji — jak lista zakupów", ua: "зовсім без інтонації — як список покупок" } }
      ],
      answer: "a",
      hint: {
        pl: "To kulminacja obrazu — błyskawica i huk. Koniec fragmentu jest cichszy.",
        ua: "Це кульмінація образу — блискавка і гуркіт. Кінець уривка тихіший."
      },
      explanation: {
        pl: "Kulminacja = mocniejszy głos. Szept na cały tekst zgasi dramat; lista zakupów zabije nastrój.",
        ua: "Кульмінація = сильніший голос. Шепіт на весь текст згасить драму; список покупок уб’є настрій."
      }
    }
  },

  // 8 — adaptation
  {
    type: "practice",
    heading: { pl: "Burza w innym medium", ua: "Буря в іншому мистецтві" },
    formula: "s. 87  ·  pomysł twórczy",
    promptPlace: "before",
    prompt: {
      pl: "Cel z programu: jak ten fragment mógłby żyć w *filmie*, *słuchowisku radiowym* albo *balecie*? Wybierz jedno medium i pomyśl 2–3 pomysły.",
      ua: "Мета з програми: як цей уривок міг би жити у *фільмі*, *радіоп’єсі* чи *балеті*? Обери одне мистецтво і придумай 2–3 ідеї."
    },
    items: [
      { pl: "**Film:** cięcie montażowe przy *widnokrąg pęka*; światło = anioł burzy; deszcz na szybie.", ua: "**Фільм:** монтажний різ при *widnokrąg pęka*; світло = ангел бурі; дощ на склі." },
      { pl: "**Radio:** same dźwięki — plusk, grzmot, szum drzew; narrator szeptem na końcu.", ua: "**Радіо:** самі звуки — плюскіт, грім, шум дерев; оповідач пошепки наприкінці." },
      { pl: "**Balet:** tancerze jak krople → struny deszczu → błyskawica (skok) → uspokojenie.", ua: "**Балет:** танцівники як краплі → струни дощу → блискавка (стрибок) → заспокоєння." }
    ],
    task: {
      id: "t48-s08-adaptacja",
      type: "open-answer",
      question: {
        pl: "Wybierz film / radio / balet i napisz 2–4 zdania: jak pokazał(a)byś burzę Mickiewicza?",
        ua: "Обери фільм / радіо / балет і напиши 2–4 речення: як би ти показав(ла) бурю Міцкевича?"
      },
      hint: {
        pl: "Przykład: W radiu najpierw plusk deszczu, potem grzmot, na końcu szum drzew koło domu.",
        ua: "Приклад: На радіо спочатку плюскіт дощу, потім грім, наприкінці шум дерев біля будинку."
      },
      explanation: {
        pl: "Nie ma jednej odpowiedzi — ważne, by pomysł łączył się z obrazami z tekstu (deszcz, piorun, uspokojenie).",
        ua: "Немає однієї відповіді — важливо, щоб ідея в’язалася з образами з тексту (дощ, грім, заспокоєння)."
      }
    }
  },

  // 9 — summary
  {
    type: "summary",
    heading: { pl: "Co zabieram z T47–T48", ua: "Що забираю з T47–T48" },
    formula: "s. 87  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Dwie lekcje = jeden fragment. Umiesz opowiedzieć *przebieg* i pokazać *jak* poeta buduje obraz burzy.",
      ua: "Два уроки = один уривок. Умієш розповісти *перебіг* і показати *як* поет будує образ бурі."
    },
    items: [
      { pl: "T47: plan zdarzeń + opowiadanie ze słownictwem ramki.", ua: "T47: план подій + розповідь зі словником рамки." },
      { pl: "T48: zmysły (wzrok / słuch / dotyk) + porównanie, personifikacja, dźwiękonaśladownictwo.", ua: "T48: органи чуття + порівняння, персоніфікація, звуконаслідування." },
      { pl: "Głos oddaje nastrój; burzę można przenieść do filmu, radia, baletu.", ua: "Голос передає настрій; бурю можна перенести у фільм, радіо, балет." }
    ],
    task: {
      id: "t48-s09-quiz",
      type: "multiple-choice",
      question: {
        pl: "Co jest prawdą o fragmencie burzy? Zaznacz wszystkie poprawne.",
        ua: "Що правда про уривок бурі? Познач усі правильні."
      },
      options: [
        { id: "a", label: { pl: "Autor: Adam Mickiewicz, *Pan Tadeusz*.", ua: "Автор: Адам Міцкевич, *Pan Tadeusz*." } },
        { id: "b", label: { pl: "W tekście są porównania i personifikacja (*anioł burzy*).", ua: "У тексті є порівняння і персоніфікація (*anioł burzy*)." } },
        { id: "c", label: { pl: "Burza kończy się uspokojeniem — szum drzew i szemrząca ulewa.", ua: "Буря закінчується заспокоєнням — шум дерев і шелест зливи." } },
        { id: "d", label: { pl: "To wyłącznie suchy raport bez obrazów poetyckich.", ua: "Це лише сухий звіт без поетичних образів." } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "To *poetycki* obraz burzy — nie raport pogodowy.",
        ua: "Це *поетичний* образ бурі — не звіт погоди."
      },
      explanation: {
        pl: "A–C prawdziwe. D fałszywe: cały fragment to bogaty obraz poetycki.",
        ua: "A–C правдиві. D хибне: весь уривок — багатий поетичний образ."
      }
    }
  }
]};
