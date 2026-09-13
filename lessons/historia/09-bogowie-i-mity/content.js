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
      heading: { pl: "Bogowie i mity", ua: "Боги і міфи" },
      formula: "Olimp · Homer",
      text: {
        pl: [
          "Grecy nie mieli jednego boga. Mieli całą rodzinę na Olimpie — i opowieści, które tłumaczyły świat.",
          "Dziś spokojnie, jak przy opowieści: kim byli bogowie, po co świątynie, kim heros, czym Iliada i Odyseja — i co z mitów zostało w naszym języku."
        ],
        ua: [
          "Греки не мали одного бога. Мали цілу родину на Олімпі — і оповіді, які пояснювали світ.",
          "Сьогодні спокійно, як при оповіді: ким були боги, навіщо святині, хто герой, чим Іліада й Одіссея — і що з міфів лишилося в нашій мові."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Czego się nauczysz?", ua: "Чого навчишся?" },
      items: [
        { pl: "powiedzieć, że Grecy byli politeistami i co to znaczy", ua: "сказати, що греки були політеїстами і що це означає" },
        { pl: "wymienić najważniejszych bogów Olimpu i ich „opiekę”", ua: "назвати найважливіших богів Олімпу і їхню «опіку»" },
        { pl: "opisać świątynię i powiedzieć, kim był heros", ua: "описати святиню і сказати, ким був герой" },
        { pl: "odróżnić Iliadę od Odysei i wskazać Homera", ua: "відрізнити Іліаду від Одіссеї і вказати Гомера" }
      ]
    },
    {
      type: "visual",
      heading: { pl: "Wierzenia Greków", ua: "Вірування греків" },
      visual: gh("069", {
        kind: "image-placeholder",
        alt: {
          pl: "Hermes w skrzydlatym hełmie i z kaduceuszem",
          ua: "Гермес у крилатому шоломі з кадуцеєм"
        },
        title: { pl: "Wielu bogów, każdy ma swoją dziedzinę", ua: "Багато богів, кожен має свою ділянку" },
        prompt: {
          pl: "Szkolna ilustracja dla klasy 5, jasne tło, bez grozy. Po prawej przyjazna, kreskówkowa postać Hermesa: brązowa tunika, złoty skrzydlaty kapelusz (petasos), złote skrzydlate sandały, w ręku kaduceusz (laska ze skrzydłami i dwoma wężami — stylizowane, nie straszne). Hermes uśmiecha się, stoi, nie atakuje. Po lewej polskie punkty: „politeiści”; „każdym aspektem życia opiekowało się inne bóstwo”; „nieśmiertelne istoty o ludzkim wyglądzie”; „najważniejsi na górze Olimp”; „uczty, narady i spory”; „ambrozja i nektar”; „czasem pojawiali się wśród ludzi”. Styl podręcznika, dużo powietrza.",
          ua: "Шкільна ілюстрація для 5 класу, без жаху. Праворуч привітний мультяшний Гермес: хітон, крилатий капелюх, крилаті сандалі, кадуцей (не страшний). Ліворуч пункти: політеїсти; кожним аспектом життя опікується інше божество; безсмертні істоти з людським виглядом; найважливіші на Олімпі; амброзія і нектар."
        }
      }),
      text: {
        pl: [
          ["Grecy byli ", em("politeistami"), ": wierzyli w wielu bogów. Każdym kawałkiem życia — wojną, morzem, miłością, rzemiosłem — opiekowało się inne bóstwo."],
          "Bogowie wyglądali jak ludzie, ale byli nieśmiertelni. Najważniejsi mieszkali na górze Olimp: ucztowali, naradzali się i spierali. Nieśmiertelność dawały im ambrozja i nektar.",
          "Czasem schodzili między ludzi. Od bogów zależało — w wierzeniach Greków — zwycięstwo, pokój i zdrowie."
        ],
        ua: [
          ["Греки були ", em("політеїстами"), ": вірили в багатьох богів. Кожним шматком життя — війною, морем, любов’ю, ремеслом — опікувалося інше божество."],
          "Боги виглядали як люди, але були безсмертні. Найважливіші жили на горі Олімп: бенкетували, радились і сперечались. Безсмертя давали амброзія і нектар.",
          "Інколи сходили між людей. Від богів — у віруваннях греків — залежали перемога, мир і здоров’я."
        ]
      },
      task: {
        id: "h09-check1",
        type: "true-false",
        level: "A",
        question: {
          pl: "Starożytni Grecy wierzyli w jednego boga — prawda czy fałsz?",
          ua: "Стародавні греки вірили в одного бога — правда чи неправда?"
        },
        answer: false,
        hint: {
          pl: "Poli- = wielu. To nie religia Izraelitów.",
          ua: "Полі- = багато. Це не релігія ізраїльтян."
        },
        explanation: {
          pl: "Fałsz. Grecy = wielu bogów. Jednego Boga mieli Izraelici.",
          ua: "Неправда. Греки = багато богів. Одного Бога мали ізраїльтяни."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Ci sami bogowie, inne polis", ua: "Ті самі боги, інший поліс" },
      visual: gh("070", {
        kind: "image-placeholder",
        alt: {
          pl: "Grecka świątynia z kolumnami na wzgórzu",
          ua: "Грецька святиня з колонами на пагорбі"
        },
        title: { pl: "Świątynia bóstwa opiekuńczego", ua: "Святиня божества-опікуна" },
        prompt: {
          pl: "Szkolne zdjęcie lub ilustracja dobrze zachowanej greckiej świątyni dla klasy 5: liczne kamienne kolumny na skalistym wzgórzu, jasne niebo, dzień, bez ruiny-horroru. Żółte strzałki z polskim tekstem: „Grecy czcili tych samych bogów”; „każde polis miało swoje bóstwo opiekuńcze”. Spokojny krajobraz, nikt nie walczy. Styl atlasu / podręcznika.",
          ua: "Шкільна світлина грецької святині для 5 класу: колони на пагорбі, день. Підписи: «греки шанували тих самих богів»; «кожен поліс мав своє божество-опікуна». Без жаху."
        }
      }),
      text: {
        pl: [
          "Od Sparty po Ateny Grecy czcili tych samych bogów — Zeusa, Atenę, Posejdona. To spajało Helladę mocniej niż jedno państwo.",
          ["Zarazem ", em("każde polis"), " miało ulubione bóstwo opiekuńcze. Ateny wybrały Atenę: mądrość i miasto pod jej tarczą."]
        ],
        ua: [
          "Від Спарти до Афін греки шанували тих самих богів — Зевса, Афіну, Посейдона. Це єднало Елладу сильніше, ніж одна держава.",
          ["Водночас ", em("кожен поліс"), " мав улюблене божество-опікуна. Афіни обрали Афіну: мудрість і місто під її щитом."]
        ]
      }
    },
    {
      type: "visual",
      heading: { pl: "Najważniejsi bogowie", ua: "Найважливіші боги" },
      visual: gh("071", {
        kind: "image-placeholder",
        alt: {
          pl: "Dziesięć postaci olimpijskich z podpisami",
          ua: "Десять олімпійських постатей з підписами"
        },
        title: { pl: "Olimp i dwie krainy obok", ua: "Олімп і дві країни поряд" },
        prompt: {
          pl: "Szkolna tablica 2×5 kreskówek bogów dla klasy 5, jasne tło, przyjazne twarze, BEZ grozy, BEZ krwi. GÓRA: Atena (hełm, włócznia) „bogini mądrości”; Apollo (lira) „bóg piękna i sztuki”; Zeus (siwa broda, piorun w dłoni, nie ciska) „władca bóstw i ludzi”; Hefajstos (młot, iskra) „bóg ognia i kowali”; Ares (pancerz, tarcza oparta, nie atakuje) „bóg wojny”. DÓŁ: Hera (korona, granatowa szata) „bogini niebios”; Hermes (skrzydlaty kapelusz) „posłaniec bogów”; Hades (spokojna czerwona szata; trzygłowy pies Cerber stylizowany, nie straszny) „władca świata zmarłych”; Posejdon (trójząb, woda do kolan) „władca mórz”; Afrodyta (jasna szata, złote jabłko) „bogini miłości”. Czytelne polskie etykiety. Zeus w środku większy.",
          ua: "Шкільна таблиця 2×5 мультяшних богів для 5 класу, без жаху. Афіна — мудрість; Аполлон — краса і мистецтво; Зевс — володар; Гефест — вогонь; Арес — війна (стоїть, не б’ється); Гера — небеса; Гермес — вісник; Аїд — світ померлих (Цербер не страшний); Посейдон — моря; Афродіта — любов. Читабельні підписи."
        }
      }),
      text: {
        pl: [
          ["Na szczycie ", em("Olimpu"), " mieszkali najważniejsi: ", em("Zeus"), " i ", em("Hera"), " — władcy nieba. ", em("Atena"), " — mądrość, ", em("Afrodyta"), " — miłość, ", em("Apollo"), " — sztuka i piękno, ", em("Ares"), " — wojna."],
          [em("Hades"), " rządził krainą zmarłych (to nie Olimp). ", em("Posejdon"), " — morzami. ", em("Hermes"), " nosił wiadomości, ", em("Hefajstos"), " kował w ogniu."]
        ],
        ua: [
          ["На вершині ", em("Олімпу"), " жили найважливіші: ", em("Зевс"), " і ", em("Гера"), " — володарі неба. ", em("Афіна"), " — мудрість, ", em("Афродіта"), " — любов, ", em("Аполлон"), " — мистецтво і краса, ", em("Арес"), " — війна."],
          [em("Аїд"), " правив країною померлих (це не Олімп). ", em("Посейдон"), " — морями. ", em("Гермес"), " носив вісті, ", em("Гефест"), " кував у вогні."]
        ]
      },
      task: {
        id: "h09-practice",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto według Greków był władcą bogów i ludzi?",
          ua: "Хто за віруваннями греків був володарем богів і людей?"
        },
        options: [
          { id: "a", label: { pl: "Zeus", ua: "Зевс" } },
          { id: "b", label: { pl: "Hades", ua: "Аїд" } },
          { id: "c", label: { pl: "Hermes", ua: "Гермес" } }
        ],
        answer: "a",
        hint: {
          pl: "Piorun i siwa broda. Hades to świat zmarłych.",
          ua: "Блискавка і сива борода. Аїд — світ померлих."
        },
        explanation: {
          pl: "Zeus na Olimpie. Hades — pod ziemią. Hermes — posłaniec.",
          ua: "Зевс на Олімпі. Аїд — під землею. Гермес — вісник."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Jak wyglądały świątynie", ua: "Як виглядали святині" },
      visual: gh("072", {
        kind: "image-placeholder",
        alt: {
          pl: "Akropol: Partenon, Erechtejon, Propyleje, posąg Ateny",
          ua: "Акрополь: Парфенон, Ерехтейон, Пропілеї, статуя Афіни"
        },
        title: { pl: "Okazałe świątynie i posągi", ua: "Величні святині і статуї" },
        prompt: {
          pl: "Szkolna rekonstrukcja ateńskiego Akropolu dla klasy 5, dzień, jasne niebo, bez grozy. Widok wzgórza ze świątyniami: Partenon (duży, kolumny, trójkątny fronton, czerwony dach); Erechtejon (mniejszy, po lewej); Propyleje (brama po prawej). Na dziedzińcu duży spokojny posąg Ateny — stoi, nie grozi. Polskie etykiety z kreskami: Partenon, Erechtejon, Propyleje, posąg bogini Ateny. Dwie strzałki: „okazałe świątynie”; „posągi”. Ludzie mali, w tunikach, idą spokojnie. Styl podręcznika Nowej Ery.",
          ua: "Шкільна реконструкція афінського Акрополя для 5 класу, день, без жаху. Парфенон, Ерехтейон, Пропілеї, спокійна статуя Афіни. Підписи польською як у фільмі. Люди малі, ідуть спокійно."
        }
      }),
      text: {
        pl: [
          "Bogom stawiano okazałe świątynie z kolumnami i posągi. Na ateńskim akropolu widać to jak w atlasie: Partenon, Erechtejon, Propyleje i posąg Ateny.",
          "Świątynia to nie „kościół Greków” w naszym sensie — to dom bóstwa. Kapłani składali ofiary, a miasto pokazywało, że patron czuwa."
        ],
        ua: [
          "Богам ставили величні святині з колонами і статуї. На афінському акрополі це видно як в атласі: Парфенон, Ерехтейон, Пропілеї і статуя Афіни.",
          "Святиня — не «церква греків» у нашому сенсі: це дім божества. Жерці складали пожертви, а місто показувало, що покровитель пильнує."
        ]
      },
      task: {
        id: "h09-src",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Do czego Grecy stawiali świątynie z kolumnami i posągi?",
          ua: "Навіщо греки ставили святині з колонами і статуї?"
        },
        options: [
          { id: "a", label: { pl: "żeby czcić bogów — to był „dom” bóstwa w polis", ua: "щоб шанувати богів — це був «дім» божества в полісі" } },
          { id: "b", label: { pl: "żeby przechowywać pismo klinowe Sumerów", ua: "щоб зберігати клинопис шумерів" } },
          { id: "c", label: { pl: "żeby mieszkał tam tylko król Persji", ua: "щоб там жив лише цар Персії" } }
        ],
        answer: "a",
        hint: {
          pl: "Partenon = świątynia Ateny, nie magazyn gliny.",
          ua: "Парфенон = святиня Афіни, не склад глини."
        },
        explanation: {
          pl: "Świątynia i posąg = kult. Nie archiwum Mezopotamii.",
          ua: "Святиня і статуя = культ. Не архів Месопотамії."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Po co były mity?", ua: "Навіщо були міфи?" },
      text: {
        pl: [
          [em("Mity"), " to historie o bogach (i często o herosach). Nie były „bajką na dobranoc” w naszym sensie — tłumaczyły świat."],
          "Po pierwsze: skąd wzięli się świat i człowiek. Po drugie: czemu piorun, morze, pory roku. Po trzecie: jak należy postępować — odwaga, gościnność, pycha, która źle się kończy.",
          "Dlatego mit warto opowiedzieć głosem: to opowieść z morałem, nie lista dat."
        ],
        ua: [
          [em("Міфи"), " — історії про богів (і часто про героїв). Це не «казка на ніч» у нашому сенсі — вони пояснювали світ."],
          "По-перше: звідки взялися світ і людина. По-друге: чому блискавка, море, пори року. По-третє: як треба чинити — відвага, гостинність, пиха, яка погано кінчається.",
          "Тому міф варто розповісти голосом: це оповідь із наукою, не список дат."
        ]
      },
      task: {
        id: "h09-guided",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Do czego służyły mity?",
          ua: "Навіщо служили міфи?"
        },
        options: [
          { id: "a", label: { pl: "wyjaśniały pochodzenie świata, zjawiska i uczyły, jak postępować", ua: "пояснювали походження світу, явища і вчили, як чинити" } },
          { id: "b", label: { pl: "były tylko spisem podatków w Sparcie", ua: "були лише списком податків у Спарті" } },
          { id: "c", label: { pl: "zastępowały alfabet Fenicjan", ua: "заміняли абетку фінікійців" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy funkcje ze slajdu: świat, zjawiska, zachowanie.",
          ua: "Три функції зі слайда: світ, явища, поведінка."
        },
        explanation: {
          pl: "Mit = opowieść, która tłumaczy i uczy. Nie urząd skarbowy.",
          ua: "Міф = оповідь, яка пояснює і вчить. Не податкова."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Herosi", ua: "Герої" },
      visual: gh("073", {
        kind: "image-placeholder",
        alt: {
          pl: "Herakles ze maczugą przy hydrze — kreskówka, bez grozy",
          ua: "Геракл із булавою біля гідри — мульт, без жаху"
        },
        title: { pl: "Półbóg: jeden rodzic bóg, drugi człowiek", ua: "Напівбог: один батько бог, другий людина" },
        prompt: {
          pl: "Szkolna kreskówka dla klasy 5, BEZ grozy, BEZ krwi, NIE horror. Muskularny, przyjazny Herakles w brązowej tunice (nie nagi), drewniana maczuga oparta, stoi obok zielonej wielogłowej hydry narysowanej jak smok z bajki — głowy odchylone, nikt nie rani. Dzień, skały, jasne niebo. Polski podpis: „Herakles, syn Zeusa — wykonał 12 trudnych prac”. Punkty obok: półbogowie; uroda i nadludzka siła; śmiertelni; słynęli z czynów; czasem wstępowali na Olimp. Styl bajki edukacyjnej.",
          ua: "Шкільна мультяшна ілюстрація для 5 класу, БЕЗ жаху, БЕЗ крові. Геракл у хітоні (не голий) стоїть біля гідри як у казці — ніхто не ранить. Підпис: «Геракл, син Зевса — виконав 12 трудних робіт». Пункти: напівбоги; сила; смертні; інколи всходили на Олімп."
        }
      }),
      text: {
        pl: [
          [em("Herosi"), " to półbogowie: jeden rodzic był bogiem, drugi człowiekiem. Wyróżniali się urodą i nadludzką siłą, ale byli śmiertelni."],
          "Słynęli z bohaterskich czynów. Czasem — w opowieści — wstępowali na Olimp i stawali się nieśmiertelni.",
          ["Najsłynniejszy przykład: ", em("Herakles"), ", syn Zeusa, wykonał dwanaście trudnych prac. W Zapamiętaj dołączymy też Achillesa."]
        ],
        ua: [
          [em("Герої"), " — напівбоги: один батько був богом, другий людиною. Вирізнялися вродою і надлюдською силою, але були смертні."],
          "Славилися героїчними вчинками. Інколи — в оповіді — всходили на Олімп і ставали безсмертні.",
          ["Найславетніший приклад: ", em("Геракл"), ", син Зевса, виконав дванадцять трудних робіт. У «Запам’ятай» долучимо й Ахілла."]
        ]
      },
      task: {
        id: "h09-extra",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywamy półboga, którego jeden rodzic był bogiem, a drugi człowiekiem?",
          ua: "Як називаємо напівбога, в якого один батько був богом, а другий людиною?"
        },
        answer: ["heros", "herosi", "herosa", "герой", "герої", "героя", "herosie"],
        hint: {
          pl: "Herakles jest przykładem.",
          ua: "Геракл є прикладом."
        },
        explanation: {
          pl: "Heros. Nie pełny bóg z Olimpu — śmiertelny, ale niezwykły.",
          ua: "Герой. Не повний бог з Олімпу — смертний, але незвичайний."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Od śpiewu do księgi", ua: "Від співу до книги" },
      timelineId: "polis",
      formula: "VIII w. p.n.e.",
      visual: gh("074", {
        kind: "image-placeholder",
        alt: {
          pl: "Wędrowny śpiewak z chłopcem i psem; dwie księgi: Iliada i Odyseja",
          ua: "Мандрівний співець із хлопцем і псом; дві книги: Іліада й Одіссея"
        },
        title: { pl: "Najpierw usta, potem pismo — Homer", ua: "Спочатку вуста, потім письмо — Гомер" },
        prompt: {
          pl: "Szkolna ilustracja dla klasy 5, dzień, bez grozy. LEWA: spokojny starszy mężczyzna w białej szacie (wędrowny śpiewak / Homer) idzie drogą z chłopcem w niebieskiej tunice; koszyk, duży przyjazny pies — nie scena biedy-horroru. PRAWA: dwie duże księgi lub zwoje z napisami „Iliada” i „Odyseja”, etykieta „VIII wiek p.n.e. — spisano dwa wielkie dzieła”. Punkty: początkowo mity przekazywano ustnie; wędrowni śpiewacy. Ciepłe światło, styl podręcznika.",
          ua: "Шкільна ілюстрація для 5 класу, день, без жаху. Ліворуч мандрівний співець / Гомер іде з хлопцем і привітним псом. Праворуч дві книги: «Іліада» і «Одіссея», етикетка «VIII ст. до н.е.». Пункти: спочатку усно; мандрівні співці."
        }
      }),
      text: {
        pl: [
          "Na początku mity żyły w głosie. Wędrowni śpiewacy opowiadali je z miasta do miasta — tak samo jak ty opowiadasz historię koledze.",
          ["W ", em("VIII wieku p.n.e."), " spisano dwa wielkie dzieła: ", em("Iliadę"), " i ", em("Odyseję"), ". Przypisuje się je ", em("Homerowi"), " — poecie, o którym wiemy niewiele, a pieśni zostały."]
        ],
        ua: [
          "Спочатку міфи жили в голосі. Мандрівні співці несли їх з міста до міста — так само, як ти розповідаєш історію другові.",
          ["У ", em("VIII столітті до н.е."), " записали два великі твори: ", em("Іліаду"), " і ", em("Одіссею"), ". Їх приписують ", em("Гомеру"), " — поетові, про якого знаємо мало, а пісні лишилися."]
        ]
      },
      task: {
        id: "h09-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Komu przypisujemy Iliadę i Odyseję?",
          ua: "Кому приписуємо Іліаду й Одіссею?"
        },
        answer: ["homerowi", "homer", "homera", "гомеру", "гомер", "гомера"],
        hint: {
          pl: "Wędrowny śpiewak, VIII wiek p.n.e.",
          ua: "Мандрівний співець, VIII століття до н.е."
        },
        explanation: {
          pl: "Homer. Dzieła spisano w VIII w. p.n.e.",
          ua: "Гомер. Твори записали в VIII ст. до н.е."
        }
      }
    },
    {
      type: "visual",
      heading: { pl: "Iliada i Odyseja", ua: "Іліада й Одіссея" },
      visual: gh("075", {
        kind: "image-placeholder",
        alt: {
          pl: "Dwa kadry: drewniany koń trojański i statek Odyseusza na morzu",
          ua: "Два кадри: дерев’яний троянський кінь і корабель Одіссея на морі"
        },
        title: { pl: "Wojna o Troję i droga do domu", ua: "Війна за Трою і дорога додому" },
        prompt: {
          pl: "Szkolna dwuklatka dla klasy 5, dzień, BEZ walki wręcz, BEZ krwi, BEZ grozy. LEWA, podpis „Iliada”: wielki drewniany koń na placu z kolumnami, ludzie w tunikach ciągną go linami — jak procesja, nie szturm; nikt nie ginie. PRAWA, podpis „Odyseja”: drewniana galera z wiosłami na błękitnym morzu przy skalistym brzegu, mała postać na dziobie w płaszczu patrzy ku horyzontowi — podróż, nie bitwa. Żadnego cyklopa rzucającego skałą. Etykiety polskie. Styl podręcznika, jasne kolory.",
          ua: "Шкільна двокадрова ілюстрація для 5 класу, БЕЗ рукопашного бою, БЕЗ крові. Ліворуч «Іліада»: дерев’яний кінь, люди тягнуть лінвами — процесія, не штурм. Праворуч «Одіссея»: галера на морі, подорож, не битва. Жодного циклопа зі скелею."
        }
      }),
      text: {
        pl: [
          [em("Iliada"), " opowiada o wojnie o Troję. Grecy długo nie mogli zdobyć miasta. W micie pojawia się drewniany koń: podstęp, nie opis rzezi — o tym mówimy krótko."],
          [em("Odyseja"), " to wędrówka Odyseusza do domu po wojnie. Morze, wyspy, tęsknota za Itaką. Spotyka dziwy (nawet cyklopa) — ale w klasie 5 zostawiamy obraz drogi, nie strachu."],
          "Dwa poematy = dwa pytania: jak kończy się wojna i jak wraca się do domu."
        ],
        ua: [
          [em("Іліада"), " розповідає про війну за Трою. Греки довго не могли взяти місто. У міфі з’являється дерев’яний кінь: хитрість, не опис різанини — про це говоримо коротко."],
          [em("Одіссея"), " — мандри Одіссея додому після війни. Море, острови, туга за Ітакою. Він зустрічає дива (навіть циклопа) — але в 5 класі лишаємо образ дороги, не страху."],
          "Два поеми = два питання: як кінчається війна і як повертаються додому."
        ]
      },
      task: {
        id: "h09-logic",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Czym różni się Iliada od Odysei?",
          ua: "Чим Іліада відрізняється від Одіссеї?"
        },
        options: [
          { id: "a", label: { pl: "Iliada — wojna trojańska; Odyseja — wędrówki Odyseusza do domu", ua: "Іліада — троянська війна; Одіссея — мандри Одіссея додому" } },
          { id: "b", label: { pl: "Iliada jest o Sparcie, Odyseja o piramidach Egiptu", ua: "Іліада про Спарту, Одіссея про піраміди Єгипту" } },
          { id: "c", label: { pl: "obie napisał Perykles w Sejmie", ua: "обидві написав Перикл у Сеймі" } }
        ],
        answer: "a",
        hint: {
          pl: "Koń trojański vs długa droga morzem.",
          ua: "Троянський кінь проти довгої дороги морем."
        },
        explanation: {
          pl: "Homer: wojna (Iliada) i powrót (Odyseja).",
          ua: "Гомер: війна (Іліада) і повернення (Одіссея)."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "Mity dziś", ua: "Міфи сьогодні" },
      text: {
        pl: [
          "Mity nie skończyły się w VIII wieku. Zostały w języku i w kulturze — dlatego historia jest przedmiotem ustnym: opowiadamy dalej.",
          "Igrzyska olimpijskie biorą nazwę z Olimpii. Planety noszą imiona bogów (Mars, Neptun). Mówimy „siła Herkulesa”, „pięta Achillesa”, „nitka Ariadny”.",
          "Filmy, książki i gry wracają do Odyseusza i herosów. Warto znać źródło — wtedy widać, skąd wzięła się opowieść."
        ],
        ua: [
          "Міфи не скінчилися в VIII столітті. Лишилися в мові і культурі — тому історія є усним предметом: ми розповідаємо далі.",
          "Олімпійські ігри беруть назву з Олімпії. Планети носять імена богів (Марс, Нептун). Кажемо «сила Геракла», «п’ята Ахілла».",
          "Фільми, книжки і ігри повертаються до Одіссея і героїв. Варто знати джерело — тоді видно, звідки взялася оповідь."
        ]
      }
    },
    {
      type: "algorithm",
      heading: { pl: "Trzy warstwy opowieści", ua: "Три шари оповіді" },
      reveal: true,
      steps: [
        {
          formula: "1. BOGOWIE",
          text: {
            pl: "Olimp, dziedziny życia, świątynia w polis.",
            ua: "Олімп, ділянки життя, святиня в полісі."
          }
        },
        {
          formula: "2. HEROSI",
          text: {
            pl: "Półbogowie — Herakles, Achilles; czyny, śmierć albo Olimp.",
            ua: "Напівбоги — Геракл, Ахілл; вчинки, смерть або Олімп."
          }
        },
        {
          formula: "3. POEMATY",
          text: {
            pl: "Ustnie → VIII w. p.n.e. → Homer: Iliada i Odyseja.",
            ua: "Усно → VIII ст. до н.е. → Гомер: Іліада й Одіссея."
          }
        }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Słownik historyczny", ua: "Історичний словник" },
      rows: [
        { pl: "politeiści — wiara w wielu bogów", ua: "політеїсти — віра в багатьох богів" },
        { pl: "Olimp — góra, siedziba najważniejszych bogów", ua: "Олімп — гора, оселя найважливіших богів" },
        { pl: "mit — opowieść o bogach i herosach; tłumaczy świat i uczy", ua: "міф — оповідь про богів і героїв; пояснює світ і вчить" },
        { pl: "heros — półbóg (bóg + człowiek), śmiertelny, sławny z czynów", ua: "герой — напівбог (бог + людина), смертний, славний вчинками" },
        { pl: "Homer — poeta, któremu przypisujemy Iliadę i Odyseję", ua: "Гомер — поет, якому приписуємо Іліаду й Одіссею" }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Zrób razem ze mną", ua: "Зроби разом зі мною" },
      text: {
        pl: [
          "Powiedz na głos: „Atena to mądrość, Posejdon to morze”. Potem wybierz, kto rządzi krainą zmarłych — to nie Olimp."
        ],
        ua: [
          "Скажи вголос: «Афіна — мудрість, Посейдон — море». Потім вибери, хто править країною померлих — це не Олімп."
        ]
      },
      task: {
        id: "h09-map",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Kto według Greków rządził krainą zmarłych?",
          ua: "Хто за віруваннями греків правив країною померлих?"
        },
        options: [
          { id: "a", label: { pl: "Hades", ua: "Аїд" } },
          { id: "b", label: { pl: "Apollo", ua: "Аполлон" } },
          { id: "c", label: { pl: "Afrodyta", ua: "Афродіта" } }
        ],
        answer: "a",
        hint: {
          pl: "Nie mieszkał na Olimpie z Zeusem.",
          ua: "Не жив на Олімпі зі Зевсом."
        },
        explanation: {
          pl: "Hades — świat zmarłych. Posejdon — morze. Zeus — niebo.",
          ua: "Аїд — світ померлих. Посейдон — море. Зевс — небо."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Znajdź błąd w opowieści", ua: "Знайди помилку в оповіді" },
      claim: {
        pl: "„Heros to pełny bóg z Olimpu, a Iliadę napisał Perykles o demokracji w Atenach.”",
        ua: "«Герой — це повний бог з Олімпу, а Іліаду написав Перикл про демократію в Афінах.»"
      },
      text: {
        pl: [
          "Heros = półbóg, śmiertelny. Iliada = wojna trojańska, Homer — nie mowa Peryklesa na zgromadzeniu."
        ],
        ua: [
          "Герой = напівбог, смертний. Іліада = троянська війна, Гомер — не промова Перикла на зборах."
        ]
      }
    },
    {
      type: "problem",
      heading: { pl: "Odpowiedź ustna", ua: "Усна відповідь" },
      prompt: {
        pl: "Opowiedz w 3–4 zdaniach, czym różni się bóg olimpijski od herosa. Powiedz na głos, potem wybierz podsumowanie.",
        ua: "Розкажи в 3–4 реченнях, чим олімпійський бог відрізняється від героя. Скажи вголос, потім вибери підсумок."
      },
      text: {
        pl: [
          "Podpowiedź: nieśmiertelność, Olimp, rodzice, czyny, Herakles."
        ],
        ua: [
          "Підказка: безсмертя, Олімп, батьки, вчинки, Геракл."
        ]
      },
      task: {
        id: "h09-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie najlepiej odróżnia boga od herosa?",
          ua: "Яке речення найкраще відрізняє бога від героя?"
        },
        options: [
          { id: "a", label: { pl: "Bogowie są nieśmiertelni i mieszkają na Olimpie; heros ma jednego rodzica-człowieka i jest śmiertelny", ua: "Боги безсмертні і живуть на Олімпі; герой має одного батька-людину і є смертний" } },
          { id: "b", label: { pl: "Heros to inna nazwa Zeusa, a bóg to helota ze Sparty", ua: "Герой — інша назва Зевса, а бог — гелот зі Спарти" } },
          { id: "c", label: { pl: "Nie ma różnicy: wszyscy byli posłami w Sejmie", ua: "Немає різниці: усі були послами в Сеймі" } }
        ],
        answer: "a",
        hint: {
          pl: "Pół-bóg = pół człowiek.",
          ua: "Напівбог = напів людина."
        },
        explanation: {
          pl: "Olimp i nektar vs śmiertelny syn boga i człowieka.",
          ua: "Олімп і нектар проти смертного сина бога і людини."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Kto z kim?", ua: "Хто з ким?" },
      task: {
        id: "h09-check2",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Które zestawienie jest poprawne?",
          ua: "Яке поєднання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "Atena — mądrość; Posejdon — morza; Homer — Iliada i Odyseja", ua: "Афіна — мудрість; Посейдон — моря; Гомер — Іліада й Одіссея" } },
          { id: "b", label: { pl: "Hades — igrzyska olimpijskie; Apollo — heloci", ua: "Аїд — олімпійські ігри; Аполлон — гелоти" } },
          { id: "c", label: { pl: "Iliada — wędrówka do Itaki; Odyseja — tylko Partenon", ua: "Іліада — мандри до Ітаки; Одіссея — лише Парфенон" } }
        ],
        answer: "a",
        hint: {
          pl: "Odyseja = droga do domu. Iliada = Troja.",
          ua: "Одіссея = дорога додому. Іліада = Троя."
        },
        explanation: {
          pl: "Dziedziny bogów + dwa poematy Homera.",
          ua: "Ділянки богів + дві поеми Гомера."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Starożytni Grecy wierzyli w wielu bogów opiekujących się różnymi dziedzinami życia.",
          ["wielu bogów", "dziedzinami życia"],
          "Стародавні греки вірили в багатьох богів, які опікувалися різними ділянками життя.",
          ["багатьох богів", "ділянками життя"]
        ),
        mark(
          "Według wierzeń Greków najważniejsi bogowie mieszkali na szczycie góry Olimp. Wśród nich: Zeus i Hera — władcy nieba, Atena — bogini mądrości, Afrodyta — bogini miłości, Apollo — opiekun sztuki, Ares — bóg wojny. Krainą zmarłych rządził Hades, a władcą mórz był Posejdon.",
          ["Olimp", "Zeus", "Hera", "Atena", "Afrodyta", "Apollo", "Ares", "Hades", "Posejdon"],
          "За віруваннями греків найважливіші боги жили на вершині гори Олімп. Серед них: Зевс і Гера — володарі неба, Афіна — богиня мудрості, Афродіта — богиня любові, Аполлон — опікун мистецтва, Арес — бог війни. Країною померлих правив Аїд, а володарем морів був Посейдон.",
          ["Олімп", "Зевс", "Гера", "Афіна", "Афродіта", "Аполлон", "Арес", "Аїд", "Посейдон"]
        ),
        mark(
          "Oprócz bogów Grecy czcili herosów — ludzi, których jeden z rodziców był bogiem. Najsłynniejsi herosi to Herakles i Achilles. Czyny bogów i herosów opisują mity: tłumaczyły zjawiska świata i dawały wzory postępowania.",
          ["herosów", "Herakles", "Achilles", "mity"],
          "Окрім богів греки шанували героїв — людей, у яких один із батьків був богом. Найславетніші герої — Геракл і Ахілл. Вчинки богів і героїв описують міфи: вони пояснювали явища світу і давали взірці поведінки.",
          ["героїв", "Геракл", "Ахілл", "міфи"]
        ),
        mark(
          "Najsłynniejsze dzieła literackie starożytnej Grecji to Iliada (o wojnie trojańskiej) i Odyseja (o wędrówkach Odyseusza). Ich autorstwo przypisuje się Homerowi.",
          ["Iliada", "wojnie trojańskiej", "Odyseja", "Odyseusza", "Homerowi"],
          "Найславетніші літературні твори стародавньої Греції — Іліада (про троянську війну) і Одіссея (про мандри Одіссея). Їхнє авторство приписують Гомеру.",
          ["Іліада", "троянську війну", "Одіссея", "Одіссея", "Гомеру"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "Następna lekcja: kultura starożytnej Grecji. Teatr, igrzyska i filozofowie — mity zejdą ze świątyni na scenę i stadion.",
          "Jeśli chcesz powtórzyć lekcję głosem nauczyciela — obejrzyj film Krótkich Lekcji."
        ],
        ua: [
          "Наступний урок: культура стародавньої Греції. Театр, ігри і філософи — міфи зійдуть зі святині на сцену і стадіон.",
          "Якщо хочеш повторити урок голосом учителя — подивись фільм Коротких уроків."
        ]
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "1hIloSugaJ8",
        title: {
          pl: "Krótkie Lekcje: Bogowie i mity",
          ua: "Короткі уроки: Боги і міфи"
        }
      }
    }
  ]
};
