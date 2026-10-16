function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L07_Komorka_roslinna/images/";

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
      heading: { pl: "Misja: komórka roślinna", ua: "Місія: рослинна клітина" },
      visual: vizGh("l07-zacznijmy.png", {
        alt: { pl: "Moczarka kanadyjska w wodzie", ua: "Елодея канадська у воді" },
        title: { pl: "Ta wodna roślina często gości na lekcji biologii.", ua: "Ця водяна рослина часто гостює на уроці біології." },
        prompt: { pl: "Zdjęcie lekcji 7: pędy moczarki kanadyjskiej w wodzie." }
      }),
      text: {
        pl: [
          "To lekcja 7: komórka roślinna. Komórka zwierzęca ma błonę, cytozol, jądro, mitochondria, rybosomy i drobne wakuole.",
          "Roślinna ma to wszystko — i jeszcze ścianę komórkową oraz chloroplasty. Żeby je zobaczyć, biolodzy biorą listki moczarki kanadyjskiej.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Równania fotosyntezy dziś nie ma."
        ],
        ua: [
          "Це урок 7: рослинна клітина. Тваринна клітина має мембрану, цитозоль, ядро, мітохондрії, рибосоми і дрібні вакуолі.",
          "Рослинна має все це — і ще клітинну стінку та хлоропласти. Щоб їх побачити, біологи беруть листочки елодеї канадської.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Рівняння фотосинтезу сьогодні немає."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "ściana komórkowa", ua: "клітинна стінка — форма і захист; під нею лишається мембрана" },
        { pl: "celuloza", ua: "целюлоза — цукор, головний складник стінки" },
        { pl: "chloroplast", ua: "хлоропласт — зелений; поживні речовини під час фотосинтезу" },
        { pl: "chlorofil", ua: "хлорофіл — зелений барвник, поглинає світло" },
        { pl: "wakuola (wodniczka)", ua: "вакуоля — у рослин зазвичай одна велика, багато води" },
        { pl: "komórki szparkowe", ua: "продихові клітини — дві квасолини, обмін газів у листку" },
        { pl: "włośniki", ua: "кореневі волоски — більша поверхня кореня, вода і солі" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Kształt służy funkcji", ua: "Поняття. Форма служить функції" },
      visual: vizGh("l07-ksztalty.png", {
        alt: { pl: "Komórki szparkowe, włośniki i komórki jak rury", ua: "Продихові клітини, кореневі волоски і клітини як труби" },
        title: { pl: "Trzy kształty, trzy prace.", ua: "Три форми, три роботи." },
        prompt: { pl: "Plansza lekcji 7: szparki, włośniki, komórki transportujące wodę." }
      }),
      text: {
        pl: [
          "Komórki roślinne mają różne kształty, bo pełnią różne funkcje.",
          [em("Komórki szparkowe"), " w liściu są jak dwie fasolki. Między nimi jest szczelina — szparka. Tędy roślina wymienia gazy z otoczeniem: tlen i dwutlenek węgla."],
          [em("Włośniki"), " to długie, palczaste wypustki komórek skórki korzenia. Zwiększają powierzchnię, więc korzeń łatwiej pobiera wodę i sole mineralne."],
          "Niektóre komórki układają się jak rury i transportują wodę oraz sole. Szczegóły tkanek poznasz później. Dziś wystarczy kształt i funkcja."
        ],
        ua: [
          "Рослинні клітини мають різні форми, бо виконують різні функції.",
          [em("Продихові клітини"), " в листку як дві квасолини. Між ними щілина — продих. Туди рослина обмінюється газами з оточенням: кисень і вуглекислий газ."],
          [em("Кореневі волоски"), " — довгі пальцеподібні вирости клітин шкірки кореня. Збільшують поверхню, тож корінь легше бере воду і мінеральні солі."],
          "Деякі клітини кладуться як труби і транспортують воду та солі. Подробиці тканин пізнаєш пізніше. Сьогодні досить форми і функції."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Fasolki, palce, rury", ua: "Приклад. Квасолини, пальці, труби" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dwie fasolki w liściu zostawiają szparkę. Tędy idą gazy."],
            ua: ["Дві квасолини в листку лишають продих. Туди йдуть гази."]
          }
        },
        {
          text: {
            pl: ["Palczasty włośnik na korzeniu zwiększa powierzchnię. Łatwiej o wodę i sole."],
            ua: ["Пальцеподібний кореневий волосок на корені збільшує поверхню. Легше про воду і солі."]
          }
        },
        {
          text: {
            pl: ["Komórki jak rury wiozą wodę i sole. To nie jest włośnik i nie jest szparka."],
            ua: ["Клітини як труби везуть воду і солі. Це не кореневий волосок і не продих."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co włośnik?", ua: "Коротке питання. Навіщо волосок?" },
      task: {
        id: "l07-g1",
        type: "single-choice",
        question: {
          pl: "Do czego służą włośniki?",
          ua: "Для чого служать кореневі волоски?"
        },
        options: [
          { id: "a", label: { pl: "zwiększają powierzchnię korzenia i ułatwiają pobieranie wody oraz soli mineralnych", ua: "збільшують поверхню кореня і полегшують вбирання води та мінеральних солей" } },
          { id: "b", label: { pl: "wymieniają gazy w liściu jak komórki szparkowe", ua: "обмінюють гази в листку, як продихові клітини" } },
          { id: "c", label: { pl: "to to samo co wić plemnika", ua: "це те саме, що джгутик сперматозоїда" } }
        ],
        answer: "a",
        hint: {
          pl: "Włośnik jest na korzeniu. Szukaj wody i soli, nie gazów w liściu.",
          ua: "Волосок є на корені. Шукай воду і солі, не гази в листку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gazy w liściu wymienią komórki szparkowe. Włośnik jest na korzeniu i pomaga pobierać wodę oraz sole.",
              ua: "Гази в листку обмінюють продихові клітини. Волосок є на корені і допомагає брати воду та солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wić porusza plemnikiem. Włośnik jest wypustką korzenia i zwiększa jego powierzchnię.",
              ua: "Джгутик рухає сперматозоїдом. Кореневий волосок — виріст кореня і збільшує його поверхню."
            }
          }
        ],
        explanation: {
          pl: "Włośniki zwiększają powierzchnię korzenia, więc łatwiej pobrać wodę i sole mineralne.",
          ua: "Кореневі волоски збільшують поверхню кореня, тож легше взяти воду і мінеральні солі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wszystkie jak wić", ua: "Типова помилка. Усі як джгутик" },
      claim: {
        pl: "„Każda komórka roślinna musi mieć kształt wici.”",
        ua: "«Кожна рослинна клітина мусить мати форму джгутика.»"
      },
      text: {
        pl: [
          "Kształt zależy od pracy.",
          "Szparka wymienia gazy, włośnik pobiera wodę i sole, komórki jak rury transportują wodę. Żadna z nich nie jest wicią plemnika."
        ],
        ua: [
          "Форма залежить від роботи.",
          "Продих обмінює гази, волосок бере воду і солі, клітини як труби транспортують воду. Жодна з них не є джгутиком сперматозоїда."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwie fasolki w liściu", ua: "Сам. Дві квасолини в листку" },
      task: {
        id: "l07-p1",
        type: "single-choice",
        question: {
          pl: "Dwie komórki jak fasolki zostawiają szczelinę w liściu. Do czego ona służy?",
          ua: "Дві клітини як квасолини лишають щілину в листку. Для чого вона служить?"
        },
        options: [
          { id: "a", label: { pl: "do wymiany gazów: tlenu i dwutlenku węgla", ua: "для обміну газів: кисню і вуглекислого газу" } },
          { id: "b", label: { pl: "do pobierania wody z gleby, jak włośnik", ua: "для вбирання води з ґрунту, як кореневий волосок" } },
          { id: "c", label: { pl: "do transportu wody w rurze przez łodygę", ua: "для транспорту води в трубі через стебло" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wodę z gleby pobiera włośnik na korzeniu. Dwie fasolki w liściu to komórki szparkowe: wymiana gazów.",
              ua: "Воду з ґрунту бере волосок на корені. Дві квасолини в листку — продихові клітини: обмін газів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wodę wiozą komórki ułożone jak rury. Szczelina między fasolkami w liściu służy wymianie gazów.",
              ua: "Воду везуть клітини, складені як труби. Щілина між квасолинами в листку служить обміну газів."
            }
          }
        ],
        explanation: {
          pl: "Komórki szparkowe zostawiają szparkę. Tędy liść wymienia tlen i dwutlenek węgla.",
          ua: "Продихові клітини лишають продих. Туди листок обмінює кисень і вуглекислий газ."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Osiem elementów", ua: "Поняття. Вісім елементів" },
      visual: vizGh("l07-schemat.png", {
        alt: { pl: "Schemat budowy komórki roślinnej z ośmioma elementami", ua: "Схема будови рослинної клітини з вісьмома елементами" },
        title: { pl: "Numery 1–6 jak u zwierzęcia. 7 i 8 — tylko roślina.", ua: "Номери 1–6 як у тварини. 7 і 8 — лише рослина." },
        prompt: { pl: "Schemat lekcji 7: osiem elementów komórki roślinnej." }
      }),
      text: {
        pl: [
          "Komórka roślinna ma błonę komórkową, cytozol, jądro, mitochondria i rybosomy — tak jak komórka zwierzęca.",
          "Ma też zwykle jedną dużą wakuolę.",
          ["Dwie cechy, których zwierzę nie ma: ", em("chloroplasty"), " i ", em("ściana komórkowa"), "."],
          "Na schemacie numery 1–6 są wspólne. Numery 7 i 8, chloroplast i ściana, są roślinne. Błony roślinie nie brakuje."
        ],
        ua: [
          "Рослинна клітина має клітинну мембрану, цитозоль, ядро, мітохондрії і рибосоми — як тваринна клітина.",
          "Має також зазвичай одну велику вакуолю.",
          ["Дві риси, яких тварина не має: ", em("хлоропласти"), " і ", em("клітинна стінка"), "."],
          "На схемі номери 1–6 спільні. Номери 7 і 8, хлоропласт і стінка, — рослинні. Мембрани рослині не бракує."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Wspólne i roślinne", ua: "Приклад. Спільне і рослинне" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["1–6: błona, cytozol, jądro, duża wakuola, mitochondrium, rybosomy."],
            ua: ["1–6: мембрана, цитозоль, ядро, велика вакуоля, мітохондрія, рибосоми."]
          }
        },
        {
          text: {
            pl: ["7: chloroplast. 8: ściana komórkowa. Tych dwóch zwierzę nie ma."],
            ua: ["7: хлоропласт. 8: клітинна стінка. Цих двох тварина не має."]
          }
        },
        {
          text: {
            pl: ["Mitochondrium zostaje. Roślina też potrzebuje centrum energetycznego."],
            ua: ["Мітохондрія лишається. Рослині теж потрібен енергетичний центр."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co tylko u rośliny?", ua: "Коротке питання. Що лише в рослини?" },
      task: {
        id: "l07-g2",
        type: "single-choice",
        question: {
          pl: "Które dwa elementy odróżniają komórkę roślinną od zwierzęcej na tym schemacie?",
          ua: "Які два елементи відрізняють рослинну клітину від тваринної на цій схемі?"
        },
        options: [
          { id: "a", label: { pl: "chloroplasty i ściana komórkowa", ua: "хлоропласти і клітинна стінка" } },
          { id: "b", label: { pl: "tylko mitochondria", ua: "лише мітохондрії" } },
          { id: "c", label: { pl: "brak błony komórkowej u rośliny", ua: "відсутність клітинної мембрани в рослини" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj numerów 7 i 8. Błonę i mitochondria mają obie komórki.",
          ua: "Шукай номери 7 і 8. Мембрану і мітохондрії мають обидві клітини."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mitochondria są i u rośliny, i u zwierzęcia. Roślinne dodatki to chloroplast i ściana.",
              ua: "Мітохондрії є і в рослини, і в тварини. Рослинні додатки — хлоропласт і стінка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Błona jest u obu. Roślina dostaje ścianę dodatkowo, a nie zamiast błony.",
              ua: "Мембрана є в обох. Рослина отримує стінку додатково, а не замість мембрани."
            }
          }
        ],
        explanation: {
          pl: "Od zwierzęcia odróżniają roślinę chloroplasty i ściana komórkowa.",
          ua: "Від тварини рослину відрізняють хлоропласти і клітинна стінка."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Roślina bez błony", ua: "Типова помилка. Рослина без мембрани" },
      claim: {
        pl: "„Komórka roślinna nie ma błony, bo ma ścianę.”",
        ua: "«Рослинна клітина не має мембрани, бо має стінку.»"
      },
      text: {
        pl: [
          "Ściana jest dodatkową warstwą na zewnątrz.",
          "Błona komórkowa zostaje pod ścianą. Mitochondria, jądro, cytozol i rybosomy też zostają."
        ],
        ua: [
          "Стінка — додатковий шар ззовні.",
          "Клітинна мембрана лишається під стінкою. Мітохондрії, ядро, цитозоль і рибосоми теж лишаються."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Liść i mięsień", ua: "Сам. Листок і м’яз" },
      task: {
        id: "l07-p2",
        type: "single-choice",
        question: {
          pl: "Który element jest i w komórce liścia dębu, i w komórce mięśnia psa?",
          ua: "Який елемент є і в клітині листка дуба, і в клітині м’яза пса?"
        },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "ściana komórkowa z celulozy", ua: "клітинна стінка з целюлози" } },
          { id: "c", label: { pl: "chloroplast", ua: "хлоропласт" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ściana z celulozy jest u dębu. Mięsień psa jej nie ma. Wspólna jest błona.",
              ua: "Стінка з целюлози є в дуба. М’яз пса її не має. Спільною є мембрана."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast jest w liściu. W mięśniu psa go nie ma. Błonę mają obie komórki.",
              ua: "Хлоропласт є в листку. У м’язі пса його немає. Мембрану мають обидві клітини."
            }
          }
        ],
        explanation: {
          pl: "Błona jest wspólna. Ściana i chloroplast są tylko w komórce roślinnej.",
          ua: "Мембрана спільна. Стінка і хлоропласт є лише в рослинній клітині."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Listek moczarki pod mikroskopem", ua: "Поняття. Листочок елодеї під мікроскопом" },
      visual: vizGh("l07-mikroskop.png", {
        alt: { pl: "Komórki liścia moczarki powiększone około 400 razy", ua: "Клітини листка елодеї збільшені приблизно в 400 разів" },
        title: { pl: "Widać ścianę, chloroplasty, wakuolę i jądro.", ua: "Видно стінку, хлоропласти, вакуолю і ядро." },
        prompt: { pl: "Mikrofotografia lekcji 7: komórki liścia moczarki." }
      }),
      text: {
        pl: [
          "Listki moczarki są cienkie, więc nadają się na preparat: kropla wody, listek, szkiełko nakrywkowe. Obserwację zaczynasz od najmniejszego powiększenia.",
          "Na zdjęciu, około 400×, widać prostokątne komórki. Zielone owale to chloroplasty. Jasna przestrzeń w środku to duża wakuola. Na brzegu jest grubsza ściana, a pod nią cienka błona.",
          "Na rysunku z preparatu podpisz co najmniej chloroplasty, ścianę komórkową i jądro komórkowe."
        ],
        ua: [
          "Листочки елодеї тонкі, тож годяться на препарат: крапля води, листочок, накривне скельце. Спостереження починаєш із найменшого збільшення.",
          "На знімку, близько 400×, видно прямокутні клітини. Зелені овали — хлоропласти. Світлий простір усередині — велика вакуоля. На краю товстіша стінка, а під нею тонка мембрана.",
          "На малюнку з препарату підпиши щонайменше хлоропласти, клітинну стінку і клітинне ядро."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy podpisy", ua: "Приклад. Три підписи" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Najpierw najmniejsze powiększenie. Listek leży w kropli wody pod szkiełkiem."],
            ua: ["Спочатку найменше збільшення. Листочок лежить у краплі води під скельцем."]
          }
        },
        {
          text: {
            pl: ["Zielone owale podpisujesz: chloroplasty. Jasny środek: duża wakuola."],
            ua: ["Зелені овали підписуєш: хлоропласти. Світла середина: велика вакуоля."]
          }
        },
        {
          text: {
            pl: ["Na rysunku muszą być jeszcze ściana komórkowa i jądro."],
            ua: ["На малюнку мають бути ще клітинна стінка і ядро."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co podpisujesz?", ua: "Коротке питання. Що підписуєш?" },
      task: {
        id: "l07-g3",
        type: "single-choice",
        question: {
          pl: "Co podpisujesz na rysunku komórek moczarki co najmniej?",
          ua: "Що ти підписуєш на малюнку клітин елодеї щонайменше?"
        },
        options: [
          { id: "a", label: { pl: "chloroplasty, ścianę komórkową i jądro komórkowe", ua: "хлоропласти, клітинну стінку і клітинне ядро" } },
          { id: "b", label: { pl: "kości z wapnia", ua: "кістки з кальцію" } },
          { id: "c", label: { pl: "tylko wić", ua: "лише джгутик" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy nazwy z preparatu: zielone owale, gruba granica i jądro.",
          ua: "Три назви з препарату: зелені овали, товста межа і ядро."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kości są w organizmie zwierzęcia. Na preparacie moczarki podpisujesz chloroplasty, ścianę i jądro.",
              ua: "Кістки є в організмі тварини. На препараті елодеї підписуєш хлоропласти, стінку і ядро."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wić nie jest elementem tego preparatu. Szukaj chloroplastów, ściany i jądra.",
              ua: "Джгутик не є елементом цього препарату. Шукай хлоропласти, стінку і ядро."
            }
          }
        ],
        explanation: {
          pl: "Na rysunku z preparatu są co najmniej chloroplasty, ściana komórkowa i jądro.",
          ua: "На малюнку з препарату є щонайменше хлоропласти, клітинна стінка і ядро."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Od razu największe powiększenie", ua: "Типова помилка. Одразу найбільше збільшення" },
      claim: {
        pl: "„Listek kładziesz bez szkiełka i od razu patrzysz przez największe powiększenie.”",
        ua: "«Листочок кладеш без скельця і одразу дивишся через найбільше збільшення.»"
      },
      text: {
        pl: [
          "Preparat to kropla wody, listek i szkiełko nakrywkowe.",
          "Obserwację zaczynasz od najmniejszego powiększenia, tak jak przy innych preparatach."
        ],
        ua: [
          "Препарат — це крапля води, листочок і накривне скельце.",
          "Спостереження починаєш із найменшого збільшення, як і з іншими препаратами."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zielone owale", ua: "Сам. Зелені овали" },
      task: {
        id: "l07-p3",
        type: "single-choice",
        question: {
          pl: "Na zdjęciu moczarki, około 400×, widać zielone owale. Co to jest?",
          ua: "На знімку елодеї, близько 400×, видно зелені овали. Що це?"
        },
        options: [
          { id: "a", label: { pl: "chloroplasty", ua: "хлоропласти" } },
          { id: "b", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "c", label: { pl: "ściana komórkowa", ua: "клітинна стінка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro też podpisujesz, ale zielone owale to chloroplasty. Jądro nie jest tym zielonym owalem.",
              ua: "Ядро теж підписуєш, але зелені овали — це хлоропласти. Ядро не є цим зеленим овалом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana jest na brzegu komórki, grubsza. Zielone owale w środku to chloroplasty.",
              ua: "Стінка є на краю клітини, товстіша. Зелені овали всередині — це хлоропласти."
            }
          }
        ],
        explanation: {
          pl: "Zielone owale na zdjęciu moczarki to chloroplasty.",
          ua: "Зелені овали на знімку елодеї — це хлоропласти."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Ściana komórkowa", ua: "Поняття. Клітинна стінка" },
      visual: vizGh("l07-sciana.png", {
        alt: { pl: "Gruba ściana komórkowa z celulozy i błona pod nią", ua: "Товста клітинна стінка з целюлози і мембрана під нею" },
        title: { pl: "Ściana daje kształt i chroni. Pod nią jest błona.", ua: "Стінка дає форму і захищає. Під нею є мембрана." },
        prompt: { pl: "Plansza lekcji 7: ściana komórkowa, celuloza, błona pod ścianą." }
      }),
      text: {
        pl: [
          [em("Ściana komórkowa"), " otacza komórkę roślinną od zewnątrz. Nadaje kształt, chroni przed uszkodzeniem i przed drobnoustrojami."],
          ["Główny składnik ściany to ", em("celuloza"), " — cukier, materiał budulcowy roślin."],
          "Pod ścianą nadal jest błona komórkowa. Ściana jej nie zastępuje."
        ],
        ua: [
          [em("Клітинна стінка"), " оточує рослинну клітину ззовні. Надає форму, захищає від пошкодження і від мікроорганізмів."],
          ["Головний складник стінки — ", em("целюлоза"), " — цукор, будівельний матеріал рослин."],
          "Під стінкою й далі є клітинна мембрана. Стінка її не замінює."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie warstwy", ua: "Приклад. Два шари" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na zewnątrz jest grubsza ściana. Daje kształt i chroni."],
            ua: ["Ззовні товстіша стінка. Дає форму і захищає."]
          }
        },
        {
          text: {
            pl: ["Ściana jest zbudowana głównie z celulozy."],
            ua: ["Стінка побудована здебільшого з целюлози."]
          }
        },
        {
          text: {
            pl: ["Pod ścianą zostaje cienka błona. To nadal ona przepuszcza wybrane substancje."],
            ua: ["Під стінкою лишається тонка мембрана. Це й далі вона пропускає вибрані речовини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co ściana?", ua: "Коротке питання. Навіщо стінка?" },
      task: {
        id: "l07-g4",
        type: "single-choice",
        question: {
          pl: "Do czego służy ściana komórkowa?",
          ua: "Для чого служить клітинна стінка?"
        },
        options: [
          { id: "a", label: { pl: "nadaje kształt i chroni komórkę; główny składnik to celuloza", ua: "надає форму і захищає клітину; головний складник — целюлоза" } },
          { id: "b", label: { pl: "zawiera DNA i kieruje komórką zamiast jądra", ua: "містить ДНК і керує клітиною замість ядра" } },
          { id: "c", label: { pl: "zastępuje błonę, więc błony już nie ma", ua: "замінює мембрану, тож мембрани вже немає" } }
        ],
        answer: "a",
        hint: {
          pl: "Ściana jest na zewnątrz: kształt, ochrona, celuloza. DNA zostaje w jądrze.",
          ua: "Стінка є ззовні: форма, захист, целюлоза. ДНК лишається в ядрі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "DNA i sterowanie są w jądrze. Ściana nadaje kształt, chroni i jest zbudowana głównie z celulozy.",
              ua: "ДНК і керування є в ядрі. Стінка надає форму, захищає і побудована здебільшого з целюлози."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana nie kasuje błony. Błona zostaje pod ścianą.",
              ua: "Стінка не скасовує мембрану. Мембрана лишається під стінкою."
            }
          }
        ],
        explanation: {
          pl: "Ściana nadaje kształt i chroni komórkę. Jej główny składnik to celuloza.",
          ua: "Стінка надає форму і захищає клітину. Її головний складник — целюлоза."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ściana zamiast błony", ua: "Типова помилка. Стінка замість мембрани" },
      claim: {
        pl: "„Skoro jest ściana, błona komórkowa znika.”",
        ua: "«Якщо є стінка, клітинна мембрана зникає.»"
      },
      text: {
        pl: [
          "Są obie warstwy.",
          "Ściana jest na zewnątrz i daje kształt oraz ochronę. Błona jest pod nią i dalej oddziela wnętrze od otoczenia."
        ],
        ua: [
          "Є обидва шари.",
          "Стінка ззовні і дає форму та захист. Мембрана під нею і далі відокремлює нутро від оточення."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Źdźbło trawy", ua: "Сам. Стеблина трави" },
      task: {
        id: "l07-p4",
        type: "single-choice",
        question: {
          pl: "W komórce źdźbła trawy ściana jest na zewnątrz. Co jest bezpośrednio pod nią?",
          ua: "У клітині стеблини трави стінка є ззовні. Що є безпосередньо під нею?"
        },
        options: [
          { id: "a", label: { pl: "błona komórkowa", ua: "клітинна мембрана" } },
          { id: "b", label: { pl: "nic — ściana zastąpiła błonę", ua: "нічого — стінка замінила мембрану" } },
          { id: "c", label: { pl: "jądro przyklejone do zewnętrznej strony ściany", ua: "ядро, приклеєне до зовнішнього боку стінки" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ściana jest dodatkiem. Pod nią zostaje błona komórkowa.",
              ua: "Стінка є додатком. Під нею лишається клітинна мембрана."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jądro leży zwykle w środku komórki i trzyma DNA. Pod ścianą jest błona.",
              ua: "Ядро лежить зазвичай усередині клітини і тримає ДНК. Під стінкою є мембрана."
            }
          }
        ],
        explanation: {
          pl: "Pod ścianą komórki roślinnej jest błona komórkowa.",
          ua: "Під стінкою рослинної клітини є клітинна мембрана."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Chloroplast i chlorofil", ua: "Поняття. Хлоропласт і хлорофіл" },
      visual: vizGh("l07-chloroplast.png", {
        alt: { pl: "Owalne zielone chloroplasty", ua: "Овальні зелені хлоропласти" },
        title: { pl: "Tu powstają substancje odżywcze podczas fotosyntezy.", ua: "Тут виникають поживні речовини під час фотосинтезу." },
        prompt: { pl: "Plansza lekcji 7: chloroplast, chlorofil, bez równania." }
      }),
      text: {
        pl: [
          [em("Chloroplast"), " jest zwykle owalny i zielony. Zawiera ", em("chlorofil"), " — zielony barwnik, który pochłania światło."],
          "Zadaniem chloroplastów jest wytwarzanie substancji odżywczych podczas fotosyntezy.",
          "Jak przebiega fotosynteza i jakie ma równanie, poznasz na osobnej lekcji. Dziś równania nie zapisujemy."
        ],
        ua: [
          [em("Хлоропласт"), " зазвичай овальний і зелений. Містить ", em("хлорофіл"), " — зелений барвник, який поглинає світло."],
          "Завдання хлоропластів — виробляти поживні речовини під час фотосинтезу.",
          "Як відбувається фотосинтез і яке в нього рівняння, пізнаєш на окремому уроці. Сьогодні рівняння не записуємо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zielony owal", ua: "Приклад. Зелений овал" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Chloroplast jest owalny i zielony."],
            ua: ["Хлоропласт овальний і зелений."]
          }
        },
        {
          text: {
            pl: ["Zieleń daje chlorofil. On pochłania światło."],
            ua: ["Зелень дає хлорофіл. Він поглинає світло."]
          }
        },
        {
          text: {
            pl: ["Podczas fotosyntezy chloroplast wytwarza substancje odżywcze. Równanie zostawiamy na później."],
            ua: ["Під час фотосинтезу хлоропласт виробляє поживні речовини. Рівняння лишаємо на потім."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co chloroplast?", ua: "Коротке питання. Навіщо хлоропласт?" },
      task: {
        id: "l07-g5",
        type: "single-choice",
        question: {
          pl: "Do czego służą chloroplasty?",
          ua: "Для чого служать хлоропласти?"
        },
        options: [
          { id: "a", label: { pl: "zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy", ua: "містять хлорофіл і виробляють поживні речовини під час фотосинтезу" } },
          { id: "b", label: { pl: "to duży pęcherz z wodą, jak wakuola", ua: "це великий міхур із водою, як вакуоля" } },
          { id: "c", label: { pl: "zapisują cechy w DNA zamiast jądra", ua: "записують риси в ДНК замість ядра" } }
        ],
        answer: "a",
        hint: {
          pl: "Zielony barwnik pochłania światło. Substancje odżywcze powstają podczas fotosyntezy.",
          ua: "Зелений барвник поглинає світло. Поживні речовини виникають під час фотосинтезу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pęcherz z wodą to wakuola. Chloroplast jest zielonym owalem z chlorofilem.",
              ua: "Міхур із водою — це вакуоля. Хлоропласт — зелений овал із хлорофілом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zapis cech jest w DNA w jądrze. Chloroplast wytwarza substancje odżywcze podczas fotosyntezy.",
              ua: "Запис рис є в ДНК у ядрі. Хлоропласт виробляє поживні речовини під час фотосинтезу."
            }
          }
        ],
        explanation: {
          pl: "Chloroplasty zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy.",
          ua: "Хлоропласти містять хлорофіл і виробляють поживні речовини під час фотосинтезу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Chloroplast to wakuola", ua: "Типова помилка. Хлоропласт — це вакуоля" },
      claim: {
        pl: "„Chloroplast i wakuola to ta sama zielona bańka z wodą.”",
        ua: "«Хлоропласт і вакуоля — це та сама зелена бульбашка з водою.»"
      },
      text: {
        pl: [
          "To dwie różne struktury.",
          "Chloroplast jest zielony, ma chlorofil i wytwarza substancje odżywcze. Wakuola jest głównie wodą i pomaga utrzymać jej ilość."
        ],
        ua: [
          "Це дві різні структури.",
          "Хлоропласт зелений, має хлорофіл і виробляє поживні речовини. Вакуоля — здебільшого вода і допомагає тримати її кількість."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dlaczego liść jest zielony", ua: "Сам. Чому листок зелений" },
      task: {
        id: "l07-p5",
        type: "single-choice",
        question: {
          pl: "Liść jest zielony, bo w chloroplastach jest barwnik. Jak się on nazywa i co robi ze światłem?",
          ua: "Листок зелений, бо в хлоропластах є барвник. Як він називається і що робить зі світлом?"
        },
        options: [
          { id: "a", label: { pl: "chlorofil — pochłania światło", ua: "хлорофіл — поглинає світло" } },
          { id: "b", label: { pl: "celuloza — pochłania światło", ua: "целюлоза — поглинає світло" } },
          { id: "c", label: { pl: "wakuola — zapisuje równanie fotosyntezy", ua: "вакуоля — записує рівняння фотосинтезу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Celuloza buduje ścianę. Zielony barwnik, który pochłania światło, to chlorofil w chloroplastach.",
              ua: "Целюлоза будує стінку. Зелений барвник, який поглинає світло, — це хлорофіл у хлоропластах."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wakuola trzyma głównie wodę. Równania dziś nie zapisujemy. Światło pochłania chlorofil.",
              ua: "Вакуоля тримає здебільшого воду. Рівняння сьогодні не записуємо. Світло поглинає хлорофіл."
            }
          }
        ],
        explanation: {
          pl: "Zieleń liścia daje chlorofil. On pochłania światło.",
          ua: "Зелень листка дає хлорофіл. Він поглинає світло."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Duża wakuola", ua: "Поняття. Велика вакуоля" },
      visual: vizGh("l07-wakuola.png", {
        alt: { pl: "Duża wakuola roślinna obok drobnych wakuoli zwierzęcych", ua: "Велика рослинна вакуоля поруч із дрібними тваринними вакуолями" },
        title: { pl: "U rośliny zwykle jedna duża. U zwierzęcia wiele drobnych.", ua: "У рослини зазвичай одна велика. У тварини багато дрібних." },
        prompt: { pl: "Porównanie lekcji 7: wakuola roślinna i zwierzęca." }
      }),
      text: {
        pl: [
          ["W komórce roślinnej ", em("wakuola"), " (wodniczka) ma zwykle kształt dużego pęcherza. Jest wypełniona głównie wodą i pomaga utrzymać właściwą ilość wody w komórce."],
          "W komórce zwierzęcej wakuoli jest wiele i są drobne.",
          "To różnica obok chloroplastów i ściany. Porównanie z bakteriami i grzybami będzie na następnej lekcji."
        ],
        ua: [
          ["У рослинній клітині ", em("вакуоля"), " (водничка) зазвичай має форму великого міхура. Наповнена здебільшого водою і допомагає підтримувати потрібну кількість води в клітині."],
          "У тваринній клітині вакуолей багато і вони дрібні.",
          "Це різниця поруч із хлоропластами і стінкою. Порівняння з бактеріями і грибами буде на наступному уроці."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Jeden pęcherz albo wiele", ua: "Приклад. Один міхур або багато" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Komórka liścia: zwykle jedna duża wakuola, głównie woda."],
            ua: ["Клітина листка: зазвичай одна велика вакуоля, здебільшого вода."]
          }
        },
        {
          text: {
            pl: ["Komórka zwierzęca: wakuoli więcej, każda drobna."],
            ua: ["Тваринна клітина: вакуолей більше, кожна дрібна."]
          }
        },
        {
          text: {
            pl: ["Nie zamieniaj stron. Duża jest u rośliny."],
            ua: ["Не міняй боки. Велика є в рослини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która większa?", ua: "Коротке питання. Яка більша?" },
      task: {
        id: "l07-g6",
        type: "single-choice",
        question: {
          pl: "Jak porównać wakuole rośliny i zwierzęcia?",
          ua: "Як порівняти вакуолі рослини і тварини?"
        },
        options: [
          { id: "a", label: { pl: "roślinna — zwykle jedna, duża, dużo wody; zwierzęca — wiele drobnych", ua: "рослинна — зазвичай одна, велика, багато води; тваринна — багато дрібних" } },
          { id: "b", label: { pl: "zwierzę ma jedną ogromną wakuolę, roślina nie ma żadnej", ua: "тварина має одну величезну вакуолю, рослина не має жодної" } },
          { id: "c", label: { pl: "wakuola roślinna to chloroplast", ua: "рослинна вакуоля — це хлоропласт" } }
        ],
        answer: "a",
        hint: {
          pl: "Duży pęcherz z wodą jest u rośliny. U zwierzęcia pęcherzyki są drobne.",
          ua: "Великий міхур із водою є в рослини. У тварини пухирці дрібні."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Odwrotnie. Duża, zwykle jedna wakuola jest u rośliny. U zwierzęcia jest ich wiele i są drobne.",
              ua: "Навпаки. Велика, зазвичай одна вакуоля є в рослини. У тварини їх багато і вони дрібні."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast jest zielony i robi substancje odżywcze. Wakuola jest głównie wodą.",
              ua: "Хлоропласт зелений і робить поживні речовини. Вакуоля — здебільшого вода."
            }
          }
        ],
        explanation: {
          pl: "U rośliny wakuola jest zwykle jedna i duża. U zwierzęcia wakuole są drobne i jest ich więcej.",
          ua: "У рослини вакуоля зазвичай одна і велика. У тварини вакуолі дрібні і їх більше."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Duża u zwierzęcia", ua: "Типова помилка. Велика в тварини" },
      claim: {
        pl: "„To zwierzę ma jedną wielką wakuolę, a roślina tylko drobne.”",
        ua: "«Це тварина має одну велику вакуолю, а рослина лише дрібні.»"
      },
      text: {
        pl: [
          "Strony są odwrotnie.",
          "Duży pęcherz z wodą jest w komórce roślinnej. W komórce zwierzęcej wakuole są drobne."
        ],
        ua: [
          "Боки навпаки.",
          "Великий міхур із водою є в рослинній клітині. У тваринній клітині вакуолі дрібні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jasna przestrzeń moczarki", ua: "Сам. Світлий простір елодеї" },
      task: {
        id: "l07-p6",
        type: "single-choice",
        question: {
          pl: "W komórce moczarki jasna przestrzeń w środku jest wypełniona głównie wodą i zwykle jest jedna. Co to jest?",
          ua: "У клітині елодеї світлий простір усередині наповнений здебільшого водою і зазвичай він один. Що це?"
        },
        options: [
          { id: "a", label: { pl: "duża wakuola", ua: "велика вакуоля" } },
          { id: "b", label: { pl: "chloroplast", ua: "хлоропласт" } },
          { id: "c", label: { pl: "wiele drobnych wakuoli, jak w komórce zwierzęcej", ua: "багато дрібних вакуолей, як у тваринній клітині" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplast jest zielonym owalem. Jasna przestrzeń z wodą to duża wakuola.",
              ua: "Хлоропласт — зелений овал. Світлий простір із водою — це велика вакуоля."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wiele drobnych wakuoli ma komórka zwierzęca. W moczarce ta przestrzeń jest zwykle jedna i duża.",
              ua: "Багато дрібних вакуолей має тваринна клітина. В елодеї цей простір зазвичай один і великий."
            }
          }
        ],
        explanation: {
          pl: "Jasna, głównie wodna przestrzeń w komórce moczarki to duża wakuola.",
          ua: "Світлий, здебільшого водний простір у клітині елодеї — це велика вакуоля."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą część komórki roślinnej sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку частину рослинної клітини ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Kształt i funkcja", ua: "Перевірка 1. Форма і функція" },
      task: {
        id: "l07-t1",
        type: "single-choice",
        question: {
          pl: "Która para kształt–funkcja jest prawdziwa?",
          ua: "Яка пара форма–функція правдива?"
        },
        options: [
          { id: "a", label: { pl: "komórki ułożone jak rury — transport wody i soli", ua: "клітини, складені як труби — транспорт води і солей" } },
          { id: "b", label: { pl: "włośniki — wymiana gazów w liściu", ua: "кореневі волоски — обмін газів у листку" } },
          { id: "c", label: { pl: "komórki szparkowe — pobieranie wody z gleby", ua: "продихові клітини — вбирання води з ґрунту" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Włośniki są na korzeniu i pomagają pobierać wodę oraz sole. Gazy w liściu wymienią szparki.",
              ua: "Кореневі волоски є на корені і допомагають брати воду та солі. Гази в листку обмінюють продихи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Komórki szparkowe wymieniają gazy. Wodę z gleby pobierają włośniki.",
              ua: "Продихові клітини обмінюють гази. Воду з ґрунту беруть кореневі волоски."
            }
          }
        ],
        explanation: {
          pl: "Komórki jak rury transportują wodę i sole. Szparki wymieniają gazy, włośniki pobierają wodę.",
          ua: "Клітини як труби транспортують воду і солі. Продихи обмінюють гази, волоски беруть воду."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Lista elementów", ua: "Перевірка 2. Список елементів" },
      task: {
        id: "l07-t2",
        type: "single-choice",
        question: {
          pl: "Która lista elementów komórki roślinnej jest kompletna według tej lekcji?",
          ua: "Який список елементів рослинної клітини повний згідно з цим уроком?"
        },
        options: [
          { id: "a", label: { pl: "błona, cytozol, jądro, wakuola, mitochondria, rybosomy, chloroplasty, ściana komórkowa", ua: "мембрана, цитозоль, ядро, вакуоля, мітохондрії, рибосоми, хлоропласти, клітинна стінка" } },
          { id: "b", label: { pl: "tylko ściana i chloroplast, bez błony i bez jądra", ua: "лише стінка і хлоропласт, без мембрани і без ядра" } },
          { id: "c", label: { pl: "błona, cytozol, jądro, drobne wakuole, mitochondria, rybosomy — i nic roślinnego", ua: "мембрана, цитозоль, ядро, дрібні вакуолі, мітохондрії, рибосоми — і нічого рослинного" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ściana i chloroplast są dodatkami. Błona i jądro w komórce roślinnej zostają.",
              ua: "Стінка і хлоропласт є додатками. Мембрана і ядро в рослинній клітині лишаються."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To lista komórki zwierzęcej. Roślinie brakuje na niej chloroplastów, ściany i zwykle jednej dużej wakuoli.",
              ua: "Це список тваринної клітини. Рослині бракує на ньому хлоропластів, стінки і зазвичай однієї великої вакуолі."
            }
          }
        ],
        explanation: {
          pl: "Osiem pozycji: wspólne ze zwierzęciem plus chloroplasty i ściana, oraz zwykle duża wakuola.",
          ua: "Вісім позицій: спільні з твариною плюс хлоропласти і стінка, а також зазвичай велика вакуоля."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Ściana komórkowa", ua: "Перевірка 3. Клітинна стінка" },
      task: {
        id: "l07-t3",
        type: "single-choice",
        question: {
          pl: "Które zdanie o ścianie komórkowej jest prawdziwe?",
          ua: "Яке речення про клітинну стінку правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Nadaje kształt, chroni przed uszkodzeniem i drobnoustrojami; główny składnik to celuloza; pod ścianą jest błona.", ua: "Надає форму, захищає від пошкодження і мікроорганізмів; головний складник — целюлоза; під стінкою є мембрана." } },
          { id: "b", label: { pl: "To centrum energetyczne, jak mitochondrium.", ua: "Це енергетичний центр, як мітохондрія." } },
          { id: "c", label: { pl: "Komórka zwierzęca ma grubszą ścianę z celulozy niż roślinna.", ua: "Тваринна клітина має товстішу стінку з целюлози, ніж рослинна." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Energię daje mitochondrium. Ściana nadaje kształt, chroni i jest z celulozy.",
              ua: "Енергію дає мітохондрія. Стінка надає форму, захищає і складається з целюлози."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściany z celulozy nie ma komórka zwierzęca. Ma ją komórka roślinna, a pod ścianą zostaje błona.",
              ua: "Стінки з целюлози немає в тваринної клітини. Її має рослинна клітина, а під стінкою лишається мембрана."
            }
          }
        ],
        explanation: {
          pl: "Ściana daje kształt i ochronę, jest głównie z celulozy, a błona zostaje pod nią.",
          ua: "Стінка дає форму і захист, складається здебільшого з целюлози, а мембрана лишається під нею."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Chloroplasty", ua: "Перевірка 4. Хлоропласти" },
      task: {
        id: "l07-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o chloroplastach jest poprawne?",
          ua: "Яке речення про хлоропласти правильне?"
        },
        options: [
          { id: "a", label: { pl: "Zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy.", ua: "Містять хлорофіл і виробляють поживні речовини під час фотосинтезу." } },
          { id: "b", label: { pl: "Są w komórce nabłonka jamy ustnej.", ua: "Є в клітині епітелію ротової порожнини." } },
          { id: "c", label: { pl: "To to samo co wakuola wypełniona wodą.", ua: "Це те саме, що вакуоля, наповнена водою." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nabłonek jamy ustnej jest komórką zwierzęcą. Chloroplastów tam nie ma.",
              ua: "Епітелій ротової порожнини — це тваринна клітина. Хлоропластів там немає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wakuola trzyma głównie wodę. Chloroplast ma chlorofil i wytwarza substancje odżywcze.",
              ua: "Вакуоля тримає здебільшого воду. Хлоропласт має хлорофіл і виробляє поживні речовини."
            }
          }
        ],
        explanation: {
          pl: "Chloroplasty zawierają chlorofil i wytwarzają substancje odżywcze podczas fotosyntezy. Równania dziś nie ma.",
          ua: "Хлоропласти містять хлорофіл і виробляють поживні речовини під час фотосинтезу. Рівняння сьогодні немає."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wakuola", ua: "Перевірка 5. Вакуоля" },
      task: {
        id: "l07-t5",
        type: "single-choice",
        question: {
          pl: "Czym wakuola komórki roślinnej różni się od wakuoli komórki zwierzęcej?",
          ua: "Чим вакуоля рослинної клітини відрізняється від вакуолі тваринної клітини?"
        },
        options: [
          { id: "a", label: { pl: "U rośliny jest zwykle jedna, duża i wypełniona głównie wodą. U zwierzęcia jest ich wiele i są drobne.", ua: "У рослини вона зазвичай одна, велика і наповнена здебільшого водою. У тварини їх багато і вони дрібні." } },
          { id: "b", label: { pl: "U zwierzęcia jest jedna wielka, u rośliny same drobne.", ua: "У тварини одна велика, у рослини самі дрібні." } },
          { id: "c", label: { pl: "Wakuola roślinna jest ścianą z celulozy.", ua: "Рослинна вакуоля є стінкою з целюлози." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Duża jest u rośliny. Drobne i liczne są u zwierzęcia.",
              ua: "Велика є в рослини. Дрібні і численні є в тварини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana jest z celulozy i leży na zewnątrz. Wakuola jest w środku i trzyma głównie wodę.",
              ua: "Стінка з целюлози і лежить ззовні. Вакуоля є всередині і тримає здебільшого воду."
            }
          }
        ],
        explanation: {
          pl: "Roślinna wakuola jest zwykle jedna i duża. Zwierzęce są drobne i jest ich więcej.",
          ua: "Рослинна вакуоля зазвичай одна і велика. Тваринні дрібні і їх більше."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l07-schemat.png", {
        alt: { pl: "Schemat komórki roślinnej", ua: "Схема рослинної клітини" },
        title: { pl: "Ściana i chloroplasty odróżniają roślinę. Wakuola jest zwykle duża.", ua: "Стінка і хлоропласти відрізняють рослину. Вакуоля зазвичай велика." },
        prompt: { pl: "Ten sam schemat ośmiu elementów komórki roślinnej." }
      }),
      text: {
        pl: [
          "Kształt służy funkcji: szparki wymieniają gazy, włośniki pobierają wodę i sole, rury transportują wodę.",
          "Komórka roślinna ma elementy zwierzęce plus chloroplasty i ścianę. Błona zostaje.",
          "Na preparacie moczarki podpisz co najmniej chloroplasty, ścianę i jądro. Zaczynasz od najmniejszego powiększenia.",
          "Ściana: kształt i ochrona, celuloza. Pod nią jest błona.",
          "Chlorofil w chloroplastach pochłania światło. Substancje odżywcze powstają podczas fotosyntezy. Równania dziś nie ma.",
          "Wakuola roślinna jest zwykle jedna i duża. Zwierzęce są drobne."
        ],
        ua: [
          "Форма служить функції: продихи обмінюють гази, волоски беруть воду і солі, труби транспортують воду.",
          "Рослинна клітина має тваринні елементи плюс хлоропласти і стінку. Мембрана лишається.",
          "На препараті елодеї підпиши щонайменше хлоропласти, стінку і ядро. Починаєш із найменшого збільшення.",
          "Стінка: форма і захист, целюлоза. Під нею є мембрана.",
          "Хлорофіл у хлоропластах поглинає світло. Поживні речовини виникають під час фотосинтезу. Рівняння сьогодні немає.",
          "Рослинна вакуоля зазвичай одна і велика. Тваринні дрібні."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Podam kształty komórek roślinnych i powiążę je z funkcją.", ua: "Назву форми рослинних клітин і пов’яжу їх із функцією." },
        { pl: "Wymienię elementy komórki roślinnej.", ua: "Назву елементи рослинної клітини." },
        { pl: "Wyjaśnię, do czego służy ściana komórkowa.", ua: "Поясню, для чого служить клітинна стінка." },
        { pl: "Wyjaśnię, do czego służą chloroplasty, bez równania fotosyntezy.", ua: "Поясню, для чого служать хлоропласти, без рівняння фотосинтезу." },
        { pl: "Porównam dużą wakuolę roślinną z drobnymi wakuolami zwierzęcymi.", ua: "Порівняю велику рослинну вакуолю з дрібними тваринними вакуолями." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
