function em(text) {
  return { text: text, emphasis: true };
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Monarchia stanowa w Polsce", ua: "Станова монархія в Польщі" },
      formula: "1374 · 1505",
      text: {
        pl: [
          "Z lekcji 37: Jagiellonowie odzyskali Gdańsk. Dziś nie nowa bitwa — jak zmieniał się sposób rządzenia.",
          "Dwie daty do zapamiętania: przywilej koszycki 1374 i Nihil novi 1505. Król przestaje rządzić sam."
        ],
        ua: [
          "З уроку 37: Ягеллони повернули Гданськ. Сьогодні не нова битва — як змінювався спосіб правління.",
          "Дві дати, які треба запам’ятати: кошицький привілей 1374 і Nihil novi 1505. Король перестає правити сам."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "odróżnić monarchię patrymonialną od stanowej", ua: "відрізнити патримоніальну монархію від станової" },
        { pl: "powiedzieć, czym jest stan i jak rycerstwo stało się szlachtą", ua: "сказати, що таке стан і як лицарство стало шляхтою" },
        { pl: "podać przywilej koszycki 1374 i konstytucję Nihil novi 1505", ua: "назвати кошицький привілей 1374 і конституцію Nihil novi 1505" },
        { pl: "wyjaśnić, czym był sejm walny i pańszczyzna", ua: "пояснити, чим був вальний сейм і панщина" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Dwa sposoby rządzenia", ua: "Два способи правління" },
      visual: gh("312", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: monarchia patrymonialna vs monarchia stanowa",
          ua: "Схема: патримоніальна монархія проти станової"
        },
        title: { pl: "Sam król albo król ze stanami", ua: "Сам король або король зі станами" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie kolumny, dzień. LEWA: jeden król na tronie, podpis „monarchia patrymonialna — państwo jak własność władcy”. PRAWA: król + trzy figury (biskup, szlachcic, mieszczanin), podpis „monarchia stanowa — stany mają wpływ”. BEZ sejmu z Wiki jako zdjęcia. Styl Nowej Ery.",
          ua: "Дві колонки. Патримоніальна vs станова. Без фото сейму."
        }
      }),
      text: {
        pl: [
          ["", em("Monarchia patrymonialna"), " znaczy: państwo jest jak własność władcy. Tak bliżej pierwszych Piastów (lekcja 32: prawo książęce)."],
          ["", em("Monarchia stanowa"), " znaczy: król rządzi, ale ", em("stany"), " — zwłaszcza szlachta — mają przywileje i głos. To nie demokracja z lekcji 7: głos ma grupa, nie każdy mieszkaniec."]
        ],
        ua: [
          ["", em("Патримоніальна монархія"), " означає: держава як власність володаря. Так ближче до перших П’ястів (урок 32: князівське право)."],
          ["", em("Станова монархія"), " означає: король править, але ", em("стани"), " — особливо шляхта — мають привілеї і голос. Це не демократія з уроку 7: голос має група, не кожен мешканець."]
        ]
      },
      task: {
        id: "h38-dwa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym różni się monarchia stanowa od patrymonialnej?",
          ua: "Чим станова монархія відрізняється від патримоніальної?"
        },
        options: [
          { id: "a", label: { pl: "w stanowej król rządzi razem ze stanami, które mają przywileje", ua: "у становій король править разом зі станами, які мають привілеї" } },
          { id: "b", label: { pl: "w stanowej nie ma króla", ua: "у становій немає короля" } },
          { id: "c", label: { pl: "to to samo co demokracja ateńska", ua: "це те саме, що афінська демократія" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrymonium = własność. Stan = grupa z prawami.",
          ua: "Патримоніум = власність. Стан = група з правами."
        },
        explanation: {
          pl: "Ateny (7) to inny ustrój. Tu zostaje król.",
          ua: "Афіни (7) — інший устрій. Тут лишається король."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Stany i szlachta", ua: "Стани і шляхта" },
      visual: gh("313", {
        kind: "image-placeholder",
        alt: {
          pl: "Cztery stany w Polsce: duchowieństwo, szlachta, mieszczanie, chłopi",
          ua: "Чотири стани в Польщі: духовенство, шляхта, міщани, селяни"
        },
        title: { pl: "Rycerz staje się szlachcicem", ua: "Лицар стає шляхтичем" },
        prompt: {
          pl: "Szkolny slajd 16:9, cztery ćwiartki jak w lekcji 22, ale polskie podpisy. 1) duchowieństwo. 2) rycerstwo → strzałka „szlachta”. 3) mieszczanie. 4) chłopi. Dzień, ubrani, BEZ chłosty, BEZ pijanego kleru. Styl Nowej Ery.",
          ua: "Чотири стани. Лицарство → шляхта. Без насильства."
        }
      }),
      text: {
        pl: [
          ["W lekcji 22 poznałeś cztery ", em("stany"), " Zachodu. W Polsce też są: duchowieństwo, rycerstwo, mieszczanie, chłopi."],
          ["Z rycerstwa wyrosła ", em("szlachta"), " — stan, który dostał najwięcej przywilejów. Most: na Zachodzie feudalizm (senior i wasal); u Piastów długo prawo książęce (32). Tu szlachta ogranicza króla dokumentami."]
        ],
        ua: [
          ["В уроці 22 ти пізнав чотири ", em("стани"), " Заходу. У Польщі також є: духовенство, лицарство, міщани, селяни."],
          ["З лицарства виросла ", em("шляхта"), " — стан, який дістав найбільше привілеїв. Міст: на Заході феодалізм (сеньйор і васал); у П’ястів довго князівське право (32). Тут шляхта обмежує короля документами."]
        ]
      },
      task: {
        id: "h38-szlachta",
        type: "true-false",
        level: "A",
        question: {
          pl: "Szlachta wyrosła z rycerstwa i stała się stanem z przywilejami — prawda czy fałsz?",
          ua: "Шляхта виросла з лицарства і стала станом із привілеями — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl szlachty z chłopami.",
          ua: "Не плутай шляхту з селянами."
        },
        explanation: {
          pl: "Prawda. Chłopi przywilejów nie dostali.",
          ua: "Правда. Селяни привілеїв не дістали."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Kazimierz jeszcze silny", ua: "Казимир ще сильний" },
      visual: gh("314", {
        kind: "image-placeholder",
        alt: {
          pl: "Most: Kazimierz Wielki rządzi mocno; później król potrzebuje zgody stanów",
          ua: "Міст: Казимир Великий править міцно; пізніше король потребує згоди станів"
        },
        title: { pl: "Od silnego Piasta do przywilejów", ua: "Від сильного П’яста до привілеїв" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie sceny. LEWA: Kazimierz Wielki na tronie, podpis „ostatni Piast — silny król (35)”. PRAWA: król wręcza dokument szlachcie, podpis „przywileje → monarchia stanowa”. BEZ Matejki. Styl Nowej Ery.",
          ua: "Казимир сильний. Потім привілеї. Без Матейка."
        }
      }),
      text: {
        pl: [
          "Kazimierz Wielki (35) nadal był silnym królem: prawo, zamki, Akademia. Nie uczymy, że już on rządził „z sejmem” jak później.",
          "Zmiana przyspiesza po jego śmierci: Andegawenowie i Jagiellonowie płacą szlachcie przywilejami za zgodę na koronę i na wojny."
        ],
        ua: [
          "Казимир Великий (35) ще був сильним королем: право, замки, Академія. Не вчимо, що вже він правив «із сеймом», як пізніше.",
          "Зміна прискорюється після його смерті: Анжуйці і Ягеллони платять шляхті привілеями за згоду на корону і на війни."
        ]
      },
      task: {
        id: "h38-most",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kazimierz Wielki był jeszcze silnym królem; monarchia stanowa umacnia się głównie po nim — prawda czy fałsz?",
          ua: "Казимир Великий був ще сильним королем; станова монархія зміцнюється головно після нього — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Most 35 → 38. Nie mieszaj z Kazimierzem Jagiellończykiem (37).",
          ua: "Міст 35 → 38. Не плутай з Казимиром Ягеллончиком (37)."
        },
        explanation: {
          pl: "Prawda. Koszyce 1374 to już Ludwik, nie Kazimierz Wielki.",
          ua: "Правда. Кошице 1374 — уже Людовик, не Казимир Великий."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Przywilej koszycki 1374", ua: "Кошицький привілей 1374" },
      formula: "1374",
      timelineYear: 1374,
      visual: gh("315", {
        kind: "image-placeholder",
        alt: {
          pl: "Ludwik Węgierski nadaje szlachcie przywilej w Koszycach 1374",
          ua: "Людовик Угорський надає шляхті привілей у Кошицях 1374"
        },
        title: { pl: "Podatek i zgoda na córki", ua: "Податок і згода на доньок" },
        prompt: {
          pl: "Szkolny slajd 16:9. Król Ludwik wręcza dokument, podpis „Koszyce 1374”. Dwa punkty PL: „niższy podatek od ziemi”; „szlachta zgadza się na córki Ludwika jako dziedziczki”. Dzień, ubrani, BEZ Matejki, BEZ Nieszawy jako głównej daty tej lekcji. Styl Nowej Ery.",
          ua: "Кошице 1374. Не Нешава. Без Матейка."
        }
      }),
      text: {
        pl: [
          ["W ", em("1374"), " w ", em("Koszycach"), " ", em("Ludwik Węgierski"), " (po Kazimierzu, przed Jadwigą — lekcja 36) nadał szlachcie ", em("przywilej"), "."],
          "Szlachta płaciła mniej z ziemi i dostała obietnice. W zamian zgodziła się, że po Ludwiku koronę wezmą jego córki. Król kupił zgodę stanów dokumentem."
        ],
        ua: [
          ["", em("1374"), " року в ", em("Кошицях"), " ", em("Людовик Угорський"), " (після Казимира, перед Ядвігою — урок 36) надав шляхті ", em("привілей"), "."],
          "Шляхта платила менше із землі і дістала обіцянки. Натомість погодилась, що після Людовика корону візьмуть його доньки. Король купив згоду станів документом."
        ]
      },
      task: {
        id: "h38-1374",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku nadano przywilej koszycki? Wpisz rok.",
          ua: "Якого року надано кошицький привілей? Введи рік."
        },
        answer: 1374,
        hint: {
          pl: "Po śmierci Kazimierza (1370), przed Krewem 1385. Nie 1454.",
          ua: "Після смерті Казимира (1370), перед Кревом 1385. Не 1454."
        },
        explanation: {
          pl: "1374. 1454 = Nieszawa i początek wojny (37), nie para dat tej lekcji.",
          ua: "1374. 1454 = Нешава і початок війни (37), не пара дат цього уроку."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Sejm walny", ua: "Вальний сейм" },
      visual: gh("316", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat sejmu walnego: król, senat, izba poselska",
          ua: "Схема вального сейму: король, сенат, посольська ізба"
        },
        title: { pl: "Gdzie stany mówią do króla", ua: "Де стани говорять до короля" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojna sala, dzień. Trzy bloki: król; senat (biskupi i urzędnicy); izba poselska (posłowie szlacheccy). Tytuł „sejm walny”. BEZ foto współczesnego Sejmu, BEZ bitew. Styl Nowej Ery.",
          ua: "Вальний сейм. Три блоки. Не фото сучасного Сейму."
        }
      }),
      text: {
        pl: [
          ["", em("Sejm walny"), " to zjazd, na którym król obraduje ze stanami. Z czasem utrwaliły się: król, senat i izba poselska (posłowie szlachty)."],
          "To nie sejm XXI wieku. W klasie 5 wystarczy: tu szlachta wpływa na prawo i podatki."
        ],
        ua: [
          ["", em("Вальний сейм"), " — це з’їзд, на якому король радиться зі станами. З часом закріпились: король, сенат і посольська ізба (посли шляхти)."],
          "Це не сейм XXI століття. У 5 класі досить: тут шляхта впливає на право і податки."
        ]
      },
      task: {
        id: "h38-sejm",
        type: "true-false",
        level: "A",
        question: {
          pl: "Sejm walny to zjazd, na którym król obraduje ze stanami — prawda czy fałsz?",
          ua: "Вальний сейм — це з’їзд, на якому король радиться зі станами — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z Akademią 1364.",
          ua: "Не плутай з Академією 1364."
        },
        explanation: {
          pl: "Prawda. Nihil novi powie, że bez sejmu nie ma nowego prawa.",
          ua: "Правда. Nihil novi скаже, що без сейму немає нового права."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Nihil novi 1505", ua: "Nihil novi 1505" },
      formula: "1505",
      timelineYear: 1505,
      visual: gh("317", {
        kind: "image-placeholder",
        alt: {
          pl: "Konstytucja Nihil novi 1505: nic nowego bez sejmu",
          ua: "Конституція Nihil novi 1505: нічого нового без сейму"
        },
        title: { pl: "Nic nowego bez zgody", ua: "Нічого нового без згоди" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dokument z napisem „Nihil novi 1505”. Pod spodem PL: „nic nowego — król nie wyda nowego prawa bez sejmu”. Trzy pieczęcie: król, senat, izba. BEZ foto aktu z Wiki jako jedynego slajdu. Styl Nowej Ery.",
          ua: "1505. Nihil novi. Без фото акта з Вікі."
        }
      }),
      text: {
        pl: [
          ["W ", em("1505"), " sejm w Radomiu uchwalił konstytucję ", em("Nihil novi"), " (łacina: „nic nowego”)."],
          "Król nie mógł wydać nowego prawa bez zgody senatu i izby poselskiej. To znak monarchii stanowej: szlachta współrządzi."
        ],
        ua: [
          ["", em("1505"), " року сейм у Радомі ухвалив конституцію ", em("Nihil novi"), " (латина: «нічого нового»)."],
          "Король не міг видати нового права без згоди сенату і посольської ізби. Це знак станової монархії: шляхта співправить."
        ]
      },
      task: {
        id: "h38-1505",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku uchwalono Nihil novi? Wpisz rok.",
          ua: "Якого року ухвалено Nihil novi? Введи рік."
        },
        answer: 1505,
        hint: {
          pl: "Po II pokoju toruńskim 1466. Nie 1374 i nie 1454.",
          ua: "Після II торунського миру 1466. Не 1374 і не 1454."
        },
        explanation: {
          pl: "1505. 1374 = Koszyce. 1454 = Nieszawa (37).",
          ua: "1505. 1374 = Кошице. 1454 = Нешава (37)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pańszczyzna", ua: "Панщина" },
      visual: gh("318", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat pańszczyzny: chłopi pracują na polu pana, bez gore",
          ua: "Схема панщини: селяни працюють на полі пана, без gore"
        },
        title: { pl: "Praca na polu pana", ua: "Праця на полі пана" },
        prompt: {
          pl: "Szkolny slajd 16:9. Dzień, pole. Chłopi przy płuże i snopach, spokojna praca. Dwór w tle. Strzałka: „pańszczyzna — obowiązkowa praca na ziemi pana”. BEZ bata, BEZ nędzy-gore, BEZ łańcuchów. Styl Nowej Ery.",
          ua: "Панщина. Праця, не батіг і не gore."
        }
      }),
      text: {
        pl: [
          ["", em("Pańszczyzna"), " to obowiązkowa praca chłopów na polu pana (szlachcica). Chłopi nie dostali przywilejów jak szlachta."],
          "W klasie 5 zapamiętaj różnicę: szlachta zyskuje prawa, chłopi — więcej obowiązków. Bez okrutnych obrazów."
        ],
        ua: [
          ["", em("Панщина"), " — обов’язкова праця селян на полі пана (шляхтича). Селяни не дістали привілеїв, як шляхта."],
          "У 5 класі запам’ятай різницю: шляхта здобуває права, селяни — більше обов’язків. Без жорстоких образів."
        ]
      },
      task: {
        id: "h38-panszczyzna",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym była pańszczyzna?",
          ua: "Чим була панщина?"
        },
        options: [
          { id: "a", label: { pl: "obowiązkową pracą chłopów na ziemi pana", ua: "обов’язковою працею селян на землі пана" } },
          { id: "b", label: { pl: "przywilejem koszyckim dla szlachty", ua: "кошицьким привілеєм для шляхти" } },
          { id: "c", label: { pl: "nazwą sejmu walnego", ua: "назвою вального сейму" } }
        ],
        answer: "a",
        hint: {
          pl: "Chłopi i pole pana. Nie dokument z 1374.",
          ua: "Селяни і поле пана. Не документ 1374 року."
        },
        explanation: {
          pl: "Przywileje = szlachta. Pańszczyzna = obowiązek chłopów.",
          ua: "Привілеї = шляхта. Панщина = обов’язок селян."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Od Koszyc do Nihil novi", ua: "Від Кошиць до Nihil novi" },
      visual: gh("319", {
        kind: "image-placeholder",
        alt: {
          pl: "Oś przywilejów: 1374 Koszyce, 1454 Nieszawa jako most, 1505 Nihil novi",
          ua: "Вісь привілеїв: 1374 Кошице, 1454 Нешава як міст, 1505 Nihil novi"
        },
        title: { pl: "Dwie daty, jeden most", ua: "Дві дати, один міст" },
        prompt: {
          pl: "Szkolna oś 16:9. Trzy punkty: 1374 Koszyce (pogrubione); 1454 Nieszawa (cieńszy, podpis „most z 37”); 1505 Nihil novi (pogrubione). Napis: „daty tej lekcji = 1374 i 1505”. BEZ rozbiorów, BEZ 1569. Styl Nowej Ery.",
          ua: "1374 і 1505 жирно. 1454 як міст. Без 1569."
        }
      }),
      text: {
        pl: [
          "Na osi tej lekcji pamiętasz 1374 i 1505. 1454 (Nieszawa) poznałeś przy wojnie trzynastoletniej — tu tylko most, nie para dat tej lekcji.",
          "To ostatni temat podręcznika klasy 5: od pierwszych ludzi do monarchii stanowej."
        ],
        ua: [
          "На осі цього уроку пам’ятаєш 1374 і 1505. 1454 (Нешава) ти пізнав при тринадцятилітній війні — тут лише міст, не пара дат цього уроку.",
          "Це остання тема підручника 5 класу: від перших людей до станової монархії."
        ]
      },
      task: {
        id: "h38-os",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które daty musisz zapamiętać w tej lekcji?",
          ua: "Які дати мусиш запам’ятати в цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "1374 Koszyce i 1505 Nihil novi", ua: "1374 Кошице і 1505 Nihil novi" } },
          { id: "b", label: { pl: "1410 Grunwald i 1466 Toruń", ua: "1410 Грюнвальд і 1466 Торунь" } },
          { id: "c", label: { pl: "tylko Nieszawa 1454 jako główne daty tej lekcji", ua: "лише Нешава 1454 як головні дати цього уроку" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty z intro. Nieszawa = 37.",
          ua: "Дві дати з intro. Нешава = 37."
        },
        explanation: {
          pl: "1410 i 1466 zamknięte w 36–37.",
          ua: "1410 і 1466 закриті в 36–37."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "monarchia patrymonialna — państwo jak własność władcy", ua: "патримоніальна монархія — держава як власність володаря" },
        { pl: "monarchia stanowa — król rządzi ze stanami, które mają przywileje", ua: "станова монархія — король править зі станами, які мають привілеї" },
        { pl: "stan — grupa z własnymi prawami (duchowieństwo, szlachta, mieszczanie, chłopi)", ua: "стан — група з власними правами (духовенство, шляхта, міщани, селяни)" },
        { pl: "szlachta — stan wyrosły z rycerstwa, z największymi przywilejami", ua: "шляхта — стан, що виріс із лицарства, з найбільшими привілеями" },
        { pl: "przywilej — szczególne prawo nadane przez władcę", ua: "привілей — особливе право, надане володарем" },
        { pl: "sejm walny — zjazd króla ze stanami (senat i izba poselska)", ua: "вальний сейм — з’їзд короля зі станами (сенат і посольська ізба)" },
        { pl: "Nihil novi — 1505: nic nowego bez zgody sejmu", ua: "Nihil novi — 1505: нічого нового без згоди сейму" },
        { pl: "pańszczyzna — obowiązkowa praca chłopów na ziemi pana", ua: "панщина — обов’язкова праця селян на землі пана" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Monarchia stanowa to Ateny. Koszyce to 1505. Nihil novi to 1374. Nieszawa zastępuje 1374 i 1505. Pańszczyzna to przywilej szlachty.”",
        ua: "«Станова монархія — це Афіни. Кошице — 1505. Nihil novi — 1374. Нешава замінює 1374 і 1505. Панщина — привілей шляхти.»"
      },
      text: {
        pl: [
          "Zostaje król, nie Ateny. Koszyce = 1374. Nihil novi = 1505. Nieszawa = most z 37. Pańszczyzna = obowiązek chłopów."
        ],
        ua: [
          "Лишається король, не Афіни. Кошице = 1374. Nihil novi = 1505. Нешава = міст з 37. Панщина = обов’язок селян."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: patrymonialna vs stanowa, Koszyce, sejm, Nihil novi. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: патримоніальна vs станова, Кошице, сейм, Nihil novi. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: stany i przywileje; 1374; 1505 nic nowego bez sejmu; chłopi — pańszczyzna."
        ],
        ua: [
          "Підказка: стани і привілеї; 1374; 1505 нічого нового без сейму; селяни — панщина."
        ]
      },
      task: {
        id: "h38-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę tej godziny?",
          ua: "Яке речення замикає нотатку цієї години?"
        },
        options: [
          { id: "a", label: { pl: "Monarchia stanowa: 1374 Koszyce, sejm walny, 1505 Nihil novi — król nie stanowi prawa sam", ua: "Станова монархія: 1374 Кошице, вальний сейм, 1505 Nihil novi — король не творить право сам" } },
          { id: "b", label: { pl: "To tylko II pokój toruński 1466", ua: "Це лише II торунський мир 1466" } },
          { id: "c", label: { pl: "To unia w Krewie 1385", ua: "Це унія в Креві 1385" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty z intro.",
          ua: "Дві дати з intro."
        },
        explanation: {
          pl: "1466 = 37. 1385 = 36.",
          ua: "1466 = 37. 1385 = 36."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Łacina i Nieszawa", ua: "Латина і Нешава" },
      task: {
        id: "h38-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Ponadpodstawowe: co znaczy Nihil novi i gdzie stoi Nieszawa?",
          ua: "Понад базове: що означає Nihil novi і де стоїть Нешава?"
        },
        options: [
          { id: "a", label: { pl: "Nihil novi = „nic nowego”; Nieszawa 1454 to przywilej przy wojnie trzynastoletniej (37), nie zamiast 1374 i 1505", ua: "Nihil novi = «нічого нового»; Нешава 1454 — привілей при тринадцятилітній війні (37), не замість 1374 і 1505" } },
          { id: "b", label: { pl: "Nihil novi to nazwa Akademii 1364", ua: "Nihil novi — назва Академії 1364" } },
          { id: "c", label: { pl: "trzeba wkuć rozbiory 1772", ua: "треба зубрити поділи 1772" } }
        ],
        answer: "a",
        hint: {
          pl: "Do zapamiętania: 1374 i 1505. Rozbiory nie są klasą 5.",
          ua: "Запам’ятай: 1374 і 1505. Поділи не є 5 класом."
        },
        explanation: {
          pl: "Łańcuch przywilejów: Koszyce → Nieszawa → Nihil novi. W klasie 5 obowiązkowe są końce łańcucha.",
          ua: "Ланцюг привілеїв: Кошице → Нешава → Nihil novi. У 5 класі обов’язкові кінці ланцюга."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h38-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o monarchii stanowej w Polsce?",
          ua: "Що правда про станову монархію в Польщі?"
        },
        options: [
          { id: "a", label: { pl: "król ze stanami; 1374 Koszyce; sejm walny; 1505 Nihil novi; szlachta z przywilejami, chłopi z pańszczyzną", ua: "король зі станами; 1374 Кошице; вальний сейм; 1505 Nihil novi; шляхта з привілеями, селяни з панщиною" } },
          { id: "b", label: { pl: "Kazimierz Wielki wydał Nihil novi w 1343", ua: "Казимир Великий видав Nihil novi 1343 року" } },
          { id: "c", label: { pl: "to unia lubelska 1569", ua: "це люблінська унія 1569" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie daty tej lekcji. 1343 = Kalisz. 1569 nie jest klasą 5.",
          ua: "Дві дати цього уроку. 1343 = Каліш. 1569 не є 5 класом."
        },
        explanation: {
          pl: "1343 = pokój, nie ustrój. 1569 poza podręcznikiem klasy 5.",
          ua: "1343 = мир, не устрій. 1569 поза підручником 5 класу."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Monarchia patrymonialna to państwo jak własność władcy. Monarchia stanowa to król, który rządzi ze stanami — zwłaszcza ze szlachtą.",
          ["patrymonialna", "stanowa"],
          "Патримоніальна монархія — держава як власність володаря. Станова монархія — король, який править зі станами — особливо зі шляхтою.",
          ["патримоніальна", "станова"]
        ),
        mark(
          "W 1374 przywilej koszycki Ludwika: szlachta dostała ulgi, król dostał zgodę na dziedziczenie przez córki.",
          ["1374", "koszycki"],
          "1374 року кошицький привілей Людовика: шляхта дістала пільги, король — згоду на спадкування доньками.",
          ["1374", "кошицький"]
        ),
        mark(
          "W 1505 Nihil novi: król nie wyda nowego prawa bez sejmu walnego. Chłopi odrabiali pańszczyznę.",
          ["1505", "Nihil novi", "pańszczyznę"],
          "1505 року Nihil novi: король не видасть нового права без вального сейму. Селяни відбували панщину.",
          ["1505", "Nihil novi", "панщину"]
        ),
        mark(
          "Potrafię powiedzieć: w Polsce stany, zwłaszcza szlachta, ograniczyły króla przywilejami — od Koszyc do Nihil novi.",
          ["szlachta", "Koszyc"],
          "Можу сказати: у Польщі стани, особливо шляхта, обмежили короля привілеями — від Кошиць до Nihil novi.",
          ["шляхта", "Кошиць"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Koniec podręcznika klasy 5", ua: "Кінець підручника 5 класу" },
      text: {
        pl: [
          "To ostatnia lekcja historii w klasie 5: od pierwszych ludzi, przez Grecję i Rzym, średniowiecze, Piastów i Jagiellonów — aż do monarchii stanowej.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Це останній урок історії в 5 класі: від перших людей, через Грецію і Рим, середньовіччя, П’ястів і Ягеллонів — до станової монархії.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "_YdY1OZ45jo",
        title: {
          pl: "Krótkie Lekcje: Monarchia stanowa w Polsce",
          ua: "Короткі уроки: Станова монархія в Польщі"
        }
      }
    }
  ]
};
