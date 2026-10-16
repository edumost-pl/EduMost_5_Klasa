function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L22_Korzen/images/";

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
      heading: { pl: "Misja: organ pod ziemią", ua: "Місія: орган під землею" },
      visual: vizGh("l22-zacznijmy.png", {
        alt: { pl: "Sadzonka i sieć korzeni w doniczce", ua: "Паросток і мережа коренів у горщику" },
        title: { pl: "Pod ziemią jest organ.", ua: "Під землею є орган." },
        prompt: { pl: "Plansza lekcji 22: korzeń w glebie." }
      }),
      text: {
        pl: [
          "To lekcja 22: korzeń. Na lekcji 21 był organem złożonym z tkanek. Dziś sam organ: po co jest, jak się rozgałęzia, co ma od czubka i co widać na przekroju.",
          "Łodyga jest na lekcji 23. Liść jest na lekcji 24.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 22: корінь. На уроці 21 він був органом із тканин. Сьогодні сам орган: навіщо він, як галузиться, що має від кінчика і що видно на перерізі.",
          "Стебло є на уроці 23. Листок є на уроці 24.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "korzeń", ua: "корінь — підземний орган" },
        { pl: "system palowy", ua: "стрижнева система — один головний корінь" },
        { pl: "system wiązkowy", ua: "мичкувата система — жмут тонких коренів" },
        { pl: "czepiec", ua: "кореневий чохлик — шапочка на кінчику" },
        { pl: "strefa włośnikowa", ua: "зона волосків — тут корінь бере воду" },
        { pl: "kora", ua: "кора — паренхіма під шкіркою" },
        { pl: "walec osiowy", ua: "центральний циліндр — деревина і луб" },
        { pl: "korzeń spichrzowy", ua: "запасаючий корінь — морква, не плід" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy funkcje", ua: "Поняття. Три функції" },
      visual: vizGh("l22-funkcje.png", {
        alt: { pl: "Korzeń umacnia roślinę, pobiera wodę i bywa magazynem", ua: "Корінь закріплює рослину, вбирає воду і буває сховищем" },
        title: { pl: "Trzyma. Pobiera. Czasem magazynuje.", ua: "Тримає. Вбирає. Інколи запасає." },
        prompt: { pl: "Plansza lekcji 22: funkcje korzenia." }
      }),
      text: {
        pl: [
          ["", em("Korzeń"), " to organ podziemny. Ma trzy ważne prace."],
          "Umacnia roślinę w podłożu. Włośniki z lekcji 7 i 21 zwiększają powierzchnię, więc korzeń pobiera wodę i sole mineralne. Woda idzie potem drewnem w górę, jak na lekcji 21.",
          "U niektórych roślin korzeń magazynuje zapas. Ten trzeci przypadek wróci na końcu lekcji."
        ],
        ua: [
          ["", em("Корінь"), " — підземний орган. Має три важливі роботи."],
          "Закріплює рослину в ґрунті. Кореневі волоски з уроків 7 і 21 збільшують поверхню, тож корінь вбирає воду і мінеральні солі. Вода далі йде деревиною вгору, як на уроці 21.",
          "У деяких рослин корінь запасає. Цей третій випадок повернеться наприкінці уроку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Fasola w doniczce", ua: "Приклад. Квасоля в горщику" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Wiatr pcha sadzonkę. Korzeń trzyma ją w ziemi."],
            ua: ["Вітер штовхає паросток. Корінь тримає його в землі."]
          }
        },
        {
          text: {
            pl: ["Z gleby do korzenia idzie woda z solami. Dalej drewno niesie ją do łodygi i liści."],
            ua: ["З ґрунту до кореня йде вода з солями. Далі деревина несе її до стебла і листків."]
          }
        },
        {
          text: {
            pl: ["Marchew obok trzyma jeszcze zapas. Zwykła fasola tego magazynu nie buduje."],
            ua: ["Морква поруч тримає ще запас. Звичайна квасоля цього сховища не будує."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Trzy prace", ua: "Коротке питання. Три роботи" },
      task: {
        id: "l22-g1",
        type: "single-choice",
        question: {
          pl: "Jakie trzy funkcje ma korzeń?",
          ua: "Які три функції має корінь?"
        },
        options: [
          { id: "a", label: { pl: "umacnia roślinę, pobiera wodę i sole, a u niektórych magazynuje zapas", ua: "закріплює рослину, вбирає воду і солі, а в деяких запасає" } },
          { id: "b", label: { pl: "robi cukier na świetle zamiast liścia", ua: "робить цукор на світлі замість листка" } },
          { id: "c", label: { pl: "wymienia gazy szparkami, jak skórka liścia", ua: "обмінює гази продихами, як шкірка листка" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj trzech kadrów: wiatr, niebieskie strzałki, zapas.",
          ua: "Шукай три кадри: вітер, сині стрілки, запас."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cukier na świetle powstaje w liściu. Korzeń umacnia roślinę i pobiera wodę oraz sole.",
              ua: "Цукор на світлі постає в листку. Корінь закріплює рослину і вбирає воду та солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparki wymieniają gazy w skórce liścia. Korzeń umacnia roślinę i pobiera wodę oraz sole.",
              ua: "Продихи обмінюють гази в шкірці листка. Корінь закріплює рослину і вбирає воду та солі."
            }
          }
        ],
        explanation: {
          pl: "Korzeń umacnia roślinę, pobiera wodę i sole, a u niektórych magazynuje zapas.",
          ua: "Корінь закріплює рослину, вбирає воду і солі, а в деяких запасає."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielony korzeń", ua: "Типова помилка. Зелений корінь" },
      claim: {
        pl: "„Korzeń robi fotosyntezę, bo roślina jest zielona.”",
        ua: "«Корінь робить фотосинтез, бо рослина зелена.»"
      },
      text: {
        pl: [
          "Zieleń pędu nie jest pracą korzenia.",
          "Korzeń umacnia roślinę w podłożu i pobiera wodę oraz sole mineralne."
        ],
        ua: [
          "Зелень пагона не є роботою кореня.",
          "Корінь закріплює рослину в ґрунті і вбирає воду та мінеральні солі."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kto pije z gleby", ua: "Сам. Хто п’є з ґрунту" },
      task: {
        id: "l22-p1",
        type: "single-choice",
        question: {
          pl: "Fasola stoi na wietrze, a liście dostają wodę z wilgotnej gleby. Uczeń mówi, że pije tkanka wzmacniająca łodygi. Co poprawić?",
          ua: "Квасоля стоїть на вітрі, а листки отримують воду з вологого ґрунту. Учень каже, що п’є механічна тканина стебла. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "korzeń umacnia roślinę i pobiera wodę oraz sole; woda idzie potem drewnem w górę", ua: "корінь закріплює рослину і вбирає воду та солі; вода далі йде деревиною вгору" } },
          { id: "b", label: { pl: "tak — grubsze ściany łodygi pobierają wodę z gleby", ua: "так — товщі стінки стебла вбирають воду з ґрунту" } },
          { id: "c", label: { pl: "tak — szparki liścia piją wodę z doniczki", ua: "так — продихи листка п’ють воду з горщика" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tkanka wzmacniająca usztywnia łodygę. Wodę i sole z gleby pobiera korzeń.",
              ua: "Механічна тканина надає стеблу жорсткості. Воду і солі з ґрунту вбирає корінь."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparki wymieniają gazy. Wodę i sole z gleby pobiera korzeń, a drewno niesie wodę w górę.",
              ua: "Продихи обмінюють гази. Воду і солі з ґрунту вбирає корінь, а деревина несе воду вгору."
            }
          }
        ],
        explanation: {
          pl: "Korzeń umacnia roślinę i pobiera wodę oraz sole. Drewno niesie wodę w górę.",
          ua: "Корінь закріплює рослину і вбирає воду та солі. Деревина несе воду вгору."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa systemy", ua: "Поняття. Дві системи" },
      visual: vizGh("l22-systemy.png", {
        alt: { pl: "Korzeń główny obok pęku cienkich korzeni", ua: "Головний корінь поряд зі жмутом тонких коренів" },
        title: { pl: "Jeden gruby albo wiele cienkich.", ua: "Один товстий або багато тонких." },
        prompt: { pl: "Plansza lekcji 22: system palowy i wiązkowy." }
      }),
      text: {
        pl: [
          ["", em("System palowy"), " ma jeden korzeń główny, grubszy i dłuższy. Od niego odchodzą cieńsze korzenie boczne. Tak rosną marchew, pietruszka i wiele drzew. Sięga głębiej po wodę."],
          ["", em("System wiązkowy"), " to pęk wielu cienkich korzeni podobnej grubości. Tak bywa u traw i cebuli. Gęsto oplata wierzchnią warstwę gleby."],
          "Oba systemy umacniają roślinę i pobierają wodę. Inny jest tylko kształt."
        ],
        ua: [
          ["", em("Стрижнева система"), " має один головний корінь, товстіший і довший. Від нього відходять тонші бічні корені. Так ростуть морква, петрушка і багато дерев. Сягає глибше по воду."],
          ["", em("Мичкувата система"), " — це жмут багатьох тонких коренів схожої товщини. Так буває в трав і цибулі. Густо обплітає верхній шар ґрунту."],
          "Обидві системи закріплюють рослину і вбирають воду. Іншою є лише форма."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Marchew i trawa", ua: "Приклад. Морква і трава" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Marchew ma jeden gruby korzeń główny. Cieńsze boczne odchodzą od niego."],
            ua: ["Морква має один товстий головний корінь. Тонші бічні відходять від нього."]
          }
        },
        {
          text: {
            pl: ["Trawa ma pęk cienkich korzeni podobnej grubości. To system wiązkowy."],
            ua: ["Трава має жмут тонких коренів схожої товщини. Це мичкувата система."]
          }
        },
        {
          text: {
            pl: ["Drzewo często idzie w głąb jednym korzeniem głównym. Cebula zostaje przy pęku cienkich."],
            ua: ["Дерево часто йде вглиб одним головним коренем. Цибуля лишається при жмуті тонких."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kształt", ua: "Коротке питання. Форма" },
      task: {
        id: "l22-g2",
        type: "single-choice",
        question: {
          pl: "Czym system palowy różni się od wiązkowego?",
          ua: "Чим стрижнева система відрізняється від мичкуватої?"
        },
        options: [
          { id: "a", label: { pl: "palowy ma korzeń główny i boczne; wiązkowy to pęk cienkich korzeni podobnej grubości", ua: "стрижнева має головний корінь і бічні; мичкувата — це жмут тонких коренів схожої товщини" } },
          { id: "b", label: { pl: "palowy to pęk cienkich korzeni jak u trawy", ua: "стрижнева — це жмут тонких коренів, як у трави" } },
          { id: "c", label: { pl: "wiązkowy to jeden gruby korzeń jak u marchwi", ua: "мичкувата — це один товстий корінь, як у моркви" } }
        ],
        answer: "a",
        hint: {
          pl: "Po lewej jeden gruby korzeń. Po prawej pęk cienkich.",
          ua: "Ліворуч один товстий корінь. Праворуч жмут тонких."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pęk cienkich korzeni to system wiązkowy, jak u trawy. Palowy ma jeden korzeń główny.",
              ua: "Жмут тонких коренів — це мичкувата система, як у трави. Стрижнева має один головний корінь."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jeden gruby korzeń marchwi to system palowy. Wiązkowy jest pękiem cienkich korzeni.",
              ua: "Один товстий корінь моркви — це стрижнева система. Мичкувата є жмутом тонких коренів."
            }
          }
        ],
        explanation: {
          pl: "System palowy ma korzeń główny i boczne. Wiązkowy to pęk cienkich korzeni podobnej grubości.",
          ua: "Стрижнева система має головний корінь і бічні. Мичкувата — це жмут тонких коренів схожої товщини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Duże drzewo", ua: "Типова помилка. Велике дерево" },
      claim: {
        pl: "„Każde drzewo ma pęk cienkich korzeni jak trawa, bo jest duże.”",
        ua: "«Кожне дерево має жмут тонких коренів, як трава, бо воно велике.»"
      },
      text: {
        pl: [
          "Wielkość pędu nie wybiera systemu.",
          "Wiele drzew ma system palowy: jeden korzeń główny i cieńsze boczne. Trawa i cebula mają system wiązkowy."
        ],
        ua: [
          "Розмір пагона не вибирає систему.",
          "Багато дерев мають стрижневу систему: один головний корінь і тонші бічні. Трава і цибуля мають мичкувату систему."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cebula z grządki", ua: "Сам. Цибуля з грядки" },
      task: {
        id: "l22-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń wykopuje cebulę i mówi, że ma jeden gruby korzeń główny jak marchew. Co poprawić?",
          ua: "Учень викопує цибулю і каже, що вона має один товстий головний корінь, як морква. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "cebula ma zwykle system wiązkowy: wiele cienkich korzeni podobnej grubości", ua: "цибуля має зазвичай мичкувату систему: багато тонких коренів схожої товщини" } },
          { id: "b", label: { pl: "tak — każda roślina z grządki ma system palowy", ua: "так — кожна рослина з грядки має стрижневу систему" } },
          { id: "c", label: { pl: "tak — cebula ma tylko czepiec, bez korzeni", ua: "так — цибуля має лише чохлик, без коренів" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Marchew ma system palowy. Cebula ma zwykle pęk cienkich korzeni, czyli system wiązkowy.",
              ua: "Морква має стрижневу систему. Цибуля має зазвичай жмут тонких коренів, тобто мичкувату систему."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec jest tylko czapeczką na czubku. Cebula ma system wiązkowy: wiele cienkich korzeni.",
              ua: "Чохлик є лише шапочкою на кінчику. Цибуля має мичкувату систему: багато тонких коренів."
            }
          }
        ],
        explanation: {
          pl: "Cebula ma zwykle system wiązkowy. Marchew ma jeden korzeń główny.",
          ua: "Цибуля має зазвичай мичкувату систему. Морква має один головний корінь."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Strefy od czubka", ua: "Поняття. Зони від кінчика" },
      visual: vizGh("l22-strefy.png", {
        alt: { pl: "Czepiec, stożek wzrostu, włośniki i starsza część korzenia", ua: "Чохлик, конус наростання, волоски і старша частина кореня" },
        title: { pl: "Od czubka w stronę pędu.", ua: "Від кінчика в бік пагона." },
        prompt: { pl: "Plansza lekcji 22: strefy korzenia." }
      }),
      text: {
        pl: [
          "Korzeń wydłuża się czubkiem. Od czubka w stronę pędu widać kolejne strefy.",
          ["", em("Czepiec"), " to czapeczka z komórek. Osłania delikatny stożek, gdy korzeń przeciska się między ziarnami gleby."],
          ["Tuż za czepcem jest ", em("stożek wzrostu"), ", tkanka twórcza z lekcji 21. Komórki się dzielą."],
          ["Dalej jest ", em("strefa włośnikowa"), ": skórka wypuszcza włośniki i korzeń pobiera wodę oraz sole. Jeszcze wyżej korzeń jest starszy: tam idzie przewodzenie i wyrastają korzenie boczne."]
        ],
        ua: [
          "Корінь видовжується кінчиком. Від кінчика в бік пагона видно наступні зони.",
          ["", em("Кореневий чохлик"), " — це шапочка з клітин. Захищає ніжний конус, коли корінь протискається між зернами ґрунту."],
          ["Одразу за чохликом є ", em("конус наростання"), ", твірна тканина з уроку 21. Клітини діляться."],
          ["Далі є ", em("зона волосків"), ": шкірка випускає кореневі волоски, і корінь вбирає воду та солі. Ще вище корінь старший: там іде проведення і виростають бічні корені."]
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
            pl: ["Na samym dole jest czepiec. Chroni czubek między ziarnami gleby."],
            ua: ["На самому низу є кореневий чохлик. Захищає кінчик між зернами ґрунту."]
          }
        },
        {
          text: {
            pl: ["Zaraz za nim małe komórki się dzielą. To stożek wzrostu. Korzeń się wydłuża."],
            ua: ["Одразу за ним малі клітини діляться. Це конус наростання. Корінь видовжується."]
          }
        },
        {
          text: {
            pl: ["Wyżej meszek włośników pobiera wodę. Jeszcze wyżej wyrastają korzenie boczne."],
            ua: ["Вище пушок волосків вбирає воду. Ще вище виростають бічні корені."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Sam czubek", ua: "Коротке питання. Сам кінчик" },
      task: {
        id: "l22-g3",
        type: "single-choice",
        question: {
          pl: "Co jest na samym czubku korzenia?",
          ua: "Що є на самому кінчику кореня?"
        },
        options: [
          { id: "a", label: { pl: "czepiec, który osłania stożek wzrostu", ua: "кореневий чохлик, який захищає конус наростання" } },
          { id: "b", label: { pl: "włośniki, bo czubek od razu pije", ua: "кореневі волоски, бо кінчик одразу п’є" } },
          { id: "c", label: { pl: "szparki, bo czubek wymienia gazy", ua: "продихи, бо кінчик обмінює гази" } }
        ],
        answer: "a",
        hint: {
          pl: "Na planszy najniższa etykieta to czapeczka przed stożkiem.",
          ua: "На плакаті найнижча позначка — це шапочка перед конусом."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są wyżej, w strefie włośnikowej. Na czubku czepiec osłania stożek wzrostu.",
              ua: "Волоски є вище, в зоні волосків. На кінчику чохлик захищає конус наростання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparki są w skórce liścia. Na czubku korzenia jest czepiec.",
              ua: "Продихи є в шкірці листка. На кінчику кореня є кореневий чохлик."
            }
          }
        ],
        explanation: {
          pl: "Na czubku jest czepiec. Osłania stożek wzrostu.",
          ua: "На кінчику є кореневий чохлик. Він захищає конус наростання."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kapelusz", ua: "Типова помилка. Шапинка" },
      claim: {
        pl: "„Czepiec to kapelusz grzyba.”",
        ua: "«Кореневий чохлик — це шапинка гриба.»"
      },
      text: {
        pl: [
          "Czepiec jest czapeczką komórek na czubku korzenia. Osłania stożek wzrostu w glebie.",
          "Kapelusz grzyba jest częścią owocnika z lekcji 20."
        ],
        ua: [
          "Кореневий чохлик є шапочкою клітин на кінчику кореня. Захищає конус наростання в ґрунті.",
          "Шапинка гриба є частиною плодового тіла з уроку 20."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Meszek nie na czubku", ua: "Сам. Пушок не на кінчику" },
      task: {
        id: "l22-p3",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi włośniki i mówi, że leżą na samym czubku, więc czepiec jest zbędny. Co poprawić?",
          ua: "Учень бачить кореневі волоски і каже, що вони лежать на самому кінчику, тож чохлик зайвий. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "czepiec jest na czubku i osłania stożek; włośniki są dalej, w strefie włośnikowej", ua: "чохлик є на кінчику і захищає конус; волоски є далі, в зоні волосків" } },
          { id: "b", label: { pl: "tak — włośniki okrywają czubek, a stożek wzrostu jest na łodydze", ua: "так — волоски вкривають кінчик, а конус наростання є на стеблі" } },
          { id: "c", label: { pl: "tak — czepiec to szparka, więc leży na liściu", ua: "так — чохлик це продих, тож лежить на листку" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Stożek wzrostu korzenia jest tuż za czepcem, na czubku. Włośniki leżą wyżej.",
              ua: "Конус наростання кореня є одразу за чохликом, на кінчику. Волоски лежать вище."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparka jest furtką w liściu. Czepiec jest czapeczką na czubku korzenia.",
              ua: "Продих є хвірткою в листку. Чохлик є шапочкою на кінчику кореня."
            }
          }
        ],
        explanation: {
          pl: "Czepiec jest na czubku. Włośniki są dalej, w strefie włośnikowej.",
          ua: "Чохлик є на кінчику. Волоски є далі, в зоні волосків."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy kręgi", ua: "Поняття. Три кола" },
      visual: vizGh("l22-przekroj.png", {
        alt: { pl: "Skórka, kora i walec osiowy na przekroju korzenia", ua: "Шкірка, кора і центральний циліндр на перерізі кореня" },
        title: { pl: "Z zewnątrz skórka. W środku rury.", ua: "Ззовні шкірка. Всередині труби." },
        prompt: { pl: "Plansza lekcji 22: przekrój korzenia." }
      }),
      text: {
        pl: [
          "Na przekroju widać tkanki z lekcji 21, ułożone w trzy kręgi.",
          ["Na zewnątrz jest ", em("skórka"), ", tkanka okrywająca. W strefie włośnikowej ma włośniki."],
          ["Pod nią jest ", em("kora"), ", głównie tkanka miękiszowa. Tu bywa zapas."],
          ["W środku jest ", em("walec osiowy"), " z tkanką przewodzącą: drewno niesie wodę w górę, łyko niesie cukry z liści. Ułożenie wiązek w łodydze jest na lekcji 23."]
        ],
        ua: [
          "На перерізі видно тканини з уроку 21, складені в три кола.",
          ["Ззовні є ", em("шкірка"), ", покривна тканина. У зоні волосків має кореневі волоски."],
          ["Під нею є ", em("кора"), ", здебільшого паренхіма. Тут буває запас."],
          ["Всередині є ", em("центральний циліндр"), " із провідною тканиною: деревина несе воду вгору, луб несе цукри з листків. Розташування пучків у стеблі є на уроці 23."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Od skórki do rur", ua: "Приклад. Від шкірки до труб" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Zewnętrzne koło to skórka. Włośnik wystaje z niej na zewnątrz."],
            ua: ["Зовнішнє коло — це шкірка. Волосок стирчить із неї назовні."]
          }
        },
        {
          text: {
            pl: ["Pod skórką jasna kora z miękiszu. Tu może leżeć zapas."],
            ua: ["Під шкіркою світла кора з паренхіми. Тут може лежати запас."]
          }
        },
        {
          text: {
            pl: ["Środek to walec osiowy. Drewno i łyko są w nim, nie na skórce."],
            ua: ["Середина — це центральний циліндр. Деревина і луб є в ньому, не на шкірці."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Środek", ua: "Коротке питання. Середина" },
      task: {
        id: "l22-g4",
        type: "single-choice",
        question: {
          pl: "Co jest w środku przekroju korzenia?",
          ua: "Що є всередині перерізу кореня?"
        },
        options: [
          { id: "a", label: { pl: "walec osiowy z drewnem i łykiem", ua: "центральний циліндр із деревиною і лубом" } },
          { id: "b", label: { pl: "sama skórka z włośnikami", ua: "сама шкірка з волосками" } },
          { id: "c", label: { pl: "czepiec, bo środek też jest czubkiem", ua: "кореневий чохлик, бо середина теж є кінчиком" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj środkowego koła z drewnem i łykiem.",
          ua: "Шукай середнє коло з деревиною і лубом."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skórka jest na zewnątrz i ma włośniki. W środku jest walec osiowy z drewnem i łykiem.",
              ua: "Шкірка є ззовні і має волоски. Всередині є центральний циліндр із деревиною і лубом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czepiec jest na czubku korzenia, nie w środku przekroju. Środek to walec osiowy.",
              ua: "Чохлик є на кінчику кореня, не всередині перерізу. Середина — це центральний циліндр."
            }
          }
        ],
        explanation: {
          pl: "W środku jest walec osiowy z drewnem i łykiem.",
          ua: "Всередині є центральний циліндр із деревиною і лубом."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Odwrócone koła", ua: "Типова помилка. Перевернуті кола" },
      claim: {
        pl: "„Drewno jest na zewnątrz, a skórka w środku, bo woda wchodzi od brzegu.”",
        ua: "«Деревина є ззовні, а шкірка всередині, бо вода входить від краю.»"
      },
      text: {
        pl: [
          "Skórka jest na zewnątrz. Woda wchodzi przez włośniki.",
          "Drewno leży w walcu osiowym, w środku, i stamtąd niesie wodę w górę."
        ],
        ua: [
          "Шкірка є ззовні. Вода входить через кореневі волоски.",
          "Деревина лежить у центральному циліндрі, всередині, і звідти несе воду вгору."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Trzy nazwy", ua: "Сам. Три назви" },
      task: {
        id: "l22-p4",
        type: "single-choice",
        question: {
          pl: "Na przekroju uczeń nazywa zewnętrzne koło drewnem, bo dotyka gleby. Co poprawić?",
          ua: "На перерізі учень називає зовнішнє коло деревиною, бо воно торкається ґрунту. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "na zewnątrz jest skórka z włośnikami; drewno jest w walcu osiowym, w środku", ua: "ззовні є шкірка з волосками; деревина є в центральному циліндрі, всередині" } },
          { id: "b", label: { pl: "tak — skórka i drewno to ta sama warstwa", ua: "так — шкірка і деревина це той самий шар" } },
          { id: "c", label: { pl: "tak — kora jest czepcem, więc leży na czubku łodygi", ua: "так — кора є чохликом, тож лежить на кінчику стебла" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skórka okrywa korzeń. Drewno jest tkanką przewodzącą w walcu osiowym.",
              ua: "Шкірка вкриває корінь. Деревина є провідною тканиною в центральному циліндрі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kora jest miękiszem pod skórką. Czepiec jest czapeczką na czubku korzenia, nie na łodydze.",
              ua: "Кора є паренхімою під шкіркою. Чохлик є шапочкою на кінчику кореня, не на стеблі."
            }
          }
        ],
        explanation: {
          pl: "Zewnętrzne koło to skórka. Drewno jest w środku, w walcu osiowym.",
          ua: "Зовнішнє коло — це шкірка. Деревина є всередині, в центральному циліндрі."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Korzeń spichrzowy", ua: "Поняття. Запасаючий корінь" },
      visual: vizGh("l22-spichrzowy.png", {
        alt: { pl: "Marchew, pietruszka i burak", ua: "Морква, петрушка і буряк" },
        title: { pl: "Gruby korzeń z zapasem.", ua: "Товстий корінь із запасом." },
        prompt: { pl: "Plansza lekcji 22: korzenie spichrzowe." }
      }),
      text: {
        pl: [
          ["", em("Korzeń spichrzowy"), " jest zgrubiały, bo miękisz kory albo walca napełnił się zapasem: cukrami, skrobią, wodą."],
          "Przykłady to marchew, pietruszka i burak. Jadalna część spod ziemi jest korzeniem.",
          "Trawa ma system wiązkowy i takiego zgrubienia nie buduje. Mikoryza z lekcji 20 jest współpracą z grzybem, a nie zapasem w korzeniu."
        ],
        ua: [
          ["", em("Запасаючий корінь"), " потовщений, бо паренхіма кори або циліндра наповнилася запасом: цукрами, крохмалем, водою."],
          "Приклади — морква, петрушка і буряк. Їстівна частина з-під землі є коренем.",
          "Трава має мичкувату систему і такого потовщення не будує. Мікориза з уроку 20 є співпрацею з грибом, а не запасом у корені."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Marchew na desce", ua: "Приклад. Морква на дошці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Marchew jest gruba, bo trzyma zapas cukrów."],
            ua: ["Морква товста, бо тримає запас цукрів."]
          }
        },
        {
          text: {
            pl: ["Leżała pod ziemią. To korzeń, a nie owoc i nie nasiono."],
            ua: ["Вона лежала під землею. Це корінь, а не плід і не насінина."]
          }
        },
        {
          text: {
            pl: ["Pietruszka i burak też są korzeniami spichrzowymi. Trawa obok zostaje pękiem cienkich korzeni."],
            ua: ["Петрушка і буряк теж є запасаючими коренями. Трава поруч лишається жмутом тонких коренів."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Marchew", ua: "Коротке питання. Морква" },
      task: {
        id: "l22-g5",
        type: "single-choice",
        question: {
          pl: "Czym jest marchew?",
          ua: "Чим є морква?"
        },
        options: [
          { id: "a", label: { pl: "korzeniem spichrzowym z zapasem", ua: "запасаючим коренем із запасом" } },
          { id: "b", label: { pl: "owocem, bo da się ją zjeść", ua: "плодом, бо її можна з’їсти" } },
          { id: "c", label: { pl: "systemem wiązkowym trawy", ua: "мичкуватою системою трави" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj grubego organu spod ziemi, nie pęku cienkich korzeni.",
          ua: "Шукай товстий орган з-під землі, не жмут тонких коренів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To, że marchew jest jadalna, nie robi z niej owocu. To zgrubiały korzeń z zapasem.",
              ua: "Те, що морква їстівна, не робить із неї плід. Це потовщений корінь із запасом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Trawa ma system wiązkowy. Marchew ma jeden gruby korzeń główny i jest korzeniem spichrzowym.",
              ua: "Трава має мичкувату систему. Морква має один товстий головний корінь і є запасаючим коренем."
            }
          }
        ],
        explanation: {
          pl: "Marchew jest korzeniem spichrzowym. Trzyma zapas.",
          ua: "Морква є запасаючим коренем. Тримає запас."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każdy korzeń", ua: "Типова помилка. Кожен корінь" },
      claim: {
        pl: "„Każdy korzeń jest spichrzowy, bo każdy pobiera wodę.”",
        ua: "«Кожен корінь є запасаючим, бо кожен вбирає воду.»"
      },
      text: {
        pl: [
          "Pobieranie wody jest pracą każdego korzenia.",
          "Korzeń spichrzowy jest dodatkowo zgrubiały od zapasu, jak marchew. Trawa takiego magazynu nie buduje."
        ],
        ua: [
          "Вбирання води є роботою кожного кореня.",
          "Запасаючий корінь додатково потовщений від запасу, як морква. Трава такого сховища не будує."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pietruszka", ua: "Сам. Петрушка" },
      task: {
        id: "l22-p5",
        type: "single-choice",
        question: {
          pl: "Pietruszka z grządki jest gruba i słodka. Uczeń mówi, że to nasiono, bo roślinę się sieje. Co poprawić?",
          ua: "Петрушка з грядки товста і солодка. Учень каже, що це насінина, бо рослину сіють. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to korzeń spichrzowy: zgrubiały organ podziemny z zapasem", ua: "це запасаючий корінь: потовщений підземний орган із запасом" } },
          { id: "b", label: { pl: "tak — każda słodka część rośliny jest nasionem", ua: "так — кожна солодка частина рослини є насіниною" } },
          { id: "c", label: { pl: "tak — to mikoryza, bo leżała w glebie przy korzeniu", ua: "так — це мікориза, бо лежала в ґрунті біля кореня" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Słodki zapas nie robi nasiona. Pietruszka z grządki jest korzeniem spichrzowym.",
              ua: "Солодкий запас не робить насінину. Петрушка з грядки є запасаючим коренем."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mikoryza jest współpracą grzyba z korzeniem. Pietruszka jest sama korzeniem spichrzowym.",
              ua: "Мікориза є співпрацею гриба з коренем. Петрушка сама є запасаючим коренем."
            }
          }
        ],
        explanation: {
          pl: "Pietruszka jest korzeniem spichrzowym. To organ podziemny z zapasem.",
          ua: "Петрушка є запасаючим коренем. Це підземний орган із запасом."
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
      heading: { pl: "Sprawdzian 1. Po burzy", ua: "Перевірка 1. Після бурі" },
      task: {
        id: "l22-t1",
        type: "single-choice",
        question: {
          pl: "Po burzy młode drzewo zostaje w ziemi, a jego liście mają wodę z gleby. Obok marchew trzyma zapas. Który zestaw opisuje korzeń?",
          ua: "Після бурі молоде дерево лишається в землі, а його листки мають воду з ґрунту. Поруч морква тримає запас. Який набір описує корінь?"
        },
        options: [
          { id: "a", label: { pl: "umocowanie i pobieranie wody oraz soli u każdego korzenia, a zapas tylko u niektórych", ua: "закріплення і вбирання води та солей у кожного кореня, а запас лише в деяких" } },
          { id: "b", label: { pl: "tylko fotosynteza, bo drzewo jest zielone", ua: "лише фотосинтез, бо дерево зелене" } },
          { id: "c", label: { pl: "tylko szparki, bo burza to wymiana gazów", ua: "лише продихи, бо буря — це обмін газів" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza jest pracą liścia. Korzeń umacnia roślinę i pobiera wodę oraz sole. Zapas bywa tylko u niektórych, jak u marchwi.",
              ua: "Фотосинтез є роботою листка. Корінь закріплює рослину і вбирає воду та солі. Запас буває лише в деяких, як у моркви."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparki wymieniają gazy w liściu. Korzeń umacnia roślinę i pobiera wodę oraz sole.",
              ua: "Продихи обмінюють гази в листку. Корінь закріплює рослину і вбирає воду та солі."
            }
          }
        ],
        explanation: {
          pl: "Korzeń umacnia roślinę i pobiera wodę oraz sole. Zapas mają tylko niektóre korzenie.",
          ua: "Корінь закріплює рослину і вбирає воду та солі. Запас мають лише деякі корені."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Młody dąb", ua: "Перевірка 2. Молодий дуб" },
      task: {
        id: "l22-t2",
        type: "single-choice",
        question: {
          pl: "Młody dąb ma jeden gruby korzeń w głąb i cieńsze korzenie boczne. Jaki to system?",
          ua: "Молодий дуб має один товстий корінь углиб і тонші бічні корені. Яка це система?"
        },
        options: [
          { id: "a", label: { pl: "palowy, bo jest korzeń główny i boczne", ua: "стрижнева, бо є головний корінь і бічні" } },
          { id: "b", label: { pl: "wiązkowy, bo drzewo jest wysokie jak trawa", ua: "мичкувата, бо дерево високе, як трава" } },
          { id: "c", label: { pl: "żaden, bo głęboki korzeń jest łodygą", ua: "жодна, бо глибокий корінь є стеблом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wysokość drzewa nie robi systemu wiązkowego. Jeden korzeń główny i boczne to system palowy. Wiązkowy jest u trawy i cebuli.",
              ua: "Висота дерева не робить мичкуватої системи. Один головний корінь і бічні — це стрижнева система. Мичкувата є в трави і цибулі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Korzeń zostaje organem podziemnym. Jeden gruby korzeń z bocznymi to system palowy, nie łodyga.",
              ua: "Корінь лишається підземним органом. Один товстий корінь із бічними — це стрижнева система, не стебло."
            }
          }
        ],
        explanation: {
          pl: "Jeden korzeń główny i cieńsze boczne to system palowy.",
          ua: "Один головний корінь і тонші бічні — це стрижнева система."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Między ziarnami", ua: "Перевірка 3. Між зернами" },
      task: {
        id: "l22-t3",
        type: "single-choice",
        question: {
          pl: "Korzeń przeciska się między ziarnami gleby. Jaka jest kolejność od czubka w stronę pędu?",
          ua: "Корінь протискається між зернами ґрунту. Яка послідовність від кінчика в бік пагона?"
        },
        options: [
          { id: "a", label: { pl: "czepiec, stożek wzrostu, strefa włośnikowa, a wyżej starsza część z przewodzeniem i korzeniami bocznymi", ua: "чохлик, конус наростання, зона волосків, а вище старша частина з проведенням і бічними коренями" } },
          { id: "b", label: { pl: "włośniki, potem czepiec, potem szparki liścia", ua: "волоски, потім чохлик, потім продихи листка" } },
          { id: "c", label: { pl: "walec osiowy, potem czepiec, potem kapelusz grzyba", ua: "центральний циліндр, потім чохлик, потім шапинка гриба" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są za stożkiem wzrostu, nie przed czepcem. Szparki należą do liścia. Od czubka: czepiec, stożek, strefa włośnikowa.",
              ua: "Волоски є за конусом наростання, не перед чохликом. Продихи належать листку. Від кінчика: чохлик, конус, зона волосків."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Walec osiowy jest w środku przekroju. Kapelusz należy do grzyba. Od czubka korzenia idzie czepiec, potem stożek wzrostu.",
              ua: "Центральний циліндр є всередині перерізу. Шапинка належить грибу. Від кінчика кореня йде чохлик, потім конус наростання."
            }
          }
        ],
        explanation: {
          pl: "Od czubka: czepiec, stożek wzrostu, strefa włośnikowa, a wyżej starsza część korzenia.",
          ua: "Від кінчика: чохлик, конус наростання, зона волосків, а вище старша частина кореня."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Trzy koła", ua: "Перевірка 4. Три кола" },
      task: {
        id: "l22-t4",
        type: "single-choice",
        question: {
          pl: "Na przekroju włośnik wystaje z zewnętrznej warstwy, pod nią jest jasny miękisz, a w środku są rury. Jak nazywają się te trzy kręgi?",
          ua: "На перерізі волосок стирчить із зовнішнього шару, під ним є світла паренхіма, а всередині є труби. Як називаються ці три кола?"
        },
        options: [
          { id: "a", label: { pl: "skórka, kora, walec osiowy z drewnem i łykiem", ua: "шкірка, кора, центральний циліндр із деревиною і лубом" } },
          { id: "b", label: { pl: "walec na zewnątrz, skórka w środku, czepiec między nimi", ua: "циліндр ззовні, шкірка всередині, чохлик між ними" } },
          { id: "c", label: { pl: "same stożki wzrostu, bo korzeń rośnie w każdym kole", ua: "самі конуси наростання, бо корінь росте в кожному колі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kolejność jest odwrotna. Z zewnątrz skórka z włośnikiem, pod nią kora z miękiszu, w środku walec osiowy. Czepiec jest na czubku, nie między kołami.",
              ua: "Послідовність зворотна. Ззовні шкірка з волоском, під нею кора з паренхіми, всередині центральний циліндр. Чохлик є на кінчику, не між колами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Stożek wzrostu jest na czubku korzenia. Na przekroju trzy kręgi to skórka, kora i walec osiowy.",
              ua: "Конус наростання є на кінчику кореня. На перерізі три кола — це шкірка, кора і центральний циліндр."
            }
          }
        ],
        explanation: {
          pl: "Od zewnątrz: skórka, kora, walec osiowy z drewnem i łykiem.",
          ua: "Ззовні: шкірка, кора, центральний циліндр із деревиною і лубом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Burak", ua: "Перевірка 5. Буряк" },
      task: {
        id: "l22-t5",
        type: "single-choice",
        question: {
          pl: "Burak wyciągnięty z ziemi jest gruby. Uczeń mówi, że to owoc, bo jest jadalny. Co pasuje do lekcji?",
          ua: "Буряк, витягнений із землі, товстий. Учень каже, що це плід, бо він їстівний. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "to korzeń spichrzowy: zgrubiały organ podziemny z zapasem", ua: "це запасаючий корінь: потовщений підземний орган із запасом" } },
          { id: "b", label: { pl: "to owoc, bo każda jadalna część jest owocem", ua: "це плід, бо кожна їстівна частина є плодом" } },
          { id: "c", label: { pl: "to system wiązkowy, bo burak rósł w glebie jak trawa", ua: "це мичкувата система, бо буряк ріс у ґрунті, як трава" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jadalność nie robi owocu. Burak jest korzeniem spichrzowym, organem podziemnym z zapasem.",
              ua: "Їстівність не робить плід. Буряк є запасаючим коренем, підземним органом із запасом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Trawa ma system wiązkowy i nie grubieje w magazyn. Burak jest korzeniem spichrzowym.",
              ua: "Трава має мичкувату систему і не товстіє в сховище. Буряк є запасаючим коренем."
            }
          }
        ],
        explanation: {
          pl: "Burak jest korzeniem spichrzowym. To zgrubiały organ podziemny z zapasem.",
          ua: "Буряк є запасаючим коренем. Це потовщений підземний орган із запасом."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l22-strefy.png", {
        alt: { pl: "Strefy korzenia od czepca do starszej części", ua: "Зони кореня від чохлика до старшої частини" },
        title: { pl: "Czubek, system i trzy koła.", ua: "Кінчик, система і три кола." },
        prompt: { pl: "Ta sama plansza stref korzenia." }
      }),
      text: {
        pl: [
          "Korzeń umacnia roślinę, pobiera wodę i sole, a u niektórych magazynuje zapas.",
          "System palowy ma korzeń główny i boczne. System wiązkowy to pęk cienkich korzeni.",
          "Od czubka: czepiec, stożek wzrostu, strefa włośnikowa, wyżej starsza część.",
          "Przekrój: skórka, kora, walec osiowy. Marchew, pietruszka i burak to korzenie spichrzowe."
        ],
        ua: [
          "Корінь закріплює рослину, вбирає воду і солі, а в деяких запасає.",
          "Стрижнева система має головний корінь і бічні. Мичкувата — це жмут тонких коренів.",
          "Від кінчика: чохлик, конус наростання, зона волосків, вище старша частина.",
          "Переріз: шкірка, кора, центральний циліндр. Морква, петрушка і буряк — це запасаючі корені."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wymienię trzy funkcje korzenia.", ua: "Назву три функції кореня." },
        { pl: "Odróżnię system palowy od wiązkowego.", ua: "Відрізню стрижневу систему від мичкуватої." },
        { pl: "Ułożę strefy korzenia od czubka.", ua: "Розкладу зони кореня від кінчика." },
        { pl: "Wskażę skórkę, korę i walec osiowy.", ua: "Вкажу шкірку, кору і центральний циліндр." },
        { pl: "Podam marchew, pietruszkę albo burak jako korzeń spichrzowy.", ua: "Назву моркву, петрушку або буряк як запасаючий корінь." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
