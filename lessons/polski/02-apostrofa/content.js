function emT2(text) {
  return { text: text, emphasis: true };
}

var POL_IMG_T2 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGhT2(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG_T2 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = { blocks: [
  // 1
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 10–11  ·  Lekcja 2  ·  Preludium",
    promptPlace: "before",
    prompt: {
      pl: "Dział *Zachwycający kosmos*. Temat: *Na dobry początek*. Wczoraj w lekcji 1 pytaliśmy: kto mówi, do kogo, gdzie i po co. Dziś ten sam trop — ale w *wierszu* Jana Lechonia *Preludium*. Polski pierwszy. Włącz 🇺🇦. Wiersza nie tłumaczymy.",
      ua: "Розділ *Zachwycający kosmos*. Тема: *Na dobry początek*. Учора в уроці 1 ми питали: хто говорить, до кого, де і навіщо. Сьогодні той самий слід — але у *вірші* Яна Лехоня *Preludium*. Польська перша. Увімкни 🇺🇦. Вірш не перекладаємо."
    },
    items: [
      { pl: "zrelacjonuję treść wiersza *Preludium*;", ua: "перекажу зміст вірша *Preludium*;" },
      { pl: "określę *nastrój* wypowiedzi i wskażę dowód w tekście;", ua: "визначу *настрій* висловлювання і вкажу доказ у тексті;" },
      { pl: "zbiorę *sytuację* osoby mówiącej: gdzie, kiedy, co widzi, co słyszy;", ua: "зберу *ситуацію* особи, яка говорить: де, коли, що бачить, що чує;" },
      { pl: "rozpoznam *apostrofę* i powiem, do kogo jest zwrot;", ua: "розпізнаю *апострофу* і скажу, до кого звертання;" },
      { pl: "wyjaśnię tytuł *Preludium* ze słownika.", ua: "поясню назву *Preludium* зі словника." }
    ],
    task: {
      id: "t2-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Opowiedzieć, o czym jest wiersz, i określić nastrój z dowodem.", ua: "Розповісти, про що вірш, і визначити настрій з доказом." } },
        { id: "b", label: { pl: "Wskazać apostrofę i powiedzieć, do kogo osoba się zwraca.", ua: "Вказати апострофу і сказати, до кого особа звертається." } },
        { id: "c", label: { pl: "Już dziś nazwać osobę mówiącą podmiotem lirycznym i odmienić rzeczownik.", ua: "Уже сьогодні назвати особу, яка говорить, ліричним суб’єктом і відмінити іменник." } },
        { id: "d", label: { pl: "Zebrać sytuację: gdzie, kiedy, co widzi i słyszy osoba mówiąca.", ua: "Зібрати ситуацію: де, коли, що бачить і чує особа, яка говорить." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "*Podmiot liryczny* jest w lekcji 6. Odmiana rzeczownika — dużo później. Co zostaje na dziś ze s. 10–11?",
        ua: "*Ліричний суб’єкт* — урок 6. Відміна іменника — набагато пізніше. Що лишається на сьогодні зі с. 10–11?"
      },
      explanation: {
        pl: "Dziś: treść, nastrój, sytuacja, apostrofa, tytuł. Podmiot liryczny — lekcja 6. Nie mieszamy z gramatyką przypadków.",
        ua: "Сьогодні: зміст, настрій, ситуація, апострофа, назва. Ліричний суб’єкт — урок 6. Не змішуємо з відмінками."
      }
    }
  },
  // 2
  {
    type: "example",
    heading: { pl: "Słowo z pól", ua: "Слово з полів" },
    promptPlace: "before",
    prompt: {
      pl: "Jedna glosa z pomarańczowego pola s. 10. Najpierw ramka, potem rozbiór. Usłyszysz to słowo zaraz w pierwszej linii wiersza.",
      ua: "Одна глоса з помаранчевого поля с. 10. Спочатку рамка, потім розбір. Це слово почуєш одразу в першому рядку вірша."
    },
    text: {
      pl: "świt",
      ua: "świt — світанок"
    },
    items: [
      { pl: "**świt** — początek ranka; światło widoczne *przed* pojawieniem się słońca.", ua: "**świt** — початок ранку; світло, яке видно *перед* появою сонця." },
      { pl: "To nie południe i nie zmierzch. Świt = jeszcze prawie noc, ale już się jasno robi.", ua: "Це не полудень і не смеркання. Świt = іще майже ніч, але вже світлішає." },
      { pl: "W wierszu: *Za oknami świt czerwony* — czerwone światło poranka za szybą.", ua: "У вірші: *Za oknami świt czerwony* — червоне світло ранку за шибкою." }
    ],
    task: {
      id: "t2-s02-swit",
      type: "single-choice",
      question: {
        pl: "«Za oknami świt czerwony». Świt to:",
        ua: "«Za oknami świt czerwony». Świt — це:"
      },
      options: [
        { id: "a", label: { pl: "początek ranka, światło przed wschodem słońca", ua: "початок ранку, світло перед сходом сонця" } },
        { id: "b", label: { pl: "środek nocy, gdy jest fest ciemno", ua: "середина ночі, коли зовсім темно" } },
        { id: "c", label: { pl: "nazwa ptaka za oknem", ua: "назва птаха за вікном" } }
      ],
      answer: "a",
      hint: {
        pl: "Glosa z pola: początek ranka, światło *przed* pojawieniem się słońca.",
        ua: "Глоса з поля: початок ранку, світло *перед* появою сонця."
      },
      explanation: {
        pl: "Świt = wczesny poranek, jeszcze przed pełnym słońcem. Dlatego w wierszu słońce dopiero *wraca*. To nie noc i nie ptak.",
        ua: "Świt = ранній ранок, ще перед повним сонцем. Тому в вірші сонце щойно *wraca*. Це не ніч і не птах."
      }
    }
  },
  // 3
  {
    type: "observe",
    heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
    formula: "s. 10  ·  nagranie  ·  Jan Lechoń",
    promptPlace: "before",
    prompt: {
      pl: "Najpierw *posłuchaj* nagrania strony 10 (głos po polsku). Potem odsłoń dwie strofy. Wiersza nie tłumaczymy. Pytania w głowie: *gdzie* jest osoba? *kiedy*? *co* widzi i słyszy? czy tylko opisuje, czy do kogoś *mówi*?",
      ua: "Спочатку *послухай* запис сторінки 10 (голос польською). Потім відкрий дві строфи. Вірш не перекладаємо. Питання: *де* особа? *коли*? *що* бачить і чує? чи лише описує, чи до когось *говорить*?"
    },
    reveal: true,
    steps: [
      {
        formula: "strofa 1",
        visual: vizGhT2("t2-preludium.png", {
          prompt: "Ptak i świt.",
          alt: {
            pl: "Ptak wita pomarańczowy świt z drzewami w chmurze światła.",
            ua: "Птах вітає помаранчевий світанок із деревами в хмарі світла."
          }
        }),
        text: {
          pl: [
            "Jan Lechoń",
            "Preludium",
            " ",
            "Za oknami świt czerwony,",
            "Jeszcze sennych szelest drzew,",
            "Słońce wraca z drugiej strony,",
            "Ptak zbudzony zaczął śpiew."
          ]
        }
      },
      {
        formula: "strofa 2",
        text: {
          pl: [
            "Ach! dzień dobry wam, kasztany,",
            "Wodo pełna srebrnych lśnień!",
            "Jeszcze jeden darowany",
            "Cudownego życia dzień!"
          ]
        }
      }
    ],
    task: {
      id: "t2-s03-relacja",
      type: "single-choice",
      question: {
        pl: "Co NA PEWNO dzieje się w tym wierszu?",
        ua: "Що НАПЕВНО діється в цьому вірші?"
      },
      options: [
        { id: "a", label: { pl: "Zaczyna się poranek: świt, słońce, szelest drzew, śpiew ptaka — i radość z dnia.", ua: "Починається ранок: світанок, сонце, шелест дерев, спів птаха — і радість дня." } },
        { id: "b", label: { pl: "Zapada noc: księżyc, cisza i strach przed ciemnością.", ua: "Настає ніч: місяць, тиша і страх перед темрявою." } },
        { id: "c", label: { pl: "Ktoś idzie do szkoły i martwi się o sprawdzian.", ua: "Хтось іде до школи і хвилюється за контрольну." } }
      ],
      answer: "a",
      hint: {
        pl: "Pierwsze słowa: *Za oknami świt…* Koniec: *darowany / Cudownego życia dzień*.",
        ua: "Перші слова: *Za oknami świt…* Кінець: *darowany / Cudownego życia dzień*."
      },
      explanation: {
        pl: "Poranek: świt, słońce wraca, drzewa, ptak. Potem powitanie kasztanów i wody oraz radość z darowanego dnia. To nie noc i nie szkoła.",
        ua: "Ранок: світанок, сонце повертається, дерева, птах. Потім вітання каштанів і води та радість подарованого дня. Це не ніч і не школа."
      }
    }
  },
  // 4
  {
    type: "example",
    heading: { pl: "Jaki jest nastrój", ua: "Який настрій" },
    formula: "s. 11  ·  zad. 1  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Podręcznik: określ nastrój wypowiedzi poetyckiej. Zapisz w zeszycie *pasujące* sformułowania z ramki. Nastrój to ogólne wrażenie z głosu w wierszu — nie zgadujemy z tytułu. Dowód szukaj w strofie 2.",
      ua: "Підручник: визнач настрій поетичного висловлювання. Запиши в зошит *ті* слова з рамки, що пасують. Настрій — загальне враження від голосу у вірші. Доказ шукай у строфі 2."
    },
    text: {
      pl: "smutny  ·  pogodny  ·  spokojny  ·  radosny  ·  wesoły  ·  ponury  ·  żartobliwy  ·  pełen niepokoju  ·  mroczny  ·  tajemniczy  ·  posępny",
      ua: "smutny — сумний  ·  pogodny — погідний  ·  spokojny — спокійний  ·  radosny — радісний  ·  wesoły — веселий  ·  ponury — похмурий  ·  żartobliwy — жартівливий  ·  pełen niepokoju — сповнений тривоги  ·  mroczny — морочний  ·  tajemniczy — таємничий  ·  posępny — понурий"
    },
    items: [
      { pl: "*smutny* — pełen smutku. *ponury* — jak ciemne chmury, bez światła. *posępny* — poważny, bez uśmiechu.", ua: "*smutny* — сумний. *ponury* — похмурий, як темні хмари без сонця. *posępny* — понурий, сумовитий, наче без усмішки." },
      { pl: "*pogodny* — jasny, łagodny (jak pogodne niebo). *spokojny* — bez krzyku i strachu. *radosny* — pełen radości. *wesoły* — z uśmiechem, lekki.", ua: "*pogodny* — погідний, ясний (як ясне небо). *spokojny* — спокійний, без крику і страху. *radosny* — радісний. *wesoły* — веселий, з усмішкою." },
      { pl: "*żartobliwy* — z żartem, do śmiechu. *tajemniczy* — jak zagadka, coś ukryte. *mroczny* — ciemny i groźny. *pełen niepokoju* — ktoś się boi, nie może uspokoić.", ua: "*żartobliwy* — жартівливий. *tajemniczy* — таємничий, загадковий. *mroczny* — морочний, зловісний (темний і страшний). *pełen niepokoju* — сповнений тривоги, неспокою." },
      { pl: "Do *Preludium* pasują: *pogodny, spokojny, radosny, wesoły* — bo *dzień dobry*, *darowany*, *cudownego życia dzień*.", ua: "До *Preludium* пасують: *pogodny, spokojny, radosny, wesoły* (погідний, спокійний, радісний, веселий) — бо *dzień dobry*, *darowany*, *cudownego życia dzień*." },
      { pl: "Nie pasują: *smutny, ponury, posępny, mroczny, pełen niepokoju*. *Żartobliwy / tajemniczy* — ten głos jest uroczysty, pełen zachwytu, nie żart i nie zagadka.", ua: "Не пасують: *smutny, ponury, posępny, mroczny, pełen niepokoju* (сумний, похмурий, понурий, морочний, сповнений тривоги). *Żartobliwy / tajemniczy* — цей голос урочистий, повний захвату, не жарт і не загадка." }
    ],
    task: {
      id: "t2-s04-nastroj",
      type: "multiple-choice",
      question: {
        pl: "Które sformułowania NA PEWNO pasują do nastroju Preludium? Zaznacz wszystkie pewne.",
        ua: "Які формулювання НАПЕВНО пасують до настрою Preludium? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "pogodny, radosny, wesoły", ua: "pogodny, radosny, wesoły — погідний, радісний, веселий" } },
        { id: "b", label: { pl: "smutny, ponury, posępny", ua: "smutny, ponury, posępny — сумний, похмурий, понурий" } },
        { id: "c", label: { pl: "spokojny", ua: "spokojny — спокійний" } },
        { id: "d", label: { pl: "mroczny, pełen niepokoju", ua: "mroczny, pełen niepokoju — морочний, сповнений тривоги" } }
      ],
      answer: ["a", "c"],
      hint: {
        pl: "Strofa 2: Ach! dzień dobry… darowany / Cudownego życia dzień. Czy to smutek?",
        ua: "Строфа 2: Ach! dzień dobry… darowany / Cudownego życia dzień. Чи це сум?"
      },
      explanation: {
        pl: "Pogodny, spokojny, radosny, wesoły. Smutny / ponury / mroczny odpadają: osoba wita dzień jak dar.",
        ua: "Погідний, спокійний, радісний, веселий. Сумний / похмурий / морочний відпадають: особа вітає день як дар."
      }
    }
  },
  // 5
  {
    type: "observe",
    heading: { pl: "Sytuacja osoby mówiącej", ua: "Ситуація особи, яка говорить" },
    formula: "s. 11  ·  zad. 2a",
    promptPlace: "before",
    prompt: {
      pl: "Most z lekcji 1: kto mówi, *gdzie*, *kiedy*. Dziś dokładamy: co *widzi* i co *słyszy*. Odpowiedzi bierz z *fragmentów* wiersza, nie z wyobraźni. Osoba mówiąca = głos *w tekście*. Jan Lechoń *napisał* wiersz — to nie to samo pytanie.",
      ua: "Міст з уроку 1: хто говорить, *де*, *коли*. Сьогодні додаємо: що *бачить* і що *чує*. Відповіді бери з *уривків* вірша, не з уяви. Особа, яка говорить = голос *у тексті*. Ян Лехонь *написав* вірш — це інше питання."
    },
    visual: vizGhT2("t2-preludium.png", {
      prompt: "Ptak i świt.",
      alt: {
        pl: "Ptak i pomarańczowy świt.",
        ua: "Птах і помаранчевий світанок."
      }
    }),
    items: [
      { pl: "*Gdzie?* Prawdopodobnie przy oknie — *Za oknami świt czerwony*.", ua: "*Де?* Ймовірно біля вікна — *Za oknami świt czerwony*." },
      { pl: "*Kiedy?* O świcie: słońce wraca, ptak *zbudzony* zaczął śpiew.", ua: "*Коли?* На світанку: сонце повертається, птах *збуджений* почав спів." },
      { pl: "*Widzi:* świt, kasztany, wodę pełną srebrnych lśnień.", ua: "*Бачить:* світанок, каштани, воду повну сріблястих відблисків." },
      { pl: "*Słyszy:* senny szelest drzew i śpiew ptaka.", ua: "*Чує:* сонний шелест дерев і спів птаха." }
    ],
    task: {
      id: "t2-s05-sytuacja",
      type: "multiple-choice",
      question: {
        pl: "Co NA PEWNO wynika z wiersza? Zaznacz wszystkie pewne.",
        ua: "Що НАПЕВНО випливає з вірша? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Przy oknie, o świcie; widzi świt, kasztany, wodę; słyszy drzewa i ptaka.", ua: "Біля вікна, на світанку; бачить світанок, каштани, воду; чує дерева і птаха." } },
        { id: "b", label: { pl: "To Jan Lechoń osobiście stoi w ogrodzie — bo on jest autorem, szukać w tekście nie trzeba.", ua: "Це особисто Ян Лехонь стоїть у саду — бо він автор, у тексті шукати не треба." } },
        { id: "c", label: { pl: "Jest noc i osoba boi się burzy.", ua: "Ніч, і особа боїться бурі." } },
        { id: "d", label: { pl: "Osoba mówiąca to głos w tekście, nie automatycznie podpis pod tytułem.", ua: "Особа, яка говорить — голос у тексті, не автоматично підпис під назвою." } }
      ],
      answer: ["a", "d"],
      hint: {
        pl: "Szukaj cytatów: okno, świt, szelest, ptak, kasztany, woda. Autor ≠ osoba mówiąca.",
        ua: "Шукай цитати: вікно, світанок, шелест, птах, каштани, вода. Автор ≠ особа, яка говорить."
      },
      explanation: {
        pl: "Sytuacja z tekstu: okno, świt, kasztany, woda, szelest, ptak. Autor jest na podpisie. Nocy i burzy nie ma.",
        ua: "Ситуація з тексту: вікно, світанок, каштани, вода, шелест, птах. Автор — на підписі. Ночі й бурі немає."
      }
    }
  },
  // 6
  {
    type: "concept",
    heading: { pl: "Apostrofa", ua: "Апострофа" },
    formula: "s. 11  ·  nagranie  ·  zad. 2b",
    promptPlace: "before",
    prompt: {
      pl: "To *ramka z podręcznika* — definicja do zeszytu. Zapisz ją. Potem odpowiedz: *do kogo* zwraca się osoba mówiąca. Nagranie s. 11 pomoże usłyszeć polski głos ramki. Most: українське *звертання* (апострофа). Uwaga: to *nie* znak «’» w nazwisku.",
      ua: "Це *рамка з підручника* — означення до зошита. Запиши. Потім відповіси: *до кого* звертається особа, яка говорить. Запис с. 11 допоможе почути польський голос рамки. Міст: українське *звертання* (апострофа). Увага: це *не* знак «’» у прізвищі."
    },
    text: {
      pl: "**Apostrofa** to **bezpośrednie zwrócenie się** do jakiegoś odbiorcy, na przykład osoby, bóstwa czy przedmiotu. Stosuje się ją w tekstach poetyckich pełnych emocji, utrzymanych w podniosłym, uroczystym nastroju, a także w przemówieniach.",
      ua: "**Апострофа** — це **безпосереднє звертання** до якогось адресата, наприклад особи, божества чи предмета. Її вживають у поетичних текстах, повних емоцій, у піднесеному, урочистому настрої, а також у промовах."
    },
    items: [
      { pl: "Trzy kroki: 1) ktoś mówi, 2) zwraca się *bezpośrednio*, 3) ma *odbiorcę*.", ua: "Три кроки: 1) хтось говорить, 2) звертається *безпосередньо*, 3) є *адресат*." },
      { pl: "W *Preludium* odbiorcy: *kasztany* i *woda* (*Wodo!*).", ua: "У *Preludium* адресати: *каштани* і *вода* (*Wodo!*)." },
      { pl: "Sygnały: *dzień dobry wam*, wołacz *Wodo*, wykrzyknik *Ach!*", ua: "Сигнали: *dzień dobry wam*, кличний *Wodo*, вигук *Ach!*" },
      { pl: "Strofa 1 tylko *opisuje* świt i ptaka — to jeszcze nie apostrofa.", ua: "Строфа 1 лише *описує* світанок і птаха — це ще не апострофа." }
    ],
    task: {
      id: "t2-s06-apostrofa",
      type: "single-choice",
      question: {
        pl: "Do kogo (czego) zwraca się osoba mówiąca w wierszu?",
        ua: "До кого (чого) звертається особа, яка говорить у вірші?"
      },
      options: [
        { id: "a", label: { pl: "Do kasztanów i do wody.", ua: "До каштанів і до води." } },
        { id: "b", label: { pl: "Do Jana Lechonia (autora).", ua: "До Яна Лехоня (автора)." } },
        { id: "c", label: { pl: "Do ptaka i do słońca.", ua: "До птаха і до сонця." } }
      ],
      answer: "a",
      hint: {
        pl: "Szukaj *dzień dobry wam, kasztany* i *Wodo pełna srebrnych lśnień*.",
        ua: "Шукай *dzień dobry wam, kasztany* і *Wodo pełna srebrnych lśnień*."
      },
      explanation: {
        pl: "Zwrot idzie do kasztanów i wody. Ptak i słońce są tylko opisane. Autor nie jest odbiorcą apostrofy.",
        ua: "Звертання йде до каштанів і води. Птах і сонце лише описані. Автор не є адресатом апострофи."
      }
    }
  },
  // 7
  {
    type: "practice",
    heading: { pl: "Przeżycia w apostrofie", ua: "Переживання в апострофі" },
    formula: "s. 11  ·  zad. 2c",
    promptPlace: "before",
    prompt: {
      pl: "Nazwij przeżycia osoby mówiącej i wyjaśnij, *jak* zostały wyrażone w tym fragmencie. Cytat z podręcznika:",
      ua: "Назви переживання особи, яка говорить, і поясни, *як* вони виражені в цьому уривку. Цитата з підручника:"
    },
    items: [
      { pl: "*Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!*", ua: "Вірш не перекладаємо. Слова: *Ach!* — вигук «ах!»; *dzień dobry wam* — «добрий день вам»; *kasztany* — каштани; *Wodo* — кличний від *woda* (водо!); *srebrnych lśnień* — срібних відблисків." },
      { pl: "Przeżycia: *radość* — jest mi dobrze; *zachwyt* — coś mnie zachwyca; *wdzięczność* — dziękuję za dar; *ciepło* — łagodne uczucie do świata. Dzień jest darem.", ua: "Переживання: *radość* — радість (мені добре); *zachwyt* — захват (щось мене захоплює); *wdzięczność* — вдячність (дякую за дар); *ciepło* — тепло, сердечність. День є даром." },
      { pl: "Jak to widać: wykrzyknik *Ach!*, powitanie *dzień dobry wam*, wołacz *Wodo*, później *darowany* (dany w darze) / *cudownego życia dzień* (dzień cudownego życia).", ua: "Як це видно: вигук *Ach!*; вітання *dzień dobry wam*; кличний відмінок *Wodo*; далі *darowany* — подарований; *cudownego życia dzień* — день чудового життя." }
    ],
    task: {
      id: "t2-s07-przezycia",
      type: "true-false",
      question: {
        pl: "Czy w tym fragmencie osoba mówiąca wyraża strach i smutek — bo świt jest czerwony, a drzewa jeszcze senne?",
        ua: "Чи в цьому уривку особа, яка говорить, виражає страх і сум — бо світанок червоний, а дерева ще сонні?"
      },
      answer: false,
      hint: {
        pl: "Czytaj *Ach!* i *dzień dobry*. Czy tak wita się ktoś przestraszony?",
        ua: "Читай *Ach!* і *dzień dobry*. Чи так вітається хтось наляканий?"
      },
      explanation: {
        pl: "Fałsz. Czerwony świt i senne drzewa to opis poranka, nie groza. Apostrofa niesie radość i zachwyt.",
        ua: "Хиба. Червоний світанок і сонні дерева — опис ранку, не жах. Апострофа несе радість і захват."
      }
    }
  },
  // 8
  {
    type: "practice",
    heading: { pl: "Co znaczy Preludium", ua: "Що означає Preludium" },
    formula: "s. 11  ·  zad. 3a  ·  PWN",
    promptPlace: "before",
    prompt: {
      pl: "Przeczytaj definicje ze *Uniwersalnego słownika języka polskiego* (s. 11). Wybierz znaczenie, które łączy się z *treścią* utworu. Potem krótko: jak rozumiesz tytuł.",
      ua: "Прочитай означення з *Uniwersalnego słownika języka polskiego* (с. 11). Вибери значення, яке пасує до *змісту* твору. Потім коротко: як розумієш назву."
    },
    items: [
      { pl: "*preludium* 1. *muz.* a) wstęp instrumentalny do większego utworu (np. suity, fugi); b) samodzielny krótki utwór instrumentalny.", ua: "*preludium* 1. *муз.* а) інструментальний вступ до більшого твору; б) самостійний короткий інструментальний твір." },
      { pl: "2. *książk. przen.* zapowiedź czegoś, wstęp do czegoś.", ua: "2. *книжн. перен.* передвістя чогось, вступ до чогось." },
      { pl: "Ten wiersz jest jak *wstęp do dnia*: świt, pierwszy śpiew, pierwsze *dzień dobry*. Dlatego tytuł pasuje do znaczenia *przenośnego*.", ua: "Цей вірш як *вступ до дня*: світанок, перший спів, перше *dzień dobry*. Тому назва пасує до *переносного* значення." }
    ],
    task: {
      id: "t2-s08-preludium",
      type: "single-choice",
      question: {
        pl: "Które znaczenie *preludium* NA PEWNO łączy się z treścią tego wiersza?",
        ua: "Яке значення *preludium* НАПЕВНО пасує до змісту цього вірша?"
      },
      options: [
        { id: "a", label: { pl: "zapowiedź / wstęp do czegoś — tu: początek darowanego dnia", ua: "передвістя / вступ до чогось — тут: початок подарованого дня" } },
        { id: "b", label: { pl: "koniec dnia, zmierzch", ua: "кінець дня, смеркання" } },
        { id: "c", label: { pl: "nazwa ptaka za oknem", ua: "назва птаха за вікном" } }
      ],
      answer: "a",
      hint: {
        pl: "Hasło 2: *zapowiedź czegoś, wstęp do czegoś*. Co się zaczyna w wierszu?",
        ua: "Гніздо 2: *передвістя чогось, вступ до чогось*. Що починається у вірші?"
      },
      explanation: {
        pl: "Pasuje przenośnia: wstęp do dnia. Sens muzyczny (krótki utwór na początek) też jest bliski, ale treść wiersza to świt, nie koncert. Zmierzch i ptak odpadają.",
        ua: "Пасує переносне: вступ до дня. Музичний сенс (короткий твір на початок) теж близький, але зміст вірша — світанок, не концерт. Смеркання і птах відпадають."
      }
    }
  },
  // 9
  {
    type: "practice",
    heading: { pl: "Głosem osoby mówiącej", ua: "Голосом особи, яка говорить" },
    formula: "s. 11  ·  zad. 3b",
    promptPlace: "before",
    prompt: {
      pl: "W imieniu osoby mówiącej dokończ wypowiedź. Startery z podręcznika: *Każdy dzień mojego życia…* albo *Moje życie…* Piszesz *ja*, po polsku, w nastroju wiersza (dar, radość, świt) — nie recenzję «wiersz jest ładny».",
      ua: "Від імені особи, яка говорить, докінчи висловлювання. Початки з підручника: *Każdy dzień mojego życia…* або *Moje życie…* Пишеш *я*, польською, у настрої вірша (дар, радість, світанок) — не рецензію «вірш гарний»."
    },
    reveal: true,
    steps: [
      {
        formula: "wzór",
        text: {
          pl: [
            "Każdy dzień mojego życia jest darem.",
            "Moje życie zaczyna się od świtu za oknem — i ja witam kasztany."
          ],
          ua: [
            "Кожен день мого життя є даром.",
            "Моє життя починається зі світанку за вікном — і я вітаю каштани."
          ]
        }
      }
    ],
    task: {
      id: "t2-s09-ja",
      type: "open-answer",
      question: {
        pl: "Dokończ po polsku: «Każdy dzień mojego życia…» albo «Moje życie…» (1–3 zdania).",
        ua: "Докінчи польською: «Każdy dzień mojego życia…» або «Moje życie…» (1–3 речення)."
      },
      answer: [
        "Każdy dzień mojego życia jest darem.",
        "Każdy dzień mojego życia jest cudowny.",
        "Moje życie jest darem."
      ],
      hint: {
        pl: "Zacznij jak w książce. Potem: polski; ja; świt / radość / dar dnia.",
        ua: "Почни як у книжці. Потім: польська; я; світанок / радість / дар дня."
      },
      explanation: {
        pl: "Silnik nie ocenia poezji. Sprawdź sam: 1) po polsku; 2) jak osoba mówiąca (ja); 3) nastrój daru i poranka. Wzór jest jedną z możliwości.",
        ua: "Рушій не оцінює поезію. Сам: 1) польською; 2) як особа з вірша (я); 3) настрій дару і ранку. Зразок — одна з можливостей."
      }
    }
  },
  // 10
  {
    type: "example",
    heading: { pl: "Czy warto spędzać czas…", ua: "Чи варто проводити час…" },
    formula: "s. 11  ·  zad. 4  ·  ramka",
    promptPlace: "before",
    prompt: {
      pl: "Jak sądzisz: czy warto spędzać czas z kimś będącym w *podobnym nastroju* jak osoba z *Preludium*? Uzasadnij. Zastosuj wybrane słownictwo z ramki — to gotowe związki, których uczy polska szkoła.",
      ua: "Як вважаєш: чи варто проводити час із кимось у *подібному настрої*, як особа з *Preludium*? Обґрунтуй. Уживи вибрані вислови з рамки — це готові сполуки, яких учить польська школа."
    },
    text: {
      pl: "mieć dobry/zły wpływ  ·  patrzeć na świat przez różowe okulary  ·  popadać w depresję  ·  widzieć świat w ciemnych barwach  ·  być optymistą/pesymistą  ·  dzielić się radością  ·  zarażać smutkiem  ·  zachowywać pogodę ducha",
      ua: "mieć dobry/zły wpływ — мати добрий/поганий вплив  ·  patrzeć na świat przez różowe okulary — дивитися на світ крізь рожеві окуляри  ·  popadać w depresję — впадати в депресію  ·  widzieć świat w ciemnych barwach — бачити все похмуро  ·  być optymistą/pesymistą — бути оптимістом/песимістом  ·  dzielić się radością — ділитися радістю  ·  zarażać smutkiem — заражати сумом  ·  zachowywać pogodę ducha — зберігати гарний настрій"
    },
    items: [
      { pl: "*mieć dobry / zły wpływ* — działać na kogoś dobrze albo źle. *dzielić się radością* — dawać innym swoją radość. *zarażać smutkiem* — sprawiać, że inni też się smucą.", ua: "*mieć dobry / zły wpływ* — мати добрий / поганий вплив (діяти на когось добре або погано). *dzielić się radością* — ділитися радістю. *zarażać smutkiem* — заражати сумом (інші теж починають сумувати)." },
      { pl: "*patrzeć na świat przez różowe okulary* — widzieć wszystko zbyt pozytywnie. *zachowywać pogodę ducha* — nie tracić dobrego nastroju, nawet gdy jest trudno.", ua: "*patrzeć na świat przez różowe okulary* — дивитися на світ крізь рожеві окуляри (бачити все кращим, ніж є). *zachowywać pogodę ducha* — зберігати гарний настрій, бадьорість, навіть коли важко." },
      { pl: "*widzieć świat w ciemnych barwach* — wszystko wydaje się złe. *popadać w depresję* — wpadać w bardzo głęboki smutek. *być optymistą* — wierzyć, że będzie dobrze; *pesymistą* — spodziewać się złego.", ua: "*widzieć świat w ciemnych barwach* — бачити все похмуро, ніби світ без світла. *popadać w depresję* — впадати в депресію, у дуже глибокий сум. *być optymistą* — бути оптимістом (вірити, що буде добре); *pesymistą* — песимістом (чекати поганого)." },
      { pl: "Do kogoś jak w *Preludium* pasują: *dzielić się radością*, *mieć dobry wpływ*, *zachowywać pogodę ducha*.", ua: "До когось як у *Preludium* пасують: *dzielić się radością*, *mieć dobry wpływ*, *zachowywać pogodę ducha* (ділитися радістю, мати добрий вплив, зберігати гарний настрій)." },
      { pl: "*zarażać smutkiem*, *widzieć świat w ciemnych barwach*, *popadać w depresję* — to *inny* nastrój niż w tym wierszu.", ua: "*zarażać smutkiem*, *widzieć świat w ciemnych barwach*, *popadać w depresję* — це *інший* настрій, ніж у цьому вірші (зараження сумом, усе здається поганим, глибокий сум)." }
    ],
    task: {
      id: "t2-s10-czas",
      type: "single-choice",
      question: {
        pl: "Które zdanie NA PEWNO zgadza się z nastrojem *Preludium* i ramką?",
        ua: "Яке речення НАПЕВНО узгоджується з настроєм *Preludium* і рамкою?"
      },
      options: [
        { id: "a", label: { pl: "Warto: taka osoba dzieli się radością, ma dobry wpływ i zachowuje pogodę ducha.", ua: "Варто: така людина ділиться радістю, має добрий вплив і зберігає гарний настрій (pogodę ducha)." } },
        { id: "b", label: { pl: "Nie warto: osoba z wiersza zaraża smutkiem i widzi świat w ciemnych barwach.", ua: "Не варто: особа з вірша заражає сумом і бачить усе похмуро (w ciemnych barwach)." } },
        { id: "c", label: { pl: "Nastrój wiersza nie ma nic wspólnego z tym, z kim spędzamy czas.", ua: "Настрій вірша не має нічого спільного з тим, з ким проводимо час." } }
      ],
      answer: "a",
      hint: {
        pl: "Osoba wita kasztany i nazywa dzień darem. Które związki z ramki to opisują?",
        ua: "Особа вітає каштани і називає день даром. Які сполуки з рамки це описують?"
      },
      explanation: {
        pl: "Głos z wiersza jest pogodny: dobry wpływ, radość, pogoda ducha. Ciemne barwy i zarażanie smutkiem to przeciwieństwo ramki do *tego* nastroju. W zeszycie dopisz 2–3 zdania własnym zdaniem.",
        ua: "Голос із вірша погідний: добрий вплив, радість, гарний настрій. Темні барви і зараження сумом — протилежність рамки до *цього* настрою. У зошиті допиши 2–3 речення своїми словами."
      }
    }
  },
  // 11
  {
    type: "summary",
    heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
    formula: "s. 10–11  ·  lekcja 2",
    promptPlace: "before",
    prompt: {
      pl: "Do zeszytu: definicja apostrofy z ramki + cytat *Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!* Praca domowa: *Zeszyt ćwiczeń, część 1 — Apostrofa s. 5*. Podmiot liryczny — lekcja 6, nie dziś.",
      ua: "У зошит: означення апострофи з рамки + цитата *Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!* Домашня: *Зошит вправ, частина 1 — Apostrofa с. 5*. Ліричний суб’єкт — урок 6, не сьогодні."
    },
    items: [
      { pl: "Osoba mówiąca = głos w tekście (okno, świt), nie automatycznie Lechoń.", ua: "Особа, яка говорить = голос у тексті (вікно, світанок), не автоматично Лехонь." },
      { pl: "Nastrój: pogodny, radosny — dowód w strofie 2.", ua: "Настрій: погідний, радісний — доказ у строфі 2." },
      { pl: "Apostrofa = bezpośredni zwrot; tu do kasztanów i wody.", ua: "Апострофа = безпосереднє звертання; тут до каштанів і води." },
      { pl: "Tytuł *Preludium* = wstęp / zapowiedź dnia.", ua: "Назва *Preludium* = вступ / передвістя дня." }
    ],
    task: {
      id: "t2-s11-karta",
      type: "single-choice",
      question: {
        pl: "Co jest pewnym podsumowaniem *tej* lekcji?",
        ua: "Що є певним підсумком *цього* уроку?"
      },
      options: [
        { id: "a", label: { pl: "Znam treść, nastrój z dowodem, sytuację osoby mówiącej i apostrofę do kasztanów i wody.", ua: "Знаю зміст, настрій з доказом, ситуацію особи, яка говорить, і апострофу до каштанів і води." } },
        { id: "b", label: { pl: "Nazwałem już podmiot liryczny i odmieniłem rzeczownik kasztan.", ua: "Уже назвав ліричний суб’єкт і відмінив іменник kasztan." } },
        { id: "c", label: { pl: "Apostrofa to znak «’» w nazwisku Lechoń.", ua: "Апострофа — знак «’» у прізвищі Lechoń." } }
      ],
      answer: "a",
      hint: {
        pl: "Podmiot = lekcja 6. Apostrofa ≠ apostrof w pisowni.",
        ua: "Суб’єкт = урок 6. Апострофа ≠ апостроф у правописі."
      },
      explanation: {
        pl: "Lekcja 2 = wiersz + nastrój + sytuacja + apostrofa + tytuł. Ćwiczenia s. 5 — w zeszycie ćwiczeń. Podmiot liryczny — później.",
        ua: "Урок 2 = вірш + настрій + ситуація + апострофа + назва. Вправи с. 5 — у зошиті вправ. Ліричний суб’єкт — пізніше."
      }
    }
  }
] };
