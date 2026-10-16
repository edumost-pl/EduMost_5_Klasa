function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L21_Tkanki_roslinne/images/";

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
      heading: { pl: "Misja: z czego zrobiona roślina", ua: "Місія: з чого зроблена рослина" },
      visual: vizGh("l21-zacznijmy.png", {
        alt: { pl: "Sadzonka z korzeniem, łodygą i liśćmi", ua: "Паросток з коренем, стеблом і листками" },
        title: { pl: "Organy już znasz z nazwy. Dziś tkanki.", ua: "Органи вже знаєш з назви. Сьогодні тканини." },
        prompt: { pl: "Plansza lekcji 21: korzeń, łodyga i liście." }
      }),
      text: {
        pl: [
          "To lekcja 21: tkanki roślinne. Na lekcji 5 komórki składały się w tkankę, a tkanki w narząd. U rośliny ten poziom nazywa się organem.",
          "Korzeń, łodyga i liść są organami. Ich budowę otworzysz na lekcjach 22–24. Dziś pięć tkanek, z których te organy są zbudowane.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 21: рослинні тканини. На уроці 5 клітини складалися в тканину, а тканини — в орган. У рослини цей рівень називається органом.",
          "Корінь, стебло і листок є органами. Їхню будову відкриєш на уроках 22–24. Сьогодні п’ять тканин, з яких ці органи збудовані.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "tkanka", ua: "тканина — подібні клітини, одна робота" },
        { pl: "organ", ua: "орган — корінь, стебло або листок" },
        { pl: "tkanka twórcza", ua: "твірна тканина — поділ у конусі наростання" },
        { pl: "tkanki stałe", ua: "сталі тканини — уже одна робота" },
        { pl: "tkanka okrywająca", ua: "покривна тканина — шкірка, продихи, волоски" },
        { pl: "tkanka miękiszowa", ua: "паренхіма — наповнення і запас" },
        { pl: "tkanka wzmacniająca", ua: "механічна тканина — жорсткість, не деревина" },
        { pl: "drewno / łyko", ua: "деревина — вода вгору; луб — цукри з листків" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Tkanka", ua: "Поняття. Тканина" },
      visual: vizGh("l21-tkanka.png", {
        alt: { pl: "Podobne komórki roślinne obok siebie", ua: "Подібні рослинні клітини поруч" },
        title: { pl: "Podobne komórki. Jedna funkcja.", ua: "Подібні клітини. Одна функція." },
        prompt: { pl: "Plansza lekcji 21: tkanka." }
      }),
      text: {
        pl: [
          ["", em("Tkanka"), " to zespół podobnych komórek o wspólnej funkcji. Tak było na lekcji 5 u zwierząt. U roślin zasada jest ta sama."],
          "Jedna komórka niewiele zmagazynuje. Warstwa podobnych komórek trzyma już zapas.",
          "Z tkanek powstają organy: korzeń, łodyga i liść. Organy razem tworzą organizm rośliny. Kolejność: komórka, tkanka, organ, organizm."
        ],
        ua: [
          ["", em("Тканина"), " — це група подібних клітин зі спільною функцією. Так було на уроці 5 у тварин. У рослин правило те саме."],
          "Одна клітина мало запасає. Шар подібних клітин уже тримає запас.",
          "З тканин постають органи: корінь, стебло і листок. Органи разом творять організм рослини. Порядок: клітина, тканина, орган, організм."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Komórka, warstwa, korzeń", ua: "Приклад. Клітина, шар, корінь" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jedna komórka roślinna ze ścianą i wakuolą zostaje jedną komórką."],
            ua: ["Одна рослинна клітина зі стінкою і вакуолею лишається однією клітиною."]
          }
        },
        {
          text: {
            pl: ["Kilkanaście podobnych komórek obok siebie, z jedną pracą, tworzy tkankę."],
            ua: ["Кільканадцять подібних клітин поруч, з однією роботою, утворюють тканину."]
          }
        },
        {
          text: {
            pl: ["Korzeń fasoli jest organem. Organ jest zbudowany z tkanek i jest większy od jednej tkanki."],
            ua: ["Корінь квасолі є органом. Орган збудований із тканин і є більшим за одну тканину."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Wspólna funkcja", ua: "Коротке питання. Спільна функція" },
      task: {
        id: "l21-g1",
        type: "single-choice",
        question: {
          pl: "Czym jest tkanka?",
          ua: "Що таке тканина?"
        },
        options: [
          { id: "a", label: { pl: "zespołem podobnych komórek o wspólnej funkcji", ua: "групою подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "jedną komórką roślinną z dużą wakuolą", ua: "однією рослинною клітиною з великою вакуолею" } },
          { id: "c", label: { pl: "całym korzeniem, bo korzeń jest częścią rośliny", ua: "цілим коренем, бо корінь є частиною рослини" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj wielu podobnych komórek i jednej pracy.",
          ua: "Шукай багато подібних клітин і одну роботу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jedna komórka z wakuolą zostaje komórką. Tkanka zaczyna się, gdy podobne komórki mają wspólną funkcję.",
              ua: "Одна клітина з вакуолею лишається клітиною. Тканина починається, коли подібні клітини мають спільну функцію."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Korzeń jest organem. Tkanka jest warstwą podobnych komórek wewnątrz organu.",
              ua: "Корінь є органом. Тканина є шаром подібних клітин усередині органа."
            }
          }
        ],
        explanation: {
          pl: "Tkanka to zespół podobnych komórek o wspólnej funkcji.",
          ua: "Тканина — це група подібних клітин зі спільною функцією."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Cały liść", ua: "Типова помилка. Цілий листок" },
      claim: {
        pl: "„Tkanka to cały liść, bo liść jest zielony.”",
        ua: "«Тканина — це цілий листок, бо листок зелений.»"
      },
      text: {
        pl: [
          "Liść jest organem. Zielony kolor nie skleja różnych warstw w jedną tkankę.",
          "Tkanka to jedna grupa podobnych komórek o jednej funkcji."
        ],
        ua: [
          "Листок є органом. Зелений колір не склеює різні шари в одну тканину.",
          "Тканина — це одна група подібних клітин з однією функцією."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Łodyga z komórek", ua: "Сам. Стебло з клітин" },
      task: {
        id: "l21-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń ogląda łodygę fasoli i mówi, że łodyga jest tkanką, bo składa się z komórek. Co poprawić?",
          ua: "Учень розглядає стебло квасолі і каже, що стебло є тканиною, бо складається з клітин. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "łodyga jest organem; tkanka to zespół podobnych komórek o wspólnej funkcji", ua: "стебло є органом; тканина — це група подібних клітин зі спільною функцією" } },
          { id: "b", label: { pl: "tak — każdy organ jest jedną tkanką", ua: "так — кожен орган є однією тканиною" } },
          { id: "c", label: { pl: "tak — łodyga jest tkanką, bo cała roślina ma jedno jądro", ua: "так — стебло є тканиною, бо вся рослина має одне ядро" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Organ jest zbudowany z tkanek. Sama liczba komórek nie robi z organu jednej tkanki.",
              ua: "Орган збудований із тканин. Сама кількість клітин не робить з органа однієї тканини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jądro jest w komórce. Łodyga jest organem z wielu komórek, a nie jedną tkanką z jednym jądrem.",
              ua: "Ядро є в клітині. Стебло є органом з багатьох клітин, а не однією тканиною з одним ядром."
            }
          }
        ],
        explanation: {
          pl: "Łodyga jest organem. Tkanka to zespół podobnych komórek o wspólnej funkcji.",
          ua: "Стебло є органом. Тканина — це група подібних клітин зі спільною функцією."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Twórcza i stałe", ua: "Поняття. Твірна і сталі" },
      visual: vizGh("l21-tworcza.png", {
        alt: { pl: "Stożki wzrostu na czubku pędu i korzenia", ua: "Конуси наростання на кінчику пагона і кореня" },
        title: { pl: "Przyrost jest na czubkach.", ua: "Приріст є на кінчиках." },
        prompt: { pl: "Plansza lekcji 21: tkanka twórcza." }
      }),
      text: {
        pl: [
          ["Komórki ", em("tkanki twórczej"), " są zwykle małe, mają cienkie ściany i duże jądra. Dzielą się. Z nowych komórek powstają tkanki stałe."],
          ["Są w ", em("stożku wzrostu"), " pędu, na czubku łodygi, i w stożku wzrostu korzenia, na czubku korzenia."],
          ["", em("Tkanki stałe"), " to okrywająca, miękiszowa, wzmacniająca i przewodząca. Ich komórki są już ustawione do jednej pracy."],
          "Trawa po skoszeniu odrasta od dołu pędu, bo u niej tkanka twórcza jest też nisko. Korzeń wydłuża się na czubku. Strefy korzenia są na lekcji 22."
        ],
        ua: [
          ["Клітини ", em("твірної тканини"), " зазвичай малі, мають тонкі стінки і великі ядра. Діляться. З нових клітин постають сталі тканини."],
          ["Вони є в ", em("конусі наростання"), " пагона, на кінчику стебла, і в конусі наростання кореня, на кінчику кореня."],
          ["", em("Сталі тканини"), " — це покривна, паренхіма, механічна і провідна. Їхні клітини вже налаштовані на одну роботу."],
          "Трава після скошування відростає від низу пагона, бо в неї твірна тканина є також низько. Корінь видовжується на кінчику. Зони кореня є на уроці 22."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa czubki", ua: "Приклад. Два кінчики" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na czubku pędu fasoli małe gęste komórki się dzielą. To stożek wzrostu pędu. Pęd się wydłuża."],
            ua: ["На кінчику пагона квасолі малі щільні клітини діляться. Це конус наростання пагона. Пагін видовжується."]
          }
        },
        {
          text: {
            pl: ["Na czubku korzenia jest drugi stożek. Korzeń wydłuża się na końcu."],
            ua: ["На кінчику кореня є другий конус. Корінь видовжується на кінці."]
          }
        },
        {
          text: {
            pl: ["Skórka na łodydze już chroni. To tkanka stała. Nie jest stożkiem wzrostu."],
            ua: ["Шкірка на стеблі вже захищає. Це стала тканина. Вона не є конусом наростання."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie podział", ua: "Коротке питання. Де поділ" },
      task: {
        id: "l21-g2",
        type: "single-choice",
        question: {
          pl: "Czym tkanka twórcza różni się od tkanek stałych?",
          ua: "Чим твірна тканина відрізняється від сталих?"
        },
        options: [
          { id: "a", label: { pl: "twórcza dzieli się w stożkach wzrostu pędu i korzenia; stałe już mają jedną funkcję", ua: "твірна ділиться в конусах наростання пагона і кореня; сталі вже мають одну функцію" } },
          { id: "b", label: { pl: "twórcza leży w środku łodygi, bo tam łodyga jest najgrubsza", ua: "твірна лежить усередині стебла, бо там стебло найтовще" } },
          { id: "c", label: { pl: "stałe dzielą się na czubku, a twórcza tylko trzyma zapas", ua: "сталі діляться на кінчику, а твірна лише тримає запас" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj małych komórek, które dzielą się na czubkach.",
          ua: "Шукай малі клітини, які діляться на кінчиках."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Środek łodygi jest już zbudowany. Tkanka twórcza jest w stożkach wzrostu: na czubku pędu i na czubku korzenia.",
              ua: "Середина стебла вже збудована. Твірна тканина є в конусах наростання: на кінчику пагона і на кінчику кореня."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dzielą się komórki tkanki twórczej. Tkanki stałe są już ustawione do jednej pracy.",
              ua: "Діляться клітини твірної тканини. Сталі тканини вже налаштовані на одну роботу."
            }
          }
        ],
        explanation: {
          pl: "Tkanka twórcza dzieli się w stożkach wzrostu. Tkanki stałe mają już jedną funkcję.",
          ua: "Твірна тканина ділиться в конусах наростання. Сталі тканини вже мають одну функцію."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Rośnie wszędzie", ua: "Типова помилка. Росте скрізь" },
      claim: {
        pl: "„Roślina przyrasta naraz w środku łodygi, więc stożek wzrostu jest wszędzie.”",
        ua: "«Рослина приростає одразу всередині стебла, тож конус наростання є скрізь.»"
      },
      text: {
        pl: [
          "Stożki wzrostu są na czubku pędu i na czubku korzenia.",
          "Trawa odrasta od dołu pędu, bo jej tkanka twórcza jest nisko. Środek długości łodygi jest już z tkanek stałych."
        ],
        ua: [
          "Конуси наростання є на кінчику пагона і на кінчику кореня.",
          "Трава відростає від низу пагона, бо її твірна тканина є низько. Середина довжини стебла вже зі сталих тканин."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ucina czubek", ua: "Сам. Зрізає кінчик" },
      task: {
        id: "l21-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń ucina czubek korzenia fasoli i mówi, że korzeń dalej będzie się wydłużał ze środka, bo każda komórka korzenia się dzieli. Co poprawić?",
          ua: "Учень зрізає кінчик кореня квасолі і каже, що корінь далі буде видовжуватися із середини, бо кожна клітина кореня ділиться. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "wydłużanie jest w stożku wzrostu na czubku; komórki w środku należą do tkanek stałych", ua: "видовження є в конусі наростання на кінчику; клітини всередині належать до сталих тканин" } },
          { id: "b", label: { pl: "tak — środek korzenia jest stożkiem wzrostu", ua: "так — середина кореня є конусом наростання" } },
          { id: "c", label: { pl: "tak — czubek korzenia to skórka, a skórka zawsze się dzieli", ua: "так — кінчик кореня це шкірка, а шкірка завжди ділиться" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Stożek wzrostu korzenia jest na czubku. Środek korzenia jest już z tkanek stałych.",
              ua: "Конус наростання кореня є на кінчику. Середина кореня вже зі сталих тканин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skórka jest tkanką stałą i okrywa roślinę. Dzielą się komórki tkanki twórczej w stożku wzrostu.",
              ua: "Шкірка є сталою тканиною і вкриває рослину. Діляться клітини твірної тканини в конусі наростання."
            }
          }
        ],
        explanation: {
          pl: "Korzeń wydłuża się w stożku wzrostu na czubku. Komórki w środku należą do tkanek stałych.",
          ua: "Корінь видовжується в конусі наростання на кінчику. Клітини всередині належать до сталих тканин."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Tkanka okrywająca", ua: "Поняття. Покривна тканина" },
      visual: vizGh("l21-okrywajaca.png", {
        alt: { pl: "Skórka, szparka i włośnik", ua: "Шкірка, продих і кореневий волосок" },
        title: { pl: "Skórka chroni. Szparka i włośnik mają własne prace.", ua: "Шкірка захищає. Продих і волосок мають власні роботи." },
        prompt: { pl: "Plansza lekcji 21: tkanka okrywająca." }
      }),
      text: {
        pl: [
          ["", em("Tkanka okrywająca"), " to zwykle ", em("skórka"), ". Okrywa młodą roślinę jak cienka folia: chroni przed urazami, zarazkami i nadmierną utratą wody."],
          ["Na liściu i łodydze bywa ", em("kutykula"), " — woskowa warstewka."],
          ["", em("Szparki"), " znasz z lekcji 7. Dwie komórki jak fasolki zostawiają furtkę na gazy: dwutlenek węgla wchodzi do fotosyntezy, tlen wychodzi."],
          ["", em("Włośniki"), " to wypustki skórki korzenia. Zwiększają powierzchnię i ułatwiają pobieranie wody oraz soli mineralnych. Budowa korzenia jest na lekcji 22, warstwy liścia na lekcji 24."]
        ],
        ua: [
          ["", em("Покривна тканина"), " — зазвичай ", em("шкірка"), ". Вкриває молоду рослину як тонка плівка: захищає від ушкоджень, мікробів і надмірної втрати води."],
          ["На листку і стеблі буває ", em("кутикула"), " — восковий шар."],
          ["", em("Продихи"), " знаєш з уроку 7. Дві клітини, як квасолини, лишають хвіртку для газів: вуглекислий газ входить до фотосинтезу, кисень виходить."],
          ["", em("Кореневі волоски"), " — це вирости шкірки кореня. Збільшують поверхню і полегшують вбирання води та мінеральних солей. Будова кореня є на уроці 22, шари листка — на уроці 24."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Folia, furtka, włosek", ua: "Приклад. Плівка, хвіртка, волосок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Skórka młodego liścia jest cienką okrywą. Kutykula to wosk na niej. Ogranicza utratę wody."],
            ua: ["Шкірка молодого листка є тонкою покришкою. Кутикула — це віск на ній. Обмежує втрату води."]
          }
        },
        {
          text: {
            pl: ["Dwie komórki jak fasolki zostawiają szparkę. Tędy wchodzi dwutlenek węgla, a wychodzi tlen."],
            ua: ["Дві клітини, як квасолини, лишають продих. Сюди входить вуглекислий газ, а виходить кисень."]
          }
        },
        {
          text: {
            pl: ["Włośnik na korzeniu też należy do skórki. Pobiera wodę i sole."],
            ua: ["Кореневий волосок на корені теж належить до шкірки. Вбирає воду і солі."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Włos na korzeniu", ua: "Коротке питання. Волосок на корені" },
      task: {
        id: "l21-g3",
        type: "single-choice",
        question: {
          pl: "Do czego służy włośnik i do jakiej tkanki należy?",
          ua: "Для чого служить кореневий волосок і до якої тканини належить?"
        },
        options: [
          { id: "a", label: { pl: "jest wypustką tkanki okrywającej i pomaga pobierać wodę oraz sole", ua: "є виростом покривної тканини і допомагає вбирати воду та солі" } },
          { id: "b", label: { pl: "jest szparką, więc wymienia gazy w liściu", ua: "є продихом, тож обмінює гази в листку" } },
          { id: "c", label: { pl: "jest stożkiem wzrostu, bo leży przy końcu korzenia", ua: "є конусом наростання, бо лежить біля кінця кореня" } }
        ],
        answer: "a",
        hint: {
          pl: "Włośnik jest na korzeniu. Gazy w liściu idą przez szparkę.",
          ua: "Волосок є на корені. Гази в листку йдуть через продих."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gazy w liściu wymienia szparka. Włośnik jest wypustką skórki korzenia i pomaga pobierać wodę oraz sole.",
              ua: "Гази в листку обмінює продих. Кореневий волосок є виростом шкірки кореня і допомагає вбирати воду та солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Stożek wzrostu to małe dzielące się komórki na czubku. Włośnik należy do tkanki okrywającej i pobiera wodę oraz sole.",
              ua: "Конус наростання — це малі клітини, що діляться, на кінчику. Волосок належить до покривної тканини і вбирає воду та солі."
            }
          }
        ],
        explanation: {
          pl: "Włośnik jest wypustką tkanki okrywającej. Pomaga pobierać wodę i sole.",
          ua: "Кореневий волосок є виростом покривної тканини. Допомагає вбирати воду і солі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Otwór na wodę", ua: "Типова помилка. Отвір для води" },
      claim: {
        pl: "„Szparka pobiera wodę z gleby, bo jest otworem.”",
        ua: "«Продих вбирає воду з ґрунту, бо є отвором.»"
      },
      text: {
        pl: [
          "Szparka jest furtką w skórce liścia na gazy.",
          "Wodę i sole pobiera włośnik na korzeniu. Oba należą do tkanki okrywającej, ale praca jest inna."
        ],
        ua: [
          "Продих є хвірткою в шкірці листка для газів.",
          "Воду і солі вбирає кореневий волосок на корені. Обидва належать до покривної тканини, але робота різна."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Wosk na łodydze", ua: "Сам. Віск на стеблі" },
      task: {
        id: "l21-p3",
        type: "single-choice",
        question: {
          pl: "Na młodej łodydze jest kutykula. Uczeń mówi, że to stożek wzrostu, bo leży przy czubku. Co poprawić?",
          ua: "На молодому стеблі є кутикула. Учень каже, що це конус наростання, бо лежить біля кінчика. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "kutykula jest woskową warstwą skórki i ogranicza utratę wody; stożek wzrostu to dzielące się komórki na czubku", ua: "кутикула є восковим шаром шкірки і обмежує втрату води; конус наростання — це клітини, що діляться, на кінчику" } },
          { id: "b", label: { pl: "tak — każdy wosk na łodydze jest stożkiem wzrostu korzenia", ua: "так — кожен віск на стеблі є конусом наростання кореня" } },
          { id: "c", label: { pl: "tak — kutykula wymienia gazy, więc szparka jest zbędna", ua: "так — кутикула обмінює гази, тож продих зайвий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kutykula jest woskiem tkanki okrywającej. Stożek wzrostu korzenia to małe komórki, które się dzielą na czubku.",
              ua: "Кутикула є воском покривної тканини. Конус наростання кореня — це малі клітини, які діляться на кінчику."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gazy wymienia szparka. Kutykula jest woskową warstwą i ogranicza utratę wody.",
              ua: "Гази обмінює продих. Кутикула є восковим шаром і обмежує втрату води."
            }
          }
        ],
        explanation: {
          pl: "Kutykula jest woskową warstwą skórki. Stożek wzrostu to dzielące się komórki na czubku.",
          ua: "Кутикула є восковим шаром шкірки. Конус наростання — це клітини, що діляться, на кінчику."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Tkanka miękiszowa", ua: "Поняття. Паренхіма" },
      visual: vizGh("l21-miekisz.png", {
        alt: { pl: "Jasne wypełnienie łodygi i zielone komórki liścia", ua: "Світле заповнення стебла і зелені клітини листка" },
        title: { pl: "Wypełnia i magazynuje. W liściu bywa zielona.", ua: "Виповнює і запасає. У листку буває зеленою." },
        prompt: { pl: "Plansza lekcji 21: tkanka miękiszowa." }
      }),
      text: {
        pl: [
          ["", em("Tkanka miękiszowa"), " wypełnia organy. Jej komórki mają zwykle cienkie ściany i duże wakuole."],
          "Tu roślina trzyma zapasy: wodę, cukry i skrobię. Skrobię znasz z lekcji 4 i 9.",
          "W liściu miękisz bywa zielony. Ma chloroplasty i prowadzi fotosyntezę. Ułożenie warstw w blaszce liścia jest na lekcji 24."
        ],
        ua: [
          ["", em("Паренхіма"), " виповнює органи. Її клітини зазвичай мають тонкі стінки і великі вакуолі."],
          "Тут рослина тримає запаси: воду, цукри і крохмаль. Крохмаль знаєш з уроків 4 і 9.",
          "У листку паренхіма буває зеленою. Має хлоропласти і веде фотосинтез. Розташування шарів у пластинці листка є на уроці 24."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zapas i zieleń", ua: "Приклад. Запас і зелень" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wewnątrz łodygi jasne wypełnienie trzyma wodę i ziarna skrobi. To miękisz."],
            ua: ["Усередині стебла світле заповнення тримає воду і зерна крохмалю. Це паренхіма."]
          }
        },
        {
          text: {
            pl: ["W liściu podobne komórki są zielone. Chloroplasty robią cukier. To ten sam rodzaj tkanki."],
            ua: ["У листку подібні клітини зелені. Хлоропласти роблять цукор. Це той самий вид тканини."]
          }
        },
        {
          text: {
            pl: ["Cienka ściana tych komórek nie jest grubym stelażem. Stelaż ma następną nazwę."],
            ua: ["Тонка стінка цих клітин не є товстим каркасом. Каркас має наступну назву."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Wypełnienie", ua: "Коротке питання. Заповнення" },
      task: {
        id: "l21-g4",
        type: "single-choice",
        question: {
          pl: "Do czego służy tkanka miękiszowa?",
          ua: "Для чого служить паренхіма?"
        },
        options: [
          { id: "a", label: { pl: "wypełnia organ i magazynuje zapasy; w liściu może prowadzić fotosyntezę", ua: "виповнює орган і запасає; у листку може вести фотосинтез" } },
          { id: "b", label: { pl: "dzieli się na czubku korzenia, bo ma cienkie ściany", ua: "ділиться на кінчику кореня, бо має тонкі стінки" } },
          { id: "c", label: { pl: "jest kutykulą, bo leży na powierzchni liścia", ua: "є кутикулою, бо лежить на поверхні листка" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj zapasu i zielonych komórek z chloroplastami.",
          ua: "Шукай запас і зелені клітини з хлоропластами."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Na czubku korzenia dzieli się tkanka twórcza. Miękisz wypełnia organ i trzyma zapas.",
              ua: "На кінчику кореня ділиться твірна тканина. Паренхіма виповнює орган і тримає запас."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kutykula jest woskiem skórki. Miękisz jest wypełnieniem w środku organu.",
              ua: "Кутикула є воском шкірки. Паренхіма є заповненням усередині органа."
            }
          }
        ],
        explanation: {
          pl: "Miękisz wypełnia organ i magazynuje zapasy. W liściu może prowadzić fotosyntezę.",
          ua: "Паренхіма виповнює орган і запасає. У листку може вести фотосинтез."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zieleń na wierzchu", ua: "Типова помилка. Зелень зверху" },
      claim: {
        pl: "„Zielone komórki liścia to skórka, bo widać je z wierzchu.”",
        ua: "«Зелені клітини листка — це шкірка, бо їх видно зверху.»"
      },
      text: {
        pl: [
          "Zielone komórki z chloroplastami wewnątrz liścia to miękisz.",
          "Skórka jest cienką okrywą na powierzchni. Kolor nie nadaje nazwy tkanki."
        ],
        ua: [
          "Зелені клітини з хлоропластами всередині листка — це паренхіма.",
          "Шкірка є тонкою покришкою на поверхні. Колір не дає назви тканини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Skrobia i zieleń", ua: "Сам. Крохмаль і зелень" },
      task: {
        id: "l21-p4",
        type: "single-choice",
        question: {
          pl: "W jasnym wnętrzu łodygi są komórki z cienkimi ścianami i ziarnami skrobi. W liściu podobne komórki są zielone. Co je łączy?",
          ua: "У світлій середині стебла є клітини з тонкими стінками і зернами крохмалю. У листку подібні клітини зелені. Що їх об’єднує?"
        },
        options: [
          { id: "a", label: { pl: "obie grupy to miękisz: w łodydze zapas, w liściu także fotosynteza", ua: "обидві групи — це паренхіма: у стеблі запас, у листку ще й фотосинтез" } },
          { id: "b", label: { pl: "obie to skórka, bo skrobia leży na zewnątrz łodygi", ua: "обидві — це шкірка, бо крохмаль лежить зовні стебла" } },
          { id: "c", label: { pl: "obie to stożek wzrostu, bo mają wakuolę", ua: "обидві — це конус наростання, бо мають вакуолю" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skórka okrywa powierzchnię. Komórki ze skrobią w środku łodygi i zielone komórki liścia to miękisz.",
              ua: "Шкірка вкриває поверхню. Клітини з крохмалем усередині стебла і зелені клітини листка — це паренхіма."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wakuola jest w komórce miękiszu. Stożek wzrostu to miejsce podziałów na czubku, nie magazyn skrobi.",
              ua: "Вакуоля є в клітині паренхіми. Конус наростання — це місце поділів на кінчику, не запас крохмалю."
            }
          }
        ],
        explanation: {
          pl: "Obie grupy to miękisz. W łodydze trzyma zapas, w liściu może też prowadzić fotosyntezę.",
          ua: "Обидві групи — це паренхіма. У стеблі тримає запас, у листку може ще вести фотосинтез."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Tkanka wzmacniająca", ua: "Поняття. Механічна тканина" },
      visual: vizGh("l21-wzmacniajaca.png", {
        alt: { pl: "Grubsze ściany w łodydze i ogonku liścia", ua: "Товщі стінки в стеблі і черешку листка" },
        title: { pl: "Grubsza ściana trzyma kształt.", ua: "Товща стінка тримає форму." },
        prompt: { pl: "Plansza lekcji 21: tkanka wzmacniająca." }
      }),
      text: {
        pl: [
          ["", em("Tkanka wzmacniająca"), " usztywnia roślinę. Jej komórki mają grubsze ściany niż miękisz."],
          "Dzięki niej łodyga i ogonek liścia nie uginają się od własnego ciężaru i od wiatru jak mokra nitka.",
          "Ułożenie wiązek w łodydze jest na lekcji 23."
        ],
        ua: [
          ["", em("Механічна тканина"), " надає рослині жорсткості. Її клітини мають товщі стінки, ніж паренхіма."],
          "Завдяки їй стебло і черешок листка не гнуться від власної ваги і від вітру, як мокра нитка.",
          "Розташування пучків у стеблі є на уроці 23."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Łodyga na wietrze", ua: "Приклад. Стебло на вітрі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Młoda łodyga stoi. Wzdłuż niej są komórki z grubszymi ścianami. To stelaż."],
            ua: ["Молоде стебло стоїть. Уздовж нього є клітини з товщими стінками. Це каркас."]
          }
        },
        {
          text: {
            pl: ["Ogonek trzyma blaszkę liścia. Ta sama tkanka daje sztywność, nie magazyn skrobi."],
            ua: ["Черешок тримає пластинку листка. Та сама тканина дає жорсткість, не запас крохмалю."]
          }
        },
        {
          text: {
            pl: ["Woda i skrobia zostają w miękiszu. Grubsza ściana to inna praca."],
            ua: ["Вода і крохмаль лишаються в паренхімі. Товща стінка — це інша робота."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Grubsza ściana", ua: "Коротке питання. Товща стінка" },
      task: {
        id: "l21-g5",
        type: "single-choice",
        question: {
          pl: "Jak odróżnisz tkankę wzmacniającą od miękiszu?",
          ua: "Як відрізниш механічну тканину від паренхіми?"
        },
        options: [
          { id: "a", label: { pl: "wzmacniająca usztywnia i ma grubsze ściany; miękisz wypełnia i magazynuje", ua: "механічна надає жорсткості і має товщі стінки; паренхіма виповнює і запасає" } },
          { id: "b", label: { pl: "wzmacniająca magazynuje skrobię, a miękisz jest stelażem", ua: "механічна запасає крохмаль, а паренхіма є каркасом" } },
          { id: "c", label: { pl: "to ta sama tkanka, bo obie są wewnątrz łodygi", ua: "це та сама тканина, бо обидві є всередині стебла" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj grubszej ściany i sztywności, nie ziaren skrobi.",
          ua: "Шукай товщу стінку і жорсткість, не зерна крохмалю."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrobię magazynuje miękisz. Tkanka wzmacniająca usztywnia roślinę grubszymi ścianami.",
              ua: "Крохмаль запасає паренхіма. Механічна тканина надає рослині жорсткості товщими стінками."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Obie bywają w łodydze, ale praca jest inna. Miękisz wypełnia i magazynuje. Wzmacniająca usztywnia.",
              ua: "Обидві бувають у стеблі, але робота різна. Паренхіма виповнює і запасає. Механічна надає жорсткості."
            }
          }
        ],
        explanation: {
          pl: "Tkanka wzmacniająca usztywnia i ma grubsze ściany. Miękisz wypełnia i magazynuje.",
          ua: "Механічна тканина надає жорсткості і має товщі стінки. Паренхіма виповнює і запасає."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Twarde drewno", ua: "Типова помилка. Тверда деревина" },
      claim: {
        pl: "„Tkanka wzmacniająca to drewno, bo obie są twarde.”",
        ua: "«Механічна тканина — це деревина, бо обидві тверді.»"
      },
      text: {
        pl: [
          "Sztywność daje tkanka wzmacniająca. Jej komórki mają grubsze ściany niż miękisz.",
          "Drewno należy do tkanki przewodzącej i niesie wodę oraz sole z korzenia w górę."
        ],
        ua: [
          "Жорсткість дає механічна тканина. Її клітини мають товщі стінки, ніж паренхіма.",
          "Деревина належить до провідної тканини і несе воду та солі з кореня вгору."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Fasola na wietrze", ua: "Сам. Квасоля на вітрі" },
      task: {
        id: "l21-p5",
        type: "single-choice",
        question: {
          pl: "Wiatr ugina młodą fasolę, a łodyga nie składa się jak mokra nitka. Uczeń mówi, że usztywniła ją skrobia w miękiszu. Co poprawić?",
          ua: "Вітер гне молоду квасолю, а стебло не складається, як мокра нитка. Учень каже, що жорсткості надав крохмаль у паренхімі. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "sztywność daje tkanka wzmacniająca o grubszych ścianach; miękisz trzyma skrobię", ua: "жорсткість дає механічна тканина з товщими стінками; паренхіма тримає крохмаль" } },
          { id: "b", label: { pl: "tak — ziarna skrobi są ścianami, więc miękisz jest stelażem", ua: "так — зерна крохмалю є стінками, тож паренхіма є каркасом" } },
          { id: "c", label: { pl: "tak — łodyga stoi, bo stożek wzrostu jest w środku ogonka", ua: "так — стебло стоїть, бо конус наростання є всередині черешка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ziarna skrobi są zapasem w miękiszu. Stelaż to tkanka wzmacniająca z grubszymi ścianami.",
              ua: "Зерна крохмалю є запасом у паренхімі. Каркас — це механічна тканина з товщими стінками."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Stożek wzrostu jest na czubku i jego komórki się dzielą. Sztywność łodygi daje tkanka wzmacniająca.",
              ua: "Конус наростання є на кінчику, і його клітини діляться. Жорсткість стебла дає механічна тканина."
            }
          }
        ],
        explanation: {
          pl: "Łodygę usztywnia tkanka wzmacniająca. Skrobia w miękiszu jest zapasem.",
          ua: "Стебло робить жорстким механічна тканина. Крохмаль у паренхімі є запасом."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Drewno i łyko", ua: "Поняття. Деревина і луб" },
      visual: vizGh("l21-przewodzaca.png", {
        alt: { pl: "Woda w górę drewnem, cukry z liści łykiem", ua: "Вода вгору деревиною, цукри з листків лубом" },
        title: { pl: "Dwa ładunki. Dwa kierunki.", ua: "Два вантажі. Два напрями." },
        prompt: { pl: "Plansza lekcji 21: tkanka przewodząca." }
      }),
      text: {
        pl: [
          ["", em("Tkanka przewodząca"), " to rury rośliny. Na lekcji 7 komórki były ułożone jak rury. Dziś dwa kierunki."],
          ["", em("Drewno"), " prowadzi wodę i sole mineralne z korzenia w górę, do łodygi i liści."],
          ["", em("Łyko"), " prowadzi cukry z liści tam, gdzie są potrzebne: do korzenia, pąków i do zapasu w miękiszu. Cukry powstają w fotosyntezie, na lekcji 9."],
          "Dziś wystarczą te dwa kierunki. Przekrój wiązki w łodydze jest na lekcji 23."
        ],
        ua: [
          ["", em("Провідна тканина"), " — це труби рослини. На уроці 7 клітини були складені як труби. Сьогодні два напрями."],
          ["", em("Деревина"), " веде воду і мінеральні солі з кореня вгору, до стебла і листків."],
          ["", em("Луб"), " веде цукри з листків туди, де вони потрібні: до кореня, бруньок і до запасу в паренхімі. Цукри постають у фотосинтезі, на уроці 9."],
          "Сьогодні досить цих двох напрямів. Переріз пучка в стеблі є на уроці 23."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie strzałki", ua: "Приклад. Дві стрілки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Niebieska strzałka idzie z korzenia do liścia. Woda i sole. To drewno."],
            ua: ["Синя стрілка йде з кореня до листка. Вода і солі. Це деревина."]
          }
        },
        {
          text: {
            pl: ["Pomarańczowa strzałka idzie z liścia w dół i na boki. Cukry. To łyko."],
            ua: ["Помаранчева стрілка йде з листка вниз і вбоки. Цукри. Це луб."]
          }
        },
        {
          text: {
            pl: ["Szparka wpuszcza gazy przez skórkę. Nie jest tymi rurami."],
            ua: ["Продих впускає гази через шкірку. Він не є цими трубами."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. W górę", ua: "Коротке питання. Вгору" },
      task: {
        id: "l21-g6",
        type: "single-choice",
        question: {
          pl: "Co prowadzi drewno i w którą stronę?",
          ua: "Що веде деревина і в який бік?"
        },
        options: [
          { id: "a", label: { pl: "wodę i sole mineralne z korzenia w górę", ua: "воду і мінеральні солі з кореня вгору" } },
          { id: "b", label: { pl: "cukry z liścia do korzenia", ua: "цукри з листка до кореня" } },
          { id: "c", label: { pl: "gazy przez szparkę w skórce", ua: "гази через продих у шкірці" } }
        ],
        answer: "a",
        hint: {
          pl: "Niebieska strzałka na planszy idzie z korzenia do liścia.",
          ua: "Синя стрілка на плакаті йде з кореня до листка."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cukry z liścia prowadzi łyko. Drewno prowadzi wodę i sole mineralne z korzenia w górę.",
              ua: "Цукри з листка веде луб. Деревина веде воду і мінеральні солі з кореня вгору."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gazy idą przez szparkę tkanki okrywającej. Drewno jest rurą na wodę i sole w górę.",
              ua: "Гази йдуть через продих покривної тканини. Деревина є трубою для води і солей угору."
            }
          }
        ],
        explanation: {
          pl: "Drewno prowadzi wodę i sole mineralne z korzenia w górę.",
          ua: "Деревина веде воду і мінеральні солі з кореня вгору."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ten sam ładunek", ua: "Типова помилка. Той самий вантаж" },
      claim: {
        pl: "„Łyko i drewno niosą to samo. Drewno jest tylko twardsze.”",
        ua: "«Луб і деревина несуть те саме. Деревина лише твердіша.»"
      },
      text: {
        pl: [
          "Drewno niesie wodę i sole w górę. Łyko niesie cukry z liści.",
          "Sztywność jest pracą tkanki wzmacniającej, nie nazwą drewna."
        ],
        ua: [
          "Деревина несе воду і солі вгору. Луб несе цукри з листків.",
          "Жорсткість є роботою механічної тканини, не назвою деревини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cukier dla korzenia", ua: "Сам. Цукор для кореня" },
      task: {
        id: "l21-p6",
        type: "single-choice",
        question: {
          pl: "Liść w świetle zrobił cukier. Korzeń tego cukru potrzebuje. Która tkanka go niesie?",
          ua: "Листок на світлі зробив цукор. Кореню цей цукор потрібен. Яка тканина його несе?"
        },
        options: [
          { id: "a", label: { pl: "łyko niesie cukry z liścia do korzenia; drewno niesie wodę i sole w drugą stronę", ua: "луб несе цукри з листка до кореня; деревина несе воду і солі в інший бік" } },
          { id: "b", label: { pl: "drewno niesie cukier w dół, bo woda i cukier to ten sam ładunek", ua: "деревина несе цукор униз, бо вода і цукор — це той самий вантаж" } },
          { id: "c", label: { pl: "włośnik niesie cukier z liścia, bo jest cienki", ua: "кореневий волосок несе цукор із листка, бо він тонкий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda i cukier to różne ładunki. Cukier z liścia niesie łyko. Drewno niesie wodę i sole w górę.",
              ua: "Вода і цукор — це різні вантажі. Цукор із листка несе луб. Деревина несе воду і солі вгору."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośnik pobiera wodę i sole z gleby. Cukry z liścia do korzenia niesie łyko.",
              ua: "Кореневий волосок вбирає воду і солі з ґрунту. Цукри з листка до кореня несе луб."
            }
          }
        ],
        explanation: {
          pl: "Cukry z liścia do korzenia niesie łyko. Drewno niesie wodę i sole w górę.",
          ua: "Цукри з листка до кореня несе луб. Деревина несе воду і солі вгору."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Warstwa komórek", ua: "Перевірка 1. Шар клітин" },
      task: {
        id: "l21-t1",
        type: "single-choice",
        question: {
          pl: "Pod mikroskopem widać warstwę podobnych komórek. Wszystkie magazynują skrobię. Czym jest ta warstwa?",
          ua: "Під мікроскопом видно шар подібних клітин. Усі запасають крохмаль. Чим є цей шар?"
        },
        options: [
          { id: "a", label: { pl: "tkanką: podobne komórki o wspólnej funkcji", ua: "тканиною: подібні клітини зі спільною функцією" } },
          { id: "b", label: { pl: "organem, bo komórek jest wiele", ua: "органом, бо клітин багато" } },
          { id: "c", label: { pl: "całym organizmem, bo skrobia jest pokarmem rośliny", ua: "цілим організмом, бо крохмаль є поживою рослини" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wiele komórek nie robi od razu organu. Warstwa podobnych komórek o jednej funkcji jest tkanką. Organ, na przykład łodyga, składa się z tkanek.",
              ua: "Багато клітин не роблять одразу орган. Шар подібних клітин з однією функцією є тканиною. Орган, наприклад стебло, складається з тканин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrobia jest zapasem w komórkach. Ta warstwa jest tkanką. Organizm to cała roślina z organów.",
              ua: "Крохмаль є запасом у клітинах. Цей шар є тканиною. Організм — це ціла рослина з органів."
            }
          }
        ],
        explanation: {
          pl: "Warstwa podobnych komórek o wspólnej funkcji jest tkanką.",
          ua: "Шар подібних клітин зі спільною функцією є тканиною."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Czubki", ua: "Перевірка 2. Кінчики" },
      task: {
        id: "l21-t2",
        type: "single-choice",
        question: {
          pl: "Gdzie komórki się dzielą, gdy pęd i korzeń się wydłużają?",
          ua: "Де клітини діляться, коли пагін і корінь видовжуються?"
        },
        options: [
          { id: "a", label: { pl: "w stożku wzrostu pędu i w stożku wzrostu korzenia; reszta to tkanki stałe", ua: "у конусі наростання пагона і в конусі наростання кореня; решта — сталі тканини" } },
          { id: "b", label: { pl: "w kutykuli, bo wosk pokrywa całą roślinę", ua: "у кутикулі, бо віск покриває всю рослину" } },
          { id: "c", label: { pl: "tylko w środku łodygi, bo tam jest najwięcej komórek", ua: "лише всередині стебла, бо там найбільше клітин" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kutykula jest woskową warstwą skórki. Dzielą się komórki tkanki twórczej w stożkach wzrostu.",
              ua: "Кутикула є восковим шаром шкірки. Діляться клітини твірної тканини в конусах наростання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Środek łodygi jest już z tkanek stałych. Wydłużanie jest w stożkach wzrostu na czubku pędu i korzenia.",
              ua: "Середина стебла вже зі сталих тканин. Видовження є в конусах наростання на кінчику пагона і кореня."
            }
          }
        ],
        explanation: {
          pl: "Pęd i korzeń wydłużają się w stożkach wzrostu. Pozostałe tkanki są stałe.",
          ua: "Пагін і корінь видовжуються в конусах наростання. Решта тканин є сталими."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Okrywa", ua: "Перевірка 3. Покрив" },
      task: {
        id: "l21-t3",
        type: "single-choice",
        question: {
          pl: "Młody liść ma skórkę, kutykulę i szparki. Korzeń tej samej rośliny ma włośniki. Które zdanie pasuje?",
          ua: "Молодий листок має шкірку, кутикулу і продихи. Корінь тієї самої рослини має кореневі волоски. Яке речення пасує?"
        },
        options: [
          { id: "a", label: { pl: "to części tkanki okrywającej: ochrona, wymiana gazów oraz pobieranie wody i soli", ua: "це частини покривної тканини: захист, обмін газів і вбирання води та солей" } },
          { id: "b", label: { pl: "szparki i włośniki dzielą się jak tkanka twórcza, bo są małe", ua: "продихи і волоски діляться, як твірна тканина, бо вони малі" } },
          { id: "c", label: { pl: "kutykula magazynuje skrobię, bo wosk jest zapasem w środku łodygi", ua: "кутикула запасає крохмаль, бо віск є запасом усередині стебла" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mały rozmiar nie robi stożka wzrostu. Szparki i włośniki należą do tkanki okrywającej. Dzieli się tkanka twórcza na czubkach.",
              ua: "Малий розмір не робить конуса наростання. Продихи і волоски належать до покривної тканини. Ділиться твірна тканина на кінчиках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kutykula jest woskiem na skórce i ogranicza utratę wody. Skrobię magazynuje miękisz.",
              ua: "Кутикула є воском на шкірці і обмежує втрату води. Крохмаль запасає паренхіма."
            }
          }
        ],
        explanation: {
          pl: "Skórka, kutykula, szparki i włośniki należą do tkanki okrywającej.",
          ua: "Шкірка, кутикула, продихи і кореневі волоски належать до покривної тканини."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Ogonek", ua: "Перевірка 4. Черешок" },
      task: {
        id: "l21-t4",
        type: "single-choice",
        question: {
          pl: "Ogonek liścia nie zgina się pod blaszką. W jego jasnym wypełnieniu są komórki z wodą w dużych wakuolach. Jak je nazwiesz?",
          ua: "Черешок листка не гнеться під пластинкою. У його світлому заповненні є клітини з водою у великих вакуолях. Як їх назвеш?"
        },
        options: [
          { id: "a", label: { pl: "sztywność ogonka daje tkanka wzmacniająca; komórki z wodą to miękisz", ua: "жорсткість черешка дає механічна тканина; клітини з водою — це паренхіма" } },
          { id: "b", label: { pl: "woda w wakuoli usztywnia, więc te komórki są tkanką wzmacniającą", ua: "вода у вакуолі надає жорсткості, тож ці клітини є механічною тканиною" } },
          { id: "c", label: { pl: "obie części ogonka są łykiem, bo ogonek łączy liść ze łodygą", ua: "обидві частини черешка є лубом, бо черешок з’єднує листок зі стеблом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda w dużej wakuoli jest zapasem miękiszu. Sztywność dają komórki tkanki wzmacniającej o grubszych ścianach.",
              ua: "Вода у великій вакуолі є запасом паренхіми. Жорсткість дають клітини механічної тканини з товщими стінками."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Łyko niesie cukry. W ogonku sztywność daje tkanka wzmacniająca, a komórki z wodą to miękisz.",
              ua: "Луб несе цукри. У черешку жорсткість дає механічна тканина, а клітини з водою — це паренхіма."
            }
          }
        ],
        explanation: {
          pl: "Ogonek usztywnia tkanka wzmacniająca. Komórki z wodą w wakuolach to miękisz.",
          ua: "Черешок робить жорстким механічна тканина. Клітини з водою у вакуолях — це паренхіма."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Pąk i liść", ua: "Перевірка 5. Брунька і листок" },
      task: {
        id: "l21-t5",
        type: "single-choice",
        question: {
          pl: "Wiosną pąk na łodydze dostaje cukry, a liść dostaje wodę z korzenia. Który kierunek jest łykiem, a który drewnem?",
          ua: "Навесні брунька на стеблі отримує цукри, а листок отримує воду з кореня. Який напрям є лубом, а який деревиною?"
        },
        options: [
          { id: "a", label: { pl: "cukry do pąka niesie łyko; wodę z korzenia do liścia niesie drewno", ua: "цукри до бруньки несе луб; воду з кореня до листка несе деревина" } },
          { id: "b", label: { pl: "wodę do liścia niesie łyko, a cukry do pąka niesie skórka", ua: "воду до листка несе луб, а цукри до бруньки несе шкірка" } },
          { id: "c", label: { pl: "oba ładunki niesie tkanka twórcza, bo pąk rośnie", ua: "обидва вантажі несе твірна тканина, бо брунька росте" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wodę z korzenia w górę niesie drewno. Cukry do pąka niesie łyko. Skórka okrywa, a nie prowadzi cukrów.",
              ua: "Воду з кореня вгору несе деревина. Цукри до бруньки несе луб. Шкірка вкриває, а не веде цукри."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tkanka twórcza dzieli się w stożku wzrostu. Cukry niesie łyko, a wodę z korzenia drewno.",
              ua: "Твірна тканина ділиться в конусі наростання. Цукри несе луб, а воду з кореня — деревина."
            }
          }
        ],
        explanation: {
          pl: "Łyko niesie cukry do pąka. Drewno niesie wodę z korzenia do liścia.",
          ua: "Луб несе цукри до бруньки. Деревина несе воду з кореня до листка."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l21-przewodzaca.png", {
        alt: { pl: "Drewno niesie wodę w górę, łyko niesie cukry z liści", ua: "Деревина несе воду вгору, луб несе цукри з листків" },
        title: { pl: "Pięć tkanek. Dwa kierunki w rurach.", ua: "П’ять тканин. Два напрями в трубах." },
        prompt: { pl: "Ta sama plansza tkanki przewodzącej." }
      }),
      text: {
        pl: [
          "Tkanka to podobne komórki o wspólnej funkcji. Korzeń, łodyga i liść są organami.",
          "Tkanka twórcza dzieli się w stożkach wzrostu pędu i korzenia. Tkanki stałe mają już jedną pracę.",
          "Okrywająca: skórka, kutykula, szparki i włośniki. Miękisz wypełnia i magazynuje, w liściu też fotosynteza. Wzmacniająca usztywnia grubszymi ścianami.",
          "Drewno niesie wodę i sole w górę. Łyko niesie cukry z liści."
        ],
        ua: [
          "Тканина — це подібні клітини зі спільною функцією. Корінь, стебло і листок є органами.",
          "Твірна тканина ділиться в конусах наростання пагона і кореня. Сталі тканини вже мають одну роботу.",
          "Покривна: шкірка, кутикула, продихи і кореневі волоски. Паренхіма виповнює і запасає, у листку ще й фотосинтез. Механічна надає жорсткості товщими стінками.",
          "Деревина несе воду і солі вгору. Луб несе цукри з листків."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, że tkanka to podobne komórki o wspólnej funkcji, a korzeń, łodyga i liść są organami.", ua: "Поясню, що тканина — це подібні клітини зі спільною функцією, а корінь, стебло і листок є органами." },
        { pl: "Odróżnię tkankę twórczą w stożkach wzrostu od tkanek stałych.", ua: "Відрізню твірну тканину в конусах наростання від сталих тканин." },
        { pl: "Powiem, do czego służą skórka, szparki i włośniki.", ua: "Скажу, для чого служать шкірка, продихи і кореневі волоски." },
        { pl: "Porównam miękisz z tkanką wzmacniającą.", ua: "Порівняю паренхіму з механічною тканиною." },
        { pl: "Rozróżnię drewno i łyko.", ua: "Розрізню деревину і луб." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
