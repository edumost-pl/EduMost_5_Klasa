function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks, ru, ruMarks) {
  const row = {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
  if (ru) row.ru = { t: ru, mark: ruMarks || [] };
  return row;
}

const IMG = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/";

function pic(file, title) {
  return {
    kind: "image-placeholder",
    url: IMG + file,
    title: title,
    alt: title
  };
}

window.EduMostLessonContent = {
  intro: {
    image: "./img/koczownicy-polowanie.jpg",
    alt: {
      pl: "Ludzie przy polowaniu, zbieraniu owoców i ognisku — świat bez miast",
      ua: "Люди на полюванні, за збиранням плодів і біля вогнища — світ без міст",
      ru: "Люди на охоте, за сбором ягод и у костра — мир без городов"
    },
    title: {
      pl: "Wyobraź sobie świat bez miast…",
      ua: "Уяви світ без міст…",
      ru: "Представь мир без городов…"
    },
    text: {
      pl: [
        "Wyobraź sobie, że wokół nie ma domów, sklepów, samochodów ani prądu. Żeby przeżyć, ludzie musieli znaleźć jedzenie, ochronić się przed zimnem i groźnymi zwierzętami oraz nauczyć się robić narzędzia.",
        "Jak sobie radzili? Co zmieniło ich życie? I jak ludzie stopniowo przeszli od polowania i zbieractwa do pierwszych osad?",
        "Dziś cofniemy się w przeszłość i zobaczymy, jak żyli pierwsi ludzie. Po drodze nauczysz się rozpoznawać ich narzędzia, wyjaśniać, po co był ogień i mowa, oraz odróżniać koczowniczy tryb życia od osiadłego."
      ],
      ua: [
        "Уяви, що навколо немає домів, крамниць, машин і електрики. Щоб вижити, людям треба було знайти їжу, захиститися від холоду і небезпечних тварин і навчитися робити знаряддя.",
        "Як вони давали раду? Що змінило їхнє життя? І як люди поступово перейшли від полювання і збиральництва до перших поселень?",
        "Сьогодні ми вирушимо в минуле і дізнаємося, як жили перші люди. Дорогою ти навчишся впізнавати їхні знаряддя, пояснювати значення вогню і мови та відрізняти кочовий спосіб життя від осілого."
      ],
      ru: [
        "Представь, что вокруг нет домов, магазинов, машин и электричества. Чтобы выжить, людям нужно было найти еду, защититься от холода и опасных животных, научиться делать инструменты.",
        "Как они справлялись? Что изменило их жизнь? И как люди постепенно перешли от охоты и собирательства к первым поселениям?",
        "Сегодня мы отправимся в прошлое и узнаем, как жили первые люди. По пути ты научишься узнавать их орудия, объяснять значение огня и речи и отличать кочевой образ жизни от оседлого."
      ]
    },
    missionLabel: { pl: "Twoja misja", ua: "Твоя місія", ru: "Твоя миссия" },
    mission: {
      pl: "Zrozumieć, jak ludzie uczyli się przeżyć i co pomogło im zmienić swoje życie.",
      ua: "Зрозуміти, як люди вчилися виживати і що допомогло їм змінити своє життя.",
      ru: "Разобраться, как люди учились выживать и что помогло им изменить свою жизнь."
    },
    ready: {
      pl: "Gotów? Ruszamy w przeszłość!",
      ua: "Готовий? Тоді вирушаємо в минуле!",
      ru: "Готов? Тогда отправляемся в прошлое!"
    },
    button: {
      pl: "Zaczynamy podróż →",
      ua: "Почати подорож →",
      ru: "Начать путешествие →"
    },
    short: {
      pl: "Powtórka przed sprawdzianem: narzędzia, ogień, mowa oraz tryb koczowniczy i osiadły.",
      ua: "Повторення перед sprawdzianem: знаряддя, вогонь, мова, кочовий і осілий спосіб життя.",
      ru: "Повторение перед sprawdzianem: орудия, огонь, речь, кочевой и оседлый образ жизни."
    }
  },
  modules: [
    { id: "umiejetnosci", title: { pl: "1. Umiejętności", ua: "1. Вміння", ru: "1. Умения · с. 4–5" } },
    { id: "przodkowie", title: { pl: "2. Mapa", ua: "2. Карта", ru: "2. Карта · с. 5" } },
    { id: "tryby", title: { pl: "3. Dwa tryby", ua: "3. Два способи", ru: "3. Два образа жизни · с. 6" } },
    { id: "neolit", title: { pl: "4. Neolit", ua: "4. Неоліт", ru: "4. Неолит" } },
    { id: "epoki", title: { pl: "5. Epoki", ua: "5. Доби", ru: "5. Эпохи · с. 6" } },
    { id: "powtorka", title: { pl: "6. Powtórka", ua: "6. Повторення", ru: "6. Повторение" } }
  ],
  blocks: [
    {
      type: "goal",
      module: "umiejetnosci",
      heading: { pl: "Czego się nauczysz w tym bloku?", ua: "Чого навчишся в цьому блоці?", ru: "Чему научишься в этом блоке?" },
      text: {
        pl: ["Dawni ludzie żywili się tym, co uzbierali albo upolowali. Szukając pożywienia, wędrowali."],
        ua: ["Давні люди живилися тим, що зібрали або вполювали. Шукаючи поживу, мандрували."],
        ru: ["Раньше люди искали еду в природе. Когда рядом заканчивались ягоды или уходили животные, группа шла дальше."]
      },
      items: [
        { pl: "nazwać trzy wielkie odkrycia: narzędzia, ogień, mowa", ua: "назвати три великі відкриття: знаряддя, вогонь, мова", ru: "назвать три больших открытия: орудия, огонь, речь" },
        { pl: "powiedzieć, skąd brali jedzenie: zbieractwo i myślistwo", ua: "сказати, звідки брали їжу: збиральництво і мисливство", ru: "сказать, откуда брали еду: собирательство и охота" }
      ]
    },
    {
      type: "concept",
      module: "umiejetnosci",
      heading: { pl: "Człowiek rozumny", ua: "Людина розумна", ru: "Человек разумный" },
      text: {
        pl: [
          ["", em("Człowiek rozumny"), " to my. W szkole mówimy, że pojawił się około 200 tysięcy lat temu."],
          "Polskie zdanie ma swój szyk: kto? + co zrobił? + gdzie? + kiedy?"
        ],
        ua: [
          ["", em("Людина розумна"), " — це ми. У школі кажемо, що вона з’явилася близько 200 тисяч років тому."],
          "Польське речення має свій порядок: хто? + що зробив? + де? + коли?"
        ],
        ru: [
          [em("Człowiek rozumny"), " — это человек разумный, то есть мы. В школе говорят: он появился около 200 тысяч лет назад."],
          "Польское предложение строится так: кто? → что сделал? → где? → когда?",
          "Слова из задания: człowiek rozumny (кто), pojawił się (появился), na świecie (в мире), około 200 tysięcy lat temu (около 200 тысяч лет назад)."
        ]
      },
      task: {
        id: "h01-z4-kto",
        type: "single-choice",
        level: "A",
        coach: true,
        question: {
          pl: "Kto pojawił się około 200 tysięcy lat temu?",
          ua: "Хто з’явився близько 200 тисяч років тому?",
          ru: "Кто появился около 200 тысяч лет назад?"
        },
        options: [
          { id: "a", label: { pl: "człowiek rozumny", ua: "людина розумна", ru: "человек разумный" } },
          { id: "b", label: { pl: "pierwsze miasto", ua: "перше місто", ru: "первый город" } },
          { id: "c", label: { pl: "dymarka", ua: "димарка", ru: "димарка" } }
        ],
        answer: "a",
        hint: { pl: "To nie piec i nie miasto. To ludzie tacy jak my.", ua: "Це не піч і не місто. Це люди, як ми.", ru: "Это не печь и не город. Это люди, как мы." },
        explanation: { pl: "Człowiek rozumny — około 200 tysięcy lat temu.", ua: "Людина розумна — близько 200 тисяч років тому.", ru: "Человек разумный — около 200 тысяч лет назад. Города и димарка появились гораздо позже." }
      }
    },
    {
      type: "practice",
      module: "umiejetnosci",
      heading: { pl: "Zeszyt, strona 4, zadanie 1", ua: "Зошит, сторінка 4, завдання 1", ru: "Тетрадь, страница 4, задание 1" },
      zeszyt: {
        id: "h01-z4-1",
        lead: {
          pl: ["Otwórz zeszyt ćwiczeń, strona 4, zadanie 1: „Ułóż zdanie z podanych wyrazów”. Napisz zdanie w zeszycie. Nie zaglądaj niżej, dopóki sam nie spróbujesz."],
          ua: ["Відкрий робочий зошит, сторінка 4, завдання 1: «Ułóż zdanie z podanych wyrazów». Напиши речення в зошиті. Не дивись нижче, поки сам не спробуєш."],
          ru: ["Теперь открой рабочую тетрадь на странице 4 и выполни задание 1. Составь предложение из слов в рамке. Напиши его в тетради. Ответ ниже откроется только после твоей попытки."]
        },
        answers: [
          {
            label: { pl: "Zdanie", ua: "Речення", ru: "Предложение" },
            text: {
              pl: ["Człowiek rozumny pojawił się na świecie około 200 tysięcy lat temu."],
              ua: ["Człowiek rozumny pojawił się na świecie około 200 tysięcy lat temu."],
              ru: ["Człowiek rozumny pojawił się na świecie około 200 tysięcy lat temu."]
            },
            why: {
              pl: ["Kto: człowiek rozumny. Co zrobił: pojawił się. Gdzie: na świecie. Kiedy: około 200 tysięcy lat temu."],
              ua: ["Хто: człowiek rozumny. Що зробив: pojawił się. Де: na świecie. Коли: około 200 tysięcy lat temu."],
              ru: ["Кто: człowiek rozumny. Что сделал: pojawił się. Где: na świecie. Когда: około 200 tysięcy lat temu. Слово około значит «около»: это не точный день, а школьная дата."]
            }
          }
        ]
      }
    },
    {
      type: "concept",
      module: "umiejetnosci",
      heading: { pl: "Trzy wielkie odkrycia praludzi", ua: "Три великі відкриття пралюдей", ru: "Три больших открытия" },
      visual: pic("009.png", { pl: "Pięściak — pierwsze uniwersalne narzędzie", ua: "Рубило — перше універсальне знаряддя", ru: "Рубило — первое универсальное орудие" }),
      text: {
        pl: [
          ["Proste narzędzie: ", em("pięściak"), " z kamienia — ostre krawędzie, mieści się w dłoni, służył m.in. do cięcia skór (ok. 1,5 mln lat)."],
          ["**Ogień**: ciepło, pieczenie mięsa i odstraszanie zwierząt."],
          [em("Mowa"), ": sprawne porozumiewanie się i szybka wymiana informacji w grupie."]
        ],
        ua: [
          ["Просте знаряддя: ", em("рубило"), " з каменю — гострі краї, вміщається в долоні, служило зокрема, щоб різати шкіри (бл. 1,5 млн років)."],
          ["Вогонь: тепло, печення м’яса і відлякування звірів."],
          [em("Мова"), ": вправне порозуміння і швидкий обмін відомостями в групі."]
        ],
        ru: [
          ["Простое орудие — ", em("pięściak"), " (рубило). Это камень с острыми краями. Он помещается в ладонь. Им резали шкуры. В учебнике: около 1,5 миллиона лет назад."],
          "**Огонь** давал тепло, им жарили мясо и отпугивали зверей.",
          ["Речь (", em("mowa"), ") помогала быстро сказать группе: где еда и где опасность."]
        ]
      },
      items: [
        { pl: "pożywienie: zbieractwo i myślistwo", ua: "їжа: збиральництво і мисливство", ru: "еда: собирательство и охота" },
        { pl: "umiejętności: ogień i mowa", ua: "вміння: вогонь і мова", ru: "умения: огонь и речь" },
        { pl: "narzędzia: pięściak i oszczep z kamiennym grotem", ua: "знаряддя: рубило і спис із кам’яним наконечником", ru: "орудия: рубило и копьё с каменным наконечником" }
      ]
    },
    {
      type: "visual",
      module: "umiejetnosci",
      heading: { pl: "Polowanie i zbieractwo", ua: "Полювання і збиральництво", ru: "Охота и собирательство" },
      visual: pic("001.png", { pl: "Grupa myśliwych i zbieraczy", ua: "Група мисливців і збирачів", ru: "Группа охотников и собирателей" }),
      text: {
        pl: [
          "Zbierali leśne owoce, korzonki, ślimaki i ptasie jaja. Polowali w grupach — zasadzka albo osaczenie zwierzęcia, które odłączyło się od stada. Broń: oszczep z kamiennym grotem.",
          "Jedzenie zależy od pory roku i szczęścia na polowaniu. Dlatego grupa stale wędrowała: gdy zwierzyna i jagody się kończyły, szła dalej."
        ],
        ua: [
          "Збирали лісові плоди, корінці, равликів і пташині яйця. Полювали групами — засідка або оточення звіра, що відбився від стада. Зброя: спис із кам’яним наконечником.",
          "Їжа залежить від пори року і вдачі на полюванні. Тому група постійно мандрувала: коли звірина і ягоди кінчалися, йшла далі."
        ],
        ru: [
          "Люди собирали лесные плоды, корешки, улиток и птичьи яйца. Охотились группой: устраивали засаду или окружали зверя, который отстал от стада. Оружие — копьё с каменным наконечником.",
          "Еда зависела от времени года и от удачи на охоте. Поэтому группа не жила на одном месте."
        ]
      }
    },
    {
      type: "visual",
      module: "umiejetnosci",
      heading: { pl: "Ogień zmieniał świat", ua: "Вогонь змінював світ", ru: "Огонь менял жизнь" },
      visual: pic("002.png", { pl: "Ognisko w jaskini", ua: "Вогнище в печері", ru: "Костёр в пещере" }),
      text: {
        pl: [
          ["Umiejętność rozpalania ", em("ognia"), " dała trzy konkretne korzyści."],
          "Ciepło — można było mieszkać w chłodniejszych stronach świata. Pieczenie mięsa — łatwiej zjeść i bezpieczniej niż surowe. Ogień odstraszał drapieżniki przy jaskini.",
          "To nie magia. To narzędzie przetrwania."
        ],
        ua: [
          ["Вміння розпалювати ", em("вогонь"), " дало три конкретні користі."],
          "Тепло — можна було жити в холодніших краях. Печення м’яса — легше з’їсти і безпечніше, ніж сире. Вогонь відлякував хижаків біля печери.",
          "Це не магія. Це знаряддя виживання."
        ],
        ru: [
          "Огонь дал три понятные пользы.",
          "Тепло — можно было жить в более холодных местах. Жареное мясо легче есть, чем сырое. Огонь отпугивал хищников у пещеры.",
          "Это не волшебство. Это умение, которое помогало выжить."
        ]
      }
    },
    {
      type: "practice",
      module: "umiejetnosci",
      heading: { pl: "Po co była mowa?", ua: "Навіщо була мова?", ru: "Зачем была речь?" },
      task: {
        id: "h01-mowa",
        type: "single-choice",
        level: "A",
        coach: true,
        question: {
          pl: "Do czego służyła mowa w grupie pierwszych ludzi?",
          ua: "Для чого служила мова в групі перших людей?",
          ru: "Зачем первым людям была речь в группе?"
        },
        options: [
          { id: "a", label: { pl: "tylko do ozdoby opowieści", ua: "лише для оздоби оповідей", ru: "только чтобы украсить рассказ" } },
          { id: "b", label: { pl: "do szybkiej wymiany informacji w grupie", ua: "для швидкого обміну відомостями в групі", ru: "чтобы быстро передавать сведения в группе" } },
          { id: "c", label: { pl: "zamiast ognia i narzędzi", ua: "замість вогню і знарядь", ru: "вместо огня и орудий" } }
        ],
        answer: "b",
        hint: {
          pl: "Mowa nie zastępuje pięściaka. Pomaga powiedzieć innym, co się dzieje.",
          ua: "Мова не замінює рубило. Допомагає сказати іншим, що діється.",
          ru: "Речь не заменяет рубило. Она помогает сказать другим, что происходит."
        },
        explanation: {
          pl: "Mowa = sprawne porozumiewanie się i szybka wymiana informacji.",
          ua: "Мова = вправне порозуміння і швидкий обмін відомостями.",
          ru: "Речь нужна, чтобы группа быстро понимала друг друга. Школьное слово: mowa."
        }
      }
    },
    {
      type: "problem",
      module: "umiejetnosci",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь", ru: "Ответ вслух" },
      prompt: {
        pl: "Powiedz na głos: jakie korzyści dała człowiekowi umiejętność wykorzystania ognia?",
        ua: "Скажи вголос: яку користь дало людині вміння користуватися вогнем?",
        ru: "Скажи вслух по-польски: какую пользу дал огонь? Потом выбери верное предложение."
      },
      text: {
        pl: [
          "Podpowiedź: pomyśl o zimnie, o mięsie i o tym, czy jaskinia bez ognia jest przyjemna.",
          "Powiedz 2–4 zdania. Potem wybierz zdanie, które najlepiej to ujmuje."
        ],
        ua: [
          "Підказка: подумай про холод, про м’ясо і про те, чи печера без вогню приємна.",
          "Скажи 2–4 речення. Потім вибери речення, яке це найкраще передає."
        ],
        ru: [
          "Сначала скажи своими словами: тепло, еда, защита.",
          "Короткое школьное предложение: Ogień dawał ciepło, pozwalał piec mięso i odstraszał zwierzęta."
        ]
      },
      task: {
        id: "h01-oral",
        type: "single-choice",
        level: "B",
        coach: true,
        question: {
          pl: "Które zdanie najlepiej zbiera korzyści ognia?",
          ua: "Яке речення найкраще збирає користь вогню?",
          ru: "Какое предложение лучше всего собирает пользу огня?"
        },
        options: [
          { id: "a", label: { pl: "Ogień służył tylko do ozdoby jaskini", ua: "Вогонь служив лише окрасою печери", ru: "Огонь служил только украшением пещеры" } },
          { id: "b", label: { pl: "Dawał ciepło, pozwalał piec mięso i odstraszał zwierzęta", ua: "Давав тепло, дозволяв пекти м’ясо і відлякував звірів", ru: "Давал тепло, позволял жарить мясо и отпугивал зверей" } },
          { id: "c", label: { pl: "Zastąpił rolnictwo i hodowlę", ua: "Замінив рільництво і тваринництво", ru: "Заменил земледелие и скотоводство" } }
        ],
        answer: "b",
        hint: {
          pl: "Trzy korzyści z infografiki: ciepło, pieczenie, ochrona przed zwierzętami.",
          ua: "Три користі з інфографіки: тепло, печення, захист від звірів.",
          ru: "Три пользы: тепло, жарка мяса, защита от зверей."
        },
        explanation: {
          pl: "Ogień = ciepło + pieczone jedzenie (+ ochrona). Nie mylić z rewolucją neolityczną.",
          ua: "Вогонь = тепло + печена їжа (+ захист). Не плутати з неолітичною революцією.",
          ru: "Огонь — это тепло, жареная еда и защита. Это ещё не земледелие."
        }
      }
    },
    {
      type: "summary",
      module: "umiejetnosci",
      track: "both",
      heading: { pl: "Co trzeba zapamiętać", ua: "Що треба запам’ятати", ru: "Что нужно запомнить" },
      rule: {
        pl: ["Ogień dawał ciepło, pozwalał piec mięso i odstraszał zwierzęta."],
        ua: ["Вогонь давав тепло, дозволяв пекти м’ясо і відлякував звірів."],
        ru: ["Скажи так: Ogień dawał ciepło, pozwalał piec mięso i odstraszał zwierzęta."]
      },
      items: [
        mark(
          "Narzędzia, ogień i mowa. Jedzenie: zbieractwo i myślistwo.",
          ["Narzędzia", "ogień", "mowa", "zbieractwo", "myślistwo"],
          "Знаряддя, вогонь і мова. Їжа: збиральництво і мисливство.",
          ["Знаряддя", "вогонь", "мова", "збиральництво", "мисливство"],
          "Орудия, огонь и речь. Еда: собирательство и охота.",
          ["Орудия", "огонь", "речь"]
        )
      ],
      task: {
        id: "h01-ogien",
        type: "true-false",
        level: "A",
        coach: true,
        question: {
          pl: "Ogień pomógł ludziom mieszkać w chłodniejszych stronach świata i piec mięso — prawda czy fałsz?",
          ua: "Вогонь допоміг людям жити в холодніших краях і пекти м’ясо — правда чи неправда?",
          ru: "Огонь помог людям жить в более холодных местах и жарить мясо. Правда или ложь?"
        },
        answer: true,
        hint: {
          pl: "Pomyśl o cieple i o jedzeniu.",
          ua: "Подумай про тепло і про їжу.",
          ru: "Вспомни про тепло и про еду."
        },
        explanation: {
          pl: "To dwie korzyści z podręcznika: ciepło (zasięg osadnictwa) i pieczenie mięsa. Trzecia: ogień odstraszał zwierzęta.",
          ua: "Це дві користі з підручника: тепло (дальше розселення) і печення м’яса. Третя: вогонь відлякував звірів.",
          ru: "Две пользы из учебника: тепло и жарка мяса. Третья: огонь отпугивал зверей."
        }
      }
    },

    {
      type: "goal",
      module: "tryby",
      heading: { pl: "Dwa sposoby życia", ua: "Два способи життя", ru: "Два образа жизни" },
      text: {
        pl: ["To nie dwa „lepsi i gorsi ludzie”. To dwa sposoby zdobycia jedzenia."],
        ua: ["Це не «кращі і гірші люди». Це два способи здобути їжу."],
        ru: ["Это не «хорошие и плохие люди». Это два способа добывать еду."]
      },
      items: [
        { pl: "wyjaśnić koczowniczy tryb życia", ua: "пояснити кочовий спосіб життя", ru: "объяснить кочевой образ жизни" },
        { pl: "wyjaśnić osiadły tryb życia i nazwać mieszkania", ua: "пояснити осілий спосіб життя і назвати житло", ru: "объяснить оседлый образ жизни и назвать жилища" }
      ]
    },
    {
      type: "observe",
      module: "tryby",
      heading: { pl: "Koczowniczy tryb życia", ua: "Кочовий спосіб життя", ru: "Кочевой образ жизни" },
      text: {
        pl: [
          "Wyobraź sobie grupę liczącą kilkadziesiąt osób. Nie ma sklepu. Jest trop zwierzyny i sezon na jagody.",
          ["Taki wędrowny tryb życia nazywamy ", em("koczowniczym"), ". Nie budowali stałych domów: ", em("szałasy"), " z gałęzi albo ", em("jaskinie"), "."]
        ],
        ua: [
          "Уяви групу з кількох десятків осіб. Немає крамниці. Є слід звіра і сезон ягід.",
          ["Такий мандрівний спосіб життя називаємо ", em("кочовим"), ". Не будували сталих хат: ", em("курені"), " з гілок або ", em("печери"), "."]
        ],
        ru: [
          "Представь группу в несколько десятков человек. Магазина нет. Есть след зверя и сезон ягод.",
          ["Такой образ жизни называется ", em("koczowniczy tryb życia"), ". Постоянных домов не было: шалаш из веток (", em("szałas"), ") или пещера (", em("jaskinia"), ")."]
        ]
      }
    },
    {
      type: "comparison",
      module: "tryby",
      heading: { pl: "Koczownicy i osadnicy", ua: "Кочівники і осілі", ru: "Кочевники и оседлые" },
      visual: {
        kind: "flow",
        steps: [
          { title: { pl: "Koczownicy", ua: "Кочівники", ru: "Кочевники" }, text: { pl: "zbieractwo i łowy → szałas lub jaskinia", ua: "збиральництво і лови → курінь або печера", ru: "собирательство и охота → шалаш или пещера" } },
          { title: { pl: "Osadnicy", ua: "Осілі", ru: "Оседлые" }, text: { pl: "uprawa i hodowla → ziemianka", ua: "рільництво і тваринництво → землянка", ru: "земледелие и скотоводство → землянка" } }
        ]
      },
      items: [
        { pl: "Koczowniczy: zbieractwo i myślistwo → wędrowka za pożywieniem → szałas lub jaskinia", ua: "Кочовий: збиральництво і мисливство → мандрівка за поживою → курінь або печера", ru: "Кочевой: собирательство и охота → переход за едой → шалаш или пещера" },
        { pl: "Osiadły: uprawa zbóż i hodowla → jedzenie przez rok przy polu → stała osada (np. ziemianki z drewna i gliny)", ua: "Осілий: рільництво і тваринництво → їжа впродовж року біля поля → стале поселення (напр. землянки з дерева і глини)", ru: "Оседлый: земледелие и скотоводство → еда весь год у поля → постоянное поселение (землянки из дерева и глины)" }
      ]
    },
    {
      type: "visual",
      module: "tryby",
      heading: { pl: "Jak wyglądała pierwsza osada?", ua: "Як виглядало перше поселення?", ru: "Как выглядело первое поселение?" },
      visual: pic("003.png", { pl: "Ziemianki nad rzeką", ua: "Землянки над річкою", ru: "Землянки у реки" }),
      text: {
        pl: [
          ["Pierwsze chaty to często ", em("ziemianki"), ": częściowo wykopane w ziemi, ściany z drewna i gliny, dach ze słomy albo trzciny. Warunki były trudne, ale dawały stałe schronienie."],
          "Osady stawiano nad rzeką albo jeziorem — woda do picia i do pól. Jaskinia to schronienie koczowników; ziemianka należy do trybu osiadłego.",
          "Ciekawostka z Polski: w jaskini niedaleko Nowego Targu znaleziono bumerang z kła mamuta sprzed ok. 30 tysięcy lat."
        ],
        ua: [
          ["Перші хати — часто ", em("землянки"), ": частково вкопані в землю, стіни з дерева і глини, дах із соломи або очерету. Умови були важкі, але давали сталий прихисток."],
          "Поселення ставили над річкою або озером — вода пити і поливати поле. Печера — сховок кочівників; землянка належить до осілого способу.",
          "Цікавинка з Польщі: у печері недалеко Нового Таргу знайшли бумеранг з ікла мамонта віком бл. 30 тисяч років."
        ],
        ru: [
          ["Первые дома часто были ", em("ziemianki"), " — землянками. Их частично выкапывали в земле. Стены делали из дерева и глины, крышу — из соломы или тростника."],
          "Поселения ставили у реки или озера: вода для питья и для полей. Пещера — укрытие кочевников. Землянка — у оседлых.",
          "Дополнительно, не для обязательного ответа: в пещере у Нового Тарга нашли бумеранг из бивня мамонта возрастом около 30 тысяч лет."
        ]
      }
    },
    {
      type: "check",
      module: "tryby",
      track: "both",
      heading: { pl: "Co trzeba zapamiętać", ua: "Що треба запам’ятати", ru: "Что нужно запомнить" },
      rule: {
        pl: ["Koczownicy: jaskinie i szałasy. Osadnicy: ziemianki."],
        ua: ["Кочівники: печери і курені. Осілі: землянки."],
        ru: ["Пещера — у кочевников. Землянка — у оседлых. Скажи: Ludzie osiadli mieszkali w ziemiankach."]
      },
      task: {
        id: "h01-kn-ziemianki",
        type: "single-choice",
        level: "A",
        coach: true,
        question: {
          pl: "Ludzie prowadzący osiadły tryb życia zamieszkiwali głównie:",
          ua: "Люди з осілим способом життя жили переважно:",
          ru: "Люди с оседлым образом жизни жили в основном:"
        },
        options: [
          { id: "a", label: { pl: "jaskinie", ua: "печери", ru: "в пещерах" } },
          { id: "b", label: { pl: "ziemianki", ua: "землянки", ru: "в землянках" } },
          { id: "c", label: { pl: "piramidy", ua: "піраміди", ru: "в пирамидах" } }
        ],
        answer: "b",
        hint: {
          pl: "Jaskinia chroni koczowników. Osadnicy budują chaty częściowo wkopane w ziemię.",
          ua: "Печера ховає кочівників. Осілі будують хати, частково вкопані в землю.",
          ru: "Пещера укрывает кочевников. Оседлые строят дома, частично вкопанные в землю."
        },
        explanation: {
          pl: "Karta pracy: osiadły tryb = ziemianki. Jaskinie to schronienie wędrowców.",
          ua: "Картка праці: осілий спосіб = землянки. Печери — сховок мандрівників.",
          ru: "Оседлый образ жизни — землянки. Пещеры — укрытие тех, кто кочует."
        }
      }
    },

    {
      type: "concept",
      module: "neolit",
      timelineYear: 10000,
      heading: { pl: "Rewolucja neolityczna", ua: "Неолітична революція", ru: "Неолитическая революция" },
      formula: "ok. 10 000 p.n.e.",
      visual: {
        kind: "flow",
        steps: [
          { title: { pl: "Przyczyna", ua: "Причина", ru: "Причина" }, text: { pl: "uprawa ziemi i hodowla", ua: "обробіток землі і тваринництво", ru: "земледелие и разведение животных" } },
          { title: { pl: "Zmiana", ua: "Зміна", ru: "Перемена" }, text: { pl: "zostają przy polu", ua: "лишаються біля поля", ru: "остаются у поля" } },
          { title: { pl: "Skutek", ua: "Наслідок", ru: "Следствие" }, text: { pl: "osiadły tryb życia", ua: "осілий спосіб життя", ru: "оседлый образ жизни" } }
        ]
      },
      text: {
        pl: [
          "Z czasem ludzie zauważyli: z ziaren dzikiego zboża wyrastają nowe rośliny. Nauczyli się je siać i zbierać plony. Tak narodziło się rolnictwo.",
          "Żeby doglądać pola, trzeba zostać. Koczownicy stają się osadnikami.",
          ["To przejście z trybu koczowniczego na ", em("osiadły"), " dzięki uprawie ziemi i hodowli zwierząt nazywamy ", em("rewolucją neolityczną"), "."],
          "Około 9–10 tysięcy lat temu łapano i oswajano m.in. kozy, owce, osły, bydło i konie. ",
          [em("Hodowla"), " dawała mięso, skóry, wełnę i pomoc w pracy — nie trzeba było polować za każdym posiłkiem."],
          ["Na polach siano proso, pszenicę i jęczmień. Ziarna rozcierano dwoma kamieniami — pierwsze żarna. Z mąki i wody pieczono placek na rozgrzanym głazie."]
        ],
        ua: [
          "З часом люди помітили: із зерен дикого збіжжя виростають нові рослини. Навчилися їх сіяти і збирати врожай. Так народилося рільництво.",
          "Щоб доглядати поле, треба лишитися. Кочівники стають осілими.",
          ["Цей перехід від кочового способу до ", em("осілого"), " завдяки обробітку землі і тваринництву називаємо ", em("неолітичною революцією"), "."],
          "Близько 9–10 тисяч років тому ловили і приручали зокрема кіз, овець, віслюків, худобу і коней. ",
          [em("Тваринництво"), " давало м’ясо, шкіри, вовну і допомогу в праці — не треба було полювати на кожну їжу."],
          ["На полях сіяли просо, пшеницю і ячмінь. Зерна розтирали двома каменями — перші жорна. З борошна і води пекли корж на розпеченому камені."]
        ],
        ru: [
          "Люди заметили: из зерна дикого злака вырастает новое растение. Они научились сеять и собирать урожай. Так появилось земледелие.",
          "Поле нельзя унести с собой. За ним нужно остаться. Кочевники становятся оседлыми.",
          [em("Rewolucja neolityczna"), " — переход к земледелию и скотоводству. Из-за него распространился оседлый образ жизни. Школьная дата: около 10 000 лет до н.э."],
          "Около 9–10 тысяч лет назад приручали коз, овец, ослов, крупный скот и лошадей.",
          "Скот давал мясо, шкуры, шерсть и помощь в работе. Не нужно было охотиться ради каждой еды.",
          "На полях сеяли просо, пшеницу и ячмень. Зёрна растирали двумя камнями — первые жернова. Из муки и воды пекли лепёшку на горячем камне."
        ]
      }
    },
    {
      type: "algorithm",
      module: "neolit",
      heading: { pl: "Przyczyna → wydarzenie → skutek", ua: "Причина → подія → наслідок", ru: "Причина → событие → следствие" },
      reveal: true,
      text: {
        pl: ["Rewolucja neolityczna to nie „lepszy charakter ludzi”. To zmiana sposobu życia."],
        ua: ["Неолітична революція — не «кращий характер людей». Це зміна способу життя."],
        ru: ["Это не «люди стали лучше». Это другой способ жить."]
      },
      steps: [
        { formula: "PRZYCZYNA", text: { pl: "Ludzie nauczyli się uprawiać ziemię i hodować zwierzęta.", ua: "Люди навчилися обробляти землю і розводити тварин.", ru: "Люди научились возделывать землю и разводить животных." } },
        { formula: "WYDARZENIE", text: { pl: "Powstają stałe osady przy polach (tryb osiadły).", ua: "Виникають сталі поселення біля полів (осілий спосіб життя).", ru: "У полей появляются постоянные поселения. Это оседлый образ жизни." } },
        { formula: "SKUTEK", text: { pl: "Jedzenie jest bardziej przewidywalne przez rok. Można budować trwalsze chaty i żyć większymi grupami.", ua: "Їжа передбачуваніша впродовж року. Можна будувати тривкіші хати і жити більшими групами.", ru: "Еда на год становится более предсказуемой. Можно строить более прочные дома и жить большими группами." } }
      ]
    },
    {
      type: "mistake",
      module: "neolit",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді", ru: "Найди ошибку" },
      claim: {
        pl: "„Rewolucja neolityczna to moment, gdy ludzie wynaleźli żelazo i zbudowali huty.”",
        ua: "«Неолітична революція — це момент, коли люди винайшли залізо і збудували заводи.»",
        ru: "«Неолитическая революция — это момент, когда люди изобрели железо и построили заводы.»"
      },
      text: {
        pl: [
          "Nie. Rewolucja neolityczna to rolnictwo, hodowla i osiadły tryb życia (ok. 10 000 p.n.e.).",
          "Żelazo i dymarki to dużo później (ok. 1200 p.n.e.). Huta elektryczna — czasy współczesne."
        ],
        ua: [
          "Ні. Неолітична революція — це рільництво, тваринництво і осілий спосіб життя (бл. 10 000 до н.е.).",
          "Залізо і димарки — набагато пізніше (бл. 1200 до н.е.). Електричний завод — сучасність."
        ],
        ru: [
          "Нет. Неолитическая революция — это земледелие, скотоводство и оседлая жизнь. Около 10 000 лет до н.э.",
          "Железо и димарка — гораздо позже, около 1200 года до н.э. Электрический завод — наше время."
        ]
      }
    },
    {
      type: "guided-practice",
      module: "neolit",
      track: "both",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною", ru: "Сделай вместе со мной" },
      text: {
        pl: ["Pytanie z podręcznika: dzięki czemu ludzie zaczęli prowadzić osiadły tryb życia?"],
        ua: ["Питання з підручника: завдяки чому люди почали вести осілий спосіб життя?"],
        ru: ["Вопрос из учебника: благодаря чему люди стали жить на одном месте?"]
      },
      rule: {
        pl: ["Dzięki uprawie ziemi i hodowli zwierząt."],
        ua: ["Завдяки обробітку землі і тваринництву."],
        ru: ["Короткий ответ, который можно сказать в школе: Dzięki uprawie ziemi i hodowli zwierząt."]
      },
      task: {
        id: "h01-guided-osiadly",
        type: "single-choice",
        level: "A",
        coach: true,
        question: {
          pl: "Co pozwoliło ludziom zostać w jednym miejscu?",
          ua: "Що дозволило людям лишитися в одному місці?",
          ru: "Что позволило людям остаться на одном месте?"
        },
        options: [
          { id: "a", label: { pl: "wynalezienie alfabetu i szkół", ua: "винайдення алфавіту і шкіл", ru: "изобретение алфавита и школ" } },
          { id: "b", label: { pl: "uprawa ziemi i hodowla zwierząt", ua: "обробіток землі і тваринництво", ru: "возделывание земли и разведение животных" } },
          { id: "c", label: { pl: "wyłącznie polowanie na mamuty", ua: "лише полювання на мамонтів", ru: "только охота на мамонтов" } }
        ],
        answer: "b",
        hint: {
          pl: "Pole i stado trzeba doglądać przez sezony — nie da się ich zabrać w ciągłą wędrówkę tak jak łuk.",
          ua: "Поле і стадо треба доглядати сезонами — їх не забереш у постійну мандрівку так, як лук.",
          ru: "Поле и стадо нужно смотреть весь сезон. Их не унесёшь с собой, как лук."
        },
        explanation: {
          pl: "Rolnictwo i hodowla = rewolucja neolityczna = tryb osiadły.",
          ua: "Рільництво і тваринництво = неолітична революція = осілий спосіб.",
          ru: "Земледелие и скотоводство — это неолитическая революция. Из-за них появился оседлый образ жизни."
        }
      }
    },
    {
      type: "problem",
      module: "neolit",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь", ru: "Письменный ответ" },
      prompt: {
        pl: "Wyjaśnij krótko, na czym polegała rewolucja neolityczna.",
        ua: "Поясни коротко, у чому полягала неолітична революція.",
        ru: "Коротко объясни, в чём была неолитическая революция. Впиши польские слова."
      },
      task: {
        id: "h01-write",
        type: "input-text",
        level: "B",
        coach: true,
        question: {
          pl: "Wpisz dwa słowa-klucze po polsku, połączone spójnikiem i: uprawa i …",
          ua: "Введи два ключові слова польською, зі сполучником i: uprawa i …",
          ru: "Впиши по-польски два ключевых слова через i. Например: uprawa i …"
        },
        answer: [
          "uprawa i hodowla",
          "hodowla i uprawa",
          "rolnictwo i hodowla",
          "hodowla i rolnictwo",
          "рільництво і тваринництво",
          "тваринництво і рільництво"
        ],
        hint: {
          pl: "To nie żelazo. To to, co je się z pola i ze stada.",
          ua: "Це не залізо. Це те, що їдять з поля і зі стада.",
          ru: "Это не железо. Это то, что едят с поля и от стада."
        },
        explanation: {
          pl: "Rewolucja neolityczna = uprawa ziemi i hodowla zwierząt → osiadły tryb życia.",
          ua: "Неолітична революція = обробіток землі і тваринництво → осілий спосіб життя.",
          ru: "Неолитическая революция = uprawa ziemi i hodowla zwierząt. Дальше люди остаются жить на одном месте."
        }
      }
    },
    {
      type: "check",
      module: "neolit",
      heading: { pl: "Data z podręcznika", ua: "Дата з підручника", ru: "Дата из учебника" },
      task: {
        id: "h01-check-neolit",
        type: "input-number",
        level: "B",
        coach: true,
        question: {
          pl: ["Około którego roku p.n.e. narodziło się rolnictwo? Wpisz liczbę: ", em("10000"), "."],
          ua: ["Близько якого року до н.е. народилося рільництво? Введи число: ", em("10000"), "."],
          ru: ["Около какого года до н.э. появилось земледелие? Впиши число: ", em("10000"), "."]
        },
        answer: 10000,
        hint: {
          pl: "W podręczniku: około 10 tysięcy lat p.n.e.",
          ua: "У підручнику: близько 10 тисяч років до н.е.",
          ru: "В учебнике: около 10 тысяч лет до н.э."
        },
        explanation: {
          pl: "Ok. 10 000 p.n.e. — początek rolnictwa i rewolucji neolitycznej (data umowna, szkolna).",
          ua: "Бл. 10 000 до н.е. — початок рільництва і неолітичної революції (умовна шкільна дата).",
          ru: "Около 10 000 лет до н.э. — начало земледелия. Это школьная, условная дата."
        }
      }
    },

    {
      type: "concept",
      module: "epoki",
      timelineYear: 1200,
      heading: { pl: "Od kamienia do żelaza", ua: "Від каменю до заліза", ru: "От камня к железу" },
      text: {
        pl: [
          "Najpierw broń i narzędzia robiono z kamienia — ",
          ["to ", em("epoka kamienia"), ". Kamień trudno obrabiać, ostrze szybko się tępi."],
          "Potem wytapiano miedź, a z miedzi i cyny — twardszy ",
          [em("brąz"), ". To epoka brązu: lepsze siekiery, groty, ozdoby."],
          ["Około ", em("1200 p.n.e."), " opanowano wytop ", em("żelaza"), " — twardszego od brązu. Epoka żelaza trwa do dziś: wciąż używamy żelaza i stali."]
        ],
        ua: [
          "Спочатку зброю і знаряддя робили з каменю — ",
          ["це ", em("доба каменю"), ". Камінь важко обробляти, лезо швидко тупиться."],
          "Потім виплавляли мідь, а з міді і олова — твердішу ",
          [em("бронзу"), ". Це доба бронзи: кращі сокири, наконечники, прикраси."],
          ["Близько ", em("1200 до н.е."), " опанували виплавку ", em("заліза"), " — твердішого за бронзу. Доба заліза триває досі: ми досі використовуємо залізо і сталь."]
        ],
        ru: [
          "Сначала оружие и орудия делали из камня. Это ",
          [em("epoka kamienia"), ". Камень трудно обрабатывать, лезвие быстро тупится."],
          "Потом выплавляли медь. Из меди и олова получали более твёрдую ",
          [em("бронзу"), ". Это эпоха бронзы: лучше топоры, наконечники и украшения."],
          ["Около ", em("1200 года до н.э."), " научились выплавлять ", em("железо"), ". Оно твёрже бронзы. Эпоха железа продолжается: мы до сих пор используем железо и сталь."]
        ]
      }
    },
    {
      type: "visual",
      module: "epoki",
      heading: { pl: "Trzy siekiery — trzy epoki", ua: "Три сокири — три доби", ru: "Три топора — три эпохи" },
      visual: pic("005.png", { pl: "Siekiera kamienna, brązowa i żelazna", ua: "Сокира кам’яна, бронзова і залізна", ru: "Каменный, бронзовый и железный топор" }),
      text: {
        pl: ["Nazwa epoki bierze się od materiału, z którego najczęściej robiono narzędzia i broń — nie od „charakteru ludu”."],
        ua: ["Назва доби походить від матеріалу, з якого найчастіше робили знаряддя і зброю — не від «характеру народу»."],
        ru: ["Эпоху называют по материалу орудий, а не по «характеру народа». Порядок: камень → бронза → железо."]
      }
    },
    {
      type: "example",
      module: "epoki",
      heading: { pl: "Źródło: jak wytapiano żelazo", ua: "Джерело: як виплавляли залізо", ru: "Как выплавляли железо" },
      formula: "dymarka",
      visual: pic("006.png", { pl: "Dymarka — piec z kamienia i gliny", ua: "Димарка — піч з каменю і глини", ru: "Димарка — печь из камня и глины" }),
      text: {
        pl: [
          "Trzy kroki z podręcznika: 1) budowa pieca z kamienia i gliny; 2) wsad: ruda żelaza + węgiel drzewny, ok. 1200°C, potem piec rozbijano i wyjmowano bryłę; 3) kowal kuł np. nóż albo siekierę.",
          "To źródło-schemat: pokazuje czynność, nie imię kowala."
        ],
        ua: [
          "Три кроки з підручника: 1) будова печі з каменю і глини; 2) шихта: руда заліза + деревне вугілля, бл. 1200°C, потім піч розбивали і виймали крицю; 3) коваль кував, напр. ніж або сокиру.",
          "Це джерело-схема: показує дію, не ім’я коваля."
        ],
        ru: [
          "Три шага из учебника. 1) Печь строят из камня и глины. 2) Внутрь кладут железную руду и древесный уголь, около 1200°C. Потом печь разбивают и достают кусок металла. 3) Кузнец куёт, например, нож или топор.",
          "Схема показывает действие, а не имя кузнеца. Печь называется dymarka."
        ]
      },
      prompt: {
        pl: "Co źródło mówi? Czego się dowiadujemy? Jaki wniosek?",
        ua: "Що каже джерело? Чого дізнаємося? Який висновок?",
        ru: "Что показывает схема? Какой вывод?"
      },
      task: {
        id: "h01-src-dymarka",
        type: "single-choice",
        level: "B",
        coach: true,
        question: {
          pl: "Czego uczciwie uczy nas schemat dymarki?",
          ua: "Чого чесно вчить нас схема димарки?",
          ru: "Чему честно учит схема димарки?"
        },
        options: [
          { id: "a", label: { pl: "nazwiska i daty urodzenia hutnika", ua: "прізвища і дати народження металурга", ru: "фамилии и даты рождения металлурга" } },
          { id: "b", label: { pl: "że żelazo otrzymywano z rudy w piecu, potem je kuto", ua: "що залізо отримували з руди в печі, потім кували", ru: "что железо получали из руды в печи, а потом ковали" } },
          { id: "c", label: { pl: "że dymarka działała na prąd jak dzisiejsza huta", ua: "що димарка працювала від струму, як сучасний завод", ru: "что димарка работала от электричества, как современный завод" } }
        ],
        answer: "b",
        hint: {
          pl: "Schemat pokazuje kroki pracy, nie życiorys.",
          ua: "Схема показує кроки праці, не життєпис.",
          ru: "Схема показывает шаги работы, а не биографию."
        },
        explanation: {
          pl: "Widzimy technologię: ruda → ogień → metal → kucie. Nie zgadujemy imion.",
          ua: "Бачимо технологію: руда → вогонь → метал → кування. Не вигадуємо імен.",
          ru: "Видим технологию: руда → огонь → металл → ковка. Имена не угадываем."
        }
      }
    },
    {
      type: "comparison",
      module: "epoki",
      heading: { pl: "Dymarka i współczesna huta", ua: "Димарка і сучасний завод", ru: "Димарка и современный завод" },
      visual: pic("007.png", { pl: "Współczesny piec hutniczy", ua: "Сучасна металургійна піч", ru: "Современная металлургическая печь" }),
      items: [
        { pl: "Dymarka: kamień i glina, węgiel drzewny, ok. 1200°C, piec rozbijano", ua: "Димарка: камінь і глина, деревне вугілля, бл. 1200°C, піч розбивали", ru: "Димарка: камень и глина, древесный уголь, около 1200°C, печь разбивали" },
        { pl: "Huta dziś: wielki piec wielokrotnego użytku, prąd, ok. 1500°C, kontrola temperatury, odzież ochronna", ua: "Завод нині: велика піч багаторазова, струм, бл. 1500°C, контроль температури, захисний одяг", ru: "Завод сейчас: большая печь многоразового использования, электричество, около 1500°C, контроль температуры, защитная одежда" }
      ]
    },
    {
      type: "practice",
      module: "epoki",
      track: "both",
      heading: { pl: "Z czego powstaje brąz?", ua: "З чого виникає бронза?", ru: "Из чего получается бронза?" },
      rule: {
        pl: ["Miedź + cyna = brąz. Potem żelazo w dymarce."],
        ua: ["Мідь + олово = бронза. Потім залізо в димарці."],
        ru: ["Запомни: miedź + cyna = brąz. Железо плавили позже, в печи dymarka."]
      },
      task: {
        id: "h01-kn-braz",
        type: "single-choice",
        level: "A",
        coach: true,
        question: {
          pl: "Po połączeniu miedzi z cyną powstaje:",
          ua: "Після поєднання міді з оловом виникає:",
          ru: "Если соединить медь с оловом, получится:"
        },
        options: [
          { id: "a", label: { pl: "żelazo", ua: "залізо", ru: "железо" } },
          { id: "b", label: { pl: "brąz", ua: "бронза", ru: "бронза" } },
          { id: "c", label: { pl: "glina", ua: "глина", ru: "глина" } }
        ],
        answer: "b",
        hint: {
          pl: "Żelazo wytapia się z rudy w dymarce. Tu chodzi o stop dwóch metali.",
          ua: "Залізо виплавляють з руди в димарці. Тут ідеться про сплав двох металів.",
          ru: "Железо выплавляют из руды в димарке. Здесь сплав двух металлов."
        },
        explanation: {
          pl: "Miedź + cyna = brąz (twardszy niż sama miedź). To epoka brązu.",
          ua: "Мідь + олово = бронза (твердіша за саму мідь). Це доба бронзи.",
          ru: "Медь + олово = бронза. Она твёрже одной меди. Это эпоха бронзы."
        }
      }
    },
    {
      type: "challenge",
      module: "epoki",
      heading: { pl: "Kamień, brąz, żelazo — zaleta i wada", ua: "Камінь, бронза, залізо — перевага і вада", ru: "Камень, бронза, железо" },
      task: {
        id: "h01-material",
        type: "single-choice",
        level: "C",
        coach: true,
        question: {
          pl: "Które zdanie jest uczciwe?",
          ua: "Яке речення чесне?",
          ru: "Какое предложение честное?"
        },
        options: [
          { id: "a", label: { pl: "kamień zawsze był najlepszy, bo leży wszędzie i nigdy się nie tępi", ua: "камінь завжди найкращий, бо лежить усюди і ніколи не тупиться", ru: "камень всегда лучший: он везде и никогда не тупится" } },
          { id: "b", label: { pl: "brąz i żelazo dają twardsze narzędzia, ale trzeba umieć wytopić metal z rudy", ua: "бронза і залізо дають твердіші знаряддя, але треба вміти виплавити метал з руди", ru: "бронза и железо дают более твёрдые орудия, но металл нужно уметь выплавить из руды" } },
          { id: "c", label: { pl: "żelazo jest gorsze od kamienia, dlatego epoka żelaza już się skończyła", ua: "залізо гірше за камінь, тому доба заліза вже скінчилася", ru: "железо хуже камня, поэтому эпоха железа уже закончилась" } }
        ],
        answer: "b",
        hint: {
          pl: "Podręcznik pyta o zalety i wady materiałów — nie o „magiczny postęp”.",
          ua: "Підручник питає про переваги і вади матеріалів — не про «магічний прогрес».",
          ru: "Учебник спрашивает о плюсах и минусах материала, а не о «волшебном прогрессе»."
        },
        explanation: {
          pl: "Kamień: dostępny, ale kruchy/tępy. Metale: twardsze, ale trudniejsza technologia. Epoka żelaza trwa.",
          ua: "Камінь: доступний, але крихкий/тупий. Метали: твердіші, але складніша технологія. Доба заліза триває.",
          ru: "Камень легко найти, но он хрупкий и быстро тупится. Металлы твёрже, но их труднее получить. Эпоха железа продолжается."
        }
      }
    },

    {
      type: "concept",
      module: "przodkowie",
      timelineId: "praludzie",
      heading: { pl: "Przodkowie człowieka", ua: "Предки людини", ru: "Предки человека" },
      formula: "Afryka · ok. 4 mln lat temu",
      text: {
        pl: [
          ["Najstarsi przodkowie — ", em("praludzie"), " — żyli około 4 milionów lat temu w ", em("Afryce"), ". Chodzili pochyleni, mózg był mniejszy niż nasz."],
          "Nie ucz się wszystkich łacińskich nazw na pamięć. Zapamiętaj porządek: coraz większy mózg, coraz bardziej wyprostowana postawa — aż do człowieka rozumnego."
        ],
        ua: [
          ["Найдавніші предки — ", em("пралюди"), " — жили близько 4 мільйонів років тому в ", em("Африці"), ". Ходили похило, мозок був менший, ніж наш."],
          "Не вчи всі латинські назви напам’ять. Запам’ятай порядок: щораз більший мозок, щораз пряміша постава — аж до людини розумної."
        ],
        ru: [
          ["Древнейшие предки — пралюди — жили около 4 миллионов лет назад в ", em("Африке"), ". Они ходили с наклоном, мозг был меньше нашего."],
          "Латинские названия не нужно учить все. Для sprawdzianu важен порядок и факт: Африка, около 4 миллионов лет назад."
        ]
      }
    },
    {
      type: "concept",
      module: "przodkowie",
      heading: { pl: "Cztery kroki do nas", ua: "Чотири кроки до нас", ru: "Четыре шага к нам" },
      formula: "4 mln → 200 tys. lat temu",
      visual: pic("008.png", { pl: "Cztery kroki do człowieka rozumnego", ua: "Чотири кроки до людини розумної", ru: "Четыре шага к человеку разумному" }),
      text: {
        pl: [
          ["Kierunki ", em("ewolucji"), " na rysunku szkolnym: mózg „rośnie” od lewej do prawej, postawa jest coraz bardziej wyprostowana. To uproszczenie, ale porządek jest ważny."]
        ],
        ua: [
          ["Напрями ", em("еволюції"), " на шкільному рисунку: мозок «росте» зліва направо, постава щораз пряміша. Це спрощення, але порядок важливий."]
        ],
        ru: [
          "На школьном рисунке мозг слева направо становится больше, осанка — прямее. Это упрощение, но порядок важен. Латинские имена — дополнительный материал, не главный ответ."
        ]
      },
      items: [
        { pl: "australopitek — ok. 4 mln lat temu, chód pochylony, mały mózg", ua: "австралопітек — бл. 4 млн років тому, хода похила, малий мозок", ru: "австралопитек — около 4 млн лет назад, наклонная походка, маленький мозг" },
        { pl: "człowiek zręczny — ok. 2,5 mln lat temu, pierwsze proste narzędzia", ua: "людина вміла — бл. 2,5 млн років тому, перші прості знаряддя", ru: "человек умелый — около 2,5 млн лет назад, первые простые орудия" },
        { pl: "człowiek wyprostowany — ok. 1,9 mln lat temu, wyższy i bardziej wyprostowany", ua: "людина прямоходяча — бл. 1,9 млн років тому, вища і пряміша", ru: "человек прямоходящий — около 1,9 млн лет назад, выше и прямее" },
        { pl: "człowiek rozumny (Homo sapiens) — ok. 200 tys. lat temu; to my, potem wędrówki po świecie", ua: "людина розумна (Homo sapiens) — бл. 200 тис. років тому; це ми, потім мандрівки світом", ru: "человек разумный — около 200 тысяч лет назад; это мы, потом расселение по миру" }
      ]
    },
    {
      type: "visual",
      module: "przodkowie",
      heading: { pl: "Mapa: skąd przyszedł człowiek rozumny", ua: "Карта: звідки прийшла розумна людина", ru: "Карта: откуда пришёл человек" },
      visual: {
        kind: "map-placeholder",
        url: IMG + "004.png",
        title: { pl: "Kierunki wędrówek przodków człowieka", ua: "Напрями мандрівок предків людини", ru: "Направления расселения предков человека" },
        alt: { pl: "Mapa wędrówek z Afryki", ua: "Карта мандрівок з Африки", ru: "Карта расселения из Африки" }
      },
      text: {
        pl: [
          ["Najdawniejsi przodkowie człowieka żyli w ", em("Afryce"), " około ", em("4 milionów"), " lat temu. Stamtąd człowiek rozumny rozchodził się po świecie."],
          "Szkolne daty osiedlenia (lata p.n.e.): Europa ok. 40–35 tys., Azja ok. 60 tys., Australia ok. 40 tys., Ameryka Północna ok. 13 tys., Ameryka Południowa ok. 10 tys. — ostatnia."
        ],
        ua: [
          ["Найдавніші предки людини жили в ", em("Африці"), " близько ", em("4 мільйонів"), " років тому. Звідти людина розумна розходилася світом."],
          "Шкільні дати оселення (роки до н.е.): Європа бл. 40–35 тис., Азія бл. 60 тис., Австралія бл. 40 тис., Північна Америка бл. 13 тис., Південна Америка бл. 10 тис. — остання."
        ],
        ru: [
          "Древнейшие предки жили в Африке около 4 миллионов лет назад. Оттуда человек разумный расселялся по миру.",
          "Школьные даты заселения, годы до н.э.: Европа около 40–35 тыс., Азия около 60 тыс., Австралия около 40 тыс., Северная Америка около 13 тыс., Южная Америка около 10 тыс. — последняя. Эти числа есть на карте урока. Их не нужно путать с датой земледелия."
        ]
      },
      task: {
        id: "h01-map-australia",
        type: "single-choice",
        level: "B",
        coach: true,
        question: {
          pl: "Według mapy z lekcji: kiedy człowiek rozumny dotarł do Australii?",
          ua: "За картою з уроку: коли людина розумна дісталася Австралії?",
          ru: "По карте урока: когда человек разумный дошёл до Австралии?"
        },
        options: [
          { id: "a", label: { pl: "ok. 200 000 p.n.e.", ua: "бл. 200 000 до н.е.", ru: "около 200 000 до н.э." } },
          { id: "b", label: { pl: "ok. 40 000 p.n.e.", ua: "бл. 40 000 до н.е.", ru: "около 40 000 до н.э." } },
          { id: "c", label: { pl: "ok. 10 000 p.n.e.", ua: "бл. 10 000 до н.е.", ru: "около 10 000 до н.э." } }
        ],
        answer: "b",
        hint: {
          pl: "Znajdź na mapie Australię i liczbę przy strzałce. To nie data rolnictwa.",
          ua: "Знайди на карті Австралію і число біля стрілки. Це не дата рільництва.",
          ru: "Найди на карте Австралию и число у стрелки. Это не дата земледелия."
        },
        explanation: {
          pl: "W tym atlasie szkolnym przyjmujemy ok. 40 000 p.n.e. jako czas osiedlenia Australii.",
          ua: "У цьому шкільному атласі приймаємо бл. 40 000 до н.е. як час оселення Австралії.",
          ru: "В этом школьном атласе заселение Австралии — около 40 000 лет до н.э."
        }
      }
    },
    {
      type: "practice",
      module: "przodkowie",
      heading: { pl: "Praca z mapą", ua: "Робота з картою", ru: "Работа с картой" },
      prompt: {
        pl: "Który kontynent został zasiedlony jako ostatni?",
        ua: "Який континент заселили останнім?",
        ru: "Какой континент заселили последним?"
      },
      task: {
        id: "h01-map-ostatni",
        type: "single-choice",
        level: "B",
        coach: true,
        question: {
          pl: "Który kontynent na mapie z lekcji został zasiedlony jako ostatni?",
          ua: "Який континент на карті з уроку заселили останнім?",
          ru: "Какой континент на карте урока заселили последним?"
        },
        options: [
          { id: "a", label: { pl: "ostatni zasiedlony kontynent to Afryka", ua: "останній заселений континент — Африка", ru: "последний заселённый континент — Африка" } },
          { id: "b", label: { pl: "ostatni zasiedlony kontynent to Ameryka (Południowa)", ua: "останній заселений континент — Америка (Південна)", ru: "последний заселённый континент — Америка (Южная)" } },
          { id: "c", label: { pl: "wszystkie kontynenty zasiedlono w tym samym roku", ua: "усі континенти заселили того самого року", ru: "все континенты заселили в один и тот же год" } }
        ],
        answer: "b",
        hint: {
          pl: "Porównaj liczby: mniejsza liczba p.n.e. oznacza czas bliższy nam, czyli później.",
          ua: "Порівняй числа: менше число до н.е. означає час ближчий до нас, тобто пізніше.",
          ru: "Сравни числа: меньшее число до н.э. ближе к нам, значит позже."
        },
        explanation: {
          pl: "10 000 jest później niż 40 000 czy 13 000. Afryka była pierwsza, nie ostatnia.",
          ua: "10 000 пізніше, ніж 40 000 чи 13 000. Африка була першою, не останньою.",
          ru: "10 000 позже, чем 40 000 или 13 000. Африка была первой, не последней."
        }
      }
    },
    {
      type: "check",
      module: "przodkowie",
      track: "both",
      heading: { pl: "Co trzeba zapamiętać", ua: "Що треба запам’ятати", ru: "Что нужно запомнить" },
      rule: {
        pl: ["Najdawniejsi przodkowie człowieka żyli w Afryce około 4 milionów lat temu."],
        ua: ["Найдавніші предки людини жили в Африці близько 4 мільйонів років тому."],
        ru: ["Обязательный факт: Африка, около 4 миллионов лет назад. Латинские имена — дополнительно."]
      },
      task: {
        id: "h01-check-afryka",
        type: "true-false",
        level: "A",
        coach: true,
        question: {
          pl: "Najdawniejsi przodkowie człowieka żyli w Afryce około 4 milionów lat temu — prawda czy fałsz?",
          ua: "Найдавніші предки людини жили в Африці близько 4 мільйонів років тому — правда чи неправда?",
          ru: "Древнейшие предки человека жили в Африке около 4 миллионов лет назад. Правда или ложь?"
        },
        answer: true,
        hint: {
          pl: "To pierwsze zdanie podsumowania w podręczniku.",
          ua: "Це перше речення підсумку в підручнику.",
          ru: "Это первое предложение итога в учебнике."
        },
        explanation: {
          pl: "Afryka jest kolebką. Potem wędrówki na inne kontynenty.",
          ua: "Африка — колиска. Потім мандрівки на інші континенти.",
          ru: "Африка — начало. Потом люди уходили на другие континенты."
        }
      }
    },

    {
      type: "summary",
      module: "powtorka",
      heading: { pl: "Mapa całego tematu", ua: "Мапа всієї теми", ru: "Карта всей темы" },
      visual: {
        kind: "flow",
        steps: [
          { title: { pl: "1", ua: "1", ru: "1" }, text: { pl: "narzędzia, ogień, mowa", ua: "знаряддя, вогонь, мова", ru: "орудия, огонь, речь" } },
          { title: { pl: "2", ua: "2", ru: "2" }, text: { pl: "koczownicy → osadnicy", ua: "кочівники → осілі", ru: "кочевники → оседлые" } },
          { title: { pl: "3", ua: "3", ru: "3" }, text: { pl: "uprawa i hodowla", ua: "рільництво і тваринництво", ru: "земледелие и скотоводство" } },
          { title: { pl: "4", ua: "4", ru: "4" }, text: { pl: "kamień → brąz → żelazo", ua: "камінь → бронза → залізо", ru: "камень → бронза → железо" } }
        ]
      },
      items: [
        mark(
          "Przodkowie człowieka żyli w Afryce ok. 4 mln lat temu. Ważne umiejętności: ogień i mowa.",
          ["Afryce", "ogień", "mowa"],
          "Предки людини жили в Африці бл. 4 млн років тому. Важливі вміння: вогонь і мова.",
          ["Африці", "вогонь", "мова"],
          "Предки жили в Африке около 4 млн лет назад. Важные умения: огонь и речь.",
          ["Африке", "огонь", "речь"]
        ),
        mark(
          "Prehistoria: zbieractwo i myślistwo, koczowniczy tryb życia.",
          ["Prehistoria", "zbieractwo", "myślistwo", "koczowniczy"],
          "Доісторія: збиральництво і мисливство, кочовий спосіб життя.",
          ["Доісторія", "збиральництво", "мисливство", "кочовий"],
          "Дописьменная история: собирательство и охота, кочевой образ жизни.",
          ["собирательство", "охота", "кочевой"]
        ),
        mark(
          "Rewolucja neolityczna: uprawa i hodowla → osiadły tryb życia.",
          ["Rewolucja neolityczna", "uprawa", "hodowla", "osiadły"],
          "Неолітична революція: рільництво і тваринництво → осілий спосіб життя.",
          ["Неолітична революція", "рільництво", "тваринництво", "осілий"],
          "Неолитическая революция: земледелие и скотоводство → оседлая жизнь.",
          ["земледелие", "скотоводство", "оседлая"]
        ),
        mark(
          "Dzieje narzędzi: epoka kamienia, brązu i żelaza (nazwa od materiału).",
          ["epoka kamienia", "brązu", "żelaza"],
          "Історія знарядь: доба каменю, бронзи і заліза (назва від матеріалу).",
          ["доба каменю", "бронзи", "заліза"],
          "История орудий: эпоха камня, бронзы и железа. Название — от материала.",
          ["камня", "бронзы", "железа"]
        )
      ]
    },
    {
      type: "vocabulary",
      module: "powtorka",
      track: "both",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник", ru: "Исторический словарь" },
      rows: [
        { pl: "prehistoria — dzieje ludzi przed wynalezieniem pisma", ua: "доісторія — історія людей до винаходу письма", ru: "история людей до изобретения письма" },
        { pl: "pięściak — proste kamienne narzędzie mieszczące się w dłoni", ua: "рубило — просте кам’яне знаряддя, що вміщається в долоні", ru: "простое каменное орудие, которое помещается в ладонь" },
        { pl: "hodowla — oswajanie zwierząt, by mieć pożywienie i pomoc przy pracy", ua: "тваринництво — приручення звірів, щоб мати їжу і допомогу в праці", ru: "приручение животных, чтобы иметь еду и помощь в работе" },
        { pl: "koczowniczy tryb życia — wędrowanie za pożywieniem, bez stałego domu", ua: "кочовий спосіб життя — мандрівка за поживою, без сталої хати", ru: "переход за едой, без постоянного дома" },
        { pl: "osiadły tryb życia — stałe mieszkanie przy polach i stadach", ua: "осілий спосіб життя — постійне життя біля полів і худоби", ru: "постоянная жизнь у полей и стад" },
        { pl: "rewolucja neolityczna — przejście do rolnictwa, hodowli i osad", ua: "неолітична революція — перехід до рільництва, тваринництва і поселень", ru: "переход к земледелию, скотоводству и поселениям" },
        { pl: "epoka kamienia / brązu / żelaza — okres nazwany od materiału narzędzi", ua: "доба каменю / бронзи / заліза — період, названий за матеріалом знарядь", ru: "период, названный по материалу орудий" },
        { pl: "dymarka — dawny piec do wytopu żelaza z rudy", ua: "димарка — давня піч для виплавки заліза з руди", ru: "древняя печь для выплавки железа из руды" }
      ]
    },
    {
      type: "challenge",
      module: "powtorka",
      track: "both",
      heading: { pl: "Co było wcześniej?", ua: "Що було раніше?", ru: "Что было раньше?" },
      task: {
        id: "h01-order",
        type: "single-choice",
        level: "C",
        coach: true,
        question: {
          pl: "Która kolejność jest prawdziwa?",
          ua: "Який порядок правильний?",
          ru: "Какой порядок верный?"
        },
        options: [
          { id: "a", label: { pl: "najpierw epoka żelaza, potem rolnictwo, potem ogień", ua: "спочатку доба заліза, потім рільництво, потім вогонь", ru: "сначала эпоха железа, потом земледелие, потом огонь" } },
          { id: "b", label: { pl: "najpierw ogień i koczownicy, potem rewolucja neolityczna, potem brąz i żelazo", ua: "спочатку вогонь і кочівники, потім неолітична революція, потім бронза і залізо", ru: "сначала огонь и кочевники, потом неолитическая революция, потом бронза и железо" } },
          { id: "c", label: { pl: "najpierw huty na Śląsku, potem jaskinie", ua: "спочатку заводи на Сілезії, потім печери", ru: "сначала заводы в Силезии, потом пещеры" } }
        ],
        answer: "b",
        hint: {
          pl: "Nie myl neolitu z epoką żelaza.",
          ua: "Не плутай неоліт із добою заліза.",
          ru: "Не путай неолит с эпохой железа."
        },
        explanation: {
          pl: "Ogień i wędrówka są dawniejsze. Rolnictwo ok. 10 000 p.n.e. Żelazo ok. 1200 p.n.e.",
          ua: "Вогонь і мандрівка давніші. Рільництво бл. 10 000 до н.е. Залізо бл. 1200 до н.е.",
          ru: "Огонь и кочевая жизнь древнее. Земледелие — около 10 000 до н.э. Железо — около 1200 до н.э."
        }
      }
    },
    {
      type: "review",
      module: "powtorka",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось", ru: "К этому вернёмся" },
      text: {
        pl: [
          "Następny temat: miasta nad Tygrysem i Eufratem. Tam rolnictwo nad rzeką staje się podstawą miast-państw.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступна тема: міста над Тигром і Євфратом. Там рільництво над річкою стає основою міст-держав.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ],
        ru: [
          "Следующая тема: города у Тигра и Евфрата. Там земледелие у реки становится основой городов-государств.",
          "Если хочешь услышать урок голосом учителя, посмотри фильм Krótkie Lekcje. Уроки 2–6 этого раздела ещё не перестроены в такие же модули."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "Dt7GjntKSTs",
        title: { pl: "Krótkie Lekcje: Życie pierwszych ludzi", ua: "Короткі уроки: Життя перших людей", ru: "Короткие уроки: жизнь первых людей" }
      }
    }
  ]
};
