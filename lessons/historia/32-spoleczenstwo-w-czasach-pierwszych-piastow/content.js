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
      heading: { pl: "Społeczeństwo w czasach pierwszych Piastów", ua: "Суспільство за перших П’ястів" },
      formula: "gród · danina",
      text: {
        pl: [
          "Pierwsi Piastowie — umownie od IX do końca XII w. Tu nie nowa data na osi, tylko jak żyli ludzie.",
          "W lekcji 22 poznałeś hołd lenny na Zachodzie. Tu ziemia należy do księcia (prawo książęce) — to nie kopia francuskiej drabiny. 1109 i 1138 znasz z lekcji 31. Rozbicie — 33."
        ],
        ua: [
          "Перші П’ясти — умовно від IX до кінця XII ст. Тут немає нової дати на осі, лише як жили люди.",
          "В уроці 22 ти пізнав ленну присягу на Заході. Тут земля належить князю (княже право) — це не копія французької драбини. 1109 і 1138 знаєш з уроку 31. Роздробленість — 33."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać wygląd grodu i podgrodzia", ua: "описати вигляд города і підгороддя" },
        { pl: "wyjaśnić metodę żarową i zajęcia mieszkańców", ua: "пояснити підсічно-вогневу методу і заняття мешканців" },
        { pl: "scharakteryzować grupy: książę, wojowie, rzemieślnicy, kupcy, chłopi", ua: "схарактеризувати групи: князь, вої, ремісники, купці, селяни" },
        { pl: "podać obowiązki poddanych: danina, posługi, osady służebne", ua: "назвати обов’язки підданих: данина, повинності, служебні поселення" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Kraj lasów", ua: "Край лісів" },
      formula: "ok. 1 mln",
      visual: gh("264", {
        kind: "image-placeholder",
        alt: {
          pl: "Las, mała osada nad rzeką, wzgórze; spokojne rysunki tarpana i tura",
          ua: "Ліс, мале поселення над річкою, пагорб; спокійні рисунки тарпана і тура"
        },
        title: { pl: "Puszcza i osada, nie polowanie", ua: "Пуща і оселя, не полювання" },
        prompt: {
          pl: "Szkolny krajobraz 16:9, dzień. Gęsty las, wąska rzeka, kilka chat na polanie, wzgórze. Małe spokojne rysunki: tarpan, tur. Podpis PL: „ok. milion mieszkańców”. BEZ rzezi, BEZ pożaru. Styl Nowej Ery.",
          ua: "Ліс, річка, оселя. Тарпан і тур. Без полювання-різанини."
        }
      }),
      text: {
        pl: [
          "Kraj był bardzo zalesiony. Mieszkało ok. miliona ludzi — mało jak na taką przestrzeń. Osady stawiano nad rzekami i jeziorami, na polanach i wzgórzach.",
          "Pożywienie: uprawa, hodowla, rybołówstwo, zbieractwo, łowy. W puszczy żyły m.in. tarpan i tur (dziś tych zwierząt w Polsce już nie ma)."
        ],
        ua: [
          "Край був дуже залісений. Жило бл. мільйона людей — мало на такий простір. Оселі ставили над річками й озерами, на галявинах і пагорбах.",
          "Їжа: рілля, худоба, рибальство, збиральництво, лови. У пущі жили зокрема тарпан і тур (сьогодні цих тварин у Польщі вже немає)."
        ]
      },
      task: {
        id: "h32-las",
        type: "true-false",
        level: "A",
        question: {
          pl: "W państwie pierwszych Piastów większość kraju pokrywały lasy, a ludzi było około miliona — prawda czy fałsz?",
          ua: "У державі перших П’ястів більшість краю вкривали ліси, а людей було близько мільйона — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Film Zapamiętaj i karta nauczycielki.",
          ua: "Фільм Запам’ятай і картка вчительки."
        },
        explanation: {
          pl: "Prawda. To cecha kraju, nie data bitwy.",
          ua: "Правда. Це риса краю, не дата битви."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Uprawa żarowa", ua: "Підсічно-вогнева рілля" },
      formula: "metoda żarowa",
      visual: gh("265", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: karczowanie, popiół, socha, zboże i owca",
          ua: "Схема: корчування, попіл, рало, збіжжя і вівця"
        },
        title: { pl: "Popiół jako nawóz, nie katastrofa", ua: "Попіл як добриво, не катастрофа" },
        prompt: {
          pl: "Szkolny schemat 16:9, trzy kroki PL: „karczowanie”; „wypalanie — popiół”; „pole i socha”. Obok kłosy prosa i pszenicy, owca. Mały ogień kontrolowany, NIE ściana płomieni. Styl Nowej Ery.",
          ua: "Жарова метода. Соха. Без пожежі-катастрофи."
        }
      }),
      text: {
        pl: [
          ["", em("Metoda żarowa"), ": karczowano drzewa, resztę palono. Popiół użyźniał ziemię. Po kilku latach plon spadał — karczowano kolejny kawałek lasu. Narzędzia były proste (socha, sierp)."],
          "Siano m.in. proso, pszenicę, jęczmień i len. Hodowano owce i kozy."
        ],
        ua: [
          ["", em("Підсічно-вогнева метода"), ": корчували дерева, решту палили. Попіл удобрював землю. За кілька років урожай падав — корчували наступну ділянку лісу. Знаряддя були прості (рало, серп)."],
          "Сіяли зокрема просо, пшеницю, ячмінь і льон. Розводили овець і кіз."
        ]
      },
      task: {
        id: "h32-zar",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Na czym polegała metoda żarowa?",
          ua: "У чому полягала підсічно-вогнева метода?"
        },
        options: [
          { id: "a", label: { pl: "karczowanie lasu, wypalanie, popiół jako nawóz; po kilku latach nowe pole", ua: "корчування лісу, випалювання, попіл як добриво; за кілька років нове поле" } },
          { id: "b", label: { pl: "nawadnianie jak w Egipcie z lekcji 3", ua: "зрошення як в Єгипті з уроку 3" } },
          { id: "c", label: { pl: "trójpolówka z lekcji 24 jako jedyny system Piastów", ua: "трипілля з уроку 24 як єдина система П’ястів" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: pozyskiwanie ziemi. Trójpolówka to później, średniowieczna wieś (24).",
          ua: "KN: здобуття землі. Трипілля — пізніше, середньовічне село (24)."
        },
        explanation: {
          pl: "Egipt = 3. Trójpolówka = 24.",
          ua: "Єгипет = 3. Трипілля = 24."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Gród i podgrodzie", ua: "Город і підгороддя" },
      formula: "wał · most",
      visual: gh("266", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat grodu: wał, siedziba księcia, kościół, podgrodzie z chatami, most",
          ua: "Схема города: вал, осідок князя, церква, підгороддя з хатами, міст"
        },
        title: { pl: "Przekrój grodu, nie makieta z Wiki", ua: "Перетин города, не макет з Вікі" },
        prompt: {
          pl: "Szkolny schemat 16:9 z góry. Podpisy PL: „gród — siedziba księcia”; „kościół”; „podgrodzie”; „wał”; „most”. Chatki za wałem, woda, dzień. BEZ kopii ilustracji Gniezna z filmu. Styl Nowej Ery.",
          ua: "Схема города і підгороддя. Не фото макета."
        }
      }),
      text: {
        pl: [
          ["", em("Gród"), " — warownia z wałem. Tu siedziba księcia i często kościół. ", em("Podgrodzie"), " — osada przy grodzie: warsztaty, targi, chaty rzemieślników i kupców."],
          "Most i woda chroniły gród — zapamiętaj układ: wał, podgrodzie, siedziba księcia."
        ],
        ua: [
          ["", em("Город"), " — твердиня з валом. Тут осідок князя і часто церква. ", em("Підгороддя"), " — оселя біля города: майстерні, торги, хати ремісників і купців."],
          "Міст і вода захищали город — запам’ятай уклад: вал, підгороддя, осідок князя."
        ]
      },
      task: {
        id: "h32-podgrodzie",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się osada przy grodzie, gdzie były warsztaty i targi? Wpisz jedno słowo.",
          ua: "Як називається оселя біля города, де були майстерні і торги? Введи одне слово."
        },
        answer: ["podgrodzie", "podgrodzia", "підгороддя", "підгороддя"],
        hint: {
          pl: "KN: gród i podgrodzie. Nie „miasto lokacyjne” z lekcji 24.",
          ua: "KN: город і підгороддя. Не «локаційне місто» з уроку 24."
        },
        explanation: {
          pl: "Podgrodzie. Lokacja = 24.",
          ua: "Підгороддя. Локація = 24."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Najważniejsze grody", ua: "Найважливіші городи" },
      formula: "Gniezno · Poznań · Ostrów Lednicki",
      visual: gh("267", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Gniezno, Poznań i Ostrów Lednicki wśród lasów i jezior",
          ua: "Карта: Гнєзно, Познань і Острів Ледницький серед лісів і озер"
        },
        title: { pl: "Trzy punkty, nie cała Europa", ua: "Три точки, не вся Європа" },
        prompt: {
          pl: "Szkolna mapa 16:9 Wielkopolski. Podpisy PL: Gniezno, Poznań, Ostrów Lednicki (wyspa na jeziorze). Las i rzeki. BEZ granic 2026. Tytuł: „grody pierwszych Piastów”. Styl Nowej Ery.",
          ua: "Гнєзно, Познань, Острів Ледницький."
        }
      }),
      text: {
        pl: [
          ["Film Zapamiętaj: najważniejszy gród to ", em("Gniezno"), ". Ważne były też ", em("Poznań"), " i ", em("Ostrów Lednicki"), "."],
          "To sieć władzy i Kościoła, nie mapa wojen z lekcji 29–31."
        ],
        ua: [
          ["Фільм Запам’ятай: найважливіший город — ", em("Гнєзно"), ". Важливими були також ", em("Познань"), " і ", em("Острів Ледницький"), "."],
          "Це мережа влади і Церкви, не карта війн з уроків 29–31."
        ]
      },
      task: {
        id: "h32-grod",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który zestaw grodów należy do tej lekcji?",
          ua: "Який набір городів належить до цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Gniezno, Poznań, Ostrów Lednicki", ua: "Гнєзно, Познань, Острів Ледницький" } },
          { id: "b", label: { pl: "tylko Malbork z lekcji 23", ua: "лише Мальборк з уроку 23" } },
          { id: "c", label: { pl: "Kartagina i Salamina", ua: "Карфаген і Саламін" } }
        ],
        answer: "a",
        hint: {
          pl: "Zapamiętaj z filmu. Biskupin = 27, inna epoka.",
          ua: "Запам’ятай з фільму. Біскупін = 27, інша епоха."
        },
        explanation: {
          pl: "Malbork = 23. Starożytność = dział I–III.",
          ua: "Мальборк = 23. Давнина = розділи I–III."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pięć grup", ua: "П’ять груп" },
      formula: "książę · wojowie · rzemieślnicy · kupcy · chłopi",
      visual: gh("268", {
        kind: "image-placeholder",
        alt: {
          pl: "Pięć ikon: korona, miecze, kowal, waga, snop — grupy społeczeństwa Piastów",
          ua: "П’ять ікон: корона, мечі, коваль, терези, сніп — групи суспільства П’ястів"
        },
        title: { pl: "Ikony grup, nie pięć portretów Matejki", ua: "Ікони груп, не п’ять портретів Матейка" },
        prompt: {
          pl: "Szkolny slajd 16:9, pięć pól z ikonami i podpisami PL: książę; wojowie; rzemieślnicy; kupcy; chłopi. Dzień. BEZ Matejki. Styl Nowej Ery.",
          ua: "П’ять груп. Ікони. Не портрети князів."
        }
      }),
      text: {
        pl: [
          ["", em("Książę"), " — prawa, sędzia, wódz; ziemia była jego własnością (", em("prawo książęce"), "). ", em("Wojowie"), " — bezpieczeństwo i gotowość do walki."],
          ["", em("Rzemieślnicy"), " — przedmioty na podgrodziu. ", em("Kupcy"), " — targi i waga. ", em("Chłopi"), " — uprawa przy grodach, najliczniejsza grupa."]
        ],
        ua: [
          ["", em("Князь"), " — права, суддя, вождь; земля була його власністю (", em("княже право"), "). ", em("Вої"), " — безпека і готовність до бою."],
          ["", em("Ремісники"), " — речі на підгородді. ", em("Купці"), " — торги і терези. ", em("Селяни"), " — рілля біля городів, найчисленніша група."]
        ]
      },
      task: {
        id: "h32-grupy",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które grupy zamieszkiwały państwo pierwszych Piastów?",
          ua: "Які групи жили в державі перших П’ястів?"
        },
        options: [
          { id: "a", label: { pl: "książę, wojowie, rzemieślnicy, kupcy, chłopi", ua: "князь, вої, ремісники, купці, селяни" } },
          { id: "b", label: { pl: "tylko patrycjusze i plebs z lekcji 12", ua: "лише патриції і плебс з уроку 12" } },
          { id: "c", label: { pl: "kalifowie z lekcji 18 jako ludność Polski", ua: "каліфи з уроку 18 як людність Польщі" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta nauczycielki i film. Pięć grup.",
          ua: "Картка вчительки і фільм. П’ять груп."
        },
        explanation: {
          pl: "Rzym = 12. Islam = 18.",
          ua: "Рим = 12. Іслам = 18."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Obowiązki poddanych", ua: "Обов’язки підданих" },
      formula: "danina · posługi",
      visual: gh("269", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: worek daniny, praca przy wale, gościna dworu — bez kary cielesnej",
          ua: "Схема: мішок данини, робота біля валу, гостина двору — без тілесної кари"
        },
        title: { pl: "Danina i praca, nie knut", ua: "Данина і праця, не батіг" },
        prompt: {
          pl: "Szkolny schemat 16:9. Podpisy PL: „danina”; „posługi”; „gościna dworu w podróży”; „wał i warta”. Ludzie niosą zboże, naprawiają palisadę, dzień. BEZ bata, BEZ nędzy-gore. Styl Nowej Ery.",
          ua: "Данина і повинності. Без батога."
        }
      }),
      text: {
        pl: [
          ["Państwo było własnością władcy. Poddani: przestrzegali prawa, płacili ", em("daniny"), ", świadczyli ", em("posługi"), " (usługi i towary), goszczili dwór w podróży, budowali wały i stawali na warcie."],
          "To obowiązki wobec księcia. To nie lekcja 22 o hołdzie lennym na Zachodzie — tu prawo książęce."
        ],
        ua: [
          ["Держава була власністю володаря. Піддані: дотримувались права, платили ", em("данини"), ", несли ", em("повинності"), " (послуги і товари), гостили двір у подорожі, будували вали і стояли на варті."],
          "Це обов’язки перед князем. Це не урок 22 про ленну присягу на Заході — тут княже право."
        ]
      },
      task: {
        id: "h32-danina",
        type: "input-text",
        level: "A",
        question: {
          pl: "Jak nazywa się świadczenie w zbożu, zwierzętach lub pracy na rzecz księcia? Wpisz jedno słowo (danina albo posługi).",
          ua: "Як називається повинність зерном, худобою або працею на користь князя? Введи одне слово (данина або повинності)."
        },
        answer: ["danina", "daniny", "posługi", "poslugi", "данина", "данини", "повинності", "повинности"],
        hint: {
          pl: "KN: danina i posługi. Oba słowa są poprawne.",
          ua: "KN: данина і повинності. Обидва слова правильні."
        },
        explanation: {
          pl: "Danina = danie; posługi = praca i usługi.",
          ua: "Данина = віддання; повинності = праця і послуги."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Osady służebne", ua: "Служебні поселення" },
      formula: "Piekary · Kowale · Kobylniki",
      visual: gh("270", {
        kind: "image-placeholder",
        alt: {
          pl: "Piekarz, kowal i hodowca koni oraz nazwy wsi Piekary, Kowale, Kobylniki",
          ua: "Пекар, коваль і коневод та назви сіл Пєкари, Ковале, Кобильники"
        },
        title: { pl: "Trzy rzemiosła, nie lista czterdziestu wsi", ua: "Три ремесла, не список сорока сіл" },
        prompt: {
          pl: "Szkolny slajd 16:9. Trzy spokojne rysunki: piekarz, kowal, stajnia. Podpisy PL: Piekary, Kowale, Kobylniki. Tytuł: „osady służebne”. BEZ 40 nazw, BEZ foto znaków drogowych jako jedynego obrazu. Styl Nowej Ery.",
          ua: "Пєкари, Ковале, Кобильники. Три ремесла."
        }
      }),
      text: {
        pl: [
          ["", em("Osada służebna"), " — wieś, która robiła konkretną rzecz dla dworu: chleb, konie, żelazo, tarcze… ", em("Ludność służebna"), " dostarczała te towary."],
          "WSPÓŁCZEŚNIE nazwy zostały: Piekary, Kowale, Kobylniki, Psary, Świniary. Nie wkuwamy całej listy bartników i bobrowników."
        ],
        ua: [
          ["", em("Служебне поселення"), " — село, яке робило конкретну річ для двору: хліб, коней, залізо, щити… ", em("Служебна людність"), " постачала ці товари."],
          "СЬОГОДНІ назви лишились: Пєкари, Ковале, Кобильники, Псари, Свіняри. Не заучуємо всього списку бортників і бобровників."
        ]
      },
      task: {
        id: "h32-osada",
        type: "true-false",
        level: "B",
        question: {
          pl: "Nazwy jak Piekary czy Kowale mogą być śladem osad służebnych — prawda czy fałsz?",
          ua: "Назви як Пєкари чи Ковале можуть бути слідом служебних поселень — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Film: osady służebne obecnie. Piekary — chleb.",
          ua: "Фільм: служебні поселення сьогодні. Пєкари — хліб."
        },
        explanation: {
          pl: "Prawda. To ciekawostka KN-friendly, nie cała encyklopedia nazw.",
          ua: "Правда. Це цікавинка в межах KN, не вся енциклопедія назв."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drużyna i rycerstwo", ua: "Дружина і лицарство" },
      formula: "wojowie → rycerze",
      visual: gh("271", {
        kind: "image-placeholder",
        alt: {
          pl: "Wojowie stoją przy księciu; strzałka od utrzymania dworu do nadania ziemi rycerzowi",
          ua: "Вої стоять біля князя; стрілка від утримання двору до надання землі лицареві"
        },
        title: { pl: "Stoją, nie szarżują", ua: "Стоять, не атакують" },
        prompt: {
          pl: "Szkolny schemat 16:9. Lewa: wojowie przy księciu, podpis „utrzymanie z dworu”. Prawa: woj na małym polu, podpis „ziemia → sam się zbroi”. BEZ bitwy, BEZ Vikingów z toporami. Styl Nowej Ery.",
          ua: "Дружина і лицар. Стоять. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Drużyna książęca"), " — wojowie na utrzymaniu władcy: porządek, ochrona, wojna. Wśród wojów Mieszka i Chrobrego mogli być też przybysze (np. z Północy) — jedno zdanie, nie lekcja o Vikingach."],
          ["Gdy zabrakło łupów (kryzys za Odnowiciela, lekcja 30), książę dawał wojom ", em("ziemię"), ". Woj sam się zbroił i stawał na wezwanie. Tak rodziło się ", em("rycerstwo"), " i możni. KN ponadpodstawowe: woj drużyny ≠ rycerz-posiadacz."]
        ],
        ua: [
          ["", em("Княжа дружина"), " — вої на утриманні володаря: лад, охорона, війна. Серед воїв Мешка і Хороброго могли бути й прибульці (напр. з Півночі) — одне речення, не урок про вікінгів."],
          ["Коли забракло здобичі (криза за Відновителя, урок 30), князь давав воям ", em("землю"), ". Воїн сам озброювався і ставав на поклик. Так поставало ", em("лицарство"), " і можновладці. KN понад базове: воїн дружини ≠ лицар-власник."]
        ]
      },
      task: {
        id: "h32-ryc",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym woj drużyny różni się od rycerza (KN ponadpodstawowe)?",
          ua: "Чим воїн дружини відрізняється від лицаря (KN понад базове)?"
        },
        options: [
          { id: "a", label: { pl: "woj żyje z dworu księcia; rycerz dostaje ziemię i sam się zbroi, gdy książę wezwie", ua: "воїн живе з двору князя; лицар дістає землю і сам озброюється, коли князь покличе" } },
          { id: "b", label: { pl: "to to samo co turniej i Zawisza z lekcji 23", ua: "це те саме, що турнір і Завіша з уроку 23" } },
          { id: "c", label: { pl: "rycerz to tylko giermek bez ziemi", ua: "лицар — лише зброєносець без землі" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: ziemia zamiast żołdu. Turniej = 23.",
          ua: "Картка: земля замість платні. Турнір = 23."
        },
        explanation: {
          pl: "Zawisza i pasowanie = 23. Tu początek rycerstwa u Piastów.",
          ua: "Завіша і пасування = 23. Тут початок лицарства у П’ястів."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "pierwsi Piastowie — umownie IX–XII w., od legendy Piasta do potomków Krzywoustego", ua: "перші П’ясти — умовно IX–XII ст., від легенди П’яста до нащадків Кривоустого" },
        { pl: "metoda żarowa — karczowanie i wypalanie lasu, popiół użyźnia pole", ua: "підсічно-вогнева метода — корчування і випалювання лісу, попіл удобрює поле" },
        { pl: "gród / podgrodzie — warownia władcy; osada warsztatów i targów przy wale", ua: "город / підгороддя — твердиня володаря; оселя майстерень і торгів біля валу" },
        { pl: "prawo książęce — władca właścicielem ziemi, sędzią i prawodawcą", ua: "княже право — володар власником землі, суддею і законодавцем" },
        { pl: "danina / posługi — świadczenia i praca poddanych na rzecz dworu", ua: "данина / повинності — віддання і праця підданих на користь двору" },
        { pl: "osada służebna — wieś z jednym rzemiosłem dla księcia (Piekary, Kowale…)", ua: "служебне поселення — село з одним ремеслом для князя (Пєкари, Ковале…)" },
        { pl: "drużyna / rycerstwo — wojowie na utrzymaniu dworu → później ziemia i własna broń", ua: "дружина / лицарство — вої на утриманні двору → пізніше земля і власна зброя" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Wszyscy mieszkali w miastach lokacyjnych jak w lekcji 24. Książę nic nie posiadał. Daniny nie było. Gniezno to tylko Biskupin. Rycerz i woj drużyny to to samo. Testament 1138 jest tematem tej godziny.”",
        ua: "«Усі жили в локаційних містах як в уроці 24. Князь нічого не мав. Данини не було. Гнєзно — лише Біскупін. Лицар і воїн дружини — те саме. Заповіт 1138 — тема цієї години.»"
      },
      text: {
        pl: [
          "Osady i grody, nie lokacja. Prawo książęce. Danina była. Gniezno ≠ Biskupin. Woj ≠ rycerz. 1138 = 31."
        ],
        ua: [
          "Оселі і городи, не локація. Княже право. Данина була. Гнєзно ≠ Біскупін. Воїн ≠ лицар. 1138 = 31."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach jak w notatce nauczycielki: czasy, grupy, obowiązki, zajęcia. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях як у нотатці вчительки: часи, групи, обов’язки, заняття. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: IX–XII w.; pięć grup; danina; żarowa i gród."
        ],
        ua: [
          "Підказка: IX–XII ст.; п’ять груп; данина; жарова і город."
        ]
      },
      task: {
        id: "h32-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę z karty?",
          ua: "Яке речення замикає нотатку з картки?"
        },
        options: [
          { id: "a", label: { pl: "IX–XII w.: las i grody; grupy od księcia do chłopów; daniny i posługi; żarowa, rzemiosło, targi, drużyna", ua: "IX–XII ст.: ліс і городи; групи від князя до селян; данини і повинності; жарова, ремесло, торги, дружина" } },
          { id: "b", label: { pl: "To tylko koronacja 1025", ua: "Це лише коронація 1025" } },
          { id: "c", label: { pl: "To tylko obrona Głogowa 1109", ua: "Це лише оборона Глогува 1109" } }
        ],
        answer: "a",
        hint: {
          pl: "Cztery pytania z karty nauczycielki.",
          ua: "Чотири запитання з картки вчительки."
        },
        explanation: {
          pl: "1025 = 29. 1109 = 31.",
          ua: "1025 = 29. 1109 = 31."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Woj i rycerz", ua: "Воїн і лицар" },
      task: {
        id: "h32-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe + nazwy wsi dziś — bez lekcji 23 i 33?",
          ua: "KN понад базове + назви сіл сьогодні — без уроків 23 і 33?"
        },
        options: [
          { id: "a", label: { pl: "woj je z dworu, rycerz z ziemi; Piekary i Kowale to ślad osad służebnych, nie nowa mapa Krzyżaków", ua: "воїн їсть з двору, лицар із землі; Пєкари і Ковале — слід служебних осель, не нова карта хрестоносців" } },
          { id: "b", label: { pl: "trzeba wykuć 40 nazw od Bartników po Jadowników z jadem", ua: "треба вивчити 40 назв від Бортників до Ядовників із отрутою" } },
          { id: "c", label: { pl: "Kazimierz Sprawiedliwy 1194 to osobna biografia tej godziny", ua: "Казимир Справедливий 1194 — окрема біографія цієї години" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: różnica woj / rycerz. Film: nazwy miejscowości. Jad i lista wiki — za szeroko.",
          ua: "KN: різниця воїн / лицар. Фільм: назви місцевостей. Отрута і список вікі — зашироко."
        },
        explanation: {
          pl: "Sprawiedliwy zamyka tylko definicję „pierwszych Piastów”, nie kartę postaci. Krzyżacy = 33.",
          ua: "Справедливий лише замикає означення «перших П’ястів», не картку постаті. Хрестоносці = 33."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h32-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o społeczeństwie pierwszych Piastów?",
          ua: "Що правда про суспільство перших П’ястів?"
        },
        options: [
          { id: "a", label: { pl: "las i grody (Gniezno, Poznań, Ostrów Lednicki); pięć grup; daniny i osady służebne; książę właścicielem ziemi", ua: "ліс і городи (Гнєзно, Познань, Острів Ледницький); п’ять груп; данини і служебні оселі; князь власником землі" } },
          { id: "b", label: { pl: "to samo co demokratyczne Ateny z lekcji 07", ua: "те саме, що демократичні Афіни з уроку 07" } },
          { id: "c", label: { pl: "1138 i Głogów są głównym tematem tej lekcji", ua: "1138 і Глогув — головна тема цього уроку" } }
        ],
        answer: "a",
        hint: {
          pl: "Zapamiętaj z filmu + KN. Daty wojen = 31.",
          ua: "Запам’ятай з фільму + KN. Дати війн = 31."
        },
        explanation: {
          pl: "Ateny = 07. 1138 = 31.",
          ua: "Афіни = 07. 1138 = 31."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W państwie pierwszych Piastów żyło ok. miliona ludzi. Kraj pokrywały puszcze; grody stawiano nad rzekami i na wzgórzach.",
          ["miliona", "grody"],
          "У державі перших П’ястів жило бл. мільйона людей. Край вкривали пущі; городи ставили над річками і на пагорбах.",
          ["мільйона", "городи"]
        ),
        mark(
          "Społeczeństwo: chłopi, rzemieślnicy, wojowie, kupcy. Na czele książę — wódz, sędzia i właściciel ziemi.",
          ["książę", "chłopi"],
          "Суспільство: селяни, ремісники, вої, купці. На чолі князь — вождь, суддя і власник землі.",
          ["князь", "селяни"]
        ),
        mark(
          "Poddani płacili daniny i świadczyli pracę. Ludność służebna dostarczała dworowi konkretne towary.",
          ["daniny", "służebna"],
          "Піддані платили данини і несли працю. Служебна людність постачала двору конкретні товари.",
          ["данини", "служебна"]
        ),
        mark(
          "Najważniejsze grody: Gniezno, a także Poznań i Ostrów Lednicki.",
          ["Gniezno", "Ostrów Lednicki"],
          "Найважливіші городи: Гнєзно, а також Познань і Острів Ледницький.",
          ["Гнєзно", "Острів Ледницький"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: rozbicie dzielnicowe — po testamencie 1138, nie nowy opis grodu.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: удільне розбиття — після заповіту 1138, не новий опис города.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "8TMFiQtMxDo",
        title: {
          pl: "Krótkie Lekcje: Społeczeństwo w czasach pierwszych Piastów",
          ua: "Короткі уроки: Суспільство за перших П’ястів"
        }
      }
    }
  ]
};
