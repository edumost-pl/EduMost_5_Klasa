function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L15_Klasyfikacja_organizmow/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: szufladki życia", ua: "Місія: шухлядки життя" },
      visual: vizGh("l15-zacznijmy.png", {
        alt: { pl: "Dąb, pies, muchomor i kropla stawu", ua: "Дуб, пес, мухомор і крапля ставка" },
        title: { pl: "Tyle życia. Jak to ułożyć?", ua: "Стільки життя. Як це скласти?" },
        prompt: { pl: "Kolaż lekcji 15: dąb, pies, muchomor, staw." }
      }),
      text: {
        pl: [
          "To lekcja 15: klasyfikacja organizmów. Zaczyna się nowy dział. Gatunków są miliony. Gdyby każdy nazywał je po swojemu, nikt by się nie dogadał.",
          "Dziś szufladki od najwęższej do najszerszej. Budowy wirusa jeszcze nie ma — to lekcja 16.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 15: класифікація організмів. Починається новий розділ. Видів мільйони. Якби кожен називав їх по-своєму, ніхто б не порозумівся.",
          "Сьогодні шухлядки від найвужчої до найширшої. Будови віруса ще немає — це урок 16.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "klasyfikacja", ua: "класифікація — групи за будовою і спорідненістю" },
        { pl: "gatunek", ua: "вид — найвужча шухляда, плодюче потомство" },
        { pl: "rodzaj", ua: "рід — ширший від виду" },
        { pl: "królestwo", ua: "царство — найширша шухляда" },
        { pl: "nazwa dwuczłonowa", ua: "двочленна назва — спочатку рід, потім вид" },
        { pl: "wirus", ua: "вірус — поза п’ятьма царствами" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co klasyfikacja", ua: "Поняття. Навіщо класифікація" },
      visual: vizGh("l15-po-co.png", {
        alt: { pl: "Podobne organizmy na wspólnych półkach", ua: "Подібні організми на спільних полицях" },
        title: { pl: "Podobne razem. Te same nazwy.", ua: "Подібні разом. Ті самі назви." },
        prompt: { pl: "Plansza lekcji 15: po co klasyfikujemy." }
      }),
      text: {
        pl: [
          [em("Klasyfikacja"), " to porządkowanie organizmów w grupy według podobieństwa budowy i pokrewieństwa."],
          "Dzięki niej wiadomo, co z czym porównywać. Uczeni na świecie używają tych samych nazw. Łatwiej uczyć się biologii.",
          "Nie dzielimy na ładne i brzydkie. Liczy się budowa i pochodzenie, nie gust."
        ],
        ua: [
          [em("Класифікація"), " — це впорядкування організмів у групи за подібністю будови і спорідненістю."],
          "Завдяки їй відомо, що з чим порівнювати. Науковці у світі користуються тими самими назвами. Легше вчити біологію.",
          "Не ділимо на гарне і бридке. Важить будова і походження, не смак."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Półka, nie konkurs", ua: "Приклад. Полиця, не конкурс" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dąb, pies i muchomor są różne. Każdy trafia do swojej grupy."],
            ua: ["Дуб, пес і мухомор різні. Кожен потрапляє до своєї групи."]
          }
        },
        {
          text: {
            pl: ["Biolog w innym kraju szuka tej samej grupy, nie własnej nazwy z domu."],
            ua: ["Біолог в іншій країні шукає ту саму групу, не власну назву з дому."]
          }
        },
        {
          text: {
            pl: ["„Ładny pies” nie jest szufladką. Szufladkę robi budowa i pokrewieństwo."],
            ua: ["«Гарний пес» не є шухлядкою. Шухлядку робить будова і спорідненість."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co?", ua: "Коротке питання. Навіщо?" },
      task: {
        id: "l15-g1",
        type: "single-choice",
        question: {
          pl: "Po co klasyfikujemy organizmy?",
          ua: "Навіщо класифікуємо організми?"
        },
        options: [
          { id: "a", label: { pl: "żeby grupować je według budowy i pokrewieństwa i mówić o tych samych organizmach", ua: "щоб групувати їх за будовою і спорідненістю і говорити про ті самі організми" } },
          { id: "b", label: { pl: "żeby nagradzać tylko ładne zwierzęta", ua: "щоб нагороджувати лише гарних тварин" } },
          { id: "c", label: { pl: "żeby kolor zastąpił budowę", ua: "щоб колір замінив будову" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj porządku i wspólnych nazw, nie gustu.",
          ua: "Шукай порядок і спільні назви, не смак."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ładny wygląd nie jest zasadą klasyfikacji. Grupujemy według budowy i pokrewieństwa.",
              ua: "Гарний вигляд не є правилом класифікації. Групуємо за будовою і спорідненістю."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor nie zastępuje budowy. Klasyfikacja porządkuje organizmy, żeby dało się je porównać.",
              ua: "Колір не замінює будову. Класифікація впорядковує організми, щоб їх можна було порівняти."
            }
          }
        ],
        explanation: {
          pl: "Klasyfikacja grupuje organizmy według budowy i pokrewieństwa.",
          ua: "Класифікація групує організми за будовою і спорідненістю."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Konkurs piękności", ua: "Типова помилка. Конкурс краси" },
      claim: {
        pl: "„Klasyfikacja dzieli organizmy na ładne i brzydkie.”",
        ua: "«Класифікація ділить організми на гарні і бридкі.»"
      },
      text: {
        pl: [
          "Gust nie jest jednostką systematyczną.",
          "Do jednej grupy trafiają organizmy podobne budową i spokrewnione."
        ],
        ua: [
          "Смак не є систематичною одиницею.",
          "До однієї групи потрапляють організми, подібні будовою і споріднені."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ładne i brzydkie", ua: "Сам. Гарні і бридкі" },
      task: {
        id: "l15-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń dzieli zwierzęta na ładne i brzydkie. Czy to klasyfikacja z tej lekcji?",
          ua: "Учень ділить тварин на гарних і бридких. Чи це класифікація з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "nie — liczy się budowa i pokrewieństwo, nie gust", ua: "ні — важить будова і спорідненість, не смак" } },
          { id: "b", label: { pl: "tak — gust jest królestwem", ua: "так — смак є царством" } },
          { id: "c", label: { pl: "tak — brzydkie zwierzęta są wirusami", ua: "так — бридкі тварини є вірусами" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo jest grupą organizmów, nie oceną gustu. Ta lista ucznia nie jest klasyfikacją biologiczną.",
              ua: "Царство є групою організмів, не оцінкою смаку. Цей список учня не є біологічною класифікацією."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Brzydota nie robi wirusa. Klasyfikacja patrzy na budowę i pokrewieństwo.",
              ua: "Бридкість не робить віруса. Класифікація дивиться на будову і спорідненість."
            }
          }
        ],
        explanation: {
          pl: "Podział na ładne i brzydkie nie jest klasyfikacją biologiczną.",
          ua: "Поділ на гарних і бридких не є біологічною класифікацією."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Gatunek", ua: "Поняття. Вид" },
      visual: vizGh("l15-gatunek.png", {
        alt: { pl: "Rasy psa jako jeden gatunek i wilk jako inny", ua: "Породи пса як один вид і вовк як інший" },
        title: { pl: "Jeden gatunek może wyglądać różnie.", ua: "Один вид може виглядати по-різному." },
        prompt: { pl: "Plansza lekcji 15: psy i wilk." }
      }),
      text: {
        pl: [
          [em("Gatunek"), " to grupa bardzo podobnych organizmów, które w naturze mogą się krzyżować i dawać ", em("płodne potomstwo"), " — takie, które samo może mieć młode."],
          "Jamnik i owczarek to jeden gatunek: pies. Wilk jest podobny, ale to inny gatunek.",
          "Gatunek jest najwęższą, podstawową szufladką. Wyjątków z ogrodu zoologicznego dziś nie rozstrzygamy."
        ],
        ua: [
          [em("Вид"), " — це група дуже подібних організмів, які в природі можуть схрещуватися і давати ", em("плодюче потомство"), " — таке, яке саме може мати малят."],
          "Такса і вівчарка — це один вид: пес. Вовк подібний, але це інший вид.",
          "Вид є найвужчою, основною шухлядкою. Винятків із зоопарку сьогодні не розв’язуємо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy psy i wilk", ua: "Приклад. Три пси і вовк" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jamnik, owczarek i labrador wyglądają inaczej. To rasy jednego gatunku."],
            ua: ["Такса, вівчарка і лабрадор виглядають інакше. Це породи одного виду."]
          }
        },
        {
          text: {
            pl: ["Osobniki tego gatunku mogą mieć płodne potomstwo."],
            ua: ["Особини цього виду можуть мати плодюче потомство."]
          }
        },
        {
          text: {
            pl: ["Wilk zostaje obok, w innym gatunku. Futro nie skleja gatunków."],
            ua: ["Вовк лишається поруч, в іншому виді. Хутро не склеює види."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna szufladka?", ua: "Коротке питання. Одна шухляда?" },
      task: {
        id: "l15-g2",
        type: "single-choice",
        question: {
          pl: "Jamnik i owczarek. Ile to gatunków?",
          ua: "Такса і вівчарка. Скільки це видів?"
        },
        options: [
          { id: "a", label: { pl: "jeden gatunek — pies; mogą mieć płodne potomstwo", ua: "один вид — пес; можуть мати плодюче потомство" } },
          { id: "b", label: { pl: "dwa królestwa", ua: "два царства" } },
          { id: "c", label: { pl: "dwa gatunki, bo mają inną sierść", ua: "два види, бо мають іншу шерсть" } }
        ],
        answer: "a",
        hint: {
          pl: "Rasa zmienia wygląd. Gatunku nie zmienia.",
          ua: "Порода змінює вигляд. Вид не змінює."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo jest najszerszą szufladką. Jamnik i owczarek mieszczą się w jednym gatunku: pies.",
              ua: "Царство є найширшою шухлядкою. Такса і вівчарка вміщаються в одному виді: пес."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Inna sierść to rasa, nie nowy gatunek. Oba psy mogą mieć płodne potomstwo.",
              ua: "Інша шерсть — це порода, не новий вид. Обидва пси можуть мати плодюче потомство."
            }
          }
        ],
        explanation: {
          pl: "Jamnik i owczarek należą do jednego gatunku: pies.",
          ua: "Такса і вівчарка належать до одного виду: пес."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każda rasa to gatunek", ua: "Типова помилка. Кожна порода — це вид" },
      claim: {
        pl: "„Każda rasa psa jest osobnym gatunkiem.”",
        ua: "«Кожна порода пса є окремим видом.»"
      },
      text: {
        pl: [
          "Rasa jest odmianą wyglądu wewnątrz gatunku.",
          "Pies zostaje jednym gatunkiem. Wilk jest już innym."
        ],
        ua: [
          "Порода є відміною вигляду всередині виду.",
          "Пес лишається одним видом. Вовк уже є іншим."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Labrador i wilk", ua: "Сам. Лабрадор і вовк" },
      task: {
        id: "l15-p2",
        type: "single-choice",
        question: {
          pl: "Labrador i wilk mają futro. Czy to jeden gatunek?",
          ua: "Лабрадор і вовк мають хутро. Чи це один вид?"
        },
        options: [
          { id: "a", label: { pl: "nie — labrador to pies, wilk to inny gatunek", ua: "ні — лабрадор це пес, вовк це інший вид" } },
          { id: "b", label: { pl: "tak — futro zawsze skleja gatunki", ua: "так — хутро завжди склеює види" } },
          { id: "c", label: { pl: "tak — wilk jest rasą jamnika", ua: "так — вовк є породою такси" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Futro mają i pies, i wilk. Gatunku to nie łączy. Wilk jest innym gatunkiem.",
              ua: "Хутро мають і пес, і вовк. Виду це не з’єднує. Вовк є іншим видом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wilk nie jest rasą jamnika. Jamnik jest psem. Wilk jest osobnym gatunkiem.",
              ua: "Вовк не є породою такси. Такса є псом. Вовк є окремим видом."
            }
          }
        ],
        explanation: {
          pl: "Labrador należy do gatunku pies. Wilk jest innym gatunkiem.",
          ua: "Лабрадор належить до виду пес. Вовк є іншим видом."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jednostki systematyczne", ua: "Поняття. Систематичні одиниці" },
      visual: vizGh("l15-jednostki.png", {
        alt: { pl: "Drabina od gatunku do królestwa", ua: "Драбина від виду до царства" },
        title: { pl: "Od wąskiej szufladki do najszerszej.", ua: "Від вузької шухлядки до найширшої." },
        prompt: { pl: "Drabina lekcji 15: jednostki systematyczne." }
      }),
      text: {
        pl: [
          [em("Jednostki systematyczne"), ", od najwęższej: gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo."],
          "Przykład wilka szarego pokazuje, jak szufladki siedzą w sobie: gatunek wilk szary, rodzaj pies, rodzina psowate, rząd drapieżne, gromada ssaki, typ strunowce, królestwo zwierzęta.",
          "Dziś licz się kolejność szczebli. W jednym rodzaju bywa wiele gatunków."
        ],
        ua: [
          [em("Систематичні одиниці"), ", від найвужчої: вид → рід → родина → ряд → клас → тип → царство."],
          "Приклад вовка сірого показує, як шухлядки сидять одна в одній: вид вовк сірий, рід пес, родина псові, ряд хижі, клас ссавці, тип хордові, царство тварини.",
          "Сьогодні важлива послідовність щаблів. В одному роді буває багато видів."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Wilk na drabinie", ua: "Приклад. Вовк на драбині" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Najwężej stoi gatunek: wilk szary."],
            ua: ["Найвужче стоїть вид: вовк сірий."]
          }
        },
        {
          text: {
            pl: ["Wyżej szufladki są coraz szersze: rodzaj, rodzina, rząd, gromada, typ."],
            ua: ["Вище шухлядки дедалі ширші: рід, родина, ряд, клас, тип."]
          }
        },
        {
          text: {
            pl: ["Najszerzej jest królestwo zwierząt. Wilk tam jest, razem z innymi zwierzętami."],
            ua: ["Найширше є царство тварин. Вовк там є, разом з іншими тваринами."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co węższe?", ua: "Коротке питання. Що вужче?" },
      task: {
        id: "l15-g3",
        type: "single-choice",
        question: {
          pl: "Co jest węższe: gatunek czy rodzaj?",
          ua: "Що вужче: вид чи рід?"
        },
        options: [
          { id: "a", label: { pl: "gatunek — w jednym rodzaju bywa wiele gatunków", ua: "вид — в одному роді буває багато видів" } },
          { id: "b", label: { pl: "rodzaj — jest węższy niż gatunek", ua: "рід — він вужчий за вид" } },
          { id: "c", label: { pl: "są tak samo wąskie jak królestwo", ua: "вони такі самі вузькі, як царство" } }
        ],
        answer: "a",
        hint: {
          pl: "Drabina idzie od wąskiego gatunku w górę, do królestwa.",
          ua: "Драбина йде від вузького виду вгору, до царства."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rodzaj jest szerszy. Mieści w sobie gatunki. Węższy jest gatunek.",
              ua: "Рід ширший. Вміщує в собі види. Вужчим є вид."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Królestwo jest najszersze. Gatunek i rodzaj nie są z nim równie wąskie.",
              ua: "Царство найширше. Вид і рід не є з ним однаково вузькі."
            }
          }
        ],
        explanation: {
          pl: "Gatunek jest węższy niż rodzaj.",
          ua: "Вид вужчий за рід."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Królestwo na dole", ua: "Типова помилка. Царство внизу" },
      claim: {
        pl: "„Królestwo jest najwęższą szufladką.”",
        ua: "«Царство є найвужчою шухлядкою.»"
      },
      text: {
        pl: [
          "Najwęższy jest gatunek.",
          "Królestwo stoi na górze drabiny i mieści w sobie wszystkie niższe szczeble."
        ],
        ua: [
          "Найвужчим є вид.",
          "Царство стоїть нагорі драбини і вміщує в собі всі нижчі щаблі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Sąsiednie szczeble", ua: "Сам. Сусідні щаблі" },
      task: {
        id: "l15-p3",
        type: "single-choice",
        question: {
          pl: "Która para sąsiednich szczebli jest we właściwej kolejności, od węższej do szerszej?",
          ua: "Яка пара сусідніх щаблів у правильному порядку, від вужчого до ширшого?"
        },
        options: [
          { id: "a", label: { pl: "rodzaj, potem rodzina", ua: "рід, потім родина" } },
          { id: "b", label: { pl: "królestwo, potem gatunek", ua: "царство, потім вид" } },
          { id: "c", label: { pl: "typ, potem rząd", ua: "тип, потім ряд" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo jest najszersze, gatunek najwęższy. Od węższej do szerszej idzie się w drugą stronę.",
              ua: "Царство найширше, вид найвужчий. Від вужчого до ширшого йдуть у другий бік."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Typ jest szerszy niż rząd. Sąsiednia para od węższej do szerszej to rodzaj, potem rodzina.",
              ua: "Тип ширший за ряд. Сусідня пара від вужчого до ширшого — це рід, потім родина."
            }
          }
        ],
        explanation: {
          pl: "Od węższej do szerszej: rodzaj, potem rodzina.",
          ua: "Від вужчого до ширшого: рід, потім родина."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Nazwa dwuczłonowa", ua: "Поняття. Двочленна назва" },
      visual: vizGh("l15-nazwa.png", {
        alt: { pl: "Wilk szary i nazwa Canis lupus", ua: "Вовк сірий і назва Canis lupus" },
        title: { pl: "Najpierw rodzaj. Potem gatunek.", ua: "Спочатку рід. Потім вид." },
        prompt: { pl: "Karta lekcji 15: wilk szary, Canis lupus." }
      }),
      text: {
        pl: [
          [em("Nazwa dwuczłonowa"), " ma dwa człony: najpierw rodzaj, potem gatunek. Zapis jest po łacinie."],
          "Wilk szary to Canis lupus. Canis to rodzaj, lupus to gatunek.",
          "Dzięki łacinie biolog w Polsce i w Japonii mówi o tym samym gatunku, nawet gdy nazwy potoczne są różne. Ten sposób rozpowszechnił Karol Linneusz."
        ],
        ua: [
          [em("Двочленна назва"), " має два члени: спочатку рід, потім вид. Запис латиною."],
          "Вовк сірий — це Canis lupus. Canis — це рід, lupus — це вид.",
          "Завдяки латині біолог у Польщі і в Японії говорить про той самий вид, навіть коли побутові назви різні. Цей спосіб поширив Карл Лінней."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa słowa", ua: "Приклад. Два слова" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pierwsze słowo, Canis, nazywa rodzaj."],
            ua: ["Перше слово, Canis, називає рід."]
          }
        },
        {
          text: {
            pl: ["Drugie słowo, lupus, nazywa gatunek wewnątrz tego rodzaju."],
            ua: ["Друге слово, lupus, називає вид усередині цього роду."]
          }
        },
        {
          text: {
            pl: ["Po polsku mówimy wilk szary. Łacińska nazwa jest wspólna dla nauki."],
            ua: ["По-українськи кажемо вовк сірий. Латинська назва спільна для науки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa człony", ua: "Коротке питання. Два члени" },
      task: {
        id: "l15-g4",
        type: "single-choice",
        question: {
          pl: "Co oznacza nazwa dwuczłonowa?",
          ua: "Що означає двочленна назва?"
        },
        options: [
          { id: "a", label: { pl: "najpierw rodzaj, potem gatunek — po łacinie", ua: "спочатку рід, потім вид — латиною" } },
          { id: "b", label: { pl: "imię właściciela zwierzęcia", ua: "ім’я власника тварини" } },
          { id: "c", label: { pl: "nazwę królestwa i kolor sierści", ua: "назву царства і колір шерсті" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa słowa: szerszy człon, potem węższy. Zapis po łacinie.",
          ua: "Два слова: ширший член, потім вужчий. Запис латиною."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Imię właściciela nie jest nazwą gatunku. Nazwa dwuczłonowa to rodzaj i gatunek.",
              ua: "Ім’я власника не є назвою виду. Двочленна назва — це рід і вид."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kolor sierści nie jest członem nazwy. Pierwszy człon to rodzaj, drugi to gatunek.",
              ua: "Колір шерсті не є членом назви. Перший член — це рід, другий — це вид."
            }
          }
        ],
        explanation: {
          pl: "Nazwa dwuczłonowa: najpierw rodzaj, potem gatunek, po łacinie.",
          ua: "Двочленна назва: спочатку рід, потім вид, латиною."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Drugie słowo jest rodzajem", ua: "Типова помилка. Друге слово є родом" },
      claim: {
        pl: "„W nazwie Canis lupus pierwsze słowo to gatunek.”",
        ua: "«У назві Canis lupus перше слово — це вид.»"
      },
      text: {
        pl: [
          "Pierwsze słowo jest rodzajem: Canis.",
          "Drugie jest gatunkiem: lupus. Razem to wilk szary."
        ],
        ua: [
          "Перше слово є родом: Canis.",
          "Друге є видом: lupus. Разом це вовк сірий."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Który człon?", ua: "Сам. Який член?" },
      task: {
        id: "l15-p4",
        type: "single-choice",
        question: {
          pl: "W nazwie Canis lupus człon Canis to…",
          ua: "У назві Canis lupus член Canis — це…"
        },
        options: [
          { id: "a", label: { pl: "rodzaj", ua: "рід" } },
          { id: "b", label: { pl: "królestwo", ua: "царство" } },
          { id: "c", label: { pl: "wirus", ua: "вірус" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo wilka to zwierzęta. Canis jest rodzajem, pierwszym członem nazwy.",
              ua: "Царство вовка — це тварини. Canis є родом, першим членом назви."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Canis nie jest wirusem. To rodzaj w nazwie dwuczłonowej wilka.",
              ua: "Canis не є вірусом. Це рід у двочленній назві вовка."
            }
          }
        ],
        explanation: {
          pl: "Canis to rodzaj. Lupus to gatunek.",
          ua: "Canis — це рід. Lupus — це вид."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pięć królestw", ua: "Поняття. П’ять царств" },
      visual: vizGh("l15-krolestwa.png", {
        alt: { pl: "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta", ua: "П’ять царств: бактерії, протисти, гриби, рослини, тварини" },
        title: { pl: "Pięć królestw. Wirusy stoją obok.", ua: "П’ять царств. Віруси стоять поруч." },
        prompt: { pl: "Plansza lekcji 15: pięć królestw." }
      }),
      text: {
        pl: [
          ["W tym kursie jest ", em("pięć królestw"), ": bakterie, protisty, grzyby, rośliny, zwierzęta."],
          "Komórki bakterii, grzybów, roślin i zwierząt porównywałeś już wcześniej. Protisty, bakterie i grzyby dokładniej przyjdą na kolejnych lekcjach.",
          "Dziś wystarczą nazwy pięciu królestw. Nie dokładamy samochodów ani szóstej szufladki dla wirusów."
        ],
        ua: [
          ["У цьому курсі є ", em("п’ять царств"), ": бактерії, протисти, гриби, рослини, тварини."],
          "Клітини бактерій, грибів, рослин і тварин ти вже порівнював. Протисти, бактерії і гриби детальніше прийдуть на наступних уроках.",
          "Сьогодні досить назв п’яти царств. Не додаємо автомобілів і шостої шухлядки для вірусів."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pięć kafelków", ua: "Приклад. П’ять плиток" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dąb jest rośliną. Sarna jest zwierzęciem."],
            ua: ["Дуб є рослиною. Сарна є твариною."]
          }
        },
        {
          text: {
            pl: ["Muchomor jest grzybem, nie drzewem."],
            ua: ["Мухомор є грибом, не деревом."]
          }
        },
        {
          text: {
            pl: ["Bakterie i protisty też są królestwami. Ich budowę zobaczysz później."],
            ua: ["Бактерії і протисти теж є царствами. Їхню будову побачиш пізніше."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Który zestaw?", ua: "Коротке питання. Який набір?" },
      task: {
        id: "l15-g5",
        type: "single-choice",
        question: {
          pl: "Który zestaw to pięć królestw tej lekcji?",
          ua: "Який набір — це п’ять царств цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "bakterie, protisty, grzyby, rośliny, zwierzęta", ua: "бактерії, протисти, гриби, рослини, тварини" } },
          { id: "b", label: { pl: "wirusy, rośliny, zwierzęta, grzyby i samochody", ua: "віруси, рослини, тварини, гриби і автомобілі" } },
          { id: "c", label: { pl: "tylko rośliny i zwierzęta", ua: "лише рослини і тварини" } }
        ],
        answer: "a",
        hint: {
          pl: "Pięć nazw organizmów. Wirusów i samochodów na tej liście nie ma.",
          ua: "П’ять назв організмів. Вірусів і автомобілів у цьому списку немає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirus nie jest królestwem, a samochód nie jest organizmem. Pięć królestw to bakterie, protisty, grzyby, rośliny i zwierzęta.",
              ua: "Вірус не є царством, а автомобіль не є організмом. П’ять царств — це бактерії, протисти, гриби, рослини і тварини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rośliny i zwierzęta to dwa królestwa z pięciu. Brakuje bakterii, protistów i grzybów.",
              ua: "Рослини і тварини — це два царства з п’яти. Бракує бактерій, протистів і грибів."
            }
          }
        ],
        explanation: {
          pl: "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta.",
          ua: "П’ять царств: бактерії, протисти, гриби, рослини, тварини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Grzyb jest rośliną", ua: "Типова помилка. Гриб є рослиною" },
      claim: {
        pl: "„Muchomor jest rośliną, bo rośnie w lesie.”",
        ua: "«Мухомор є рослиною, бо росте в лісі.»"
      },
      text: {
        pl: [
          "Las nie robi z grzyba rośliny.",
          "Muchomor należy do królestwa grzybów."
        ],
        ua: [
          "Ліс не робить із гриба рослину.",
          "Мухомор належить до царства грибів."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Muchomor", ua: "Сам. Мухомор" },
      task: {
        id: "l15-p5",
        type: "single-choice",
        question: {
          pl: "Do którego królestwa należy muchomor?",
          ua: "До якого царства належить мухомор?"
        },
        options: [
          { id: "a", label: { pl: "grzyby", ua: "гриби" } },
          { id: "b", label: { pl: "rośliny, bo stoi na ziemi", ua: "рослини, бо стоїть на землі" } },
          { id: "c", label: { pl: "wirusy", ua: "віруси" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Miejsce wzrostu nie wybiera królestwa. Muchomor jest grzybem, nie rośliną.",
              ua: "Місце росту не вибирає царство. Мухомор є грибом, не рослиною."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirusy nie są królestwem. Muchomor należy do grzybów.",
              ua: "Віруси не є царством. Мухомор належить до грибів."
            }
          }
        ],
        explanation: {
          pl: "Muchomor należy do królestwa grzybów.",
          ua: "Мухомор належить до царства грибів."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wirusy obok", ua: "Поняття. Віруси поруч" },
      visual: vizGh("l15-wirusy.png", {
        alt: { pl: "Wirusy poza pięcioma królestwami", ua: "Віруси поза п’ятьма царствами" },
        title: { pl: "Nie są komórkami. Stoją poza królestwami.", ua: "Не є клітинами. Стоять поза царствами." },
        prompt: { pl: "Plansza lekcji 15: wirusy poza królestwami." }
      }),
      text: {
        pl: [
          "Wirusy nie mają budowy komórkowej. Nie odżywiają się i nie oddychają jak organizmy z poprzedniego działu.",
          ["Dlatego ", em("nie należą do pięciu królestw"), ". Istnieją, ale klasyfikujemy je osobno."],
          "Budowę wirusa poznasz na lekcji 16. Dziś zapamiętaj miejsce: poza królestwami organizmów."
        ],
        ua: [
          "Віруси не мають клітинної будови. Не живляться і не дихають, як організми з попереднього розділу.",
          ["Тому ", em("не належать до п’яти царств"), ". Існують, але класифікуємо їх окремо."],
          "Будову віруса пізнаєш на уроці 16. Сьогодні запам’ятай місце: поза царствами організмів."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kreska obok drzewa", ua: "Приклад. Риса біля дерева" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pięć królestw to organizmy o budowie komórkowej."],
            ua: ["П’ять царств — це організми з клітинною будовою."]
          }
        },
        {
          text: {
            pl: ["Wirus komórki nie ma. Nie wskakuje do roślin ani do zwierząt."],
            ua: ["Вірус клітини не має. Не стрибає до рослин і не до тварин."]
          }
        },
        {
          text: {
            pl: ["Zostaje za kreską: istnieje, ale poza królestwami."],
            ua: ["Лишається за рискою: існує, але поза царствами."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie wirus?", ua: "Коротке питання. Де вірус?" },
      task: {
        id: "l15-g6",
        type: "single-choice",
        question: {
          pl: "Gdzie w tej klasyfikacji są wirusy?",
          ua: "Де в цій класифікації віруси?"
        },
        options: [
          { id: "a", label: { pl: "poza pięcioma królestwami, bo nie są komórkami", ua: "поза п’ятьма царствами, бо не є клітинами" } },
          { id: "b", label: { pl: "w królestwie roślin", ua: "у царстві рослин" } },
          { id: "c", label: { pl: "to gatunek wilka", ua: "це вид вовка" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj miejsca za kreską. Wirus nie jest komórką.",
          ua: "Шукай місце за рискою. Вірус не є клітиною."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rośliny są jednym z pięciu królestw. Wirus nie ma komórki, więc do roślin nie należy.",
              ua: "Рослини є одним із п’яти царств. Вірус не має клітини, тож до рослин не належить."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wilk jest gatunkiem w królestwie zwierząt. Wirus nie jest tym gatunkiem.",
              ua: "Вовк є видом у царстві тварин. Вірус не є цим видом."
            }
          }
        ],
        explanation: {
          pl: "Wirusy stoją poza pięcioma królestwami, bo nie są komórkami.",
          ua: "Віруси стоять поза п’ятьма царствами, бо не є клітинами."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wirusów nie ma", ua: "Типова помилка. Вірусів немає" },
      claim: {
        pl: "„Skoro wirus nie jest w królestwie, to go nie ma.”",
        ua: "«Раз вірус не в царстві, то його немає.»"
      },
      text: {
        pl: [
          "Wirus istnieje. Nie mieści się w pięciu królestwach, bo nie jest komórką.",
          "Klasyfikujemy go osobno. Budowę zobaczysz na następnej lekcji."
        ],
        ua: [
          "Вірус існує. Не вміщається в п’яти царствах, бо не є клітиною.",
          "Класифікуємо його окремо. Будову побачиш на наступному уроці."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Bez komórki", ua: "Сам. Без клітини" },
      task: {
        id: "l15-p6",
        type: "single-choice",
        question: {
          pl: "Wirus nie ma budowy komórkowej. Co z tego wynika?",
          ua: "Вірус не має клітинної будови. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "nie wpisujemy go do pięciu królestw", ua: "не вписуємо його до п’яти царств" } },
          { id: "b", label: { pl: "dostaje chloroplast i staje się rośliną", ua: "дістає хлоропласт і стає рослиною" } },
          { id: "c", label: { pl: "staje się rodzajem psa", ua: "стає родом пса" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Brak komórki nie dodaje chloroplastu. Wirus zostaje poza królestwami.",
              ua: "Брак клітини не додає хлоропласта. Вірус лишається поза царствами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rodzaj psa to Canis, grupa zwierząt. Wirus bez komórki nie staje się psem.",
              ua: "Рід пса — це Canis, група тварин. Вірус без клітини не стає псом."
            }
          }
        ],
        explanation: {
          pl: "Bez budowy komórkowej wirus nie należy do pięciu królestw.",
          ua: "Без клітинної будови вірус не належить до п’яти царств."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą szufladkę sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку шухлядку ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Po co", ua: "Перевірка 1. Навіщо" },
      task: {
        id: "l15-t1",
        type: "single-choice",
        question: {
          pl: "Dlaczego biolodzy w różnych krajach używają tych samych grup?",
          ua: "Чому біологи в різних країнах користуються тими самими групами?"
        },
        options: [
          { id: "a", label: { pl: "żeby porównywać organizmy i nie mylić nazw", ua: "щоб порівнювати організми і не плутати назви" } },
          { id: "b", label: { pl: "żeby każdy kraj miał inne królestwo dla psa", ua: "щоб кожна країна мала інше царство для пса" } },
          { id: "c", label: { pl: "żeby grupować je według gustu", ua: "щоб групувати їх за смаком" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Inne królestwo w każdym kraju właśnie miesza nazwy. Klasyfikacja daje wspólne grupy.",
              ua: "Інше царство в кожній країні якраз плутає назви. Класифікація дає спільні групи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gust nie porządkuje organizmów. Wspólne grupy biorą się z budowy i pokrewieństwa.",
              ua: "Смак не впорядковує організми. Спільні групи беруться з будови і спорідненості."
            }
          }
        ],
        explanation: {
          pl: "Wspólne grupy pozwalają porównywać organizmy i nie mylić nazw.",
          ua: "Спільні групи дають змогу порівнювати організми і не плутати назви."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Gatunek", ua: "Перевірка 2. Вид" },
      task: {
        id: "l15-t2",
        type: "single-choice",
        question: {
          pl: "Czym jest gatunek?",
          ua: "Що таке вид?"
        },
        options: [
          { id: "a", label: { pl: "grupa podobnych organizmów, które mogą dawać płodne potomstwo", ua: "група подібних організмів, які можуть давати плодюче потомство" } },
          { id: "b", label: { pl: "to samo co królestwo", ua: "те саме, що царство" } },
          { id: "c", label: { pl: "najszersza szufladka, szersza niż typ", ua: "найширша шухляда, ширша за тип" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Królestwo jest najszersze. Gatunek jest najwęższą grupą organizmów o płodnym potomstwie.",
              ua: "Царство найширше. Вид є найвужчою групою організмів із плодючим потомством."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Najszersze jest królestwo. Gatunek jest najwęższy: podobne organizmy i płodne potomstwo.",
              ua: "Найширше є царство. Вид найвужчий: подібні організми і плодюче потомство."
            }
          }
        ],
        explanation: {
          pl: "Gatunek to podobne organizmy, które mogą dawać płodne potomstwo.",
          ua: "Вид — це подібні організми, які можуть давати плодюче потомство."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Kolejność", ua: "Перевірка 3. Порядок" },
      task: {
        id: "l15-t3",
        type: "single-choice",
        question: {
          pl: "Która kolejność od najwęższej jednostki jest poprawna?",
          ua: "Який порядок від найвужчої одиниці правильний?"
        },
        options: [
          { id: "a", label: { pl: "gatunek → rodzaj → rodzina → rząd → gromada → typ → królestwo", ua: "вид → рід → родина → ряд → клас → тип → царство" } },
          { id: "b", label: { pl: "królestwo → gatunek → rodzaj", ua: "царство → вид → рід" } },
          { id: "c", label: { pl: "rodzina → gatunek → królestwo → rodzaj", ua: "родина → вид → царство → рід" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ta kolejność zaczyna od najszerszej szufladki. Od najwęższej zaczyna gatunek.",
              ua: "Цей порядок починається з найширшої шухлядки. Від найвужчої починає вид."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szczeble są pomieszane. Od gatunku idzie się przez rodzaj i rodzinę aż do królestwa.",
              ua: "Щаблі перемішані. Від виду йдуть через рід і родину аж до царства."
            }
          }
        ],
        explanation: {
          pl: "Od najwęższej: gatunek, rodzaj, rodzina, rząd, gromada, typ, królestwo.",
          ua: "Від найвужчої: вид, рід, родина, ряд, клас, тип, царство."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Królestwa", ua: "Перевірка 4. Царства" },
      task: {
        id: "l15-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o królestwach jest prawdziwe?",
          ua: "Яке речення про царства правдиве?"
        },
        options: [
          { id: "a", label: { pl: "jest ich pięć: bakterie, protisty, grzyby, rośliny i zwierzęta", ua: "їх п’ять: бактерії, протисти, гриби, рослини і тварини" } },
          { id: "b", label: { pl: "wirusy są szóstym królestwem", ua: "віруси є шостим царством" } },
          { id: "c", label: { pl: "protisty to to samo co zwierzęta", ua: "протисти — це те саме, що тварини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirusy stoją poza królestwami. Królestw organizmów w tej lekcji jest pięć.",
              ua: "Віруси стоять поза царствами. Царств організмів у цьому уроці п’ять."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Protisty i zwierzęta to dwa osobne królestwa. Nie sklejamy ich w jedno.",
              ua: "Протисти і тварини — це два окремі царства. Не склеюємо їх в одне."
            }
          }
        ],
        explanation: {
          pl: "Pięć królestw: bakterie, protisty, grzyby, rośliny i zwierzęta.",
          ua: "П’ять царств: бактерії, протисти, гриби, рослини і тварини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wirusy", ua: "Перевірка 5. Віруси" },
      task: {
        id: "l15-t5",
        type: "single-choice",
        question: {
          pl: "Dlaczego wirusów nie ma wśród pięciu królestw?",
          ua: "Чому вірусів немає серед п’яти царств?"
        },
        options: [
          { id: "a", label: { pl: "bo nie są komórkami; klasyfikujemy je osobno", ua: "бо не є клітинами; класифікуємо їх окремо" } },
          { id: "b", label: { pl: "bo nie istnieją", ua: "бо не існують" } },
          { id: "c", label: { pl: "bo Canis lupus jest nazwą wirusa", ua: "бо Canis lupus є назвою віруса" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wirusy istnieją. Poza królestwami są dlatego, że nie mają budowy komórkowej.",
              ua: "Віруси існують. Поза царствами вони тому, що не мають клітинної будови."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Canis lupus to wilk szary, rodzaj i gatunek. Wirus jest poza królestwami, bo nie jest komórką.",
              ua: "Canis lupus — це вовк сірий, рід і вид. Вірус поза царствами, бо не є клітиною."
            }
          }
        ],
        explanation: {
          pl: "Wirusy nie są komórkami, więc stoją poza pięcioma królestwami.",
          ua: "Віруси не є клітинами, тож стоять поза п’ятьма царствами."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l15-krolestwa.png", {
        alt: { pl: "Pięć królestw i wirusy z boku", ua: "П’ять царств і віруси збоку" },
        title: { pl: "Pięć królestw. Wirusy osobno.", ua: "П’ять царств. Віруси окремо." },
        prompt: { pl: "Ta sama plansza pięciu królestw." }
      }),
      text: {
        pl: [
          "Klasyfikacja grupuje według budowy i pokrewieństwa, nie według gustu.",
          "Gatunek: podobne organizmy i płodne potomstwo. Nazwa dwuczłonowa: rodzaj + gatunek.",
          "Od gatunku do królestwa: rodzaj, rodzina, rząd, gromada, typ.",
          "Pięć królestw: bakterie, protisty, grzyby, rośliny, zwierzęta. Wirusy poza nimi."
        ],
        ua: [
          "Класифікація групує за будовою і спорідненістю, не за смаком.",
          "Вид: подібні організми і плодюче потомство. Двочленна назва: рід + вид.",
          "Від виду до царства: рід, родина, ряд, клас, тип.",
          "П’ять царств: бактерії, протисти, гриби, рослини, тварини. Віруси поза ними."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, po co klasyfikujemy organizmy.", ua: "Поясню, навіщо класифікуємо організми." },
        { pl: "Powiem, czym jest gatunek.", ua: "Скажу, що таке вид." },
        { pl: "Uporządkuję jednostki od gatunku do królestwa.", ua: "Упорядкую одиниці від виду до царства." },
        { pl: "Odczytam nazwę dwuczłonową: najpierw rodzaj, potem gatunek.", ua: "Прочитаю двочленну назву: спочатку рід, потім вид." },
        { pl: "Wymienię pięć królestw.", ua: "Назву п’ять царств." },
        { pl: "Powiem, że wirusy nie należą do królestw organizmów.", ua: "Скажу, що віруси не належать до царств організмів." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
