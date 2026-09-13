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
      heading: { pl: "Sztuka średniowiecza", ua: "Мистецтво середньовіччя" },
      formula: "V–XV w.",
      text: {
        pl: [
          "Z lekcji 13 i 17 znasz daty 476 i 1453. Średniowiecze w szkole: od V do XV wieku. Dziś sztuka tego czasu: kościół uczy obrazem.",
          "Oś pod ekranem zostaje przy krucjatach — 476 i 1453 już tam były. W zeszycie możesz narysować własną oś od V do XV w."
        ],
        ua: [
          "З уроків 13 і 17 знаєш дати 476 і 1453. Середньовіччя в школі: від V до XV століття. Сьогодні мистецтво цього часу: церква вчить образом.",
          "Вісь під екраном лишається при походах — 476 і 1453 уже там були. У зошиті можеш накреслити власну вісь від V до XV ст."
        ]
      },
      task: {
        id: "h26-okres",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Średniowiecze trwało od ______ wieku do ______ wieku (476–1453).",
          ua: "Середньовіччя тривало від ______ століття до ______ століття (476–1453)."
        },
        options: [
          { id: "a", label: { pl: "od V wieku do XV wieku", ua: "від V століття до XV століття" } },
          { id: "b", label: { pl: "od I wieku do III wieku (tylko Jezus z lekcji 16)", ua: "від I століття до III століття (лише Ісус з уроку 16)" } },
          { id: "c", label: { pl: "tylko rok 1095 z lekcji 21", ua: "лише 1095 рік з уроку 21" } }
        ],
        answer: "a",
        hint: {
          pl: "Karta nauczycielki: V wiek i XV wiek; daty 476 i 1453 z wcześniejszych lekcji.",
          ua: "Картка вчительки: V і XV століття; дати 476 і 1453 з попередніх уроків."
        },
        explanation: {
          pl: "Upadek cesarstwa na zachodzie 476; 1453 — Turcy i Konstantynopol (lekcja 17).",
          ua: "Упадок імперії на заході 476; 1453 — турки і Константинополь (урок 17)."
        }
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić funkcję sztuki i Biblię pauperum", ua: "пояснити функцію мистецтва і Біблію пауперум" },
        { pl: "scharakteryzować styl romański (X–XIII w.)", ua: "схарактеризувати романський стиль (X–XIII ст.)" },
        { pl: "scharakteryzować styl gotycki i porównać go z romańskim", ua: "схарактеризувати готичний стиль і порівняти з романським" },
        { pl: "podać przykłady malarstwa, rzeźby i zabytków w Polsce", ua: "навести приклади живопису, різьби і пам’яток у Польщі" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Po co była sztuka?", ua: "Навіщо було мистецтво?" },
      formula: "Biblia pauperum",
      visual: gh("216", {
        kind: "image-placeholder",
        alt: {
          pl: "Ludzie w kościele patrzą na malowidła i rzeźby, które uczą historii biblijnych",
          ua: "Люди в церкві дивляться на розписи і різьбу, які вчать біблійних історій"
        },
        title: { pl: "Uczy tych, którzy nie czytają", ua: "Вчить тих, хто не читає" },
        prompt: {
          pl: "Szkolny slajd 16:9, dzień. Wnętrze kościoła, spokojni ludzie patrzą na malowidła i rzeźby świętych w szatach. Napis: „Biblia pauperum — Biblia ubogich”. BEZ Sądu Ostatecznego z torturami, BEZ nagości, BEZ kopii miniatury z filmu. Styl Nowej Ery.",
          ua: "Церква вчить образом. Без пекла і без наготи."
        }
      }),
      text: {
        pl: [
          ["Sztuka była mocno związana z ", em("chrześcijaństwem"), ". Miała zachwycać, głosić chwałę Boga i ", em("uczyć"), ": przybliżać Biblię i zasady wiary. Tematy: historie i postacie z Pisma, żywoty świętych."],
          ["", em("Biblia pauperum"), " (Biblia ubogich) to sztuka obrazem dla tych, którzy nie czytali. Autorzy często ", em("anonimowi"), " — ku chwale Boga, nie własnej sławy."]
        ],
        ua: [
          ["Мистецтво було тісно пов’язане з ", em("християнством"), ". Мало захоплювати, славити Бога і ", em("вчити"), ": наближати Біблію і засади віри. Теми: історії й постаті з Писання, житія святих."],
          ["", em("Biblia pauperum"), " (Біблія вбогих) — мистецтво образом для тих, хто не читав. Автори часто ", em("анонімні"), " — на славу Бога, не свою."]
        ]
      },
      task: {
        id: "h26-biblia",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Czym była Biblia pauperum w tej lekcji?",
          ua: "Що таке Biblia pauperum на цьому уроці?"
        },
        options: [
          { id: "a", label: { pl: "sztuka (malowidła, rzeźba), która uczyła wiary ludzi nieumiejących czytać", ua: "мистецтво (розписи, різьба), яке вчило віри людей, що не вміли читати" } },
          { id: "b", label: { pl: "dokument lokacyjny z lekcji 24", ua: "локаційний документ з уроку 24" } },
          { id: "c", label: { pl: "kodeks honorowy rycerza z lekcji 23", ua: "кодекс честі лицаря з уроку 23" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: znaczenie Biblii pauperum. Łacina: Biblia ubogich.",
          ua: "KN: значення Біблії пауперум. Латина: Біблія вбогих."
        },
        explanation: {
          pl: "Prezentacja nauczycielki + KN. Nie mylić z lokacją i kodeksem.",
          ua: "Презентація вчительки + KN. Не плутати з локацією і кодексом."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Styl romański", ua: "Романський стиль" },
      formula: "X–XIII w.",
      visual: gh("217", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat kościoła romańskiego: grube mury, małe okna, apsyda, wieża, portal półokrągły",
          ua: "Схема романської церкви: товсті мури, малі вікна, апсида, вежа, півкруглий портал"
        },
        title: { pl: "Ciężki kamień, małe światło", ua: "Важкий камінь, мале світло" },
        prompt: {
          pl: "Szkolny schemat 16:9, dzień. Kościół jak Tum (dwie wieże, apsyda), ALE rysunek szkolny, NIE zdjęcie. Podpisy PL: grube mury, małe okna, apsyda, wieża, portal (łuk półokrągły), kamień. Tytuł: „styl romański, X–XIII w.”. Styl Nowej Ery.",
          ua: "Романська церква-схема. Товсті мури, малі вікна, півкругла арка. Не фото."
        }
      }),
      text: {
        pl: [
          ["Od ", em("X wieku"), " (w Europie do XIII w.) — ", em("styl romański"), ": masywne świątynie, ", em("grube mury"), ", ", em("niewielkie okna"), ", ", em("półokrągłe łuki"), ", budulec: ", em("kamień"), "."],
          "Przykład w Polsce: kościół w Tumie pod Łęczycą. Najokazalsze budynki to kościoły i klasztory."
        ],
        ua: [
          ["Від ", em("X століття"), " (в Європі до XIII ст.) — ", em("романський стиль"), ": масивні храми, ", em("товсті мури"), ", ", em("невеликі вікна"), ", ", em("півкруглі арки"), ", матеріал: ", em("камінь"), "."],
          "Приклад у Польщі: церква в Тумі біля Ленчиці. Найошатніші будівлі — церкви і монастирі."
        ]
      },
      task: {
        id: "h26-rom",
        type: "true-false",
        level: "A",
        question: {
          pl: "Kościół romański ma grube mury, małe okna i łuki półokrągłe — prawda czy fałsz?",
          ua: "Романська церква має товсті мури, малі вікна і півкруглі арки — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Karta: masywne świątynie, kamień. Nie myl z gotycką strzelistością.",
          ua: "Картка: масивні храми, камінь. Не плутай із готичною стрімкістю."
        },
        explanation: {
          pl: "Prawda. KN: scharakteryzować styl romański.",
          ua: "Правда. KN: схарактеризувати романський стиль."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Styl gotycki", ua: "Готичний стиль" },
      formula: "XIII–XV w.",
      visual: gh("218", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat katedry gotyckiej: wieże, rozeta, witraże, łuki oporowe, portal ostry",
          ua: "Схема готичного собору: вежі, розета, вітражі, контрфорсні арки, гострий портал"
        },
        title: { pl: "W górę, dużo światła", ua: "Вгору, багато світла" },
        prompt: {
          pl: "Szkolny schemat 16:9 katedry gotyckiej (typ Notre Dame), NIE zdjęcie Paryża. Podpisy PL: wieże, rozeta, duże okna z witrażami, łuki oporowe, portal (łuk ostry), sklepienie. Tytuł: „styl gotycki, XIII–XV w.”. Dzień. Styl Nowej Ery.",
          ua: "Готика-схема: вітражі, розета, контрфорси, гостра арка. Не фото Парижа."
        }
      }),
      text: {
        pl: [
          ["Od XIII do XV w. (w Europie od połowy XII; w Polsce od XIV w.) — ", em("styl gotycki"), ": ", em("wysokie, strzeliste"), " świątynie, ", em("kamień i cegła"), ", ", em("duże okna z witrażami"), ", ", em("ostre łuki"), "."],
          "Przykład: katedra Notre Dame we Francji. W miastach gotyk też w ratuszach i sukiennicach (lekcja 24)."
        ],
        ua: [
          ["Від XIII до XV ст. (в Європі від середини XII; у Польщі від XIV ст.) — ", em("готичний стиль"), ": ", em("високі, стрімкі"), " храми, ", em("камінь і цегла"), ", ", em("великі вікна з вітражами"), ", ", em("гострі арки"), "."],
          "Приклад: собор Нотр-Дам у Франції. У містах готика також у ратушах і суконницях (урок 24)."
        ]
      },
      task: {
        id: "h26-got",
        type: "true-false",
        level: "A",
        question: {
          pl: "Gotyk to m.in. strzeliste budowle, duże okna z witrażami i ostrołuki — prawda czy fałsz?",
          ua: "Готика — зокрема стрімкі будівлі, великі вікна з вітражами і гострі арки — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Karta nauczycielki. Cegła jest ważna w Polsce.",
          ua: "Картка вчительки. Цегла важлива в Польщі."
        },
        explanation: {
          pl: "Prawda. KN: scharakteryzować gotyk.",
          ua: "Правда. KN: схарактеризувати готику."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Porównaj dwa style", ua: "Порівняй два стилі" },
      formula: "romański ≠ gotyk",
      visual: gh("219", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa przekroje kościoła: romański z małym oknem i gotycki z wielkim witrażem",
          ua: "Два розрізи церкви: романський із малим вікном і готичний із великим вітражем"
        },
        title: { pl: "Ciężki i jasny obok siebie", ua: "Важкий і світлий поряд" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwa przekroje. LEWA romański: gruba ściana, małe okno, sklepienie kolebkowe. PRAWA gotyk: cieńsza ściana, wielki witraż, sklepienie żebrowe. Krótka tabela PL. BEZ zdjęć. Styl Nowej Ery.",
          ua: "Два розрізи. Романський важкий, готика світла."
        }
      }),
      text: {
        pl: [
          ["Romański: masyw, małe okna, półkole. Gotyk: strzelistość, duże okna, ostrołuk, cieńsze mury."],
          "To KN: porównać style. Tabelę z podręcznika (s. 154–155) możesz przepisać do zeszytu — tu zapamiętaj różnicę światła i ciężaru."
        ],
        ua: [
          ["Романський: масив, малі вікна, півколо. Готика: стрімкість, великі вікна, гостра арка, тонші мури."],
          "Це KN: порівняти стилі. Таблицю з підручника (с. 154–155) можеш переписати в зошит — тут запам’ятай різницю світла і ваги."
        ]
      },
      task: {
        id: "h26-porown",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Która para cech jest poprawna?",
          ua: "Яка пара рис правильна?"
        },
        options: [
          { id: "a", label: { pl: "romański: grube mury i małe okna; gotyk: strzelisty i witraże", ua: "романський: товсті мури і малі вікна; готика: стрімкий і вітражі" } },
          { id: "b", label: { pl: "romański: tylko cegła i rozeta; gotyk: tylko ziemianka", ua: "романський: лише цегла і розета; готика: лише землянка" } },
          { id: "c", label: { pl: "oba style to meczet z lekcji 18", ua: "обидва стилі — мечеть з уроку 18" } }
        ],
        answer: "a",
        hint: {
          pl: "Podręcznik s. 154–155 i karta: tabela dwóch kolumn.",
          ua: "Підручник с. 154–155 і картка: таблиця двох колонок."
        },
        explanation: {
          pl: "KN: porównać. Meczet = inna lekcja.",
          ua: "KN: порівняти. Мечеть = інший урок."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Portal, sklepienie, witraż", ua: "Портал, склепіння, вітраж" },
      formula: "słownik bryły",
      visual: gh("220", {
        kind: "image-placeholder",
        alt: {
          pl: "Sześć prostych rysunków: portal, sklepienie, witraż, rozeta, łuk oporowy, przypora",
          ua: "Шість простих рисунків: портал, склепіння, вітраж, розета, контрфорсна арка, контрфорс"
        },
        title: { pl: "Słowa do kościoła", ua: "Слова до церкви" },
        prompt: {
          pl: "Szkolny slajd 16:9, sześć ikon z podpisami PL: portal, sklepienie, witraż, rozeta, łuk oporowy, przypora. Proste kreski, nie Wiki. Dzień. Styl Nowej Ery.",
          ua: "Шість термінів-іконок. Не фото Вікіпедії."
        }
      }),
      text: {
        pl: [
          ["", em("Portal"), " — ozdobne wejście. ", em("Sklepienie"), " — strop łukowy. ", em("Witraż"), " — obraz ze szkła w oknie. ", em("Rozeta"), " — okrągłe okno."],
          ["", em("Łuki oporowe"), " i ", em("przypory"), " podpierają wysokie ściany gotyku od zewnątrz — dzięki nim mury mogą być cieńsze, a okna większe."]
        ],
        ua: [
          ["", em("Портал"), " — оздобний вхід. ", em("Склепіння"), " — лучкове перекриття. ", em("Вітраж"), " — образ зі скла у вікні. ", em("Розета"), " — кругле вікно."],
          ["", em("Контрфорсні арки"), " (łuki oporowe) і ", em("контрфорси"), " (przypory) підпирають високі стіни готики ззовні — тому мури тонші, а вікна більші."]
        ]
      },
      task: {
        id: "h26-term",
        type: "true-false",
        level: "B",
        question: {
          pl: "Witraż to obraz ze szkła w oknie, a rozeta to okrągłe okno — prawda czy fałsz?",
          ua: "Вітраж — образ зі скла у вікні, а розета — кругле вікно — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: witraże, rozeta, portal, sklepienie, łuki oporowe, przypory.",
          ua: "KN: вітражі, розета, портал, склепіння, контрфорсні арки, контрфорси."
        },
        explanation: {
          pl: "Prawda. Inicjał z lekcji 25 to litera w księdze, nie okno.",
          ua: "Правда. Ініціал з уроку 25 — літера в книзі, не вікно."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Malarstwo i miniatura", ua: "Живопис і мініатюра" },
      formula: "inicjał",
      visual: gh("221", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolna miniatura i wielki inicjał na karcie księgi, postacie w szatach",
          ua: "Шкільна мініатюра і великий ініціал на аркуші книги, постаті в шатах"
        },
        title: { pl: "Obraz w księdze, nie foto kodeksu", ua: "Образ у книзі, не фото кодексу" },
        prompt: {
          pl: "Szkolny rysunek 16:9 otwartej księgi: duży INICJAŁ i mała MINIATURA (święty w szacie, złote tło). BEZ zdjęcia prawdziwego kodeksu, BEZ nagości, BEZ kopii kadru 13. Podpis: „malarstwo w księdze”. Styl Nowej Ery.",
          ua: "Ініціал і мініатюра. Не фото кодексу."
        }
      }),
      text: {
        pl: [
          ["Malarstwo: sceny biblijne, święci. Proste formy, często ", em("bez perspektywy"), ", dzieł nie podpisywano. Bywały malowidła ścienne; ikony znasz z lekcji o Bizancjum — tu nie powtarzamy rozdziału."],
          ["W księgach: ", em("miniatury"), " i ", em("inicjał"), " (wielka ozdobna litera). Kopiści z lekcji 25 malowali je w skryptorium."]
        ],
        ua: [
          ["Живопис: біблійні сцени, святі. Прості форми, часто ", em("без перспективи"), ", твори не підписували. Бували стінописи; ікони знаєш з уроку про Візантію — тут розділ не повторюємо."],
          ["У книгах: ", em("мініатюри"), " і ", em("ініціал"), " (велика оздобна літера). Переписувачі з уроку 25 малювали їх у скрипторії."]
        ]
      },
      task: {
        id: "h26-mal",
        type: "true-false",
        level: "B",
        question: {
          pl: "Większość dzieł przedstawiała motywy religijne, a twórcy często pozostawali anonimowi — prawda czy fałsz?",
          ua: "Більшість творів мала релігійні мотиви, а творці часто лишалися анонімними — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Prezentacja: ku chwale Boga. Film Zapamiętaj: święci i Biblia.",
          ua: "Презентація: на славу Бога. Фільм «Запам’ятай»: святі і Біблія."
        },
        explanation: {
          pl: "Prawda. KN: malarstwo i miniatury.",
          ua: "Правда. KN: живопис і мініатюри."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Rzeźba i ołtarz", ua: "Різьба і вівтар" },
      formula: "ołtarz",
      visual: gh("222", {
        kind: "image-placeholder",
        alt: {
          pl: "Szkolny rysunek ołtarza szafiastego ze skrzydłami i ubranymi postaciami",
          ua: "Шкільний рисунок стулчастого вівтаря з крилами і вбраними постатями"
        },
        title: { pl: "Szafa ze świętymi, nie kopia Stwosza", ua: "Шафа зі святими, не копія Ствоша" },
        prompt: {
          pl: "Szkolny rysunek 16:9 ołtarza szafiastego (skrzydła otwarte), złote tło, postacie W SZATACH. BEZ zdjęcia Ołtarza Wita Stwosza, BEZ kopii ołtarza z Torunia. Podpis: „rzeźba w kościele”. Styl Nowej Ery.",
          ua: "Вівтар-схема. Постаті в шатах. Не фото Кракова."
        }
      }),
      text: {
        pl: [
          ["Rzeźba zdobiła ", em("portale"), " i wnętrza. W gotyku stawiano wielkie ", em("ołtarze"), " szafiaste. W Krakowie słynie ołtarz ", em("Wita Stwosza"), " — nazwisko jako przykład, nie biografia."],
          "Święci w sztuce są w szatach. Sąd Ostateczny bywał tematem — bez tortur na naszym slajdzie."
        ],
        ua: [
          ["Різьба прикрашала ", em("портали"), " і інтер’єри. У готиці ставили великі стулчасті ", em("вівтарі"), ". У Кракові відомий вівтар ", em("Віта Ствоша"), " — прізвище як приклад, не біографія."],
          "Святі в мистецтві в шатах. Страшний суд бував темою — без катувань на нашому слайді."
        ]
      },
      task: {
        id: "h26-rzez",
        type: "true-false",
        level: "B",
        question: {
          pl: "W średniowieczu tworzono m.in. rzeźby i ołtarze o tematyce religijnej — prawda czy fałsz?",
          ua: "У середньовіччі творили зокрема різьбу і вівтарі на релігійні теми — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "KN: rzeźba i malarstwo. Film: ołtarz jako zabytek.",
          ua: "KN: різьба і живопис. Фільм: вівтар як пам’ятка."
        },
        explanation: {
          pl: "Prawda. Złotnictwo (naczynia, relikwiarze) też było — jednym zdaniem, nie osobny rozdział.",
          ua: "Правда. Золотарство (посуд, мощівниці) теж було — одним реченням, не окремий розділ."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zabytki w Polsce", ua: "Пам’ятки в Польщі" },
      formula: "kamień · cegła",
      visual: gh("223", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa polskie przykłady: rotunda romańska i ceglany kościół gotycki",
          ua: "Два польські приклади: романська ротонда і цегляна готична церква"
        },
        title: { pl: "U nas też: okrąg i cegła", ua: "У нас теж: коло і цегла" },
        prompt: {
          pl: "Szkolny slajd 16:9, dwa pola, dzień. LEWA: mała kamienna ROTUNDA z apsydą, podpis „romańska, np. św. Prokopa”. PRAWA: ceglany kościół z szczytami, podpis „gotyk, np. bazylika w Gdańsku”. NIE zdjęcia z filmu/Wiki. Styl Nowej Ery.",
          ua: "Ротонда і цегляна готика. Не фото з фільму."
        }
      }),
      text: {
        pl: [
          ["W Polsce: romańska ", em("rotunda"), " (np. św. Prokopa), kościół w Tumie; gotyk ceglany (np. bazylika Mariacka w Gdańsku), ołtarz Wita Stwosza w Krakowie."],
          "Wiele zabytków zginęło w pożarach i wojnach. Swój lokalny kościół — opowiedz w klasie (KN ponadpodstawowe)."
        ],
        ua: [
          ["У Польщі: романська ", em("ротонда"), " (напр. св. Прокопа), церква в Тумі; цегляна готика (напр. Маріацька базиліка в Гданську), вівтар Віта Ствоша в Кракові."],
          "Багато пам’яток згинуло в пожежах і війнах. Свою місцеву церкву — розкажи в класі (KN понад базове)."
        ]
      },
      task: {
        id: "h26-pl",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Który zestaw to polskie przykłady z tej lekcji?",
          ua: "Який набір — польські приклади з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Tum (romański), rotunda św. Prokopa, gotyk ceglany, ołtarz Wita Stwosza", ua: "Тум (романський), ротонда св. Прокопа, цегляна готика, вівтар Віта Ствоша" } },
          { id: "b", label: { pl: "tylko Piramida Cheopsa i Partenon", ua: "лише піраміда Хеопса і Партенон" } },
          { id: "c", label: { pl: "meczet w Mekce z 622", ua: "мечеть у Мецці 622 року" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: zabytki w Polsce. Notre Dame jest francuskim przykładem gotyku, nie polskim.",
          ua: "KN: пам’ятки в Польщі. Нотр-Дам — французький приклад готики, не польський."
        },
        explanation: {
          pl: "Egipt i Grecja = dział I–II. Islam = lekcja 18.",
          ua: "Єгипет і Греція = розділи I–II. Іслам = урок 18."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Biblia pauperum — Biblia ubogich: sztuka uczy wiary obrazem", ua: "Biblia pauperum — Біблія вбогих: мистецтво вчить віри образом" },
        { pl: "styl romański (X–XIII w.) — masyw, grube mury, małe okna, łuk półokrągły, kamień", ua: "романський стиль (X–XIII ст.) — масив, товсті мури, малі вікна, півкругла арка, камінь" },
        { pl: "styl gotycki (XIII–XV w.) — strzelistość, witraże, ostrołuk, kamień i cegła", ua: "готичний стиль (XIII–XV ст.) — стрімкість, вітражі, гостра арка, камінь і цегла" },
        { pl: "portal, sklepienie, rozeta, witraż, łuki oporowe, przypory — części świątyni", ua: "портал, склепіння, розета, вітраж, контрфорсні арки, контрфорси — частини храму" },
        { pl: "miniatura / inicjał — obrazek i wielka litera w księdze", ua: "мініатюра / ініціал — малюнок і велика літера в книзі" },
        { pl: "apsyda — półokrągłe zakończenie prezbiterium (częste w romanizmie)", ua: "апсида — півкругле завершення пресбітерію (часто в романіці)" }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Biblia pauperum to hołd lenny. Romański kościół ma tylko witraże i cegłę. Gotyk to grube mury bez okien. Inicjał to ostroga rycerza. Wit Stwosz zbudował meczet w 622. Średniowiecze trwało od I do III w.”",
        ua: "«Biblia pauperum — ленна присяга. Романська церква має лише вітражі і цеглу. Готика — товсті мури без вікон. Ініціал — шпора лицаря. Віт Ствош збудував мечеть 622 року. Середньовіччя тривало від I до III ст.»"
      },
      text: {
        pl: [
          "Biblia pauperum uczy obrazem. Romański = kamień i małe okna. Gotyk = światło i ostrołuk. Inicjał = litera. Stwosz = ołtarz w Krakowie. Okres: V–XV w."
        ],
        ua: [
          "Biblia pauperum вчить образом. Романський = камінь і малі вікна. Готика = світло і гостра арка. Ініціал = літера. Ствош = вівтар у Кракові. Період: V–XV ст."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach: po co była sztuka oraz czym różni się kościół romański od gotyckiego. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях: навіщо було мистецтво і чим романська церква відрізняється від готичної. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: uczyć i chwała Boga; grube mury vs strzelistość i witraże."
        ],
        ua: [
          "Підказка: вчити і слава Бога; товсті мури vs стрімкість і вітражі."
        ]
      },
      task: {
        id: "h26-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie ujmuje funkcję sztuki i różnicę stylów?",
          ua: "Яке речення охоплює функцію мистецтва і різницю стилів?"
        },
        options: [
          { id: "a", label: { pl: "Sztuka uczyła wiary (Biblia pauperum); romański jest ciężki i ciemniejszy, gotyk strzelisty i pełen światła", ua: "Мистецтво вчило віри (Biblia pauperum); романський важкий і темніший, готика стрімка і повна світла" } },
          { id: "b", label: { pl: "Sztuka służyła tylko do kucia mieczy dla giermków", ua: "Мистецтво служило лише куванню мечів для зброєносців" } },
          { id: "c", label: { pl: "Gotyk to trójpolówka z lekcji 24", ua: "Готика — це трипілля з уроку 24" } }
        ],
        answer: "a",
        hint: {
          pl: "Cele nauczycielki: funkcja, cechy romańskie i gotyckie, charakter dzieł.",
          ua: "Цілі вчительки: функція, романські і готичні риси, характер творів."
        },
        explanation: {
          pl: "Giermek = 23. Trójpolówka = 24.",
          ua: "Зброєносець = 23. Трипілля = 24."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Więcej niż kościół", ua: "Більше ніж церква" },
      task: {
        id: "h26-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie jest zgodne z KN i notatką (bez wykładu z liceum)?",
          ua: "Яке речення згідне з KN і нотаткою (без лекції з ліцею)?"
        },
        options: [
          { id: "a", label: { pl: "w gotyku stawiano też ratusze; w kościele śpiewano chorał (jeden głos); swój lokalny kościół opowiedz w klasie", ua: "у готиці ставили також ратуші; у церкві співали хорал (один голос); свою місцеву церкву розкажи в класі" } },
          { id: "b", label: { pl: "średniowiecze to tylko muzyka trubadurów i hejnał jako KN podstawowe", ua: "середньовіччя — лише музика трубадурів і сигнал як KN базове" } },
          { id: "c", label: { pl: "wszystkie katedry zbudował Urban II w 1095", ua: "усі собори збудував Урбан II 1095 року" } }
        ],
        answer: "a",
        hint: {
          pl: "KN ponadpodstawowe: świątynia w Twojej okolicy. Chorał = jednogłosowy śpiew, nie osobny dział.",
          ua: "KN понад базове: храм у твоїй околиці. Хорал = одноголосий спів, не окремий розділ."
        },
        explanation: {
          pl: "Nie kopiujemy wykładu o alegoriach kolorów ani gatunków z lekcji języka polskiego.",
          ua: "Не копіюємо лекцію про алегорії кольорів і жанри з уроку польської мови."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h26-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Funkcja, romański, gotyk — co jest prawdą?",
          ua: "Функція, романський, готика — що правда?"
        },
        options: [
          { id: "a", label: { pl: "sztuka uczy (Biblia pauperum); romański: grube mury, małe okna; gotyk: strzelisty, witraże; V–XV w.", ua: "мистецтво вчить (Biblia pauperum); романський: товсті мури, малі вікна; готика: стрімка, вітражі; V–XV ст." } },
          { id: "b", label: { pl: "sztuka to tylko cechy szewców; romański = pasowanie", ua: "мистецтво — лише цехи шевців; романський = посвята" } },
          { id: "c", label: { pl: "gotyk skończył się w 622 w Mekce", ua: "готика скінчилася 622 року в Мецці" } }
        ],
        answer: "a",
        hint: {
          pl: "KN podstawowe + cele nauczycielki.",
          ua: "KN базове + цілі вчительки."
        },
        explanation: {
          pl: "To ta lekcja. Cech = 24. Pasowanie = 23. Hidżra = 18.",
          ua: "Це цей урок. Цех = 24. Посвята = 23. Хіджра = 18."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Sztuka służyła chrześcijaństwu: chwała Boga i nauka wiary. Biblia pauperum uczyła obrazem.",
          ["chrześcijaństwu", "Biblia pauperum"],
          "Мистецтво служило християнству: слава Бога і наука віри. Biblia pauperum вчила образом.",
          ["християнству", "Biblia pauperum"]
        ),
        mark(
          "Romański (X–XIII w.): masywne mury, małe okna, łuki półokrągłe, kamień.",
          ["Romański", "małe okna"],
          "Романський (X–XIII ст.): масивні мури, малі вікна, півкруглі арки, камінь.",
          ["Романський", "малі вікна"]
        ),
        mark(
          "Gotyk (XIII–XV w.): strzeliste budowle, duże witraże, ostrołuki, kamień i cegła.",
          ["Gotyk", "witraże"],
          "Готика (XIII–XV ст.): стрімкі будівлі, великі вітражі, гострі арки, камінь і цегла.",
          ["Готика", "вітражі"]
        ),
        mark(
          "Malarstwo, rzeźba, miniatury: tematy religijne. W Polsce m.in. Tum, rotunda, gotyk ceglany.",
          ["religijne", "Tum"],
          "Живопис, різьба, мініатюри: релігійні теми. У Польщі зокрема Тум, ротонда, цегляна готика.",
          ["релігійні", "Тум"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: zanim powstała Polska — Słowianie i grody, nie portal gotycki.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: перш ніж постала Польща — слов’яни і городи, не готичний портал.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "c8Agr0M5HmM",
        title: {
          pl: "Krótkie Lekcje: Sztuka średniowiecza",
          ua: "Короткі уроки: Мистецтво середньовіччя"
        }
      }
    }
  ]
};
