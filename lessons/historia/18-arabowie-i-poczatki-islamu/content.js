function em(text) {
  return { text: text, emphasis: true };
}

function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Arabowie i początki islamu", ua: "Араби і початки ісламу" },
      formula: "622 n.e.",
      text: {
        pl: [
          "Z lekcji 17 znasz Bizancjum. Dziś południe: Półwysep Arabski, Mahomet i nowa religia — islam.",
          "Uczymy się jak historycy klasy 5, z szacunkiem. Cel: podobieństwa i różnice islamu i chrześcijaństwa. Na osi nowa data: 622 — hidżra."
        ],
        ua: [
          "З уроку 17 знаєш Візантію. Сьогодні південь: Аравійський півострів, Мухаммад і нова релігія — іслам.",
          "Вчимося як історики 5 класу, з пошаною. Мета: подібності і відмінності ісламу і християнства. На осі нова дата: 622 — хіджра."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "odczytać z mapy Półwysep Arabski, Mekkę, Medynę i tereny podbojów", ua: "прочитати з мапи Аравійський півострів, Мекку, Медину і терени завоювань" },
        { pl: "powiedzieć, kim był Mahomet, i podać datę hidżry (622)", ua: "сказати, ким був Мухаммад, і подати дату хіджри (622)" },
        { pl: "wyjaśnić pojęcia islam, muzułmanie, Koran, meczet oraz wymienić pięć filarów", ua: "пояснити поняття іслам, мусульмани, Коран, мечеть і назвати п’ять стовпів" },
        { pl: "wskazać podobieństwa i różnice islamu i chrześcijaństwa oraz wpływ Arabów na Europę", ua: "вказати подібності і відмінності ісламу і християнства та вплив арабів на Європу" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Półwysep Arabski", ua: "Аравійський півострів" },
      formula: "Mekka · Medyna",
      visual: gh("149", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Półwyspu Arabskiego z Mekką, Medyną i Morzem Czerwonym",
          ua: "Мапа Аравійського півострова з Меккою, Мединою і Червоним морем"
        },
        title: { pl: "Pustynia, oazy, dwa miasta", ua: "Пустеля, оази, два міста" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Półwysep Arabski, Morze Czerwone, Zatoka Perska. Kropki: MEKKA, MEDYNA (na północ od Mekki). Zielone plamki „oaza”. Tytuł PL: „Półwysep Arabski w VII wieku”. Legenda: pustynia / oaza. BEZ granic dzisiejszych państw, BEZ armii. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа півострова: Мекка, Медина, Червоне море, оази. Без сучасних кордонів."
        }
      }),
      text: {
        pl: [
          ["", em("Arabowie"), " mieszkali na ", em("Półwyspie Arabskim"), " — dużo pustyni, życie przy ", em("oazach"), "."],
          ["Dwa miasta do mapy: ", em("Mekka"), " i ", em("Medyna"), ". Stąd w VII wieku n.e. wyjdzie nowa religia."]
        ],
        ua: [
          ["", em("Араби"), " жили на ", em("Аравійському півострові"), " — багато пустелі, життя біля ", em("оаз"), "."],
          ["Два міста до мапи: ", em("Мекка"), " і ", em("Медина"), ". Звідси в VII столітті н.е. вийде нова релігія."]
        ]
      },
      task: {
        id: "h18-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leżą Mekka i Medyna?",
          ua: "Де лежать Мекка і Медина?"
        },
        options: [
          { id: "a", label: { pl: "na Półwyspie Arabskim", ua: "на Аравійському півострові" } },
          { id: "b", label: { pl: "nad Tybrem, w Italii", ua: "над Тибром, в Італії" } },
          { id: "c", label: { pl: "na Akropolu w Atenach", ua: "на Акрополі в Афінах" } }
        ],
        answer: "a",
        hint: {
          pl: "Pustynia i Morze Czerwone, nie Forum Romanum.",
          ua: "Пустеля і Червоне море, не Forum Romanum."
        },
        explanation: {
          pl: "KN: wskazać półwysep, Mekkę i Medynę. Rzym i Ateny to inne działy.",
          ua: "KN: вказати півострів, Мекку і Медину. Рим і Афіни — інші розділи."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Arabowie przed islamem", ua: "Араби перед ісламом" },
      formula: "Kaaba · Czarny Kamień",
      visual: gh("150", {
        kind: "image-placeholder",
        alt: {
          pl: "Pustynia i oaza oraz sześcian Kaaby z Czarnym Kamieniem",
          ua: "Пустеля і оаза та куб Кааби з Чорним Каменем"
        },
        title: { pl: "Pasterze, kupcy, święte miejsce", ua: "Пастухи, купці, святе місце" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie połówki. LEWA: pustynia, skały, mała oaza z palmami, wielbłąd przy studni — spokój, nie burza piaskowa-horror. PRAWA: Kaaba jako CZARNY SZEŚCIAN z tkaniną i złotym pasem, z daleka, BEZ tłumu-ciaśniny; obok rysunek nieregularnego kamienia, podpis „Czarny Kamień (al-hadżar)”. Etykiety PL: „pasterstwo”; „handel”; „uprawa w oazach”; „Mekka — miejsce święte”. Styl Nowej Ery.",
          ua: "Ліворуч пустеля і оаза. Праворуч Кааба-куб здалеку і Чорний Камінь. Без натовпу."
        }
      }),
      text: {
        pl: [
          ["Byli ludem ", em("koczowniczym"), ": pasterstwo, handel, uprawa ziemi w oazach. Wierzyli w wielu bogów (", em("politeiści"), ")."],
          ["Miejsce święte: ", em("Mekka"), " i świątynia ", em("Kaaba"), " z ", em("Czarnym Kamieniem"), ". Kupcy jeździli daleko — Arabowie znali inne religie z dróg."]
        ],
        ua: [
          ["Були ", em("кочовим"), " людом: скотарство, торгівля, обробіток землі в оазах. Вірили в багатьох богів (", em("політеїсти"), ")."],
          ["Святе місце: ", em("Мекка"), " і храм ", em("Кааба"), " з ", em("Чорним Каменем"), ". Купці їздили далеко — араби знали інші релігії з доріг."]
        ]
      },
      task: {
        id: "h18-arab",
        type: "true-false",
        level: "A",
        question: {
          pl: "Przed islamem Arabowie byli politeistami, a Kaaba w Mekce była miejscem świętym — prawda czy fałsz?",
          ua: "Перед ісламом араби були політеїстами, а Кааба в Мецці була святим місцем — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Najpierw wielu bogów. Jeden Bóg — dopiero Mahomet.",
          ua: "Спочатку багато богів. Один Бог — лише Мухаммад."
        },
        explanation: {
          pl: "Prawda. Islam = monoteizm. To zmiana, nie „tak było od zawsze”.",
          ua: "Правда. Іслам = монотеїзм. Це зміна, не «так було завжди»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Mahomet", ua: "Мухаммад" },
      formula: "VII w. n.e. · Mekka",
      visual: gh("151", {
        kind: "image-placeholder",
        alt: {
          pl: "Kaligrafia imienia Mahomet i cztery punkty biografii, bez twarzy",
          ua: "Каліграфія імені Мухаммад і чотири пункти біографії, без обличчя"
        },
        title: { pl: "Prorok, nie portret", ua: "Пророк, не портрет" },
        prompt: {
          pl: "Szkolny slajd 16:9, muzealne spokojne tło. NA ŚRODKU ozdobna kaligrafia PL/arabska „Mahomet” — BEZ twarzy, BEZ sylwetki ciała, BEZ dziecka, BEZ obrazu z Wikipedii. Cztery punkty PL: „kto — Mahomet, twórca islamu”; „skąd — Mekka, Półwysep Arabski”; „lata — VII wiek n.e.”; „wsławił się — ogłosił wiarę w jednego Boga (Allah), jest prorokiem”. Mała linia: „szacunek: nie rysujemy twarzy proroka”. Styl Nowej Ery.",
          ua: "Каліграфія «Мухаммад». Пункти: Мекка; VII ст.; один Бог — Аллах; пророк. Без обличчя."
        }
      }),
      text: {
        pl: [
          ["", em("Mahomet"), " — mieszkaniec ", em("Mekki"), ". W młodości jeździł ze stryjem w podróże handlowe, słuchał o różnych religiach. Około 610 ogłosił, że ukazał mu się archanioł Gabriel: jest ", em("prorokiem"), ", jest jeden Bóg — ", em("Allah"), "."],
          ["Obowiązkiem człowieka jest poddanie się woli Boga. Ta religia to ", em("islam"), ", wyznawcy — ", em("muzułmanie"), "."]
        ],
        ua: [
          ["", em("Мухаммад"), " — мешканець ", em("Мекки"), ". У молодості їздив зі стриєм у торгові подорожі, слухав про різні релігії. Близько 610 оголосив, що йому з’явився архангел Гавриїл: він ", em("пророк"), ", є один Бог — ", em("Аллах"), "."],
          ["Обов’язок людини — піддатися волі Бога. Ця релігія — ", em("іслам"), ", віряни — ", em("мусульмани"), "."]
        ]
      },
      task: {
        id: "h18-mah",
        type: "true-false",
        level: "A",
        question: {
          pl: "Mahomet ogłosił wiarę w jednego Boga (Allaha) i jest twórcą islamu — prawda czy fałsz?",
          ua: "Мухаммад проголосив віру в одного Бога (Аллаха) і є творцем ісламу — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "VII wiek, Mekka. Nie myl z Jezusem z lekcji 16.",
          ua: "VII століття, Мекка. Не плутай з Ісусом з уроку 16."
        },
        explanation: {
          pl: "Prawda. KN: postać Mahometa. Jezus = Palestyna, I w. n.e.",
          ua: "Правда. KN: постать Мухаммада. Ісус = Палестина, I ст. н.е."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Hidżra — rok 622", ua: "Хіджра — рік 622" },
      formula: "622 n.e.",
      timelineYear: 622,
      visual: gh("152", {
        kind: "map-placeholder",
        alt: {
          pl: "Strzałka z Mekki do Medyny, data 622, bez twarzy jeźdźców",
          ua: "Стрілка з Мекки до Медини, дата 622, без облич вершників"
        },
        title: { pl: "Ucieczka, która zaczyna erę", ua: "Втеча, що починає еру" },
        prompt: {
          pl: "Szkolna mapa 16:9 wycinka Hidżazu. Kropki MEKKA i MEDYNA, gruba strzałka na północ, podpis „622 — hidżra”. Wielbłąd jako znak drogi, BEZ twarzy ludzi, BEZ pościgu z mieczami. Tytuł: „ucieczka z Mekki do Medyny”. Etykieta: „rok 1 kalendarza muzułmańskiego”. Styl Nowej Ery.",
          ua: "Мапа: Мекка → Медина, 622. Без облич і без погоні."
        }
      }),
      text: {
        pl: [
          ["Ludzie w Mekce byli sceptyczni. W ", em("622 roku"), " Mahomet uciekł do ", em("Medyny"), " — to ", em("hidżra"), ". Tam zebrał zwolenników i później wrócił do Mekki."],
          ["Muzułmanie biorą 622 za ", em("rok 1"), " swojej ery. Rok trwa 354 dni (12 obiegów Księżyca) — krócej niż nasz. Dlatego nie wystarczy od dzisiejszego roku odjąć 622."]
        ],
        ua: [
          ["Люди в Мецці були скептичні. Року ", em("622"), " Мухаммад утік до ", em("Медини"), " — це ", em("хіджра"), ". Там зібрав прихильників і пізніше повернувся до Мекки."],
          ["Мусульмани беруть 622 за ", em("рік 1"), " своєї ери. Рік триває 354 дні (12 обертів Місяця) — коротший за наш. Тому не досить відняти 622 від сьогоднішнього року."]
        ]
      },
      task: {
        id: "h18-622",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co wydarzyło się w 622 n.e.?",
          ua: "Що сталося 622 н.е.?"
        },
        options: [
          { id: "a", label: { pl: "hidżra — ucieczka Mahometa z Mekki do Medyny, początek ery muzułmańskiej", ua: "хіджра — втеча Мухаммада з Мекки до Медини, початок мусульманської ери" } },
          { id: "b", label: { pl: "edykt mediolański Konstantyna", ua: "Міланський едикт Костянтина" } },
          { id: "c", label: { pl: "upadek Konstantynopola", ua: "падіння Константинополя" } }
        ],
        answer: "a",
        hint: {
          pl: "Na osi ta data stoi między Justynianem a 1453.",
          ua: "На осі ця дата стоїть між Юстиніаном і 1453."
        },
        explanation: {
          pl: "313 = edykt. 1453 = Turcy. 622 = hidżra. To KN.",
          ua: "313 = едикт. 1453 = турки. 622 = хіджра. Це KN."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pięć filarów islamu", ua: "П’ять стовпів ісламу" },
      formula: "szahada · salat · zakat · saum · hadżdż",
      visual: gh("153", {
        kind: "image-placeholder",
        alt: {
          pl: "Pięć łuków z ikonami: wiara, modlitwa, jałmużna, post, pielgrzymka",
          ua: "П’ять арок з іконками: віра, молитва, милостиня, піст, проща"
        },
        title: { pl: "Pięć obowiązków, nie dekoracja", ua: "П’ять обов’язків, не декорація" },
        prompt: {
          pl: "Szkolna infografika 16:9. Pięć równych łuków jak w meczecie, w każdym PROSTA ikona i podpis PL+arabski: 1 „wyznanie wiary — szahada”; 2 „modlitwa — salat (5 razy dziennie)”; 3 „jałmużna — zakat”; 4 „post — saum”; 5 „pielgrzymka do Mekki — hadżdż” (mały sześcian Kaaby). BEZ kpin, BEZ karykatur klęczących ludzi, BEZ tłumu. Tytuł: „pięć filarów islamu”. Styl Nowej Ery.",
          ua: "П’ять арок: шахада, салат, закят, саум, хадж. Спокійні іконки."
        }
      }),
      text: {
        pl: [
          ["Nauki zebrano po śmierci Mahometa w ", em("Koranie"), ". Wiara opiera się na ", em("pięciu filarach"), "."],
          ["", em("Szahada"), " — wyznanie wiary. ", em("Salat"), " — modlitwa. ", em("Zakat"), " — jałmużna. ", em("Saum"), " — post. ", em("Hadżdż"), " — pielgrzymka do Mekki."]
        ],
        ua: [
          ["Науки зібрали після смерті Мухаммада в ", em("Корані"), ". Віра спирається на ", em("п’ять стовпів"), "."],
          ["", em("Шахада"), " — визнання віри. ", em("Салат"), " — молитва. ", em("Закят"), " — милостиня. ", em("Саум"), " — піст. ", em("Хадж"), " — проща до Мекки."]
        ]
      },
      task: {
        id: "h18-filary",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które pięć obowiązków to filary islamu?",
          ua: "Які п’ять обов’язків — стовпи ісламу?"
        },
        options: [
          { id: "a", label: { pl: "wyznanie wiary, modlitwa, jałmużna, post, pielgrzymka do Mekki", ua: "визнання віри, молитва, милостиня, піст, проща до Мекки" } },
          { id: "b", label: { pl: "igrzyska, akwedukt, senat, Eneida, XII tablic", ua: "ігри, акведук, сенат, Енеїда, XII таблиць" } },
          { id: "c", label: { pl: "tylko budowa piramid i mumie", ua: "лише будова пірамід і мумії" } }
        ],
        answer: "a",
        hint: {
          pl: "Pięć, jak w filmie. Nie myl z Rzymem.",
          ua: "П’ять, як у фільмі. Не плутай з Римом."
        },
        explanation: {
          pl: "KN: najważniejsze zasady wiary. Piramidy to Egipt.",
          ua: "KN: найважливіші засади віри. Піраміди — Єгипет."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Meczet", ua: "Мечеть" },
      formula: "minaret · mihrab · minbar",
      visual: gh("154", {
        kind: "map-placeholder",
        alt: {
          pl: "Schemat meczetu: minaret, dziedziniec, fontanna, mihrab, minbar",
          ua: "Схема мечеті: мінарет, двір, фонтан, міхраб, мінбар"
        },
        title: { pl: "Świątynia z wieżą i wnęką", ua: "Храм із вежею і нішею" },
        prompt: {
          pl: "Szkolny schemat izometryczny 16:9, jak w podręczniku. Meczet: mur, dziedziniec, fontanna na środku, wysoki MINARET, wnętrze z MIHRABEM (wnęka) i MINBAREM (ambona ze schodkami). Podpisy PL przy każdej części. Mała linia: „modlitwa, kazanie, jałmużna, zebrania”. BEZ tłumu, BEZ wojska. Styl Nowej Ery.",
          ua: "Схема: мінарет, двір, фонтан, міхраб, мінбар. Підписи українською/польською в промпті PL."
        }
      }),
      text: {
        pl: [
          ["", em("Meczet"), " to świątynia muzułmanów. Z ", em("minaretu"), " woła się na modlitwę. Na dziedzińcu jest fontanna do obmyć."],
          ["", em("Mihrab"), " wskazuje kierunek Mekki. ", em("Minbar"), " to ambona do kazań. W meczecie także słucha się komentarzy do Koranu i dzieli jałmużnę."]
        ],
        ua: [
          ["", em("Мечеть"), " — храм мусульман. З ", em("мінарета"), " кличуть на молитву. На подвір’ї фонтан для обмивань."],
          ["", em("Міхраб"), " вказує напрям Мекки. ", em("Мінбар"), " — амвон для проповідей. У мечеті також слухають пояснення Корану і ділять милостиню."]
        ]
      },
      task: {
        id: "h18-meczet",
        type: "true-false",
        level: "A",
        question: {
          pl: "Minaret to wieża meczetu, a mihrab wskazuje kierunek Mekki — prawda czy fałsz?",
          ua: "Мінарет — вежа мечеті, а міхраб вказує напрям Мекки — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Wieża = wołanie. Wnęka = Mekka. Ambona = minbar.",
          ua: "Вежа = заклик. Ніша = Мекка. Амвон = мінбар."
        },
        explanation: {
          pl: "Prawda. KN: meczet, minaret, mihrab, minbar. Nie myl z Hagia Sophia z lekcji 17.",
          ua: "Правда. KN: мечеть, мінарет, міхраб, мінбар. Не плутай з Ая-Софією з уроку 17."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Koran", ua: "Коран" },
      formula: "święta księga",
      visual: gh("155", {
        kind: "image-placeholder",
        alt: {
          pl: "Otwarty Koran z pismem arabskim na pulpicie",
          ua: "Відкритий Коран з арабським письмом на пюпітрі"
        },
        title: { pl: "Księga po śmierci proroka", ua: "Книга після смерті пророка" },
        prompt: {
          pl: "Szkolne zdjęcie 16:9. Otwarty Koran na pulpicie, ozdobne pismo arabskie, spokojne światło. Podpis PL: „Koran — święta księga islamu”. Mała linia: „spisany po śmierci Mahometa”. BEZ ognia-cudu, BEZ niszczenia książki. Styl Nowej Ery.",
          ua: "Відкритий Коран, арабське письмо. Підпис: свята книга ісламу."
        }
      }),
      text: {
        pl: [
          ["Mahomet sam nie spisał nauk w książce. Po jego śmierci zebrano je w ", em("Koranie"), " — świętej księdze islamu."],
          ["Są w nim także wskazówki codziennego życia. Czyta się go po arabsku; tłumaczenia pomagają zrozumieć sens."]
        ],
        ua: [
          ["Мухаммад сам не записав наук у книжку. Після його смерті їх зібрали в ", em("Корані"), " — святій книзі ісламу."],
          ["У ньому також вказівки щоденного життя. Читають арабською; переклади допомагають зрозуміти сенс."]
        ]
      },
      task: {
        id: "h18-koran",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym jest Koran?",
          ua: "Що таке Коран?"
        },
        options: [
          { id: "a", label: { pl: "świętą księgą islamu, spisaną po śmierci Mahometa", ua: "святою книгою ісламу, записаною після смерті Мухаммада" } },
          { id: "b", label: { pl: "Kodeksem Justyniana z 12 ksiąg", ua: "Кодексом Юстиніана з 12 книг" } },
          { id: "c", label: { pl: "Eneidą Wergiliusza", ua: "Енеїдою Вергілія" } }
        ],
        answer: "a",
        hint: {
          pl: "Jak Biblia u chrześcijan — ale inna księga i inny język.",
          ua: "Як Біблія в християн — але інша книга і інша мова."
        },
        explanation: {
          pl: "KN: pojęcie Koran. Kodeks = lekcja 15/17. Eneida = lekcja 15.",
          ua: "KN: поняття Коран. Кодекс = урок 15/17. Енеїда = урок 15."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Islam i chrześcijaństwo", ua: "Іслам і християнство" },
      formula: "podobieństwa · różnice",
      visual: gh("156", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa słupki: wspólne (jeden Bóg, księga) i różne (Mahomet / Jezus, meczet / kościół)",
          ua: "Два стовпчики: спільне (один Бог, книга) і різне (Мухаммад / Ісус, мечеть / церква)"
        },
        title: { pl: "Dwie wiary, spokojne porównanie", ua: "Дві віри, спокійне порівняння" },
        prompt: {
          pl: "Szkolna tabela 16:9, dwie kolumny bez walki symboli. LEWA „wspólne”: jeden Bóg; święta księga; modlitwa; jałmużna; szacunek dla proroków. PRAWA „różne”: islam — Allah, Koran, Mahomet jako ostatni prorok, meczet, hidżra 622, pięć filarów; chrześcijaństwo — Jezus jako Mesjasz i Syn Boży, Biblia, kościół, apostołowie (lekcja 16). Tytuł: „podobieństwa i różnice”. BEZ karykatur, BEZ „lepsza religia”. Styl Nowej Ery.",
          ua: "Дві колонки: спільне і різне. Без оцінки «краща віра»."
        }
      }),
      text: {
        pl: [
          ["Podobnie: ", em("jeden Bóg"), ", święta księga, modlitwa, pomoc ubogim. Islam szanuje Jezusa jako proroka — nie jako Syna Bożego."],
          ["Inaczej: twórcą islamu jest ", em("Mahomet"), ", księga to ", em("Koran"), ", świątynia to ", em("meczet"), ", era liczy się od ", em("622"), ". Chrześcijanie (lekcja 16) mówią o Mesjaszu, Biblii i kościele."]
        ],
        ua: [
          ["Подібно: ", em("один Бог"), ", свята книга, молитва, допомога бідним. Іслам шанує Ісуса як пророка — не як Сина Божого."],
          ["Інакше: творець ісламу — ", em("Мухаммад"), ", книга — ", em("Коран"), ", храм — ", em("мечеть"), ", ера від ", em("622"), ". Християни (урок 16) говорять про Месію, Біблію і церкву."]
        ]
      },
      task: {
        id: "h18-porown",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Co jest wspólne, a co różne dla islamu i chrześcijaństwa?",
          ua: "Що спільне, а що різне для ісламу і християнства?"
        },
        options: [
          { id: "a", label: { pl: "wspólne: jeden Bóg i święta księga; różne: Mahomet i Koran vs Jezus-Mesjasz i Biblia", ua: "спільне: один Бог і свята книга; різне: Мухаммад і Коран vs Ісус-Месія і Біблія" } },
          { id: "b", label: { pl: "obie religie czczą Zeusa na Olimpie", ua: "обидві релігії шанують Зевса на Олімпі" } },
          { id: "c", label: { pl: "islam to to samo co Prawo XII tablic", ua: "іслам — те саме, що Закон XII таблиць" } }
        ],
        answer: "a",
        hint: {
          pl: "Cel lekcji. Lekcja 16 = Jezus. Tu = Mahomet.",
          ua: "Мета уроку. Урок 16 = Ісус. Тут = Мухаммад."
        },
        explanation: {
          pl: "KN ponadpodstawowe: podobieństwa i różnice. Zeus to lekcja 9. Nie oceniamy, która wiara „lepsza”.",
          ua: "KN понадбазове: подібності і відмінності. Зевс — урок 9. Не оцінюємо, яка віра «краща»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Podboje Arabów", ua: "Завоювання арабів" },
      formula: "kalifowie · VII–VIII w.",
      visual: gh("157", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa imperium arabskiego od Indii po Hiszpanię, bez bitwy",
          ua: "Мапа арабської імперії від Індії до Іспанії, без битви"
        },
        title: { pl: "Od Indii po Hiszpanię", ua: "Від Індії до Іспанії" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Cień „imperium arabskie w VIII w.”: Półwysep Arabski, Bliski Wschód, Persja, Egipt, Afryka Północna, część Hiszpanii, ku Indiom. Tytuł PL: „podboje Arabów”. Legenda: ziemie kalifów. BEZ jeźdźca z włócznią, BEZ rzezi, BEZ palących się miast. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа VIII ст.: від Індії через Близький Схід і Північну Африку до Іспанії. Без воїна."
        }
      }),
      text: {
        pl: [
          ["Po śmierci Mahometa następcami byli ", em("kalifowie"), ". ", em("Dżihad"), " — obowiązek umacniania wiary — rozumieli także jako walkę zbrojną. W VII–VIII w. Arabowie zajęli Persję, ziemie Bizancjum na Bliskim Wschodzie, Afrykę Północną i część Hiszpanii. Siłą wojska była lekka jazda."],
          ["Część ludów przyjęła islam. Arabowie często zostawiali miejscowe zwyczaje i uczyli się od podbitych — dlatego później tyle osiągnięć trafiło do Europy. Wielkie państwo trudno było utrzymać: rozpadło się na kalifaty."]
        ],
        ua: [
          ["Після смерті Мухаммада наступниками були ", em("халіфи"), ". ", em("Джихад"), " — обов’язок зміцнювати віру — розуміли також як збройну боротьбу. У VII–VIII ст. араби зайняли Персію, землі Візантії на Близькому Сході, Північну Африку і частину Іспанії. Силою війська була легка кіннота."],
          ["Частина народів прийняла іслам. Араби часто залишали місцеві звичаї і вчилися в підкорених — тому пізніше стільки досягнень потрапило до Європи. Велику державу було важко втримати: вона розпалася на халіфати."]
        ]
      },
      task: {
        id: "h18-podboje",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak daleko sięgało imperium Arabów i jak często traktowali podbitych?",
          ua: "Як далеко сягала імперія арабів і як часто ставилися до підкорених?"
        },
        options: [
          { id: "a", label: { pl: "od Indii przez Bliski Wschód i Afrykę po Hiszpanię; często zostawiali zwyczaje i uczyli się od nich", ua: "від Індії через Близький Схід і Африку до Іспанії; часто залишали звичаї і вчилися в них" } },
          { id: "b", label: { pl: "tylko wyspa Sycylia; niszczyli każdą księgę", ua: "лише острів Сицилія; нищили кожну книгу" } },
          { id: "c", label: { pl: "tylko Ateny za Peryklesa", ua: "лише Афіни за Перікла" } }
        ],
        answer: "a",
        hint: {
          pl: "Mapa filmu: zielony pas od Indii do Hiszpanii. KN: stosunek do podbitych.",
          ua: "Мапа фільму: смуга від Індії до Іспанії. KN: ставлення до підкорених."
        },
        explanation: {
          pl: "Dżihad tu = fakt podbojów kalifów, nie wezwanie. Nauka od podbitych = następny ekran.",
          ua: "Джихад тут = факт завоювань халіфів, не заклик. Наука від підкорених = наступний екран."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Osiągnięcia Arabów", ua: "Досягнення арабів" },
      formula: "cyfry · papier · arabeska",
      visual: gh("158", {
        kind: "image-placeholder",
        alt: {
          pl: "Cyfry arabskie, wzór arabeski i karta papieru, bez miecza",
          ua: "Арабські цифри, візерунок арабески і аркуш паперу, без меча"
        },
        title: { pl: "Do Europy przez muzułmanów", ua: "До Європи через мусульман" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy pola. 1) duże cyfry 0–9, podpis „cyfry arabskie — z Indii”. 2) geometryczna ARABESKA (wstęgi, gwiazdy, BEZ istot żywych), podpis „arabeska”. 3) kartka papieru i czarka, podpis „papier, porcelana — ze Wschodu”. Tytuł: „Arabowie przenieśli odkrycia do Europy”. BEZ klingi i walki (wzorzysta stal tylko jako spokojna faktura, jeśli w ogóle). Styl Nowej Ery.",
          ua: "Цифри 0–9, арабеска, папір. Без бойової зброї."
        }
      }),
      text: {
        pl: [
          ["Arabowie uczyli się od innych i nieśli wiedzę dalej: ", em("cyfry arabskie"), " (z Indii), medycyna, alchemia. Kupcy przynieśli do Europy papier i porcelanę. Tłumaczyli dzieła starożytnych — dzięki temu wiele tekstów przetrwało."],
          ["W sztuce: ", em("arabeska"), " — splątany wzór geometryczny. ", em("Stal damasceńska"), " słynęła z trwałości. To wpływ cywilizacji islamskiej na Europę — punkt z „potrafię”."]
        ],
        ua: [
          ["Араби вчилися в інших і несли знання далі: ", em("арабські цифри"), " (з Індії), медицина, алхімія. Купці принесли до Європи папір і порцеляну. Перекладали твори давніх — завдяки цьому багато текстів збереглося."],
          ["У мистецтві: ", em("арабеска"), " — плетений геометричний візерунок. ", em("Дамаська сталь"), " славилася тривкістю. Це вплив ісламської цивілізації на Європу — пункт із «вмію»."]
        ]
      },
      task: {
        id: "h18-osiag",
        type: "true-false",
        level: "B",
        question: {
          pl: "Cyfry, których używamy, Arabowie wzięli z Indii i przekazali Europie — prawda czy fałsz?",
          ua: "Цифри, якими користуємося, араби взяли з Індії і передали Європі — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nazwa „arabskie”, korzeń indyjski. Podręcznik s. 112.",
          ua: "Назва «арабські», корінь індійський. Підручник с. 112."
        },
        explanation: {
          pl: "Prawda. KN ponadpodstawowe: wpływ na Europejczyków. Nie „Arabowie wymyślili zero w Rzymie”.",
          ua: "Правда. KN понадбазове: вплив на європейців. Не «араби вигадали нуль у Римі»."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "islam / muzułmanie — religia jedynego Boga (Allah) / jej wyznawcy", ua: "іслам / мусульмани — релігія єдиного Бога (Аллах) / її віряни" },
        { pl: "hidżra — 622, ucieczka z Mekki do Medyny, rok 1 ery muzułmańskiej", ua: "хіджра — 622, втеча з Мекки до Медини, рік 1 мусульманської ери" },
        { pl: "Koran — święta księga islamu", ua: "Коран — свята книга ісламу" },
        { pl: "meczet · minaret · mihrab · minbar — świątynia · wieża · wnęka · ambona", ua: "мечеть · мінарет · міхраб · мінбар — храм · вежа · ніша · амвон" },
        { pl: "pięć filarów — szahada, salat, zakat, saum, hadżdż", ua: "п’ять стовпів — шахада, салат, закят, саум, хадж" },
        { pl: "kalif / dżihad — następca Mahometa / umacnianie wiary (także walka)", ua: "халіф / джихад — наступник Мухаммада / зміцнення віри (також боротьба)" },
        { pl: "arabeska / cyfry arabskie — wzór geometryczny / cyfry z Indii przez Arabów", ua: "арабеска / арабські цифри — геометричний візерунок / цифри з Індії через арабів" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Islam powstał w Atenach za Peryklesa. Mahomet spisał Eneidę w 753 p.n.e. Hidżra to 1453, a meczet to akwedukt bez minaretu. Cyfry arabskie wymyślili Rzymianie nad Tybrem.”",
        ua: "«Іслам постав в Афінах за Перікла. Мухаммад записав Енеїду 753 до н.е. Хіджра — це 1453, а мечеть — акведук без мінарета. Арабські цифри вигадали римляни над Тибром.»"
      },
      text: {
        pl: [
          "Islam: VII w., Półwysep Arabski. Mahomet = prorok, nie Wergiliusz. 753 = Rzym. 1453 = Turcy i Konstantynopol. 622 = hidżra. Meczet ma minaret. Cyfry: Indie → Arabowie → Europa."
        ],
        ua: [
          "Іслам: VII ст., Аравійський півострів. Мухаммад = пророк, не Вергілій. 753 = Рим. 1453 = турки і Константинополь. 622 = хіджра. Мечеть має мінарет. Цифри: Індія → араби → Європа."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, kim był Mahomet i co stało się w 622. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, ким був Мухаммад і що сталося 622 року. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: Mekka, jeden Bóg, islam; hidżra do Medyny, początek ery."
        ],
        ua: [
          "Підказка: Мекка, один Бог, іслам; хіджра до Медини, початок ери."
        ]
      },
      task: {
        id: "h18-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje Mahometa i hidżrę?",
          ua: "Яке речення найкраще охоплює Мухаммада і хіджру?"
        },
        options: [
          { id: "a", label: { pl: "Mahomet z Mekki ogłosił islam; w 622 uciekł do Medyny — muzułmanie liczą od tej daty swoją erę", ua: "Мухаммад з Мекки проголосив іслам; року 622 утік до Медини — мусульмани від цієї дати лічать свою еру" } },
          { id: "b", label: { pl: "Mahomet zbudował Koloseum i ogłosił edykt w 313", ua: "Мухаммад збудував Колізей і оголосив едикт 313" } },
          { id: "c", label: { pl: "Mahomet był cesarzem Bizancjum w 395", ua: "Мухаммад був імператором Візантії 395 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Potrafię: kim był i data ucieczki.",
          ua: "Вмію: ким був і дата втечі."
        },
        explanation: {
          pl: "313 i 395 to Rzym/Bizancjum. Koloseum = lekcja 14–15.",
          ua: "313 і 395 — Рим/Візантія. Колізей = уроки 14–15."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Kalendarz muzułmański", ua: "Мусульманський календар" },
      task: {
        id: "h18-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Rok 1 muzułmanów to 622. Rok ma 354 dni. Jakie działanie przybliża, który to dziś rok hidżry?",
          ua: "Рік 1 мусульман — 622. Рік має 354 дні. Яка дія наближає, котрий сьогодні рік хіджри?"
        },
        options: [
          { id: "a", label: { pl: "odjąć 622, a potem uwzględnić, że rok księżycowy jest krótszy — liczba wyjdzie trochę większa niż samo odejmowanie", ua: "відняти 622, а потім урахувати, що місячний рік коротший — число вийде трохи більшим, ніж саме віднімання" } },
          { id: "b", label: { pl: "dodać 753 p.n.e. do 1453", ua: "додати 753 до н.е. до 1453" } },
          { id: "c", label: { pl: "podzielić 622 przez liczbę filarów islamu", ua: "поділити 622 на число стовпів ісламу" } }
        ],
        answer: "a",
        hint: {
          pl: "Film: 2024 ≈ 1446. 2024−622=1402 — za mało, bo rok krótszy.",
          ua: "Фільм: 2024 ≈ 1446. 2024−622=1402 — замало, бо рік коротший."
        },
        explanation: {
          pl: "KN: inna miara czasu. Na klasę 5: odejmij 622 i pamiętaj o 354 dniach. Dokładny wzór zostaw kalkulatorowi.",
          ua: "KN: інша міра часу. Для 5 класу: відніми 622 і пам’ятай про 354 дні. Точну формулу залиш калькулятору."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h18-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 622 · Koran · Mekka i Medyna",
          ua: "Добери: 622 · Коран · Мекка і Медина"
        },
        options: [
          { id: "a", label: { pl: "622 — hidżra; Koran — święta księga; Mekka i Medyna — miasta na Półwyspie Arabskim", ua: "622 — хіджра; Коран — свята книга; Мекка і Медина — міста на Аравійському півострові" } },
          { id: "b", label: { pl: "622 — Wezuwiusz; Koran — Eneida; Mekka — Ateny", ua: "622 — Везувій; Коран — Енеїда; Мекка — Афіни" } },
          { id: "c", label: { pl: "622 — 395; Koran — XII tablic; Medyna — Kartagina", ua: "622 — 395; Коран — XII таблиць; Медина — Карфаген" } }
        ],
        answer: "a",
        hint: {
          pl: "Potrafię: data, pojęcia, mapa.",
          ua: "Вмію: дата, поняття, мапа."
        },
        explanation: {
          pl: "To KN. 79 = Pompeje. 395 = podział Rzymu.",
          ua: "Це KN. 79 = Помпеї. 395 = поділ Риму."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Islam — religia z VII w. Twórca: Mahomet. Bóg: Allah; wyznawcy: muzułmanie.",
          ["VII w.", "Mahomet", "Allah"],
          "Іслам — релігія VII ст. Творець: Мухаммад. Бог: Аллах; віряни: мусульмани.",
          ["VII ст.", "Мухаммад", "Аллах"]
        ),
        mark(
          "622 — hidżra (Mekka → Medyna). Początek ery muzułmańskiej.",
          ["622", "hidżra"],
          "622 — хіджра (Мекка → Медина). Початок мусульманської ери.",
          ["622", "хіджра"]
        ),
        mark(
          "Koran i pięć filarów: wiara, modlitwa, jałmużna, post, pielgrzymka do Mekki.",
          ["Koran", "pięć filarów"],
          "Коран і п’ять стовпів: віра, молитва, милостиня, піст, проща до Мекки.",
          ["Коран", "п’ять стовпів"]
        ),
        mark(
          "Imperium Arabów: od Indii przez Afrykę po Hiszpanię.",
          ["Imperium", "Indii", "Hiszpanię"],
          "Імперія арабів: від Індії через Африку до Іспанії.",
          ["Імперія", "Індії", "Іспанії"]
        ),
        mark(
          "Część ludów przyjęła islam. Osiągnięcia Wschodu trafiły do Europy.",
          ["islam", "Europy"],
          "Частина народів прийняла іслам. Здобутки Сходу потрапили до Європи.",
          ["іслам", "Європи"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: nowe państwa w Europie — sąsiedzi Bizancjum i świata islamu na północy.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: нові держави в Європі — сусіди Візантії і світу ісламу на півночі.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "Uu0tzK8RNpI",
        title: {
          pl: "Krótkie Lekcje: Arabowie i początki islamu",
          ua: "Короткі уроки: Араби і початки ісламу"
        }
      }
    }
  ]
};
