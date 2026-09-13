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
      heading: { pl: "Nowe państwa w Europie", ua: "Нові держави в Європі" },
      formula: "732 · 751 · 800 · 843 · 962",
      text: {
        pl: [
          "Z lekcji 18 znasz Arabów i islam. Dziś zachód Europy: Frankowie, Karol Wielki i daty na osi — 732, 751, 800, 843, 962.",
          "Cel: wyjaśnić, dlaczego po imperium Karola powstały nowe państwa — m.in. przyszła Francja, Niemcy i Włochy."
        ],
        ua: [
          "З уроку 18 знаєш арабів і іслам. Сьогодні захід Європи: франки, Карл Великий і дати на осі — 732, 751, 800, 843, 962.",
          "Мета: пояснити, чому після імперії Карла постали нові держави — зокрема майбутні Франція, Німеччина і Італія."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, kiedy i gdzie powstało państwo Franków, i wskazać na mapie Akwizgran oraz Rzym", ua: "сказати, коли і де постала держава франків, і вказати на мапі Ахен та Рим" },
        { pl: "opisać dokonania Karola Wielkiego i podać datę koronacji cesarskiej (800)", ua: "описати звершення Карла Великого і подати дату імператорської коронації (800)" },
        { pl: "wyjaśnić układ w Verdun (843) i wskazać, jakie państwa z niego wyrosły", ua: "пояснити угоду в Вердені (843) і вказати, які держави з неї виросли" },
        { pl: "powiedzieć, jak powstała Rzesza Niemiecka i co się stało w 962", ua: "сказати, як постала Німецька імперія і що сталося 962 року" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Państwo Franków", ua: "Держава франків" },
      formula: "Galia · V w. n.e.",
      visual: gh("159", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Galii po upadku cesarstwa zachodniego z ziemiami Franków",
          ua: "Мапа Галлії після падіння західної імперії з землями франків"
        },
        title: { pl: "Po 476 — nowy lud na zachodzie", ua: "Після 476 — новий люд на заході" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Zachodnia Europa: Galia, Ren, Loara. Po upadku cesarstwa zachodniego (476) plama „Frankowie”. Kropka PARYŻ. Tytuł PL: „państwo Franków na ziemiach dawnej Galii”. Legenda: ziemie Franków. BEZ granic UE, BEZ armii. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа Галлії: франки, Париж. Без сучасних кордонів."
        }
      }),
      text: {
        pl: [
          ["", em("Frankowie"), " to germański lud. Po upadku cesarstwa zachodniorzymskiego (lekcja 13) zasiedlili ", em("Galię"), " — ziemie dzisiejszej Francji."],
          ["Na przełomie starożytności i średniowiecza powstało tu ich państwo. KN: kiedy i gdzie."]
        ],
        ua: [
          ["", em("Франки"), " — германський люд. Після падіння західної Римської імперії (урок 13) осіли в ", em("Галлії"), " — землях сьогоднішньої Франції."],
          ["На зламі давнини і середньовіччя постала тут їхня держава. KN: коли і де."]
        ]
      },
      task: {
        id: "h19-galia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie i kiedy powstało państwo Franków?",
          ua: "Де і коли постала держава франків?"
        },
        options: [
          { id: "a", label: { pl: "w Galii, po upadku cesarstwa zachodniego (V wiek n.e.)", ua: "у Галлії, після падіння західної імперії (V століття н.е.)" } },
          { id: "b", label: { pl: "na Półwyspie Arabskim w 622", ua: "на Аравійському півострові 622 року" } },
          { id: "c", label: { pl: "w Atenach za Peryklesa", ua: "в Афінах за Перікла" } }
        ],
        answer: "a",
        hint: {
          pl: "Zachód Europy, nie Mekka i nie Akropol.",
          ua: "Захід Європи, не Мекка і не Акрополь."
        },
        explanation: {
          pl: "KN: wskazać początek państwa Franków. 622 = hidżra (lekcja 18).",
          ua: "KN: вказати початок держави франків. 622 = хіджра (урок 18)."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Chlodwig", ua: "Хлодвіг" },
      formula: "Merowingowie · ok. 496",
      visual: gh("160", {
        kind: "image-placeholder",
        alt: {
          pl: "Spokojna karta Chlodwiga: cztery punkty biografii, bez bitwy",
          ua: "Спокійна картка Хлодвіга: чотири пункти біографії, без битви"
        },
        title: { pl: "Król Franków, chrzest, dynastia", ua: "Король франків, хрещення, династія" },
        prompt: {
          pl: "Szkolny slajd 16:9. Muzealne popiersie lub spokojny król w koronie, dzień, BEZ bitwy i BEZ krwi. Cztery punkty PL: „kto — Chlodwig, król Franków”; „skąd — Galia”; „lata — V/VI wiek n.e.”; „wsławił się — zjednoczył Franków, przyjął chrześcijaństwo (ok. 496), dynastia Merowingów”. Mała linia: „dynastia = ród, władza z ojca na syna”. Styl Nowej Ery.",
          ua: "Картка Хлодвіга: Галлія; V/VI ст.; хрещення; Меровінги. Без битви."
        }
      }),
      text: {
        pl: [
          ["", em("Chlodwig"), " z dynastii ", em("Merowingów"), " stworzył państwo Franków. Około 496 przyjął chrześcijaństwo — sojusz z Kościołem."],
          ["Jego następców nazywano gnuśnymi królami. Prawdziwa władza przeszła do ", em("majordomów"), " — urzędników dworu."]
        ],
        ua: [
          ["", em("Хлодвіг"), " з династії ", em("Меровінгів"), " створив державу франків. Близько 496 прийняв християнство — союз із Церквою."],
          ["Його наступників звали лінивими королями. Справжня влада перейшла до ", em("мажордомів"), " — урядників двору."]
        ]
      },
      task: {
        id: "h19-chlodwig",
        type: "true-false",
        level: "A",
        question: {
          pl: "Chlodwig był królem Franków z dynastii Merowingów i przyjął chrześcijaństwo — prawda czy fałsz?",
          ua: "Хлодвіг був королем франків з династії Меровінгів і прийняв християнство — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: postać Chlodwiga. Nie myl z Mahometem z lekcji 18.",
          ua: "KN: постать Хлодвіга. Не плутай з Мухаммадом з уроку 18."
        },
        explanation: {
          pl: "Prawda. Dynastia = ród panujący. Następny ekran: Karolingowie biorą koronę.",
          ua: "Правда. Династія = панівний рід. Наступний екран: Каролінги беруть корону."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Karolingowie biorą władzę", ua: "Каролінги беруть владу" },
      formula: "732 · 751",
      timelineYear: [732, 751],
      visual: gh("161", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa bitwy pod Poitiers 732 i napis Pepin 751, bez szarży",
          ua: "Мапа битви під Пуатьє 732 і напис Піпін 751, без атаки"
        },
        title: { pl: "Karol Młot i Pepin Mały", ua: "Карл Мартел і Піпін Короткий" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwie połówki. LEWA: mapa zachodniej Francji, kropka POITIERS, data 732, podpis „Karol Młot — zwycięstwo Franków nad Arabami”. BEZ szarży, BEZ krwi, BEZ jeźdźców z włóczniami. PRAWA: spokojna korona i napis „751 — Pepin Mały, początek dynastii Karolingów”. Tytuł: „od majordomów do nowej dynastii”. Styl Nowej Ery.",
          ua: "Ліворуч мапа Пуатьє 732. Праворуч 751 Піпін — Каролінги. Без битви."
        }
      }),
      text: {
        pl: [
          ["Majordom ", em("Karol Młot"), " w ", em("732"), " pod Poitiers zatrzymał najazd Arabów z Półwyspu Iberyjskiego (lekcja 18: podboje)."],
          ["Jego syn ", em("Pepin Mały"), " w ", em("751"), " zdjął z tronu ostatniego Merowinga i zaczął dynastię ", em("Karolingów"), ". KN: jak Karolingowie wzięli władzę."]
        ],
        ua: [
          ["Мажордом ", em("Карл Мартел"), " року ", em("732"), " під Пуатьє зупинив напад арабів з Піренейського півострова (урок 18: завоювання)."],
          ["Його син ", em("Піпін Короткий"), " року ", em("751"), " зняв з трону останнього Меровінга і почав династію ", em("Каролінгів"), ". KN: як Каролінги взяли владу."]
        ]
      },
      task: {
        id: "h19-karol",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Jak dynastia Karolingów wzięła władzę u Franków?",
          ua: "Як династія Каролінгів взяла владу у франків?"
        },
        options: [
          { id: "a", label: { pl: "majordom Pepin Mały w 751 przejął koronę po Merowingach; wcześniej Karol Młot wygrał pod Poitiers (732)", ua: "мажордом Піпін Короткий 751 року перейняв корону після Меровінгів; раніше Карл Мартел переміг під Пуатьє (732)" } },
          { id: "b", label: { pl: "Mahomet ogłosił się królem Franków w Mekce", ua: "Мухаммад оголосив себе королем франків у Мецці" } },
          { id: "c", label: { pl: "Justynian przeniósł stolicę z Konstantynopola do Paryża", ua: "Юстиніан переніс столицю з Константинополя до Парижа" } }
        ],
        answer: "a",
        hint: {
          pl: "Najpierw majordomowie, potem nowa dynastia. Nie islam i nie Bizancjum.",
          ua: "Спочатку мажордоми, потім нова династія. Не іслам і не Візантія."
        },
        explanation: {
          pl: "KN: Karolingowie biorą władzę. Karol Wielki = syn Pepina, następny ekran.",
          ua: "KN: Каролінги беруть владу. Карл Великий = син Піпіна, наступний екран."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Karol Wielki", ua: "Карл Великий" },
      formula: "800 n.e.",
      timelineYear: 800,
      visual: gh("162", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Karola Wielkiego: cztery punkty, spokojny władca, bez bitwy",
          ua: "Картка Карла Великого: чотири пункти, спокійний володар, без битви"
        },
        title: { pl: "Dlaczego „Wielki”?", ua: "Чому «Великий»?" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny władca w koronie (muzealna rzeźba lub rysunek), dzień, BEZ miecza w górze i BEZ pola bitwy. Cztery punkty PL: „kto — Karol Wielki, syn Pepina”; „skąd — państwo Franków, stolica Akwizgran”; „lata — panował ok. 768–814”; „wsławił się — wielkie państwo, szkoły, cesarz od 800”. Tytuł: „przydomek Wielki”. Styl Nowej Ery.",
          ua: "Картка Карла: Ахен; 768–814; держава, школи, імператор від 800. Без битви."
        }
      }),
      text: {
        pl: [
          ["", em("Karol Wielki"), " — syn Pepina, panował ok. 768–814. Poszerzył państwo Franków: prawie cała Europa Zachodnia. Stolica: ", em("Akwizgran"), ". Na osi jego data: ", em("800"), " — koronacja cesarska (następny ekran)."],
          ["Przydomek ", em("Wielki"), " za rządy, podboje i opiekę nad nauką — nie tylko za wzrost. KN: dlaczego „Wielki”."]
        ],
        ua: [
          ["", em("Карл Великий"), " — син Піпіна, правив бл. 768–814. Розширив державу франків: майже вся Західна Європа. Столиця: ", em("Ахен"), ". На осі його дата: ", em("800"), " — імператорська коронація (наступний екран)."],
          ["Прізвисько ", em("Великий"), " за правління, завоювання і опіку над наукою — не лише за зріст. KN: чому «Великий»."]
        ]
      },
      task: {
        id: "h19-wielki",
        type: "true-false",
        level: "A",
        question: {
          pl: "Karol Wielki dostał przydomek za wielkie państwo, rządy i rozwój kultury — prawda czy fałsz?",
          ua: "Карл Великий дістав прізвисько за велику державу, правління і розвиток культури — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie myl z Ottonem (962) ani z Chlodwigiem.",
          ua: "Не плутай з Оттоном (962) і з Хлодвігом."
        },
        explanation: {
          pl: "Prawda. KN: dlaczego Wielki. Szczegóły kultury i 800 — dalej.",
          ua: "Правда. KN: чому Великий. Деталі культури і 800 — далі."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Imperium i marchie", ua: "Імперія і марки" },
      formula: "Akwizgran · Rzym",
      visual: gh("163", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa państwa Karola Wielkiego z Akwizgranem, Rzymem i marchiami",
          ua: "Мапа держави Карла Великого з Ахеном, Римом і марками"
        },
        title: { pl: "Granice broni margrabia", ua: "Кордони боронити маркграф" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Zasięg państwa Franków za Karola Wielkiego: Galia, Germania, północna Italia. Kropki AKWIZGRAN (stolica) i RZYM. Wąskie pasy przy granicy podpis „marchia”; mała etykieta „margrabia — obrona bez czekania na króla”. Tytuł PL: „imperium Karola Wielkiego”. BEZ bitew, BEZ dzisiejszych flag. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа імперії Карла: Ахен, Рим, марки. Без битв."
        }
      }),
      text: {
        pl: [
          ["Żeby chronić rozległe państwo, na granicach utworzono ", em("marchie"), ". Na ich czele stali ", em("margrabiowie"), " — mogli bronić kraju bez czekania na zgodę władcy."],
          ["Dwie kropki do mapy (KN): ", em("Akwizgran"), " i ", em("Rzym"), "."]
        ],
        ua: [
          ["Щоб захистити велику державу, на кордонах створили ", em("марки"), ". На їх чолі стояли ", em("маркграфи"), " — могли боронити край, не чекаючи згоди володаря."],
          ["Дві крапки до мапи (KN): ", em("Ахен"), " і ", em("Рим"), "."]
        ]
      },
      task: {
        id: "h19-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co trzeba wskazać na mapie państwa Karola Wielkiego?",
          ua: "Що треба вказати на мапі держави Карла Великого?"
        },
        options: [
          { id: "a", label: { pl: "zasięg ziem Franków oraz Akwizgran i Rzym; na granicach — marchie z margrabiami", ua: "сягання земель франків та Ахен і Рим; на кордонах — марки з маркграфами" } },
          { id: "b", label: { pl: "tylko Mekkę i Medynę", ua: "лише Мекку і Медину" } },
          { id: "c", label: { pl: "tylko Konstantynopol i Bosfor", ua: "лише Константинополь і Босфор" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: mapa Akwizgran + Rzym. Nie lekcja 17 i nie 18.",
          ua: "KN: мапа Ахен + Рим. Не урок 17 і не 18."
        },
        explanation: {
          pl: "Margrabia ma niezależność wojskową na granicy — stąd później silni możnowładcy.",
          ua: "Маркграф має військову незалежність на кордоні — звідси пізніше сильні можновладці."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Szkoły i pismo", ua: "Школи і письмо" },
      formula: "missi dominici · minuskuła",
      visual: gh("164", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkoła przy klasztorze, posłańcy króla i wyraźne pismo minuskuły",
          ua: "Школа при монастирі, посланці короля і чітке письмо мінускула"
        },
        title: { pl: "Kultura po zapaści Zachodu", ua: "Культура після занепаду Заходу" },
        prompt: {
          pl: "Szkolny slajd 16:9, trzy pola. 1) klasztorna szkoła: ława, księga, uczniowie piszą — podpis „szkoły przy kościołach: łacina i Biblia”. 2) dwaj jeźdźcy spokojnie na drodze, podpis „missi dominici — posłańcy króla kontrolują urzędników”. 3) duża litera minuskuły karolińskiej (wyraźne, okrągłe pismo), podpis „minuskuła karolińska”. BEZ kary cielesnej, BEZ bitwy. Tytuł: „Karol dbał o naukę, choć sam pisał słabo”. Styl Nowej Ery.",
          ua: "Три поля: школа, посланці короля, каролінгський мінускул. Без покарання."
        }
      }),
      text: {
        pl: [
          ["Po upadku Rzymu na zachodzie nauka osłabła. Karol — choć sam mało pisał — zakładał szkoły przy kościołach i klasztorach: czytanie, pisanie po ", em("łacinie"), ", Biblia."],
          ["", em("Missi dominici"), " jeździli po kraju i sprawdzali urzędników. Wyraźne pismo — ", em("minuskuła karolińska"), " — łatwiej było czytać. KN: kultura i nauka."]
        ],
        ua: [
          ["Після падіння Риму на заході наука ослабла. Карл — хоч сам мало писав — закладав школи при церквах і монастирях: читання, письмо ", em("латиною"), ", Біблія."],
          ["", em("Missi dominici"), " їздили країною і перевіряли урядників. Чітке письмо — ", em("каролінгський мінускул"), " — було легше читати. KN: культура і наука."]
        ]
      },
      task: {
        id: "h19-kultura",
        type: "true-false",
        level: "B",
        question: {
          pl: "Za Karola Wielkiego powstawały szkoły przy kościołach, a missi dominici kontrolowali urzędników — prawda czy fałsz?",
          ua: "За Карла Великого поставали школи при церквах, а missi dominici контролювали урядників — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie „Karol zlikwidował szkoły”. Wręcz przeciwnie.",
          ua: "Не «Карл ліквідував школи». Якраз навпаки."
        },
        explanation: {
          pl: "Prawda. KN: rozwój kultury i nauki. Minuskuła = czytelne litery, nie „tajny kod”.",
          ua: "Правда. KN: розвиток культури і науки. Мінускул = чіткі літери, не «таємний код»."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Koronacja — rok 800", ua: "Коронація — рік 800" },
      formula: "800 n.e.",
      timelineYear: 800,
      visual: gh("165", {
        kind: "image-placeholder",
        alt: {
          pl: "Papież kładzie koronę na głowę Karola w kościele w Rzymie, bez wojska",
          ua: "Папа кладе корону на голову Карла в церкві в Римі, без війська"
        },
        title: { pl: "Sojusz króla i papieża", ua: "Союз короля і папи" },
        prompt: {
          pl: "Szkolny slajd 16:9. Wnętrze kościoła w Rzymie, dzień. Papież stoi i kładzie koronę na głowę klęczącego lub stojącego Karola — spokój, BEZ tłumu żołnierzy, BEZ mieczy. Data wielka: 800. Podpis PL: „koronacja cesarska w Rzymie”. Etykieta: „cesarz + Kościół wspierają się nawzajem”. Styl Nowej Ery.",
          ua: "Рим, 800: папа коронує Карла. Без війська."
        }
      }),
      text: {
        pl: [
          ["W ", em("800"), " roku w ", em("Rzymie"), " papież koronował Karola na ", em("cesarza"), ". To sojusz państwa Franków i Kościoła: obie strony dawały sobie wsparcie."],
          ["Tytuł cesarski znaczył: Karol stoi wyżej niż zwykły król. Na osi ta data jest nowa."]
        ],
        ua: [
          ["Року ", em("800"), " у ", em("Римі"), " папа коронував Карла на ", em("імператора"), ". Це союз держави франків і Церкви: обидві сторони давали собі підтримку."],
          ["Титул імператора значив: Карл стоїть вище за звичайного короля. На осі ця дата нова."]
        ]
      },
      task: {
        id: "h19-800",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co wydarzyło się w 800 n.e.?",
          ua: "Що сталося 800 н.е.?"
        },
        options: [
          { id: "a", label: { pl: "papież koronował Karola Wielkiego na cesarza w Rzymie", ua: "папа коронував Карла Великого на імператора в Римі" } },
          { id: "b", label: { pl: "hidżra — ucieczka Mahometa do Medyny", ua: "хіджра — втеча Мухаммада до Медини" } },
          { id: "c", label: { pl: "upadek Konstantynopola", ua: "падіння Константинополя" } }
        ],
        answer: "a",
        hint: {
          pl: "Na osi 800 stoi po hidżrze (622), przed Verdun (843).",
          ua: "На осі 800 стоїть після хіджри (622), перед Верденом (843)."
        },
        explanation: {
          pl: "622 = lekcja 18. 1453 = lekcja 17. 800 = KN, oś.",
          ua: "622 = урок 18. 1453 = урок 17. 800 = KN, вісь."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Układ w Verdun — 843", ua: "Угода в Вердені — 843" },
      formula: "843 n.e.",
      timelineYear: 843,
      visual: gh("166", {
        kind: "map-placeholder",
        alt: {
          pl: "Trzy kolory po Verdun: zachód Karola Łysego, środek Lotara, wschód Ludwika",
          ua: "Три кольори після Вердена: захід Карла Лисого, середина Лотара, схід Людовіка"
        },
        title: { pl: "Trzej wnukowie, trzy królestwa", ua: "Троє онуків, три королівства" },
        prompt: {
          pl: "Szkolna mapa 16:9, atlas 5 klasy. Podział 843. RÓŻOWY zachód: państwo Karola Łysego (Paryż, Orlean) → przyszła Francja. ŻÓŁTY środek: państwo Lotara (Akwizgran, Verdun, Rzym, Italia) — cesarz. NIEBIESKI wschód: państwo Ludwika Niemieckiego (Hamburg, Ratyzbona) → przyszłe Niemcy. Ikona budynku przy Verdun: „układ 843”. Tytuł PL: „traktat w Verdun (czytaj: werdę)”. Legenda trzech barw. BEZ armii. Róża wiatrów. Styl Nowej Ery.",
          ua: "Три кольори 843: Карл Лисий / Лотар / Людовік Німецький. Верден позначений."
        }
      }),
      text: {
        pl: [
          ["Po śmierci Karola wnukowie walczyli o władzę. ", em("Możnowładcy"), " robili dziedziczne księstwa. W ", em("843"), " w ", em("Verdun"), " (czytaj: werdę) podzielili cesarstwo na trzy części."],
          ["", em("Lotar"), " — środek i tytuł cesarza (Italia aż po Morze Północne). ", em("Ludwik Niemiecki"), " — wschód → Niemcy. ", em("Karol Łysy"), " — zachód → Francja. Środek później się rozsypał; z południa wyrosły Włochy."]
        ],
        ua: [
          ["Після смерті Карла онуки билися за владу. ", em("Можновладці"), " робили спадкові князівства. Року ", em("843"), " у ", em("Вердені"), " поділили імперію на три частини."],
          ["", em("Лотар"), " — середина і титул імператора (Італія аж до Північного моря). ", em("Людовік Німецький"), " — схід → Німеччина. ", em("Карл Лисий"), " — захід → Франція. Середина пізніше розсипалася; з півдня виросла Італія."]
        ]
      },
      task: {
        id: "h19-843",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Dlaczego zawarto układ w Verdun i co z niego wynikło?",
          ua: "Чому уклали угоду в Вердені і що з неї вийшло?"
        },
        options: [
          { id: "a", label: { pl: "wnukowie walczyli o władzę, a ludy mówiły różnymi językami; 843 podzielił cesarstwo — stąd m.in. Francja, Niemcy i Włochy", ua: "онуки билися за владу, а народи говорили різними мовами; 843 поділив імперію — звідси зокрема Франція, Німеччина і Італія" } },
          { id: "b", label: { pl: "Mahomet podzielił Europę na kalifaty w 622", ua: "Мухаммад поділив Європу на халіфати 622 року" } },
          { id: "c", label: { pl: "cesarz Justynian oddał Galię Persom", ua: "імператор Юстиніан віддав Галлію персам" } }
        ],
        answer: "a",
        hint: {
          pl: "Cel lekcji: dlaczego nowe państwa. Trzej bracia, nie kalifowie.",
          ua: "Мета уроку: чому нові держави. Троє братів, не халіфи."
        },
        explanation: {
          pl: "KN: przyczyny i skutki Verdun. Tytuł cesarza szybko stracił znaczenie; w 888 linia Karolingów-cesarzy się urwała.",
          ua: "KN: причини і наслідки Вердена. Титул імператора швидко втратив значення; 888 лінія Каролінгів-імператорів обірвалася."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Otton I", ua: "Оттон I" },
      formula: "936–973",
      visual: gh("167", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Ottona I: cztery punkty, kamienna rzeźba w koronie, bez bitwy",
          ua: "Картка Оттона I: чотири пункти, кам’яна різьба в короні, без битви"
        },
        title: { pl: "Król Niemiec, potem cesarz", ua: "Король Німеччини, потім імператор" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojna kamienna rzeźba władcy w koronie (jak w podręczniku, XIII w.), dzień. Cztery punkty PL: „kto — Otton I”; „skąd — Królestwo Niemiec (wschodni Frankowie)\"; „lata — 912–973, król od 936”; „wsławił się — zjednoczył księstwa, w 955 pokonał Węgrów, w 962 cesarz”. BEZ pola bitwy i BEZ więzienia papieża. Styl Nowej Ery.",
          ua: "Картка Оттона: Німеччина; 912–973; 955; 962 імператор. Без битви."
        }
      }),
      text: {
        pl: [
          ["Wschód po Verdun rozpadł się na księstwa. Od 911 króla wybierali ", em("możnowładcy"), " — tak powstawała ", em("Rzesza Niemiecka"), "."],
          ["", em("Otton I"), " (król od 936) złamał opór panów (urzędy dawał duchownym), w 955 pokonał Węgrów i dostał przydomek Wielki. KN: postać Ottona."]
        ],
        ua: [
          ["Схід після Вердена розпавсь на князівства. Від 911 короля обирали ", em("можновладці"), " — так поставала ", em("Німецька імперія"), "."],
          ["", em("Оттон I"), " (король від 936) зламав опір панів (уряди давав духовним), 955 переміг угрів і дістав прізвисько Великий. KN: постать Оттона."]
        ]
      },
      task: {
        id: "h19-otton",
        type: "true-false",
        level: "A",
        question: {
          pl: "Otton I był królem Niemiec, który umocnił władzę i pokonał Węgrów — prawda czy fałsz?",
          ua: "Оттон I був королем Німеччини, який зміцнив владу і переміг угрів — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Nie Karol z 800. Otton = X wiek, Niemcy.",
          ua: "Не Карл з 800. Оттон = X століття, Німеччина."
        },
        explanation: {
          pl: "Prawda. Korona cesarska — następny ekran, rok 962.",
          ua: "Правда. Імператорська корона — наступний екран, рік 962."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzesza Niemiecka — 962", ua: "Німецька імперія — 962" },
      formula: "962 n.e.",
      timelineYear: 962,
      visual: gh("168", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa cesarstwa Ottona: Niemcy, północne Włochy, Akwizgran i Rzym",
          ua: "Мапа імперії Оттона: Німеччина, північна Італія, Ахен і Рим"
        },
        title: { pl: "Korona cesarska u Niemców", ua: "Імператорська корона в німців" },
        prompt: {
          pl: "Szkolna mapa 16:9. Obrys „cesarstwo Ottona I po 962”: Królestwo Niemiec, północna Italia, Czechy. Kropki AKWIZGRAN i RZYM. Tytuł PL: „Święte Cesarstwo Rzymskie / Rzesza Niemiecka”. Legenda: ziemie cesarza. Mała linia: „mniejsze niż państwo Karola; władza realna = Niemcy i północne Włochy”. BEZ armii w Rzymie, BEZ rzezi. Róża wiatrów. Styl Nowej Ery.",
          ua: "Мапа 962: Німеччина і північна Італія. Ахен, Рим. Без війська."
        }
      }),
      text: {
        pl: [
          ["W ", em("962"), " papież koronował Ottona na cesarza odnowionego cesarstwa rzymskiego — potem zwano je ", em("Świętym Cesarstwem Rzymskim"), " albo ", em("Rzeszą Niemiecką"), "."],
          ["Korona cesarska została przy władcach niemieckich. Realnie obejmują Niemcy i północne Włochy — nie całą chrześcijańską Europę, choć Otton tak myślał."]
        ],
        ua: [
          ["Року ", em("962"), " папа коронував Оттона на імператора відновленої Римської імперії — потім її звали ", em("Священною Римською імперією"), " або ", em("Німецькою імперією"), "."],
          ["Імператорська корона лишилася у німецьких володарів. Реально це Німеччина і північна Італія — не вся християнська Європа, хоч Оттон так думав."]
        ]
      },
      task: {
        id: "h19-962",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Jak powstała Rzesza Niemiecka i co oznacza rok 962?",
          ua: "Як постала Німецька імперія і що означає рік 962?"
        },
        options: [
          { id: "a", label: { pl: "związek księstw niemieckich; w 962 Otton I został cesarzem — korona cesarska przeszła do władców Niemiec", ua: "союз німецьких князівств; року 962 Оттон I став імператором — корона перейшла до володарів Німеччини" } },
          { id: "b", label: { pl: "w 962 Chlodwig przyjął chrzest w Mekce", ua: "року 962 Хлодвіг прийняв хрещення в Мецці" } },
          { id: "c", label: { pl: "w 962 Turcy zdobyli Konstantynopol", ua: "року 962 турки здобули Константинополь" } }
        ],
        answer: "a",
        hint: {
          pl: "1453 = Turcy. 496 ≈ chrzest Chlodwiga. 962 = Otton cesarzem.",
          ua: "1453 = турки. 496 ≈ хрещення Хлодвіга. 962 = Оттон імператором."
        },
        explanation: {
          pl: "KN: jak powstała Rzesza + data 962 na osi. Następna lekcja: spór papieża z cesarzem.",
          ua: "KN: як постала імперія + дата 962 на осі. Наступний урок: спір папи з імператором."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Frankowie / dynastia — lud Galii / ród, władza z ojca na syna", ua: "франки / династія — люд Галлії / рід, влада від батька до сина" },
        { pl: "majordom — urzędnik dworu; za Merowingów miał realną władzę", ua: "мажордом — урядник двору; за Меровінгів мав реальну владу" },
        { pl: "Karolingowie — dynastia Pepina i Karola Wielkiego", ua: "Каролінги — династія Піпіна і Карла Великого" },
        { pl: "marchia / margrabia — pogranicze / jego obrońca z dużą samodzielnością", ua: "марка / маркграф — прикордоння / його оборонець із великою самостійністю" },
        { pl: "układ w Verdun (843) — podział cesarstwa między trzech wnuków", ua: "угода в Вердені (843) — поділ імперії між трьома онуками" },
        { pl: "możnowładca — bogaty pan z wpływem na rządy", ua: "можновладець — багатий пан із впливом на правління" },
        { pl: "Rzesza Niemiecka — związek księstw; od 962 korona cesarska u Ottona I", ua: "Німецька імперія — союз князівств; від 962 імператорська корона в Оттона I" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Państwo Franków powstało w Mekce w 622. Karol Wielki zlikwidował szkoły i w 1453 koronował się w Atenach. Układ w Verdun (395) oddał całą Europę Justynianowi. Otton I to majordom Merowingów z 476.”",
        ua: "«Держава франків постала в Мецці 622 року. Карл Великий ліквідував школи і 1453 коронувався в Афінах. Угода в Вердені (395) віддала всю Європу Юстиніану. Оттон I — мажордом Меровінгів з 476.»"
      },
      text: {
        pl: [
          "Frankowie = Galia, V w. 622 = hidżra. Karol zakładał szkoły; cesarzem został w 800 w Rzymie. 1453 = Turcy. Verdun = 843, trzej wnukowie. 395 = podział Rzymu. 476 = upadek Zachodu. Otton = X wiek, 962."
        ],
        ua: [
          "Франки = Галлія, V ст. 622 = хіджра. Карл закладав школи; імператором став 800 у Римі. 1453 = турки. Верден = 843, троє онуків. 395 = поділ Риму. 476 = падіння Заходу. Оттон = X ст., 962."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach, kim był Karol Wielki i co stało się w 800. Potem wybierz najlepsze zdanie.",
        ua: "Скажи в 3–4 реченнях, ким був Карл Великий і що сталося 800 року. Потім вибери найкраще речення."
      },
      text: {
        pl: [
          "Podpowiedź: syn Pepina, wielkie państwo, szkoły; papież, Rzym, cesarz."
        ],
        ua: [
          "Підказка: син Піпіна, велика держава, школи; папа, Рим, імператор."
        ]
      },
      task: {
        id: "h19-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje Karola Wielkiego i rok 800?",
          ua: "Яке речення найкраще охоплює Карла Великого і рік 800?"
        },
        options: [
          { id: "a", label: { pl: "Karol, syn Pepina, zbudował wielkie państwo Franków i dbał o szkoły; w 800 papież koronował go na cesarza w Rzymie", ua: "Карл, син Піпіна, збудував велику державу франків і дбав про школи; року 800 папа коронував його на імператора в Римі" } },
          { id: "b", label: { pl: "Karol Wielki ogłosił islam w 622 i spisał Koran", ua: "Карл Великий проголосив іслам 622 року і записав Коран" } },
          { id: "c", label: { pl: "Karol Wielki zdobył Konstantynopol w 1453", ua: "Карл Великий здобув Константинополь 1453 року" } }
        ],
        answer: "a",
        hint: {
          pl: "Potrafię: dokonania + data koronacji.",
          ua: "Вмію: звершення + дата коронації."
        },
        explanation: {
          pl: "622 i Koran = lekcja 18. 1453 = lekcja 17.",
          ua: "622 і Коран = урок 18. 1453 = урок 17."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Patron Europy i słowo „król”", ua: "Покровитель Європи і слово «король»" },
      task: {
        id: "h19-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Dlaczego Karola Wielkiego uważa się za patrona zjednoczonej Europy, a polskie słowo „król” wiąże się z jego imieniem?",
          ua: "Чому Карла Великого вважають покровителем об’єднаної Європи, а польське слово «król» в’яжеться з його ім’ям?"
        },
        options: [
          { id: "a", label: { pl: "jego szkoły, pismo i sojusz z Kościołem stały się wzorem dla Europy; imię Karl weszło do słów na „króla” (pol. król)", ua: "його школи, письмо і союз із Церквою стали взірцем для Європи; ім’я Karl увійшло в слова на «короля» (пол. król)" } },
          { id: "b", label: { pl: "bo w 1950 sam ustanowił Unię Europejską w Brukseli", ua: "бо 1950 року сам заснував Європейський Союз у Брюсселі" } },
          { id: "c", label: { pl: "bo słowo król pochodzi od Allaha", ua: "бо слово król походить від Аллаха" } }
        ],
        answer: "a",
        hint: {
          pl: "KN ponadpodstawowe. Nagroda Karola Wielkiego (od 1950) jest skutkiem tej pamięci — nie przyczyną średniowiecza.",
          ua: "KN понадбазове. Премія Карла Великого (від 1950) — наслідок цієї пам’яті, не причина середньовіччя."
        },
        explanation: {
          pl: "Wzorce karolińskie (szkoła, pismo, sztuka) rozeszły się po Europie. Karl → król / король. Unia to XX wiek.",
          ua: "Взірці Каролінгів (школа, письмо, мистецтво) розійшлися Європою. Karl → król / король. Союз — XX століття."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h19-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Dopisz: 800 · 843 · 962",
          ua: "Добери: 800 · 843 · 962"
        },
        options: [
          { id: "a", label: { pl: "800 — Karol cesarzem; 843 — Verdun, trzy królestwa; 962 — Otton I cesarzem Rzeszy", ua: "800 — Карл імператором; 843 — Верден, три королівства; 962 — Оттон I імператором Німецької імперії" } },
          { id: "b", label: { pl: "800 — hidżra; 843 — Wezuwiusz; 962 — 395", ua: "800 — хіджра; 843 — Везувій; 962 — 395" } },
          { id: "c", label: { pl: "800 — 476; 843 — 622; 962 — 1453", ua: "800 — 476; 843 — 622; 962 — 1453" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy daty z osi tej lekcji.",
          ua: "Три дати з осі цього уроку."
        },
        explanation: {
          pl: "To KN. 622, 476, 1453, 395 — inne lekcje.",
          ua: "Це KN. 622, 476, 1453, 395 — інші уроки."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W 800 roku w Rzymie papież koronował Karola Wielkiego na cesarza. To sojusz państwa Franków i Kościoła.",
          ["800", "Karola Wielkiego"],
          "Року 800 у Римі папа коронував Карла Великого на імператора. Це союз держави франків і Церкви.",
          ["800", "Карла Великого"]
        ),
        mark(
          "W 843 roku wnukowie Karola Wielkiego podzielili imperium między siebie. Z powstałych państw wyłoniły się w przyszłości Niemcy, Francja i Włochy.",
          ["843", "Niemcy, Francja i Włochy"],
          "Року 843 онуки Карла Великого поділили імперію між собою. З посталих держав згодом виросли Німеччина, Франція і Італія.",
          ["843", "Німеччина, Франція і Італія"]
        ),
        mark(
          "Od 962 roku król Niemiec Otton I nosił tytuł cesarza rzymskiego. Od tego czasu korona cesarska należała do władców Rzeszy Niemieckiej.",
          ["962", "Otton I", "Rzeszy Niemieckiej"],
          "Від 962 року король Німеччини Оттон I носив титул римського імператора. Відтоді імператорська корона належала володарям Німецької імперії.",
          ["962", "Оттон I", "Німецької імперії"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: konflikt papiestwa z cesarstwem — kto ma większą władzę: papież czy cesarz.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: конфлікт папства з імперією — хто має більшу владу: папа чи імператор.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "pi2CMxa8-OY",
        title: {
          pl: "Krótkie Lekcje: Nowe państwa w Europie",
          ua: "Короткі уроки: Нові держави в Європі"
        }
      }
    }
  ]
};
