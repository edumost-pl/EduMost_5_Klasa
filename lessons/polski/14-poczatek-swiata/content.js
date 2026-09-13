function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE = "Styl: akwarela podręcznikowa GWO «Między nami» klasa 5 — ciepłe beże, zieleń oliwkowa, morela; miękki kontur tuszu, płaskie cienie, zero napisów na kadrze, zero znaku wodnego. PNG, kadr poziomy.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 31–33  ·  Wojciech Rzehak, Początek świata",
      promptPlace: "before",
      prompt: {
        pl: "To nie lista życzeń — to sprawdzian na koniec. Polski tekst jest pierwszy. Włącz 🇺🇦: pod każdym akapitem pojawi się ukraińskie tłumaczenie. Glosy z pól i klucze zadań są schowane.",
        ua: "Це не побажання — це перевірка наприкінці. Польська мова перша. Увімкни 🇺🇦: під абзацом буде переклад. Глоси з полів і ключі сховані."
      },
      items: [
        { pl: "opowiem, jak Grecy wyobrażali sobie świat: *Ziemia – Olimp – Hades*;", ua: "розкажу, як греки уявляли світ: *Земля – Олімп – Аїд*;" },
        { pl: "wskażę *cechy mitu* i powiem, czym jest *mitologia*;", ua: "вкажу *риси міфу* і скажу, що таке *міфологія*;" },
        { pl: "wyjaśnię glosy z pól: *Ereb, nominal, obol*;", ua: "поясню глоси з полів: *Ereb, nominal, obol*;" },
        { pl: "porównam rysunki innych ludów z wyobrażeniem Greków;", ua: "порівняю малюнки інших народів з уявленням греків;" },
        { pl: "nie zmyślam fragmentów oznaczonych […].", ua: "не вигадую уривків, позначених […]." }
      ],
      task: {
        id: "t14-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Opowiedzieć grecki obraz świata (Olimp, Ziemia, Hades).", ua: "Розповісти грецьку картину світу (Олімп, Земля, Аїд)." } },
          { id: "b", label: { pl: "Podać cechy mitu i znaczenie słowa mitologia.", ua: "Назвати риси міфу і значення слова міфологія." } },
          { id: "c", label: { pl: "Tylko nauczyć się dyktanda z rz niewymiennym.", ua: "Лише вивчити диктант з rz незмінним." } },
          { id: "d", label: { pl: "Wyjaśnić Ereb, nominal i obol z pól podręcznika.", ua: "Пояснити Ereb, nominal і obol з полів підручника." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę „Po tej lekcji umiem”. Czy jest tam dyktando?",
          ua: "Подивись на список «Після уроку вмію». Чи є там диктант?"
        },
        explanation: {
          pl: "Dziś: mit, obraz świata, glosy. Rz niewymienne było na lekcjach 7–8.",
          ua: "Сьогодні: міф, картина світу, глоси. rz незмінне було на уроках 7–8."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Pytania do ilustracji", ua: "Питання до ілюстрації" },
      formula: "s. 31  ·  otwarcie rozdziału",
      visual: vizGh("t14-otwarcie.png", {
        alt: {
          pl: "Zeus na tronie z piorunem; dziewczyna ze zwojem przy kolumnie",
          ua: "Зевс на троні з блискавкою; дівчина зі сувоєм біля колони"
        },
        title: { pl: "Slajd · Odpowiedzi na ważne pytania", ua: "Слайд · Відповіді на важливі питання" },
        prompt: {
          pl: IMG_STYLE + " Wstaw ilustrację ze s. 31: po prawej brodaty Zeus w białej chuście i wieńcu laurowym siedzi na kamiennym tronie z wysokim oparciem; prawa ręka unosi piorun, lewa otwarta. U stóp tronu brązowa amfora. Obok stoi dziewczyna w białej sukni, ciemne włosy, trzyma zwój. W tle jasna kolumna dorycka i zieleń. Przytnij znak wodny podręcznika. Nie maluj tekstu „Odpowiedzi na ważne pytania” na obrazku.",
          ua: "Ілюстрація зі с. 31: Зевс на троні з блискавкою, дівчина зі сувоєм, колона. Акварель підручника, без водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Program: ułóż pytania do zdjęcia. Najpierw 3 pytania w zeszycie (kto? co trzyma? po co ta scena?). Potem sprawdź, które pytania PASUJĄ do tego kadru.",
        ua: "Програма: склади питання до малюнка. Спочатку 3 питання в зошиті. Потім перевір, які ПАСУЮТЬ до цього кадру."
      },
      text: {
        pl: [
          "Wojciech Rzehak, *Początek świata* — fragment książki *Mitologia*.",
          "Rozdział: Jak starożytni Grecy wyobrażali sobie świat?"
        ],
        ua: [
          "Войцех Рзегак, *Початок світу* — уривок книжки *Міфологія*.",
          "Розділ: Як давні греки уявляли собі світ?"
        ]
      },
      task: {
        id: "t14-s02-pytania",
        type: "multiple-choice",
        question: {
          pl: "Które pytania PASUJĄ do tej ilustracji? Zaznacz wszystkie pewne.",
          ua: "Які питання ПАСУЮТЬ до цієї ілюстрації? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kto siedzi na tronie i co trzyma w ręce?", ua: "Хто сидить на троні і що тримає в руці?" } },
          { id: "b", label: { pl: "Kto stoi obok i co ma w dłoniach?", ua: "Хто стоїть поруч і що в нього в руках?" } },
          { id: "c", label: { pl: "Ile kosztuje bilet do kina w Rzeszowie?", ua: "Скільки коштує квиток у кіно в Жешуві?" } },
          { id: "d", label: { pl: "Czy to scena z opowieści o bogach, czy zdjęcie z lekcji matematyki?", ua: "Це сцена з оповіді про богів чи фото з уроку математики?" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pytanie ma wynikać z tego, CO WIDZISZ. Czego na rysunku nie ma?",
          ua: "Питання має випливати з того, ЩО БАЧИШ. Чого на малюнку немає?"
        },
        explanation: {
          pl: "Widać Zeusa z piorunem i dziewczynę ze zwojem. Ceny biletów na kadrze nie ma.",
          ua: "Видно Зевса з блискавкою і дівчину зі сувоєм. Ціни квитків на кадрі немає."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zdjęcie · Olimp", ua: "Фото · Олімп" },
      formula: "s. 32  ·  podpis: Olimp, Grecja",
      visual: vizGh("t14-olimp.png", {
        alt: {
          pl: "Ruiny jasnego kamienia na zboczu; w tle góra Olimp",
          ua: "Руїни світлого каменя на схилі; вдалині гора Олімп"
        },
        title: { pl: "Slajd · Olimp, Grecja", ua: "Слайд · Олімп, Греція" },
        prompt: {
          pl: "Zdjęcie dokumentalne jak w podręczniku (podpis: Olimp, Grecja). Ruiny jasnego wapienia na pierwszym planie, suche krzewy, za nimi zbocze i masyw góry pod błękitnym niebem z lekkimi chmurami. Ostre południowe światło, naturalne kolory, bez ludzi na pierwszym planie. Nie dodawaj napisów ani ramek. Przytnij znak wodny. PNG poziomy.",
          ua: "Документальне фото: руїни на схилі, гора Олімп, синє небо. Без напису і водяного знака."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "To zdjęcie z podręcznika, nie rysunek mitologiczny. Ułóż 2 pytania: co widać? dlaczego autor wstawił je obok opisu siedziby bogów?",
        ua: "Це фото з підручника, не міфічний малюнок. Склади 2 питання: що видно? навіщо воно поруч з описом оселі богів?"
      },
      text: {
        pl: [
          "W tekście Olimp to góra w północnej Grecji, na pograniczu Macedonii i Tesalii — i siedziba bogów.",
          "Zdjęcie pokazuje miejsce na Ziemi. Mit opowiada, co Grecy *wyobrażali sobie* na tej górze."
        ],
        ua: [
          "У тексті Олімп — гора на півночі Греції, на межі Македонії і Фессалії — і оселя богів.",
          "Фото показує місце на Землі. Міф розповідає, що греки *уявляли* на цій горі."
        ]
      },
      task: {
        id: "t14-s03-olimp-foto",
        type: "true-false",
        question: {
          pl: "Czy zdjęcie „Olimp, Grecja” oznacza, że na szczycie na pewno stoi pałac Zeusa, który można dziś zwiedzić jak muzeum?",
          ua: "Чи фото «Олімп, Греція» означає, що на вершині напевно стоїть палац Зевса, який сьогодні можна відвідати як музей?"
        },
        answer: false,
        hint: {
          pl: "Co jest faktem (góra w Grecji), a co wyobrażeniem z mitu (pałac bogów)?",
          ua: "Що є фактом (гора в Греції), а що уявленням з міфу (палац богів)?"
        },
        explanation: {
          pl: "Olimp istnieje. Pałac Zeusa to wyobrażenie z mitu, nie bilet do muzeum na szczycie.",
          ua: "Олімп існує. Палац Зевса — уявлення з міфу, не квиток до музею на вершині."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapit 1", ua: "Читаємо · абзац 1" },
      formula: "s. 31  ·  skąd się wziął świat",
      promptPlace: "before",
      prompt: {
        pl: "Czytaj na głos. Włącz 🇺🇦, jeśli chcesz tłumaczenie pod akapitem. Miejsc oznaczonych […] w podręczniku nie uzupełniamy.",
        ua: "Читай уголос. Увімкни 🇺🇦 — переклад під абзацом. Місця […] у підручнику не дописуємо."
      },
      text: {
        pl: [
          "Starożytni Grecy wiele rozmyślali o tym, skąd wziął się świat, na którym przyszło im żyć. Rozmawiali ze sobą, dyskutowali, prowadzili spory. Nie byli pewni, kiedy pojawili się pierwsi bogowie i w jaki sposób zaistniał na Ziemi rodzaj ludzki. W pewnym momencie […] odwołali się więc do wyobraźni. W ten sposób stworzyli całe teorie, oparte na domysłach i obserwacji otaczającej ich przyrody. A dookoła nich działy się rzeczy dziwne i przerażające. Z nieba lała się woda, znienacka uderzały pioruny, które zmiatały z powierzchni ziemi najpotężniejsze drzewa. Starzy ludzie, pytani o te niezrozumiałe zjawiska, odpowiadali, że dzieje się tak za sprawą olbrzymów, mieszkających gdzieś wysoko, między gwiazdami. Jeden z nich miał moc zsyłania na ziemię ognistych płomieni, inny sprawiał, że co dzień na niebie pojawiało się słońce, inny czuwał nad pomyślnością przedsięwzięć wojennych. Starzy ludzie opowiadali, tłumaczyli, młodsi słuchali i wyobrażali sobie, jak żyją ci tajemniczy giganci."
        ],
        ua: [
          "Давні греки багато роздумували про те, звідки взявся світ, у якому їм випало жити. Розмовляли між собою, дискутували, сперечалися. Вони не були певні, коли з’явилися перші боги і яким чином на Землі постав людський рід. У певний момент […] тож звернулися до уяви. Так вони створили цілі теорії, оперті на здогадах і спостереженні навколишньої природи. А довкола діялися речі дивні й жахливі. З неба лилася вода, зненацька вдаряли блискавки, які змітали з поверхні землі наймогутніші дерева. Старі люди, яких питали про ці незрозумілі явища, відповідали, що так діється через велетнів, які живуть десь високо, між зірками. Один із них мав силу слати на землю вогняні полум’я, інший робив так, що щодня на небі з’являлося сонце, ще інший пильнував успіх воєнних справ. Старі люди розповідали, пояснювали, молодші слухали і уявляли, як живуть ці таємничі гіганти."
        ]
      },
      task: {
        id: "t14-s04-ak1",
        type: "single-choice",
        question: {
          pl: "Skąd — według tego akapitu — wzięły się pierwsze wyjaśnienia piorunów i ulewy?",
          ua: "Звідки — за цим абзацом — узялися перші пояснення блискавок і зливи?"
        },
        options: [
          { id: "a", label: { pl: "Z obserwacji przyrody, domysłów i opowieści starych ludzi o olbrzymach między gwiazdami.", ua: "Зі спостереження природи, здогадів і оповідей старих людей про велетнів між зірками." } },
          { id: "b", label: { pl: "Z dyktanda ortograficznego w szkole w Rzeszowie.", ua: "З орфографічного диктанту в школі в Жешуві." } },
          { id: "c", label: { pl: "Grecy od razu znali nowoczesną prognozę pogody.", ua: "Греки одразу знали сучасний прогноз погоди." } }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź zdania o przyrodzie, wyobraźni i starych ludziach.",
          ua: "Знайди речення про природу, уяву і старих людей."
        },
        explanation: {
          pl: "Tekst: teorie z domysłów i obserwacji; starzy ludzie mówili o olbrzymach. Nie ma tu prognozy pogody ani Rzeszowa.",
          ua: "Текст: теорії зі здогадів і спостережень; старі люди казали про велетнів."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapit 2", ua: "Читаємо · абзац 2" },
      formula: "s. 31–32  ·  co było „na początku”",
      promptPlace: "before",
      prompt: {
        pl: "Tu mędrcy *nie byli zgodni*. Zaznacz w zeszycie trzy wersje początku świata. Glosa z pola: *Ereb*.",
        ua: "Тут мудреці *не були згодні*. Познач у зошиті три версії початку світу. Глоса з поля: *Ereb*."
      },
      text: {
        pl: [
          "W ten sposób powstały pierwsze wierzenia religijne. Pojawiały się w nich liczne istoty wyższe i potężniejsze od ludzi […]. One to miały stworzyć świat i wszystkie żyjące na nim istoty. Ludzie byli jednak dociekliwi, pytali, co było „na początku”. Tu mędrcy nie byli zgodni. Jedni twierdzili, że dawno, dawno temu była jedynie Ciemność, z której wynurzył się Chaos, a później z ich związku powstały Noc, Dzień, Ereb i Powietrze. Według innych Greków, z Chaosu jako pierwsza wyłoniła się Eurynome, bogini wszechrzeczy. Jeszcze inni starcy uważali, iż wszystko, co żyje, wynurzyło się z opasującej świat rzeki Okeanos."
        ],
        ua: [
          "Так постали перші релігійні вірування. У них з’являлися численні істоти вищі й могутніші за людей […]. Саме вони мали створити світ і всі живі істоти на ньому. Люди були однак допитливі, питали, що було «на початку». Тут мудреці не були згодні. Одні твердили, що дуже давно була лише Темрява, з якої виринув Хаос, а пізніше з їхнього зв’язку постали Ніч, День, Ереб і Повітря. За іншими греками, з Хаосу першою вийшла Евринома, богиня всесвіту. Ще інші старці вважали, що все живе виринуло з ріки Океан, яка оперізує світ."
        ]
      },
      task: {
        id: "t14-s05-ak2",
        type: "multiple-choice",
        question: {
          pl: "Które wersje „początku” NA PEWNO są w tym akapicie? Zaznacz wszystkie pewne.",
          ua: "Які версії «початку» НАПЕВНО є в цьому абзаці? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ciemność → Chaos → Noc, Dzień, Ereb, Powietrze.", ua: "Темрява → Хаос → Ніч, День, Ереб, Повітря." } },
          { id: "b", label: { pl: "Z Chaosu wyłania się Eurynome, bogini wszechrzeczy.", ua: "З Хаосу виходить Евринома, богиня всесвіту." } },
          { id: "c", label: { pl: "Świat powstał z makówki Miłosza.", ua: "Світ постав із маківки Мілоша." } },
          { id: "d", label: { pl: "Wszystko, co żyje, wynurzyło się z rzeki Okeanos.", ua: "Усе живе виринуло з ріки Океан." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Trzy zdania: jedni… według innych… jeszcze inni…",
          ua: "Три речення: одні… за іншими… ще інші…"
        },
        explanation: {
          pl: "Trzy wersje z tekstu: Ciemność i Chaos; Eurynome; rzeka Okeanos. Makówka to inna lekcja.",
          ua: "Три версії з тексту: Темрява і Хаос; Евринома; ріка Океан. Маківка — інший урок."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapit 3", ua: "Читаємо · абзац 3" },
      formula: "s. 32  ·  bogowie, duchy, fatum",
      promptPlace: "before",
      prompt: {
        pl: "Krótki akapit — a ważne słowo: *fatum*. […] zostawiamy puste.",
        ua: "Короткий абзац — і важливе слово: *fatum*. […] лишаємо порожнім."
      },
      text: {
        pl: [
          "Powoli powstawał coraz liczniejszy świat zamieszkiwany przez bogów. Grecy wierzyli w przeróżne duchy – zadaniem jednych było rządzenie poszczególnymi istotami żywymi (roślinami, drzewami, zwierzętami), inne panowały nad pewnymi obszarami (polanami, lasami, rzeczkami, strumykami). […] całym światem władało fatum – potężny los. […]"
        ],
        ua: [
          "Поволі поставав дедалі численніший світ, заселений богами. Греки вірили в різні духи: одним було правити окремими живими істотами (рослинами, деревами, тваринами), інші панували над певними місцями (галявинами, лісами, річечками, струмками). […] усім світом володіло fatum — могутня доля. […]"
        ]
      },
      task: {
        id: "t14-s06-ak3",
        type: "single-choice",
        question: {
          pl: "Co w tym akapicie znaczy fatum?",
          ua: "Що в цьому абзаці означає fatum?"
        },
        options: [
          { id: "a", label: { pl: "Potężny los, który władał całym światem.", ua: "Могутня доля, яка володіла всім світом." } },
          { id: "b", label: { pl: "Tylko nazwa rzeki w Hadesie.", ua: "Лише назва ріки в Аїді." } },
          { id: "c", label: { pl: "Imię trzygłowego psa.", ua: "Ім’я триголового пса." } }
        ],
        answer: "a",
        hint: {
          pl: "Tekst sam tłumaczy po myślniku: fatum – …",
          ua: "Текст сам пояснює після тире: fatum – …"
        },
        explanation: {
          pl: "Dosłownie w akapicie: fatum – potężny los. Pies to Cerber, rzeka to Styks.",
          ua: "У абзаці: fatum — могутня доля. Пес — Цербер, ріка — Стікс."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapit 4", ua: "Читаємо · абзац 4" },
      formula: "s. 32  ·  Ziemia i Olimp  ·  zad. 1",
      promptPlace: "before",
      prompt: {
        pl: "To jeden z dwóch akapitów do schematu (zad. 1). Palcem: gdzie Ziemia, gdzie Okeanos, gdzie Olimp, gdzie pałac Zeusa.",
        ua: "Це один із двох абзаців до схеми (завд. 1). Пальцем: де Земля, де Океан, де Олімп, де палац Зевса."
      },
      text: {
        pl: [
          "Ziemia była płaska, opierała się […] na żółwiach, krokodylach lub słoniach. Opływała ją rzeka Okeanos. Nad ziemią dominował Olimp, góra, na której swe siedziby mieli bogowie. Najwyżej był usytuowany pałac Zeusa, poniżej swe posiadłości mieli pozostali bogowie. Olimp znajdował się w północnej Grecji, na pograniczu dwóch krain, Macedonii i Tesalii. […]"
        ],
        ua: [
          "Земля була пласка, спиралася […] на черепах, крокодилів або слонів. Її обтікала ріка Океан. Над землею панував Олімп — гора, на якій мали оселі боги. Найвище був палац Зевса, нижче — володіння решти богів. Олімп був на півночі Греції, на межі двох країв — Македонії і Фессалії. […]"
        ]
      },
      task: {
        id: "t14-s07-ak4",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO należy do greckiego obrazu świata w akapicie 4? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО належить до грецької картини світу в абзаці 4? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Ziemia jest płaska; opływa ją Okeanos.", ua: "Земля пласка; її обтікає Океан." } },
          { id: "b", label: { pl: "Nad ziemią góra Olimp; najwyżej pałac Zeusa.", ua: "Над землею гора Олімп; найвище палац Зевса." } },
          { id: "c", label: { pl: "Ziemia to kula jak w atlasie z lekcji geografii XXI wieku.", ua: "Земля — куля, як в атласі з уроку географії XXI століття." } },
          { id: "d", label: { pl: "Olimp leży w północnej Grecji (Macedonia i Tesalia).", ua: "Олімп лежить на півночі Греції (Македонія і Фессалія)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy w tym akapicie ziemia jest kulą?",
          ua: "Чи в цьому абзаці земля — куля?"
        },
        explanation: {
          pl: "Tekst: płaska ziemia, Okeanos, Olimp, pałac Zeusa, północna Grecja. Nie ma tu kuli z atlasu.",
          ua: "Текст: пласка земля, Океан, Олімп, палац Зевса. Немає кулі з атласу."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapit 5", ua: "Читаємо · абзац 5" },
      formula: "s. 32  ·  Hades, Cerber, Styks, Charon  ·  zad. 1",
      promptPlace: "before",
      prompt: {
        pl: "Drugi akapit do schematu. Tu są też glosy z pól: *nominal*, *obol*. Nie zgaduj imion spoza tekstu.",
        ua: "Другий абзац до схеми. Тут також глоси з полів: *nominal*, *obol*. Не вигадуй імен поза текстом."
      },
      text: {
        pl: [
          "Pod ziemią rozciągało się królestwo podziemi, zwane Hadesem od imienia boga, który władał tą ponurą krainą. Wejścia do Hadesu strzegł przerażający trzygłowy pies Cerber. Za wejściem do Hadesu rozlewała swe wody rzeka Styks (według innych był to Acheron), która aż dziewięciokrotnie opływała królestwo zmarłych. Przedostać się przez nią można było tylko w łodzi. Przewoźnikiem przez Styks był Charon, jemu też trzeba było wręczyć monetę o nominale jednego obola, jako opłatę za przewóz. Stąd wziął się w starożytności zwyczaj wkładania monety w usta zmarłego – pod język kładziono obola „dla przewoźnika”. Kto raz przepłynął tę rzekę, nie miał już odwrotu, musiał na zawsze pozostać w Hadesie. […]"
        ],
        ua: [
          "Під землею простягалося царство підземель, зване Аїдом від імені бога, який правив цим похмурим краєм. Вхід до Аїду стеріг жахливий триголовий пес Цербер. За входом розливала свої води ріка Стікс (за іншими це був Ахерон), яка аж дев’ятикратно обтікала царство мертвих. Перейти її можна було лише в човні. Перевізником через Стікс був Харон; йому треба було дати монету номіналом один обол як плату за перевіз. Звідси в давнину постав звичай класти монету в рот померлого — під язик клали обол «для перевізника». Хто раз переплив цю ріку, вже не мав вороття: мусив назавжди лишитися в Аїді. […]"
        ]
      },
      task: {
        id: "t14-s08-ak5",
        type: "single-choice",
        question: {
          pl: "Po co zmarłemu wkładano obola pod język?",
          ua: "Навіщо померлому клали обол під язик?"
        },
        options: [
          { id: "a", label: { pl: "Jako opłatę dla Charona za przewóz przez Styks.", ua: "Як плату Харонові за перевіз через Стікс." } },
          { id: "b", label: { pl: "Żeby Cerber miał zabawkę.", ua: "Щоб Цербер мав іграшку." } },
          { id: "c", label: { pl: "Żeby kupić bilet na Olimp.", ua: "Щоб купити квиток на Олімп." } }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź cudzysłów: „dla przewoźnika”. Kim jest przewoźnik?",
          ua: "Знайди лапки: «для перевізника». Хто перевізник?"
        },
        explanation: {
          pl: "Charon przewoził dusze. Obol o nominale jednego obola = opłata. Stąd zwyczaj z monetą w ustach.",
          ua: "Харон перевозив душі. Обол — плата. Звідси звичай з монетою в роті."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · akapity 6–7", ua: "Читаємо · абзаци 6–7" },
      formula: "s. 32  ·  rzeki, Tartar, Elizjum",
      promptPlace: "before",
      prompt: {
        pl: "Dwa ostatnie akapity fragmentu. Zapamiętaj: Lete = zapomnienie; Tartar ≠ Elizjum.",
        ua: "Два останні абзаци уривка. Запам’ятай: Лета = забуття; Тартар ≠ Елізій."
      },
      text: {
        pl: [
          "W podziemiach znajdowały się jeszcze trzy inne rzeki: Kokytos ([…] „Płacz i Żal” – lodowata rzeka jęków), Lete („Zapomnienie”) i Flegeton („Płomienisty” – rzeka ognista), a wody każdej z nich miały osobliwe właściwości. Jeśli dusza zmarłego napiła się wody z Lete, natychmiast zapominała o wszystkim, czego doświadczyła w swym ziemskim życiu. […]",
          "Najgłębszym i najstraszniejszym miejscem w Hadesie był Tartar – otchłań, w której panowały wieczne ciemności. Trafiały tam dusze największych złoczyńców. Pilnowały ich trzy Erynie, boginie zemsty, narodzone z krwi okaleczonego Uranosa. Z kolei dusze ludzi dobrze i pobożnie żyjących, a przede wszystkim herosów, którzy wsławili się wieloma bohaterskimi czynami, trafiały do Elizjum, na Wyspy Błogosławione. Panowała tam wieczna wiosna, na łąkach zaś, zwanych Polami Elizejskimi, odbywały się bezustanne biesiady."
        ],
        ua: [
          "У підземеллях були ще три інші ріки: Кокіт ([…] «Плач і Жа́ль» — крижана ріка стогонів), Лета («Забуття») і Флегетон («Полум’яний» — вогняна ріка); води кожної мали особливі властивості. Якщо душа померлого напилася води з Лети, одразу забувала все, що пережила в земному житті. […]",
          "Найглибшим і найстрашнішим місцем в Аїді був Тартар — безодня, де панувала вічна темрява. Туди потрапляли душі найбільших злочинців. Їх стерегли три Еринії, богині помсти, народжені з крові скаліченого Урана. Натомість душі людей, що жили добре й побожно, а передусім героїв, які уславилися подвигами, потрапляли до Елізію, на Блаженні острови. Там панувала вічна весна, а на луках, званих Елісейськими полями, точилися безперервні бенкети."
        ]
      },
      task: {
        id: "t14-s09-ak67",
        type: "single-choice",
        question: {
          pl: "Kto trafiał do Tartaru, a kto do Elizjum?",
          ua: "Хто потрапляв до Тартару, а хто до Елізію?"
        },
        options: [
          { id: "a", label: { pl: "Tartar: najwięksi złoczyńcy. Elizjum: ludzie dobrzy i herosi.", ua: "Тартар: найбільші злочинці. Елізій: добрі люди і герої." } },
          { id: "b", label: { pl: "Tartar: Zeus i pozostali bogowie z Olimpu.", ua: "Тартар: Зевс і решта богів з Олімпу." } },
          { id: "c", label: { pl: "Elizjum: tylko Cerber i Charon.", ua: "Елізій: лише Цербер і Харон." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatni akapit: dwie drogi dusz. Która jest otchłanią ciemności?",
          ua: "Останній абзац: два шляхи душ. Який є безоднею темряви?"
        },
        explanation: {
          pl: "Tartar = otchłań złoczyńców. Elizjum / Wyspy Błogosławione = dobrzy i herosi, wieczna wiosna.",
          ua: "Тартар = безодня злочинців. Елізій = добрі й герої, вічна весна."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól podręcznika", ua: "Слова з полів підручника" },
      promptPlace: "before",
      prompt: {
        pl: "Tylko te trzy glosy są na polach s. 31–32. Przeczytaj polską ramkę na głos, potem ukraińską kolumnę. Znaczenie *w tym tekście*.",
        ua: "Лише ці три глоси є на полях с. 31–32. Прочитай польську рамку вголос, потім українську колонку."
      },
      rows: [
        { pl: "Ereb — w mitologii greckiej bóg ciemności podziemnej", ua: "Ereb — у грецькій міфології бог підземної темряви" },
        { pl: "nominal — wartość", ua: "nominal — вартість / номінал" },
        { pl: "obol — w starożytnej Grecji drobna moneta z miedzi i srebra", ua: "obol — у давній Греції дрібна монета з міді і срібла" }
      ],
      task: {
        id: "t14-s10-glosy",
        type: "single-choice",
        question: {
          pl: "Co znaczy: moneta o nominale jednego obola?",
          ua: "Що означає: moneta o nominale jednego obola?"
        },
        options: [
          { id: "a", label: { pl: "Moneta, której wartość (nominal) wynosi jeden obol — drobną grecką monetę.", ua: "Монета, вартість (nominal) якої — один обол, дрібна грецька монета." } },
          { id: "b", label: { pl: "Imię boga ciemności podziemnej.", ua: "Ім’я бога підземної темряви." } },
          { id: "c", label: { pl: "Nazwa pałacu Zeusa.", ua: "Назва палацу Зевса." } }
        ],
        answer: "a",
        hint: {
          pl: "Złóż dwie glosy: nominal + obol. Kto jest bogiem ciemności?",
          ua: "Склади дві глоси: nominal + obol. Хто бог темряви?"
        },
        explanation: {
          pl: "Nominal = wartość. Obol = drobna moneta. Ereb = bóg ciemności podziemnej — inne słowo z pola.",
          ua: "Nominal = вартість. Obol = дрібна монета. Ereb = бог темряви — інше слово з поля."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · schemat świata", ua: "Завд. 1 · схема світу" },
      formula: "s. 33  ·  akapity 4. i 5.",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie 4. i 5. akapitu podaj informacje na temat wyobrażeń starożytnych Greków o świecie. Uzupełnij schemat w zeszycie. Najpierw sam — potem przykład EduMost.",
        ua: "На основі 4 і 5 абзацу подай відомості про уявлення давніх греків про світ. Доповни схему в зошиті. Спочатку сам."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t14-schemat.png", {
            alt: {
              pl: "Schemat: niebo z pytajnikami, pień, człowiek, podziemie z pytajnikami",
              ua: "Схема: небо зі знаками питання, стовбур, людина, підземелля"
            },
            title: { pl: "Slajd · schemat ze s. 33", ua: "Слайд · схема зі с. 33" },
            prompt: {
              pl: "Wstaw schemat ze s. 33 zad. 1: czarny kreskowy rysunek na białym tle jak w ćwiczeniu GWO. U góry korona drzewa / niebo i trzy pytajniki. Pionowy pień. Po lewej mała postać człowieka. Na dole korzenie / podziemie, dwie postacie i pytajniki. Bez koloru albo bardzo jasny szary. Bez znaku wodnego. PNG.",
              ua: "Схема зі с. 33: дерево-світ, людина, підземелля, знаки питання. Чорний контур, біле тло."
            }
          }),
          text: {
            pl: "W zeszycie trzy poziomy: NAD ziemią · ZIEMIA · POD ziemią. Dopisz z akapitów 4–5, nie z wyobraźni.",
            ua: "У зошиті три рівні: НАД землею · ЗЕМЛЯ · ПІД землею. Допиши з абзаців 4–5."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  sprawdź z akapitami 4–5",
          text: {
            pl: [
              "Nad ziemią: Olimp, pałac Zeusa najwyżej, siedziby bogów.",
              "Ziemia: płaska; opiera się na żółwiach, krokodylach lub słoniach; opływa ją Okeanos.",
              "Pod ziemią: Hades; Cerber; Styks (albo Acheron); Charon i obol."
            ],
            ua: [
              "Над землею: Олімп, палац Зевса найвище.",
              "Земля: пласка; черепахи / крокодили / слони; ріка Океан.",
              "Під землею: Аїд; Цербер; Стікс (або Ахерон); Харон і обол."
            ]
          }
        }
      ],
      task: {
        id: "t14-s11-schemat",
        type: "single-choice",
        question: {
          pl: "Gdzie w schemacie z akapitów 4–5 umieścisz Cerbera i Charona?",
          ua: "Де в схемі з абзаців 4–5 поставиш Цербера і Харона?"
        },
        options: [
          { id: "a", label: { pl: "Pod ziemią, w królestwie Hadesu.", ua: "Під землею, у царстві Аїда." } },
          { id: "b", label: { pl: "W pałacu Zeusa na Olimpie.", ua: "У палаці Зевса на Олімпі." } },
          { id: "c", label: { pl: "Na rzece Okeanos jako kapitanów statku wycieczkowego.", ua: "На ріці Океан як капітанів круїзного судна." } }
        ],
        answer: "a",
        hint: {
          pl: "Akapit 5 zaczyna się od słów: Pod ziemią…",
          ua: "Абзац 5 починається: Під землею…"
        },
        explanation: {
          pl: "Cerber strzeże wejścia do Hadesu, Charon wozi przez Styks. To podziemie, nie Olimp.",
          ua: "Цербер стереже вхід до Аїду, Харон возить через Стікс. Це підземелля, не Олімп."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2a · skąd wierzenia?", ua: "Завд. 2а · звідки вірування?" },
      formula: "s. 33  ·  cytat z tekstu",
      promptPlace: "before",
      prompt: {
        pl: "Wyjaśnijcie, jak powstały wierzenia starożytnych Greków. Na poparcie swoich spostrzeżeń zacytujcie odpowiednie fragmenty przeczytanego tekstu. Najpierw zeszyt, potem wzór — nie jedyna dobra cytacja.",
        ua: "Поясніть, як постали вірування давніх греків. На підтвердження процитуйте фрагменти тексту. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Szukaj w akapicie 1: przyroda, wyobraźnia, starzy ludzie. Zapisz 1–2 cytaty w cudzysłowie.",
            ua: "Шукай в абзаці 1: природа, уява, старі люди. Запиши 1–2 цитати в лапках."
          }
        },
        {
          formula: "WZÓR EduMost  ·  cytaty z akapitu 1",
          text: {
            pl: [
              "Wierzenia powstały, gdy Grecy odwołali się do wyobraźni i obserwowali przyrodę.",
              "Cytat: „stworzyli całe teorie, oparte na domysłach i obserwacji otaczającej ich przyrody”.",
              "Cytat: starzy ludzie odpowiadali, że pioruny to sprawa olbrzymów „mieszkających gdzieś wysoko, między gwiazdami”."
            ],
            ua: [
              "Вірування постали, коли греки звернулися до уяви і спостерігали природу.",
              "Цитата: теорії «оперті на здогадах і спостереженні навколишньої природи».",
              "Цитата: старі люди казали, що блискавки — справа велетнів «між зірками»."
            ]
          }
        }
      ],
      task: {
        id: "t14-s12-wierzenia",
        type: "true-false",
        question: {
          pl: "Czy według tekstu wierzenia Greków wzięły się wyłącznie z podręcznika do fizyki?",
          ua: "Чи за текстом вірування греків узялися виключно з підручника фізики?"
        },
        answer: false,
        hint: {
          pl: "Akapit 1: wyobraźnia, przyroda, opowieści. Czy jest tam fizyka szkolna?",
          ua: "Абзац 1: уява, природа, оповіді. Чи є там шкільна фізика?"
        },
        explanation: {
          pl: "Nie: tekst mówi o domysłach, obserwacji przyrody i opowieściach starych ludzi — nie o lekcji fizyki.",
          ua: "Ні: текст каже про здогади, спостереження природи і оповіді старих людей."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2b · różne wersje", ua: "Завд. 2б · різні версії" },
      formula: "s. 33",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie tekstu podajcie różne wersje wierzeń starożytnych Greków i wyjaśnijcie przyczyny tych różnic.",
        ua: "На основі тексту назвіть різні версії вірувань давніх греків і поясніть причини цих відмінностей."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Wypisz wersje początku (akapit 2) i jedną różnicę z podziemi (Styks / Acheron). Potem przyczyna z tekstu.",
            ua: "Випиши версії початку (абзац 2) і одну відмінність з підземелля (Стікс / Ахерон). Потім причина з тексту."
          }
        },
        {
          formula: "KLUCZ  ·  z tekstu, nie z Wikipedii",
          text: {
            pl: [
              "Wersje początku: Ciemność i Chaos; Eurynome z Chaosu; wszystko z rzeki Okeanos.",
              "Inna różnica: rzeka u wejścia do Hadesu — Styks albo Acheron.",
              "Przyczyna: „Tu mędrcy nie byli zgodni.” Opowieści przekazywano ustnie, więc różni starcy uczyli różnie."
            ],
            ua: [
              "Версії початку: Темрява і Хаос; Евринома з Хаосу; все з ріки Океан.",
              "Інша відмінність: Стікс або Ахерон.",
              "Причина: «Тут мудреці не були згодні.» Оповіді передавали усно."
            ]
          }
        }
      ],
      task: {
        id: "t14-s13-wersje",
        type: "single-choice",
        question: {
          pl: "Dlaczego — według tekstu — Grecy mieli różne wersje początku świata?",
          ua: "Чому — за текстом — греки мали різні версії початку світу?"
        },
        options: [
          { id: "a", label: { pl: "Mędrcy nie byli zgodni; różni starcy opowiadali różnie.", ua: "Мудреці не були згодні; різні старці розповідали по-різному." } },
          { id: "b", label: { pl: "Bo każdy miał inny atlas z XXI wieku.", ua: "Бо в кожного був інший атлас XXI століття." } },
          { id: "c", label: { pl: "Bo Zeus kazał napisać trzy podręczniki do polskiego.", ua: "Бо Зевс наказав написати три підручники польської." } }
        ],
        answer: "a",
        hint: {
          pl: "Jedno zdanie z akapitu 2: Tu mędrcy…",
          ua: "Одне речення з абзацу 2: Тут мудреці…"
        },
        explanation: {
          pl: "Tekst: mędrcy nie byli zgodni. Stąd trzy wersje początku. Nie atlas i nie trzy podręczniki.",
          ua: "Текст: мудреці не були згодні. Звідси три версії початку."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Co to jest mit?", ua: "Що таке міф?" },
      formula: "s. 33  ·  ramka",
      promptPlace: "before",
      prompt: {
        pl: "To definicja z podręcznika. Po lekcji musisz umieć powiedzieć ją swoimi słowami i podać przykład z *Początku świata*.",
        ua: "Це означення з підручника. Після уроку маєш уміти сказати його своїми словами і дати приклад з *Початку світу*."
      },
      text: {
        pl: [
          "Mity to dawno powstałe opowieści (pierwotnie przekazywane ustnie), wyrażające wierzenia danej społeczności, na przykład starożytnych Greków, Rzymian, Egipcjan, Słowian. Opowiadają o powstaniu świata, stworzeniu człowieka, pochodzeniu i czynach bogów oraz wielkich bohaterów. Podobnie jak baśnie czy legendy, mity zawierają elementy fantastyczne (i nieprawdopodobne zdarzenia, bohaterów o niezwykłych właściwościach). Zbiór mitów nazywamy mitologią."
        ],
        ua: [
          "Міфи — це давні оповіді (спочатку усні), що виражають вірування спільноти, наприклад давніх греків, римлян, єгиптян, слов’ян. Вони розповідають про постання світу, створення людини, походження і вчинки богів та великих героїв. Подібно до казок чи легенд, міфи містять фантастичні елементи (і неймовірні події, героїв із надзвичайними властивостями). Збір міфів називаємо міфологією."
        ]
      },
      task: {
        id: "t14-s14-mit",
        type: "multiple-choice",
        question: {
          pl: "Które cechy — według ramki — NA PEWNO ma mit? Zaznacz wszystkie pewne.",
          ua: "Які риси — за рамкою — НАПЕВНО має міф? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Dawna opowieść, dawniej ustna; wyraża wierzenia społeczności.", ua: "Давня оповідь, колись усна; виражає вірування спільноти." } },
          { id: "b", label: { pl: "Mówi m.in. o powstaniu świata, bogach, bohaterach.", ua: "Каже зокрема про постання світу, богів, героїв." } },
          { id: "c", label: { pl: "To to samo co dyktando z ch.", ua: "Це те саме, що диктант з ch." } },
          { id: "d", label: { pl: "Ma elementy fantastyczne; zbiór mitów = mitologia.", ua: "Має фантастичні елементи; збір міфів = міфологія." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Trzy zdania ramki + ostatnie zdanie o mitologii.",
          ua: "Три речення рамки + останнє речення про міфологію."
        },
        explanation: {
          pl: "Ramka: ustna opowieść, wierzenia, temat bogów/świata, fantastyka, mitologia = zbiór mitów. Nie dyktando.",
          ua: "Рамка: усна оповідь, вірування, боги/світ, фантастика, міфологія = збір міфів."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · inne wyobrażenia świata", ua: "Завд. 3 · інші уявлення світу" },
      formula: "s. 33  ·  Babilończycy i wikingowie",
      promptPlace: "before",
      prompt: {
        pl: "Przyjrzyjcie się rysunkom przedstawiającym wyobrażenia świata według różnych ludów. W czym przypominają wyobrażenia Greków? Jakie zauważacie różnice? Najpierw oba rysunki, potem klucz — tylko to, co widać i co było w tekście o Grekach.",
        ua: "Подивіться на малюнки світу різних народів. У чому схожі на греків? Які відмінності? Спочатку обидва малюнки, потім ключ."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t14-babilon.png", {
            alt: {
              pl: "Świat według Babilończyków: góra-drzewo z oceanu, niebo z gwiazdami",
              ua: "Світ за вавилонянами: гора-дерево з океану, небо із зорями"
            },
            title: { pl: "Slajd · świat według Babilończyków", ua: "Слайд · світ за вавилонянами" },
            prompt: {
              pl: IMG_STYLE + " Wstaw rysunek ze s. 33 podpisany «świat według Babilończyków»: z okrągłego oceanu wyrasta wielka góra-drzewo, korzenie w wodzie, na zboczach tarasy i ludzie, korona sięga nieba z gwiazdami i ptakami. Kreska tuszu + sepia i zieleń. Przytnij znak wodny. PNG.",
              ua: "Малюнок зі с. 33: вавилонський світ — гора-дерево з океану. Акварель підручника, без водяного знака."
            }
          }),
          text: {
            pl: "Pokaż następny krok — drugi rysunek (wikingowie).",
            ua: "Покажи наступний крок — другий малюнок (вікінги)."
          }
        },
        {
          visual: vizGh("t14-wikingowie.png", {
            alt: {
              pl: "Świat według wikingów: wielkie drzewo światów z korzeniami i koroną",
              ua: "Світ за вікінгами: велике дерево світів з корінням і кроною"
            },
            title: { pl: "Slajd · świat według wikingów", ua: "Слайд · світ за вікінгами" },
            prompt: {
              pl: IMG_STYLE + " Wstaw rysunek ze s. 33 podpisany «świat według wikingów»: ogromny jesion (drzewo światów) z koroną pełną liści i ptaków, pień, korzenie w kilku poziomach, wokół okręgi / sfery. Kreska tuszu, zieleń i brąz. Przytnij znak wodny. PNG.",
              ua: "Малюнок зі с. 33: світ вікінгів — велике дерево світів. Акварель підручника, без водяного знака."
            }
          }),
          text: {
            pl: "Porównaj z Grekami: poziomy świata, woda dookoła, drzewo albo góra. Potem klucz.",
            ua: "Порівняй з греками: рівні світу, вода довкола, дерево або гора. Потім ключ."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  z rysunków + tekst o Grekach",
          text: {
            pl: [
              "Podobnie: świat ma WARSTWY (góra / środek / dół); wokół bywa WIELKA WODA; pośrodku wznosi się góra albo drzewo.",
              "Inaczej: u Greków siedzibą bogów jest *Olimp*, pod ziemią *Hades* — nie to samo drzewo co u wikingów. Babiloński rysunek kładzie świat na oceanie jak na tarczy; Grecy mówią o płaskiej ziemi i rzece Okeanos."
            ],
            ua: [
              "Схоже: світ має ШАРИ; довкола ВЕЛИКА ВОДА; посередині гора або дерево.",
              "Інакше: в греків оселя богів — *Олімп*, під землею *Аїд*. Вавилонський малюнок кладе світ на океан; греки кажуть про пласку землю і ріку Океан."
            ]
          }
        }
      ],
      task: {
        id: "t14-s15-porownanie",
        type: "multiple-choice",
        question: {
          pl: "Co jest PODOBNE w tych rysunkach i w tekście o Grekach? Zaznacz wszystkie pewne.",
          ua: "Що СХОЖЕ на цих малюнках і в тексті про греків? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Świat ma poziomy: góra / środek / dół.", ua: "Світ має рівні: гора / середина / низ." } },
          { id: "b", label: { pl: "Często pojawia się wielka woda wokół ziemi.", ua: "Часто є велика вода довкола землі." } },
          { id: "c", label: { pl: "Wszyscy malują ten sam pałac Zeusa jeden do jednego.", ua: "Усі малюють той самий палац Зевса один в один." } },
          { id: "d", label: { pl: "Pośrodku wznosi się góra albo wielkie drzewo.", ua: "Посередині височіє гора або велике дерево." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy na rysunku wikingów widać podpis „pałac Zeusa”?",
          ua: "Чи на малюнку вікінгів є підпис «палац Зевса»?"
        },
        explanation: {
          pl: "Podobne: warstwy, woda, oś świata (góra/drzewo). Pałac Zeusa jest grecki — nie kopiują go inne ludy na tych rysunkach.",
          ua: "Схоже: шари, вода, вісь світу. Палац Зевса — грецький, його тут не копіюють."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 4 · wypowiedź o początku świata", ua: "Завд. 4 · висловлювання про початок світу" },
      formula: "s. 33  ·  USTNIE  ·  program: plakat / głuchy telefon",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie wybranej mitologii (np. Indian Północnoamerykańskich, Azteków, Majów, Hindusów) przygotuj ustną wypowiedź o tym, jak powstał świat. Program lekcji: możesz zrobić też plakat ze *znajomości z tej lekcji* albo wymyślić zdanie do zabawy w głuchy telefon. Nie zmyślaj „faktów” spoza źródła, które wskaże nauczyciel.",
        ua: "На основі обраної міфології підготуй усну розповідь, як постав світ. Можна плакат зі знань з цього уроку або речення до гри «глухий телефон». Не вигадуй «фактів» поза джерелом учителя."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Plan 4 zdań: kto opowiadał mit → co było na początku → kto stworzył świat → jedno podobieństwo albo różnica wobec Greków. Potem wzór (to POMYSŁ EduMost, nie tekst z podręcznika).",
            ua: "План 4 речень: хто розповідав міф → що було на початку → хто створив світ → одна схожість або відмінність щодо греків."
          }
        },
        {
          formula: "WZÓR planu  ·  EduMost  ·  nie jedyna mitologia",
          text: {
            pl: [
              "Ustnie: „W mitologii, którą wybrałem/am, na początku… Potem… To podobne do Greków, bo też są warstwy świata / to inne, bo…”",
              "Plakat: tytuł *Jak powstał świat*; trzy poziomy jak w schemacie; 4 cechy mitu z ramki; źródło na dole.",
              "Głuchy telefon: wymyślasz JEDNO zdanie o Olimpie albo Hadesie — klasa przekazuje. Na końcu sprawdzacie, co zostało z oryginału."
            ],
            ua: [
              "Усно: «У міфології, яку я обрав/ла, на початку… Потім… Це схоже на греків / це інше, бо…»",
              "Плакат: назва, три рівні, 4 риси міфу, джерело внизу.",
              "Глухий телефон: ОДНЕ речення про Олімп або Аїд — клас передає."
            ]
          }
        }
      ],
      task: {
        id: "t14-s16-zad4",
        type: "true-false",
        question: {
          pl: "Czy w zadaniu 4 wolno przedstawić mit Azteków albo Majów jako „dokładnie to samo co akapit 4 o płaskiej ziemi i Olimpie” — bez żadnej różnicy?",
          ua: "Чи в завданні 4 можна подати міф ацтеків чи майя як «точно те саме, що абзац 4 про пласку землю і Олімп» — без жодної відмінності?"
        },
        answer: false,
        hint: {
          pl: "Zad. 3 kazało szukać podobieństw I różnic. Czy wszystkie ludy mają Olimp?",
          ua: "Завд. 3 казало шукати схожість І відмінності. Чи в усіх народів є Олімп?"
        },
        explanation: {
          pl: "Inna mitologia może być PODOBNA (warstwy, woda, bogowie), ale nie jest kopią greckiego Olimpu. Różnice trzeba nazwać.",
          ua: "Інша міфологія може бути СХОЖА, але це не копія грецького Олімпу. Відмінності треба назвати."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu. Jeśli nie umiesz powiedzieć tych czterech punktów, wróć do ramki i akapitów 4–5.",
        ua: "Це забираєш у зошит. Якщо не вмієш сказати ці чотири пункти — повернись до рамки і абзаців 4–5."
      },
      items: [
        { pl: "Mit = dawna (ustna) opowieść o wierzeniach; ma fantastykę; zbiór mitów = mitologia.", ua: "Міф = давня (усна) оповідь про вірування; є фантастика; збір міфів = міфологія." },
        { pl: "Grecy: płaska Ziemia + Okeanos; nad nią Olimp (Zeus); pod nią Hades (Cerber, Styks, Charon, obol).", ua: "Греки: пласка Земля + Океан; над нею Олімп (Зевс); під нею Аїд (Цербер, Стікс, Харон, обол)." },
        { pl: "Glosy: Ereb = bóg ciemności podziemnej; nominal = wartość; obol = drobna moneta.", ua: "Глоси: Ereb = бог підземної темряви; nominal = вартість; obol = дрібна монета." },
        { pl: "Wierzenia powstały z przyrody i wyobraźni; mędrcy nie byli zgodni, więc są różne wersje początku.", ua: "Вірування постали з природи й уяви; мудреці не були згодні — тому різні версії початку." }
      ],
      task: {
        id: "t14-s17-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że ODESZŁEŚ z lekcji 14 z tym, co trzeba umieć?",
          ua: "Яка нотатка показує, що ТИ ВИЙШОВ з уроку 14 з тим, що треба вміти?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Mit ma wierzenia i fantastykę. Grecy: Olimp – Ziemia – Hades. Ereb, nominal, obol. Różne wersje, bo mędrcy nie byli zgodni.",
              ua: "Міф має вірування і фантастику. Греки: Олімп – Земля – Аїд. Ereb, nominal, obol. Різні версії, бо мудреці не були згодні."
            }
          },
          { id: "b", label: { pl: "To była tylko lekcja o komiksie PYK! i Proxima B.", ua: "Це був лише урок про комікс PYK! і Proxima B." } },
          { id: "c", label: { pl: "Nic nie trzeba umieć — mit to to samo co przepis na makowiec.", ua: "Нічого не треба вміти — міф це те саме, що рецепт маковника." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 31–33? Mit, Grecy, glosy. Czy PYK! jest w tym rozdziale?",
          ua: "Що на с. 31–33? Міф, греки, глоси. Чи PYK! у цьому розділі?"
        },
        explanation: {
          pl: "Lekcja 14 to Rzehak i mit. Komiks był na 12–13. Makowiec — nie z tej ramki.",
          ua: "Урок 14 — Рзегак і міф. Комікс був на 12–13."
        }
      }
    }
  ]
};
