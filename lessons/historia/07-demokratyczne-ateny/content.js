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
      heading: { pl: "Demokratyczne Ateny", ua: "Демократичні Афіни" },
      formula: "demos + kratos",
      text: {
        pl: [
          "Grecja to góry, wyspy i morze. Nie było jednego królestwa — były polis.",
          "Dziś: Hellenowie, Ateny, agora i akropol, demokracja, Perykles — i czym różni się to od Polski dziś."
        ],
        ua: [
          "Греція — це гори, острови і море. Не було одного царства — були поліси.",
          "Сьогодні: елліни, Афіни, агора і акрополь, демократія, Перикл — і чим це відрізняється від Польщі сьогодні."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "opisać ziemię Greków: morze, góry, oliwki i kozy", ua: "описати землю греків: море, гори, оливи і кози" },
        { pl: "powiedzieć, kim byli Hellenowie i czym jest polis", ua: "сказати, ким були елліни і що таке поліс" },
        { pl: "wskazać akropol, agorę i zasady demokracji ateńskiej", ua: "вказати акрополь, агору і правила афінської демократії" },
        { pl: "krótko powiedzieć, kim był Perykles i czym różni się demokracja dziś", ua: "коротко сказати, ким був Перикл і чим відрізняється демократія сьогодні" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Grecja: ziemia i morze", ua: "Греція: земля і море" },
      visual: gh("055", {
        kind: "map-placeholder",
        alt: {
          pl: "Mapa Grecji i zdjęcia: zatoka, gaj oliwny, kozy",
          ua: "Карта Греції і світлини: затока, оливковий гай, кози"
        },
        title: { pl: "Południe Europy, Morze Śródziemne", ua: "Південь Європи, Середземне море" },
        prompt: {
          pl: "Infografika szkolna dla klasy 5, jasne tło. GÓRA: atlasowa mapa Grecji — ląd i wyspy żółte, morze niebieskie. Czytelne polskie etykiety: Grecja, Ateny, Kreta, Rodos, Morze Jońskie, Morze Egejskie, Morze Śródziemne. Bez spornych granic. DÓŁ, trzy spokojne zdjęcia w rzędzie: (1) turkusowa zatoka z białymi klifami i małą plażą, dzień, bez wraku-horroru; (2) słoneczny gaj oliwny i polna droga; (3) koza z koźlęciem na kamienistym pastwisku, spokojnie, bez grozy. Po lewej krótka lista: „liczne wyspy”; „kraj górzysty”; „niezbyt urodzajna gleba”; „małe równiny: zboża, oliwki, winorośl”; „łąki — wypas kóz i owiec”. Styl podręcznika.",
          ua: "Шкільна інфографіка для 5 класу. ВГОРІ: атласна карта Греції — суходіл і острови жовті, море синє. Підписи: Греція, Афіни, Крит, Родос, Іонічне море, Егейське море, Середземне море. ВНИЗУ три спокійні світлини: затока з білими кліфами; оливковий гай; коза з козеням. Список: «багато островів»; «гориста країна»; «не дуже родюча земля»; «малі рівнини: збіжжя, оливи, виноград»; «луки — випас кіз і овець»."
        }
      }),
      text: {
        pl: [
          ["Grecja leży na południu Europy, nad ", em("Morzem Śródziemnym"), ". Kraj górzysty, pełen wysp, gleba niezbyt urodzajna."],
          "Na małych równinach: zboża, oliwki, winorośl. Na łąkach wypasano kozy i owce."
        ],
        ua: [
          ["Греція лежить на півдні Європи, над ", em("Середземним морем"), ". Країна гориста, повна островів, земля не дуже родюча."],
          "На малих рівнинах: збіжжя, оливи, виноград. На луках пасли кіз і овець."
        ]
      },
      task: {
        id: "h07-map",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Gdzie leży Grecja z tej lekcji?",
          ua: "Де лежить Греція з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "na południu Europy, nad Morzem Śródziemnym", ua: "на півдні Європи, над Середземним морем" } },
          { id: "b", label: { pl: "nad Nilem, w Afryce", ua: "над Нілом, в Африці" } },
          { id: "c", label: { pl: "nad Wisłą, w Europie Środkowej", ua: "над Віслою, у Центральній Європі" } }
        ],
        answer: "a",
        hint: {
          pl: "Wyspy, góry, oliwki — to południe Europy.",
          ua: "Острови, гори, оливи — це південь Європи."
        },
        explanation: {
          pl: "Grecja — południe Europy i Morze Śródziemne, nie Egipt i nie Polska.",
          ua: "Греція — південь Європи і Середземне море, не Єгипет і не Польща."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Starożytna Grecja: Hellenowie i polis", ua: "Стародавня Греція: елліни і поліс" },
      timelineId: "polis",
      formula: "VIII w. p.n.e.",
      visual: gh("056", {
        kind: "image-placeholder",
        alt: {
          pl: "Rysunek polis: miasto, akropol, pola i morze",
          ua: "Рисунок поліса: місто, акрополь, поля і море"
        },
        title: { pl: "Miasto + otaczające tereny", ua: "Місто + навколишні землі" },
        prompt: {
          pl: "Szkolna, kolorowa ilustracja polis dla klasy 5, widok z lekka z góry, dzień, bez wojny i bez grozy. Murowane miasto przy morzu, białe ściany, dachy z dachówki. Na wzgórzu w mieście akropol z dużą świątynią o kolumnach. Wokół zielone pola i łagodne wzgórza. Dwa małe drewniane żaglowce na błękitnej wodzie. Etykieta „polis”. Polski podpis: „miasto + otaczające tereny; własne władze i wojsko; granice zwykle stanowiły góry. Przykłady: Ateny, Sparta”. Styl podręcznikowy, czytelny.",
          ua: "Шкільна кольорова ілюстрація поліса для 5 класу, день, без війни. Муроване місто біля моря, на пагорбі акрополь зі святинею. Навколо поля. Два маленькі вітрильники. Етикетка «поліс». Підпис: «місто + навколишні землі; влада і військо свої; межі часто гори. Приклади: Афіни, Спарта»."
        }
      }),
      text: {
        pl: [
          ["W ", em("II tysiącleciu p.n.e."), " osiedliły się pierwsze greckie plemiona — wspólna kultura, język i wierzenia."],
          ["Nazywali siebie ", em("Hellenami"), ", a kraj ", em("Helladą"), ". Nie tworzyli jednolitego państwa: powstały ", em("polis"), " — samodzielne miasta-państwa (ostatecznie w VIII w. p.n.e.). Miasto + otaczające tereny, własne władze i wojsko. Granice zwykle stanowiły góry. Najważniejsze: Ateny i Sparta."]
        ],
        ua: [
          ["У ", em("II тисячолітті до н.е."), " оселилися перші грецькі племена — спільна культура, мова і вірування."],
          ["Називали себе ", em("еллінами"), ", а країну ", em("Елладою"), ". Не творили єдиної держави: виникли ", em("поліси"), " — самостійні міста-держави (остаточно в VIII ст. до н.е.). Місто + навколишні землі, своя влада і військо. Межі часто становили гори. Найважливіші: Афіни і Спарта."]
        ]
      },
      task: {
        id: "h07-check1",
        type: "true-false",
        level: "A",
        question: {
          pl: "Starożytni Grecy stworzyli jedno wielkie królestwo Hellady — prawda czy fałsz?",
          ua: "Стародавні греки створили одне велике царство Еллади — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Było wiele polis, nie jedno państwo.",
          ua: "Було багато полісів, не одна держава."
        },
        explanation: {
          pl: "Fałsz. Hellenowie mieli wspólną kulturę, ale żyli w osobnych polis — Ateny, Sparta i inne.",
          ua: "Неправда. Елліни мали спільну культуру, але жили в окремих полісах — Афіни, Спарта та інші."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Akropol i mury", ua: "Акрополь і мури" },
      visual: gh("057", {
        kind: "image-placeholder",
        alt: {
          pl: "Rekonstrukcja Aten: akropol na wzgórzu i mury miasta",
          ua: "Реконструкція Афін: акрополь на пагорбі і мури міста"
        },
        title: { pl: "Twierdza i miejsce kultu", ua: "Фортеця і місце культу" },
        prompt: {
          pl: "Szkolna rekonstrukcja starożytnych Aten z lotu ptaka dla klasy 5, dzień, jasne niebo, bez bitwy i bez grozy. LEWA GÓRA: wysokie skaliste wzgórze z klasycznymi świątyniami (Partenon), spokojny złoty posąg Ateny na akropolu — etykieta „AKROPOL”. ŚRODEK: gęste miasto, białe ściany, dachy terakotowe. PRZÓD: grube kamienne mury obronne wokół miasta — etykieta „MURY”. W tle góry. Mała wstawka w rogu: dzisiejsze zdjęcie Akropolu w Atenach (ruiny Partenonu, miasto w dali, dzień). Polskie etykiety duże, żółte owalne, jak w atlasie. Orzeł wysoko na niebie OK, bez drapieżnej sceny.",
          ua: "Шкільна реконструкція стародавніх Афін з висоти для 5 класу, день, без битви. На пагорбі акрополь зі святинями — етикетка «АКРОПОЛЬ». Місто з білими стінами. Попереду мури — «МУРИ». Мала вставка: сьогоднішнє фото Акрополя. Великі жовті етикетки."
        }
      }),
      text: {
        pl: [
          ["W greckiej polis ważną rolę odgrywał ", em("akropol"), " — wzgórze: twierdza i miejsce kultu. Miasto otaczały ", em("mury"), "."]
        ],
        ua: [
          ["У грецькому полісі важливу роль відігравав ", em("акрополь"), " — пагорб: фортеця і місце культу. Місто оточували ", em("мури"), "."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Agora i pola", ua: "Агора і поля" },
      visual: gh("058", {
        kind: "image-placeholder",
        alt: {
          pl: "Widok polis: agora w mieście i pola za murami",
          ua: "Вигляд поліса: агора в місті і поля за мурами"
        },
        title: { pl: "Plac w środku, pola za miastem", ua: "Майдан у центрі, поля за містом" },
        prompt: {
          pl: "Szkolna ilustracja z lotu ptaka dla klasy 5: starożytne greckie miasto, białe domy, dachy terakotowe, dzień, bez grozy. Na pierwszym planie duży prostokątny budynek z kolumnadą. W centrum otwarty plac pełen drobnych figurek obywateli w tunikach — żółta etykieta „AGORA”. W tle za murami zielone wzgórza i pola uprawne — etykieta „POLA”. Spokojny tłum, rozmowy, nikt nie walczy. Styl podręcznika Nowej Ery.",
          ua: "Шкільна ілюстрація з висоти для 5 класу: грецьке місто, білі домівки, теракотові дахи, день. У центрі відкритий майдан з дрібними фігурками — етикетка «АГОРА». За мурами зелені поля — «ПОЛЯ». Спокійний натовп, без бою."
        }
      }),
      text: {
        pl: [
          ["Centralnym placem miasta była ", em("agora"), " — tu spotykano się, handlowano i rozmawiano o sprawach polis. Za murami leżały ", em("pola"), "."]
        ],
        ua: [
          ["Центральним майданом міста була ", em("агора"), " — тут зустрічалися, торгували і говорили про справи поліса. За мурами лежали ", em("поля"), "."]
        ]
      },
      task: {
        id: "h07-src",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Czym była agora w greckiej polis?",
          ua: "Чим була агора в грецькому полісі?"
        },
        options: [
          { id: "a", label: { pl: "wzgórzem-twierdzą ze świątyniami", ua: "пагорбом-фортецею зі святинями" } },
          { id: "b", label: { pl: "centralnym placem miasta", ua: "центральним майданом міста" } },
          { id: "c", label: { pl: "portem Fenicjan w Tyrze", ua: "портом фінікійців у Тирі" } }
        ],
        answer: "b",
        hint: {
          pl: "Akropol = wzgórze. Agora = plac.",
          ua: "Акрополь = пагорб. Агора = майдан."
        },
        explanation: {
          pl: "Agora to serce miasta. Akropol stoi na wzgórzu.",
          ua: "Агора — серце міста. Акрополь стоїть на пагорбі."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Ateny: demokracja", ua: "Афіни: демократія" },
      formula: "demos · kratos",
      text: {
        pl: [
          [em("Demokracja"), " (z greckiego ", em("demos"), " — lud, ", em("kratos"), " — władza) to władza ludu."],
          ["Na ", em("zgromadzeniu ludowym"), " dyskutowano o ważnych sprawach. Głosowanie: decyzję podejmowano większością głosów."],
          "Urzędnicy dbali, by prawo wcielano w życie. Wybierano ich co rok."
        ],
        ua: [
          [em("Демократія"), " (з грецької ", em("демос"), " — народ, ", em("кратос"), " — влада) — влада народу."],
          ["На ", em("народних зборах"), " обговорювали важливі справи. Голосування: рішення ухвалювали більшістю голосів."],
          "Урядники дбали, щоб закон виконували. Їх обирали щороку."
        ]
      },
      task: {
        id: "h07-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywa się ustrój, w którym władzę ma lud? (słowo z tej lekcji)",
          ua: "Як називається устрій, у якому владу має народ? (слово з цього уроку)"
        },
        answer: ["demokracja", "demokratia", "демократія", "demokracia"],
        hint: {
          pl: "demos + kratos.",
          ua: "демос + кратос."
        },
        explanation: {
          pl: "Demokracja — władza ludu. W Atenach „lud” znaczyło jednak tylko obywateli.",
          ua: "Демократія — влада народу. В Афінах «народ» означав лише громадян."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Perykles", ua: "Перикл" },
      visual: gh("059", {
        kind: "image-placeholder",
        alt: {
          pl: "Posąg Peryklesa w hełmie, Ateny",
          ua: "Статуя Перикла в шоломі, Афіни"
        },
        title: { pl: "Najwybitniejszy Ateńczyk", ua: "Надвидатніший афінянин" },
        prompt: {
          pl: "Szkolne zdjęcie białego marmurowego posągu Peryklesa dla klasy 5, dzień, park w Atenach, bez grozy. Mężczyzna w greckiej tunice, koryncki hełm zsunięty do tyłu na głowie (nie scena walki). Cokół z greckim napisem ΠΕΡΙΚΛΗΣ. W tle drzewa i jasny budynek, błękitne niebo. Polski podpis: „Perykles — posąg stojący w Atenach”. Po lewej krótkie punkty: najwybitniejszy Ateńczyk; wieloletni dowódca armii; wybitny mówca; reformator; wspierał naukę i sztukę. Muzealne, czytelne.",
          ua: "Шкільна світлина білої мармурової статуї Перикла для 5 класу, день, парк, без жаху. Чоловік у хітоні, коринфський шолом зсунутий назад (не сцена бою). Цоколь із написом ΠΕΡΙΚΛΗΣ. Підпис: «Перикл — статуя в Афінах». Пункти: найвидатніший афінянин; довголітній командувач війська; видатний промовець; реформатор; підтримував науку і мистецтво."
        }
      }),
      text: {
        pl: [
          [em("Perykles"), " — najwybitniejszy Ateńczyk: wieloletni dowódca armii, mówca, reformator. Wspierał naukę i sztukę."]
        ],
        ua: [
          [em("Перикл"), " — найвидатніший афінянин: довголітній командувач війська, промовець, реформатор. Підтримував науку і мистецтво."]
        ]
      },
      task: {
        id: "h07-check2",
        type: "true-false",
        level: "A",
        question: {
          pl: "Perykles był mówcą i reformatorem, który wspierał naukę i sztukę — prawda czy fałsz?",
          ua: "Перикл був промовцем і реформатором, який підтримував науку і мистецтво — правда чи неправда?"
        },
        answer: true,
        hint: {
          pl: "Slajd wymienia też dowódcę armii.",
          ua: "Слайд називає також командувача війська."
        },
        explanation: {
          pl: "Prawda. Perykles to twarz demokratycznych Aten — nie król Egiptu.",
          ua: "Правда. Перикл — обличчя демократичних Афін, не цар Єгипту."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Zgromadzenie ludowe", ua: "Народні збори" },
      visual: gh("060", {
        kind: "image-placeholder",
        alt: {
          pl: "Obywatele Aten głosują na zgromadzeniu, w tle Akropol",
          ua: "Громадяни Афін голосують на зборах, у тлі Акрополь"
        },
        title: { pl: "Kto miał głos, a kto nie", ua: "Хто мав голос, а хто ні" },
        prompt: {
          pl: "Szkolna rekonstrukcja zgromadzenia ludowego w Atenach dla klasy 5, dzień, bez grozy i bez walki. Gęsty tłum mężczyzn w tunikach (biel, błękit, czerwień, brąz) — wielu unosi prawą rękę do głosowania. Po prawej mówca na kamiennym podwyższeniu (bema) w białym himationie, spokojny gest. W dali na skalistym wzgórzu Akropol z Partenonem, jasne niebo. Żadnych ściętych głów ani scen śmierci. Polski podpis: „brali udział obywatele Aten: pełnoletni mężczyźni, których rodzice też byli Ateńczykami; każdy obywatel miał prawo głosu. Głosu nie mogli zabierać: kobiety, niewolnicy, przybysze z innych miast”.",
          ua: "Шкільна реконструкція народних зборів в Афінах для 5 класу, день, без жаху. Натовп чоловіків у хітонах піднімає руки. Праворуч промовець на кам’яному підвищенні. Далеко Акрополь. Підпис: «брали участь громадяни Афін: повнолітні чоловіки, чиї батьки теж були афінянами. Голосу не мали: жінки, раби, прибульці з інших міст»."
        }
      }),
      text: {
        pl: [
          ["W zgromadzeniu brali udział ", em("obywatele Aten"), ": pełnoletni mężczyźni, których rodzice też byli Ateńczykami. Każdy obywatel miał prawo głosu."],
          "Głosu nie mogli zabierać: kobiety, niewolnicy, przybysze z innych miast."
        ],
        ua: [
          ["У зборах брали участь ", em("громадяни Афін"), ": повнолітні чоловіки, чиї батьки теж були афінянами. Кожен громадянин мав право голосу."],
          "Голосу не могли брати: жінки, раби, прибульці з інших міст."
        ]
      },
      task: {
        id: "h07-practice",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kto w starożytnych Atenach NIE miał prawa głosu na zgromadzeniu?",
          ua: "Хто в стародавніх Афінах НЕ мав права голосу на зборах?"
        },
        options: [
          { id: "a", label: { pl: "pełnoletni mężczyzna, syn Ateńczyków", ua: "повнолітній чоловік, син афінян" } },
          { id: "b", label: { pl: "kobiety, niewolnicy i przybysze z innych miast", ua: "жінки, раби і прибульці з інших міст" } },
          { id: "c", label: { pl: "urzędnicy wybierani co rok", ua: "урядники, яких обирали щороку" } }
        ],
        answer: "b",
        hint: {
          pl: "Obywatel = dorosły mężczyzna z ateńskich rodziców.",
          ua: "Громадянин = дорослий чоловік з афінських батьків."
        },
        explanation: {
          pl: "Demokracja ateńska nie obejmowała wszystkich mieszkańców.",
          ua: "Афінська демократія не охоплювала всіх мешканців."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Współcześnie", ua: "Сьогодні" },
      visual: gh("061", {
        kind: "image-placeholder",
        alt: {
          pl: "Sala Sejmu RP w czasie obrad",
          ua: "Зала Сейму Польщі під час засідання"
        },
        title: { pl: "Demokracja w Polsce — inne zasady", ua: "Демократія в Польщі — інші правила" },
        prompt: {
          pl: "Szkolne zdjęcie sali Sejmu RP dla klasy 5: półokrągła sala, rzędy ławek, ludzie na miejscach, dzień, spokojne obrady, bez agresji. Na ścianie godło Polski (orzeł biały na czerwonej tarczy), obok flaga Polski i flaga Unii Europejskiej. Polski podpis: „w wielu krajach, w tym w Polsce, panuje demokracja”. Lista różnic wobec Aten: „za obywateli głosują posłowie i senatorowie”; „prawo głosu przysługuje też kobietom”; „nie ma niewolnictwa”; „obcokrajowcy mogą stać się obywatelami”; „każdy ma takie same prawa wyborcze”. Styl infografiki podręcznikowej, czytelne etykiety.",
          ua: "Шкільна світлина зали Сейму Польщі для 5 класу: півкругла зала, лавки, спокійні дебати. Герб Польщі, прапор Польщі і прапор ЄС. Підпис: «у багатьох країнах, зокрема в Польщі, є демократія». Відмінності від Афін: «за громадян голосують посли і сенатори»; «право голосу мають і жінки»; «немає рабства»; «іноземці можуть стати громадянами»; «усі мають однакові виборчі права»."
        }
      }),
      text: {
        pl: [
          "W wielu krajach, w tym w Polsce, panuje demokracja — ale inna niż w Atenach.",
          "Za obywateli głosują posłowie i senatorowie. Prawo głosu mają też kobiety. Nie ma niewolnictwa. Obcokrajowcy mogą stać się obywatelami. Każdy ma takie same prawa wyborcze."
        ],
        ua: [
          "У багатьох країнах, зокрема в Польщі, є демократія — але інша, ніж в Афінах.",
          "За громадян голосують посли і сенатори. Право голосу мають і жінки. Немає рабства. Іноземці можуть стати громадянами. Усі мають однакові виборчі права."
        ]
      },
      task: {
        id: "h07-logic",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Co jest różnicą między demokracją ateńską a dzisiejszą w Polsce?",
          ua: "Що є відмінністю між афінською демократією і сьогоднішньою в Польщі?"
        },
        options: [
          { id: "a", label: { pl: "w Polsce za obywateli głosują posłowie i senatorowie; głos mają też kobiety", ua: "у Польщі за громадян голосують посли і сенатори; голос мають і жінки" } },
          { id: "b", label: { pl: "w Polsce głosują tylko pełnoletni mężczyźni z ateńskich rodziców", ua: "у Польщі голосують лише повнолітні чоловіки з афінських батьків" } },
          { id: "c", label: { pl: "w Atenach i w Polsce rządzili faraonowie", ua: "в Афінах і в Польщі правили фараони" } }
        ],
        answer: "a",
        hint: {
          pl: "Dziś demokracja przedstawicielska — wybieramy posłów.",
          ua: "Сьогодні представницька демократія — обираємо послів."
        },
        explanation: {
          pl: "Ateny: obywatele sami na zgromadzeniu. Polska: posłowie i senatorowie, głos także kobiet.",
          ua: "Афіни: громадяни самі на зборах. Польща: посли і сенатори, голос також жінок."
        }
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Trzy miejsca polis", ua: "Три місця поліса" },
      reveal: true,
      steps: [
        {
          formula: "1. AKROPOL",
          text: {
            pl: "Wzgórze: twierdza i świątynie.",
            ua: "Пагорб: фортеця і святині."
          }
        },
        {
          formula: "2. AGORA",
          text: {
            pl: "Centralny plac: rozmowy, handel, sprawy miasta.",
            ua: "Центральний майдан: розмови, торгівля, справи міста."
          }
        },
        {
          formula: "3. ZGROMADZENIE",
          text: {
            pl: "Obywatele głosują. W Atenach — dorośli mężczyźni z ateńskich rodzin.",
            ua: "Громадяни голосують. В Афінах — дорослі чоловіки з афінських родин."
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "Hellenowie / Hellada — tak Grecy nazywali siebie i swój kraj", ua: "елліни / Еллада — так греки називали себе і свою країну" },
        { pl: "polis — samodzielne miasto-państwo (miasto + tereny wokół)", ua: "поліс — самостійне місто-держава (місто + землі навколо)" },
        { pl: "akropol — wzgórze: twierdza i miejsce kultu", ua: "акрополь — пагорб: фортеця і місце культу" },
        { pl: "agora — centralny plac polis", ua: "агора — центральний майдан поліса" },
        { pl: "demokracja — władza ludu (demos + kratos); w Atenach tylko obywatele", ua: "демократія — влада народу (демос + кратос); в Афінах лише громадяни" },
        { pl: "Perykles — mówca i reformator demokratycznych Aten", ua: "Перикл — промовець і реформатор демократичних Афін" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: ["Złóż słowo: lud + władza. Co wychodzi po grecku w polskim brzmieniu?"],
        ua: ["Склади слово: народ + влада. Що виходить по-грецьки в польському звучанні?"]
      },
      task: {
        id: "h07-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "demos (lud) + kratos (władza) to…",
          ua: "демос (народ) + кратос (влада) — це…"
        },
        options: [
          { id: "a", label: { pl: "demokracja — władza ludu", ua: "демократія — влада народу" } },
          { id: "b", label: { pl: "akropol — wzgórze świątyń", ua: "акрополь — пагорб святинь" } },
          { id: "c", label: { pl: "polis — tylko port morski", ua: "поліс — лише морський порт" } }
        ],
        answer: "a",
        hint: {
          pl: "To samo słowo, którego używamy dziś.",
          ua: "Те саме слово, яким користуємось сьогодні."
        },
        explanation: {
          pl: "Demokracja. Pamiętaj: w Atenach „lud” ≠ wszyscy mieszkańcy.",
          ua: "Демократія. Пам’ятай: в Афінах «народ» ≠ усі мешканці."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„W Atenach głosował każdy, kto mieszkał w mieście — kobiety, niewolnicy i przybysze też.”",
        ua: "«В Афінах голосував кожен, хто жив у місті — жінки, раби і прибульці теж.»"
      },
      text: {
        pl: [
          "Głos mieli tylko obywatele: pełnoletni mężczyźni z ateńskich rodziców. Reszta mieszkańców — nie."
        ],
        ua: [
          "Голос мали лише громадяни: повнолітні чоловіки з афінських батьків. Решта мешканців — ні."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Wyjaśnij, czym była demokracja ateńska i kto w niej decydował.",
        ua: "Поясни, чим була афінська демократія і хто в ній вирішував."
      },
      text: {
        pl: [
          "Podpowiedź: demos + kratos, zgromadzenie ludowe, obywatele ≠ wszyscy.",
          "Powiedz 2–4 zdania. Potem wybierz najlepsze podsumowanie."
        ],
        ua: [
          "Підказка: демос + кратос, народні збори, громадяни ≠ усі.",
          "Скажи 2–4 речення. Потім вибери найкращий підсумок."
        ]
      },
      task: {
        id: "h07-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej ujmuje demokrację ateńską?",
          ua: "Яке речення найкраще передає афінську демократію?"
        },
        options: [
          { id: "a", label: { pl: "Wszyscy mieszkańcy Aten, w tym kobiety, głosowali jak w Sejmie", ua: "Усі мешканці Афін, зокрема жінки, голосували як у Сеймі" } },
          { id: "b", label: { pl: "Obywatele — dorośli mężczyźni z Aten — wspólnie podejmowali decyzje na zgromadzeniu", ua: "Громадяни — дорослі чоловіки з Афін — разом ухвалювали рішення на зборах" } },
          { id: "c", label: { pl: "Perykles był faraonem i sam stanowił wszystkie prawa", ua: "Перикл був фараоном і сам становив усі закони" } }
        ],
        answer: "b",
        hint: {
          pl: "Władza ludu, ale wąskiego „ludu”.",
          ua: "Влада народу, але вузького «народу»."
        },
        explanation: {
          pl: "Decyzje na zgromadzeniu. Nie Sejm i nie faraon.",
          ua: "Рішення на зборах. Не Сейм і не фараон."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź pisemna", ua: "Письмова відповідь" },
      prompt: {
        pl: "Wpisz, jak starożytni Grecy nazywali siebie.",
        ua: "Введи, як стародавні греки називали себе."
      },
      task: {
        id: "h07-extra",
        type: "input-text",
        level: "B",
        question: {
          pl: "Starożytni Grecy nazywali siebie…",
          ua: "Стародавні греки називали себе…"
        },
        answer: ["hellenami", "hellenowie", "helleni", "еллінами", "елліни", "ellenami"],
        hint: {
          pl: "Kraj nazywali Helladą.",
          ua: "Країну називали Елладою."
        },
        explanation: {
          pl: "Hellenowie. Kraj: Hellada.",
          ua: "Елліни. Країна: Еллада."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Polis czy królestwo?", ua: "Поліс чи царство?" },
      task: {
        id: "h07-extra-odd",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zdanie o starożytnej Grecji jest PRAWDZIWE?",
          ua: "Яке речення про стародавню Грецію є ПРАВДИВИМ?"
        },
        options: [
          { id: "a", label: { pl: "Grecy żyli w wielu polis; Ateny i Sparta były najważniejsze", ua: "Греки жили в багатьох полісах; Афіни і Спарта були найважливіші" } },
          { id: "b", label: { pl: "Całą Grecją rządził jeden faraon z Aten", ua: "Усією Грецією правив один фараон з Афін" } },
          { id: "c", label: { pl: "Polis to nazwa rzeki jak Nil", ua: "Поліс — назва ріки, як Ніл" } }
        ],
        answer: "a",
        hint: {
          pl: "Wiele miast-państw, wspólna kultura.",
          ua: "Багато міст-держав, спільна культура."
        },
        explanation: {
          pl: "Nie było jednego państwa Greków. Polis ≠ rzeka.",
          ua: "Не було однієї держави греків. Поліс ≠ ріка."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Starożytni Grecy nazywali siebie Hellenami, a swój kraj Helladą. Uprawiali oliwki, zboża i winorośl, hodowali owce i kozy. Byli znakomitymi żeglarzami.",
          ["Hellenami", "Helladą", "oliwki", "żeglarzami"],
          "Стародавні греки називали себе еллінами, а свою країну Елладою. Вирощували оливи, збіжжя і виноград, тримали овець і кіз. Були чудовими мореплавцями.",
          ["еллінами", "Елладою", "оливи", "мореплавцями"]
        ),
        mark(
          "Mieszkańców łączyła wspólna kultura, ale nie tworzyli jednolitego państwa. Żyli w miastach-państwach zwanych polis. Najważniejsze były Ateny i Sparta.",
          ["kultura", "jednolitego państwa", "polis", "Ateny", "Sparta"],
          "Мешканців єднала спільна культура, але вони не творили єдиної держави. Жили в містах-державах, званих поліс. Найважливіші були Афіни і Спарта.",
          ["культура", "єдиної держави", "поліс", "Афіни", "Спарта"]
        ),
        mark(
          "W greckiej polis ważną rolę odgrywał akropol — wzgórze pełniące funkcję twierdzy i miejsca kultu. Centralnym placem miasta była agora.",
          ["akropol", "twierdzy", "kultu", "agora"],
          "У грецькому полісі важливу роль відігравав акрополь — пагорб, що був фортецею і місцем культу. Центральним майданом міста була агора.",
          ["акрополь", "фортецею", "культу", "агора"]
        ),
        mark(
          "W starożytnych Atenach wykształcił się ustrój zwany demokracją. Wpływ na władzę mieli obywatele — pełnoletni mężczyźni pochodzący z Aten. Najważniejsze decyzje podejmowano na zgromadzeniu ludowym.",
          ["demokracją", "obywatele", "zgromadzeniu ludowym"],
          "У стародавніх Афінах виник устрій, званий демократією. Вплив на владу мали громадяни — повнолітні чоловіки з Афін. Найважливіші рішення ухвалювали на народних зборах.",
          ["демократією", "громадяни", "народних зборах"]
        ),
        mark(
          "Perykles był mówcą i reformatorem demokratycznych Aten. Wspierał naukę i sztukę. Dziś głosują też kobiety — w Atenach obywatelami byli tylko wolni mężczyźni.",
          ["Perykles"],
          "Перикл був промовцем і реформатором демократичних Афін. Підтримував науку і мистецтво. Сьогодні голосують також жінки — в Афінах громадянами були лише вільні чоловіки.",
          ["Перикл"]
        ),
        mark(
          "Potrafię powiedzieć: Grecy żyli w polis; Ateny miały demokrację na zgromadzeniu ludowym; twarzą Aten był Perykles.",
          ["polis", "demokrację", "Perykles"],
          "Можу сказати: греки жили в полісах; Афіни мали демократію на народних зборах; обличчям Афін був Перикл.",
          ["полісах", "демократію", "Перикл"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: Sparta i wojny z Persami. Inna polis, inny ustrój — i wspólny wróg z Azji.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: Спарта і війни з персами. Інший поліс, інший устрій — і спільний ворог з Азії.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "iv5CEGJPMYY",
        title: {
          pl: "Krótkie Lekcje: Demokratyczne Ateny",
          ua: "Короткі уроки: Демократичні Афіни"
        }
      }
    }
  ]
};
