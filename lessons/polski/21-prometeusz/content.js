function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_VAZA = "Styl: czarnofigurowa waza grecka na terakocie, czarny kontur, płaskie plamy, ornament meander. Zero napisów na kadrze, zero znaku wodnego, zero numerów. PNG.";
var IMG_STYLE_AKW = "Styl: akwarela podręcznikowa GWO klasa 5, miękki kontur tuszu, ciepła terakota i zieleń szałwii. Zero napisów na kadrze, zero znaku wodnego. PNG 16:9.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 45–49  ·  Wanda Markowska  ·  Prometeusz",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec, nie lista życzeń. Polski mit jest pierwszy. Włącz 🇺🇦 — pod akapitem będzie tłumaczenie. Glosy z pól i klucze są schowane. […] z podręcznika zostawiamy — nic nie dopisujemy w te luki.",
        ua: "Це перевірка наприкінці. Польський міф перший. Увімкни 🇺🇦 — під абзацом буде переклад. Глоси і ключі сховані. […] з підручника не заповнюємо."
      },
      items: [
        { pl: "opowiem treść mitu *Prometeusz*, posługując się ilustracjami ze s. 48;", ua: "розкажу зміст міфу *Prometeusz*, спираючись на ілюстрації зі с. 48;" },
        { pl: "ułożę *plan wydarzeń* w równoważnikach zdań;", ua: "складу *план подій* рівнозначниками речень;" },
        { pl: "ocenię postępowanie Tytana: strony *pozytywne* i *negatywne*;", ua: "оціню вчинок Титана: сторони *позитивні* і *негативні*;" },
        { pl: "napiszę *oskarżenie* (w imieniu bogów) albo *pochwałę* (w imieniu ludzi) z konkretnymi argumentami;", ua: "напишу *обвинувачення* (від імені богів) або *похвалу* (від імені людей) з конкретними аргументами;" },
        { pl: "wyjaśnię glosy z pól i dokończę notatkę słownikową; wiem, że puszka Pandory to *dalsza* historia (nie ten fragment).", ua: "поясню глоси з полів і допишу словникову нотатку; знаю, що скринька Пандори — *подальша* історія (не цей уривок)." }
      ],
      task: {
        id: "t21-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Opowiedzieć mit i ułożyć plan w równoważnikach (tytuły do kadrów).", ua: "Розповісти міф і скласти план рівнозначниками (назви до кадрів)." } },
          { id: "b", label: { pl: "Ocenić Prometeusza: obrona lub oskarżenie z argumentami z tekstu.", ua: "Оцінити Прометея: захист або обвинувачення з аргументами з тексту." } },
          { id: "c", label: { pl: "Tylko powtórzyć didaskalia z lekcji 20 — i nic z tego mitu.", ua: "Лише повторити дидаскалії з уроку 20 — і нічого з цього міфу." } },
          { id: "d", label: { pl: "Wyjaśnić glosy z pól (Dzeus, Tytan, Kaukaz, skowany…) i dokończyć hasło słownikowe.", ua: "Пояснити глоси з полів (Dzeus, Tytan, Kaukaz, skowany…) і дописати словникову статтю." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę „Po tej lekcji umiem”. Czy didaskalia Demeter są celem *tej* godziny?",
          ua: "Подивись на список «Після уроку вмію». Чи дидаскалії Деметри є метою *цієї* години?"
        },
        explanation: {
          pl: "Dziś: mit Markowskiej, plan z ilustracji, ocena Tytana, glosy. Didaskalia były na lekcji 20. Puszka Pandory — na końcu, jako dalsza historia, nie zamiast tego tekstu.",
          ua: "Сьогодні: міф Марковської, план з ілюстрацій, оцінка Титана, глоси. Дидаскалії були на уроці 20."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kto stanął w obronie ludzi?", ua: "Хто став на захист людей?" },
      formula: "s. 45  ·  po Demeter i Korze",
      promptPlace: "before",
      prompt: {
        pl: "Dział: *Kto stanął w obronie ludzi?* To nie sztuka Murdzek (lekcje 19–20) i nie Księga Rodzaju. To *mit* Wandy Markowskiej z książki *Mity Greków i Rzymian*. W tekście stoi *Dzeus* — pole tłumaczy: Zeus.",
        ua: "Розділ: *Kto stanął w obronie ludzi?* Це не п’єса Мурджек (уроки 19–20) і не Книга Буття. Це *міф* Ванди Марковської з книжки *Mity Greków i Rzymian*. У тексті *Dzeus* — поле: Zeus."
      },
      text: {
        pl: [
          "Autor: Wanda Markowska. Tytuł: *Prometeusz*. Źródło na końcu: fragment książki *Mity Greków i Rzymian*.",
          "Lekcja 14: inny mit o początku świata. Lekcja 15: Bóg stwarza w sześć dni. Tu *Tytan* lepi ludzi z gliny i kradnie ogień.",
          "Znak […] znaczy: podręcznik coś opuścił. My tego nie zmyślamy."
        ],
        ua: [
          "Авторка: Ванда Марковська. Назва: *Prometeusz*. Джерело в кінці: уривок книжки *Mity Greków i Rzymian*.",
          "Урок 14: інший міф про початок світу. Урок 15: Бог творить за шість днів. Тут *Титан* ліпить людей з глини і краде вогонь.",
          "Знак […] означає: підручник щось пропустив. Ми цього не вигадуємо."
        ]
      },
      task: {
        id: "t21-s02-gatunek",
        type: "single-choice",
        question: {
          pl: "Czym jest utwór z tej lekcji?",
          ua: "Чим є твір з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Mitem Wandy Markowskiej o Prometeuszu (fragment książki).", ua: "Міфом Ванди Марковської про Прометея (уривок книжки)." } },
          { id: "b", label: { pl: "Sztuką teatralną Anny Murdzek *Demeter i Kora*.", ua: "Театральною п’єсою Анни Мурджек *Demeter i Kora*." } },
          { id: "c", label: { pl: "Rozdziałem 1 Księgi Rodzaju z lekcji 15.", ua: "Розділом 1 Книги Буття з уроку 15." } }
        ],
        answer: "a",
        hint: {
          pl: "Na s. 45: WANDA MARKOWSKA, *Prometeusz*. Czy tam stoi AKT I?",
          ua: "На с. 45: WANDA MARKOWSKA, *Prometeusz*. Чи там стоїть AKT I?"
        },
        explanation: {
          pl: "Mit opowiedziany prozą. Sztuka Demeter — 19–20. Biblia — 15–16.",
          ua: "Міф, розказаний прозою. П’єса Деметри — 19–20. Біблія — 15–16."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · Dzeus, Tytan, glina", ua: "Читаємо · Dzeus, Титан, глина" },
      formula: "s. 45–46  ·  początek",
      visual: vizGh("t21-glina.png", {
        alt: {
          pl: "Prometeusz lepi człowieka z gliny, Atena tchnie życie",
          ua: "Прометей ліпить людину з глини, Афіна вдихає життя"
        },
        title: { pl: "Slajd · glina", ua: "Слайд · глина" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: brodaty Tytan Prometeusz w ochrowym chitonie klęczy i formuje z mokrej gliny małą postać człowieka. Obok stoi Atena w jasnym peplosie, dłoń uniesiona jakby tchnęła życie. Pusta ziemia po wojnie bogów, blade niebo, odległe góry. Zero liter.",
          ua: "Прометей ліпить людину з глини, Афіна поруч. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj po polsku. Pole: *Dzeus – Zeus*. *Tytan – jeden z olbrzymów, dziecko boga nieba i bogini ziemi.* Włącz 🇺🇦 — tłumaczenie pod akapitem.",
        ua: "Читай польською. Поле: *Dzeus – Zeus*. *Tytan – один з велетнів, дитина бога неба і богині землі.* Увімкни 🇺🇦 — переклад під абзацом."
      },
      text: {
        pl: [
          "Było to w czasach, gdy na niebie panował od niedawna młody bóg Dzeus, który pokonał […] swego ojca Kronosa i strącił z niebios stary ród Tytanów.",
          "Nowy władca niebios uważnie śledził wszystko, co się działo na ziemi, obawiając się stamtąd niebezpieczeństwa dla swej władzy. Na ziemi bowiem pozostał niepokonany jeden z Tytanów, mądry Prometeusz, syn Japeta.",
          "Po niedawnych strasznych walkach bogów ziemia była milcząca i wymarła. Wtedy Prometeusz postanowił ożywić pustynne obszary i stworzyć na nowo ród ludzki, który mógłby się cieszyć darami ziemi. Wziął tedy grudę gliny, zwilżył ją wodą źródlaną, ugniótł w boskich palcach i ukształtował człowieka. Na prośbę Tytana Atena tchnęła życie w martwe ciała ludzi."
        ],
        ua: [
          "Було це в часи, коли на небі панував віднедавна молодий бог Дзевс, який переміг […] свого батька Кроноса і скинув з небес старий рід Титанів.",
          "Новий володар небес уважно стежив за всім, що діялося на землі, боячись звідти небезпеки для своєї влади. На землі ж лишився непереможений один із Титанів, мудрий Прометей, син Япета.",
          "Після недавніх страшних битв богів земля була мовчазна і вимерла. Тоді Прометей постановив оживити пустельні простори і створити наново людський рід, який міг би тішитися дарами землі. Взяв отже грудку глини, змочив її джерельною водою, розім’яв у божественних пальцях і сформував людину. На прохання Титана Атена вдихнула життя в мертві тіла людей."
        ]
      },
      task: {
        id: "t21-s03-glina",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest na początku tego fragmentu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є на початку цього уривка? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Dzeus pokonał Kronosa; Prometeusz, syn Japeta, został na ziemi.", ua: "Дзевс переміг Кроноса; Прометей, син Япета, лишився на землі." } },
          { id: "b", label: { pl: "Prometeusz ulepił człowieka z gliny; Atena tchnęła życie.", ua: "Прометей зліпив людину з глини; Атена вдихнула життя." } },
          { id: "c", label: { pl: "Ludzi stworzono w sześć dni słowem «Niechaj się stanie».", ua: "Людей створено за шість днів словом «Niechaj się stanie»." } },
          { id: "d", label: { pl: "Ziemia po walkach bogów była milcząca i wymarła.", ua: "Земля після битв богів була мовчазна і вимерла." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czytaj trzy akapity. Czy tu jest Księga Rodzaju?",
          ua: "Читай три абзаци. Чи тут Книга Буття?"
        },
        explanation: {
          pl: "Mit: Dzeus, Japet, glina, Atena. Sześć dni — lekcja 15.",
          ua: "Міф: Дзевс, Япет, глина, Атена. Шість днів — урок 15."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Pierwsi ludzie · jak termity", ua: "Перші люди · як терміти" },
      formula: "s. 46  ·  glosa termit",
      visual: vizGh("t21-jaskinia.png", {
        alt: {
          pl: "Pierwsi ludzie w ciemnej jaskini, bez ognia",
          ua: "Перші люди в темній печері, без вогню"
        },
        title: { pl: "Slajd · jaskinia", ua: "Слайд · печера" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: noc. Dwoje nędznych pierwszych ludzi skulonych w wilgotnej jaskini wśród skał, bez ognia i narzędzi, zagubieni. Za wylotem jaskini puszcza i sylwetka wyjącego wilka. Nastrój nędzy jak ślepe termity. Chłodne szarości i mech. Zero liter.",
          ua: "Перші люди в печері, без вогню. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Pole: *termit – owad żyjący w krajach tropikalnych.* Szukaj, *do czego* porównano ludzi. Zostaw […].",
        ua: "Поле: *termit – комаха, що живе в тропічних країнах.* Шукай, *до чого* порівняно людей. Залиш […]."
      },
      text: {
        pl: [
          "Słabi byli jednak i nędzni ci pierwsi ludzie Prometeuszowi. Patrzyli, nie widząc, słuchali, nie słysząc; jak zjawy senne i bezradosne snuli się po młodej ziemi, bezradni wobec jej tajemnic. Nie znali narzędzi pracy, nie umieli ociosywać kamieni ani z gliny formować cegieł, ani budować chat z pni drzewnych. Gnieździli się pod ziemią, w ciemnych, wilgotnych jaskiniach wśród skał i jam, podobni ślepym termitom. Marzli od chłodu nocnego i drżeli przed dzikimi zwierzętami wyjącymi dziko w puszczy. Nie znali jeszcze łaskawości ciepłego ogniska ani sztuk i rzemiosł związanych z przetapianiem metali.",
          "Dniem i nocą przemyśliwał więc Prometeusz, jak by pomóc ludziom […]."
        ],
        ua: [
          "Слабкі були однак і нужденні ці перші люди Прометеєві. Дивилися, не бачачи, слухали, не чуючи; як сонні й безрадісні мари тинялися по молодій землі, безпорадні перед її таємницями. Не знали знарядь праці, не вміли обтісувати каміння ні з глини формувати цеглу, ні будувати хати з дерев’яних пнів. Гніздилися під землею, в темних вогких печерах серед скель і ям, подібні сліпим термітам. Мерзли від нічного холоду і тремтіли перед дикими звірами, що вили в пущі. Ще не знали ласки теплого вогнища ні мистецтв і ремесел, пов’язаних з переплавленням металів.",
          "Дня і ночі міркував отже Прометей, як би допомогти людям […]."
        ]
      },
      task: {
        id: "t21-s04-termity",
        type: "true-false",
        question: {
          pl: "Czy pierwsi ludzie w tym micie od razu mieli ognisko, chaty i narzędzia?",
          ua: "Чи перші люди в цьому міфі одразу мали вогнище, хати і знаряддя?"
        },
        answer: false,
        hint: {
          pl: "«Nie znali narzędzi… gnieździli się pod ziemią… podobni ślepym termitom.»",
          ua: "«Не знали знарядь… гніздилися під землею… подібні сліпим термітам.»"
        },
        explanation: {
          pl: "Nie. Są słabi, w jaskiniach, bez ognia i sztuk. Dlatego Tytan przemyśliwa, jak pomóc.",
          ua: "Ні. Вони слабкі, в печерах, без вогню і мистецтв. Тому Титан міркує, як допомогти."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Ołtarz · podstęp z bykiem", ua: "Вівтар · хитрість з бугаєм" },
      formula: "s. 46  ·  przymierze i oszustwo",
      visual: vizGh("t21-oltarz.png", {
        alt: {
          pl: "Ołtarz ofiarny: dwie kupy ofiary, Dzeus wybiera",
          ua: "Жертовний вівтар: дві купи жертви, Дзевс обирає"
        },
        title: { pl: "Slajd · ołtarz", ua: "Слайд · вівтар" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: kamienny ołtarz pod gołym niebem. Po lewej kupa: mięso zawinięte w skórę zwierzęcia. Po prawej: kości i wnętrzności przykryte cienką warstwą białego tłuszczu. Obok złożony byk. Prometeusz stoi przed ołtarzem. Dzeus na wyższym stopniu sięga po prawą kupę. Wokół mali ludzie. Dzień, ochra kamienia. Zero liter.",
          ua: "Вівтар, дві купи жертви, Дзевс обирає. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Dzeus chce władzy nad ludźmi. Prometeusz jako *ojciec i obrońca* używa podstępu przy ofierze. Czytaj uważnie, *którą* część wybiera Dzeus.",
        ua: "Дзевс хоче влади над людьми. Прометей як *батько і захисник* вдається до хитрості при жертві. Читай уважно, *яку* частину обирає Дзевс."
      },
      text: {
        pl: [
          "Dumny Dzeus postanowił jednak odebrać Prometeuszowi władzę nad rodem ludzkim. Zwołał tedy wszystkich ludzi na zgromadzenie, na którym miał im wskazać i obwieścić prawa i obowiązki względem nowych władców niebios. W zamian przekazał im swą łaskę i opiekę, aby zapanowało odtąd prawdziwe przymierze bogów i ludzi.",
          "W dzień zgromadzenia zjawił się przed ołtarzem ofiarnym Prometeusz. Jako ojciec i obrońca rodzaju ludzkiego obawiał się, by bogowie za swą opiekę nie nałożyli na barki człowieka zbyt wielkich ciężarów. Toteż mądry Tytan, aby temu zapobiec, postanowił użyć podstępu. Gdy wszyscy bogowie zebrali się przy ołtarzu i lud stanął dookoła, wtedy wystąpił naprzód, zabił na ofiarę wielkiego byka […]. Po jednej stronie ołtarza położył najlepsze płaty mięsa i tłuszczu i zawinął je w skórę zwierzęcia, po drugiej kości i wnętrzności kunsztownie przykrył kawałkami tłuszczu. Uczyniwszy to potajemnie, zwrócił się do Dzeusa, by wybrał ofiarę dla siebie: którą część zwierzęcia ofiarowanego wybierze, tę będą musieli ludzie odtąd składać bogom do końca świata.",
          "Dzeus, widząc po lewej stronie ołtarza tylko skórę i trochę mięsa, a po drugiej biały, smakowity tłuszcz, wybrał część leżącą z prawej strony.",
          "Jakież było jego zdumienie i oburzenie, gdy pod cienką warstwą tłuszczu ujrzał gołe kości i krwawe wnętrzności zwierzęcia. Gniew zasnuł mu oblicze.",
          "A Prometeusz cieszył się, że oszukał nienawistnych bogów, którzy […] chcieli zapanować nad jego umiłowanym dziełem – człowiekiem. […]",
          "Obrażony i gniewny, postanowił Dzeus ukarać srogo zuchwalca, który ośmielił się zakpić z niego, władcy bogów i ludzi."
        ],
        ua: [
          "Гордий Дзевс постановив однак відібрати в Прометея владу над людським родом. Скликав отже всіх людей на збори, на яких мав указати й оголосити права і обов’язки щодо нових володарів небес. Натомість передав їм свою ласку й опіку, щоб запанував відтоді справжній союз богів і людей.",
          "У день зборів з’явився перед жертовним вівтарем Прометей. Як батько і захисник людського роду боявся, щоб боги за свою опіку не наклали на плечі людини надто великих тягарів. Тому мудрий Титан, щоб цьому запобігти, постановив удатися до хитрості. Коли всі боги зібралися біля вівтаря і люд став довкола, тоді виступив уперед, забив на жертву великого бугая […]. З одного боку вівтаря поклав найкращі пласти м’яса і жиру й загорнув їх у шкуру тварини, з другого кістки й нутрощі майстерно прикрив шматками жиру. Зробивши це потайки, звернувся до Дзевса, щоб той вибрав жертву для себе: яку частину жертвованої тварини вибере, ту муситимуть люди відтоді складати богам до кінця світу.",
          "Дзевс, бачачи з лівого боку вівтаря лише шкуру і трохи м’яса, а з другого білий смачний жир, вибрав частину, що лежала з правого боку.",
          "Яке ж було його здивування і обурення, коли під тонким шаром жиру побачив голі кістки і криваві нутрощі тварини. Гнів затяг йому обличчя.",
          "А Прометей тішився, що обдурив ненависних богів, які […] хотіли запанувати над його улюбленим творінням — людиною. […]",
          "Ображений і гнівний, постановив Дзевс покарати суворо зухвальця, який наважився покепкувати з нього, володаря богів і людей."
        ]
      },
      task: {
        id: "t21-s05-oltarz",
        type: "single-choice",
        question: {
          pl: "Którą część ofiary wybrał Dzeus i co było pod tłuszczem?",
          ua: "Яку частину жертви вибрав Дзевс і що було під жиром?"
        },
        options: [
          { id: "a", label: { pl: "Prawą (smakowity tłuszcz) — pod spodem kości i wnętrzności.", ua: "Праву (смачний жир) — під ним кістки і нутрощі." } },
          { id: "b", label: { pl: "Lewą (skóra i mięso) — i był zadowolony.", ua: "Ліву (шкура і м’ясо) — і був задоволений." } },
          { id: "c", label: { pl: "Całego byka żywcem, bez podstępu.", ua: "Усього бугая живцем, без хитрості." } }
        ],
        answer: "a",
        hint: {
          pl: "«wybrał część leżącą z prawej strony» + «pod cienką warstwą tłuszczu ujrzał gołe kości».",
          ua: "«вибрав частину з правого боку» + «під тонким шаром жиру побачив голі кістки»."
        },
        explanation: {
          pl: "Podstęp: ludziom mięso w skórze, bogom kości pod tłuszczem. Dzeus bierze prawą stronę i się wścieka. Pole *srogo* = surowo, okrutnie — kara będzie sroga.",
          ua: "Хитрість: людям м’ясо в шкурі, богам кістки під жиром. Дзевс бере правий бік і лютує."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Ogień Heliosa · sztuki", ua: "Вогонь Геліоса · мистецтва" },
      formula: "s. 47  ·  głownia, strawa",
      visual: vizGh("t21-helios.png", {
        alt: {
          pl: "Prometeusz kradnie ogień z rydwanu Heliosa gałęzią oliwki",
          ua: "Прометей краде вогонь з колісниці Геліоса гілкою оливи"
        },
        title: { pl: "Slajd · rydwan Heliosa", ua: "Слайд · колісниця Геліоса" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: noc. Prometeusz przy złotym rydwanie Heliosa, wielkie ogniste koło ze szprychami. W dłoni długa sucha gałąź oliwki przytknięta do osi — iskra, drzewo się zapala. Helios niewyraźny; w tle rumaki światła. Tytan odchodzi z pochodnią. Kontrast ciemnej stajni i blasku. Zero liter.",
          ua: "Крадіж вогню з колісниці Геліоса. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Pola: *głownia – palący się kawał drewna*; *strawa – pożywienie.* Dzeus odmawia daru ognia. Prometeusz kradnie go z rydwanu Heliosa. Zostaw […].",
        ua: "Поля: *głownia – палаючий шматок дерева*; *strawa – пожива.* Дзевс відмовляє в дарі вогню. Прометей краде його з колісниці Геліоса. Залиш […]."
      },
      text: {
        pl: [
          "W tym celu, pragnąc najciężej dotknąć Tytana – a znał jego miłość do ludzi – postanowił odmówić im daru ognia, ostatniej i największej z łask, jaką chciał im Prometeusz ofiarować.",
          "Widząc to, Prometeusz postanowił zdobyć ogień dla ludzi wbrew woli władcy Olimpu. Pewnej nocy ściął długą gałąź oliwki i zakradł się potajemnie do rydwanu Heliosa, boga słońca. […] Prometeusz przytknął gałązkę oliwną do osi wozu; suche drzewo zajęło się wnet z wesołym trzaskiem i Tytan po cichu, tak jak przyszedł, opuścił stajnię Heliosa.",
          "Z płonącą pochodnią w ręku zstąpił na ziemię i zapalił pierwsze na niej ognisko.",
          "Zaznał odtąd człowiek rozkoszy ciepła przy płonących głowniach i mógł gotować sobie gorącą strawę, a nie żywić się surowym mięsem i korzonkami leśnymi. Opuścił ponure pieczary w głębi ziemi i zbudował sobie przestronne chaty na słońcu i powietrzu.",
          "Dobry Tytan, przyjaciel ludzi, nauczył ich sztuk wszelakich, odkrył przed nimi wiele tajemnic ziemi i nieba, ujarzmił dzikie zwierzęta, […] uczył ludzi uprawy roli, aby dała im złote ziarna zbóż rozmaitych. Wskazał na nieznane im dotąd, ukryte w głębi ziemi złoża miedzi, srebra i złota."
        ],
        ua: [
          "З цією метою, прагнучи найтяжче вразити Титана — а знав його любов до людей — постановив відмовити їм у дарі вогню, останньої і найбільшої з ласк, яку хотів їм Прометей дарувати.",
          "Бачачи це, Прометей постановив здобути вогонь для людей всупереч волі володаря Олімпу. Однієї ночі зрізав довгу гілку оливи і потайки прокрався до колісниці Геліоса, бога сонця. […] Прометей притулив оливкову гілку до осі воза; сухе дерево зайнялося відразу з веселим тріском, і Титан тихо, так як прийшов, покинув стайню Геліоса.",
          "З палаючим смолоскипом у руці зійшов на землю і запалив на ній перше вогнище.",
          "Відтоді людина зазнала розкоші тепла біля палаючих головешок і могла варити собі гарячу страву, а не живитися сирим м’ясом і лісовим корінням. Покинула похмурі печери в глибині землі і збудувала собі просторі хати на сонці й повітрі.",
          "Добрий Титан, приятель людей, навчив їх усяких мистецтв, відкрив перед ними багато таємниць землі і неба, приборкав диких звірів, […] учив людей обробітку ріллі, щоб дала їм золоте зерно різних злаків. Указав на незнані їм доти, сховані в глибині землі поклади міді, срібла і золота."
        ]
      },
      task: {
        id: "t21-s06-ogien",
        type: "multiple-choice",
        question: {
          pl: "Skąd Prometeusz wziął ogień i co dzięki niemu zyskali ludzie? Zaznacz wszystkie pewne.",
          ua: "Звідки Прометей узяв вогонь і що завдяки йому здобули люди? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Z rydwanu Heliosa: gałąź oliwki przy osi wozu.", ua: "З колісниці Геліоса: гілка оливи біля осі воза." } },
          { id: "b", label: { pl: "Ciepło przy głowniach, gorąca strawa, chaty, sztuki, uprawa, metale.", ua: "Тепло біля головешок, гаряча страва, хати, мистецтва, рілля, метали." } },
          { id: "c", label: { pl: "Ogień dała im Kora z lekcji 19, zrywając narcyz.", ua: "Вогонь дала їм Кора з уроку 19, зірвавши нарцис." } },
          { id: "d", label: { pl: "Dzeus sam ofiarował ogień jako nagrodę za podstęp.", ua: "Дзевс сам дарував вогонь як нагороду за хитрість." } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Dzeus *odmówił* daru ognia. Skąd Tytan go ukradł? Co znaczy głownia i strawa?",
          ua: "Дзевс *відмовив* у дарі вогню. Звідки Титан його вкрав? Що значать głownia і strawa?"
        },
        explanation: {
          pl: "Kradzież z rydwanu Heliosa. Ludzie: ciepło, strawa, chaty, nauki. Kora i nagroda Dzeusa — nie z tego akapitu.",
          ua: "Крадіжка з колісниці Геліоса. Люди: тепло, страва, хати, науки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kaukaz · orzeł", ua: "Кавказ · орел" },
      formula: "s. 47  ·  skowany",
      visual: vizGh("t21-kaukaz.png", {
        alt: {
          pl: "Prometeusz przykuty do skały Kaukazu, orzeł",
          ua: "Прометей прикутий до скелі Кавказу, орел"
        },
        title: { pl: "Slajd · Kaukaz", ua: "Слайд · Кавказ" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: ostra skała Kaukazu nad przepaścią. Prometeusz skowany kajdanami do nagłej ściany, nie może zgiąć kolan. Wielki ciemny orzeł leci ku skale. Burzowe niebo, deszcz. Szkolnie: bez krwi i ran. Zero liter.",
          ua: "Прикутий до Кавказу, орел. Без напису, без крові."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Pola: *Kaukaz – łańcuch górski między Morzem Czarnym a Morzem Kaspijskim*; *skowany – tu: przykuty do skały.* Hefajstos, Kratos i Bia (Moc i Siła). Zostaw […].",
        ua: "Поля: *Kaukaz – гірський ланцюг між Чорним і Каспійським морем*; *skowany – тут: прикутий до скелі.* Гефест, Кратос і Біа (Міць і Сила). Залиш […]."
      },
      text: {
        pl: [
          "Zadrżał władca Olimpu z gniewu, widząc święty ogień płonący na ziemi. […] Wezwał […] Hefajstosa i rozkazał mu pochwycić i uwięzić Prometeusza. […] Na skinienie Hefajstosa Kratos i Bia (co znaczy Moc i Siła) […] przykuli go kajdanami do skalnej ściany Kaukazu. I zawisł Prometeusz nad przepaścią na nagiej i poszarpaniej skale, gdzie nie mógł nawet zgiąć kolan ani oczu zmrużyć, by znaleźć we śnie ukojenie. Daremnie błagał go jednak Hefajstos, wzruszony okrutnym losem Tytana, aby ukorzył się przed wolą ojca bogów i uznał swój błąd, kładąc tym kres swoim mękom. Mimo strasznych cierpień trwał Prometeusz niezłomny na skale i nie chciał się wyrzec miłości dla rodu ludzkiego ani prosić Olimpu o litość. Dzeus, widząc dumę nieugiętego skazańca, wysłał orła, aby codziennie szarpał wątrobę Prometeusza, która cudownym sposobem miała ciągle na nowo odrastać.",
          "Straszliwe pragnienie dręczyło go dniem i nocą i tylko ulewny, litosny deszcz zwilżał czasami jego spiekłe wargi.",
          "I miało tak trwać wieki. Męka Prometeusza mogła się skończyć tylko wtedy, gdyby ktoś z nieśmiertelnych dobrowolnie zgodził się pójść do Hadesu w zamian za skowanego Tytana."
        ],
        ua: [
          "Затремтів володар Олімпу від гніву, бачачи святий вогонь, що палав на землі. […] Покликав […] Гефеста і наказав йому схопити й ув’язнити Прометея. […] На знак Гефеста Кратос і Біа (що означає Міць і Сила) […] прикули його кайданами до скелястої стіни Кавказу. І повис Прометей над прірвою на голій і пошматованій скелі, де не міг навіть зігнути колін ні очей стулити, щоб знайти в сні полегшення. Даремно благав його однак Гефест, зворушений жорстокою долею Титана, щоб скорився волі батька богів і визнав свою провину, поклавши тим край своїм мукам. Попри страшні страждання Прометей тримався незламний на скелі і не хотів зрікатися любові до людського роду ні просити Олімп про милість. Дзевс, бачачи гордість непохитного засудженого, вислав орла, щоб щодня шматував печінку Прометея, яка чудесним способом мала знову й знову відростати.",
          "Страшна спрага мучила його днями і ночами, і лише злива, милосердний дощ іноді змочував його спечені губи.",
          "І мало так тривати віки. Мука Прометея могла скінчитися лише тоді, якби хтось із безсмертних добровільно погодився піти до Аїда замість прикутого Титана."
        ]
      },
      task: {
        id: "t21-s07-kaukaz",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO należy do kary Prometeusza w tym fragmencie? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО належить до кари Прометея в цьому уривку? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kajdany na ścianie Kaukazu; nie może zgiąć kolan ani zmrużyć oczu.", ua: "Кайдани на стіні Кавказу; не може зігнути колін ні стулити очей." } },
          { id: "b", label: { pl: "Orzeł codziennie szarpie wątrobę, która odrasta.", ua: "Орел щодня шматує печінку, яка відростає." } },
          { id: "c", label: { pl: "Prometeusz od razu przeprasza Olimp i schodzi ze skały.", ua: "Прометей одразу просить вибачення в Олімпу і сходить зі скелі." } },
          { id: "d", label: { pl: "Uwolnienie możliwe, jeśli nieśmiertelny dobrowolnie pójdzie do Hadesu za skowanego Tytana.", ua: "Звільнення можливе, якщо безсмертний добровільно піде до Аїда за прикутого Титана." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy Tytan ukorzył się, kiedy Hefajstos błagał? Co znaczy *skowany*?",
          ua: "Чи Титан скорився, коли Гефест благав? Що значить *skowany*?"
        },
        explanation: {
          pl: "Nieugięty: nie prosi o litość. Kara: Kaukaz + orzeł. Warunek wolności: ktoś nieśmiertelny idzie do Hadesu. *Skowany* = przykuty do skały.",
          ua: "Незламний: не просить милості. Кара: Кавказ + орел. Умова свободи: хтось безсмертний іде до Аїда."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Herakles i Chiron", ua: "Геракл і Хірон" },
      formula: "s. 48  ·  Pola Elizejskie",
      visual: vizGh("t21-herakles.png", {
        alt: {
          pl: "Herakles strąca orła, Chiron schodzi ku Polom Elizejskim",
          ua: "Геракл збиває орла, Хірон сходить до Єлисейських полів"
        },
        title: { pl: "Slajd · Herakles", ua: "Слайд · Геракл" },
        prompt: {
          pl: IMG_STYLE_AKW + " IMAGE PROMPT: nadmorska ścieżka. Herakles z łukiem wypuszcza strzałę; ciemny orzeł spada. W tle Prometeusz na skale, kajdany pękają. Z prawej stary centaur Chiron schodzi ku jaśniejszej łące (Pola Elizejskie), nie horror Hadesu. Nadzieja, ciepłe światło. Zero liter.",
          ua: "Геракл, орел, Хірон і Поля Елізейські. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Pola: *Herakles – heros, zasłynął z wykonania niezwykle trudnych i niebezpiecznych prac*; *Pola Elizejskie – miejsce pobytu szlachetnych dusz w Hadesie.* Zostaw […].",
        ua: "Поля: *Herakles – герой, уславився виконанням надзвичайно важких і небезпечних праць*; *Pola Elizejskie – місце перебування шляхетних душ в Аїді.* Залиш […]."
      },
      text: {
        pl: [
          "Pewnego razu szedł Herakles drogą nadmorską na jedną ze swych licznych wypraw. Nagle usłyszał jęk: rozejrzał się naokół i dostrzegł z dala olbrzymią postać Prometeusza rozpiętą na skale i ponurego orła rwącego mu wnętrzności. Zdjęty grozą bohater napiął łuk i wypuścił strzałę, która ugodziła śmiertelnie krwiożerczego ptaka. Wtedy Herakles podszedł do skały Tytana.",
          "– Pozdrowienie tobie, o wielki! – rzekł. – […] Nadszedł kres twoich cierpień. […] Przynoszę ci wolność.",
          "To mówiąc, […] rozbił okowy pętające Tytana i uwolnił go z więzów.",
          "Sędziwy Chiron centaur zaś, który był nieśmiertelny i cierpiał nieznośne męki z powodu nieuleczalnej rany, jaką mu przypadkowo zadał Herakles, zgodził się pójść dobrowolnie do Hadesu na błogosławione Pola Elizejskie; tak więc wypełniła się wola Dzeusa.",
          "Powróciwszy na Olimp, nie zapomniał Tytan o rodzie ludzkim żyjącym na ziemi, lecz nadal pozostał jego najlepszym opiekunem i obrońcą.",
          "Fragment książki *Mity Greków i Rzymian*."
        ],
        ua: [
          "Одного разу йшов Геракл надморською дорогою на одну зі своїх численних виправ. Раптом почув стогін: озирнувся навколо і здалека побачив велетенську постать Прометея, розіп’яту на скелі, і похмурого орла, що рвав йому нутрощі. Охоплений жахом герой натягнув лук і випустив стрілу, яка смертельно вразила кровожерного птаха. Тоді Геракл підійшов до скелі Титана.",
          "— Вітання тобі, о великий! — сказав. — […] Настав край твоїм стражданням. […] Приношу тобі свободу.",
          "Кажучи це, […] розбив кайдани, що сковували Титана, і звільнив його з пут.",
          "Старий кентавр Хірон, який був безсмертний і страждав нестерпні муки через невиліковну рану, якої йому випадково завдав Геракл, погодився добровільно піти до Аїда на благословенні Єлисейські поля; так отже сповнилася воля Дзевса.",
          "Повернувшись на Олімп, Титан не забув про людський рід, що живе на землі, а й далі лишився його найкращим опікуном і захисником.",
          "Уривок книжки *Mity Greków i Rzymian*."
        ]
      },
      task: {
        id: "t21-s08-herakles",
        type: "single-choice",
        question: {
          pl: "Jak spełnia się warunek wolności Prometeusza?",
          ua: "Як виконується умова свободи Прометея?"
        },
        options: [
          { id: "a", label: { pl: "Herakles zabija orła i rozbija okowy; nieśmiertelny Chiron idzie do Hadesu na Pola Elizejskie.", ua: "Геракл убиває орла і розбиває кайдани; безсмертний Хірон іде до Аїда на Єлисейські поля." } },
          { id: "b", label: { pl: "Dzeus sam zdejmuje kajdany, bo mu żal.", ua: "Дзевс сам знімає кайдани, бо йому шкода." } },
          { id: "c", label: { pl: "Kora zrywa narcyz i Tytan schodzi ze skały.", ua: "Кора зриває нарцис, і Титан сходить зі скелі." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa ruchy: strzała Heraklesa + dobrowolne zejście Chirona (wola Dzeusa).",
          ua: "Два рухи: стріла Геракла + добровільний відхід Хірона (воля Дзевса)."
        },
        explanation: {
          pl: "Herakles uwalnia ciało; Chiron spełnia warunek Dzeusa. Tytan wraca na Olimp i dalej broni ludzi.",
          ua: "Геракл звільняє тіло; Хірон виконує умову Дзевса. Титан вертається на Олімп і далі боронить людей."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól · z przykładem z tekstu", ua: "Слова з полів · з прикладом з тексту" },
      promptPlace: "before",
      prompt: {
        pl: "Dziesięć glos z pomarańczowych pól s. 45–48. Znaczenie *w tym tekście* + krótki cytat. Nie myl z glosami Demeter (Eleusis) ani Biblii (niewiasta).",
        ua: "Десять глос з помаранчевих полів с. 45–48. Значення *в цьому тексті* + короткий цитат. Не плутай з глосами Деметри (Eleusis) ні Біблії (niewiasta)."
      },
      rows: [
        { pl: "Dzeus — Zeus. Przykład: «młody bóg Dzeus».", ua: "Dzeus — Зевс. Приклад: «młody bóg Dzeus»." },
        { pl: "Tytan — jeden z olbrzymów, dziecko boga nieba i bogini ziemi. Przykład: «mądry Prometeusz», «ród Tytanów».", ua: "Tytan — один з велетнів, дитина бога неба і богині землі." },
        { pl: "termit — owad tropikalny. Przykład: ludzie «podobni ślepym termitom».", ua: "termit — тропічна комаха. Люди «podobni ślepym termitom»." },
        { pl: "srogo — surowo, okrutnie. Przykład: «ukarać srogo zuchwalca».", ua: "srogo — суворо, жорстоко. «ukarać srogo zuchwalca»." },
        { pl: "głownia — palący się kawał drewna. Przykład: «przy płonących głowniach».", ua: "głownia — палаючий шматок дерева. «przy płonących głowniach»." },
        { pl: "strawa — pożywienie. Przykład: «gorącą strawę».", ua: "strawa — пожива. «gorącą strawę»." },
        { pl: "Kaukaz — góry między Morzem Czarnym a Kaspijskim. Przykład: «ściany Kaukazu».", ua: "Kaukaz — гори між Чорним і Каспійським морем." },
        { pl: "skowany — tu: przykuty do skały. Przykład: «skowanego Tytana».", ua: "skowany — тут: прикутий до скелі. «skowanego Tytana»." },
        { pl: "Herakles — heros trudnych i niebezpiecznych prac. Przykład: strzała, która ugodziła orła.", ua: "Herakles — герой важких і небезпечних праць." },
        { pl: "Pola Elizejskie — miejsce szlachetnych dusz w Hadesie. Przykład: Chiron idzie tam dobrowolnie.", ua: "Pola Elizejskie — місце шляхетних душ в Аїді." }
      ],
      task: {
        id: "t21-s09-glosy",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna *w tym tekście*?",
          ua: "Яка пара правильна *в цьому тексті*?"
        },
        options: [
          { id: "a", label: { pl: "skowany = przykuty do skały; głownia = palący się kawał drewna; Dzeus = Zeus.", ua: "skowany = прикутий до скелі; głownia = палаюче дерево; Dzeus = Zeus." } },
          { id: "b", label: { pl: "skowany = zawilec; głownia = Eleusis; Dzeus = Cerber.", ua: "skowany = zawilec; głownia = Eleusis; Dzeus = Цербер." } },
          { id: "c", label: { pl: "Tytan = niewiasta z Księgi Rodzaju.", ua: "Tytan = невіста з Книги Буття." } }
        ],
        answer: "a",
        hint: {
          pl: "Czytaj pomarańczowe pola s. 45–48. Czy tam jest zawilec?",
          ua: "Читай помаранчеві поля с. 45–48. Чи там zawilec?"
        },
        explanation: {
          pl: "Pola z tej lekcji: Dzeus, Tytan, termit, srogo, głownia, strawa, Kaukaz, skowany, Herakles, Pola Elizejskie. Zawilec — Twardowski. Eleusis — Demeter. Niewiasta — Biblia.",
          ua: "Поля цього уроку: Dzeus, Tytan, termit, srogo, głownia, strawa, Kaukaz, skowany, Herakles, Pola Elizejskie."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · tytuły ilustracji = plan", ua: "Завд. 1 · назви ілюстрацій = план" },
      formula: "s. 48  ·  równoważniki zdań",
      visual: vizGh("t21-komiks.png", {
        alt: {
          pl: "Dwanaście kadrów mitu o Prometeuszu w stylu czarnofigurowej wazy",
          ua: "Дванадцять кадрів міфу про Прометея в стилі чорнофігурної вази"
        },
        title: { pl: "Slajd · plan mitu w kadrach", ua: "Слайд · план міфу в кадрах" },
        prompt: {
          pl: IMG_STYLE_VAZA + " Siatka 3 rzędy × 4 kolumny jak s. 48 (od lewej do prawej, z góry). 1 Tytan lepi człowieka z gliny. 2 dwoje ludzi w jaskini. 3 ludzie bezradni pod drzewem. 4 ołtarz i byk. 5 Dzeus przy ołtarzu, dwie kupy ofiary. 6 Prometeusz z gałęzią przy kole rydwanu Heliosa. 7 ludzie przy kotle / ognisku. 8 Tytan uczy dwoje ludzi. 9 Prometeusz przykuty, orzeł. 10 orzeł szarpie bok. 11 Herakles z łukiem, orzeł, skała. 12 centaur Chiron. Przytnij znak wodny. PNG 4:3.",
          ua: "Сітка 3×4 зі с. 48: глина, печера, вівтар, вогонь Геліоса, Кавказ, Геракл, Хірон. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Nadajcie tytuły ilustracjom tak, by powstał plan zdarzeń mitu. Program: równoważniki zdań (bez pełnego orzeczenia, jak nagłówki). Czytaj kadry jak tekst: od lewej, z góry. Najpierw zeszyt — potem klucz.",
        ua: "Дайте назви ілюстраціям так, щоб постав план подій міфу. Програма: рівнозначники речень (як заголовки). Кадри: зліва, згори. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie 12 linijek (1–12). Każda = krótki tytuł z *tego* mitu, nie z Demeter i nie z Biblii.",
            ua: "У зошиті 12 рядків (1–12). Кожен = коротка назва з *цього* міфу."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  równoważniki (nie jedyne możliwe słowa)",
          text: {
            pl: [
              "1. Ulepienie człowieka z gliny / tchnienie życia. 2. Nędzne życie ludzi w jaskiniach. 3. Bezradność ludzi na ziemi (bez ognia). 4. Ołtarz i ofiara z byka. 5. Wybór Dzeusa / podstęp Tytana. 6. Kradzież ognia z rydwanu Heliosa.",
              "7. Pierwsze ognisko i gorąca strawa. 8. Nauka sztuk, uprawy, metali. 9. Przykucie do Kaukazu. 10. Orzeł szarpiący wątrobę. 11. Strzała Heraklesa. 12. Chiron na Pola Elizejskie / wolność Tytana."
            ],
            ua: [
              "1. Ліплення людини з глини. 2. Нужденне життя в печерах. 3. Безпорадність без вогню. 4. Вівтар і жертва бугая. 5. Вибір Дзевса / хитрість. 6. Крадіжка вогню з колісниці Геліоса.",
              "7. Перше вогнище і гаряча страва. 8. Наука мистецтв. 9. Приковування до Кавказу. 10. Орел і печінка. 11. Стріла Геракла. 12. Хірон / свобода Титана."
            ]
          }
        }
      ],
      task: {
        id: "t21-s10-plan",
        type: "multiple-choice",
        question: {
          pl: "Które tytuły NA PEWNO pasują do kadrów *tego* mitu? Zaznacz wszystkie pewne.",
          ua: "Які назви НАПЕВНО пасують до кадрів *цього* міфу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kradzież ognia z rydwanu Heliosa.", ua: "Крадіжка вогню з колісниці Геліоса." } },
          { id: "b", label: { pl: "Przykucie do Kaukazu / orzeł i wątroba.", ua: "Приковування до Кавказу / орел і печінка." } },
          { id: "c", label: { pl: "Zerwanie narcyza przez Korę.", ua: "Зірвання нарциса Корою." } },
          { id: "d", label: { pl: "Strzała Heraklesa i odejście Chirona.", ua: "Стріла Геракла і відхід Хірона." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Kadry są do *tego* tekstu. Czy Kora jest w Markowskiej *Prometeuszu*?",
          ua: "Кадри до *цього* тексту. Чи Кора є в Марковської *Prometeusz*?"
        },
        explanation: {
          pl: "Plan z tego mitu: glina, jaskinie, ołtarz, ogień, Kaukaz, Herakles. Narcyz — lekcja 19.",
          ua: "План цього міфу: глина, печери, вівтар, вогонь, Кавказ, Геракл. Нарцис — урок 19."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · notatka słownikowa", ua: "Завд. 2 · словникова нотатка" },
      formula: "s. 49  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie przeczytanego tekstu dokończ notatkę, która mogłaby się znaleźć w słowniku postaci mitologicznych. W podręczniku: *Prometeusz – gr. przewidujący, w mitologii greckiej tytan, syn …?*",
        ua: "На основі прочитаного тексту допиши нотатку, яка могла б бути в словнику міфологічних постатей. У підручнику: *Prometeusz – gr. przewidujący, w mitologii greckiej tytan, syn …?*"
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szukaj w pierwszym akapicie: «mądry Prometeusz, syn …». Potem jedno zdanie: za co go pamiętamy (ogień, ludzie, kara).",
            ua: "Шукай у першому абзаці: «mądry Prometeusz, syn …». Потім одне речення: за що його пам’ятаємо."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z tekstu + polecenie",
          text: {
            pl: [
              "Prometeusz – gr. przewidujący; w mitologii greckiej tytan, syn *Japeta*.",
              "Dopowiedzenie (przykład): stwórca i obrońca ludzi; dał im ogień wbrew Dzeusowi; skowany na Kaukazie, uwolniony przez Heraklesa (za Chirona)."
            ],
            ua: [
              "Прометей — гр. передбачливий; у грецькій міфології титан, син *Япета*.",
              "Доповнення: творець і захисник людей; дав вогонь всупереч Дзевсові; прикутий на Кавказі, звільнений Гераклом (за Хірона)."
            ]
          }
        }
      ],
      task: {
        id: "t21-s11-slownik",
        type: "single-choice",
        question: {
          pl: "Jak dokończyć: «tytan, syn …» według *tego* tekstu?",
          ua: "Як дописати: «титан, син …» за *цим* текстом?"
        },
        options: [
          { id: "a", label: { pl: "syn Japeta", ua: "син Япета" } },
          { id: "b", label: { pl: "syn Kronosa", ua: "син Кроноса" } },
          { id: "c", label: { pl: "syn Heliosa", ua: "син Геліоса" } }
        ],
        answer: "a",
        hint: {
          pl: "Zdanie: «niepokonany jeden z Tytanów, mądry Prometeusz, syn …»",
          ua: "Речення: «непереможений один із Титанів, мудрий Прометей, син …»"
        },
        explanation: {
          pl: "Syn Japeta. Kronos to ojciec Dzeusa. Helios = bóg słońca, skąd ukradziono ogień.",
          ua: "Син Япета. Кронос — батько Дзевса. Геліос — бог сонця."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3a · w oczach bogów i ludzi", ua: "Завд. 3а · в очах богів і людей" },
      formula: "s. 49  ·  schemat",
      visual: vizGh("t21-ogien.png", {
        alt: {
          pl: "Prometeusz z pochodnią, czarnofigurowy profil",
          ua: "Прометей зі смолоскипом, чорнофігурний профіль"
        },
        title: { pl: "Slajd · Tytan z ogniem", ua: "Слайд · Титан з вогнем" },
        prompt: {
          pl: IMG_STYLE_VAZA + " Kadr ze s. 49 (środek schematu): profil Prometeusza z promienistą opaską, w ręku pochodnia z ogniem, tło terakota / zieleń. Zero napisów (pytania schematu są w lekcji, nie na obrazie). PNG kwadrat.",
          ua: "Кадр зі с. 49: Прометей зі смолоскипом. Без напису."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Napisz w imieniu bogów wypowiedź oskarżającą Prometeusza lub w imieniu ludzi – słowa pochwalne. Najpierw 3a: uzupełnij w zeszycie schemat. Dwie kolumny jak w podręczniku.",
        ua: "Напиши від імені богів обвинувачення Прометея або від імені людей — похвалу. Спочатку 3а: заповни в зошиті схему. Дві колонки як у підручнику."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Lewa: *W oczach bogów* — przewinienia wobec Dzeusa? Jaki jest? Tytan to…? Prawa: *W oczach ludzi* — jak się przysłużył? Jaki jest? Tytan to…?",
            ua: "Ліва: *В очах богів*. Права: *В очах людей*. Три pytania w każdej kolumnie."
          }
        },
        {
          formula: "KLUCZ EduMost  ·  z tekstu (nie jedyne słowa)",
          text: {
            pl: [
              "W oczach bogów. Przewinienia: podstęp przy ofierze (kości zamiast mięsa); kradzież ognia; kpina z władcy. Jaki jest: zuchwały, nielojalny, oszust. Tytan to wróg Olimpu / buntownik.",
              "W oczach ludzi. Przysłużył się: stworzył ich, dał ogień, strawę, chaty, sztuki, uprawę, metale; nie wyrzekł się ich na skale. Jaki jest: dobry, przyjaciel, ojciec i obrońca. Tytan to dobroczyńca / obrońca rodzaju ludzkiego."
            ],
            ua: [
              "В очах богів. Провини: хитрість при жертві; крадіжка вогню; кпини з володаря. Який: зухвалий, нелояльний. Титан — ворог Олімпу.",
              "В очах людей. Заслуга: створив їх, дав вогонь, страву, хати, мистецтва. Який: добрий, захисник. Титан — доброчинець."
            ]
          }
        }
      ],
      task: {
        id: "t21-s12-schemat",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO wynika z tekstu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО випливає з тексту? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Dla bogów: podstęp i kradzież ognia to przewinienia.", ua: "Для богів: хитрість і крадіжка вогню — провини." } },
          { id: "b", label: { pl: "Dla ludzi: ogień, strawa, nauki to przysługi.", ua: "Для людей: вогонь, страва, науки — заслуги." } },
          { id: "c", label: { pl: "Dla ludzi Prometeusz jest tylko wrogiem, bo sprowadził orła.", ua: "Для людей Прометей лише ворог, бо навів орла." } },
          { id: "d", label: { pl: "Ta sama postać może być zuchwalcem i obrońcą — zależy, czyje oczy.", ua: "Та сама постать може бути зухвальцем і захисником — залежить, чиї очі." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Schemat ma DWIE kolumny. Czy orła wysłał Tytan, czy Dzeus?",
          ua: "Схема має ДВІ колонки. Чи орла вислав Титан, чи Дзевс?"
        },
        explanation: {
          pl: "Orła wysłał Dzeus. Ludzie zawdzięczają Tytanowi dar i nauki. Bogowie widzą bunt. Program: wskaż obie strony.",
          ua: "Орла вислав Дзевс. Люди завдячують Титанові дар і науки. Боги бачать бунт."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3b · oskarżenie albo pochwała", ua: "Завд. 3б · обвинувачення або похвала" },
      formula: "s. 49  ·  słownictwo + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Skorzystaj z podanego słownictwa. Napisz 6–10 zdań: ALBO oskarżenie w imieniu bogów, ALBO pochwała w imieniu ludzi. Program: wejdź w rolę, podaj *konkretne* argumenty z mitu.",
        ua: "Скористайся поданим словництвом. Напиши 6–10 речень: АБО обвинувачення від імені богів, АБО похвалу від імені людей. Конкретні аргументи з міфу."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Słownictwo z ramki: zasłużył się / zasłużył na; wykazał się; dowiódł; dowodem jego winy/wielkości jest; nie ma takiego drugiego, który; posłuchajcie; wiedzcie, że; zwróćcie uwagę na to, że; przypomnijcie sobie, jak; zastanówcie się; weźcie pod uwagę to, że; kto jeszcze ma wątpliwości, niech; nie zapomnijcie; rozważcie, czy; czy ktokolwiek inny mógłby; czy jest ktoś podobny do niego; czy jest ktoś, kto jak on; czy tytan zasłużył na karę/pochwałę; jakie jeszcze przedstawić dowody; co jeszcze można powiedzieć; jakich słów mamy użyć, aby…",
            ua: "Словництво з рамки підручника — вплети 4–6 zwrotów do swojej wypowiedzi."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna dobra mowa",
          text: {
            pl: [
              "Oskarżenie (bogowie): Posłuchajcie! Dowodem jego winy jest podstęp przy ołtarzu i kradzież ognia z rydwanu Heliosa. Zwróćcie uwagę na to, że ośmielił się zakpić z Dzeusa. Tytan zasłużył na karę srogą.",
              "Pochwała (ludzie): Wiedzcie, że nie ma takiego drugiego, który by nas ulepił z gliny, dał głownie i gorącą strawę. Przypomnijcie sobie, jak uczył uprawy i metali. Dowodem jego wielkości jest, że na Kaukazie nie wyrzekł się rodu ludzkiego."
            ],
            ua: [
              "Обвинувачення: хитрість при вівтарі, крадіжка вогню, кпини з Дзевса — кара.",
              "Похвала: глина, головешки, страва, науки; на Кавказі не зрікся людей."
            ]
          }
        }
      ],
      task: {
        id: "t21-s13-mowa",
        type: "true-false",
        question: {
          pl: "Czy wypowiedź może być tylko o zerwaniu narcyza i didaskaliach — bez ognia, ołtarza i Kaukazu?",
          ua: "Чи висловлювання може бути лише про зривання нарциса і дидаскалії — без вогню, вівтаря і Кавказу?"
        },
        answer: false,
        hint: {
          pl: "Polecenie: w imieniu bogów albo ludzi *tego* mitu. Argumenty mają być konkretne.",
          ua: "Завдання: від імені богів або людей *цього* міфу. Аргументи мають бути конкретні."
        },
        explanation: {
          pl: "Nie. To oskarżenie albo pochwała Prometeusza z *tego* tekstu. Narcyz i didaskalia — Demeter, lekcje 19–20.",
          ua: "Ні. Це обвинувачення або похвала Прометея з *цього* тексту."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Ocena i dalsza historia", ua: "Оцінка і подальша історія" },
      formula: "program  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Program: oceń postępowanie bohatera (plusy i minusy). Potem *dalsza* historia: mit o puszce Pandory. W *tym* fragmencie Markowskiej puszki nie ma — nie dopisuj jej do cytatów. To osobne zdanie po planie.",
        ua: "Програма: оціни вчинок героя (плюси і мінуси). Потім *подальша* історія: міф про скриньку Пандори. У *цьому* уривку Марковської скриньки немає."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie dwie linijki: + (dla ludzi / odwaga) i − (podstęp, gniew bogów, cierpienie). Potem 3–4 zdania: co według mitu stało się *po* ogniu, gdy Dzeus zesłał na ziemię Pandorę.",
            ua: "У зошиті два рядки: + і −. Потім 3–4 речення: що за міфом сталося *після* вогню, коли Дзевс зіслав Пандору."
          }
        },
        {
          formula: "KLUCZ  ·  ocena z tekstu + dalsza historia (nie z tego fragmentu)",
          text: {
            pl: [
              "Plusy: miłość do ludzi, ogień, nauki, niezłomność na skale. Minusy: oszustwo przy ofierze, kradzież, sprowadzenie gniewu Dzeusa na ród ludzki.",
              "Puszka / pithos Pandory (program, nie s. 45–48): Dzeus w zemście zsyła na ziemię kobietę z naczyniem; gdy je otwarto, na świat wyszły nieszczęścia; na dnie została nadzieja. Tego opisu nie ma w dzisiejszym cytacie — mówisz go jako *ciąg dalszy* mitu, nie jako zdanie Markowskiej."
            ],
            ua: [
              "Плюси: любов до людей, вогонь, науки, незламність. Мінуси: обман при жертві, крадіжка, гнів Дзевса.",
              "Скринька Пандори (програма, не с. 45–48): помста Дзевса; з посудини вийшли нещастя; на дні надія. Цього немає в сьогоднішній цитаті."
            ]
          }
        }
      ],
      task: {
        id: "t21-s14-pandora",
        type: "true-false",
        question: {
          pl: "Czy puszka Pandory jest opisana w przeczytanym dziś fragmencie Markowskiej (s. 45–48)?",
          ua: "Чи скринька Пандори описана в прочитаному сьогодні уривку Марковської (с. 45–48)?"
        },
        answer: false,
        hint: {
          pl: "Przejrzyj tekst do Chirona. Czy jest słowo Pandora?",
          ua: "Переглянь текст до Хірона. Чи є слово Pandora?"
        },
        explanation: {
          pl: "Nie. Fragment kończy się wolnością Tytana i opieką nad ludźmi. Pandora to dalsza historia z programu — opowiadasz ją osobno, bez wstawiania w […].",
          ua: "Ні. Уривок кінчається свободою Титана. Пандора — подальша історія з програми."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu. Jeśli tego nie umiesz — wróć do listy z pierwszego ekranu.",
        ua: "Це забираєш у зошит. Якщо цього не вмієш — вернися до списку з першого екрана."
      },
      items: [
        { pl: "Wanda Markowska, *Prometeusz* (Mity Greków i Rzymian): Tytan, syn Japeta, lepi ludzi, oszukuje Dzeusa przy ofierze, kradnie ogień, cierpi na Kaukazie, uwalnia go Herakles (Chiron → Pola Elizejskie).", ua: "Ванда Марковська, *Prometeusz*: Титан, син Япета, ліпить людей, обманює Дзевса, краде вогонь, страждає на Кавказі, Геракл звільняє (Хірон → Єлисейські поля)." },
        { pl: "Plan = tytuły 12 kadrów w równoważnikach. Dzeus w tekście = Zeus.", ua: "План = назви 12 кадрів рівнозначниками. Dzeus у тексті = Zeus." },
        { pl: "Ocena: dla ludzi obrońca, dla bogów zuchwalec. Mowa: oskarżenie albo pochwała + słownictwo ze s. 49.", ua: "Оцінка: для людей захисник, для богів зухвалець. Мова: обвинувачення або похвала + словництво зі с. 49." },
        { pl: "Glosy: Tytan, termit, srogo, głownia, strawa, Kaukaz, skowany, Herakles, Pola Elizejskie. Pandora ≠ ten cytat.", ua: "Глоси з полів. Пандора ≠ ця цитата." }
      ],
      task: {
        id: "t21-s15-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz to, czego wymaga lekcja 21?",
          ua: "Яка нотатка показує, що вмієш те, чого вимагає урок 21?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Mit Markowskiej. Plan z kadrów. Glosy z pól. Oskarżenie lub pochwała Tytana. Pandora tylko jako dalsza historia.",
              ua: "Міф Марковської. План з кадрів. Глоси з полів. Обвинувачення або похвала Титана. Пандора лише як подальша історія."
            }
          },
          { id: "b", label: { pl: "Tylko didaskalia Demeter i plan szczegółowy ze s. 44.", ua: "Лише дидаскалії Деметри і докладний план зі с. 44." } },
          { id: "c", label: { pl: "Sześć dni stwarzania i zawilec — nic z ołtarza i ognia.", ua: "Шість днів творення і zawilec — нічого з вівтаря і вогню." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 45–49? Mit, 12 kadrów, słownik, schemat bogowie/ludzie.",
          ua: "Що на с. 45–49? Міф, 12 кадрів, словник, схема боги/люди."
        },
        explanation: {
          pl: "Lekcja 21 = Prometeusz Markowskiej. Demeter — 19–20. Biblia i Twardowski — wcześniej.",
          ua: "Урок 21 = Прометей Марковської. Деметра — 19–20. Біблія і Твардовський — раніше."
        }
      }
    }
  ]
};
