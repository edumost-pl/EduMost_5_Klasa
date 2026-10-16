function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L12_Oddychanie_tlenowe_i_fermentacja/images/";

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
      heading: { pl: "Misja: energia z cukru", ua: "Місія: енергія з цукру" },
      visual: vizGh("l12-zacznijmy.png", {
        alt: { pl: "Dziecko biegnie — komórki potrzebują energii", ua: "Дитина біжить — клітини потребують енергії" },
        title: { pl: "Bieg potrzebuje energii.", ua: "Біг потребує енергії." },
        prompt: { pl: "Zdjęcie lekcji 12: dziecko biegnie po boisku." }
      }),
      text: {
        pl: [
          "To lekcja 12: oddychanie tlenowe i fermentacja. Na lekcji 1 oddychanie znaczyło wymianę gazów. Dziś schodzimy do komórki: cukier i tlen dają energię.",
          "Zobaczysz też, co komórka robi, gdy tlenu chwilowo brakuje. Doświadczenie z drożdżami jest lekcją 13.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 12: аеробне дихання і бродіння. На уроці 1 дихання означало обмін газів. Сьогодні спускаємося до клітини: цукор і кисень дають енергію.",
          "Побачиш також, що клітина робить, коли кисню на мить бракує. Дослід із дріжджами — урок 13.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "wymiana gazów", ua: "обмін газів — кисень усередину, вуглекислий газ назовні" },
        { pl: "oddychanie tlenowe", ua: "аеробне дихання — енергія з цукру і кисню в клітині" },
        { pl: "mitochondrium", ua: "мітохондрія — місце аеробного дихання" },
        { pl: "fermentacja", ua: "бродіння — енергія з цукру без кисню" },
        { pl: "drożdże", ua: "дріжджі — спиртове бродіння, вуглекислий газ" },
        { pl: "kwas mlekowy", ua: "молочна кислота — у м’язах, коли кисню бракує" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwa znaczenia", ua: "Поняття. Два значення" },
      visual: vizGh("l12-dwa-znaczenia.png", {
        alt: { pl: "Wymiana gazów i oddychanie tlenowe w komórce", ua: "Обмін газів і аеробне дихання в клітині" },
        title: { pl: "Jedno słowo, dwa poziomy.", ua: "Одне слово, два рівні." },
        prompt: { pl: "Plansza lekcji 12: płuca i mitochondrium." }
      }),
      text: {
        pl: [
          ["Słowo ", em("oddychanie"), " ma dwa znaczenia."],
          [em("Wymiana gazów"), " — organizm pobiera tlen i oddaje dwutlenek węgla. U człowieka robią to płuca, u ryby skrzela, u rośliny szparki w liściu."],
          [em("Oddychanie tlenowe"), " (komórkowe) — w komórce z cukru i tlenu uwalnia się energia. Powstają dwutlenek węgla i woda."],
          "Wymiana gazów dostarcza tlen do komórek i wynosi dwutlenek węgla. Energia powstaje wewnątrz komórki."
        ],
        ua: [
          ["Слово ", em("дихання"), " має два значення."],
          [em("Обмін газів"), " — організм бере кисень і віддає вуглекислий газ. У людини це легені, у риби зябра, у рослини продихи в листку."],
          [em("Аеробне дихання"), " (клітинне) — у клітині з цукру і кисню вивільняється енергія. Виникають вуглекислий газ і вода."],
          "Обмін газів постачає кисень до клітин і виносить вуглекислий газ. Енергія виникає всередині клітини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Bieg", ua: "Приклад. Біг" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Klatka piersiowa pracuje. Tlen wchodzi, dwutlenek węgla wychodzi. To wymiana gazów."],
            ua: ["Грудна клітка працює. Кисень входить, вуглекислий газ виходить. Це обмін газів."]
          }
        },
        {
          text: {
            pl: ["W komórce mięśnia cukier i tlen dają energię. To oddychanie tlenowe."],
            ua: ["У клітині м’яза цукор і кисень дають енергію. Це аеробне дихання."]
          }
        },
        {
          text: {
            pl: ["Ruch klatki nie zastępuje cukru. Bez pokarmu komórka nie ma czego zużywać."],
            ua: ["Рух грудної клітки не замінює цукор. Без поживи клітині немає що споживати."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które znaczenie?", ua: "Коротке питання. Яке значення?" },
      task: {
        id: "l12-g1",
        type: "single-choice",
        question: {
          pl: "Czym jest oddychanie tlenowe?",
          ua: "Що таке аеробне дихання?"
        },
        options: [
          { id: "a", label: { pl: "uwalnianiem energii z cukru przy udziale tlenu — w komórce", ua: "вивільненням енергії з цукру за участю кисню — у клітині" } },
          { id: "b", label: { pl: "tylko ruchem klatki piersiowej, bez roli cukru", ua: "лише рухом грудної клітки, без ролі цукру" } },
          { id: "c", label: { pl: "fotosyntezą w chloroplastach", ua: "фотосинтезом у хлоропластах" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj cukru i energii wewnątrz komórki, nie samego ruchu klatki.",
          ua: "Шукай цукор і енергію всередині клітини, не сам рух грудної клітки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ruch klatki to wymiana gazów. Oddychanie tlenowe zużywa cukier i uwalnia energię w komórce.",
              ua: "Рух грудної клітки — це обмін газів. Аеробне дихання споживає цукор і вивільняє енергію в клітині."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza składa cukier w chloroplaście. Oddychanie tlenowe zużywa cukier i uwalnia energię.",
              ua: "Фотосинтез складає цукор у хлоропласті. Аеробне дихання споживає цукор і вивільняє енергію."
            }
          }
        ],
        explanation: {
          pl: "Oddychanie tlenowe uwalnia energię z cukru przy udziale tlenu.",
          ua: "Аеробне дихання вивільняє енергію з цукру за участю кисню."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tylko klatka", ua: "Типова помилка. Лише грудна клітка" },
      claim: {
        pl: "„Oddychanie to tylko ruch klatki piersiowej.”",
        ua: "«Дихання — це лише рух грудної клітки.»"
      },
      text: {
        pl: [
          "Ruch klatki jest wymianą gazów: tlen wchodzi, dwutlenek węgla wychodzi.",
          "Energia z cukru powstaje dopiero w komórce. To drugie znaczenie."
        ],
        ua: [
          "Рух грудної клітки є обміном газів: кисень входить, вуглекислий газ виходить.",
          "Енергія з цукру виникає вже в клітині. Це друге значення."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Skrzela ryby", ua: "Сам. Зябра риби" },
      task: {
        id: "l12-p1",
        type: "single-choice",
        question: {
          pl: "Skrzela ryby pobierają tlen z wody i oddają dwutlenek węgla. Co to jest?",
          ua: "Зябра риби беруть кисень із води і віддають вуглекислий газ. Що це?"
        },
        options: [
          { id: "a", label: { pl: "wymiana gazów", ua: "обмін газів" } },
          { id: "b", label: { pl: "oddychanie tlenowe w mitochondrium", ua: "аеробне дихання в мітохондрії" } },
          { id: "c", label: { pl: "fermentacja, bo ryba jest w wodzie", ua: "бродіння, бо риба у воді" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrzela wymieniają gazy z wodą. Energię z cukru komórka uwalnia później, w mitochondrium.",
              ua: "Зябра обмінюють гази з водою. Енергію з цукру клітина вивільняє пізніше, в мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fermentacja zachodzi bez tlenu. Skrzela właśnie pobierają tlen. To wymiana gazów.",
              ua: "Бродіння відбувається без кисню. Зябра якраз беруть кисень. Це обмін газів."
            }
          }
        ],
        explanation: {
          pl: "Skrzela wymieniają gazy. To nie jest jeszcze uwalnianie energii w komórce.",
          ua: "Зябра обмінюють гази. Це ще не вивільнення енергії в клітині."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Równanie słowne", ua: "Поняття. Словесне рівняння" },
      visual: vizGh("l12-rownanie.png", {
        alt: { pl: "Glukoza i tlen dają dwutlenek węgla, wodę i energię", ua: "Глюкоза і кисень дають вуглекислий газ, воду і енергію" },
        title: { pl: "Cukier się zużywa. Energia się uwalnia.", ua: "Цукор споживається. Енергія вивільняється." },
        prompt: { pl: "Schemat lekcji 12: równanie słowne oddychania tlenowego." }
      }),
      text: {
        pl: [
          "Równanie słowne oddychania tlenowego:",
          [em("glukoza + tlen → dwutlenek węgla + woda + energia")],
          "Fotosynteza idzie w drugą stronę: z dwutlenku węgla i wody składa glukozę i tlen. Oddychanie tlenowe zużywa glukozę przy tlenie."
        ],
        ua: [
          "Словесне рівняння аеробного дихання:",
          [em("глюкоза + кисень → вуглекислий газ + вода + енергія")],
          "Фотосинтез іде в другий бік: із вуглекислого газу і води складає глюкозу і кисень. Аеробне дихання споживає глюкозу при кисні."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kierunek strzałki", ua: "Приклад. Напрям стрілки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej są glukoza i tlen. One się zużywają."],
            ua: ["Ліворуч є глюкоза і кисень. Вони споживаються."]
          }
        },
        {
          text: {
            pl: ["Po prawej powstają dwutlenek węgla, woda i energia."],
            ua: ["Праворуч виникають вуглекислий газ, вода і енергія."]
          }
        },
        {
          text: {
            pl: ["Strzałka w drugą stronę to fotosynteza. Energii tam się nie uwalnia, cukier tam powstaje."],
            ua: ["Стрілка в другий бік — це фотосинтез. Енергія там не вивільняється, цукор там виникає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie energia?", ua: "Коротке питання. Де енергія?" },
      task: {
        id: "l12-g2",
        type: "single-choice",
        question: {
          pl: "Gdzie w równaniu oddychania tlenowego stoi energia?",
          ua: "Де в рівнянні аеробного дихання стоїть енергія?"
        },
        options: [
          { id: "a", label: { pl: "po prawej, razem z dwutlenkiem węgla i wodą", ua: "праворуч, разом із вуглекислим газом і водою" } },
          { id: "b", label: { pl: "po lewej, obok glukozy, zanim powstanie dwutlenek węgla", ua: "ліворуч, біля глюкози, перш ніж виникне вуглекислий газ" } },
          { id: "c", label: { pl: "w tym równaniu energii nie ma", ua: "у цьому рівнянні енергії немає" } }
        ],
        answer: "a",
        hint: {
          pl: "Energia się uwalnia. Stoi po stronie tego, co powstaje.",
          ua: "Енергія вивільняється. Стоїть з боку того, що виникає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Po lewej są glukoza i tlen — one się zużywają. Energia jest produktem, po prawej.",
              ua: "Ліворуч є глюкоза і кисень — вони споживаються. Енергія є продуктом, праворуч."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cały sens oddychania tlenowego to energia. Stoi po prawej, obok dwutlenku węgla i wody.",
              ua: "Увесь сенс аеробного дихання — це енергія. Стоїть праворуч, біля вуглекислого газу і води."
            }
          }
        ],
        explanation: {
          pl: "Energia powstaje razem z dwutlenkiem węgla i wodą.",
          ua: "Енергія виникає разом із вуглекислим газом і водою."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ta sama strzałka", ua: "Типова помилка. Та сама стрілка" },
      claim: {
        pl: "„To równanie to fotosynteza, tylko innymi słowami.”",
        ua: "«Це рівняння — фотосинтез, лише іншими словами.»"
      },
      text: {
        pl: [
          "W fotosyntezie glukoza powstaje. W oddychaniu tlenowym glukoza się zużywa.",
          "Strzałka idzie w drugą stronę, a po prawej jest energia."
        ],
        ua: [
          "У фотосинтезі глюкоза виникає. В аеробному диханні глюкоза споживається.",
          "Стрілка йде в другий бік, а праворуч є енергія."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka mięśnia", ua: "Сам. Клітина м’яза" },
      task: {
        id: "l12-p2",
        type: "single-choice",
        question: {
          pl: "Komórka mięśnia ma glukozę i tlen. Co powstaje w oddychaniu tlenowym?",
          ua: "Клітина м’яза має глюкозу і кисень. Що виникає в аеробному диханні?"
        },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla, woda i energia", ua: "вуглекислий газ, вода і енергія" } },
          { id: "b", label: { pl: "nowa glukoza i tlen", ua: "нова глюкоза і кисень" } },
          { id: "c", label: { pl: "kwas mlekowy, choć tlen jest", ua: "молочна кислота, хоча кисень є" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nowa glukoza i tlen powstają w fotosyntezie. W oddychaniu tlenowym glukoza się zużywa.",
              ua: "Нова глюкоза і кисень виникають у фотосинтезі. В аеробному диханні глюкоза споживається."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kwas mlekowy powstaje, gdy tlenu chwilowo brakuje. Przy tlenie powstają dwutlenek węgla, woda i energia.",
              ua: "Молочна кислота виникає, коли кисню на мить бракує. При кисні виникають вуглекислий газ, вода і енергія."
            }
          }
        ],
        explanation: {
          pl: "Z glukozy i tlenu powstają dwutlenek węgla, woda i energia.",
          ua: "З глюкози і кисню виникають вуглекислий газ, вода і енергія."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Mitochondrium", ua: "Поняття. Мітохондрія" },
      visual: vizGh("l12-mitochondrium.png", {
        alt: { pl: "Mitochondrium — miejsce oddychania tlenowego", ua: "Мітохондрія — місце аеробного дихання" },
        title: { pl: "Tu uwalnia się energia z cukru przy tlenie.", ua: "Тут вивільняється енергія з цукру при кисні." },
        prompt: { pl: "Schemat lekcji 12: mitochondrium." }
      }),
      text: {
        pl: [
          ["Oddychanie tlenowe zachodzi w ", em("mitochondriach"), ". Na lekcji 6 to było centrum energetyczne komórki."],
          "Mają je komórki zwierzęce, roślinne i grzybowe. Bakterie mitochondriów nie mają i uwalniają energię w cytozolu. Dziś zostajemy przy komórkach z jądrem."
        ],
        ua: [
          ["Аеробне дихання відбувається в ", em("мітохондріях"), ". На уроці 6 це був енергетичний центр клітини."],
          "Їх мають тваринні, рослинні і грибні клітини. Бактерії мітохондрій не мають і вивільняють енергію в цитозолі. Сьогодні лишаємося при клітинах з ядром."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy miejsca", ua: "Приклад. Три місця" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Mitochondrium uwalnia energię z cukru przy tlenie."],
            ua: ["Мітохондрія вивільняє енергію з цукру при кисні."]
          }
        },
        {
          text: {
            pl: ["Chloroplast składa cukier przy świetle. To fotosynteza."],
            ua: ["Хлоропласт складає цукор при світлі. Це фотосинтез."]
          }
        },
        {
          text: {
            pl: ["Ściana komórkowa nie uwalnia energii. Chroni komórkę albo nadaje jej kształt."],
            ua: ["Клітинна стінка не вивільняє енергію. Захищає клітину або надає їй форму."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które miejsce?", ua: "Коротке питання. Яке місце?" },
      task: {
        id: "l12-g3",
        type: "single-choice",
        question: {
          pl: "Gdzie w komórce zwierzęcej zachodzi oddychanie tlenowe?",
          ua: "Де в тваринній клітині відбувається аеробне дихання?"
        },
        options: [
          { id: "a", label: { pl: "w mitochondrium", ua: "у мітохондрії" } },
          { id: "b", label: { pl: "w chloroplaście", ua: "у хлоропласті" } },
          { id: "c", label: { pl: "w ścianie komórkowej", ua: "у клітинній стінці" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj centrum energetycznego z lekcji 6, nie miejsca fotosyntezy.",
          ua: "Шукай енергетичний центр з уроку 6, не місце фотосинтезу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplast składa cukier. Komórka zwierzęca go nie ma. Energię z cukru przy tlenie uwalnia mitochondrium.",
              ua: "Хлоропласт складає цукор. Тваринна клітина його не має. Енергію з цукру при кисні вивільняє мітохондрія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana nie uwalnia energii. W komórce zwierzęcej oddychanie tlenowe zachodzi w mitochondrium.",
              ua: "Стінка не вивільняє енергію. У тваринній клітині аеробне дихання відбувається в мітохондрії."
            }
          }
        ],
        explanation: {
          pl: "Oddychanie tlenowe w komórce zwierzęcej zachodzi w mitochondrium.",
          ua: "Аеробне дихання в тваринній клітині відбувається в мітохондрії."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Mitochondrium składa cukier", ua: "Типова помилка. Мітохондрія складає цукор" },
      claim: {
        pl: "„Mitochondrium służy do fotosyntezy.”",
        ua: "«Мітохондрія служить для фотосинтезу.»"
      },
      text: {
        pl: [
          "Fotosynteza jest w chloroplaście.",
          "Mitochondrium uwalnia energię z gotowego cukru przy tlenie."
        ],
        ua: [
          "Фотосинтез є в хлоропласті.",
          "Мітохондрія вивільняє енергію з готового цукру при кисні."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Komórka grzyba", ua: "Сам. Клітина гриба" },
      task: {
        id: "l12-p3",
        type: "single-choice",
        question: {
          pl: "Komórka grzyba nie ma chloroplastów. Gdzie uwalnia energię z glukozy przy tlenie?",
          ua: "Клітина гриба не має хлоропластів. Де вона вивільняє енергію з глюкози при кисні?"
        },
        options: [
          { id: "a", label: { pl: "w mitochondrium", ua: "у мітохондрії" } },
          { id: "b", label: { pl: "w chloroplaście, którego nie ma", ua: "у хлоропласті, якого немає" } },
          { id: "c", label: { pl: "w ścianie z chityny", ua: "у стінці з хітину" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tej komórki chloroplast nie dotyczy. Energię z glukozy przy tlenie uwalnia mitochondrium.",
              ua: "Цієї клітини хлоропласт не стосується. Енергію з глюкози при кисні вивільняє мітохондрія."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana z chityny chroni komórkę grzyba. Energii z glukozy przy tlenie nie uwalnia.",
              ua: "Стінка з хітину захищає клітину гриба. Енергії з глюкози при кисні не вивільняє."
            }
          }
        ],
        explanation: {
          pl: "Grzyb uwalnia energię z glukozy przy tlenie w mitochondrium.",
          ua: "Гриб вивільняє енергію з глюкози при кисні в мітохондрії."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Fermentacja", ua: "Поняття. Бродіння" },
      visual: vizGh("l12-fermentacja.png", {
        alt: { pl: "Drożdże w cieście i biegacz z pieczeniem mięśni", ua: "Дріжджі в тісті і бігун із печінням м’язів" },
        title: { pl: "Bez tlenu energia też powstaje, ale jej jest mniej.", ua: "Без кисню енергія теж виникає, але її менше." },
        prompt: { pl: "Plansza lekcji 12: drożdże i fermentacja mlekowa." }
      }),
      text: {
        pl: [
          [em("Fermentacja"), " to uwalnianie energii z cukru ", em("bez tlenu"), ". Energii jest mniej niż przy oddychaniu tlenowym."],
          "Drożdże są grzybami. W fermentacji alkoholowej wytwarzają dwutlenek węgla — ciasto rośnie. Powstaje też alkohol. W szkole nie pijemy produktów fermentacji. Balon z tym gazem zobaczysz na lekcji 13.",
          ["W mięśniach przy bardzo intensywnym wysiłku, gdy tlenu chwilowo brakuje, powstaje ", em("kwas mlekowy"), ". Mięśnie pieką. To fermentacja mlekowa."]
        ],
        ua: [
          [em("Бродіння"), " — це вивільнення енергії з цукру ", em("без кисню"), ". Енергії менше, ніж при аеробному диханні."],
          "Дріжджі є грибами. У спиртовому бродінні виробляють вуглекислий газ — тісто росте. Виникає також спирт. У школі не п’ємо продукти бродіння. Кульку з цим газом побачиш на уроці 13.",
          ["У м’язах при дуже інтенсивному зусиллі, коли кисню на мить бракує, виникає ", em("молочна кислота"), ". М’язи печуть. Це молочнокисле бродіння."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Ciasto i udo", ua: "Приклад. Тісто і стегно" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Drożdże bez tlenu: dwutlenek węgla i alkohol. Ciasto rośnie."],
            ua: ["Дріжджі без кисню: вуглекислий газ і спирт. Тісто росте."]
          }
        },
        {
          text: {
            pl: ["Mięsień przy braku tlenu: kwas mlekowy, nie alkohol."],
            ua: ["М’яз при нестачі кисню: молочна кислота, не спирт."]
          }
        },
        {
          text: {
            pl: ["W obu energia jest mniejsza niż przy oddychaniu tlenowym."],
            ua: ["В обох енергія менша, ніж при аеробному диханні."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czego brakuje?", ua: "Коротке питання. Чого бракує?" },
      task: {
        id: "l12-g4",
        type: "single-choice",
        question: {
          pl: "Czego fermentacja nie potrzebuje, a oddychanie tlenowe potrzebuje?",
          ua: "Чого бродіння не потребує, а аеробне дихання потребує?"
        },
        options: [
          { id: "a", label: { pl: "tlenu", ua: "кисню" } },
          { id: "b", label: { pl: "glukozy", ua: "глюкози" } },
          { id: "c", label: { pl: "światła słonecznego", ua: "сонячного світла" } }
        ],
        answer: "a",
        hint: {
          pl: "Oba sposoby biorą energię z cukru. Różni je tlen.",
          ua: "Обидва способи беруть енергію з цукру. Їх розрізняє кисень."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukoza jest potrzebna i tu, i tu. Fermentacja obchodzi się bez tlenu.",
              ua: "Глюкоза потрібна і тут, і тут. Бродіння обходиться без кисню."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Światło jest potrzebne fotosyntezie. Oddychanie tlenowe i fermentacja różnią się tlenem, nie słońcem.",
              ua: "Світло потрібне фотосинтезу. Аеробне дихання і бродіння різняться киснем, не сонцем."
            }
          }
        ],
        explanation: {
          pl: "Fermentacja uwalnia energię z cukru bez tlenu.",
          ua: "Бродіння вивільняє енергію з цукру без кисню."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Fermentacja to fotosynteza", ua: "Типова помилка. Бродіння — це фотосинтез" },
      claim: {
        pl: "„Fermentacja to fotosynteza bez liścia.”",
        ua: "«Бродіння — це фотосинтез без листка.»"
      },
      text: {
        pl: [
          "Fotosynteza składa cukier przy świetle i chlorofilu.",
          "Fermentacja uwalnia energię z gotowego cukru i nie potrzebuje tlenu."
        ],
        ua: [
          "Фотосинтез складає цукор при світлі і хлорофілі.",
          "Бродіння вивільняє енергію з готового цукру і не потребує кисню."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pieczenie mięśni", ua: "Сам. Печіння м’язів" },
      task: {
        id: "l12-p4",
        type: "single-choice",
        question: {
          pl: "Po bardzo szybkim biegu mięśnie pieką, bo tlenu chwilowo zabrakło. Co wtedy w nich powstaje?",
          ua: "Після дуже швидкого бігу м’язи печуть, бо кисню на мить забракло. Що тоді в них виникає?"
        },
        options: [
          { id: "a", label: { pl: "kwas mlekowy", ua: "молочна кислота" } },
          { id: "b", label: { pl: "alkohol, jak u drożdży w cieście", ua: "спирт, як у дріжджів у тісті" } },
          { id: "c", label: { pl: "chlorofil", ua: "хлорофіл" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Alkohol powstaje u drożdży. W mięśniu przy braku tlenu powstaje kwas mlekowy.",
              ua: "Спирт виникає в дріжджів. У м’язі при нестачі кисню виникає молочна кислота."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chlorofil jest w chloroplastach rośliny. W mięśniu przy braku tlenu powstaje kwas mlekowy.",
              ua: "Хлорофіл є в хлоропластах рослини. У м’язі при нестачі кисню виникає молочна кислота."
            }
          }
        ],
        explanation: {
          pl: "Przy chwilowym braku tlenu w mięśniach powstaje kwas mlekowy.",
          ua: "При короткій нестачі кисню в м’язах виникає молочна кислота."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Roślina też oddycha", ua: "Поняття. Рослина теж дихає" },
      visual: vizGh("l12-roslina.png", {
        alt: { pl: "Liść w dzień i w nocy", ua: "Листок удень і вночі" },
        title: { pl: "Fotosynteza i oddychanie to dwa procesy.", ua: "Фотосинтез і дихання — це два процеси." },
        prompt: { pl: "Plansza lekcji 12: liść w dzień i w nocy." }
      }),
      text: {
        pl: [
          "Komórka roślinna ma chloroplasty i mitochondria. To dwa procesy.",
          "Fotosynteza przy świetle wytwarza cukier i tlen. Oddychanie tlenowe w mitochondriach zużywa cukier i tlen przez całą dobę.",
          "W dzień fotosynteza zwykle jest silniejsza, więc w sumie liść oddaje tlen. W nocy fotosyntezy nie ma, a oddychanie zostaje."
        ],
        ua: [
          "Рослинна клітина має хлоропласти і мітохондрії. Це два процеси.",
          "Фотосинтез при світлі виробляє цукор і кисень. Аеробне дихання в мітохондріях споживає цукор і кисень цілу добу.",
          "Удень фотосинтез зазвичай сильніший, тож у сумі листок віддає кисень. Уночі фотосинтезу немає, а дихання лишається."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dzień i noc", ua: "Приклад. День і ніч" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dzień: liść składa cukier i jednocześnie mitochondria uwalniają energię."],
            ua: ["День: листок складає цукор і водночас мітохондрії вивільняють енергію."]
          }
        },
        {
          text: {
            pl: ["W sumie w dzień liść oddaje tlen, bo fotosynteza jest silniejsza."],
            ua: ["У сумі вдень листок віддає кисень, бо фотосинтез сильніший."]
          }
        },
        {
          text: {
            pl: ["Noc: nowego cukru nie ma. Zostaje oddychanie tlenowe."],
            ua: ["Ніч: нового цукру немає. Лишається аеробне дихання."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Czy roślina oddycha?", ua: "Коротке питання. Чи рослина дихає?" },
      task: {
        id: "l12-g5",
        type: "single-choice",
        question: {
          pl: "Czy roślina prowadzi oddychanie tlenowe?",
          ua: "Чи рослина веде аеробне дихання?"
        },
        options: [
          { id: "a", label: { pl: "tak, w mitochondriach, także wtedy, gdy jest fotosynteza", ua: "так, у мітохондріях, також тоді, коли є фотосинтез" } },
          { id: "b", label: { pl: "nie — roślina tylko fotosyntetyzuje", ua: "ні — рослина лише фотосинтезує" } },
          { id: "c", label: { pl: "tak, ale w chloroplastach zamiast mitochondriów", ua: "так, але в хлоропластах замість мітохондрій" } }
        ],
        answer: "a",
        hint: {
          pl: "Chloroplast składa cukier. Mitochondrium zużywa cukier przy tlenie.",
          ua: "Хлоропласт складає цукор. Мітохондрія споживає цукор при кисні."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza nie wyłącza mitochondriów. Roślina prowadzi oba procesy.",
              ua: "Фотосинтез не вимикає мітохондрії. Рослина веде обидва процеси."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chloroplast składa cukier. Oddychanie tlenowe rośliny zachodzi w mitochondrium.",
              ua: "Хлоропласт складає цукор. Аеробне дихання рослини відбувається в мітохондрії."
            }
          }
        ],
        explanation: {
          pl: "Roślina oddycha tlenowo w mitochondriach, także w czasie fotosyntezy.",
          ua: "Рослина дихає аеробно в мітохондріях, також під час фотосинтезу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Roślina nie oddycha", ua: "Типова помилка. Рослина не дихає" },
      claim: {
        pl: "„Roślina nie oddycha. Oddychają tylko zwierzęta.”",
        ua: "«Рослина не дихає. Дихають лише тварини.»"
      },
      text: {
        pl: [
          "Roślina wymienia gazy przez szparki i prowadzi oddychanie tlenowe w mitochondriach.",
          "Fotosynteza jest dodatkowym procesem przy świetle, nie zamianą oddychania."
        ],
        ua: [
          "Рослина обмінює гази через продихи і веде аеробне дихання в мітохондріях.",
          "Фотосинтез є додатковим процесом при світлі, не заміною дихання."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Liść w nocy", ua: "Сам. Листок уночі" },
      task: {
        id: "l12-p5",
        type: "single-choice",
        question: {
          pl: "Noc, brak światła. Co zostaje w liściu?",
          ua: "Ніч, немає світла. Що лишається в листку?"
        },
        options: [
          { id: "a", label: { pl: "oddychanie tlenowe w mitochondriach", ua: "аеробне дихання в мітохондріях" } },
          { id: "b", label: { pl: "fotosynteza, bo liść jest zielony", ua: "фотосинтез, бо листок зелений" } },
          { id: "c", label: { pl: "fermentacja alkoholowa, jak w cieście", ua: "спиртове бродіння, як у тісті" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie zastępuje światła. W nocy fotosyntezy nie ma. Zostaje oddychanie tlenowe.",
              ua: "Зелений колір не замінює світло. Уночі фотосинтезу немає. Лишається аеробне дихання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ciemność nie zamienia liścia w drożdże. W nocy zostaje oddychanie tlenowe w mitochondriach.",
              ua: "Темрява не перетворює листок на дріжджі. Уночі лишається аеробне дихання в мітохондріях."
            }
          }
        ],
        explanation: {
          pl: "W nocy w liściu zostaje oddychanie tlenowe.",
          ua: "Уночі в листку лишається аеробне дихання."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok równania albo które miejsce w komórce sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок рівняння або яке місце в клітині ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Dwa znaczenia", ua: "Перевірка 1. Два значення" },
      task: {
        id: "l12-t1",
        type: "single-choice",
        question: {
          pl: "Dziecko biegnie. Klatka piersiowa pracuje, a w komórkach uwalnia się energia z cukru. Które zdanie jest prawdziwe?",
          ua: "Дитина біжить. Грудна клітка працює, а в клітинах вивільняється енергія з цукру. Яке речення правдиве?"
        },
        options: [
          { id: "a", label: { pl: "praca klatki to wymiana gazów; energia z cukru w komórce to oddychanie tlenowe", ua: "робота грудної клітки — обмін газів; енергія з цукру в клітині — аеробне дихання" } },
          { id: "b", label: { pl: "oba znaczenia to tylko ruch klatki, cukier nie ma roli", ua: "обидва значення — лише рух грудної клітки, цукор не має ролі" } },
          { id: "c", label: { pl: "energia biegu powstaje w chloroplastach skóry", ua: "енергія бігу виникає в хлоропластах шкіри" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ruch klatki dostarcza tlen. Energia powstaje z cukru w komórce. To dwa znaczenia.",
              ua: "Рух грудної клітки постачає кисень. Енергія виникає з цукру в клітині. Це два значення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skóra nie ma chloroplastów. Energia biegu pochodzi z oddychania tlenowego w komórkach.",
              ua: "Шкіра не має хлоропластів. Енергія бігу походить з аеробного дихання в клітинах."
            }
          }
        ],
        explanation: {
          pl: "Klatka wymienia gazy. Energia z cukru powstaje w komórce.",
          ua: "Грудна клітка обмінює гази. Енергія з цукру виникає в клітині."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Równanie", ua: "Перевірка 2. Рівняння" },
      task: {
        id: "l12-t2",
        type: "single-choice",
        question: {
          pl: "Które równanie słowne jest oddychaniem tlenowym?",
          ua: "Яке словесне рівняння є аеробним диханням?"
        },
        options: [
          { id: "a", label: { pl: "glukoza + tlen → dwutlenek węgla + woda + energia", ua: "глюкоза + кисень → вуглекислий газ + вода + енергія" } },
          { id: "b", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "c", label: { pl: "glukoza + dwutlenek węgla → tlen + woda", ua: "глюкоза + вуглекислий газ → кисень + вода" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To fotosynteza: cukier powstaje. W oddychaniu tlenowym cukier się zużywa, a energia się uwalnia.",
              ua: "Це фотосинтез: цукор виникає. В аеробному диханні цукор споживається, а енергія вивільняється."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Po lewej mają być glukoza i tlen. Po prawej dwutlenek węgla, woda i energia.",
              ua: "Ліворуч мають бути глюкоза і кисень. Праворуч вуглекислий газ, вода і енергія."
            }
          }
        ],
        explanation: {
          pl: "Glukoza + tlen → dwutlenek węgla + woda + energia.",
          ua: "Глюкоза + кисень → вуглекислий газ + вода + енергія."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Mitochondrium", ua: "Перевірка 3. Мітохондрія" },
      task: {
        id: "l12-t3",
        type: "single-choice",
        question: {
          pl: "Gdzie w komórce roślinnej zachodzi oddychanie tlenowe?",
          ua: "Де в рослинній клітині відбувається аеробне дихання?"
        },
        options: [
          { id: "a", label: { pl: "w mitochondrium", ua: "у мітохондрії" } },
          { id: "b", label: { pl: "w chloroplaście", ua: "у хлоропласті" } },
          { id: "c", label: { pl: "tylko w szparce, bez mitochondrium", ua: "лише в продиху, без мітохондрії" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Chloroplast prowadzi fotosyntezę. Oddychanie tlenowe rośliny zachodzi w mitochondrium.",
              ua: "Хлоропласт веде фотосинтез. Аеробне дихання рослини відбувається в мітохондрії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparka wymienia gazy. Energię z cukru przy tlenie uwalnia mitochondrium.",
              ua: "Продих обмінює гази. Енергію з цукру при кисні вивільняє мітохондрія."
            }
          }
        ],
        explanation: {
          pl: "W komórce roślinnej oddychanie tlenowe zachodzi w mitochondrium.",
          ua: "У рослинній клітині аеробне дихання відбувається в мітохондрії."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Fermentacja", ua: "Перевірка 4. Бродіння" },
      task: {
        id: "l12-t4",
        type: "single-choice",
        question: {
          pl: "Które zdanie o fermentacji jest prawdziwe?",
          ua: "Яке речення про бродіння правдиве?"
        },
        options: [
          { id: "a", label: { pl: "zachodzi bez tlenu i daje mniej energii niż oddychanie tlenowe", ua: "відбувається без кисню і дає менше енергії, ніж аеробне дихання" } },
          { id: "b", label: { pl: "to fotosynteza bez chlorofilu", ua: "це фотосинтез без хлорофілу" } },
          { id: "c", label: { pl: "daje więcej energii niż oddychanie tlenowe", ua: "дає більше енергії, ніж аеробне дихання" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Fotosynteza składa cukier przy chlorofilu. Fermentacja uwalnia energię z gotowego cukru bez tlenu.",
              ua: "Фотосинтез складає цукор при хлорофілі. Бродіння вивільняє енергію з готового цукру без кисню."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez tlenu energii jest mniej, nie więcej. Więcej daje oddychanie tlenowe.",
              ua: "Без кисню енергії менше, не більше. Більше дає аеробне дихання."
            }
          }
        ],
        explanation: {
          pl: "Fermentacja zachodzi bez tlenu i daje mniej energii.",
          ua: "Бродіння відбувається без кисню і дає менше енергії."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Dwa przykłady", ua: "Перевірка 5. Два приклади" },
      task: {
        id: "l12-t5",
        type: "single-choice",
        question: {
          pl: "Które zestawienie fermentacji jest prawdziwe?",
          ua: "Яке зіставлення бродіння правдиве?"
        },
        options: [
          { id: "a", label: { pl: "drożdże — dwutlenek węgla i alkohol; mięśnie przy braku tlenu — kwas mlekowy", ua: "дріжджі — вуглекислий газ і спирт; м’язи при нестачі кисню — молочна кислота" } },
          { id: "b", label: { pl: "drożdże — kwas mlekowy w cieście; mięśnie — alkohol", ua: "дріжджі — молочна кислота в тісті; м’язи — спирт" } },
          { id: "c", label: { pl: "drożdże i mięśnie prowadzą fotosyntezę", ua: "дріжджі і м’язи ведуть фотосинтез" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Produkty są zamienione. Drożdże dają dwutlenek węgla i alkohol. W mięśniu powstaje kwas mlekowy.",
              ua: "Продукти переплутані. Дріжджі дають вуглекислий газ і спирт. У м’язі виникає молочна кислота."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Fotosynteza składa cukier w chloroplastach. Drożdże i mięśnie uwalniają energię z cukru bez tlenu.",
              ua: "Фотосинтез складає цукор у хлоропластах. Дріжджі і м’язи вивільняють енергію з цукру без кисню."
            }
          }
        ],
        explanation: {
          pl: "Drożdże: dwutlenek węgla i alkohol. Mięśnie przy braku tlenu: kwas mlekowy.",
          ua: "Дріжджі: вуглекислий газ і спирт. М’язи при нестачі кисню: молочна кислота."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l12-energia.png", {
        alt: { pl: "Energia do ruchu, wzrostu i ciepła", ua: "Енергія для руху, росту і тепла" },
        title: { pl: "Energia idzie na ruch, wzrost i ciepło ciała.", ua: "Енергія йде на рух, ріст і тепло тіла." },
        prompt: { pl: "Plansza lekcji 12: ruch, wzrost, ciepło." }
      }),
      text: {
        pl: [
          "Wymiana gazów dostarcza tlen. Oddychanie tlenowe uwalnia energię: glukoza + tlen → dwutlenek węgla + woda + energia. Miejsce: mitochondrium.",
          "Roślina też oddycha. W dzień fotosynteza zwykle jest silniejsza. W nocy zostaje oddychanie.",
          "Fermentacja: bez tlenu, mniej energii. Drożdże — dwutlenek węgla i alkohol. Mięśnie — kwas mlekowy.",
          "Energia służy do ruchu, wzrostu i ciepła ciała. Na lekcji 14 zbierzemy czynności życiowe."
        ],
        ua: [
          "Обмін газів постачає кисень. Аеробне дихання вивільняє енергію: глюкоза + кисень → вуглекислий газ + вода + енергія. Місце: мітохондрія.",
          "Рослина теж дихає. Удень фотосинтез зазвичай сильніший. Уночі лишається дихання.",
          "Бродіння: без кисню, менше енергії. Дріжджі — вуглекислий газ і спирт. М’язи — молочна кислота.",
          "Енергія служить для руху, росту і тепла тіла. На уроці 14 зберемо життєві функції."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Odróżnię wymianę gazów od oddychania tlenowego.", ua: "Відрізню обмін газів від аеробного дихання." },
        { pl: "Podam równanie słowne: glukoza + tlen → dwutlenek węgla + woda + energia.", ua: "Назву словесне рівняння: глюкоза + кисень → вуглекислий газ + вода + енергія." },
        { pl: "Wskażę mitochondrium jako miejsce uwalniania energii.", ua: "Вкажу мітохондрію як місце вивільнення енергії." },
        { pl: "Wyjaśnię, że fermentacja zachodzi bez tlenu i daje mniej energii.", ua: "Поясню, що бродіння відбувається без кисню і дає менше енергії." },
        { pl: "Podam przykład drożdży i kwasu mlekowego w mięśniach.", ua: "Наведу приклад дріжджів і молочної кислоти в м’язах." },
        { pl: "Pamiętam, że roślina też oddycha — w dzień i w nocy.", ua: "Пам’ятаю, що рослина теж дихає — вдень і вночі." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
