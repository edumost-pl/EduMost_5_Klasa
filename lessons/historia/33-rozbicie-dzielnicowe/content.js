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
      heading: { pl: "Rozbicie dzielnicowe", ua: "Удільна роздробленість" },
      formula: "1138–1320",
      text: {
        pl: [
          "Po śmierci Krzywoustego (1138) Polska nie zniknęła — podzieliła się. To rozbicie dzielnicowe: wiele księstw Piastów, coraz mniejszych.",
          "Dziś: walki braci, Krzyżacy, Mongołowie i skutki podziału. Na osi nowe lata: 1226, 1227, 1241. Zjednoczenie i 1320 — lekcja 34."
        ],
        ua: [
          "Після смерті Кривоустого (1138) Польща не зникла — поділилася. Це удільна роздробленість: багато князівств П’ястів, дедалі менших.",
          "Сьогодні: боротьба братів, хрестоносці, монголи і наслідки поділу. На осі нові роки: 1226, 1227, 1241. Об’єднання і 1320 — урок 34."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "wyjaśnić, czym było rozbicie dzielnicowe i skąd wzięły się walki Piastów", ua: "пояснити, чим була удільна роздробленість і звідки взялися війни П’ястів" },
        { pl: "opisać sprowadzenie Krzyżaków w 1226 i zjazd w Gąsawie 1227", ua: "описати запрошення хрестоносців 1226 і з’їзд у Ґонсаві 1227" },
        { pl: "podać najazd mongolski 1241 i bitwę pod Legnicą", ua: "назвати монгольську навалу 1241 і битву під Легницею" },
        { pl: "wskazać na mapie dzielnice oraz skutki: utrata ziem i rozwój gospodarczy", ua: "вказати на карті уділи та наслідки: втрата земель і господарський розвиток" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Po testamencie 1138", ua: "Після заповіту 1138" },
      formula: "1138",
      timelineYear: 1138,
      visual: gh("272", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa dzielnic 1138: Władysław, Bolesław, Mieszko III, Henryk, Kazimierz",
          ua: "Карта уділів 1138: Владислав, Болеслав, Мешко III, Генрик, Казимир"
        },
        title: { pl: "Pięć barw, nie wojna synów", ua: "П’ять барв, не війна синів" },
        prompt: {
          pl: "Szkolna mapa 16:9. Tytuł: „1138 — dzielnice synów”. Podpisy PL: Władysław — Śląsk i dzielnica senioralna (Kraków); Bolesław — Mazowsze; Mieszko III — Wielkopolska; Henryk — Sandomierz; Kazimierz — na początku bez dzielnicy (Łęczyca z matką). Legenda. BEZ bitew. Styl Nowej Ery.",
          ua: "1138. П’ять уділів. Сандомир = Генрик. Без бою."
        }
      }),
      text: {
        pl: [
          ["", em("Rozbicie dzielnicowe"), " (ok. 1138–1320): Polska podzielona między synów Krzywoustego. Najstarszy ", em("Władysław"), " — Śląsk i ", em("dzielnica senioralna"), " z Krakowem. ", em("Bolesław"), " — Mazowsze. ", em("Mieszko III"), " — Wielkopolska. ", em("Henryk"), " — Sandomierz. Najmłodszy ", em("Kazimierz"), " na początku nie dostał ziemi."],
          "Zasadę senioratu znasz z lekcji 31. Tu mapa i to, co stało się potem."
        ],
        ua: [
          ["", em("Удільна роздробленість"), " (бл. 1138–1320): Польща поділена між синами Кривоустого. Найстарший ", em("Владислав"), " — Сілезія і ", em("сеньйоральний уділ"), " з Краковом. ", em("Болеслав"), " — Мазовія. ", em("Мешко III"), " — Великопольща. ", em("Генрик"), " — Сандомир. Наймолодший ", em("Казимир"), " спочатку не дістав землі."],
          "Принцип сеньйорату знаєш з уроку 31. Тут карта і те, що сталося потім."
        ]
      },
      task: {
        id: "h33-sandomierz",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto według testamentu dostał ziemię sandomierską?",
          ua: "Хто за заповітом дістав сандомирську землю?"
        },
        options: [
          { id: "a", label: { pl: "Henryk (Sandomierski)", ua: "Генрик (Сандомирський)" } },
          { id: "b", label: { pl: "drugi raz Władysław — to pomyłka", ua: "вдруге Владислав — це помилка" } },
          { id: "c", label: { pl: "tylko Konrad Mazowiecki z 1226", ua: "лише Конрад Мазовецький з 1226" } }
        ],
        answer: "a",
        hint: {
          pl: "Pięciu synów. Władysław = Śląsk i seniorat. Sandomierz = Henryk.",
          ua: "П’ятеро синів. Владислав = Сілезія і сеньйорат. Сандомир = Генрик."
        },
        explanation: {
          pl: "Konrad = później, Mazowsze XIII w.",
          ua: "Конрад = пізніше, Мазовія XIII ст."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Władysław Wygnaniec", ua: "Владислав Вигнанець" },
      formula: "Wygnaniec",
      visual: gh("273", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Władysława Wygnańca: najstarszy syn, Śląsk i seniorat, wygnanie",
          ua: "Картка Владислава Вигнанця: найстарший син, Сілезія і сеньйорат, вигнання"
        },
        title: { pl: "Portret księcia, nie kajdany", ua: "Портрет князя, не кайдани" },
        prompt: {
          pl: "Szkolny slajd 16:9. Spokojny książę w płaszczu, dzień. BEZ łańcuchów, BEZ Matejki. Cztery punkty PL: „kto — Władysław Wygnaniec”; „skąd — najstarszy syn Krzywoustego, Śląsk i seniorat”; „lata — po 1138”; „wsławił się — chciał sam rządzić, przegrał, wygnany”. Styl Nowej Ery.",
          ua: "Картка Вигнанця. Чотири пункти. Не кайдани."
        }
      }),
      text: {
        pl: [
          ["", em("Władysław Wygnaniec"), ": kto — najstarszy syn Krzywoustego; skąd — Śląsk i dzielnica senioralna; lata — po 1138; wsławił się — nie chciał dzielić władzy z braćmi."],
          "Chciał zabrać im ziemie i zostać jedynym władcą. Przegrał wojnę, musiał uciec. Od tej pory: Wygnaniec. KN: to początek walk wewnętrznych."
        ],
        ua: [
          ["", em("Владислав Вигнанець"), ": хто — найстарший син Кривоустого; звідки — Сілезія і сеньйоральний уділ; роки — після 1138; уславився — не хотів ділити владу з братами."],
          "Хотів забрати в них землі і стати єдиним володарем. Програв війну, мусив утекти. Відтоді: Вигнанець. KN: це початок внутрішніх війн."
        ]
      },
      task: {
        id: "h33-wygnaniec",
        type: "true-false",
        level: "A",
        question: {
          pl: "Władysław Wygnaniec to najstarszy syn Krzywoustego, który przegrał z braćmi i musiał opuścić kraj — prawda czy fałsz?",
          ua: "Владислав Вигнанець — найстарший син Кривоустого, який програв братам і мусив покинути край — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Przydomek od wygnania. Herman z lekcji 31 to jego dziadek.",
          ua: "Прізвисько від вигнання. Герман з уроку 31 — його дід."
        },
        explanation: {
          pl: "Prawda. Herman = 31. Ten Władysław = syn Krzywoustego.",
          ua: "Правда. Герман = 31. Цей Владислав = син Кривоустого."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Walka o Kraków", ua: "Боротьба за Краків" },
      formula: "1177",
      visual: gh("274", {
        kind: "image-placeholder",
        alt: {
          pl: "Schemat: bracia i strzałka do Krakowa; 1177 Kazimierz Sprawiedliwy",
          ua: "Схема: брати і стрілка до Кракова; 1177 Казимир Справедливий"
        },
        title: { pl: "Strzałka do Krakowa, nie pięć portretów", ua: "Стрілка до Кракова, не п’ять портретів" },
        prompt: {
          pl: "Szkolny schemat 16:9. Korona-miasto „Kraków”. Imiona PL: Bolesław Kędzierzawy, Mieszko III Stary, Kazimierz Sprawiedliwy. Napis „1177”. BEZ drzewa 40 Piastów, BEZ Matejki. Styl Nowej Ery.",
          ua: "Краків. 1177. Не генеалогічне дерево."
        }
      }),
      text: {
        pl: [
          "Po wygnaniu Władysława bracia dalej spierali się o władzę. Kluczem był Kraków — stolica dzielnicy senioralnej.",
          ["W ", em("1177"), " Kraków wziął najmłodszy syn Krzywoustego ", em("Kazimierz Sprawiedliwy"), " (z pomocą możnych i Kościoła). Seniorat — rządy najstarszego żyjącego Piasta — został złamany. To nie osobna biografia; karty Kazimierza tu nie ma."]
        ],
        ua: [
          "Після вигнання Владислава брати далі сварилися за владу. Ключем був Краків — столиця сеньйорального уділу.",
          ["", em("1177"), " року Краків узяв наймолодший син Кривоустого ", em("Казимир Справедливий"), " (з допомогою можновладців і Церкви). Сеньйорат — влада найстаршого живого П’яста — було зламано. Це не окрема біографія; картки Казимира тут немає."]
        ]
      },
      task: {
        id: "h33-1177",
        type: "input-number",
        level: "B",
        question: {
          pl: "W którym roku Kazimierz Sprawiedliwy objął rządy w Krakowie? Wpisz rok.",
          ua: "Якого року Казимир Справедливий взяв владу в Кракові? Введи рік."
        },
        answer: 1177,
        hint: {
          pl: "Karta nauczycielki i film. Nie 1138 (testament) i nie 1227 (Gąsawa).",
          ua: "Картка вчительки і фільм. Не 1138 (заповіт) і не 1227 (Ґонсава)."
        },
        explanation: {
          pl: "1177. 1138 = 31. 1227 = Gąsawa na tej lekcji.",
          ua: "1177. 1138 = 31. 1227 = Ґонсава на цьому уроці."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Konrad Mazowiecki", ua: "Конрад Мазовецький" },
      formula: "1226",
      timelineYear: 1226,
      visual: gh("275", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Konrada Mazowieckiego i Krzyżacy stojący przy ziemi chełmińskiej",
          ua: "Картка Конрада Мазовецького і хрестоносці, що стоять біля Хелмінської землі"
        },
        title: { pl: "Stoją, nie jadą na Prusów", ua: "Стоять, не скачуть на прусів" },
        prompt: {
          pl: "Szkolny slajd 16:9. Lewa: spokojny książę. Cztery punkty PL: „kto — Konrad Mazowiecki”; „skąd — Mazowsze i Kujawy, brat Leszka Białego”; „lata — 1226”; „wsławił się — sprowadził Krzyżaków na ziemię chełmińską”. Prawa: dwaj rycerze w białych płaszczach z czarnym krzyżem STOJĄ; podpis „ziemia chełmińska”. BEZ szarży, BEZ foto zbroi. Styl Nowej Ery.",
          ua: "Конрад 1226. Хрестоносці стоять. Не атака."
        }
      }),
      text: {
        pl: [
          ["", em("Konrad Mazowiecki"), ": kto — książę Mazowsza i Kujaw, brat Leszka Białego; skąd — północ kraju; lata — początek XIII w.; wsławił się — w ", em("1226"), " dał Krzyżakom ", em("ziemię chełmińską"), "."],
          "Rozbicie osłabiło Polskę. Mazowsze najeżdżali pogańscy Prusowie. Konrad wezwał zakon, by bronił ziemi i szerzył chrześcijaństwo. Krzyżacy podbili Prusów, budowali zamki i miasta — i stworzyli własne, silne państwo."
        ],
        ua: [
          ["", em("Конрад Мазовецький"), ": хто — князь Мазовії і Куяв, брат Лешка Білого; звідки — північ краю; роки — початок XIII ст.; уславився — ", em("1226"), " року дав хрестоносцям ", em("Хелмінську землю"), "."],
          "Роздробленість ослабила Польщу. На Мазовію нападали поганські прусси. Конрад покликав орден, щоб боронив землю і ширив християнство. Хрестоносці підкорили прусів, будували замки й міста — і створили власну сильну державу."
        ]
      },
      task: {
        id: "h33-1226",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Konrad Mazowiecki sprowadził Krzyżaków na ziemię chełmińską? Wpisz rok.",
          ua: "Якого року Конрад Мазовецький спровадив хрестоносців на Хелмінську землю? Введи рік."
        },
        answer: 1226,
        hint: {
          pl: "KN: ta data na osi. Nie 1138 i nie 1241.",
          ua: "KN: ця дата на осі. Не 1138 і не 1241."
        },
        explanation: {
          pl: "1226. 1309 Malbork stolicą zakonu = lekcja 34. Malbork z lekcji 23 to zamek, nie ta data.",
          ua: "1226. 1309 Мальборк столицею ордену = урок 34. Мальборк з уроку 23 — замок, не ця дата."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Leszek Biały i Gąsawa", ua: "Лешко Білий і Ґонсава" },
      formula: "1227",
      timelineYear: 1227,
      visual: gh("276", {
        kind: "image-placeholder",
        alt: {
          pl: "Karta Leszka Białego i spokojny zjazd książąt w Gąsawie, rok 1227",
          ua: "Картка Лешка Білого і спокійний з’їзд князів у Ґонсаві, 1227 рік"
        },
        title: { pl: "Stół zjazdu, nie zamach", ua: "Стіл з’їзду, не замах" },
        prompt: {
          pl: "Szkolny slajd 16:9. Lewa: spokojny młody książę. Cztery punkty PL: „kto — Leszek Biały”; „skąd — syn Kazimierza Sprawiedliwego”; „lata — początek XIII w., 1227”; „wsławił się — zjazd w Gąsawie, śmierć = koniec władzy seniora”. Prawa: książęta przy stole, napis „Gąsawa 1227”. BEZ noża, BEZ Matejki. Styl Nowej Ery.",
          ua: "Лешко Білий. Ґонсава 1227. Не вбивство на образі."
        }
      }),
      text: {
        pl: [
          ["", em("Leszek Biały"), ": kto — syn Kazimierza Sprawiedliwego; skąd — Kraków; lata — początek XIII w.; wsławił się — w ", em("1227"), " zwołał zjazd w ", em("Gąsawie"), ", by zakończyć spory."],
          "Na zjeździe został zamordowany (sprawców historycy nie ustalili pewnie). To ostateczny koniec władzy zwierzchniej seniora. Polska stała się zbiorem coraz liczniejszych, osobnych księstw — bo dzielnice dalej cięto między synów."
        ],
        ua: [
          ["", em("Лешко Білий"), ": хто — син Казимира Справедливого; звідки — Краків; роки — початок XIII ст.; уславився — ", em("1227"), " року скликав з’їзд у ", em("Ґонсаві"), ", щоб закінчити суперечки."],
          "На з’їзді його вбили (винних історики не встановили певно). Це остаточний кінець зверхньої влади сеньйора. Польща стала збором дедалі численніших окремих князівств — бо уділи далі різали між синів."
        ]
      },
      task: {
        id: "h33-1227",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku odbył się zjazd w Gąsawie i zginął Leszek Biały? Wpisz rok.",
          ua: "Якого року відбувся з’їзд у Ґонсаві і загинув Лешко Білий? Введи рік."
        },
        answer: 1227,
        hint: {
          pl: "KN: ta data na osi. Rok po sprowadzeniu Krzyżaków.",
          ua: "KN: ця дата на осі. Рік після спровадження хрестоносців."
        },
        explanation: {
          pl: "1227. 1226 = Krzyżacy. 1241 = Legnica.",
          ua: "1227. 1226 = хрестоносці. 1241 = Легниця."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Ziemie w XIII wieku", ua: "Землі в XIII столітті" },
      formula: "mapa",
      visual: gh("277", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa XIII w.: pocięty Śląsk, dwa Pomorza, ziemia chełmińska Krzyżaków",
          ua: "Карта XIII ст.: порізана Сілезія, два Помор’я, Хелмінська земля хрестоносців"
        },
        title: { pl: "Utracone ziemie i zakon, nie mapa 2026", ua: "Втрачені землі і орден, не карта 2026" },
        prompt: {
          pl: "Szkolna mapa 16:9 ziem polskich XIII w. Podpisy PL: Śląsk (wiele małych księstw), Wielkopolska, Małopolska, Mazowsze, Pomorze Zachodnie, Pomorze Gdańskie, ziemia chełmińska / Krzyżacy. Tytuł: „rozbicie w XIII wieku”. BEZ granic RP 2026. Styl Nowej Ery.",
          ua: "XIII ст. Сілезія порізана. Два Помор’я. Хрестоносці."
        }
      }),
      text: {
        pl: [
          "Kraj był bardzo rozdrobniony. Śląsk dzielił się nawet na kilkanaście księstw. KN: wskaż na mapie dzielnice i ziemie utracone.",
          ["Odeszły m.in. ", em("Pomorze Zachodnie"), " i ", em("Pomorze Gdańskie"), ". Na ziemi chełmińskiej i pruskiej rosło państwo krzyżackie."]
        ],
        ua: [
          "Край був дуже роздроблений. Сілезія ділилася навіть на десяток князівств. KN: вкажи на карті уділи і втрачені землі.",
          ["Відійшли зокрема ", em("Західне Помор’я"), " і ", em("Гданське Помор’я"), ". На Хелмінській і прусській землі росла держава хрестоносців."]
        ]
      },
      task: {
        id: "h33-mapa",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Które ziemie w XIII wieku odeszły lub stały się osobne według tej lekcji?",
          ua: "Які землі в XIII ст. відійшли або стали окремими за цим уроком?"
        },
        options: [
          { id: "a", label: { pl: "Pomorze Zachodnie, Pomorze Gdańskie oraz ziemia chełmińska u Krzyżaków", ua: "Західне Помор’я, Гданське Помор’я та Хелмінська земля у хрестоносців" } },
          { id: "b", label: { pl: "tylko Egipt i Mezopotamia z działu I", ua: "лише Єгипет і Месопотамія з розділу I" } },
          { id: "c", label: { pl: "Grody Czerwieńskie z lekcji 29 jako jedyna strata XIII w.", ua: "Червенські городи з уроку 29 як єдина втрата XIII ст." } }
        ],
        answer: "a",
        hint: {
          pl: "Film i KN: dwa Pomorza + zakon. Chrobry = 29, inny wiek.",
          ua: "Фільм і KN: два Помор’я + орден. Хоробрий = 29, інше століття."
        },
        explanation: {
          pl: "Starożytność = dział I. 29 = XI w.",
          ua: "Давнина = розділ I. 29 = XI ст."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Henryk Pobożny i 1241", ua: "Генрик Побожний і 1241" },
      formula: "1241",
      timelineYear: 1241,
      visual: gh("278", {
        kind: "map-placeholder",
        alt: {
          pl: "Karta Henryka Pobożnego i mapa najazdu 1241: Lublin, Sandomierz, Kraków, Legnica",
          ua: "Картка Генрика Побожного і карта навали 1241: Люблін, Сандомир, Краків, Легниця"
        },
        title: { pl: "Punkty na mapie, nie bitwa z kodeksu", ua: "Точки на карті, не битва з кодексу" },
        prompt: {
          pl: "Szkolna mapa 16:9. Książę STOI w rogu (nie spada z konia). Punkty PL: Lublin, Sandomierz, Kraków, Legnica. Tytuł: „1241 Mongołowie”. Strzałka szlaku, BEZ pożaru z ludźmi, BEZ kodeksu św. Jadwigi, BEZ głów. Styl Nowej Ery.",
          ua: "1241. Легниця точка. Генрик стоїть. Не битва."
        }
      }),
      text: {
        pl: [
          ["W ", em("1241"), " na Polskę uderzyli ", em("Mongołowie"), " (Tatarzy). Spustoszyli południe: Lublin, Sandomierz, Kraków. Pod ", em("Legnicą"), " stanęły połączone siły kilku książąt."],
          ["", em("Henryk Pobożny"), ": kto — książę śląski; skąd — Śląsk; lata — 1241; wsławił się — walczył pod Legnicą i zginął. Polacy przegrali. Mongołowie potem wycofali się z ziem polskich."]
        ],
        ua: [
          ["", em("1241"), " року на Польщу вдарили ", em("монголи"), " (татари). Спустошили південь: Люблін, Сандомир, Краків. Під ", em("Легницею"), " стали об’єднані сили кількох князів."],
          ["", em("Генрик Побожний"), ": хто — князь сілезький; звідки — Сілезія; роки — 1241; уславився — бився під Легницею і загинув. Поляки програли. Монголи потім відступили з польських земель."]
        ]
      },
      task: {
        id: "h33-1241",
        type: "input-number",
        level: "A",
        question: {
          pl: "W którym roku Mongołowie najechali ziemie polskie i stoczono bitwę pod Legnicą? Wpisz rok.",
          ua: "Якого року монголи напали на польські землі і відбулася битва під Легницею? Введи рік."
        },
        answer: 1241,
        hint: {
          pl: "KN: ta data na osi. Nie 1226 (Krzyżacy) i nie 1410 (Grunwald = później).",
          ua: "KN: ця дата на осі. Не 1226 (хрестоносці) і не 1410 (Грюнвальд = пізніше)."
        },
        explanation: {
          pl: "1241. Grunwald = lekcja 36.",
          ua: "1241. Грюнвальд = урок 36."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Skutki: słabość i rozwój", ua: "Наслідки: слабкість і розвиток" },
      formula: "dwa oblicza",
      visual: gh("279", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwie kolumny: utrata ziem i najazdy oraz nowe wsie, miasta i kościoły",
          ua: "Дві колонки: втрата земель і напади та нові села, міста і церкви"
        },
        title: { pl: "Dwie kolumny, nie jedna klęska", ua: "Дві колонки, не одна поразка" },
        prompt: {
          pl: "Szkolny schemat 16:9, dwie kolumny PL. Lewa „słabość”: małe księstwa, utrata Pomorza, zakon, najazd. Prawa „rozwój”: nowe wsie, miasto z rynkiem, kościół, pług. Dzień. BEZ nędzy-gore, BEZ szarży. Styl Nowej Ery.",
          ua: "Слабкість і розвиток. Дві колонки."
        }
      }),
      text: {
        pl: [
          "Każdy książę dbał o swoją dzielnicę, nie o całą Polskę. Spadło znaczenie kraju w Europie. Trudniej było bronić ludzi. Utracono Pomorze; na północy urosło państwo krzyżackie; południe niszczyli Mongołowie.",
          ["Jednocześnie XIII wiek to rozwój: ", em("osadnictwo"), " i ", em("kolonizacja"), " (nowe wsie, także osadnicy z Niemiec), ", em("trójpolówka"), " i żelazne narzędzia (jak w lekcji 24), lokacje miast, kościoły."]
        ],
        ua: [
          "Кожен князь дбав про свій уділ, не про всю Польщу. Впало значення краю в Європі. Важче було боронити людей. Втрачено Помор’я; на півночі виросла держава хрестоносців; південь нищили монголи.",
          ["Водночас XIII століття — розвиток: ", em("осадництво"), " і ", em("колонізація"), " (нові села, також осадники з Німеччини), ", em("трипілля"), " і залізні знаряддя (як в уроці 24), локації міст, церкви."]
        ]
      },
      task: {
        id: "h33-skutki",
        type: "true-false",
        level: "A",
        question: {
          pl: "Rozbicie dzielnicowe osłabiło Polskę politycznie, ale w XIII wieku rozwijały się wsie, miasta i uprawa ziemi — prawda czy fałsz?",
          ua: "Удільна роздробленість ослабила Польщу політично, але в XIII ст. розвивалися села, міста і рілля — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Film Zapamiętaj: oba oblicza. Nie tylko klęski.",
          ua: "Фільм Запам’ятай: обидва обличчя. Не лише поразки."
        },
        explanation: {
          pl: "Prawda. KN: skutki + zmiany gospodarcze.",
          ua: "Правда. KN: наслідки + господарські зміни."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "rozbicie dzielnicowe — podział Polski na księstwa Piastów, umownie 1138–1320", ua: "удільна роздробленість — поділ Польщі на князівства П’ястів, умовно 1138–1320" },
        { pl: "dzielnica senioralna — ziemia z Krakowem dla najstarszego księcia (seniora)", ua: "сеньйоральний уділ — земля з Краковом для найстаршого князя (сеньйора)" },
        { pl: "Władysław Wygnaniec / Leszek Biały / Konrad Mazowiecki / Henryk Pobożny — cztery postaci KN", ua: "Владислав Вигнанець / Лешко Білий / Конрад Мазовецький / Генрик Побожний — чотири постаті KN" },
        { pl: "1226 — Konrad sprowadza Krzyżaków na ziemię chełmińską", ua: "1226 — Конрад спроваджує хрестоносців на Хелмінську землю" },
        { pl: "1227 — zjazd w Gąsawie; śmierć Leszka = koniec władzy seniora", ua: "1227 — з’їзд у Ґонсаві; смерть Лешка = кінець влади сеньйора" },
        { pl: "1241 — najazd Mongołów (Tatarów); Legnica; śmierć Henryka Pobożnego", ua: "1241 — навала монголів (татар); Легниця; смерть Генрика Побожного" },
        { pl: "osadnictwo / kolonizacja / trójpolówka — nowe wsie i lepsza uprawa w XIII w.", ua: "осадництво / колонізація / трипілля — нові села і краща рілля в XIII ст." }
      ]
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Testament 1138 skończył spory. Sandomierz wziął Władysław. Krzyżaków sprowadził Mieszko I w 966. Legnica to 1109. Łokietek koronował się na tej godzinie. Matejko namalował Gąsawę, więc tak było.”",
        ua: "«Заповіт 1138 закінчив суперечки. Сандомир узяв Владислав. Хрестоносців спровадив Мешко I 966 року. Легниця — це 1109. Локетек коронувався на цій годині. Матейко намалював Ґонсаву, тож так було.»"
      },
      text: {
        pl: [
          "1138 zaczął rozbicie, nie spokój. Sandomierz = Henryk. 1226 = Konrad. 1109 = Głogów (31). 1320 = 34. Matejko ≠ źródło."
        ],
        ua: [
          "1138 почав роздробленість, не спокій. Сандомир = Генрик. 1226 = Конрад. 1109 = Глогув (31). 1320 = 34. Матейко ≠ джерело."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Powiedz w 3–4 zdaniach jak w notatce: czym było rozbicie i które wydarzenia je pogłębiły. Potem wybierz zdanie.",
        ua: "Скажи в 3–4 реченнях як у нотатці: чим була роздробленість і які події її поглибили. Потім вибери речення."
      },
      text: {
        pl: [
          "Podpowiedź: 1138; Wygnaniec; 1177; 1226; 1227; 1241."
        ],
        ua: [
          "Підказка: 1138; Вигнанець; 1177; 1226; 1227; 1241."
        ]
      },
      task: {
        id: "h33-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie zamyka notatkę z karty?",
          ua: "Яке речення замикає нотатку з картки?"
        },
        options: [
          { id: "a", label: { pl: "Po 1138 Polska pękła na dzielnice; pogłębiły to wojna Wygnańca, złamanie senioratu, Gąsawa 1227, Krzyżacy 1226 i najazd 1241", ua: "Після 1138 Польща тріснула на уділи; поглибили це війна Вигнанця, зламання сеньйорату, Ґонсава 1227, хрестоносці 1226 і навала 1241" } },
          { id: "b", label: { pl: "To tylko koronacja 1025", ua: "Це лише коронація 1025" } },
          { id: "c", label: { pl: "To tylko społeczeństwo grodu z lekcji 32", ua: "Це лише суспільство города з уроку 32" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwa pytania nauczycielki: czym było i co pogłębiło.",
          ua: "Два запитання вчительки: чим було і що поглибило."
        },
        explanation: {
          pl: "1025 = 29. Gród = 32.",
          ua: "1025 = 29. Город = 32."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Zakon, łuk i dziś", ua: "Орден, лук і сьогодні" },
      task: {
        id: "h33-extra",
        type: "single-choice",
        level: "C",
        question: {
          pl: "KN ponadpodstawowe + pytanie nauczycielki „co z tego dziś?” — bez lekcji 23, 34 i 36?",
          ua: "KN понад базове + питання вчительки «що з цього сьогодні?» — без уроків 23, 34 і 36?"
        },
        options: [
          { id: "a", label: { pl: "zakon przyszedł bronić Mazowsza i został państwem; Mongołowie mieli szybkie konie i lekkie łuki; gdy każdy rządzi osobno, trudniej bronić kraju — to lekcja na dziś, nie Grunwald i nie korona 1320", ua: "орден прийшов боронити Мазовію і став державою; монголи мали швидких коней і легкі луки; коли кожен править окремо, важче боронити край — це урок на сьогодні, не Грюнвальд і не корона 1320" } },
          { id: "b", label: { pl: "trzeba wykuć pięć przydomków z portretami i foto Malborka z 1309", ua: "треба вивчити п’ять прізвиськ із портретами і фото Мальборка з 1309" } },
          { id: "c", label: { pl: "przywileje szlachty z lekcji 38 są głównym tematem tej godziny", ua: "привілеї шляхти з уроку 38 — головна тема цієї години" } }
        ],
        answer: "a",
        hint: {
          pl: "KN: krótko o zakonie i o Mongołach. Malbork 1309 i 1320 = 34. Przydomki = ciekawostka filmu, nie pięć kart.",
          ua: "KN: коротко про орден і про монголів. Мальборк 1309 і 1320 = 34. Прізвиська = цікавинка фільму, не п’ять карток."
        },
        explanation: {
          pl: "Zawisza / zamek = 23. Grunwald = 36. Monarchia stanowa = 38.",
          ua: "Завіша / замок = 23. Грюнвальд = 36. Станова монархія = 38."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Czy już umiem?", ua: "Чи вже вмію?" },
      task: {
        id: "h33-check",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Co jest prawdą o rozbiciu dzielnicowym?",
          ua: "Що правда про удільну роздробленість?"
        },
        options: [
          { id: "a", label: { pl: "po 1138 wiele księstw; 1226 Krzyżacy; 1227 Gąsawa; 1241 Legnica; skutki: utrata ziem i jednocześnie rozwój wsi i miast", ua: "після 1138 багато князівств; 1226 хрестоносці; 1227 Ґонсава; 1241 Легниця; наслідки: втрата земель і водночас розвиток сіл і міст" } },
          { id: "b", label: { pl: "to samo co demokratyczne Ateny z lekcji 07", ua: "те саме, що демократичні Афіни з уроку 07" } },
          { id: "c", label: { pl: "1138 i Głogów 1109 są jedynymi datami tej lekcji", ua: "1138 і Глогув 1109 — єдині дати цього уроку" } }
        ],
        answer: "a",
        hint: {
          pl: "Zapamiętaj z filmu + KN. 1109 = 31.",
          ua: "Запам’ятай з фільму + KN. 1109 = 31."
        },
        explanation: {
          pl: "Ateny = 07. 1109 = 31.",
          ua: "Афіни = 07. 1109 = 31."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Czas po śmierci Krzywoustego to rozbicie dzielnicowe. Książęta Piastów walczyli o pierwszeństwo, a dzielnice dzieliły się na coraz mniejsze księstwa.",
          ["rozbicie dzielnicowe", "dzielnice"],
          "Час після смерті Кривоустого — удільна роздробленість. Князі П’ясти боролися за першість, а уділи ділилися на дедалі менші князівства.",
          ["роздробленість", "уділи"]
        ),
        mark(
          "W 1226 Konrad Mazowiecki sprowadził Krzyżaków na ziemię chełmińską. Zakon podbił Prusów i stworzył państwo groźne dla polskich księstw.",
          ["1226", "Krzyżaków"],
          "1226 року Конрад Мазовецький спровадив хрестоносців на Хелмінську землю. Орден підкорив прусів і створив державу, небезпечну для польських князівств.",
          ["1226", "хрестоносців"]
        ),
        mark(
          "W 1241 Mongołowie spustoszyli południe Polski i pokonali rycerstwo pod Legnicą. Zginął książę Henryk Pobożny.",
          ["1241", "Legnicą"],
          "1241 року монголи спустошили південь Польщі і перемогли лицарство під Легницею. Загинув князь Генрик Побожний.",
          ["1241", "Легницею"]
        ),
        mark(
          "Brak silnej władzy ułatwił utratę Pomorza i najazdy. Zarazem XIII wiek to rozwój gospodarczy oraz lokacje wsi i miast.",
          ["Pomorza", "rozwój"],
          "Брак сильної влади полегшив втрату Помор’я і напади. Водночас XIII століття — господарський розвиток та локації сіл і міст.",
          ["Помор’я", "розвиток"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: zjednoczenie Polski — 1320 i Łokietek, nie nowy opis Gąsawy.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: об’єднання Польщі — 1320 і Локетек, не новий опис Ґонсави.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "Of8AobU2aW0",
        title: {
          pl: "Krótkie Lekcje: Rozbicie dzielnicowe",
          ua: "Короткі уроки: Удільна роздробленість"
        }
      }
    }
  ]
};
