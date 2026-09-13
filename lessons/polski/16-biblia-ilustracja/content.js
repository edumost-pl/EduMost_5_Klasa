function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE = "Styl: miniatura średniowieczna jak w podręczniku GWO «Między nami» klasa 5 — złote tło, czarny tuszowy kontur, płaskie barwy (czerwień, zieleń, błękit, ochra), bez perspektywy, zero napisów na kadrze, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 36–38  ·  Księga Rodzaju 2  ·  Omne Bonum",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec, nie lista życzeń. Polski tekst Biblii jest pierwszy. Włącz 🇺🇦 — pod akapitem pojawi się ukraińskie tłumaczenie. Glosy z pól i klucze są schowane. […] z podręcznika zostawiamy — nic nie dopisujemy w te luki.",
        ua: "Це перевірка наприкінці. Польський текст Біблії перший. Увімкни 🇺🇦 — під абзацом буде переклад. Глоси і ключі сховані. […] з підручника не заповнюємо."
      },
      items: [
        { pl: "opowiem, co dzieje się w *Edenie* (rozdział 2, nie sześć dni z lekcji 15);", ua: "розкажу, що діється в *Едені* (розділ 2, не шість днів з уроку 15);" },
        { pl: "wskażę *numer wersetu* do sceny na XIV-wiecznej ilustracji;", ua: "вкажу *номер вірша* до сцени на ілюстрації XIV ст.;" },
        { pl: "zbiorę do opisu *czasowniki, rzeczowniki i przymiotniki*;", ua: "зберу до опису *дієслова, іменники і прикметники*;" },
        { pl: "ułożę opis ilustracji według schematu *wstęp – rozwinięcie – zakończenie*;", ua: "складу опис ілюстрації за схемою *вступ – розвиток – закінчення*;" },
        { pl: "wyjaśnię glosy: *Eden, niechybnie*; porównam tekst z obrazem.", ua: "поясню глоси: *Eden, niechybnie*; порівняю текст із образом." }
      ],
      task: {
        id: "t16-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Połączyć scenę ilustracji z numerem wersetu.", ua: "Поєднати сцену ілюстрації з номером вірша." } },
          { id: "b", label: { pl: "Zebrać słownictwo (czasownik, rzeczownik, przymiotnik) do opisu kadru.", ua: "Зібрати словництво (дієслово, іменник, прикметник) до опису кадру." } },
          { id: "c", label: { pl: "Tylko dyktando z rz niewymiennym.", ua: "Лише диктант з rz незмінним." } },
          { id: "d", label: { pl: "Napisać opis według wstępu, rozwinięcia i zakończenia.", ua: "Написати опис за вступом, розвитком і закінченням." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę „Po tej lekcji umiem”. Czy jest tam dyktando?",
          ua: "Подивись на список «Після уроку вмію». Чи є там диктант?"
        },
        explanation: {
          pl: "Dziś: Eden, werset przy kadrze, słownictwo, trójdzielny opis. Rz było na lekcjach 7–8.",
          ua: "Сьогодні: Еден, вірш біля кадру, словництво, тричастинний опис. rz було на уроках 7–8."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Rozdział 2 · w biblijnym Edenie", ua: "Розділ 2 · у біблійному Едені" },
      formula: "s. 36  ·  po lekcji 15",
      promptPlace: "before",
      prompt: {
        pl: "Lekcja 15 to był *rozdział 1*: sześć dni stwarzania świata. Dziś *rozdział 2* tej samej Księgi Rodzaju: ogród, człowiek, rozkaz, niewiasta. Duża cyfra *2* = rozdział. Małe cyfry = wersety. […] znaczy: podręcznik coś opuścił — my tego nie zmyślamy.",
        ua: "Урок 15 був *розділ 1*: шість днів творення світу. Сьогодні *розділ 2* тієї самої Книги Буття: сад, людина, наказ, невіста. Велика *2* = розділ. Малі цифри = вірші. […] — підручник щось пропустив, ми цього не вигадуємо."
      },
      text: {
        pl: [
          "Tytuł w podręczniku: *Pierwotny stan szczęścia*. Dział: W biblijnym Edenie.",
          "Źródło na końcu: Fragment Księgi Rodzaju z Biblii Tysiąclecia — nadal ta sama księga, inny rozdział.",
          "Dziś łączymy *tekst* z *obrazem* z XIV wieku. To nie mit o Olimpie z lekcji 14 i nie sześć kadrów dni z lekcji 15."
        ],
        ua: [
          "Заголовок у підручнику: *Первісний стан щастя*. Розділ: У біблійному Едені.",
          "Джерело в кінці: уривок Книги Буття з Біблії Тисячоліття — та сама книга, інший розділ.",
          "Сьогодні поєднуємо *текст* з *образом* XIV століття. Це не міф про Олімп з уроку 14 і не шість кадрів днів з уроку 15."
        ]
      },
      task: {
        id: "t16-s02-rozdzial",
        type: "single-choice",
        question: {
          pl: "Jaki rozdział Księgi Rodzaju czytamy na s. 36–37?",
          ua: "Який розділ Книги Буття читаємо на с. 36–37?"
        },
        options: [
          { id: "a", label: { pl: "Rozdział 2 (duża cyfra 2) — ogród Eden i człowiek.", ua: "Розділ 2 (велика цифра 2) — сад Еден і людина." } },
          { id: "b", label: { pl: "Rozdział 1 — sześć dni stwarzania z lekcji 15.", ua: "Розділ 1 — шість днів творення з уроку 15." } },
          { id: "c", label: { pl: "Rozdział o Zeusie na Olimpie.", ua: "Розділ про Зевса на Олімпі." } }
        ],
        answer: "a",
        hint: {
          pl: "Na początku kolumny stoi duża cyfra. Jaka?",
          ua: "На початку колонки стоїть велика цифра. Яка?"
        },
        explanation: {
          pl: "Duża 2 = rozdział drugi. Sześć dni to rozdział 1 (lekcja 15). Zeus — lekcja 14.",
          ua: "Велика 2 = другий розділ. Шість днів — розділ 1 (урок 15). Зевс — урок 14."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · ogród w Edenie", ua: "Читаємо · сад в Едені" },
      formula: "Rdz 2, 8–10",
      promptPlace: "before",
      prompt: {
        pl: "Czytaj na głos. Zostaw […]. Glosa z pola: *Eden*. Włącz 🇺🇦, jeśli chcesz tłumaczenie pod akapitem.",
        ua: "Читай уголос. Залиш […]. Глоса з поля: *Eden*. Увімкни 🇺🇦 — переклад під абзацом."
      },
      text: {
        pl: [
          "2. […] 8 A zasadziwszy ogród w Eden na wschodzie, Pan Bóg umieścił tam człowieka, którego ulepił. 9 Na rozkaz Pana Boga wyrosły z gleby wszelkie drzewa miłe z wyglądu i smaczny owoc rodzące oraz drzewo życia w środku tego ogrodu i drzewo poznania dobra i zła. 10 Z Edenu zaś wypływała rzeka, aby nawadniać ów ogród, i stamtąd się rozdzielała, dając początek czterem rzekom. […]"
        ],
        ua: [
          "2. […] 8 А посадивши сад в Едені на сході, Пан Бог помістив там людину, яку зліпив. 9 На наказ Пана Бога виросли з ґрунту всілякі дерева, милі на вигляд і смачний плід родючі, а також дерево життя посеред цього саду і дерево пізнання добра і зла. 10 З Едену ж витікала ріка, щоб наводнювати той сад, і звідти розділялася, даючи початок чотирьом рікам. […]"
        ]
      },
      task: {
        id: "t16-s03-eden",
        type: "single-choice",
        question: {
          pl: "Co według w. 8–9 stoi w środku ogrodu?",
          ua: "Що за в. 8–9 стоїть посеред саду?"
        },
        options: [
          { id: "a", label: { pl: "Drzewo życia oraz drzewo poznania dobra i zła.", ua: "Дерево життя та дерево пізнання добра і зла." } },
          { id: "b", label: { pl: "Pałac Zeusa i Cerber.", ua: "Палац Зевса і Цербер." } },
          { id: "c", label: { pl: "Słońce i księżyc z dnia czwartego (lekcja 15).", ua: "Сонце і місяць з четвертого дня (урок 15)." } }
        ],
        answer: "a",
        hint: {
          pl: "Werset 9, drugie zdanie: w środku tego ogrodu…",
          ua: "Вірш 9, друге речення: посеред цього саду…"
        },
        explanation: {
          pl: "W. 9: drzewo życia i drzewo poznania dobra i zła. Zeus — inna lekcja. Świecidła — rozdział 1.",
          ua: "В. 9: дерево життя і дерево пізнання добра і зла."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · rozkaz", ua: "Читаємо · наказ" },
      formula: "Rdz 2, 15–17",
      promptPlace: "before",
      prompt: {
        pl: "Dokończenie zdania ze s. 36–37. Glosa z pola: *niechybnie* — bardzo szybko, z pewnością.",
        ua: "Закінчення речення зі с. 36–37. Глоса з поля: *niechybnie* — дуже швидко, напевно."
      },
      text: {
        pl: [
          "15 Pan Bóg wziął zatem człowieka i umieścił go w ogrodzie Eden, aby uprawiał go i doglądał. 16 A przy tym Pan Bóg dał człowiekowi taki rozkaz: „Z wszelkiego drzewa tego ogrodu możesz spożywać według upodobania; 17 ale z drzewa poznania dobra i zła nie wolno ci jeść, bo gdy z niego spożyjesz, niechybnie umrzesz”."
        ],
        ua: [
          "15 Пан Бог узяв отже людину і помістив її в саду Еден, щоб обробляла його і доглядала. 16 А при тому Пан Бог дав людині такий наказ: «З усякого дерева цього саду можеш споживати за вподобою; 17 але з дерева пізнання добра і зла не можна тобі їсти, бо коли з нього споживатимеш, нехибно умреш»."
        ]
      },
      task: {
        id: "t16-s04-rozkaz",
        type: "true-false",
        question: {
          pl: "Czy człowiek może jeść z *każdego* drzewa ogrodu — także z drzewa poznania dobra i zła?",
          ua: "Чи людина може їсти з *кожного* дерева саду — також з дерева пізнання добра і зла?"
        },
        answer: false,
        hint: {
          pl: "Werset 16 mówi „z wszelkiego”, ale w. 17 dodaje wyjątek. Jaki?",
          ua: "Вірш 16 каже «з усякого», але в. 17 додає виняток. Який?"
        },
        explanation: {
          pl: "Wolno z wszelkiego drzewa *oprócz* drzewa poznania dobra i zła. Inaczej: niechybnie umrze.",
          ua: "Можна з усякого дерева *крім* дерева пізнання добра і зла. Інакше: нехибно умре."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · nazwy zwierząt", ua: "Читаємо · назви тварин" },
      formula: "Rdz 2, 18–20",
      promptPlace: "before",
      prompt: {
        pl: "Czytaj, kto z kim rozmawia i po co Pan Bóg przyprowadza zwierzęta.",
        ua: "Читай, хто з ким розмовляє і навіщо Пан Бог приводить тварин."
      },
      text: {
        pl: [
          "18 Potem Pan Bóg rzekł: „Nie jest dobrze, żeby mężczyzna był sam, uczynię mu zatem odpowiednią dla niego pomoc”. 19 Ulepiwszy z gleby wszelkie zwierzęta lądowe i wszelkie ptaki powietrzne, Pan Bóg przyprowadził je do mężczyzny, aby przekonać się, jaką on da im nazwę. Każde jednak zwierzę, które określił mężczyzna, otrzymało nazwę „istota żywa”. 20 I tak mężczyzna dał nazwy wszelkiemu bydłu, ptakom powietrznym i wszelkiemu zwierzęciu polnemu, ale nie znalazła się pomoc odpowiednia dla mężczyzny."
        ],
        ua: [
          "18 Потім Пан Бог сказав: «Не добре, щоб чоловік був сам, учиню йому отже відповідну для нього поміч». 19 Зліпивши з ґрунту всіляких звірів суходолу і всіх птахів повітряних, Пан Бог привів їх до чоловіка, щоб переконатися, яку він дасть їм назву. Кожна ж тварина, яку визначив чоловік, отримала назву «істота жива». 20 І так чоловік дав назви всякій худобі, птахам повітряним і всякому звірові польовому, але не знайшлася поміч відповідна для чоловіка."
        ]
      },
      task: {
        id: "t16-s05-nazwy",
        type: "single-choice",
        question: {
          pl: "Po co Pan Bóg przyprowadza zwierzęta do mężczyzny (w. 19)?",
          ua: "Навіщо Пан Бог приводить тварин до чоловіка (в. 19)?"
        },
        options: [
          { id: "a", label: { pl: "Aby mężczyzna dał im nazwy; i żeby sprawdzić, czy któraś będzie dla niego pomocą.", ua: "Щоб чоловік дав їм назви; і щоб перевірити, чи якась буде для нього поміччю." } },
          { id: "b", label: { pl: "Aby Zeus wybrał sobie Cerbera.", ua: "Щоб Зевс вибрав собі Цербера." } },
          { id: "c", label: { pl: "Aby policzyć sześć dni stwarzania z rozdziału 1.", ua: "Щоб полічити шість днів творення з розділу 1." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa cele w w. 18–20: nazwa + „pomoc odpowiednia”. Czy któraś się znalazła?",
          ua: "Дві мети в в. 18–20: назва + «відповідна поміч». Чи якась знайшлася?"
        },
        explanation: {
          pl: "W. 19: nazwy. W. 20: pomocy wśród zwierząt nie było. Zeus i dni z rozdziału 1 — inne lekcje.",
          ua: "В. 19: назви. В. 20: помочі серед тварин не було."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · niewiasta", ua: "Читаємо · невіста" },
      formula: "Rdz 2, 21–23",
      promptPlace: "before",
      prompt: {
        pl: "Słowo *niewiasta* znasz z lekcji 15 (kobieta). Czytaj, skąd — według tego tekstu — została wzięta.",
        ua: "Слово *niewiasta* знаєш з уроку 15 (жінка). Читай, звідки — за цим текстом — її взято."
      },
      text: {
        pl: [
          "21 Wtedy to Pan sprawił, że mężczyzna pogrążył się w głębokim śnie, i gdy spał, wyjął jedno z jego żeber, a miejsce to zapełnił ciałem. 22 Po czym Pan Bóg z żebra, które wyjął z mężczyzny, zbudował niewiastę. A gdy ją przyprowadził do mężczyzny, 23 mężczyzna powiedział:",
          "„Ta dopiero jest kością z moich kości i ciałem z mego ciała! Ta będzie się zwała niewiastą, bo ta z mężczyzny została wzięta”."
        ],
        ua: [
          "21 Тоді Пан учинив, що чоловік поринув у глибокий сон, і коли спав, вийняв одне з його ребер, а місце те заповнив тілом. 22 Після чого Пан Бог з ребра, яке вийняв з чоловіка, збудував невісту. А коли привів її до чоловіка, 23 чоловік сказав:",
          "«Оце нарешті кість з моїх костей і тіло з мого тіла! Та зватиметься невістою, бо та з чоловіка була взята»."
        ]
      },
      task: {
        id: "t16-s06-niewiasta",
        type: "single-choice",
        question: {
          pl: "Z czego — według w. 21–22 — Pan Bóg zbudował niewiastę?",
          ua: "З чого — за в. 21–22 — Пан Бог збудував невісту?"
        },
        options: [
          { id: "a", label: { pl: "Z żebra mężczyzny, gdy ten spał.", ua: "З ребра чоловіка, коли той спав." } },
          { id: "b", label: { pl: "Z gliny na Olimpie.", ua: "З глини на Олімпі." } },
          { id: "c", label: { pl: "Z drzewa poznania dobra i zła.", ua: "З дерева пізнання добра і зла." } }
        ],
        answer: "a",
        hint: {
          pl: "Werset 22: „z żebra, które wyjął z mężczyzny”…",
          ua: "Вірш 22: «з ребра, яке вийняв з чоловіка»…"
        },
        explanation: {
          pl: "W. 21–22: sen, żebro, niewiasta. Olimp — lekcja 14. Drzewo poznania to zakaz z w. 17, nie materiał do budowy.",
          ua: "В. 21–22: сон, ребро, невіста. Олімп — урок 14."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "XIV wiek · cztery sceny", ua: "XIV століття · чотири сцени" },
      formula: "s. 37  ·  Omne Bonum",
      visual: vizGh("t16-omne-bonum.png", {
        alt: {
          pl: "Cztery średniowieczne kadry: ogród, zwierzęta, sen, niewiasta",
          ua: "Чотири середньовічні кадри: сад, тварини, сон, невіста"
        },
        title: { pl: "Slajd · Cztery sceny stworzenia", ua: "Слайд · Чотири сцени творення" },
        prompt: {
          pl: IMG_STYLE + " Wstaw kartę ze s. 37: siatka 2×2, czarne ramki. Górny lewy: Bóg z nimbem w czerwonej szacie wśród ciemnozielonych drzew ogrodu. Górny prawy: Bóg stoi wysoko na ochrowym zboczu, niżej mężczyzna, drobne zwierzęta. Dolny lewy: Bóg przy śpiącym mężczyźnie na zboczu (żebro). Dolny prawy: Bóg przyprowadza stojącą niewiastę do leżącego mężczyzny; u góry nerkowate formy skał/obłoków. Złote tło, płaskie barwy. Przytnij znak wodny. PNG kwadrat / pionowy.",
          ua: "Сітка 2×2 зі с. 37: сад, тварини, сон і ребро, приведення невісти. Середньовічна мініатюра, без водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Podpis podręcznika: *„Cztery sceny stworzenia”, karta z encyklopedii „Omne Bonum”*. To nie fotografia z ogrodu — to miniatura z XIV wieku. Palcem: który kadr to która scena z tekstu?",
        ua: "Підпис підручника: *«Чотири сцени творення», карта з енциклопедії «Omne Bonum»*. Це не фото саду — мініатюра XIV ст. Пальцем: який кадр — яка сцена з тексту?"
      },
      text: {
        pl: [
          "Dane do wstępu opisu (zapamiętaj): druga połowa XIV wieku; Biblioteka Brytyjska w Londynie; 39,9 cm × 56,6 cm; karta w encyklopedii *Omne bonum*.",
          "Czytamy kadry jak tekst: od lewej do prawej, z góry na dół."
        ],
        ua: [
          "Дані до вступу опису (запам’ятай): друга половина XIV ст.; Британська бібліотека в Лондоні; 39,9 см × 56,6 см; карта в енциклопедії *Omne bonum*.",
          "Кари читаємо як текст: зліва направо, згори вниз."
        ]
      },
      task: {
        id: "t16-s07-omne",
        type: "single-choice",
        question: {
          pl: "Skąd pochodzi ta ilustracja — według podpisu i ramki ze s. 38?",
          ua: "Звідки ця ілюстрація — за підписом і рамкою зі с. 38?"
        },
        options: [
          { id: "a", label: { pl: "Z XIV-wiecznej encyklopedii Omne Bonum (Biblioteka Brytyjska).", ua: "З енциклопедії XIV ст. Omne Bonum (Британська бібліотека)." } },
          { id: "b", label: { pl: "Ze zdjęcia Olimpu z lekcji 14.", ua: "З фото Олімпу з уроку 14." } },
          { id: "c", label: { pl: "Z komiksu Kaczkowskiego *Tytuł?*.", ua: "З коміксу Качковського *Tytuł?*." } }
        ],
        answer: "a",
        hint: {
          pl: "Podpis pod siatką 2×2 i niebieski wstęp na s. 38.",
          ua: "Підпис під сіткою 2×2 і блакитний вступ на с. 38."
        },
        explanation: {
          pl: "Omne Bonum, XIV w., Londyn. Olimp i komiks to inne lekcje.",
          ua: "Omne Bonum, XIV ст., Лондон. Олімп і комікс — інші уроки."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól", ua: "Слова з полів" },
      promptPlace: "before",
      prompt: {
        pl: "Dwie glosy z pól s. 36–37. Znaczenie *w tym tekście*. *Niewiasta* znasz z lekcji 15.",
        ua: "Дві глоси з полів с. 36–37. Значення *в цьому тексті*. *Niewiasta* знаєш з уроку 15."
      },
      rows: [
        { pl: "Eden — raj; wg biblijnego przekazu miejsce pobytu pierwszego człowieka", ua: "Eden — рай; за біблійним переданням місце перебування першої людини" },
        { pl: "niechybnie — bardzo szybko, z pewnością", ua: "niechybnie — дуже швидко, напевно" },
        { pl: "niewiasta — kobieta (z lekcji 15)", ua: "niewiasta — жінка (з уроку 15)" },
        { pl: "werset — mała cyfra przy zdaniu (tu: 8, 9, 15…)", ua: "werset — мала цифра біля речення (тут: 8, 9, 15…)" }
      ],
      task: {
        id: "t16-s08-glosy",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna *w tym tekście*?",
          ua: "Яка пара правильна *в цьому тексті*?"
        },
        options: [
          { id: "a", label: { pl: "Eden = raj / ogród pierwszego człowieka; niechybnie = z pewnością, bardzo szybko.", ua: "Eden = рай / сад першої людини; niechybnie = напевно, дуже швидко." } },
          { id: "b", label: { pl: "Eden = Hades; niechybnie = „może kiedyś”.", ua: "Eden = Аїд; niechybnie = «може колись»." } },
          { id: "c", label: { pl: "niechybnie = nazwa rzeki z w. 10.", ua: "niechybnie = назва ріки з в. 10." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie pomarańczowe glosy na polach. Czy Hades jest na s. 36?",
          ua: "Дві помаранчеві глоси на полях. Чи Аїд є на с. 36?"
        },
        explanation: {
          pl: "Pola: Eden – raj; niechybnie – bardzo szybko, z pewnością. Hades był w lekcji 14. Rzeka jest w w. 10, ale nie nazywa się niechybnie.",
          ua: "Поля: Eden – рай; niechybnie – дуже швидко, напевно."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · werset do sceny", ua: "Завд. 1 · вірш до сцени" },
      formula: "s. 37  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Wskaż numery wersetów, do których odnoszą się ukazane sytuacje. Cztery kadry z lewej do prawej. Najpierw sam w zeszycie — potem klucz.",
        ua: "Вкажи номери віршів, до яких стосуються показані ситуації. Чотири кадри зліва направо. Спочатку сам у зошиті."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t16-zad1.png", {
            alt: {
              pl: "Cztery kadry z zad. 1: drzewa; Bóg i mężczyzna; sen; niewiasta",
              ua: "Чотири кадри з завд. 1: дерева; Бог і чоловік; сон; невіста"
            },
            title: { pl: "Slajd · zad. 1 cztery sytuacje", ua: "Слайд · завд. 1 чотири ситуації" },
            prompt: {
              pl: IMG_STYLE + " Wstaw cztery pionowe kadry ze s. 37 zad. 1 w jednym rzędzie (od lewej): 1) Bóg z nimbem wśród gęstych drzew ogrodu; 2) Bóg na zboczu, niżej mężczyzna, ślad zwierząt; 3) Bóg przy śpiącym mężczyźnie na ochrowym zboczu; 4) Bóg przyprowadza niewiastę do leżącego mężczyzny, u góry nerkowate formy. Bez znaków zapytania i bez numerów na obrazku. Przytnij znak wodny. PNG poziomy.",
              ua: "Чотири кадри зі с. 37 завд. 1 в ряд: сад, тварини, сон, невіста. Без знаків питання і водяного знака."
            }
          }),
          text: {
            pl: "Pod każdym kadrem w zeszycie wpisz numer wersetu (albo zakres, np. 8–9). Szukaj w tekście: drzewa / zwierzęta / sen i żebro / niewiasta.",
            ua: "Під кожним кадром у зошиті впиши номер вірша (або діапазон, напр. 8–9). Шукай у тексті: дерева / тварини / сон і ребро / невіста."
          }
        },
        {
          formula: "KLUCZ  ·  z tekstu + kadry",
          text: {
            pl: [
              "1. Drzewa, ogród — w. *8–9* (zasadzenie ogrodu, umieszczenie człowieka, drzewa).",
              "2. Bóg i mężczyzna, zwierzęta — w. *19–20* (przyprowadzenie zwierząt, nadawanie nazw).",
              "3. Śpiący mężczyzna — w. *21* (głęboki sen, wyjęcie żebra).",
              "4. Niewiasta przy mężczyźnie — w. *22–23* (zbudowanie niewiasty, przyprowadzenie, słowa mężczyzny)."
            ],
            ua: [
              "1. Дерева, сад — в. *8–9*.",
              "2. Бог і чоловік, тварини — в. *19–20*.",
              "3. Сплячий чоловік — в. *21*.",
              "4. Невіста біля чоловіка — в. *22–23*."
            ]
          }
        }
      ],
      task: {
        id: "t16-s09-wersety",
        type: "single-choice",
        question: {
          pl: "Które przyporządkowanie wersetów do czterech kadrów (od lewej) jest poprawne?",
          ua: "Яке приписування віршів до чотирьох кадрів (зліва) правильне?"
        },
        options: [
          { id: "a", label: { pl: "8–9 · 19–20 · 21 · 22–23", ua: "8–9 · 19–20 · 21 · 22–23" } },
          { id: "b", label: { pl: "1–5 · 6–8 · 14 · 31 (dni z rozdziału 1)", ua: "1–5 · 6–8 · 14 · 31 (дні з розділу 1)" } },
          { id: "c", label: { pl: "Tylko werset o Zeusie — ten sam przy każdym kadrze", ua: "Лише вірш про Зевса — той самий біля кожного кадру" } }
        ],
        answer: "a",
        hint: {
          pl: "Kadr ze śpiącym mężczyzną = jedno zdanie o śnie. Który numer?",
          ua: "Кадр зі сплячим чоловіком = одне речення про сон. Який номер?"
        },
        explanation: {
          pl: "Ogród 8–9, zwierzęta 19–20, sen 21, niewiasta 22–23. Numery z rozdziału 1 i Zeus nie pasują do tych kadrów.",
          ua: "Сад 8–9, тварини 19–20, сон 21, невіста 22–23."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · słownictwo do scen", ua: "Завд. 2 · словництво до сцен" },
      formula: "s. 38  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Do poszczególnych scen dobierz słownictwo, które posłuży do opisu tego, co przedstawiono na ilustracji. Zapisz w zeszycie po kilka czasowników, rzeczowników i przymiotników. Numeracja 1–4 jak na siatce: lewy górny, prawy górny, lewy dolny, prawy dolny.",
        ua: "До кожної сцени добери словництво для опису. Запиши в зошиті по кілька дієслів, іменників і прикметників. Нумерація 1–4 як на сітці: верх ліворуч, верх праворуч, низ ліворуч, низ праворуч."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t16-omne-bonum.png", {
            alt: {
              pl: "Siatka 2×2: cztery sceny stworzenia",
              ua: "Сітка 2×2: чотири сцени творення"
            },
            title: { pl: "Slajd · cztery sytuacje do słownictwa", ua: "Слайд · чотири ситуації до словництва" },
            prompt: {
              pl: IMG_STYLE + " Ta sama karta 2×2 co t16-omne-bonum.png (s. 38 zad. 2). Bez napisów „sytuacja” na obrazku.",
              ua: "Та сама сітка 2×2, що t16-omne-bonum.png."
            }
          }),
          text: {
            pl: "Najpierw nazwij sytuację jednym zdaniem, potem trzy listki: czasowniki / rzeczowniki / przymiotniki. Bierz słowa z Księgi Rodzaju, nie z mitologii.",
            ua: "Спочатку назви ситуацію одним реченням, потім три списки: дієслова / іменники / прикметники. Бери слова з Книги Буття."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyna lista",
          text: {
            pl: [
              "1. Ogród: czas. zasadził, umieścił, wyrosły; rzecz. ogród, Eden, drzewa, gleba, owoc; przym. miłe, smaczny.",
              "2. Zwierzęta: czas. ulepił, przyprowadził, dał (nazwę); rzecz. zwierzęta, ptaki, bydło, nazwa, mężczyzna; przym. lądowe, powietrzne, polne, żywa.",
              "3. Sen: czas. sprawił, pogrążył się, spał, wyjął, zapełnił; rzecz. sen, żebro, ciało, miejsce; przym. głęboki.",
              "4. Niewiasta: czas. zbudował, przyprowadził, powiedział, zwała się; rzecz. niewiasta, kość, ciało, żebro; przym. (odpowiednia — z w. 18)."
            ],
            ua: [
              "1. Сад: дієсл. посадив, помістив, виросли; ім. сад, Еден, дерева, ґрунт, плід; прикм. милі, смачний.",
              "2. Тварини: дієсл. зліпив, привів, дав (назву); ім. звірі, птахи, худоба, назва; прикм. суходолу, повітряні, польовий, жива.",
              "3. Сон: дієсл. учинив, поринув, спав, вийняв, заповнив; ім. сон, ребро, тіло; прикм. глибокий.",
              "4. Невіста: дієсл. збудував, привів, сказав, зватиметься; ім. невіста, кість, тіло, ребро."
            ]
          }
        }
      ],
      task: {
        id: "t16-s10-slownictwo",
        type: "multiple-choice",
        question: {
          pl: "Które zestawy PASUJĄ do sceny ze *śpiącym* mężczyzną (sytuacja 3)? Zaznacz wszystkie pewne.",
          ua: "Які набори ПАСУЮТЬ до сцени зі *сплячим* чоловіком (ситуація 3)? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Czasowniki: spał, wyjął, zapełnił.", ua: "Дієслова: спав, вийняв, заповнив." } },
          { id: "b", label: { pl: "Rzeczowniki: sen, żebro, ciało.", ua: "Іменники: сон, ребро, тіло." } },
          { id: "c", label: { pl: "Przymiotnik: głęboki (sen).", ua: "Прикметник: глибокий (сон)." } },
          { id: "d", label: { pl: "Rzeczowniki: Olimp, piorun, Cerber.", ua: "Іменники: Олімп, блискавка, Цербер." } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Werset 21. Czy słowo Cerber jest w Księdze Rodzaju na tych stronach?",
          ua: "Вірш 21. Чи слово Цербер є в Книзі Буття на цих сторінках?"
        },
        explanation: {
          pl: "Scena 3 = w. 21: głęboki sen, żebro, ciało. Olimp i Cerber — lekcja 14.",
          ua: "Сцена 3 = в. 21: глибокий сон, ребро, тіло."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Opis · trzy części", ua: "Опис · три частини" },
      formula: "s. 38  ·  trójdzielna budowa",
      promptPlace: "before",
      prompt: {
        pl: "Program: opis ma *trzy części*. Podręcznik daje gotowy *wstęp*. Ty dopisujesz *rozwinięcie* i *zakończenie*.",
        ua: "Програма: опис має *три частини*. Підручник дає готовий *вступ*. Ти дописуєш *розвиток* і *закінчення*."
      },
      text: {
        pl: [
          "Wstęp (już jest): tytuł, wiek, miejsce, wymiary, źródło — *Omne bonum*.",
          "Rozwinięcie (co najmniej 7 zdań): CO widać i JAK to narysowano (cztery kadry, barwy, nimb, brak perspektywy, kolejność czytania).",
          "Zakończenie (co najmniej 4 zdania): czy ci się podoba, czy chcesz zobaczyć na żywo, jakie masz pytania."
        ],
        ua: [
          "Вступ (уже є): назва, століття, місце, розміри, джерело — *Omne bonum*.",
          "Розвиток (щонайменше 7 речень): ЩО видно і ЯК намальовано (чотири кадри, барви, німб, без перспективи, порядок читання).",
          "Закінчення (щонайменше 4 речення): чи подобається, чи хочеш побачити наживо, які маєш питання."
        ]
      },
      task: {
        id: "t16-s11-trojdzielna",
        type: "true-false",
        question: {
          pl: "Czy rozwinięcie opisu może mieć tylko jedno zdanie „ładny obrazek”, bez opisu kadrów?",
          ua: "Чи розвиток опису може мати лише одне речення «гарний малюнок», без опису кадрів?"
        },
        answer: false,
        hint: {
          pl: "Podręcznik: co najmniej 7 zdań o tym, co i jak przedstawiono.",
          ua: "Підручник: щонайменше 7 речень про те, що і як зображено."
        },
        explanation: {
          pl: "Nie. Rozwinięcie ma min. 7 zdań: treść i sposób przedstawienia. „Ładny obrazek” to za mało i za wcześnie na ocenę (ocena = zakończenie).",
          ua: "Ні. Розвиток — мін. 7 речень. «Гарний малюнок» — замало, і оцінка належить до закінчення."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3a · opis ilustracji", ua: "Завд. 3а · опис ілюстрації" },
      formula: "s. 38  ·  zespoły  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Przygotujcie w zespołach opis ilustracji przedstawiającej sceny z biblijnej opowieści. Do podanego wstępu dopiszcie rozwinięcie i zakończenie. Potem wzór — nie jedyna dobra praca.",
        ua: "Підготуйте в командах опис ілюстрації зі сценами біблійної оповіді. До поданого вступу допишіть розвиток і закінчення. Потім зразок."
      },
      reveal: true,
      steps: [
        {
          formula: "WSTĘP  ·  z podręcznika",
          text: {
            pl: [
              "Ilustracja pod tytułem „Cztery sceny stworzenia” pochodzi z drugiej połowy XIV wieku i znajduje się w kolekcji Biblioteki Brytyjskiej w Londynie. Rysunek o wymiarach 39,9 cm × 56,6 cm zdobi kartę w encyklopedii „Omne bonum”."
            ],
            ua: [
              "Ілюстрація під назвою «Чотири сцени творення» походить з другої половини XIV століття і є в колекції Британської бібліотеки в Лондоні. Рисунок розміром 39,9 см × 56,6 см прикрашає карту в енциклопедії «Omne bonum»."
            ]
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyny tekst",
          text: {
            pl: [
              "Rozwinięcie: Ilustracja przedstawia cztery kadry w siatce 2×2, czytane od lewej do prawej i z góry na dół. Tło jest złotawe, kontur czarny, barwy płaskie, bez perspektywy. W każdym kadrze Bóg ma nimb. Pierwszy kadr: ogród i drzewa (w. 8–9). Drugi: Pan Bóg przy mężczyźnie i zwierzętach (w. 19–20). Trzeci: mężczyzna śpi, Pan wyjmuje żebro (w. 21). Czwarty: niewiasta stoi przy leżącym mężczyźnie (w. 22–23). Postacie są wydłużone, góry i drzewa umowne.",
              "Zakończenie: Miniatura podoba mi się, bo widać historię jak komiks, ale starym malunkiem. Chciałbym / chciałabym zobaczyć kartę na żywo w Londynie, żeby sprawdzić złoto i detale. Pytania: czy malarz znał ten sam przekład, który mamy w podręczniku? Dlaczego nie narysował rzeki z w. 10 i drzewa zakazanego?"
            ],
            ua: [
              "Розвиток: Ілюстрація показує чотири кадри в сітці 2×2. Золотаве тло, чорний контур, плоскі барви, без перспективи. У кожному кадрі Бог має німб. 1 сад і дерева (в. 8–9). 2 тварини (в. 19–20). 3 сон і ребро (в. 21). 4 невіста (в. 22–23).",
              "Закінчення: Мініатюра подобається, бо історію видно як комікс, але старим малюнком. Хотів / хотіла б побачити карту наживо. Питання: чому немає ріки з в. 10 і забороненого дерева?"
            ]
          }
        }
      ],
      task: {
        id: "t16-s12-opis",
        type: "multiple-choice",
        question: {
          pl: "Co MUSI znaleźć się w pracy do zad. 3a? Zaznacz wszystkie pewne.",
          ua: "Що МАЄ бути в роботі до завд. 3а? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Gotowy wstęp z podręcznika (XIV w., Londyn, wymiary, Omne bonum).", ua: "Готовий вступ з підручника (XIV ст., Лондон, розміри, Omne bonum)." } },
          { id: "b", label: { pl: "Rozwinięcie min. 7 zdań: co i jak przedstawiono.", ua: "Розвиток мін. 7 речень: що і як зображено." } },
          { id: "c", label: { pl: "Zakończenie min. 4 zdań: ocena, chęć zobaczenia, pytania.", ua: "Закінчення мін. 4 речень: оцінка, бажання побачити, питання." } },
          { id: "d", label: { pl: "Opowieść, że to Zeus na Olimpie malował te kadry.", ua: "Оповідь, що це Зевс на Олімпі малював ці кадри." } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Trzy ramki na s. 38. Czy Zeus jest w którejś ramce?",
          ua: "Три рамки на с. 38. Чи Зевс є в якійсь рамці?"
        },
        explanation: {
          pl: "Wstęp + min. 7 + min. 4. Zeus nie należy do tej ilustracji.",
          ua: "Вступ + мін. 7 + мін. 4. Зевс не належить до цієї ілюстрації."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3b · tekst i obraz", ua: "Завд. 3б · текст і образ" },
      formula: "s. 38  ·  USTNIE  ·  prezentacja",
      promptPlace: "before",
      prompt: {
        pl: "b) Zaprezentujcie w klasie swoje prace. Program: porównajcie tekst biblijny z XIV-wieczną ilustracją i wyraźcie ocenę obu form przekazu. Można potem krótką prezentację o dziełach ze scenami biblijnymi — podpisz źródło.",
        ua: "б) Презентуйте в класі свої роботи. Порівняйте біблійний текст з ілюстрацією XIV ст. і оцініть обидві форми. Можна коротку презентацію про твори зі сценами біблійними — підпиши джерело."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie trzy kolumny: JEST W TEKŚCIE / JEST NA OBRAZIE / TYLKO W JEDNYM. Potem jedna ocena: co obraz dodaje, a co gubi.",
            ua: "У зошиті три колонки: Є В ТЕКСТІ / Є НА ОБРАЗІ / ЛИШЕ В ОДНОМУ. Потім одна оцінка: що образ додає, а що губить."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  przekład intersemiotyczny",
          text: {
            pl: [
              "Oba: Pan Bóg, mężczyzna, niewiasta, ogród, sen, żebro.",
              "Głównie tekst: rzeka i cztery rzeki (w. 10); rozkaz i „niechybnie umrzesz” (w. 16–17); słowa mężczyzny w cudzysłowie (w. 23).",
              "Głównie obraz: nimb, złote tło, cztery kadry naraz, wydłużone postacie, umowne góry.",
              "Wniosek: ilustracja *tłumaczy* opowieść na obraz, ale nie kopiuje każdego zdania. To nie fotografia i nie mit grecki."
            ],
            ua: [
              "Обидва: Пан Бог, чоловік, невіста, сад, сон, ребро.",
              "Переважно текст: ріка і чотири ріки; наказ і «нехибно умреш»; слова чоловіка в лапках.",
              "Переважно образ: німб, золоте тло, чотири кадри разом, видовжені постаті.",
              "Висновок: ілюстрація *перекладає* оповідь на образ, але не копіює кожне речення."
            ]
          }
        }
      ],
      task: {
        id: "t16-s13-porownanie",
        type: "multiple-choice",
        question: {
          pl: "Co jest PRAWDA przy porównaniu tekstu z tą ilustracją? Zaznacz wszystkie pewne.",
          ua: "Що ПРАВДА при порівнянні тексту з цією ілюстрацією? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Obraz pokazuje wybrane sceny, nie każde zdanie (np. rzeki z w. 10 mogą zniknąć).", ua: "Образ показує вибрані сцени, не кожне речення (напр. ріки з в. 10 можуть зникнути)." } },
          { id: "b", label: { pl: "Miniatura dodaje sposób malowania: nimb, złoto, siatka 2×2.", ua: "Мініатюра додає спосіб малювання: німб, золото, сітка 2×2." } },
          { id: "c", label: { pl: "To zdjęcie ogrodu Eden zrobione telefonem w XIV wieku.", ua: "Це фото саду Еден, зроблене телефоном у XIV столітті." } },
          { id: "d", label: { pl: "Tekst ma rozkaz i słowa mężczyzny — tego na kadrze często nie „słychać”.", ua: "Текст має наказ і слова чоловіка — цього на кадрі часто не «чути»." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy w XIV wieku był smartfon? Czy w. 10 jest narysowany tak samo wyraźnie jak sen?",
          ua: "Чи в XIV ст. був смартфон? Чи в. 10 намальовано так само виразно, як сон?"
        },
        explanation: {
          pl: "Przekład tekst → obraz wybiera sceny i dodaje styl. Nie ma zdjęcia z telefonu. Rozkaz zostaje w słowach.",
          ua: "Переклад текст → образ вибирає сцени і додає стиль. Фото з телефона немає."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu. Jeśli nie umiesz tych punktów, wróć do wersetów i do siatki 2×2.",
        ua: "Це забираєш у зошит. Якщо не вмієш цих пунктів — повернись до віршів і до сітки 2×2."
      },
      items: [
        { pl: "Księga Rodzaju, rozdział 2: Eden, rozkaz, nazwy zwierząt, niewiasta z żebra (Biblia Tysiąclecia). […] zostawiamy.", ua: "Книга Буття, розділ 2: Еден, наказ, назви тварин, невіста з ребра. […] залишаємо." },
        { pl: "Eden = raj; niechybnie = z pewnością, bardzo szybko. Niewiasta = kobieta.", ua: "Eden = рай; niechybnie = напевно, дуже швидко. Niewiasta = жінка." },
        { pl: "Cztery sceny (Omne Bonum, XIV w., Londyn): 8–9 · 19–20 · 21 · 22–23.", ua: "Чотири сцени (Omne Bonum, XIV ст., Лондон): 8–9 · 19–20 · 21 · 22–23." },
        { pl: "Opis: wstęp (dane) – rozwinięcie (min. 7) – zakończenie (min. 4). Obraz ≠ każde zdanie tekstu. To nie mit z lekcji 14 i nie sześć dni z lekcji 15.", ua: "Опис: вступ – розвиток (мін. 7) – закінчення (мін. 4). Образ ≠ кожне речення. Це не міф з уроку 14 і не шість днів з уроку 15." }
      ],
      task: {
        id: "t16-s14-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz to, czego wymaga lekcja 16?",
          ua: "Яка нотатка показує, що вмієш те, чого вимагає урок 16?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Rdz 2, Eden. Sceny 8–9 / 19–20 / 21 / 22–23. Opis trójdzielny. Glosy Eden i niechybnie. Obraz z XIV w., nie Olimp.",
              ua: "Rdz 2, Еден. Сцени 8–9 / 19–20 / 21 / 22–23. Тричастинний опис. Глоси Eden і niechybnie. Образ XIV ст., не Олімп."
            }
          },
          { id: "b", label: { pl: "Sześć dni, sklepienie i ciała jaśniejące — i nic więcej nie trzeba.", ua: "Шість днів, склепіння і світила — і більше нічого не треба." } },
          { id: "c", label: { pl: "To komiks PYK! i pałac Zeusa.", ua: "Це комікс PYK! і палац Зевса." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 36–38? Eden, Omne Bonum, zad. 1–3. Czy PYK! jest na tych stronach?",
          ua: "Що на с. 36–38? Еден, Omne Bonum, завд. 1–3. Чи PYK! є на цих сторінках?"
        },
        explanation: {
          pl: "Lekcja 16 to rozdział 2 i ilustracja. Sześć dni — lekcja 15. Komiks i Zeus — 12–14.",
          ua: "Урок 16 — розділ 2 і ілюстрація. Шість днів — урок 15. Комікс і Зевс — 12–14."
        }
      }
    }
  ]
};
