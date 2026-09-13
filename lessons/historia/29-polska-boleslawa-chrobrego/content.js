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
      heading: { pl: "Polska Bolesława Chrobrego", ua: "Польща Болеслава Хороброго" },
      formula: "1000 · 1025",
      text: {
        pl: [
          "Mieszko zmarł w 992. Władzę objął syn — Bolesław, zwany Chrobrym (odważny, waleczny).",
          "Na osi KN: 1000 — zjazd gnieźnieński, 1025 — koronacja. 997 (Wojciech) też tu. Kryzys po śmierci — następna lekcja."
        ],
        ua: [
          "Мешко помер 992 року. Владу взяв син — Болеслав, званий Хоробрим (відважний, мужній).",
          "На осі KN: 1000 — з’їзд у Гнєзні, 1025 — коронація. 997 (Войцех) теж тут. Криза після смерті — наступний урок."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać misję biskupa Wojciecha (997) i jej skutek", ua: "описати місію єпископа Войцеха (997) і її наслідок" },
        { pl: "wyjaśnić przyczyny i skutki zjazdu gnieźnieńskiego (1000)", ua: "пояснити причини і наслідки з’їзду в Гнєзні (1000)" },
        { pl: "wskazać na mapie Milsko, Łużyce, Morawy i Grody Czerwieńskie", ua: "вказати на карті Мильсько, Лужицю, Моравію і Червенські городи" },
        { pl: "podać, kiedy i gdzie koronowano pierwszego króla Polski", ua: "назвати, коли і де коронували першого короля Польщі" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Bolesław Chrobry", ua: "Болеслав Хоробрий" },
      formula: "992–1025",
      visual: gh("240", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Bolesława Chrobrego: syn Mieszka, przydomek, lata panowania",
          ua: "Картка Болеслава Хороброго: син Мешка, прізвисько, роки правління"
        },
        title: { pl: "Syn Mieszka, nie Matejko", ua: "Син Мешка, не Матейко" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny książę w płaszczu i koronie, dzień. BEZ Matejki, BEZ bitwy. Cztery punkty PL: „kto — Bolesław Chrobry”; „skąd — syn Mieszka I”; „lata — panował 992–1025 (żył 967–1025)”; „wsławił się — zjazd 1000, pierwszy król 1025”. Styl Nowej Ery.",
          ua: "Картка Болеслава: син Мешка, 992–1025. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("Bolesław Chrobry"), ": kto — syn ", em("Mieszka I"), "; skąd — dwór Piastów; lata — panował ", em("992–1025"), " (żył 967–1025); przydomek ", em("Chrobry"), " = odważny, waleczny."],
          "Chciał wzmocnić Polskę w Europie: Kościół, sojusze i granice. Nie powtarzamy chrztu 966 — to ojciec."
        ],
        ua: [
          ["", em("Болеслав Хоробрий"), ": хто — син ", em("Мешка I"), "; звідки — двір П’ястів; роки — правив ", em("992–1025"), " (жив 967–1025); прізвисько ", em("Хоробрий"), " = відважний, мужній."],
          "Хотів зміцнити Польщу в Європі: Церква, союзи і кордони. Не повторюємо хрещення 966 — то батько."
        ]
      },
      task: {
        id: "h29-syn",
        type: "input-text",
        level: "A",
        question: {
          pl: "Po śmierci Mieszka I (992) władzę objął… Wpisz imię i przydomek.",
          ua: "Після смерті Мешка I (992) владу взяв… Введи ім’я і прізвисько."
        },
        answer: ["bolesław chrobry", "boleslaw chrobry", "bolesława chrobrego", "болеслав хоробрий", "болеслава хороброго", "chrobry", "хоробрий"],
        hint: {
          pl: "Karta nauczycielki: syn Mieszka. Przydomek = odważny.",
          ua: "Картка вчительки: син Мешка. Прізвисько = відважний."
        },
        explanation: {
          pl: "Bolesław Chrobry. Mieszko II — lekcja 30.",
          ua: "Болеслав Хоробрий. Мешко II — урок 30."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Misja Wojciecha", ua: "Місія Войцеха" },
      formula: "997",
      timelineYear: 997,
      visual: gh("241", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta biskupa Wojciecha: Czechy, misja do Prusów z tłumaczem, rok 997",
          ua: "Картка єпископа Войцеха: Чехія, місія до пруссів із перекладачем, 997 рік"
        },
        title: { pl: "Nauka z tłumaczem, nie męczeństwo na obrazie", ua: "Наука з перекладачем, не мучеництво на образі" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny biskup w szatach i mitrze, obok tłumacz, dzień, las. BEZ krwi, BEZ ścięcia, BEZ Matejki. Cztery punkty PL: „kto — biskup Wojciech”; „skąd — Czechy”; „lata — 997”; „wsławił się — misja do Prusów, święty, patron Polski”. Styl Nowej Ery.",
          ua: "Картка Войцеха: Чехія, 997, місія. Без смерті на рисунку."
        }
      }),
      text: {
        pl: [
          ["", em("997"), ": Bolesław wsparł czeskiego biskupa ", em("Wojciecha"), " w misji do ", em("Prusów"), " (dziś Warmia i Mazury). Uczył z pomocą tłumacza."],
          "Prusowie pojmali go i zabili. Bolesław wykupił ciało (tyle złota, ile ważyło) i pochował w Gnieźnie. Ogłoszono go świętym — patron Polski. Na ekranie nie ma sceny śmierci."
        ],
        ua: [
          ["", em("997"), ": Болеслав підтримав чеського єпископа ", em("Войцеха"), " у місії до ", em("пруссів"), " (нині Вармія і Мазури). Вчив за допомогою перекладача."],
          "Прусси схопили його і вбили. Болеслав викупив тіло (стільки золота, скільки важило) і поховав у Гнєзні. Його проголосили святим — патрон Польщі. На екрані немає сцени смерті."
        ]
      },
      task: {
        id: "h29-woj",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Po co Wojciech jechał do Prusów i jak skończyła się misja?",
          ua: "Навіщо Войцех їхав до пруссів і як скінчилася місія?"
        },
        options: [
          { id: "a", label: { pl: "chciał nawrócić Prusów; Prusowie go zabili; pochówek w Gnieźnie", ua: "хотів навернути пруссів; прусси його вбили; поховання в Гнєзні" } },
          { id: "b", label: { pl: "chciał tylko podbić Pomorze jak Hodon w 972", ua: "хотів лише підбити Помор’я як Годон 972 року" } },
          { id: "c", label: { pl: "był kopistą z lekcji 25 i został w skryptorium", ua: "був переписувачем з уроку 25 і лишився в скрипторії" } }
        ],
        answer: "a",
        hint: {
          pl: "Quiz nauczycielki: nawrócić, nie podbić. Prusowie — Warmia i Mazury.",
          ua: "Квіз вчительки: навернути, не підбити. Прусси — Вармія і Мазури."
        },
        explanation: {
          pl: "KN: opisać misję. Cedynia = 28. Kopista = 25.",
          ua: "KN: описати місію. Цедіня = 28. Переписувач = 25."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Drzwi Gnieźnieńskie", ua: "Гнєзненські двері" },
      formula: "źródło obrazem",
      visual: gh("242", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat brązowych drzwi z polami: łódź na brzeg i nauka, bez sceny zabójstwa",
          ua: "Схема бронзових дверей із полями: човен на берег і наука, без сцени вбивства"
        },
        title: { pl: "Życiorys na drzwiach, nie foto Wiki", ua: "Життєпис на дверях, не фото Вікі" },
        prompt: {
          pl: "Szkolny schemat 16:9 dwóch skrzydeł drzwi z prostokątnymi polami. Dwa powiększenia: łódź przy brzegu; biskup naucza. Podpis: „Drzwi Gnieźnieńskie — żywot Wojciecha”. BEZ zdjęcia katedry, BEZ panelu męczeństwa. Styl Nowej Ery.",
          ua: "Схема дверей. Човен і наука. Без убивства і без фото."
        }
      }),
      text: {
        pl: [
          ["", em("Drzwi Gnieźnieńskie"), " w katedrze opowiadają żywot Wojciecha obrazem (KN ponadpodstawowe: źródło ikonograficzne)."],
          "To nie zdjęcie z wycieczki i nie scena śmierci. Łódź i nauka wystarczą, żeby odczytać misję."
        ],
        ua: [
          ["", em("Гнєзненські двері"), " у соборі розповідають житіє Войцеха образом (KN понад базове: іконографічне джерело)."],
          "Це не фото з екскурсії і не сцена смерті. Човен і наука вистачать, щоб прочитати місію."
        ]
      },
      task: {
        id: "h29-drzwi",
        type: "true-false",
        level: "B",
        question: {
          pl: "Drzwi Gnieźnieńskie są źródłem obrazkowym o życiu Wojciecha — prawda czy fałsz?",
          ua: "Гнєзненські двері є образним джерелом про життя Войцеха — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN ponadpodstawowe. Nie myl z Biblią pauperum z lekcji 26 — tu konkretny święty.",
          ua: "KN понад базове. Не плутай із Biblia pauperum з уроку 26 — тут конкретний святий."
        },
        explanation: {
          pl: "Prawda. Miniatura w księdze = 26. Tu drzwi katedry.",
          ua: "Правда. Мініатюра в книзі = 26. Тут двері собору."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zjazd gnieźnieński", ua: "З’їзд у Гнєзні" },
      formula: "1000",
      timelineYear: 1000,
      visual: gh("243", {
        kind: "image-placeholder",
        alt: {
          pl: "Otton III i Bolesław w Gnieźnie przy krzyżu, rok 1000, bez Matejki",
          ua: "Оттон III і Болеслав у Гнєзні біля хреста, 1000 рік, без Матейка"
        },
        title: { pl: "Pielgrzymka i sojusz, nie tłum na obrazie", ua: "Проща і союз, не натовп на картині" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Dwaj władcy w koronach przy krzyżu (grób Wojciecha — krzyż, NIE ciało). Podpisy PL: „1000, Gniezno”; „Otton III — pielgrzymka”; „Bolesław — sojusz”; „cesarz chce jedności chrześcijańskiej Europy”. BEZ Matejki. Styl Nowej Ery.",
          ua: "З’їзд 1000. Оттон і Болеслав. Не Матейко."
        }
      }),
      text: {
        pl: [
          ["", em("1000"), ", ", em("Gniezno"), ": cesarz ", em("Otton III"), " i Bolesław. Przyczyna: pielgrzymka do grobu Wojciecha oraz plan Ottona, by jednoczyć chrześcijańską Europę."],
          "Uczestnicy, data, miejsce — karta nauczycielki. Otton III: kto — cesarz; skąd — Rzesza; lata — 1000; wsławił się — zjazd i sojusz z Polską."
        ],
        ua: [
          ["", em("1000"), ", ", em("Гнєзно"), ": імператор ", em("Оттон III"), " і Болеслав. Причина: проща до гробу Войцеха і план Оттона єднати християнську Європу."],
          "Учасники, дата, місце — картка вчительки. Оттон III: хто — імператор; звідки — Райх; роки — 1000; уславився — з’їзд і союз із Польщею."
        ]
      },
      task: {
        id: "h29-1000",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Otton III przybył do Gniezna? Wpisz tylko liczbę.",
          ua: "У якому році Оттон III прибув до Гнєзна? Введи лише число."
        },
        answer: 1000,
        hint: {
          pl: "Tysiąc. KN: ta data na osi. Po 997, przed 1025.",
          ua: "Тисяча. KN: ця дата на осі. Після 997, перед 1025."
        },
        explanation: {
          pl: "1000. 966 to chrzest ojca (28).",
          ua: "1000. 966 — хрещення батька (28)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Podarunki i skutki", ua: "Дари і наслідки" },
      formula: "relikwie",
      timelineYear: 1000,
      visual: gh("244", {
        kind: "image-placeholder",
        alt: {
          pl: "Rysunek włóczni i gwoździa oraz lista: arcybiskupstwo, znaczenie Polski",
          ua: "Рисунок списа і цвяха та список: архієпископство, значення Польщі"
        },
        title: { pl: "Włócznia-rysunek, nie złote zdjęcie", ua: "Спис-рисунок, не золоте фото" },
        prompt: {
          pl: "Szkolny slajd 16:9. Lewa: rysunek włóczni i gwoździa (nie foto relikwii). Prawa lista PL: „arcybiskupstwo w Gnieźnie”; „wzrost znaczenia”; „Kościół pod papieżem, nie pod Magdeburgiem”; „arcybiskup może koronować”. Dzień. Styl Nowej Ery.",
          ua: "Спис і цвях-схема. Наслідки з’їзду. Не фото скарбу."
        }
      }),
      text: {
        pl: [
          ["Podarunki: Bolesław dostał kopię ", em("włóczni św. Maurycego"), " i ", em("gwóźdź z Krzyża"), "; Otton — relikwie Wojciecha. To znaki sojuszu, nie bitwa."],
          ["Skutki: ", em("arcybiskupstwo w Gnieźnie"), ", wzrost znaczenia Polski, Kościół niezależny od Magdeburga (tylko papież), prawo koronacji."]
        ],
        ua: [
          ["Дари: Болеслав дістав копію ", em("списа св. Маврикія"), " і ", em("цвях із Хреста"), "; Оттон — мощі Войцеха. Це знаки союзу, не битва."],
          ["Наслідки: ", em("архієпископство в Гнєзні"), ", зростання значення Польщі, Церква незалежна від Магдебурга (лише папа), право коронації."]
        ]
      },
      task: {
        id: "h29-dary",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co Bolesław dostał od Ottona i jaki był główny skutek zjazdu?",
          ua: "Що Болеслав дістав від Оттона і який головний наслідок з’їзду?"
        },
        options: [
          { id: "a", label: { pl: "włócznię św. Maurycego i gwóźdź; arcybiskupstwo w Gnieźnie i wzrost znaczenia Polski", ua: "спис св. Маврикія і цвях; архієпископство в Гнєзні і зростання значення Польщі" } },
          { id: "b", label: { pl: "tylko Dagome iudex z lekcji 28", ua: "лише Dagome iudex з уроку 28" } },
          { id: "c", label: { pl: "meczet w 622", ua: "мечеть 622 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta: podarunki i skutki. Relikwie Wojciecha poszedł Ottonowi.",
          ua: "Картка: дари і наслідки. Мощі Войцеха пішли Оттонові."
        },
        explanation: {
          pl: "KN: znaczenie zjazdu. Islam = 18. Dagome = 28.",
          ua: "KN: значення з’їзду. Іслам = 18. Dagome = 28."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Arcybiskupstwo", ua: "Архієпископство" },
      formula: "Gniezno · Kraków · Wrocław · Kołobrzeg",
      visual: gh("245", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Polski ok. 1000: Gniezno nad trzema biskupstwami Kraków, Wrocław, Kołobrzeg",
          ua: "Карта Польщі бл. 1000: Гнєзно над трьома єпископствами Краків, Вроцлав, Колобжег"
        },
        title: { pl: "Cztery punkty Kościoła, nie wojna", ua: "Чотири точки Церкви, не війна" },
        prompt: {
          pl: "Szkolna mapa 16:9 ok. 1000. Podpisy PL: arcybiskupstwo Gniezno; biskupstwa Kraków, Wrocław, Kołobrzeg. Strzałka „tylko papież”. BEZ granic 2026, BEZ bitwy. Styl Nowej Ery.",
          ua: "Карта дієцезій 1000. Гнєзно, Краків, Вроцлав, Колобжег."
        }
      }),
      text: {
        pl: [
          ["Pod Gnieznem trzy biskupstwa: ", em("Kraków"), ", ", em("Wrocław"), ", ", em("Kołobrzeg"), ". Polski Kościół podlegał arcybiskupowi, a on — papieżowi."],
          "To KN: niezależność. Biskupstwo w Poznaniu (Jordan, 968) znasz z lekcji 28 — teraz sieć całej Polski."
        ],
        ua: [
          ["Під Гнєзном три єпископства: ", em("Краків"), ", ", em("Вроцлав"), ", ", em("Колобжег"), ". Польська Церква підлягала архієпископові, а він — папі."],
          "Це KN: незалежність. Єпископство в Познані (Йордан, 968) знаєш з уроку 28 — тепер мережа всієї Польщі."
        ]
      },
      task: {
        id: "h29-diec",
        type: "true-false",
        level: "B",
        question: {
          pl: "Po zjeździe powstało arcybiskupstwo w Gnieźnie z biskupstwami w Krakowie, Wrocławiu i Kołobrzegu — prawda czy fałsz?",
          ua: "Після з’їзду постало архієпископство в Гнєзні з єпископствами в Кракові, Вроцлаві і Колобжегу — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Film + KN. Poznań 968 było wcześniej, za Mieszka.",
          ua: "Фільм + KN. Познань 968 була раніше, за Мешка."
        },
        explanation: {
          pl: "Prawda. Magdeburg nie rządzi już polskim Kościołem.",
          ua: "Правда. Магдебург уже не править польською Церквою."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Podboje", ua: "Підбої" },
      formula: "1018 · Budziszyn",
      visual: gh("246", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa: Milsko, Łużyce, Morawy, Grody Czerwieńskie; strzałki, bez bitew",
          ua: "Карта: Мильсько, Лужиця, Моравія, Червенські городи; стрілки, без битв"
        },
        title: { pl: "Cztery nazwy na mapie, nie krew", ua: "Чотири назви на карті, не кров" },
        prompt: {
          pl: "Szkolna mapa 16:9. Podpisy PL: Milsko, Łużyce (zachód); Morawy (południe, czasowo); Grody Czerwieńskie (wschód). Cienkie strzałki: Praga 1003, Ruś 1018. BEZ rzezi, BEZ kopii mapy z filmu. Tytuł: „wskaż cztery ziemie”. Styl Nowej Ery.",
          ua: "Мильсько, Лужиця, Моравія, Червенські городи. Без бою."
        }
      }),
      text: {
        pl: [
          ["Po śmierci Ottona (1002) skończył się sojusz. Długie wojny z Niemcami do pokoju w ", em("Budziszynie"), " (", em("1018"), "). KN: wskazać ", em("Milsko"), ", ", em("Łużyce"), ", ", em("Morawy"), ", ", em("Grody Czerwieńskie"), "."],
          "1003 — Praga (Czechy, na krótko). 1018 — wyprawa na Ruś. Na mapie strzałki, nie bitwa."
        ],
        ua: [
          ["Після смерті Оттона (1002) скінчився союз. Довгі війни з німцями до миру в ", em("Будишині"), " (", em("1018"), "). KN: вказати ", em("Мильсько"), ", ", em("Лужицю"), ", ", em("Моравію"), ", ", em("Червенські городи"), "."],
          "1003 — Прага (Чехія, ненадовго). 1018 — похід на Русь. На карті стрілки, не битва."
        ]
      },
      task: {
        id: "h29-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Który zestaw ziem ma być na mapie tej lekcji?",
          ua: "Який набір земель має бути на карті цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Milsko, Łużyce, Morawy, Grody Czerwieńskie", ua: "Мильсько, Лужиця, Моравія, Червенські городи" } },
          { id: "b", label: { pl: "tylko Biskupin i Tum z lekcji 27 i 26", ua: "лише Біскупін і Тум з уроків 27 і 26" } },
          { id: "c", label: { pl: "Kartagina i Salamina", ua: "Карфаген і Саламін" } }
        ],
        answer: "a",
        hint: {
          pl: "Polecenie z karty i KN. Grody Czerwieńskie — od Rusi.",
          ua: "Завдання з картки і KN. Червенські городи — від Русі."
        },
        explanation: {
          pl: "Starożytność = dział I–III. Biskupin = 27.",
          ua: "Давнина = розділи I–III. Біскупін = 27."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Pierwszy król", ua: "Перший король" },
      formula: "1025 · Gniezno",
      timelineYear: 1025,
      visual: gh("247", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolny rysunek koronacji w Gnieźnie: korona, ubrane postacie, rok 1025",
          ua: "Шкільний рисунок коронації в Гнєзні: корона, вбрані постаті, 1025 рік"
        },
        title: { pl: "Korona w Gnieźnie, nie Matejko", ua: "Корона в Гнєзні, не Матейко" },
        prompt: {
          pl: "Szkolny rysunek 16:9, dzień. Biskup kładzie koronę na głowę władcy w szatach. Mało osób, spokój. Napis: „1025, Gniezno”. BEZ Matejki, BEZ Złotej Kaplicy, BEZ grobowca. Styl Nowej Ery.",
          ua: "Коронація 1025. Постаті в шатах. Не Матейко і не гробниця."
        }
      }),
      text: {
        pl: [
          ["", em("1025"), ", ", em("Gniezno"), ": koronacja — Bolesław zostaje ", em("pierwszym królem"), " Polski. Władca stoi równo z innymi koronowanymi w Europie. Zgoda papieża; śmierć cesarza Henryka II ułatwiła krok."],
          "Zmarł dwa miesiące później. Wysokie podatki i wrodzy sąsiedzi — początek kryzysu, ale to lekcja 30, nie grobowiec na tym slajdzie."
        ],
        ua: [
          ["", em("1025"), ", ", em("Гнєзно"), ": коронація — Болеслав стає ", em("першим королем"), " Польщі. Володар стоїть нарівні з іншими коронованими в Європі. Згода папи; смерть імператора Генріха II полегшила крок."],
          "Помер за два місяці. Високі податки і ворожі сусіди — початок кризи, але це урок 30, не гробниця на цьому слайді."
        ]
      },
      task: {
        id: "h29-1025",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku koronowano Bolesława w Gnieźnie? Wpisz tylko liczbę.",
          ua: "У якому році коронували Болеслава в Гнєзні? Введи лише число."
        },
        answer: 1025,
        hint: {
          pl: "Tysiąc dwadzieścia pięć. KN: ta data na osi. Miejsce: Gniezno.",
          ua: "Тисяча двадцять п’ять. KN: ця дата на осі. Місце: Гнєзно."
        },
        explanation: {
          pl: "1025 w Gnieźnie. Nie 966 i nie 1000.",
          ua: "1025 у Гнєзні. Не 966 і не 1000."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Bolesław Chrobry — syn Mieszka, panował 992–1025, pierwszy król Polski", ua: "Болеслав Хоробрий — син Мешка, правив 992–1025, перший король Польщі" },
        { pl: "biskup Wojciech — Czech, misja do Prusów 997, święty, patron Polski", ua: "єпископ Войцех — чех, місія до пруссів 997, святий, патрон Польщі" },
        { pl: "relikwie / Drzwi Gnieźnieńskie — szczątki świętego; drzwi-obraz żywota Wojciecha", ua: "мощі / Гнєзненські двері — останки святого; двері-образ житія Войцеха" },
        { pl: "zjazd gnieźnieński 1000 — Otton III i Bolesław: pielgrzymka, sojusz, podarunki", ua: "з’їзд у Гнєзні 1000 — Оттон III і Болеслав: проща, союз, дари" },
        { pl: "arcybiskupstwo — Gniezno nad Krakowem, Wrocławiem i Kołobrzegiem; tylko papież wyżej", ua: "архієпископство — Гнєзно над Краковом, Вроцлавом і Колобжегом; лише папа вище" },
        { pl: "Milsko, Łużyce, Morawy, Grody Czerwieńskie — ziemie z wojen Bolesława", ua: "Мильсько, Лужиця, Моравія, Червенські городи — землі з війн Болеслава" },
        { pl: "koronacja 1025 — Gniezno; pierwszy król Polski", ua: "коронація 1025 — Гнєзно; перший король Польщі" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Bolesława ochrzcił Wojciech w 966. Zjazd był w 972 pod Cedynią. Otton III dostał włócznię, a Bolesław nic. Koronacja to 622 w Mekce. Drzwi Gnieźnieńskie malował Matejko. Kryzys Mieszka II to ta lekcja.”",
        ua: "«Болеслава охрестив Войцех 966 року. З’їзд був 972-го під Цедінею. Оттон III дістав спис, а Болеслав нічого. Коронація — 622 у Мецці. Гнєзненські двері малював Матейко. Криза Мешка II — цей урок.»"
      },
      text: {
        pl: [
          "966 = Mieszko. Zjazd = 1000 Gniezno. Włócznię dostał Bolesław. Korona = 1025. Drzwi = średniowiecze, nie Matejko. Kryzys = 30."
        ],
        ua: [
          "966 = Мешко. З’їзд = 1000 Гнєзно. Спис дістав Болеслав. Корона = 1025. Двері = середньовіччя, не Матейко. Криза = 30."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: misja Wojciecha, zjazd 1000 i koronacja. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: місія Войцеха, з’їзд 1000 і коронація. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: 997 Prusowie; Otton w Gnieźnie; 1025 król."
        ],
        ua: [
          "Підказка: 997 прусси; Оттон у Гнєзні; 1025 король."
        ]
      },
      task: {
        id: "h29-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje Wojciecha, zjazd i koronę?",
          ua: "Яке речення охоплює Войцеха, з’їзд і корону?"
        },
        options: [
          { id: "a", label: { pl: "997 Wojciech ginie w Prusach; 1000 Otton w Gnieźnie — arcybiskupstwo; 1025 Bolesław królem w Gnieźnie", ua: "997 Войцех гине в Пруссії; 1000 Оттон у Гнєзні — архієпископство; 1025 Болеслав королем у Гнєзні" } },
          { id: "b", label: { pl: "Wojciech to tylko giermek z lekcji 23", ua: "Войцех — лише зброєносець з уроку 23" } },
          { id: "c", label: { pl: "Koronacja była w 966 w Poznaniu", ua: "Коронація була 966 року в Познані" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: zjazd, rządy, koronacja + KN Wojciech.",
          ua: "Цілі вчительки: з’їзд, правління, коронація + KN Войцех."
        },
        explanation: {
          pl: "Giermek = 23. 966 = chrzest Mieszka.",
          ua: "Зброєносець = 23. 966 = хрещення Мешка."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Polityka i pamięć", ua: "Політика і пам’ять" },
      task: {
        id: "h29-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest KN ponadpodstawowe (drzwi, ocena wojen) — bez lekcji 30?",
          ua: "Що є KN понад базове (двері, оцінка війн) — без уроку 30?"
        },
        options: [
          { id: "a", label: { pl: "Drzwi Gnieźnieńskie = źródło o Wojciechu; wojny powiększyły Polskę, ale zmęczyły lud — kryzys po śmierci to następna lekcja; dziś Chrobry jest na banknocie", ua: "Гнєзненські двері = джерело про Войцеха; війни збільшили Польщу, але втомили люд — криза після смерті це наступний урок; сьогодні Хоробрий на банкноті" } },
          { id: "b", label: { pl: "Mieszko II, Bezprym i św. Stanisław to ta godzina", ua: "Мешко II, Безприм і св. Станіслав — ця година" } },
          { id: "c", label: { pl: "trzeba wykuć całą grę z szyfratorem liter jako KN podstawowe", ua: "треба вивчити всю гру з шифратором літер як KN базове" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: drzwi jako źródło + ocena polityki. Film: pamięć (dęba, statek) — ciekawostka.",
          ua: "KN: двері як джерело + оцінка політики. Фільм: пам’ять (дуб, корабель) — цікавинка."
        },
        explanation: {
          pl: "Lekcja 30 = kryzys i odbudowa. Gry z prezentacji nie przenosimy do playera.",
          ua: "Урок 30 = криза і відбудова. Ігри з презентації не переносимо в плеєр."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h29-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "997, 1000, 1025 — co jest prawdą?",
          ua: "997, 1000, 1025 — що правда?"
        },
        options: [
          { id: "a", label: { pl: "997 Wojciech; 1000 zjazd (Otton, arcybiskupstwo); 1025 koronacja w Gnieźnie — pierwszy król", ua: "997 Войцех; 1000 з’їзд (Оттон, архієпископство); 1025 коронація в Гнєзні — перший король" } },
          { id: "b", label: { pl: "997 to Cedynia; 1000 to chrzest Mieszka", ua: "997 — Цедіня; 1000 — хрещення Мешка" } },
          { id: "c", label: { pl: "1025 to tylko dąb Chrobry, bez koronacji", ua: "1025 — лише дуб Хоробрий, без коронації" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: 1000 i 1025 na osi + misja Wojciecha.",
          ua: "KN: 1000 і 1025 на осі + місія Войцеха."
        },
        explanation: {
          pl: "Cedynia 972 i chrzest 966 = lekcja 28.",
          ua: "Цедіня 972 і хрещення 966 = урок 28."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Po Mieszku władzę objął syn Bolesław Chrobry. W 997 wsparł misję Wojciecha do Prusów.",
          ["Bolesław Chrobry", "Wojciecha"],
          "Після Мешка владу взяв син Болеслав Хоробрий. 997 року підтримав місію Войцеха до пруссів.",
          ["Болеслав Хоробрий", "Войцеха"]
        ),
        mark(
          "W 1000 Otton III przybył do Gniezna (zjazd). Sojusz i podarunki: włócznia św. Maurycego.",
          ["1000", "Otton III"],
          "1000 року Оттон III прибув до Гнєзна (з’їзд). Союз і дари: спис св. Маврикія.",
          ["1000", "Оттон III"]
        ),
        mark(
          "Skutek zjazdu: arcybiskupstwo w Gnieźnie. Wojny: Milsko, Łużyce, Grody Czerwieńskie.",
          ["arcybiskupstwo", "Grody Czerwieńskie"],
          "Наслідок з’їзду: архієпископство в Гнєзні. Війни: Мильсько, Лужиця, Червенські городи.",
          ["архієпископство", "Червенські городи"]
        ),
        mark(
          "Bolesław był pierwszym królem Polski. Koronacja: 1025 w Gnieźnie.",
          ["pierwszym królem", "1025"],
          "Болеслав був першим королем Польщі. Коронація: 1025 у Гнєзні.",
          ["першим королем", "1025"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: kryzys i odbudowa — Mieszko II, nie koronacja 1025.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: криза і відбудова — Мешко II, не коронація 1025.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "visO-x24dQA",
        title: {
          pl: "Krótkie Lekcje: Polska Bolesława Chrobrego",
          ua: "Короткі уроки: Польща Болеслава Хороброго"
        }
      }
    }
  ]
};
