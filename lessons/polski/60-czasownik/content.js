function emT60(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T60 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT60(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T60 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 114  ·  Lekcja 60  ·  czasownik",
    promptPlace: "before",
    prompt: {
      pl: "Pierwsza część tematu s. 114: e-mail Wiktora z Chin, **definicja czasownika**, wyszukiwanie i odmiana form. Formy *-no/-to* i *nie* z czasownikiem — w **T61**. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Перша частина теми с. 114: e-mail Віктора з Китаю, **означення дієслова**, пошук і відміна форм. Форми *-no/-to* і *nie* з дієсловом — у **T61**. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "rozpoznam czasownik w tekście;", ua: "впізнаю дієслово в тексті;" },
      { pl: "określę osobę, liczbę, rodzaj i czas;", ua: "визначу особу, число, рід і час;" },
      { pl: "uzupełnię poprawne formy w zdaniach.", ua: "доповню правильні форми в реченнях." }
    ],
    task: {
      id: "t60-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO ćwiczysz dziś? Zaznacz wszystkie.",
        ua: "Що НАПЕВНО тренуєш сьогодні? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "Rozpoznanie i formy czasownika", ua: "Впізнавання і форми дієслова" } },
        { id: "b", label: { pl: "Czytanie e-maila Wiktora", ua: "Читання e-maila Віктора" } },
        { id: "c", label: { pl: "Tylko pisownię *nie* z czasownikiem (to T61)", ua: "Лише правопис *nie* з дієсловом (це T61)" } },
        { id: "d", label: { pl: "Uzupełnianie form w zdaniach", ua: "Доповнення форм у реченнях" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Ortografia *nie* i *-no/-to* → T61.",
        ua: "Орфографія *nie* і *-no/-to* → T61."
      },
      explanation: {
        pl: "A, B, D. C i formy *-no/-to* — w T61.",
        ua: "A, B, D. C і форми *-no/-to* — у T61."
      }
    }
  },

  // 2 — e-mail
  {
    type: "observe",
    heading: { pl: "E-mail Wiktora · Chiny", ua: "E-mail Віктора · Китай" },
    formula: "s. 114  ·  poczta",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj wiadomość. Kliknij skan, by powiększyć. Potem wrócimy do czasowników.",
      ua: "Прочитай повідомлення. Клацни скан, щоб збільшити. Потім повернемось до дієслів."
    },
    visual: vizGhT60("t60-email.jpg", {
      alt: { pl: "E-mail Wiktora: Chiny, Wielki Mur", ua: "E-mail Віктора: Китай, Великий мур" },
      place: "after"
    }),
    items: [
      { pl: "Nadawca: **Wiktor** · temat: **Chiny**.", ua: "Відправник: **Wiktor** · тема: **Chiny**." },
      { pl: "Pekin, Wielki Mur, jutro — groby cesarzy dynastii Ming.", ua: "Пекін, Великий мур, завтра — гробниці імператорів династії Мін." },
      { pl: "Tekst pełen **czasowników** — to materiał do gramatyki.", ua: "Текст повний **дієслів** — матеріал для граматики." }
    ],
    task: {
      id: "t60-s02-email",
      type: "single-choice",
      question: {
        pl: "Co wywarło największe wrażenie na Wiktorze?",
        ua: "Що найбільше вразило Віктора?"
      },
      options: [
        { id: "a", label: { pl: "Wielki Mur Chiński", ua: "Великий Китайський мур" } },
        { id: "b", label: { pl: "piramida Cheopsa w Egipcie", ua: "піраміда Хеопса в Єгипті" } },
        { id: "c", label: { pl: "obóz tenisa Roberta", ua: "тенісний табір Роберта" } }
      ],
      answer: "a",
      hint: {
        pl: "Drugie akapity e-maila.",
        ua: "Другі абзаци листа."
      },
      explanation: {
        pl: "„Największe wrażenie wywarł na mnie Wielki Mur Chiński”.",
        ua: "«Найбільше враження справив на мене Великий Китайський мур»."
      }
    }
  },

  // 3 — definicja / ramka
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · czasownik", ua: "Zapamiętaj · дієслово" },
    formula: "s. 114  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Złota definicja do zeszytu. Skan ramki — kliknij.",
      ua: "Золоте означення в зошит. Скан рамки — клікни."
    },
    visual: vizGhT60("t60-definicja.jpg", {
      alt: { pl: "Ramka: definicja czasownika", ua: "Рамка: означення дієслова" },
      place: "after"
    }),
    text: {
      pl: "**Czasownik** to odmienna część mowy nazywająca **czynności**, **stany** i **procesy**. Odpowiada na pytania *co robi? co się z nim dzieje?*, na przykład *zwiedza, choruje, dojrzewa*. Odmienia się przez **osoby** i **liczby**. Występuje w trzech **czasach** (przeszłym, przyszłym i teraźniejszym). W czasach przeszłym i przyszłym odmienia się przez **rodzaje** (lp.: męski, żeński, nijaki; lm.: męskoosobowy, niemęskoosobowy).",
      ua: "**Дієслово (czasownik)** — відмінювана частина мови, що називає **дії**, **стани** і **процеси**. Відповідає на питання *що робить? що з ним діється?*, напр. *zwiedza, choruje, dojrzewa*. Відмінюється за **особами** і **числами**. Є в трьох **часах** (минулий, майбутній, теперішній). У минулому й майбутньому — також за **родом** (одн.: чол., жін., сер.; мн.: чоловічо-особовий / нечоловічо-особовий)."
    },
    items: [
      { pl: "Pytania: *co robi?* / *co się z nim dzieje?*", ua: "Питання: *що робить?* / *що з ним діється?*" },
      { pl: "Odmiana: osoby · liczby · (w przeszłym/przyszłym) rodzaje.", ua: "Відміна: особи · числа · (у мин./майб.) рід." },
      { pl: "Trzy czasy: przeszły · teraźniejszy · przyszły.", ua: "Три часи: минулий · теперішній · майбутній." }
    ],
    task: {
      id: "t60-s03-def",
      type: "single-choice",
      question: {
        pl: "Czasownik nazywa…",
        ua: "Дієслово називає…"
      },
      options: [
        { id: "a", label: { pl: "czynności, stany i procesy", ua: "дії, стани і процеси" } },
        { id: "b", label: { pl: "tylko nazwy osób i rzeczy", ua: "лише назви осіб і речей" } },
        { id: "c", label: { pl: "tylko cechy (jaki? jaka?)", ua: "лише ознаки (який? яка?)" } }
      ],
      answer: "a",
      hint: {
        pl: "Pierwsze zdanie ramki.",
        ua: "Перше речення рамки."
      },
      explanation: {
        pl: "Czynności, stany, procesy — to czasownik.",
        ua: "Дії, стани, процеси — це дієслово."
      }
    }
  },

  // 4 — zad. 1 znajdź czasowniki
  {
    type: "practice",
    heading: { pl: "Zad. 1 · znajdź czasowniki", ua: "Завд. 1 · знайди дієслова" },
    formula: "s. 114  ·  zad. 1",
    promptPlace: "before",
    prompt: {
      pl: "Znajdź w e-mailu czasowniki i powiedz, co nazywają (czynność / stan / proces). Skan polecenia obok.",
      ua: "Знайди в e-mailі дієслова і скажи, що вони називають (дія / стан / процес). Скан завдання поруч."
    },
    visual: vizGhT60("t60-zad1.png", {
      alt: { pl: "Zad. 1 i ramka czasownika", ua: "Завд. 1 і рамка дієслова" },
      place: "after"
    }),
    items: [
      { pl: "Przykłady z e-maila: *jestem, była, zapomniałem, zwiedzaliśmy, wywarł…*", ua: "Приклади з листа: *jestem, była, zapomniałem, zwiedzaliśmy, wywarł…*" },
      { pl: "Większość nazywa **czynności** (zwiedzanie, budowa, planowanie).", ua: "Більшість називає **дії** (огляд, будівництво, планування)." },
      { pl: "*była* / *jestem* — często **stan**; *dojrzewa* w ramce = **proces**.", ua: "*była* / *jestem* — часто **стан**; *dojrzewa* в рамці = **процес**." }
    ],
    task: {
      id: "t60-s04-znajdz",
      type: "multiple-choice",
      question: {
        pl: "Które wyrazy z e-maila TO czasowniki? Zaznacz wszystkie.",
        ua: "Які слова з листа — дієслова? Познач усі."
      },
      options: [
        { id: "a", label: { pl: "zwiedzaliśmy · wywarł · planujemy", ua: "zwiedzaliśmy · wywarł · planujemy" } },
        { id: "b", label: { pl: "Pekin · Mur · Ming", ua: "Pekin · Mur · Ming" } },
        { id: "c", label: { pl: "zapomniałem · opowiadał · zmarło", ua: "zapomniałem · opowiadał · zmarło" } },
        { id: "d", label: { pl: "uciążliwa · straszna · chiński", ua: "uciążliwa · straszna · chiński" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Czasownik = *co robi? / co się dzieje?* Nie nazwa i nie cecha.",
        ua: "Дієслово = *що робить? / що діється?* Не назва і не ознака."
      },
      explanation: {
        pl: "A i C = czasowniki. B = nazwy własne/rzeczowniki. D = przymiotniki.",
        ua: "A і C = дієслова. B = власні назви/іменники. D = прикметники."
      }
    }
  },

  // 5 — formy gramatyczne
  {
    type: "practice",
    heading: { pl: "Zad. 3 · formy gramatyczne", ua: "Завд. 3 · граматичні форми" },
    formula: "s. 114  ·  zad. 3 (formy)",
    promptPlace: "before",
    prompt: {
      pl: "Z e-maila wybierz co najmniej 8 czasowników i określ: **osoba, liczba, rodzaj, czas**. Skan polecenia.",
      ua: "З листа вибери щонайменше 8 дієслів і визнач: **особу, число, рід, час**. Скан завдання."
    },
    visual: vizGhT60("t60-zad3.png", {
      alt: { pl: "Polecenie: określ formy czasowników", ua: "Завдання: визнач форми дієслів" },
      place: "after"
    }),
    items: [
      { pl: "Dla każdego czasownika zapisz: osoba · liczba · rodzaj (jeśli jest) · czas.", ua: "Для кожного дієслова запиши: особа · число · рід (якщо є) · час." },
      { pl: "W teraźniejszym zwykle **bez** rodzaju. W przeszłym — rodzaj ważny.", ua: "У теперішньому зазвичай **без** роду. У минулому — рід важливий." },
      { pl: "Przykładowe rozbiory — po *Sprawdź* (następne ekrany / wyjaśnienie).", ua: "Приклади розбору — після *Sprawdź*." }
    ],
    task: {
      id: "t60-s05-formy",
      type: "single-choice",
      question: {
        pl: "Forma *zwiedzaliśmy* — która analiza jest poprawna?",
        ua: "Форма *zwiedzaliśmy* — який розбір правильний?"
      },
      options: [
        { id: "a", label: { pl: "1. os. lm. · męskoosobowy · czas przeszły", ua: "1 ос. мн. · чол.-особовий · минулий" } },
        { id: "b", label: { pl: "3. os. lp. · żeński · czas przyszły", ua: "3 ос. одн. · жін. · майбутній" } },
        { id: "c", label: { pl: "2. os. lp. · nijaki · czas teraźniejszy", ua: "2 ос. одн. · сер. · теперішній" } }
      ],
      answer: "a",
      hint: {
        pl: "*-liśmy* = my + przeszły męskoosobowy.",
        ua: "*-liśmy* = ми + минулий чол.-особовий."
      },
      explanation: {
        pl: "My zwiedzaliśmy Pekin — 1. os. lm., męskoosobowy, przeszły.",
        ua: "Ми оглядали Пекін — 1 ос. мн., чол.-особовий, минулий."
      }
    }
  },

  // 6 — uzupełnij formy
  {
    type: "practice",
    heading: { pl: "Uzupełnij formy · Mur", ua: "Доповни форми · Мур" },
    formula: "s. 114  ·  zad. 3a–c",
    promptPlace: "before",
    prompt: {
      pl: "Przepisz i uzupełnij formy. Potem: osoba/liczba/rodzaj. Na końcu — jak nazywamy formę **bez** wykonawcy?",
      ua: "Перепиши й доповни форми. Потім: особа/число/рід. Наприкінці — як звемо форму **без** виконавця?"
    },
    visual: vizGhT60("t60-uzupelnij.png", {
      alt: { pl: "Tekst z bezokolicznikami do uzupełnienia", ua: "Текст з інфінітивами для доповнення" },
      place: "after"
    }),
    items: [
      { pl: "W nawiasach są **bezokoliczniki** — wstaw formy pasujące do zdania.", ua: "У дужках — **інфінітиви**; встав форми, що пасують до речення." },
      { pl: "Patrz na wykonawcę: Wiktor / budowla / robotnicy — rodzaj i liczba.", ua: "Дивись на виконавця: Віктор / будівля / робітники — рід і число." },
      { pl: "Pełny klucz form — po *Sprawdź*.", ua: "Повний ключ форм — після *Sprawdź*." }
    ],
    task: {
      id: "t60-s06-uzupelnij",
      type: "single-choice",
      question: {
        pl: "Który komplet form jest poprawny?",
        ua: "Який комплект форм правильний?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "napisał · Opisał · wywarł · podobała się · ogarnął · dowiedział się · zapłacili",
            ua: "napisał · Opisał · wywarł · podobała się · ogarnął · dowiedział się · zapłacili"
          }
        },
        {
          id: "b",
          label: {
            pl: "napisać · opisać · wywrzeć · podobać się · ogarnąć · dowiedzieć się · zapłacić",
            ua: "napisać · opisać · wywrzeć · podobać się · ogarnąć · dowiedzieć się · zapłacić"
          }
        },
        {
          id: "c",
          label: {
            pl: "napisałam · Opisałam · wywarła · podobał się · ogarnęła · dowiedziała się · zapłaciła",
            ua: "napisałam · Opisałam · wywarła · podobał się · ogarnęła · dowiedziała się · zapłaciła"
          }
        }
      ],
      answer: "a",
      hint: {
        pl: "Wiktor (męski) · budowla (żeński: *podobała się*) · robotnicy (*zapłacili*).",
        ua: "Віктор (чол.) · будівля (жін.: *podobała się*) · робітники (*zapłacili*)."
      },
      explanation: {
        pl: "napisał; Opisał; wywarł (Mur); podobała się (budowla); ogarnął; dowiedział się; zapłacili (robotnicy).",
        ua: "napisał; Opisał; wywarł (Мур); podobała się (будівля); ogarnął; dowiedział się; zapłacili (робітники)."
      }
    }
  },

  // 7 — 3b / 3c
  {
    type: "practice",
    heading: { pl: "Osoba · liczba · rodzaj · bezokolicznik", ua: "Особа · число · рід · інфінітив" },
    formula: "s. 114  ·  zad. 3b–c",
    promptPlace: "before",
    prompt: {
      pl: "3b: określ osobę, liczbę i rodzaj wpisanych form. 3c: forma, która **nie** wskazuje wykonawcy — jak się nazywa?",
      ua: "3b: визнач особу, число і рід вписаних форм. 3c: форма, що **не** вказує виконавця — як зветься?"
    },
    items: [
      { pl: "Dla wpisanych form określ: osoba · liczba · rodzaj.", ua: "Для вписаних форм визнач: особа · число · рід." },
      { pl: "Forma z nawiasu (*…ać / …eć*) **nie** mówi, kto działa — jak ją nazywamy?", ua: "Форма з дужок (*…ać / …eć*) **не** каже, хто діє — як її звемо?" }
    ],
    task: {
      id: "t60-s07-bezokol",
      type: "single-choice",
      question: {
        pl: "Jak nazywamy formę czasownika, która nie wskazuje wykonawcy czynności? (w kontekście zad. 3)",
        ua: "Як звемо форму дієслова, що не вказує виконавця дії? (у контексті завд. 3)"
      },
      options: [
        { id: "a", label: { pl: "bezokolicznik", ua: "інфінітив (bezokolicznik)" } },
        { id: "b", label: { pl: "przymiotnik", ua: "прикметник" } },
        { id: "c", label: { pl: "liczebnik porządkowy", ua: "порядковий числівник" } }
      ],
      answer: "a",
      hint: {
        pl: "Końcówki *-ć*, *-c* — np. *napisać*.",
        ua: "Закінчення *-ć*, *-c* — напр. *napisać*."
      },
      explanation: {
        pl: "Bezokolicznik. W T61 poznasz też formy *-no/-to* (też nieosobowe).",
        ua: "Інфінітив. У T61 пізнаєш також форми *-no/-to* (теж безособові)."
      }
    }
  },

  // 8 — summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · T60", ua: "Підсумок · T60" },
    formula: "s. 114  ·  domknięcie",
    promptPlace: "before",
    prompt: {
      pl: "Zapamiętaj na dziś. Jutro / w T61: formy nieosobowe *-no/-to* i *nie* z czasownikiem.",
      ua: "Запам’ятай на сьогодні. Завтра / у T61: безособові форми *-no/-to* і *nie* з дієсловом."
    },
    items: [
      { pl: "Czasownik = czynności, stany, procesy.", ua: "Дієслово = дії, стани, процеси." },
      { pl: "Odmiana: osoba · liczba · czas · (przeszły/przyszły) rodzaj.", ua: "Відміна: особа · число · час · (мин./майб.) рід." },
      { pl: "Bezokolicznik nie wskazuje wykonawcy.", ua: "Інфінітив не вказує виконавця." },
      emT60("Dalej → T61: -no/-to · nie z czasownikiem")
    ],
    task: {
      id: "t60-s08-podsum",
      type: "true-false",
      question: {
        pl: "Czy twierdzenie jest prawdziwe? „Czasownik odmienia się m.in. przez osoby i liczby.”",
        ua: "Чи твердження правильне? «Дієслово відмінюється зокрема за особами і числами.»"
      },
      options: [
        { id: "true", label: { pl: "Prawda", ua: "Правда" } },
        { id: "false", label: { pl: "Fałsz", ua: "Хиба" } }
      ],
      answer: "true",
      hint: {
        pl: "Ramka definicji.",
        ua: "Рамка означення."
      },
      explanation: {
        pl: "Prawda — osoby i liczby; w przeszłym/przyszłym także rodzaje.",
        ua: "Правда — особи й числа; у мин./майб. також рід."
      }
    }
  }
]};
