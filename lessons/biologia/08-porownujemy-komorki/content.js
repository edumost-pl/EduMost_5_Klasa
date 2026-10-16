function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L08_Porownujemy_komorki/images/";

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
      heading: { pl: "Misja: cztery plany komórki", ua: "Місія: чотири плани клітини" },
      visual: vizGh("l08-zacznijmy.png", {
        alt: { pl: "Cztery typy komórek obok siebie", ua: "Чотири типи клітин поряд" },
        title: { pl: "Zwierzę, roślina, grzyb, bakteria.", ua: "Тварина, рослина, гриб, бактерія." },
        prompt: { pl: "Plansza lekcji 8: cztery modele komórek." }
      }),
      text: {
        pl: [
          "To lekcja 8: porównujemy komórki. Zwierzęcą i roślinną już znasz. Dziś dokładamy bakterię i grzyba.",
          "Najpierw jedno pytanie: czy komórka ma jądro, czy w cytozolu jest nić DNA?",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 8: порівнюємо клітини. Тваринну і рослинну ти вже знаєш. Сьогодні додаємо бактерію і гриб.",
          "Спочатку одне питання: чи клітина має ядро, чи в цитозолі є нитка ДНК?",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "komórki jądrowe", ua: "ядерні клітини — тваринні, рослинні, грибні" },
        { pl: "komórki bezjądrowe", ua: "без’ядерні клітини — бактеріальні" },
        { pl: "nić DNA", ua: "нитка ДНК — у цитозолі бактерії, замість ядра" },
        { pl: "otoczka śluzowa", ua: "слизова оболонка — додатковий захист деяких бактерій" },
        { pl: "rzęska", ua: "війка — рух деяких бактерій" },
        { pl: "chityna", ua: "хітин — матеріал стінки гриба, не целюлоза" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Jądro albo nić DNA", ua: "Поняття. Ядро або нитка ДНК" },
      visual: vizGh("l08-jadrowe.png", {
        alt: { pl: "Komórka z jądrem obok bakterii z nicią DNA", ua: "Клітина з ядром поруч із бактерією з ниткою ДНК" },
        title: { pl: "Jądrowe: zwierzę, roślina, grzyb. Bezjądrowe: bakteria.", ua: "Ядерні: тварина, рослина, гриб. Без’ядерні: бактерія." },
        prompt: { pl: "Plansza lekcji 8: komórki jądrowe i bakteria bez jądra." }
      }),
      text: {
        pl: [
          [em("Komórki jądrowe"), " mają jądro komórkowe. Są to komórki zwierzęce, roślinne i grzybowe."],
          [em("Komórki bezjądrowe"), " nie mają jądra. W klasie 5 są to komórki bakteryjne. Zamiast jądra w cytozolu jest nić DNA."],
          "Wirusów do tego podziału nie wpisujemy — to osobny temat. Niektóre glony, na przykład gałęzatka kulista, mają komórki z wieloma jądrami. To ciekawostka, nie punkt paszportu."
        ],
        ua: [
          [em("Ядерні клітини"), " мають клітинне ядро. Це тваринні, рослинні і грибні клітини."],
          [em("Без’ядерні клітини"), " не мають ядра. У 5 класі це бактеріальні клітини. Замість ядра в цитозолі є нитка ДНК."],
          "Вірусів у цей поділ не вписуємо — це окрема тема. Деякі водорості, наприклад кладофора куляста, мають клітини з багатьма ядрами. Це цікавинка, не пункт паспорта."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy z jądrem, jedna bez", ua: "Приклад. Три з ядром, одна без" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Komórka mięśnia, komórka liścia i komórka grzyba mają jądro. To komórki jądrowe."],
            ua: ["Клітина м’яза, клітина листка і клітина гриба мають ядро. Це ядерні клітини."]
          }
        },
        {
          text: {
            pl: ["Bakteria jądra nie ma. W cytozolu leży nić DNA. To komórka bezjądrowa."],
            ua: ["Бактерія ядра не має. У цитозолі лежить нитка ДНК. Це без’ядерна клітина."]
          }
        },
        {
          text: {
            pl: ["Nabłonek policzka też ma jądro. Bez jądra zostaje bakteria, nie komórka zwierzęca."],
            ua: ["Епітелій щоки теж має ядро. Відсутність ядра не означає «тваринна клітина»."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto bez jądra?", ua: "Коротке питання. Хто без ядра?" },
      task: {
        id: "l08-g1",
        type: "single-choice",
        question: {
          pl: "Które komórki są bezjądrowe?",
          ua: "Які клітини без’ядерні?"
        },
        options: [
          { id: "a", label: { pl: "bakteryjne", ua: "бактеріальні" } },
          { id: "b", label: { pl: "zwierzęce, roślinne i grzybowe", ua: "тваринні, рослинні і грибні" } },
          { id: "c", label: { pl: "tylko komórki nabłonka jamy ustnej", ua: "лише клітини епітелію ротової порожнини" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj komórki, w której zamiast jądra jest nić DNA w cytozolu.",
          ua: "Шукай клітину, у якій замість ядра є нитка ДНК у цитозолі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zwierzę, roślina i grzyb mają jądro. Bez jądra w tej lekcji jest bakteria.",
              ua: "Тварина, рослина і гриб мають ядро. Без ядра в цьому уроці є бактерія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nabłonek ma jądro — widziałeś je pod mikroskopem. Bezjądrowa jest komórka bakteryjna.",
              ua: "Епітелій має ядро — ти бачив його під мікроскопом. Без’ядерною є бактеріальна клітина."
            }
          }
        ],
        explanation: {
          pl: "Bez jądra są komórki bakteryjne. Zwierzęce, roślinne i grzybowe mają jądro.",
          ua: "Без ядра є бактеріальні клітини. Тваринні, рослинні і грибні мають ядро."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Grzyb bez jądra", ua: "Типова помилка. Гриб без ядра" },
      claim: {
        pl: "„Komórka grzyba jest bezjądrowa, jak bakteria.”",
        ua: "«Клітина гриба без’ядерна, як бактерія.»"
      },
      text: {
        pl: [
          "Grzyb ma jądro. Jest w grupie z zwierzęciem i rośliną.",
          "Bez jądra, z nicią DNA w cytozolu, zostaje bakteria."
        ],
        ua: [
          "Гриб має ядро. Він у групі з твариною і рослиною.",
          "Без ядра, з ниткою ДНК у цитозолі, лишається бактерія."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka muchomora", ua: "Сам. Клітина мухомора" },
      task: {
        id: "l08-p1",
        type: "single-choice",
        question: {
          pl: "Komórka muchomora. Czy jest jądrowa?",
          ua: "Клітина мухомора. Чи вона ядерна?"
        },
        options: [
          { id: "a", label: { pl: "Tak. Komórki grzybowe mają jądro.", ua: "Так. Грибні клітини мають ядро." } },
          { id: "b", label: { pl: "Nie. Każdy grzyb ma nić DNA zamiast jądra.", ua: "Ні. Кожен гриб має нитку ДНК замість ядра." } },
          { id: "c", label: { pl: "Jądrowe są tylko bakterie.", ua: "Ядерними є лише бактерії." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nić DNA zamiast jądra jest u bakterii. Muchomor jest grzybem, więc jego komórka ma jądro.",
              ua: "Нитка ДНК замість ядра є в бактерії. Мухомор — гриб, тож його клітина має ядро."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bakterie są bezjądrowe. Jądro mają zwierzę, roślina i grzyb, także muchomor.",
              ua: "Бактерії без’ядерні. Ядро мають тварина, рослина і гриб, також мухомор."
            }
          }
        ],
        explanation: {
          pl: "Muchomor jest grzybem. Komórka grzybowa ma jądro.",
          ua: "Мухомор — гриб. Грибна клітина має ядро."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Zwierzę i roślina", ua: "Поняття. Тварина і рослина" },
      visual: vizGh("l08-zwierze-roslina.png", {
        alt: { pl: "Porównanie komórki zwierzęcej i roślinnej", ua: "Порівняння тваринної і рослинної клітини" },
        title: { pl: "Wspólne mają obie. Chloroplasty i ściana — tylko roślina.", ua: "Спільне мають обидві. Хлоропласти і стінка — лише рослина." },
        prompt: { pl: "Tabela lekcji 8: komórka zwierzęca obok roślinnej." }
      }),
      text: {
        pl: [
          "Obie komórki mają błonę, cytozol, jądro, mitochondria, rybosomy i wakuole.",
          "Tylko roślinna ma chloroplasty i ścianę komórkową z celulozy.",
          "Wakuole też się różnią: u zwierzęcia jest ich wiele i są drobne, u rośliny zwykle jedna duża."
        ],
        ua: [
          "Обидві клітини мають мембрану, цитозоль, ядро, мітохондрії, рибосоми і вакуолі.",
          "Лише рослинна має хлоропласти і клітинну стінку з целюлози.",
          "Вакуолі теж різняться: у тварини їх багато і вони дрібні, у рослини зазвичай одна велика."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mięsień i liść", ua: "Приклад. М’яз і листок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Komórka mięśnia i komórka liścia mają błonę, cytozol, jądro, mitochondria i rybosomy."],
            ua: ["Клітина м’яза і клітина листка мають мембрану, цитозоль, ядро, мітохондрії і рибосоми."]
          }
        },
        {
          text: {
            pl: ["Liść dokłada chloroplasty i ścianę z celulozy. Mięsień ich nie ma."],
            ua: ["Листок додає хлоропласти і стінку з целюлози. М’яз їх не має."]
          }
        },
        {
          text: {
            pl: ["Wakuola liścia jest zwykle jedna i duża. W mięśniu wakuole są drobne i jest ich więcej."],
            ua: ["Вакуоля листка зазвичай одна і велика. У м’язі вакуолі дрібні і їх більше."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czego nie ma mięsień?", ua: "Коротке питання. Чого немає в м’яза?" },
      task: {
        id: "l08-g2",
        type: "single-choice",
        question: {
          pl: "Czego nie ma komórka zwierzęca, a ma komórka roślinna?",
          ua: "Чого немає в тваринної клітини, а є в рослинної?"
        },
        options: [
          { id: "a", label: { pl: "chloroplastów i ściany komórkowej", ua: "хлоропластів і клітинної стінки" } },
          { id: "b", label: { pl: "błony komórkowej i jądra", ua: "клітинної мембрани і ядра" } },
          { id: "c", label: { pl: "mitochondriów", ua: "мітохондрій" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj dwóch rzeczy z lekcji o komórce roślinnej. Błonę i mitochondria mają obie.",
          ua: "Шукай дві речі з уроку про рослинну клітину. Мембрану і мітохондрії мають обидві."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błonę i jądro mają obie komórki. Roślina dokłada chloroplasty i ścianę.",
              ua: "Мембрану і ядро мають обидві клітини. Рослина додає хлоропласти і стінку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondria są i w mięśniu, i w liściu. Zwierzęciu brakuje chloroplastów i ściany.",
              ua: "Мітохондрії є і в м’язі, і в листку. Тварині бракує хлоропластів і стінки."
            }
          }
        ],
        explanation: {
          pl: "Tylko komórka roślinna ma chloroplasty i ścianę komórkową.",
          ua: "Лише рослинна клітина має хлоропласти і клітинну стінку."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Chloroplasty u zwierzęcia", ua: "Типова помилка. Хлоропласти в тварини" },
      claim: {
        pl: "„Chloroplasty ma zwierzę, a roślina nie ma błony.”",
        ua: "«Хлоропласти має тварина, а рослина не має мембрани.»"
      },
      text: {
        pl: [
          "Odwrotnie przy chloroplastach i nieprawda przy błonie.",
          "Chloroplasty i ściana są u rośliny. Błonę mają obie komórki."
        ],
        ua: [
          "Навпаки щодо хлоропластів і неправда щодо мембрани.",
          "Хлоропласти і стінка є в рослини. Мембрану мають обидві клітини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwie wakuole", ua: "Сам. Дві вакуолі" },
      task: {
        id: "l08-p2",
        type: "single-choice",
        question: {
          pl: "Jak porównać wakuole komórki liścia i komórki mięśnia?",
          ua: "Як порівняти вакуолі клітини листка і клітини м’яза?"
        },
        options: [
          { id: "a", label: { pl: "w liściu zwykle jedna duża, w mięśniu wiele drobnych", ua: "у листку зазвичай одна велика, у м’язі багато дрібних" } },
          { id: "b", label: { pl: "w mięśniu jedna wielka, liść nie ma wakuoli", ua: "у м’язі одна велика, листок не має вакуолей" } },
          { id: "c", label: { pl: "wakuola liścia jest chloroplastem", ua: "вакуоля листка є хлоропластом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Duża wakuola jest w komórce roślinnej. W komórce zwierzęcej wakuole są drobne i jest ich więcej.",
              ua: "Велика вакуоля є в рослинній клітині. У тваринній клітині вакуолі дрібні і їх більше."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast jest osobno i tylko u rośliny. Wakuola liścia to zwykle jeden duży pęcherz z wodą.",
              ua: "Хлоропласт окремо і лише в рослини. Вакуоля листка — зазвичай один великий міхур із водою."
            }
          }
        ],
        explanation: {
          pl: "Liść ma zwykle jedną dużą wakuolę. Mięsień ma wiele drobnych.",
          ua: "Листок має зазвичай одну велику вакуолю. М’яз має багато дрібних."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Komórka bakteryjna", ua: "Поняття. Бактеріальна клітина" },
      visual: vizGh("l08-bakteria.png", {
        alt: { pl: "Schemat komórki bakteryjnej", ua: "Схема бактеріальної клітини" },
        title: { pl: "Brak jądra. Jest nić DNA, błona, ściana, rybosomy.", ua: "Немає ядра. Є нитка ДНК, мембрана, стінка, рибосоми." },
        prompt: { pl: "Schemat lekcji 8: bakteria bez jądra." }
      }),
      text: {
        pl: [
          ["Najważniejsza cecha: ", em("brak jądra"), ". Zamiast jądra w cytozolu jest ", em("nić DNA"), "."],
          "Bakteria ma też cytozol, rybosomy, błonę komórkową i ścianę komórkową.",
          ["Niektóre bakterie mają dodatkowo ", em("otoczkę śluzową"), " — ochrona — oraz ", em("rzęski"), " — ruch."],
          "Nie ma mitochondriów, chloroplastów ani wakuoli jak u roślin i zwierząt."
        ],
        ua: [
          ["Найважливіша риса: ", em("відсутність ядра"), ". Замість ядра в цитозолі є ", em("нитка ДНК"), "."],
          "Бактерія також має цитозоль, рибосоми, клітинну мембрану і клітинну стінку.",
          ["Деякі бактерії мають додатково ", em("слизову оболонку"), " — захист — і ", em("війки"), " — рух."],
          "Немає мітохондрій, хлоропластів і вакуолей, як у рослин і тварин."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zawsze, czasem, nigdy", ua: "Приклад. Завжди, іноді, ніколи" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Zawsze: nić DNA w cytozolu, błona, ściana, cytozol, rybosomy. Jądra nie ma."],
            ua: ["Завжди: нитка ДНК у цитозолі, мембрана, стінка, цитозоль, рибосоми. Ядра немає."]
          }
        },
        {
          text: {
            pl: ["Czasem: otoczka śluzowa chroni, rzęska służy ruchowi."],
            ua: ["Іноді: слизова оболонка захищає, війка служить руху."]
          }
        },
        {
          text: {
            pl: ["Nie przepisuj liścia: bakteria nie ma chloroplastów, mitochondriów ani dużej wakuoli."],
            ua: ["Не переписуй листок: бактерія не має хлоропластів, мітохондрій і великої вакуолі."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie jest DNA?", ua: "Коротке питання. Де ДНК?" },
      task: {
        id: "l08-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie jest zapis cech w komórce bakteryjnej?",
          ua: "Де запис рис у бактеріальній клітині?"
        },
        options: [
          { id: "a", label: { pl: "nić DNA leży w cytozolu, bo jądra nie ma", ua: "нитка ДНК лежить у цитозолі, бо ядра немає" } },
          { id: "b", label: { pl: "w jądrze, jak u komórki mięśnia", ua: "у ядрі, як у клітини м’яза" } },
          { id: "c", label: { pl: "w chloroplaście, jak u liścia", ua: "у хлоропласті, як у листка" } }
        ],
        answer: "a",
        hint: {
          pl: "Bakteria jest bezjądrowa. Szukaj nici DNA w cytozolu.",
          ua: "Бактерія без’ядерна. Шукай нитку ДНК у цитозолі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro ma komórka zwierzęca. U bakterii jądra nie ma, więc DNA jest nicią w cytozolu.",
              ua: "Ядро має тваринна клітина. У бактерії ядра немає, тож ДНК є ниткою в цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplastów bakteria nie ma. Zapis jest w nici DNA w cytozolu.",
              ua: "Хлоропластів бактерія не має. Запис є в нитці ДНК у цитозолі."
            }
          }
        ],
        explanation: {
          pl: "W bakterii nie ma jądra. Nić DNA leży w cytozolu.",
          ua: "У бактерії немає ядра. Нитка ДНК лежить у цитозолі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Bakteria jak liść", ua: "Типова помилка. Бактерія як листок" },
      claim: {
        pl: "„Bakteria ma duże jądro i chloroplasty jak moczarka.”",
        ua: "«Бактерія має велике ядро і хлоропласти, як елодея.»"
      },
      text: {
        pl: [
          "To plan komórki roślinnej, nie bakteryjnej.",
          "Bakteria nie ma jądra ani chloroplastów. Ma nić DNA, błonę, ścianę i rybosomy."
        ],
        ua: [
          "Це план рослинної клітини, не бактеріальної.",
          "Бактерія не має ядра і хлоропластів. Має нитку ДНК, мембрану, стінку і рибосоми."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ruch i ochrona", ua: "Сам. Рух і захист" },
      task: {
        id: "l08-p3",
        type: "single-choice",
        question: {
          pl: "Niektóre bakterie mają otoczkę śluzową i rzęski. Co która robi?",
          ua: "Деякі бактерії мають слизову оболонку і війки. Що кожна робить?"
        },
        options: [
          { id: "a", label: { pl: "otoczka śluzowa chroni, rzęska służy ruchowi", ua: "слизова оболонка захищає, війка служить руху" } },
          { id: "b", label: { pl: "otoczka służy ruchowi, rzęska zapisuje DNA", ua: "оболонка служить руху, війка записує ДНК" } },
          { id: "c", label: { pl: "obie są chloroplastami", ua: "обидві є хлоропластами" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ruch to rzęska. Ochrona to otoczka śluzowa. Zapis cech jest w nici DNA, nie w rzęsce.",
              ua: "Рух — це війка. Захист — це слизова оболонка. Запис рис є в нитці ДНК, не у війці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplastów bakteria nie ma. Otoczka chroni, rzęska porusza.",
              ua: "Хлоропластів бактерія не має. Оболонка захищає, війка рухає."
            }
          }
        ],
        explanation: {
          pl: "Otoczka śluzowa chroni. Rzęska służy ruchowi. Nie ma ich każda bakteria.",
          ua: "Слизова оболонка захищає. Війка служить руху. Вони є не в кожної бактерії."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Komórka grzybowa", ua: "Поняття. Грибна клітина" },
      visual: vizGh("l08-grzyb.png", {
        alt: { pl: "Schemat komórki grzybowej ze ścianą z chityny", ua: "Схема грибної клітини зі стінкою з хітину" },
        title: { pl: "Jądro jak u zwierzęcia. Ściana z chityny, nie z celulozy.", ua: "Ядро як у тварини. Стінка з хітину, не з целюлози." },
        prompt: { pl: "Schemat lekcji 8: komórka grzybowa bez chloroplastów." }
      }),
      text: {
        pl: [
          "Komórka grzybowa jest podobna do zwierzęcej: ma jądro, błonę, cytozol, mitochondria i wakuole.",
          ["Jak komórka roślinna ma ", em("ścianę komórkową"), ". Ta ściana jest z ", em("chityny"), ", nie z celulozy."],
          "Chloroplastów grzyb nie ma."
        ],
        ua: [
          "Грибна клітина подібна до тваринної: має ядро, мембрану, цитозоль, мітохондрії і вакуолі.",
          ["Як рослинна клітина має ", em("клітинну стінку"), ". Ця стінка з ", em("хітину"), ", не з целюлози."],
          "Хлоропластів гриб не має."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Most między dwoma planami", ua: "Приклад. Місток між двома планами" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jak zwierzę: jest jądro, są mitochondria i wakuole, nie ma chloroplastów."],
            ua: ["Як тварина: є ядро, є мітохондрії і вакуолі, немає хлоропластів."]
          }
        },
        {
          text: {
            pl: ["Jak roślina: jest ściana komórkowa."],
            ua: ["Як рослина: є клітинна стінка."]
          }
        },
        {
          text: {
            pl: ["Materiał ściany jest inny: chityna, nie celuloza."],
            ua: ["Матеріал стінки інший: хітин, не целюлоза."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Do kogo podobny grzyb?", ua: "Коротке питання. До кого схожий гриб?" },
      task: {
        id: "l08-g4",
        type: "single-choice",
        question: {
          pl: "Czym komórka grzybowa przypomina zwierzęcą, a czym roślinną?",
          ua: "Чим грибна клітина схожа на тваринну, а чим на рослинну?"
        },
        options: [
          { id: "a", label: { pl: "jak zwierzę — jądro i brak chloroplastów; jak roślina — ściana, ale z chityny", ua: "як тварина — ядро і немає хлоропластів; як рослина — стінка, але з хітину" } },
          { id: "b", label: { pl: "jak bakteria — brak jądra i nić DNA zamiast jądra", ua: "як бактерія — немає ядра і нитка ДНК замість ядра" } },
          { id: "c", label: { pl: "ma chloroplasty i ścianę z celulozy jak liść", ua: "має хлоропласти і стінку з целюлози, як листок" } }
        ],
        answer: "a",
        hint: {
          pl: "Jądro zostaje. Ściana jest, ale materiał to chityna. Chloroplastów nie ma.",
          ua: "Ядро лишається. Стінка є, але матеріал — хітин. Хлоропластів немає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Brak jądra to bakteria. Grzyb ma jądro, więc jest komórką jądrową.",
              ua: "Відсутність ядра — це бактерія. Гриб має ядро, тож це ядерна клітина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty i celuloza są u rośliny. Grzyb ma ścianę z chityny i nie ma chloroplastów.",
              ua: "Хлоропласти і целюлоза є в рослини. Гриб має стінку з хітину і не має хлоропластів."
            }
          }
        ],
        explanation: {
          pl: "Grzyb ma jądro jak zwierzę i ścianę jak roślina, ale ściana jest z chityny.",
          ua: "Гриб має ядро як тварина і стінку як рослина, але стінка з хітину."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ściana grzyba z celulozy", ua: "Типова помилка. Стінка гриба з целюлози" },
      claim: {
        pl: "„Skoro grzyb ma ścianę, jest ona z celulozy i są chloroplasty.”",
        ua: "«Якщо гриб має стінку, вона з целюлози і є хлоропласти.»"
      },
      text: {
        pl: [
          "Ściana nie znaczy automatycznie „roślina”.",
          "U grzyba ściana jest z chityny. Chloroplastów nie ma."
        ],
        ua: [
          "Стінка не означає автоматично «рослина».",
          "У гриба стінка з хітину. Хлоропластів немає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ściana borowika", ua: "Сам. Стінка боровика" },
      task: {
        id: "l08-p4",
        type: "single-choice",
        question: {
          pl: "Z czego jest ściana komórki borowika?",
          ua: "З чого стінка клітини боровика?"
        },
        options: [
          { id: "a", label: { pl: "z chityny", ua: "з хітину" } },
          { id: "b", label: { pl: "z celulozy, jak u rośliny", ua: "з целюлози, як у рослини" } },
          { id: "c", label: { pl: "borowik nie ma ściany, bo jest bezjądrowy", ua: "боровик не має стінки, бо він без’ядерний" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Celuloza jest w ścianie rośliny. Borowik jest grzybem, więc ściana jest z chityny.",
              ua: "Целюлоза є в стінці рослини. Боровик — гриб, тож стінка з хітину."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Borowik ma jądro i ma ścianę. Materiał tej ściany to chityna.",
              ua: "Боровик має ядро і має стінку. Матеріал цієї стінки — хітин."
            }
          }
        ],
        explanation: {
          pl: "Ściana komórki grzybowej, także borowika, jest z chityny.",
          ua: "Стінка грибної клітини, також боровика, з хітину."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Co mają wszystkie", ua: "Поняття. Що мають усі" },
      visual: vizGh("l08-wspolne.png", {
        alt: { pl: "Trzy wspólne składniki wszystkich komórek", ua: "Три спільні складники всіх клітин" },
        title: { pl: "Błona. Cytozol. Rybosomy.", ua: "Мембрана. Цитозоль. Рибосоми." },
        prompt: { pl: "Plansza lekcji 8: trzy składniki wspólne wszystkim komórkom." }
      }),
      text: {
        pl: [
          ["Wszystkie cztery typy mają ", em("błonę komórkową"), ", ", em("cytozol"), " i ", em("rybosomy"), "."],
          "Jądra nie wpisuj do wspólnych: bakteria go nie ma. Chloroplastów też nie: ma je tylko roślina.",
          "Wirusy nie są komórkami z tej tabeli. Królestwa organizmów uporządkujesz później."
        ],
        ua: [
          ["Усі чотири типи мають ", em("клітинну мембрану"), ", ", em("цитозоль"), " і ", em("рибосоми"), "."],
          "Ядро не вписуй до спільних: бактерія його не має. Хлоропласти теж ні: їх має лише рослина.",
          "Віруси не є клітинами з цієї таблиці. Царства організмів упорядкуєш пізніше."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy karty", ua: "Приклад. Три картки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Błona jest u zwierzęcia, rośliny, grzyba i bakterii."],
            ua: ["Мембрана є в тварини, рослини, гриба і бактерії."]
          }
        },
        {
          text: {
            pl: ["Cytozol i rybosomy też są u wszystkich czterech."],
            ua: ["Цитозоль і рибосоми теж є в усіх чотирьох."]
          }
        },
        {
          text: {
            pl: ["Jądro odpada przy bakterii. Chloroplast odpada przy zwierzęciu, grzybie i bakterii."],
            ua: ["Ядро відпадає в бактерії. Хлоропласт відпадає в тварини, гриба і бактерії."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Wspólny zestaw", ua: "Коротке питання. Спільний набір" },
      task: {
        id: "l08-g5",
        type: "single-choice",
        question: {
          pl: "Które składniki są we wszystkich czterech typach komórek?",
          ua: "Які складники є в усіх чотирьох типах клітин?"
        },
        options: [
          { id: "a", label: { pl: "błona komórkowa, cytozol, rybosomy", ua: "клітинна мембрана, цитозоль, рибосоми" } },
          { id: "b", label: { pl: "jądro, mitochondria, chloroplasty", ua: "ядро, мітохондрії, хлоропласти" } },
          { id: "c", label: { pl: "tylko ściana z celulozy", ua: "лише стінка з целюлози" } }
        ],
        answer: "a",
        hint: {
          pl: "Zestaw ma pasować też do bakterii. Jądro i chloroplast odpadają.",
          ua: "Набір має пасувати і до бактерії. Ядро і хлоропласт відпадають."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądra i mitochondriów nie ma bakteria. Chloroplasty ma tylko roślina.",
              ua: "Ядра і мітохондрій немає в бактерії. Хлоропласти має лише рослина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana z celulozy jest u rośliny. Wspólne dla wszystkich są błona, cytozol i rybosomy.",
              ua: "Стінка з целюлози є в рослини. Спільні для всіх — мембрана, цитозоль і рибосоми."
            }
          }
        ],
        explanation: {
          pl: "Wspólne są błona komórkowa, cytozol i rybosomy.",
          ua: "Спільні — клітинна мембрана, цитозоль і рибосоми."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jądro u każdego", ua: "Типова помилка. Ядро в кожного" },
      claim: {
        pl: "„Jądro, mitochondria i chloroplasty są w każdej komórce.”",
        ua: "«Ядро, мітохондрії і хлоропласти є в кожній клітині.»"
      },
      text: {
        pl: [
          "Żadnego z tych trzech nie ma u wszystkich.",
          "Wspólne zostają błona, cytozol i rybosomy. Jądro odpada u bakterii, chloroplast jest tylko u rośliny."
        ],
        ua: [
          "Жодного з цих трьох немає в усіх.",
          "Спільними лишаються мембрана, цитозоль і рибосоми. Ядро відпадає в бактерії, хлоропласт є лише в рослини."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Czego brakuje bakterii", ua: "Сам. Чого бракує бактерії" },
      task: {
        id: "l08-p5",
        type: "single-choice",
        question: {
          pl: "Który składnik mają zwierzę, roślina i grzyb, a bakteria go nie ma?",
          ua: "Який складник мають тварина, рослина і гриб, а бактерія його не має?"
        },
        options: [
          { id: "a", label: { pl: "jądro komórkowe", ua: "клітинне ядро" } },
          { id: "b", label: { pl: "błonę komórkową", ua: "клітинну мембрану" } },
          { id: "c", label: { pl: "rybosomy", ua: "рибосоми" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błonę ma także bakteria. To jeden ze wspólnych składników. Brakuje jej jądra.",
              ua: "Мембрану має також бактерія. Це один зі спільних складників. Їй бракує ядра."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rybosomy są we wszystkich czterech typach, także u bakterii. Jądra bakteria nie ma.",
              ua: "Рибосоми є в усіх чотирьох типах, також у бактерії. Ядра бактерія не має."
            }
          }
        ],
        explanation: {
          pl: "Jądro mają trzy typy jądrowe. Bakteria ma zamiast niego nić DNA w cytozolu.",
          ua: "Ядро мають три ядерні типи. Бактерія має замість нього нитку ДНК у цитозолі."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który typ komórki sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який тип клітини ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Jądrowe i bezjądrowe", ua: "Перевірка 1. Ядерні і без’ядерні" },
      task: {
        id: "l08-t1",
        type: "single-choice",
        question: {
          pl: "Jak dzielimy komórki ze względu na jądro?",
          ua: "Як ділимо клітини за ядром?"
        },
        options: [
          { id: "a", label: { pl: "jądrowe: zwierzęce, roślinne, grzybowe; bezjądrowe: bakteryjne", ua: "ядерні: тваринні, рослинні, грибні; без’ядерні: бактеріальні" } },
          { id: "b", label: { pl: "jądrowe: tylko bakterie; bezjądrowe: grzyby", ua: "ядерні: лише бактерії; без’ядерні: гриби" } },
          { id: "c", label: { pl: "wszystkie komórki z tej lekcji są bezjądrowe", ua: "усі клітини з цього уроку без’ядерні" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bakteria jest bezjądrowa. Grzyb ma jądro i stoi obok zwierzęcia oraz rośliny.",
              ua: "Бактерія без’ядерна. Гриб має ядро і стоїть поруч із твариною та рослиною."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez jądra jest bakteria. Zwierzę, roślina i grzyb mają jądro.",
              ua: "Без ядра є бактерія. Тварина, рослина і гриб мають ядро."
            }
          }
        ],
        explanation: {
          pl: "Jądrowe są komórki zwierzęce, roślinne i grzybowe. Bezjądrowe są bakteryjne.",
          ua: "Ядерні — тваринні, рослинні і грибні клітини. Без’ядерні — бактеріальні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Zwierzę i roślina", ua: "Перевірка 2. Тварина і рослина" },
      task: {
        id: "l08-t2",
        type: "single-choice",
        question: {
          pl: "Które zdanie o komórce roślinnej i zwierzęcej jest prawdziwe?",
          ua: "Яке речення про рослинну і тваринну клітину правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Roślinna ma chloroplasty i ścianę; wakuola roślinna jest zwykle jedna i duża, zwierzęce są drobne i liczniejsze. Błonę i jądro mają obie.", ua: "Рослинна має хлоропласти і стінку; рослинна вакуоля зазвичай одна і велика, тваринні дрібні і численніші. Мембрану і ядро мають обидві." } },
          { id: "b", label: { pl: "Obie nie mają jądra.", ua: "Обидві не мають ядра." } },
          { id: "c", label: { pl: "Zwierzę ma grubszą ścianę z celulozy, roślina nie ma błony.", ua: "Тварина має товстішу стінку з целюлози, рослина не має мембрани." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro mają obie. Bez jądra jest bakteria, nie zwierzę i nie roślina.",
              ua: "Ядро мають обидві. Без ядра є бактерія, не тварина і не рослина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściany z celulozy nie ma komórka zwierzęca. Błonę mają obie. Ścianę i chloroplasty ma roślina.",
              ua: "Стінки з целюлози немає в тваринної клітини. Мембрану мають обидві. Стінку і хлоропласти має рослина."
            }
          }
        ],
        explanation: {
          pl: "Różnice to chloroplasty, ściana i wielkość wakuoli. Błona i jądro są wspólne.",
          ua: "Відмінності — хлоропласти, стінка і розмір вакуолі. Мембрана і ядро спільні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Bakteria", ua: "Перевірка 3. Бактерія" },
      task: {
        id: "l08-t3",
        type: "single-choice",
        question: {
          pl: "Która charakterystyka komórki bakteryjnej jest poprawna?",
          ua: "Яка характеристика бактеріальної клітини правильна?"
        },
        options: [
          { id: "a", label: { pl: "zamiast jądra nić DNA w cytozolu; błona, ściana, cytozol i rybosomy; czasem otoczka śluzowa i rzęski", ua: "замість ядра нитка ДНК у цитозолі; мембрана, стінка, цитозоль і рибосоми; іноді слизова оболонка і війки" } },
          { id: "b", label: { pl: "duże jądro, chloroplasty i jedna ogromna wakuola", ua: "велике ядро, хлоропласти і одна величезна вакуоля" } },
          { id: "c", label: { pl: "nie ma błony ani cytozolu", ua: "не має мембрани і цитозолю" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro, chloroplasty i duża wakuola to nie plan bakterii. Bakteria ma nić DNA w cytozolu.",
              ua: "Ядро, хлоропласти і велика вакуоля — не план бактерії. Бактерія має нитку ДНК у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Błona i cytozol są u bakterii. Brakuje jej jądra, nie tych dwóch składników.",
              ua: "Мембрана і цитозоль є в бактерії. Їй бракує ядра, не цих двох складників."
            }
          }
        ],
        explanation: {
          pl: "Bakteria jest bezjądrowa: nić DNA, błona, ściana, cytozol, rybosomy; czasem otoczka i rzęski.",
          ua: "Бактерія без’ядерна: нитка ДНК, мембрана, стінка, цитозоль, рибосоми; іноді оболонка і війки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Grzyb", ua: "Перевірка 4. Гриб" },
      task: {
        id: "l08-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o komórce grzybowej jest poprawne?",
          ua: "Яке речення про грибну клітину правильне?"
        },
        options: [
          { id: "a", label: { pl: "Ma jądro jak zwierzęca i ścianę z chityny. Chloroplastów nie ma.", ua: "Має ядро як тваринна і стінку з хітину. Хлоропластів не має." } },
          { id: "b", label: { pl: "Jest bezjądrowa jak bakteria.", ua: "Без’ядерна, як бактерія." } },
          { id: "c", label: { pl: "Ma chloroplasty i ścianę z celulozy.", ua: "Має хлоропласти і стінку з целюлози." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bez jądra jest bakteria. Grzyb ma jądro, mitochondria i wakuole.",
              ua: "Без ядра є бактерія. Гриб має ядро, мітохондрії і вакуолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty i celuloza są u rośliny. Ściana grzyba jest z chityny.",
              ua: "Хлоропласти і целюлоза є в рослини. Стінка гриба з хітину."
            }
          }
        ],
        explanation: {
          pl: "Grzyb ma jądro i ścianę z chityny. Chloroplastów nie ma.",
          ua: "Гриб має ядро і стінку з хітину. Хлоропластів не має."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Wspólne składniki", ua: "Перевірка 5. Спільні складники" },
      task: {
        id: "l08-t5",
        type: "single-choice",
        question: {
          pl: "Czy jądro jest wspólne wszystkim czterem typom?",
          ua: "Чи ядро спільне всім чотирьом типам?"
        },
        options: [
          { id: "a", label: { pl: "Nie. Bakteria nie ma jądra. Wspólne są błona, cytozol i rybosomy.", ua: "Ні. Бактерія не має ядра. Спільні — мембрана, цитозоль і рибосоми." } },
          { id: "b", label: { pl: "Tak. Każda komórka z lekcji ma jądro.", ua: "Так. Кожна клітина з уроку має ядро." } },
          { id: "c", label: { pl: "Wspólne są tylko chloroplasty.", ua: "Спільними є лише хлоропласти." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro mają zwierzę, roślina i grzyb. Bakteria ma nić DNA w cytozolu.",
              ua: "Ядро мають тварина, рослина і гриб. Бактерія має нитку ДНК у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplasty ma tylko komórka roślinna. Do wspólnych należą błona, cytozol i rybosomy.",
              ua: "Хлоропласти має лише рослинна клітина. До спільних належать мембрана, цитозоль і рибосоми."
            }
          }
        ],
        explanation: {
          pl: "Wspólne czterem typom są błona komórkowa, cytozol i rybosomy.",
          ua: "Спільні чотирьом типам — клітинна мембрана, цитозоль і рибосоми."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l08-tabela.png", {
        alt: { pl: "Tabela czterech typów komórek", ua: "Таблиця чотирьох типів клітин" },
        title: { pl: "Cztery kolumny. Trzy wspólne składniki.", ua: "Чотири колонки. Три спільні складники." },
        prompt: { pl: "Tabela lekcji 8: zwierzę, roślina, grzyb, bakteria." }
      }),
      text: {
        pl: [
          "Jądrowe: zwierzę, roślina, grzyb. Bezjądrowe: bakteria, nić DNA w cytozolu.",
          "Roślina względem zwierzęcia: chloroplasty, ściana z celulozy, zwykle jedna duża wakuola.",
          "Bakteria: błona, ściana, cytozol, rybosomy; czasem otoczka śluzowa i rzęski. Bez mitochondriów, chloroplastów i wakuoli.",
          "Grzyb: jądro, mitochondria, wakuole i ściana z chityny. Bez chloroplastów.",
          "Wszystkie cztery: błona komórkowa, cytozol, rybosomy."
        ],
        ua: [
          "Ядерні: тварина, рослина, гриб. Без’ядерні: бактерія, нитка ДНК у цитозолі.",
          "Рослина щодо тварини: хлоропласти, стінка з целюлози, зазвичай одна велика вакуоля.",
          "Бактерія: мембрана, стінка, цитозоль, рибосоми; іноді слизова оболонка і війки. Без мітохондрій, хлоропластів і вакуолей.",
          "Гриб: ядро, мітохондрії, вакуолі і стінка з хітину. Без хлоропластів.",
          "Усі чотири: клітинна мембрана, цитозоль, рибосоми."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Podzielę komórki na jądrowe i bezjądrowe.", ua: "Поділю клітини на ядерні і без’ядерні." },
        { pl: "Wskażę różnice komórki zwierzęcej i roślinnej.", ua: "Вкажу відмінності тваринної і рослинної клітини." },
        { pl: "Scharakteryzuję budowę komórki bakteryjnej.", ua: "Схарактеризую будову бактеріальної клітини." },
        { pl: "Powiem, czym komórka grzybowa przypomina zwierzęcą, a czym roślinną.", ua: "Скажу, чим грибна клітина схожа на тваринну, а чим на рослинну." },
        { pl: "Wymienię składniki wspólne wszystkim typom komórek.", ua: "Назву складники, спільні всім типам клітин." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
