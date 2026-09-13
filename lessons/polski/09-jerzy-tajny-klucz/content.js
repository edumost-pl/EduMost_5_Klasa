function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

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
      heading: { pl: "Wszyscy jesteśmy dziećmi gwiazd", ua: "Ми всі діти зірок" },
      formula: "Lucy i Stephen Hawking  ·  s. 23–25",
      promptPlace: "before",
      prompt: {
        pl: "Czytamy fragment powieści. Polski tekst jest pierwszy. Włącz 🇺🇦 — pod każdym akapitem pojawi się ukraińskie tłumaczenie. Potem glosy z pól podręcznika i zadania ze s. 25. Klucze są schowane.",
        ua: "Читаємо уривок. Польська мова перша, під абзацом — український переклад. Потім глоси з полів і завдання зі с. 25. Ключі сховані."
      },
      items: [
        { pl: "przeczytam fragment i powiem, co zrobiło na mnie wrażenie;", ua: "прочитаю уривок і скажу, що вразило;" },
        { pl: "wypiszę etapy powstawania gwiazd z tekstu;", ua: "випишу з тексту етапи народження зірки;" },
        { pl: "wyjaśnię, co znaczy: wszyscy jesteśmy dziećmi gwiazd;", ua: "поясню: усі ми діти зірок;" },
        { pl: "przygotuję notatkę o tym, czego można się dowiedzieć w planetarium.", ua: "зроблю нотатку: що можна дізнатися в планетарії." }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Zanim czytamy", ua: "Перш ніж читати" },
      formula: "Jesteśmy częścią kosmosu  ·  ramka ze s. 23",
      promptPlace: "before",
      prompt: {
        pl: "To nie cały rozdział — fragment. Imiona: Lucy i Stephen Hawking czytamy: Lusi i Stiwen Holkin. Tłumaczenie: Piotr Amsterdamski.",
        ua: "Це фрагмент, не вся книжка. Імена: Lucy і Stephen Hawking читаємо: Люсі і Стівен Гокінг. Переклад: Пьотр Амстердамський."
      },
      text: {
        pl: [
          "Jerzy ma świnię o imieniu Fred. Pewnego dnia Fred ucieka. Chłopiec odnajduje zwierzę w domu nowego sąsiada – Eryka, który jest naukowcem i bada Wszechświat za pomocą niezwykłego komputera zwanego Kosmosem.",
          "Tytuł utworu: *Jerzy i tajny klucz do Wszechświata*."
        ],
        ua: [
          "В Єжи є свиня на ім’я Фред. Одного дня Фред тікає. Хлопчик знаходить тварину в домі нового сусіда — Еріка, який є науковцем і досліджує Всесвіт за допомогою незвичайного комп’ютера на ім’я Космос.",
          "Назва твору: *Єжи і таємний ключ до Всесвіту*."
        ]
      },
      task: {
        id: "t9-s02-eryk",
        type: "single-choice",
        question: {
          pl: "Kim jest Eryk w tej ramce?",
          ua: "Ким є Ерік у цій рамці?"
        },
        options: [
          { id: "a", label: { pl: "Nowym sąsiadem Jerzego — naukowcem, który bada Wszechświat komputerem Kosmosem.", ua: "Новим сусідом Єжи — науковцем, який досліджує Всесвіт комп’ютером Космосом." } },
          { id: "b", label: { pl: "Świnią Freda.", ua: "Свинею Фреда." } },
          { id: "c", label: { pl: "Nauczycielem polskiego ze szkoły Jerzego.", ua: "Учителем польської зі школи Єжи." } }
        ],
        answer: "a",
        hint: {
          pl: "Zatrzymaj się. Kto mieszka obok i czym się zajmuje?",
          ua: "Зупинись. Хто живе поруч і чим займається?"
        },
        explanation: {
          pl: "Eryk to nowy sąsiad, naukowiec. Kosmos to niezwykły komputer. Fred to świnia Jerzego.",
          ua: "Ерік — новий сусід, науковець. Космос — комп’ютер. Фред — свиня Єжи."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · okno na Wszechświat", ua: "Читаємо · вікно на Всесвіт" },
      formula: "s. 23",
      visual: vizGh("t9-okno-wszechswiat.png", {
        alt: {
          pl: "Ciemny pokój i okno z widokiem na gwiazdy",
          ua: "Темна кімната і вікно з зорями"
        },
        title: { pl: "Slajd · okno Kosmosu", ua: "Слайд · вікно Космосу" },
        prompt: {
          pl: "Wstaw kadr: pokój pogrąża się w ciemności; wielkie „okno” z widokiem na Wszechświat — czarna przestrzeń usiana maleńkimi jasnymi gwiazdami. Jerzy i Eryk patrzą. PNG, kadr szeroki. Przytnij znak wodny podręcznika.",
          ua: "Встав кадр: темна кімната і вікно на зоряне небо."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Czytaj na głos. Włącz 🇺🇦, jeśli chcesz tłumaczenie pod akapitem.",
        ua: "Читай уголос. Під абзацом — переклад."
      },
      text: {
        pl: [
          "W pokoju robiło się coraz ciemniej. […]",
          "– Przecież to jest… – powiedział Jerzy, który nagle uświadomił sobie, co ma przed sobą.",
          "– Okno – dokończył z dumą Eryk. – Kosmos zrobił nam okno z widokiem na Wszechświat. Patrz uważnie. […]",
          "Widać tam było niewiarygodnie wielką ciemność, upstrzoną czymś, co przypominało mnóstwo maleńkich, jasnych gwiazd. Jerzy zaczął je liczyć."
        ],
        ua: [
          "У кімнаті ставало дедалі темніше. […]",
          "— Та це ж… — сказав Єжи, який раптом усвідомив, що має перед собою.",
          "— Вікно, — з гордістю докінчив Ерік. — Космос зробив нам вікно з краєвидом на Всесвіт. Дивись уважно. […]",
          "Там було видно неймовірно велику темряву, всіяну чимось, що нагадувало безліч крихітних яскравих зірок. Єжи почав їх рахувати."
        ]
      },
      task: {
        id: "t9-s03-okno",
        type: "single-choice",
        question: {
          pl: "Co Jerzy i Eryk widzą przez „okno”?",
          ua: "Що Єжи й Ерік бачать крізь «вікно»?"
        },
        options: [
          { id: "a", label: { pl: "Widok na Wszechświat: wielką ciemność i mnóstwo maleńkich, jasnych gwiazd.", ua: "Краєвид на Всесвіт: велику темряву і безліч крихітних яскравих зірок." } },
          { id: "b", label: { pl: "Tylko ogród Eryka i świnię Freda.", ua: "Лише город Еріка і свиню Фреда." } },
          { id: "c", label: { pl: "Mapę Polski na ścianie.", ua: "Мапу Польщі на стіні." } }
        ],
        answer: "a",
        hint: {
          pl: "Co powiedział Eryk? Co widać w ciemności?",
          ua: "Що сказав Ерік? Що видно в темряві?"
        },
        explanation: {
          pl: "Kosmos zrobił im okno z widokiem na Wszechświat. Widać wielką ciemność i gwiazdy.",
          ua: "Космос зробив вікно на Всесвіт. Видно темряву і зорі."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · miliardy gwiazd", ua: "Читаємо · мільярди зірок" },
      formula: "s. 23",
      promptPlace: "before",
      prompt: {
        pl: "Mówi komputer Kosmos. Zwróć uwagę, ile trwa narodziny gwiazdy — i co Kosmos zrobił z czasem.",
        ua: "Говорить комп’ютер Космос. Зверни увагу, скільки триває народження зірки — і що Космос зробив із часом."
      },
      text: {
        pl: [
          "– Jerzy – odezwał się Kosmos swym mechanicznym głosem – we Wszechświecie są miliardy gwiazd. Nie zdołasz ich policzyć, chyba że byłbyś taki dobry jak ja.",
          "– Dlaczego jest ich tak wiele? – spytał zafascynowany Jerzy.",
          "– Nieustannie powstają nowe gwiazdy – odpowiedział wszechwiedzący komputer. – Rodzą się w ogromnych obłokach gazu i pyłu. Pokażę ci, jak to się dzieje.",
          "– Ile trzeba czasu, by urodziła się gwiazda? – zainteresował się Jerzy.",
          "– Dziesiątki milionów lat – odrzekł Kosmos. – Chyba nigdzie ci się nie spieszy? […] Nie obawiaj się, Jerzy. Znacznie to przyśpieszyłem. Zdążysz jeszcze wrócić do domu na kolację. […]"
        ],
        ua: [
          "— Єжи, — озвався Космос своїм механічним голосом, — у Всесвіті є мільярди зірок. Ти не зможеш їх полічити, хіба що був би такий вправний, як я.",
          "— Чому їх так багато? — запитав захоплений Єжи.",
          "— Безупинно виникають нові зірки, — відповів усезнаючий комп’ютер. — Вони народжуються в величезних хмарах газу й пилу. Покажу тобі, як це відбувається.",
          "— Скільки треба часу, щоб народилася зірка? — зацікавився Єжи.",
          "— Десятки мільйонів років, — відказав Космос. — Хіба тобі нікуди не спішно? […] Не бійся, Єжи. Я дуже це прискорив. Ти ще встигнеш повернутися додому на вечерю. […]"
        ]
      },
      task: {
        id: "t9-s04-czas",
        type: "single-choice",
        question: {
          pl: "Ile naprawdę trwa narodziny gwiazdy według Kosmosu?",
          ua: "Скільки насправді триває народження зірки за Космосом?"
        },
        options: [
          { id: "a", label: { pl: "Dziesiątki milionów lat — ale Kosmos znacznie to przyśpieszył, żeby Jerzy zdążył na kolację.", ua: "Десятки мільйонів років — але Космос дуже це прискорив, щоб Єжи встиг на вечерю." } },
          { id: "b", label: { pl: "Kilka minut, zawsze, bez przyspieszenia.", ua: "Кілька хвилин завжди, без прискорення." } },
          { id: "c", label: { pl: "Jedną noc, od kolacji do śniadania.", ua: "Одну ніч, від вечері до сніданку." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie informacje: prawdziwy czas i to, co Kosmos zrobił dla Jerzego.",
          ua: "Дві інформації: справжній час і те, що Космос зробив для Єжи."
        },
        explanation: {
          pl: "Kosmos mówi: dziesiątki milionów lat. Potem: znacznie to przyśpieszył, żeby Jerzy wrócił na kolację.",
          ua: "Космос: десятки мільйонів років. Потім прискорив, щоб Єжи встиг на вечерю."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · ciemny obłok", ua: "Читаємо · темна хмара" },
      formula: "s. 23–24",
      visual: vizGh("t9-oblok.png", {
        alt: {
          pl: "Ciemna chmura pyłu i gazu w kosmosie",
          ua: "Темна хмара пилу й газу в космосі"
        },
        title: { pl: "Slajd · obłok", ua: "Слайд · хмара" },
        prompt: {
          pl: "Wstaw kadr: w rogu „okna” całkiem ciemny obszar bez gwiazd; potem zbliżenie — wielka chmura pyłu i gazu, większa od Ziemi wielokrotnie. PNG. Przytnij znak wodny.",
          ua: "Встав кадр: темна пляма без зірок, потім велика хмара пилу й газу."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Jerzy zauważa coś, czego nie było widać od razu. Czytaj dalej.",
        ua: "Єжи помічає те, чого одразу не було видно. Читай далі."
      },
      text: {
        pl: [
          "Jerzy zauważył coś szczególnego w widocznym przez okno Wszechświecie – gwiazdy nie były wszędzie. W lewym dolnym rogu okna widać było całkiem ciemny obszar, gdzie nie świeciła ani jedna gwiazda.",
          "– Co tam się dzieje? – zainteresował się, wskazując palcem.",
          "– Przyjrzyjmy się temu – odrzekł Eryk. Nacisnął guzik pilota i widok przez okno zaczął się zmieniać, jak gdyby obserwowali ciemną plamę z coraz mniejszej odległości. Po chwili znaleźli się w jej wnętrzu.",
          "Jerzy zobaczył, że jest to wielka chmura pyłu i gazu, dokładnie tak, jak zapowiedział Kosmos.",
          "– Cóż to takiego? – spytał. – I gdzie to jest? – To obłok w przestrzeni kosmicznej, znacznie większy od tych na niebie – odpowiedział Eryk. – Składają się nań drobne, naprawdę drobne cząstki, które poruszają się na wszystkie strony. Jest ich tak dużo, że cała chmura ma olbrzymie rozmiary – wiele milionów razy większe od Ziemi. W jej wnętrzu rodzą się właśnie gwiazdy."
        ],
        ua: [
          "Єжи помітив щось особливе у Всесвіті, видному крізь вікно: зірок не було всюди. У лівому нижньому куті вікна було видно зовсім темну ділянку, де не світила жодна зірка.",
          "— Що там діється? — зацікавився він, показуючи пальцем.",
          "— Пригляньмося до цього, — відказав Ерік. Він натиснув кнопку пульта, і краєвид крізь вікно почав змінюватися, ніби вони спостерігали темну пляму з дедалі меншої відстані. За мить вони опинилися в її середині.",
          "Єжи побачив, що це велика хмара пилу й газу, саме так, як обіцяв Космос.",
          "— Що це таке? — запитав. — І де це? — Це хмара в космічному просторі, значно більша від тих, що на небі, — відповів Ерік. — Її складають дрібні, справді дрібні частинки, які рухаються на всі боки. Їх так багато, що вся хмара має величезні розміри — у багато мільйонів разів більші за Землю. У її середині якраз народжуються зірки."
        ]
      },
      task: {
        id: "t9-s05-oblok",
        type: "single-choice",
        question: {
          pl: "Co to jest ciemny obszar w rogu okna?",
          ua: "Що таке темна ділянка в куті вікна?"
        },
        options: [
          { id: "a", label: { pl: "Obłok pyłu i gazu w przestrzeni kosmicznej — w jego wnętrzu rodzą się gwiazdy.", ua: "Хмара пилу й газу в космосі — у її середині народжуються зірки." } },
          { id: "b", label: { pl: "Dziura w firance Eryka.", ua: "Дірка в фіранці Еріка." } },
          { id: "c", label: { pl: "Czarna tablica szkolna.", ua: "Шкільна чорна дошка." } }
        ],
        answer: "a",
        hint: {
          pl: "Co zobaczył Jerzy, gdy znaleźli się w wnętrzu ciemnej plamy?",
          ua: "Що побачив Єжи всередині темної плями?"
        },
        explanation: {
          pl: "To obłok w przestrzeni kosmicznej, wielka chmura pyłu i gazu. Tam rodzą się gwiazdy.",
          ua: "Це космічна хмара пилу й газу. Там народжуються зірки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · kule z ciasta", ua: "Читаємо · кулі з тіста" },
      formula: "s. 24  ·  materia",
      visual: vizGh("t9-kula.png", {
        alt: {
          pl: "Wirująca, kurcząca się kula gazu przy oknie",
          ua: "Куля газу, що обертається і стискається"
        },
        title: { pl: "Slajd · kula", ua: "Слайд · куля" },
        prompt: {
          pl: "Wstaw kadr: drobiny w chmurze zlepiają się; jedna wielka kula wiruje tuż przy oknie, kurczy się i zaczyna słabo świecić; chłopiec na sofie czuje ciepło. PNG. Przytnij znak wodny.",
          ua: "Встав кадр: частинки зліплюються в кулю, яка стискається і світиться."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Glosa z pola: *materia* — tu: gaz i pył rozproszone w przestrzeni kosmicznej. Patrz, co dzieje się z kulami.",
        ua: "Глоса з поля: *materia* — тут: газ і пил, розсіяні в космосі. Дивись, що діється з кулями."
      },
      text: {
        pl: [
          "Jerzy wyraźnie widział poruszające się bezładnie drobiny. Niektóre zlepiały się z innymi w większe bryły materii, które wirowały, cały czas zbierając kolejne cząstki. Co dziwne, w miarę dołączania nowych cząstek bryły wcale nie rosły – przeciwnie, wydawały się coraz mniejsze, jak gdyby coś je ściskało. Wyglądało to, jakby ktoś zagniatał w przestrzeni kosmicznej ogromne kule z ciasta.",
          "Jedna z kul znalazła się teraz tuż przy oknie. Jerzy przyglądał się, jak wirując, stopniowo staje się coraz mniejsza i mniejsza, a jednocześnie coraz gorętsza – nawet ze swojego miejsca na sofie czuł na twarzy ciepło. Po chwili kula rozjarzyła się słabym, niesamowitym światłem.",
          "– Dlaczego ta kula świeci? – spytał Jerzy.",
          "– W miarę kurczenia się wzrasta jej temperatura – odrzekł Eryk. – Im wyższa temperatura, tym jaśniej zaczyna świecić. Już wkrótce stanie się zbyt gorąca.",
          "Eryk chwycił leżące na stosie papierów dwie pary dość dziwnych okularów przeciwsłonecznych. – Załóż te okulary – polecił Jerzemu, sam wkładając drugą parę. – Za chwilę kula będzie tak jasna, że nie da się na nią patrzeć bez ciemnych okularów."
        ],
        ua: [
          "Єжи виразно бачив частинки, що безладно рухалися. Деякі зліплювалися з іншими в більші брили матерії, які оберталися, увесь час збираючи наступні частинки. Дивно: коли долучалися нові частинки, брили зовсім не росли — навпаки, здавалися дедалі меншими, ніби щось їх стискало. Виглядало так, ніби хтось замішував у космосі величезні кулі з тіста.",
          "Одна з куль опинилася тепер просто біля вікна. Єжи дивився, як вона, обертаючись, поступово стає все меншою й меншою і водночас дедалі гарячішою — навіть зі свого місця на дивані він відчував на обличчі тепло. За мить куля зайнялася слабким, неймовірним світлом.",
          "— Чому ця куля світить? — запитав Єжи.",
          "— У міру стискання зростає її температура, — відказав Ерік. — Що вища температура, то яскравіше вона починає світити. Незабаром стане надто гарячою.",
          "Ерік схопив зі стосу паперів дві пари досить дивних сонцезахисних окулярів. — Надягни ці окуляри, — наказав Єжи, сам одягаючи другу пару. — За мить куля буде такою яскравою, що на неї не можна буде дивитися без темних окулярів."
        ]
      },
      task: {
        id: "t9-s06-kule",
        type: "true-false",
        question: {
          pl: "Czy bryły materii, zbierając cząstki, stają się coraz większe?",
          ua: "Чи брили матерії, збираючи частинки, стають дедалі більшими?"
        },
        answer: false,
        hint: {
          pl: "Przeczytaj jeszcze raz zdanie: „wcale nie rosły – przeciwnie…”",
          ua: "Перечитай: «зовсім не росли — навпаки…»"
        },
        explanation: {
          pl: "Tekst: w miarę dołączania cząstek bryły wydają się coraz mniejsze, jakby je ściskało. Jak kule z ciasta.",
          ua: "Текст: брили здаються дедалі меншими, ніби їх стискає. Як кулі з тіста."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · eksplozja i synteza", ua: "Читаємо · вибух і синтез" },
      formula: "s. 24  ·  eksplozja, atom, synteza",
      visual: vizGh("t9-eksplozja.png", {
        alt: {
          pl: "Wybuch kuli gazu — nowa gwiazda jak Słońce",
          ua: "Вибух кулі газу — нова зірка як Сонце"
        },
        title: { pl: "Slajd · wybuch", ua: "Слайд · вибух" },
        prompt: {
          pl: "Wstaw kadr: Jerzy w ciemnych okularach; kula wybucha, odrzuca rozpalony gaz; potem świeci jak Słońce. PNG. Przytnij znak wodny.",
          ua: "Встав кадр: темні окуляри, вибух кулі, нове сонце."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Glosy z pól: *eksplozja* — wybuch; *atom* — najmniejsza część materii; *synteza* — łączenie.",
        ua: "Глоси з полів: *eksplozja* — вибух; *atom* — найменша частина матерії; *synteza* — поєднання."
      },
      text: {
        pl: [
          "Zaledwie Jerzy zdążył wsunąć na nos ciemne okulary, kula wybuchła, odrzucając na wszystkie strony zewnętrzne warstwy rozpalonego gazu. Po eksplozji zaczęła świecić jak Słońce.",
          "– O rany! – krzyknął Jerzy. – Czy to Słońce? – To mogłoby być Słońce – odparł Eryk. – Tak rodzą się gwiazdy, a Słońce też jest gwiazdą.",
          "Gdy z bardzo dużej ilości gazu i pyłu powstanie kuliste skupisko, które następnie kurczy się, wskutek czego rośnie jego gęstość i temperatura, tak jak to właśnie widziałeś, materia w środku kuli zostaje tak mocno ściśnięta, że składające się na nią atomy zaczynają się ze sobą łączyć, co prowadzi do wyzwolenia dużych ilości energii. Proces ten nosi nazwę reakcji syntezy jądrowej.",
          "Powstaje w nim tyle energii, że gdy tylko się zacznie, następuje gwałtowna eksplozja, która wyrzuca zewnętrzne warstwy kuli w przestrzeń, a reszta materii zamienia się w gwiazdę. Przed chwilą sam byłeś tego świadkiem.",
          "Nowo powstała gwiazda świeciła w oddali stabilnym blaskiem. Wyglądała przepięknie. Była tak jasna, że bez ciemnych okularów nie dałoby się na nią patrzeć. Jerzy nie oderwał od niej oczu, oszołomiony potęgą obserwowanych zjawisk. Co jakiś czas z powierzchni gwiazdy wystrzeliwały z niewiarygodną prędkością strugi świecących gazów długości setek tysięcy kilometrów."
        ],
        ua: [
          "Щойно Єжи встиг насунути на ніс темні окуляри, куля вибухнула, відкидаючи на всі боки зовнішні шари розпеченого газу. Після вибуху вона почала світити, як Сонце.",
          "— Ой лишенько! — крикнув Єжи. — Це Сонце? — Це могло б бути Сонце, — відповів Ерік. — Так народжуються зірки, а Сонце теж є зіркою.",
          "Коли з дуже великої кількості газу й пилу виникає кулясте скупчення, яке потім стискається, через що зростають його густина й температура, саме так, як ти щойно бачив, матерія всередині кулі стає так сильно стиснутою, що атоми, з яких вона складається, починають сполучатися між собою, і це вивільняє велику кількість енергії. Цей процес називається реакцією ядерного синтезу.",
          "У ньому виникає стільки енергії, що щойно він почнеться, настає стрімкий вибух, який викидає зовнішні шари кулі в простір, а решта матерії перетворюється на зірку. Щойно ти сам був цьому свідком.",
          "Новонароджена зірка світила вдалині стабільним блиском. Вона виглядала прекрасна. Була така яскрава, що без темних окулярів на неї не можна було б дивитися. Єжи не відвів від неї очей, приголомшений могутністю явищ, які спостерігав. Час від часу з поверхні зірки з неймовірною швидкістю вилітали струмені світного газу завдовжки сотні тисяч кілометрів."
        ]
      },
      task: {
        id: "t9-s07-synteza",
        type: "single-choice",
        question: {
          pl: "Jak nazywa się proces, w którym atomy w środku kuli łączą się i wyzwalają energię?",
          ua: "Як називається процес, у якому атоми всередині кулі сполучаються і вивільняють енергію?"
        },
        options: [
          { id: "a", label: { pl: "Reakcja syntezy jądrowej.", ua: "Реакція ядерного синтезу." } },
          { id: "b", label: { pl: "Tylko wiatr na Ziemi.", ua: "Лише вітер на Землі." } },
          { id: "c", label: { pl: "Gotowanie zupy.", ua: "Варіння супу." } }
        ],
        answer: "a",
        hint: {
          pl: "Eryk podaje nazwę procesu. Jest też w glosie: synteza — łączenie.",
          ua: "Ерік називає процес. У глосі: synteza — поєднання."
        },
        explanation: {
          pl: "Tekst: proces ten nosi nazwę reakcji syntezy jądrowej. Potem gwałtowna eksplozja — i gwiazda.",
          ua: "Текст: реакція ядерного синтезу. Потім стрімкий вибух — і зірка."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzieci gwiazd", ua: "Читаємо · діти зірок" },
      formula: "s. 25  ·  pierwiastek",
      visual: vizGh("t9-planety.png", {
        alt: {
          pl: "Barwny obłok po wybuchu gwiazdy i małe kule — przyszłe planety",
          ua: "Кольорова хмара після вибуху зірки і малі кулі — майбутні планети"
        },
        title: { pl: "Slajd · planety", ua: "Слайд · планети" },
        prompt: {
          pl: "Wstaw kadr: gwiazda; barwny obłok miesza się z innymi; małe kuliste obiekty — za małe, by być gwiazdami — stają się planetami. PNG. Przytnij znak wodny.",
          ua: "Встав кадр: зірка, кольорова хмара, майбутні планети."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "To zdanie wróci w zadaniu 3. Glosa: *pierwiastek* — substancja chemiczna składająca się z jednego typu atomów. *Pierwiastki ciężkie* — pierwiastki promieniotwórcze, czyli takie, których atomy rozpadają się, emitując promienie.",
        ua: "Це речення повернеться в завданні 3. Глоса: *pierwiastek* — хімічна речовина з одного типу атомів. *Pierwiastki ciężkie* — радіоактивні, атоми розпадаються й випромінюють."
      },
      text: {
        pl: [
          "– Czy ta gwiazda będzie tak świecić już wiecznie? – spytał. – Nic nie trwa wiecznie, Jerzy – odrzekł Eryk. – Gdyby gwiazdy świeciły wiecznie, nie byłoby nas teraz tutaj. W swoich „brzuchach” gwiazdy przetwarzają kolejno mniejsze atomy na coraz większe. Na tym właśnie polega reakcja syntezy jądrowej. Procesowi temu towarzyszy również wyzwolenie ogromnej energii, dzięki czemu gwiazdy świecą.",
          "Niemal wszystkie pierwiastki, z których jesteśmy zbudowani, ty i ja, zostały wyprodukowane wewnątrz gwiazd, istniejących na długo przed powstaniem Ziemi. Mamy zatem prawo twierdzić, że wszyscy jesteśmy dziećmi gwiazd.",
          "W gigantycznych eksplozjach bardzo dawno temu gwiazdy te wyrzuciły w przestrzeń kosmiczną wyprodukowane w nich pierwiastki ciężkie. To samo stanie się kiedyś z gwiazdą, którą widzisz teraz. Pod koniec jej życia, gdy zabraknie lżejszych atomów, z których mogłyby powstawać większe, nastąpi eksplozja, która rozrzuci po kosmosie wszystko, co powstało w jej wnętrzu. […]",
          "– Po pewnym czasie barwny obłok, który widzisz, zmiesza się z innymi, pozostałymi po wybuchach innych, odległych gwiazd – powiedział Eryk. – Gaz zawarty w tych obłokach wystygnie i wymiesza się, tworząc znacznie większą chmurę, w której znowu zaczną się rodzić gwiazdy.",
          "Z materii pozostałej po narodzinach nowych gwiazd powstaną obiekty różnej wielkości, lecz zbyt małe, by mogły same stać się gwiazdami. Niektóre z nich przybiorą kształt kulisty i z czasem staną się planetami. W rzeczywistości to wszystko trwa bardzo długo – dziesiątki milionów lat!"
        ],
        ua: [
          "— Чи ця зірка світитиме так уже вічно? — запитав. — Ніщо не триває вічно, Єжи, — відказав Ерік. — Якби зірки світили вічно, нас би зараз тут не було. У своїх «животах» зірки послідовно перетворюють менші атоми на дедалі більші. Саме в цьому полягає реакція ядерного синтезу. Цьому процесові також супроводить вивільнення величезної енергії, завдяки чому зірки світять.",
          "Майже всі елементи, з яких ми збудовані, ти і я, були вироблені всередині зірок, що існували задовго до виникнення Землі. Тож ми маємо право твердити, що всі ми — діти зірок.",
          "У гігантських вибухах дуже давно ті зірки викинули в космічний простір вироблені в них важкі елементи. Те саме колись станеться із зіркою, яку ти бачиш зараз. Наприкінці її життя, коли забракне легших атомів, з яких могли б виникати більші, настане вибух, який розкидає космосом усе, що виникло в її середині. […]",
          "— Через певний час барвиста хмара, яку ти бачиш, змішається з іншими, що лишилися після вибухів інших, далеких зірок, — сказав Ерік. — Газ у цих хмарах охолоне й змішається, утворюючи значно більшу хмару, в якій знову почнуть народжуватися зірки.",
          "З матерії, що лишилася після народження нових зірок, виникнуть об’єкти різної величини, але занадто малі, щоб самим стати зірками. Деякі з них набудуть кулястої форми і з часом стануть планетами. Насправді все це триває дуже довго — десятки мільйонів років!"
        ]
      },
      task: {
        id: "t9-s08-dzieci",
        type: "single-choice",
        question: {
          pl: "Dlaczego Eryk mówi, że wszyscy jesteśmy dziećmi gwiazd?",
          ua: "Чому Ерік каже, що всі ми — діти зірок?"
        },
        options: [
          { id: "a", label: { pl: "Bo pierwiastki, z których jesteśmy zbudowani, powstały wewnątrz gwiazd dawno przed Ziemią.", ua: "Бо елементи, з яких ми збудовані, виникли всередині зірок задовго до Землі." } },
          { id: "b", label: { pl: "Bo każdy człowiek mieszka na Słońcu.", ua: "Бо кожна людина живе на Сонці." } },
          { id: "c", label: { pl: "Bo gwiazdy świecą wiecznie i nigdy nie wybuchają.", ua: "Бо зірки світять вічно і ніколи не вибухають." } }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź zdanie o pierwiastkach, z których jesteśmy zbudowani.",
          ua: "Знайди речення про елементи, з яких ми збудовані."
        },
        explanation: {
          pl: "Eryk: niemal wszystkie pierwiastki naszego ciała wyprodukowano wewnątrz gwiazd. Dlatego: dzieci gwiazd. Gwiazdy nie świecą wiecznie.",
          ua: "Ерік: майже всі елементи нашого тіла вироблено всередині зірок. Тому — діти зірок."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól podręcznika", ua: "Слова з полів підручника" },
      promptPlace: "before",
      prompt: {
        pl: "To glosy ze s. 24–25. Przeczytaj polską ramkę na głos, potem ukraińską kolumnę. Zapamiętaj znaczenie *w tym tekście*.",
        ua: "Це глоси зі с. 24–25. Прочитай польську рамку вголос, потім українську колонку."
      },
      rows: [
        { pl: "Lucy i Stephen Hawking — czyt. Lusi i Stiwen Holkin", ua: "Lucy і Stephen Hawking — читаємо: Люсі і Стівен Гокінг" },
        { pl: "materia — tu: gaz i pył rozproszone w przestrzeni kosmicznej", ua: "materia — тут: газ і пил, розсіяні в космічному просторі" },
        { pl: "eksplozja — wybuch", ua: "eksplozja — вибух" },
        { pl: "atom — najmniejsza część materii", ua: "atom — найменша частина матерії" },
        { pl: "synteza — łączenie", ua: "synteza — поєднання" },
        { pl: "pierwiastek — substancja chemiczna składająca się z jednego typu atomów", ua: "pierwiastek — хімічна речовина, що складається з атомів одного типу" },
        { pl: "pierwiastki ciężkie — pierwiastki promieniotwórcze, czyli takie, których atomy rozpadają się, emitując promienie", ua: "pierwiastki ciężkie — радіоактивні елементи: їхні атоми розпадаються й випромінюють" }
      ],
      task: {
        id: "t9-s09-glosa",
        type: "single-choice",
        question: {
          pl: "Co w tym tekście znaczy słowo eksplozja?",
          ua: "Що в цьому тексті означає слово eksplozja?"
        },
        options: [
          { id: "a", label: { pl: "Wybuch.", ua: "Вибух." } },
          { id: "b", label: { pl: "Ciche gaszenie światła.", ua: "Тихе гасіння світла." } },
          { id: "c", label: { pl: "Tylko śmiech Jerzego.", ua: "Лише сміх Єжи." } }
        ],
        answer: "a",
        hint: {
          pl: "Spójrz na glosę z pola: eksplozja — …",
          ua: "Подивись на глосу з поля: eksplozja — …"
        },
        explanation: {
          pl: "Podręcznik: eksplozja — wybuch.",
          ua: "Підручник: eksplozja — вибух."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · wrażenie", ua: "Завд. 1 · враження" },
      formula: "s. 25  ·  USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Z podręcznika: po przeczytaniu tekstu powiedzcie, co zrobiło na was największe wrażenie, co was zainteresowało, czego do tej pory nie wiedzieliście o Wszechświecie. Najpierw głośno i w zeszycie. Klucz to tylko przykład — nie jedyna dobra odpowiedź.",
        ua: "З підручника: після читання скажіть, що найбільше вразило, що зацікавило, чого ви досі не знали про Всесвіт. Спочатку вголос і в зошит. Ключ — лише приклад."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Zapisz 2–3 zdania własnymi słowami. Potem możesz otworzyć przykład.",
            ua: "Запиши 2–3 речення своїми словами. Потім можна відкрити приклад."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyna dobra odpowiedź",
          text: {
            pl: [
              "Największe wrażenie: kula wybuchła i zaczęła świecić jak Słońce — a Jerzy musiał założyć ciemne okulary.",
              "Nowość z tekstu: gwiazdy rodzą się w obłokach gazu i pyłu przez dziesiątki milionów lat; pierwiastki naszego ciała powstały w gwiazdach."
            ],
            ua: [
              "Найбільше враження: куля вибухнула і почала світити, як Сонце.",
              "Нове з тексту: зірки народжуються в хмарах газу й пилу десятки мільйонів років; елементи нашого тіла виникли в зірках."
            ]
          }
        }
      ],
      task: {
        id: "t9-s10-wrazenie",
        type: "multiple-choice",
        question: {
          pl: "Czego NA PEWNO można się dowiedzieć z tego fragmentu o Wszechświecie? Zaznacz wszystkie pewne.",
          ua: "Чого НАПЕВНО можна дізнатися з цього уривка про Всесвіт? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Nowe gwiazdy rodzą się w obłokach gazu i pyłu.", ua: "Нові зірки народжуються в хмарах газу й пилу." } },
          { id: "b", label: { pl: "Słońce też jest gwiazdą.", ua: "Сонце теж є зіркою." } },
          { id: "c", label: { pl: "Jerzy mieszka na Marsie.", ua: "Єжи живе на Марсі." } },
          { id: "d", label: { pl: "To wszystko trwa bardzo długo — dziesiątki milionów lat.", ua: "Усе це триває дуже довго — десятки мільйонів років." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Co mówi Eryk i Kosmos? Czego NIE ma w tekście?",
          ua: "Що кажуть Ерік і Космос? Чого НЕМАЄ в тексті?"
        },
        explanation: {
          pl: "Z tekstu: obłoki gazu i pyłu, Słońce jest gwiazdą, dziesiątki milionów lat. Mars jako dom Jerzego — nie.",
          ua: "З тексту: хмари газу й пилу, Сонце — зірка, десятки мільйонів років. Марс як дім Єжи — ні."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · notatka: spotkanie z Erykiem", ua: "Завд. 2 · нотатка: зустріч з Еріком" },
      formula: "s. 25  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Z podręcznika: dobierzcie się w kilkuosobowe zespoły i przygotujcie w dowolnej formie notatkę na temat tego, czego Jerzy się dowiedział podczas spotkania z Erykiem. Najpierw zeszyt. Potem klucz — etapy z tekstu.",
        ua: "З підручника: у команді зробіть нотатку — чого Єжи дізнався від Еріка. Спочатку зошит, потім ключ."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Ułóż własną notatkę (lista, schemat, rysunek + podpisy). Nie otwieraj klucza, zanim spróbujesz.",
            ua: "Зроби свою нотатку (список, схема, малюнок). Не відкривай ключ, доки не спробуєш."
          }
        },
        {
          formula: "KLUCZ  ·  etapy z fragmentu",
          text: {
            pl: [
              "1. Obłok gazu i pyłu w przestrzeni kosmicznej — wiele milionów razy większy od Ziemi; w jego wnętrzu rodzą się gwiazdy.",
              "2. Drobne cząstki zlepiają się w bryły, które wirują i zbierają kolejne cząstki; bryły kurczą się i nagrzewają (jak kule z ciasta).",
              "3. Kula świeci; potem reakcja syntezy jądrowej i gwałtowna eksplozja — reszta materii staje się gwiazdą (tak mogłoby powstać Słońce).",
              "4. Gwiazdy nie świecą wiecznie; w „brzuchach” przetwarzają mniejsze atomy na większe; pierwiastki z gwiazd trafiają w kosmos.",
              "5. Z materii pozostałej po narodzinach gwiazd mogą powstać planety. To trwa dziesiątki milionów lat."
            ],
            ua: [
              "1. Хмара газу й пилу — у мільйони разів більша за Землю; усередині народжуються зірки.",
              "2. Частинки зліплюються в брили, стискаються й нагріваються.",
              "3. Ядерний синтез і вибух — виникає зірка (так могло б виникнути Сонце).",
              "4. Зірки не світять вічно; елементи з зірок потрапляють у космос.",
              "5. З решти матерії можуть виникнути планети. Це триває десятки мільйонів років."
            ]
          }
        }
      ],
      task: {
        id: "t9-s11-etapy",
        type: "single-choice",
        question: {
          pl: "Która kolejność zgadza się z tym, co zobaczył Jerzy?",
          ua: "Який порядок збігається з тим, що побачив Єжи?"
        },
        options: [
          { id: "a", label: { pl: "Obłok gazu i pyłu → kurczenie i ciepło → synteza / eksplozja → gwiazda (potem możliwe planety).", ua: "Хмара газу й пилу → стискання і тепло → синтез / вибух → зірка (потім можливі планети)." } },
          { id: "b", label: { pl: "Najpierw planeta, potem od razu Słońce bez obłoku.", ua: "Спочатку планета, потім одразу Сонце без хмари." } },
          { id: "c", label: { pl: "Najpierw kolacja Jerzego, potem Fred buduje gwiazdę.", ua: "Спочатку вечеря Єжи, потім Фред будує зірку." } }
        ],
        answer: "a",
        hint: {
          pl: "Od czego zaczyna się pokaz Kosmosu? Co jest na końcu fragmentu o planetach?",
          ua: "З чого починається показ Космосу? Що в кінці про планети?"
        },
        explanation: {
          pl: "W tekście: obłok → kule się kurczą → synteza i wybuch → gwiazda; z resztek mogą powstać planety.",
          ua: "У тексті: хмара → кулі стискаються → синтез і вибух → зірка; з залишків — планети."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · dzieci gwiazd", ua: "Завд. 3 · діти зірок" },
      formula: "s. 25  ·  na podstawie tekstu",
      promptPlace: "before",
      prompt: {
        pl: "Z podręcznika: na podstawie tekstu wyjaśnij, co oznacza stwierdzenie: „wszyscy jesteśmy dziećmi gwiazd”. Najpierw własnymi słowami w zeszycie. Potem porównaj z kluczem.",
        ua: "З підручника: на основі тексту поясни: «всі ми діти зірок». Спочатку своїми словами, потім ключ."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Napisz wyjaśnienie. Nie zgaduj „ładnego hasła” bez tekstu.",
            ua: "Напиши пояснення. Не вгадуй гарне гасло без тексту."
          }
        },
        {
          formula: "KLUCZ  ·  z fragmentu Eryka",
          text: {
            pl: [
              "Sens z tekstu: niemal wszystkie pierwiastki, z których jesteśmy zbudowani, zostały wyprodukowane wewnątrz gwiazd istniejących na długo przed powstaniem Ziemi. Gwiazdy wyrzuciły te pierwiastki w przestrzeń w gigantycznych eksplozjach.",
              "To nie znaczy, że ludzie mieszkają na gwiazdach. To przenośnia oparta na faktach z opowieści Eryka."
            ],
            ua: [
              "З тексту: майже всі елементи нашого тіла вироблено всередині зірок задовго до Землі. Зірки викинули їх у космос під час гігантських вибухів.",
              "Це не означає, що люди живуть на зірках. Це метафора на фактах з розповіді Еріка."
            ]
          }
        }
      ],
      task: {
        id: "t9-s12-przenosnia",
        type: "single-choice",
        question: {
          pl: "Które wyjaśnienie trzyma się tekstu?",
          ua: "Яке пояснення тримається тексту?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Jesteśmy „dziećmi gwiazd”, bo pierwiastki naszego ciała powstały w gwiazdach i trafiły w kosmos po ich wybuchach.",
              ua: "Ми «діти зірок», бо елементи нашого тіла виникли в зірках і потрапили в космос після їхніх вибухів."
            }
          },
          { id: "b", label: { pl: "Każdy uczeń ma tatę-gwiazdora z telewizji.", ua: "Кожен учень має тата-зірку з телебачення." } },
          { id: "c", label: { pl: "Gwiazdy świecą wiecznie, więc ludzie też.", ua: "Зірки світять вічно, тож і люди теж." } }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do zdania o pierwiastkach, z których jesteśmy zbudowani.",
          ua: "Повернися до речення про елементи, з яких ми збудовані."
        },
        explanation: {
          pl: "Podręcznik każe wyjaśnić na podstawie tekstu. Eryk mówi o pierwiastkach z gwiazd — nie o telewizji i nie o wiecznym świeceniu.",
          ua: "Треба пояснити на основі тексту. Ерік говорить про елементи з зірок."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · przeżycia przy narodzinach gwiazdy", ua: "Завд. 4 · пережиття біля народження зірки" },
      formula: "s. 25  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Z podręcznika: wyobraź sobie, że razem z Jerzym obserwujesz narodziny gwiazdy. Napisz o swoich przeżyciach związanych z tym zdarzeniem. Najpierw samodzielnie. Przykład na końcu jest tylko wzorem początku — nie gotowym wypracowaniem.",
        ua: "З підручника: уяви, що разом з Єжи спостерігаєш народження зірки. Напиши про свої пережиття. Приклад — лише зразок початку."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie: co widzisz, co czujesz, czego się boisz albo dziwisz. Użyj szczegółów z tekstu (okno, okulary, ciepło, wybuch).",
            ua: "У зошиті: що бачиш, що відчуваєш. Візьми деталі з тексту (вікно, окуляри, тепло, вибух)."
          }
        },
        {
          formula: "PRZYKŁAD początku  ·  EduMost, nie jedyna wersja",
          text: {
            pl: [
              "Siedziałem na sofie, a przez okno Kosmosu było coraz jaśniej. Najpierw czułem ciepło na twarzy, potem Eryk kazał założyć ciemne okulary.",
              "Gdy kula wybuchła, serce mi zabiło mocniej. Pomyślałem: tak mogło urodzić się nasze Słońce."
            ],
            ua: [
              "Я сидів на дивані, а крізь вікно Космосу ставало дедалі яскравіше. Спочатку відчув тепло на обличчі, потім Ерік наказав надягнути темні окуляри.",
              "Коли куля вибухнула, серце забилося сильніше. Подумав: так могло народитися наше Сонце."
            ]
          }
        }
      ],
      task: {
        id: "t9-s13-przezycia",
        type: "multiple-choice",
        question: {
          pl: "Co warto wziąć do opisu przeżyć, bo JEST w tekście? Zaznacz wszystkie pewne.",
          ua: "Що варто взяти в опис пережить, бо ЦЕ Є в тексті? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ciepło na twarzy, nawet z sofy.", ua: "Тепло на обличчі навіть із дивана." } },
          { id: "b", label: { pl: "Ciemne okulary, bo kula staje się zbyt jasna.", ua: "Темні окуляри, бо куля стає надто яскравою." } },
          { id: "c", label: { pl: "Wycieczkę Jerzego na Księżyc autobusem.", ua: "Поїздку Єжи на Місяць автобусом." } },
          { id: "d", label: { pl: "Krzyk „O rany!” i pytanie, czy to Słońce.", ua: "Крик «Ой лишенько!» і питання, чи це Сонце." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Które zdania możesz wskazać palcem w fragmencie?",
          ua: "Які речення можеш показати пальцем в уривку?"
        },
        explanation: {
          pl: "W tekście: ciepło z sofy, okulary, „O rany!” i Słońce. Autobus na Księżyc — nie.",
          ua: "У тексті: тепло, окуляри, «Ой лишенько!» і Сонце. Автобус на Місяць — ні."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 5 · planetarium", ua: "Завд. 5 · планетарій" },
      formula: "s. 25  ·  notatka",
      promptPlace: "before",
      prompt: {
        pl: "Z podręcznika: na podstawie wybranych internetowych stron planetariów napisz kilka zdań o tym, czego się można dowiedzieć o kosmosie podczas wizyty w tych instytucjach. Tu nie wstawiamy gotowych adresów stron. Zeszyt najpierw. Przykład — typowe tematy, nie kopia jednej witryny.",
        ua: "З підручника: напиши кілька речень — чого можна дізнатися про космос у планетарії. Без готових адрес сайтів. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Jeśli możesz, zajrzyj z nauczycielem na stronę planetarium. Jeśli nie — zapisz, czego spodziewasz się po wizycie, korzystając z tego, czego nauczył się Jerzy.",
            ua: "Якщо можна — заглянь із учителем на сайт планетарію. Якщо ні — запиши, чого очікуєш після візиту, з того, чого навчився Єжи."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie kopia konkretnej strony",
          text: {
            pl: [
              "W planetarium można zobaczyć, jak wygląda niebo i gwiazdozbiory, usłyszeć o Słońcu jako gwieździe, o planetach i o tym, że gwiazdy rodzą się i umierają w bardzo długim czasie.",
              "Można też dowiedzieć się, po co są teleskopy i seanse pod kopułą — żeby oglądać Wszechświat bezpiecznie, nie jak Jerzy bez okularów."
            ],
            ua: [
              "У планетарії можна побачити небо і сузір’я, почути про Сонце як зірку, про планети і про те, що зірки народжуються й гинуть дуже довго.",
              "Можна дізнатися, навіщо телескопи і сеанси під куполом."
            ]
          }
        }
      ],
      task: {
        id: "t9-s14-planetarium",
        type: "true-false",
        question: {
          pl: "Czy planetarium służy m.in. do tego, by dowiedzieć się czegoś o gwiazdach, planetach i wyglądzie nieba?",
          ua: "Чи планетарій служить зокрема для того, щоб дізнатися про зірки, планети і вигляд неба?"
        },
        answer: true,
        hint: {
          pl: "Zadanie 5 pyta, czego można się dowiedzieć o kosmosie podczas wizyty.",
          ua: "Завдання 5 питає, чого можна дізнатися про космос під час візиту."
        },
        explanation: {
          pl: "Tak: planetarium pokazuje niebo i opowiada o kosmosie. Szczegóły zapisujesz po stronie wybranej z nauczycielem — tu tylko kierunek notatki.",
          ua: "Так: планетарій показує небо і розповідає про космос. Деталі — зі сторінки, яку виберете з учителем."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Krótko do zeszytu. Tytuł fragmentu i autorzy. Jedno zdanie o oknie Kosmosu. Etapy: obłok → kula → synteza / wybuch → gwiazda → (planety). Zdanie: wszyscy jesteśmy dziećmi gwiazd — bo pierwiastki naszego ciała powstały w gwiazdach.",
        ua: "Коротко в зошит. Назва й автори. Одне речення про вікно Космосу. Етапи. Речення: всі ми діти зірок — бо елементи тіла виникли в зірках."
      },
      items: [
        { pl: "Lucy i Stephen Hawking, Jerzy i tajny klucz do Wszechświata (fragment, s. 23–25).", ua: "Люсі і Стівен Гокінг, Єжи і таємний ключ до Всесвіту (фрагмент, с. 23–25)." },
        { pl: "Gwiazdy rodzą się w obłokach gazu i pyłu; Słońce też jest gwiazdą.", ua: "Зірки народжуються в хмарах газу й пилу; Сонце теж зірка." },
        { pl: "„Dzieci gwiazd” = pierwiastki z gwiazd, nie mieszkanie na Słońcu.", ua: "«Діти зірок» = елементи із зірок, не життя на Сонці." }
      ],
      task: {
        id: "t9-s15-notatka",
        type: "single-choice",
        question: {
          pl: "Jaką notatkę zostawiasz po tej lekcji?",
          ua: "Яку нотатку лишаєш після цього уроку?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Przeczytałem fragment Hawkingów. Gwiazdy rodzą się w obłokach gazu i pyłu. Jesteśmy dziećmi gwiazd, bo z gwiazd pochodzą nasze pierwiastki.",
              ua: "Прочитав уривок Гокінгів. Зірки народжуються в хмарах газу й пилу. Ми діти зірок, бо з зірок походять наші елементи."
            }
          },
          { id: "b", label: { pl: "Nic nie było o gwiazdach. Tylko dyktando z rz.", ua: "Нічого не було про зірки. Лише диктант з rz." } },
          { id: "c", label: { pl: "Jerzy zbudował rakietę w jednej minucie i poleciał na kolację na Marsa.", ua: "Єжи за хвилину збудував ракету і полетів на вечерю на Марс." } }
        ],
        answer: "a",
        hint: {
          pl: "Co było tematem czytania? Co znaczy „dzieci gwiazd” w tekście?",
          ua: "Яка була тема читання? Що означають «діти зірок» у тексті?"
        },
        explanation: {
          pl: "Lekcja to czytanie fragmentu i wyjaśnienie przenośni na podstawie tekstu — nie dyktando rz i nie wymyślona rakieta.",
          ua: "Урок — читання уривка і пояснення метафори з тексту."
        }
      }
    }
  ]
};
