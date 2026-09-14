function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE = "Styl: miniatura średniowieczna jak w podręczniku GWO «Między nami» klasa 5 — złote tło, czarny tuszowy kontur, płaskie barwy (czerwień, zieleń, błękit, ochra), bez perspektywy, zero napisów na kadrze, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    // 1
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 34–36  ·  Księga Rodzaju  ·  Biblia Tysiąclecia",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec, nie lista życzeń. Polski tekst Biblii jest pierwszy. Włącz 🇺🇦 — pod akapitem pojawi się ukraińskie tłumaczenie. Glosy z pól i klucze są schowane.",
        ua: "Це перевірка наприкінці. Польський текст Біблії перший. Увімкни 🇺🇦 — під абзацом буде переклад. Глоси з полів і ключі сховані."
      },
      items: [
        { pl: "powiem, czym jest *księga*, *rozdział* i *werset*;", ua: "скажу, що таке *книга*, *розділ* і *вірш*;" },
        { pl: "ułożę *plan* sześciu dni stwarzania;", ua: "складу *план* шести днів творення;" },
        { pl: "wyjaśnię glosy: *sklepienie*, *niewiasta*;", ua: "поясню глоси: *sklepienie*, *niewiasta*;" },
        { pl: "wskażę powtarzające się zdania (wieczór i poranek; Bóg widział, że były dobre);", ua: "вкажу речення, що повторюються (вечір і ранок; Бог бачив, що було добре);" },
        { pl: "odróżnię ten opis od mitu greckiego z lekcji 14.", ua: "відрізню цей опис від грецького міфу з уроку 14." }
      ],
      task: {
        id: "t15-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ułożyć etapy: sześć dni stwarzania.", ua: "Скласти етапи: шість днів творення." } },
          { id: "b", label: { pl: "Wiedzieć, co to werset i rozdział.", ua: "Знати, що таке вірш і розділ." } },
          { id: "c", label: { pl: "Tylko dyktando z rz niewymiennym.", ua: "Лише диктант з rz незмінним." } },
          { id: "d", label: { pl: "Wyjaśnić sklepienie i niewiasta z pól.", ua: "Пояснити sklepienie і niewiasta з полів." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę „Po tej lekcji umiem”. Czy jest tam dyktando?",
          ua: "Подивись на список «Після уроку вмію». Чи є там диктант?"
        },
        explanation: {
          pl: "Dziś: Biblia, dni stwarzania, werset, glosy. Rz było na lekcjach 7–8.",
          ua: "Сьогодні: Біблія, дні творення, вірш, глоси. rz було на уроках 7–8."
        }
      }
    },
    // 2
    {
      type: "concept",
      heading: { pl: "Jak oznaczamy Biblię?", ua: "Як позначаємо Біблію?" },
      formula: "s. 34  ·  księga · rozdział · werset",
      promptPlace: "before",
      prompt: {
        pl: "Ramka z podręcznika. Zapamiętaj trzy słowa: księga, rozdział, werset. Duża cyfra przy kolumnie to *rozdział*. Mała cyfra przy zdaniu to *werset*.",
        ua: "Рамка з підручника. Запам’ятай три слова: книга, розділ, вірш. Велика цифра — *розділ*. Мала цифра біля речення — *вірш*."
      },
      text: {
        pl: "Biblijny tekst jest podzielony na **księgi**, które składają się z **rozdziałów**. W rozdziałach wyodrębniono **wersety**.",
        ua: "Біблійний текст поділено на **книги** (*księgi*), які складаються з **розділів**. У розділах виокремлено **вірші** (*wersety*)."
      },
      items: [
        { pl: "Ten fragment: pierwsza księga Starego Testamentu — *Księga Rodzaju* (początki świata i człowieka).", ua: "Цей уривок: перша книга Старого Завіту — *Księga Rodzaju* (початки світу і людини)." },
        { pl: "Duża cyfra *1* = rozdział pierwszy. Mała cyfra *3* = werset trzeci: «Niechaj się stanie światłość!»", ua: "Велика цифра *1* = розділ перший. Мала цифра *3* = вірш третій: «Нехай станеться світло!»" }
      ],
      task: {
        id: "t15-s02-oznaczenia",
        type: "single-choice",
        question: {
          pl: "Co w tym fragmencie oznacza mała cyfra przy zdaniu (np. 3, 6, 27)?",
          ua: "Що в цьому уривку означає мала цифра біля речення (напр. 3, 6, 27)?"
        },
        options: [
          { id: "a", label: { pl: "Numer wersetu.", ua: "Номер вірша." } },
          { id: "b", label: { pl: "Numer rozdziału.", ua: "Номер розділу." } },
          { id: "c", label: { pl: "Numer strony podręcznika.", ua: "Номер сторінки підручника." } }
        ],
        answer: "a",
        hint: {
          pl: "Podręcznik rysuje strzałkę: mała cyfra = numer wersetu. Duża 1 = rozdział.",
          ua: "Підручник: мала цифра = номер вірша. Велика 1 = розділ."
        },
        explanation: {
          pl: "Duża 1 to rozdział. Małe cyfry przy zdaniach to wersety. Strona 34 to strona podręcznika, nie Biblii.",
          ua: "Велика 1 — розділ. Малі цифри — вірші. Сторінка 34 — сторінка підручника."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Iluminacja · sześć dni", ua: "Ілюмінація · шість днів" },
      formula: "s. 34  ·  ilustracja",
      visual: vizGh("t15-iluminacja.png", {
        alt: {
          pl: "Sześć średniowiecznych kadrów: stwarzanie świata dzień po dniu",
          ua: "Шість середньовічних кадрів: творення світу день за днем"
        },
        title: { pl: "Slajd · iluminacja ze s. 34", ua: "Слайд · ілюмінація зі с. 34" },
        prompt: {
          pl: IMG_STYLE + " Wstaw pionowy pasek sześciu kadrów ze s. 34 (jak w średniowiecznej Biblii). Od góry: 1) Bóg w mandorli nad ciemnymi wodami, oddziela światłość; 2) sklepienie / niebo między wodami; 3) ląd, drzewa, woda; 4) słońce, księżyc, gwiazdy na złotym tle; 5) ptaki i ryby; 6) zwierzęta lądowe i para ludzi. Czarna ramka między kadrami. Przytnij znak wodny. PNG pionowy.",
          ua: "Шість кадрів зі с. 34: світло, небо, земля і рослини, світила, птахи й риби, звірі і люди. Середньовічна мініатюра, без водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "To nie zdjęcie z kosmosu — to stara ilustracja biblijna. Palcem od góry: który kadr to który dzień? Potem zadanie.",
        ua: "Це не фото з космосу — стара біблійна ілюстрація. Пальцем згори: який кадр — який день?"
      },
      text: {
        pl: [
          "Fragment: *Świat stworzony przez Boga*. Źródło na końcu: Księga Rodzaju, Biblia Tysiąclecia.",
          "Ilustracja pomaga zobaczyć kolejne etapy — ten sam porządek, co w tekście."
        ],
        ua: [
          "Уривок: *Світ, створений Богом*. Джерело в кінці: Книга Буття, Biblia Tysiąclecia.",
          "Ілюстрація показує наступні етапи — той самий порядок, що в тексті."
        ]
      },
      task: {
        id: "t15-s03-iluminacja",
        type: "single-choice",
        question: {
          pl: "Który kadr iluminacji NA PEWNO odpowiada dniowi czwartemu?",
          ua: "Який кадр ілюмінації НАПЕВНО відповідає четвертому дню?"
        },
        options: [
          { id: "a", label: { pl: "Słońce, księżyc i gwiazdy na sklepieniu.", ua: "Сонце, місяць і зорі на небосхилі." } },
          { id: "b", label: { pl: "Tylko para ludzi bez zwierząt i bez nieba.", ua: "Лише пара людей без звірів і без неба." } },
          { id: "c", label: { pl: "Komiks PYK! z lekcji 12.", ua: "Комікс PYK! з уроку 12." } }
        ],
        answer: "a",
        hint: {
          pl: "Dzień czwarty w tekście: ciała niebieskie. Który pasek to pokazuje?",
          ua: "Четвертий день у тексті: небесні тіла. Яка смужка це показує?"
        },
        explanation: {
          pl: "Dzień 4: dwa duże ciała jaśniejące i gwiazdy. Ludzie to dzień 6. PYK! to inna lekcja.",
          ua: "День 4: два великі світила і зорі. Люди — день 6. PYK! — інший урок."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień pierwszy", ua: "Читаємо · день перший" },
      formula: "Rdz 1, 1–5",
      promptPlace: "before",
      prompt: {
        pl: "Czytaj na głos. Werset 1 zaczyna rozdział. Włącz 🇺🇦, jeśli chcesz tłumaczenie pod akapitem.",
        ua: "Читай уголос. Вірш 1 починає розділ. Увімкни 🇺🇦 — переклад під абзацом."
      },
      text: {
        pl: [
          "*1* Na początku Bóg stworzył niebo i ziemię. *2* Ziemia zaś była bezładem i pustkowiem: ciemność była nad powierzchnią bezmiaru wód, a Duch Boży unosił się nad wodami. *3* Wtedy Bóg rzekł: «Niechaj się stanie światłość!» I stała się światłość. *4* Bóg widząc, że światłość jest dobra, oddzielił ją od ciemności. *5* I nazwał Bóg światłość dniem, a ciemność nazwał nocą.",
          "I tak upłynął wieczór i poranek – dzień pierwszy."
        ],
        ua: [
          "1 На початку Бог створив небо і землю. 2 Земля ж була безладом і пустелею: темрява була над поверхнею безміру вод, а Дух Божий ширяв над водами. 3 Тоді Бог сказав: «Нехай станеться світло!» І сталося світло. 4 Бог, бачачи, що світло добре, відділив його від темряви. 5 І назвав Бог світло днем, а темряву назвав ніччю.",
          "І так минув вечір і ранок — день перший."
        ]
      },
      task: {
        id: "t15-s04-dzien1",
        type: "single-choice",
        question: {
          pl: "Co Bóg oddziela w dniu pierwszym?",
          ua: "Що Бог відділяє в першому дні?"
        },
        options: [
          { id: "a", label: { pl: "Światłość od ciemności (dzień i noc).", ua: "Світло від темряви (день і ніч)." } },
          { id: "b", label: { pl: "Ryby od ptaków.", ua: "Риб від птахів." } },
          { id: "c", label: { pl: "Olimp od Hadesu.", ua: "Олімп від Аїду." } }
        ],
        answer: "a",
        hint: {
          pl: "Werset 4–5. Jakie dwa słowa nazywa Bóg?",
          ua: "Вірш 4–5. Які два слова називає Бог?"
        },
        explanation: {
          pl: "W. 4–5: światłość = dzień, ciemność = noc. Ryby to dzień 5. Olimp to lekcja 14.",
          ua: "В. 4–5: світло = день, темрява = ніч. Риби — день 5. Олімп — урок 14."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień drugi", ua: "Читаємо · день другий" },
      formula: "Rdz 1, 6–8  ·  glosa: sklepienie",
      promptPlace: "before",
      prompt: {
        pl: "Tu jest glosa z pola: *sklepienie – tu: niebo*. Czytaj słowa Boga w cudzysłowie wyraźniej.",
        ua: "Тут глоса з поля: *sklepienie – тут: небо*. Слова Бога в лапках читай виразніше."
      },
      text: {
        pl: [
          "*6* A potem Bóg rzekł: «Niechaj powstanie sklepienie w środku wód i niechaj ono oddzieli jedne wody od drugich!» *7* Uczyniwszy to sklepienie, Bóg oddzielił wody pod sklepieniem od wód ponad sklepieniem; a gdy tak się stało, *8* Bóg nazwał to sklepienie niebem.",
          "I tak upłynął wieczór i poranek – dzień drugi."
        ],
        ua: [
          "6 А потім Бог сказав: «Нехай постане склепіння посеред вод і нехай воно відділить одні води від других!» 7 Зробивши це склепіння, Бог відділив води під склепінням від вод понад склепінням; а коли так сталося, 8 Бог назвав це склепіння небом.",
          "І так минув вечір і ранок — день другий."
        ]
      },
      task: {
        id: "t15-s05-dzien2",
        type: "true-false",
        question: {
          pl: "Czy w tym tekście sklepienie znaczy to samo co niebo?",
          ua: "Чи в цьому тексті sklepienie означає те саме, що небо?"
        },
        answer: true,
        hint: {
          pl: "Werset 8 i glosa z pola: sklepienie – tu: …",
          ua: "Вірш 8 і глоса з поля: sklepienie – тут: …"
        },
        explanation: {
          pl: "Bóg nazwał sklepienie niebem. Pole: sklepienie – tu: niebo. „Tu” = w tym tekście.",
          ua: "Бог назвав склепіння небом. Поле: sklepienie – тут: небо."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień trzeci", ua: "Читаємо · день третій" },
      formula: "Rdz 1, 9–13",
      promptPlace: "before",
      prompt: {
        pl: "Dwa kroki w jednym dniu: najpierw suchy ląd i morze, potem rośliny. Zauważ zdanie: Bóg widział, że były dobre.",
        ua: "Два кроки в одному дні: спочатку суша і море, потім рослини. Зверни увагу: Бог бачив, що було добре."
      },
      text: {
        pl: [
          "*9* A potem Bóg rzekł: «Niechaj zbiorą się wody spod nieba w jedno miejsce i niech się ukaże powierzchnia sucha!» A gdy tak się stało, *10* Bóg nazwał tę suchą powierzchnię ziemią, a zbiorowisko wód nazwał morzem. Bóg, widząc, że były dobre, *11* rzekł: «Niechaj ziemia wyda rośliny zielone: trawy dające nasiona, drzewa owocowe rodzące na ziemi według swego gatunku owoce, w których są nasiona». I stało się tak. *12* Ziemia wydała rośliny zielone: trawę dającą nasienie według swego gatunku i drzewa rodzące owoce, w których było nasienie według ich gatunków. A Bóg widział, że były dobre.",
          "*13* I tak upłynął wieczór i poranek – dzień trzeci."
        ],
        ua: [
          "9 А потім Бог сказав: «Нехай зберуться води спопід неба в одне місце і нехай з’явиться суха поверхня!» А коли так сталося, 10 Бог назвав ту суху поверхню землею, а збір вод назвав морем. Бог, бачачи, що було добре, 11 сказав: «Нехай земля видасть зелені рослини: трави, що дають насіння, дерева плодові, що родять на землі за своїм родом плоди, в яких є насіння». І сталося так. 12 Земля видала зелені рослини: траву, що дає насіння за своїм родом, і дерева, що родять плоди, в яких було насіння за їхніми родами. А Бог бачив, що було добре.",
          "13 І так минув вечір і ранок — день третій."
        ]
      },
      task: {
        id: "t15-s06-dzien3",
        type: "multiple-choice",
        question: {
          pl: "Co powstaje w dniu trzecim? Zaznacz wszystkie pewne.",
          ua: "Що постає в третьому дні? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Sucha powierzchnia nazwana ziemią i morze.", ua: "Суха поверхня, названа землею, і море." } },
          { id: "b", label: { pl: "Rośliny zielone: trawy i drzewa z nasionami.", ua: "Зелені рослини: трави і дерева з насінням." } },
          { id: "c", label: { pl: "Człowiek na obraz Boga.", ua: "Людина на образ Бога." } },
          { id: "d", label: { pl: "Słońce i księżyc.", ua: "Сонце і місяць." } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Człowiek i słońce są w INNYCH dniach. Których?",
          ua: "Людина і сонце — в ІНШИХ днях. У яких?"
        },
        explanation: {
          pl: "Dzień 3: ląd, morze, rośliny. Słońce — dzień 4. Człowiek — dzień 6.",
          ua: "День 3: суша, море, рослини. Сонце — день 4. Людина — день 6."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień czwarty", ua: "Читаємо · день четвертий" },
      formula: "Rdz 1, 14–19",
      promptPlace: "before",
      prompt: {
        pl: "Dwa duże ciała jaśniejące: większe rządzi dniem, mniejsze — nocą. Nie zgaduj nazw spoza tekstu, jeśli ich tu nie ma — werset mówi „ciała jaśniejące” i gwiazdy.",
        ua: "Два великі світила: більше править днем, менше — ніччю. Не вигадуй назв поза текстом: вірш каже «світила» і зорі."
      },
      text: {
        pl: [
          "*14* A potem Bóg rzekł: «Niechaj powstaną ciała niebieskie, świecące na sklepieniu nieba, aby oddzielały dzień od nocy, aby wyznaczały pory roku, dni i lata; *15* aby były ciałami jaśniejącymi na sklepieniu nieba i aby świeciły nad ziemią». I stało się tak. *16* Bóg uczynił dwa duże ciała jaśniejące: większe, aby rządziło dniem, i mniejsze, aby rządziło nocą, oraz gwiazdy. *17* Umieścił je Bóg na sklepieniu nieba, aby świeciły nad ziemią; *18* aby rządziły dniem i nocą i oddzielały światłość od ciemności. A widział Bóg, że były dobre.",
          "*19* I tak upłynął wieczór i poranek – dzień czwarty."
        ],
        ua: [
          "14 А потім Бог сказав: «Нехай постануть небесні тіла, що світять на склепінні неба, щоб відділяли день від ночі, щоб визначали пори року, дні і роки; 15 щоб були світилами на склепінні неба і щоб світили над землею». І сталося так. 16 Бог учинив два великі світила: більше, щоб правило днем, і менше, щоб правило ніччю, а також зорі. 17 Бог помістив їх на склепінні неба, щоб світили над землею; 18 щоб правили днем і ніччю і відділяли світло від темряви. А Бог бачив, що було добре.",
          "19 І так минув вечір і ранок — день четвертий."
        ]
      },
      task: {
        id: "t15-s07-dzien4",
        type: "single-choice",
        question: {
          pl: "Po co — według wersetów 14–18 — są ciała jaśniejące na sklepieniu?",
          ua: "Навіщо — за віршами 14–18 — світила на склепінні?"
        },
        options: [
          { id: "a", label: { pl: "Oddzielają dzień od nocy, wyznaczają pory, dni i lata, świecą nad ziemią.", ua: "Відділяють день від ночі, визначають пори, дні й роки, світять над землею." } },
          { id: "b", label: { pl: "Żeby Zeus miał latarnię na Olimpie.", ua: "Щоб Зевс мав ліхтар на Олімпі." } },
          { id: "c", label: { pl: "Tylko po to, by ozdobić komiks.", ua: "Лише щоб прикрасити комікс." } }
        ],
        answer: "a",
        hint: {
          pl: "Werset 14 zaczyna się od „aby”. Wypisz te „aby”.",
          ua: "Вірш 14 починається з «щоб». Випиши ці «щоб»."
        },
        explanation: {
          pl: "Tekst: oddzielać dzień i noc, pory roku, świecić nad ziemią. Nie Zeus i nie komiks.",
          ua: "Текст: відділяти день і ніч, пори року, світити над землею."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień piąty", ua: "Читаємо · день п’ятий" },
      formula: "Rdz 1, 20–23",
      promptPlace: "before",
      prompt: {
        pl: "Wody i powietrze. Tu po raz pierwszy Bóg *błogosławi* istoty żywe: «Bądźcie płodne i mnóżcie się».",
        ua: "Води і повітря. Тут уперше Бог *благословляє* живі істоти: «Будьте плодючі і розмножуйтеся»."
      },
      text: {
        pl: [
          "*20* Potem Bóg rzekł: «Niechaj się zaroją wody od roju istot żywych, a ptactwo niechaj lata nad ziemią, pod sklepieniem nieba!» *21* Tak stworzył Bóg wielkie potwory morskie i wszelkiego rodzaju pływające istoty żywe, którymi zaroiły się wody, oraz wszelkie ptactwo skrzydlate różnego rodzaju. Bóg widząc, że były dobre, *22* pobłogosławił je tymi słowami: «Bądźcie płodne i mnóżcie się, abyście zapełniały wody morskie, a ptactwo niechaj się rozmnaża na ziemi».",
          "*23* I tak upłynął wieczór i poranek – dzień piąty."
        ],
        ua: [
          "20 Потім Бог сказав: «Нехай закишать води роєм живих істот, а птаство нехай літає над землею, під склепінням неба!» 21 Так створив Бог великих морських потвор і всякого роду живі істоти, що плавають, якими закишіли води, а також усяке крилате птаство різного роду. Бог, бачачи, що було добре, 22 поблагословив їх словами: «Будьте плодючі і розмножуйтеся, щоб ви наповнювали води морські, а птаство нехай розмножується на землі».",
          "23 І так минув вечір і ранок — день п’ятий."
        ]
      },
      task: {
        id: "t15-s08-dzien5",
        type: "single-choice",
        question: {
          pl: "Kogo Bóg stwarza w dniu piątym?",
          ua: "Кого Бог творить у п’ятому дні?"
        },
        options: [
          { id: "a", label: { pl: "Istoty w wodach (m.in. wielkie potwory morskie) oraz ptactwo.", ua: "Істот у водах (зокрема великих морських потвор) і птаство." } },
          { id: "b", label: { pl: "Tylko człowieka.", ua: "Лише людину." } },
          { id: "c", label: { pl: "Tylko trawy i drzewa.", ua: "Лише трави і дерева." } }
        ],
        answer: "a",
        hint: {
          pl: "Werset 20–21: wody i sklepienie nieba. Kto tam mieszka?",
          ua: "Вірш 20–21: води і склепіння неба. Хто там живе?"
        },
        explanation: {
          pl: "Dzień 5: wody (ryby, potwory morskie) i ptaki. Rośliny — dzień 3. Człowiek — dzień 6.",
          ua: "День 5: води і птахи. Рослини — день 3. Людина — день 6."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · dzień szósty", ua: "Читаємо · день шостий" },
      formula: "Rdz 1, 24–31  ·  glosa: niewiasta",
      promptPlace: "before",
      prompt: {
        pl: "Najpierw zwierzęta lądowe, potem człowiek. Glosa z pola: *niewiasta – kobieta*. Ostatnie zdanie dnia: wszystko było *bardzo* dobre.",
        ua: "Спочатку звірі суходолу, потім людина. Глоса з поля: *niewiasta – жінка*. Останнє речення дня: усе було *дуже* добре."
      },
      text: {
        pl: [
          "*24* Potem Bóg rzekł: «Niechaj ziemia wyda istoty żywe różnego rodzaju: bydło, zwierzęta pełzające i dzikie zwierzęta według ich rodzajów!» I stało się tak. *25* Bóg uczynił różne rodzaje dzikich zwierząt, bydła i wszelkich zwierząt pełzających po ziemi. I widział Bóg, że były dobre. *26* A wreszcie rzekł Bóg: «Uczyńmy człowieka na Nasz obraz, podobnego Nam. Niech panuje nad rybami morskimi, nad ptactwem powietrznym, nad bydłem, nad ziemią i nad wszystkimi zwierzętami pełzającymi po ziemi!» *27* Stworzył więc Bóg człowieka na swój obraz, na obraz Boży go stworzył: stworzył mężczyznę i niewiastę. *28* Po czym Bóg im błogosławił, mówiąc do nich: «Bądźcie płodni i rozmnażajcie się, abyście zaludnili ziemię i uczynili ją sobie poddaną; abyście panowali nad rybami morskimi, nad ptactwem powietrznym i nad wszystkimi zwierzętami pełzającymi po ziemi». *29* I rzekł Bóg: «Oto wam daję wszelką roślinę przynoszącą ziarno po całej ziemi i wszelkie drzewo, którego owoc ma w sobie nasienie: dla was będą one pokarmem. *30* A dla wszelkiego zwierzęcia polnego i dla wszelkiego ptactwa w powietrzu, i dla wszystkiego, co się porusza po ziemi i ma w sobie pierwiastek życia, będzie pokarmem wszelka trawa zielona». I stało się tak. *31* A Bóg widział, że wszystko, co uczynił, było bardzo dobre.",
          "I tak upłynął wieczór i poranek – dzień szósty."
        ],
        ua: [
          "24 Потім Бог сказав: «Нехай земля видасть живі істоти різного роду: худобу, істот, що плазують, і диких звірів за їхніми родами!» І сталося так. 25 Бог учинив різні роди диких звірів, худоби і всіх істот, що плазують по землі. І бачив Бог, що було добре. 26 А наостанок сказав Бог: «Сотворімо людину на Наш образ, подібну до Нас. Нехай панує над морськими рибами, над птаством повітряним, над худобою, над землею і над усіма тваринами, що плазують по землі!» 27 Тож створив Бог людину на свій образ, на образ Божий її створив: створив чоловіка і невісту. 28 Потім Бог поблагословив їх, кажучи: «Будьте плодючі і розмножуйтеся, щоб заселили землю і підкорили її собі; щоб панували над морськими рибами, над птаством повітряним і над усіма тваринами, що плазують по землі». 29 І сказав Бог: «Ось даю вам усяку рослину, що приносить зерно по всій землі, і всяке дерево, плід якого має в собі насіння: вони будуть вам поживою. 30 А для всякої польової тварини, і для всякого птаства в повітрі, і для всього, що рухається по землі і має в собі початок життя, поживою буде всяка зелена трава». І сталося так. 31 А Бог бачив, що все, що вчинив, було дуже добре.",
          "І так минув вечір і ранок — день шостий."
        ]
      },
      task: {
        id: "t15-s09-dzien6",
        type: "single-choice",
        question: {
          pl: "Co w wersecie 27 znaczy niewiasta?",
          ua: "Що у вірші 27 означає niewiasta?"
        },
        options: [
          { id: "a", label: { pl: "Kobieta (glosa z pola).", ua: "Жінка (глоса з поля)." } },
          { id: "b", label: { pl: "Sklepienie nieba.", ua: "Склепіння неба." } },
          { id: "c", label: { pl: "Numer rozdziału.", ua: "Номер розділу." } }
        ],
        answer: "a",
        hint: {
          pl: "Pomarańczowa glosa na s. 35: niewiasta – …",
          ua: "Помаранчева глоса на с. 35: niewiasta – …"
        },
        explanation: {
          pl: "Pole: niewiasta – kobieta. Bóg stworzył mężczyznę i niewiastę. Sklepienie było w dniu 2.",
          ua: "Поле: niewiasta – жінка. Бог створив чоловіка і невісту."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól i oznaczenia", ua: "Слова з полів і позначення" },
      promptPlace: "before",
      prompt: {
        pl: "Dwie glosy z pól s. 34–35 i dwa słowa z ramki o Biblii. Znaczenie *w tym tekście*.",
        ua: "Дві глоси з полів с. 34–35 і два слова з рамки про Біблію. Значення *в цьому тексті*."
      },
      rows: [
        { pl: "sklepienie — tu: niebo", ua: "sklepienie — тут: небо" },
        { pl: "niewiasta — kobieta", ua: "niewiasta — жінка" },
        { pl: "rozdział — część księgi (tu: duża cyfra 1)", ua: "rozdział — частина книги (тут: велика цифра 1)" },
        { pl: "werset — numerowane zdanie w rozdziale (małe cyfry)", ua: "werset — пронумероване речення в розділі (малі цифри)" }
      ],
      task: {
        id: "t15-s10-glosy",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna *w tym tekście*?",
          ua: "Яка пара правильна *в цьому тексті*?"
        },
        options: [
          { id: "a", label: { pl: "sklepienie = niebo; niewiasta = kobieta.", ua: "sklepienie = небо; niewiasta = жінка." } },
          { id: "b", label: { pl: "sklepienie = Hades; niewiasta = Cerber.", ua: "sklepienie = Аїд; niewiasta = Цербер." } },
          { id: "c", label: { pl: "werset = cała Księga Rodzaju.", ua: "werset = уся Книга Буття." } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie pomarańczowe glosy. Czy Hades jest na polach s. 34–35?",
          ua: "Дві помаранчеві глоси. Чи Аїд є на полях с. 34–35?"
        },
        explanation: {
          pl: "Pola: sklepienie – niebo; niewiasta – kobieta. Werset to jedno zdanie, nie cała księga. Hades był w lekcji 14.",
          ua: "Поля: sklepienie – небо; niewiasta – жінка. Вірш — одне речення, не вся книга."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · etapy i plan", ua: "Завд. 1 · етапи і план" },
      formula: "s. 35  ·  zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Przeczytajcie biblijną opowieść, a następnie powiedzcie, z ilu etapów składało się dzieło stworzenia i w jaki sposób zostały one wydzielone. Program: złóż plan wydarzeń. Najpierw sam — potem klucz.",
        ua: "Прочитайте біблійну оповідь і скажіть, зі скількох етапів складалося творення і як їх виокремлено. Склади план. Спочатку сам."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szukaj zdania, które wraca po każdym dniu. Policz te dni. Potem plan w zeszycie: Dzień 1 … Dzień 6 …",
            ua: "Шукай речення, яке вертається після кожного дня. Полічи ці дні. Потім план: День 1 … День 6 …"
          }
        },
        {
          formula: "KLUCZ  ·  z tekstu",
          text: {
            pl: [
              "Sześć etapów = sześć dni. Wydzielone zdaniem: «I tak upłynął wieczór i poranek – dzień …».",
              "Plan: 1 światłość / dzień i noc. 2 sklepienie = niebo. 3 ląd, morze, rośliny. 4 ciała jaśniejące i gwiazdy. 5 istoty wodne i ptaki. 6 zwierzęta lądowe oraz mężczyzna i niewiasta."
            ],
            ua: [
              "Шість етапів = шість днів. Виокремлені реченням: «І так минув вечір і ранок — день …».",
              "План: 1 світло. 2 склепіння = небо. 3 суша, море, рослини. 4 світила і зорі. 5 істоти вод і птахи. 6 звірі суходолу та чоловік і невіста."
            ]
          }
        }
      ],
      task: {
        id: "t15-s11-etapy",
        type: "single-choice",
        question: {
          pl: "Z ilu etapów składa się to dzieło stworzenia i czym je wydzielono?",
          ua: "Зі скількох етапів складається це творення і чим їх виокремлено?"
        },
        options: [
          { id: "a", label: { pl: "Z sześciu dni; wydziela je zdanie o wieczorze i poranku.", ua: "З шести днів; виокремлює речення про вечір і ранок." } },
          { id: "b", label: { pl: "Z dwóch dni: tylko światłość i człowiek.", ua: "З двох днів: лише світло і людина." } },
          { id: "c", label: { pl: "Z dwunastu rozdziałów Księgi Rodzaju na tych stronach.", ua: "З дванадцяти розділів Книги Буття на цих сторінках." } }
        ],
        answer: "a",
        hint: {
          pl: "Ile razy jest «dzień pierwszy / drugi / … szósty»? Jaka duża cyfra jest tylko jedna?",
          ua: "Скільки разів є «день перший / … шостий»? Яка велика цифра лише одна?"
        },
        explanation: {
          pl: "Jeden rozdział (1), sześć dni. Każdy dzień zamyka wieczór i poranek. Nie dwanaście rozdziałów.",
          ua: "Один розділ (1), шість днів. Кожен день закриває вечір і ранок."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · piękne czytanie", ua: "Завд. 2 · красиве читання" },
      formula: "s. 36  ·  USTNIE  ·  grupy",
      promptPlace: "before",
      prompt: {
        pl: "Przygotujcie piękne czytanie całego tekstu. a) grupy = dni; b) tempo, wyróżnij słowa, którymi Bóg powołuje («Niechaj…»); nastrój; powtarzające się sformułowania; c) odczytajcie całość; d) nagranie (można z muzyką). Program: ktoś przewodniczy i ustala zasady.",
        ua: "Підготуйте красиве читання. а) групи = дні; б) темп, виділіть «Нехай…», настрій, повтори; в) прочитайте все; г) запис. Хтось керує правилами."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie: 1) tempo (wolno, uroczyście). 2) jak wyróżnić «Niechaj…» (pauza, trochę głośniej). 3) nastrój: spokój, podziw — nie krzyk. Potem lista powtórzeń.",
            ua: "У зошиті: 1) темп (повільно, урочисто). 2) як виділити «Нехай…». 3) настрій: спокій, подив. Потім список повторів."
          }
        },
        {
          formula: "WZÓR zasad  ·  EduMost",
          text: {
            pl: [
              "Powtórzenia: «I tak upłynął wieczór i poranek»; «Bóg widział, że były dobre»; «I stało się tak»; słowa Boga w «Niechaj…».",
              "Nagranie: jedna osoba czyta dzień, inna pilnuje pauz, trzecia odpala ciszę / cichą muzykę między dniami — bez przekrzykiwania tekstu."
            ],
            ua: [
              "Повтори: «І так минув вечір і ранок»; «Бог бачив, що було добре»; «І сталося так»; «Нехай…».",
              "Запис: один читає день, інший пильнує паузи, третій — тиха музика між днями."
            ]
          }
        }
      ],
      task: {
        id: "t15-s12-czytanie",
        type: "multiple-choice",
        question: {
          pl: "Które sformułowania NA PEWNO wracają w tym tekście? Zaznacz wszystkie pewne.",
          ua: "Які звороти НАПЕВНО вертаються в цьому тексті? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "«I tak upłynął wieczór i poranek – dzień …»", ua: "«І так минув вечір і ранок — день …»" } },
          { id: "b", label: { pl: "«Bóg widział, że były dobre» / «było bardzo dobre».", ua: "«Бог бачив, що було добре» / «було дуже добре»." } },
          { id: "c", label: { pl: "«PYK!» i «O jejku!»", ua: "«PYK!» і «O jejku!»" } },
          { id: "d", label: { pl: "Słowa Boga zaczynające się od «Niechaj…»", ua: "Слова Бога, що починаються з «Нехай…»" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Przeczytaj końce dni. Czy w Księdze Rodzaju jest PYK!?",
          ua: "Прочитай кінці днів. Чи в Книзі Буття є PYK!?"
        },
        explanation: {
          pl: "Wieczór i poranek, „były dobre”, «Niechaj…» — tak. PYK! to komiks z lekcji 12.",
          ua: "Вечір і ранок, «було добре», «Нехай…» — так. PYK! — комікс з уроку 12."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · pierwszy człowiek", ua: "Завд. 3 · перша людина" },
      formula: "s. 36  ·  USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "W imieniu pierwszego człowieka opisz, jak wygląda właśnie stworzony świat i jakie ten widok budzi emocje. Pisz ja: widzę, słyszę, czuję. Nie dodawaj Olimpu ani Hadesu — to inna lekcja.",
        ua: "Від імені першої людини опиши щойно створений світ і які емоції будить цей вид. Пиши я: бачу, чую, відчуваю. Не додавай Олімпу чи Аїду."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szkic: niebo / światłość; rośliny; ptaki i wody; zwierzęta; ja i niewiasta. 5–7 zdań. Potem wzór — nie jedyna wersja.",
            ua: "Ескіз: небо / світло; рослини; птахи і води; звірі; я і невіста. 5–7 речень."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyny tekst",
          text: {
            pl: [
              "Widzę światłość oddzieloną od nocy i sklepienie pełne ciał jaśniejących.",
              "Słyszę ptaki pod niebem; wody tętnią istotami. Ziemia pachnie trawą i owocem.",
              "Czuję podziw i spokój: Bóg powiedział, że to wszystko jest bardzo dobre. Stoję obok niewiasty — nie jesteśmy sami."
            ],
            ua: [
              "Бачу світло, відділене від ночі, і склепіння зі світилами.",
              "Чую птахів; води повні істот. Земля пахне травою і плодом.",
              "Відчуваю подив і спокій: Бог сказав, що все дуже добре. Стою поруч із невістою."
            ]
          }
        }
      ],
      task: {
        id: "t15-s13-czlowiek",
        type: "true-false",
        question: {
          pl: "Czy w tym opisie wolno napisać, że pierwszy człowiek mieszka w pałacu Zeusa na Olimpie — bo „to też początek świata”?",
          ua: "Чи в цьому описі можна написати, що перша людина живе в палаці Зевса на Олімпі — бо «це теж початок світу»?"
        },
        answer: false,
        hint: {
          pl: "Zadanie każe opisać świat z Księgi Rodzaju. Czy Zeus jest w tym fragmencie?",
          ua: "Завдання: світ з Книги Буття. Чи Зевс є в цьому уривку?"
        },
        explanation: {
          pl: "Nie. To Biblia, nie mit grecki. Olimp i Zeus były na lekcji 14. Tu: sklepienie, rośliny, zwierzęta, mężczyzna i niewiasta.",
          ua: "Ні. Це Біблія, не грецький міф. Олімп був на уроці 14."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · ilustracja", ua: "Завд. 4 · ілюстрація" },
      formula: "s. 36  ·  praca plastyczna",
      promptPlace: "before",
      prompt: {
        pl: "Wykonaj w dowolnej formie pracę plastyczną jako ilustrację fragmentu lub całego opisu stwarzania. Program: możesz potem zagrać w «Zgadnij, z jakiej opowieści pochodzi to stworzenie świata?» — ale podpisz źródło: Księga Rodzaju, nie mit grecki.",
        ua: "Зроби ілюстрацію фрагмента або всього опису творення. Можна гра «Здогадайся, з якої оповіді це творення світу?» — але підпиши джерело: Книга Буття, не грецький міф."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Wybierz JEDEN dzień albo cały pasek sześciu kadrów jak iluminacja. Na odwrocie: dzień, wersety, jedno zdanie z tekstu. Potem wskazówki.",
            ua: "Обери ОДИН день або шість кадрів як ілюмінація. На звороті: день, вірші, одне речення з тексту."
          }
        },
        {
          formula: "WSKAZÓWKI  ·  EduMost",
          text: {
            pl: [
              "Dzień 1: ciemne wody i jasna smuga światła. Dzień 4: dwa kręgi (większy / mniejszy) + gwiazdy.",
              "Dzień 6: para ludzi i zwierzęta — bez Zeusa, bez Cerbera.",
              "Konkurs: kolega zgaduje dzień i księgę. Punkt za «Księga Rodzaju, dzień …», zero za «Olimp»."
            ],
            ua: [
              "День 1: темні води і смуга світла. День 4: два кола + зорі.",
              "День 6: пара людей і звірі — без Зевса, без Цербера.",
              "Конкурс: друг здогадується день і книгу. Бал за «Книга Буття, день …»."
            ]
          }
        }
      ],
      task: {
        id: "t15-s14-ilustracja",
        type: "single-choice",
        question: {
          pl: "Co MUSI być na ilustracji do tego zadania, jeśli ma zgadzać się z lekcją 15?",
          ua: "Що МАЄ бути на ілюстрації до цього завдання, якщо вона пасує до уроку 15?"
        },
        options: [
          { id: "a", label: { pl: "Wybrany etap (albo wszystkie dni) z Księgi Rodzaju — podpisany.", ua: "Обраний етап (або всі дні) з Книги Буття — з підписом." } },
          { id: "b", label: { pl: "Tylko pałac Zeusa i Cerber, bez podpisu źródła.", ua: "Лише палац Зевса і Цербер, без підпису джерела." } },
          { id: "c", label: { pl: "Tylko dyktando z ch na kartce w kratkę.", ua: "Лише диктант з ch на аркуші в клітинку." } }
        ],
        answer: "a",
        hint: {
          pl: "Zad. 4: ilustracja fragmentu albo całego opisu stwarzania z tych stron.",
          ua: "Завд. 4: ілюстрація фрагмента або всього опису творення з цих сторінок."
        },
        explanation: {
          pl: "Praca ma pokazać ten biblijny opis. Mit grecki był wczoraj. Dyktando — inna lekcja.",
          ua: "Робота має показати цей біблійний опис. Грецький міф був учора."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu. Jeśli nie umiesz tych punktów, wróć do ramki na s. 34 i do końców dni.",
        ua: "Це забираєш у зошит. Якщо не вмієш цих пунктів — повернись до рамки на с. 34 і до кінців днів."
      },
      items: [
        { pl: "Księga Rodzaju, rozdział 1, wersety 1–31 (Biblia Tysiąclecia).", ua: "Книга Буття, розділ 1, вірші 1–31 (Biblia Tysiąclecia)." },
        { pl: "Sześć dni; każdy zamyka wieczór i poranek. Plan: światłość → niebo → ląd i rośliny → świecidła → wody i ptaki → zwierzęta i człowiek.", ua: "Шість днів; кожен закриває вечір і ранок. План: світло → небо → суша і рослини → світила → води і птахи → звірі і людина." },
        { pl: "sklepienie = niebo; niewiasta = kobieta. Rozdział = duża 1; werset = mała cyfra.", ua: "sklepienie = небо; niewiasta = жінка. Розділ = велика 1; вірш = мала цифра." },
        { pl: "To opis biblijny, nie mit o Olimpie z lekcji 14.", ua: "Це біблійний опис, не міф про Олімп з уроку 14." }
      ],
      task: {
        id: "t15-s15-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz to, czego wymaga lekcja 15?",
          ua: "Яка нотатка показує, що вмієш те, чого вимагає урок 15?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Sześć dni w Księdze Rodzaju. Werset i rozdział. Sklepienie = niebo, niewiasta = kobieta. To nie mit grecki.",
              ua: "Шість днів у Книзі Буття. Вірш і розділ. Sklepienie = небо, niewiasta = жінка. Це не грецький міф."
            }
          },
          { id: "b", label: { pl: "Świat stworzyli olbrzymi między gwiazdami i Cerber.", ua: "Світ створили велетні між зірками і Цербер." } },
          { id: "c", label: { pl: "Nic nie trzeba umieć — to była tylko lekcja o komiksie.", ua: "Нічого не треба вміти — це був лише урок про комікс." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 34–36? Biblia, dni, glosy. Czy Cerber jest w Księdze Rodzaju na tych stronach?",
          ua: "Що на с. 34–36? Біблія, дні, глоси. Чи Цербер є в Книзі Буття на цих сторінках?"
        },
        explanation: {
          pl: "Lekcja 15 to Księga Rodzaju. Olbrzymi i Cerber — lekcja 14. Komiks — 12–13.",
          ua: "Урок 15 — Книга Буття. Велетні і Цербер — урок 14."
        }
      }
    }
  ]
};
