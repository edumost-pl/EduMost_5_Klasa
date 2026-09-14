function emT41(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T41 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT41(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T41 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 76–77  ·  Lekcja 41  ·  uosobienie",
    promptPlace: "before",
    prompt: {
      pl: "Druga godzina przy Tuwimie *Deszczyk*. Wczoraj: bohater, epitety, porównania, marzenia. Dziś serce tematu: ramka *uosobienie* (personifikacja), po co ten zabieg, tekst w *1. osobie liczby pojedynczej*, dialog kropli i cechy ludzkie w *innych* fragmentach. Polski pierwszy. Włącz 🇺🇦.",
      ua: "Друга година при Тувімі *Deszczyk*. Учора: герой, епітети, порівняння, мрії. Сьогодні серце теми: рамка *uosobienie* (персоніфікація), навіщо цей засіб, текст у *1. особі однини*, діалог крапель і людські риси в *інших* уривках. Польська перша. Увімкни 🇺🇦."
    },
    items: [
      { pl: "powiem, czym jest *uosobienie* i że to rodzaj *przenośni*;", ua: "скажу, що таке *uosobienie* і що це вид *przenośni*;" },
      { pl: "uzupełnię schemat: deszcz jak *kto?* / zachowuje się jak *kto?*;", ua: "доповню схему: дощ як *хто?* / поводиться як *хто?*;" },
      { pl: "napiszę w imieniu deszczyku, czego pragnął — czasowniki w *1. os. lp.*;", ua: "напишу від імені дощика, чого прагнув — дієслова в *1. ос. одн.*;" },
      { pl: "zapiszę dialog dwóch kropli z myślnikami;", ua: "запишу діалог двох крапель з тире;" },
      { pl: "wskażę cechy ludzkie w cytatach (Jerzyna, Ficowski, Gałczyński, Kern, Andersen).", ua: "вкажу людські риси в цитатах (Jerzyna, Ficowski, Gałczyński, Kern, Andersen)." }
    ],
    task: {
      id: "t41-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Wyjaśnić uosobienie i podać przykład z Deszczyku.", ua: "Пояснити уособлення і навести приклад з Deszczyku." } },
        { id: "b", label: { pl: "Napisać kilka zdań w 1. osobie: ja, deszczyk, marzę…", ua: "Написати кілька речень у 1. особі: я, deszczyk, marzę…" } },
        { id: "c", label: { pl: "Na nowo uczyć się glos wilgny / mżyć — to była lekcja 40.", ua: "Наново вчити глоси wilgny / mżyć — це був урок 40." } },
        { id: "d", label: { pl: "Rozpoznać cechy ludzkie w fragmentach z s. 77.", ua: "Розпізнати людські риси в уривках зі с. 77." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Glosy i parasol epitetów zamknęliśmy wczoraj. Co jest *nowe* na s. 77?",
        ua: "Глоси і парасольку епітетів закрили вчора. Що *нове* на с. 77?"
      },
      explanation: {
        pl: "Dziś: ramka, 1. osoba, dialog, fragmenty. Glosy — lekcja 40 (wolno wrócić, ale to nie cel godziny).",
        ua: "Сьогодні: рамка, 1. особа, діалог, уривки. Глоси — урок 40 (можна повернутись, але це не мета години)."
      }
    }
  },
  // 2
  {
    type: "observe",
    heading: { pl: "Przypomnienie z lekcji 40", ua: "Нагадування з уроку 40" },
    formula: "s. 76  ·  nagranie  ·  recap",
    promptPlace: "before",
    prompt: {
      pl: "Włącz nagranie jeszcze raz. Trzy kotwice z wczoraj: *kto* pada, *jaki* jest teraz, *czego* chce. Bez tego ramka uosobienia będzie pusta.",
      ua: "Увімкни запис ще раз. Три якорі з учора: *хто* падає, *який* він зараз, *чого* хоче. Без цього рамка уособлення буде порожня."
    },
    visual: vizGhT41("t40-deszczyk.png", {
      prompt: "Deszczyk.",
      alt: {
        pl: "Parasol, drobny deszcz i wróbel na drucie.",
        ua: "Парасолька, дрібний дощ і горобець на дроті."
      }
    }),
    items: [
      { pl: "Bohater = kapuśniaczek, nie Tuwim.", ua: "Герой = kapuśniaczek, не Тувім." },
      { pl: "Teraz: mży, kropi, sypie się. Marzy: ulewa, rynny, kałuże.", ua: "Зараз: мрячить, кропить, сиплеться. Мріє: злива, ринви, калюжі." },
      { pl: "Porównania: *jak muszki*, *jakby maczek*. Epitety: *młodziutki, siwy, biedna*.", ua: "Порівняння: *jak muszki*, *jakby maczek*. Епітети: *młodziutki, siwy, biedna*." }
    ],
    task: {
      id: "t41-s02-recap",
      type: "single-choice",
      question: {
        pl: "Które zdanie jest pewnym mostem z lekcji 40 do dzisiejszej ramki?",
        ua: "Яке речення є певним мостом з уроку 40 до сьогоднішньої рамки?"
      },
      options: [
        { id: "a", label: { pl: "Deszczyk marzy i chce być dorosły — to zachowanie ludzkie.", ua: "Дощик мріє і хоче бути дорослим — це людська поведінка." } },
        { id: "b", label: { pl: "Van Gogh malował słoneczniki, bo lubił Arles.", ua: "Ван Гог малював соняшники, бо любив Арль." } },
        { id: "c", label: { pl: "Przymiotnik odmieniamy przez przypadki jak rzeczownik.", ua: "Прикметник відмінюємо за відмінками як іменник." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj ludzkiego zachowania deszczu. Van Gogh = 39. Odmiana = 37.",
        ua: "Шукай людську поведінку дощу. Ван Гог = 39. Відміна = 37."
      },
      explanation: {
        pl: "Most: deszcz jak dziecko (marzy). To przygotowanie ramki. Reszta — inne lekcje.",
        ua: "Міст: дощ як дитина (мріє). Це підготовка рамки. Решта — інші уроки."
      }
    }
  },
  // 3
  {
    type: "concept",
    heading: { pl: "Uosobienie", ua: "Уособлення" },
    formula: "s. 77  ·  ramka  ·  zapamiętaj",
    promptPlace: "before",
    prompt: {
      pl: "To *ramka z podręcznika* — definicja do zeszytu. Zapisz ją. Most: українське *уособлення* / *персоніфікація*. W baśniach bywa bardzo często (wilk mówi, igła robi figle).",
      ua: "Це *рамка з підручника* — означення до зошита. Запиши. Міст: українське *уособлення* / *персоніфікація*. У казках буває дуже часто (вовк говорить, голка бешкетує)."
    },
    text: {
      pl: "W literaturze cechy właściwe ludziom często nadaje się zwierzętom, roślinom, zjawiskom przyrody czy przedmiotom. Oznacza to, że się zachowują i działają jak osoby, na przykład mówią, płaczą, śmieją się, marzą, śnią, wyrażają swoje uczucia. Taki zabieg artystyczny nazywamy **uosobieniem**. Uosobienie jest rodzajem **przenośni**.",
      ua: "У літературі риси, властиві людям, часто надають тваринам, рослинам, явищам природи чи предметам. Це означає, що вони поводяться і діють як особи: говорять, плачуть, сміються, мріють, снять, виражають почуття. Такий художній засіб називаємо **уособленням**. Уособлення є різновидом **переносного значення** (*przenośnia*)."
    },
    items: [
      { pl: "Komu można nadać cechy ludzi: zwierzętom, roślinom, zjawiskom (*deszcz*), przedmiotom.", ua: "Кому можна надати риси людей: тваринам, рослинам, явищам (*дощ*), предметам." },
      { pl: "Jak się wtedy zachowują: mówią, płaczą, śmieją się, *marzą*, śnią, czują.", ua: "Як тоді поводяться: говорять, плачуть, сміються, *мріють*, снять, відчувають." },
      { pl: "W *Deszczyku*: marzy, chce być dorosły, nie potrafi bębnić, pusząc się — jak dziecko.", ua: "У *Deszczyku*: мріє, хоче бути дорослим, не вміє барабанити, пиндючиться — як дитина." },
      { pl: "Uosobienie ⊂ przenośnia (nie bierzemy słów dosłownie: deszcz nie ma pokoju i zeszytu).", ua: "Уособлення ⊂ переносне значення (не беремо слова буквально: дощ не має кімнати і зошита)." }
    ],
    task: {
      id: "t41-s03-definicja",
      type: "true-false",
      question: {
        pl: "Czy uosobienie to to samo co epitet — słowo *jaki?* przy rzeczowniku, na przykład *siwy kapuśniaczek*?",
        ua: "Чи уособлення — це те саме, що епітет — слово *який?* при іменнику, наприклад *siwy kapuśniaczek*?"
      },
      answer: false,
      hint: {
        pl: "Ramka mówi o *zachowaniu jak osoba*. Epitet tylko *określa*. Czy *siwy* to już marzenie i uczucia?",
        ua: "Рамка каже про *поведінку як особа*. Епітет лише *означає*. Чи *siwy* — уже мрія і почуття?"
      },
      explanation: {
        pl: "Fałsz. *Siwy kapuśniaczek* = epitet. Uosobienie = deszcz *marzy*, *chce*, *czuje się biedny*. To rodzaj przenośni.",
        ua: "Хиба. *Siwy kapuśniaczek* = епітет. Уособлення = дощ *мріє*, *хоче*, *почувається бідолашним*. Це вид переносного значення."
      }
    }
  },
  // 4
  {
    type: "practice",
    heading: { pl: "Deszcz jak kto?", ua: "Дощ як хто?" },
    formula: "s. 77  ·  zad. 2  ·  schemat",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: przeczytaj wiersz oraz ramkę, potem uzupełnij. *Osoba mówiąca* wypowiada się o deszczu jak o (kim? czym?)… *Deszcz zachowuje się jak* (kto? co?)… *ponieważ* (co robi?).",
      ua: "Підручник: перечитай вірш і рамку, потім доповни. *Особа, що говорить*, висловлюється про дощ як про (кого? що?)… *Дощ поводиться як* (хто? що?)… *тому що* (що робить?)."
    },
    items: [
      { pl: "O deszczu jak o *osobie* / *dziecku* / *kimś, kto ma uczucia*.", ua: "Про дощ як про *особу* / *дитину* / *когось, хто має почуття*." },
      { pl: "Deszcz zachowuje się jak *człowiek* (mały, niedoceniany), *ponieważ* marzy, chce być dorosły, wstydzi się słabości.", ua: "Дощ поводиться як *людина* (мала, недооцінена), *тому що* мріє, хоче бути дорослим, соромиться слабкості." },
      { pl: "Nie pisz «jak chmura» albo «jak mapa pogody» — to nie cechy ludzi.", ua: "Не пиши «як хмара» або «як мапа погоди» — це не риси людей." }
    ],
    task: {
      id: "t41-s04-schemat",
      type: "single-choice",
      question: {
        pl: "Jak NA PEWNO dokończyć: «Deszcz zachowuje się jak…, ponieważ…»?",
        ua: "Як НАПЕВНО закінчити: «Deszcz zachowuje się jak…, ponieważ…»?"
      },
      options: [
        { id: "a", label: { pl: "jak osoba / dziecko, ponieważ marzy i chce być dorosły", ua: "як особа / дитина, бо мріє і хоче бути дорослим" } },
        { id: "b", label: { pl: "jak termometr, ponieważ pokazuje temperaturę", ua: "як термометр, бо показує температуру" } },
        { id: "c", label: { pl: "jak van Gogh, ponieważ maluje żółte kwiaty", ua: "як ван Гог, бо малює жовті квіти" } }
      ],
      answer: "a",
      hint: {
        pl: "Ramka: zachowują się i działają *jak osoby*. Marzą, śnią, czują.",
        ua: "Рамка: поводяться і діють *як особи*. Мріють, снять, відчувають."
      },
      explanation: {
        pl: "Osoba mówiąca traktuje deszcz jak kogoś. Dowód: marzy, chce, nie potrafi, biedna kapaninka.",
        ua: "Особа, що говорить, трактує дощ як когось. Доказ: мріє, хоче, не вміє, biedna kapaninka."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Po co to uosobienie", ua: "Навіщо це уособлення" },
    formula: "s. 77  ·  funkcja zabiegu",
    promptPlace: "before",
    prompt: {
      pl: "Zabieg nie jest ozdobą «dla ładnego». Kiedy deszcz *marzy*, łatwiej nam *współczuć* kapuśniaczkowi i zobaczyć zwykłą pogodę oczami dziecka. To właśnie chcą te dwie lekcje.",
      ua: "Засіб — не прикраса «для краси». Коли дощ *мріє*, нам легше *співчувати* kapuśniaczkowi і побачити звичайну погоду очима дитини. Саме це хочуть донести ці два уроки."
    },
    items: [
      { pl: "Współczucie: *kapaninka biedna*, *sił ostatkiem* — prawie film o kimś małym.", ua: "Співчуття: *kapaninka biedna*, *sił ostatkiem* — майже фільм про когось малого." },
      { pl: "Humor i wzruszenie na końcu: wróbel strząsa kroplę — marzenie pryska.", ua: "Гумор і зворушення в кінці: горобець струшує краплю — мрія зникає." },
      { pl: "Wyobraźnia: mżawka przestaje być «złą pogodą», staje się bohaterem.", ua: "Уява: мряка перестає бути «поганою погодою», стає героєм." }
    ],
    task: {
      id: "t41-s05-po-co",
      type: "true-false",
      question: {
        pl: "Czy Tuwim użył uosobienia głównie po to, żeby podać prognozę pogody na jutro (mm deszczu, wiatr, temperatura)?",
        ua: "Чи Тувім ужив уособлення головно для того, щоб дати прогноз погоди на завтра (мм дощу, вітер, температура)?"
      },
      answer: false,
      hint: {
        pl: "Lekcje 34–35 to studio pogody. Ten wiersz jest z cyklu *Z wielkiej chmury* — literatura.",
        ua: "Уроки 34–35 — студія погоди. Цей вірш із циклу *Z wielkiej chmury* — література."
      },
      explanation: {
        pl: "Fałsz. Nie ma mm i mapy. Uosobienie ożywia deszcz, żebyśmy poczuli jego marzenia.",
        ua: "Хиба. Немає мм і мапи. Уособлення оживляє дощ, щоб ми відчули його мрії."
      }
    }
  },
  // 6
  {
    type: "practice",
    heading: { pl: "Trzy środki obok siebie", ua: "Три засоби поруч" },
    formula: "s. 76–77  ·  epitet · porównanie · uosobienie",
    promptPlace: "before",
    prompt: {
      pl: "Żeby nie pomylić etykiet. *Epitet* = jaki? *Porównanie* = jak / jakby. *Uosobienie* = zachowuje się jak człowiek. W jednym wierszu mogą być *wszystkie trzy*.",
      ua: "Щоб не плутати етикетки. *Епітет* = який? *Порівняння* = jak / jakby. *Уособлення* = поводиться як людина. В одному вірші можуть бути *всі три*."
    },
    items: [
      { pl: "Epitet: *młodziutki deszczyk*, *siwy kapuśniaczek*.", ua: "Епітет: *młodziutki deszczyk*, *siwy kapuśniaczek*." },
      { pl: "Porównanie: *jak muszki*, *jakby maczek*.", ua: "Порівняння: *jak muszki*, *jakby maczek*." },
      { pl: "Uosobienie: *chciały być dorosłym deszczem*, *tak to sobie marzy*.", ua: "Уособлення: *chciały być dorosłym deszczem*, *tak to sobie marzy*." }
    ],
    task: {
      id: "t41-s06-trzy",
      type: "single-choice",
      question: {
        pl: "«Tak to sobie marzy kapaninka biedna» — to przede wszystkim:",
        ua: "«Tak to sobie marzy kapaninka biedna» — це передусім:"
      },
      options: [
        { id: "a", label: { pl: "uosobienie (deszcz marzy jak osoba); *biedna* dodatkowo jest epitetem", ua: "уособлення (дощ мріє як особа); *biedna* додатково є епітетом" } },
        { id: "b", label: { pl: "tylko porównanie, bo jest słowo *jak*", ua: "лише порівняння, бо є слово *jak*" } },
        { id: "c", label: { pl: "prognoza pogody ze studia", ua: "прогноз погоди зі студії" } }
      ],
      answer: "a",
      hint: {
        pl: "Czy w tym cytacie jest *jak* / *jakby*? Kto *marzy*?",
        ua: "Чи в цій цитаті є *jak* / *jakby*? Хто *мріє*?"
      },
      explanation: {
        pl: "Marzy = cecha ludzka → uosobienie. *Biedna* = epitet. Porównania są w strofie 1 (*jak*, *jakby*).",
        ua: "Marzy = людська риса → уособлення. *Biedna* = епітет. Порівняння — у строфі 1 (*jak*, *jakby*)."
      }
    }
  },
  // 7
  {
    type: "practice",
    heading: { pl: "Ja, deszczyk, marzę", ua: "Я, deszczyk, мрію" },
    formula: "s. 77  ·  zad. 3  ·  1. os. lp.",
    promptPlace: "before",
    prompt: {
      pl: "W imieniu bohatera napisz, czego pragnął i o czym marzył. Czasowniki w *1. osobie liczby pojedynczej*: *chcę, marzę, chciałbym, lunę, rozleję się*. Nie pisz «on chce» — mówisz *ja*.",
      ua: "Від імені героя напиши, чого прагнув і про що мріяв. Дієслова в *1. особі однини*: *chcę, marzę, chciałbym, lunę, rozleję się*. Не пиши «він хоче» — кажеш *я*."
    },
    reveal: true,
    steps: [
      {
        formula: "wzór",
        text: {
          pl: [
            "Jestem młodziutki deszczyk. Ledwo kroplę i nie potrafię bębnić w blachy.",
            "Marzę, żeby być dorosłym deszczem.",
            "Chciałbym lunąć ulewą, rozpluskać się w rynnach i rozlać się w kałuży."
          ],
          ua: [
            "Я молодесенький дощик. Ледве кроплю і не вмію барабанити по блясі.",
            "Мрію бути дорослим дощем.",
            "Хотів би хлюпнути зливою, розплюскатися в ринвах і розлитися в калюжі."
          ]
        }
      }
    ],
    task: {
      id: "t41-s07-osoba",
      type: "open-answer",
      question: {
        pl: "Napisz 3 zdania od osoby deszczyku. Zacznij od *Jestem* albo *Marzę*. Czasowniki: chcę / chciałbym / lunę…",
        ua: "Напиши 3 речення від особи дощика. Почни з *Jestem* або *Marzę*. Дієслова: chcę / chciałbym / lunę…"
      },
      answer: [
        "Jestem młodziutki deszczyk. Marzę, żeby być dorosłym deszczem. Chciałbym lunąć ulewą i rozlać się w kałuży."
      ],
      hint: {
        pl: "1. osoba: *jestem, kroplę, chcę, marzę, chciałbym*. Nie: *on kropi*. Polski.",
        ua: "1. особа: *jestem, kroplę, chcę, marzę, chciałbym*. Не: *on kropi*. Польською."
      },
      explanation: {
        pl: "Silnik nie ocenia poezji. Sprawdź sam: 1) ja, nie on; 2) marzenia z wiersza (ulewa, rynny, kałuże); 3) polski. Wzór jest jedną z możliwości.",
        ua: "Рушій не оцінює поезію. Сам: 1) я, не він; 2) мрії з вірша (злива, ринви, калюжі); 3) польська. Зразок — одна з можливостей."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Dialog kropli", ua: "Діалог крапель" },
    formula: "s. 77  ·  zad. 4  ·  myślnik",
    promptPlace: "before",
    prompt: {
      pl: "Wyobraź sobie i zapisz rozmowę *między kroplami deszczu* z utworu Tuwima. Każdą replikę zacznij od *myślnika* (—). Mogą marzyć razem albo jedna już wie, że wróbel czeka na drucie.",
      ua: "Уяви і запиши розмову *між краплями дощу* з твору Тувіма. Кожну репліку почни з *тире* (—). Можуть мріяти разом або одна вже знає, що горобець чекає на дроті."
    },
    reveal: true,
    steps: [
      {
        formula: "wzór dialogu",
        text: {
          pl: [
            "— Halo, siostro! Też chcesz być dorosłym deszczem?",
            "— Strasznie chcę. Lunąć ulewą i zabębnić w szyby!",
            "— Cicho… Na drucie jeździ kropla. Wróbel już przysiadł.",
            "— Och. Chyba po całym deszczu."
          ],
          ua: [
            "— Привіт, сестро! Ти теж хочеш бути дорослим дощем?",
            "— Дуже хочу. Хлюпнути зливою і забарабанити в шибки!",
            "— Тихенько… На дроті їде крапля. Горобець уже сів.",
            "— Ох. Мабуть, уже по всьому дощі."
          ]
        }
      }
    ],
    task: {
      id: "t41-s08-dialog",
      type: "open-answer",
      question: {
        pl: "Napisz 3–4 zdania dialogu. Każdą linię zacznij od myślnika. Mówią dwie krople z wiersza Tuwima.",
        ua: "Напиши 3–4 речення діалогу. Кожен рядок почни з тире. Говорять дві краплі з вірша Тувіма."
      },
      answer: [
        "— Halo, siostro! Też chcesz być dorosłym deszczem?",
        "— Strasznie chcę. Lunąć ulewą i zabębnić w szyby!",
        "— Cicho… Na drucie jeździ kropla. Wróbel już przysiadł."
      ],
      hint: {
        pl: "Zacznij każdą linię od —. Dwie krople. Temat: marzenia albo wróbel. Polski.",
        ua: "Почни кожен рядок з —. Дві краплі. Тема: мрії або горобець. Польською."
      },
      explanation: {
        pl: "Silnik nie ocenia dialogu. Sprawdź: myślniki, dwa głosy, polski, widać deszczyk / ulewę / wróbla. Wzór jest jedną z możliwości.",
        ua: "Рушій не оцінює діалог. Сам: тире, два голоси, польська, видно дощик / зливу / горобця. Зразок — одна з можливостей."
      }
    }
  },
  // 9
  {
    type: "observe",
    heading: { pl: "Cechy ludzkie w cytatach", ua: "Людські риси в цитатах" },
    formula: "s. 77  ·  zad. 5",
    promptPlace: "before",
    prompt: {
      pl: "Ustal, jakie cechy ludzkie nadano zwierzętom, roślinom, zjawiskom i przedmiotom. Odsłoń cztery fragmenty. Pytanie za każdym razem: *kto* dostał ludzkie zachowanie i *co* robi jak osoba?",
      ua: "Встанови, які людські риси надано тваринам, рослинам, явищам і предметам. Відкрий чотири уривки. Питання щоразу: *хто* дістав людську поведінку і *що* робить як особа?"
    },
    reveal: true,
    steps: [
      {
        formula: "Zbigniew Jerzyna",
        text: {
          pl: [
            "Pod śniegiem ugina się świerk, sarna przebiegła obok.",
            "Pomyślała sarna: «Las to baśń, a świerk – biały obłok»."
          ]
        }
      },
      {
        formula: "Jerzy Ficowski",
        text: {
          pl: [
            "Dwa świerszcze się spotkały.",
            "— Witam cię, kuzynie! — rzekł jeden.",
            "— Co porabiasz?",
            "— Ćwierkam przy kominie!"
          ]
        }
      },
      {
        formula: "Konstanty Ildefons Gałczyński",
        text: {
          pl: [
            "Ja jestem noc czerwcowa, królowa jaśminowa,",
            "zapatrzcie się w moje ręce, wsłuchajcie się w śpiewny chód."
          ]
        }
      },
      {
        formula: "Ludwik Jerzy Kern",
        text: {
          pl: [
            "Była igła. Owej igle",
            "Zachciało się robić figle.",
            "Na złość biednej cioci Fici",
            "Schowała się między nici."
          ]
        }
      }
    ],
    task: {
      id: "t41-s09-cytaty",
      type: "multiple-choice",
      question: {
        pl: "Gdzie NA PEWNO widać uosobienie? Zaznacz wszystkie pewne.",
        ua: "Де НАПЕВНО видно уособлення? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Sarna pomyślała; świerszcze witają się i mówią.", ua: "Сарна подумала; цвіркуни вітаються і говорять." } },
        { id: "b", label: { pl: "Noc ma ręce i chód; igła robi figle i chowa się na złość.", ua: "Ніч має руки і ходу; голка бешкетує і ховається на зло." } },
        { id: "c", label: { pl: "Świerk ugina się pod śniegiem — to tylko fakt przyrodniczy, bez uczuć.", ua: "Ялина гнеться під снігом — лише природний факт, без почуттів." } },
        { id: "d", label: { pl: "Prognoza z lekcji 35 (mapa, mm, wiatr) to uosobienie nocy.", ua: "Прогноз з уроку 35 (мапа, мм, вітер) — уособлення ночі." } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Uginać się pod śniegiem drzewo *może* bez poezji. Myśleć, mówić, mieć ręce, robić figle — nie.",
        ua: "Гнутися під снігом дерево *може* без поезії. Думати, говорити, мати руки, бешкетувати — ні."
      },
      explanation: {
        pl: "Uosobienie: sarna myśli, świerszcze mówią, noc-królowa, igła figluje. Sam świerk pod śniegiem może być opisem. Mapa pogody — nie ten zabieg.",
        ua: "Уособлення: сарна думає, цвіркуни говорять, ніч-королева, голка бешкетує. Сама ялина під снігом може бути описом. Мапа погоди — не цей засіб."
      }
    }
  },
  // 10
  {
    type: "practice",
    heading: { pl: "Stokrotka Andersena", ua: "Стокротка Андерсена" },
    formula: "s. 77  ·  zad. 6",
    promptPlace: "before",
    prompt: {
      pl: "Uzasadnij, że w podanym fragmencie zastosowano uosobienie. Czytaj: stokrotka *chętnie by pomogła*, *myślała*, *zapomniała* o słońcu, bo martwi się o ptaszka. Kwiat w ogrodzie tak nie planuje dnia — to osoba.",
      ua: "Обґрунтуй, що в уривку вжито уособлення. Читай: стокротка *охоче допомогла б*, *думала*, *забула* про сонце, бо хвилюється за пташку. Квітка в саду так не планує день — це особа."
    },
    items: [
      { pl: "Cytat (Hans Christian Andersen): stokrotka chętnie by pomogła uwięzionemu ptaszkowi, ale nie wie jak; zapomina o słońcu i płatkach, *myśli tylko* o nim.", ua: "Цитата (Ганс Крістіан Андерсен): стокротка охоче допомогла б ув’язненій пташці, але не знає як; забуває про сонце і пелюстки, *думає лише* про неї." },
      { pl: "Cechy ludzkie: chęć pomocy, namysł, zapomnienie, troska, bezradność.", ua: "Людські риси: бажання допомогти, роздум, забуття, турбота, безпорадність." },
      { pl: "Most z Deszczykiem: mały bohater *chce* wielkiej rzeczy i *nie daje rady* (kropla / kwiat).", ua: "Міст із Deszczykiem: малий герой *хоче* великої речі і *не дає ради* (крапля / квітка)." }
    ],
    task: {
      id: "t41-s10-andersen",
      type: "true-false",
      question: {
        pl: "Czy we fragmencie o stokrotce jest uosobienie, ponieważ kwiat myśli, chce pomóc i zapomina o sobie z troski o ptaszka?",
        ua: "Чи в уривку про стокротку є уособлення, бо квітка думає, хоче допомогти і забуває про себе з турботи про пташку?"
      },
      answer: true,
      hint: {
        pl: "Ramka: marzą, śnią, wyrażają uczucia. Czy stokrotka *myśli* i *chce pomóc*?",
        ua: "Рамка: мріють, снять, виражають почуття. Чи стокротка *думає* і *хоче допомогти*?"
      },
      explanation: {
        pl: "Prawda. Myślenie, chęć pomocy i zapomnienie o sobie to cechy ludzi nadane kwiatowi.",
        ua: "Правда. Мислення, бажання допомогти і забуття про себе — людські риси, надані квітці."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 76–77  ·  lekcja 41",
    promptPlace: "before",
    prompt: {
      pl: "Zamykamy oba tematy przy *Deszczyku*. Praca domowa (wybierz jedno): 1) dokończ w zeszycie tekst w 1. osobie i dialog kropli; 2) metodą dramy wciel się w kroplę; 3) napisz krótki wiersz o *innym* zjawisku z uosobieniem (wiatr, śnieg, słońce).",
      ua: "Закриваємо обидві теми при *Deszczyku*. Домашня (вибери одне): 1) допиши в зошиті текст у 1. особі і діалог крапель; 2) методом драми втілись у краплю; 3) напиши короткий вірш про *інше* явище з уособленням (вітер, сніг, сонце)."
    },
    items: [
      { pl: "Uosobienie = cechy ludzi nadane zwierzętom, roślinom, zjawiskom, przedmiotom; rodzaj przenośni.", ua: "Уособлення = риси людей, надані тваринам, рослинам, явищам, предметам; вид переносного значення." },
      { pl: "W Deszczyku: marzy, chce być dorosły — dlatego współczujemy kapuśniaczkowi.", ua: "У Deszczyku: мріє, хоче бути дорослим — тому співчуваємо kapuśniaczkowi." },
      { pl: "1. os. lp. + dialog z myślnikiem + fragmenty z s. 77.", ua: "1. ос. одн. + діалог з тире + уривки зі с. 77." },
      { pl: "Nie mylić z epitetem (*jaki?*) i porównaniem (*jak*).", ua: "Не плутати з епітетом (*який?*) і порівнянням (*jak*)." }
    ],
    task: {
      id: "t41-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Umiem uosobienie, tekst w 1. osobie, dialog kropli i cechy ludzkie w cytatach.", ua: "Вмію уособлення, текст у 1. особі, діалог крапель і людські риси в цитатах." } },
        { id: "b", label: { pl: "Tylko powtórzyłem glosy wilgny i mżyć — bez ramki s. 77.", ua: "Лише повторив глоси wilgny і mżyć — без рамки с. 77." } },
        { id: "c", label: { pl: "Opisałem martwą naturę van Gogha trzema częściami.", ua: "Описав натюрморт ван Гога трьома частинами." } }
      ],
      answer: "a",
      hint: {
        pl: "Glosy = 40. Słoneczniki = 39. Co było na s. 77?",
        ua: "Глоси = 40. Соняшники = 39. Що було на с. 77?"
      },
      explanation: {
        pl: "Lekcja 41 = ramka uosobienia + pisanie + fragmenty. Glosy zostały w 40. Van Gogh w 39.",
        ua: "Урок 41 = рамка уособлення + письмо + уривки. Глоси лишились у 40. Ван Гог у 39."
      }
    }
  }
] };
