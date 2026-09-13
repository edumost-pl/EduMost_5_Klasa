function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      text: {
        pl: [
          "To nie nowa lekcja biologii. Powtarzasz cały dział I: Biologia — nauka o życiu (lekcje 1–3).",
          "Najpierw krótka powtórka. Potem zadania jak w podręczniku „Wiesz czy nie wiesz?”. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок біології. Ти повторюєш увесь розділ I: Біологія — наука про життя (уроки 1–3).",
          "Спочатку коротке повторення. Потім завдання як у підручнику «Знаєш чи не знаєш?». Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym dziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "Wyjaśnisz, czym zajmuje się biologia i jakie cechy mają organizmy.", ua: "Поясниш, чим займається біологія і які риси мають організми." },
        { pl: "Uporządkujesz poziomy budowy i odróżnisz obserwację od doświadczenia.", ua: "Упорядкуєш рівні будови і відрізниш спостереження від досліду." },
        { pl: "Wskażesz próbę badawczą i kontrolną oraz etapy metody naukowej.", ua: "Вкажеш дослідну і контрольну пробу та етапи наукового методу." },
        { pl: "Powiesz, jak zrobić preparat i obliczysz powiększenie mikroskopu.", ua: "Скажеш, як зробити препарат і обчислиш збільшення мікроскопа." }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Biologia i organizmy", ua: "Біологія і організми" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Budowa komórkowa i czynności życiowe.", ua: "Клітинна будова і життєві функції." },
        prompt: { pl: "Istniejąca infografika lekcji 1: siedem czynności życiowych z polskimi etykietami." }
      }),
      text: {
        pl: [
          ["", em("Biologia"), " bada budowę i funkcjonowanie organizmów oraz zależności między organizmami a otoczeniem."],
          "Organizmy odróżniasz od rzeczy nieożywionych dzięki dwóm cechom: budowie komórkowej i wykonywaniu czynności życiowych.",
          "Czynności życiowe: odżywianie się, oddychanie, wydalanie, ruch, reakcja na bodźce, rozmnażanie się, wzrost i rozwój.",
          "Dziedziny: zoologia, botanika, mikrobiologia, anatomia, fizjologia, ekologia. Mikrobiologia bada drobnoustroje — zwykle pod mikroskopem."
        ],
        ua: [
          ["", em("Біологія"), " досліджує будову і функціонування організмів та залежності між організмами і оточенням."],
          "Організми відрізняєш від неживих речей завдяки двом рисам: клітинній будові і виконанню життєвих функцій.",
          "Життєві функції: живлення, дихання, виділення, рух, реакція на подразники, розмноження, ріст і розвиток.",
          "Галузі: зоологія, ботаніка, мікробіологія, анатомія, фізіологія, екологія. Мікробіологія досліджує мікроорганізми — зазвичай під мікроскопом."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Od komórki do organizmu", ua: "Від клітини до організму" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-poziomy-budowy.png", {
        alt: { pl: "Poziomy budowy organizmu wielokomórkowego", ua: "Рівні будови багатоклітинного організму" },
        title: { pl: "Komórka → tkanka → narząd → układ → organizm.", ua: "Клітина → тканина → орган → система → організм." },
        prompt: { pl: "Istniejący schemat lekcji 1: komórka, tkanka, narząd, układ narządów, organizm." }
      }),
      text: {
        pl: [
          "Kolejność od najmniejszej części: komórka → tkanka → narząd (u roślin: organ) → układ (system) → organizm.",
          "Przykład: komórka nerwowa → tkanka nerwowa → mózgowie (narząd) → układ nerwowy → organizm."
        ],
        ua: [
          "Послідовність від найменшої частини: клітина → тканина → орган → система → організм.",
          "Приклад: нервова клітина → нервова тканина → головний мозок (орган) → нервова система → організм."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak poznawać biologię?", ua: "Як пізнавати біологію?" },
      visual: vizGh("L02_Jak_poznawac_biologie", "l02-proby-banany.png", {
        alt: { pl: "Próba badawcza i próba kontrolna", ua: "Дослідна і контрольна проба" },
        title: { pl: "Jedna zmiana. Reszta warunków taka sama.", ua: "Одна зміна. Решта умов така сама." },
        prompt: { pl: "Istniejące zdjęcie lekcji 2: dwie miski — próba badawcza i kontrolna." }
      }),
      text: {
        pl: [
          ["", em("Obserwacja"), " — uważnie patrzymy i niczego celowo nie zmieniamy."],
          ["", em("Doświadczenie"), " — celowo zmieniamy jeden czynnik i sprawdzamy jego wpływ."],
          ["", em("Próba badawcza"), " — tu zmieniamy wybrany czynnik. ", em("Próba kontrolna"), " — bez tej zmiany, do porównania."],
          "Etapy metody naukowej: obserwacja → problem badawczy → hipoteza → doświadczenie → analiza wyników → wniosek.",
          "Hipoteza to możliwa odpowiedź na pytanie. Wynik doświadczenia pozwala ją potwierdzić albo odrzucić."
        ],
        ua: [
          ["", em("Спостереження"), " — уважно дивимося і нічого навмисно не змінюємо."],
          ["", em("Дослід"), " — навмисно змінюємо один чинник і перевіряємо його вплив."],
          ["", em("Дослідна проба"), " — тут змінюємо вибраний чинник. ", em("Контрольна проба"), " — без цієї зміни, для порівняння."],
          "Етапи наукового методу: спостереження → дослідницька проблема → гіпотеза → дослід → аналіз результатів → висновок.",
          "Гіпотеза — можлива відповідь на питання. Результат досліду дозволяє її підтвердити або відхилити."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Mikroskop", ua: "Мікроскоп" },
      visual: vizGh("L03_Obserwacje_mikroskopowe", "l03-powiekszenie.png", {
        alt: { pl: "Powiększenie okularu razy powiększenie obiektywu", ua: "Збільшення окуляра помножити на збільшення об’єктива" },
        title: { pl: "Okular × obiektyw = powiększenie obrazu.", ua: "Окуляр × об’єктив = збільшення зображення." },
        prompt: { pl: "Istniejąca plansza lekcji 3: wzór powiększenia mikroskopu." }
      }),
      text: {
        pl: [
          "Mikroskop optyczny pozwala oglądać obiekty niewidoczne gołym okiem, na przykład komórki liścia. Powiększa do około tysiąca razy. Można oglądać obiekty żywe i martwe.",
          "Preparat: kropla wody na szkiełku podstawowym → obiekt (pęseta, igła) → szkiełko nakrywkowe → stolik mikroskopu.",
          "Powiększenie obrazu = powiększenie okularu × powiększenie obiektywu. Obserwację zaczynasz od najmniejszego powiększenia."
        ],
        ua: [
          "Оптичний мікроскоп дозволяє розглядати об’єкти, невидимі неозброєним оком, наприклад клітини листка. Збільшує до близько тисячі разів. Можна розглядати живі і мертві об’єкти.",
          "Препарат: крапля води на предметному склі → об’єкт (пінцет, голка) → накривне скельце → столик мікроскопа.",
          "Збільшення зображення = збільшення окуляра × збільшення об’єктива. Спостереження починаєш з найменшого збільшення."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa działu", ua: "Слова розділу" },
      rows: [
        { pl: "organizm", ua: "організм" },
        { pl: "czynności życiowe", ua: "життєві функції" },
        { pl: "obserwacja", ua: "спостереження" },
        { pl: "doświadczenie", ua: "дослід" },
        { pl: "próba badawcza / kontrolna", ua: "дослідна / контрольна проба" },
        { pl: "hipoteza", ua: "гіпотеза" },
        { pl: "powiększenie", ua: "збільшення" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Cechy organizmów", ua: "Перевірка 1. Риси організмів" },
      text: {
        pl: ["Jak w podręczniku: wymień dwie cechy, które odróżniają organizmy od rzeczy nieożywionych."],
        ua: ["Як у підручнику: назви дві риси, які відрізняють організми від неживих речей."]
      },
      task: {
        id: "bio-r1-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz dwie cechy, dzięki którym organizmy odróżnisz od nieożywionych elementów przyrody.", ua: "Познач дві риси, завдяки яким організми відрізниш від неживих елементів природи." },
        options: [
          { id: "a", label: { pl: "budowa komórkowa", ua: "клітинна будова" } },
          { id: "b", label: { pl: "wykonywanie czynności życiowych", ua: "виконання життєвих функцій" } },
          { id: "c", label: { pl: "ładny kolor", ua: "гарний колір" } },
          { id: "d", label: { pl: "twardość jak u kamienia", ua: "твердість як у каменя" } }
        ],
        answer: ["a", "b"],
        explanation: {
          pl: "Organizmy składają się z komórek i wykonują czynności życiowe. Kolor i twardość tego nie rozstrzygają.",
          ua: "Організми складаються з клітин і виконують життєві функції."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Czynności życiowe", ua: "Перевірка 2. Життєві функції" },
      task: {
        id: "bio-r1-s2",
        type: "single-choice",
        question: { pl: "Przyporządkuj czynności do opisów. Które połączenie jest w całości poprawne?", ua: "Добери функції до описів. Яке поєднання повністю правильне?" },
        options: [
          { id: "a", label: { pl: "odżywianie się — usuwanie zbędnych substancji; oddychanie — wzrost ciała; wydalanie — składniki pokarmowe", ua: "живлення — видалення зайвих речовин; дихання — ріст тіла; виділення — поживні речовини" } },
          { id: "b", label: { pl: "odżywianie się — dostarczanie składników pokarmowych; oddychanie — uwalnianie energii potrzebnej do życia; wydalanie — usuwanie szkodliwych i niepotrzebnych substancji", ua: "живлення — постачання поживних речовин; дихання — вивільнення енергії, потрібної до життя; виділення — видалення шкідливих і непотрібних речовин" } },
          { id: "c", label: { pl: "wszystkie trzy czynności oznaczają to samo co wzrost", ua: "усі три функції означають те саме, що ріст" } }
        ],
        answer: "b",
        explanation: {
          pl: "Wzrost to osobna czynność: zwiększanie rozmiarów i masy. Nie myl go z odżywianiem, oddychaniem ani wydalaniem.",
          ua: "Ріст — окрема функція: збільшення розмірів і маси."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Poziomy budowy", ua: "Перевірка 3. Рівні будови" },
      task: {
        id: "bio-r1-s3",
        type: "single-choice",
        question: { pl: "Uporządkuj od najmniejszego elementu: komórka nerwowa, tkanka nerwowa, mózgowie, układ nerwowy, organizm.", ua: "Упорядкуй від найменшого елемента: нервова клітина, нервова тканина, головний мозок, нервова система, організм." },
        options: [
          { id: "a", label: { pl: "organizm → mózgowie → komórka nerwowa → tkanka nerwowa → układ nerwowy", ua: "організм → головний мозок → нервова клітина → нервова тканина → нервова система" } },
          { id: "b", label: { pl: "komórka nerwowa → tkanka nerwowa → mózgowie → układ nerwowy → organizm", ua: "нервова клітина → нервова тканина → головний мозок → нервова система → організм" } },
          { id: "c", label: { pl: "tkanka nerwowa → organizm → komórka nerwowa → układ nerwowy → mózgowie", ua: "нервова тканина → організм → нервова клітина → нервова система → головний мозок" } }
        ],
        answer: "b",
        explanation: {
          pl: "Komórka → tkanka → narząd (mózgowie) → układ → organizm.",
          ua: "Клітина → тканина → орган (мозок) → система → організм."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Dziedzina biologii", ua: "Перевірка 4. Галузь біології" },
      task: {
        id: "bio-r1-s4",
        type: "single-choice",
        question: {
          pl: "Pani Zofia cały dzień w laboratorium ogląda drobnoustroje pod mikroskopem. Jaką dziedziną biologii się zajmuje?",
          ua: "Пані Зофія цілий день у лабораторії розглядає мікроорганізми під мікроскопом. Якою галуззю біології вона займається?"
        },
        options: [
          { id: "a", label: { pl: "zoologia", ua: "зоологія" } },
          { id: "b", label: { pl: "mikrobiologia", ua: "мікробіологія" } },
          { id: "c", label: { pl: "botanika", ua: "ботаніка" } }
        ],
        answer: "b",
        explanation: {
          pl: "Mikrobiologia bada drobnoustroje. Zoologia — zwierzęta. Botanika — rośliny.",
          ua: "Мікробіологія досліджує мікроорганізми. Зоологія — тварин. Ботаніка — рослини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Obserwacja czy doświadczenie?", ua: "Перевірка 5. Спостереження чи дослід?" },
      task: {
        id: "bio-r1-s5",
        type: "single-choice",
        question: {
          pl: "Małgosia patrzy, jak sikorka karmi pisklęta. Tomek sprawdza wpływ światła na wzrost pelargonii. Ula ogląda budowę piór. Magda sprawdza wpływ wody na kiełkowanie fasoli. Które oznaczenia są poprawne (O = obserwacja, D = doświadczenie)?",
          ua: "Малгося дивиться, як синиця годує пташенят. Томек перевіряє вплив світла на ріст пеларгонії. Уля розглядає будову пір’я. Магда перевіряє вплив води на проростання квасолі. Які позначення правильні (O = спостереження, D = дослід)?"
        },
        options: [
          { id: "a", label: { pl: "Małgosia O, Tomek D, Ula O, Magda D", ua: "Малгося O, Томек D, Уля O, Магда D" } },
          { id: "b", label: { pl: "wszystko to doświadczenia", ua: "усе це досліди" } },
          { id: "c", label: { pl: "Małgosia D, Tomek O, Ula D, Magda O", ua: "Малгося D, Томек O, Уля D, Магда O" } }
        ],
        answer: "a",
        explanation: {
          pl: "Sikorka i pióra: patrzymy, nic nie zmieniamy. Światło i woda: celowo zmieniamy jeden czynnik.",
          ua: "Синиця і пір’я: дивимося, нічого не змінюємо. Світло і вода: навмисно змінюємо один чинник."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 6. Metoda naukowa", ua: "Перевірка 6. Науковий метод" },
      task: {
        id: "bio-r1-s6",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Hipoteza jest jedną z możliwych odpowiedzi na pytanie, które stanowi problem badawczy.", ua: "Гіпотеза — одна з можливих відповідей на питання, яке становить дослідницьку проблему." } },
          { id: "b", label: { pl: "Próba badawcza to zestaw, w którym nie zmienia się żadnego czynnika.", ua: "Дослідна проба — набір, у якому не змінюють жодного чинника." } },
          { id: "c", label: { pl: "Podczas doświadczenia sprawdzana jest hipoteza.", ua: "Під час досліду перевіряють гіпотезу." } },
          { id: "d", label: { pl: "Wynik doświadczenia pozwala potwierdzić albo odrzucić hipotezę.", ua: "Результат досліду дозволяє підтвердити або відхилити гіпотезу." } }
        ],
        answer: ["a", "c", "d"],
        explanation: {
          pl: "Zdanie B opisuje próbę kontrolną, nie badawczą. W próbie badawczej zmieniamy wybrany czynnik.",
          ua: "Речення B описує контрольну пробу, не дослідну. У дослідній змінюємо вибраний чинник."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 7. Powiększenie mikroskopu", ua: "Перевірка 7. Збільшення мікроскопа" },
      task: {
        id: "bio-r1-s7",
        type: "single-choice",
        question: { pl: "Okular powiększa 10 razy, obiektyw 40 razy. Jakie powiększenie obrazu uzyskasz?", ua: "Окуляр збільшує у 10 разів, об’єктив у 40 разів. Яке збільшення зображення отримаєш?" },
        options: [
          { id: "a", label: { pl: "50", ua: "50" } },
          { id: "b", label: { pl: "400", ua: "400" } },
          { id: "c", label: { pl: "30", ua: "30" } }
        ],
        answer: "b",
        explanation: {
          pl: "Powiększenie okularu × powiększenie obiektywu: 10 × 40 = 400.",
          ua: "Збільшення окуляра × збільшення об’єктива: 10 × 40 = 400."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-poziomy-budowy.png", {
        alt: { pl: "Poziomy budowy", ua: "Рівні будови" },
        title: { pl: "Dział I w jednym rzucie.", ua: "Розділ I одним поглядом." },
        prompt: { pl: "Istniejący schemat lekcji 1: poziomy budowy organizmu." }
      }),
      text: {
        pl: [
          "Biologia bada budowę, funkcjonowanie organizmów i zależności ze środowiskiem.",
          "Organizmy: budowa komórkowa i czynności życiowe.",
          "Komórka → tkanka → narząd → układ → organizm.",
          "Obserwacja bez celowej zmiany. Doświadczenie: jeden czynnik. Próba badawcza vs kontrolna.",
          "Metoda naukowa: od obserwacji do wniosku. Mikroskop optyczny do ~1000×. Powiększenie = okular × obiektyw."
        ],
        ua: [
          "Біологія досліджує будову, функціонування організмів і залежності із середовищем.",
          "Організми: клітинна будова і життєві функції.",
          "Клітина → тканина → орган → система → організм.",
          "Спостереження без навмисної зміни. Дослід: один чинник. Дослідна проба vs контрольна.",
          "Науковий метод: від спостереження до висновку. Оптичний мікроскоп до ~1000×. Збільшення = окуляр × об’єктив."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      items: [
        { pl: "Jeśli coś było trudne — wróć do lekcji 1, 2 albo 3.", ua: "Якщо щось було важко — повернись до уроку 1, 2 або 3." },
        { pl: "Potrafię odróżnić organizm od rzeczy nieożywionej.", ua: "Можу відрізнити організм від неживої речі." },
        { pl: "Potrafię ułożyć poziomy budowy i etapy metody naukowej.", ua: "Можу укласти рівні будови і етапи наукового методу." },
        { pl: "Potrafię odróżnić obserwację od doświadczenia i obliczyć powiększenie mikroskopu.", ua: "Можу відрізнити спостереження від досліду і обчислити збільшення мікроскопа." },
        { pl: "Dział II to już budowa i czynności komórek — nie mikroskop od nowa.", ua: "Розділ II — уже будова і функції клітин, не мікроскоп знову." }
      ]
    }
  ]
};
