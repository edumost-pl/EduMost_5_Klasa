function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L04_Skladniki_chemiczne_organizmow/images/";

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

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: z czego jestem zbudowany", ua: "Місія: з чого я побудований" },
      visual: vizGh("l04-zacznijmy.png", {
        alt: { pl: "Przeźroczyste meduzy w wodzie", ua: "Прозорі медузи у воді" },
        title: { pl: "Meduza: nawet około 98% wody.", ua: "Медуза: навіть близько 98% води." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Kilka przeźroczystych niebieskich meduz w ciemnej wodzie. Etykieta po polsku: 98% woda." }
      }),
      text: {
        pl: [
          "To lekcja 4: składniki organizmów. Nie musisz zapamiętać procentów wszystkich pasków naraz.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Błąd pokaże, którą szufladkę jeszcze pomyliłeś."
        ],
        ua: [
          "Це урок 4: складники організмів. Не треба запам’ятовувати відсотки всіх смужок відразу.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Помилка покаже, яку шухлядку ти ще плутаєш."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "pierwiastek chemiczny", ua: "хімічний елемент — з нього складається сполука" },
        { pl: "związek chemiczny", ua: "хімічна сполука — наприклад вода або білок" },
        { pl: "nieorganiczny", ua: "неорганічний — вода і солі" },
        { pl: "organiczny", ua: "органічний — цукри, білки, жири, ДНК" },
        { pl: "sole mineralne", ua: "мінеральні солі" },
        { pl: "wapń", ua: "кальцій — кістки і мушлі" },
        { pl: "magnez", ua: "магній — зелений барвник листків" },
        { pl: "skrobia", ua: "крохмаль — цукор-запас, наприклад у картоплі" },
        { pl: "celuloza", ua: "целюлоза — цукор, який будує стінку рослинної клітини" },
        { pl: "białko", ua: "білок — здебільшого будівельний матеріал" },
        { pl: "tłuszcz", ua: "жир — запас, захист і багато енергії" },
        { pl: "DNA", ua: "ДНК — запис рис, який іде до потомства" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Sześć pierwiastków", ua: "Поняття. Шість елементів" },
      visual: vizGh("l04-pierwiastki.png", {
        alt: { pl: "Sześć najważniejszych pierwiastków organizmu", ua: "Шість найважливіших елементів організму" },
        title: { pl: "Sześć pierwiastków to blisko 98% masy.", ua: "Шість елементів — близько 98% маси." },
        prompt: { pl: "Plansza lekcji 4: węgiel, wodór, tlen, azot, siarka, fosfor. Napis: blisko 98% masy organizmu." }
      }),
      text: {
        pl: [
          "Organizm jest zbudowany ze związków chemicznych: wody, soli mineralnych, cukrów, białek, tłuszczów i kwasów nukleinowych.",
          ["Związek składa się z ", em("pierwiastków chemicznych"), "."],
          ["W bardzo dużej ilości są: ", em("węgiel, wodór, tlen, azot, siarka i fosfor"), ". Razem dają blisko 98% masy organizmu."],
          "Wapń i magnez jest mniej. Mimo to organizm ich potrzebuje. Złoto i plastik nie należą do tej szóstki."
        ],
        ua: [
          "Організм побудований із хімічних сполук: води, мінеральних солей, цукрів, білків, жирів і нуклеїнових кислот.",
          ["Сполука складається з ", em("хімічних елементів"), "."],
          ["У дуже великій кількості є: ", em("вуглець, водень, кисень, азот, сірка і фосфор"), ". Разом дають близько 98% маси організму."],
          "Кальцію і магнію менше. Попри це організм їх потребує. Золото і пластик не входять у цю шістку."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Szóstka i reszta", ua: "Приклад. Шістка і решта" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Najpierw nazwy dużej szóstki: węgiel, wodór, tlen, azot, siarka, fosfor."],
            ua: ["Спочатку назви великої шістки: вуглець, водень, кисень, азот, сірка, фосфор."]
          }
        },
        {
          text: {
            pl: ["One dają blisko 98% masy. To nie znaczy, że innych pierwiastków nie ma."],
            ua: ["Вони дають близько 98% маси. Це не означає, що інших елементів немає."]
          }
        },
        {
          text: {
            pl: ["Wapń i magnez są w mniejszej ilości, a i tak są potrzebne. Złoto do tej listy nie wchodzi."],
            ua: ["Кальцію і магнію менше, але вони все одно потрібні. Золото в цей список не входить."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Kto nie jest w szóstce?", ua: "Коротке питання. Кого немає в шістці?" },
      task: {
        id: "l04-g1",
        type: "single-choice",
        question: {
          pl: "Który pierwiastek nie należy do szóstki, która daje blisko 98% masy organizmu?",
          ua: "Який елемент не входить у шістку, що дає близько 98% маси організму?"
        },
        options: [
          { id: "a", label: { pl: "węgiel", ua: "вуглець" } },
          { id: "b", label: { pl: "tlen", ua: "кисень" } },
          { id: "c", label: { pl: "złoto", ua: "золото" } }
        ],
        answer: "c",
        hint: {
          pl: "Szóstka to węgiel, wodór, tlen, azot, siarka i fosfor.",
          ua: "Шістка — це вуглець, водень, кисень, азот, сірка і фосфор."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Węgiel jest w szóstce. Szukaj pierwiastka, którego na liście nie ma.",
              ua: "Вуглець є в шістці. Шукай елемент, якого в списку немає."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Tlen jest w szóstce. Złoto do niej nie należy.",
              ua: "Кисень є в шістці. Золото до неї не входить."
            }
          }
        ],
        explanation: {
          pl: "Złoto nie należy do szóstki. Węgiel i tlen należą.",
          ua: "Золото не входить у шістку. Вуглець і кисень входять."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Mało znaczy niepotrzebne", ua: "Типова помилка. Мало означає непотрібне" },
      claim: {
        pl: "„Wapnia jest mało, więc organizm może się bez niego obejść.”",
        ua: "«Кальцію мало, тож організм може без нього обійтися.»"
      },
      text: {
        pl: [
          "Mała ilość nie znaczy „zbędny”.",
          "Wapń i magnez nie wchodzą do szóstki 98%, ale organizm ich potrzebuje do prawidłowej pracy."
        ],
        ua: [
          "Мала кількість не означає «непотрібний».",
          "Кальцій і магній не входять у шістку 98%, але організм потребує їх для правильної роботи."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Mniej, ale potrzebny", ua: "Сам. Менше, але потрібний" },
      task: {
        id: "l04-p1",
        type: "single-choice",
        question: {
          pl: "Magnezu w organizmie jest mniej niż tlenu. Co z tego wynika?",
          ua: "Магнію в організмі менше, ніж кисню. Що з цього випливає?"
        },
        options: [
          { id: "a", label: { pl: "Magnez jest zbędny, bo jest go mało.", ua: "Магній непотрібний, бо його мало." } },
          { id: "b", label: { pl: "Magnez jest w mniejszej ilości, ale organizm go potrzebuje.", ua: "Магнію менше, але організм його потребує." } },
          { id: "c", label: { pl: "Magnez razem ze złotem daje blisko 98% masy.", ua: "Магній разом із золотом дає близько 98% маси." } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Mała ilość nie przekreśla pierwiastka. Tlen jest w szóstce, magnez też jest potrzebny.",
              ua: "Мала кількість не скасовує елемент. Кисень у шістці, магній теж потрібен."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "98% dają węgiel, wodór, tlen, azot, siarka i fosfor. Złoto do tej szóstki nie wchodzi.",
              ua: "98% дають вуглець, водень, кисень, азот, сірка і фосфор. Золото в цю шістку не входить."
            }
          }
        ],
        explanation: {
          pl: "Mniej nie znaczy niepotrzebny. Magnez jest potrzebny, choć jest go mniej niż tlenu.",
          ua: "Менше не означає непотрібний. Магній потрібен, хоча його менше, ніж кисню."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Dwie szufladki", ua: "Поняття. Дві шухлядки" },
      visual: tree({
        layout: "nested",
        root: { pl: "składniki organizmów", ua: "складники організмів" },
        groups: [
          {
            title: { pl: "nieorganiczne", ua: "неорганічні" },
            items: [
              { pl: "woda", ua: "вода" },
              { pl: "sole mineralne", ua: "мінеральні солі" }
            ]
          },
          {
            title: { pl: "organiczne", ua: "органічні" },
            items: [
              { pl: "cukry", ua: "цукри" },
              { pl: "białka", ua: "білки" },
              { pl: "tłuszcze", ua: "жири" },
              { pl: "kwasy nukleinowe", ua: "нуклеїнові кислоти" }
            ]
          }
        ]
      }),
      text: {
        pl: [
          "Składniki organizmów dzielimy na dwie grupy. Nie po kolorze, tylko po rodzaju związku.",
          [em("Nieorganiczne"), ": woda i sole mineralne."],
          [em("Organiczne"), ": cukry, białka, tłuszcze i kwasy nukleinowe. DNA jest kwasem nukleinowym, więc stoi w tej szufladce."]
        ],
        ua: [
          "Складники організмів ділимо на дві групи. Не за кольором, а за видом сполуки.",
          [em("Неорганічні"), ": вода і мінеральні солі."],
          [em("Органічні"), ": цукри, білки, жири і нуклеїнові кислоти. ДНК — нуклеїнова кислота, тому вона в цій шухлядці."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Meduza nie jest „tylko organiczna”", ua: "Приклад. Медуза не «лише органічна»" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Meduza żyje, ale prawie całe jej ciało to woda. Woda jest składnikiem nieorganicznym."],
            ua: ["Медуза жива, але майже все її тіло — вода. Вода — неорганічний складник."]
          }
        },
        {
          text: {
            pl: ["Sole mineralne też są nieorganiczne. Jest ich mniej niż wody."],
            ua: ["Мінеральні солі теж неорганічні. Їх менше, ніж води."]
          }
        },
        {
          text: {
            pl: ["Cukry, białka, tłuszcze i DNA są organiczne. Życie nie przenosi wody do tej drugiej szufladki."],
            ua: ["Цукри, білки, жири і ДНК — органічні. Життя не перекладає воду в другу шухлядку."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Gdzie stoi woda?", ua: "Коротке питання. Де стоїть вода?" },
      task: {
        id: "l04-g2",
        type: "single-choice",
        question: {
          pl: "Woda jest składnikiem…",
          ua: "Вода є складником…"
        },
        options: [
          { id: "a", label: { pl: "organicznym, bo jest w żywym organizmie", ua: "органічним, бо є в живому організмі" } },
          { id: "b", label: { pl: "nieorganicznym, razem z solami mineralnymi", ua: "неорганічним, разом із мінеральними солями" } },
          { id: "c", label: { pl: "tym samym co DNA", ua: "тим самим, що й ДНК" } }
        ],
        answer: "b",
        hint: {
          pl: "Dwie szufladki: nieorganiczne to woda i sole. Organiczne to cukry, białka, tłuszcze i kwasy nukleinowe.",
          ua: "Дві шухлядки: неорганічні — вода і солі. Органічні — цукри, білки, жири і нуклеїнові кислоти."
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "To, że woda jest w organizmie, nie robi z niej związku organicznego. Stoi obok soli mineralnych.",
              ua: "Те, що вода є в організмі, не робить її органічною сполукою. Вона стоїть поруч із мінеральними солями."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "DNA jest kwasem nukleinowym, czyli składnikiem organicznym. Woda jest w drugiej szufladce.",
              ua: "ДНК — нуклеїнова кислота, тобто органічний складник. Вода в іншій шухлядці."
            }
          }
        ],
        explanation: {
          pl: "Woda i sole mineralne są nieorganiczne.",
          ua: "Вода і мінеральні солі — неорганічні."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Wszystko organiczne", ua: "Типова помилка. Усе органічне" },
      claim: {
        pl: "„Wszystko w organizmie jest organiczne, bo organizm żyje.”",
        ua: "«Усе в організмі органічне, бо організм живе.»"
      },
      text: {
        pl: [
          "Organizm żyje, ale ma obie grupy składników.",
          "Nieorganiczne: woda i sole mineralne. Organiczne: cukry, białka, tłuszcze i kwasy nukleinowe."
        ],
        ua: [
          "Організм живе, але має обидві групи складників.",
          "Неорганічні: вода і мінеральні солі. Органічні: цукри, білки, жири і нуклеїнові кислоти."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Która para?", ua: "Сам. Яка пара?" },
      task: {
        id: "l04-p2",
        type: "single-choice",
        question: {
          pl: "Która para to składniki nieorganiczne?",
          ua: "Яка пара — це неорганічні складники?"
        },
        options: [
          { id: "a", label: { pl: "woda i sole mineralne", ua: "вода і мінеральні солі" } },
          { id: "b", label: { pl: "cukry i białka", ua: "цукри і білки" } },
          { id: "c", label: { pl: "tłuszcze i DNA", ua: "жири і ДНК" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Cukry i białka są organiczne. Nieorganiczne są woda i sole.",
              ua: "Цукри і білки — органічні. Неорганічні — вода і солі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tłuszcze i DNA są organiczne. Szukaj wody i soli mineralnych.",
              ua: "Жири і ДНК — органічні. Шукай воду і мінеральні солі."
            }
          }
        ],
        explanation: {
          pl: "Nieorganiczne: woda i sole mineralne.",
          ua: "Неорганічні: вода і мінеральні солі."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co jest woda?", ua: "Поняття. Навіщо вода?" },
      visual: vizGh("l04-sklad-czlowieka.png", {
        alt: { pl: "Skład organizmu człowieka w procentach", ua: "Склад організму людини у відсотках" },
        title: { pl: "U człowieka woda to około 65% masy.", ua: "У людини вода — близько 65% маси." },
        prompt: { pl: "Infografika lekcji 4: 65% woda, 18% białka, 10% tłuszcze, 4% sole mineralne, 1% cukry, 2% kwasy nukleinowe i inne związki." }
      }),
      text: {
        pl: [
          [em("Woda"), " to główny składnik większości organizmów. U człowieka około 65% masy ciała. U meduz nawet około 98%."],
          "Woda transportuje substancje wewnątrz komórki i między komórkami.",
          "U zwierząt pomaga usuwać zbędne substancje, na przykład z moczem.",
          "Jest środowiskiem przemian chemicznych. Bierze udział w niektórych procesach, na przykład w fotosyntezie — szczegóły fotosyntezy będą później.",
          "U ssaków woda jest głównym składnikiem potu. Parowanie potu ochładza ciało."
        ],
        ua: [
          [em("Вода"), " — головний складник більшості організмів. У людини близько 65% маси тіла. У медуз навіть близько 98%."],
          "Вода транспортує речовини всередині клітини і між клітинами.",
          "У тварин допомагає виводити непотрібні речовини, наприклад із сечею.",
          "Є середовищем хімічних перетворень. Бере участь у деяких процесах, наприклад у фотосинтезі — подробиці будуть пізніше.",
          "У ссавців вода — головний складник поту. Випаровування поту охолоджує тіло."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mocz i pot", ua: "Приклад. Сеча і піт" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Woda wozi substancje w komórce i między komórkami. To transport."],
            ua: ["Вода возить речовини в клітині і між клітинами. Це транспорт."]
          }
        },
        {
          text: {
            pl: ["Część zbędnych substancji wychodzi z moczem. Woda pomaga je usunąć."],
            ua: ["Частина непотрібних речовин виходить із сечею. Вода допомагає їх вивести."]
          }
        },
        {
          text: {
            pl: ["U ssaka pot jest głównie wodą. Gdy pot paruje ze skóry, ciało się ochładza. To nie jest zapis cech."],
            ua: ["У ссавця піт — здебільшого вода. Коли піт випаровується зі шкіри, тіло охолоджується. Це не запис рис."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jak ciało się ochładza?", ua: "Коротке питання. Як тіло охолоджується?" },
      task: {
        id: "l04-g3",
        type: "single-choice",
        question: {
          pl: "Jak woda pomaga ssakom ochłodzić ciało?",
          ua: "Як вода допомагає ссавцям охолодити тіло?"
        },
        options: [
          { id: "a", label: { pl: "Parowanie potu ze skóry ochładza organizm.", ua: "Випаровування поту зі шкіри охолоджує організм." } },
          { id: "b", label: { pl: "Woda zamienia się w kości.", ua: "Вода перетворюється на кістки." } },
          { id: "c", label: { pl: "Woda zapisuje kolor piór.", ua: "Вода записує колір пір’я." } }
        ],
        answer: "a",
        hint: {
          pl: "U ssaków pot jest głównie wodą. Patrz, co dzieje się, gdy pot znika ze skóry.",
          ua: "У ссавців піт — здебільшого вода. Дивись, що відбувається, коли піт зникає зі шкіри."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kości buduje wapń, nie woda. Tu pytamy o temperaturę ciała.",
              ua: "Кістки будує кальцій, не вода. Тут питання про температуру тіла."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zapis cech to DNA. Woda przy pocie reguluje temperaturę.",
              ua: "Запис рис — це ДНК. Вода в поті регулює температуру."
            }
          }
        ],
        explanation: {
          pl: "Pot jest głównie wodą. Parowanie potu ochładza ciało.",
          ua: "Піт — здебільшого вода. Випаровування поту охолоджує тіло."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Woda jak DNA", ua: "Типова помилка. Вода як ДНК" },
      claim: {
        pl: "„Woda zapisuje kolor piór i przekazuje go pisklętom.”",
        ua: "«Вода записує колір пір’я і передає його пташенятам.»"
      },
      text: {
        pl: [
          "Zapis cech to rola DNA, nie wody.",
          "Woda transportuje substancje, pomaga usuwać zbędne i reguluje temperaturę ciała."
        ],
        ua: [
          "Запис рис — роль ДНК, не води.",
          "Вода транспортує речовини, допомагає виводити непотрібне і регулює температуру тіла."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Które funkcje wody?", ua: "Сам. Які функції води?" },
      task: {
        id: "l04-p3",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe funkcje wody.",
          ua: "Познач усі правдиві функції води."
        },
        options: [
          { id: "a", label: { pl: "transportuje substancje", ua: "транспортує речовини" } },
          { id: "b", label: { pl: "pomaga usuwać zbędne substancje, na przykład z moczem", ua: "допомагає виводити непотрібні речовини, наприклад із сечею" } },
          { id: "c", label: { pl: "zapisuje cechy organizmu jak DNA", ua: "записує риси організму, як ДНК" } },
          { id: "d", label: { pl: "u ssaków pomaga regulować temperaturę przez pot", ua: "у ссавців допомагає регулювати температуру через піт" } }
        ],
        answer: ["a", "b", "d"],
        mistakes: [
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Zdanie C jest o DNA, nie o wodzie. Zostaw transport, usuwanie zbędnych substancji i pot.",
              ua: "Речення C — про ДНК, не про воду. Залиш транспорт, виведення непотрібного і піт."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To rola DNA. Woda wozi substancje, pomaga je usuwać i chłodzi ciało przez pot.",
              ua: "Це роль ДНК. Вода возить речовини, допомагає їх виводити і охолоджує тіло через піт."
            }
          },
          {
            answer: "a,b",
            feedback: {
              pl: "Transport i mocz są prawdziwe. Brakuje jeszcze regulacji temperatury u ssaków.",
              ua: "Транспорт і сеча правдиві. Бракує ще регуляції температури у ссавців."
            }
          },
          {
            answer: "a,d",
            feedback: {
              pl: "Transport i pot są prawdziwe. Brakuje pomocy w usuwaniu zbędnych substancji.",
              ua: "Транспорт і піт правдиві. Бракує допомоги у виведенні непотрібних речовин."
            }
          },
          {
            answer: "b,d",
            feedback: {
              pl: "Mocz i pot są prawdziwe. Brakuje transportu substancji.",
              ua: "Сеча і піт правдиві. Бракує транспорту речовин."
            }
          }
        ],
        explanation: {
          pl: "Woda transportuje, pomaga usuwać zbędne substancje i reguluje temperaturę. Zapis cech to DNA.",
          ua: "Вода транспортує, допомагає виводити непотрібне і регулює температуру. Запис рис — це ДНК."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Wapń i magnez", ua: "Поняття. Кальцій і магній" },
      visual: vizGh("l04-sole.png", {
        alt: { pl: "Wapń w kościach i magnez w zielonych liściach", ua: "Кальцій у кістках і магній у зеленому листі" },
        title: { pl: "Dwa pierwiastki, dwie różne prace.", ua: "Два елементи, дві різні роботи." },
        prompt: { pl: "Kolaż lekcji 4: muszla i kości — wapń. Zielone liście — magnez w chlorofilu." }
      }),
      text: {
        pl: [
          [em("Sole mineralne"), " dostarczają pierwiastków takich jak fosfor, wapń, żelazo i magnez. Regulują procesy w komórkach."],
          "Fosfor jest i w wielkiej szóstce, i w solach. Wapnia i magnezu jest mniej, ale sole je przynoszą.",
          [em("Wapń"), " buduje muszle i kości. Gdy zwierzęciu brakuje wapnia, kości mogą być słabsze."],
          [em("Magnez"), " wchodzi w skład zielonego barwnika liści — chlorofilu. Ten barwnik pochłania światło potrzebne roślinom. Przy braku magnezu liście mogą być blade."]
        ],
        ua: [
          [em("Мінеральні солі"), " дають елементи, зокрема фосфор, кальцій, залізо і магній. Регулюють процеси в клітинах."],
          "Фосфор є і у великій шістці, і в солях. Кальцію і магнію менше, але солі їх приносять.",
          [em("Кальцій"), " будує мушлі і кістки. Коли тварині бракує кальцію, кістки можуть бути слабші."],
          [em("Магній"), " входить до зеленого барвника листків — хлорофілу. Цей барвник поглинає світло, потрібне рослинам. При браку магнію листки можуть бути бліді."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Kość i liść", ua: "Приклад. Кістка і листок" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Muszla i kość potrzebują wapnia. To budowa, nie zielony kolor."],
            ua: ["Мушля і кістка потребують кальцію. Це будова, не зелений колір."]
          }
        },
        {
          text: {
            pl: ["Zielony liść potrzebuje magnezu, bo magnez jest w chlorofilu."],
            ua: ["Зелений листок потребує магнію, бо магній є в хлорофілі."]
          }
        },
        {
          text: {
            pl: ["Gdy zamienisz te dwa pierwiastki miejscami, oba zdania stają się fałszywe."],
            ua: ["Якщо поміняти ці два елементи місцями, обидва речення стають хибними."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co buduje kości?", ua: "Коротке питання. Що будує кістки?" },
      task: {
        id: "l04-g4",
        type: "single-choice",
        question: {
          pl: "Który pierwiastek buduje kości i muszle?",
          ua: "Який елемент будує кістки і мушлі?"
        },
        options: [
          { id: "a", label: { pl: "wapń", ua: "кальцій" } },
          { id: "b", label: { pl: "magnez", ua: "магній" } },
          { id: "c", label: { pl: "DNA", ua: "ДНК" } }
        ],
        answer: "a",
        hint: {
          pl: "Jeden pierwiastek buduje twarde części. Drugi jest w zielonym barwniku.",
          ua: "Один елемент будує тверді частини. Другий є в зеленому барвнику."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Magnez jest w chlorofilu, czyli w zielonym barwniku liści. Kości i muszle to wapń.",
              ua: "Магній є в хлорофілі, тобто в зеленому барвнику листків. Кістки і мушлі — це кальцій."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "DNA zapisuje cechy. Twarde części, kości i muszle, buduje wapń.",
              ua: "ДНК записує риси. Тверді частини, кістки і мушлі, будує кальцій."
            }
          }
        ],
        explanation: {
          pl: "Wapń buduje kości i muszle.",
          ua: "Кальцій будує кістки і мушлі."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Zamiana ról", ua: "Типова помилка. Обмін ролей" },
      claim: {
        pl: "„Magnez buduje kości, a wapń barwi liście na zielono.”",
        ua: "«Магній будує кістки, а кальцій забарвлює листки в зелений.»"
      },
      text: {
        pl: [
          "Role są odwrotnie.",
          "Wapń buduje kości i muszle. Magnez wchodzi w skład chlorofilu — zielonego barwnika liści."
        ],
        ua: [
          "Ролі навпаки.",
          "Кальцій будує кістки і мушлі. Магній входить до хлорофілу — зеленого барвника листків."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Czego brakuje?", ua: "Сам. Чого бракує?" },
      task: {
        id: "l04-p4",
        type: "single-choice",
        question: {
          pl: "Zwierzęciu brakuje wapnia, a roślinie magnezu. Co jest najbardziej prawdopodobne?",
          ua: "Тварині бракує кальцію, а рослині магнію. Що найбільш імовірне?"
        },
        options: [
          { id: "a", label: { pl: "słabsze kości u zwierzęcia; blade, mniej zielone liście u rośliny", ua: "слабші кістки в тварини; бліді, менш зелені листки в рослини" } },
          { id: "b", label: { pl: "zwierzę zaczyna fotosyntetyzować, a roślina dostaje muszlę", ua: "тварина починає фотосинтезувати, а рослина отримує мушлю" } },
          { id: "c", label: { pl: "nic się nie zmienia, bo tych pierwiastków jest mało", ua: "нічого не змінюється, бо цих елементів мало" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wapń nie uruchamia fotosyntezy u zwierzęcia. Brak wapnia osłabia kości, brak magnezu wybiela liście.",
              ua: "Кальцій не вмикає фотосинтез у тварини. Брак кальцію послаблює кістки, брак магнію знебарвлює листки."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mała ilość nie znaczy, że brak jest obojętny. Kości i zielony barwnik na tym tracą.",
              ua: "Мала кількість не означає, що брак байдужий. Кістки і зелений барвник від цього втрачають."
            }
          }
        ],
        explanation: {
          pl: "Bez wapnia kości mogą być słabsze. Bez magnezu liście mogą być blade.",
          ua: "Без кальцію кістки можуть бути слабші. Без магнію листки можуть бути бліді."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy prace cukrów", ua: "Поняття. Три роботи цукрів" },
      visual: vizGh("l04-cukry.png", {
        alt: { pl: "Energia, zapas i budowa — trzy funkcje cukrów", ua: "Енергія, запас і будова — три функції цукрів" },
        title: { pl: "Energia, zapas, budowa.", ua: "Енергія, запас, будова." },
        prompt: { pl: "Kolaż lekcji 4: miód — energia; ziemniaki — skrobia jako zapas; bawełna — celuloza jako budowa." }
      }),
      text: {
        pl: [
          ["Główna funkcja ", em("cukrów"), " to dostarczanie energii. Glukoza jest na przykład w miodzie i w winogronach."],
          "Niektóre cukry są materiałem zapasowym. W ziemniakach jest skrobia.",
          "Inne cukry budują organizm. Celuloza wchodzi w skład ścian komórek roślinnych. Bawełna to prawie czysta celuloza.",
          "Cukier spożywczy otrzymuje się między innymi z łodyg trzciny cukrowej. To przykład, nie przepis.",
          "Trzy funkcje: energia, zapas, budowa. Nie każda z nich pasuje do każdego cukru."
        ],
        ua: [
          ["Головна функція ", em("цукрів"), " — давати енергію. Глюкоза є, наприклад, у меді і у винограді."],
          "Деякі цукри — запасний матеріал. У картоплі є крохмаль.",
          "Інші цукри будують організм. Целюлоза входить до стінок рослинних клітин. Бавовна — майже чиста целюлоза.",
          "Харчовий цукор одержують зокрема зі стебел цукрової тростини. Це приклад, не рецепт.",
          "Три функції: енергія, запас, будова. Не кожна з них пасує до кожного цукру."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Miód, ziemniak, bawełna", ua: "Приклад. Мед, картопля, бавовна" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Miód ma glukozę. To cukier, który dostarcza energii."],
            ua: ["У меді є глюкоза. Це цукор, який дає енергію."]
          }
        },
        {
          text: {
            pl: ["Ziemniak ma skrobię. Roślina trzyma ją jako zapas, nie jako ścianę komórki."],
            ua: ["У картоплі є крохмаль. Рослина тримає його як запас, не як стінку клітини."]
          }
        },
        {
          text: {
            pl: ["Bawełna to prawie czysta celuloza. Celuloza buduje ścianę komórki roślinnej."],
            ua: ["Бавовна — майже чиста целюлоза. Целюлоза будує стінку рослинної клітини."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Skrobia", ua: "Коротке питання. Крохмаль" },
      task: {
        id: "l04-g5",
        type: "single-choice",
        question: {
          pl: "Skrobia w ziemniaku to cukier, który…",
          ua: "Крохмаль у картоплі — це цукор, який…"
        },
        options: [
          { id: "a", label: { pl: "jest materiałem zapasowym", ua: "є запасним матеріалом" } },
          { id: "b", label: { pl: "buduje kości ssaków", ua: "будує кістки ссавців" } },
          { id: "c", label: { pl: "zapisuje cechy w DNA", ua: "записує риси в ДНК" } }
        ],
        answer: "a",
        hint: {
          pl: "Ziemniak nie jest kością i nie jest nicią DNA. Roślina coś w nim odkłada.",
          ua: "Картопля — не кістка і не нитка ДНК. Рослина щось у ній відкладає."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kości buduje wapń. Skrobia jest zapasem rośliny.",
              ua: "Кістки будує кальцій. Крохмаль — запас рослини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Cechy zapisuje DNA. Skrobia w ziemniaku to zapas.",
              ua: "Риси записує ДНК. Крохмаль у картоплі — це запас."
            }
          }
        ],
        explanation: {
          pl: "Skrobia jest materiałem zapasowym.",
          ua: "Крохмаль — запасний матеріал."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Celuloza jak skrobia", ua: "Типова помилка. Целюлоза як крохмаль" },
      claim: {
        pl: "„Celuloza w bawełnie to zapas, tak samo jak skrobia w ziemniaku.”",
        ua: "«Целюлоза в бавовні — це запас, так само як крохмаль у картоплі.»"
      },
      text: {
        pl: [
          "Oba są cukrami, ale nie tę samą pracę wykonują.",
          "Skrobia to zapas. Celuloza buduje ściany komórek roślinnych."
        ],
        ua: [
          "Обидва — цукри, але роботу виконують різну.",
          "Крохмаль — запас. Целюлоза будує стінки рослинних клітин."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ściana komórki", ua: "Сам. Стінка клітини" },
      task: {
        id: "l04-p5",
        type: "single-choice",
        question: {
          pl: "Celuloza wchodzi w skład ściany komórki roślinnej. Jaka to funkcja cukru?",
          ua: "Целюлоза входить до стінки рослинної клітини. Яка це функція цукру?"
        },
        options: [
          { id: "a", label: { pl: "budowa", ua: "будова" } },
          { id: "b", label: { pl: "tylko dostarczanie energii, jak glukoza w miodzie", ua: "лише постачання енергії, як глюкоза в меді" } },
          { id: "c", label: { pl: "ochrona przed utratą ciepła, jak tłuszcz foki", ua: "захист від втрати тепла, як жир тюленя" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukoza w miodzie daje energię. Celuloza w ścianie komórki buduje.",
              ua: "Глюкоза в меді дає енергію. Целюлоза в стінці клітини будує."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Warstwa tłuszczu chroni przed zimnem. Celuloza jest cukrem budulcowym rośliny.",
              ua: "Шар жиру захищає від холоду. Целюлоза — будівельний цукор рослини."
            }
          }
        ],
        explanation: {
          pl: "Celuloza buduje ścianę komórki roślinnej.",
          ua: "Целюлоза будує стінку рослинної клітини."
        }
      }
    },

    {
      type: "comparison",
      heading: { pl: "Pojęcie. Białka i tłuszcze", ua: "Поняття. Білки і жири" },
      visual: vizGh("l04-bialka-tluszcze.png", {
        alt: { pl: "Funkcje białek i tłuszczów", ua: "Функції білків і жирів" },
        title: { pl: "Białka głównie budują. Tłuszcze magazynują i chronią.", ua: "Білки здебільшого будують. Жири запасають і захищають." },
        prompt: { pl: "Kolaż lekcji 4: mleko, groch, foka, słonecznik. Tłuszcze dają około dwa razy więcej energii niż cukry." }
      }),
      text: {
        pl: [
          [em("Białka"), " to głównie materiał budulcowy: mięśnie, skóra, nasiona. Mleko jest bogate w białko potrzebne do wzrostu."],
          "Białka bywają też zapasem, na przykład w nasionach grochu, i regulują pracę organizmu.",
          [em("Tłuszcze"), " to bogaty materiał zapasowy w nasionach i w tkankach zwierząt. Oliwę otrzymuje się z owoców oliwki."],
          "Tłuszcz pod skórą chroni przed utratą ciepła, tak jak u foki. Z tej samej porcji tłuszcze dają około dwa razy więcej energii niż cukry."
        ],
        ua: [
          [em("Білки"), " — здебільшого будівельний матеріал: м’язи, шкіра, насіння. Молоко багате на білок, потрібний для росту."],
          "Білки бувають також запасом, наприклад у насінні гороху, і регулюють роботу організму.",
          [em("Жири"), " — багатий запасний матеріал у насінні і в тканинах тварин. Олію одержують із плодів оливи."],
          "Жир під шкірою захищає від втрати тепла, як у тюленя. З тієї самої порції жири дають близько вдвічі більше енергії, ніж цукри."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Mleko, groch, foka", ua: "Приклад. Молоко, горох, тюлень" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Mleko ma białko do wzrostu. Białko tu buduje ciało."],
            ua: ["У молоці є білок для росту. Білок тут будує тіло."]
          }
        },
        {
          text: {
            pl: ["Nasiona grochu też mają białko, ale jako zapas. To druga rola białek, nie główna."],
            ua: ["У насінні гороху теж є білок, але як запас. Це друга роль білків, не головна."]
          }
        },
        {
          text: {
            pl: ["Foka ma tłuszcz pod skórą. On chroni przed utratą ciepła i jest bogatym zapasem energii."],
            ua: ["У тюленя є жир під шкірою. Він захищає від втрати тепла і є багатим запасом енергії."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Główna rola białek", ua: "Коротке питання. Головна роль білків" },
      task: {
        id: "l04-g6",
        type: "single-choice",
        question: {
          pl: "Jaka jest główna rola białek?",
          ua: "Яка головна роль білків?"
        },
        options: [
          { id: "a", label: { pl: "materiał budulcowy ciała", ua: "будівельний матеріал тіла" } },
          { id: "b", label: { pl: "ochładzanie ciała jak pot", ua: "охолодження тіла, як піт" } },
          { id: "c", label: { pl: "zielony barwnik liści", ua: "зелений барвник листків" } }
        ],
        answer: "a",
        hint: {
          pl: "Mleko i mięśnie podpowiadają budowę. Pot to woda, zielony barwnik to magnez.",
          ua: "Молоко і м’язи підказують будову. Піт — це вода, зелений барвник — магній."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ochładzanie przez pot to rola wody. Białka przede wszystkim budują ciało.",
              ua: "Охолодження через піт — роль води. Білки передусім будують тіло."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Zielony barwnik zawiera magnez. Białka są materiałem budulcowym.",
              ua: "Зелений барвник містить магній. Білки — будівельний матеріал."
            }
          }
        ],
        explanation: {
          pl: "Białka to głównie materiał budulcowy. Bywają też zapasem i regulują pracę organizmu.",
          ua: "Білки — здебільшого будівельний матеріал. Бувають також запасом і регулюють роботу організму."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Kto daje więcej energii?", ua: "Типова помилка. Хто дає більше енергії?" },
      claim: {
        pl: "„Tłuszcze dają mniej energii niż taka sama porcja cukrów.”",
        ua: "«Жири дають менше енергії, ніж така сама порція цукрів.»"
      },
      text: {
        pl: [
          "Kierunek jest odwrotny.",
          "Z tej samej porcji tłuszcze dają około dwa razy więcej energii niż cukry. Cukry i tak pozostają ważnym źródłem energii."
        ],
        ua: [
          "Напрям протилежний.",
          "З тієї самої порції жири дають близько вдвічі більше енергії, ніж цукри. Цукри все одно лишаються важливим джерелом енергії."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Ta sama porcja", ua: "Сам. Та сама порція" },
      task: {
        id: "l04-p6",
        type: "single-choice",
        question: {
          pl: "Z tej samej porcji więcej energii dostarczają…",
          ua: "З тієї самої порції більше енергії дають…"
        },
        options: [
          { id: "a", label: { pl: "cukry", ua: "цукри" } },
          { id: "b", label: { pl: "tłuszcze", ua: "жири" } },
          { id: "c", label: { pl: "woda", ua: "вода" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Cukry dają energię, ale z tej samej porcji tłuszcze dają jej około dwa razy więcej.",
              ua: "Цукри дають енергію, але з тієї самої порції жири дають її близько вдвічі більше."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Woda transportuje i chłodzi. Energię z porcji porównujemy między tłuszczami i cukrami.",
              ua: "Вода транспортує і охолоджує. Енергію з порції порівнюємо між жирами і цукрами."
            }
          }
        ],
        explanation: {
          pl: "Tłuszcze dają około dwa razy więcej energii niż taka sama porcja cukrów.",
          ua: "Жири дають близько вдвічі більше енергії, ніж така сама порція цукрів."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. DNA", ua: "Поняття. ДНК" },
      visual: vizGh("l04-dna-pingwiny.png", {
        alt: { pl: "Pingwiny cesarskie z pisklętami", ua: "Імператорські пінгвіни з пташенятами" },
        title: { pl: "Zapis cech przechodzi do piskląt.", ua: "Запис рис переходить до пташенят." },
        prompt: { pl: "Zdjęcie lekcji 4: pingwiny cesarskie z pisklętami. Bez helisy DNA i bez napisów." }
      }),
      text: {
        pl: [
          [em("Kwasy nukleinowe"), " to związki chemiczne w komórkach wszystkich organizmów. Stoją w szufladce składników organicznych."],
          ["Najważniejszy z nich to ", em("DNA"), ". Jest w nim zapisana informacja o cechach: kolor kwiatu, barwa piór, to, jak wyglądasz."],
          "Ta informacja przechodzi do potomstwa. Dziś nie uczymy się wzoru DNA ani budowy komórki."
        ],
        ua: [
          [em("Нуклеїнові кислоти"), " — хімічні сполуки в клітинах усіх організмів. Вони в шухлядці органічних складників."],
          ["Найважливіша з них — ", em("ДНК"), ". У ній записана інформація про риси: колір квітки, барва пір’я, те, як ти виглядаєш."],
          "Ця інформація переходить до потомства. Сьогодні не вчимо формулу ДНК і не будову клітини."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pisklę pingwina", ua: "Приклад. Пташеня пінгвіна" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dorosły pingwin ma zapis cech w DNA: między innymi barwę piór."],
            ua: ["Дорослий пінгвін має запис рис у ДНК: зокрема барву пір’я."]
          }
        },
        {
          text: {
            pl: ["Pisklę dostaje ten zapis od rodziców. Dlatego jest do nich podobne."],
            ua: ["Пташеня отримує цей запис від батьків. Тому воно на них схоже."]
          }
        },
        {
          text: {
            pl: ["Podobieństwa nie tłumaczy pot ani muszla. Tłuszcz foki grzeje, ale nie zapisuje koloru piór."],
            ua: ["Схожість не пояснює піт і не мушля. Жир тюленя гріє, але не записує колір пір’я."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co jest DNA?", ua: "Коротке питання. Навіщо ДНК?" },
      task: {
        id: "l04-g7",
        type: "single-choice",
        question: {
          pl: "Do czego służy DNA?",
          ua: "Для чого служить ДНК?"
        },
        options: [
          { id: "a", label: { pl: "zawiera informację o cechach i przekazuje ją potomstwu", ua: "містить інформацію про риси і передає її потомству" } },
          { id: "b", label: { pl: "ochładza ciało jak pot", ua: "охолоджує тіло, як піт" } },
          { id: "c", label: { pl: "buduje muszle", ua: "будує мушлі" } }
        ],
        answer: "a",
        hint: {
          pl: "Pisklę jest podobne do rodziców. Szukaj zapisu, nie budowy kości i nie potu.",
          ua: "Пташеня схоже на батьків. Шукай запис, не будову кісток і не піт."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ochładzanie to woda w pocie. DNA niesie informację o cechach.",
              ua: "Охолодження — це вода в поті. ДНК несе інформацію про риси."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Muszle buduje wapń. DNA zapisuje cechy i przekazuje je potomstwu.",
              ua: "Мушлі будує кальцій. ДНК записує риси і передає їх потомству."
            }
          }
        ],
        explanation: {
          pl: "DNA zawiera informację o cechach i przekazuje ją potomstwu.",
          ua: "ДНК містить інформацію про риси і передає її потомству."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. DNA buduje muszlę", ua: "Типова помилка. ДНК будує мушлю" },
      claim: {
        pl: "„DNA buduje muszle, bo jest ważnym składnikiem organizmu.”",
        ua: "«ДНК будує мушлі, бо є важливим складником організму.»"
      },
      text: {
        pl: [
          "Ważny nie znaczy „buduje kości”.",
          "Muszle buduje wapń. DNA jest zapisem cech przekazywanym potomstwu."
        ],
        ua: [
          "Важливий не означає «будує кістки».",
          "Мушлі будує кальцій. ДНК — це запис рис, який передають потомству."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dlaczego pisklę jest podobne?", ua: "Сам. Чому пташеня схоже?" },
      task: {
        id: "l04-p7",
        type: "single-choice",
        question: {
          pl: "Pisklę pingwina jest podobne do rodziców. Dlaczego?",
          ua: "Пташеня пінгвіна схоже на батьків. Чому?"
        },
        options: [
          { id: "a", label: { pl: "Dostało od nich zapis cech w DNA.", ua: "Отримало від них запис рис у ДНК." } },
          { id: "b", label: { pl: "Ma w ciele więcej wody niż meduza.", ua: "Має в тілі більше води, ніж медуза." } },
          { id: "c", label: { pl: "Magnez zabarwił mu pióra na kolor rodziców.", ua: "Магній забарвив йому пір’я в колір батьків." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wody jest dużo, ale podobieństwo cech tłumaczy DNA, nie procent wody.",
              ua: "Води багато, але схожість рис пояснює ДНК, не відсоток води."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Magnez jest w zielonym barwniku liści. Barwę piór zapisuje DNA.",
              ua: "Магній є в зеленому барвнику листків. Барву пір’я записує ДНК."
            }
          }
        ],
        explanation: {
          pl: "Informacja o cechach w DNA przechodzi do potomstwa.",
          ua: "Інформація про риси в ДНК переходить до потомства."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Sześć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą rolę składnika sprawdziłeś nie tym słowem."
        ],
        ua: [
          "Шість питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку роль складника ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Szóstka", ua: "Перевірка 1. Шістка" },
      task: {
        id: "l04-t1",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie pierwiastki z szóstki, która stanowi blisko 98% masy organizmu.",
          ua: "Познач усі елементи з шістки, яка становить близько 98% маси організму."
        },
        options: [
          { id: "a", label: { pl: "węgiel", ua: "вуглець" } },
          { id: "b", label: { pl: "wodór", ua: "водень" } },
          { id: "c", label: { pl: "tlen", ua: "кисень" } },
          { id: "d", label: { pl: "azot", ua: "азот" } },
          { id: "e", label: { pl: "siarka", ua: "сірка" } },
          { id: "f", label: { pl: "fosfor", ua: "фосфор" } },
          { id: "g", label: { pl: "plastik", ua: "пластик" } }
        ],
        answer: ["a", "b", "c", "d", "e", "f"],
        mistakes: [
          {
            answer: "a,b,c,d,e,f,g",
            feedback: {
              pl: "Plastik nie jest pierwiastkiem organizmu. Zostań przy sześciu nazwach.",
              ua: "Пластик не є елементом організму. Залишся при шести назвах."
            }
          },
          {
            answer: "g",
            feedback: {
              pl: "Plastik nie należy do szóstki. Szukaj węgla, wodoru, tlenu, azotu, siarki i fosforu.",
              ua: "Пластик не входить у шістку. Шукай вуглець, водень, кисень, азот, сірку і фосфор."
            }
          },
          {
            answer: "a,b,c",
            feedback: {
              pl: "Węgiel, wodór i tlen są w szóstce. Brakuje jeszcze azotu, siarki i fosforu.",
              ua: "Вуглець, водень і кисень є в шістці. Бракує ще азоту, сірки і фосфору."
            }
          }
        ],
        explanation: {
          pl: "Węgiel, wodór, tlen, azot, siarka i fosfor. Plastik nie jest pierwiastkiem organizmu.",
          ua: "Вуглець, водень, кисень, азот, сірка і фосфор. Пластик не є елементом організму."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Ile wody?", ua: "Перевірка 2. Скільки води?" },
      task: {
        id: "l04-t2",
        type: "single-choice",
        question: {
          pl: "Które zdanie o ilości wody jest prawdziwe?",
          ua: "Яке речення про кількість води правдиве?"
        },
        options: [
          { id: "a", label: { pl: "Człowiek i meduza mają około 98% wody.", ua: "Людина і медуза мають близько 98% води." } },
          { id: "b", label: { pl: "U człowieka woda to około 65% masy, u meduzy nawet około 98%.", ua: "У людини вода — близько 65% маси, у медузи навіть близько 98%." } },
          { id: "c", label: { pl: "U człowieka prawie nie ma wody.", ua: "У людини майже немає води." } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "98% pasuje do meduzy, nie do człowieka. U człowieka woda to około 65%.",
              ua: "98% пасує до медузи, не до людини. У людини вода — близько 65%."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Woda jest głównym składnikiem. U człowieka to około 65% masy, nie ślad.",
              ua: "Вода — головний складник. У людини це близько 65% маси, не слід."
            }
          }
        ],
        explanation: {
          pl: "Człowiek: około 65%. Meduza: nawet około 98%.",
          ua: "Людина: близько 65%. Медуза: навіть близько 98%."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Wapń i magnez", ua: "Перевірка 3. Кальцій і магній" },
      task: {
        id: "l04-t3",
        type: "single-choice",
        question: {
          pl: "Które połączenie jest w całości poprawne?",
          ua: "Яке поєднання повністю правильне?"
        },
        options: [
          { id: "a", label: { pl: "wapń buduje kości i muszle; magnez jest w zielonym barwniku liści", ua: "кальцій будує кістки і мушлі; магній є в зеленому барвнику листків" } },
          { id: "b", label: { pl: "oba zapisują cechy potomstwu", ua: "обидва записують риси потомству" } },
          { id: "c", label: { pl: "oba dają dwa razy więcej energii niż tłuszcze", ua: "обидва дають удвічі більше енергії, ніж жири" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zapis cech to DNA. Wapń buduje, magnez jest w chlorofilu.",
              ua: "Запис рис — це ДНК. Кальцій будує, магній є в хлорофілі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Więcej energii z tej samej porcji dają tłuszcze, nie wapń i nie magnez.",
              ua: "Більше енергії з тієї самої порції дають жири, не кальцій і не магній."
            }
          }
        ],
        explanation: {
          pl: "Wapń buduje kości i muszle. Magnez jest w zielonym barwniku liści.",
          ua: "Кальцій будує кістки і мушлі. Магній є в зеленому барвнику листків."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Szufladka organiczna", ua: "Перевірка 4. Органічна шухлядка" },
      task: {
        id: "l04-t4",
        type: "single-choice",
        question: {
          pl: "Która lista to składniki organiczne?",
          ua: "Який список — це органічні складники?"
        },
        options: [
          { id: "a", label: { pl: "woda i sole mineralne", ua: "вода і мінеральні солі" } },
          { id: "b", label: { pl: "cukry, białka, tłuszcze i kwasy nukleinowe", ua: "цукри, білки, жири і нуклеїнові кислоти" } },
          { id: "c", label: { pl: "tylko wapń i magnez", ua: "лише кальцій і магній" } }
        ],
        answer: "b",
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Woda i sole są nieorganiczne. Organiczne to cukry, białka, tłuszcze i kwasy nukleinowe.",
              ua: "Вода і солі — неорганічні. Органічні — цукри, білки, жири і нуклеїнові кислоти."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wapń i magnez pochodzą z soli mineralnych. To nie lista związków organicznych.",
              ua: "Кальцій і магній походять із мінеральних солей. Це не список органічних сполук."
            }
          }
        ],
        explanation: {
          pl: "Organiczne: cukry, białka, tłuszcze i kwasy nukleinowe.",
          ua: "Органічні: цукри, білки, жири і нуклеїнові кислоти."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Cukry, białka, tłuszcze", ua: "Перевірка 5. Цукри, білки, жири" },
      task: {
        id: "l04-t5",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe zdania.",
          ua: "Познач усі правдиві речення."
        },
        options: [
          { id: "a", label: { pl: "Cukry dostarczają energii; skrobia to zapas, celuloza buduje ściany komórek roślinnych.", ua: "Цукри дають енергію; крохмаль — запас, целюлоза будує стінки рослинних клітин." } },
          { id: "b", label: { pl: "Białka to głównie materiał budulcowy; bywają też zapasem i regulują pracę organizmu.", ua: "Білки — здебільшого будівельний матеріал; бувають також запасом і регулюють роботу організму." } },
          { id: "c", label: { pl: "Tłuszcze są zapasem, chronią przed utratą ciepła i z tej samej porcji dają więcej energii niż cukry.", ua: "Жири є запасом, захищають від втрати тепла і з тієї самої порції дають більше енергії, ніж цукри." } },
          { id: "d", label: { pl: "Tłuszcze nie występują w nasionach ani u zwierząt.", ua: "Жирів немає в насінні і в тварин." } }
        ],
        answer: ["a", "b", "c"],
        mistakes: [
          {
            answer: "a,b,c,d",
            feedback: {
              pl: "Zdanie D jest fałszywe. Tłuszcze są w nasionach i w tkankach zwierząt.",
              ua: "Речення D хибне. Жири є в насінні і в тканинах тварин."
            }
          },
          {
            answer: "d",
            feedback: {
              pl: "To jedyne fałszywe zdanie. Tłuszcz foki i tłuszcz w nasionach są w lekcji.",
              ua: "Це єдине хибне речення. Жир тюленя і жир у насінні є в уроці."
            }
          },
          {
            answer: "a,b",
            feedback: {
              pl: "A i B są prawdziwe. Brakuje zdania C o tłuszczach: zapas, ochrona i więcej energii niż cukry.",
              ua: "A і B правдиві. Бракує речення C про жири: запас, захист і більше енергії, ніж цукри."
            }
          },
          {
            answer: "a,c",
            feedback: {
              pl: "A i C są prawdziwe. Brakuje zdania B: białka głównie budują, bywają zapasem i regulują pracę.",
              ua: "A і C правдиві. Бракує речення B: білки здебільшого будують, бувають запасом і регулюють роботу."
            }
          },
          {
            answer: "b,c",
            feedback: {
              pl: "B i C są prawdziwe. Brakuje zdania A o trzech pracach cukrów.",
              ua: "B і C правдиві. Бракує речення A про три роботи цукрів."
            }
          }
        ],
        explanation: {
          pl: "Prawdziwe są A, B i C. Tłuszcze występują w nasionach i u zwierząt.",
          ua: "Правдиві A, B і C. Жири є в насінні і в тварин."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 6. DNA", ua: "Перевірка 6. ДНК" },
      task: {
        id: "l04-t6",
        type: "single-choice",
        question: {
          pl: "Które zdanie o DNA jest poprawne?",
          ua: "Яке речення про ДНК правильне?"
        },
        options: [
          { id: "a", label: { pl: "DNA to kwas nukleinowy; zawiera informację o cechach i przekazuje ją potomstwu.", ua: "ДНК — нуклеїнова кислота; містить інформацію про риси і передає її потомству." } },
          { id: "b", label: { pl: "DNA to to samo co pot.", ua: "ДНК — те саме, що піт." } },
          { id: "c", label: { pl: "DNA buduje muszle z wapnia.", ua: "ДНК будує мушлі з кальцію." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pot to głównie woda. DNA niesie informację o cechach.",
              ua: "Піт — здебільшого вода. ДНК несе інформацію про риси."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Muszle buduje wapń. DNA jest zapisem cech, nie solą mineralną.",
              ua: "Мушлі будує кальцій. ДНК — запис рис, не мінеральна сіль."
            }
          }
        ],
        explanation: {
          pl: "DNA to kwas nukleinowy z informacją o cechach przekazywaną potomstwu.",
          ua: "ДНК — нуклеїнова кислота з інформацією про риси, яку передають потомству."
        }
      }
    },

    {
      type: "summary",
      heading: { pl: "Mini-notatka", ua: "Мініконспект" },
      visual: vizGh("l04-sklad-czlowieka.png", {
        alt: { pl: "Skład organizmu człowieka", ua: "Склад організму людини" },
        title: { pl: "Woda jest największą częścią.", ua: "Вода — найбільша частина." },
        prompt: { pl: "Ta sama infografika składu organizmu człowieka." }
      }),
      text: {
        pl: [
          "Szóstka blisko 98%: węgiel, wodór, tlen, azot, siarka, fosfor. Wapń i magnez jest mniej, ale są potrzebne.",
          "Nieorganiczne: woda i sole. Organiczne: cukry, białka, tłuszcze, kwasy nukleinowe.",
          "Woda: transport, usuwanie zbędnych substancji, temperatura ciała. Człowiek około 65%, meduza około 98%.",
          "Wapń buduje kości i muszle. Magnez jest w zielonym barwniku liści.",
          "Cukry: energia, zapas (skrobia), budowa (celuloza). Białka: głównie budowa. Tłuszcze: zapas, ochrona i około dwa razy więcej energii niż cukry.",
          "DNA zapisuje cechy i przekazuje je potomstwu."
        ],
        ua: [
          "Шістка близько 98%: вуглець, водень, кисень, азот, сірка, фосфор. Кальцію і магнію менше, але вони потрібні.",
          "Неорганічні: вода і солі. Органічні: цукри, білки, жири, нуклеїнові кислоти.",
          "Вода: транспорт, виведення непотрібного, температура тіла. Людина близько 65%, медуза близько 98%.",
          "Кальцій будує кістки і мушлі. Магній є в зеленому барвнику листків.",
          "Цукри: енергія, запас (крохмаль), будова (целюлоза). Білки: здебільшого будова. Жири: запас, захист і близько вдвічі більше енергії, ніж цукри.",
          "ДНК записує риси і передає їх потомству."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem, a co powtórzyć", ua: "Що вже вмію, а що повторити" },
      items: [
        { pl: "Umiem wymienić szóstkę i nie wyrzucam wapnia tylko dlatego, że jest go mniej.", ua: "Вмію назвати шістку і не викидаю кальцій лише тому, що його менше." },
        { pl: "Wodę i sole kładę w szufladce nieorganicznej.", ua: "Воду і солі кладу в неорганічну шухлядку." },
        { pl: "Nie mylę potu z zapisem cech. Zapis to DNA.", ua: "Не плутаю піт із записом рис. Запис — це ДНК." },
        { pl: "Wapń — kości i muszle. Magnez — zielony barwnik liści.", ua: "Кальцій — кістки і мушлі. Магній — зелений барвник листків." },
        { pl: "Skrobia to zapas. Celuloza buduje ścianę komórki roślinnej.", ua: "Крохмаль — запас. Целюлоза будує стінку рослинної клітини." },
        { pl: "Z tej samej porcji tłuszcze dają więcej energii niż cukry. Białka głównie budują.", ua: "З тієї самої порції жири дають більше енергії, ніж цукри. Білки здебільшого будують." }
      ]
    }
  ]
};
