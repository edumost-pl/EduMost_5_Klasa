function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L14_Czynnosci_zyciowe_organizmow/images/";
var BIO_IMG_L01 = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L01_Biologia_jako_nauka/images/";

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

function vizL01(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG_L01 + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: siedem czynności razem", ua: "Місія: сім функцій разом" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Ta sama siódemka z lekcji 1.", ua: "Та сама сімка з уроку 1." },
        prompt: { pl: "Infografika lekcji 1: siedem czynności życiowych." }
      }),
      text: {
        pl: [
          "To lekcja 14: czynności życiowe organizmów. Na początku roku poznałeś siedem czynności. Potem była komórka, fotosynteza i mitochondrium.",
          "Dziś nic nie dodajemy z działu o wirusach i królestwach. Składasz w całość to, co już umiesz.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 14: життєві функції організмів. На початку року ти пізнав сім функцій. Потім була клітина, фотосинтез і мітохондрія.",
          "Сьогодні нічого не додаємо з розділу про віруси і царства. Складаєш докупи те, що вже вмієш.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "czynności życiowe", ua: "життєві функції — сім процесів організму" },
        { pl: "odżywianie się", ua: "живлення — саможивлення або гетеротрофне живлення" },
        { pl: "oddychanie", ua: "дихання — обмін газів і енергія в клітині" },
        { pl: "wydalanie", ua: "виділення — зайві речовини назовні" },
        { pl: "reakcja na bodźce", ua: "реакція на подразники — відповідь на зміну" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Siedem czynności", ua: "Поняття. Сім функцій" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Lista siedmiu czynności życiowych", ua: "Список семи життєвих функцій" },
        title: { pl: "Siedem. Nie jedna.", ua: "Сім. Не одна." },
        prompt: { pl: "Ta sama infografika siedmiu czynności." }
      }),
      text: {
        pl: [
          ["1. ", em("odżywianie się"), " — 2. ", em("oddychanie"), " — 3. ", em("wydalanie"), " — 4. ", em("ruch"), " — 5. ", em("wzrost i rozwój"), " — 6. ", em("rozmnażanie się"), " — 7. ", em("reakcja na bodźce"), "."],
          "Samochód się rusza, ale nie odżywia się jak organizm i nie jest zbudowany z komórek. Sam ruch nie wystarcza, żeby uznać coś za żywe."
        ],
        ua: [
          ["1. ", em("живлення"), " — 2. ", em("дихання"), " — 3. ", em("виділення"), " — 4. ", em("рух"), " — 5. ", em("ріст і розвиток"), " — 6. ", em("розмноження"), " — 7. ", em("реакція на подразники"), "."],
          "Автомобіль рухається, але не живиться як організм і не збудований із клітин. Самого руху не досить, щоб визнати щось живим."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pies i samochód", ua: "Приклад. Пес і автомобіль" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pies je, oddycha, wydala, rusza się, rośnie, może mieć szczenięta i reaguje na dźwięk."],
            ua: ["Пес їсть, дихає, виділяє, рухається, росте, може мати цуценят і реагує на звук."]
          }
        },
        {
          text: {
            pl: ["To siedem czynności życiowych, nie jedna sztuczka."],
            ua: ["Це сім життєвих функцій, не один трюк."]
          }
        },
        {
          text: {
            pl: ["Samochód jedzie. Nie je, nie jest z komórek i nie rośnie. Ruch kół nie jest życiem."],
            ua: ["Автомобіль їде. Не їсть, не є з клітин і не росте. Рух коліс не є життям."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Który zestaw?", ua: "Коротке питання. Який набір?" },
      task: {
        id: "l14-g1",
        type: "single-choice",
        question: {
          pl: "Który zestaw to czynności życiowe?",
          ua: "Який набір — це життєві функції?"
        },
        options: [
          { id: "a", label: { pl: "odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce", ua: "живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники" } },
          { id: "b", label: { pl: "tylko fotosynteza", ua: "лише фотосинтез" } },
          { id: "c", label: { pl: "jazda na kołach", ua: "їзда на колесах" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj siedmiu czynności z lekcji 1, nie jednego procesu i nie kół.",
          ua: "Шукай сім функцій з уроку 1, не один процес і не колеса."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza jest sposobem odżywiania rośliny. Czynności życiowych jest siedem.",
              ua: "Фотосинтез є способом живлення рослини. Життєвих функцій є сім."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jazda na kołach to ruch maszyny. Organizm wykonuje siedem czynności życiowych.",
              ua: "Їзда на колесах — це рух машини. Організм виконує сім життєвих функцій."
            }
          }
        ],
        explanation: {
          pl: "Czynności życiowych jest siedem, od odżywiania się do reakcji na bodźce.",
          ua: "Життєвих функцій є сім, від живлення до реакції на подразники."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Samochód żyje", ua: "Типова помилка. Автомобіль живе" },
      claim: {
        pl: "„Samochód żyje, bo się rusza.”",
        ua: "«Автомобіль живе, бо рухається.»"
      },
      text: {
        pl: [
          "Ruch jest jedną z siedmiu czynności.",
          "Samochód nie odżywia się, nie oddycha i nie jest zbudowany z komórek."
        ],
        ua: [
          "Рух є однією з семи функцій.",
          "Автомобіль не живиться, не дихає і не збудований із клітин."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Drzewo nie biega", ua: "Сам. Дерево не бігає" },
      task: {
        id: "l14-p1",
        type: "single-choice",
        question: {
          pl: "Drzewo nie biega. Czy przez to nie jest organizmem?",
          ua: "Дерево не бігає. Чи через це воно не є організмом?"
        },
        options: [
          { id: "a", label: { pl: "jest organizmem: ma komórki i wykonuje czynności życiowe", ua: "є організмом: має клітини і виконує життєві функції" } },
          { id: "b", label: { pl: "nie, bo jedyną czynnością życiową jest bieg", ua: "ні, бо єдиною життєвою функцією є біг" } },
          { id: "c", label: { pl: "tak, drzewo jest samochodem bez kół", ua: "так, дерево є автомобілем без коліс" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bieg nie jest jedyną czynnością. Drzewo się odżywia, oddycha, rośnie i reaguje, na przykład liśćmi ku światłu.",
              ua: "Біг не є єдиною функцією. Дерево живиться, дихає, росте і реагує, наприклад листками до світла."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Drzewo nie jest maszyną. Ma komórki i czynności życiowe, choć nie biega.",
              ua: "Дерево не є машиною. Має клітини і життєві функції, хоч не бігає."
            }
          }
        ],
        explanation: {
          pl: "Drzewo jest organizmem. Brak biegu nie skreśla pozostałych czynności.",
          ua: "Дерево є організмом. Брак бігу не скасовує решти функцій."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Odżywianie się", ua: "Поняття. Живлення" },
      visual: vizGh("l14-odzywianie.png", {
        alt: { pl: "Samożywność i cudzożywność jako odżywianie", ua: "Саможивлення і гетеротрофне живлення як живлення" },
        title: { pl: "Jedna czynność. Dwa sposoby.", ua: "Одна функція. Два способи." },
        prompt: { pl: "Plansza lekcji 14: samożywność i cudzożywność." }
      }),
      text: {
        pl: [
          [em("Odżywianie się"), " znaczy: organizm wytwarza albo pobiera substancje potrzebne do życia."],
          [em("Samożywność"), " — sam wytwarza pokarm, na przykład w fotosyntezie w chloroplastach."],
          [em("Cudzożywność"), " — bierze gotowy pokarm: diety zwierząt, saprobiont, pasożyt."],
          "Oba sposoby to odżywianie. Nie są ósmą czynnością obok siódemki."
        ],
        ua: [
          [em("Живлення"), " означає: організм виробляє або бере речовини, потрібні для життя."],
          [em("Саможивлення"), " — сам виробляє поживу, наприклад у фотосинтезі в хлоропластах."],
          [em("Гетеротрофне живлення"), " — бере готову поживу: дієти тварин, сапробіонт, паразит."],
          "Обидва способи — це живлення. Вони не є восьмою функцією поруч із сімкою."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Liść i zając", ua: "Приклад. Листок і заєць" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Liść sam robi cukier. To samożywność."],
            ua: ["Листок сам робить цукор. Це саможивлення."]
          }
        },
        {
          text: {
            pl: ["Zając zjada liść. To cudzożywność."],
            ua: ["Заєць з’їдає листок. Це гетеротрофне живлення."]
          }
        },
        {
          text: {
            pl: ["Oba zdobywają substancje do życia. To jedna czynność: odżywianie się."],
            ua: ["Обидва здобувають речовини для життя. Це одна функція: живлення."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna czy dwie?", ua: "Коротке питання. Одна чи дві?" },
      task: {
        id: "l14-g2",
        type: "single-choice",
        question: {
          pl: "Jak odżywianie łączy samożywność i cudzożywność?",
          ua: "Як живлення поєднує саможивлення і гетеротрофне живлення?"
        },
        options: [
          { id: "a", label: { pl: "to dwa sposoby tej samej czynności: zdobywania substancji do życia", ua: "це два способи тієї самої функції: здобування речовин для життя" } },
          { id: "b", label: { pl: "samożywność to wydalanie, cudzożywność to ruch", ua: "саможивлення — це виділення, гетеротрофне живлення — це рух" } },
          { id: "c", label: { pl: "to ósma i dziewiąta czynność, obok odżywiania", ua: "це восьма і дев’ята функції, поруч із живленням" } }
        ],
        answer: "a",
        hint: {
          pl: "Oba dotyczą pokarmu. Różni je tylko to, skąd pokarm jest.",
          ua: "Обидва стосуються поживи. Їх різнить лише те, звідки пожива."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wydalanie usuwa zbędne substancje, ruch przemieszcza ciało. Samożywność i cudzożywność są sposobami odżywiania.",
              ua: "Виділення виводить зайві речовини, рух переміщує тіло. Саможивлення і гетеротрофне живлення є способами живлення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nie dokładamy nowych numerów. Oba sposoby mieszczą się w odżywianiu się.",
              ua: "Не додаємо нових номерів. Обидва способи вміщаються в живленні."
            }
          }
        ],
        explanation: {
          pl: "Samożywność i cudzożywność to dwa sposoby odżywiania się.",
          ua: "Саможивлення і гетеротрофне живлення — це два способи живлення."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ósma czynność", ua: "Типова помилка. Восьма функція" },
      claim: {
        pl: "„Samożywność jest ósmą czynnością, obok odżywiania.”",
        ua: "«Саможивлення є восьмою функцією, поруч із живленням.»"
      },
      text: {
        pl: [
          "Samożywność jest sposobem odżywiania się.",
          "Lista z lekcji 1 zostaje przy siedmiu."
        ],
        ua: [
          "Саможивлення є способом живлення.",
          "Список з уроку 1 лишається при семи."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Grzyb na pniu", ua: "Сам. Гриб на пні" },
      task: {
        id: "l14-p2",
        type: "single-choice",
        question: {
          pl: "Grzyb na pniu bierze pokarm z martwego drewna. Do której czynności to należy?",
          ua: "Гриб на пні бере поживу з мертвої деревини. До якої функції це належить?"
        },
        options: [
          { id: "a", label: { pl: "do odżywiania się — to cudzożywność", ua: "до живлення — це гетеротрофне живлення" } },
          { id: "b", label: { pl: "do oddychania w chloroplaście", ua: "до дихання в хлоропласті" } },
          { id: "c", label: { pl: "to ósma czynność, obok odżywiania", ua: "це восьма функція, поруч із живленням" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Grzyb nie ma chloroplastów, a pokarm ze szczątków nie jest oddychaniem. To odżywianie się.",
              ua: "Гриб не має хлоропластів, а пожива з решток не є диханням. Це живлення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Saprobiont bierze gotowy pokarm. To wariant odżywiania, nie nowa czynność.",
              ua: "Сапробіонт бере готову поживу. Це варіант живлення, не нова функція."
            }
          }
        ],
        explanation: {
          pl: "Grzyb na pniu odżywia się cudzożywnie.",
          ua: "Гриб на пні живиться гетеротрофно."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Oddychanie", ua: "Поняття. Дихання" },
      visual: vizGh("l14-oddychanie.png", {
        alt: { pl: "Wymiana gazów i energia w mitochondrium", ua: "Обмін газів і енергія в мітохондрії" },
        title: { pl: "Najpierw tlen. Potem energia.", ua: "Спочатку кисень. Потім енергія." },
        prompt: { pl: "Plansza lekcji 14: dwa poziomy oddychania." }
      }),
      text: {
        pl: [
          "Na lekcji 1 oddychanie było wymianą gazów. To nadal prawda.",
          "Na lekcji 12 doszło drugie piętro: w mitochondrium cukier i tlen dają energię, dwutlenek węgla i wodę.",
          "Bez wymiany gazów komórka nie dostaje tlenu. Bez oddychania tlenowego tlen w płucach nie daje energii. Oba piętra należą do oddychania.",
          "Gdy tlenu chwilowo brakuje, bywa fermentacja i energii jest mniej. To nadal ta sama czynność, nie ósma."
        ],
        ua: [
          "На уроці 1 дихання було обміном газів. Це й далі правда.",
          "На уроці 12 додався другий поверх: у мітохондрії цукор і кисень дають енергію, вуглекислий газ і воду.",
          "Без обміну газів клітина не отримує кисню. Без аеробного дихання кисень у легенях не дає енергії. Обидва поверхи належать до дихання.",
          "Коли кисню на мить бракує, буває бродіння і енергії менше. Це й далі та сама функція, не восьма."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Bieg jeszcze raz", ua: "Приклад. Біг ще раз" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Klatka piersiowa wpuszcza tlen. To wymiana gazów."],
            ua: ["Грудна клітка впускає кисень. Це обмін газів."]
          }
        },
        {
          text: {
            pl: ["Mitochondrium w komórce mięśnia uwalnia energię z cukru."],
            ua: ["Мітохондрія в клітині м’яза вивільняє енергію з цукру."]
          }
        },
        {
          text: {
            pl: ["Jedno bez drugiego nie napędza biegu. To jedna czynność: oddychanie."],
            ua: ["Одне без другого не рухає біг. Це одна функція: дихання."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa piętra", ua: "Коротке питання. Два поверхи" },
      task: {
        id: "l14-g3",
        type: "single-choice",
        question: {
          pl: "Które zdanie łączy oba poziomy oddychania?",
          ua: "Яке речення поєднує обидва рівні дихання?"
        },
        options: [
          { id: "a", label: { pl: "wymiana gazów dostarcza tlen; mitochondrium uwalnia energię z cukru", ua: "обмін газів постачає кисень; мітохондрія вивільняє енергію з цукру" } },
          { id: "b", label: { pl: "oddychanie to tylko chlorofil w liściu", ua: "дихання — це лише хлорофіл у листку" } },
          { id: "c", label: { pl: "mitochondrium jest szparką i niczym więcej", ua: "мітохондрія є продихом і нічим більше" } }
        ],
        answer: "a",
        hint: {
          pl: "Jedno piętro wpuszcza tlen. Drugie robi z cukru energię.",
          ua: "Один поверх впускає кисень. Другий робить із цукру енергію."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chlorofil służy fotosyntezie. Oddychanie to wymiana gazów i energia w mitochondrium.",
              ua: "Хлорофіл служить фотосинтезу. Дихання — це обмін газів і енергія в мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparka wymienia gazy w liściu. Mitochondrium uwalnia energię. To dwa miejsca jednej czynności.",
              ua: "Продих обмінює гази в листку. Мітохондрія вивільняє енергію. Це два місця однієї функції."
            }
          }
        ],
        explanation: {
          pl: "Wymiana gazów dostarcza tlen. Mitochondrium uwalnia energię.",
          ua: "Обмін газів постачає кисень. Мітохондрія вивільняє енергію."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tylko płuca", ua: "Типова помилка. Лише легені" },
      claim: {
        pl: "„Oddychanie kończy się na płucach. Mitochondrium nie należy do tej czynności.”",
        ua: "«Дихання закінчується на легенях. Мітохондрія не належить до цієї функції.»"
      },
      text: {
        pl: [
          "Płuca dostarczają tlen. To pierwsze piętro.",
          "Energia powstaje w mitochondrium. Bez tego piętra tlen nie napędza komórek."
        ],
        ua: [
          "Легені постачають кисень. Це перший поверх.",
          "Енергія виникає в мітохондрії. Без цього поверху кисень не живить клітини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Skrzela ryby", ua: "Сам. Зябра риби" },
      task: {
        id: "l14-p3",
        type: "single-choice",
        question: {
          pl: "Skrzela ryby pobierają tlen z wody. Gdzie potem powstaje energia z cukru?",
          ua: "Зябра риби беруть кисень із води. Де потім виникає енергія з цукру?"
        },
        options: [
          { id: "a", label: { pl: "w mitochondrium", ua: "у мітохондрії" } },
          { id: "b", label: { pl: "w chloroplaście skrzeli", ua: "у хлоропласті зябер" } },
          { id: "c", label: { pl: "w ścianie komórkowej", ua: "у клітинній стінці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzela wymieniają gazy. Chloroplast składa cukier u rośliny. Energię z cukru uwalnia mitochondrium.",
              ua: "Зябра обмінюють гази. Хлоропласт складає цукор у рослини. Енергію з цукру вивільняє мітохондрія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana nie uwalnia energii. Po wymianie gazów energia z cukru powstaje w mitochondrium.",
              ua: "Стінка не вивільняє енергію. Після обміну газів енергія з цукру виникає в мітохондрії."
            }
          }
        ],
        explanation: {
          pl: "Skrzela dostarczają tlen. Energia z cukru powstaje w mitochondrium.",
          ua: "Зябра постачають кисень. Енергія з цукру виникає в мітохондрії."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Roślina i zwierzę", ua: "Поняття. Рослина і тварина" },
      visual: vizGh("l14-zaleznosc.png", {
        alt: { pl: "Tlen, dwutlenek węgla i pokarm między rośliną a zwierzęciem", ua: "Кисень, вуглекислий газ і пожива між рослиною і твариною" },
        title: { pl: "Pokarm i tlen łączą jednych z drugimi.", ua: "Пожива і кисень з’єднують одних з одними." },
        prompt: { pl: "Schemat lekcji 14: roślina i zwierzę." }
      }),
      text: {
        pl: [
          "Roślina w fotosyntezie daje cukier i tlen. Sama też oddycha w mitochondriach.",
          "Zwierzę je gotowy pokarm, który często zaczyna się od rośliny, i korzysta z tlenu. Ten tlen w dużej mierze pochodzi z fotosyntezy.",
          "Dwutlenek węgla z oddychania zwierzęcia i rośliny może znów wejść do liścia. Na klasę 5 wystarczy: pokarm i tlen łączą rośliny ze zwierzętami."
        ],
        ua: [
          "Рослина у фотосинтезі дає цукор і кисень. Сама теж дихає в мітохондріях.",
          "Тварина їсть готову поживу, яка часто починається від рослини, і користується киснем. Цей кисень значною мірою походить із фотосинтезу.",
          "Вуглекислий газ із дихання тварини і рослини може знову ввійти в листок. Для 5 класу досить: пожива і кисень з’єднують рослини з тваринами."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Łąka", ua: "Приклад. Лука" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trawa robi cukier i oddaje tlen."],
            ua: ["Трава робить цукор і віддає кисень."]
          }
        },
        {
          text: {
            pl: ["Zając zjada trawę i oddycha tym tlenem."],
            ua: ["Заєць з’їдає траву і дихає цим киснем."]
          }
        },
        {
          text: {
            pl: ["Dwutlenek węgla z zająca może wrócić do liścia. Trawa przy tym też oddycha."],
            ua: ["Вуглекислий газ із зайця може повернутися в листок. Трава при цьому теж дихає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co łączy?", ua: "Коротке питання. Що з’єднує?" },
      task: {
        id: "l14-g4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o zależności roślin i zwierząt jest prawdziwe?",
          ua: "Яке речення про залежність рослин і тварин правдиве?"
        },
        options: [
          { id: "a", label: { pl: "zwierzę korzysta z tlenu fotosyntezy i z pokarmu, który zaczyna się od rośliny", ua: "тварина користується киснем фотосинтезу і поживою, яка починається від рослини" } },
          { id: "b", label: { pl: "roślina nigdy nie oddycha, więc zwierzę jest od niej niezależne", ua: "рослина ніколи не дихає, тож тварина від неї незалежна" } },
          { id: "c", label: { pl: "zwierzę ma chloroplasty w mięśniach i samo robi cukier", ua: "тварина має хлоропласти в м’язах і сама робить цукор" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj tlenu i pokarmu od rośliny. Zwierzę nie dostaje chloroplastów.",
          ua: "Шукай кисень і поживу від рослини. Тварина не отримує хлоропластів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Roślina oddycha w mitochondriach. Zwierzę zależy od jej tlenu i pokarmu.",
              ua: "Рослина дихає в мітохондріях. Тварина залежить від її кисню і поживи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mięśnie nie mają chloroplastów. Cukier dla zwierzęcia zaczyna się od rośliny.",
              ua: "М’язи не мають хлоропластів. Цукор для тварини починається від рослини."
            }
          }
        ],
        explanation: {
          pl: "Zwierzę korzysta z tlenu fotosyntezy i z pokarmu, który zaczyna się od rośliny.",
          ua: "Тварина користується киснем фотосинтезу і поживою, яка починається від рослини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Roślina nie oddycha", ua: "Типова помилка. Рослина не дихає" },
      claim: {
        pl: "„Roślina tylko karmi i nie ma mitochondriów.”",
        ua: "«Рослина лише годує і не має мітохондрій.»"
      },
      text: {
        pl: [
          "Roślina ma mitochondria i oddycha przez całą dobę.",
          "Fotosynteza dokłada cukier i tlen. Nie wyłącza oddychania."
        ],
        ua: [
          "Рослина має мітохондрії і дихає цілу добу.",
          "Фотосинтез додає цукор і кисень. Не вимикає дихання."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Gaz wraca do liścia", ua: "Сам. Газ повертається в листок" },
      task: {
        id: "l14-p4",
        type: "single-choice",
        question: {
          pl: "Co może stać się z dwutlenkiem węgla z oddychania zająca?",
          ua: "Що може статися з вуглекислим газом із дихання зайця?"
        },
        options: [
          { id: "a", label: { pl: "może znów wejść do liścia", ua: "може знову ввійти в листок" } },
          { id: "b", label: { pl: "zamienia się w chlorofil w mięśniu zająca", ua: "перетворюється на хлорофіл у м’язі зайця" } },
          { id: "c", label: { pl: "zastępuje wszystkie siedem czynności", ua: "замінює всі сім функцій" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mięsień zająca nie robi chlorofilu. Dwutlenek węgla może wrócić do liścia.",
              ua: "М’яз зайця не робить хлорофіл. Вуглекислий газ може повернутися в листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jeden gaz nie zastępuje siedmiu czynności. Może wejść do liścia jako surowiec fotosyntezy.",
              ua: "Один газ не замінює семи функцій. Може ввійти в листок як сировина фотосинтезу."
            }
          }
        ],
        explanation: {
          pl: "Dwutlenek węgla z oddychania może znów wejść do liścia.",
          ua: "Вуглекислий газ із дихання може знову ввійти в листок."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wszystkie siedem", ua: "Поняття. Усі сім" },
      visual: vizGh("l14-pozostale.png", {
        alt: { pl: "Wydalanie, ruch, wzrost, rozmnażanie i reakcja na bodźce", ua: "Виділення, рух, ріст, розмноження і реакція на подразники" },
        title: { pl: "Jedzenie i oddychanie nie wystarczają.", ua: "Їжі і дихання не досить." },
        prompt: { pl: "Plansza lekcji 14: pięć pozostałych czynności." }
      }),
      text: {
        pl: [
          [em("Wydalanie"), " usuwa zbędne i szkodliwe substancje, na przykład z moczem i potem. Woda w tym pomaga — to ślad lekcji 4."],
          "Ruch, wzrost i rozwój, rozmnażanie się oraz reakcja na bodźce też są potrzebne. Bez nich organizm nie działa jako całość.",
          "Te czynności dzieją się w komórkach albo dzięki współpracy komórek. Jedna nie zastępuje reszty."
        ],
        ua: [
          [em("Виділення"), " виводить зайві і шкідливі речовини, наприклад із сечею і потом. Вода в цьому допомагає — це слід уроку 4."],
          "Рух, ріст і розвиток, розмноження та реакція на подразники теж потрібні. Без них організм не діє як ціле.",
          "Ці функції відбуваються в клітинах або завдяки співпраці клітин. Одна не замінює решти."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Czego brakuje", ua: "Приклад. Чого бракує" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Bez odżywiania nie ma paliwa."],
            ua: ["Без живлення немає палива."]
          }
        },
        {
          text: {
            pl: ["Bez oddychania nie ma energii z tego paliwa."],
            ua: ["Без дихання немає енергії з цього палива."]
          }
        },
        {
          text: {
            pl: ["Bez wydalania zbędne substancje zostają w organizmie. Reszta czynności też nie jest zbędna."],
            ua: ["Без виділення зайві речовини лишаються в організмі. Решта функцій теж не є зайвою."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dlaczego wszystkie?", ua: "Коротке питання. Чому всі?" },
      task: {
        id: "l14-g5",
        type: "single-choice",
        question: {
          pl: "Dlaczego organizm potrzebuje wszystkich czynności życiowych?",
          ua: "Чому організм потребує всіх життєвих функцій?"
        },
        options: [
          { id: "a", label: { pl: "każda jest potrzebna do życia; jedna nie zastępuje reszty", ua: "кожна потрібна для життя; одна не замінює решти" } },
          { id: "b", label: { pl: "wystarczy sam ruch, jak w samochodzie", ua: "достатньо самого руху, як в автомобілі" } },
          { id: "c", label: { pl: "wystarczy samo odżywianie, reszta jest ozdobą", ua: "достатньо самого живлення, решта є оздобою" } }
        ],
        answer: "a",
        hint: {
          pl: "Pomyśl, co zostaje, gdy zabraknie energii albo wydalania.",
          ua: "Подумай, що лишається, коли бракує енергії або виділення."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sam ruch nie robi organizmu. Potrzebne są też odżywianie, oddychanie, wydalanie i pozostałe czynności.",
              ua: "Сам рух не робить організму. Потрібні також живлення, дихання, виділення і решта функцій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odżywianie daje substancje, ale bez oddychania nie ma z nich energii, a bez wydalania zbędne substancje zostają.",
              ua: "Живлення дає речовини, але без дихання немає з них енергії, а без виділення зайві речовини лишаються."
            }
          }
        ],
        explanation: {
          pl: "Każda czynność jest potrzebna. Jedna nie zastępuje reszty.",
          ua: "Кожна функція потрібна. Одна не замінює решти."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wystarczy jeść", ua: "Типова помилка. Досить їсти" },
      claim: {
        pl: "„Kto je i oddycha, może pominąć wydalanie.”",
        ua: "«Хто їсть і дихає, може пропустити виділення.»"
      },
      text: {
        pl: [
          "Wydalanie usuwa zbędne i szkodliwe substancje.",
          "Jeśli ich nie usuwasz, zostają w organizmie. Jedzenie tego nie załatwia."
        ],
        ua: [
          "Виділення виводить зайві і шкідливі речовини.",
          "Якщо їх не виводиш, вони лишаються в організмі. Їжа цього не вирішує."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Brak wydalania", ua: "Сам. Брак виділення" },
      task: {
        id: "l14-p5",
        type: "single-choice",
        question: {
          pl: "Organizm je i oddycha, ale nie wydala. Co z tego wynika?",
          ua: "Організм їсть і дихає, але не виділяє. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "zbędne i szkodliwe substancje zostają w organizmie", ua: "зайві і шкідливі речовини лишаються в організмі" } },
          { id: "b", label: { pl: "nic, bo oddychanie zastępuje wydalanie", ua: "нічого, бо дихання замінює виділення" } },
          { id: "c", label: { pl: "pojawia się chlorofil zamiast moczu", ua: "з’являється хлорофіл замість сечі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Oddychanie uwalnia energię. Nie usuwa zbędnych substancji. Do tego jest wydalanie.",
              ua: "Дихання вивільняє енергію. Не виводить зайвих речовин. Для цього є виділення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Brak wydalania nie robi chlorofilu. Zbędne substancje zostają w organizmie.",
              ua: "Брак виділення не робить хлорофілу. Зайві речовини лишаються в організмі."
            }
          }
        ],
        explanation: {
          pl: "Bez wydalania zbędne i szkodliwe substancje zostają w organizmie.",
          ua: "Без виділення зайві і шкідливі речовини лишаються в організмі."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą czynność sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку функцію ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Siódemka", ua: "Перевірка 1. Сімка" },
      task: {
        id: "l14-t1",
        type: "single-choice",
        question: {
          pl: "Na liście są: odżywianie się, oddychanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce. Czego brakuje?",
          ua: "У списку є: живлення, дихання, рух, ріст і розвиток, розмноження, реакція на подразники. Чого бракує?"
        },
        options: [
          { id: "a", label: { pl: "wydalania", ua: "виділення" } },
          { id: "b", label: { pl: "fotosyntezy jako ósmej czynności", ua: "фотосинтезу як восьмої функції" } },
          { id: "c", label: { pl: "kół samochodu", ua: "коліс автомобіля" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza mieści się w odżywianiu. Na liście brakuje wydalania, trzeciej czynności.",
              ua: "Фотосинтез вміщається в живленні. У списку бракує виділення, третьої функції."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Koła nie są czynnością życiową. Brakuje wydalania.",
              ua: "Колеса не є життєвою функцією. Бракує виділення."
            }
          }
        ],
        explanation: {
          pl: "Brakuje wydalania. Z nim lista ma siedem czynności.",
          ua: "Бракує виділення. З ним список має сім функцій."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Odżywianie", ua: "Перевірка 2. Живлення" },
      task: {
        id: "l14-t2",
        type: "single-choice",
        question: {
          pl: "Krowa je trawę, a trawa sama robi cukier. Co to jest?",
          ua: "Корова їсть траву, а трава сама робить цукор. Що це?"
        },
        options: [
          { id: "a", label: { pl: "dwa sposoby odżywiania się: cudzożywność i samożywność", ua: "два способи живлення: гетеротрофне і саможивлення" } },
          { id: "b", label: { pl: "wydalanie krowy i ruch trawy", ua: "виділення корови і рух трави" } },
          { id: "c", label: { pl: "ósma i dziewiąta czynność życiowa", ua: "восьма і дев’ята життєві функції" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jedzenie trawy i robienie cukru dotyczą pokarmu. To odżywianie, nie wydalanie i nie ruch.",
              ua: "Їжа трави і вироблення цукру стосуються поживи. Це живлення, не виділення і не рух."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nie ma ósmej czynności. Krowa i trawa pokazują dwa sposoby odżywiania się.",
              ua: "Немає восьмої функції. Корова і трава показують два способи живлення."
            }
          }
        ],
        explanation: {
          pl: "Trawa jest samożywna, krowa cudzożywna. Obie się odżywiają.",
          ua: "Трава саможивна, корова гетеротрофна. Обидві живляться."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Oddychanie", ua: "Перевірка 3. Дихання" },
      task: {
        id: "l14-t3",
        type: "single-choice",
        question: {
          pl: "Czego brakuje komórce, jeśli organizm nie wymienia gazów?",
          ua: "Чого бракує клітині, якщо організм не обмінює газів?"
        },
        options: [
          { id: "a", label: { pl: "tlenu do oddychania tlenowego w mitochondrium", ua: "кисню для аеробного дихання в мітохондрії" } },
          { id: "b", label: { pl: "chlorofilu, bo oddychanie jest fotosyntezą", ua: "хлорофілу, бо дихання є фотосинтезом" } },
          { id: "c", label: { pl: "niczego, bo płuca same wytwarzają cukier", ua: "нічого, бо легені самі виробляють цукор" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Oddychanie nie jest fotosyntezą. Bez wymiany gazów brakuje tlenu do mitochondrium.",
              ua: "Дихання не є фотосинтезом. Без обміну газів бракує кисню для мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Płuca nie wytwarzają cukru. Dostarczają tlen, z którego mitochondrium uwalnia energię.",
              ua: "Легені не виробляють цукор. Постачають кисень, з якого мітохондрія вивільняє енергію."
            }
          }
        ],
        explanation: {
          pl: "Bez wymiany gazów komórce brakuje tlenu do oddychania w mitochondrium.",
          ua: "Без обміну газів клітині бракує кисню для дихання в мітохондрії."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Zależność", ua: "Перевірка 4. Залежність" },
      task: {
        id: "l14-t4",
        type: "single-choice",
        question: {
          pl: "Co łączy rośliny i zwierzęta na poziomie klasy 5?",
          ua: "Що з’єднує рослини і тварин на рівні 5 класу?"
        },
        options: [
          { id: "a", label: { pl: "pokarm, który zaczyna się od rośliny, i tlen z fotosyntezy", ua: "пожива, яка починається від рослини, і кисень із фотосинтезу" } },
          { id: "b", label: { pl: "wspólne chloroplasty w mięśniach zwierzęcia", ua: "спільні хлоропласти в м’язах тварини" } },
          { id: "c", label: { pl: "zwierzę oddaje roślinie gotowy cukier ze swoich mięśni", ua: "тварина віддає рослині готовий цукор зі своїх м’язів" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zwierzę nie ma chloroplastów. Łączy je pokarm od rośliny i tlen z fotosyntezy.",
              ua: "Тварина не має хлоропластів. Їх з’єднує пожива від рослини і кисень із фотосинтезу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cukier powstaje w roślinie i idzie do zwierzęcia, nie z mięśni z powrotem jako pokarm rośliny.",
              ua: "Цукор виникає в рослині і йде до тварини, не з м’язів назад як пожива рослини."
            }
          }
        ],
        explanation: {
          pl: "Rośliny i zwierzęta łączy pokarm oraz tlen z fotosyntezy.",
          ua: "Рослини і тварин з’єднує пожива та кисень із фотосинтезу."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wszystkie", ua: "Перевірка 5. Усі" },
      task: {
        id: "l14-t5",
        type: "single-choice",
        question: {
          pl: "Które uzasadnienie jest poprawne?",
          ua: "Яке обґрунтування правильне?"
        },
        options: [
          { id: "a", label: { pl: "bez odżywiania nie ma paliwa, bez oddychania nie ma energii, a sam ruch nie wystarcza", ua: "без живлення немає палива, без дихання немає енергії, а самого руху не досить" } },
          { id: "b", label: { pl: "wystarczy fermentacja drożdży w balonie", ua: "достатньо бродіння дріжджів у кульці" } },
          { id: "c", label: { pl: "wystarczy reakcja na bodźce, reszta jest zbędna", ua: "достатньо реакції на подразники, решта зайва" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Balon z drożdżami pokazuje jeden gaz fermentacji. Nie zastępuje siedmiu czynności organizmu.",
              ua: "Кулька з дріжджами показує один газ бродіння. Не замінює семи функцій організму."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Reakcja na bodźce jest jedną czynnością. Bez odżywiania i oddychania organizm nie ma paliwa ani energii.",
              ua: "Реакція на подразники є однією функцією. Без живлення і дихання організм не має палива і енергії."
            }
          }
        ],
        explanation: {
          pl: "Wszystkie czynności są potrzebne. Sam ruch ani jedna fermentacja ich nie zastępują.",
          ua: "Усі функції потрібні. Сам рух і одне бродіння їх не замінюють."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizL01("l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych razem", ua: "Сім життєвих функцій разом" },
        title: { pl: "Siódemka. Potem inne grupy organizmów.", ua: "Сімка. Потім інші групи організмів." },
        prompt: { pl: "Infografika siedmiu czynności z lekcji 1." }
      }),
      text: {
        pl: [
          "Siedem: odżywianie się, oddychanie, wydalanie, ruch, wzrost i rozwój, rozmnażanie się, reakcja na bodźce.",
          "Odżywianie: samożywność albo cudzożywność. Oddychanie: wymiana gazów i energia w mitochondrium.",
          "Rośliny i zwierzęta łączy pokarm oraz tlen. Roślina też oddycha.",
          "Jedna czynność nie zastępuje reszty. Następny dział zapyta o wirusy, bakterie, protisty i grzyby — innymi ciałami, tymi samymi pytaniami o życie."
        ],
        ua: [
          "Сім: живлення, дихання, виділення, рух, ріст і розвиток, розмноження, реакція на подразники.",
          "Живлення: саможивлення або гетеротрофне. Дихання: обмін газів і енергія в мітохондрії.",
          "Рослини і тварин з’єднує пожива та кисень. Рослина теж дихає.",
          "Одна функція не замінює решти. Наступний розділ запитає про віруси, бактерії, протисти і гриби — іншими тілами, тими самими питаннями про життя."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wymienię siedem czynności życiowych.", ua: "Назву сім життєвих функцій." },
        { pl: "Powiem, że samożywność i cudzożywność to dwa sposoby odżywiania.", ua: "Скажу, що саможивлення і гетеротрофне живлення — два способи живлення." },
        { pl: "Powiem, że oddychanie łączy wymianę gazów i mitochondrium.", ua: "Скажу, що дихання поєднує обмін газів і мітохондрію." },
        { pl: "Wyjaśnię, że rośliny i zwierzęta łączy pokarm i tlen.", ua: "Поясню, що рослини і тварин з’єднує пожива і кисень." },
        { pl: "Uzasadnię, że potrzebne są wszystkie czynności, nie jedna.", ua: "Обґрунтую, що потрібні всі функції, не одна." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
