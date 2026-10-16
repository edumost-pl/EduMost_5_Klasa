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
      heading: { pl: "Misja: składam dział IV", ua: "Місія: складаю розділ IV" },
      text: {
        pl: [
          "To powtórzenie działu: tkanki i organy roślinne. Nie nowy temat. Składasz lekcje 21–24.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Błąd pokazuje, który krok wrócić, a nie cały dział od nowa."
        ],
        ua: [
          "Це повторення розділу: тканини і органи рослин. Не нова тема. Складаєш уроки 21–24.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Помилка показує, який крок повернути, а не весь розділ спочатку."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "tkanka", ua: "тканина — подібні клітини, одна робота" },
        { pl: "organ", ua: "орган — корінь, стебло або листок" },
        { pl: "drewno / łyko", ua: "деревина — вода вгору; луб — цукри з листків" },
        { pl: "czepiec / włośniki", ua: "чохлик на кінчику; волоски вище, вода і солі" },
        { pl: "system palowy / wiązkowy", ua: "стрижнева — один головний; мичкувата — жмут тонких" },
        { pl: "pęd / łodyga", ua: "пагін — стебло, листки і бруньки; стебло — вісь" },
        { pl: "słoje roczne", ua: "річні кільця — світла і темна смуга ≈ рік" },
        { pl: "transpiracja", ua: "транспірація — пара води зі продихів, не фотосинтез" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Od komórki do rośliny", ua: "Поняття. Від клітини до рослини" },
      visual: vizGh("L21_Tkanki_roslinne", "l21-tworcza.png", {
        alt: { pl: "Stożki wzrostu pędu i korzenia", ua: "Конуси наростання пагона і кореня" },
        title: { pl: "Podział jest na czubkach.", ua: "Поділ є на кінчиках." },
        prompt: { pl: "Plansza lekcji 21: tkanka twórcza." }
      }),
      text: {
        pl: [
          ["", em("Tkanka"), " to zespół podobnych komórek o wspólnej funkcji. Kolejność: komórka, tkanka, organ, organizm. Korzeń, łodyga i liść są organami."],
          ["", em("Tkanka twórcza"), " dzieli się w stożku wzrostu pędu i w stożku wzrostu korzenia. Z nowych komórek powstają tkanki stałe."],
          "Tkanki stałe mają już jedną pracę: okrywająca, miękiszowa, wzmacniająca i przewodząca."
        ],
        ua: [
          ["", em("Тканина"), " — це група подібних клітин зі спільною функцією. Порядок: клітина, тканина, орган, організм. Корінь, стебло і листок є органами."],
          ["", em("Твірна тканина"), " ділиться в конусі наростання пагона і в конусі наростання кореня. З нових клітин постають сталі тканини."],
          "Сталі тканини вже мають одну роботу: покривна, паренхіма, механічна і провідна."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Fasola od komórki", ua: "Приклад. Квасоля від клітини" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jedna komórka z wakuolą zostaje komórką."],
            ua: ["Одна клітина з вакуолею лишається клітиною."]
          }
        },
        {
          text: {
            pl: ["Warstwa podobnych komórek o jednej pracy jest tkanką."],
            ua: ["Шар подібних клітин з однією роботою є тканиною."]
          }
        },
        {
          text: {
            pl: ["Korzeń fasoli jest organem. Cała fasola jest organizmem. Przyrost na długość jest w stożkach wzrostu."],
            ua: ["Корінь квасолі є органом. Ціла квасоля є організмом. Приріст у довжину є в конусах наростання."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Poziom", ua: "Коротке питання. Рівень" },
      task: {
        id: "r4-g1",
        type: "single-choice",
        question: {
          pl: "Czym tkanka różni się od organu?",
          ua: "Чим тканина відрізняється від органа?"
        },
        options: [
          { id: "a", label: { pl: "tkanka to podobne komórki o jednej funkcji; organ, na przykład liść, jest z tkanek", ua: "тканина — це подібні клітини з однією функцією; орган, наприклад листок, складається з тканин" } },
          { id: "b", label: { pl: "to samo słowo: każdy zielony organ jest jedną tkanką", ua: "те саме слово: кожен зелений орган є однією тканиною" } },
          { id: "c", label: { pl: "organ jest mniejszy od komórki", ua: "орган менший за клітину" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj warstwy komórek, a potem całego korzenia albo liścia.",
          ua: "Шукай шар клітин, а потім цілий корінь або листок."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie skleja organu w jedną tkankę. Tkanka ma jedną funkcję. Organ jest z tkanek.",
              ua: "Зелений колір не склеює орган в одну тканину. Тканина має одну функцію. Орган складається з тканин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórka jest mniejsza od tkanki, tkanka od organu. Organ jest zbudowany z tkanek.",
              ua: "Клітина менша за тканину, тканина — за орган. Орган збудований із тканин."
            }
          }
        ],
        explanation: {
          pl: "Tkanka to podobne komórki o jednej funkcji. Organ jest z tkanek.",
          ua: "Тканина — це подібні клітини з однією функцією. Орган складається з тканин."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Rośnie w środku", ua: "Типова помилка. Росте всередині" },
      claim: {
        pl: "„Cała łodyga dzieli się naraz w środku, więc tkanka twórcza jest wszędzie.”",
        ua: "«Усе стебло ділиться одразу всередині, тож твірна тканина є скрізь.»"
      },
      text: {
        pl: [
          "Tkanka twórcza jest w stożkach wzrostu pędu i korzenia.",
          "Środek łodygi jest już z tkanek stałych."
        ],
        ua: [
          "Твірна тканина є в конусах наростання пагона і кореня.",
          "Середина стебла вже зі сталих тканин."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Warstwa skrobi", ua: "Сам. Шар крохмалю" },
      task: {
        id: "r4-p1",
        type: "single-choice",
        question: {
          pl: "Pod mikroskopem widać warstwę podobnych komórek. Wszystkie trzymają skrobię. Uczeń mówi, że to już cały organ. Co poprawić?",
          ua: "Під мікроскопом видно шар подібних клітин. Усі тримають крохмаль. Учень каже, що це вже цілий орган. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to tkanka: podobne komórki, jedna funkcja; organ jest z takich tkanek", ua: "це тканина: подібні клітини, одна функція; орган складається з таких тканин" } },
          { id: "b", label: { pl: "tak — wiele komórek od razu jest organizmem", ua: "так — багато клітин одразу є організмом" } },
          { id: "c", label: { pl: "tak — skrobia robi z warstwy stożek wzrostu", ua: "так — крохмаль робить із шару конус наростання" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Organizm to cała roślina. Ta warstwa jest tkanką, bo komórki są podobne i mają jedną funkcję.",
              ua: "Організм — це ціла рослина. Цей шар є тканиною, бо клітини подібні і мають одну функцію."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Stożek wzrostu dzieli się na czubku. Zapas skrobi jest pracą tkanki miękiszowej, już stałej.",
              ua: "Конус наростання ділиться на кінчику. Запас крохмалю є роботою паренхіми, уже сталої тканини."
            }
          }
        ],
        explanation: {
          pl: "Warstwa podobnych komórek o jednej funkcji jest tkanką. Organ składa się z tkanek.",
          ua: "Шар подібних клітин з однією функцією є тканиною. Орган складається з тканин."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa kierunki", ua: "Поняття. Два напрями" },
      visual: vizGh("L21_Tkanki_roslinne", "l21-przewodzaca.png", {
        alt: { pl: "Drewno niesie wodę w górę, łyko niesie cukry", ua: "Деревина несе воду вгору, луб несе цукри" },
        title: { pl: "Woda w górę. Cukry z liści.", ua: "Вода вгору. Цукри з листків." },
        prompt: { pl: "Plansza lekcji 21: tkanka przewodząca." }
      }),
      text: {
        pl: [
          ["", em("Drewno"), " prowadzi wodę i sole mineralne z korzenia w górę, do łodygi i liści."],
          ["", em("Łyko"), " prowadzi cukry z liści do korzenia, pąków i do zapasu."],
          "Tkanka wzmacniająca usztywnia łodygę grubszymi ścianami. Twardość nie robi z niej drewna. Miękisz wypełnia organ i trzyma zapas."
        ],
        ua: [
          ["", em("Деревина"), " веде воду і мінеральні солі з кореня вгору, до стебла і листків."],
          ["", em("Луб"), " веде цукри з листків до кореня, бруньок і до запасу."],
          "Механічна тканина надає стеблу жорсткості товщими стінками. Твердість не робить із неї деревину. Паренхіма виповнює орган і тримає запас."
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
            pl: ["Niebieska strzałka idzie z korzenia do liścia. To woda w drewnie."],
            ua: ["Синя стрілка йде з кореня до листка. Це вода в деревині."]
          }
        },
        {
          text: {
            pl: ["Pomarańczowa strzałka idzie z liścia do pąka i korzenia. To cukry w łyku."],
            ua: ["Помаранчева стрілка йде з листка до бруньки і кореня. Це цукри в лубі."]
          }
        },
        {
          text: {
            pl: ["Łodyga stoi na wietrze dzięki tkance wzmacniającej. To inna praca niż transport."],
            ua: ["Стебло стоїть на вітрі завдяки механічній тканині. Це інша робота, ніж транспорт."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co w górę", ua: "Коротке питання. Що вгору" },
      task: {
        id: "r4-g2",
        type: "single-choice",
        question: {
          pl: "Co prowadzi drewno, a co łyko?",
          ua: "Що веде деревина, а що луб?"
        },
        options: [
          { id: "a", label: { pl: "drewno — wodę i sole w górę; łyko — cukry z liści", ua: "деревина — воду і солі вгору; луб — цукри з листків" } },
          { id: "b", label: { pl: "oba niosą cukier, bo łodyga jest twarda", ua: "обидва несуть цукор, бо стебло тверде" } },
          { id: "c", label: { pl: "drewno usztywnia, a łyko jest szparką", ua: "деревина надає жорсткості, а луб є продихом" } }
        ],
        answer: "a",
        hint: {
          pl: "Woda startuje w korzeniu. Cukier startuje w liściu.",
          ua: "Вода стартує в корені. Цукор стартує в листку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Twardość nie skleja ładunków. Wodę i sole w górę niesie drewno. Cukry z liści niesie łyko.",
              ua: "Твердість не склеює вантажі. Воду і солі вгору несе деревина. Цукри з листків несе луб."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sztywność daje tkanka wzmacniająca. Szparka wymienia gazy w liściu. Drewno niesie wodę w górę, łyko niesie cukry.",
              ua: "Жорсткість дає механічна тканина. Продих обмінює гази в листку. Деревина несе воду вгору, луб несе цукри."
            }
          }
        ],
        explanation: {
          pl: "Drewno prowadzi wodę i sole w górę. Łyko prowadzi cukry z liści.",
          ua: "Деревина веде воду і солі вгору. Луб веде цукри з листків."
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
          "Tkanka wzmacniająca usztywnia roślinę grubszymi ścianami.",
          "Drewno jest tkanką przewodzącą i niesie wodę oraz sole w górę."
        ],
        ua: [
          "Механічна тканина надає рослині жорсткості товщими стінками.",
          "Деревина є провідною тканиною і несе воду та солі вгору."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cukier dla pąka", ua: "Сам. Цукор для бруньки" },
      task: {
        id: "r4-p2",
        type: "single-choice",
        question: {
          pl: "Liść zrobił cukier, a pąk na łodydze go potrzebuje. Uczeń mówi, że cukier idzie drewnem razem z wodą. Co poprawić?",
          ua: "Листок зробив цукор, а бруньці на стеблі він потрібен. Учень каже, що цукор іде деревиною разом із водою. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "cukry niesie łyko; drewno niesie wodę i sole z korzenia w górę", ua: "цукри несе луб; деревина несе воду і солі з кореня вгору" } },
          { id: "b", label: { pl: "tak — jeden ładunek idzie w obie strony tym samym drewnem", ua: "так — один вантаж іде в обидва боки тією самою деревиною" } },
          { id: "c", label: { pl: "tak — cukier niosą włośniki na łodydze", ua: "так — цукор несуть волоски на стеблі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda i cukier to różne ładunki. Cukier do pąka niesie łyko. Wodę w górę niesie drewno.",
              ua: "Вода і цукор — це різні вантажі. Цукор до бруньки несе луб. Воду вгору несе деревина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki są na korzeniu i pobierają wodę z gleby. Cukry w łodydze niesie łyko.",
              ua: "Кореневі волоски є на корені і вбирають воду з ґрунту. Цукри в стеблі несе луб."
            }
          }
        ],
        explanation: {
          pl: "Cukry do pąka niesie łyko. Drewno niesie wodę i sole w górę.",
          ua: "Цукри до бруньки несе луб. Деревина несе воду і солі вгору."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Czubek korzenia", ua: "Поняття. Кінчик кореня" },
      visual: vizGh("L22_Korzen", "l22-strefy.png", {
        alt: { pl: "Czepiec, stożek wzrostu i strefa włośnikowa", ua: "Чохлик, конус наростання і зона волосків" },
        title: { pl: "Od czubka w stronę pędu.", ua: "Від кінчика в бік пагона." },
        prompt: { pl: "Plansza lekcji 22: strefy korzenia." }
      }),
      text: {
        pl: [
          "Korzeń umacnia roślinę w glebie i pobiera wodę oraz sole mineralne.",
          ["Od czubka: ", em("czepiec"), " osłania stożek, gdy korzeń idzie między ziarnami gleby. Za nim ", em("stożek wzrostu"), " wydłuża korzeń."],
          ["Dalej ", em("strefa włośnikowa"), ": włośniki zwiększają powierzchnię i pobierają wodę oraz sole. Jeszcze wyżej jest starsza część, z przewodzeniem i korzeniami bocznymi."]
        ],
        ua: [
          "Корінь закріплює рослину в ґрунті і вбирає воду та мінеральні солі.",
          ["Від кінчика: ", em("кореневий чохлик"), " захищає конус, коли корінь іде між зернами ґрунту. За ним ", em("конус наростання"), " видовжує корінь."],
          ["Далі ", em("зона волосків"), ": кореневі волоски збільшують поверхню і вбирають воду та солі. Ще вище є старша частина, з проведенням і бічними коренями."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Droga czubka", ua: "Приклад. Шлях кінчика" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na samym dole czepiec chroni czubek."],
            ua: ["На самому низу чохлик захищає кінчик."]
          }
        },
        {
          text: {
            pl: ["Zaraz za nim komórki się dzielą. Korzeń się wydłuża."],
            ua: ["Одразу за ним клітини діляться. Корінь видовжується."]
          }
        },
        {
          text: {
            pl: ["Wyżej meszek włośników pobiera wodę. Szparka liścia robi inną pracę."],
            ua: ["Вище пушок волосків вбирає воду. Продих листка робить іншу роботу."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto pije", ua: "Коротке питання. Хто п’є" },
      task: {
        id: "r4-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie są włośniki i do czego służą?",
          ua: "Де є кореневі волоски і для чого вони служать?"
        },
        options: [
          { id: "a", label: { pl: "w strefie włośnikowej, za stożkiem wzrostu; pobierają wodę i sole", ua: "у зоні волосків, за конусом наростання; вбирають воду і солі" } },
          { id: "b", label: { pl: "na samym czubku, bo czepiec pije wodę", ua: "на самому кінчику, бо чохлик п’є воду" } },
          { id: "c", label: { pl: "w skórce liścia, bo wymieniają gazy jak szparki", ua: "у шкірці листка, бо обмінюють гази, як продихи" } }
        ],
        answer: "a",
        hint: {
          pl: "Meszek jest wyżej niż czapeczka na czubku.",
          ua: "Пушок є вище, ніж шапочка на кінчику."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Na czubku czepiec osłania stożek wzrostu. Włośniki są wyżej i pobierają wodę oraz sole.",
              ua: "На кінчику чохлик захищає конус наростання. Волоски є вище і вбирають воду та солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Gazy wymienia szparka w liściu. Włośniki są na korzeniu i pobierają wodę oraz sole.",
              ua: "Гази обмінює продих у листку. Кореневі волоски є на корені і вбирають воду та солі."
            }
          }
        ],
        explanation: {
          pl: "Włośniki są w strefie włośnikowej. Pobierają wodę i sole.",
          ua: "Кореневі волоски є в зоні волосків. Вбирають воду і солі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Włos na czubku", ua: "Типова помилка. Волосок на кінчику" },
      claim: {
        pl: "„Włośniki leżą na samym czubku, więc czepiec jest zbędny.”",
        ua: "«Волоски лежать на самому кінчику, тож чохлик зайвий.»"
      },
      text: {
        pl: [
          "Czepiec jest na czubku i osłania stożek wzrostu.",
          "Włośniki są dalej. Tam korzeń pobiera wodę i sole."
        ],
        ua: [
          "Чохлик є на кінчику і захищає конус наростання.",
          "Волоски є далі. Там корінь вбирає воду і солі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Szparka zamiast włosa", ua: "Сам. Продих замість волоска" },
      task: {
        id: "r4-p3",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi otwór w skórce liścia i mówi, że to włośnik, bo roślina nim pije. Co poprawić?",
          ua: "Учень бачить отвір у шкірці листка і каже, що це кореневий волосок, бо рослина ним п’є. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to szparka: gazy i para wodna; wodę z gleby pobiera włośnik na korzeniu", ua: "це продих: гази і водяна пара; воду з ґрунту вбирає волосок на корені" } },
          { id: "b", label: { pl: "tak — każda szparka jest strefą włośnikową", ua: "так — кожен продих є зоною волосків" } },
          { id: "c", label: { pl: "tak — czepiec liścia pije wodę z powietrza", ua: "так — чохлик листка п’є воду з повітря" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Strefa włośnikowa jest na korzeniu. Szparka w liściu przepuszcza gazy i parę wodną.",
              ua: "Зона волосків є на корені. Продих у листку пропускає гази і водяну пару."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec jest na czubku korzenia i osłania stożek. Wodę z gleby pobierają włośniki.",
              ua: "Чохлик є на кінчику кореня і захищає конус. Воду з ґрунту вбирають кореневі волоски."
            }
          }
        ],
        explanation: {
          pl: "Szparka wymienia gazy i wypuszcza parę. Włośnik na korzeniu pobiera wodę i sole.",
          ua: "Продих обмінює гази і випускає пару. Кореневий волосок на корені вбирає воду і солі."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa systemy i zapas", ua: "Поняття. Дві системи і запас" },
      visual: vizGh("L23_Lodyga", "l23-przeksztalcenia.png", {
        alt: { pl: "Bulwa ziemniaka i marchew", ua: "Бульба картоплі і морква" },
        title: { pl: "Zapas bywa w korzeniu albo w pędzie.", ua: "Запас буває в корені або в пагоні." },
        prompt: { pl: "Plansza lekcji 23: bulwa i korzeń spichrzowy." }
      }),
      text: {
        pl: [
          ["", em("System palowy"), " ma jeden korzeń główny i cieńsze boczne. Tak rosną marchew, pietruszka i wiele drzew."],
          ["", em("System wiązkowy"), " to pęk cienkich korzeni podobnej grubości. Tak bywa u traw i cebuli."],
          "Marchew, pietruszka i burak są korzeniami spichrzowymi. Ziemniak jest zgrubiałym pędem: ma pąki, czyli oczka."
        ],
        ua: [
          ["", em("Стрижнева система"), " має один головний корінь і тонші бічні. Так ростуть морква, петрушка і багато дерев."],
          ["", em("Мичкувата система"), " — це жмут тонких коренів схожої товщини. Так буває в трав і цибулі."],
          "Морква, петрушка і буряк є запасаючими коренями. Картопля є потовщеним пагоном: має бруньки, тобто вічка."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Marchew, trawa, ziemniak", ua: "Приклад. Морква, трава, картопля" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Marchew ma jeden gruby korzeń główny. Trzyma zapas. To system palowy i korzeń spichrzowy."],
            ua: ["Морква має один товстий головний корінь. Тримає запас. Це стрижнева система і запасаючий корінь."]
          }
        },
        {
          text: {
            pl: ["Trawa ma pęk cienkich korzeni. To system wiązkowy."],
            ua: ["Трава має жмут тонких коренів. Це мичкувата система."]
          }
        },
        {
          text: {
            pl: ["Ziemniak ma oczka. To pąki, więc bulwa jest pędem, nie korzeniem."],
            ua: ["Картопля має вічка. Це бруньки, тож бульба є пагоном, не коренем."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jeden czy pęk", ua: "Коротке питання. Один чи жмут" },
      task: {
        id: "r4-g4",
        type: "single-choice",
        question: {
          pl: "Czym system palowy różni się od wiązkowego?",
          ua: "Чим стрижнева система відрізняється від мичкуватої?"
        },
        options: [
          { id: "a", label: { pl: "palowy ma korzeń główny i boczne; wiązkowy to pęk cienkich korzeni", ua: "стрижнева має головний корінь і бічні; мичкувата — це жмут тонких коренів" } },
          { id: "b", label: { pl: "palowy to pęk cienkich korzeni jak u cebuli", ua: "стрижнева — це жмут тонких коренів, як у цибулі" } },
          { id: "c", label: { pl: "wiązkowy to bulwa z oczkami", ua: "мичкувата — це бульба з вічками" } }
        ],
        answer: "a",
        hint: {
          pl: "Marchew ma jeden gruby korzeń. Trawa ma wiele cienkich.",
          ua: "Морква має один товстий корінь. Трава має багато тонких."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cebula ma zwykle system wiązkowy. Palowy ma jeden korzeń główny i boczne, jak marchew.",
              ua: "Цибуля має зазвичай мичкувату систему. Стрижнева має один головний корінь і бічні, як морква."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bulwa z oczkami jest pędem. System wiązkowy to pęk cienkich korzeni, jak u trawy.",
              ua: "Бульба з вічками є пагоном. Мичкувата система — це жмут тонких коренів, як у трави."
            }
          }
        ],
        explanation: {
          pl: "System palowy ma korzeń główny i boczne. Wiązkowy to pęk cienkich korzeni.",
          ua: "Стрижнева система має головний корінь і бічні. Мичкувата — це жмут тонких коренів."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Pod ziemią", ua: "Типова помилка. Під землею" },
      claim: {
        pl: "„Ziemniak leży pod ziemią, więc jest korzeniem spichrzowym jak marchew.”",
        ua: "«Картопля лежить під землею, тож є запасаючим коренем, як морква.»"
      },
      text: {
        pl: [
          "Miejsce w glebie nie wybiera organu.",
          "Ziemniak ma oczka, czyli pąki, więc jest pędem. Marchew jest korzeniem spichrzowym."
        ],
        ua: [
          "Місце в ґрунті не вибирає орган.",
          "Картопля має вічка, тобто бруньки, тож є пагоном. Морква є запасаючим коренем."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cebula i burak", ua: "Сам. Цибуля і буряк" },
      task: {
        id: "r4-p4",
        type: "single-choice",
        question: {
          pl: "Cebula ma pęk cienkich korzeni. Burak obok jest gruby i słodki. Uczeń mówi, że oba są tym samym korzeniem spichrzowym. Co poprawić?",
          ua: "Цибуля має жмут тонких коренів. Буряк поряд товстий і солодкий. Учень каже, що обидва є тим самим запасаючим коренем. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "cebula ma system wiązkowy; burak jest korzeniem spichrzowym", ua: "цибуля має мичкувату систему; буряк є запасаючим коренем" } },
          { id: "b", label: { pl: "tak — każdy korzeń w glebie grubieje w buraka", ua: "так — кожен корінь у ґрунті товстіє в буряк" } },
          { id: "c", label: { pl: "tak — burak jest pędem, bo jest jadalny jak ziemniak", ua: "так — буряк є пагоном, бо їстівний, як картопля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Trawa i cebula mają system wiązkowy i nie budują buraka. Burak jest korzeniem spichrzowym.",
              ua: "Трава і цибуля мають мичкувату систему і не будують буряка. Буряк є запасаючим коренем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jadalność nie robi pędu. Burak jest korzeniem spichrzowym. Ziemniak jest pędem, bo ma oczka.",
              ua: "Їстівність не робить пагін. Буряк є запасаючим коренем. Картопля є пагоном, бо має вічка."
            }
          }
        ],
        explanation: {
          pl: "Cebula ma system wiązkowy. Burak jest korzeniem spichrzowym.",
          ua: "Цибуля має мичкувату систему. Буряк є запасаючим коренем."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pęd i słoje", ua: "Поняття. Пагін і кільця" },
      visual: vizGh("L23_Lodyga", "l23-sloje.png", {
        alt: { pl: "Kora, słoje drewna i rdzeń pnia", ua: "Кора, кільця деревини і серцевина стовбура" },
        title: { pl: "Jasna i ciemna smuga to jeden rok.", ua: "Світла і темна смуга — це один рік." },
        prompt: { pl: "Plansza lekcji 23: słoje roczne." }
      }),
      text: {
        pl: [
          ["", em("Pęd"), " to łodyga, liście i pąki. Łodyga jest osią: unosi liście do światła i transportuje wodę, sole oraz cukry."],
          "Na przekroju młodej łodygi od zewnątrz: skórka, kora, wiązki przewodzące w kręgu, rdzeń. W korzeniu transport jest w walcu osiowym.",
          ["Pień grubieje. ", em("Kambium"), " między łykiem a drewnem co roku dodaje pierścień drewna. Jasny prążek to wiosna, ciemniejszy lato. Para to jeden ", em("słój roczny"), "."]
        ],
        ua: [
          ["", em("Пагін"), " — це стебло, листки і бруньки. Стебло є віссю: підносить листки до світла і транспортує воду, солі та цукри."],
          "На перерізі молодого стебла ззовні: шкірка, кора, провідні пучки в колі, серцевина. У корені транспорт є в центральному циліндрі.",
          ["Стовбур товстішає. ", em("Камбій"), " між лубом і деревиною щороку додає кільце деревини. Світла смуга — це весна, темніша — літо. Пара — це одне ", em("річне кільце"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Ścięty pień", ua: "Приклад. Зрізаний стовбур" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na zewnątrz jest kora. W środku bywa rdzeń."],
            ua: ["Ззовні є кора. Всередині буває серцевина."]
          }
        },
        {
          text: {
            pl: ["Między nimi leżą pierścienie drewna: jasne wiosenne i ciemniejsze letnie."],
            ua: ["Між ними лежать кільця деревини: світле весняне і темніше літнє."]
          }
        },
        {
          text: {
            pl: ["Jedna taka para to około jednego roku. Nad pniem liście i pąki należą do pędu."],
            ua: ["Одна така пара — це близько одного року. Над стовбуром листки і бруньки належать до пагона."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna para", ua: "Коротке питання. Одна пара" },
      task: {
        id: "r4-g5",
        type: "single-choice",
        question: {
          pl: "Co liczysz jako jeden słój roczny?",
          ua: "Що рахуєш як одне річне кільце?"
        },
        options: [
          { id: "a", label: { pl: "parę jasnego i ciemnego drewna, dodaną w jednym roku przez kambium", ua: "пару світлої і темної деревини, додану за один рік камбієм" } },
          { id: "b", label: { pl: "każdą smugę osobno, więc jasna i ciemna to dwa lata", ua: "кожну смугу окремо, тож світла і темна — це два роки" } },
          { id: "c", label: { pl: "włośniki na korze, bo każdy włosek to rok", ua: "кореневі волоски на корі, бо кожен волосок — це рік" } }
        ],
        answer: "a",
        hint: {
          pl: "Wiosna i lato tego samego roku leżą obok siebie.",
          ua: "Весна і літо того самого року лежать поряд."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jasna smuga i ciemna smuga należą do jednego roku. Liczysz pary, które dodaje kambium.",
              ua: "Світла смуга і темна смуга належать до одного року. Рахуєш пари, які додає камбій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki pobierają wodę na korzeniu. Słój roczny jest parą drewna w pniu.",
              ua: "Кореневі волоски вбирають воду на корені. Річне кільце є парою деревини в стовбурі."
            }
          }
        ],
        explanation: {
          pl: "Jeden słój roczny to para jasnego i ciemnego drewna.",
          ua: "Одне річне кільце — це пара світлої і темної деревини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Dwie smugi", ua: "Типова помилка. Дві смуги" },
      claim: {
        pl: "„Jasny prążek to jeden rok, a ciemny to drugi.”",
        ua: "«Світла смуга — це один рік, а темна — другий.»"
      },
      text: {
        pl: [
          "Jasne drewno powstaje wiosną, ciemniejsze latem tego samego roku.",
          "Jeden rok to para prążków."
        ],
        ua: [
          "Світла деревина постає навесні, темніша — влітку того самого року.",
          "Один рік — це пара смуг."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Osiem par", ua: "Сам. Вісім пар" },
      task: {
        id: "r4-p5",
        type: "single-choice",
        question: {
          pl: "Na pniu widać 8 par jasnego i ciemnego drewna. Uczeń mówi, że drzewo ma 16 lat. Co poprawić?",
          ua: "На стовбурі видно 8 пар світлої і темної деревини. Учень каже, що дереву 16 років. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "8 par to około 8 lat, bo jedna para jest jednym rokiem", ua: "8 пар — це близько 8 років, бо одна пара є одним роком" } },
          { id: "b", label: { pl: "tak — każda smuga jest osobnym rokiem", ua: "так — кожна смуга є окремим роком" } },
          { id: "c", label: { pl: "tak — słoje są walcem osiowym korzenia, więc pień nie ma wieku", ua: "так — кільця є центральним циліндром кореня, тож стовбур не має віку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jasna i ciemna smuga to jeden rok. Osiem par to około ośmiu lat.",
              ua: "Світла і темна смуга — це один рік. Вісім пар — це близько восьми років."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Walec osiowy jest w korzeniu. Słoje są pierścieniami drewna w pniu. Osiem par to około ośmiu lat.",
              ua: "Центральний циліндр є в корені. Кільця є кільцями деревини в стовбурі. Вісім пар — це близько восьми років."
            }
          }
        ],
        explanation: {
          pl: "Osiem par jasnego i ciemnego drewna to około ośmiu lat.",
          ua: "Вісім пар світлої і темної деревини — це близько восьми років."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Liść", ua: "Поняття. Листок" },
      visual: vizGh("L24_Lisc", "l24-funkcje.png", {
        alt: { pl: "Fotosynteza, wymiana gazów i transpiracja", ua: "Фотосинтез, обмін газів і транспірація" },
        title: { pl: "Cukier, gazy i para.", ua: "Цукор, гази і пара." },
        prompt: { pl: "Plansza lekcji 24: funkcje liścia." }
      }),
      text: {
        pl: [
          "Blaszka łapie światło, ogonek łączy ją z łodygą. Liść pojedynczy ma jedną blaszkę. Złożony ma listki na wspólnym ogonku.",
          "Nerwy są wiązkami. Unerwienie siatkowate jest siatką, jak u lipy. Równoległe to linie obok siebie, jak u trawy i kukurydzy.",
          ["Od góry blaszki: skórka, ", em("miękisz palisadowy"), " z chloroplastami, miękisz gąbczasty z powietrzem, dolna skórka ze szparkami. Fotosynteza: dwutlenek węgla + woda → glukoza + tlen. Światło i chlorofil są przy strzałce."],
          ["Szparki wymieniają gazy. ", em("Transpiracja"), " to para wodna ze szparek. W upale szparki potrafią się zamknąć."]
        ],
        ua: [
          "Пластинка ловить світло, черешок з’єднує її зі стеблом. Простий листок має одну пластинку. Складний має листочки на спільному черешку.",
          "Жилки є пучками. Сітчасте жилкування є сіткою, як у липи. Паралельне — це лінії поряд, як у трави і кукурудзи.",
          ["Згори пластинки: шкірка, ", em("палісадна паренхіма"), " із хлоропластами, губчаста паренхіма з повітрям, нижня шкірка з продихами. Фотосинтез: вуглекислий газ + вода → глюкоза + кисень. Світло і хлорофіл є біля стрілки."],
          ["Продихи обмінюють гази. ", em("Транспірація"), " — це водяна пара з продихів. У спеку продихи можуть закритися."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Lipa na świetle", ua: "Приклад. Липа на світлі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Szeroka blaszka lipy ma siatkę nerwów. Nerw niesie wodę i cukry."],
            ua: ["Широка пластинка липи має сітку жилок. Жилка несе воду і цукри."]
          }
        },
        {
          text: {
            pl: ["Pod górną skórką chloroplasty robią glukozę i tlen."],
            ua: ["Під верхньою шкіркою хлоропласти роблять глюкозу і кисень."]
          }
        },
        {
          text: {
            pl: ["Na spodzie szparka wypuszcza tlen i parę wodną."],
            ua: ["На споді продих випускає кисень і водяну пару."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Para czy cukier", ua: "Коротке питання. Пара чи цукор" },
      task: {
        id: "r4-g6",
        type: "single-choice",
        question: {
          pl: "Czym transpiracja różni się od fotosyntezy?",
          ua: "Чим транспірація відрізняється від фотосинтезу?"
        },
        options: [
          { id: "a", label: { pl: "transpiracja to para wodna ze szparek; fotosynteza robi glukozę i tlen", ua: "транспірація — це водяна пара з продихів; фотосинтез робить глюкозу і кисень" } },
          { id: "b", label: { pl: "to ta sama praca, bo obie są w zielonym liściu", ua: "це та сама робота, бо обидві є в зеленому листку" } },
          { id: "c", label: { pl: "transpiracja umacnia roślinę w glebie", ua: "транспірація закріплює рослину в ґрунті" } }
        ],
        answer: "a",
        hint: {
          pl: "Cukier powstaje na świetle. Para uchodzi ze szparki.",
          ua: "Цукор постає на світлі. Пара виходить із продиху."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony liść ma obie prace, ale ładunek jest inny. Fotosynteza daje glukozę i tlen. Transpiracja to para wodna.",
              ua: "Зелений листок має обидві роботи, але вантаж інший. Фотосинтез дає глюкозу і кисень. Транспірація — це водяна пара."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Roślinę w glebie umacnia korzeń. Transpiracja jest parowaniem wody z liścia.",
              ua: "Рослину в ґрунті закріплює корінь. Транспірація є випаровуванням води з листка."
            }
          }
        ],
        explanation: {
          pl: "Transpiracja to para wodna ze szparek. Fotosynteza wytwarza glukozę i tlen.",
          ua: "Транспірація — це водяна пара з продихів. Фотосинтез виробляє глюкозу і кисень."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Para to tlen", ua: "Типова помилка. Пара — це кисень" },
      claim: {
        pl: "„Para ze szparki jest tlenem, więc to tylko fotosynteza.”",
        ua: "«Пара з продиху є киснем, тож це лише фотосинтез.»"
      },
      text: {
        pl: [
          "Fotosynteza wypuszcza tlen i wytwarza glukozę.",
          "Para wodna to transpiracja. Ta sama szparka robi obie rzeczy: gazy i parę."
        ],
        ua: [
          "Фотосинтез випускає кисень і виробляє глюкозу.",
          "Водяна пара — це транспірація. Той самий продих робить обидві речі: гази і пару."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kukurydza od spodu", ua: "Сам. Кукурудза зі споду" },
      task: {
        id: "r4-p6",
        type: "single-choice",
        question: {
          pl: "Liść kukurydzy ma linie obok siebie. Na spodzie są szparki, a pod górną skórką wydłużone komórki z chloroplastami. Uczeń nazywa linie słojami, a komórki włośnikami. Co poprawić?",
          ua: "Листок кукурудзи має лінії поряд. На споді є продихи, а під верхньою шкіркою видовжені клітини з хлоропластами. Учень називає лінії кільцями, а клітини волосками. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "linie to unerwienie równoległe; chloroplasty są w miękiszu palisadowym; szparki wymieniają gazy i parę", ua: "лінії — це паралельне жилкування; хлоропласти є в палісадній паренхімі; продихи обмінюють гази і пару" } },
          { id: "b", label: { pl: "tak — długi liść zapisuje lata jak pień", ua: "так — довгий листок записує роки, як стовбур" } },
          { id: "c", label: { pl: "tak — szparki piją wodę z gleby, więc są włośnikami", ua: "так — продихи п’ють воду з ґрунту, тож є волосками" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Lata zapisują pary drewna w pniu. Linie w blaszce kukurydzy to unerwienie równoległe.",
              ua: "Роки записують пари деревини в стовбурі. Лінії в пластинці кукурудзи — це паралельне жилкування."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wodę z gleby pobiera włośnik. Szparka na spodzie liścia wymienia gazy i wypuszcza parę.",
              ua: "Воду з ґрунту вбирає кореневий волосок. Продих на споді листка обмінює гази і випускає пару."
            }
          }
        ],
        explanation: {
          pl: "Kukurydza ma unerwienie równoległe. Fotosynteza jest w miękiszu palisadowym. Szparki wymieniają gazy i parę.",
          ua: "Кукурудза має паралельне жилкування. Фотосинтез є в палісадній паренхімі. Продихи обмінюють гази і пару."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Sześć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "Шість питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Cztery poziomy", ua: "Перевірка 1. Чотири рівні" },
      task: {
        id: "r4-t1",
        type: "single-choice",
        question: {
          pl: "Ułóż od najmniejszego: komórka miękiszu, tkanka miękiszowa, korzeń, cała roślina.",
          ua: "Уклади від найменшого: клітина паренхіми, паренхіма, корінь, ціла рослина."
        },
        options: [
          { id: "a", label: { pl: "komórka, tkanka, korzeń jako organ, organizm", ua: "клітина, тканина, корінь як орган, організм" } },
          { id: "b", label: { pl: "korzeń, komórka, organizm, tkanka", ua: "корінь, клітина, організм, тканина" } },
          { id: "c", label: { pl: "tkanka, organizm, komórka, korzeń", ua: "тканина, організм, клітина, корінь" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Korzeń jest organem, więc jest większy od tkanki i od komórki. Od najmniejszego: komórka, tkanka, organ, organizm.",
              ua: "Корінь є органом, тож він більший за тканину і за клітину. Від найменшого: клітина, тканина, орган, організм."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórka jest najmniejsza. Tkanka jest z komórek, organ z tkanek, organizm z organów.",
              ua: "Клітина є найменшою. Тканина складається з клітин, орган — із тканин, організм — з органів."
            }
          }
        ],
        explanation: {
          pl: "Od najmniejszego: komórka, tkanka, organ, organizm.",
          ua: "Від найменшого: клітина, тканина, орган, організм."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Wiosna", ua: "Перевірка 2. Весна" },
      task: {
        id: "r4-t2",
        type: "single-choice",
        question: {
          pl: "Wiosną pąk dostaje cukry, a młody liść dostaje wodę z korzenia. Który kierunek jest łykiem, a który drewnem?",
          ua: "Навесні брунька отримує цукри, а молодий листок отримує воду з кореня. Який напрям є лубом, а який деревиною?"
        },
        options: [
          { id: "a", label: { pl: "cukry do pąka niesie łyko; wodę z korzenia niesie drewno", ua: "цукри до бруньки несе луб; воду з кореня несе деревина" } },
          { id: "b", label: { pl: "wodę niesie łyko, a cukry niesie tkanka wzmacniająca", ua: "воду несе луб, а цукри несе механічна тканина" } },
          { id: "c", label: { pl: "oba ładunki niosą włośniki, bo pąk rośnie", ua: "обидва вантажі несуть волоски, бо брунька росте" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tkanka wzmacniająca usztywnia. Wodę z korzenia niesie drewno. Cukry do pąka niesie łyko.",
              ua: "Механічна тканина надає жорсткості. Воду з кореня несе деревина. Цукри до бруньки несе луб."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki pobierają wodę z gleby. Cukry niesie łyko, a wodę w górę drewno.",
              ua: "Кореневі волоски вбирають воду з ґрунту. Цукри несе луб, а воду вгору — деревина."
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
      type: "check",
      heading: { pl: "Sprawdzian 3. Meszek", ua: "Перевірка 3. Пушок" },
      task: {
        id: "r4-t3",
        type: "single-choice",
        question: {
          pl: "Na rysunku korzenia meszek jest nad czapeczką, a nie na samym dole. Uczeń podpisuje meszek jako czubek. Co pasuje do lekcji?",
          ua: "На малюнку кореня пушок є над шапочкою, а не на самому низу. Учень підписує пушок як кінчик. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "na dole jest czepiec, za nim stożek wzrostu, a meszek to włośniki, które pobierają wodę i sole", ua: "внизу є чохлик, за ним конус наростання, а пушок — це волоски, які вбирають воду і солі" } },
          { id: "b", label: { pl: "meszek jest czepcem, a czapeczka wymienia gazy", ua: "пушок є чохликом, а шапочка обмінює гази" } },
          { id: "c", label: { pl: "cały czubek jest szparką liścia", ua: "увесь кінчик є продихом листка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Czapeczka na dole to czepiec. Chroni stożek wzrostu. Meszek wyżej to włośniki i pobiera wodę oraz sole.",
              ua: "Шапочка внизу — це чохлик. Захищає конус наростання. Пушок вище — це волоски, і він вбирає воду та солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparka jest w skórce liścia. Na korzeniu od dołu idzie czepiec, stożek wzrostu i strefa włośnikowa.",
              ua: "Продих є в шкірці листка. На корені знизу йде чохлик, конус наростання і зона волосків."
            }
          }
        ],
        explanation: {
          pl: "Czepiec jest na czubku. Włośniki są wyżej i pobierają wodę oraz sole.",
          ua: "Чохлик є на кінчику. Волоски є вище і вбирають воду та солі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Pietruszka", ua: "Перевірка 4. Петрушка" },
      task: {
        id: "r4-t4",
        type: "single-choice",
        question: {
          pl: "Pietruszka ma jeden gruby korzeń z zapasem. Obok trawa ma pęk cienkich korzeni, a w koszyku leży ziemniak z oczkami. Co jest korzeniem spichrzowym o systemie palowym?",
          ua: "Петрушка має один товстий корінь із запасом. Поруч трава має жмут тонких коренів, а в кошику лежить картопля з вічками. Що є запасаючим коренем зі стрижневою системою?"
        },
        options: [
          { id: "a", label: { pl: "pietruszka", ua: "петрушка" } },
          { id: "b", label: { pl: "trawa, bo rośnie w glebie", ua: "трава, бо росте в ґрунті" } },
          { id: "c", label: { pl: "ziemniak, bo leżał pod ziemią i jest jadalny", ua: "картопля, бо лежала під землею і є їстівною" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Trawa ma system wiązkowy: pęk cienkich korzeni. Jeden gruby korzeń z zapasem to pietruszka, system palowy i korzeń spichrzowy.",
              ua: "Трава має мичкувату систему: жмут тонких коренів. Один товстий корінь із запасом — це петрушка, стрижнева система і запасаючий корінь."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ziemniak ma oczka, czyli pąki, więc jest pędem. Pietruszka jest korzeniem spichrzowym o systemie palowym.",
              ua: "Картопля має вічка, тобто бруньки, тож є пагоном. Петрушка є запасаючим коренем зі стрижневою системою."
            }
          }
        ],
        explanation: {
          pl: "Pietruszka jest korzeniem spichrzowym i ma system palowy.",
          ua: "Петрушка є запасаючим коренем і має стрижневу систему."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Cztery pary", ua: "Перевірка 5. Чотири пари" },
      task: {
        id: "r4-t5",
        type: "single-choice",
        question: {
          pl: "Na ściętym pniu widać korę, 4 pary jasnego i ciemnego drewna oraz rdzeń. Ile lat w przybliżeniu ma ten przyrost?",
          ua: "На зрізаному стовбурі видно кору, 4 пари світлої і темної деревини та серцевину. Скільки років приблизно має цей приріст?"
        },
        options: [
          { id: "a", label: { pl: "około 4, bo jedna para to jeden rok", ua: "близько 4, бо одна пара — це один рік" } },
          { id: "b", label: { pl: "8, bo każda smuga jest osobnym rokiem", ua: "8, бо кожна смуга є окремим роком" } },
          { id: "c", label: { pl: "1, bo rdzeń jest jedynym słojem", ua: "1, бо серцевина є єдиним кільцем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jasna i ciemna smuga to jeden rok. Cztery pary to około czterech lat. Dodaje je kambium.",
              ua: "Світла і темна смуга — це один рік. Чотири пари — це близько чотирьох років. Їх додає камбій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rdzeń jest miękiszem w środku. Lata zapisują pary drewna. Cztery pary to około czterech lat.",
              ua: "Серцевина є паренхімою всередині. Роки записують пари деревини. Чотири пари — це близько чотирьох років."
            }
          }
        ],
        explanation: {
          pl: "Cztery pary jasnego i ciemnego drewna to około czterech lat.",
          ua: "Чотири пари світлої і темної деревини — це близько чотирьох років."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. Dąb i para", ua: "Перевірка 6. Дуб і пара" },
      task: {
        id: "r4-t6",
        type: "single-choice",
        question: {
          pl: "Liść dębu ma jedną blaszkę i siatkę nerwów. Na świetle powstaje glukoza, a ze szparek na spodzie uchodzi para wodna. Który opis składa te fakty?",
          ua: "Листок дуба має одну пластинку і сітку жилок. На світлі постає глюкоза, а з продихів на споді виходить водяна пара. Який опис складає ці факти?"
        },
        options: [
          { id: "a", label: { pl: "liść pojedynczy o unerwieniu siatkowatym; fotosynteza daje glukozę i tlen; para to transpiracja", ua: "простий листок із сітчастим жилкуванням; фотосинтез дає глюкозу і кисень; пара — це транспірація" } },
          { id: "b", label: { pl: "liść złożony; para jest tlenem, więc transpiracji nie ma", ua: "складний листок; пара є киснем, тож транспірації немає" } },
          { id: "c", label: { pl: "nerwy są słojami, a szparki są włośnikami", ua: "жилки є кільцями, а продихи є волосками" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jedna blaszka dębu to liść pojedynczy. Para wodna to transpiracja. Tlen i glukoza powstają w fotosyntezie.",
              ua: "Одна пластинка дуба — це простий листок. Водяна пара — це транспірація. Кисень і глюкоза постають у фотосинтезі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje są w pniu, a włośniki na korzeniu. Nerwy liścia są wiązkami. Szparki wymieniają gazy i wypuszczają parę.",
              ua: "Кільця є в стовбурі, а волоски на корені. Жилки листка є пучками. Продихи обмінюють гази і випускають пару."
            }
          }
        ],
        explanation: {
          pl: "Dąb ma liść pojedynczy i unerwienie siatkowate. Fotosynteza daje glukozę i tlen. Para wodna to transpiracja.",
          ua: "Дуб має простий листок і сітчасте жилкування. Фотосинтез дає глюкозу і кисень. Водяна пара — це транспірація."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L24_Lisc", "l24-przekroj.png", {
        alt: { pl: "Warstwy blaszki liścia", ua: "Шари пластинки листка" },
        title: { pl: "Tkanki układają się w organy.", ua: "Тканини складаються в органи." },
        prompt: { pl: "Plansza lekcji 24: przekrój blaszki." }
      }),
      text: {
        pl: [
          "Tkanka to podobne komórki o jednej funkcji. Twórcza dzieli się w stożkach wzrostu. Stałe: okrywająca, miękisz, wzmacniająca, przewodząca.",
          "Drewno niesie wodę w górę. Łyko niesie cukry z liści. Korzeń: czepiec, stożek, włośniki. Palowy albo wiązkowy. Marchew to korzeń spichrzowy, ziemniak to pęd.",
          "Pęd to łodyga, liście i pąki. Młoda łodyga: skórka, kora, wiązki, rdzeń. Słój roczny to para drewna.",
          "Liść fotosyntetyzuje, wymienia gazy i transpiruje. Następny dział to różnorodność roślin."
        ],
        ua: [
          "Тканина — це подібні клітини з однією функцією. Твірна ділиться в конусах наростання. Сталі: покривна, паренхіма, механічна, провідна.",
          "Деревина несе воду вгору. Луб несе цукри з листків. Корінь: чохлик, конус, волоски. Стрижнева або мичкувата. Морква — запасаючий корінь, картопля — пагін.",
          "Пагін — це стебло, листки і бруньки. Молоде стебло: шкірка, кора, пучки, серцевина. Річне кільце — це пара деревини.",
          "Листок фотосинтезує, обмінює гази і транспірує. Наступний розділ — різноманітність рослин."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Ułożę komórkę, tkankę, organ i organizm oraz wskażę tkankę twórczą.", ua: "Укладу клітину, тканину, орган і організм та вкажу твірну тканину." },
        { pl: "Rozróżnię drewno i łyko.", ua: "Розрізню деревину і луб." },
        { pl: "Opiszę czubek korzenia: czepiec, stożek wzrostu, włośniki.", ua: "Опишу кінчик кореня: чохлик, конус наростання, волоски." },
        { pl: "Odróżnię system palowy od wiązkowego oraz marchew od ziemniaka.", ua: "Відрізню стрижневу систему від мичкуватої та моркву від картоплі." },
        { pl: "Powiem, że słój roczny to para jasnego i ciemnego drewna.", ua: "Скажу, що річне кільце — це пара світлої і темної деревини." },
        { pl: "Złożę fotosyntezę, wymianę gazów i transpirację w liściu.", ua: "Зберу фотосинтез, обмін газів і транспірацію в листку." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
