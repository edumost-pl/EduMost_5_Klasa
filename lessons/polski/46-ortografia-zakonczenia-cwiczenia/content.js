function emT46(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T46 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT46(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T46 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 85  ·  Lekcja 46  ·  ż · u · ćwiczenia",
    promptPlace: "before",
    prompt: {
      pl: "Druga godzina z s. 85. Wczoraj: **ó, rz, ch**. Dziś jabłka **ż** i **u**, dokończenie dialogu (*-uje*), rysunek pokoju, anegdota Newtona i *krótkie dyktando*. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга година з с. 85. Учора: **ó, rz, ch**. Сьогодні яблука **ż** і **u**, доповнення діалогу (*-uje*), малюнок кімнати, анекдот Ньютона і *короткий диктант*. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "stosuję *ż* w żeńskich *-aż / -eż* (*sprzedaż, młodzież*);", ua: "застосовую *ż* у жіночих *-aż / -eż* (*sprzedaż, młodzież*);" },
      { pl: "piszę *u* w *-uj / -uje / -ujący* i w *-unka, -unek, -ura…*;", ua: "пишу *u* в *-uj / -uje / -ujący* і в *-unka, -unek, -ura…*;" },
      { pl: "odnajdę na rysunku wyrazy z ó, u, rz, ż, ch;", ua: "знайду на малюнку слова з ó, u, rz, ż, ch;" },
      { pl: "uzupełnię mieszany tekst (wszystkie reguły);", ua: "доповню змішаний текст (усі правила);" },
      { pl: "ułożę krótkie dyktando z omawianymi zakończeniami.", ua: "складу короткий диктант з опрацьованими закінченнями." }
    ],
    task: {
      id: "t46-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Stosować reguły ż i u w zakończeniach.", ua: "Застосовувати правила ż і u у закінченнях." } },
        { id: "b", label: { pl: "Ćwiczyć mieszankę wszystkich pięciu jabłek w tekście.", ua: "Тренувати суміш усіх п’яти яблук у тексті." } },
        { id: "c", label: { pl: "Od nowa uczyć się tylko komiksu z lekcji 45, bez dyktanda.", ua: "Знову вчити лише комікс з уроку 45, без диктанту." } },
        { id: "d", label: { pl: "Ułożyć krótkie dyktando z zakończeniami.", ua: "Скласти короткий диктант із закінченнями." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Cel programu: także *układa tekst dyktanda*.",
        ua: "Мета програми: також *складає текст диктанту*."
      },
      explanation: {
        pl: "Dziś: ż, u + ćwiczenia 3–4 + dyktando. Komiks już był wczoraj.",
        ua: "Сьогодні: ż, u + вправи 3–4 + диктант. Комікс уже був учора."
      }
    }
  },
  // 2 concept ż u
  {
    type: "concept",
    heading: { pl: "Zapamiętaj · jabłka ż i u", ua: "Zapamiętaj · яблука ż і u" },
    formula: "s. 85  ·  schemat PISZEMY",
    promptPlace: "before",
    prompt: {
      pl: "Dwa jabłka, których wczoraj nie domykaliśmy. Do zeszytu!",
      ua: "Два яблука, які вчора не закривали. У зошит!"
    },
    text: {
      pl: "**ż** w rzeczownikach żeńskich na **-aż, -eż** (*sprzedaż, odzież, młodzież*; wyjątki: *macierz, twarz*). **u** w formach czasownika **-uj, -uje, -ujący** (*maluj, kupuje, rysujący*); w rzeczownikach **-unka, -unek, -uś, -uga, -ura, -utki** (*piastunka, pakunek, papuga*); oraz **na końcu wyrazu** (*w domu*).",
      ua: "**ż** у жіночих на **-aż, -eż** (*sprzedaż, odzież, młodzież*; винятки: *macierz, twarz*). **u** у дієсловах **-uj, -uje, -ujący**; у іменниках **-unka, -unek, -uga, -ura…**; і **на кінці слова** (*w domu*)."
    },
    items: [
      { pl: "*młodzież* → **-eż** = **ż** (nie *młodzierż*).", ua: "*młodzież* → **-eż** = **ż** (не *młodzierż*)." },
      { pl: "*rysuje, planuje, zastosuje* → zawsze **-uje** = **u**.", ua: "*rysuje, planuje, zastosuje* → завжди **-uje** = **u**." },
      { pl: "*papuga, tatuś* → **-uga / -uś** = **u**.", ua: "*papuga, tatuś* → **-uga / -uś** = **u**." },
      { pl: "Wyjątki żeńskie z **rz**: *twarz, macierz*.", ua: "Винятки жіночі з **rz**: *twarz, macierz*." }
    ],
    task: {
      id: "t46-s02-ramka",
      type: "single-choice",
      question: {
        pl: "Który zapis jest poprawny?",
        ua: "Який запис правильний?"
      },
      options: [
        { id: "a", label: { pl: "młodzież · rysuje · papuga", ua: "młodzież · rysuje · papuga" } },
        { id: "b", label: { pl: "młodzierż · rysóje · papóga", ua: "młodzierż · rysóje · papóga" } },
        { id: "c", label: { pl: "młodzież · rysóje · papuga", ua: "młodzież · rysóje · papuga" } }
      ],
      answer: "a",
      hint: {
        pl: "*-eż* → ż; *-uje* → u; *-uga* → u.",
        ua: "*-eż* → ż; *-uje* → u; *-uga* → u."
      },
      explanation: {
        pl: "*młodzież, rysuje, papuga* — jabłka ż i u.",
        ua: "*młodzież, rysuje, papuga* — яблука ż і u."
      }
    }
  },
  // 3 dialog verbs
  {
    type: "practice",
    heading: { pl: "Dialog · dokańczamy luki", ua: "Діалог · доповнюємо пропуски" },
    formula: "s. 85  ·  zad. 2  ·  -uje i dopełniacze",
    promptPlace: "before",
    prompt: {
      pl: "Ten sam dialog co wczoraj. Dziś: *mu, bursztynu, rysuje, planuje, zastosuje, wskazówek*.",
      ua: "Той самий діалог, що вчора. Сьогодні: *mu, bursztynu, rysuje, planuje, zastosuje, wskazówek*."
    },
    visual: vizGhT46("t46-lekarz.jpg", {
      prompt: "Dialog służących — luki czasownikowe.",
      alt: {
        pl: "Dialog: rys..je, plan..je, zastos..je, wskaz…wek…",
        ua: "Діалог: rys..je, plan..je, zastos..je, wskaz…wek…"
      }
    }),
    items: [
      { pl: "*m…* → **mu** (zaimek; **u** na końcu).", ua: "*m…* → **mu** (займенник; **u** на кінці)." },
      { pl: "*bursztyn…* → **bursztynu** (D. lp.; **u**).", ua: "*bursztyn…* → **bursztynu** (Р. одн.; **u**)." },
      { pl: "*rys..je / plan..je / zastos..je* → **rysuje, planuje, zastosuje** (*-uje*).", ua: "*rys..je / plan..je / zastos..je* → **rysuje, planuje, zastosuje** (*-uje*)." },
      { pl: "*wskaz…wek* → **wskazówek** (*ó* w temacie *wskazówka*).", ua: "*wskaz…wek* → **wskazówek** (*ó* в основі *wskazówka*)." },
      { pl: "Uwaga: w książce bywa literówka *zastow..je* → poprawnie **zastosuje**.", ua: "Увага: у книзі буває друкарська помилка *zastow..je* → правильно **zastosuje**." }
    ],
    task: {
      id: "t46-s03-uje",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienia są NA PEWNO poprawne? Zaznacz wszystkie pewne.",
        ua: "Які доповнення НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "rysuje · planuje · zastosuje", ua: "rysuje · planuje · zastosuje" } },
        { id: "b", label: { pl: "mu · bursztynu", ua: "mu · bursztynu" } },
        { id: "c", label: { pl: "rysóje · planóje", ua: "rysóje · planóje" } },
        { id: "d", label: { pl: "wskazówek", ua: "wskazówek" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*-uje* zawsze z **u**. Nie *-óje*.",
        ua: "*-uje* завжди з **u**. Не *-óje*."
      },
      explanation: {
        pl: "Czasowniki na *-uje* + *mu/bursztynu* + *wskazówek*.",
        ua: "Дієслова на *-uje* + *mu/bursztynu* + *wskazówek*."
      }
    }
  },
  // 4 picture hunt
  {
    type: "observe",
    heading: { pl: "Rysunek · szukamy wyrazów", ua: "Малюнок · шукаємо слова" },
    formula: "s. 85  ·  zad. 3a  ·  kliknij, by powiększyć",
    promptPlace: "before",
    prompt: {
      pl: "Odszukaj elementy z *ó, u, rz, ż, ch* w nazwach. Zapisz w zeszycie minimum 8.",
      ua: "Знайди елементи з *ó, u, rz, ż, ch* у назвах. Запиши в зошит щонайменше 8."
    },
    visual: vizGhT46("t46-pokoj.png", {
      prompt: "Pokój: kucharz, duch, papuga, jeż…",
      alt: {
        pl: "Ilustracja: kucharz, duch, papuga, jeż, talerze, kalendarz, łańcuch…",
        ua: "Ілюстрація: kucharz, duch, papuga, jeż, talerze, kalendarz, łańcuch…"
      }
    }),
    items: [
      { pl: "**rz:** *kucharz, nietoperz, talerz, kalendarz, wachlarz*.", ua: "**rz:** *kucharz, nietoperz, talerz, kalendarz, wachlarz*." },
      { pl: "**ch:** *duch, kielich, łańcuch*.", ua: "**ch:** *duch, kielich, łańcuch*." },
      { pl: "**ż:** *jeż, filiżanka* (ż w środku — też liczy się do poszukiwań).", ua: "**ż:** *jeż, filiżanka*." },
      { pl: "**u:** *papuga, kufer, buty, cebula, futro, kula*.", ua: "**u:** *papuga, kufer, buty, cebula, futro, kula*." },
      { pl: "**ó:** szukaj form typu *powtórka* w dialogu / *ósmy* — albo zapisz *łańcuch* już masz z **ch**.", ua: "**ó:** шукай у діалозі; на малюнку частіше u/rz/ch/ż." }
    ],
    task: {
      id: "t46-s04-rysunek",
      type: "multiple-choice",
      question: {
        pl: "Które nazwy NA PEWNO są na rysunku i mają ó/u/rz/ż/ch? Zaznacz wszystkie pewne.",
        ua: "Які назви НАПЕВНО є на малюнку і мають ó/u/rz/ż/ch? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "kucharz · kalendarz · talerz", ua: "kucharz · kalendarz · talerz" } },
        { id: "b", label: { pl: "duch · łańcuch · papuga", ua: "duch · łańcuch · papuga" } },
        { id: "c", label: { pl: "samochód wyścigowy Formuły 1 (go nie ma)", ua: "авто Формули 1 (його немає)" } },
        { id: "d", label: { pl: "jeż", ua: "jeż" } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Spójrz: kucharz z tatuażem, duch, papuga, jeż przy kuli.",
        ua: "Подивись: кухар із татуюванням, дух, папуга, їжак біля кулі."
      },
      explanation: {
        pl: "Jest kucharz, kalendarz, talerze, duch, łańcuch, papuga, jeż. Nie ma bolidu F1.",
        ua: "Є kucharz, kalendarz, talerze, duch, łańcuch, papuga, jeż. Немає боліда F1."
      }
    }
  },
  // 5 dialog writing
  {
    type: "practice",
    heading: { pl: "Dialog bohaterów", ua: "Діалог героїв" },
    formula: "s. 85  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "Napisz krótki dialog (kucharz ↔ pan / duch). Podkreśl zakończenia z ó, u, rz, ż, ch.",
      ua: "Напиши короткий діалог (кухар ↔ пан / дух). Підкресли закінчення з ó, u, rz, ż, ch."
    },
    items: [
      { pl: "Przykład startu: *— Panie, widział pan ducha przy kufrze?*", ua: "Приклад старту: *— Panie, widział pan ducha przy kufrze?*" },
      { pl: "Użyj: *kucharz, papuga, talerz, łańcuch, kalendarz*.", ua: "Використай: *kucharz, papuga, talerz, łańcuch, kalendarz*." },
      { pl: "2–4 kwestie wystarczą.", ua: "2–4 репліки досить." }
    ],
    task: {
      id: "t46-s05-dialog",
      type: "open-answer",
      question: {
        pl: "Wklej dialog (min. 2 kwestie) z co najmniej 3 wyrazami z ó/u/rz/ż/ch w zakończeniach.",
        ua: "Встав діалог (мін. 2 репліки) із принаймні 3 словами з ó/u/rz/ż/ch у закінченнях."
      },
      hint: {
        pl: "Np. *kucharz / duch / papuga / talerz*.",
        ua: "Напр. *kucharz / duch / papuga / talerz*."
      },
      explanation: {
        pl: "Cel: świadomie użyć zakończeń z jabłek, nie tylko opisać obrazek.",
        ua: "Мета: свідомо вжити закінчення з яблук, не лише описати малюнок."
      }
    }
  },
  // 6 mixed fill Newton anecdote
  {
    type: "practice",
    heading: { pl: "Anegdota · wszystkie jabłka", ua: "Анекдот · усі яблука" },
    formula: "s. 85  ·  zad. 4",
    promptPlace: "before",
    prompt: {
      pl: "Przypomnij wszystkie reguły i uzupełnij. Kliknij tekst z kratkami.",
      ua: "Пригадай усі правила і доповни. Клацни текст із клітинками."
    },
    visual: vizGhT46("t46-newton-anekdota.png", {
      prompt: "Tekst z lukami o Newtonie.",
      alt: {
        pl: "Ćwiczenie 4: biografie Newtona z kratkami ó/u/rz/ż/ch.",
        ua: "Вправа 4: біографії Ньютона з клітинками ó/u/rz/ż/ch."
      }
    }),
    items: [
      { pl: "*wiel**u** biografia**ch** · nale**ż**ał · os**ó**b · roztargniony**ch***", ua: "*wiel**u** biografia**ch** · nale**ż**ał · os**ó**b · roztargniony**ch***" },
      { pl: "*wśr**ó**d koleg**ó**w · jem**u** · przypis**u**je · list**u** · generał**ó**w*", ua: "*wśr**ó**d koleg**ó**w · jem**u** · przypis**u**je · list**u** · generał**ó**w*" },
      { pl: "*M**ó**wią, **ż**e … żołnie**rz**ami · szok**u**jące · Nie**ch** · końc**u** · m**ó**j niepok**ó**j*", ua: "*M**ó**wią, **ż**e … żołnie**rz**ami · szok**u**jące · Nie**ch** · końc**u** · m**ó**j niepok**ó**j*" },
      { pl: "Most: *że* zawsze **ż**; *-uje/-ujący* zawsze **u**; *-ów* → **ó**.", ua: "Міст: *że* завжди **ż**; *-uje* завжди **u**; *-ów* → **ó**." }
    ],
    task: {
      id: "t46-s06-anekdota",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienia są NA PEWNO poprawne? Zaznacz wszystkie pewne.",
        ua: "Які доповнення НАПЕВНО правильні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "kolegów · generałów · wśród", ua: "kolegów · generałów · wśród" } },
        { id: "b", label: { pl: "przypisuje · szokujące ( -uje )", ua: "przypisuje · szokujące ( -uje )" } },
        { id: "c", label: { pl: "że · Niech · żołnierzami", ua: "że · Niech · żołnierzami" } },
        { id: "d", label: { pl: "koleguw · żee · Nieh", ua: "koleguw · żee · Nieh" } }
      ],
      answer: ["a", "b", "c"],
      hint: {
        pl: "*-ów* → ó; *-uje* → u; *że/Niech* — stałe zapisy.",
        ua: "*-ów* → ó; *-uje* → u; *że/Niech* — сталі записи."
      },
      explanation: {
        pl: "Mieszanka wszystkich jabłek. Błędny zestaw (d) odrzuć.",
        ua: "Суміш усіх яблук. Хибний набір (d) відкинь."
      }
    }
  },
  // 7 dyktando
  {
    type: "practice",
    heading: { pl: "Układam dyktando", ua: "Складаю диктант" },
    formula: "s. 85  ·  cel programu",
    promptPlace: "before",
    prompt: {
      pl: "Ułóż *krótki* tekst dyktanda (3–5 zdań) z wyrazami mającymi omawiane zakończenia. Podkreśl je.",
      ua: "Склади *короткий* текст диктанту (3–5 речень) зі словами з опрацьованими закінченнями. Підкресли їх."
    },
    items: [
      { pl: "Weź min. po 1 przykładzie: **ó, u, rz, ż, ch**.", ua: "Візьми мін. по 1 прикладу: **ó, u, rz, ż, ch**." },
      { pl: "Bank: *domów, lekarz, duch, młodzież, rysuje, papuga, kalendarz, wskazówek*.", ua: "Банк: *domów, lekarz, duch, młodzież, rysuje, papuga, kalendarz, wskazówek*." },
      { pl: "Możesz o Newtonie albo o kucharzu z rysunku.", ua: "Можна про Ньютона або про кухаря з малюнка." }
    ],
    task: {
      id: "t46-s07-dyktando",
      type: "open-answer",
      question: {
        pl: "Wklej swoje dyktando (3–5 zdań) i wypisz podkreślone zakończenia.",
        ua: "Встав свій диктант (3–5 речень) і випиши підкреслені закінчення."
      },
      hint: {
        pl: "Np. *Lekarz rysuje kalendarz. Młodzież słucha ducha…*",
        ua: "Напр. *Lekarz rysuje kalendarz. Młodzież słucha ducha…*"
      },
      explanation: {
        pl: "Dobry tekst ma świadome przykłady z pięciu jabłek, nie przypadkowe słowa.",
        ua: "Добрий текст має свідомі приклади з п’яти яблук, не випадкові слова."
      }
    }
  },
  // 8 summary
  {
    type: "summary",
    heading: { pl: "Podsumowanie · s. 85 domknięta", ua: "Підсумок · с. 85 закрита" },
    formula: "T45 + T46  ·  pięć jabłek",
    promptPlace: "before",
    prompt: {
      pl: "Dwie godziny, jedna strona. W zeszycie: schemat + wyjątki + dyktando.",
      ua: "Дві години, одна сторінка. У зошиті: схема + винятки + диктант."
    },
    items: [
      { pl: "T45: **ó, rz, ch** (+ wyjątki *bagaż, druh…*).", ua: "T45: **ó, rz, ch** (+ винятки *bagaż, druh…*)." },
      { pl: "T46: **ż, u** (+ *-uje* zawsze z u).", ua: "T46: **ż, u** (+ *-uje* завжди з u)." },
      { pl: "Słuch ≠ litera — reguła zakończenia.", ua: "Слух ≠ літера — правило закінчення." },
      { pl: "Dalej: *Pan Tadeusz — burza* (T47).", ua: "Далі: *Pan Tadeusz — burza* (T47)." }
    ],
    task: {
      id: "t46-s08-koniec",
      type: "true-false",
      question: {
        pl: "Czy po T45–T46 umiesz stosować reguły ó, u, rz, ż, ch w zakończeniach i ułożyć krótkie dyktando?",
        ua: "Чи після T45–T46 вмієш застосовувати правила ó, u, rz, ż, ch у закінченнях і скласти короткий диктант?"
      },
      answer: true,
      hint: {
        pl: "To był cel obu godzin z s. 85.",
        ua: "Це була мета обох годин із с. 85."
      },
      explanation: {
        pl: "Tak — reguły + ćwiczenia + własne dyktando zamykają temat.",
        ua: "Так — правила + вправи + власний диктант закривають тему."
      }
    }
  }
]};
