function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L19_Protisty/images/";

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
      heading: { pl: "Misja: życie w kropli", ua: "Місія: життя в краплі" },
      visual: vizGh("l19-zacznijmy.png", {
        alt: { pl: "Euglena, pantofelek i pełzak w kropli stawu", ua: "Евглена, інфузорія-туфелька і амеба в краплі ставка" },
        title: { pl: "Jedna kropla. Trzy protisty.", ua: "Одна крапля. Три протисти." },
        prompt: { pl: "Plansza lekcji 19: kropla stawu." }
      }),
      text: {
        pl: [
          "To lekcja 19: protisty. W szkolnym podziale z lekcji 15 to szuflada na organizmy jądrowe, które nie są rośliną, zwierzęciem ani grzybem.",
          "Większość z tej lekcji to jedna komórka ze stawu. Bakterie nie mają jądra. Wirus nie jest komórką. Grzyby zostają na lekcję 20.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 19: протисти. У шкільному поділі з уроку 15 це шухляда для ядерних організмів, які не є рослиною, твариною чи грибом.",
          "Більшість із цього уроку — одна клітина зі ставка. Бактерії не мають ядра. Вірус не є клітиною. Гриби лишаються на урок 20.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "protisty", ua: "протисти — ядерні, зазвичай одна клітина" },
        { pl: "euglena", ua: "евглена — зелена, змішане живлення" },
        { pl: "pantofelek", ua: "інфузорія-туфелька — війки, гетеротроф" },
        { pl: "pełzak", ua: "амеба — несправжні ніжки, змінює форму" },
        { pl: "glony", ua: "водорості — саможивні протисти у воді" },
        { pl: "odżywianie mieszane", ua: "змішане живлення — світло або готова пожива" },
        { pl: "wić", ua: "джгутик евглени — один, до руху" },
        { pl: "rzęski", ua: "війки туфельки — багато, не джгутик бактерії" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Komórka z jądrem", ua: "Поняття. Клітина з ядром" },
      visual: vizGh("l19-jadrowe.png", {
        alt: { pl: "Pantofelek z jądrem i bakteria z nicią DNA", ua: "Туфелька з ядром і бактерія з ниткою ДНК" },
        title: { pl: "Jądro po lewej. Nić DNA po prawej.", ua: "Ядро ліворуч. Нитка ДНК праворуч." },
        prompt: { pl: "Plansza lekcji 19: protist i bakteria." }
      }),
      text: {
        pl: [
          [em("Protisty"), " mają komórki ", em("jądrowe"), ". Dlatego to nie bakterie z lekcji 17, u których nić DNA leży w cytozolu."],
          ["Zwykle są ", em("jednokomórkowe"), ": cały organizm to jedna komórka. Niektóre glony bywają nitkowate. Na tę lekcję zostaje reguła: zwykle jedna komórka."],
          "To nie wirus, bo wirus nie ma komórki. Kapelusz grzyba to lekcja 20."
        ],
        ua: [
          [em("Протисти"), " мають ", em("ядерні"), " клітини. Тому це не бактерії з уроку 17, у яких нитка ДНК лежить у цитозолі."],
          ["Зазвичай вони ", em("одноклітинні"), ": увесь організм — це одна клітина. Деякі водорості бувають нитчастими. Для цього уроку лишається правило: зазвичай одна клітина."],
          "Це не вірус, бо вірус не має клітини. Шапинка гриба — це урок 20."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dwie komórki", ua: "Приклад. Дві клітини" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej jest pantofelek. W komórce widać jądro. To protist."],
            ua: ["Ліворуч є інфузорія-туфелька. У клітині видно ядро. Це протист."]
          }
        },
        {
          text: {
            pl: ["Po prawej jest bakteria. Zamiast jądra jest nić DNA. Wspólna woda nie robi z nich jednego organizmu."],
            ua: ["Праворуч є бактерія. Замість ядра є нитка ДНК. Спільна вода не робить із них один організм."]
          }
        },
        {
          text: {
            pl: ["Jeden pantofelek to już cały organizm. Dąb z wielu komórek tak nie wygląda."],
            ua: ["Одна туфелька — це вже цілий організм. Дуб із багатьох клітин так не виглядає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Nie bakteria", ua: "Коротке питання. Не бактерія" },
      task: {
        id: "l19-g1",
        type: "single-choice",
        question: {
          pl: "Czym protist różni się od bakterii?",
          ua: "Чим протист відрізняється від бактерії?"
        },
        options: [
          { id: "a", label: { pl: "ma jądro, bakteria jest bezjądrowa", ua: "має ядро, бактерія без’ядерна" } },
          { id: "b", label: { pl: "niczym — oba nie mają jądra, skoro żyją w wodzie", ua: "нічим — обидва не мають ядра, якщо живуть у воді" } },
          { id: "c", label: { pl: "protist nie ma komórki, jak wirus", ua: "протист не має клітини, як вірус" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz na lewą stronę planszy: czy jest jądro.",
          ua: "Дивись на лівий бік плаката: чи є ядро."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wspólna woda nie kasuje jądra. Protist ma jądro, bakteria ma nić DNA w cytozolu.",
              ua: "Спільна вода не стирає ядро. Протист має ядро, бактерія має нитку ДНК у цитозолі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez komórki jest wirus. Protist jest komórką i ta komórka ma jądro.",
              ua: "Без клітини є вірус. Протист є клітиною, і ця клітина має ядро."
            }
          }
        ],
        explanation: {
          pl: "Protist ma jądro. Bakteria jest komórką bezjądrową.",
          ua: "Протист має ядро. Бактерія є без’ядерною клітиною."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Małe, więc bakteria", ua: "Типова помилка. Мале, тож бактерія" },
      claim: {
        pl: "„Protist to bakteria, bo oba są małe i żyją w wodzie.”",
        ua: "«Протист — це бактерія, бо обидва малі і живуть у воді.»"
      },
      text: {
        pl: [
          "Wielkość i woda nie są jądrem.",
          "Protist jest komórką jądrową. Bakteria jądra nie ma."
        ],
        ua: [
          "Розмір і вода не є ядром.",
          "Протист є ядерною клітиною. Бактерія ядра не має."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Jedna komórka", ua: "Сам. Одна клітина" },
      task: {
        id: "l19-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń mówi, że protist zawsze jest zbudowany jak dąb, z wielu tkanek. Co poprawić?",
          ua: "Учень каже, що протист завжди збудований як дуб, із багатьох тканин. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "zwykle cały organizm to jedna komórka; dąb tak nie jest", ua: "зазвичай увесь організм — це одна клітина; дуб таким не є" } },
          { id: "b", label: { pl: "tak — protist ma skórkę i wiązki jak liść", ua: "так — протист має шкірку і пучки, як листок" } },
          { id: "c", label: { pl: "tak — skoro jedna komórka, to nie ma jądra", ua: "так — якщо одна клітина, то немає ядра" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skórka i wiązki liścia to nie plan protista. Zwykle jest jedna komórka z jądrem.",
              ua: "Шкірка і пучки листка — це не план протиста. Зазвичай є одна клітина з ядром."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Jedna komórka protista nadal ma jądro. Bez jądra jest bakteria, nie protist.",
              ua: "Одна клітина протиста все одно має ядро. Без ядра є бактерія, не протист."
            }
          }
        ],
        explanation: {
          pl: "Protist zwykle jest jedną komórką. Dąb jest organizmem z wielu komórek.",
          ua: "Протист зазвичай є однією клітиною. Дуб є організмом із багатьох клітин."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Euglena", ua: "Поняття. Евглена" },
      visual: vizGh("l19-euglena.png", {
        alt: { pl: "Euglena z wicią, chloroplastami i plamką oczną", ua: "Евглена з джгутиком, хлоропластами і вічком" },
        title: { pl: "Zielona, ale nie roślina.", ua: "Зелена, але не рослина." },
        prompt: { pl: "Plansza lekcji 19: euglena." }
      }),
      text: {
        pl: [
          [em("Euglena"), " ma chloroplasty, więc na świetle prowadzi fotosyntezę. Ma też jądro, jedną ", em("wić"), " i ", em("plamkę oczną"), ". Dzięki nim płynie ku światłu."],
          ["Gdy długo nie ma światła, może brać gotowy pokarm. To ", em("odżywianie mieszane"), "."],
          "Zielony kolor nie przenosi jej do królestwa roślin. Zostaje protistem."
        ],
        ua: [
          [em("Евглена"), " має хлоропласти, тож на світлі веде фотосинтез. Має також ядро, один ", em("джгутик"), " і ", em("вічко"), ". Завдяки ним пливе до світла."],
          ["Коли довго немає світла, може брати готову поживу. Це ", em("змішане живлення"), "."],
          "Зелений колір не переносить її до царства рослин. Вона лишається протистом."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Światło i ciemność", ua: "Приклад. Світло і темрява" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na świetle chloroplasty pracują. Euglena zachowuje się wtedy podobnie do rośliny, ale rośliną nie jest."],
            ua: ["На світлі хлоропласти працюють. Евглена тоді поводиться подібно до рослини, але рослиною не є."]
          }
        },
        {
          text: {
            pl: ["Plamka oczna i wić prowadzą ją ku światłu. To nie oko ssaka."],
            ua: ["Вічко і джгутик ведуть її до світла. Це не око ссавця."]
          }
        },
        {
          text: {
            pl: ["W długiej ciemności może skorzystać z gotowego pokarmu. Dlatego odżywianie jest mieszane."],
            ua: ["У довгій темряві може скористатися готовою поживою. Тому живлення змішане."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwa sposoby", ua: "Коротке питання. Два способи" },
      task: {
        id: "l19-g2",
        type: "single-choice",
        question: {
          pl: "Co jest charakterystyczne dla odżywiania eugleny?",
          ua: "Що характерне для живлення евглени?"
        },
        options: [
          { id: "a", label: { pl: "na świetle fotosynteza, bez światła może brać gotowy pokarm", ua: "на світлі фотосинтез, без світла може брати готову поживу" } },
          { id: "b", label: { pl: "nie ma jądra, więc odżywia się jak bakteria bez wyboru", ua: "не має ядра, тож живиться як бактерія без вибору" } },
          { id: "c", label: { pl: "ma kapelusz i odżywia się jak borowik", ua: "має шапинку і живиться як боровик" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj światła i gotowego pokarmu razem, nie jednego królestwa.",
          ua: "Шукай світло і готову поживу разом, не одне царство."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Euglena ma jądro. Jej szczególność to odżywianie mieszane, nie plan bakterii.",
              ua: "Евглена має ядро. Її особливість — змішане живлення, не план бактерії."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kapelusz należy do grzyba. Euglena jest protistem z chloroplastami i wicią.",
              ua: "Шапинка належить грибу. Евглена є протистом із хлоропластами і джгутиком."
            }
          }
        ],
        explanation: {
          pl: "Euglena ma odżywianie mieszane: fotosynteza na świetle i gotowy pokarm bez światła.",
          ua: "Евглена має змішане живлення: фотосинтез на світлі і готова пожива без світла."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zielona, więc roślina", ua: "Типова помилка. Зелена, тож рослина" },
      claim: {
        pl: "„Euglena jest rośliną, bo jest zielona.”",
        ua: "«Евглена є рослиною, бо зелена.»"
      },
      text: {
        pl: [
          "Chlorofil nie nadaje królestwa.",
          "Euglena zostaje protistem, choć na świetle fotosyntetyzuje."
        ],
        ua: [
          "Хлорофіл не дає царства.",
          "Евглена лишається протистом, хоча на світлі фотосинтезує."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Długa ciemność", ua: "Сам. Довга темрява" },
      task: {
        id: "l19-p2",
        type: "single-choice",
        question: {
          pl: "Euglena długo jest bez światła i bierze gotowy pokarm. Co z tego wynika?",
          ua: "Евглена довго є без світла і бере готову поживу. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "to druga część odżywiania mieszanego, nie zmiana w bakterię", ua: "це друга частина змішаного живлення, не зміна на бактерію" } },
          { id: "b", label: { pl: "znika jej jądro, bo ciemność robi bakterię", ua: "зникає її ядро, бо темрява робить бактерію" } },
          { id: "c", label: { pl: "wyrasta jej kapelusz grzyba", ua: "у неї виростає шапинка гриба" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ciemność nie usuwa jądra. Gotowy pokarm jest możliwy u eugleny właśnie dlatego, że odżywianie jest mieszane.",
              ua: "Темрява не забирає ядро. Готова пожива можлива в евглени саме тому, що живлення змішане."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Z eugleny nie wyrasta grzyb. W ciemności może korzystać z gotowego pokarmu i zostaje protistem.",
              ua: "З евглени не виростає гриб. У темряві вона може користуватися готовою поживою і лишається протистом."
            }
          }
        ],
        explanation: {
          pl: "Gotowy pokarm w ciemności należy do odżywiania mieszanego eugleny.",
          ua: "Готова пожива в темряві належить до змішаного живлення евглени."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pantofelek", ua: "Поняття. Інфузорія-туфелька" },
      visual: vizGh("l19-pantofelek.png", {
        alt: { pl: "Pantofelek z rzęskami, otworem gębowym i jądrem", ua: "Туфелька з війками, клітинним ротом і ядром" },
        title: { pl: "Rzęski naganiają pokarm.", ua: "Війки наганяють поживу." },
        prompt: { pl: "Plansza lekcji 19: pantofelek." }
      }),
      text: {
        pl: [
          [em("Pantofelek"), " (orzęsek) ma kształt pantofla i wiele ", em("rzęsek"), ". Nimi pływa i nagania pokarm."],
          "Jest cudzożywny: pobiera bakterie i drobne cząstki. Otwór gębowy to miejsce w tej jednej komórce, nie usta ssaka. Na modelu są też jądro i wodniczki.",
          "Rzęski pantofelka nie robią z niego bakterii. Bakteria nie ma jądra i zwykle ma inną, pojedynczą rzęskę. Tu cały organizm to jedna duża komórka jądrowa."
        ],
        ua: [
          [em("Інфузорія-туфелька"), " має форму туфлі і багато ", em("війок"), ". Ними плаває і наганяє поживу."],
          "Вона гетеротроф: бере бактерії і дрібні частки. Клітинний рот — це місце в цій одній клітині, не рот ссавця. На моделі є також ядро і вакуолі.",
          "Війки туфельки не роблять із неї бактерію. Бактерія не має ядра і зазвичай має інший, один джгутик. Тут увесь організм — це одна велика ядерна клітина."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kształt buta", ua: "Приклад. Форма туфлі" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Kształt przypomina pantofel. Wokół są gęste rzęski."],
            ua: ["Форма нагадує туфлю. Навколо є густі війки."]
          }
        },
        {
          text: {
            pl: ["Rzęski pędzą komórkę i zganiają pokarm do otworu gębowego."],
            ua: ["Війки женуть клітину і зганяють поживу до клітинного рота."]
          }
        },
        {
          text: {
            pl: ["Pokarm to bakterie i drobne cząstki. Chloroplastów liścia tu nie ma."],
            ua: ["Пожива — це бактерії і дрібні частки. Хлоропластів листка тут немає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Rzęski", ua: "Коротке питання. Війки" },
      task: {
        id: "l19-g3",
        type: "single-choice",
        question: {
          pl: "Pantofelek jest:",
          ua: "Інфузорія-туфелька є:"
        },
        options: [
          { id: "a", label: { pl: "cudzożywnym protistem z wieloma rzęskami", ua: "гетеротрофним протистом із багатьма війками" } },
          { id: "b", label: { pl: "grzybem z kapeluszem", ua: "грибом із шапинкою" } },
          { id: "c", label: { pl: "wirusem bez komórki", ua: "вірусом без клітини" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj rzęsek i gotowego pokarmu, nie kapelusza.",
          ua: "Шукай війки і готову поживу, не шапинку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapelusz jest u grzyba. Pantofelek jest jedną komórką z jądrem i rzęskami.",
              ua: "Шапинка є в гриба. Туфелька є однією клітиною з ядром і війками."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wirus nie ma komórki. Pantofelek ma komórkę, jądro i pobiera pokarm.",
              ua: "Вірус не має клітини. Туфелька має клітину, ядро і бере поживу."
            }
          }
        ],
        explanation: {
          pl: "Pantofelek jest cudzożywnym protistem i porusza się rzęskami.",
          ua: "Інфузорія-туфелька є гетеротрофним протистом і рухається війками."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Rzęska bakterii", ua: "Типова помилка. Джгутик бактерії" },
      claim: {
        pl: "„Pantofelek jest bakterią, bo ma rzęski.”",
        ua: "«Туфелька є бактерією, бо має війки.»"
      },
      text: {
        pl: [
          "Rzęski pantofelka są na dużej komórce z jądrem.",
          "Bakteria jądra nie ma. Sama nazwa „rzęska” nie przenosi jej do protistów ani protista do bakterii."
        ],
        ua: [
          "Війки туфельки є на великій клітині з ядром.",
          "Бактерія ядра не має. Сама назва «джгутик» не переносить її до протистів і протиста до бактерій."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Otwór gębowy", ua: "Сам. Клітинний рот" },
      task: {
        id: "l19-p3",
        type: "single-choice",
        question: {
          pl: "Czym jest otwór gębowy pantofelka?",
          ua: "Чим є клітинний рот інфузорії-туфельки?"
        },
        options: [
          { id: "a", label: { pl: "miejscem w komórce, którędy wchodzą bakterie i drobne cząstki", ua: "місцем у клітині, куди входять бактерії і дрібні частки" } },
          { id: "b", label: { pl: "ustami ssaka doklejonymi do buta", ua: "ротом ссавця, приклеєним до туфлі" } },
          { id: "c", label: { pl: "chloroplastem, bo pantofelek jest liściem", ua: "хлоропластом, бо туфелька є листком" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kształt pantofla nie dodaje ust ssaka. Otwór gębowy jest miejscem w tej jednej komórce.",
              ua: "Форма туфлі не додає рота ссавця. Клітинний рот є місцем у цій одній клітині."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pantofelek nie ma chloroplastów liścia. Jest cudzożywny, a otwór gębowy służy gotowemu pokarmowi.",
              ua: "Туфелька не має хлоропластів листка. Вона гетеротроф, а клітинний рот служить готовій пожіві."
            }
          }
        ],
        explanation: {
          pl: "Otwór gębowy to miejsce w komórce pantofelka, którędy wchodzi pokarm.",
          ua: "Клітинний рот — це місце в клітині туфельки, куди входить пожива."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pełzak", ua: "Поняття. Амеба" },
      visual: vizGh("l19-pelzak.png", {
        alt: { pl: "Pełzak z nibynóżkami i wodniczką pokarmową", ua: "Амеба з несправжніми ніжками і вакуолею з поживою" },
        title: { pl: "Kształt się zmienia.", ua: "Форма змінюється." },
        prompt: { pl: "Plansza lekcji 19: pełzak." }
      }),
      text: {
        pl: [
          [em("Pełzak"), " (ameba) nie ma stałego kształtu. Wypuszcza ", em("nibynóżki"), ": nimi pełza i otacza pokarm. Na modelu widać też jądro i wodniczkę pokarmową."],
          "Jest cudzożywny. Żyje w wodzie i w wilgotnej glebie.",
          "Niektóre pełzaki bywają pasożytami człowieka. Malarię wywołuje inny protist. Dziś tylko to zdanie, bez obrazu choroby."
        ],
        ua: [
          [em("Амеба"), " не має сталої форми. Випускає ", em("несправжні ніжки"), ": ними повзе і оточує поживу. На моделі видно також ядро і вакуолю з поживою."],
          "Вона гетеротроф. Живе у воді і у вологому ґрунті.",
          "Деякі амеби бувають паразитами людини. Малярію викликає інший протист. Сьогодні лише це речення, без картини хвороби."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Bez stałego brzegu", ua: "Приклад. Без сталого краю" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Brzeg komórki się przesuwa. To nie pantofel o stałym kształcie."],
            ua: ["Край клітини зсувається. Це не туфля сталої форми."]
          }
        },
        {
          text: {
            pl: ["Nibynóżka dosięga pokarmu i otacza go. Potem widać wodniczkę pokarmową."],
            ua: ["Несправжня ніжка сягає поживи і оточує її. Потім видно вакуолю з поживою."]
          }
        },
        {
          text: {
            pl: ["Jądro zostaje. Chloroplastów eugleny tu nie ma, więc pełzak nie jest zielonym listkiem."],
            ua: ["Ядро лишається. Хлоропластів евглени тут немає, тож амеба не є зеленим листком."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Nibynóżki", ua: "Коротке питання. Несправжні ніжки" },
      task: {
        id: "l19-g4",
        type: "single-choice",
        question: {
          pl: "Jak pełzak się porusza i bierze pokarm?",
          ua: "Як амеба рухається і бере поживу?"
        },
        options: [
          { id: "a", label: { pl: "nibynóżkami: pełza i otacza pokarm, a kształt się zmienia", ua: "несправжніми ніжками: повзе і оточує поживу, а форма змінюється" } },
          { id: "b", label: { pl: "gęstymi rzęskami i trzyma kształt pantofla", ua: "густими війками і тримає форму туфлі" } },
          { id: "c", label: { pl: "jedną wicią i chloroplastami jak euglena", ua: "одним джгутиком і хлоропластами, як евглена" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj zmiennego kształtu, nie buta i nie zielonej wici.",
          ua: "Шукай змінну форму, не туфлю і не зелений джгутик."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rzęski i kształt pantofla należą do pantofelka. Pełzak zmienia kształt i używa nibynóżek.",
              ua: "Війки і форма туфлі належать туфельці. Амеба змінює форму і користується несправжніми ніжками."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wić i chloroplasty są u eugleny. Pełzak jest cudzożywny i porusza się nibynóżkami.",
              ua: "Джгутик і хлоропласти є в евглени. Амеба гетеротроф і рухається несправжніми ніжками."
            }
          }
        ],
        explanation: {
          pl: "Pełzak porusza się i pobiera pokarm nibynóżkami.",
          ua: "Амеба рухається і бере поживу несправжніми ніжками."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Też pantofel", ua: "Типова помилка. Теж туфля" },
      claim: {
        pl: "„Pełzak ma stały kształt pantofla i rzęski.”",
        ua: "«Амеба має сталу форму туфлі і війки.»"
      },
      text: {
        pl: [
          "Stały kształt i rzęski ma pantofelek.",
          "Pełzak kształtu nie trzyma. Porusza się nibynóżkami."
        ],
        ua: [
          "Сталу форму і війки має інфузорія-туфелька.",
          "Амеба форму не тримає. Рухається несправжніми ніжками."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Przy roślinach", ua: "Сам. Біля рослин" },
      task: {
        id: "l19-p4",
        type: "single-choice",
        question: {
          pl: "Pełzak żyje w wilgotnej glebie przy roślinach. Uczeń mówi, że przez to fotosyntetyzuje. Co poprawić?",
          ua: "Амеба живе у вологому ґрунті біля рослин. Учень каже, що через це вона фотосинтезує. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "sąsiedztwo roślin nie dodaje chloroplastów; pełzak jest cudzożywny", ua: "сусідство рослин не додає хлоропластів; амеба гетеротроф" } },
          { id: "b", label: { pl: "tak — gleba zamienia nibynóżkę w liść", ua: "так — ґрунт перетворює несправжню ніжку на листок" } },
          { id: "c", label: { pl: "tak — pełzak jest eugleną, tylko bez jądra", ua: "так — амеба є евгленою, лише без ядра" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gleba nie przerabia nibynóżki na liść. Pełzak otacza gotowy pokarm i zostaje cudzożywny.",
              ua: "Ґрунт не переробляє несправжню ніжку на листок. Амеба оточує готову поживу і лишається гетеротрофом."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pełzak ma jądro i nie jest eugleną. Euglena ma chloroplasty, pełzak ich nie używa.",
              ua: "Амеба має ядро і не є евгленою. Евглена має хлоропласти, амеба ними не користується."
            }
          }
        ],
        explanation: {
          pl: "Pełzak przy roślinach nadal jest cudzożywny. Miejsce nie dodaje fotosyntezy.",
          ua: "Амеба біля рослин усе одно гетеротроф. Місце не додає фотосинтезу."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy sposoby", ua: "Поняття. Три способи" },
      visual: vizGh("l19-odzywianie.png", {
        alt: { pl: "Glon, pantofelek z pełzakiem i euglena w trzech kolumnach", ua: "Водорість, туфелька з амебою і евглена у трьох стовпцях" },
        title: { pl: "Samożywne, cudzożywne, mieszane.", ua: "Саможивні, гетеротрофні, змішані." },
        prompt: { pl: "Plansza lekcji 19: trzy sposoby odżywiania." }
      }),
      text: {
        pl: [
          "Protisty nie jedzą w jeden sposób. Na planszy są trzy kolumny.",
          "Samożywne są glony: fotosynteza. Cudzożywne są pantofelek i pełzak: gotowy pokarm. Mieszane jest u eugleny: światło albo gotowy pokarm.",
          "Sam kolor nie wybiera królestwa. Zielona euglena nie staje się rośliną, a cudzożywny protist nie staje się grzybem."
        ],
        ua: [
          "Протисти не їдять одним способом. На плакаті три стовпці.",
          "Саможивні — водорості: фотосинтез. Гетеротрофні — туфелька і амеба: готова пожива. Змішане є в евглени: світло або готова пожива.",
          "Сам колір не вибирає царство. Зелена евглена не стає рослиною, а гетеротрофний протист не стає грибом."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kolumny", ua: "Приклад. Три стовпці" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Lewa kolumna: glon. Światło, fotosynteza, brak gotowego obiadu jako zasady."],
            ua: ["Лівий стовпець: водорість. Світло, фотосинтез, готовий обід не є правилом."]
          }
        },
        {
          text: {
            pl: ["Środkowa: pantofelek i pełzak. Oba biorą gotowy pokarm, choć ruch mają inny."],
            ua: ["Середній: туфелька і амеба. Обидва беруть готову поживу, хоча рух у них різний."]
          }
        },
        {
          text: {
            pl: ["Prawa: euglena. Jedna komórka umie oba sposoby. Dlatego kolumna nazywa się mieszane."],
            ua: ["Правий: евглена. Одна клітина вміє обидва способи. Тому стовпець називається змішане."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która kolumna?", ua: "Коротке питання. Який стовпець?" },
      task: {
        id: "l19-g5",
        type: "single-choice",
        question: {
          pl: "Dlaczego euglena nie stoi w kolumnie glonów?",
          ua: "Чому евглена не стоїть у стовпці водоростей?"
        },
        options: [
          { id: "a", label: { pl: "bo umie też brać gotowy pokarm, więc odżywianie jest mieszane", ua: "бо вміє також брати готову поживу, тож живлення змішане" } },
          { id: "b", label: { pl: "bo nie ma chloroplastów", ua: "бо не має хлоропластів" } },
          { id: "c", label: { pl: "bo jest bakterią bez jądra", ua: "бо є бактерією без ядра" } }
        ],
        answer: "a",
        hint: {
          pl: "Glony zostają przy samym świetle. Euglena ma drugi sposób.",
          ua: "Водорості лишаються при самому світлі. Евглена має другий спосіб."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Euglena chloroplasty ma. Osobną kolumnę dostaje dlatego, że bez światła może brać gotowy pokarm.",
              ua: "Евглена хлоропласти має. Окремий стовпець вона дістає тому, що без світла може брати готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Euglena ma jądro. Od glonów oddziela ją mieszany sposób, nie brak komórki.",
              ua: "Евглена має ядро. Від водоростей її відділяє змішаний спосіб, не відсутність клітини."
            }
          }
        ],
        explanation: {
          pl: "Euglena jest w kolumnie mieszanej, bo oprócz fotosyntezy może brać gotowy pokarm.",
          ua: "Евглена є в стовпці змішаного живлення, бо крім фотосинтезу може брати готову поживу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wszyscy zieloni", ua: "Типова помилка. Усі зелені" },
      claim: {
        pl: "„Skoro euglena jest zielona, każdy protist prowadzi fotosyntezę.”",
        ua: "«Якщо евглена зелена, кожен протист веде фотосинтез.»"
      },
      text: {
        pl: [
          "Zielona jest euglena i zielone bywają glony.",
          "Pantofelek i pełzak są cudzożywne. Jedna zieleń nie maluje całego królestwa."
        ],
        ua: [
          "Зелена є евглена, і зеленими бувають водорості.",
          "Туфелька і амеба гетеротрофні. Одна зелень не фарбує всього царства."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwa cudzożywne", ua: "Сам. Два гетеротрофи" },
      task: {
        id: "l19-p5",
        type: "single-choice",
        question: {
          pl: "Pantofelek ma rzęski, pełzak nibynóżki. Co mają wspólnego w odżywianiu?",
          ua: "Туфелька має війки, амеба — несправжні ніжки. Що в них спільне в живленні?"
        },
        options: [
          { id: "a", label: { pl: "oba są cudzożywne, choć ruch mają inny", ua: "обидва гетеротрофні, хоча рух у них різний" } },
          { id: "b", label: { pl: "oba są mieszane jak euglena, bo żyją w wodzie", ua: "обидва змішані, як евглена, бо живуть у воді" } },
          { id: "c", label: { pl: "oba są glonami, bo woda daje im chlorofil", ua: "обидва є водоростями, бо вода дає їм хлорофіл" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Woda nie robi odżywiania mieszanego. Mieszane jest u eugleny. Pantofelek i pełzak biorą gotowy pokarm.",
              ua: "Вода не робить змішаного живлення. Змішане є в евглени. Туфелька і амеба беруть готову поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Chlorofil nie przychodzi z samej wody. Te dwa protisty są cudzożywne, glony są samożywne.",
              ua: "Хлорофіл не приходить із самої води. Ці два протисти гетеротрофні, водорості саможивні."
            }
          }
        ],
        explanation: {
          pl: "Pantofelek i pełzak są cudzożywne. Różni je ruch, nie sposób odżywiania.",
          ua: "Туфелька і амеба гетеротрофні. Їх різниться рух, не спосіб живлення."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Glony", ua: "Поняття. Водорості" },
      visual: vizGh("l19-glony.png", {
        alt: { pl: "Nitkowate glony w stawie i mała rybka", ua: "Нитчасті водорості в ставку і маленька рибка" },
        title: { pl: "Tlen i pokarm w wodzie.", ua: "Кисень і пожива у воді." },
        prompt: { pl: "Plansza lekcji 19: glony w stawie." }
      }),
      text: {
        pl: [
          [em("Glony"), " to protisty z chlorofilem, zaliczane tak w tym podręczniku. Żyją głównie w wodzie. Bywają jednokomórkowe albo nitkowate."],
          ["Dzięki fotosyntezie dają ", em("tlen"), " i są pokarmem dla organizmów wodnych. To nie tkanki liścia: nie opisujemy skórki i wiązek."],
          "Zakwit bywa problemem, gdy w brudnej wodzie jest za dużo ścieków. Glony same są ważne. Szkodzi nadmiar, nie sam fakt, że w stawie są glony."
        ],
        ua: [
          [em("Водорості"), " — це протисти з хлорофілом, так їх зараховує цей підручник. Живуть здебільшого у воді. Бувають одноклітинні або нитчасті."],
          ["Завдяки фотосинтезу дають ", em("кисень"), " і є поживою для водних організмів. Це не тканини листка: шкірку і пучки не описуємо."],
          "Цвітіння води буває проблемою, коли в брудній воді забагато стоків. Самі водорості важливі. Шкодить надмір, не сам факт, що в ставку є водорості."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Staw", ua: "Приклад. Ставок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Nitki w wodzie to glony. Mają chlorofil i prowadzą fotosyntezę."],
            ua: ["Нитки у воді — це водорості. Мають хлорофіл і ведуть фотосинтез."]
          }
        },
        {
          text: {
            pl: ["Z tej fotosyntezy bierze się tlen w wodzie. Rybka dostaje też pokarm, który od glonów się zaczyna."],
            ua: ["З цього фотосинтезу береться кисень у воді. Рибка дістає також поживу, яка від водоростей починається."]
          }
        },
        {
          text: {
            pl: ["To nie liść dębu i nie kapelusz borowika. Królestwo zostaje przy protistach."],
            ua: ["Це не листок дуба і не шапинка боровика. Царство лишається при протистах."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co glony?", ua: "Коротке питання. Навіщо водорості?" },
      task: {
        id: "l19-g6",
        type: "single-choice",
        question: {
          pl: "Jaką rolę mają glony w wodzie?",
          ua: "Яку роль мають водорості у воді?"
        },
        options: [
          { id: "a", label: { pl: "fotosynteza: tlen i pokarm dla innych organizmów", ua: "фотосинтез: кисень і пожива для інших організмів" } },
          { id: "b", label: { pl: "budują kapsyd wirusa", ua: "будують капсид вірусу" } },
          { id: "c", label: { pl: "zastępują pasteryzację mleka", ua: "замінюють пастеризацію молока" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz na etykiety stawu: tlen i pokarm.",
          ua: "Дивись на підписи ставка: кисень і пожива."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kapsyd należy do wirusa. Glony są komórkami z chlorofilem i dają tlen oraz pokarm.",
              ua: "Капсид належить вірусу. Водорості є клітинами з хлорофілом і дають кисень та поживу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pasteryzacja podgrzewa mleko. Glony żyją w wodzie i prowadzą fotosyntezę.",
              ua: "Пастеризація підігріває молоко. Водорості живуть у воді і ведуть фотосинтез."
            }
          }
        ],
        explanation: {
          pl: "Glony w wodzie dają tlen i są pokarmem dzięki fotosyntezie.",
          ua: "Водорості у воді дають кисень і є поживою завдяки фотосинтезу."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kapelusz albo liść", ua: "Типова помилка. Шапинка або листок" },
      claim: {
        pl: "„Glony to kapelusz borowika albo liść z tkankami.”",
        ua: "«Водорості — це шапинка боровика або листок із тканинами.»"
      },
      text: {
        pl: [
          "Kapelusz jest u grzyba. Tkanki liścia są u rośliny.",
          "Glony z tej lekcji są protistami: chlorofil, woda, tlen i pokarm."
        ],
        ua: [
          "Шапинка є в гриба. Тканини листка є в рослини.",
          "Водорості з цього уроку є протистами: хлорофіл, вода, кисень і пожива."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Za dużo w stawie", ua: "Сам. Забагато в ставку" },
      task: {
        id: "l19-p6",
        type: "single-choice",
        question: {
          pl: "W brudnym stawie glonów zrobiło się bardzo dużo. Co jest zgodne z lekcją?",
          ua: "У брудному ставку водоростей стало дуже багато. Що відповідає уроку?"
        },
        options: [
          { id: "a", label: { pl: "glony są ważne, a szkodzi nadmiar w brudnej wodzie", ua: "водорості важливі, а шкодить надмір у брудній воді" } },
          { id: "b", label: { pl: "każdy glon jest trucizną, więc fotosynteza w wodzie jest błędem", ua: "кожна водорість є отрутою, тож фотосинтез у воді є помилкою" } },
          { id: "c", label: { pl: "to kapelusze grzybów, które urosły pod wodą", ua: "це шапинки грибів, які виросли під водою" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glony dają tlen i pokarm. Problemem z lekcji jest nadmiar w brudnej wodzie, nie sama fotosynteza.",
              ua: "Водорості дають кисень і поживу. Проблемою з уроку є надмір у брудній воді, не самий фотосинтез."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pod wodą na tej planszy są glony, nie kapelusze. Zakwit dotyczy glonów w brudnej wodzie.",
              ua: "Під водою на цьому плакаті є водорості, не шапинки. Цвітіння стосується водоростей у брудній воді."
            }
          }
        ],
        explanation: {
          pl: "Glony są potrzebne. Szkodzi ich nadmiar, gdy woda jest brudna.",
          ua: "Водорості потрібні. Шкодить їхній надмір, коли вода брудна."
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
      heading: { pl: "Sprawdzian 1. Jądro", ua: "Перевірка 1. Ядро" },
      task: {
        id: "l19-t1",
        type: "single-choice",
        question: {
          pl: "Które zdanie opisuje protisty?",
          ua: "Яке речення описує протистів?"
        },
        options: [
          { id: "a", label: { pl: "są jądrowe i zwykle jednokomórkowe", ua: "є ядерними і зазвичай одноклітинними" } },
          { id: "b", label: { pl: "są bezjądrowe, jak bakterie w tej samej kropli", ua: "є без’ядерними, як бактерії в тій самій краплі" } },
          { id: "c", label: { pl: "nie mają komórki, więc stoją obok wirusa", ua: "не мають клітини, тож стоять поряд із вірусом" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bez jądra jest bakteria. Protist ma jądro, a zwykle cały organizm to jedna komórka.",
              ua: "Без ядра є бактерія. Протист має ядро, а зазвичай увесь організм — це одна клітина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez komórki jest wirus. Protist jest organizmem komórkowym i to komórka jądrowa.",
              ua: "Без клітини є вірус. Протист є клітинним організмом, і це ядерна клітина."
            }
          }
        ],
        explanation: {
          pl: "Protisty są jądrowe i zwykle jednokomórkowe.",
          ua: "Протисти є ядерними і зазвичай одноклітинними."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Trzy ruchy", ua: "Перевірка 2. Три рухи" },
      task: {
        id: "l19-t2",
        type: "single-choice",
        question: {
          pl: "Które przypisanie ruchu jest prawdziwe?",
          ua: "Яке зіставлення руху правдиве?"
        },
        options: [
          { id: "a", label: { pl: "euglena — wić; pantofelek — rzęski; pełzak — nibynóżki", ua: "евглена — джгутик; туфелька — війки; амеба — несправжні ніжки" } },
          { id: "b", label: { pl: "euglena — nibynóżki; pantofelek — kapelusz; pełzak — wić i chloroplast", ua: "евглена — несправжні ніжки; туфелька — шапинка; амеба — джгутик і хлоропласт" } },
          { id: "c", label: { pl: "wszystkie trzy mają nić DNA zamiast jądra", ua: "усі три мають нитку ДНК замість ядра" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Części są pomieszane. Wić jest u eugleny, rzęski u pantofelka, nibynóżki u pełzaka.",
              ua: "Частини перемішані. Джгутик є в евглени, війки в туфельки, несправжні ніжки в амеби."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nić DNA zamiast jądra ma bakteria. Te trzy protisty mają jądro, a różni je sposób ruchu.",
              ua: "Нитку ДНК замість ядра має бактерія. Ці три протисти мають ядро, а різнить їх спосіб руху."
            }
          }
        ],
        explanation: {
          pl: "Euglena ma wić, pantofelek rzęski, a pełzak nibynóżki.",
          ua: "Евглена має джгутик, туфелька — війки, а амеба — несправжні ніжки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Trzy kolumny", ua: "Перевірка 3. Три стовпці" },
      task: {
        id: "l19-t3",
        type: "single-choice",
        question: {
          pl: "Które porównanie odżywiania jest poprawne?",
          ua: "Яке порівняння живлення правильне?"
        },
        options: [
          { id: "a", label: { pl: "glony — samożywne; pantofelek i pełzak — cudzożywne; euglena — mieszane", ua: "водорості — саможивні; туфелька і амеба — гетеротрофні; евглена — змішане" } },
          { id: "b", label: { pl: "wszyscy trzej ze stawu są tylko cudzożywni", ua: "усі троє зі ставка є лише гетеротрофними" } },
          { id: "c", label: { pl: "pełzak jest samożywny, bo zmienia kształt", ua: "амеба саможивна, бо змінює форму" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cudzożywne są pantofelek i pełzak. Glony są samożywne, a euglena ma odżywianie mieszane.",
              ua: "Гетеротрофні є туфелька і амеба. Водорості саможивні, а евглена має змішане живлення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zmiana kształtu nie jest fotosyntezą. Pełzak jest cudzożywny, samożywne są glony.",
              ua: "Зміна форми не є фотосинтезом. Амеба гетеротроф, саможивні є водорості."
            }
          }
        ],
        explanation: {
          pl: "Glony są samożywne, pantofelek i pełzak cudzożywne, a euglena ma odżywianie mieszane.",
          ua: "Водорості саможивні, туфелька і амеба гетеротрофні, а евглена має змішане живлення."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Nie liść", ua: "Перевірка 4. Не листок" },
      task: {
        id: "l19-t4",
        type: "single-choice",
        question: {
          pl: "Nitkowate glony w stawie to:",
          ua: "Нитчасті водорості в ставку — це:"
        },
        options: [
          { id: "a", label: { pl: "samożywne protisty; dają tlen i pokarm, a nie są liściem z tkankami", ua: "саможивні протисти; дають кисень і поживу, і не є листком із тканинами" } },
          { id: "b", label: { pl: "tkanki liścia dębu, tylko mokre", ua: "тканини листка дуба, лише мокрі" } },
          { id: "c", label: { pl: "wirusy, bo są cienkie jak nić DNA bakterii", ua: "віруси, бо тонкі, як нитка ДНК бактерії" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tkanki liścia należą do rośliny lądowej z późniejszej lekcji. Glony są protistami i żyją głównie w wodzie.",
              ua: "Тканини листка належать наземній рослині з пізнішого уроку. Водорості є протистами і живуть здебільшого у воді."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cienka nić glonu nie jest wirusem ani nicią DNA. Glon jest samożywnym protistem.",
              ua: "Тонка нитка водорості не є вірусом і не є ниткою ДНК. Водорість є саможивним протистом."
            }
          }
        ],
        explanation: {
          pl: "Nitkowate glony są samożywnymi protistami. Dają tlen i pokarm, a tkankami liścia nie są.",
          ua: "Нитчасті водорості є саможивними протистами. Дають кисень і поживу, а тканинами листка не є."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Trzy królestwa", ua: "Перевірка 5. Три царства" },
      task: {
        id: "l19-t5",
        type: "single-choice",
        question: {
          pl: "Które zdanie oddziela protisty od bakterii i grzybów?",
          ua: "Яке речення відділяє протистів від бактерій і грибів?"
        },
        options: [
          { id: "a", label: { pl: "mają jądro, więc nie są bakteriami, i nie mają kapelusza grzyba", ua: "мають ядро, тож не є бактеріями, і не мають шапинки гриба" } },
          { id: "b", label: { pl: "to bakterie, tylko z kapeluszem", ua: "це бактерії, лише з шапинкою" } },
          { id: "c", label: { pl: "to grzyby, bo każdy protist jest muchomorem", ua: "це гриби, бо кожен протист є мухомором" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bakteria nie ma jądra i nie nosi kapelusza. Protist ma jądro, a kapelusz zostaje u grzyba.",
              ua: "Бактерія не має ядра і не носить шапинки. Протист має ядро, а шапинка лишається в гриба."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Muchomor jest grzybem z lekcji 20. Protist nie dostaje kapelusza tylko dlatego, że nie jest rośliną.",
              ua: "Мухомор є грибом з уроку 20. Протист не дістає шапинки лише тому, що не є рослиною."
            }
          }
        ],
        explanation: {
          pl: "Protisty mają jądro, więc nie są bakteriami, i nie są grzybami kapeluszowymi.",
          ua: "Протисти мають ядро, тож не є бактеріями, і не є шапинковими грибами."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l19-zacznijmy.png", {
        alt: { pl: "Trzy protisty w kropli", ua: "Три протисти в краплі" },
        title: { pl: "Jądro. Trzy ruchy. Glony dają tlen.", ua: "Ядро. Три рухи. Водорості дають кисень." },
        prompt: { pl: "Ten sam kadr kropli stawu." }
      }),
      text: {
        pl: [
          "Protisty są jądrowe i zwykle jednokomórkowe. To nie bakterie i nie wirusy.",
          "Euglena: wić, chloroplasty, odżywianie mieszane. Pantofelek: rzęski, cudzożywny. Pełzak: nibynóżki, cudzożywny.",
          "Glony są samożywne: tlen i pokarm w wodzie. Kapelusz grzyba to następna lekcja."
        ],
        ua: [
          "Протисти є ядерними і зазвичай одноклітинними. Це не бактерії і не віруси.",
          "Евглена: джгутик, хлоропласти, змішане живлення. Туфелька: війки, гетеротроф. Амеба: несправжні ніжки, гетеротроф.",
          "Водорості саможивні: кисень і пожива у воді. Шапинка гриба — це наступний урок."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Powiem, że protisty są jądrowe i zwykle jednokomórkowe.", ua: "Скажу, що протисти є ядерними і зазвичай одноклітинними." },
        { pl: "Poznam euglenę, pantofelka i pełzaka po ruchu i odżywianiu.", ua: "Впізнаю евглену, туфельку і амебу за рухом і живленням." },
        { pl: "Porównam odżywianie samożywne, cudzożywne i mieszane.", ua: "Порівняю саможивне, гетеротрофне і змішане живлення." },
        { pl: "Powiem, że glony dają w wodzie tlen i pokarm.", ua: "Скажу, що водорості дають у воді кисень і поживу." },
        { pl: "Oddzielę protisty od bakterii i od grzybów.", ua: "Відділю протистів від бактерій і від грибів." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
