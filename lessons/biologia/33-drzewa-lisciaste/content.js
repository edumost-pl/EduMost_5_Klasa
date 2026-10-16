function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L33_Drzewa_lisciaste/images/";

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
      heading: { pl: "Misja: pięć drzew", ua: "Місія: п’ять дерев" },
      visual: vizGh("l33-zacznijmy.png", {
        alt: { pl: "Las liściasty z koronami drzew", ua: "Листяний ліс із кронами дерев" },
        title: { pl: "Iglaki były na lekcji 28. Dziś płaski liść.", ua: "Хвойні були на уроці 28. Сьогодні плоский листок." },
        prompt: { pl: "Plansza lekcji 33: drzewa liściaste." }
      }),
      text: {
        pl: [
          "To lekcja 33. Na lekcji 28 były sosna, świerk, jodła i modrzew. Dziś szkolna piątka z płaskim liściem: dąb, buk, brzoza, klon i lipa.",
          "To okrytonasienne z lekcji 29: mają kwiaty i owoce. Cztery grupy roślin razem są na lekcji 34.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne. Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 33. На уроці 28 були сосна, ялина, ялиця і модрина. Сьогодні шкільна п’ятірка з плоским листком: дуб, бук, береза, клен і липа.",
          "Це покритонасінні з уроку 29: мають квітки і плоди. Чотири групи рослин разом є на уроці 34.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання. Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "drzewo liściaste", ua: "листяне дерево — плоский листок, не хвоя" },
        { pl: "dąb", ua: "дуб — лопатевий листок і жолудь" },
        { pl: "żołądź", ua: "жолудь — плід дуба в плюсці" },
        { pl: "buk", ua: "бук — гладка сіра кора" },
        { pl: "brzoza", ua: "береза — біла кора з чорними рисками" },
        { pl: "klon", ua: "клен — зубчастий листок і пара крилець" },
        { pl: "lipa", ua: "липа — серцеподібний листок" },
        { pl: "drewno", ua: "деревина — разом із поживою і киснем" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dąb", ua: "Поняття. Дуб" },
      visual: vizGh("l33-dab.png", {
        alt: { pl: "Klapowany liść dębu i żołądź w miseczce", ua: "Лопатевий листок дуба і жолудь у плюсці" },
        title: { pl: "Zaokrąglone zatoki. Żołądź w miseczce.", ua: "Заокруглені вирізи. Жолудь у плюсці." },
        prompt: { pl: "Plansza lekcji 33: dąb." }
      }),
      text: {
        pl: [
          ["", em("Dąb"), " ma liść ", em("klapowany"), ". Zatoki są zaokrąglone. Owoc to ", em("żołądź"), " w miseczce."],
          "Kora starych dębów jest gruba i spękana. Korona bywa szeroka.",
          "Klon też ma klapy, ale brzeg liścia jest ząbkowany, a owoc to para skrzydełek."
        ],
        ua: [
          ["", em("Дуб"), " має листок ", em("лопатевий"), ". Вирізи заокруглені. Плід — це ", em("жолудь"), " у плюсці."],
          "Кора старих дубів товста і потріскана. Крона буває широка.",
          "Клен теж має лопаті, але край листка зубчастий, а плід — це пара крилець."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Liść i żołądź", ua: "Приклад. Листок і жолудь" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Liść ma zaokrąglone zatoki. To liść dębu."],
            ua: ["Листок має заокруглені вирізи. Це листок дуба."]
          }
        },
        {
          text: {
            pl: ["Żołądź siedzi w miseczce. To owoc. Szyszka trzyma nasiono na łusce."],
            ua: ["Жолудь сидить у плюсці. Це плід. Шишка тримає насінину на лусці."]
          }
        },
        {
          text: {
            pl: ["Para skrzydełek należy do klonu. Żołędzia przy nich nie ma."],
            ua: ["Пара крилець належить клену. Жолудя при них немає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dąb z bliska", ua: "Коротке питання. Дуб зблизька" },
      task: {
        id: "l33-g1",
        type: "single-choice",
        question: {
          pl: "Po czym poznasz dąb?",
          ua: "По чому впізнаєш дуб?"
        },
        options: [
          { id: "a", label: { pl: "klapowany liść z zaokrąglonymi zatokami i żołądź w miseczce", ua: "лопатевий листок із заокругленими вирізами і жолудь у плюсці" } },
          { id: "b", label: { pl: "dwie igły w pęczku", ua: "дві хвоїнки в пучку" } },
          { id: "c", label: { pl: "biała kora z czarnymi kreskami", ua: "біла кора з чорними рисками" } }
        ],
        answer: "a",
        hint: {
          pl: "Zaokrąglone zatoki i żołądź w miseczce.",
          ua: "Заокруглені вирізи і жолудь у плюсці."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dwie igły w pęczku to sosna z lekcji 28. Wróć do dębu: liść ma zaokrąglone zatoki, a owocem jest żołądź w miseczce.",
              ua: "Дві хвоїнки в пучку — це сосна з уроку 28. Повернися до дуба: листок має заокруглені вирізи, а плодом є жолудь у плюсці."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Biała kora z czarnymi kreskami to brzoza. Dąb poznasz po klapowanym liściu i po żołędzi w miseczce.",
              ua: "Біла кора з чорними рисками — це береза. Дуб упізнаєш по лопатевому листку і по жолудю в плюсці."
            }
          }
        ],
        explanation: {
          pl: "Dąb ma zaokrąglone zatoki i żołądź w miseczce.",
          ua: "Дуб має заокруглені вирізи і жолудь у плюсці."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każda klapa to klon", ua: "Типова помилка. Кожна лопать — це клен" },
      claim: {
        pl: "„Każdy klapowany liść jest klonem.”",
        ua: "«Кожен лопатевий листок є кленом.»"
      },
      text: {
        pl: [
          "Klon ma ząbkowany brzeg i parę skrzydełek.",
          "Dąb ma zaokrąglone zatoki. Jego owocem jest żołądź w miseczce."
        ],
        ua: [
          "Клен має зубчастий край і пару крилець.",
          "Дуб має заокруглені вирізи. Його плодом є жолудь у плюсці."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Owoc w czapce", ua: "Сам. Плід у шапочці" },
      task: {
        id: "l33-p1",
        type: "single-choice",
        question: {
          pl: "Na ścieżce leży owoc w miseczce, a obok liść z zaokrąglonymi zatokami. Uczeń mówi, że to szyszka świerka, bo owoc ma czapkę. Co poprawić?",
          ua: "На стежці лежить плід у плюсці, а поруч листок із заокругленими вирізами. Учень каже, що це шишка ялини, бо плід має шапочку. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "miseczka, żołądź i zaokrąglone zatoki to dąb; szyszka trzyma nasiono na łusce", ua: "плюска, жолудь і заокруглені вирізи — це дуб; шишка тримає насінину на лусці" } },
          { id: "b", label: { pl: "tak — każda czapka na owocu jest łuską szyszki", ua: "так — кожна шапочка на плоді є лускою шишки" } },
          { id: "c", label: { pl: "tak — to buk, bo owoc leży pod drzewem", ua: "так — це бук, бо плід лежить під деревом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Łuska szyszki zostawia nasiono odkryte. Wróć do owocu dębu: żołądź siedzi w miseczce, a liść ma zaokrąglone zatoki.",
              ua: "Луска шишки лишає насінину відкритою. Повернися до плоду дуба: жолудь сидить у плюсці, а листок має заокруглені вирізи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sam fakt, że owoc leży pod drzewem, nie nazywa gatunku. Buk ma gładką szarą korę. Tu są żołądź w miseczce i zaokrąglone zatoki, więc to dąb.",
              ua: "Сам факт, що плід лежить під деревом, не називає виду. Бук має гладку сіру кору. Тут жолудь у плюсці і заокруглені вирізи, тож це дуб."
            }
          }
        ],
        explanation: {
          pl: "Żołądź w miseczce i zaokrąglone zatoki to dąb.",
          ua: "Жолудь у плюсці і заокруглені вирізи — це дуб."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Buk", ua: "Поняття. Бук" },
      visual: vizGh("l33-buk.png", {
        alt: { pl: "Gładka szara kora buka i jajowaty liść", ua: "Гладка сіра кора бука і яйцеподібний листок" },
        title: { pl: "Z daleka: gładko i szaro.", ua: "Здалеку: гладко і сіро." },
        prompt: { pl: "Plansza lekcji 33: buk." }
      }),
      text: {
        pl: [
          ["", em("Buk"), " poznasz z daleka po ", em("gładkiej, szarej korze"), ". Wygląda jak słoniowa skóra. Kory nie zrywamy."],
          "Liście są jajowate, a brzeg prawie cały. Jesienią brązowieją. W kolczastej okrywie siedzą orzeszki, czyli bukiew. To owoc, nie szyszka.",
          "Brzoza ma korę białą, z czarnymi kreskami."
        ],
        ua: [
          ["", em("Бук"), " упізнаєш здалеку по ", em("гладкій сірій корі"), ". Виглядає як слонова шкіра. Кору не зриваємо."],
          "Листки яйцеподібні, а край майже суцільний. Восени буріють. У колючій обгортці сидять горішки. Це плід, не шишка.",
          "Береза має кору білу, з чорними рисками."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pień z daleka", ua: "Приклад. Стовбур здалеку" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Z daleka pień jest gładki i szary. To buk. Kora zostaje na drzewie."],
            ua: ["Здалеку стовбур гладкий і сірий. Це бук. Кора лишається на дереві."]
          }
        },
        {
          text: {
            pl: ["Liść jest jajowaty. Brzeg jest prawie cały."],
            ua: ["Листок яйцеподібний. Край майже суцільний."]
          }
        },
        {
          text: {
            pl: ["W kolczastej okrywie siedzą orzeszki. To owoc buka, nie szyszka."],
            ua: ["У колючій обгортці сидять горішки. Це плід бука, не шишка."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kora z daleka", ua: "Коротке питання. Кора здалеку" },
      task: {
        id: "l33-g2",
        type: "single-choice",
        question: {
          pl: "Jak rozpoznasz buk z daleka?",
          ua: "Як розпізнаєш бук здалеку?"
        },
        options: [
          { id: "a", label: { pl: "po gładkiej szarej korze", ua: "по гладкій сірій корі" } },
          { id: "b", label: { pl: "po białej korze z czarnymi kreskami", ua: "по білій корі з чорними рисками" } },
          { id: "c", label: { pl: "po żołędziu w miseczce", ua: "по жолудю в плюсці" } }
        ],
        answer: "a",
        hint: {
          pl: "Pień gładki i szary. Kora zostaje na drzewie.",
          ua: "Стовбур гладкий і сірий. Кора лишається на дереві."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Biała kora z czarnymi kreskami to brzoza. Wróć do buka: z daleka pień jest gładki i szary.",
              ua: "Біла кора з чорними рисками — це береза. Повернися до бука: здалеку стовбур гладкий і сірий."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Żołądź w miseczce to owoc dębu. Buk poznasz po gładkiej szarej korze. Kory nie zrywamy.",
              ua: "Жолудь у плюсці — це плід дуба. Бук упізнаєш по гладкій сірій корі. Кору не зриваємо."
            }
          }
        ],
        explanation: {
          pl: "Buk ma gładką szarą korę. Kora zostaje na drzewie.",
          ua: "Бук має гладку сіру кору. Кора лишається на дереві."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Brudna brzoza", ua: "Типова помилка. Брудна береза" },
      claim: {
        pl: "„Szara gładka kora to brudna brzoza.”",
        ua: "«Сіра гладка кора — це брудна береза.»"
      },
      text: {
        pl: [
          "Brzoza jest biała i ma czarne kreski.",
          "Buk jest szary i gładki. Kory nie zrywamy, żeby sprawdzić kolor pod spodem."
        ],
        ua: [
          "Береза біла і має чорні риски.",
          "Бук сірий і гладкий. Кору не зриваємо, щоб перевірити колір під нею."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Pas kory", ua: "Сам. Смуга кори" },
      task: {
        id: "l33-p2",
        type: "single-choice",
        question: {
          pl: "Uczeń chce zdjąć pas gładkiej szarej kory na pamiątkę. Mówi, że to brzoza, bo kora łatwo schodzi. Co poprawić?",
          ua: "Учень хоче зняти смугу гладкої сірої кори на пам’ять. Каже, що це береза, бо кора легко сходить. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "gładka szara kora to buk i zostaje na drzewie; biała kora z kreskami to brzoza, jej też nie obdzieramy", ua: "гладка сіра кора — це бук і лишається на дереві; біла кора з рисками — це береза, її теж не обдираємо" } },
          { id: "b", label: { pl: "tak — szary pień wolno obrać, bo kora i tak jest gładka", ua: "так — сірий стовбур можна обдерти, бо кора і так гладка" } },
          { id: "c", label: { pl: "tak — gładka kora to igła sosny", ua: "так — гладка кора це хвоя сосни" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gładkość nie jest pozwoleniem. Wróć do buka: kora jest szara i zostaje na żywym drzewie. Brzozy też nie obdzieramy.",
              ua: "Гладкість не є дозволом. Повернися до бука: кора сіра і лишається на живому дереві. Березу теж не обдираємо."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igła jest liściem sosny z lekcji 28. Gładki szary pień to buk. Kora zostaje na drzewie.",
              ua: "Хвоя є листком сосни з уроку 28. Гладкий сірий стовбур — це бук. Кора лишається на дереві."
            }
          }
        ],
        explanation: {
          pl: "Gładka szara kora to buk. Zostaje na drzewie.",
          ua: "Гладка сіра кора — це бук. Лишається на дереві."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Brzoza", ua: "Поняття. Береза" },
      visual: vizGh("l33-brzoza.png", {
        alt: { pl: "Biała kora brzozy z czarnymi kreskami", ua: "Біла кора берези з чорними рисками" },
        title: { pl: "Biały pień. Czarne kreski.", ua: "Білий стовбур. Чорні риски." },
        prompt: { pl: "Plansza lekcji 33: brzoza." }
      }),
      text: {
        pl: [
          ["", em("Brzoza"), " ma ", em("białą korę"), " z czarnymi kreskami. Gałązki często zwisają. Liście są drobne i ząbkowane."],
          "Kory żywego drzewa nie obdzieramy na pamiątkę.",
          "Buk jest szary i gładki. Sosna ma igły, nie biały pień."
        ],
        ua: [
          ["", em("Береза"), " має ", em("білу кору"), " з чорними рисками. Гілки часто звисають. Листки дрібні і зубчасті."],
          "Кору живого дерева не обдираємо на пам’ять.",
          "Бук сірий і гладкий. Сосна має хвою, не білий стовбур."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Biel i kreski", ua: "Приклад. Білий колір і риски" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pień jest biały i ma czarne kreski. To brzoza."],
            ua: ["Стовбур білий і має чорні риски. Це береза."]
          }
        },
        {
          text: {
            pl: ["Gałązki często zwisają. Liście są drobne i ząbkowane."],
            ua: ["Гілки часто звисають. Листки дрібні і зубчасті."]
          }
        },
        {
          text: {
            pl: ["Kora zostaje na żywym drzewie. Pamiątka jej nie potrzebuje."],
            ua: ["Кора лишається на живому дереві. Пам’ятка її не потребує."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Biały pień", ua: "Коротке питання. Білий стовбур" },
      task: {
        id: "l33-g3",
        type: "single-choice",
        question: {
          pl: "Biała kora z czarnymi kreskami to cecha:",
          ua: "Біла кора з чорними рисками — ознака:"
        },
        options: [
          { id: "a", label: { pl: "brzozy", ua: "берези" } },
          { id: "b", label: { pl: "buka", ua: "бука" } },
          { id: "c", label: { pl: "świerka", ua: "ялини" } }
        ],
        answer: "a",
        hint: {
          pl: "Biel i czarne kreski. Kora zostaje na drzewie.",
          ua: "Білий колір і чорні риски. Кора лишається на дереві."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Buk jest szary i gładki. Wróć do brzozy: kora jest biała i ma czarne kreski.",
              ua: "Бук сірий і гладкий. Повернися до берези: кора біла і має чорні риски."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Świerk ma igły, a szyszki wiszą. To lekcja 28. Biała kora z czarnymi kreskami należy do brzozy.",
              ua: "Ялина має хвою, а шишки висять. Це урок 28. Біла кора з чорними рисками належить березі."
            }
          }
        ],
        explanation: {
          pl: "Brzoza ma białą korę z czarnymi kreskami.",
          ua: "Береза має білу кору з чорними рисками."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kora na pamiątkę", ua: "Типова помилка. Кора на пам’ять" },
      claim: {
        pl: "„Białą korę wolno zdjąć na pamiątkę. Drzewo i tak żyje.”",
        ua: "«Білу кору можна зняти на пам’ять. Дерево і так живе.»"
      },
      text: {
        pl: [
          "Kory żywego drzewa nie obdzieramy.",
          "Biała kora z czarnymi kreskami zostaje na brzozie. Po niej właśnie ją poznajesz."
        ],
        ua: [
          "Кору живого дерева не обдираємо.",
          "Біла кора з чорними рисками лишається на березі. По ній її саме і впізнаєш."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zwisające gałązki", ua: "Сам. Звислі гілки" },
      task: {
        id: "l33-p3",
        type: "single-choice",
        question: {
          pl: "Pień jest biały, widać czarne kreski, gałązki zwisają, a liście są drobne i ząbkowane. Uczeń mówi, że to świerk, bo gałązki zwisają. Co poprawić?",
          ua: "Стовбур білий, видно чорні риски, гілки звисають, а листки дрібні і зубчасті. Учень каже, що це ялина, бо гілки звисають. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "biała kora, czarne kreski i drobny liść to brzoza; świerk ma igły", ua: "біла кора, чорні риски і дрібний листок — це береза; ялина має хвою" } },
          { id: "b", label: { pl: "tak — wszystko, co zwisa, jest świerkiem", ua: "так — усе, що звисає, є ялиною" } },
          { id: "c", label: { pl: "tak — drobny liść jest igłą, bo jest mały", ua: "так — дрібний листок є хвоєю, бо малий" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "U świerka wiszą szyszki, a liśćmi są igły. To lekcja 28. Wróć do brzozy: biała kora, czarne kreski, gałązki często zwisają.",
              ua: "У ялини висять шишки, а листками є хвоя. Це урок 28. Повернися до берези: біла кора, чорні риски, гілки часто звисають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mały liść nadal jest płaskim liściem. Igła jest liściem świerka. Tu pień jest biały i ma czarne kreski, więc to brzoza.",
              ua: "Малий листок усе одно є плоским листком. Хвоя є листком ялини. Тут стовбур білий і має чорні риски, тож це береза."
            }
          }
        ],
        explanation: {
          pl: "Biała kora z czarnymi kreskami to brzoza. Świerk ma igły.",
          ua: "Біла кора з чорними рисками — це береза. Ялина має хвою."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Klon i lipa", ua: "Поняття. Клен і липа" },
      visual: vizGh("l33-klon-lipa.png", {
        alt: { pl: "Liść i skrzydełka klonu obok sercowatego liścia lipy", ua: "Листок і крильця клена поряд із серцеподібним листком липи" },
        title: { pl: "Ząbki i skrzydełka. Liść jak serce.", ua: "Зубці і крильця. Листок як серце." },
        prompt: { pl: "Plansza lekcji 33: klon i lipa." }
      }),
      text: {
        pl: [
          ["", em("Klon"), " ma liść klapowany o ząbkowanym brzegu. Owocem jest para ", em("skrzydełek"), ". Wiatr je niesie, jak na lekcji 31. Dziś po nich poznajesz drzewo."],
          ["", em("Lipa"), " ma liść ", em("sercowaty"), ". U nasady często jest nierówny. Kwiaty pachną. Z nektaru bywa miód lipowy. Pręcików nie rozbieramy."],
          "Dąb ma zaokrąglone zatoki i żołądź. Klon ma ząbki i skrzydełka."
        ],
        ua: [
          ["", em("Клен"), " має лопатевий листок із зубчастим краєм. Плодом є пара ", em("крилець"), ". Вітер їх несе, як на уроці 31. Сьогодні по них упізнаєш дерево."],
          ["", em("Липа"), " має листок ", em("серцеподібний"), ". Біля основи він часто нерівний. Квітки пахнуть. З нектару буває липовий мед. Тичинки не розбираємо."],
          "Дуб має заокруглені вирізи і жолудь. Клен має зубці і крильця."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwa liście", ua: "Приклад. Два листки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Klapy są ząbkowane, a obok leży para skrzydełek. To klon."],
            ua: ["Лопаті зубчасті, а поруч лежить пара крилець. Це клен."]
          }
        },
        {
          text: {
            pl: ["Liść jest jak serce. U nasady często jest nierówny. To lipa."],
            ua: ["Листок як серце. Біля основи часто нерівний. Це липа."]
          }
        },
        {
          text: {
            pl: ["Żołądź i zaokrąglone zatoki zostają przy dębie."],
            ua: ["Жолудь і заокруглені вирізи лишаються при дубі."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Para drzew", ua: "Коротке питання. Пара дерев" },
      task: {
        id: "l33-g4",
        type: "single-choice",
        question: {
          pl: "Jak rozpoznasz klon i lipę?",
          ua: "Як розпізнаєш клен і липу?"
        },
        options: [
          { id: "a", label: { pl: "klon — ząbkowany liść i skrzydełka; lipa — liść sercowaty", ua: "клен — зубчастий листок і крильця; липа — серцеподібний листок" } },
          { id: "b", label: { pl: "oba mają żołędzie w miseczce", ua: "обидва мають жолуді в плюсці" } },
          { id: "c", label: { pl: "oba mają igły w pęczkach", ua: "обидва мають хвою в пучках" } }
        ],
        answer: "a",
        hint: {
          pl: "Klon: ząbki i skrzydełka. Lipa: liść jak serce.",
          ua: "Клен: зубці і крильця. Липа: листок як серце."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żołądź w miseczce jest owocem dębu. Wróć do pary: klon ma ząbkowany liść i skrzydełka, lipa ma liść sercowaty.",
              ua: "Жолудь у плюсці є плодом дуба. Повернися до пари: клен має зубчастий листок і крильця, липа має серцеподібний листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Igły w pęczku to sosna z lekcji 28. Klon poznasz po skrzydełkach, lipę po sercowatym liściu.",
              ua: "Хвоя в пучку — це сосна з уроку 28. Клен упізнаєш по крильцях, липу по серцеподібному листку."
            }
          }
        ],
        explanation: {
          pl: "Klon ma skrzydełka i ząbkowany liść. Lipa ma liść sercowaty.",
          ua: "Клен має крильця і зубчастий листок. Липа має серцеподібний листок."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ząbki to dąb", ua: "Типова помилка. Зубці — це дуб" },
      claim: {
        pl: "„Liść z klapami to dąb, nawet gdy brzeg jest ząbkowany i obok leżą skrzydełka.”",
        ua: "«Листок із лопатями — це дуб, навіть коли край зубчастий і поруч лежать крильця.»"
      },
      text: {
        pl: [
          "Ząbkowany brzeg i para skrzydełek to klon.",
          "Dąb ma zaokrąglone zatoki i żołądź w miseczce."
        ],
        ua: [
          "Зубчастий край і пара крилець — це клен.",
          "Дуб має заокруглені вирізи і жолудь у плюсці."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Liść jak serce", ua: "Сам. Листок як серце" },
      task: {
        id: "l33-p4",
        type: "single-choice",
        question: {
          pl: "Liść jest sercowaty, u nasady nierówny, a kwiaty pachną. Uczeń mówi, że to dąb, bo liść jest duży i płaski. Co poprawić?",
          ua: "Листок серцеподібний, біля основи нерівний, а квітки пахнуть. Учень каже, що це дуб, бо листок великий і плоский. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "sercowaty liść to lipa; dąb ma klapy i żołądź", ua: "серцеподібний листок — це липа; дуб має лопаті і жолудь" } },
          { id: "b", label: { pl: "tak — każdy duży płaski liść jest dębem", ua: "так — кожен великий плоский листок є дубом" } },
          { id: "c", label: { pl: "tak — pachnący kwiat jest szyszką", ua: "так — запашна квітка є шишкою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Duży płaski liść mają tu różne drzewa. Wróć do kształtu: serce, często nierówne u nasady, to lipa. Dąb ma zaokrąglone zatoki i żołądź.",
              ua: "Великий плоский листок мають тут різні дерева. Повернися до форми: серце, часто нерівне біля основи, — це липа. Дуб має заокруглені вирізи і жолудь."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka nie jest kwiatem. Pachnące kwiaty lipy zostawiasz na drzewie. Liść sercowaty mówi, że to lipa.",
              ua: "Шишка не є квіткою. Запашні квітки липи лишаєш на дереві. Серцеподібний листок каже, що це липа."
            }
          }
        ],
        explanation: {
          pl: "Sercowaty liść to lipa. Dąb ma żołądź i zaokrąglone zatoki.",
          ua: "Серцеподібний листок — це липа. Дуб має жолудь і заокруглені вирізи."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pokarm, tlen, drewno", ua: "Поняття. Пожива, кисень, деревина" },
      visual: vizGh("l33-znaczenie.png", {
        alt: { pl: "Pokarm, las liściasty i belki drewna", ua: "Пожива, листяний ліс і балки деревини" },
        title: { pl: "Jemy, oddychamy, budujemy.", ua: "Їмо, дихаємо, будуємо." },
        prompt: { pl: "Plansza lekcji 33: znaczenie." }
      }),
      text: {
        pl: [
          ["Okrytonasienne dają ", em("pokarm"), ": owoce, warzywa, zboża. Drzewa liściaste dają też ", em("drewno"), " na meble i budulec."],
          ["", em("Tlen"), " jest z fotosyntezy, jak na lekcji 9. Las liściasty trzyma glebę i daje schronienie."],
          "Trzy słowa z paszportu: pokarm, tlen, drewno. Żywica i szyszki zostały przy iglakach."
        ],
        ua: [
          ["Покритонасінні дають ", em("поживу"), ": плоди, овочі, злаки. Листяні дерева дають також ", em("деревину"), " на меблі і будівництво."],
          ["", em("Кисень"), " є з фотосинтезу, як на уроці 9. Листяний ліс тримає ґрунт і дає сховок."],
          "Три слова з паспорта: пожива, кисень, деревина. Живиця і шишки лишилися при хвойних."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kadry", ua: "Приклад. Три кадри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Jabłko, kłos i warzywo to pokarm."],
            ua: ["Яблуко, колос і овоч — це пожива."]
          }
        },
        {
          text: {
            pl: ["Deski i belki to drewno z drzewa liściastego."],
            ua: ["Дошки і балки — це деревина з листяного дерева."]
          }
        },
        {
          text: {
            pl: ["Las liściasty daje tlen z fotosyntezy. Żywica sosny jest z lekcji 28."],
            ua: ["Листяний ліс дає кисень із фотосинтезу. Живиця сосни є з уроку 28."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Trzy słowa", ua: "Коротке питання. Три слова" },
      task: {
        id: "l33-g5",
        type: "single-choice",
        question: {
          pl: "Jakie znaczenie okrytonasiennych podasz z tej lekcji?",
          ua: "Яке значення покритонасінних назвеш із цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "pokarm, tlen i drewno", ua: "пожива, кисень і деревина" } },
          { id: "b", label: { pl: "tylko szyszki i żywicę", ua: "лише шишки і живицю" } },
          { id: "c", label: { pl: "zarodniki z puszki mchu", ua: "спори з коробочки моху" } }
        ],
        answer: "a",
        hint: {
          pl: "Pokarm, tlen, drewno.",
          ua: "Пожива, кисень, деревина."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszki i żywica są u iglaków, lekcja 28. Wróć do trzech słów tej lekcji: pokarm, tlen i drewno.",
              ua: "Шишки і живиця є в хвойних, урок 28. Повернися до трьох слів цього уроку: пожива, кисень і деревина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Z puszki mchu wylatują zarodniki. To lekcja 25. Okrytonasienne z tej lekcji dają pokarm, tlen i drewno.",
              ua: "З коробочки моху вилітають спори. Це урок 25. Покритонасінні з цього уроку дають поживу, кисень і деревину."
            }
          }
        ],
        explanation: {
          pl: "Z tej lekcji: pokarm, tlen i drewno.",
          ua: "З цього уроку: пожива, кисень і деревина."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Tlen tylko zimą", ua: "Типова помилка. Кисень лише взимку" },
      claim: {
        pl: "„Tlen dają tylko iglaki, bo zimą zostają zielone.”",
        ua: "«Кисень дають лише хвойні, бо взимку лишаються зеленими.»"
      },
      text: {
        pl: [
          "Tlen jest z fotosyntezy, jak na lekcji 9. Las liściasty też go daje.",
          "Iglaki znasz z lekcji 28. Dziś do znaczenia dochodzą pokarm i drewno tej grupy."
        ],
        ua: [
          "Кисень є з фотосинтезу, як на уроці 9. Листяний ліс теж його дає.",
          "Хвойні знаєш з уроку 28. Сьогодні до значення доходять пожива і деревина цієї групи."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jabłko i deska", ua: "Сам. Яблуко і дошка" },
      task: {
        id: "l33-p5",
        type: "single-choice",
        question: {
          pl: "Na stole leżą jabłko i deska z pnia drzewa liściastego. Uczeń mówi, że oba są szyszkami, bo pochodzą z drzewa. Co poprawić?",
          ua: "На столі лежать яблуко і дошка зі стовбура листяного дерева. Учень каже, що обидва є шишками, бо походять із дерева. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "jabłko to pokarm, deska to drewno; szyszka trzyma nasiono na łusce", ua: "яблуко — це пожива, дошка — це деревина; шишка тримає насінину на лусці" } },
          { id: "b", label: { pl: "tak — wszystko, co jest z drzewa, jest szyszką", ua: "так — усе, що є з дерева, є шишкою" } },
          { id: "c", label: { pl: "tak — deska to pasek kory brzozy, więc wolno ją zdjąć", ua: "так — дошка це смужка кори берези, тож її можна зняти" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka jest u nagonasiennych i trzyma nasiono na łusce. Wróć do trzech słów: jabłko jest pokarmem, deska jest drewnem.",
              ua: "Шишка є в голонасінних і тримає насінину на лусці. Повернися до трьох слів: яблуко є поживою, дошка є деревиною."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Deska jest drewnem, nie paskiem kory. Kory żywej brzozy nie obdzieramy. Jabłko zostaje pokarmem.",
              ua: "Дошка є деревиною, не смужкою кори. Кору живої берези не обдираємо. Яблуко лишається поживою."
            }
          }
        ],
        explanation: {
          pl: "Jabłko to pokarm. Deska to drewno.",
          ua: "Яблуко — це пожива. Дошка — це деревина."
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
      heading: { pl: "Sprawdzian 1. Stary pień", ua: "Перевірка 1. Старий стовбур" },
      task: {
        id: "l33-t1",
        type: "single-choice",
        question: {
          pl: "Stary pień ma grubą spękaną korę, korona jest szeroka, a pod drzewem leżą żołędzie w miseczkach. Uczeń mówi, że to buk, bo drzewo jest duże. Co pasuje do lekcji?",
          ua: "Старий стовбур має товсту потріскану кору, крона широка, а під деревом лежать жолуді в плюсках. Учень каже, що це бук, бо дерево велике. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "żołądź i gruba spękana kora pasują do dębu; buk ma korę gładką i szarą", ua: "жолудь і товста потріскана кора пасують до дуба; бук має кору гладку і сіру" } },
          { id: "b", label: { pl: "tak — każde duże drzewo z płaskim liściem jest bukiem", ua: "так — кожне велике дерево з плоским листком є буком" } },
          { id: "c", label: { pl: "tak — spękana kora znaczy, że żołądź jest szyszką sosny", ua: "так — потріскана кора означає, що жолудь є шишкою сосни" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wielkość drzewa nie nazywa gatunku. Wróć do dębu: żołądź w miseczce i gruba spękana kora. Buk jest gładki i szary.",
              ua: "Розмір дерева не називає виду. Повернися до дуба: жолудь у плюсці і товста потріскана кора. Бук гладкий і сірий."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka sosny trzyma nasiono na łusce. Żołądź w miseczce jest owocem dębu. Spękana kora starego pnia też do niego pasuje.",
              ua: "Шишка сосни тримає насінину на лусці. Жолудь у плюсці є плодом дуба. Потріскана кора старого стовбура теж йому пасує."
            }
          }
        ],
        explanation: {
          pl: "Żołądź i gruba spękana kora to dąb. Buk jest gładki i szary.",
          ua: "Жолудь і товста потріскана кора — це дуб. Бук гладкий і сірий."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Kolczasta okrywa", ua: "Перевірка 2. Колюча обгортка" },
      task: {
        id: "l33-t2",
        type: "single-choice",
        question: {
          pl: "Liść jest jajowaty, brzeg prawie cały, a w kolczastej okrywie siedzą orzeszki. Uczeń mówi, że to dąb, bo owoc leży pod drzewem liściastym. Co pasuje do lekcji?",
          ua: "Листок яйцеподібний, край майже суцільний, а в колючій обгортці сидять горішки. Учень каже, що це дуб, бо плід лежить під листяним деревом. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "jajowaty liść i orzeszki w kolczastej okrywie to buk; dąb ma żołądź i klapowany liść", ua: "яйцеподібний листок і горішки в колючій обгортці — це бук; дуб має жолудь і лопатевий листок" } },
          { id: "b", label: { pl: "tak — każdy owoc pod drzewem jest żołędziem", ua: "так — кожен плід під деревом є жолудем" } },
          { id: "c", label: { pl: "tak — kolczasta okrywa to szyszka jodły", ua: "так — колюча обгортка це шишка ялиці" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Żołądź dębu siedzi w miseczce, a liść ma zatoki. Wróć do buka: liść jajowaty i orzeszki w kolczastej okrywie. Z daleka pień jest gładki i szary.",
              ua: "Жолудь дуба сидить у плюсці, а листок має вирізи. Повернися до бука: листок яйцеподібний і горішки в колючій обгортці. Здалеку стовбур гладкий і сірий."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyszka jodły stoi na gałęzi i rozsypuje się. To lekcja 28. Kolczasta okrywa z orzeszkami jest owocem buka.",
              ua: "Шишка ялиці стоїть на гілці і розсипається. Це урок 28. Колюча обгортка з горішками є плодом бука."
            }
          }
        ],
        explanation: {
          pl: "Jajowaty liść i orzeszki w kolczastej okrywie to buk.",
          ua: "Яйцеподібний листок і горішки в колючій обгортці — це бук."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Gładki biały pień", ua: "Перевірка 3. Гладкий білий стовбур" },
      task: {
        id: "l33-t3",
        type: "single-choice",
        question: {
          pl: "Pień jest biały i ma czarne kreski. Uczeń mówi, że to buk, bo kora wygląda gładko. Co pasuje do lekcji?",
          ua: "Стовбур білий і має чорні риски. Учень каже, що це бук, бо кора виглядає гладкою. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "biała kora z czarnymi kreskami to brzoza; buk jest szary", ua: "біла кора з чорними рисками — це береза; бук сірий" } },
          { id: "b", label: { pl: "tak — każda gładka kora jest bukiem", ua: "так — кожна гладка кора є буком" } },
          { id: "c", label: { pl: "tak — biały pień to sosna po deszczu", ua: "так — білий стовбур це сосна після дощу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gładkość sama nie wystarcza. Buk jest szary. Wróć do brzozy: kora jest biała i ma czarne kreski. Zostaje na drzewie.",
              ua: "Самої гладкості не досить. Бук сірий. Повернися до берези: кора біла і має чорні риски. Лишається на дереві."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sosna ma igły w pęczkach i korę, która łuszczy się płatami. To lekcja 28. Biały pień z czarnymi kreskami to brzoza.",
              ua: "Сосна має хвою в пучках і кору, що лущиться пластинками. Це урок 28. Білий стовбур із чорними рисками — це береза."
            }
          }
        ],
        explanation: {
          pl: "Biała kora z czarnymi kreskami to brzoza. Buk jest szary.",
          ua: "Біла кора з чорними рисками — це береза. Бук сірий."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Para na ścieżce", ua: "Перевірка 4. Пара на стежці" },
      task: {
        id: "l33-t4",
        type: "single-choice",
        question: {
          pl: "Na ścieżce leży para skrzydełek, a liść ma ząbkowane klapy. Uczeń mówi, że to haczyki łopianu, bo owoc jedzie dalej od drzewa. Co pasuje do lekcji?",
          ua: "На стежці лежить пара крилець, а листок має зубчасті лопаті. Учень каже, що це гачки лопуха, бо плід їде далі від дерева. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "para skrzydełek i ząbkowany liść to klon; haczyki są u łopianu, a sercowaty liść u lipy", ua: "пара крилець і зубчастий листок — це клен; гачки є в лопуха, а серцеподібний листок у липи" } },
          { id: "b", label: { pl: "tak — skrzydełko, które leci, jest haczykiem", ua: "так — крильце, що летить, є гачком" } },
          { id: "c", label: { pl: "tak — każdy owoc drzewa liściastego jest żołędziem", ua: "так — кожен плід листяного дерева є жолудем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Haczyki łopianu czepiają się sierści. To lekcja 31. Para skrzydełek i ząbkowany liść to klon. Lipa ma liść sercowaty.",
              ua: "Гачки лопуха чіпляються до шерсті. Це урок 31. Пара крилець і зубчастий листок — це клен. Липа має серцеподібний листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Żołądź jest owocem dębu i siedzi w miseczce. Tu leży para skrzydełek, a liść jest ząbkowany. To klon.",
              ua: "Жолудь є плодом дуба і сидить у плюсці. Тут лежить пара крилець, а листок зубчастий. Це клен."
            }
          }
        ],
        explanation: {
          pl: "Ząbkowany liść i para skrzydełek to klon. Lipa ma liść sercowaty.",
          ua: "Зубчастий листок і пара крилець — це клен. Липа має серцеподібний листок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Trzy pożytki", ua: "Перевірка 5. Три користі" },
      task: {
        id: "l33-t5",
        type: "single-choice",
        question: {
          pl: "Uczeń wymienia znaczenie roślin z tej lekcji: żywica i szyszki. Co pasuje do lekcji?",
          ua: "Учень називає значення рослин із цього уроку: живиця і шишки. Що пасує до уроку?"
        },
        options: [
          { id: "a", label: { pl: "z tej lekcji: pokarm, tlen i drewno; żywica i szyszki są u iglaków", ua: "з цього уроку: пожива, кисень і деревина; живиця і шишки є в хвойних" } },
          { id: "b", label: { pl: "tak — okrytonasienne poznajesz po szyszce", ua: "так — покритонасінні впізнаєш по шишці" } },
          { id: "c", label: { pl: "tak — tlen jest tylko z puszki mchu", ua: "так — кисень є лише з коробочки моху" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szyszka jest u nagonasiennych. Wróć do trzech słów okrytonasiennych z tej lekcji: pokarm, tlen i drewno.",
              ua: "Шишка є в голонасінних. Повернися до трьох слів покритонасінних із цього уроку: пожива, кисень і деревина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Puszka mchu wypuszcza zarodniki, nie tlen jako osobny owoc. Tlen jest z fotosyntezy, jak na lekcji 9. Do tego dochodzą pokarm i drewno.",
              ua: "Коробочка моху випускає спори, не кисень як окремий плід. Кисень є з фотосинтезу, як на уроці 9. До того доходять пожива і деревина."
            }
          }
        ],
        explanation: {
          pl: "Znaczenie z tej lekcji: pokarm, tlen i drewno.",
          ua: "Значення з цього уроку: пожива, кисень і деревина."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l33-znaczenie.png", {
        alt: { pl: "Pokarm, las liściasty i belki drewna", ua: "Пожива, листяний ліс і балки деревини" },
        title: { pl: "Pokarm, tlen, drewno.", ua: "Пожива, кисень, деревина." },
        prompt: { pl: "Ta sama plansza znaczenia." }
      }),
      text: {
        pl: [
          "Dąb: zaokrąglone zatoki i żołądź w miseczce. Kora starych pni bywa gruba i spękana.",
          "Buk: gładka szara kora. Liść jajowaty, orzeszki w kolczastej okrywie.",
          "Brzoza: biała kora z czarnymi kreskami. Kory żywego drzewa nie obdzieramy.",
          "Klon: ząbkowany liść i skrzydełka. Lipa: liść sercowaty.",
          "Okrytonasienne: pokarm, tlen, drewno."
        ],
        ua: [
          "Дуб: заокруглені вирізи і жолудь у плюсці. Кора старих стовбурів буває товста і потріскана.",
          "Бук: гладка сіра кора. Листок яйцеподібний, горішки в колючій обгортці.",
          "Береза: біла кора з чорними рисками. Кору живого дерева не обдираємо.",
          "Клен: зубчастий листок і крильця. Липа: серцеподібний листок.",
          "Покритонасінні: пожива, кисень, деревина."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Rozpoznam dąb po klapowanym liściu i żołędzi.", ua: "Розпізнаю дуб по лопатевому листку і жолудю." },
        { pl: "Rozpoznam buk po gładkiej szarej korze.", ua: "Розпізнаю бук по гладкій сірій корі." },
        { pl: "Rozpoznam brzozę po białej korze.", ua: "Розпізнаю березу по білій корі." },
        { pl: "Rozpoznam klon po skrzydełkach i lipę po sercowatym liściu.", ua: "Розпізнаю клен по крильцях і липу по серцеподібному листку." },
        { pl: "Podam znaczenie: pokarm, tlen, drewno.", ua: "Назву значення: пожива, кисень, деревина." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całej lekcji.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього уроку." }
      ]
    }
  ]
};
