function emT45(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T45 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT45(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T45 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 85  ·  Lekcja 45  ·  ó · rz · ch",
    promptPlace: "before",
    prompt: {
      pl: "Tematy 45 i 46 = *jedna* strona s. 85, ale *dwie* godziny. Dziś jabłka Newtona i reguły: **ó**, **rz**, **ch** w zakończeniach (+ wyjątki). Jutro: **ż**, **u**, rysunek, dialog i dyktando. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Теми 45 і 46 = *одна* сторінка с. 85, але *дві* години. Сьогодні яблука Ньютона і правила: **ó**, **rz**, **ch** у закінченнях (+ винятки). Завтра: **ż**, **u**, малюнок, діалог і диктант. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "podam regułę dla zakończeń z *ó* (*-ów, -ówka, -ówna*);", ua: "дам правило для закінчень з *ó* (*-ów, -ówka, -ówna*);" },
      { pl: "rozpoznam *-arz / -erz* (*rz*) i wyjątki na *-aż*;", ua: "розпізнаю *-arz / -erz* (*rz*) і винятки на *-aż*;" },
      { pl: "zapamiętam: na końcu wyrazu zwykle *ch* (wyjątek *druh*);", ua: "запам’ятаю: на кінці слова зазвичай *ch* (виняток *druh*);" },
      { pl: "wskażę przykłady w komiksie o Newtonie;", ua: "вкажу приклади в коміксі про Ньютона;" },
      { pl: "uzupełnię formy rzeczowników w dialogu o lekarzu.", ua: "доповню форми іменників у діалозі про лікаря." }
    ],
    task: {
      id: "t45-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Stosować reguły ó, rz, ch w zakończeniach.", ua: "Застосовувати правила ó, rz, ch у закінченнях." } },
        { id: "b", label: { pl: "Znać ważne wyjątki (bagaż, druh, wsuwka…).", ua: "Знати важливі винятки (bagaż, druh, wsuwka…)." } },
        { id: "c", label: { pl: "Już dziś napisać pełne dyktando z wszystkimi pięcioma jabłkami.", ua: "Уже сьогодні написати повний диктант з усіма п’ятьма яблуками." } },
        { id: "d", label: { pl: "Wskazać przykłady w komiksie / dialogu.", ua: "Вказати приклади в коміксі / діалозі." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Dyktando i jabłka ż/u — lekcja 46.",
        ua: "Диктант і яблука ż/u — урок 46."
      },
      explanation: {
        pl: "Dziś: ó, rz, ch + wyjątki + przykłady. ż, u i dyktando — jutro.",
        ua: "Сьогодні: ó, rz, ch + винятки + приклади. ż, u і диктант — завтра."
      }
    }
  },
  // 2 UA bridge
  {
    type: "observe",
    heading: { pl: "Most UA · dlaczego to trudne", ua: "Міст UA · чому це важко" },
    formula: "PL ↔ UA  ·  dźwięk ≠ litera",
    promptPlace: "before",
    prompt: {
      pl: "W PL *ó* i *u* brzmią jak **у**, a *rz* i *ż* jak **ж**. Literę wybierasz z *zakończenia / reguły*, nie «na słuch».",
      ua: "У PL *ó* і *u* звучать як **у**, а *rz* і *ż* як **ж**. Літеру вибираєш із *закінчення / правила*, не «на слух»."
    },
    items: [
      { pl: "*piekarz* · *пекар* — w UA **р**, w PL zawód często *-arz* → **rz**.", ua: "*piekarz* · *пекар* — в UA **р**, у PL професія часто *-arz* → **rz**." },
      { pl: "*domów* · *домів* — dopełniacz lm. często *-ów* → **ó**.", ua: "*domów* · *домів* — родовий мн. часто *-ów* → **ó**." },
      { pl: "*duch* · *дух* — na końcu zwykle **ch** (не *h*).", ua: "*duch* · *дух* — на кінці зазвичай **ch** (не *h*)." },
      { pl: "Wyjątki typu *bagaż, garaż* ≈ UA *багаж, гараж* — zapamiętaj listę.", ua: "Винятки типу *bagaż, garaż* ≈ UA *багаж, гараж* — запам’ятай список." }
    ],
    task: {
      id: "t45-s02-most",
      type: "true-false",
      question: {
        pl: "Czy w polskim możesz zawsze wybrać ó/u albo rz/ż tylko «na słuch»?",
        ua: "Чи в польській можна завжди вибрати ó/u або rz/ż лише «на слух»?"
      },
      answer: false,
      hint: {
        pl: "Te pary brzmią tak samo — potrzebujesz reguły zakończenia.",
        ua: "Ці пари звучать однаково — потрібне правило закінчення."
      },
      explanation: {
        pl: "Fałsz. Słuch nie wystarczy — patrzysz na schemat zakończeń.",
        ua: "Хиба. Слуху мало — дивишся на схему закінчень."
      }
    }
  },
  // 3 comic
  {
    type: "observe",
    heading: { pl: "Komiks · Newton i jabłka", ua: "Комікс · Ньютон і яблука" },
    formula: "s. 85  ·  zad. 1  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj podkreślone wyrazy. Kliknij skan (przewiń jabłka na dole). Dziś szczególnie: *targu, prezentów, obserwuje?* — zaraz dopasujesz do **ó / rz / ch**.",
      ua: "Прочитай підкреслені слова. Клацни скан (прокрути яблука внизу). Сьогодні особливо: *targu, prezentów…* — зараз підженемо до **ó / rz / ch**."
    },
    visual: vizGhT45("t45-newton-jablka.png", {
      prompt: "Komiks Newtona + jabłka PISZEMY.",
      alt: {
        pl: "Komiks: służba o Newtonie; schemat jabłek ó, rz, ch, ż, u.",
        ua: "Комікс: слуги про Ньютона; схема яблук ó, rz, ch, ż, u."
      }
    }),
    items: [
      { pl: "Glosa: *Isaac Newton* czyt. *Izaak Niuton*.", ua: "Глоса: *Isaac Newton* чит. *Ісаак Ньютон*." },
      { pl: "Podkreślone dziś-klucze: *pokojówka, piekarz, papugę, targu, żałuje, prezentów, młodzież, obserwuje, zachowuje, zapisuje, kłopotów*.", ua: "Підкреслені ключі: *pokojówka, piekarz, papugę, targu, żałuje, prezentów, młodzież, obserwuje, zachowuje, zapisuje, kłopotów*." },
      { pl: "*piekarz* → *-arz* = **rz**; *prezentów / kłopotów* → *-ów* = **ó**.", ua: "*piekarz* → *-arz* = **rz**; *prezentów / kłopotów* → *-ów* = **ó**." },
      { pl: "*obserwuje, zachowuje, zapisuje* → *-uje* = **u** (to jutro, ale widzisz już w tekście).", ua: "*obserwuje, zachowuje, zapisuje* → *-uje* = **u** (це завтра, але вже видно в тексті)." }
    ],
    task: {
      id: "t45-s03-komiks",
      type: "multiple-choice",
      question: {
        pl: "Które pary NA PEWNO pasują do reguł dzisiejszych (ó / rz)? Zaznacz wszystkie pewne.",
        ua: "Які пари НАПЕВНО пасують до сьогоднішніх правил (ó / rz)? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "piekarz — zakończenie -arz → rz", ua: "piekarz — закінчення -arz → rz" } },
        { id: "b", label: { pl: "prezentów / kłopotów — zakończenie -ów → ó", ua: "prezentów / kłopotów — закінчення -ów → ó" } },
        { id: "c", label: { pl: "piekarz piszemy przez ż, bo tak brzmi", ua: "piekarz пишемо через ż, бо так звучить" } },
        { id: "d", label: { pl: "pokojówka — -ówka → ó", ua: "pokojówka — -ówka → ó" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Zawody *-arz*; dopełniacz lm. *-ów*; *-ówka* z jabłka ó.",
        ua: "Професії *-arz*; родовий мн. *-ów*; *-ówka* з яблука ó."
      },
      explanation: {
        pl: "*piekarz, prezentów, pokojówka* — reguły. Nie wybieraj ż «na słuch».",
        ua: "*piekarz, prezentów, pokojówka* — правила. Не бери ż «на слух»."
      }
    }
  },
  // 4 concept ó rz ch
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · jabłka ó, rz, ch", ua: "Zapamiętaj · яблука ó, rz, ch" },
    formula: "s. 85  ·  schemat PISZEMY",
    promptPlace: "before",
    prompt: {
      pl: "Trzy jabłka na dziś. Przepisz do zeszytu + wyjątki.",
      ua: "Три яблука на сьогодні. Перепиши в зошит + винятки."
    },
    text: {
      pl: "**ó** w zakończeniach **-ów, -ówka, -ówna** (*domów, makówka, Radziwiłłówna*; wyjątki: *wsuwka, zasuwka*). **rz** w rzeczownikach męskich na **-arz, -erz** (*kalendarz, talerz*; wyjątki m.in. *bagaż, bandaż, garaż, jeż, papież, tatuaż…*). **ch** zwykle **na końcu wyrazu** (*duch, zuch*; wyjątek: *druh*).",
      ua: "**ó** у закінченнях **-ów, -ówka, -ówna** (*domów, makówka…*; винятки: *wsuwka, zasuwka*). **rz** у чоловічих на **-arz, -erz** (*kalendarz, talerz*; винятки: *bagaż, garaż, jeż…*). **ch** зазвичай **на кінці слова** (*duch, zuch*; виняток: *druh*)."
    },
    items: [
      { pl: "**ó:** *Rzeszów, domów, makówka* — nie *domuw*.", ua: "**ó:** *Rzeszów, domów, makówka* — не *domuw*." },
      { pl: "**rz:** *piekarz, lekarz, kalendarz* — zawody / narzędzia na *-arz/-erz*.", ua: "**rz:** *piekarz, lekarz, kalendarz* — професії / інструменти на *-arz/-erz*." },
      { pl: "**ch:** *duch, pech, pech?* → *pech*; nigdy *duh*.", ua: "**ch:** *duch* — ніколи *duh*." },
      { pl: "Lista wyjątków *-aż* (męskie): *bagaż, garaż, stelaż, tatuaż*…", ua: "Список винятків *-aż* (чоловічі): *bagaż, garaż, stelaż, tatuaż*…" }
    ],
    task: {
      id: "t45-s04-ramka",
      type: "single-choice",
      question: {
        pl: "Który zapis jest poprawny?",
        ua: "Який запис правильний?"
      },
      options: [
        { id: "a", label: { pl: "lekarz, domów, duch", ua: "lekarz, domów, duch" } },
        { id: "b", label: { pl: "lekaż, domúw, duh", ua: "lekaż, domúw, duh" } },
        { id: "c", label: { pl: "lekarz, domúw, druh (zamiast duch)", ua: "lekarz, domúw, druh (замість duch)" } }
      ],
      answer: "a",
      hint: {
        pl: "*-arz* → rz; *-ów* → ó; koniec → ch (*druh* to inny wyraz).",
        ua: "*-arz* → rz; *-ów* → ó; кінець → ch (*druh* — інше слово)."
      },
      explanation: {
        pl: "*lekarz + domów + duch* = trzy jabłka naraz.",
        ua: "*lekarz + domów + duch* = три яблука разом."
      }
    }
  },
  // 5 exceptions
  {
    type: "observe",
    heading: { pl: "Pułapki · wyjątki", ua: "Пастки · винятки" },
    formula: "s. 85  ·  jabłka z gwiazdką",
    promptPlace: "before",
    prompt: {
      pl: "Wyjątki zapamiętaj jak listę zakupów — nie «pasują» do głównej reguły.",
      ua: "Винятки запам’ятай як список покупок — вони не «пасують» до головного правила."
    },
    items: [
      { pl: "Przy **ó**: *wsuwka, zasuwka* (nie *-ówka*).", ua: "При **ó**: *wsuwka, zasuwka* (не *-ówka*)." },
      { pl: "Przy **rz/-arz**: *bagaż, bandaż, garaż, łupież, jeż, papież, tatuaż, stelaż*.", ua: "При **rz/-arz**: *bagaż, bandaż, garaż, łupież, jeż, papież, tatuaż, stelaż*." },
      { pl: "Przy **ch**: wyjątek *druh* (harcerski towarzysz).", ua: "При **ch**: виняток *druh* (скаутський товариш)." },
      { pl: "Most UA: *багаж / гараж / татуювання* pomagają zapamiętać *-aż*.", ua: "Міст UA: *багаж / гараж / татуювання* допомагають запам’ятати *-aż*." }
    ],
    task: {
      id: "t45-s05-wyjatki",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy NA PEWNO są wyjątkami (nie -arz/-erz)? Zaznacz wszystkie pewne.",
        ua: "Які слова НАПЕВНО є винятками (не -arz/-erz)? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "garaż", ua: "garaż" } },
        { id: "b", label: { pl: "kalendarz", ua: "kalendarz" } },
        { id: "c", label: { pl: "bagaż", ua: "bagaż" } },
        { id: "d", label: { pl: "talerz", ua: "talerz" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Reguła: *-arz/-erz*. Wyjątki kończą się często na *-aż*.",
        ua: "Правило: *-arz/-erz*. Винятки часто на *-aż*."
      },
      explanation: {
        pl: "*garaż, bagaż* = wyjątki. *kalendarz, talerz* = reguła rz.",
        ua: "*garaż, bagaż* = винятки. *kalendarz, talerz* = правило rz."
      }
    }
  },
  // 6 dialog lekarz nouns
  {
    type: "practice",
    heading: { pl: "Dialog · lekarz i maść", ua: "Діалог · лікар і мазь" },
    formula: "s. 85  ·  zad. 2  ·  rzeczowniki",
    promptPlace: "before",
    prompt: {
      pl: "Wpisujemy *ó, u, rz, ż, ch* — dziś fokus na **rz** i **ó** w rzeczownikach. Kliknij obraz.",
      ua: "Вписуємо *ó, u, rz, ż, ch* — сьогодні фокус на **rz** і **ó** в іменниках. Клацни зображення."
    },
    visual: vizGhT45("t45-lekarz.jpg", {
      prompt: "Dialog służących o lekarzu.",
      alt: {
        pl: "Dwie służące i pan z jabłkiem; luki: leka…, sińc…w, apteka…, kasztan…w…",
        ua: "Дві служниці і пан з яблуком; пропуски: leka…, sińc…w…"
      }
    }),
    items: [
      { pl: "*leka…* → **lekarz** (*-arz* → rz).", ua: "*leka…* → **lekarz** (*-arz* → rz)." },
      { pl: "*sińc…w* → **sińców** (*-ów* → ó).", ua: "*sińc…w* → **sińców** (*-ów* → ó)." },
      { pl: "*apteka…* → **aptekarz** (*-arz* → rz).", ua: "*apteka…* → **aptekarz** (*-arz* → rz)." },
      { pl: "*kasztan…w* → **kasztanów** (*-ów* → ó).", ua: "*kasztan…w* → **kasztanów** (*-ów* → ó)." },
      { pl: "Glosy: *siniec* = синець; *maść* = мазь; *bursztyn* = бурштин (jutro dopełniacz *bursztynu*).", ua: "Глоси: *siniec* = синець; *maść* = мазь; *bursztyn* = бурштин." }
    ],
    task: {
      id: "t45-s06-luki",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienia są NA PEWNO poprawne? Zaznacz wszystkie pewne.",
        ua: "Які доповнення НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "lekarz · aptekarz", ua: "lekarz · aptekarz" } },
        { id: "b", label: { pl: "sińców · kasztanów", ua: "sińców · kasztanów" } },
        { id: "c", label: { pl: "lekaż · kasztanuw", ua: "lekaż · kasztanuw" } },
        { id: "d", label: { pl: "lekarz (rz) i sińców (ó) w jednym dialogu", ua: "lekarz (rz) і sińców (ó) в одному діалозі" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Zawody *-arz*; dopełniacz lm. *-ów*.",
        ua: "Професії *-arz*; родовий мн. *-ów*."
      },
      explanation: {
        pl: "Poprawnie: *lekarz, aptekarz, sińców, kasztanów*. Formy na *-uje* — lekcja 46.",
        ua: "Правильно: *lekarz, aptekarz, sińców, kasztanów*. Форми на *-uje* — урок 46."
      }
    }
  },
  // 7 practice mix
  {
    type: "practice",
    heading: { pl: "Szybki test · ó / rz / ch", ua: "Швидкий тест · ó / rz / ch" },
    formula: "s. 85  ·  zastosowanie",
    promptPlace: "before",
    prompt: {
      pl: "Wybierz poprawny zestaw. Myśl zakończeniem, nie uchyłem.",
      ua: "Вибери правильний набір. Думай закінченням, не вухом."
    },
    items: [
      { pl: "A: *talerz, kalendarz, duch*", ua: "A: *talerz, kalendarz, duch*" },
      { pl: "B: *tależ, kalendaż, duh*", ua: "B: *tależ, kalendaż, duh*" }
    ],
    task: {
      id: "t45-s07-test",
      type: "single-choice",
      question: {
        pl: "Który zestaw jest poprawny ortograficznie?",
        ua: "Який набір орфографічно правильний?"
      },
      options: [
        { id: "a", label: { pl: "talerz, kalendarz, duch", ua: "talerz, kalendarz, duch" } },
        { id: "b", label: { pl: "tależ, kalendaż, duh", ua: "tależ, kalendaż, duh" } },
        { id: "c", label: { pl: "talerz, kalendaż, druh (jako «duch»)", ua: "talerz, kalendaż, druh (як «дух»)" } }
      ],
      answer: "a",
      hint: {
        pl: "*-erz/-arz* → rz; koniec → ch.",
        ua: "*-erz/-arz* → rz; кінець → ch."
      },
      explanation: {
        pl: "*talerz, kalendarz, duch* — reguły dnia.",
        ua: "*talerz, kalendarz, duch* — правила дня."
      }
    }
  },
  // 8 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · most do T46", ua: "Підсумок · міст до T46" },
    formula: "s. 85  ·  co zabieram",
    promptPlace: "before",
    prompt: {
      pl: "W zeszycie: 3 jabłka (ó, rz, ch) + wyjątki. Jutro jabłka **ż** i **u**, rysunek pokoju i dyktando.",
      ua: "У зошиті: 3 яблука (ó, rz, ch) + винятки. Завтра яблука **ż** і **u**, малюнок кімнати і диктант."
    },
    items: [
      { pl: "*ó* w *-ów / -ówka / -ówna*.", ua: "*ó* у *-ów / -ówka / -ówna*." },
      { pl: "*rz* w *-arz / -erz* (nie myl z *bagaż*).", ua: "*rz* у *-arz / -erz* (не плутай із *bagaż*)." },
      { pl: "*ch* na końcu (*duch*); wyjątek *druh*.", ua: "*ch* на кінці (*duch*); виняток *druh*." },
      { pl: "T46: *ż* (*młodzież*), *u* (*-uje, -unka…*) + ćwiczenia 3–4.", ua: "T46: *ż* (*młodzież*), *u* (*-uje, -unka…*) + вправи 3–4." }
    ],
    task: {
      id: "t45-s08-most",
      type: "true-false",
      question: {
        pl: "Czy jutro (T46) ćwiczymy m.in. zakończenia z ż i u oraz układamy dyktando?",
        ua: "Чи завтра (T46) тренуємо зокрема закінчення з ż і u та складаємо диктант?"
      },
      answer: true,
      hint: {
        pl: "Spójrz na cele lekcji 46 w spisie.",
        ua: "Подивись на цілі уроку 46 у списку."
      },
      explanation: {
        pl: "Tak — ż, u, rysunek, anegdota Newtona i dyktando.",
        ua: "Так — ż, u, малюнок, анекдот Ньютона і диктант."
      }
    }
  }
]};
